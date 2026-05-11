/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://github.com/wikimedia-gadgets/twinkle-core/tree/master/morebits}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/morebits}
 * @license CC-BY-SA-4.0 {@link https://www.qiuwenbaike.cn/wiki/H:CC-BY-SA-4.0}
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
    var navigator = globalThis2.navigator;
    var userAgent = navigator && navigator.userAgent;
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
    var Number2 = globalThis2.Number;
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
    var Node2 = function(value, end, source, nodes) {
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
        return new Node2(value, end, type ? null : slice(this.source, start, end), nodes);
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
        return this.node(PRIMITIVE, Number2(slice(source, startIndex, i)), startIndex, i);
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

// dist/morebits/morebits.js
require_es_json_parse();
var _templateObject;
var _templateObject2;
function _taggedTemplateLiteral(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
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
//! src/morebits/morebits.js
var import_ext_gadget = require("ext.gadget.Util");
/*! Twinkle.js - morebits.js */
(function morebits($) {
  const Morebits = {};
  window.Morebits = Morebits;
  Morebits.l10n = {
    /**
     * Local aliases for "redirect" magic word.
     * Check using api.php?action=query&format=json&meta=siteinfo&formatversion=2&siprop=magicwords
     */
    redirectTagAliases: ["#REDIRECT", "#重定向"],
    /**
     * Takes a string as argument and checks if it is a timestamp or not
     * If not, it returns null. If yes, it returns an array of integers
     * in the format [year, month, date, hour, minute, second]
     * which can be passed to Date.UTC()
     *
     * @param {string} str
     * @returns {number[] | null}
     */
    signatureTimestampFormat: (str) => {
      const rgxUTC = /(\d{4})年(\d{1,2})月(\d{1,2})日 \(.\) (\d{2}):(\d{2}) \(UTC\)/;
      const rgxCST = /(\d{4})年(\d{1,2})月(\d{1,2})日 \(.\) (\d{2}):(\d{2}) \(CST\)/;
      const match = rgxUTC.exec(str) || rgxCST.exec(str);
      const matchCST = rgxCST.exec(str);
      if (!match) {
        return null;
      }
      const month = Morebits.date.localeData.months.indexOf(match[4]);
      if (month === -1) {
        return null;
      }
      return matchCST ? [match[1], match[2] - 1, match[3], match[4] - 8, match[5]] : [match[1], match[2] - 1, match[3], match[4], match[5]];
    }
  };
  Morebits.userIsInGroup = (group) => {
    return mw.config.get("wgUserGroups").includes(group) || mw.config.get("wgGlobalGroups").includes(group);
  };
  Morebits.userIsSysop = Morebits.userIsInGroup("sysop") || Morebits.userIsInGroup("steward") || Morebits.userIsInGroup("qiuwen");
  Morebits.sanitizeIPv6 = (address) => {
    console.warn("[Morebits] NOTE: Morebits.sanitizeIPv6 was renamed to Morebits.ip.sanitizeIPv6 in February 2021, please use that instead");
    return Morebits.ip.sanitizeIPv6(address);
  };
  Morebits.isPageRedirect = () => {
    return !!(mw.config.get("wgIsRedirect") || document.querySelector("#softredirect") || document.querySelector(".box-RfD") || document.querySelector(".box-Redirect_category_shell"));
  };
  Morebits.pageNameNorm = mw.config.get("wgPageName").replace(/_/g, " ");
  Morebits.pageNameRegex = (pageName) => {
    if (pageName === "") {
      return "";
    }
    const [firstChar] = pageName;
    const remainder = Morebits.string.escapeRegExp(pageName.slice(1));
    if (mw.Title.phpCharToUpper(firstChar) !== firstChar.toLowerCase()) {
      return "[".concat(mw.Title.phpCharToUpper(firstChar)).concat(firstChar.toLowerCase(), "]").concat(remainder);
    }
    return Morebits.string.escapeRegExp(firstChar) + remainder;
  };
  Morebits.createHtml = (input) => {
    const fragment = document.createDocumentFragment();
    if (!input) {
      return fragment;
    }
    input = (0, import_ext_gadget.generateArray)(input);
    var _iterator = _createForOfIteratorHelper(input), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        const element = _step.value;
        if (element instanceof Node) {
          fragment.appendChild(element);
        } else {
          var _iterator2 = _createForOfIteratorHelper($.parseHTML(Morebits.createHtml.renderWikilinks(element))), _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              const node = _step2.value;
              fragment.appendChild(node);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return fragment;
  };
  Morebits.createHtml.renderWikilinks = (text) => {
    const ub = new Morebits.unbinder(text);
    ub.unbind("<code>", "</code>");
    ub.content = ub.content.replace(/\[\[:?(?:([^|\]]+?)\|)?([^\]|]+?)\]\]/g, (_, target, text_) => {
      target || (target = text_);
      return '<a rel="noopener" target="_blank" href="'.concat(mw.util.getUrl(target), '" title="').concat(target.replace(/"/g, "&#34;"), '">').concat(text_, "</a>");
    });
    return ub.rebind();
  };
  Morebits.namespaceRegex = (namespaces) => {
    namespaces = (0, import_ext_gadget.generateArray)(namespaces);
    const aliases = [];
    let regex;
    for (var _i = 0, _Object$entries = Object.entries(mw.config.get("wgNamespaceIds")); _i < _Object$entries.length; _i++) {
      const [name, number] = _Object$entries[_i];
      if (namespaces.includes(number)) {
        aliases[aliases.length] = [...name].map((char) => {
          return Morebits.pageNameRegex(char);
        }).join("");
      }
    }
    switch (aliases.length) {
      case 0:
        regex = "";
        break;
      case 1:
        [regex] = aliases;
        break;
      default:
        regex = "(?:".concat(aliases.join("|"), ")");
        break;
    }
    return regex;
  };
  Morebits.quickForm = function(event, eventType) {
    this.root = new Morebits.quickForm.element({
      type: "form",
      event,
      eventType
    });
  };
  Morebits.quickForm.prototype.render = function() {
    const ret = this.root.render();
    ret.names = {};
    return ret;
  };
  Morebits.quickForm.prototype.append = function(data) {
    return this.root.append(data);
  };
  Morebits.quickForm.element = function(data) {
    this.data = data;
    this.childs = [];
  };
  Morebits.quickForm.element.id = 0;
  Morebits.quickForm.element.prototype.append = function(data) {
    let child;
    if (data instanceof Morebits.quickForm.element) {
      child = data;
    } else {
      child = new Morebits.quickForm.element(data);
    }
    this.childs[this.childs.length] = child;
    return child;
  };
  Morebits.quickForm.element.prototype.render = function(internalSubgroupId) {
    const currentNode = this.compute(this.data, internalSubgroupId);
    var _iterator3 = _createForOfIteratorHelper(this.childs), _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
        const child = _step3.value;
        currentNode[1].appendChild(child.render());
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    return currentNode[0];
  };
  Morebits.quickForm.element.prototype.compute = function(data, inId) {
    let node;
    let childContainer = null;
    let label;
    const id = "".concat(inId ? "".concat(inId, "_") : "", "node_").concat(Morebits.quickForm.element.id++);
    if (data.adminonly && !Morebits.userIsSysop) {
      data.type = "hidden";
    }
    let i;
    let current;
    let subnode;
    switch (data.type) {
      case "form":
        node = document.createElement("form");
        node.className = "quickform";
        node.setAttribute("action", "javascript:void(0);");
        if (data.event) {
          node.addEventListener(data.eventType || "submit", data.event, false);
        }
        break;
      case "fragment":
        node = document.createDocumentFragment();
        return [node, node];
      case "select": {
        node = document.createElement("div");
        node.setAttribute("id", "div_".concat(id));
        if (data.label) {
          label = node.appendChild(document.createElement("label"));
          label.setAttribute("for", id);
          label.appendChild(Morebits.createHtml(data.label));
        }
        const select = node.appendChild(document.createElement("select"));
        if (data.event) {
          select.addEventListener("change", data.event, false);
        }
        if (data.multiple) {
          select.setAttribute("multiple", "multiple");
        }
        if (data.size) {
          select.setAttribute("size", data.size);
        }
        if (data.disabled) {
          select.disabled = true;
        }
        select.setAttribute("name", data.name);
        if (data.list) {
          for (i = 0; i < data.list.length; ++i) {
            current = data.list[i];
            if (current.list) {
              current.type = "optgroup";
            } else {
              current.type = "option";
            }
            subnode = this.compute(current);
            select.appendChild(subnode[0]);
          }
        }
        childContainer = select;
        break;
      }
      case "option":
        node = document.createElement("option");
        node.values = data.value;
        node.setAttribute("value", data.value);
        if (data.selected) {
          node.setAttribute("selected", "selected");
        }
        if (data.disabled) {
          node.disabled = true;
        }
        if (data.hidden) {
          node.setAttribute("hidden", "");
        }
        node.setAttribute("label", data.label);
        node.appendChild(document.createTextNode(data.label));
        break;
      case "optgroup":
        node = document.createElement("optgroup");
        node.setAttribute("label", data.label);
        if (data.list) {
          for (i = 0; i < data.list.length; ++i) {
            current = data.list[i];
            current.type = "option";
            subnode = this.compute(current);
            node.appendChild(subnode[0]);
          }
        }
        break;
      case "field":
        node = document.createElement("fieldset");
        label = node.appendChild(document.createElement("legend"));
        label.appendChild(Morebits.createHtml(data.label));
        if (data.name) {
          node.setAttribute("name", data.name);
        }
        if (data.disabled) {
          node.disabled = true;
        }
        break;
      case "checkbox":
      case "radio":
        node = document.createElement("div");
        if (data.list) {
          for (i = 0; i < data.list.length; ++i) {
            const curId = "".concat(id, "_").concat(i);
            current = data.list[i];
            let curDiv;
            if (current.type === "header") {
              curDiv = node.appendChild(document.createElement("h6"));
              curDiv.appendChild(document.createTextNode(current.label));
              if (current.tooltip) {
                Morebits.quickForm.element.generateTooltip(curDiv, current);
              }
              continue;
            }
            curDiv = node.appendChild(document.createElement("div"));
            if (current.hidden) {
              curDiv.setAttribute("hidden", "");
            }
            subnode = curDiv.appendChild(document.createElement("input"));
            subnode.values = current.value;
            subnode.setAttribute("value", current.value);
            subnode.setAttribute("type", data.type);
            subnode.setAttribute("id", curId);
            subnode.setAttribute("name", current.name || data.name);
            if (current.name) {
              subnode.setAttribute("data-single", "data-single");
            }
            if (current.checked) {
              subnode.checked = true;
            }
            if (current.disabled) {
              subnode.disabled = true;
            }
            label = curDiv.appendChild(document.createElement("label"));
            label.appendChild(Morebits.createHtml(current.label));
            label.setAttribute("for", curId);
            if (current.tooltip) {
              Morebits.quickForm.element.generateTooltip(label, current);
            }
            if (current.style) {
              label.setAttribute("style", current.style);
            }
            let event;
            if (current.subgroup) {
              let tmpgroup = current.subgroup;
              tmpgroup = (0, import_ext_gadget.generateArray)(tmpgroup);
              const subgroupRaw = new Morebits.quickForm.element({
                type: "div",
                id: "".concat(id, "_").concat(i, "_subgroup")
              });
              var _iterator4 = _createForOfIteratorHelper(tmpgroup), _step4;
              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
                  const el = _step4.value;
                  const newEl = {
                    ...el
                  };
                  newEl.type || (newEl.type = data.type);
                  newEl.name = "".concat(current.name || data.name, ".").concat(newEl.name);
                  subgroupRaw.append(newEl);
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }
              const subgroup = subgroupRaw.render(curId);
              subgroup.className = "quickformSubgroup";
              subnode.subgroup = subgroup;
              subnode.shown = false;
              event = (e) => {
                if (e.target.checked) {
                  e.target.parentNode.appendChild(e.target.subgroup);
                  if (e.target.type === "radio") {
                    const {
                      name
                    } = e.target;
                    if (e.target.form.names[name] !== void 0) {
                      e.target.form.names[name].parentNode.removeChild(e.target.form.names[name].subgroup);
                    }
                    e.target.form.names[name] = e.target;
                  }
                } else {
                  e.target.parentNode.removeChild(e.target.subgroup);
                }
              };
              subnode.addEventListener("change", event, true);
              if (current.checked) {
                subnode.parentNode.appendChild(subgroup);
              }
            } else if (data.type === "radio") {
              event = (e) => {
                if (e.target.checked) {
                  const {
                    name
                  } = e.target;
                  if (e.target.form.names[name] !== void 0) {
                    e.target.form.names[name].parentNode.removeChild(e.target.form.names[name].subgroup);
                  }
                  delete e.target.form.names[name];
                }
              };
              subnode.addEventListener("change", event, true);
            }
            if (data.event) {
              subnode.addEventListener("change", data.event, false);
            } else if (current.event) {
              subnode.addEventListener("change", current.event, true);
            }
          }
        }
        if (data.shiftClickSupport && data.type === "checkbox") {
          Morebits.checkboxShiftClickSupport(Morebits.quickForm.getElements(node, data.name));
        }
        break;
      // input is actually a text-type, so number here inherits the same stuff
      case "number":
      case "input":
        node = document.createElement("div");
        node.setAttribute("id", "div_".concat(id));
        if (data.hidden) {
          node.setAttribute("hidden", "");
        }
        if (data.label) {
          label = node.appendChild(document.createElement("label"));
          label.appendChild(Morebits.createHtml(data.label));
          label.setAttribute("for", data.id || id);
        }
        subnode = node.appendChild(document.createElement("input"));
        if (data.value) {
          subnode.setAttribute("value", data.value);
        }
        if (data.placeholder) {
          subnode.setAttribute("placeholder", data.placeholder);
        }
        subnode.setAttribute("name", data.name);
        if (data.type === "input") {
          subnode.setAttribute("type", "text");
        } else {
          subnode.setAttribute("type", "number");
          for (var _i2 = 0, _arr = ["min", "max", "step", "list"]; _i2 < _arr.length; _i2++) {
            const att = _arr[_i2];
            if (data[att]) {
              subnode.setAttribute(att, data[att]);
            }
          }
        }
        for (var _i3 = 0, _arr2 = ["value", "size", "placeholder", "maxlength"]; _i3 < _arr2.length; _i3++) {
          const att = _arr2[_i3];
          if (data[att]) {
            subnode.setAttribute(att, data[att]);
          }
        }
        for (var _i4 = 0, _arr3 = ["disabled", "required", "readonly"]; _i4 < _arr3.length; _i4++) {
          const att = _arr3[_i4];
          if (data[att]) {
            subnode.setAttribute(att, att);
          }
        }
        if (data.event) {
          subnode.addEventListener("keyup", data.event, false);
        }
        childContainer = subnode;
        break;
      case "dyninput": {
        const min = data.min || 1;
        const max = data.max || Number.POSITIVE_INFINITY;
        node = document.createElement("div");
        label = node.appendChild(document.createElement("h5"));
        label.appendChild(Morebits.createHtml(data.label));
        const listNode = node.appendChild(document.createElement("div"));
        const more = this.compute({
          type: "button",
          label: "更多",
          disabled: min >= max,
          event: (e) => {
            const newNode = new Morebits.quickForm.element(e.target.sublist);
            e.target.area.appendChild(newNode.render());
            if (++e.target.counter >= e.target.max) {
              e.target.disabled = true;
            }
            e.stopPropagation();
          }
        });
        node.appendChild(more[0]);
        const [, moreButton] = more;
        const sublist = {
          type: "_dyninput_element",
          label: data.sublabel || data.label,
          name: data.name,
          value: data.value,
          size: data.size,
          remove: false,
          maxlength: data.maxlength,
          event: data.event
        };
        for (i = 0; i < min; ++i) {
          const elem = new Morebits.quickForm.element(sublist);
          listNode.appendChild(elem.render());
        }
        sublist.remove = true;
        sublist.morebutton = moreButton;
        sublist.listnode = listNode;
        moreButton.sublist = sublist;
        moreButton.area = listNode;
        moreButton.max = max - min;
        moreButton.counter = 0;
        break;
      }
      case "_dyninput_element":
        node = document.createElement("div");
        if (data.label) {
          label = node.appendChild(document.createElement("label"));
          label.appendChild(document.createTextNode(data.label));
          label.setAttribute("for", id);
        }
        subnode = node.appendChild(document.createElement("input"));
        if (data.value) {
          subnode.setAttribute("value", data.value);
        }
        subnode.setAttribute("name", data.name);
        subnode.setAttribute("type", "text");
        if (data.size) {
          subnode.setAttribute("size", data.size);
        }
        if (data.maxlength) {
          subnode.setAttribute("maxlength", data.maxlength);
        }
        if (data.event) {
          subnode.addEventListener("keyup", data.event, false);
        }
        if (data.remove) {
          const remove = this.compute({
            type: "button",
            label: "移除",
            event: (e) => {
              const list = e.target.listnode;
              const node_ = e.target.inputnode;
              const more = e.target.morebutton;
              list.removeChild(node_);
              --more.counter;
              more.removeAttribute("disabled");
              e.stopPropagation();
            }
          });
          node.appendChild(remove[0]);
          const [, removeButton] = remove;
          removeButton.inputnode = node;
          removeButton.listnode = data.listnode;
          removeButton.morebutton = data.morebutton;
        }
        break;
      case "hidden":
        node = document.createElement("input");
        node.setAttribute("type", "hidden");
        node.values = data.value;
        node.setAttribute("value", data.value);
        node.setAttribute("name", data.name);
        break;
      case "header":
        node = document.createElement("h5");
        node.appendChild(Morebits.createHtml(data.label));
        break;
      case "div":
        node = document.createElement("div");
        if (data.name) {
          node.setAttribute("name", data.name);
        }
        if (data.label) {
          const result = document.createElement("span");
          result.className = "quickformDescription";
          result.appendChild(Morebits.createHtml(data.label));
          node.appendChild(result);
        }
        break;
      case "submit":
        node = document.createElement("span");
        childContainer = node.appendChild(document.createElement("input"));
        childContainer.setAttribute("type", "submit");
        if (data.label) {
          childContainer.setAttribute("value", data.label);
        }
        childContainer.setAttribute("name", data.name || "submit");
        if (data.disabled) {
          childContainer.disabled = true;
        }
        break;
      case "button":
        node = document.createElement("span");
        childContainer = node.appendChild(document.createElement("input"));
        childContainer.setAttribute("type", "button");
        if (data.label) {
          childContainer.setAttribute("value", data.label);
        }
        childContainer.setAttribute("name", data.name);
        if (data.disabled) {
          childContainer.disabled = true;
        }
        if (data.event) {
          childContainer.addEventListener("click", data.event, false);
        }
        break;
      case "textarea":
        node = document.createElement("div");
        node.setAttribute("id", "div_".concat(id));
        if (data.hidden) {
          node.setAttribute("hidden", "");
        }
        if (data.label) {
          label = node.appendChild(document.createElement("h5"));
          const labelElement = document.createElement("label");
          labelElement.appendChild(Morebits.createHtml(data.label));
          labelElement.setAttribute("for", data.id || id);
          label.appendChild(labelElement);
        }
        subnode = node.appendChild(document.createElement("textarea"));
        subnode.setAttribute("name", data.name);
        if (data.cols) {
          subnode.setAttribute("cols", data.cols);
        }
        if (data.rows) {
          subnode.setAttribute("rows", data.rows);
        }
        if (data.disabled) {
          subnode.disabled = true;
        }
        if (data.required) {
          subnode.setAttribute("required", "required");
        }
        if (data.readonly) {
          subnode.setAttribute("readonly", "readonly");
        }
        if (data.value) {
          subnode.value = data.value;
        }
        if (data.placeholder) {
          subnode.placeholder = data.placeholder;
        }
        childContainer = subnode;
        break;
      default:
        throw new Error("Morebits.quickForm: unknown element type ".concat(data.type.toString()));
    }
    childContainer || (childContainer = node);
    if (data.tooltip) {
      Morebits.quickForm.element.generateTooltip(label || node, data);
    }
    if (data.extra) {
      childContainer.extra = data.extra;
    }
    if (data.$data) {
      $(childContainer).data(data.$data);
    }
    if (data.style) {
      childContainer.setAttribute("style", data.style);
    }
    if (data.className) {
      childContainer.className = childContainer.className ? "".concat(childContainer.className, " ").concat(data.className) : data.className;
    }
    childContainer.setAttribute("id", data.id || id);
    return [node, childContainer];
  };
  Morebits.quickForm.element.generateTooltip = (node, data) => {
    const tooltipButton = node.appendChild(document.createElement("span"));
    tooltipButton.className = "morebits-tooltipButton";
    tooltipButton.title = data.tooltip;
    tooltipButton.appendChild(document.createTextNode("?"));
    $(tooltipButton).tooltip({
      position: {
        my: "left top",
        at: "center bottom",
        collision: "flipfit"
      },
      // Deprecated in UI 1.12, but MW stuck on 1.9.2 indefinitely; see #398 and T71386
      tooltipClass: "morebits-ui-tooltip"
    });
  };
  Morebits.quickForm.getInputData = (form) => {
    const result = {};
    var _iterator5 = _createForOfIteratorHelper(form.elements), _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
        const field = _step5.value;
        if (field.disabled || !field.name || !field.type || field.type === "submit" || field.type === "button") {
          continue;
        }
        const fieldNameNorm = field.name.slice(field.name.indexOf(".") + 1);
        switch (field.type) {
          case "radio":
            if (field.checked) {
              result[fieldNameNorm] = field.value;
            }
            break;
          case "checkbox":
            if (field.dataset.single) {
              result[fieldNameNorm] = field.checked;
            } else {
              result[fieldNameNorm] || (result[fieldNameNorm] = []);
              if (field.checked) {
                result[fieldNameNorm][result[fieldNameNorm].length] = field.value;
              }
            }
            break;
          case "select-multiple":
            result[fieldNameNorm] = $(field).val();
            break;
          case "text":
          // falls through
          case "textarea":
            result[fieldNameNorm] = field.value.trim();
            break;
          default:
            if (field.value) {
              result[fieldNameNorm] = field.value;
            }
            break;
        }
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    return result;
  };
  Morebits.quickForm.getElements = (form, fieldName) => {
    const $form = $(form);
    fieldName = $.escapeSelector(fieldName);
    let $elements = $form.find('[name="'.concat(fieldName, '"]'));
    if ($elements.length > 0) {
      return $elements.toArray();
    }
    $elements = $form.find("#".concat(fieldName));
    return $elements.toArray();
  };
  Morebits.quickForm.getCheckboxOrRadio = (elementArray, value) => {
    const found = elementArray.filter((element) => {
      return element.value === value;
    });
    if (found.length > 0) {
      return found[0];
    }
    return null;
  };
  Morebits.quickForm.getElementContainer = (element) => {
    if (element instanceof HTMLFieldSetElement || element instanceof HTMLDivElement || element instanceof HTMLHeadingElement) {
      return element;
    }
    return element.parentNode;
  };
  Morebits.quickForm.getElementLabelObject = (element) => {
    if (element.type === "button" || element.type === "submit" || element instanceof HTMLDivElement || element instanceof HTMLHeadingElement) {
      return element;
    } else if (element instanceof HTMLFieldSetElement) {
      return element.querySelector("legend");
    } else if (element instanceof HTMLTextAreaElement) {
      return element.parentNode.querySelector("h5");
    }
    return element.parentNode.querySelector("label");
  };
  Morebits.quickForm.getElementLabel = (element) => {
    const labelElement = Morebits.quickForm.getElementLabelObject(element);
    if (!labelElement) {
      return null;
    }
    return labelElement.firstChild.textContent;
  };
  Morebits.quickForm.setElementLabel = (element, labelText) => {
    const labelElement = Morebits.quickForm.getElementLabelObject(element);
    if (!labelElement) {
      return false;
    }
    labelElement.firstChild.textContent = labelText;
    return true;
  };
  Morebits.quickForm.overrideElementLabel = (element, temporaryLabelText) => {
    if (!element.hasAttribute("data-oldlabel")) {
      element.setAttribute("data-oldlabel", Morebits.quickForm.getElementLabel(element));
    }
    return Morebits.quickForm.setElementLabel(element, temporaryLabelText);
  };
  Morebits.quickForm.resetElementLabel = (element) => {
    if (element.hasAttribute("data-oldlabel")) {
      return Morebits.quickForm.setElementLabel(element, element.getAttribute("data-oldlabel"));
    }
    return null;
  };
  Morebits.quickForm.setElementVisibility = (element, visibility) => {
    $(element).toggle(visibility);
  };
  Morebits.quickForm.setElementTooltipVisibility = (element, visibility) => {
    $(Morebits.quickForm.getElementContainer(element)).find(".morebits-tooltipButton").toggle(visibility);
  };
  HTMLFormElement.prototype.getChecked = function(name, type) {
    const elements = this.elements[name];
    if (!elements) {
      return [];
    }
    const returnArray = [];
    let i;
    if (elements instanceof HTMLSelectElement) {
      const {
        options
      } = elements;
      for (i = 0; i < options.length; ++i) {
        if (options[i].selected) {
          if (options[i].values) {
            returnArray[returnArray.length] = options[i].values;
          } else {
            returnArray[returnArray.length] = options[i].value;
          }
        }
      }
    } else if (elements instanceof HTMLInputElement) {
      if (type && elements.type !== type) {
        return [];
      } else if (elements.checked) {
        return [elements.value];
      }
    } else {
      for (i = 0; i < elements.length; ++i) {
        if (elements[i].checked) {
          if (type && elements[i].type !== type) {
            continue;
          }
          if (elements[i].values) {
            returnArray[returnArray.length] = elements[i].values;
          } else {
            returnArray[returnArray.length] = elements[i].value;
          }
        }
      }
    }
    return returnArray;
  };
  HTMLFormElement.prototype.getUnchecked = function(name, type) {
    const elements = this.elements[name];
    if (!elements) {
      return [];
    }
    const returnArray = [];
    let i;
    if (elements instanceof HTMLSelectElement) {
      const {
        options
      } = elements;
      for (i = 0; i < options.length; ++i) {
        if (!options[i].selected) {
          if (options[i].values) {
            returnArray[returnArray.length] = options[i].values;
          } else {
            returnArray[returnArray.length] = options[i].value;
          }
        }
      }
    } else if (elements instanceof HTMLInputElement) {
      if (type && elements.type !== type) {
        return [];
      } else if (!elements.checked) {
        return [elements.value];
      }
    } else {
      for (i = 0; i < elements.length; ++i) {
        if (!elements[i].checked) {
          if (type && elements[i].type !== type) {
            continue;
          }
          if (elements[i].values) {
            returnArray[returnArray.length] = elements[i].values;
          } else {
            returnArray[returnArray.length] = elements[i].value;
          }
        }
      }
    }
    return returnArray;
  };
  Morebits.ip = {
    /**
     * Converts an IPv6 address to the canonical form stored and used by MediaWiki.
     * JavaScript translation of the {@link https://gerrit.wikimedia.org/r/plugins/gitiles/mediawiki/core/+/8eb6ac3e84ea3312d391ca96c12c49e3ad0753bb/includes/utils/IP.php#131|`IP::sanitizeIP()`}
     * function from the IPUtils library.  Addresses are verbose, uppercase,
     * normalized, and expanded to 8 words.
     *
     * @param {string} address - The IPv6 address, with or without CIDR.
     * @returns {string}
     */
    sanitizeIPv6: (address) => {
      address = address.trim();
      if (address === "") {
        return null;
      }
      if (!mw.util.isIPv6Address(address, true)) {
        return address;
      }
      address = address.toUpperCase();
      const abbrevPos = address.indexOf("::");
      if (abbrevPos !== -1) {
        const CIDRStart = address.indexOf("/");
        const addressEnd = CIDRStart === -1 ? address.length - 1 : CIDRStart - 1;
        let repeat;
        let extra;
        let pad;
        if (abbrevPos === 0) {
          repeat = "0:";
          extra = address === "::" ? "0" : "";
          pad = 9;
        } else if (abbrevPos === addressEnd - 1) {
          repeat = ":0";
          extra = "";
          pad = 9;
        } else {
          repeat = ":0";
          extra = ":";
          pad = 8;
        }
        let replacement = repeat;
        pad -= address.split(":").length - 1;
        for (let i = 1; i < pad; i++) {
          replacement += repeat;
        }
        replacement += extra;
        address = address.replace("::", replacement);
      }
      return address.replace(/(^|:)0+([0-9A-Fa-f]{1,4})/g, "$1$2");
    },
    /**
     * Determine if the given IP address is a range.  Just conjoins
     * `mw.util.isIPAddress` with and without the `allowBlock` option.
     *
     * @param {string} ip
     * @returns {boolean} - True if given a valid IP address range, false otherwise.
     */
    isRange: (ip) => {
      return mw.util.isIPAddress(ip, true) && !mw.util.isIPAddress(ip);
    },
    /**
     * Check that an IP range is within the CIDR limits.  Most likely to be useful
     * in conjunction with `wgRelevantUserName`.  CIDR limits are hardcoded as /16
     * for IPv4 and /32 for IPv6.
     *
     * @param {string} ip
     * @returns {boolean} - True for valid ranges within the CIDR limits,
     * otherwise false (ranges outside the limit, single IPs, non-IPs).
     */
    validCIDR: (ip) => {
      if (Morebits.ip.isRange(ip)) {
        const subnet = Number.parseInt(ip.match(/\/(\d{1,3})$/)[1], 10);
        if (subnet) {
          if (mw.util.isIPv6Address(ip, true)) {
            if (subnet >= 32) {
              return true;
            }
          } else if (subnet >= 16) {
            return true;
          }
        }
      }
      return false;
    },
    /**
     * Get the /64 subnet for an IPv6 address.
     *
     * @param {string} ipv6 - The IPv6 address, with or without a subnet.
     * @returns {boolean|string} - False if not IPv6 or bigger than a 64,
     * otherwise the (sanitized) /64 address.
     */
    get64: (ipv6) => {
      if (!ipv6 || !mw.util.isIPv6Address(ipv6, true)) {
        return false;
      }
      const subnetMatch = ipv6.match(/\/(\d{1,3})$/);
      if (subnetMatch && Number.parseInt(subnetMatch[1], 10) < 64) {
        return false;
      }
      ipv6 = Morebits.ip.sanitizeIPv6(ipv6);
      const ipRegex = /^((?:[0-9A-F]{1,4}:){4})(?:[0-9A-F]{1,4}:){3}[0-9A-F]{1,4}(?:\/\d{1,3})?$/;
      return ipv6.replace(ipRegex, "$1".concat("0:0:0:0/64"));
    }
  };
  Morebits.string = {
    /**
     * @param {string} str
     * @returns {string}
     */
    toUpperCaseFirstChar: (str) => {
      str = str.toString();
      return str.slice(0, 1).toUpperCase() + str.slice(1);
    },
    /**
     * @param {string} str
     * @returns {string}
     */
    toLowerCaseFirstChar: (str) => {
      str = str.toString();
      return str.slice(0, 1).toLowerCase() + str.slice(1);
    },
    /**
     * Gives an array of substrings of `str` - starting with `start` and
     * ending with `end` - which is not in `skiplist`.  Intended for use
     * on wikitext with templates or links.
     *
     * @param {string} str
     * @param {string} start
     * @param {string} end
     * @param {(string[]|string)} [skiplist]
     * @returns {string[]}
     * @throws If the `start` and `end` strings aren't of the same length.
     * @throws If `skiplist` isn't an array or string
     */
    splitWeightedByKeys: (str, start, end, skiplist) => {
      if (start.length !== end.length) {
        throw new Error("start marker and end marker must be of the same length");
      }
      let level = 0;
      let initial = null;
      const result = [];
      if (!Array.isArray(skiplist)) {
        if (skiplist === void 0) {
          skiplist = [];
        } else if (typeof skiplist === "string") {
          skiplist = [skiplist];
        } else {
          throw new TypeError("non-applicable skiplist parameter");
        }
      }
      for (let i = 0; i < str.length; ++i) {
        var _iterator6 = _createForOfIteratorHelper(skiplist), _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
            const element = _step6.value;
            if (str.slice(i, i + element.length) === element) {
              i += element.length - 1;
              continue;
            }
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
        if (str.slice(i, i + start.length) === start) {
          if (initial === null) {
            initial = i;
          }
          ++level;
          i += start.length - 1;
        } else if (str.slice(i, i + end.length) === end) {
          --level;
          i += end.length - 1;
        }
        if (!level && initial !== null) {
          result[result.length] = str.slice(initial, i + 1);
          initial = null;
        }
      }
      return result;
    },
    /**
     * Formats freeform "reason" (from a textarea) for deletion/other
     * templates that are going to be substituted, (e.g. PROD, XFD, RPP).
     * Handles `|` outside a nowiki tag.
     * Optionally, also adds a signature if not present already.
     *
     * @param {string} str
     * @param {boolean} [addSig]
     * @returns {string}
     */
    formatReasonText: (str, addSig) => {
      let reason = (str || "").toString().trim();
      const unbinder = new Morebits.unbinder(reason);
      unbinder.unbind("<no".concat("wiki", ">"), "</no".concat("wiki", ">"));
      unbinder.content = unbinder.content.replace(/\|/g, "{{".concat("subst:", "!}}"));
      reason = unbinder.rebind();
      if (addSig) {
        const sig = "~~".concat("~~");
        const sigIndex = reason.lastIndexOf(sig);
        if (sigIndex === -1 || sigIndex !== reason.length - sig.length) {
          reason += " ".concat(sig);
        }
      }
      return reason.trim();
    },
    /**
     * Formats a "reason" (from a textarea) for inclusion in a userspace
     * log.  Replaces newlines with {{Pb}}, and adds an extra `#` before
     * list items for proper formatting.
     *
     * @param {string} str
     * @returns {string}
     */
    formatReasonForLog: (str) => {
      return str.replace(/\n+/g, "{{pb}}").replace(/^(#+)/gm, "#$1").replace(/^(\*+)/gm, "#$1");
    },
    /**
     * Like `String.prototype.replace()`, but escapes any dollar signs in
     * the replacement string.  Useful when the the replacement string is
     * arbitrary, such as a username or freeform user input, and could
     * contain dollar signs.
     *
     * @param {string} string - Text in which to replace.
     * @param {(string|RegExp)} pattern
     * @param {string} replacement
     * @returns {string}
     */
    safeReplace: (string, pattern, replacement) => {
      return string.replace(pattern, replacement.replace(/\$/g, "$$$$"));
    },
    /**
     * Determine if the user-provided expiration will be considered an
     * infinite-length by MW.
     *
     * @see {@link https://phabricator.wikimedia.org/T68646}
     *
     * @param {string} expiry
     * @returns {boolean}
     */
    isInfinity: (expiry) => {
      return ["indefinite", "infinity", "infinite", "never"].includes(expiry);
    },
    /**
     * Escapes a string to be used in a RegExp, replacing spaces and
     * underscores with `[_ ]` as they are often equivalent.
     *
     * @param {string} text - String to be escaped.
     * @returns {string} - The escaped text.
     */
    escapeRegExp: (text) => {
      return mw.util.escapeRegExp(text).replace(/ |_/g, "[_ ]");
    },
    /**
     * formatTime
     *
     * @param {*} time The string to foramt
     * @returns {string}
     */
    formatTime: (time) => {
      let m;
      if ((m = time.match(/^\s*(\d+)\s*sec(ond)?s?\s*$/)) !== null) {
        return "".concat(m[1], "秒");
      }
      if ((m = time.match(/^\s*(\d+)\s*min(ute)?s?\s*$/)) !== null) {
        return "".concat(m[1], "分");
      }
      if ((m = time.match(/^\s*(\d+)\s*hours?\s*$/)) !== null) {
        return m[1] + window.wgULS("小时", "小時");
      }
      if ((m = time.match(/^\s*(\d+)\s*days?\s*$/)) !== null) {
        return "".concat(m[1], "天");
      }
      if ((m = time.match(/^\s*(\d+)\s*weeks?\s*$/)) !== null) {
        return m[1] + window.wgULS("周", "週");
      }
      if ((m = time.match(/^\s*(\d+)\s*months?\s*$/)) !== null) {
        return m[1] + window.wgULS("个月", "個月");
      }
      if ((m = time.match(/^\s*(\d+)\s*years?\s*$/)) !== null) {
        return "".concat(m[1], "年");
      }
      if (Morebits.string.isInfinity(time.trim())) {
        return window.wgULS("无限期", "無限期");
      }
      return time;
    },
    /**
     * Append punctuation to a string when it's missing
     *
     * @param {string} str
     * @param {string} punctuation
     * @returns {string}
     */
    appendPunctuation: (str, punctuation) => {
      if (punctuation === void 0) {
        punctuation = "。";
      }
      if (str.search(/[.?!;。？！；]$/) === -1) {
        str += punctuation;
      }
      return str;
    }
  };
  Morebits.array = {
    /**
     * Remove duplicated items from an array.
     *
     * @param {Array} arr
     * @returns {Array} A copy of the array with duplicates removed.
     * @throws When provided a non-array.
     */
    uniq: (arr) => {
      if (!Array.isArray(arr)) {
        throw new TypeError("A non-array object passed to Morebits.array.uniq");
      }
      return arr.filter((item, idx) => {
        return arr.indexOf(item) === idx;
      });
    },
    /**
     * Remove non-duplicated items from an array.
     *
     * @param {Array} arr
     * @returns {Array} A copy of the array with the first instance of each value
     * removed; subsequent instances of those values (duplicates) remain.
     * @throws When provided a non-array.
     */
    dups: (arr) => {
      if (!Array.isArray(arr)) {
        throw new TypeError("A non-array object passed to Morebits.array.dups");
      }
      return arr.filter((item, idx) => {
        return arr.indexOf(item) !== idx;
      });
    },
    /**
     * Break up an array into smaller arrays.
     *
     * @param {Array} arr
     * @param {number} size - Size of each chunk (except the last, which could be different).
     * @returns {Array[]} An array containing the smaller, chunked arrays.
     * @throws When provided a non-array.
     */
    chunk: (arr, size) => {
      if (!Array.isArray(arr)) {
        throw new TypeError("A non-array object passed to Morebits.array.chunk");
      }
      if (typeof size !== "number" || size <= 0) {
        return [arr];
      }
      const numChunks = Math.ceil(arr.length / size);
      const result = Array.from({
        length: numChunks
      });
      for (let i = 0; i < numChunks; i++) {
        result[i] = arr.slice(i * size, (i + 1) * size);
      }
      return result;
    }
  };
  Morebits.select2 = {
    matchers: {
      /**
       * Custom matcher in which if the optgroup name matches, all options in that
       * group are shown, like in jquery.chosen.
       *
       * @param {*} params
       * @param {*} data
       */
      optgroupFull: (params, data) => {
        const originalMatcher = $.fn.select2.defaults.defaults.matcher;
        const result = originalMatcher(params, data);
        if (result && params.term && data.text.toUpperCase().includes(params.term.toUpperCase())) {
          result.children = data.children;
        }
        return result;
      },
      /**
       * Custom matcher that matches from the beginning of words only.
       *
       * @param {*} params
       * @param {*} data
       */
      wordBeginning: (params, data) => {
        const originalMatcher = $.fn.select2.defaults.defaults.matcher;
        const result = originalMatcher(params, data);
        if (!params.term || result && new RegExp("\\b".concat(mw.util.escapeRegExp(params.term)), "i").test(result.text)) {
          return result;
        }
        return null;
      }
    },
    /**
     * Underline matched part of options.
     *
     * @param {*} data
     */
    highlightSearchMatches: (data) => {
      const searchTerm = Morebits.select2SearchQuery;
      if (!searchTerm || data.loading) {
        return data.text;
      }
      const idx = data.text.toUpperCase().indexOf(searchTerm.toUpperCase());
      if (idx === -1) {
        return data.text;
      }
      return $("<span>").append(data.text.slice(0, idx), $("<span>").css("text-decoration", "underline").text(data.text.slice(idx, idx + searchTerm.length)), data.text.slice(idx + searchTerm.length));
    },
    /**
     * Intercept query as it is happening, for use in highlightSearchMatches.
     *
     * @param {*} params
     */
    queryInterceptor: (params) => {
      Morebits.select2SearchQuery = params && params.term;
    },
    /**
     * Open dropdown and begin search when the `.select2-selection` has
     * focus and a key is pressed.
     *
     * @param {KeyboardEvent} ev
     * @see {@link https://github.com/select2/select2/issues/3279#issuecomment-442524147}
     */
    autoStart: (ev) => {
      if (ev.which < 48) {
        return;
      }
      let target = $(ev.target).closest(".select2-container");
      if (!target.length) {
        return;
      }
      target = target.prev();
      target.select2("open");
      const search = target.data("select2").dropdown.$search || target.data("select2").selection.$search;
      search[0].focus();
    }
  };
  Morebits.unbinder = function(string) {
    if (typeof string !== "string") {
      throw new TypeError("not a string");
    }
    this.content = string;
    this.counter = 0;
    this.history = {};
    this.prefix = "%UNIQ::".concat(Math.random(), "::");
    this.postfix = "::UNIQ%";
  };
  Morebits.unbinder.prototype = {
    /**
     * Hide the region encapsulated by the `prefix` and `postfix` from
     * string processing.  `prefix` and `postfix` will be used in a
     * RegExp, so items that need escaping should be use `\\`.
     *
     * @param {string} prefix
     * @param {string} postfix
     * @throws If either `prefix` or `postfix` is missing.
     */
    unbind(prefix, postfix) {
      if (!prefix || !postfix) {
        throw new Error("Both prefix and postfix must be provided");
      }
      const re = new RegExp("".concat(prefix, "([\\s\\S]*?)").concat(postfix), "g");
      this.content = this.content.replace(re, Morebits.unbinder.getCallback(this));
    },
    /**
     * Restore the hidden portion of the `content` string.
     *
     * @returns {string} The processed output.
     */
    rebind() {
      let {
        content
      } = this;
      for (const current in this.history) {
        if (!Object.hasOwn(this.history, current)) {
          continue;
        }
        content = content.replace(current, this.history[current]);
      }
      return content;
    },
    prefix: null,
    // %UNIQ::0.5955981644938324::
    postfix: null,
    // ::UNIQ%
    content: null,
    // string
    counter: null,
    // 0++
    history: null
    // {}
  };
  Morebits.unbinder.getCallback = (self2) => {
    return (match) => {
      const current = self2.prefix + self2.counter + self2.postfix;
      self2.history[current] = match;
      ++self2.counter;
      return current;
    };
  };
  Morebits.date = function(...args) {
    var _this$_d;
    if (args.length === 1) {
      const [param] = args;
      if (/^\d{14}$/.test(param)) {
        const digitMatch = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/.exec(param);
        if (digitMatch) {
          this._d = new Date(Reflect.apply(Date.UTC, null, [digitMatch[1], digitMatch[2] - 1, digitMatch[3], digitMatch[4], digitMatch[5], digitMatch[6]]));
        }
      } else if (typeof param === "string") {
        const dateParts = Morebits.l10n.signatureTimestampFormat(param);
        if (dateParts) {
          this._d = new Date(Date.UTC.apply(null, dateParts));
        }
      }
    }
    (_this$_d = this._d) !== null && _this$_d !== void 0 ? _this$_d : this._d = new (Function.prototype.bind.apply(Date, [Date, ...(0, import_ext_gadget.generateArray)(args)]))();
    if (!this.isValid()) {
      mw.log.warn("Invalid Morebits.date initialisation:", args);
    }
  };
  Morebits.date.localeData = {
    // message names here correspond to MediaWiki message names
    // No i18n at this time
    months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    monthsShort: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
    daysShort: ["日", "一", "二", "三", "四", "五", "六"],
    relativeTimes: {
      thisDay: "[今天]A hh:mm",
      prevDay: "[昨天]A hh:mm",
      nextDay: "[明天]A hh:mm",
      thisWeek: "ddddA hh:mm",
      pastWeek: "[上]ddddA hh:mm",
      other: "YYYY-MM-DD"
    }
  };
  Morebits.date.unitMap = {
    seconds: "Seconds",
    minutes: "Minutes",
    hours: "Hours",
    days: "Date",
    weeks: "Week",
    // Not a function but handled in `add` through cunning use of multiplication
    months: "Month",
    years: "FullYear"
  };
  Morebits.date.prototype = {
    /** @returns {boolean} */
    isValid() {
      return !Number.isNaN(this.getTime());
    },
    /**
     * @param {(Date|Morebits.date)} date
     * @returns {boolean}
     */
    isBefore(date) {
      return this.getTime() < date.getTime();
    },
    /**
     * @param {(Date|Morebits.date)} date
     * @returns {boolean}
     */
    isAfter(date) {
      return this.getTime() > date.getTime();
    },
    /** @returns {string} */
    getUTCMonthName() {
      return Morebits.date.localeData.months[this.getUTCMonth()];
    },
    /** @returns {string} */
    getUTCMonthNameAbbrev() {
      return Morebits.date.localeData.monthsShort[this.getUTCMonth()];
    },
    /** @returns {string} */
    getMonthName() {
      return Morebits.date.localeData.months[this.getMonth()];
    },
    /** @returns {string} */
    getMonthNameAbbrev() {
      return Morebits.date.localeData.monthsShort[this.getMonth()];
    },
    /** @returns {string} */
    getUTCDayName() {
      return Morebits.date.localeData.days[this.getUTCDay()];
    },
    /** @returns {string} */
    getUTCDayNameAbbrev() {
      return Morebits.date.localeData.daysShort[this.getUTCDay()];
    },
    /** @returns {string} */
    getDayName() {
      return Morebits.date.localeData.days[this.getDay()];
    },
    /** @returns {string} */
    getDayNameAbbrev() {
      return Morebits.date.localeData.daysShort[this.getDay()];
    },
    /**
     * Add a given number of minutes, hours, days, weeks, months, or years to the date.
     * This is done in-place. The modified date object is also returned, allowing chaining.
     *
     * @param {number} number - Should be an integer.
     * @param {string} unit
     * @throws If invalid or unsupported unit is given.
     * @returns {Morebits.date}
     */
    add(number, unit) {
      let num = Number.parseInt(number, 10);
      if (Number.isNaN(num)) {
        throw new TypeError('Invalid number "'.concat(number, '" provided.'));
      }
      unit = unit.toLowerCase();
      const {
        unitMap
      } = Morebits.date;
      let unitNorm = unitMap[unit] || unitMap["".concat(unit, "s")];
      if (unitNorm) {
        if (unitNorm === "Week") {
          unitNorm = "Date";
          num *= 7;
        }
        this["set".concat(unitNorm)](this["get".concat(unitNorm)]() + num);
        return this;
      }
      throw new Error('Invalid unit "'.concat(unit, '": Only ').concat(Object.keys(unitMap).join(", "), " are allowed."));
    },
    /**
     * Subtracts a given number of minutes, hours, days, weeks, months, or years to the date.
     * This is done in-place. The modified date object is also returned, allowing chaining.
     *
     * @param {number} number - Should be an integer.
     * @param {string} unit
     * @throws If invalid or unsupported unit is given.
     * @returns {Morebits.date}
     */
    subtract(number, unit) {
      return this.add(-number, unit);
    },
    /**
     * Format the date into a string per the given format string.
     * Replacement syntax is a subset of that in moment.js:
     *
     * | Syntax | Output |
     * |--------|--------|
     * | H | Hours (24-hour) |
     * | HH | Hours (24-hour, padded to 2 digits) |
     * | h | Hours (12-hour) |
     * | hh | Hours (12-hour, padded to 2 digits) |
     * | A | AM or PM |
     * | m | Minutes |
     * | mm | Minutes (padded to 2 digits) |
     * | s | Seconds |
     * | ss | Seconds (padded to 2 digits) |
     * | SSS | Milliseconds fragment, 3 digits |
     * | d | Day number of the week (Sun=0) |
     * | ddd | Abbreviated day name |
     * | dddd | Full day name |
     * | D | Date |
     * | DD | Date (padded to 2 digits) |
     * | M | Month number (1-indexed) |
     * | MM | Month number (1-indexed, padded to 2 digits) |
     * | MMM | Abbreviated month name |
     * | MMMM | Full month name |
     * | Y | Year |
     * | YY | Final two digits of year (20 for 2020, 42 for 1942) |
     * | YYYY | Year (same as `Y`) |
     *
     * @param {string} formatstr - Format the date into a string, using
     * the replacement syntax.  Use `[` and `]` to escape items.  If not
     * provided, will return the ISO-8601-formatted string.
     * @param {(string|number)} [zone=system] - `system` (for browser-default time zone),
     * `utc`, or specify a time zone as number of minutes relative to UTC.
     * @returns {string}
     */
    format(formatstr, zone) {
      if (!this.isValid()) {
        return "Invalid date";
      }
      let udate = this;
      if (zone === "utc") {
        udate = new Morebits.date(this.getTime()).add(this.getTimezoneOffset(), "minutes");
      } else if (typeof zone === "number") {
        udate = new Morebits.date(this.getTime()).add(this.getTimezoneOffset() + zone, "minutes");
      }
      if (!formatstr) {
        return udate.toISOString();
      }
      const pad = (num, len) => {
        len || (len = 2);
        return "00".concat(num).toString().slice(0 - len);
      };
      const h24 = udate.getHours();
      const m = udate.getMinutes();
      const s = udate.getSeconds();
      const ms = udate.getMilliseconds();
      const D = udate.getDate();
      const M = udate.getMonth() + 1;
      const Y = udate.getFullYear();
      const h12 = h24 % 12 || 12;
      const amOrPm = h24 >= 12 ? "下午" : "上午";
      const replacementMap = {
        HH: pad(h24),
        H: h24,
        hh: pad(h12),
        h: h12,
        A: amOrPm,
        mm: pad(m),
        m,
        ss: pad(s),
        s,
        SSS: pad(ms, 3),
        dddd: udate.getDayName(),
        ddd: udate.getDayNameAbbrev(),
        d: udate.getDay(),
        DD: pad(D),
        D,
        MMMM: udate.getMonthName(),
        MMM: udate.getMonthNameAbbrev(),
        MM: pad(M),
        M,
        YYYY: Y,
        YY: pad(Y % 100),
        Y
      };
      const unbinder = new Morebits.unbinder(formatstr);
      unbinder.unbind(String.raw(_templateObject || (_templateObject = _taggedTemplateLiteral(["["], ["\\["]))), String.raw(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["]"], ["\\]"]))));
      unbinder.content = unbinder.content.replace(
        /* Regex notes:
         * d(d{2,3})? matches exactly 1, 3 or 4 occurrences of 'd' ('dd' is treated as a double match of 'd')
         * Y{1,2}(Y{2})? matches exactly 1, 2 or 4 occurrences of 'Y'
         */
        /H{1,2}|h{1,2}|m{1,2}|s{1,2}|SSS|d(d{2,3})?|D{1,2}|M{1,4}|Y{1,2}(Y{2})?|A/g,
        (match) => {
          return replacementMap[match];
        }
      );
      return unbinder.rebind().replace(/\[(.*?)\]/g, "$1");
    },
    /**
     * Gives a readable relative time string such as "Yesterday at 6:43 PM" or "Last Thursday at 11:45 AM".
     * Similar to `calendar` in moment.js, but with time zone support.
     *
     * @param {(string|number)} [zone=system] - 'system' (for browser-default time zone),
     * 'utc' (for UTC), or specify a time zone as number of minutes past UTC.
     * @returns {string}
     */
    calendar(zone) {
      const dateDiff = ((/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0) - new Date(this).setHours(0, 0, 0, 0)) / 864e5;
      switch (true) {
        case dateDiff === 0:
          return this.format(Morebits.date.localeData.relativeTimes.thisDay, zone);
        case dateDiff === 1:
          return this.format(Morebits.date.localeData.relativeTimes.prevDay, zone);
        case (dateDiff > 0 && dateDiff < 7):
          return this.format(Morebits.date.localeData.relativeTimes.pastWeek, zone);
        case dateDiff === -1:
          return this.format(Morebits.date.localeData.relativeTimes.nextDay, zone);
        case (dateDiff < 0 && dateDiff > -7):
          return this.format(Morebits.date.localeData.relativeTimes.thisWeek, zone);
        default:
          return this.format(Morebits.date.localeData.relativeTimes.other, zone);
      }
    },
    /**
     * Get a regular expression that matches wikitext section titles, such
     * as `==December 2019==` or `=== Jan 2018 ===`.
     *
     * @returns {RegExp}
     */
    monthHeaderRegex() {
      return new RegExp("^(==+)\\s*".concat(this.getUTCFullYear(), "年(?:").concat(this.getUTCMonthName(), "|").concat(this.getUTCMonthNameAbbrev(), ")\\s*\\1"), "mg");
    },
    /**
     * Creates a wikitext section header with the month and year.
     *
     * @param {number} [level=2] - Header level.  Pass 0 for just the text
     * with no wikitext markers (==).
     * @returns {string}
     */
    monthHeader(level) {
      level = Number.parseInt(level, 10);
      level = Number.isNaN(level) ? 2 : level;
      const header = "=".repeat(level);
      const text = "".concat(this.getUTCFullYear(), "年").concat(this.getUTCMonthName());
      if (header.length) {
        return "".concat(header, " ").concat(text, " ").concat(header);
      }
      return text;
    }
  };
  var _iterator7 = _createForOfIteratorHelper(Object.getOwnPropertyNames(Date.prototype)), _step7;
  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
      const func = _step7.value;
      if (!["add", "getDayName", "getMonthName"].includes(func)) {
        Morebits.date.prototype[func] = function(...args) {
          return this._d[func](...args);
        };
      }
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }
  Morebits.wiki = {};
  Morebits.wiki.isPageRedirect = () => {
    console.warn("[Morebits] NOTE: Morebits.wiki.isPageRedirect has been deprecated, use Morebits.isPageRedirect instead.");
    return Morebits.isPageRedirect();
  };
  Morebits.wiki.numberOfActionsLeft = 0;
  Morebits.wiki.nbrOfCheckpointsLeft = 0;
  Morebits.wiki.actionCompleted = (self2) => {
    if (--Morebits.wiki.numberOfActionsLeft <= 0 && Morebits.wiki.nbrOfCheckpointsLeft <= 0) {
      Morebits.wiki.actionCompleted.event(self2);
    }
  };
  Morebits.wiki.actionCompleted.event = () => {
    if (Morebits.wiki.actionCompleted.notice) {
      Morebits.status.actionCompleted(Morebits.wiki.actionCompleted.notice);
    }
    if (Morebits.wiki.actionCompleted.redirect) {
      if (!/^\w+:\/\//.test(Morebits.wiki.actionCompleted.redirect)) {
        Morebits.wiki.actionCompleted.redirect = mw.util.getUrl(Morebits.wiki.actionCompleted.redirect);
        if (Morebits.wiki.actionCompleted.followRedirect === false) {
          Morebits.wiki.actionCompleted.redirect += "?redirect=no";
        }
      }
      setTimeout(() => {
        location = Morebits.wiki.actionCompleted.redirect;
      }, Morebits.wiki.actionCompleted.timeOut);
    }
  };
  Morebits.wiki.actionCompleted.timeOut = window.wpActionCompletedTimeOut === void 0 ? 5e3 : window.wpActionCompletedTimeOut;
  Morebits.wiki.actionCompleted.redirect = null;
  Morebits.wiki.actionCompleted.notice = null;
  Morebits.wiki.addCheckpoint = () => {
    ++Morebits.wiki.nbrOfCheckpointsLeft;
  };
  Morebits.wiki.removeCheckpoint = () => {
    if (--Morebits.wiki.nbrOfCheckpointsLeft <= 0 && Morebits.wiki.numberOfActionsLeft <= 0) {
      Morebits.wiki.actionCompleted.event();
    }
  };
  Morebits.wiki.api = function(currentAction, query, onSuccess, statusElement, onError) {
    var _this$query;
    this.currentAction = currentAction;
    this.query = query;
    this.query.assert = "user";
    if (!query.errorformat || !["wikitext", "plaintext"].includes(query.errorformat)) {
      this.query.errorformat = "html";
    }
    (_this$query = this.query).uselang || (_this$query.uselang = "content");
    this.query.errorlang = "uselang";
    this.query.errorsuselocal = 1;
    this.onSuccess = onSuccess;
    this.onError = onError;
    if (statusElement) {
      this.setStatusElement(statusElement);
    } else {
      this.statelem = new Morebits.status(currentAction);
    }
    if (!query.format) {
      this.query.format = "xml";
    } else if (query.format === "json" && !query.formatversion) {
      this.query.formatversion = "2";
    } else if (!["xml", "json"].includes(query.format)) {
      this.statelem.error("Invalid API format: only xml and json are supported.");
    }
    if (query.action && ["query", "watch"].includes(query.action)) {
      delete query.tags;
    } else if (!query.tags && morebitsWikiChangeTag) {
      query.tags = morebitsWikiChangeTag;
    }
  };
  Morebits.wiki.api.prototype = {
    currentAction: "",
    onSuccess: null,
    onError: null,
    parent: window,
    // use global context if there is no parent object
    query: null,
    response: null,
    responseXML: null,
    // use `response` instead; retained for backwards compatibility
    statelem: null,
    // this non-standard name kept for backwards compatibility
    statusText: null,
    // result received from the API, normally "success" or "error"
    errorCode: null,
    // short text error code, if any, as documented in the MediaWiki API
    errorText: null,
    // full error description, if any
    badtokenRetry: false,
    // set to true if this on a retry attempted after a badtoken error
    /**
     * Keep track of parent object for callbacks.
     *
     * @param {*} parent
     */
    setParent(parent) {
      this.parent = parent;
    },
    /** @param {Morebits.status} statusElement */
    setStatusElement(statusElement) {
      this.statelem = statusElement;
      this.statelem.status(this.currentAction);
    },
    /**
     * Carry out the request.
     *
     * @param {Object} callerAjaxParameters - Do not specify a parameter unless you really
     * really want to give jQuery some extra parameters.
     * @returns {promise} - A jQuery promise object that is resolved or rejected with the api object.
     */
    post(callerAjaxParameters) {
      ++Morebits.wiki.numberOfActionsLeft;
      const queryStringArr = [];
      for (var _i5 = 0, _Object$entries2 = Object.entries(this.query); _i5 < _Object$entries2.length; _i5++) {
        const [i, val] = _Object$entries2[_i5];
        if (Array.isArray(val)) {
          queryStringArr[queryStringArr.length] = "".concat(encodeURIComponent(i), "=").concat(val.map(encodeURIComponent).join("|"));
        } else if (val !== void 0) {
          queryStringArr[queryStringArr.length] = "".concat(encodeURIComponent(i), "=").concat(encodeURIComponent(val));
        }
      }
      const queryString = queryStringArr.join("&").replace(/^(.*?)(\btoken=[^&]*)&(.*)/, "$1$3&$2");
      const ajaxparams = {
        context: this,
        type: this.query.action === "query" ? "GET" : "POST",
        url: mw.util.wikiScript("api"),
        data: queryString,
        dataType: this.query.format,
        headers: {
          "Api-User-Agent": morebitsWikiApiUserAgent
        },
        ...callerAjaxParameters
      };
      return $.ajax(ajaxparams).then(
        function onAPIsuccess(response, statusText) {
          this.statusText = statusText;
          this.response = response;
          this.responseXML = response;
          if (this.query.format === "json") {
            this.errorCode = response.errors && response.errors[0].code;
            if (this.query.errorformat === "html") {
              this.errorText = response.errors && response.errors[0].html;
            } else if (this.query.errorformat === "wikitext" || this.query.errorformat === "plaintext") {
              this.errorText = response.errors && response.errors[0].text;
            }
          } else {
            this.errorCode = $(response).find("errors error").eq(0).attr("code");
            this.errorText = $(response).find("errors error").eq(0).text();
          }
          if (typeof this.errorCode === "string") {
            return this.returnError(callerAjaxParameters);
          }
          if (this.onSuccess) {
            this.onSuccess.call(this.parent, this);
          } else {
            this.statelem.info("完成");
          }
          Morebits.wiki.actionCompleted();
          return $.Deferred().resolveWith(this.parent, [this]);
        },
        // only network and server errors reach here - complaints from the API itself are caught in success()
        function onAPIfailure(error, statusText, errorThrown) {
          this.statusText = statusText;
          this.errorThrown = errorThrown;
          this.errorText = statusText + window.wgULS("在调用API时发生了错误“", "在呼叫API時發生了錯誤「") + error.statusText + window.wgULS("”。", "」。");
          return this.returnError();
        }
      );
    },
    returnError(callerAjaxParameters) {
      if (this.errorCode === "badtoken" && !this.badtokenRetry) {
        this.statelem.warn(window.wgULS("无效令牌，获取新的令牌并重试……", "無效權杖，取得新的權杖並重試……"));
        this.badtokenRetry = true;
        return Morebits.wiki.api.getToken().then((token) => {
          this.query.token = token;
          return this.post(callerAjaxParameters);
        });
      }
      this.statelem.error("".concat(this.errorText, "（").concat(this.errorCode, "）"));
      if (this.onError) {
        this.onError.call(this.parent, this);
      }
      return $.Deferred().rejectWith(this.parent, [this]);
    },
    getStatusElement() {
      return this.statelem;
    },
    getErrorCode() {
      return this.errorCode;
    },
    getErrorText() {
      return this.errorText;
    },
    getXML() {
      return this.responseXML;
    },
    getResponse() {
      return this.response;
    }
  };
  Morebits.wiki.getCachedJson = (title) => {
    const query = {
      action: "query",
      prop: "revisions",
      titles: title,
      rvslots: "main",
      rvprop: "content",
      format: "json",
      smaxage: "3600",
      maxage: "3600"
    };
    return new Morebits.wiki.api("", query).post().then((apiobj) => {
      apiobj.getStatusElement().unlink();
      const response = apiobj.getResponse();
      const wikitext = response.query.pages[0].revisions[0].slots.main.content;
      return JSON.parse(wikitext);
    });
  };
  let morebitsWikiApiUserAgent = "Qiuwen/1.1 (morebits.js)";
  Morebits.wiki.api.setApiUserAgent = (ua) => {
    morebitsWikiApiUserAgent = "Qiuwen/1.1 (morebits.js".concat(ua ? "; ".concat(ua) : "", ")");
  };
  const morebitsWikiChangeTag = "";
  Morebits.wiki.api.getToken = () => {
    const tokenApi = new Morebits.wiki.api(window.wgULS("获取令牌", "取得權杖"), {
      action: "query",
      meta: "tokens",
      type: "csrf",
      format: "json"
    });
    return tokenApi.post().then((apiobj) => {
      return apiobj.response.query.tokens.csrftoken;
    });
  };
  Morebits.wiki.page = function(pageName, status) {
    status || (status = window.wgULS("打开页面“", "打開頁面「") + pageName + window.wgULS("”", "」"));
    const ctx = {
      // backing fields for public properties
      pageName,
      pageExists: false,
      editSummary: null,
      changeTags: null,
      testActions: null,
      // array if any valid actions
      callbackParameters: null,
      statusElement: status instanceof Morebits.status ? status : new Morebits.status(status),
      // - edit
      pageText: null,
      editMode: "all",
      // save() replaces entire contents of the page by default
      appendText: null,
      // can't reuse pageText for this because pageText is needed to follow a redirect
      prependText: null,
      // can't reuse pageText for this because pageText is needed to follow a redirect
      newSectionText: null,
      newSectionTitle: null,
      createOption: null,
      minorEdit: false,
      botEdit: false,
      pageSection: null,
      maxConflictRetries: 2,
      maxRetries: 2,
      followRedirect: false,
      followCrossNsRedirect: true,
      watchlistOption: "nochange",
      watchlistExpiry: null,
      creator: null,
      timestamp: null,
      // - revert
      revertOldID: null,
      // - move
      moveDestination: null,
      moveTalkPage: false,
      moveSubpages: false,
      moveSuppressRedirect: false,
      // - protect
      protectEdit: null,
      protectMove: null,
      protectCreate: null,
      protectCascade: null,
      // - creation lookup
      lookupNonRedirectCreator: false,
      // internal status
      pageLoaded: false,
      csrfToken: null,
      loadTime: null,
      lastEditTime: null,
      pageID: null,
      contentModel: null,
      revertCurID: null,
      revertUser: null,
      watched: false,
      fullyProtected: false,
      suppressProtectWarning: false,
      conflictRetries: 0,
      retries: 0,
      // callbacks
      onLoadSuccess: null,
      onLoadFailure: null,
      onSaveSuccess: null,
      onSaveFailure: null,
      onLookupCreationSuccess: null,
      onLookupCreationFailure: null,
      onMoveSuccess: null,
      onMoveFailure: null,
      onDeleteSuccess: null,
      onDeleteFailure: null,
      onUndeleteSuccess: null,
      onUndeleteFailure: null,
      onProtectSuccess: null,
      onProtectFailure: null,
      // internal objects
      loadQuery: null,
      loadApi: null,
      saveApi: null,
      lookupCreationApi: null,
      moveApi: null,
      moveProcessApi: null,
      patrolApi: null,
      patrolProcessApi: null,
      deleteApi: null,
      deleteProcessApi: null,
      undeleteApi: null,
      undeleteProcessApi: null,
      protectApi: null,
      protectProcessApi: null
    };
    const emptyFunction = () => {
    };
    this.load = function(onSuccess, onFailure) {
      ctx.onLoadSuccess = onSuccess;
      ctx.onLoadFailure = onFailure || emptyFunction;
      if (!onSuccess) {
        ctx.statusElement.error("Internal error: no onSuccess callback provided to load()!");
        ctx.onLoadFailure(this);
        return;
      }
      ctx.loadQuery = {
        action: "query",
        prop: "info|revisions",
        inprop: "watched",
        intestactions: "edit",
        // can be expanded
        curtimestamp: "",
        meta: "tokens",
        type: "csrf",
        titles: ctx.pageName,
        format: "json"
        // don't need rvlimit=1 because we don't need rvstartid here and only one actual rev is returned by default
      };
      if (ctx.editMode === "all") {
        ctx.loadQuery.rvprop = "content|timestamp";
      } else if (ctx.editMode === "revert") {
        ctx.loadQuery.rvprop = "timestamp";
        ctx.loadQuery.rvlimit = 1;
        ctx.loadQuery.rvstartid = ctx.revertOldID;
      }
      if (ctx.followRedirect) {
        ctx.loadQuery.redirects = "";
      }
      if (typeof ctx.pageSection === "number") {
        ctx.loadQuery.rvsection = ctx.pageSection;
      }
      if (Morebits.userIsSysop) {
        ctx.loadQuery.inprop += "|protection";
      }
      ctx.loadApi = new Morebits.wiki.api(window.wgULS("抓取页面……", "抓取頁面……"), ctx.loadQuery, fnLoadSuccess, ctx.statusElement, ctx.onLoadFailure);
      ctx.loadApi.setParent(this);
      ctx.loadApi.post();
    };
    this.save = function(onSuccess, onFailure) {
      ctx.onSaveSuccess = onSuccess;
      ctx.onSaveFailure = onFailure || emptyFunction;
      const canUseMwUserToken = fnCanUseMwUserToken("edit");
      if (!ctx.pageLoaded && !canUseMwUserToken) {
        ctx.statusElement.error("Internal error: attempt to save a page that has not been loaded!");
        ctx.onSaveFailure(this);
        return;
      }
      if (!ctx.editSummary) {
        if (ctx.editMode === "new" && ctx.newSectionTitle) {
          ctx.editSummary = "";
        } else {
          ctx.statusElement.error("Internal error: edit summary not set before save!");
          ctx.onSaveFailure(this);
          return;
        }
      }
      if (ctx.fullyProtected && !ctx.suppressProtectWarning && !confirm(ctx.fullyProtected === "infinity" ? window.wgULS("您即将编辑全保护页面“", "您即將編輯全保護頁面「") + ctx.pageName + window.wgULS("”（无限期）。\n\n单击确定以确定，或单击取消以取消操作。", "」（無限期）。\n\n點擊確定以確定，或點擊取消以取消操作。") : "".concat(window.wgULS("您即将编辑全保护页面“", "您即將編輯全保護頁面「") + ctx.pageName + window.wgULS("”（到期：", "」（到期：") + new Morebits.date(ctx.fullyProtected).calendar("utc"), " (UTC)）。\n\n").concat(window.wgULS("单击确定以确定，或单击取消以取消操作。", "點擊確定以確定，或點擊取消以取消操作。")))) {
        ctx.statusElement.error(window.wgULS("已取消对全保护页面的编辑。", "已取消對全保護頁面的編輯。"));
        ctx.onSaveFailure(this);
        return;
      }
      ctx.retries = 0;
      const query = {
        action: "edit",
        title: ctx.pageName,
        summary: ctx.editSummary,
        token: canUseMwUserToken ? mw.user.tokens.get("csrfToken") : ctx.csrfToken,
        watchlist: ctx.watchlistOption,
        format: "json"
      };
      if (ctx.changeTags) {
        query.tags = ctx.changeTags;
      }
      if (fnApplyWatchlistExpiry()) {
        query.watchlistexpiry = ctx.watchlistExpiry;
      }
      if (typeof ctx.pageSection === "number") {
        query.section = ctx.pageSection;
      }
      if (ctx.minorEdit) {
        query.minor = true;
      } else {
        query.notminor = true;
      }
      if (ctx.botEdit) {
        query.bot = true;
      }
      switch (ctx.editMode) {
        case "append":
          if (ctx.appendText === null) {
            ctx.statusElement.error("Internal error: append text not set before save!");
            ctx.onSaveFailure(this);
            return;
          }
          query.appendtext = ctx.appendText;
          break;
        case "prepend":
          if (ctx.prependText === null) {
            ctx.statusElement.error("Internal error: prepend text not set before save!");
            ctx.onSaveFailure(this);
            return;
          }
          query.prependtext = ctx.prependText;
          break;
        case "new":
          if (!ctx.newSectionText) {
            ctx.statusElement.error("Internal error: new section text not set before save!");
            ctx.onSaveFailure(this);
            return;
          }
          query.section = "new";
          query.text = ctx.newSectionText;
          query.sectiontitle = ctx.newSectionTitle || ctx.editSummary;
          break;
        case "revert":
          query.undo = ctx.revertCurID;
          query.undoafter = ctx.revertOldID;
          if (ctx.lastEditTime) {
            query.basetimestamp = ctx.lastEditTime;
          }
          query.starttimestamp = ctx.loadTime;
          break;
        default:
          query.text = ctx.pageText;
          if (ctx.lastEditTime) {
            query.basetimestamp = ctx.lastEditTime;
          }
          query.starttimestamp = ctx.loadTime;
          break;
      }
      if (["recreate", "createonly", "nocreate"].includes(ctx.createOption)) {
        query[ctx.createOption] = "";
      }
      if (canUseMwUserToken && ctx.followRedirect) {
        query.redirect = true;
      }
      ctx.saveApi = new Morebits.wiki.api(window.wgULS("保存页面……", "儲存頁面……"), query, fnSaveSuccess, ctx.statusElement, fnSaveError);
      ctx.saveApi.setParent(this);
      ctx.saveApi.post();
    };
    this.append = function(onSuccess, onFailure) {
      ctx.editMode = "append";
      if (fnCanUseMwUserToken("edit")) {
        this.save(onSuccess, onFailure);
      } else {
        ctx.onSaveSuccess = onSuccess;
        ctx.onSaveFailure = onFailure || emptyFunction;
        this.load(fnAutoSave, ctx.onSaveFailure);
      }
    };
    this.prepend = function(onSuccess, onFailure) {
      ctx.editMode = "prepend";
      if (fnCanUseMwUserToken("edit")) {
        this.save(onSuccess, onFailure);
      } else {
        ctx.onSaveSuccess = onSuccess;
        ctx.onSaveFailure = onFailure || emptyFunction;
        this.load(fnAutoSave, ctx.onSaveFailure);
      }
    };
    this.newSection = function(onSuccess, onFailure) {
      ctx.editMode = "new";
      if (fnCanUseMwUserToken("edit")) {
        this.save(onSuccess, onFailure);
      } else {
        ctx.onSaveSuccess = onSuccess;
        ctx.onSaveFailure = onFailure || emptyFunction;
        this.load(fnAutoSave, ctx.onSaveFailure);
      }
    };
    this.getPageName = () => {
      return ctx.pageName;
    };
    this.getPageText = () => {
      return ctx.pageText;
    };
    this.setPageText = (pageText) => {
      ctx.editMode = "all";
      ctx.pageText = pageText;
    };
    this.setAppendText = (appendText) => {
      ctx.editMode = "append";
      ctx.appendText = appendText;
    };
    this.setPrependText = (prependText) => {
      ctx.editMode = "prepend";
      ctx.prependText = prependText;
    };
    this.setNewSectionText = (newSectionText) => {
      ctx.editMode = "new";
      ctx.newSectionText = newSectionText;
    };
    this.setNewSectionTitle = (newSectionTitle) => {
      ctx.editMode = "new";
      ctx.newSectionTitle = newSectionTitle;
    };
    this.setEditSummary = (summary) => {
      ctx.editSummary = summary;
    };
    this.setChangeTags = (tags) => {
      ctx.changeTags = tags;
    };
    this.setCreateOption = (createOption) => {
      ctx.createOption = createOption;
    };
    this.setMinorEdit = (minorEdit) => {
      ctx.minorEdit = minorEdit;
    };
    this.setBotEdit = (botEdit) => {
      ctx.botEdit = botEdit;
    };
    this.setPageSection = (pageSection) => {
      ctx.pageSection = pageSection;
    };
    this.setMaxConflictRetries = (maxConflictRetries) => {
      ctx.maxConflictRetries = maxConflictRetries;
    };
    this.setMaxRetries = (maxRetries) => {
      ctx.maxRetries = maxRetries;
    };
    this.setWatchlist = (watchlistOption, watchlistExpiry) => {
      if (watchlistOption instanceof Morebits.date || watchlistOption instanceof Date) {
        watchlistOption = watchlistOption.toISOString();
      }
      if (watchlistExpiry === void 0) {
        watchlistExpiry = "infinity";
      } else if (watchlistExpiry instanceof Morebits.date || watchlistExpiry instanceof Date) {
        watchlistExpiry = watchlistExpiry.toISOString();
      }
      switch (watchlistOption) {
        case "nochange":
        case "no":
        case false:
        case void 0:
          ctx.watchlistOption = "nochange";
          ctx.watchlistExpiry = null;
          break;
        case "unwatch":
          ctx.watchlistOption = "unwatch";
          break;
        case "preferences":
        case "default":
          ctx.watchlistOption = "preferences";
          ctx.watchlistExpiry = watchlistExpiry;
          break;
        case "watch":
        case "yes":
        case true:
          ctx.watchlistOption = "watch";
          ctx.watchlistExpiry = watchlistExpiry;
          break;
        default:
          ctx.watchlistOption = "watch";
          ctx.watchlistExpiry = watchlistOption;
          break;
      }
    };
    this.setWatchlistExpiry = (watchlistExpiry) => {
      if (watchlistExpiry === void 0) {
        watchlistExpiry = "infinity";
      } else if (watchlistExpiry instanceof Morebits.date || watchlistExpiry instanceof Date) {
        watchlistExpiry = watchlistExpiry.toISOString();
      }
      ctx.watchlistExpiry = watchlistExpiry;
    };
    this.setWatchlistFromPreferences = (watchlistOption) => {
      console.warn("[Morebits] NOTE: Morebits.wiki.page.setWatchlistFromPreferences was deprecated December 2020, please use setWatchlist");
      if (watchlistOption) {
        ctx.watchlistOption = "preferences";
      } else {
        ctx.watchlistOption = "nochange";
      }
    };
    this.setFollowRedirect = (followRedirect, followCrossNsRedirect) => {
      if (ctx.pageLoaded) {
        ctx.statusElement.error("Internal error: cannot change redirect setting after the page has been loaded!");
        return;
      }
      ctx.followRedirect = followRedirect;
      ctx.followCrossNsRedirect = followCrossNsRedirect === void 0 ? ctx.followCrossNsRedirect : followCrossNsRedirect;
    };
    this.setLookupNonRedirectCreator = (flag) => {
      ctx.lookupNonRedirectCreator = flag;
    };
    this.setMoveDestination = (destination) => {
      ctx.moveDestination = destination;
    };
    this.setMoveTalkPage = (flag) => {
      ctx.moveTalkPage = !!flag;
    };
    this.setMoveSubpages = (flag) => {
      ctx.moveSubpages = !!flag;
    };
    this.setMoveSuppressRedirect = (flag) => {
      ctx.moveSuppressRedirect = !!flag;
    };
    this.setEditProtection = (level, expiry) => {
      ctx.protectEdit = {
        level,
        expiry: expiry || "infinity"
      };
    };
    this.setMoveProtection = (level, expiry) => {
      ctx.protectMove = {
        level,
        expiry: expiry || "infinity"
      };
    };
    this.setCreateProtection = (level, expiry) => {
      ctx.protectCreate = {
        level,
        expiry: expiry || "infinity"
      };
    };
    this.setCascadingProtection = (flag) => {
      ctx.protectCascade = !!flag;
    };
    this.suppressProtectWarning = () => {
      ctx.suppressProtectWarning = true;
    };
    this.setOldID = (oldID) => {
      ctx.revertOldID = oldID;
    };
    this.getCurrentID = () => {
      return ctx.revertCurID;
    };
    this.getRevisionUser = () => {
      return ctx.revertUser;
    };
    this.getLastEditTime = () => {
      return ctx.lastEditTime;
    };
    this.setCallbackParameters = (callbackParameters) => {
      ctx.callbackParameters = callbackParameters;
    };
    this.getCallbackParameters = () => {
      return ctx.callbackParameters;
    };
    this.setStatusElement = (statusElement) => {
      ctx.statusElement = statusElement;
    };
    this.getStatusElement = () => {
      return ctx.statusElement;
    };
    this.exists = () => {
      return ctx.pageExists;
    };
    this.getPageID = () => {
      return ctx.pageID;
    };
    this.getContentModel = () => {
      return ctx.contentModel;
    };
    this.getWatched = () => {
      return ctx.watched;
    };
    this.getLoadTime = () => {
      return ctx.loadTime;
    };
    this.getCreator = () => {
      return ctx.creator;
    };
    this.getCreationTimestamp = () => {
      return ctx.timestamp;
    };
    this.canEdit = () => {
      return !!ctx.testActions && ctx.testActions.includes("edit");
    };
    this.lookupCreation = function(onSuccess, onFailure) {
      ctx.onLookupCreationSuccess = onSuccess;
      ctx.onLookupCreationFailure = onFailure || emptyFunction;
      if (!onSuccess) {
        ctx.statusElement.error("Internal error: no onSuccess callback provided to lookupCreation()!");
        ctx.onLookupCreationFailure(this);
        return;
      }
      const query = {
        action: "query",
        prop: "revisions",
        titles: ctx.pageName,
        rvlimit: 1,
        rvprop: "user|timestamp",
        rvdir: "newer",
        format: "json"
      };
      if (ctx.lookupNonRedirectCreator) {
        query.rvsection = 0;
        query.rvprop += "|content";
      }
      if (ctx.followRedirect) {
        query.redirects = "";
      }
      ctx.lookupCreationApi = new Morebits.wiki.api(window.wgULS("抓取页面创建者信息", "抓取頁面建立者資訊"), query, fnLookupCreationSuccess, ctx.statusElement, ctx.onLookupCreationFailure);
      ctx.lookupCreationApi.setParent(this);
      ctx.lookupCreationApi.post();
    };
    this.revert = function(onSuccess, onFailure) {
      ctx.onSaveSuccess = onSuccess;
      ctx.onSaveFailure = onFailure || emptyFunction;
      if (!ctx.revertOldID) {
        ctx.statusElement.error("Internal error: revision ID to revert to was not set before revert!");
        ctx.onSaveFailure(this);
        return;
      }
      ctx.editMode = "revert";
      this.load(fnAutoSave, ctx.onSaveFailure);
    };
    this.move = function(onSuccess, onFailure) {
      ctx.onMoveSuccess = onSuccess;
      ctx.onMoveFailure = onFailure || emptyFunction;
      if (!fnPreflightChecks.call(this, "move", ctx.onMoveFailure)) {
        return;
      }
      if (!ctx.moveDestination) {
        ctx.statusElement.error("Internal error: destination page name was not set before move!");
        ctx.onMoveFailure(this);
        return;
      }
      if (fnCanUseMwUserToken("move")) {
        fnProcessMove.call(this, this);
      } else {
        const query = fnNeedTokenInfoQuery("move");
        ctx.moveApi = new Morebits.wiki.api(window.wgULS("获取令牌……", "取得權杖……"), query, fnProcessMove, ctx.statusElement, ctx.onMoveFailure);
        ctx.moveApi.setParent(this);
        ctx.moveApi.post();
      }
    };
    this.patrol = function() {
      if (!Morebits.userIsSysop && !Morebits.userIsInGroup("patroller")) {
        return;
      }
      const $body = $("body");
      if ($body.find(".patrollink").length) {
        const patrolhref = $body.find(".patrollink a").attr("href");
        ctx.rcid = mw.util.getParamValue("rcid", patrolhref);
        fnProcessPatrol(this, this);
      } else {
        const patrolQuery = {
          action: "query",
          prop: "info",
          meta: "tokens",
          type: "patrol",
          // as long as we're querying, might as well get a token
          list: "recentchanges",
          // check if the page is unpatrolled
          titles: ctx.pageName,
          rcprop: "patrolled",
          rctitle: ctx.pageName,
          rclimit: 1,
          format: "json"
        };
        ctx.patrolApi = new Morebits.wiki.api(window.wgULS("获取令牌……", "取得權杖……"), patrolQuery, fnProcessPatrol);
        ctx.patrolApi.setParent(this);
        ctx.patrolApi.post();
      }
    };
    this.deletePage = function(onSuccess, onFailure) {
      ctx.onDeleteSuccess = onSuccess;
      ctx.onDeleteFailure = onFailure || emptyFunction;
      if (!fnPreflightChecks.call(this, "delete", ctx.onDeleteFailure)) {
        return;
      }
      if (fnCanUseMwUserToken("delete")) {
        fnProcessDelete.call(this, this);
      } else {
        const query = fnNeedTokenInfoQuery("delete");
        ctx.deleteApi = new Morebits.wiki.api(window.wgULS("获取令牌……", "取得權杖……"), query, fnProcessDelete, ctx.statusElement, ctx.onDeleteFailure);
        ctx.deleteApi.setParent(this);
        ctx.deleteApi.post();
      }
    };
    this.undeletePage = function(onSuccess, onFailure) {
      ctx.onUndeleteSuccess = onSuccess;
      ctx.onUndeleteFailure = onFailure || emptyFunction;
      if (!fnPreflightChecks.call(this, "undelete", ctx.onUndeleteFailure)) {
        return;
      }
      if (fnCanUseMwUserToken("undelete")) {
        fnProcessUndelete.call(this, this);
      } else {
        const query = fnNeedTokenInfoQuery("undelete");
        ctx.undeleteApi = new Morebits.wiki.api(window.wgULS("获取令牌……", "取得權杖……"), query, fnProcessUndelete, ctx.statusElement, ctx.onUndeleteFailure);
        ctx.undeleteApi.setParent(this);
        ctx.undeleteApi.post();
      }
    };
    this.protect = function(onSuccess, onFailure) {
      ctx.onProtectSuccess = onSuccess;
      ctx.onProtectFailure = onFailure || emptyFunction;
      if (!fnPreflightChecks.call(this, "protect", ctx.onProtectFailure)) {
        return;
      }
      if (!ctx.protectEdit && !ctx.protectMove && !ctx.protectCreate) {
        ctx.statusElement.error("Internal error: you must set edit and/or move and/or create protection before calling protect()!");
        ctx.onProtectFailure(this);
        return;
      }
      const query = fnNeedTokenInfoQuery("protect");
      ctx.protectApi = new Morebits.wiki.api(window.wgULS("获取令牌……", "取得權杖……"), query, fnProcessProtect, ctx.statusElement, ctx.onProtectFailure);
      ctx.protectApi.setParent(this);
      ctx.protectApi.post();
    };
    const fnCanUseMwUserToken = (action) => {
      action || (action = "edit");
      if (ctx.watchlistExpiry && !Morebits.string.isInfinity(ctx.watchlistExpiry)) {
        return false;
      }
      if (ctx.followRedirect) {
        if (!ctx.followCrossNsRedirect) {
          return false;
        }
        if (action !== "edit" || ctx.editMode === "all" || ctx.editMode === "revert") {
          return false;
        }
      }
      if (Morebits.userIsSysop && !ctx.suppressProtectWarning) {
        if (new mw.Title(Morebits.pageNameNorm).getPrefixedText() !== new mw.Title(ctx.pageName).getPrefixedText()) {
          return false;
        }
        const editRestriction = mw.config.get("wgRestrictionEdit");
        if (!editRestriction || editRestriction.includes("sysop")) {
          return false;
        }
      }
      return !!mw.user.tokens.get("csrfToken");
    };
    const fnNeedTokenInfoQuery = (action) => {
      const query = {
        action: "query",
        meta: "tokens",
        type: "csrf",
        titles: ctx.pageName,
        prop: "info",
        inprop: "watched",
        format: "json"
      };
      if (action !== "move" || Morebits.userIsSysop) {
        query.inprop += "|protection";
      }
      if (ctx.followRedirect && action !== "undelete") {
        query.redirects = "";
      }
      return query;
    };
    const fnAutoSave = (pageobj) => {
      pageobj.save(ctx.onSaveSuccess, ctx.onSaveFailure);
    };
    const fnLoadSuccess = function() {
      const response = ctx.loadApi.getResponse().query;
      if (!fnCheckPageName(response, ctx.onLoadFailure)) {
        return;
      }
      const [page] = response.pages;
      let rev;
      ctx.pageExists = !page.missing;
      if (ctx.pageExists) {
        [rev] = page.revisions;
        ctx.lastEditTime = rev.timestamp;
        ctx.pageText = rev.content;
        ctx.pageID = page.pageid;
      } else {
        ctx.pageText = "";
        ctx.pageID = 0;
      }
      ctx.csrfToken = response.tokens.csrftoken;
      if (!ctx.csrfToken) {
        ctx.statusElement.error(window.wgULS("未能获取编辑令牌。", "未能取得編輯權杖。"));
        ctx.onLoadFailure(this);
        return;
      }
      ctx.loadTime = ctx.loadApi.getResponse().curtimestamp;
      if (!ctx.loadTime) {
        ctx.statusElement.error(window.wgULS("未能获取当前时间戳。", "未能取得當前時間戳。"));
        ctx.onLoadFailure(this);
        return;
      }
      ctx.contentModel = page.contentmodel;
      ctx.watched = page.watchlistexpiry || page.watched;
      if (Morebits.userIsSysop) {
        const editProt = page.protection.findLast((pr) => {
          return pr.type === "edit" && pr.level === "sysop";
        });
        if (editProt) {
          ctx.fullyProtected = editProt.expiry;
        } else {
          ctx.fullyProtected = false;
        }
      }
      ctx.revertCurID = page.lastrevid;
      const testactions = page.actions;
      ctx.testActions = [];
      for (var _i6 = 0, _Object$keys = Object.keys(testactions); _i6 < _Object$keys.length; _i6++) {
        const action = _Object$keys[_i6];
        if (testactions[action]) {
          ctx.testActions[ctx.testActions.length] = action;
        }
      }
      if (ctx.editMode === "revert") {
        ctx.revertCurID = rev && rev.revid;
        if (!ctx.revertCurID) {
          ctx.statusElement.error(window.wgULS("未能获取当前修订版本ID。", "未能取得目前修訂版本ID。"));
          ctx.onLoadFailure(this);
          return;
        }
        ctx.revertUser = rev && rev.user;
        if (!ctx.revertUser) {
          if (rev && rev.userhidden) {
            ctx.revertUser = window.wgULS("<用户名已隐藏>", "<使用者名稱已隱藏>");
          } else {
            ctx.statusElement.error(window.wgULS("未能获取此修订版本的编辑者。", "未能取得此修訂版本的編輯者。"));
            ctx.onLoadFailure(this);
            return;
          }
        }
        ctx.editSummary = "[[QW:UNDO|撤销]]由 ".concat(ctx.revertUser, " 所做出的").concat(window.wgULS("修订 ", "修訂 ")).concat(ctx.revertOldID, "：").concat(ctx.editSummary);
      }
      ctx.pageLoaded = true;
      ctx.onLoadSuccess(this);
    };
    const fnCheckPageName = function(response, onFailure) {
      onFailure || (onFailure = emptyFunction);
      const page = response.pages && response.pages[0];
      if (page) {
        if (page.invalid) {
          ctx.statusElement.error(window.wgULS("标题不合法：", "標題不合法：".concat(ctx.pageName)));
          onFailure(this);
          return false;
        }
        const resolvedName = page.title;
        if (response.redirects) {
          const origNs = new mw.Title(ctx.pageName).namespace;
          const newNs = new mw.Title(resolvedName).namespace;
          if (origNs !== newNs && !ctx.followCrossNsRedirect) {
            ctx.statusElement.error(ctx.pageName + window.wgULS("是跨命名空间重定向到", "是跨命名空間重新導向到") + resolvedName + window.wgULS("，略过", "，略過"));
            onFailure(this);
            return false;
          }
          new Morebits.status(window.wgULS("信息", "資訊"), window.wgULS("从 ", "從 ") + ctx.pageName + window.wgULS(" 重定向到 ", " 重新導向到 ") + resolvedName);
        }
        ctx.pageName = resolvedName;
      } else {
        ctx.statusElement.error(window.wgULS("不能解析页面的重定向：", "不能解析頁面的重新導向：") + ctx.pageName);
        onFailure(this);
        ++Morebits.wiki.numberOfActionsLeft;
        return false;
      }
      return true;
    };
    const fnApplyWatchlistExpiry = () => {
      if (ctx.watchlistExpiry) {
        if (!ctx.watched || Morebits.string.isInfinity(ctx.watchlistExpiry)) {
          return true;
        } else if (typeof ctx.watched === "string") {
          let newExpiry;
          const rel = ctx.watchlistExpiry.split(" ");
          try {
            newExpiry = new Morebits.date().add(rel[0], rel[1]);
          } catch {
            newExpiry = new Morebits.date(ctx.watchlistExpiry);
          }
          if (newExpiry.isValid()) {
            if (newExpiry.isAfter(new Morebits.date(ctx.watched))) {
              return true;
            }
          } else {
            return true;
          }
        }
      }
      return false;
    };
    const fnSaveSuccess = function() {
      ctx.editMode = "all";
      const response = ctx.saveApi.getResponse();
      if (response.edit.result === "Success") {
        const link = document.createElement("a");
        link.setAttribute("href", mw.util.getUrl(ctx.pageName));
        link.appendChild(document.createTextNode(ctx.pageName));
        ctx.statusElement.info(["完成（", link, "）"]);
        if (ctx.onSaveSuccess) {
          ctx.onSaveSuccess(this);
        }
        return;
      }
      if (response.edit.captcha) {
        ctx.statusElement.error(window.wgULS("不能保存页面，因服务器要求您输入验证码。", "不能儲存頁面，因伺服器要求您輸入驗證碼。"));
      } else {
        ctx.statusElement.error(window.wgULS("保存页面时由API得到未知错误", "儲存頁面時由API得到未知錯誤"));
      }
      ++Morebits.wiki.numberOfActionsLeft;
      ctx.onSaveFailure(this);
    };
    const fnSaveError = function() {
      const errorCode = ctx.saveApi.getErrorCode();
      if (errorCode === "editconflict" && ctx.conflictRetries++ < ctx.maxConflictRetries) {
        const purgeQuery = {
          action: "purge",
          titles: ctx.pageName
          // redirects are already resolved
        };
        const purgeApi = new Morebits.wiki.api(window.wgULS("检测到编辑冲突，正在更新服务器缓存", "檢測到編輯衝突，正在更新伺服器快取"), purgeQuery, () => {
          --Morebits.wiki.numberOfActionsLeft;
          ctx.statusElement.info(window.wgULS("检测到编辑冲突，重试修改", "檢測到編輯衝突，重試修改"));
          if (fnCanUseMwUserToken("edit")) {
            ctx.saveApi.post();
          } else {
            ctx.loadApi.post();
          }
        }, ctx.statusElement);
        purgeApi.post();
      } else if ((errorCode === null || errorCode === void 0) && ctx.retries++ < ctx.maxRetries) {
        ctx.statusElement.info(window.wgULS("保存失败，在2秒后重试……", "儲存失敗，在2秒後重試……"));
        --Morebits.wiki.numberOfActionsLeft;
        sleep(2e3).then(() => {
          ctx.saveApi.post();
        });
      } else {
        const response = ctx.saveApi.getResponse();
        const errorData = response.error || // bc error format
        response.errors[0].data;
        switch (errorCode) {
          case "protectedpage":
            ctx.statusElement.error(window.wgULS("不能保存修改：页面被保护", "不能儲存修改：頁面被保護"));
            break;
          case "abusefilter-disallowed":
            ctx.statusElement.error(window.wgULS("编辑被防滥用过滤器规则“", "編輯被防濫用過濾器規則「") + errorData.abusefilter.description + window.wgULS("”阻止。若您认为您的该次编辑是有意义的，请至 Qiuwen_talk:管理员告示板 提报。", "」阻止。若您認為您的該次編輯是有意義的，請至 Qiuwen_talk:管理員告示板 提報。"));
            break;
          case "abusefilter-warning":
            ctx.statusElement.error([window.wgULS("编辑被防滥用过滤器规则“", "編輯被防濫用過濾器規則「"), errorData.abusefilter.description, window.wgULS("”警告，若您仍希望做出该编辑，请尝试重新提交，根据过滤器的设置您可能可以作出此编辑。", "」警告，若您仍希望做出該編輯，請嘗試重新提交，根據過濾器的設定您可能可以作出此編輯。")]);
            break;
          case "spamblacklist": {
            const [spam] = errorData.spamblacklist.matches;
            ctx.statusElement.error(window.wgULS("不能保存页面，因URL ", "不能儲存頁面，因URL ") + spam + window.wgULS(" 在垃圾链接黑名单中。", " 在垃圾連結黑名單中。"));
            break;
          }
          default:
            ctx.statusElement.error(window.wgULS("不能保存修改：", "不能儲存修改：") + ctx.saveApi.getErrorText());
        }
        ctx.editMode = "all";
        if (ctx.onSaveFailure) {
          ctx.onSaveFailure(this);
        }
      }
    };
    const isTextRedirect = (text) => {
      if (!text) {
        return false;
      }
      return Morebits.l10n.redirectTagAliases.some((tag) => {
        return new RegExp("^\\s*".concat(tag, "\\W"), "i").test(text);
      });
    };
    const fnLookupCreationSuccess = function() {
      const response = ctx.lookupCreationApi.getResponse().query;
      if (!fnCheckPageName(response, ctx.onLookupCreationFailure)) {
        return;
      }
      const rev = response.pages[0].revisions && response.pages[0].revisions[0];
      if (!rev) {
        ctx.statusElement.error(window.wgULS("无法找到", "無法找到") + ctx.pageName + window.wgULS("的任何修订版本", "的任何修訂版本"));
        ctx.onLookupCreationFailure(this);
        return;
      }
      if (!ctx.lookupNonRedirectCreator || !isTextRedirect(rev.content)) {
        ctx.creator = rev.user;
        if (!ctx.creator) {
          ctx.statusElement.error(window.wgULS("无法获取页面创建者的名字", "無法取得頁面建立者的名字"));
          ctx.onLookupCreationFailure(this);
          return;
        }
        ctx.timestamp = rev.timestamp;
        if (!ctx.timestamp) {
          ctx.statusElement.error(window.wgULS("无法获取页面创建时间", "無法取得頁面建立時間"));
          ctx.onLookupCreationFailure(this);
          return;
        }
        ctx.statusElement.info(window.wgULS("已获取页面创建信息", "已取得頁面建立資訊"));
        ctx.onLookupCreationSuccess(this);
      } else {
        ctx.lookupCreationApi.query.rvlimit = 50;
        ctx.lookupCreationApi.query.titles = ctx.pageName;
        ctx.lookupCreationApi = new Morebits.wiki.api(window.wgULS("获取页面创建信息", "取得頁面建立資訊"), ctx.lookupCreationApi.query, fnLookupNonRedirectCreator, ctx.statusElement, ctx.onLookupCreationFailure);
        ctx.lookupCreationApi.setParent(this);
        ctx.lookupCreationApi.post();
      }
    };
    const fnLookupNonRedirectCreator = function() {
      const response = ctx.lookupCreationApi.getResponse().query;
      const revs = response.pages[0].revisions;
      var _iterator8 = _createForOfIteratorHelper(revs), _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
          const rev = _step8.value;
          if (!isTextRedirect(rev.content)) {
            ctx.creator = rev.user;
            ctx.timestamp = rev.timestamp;
            break;
          }
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
      if (!ctx.creator) {
        ctx.creator = revs[0].user;
        ctx.timestamp = revs[0].timestamp;
        if (!ctx.creator) {
          ctx.statusElement.error(window.wgULS("无法获取页面创建者的名字", "無法取得頁面建立者的名字"));
          ctx.onLookupCreationFailure(this);
          return;
        }
      }
      if (!ctx.timestamp) {
        ctx.statusElement.error(window.wgULS("无法获取页面创建时间", "無法取得頁面建立時間"));
        ctx.onLookupCreationFailure(this);
        return;
      }
      ctx.statusElement.info(window.wgULS("已获取页面创建信息", "已取得頁面建立資訊"));
      ctx.onLookupCreationSuccess(this);
    };
    const fnPreflightChecks = function(action, onFailure) {
      if (!Morebits.userIsSysop && action !== "move") {
        ctx.statusElement.error(window.wgULS("无法对页面进行“", "無法對頁面進行「") + action + window.wgULS("”操作：只有管理员可以进行此操作", "」操作：只有管理員可以進行此操作"));
        onFailure(this);
        return false;
      }
      if (!ctx.editSummary) {
        ctx.statusElement.error("Internal error: ".concat(action, " reason not set (use setEditSummary function)!"));
        onFailure(this);
        return false;
      }
      return true;
    };
    const fnProcessChecks = function(action, onFailure, response) {
      const [{
        missing
      }] = response.pages;
      const actionMissing = missing && ["delete", "move"].includes(action);
      const protectMissing = action === "protect" && missing && (ctx.protectEdit || ctx.protectMove);
      const saltMissing = action === "protect" && !missing && ctx.protectCreate;
      if (actionMissing || protectMissing || saltMissing) {
        ctx.statusElement.error("".concat(window.wgULS("无法对页面进行“", "無法對頁面進行「") + action + window.wgULS("”操作，因为页面", "」操作，因為頁面") + (missing ? "已不" : window.wgULS("已经", "已經")), "存在"));
        onFailure(this);
        return false;
      }
      let editprot;
      if (action === "undelete") {
        editprot = response.pages[0].protection.findLast((pr) => {
          return pr.type === "create" && pr.level === "sysop";
        });
      } else if (action === "delete" || action === "move") {
        editprot = response.pages[0].protection.findLast((pr) => {
          return pr.type === "edit" && pr.level === "sysop";
        });
      }
      if (editprot && !ctx.suppressProtectWarning && !confirm(window.wgULS("您即将对全保护页面“", "您即將對全保護頁面「") + ctx.pageName + (editprot.expiry === "infinity" ? window.wgULS("”（永久）", "」（永久）") : "".concat(window.wgULS("”（到期：", "」（到期：") + new Morebits.date(editprot.expiry).calendar("utc"), " (UTC)）")) + window.wgULS("”进行“", "」進行「") + action + window.wgULS("”操作", "」操作") + window.wgULS("。\n\n单击确定以继续操作，或单击取消以取消操作。", "。\n\n點擊確定以繼續操作，或點擊取消以取消操作。"))) {
        ctx.statusElement.error(window.wgULS("已取消对全保护页面的操作。", "已取消對全保護頁面的操作。"));
        onFailure(this);
        return false;
      }
      if (!response.tokens.csrftoken) {
        ctx.statusElement.error(window.wgULS("无法获取令牌。", "無法取得權杖。"));
        onFailure(this);
        return false;
      }
      return true;
    };
    const fnProcessMove = function() {
      let pageTitle;
      let token;
      if (fnCanUseMwUserToken("move")) {
        token = mw.user.tokens.get("csrfToken");
        pageTitle = ctx.pageName;
      } else {
        const response = ctx.moveApi.getResponse().query;
        if (!fnProcessChecks("move", ctx.onMoveFailure, response)) {
          return;
        }
        token = response.tokens.csrftoken;
        const [page] = response.pages;
        pageTitle = page.title;
        ctx.watched = page.watchlistexpiry || page.watched;
      }
      const query = {
        action: "move",
        from: pageTitle,
        to: ctx.moveDestination,
        token,
        reason: ctx.editSummary,
        watchlist: ctx.watchlistOption,
        format: "json"
      };
      if (ctx.changeTags) {
        query.tags = ctx.changeTags;
      }
      if (fnApplyWatchlistExpiry()) {
        query.watchlistexpiry = ctx.watchlistExpiry;
      }
      if (ctx.moveTalkPage) {
        query.movetalk = "true";
      }
      if (ctx.moveSubpages) {
        query.movesubpages = "true";
      }
      if (ctx.moveSuppressRedirect) {
        query.noredirect = "true";
      }
      ctx.moveProcessApi = new Morebits.wiki.api(window.wgULS("移动页面……", "移動頁面……"), query, ctx.onMoveSuccess, ctx.statusElement, ctx.onMoveFailure);
      ctx.moveProcessApi.setParent(this);
      ctx.moveProcessApi.post();
    };
    const fnProcessPatrol = function() {
      const query = {
        action: "patrol",
        format: "json"
      };
      if (ctx.rcid) {
        query.rcid = ctx.rcid;
        query.token = mw.user.tokens.get("patrolToken");
      } else {
        const response = ctx.patrolApi.getResponse().query;
        if (!response.recentchanges[0].unpatrolled) {
          return;
        }
        const [{
          lastrevid
        }] = response.pages;
        if (!lastrevid) {
          return;
        }
        query.revid = lastrevid;
        const token = response.tokens.csrftoken;
        if (!token) {
          return;
        }
        query.token = token;
      }
      if (ctx.changeTags) {
        query.tags = ctx.changeTags;
      }
      const patrolStat = new Morebits.status(window.wgULS("标记页面为已巡查", "標記頁面為已巡查"));
      ctx.patrolProcessApi = new Morebits.wiki.api(window.wgULS("巡查页面……", "巡查頁面……"), query, null, patrolStat);
      ctx.patrolProcessApi.setParent(this);
      ctx.patrolProcessApi.post();
    };
    const fnProcessDelete = function() {
      let pageTitle;
      let token;
      if (fnCanUseMwUserToken("delete")) {
        token = mw.user.tokens.get("csrfToken");
        pageTitle = ctx.pageName;
      } else {
        const response = ctx.deleteApi.getResponse().query;
        if (!fnProcessChecks("delete", ctx.onDeleteFailure, response)) {
          return;
        }
        token = response.tokens.csrftoken;
        const [page] = response.pages;
        pageTitle = page.title;
        ctx.watched = page.watchlistexpiry || page.watched;
      }
      const query = {
        action: "delete",
        title: pageTitle,
        token,
        reason: ctx.editSummary,
        watchlist: ctx.watchlistOption,
        format: "json"
      };
      if (ctx.changeTags) {
        query.tags = ctx.changeTags;
      }
      if (fnApplyWatchlistExpiry()) {
        query.watchlistexpiry = ctx.watchlistExpiry;
      }
      ctx.deleteProcessApi = new Morebits.wiki.api(window.wgULS("删除页面……", "刪除頁面……"), query, ctx.onDeleteSuccess, ctx.statusElement, fnProcessDeleteError);
      ctx.deleteProcessApi.setParent(this);
      ctx.deleteProcessApi.post();
    };
    const fnProcessDeleteError = function() {
      const errorCode = ctx.deleteProcessApi.getErrorCode();
      if (errorCode === "internal_api_error_DBQueryError" && ctx.retries++ < ctx.maxRetries) {
        ctx.statusElement.info(window.wgULS("数据库查询错误，重试", "資料庫查詢錯誤，重試"));
        --Morebits.wiki.numberOfActionsLeft;
        ctx.deleteProcessApi.post();
      } else if (errorCode === "missingtitle") {
        ctx.statusElement.error(window.wgULS("不能删除页面，因其已不存在", "不能刪除頁面，因其已不存在"));
        if (ctx.onDeleteFailure) {
          ctx.onDeleteFailure.call(this, ctx.deleteProcessApi);
        }
      } else {
        ctx.statusElement.error(window.wgULS("无法删除页面：", "無法刪除頁面：") + ctx.deleteProcessApi.getErrorText());
        if (ctx.onDeleteFailure) {
          ctx.onDeleteFailure.call(this, ctx.deleteProcessApi);
        }
      }
    };
    const fnProcessUndelete = function() {
      let pageTitle;
      let token;
      if (fnCanUseMwUserToken("undelete")) {
        token = mw.user.tokens.get("csrfToken");
        pageTitle = ctx.pageName;
      } else {
        const response = ctx.undeleteApi.getResponse().query;
        if (!fnProcessChecks("undelete", ctx.onUndeleteFailure, response)) {
          return;
        }
        token = response.tokens.csrftoken;
        const [page] = response.pages;
        pageTitle = page.title;
        ctx.watched = page.watchlistexpiry || page.watched;
      }
      const query = {
        action: "undelete",
        title: pageTitle,
        token,
        reason: ctx.editSummary,
        watchlist: ctx.watchlistOption,
        format: "json"
      };
      if (ctx.changeTags) {
        query.tags = ctx.changeTags;
      }
      if (fnApplyWatchlistExpiry()) {
        query.watchlistexpiry = ctx.watchlistExpiry;
      }
      ctx.undeleteProcessApi = new Morebits.wiki.api(window.wgULS("还原页面……", "還原頁面……"), query, ctx.onUndeleteSuccess, ctx.statusElement, fnProcessUndeleteError);
      ctx.undeleteProcessApi.setParent(this);
      ctx.undeleteProcessApi.post();
    };
    const fnProcessUndeleteError = function() {
      const errorCode = ctx.undeleteProcessApi.getErrorCode();
      if (errorCode === "internal_api_error_DBQueryError") {
        if (ctx.retries++ < ctx.maxRetries) {
          ctx.statusElement.info(window.wgULS("数据库查询错误，重试", "資料庫查詢錯誤，重試"));
          --Morebits.wiki.numberOfActionsLeft;
          ctx.undeleteProcessApi.post();
        } else {
          ctx.statusElement.error(window.wgULS("持续的数据库查询错误，重新加载页面并重试", "持續的資料庫查詢錯誤，重新載入頁面並重試"));
          if (ctx.onUndeleteFailure) {
            ctx.onUndeleteFailure.call(this, ctx.undeleteProcessApi);
          }
        }
      } else if (errorCode === "cantundelete") {
        ctx.statusElement.error(window.wgULS("无法还原删除页面，因没有版本供还原或已被还原", "無法還原刪除頁面，因沒有版本供還原或已被還原"));
        if (ctx.onUndeleteFailure) {
          ctx.onUndeleteFailure.call(this, ctx.undeleteProcessApi);
        }
      } else {
        ctx.statusElement.error(window.wgULS("无法还原页面：", "無法還原頁面：") + ctx.undeleteProcessApi.getErrorText());
        if (ctx.onUndeleteFailure) {
          ctx.onUndeleteFailure.call(this, ctx.undeleteProcessApi);
        }
      }
    };
    const fnProcessProtect = function() {
      const response = ctx.protectApi.getResponse().query;
      if (!fnProcessChecks("protect", ctx.onProtectFailure, response)) {
        return;
      }
      const token = response.tokens.csrftoken;
      const [page] = response.pages;
      const pageTitle = page.title;
      ctx.watched = page.watchlistexpiry || page.watched;
      const prs = response.pages[0].protection;
      let editprot;
      let moveprot;
      let createprot;
      var _iterator9 = _createForOfIteratorHelper(prs), _step9;
      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) {
          const pr = _step9.value;
          if (pr.type === "edit" && !pr.source) {
            editprot = pr;
          } else if (pr.type === "move") {
            moveprot = pr;
          } else if (pr.type === "create") {
            createprot = pr;
          }
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
      if (!ctx.protectEdit && editprot) {
        ctx.protectEdit = {
          level: editprot.level,
          expiry: editprot.expiry
        };
      }
      if (!ctx.protectMove && moveprot) {
        ctx.protectMove = {
          level: moveprot.level,
          expiry: moveprot.expiry
        };
      }
      if (!ctx.protectCreate && createprot) {
        ctx.protectCreate = {
          level: createprot.level,
          expiry: createprot.expiry
        };
      }
      if (ctx.protectCascade === null) {
        ctx.protectCascade = !!prs.filter((pr) => {
          return pr.cascade;
        }).length;
      }
      if (ctx.protectCascade) {
        if ((!ctx.protectEdit || ctx.protectEdit.level !== "sysop" || !ctx.protectMove || ctx.protectMove.level !== "sysop") && !confirm(window.wgULS("您已对“", "您已對「") + ctx.pageName + window.wgULS("”启用了连锁保护", "」啟用了連鎖保護") + window.wgULS("，但没有设置仅管理员的保护级别。\n\n", "，但沒有設定僅管理員的保護級別。\n\n") + window.wgULS("单击确认以自动调整并继续连锁全保护，单击取消以跳过此操作", "點擊確認以自動調整並繼續連鎖全保護，點擊取消以跳過此操作"))) {
          ctx.statusElement.error(window.wgULS("连锁保护已取消。", "連鎖保護已取消。"));
          ctx.onProtectFailure(this);
          return;
        }
        ctx.protectEdit.level = "sysop";
        ctx.protectMove.level = "sysop";
      }
      const protections = [];
      const expirys = [];
      if (ctx.protectEdit) {
        protections[protections.length] = "edit=".concat(ctx.protectEdit.level);
        expirys[expirys.length] = ctx.protectEdit.expiry;
      }
      if (ctx.protectMove) {
        protections[protections.length] = "move=".concat(ctx.protectMove.level);
        expirys[expirys.length] = ctx.protectMove.expiry;
      }
      if (ctx.protectCreate) {
        protections[protections.length] = "create=".concat(ctx.protectCreate.level);
        expirys[expirys.length] = ctx.protectCreate.expiry;
      }
      const query = {
        action: "protect",
        title: pageTitle,
        token,
        protections: protections.join("|"),
        expiry: expirys.join("|"),
        reason: ctx.editSummary,
        watchlist: ctx.watchlistOption,
        format: "json"
      };
      if (ctx.changeTags) {
        query.tags = ctx.changeTags;
      }
      if (fnApplyWatchlistExpiry()) {
        query.watchlistexpiry = ctx.watchlistExpiry;
      }
      if (ctx.protectCascade) {
        query.cascade = "true";
      }
      ctx.protectProcessApi = new Morebits.wiki.api(window.wgULS("保护页面……", "保護頁面……"), query, ctx.onProtectSuccess, ctx.statusElement, ctx.onProtectFailure);
      ctx.protectProcessApi.setParent(this);
      ctx.protectProcessApi.post();
    };
    const sleep = (milliseconds) => {
      const deferred = $.Deferred();
      setTimeout(deferred.resolve, milliseconds);
      return deferred;
    };
  };
  Morebits.wiki.preview = function(previewbox) {
    this.previewbox = previewbox;
    $(previewbox).addClass("morebits-previewbox").hide();
    this.beginRender = (wikitext, pageTitle, sectionTitle) => {
      $(previewbox).show();
      const statusspan = document.createElement("span");
      previewbox.appendChild(statusspan);
      Morebits.status.init(statusspan);
      let pageName = mw.config.get("wgPageName");
      if (mw.config.get("wgPageContentModel") !== "wikitext") {
        pageName = "Draft:".concat(pageName);
      }
      const query = {
        action: "parse",
        prop: ["text", "modules"],
        pst: true,
        // PST = pre-save transform; this makes substitution work properly
        preview: true,
        text: wikitext,
        title: pageTitle || pageName,
        disablelimitreport: true,
        disableeditsection: true,
        uselang: mw.config.get("wgUserLanguage"),
        // Use wgUserLanguage for preview
        format: "json"
      };
      if (sectionTitle) {
        query.section = "new";
        query.sectiontitle = sectionTitle;
      }
      const renderApi = new Morebits.wiki.api(window.wgULS("加载中……", "載入中……"), query, fnRenderSuccess, new Morebits.status(window.wgULS("预览", "預覽")));
      renderApi.post();
    };
    const fnRenderSuccess = (apiobj) => {
      const response = apiobj.getResponse();
      const html = response.parse.text;
      if (!html) {
        apiobj.statelem.error(window.wgULS("加载预览失败，或模板为空", "載入預覽失敗，或模板為空"));
        return;
      }
      previewbox.innerHTML = html;
      mw.loader.load(response.parse.modulestyles);
      mw.loader.load(response.parse.modules);
      $(previewbox).find("a").attr("target", "_blank").attr("rel", "noopener noreferrer");
    };
    this.closePreview = () => {
      $(previewbox).empty().hide();
    };
  };
  Morebits.wikitext = {};
  Morebits.wikitext.parseTemplate = (text, start) => {
    start || (start = 0);
    const level = [];
    let count = -1;
    let unnamed = 0;
    let equals = -1;
    let current = "";
    const result = {
      name: "",
      parameters: {}
    };
    let key;
    let value;
    const findParam = (final) => {
      if (count === -1) {
        result.name = current.slice(2).trim();
        ++count;
      } else if (equals === -1) {
        const param = final ? current.slice(equals + 1, -2) : current;
        if (param) {
          result.parameters[++unnamed] = param;
          ++count;
        }
      } else {
        key = current.slice(0, Math.max(0, equals)).trim();
        value = final ? current.slice(equals + 1, -2).trim() : current.slice(Math.max(0, equals + 1)).trim();
        result.parameters[key] = value;
        equals = -1;
      }
    };
    for (let i = start; i < text.length; ++i) {
      const test3 = text.slice(i, i + 3);
      if (test3 === "{{{" || test3 === "}}}" && level.at(-1) === 3) {
        current += test3;
        i += 2;
        if (test3 === "{{{") {
          level[level.length] = 3;
        } else {
          level.pop();
        }
        continue;
      }
      const test2 = text.slice(i, i + 2);
      if (test2 === "{{" || test2 === "[[") {
        current += test2;
        ++i;
        if (test2 === "{{") {
          level[level.length] = 2;
        } else {
          level[level.length] = "wl";
        }
        continue;
      }
      if (test2 === "}}" && level.at(-1) === 2 || test2 === "]]" && level.at(-1) === "wl") {
        current += test2;
        ++i;
        level.pop();
        if (test2 === "}}" && level.length === 0) {
          findParam(true);
          break;
        }
        continue;
      }
      if (text.charAt(i) === "|" && level.length === 1) {
        findParam();
        current = "";
      } else if (equals === -1 && text.charAt(i) === "=" && level.length === 1) {
        equals = current.length;
        current += text.charAt(i);
      } else {
        current += text.charAt(i);
      }
    }
    return result;
  };
  Morebits.wikitext.page = function(text) {
    this.text = text;
  };
  Morebits.wikitext.page.prototype = {
    text: "",
    /**
     * Removes links to `link_target` from the page text.
     *
     * @param {string} linkTarget
     * @returns {Morebits.wikitext.page}
     */
    removeLink(linkTarget) {
      const mwTitle = mw.Title.newFromText(linkTarget);
      const namespaceID = mwTitle.getNamespaceId();
      const title = mwTitle.getMainText();
      let linkRegexString = "";
      if (namespaceID !== 0) {
        linkRegexString = "".concat(Morebits.namespaceRegex(namespaceID), ":");
      }
      linkRegexString += Morebits.pageNameRegex(title);
      const isFileOrCategory = [6, 14].includes(namespaceID);
      const colon = isFileOrCategory ? ":" : ":?";
      const simpleLinkRegex = new RegExp("\\[\\[".concat(colon, "(").concat(linkRegexString, ")\\]\\]"), "g");
      const pipedLinkRegex = new RegExp("\\[\\[".concat(colon).concat(linkRegexString, "\\|(.+?)\\]\\]"), "g");
      this.text = this.text.replace(simpleLinkRegex, "$1").replace(pipedLinkRegex, "$1");
      return this;
    },
    /**
     * Comments out images from page text; if used in a gallery, deletes the whole line.
     * If used as a template argument (not necessarily with `File:` prefix), the template parameter is commented out.
     *
     * @param {string} image - Image name without `File:` prefix.
     * @param {string} [reason] - Reason to be included in comment, alongside the commented-out image.
     * @returns {Morebits.wikitext.page}
     */
    commentOutImage(image, reason) {
      const unbinder = new Morebits.unbinder(this.text);
      unbinder.unbind("<!--", "-->");
      reason = reason ? "".concat(reason, ": ") : "";
      const imageRegexString = Morebits.pageNameRegex(image);
      const linksRegex = new RegExp("\\[\\[".concat(Morebits.namespaceRegex(6), ":\\s*").concat(imageRegexString, "\\s*[\\|(?:\\]\\])]"));
      const allLinks = Morebits.string.splitWeightedByKeys(unbinder.content, "[[", "]]");
      var _iterator0 = _createForOfIteratorHelper(allLinks), _step0;
      try {
        for (_iterator0.s(); !(_step0 = _iterator0.n()).done; ) {
          const allLink = _step0.value;
          if (linksRegex.test(allLink)) {
            const replacement = "<!-- ".concat(reason).concat(allLink, " -->");
            unbinder.content = unbinder.content.replace(allLink, replacement);
            unbinder.unbind("<!--", "-->");
          }
        }
      } catch (err) {
        _iterator0.e(err);
      } finally {
        _iterator0.f();
      }
      const galleryImageRegex = new RegExp("(^\\s*".concat(Morebits.namespaceRegex(6), ":\\s*").concat(imageRegexString, "\\s*(?:\\|.*?$|$))"), "mg");
      unbinder.content = unbinder.content.replace(galleryImageRegex, "<!-- ".concat(reason, "$1 -->"));
      unbinder.unbind("<!--", "-->");
      const freeImageRegex = new RegExp("(\\|\\s*(?:[\\w\\s]+\\=)?\\s*(?:".concat(Morebits.namespaceRegex(6), ":\\s*)?").concat(imageRegexString, ")"), "mg");
      unbinder.content = unbinder.content.replace(freeImageRegex, "<!-- ".concat(reason, "$1 -->"));
      this.text = unbinder.rebind();
      return this;
    },
    /**
     * Converts uses of [[File:`image`]] to [[File:`image`|`data`]].
     *
     * @param {string} image - Image name without File: prefix.
     * @param {string} data - The display options.
     * @returns {Morebits.wikitext.page}
     */
    addToImageComment(image, data) {
      const imageRegexString = Morebits.pageNameRegex(image);
      const linksRegex = new RegExp("\\[\\[".concat(Morebits.namespaceRegex(6), ":\\s*").concat(imageRegexString, "\\s*[\\|(?:\\]\\])]"));
      const allLinks = Morebits.string.splitWeightedByKeys(this.text, "[[", "]]");
      var _iterator1 = _createForOfIteratorHelper(allLinks), _step1;
      try {
        for (_iterator1.s(); !(_step1 = _iterator1.n()).done; ) {
          let replacement = _step1.value;
          if (linksRegex.test(replacement)) {
            replacement = replacement.replace(/\]\]$/, "|".concat(data, "]]"));
            this.text = this.text.replace(replacement, replacement);
          }
        }
      } catch (err) {
        _iterator1.e(err);
      } finally {
        _iterator1.f();
      }
      const galleryRegex = new RegExp("^(\\s*".concat(imageRegexString, ".*?)\\|?(.*?)$"), "mg");
      const newtext = "$1|$2 ".concat(data);
      this.text = this.text.replace(galleryRegex, newtext);
      return this;
    },
    /**
     * Remove all transclusions of a template from page text.
     *
     * @param {string} template - Page name whose transclusions are to be removed,
     * include namespace prefix only if not in template namespace.
     * @returns {Morebits.wikitext.page}
     */
    removeTemplate(template) {
      const templateRegexString = Morebits.pageNameRegex(template);
      const linksRegex = new RegExp("\\{\\{(?:".concat(Morebits.namespaceRegex(10), ":)?\\s*").concat(templateRegexString, "\\s*[\\|(?:\\}\\})]"));
      const allTemplates = Morebits.string.splitWeightedByKeys(this.text, "{{", "}}", ["{{{", "}}}"]);
      var _iterator10 = _createForOfIteratorHelper(allTemplates), _step10;
      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done; ) {
          const allTemplate = _step10.value;
          if (linksRegex.test(allTemplate)) {
            this.text = this.text.replace(allTemplate, "");
          }
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }
      return this;
    },
    /**
     * Smartly insert a tag atop page text but after specified templates,
     * such as hatnotes, short description, or deletion and protection templates.
     * Notably, does *not* insert a newline after the tag.
     *
     * @param {string} tag - The tag to be inserted.
     * @param {string|string[]} regex - Templates after which to insert tag,
     * given as either as a (regex-valid) string or an array to be joined by pipes.
     * @param {string} [flags=i] - Regex flags to apply.  `''` to provide no flags;
     * other falsey values will default to `i`.
     * @param {string|string[]} [preRegex] - Optional regex string or array to match
     * before any template matches (i.e. before `{{`), such as html comments.
     * @returns {Morebits.wikitext.page}
     */
    insertAfterTemplates(tag, regex, flags, preRegex) {
      if (tag === void 0) {
        throw new TypeError("No tag provided");
      }
      if (regex === void 0 || !regex.length) {
        throw new Error("No regex provided");
      } else if (Array.isArray(regex)) {
        regex = regex.join("|");
      }
      if (typeof flags !== "string") {
        flags = "i";
      }
      if (!preRegex || !preRegex.length) {
        preRegex = "";
      } else if (Array.isArray(preRegex)) {
        preRegex = preRegex.join("|");
      }
      this.text = this.text.replace(new RegExp(
        // leading whitespace
        // capture template(s)
        // Pre-template regex, such as leading html comments
        // begin template format
        // Template regex
        // end main template name, optionally with a number
        // Probably remove the (?:) though
        // template parameters
        // end template format
        // end capture
        // trailing whitespace
        "^\\s*(?:((?:\\s*".concat(
          // Pre-template regex, such as leading html comments
          preRegex,
          "|\\{\\{\\s*(?:"
        ).concat(
          // Template regex
          regex,
          ")\\d*\\s*(\\|(?:\\{\\{[^{}]*\\}\\}|[^{}])*)?\\}\\})+(?:\\s*\\n)?)\\s*)?"
        ),
        flags
      ), "$1".concat(tag));
      return this;
    },
    /**
     * Get the manipulated wikitext.
     *
     * @returns {string}
     */
    getText() {
      return this.text;
    }
  };
  Morebits.userspaceLogger = function(logPageName) {
    if (!logPageName) {
      throw new Error("no log page name specified");
    }
    this.initialText = "";
    this.headerLevel = 3;
    this.changeTags = "";
    this.log = function(logText, summaryText) {
      const def = $.Deferred();
      if (!logText) {
        return def.reject();
      }
      const page = new Morebits.wiki.page("User:".concat(mw.config.get("wgUserName"), "/").concat(logPageName), window.wgULS("将项目加入到用户空间日志", "將項目加入到使用者空間日誌"));
      page.load((pageobj) => {
        let text = pageobj.getPageText() || this.initialText;
        const date = new Morebits.date(pageobj.getLoadTime());
        if (!date.monthHeaderRegex().exec(text)) {
          text += "\n\n".concat(date.monthHeader(this.headerLevel));
        }
        pageobj.setPageText("".concat(text, "\n").concat(logText));
        pageobj.setEditSummary(summaryText);
        pageobj.setChangeTags(this.changeTags);
        pageobj.setCreateOption("recreate");
        pageobj.save(def.resolve, def.reject);
      });
      return def;
    };
  };
  Morebits.status = function(text, stat, type) {
    this.textRaw = text;
    this.text = Morebits.createHtml(text);
    this.type = type || "status";
    this.generate();
    if (stat) {
      this.update(stat, type);
    }
  };
  Morebits.status.init = (root) => {
    if (!(root instanceof Element)) {
      throw new TypeError("object not an instance of Element");
    }
    while (root.hasChildNodes()) {
      root.removeChild(root.firstChild);
    }
    Morebits.status.root = root;
    Morebits.status.errorEvent = null;
  };
  Morebits.status.root = null;
  Morebits.status.onError = (handler) => {
    if (typeof handler === "function") {
      Morebits.status.errorEvent = handler;
    } else {
      throw new TypeError("Morebits.status.onError: handler is not a function");
    }
  };
  Morebits.status.prototype = {
    stat: null,
    statRaw: null,
    text: null,
    textRaw: null,
    type: "status",
    target: null,
    node: null,
    linked: false,
    /** Add the status element node to the DOM. */
    link() {
      if (!this.linked && Morebits.status.root) {
        Morebits.status.root.appendChild(this.node);
        this.linked = true;
      }
    },
    /** Remove the status element node from the DOM. */
    unlink() {
      if (this.linked) {
        Morebits.status.root.removeChild(this.node);
        this.linked = false;
      }
    },
    /**
     * Update the status.
     *
     * @param {string} status - Part of status message after colon.
     * @param {string} type - 'status' (blue), 'info' (green), 'warn'
     * (red), or 'error' (bold red).
     */
    update(status, type) {
      this.statRaw = status;
      this.stat = Morebits.createHtml(status);
      if (type) {
        this.type = type;
        if (type === "error") {
          Morebits.wiki.numberOfActionsLeft = 1e3;
          if (Morebits.status.errorEvent) {
            Morebits.status.errorEvent();
          }
          console.error("[Morebits] ".concat(this.textRaw, ": ").concat(this.statRaw));
        }
      }
      this.render();
    },
    /** Produce the html for first part of the status message. */
    generate() {
      this.node = document.createElement("div");
      this.node.appendChild(document.createElement("span")).appendChild(this.text);
      this.node.appendChild(document.createElement("span")).appendChild(document.createTextNode(": "));
      this.target = this.node.appendChild(document.createElement("span"));
      this.target.appendChild(document.createTextNode(""));
    },
    /** Complete the html, for the second part of the status message. */
    render() {
      this.node.className = "morebits_status_".concat(this.type);
      while (this.target.hasChildNodes()) {
        this.target.removeChild(this.target.firstChild);
      }
      this.target.appendChild(this.stat);
      this.link();
    },
    status(status) {
      this.update(status, "status");
    },
    info(status) {
      this.update(status, "info");
    },
    warn(status) {
      this.update(status, "warn");
    },
    error(status) {
      this.update(status, "error");
    }
  };
  Morebits.status.status = (text, status) => {
    return new Morebits.status(text, status);
  };
  Morebits.status.info = (text, status) => {
    return new Morebits.status(text, status, "info");
  };
  Morebits.status.warn = (text, status) => {
    return new Morebits.status(text, status, "warn");
  };
  Morebits.status.error = (text, status) => {
    return new Morebits.status(text, status, "error");
  };
  Morebits.status.actionCompleted = (text) => {
    const node = document.createElement("div");
    node.appendChild(document.createElement("b")).appendChild(document.createTextNode(text));
    node.className = "morebits_status_info morebits_action_complete";
    if (Morebits.status.root) {
      Morebits.status.root.appendChild(node);
    }
  };
  Morebits.status.printUserText = (comments, message) => {
    const p = document.createElement("p");
    p.innerHTML = message;
    const div = document.createElement("div");
    div.className = "morebits-usertext";
    div.style.marginTop = "0";
    div.style.whiteSpace = "pre-wrap";
    div.textContent = comments;
    p.appendChild(div);
    Morebits.status.root.appendChild(p);
  };
  Morebits.htmlNode = (type, content, color) => {
    const node = document.createElement(type);
    if (color) {
      node.style.color = color;
    }
    node.appendChild(document.createTextNode(content));
    return node;
  };
  Morebits.checkboxShiftClickSupport = (jQuerySelector, jQueryContext) => {
    let lastCheckbox = null;
    const clickHandler = function clickHandler2(event) {
      const thisCb = this;
      if (event.shiftKey && lastCheckbox !== null) {
        const cbs = $(jQuerySelector, jQueryContext);
        let index = -1;
        let lastIndex = -1;
        let i;
        for (i = 0; i < cbs.length; i++) {
          if (cbs[i] === thisCb) {
            index = i;
            if (lastIndex > -1) {
              break;
            }
          }
          if (cbs[i] === lastCheckbox) {
            lastIndex = i;
            if (index > -1) {
              break;
            }
          }
        }
        if (index > -1 && lastIndex > -1) {
          const endState = thisCb.checked;
          let start;
          let finish;
          if (index < lastIndex) {
            start = index + 1;
            finish = lastIndex;
          } else {
            start = lastIndex;
            finish = index - 1;
          }
          for (i = start; i <= finish; i++) {
            if (cbs[i].checked !== endState) {
              cbs[i].click();
            }
          }
        }
      }
      lastCheckbox = thisCb;
      return true;
    };
    $(jQuerySelector, jQueryContext).on("click", clickHandler);
  };
  Morebits.batchOperation = function(currentAction) {
    const ctx = {
      // backing fields for public properties
      pageList: null,
      options: {
        chunkSize: 50,
        preserveIndividualStatusLines: false
      },
      // internal counters, etc.
      statusElement: new Morebits.status(currentAction || window.wgULS("执行批量操作", "執行批次操作")),
      worker: null,
      // function that executes for each item in pageList
      postFinish: null,
      // function that executes when the whole batch has been processed
      countStarted: 0,
      countFinished: 0,
      countFinishedSuccess: 0,
      currentChunkIndex: -1,
      pageChunks: [],
      running: false
    };
    this.getStatusElement = () => {
      return ctx.statusElement;
    };
    this.setPageList = (pageList) => {
      ctx.pageList = pageList;
    };
    this.setOption = (optionName, optionValue) => {
      ctx.options[optionName] = optionValue;
    };
    this.run = (worker, postFinish) => {
      if (ctx.running) {
        ctx.statusElement.error(window.wgULS("批量操作已在运行", "批次操作已在執行"));
        return;
      }
      ctx.running = true;
      ctx.worker = worker;
      ctx.postFinish = postFinish;
      ctx.countStarted = 0;
      ctx.countFinished = 0;
      ctx.countFinishedSuccess = 0;
      ctx.currentChunkIndex = -1;
      ctx.pageChunks = [];
      const total = ctx.pageList.length;
      if (!total) {
        ctx.statusElement.info(window.wgULS("没有指定页面", "沒有指定頁面"));
        ctx.running = false;
        if (ctx.postFinish) {
          ctx.postFinish();
        }
        return;
      }
      ctx.pageChunks = Morebits.array.chunk(ctx.pageList, ctx.options.chunkSize);
      Morebits.wiki.addCheckpoint();
      ctx.statusElement.status("0%");
      fnStartNewChunk();
    };
    this.workerSuccess = (arg) => {
      if (arg instanceof Morebits.wiki.api || arg instanceof Morebits.wiki.page) {
        const statelem = arg.getStatusElement();
        if (ctx.options.preserveIndividualStatusLines) {
          if (arg.getPageName || arg.pageName || arg.query && arg.query.title) {
            const pageName = arg.getPageName ? arg.getPageName() : arg.pageName || arg.query.title;
            statelem.info("完成（[[".concat(pageName, "]]）"));
          } else {
            statelem.info("完成");
          }
        } else {
          statelem.unlink();
        }
      } else if (typeof arg === "string" && ctx.options.preserveIndividualStatusLines) {
        new Morebits.status(arg, "完成（[[".concat(arg, "]]）"));
      }
      ctx.countFinishedSuccess++;
      fnDoneOne();
    };
    this.workerFailure = () => {
      fnDoneOne();
    };
    const thisProxy = this;
    const fnStartNewChunk = () => {
      const chunk = ctx.pageChunks[++ctx.currentChunkIndex];
      if (!chunk) {
        return;
      }
      ctx.countStarted += chunk.length;
      var _iterator11 = _createForOfIteratorHelper(chunk), _step11;
      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done; ) {
          const page = _step11.value;
          ctx.worker(page, thisProxy);
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }
    };
    const fnDoneOne = () => {
      ctx.countFinished++;
      const total = ctx.pageList.length;
      if (ctx.countFinished < total) {
        const progress = Math.round(100 * ctx.countFinished / total);
        ctx.statusElement.status("".concat(progress, "%"));
        if (ctx.countFinished >= ctx.countStarted - Math.max(ctx.options.chunkSize / 10, 2) && Math.floor(ctx.countFinished / ctx.options.chunkSize) > ctx.currentChunkIndex) {
          fnStartNewChunk();
        }
      } else if (ctx.countFinished === total) {
        const statusString = "完成（".concat(ctx.countFinishedSuccess, "/").concat(ctx.countFinished, "操作成功完成）");
        if (ctx.countFinishedSuccess < ctx.countFinished) {
          ctx.statusElement.warn(statusString);
        } else {
          ctx.statusElement.info(statusString);
        }
        if (ctx.postFinish) {
          ctx.postFinish();
        }
        Morebits.wiki.removeCheckpoint();
        ctx.running = false;
      } else {
        ctx.statusElement.warn("".concat(window.wgULS("完成（多执行了", "完成（多執行了") + (ctx.countFinished - total), "次）"));
        Morebits.wiki.removeCheckpoint();
        ctx.running = false;
      }
    };
  };
  Morebits.simpleWindow = function(width, height) {
    const content = document.createElement("div");
    this.content = content;
    content.className = "morebits-dialog-content";
    content.id = "morebits-dialog-content-".concat(Math.round(Math.random() * 1e15));
    this.height = height;
    $(this.content).dialog({
      autoOpen: false,
      buttons: {
        "Placeholder button": () => {
        }
      },
      dialogClass: "morebits-dialog",
      width: Math.min(Number.parseInt(window.innerWidth, 10), Number.parseInt(width || 800, 10)),
      // give jQuery the given height value (which represents the anticipated height of the dialog) here, so
      // it can position the dialog appropriately
      // the 20 pixels represents adjustment for the extra height of the jQuery dialog "chrome", compared
      // to that of the old SimpleWindow
      height: height + 20,
      close: (event) => {
        $(event.target).dialog("destroy").remove();
      },
      resizeStart() {
        [this.scrollbox] = $(this).find(".morebits-scrollbox");
        if (this.scrollbox) {
          this.scrollbox.style.maxHeight = "none";
        }
      },
      resizeStop() {
        this.scrollbox = null;
      },
      resize() {
        this.style.maxHeight = "";
        if (this.scrollbox) {
          this.scrollbox.style.width = "";
        }
      }
    });
    const $widget = $(this.content).dialog("widget");
    $widget.find("button").each((key, value) => {
      value.parentNode.removeChild(value);
    });
    const buttonspan = document.createElement("span");
    buttonspan.className = "morebits-dialog-buttons";
    const linksspan = document.createElement("span");
    linksspan.className = "morebits-dialog-footerlinks";
    $widget.find(".ui-dialog-buttonpane").append(buttonspan, linksspan);
    $widget.resizable("option", "alsoResize", "#".concat(this.content.id, " .morebits-scrollbox, #").concat(this.content.id));
  };
  Morebits.simpleWindow.prototype = {
    buttons: [],
    height: 600,
    hasFooterLinks: false,
    scriptName: null,
    /**
     * Focuses the dialog. This might work, or on the contrary, it might not.
     *
     * @returns {Morebits.simpleWindow}
     */
    focus() {
      $(this.content).dialog("moveToTop");
      return this;
    },
    /**
     * Closes the dialog. If this is set as an event handler, it will stop the event
     * from doing anything more.
     *
     * @param {event} [event]
     * @returns {Morebits.simpleWindow}
     */
    close(event) {
      if (event) {
        event.preventDefault();
      }
      $(this.content).dialog("close");
      return this;
    },
    /**
     * Shows the dialog. Calling display() on a dialog that has previously been closed
     * might work, but it is not guaranteed.
     *
     * @returns {Morebits.simpleWindow}
     */
    display() {
      if (this.scriptName) {
        const $widget = $(this.content).dialog("widget");
        $widget.find(".morebits-dialog-scriptname").remove();
        const scriptnamespan = document.createElement("span");
        scriptnamespan.className = "morebits-dialog-scriptname";
        scriptnamespan.textContent = "".concat(this.scriptName, " · ");
        $widget.find(".ui-dialog-title").prepend(scriptnamespan);
      }
      const dialog = $(this.content).dialog("open");
      if (window.setupTooltips && window.pg && window.pg.re && window.pg.re.diff) {
        dialog.parent()[0].ranSetupTooltipsAlready = false;
        window.setupTooltips(dialog.parent()[0]);
      }
      this.setHeight(this.height);
      return this;
    },
    /**
     * Sets the dialog title.
     *
     * @param {string} title
     * @returns {Morebits.simpleWindow}
     */
    setTitle(title) {
      $(this.content).dialog("option", "title", title);
      return this;
    },
    /**
     * Sets the script name, appearing as a prefix to the title to help users determine which
     * user script is producing which dialog. For instance, Twinkle modules set this to "Twinkle".
     *
     * @param {string} name
     * @returns {Morebits.simpleWindow}
     */
    setScriptName(name) {
      this.scriptName = name;
      return this;
    },
    /**
     * Sets the dialog width.
     *
     * @param {number} width
     * @returns {Morebits.simpleWindow}
     */
    setWidth(width) {
      $(this.content).dialog("option", "width", width);
      return this;
    },
    /**
     * Sets the dialog's maximum height. The dialog will auto-size to fit its contents,
     * but the content area will grow no larger than the height given here.
     *
     * @param {number} height
     * @returns {Morebits.simpleWindow}
     */
    setHeight(height) {
      this.height = height;
      if (Number.parseInt(getComputedStyle($(this.content).dialog("widget")[0], null).height, 10) > window.innerHeight) {
        $(this.content).dialog("option", "height", window.innerHeight - 2).dialog("option", "position", "top");
      } else {
        $(this.content).dialog("option", "height", "auto");
      }
      $(this.content).dialog("widget").find(".morebits-dialog-content")[0].style.maxHeight = "".concat(Number.parseInt(this.height - 30, 10), "px");
      return this;
    },
    /**
     * Sets the content of the dialog to the given element node, usually from rendering
     * a {@link Morebits.quickForm}.
     * Re-enumerates the footer buttons, but leaves the footer links as they are.
     * Be sure to call this at least once before the dialog is displayed...
     *
     * @param {HTMLElement} content
     * @returns {Morebits.simpleWindow}
     */
    setContent(content) {
      this.purgeContent();
      this.addContent(content);
      return this;
    },
    /**
     * Adds the given element node to the dialog content.
     *
     * @param {HTMLElement} content
     * @returns {Morebits.simpleWindow}
     */
    addContent(content) {
      this.content.appendChild(content);
      const self2 = this;
      $(this.content).find('input[type="submit"], button[type="submit"]').each((key, value) => {
        value.style.display = "none";
        const button = document.createElement("button");
        if (value.hasAttribute("value")) {
          button.textContent = value.getAttribute("value");
        } else if (value.textContent) {
          button.textContent = value.textContent;
        } else {
          button.textContent = "提交";
        }
        button.className = value.className || "submitButtonProxy";
        button.addEventListener("click", () => {
          value.click();
        }, false);
        self2.buttons[self2.buttons.length] = button;
      });
      if (this.buttons.length > 0) {
        $(this.content).dialog("widget").find(".morebits-dialog-buttons").empty().append(this.buttons)[0].removeAttribute("data-empty");
      } else {
        $(this.content).dialog("widget").find(".morebits-dialog-buttons")[0].setAttribute("data-empty", "data-empty");
      }
      return this;
    },
    /**
     * Removes all contents from the dialog, barring any footer links.
     *
     * @returns {Morebits.simpleWindow}
     */
    purgeContent() {
      this.buttons = [];
      $(this.content).dialog("widget").find(".morebits-dialog-buttons").empty();
      while (this.content.hasChildNodes()) {
        this.content.removeChild(this.content.firstChild);
      }
      return this;
    },
    /**
     * Adds a link in the bottom-right corner of the dialog.
     * This can be used to provide help or policy links.
     * For example, Twinkle's CSD module adds a link to the CSD policy page,
     * as well as a link to Twinkle's documentation.
     *
     * @param {string} text - Display text.
     * @param {string} wikiPage - Link target.
     * @param {boolean} [prep=false] - Set true to prepend rather than append.
     * @returns {Morebits.simpleWindow}
     */
    addFooterLink(text, wikiPage, prep) {
      const $footerlinks = $(this.content).dialog("widget").find(".morebits-dialog-footerlinks");
      if (this.hasFooterLinks) {
        const bullet = document.createElement("span");
        bullet.textContent = " • ";
        if (prep) {
          $footerlinks.prepend(bullet);
        } else {
          $footerlinks.append(bullet);
        }
      }
      const link = document.createElement("a");
      link.setAttribute("href", mw.util.getUrl(wikiPage));
      link.setAttribute("title", wikiPage);
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
      link.textContent = text;
      if (prep) {
        $footerlinks.prepend(link);
      } else {
        $footerlinks.append(link);
      }
      this.hasFooterLinks = true;
      return this;
    },
    /**
     * Sets whether the window should be modal or not. Modal dialogs create
     * an overlay below the dialog but above other page elements. This
     * must be used (if necessary) before calling display().
     *
     * @param {boolean} [modal=false] - If set to true, other items on the
     * page will be disabled, i.e., cannot be interacted with.
     * @returns {Morebits.simpleWindow}
     */
    setModality(modal) {
      $(this.content).dialog("option", "modal", modal);
      return this;
    }
  };
  Morebits.simpleWindow.setButtonsEnabled = (enabled) => {
    const $body = $("body");
    $body.find(".morebits-dialog-buttons button").prop("disabled", !enabled);
  };
})(jQuery);

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwtdGhpcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZhaWxzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVzY3JpcHRvcnMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2xhc3NvZi1yYXcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbmRleGVkLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1jYWxsYWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1idWlsdC1pbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbnZpcm9ubWVudC11c2VyLWFnZW50LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdjgtdmVyc2lvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXN5bWJvbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RyeS10by1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWNhbGxhYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1Zy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1uYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9tYXRoLXRydW5jLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtYXJyYXkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1zdHJpbmctdGFnLXN1cHBvcnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jbGFzc29mLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tc3RyaW5nLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcGFyc2UtanNvbi1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuanNvbi5wYXJzZS5qcyIsICJzcmMvbW9yZWJpdHMvbW9yZWJpdHMuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIid1c2Ugc3RyaWN0JztcbnZhciBjaGVjayA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgJiYgaXQuTWF0aCA9PT0gTWF0aCAmJiBpdDtcbn07XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG5tb2R1bGUuZXhwb3J0cyA9XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1nbG9iYWwtdGhpcyAtLSBzYWZlXG4gIGNoZWNrKHR5cGVvZiBnbG9iYWxUaGlzID09ICdvYmplY3QnICYmIGdsb2JhbFRoaXMpIHx8XG4gIGNoZWNrKHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93KSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzIC0tIHNhZmVcbiAgY2hlY2sodHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZikgfHxcbiAgY2hlY2sodHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwpIHx8XG4gIGNoZWNrKHR5cGVvZiB0aGlzID09ICdvYmplY3QnICYmIHRoaXMpIHx8XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuYyAtLSBmYWxsYmFja1xuICAoZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSkoKSB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbi8vIERldGVjdCBJRTgncyBpbmNvbXBsZXRlIGRlZmluZVByb3BlcnR5IGltcGxlbWVudGF0aW9uXG5tb2R1bGUuZXhwb3J0cyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgMSwgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSlbMV0gIT09IDc7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZnVuY3Rpb24tcHJvdG90eXBlLWJpbmQgLS0gc2FmZVxuICB2YXIgdGVzdCA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfS5iaW5kKCk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gdHlwZW9mIHRlc3QgIT0gJ2Z1bmN0aW9uJyB8fCB0ZXN0Lmhhc093blByb3BlcnR5KCdwcm90b3R5cGUnKTtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgY2FsbCA9IEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWZ1bmN0aW9uLXByb3RvdHlwZS1iaW5kIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX0JJTkQgPyBjYWxsLmJpbmQoY2FsbCkgOiBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBjYWxsLmFwcGx5KGNhbGwsIGFyZ3VtZW50cyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBOYXNob3JuIH4gSkRLOCBidWdcbnZhciBOQVNIT1JOX0JVRyA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvciAmJiAhJHByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoeyAxOiAyIH0sIDEpO1xuXG4vLyBgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZWAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5wcm90b3R5cGUucHJvcGVydHlpc2VudW1lcmFibGVcbmV4cG9ydHMuZiA9IE5BU0hPUk5fQlVHID8gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoVikge1xuICB2YXIgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0aGlzLCBWKTtcbiAgcmV0dXJuICEhZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLmVudW1lcmFibGU7XG59IDogJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIE5BVElWRV9CSU5EID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtbmF0aXZlJyk7XG5cbnZhciBGdW5jdGlvblByb3RvdHlwZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbnZhciBjYWxsID0gRnVuY3Rpb25Qcm90b3R5cGUuY2FsbDtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1mdW5jdGlvbi1wcm90b3R5cGUtYmluZCAtLSBzYWZlXG52YXIgdW5jdXJyeVRoaXNXaXRoQmluZCA9IE5BVElWRV9CSU5EICYmIEZ1bmN0aW9uUHJvdG90eXBlLmJpbmQuYmluZChjYWxsLCBjYWxsKTtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfQklORCA/IHVuY3VycnlUaGlzV2l0aEJpbmQgOiBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY2FsbC5hcHBseShmbiwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG52YXIgdG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyh7fS50b1N0cmluZyk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBzdHJpbmdTbGljZSh0b1N0cmluZyhpdCksIDgsIC0xKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcbnZhciBzcGxpdCA9IHVuY3VycnlUaGlzKCcnLnNwbGl0KTtcblxuLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3Ncbm1vZHVsZS5leHBvcnRzID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyB0aHJvd3MgYW4gZXJyb3IgaW4gcmhpbm8sIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9yaGluby9pc3N1ZXMvMzQ2XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gISRPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKTtcbn0pID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjbGFzc29mKGl0KSA9PT0gJ1N0cmluZycgPyBzcGxpdChpdCwgJycpIDogJE9iamVjdChpdCk7XG59IDogJE9iamVjdDtcbiIsICIndXNlIHN0cmljdCc7XG4vLyB3ZSBjYW4ndCB1c2UganVzdCBgaXQgPT0gbnVsbGAgc2luY2Ugb2YgYGRvY3VtZW50LmFsbGAgc3BlY2lhbCBjYXNlXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLUlzSFRNTEREQS1pbnRlcm5hbC1zbG90LWFlY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID09PSBudWxsIHx8IGl0ID09PSB1bmRlZmluZWQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYFJlcXVpcmVPYmplY3RDb2VyY2libGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZXF1aXJlb2JqZWN0Y29lcmNpYmxlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXNOdWxsT3JVbmRlZmluZWQoaXQpKSB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJbmRleGVkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoaXQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1Jc0hUTUxEREEtaW50ZXJuYWwtc2xvdFxudmFyIGRvY3VtZW50QWxsID0gdHlwZW9mIGRvY3VtZW50ID09ICdvYmplY3QnICYmIGRvY3VtZW50LmFsbDtcblxuLy8gYElzQ2FsbGFibGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc2NhbGxhYmxlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9uby10eXBlb2YtdW5kZWZpbmVkIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBkb2N1bWVudEFsbCA9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudEFsbCAhPT0gdW5kZWZpbmVkID8gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJyB8fCBhcmd1bWVudCA9PT0gZG9jdW1lbnRBbGw7XG59IDogZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogaXNDYWxsYWJsZShpdCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgYUZ1bmN0aW9uID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBpc0NhbGxhYmxlKGFyZ3VtZW50KSA/IGFyZ3VtZW50IDogdW5kZWZpbmVkO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZXNwYWNlLCBtZXRob2QpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPCAyID8gYUZ1bmN0aW9uKGdsb2JhbFRoaXNbbmFtZXNwYWNlXSkgOiBnbG9iYWxUaGlzW25hbWVzcGFjZV0gJiYgZ2xvYmFsVGhpc1tuYW1lc3BhY2VdW21ldGhvZF07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB1bmN1cnJ5VGhpcyh7fS5pc1Byb3RvdHlwZU9mKTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xuXG52YXIgbmF2aWdhdG9yID0gZ2xvYmFsVGhpcy5uYXZpZ2F0b3I7XG52YXIgdXNlckFnZW50ID0gbmF2aWdhdG9yICYmIG5hdmlnYXRvci51c2VyQWdlbnQ7XG5cbm1vZHVsZS5leHBvcnRzID0gdXNlckFnZW50ID8gU3RyaW5nKHVzZXJBZ2VudCkgOiAnJztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnZpcm9ubWVudC11c2VyLWFnZW50Jyk7XG5cbnZhciBwcm9jZXNzID0gZ2xvYmFsVGhpcy5wcm9jZXNzO1xudmFyIERlbm8gPSBnbG9iYWxUaGlzLkRlbm87XG52YXIgdmVyc2lvbnMgPSBwcm9jZXNzICYmIHByb2Nlc3MudmVyc2lvbnMgfHwgRGVubyAmJiBEZW5vLnZlcnNpb247XG52YXIgdjggPSB2ZXJzaW9ucyAmJiB2ZXJzaW9ucy52ODtcbnZhciBtYXRjaCwgdmVyc2lvbjtcblxuaWYgKHY4KSB7XG4gIG1hdGNoID0gdjguc3BsaXQoJy4nKTtcbiAgLy8gaW4gb2xkIENocm9tZSwgdmVyc2lvbnMgb2YgVjggaXNuJ3QgVjggPSBDaHJvbWUgLyAxMFxuICAvLyBidXQgdGhlaXIgY29ycmVjdCB2ZXJzaW9ucyBhcmUgbm90IGludGVyZXN0aW5nIGZvciB1c1xuICB2ZXJzaW9uID0gbWF0Y2hbMF0gPiAwICYmIG1hdGNoWzBdIDwgNCA/IDEgOiArKG1hdGNoWzBdICsgbWF0Y2hbMV0pO1xufVxuXG4vLyBCcm93c2VyRlMgTm9kZUpTIGBwcm9jZXNzYCBwb2x5ZmlsbCBpbmNvcnJlY3RseSBzZXQgYC52OGAgdG8gYDAuMGBcbi8vIHNvIGNoZWNrIGB1c2VyQWdlbnRgIGV2ZW4gaWYgYC52OGAgZXhpc3RzLCBidXQgMFxuaWYgKCF2ZXJzaW9uICYmIHVzZXJBZ2VudCkge1xuICBtYXRjaCA9IHVzZXJBZ2VudC5tYXRjaCgvRWRnZVxcLyhcXGQrKS8pO1xuICBpZiAoIW1hdGNoIHx8IG1hdGNoWzFdID49IDc0KSB7XG4gICAgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2goL0Nocm9tZVxcLyhcXGQrKS8pO1xuICAgIGlmIChtYXRjaCkgdmVyc2lvbiA9ICttYXRjaFsxXTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHZlcnNpb247XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tc3ltYm9sIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnZpcm9ubWVudC12OC12ZXJzaW9uJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG5cbnZhciAkU3RyaW5nID0gZ2xvYmFsVGhpcy5TdHJpbmc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlzeW1ib2xzIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG5tb2R1bGUuZXhwb3J0cyA9ICEhT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgc3ltYm9sID0gU3ltYm9sKCdzeW1ib2wgZGV0ZWN0aW9uJyk7XG4gIC8vIENocm9tZSAzOCBTeW1ib2wgaGFzIGluY29ycmVjdCB0b1N0cmluZyBjb252ZXJzaW9uXG4gIC8vIGBnZXQtb3duLXByb3BlcnR5LXN5bWJvbHNgIHBvbHlmaWxsIHN5bWJvbHMgY29udmVydGVkIHRvIG9iamVjdCBhcmUgbm90IFN5bWJvbCBpbnN0YW5jZXNcbiAgLy8gbmI6IERvIG5vdCBjYWxsIGBTdHJpbmdgIGRpcmVjdGx5IHRvIGF2b2lkIHRoaXMgYmVpbmcgb3B0aW1pemVkIG91dCB0byBgc3ltYm9sKycnYCB3aGljaCB3aWxsLFxuICAvLyBvZiBjb3Vyc2UsIGZhaWwuXG4gIHJldHVybiAhJFN0cmluZyhzeW1ib2wpIHx8ICEoT2JqZWN0KHN5bWJvbCkgaW5zdGFuY2VvZiBTeW1ib2wpIHx8XG4gICAgLy8gQ2hyb21lIDM4LTQwIHN5bWJvbHMgYXJlIG5vdCBpbmhlcml0ZWQgZnJvbSBET00gY29sbGVjdGlvbnMgcHJvdG90eXBlcyB0byBpbnN0YW5jZXNcbiAgICAhU3ltYm9sLnNoYW0gJiYgVjhfVkVSU0lPTiAmJiBWOF9WRVJTSU9OIDwgNDE7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBlcy9uby1zeW1ib2wgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmcgKi9cbnZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfU1lNQk9MICYmXG4gICFTeW1ib2wuc2hhbSAmJlxuICB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBpc1Byb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YnKTtcbnZhciBVU0VfU1lNQk9MX0FTX1VJRCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZCcpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcblxubW9kdWxlLmV4cG9ydHMgPSBVU0VfU1lNQk9MX0FTX1VJRCA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgJFN5bWJvbCA9IGdldEJ1aWx0SW4oJ1N5bWJvbCcpO1xuICByZXR1cm4gaXNDYWxsYWJsZSgkU3ltYm9sKSAmJiBpc1Byb3RvdHlwZU9mKCRTeW1ib2wucHJvdG90eXBlLCAkT2JqZWN0KGl0KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkU3RyaW5nID0gU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICB0cnkge1xuICAgIHJldHVybiAkU3RyaW5nKGFyZ3VtZW50KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gJ09iamVjdCc7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciB0cnlUb1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90cnktdG8tc3RyaW5nJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgQXNzZXJ0OiBJc0NhbGxhYmxlKGFyZ3VtZW50KSBpcyB0cnVlYFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgaWYgKGlzQ2FsbGFibGUoYXJndW1lbnQpKSByZXR1cm4gYXJndW1lbnQ7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKHRyeVRvU3RyaW5nKGFyZ3VtZW50KSArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtbnVsbC1vci11bmRlZmluZWQnKTtcblxuLy8gYEdldE1ldGhvZGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWdldG1ldGhvZFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoViwgUCkge1xuICB2YXIgZnVuYyA9IFZbUF07XG4gIHJldHVybiBpc051bGxPclVuZGVmaW5lZChmdW5jKSA/IHVuZGVmaW5lZCA6IGFDYWxsYWJsZShmdW5jKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBPcmRpbmFyeVRvUHJpbWl0aXZlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb3JkaW5hcnl0b3ByaW1pdGl2ZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5wdXQsIHByZWYpIHtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChwcmVmID09PSAnc3RyaW5nJyAmJiBpc0NhbGxhYmxlKGZuID0gaW5wdXQudG9TdHJpbmcpICYmICFpc09iamVjdCh2YWwgPSBjYWxsKGZuLCBpbnB1dCkpKSByZXR1cm4gdmFsO1xuICBpZiAoaXNDYWxsYWJsZShmbiA9IGlucHV0LnZhbHVlT2YpICYmICFpc09iamVjdCh2YWwgPSBjYWxsKGZuLCBpbnB1dCkpKSByZXR1cm4gdmFsO1xuICBpZiAocHJlZiAhPT0gJ3N0cmluZycgJiYgaXNDYWxsYWJsZShmbiA9IGlucHV0LnRvU3RyaW5nKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgdHJ5IHtcbiAgICBkZWZpbmVQcm9wZXJ0eShnbG9iYWxUaGlzLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGdsb2JhbFRoaXNba2V5XSA9IHZhbHVlO1xuICB9IHJldHVybiB2YWx1ZTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBkZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5Jyk7XG5cbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IG1vZHVsZS5leHBvcnRzID0gZ2xvYmFsVGhpc1tTSEFSRURdIHx8IGRlZmluZUdsb2JhbFByb3BlcnR5KFNIQVJFRCwge30pO1xuXG4oc3RvcmUudmVyc2lvbnMgfHwgKHN0b3JlLnZlcnNpb25zID0gW10pKS5wdXNoKHtcbiAgdmVyc2lvbjogJzMuNDkuMCcsXG4gIG1vZGU6IElTX1BVUkUgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAxM+KAkzIwMjUgRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSksIDIwMjXigJMyMDI2IENvcmVKUyBDb21wYW55IChjb3JlLWpzLmlvKS4gQWxsIHJpZ2h0cyByZXNlcnZlZC4nLFxuICBsaWNlbnNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvYmxvYi92My40OS4wL0xJQ0VOU0UnLFxuICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcydcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBzdG9yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlIHx8IHt9KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xuXG4vLyBgVG9PYmplY3RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b29iamVjdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuICRPYmplY3QocmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudCkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IHVuY3VycnlUaGlzKHt9Lmhhc093blByb3BlcnR5KTtcblxuLy8gYEhhc093blByb3BlcnR5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaGFzb3ducHJvcGVydHlcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtaGFzb3duIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0Lmhhc093biB8fCBmdW5jdGlvbiBoYXNPd24oaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkodG9PYmplY3QoaXQpLCBrZXkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbnZhciBpZCA9IDA7XG52YXIgcG9zdGZpeCA9IE1hdGgucmFuZG9tKCk7XG52YXIgdG9TdHJpbmcgPSB1bmN1cnJ5VGhpcygxLjEudG9TdHJpbmcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJyArIChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5KSArICcpXycgKyB0b1N0cmluZygrK2lkICsgcG9zdGZpeCwgMzYpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcbnZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24nKTtcbnZhciBVU0VfU1lNQk9MX0FTX1VJRCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZCcpO1xuXG52YXIgU3ltYm9sID0gZ2xvYmFsVGhpcy5TeW1ib2w7XG52YXIgV2VsbEtub3duU3ltYm9sc1N0b3JlID0gc2hhcmVkKCd3a3MnKTtcbnZhciBjcmVhdGVXZWxsS25vd25TeW1ib2wgPSBVU0VfU1lNQk9MX0FTX1VJRCA/IFN5bWJvbFsnZm9yJ10gfHwgU3ltYm9sIDogU3ltYm9sICYmIFN5bWJvbC53aXRob3V0U2V0dGVyIHx8IHVpZDtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICBpZiAoIWhhc093bihXZWxsS25vd25TeW1ib2xzU3RvcmUsIG5hbWUpKSB7XG4gICAgV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdID0gTkFUSVZFX1NZTUJPTCAmJiBoYXNPd24oU3ltYm9sLCBuYW1lKVxuICAgICAgPyBTeW1ib2xbbmFtZV1cbiAgICAgIDogY3JlYXRlV2VsbEtub3duU3ltYm9sKCdTeW1ib2wuJyArIG5hbWUpO1xuICB9IHJldHVybiBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1zeW1ib2wnKTtcbnZhciBnZXRNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LW1ldGhvZCcpO1xudmFyIG9yZGluYXJ5VG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb3JkaW5hcnktdG8tcHJpbWl0aXZlJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xudmFyIFRPX1BSSU1JVElWRSA9IHdlbGxLbm93blN5bWJvbCgndG9QcmltaXRpdmUnKTtcblxuLy8gYFRvUHJpbWl0aXZlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9wcmltaXRpdmVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBwcmVmKSB7XG4gIGlmICghaXNPYmplY3QoaW5wdXQpIHx8IGlzU3ltYm9sKGlucHV0KSkgcmV0dXJuIGlucHV0O1xuICB2YXIgZXhvdGljVG9QcmltID0gZ2V0TWV0aG9kKGlucHV0LCBUT19QUklNSVRJVkUpO1xuICB2YXIgcmVzdWx0O1xuICBpZiAoZXhvdGljVG9QcmltKSB7XG4gICAgaWYgKHByZWYgPT09IHVuZGVmaW5lZCkgcHJlZiA9ICdkZWZhdWx0JztcbiAgICByZXN1bHQgPSBjYWxsKGV4b3RpY1RvUHJpbSwgaW5wdXQsIHByZWYpO1xuICAgIGlmICghaXNPYmplY3QocmVzdWx0KSB8fCBpc1N5bWJvbChyZXN1bHQpKSByZXR1cm4gcmVzdWx0O1xuICAgIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xuICB9XG4gIGlmIChwcmVmID09PSB1bmRlZmluZWQpIHByZWYgPSAnbnVtYmVyJztcbiAgcmV0dXJuIG9yZGluYXJ5VG9QcmltaXRpdmUoaW5wdXQsIHByZWYpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG5cbi8vIGBUb1Byb3BlcnR5S2V5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9wcm9wZXJ0eWtleVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIGtleSA9IHRvUHJpbWl0aXZlKGFyZ3VtZW50LCAnc3RyaW5nJyk7XG4gIHJldHVybiBpc1N5bWJvbChrZXkpID8ga2V5IDoga2V5ICsgJyc7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciBkb2N1bWVudCA9IGdsb2JhbFRoaXMuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBFWElTVFMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBFWElTVFMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcblxuLy8gVGhhbmtzIHRvIElFOCBmb3IgaXRzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3JlYXRlRWxlbWVudCgnZGl2JyksICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfVxuICB9KS5hICE9PSA3O1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0luZGV4ZWRPYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhc093bihPLCBQKSkgcmV0dXJuIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcighY2FsbChwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZS5mLCBPLCBQKSwgT1tQXSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbi8vIFY4IH4gQ2hyb21lIDM2LVxuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzMzNFxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0sICdwcm90b3R5cGUnLCB7XG4gICAgdmFsdWU6IDQyLFxuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KS5wcm90b3R5cGUgIT09IDQyO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgJFN0cmluZyA9IFN0cmluZztcbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgQXNzZXJ0OiBUeXBlKGFyZ3VtZW50KSBpcyBPYmplY3RgXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoaXNPYmplY3QoYXJndW1lbnQpKSByZXR1cm4gYXJndW1lbnQ7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKCRTdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgYW4gb2JqZWN0Jyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG52YXIgVjhfUFJPVE9UWVBFX0RFRklORV9CVUcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdjgtcHJvdG90eXBlLWRlZmluZS1idWcnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleScpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBFTlVNRVJBQkxFID0gJ2VudW1lcmFibGUnO1xudmFyIENPTkZJR1VSQUJMRSA9ICdjb25maWd1cmFibGUnO1xudmFyIFdSSVRBQkxFID0gJ3dyaXRhYmxlJztcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0eWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0eVxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgPyBWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA/IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKHR5cGVvZiBPID09PSAnZnVuY3Rpb24nICYmIFAgPT09ICdwcm90b3R5cGUnICYmICd2YWx1ZScgaW4gQXR0cmlidXRlcyAmJiBXUklUQUJMRSBpbiBBdHRyaWJ1dGVzICYmICFBdHRyaWJ1dGVzW1dSSVRBQkxFXSkge1xuICAgIHZhciBjdXJyZW50ID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKTtcbiAgICBpZiAoY3VycmVudCAmJiBjdXJyZW50W1dSSVRBQkxFXSkge1xuICAgICAgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gICAgICBBdHRyaWJ1dGVzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IENPTkZJR1VSQUJMRSBpbiBBdHRyaWJ1dGVzID8gQXR0cmlidXRlc1tDT05GSUdVUkFCTEVdIDogY3VycmVudFtDT05GSUdVUkFCTEVdLFxuICAgICAgICBlbnVtZXJhYmxlOiBFTlVNRVJBQkxFIGluIEF0dHJpYnV0ZXMgPyBBdHRyaWJ1dGVzW0VOVU1FUkFCTEVdIDogY3VycmVudFtFTlVNRVJBQkxFXSxcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlXG4gICAgICB9O1xuICAgIH1cbiAgfSByZXR1cm4gJGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xufSA6ICRkZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiAkZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIGtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0RGVzY3JpcHRvciA9IERFU0NSSVBUT1JTICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbnZhciBFWElTVFMgPSBoYXNPd24oRnVuY3Rpb25Qcm90b3R5cGUsICduYW1lJyk7XG4vLyBhZGRpdGlvbmFsIHByb3RlY3Rpb24gZnJvbSBtaW5pZmllZCAvIG1hbmdsZWQgLyBkcm9wcGVkIGZ1bmN0aW9uIG5hbWVzXG52YXIgUFJPUEVSID0gRVhJU1RTICYmIGZ1bmN0aW9uIHNvbWV0aGluZygpIHsgLyogZW1wdHkgKi8gfS5uYW1lID09PSAnc29tZXRoaW5nJztcbnZhciBDT05GSUdVUkFCTEUgPSBFWElTVFMgJiYgKCFERVNDUklQVE9SUyB8fCAoREVTQ1JJUFRPUlMgJiYgZ2V0RGVzY3JpcHRvcihGdW5jdGlvblByb3RvdHlwZSwgJ25hbWUnKS5jb25maWd1cmFibGUpKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEVYSVNUUzogRVhJU1RTLFxuICBQUk9QRVI6IFBST1BFUixcbiAgQ09ORklHVVJBQkxFOiBDT05GSUdVUkFCTEVcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBzdG9yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcblxudmFyIGZ1bmN0aW9uVG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyhGdW5jdGlvbi50b1N0cmluZyk7XG5cbi8vIHRoaXMgaGVscGVyIGJyb2tlbiBpbiBgY29yZS1qc0AzLjQuMS0zLjQuNGAsIHNvIHdlIGNhbid0IHVzZSBgc2hhcmVkYCBoZWxwZXJcbmlmICghaXNDYWxsYWJsZShzdG9yZS5pbnNwZWN0U291cmNlKSkge1xuICBzdG9yZS5pbnNwZWN0U291cmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uVG9TdHJpbmcoaXQpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0b3JlLmluc3BlY3RTb3VyY2U7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbnZhciBXZWFrTWFwID0gZ2xvYmFsVGhpcy5XZWFrTWFwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQ2FsbGFibGUoV2Vha01hcCkgJiYgL25hdGl2ZSBjb2RlLy50ZXN0KFN0cmluZyhXZWFrTWFwKSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG5cbnZhciBrZXlzID0gc2hhcmVkKCdrZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4ga2V5c1trZXldIHx8IChrZXlzW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIE5BVElWRV9XRUFLX01BUCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24nKTtcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xuXG52YXIgT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQgPSAnT2JqZWN0IGFscmVhZHkgaW5pdGlhbGl6ZWQnO1xudmFyIFR5cGVFcnJvciA9IGdsb2JhbFRoaXMuVHlwZUVycm9yO1xudmFyIFdlYWtNYXAgPSBnbG9iYWxUaGlzLldlYWtNYXA7XG52YXIgc2V0LCBnZXQsIGhhcztcblxudmFyIGVuZm9yY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGhhcyhpdCkgPyBnZXQoaXQpIDogc2V0KGl0LCB7fSk7XG59O1xuXG52YXIgZ2V0dGVyRm9yID0gZnVuY3Rpb24gKFRZUEUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpdCkge1xuICAgIHZhciBzdGF0ZTtcbiAgICBpZiAoIWlzT2JqZWN0KGl0KSB8fCAoc3RhdGUgPSBnZXQoaXQpKS50eXBlICE9PSBUWVBFKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbmNvbXBhdGlibGUgcmVjZWl2ZXIsICcgKyBUWVBFICsgJyByZXF1aXJlZCcpO1xuICAgIH0gcmV0dXJuIHN0YXRlO1xuICB9O1xufTtcblxuaWYgKE5BVElWRV9XRUFLX01BUCB8fCBzaGFyZWQuc3RhdGUpIHtcbiAgdmFyIHN0b3JlID0gc2hhcmVkLnN0YXRlIHx8IChzaGFyZWQuc3RhdGUgPSBuZXcgV2Vha01hcCgpKTtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tc2VsZi1hc3NpZ24gLS0gcHJvdG90eXBlIG1ldGhvZHMgcHJvdGVjdGlvbiAqL1xuICBzdG9yZS5nZXQgPSBzdG9yZS5nZXQ7XG4gIHN0b3JlLmhhcyA9IHN0b3JlLmhhcztcbiAgc3RvcmUuc2V0ID0gc3RvcmUuc2V0O1xuICAvKiBlc2xpbnQtZW5hYmxlIG5vLXNlbGYtYXNzaWduIC0tIHByb3RvdHlwZSBtZXRob2RzIHByb3RlY3Rpb24gKi9cbiAgc2V0ID0gZnVuY3Rpb24gKGl0LCBtZXRhZGF0YSkge1xuICAgIGlmIChzdG9yZS5oYXMoaXQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKE9CSkVDVF9BTFJFQURZX0lOSVRJQUxJWkVEKTtcbiAgICBtZXRhZGF0YS5mYWNhZGUgPSBpdDtcbiAgICBzdG9yZS5zZXQoaXQsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBzdG9yZS5nZXQoaXQpIHx8IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gc3RvcmUuaGFzKGl0KTtcbiAgfTtcbn0gZWxzZSB7XG4gIHZhciBTVEFURSA9IHNoYXJlZEtleSgnc3RhdGUnKTtcbiAgaGlkZGVuS2V5c1tTVEFURV0gPSB0cnVlO1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgaWYgKGhhc093bihpdCwgU1RBVEUpKSB0aHJvdyBuZXcgVHlwZUVycm9yKE9CSkVDVF9BTFJFQURZX0lOSVRJQUxJWkVEKTtcbiAgICBtZXRhZGF0YS5mYWNhZGUgPSBpdDtcbiAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoaXQsIFNUQVRFLCBtZXRhZGF0YSk7XG4gICAgcmV0dXJuIG1ldGFkYXRhO1xuICB9O1xuICBnZXQgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaGFzT3duKGl0LCBTVEFURSkgPyBpdFtTVEFURV0gOiB7fTtcbiAgfTtcbiAgaGFzID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGhhc093bihpdCwgU1RBVEUpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBzZXQsXG4gIGdldDogZ2V0LFxuICBoYXM6IGhhcyxcbiAgZW5mb3JjZTogZW5mb3JjZSxcbiAgZ2V0dGVyRm9yOiBnZXR0ZXJGb3Jcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBDT05GSUdVUkFCTEVfRlVOQ1RJT05fTkFNRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1uYW1lJykuQ09ORklHVVJBQkxFO1xudmFyIGluc3BlY3RTb3VyY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UnKTtcbnZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJyk7XG5cbnZhciBlbmZvcmNlSW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZW5mb3JjZTtcbnZhciBnZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXQ7XG52YXIgJFN0cmluZyA9IFN0cmluZztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIHN0cmluZ1NsaWNlID0gdW5jdXJyeVRoaXMoJycuc2xpY2UpO1xudmFyIHJlcGxhY2UgPSB1bmN1cnJ5VGhpcygnJy5yZXBsYWNlKTtcbnZhciBqb2luID0gdW5jdXJyeVRoaXMoW10uam9pbik7XG5cbnZhciBDT05GSUdVUkFCTEVfTEVOR1RIID0gREVTQ1JJUFRPUlMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5KGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSwgJ2xlbmd0aCcsIHsgdmFsdWU6IDggfSkubGVuZ3RoICE9PSA4O1xufSk7XG5cbnZhciBURU1QTEFURSA9IFN0cmluZyhTdHJpbmcpLnNwbGl0KCdTdHJpbmcnKTtcblxudmFyIG1ha2VCdWlsdEluID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUsIG5hbWUsIG9wdGlvbnMpIHtcbiAgaWYgKHN0cmluZ1NsaWNlKCRTdHJpbmcobmFtZSksIDAsIDcpID09PSAnU3ltYm9sKCcpIHtcbiAgICBuYW1lID0gJ1snICsgcmVwbGFjZSgkU3RyaW5nKG5hbWUpLCAvXlN5bWJvbFxcKChbXildKilcXCkuKiQvLCAnJDEnKSArICddJztcbiAgfVxuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmdldHRlcikgbmFtZSA9ICdnZXQgJyArIG5hbWU7XG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuc2V0dGVyKSBuYW1lID0gJ3NldCAnICsgbmFtZTtcbiAgaWYgKCFoYXNPd24odmFsdWUsICduYW1lJykgfHwgKENPTkZJR1VSQUJMRV9GVU5DVElPTl9OQU1FICYmIHZhbHVlLm5hbWUgIT09IG5hbWUpKSB7XG4gICAgaWYgKERFU0NSSVBUT1JTKSBkZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgJ25hbWUnLCB7IHZhbHVlOiBuYW1lLCBjb25maWd1cmFibGU6IHRydWUgfSk7XG4gICAgZWxzZSB2YWx1ZS5uYW1lID0gbmFtZTtcbiAgfVxuICBpZiAoQ09ORklHVVJBQkxFX0xFTkdUSCAmJiBvcHRpb25zICYmIGhhc093bihvcHRpb25zLCAnYXJpdHknKSAmJiB2YWx1ZS5sZW5ndGggIT09IG9wdGlvbnMuYXJpdHkpIHtcbiAgICBkZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgJ2xlbmd0aCcsIHsgdmFsdWU6IG9wdGlvbnMuYXJpdHkgfSk7XG4gIH1cbiAgdHJ5IHtcbiAgICBpZiAob3B0aW9ucyAmJiBoYXNPd24ob3B0aW9ucywgJ2NvbnN0cnVjdG9yJykgJiYgb3B0aW9ucy5jb25zdHJ1Y3Rvcikge1xuICAgICAgaWYgKERFU0NSSVBUT1JTKSBkZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgJ3Byb3RvdHlwZScsIHsgd3JpdGFibGU6IGZhbHNlIH0pO1xuICAgIC8vIGluIFY4IH4gQ2hyb21lIDUzLCBwcm90b3R5cGVzIG9mIHNvbWUgbWV0aG9kcywgbGlrZSBgQXJyYXkucHJvdG90eXBlLnZhbHVlc2AsIGFyZSBub24td3JpdGFibGVcbiAgICB9IGVsc2UgaWYgKHZhbHVlLnByb3RvdHlwZSkgdmFsdWUucHJvdG90eXBlID0gdW5kZWZpbmVkO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIHZhciBzdGF0ZSA9IGVuZm9yY2VJbnRlcm5hbFN0YXRlKHZhbHVlKTtcbiAgaWYgKCFoYXNPd24oc3RhdGUsICdzb3VyY2UnKSkge1xuICAgIHN0YXRlLnNvdXJjZSA9IGpvaW4oVEVNUExBVEUsIHR5cGVvZiBuYW1lID09ICdzdHJpbmcnID8gbmFtZSA6ICcnKTtcbiAgfSByZXR1cm4gdmFsdWU7XG59O1xuXG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1leHRlbmQtbmF0aXZlIC0tIHJlcXVpcmVkXG5GdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmcgPSBtYWtlQnVpbHRJbihmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuIGlzQ2FsbGFibGUodGhpcykgJiYgZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKS5zb3VyY2UgfHwgaW5zcGVjdFNvdXJjZSh0aGlzKTtcbn0sICd0b1N0cmluZycpO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIG1ha2VCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4nKTtcbnZhciBkZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIGtleSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSBvcHRpb25zID0ge307XG4gIHZhciBzaW1wbGUgPSBvcHRpb25zLmVudW1lcmFibGU7XG4gIHZhciBuYW1lID0gb3B0aW9ucy5uYW1lICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm5hbWUgOiBrZXk7XG4gIGlmIChpc0NhbGxhYmxlKHZhbHVlKSkgbWFrZUJ1aWx0SW4odmFsdWUsIG5hbWUsIG9wdGlvbnMpO1xuICBpZiAob3B0aW9ucy5nbG9iYWwpIHtcbiAgICBpZiAoc2ltcGxlKSBPW2tleV0gPSB2YWx1ZTtcbiAgICBlbHNlIGRlZmluZUdsb2JhbFByb3BlcnR5KGtleSwgdmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIW9wdGlvbnMudW5zYWZlKSBkZWxldGUgT1trZXldO1xuICAgICAgZWxzZSBpZiAoT1trZXldKSBzaW1wbGUgPSB0cnVlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgICBpZiAoc2ltcGxlKSBPW2tleV0gPSB2YWx1ZTtcbiAgICBlbHNlIGRlZmluZVByb3BlcnR5TW9kdWxlLmYoTywga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogIW9wdGlvbnMubm9uQ29uZmlndXJhYmxlLFxuICAgICAgd3JpdGFibGU6ICFvcHRpb25zLm5vbldyaXRhYmxlXG4gICAgfSk7XG4gIH0gcmV0dXJuIE87XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcblxuLy8gYE1hdGgudHJ1bmNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1tYXRoLnRydW5jXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tbWF0aC10cnVuYyAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE1hdGgudHJ1bmMgfHwgZnVuY3Rpb24gdHJ1bmMoeCkge1xuICB2YXIgbiA9ICt4O1xuICByZXR1cm4gKG4gPiAwID8gZmxvb3IgOiBjZWlsKShuKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRydW5jID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL21hdGgtdHJ1bmMnKTtcblxuLy8gYFRvSW50ZWdlck9ySW5maW5pdHlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b2ludGVnZXJvcmluZmluaXR5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICB2YXIgbnVtYmVyID0gK2FyZ3VtZW50O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICByZXR1cm4gbnVtYmVyICE9PSBudW1iZXIgfHwgbnVtYmVyID09PSAwID8gMCA6IHRydW5jKG51bWJlcik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHknKTtcblxudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBIZWxwZXIgZm9yIGEgcG9wdWxhciByZXBlYXRpbmcgY2FzZSBvZiB0aGUgc3BlYzpcbi8vIExldCBpbnRlZ2VyIGJlID8gVG9JbnRlZ2VyKGluZGV4KS5cbi8vIElmIGludGVnZXIgPCAwLCBsZXQgcmVzdWx0IGJlIG1heCgobGVuZ3RoICsgaW50ZWdlciksIDApOyBlbHNlIGxldCByZXN1bHQgYmUgbWluKGludGVnZXIsIGxlbmd0aCkuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIHZhciBpbnRlZ2VyID0gdG9JbnRlZ2VyT3JJbmZpbml0eShpbmRleCk7XG4gIHJldHVybiBpbnRlZ2VyIDwgMCA/IG1heChpbnRlZ2VyICsgbGVuZ3RoLCAwKSA6IG1pbihpbnRlZ2VyLCBsZW5ndGgpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9JbnRlZ2VyT3JJbmZpbml0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyLW9yLWluZmluaXR5Jyk7XG5cbnZhciBtaW4gPSBNYXRoLm1pbjtcblxuLy8gYFRvTGVuZ3RoYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9sZW5ndGhcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBsZW4gPSB0b0ludGVnZXJPckluZmluaXR5KGFyZ3VtZW50KTtcbiAgcmV0dXJuIGxlbiA+IDAgPyBtaW4obGVuLCAweDFGRkZGRkZGRkZGRkZGKSA6IDA7IC8vIDIgKiogNTMgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xuXG4vLyBgTGVuZ3RoT2ZBcnJheUxpa2VgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1sZW5ndGhvZmFycmF5bGlrZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0b0xlbmd0aChvYmoubGVuZ3RoKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1hYnNvbHV0ZS1pbmRleCcpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUueyBpbmRleE9mLCBpbmNsdWRlcyB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IGxlbmd0aE9mQXJyYXlMaWtlKE8pO1xuICAgIGlmIChsZW5ndGggPT09IDApIHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9PSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICAgICAgaWYgKHZhbHVlICE9PSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgaWYgKChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSAmJiBPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcbiAgaW5jbHVkZXM6IGNyZWF0ZU1ldGhvZCh0cnVlKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5pbmRleE9mYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5kZXhvZlxuICBpbmRleE9mOiBjcmVhdGVNZXRob2QoZmFsc2UpXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIGluZGV4T2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMnKS5pbmRleE9mO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcblxudmFyIHB1c2ggPSB1bmN1cnJ5VGhpcyhbXS5wdXNoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgIWhhc093bihoaWRkZW5LZXlzLCBrZXkpICYmIGhhc093bihPLCBrZXkpICYmIHB1c2gocmVzdWx0LCBrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzT3duKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHB1c2gocmVzdWx0LCBrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIElFOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSBbXG4gICdjb25zdHJ1Y3RvcicsXG4gICdoYXNPd25Qcm9wZXJ0eScsXG4gICdpc1Byb3RvdHlwZU9mJyxcbiAgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJyxcbiAgJ3RvTG9jYWxlU3RyaW5nJyxcbiAgJ3RvU3RyaW5nJyxcbiAgJ3ZhbHVlT2YnXG5dO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpbnRlcm5hbE9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG5cbnZhciBoaWRkZW5LZXlzID0gZW51bUJ1Z0tleXMuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eW5hbWVzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5bmFtZXMgLS0gc2FmZVxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHJldHVybiBpbnRlcm5hbE9iamVjdEtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlzeW1ib2xzIC0tIHNhZmVcbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcycpO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG5cbnZhciBjb25jYXQgPSB1bmN1cnJ5VGhpcyhbXS5jb25jYXQpO1xuXG4vLyBhbGwgb2JqZWN0IGtleXMsIGluY2x1ZGVzIG5vbi1lbnVtZXJhYmxlIGFuZCBzeW1ib2xzXG5tb2R1bGUuZXhwb3J0cyA9IGdldEJ1aWx0SW4oJ1JlZmxlY3QnLCAnb3duS2V5cycpIHx8IGZ1bmN0aW9uIG93bktleXMoaXQpIHtcbiAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlLmYoYW5PYmplY3QoaXQpKTtcbiAgdmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZS5mO1xuICByZXR1cm4gZ2V0T3duUHJvcGVydHlTeW1ib2xzID8gY29uY2F0KGtleXMsIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkpIDoga2V5cztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgb3duS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vd24ta2V5cycpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSwgZXhjZXB0aW9ucykge1xuICB2YXIga2V5cyA9IG93bktleXMoc291cmNlKTtcbiAgdmFyIGRlZmluZVByb3BlcnR5ID0gZGVmaW5lUHJvcGVydHlNb2R1bGUuZjtcbiAgdmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZS5mO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICBpZiAoIWhhc093bih0YXJnZXQsIGtleSkgJiYgIShleGNlcHRpb25zICYmIGhhc093bihleGNlcHRpb25zLCBrZXkpKSkge1xuICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgIH1cbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbnZhciByZXBsYWNlbWVudCA9IC8jfFxcLnByb3RvdHlwZVxcLi87XG5cbnZhciBpc0ZvcmNlZCA9IGZ1bmN0aW9uIChmZWF0dXJlLCBkZXRlY3Rpb24pIHtcbiAgdmFyIHZhbHVlID0gZGF0YVtub3JtYWxpemUoZmVhdHVyZSldO1xuICByZXR1cm4gdmFsdWUgPT09IFBPTFlGSUxMID8gdHJ1ZVxuICAgIDogdmFsdWUgPT09IE5BVElWRSA/IGZhbHNlXG4gICAgOiBpc0NhbGxhYmxlKGRldGVjdGlvbikgPyBmYWlscyhkZXRlY3Rpb24pXG4gICAgOiAhIWRldGVjdGlvbjtcbn07XG5cbnZhciBub3JtYWxpemUgPSBpc0ZvcmNlZC5ub3JtYWxpemUgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gIHJldHVybiBTdHJpbmcoc3RyaW5nKS5yZXBsYWNlKHJlcGxhY2VtZW50LCAnLicpLnRvTG93ZXJDYXNlKCk7XG59O1xuXG52YXIgZGF0YSA9IGlzRm9yY2VkLmRhdGEgPSB7fTtcbnZhciBOQVRJVkUgPSBpc0ZvcmNlZC5OQVRJVkUgPSAnTic7XG52YXIgUE9MWUZJTEwgPSBpc0ZvcmNlZC5QT0xZRklMTCA9ICdQJztcblxubW9kdWxlLmV4cG9ydHMgPSBpc0ZvcmNlZDtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJykuZjtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgZGVmaW5lQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4nKTtcbnZhciBkZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5Jyk7XG52YXIgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jb3B5LWNvbnN0cnVjdG9yLXByb3BlcnRpZXMnKTtcbnZhciBpc0ZvcmNlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1mb3JjZWQnKTtcblxuLypcbiAgb3B0aW9ucy50YXJnZXQgICAgICAgICAtIG5hbWUgb2YgdGhlIHRhcmdldCBvYmplY3RcbiAgb3B0aW9ucy5nbG9iYWwgICAgICAgICAtIHRhcmdldCBpcyB0aGUgZ2xvYmFsIG9iamVjdFxuICBvcHRpb25zLnN0YXQgICAgICAgICAgIC0gZXhwb3J0IGFzIHN0YXRpYyBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnByb3RvICAgICAgICAgIC0gZXhwb3J0IGFzIHByb3RvdHlwZSBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnJlYWwgICAgICAgICAgIC0gcmVhbCBwcm90b3R5cGUgbWV0aG9kIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy5mb3JjZWQgICAgICAgICAtIGV4cG9ydCBldmVuIGlmIHRoZSBuYXRpdmUgZmVhdHVyZSBpcyBhdmFpbGFibGVcbiAgb3B0aW9ucy5iaW5kICAgICAgICAgICAtIGJpbmQgbWV0aG9kcyB0byB0aGUgdGFyZ2V0LCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMud3JhcCAgICAgICAgICAgLSB3cmFwIGNvbnN0cnVjdG9ycyB0byBwcmV2ZW50aW5nIGdsb2JhbCBwb2xsdXRpb24sIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy51bnNhZmUgICAgICAgICAtIHVzZSB0aGUgc2ltcGxlIGFzc2lnbm1lbnQgb2YgcHJvcGVydHkgaW5zdGVhZCBvZiBkZWxldGUgKyBkZWZpbmVQcm9wZXJ0eVxuICBvcHRpb25zLnNoYW0gICAgICAgICAgIC0gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuICBvcHRpb25zLmVudW1lcmFibGUgICAgIC0gZXhwb3J0IGFzIGVudW1lcmFibGUgcHJvcGVydHlcbiAgb3B0aW9ucy5kb250Q2FsbEdldFNldCAtIHByZXZlbnQgY2FsbGluZyBhIGdldHRlciBvbiB0YXJnZXRcbiAgb3B0aW9ucy5uYW1lICAgICAgICAgICAtIHRoZSAubmFtZSBvZiB0aGUgZnVuY3Rpb24gaWYgaXQgZG9lcyBub3QgbWF0Y2ggdGhlIGtleVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9wdGlvbnMsIHNvdXJjZSkge1xuICB2YXIgVEFSR0VUID0gb3B0aW9ucy50YXJnZXQ7XG4gIHZhciBHTE9CQUwgPSBvcHRpb25zLmdsb2JhbDtcbiAgdmFyIFNUQVRJQyA9IG9wdGlvbnMuc3RhdDtcbiAgdmFyIEZPUkNFRCwgdGFyZ2V0LCBrZXksIHRhcmdldFByb3BlcnR5LCBzb3VyY2VQcm9wZXJ0eSwgZGVzY3JpcHRvcjtcbiAgaWYgKEdMT0JBTCkge1xuICAgIHRhcmdldCA9IGdsb2JhbFRoaXM7XG4gIH0gZWxzZSBpZiAoU1RBVElDKSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsVGhpc1tUQVJHRVRdIHx8IGRlZmluZUdsb2JhbFByb3BlcnR5KFRBUkdFVCwge30pO1xuICB9IGVsc2Uge1xuICAgIHRhcmdldCA9IGdsb2JhbFRoaXNbVEFSR0VUXSAmJiBnbG9iYWxUaGlzW1RBUkdFVF0ucHJvdG90eXBlO1xuICB9XG4gIGlmICh0YXJnZXQpIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIHNvdXJjZVByb3BlcnR5ID0gc291cmNlW2tleV07XG4gICAgaWYgKG9wdGlvbnMuZG9udENhbGxHZXRTZXQpIHtcbiAgICAgIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpO1xuICAgICAgdGFyZ2V0UHJvcGVydHkgPSBkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IudmFsdWU7XG4gICAgfSBlbHNlIHRhcmdldFByb3BlcnR5ID0gdGFyZ2V0W2tleV07XG4gICAgRk9SQ0VEID0gaXNGb3JjZWQoR0xPQkFMID8ga2V5IDogVEFSR0VUICsgKFNUQVRJQyA/ICcuJyA6ICcjJykgKyBrZXksIG9wdGlvbnMuZm9yY2VkKTtcbiAgICAvLyBjb250YWluZWQgaW4gdGFyZ2V0XG4gICAgaWYgKCFGT1JDRUQgJiYgdGFyZ2V0UHJvcGVydHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHR5cGVvZiBzb3VyY2VQcm9wZXJ0eSA9PSB0eXBlb2YgdGFyZ2V0UHJvcGVydHkpIGNvbnRpbnVlO1xuICAgICAgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyhzb3VyY2VQcm9wZXJ0eSwgdGFyZ2V0UHJvcGVydHkpO1xuICAgIH1cbiAgICAvLyBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gICAgaWYgKG9wdGlvbnMuc2hhbSB8fCAodGFyZ2V0UHJvcGVydHkgJiYgdGFyZ2V0UHJvcGVydHkuc2hhbSkpIHtcbiAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShzb3VyY2VQcm9wZXJ0eSwgJ3NoYW0nLCB0cnVlKTtcbiAgICB9XG4gICAgZGVmaW5lQnVpbHRJbih0YXJnZXQsIGtleSwgc291cmNlUHJvcGVydHksIG9wdGlvbnMpO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG5cbi8vIGBJc0FycmF5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXNhcnJheVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LWlzYXJyYXkgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGNsYXNzb2YoYXJndW1lbnQpID09PSAnQXJyYXknO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBUT19TVFJJTkdfVEFHID0gd2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xudmFyIHRlc3QgPSB7fTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL25vLWltbWVkaWF0ZS1tdXRhdGlvbiAtLSBFUzMgc3ludGF4IGxpbWl0YXRpb25cbnRlc3RbVE9fU1RSSU5HX1RBR10gPSAneic7XG5cbm1vZHVsZS5leHBvcnRzID0gU3RyaW5nKHRlc3QpID09PSAnW29iamVjdCB6XSc7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIFRPX1NUUklOR19UQUdfU1VQUE9SVCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmctdGFnLXN1cHBvcnQnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgY2xhc3NvZlJhdyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xuXG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIENPUlJFQ1RfQVJHVU1FTlRTID0gY2xhc3NvZlJhdyhmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbn07XG5cbi8vIGdldHRpbmcgdGFnIGZyb20gRVM2KyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2Bcbm1vZHVsZS5leHBvcnRzID0gVE9fU1RSSU5HX1RBR19TVVBQT1JUID8gY2xhc3NvZlJhdyA6IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgdGFnLCByZXN1bHQ7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mICh0YWcgPSB0cnlHZXQoTyA9ICRPYmplY3QoaXQpLCBUT19TVFJJTkdfVEFHKSkgPT0gJ3N0cmluZycgPyB0YWdcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IENPUlJFQ1RfQVJHVU1FTlRTID8gY2xhc3NvZlJhdyhPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChyZXN1bHQgPSBjbGFzc29mUmF3KE8pKSA9PT0gJ09iamVjdCcgJiYgaXNDYWxsYWJsZShPLmNhbGxlZSkgPyAnQXJndW1lbnRzJyA6IHJlc3VsdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZicpO1xuXG52YXIgJFN0cmluZyA9IFN0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgaWYgKGNsYXNzb2YoYXJndW1lbnQpID09PSAnU3ltYm9sJykgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgYSBTeW1ib2wgdmFsdWUgdG8gYSBzdHJpbmcnKTtcbiAgcmV0dXJuICRTdHJpbmcoYXJndW1lbnQpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5TW9kdWxlLmYob2JqZWN0LCBrZXksIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigwLCB2YWx1ZSkpO1xuICBlbHNlIG9iamVjdFtrZXldID0gdmFsdWU7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xuXG52YXIgJFN5bnRheEVycm9yID0gU3ludGF4RXJyb3I7XG52YXIgJHBhcnNlSW50ID0gcGFyc2VJbnQ7XG52YXIgZnJvbUNoYXJDb2RlID0gU3RyaW5nLmZyb21DaGFyQ29kZTtcbnZhciBhdCA9IHVuY3VycnlUaGlzKCcnLmNoYXJBdCk7XG52YXIgc2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG52YXIgZXhlYyA9IHVuY3VycnlUaGlzKC8uLy5leGVjKTtcblxudmFyIGNvZGVQb2ludHMgPSB7XG4gICdcXFxcXCInOiAnXCInLFxuICAnXFxcXFxcXFwnOiAnXFxcXCcsXG4gICdcXFxcLyc6ICcvJyxcbiAgJ1xcXFxiJzogJ1xcYicsXG4gICdcXFxcZic6ICdcXGYnLFxuICAnXFxcXG4nOiAnXFxuJyxcbiAgJ1xcXFxyJzogJ1xccicsXG4gICdcXFxcdCc6ICdcXHQnXG59O1xuXG52YXIgSVNfNF9IRVhfRElHSVRTID0gL15bXFxkYS1mXXs0fSQvaTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWdleHAvbm8tY29udHJvbC1jaGFyYWN0ZXIgLS0gc2FmZVxudmFyIElTX0MwX0NPTlRST0xfQ09ERSA9IC9eW1xcdTAwMDAtXFx1MDAxRl0kLztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc291cmNlLCBpKSB7XG4gIHZhciB1bnRlcm1pbmF0ZWQgPSB0cnVlO1xuICB2YXIgdmFsdWUgPSAnJztcbiAgd2hpbGUgKGkgPCBzb3VyY2UubGVuZ3RoKSB7XG4gICAgdmFyIGNociA9IGF0KHNvdXJjZSwgaSk7XG4gICAgaWYgKGNociA9PT0gJ1xcXFwnKSB7XG4gICAgICB2YXIgdHdvQ2hhcnMgPSBzbGljZShzb3VyY2UsIGksIGkgKyAyKTtcbiAgICAgIGlmIChoYXNPd24oY29kZVBvaW50cywgdHdvQ2hhcnMpKSB7XG4gICAgICAgIHZhbHVlICs9IGNvZGVQb2ludHNbdHdvQ2hhcnNdO1xuICAgICAgICBpICs9IDI7XG4gICAgICB9IGVsc2UgaWYgKHR3b0NoYXJzID09PSAnXFxcXHUnKSB7XG4gICAgICAgIGkgKz0gMjtcbiAgICAgICAgdmFyIGZvdXJIZXhEaWdpdHMgPSBzbGljZShzb3VyY2UsIGksIGkgKyA0KTtcbiAgICAgICAgaWYgKCFleGVjKElTXzRfSEVYX0RJR0lUUywgZm91ckhleERpZ2l0cykpIHRocm93IG5ldyAkU3ludGF4RXJyb3IoJ0JhZCBVbmljb2RlIGVzY2FwZSBhdDogJyArIGkpO1xuICAgICAgICB2YWx1ZSArPSBmcm9tQ2hhckNvZGUoJHBhcnNlSW50KGZvdXJIZXhEaWdpdHMsIDE2KSk7XG4gICAgICAgIGkgKz0gNDtcbiAgICAgIH0gZWxzZSB0aHJvdyBuZXcgJFN5bnRheEVycm9yKCdVbmtub3duIGVzY2FwZSBzZXF1ZW5jZTogXCInICsgdHdvQ2hhcnMgKyAnXCInKTtcbiAgICB9IGVsc2UgaWYgKGNociA9PT0gJ1wiJykge1xuICAgICAgdW50ZXJtaW5hdGVkID0gZmFsc2U7XG4gICAgICBpKys7XG4gICAgICBicmVhaztcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGV4ZWMoSVNfQzBfQ09OVFJPTF9DT0RFLCBjaHIpKSB0aHJvdyBuZXcgJFN5bnRheEVycm9yKCdCYWQgY29udHJvbCBjaGFyYWN0ZXIgaW4gc3RyaW5nIGxpdGVyYWwgYXQ6ICcgKyBpKTtcbiAgICAgIHZhbHVlICs9IGNocjtcbiAgICAgIGkrKztcbiAgICB9XG4gIH1cbiAgaWYgKHVudGVybWluYXRlZCkgdGhyb3cgbmV3ICRTeW50YXhFcnJvcignVW50ZXJtaW5hdGVkIHN0cmluZyBhdDogJyArIGkpO1xuICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGVuZDogaSB9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmcnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eScpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgcGFyc2VKU09OU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3BhcnNlLWpzb24tc3RyaW5nJyk7XG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zeW1ib2wtY29uc3RydWN0b3ItZGV0ZWN0aW9uJyk7XG5cbnZhciBKU09OID0gZ2xvYmFsVGhpcy5KU09OO1xudmFyIE51bWJlciA9IGdsb2JhbFRoaXMuTnVtYmVyO1xudmFyIFN5bnRheEVycm9yID0gZ2xvYmFsVGhpcy5TeW50YXhFcnJvcjtcbnZhciBuYXRpdmVQYXJzZSA9IEpTT04gJiYgSlNPTi5wYXJzZTtcbnZhciBlbnVtZXJhYmxlT3duUHJvcGVydGllcyA9IGdldEJ1aWx0SW4oJ09iamVjdCcsICdrZXlzJyk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBhdCA9IHVuY3VycnlUaGlzKCcnLmNoYXJBdCk7XG52YXIgc2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG52YXIgZXhlYyA9IHVuY3VycnlUaGlzKC8uLy5leGVjKTtcbnZhciBwdXNoID0gdW5jdXJyeVRoaXMoW10ucHVzaCk7XG5cbnZhciBJU19ESUdJVCA9IC9eXFxkJC87XG52YXIgSVNfTk9OX1pFUk9fRElHSVQgPSAvXlsxLTldJC87XG52YXIgSVNfTlVNQkVSX1NUQVJUID0gL15bXFxkLV0kLztcbnZhciBJU19XSElURVNQQUNFID0gL15bXFx0XFxuXFxyIF0kLztcblxudmFyIFBSSU1JVElWRSA9IDA7XG52YXIgT0JKRUNUID0gMTtcblxudmFyICRwYXJzZSA9IGZ1bmN0aW9uIChzb3VyY2UsIHJldml2ZXIpIHtcbiAgc291cmNlID0gdG9TdHJpbmcoc291cmNlKTtcbiAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dChzb3VyY2UsIDAsICcnKTtcbiAgdmFyIHJvb3QgPSBjb250ZXh0LnBhcnNlKCk7XG4gIHZhciB2YWx1ZSA9IHJvb3QudmFsdWU7XG4gIHZhciBlbmRJbmRleCA9IGNvbnRleHQuc2tpcChJU19XSElURVNQQUNFLCByb290LmVuZCk7XG4gIGlmIChlbmRJbmRleCA8IHNvdXJjZS5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoJ1VuZXhwZWN0ZWQgZXh0cmEgY2hhcmFjdGVyOiBcIicgKyBhdChzb3VyY2UsIGVuZEluZGV4KSArICdcIiBhZnRlciB0aGUgcGFyc2VkIGRhdGEgYXQ6ICcgKyBlbmRJbmRleCk7XG4gIH1cbiAgcmV0dXJuIGlzQ2FsbGFibGUocmV2aXZlcikgPyBpbnRlcm5hbGl6ZSh7ICcnOiB2YWx1ZSB9LCAnJywgcmV2aXZlciwgcm9vdCkgOiB2YWx1ZTtcbn07XG5cbnZhciBpbnRlcm5hbGl6ZSA9IGZ1bmN0aW9uIChob2xkZXIsIG5hbWUsIHJldml2ZXIsIG5vZGUpIHtcbiAgdmFyIHZhbCA9IGhvbGRlcltuYW1lXTtcbiAgdmFyIHVubW9kaWZpZWQgPSBub2RlICYmIHZhbCA9PT0gbm9kZS52YWx1ZTtcbiAgdmFyIGNvbnRleHQgPSB1bm1vZGlmaWVkICYmIHR5cGVvZiBub2RlLnNvdXJjZSA9PSAnc3RyaW5nJyA/IHsgc291cmNlOiBub2RlLnNvdXJjZSB9IDoge307XG4gIHZhciBlbGVtZW50UmVjb3Jkc0xlbiwga2V5cywgbGVuLCBpLCBQO1xuICBpZiAoaXNPYmplY3QodmFsKSkge1xuICAgIHZhciBub2RlSXNBcnJheSA9IGlzQXJyYXkodmFsKTtcbiAgICB2YXIgbm9kZXMgPSB1bm1vZGlmaWVkID8gbm9kZS5ub2RlcyA6IG5vZGVJc0FycmF5ID8gW10gOiB7fTtcbiAgICBpZiAobm9kZUlzQXJyYXkpIHtcbiAgICAgIGVsZW1lbnRSZWNvcmRzTGVuID0gbm9kZXMubGVuZ3RoO1xuICAgICAgbGVuID0gbGVuZ3RoT2ZBcnJheUxpa2UodmFsKTtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBpbnRlcm5hbGl6ZVByb3BlcnR5KHZhbCwgaSwgaW50ZXJuYWxpemUodmFsLCAnJyArIGksIHJldml2ZXIsIGkgPCBlbGVtZW50UmVjb3Jkc0xlbiA/IG5vZGVzW2ldIDogdW5kZWZpbmVkKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGtleXMgPSBlbnVtZXJhYmxlT3duUHJvcGVydGllcyh2YWwpO1xuICAgICAgbGVuID0gbGVuZ3RoT2ZBcnJheUxpa2Uoa2V5cyk7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgUCA9IGtleXNbaV07XG4gICAgICAgIGludGVybmFsaXplUHJvcGVydHkodmFsLCBQLCBpbnRlcm5hbGl6ZSh2YWwsIFAsIHJldml2ZXIsIGhhc093bihub2RlcywgUCkgPyBub2Rlc1tQXSA6IHVuZGVmaW5lZCkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gY2FsbChyZXZpdmVyLCBob2xkZXIsIG5hbWUsIHZhbCwgY29udGV4dCk7XG59O1xuXG52YXIgaW50ZXJuYWxpemVQcm9wZXJ0eSA9IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgaWYgKERFU0NSSVBUT1JTKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBrZXkpO1xuICAgIGlmIChkZXNjcmlwdG9yICYmICFkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSkgcmV0dXJuO1xuICB9XG4gIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSBkZWxldGUgb2JqZWN0W2tleV07XG4gIGVsc2UgY3JlYXRlUHJvcGVydHkob2JqZWN0LCBrZXksIHZhbHVlKTtcbn07XG5cbnZhciBOb2RlID0gZnVuY3Rpb24gKHZhbHVlLCBlbmQsIHNvdXJjZSwgbm9kZXMpIHtcbiAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB0aGlzLmVuZCA9IGVuZDtcbiAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gIHRoaXMubm9kZXMgPSBub2Rlcztcbn07XG5cbnZhciBDb250ZXh0ID0gZnVuY3Rpb24gKHNvdXJjZSwgaW5kZXgpIHtcbiAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gIHRoaXMuaW5kZXggPSBpbmRleDtcbn07XG5cbi8vIGh0dHBzOi8vd3d3Lmpzb24ub3JnL2pzb24tZW4uaHRtbFxuQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gIGZvcms6IGZ1bmN0aW9uIChuZXh0SW5kZXgpIHtcbiAgICByZXR1cm4gbmV3IENvbnRleHQodGhpcy5zb3VyY2UsIG5leHRJbmRleCk7XG4gIH0sXG4gIHBhcnNlOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNvdXJjZSA9IHRoaXMuc291cmNlO1xuICAgIHZhciBpID0gdGhpcy5za2lwKElTX1dISVRFU1BBQ0UsIHRoaXMuaW5kZXgpO1xuICAgIHZhciBmb3JrID0gdGhpcy5mb3JrKGkpO1xuICAgIHZhciBjaHIgPSBhdChzb3VyY2UsIGkpO1xuICAgIGlmIChleGVjKElTX05VTUJFUl9TVEFSVCwgY2hyKSkgcmV0dXJuIGZvcmsubnVtYmVyKCk7XG4gICAgc3dpdGNoIChjaHIpIHtcbiAgICAgIGNhc2UgJ3snOlxuICAgICAgICByZXR1cm4gZm9yay5vYmplY3QoKTtcbiAgICAgIGNhc2UgJ1snOlxuICAgICAgICByZXR1cm4gZm9yay5hcnJheSgpO1xuICAgICAgY2FzZSAnXCInOlxuICAgICAgICByZXR1cm4gZm9yay5zdHJpbmcoKTtcbiAgICAgIGNhc2UgJ3QnOlxuICAgICAgICByZXR1cm4gZm9yay5rZXl3b3JkKHRydWUpO1xuICAgICAgY2FzZSAnZic6XG4gICAgICAgIHJldHVybiBmb3JrLmtleXdvcmQoZmFsc2UpO1xuICAgICAgY2FzZSAnbic6XG4gICAgICAgIHJldHVybiBmb3JrLmtleXdvcmQobnVsbCk7XG4gICAgfSB0aHJvdyBuZXcgU3ludGF4RXJyb3IoJ1VuZXhwZWN0ZWQgY2hhcmFjdGVyOiBcIicgKyBjaHIgKyAnXCIgYXQ6ICcgKyBpKTtcbiAgfSxcbiAgbm9kZTogZnVuY3Rpb24gKHR5cGUsIHZhbHVlLCBzdGFydCwgZW5kLCBub2Rlcykge1xuICAgIHJldHVybiBuZXcgTm9kZSh2YWx1ZSwgZW5kLCB0eXBlID8gbnVsbCA6IHNsaWNlKHRoaXMuc291cmNlLCBzdGFydCwgZW5kKSwgbm9kZXMpO1xuICB9LFxuICBvYmplY3Q6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc291cmNlID0gdGhpcy5zb3VyY2U7XG4gICAgdmFyIGkgPSB0aGlzLmluZGV4ICsgMTtcbiAgICB2YXIgZXhwZWN0S2V5cGFpciA9IGZhbHNlO1xuICAgIHZhciBvYmplY3QgPSB7fTtcbiAgICB2YXIgbm9kZXMgPSB7fTtcbiAgICB2YXIgY2xvc2VkID0gZmFsc2U7XG4gICAgd2hpbGUgKGkgPCBzb3VyY2UubGVuZ3RoKSB7XG4gICAgICBpID0gdGhpcy51bnRpbChbJ1wiJywgJ30nXSwgaSk7XG4gICAgICBpZiAoYXQoc291cmNlLCBpKSA9PT0gJ30nICYmICFleHBlY3RLZXlwYWlyKSB7XG4gICAgICAgIGkrKztcbiAgICAgICAgY2xvc2VkID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICAvLyBQYXJzaW5nIHRoZSBrZXlcbiAgICAgIHZhciByZXN1bHQgPSB0aGlzLmZvcmsoaSkuc3RyaW5nKCk7XG4gICAgICB2YXIga2V5ID0gcmVzdWx0LnZhbHVlO1xuICAgICAgaSA9IHJlc3VsdC5lbmQ7XG4gICAgICBpID0gdGhpcy51bnRpbChbJzonXSwgaSkgKyAxO1xuICAgICAgLy8gUGFyc2luZyB2YWx1ZVxuICAgICAgaSA9IHRoaXMuc2tpcChJU19XSElURVNQQUNFLCBpKTtcbiAgICAgIHJlc3VsdCA9IHRoaXMuZm9yayhpKS5wYXJzZSgpO1xuICAgICAgY3JlYXRlUHJvcGVydHkobm9kZXMsIGtleSwgcmVzdWx0KTtcbiAgICAgIGNyZWF0ZVByb3BlcnR5KG9iamVjdCwga2V5LCByZXN1bHQudmFsdWUpO1xuICAgICAgaSA9IHRoaXMudW50aWwoWycsJywgJ30nXSwgcmVzdWx0LmVuZCk7XG4gICAgICB2YXIgY2hyID0gYXQoc291cmNlLCBpKTtcbiAgICAgIGlmIChjaHIgPT09ICcsJykge1xuICAgICAgICBleHBlY3RLZXlwYWlyID0gdHJ1ZTtcbiAgICAgICAgaSsrO1xuICAgICAgfSBlbHNlIGlmIChjaHIgPT09ICd9Jykge1xuICAgICAgICBpKys7XG4gICAgICAgIGNsb3NlZCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWNsb3NlZCkgdGhyb3cgbmV3IFN5bnRheEVycm9yKCdVbnRlcm1pbmF0ZWQgb2JqZWN0IGF0OiAnICsgaSk7XG4gICAgcmV0dXJuIHRoaXMubm9kZShPQkpFQ1QsIG9iamVjdCwgdGhpcy5pbmRleCwgaSwgbm9kZXMpO1xuICB9LFxuICBhcnJheTogZnVuY3Rpb24gKCkge1xuICAgIHZhciBzb3VyY2UgPSB0aGlzLnNvdXJjZTtcbiAgICB2YXIgaSA9IHRoaXMuaW5kZXggKyAxO1xuICAgIHZhciBleHBlY3RFbGVtZW50ID0gZmFsc2U7XG4gICAgdmFyIGFycmF5ID0gW107XG4gICAgdmFyIG5vZGVzID0gW107XG4gICAgdmFyIGNsb3NlZCA9IGZhbHNlO1xuICAgIHdoaWxlIChpIDwgc291cmNlLmxlbmd0aCkge1xuICAgICAgaSA9IHRoaXMuc2tpcChJU19XSElURVNQQUNFLCBpKTtcbiAgICAgIGlmIChhdChzb3VyY2UsIGkpID09PSAnXScgJiYgIWV4cGVjdEVsZW1lbnQpIHtcbiAgICAgICAgaSsrO1xuICAgICAgICBjbG9zZWQgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHZhciByZXN1bHQgPSB0aGlzLmZvcmsoaSkucGFyc2UoKTtcbiAgICAgIHB1c2gobm9kZXMsIHJlc3VsdCk7XG4gICAgICBwdXNoKGFycmF5LCByZXN1bHQudmFsdWUpO1xuICAgICAgaSA9IHRoaXMudW50aWwoWycsJywgJ10nXSwgcmVzdWx0LmVuZCk7XG4gICAgICBpZiAoYXQoc291cmNlLCBpKSA9PT0gJywnKSB7XG4gICAgICAgIGV4cGVjdEVsZW1lbnQgPSB0cnVlO1xuICAgICAgICBpKys7XG4gICAgICB9IGVsc2UgaWYgKGF0KHNvdXJjZSwgaSkgPT09ICddJykge1xuICAgICAgICBpKys7XG4gICAgICAgIGNsb3NlZCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWNsb3NlZCkgdGhyb3cgbmV3IFN5bnRheEVycm9yKCdVbnRlcm1pbmF0ZWQgYXJyYXkgYXQ6ICcgKyBpKTtcbiAgICByZXR1cm4gdGhpcy5ub2RlKE9CSkVDVCwgYXJyYXksIHRoaXMuaW5kZXgsIGksIG5vZGVzKTtcbiAgfSxcbiAgc3RyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGluZGV4ID0gdGhpcy5pbmRleDtcbiAgICB2YXIgcGFyc2VkID0gcGFyc2VKU09OU3RyaW5nKHRoaXMuc291cmNlLCB0aGlzLmluZGV4ICsgMSk7XG4gICAgcmV0dXJuIHRoaXMubm9kZShQUklNSVRJVkUsIHBhcnNlZC52YWx1ZSwgaW5kZXgsIHBhcnNlZC5lbmQpO1xuICB9LFxuICBudW1iZXI6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc291cmNlID0gdGhpcy5zb3VyY2U7XG4gICAgdmFyIHN0YXJ0SW5kZXggPSB0aGlzLmluZGV4O1xuICAgIHZhciBpID0gc3RhcnRJbmRleDtcbiAgICBpZiAoYXQoc291cmNlLCBpKSA9PT0gJy0nKSBpKys7XG4gICAgaWYgKGF0KHNvdXJjZSwgaSkgPT09ICcwJykgaSsrO1xuICAgIGVsc2UgaWYgKGV4ZWMoSVNfTk9OX1pFUk9fRElHSVQsIGF0KHNvdXJjZSwgaSkpKSBpID0gdGhpcy5za2lwKElTX0RJR0lULCBpICsgMSk7XG4gICAgZWxzZSB0aHJvdyBuZXcgU3ludGF4RXJyb3IoJ0ZhaWxlZCB0byBwYXJzZSBudW1iZXIgYXQ6ICcgKyBpKTtcbiAgICBpZiAoYXQoc291cmNlLCBpKSA9PT0gJy4nKSB7XG4gICAgICB2YXIgZnJhY3Rpb25TdGFydEluZGV4ID0gaSArIDE7XG4gICAgICBpID0gdGhpcy5za2lwKElTX0RJR0lULCBmcmFjdGlvblN0YXJ0SW5kZXgpO1xuICAgICAgaWYgKGZyYWN0aW9uU3RhcnRJbmRleCA9PT0gaSkgdGhyb3cgbmV3IFN5bnRheEVycm9yKFwiRmFpbGVkIHRvIHBhcnNlIG51bWJlcidzIGZyYWN0aW9uIGF0OiBcIiArIGkpO1xuICAgIH1cbiAgICBpZiAoYXQoc291cmNlLCBpKSA9PT0gJ2UnIHx8IGF0KHNvdXJjZSwgaSkgPT09ICdFJykge1xuICAgICAgaSsrO1xuICAgICAgaWYgKGF0KHNvdXJjZSwgaSkgPT09ICcrJyB8fCBhdChzb3VyY2UsIGkpID09PSAnLScpIGkrKztcbiAgICAgIHZhciBleHBvbmVudFN0YXJ0SW5kZXggPSBpO1xuICAgICAgaSA9IHRoaXMuc2tpcChJU19ESUdJVCwgaSk7XG4gICAgICBpZiAoZXhwb25lbnRTdGFydEluZGV4ID09PSBpKSB0aHJvdyBuZXcgU3ludGF4RXJyb3IoXCJGYWlsZWQgdG8gcGFyc2UgbnVtYmVyJ3MgZXhwb25lbnQgdmFsdWUgYXQ6IFwiICsgaSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm5vZGUoUFJJTUlUSVZFLCBOdW1iZXIoc2xpY2Uoc291cmNlLCBzdGFydEluZGV4LCBpKSksIHN0YXJ0SW5kZXgsIGkpO1xuICB9LFxuICBrZXl3b3JkOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB2YXIga2V5d29yZCA9ICcnICsgdmFsdWU7XG4gICAgdmFyIGluZGV4ID0gdGhpcy5pbmRleDtcbiAgICB2YXIgZW5kSW5kZXggPSBpbmRleCArIGtleXdvcmQubGVuZ3RoO1xuICAgIGlmIChzbGljZSh0aGlzLnNvdXJjZSwgaW5kZXgsIGVuZEluZGV4KSAhPT0ga2V5d29yZCkgdGhyb3cgbmV3IFN5bnRheEVycm9yKCdGYWlsZWQgdG8gcGFyc2UgdmFsdWUgYXQ6ICcgKyBpbmRleCk7XG4gICAgcmV0dXJuIHRoaXMubm9kZShQUklNSVRJVkUsIHZhbHVlLCBpbmRleCwgZW5kSW5kZXgpO1xuICB9LFxuICBza2lwOiBmdW5jdGlvbiAocmVnZXgsIGkpIHtcbiAgICB2YXIgc291cmNlID0gdGhpcy5zb3VyY2U7XG4gICAgZm9yICg7IGkgPCBzb3VyY2UubGVuZ3RoOyBpKyspIGlmICghZXhlYyhyZWdleCwgYXQoc291cmNlLCBpKSkpIGJyZWFrO1xuICAgIHJldHVybiBpO1xuICB9LFxuICB1bnRpbDogZnVuY3Rpb24gKGFycmF5LCBpKSB7XG4gICAgaSA9IHRoaXMuc2tpcChJU19XSElURVNQQUNFLCBpKTtcbiAgICB2YXIgY2hyID0gYXQodGhpcy5zb3VyY2UsIGkpO1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwgYXJyYXkubGVuZ3RoOyBqKyspIGlmIChhcnJheVtqXSA9PT0gY2hyKSByZXR1cm4gaTtcbiAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoJ1VuZXhwZWN0ZWQgY2hhcmFjdGVyOiBcIicgKyBjaHIgKyAnXCIgYXQ6ICcgKyBpKTtcbiAgfVxufTtcblxudmFyIE5PX1NPVVJDRV9TVVBQT1JUID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgdW5zYWZlSW50ID0gJzkwMDcxOTkyNTQ3NDA5OTMnO1xuICB2YXIgc291cmNlO1xuICBuYXRpdmVQYXJzZSh1bnNhZmVJbnQsIGZ1bmN0aW9uIChrZXksIHZhbHVlLCBjb250ZXh0KSB7XG4gICAgc291cmNlID0gY29udGV4dC5zb3VyY2U7XG4gIH0pO1xuICByZXR1cm4gc291cmNlICE9PSB1bnNhZmVJbnQ7XG59KTtcblxudmFyIFBST1BFUl9CQVNFX1BBUlNFID0gTkFUSVZFX1NZTUJPTCAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBTYWZhcmkgOSBidWdcbiAgcmV0dXJuIDEgLyBuYXRpdmVQYXJzZSgnLTAgXFx0JykgIT09IC1JbmZpbml0eTtcbn0pO1xuXG4vLyBgSlNPTi5wYXJzZWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWpzb24ucGFyc2Vcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLWpzb24tcGFyc2Utd2l0aC1zb3VyY2VcbiQoeyB0YXJnZXQ6ICdKU09OJywgc3RhdDogdHJ1ZSwgZm9yY2VkOiBOT19TT1VSQ0VfU1VQUE9SVCB9LCB7XG4gIHBhcnNlOiBmdW5jdGlvbiBwYXJzZSh0ZXh0LCByZXZpdmVyKSB7XG4gICAgcmV0dXJuIFBST1BFUl9CQVNFX1BBUlNFICYmICFpc0NhbGxhYmxlKHJldml2ZXIpID8gbmF0aXZlUGFyc2UodGV4dCkgOiAkcGFyc2UodGV4dCwgcmV2aXZlcik7XG4gIH1cbn0pO1xuIiwgIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG4vKiEgVHdpbmtsZS5qcyAtIG1vcmViaXRzLmpzICovXG5cbi8qKlxuICogQSBsaWJyYXJ5IGZ1bGwgb2YgbG90cyBvZiBnb29kbmVzcyBmb3IgdXNlciBzY3JpcHRzIG9uIE1lZGlhV2lraSB3aWtpcy5cbiAqXG4gKiBUaGUgaGlnaGxpZ2h0cyBpbmNsdWRlOlxuICogLSB7QGxpbmsgTW9yZWJpdHMud2lraS5hcGl9IC0gbWFrZSBjYWxscyB0byB0aGUgTWVkaWFXaWtpIEFQSVxuICogLSB7QGxpbmsgTW9yZWJpdHMud2lraS5wYWdlfSAtIG1vZGlmeSBwYWdlcyBvbiB0aGUgd2lraSAoZWRpdCwgcmV2ZXJ0LCBkZWxldGUsIGV0Yy4pXG4gKiAtIHtAbGluayBNb3JlYml0cy5kYXRlfSAtIGVuaGFuY2VkIGRhdGUgb2JqZWN0IHByb2Nlc3NpbmcsIHNvcnQgb2YgYSBsaWdodCBtb21lbnQuanNcbiAqIC0ge0BsaW5rIE1vcmViaXRzLnF1aWNrRm9ybX0gLSBnZW5lcmF0ZSBxdWljayBIVE1MIGZvcm1zIG9uIHRoZSBmbHlcbiAqIC0ge0BsaW5rIE1vcmViaXRzLnNpbXBsZVdpbmRvd30gLSBhIHdyYXBwZXIgZm9yIGpRdWVyeSBVSSBEaWFsb2cgd2l0aCBhIGN1c3RvbSBsb29rIGFuZCBleHRyYSBmZWF0dXJlc1xuICogLSB7QGxpbmsgTW9yZWJpdHMuc3RhdHVzfSAtIGEgcm91Z2gtYW5kLXJlYWR5IHN0YXR1cyBtZXNzYWdlIGRpc3BsYXllciwgdXNlZCBieSB0aGUgTW9yZWJpdHMud2lraSBjbGFzc2VzXG4gKiAtIHtAbGluayBNb3JlYml0cy53aWtpdGV4dH0gLSB1dGlsaXRpZXMgZm9yIGRlYWxpbmcgd2l0aCB3aWtpdGV4dFxuICogLSB7QGxpbmsgTW9yZWJpdHMuc3RyaW5nfSAtIHV0aWxpdGllcyBmb3IgbWFuaXB1bGF0aW5nIHN0cmluZ3NcbiAqIC0ge0BsaW5rIE1vcmViaXRzLmFycmF5fSAtIHV0aWxpdGllcyBmb3IgbWFuaXB1bGF0aW5nIGFycmF5c1xuICogLSB7QGxpbmsgTW9yZWJpdHMuaXB9IC0gdXRpbGl0aWVzIHRvIGhlbHAgcHJvY2VzcyBJUCBhZGRyZXNzZXNcbiAqXG4gKiBEZXBlbmRlbmNpZXM6XG4gKiAtIFRoZSB3aG9sZSB0aGluZyByZWxpZXMgb24galF1ZXJ5LiAgQnV0IG1vc3Qgd2lraXMgc2hvdWxkIHByb3ZpZGUgdGhpcyBieSBkZWZhdWx0LlxuICogLSB7QGxpbmsgTW9yZWJpdHMucXVpY2tGb3JtfSwge0BsaW5rIE1vcmViaXRzLnNpbXBsZVdpbmRvd30sIGFuZCB7QGxpbmsgTW9yZWJpdHMuc3RhdHVzfSByZWx5IG9uIHRoZSBcIm1vcmViaXRzLmNzc1wiIGZpbGUgZm9yIHRoZWlyIHN0eWxpbmcuXG4gKiAtIHtAbGluayBNb3JlYml0cy5zaW1wbGVXaW5kb3d9IGFuZCB7QGxpbmsgTW9yZWJpdHMucXVpY2tGb3JtfSB0b29sdGlwcyByZWx5IG9uIGpRdWVyeSBVSSBEaWFsb2cgKGZyb20gUmVzb3VyY2VMb2FkZXIgbW9kdWxlIG5hbWUgJ2pxdWVyeS51aScpLlxuICogLSBUbyBjcmVhdGUgYSBnYWRnZXQgYmFzZWQgb24gbW9yZWJpdHMuanMsIHVzZSB0aGlzIHN5bnRheCBpbiBNZWRpYVdpa2k6R2FkZ2V0cy1kZWZpbml0aW9uOlxuICogICAgIC0gYCpHYWRnZXROYW1lW1Jlc291cmNlTG9hZGVyfGRlcGVuZGVuY2llcz1tZWRpYXdpa2kudXNlcixtZWRpYXdpa2kudXRpbCxtZWRpYXdpa2kuVGl0bGUsanF1ZXJ5LnVpXXxtb3JlYml0cy5qc3xtb3JlYml0cy5jc3N8R2FkZ2V0TmFtZS5qc2BcbiAqIC0gQWx0ZXJuYXRpdmVseSwgeW91IGNhbiBjb25maWd1cmUgbW9yZWJpdHMuanMgYXMgYSBoaWRkZW4gZ2FkZ2V0IGluIE1lZGlhV2lraTpHYWRnZXRzLWRlZmluaXRpb246XG4gKiAgICAgLSBgKm1vcmViaXRzW1Jlc291cmNlTG9hZGVyfGRlcGVuZGVuY2llcz1tZWRpYXdpa2kudXNlcixtZWRpYXdpa2kudXRpbCxtZWRpYXdpa2kuVGl0bGUsanF1ZXJ5LnVpfGhpZGRlbl18bW9yZWJpdHMuanN8bW9yZWJpdHMuY3NzYFxuICogICAgIGFuZCB0aGVuIGxvYWQgZXh0LmdhZGdldC5tb3JlYml0cyBhcyBvbmUgb2YgdGhlIGRlcGVuZGVuY2llcyBmb3IgdGhlIG5ldyBnYWRnZXQuXG4gKlxuICogQWxsIHRoZSBzdHVmZiBoZXJlIHdvcmtzIG9uIGFsbCBicm93c2VycyBmb3Igd2hpY2ggTWVkaWFXaWtpIHByb3ZpZGVzIEphdmFTY3JpcHQgc3VwcG9ydC5cbiAqXG4gKiBUaGlzIGxpYnJhcnkgaXMgbWFpbnRhaW5lZCBieSB0aGUgbWFpbnRhaW5lcnMgb2YgVHdpbmtsZS5cbiAqIEZvciBxdWVyaWVzLCBzdWdnZXN0aW9ucywgaGVscCwgZXRjLiwgaGVhZCB0byBbSGVscDpUd2lua2xlXShodHRwczovL3d3dy5xaXV3ZW5iYWlrZS5jbi93aWtpL0g6VFcpLlxuICogVGhlIGxhdGVzdCBkZXZlbG9wbWVudCBzb3VyY2UgaXMgYXZhaWxhYmxlIGF0IHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vd2lraW1lZGlhLWdhZGdldHMvdHdpbmtsZS9ibG9iL21hc3Rlci9tb3JlYml0cy5qc3xHaXRIdWJ9LlxuICpcbiAqIEBwYXJhbSB7SlF1ZXJ5fSAkXG4gKiBAbmFtZXNwYWNlIE1vcmViaXRzXG4gKi9cbmltcG9ydCAnLi9tb3JlYml0cy5sZXNzJztcbmltcG9ydCB7Z2VuZXJhdGVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuKGZ1bmN0aW9uIG1vcmViaXRzKCQpIHtcblx0Ly8gV3JhcCBlbnRpcmUgZmlsZSB3aXRoIGFub255bW91cyBmdW5jdGlvblxuXHQvKiogQGxlbmRzIE1vcmViaXRzICovXG5cdGNvbnN0IE1vcmViaXRzID0ge307XG5cdHdpbmRvdy5Nb3JlYml0cyA9IE1vcmViaXRzOyAvLyBhbGxvdyBnbG9iYWwgYWNjZXNzXG5cdC8vIE5vIE1vcmViaXRzLmkxOG4gYXQgdGhpcyB0aW1lXG5cdC8qKlxuXHQgKiBXaWtpLXNwZWNpZmljIGNvbmZpZ3VyYXRpb25zIGZvciBNb3JlYml0c1xuXHQgKi9cblx0TW9yZWJpdHMubDEwbiA9IHtcblx0XHQvKipcblx0XHQgKiBMb2NhbCBhbGlhc2VzIGZvciBcInJlZGlyZWN0XCIgbWFnaWMgd29yZC5cblx0XHQgKiBDaGVjayB1c2luZyBhcGkucGhwP2FjdGlvbj1xdWVyeSZmb3JtYXQ9anNvbiZtZXRhPXNpdGVpbmZvJmZvcm1hdHZlcnNpb249MiZzaXByb3A9bWFnaWN3b3Jkc1xuXHRcdCAqL1xuXHRcdHJlZGlyZWN0VGFnQWxpYXNlczogWycjUkVESVJFQ1QnLCAnI+mHjeWumuWQkSddLFxuXHRcdC8qKlxuXHRcdCAqIFRha2VzIGEgc3RyaW5nIGFzIGFyZ3VtZW50IGFuZCBjaGVja3MgaWYgaXQgaXMgYSB0aW1lc3RhbXAgb3Igbm90XG5cdFx0ICogSWYgbm90LCBpdCByZXR1cm5zIG51bGwuIElmIHllcywgaXQgcmV0dXJucyBhbiBhcnJheSBvZiBpbnRlZ2Vyc1xuXHRcdCAqIGluIHRoZSBmb3JtYXQgW3llYXIsIG1vbnRoLCBkYXRlLCBob3VyLCBtaW51dGUsIHNlY29uZF1cblx0XHQgKiB3aGljaCBjYW4gYmUgcGFzc2VkIHRvIERhdGUuVVRDKClcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcblx0XHQgKiBAcmV0dXJucyB7bnVtYmVyW10gfCBudWxsfVxuXHRcdCAqL1xuXHRcdHNpZ25hdHVyZVRpbWVzdGFtcEZvcm1hdDogKHN0cikgPT4ge1xuXHRcdFx0Y29uc3Qgcmd4VVRDID0gLyhcXGR7NH0p5bm0KFxcZHsxLDJ9KeaciChcXGR7MSwyfSnml6UgXFwoLlxcKSAoXFxkezJ9KTooXFxkezJ9KSBcXChVVENcXCkvOyAvLyBZWVlZ5bm0TW9udGjmnIhEROaXpSAodykgSEg6bW0gKFVUQylcblx0XHRcdGNvbnN0IHJneENTVCA9IC8oXFxkezR9KeW5tChcXGR7MSwyfSnmnIgoXFxkezEsMn0p5pelIFxcKC5cXCkgKFxcZHsyfSk6KFxcZHsyfSkgXFwoQ1NUXFwpLzsgLy8gWVlZWeW5tE1vbnRo5pyIRETml6UgKHcpIEhIOm1tIChDU1QpXG5cdFx0XHRjb25zdCBtYXRjaCA9IHJneFVUQy5leGVjKHN0cikgfHwgcmd4Q1NULmV4ZWMoc3RyKTtcblx0XHRcdGNvbnN0IG1hdGNoQ1NUID0gcmd4Q1NULmV4ZWMoc3RyKTtcblx0XHRcdGlmICghbWF0Y2gpIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBtb250aCA9IE1vcmViaXRzLmRhdGUubG9jYWxlRGF0YS5tb250aHMuaW5kZXhPZihtYXRjaFs0XSk7XG5cdFx0XHRpZiAobW9udGggPT09IC0xKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdFx0Ly8gLi4uLi4geWVhciAuLi4uIG1vbnRoIC4uLiBkYXRlIC4uLi4gaG91ciAuLi4gbWludXRlXG5cdFx0XHRyZXR1cm4gbWF0Y2hDU1Rcblx0XHRcdFx0PyBbbWF0Y2hbMV0sIG1hdGNoWzJdIC0gMSwgbWF0Y2hbM10sIG1hdGNoWzRdIC0gOCwgbWF0Y2hbNV1dXG5cdFx0XHRcdDogW21hdGNoWzFdLCBtYXRjaFsyXSAtIDEsIG1hdGNoWzNdLCBtYXRjaFs0XSwgbWF0Y2hbNV1dO1xuXHRcdH0sXG5cdH07XG5cdC8qKlxuXHQgKiBTaW1wbGUgaGVscGVyIGZ1bmN0aW9uIHRvIHNlZSB3aGF0IGdyb3VwcyBhIHVzZXIgbWlnaHQgYmVsb25nLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZ3JvdXAgLSBlLmcuIGBzeXNvcGAsIGBhdXRvY29uZmlybWVkYCwgZXRjLlxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdE1vcmViaXRzLnVzZXJJc0luR3JvdXAgPSAoZ3JvdXApID0+IHtcblx0XHRyZXR1cm4gbXcuY29uZmlnLmdldCgnd2dVc2VyR3JvdXBzJykuaW5jbHVkZXMoZ3JvdXApIHx8IG13LmNvbmZpZy5nZXQoJ3dnR2xvYmFsR3JvdXBzJykuaW5jbHVkZXMoZ3JvdXApO1xuXHR9O1xuXHQvKipcblx0ICogSGFyZGNvZGVzIHdoZXRoZXIgdGhlIHVzZXIgaXMgYSBzeXNvcCwgdXNlZCBhIGxvdC5cblx0ICpcblx0ICogQHR5cGUge2Jvb2xlYW59XG5cdCAqL1xuXHRNb3JlYml0cy51c2VySXNTeXNvcCA9XG5cdFx0TW9yZWJpdHMudXNlcklzSW5Hcm91cCgnc3lzb3AnKSB8fCBNb3JlYml0cy51c2VySXNJbkdyb3VwKCdzdGV3YXJkJykgfHwgTW9yZWJpdHMudXNlcklzSW5Hcm91cCgncWl1d2VuJyk7XG5cdC8qKlxuXHQgKiBEZXByZWNhdGVkIGFzIG9mIEZlYnJ1YXJ5IDIwMjEsIHVzZSB7QGxpbmsgTW9yZWJpdHMuaXAuc2FuaXRpemVJUHY2fS5cblx0ICpcblx0ICogQGRlcHJlY2F0ZWQgVXNlIHtAbGluayBNb3JlYml0cy5pcC5zYW5pdGl6ZUlQdjZ9LlxuXHQgKiBDb252ZXJ0cyBhbiBJUHY2IGFkZHJlc3MgdG8gdGhlIGNhbm9uaWNhbCBmb3JtIHN0b3JlZCBhbmQgdXNlZCBieSBNZWRpYVdpa2kuXG5cdCAqIEphdmFTY3JpcHQgdHJhbnNsYXRpb24gb2YgdGhlIHtAbGluayBodHRwczovL2dlcnJpdC53aWtpbWVkaWEub3JnL3IvcGx1Z2lucy9naXRpbGVzL21lZGlhd2lraS9jb3JlLysvOGViNmFjM2U4NGVhMzMxMmQzOTFjYTk2YzEyYzQ5ZTNhZDA3NTNiYi9pbmNsdWRlcy91dGlscy9JUC5waHAjMTMxfGBJUDo6c2FuaXRpemVJUCgpYH1cblx0ICogZnVuY3Rpb24gZnJvbSB0aGUgSVBVdGlscyBsaWJyYXJ5LiAgQWRkcmVzc2VzIGFyZSB2ZXJib3NlLCB1cHBlcmNhc2UsXG5cdCAqIG5vcm1hbGl6ZWQsIGFuZCBleHBhbmRlZCB0byA4IHdvcmRzLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gYWRkcmVzcyAtIFRoZSBJUHY2IGFkZHJlc3MsIHdpdGggb3Igd2l0aG91dCBDSURSLlxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHQgKi9cblx0TW9yZWJpdHMuc2FuaXRpemVJUHY2ID0gKGFkZHJlc3MpID0+IHtcblx0XHRjb25zb2xlLndhcm4oXG5cdFx0XHQnW01vcmViaXRzXSBOT1RFOiBNb3JlYml0cy5zYW5pdGl6ZUlQdjYgd2FzIHJlbmFtZWQgdG8gTW9yZWJpdHMuaXAuc2FuaXRpemVJUHY2IGluIEZlYnJ1YXJ5IDIwMjEsIHBsZWFzZSB1c2UgdGhhdCBpbnN0ZWFkJ1xuXHRcdCk7XG5cdFx0cmV0dXJuIE1vcmViaXRzLmlwLnNhbml0aXplSVB2NihhZGRyZXNzKTtcblx0fTtcblx0LyoqXG5cdCAqIERldGVybWluZXMgd2hldGhlciB0aGUgY3VycmVudCBwYWdlIGlzIGEgcmVkaXJlY3Qgb3Igc29mdCByZWRpcmVjdC4gRmFpbHNcblx0ICogdG8gZGV0ZWN0IHNvZnQgcmVkaXJlY3RzIG9uIGVkaXQsIGhpc3RvcnksIGV0Yy4gcGFnZXMuICBXaWxsIGF0dGVtcHQgdG9cblx0ICogZGV0ZWN0IE1vZHVsZTpSZkQsIHdpdGggdGhlIHNhbWUgZmFpbHVyZSBwb2ludHMuXG5cdCAqXG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0TW9yZWJpdHMuaXNQYWdlUmVkaXJlY3QgPSAoKSA9PiB7XG5cdFx0cmV0dXJuICEhKFxuXHRcdFx0bXcuY29uZmlnLmdldCgnd2dJc1JlZGlyZWN0JykgfHxcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzb2Z0cmVkaXJlY3QnKSB8fFxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJveC1SZkQnKSB8fFxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJveC1SZWRpcmVjdF9jYXRlZ29yeV9zaGVsbCcpXG5cdFx0KTtcblx0fTtcblx0LyoqXG5cdCAqIFN0b3JlcyBhIG5vcm1hbGl6ZWQgKHVuZGVyc2NvcmVzIGNvbnZlcnRlZCB0byBzcGFjZXMpIHZlcnNpb24gb2YgdGhlXG5cdCAqIGB3Z1BhZ2VOYW1lYCB2YXJpYWJsZS5cblx0ICpcblx0ICogQHR5cGUge3N0cmluZ31cblx0ICovXG5cdE1vcmViaXRzLnBhZ2VOYW1lTm9ybSA9IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKS5yZXBsYWNlKC9fL2csICcgJyk7XG5cdC8qKlxuXHQgKiBDcmVhdGUgYSBzdHJpbmcgZm9yIHVzZSBpbiByZWdleCBtYXRjaGluZyBhIHBhZ2UgbmFtZS4gIEFjY291bnRzIGZvclxuXHQgKiBsZWFkaW5nIGNoYXJhY3RlcidzIGNhcGl0YWxpemF0aW9uLCB1bmRlcnNjb3JlcyBhcyBzcGFjZXMsIGFuZCBzcGVjaWFsXG5cdCAqIGNoYXJhY3RlcnMgYmVpbmcgZXNjYXBlZC4gIFNlZSBhbHNvIHtAbGluayBNb3JlYml0cy5uYW1lc3BhY2VSZWdleH0uXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBwYWdlTmFtZSAtIFBhZ2UgbmFtZSB3aXRob3V0IG5hbWVzcGFjZS5cblx0ICogQHJldHVybnMge3N0cmluZ30gLSBGb3IgYSBwYWdlIG5hbWUgYEZvbyBiYXJgLCByZXR1cm5zIHRoZSBzdHJpbmcgYFtGZl1vb1tfIF1iYXJgLlxuXHQgKi9cblx0TW9yZWJpdHMucGFnZU5hbWVSZWdleCA9IChwYWdlTmFtZSkgPT4ge1xuXHRcdGlmIChwYWdlTmFtZSA9PT0gJycpIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cdFx0Y29uc3QgW2ZpcnN0Q2hhcl0gPSBwYWdlTmFtZTtcblx0XHRjb25zdCByZW1haW5kZXIgPSBNb3JlYml0cy5zdHJpbmcuZXNjYXBlUmVnRXhwKHBhZ2VOYW1lLnNsaWNlKDEpKTtcblx0XHRpZiAobXcuVGl0bGUucGhwQ2hhclRvVXBwZXIoZmlyc3RDaGFyKSAhPT0gZmlyc3RDaGFyLnRvTG93ZXJDYXNlKCkpIHtcblx0XHRcdHJldHVybiBgWyR7bXcuVGl0bGUucGhwQ2hhclRvVXBwZXIoZmlyc3RDaGFyKX0ke2ZpcnN0Q2hhci50b0xvd2VyQ2FzZSgpfV0ke3JlbWFpbmRlcn1gO1xuXHRcdH1cblx0XHRyZXR1cm4gTW9yZWJpdHMuc3RyaW5nLmVzY2FwZVJlZ0V4cChmaXJzdENoYXIpICsgcmVtYWluZGVyO1xuXHR9O1xuXHQvKipcblx0ICogQ29udmVydHMgc3RyaW5nIG9yIGFycmF5IG9mIERPTSBub2RlcyBpbnRvIGFuIEhUTUwgZnJhZ21lbnQuXG5cdCAqIFdpa2lsaW5rIHN5bnRheCAoYFtbLi4uXV1gKSBpcyB0cmFuc2Zvcm1lZCBpbnRvIEhUTUwgYW5jaG9yLlxuXHQgKiBVc2VkIGluIE1vcmViaXRzLnF1aWNrRm9ybSBhbmQgTW9yZWJpdHMuc3RhdHVzXG5cdCAqXG5cdCAqIEBpbnRlcm5hbFxuXHQgKiBAcGFyYW0ge3N0cmluZ3xOb2RlfChzdHJpbmd8Tm9kZSlbXX0gaW5wdXRcblx0ICogQHJldHVybnMge0RvY3VtZW50RnJhZ21lbnR9XG5cdCAqL1xuXHRNb3JlYml0cy5jcmVhdGVIdG1sID0gKGlucHV0KSA9PiB7XG5cdFx0Y29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cdFx0aWYgKCFpbnB1dCkge1xuXHRcdFx0cmV0dXJuIGZyYWdtZW50O1xuXHRcdH1cblx0XHRpbnB1dCA9IGdlbmVyYXRlQXJyYXkoaW5wdXQpO1xuXHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiBpbnB1dCkge1xuXHRcdFx0aWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlKSB7XG5cdFx0XHRcdGZyYWdtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Zm9yIChjb25zdCBub2RlIG9mICQucGFyc2VIVE1MKE1vcmViaXRzLmNyZWF0ZUh0bWwucmVuZGVyV2lraWxpbmtzKGVsZW1lbnQpKSkge1xuXHRcdFx0XHRcdGZyYWdtZW50LmFwcGVuZENoaWxkKG5vZGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBmcmFnbWVudDtcblx0fTtcblx0LyoqXG5cdCAqIENvbnZlcnRzIHdpa2lsaW5rcyB0byBIVE1MIGFuY2hvciB0YWdzLlxuXHQgKlxuXHQgKiBAcGFyYW0gdGV4dFxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdE1vcmViaXRzLmNyZWF0ZUh0bWwucmVuZGVyV2lraWxpbmtzID0gKHRleHQpID0+IHtcblx0XHRjb25zdCB1YiA9IG5ldyBNb3JlYml0cy51bmJpbmRlcih0ZXh0KTtcblx0XHQvLyBEb24ndCBjb252ZXJ0IHdpa2lsaW5rcyB3aXRoaW4gY29kZSB0YWdzIGFzIHRoZXkncmUgdXNlZCBmb3IgZGlzcGxheWluZyB3aWtpLWNvZGVcblx0XHR1Yi51bmJpbmQoJzxjb2RlPicsICc8L2NvZGU+Jyk7XG5cdFx0dWIuY29udGVudCA9IHViLmNvbnRlbnQucmVwbGFjZSgvXFxbXFxbOj8oPzooW158XFxdXSs/KVxcfCk/KFteXFxdfF0rPylcXF1cXF0vZywgKF8sIHRhcmdldCwgdGV4dF8pID0+IHtcblx0XHRcdHRhcmdldCB8fD0gdGV4dF87XG5cdFx0XHRyZXR1cm4gYDxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIiR7bXcudXRpbC5nZXRVcmwodGFyZ2V0KX1cIiB0aXRsZT1cIiR7dGFyZ2V0LnJlcGxhY2UoXG5cdFx0XHRcdC9cIi9nLFxuXHRcdFx0XHQnJiMzNDsnXG5cdFx0XHQpfVwiPiR7dGV4dF99PC9hPmA7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIHViLnJlYmluZCgpO1xuXHR9O1xuXHQvKipcblx0ICogQ3JlYXRlIGEgc3RyaW5nIGZvciB1c2UgaW4gcmVnZXggbWF0Y2hpbmcgYWxsIG5hbWVzcGFjZSBhbGlhc2VzLCByZWdhcmRsZXNzXG5cdCAqIG9mIHRoZSBjYXBpdGFsaXphdGlvbiBhbmQgdW5kZXJzY29yZXMvc3BhY2VzLiAgRG9lc24ndCBpbmNsdWRlIHRoZSBvcHRpb25hbFxuXHQgKiBsZWFkaW5nIGA6YCwgYnV0IGlmIHRoZXJlJ3MgbW9yZSB0aGFuIG9uZSBpdGVtLCB3cmFwcyB0aGUgbGlzdCBpbiBhXG5cdCAqIG5vbi1jYXB0dXJpbmcgZ3JvdXAuICBUaGlzIG1lYW5zIHlvdSBjYW4gZG8gYE1vcmViaXRzLm5hbWVzcGFjZVJlZ2V4KFs0XSkgK1xuXHQgKiAnOicgKyBNb3JlYml0cy5wYWdlTmFtZVJlZ2V4KCdUd2lua2xlJylgIHRvIG1hdGNoIGEgZnVsbCBwYWdlLiAgVXNlc1xuXHQgKiB7QGxpbmsgTW9yZWJpdHMucGFnZU5hbWVSZWdleH0uXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyW119IG5hbWVzcGFjZXMgLSBBcnJheSBvZiBuYW1lc3BhY2UgbnVtYmVycy4gIFVudXNlZC9pbnZhbGlkXG5cdCAqIG5hbWVzcGFjZSBudW1iZXJzIGFyZSBzaWxlbnRseSBkaXNjYXJkZWQuXG5cdCAqIEBleGFtcGxlXG5cdCAqIC8vIHJldHVybnMgJyg/OltGZl1bSWldW0xsXVtFZV18W0lpXVtNbV1bQWFdW0dnXVtFZV0pJ1xuXHQgKiBNb3JlYml0cy5uYW1lc3BhY2VSZWdleChbNl0pXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9IC0gUmVnZXgtc3VpdGFibGUgc3RyaW5nIG9mIGFsbCBuYW1lc3BhY2UgYWxpYXNlcy5cblx0ICovXG5cdE1vcmViaXRzLm5hbWVzcGFjZVJlZ2V4ID0gKG5hbWVzcGFjZXMpID0+IHtcblx0XHRuYW1lc3BhY2VzID0gZ2VuZXJhdGVBcnJheShuYW1lc3BhY2VzKTtcblx0XHRjb25zdCBhbGlhc2VzID0gW107XG5cdFx0bGV0IHJlZ2V4O1xuXHRcdGZvciAoY29uc3QgW25hbWUsIG51bWJlcl0gb2YgT2JqZWN0LmVudHJpZXMobXcuY29uZmlnLmdldCgnd2dOYW1lc3BhY2VJZHMnKSkpIHtcblx0XHRcdGlmIChuYW1lc3BhY2VzLmluY2x1ZGVzKG51bWJlcikpIHtcblx0XHRcdFx0Ly8gTmFtZXNwYWNlcyBhcmUgY29tcGxldGVseSBhZ25vc3RpYyBhcyB0byBjYXNlLFxuXHRcdFx0XHQvLyBhbmQgYSByZWdleCBzdHJpbmcgaXMgbW9yZSB1c2VmdWwvY29tcGF0aWJsZSB0aGFuIGEgUmVnRXhwIG9iamVjdCxcblx0XHRcdFx0Ly8gc28gd2UgYWNjZXB0IGFueSBjYXNpbmcgZm9yIGFueSBsZXR0ZXIuXG5cdFx0XHRcdGFsaWFzZXNbYWxpYXNlcy5sZW5ndGhdID0gWy4uLm5hbWVdXG5cdFx0XHRcdFx0Lm1hcCgoY2hhcikgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIE1vcmViaXRzLnBhZ2VOYW1lUmVnZXgoY2hhcik7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuam9pbignJyk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHN3aXRjaCAoYWxpYXNlcy5sZW5ndGgpIHtcblx0XHRcdGNhc2UgMDpcblx0XHRcdFx0cmVnZXggPSAnJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFtyZWdleF0gPSBhbGlhc2VzO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJlZ2V4ID0gYCg/OiR7YWxpYXNlcy5qb2luKCd8Jyl9KWA7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVnZXg7XG5cdH07XG5cdC8qICoqKioqKioqKioqKioqKiogTW9yZWJpdHMucXVpY2tGb3JtICoqKioqKioqKioqKioqKiogKi9cblx0LyoqXG5cdCAqIENyZWF0aW9uIG9mIHNpbXBsZSBhbmQgc3RhbmRhcmQgZm9ybXMgd2l0aG91dCBtdWNoIHNwZWNpZmljIGNvZGluZy5cblx0ICpcblx0ICogQG5hbWVzcGFjZSBNb3JlYml0cy5xdWlja0Zvcm1cblx0ICogQG1lbWJlcm9mIE1vcmViaXRzXG5cdCAqIEBjbGFzc1xuXHQgKiBAcGFyYW0ge2V2ZW50fSBldmVudCAtIEZ1bmN0aW9uIHRvIGV4ZWN1dGUgd2hlbiBmb3JtIGlzIHN1Ym1pdHRlZC5cblx0ICogQHBhcmFtIHtzdHJpbmd9IFtldmVudFR5cGU9c3VibWl0XSAtIFR5cGUgb2YgdGhlIGV2ZW50LlxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtID0gZnVuY3Rpb24gKGV2ZW50LCBldmVudFR5cGUpIHtcblx0XHR0aGlzLnJvb3QgPSBuZXcgTW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQoe1xuXHRcdFx0dHlwZTogJ2Zvcm0nLFxuXHRcdFx0ZXZlbnQsXG5cdFx0XHRldmVudFR5cGUsXG5cdFx0fSk7XG5cdH07XG5cdC8qKlxuXHQgKiBSZW5kZXJzIHRoZSBIVE1MIG91dHB1dCBvZiB0aGUgcXVpY2tGb3JtLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtXG5cdCAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IHJldCA9IHRoaXMucm9vdC5yZW5kZXIoKTtcblx0XHRyZXQubmFtZXMgPSB7fTtcblx0XHRyZXR1cm4gcmV0O1xuXHR9O1xuXHQvKipcblx0ICogQXBwZW5kIGVsZW1lbnQgdG8gdGhlIGZvcm0uXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5xdWlja0Zvcm1cblx0ICogQHBhcmFtIHsob2JqZWN0fE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50KX0gZGF0YSAtIEEgcXVpY2tmb3JtIGVsZW1lbnQsIG9yIHRoZSBvYmplY3Qgd2l0aCB3aGljaFxuXHQgKiBhIHF1aWNrZm9ybSBlbGVtZW50IGlzIGNvbnN0cnVjdGVkLlxuXHQgKiBAcmV0dXJucyB7TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnR9IC0gU2FtZSBhcyB3aGF0IGlzIHBhc3NlZCB0byB0aGUgZnVuY3Rpb24uXG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0ucHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uIChkYXRhKSB7XG5cdFx0cmV0dXJuIHRoaXMucm9vdC5hcHBlbmQoZGF0YSk7XG5cdH07XG5cdC8qKlxuXHQgKiBDcmVhdGUgYSBuZXcgZWxlbWVudCBmb3IgdGhlIHRoZSBmb3JtLlxuXHQgKlxuXHQgKiBJbmRleCB0byBNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudCB0eXBlczpcblx0ICogLSBHbG9iYWwgYXR0cmlidXRlczogaWQsIGNsYXNzTmFtZSwgc3R5bGUsIHRvb2x0aXAsIGV4dHJhLCAkZGF0YSwgYWRtaW5vbmx5XG5cdCAqIC0gYHNlbGVjdGA6IEEgY29tYm8gYm94IChha2EgZHJvcC1kb3duKS5cblx0ICogICAgIC0gQXR0cmlidXRlczogbmFtZSwgbGFiZWwsIG11bHRpcGxlLCBzaXplLCBsaXN0LCBldmVudCwgZGlzYWJsZWRcblx0ICogIC0gYG9wdGlvbmA6IEFuIGVsZW1lbnQgZm9yIGEgY29tYm8gYm94LlxuXHQgKiAgICAgIC0gQXR0cmlidXRlczogdmFsdWUsIGxhYmVsLCBzZWxlY3RlZCwgZGlzYWJsZWRcblx0ICogIC0gYG9wdGdyb3VwYDogQSBncm91cCBvZiBcIm9wdGlvblwicy5cblx0ICogICAgICAtIEF0dHJpYnV0ZXM6IGxhYmVsLCBsaXN0XG5cdCAqICAtIGBmaWVsZGA6IEEgZmllbGRzZXQgKGFrYSBncm91cCBib3gpLlxuXHQgKiAgICAgIC0gQXR0cmlidXRlczogbmFtZSwgbGFiZWwsIGRpc2FibGVkXG5cdCAqICAtIGBjaGVja2JveGA6IEEgY2hlY2tib3guIE11c3QgdXNlIFwibGlzdFwiIHBhcmFtZXRlci5cblx0ICogICAgICAtIEF0dHJpYnV0ZXM6IG5hbWUsIGxpc3QsIGV2ZW50XG5cdCAqICAgICAgLSBBdHRyaWJ1dGVzICh3aXRoaW4gbGlzdCk6IG5hbWUsIGxhYmVsLCB2YWx1ZSwgY2hlY2tlZCwgZGlzYWJsZWQsIGV2ZW50LCBzdWJncm91cFxuXHQgKiAgLSBgcmFkaW9gOiBBIHJhZGlvIGJ1dHRvbi4gTXVzdCB1c2UgXCJsaXN0XCIgcGFyYW1ldGVyLlxuXHQgKiAgICAgIC0gQXR0cmlidXRlczogbmFtZSwgbGlzdCwgZXZlbnRcblx0ICogICAgICAtIEF0dHJpYnV0ZXMgKHdpdGhpbiBsaXN0KTogbmFtZSwgbGFiZWwsIHZhbHVlLCBjaGVja2VkLCBkaXNhYmxlZCwgZXZlbnQsIHN1Ymdyb3VwXG5cdCAqICAtIGBpbnB1dGA6IEEgdGV4dCBpbnB1dCBib3guXG5cdCAqICAgICAgLSBBdHRyaWJ1dGVzOiBuYW1lLCBsYWJlbCwgdmFsdWUsIHNpemUsIHBsYWNlaG9sZGVyLCBtYXhsZW5ndGgsIGRpc2FibGVkLCByZXF1aXJlZCwgcmVhZG9ubHksIGV2ZW50XG5cdCAqICAtIGBudW1iZXJgOiBBIG51bWJlciBpbnB1dCBib3guXG5cdCAqICAgICAgLSBBdHRyaWJ1dGVzOiBFdmVyeXRoaW5nIHRoZSB0ZXh0IGBpbnB1dGAgaGFzLCBhcyB3ZWxsIGFzOiBtaW4sIG1heCwgc3RlcCwgbGlzdFxuXHQgKiAgLSBgZHluaW5wdXRgOiBBIHNldCBvZiB0ZXh0IGJveGVzIHdpdGggXCJSZW1vdmVcIiBidXR0b25zIGFuZCBhbiBcIkFkZFwiIGJ1dHRvbi5cblx0ICogICAgICAtIEF0dHJpYnV0ZXM6IG5hbWUsIGxhYmVsLCBtaW4sIG1heCwgc3VibGFiZWwsIHZhbHVlLCBzaXplLCBtYXhsZW5ndGgsIGV2ZW50XG5cdCAqICAtIGBoaWRkZW5gOiBBbiBpbnZpc2libGUgZm9ybSBmaWVsZC5cblx0ICogICAgICAtIEF0dHJpYnV0ZXM6IG5hbWUsIHZhbHVlXG5cdCAqICAtIGBoZWFkZXJgOiBBIGxldmVsIDUgaGVhZGVyLlxuXHQgKiAgICAgIC0gQXR0cmlidXRlczogbGFiZWxcblx0ICogIC0gYGRpdmA6IEEgZ2VuZXJpYyBwbGFjZWhvbGRlciBlbGVtZW50IG9yIGxhYmVsLlxuXHQgKiAgICAgIC0gQXR0cmlidXRlczogbmFtZSwgbGFiZWxcblx0ICogIC0gYHN1Ym1pdGA6IEEgc3VibWl0IGJ1dHRvbi4gTW9yZWJpdHMuc2ltcGxlV2luZG93IG1vdmVzIHRoZXNlIHRvIHRoZSBmb290ZXIgb2YgdGhlIGRpYWxvZy5cblx0ICogICAgICAtIEF0dHJpYnV0ZXM6IG5hbWUsIGxhYmVsLCBkaXNhYmxlZFxuXHQgKiAgLSBgYnV0dG9uYDogQSBnZW5lcmljIGJ1dHRvbi5cblx0ICogICAgICAtIEF0dHJpYnV0ZXM6IG5hbWUsIGxhYmVsLCBkaXNhYmxlZCwgZXZlbnRcblx0ICogIC0gYHRleHRhcmVhYDogQSBiaWcsIG11bHRpLWxpbmUgdGV4dCBib3guXG5cdCAqICAgICAgLSBBdHRyaWJ1dGVzOiBuYW1lLCBsYWJlbCwgdmFsdWUsIGNvbHMsIHJvd3MsIGRpc2FibGVkLCByZXF1aXJlZCwgcmVhZG9ubHlcblx0ICogIC0gYGZyYWdtZW50YDogQSBEb2N1bWVudEZyYWdtZW50IG9iamVjdC5cblx0ICogICAgICAtIE5vIGF0dHJpYnV0ZXMsIGFuZCBubyBnbG9iYWwgYXR0cmlidXRlcyBleGNlcHQgYWRtaW5vbmx5LlxuXHQgKiBUaGVyZSBpcyBzb21lIGRpZmZlcmVuY2Ugb24gaG93IHR5cGVzIGhhbmRsZSB0aGUgYGxhYmVsYCBhdHRyaWJ1dGU6XG5cdCAqIC0gYGRpdmAsIGBzZWxlY3RgLCBgZmllbGRgLCBgY2hlY2tib3hgL2ByYWRpb2AsIGBpbnB1dGAsIGB0ZXh0YXJlYWAsIGBoZWFkZXJgLCBhbmQgYGR5bmlucHV0YCBjYW4gYWNjZXB0IGFuIGFycmF5IG9mIGl0ZW1zLFxuXHQgKiBhbmQgdGhlIGxhYmVsIGl0ZW0ocykgY2FuIGJlIGBFbGVtZW50YHMuXG5cdCAqIC0gYG9wdGlvbmAsIGBvcHRncm91cGAsIGBfZHluaW5wdXRfZWxlbWVudGAsIGBzdWJtaXRgLCBhbmQgYGJ1dHRvbmAgYWNjZXB0IG9ubHkgYSBzaW5nbGUgc3RyaW5nLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtXG5cdCAqIEBjbGFzc1xuXHQgKiBAcGFyYW0ge09iamVjdH0gZGF0YSAtIE9iamVjdCByZXByZXNlbnRpbmcgdGhlIHF1aWNrZm9ybSBlbGVtZW50LiBTaG91bGRcblx0ICogc3BlY2lmeSBvbmUgb2YgdGhlIGF2YWlsYWJsZSB0eXBlcyBmcm9tIHRoZSBpbmRleCBhYm92ZSwgYXMgd2VsbCBhcyBhbnlcblx0ICogcmVsZXZhbnQgYW5kIGF2YWlsYWJsZSBhdHRyaWJ1dGVzLlxuXHQgKiBAZXhhbXBsZSBuZXcgTW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQoe1xuXHQgKiAgICAgbmFtZTogJ3RhcmdldCcsXG5cdCAqICAgICB0eXBlOiAnaW5wdXQnLFxuXHQgKiAgICAgbGFiZWw6ICdZb3VyIHRhcmdldDonLFxuXHQgKiAgICAgdG9vbHRpcDogJ0VudGVyIHlvdXIgdGFyZ2V0LiBSZXF1aXJlZC4nLFxuXHQgKiAgICAgcmVxdWlyZWQ6IHRydWVcblx0ICogfSk7XG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudCA9IGZ1bmN0aW9uIChkYXRhKSB7XG5cdFx0dGhpcy5kYXRhID0gZGF0YTtcblx0XHR0aGlzLmNoaWxkcyA9IFtdO1xuXHR9O1xuXHQvKipcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50XG5cdCAqIEB0eXBlIHtudW1iZXJ9XG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudC5pZCA9IDA7XG5cdC8qKlxuXHQgKiBBcHBlbmRzIGFuIGVsZW1lbnQgdG8gY3VycmVudCBlbGVtZW50LlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnRcblx0ICogQHBhcmFtIHtNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudH0gZGF0YSAtIEEgcXVpY2tGb3JtIGVsZW1lbnQgb3IgdGhlIG9iamVjdCByZXF1aXJlZCB0b1xuXHQgKiBjcmVhdGUgdGhlIHF1aWNrRm9ybSBlbGVtZW50LlxuXHQgKiBAcmV0dXJucyB7TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnR9IFRoZSBzYW1lIGVsZW1lbnQgcGFzc2VkIGluLlxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQucHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uIChkYXRhKSB7XG5cdFx0bGV0IGNoaWxkO1xuXHRcdGlmIChkYXRhIGluc3RhbmNlb2YgTW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQpIHtcblx0XHRcdGNoaWxkID0gZGF0YTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2hpbGQgPSBuZXcgTW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQoZGF0YSk7XG5cdFx0fVxuXHRcdHRoaXMuY2hpbGRzW3RoaXMuY2hpbGRzLmxlbmd0aF0gPSBjaGlsZDtcblx0XHRyZXR1cm4gY2hpbGQ7XG5cdH07XG5cdC8qKlxuXHQgKiBSZW5kZXJzIHRoZSBIVE1MIG91dHB1dCBmb3IgdGhlIHF1aWNrRm9ybSBlbGVtZW50LiAgVGhpcyBzaG91bGQgYmUgY2FsbGVkXG5cdCAqIHdpdGhvdXQgcGFyYW1ldGVyczogYGZvcm0ucmVuZGVyKClgLlxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gaW50ZXJuYWxTdWJncm91cElkXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudFxuXHQgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKGludGVybmFsU3ViZ3JvdXBJZCkge1xuXHRcdGNvbnN0IGN1cnJlbnROb2RlID0gdGhpcy5jb21wdXRlKHRoaXMuZGF0YSwgaW50ZXJuYWxTdWJncm91cElkKTtcblx0XHRmb3IgKGNvbnN0IGNoaWxkIG9mIHRoaXMuY2hpbGRzKSB7XG5cdFx0XHQvLyBkbyBub3QgcGFzcyBpbnRlcm5hbF9zdWJncm91cF9pZCB0byByZWN1cnNpdmUgY2FsbHNcblx0XHRcdGN1cnJlbnROb2RlWzFdLmFwcGVuZENoaWxkKGNoaWxkLnJlbmRlcigpKTtcblx0XHR9XG5cdFx0cmV0dXJuIGN1cnJlbnROb2RlWzBdO1xuXHR9O1xuXHQvKipcblx0ICogQHBhcmFtIHsqfSBkYXRhXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBpbklkXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudFxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQucHJvdG90eXBlLmNvbXB1dGUgPSBmdW5jdGlvbiAoZGF0YSwgaW5JZCkge1xuXHRcdGxldCBub2RlO1xuXHRcdGxldCBjaGlsZENvbnRhaW5lciA9IG51bGw7XG5cdFx0bGV0IGxhYmVsO1xuXHRcdGNvbnN0IGlkID0gYCR7aW5JZCA/IGAke2luSWR9X2AgOiAnJ31ub2RlXyR7TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQuaWQrK31gO1xuXHRcdGlmIChkYXRhLmFkbWlub25seSAmJiAhTW9yZWJpdHMudXNlcklzU3lzb3ApIHtcblx0XHRcdC8vIGhlbGwgaGFjayBhbHBoYVxuXHRcdFx0ZGF0YS50eXBlID0gJ2hpZGRlbic7XG5cdFx0fVxuXHRcdGxldCBpO1xuXHRcdGxldCBjdXJyZW50O1xuXHRcdGxldCBzdWJub2RlO1xuXHRcdHN3aXRjaCAoZGF0YS50eXBlKSB7XG5cdFx0XHRjYXNlICdmb3JtJzpcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcblx0XHRcdFx0bm9kZS5jbGFzc05hbWUgPSAncXVpY2tmb3JtJztcblx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNjcmlwdC11cmxcblx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ2FjdGlvbicsICdqYXZhc2NyaXB0OnZvaWQoMCk7Jyk7XG5cdFx0XHRcdGlmIChkYXRhLmV2ZW50KSB7XG5cdFx0XHRcdFx0bm9kZS5hZGRFdmVudExpc3RlbmVyKGRhdGEuZXZlbnRUeXBlIHx8ICdzdWJtaXQnLCBkYXRhLmV2ZW50LCBmYWxzZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdmcmFnbWVudCc6XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cdFx0XHRcdC8vIGZyYWdtZW50cyBjYW4ndCBoYXZlIGFueSBhdHRyaWJ1dGVzLCBzbyBqdXN0IHJldHVybiBpdCBzdHJhaWdodCBhd2F5XG5cdFx0XHRcdHJldHVybiBbbm9kZSwgbm9kZV07XG5cdFx0XHRjYXNlICdzZWxlY3QnOiB7XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ2lkJywgYGRpdl8ke2lkfWApO1xuXHRcdFx0XHRpZiAoZGF0YS5sYWJlbCkge1xuXHRcdFx0XHRcdGxhYmVsID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpKTtcblx0XHRcdFx0XHRsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGlkKTtcblx0XHRcdFx0XHRsYWJlbC5hcHBlbmRDaGlsZChNb3JlYml0cy5jcmVhdGVIdG1sKGRhdGEubGFiZWwpKTtcblx0XHRcdFx0XHQvLyBObyBtYXJnaW5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNvbnN0IHNlbGVjdCA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JykpO1xuXHRcdFx0XHRpZiAoZGF0YS5ldmVudCkge1xuXHRcdFx0XHRcdHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBkYXRhLmV2ZW50LCBmYWxzZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEubXVsdGlwbGUpIHtcblx0XHRcdFx0XHRzZWxlY3Quc2V0QXR0cmlidXRlKCdtdWx0aXBsZScsICdtdWx0aXBsZScpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLnNpemUpIHtcblx0XHRcdFx0XHRzZWxlY3Quc2V0QXR0cmlidXRlKCdzaXplJywgZGF0YS5zaXplKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5kaXNhYmxlZCkge1xuXHRcdFx0XHRcdHNlbGVjdC5kaXNhYmxlZCA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0c2VsZWN0LnNldEF0dHJpYnV0ZSgnbmFtZScsIGRhdGEubmFtZSk7XG5cdFx0XHRcdGlmIChkYXRhLmxpc3QpIHtcblx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgZGF0YS5saXN0Lmxlbmd0aDsgKytpKSB7XG5cdFx0XHRcdFx0XHRjdXJyZW50ID0gZGF0YS5saXN0W2ldO1xuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnQubGlzdCkge1xuXHRcdFx0XHRcdFx0XHRjdXJyZW50LnR5cGUgPSAnb3B0Z3JvdXAnO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Y3VycmVudC50eXBlID0gJ29wdGlvbic7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRzdWJub2RlID0gdGhpcy5jb21wdXRlKGN1cnJlbnQpO1xuXHRcdFx0XHRcdFx0c2VsZWN0LmFwcGVuZENoaWxkKHN1Ym5vZGVbMF0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRjaGlsZENvbnRhaW5lciA9IHNlbGVjdDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRjYXNlICdvcHRpb24nOlxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5cdFx0XHRcdG5vZGUudmFsdWVzID0gZGF0YS52YWx1ZTtcblx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgZGF0YS52YWx1ZSk7XG5cdFx0XHRcdGlmIChkYXRhLnNlbGVjdGVkKSB7XG5cdFx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJ3NlbGVjdGVkJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEuZGlzYWJsZWQpIHtcblx0XHRcdFx0XHRub2RlLmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBBZGQgaGlkZGVuIGF0dHJcblx0XHRcdFx0aWYgKGRhdGEuaGlkZGVuKSB7XG5cdFx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICcnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgnbGFiZWwnLCBkYXRhLmxhYmVsKTtcblx0XHRcdFx0bm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShkYXRhLmxhYmVsKSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnb3B0Z3JvdXAnOlxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0Z3JvdXAnKTtcblx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ2xhYmVsJywgZGF0YS5sYWJlbCk7XG5cdFx0XHRcdGlmIChkYXRhLmxpc3QpIHtcblx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgZGF0YS5saXN0Lmxlbmd0aDsgKytpKSB7XG5cdFx0XHRcdFx0XHRjdXJyZW50ID0gZGF0YS5saXN0W2ldO1xuXHRcdFx0XHRcdFx0Y3VycmVudC50eXBlID0gJ29wdGlvbic7IC8vIG11c3QgYmUgb3B0aW9ucyBoZXJlXG5cdFx0XHRcdFx0XHRzdWJub2RlID0gdGhpcy5jb21wdXRlKGN1cnJlbnQpO1xuXHRcdFx0XHRcdFx0bm9kZS5hcHBlbmRDaGlsZChzdWJub2RlWzBdKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdmaWVsZCc6XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpO1xuXHRcdFx0XHRsYWJlbCA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGVnZW5kJykpO1xuXHRcdFx0XHRsYWJlbC5hcHBlbmRDaGlsZChNb3JlYml0cy5jcmVhdGVIdG1sKGRhdGEubGFiZWwpKTtcblx0XHRcdFx0aWYgKGRhdGEubmFtZSkge1xuXHRcdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCduYW1lJywgZGF0YS5uYW1lKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5kaXNhYmxlZCkge1xuXHRcdFx0XHRcdG5vZGUuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnY2hlY2tib3gnOlxuXHRcdFx0Y2FzZSAncmFkaW8nOlxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdGlmIChkYXRhLmxpc3QpIHtcblx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgZGF0YS5saXN0Lmxlbmd0aDsgKytpKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBjdXJJZCA9IGAke2lkfV8ke2l9YDtcblx0XHRcdFx0XHRcdGN1cnJlbnQgPSBkYXRhLmxpc3RbaV07XG5cdFx0XHRcdFx0XHRsZXQgY3VyRGl2O1xuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnQudHlwZSA9PT0gJ2hlYWRlcicpIHtcblx0XHRcdFx0XHRcdFx0Ly8gaW5saW5lIGhhY2tcblx0XHRcdFx0XHRcdFx0Y3VyRGl2ID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNicpKTtcblx0XHRcdFx0XHRcdFx0Y3VyRGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGN1cnJlbnQubGFiZWwpKTtcblx0XHRcdFx0XHRcdFx0aWYgKGN1cnJlbnQudG9vbHRpcCkge1xuXHRcdFx0XHRcdFx0XHRcdE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50LmdlbmVyYXRlVG9vbHRpcChjdXJEaXYsIGN1cnJlbnQpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Y3VyRGl2ID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG5cdFx0XHRcdFx0XHQvLyBBZGQgaGlkZGVuIGF0dHJcblx0XHRcdFx0XHRcdGlmIChjdXJyZW50LmhpZGRlbikge1xuXHRcdFx0XHRcdFx0XHRjdXJEaXYuc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnJyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRzdWJub2RlID0gY3VyRGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpO1xuXHRcdFx0XHRcdFx0c3Vibm9kZS52YWx1ZXMgPSBjdXJyZW50LnZhbHVlO1xuXHRcdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgY3VycmVudC52YWx1ZSk7XG5cdFx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgndHlwZScsIGRhdGEudHlwZSk7XG5cdFx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgnaWQnLCBjdXJJZCk7XG5cdFx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgnbmFtZScsIGN1cnJlbnQubmFtZSB8fCBkYXRhLm5hbWUpO1xuXHRcdFx0XHRcdFx0Ly8gSWYgbmFtZSBpcyBwcm92aWRlZCBvbiB0aGUgaW5kaXZpZHVhbCBjaGVja2JveCwgYWRkIGEgZGF0YS1zaW5nbGVcblx0XHRcdFx0XHRcdC8vIGF0dHJpYnV0ZSB3aGljaCBpbmRpY2F0ZXMgaXQgaXNuJ3QgcGFydCBvZiBhIGxpc3Qgb2YgY2hlY2tib3hlcyB3aXRoXG5cdFx0XHRcdFx0XHQvLyBzYW1lIG5hbWUuIFVzZWQgaW4gZ2V0SW5wdXREYXRhKClcblx0XHRcdFx0XHRcdGlmIChjdXJyZW50Lm5hbWUpIHtcblx0XHRcdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2luZ2xlJywgJ2RhdGEtc2luZ2xlJyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAoY3VycmVudC5jaGVja2VkKSB7XG5cdFx0XHRcdFx0XHRcdHN1Ym5vZGUuY2hlY2tlZCA9IHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAoY3VycmVudC5kaXNhYmxlZCkge1xuXHRcdFx0XHRcdFx0XHRzdWJub2RlLmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGxhYmVsID0gY3VyRGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJykpO1xuXHRcdFx0XHRcdFx0bGFiZWwuYXBwZW5kQ2hpbGQoTW9yZWJpdHMuY3JlYXRlSHRtbChjdXJyZW50LmxhYmVsKSk7XG5cdFx0XHRcdFx0XHRsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGN1cklkKTtcblx0XHRcdFx0XHRcdGlmIChjdXJyZW50LnRvb2x0aXApIHtcblx0XHRcdFx0XHRcdFx0TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQuZ2VuZXJhdGVUb29sdGlwKGxhYmVsLCBjdXJyZW50KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC8vIHN0eWxlcyBnbyBvbiB0aGUgbGFiZWwsIGRvZXNuJ3QgbWFrZSBzZW5zZSB0byBzdHlsZSBhIGNoZWNrYm94L3JhZGlvXG5cdFx0XHRcdFx0XHRpZiAoY3VycmVudC5zdHlsZSkge1xuXHRcdFx0XHRcdFx0XHRsYWJlbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgY3VycmVudC5zdHlsZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRsZXQgZXZlbnQ7XG5cdFx0XHRcdFx0XHRpZiAoY3VycmVudC5zdWJncm91cCkge1xuXHRcdFx0XHRcdFx0XHRsZXQgdG1wZ3JvdXAgPSBjdXJyZW50LnN1Ymdyb3VwO1xuXHRcdFx0XHRcdFx0XHR0bXBncm91cCA9IGdlbmVyYXRlQXJyYXkodG1wZ3JvdXApO1xuXHRcdFx0XHRcdFx0XHRjb25zdCBzdWJncm91cFJhdyA9IG5ldyBNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudCh7XG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJ2RpdicsXG5cdFx0XHRcdFx0XHRcdFx0aWQ6IGAke2lkfV8ke2l9X3N1Ymdyb3VwYCxcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdGZvciAoY29uc3QgZWwgb2YgdG1wZ3JvdXApIHtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCBuZXdFbCA9IHtcblx0XHRcdFx0XHRcdFx0XHRcdC4uLmVsLFxuXHRcdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdFx0bmV3RWwudHlwZSB8fD0gZGF0YS50eXBlO1xuXHRcdFx0XHRcdFx0XHRcdG5ld0VsLm5hbWUgPSBgJHtjdXJyZW50Lm5hbWUgfHwgZGF0YS5uYW1lfS4ke25ld0VsLm5hbWV9YDtcblx0XHRcdFx0XHRcdFx0XHRzdWJncm91cFJhdy5hcHBlbmQobmV3RWwpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHN1Ymdyb3VwID0gc3ViZ3JvdXBSYXcucmVuZGVyKGN1cklkKTtcblx0XHRcdFx0XHRcdFx0c3ViZ3JvdXAuY2xhc3NOYW1lID0gJ3F1aWNrZm9ybVN1Ymdyb3VwJztcblx0XHRcdFx0XHRcdFx0c3Vibm9kZS5zdWJncm91cCA9IHN1Ymdyb3VwO1xuXHRcdFx0XHRcdFx0XHRzdWJub2RlLnNob3duID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdGV2ZW50ID0gKGUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0ZS50YXJnZXQucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChlLnRhcmdldC5zdWJncm91cCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoZS50YXJnZXQudHlwZSA9PT0gJ3JhZGlvJykge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCB7bmFtZX0gPSBlLnRhcmdldDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKGUudGFyZ2V0LmZvcm0ubmFtZXNbbmFtZV0gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGUudGFyZ2V0LmZvcm0ubmFtZXNbbmFtZV0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGUudGFyZ2V0LmZvcm0ubmFtZXNbbmFtZV0uc3ViZ3JvdXBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGUudGFyZ2V0LmZvcm0ubmFtZXNbbmFtZV0gPSBlLnRhcmdldDtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0ZS50YXJnZXQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlLnRhcmdldC5zdWJncm91cCk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0XHRzdWJub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2ZW50LCB0cnVlKTtcblx0XHRcdFx0XHRcdFx0aWYgKGN1cnJlbnQuY2hlY2tlZCkge1xuXHRcdFx0XHRcdFx0XHRcdHN1Ym5vZGUucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChzdWJncm91cCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoZGF0YS50eXBlID09PSAncmFkaW8nKSB7XG5cdFx0XHRcdFx0XHRcdGV2ZW50ID0gKGUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qge25hbWV9ID0gZS50YXJnZXQ7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoZS50YXJnZXQuZm9ybS5uYW1lc1tuYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGUudGFyZ2V0LmZvcm0ubmFtZXNbbmFtZV0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlLnRhcmdldC5mb3JtLm5hbWVzW25hbWVdLnN1Ymdyb3VwXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRkZWxldGUgZS50YXJnZXQuZm9ybS5uYW1lc1tuYW1lXTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdHN1Ym5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZlbnQsIHRydWUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Ly8gYWRkIHVzZXJzJyBldmVudCBsYXN0LCBzbyBpdCBjYW4gaW50ZXJhY3Qgd2l0aCB0aGUgc3ViZ3JvdXBcblx0XHRcdFx0XHRcdGlmIChkYXRhLmV2ZW50KSB7XG5cdFx0XHRcdFx0XHRcdHN1Ym5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZGF0YS5ldmVudCwgZmFsc2UpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChjdXJyZW50LmV2ZW50KSB7XG5cdFx0XHRcdFx0XHRcdHN1Ym5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgY3VycmVudC5ldmVudCwgdHJ1ZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLnNoaWZ0Q2xpY2tTdXBwb3J0ICYmIGRhdGEudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuXHRcdFx0XHRcdE1vcmViaXRzLmNoZWNrYm94U2hpZnRDbGlja1N1cHBvcnQoTW9yZWJpdHMucXVpY2tGb3JtLmdldEVsZW1lbnRzKG5vZGUsIGRhdGEubmFtZSkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Ly8gaW5wdXQgaXMgYWN0dWFsbHkgYSB0ZXh0LXR5cGUsIHNvIG51bWJlciBoZXJlIGluaGVyaXRzIHRoZSBzYW1lIHN0dWZmXG5cdFx0XHRjYXNlICdudW1iZXInOlxuXHRcdFx0Y2FzZSAnaW5wdXQnOlxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCdpZCcsIGBkaXZfJHtpZH1gKTtcblx0XHRcdFx0Ly8gQWRkIGhpZGRlbiBhdHRyXG5cdFx0XHRcdGlmIChkYXRhLmhpZGRlbikge1xuXHRcdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEubGFiZWwpIHtcblx0XHRcdFx0XHRsYWJlbCA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKSk7XG5cdFx0XHRcdFx0bGFiZWwuYXBwZW5kQ2hpbGQoTW9yZWJpdHMuY3JlYXRlSHRtbChkYXRhLmxhYmVsKSk7XG5cdFx0XHRcdFx0bGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBkYXRhLmlkIHx8IGlkKTtcblx0XHRcdFx0XHQvLyBObyBtYXJnaW5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHN1Ym5vZGUgPSBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpO1xuXHRcdFx0XHQvLyBBZGQgdmFsdWUgYW5kIHBsYWNlaG9sZGVyIGF0dHJzXG5cdFx0XHRcdGlmIChkYXRhLnZhbHVlKSB7XG5cdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgZGF0YS52YWx1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEucGxhY2Vob2xkZXIpIHtcblx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCBkYXRhLnBsYWNlaG9sZGVyKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgnbmFtZScsIGRhdGEubmFtZSk7XG5cdFx0XHRcdGlmIChkYXRhLnR5cGUgPT09ICdpbnB1dCcpIHtcblx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnbnVtYmVyJyk7XG5cdFx0XHRcdFx0Zm9yIChjb25zdCBhdHQgb2YgWydtaW4nLCAnbWF4JywgJ3N0ZXAnLCAnbGlzdCddKSB7XG5cdFx0XHRcdFx0XHRpZiAoZGF0YVthdHRdKSB7XG5cdFx0XHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKGF0dCwgZGF0YVthdHRdKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0Zm9yIChjb25zdCBhdHQgb2YgWyd2YWx1ZScsICdzaXplJywgJ3BsYWNlaG9sZGVyJywgJ21heGxlbmd0aCddKSB7XG5cdFx0XHRcdFx0aWYgKGRhdGFbYXR0XSkge1xuXHRcdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoYXR0LCBkYXRhW2F0dF0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRmb3IgKGNvbnN0IGF0dCBvZiBbJ2Rpc2FibGVkJywgJ3JlcXVpcmVkJywgJ3JlYWRvbmx5J10pIHtcblx0XHRcdFx0XHRpZiAoZGF0YVthdHRdKSB7XG5cdFx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZShhdHQsIGF0dCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLmV2ZW50KSB7XG5cdFx0XHRcdFx0c3Vibm9kZS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGRhdGEuZXZlbnQsIGZhbHNlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjaGlsZENvbnRhaW5lciA9IHN1Ym5vZGU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnZHluaW5wdXQnOiB7XG5cdFx0XHRcdGNvbnN0IG1pbiA9IGRhdGEubWluIHx8IDE7XG5cdFx0XHRcdGNvbnN0IG1heCA9IGRhdGEubWF4IHx8IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0XHRsYWJlbCA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKSk7XG5cdFx0XHRcdGxhYmVsLmFwcGVuZENoaWxkKE1vcmViaXRzLmNyZWF0ZUh0bWwoZGF0YS5sYWJlbCkpO1xuXHRcdFx0XHRjb25zdCBsaXN0Tm9kZSA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuXHRcdFx0XHRjb25zdCBtb3JlID0gdGhpcy5jb21wdXRlKHtcblx0XHRcdFx0XHR0eXBlOiAnYnV0dG9uJyxcblx0XHRcdFx0XHRsYWJlbDogJ+abtOWkmicsXG5cdFx0XHRcdFx0ZGlzYWJsZWQ6IG1pbiA+PSBtYXgsXG5cdFx0XHRcdFx0ZXZlbnQ6IChlKSA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCBuZXdOb2RlID0gbmV3IE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50KGUudGFyZ2V0LnN1Ymxpc3QpO1xuXHRcdFx0XHRcdFx0ZS50YXJnZXQuYXJlYS5hcHBlbmRDaGlsZChuZXdOb2RlLnJlbmRlcigpKTtcblx0XHRcdFx0XHRcdGlmICgrK2UudGFyZ2V0LmNvdW50ZXIgPj0gZS50YXJnZXQubWF4KSB7XG5cdFx0XHRcdFx0XHRcdGUudGFyZ2V0LmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdG5vZGUuYXBwZW5kQ2hpbGQobW9yZVswXSk7XG5cdFx0XHRcdGNvbnN0IFssIG1vcmVCdXR0b25dID0gbW9yZTtcblx0XHRcdFx0Y29uc3Qgc3VibGlzdCA9IHtcblx0XHRcdFx0XHR0eXBlOiAnX2R5bmlucHV0X2VsZW1lbnQnLFxuXHRcdFx0XHRcdGxhYmVsOiBkYXRhLnN1YmxhYmVsIHx8IGRhdGEubGFiZWwsXG5cdFx0XHRcdFx0bmFtZTogZGF0YS5uYW1lLFxuXHRcdFx0XHRcdHZhbHVlOiBkYXRhLnZhbHVlLFxuXHRcdFx0XHRcdHNpemU6IGRhdGEuc2l6ZSxcblx0XHRcdFx0XHRyZW1vdmU6IGZhbHNlLFxuXHRcdFx0XHRcdG1heGxlbmd0aDogZGF0YS5tYXhsZW5ndGgsXG5cdFx0XHRcdFx0ZXZlbnQ6IGRhdGEuZXZlbnQsXG5cdFx0XHRcdH07XG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBtaW47ICsraSkge1xuXHRcdFx0XHRcdGNvbnN0IGVsZW0gPSBuZXcgTW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQoc3VibGlzdCk7XG5cdFx0XHRcdFx0bGlzdE5vZGUuYXBwZW5kQ2hpbGQoZWxlbS5yZW5kZXIoKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3VibGlzdC5yZW1vdmUgPSB0cnVlO1xuXHRcdFx0XHRzdWJsaXN0Lm1vcmVidXR0b24gPSBtb3JlQnV0dG9uO1xuXHRcdFx0XHRzdWJsaXN0Lmxpc3Rub2RlID0gbGlzdE5vZGU7XG5cdFx0XHRcdG1vcmVCdXR0b24uc3VibGlzdCA9IHN1Ymxpc3Q7XG5cdFx0XHRcdG1vcmVCdXR0b24uYXJlYSA9IGxpc3ROb2RlO1xuXHRcdFx0XHRtb3JlQnV0dG9uLm1heCA9IG1heCAtIG1pbjtcblx0XHRcdFx0bW9yZUJ1dHRvbi5jb3VudGVyID0gMDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRjYXNlICdfZHluaW5wdXRfZWxlbWVudCc6XG5cdFx0XHRcdC8vIFByaXZhdGUsIHNpbWlsYXIgdG8gbm9ybWFsIGlucHV0XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdFx0aWYgKGRhdGEubGFiZWwpIHtcblx0XHRcdFx0XHRsYWJlbCA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKSk7XG5cdFx0XHRcdFx0bGFiZWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZGF0YS5sYWJlbCkpO1xuXHRcdFx0XHRcdGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgaWQpO1xuXHRcdFx0XHRcdC8vIE5vIG1hcmdpblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0c3Vibm9kZSA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSk7XG5cdFx0XHRcdGlmIChkYXRhLnZhbHVlKSB7XG5cdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgZGF0YS52YWx1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBkYXRhLm5hbWUpO1xuXHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG5cdFx0XHRcdGlmIChkYXRhLnNpemUpIHtcblx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgnc2l6ZScsIGRhdGEuc2l6ZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEubWF4bGVuZ3RoKSB7XG5cdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ21heGxlbmd0aCcsIGRhdGEubWF4bGVuZ3RoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5ldmVudCkge1xuXHRcdFx0XHRcdHN1Ym5vZGUuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBkYXRhLmV2ZW50LCBmYWxzZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEucmVtb3ZlKSB7XG5cdFx0XHRcdFx0Y29uc3QgcmVtb3ZlID0gdGhpcy5jb21wdXRlKHtcblx0XHRcdFx0XHRcdHR5cGU6ICdidXR0b24nLFxuXHRcdFx0XHRcdFx0bGFiZWw6ICfnp7vpmaQnLFxuXHRcdFx0XHRcdFx0ZXZlbnQ6IChlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IGxpc3QgPSBlLnRhcmdldC5saXN0bm9kZTtcblx0XHRcdFx0XHRcdFx0Y29uc3Qgbm9kZV8gPSBlLnRhcmdldC5pbnB1dG5vZGU7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IG1vcmUgPSBlLnRhcmdldC5tb3JlYnV0dG9uO1xuXHRcdFx0XHRcdFx0XHRsaXN0LnJlbW92ZUNoaWxkKG5vZGVfKTtcblx0XHRcdFx0XHRcdFx0LS1tb3JlLmNvdW50ZXI7XG5cdFx0XHRcdFx0XHRcdG1vcmUucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuXHRcdFx0XHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRub2RlLmFwcGVuZENoaWxkKHJlbW92ZVswXSk7XG5cdFx0XHRcdFx0Y29uc3QgWywgcmVtb3ZlQnV0dG9uXSA9IHJlbW92ZTtcblx0XHRcdFx0XHRyZW1vdmVCdXR0b24uaW5wdXRub2RlID0gbm9kZTtcblx0XHRcdFx0XHRyZW1vdmVCdXR0b24ubGlzdG5vZGUgPSBkYXRhLmxpc3Rub2RlO1xuXHRcdFx0XHRcdHJlbW92ZUJ1dHRvbi5tb3JlYnV0dG9uID0gZGF0YS5tb3JlYnV0dG9uO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnaGlkZGVuJzpcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2hpZGRlbicpO1xuXHRcdFx0XHRub2RlLnZhbHVlcyA9IGRhdGEudmFsdWU7XG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGRhdGEudmFsdWUpO1xuXHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgnbmFtZScsIGRhdGEubmFtZSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnaGVhZGVyJzpcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG5cdFx0XHRcdG5vZGUuYXBwZW5kQ2hpbGQoTW9yZWJpdHMuY3JlYXRlSHRtbChkYXRhLmxhYmVsKSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnZGl2Jzpcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0XHRpZiAoZGF0YS5uYW1lKSB7XG5cdFx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBkYXRhLm5hbWUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLmxhYmVsKSB7XG5cdFx0XHRcdFx0Y29uc3QgcmVzdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdFx0XHRcdHJlc3VsdC5jbGFzc05hbWUgPSAncXVpY2tmb3JtRGVzY3JpcHRpb24nO1xuXHRcdFx0XHRcdHJlc3VsdC5hcHBlbmRDaGlsZChNb3JlYml0cy5jcmVhdGVIdG1sKGRhdGEubGFiZWwpKTtcblx0XHRcdFx0XHRub2RlLmFwcGVuZENoaWxkKHJlc3VsdCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdzdWJtaXQnOlxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdFx0XHRjaGlsZENvbnRhaW5lciA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSk7XG5cdFx0XHRcdGNoaWxkQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcblx0XHRcdFx0aWYgKGRhdGEubGFiZWwpIHtcblx0XHRcdFx0XHRjaGlsZENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgZGF0YS5sYWJlbCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2hpbGRDb250YWluZXIuc2V0QXR0cmlidXRlKCduYW1lJywgZGF0YS5uYW1lIHx8ICdzdWJtaXQnKTtcblx0XHRcdFx0aWYgKGRhdGEuZGlzYWJsZWQpIHtcblx0XHRcdFx0XHRjaGlsZENvbnRhaW5lci5kaXNhYmxlZCA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdidXR0b24nOlxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdFx0XHRjaGlsZENvbnRhaW5lciA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSk7XG5cdFx0XHRcdGNoaWxkQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcblx0XHRcdFx0aWYgKGRhdGEubGFiZWwpIHtcblx0XHRcdFx0XHRjaGlsZENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgZGF0YS5sYWJlbCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2hpbGRDb250YWluZXIuc2V0QXR0cmlidXRlKCduYW1lJywgZGF0YS5uYW1lKTtcblx0XHRcdFx0aWYgKGRhdGEuZGlzYWJsZWQpIHtcblx0XHRcdFx0XHRjaGlsZENvbnRhaW5lci5kaXNhYmxlZCA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEuZXZlbnQpIHtcblx0XHRcdFx0XHRjaGlsZENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRhdGEuZXZlbnQsIGZhbHNlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3RleHRhcmVhJzpcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgnaWQnLCBgZGl2XyR7aWR9YCk7XG5cdFx0XHRcdC8vIEFkZCBoaWRkZW4gYXR0clxuXHRcdFx0XHRpZiAoZGF0YS5oaWRkZW4pIHtcblx0XHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgJycpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLmxhYmVsKSB7XG5cdFx0XHRcdFx0bGFiZWwgPSBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1JykpO1xuXHRcdFx0XHRcdGNvbnN0IGxhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5cdFx0XHRcdFx0bGFiZWxFbGVtZW50LmFwcGVuZENoaWxkKE1vcmViaXRzLmNyZWF0ZUh0bWwoZGF0YS5sYWJlbCkpO1xuXHRcdFx0XHRcdGxhYmVsRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGRhdGEuaWQgfHwgaWQpO1xuXHRcdFx0XHRcdGxhYmVsLmFwcGVuZENoaWxkKGxhYmVsRWxlbWVudCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3Vibm9kZSA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKSk7XG5cdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCduYW1lJywgZGF0YS5uYW1lKTtcblx0XHRcdFx0aWYgKGRhdGEuY29scykge1xuXHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCdjb2xzJywgZGF0YS5jb2xzKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5yb3dzKSB7XG5cdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCBkYXRhLnJvd3MpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLmRpc2FibGVkKSB7XG5cdFx0XHRcdFx0c3Vibm9kZS5kaXNhYmxlZCA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEucmVxdWlyZWQpIHtcblx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAncmVxdWlyZWQnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5yZWFkb25seSkge1xuXHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCdyZWFkb25seScsICdyZWFkb25seScpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLnZhbHVlKSB7XG5cdFx0XHRcdFx0c3Vibm9kZS52YWx1ZSA9IGRhdGEudmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gQWRkIHBsYWNlaG9sZGVyIGF0dHJcblx0XHRcdFx0aWYgKGRhdGEucGxhY2Vob2xkZXIpIHtcblx0XHRcdFx0XHRzdWJub2RlLnBsYWNlaG9sZGVyID0gZGF0YS5wbGFjZWhvbGRlcjtcblx0XHRcdFx0fVxuXHRcdFx0XHRjaGlsZENvbnRhaW5lciA9IHN1Ym5vZGU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBNb3JlYml0cy5xdWlja0Zvcm06IHVua25vd24gZWxlbWVudCB0eXBlICR7ZGF0YS50eXBlLnRvU3RyaW5nKCl9YCk7XG5cdFx0fVxuXHRcdGNoaWxkQ29udGFpbmVyIHx8PSBub2RlO1xuXHRcdGlmIChkYXRhLnRvb2x0aXApIHtcblx0XHRcdE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50LmdlbmVyYXRlVG9vbHRpcChsYWJlbCB8fCBub2RlLCBkYXRhKTtcblx0XHR9XG5cdFx0aWYgKGRhdGEuZXh0cmEpIHtcblx0XHRcdGNoaWxkQ29udGFpbmVyLmV4dHJhID0gZGF0YS5leHRyYTtcblx0XHR9XG5cdFx0aWYgKGRhdGEuJGRhdGEpIHtcblx0XHRcdCQoY2hpbGRDb250YWluZXIpLmRhdGEoZGF0YS4kZGF0YSk7XG5cdFx0fVxuXHRcdGlmIChkYXRhLnN0eWxlKSB7XG5cdFx0XHRjaGlsZENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgZGF0YS5zdHlsZSk7XG5cdFx0fVxuXHRcdGlmIChkYXRhLmNsYXNzTmFtZSkge1xuXHRcdFx0Y2hpbGRDb250YWluZXIuY2xhc3NOYW1lID0gY2hpbGRDb250YWluZXIuY2xhc3NOYW1lXG5cdFx0XHRcdD8gYCR7Y2hpbGRDb250YWluZXIuY2xhc3NOYW1lfSAke2RhdGEuY2xhc3NOYW1lfWBcblx0XHRcdFx0OiBkYXRhLmNsYXNzTmFtZTtcblx0XHR9XG5cdFx0Y2hpbGRDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsIGRhdGEuaWQgfHwgaWQpO1xuXHRcdHJldHVybiBbbm9kZSwgY2hpbGRDb250YWluZXJdO1xuXHR9O1xuXHQvKipcblx0ICogQ3JlYXRlIGEgalF1ZXJ5IFVJLWJhc2VkIHRvb2x0aXAuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudFxuXHQgKiBAcmVxdWlyZXMganF1ZXJ5LnVpXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IG5vZGUgLSBUaGUgSFRNTCBlbGVtZW50IGJlc2lkZSB3aGljaCBhIHRvb2x0aXAgaXMgdG8gYmUgZ2VuZXJhdGVkLlxuXHQgKiBAcGFyYW0ge09iamVjdH0gZGF0YSAtIFRvb2x0aXAtcmVsYXRlZCBjb25maWd1cmF0aW9uIGRhdGEuXG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudC5nZW5lcmF0ZVRvb2x0aXAgPSAobm9kZSwgZGF0YSkgPT4ge1xuXHRcdGNvbnN0IHRvb2x0aXBCdXR0b24gPSBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSk7XG5cdFx0dG9vbHRpcEJ1dHRvbi5jbGFzc05hbWUgPSAnbW9yZWJpdHMtdG9vbHRpcEJ1dHRvbic7XG5cdFx0dG9vbHRpcEJ1dHRvbi50aXRsZSA9IGRhdGEudG9vbHRpcDsgLy8gUHJvdmlkZXMgdGhlIGNvbnRlbnQgZm9yIGpRdWVyeSBVSVxuXHRcdHRvb2x0aXBCdXR0b24uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJz8nKSk7XG5cdFx0JCh0b29sdGlwQnV0dG9uKS50b29sdGlwKHtcblx0XHRcdHBvc2l0aW9uOiB7XG5cdFx0XHRcdG15OiAnbGVmdCB0b3AnLFxuXHRcdFx0XHRhdDogJ2NlbnRlciBib3R0b20nLFxuXHRcdFx0XHRjb2xsaXNpb246ICdmbGlwZml0Jyxcblx0XHRcdH0sXG5cdFx0XHQvLyBEZXByZWNhdGVkIGluIFVJIDEuMTIsIGJ1dCBNVyBzdHVjayBvbiAxLjkuMiBpbmRlZmluaXRlbHk7IHNlZSAjMzk4IGFuZCBUNzEzODZcblx0XHRcdHRvb2x0aXBDbGFzczogJ21vcmViaXRzLXVpLXRvb2x0aXAnLFxuXHRcdH0pO1xuXHR9O1xuXHQvLyBTb21lIHV0aWxpdHkgbWV0aG9kcyBmb3IgbWFuaXB1bGF0aW5nIHF1aWNrRm9ybXMgYWZ0ZXIgdGhlaXIgY3JlYXRpb246XG5cdC8vIChOb25lIG9mIHRoZXNlIHdvcmsgZm9yIFwiZHluaW5wdXRcIiB0eXBlIGZpZWxkcyBhdCBwcmVzZW50KVxuXHQvKipcblx0ICogUmV0dXJucyBhbiBvYmplY3QgY29udGFpbmluZyBhbGwgZmlsbGVkIGZvcm0gZGF0YSBlbnRlcmVkIGJ5IHRoZSB1c2VyLCB3aXRoIHRoZSBvYmplY3Rcblx0ICoga2V5cyBiZWluZyB0aGUgZm9ybSBlbGVtZW50IG5hbWVzLiBEaXNhYmxlZCBmaWVsZHMgd2lsbCBiZSBpZ25vcmVkLCBidXQgbm90IGhpZGRlbiBmaWVsZHMuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5xdWlja0Zvcm1cblx0ICogQHBhcmFtIHtIVE1MRm9ybUVsZW1lbnR9IGZvcm1cblx0ICogQHJldHVybnMge09iamVjdH0gV2l0aCBmaWVsZCBuYW1lcyBhcyBrZXlzLCBpbnB1dCBkYXRhIGFzIHZhbHVlcy5cblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5nZXRJbnB1dERhdGEgPSAoZm9ybSkgPT4ge1xuXHRcdGNvbnN0IHJlc3VsdCA9IHt9O1xuXHRcdGZvciAoY29uc3QgZmllbGQgb2YgZm9ybS5lbGVtZW50cykge1xuXHRcdFx0aWYgKGZpZWxkLmRpc2FibGVkIHx8ICFmaWVsZC5uYW1lIHx8ICFmaWVsZC50eXBlIHx8IGZpZWxkLnR5cGUgPT09ICdzdWJtaXQnIHx8IGZpZWxkLnR5cGUgPT09ICdidXR0b24nKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0Ly8gRm9yIGVsZW1lbnRzIGluIHN1Ymdyb3VwcywgcXVpY2tmb3JtIHByZXBlbmRzIGVsZW1lbnQgbmFtZXMgd2l0aFxuXHRcdFx0Ly8gbmFtZSBvZiB0aGUgcGFyZW50IGdyb3VwIGZvbGxvd2VkIGJ5IGEgcGVyaW9kLCBnZXQgcmlkIG9mIHRoYXQuXG5cdFx0XHRjb25zdCBmaWVsZE5hbWVOb3JtID0gZmllbGQubmFtZS5zbGljZShmaWVsZC5uYW1lLmluZGV4T2YoJy4nKSArIDEpO1xuXHRcdFx0c3dpdGNoIChmaWVsZC50eXBlKSB7XG5cdFx0XHRcdGNhc2UgJ3JhZGlvJzpcblx0XHRcdFx0XHRpZiAoZmllbGQuY2hlY2tlZCkge1xuXHRcdFx0XHRcdFx0cmVzdWx0W2ZpZWxkTmFtZU5vcm1dID0gZmllbGQudmFsdWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdjaGVja2JveCc6XG5cdFx0XHRcdFx0aWYgKGZpZWxkLmRhdGFzZXQuc2luZ2xlKSB7XG5cdFx0XHRcdFx0XHRyZXN1bHRbZmllbGROYW1lTm9ybV0gPSBmaWVsZC5jaGVja2VkOyAvLyBib29sZWFuXG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJlc3VsdFtmaWVsZE5hbWVOb3JtXSB8fD0gW107XG5cdFx0XHRcdFx0XHRpZiAoZmllbGQuY2hlY2tlZCkge1xuXHRcdFx0XHRcdFx0XHRyZXN1bHRbZmllbGROYW1lTm9ybV1bcmVzdWx0W2ZpZWxkTmFtZU5vcm1dLmxlbmd0aF0gPSBmaWVsZC52YWx1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3NlbGVjdC1tdWx0aXBsZSc6XG5cdFx0XHRcdFx0cmVzdWx0W2ZpZWxkTmFtZU5vcm1dID0gJChmaWVsZCkudmFsKCk7IC8vIGZpZWxkLnZhbHVlIGRvZXNuJ3Qgd29ya1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICd0ZXh0JzogLy8gZmFsbHMgdGhyb3VnaFxuXHRcdFx0XHRjYXNlICd0ZXh0YXJlYSc6XG5cdFx0XHRcdFx0cmVzdWx0W2ZpZWxkTmFtZU5vcm1dID0gZmllbGQudmFsdWUudHJpbSgpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdC8vIGNvdWxkIGJlIHNlbGVjdC1vbmUsIGRhdGUsIG51bWJlciwgZW1haWwsIGV0Y1xuXHRcdFx0XHRcdGlmIChmaWVsZC52YWx1ZSkge1xuXHRcdFx0XHRcdFx0cmVzdWx0W2ZpZWxkTmFtZU5vcm1dID0gZmllbGQudmFsdWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9O1xuXHQvKipcblx0ICogUmV0dXJucyBhbGwgZm9ybSBlbGVtZW50cyB3aXRoIGEgZ2l2ZW4gZmllbGQgbmFtZSBvciBJRC5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybVxuXHQgKiBAcGFyYW0ge0hUTUxGb3JtRWxlbWVudH0gZm9ybVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZmllbGROYW1lIC0gVGhlIG5hbWUgb3IgaWQgb2YgdGhlIGZpZWxkcy5cblx0ICogQHJldHVybnMge0hUTUxFbGVtZW50W119IC0gQXJyYXkgb2YgbWF0Y2hpbmcgZm9ybSBlbGVtZW50cy5cblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5nZXRFbGVtZW50cyA9IChmb3JtLCBmaWVsZE5hbWUpID0+IHtcblx0XHRjb25zdCAkZm9ybSA9ICQoZm9ybSk7XG5cdFx0ZmllbGROYW1lID0gJC5lc2NhcGVTZWxlY3RvcihmaWVsZE5hbWUpOyAvLyBzYW5pdGl6ZSBpbnB1dFxuXHRcdGxldCAkZWxlbWVudHMgPSAkZm9ybS5maW5kKGBbbmFtZT1cIiR7ZmllbGROYW1lfVwiXWApO1xuXHRcdGlmICgkZWxlbWVudHMubGVuZ3RoID4gMCkge1xuXHRcdFx0cmV0dXJuICRlbGVtZW50cy50b0FycmF5KCk7XG5cdFx0fVxuXHRcdCRlbGVtZW50cyA9ICRmb3JtLmZpbmQoYCMke2ZpZWxkTmFtZX1gKTtcblx0XHRyZXR1cm4gJGVsZW1lbnRzLnRvQXJyYXkoKTtcblx0fTtcblx0LyoqXG5cdCAqIFNlYXJjaGVzIHRoZSBhcnJheSBvZiBlbGVtZW50cyBmb3IgYSBjaGVja2JveCBvciByYWRpbyBidXR0b24gd2l0aCBhIGNlcnRhaW5cblx0ICogYHZhbHVlYCBhdHRyaWJ1dGUsIGFuZCByZXR1cm5zIHRoZSBmaXJzdCBzdWNoIGVsZW1lbnQuIFJldHVybnMgbnVsbCBpZiBub3QgZm91bmQuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5xdWlja0Zvcm1cblx0ICogQHBhcmFtIHtIVE1MSW5wdXRFbGVtZW50W119IGVsZW1lbnRBcnJheSAtIEFycmF5IG9mIGNoZWNrYm94IG9yIHJhZGlvIGVsZW1lbnRzLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgLSBWYWx1ZSB0byBzZWFyY2ggZm9yLlxuXHQgKiBAcmV0dXJucyB7SFRNTElucHV0RWxlbWVudH1cblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5nZXRDaGVja2JveE9yUmFkaW8gPSAoZWxlbWVudEFycmF5LCB2YWx1ZSkgPT4ge1xuXHRcdGNvbnN0IGZvdW5kID0gZWxlbWVudEFycmF5LmZpbHRlcigoZWxlbWVudCkgPT4ge1xuXHRcdFx0cmV0dXJuIGVsZW1lbnQudmFsdWUgPT09IHZhbHVlO1xuXHRcdH0pO1xuXHRcdGlmIChmb3VuZC5sZW5ndGggPiAwKSB7XG5cdFx0XHRyZXR1cm4gZm91bmRbMF07XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9O1xuXHQvKipcblx0ICogUmV0dXJucyB0aGUgJmx0O2Rpdj4gY29udGFpbmluZyB0aGUgZm9ybSBlbGVtZW50LCBvciB0aGUgZm9ybSBlbGVtZW50IGl0c2VsZlxuXHQgKiBNYXkgbm90IHdvcmsgYXMgZXhwZWN0ZWQgb24gY2hlY2tib3hlcyBvciByYWRpb3MuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5xdWlja0Zvcm1cblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuXHQgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0uZ2V0RWxlbWVudENvbnRhaW5lciA9IChlbGVtZW50KSA9PiB7XG5cdFx0Ly8gZm9yIGRpdnMsIGhlYWRpbmdzIGFuZCBmaWVsZHNldHMsIHRoZSBjb250YWluZXIgaXMgdGhlIGVsZW1lbnQgaXRzZWxmXG5cdFx0aWYgKFxuXHRcdFx0ZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxGaWVsZFNldEVsZW1lbnQgfHxcblx0XHRcdGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRGl2RWxlbWVudCB8fFxuXHRcdFx0ZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxIZWFkaW5nRWxlbWVudFxuXHRcdCkge1xuXHRcdFx0cmV0dXJuIGVsZW1lbnQ7XG5cdFx0fVxuXHRcdC8vIGZvciBvdGhlcnMsIGp1c3QgcmV0dXJuIHRoZSBwYXJlbnQgbm9kZVxuXHRcdHJldHVybiBlbGVtZW50LnBhcmVudE5vZGU7XG5cdH07XG5cdC8qKlxuXHQgKiBHZXRzIHRoZSBIVE1MIGVsZW1lbnQgdGhhdCBjb250YWlucyB0aGUgbGFiZWwgb2YgdGhlIGdpdmVuIGZvcm0gZWxlbWVudFxuXHQgKiAobWFpbmx5IGZvciBpbnRlcm5hbCB1c2UpLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtXG5cdCAqIEBwYXJhbSB7KEhUTUxFbGVtZW50fE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50KX0gZWxlbWVudFxuXHQgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0uZ2V0RWxlbWVudExhYmVsT2JqZWN0ID0gKGVsZW1lbnQpID0+IHtcblx0XHQvLyBmb3IgYnV0dG9ucywgZGl2cyBhbmQgaGVhZGVycywgdGhlIGxhYmVsIGlzIG9uIHRoZSBlbGVtZW50IGl0c2VsZlxuXHRcdGlmIChcblx0XHRcdGVsZW1lbnQudHlwZSA9PT0gJ2J1dHRvbicgfHxcblx0XHRcdGVsZW1lbnQudHlwZSA9PT0gJ3N1Ym1pdCcgfHxcblx0XHRcdGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRGl2RWxlbWVudCB8fFxuXHRcdFx0ZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxIZWFkaW5nRWxlbWVudFxuXHRcdCkge1xuXHRcdFx0cmV0dXJuIGVsZW1lbnQ7XG5cdFx0XHQvLyBmb3IgZmllbGRzZXRzLCB0aGUgbGFiZWwgaXMgdGhlIGNoaWxkIDxsZWdlbmQ+IGVsZW1lbnRcblx0XHR9IGVsc2UgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRmllbGRTZXRFbGVtZW50KSB7XG5cdFx0XHRyZXR1cm4gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdsZWdlbmQnKTtcblx0XHRcdC8vIGZvciB0ZXh0YXJlYXMsIHRoZSBsYWJlbCBpcyB0aGUgc2libGluZyA8aDU+IGVsZW1lbnRcblx0XHR9IGVsc2UgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MVGV4dEFyZWFFbGVtZW50KSB7XG5cdFx0XHRyZXR1cm4gZWxlbWVudC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJ2g1Jyk7XG5cdFx0fVxuXHRcdC8vIGZvciBvdGhlcnMsIHRoZSBsYWJlbCBpcyB0aGUgc2libGluZyA8bGFiZWw+IGVsZW1lbnRcblx0XHRyZXR1cm4gZWxlbWVudC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsJyk7XG5cdH07XG5cdC8qKlxuXHQgKiBHZXRzIHRoZSBsYWJlbCB0ZXh0IG9mIHRoZSBlbGVtZW50LlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtXG5cdCAqIEBwYXJhbSB7KEhUTUxFbGVtZW50fE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50KX0gZWxlbWVudFxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLmdldEVsZW1lbnRMYWJlbCA9IChlbGVtZW50KSA9PiB7XG5cdFx0Y29uc3QgbGFiZWxFbGVtZW50ID0gTW9yZWJpdHMucXVpY2tGb3JtLmdldEVsZW1lbnRMYWJlbE9iamVjdChlbGVtZW50KTtcblx0XHRpZiAoIWxhYmVsRWxlbWVudCkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdHJldHVybiBsYWJlbEVsZW1lbnQuZmlyc3RDaGlsZC50ZXh0Q29udGVudDtcblx0fTtcblx0LyoqXG5cdCAqIFNldHMgdGhlIGxhYmVsIG9mIHRoZSBlbGVtZW50IHRvIHRoZSBnaXZlbiB0ZXh0LlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtXG5cdCAqIEBwYXJhbSB7KEhUTUxFbGVtZW50fE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50KX0gZWxlbWVudFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbGFiZWxUZXh0XG5cdCAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHN1Y2NlZWRlZCwgZmFsc2UgaWYgdGhlIGxhYmVsIGVsZW1lbnQgaXMgdW5hdmFpbGFibGUuXG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0uc2V0RWxlbWVudExhYmVsID0gKGVsZW1lbnQsIGxhYmVsVGV4dCkgPT4ge1xuXHRcdGNvbnN0IGxhYmVsRWxlbWVudCA9IE1vcmViaXRzLnF1aWNrRm9ybS5nZXRFbGVtZW50TGFiZWxPYmplY3QoZWxlbWVudCk7XG5cdFx0aWYgKCFsYWJlbEVsZW1lbnQpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0bGFiZWxFbGVtZW50LmZpcnN0Q2hpbGQudGV4dENvbnRlbnQgPSBsYWJlbFRleHQ7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH07XG5cdC8qKlxuXHQgKiBTdG9yZXMgdGhlIGVsZW1lbnQncyBjdXJyZW50IGxhYmVsLCBhbmQgdGVtcG9yYXJpbHkgc2V0cyB0aGUgbGFiZWwgdG8gdGhlIGdpdmVuIHRleHQuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5xdWlja0Zvcm1cblx0ICogQHBhcmFtIHsoSFRNTEVsZW1lbnR8TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQpfSBlbGVtZW50XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wb3JhcnlMYWJlbFRleHRcblx0ICogQHJldHVybnMge2Jvb2xlYW59IGB0cnVlYCBpZiBzdWNjZWVkZWQsIGBmYWxzZWAgaWYgdGhlIGxhYmVsIGVsZW1lbnQgaXMgdW5hdmFpbGFibGUuXG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0ub3ZlcnJpZGVFbGVtZW50TGFiZWwgPSAoZWxlbWVudCwgdGVtcG9yYXJ5TGFiZWxUZXh0KSA9PiB7XG5cdFx0aWYgKCFlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS1vbGRsYWJlbCcpKSB7XG5cdFx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1vbGRsYWJlbCcsIE1vcmViaXRzLnF1aWNrRm9ybS5nZXRFbGVtZW50TGFiZWwoZWxlbWVudCkpO1xuXHRcdH1cblx0XHRyZXR1cm4gTW9yZWJpdHMucXVpY2tGb3JtLnNldEVsZW1lbnRMYWJlbChlbGVtZW50LCB0ZW1wb3JhcnlMYWJlbFRleHQpO1xuXHR9O1xuXHQvKipcblx0ICogUmVzdG9yZXMgdGhlIGxhYmVsIHN0b3JlZCBieSBvdmVycmlkZUVsZW1lbnRMYWJlbC5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybVxuXHQgKiBAcGFyYW0geyhIVE1MRWxlbWVudHxNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudCl9IGVsZW1lbnRcblx0ICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgc3VjY2VlZGVkLCBmYWxzZSBpZiB0aGUgbGFiZWwgZWxlbWVudCBpcyB1bmF2YWlsYWJsZS5cblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5yZXNldEVsZW1lbnRMYWJlbCA9IChlbGVtZW50KSA9PiB7XG5cdFx0aWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLW9sZGxhYmVsJykpIHtcblx0XHRcdHJldHVybiBNb3JlYml0cy5xdWlja0Zvcm0uc2V0RWxlbWVudExhYmVsKGVsZW1lbnQsIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLW9sZGxhYmVsJykpO1xuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fTtcblx0LyoqXG5cdCAqIFNob3dzIG9yIGhpZGVzIGEgZm9ybSBlbGVtZW50IHBsdXMgaXRzIGxhYmVsIGFuZCB0b29sdGlwLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtXG5cdCAqIEBwYXJhbSB7KEhUTUxFbGVtZW50fGpRdWVyeXxzdHJpbmcpfSBlbGVtZW50IC0gSFRNTC9qUXVlcnkgZWxlbWVudCwgb3IgalF1ZXJ5IHNlbGVjdG9yIHN0cmluZy5cblx0ICogQHBhcmFtIHtib29sZWFufSBbdmlzaWJpbGl0eV0gLSBTa2lwIHRoaXMgdG8gdG9nZ2xlIHZpc2liaWxpdHkuXG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0uc2V0RWxlbWVudFZpc2liaWxpdHkgPSAoZWxlbWVudCwgdmlzaWJpbGl0eSkgPT4ge1xuXHRcdCQoZWxlbWVudCkudG9nZ2xlKHZpc2liaWxpdHkpO1xuXHR9O1xuXHQvKipcblx0ICogU2hvd3Mgb3IgaGlkZXMgdGhlIHF1ZXN0aW9uIG1hcmsgaWNvbiAod2hpY2ggZGlzcGxheXMgdGhlIHRvb2x0aXApIG5leHQgdG8gYSBmb3JtIGVsZW1lbnQuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5xdWlja0Zvcm1cblx0ICogQHBhcmFtIHsoSFRNTEVsZW1lbnR8alF1ZXJ5KX0gZWxlbWVudFxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IFt2aXNpYmlsaXR5XSAtIFNraXAgdGhpcyB0byB0b2dnbGUgdmlzaWJpbGl0eS5cblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5zZXRFbGVtZW50VG9vbHRpcFZpc2liaWxpdHkgPSAoZWxlbWVudCwgdmlzaWJpbGl0eSkgPT4ge1xuXHRcdCQoTW9yZWJpdHMucXVpY2tGb3JtLmdldEVsZW1lbnRDb250YWluZXIoZWxlbWVudCkpLmZpbmQoJy5tb3JlYml0cy10b29sdGlwQnV0dG9uJykudG9nZ2xlKHZpc2liaWxpdHkpO1xuXHR9O1xuXHQvKipcblx0ICogQGV4dGVybmFsIEhUTUxGb3JtRWxlbWVudFxuXHQgKi9cblx0LyoqXG5cdCAqIEdldCBjaGVja2VkIGl0ZW1zIGluIHRoZSBmb3JtLlxuXHQgKlxuXHQgKiBAZnVuY3Rpb24gZXh0ZXJuYWw6SFRNTEZvcm1FbGVtZW50LmdldENoZWNrZWRcblx0ICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBGaW5kIGNoZWNrZWQgcHJvcGVydHkgb2YgZWxlbWVudHMgKGkuZS4gYSBjaGVja2JveFxuXHQgKiBvciBhIHJhZGlvYnV0dG9uKSB3aXRoIHRoZSBnaXZlbiBuYW1lLCBvciBzZWxlY3Qgb3B0aW9ucyB0aGF0IGhhdmUgc2VsZWN0ZWRcblx0ICogc2V0IHRvIHRydWUgKGRvbid0IHRyeSB0byBtaXggc2VsZWN0cyB3aXRoIHJhZGlvL2NoZWNrYm94ZXMpLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW3R5cGVdIC0gT3B0aW9uYWxseSBzcGVjaWZ5IGVpdGhlciByYWRpbyBvciBjaGVja2JveCAoZm9yXG5cdCAqIHRoZSBldmVudCB0aGF0IGJvdGggY2hlY2tib3hlcyBhbmQgcmFkaW9idXR0b25zIGhhdmUgdGhlIHNhbWUgbmFtZSkuXG5cdCAqIEByZXR1cm5zIHtzdHJpbmdbXX0gLSBDb250YWlucyB0aGUgdmFsdWVzIG9mIGVsZW1lbnRzIHdpdGggdGhlIGdpdmVuIG5hbWVcblx0ICogY2hlY2tlZCBwcm9wZXJ0eSBzZXQgdG8gdHJ1ZS5cblx0ICovXG5cdEhUTUxGb3JtRWxlbWVudC5wcm90b3R5cGUuZ2V0Q2hlY2tlZCA9IGZ1bmN0aW9uIChuYW1lLCB0eXBlKSB7XG5cdFx0Y29uc3QgZWxlbWVudHMgPSB0aGlzLmVsZW1lbnRzW25hbWVdO1xuXHRcdGlmICghZWxlbWVudHMpIHtcblx0XHRcdHJldHVybiBbXTtcblx0XHR9XG5cdFx0Y29uc3QgcmV0dXJuQXJyYXkgPSBbXTtcblx0XHRsZXQgaTtcblx0XHRpZiAoZWxlbWVudHMgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCkge1xuXHRcdFx0Y29uc3Qge29wdGlvbnN9ID0gZWxlbWVudHM7XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHRpZiAob3B0aW9uc1tpXS5zZWxlY3RlZCkge1xuXHRcdFx0XHRcdGlmIChvcHRpb25zW2ldLnZhbHVlcykge1xuXHRcdFx0XHRcdFx0cmV0dXJuQXJyYXlbcmV0dXJuQXJyYXkubGVuZ3RoXSA9IG9wdGlvbnNbaV0udmFsdWVzO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXR1cm5BcnJheVtyZXR1cm5BcnJheS5sZW5ndGhdID0gb3B0aW9uc1tpXS52YWx1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKGVsZW1lbnRzIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xuXHRcdFx0aWYgKHR5cGUgJiYgZWxlbWVudHMudHlwZSAhPT0gdHlwZSkge1xuXHRcdFx0XHRyZXR1cm4gW107XG5cdFx0XHR9IGVsc2UgaWYgKGVsZW1lbnRzLmNoZWNrZWQpIHtcblx0XHRcdFx0cmV0dXJuIFtlbGVtZW50cy52YWx1ZV07XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGZvciAoaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHRpZiAoZWxlbWVudHNbaV0uY2hlY2tlZCkge1xuXHRcdFx0XHRcdGlmICh0eXBlICYmIGVsZW1lbnRzW2ldLnR5cGUgIT09IHR5cGUpIHtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoZWxlbWVudHNbaV0udmFsdWVzKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm5BcnJheVtyZXR1cm5BcnJheS5sZW5ndGhdID0gZWxlbWVudHNbaV0udmFsdWVzO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXR1cm5BcnJheVtyZXR1cm5BcnJheS5sZW5ndGhdID0gZWxlbWVudHNbaV0udmFsdWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByZXR1cm5BcnJheTtcblx0fTtcblx0LyoqXG5cdCAqIERvZXMgdGhlIHNhbWUgYXMge0BsaW5rIEhUTUxGb3JtRWxlbWVudC5nZXRDaGVja2VkfGdldENoZWNrZWR9LCBidXQgd2l0aCB1bmNoZWNrZWQgZWxlbWVudHMuXG5cdCAqXG5cdCAqIEBmdW5jdGlvbiBleHRlcm5hbDpIVE1MRm9ybUVsZW1lbnQuZ2V0VW5jaGVja2VkXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gRmluZCBjaGVja2VkIHByb3BlcnR5IG9mIGVsZW1lbnRzIChpLmUuIGEgY2hlY2tib3hcblx0ICogb3IgYSByYWRpb2J1dHRvbikgd2l0aCB0aGUgZ2l2ZW4gbmFtZSwgb3Igc2VsZWN0IG9wdGlvbnMgdGhhdCBoYXZlIHNlbGVjdGVkXG5cdCAqIHNldCB0byB0cnVlIChkb24ndCB0cnkgdG8gbWl4IHNlbGVjdHMgd2l0aCByYWRpby9jaGVja2JveGVzKS5cblx0ICogQHBhcmFtIHtzdHJpbmd9IFt0eXBlXSAtIE9wdGlvbmFsbHkgc3BlY2lmeSBlaXRoZXIgcmFkaW8gb3IgY2hlY2tib3ggKGZvclxuXHQgKiB0aGUgZXZlbnQgdGhhdCBib3RoIGNoZWNrYm94ZXMgYW5kIHJhZGlvYnV0dG9ucyBoYXZlIHRoZSBzYW1lIG5hbWUpLlxuXHQgKiBAcmV0dXJucyB7c3RyaW5nW119IC0gQ29udGFpbnMgdGhlIHZhbHVlcyBvZiBlbGVtZW50cyB3aXRoIHRoZSBnaXZlbiBuYW1lXG5cdCAqIGNoZWNrZWQgcHJvcGVydHkgc2V0IHRvIHRydWUuXG5cdCAqL1xuXHRIVE1MRm9ybUVsZW1lbnQucHJvdG90eXBlLmdldFVuY2hlY2tlZCA9IGZ1bmN0aW9uIChuYW1lLCB0eXBlKSB7XG5cdFx0Y29uc3QgZWxlbWVudHMgPSB0aGlzLmVsZW1lbnRzW25hbWVdO1xuXHRcdGlmICghZWxlbWVudHMpIHtcblx0XHRcdHJldHVybiBbXTtcblx0XHR9XG5cdFx0Y29uc3QgcmV0dXJuQXJyYXkgPSBbXTtcblx0XHRsZXQgaTtcblx0XHRpZiAoZWxlbWVudHMgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCkge1xuXHRcdFx0Y29uc3Qge29wdGlvbnN9ID0gZWxlbWVudHM7XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHRpZiAoIW9wdGlvbnNbaV0uc2VsZWN0ZWQpIHtcblx0XHRcdFx0XHRpZiAob3B0aW9uc1tpXS52YWx1ZXMpIHtcblx0XHRcdFx0XHRcdHJldHVybkFycmF5W3JldHVybkFycmF5Lmxlbmd0aF0gPSBvcHRpb25zW2ldLnZhbHVlcztcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuQXJyYXlbcmV0dXJuQXJyYXkubGVuZ3RoXSA9IG9wdGlvbnNbaV0udmFsdWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChlbGVtZW50cyBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIHtcblx0XHRcdGlmICh0eXBlICYmIGVsZW1lbnRzLnR5cGUgIT09IHR5cGUpIHtcblx0XHRcdFx0cmV0dXJuIFtdO1xuXHRcdFx0fSBlbHNlIGlmICghZWxlbWVudHMuY2hlY2tlZCkge1xuXHRcdFx0XHRyZXR1cm4gW2VsZW1lbnRzLnZhbHVlXTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Zm9yIChpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRcdGlmICghZWxlbWVudHNbaV0uY2hlY2tlZCkge1xuXHRcdFx0XHRcdGlmICh0eXBlICYmIGVsZW1lbnRzW2ldLnR5cGUgIT09IHR5cGUpIHtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoZWxlbWVudHNbaV0udmFsdWVzKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm5BcnJheVtyZXR1cm5BcnJheS5sZW5ndGhdID0gZWxlbWVudHNbaV0udmFsdWVzO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXR1cm5BcnJheVtyZXR1cm5BcnJheS5sZW5ndGhdID0gZWxlbWVudHNbaV0udmFsdWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByZXR1cm5BcnJheTtcblx0fTtcblx0LyoqXG5cdCAqIFV0aWxpdGllcyB0byBoZWxwIHByb2Nlc3MgSVAgYWRkcmVzc2VzLlxuXHQgKlxuXHQgKiBAbmFtZXNwYWNlIE1vcmViaXRzLmlwXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0c1xuXHQgKi9cblx0TW9yZWJpdHMuaXAgPSB7XG5cdFx0LyoqXG5cdFx0ICogQ29udmVydHMgYW4gSVB2NiBhZGRyZXNzIHRvIHRoZSBjYW5vbmljYWwgZm9ybSBzdG9yZWQgYW5kIHVzZWQgYnkgTWVkaWFXaWtpLlxuXHRcdCAqIEphdmFTY3JpcHQgdHJhbnNsYXRpb24gb2YgdGhlIHtAbGluayBodHRwczovL2dlcnJpdC53aWtpbWVkaWEub3JnL3IvcGx1Z2lucy9naXRpbGVzL21lZGlhd2lraS9jb3JlLysvOGViNmFjM2U4NGVhMzMxMmQzOTFjYTk2YzEyYzQ5ZTNhZDA3NTNiYi9pbmNsdWRlcy91dGlscy9JUC5waHAjMTMxfGBJUDo6c2FuaXRpemVJUCgpYH1cblx0XHQgKiBmdW5jdGlvbiBmcm9tIHRoZSBJUFV0aWxzIGxpYnJhcnkuICBBZGRyZXNzZXMgYXJlIHZlcmJvc2UsIHVwcGVyY2FzZSxcblx0XHQgKiBub3JtYWxpemVkLCBhbmQgZXhwYW5kZWQgdG8gOCB3b3Jkcy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBhZGRyZXNzIC0gVGhlIElQdjYgYWRkcmVzcywgd2l0aCBvciB3aXRob3V0IENJRFIuXG5cdFx0ICogQHJldHVybnMge3N0cmluZ31cblx0XHQgKi9cblx0XHRzYW5pdGl6ZUlQdjY6IChhZGRyZXNzKSA9PiB7XG5cdFx0XHRhZGRyZXNzID0gYWRkcmVzcy50cmltKCk7XG5cdFx0XHRpZiAoYWRkcmVzcyA9PT0gJycpIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIW13LnV0aWwuaXNJUHY2QWRkcmVzcyhhZGRyZXNzLCB0cnVlKSkge1xuXHRcdFx0XHRyZXR1cm4gYWRkcmVzczsgLy8gbm90aGluZyBlbHNlIHRvIGRvIGZvciBJUHY0IGFkZHJlc3NlcyBvciBpbnZhbGlkIG9uZXNcblx0XHRcdH1cblx0XHRcdC8vIFJlbW92ZSBhbnkgd2hpdGVzcGFjZXMsIGNvbnZlcnQgdG8gdXBwZXIgY2FzZVxuXHRcdFx0YWRkcmVzcyA9IGFkZHJlc3MudG9VcHBlckNhc2UoKTtcblx0XHRcdC8vIEV4cGFuZCB6ZXJvIGFiYnJldmlhdGlvbnNcblx0XHRcdGNvbnN0IGFiYnJldlBvcyA9IGFkZHJlc3MuaW5kZXhPZignOjonKTtcblx0XHRcdGlmIChhYmJyZXZQb3MgIT09IC0xKSB7XG5cdFx0XHRcdC8vIFdlIGtub3cgdGhpcyBpcyB2YWxpZCBJUHY2LiBGaW5kIHRoZSBsYXN0IGluZGV4IG9mIHRoZVxuXHRcdFx0XHQvLyBhZGRyZXNzIGJlZm9yZSBhbnkgQ0lEUiBudW1iZXIgKGUuZy4gXCJhOmI6Yzo6LzI0XCIpLlxuXHRcdFx0XHRjb25zdCBDSURSU3RhcnQgPSBhZGRyZXNzLmluZGV4T2YoJy8nKTtcblx0XHRcdFx0Y29uc3QgYWRkcmVzc0VuZCA9IENJRFJTdGFydCA9PT0gLTEgPyBhZGRyZXNzLmxlbmd0aCAtIDEgOiBDSURSU3RhcnQgLSAxO1xuXHRcdFx0XHQvLyBJZiB0aGUgJzo6JyBpcyBhdCB0aGUgYmVnaW5uaW5nLi4uXG5cdFx0XHRcdGxldCByZXBlYXQ7XG5cdFx0XHRcdGxldCBleHRyYTtcblx0XHRcdFx0bGV0IHBhZDtcblx0XHRcdFx0aWYgKGFiYnJldlBvcyA9PT0gMCkge1xuXHRcdFx0XHRcdHJlcGVhdCA9ICcwOic7XG5cdFx0XHRcdFx0ZXh0cmEgPSBhZGRyZXNzID09PSAnOjonID8gJzAnIDogJyc7IC8vIGZvciB0aGUgYWRkcmVzcyAnOjonXG5cdFx0XHRcdFx0cGFkID0gOTsgLy8gNysyIChkdWUgdG8gJzo6Jylcblx0XHRcdFx0XHQvLyBJZiB0aGUgJzo6JyBpcyBhdCB0aGUgZW5kLi4uXG5cdFx0XHRcdH0gZWxzZSBpZiAoYWJicmV2UG9zID09PSBhZGRyZXNzRW5kIC0gMSkge1xuXHRcdFx0XHRcdHJlcGVhdCA9ICc6MCc7XG5cdFx0XHRcdFx0ZXh0cmEgPSAnJztcblx0XHRcdFx0XHRwYWQgPSA5OyAvLyA3KzIgKGR1ZSB0byAnOjonKVxuXHRcdFx0XHRcdC8vIElmIHRoZSAnOjonIGlzIGluIHRoZSBtaWRkbGUuLi5cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXBlYXQgPSAnOjAnO1xuXHRcdFx0XHRcdGV4dHJhID0gJzonO1xuXHRcdFx0XHRcdHBhZCA9IDg7IC8vIDYrMiAoZHVlIHRvICc6OicpXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRsZXQgcmVwbGFjZW1lbnQgPSByZXBlYXQ7XG5cdFx0XHRcdHBhZCAtPSBhZGRyZXNzLnNwbGl0KCc6JykubGVuZ3RoIC0gMTtcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDE7IGkgPCBwYWQ7IGkrKykge1xuXHRcdFx0XHRcdHJlcGxhY2VtZW50ICs9IHJlcGVhdDtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXBsYWNlbWVudCArPSBleHRyYTtcblx0XHRcdFx0YWRkcmVzcyA9IGFkZHJlc3MucmVwbGFjZSgnOjonLCByZXBsYWNlbWVudCk7XG5cdFx0XHR9XG5cdFx0XHQvLyBSZW1vdmUgbGVhZGluZyB6ZXJvcyBmcm9tIGVhY2ggYmxvYyBhcyBuZWVkZWRcblx0XHRcdHJldHVybiBhZGRyZXNzLnJlcGxhY2UoLyhefDopMCsoWzAtOUEtRmEtZl17MSw0fSkvZywgJyQxJDInKTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIERldGVybWluZSBpZiB0aGUgZ2l2ZW4gSVAgYWRkcmVzcyBpcyBhIHJhbmdlLiAgSnVzdCBjb25qb2luc1xuXHRcdCAqIGBtdy51dGlsLmlzSVBBZGRyZXNzYCB3aXRoIGFuZCB3aXRob3V0IHRoZSBgYWxsb3dCbG9ja2Agb3B0aW9uLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGlwXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW59IC0gVHJ1ZSBpZiBnaXZlbiBhIHZhbGlkIElQIGFkZHJlc3MgcmFuZ2UsIGZhbHNlIG90aGVyd2lzZS5cblx0XHQgKi9cblx0XHRpc1JhbmdlOiAoaXApID0+IHtcblx0XHRcdHJldHVybiBtdy51dGlsLmlzSVBBZGRyZXNzKGlwLCB0cnVlKSAmJiAhbXcudXRpbC5pc0lQQWRkcmVzcyhpcCk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBDaGVjayB0aGF0IGFuIElQIHJhbmdlIGlzIHdpdGhpbiB0aGUgQ0lEUiBsaW1pdHMuICBNb3N0IGxpa2VseSB0byBiZSB1c2VmdWxcblx0XHQgKiBpbiBjb25qdW5jdGlvbiB3aXRoIGB3Z1JlbGV2YW50VXNlck5hbWVgLiAgQ0lEUiBsaW1pdHMgYXJlIGhhcmRjb2RlZCBhcyAvMTZcblx0XHQgKiBmb3IgSVB2NCBhbmQgLzMyIGZvciBJUHY2LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGlwXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW59IC0gVHJ1ZSBmb3IgdmFsaWQgcmFuZ2VzIHdpdGhpbiB0aGUgQ0lEUiBsaW1pdHMsXG5cdFx0ICogb3RoZXJ3aXNlIGZhbHNlIChyYW5nZXMgb3V0c2lkZSB0aGUgbGltaXQsIHNpbmdsZSBJUHMsIG5vbi1JUHMpLlxuXHRcdCAqL1xuXHRcdHZhbGlkQ0lEUjogKGlwKSA9PiB7XG5cdFx0XHRpZiAoTW9yZWJpdHMuaXAuaXNSYW5nZShpcCkpIHtcblx0XHRcdFx0Y29uc3Qgc3VibmV0ID0gTnVtYmVyLnBhcnNlSW50KGlwLm1hdGNoKC9cXC8oXFxkezEsM30pJC8pWzFdLCAxMCk7XG5cdFx0XHRcdGlmIChzdWJuZXQpIHtcblx0XHRcdFx0XHQvLyBTaG91bGQgYmUgcmVkdW5kYW50XG5cdFx0XHRcdFx0aWYgKG13LnV0aWwuaXNJUHY2QWRkcmVzcyhpcCwgdHJ1ZSkpIHtcblx0XHRcdFx0XHRcdGlmIChzdWJuZXQgPj0gMzIpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChzdWJuZXQgPj0gMTYpIHtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogR2V0IHRoZSAvNjQgc3VibmV0IGZvciBhbiBJUHY2IGFkZHJlc3MuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gaXB2NiAtIFRoZSBJUHY2IGFkZHJlc3MsIHdpdGggb3Igd2l0aG91dCBhIHN1Ym5ldC5cblx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbnxzdHJpbmd9IC0gRmFsc2UgaWYgbm90IElQdjYgb3IgYmlnZ2VyIHRoYW4gYSA2NCxcblx0XHQgKiBvdGhlcndpc2UgdGhlIChzYW5pdGl6ZWQpIC82NCBhZGRyZXNzLlxuXHRcdCAqL1xuXHRcdGdldDY0OiAoaXB2NikgPT4ge1xuXHRcdFx0aWYgKCFpcHY2IHx8ICFtdy51dGlsLmlzSVB2NkFkZHJlc3MoaXB2NiwgdHJ1ZSkpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3Qgc3VibmV0TWF0Y2ggPSBpcHY2Lm1hdGNoKC9cXC8oXFxkezEsM30pJC8pO1xuXHRcdFx0aWYgKHN1Ym5ldE1hdGNoICYmIE51bWJlci5wYXJzZUludChzdWJuZXRNYXRjaFsxXSwgMTApIDwgNjQpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0aXB2NiA9IE1vcmViaXRzLmlwLnNhbml0aXplSVB2NihpcHY2KTtcblx0XHRcdGNvbnN0IGlwUmVnZXggPSAvXigoPzpbMC05QS1GXXsxLDR9Oil7NH0pKD86WzAtOUEtRl17MSw0fTopezN9WzAtOUEtRl17MSw0fSg/OlxcL1xcZHsxLDN9KT8kLztcblx0XHRcdHJldHVybiBpcHY2LnJlcGxhY2UoaXBSZWdleCwgJyQxJy5jb25jYXQoJzA6MDowOjAvNjQnKSk7XG5cdFx0fSxcblx0fTtcblx0LyoqXG5cdCAqIEhlbHBlciBmdW5jdGlvbnMgdG8gbWFuaXB1bGF0ZSBzdHJpbmdzLlxuXHQgKlxuXHQgKiBAbmFtZXNwYWNlIE1vcmViaXRzLnN0cmluZ1xuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHNcblx0ICovXG5cdE1vcmViaXRzLnN0cmluZyA9IHtcblx0XHQvKipcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG5cdFx0ICogQHJldHVybnMge3N0cmluZ31cblx0XHQgKi9cblx0XHR0b1VwcGVyQ2FzZUZpcnN0Q2hhcjogKHN0cikgPT4ge1xuXHRcdFx0c3RyID0gc3RyLnRvU3RyaW5nKCk7XG5cdFx0XHRyZXR1cm4gc3RyLnNsaWNlKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG5cdFx0ICogQHJldHVybnMge3N0cmluZ31cblx0XHQgKi9cblx0XHR0b0xvd2VyQ2FzZUZpcnN0Q2hhcjogKHN0cikgPT4ge1xuXHRcdFx0c3RyID0gc3RyLnRvU3RyaW5nKCk7XG5cdFx0XHRyZXR1cm4gc3RyLnNsaWNlKDAsIDEpLnRvTG93ZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBHaXZlcyBhbiBhcnJheSBvZiBzdWJzdHJpbmdzIG9mIGBzdHJgIC0gc3RhcnRpbmcgd2l0aCBgc3RhcnRgIGFuZFxuXHRcdCAqIGVuZGluZyB3aXRoIGBlbmRgIC0gd2hpY2ggaXMgbm90IGluIGBza2lwbGlzdGAuICBJbnRlbmRlZCBmb3IgdXNlXG5cdFx0ICogb24gd2lraXRleHQgd2l0aCB0ZW1wbGF0ZXMgb3IgbGlua3MuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHN0YXJ0XG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGVuZFxuXHRcdCAqIEBwYXJhbSB7KHN0cmluZ1tdfHN0cmluZyl9IFtza2lwbGlzdF1cblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nW119XG5cdFx0ICogQHRocm93cyBJZiB0aGUgYHN0YXJ0YCBhbmQgYGVuZGAgc3RyaW5ncyBhcmVuJ3Qgb2YgdGhlIHNhbWUgbGVuZ3RoLlxuXHRcdCAqIEB0aHJvd3MgSWYgYHNraXBsaXN0YCBpc24ndCBhbiBhcnJheSBvciBzdHJpbmdcblx0XHQgKi9cblx0XHRzcGxpdFdlaWdodGVkQnlLZXlzOiAoc3RyLCBzdGFydCwgZW5kLCBza2lwbGlzdCkgPT4ge1xuXHRcdFx0aWYgKHN0YXJ0Lmxlbmd0aCAhPT0gZW5kLmxlbmd0aCkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ3N0YXJ0IG1hcmtlciBhbmQgZW5kIG1hcmtlciBtdXN0IGJlIG9mIHRoZSBzYW1lIGxlbmd0aCcpO1xuXHRcdFx0fVxuXHRcdFx0bGV0IGxldmVsID0gMDtcblx0XHRcdGxldCBpbml0aWFsID0gbnVsbDtcblx0XHRcdGNvbnN0IHJlc3VsdCA9IFtdO1xuXHRcdFx0aWYgKCFBcnJheS5pc0FycmF5KHNraXBsaXN0KSkge1xuXHRcdFx0XHRpZiAoc2tpcGxpc3QgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdHNraXBsaXN0ID0gW107XG5cdFx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIHNraXBsaXN0ID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRcdHNraXBsaXN0ID0gW3NraXBsaXN0XTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdub24tYXBwbGljYWJsZSBza2lwbGlzdCBwYXJhbWV0ZXInKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mIHNraXBsaXN0KSB7XG5cdFx0XHRcdFx0aWYgKHN0ci5zbGljZShpLCBpICsgZWxlbWVudC5sZW5ndGgpID09PSBlbGVtZW50KSB7XG5cdFx0XHRcdFx0XHRpICs9IGVsZW1lbnQubGVuZ3RoIC0gMTtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoc3RyLnNsaWNlKGksIGkgKyBzdGFydC5sZW5ndGgpID09PSBzdGFydCkge1xuXHRcdFx0XHRcdGlmIChpbml0aWFsID09PSBudWxsKSB7XG5cdFx0XHRcdFx0XHRpbml0aWFsID0gaTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0KytsZXZlbDtcblx0XHRcdFx0XHRpICs9IHN0YXJ0Lmxlbmd0aCAtIDE7XG5cdFx0XHRcdH0gZWxzZSBpZiAoc3RyLnNsaWNlKGksIGkgKyBlbmQubGVuZ3RoKSA9PT0gZW5kKSB7XG5cdFx0XHRcdFx0LS1sZXZlbDtcblx0XHRcdFx0XHRpICs9IGVuZC5sZW5ndGggLSAxO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghbGV2ZWwgJiYgaW5pdGlhbCAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdHJlc3VsdFtyZXN1bHQubGVuZ3RoXSA9IHN0ci5zbGljZShpbml0aWFsLCBpICsgMSk7XG5cdFx0XHRcdFx0aW5pdGlhbCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBGb3JtYXRzIGZyZWVmb3JtIFwicmVhc29uXCIgKGZyb20gYSB0ZXh0YXJlYSkgZm9yIGRlbGV0aW9uL290aGVyXG5cdFx0ICogdGVtcGxhdGVzIHRoYXQgYXJlIGdvaW5nIHRvIGJlIHN1YnN0aXR1dGVkLCAoZS5nLiBQUk9ELCBYRkQsIFJQUCkuXG5cdFx0ICogSGFuZGxlcyBgfGAgb3V0c2lkZSBhIG5vd2lraSB0YWcuXG5cdFx0ICogT3B0aW9uYWxseSwgYWxzbyBhZGRzIGEgc2lnbmF0dXJlIGlmIG5vdCBwcmVzZW50IGFscmVhZHkuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBbYWRkU2lnXVxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0Zm9ybWF0UmVhc29uVGV4dDogKHN0ciwgYWRkU2lnKSA9PiB7XG5cdFx0XHRsZXQgcmVhc29uID0gKHN0ciB8fCAnJykudG9TdHJpbmcoKS50cmltKCk7XG5cdFx0XHRjb25zdCB1bmJpbmRlciA9IG5ldyBNb3JlYml0cy51bmJpbmRlcihyZWFzb24pO1xuXHRcdFx0dW5iaW5kZXIudW5iaW5kKCc8bm8nLmNvbmNhdCgnd2lraScsICc+JyksICc8L25vJy5jb25jYXQoJ3dpa2knLCAnPicpKTtcblx0XHRcdHVuYmluZGVyLmNvbnRlbnQgPSB1bmJpbmRlci5jb250ZW50LnJlcGxhY2UoL1xcfC9nLCAne3snLmNvbmNhdCgnc3Vic3Q6JywgJyF9fScpKTtcblx0XHRcdHJlYXNvbiA9IHVuYmluZGVyLnJlYmluZCgpO1xuXHRcdFx0aWYgKGFkZFNpZykge1xuXHRcdFx0XHRjb25zdCBzaWcgPSAnfn4nLmNvbmNhdCgnfn4nKTtcblx0XHRcdFx0Y29uc3Qgc2lnSW5kZXggPSByZWFzb24ubGFzdEluZGV4T2Yoc2lnKTtcblx0XHRcdFx0aWYgKHNpZ0luZGV4ID09PSAtMSB8fCBzaWdJbmRleCAhPT0gcmVhc29uLmxlbmd0aCAtIHNpZy5sZW5ndGgpIHtcblx0XHRcdFx0XHRyZWFzb24gKz0gYCAke3NpZ31gO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmVhc29uLnRyaW0oKTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEZvcm1hdHMgYSBcInJlYXNvblwiIChmcm9tIGEgdGV4dGFyZWEpIGZvciBpbmNsdXNpb24gaW4gYSB1c2Vyc3BhY2Vcblx0XHQgKiBsb2cuICBSZXBsYWNlcyBuZXdsaW5lcyB3aXRoIHt7UGJ9fSwgYW5kIGFkZHMgYW4gZXh0cmEgYCNgIGJlZm9yZVxuXHRcdCAqIGxpc3QgaXRlbXMgZm9yIHByb3BlciBmb3JtYXR0aW5nLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHN0clxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0Zm9ybWF0UmVhc29uRm9yTG9nOiAoc3RyKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRzdHJcblx0XHRcdFx0XHQvLyBoYW5kbGUgbGluZSBicmVha3MsIHdoaWNoIG90aGVyd2lzZSBicmVhayBudW1iZXJpbmdcblx0XHRcdFx0XHQucmVwbGFjZSgvXFxuKy9nLCAne3twYn19Jylcblx0XHRcdFx0XHQvLyBwdXQgYW4gZXh0cmEgIyBpbiBmcm9udCBiZWZvcmUgYnVsbGV0ZWQgb3IgbnVtYmVyZWQgbGlzdCBpdGVtc1xuXHRcdFx0XHRcdC5yZXBsYWNlKC9eKCMrKS9nbSwgJyMkMScpXG5cdFx0XHRcdFx0LnJlcGxhY2UoL14oXFwqKykvZ20sICcjJDEnKVxuXHRcdFx0KTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIExpa2UgYFN0cmluZy5wcm90b3R5cGUucmVwbGFjZSgpYCwgYnV0IGVzY2FwZXMgYW55IGRvbGxhciBzaWducyBpblxuXHRcdCAqIHRoZSByZXBsYWNlbWVudCBzdHJpbmcuICBVc2VmdWwgd2hlbiB0aGUgdGhlIHJlcGxhY2VtZW50IHN0cmluZyBpc1xuXHRcdCAqIGFyYml0cmFyeSwgc3VjaCBhcyBhIHVzZXJuYW1lIG9yIGZyZWVmb3JtIHVzZXIgaW5wdXQsIGFuZCBjb3VsZFxuXHRcdCAqIGNvbnRhaW4gZG9sbGFyIHNpZ25zLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyAtIFRleHQgaW4gd2hpY2ggdG8gcmVwbGFjZS5cblx0XHQgKiBAcGFyYW0geyhzdHJpbmd8UmVnRXhwKX0gcGF0dGVyblxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSByZXBsYWNlbWVudFxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0c2FmZVJlcGxhY2U6IChzdHJpbmcsIHBhdHRlcm4sIHJlcGxhY2VtZW50KSA9PiB7XG5cdFx0XHRyZXR1cm4gc3RyaW5nLnJlcGxhY2UocGF0dGVybiwgcmVwbGFjZW1lbnQucmVwbGFjZSgvXFwkL2csICckJCQkJykpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogRGV0ZXJtaW5lIGlmIHRoZSB1c2VyLXByb3ZpZGVkIGV4cGlyYXRpb24gd2lsbCBiZSBjb25zaWRlcmVkIGFuXG5cdFx0ICogaW5maW5pdGUtbGVuZ3RoIGJ5IE1XLlxuXHRcdCAqXG5cdFx0ICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9waGFicmljYXRvci53aWtpbWVkaWEub3JnL1Q2ODY0Nn1cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBleHBpcnlcblx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0XHQgKi9cblx0XHRpc0luZmluaXR5OiAoZXhwaXJ5KSA9PiB7XG5cdFx0XHRyZXR1cm4gWydpbmRlZmluaXRlJywgJ2luZmluaXR5JywgJ2luZmluaXRlJywgJ25ldmVyJ10uaW5jbHVkZXMoZXhwaXJ5KTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEVzY2FwZXMgYSBzdHJpbmcgdG8gYmUgdXNlZCBpbiBhIFJlZ0V4cCwgcmVwbGFjaW5nIHNwYWNlcyBhbmRcblx0XHQgKiB1bmRlcnNjb3JlcyB3aXRoIGBbXyBdYCBhcyB0aGV5IGFyZSBvZnRlbiBlcXVpdmFsZW50LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBTdHJpbmcgdG8gYmUgZXNjYXBlZC5cblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfSAtIFRoZSBlc2NhcGVkIHRleHQuXG5cdFx0ICovXG5cdFx0ZXNjYXBlUmVnRXhwOiAodGV4dCkgPT4ge1xuXHRcdFx0cmV0dXJuIG13LnV0aWwuZXNjYXBlUmVnRXhwKHRleHQpLnJlcGxhY2UoLyB8Xy9nLCAnW18gXScpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogZm9ybWF0VGltZVxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHsqfSB0aW1lIFRoZSBzdHJpbmcgdG8gZm9yYW10XG5cdFx0ICogQHJldHVybnMge3N0cmluZ31cblx0XHQgKi9cblx0XHRmb3JtYXRUaW1lOiAodGltZSkgPT4ge1xuXHRcdFx0bGV0IG07XG5cdFx0XHRpZiAoKG0gPSB0aW1lLm1hdGNoKC9eXFxzKihcXGQrKVxccypzZWMob25kKT9zP1xccyokLykpICE9PSBudWxsKSB7XG5cdFx0XHRcdHJldHVybiBgJHttWzFdfeenkmA7XG5cdFx0XHR9XG5cdFx0XHRpZiAoKG0gPSB0aW1lLm1hdGNoKC9eXFxzKihcXGQrKVxccyptaW4odXRlKT9zP1xccyokLykpICE9PSBudWxsKSB7XG5cdFx0XHRcdHJldHVybiBgJHttWzFdfeWIhmA7XG5cdFx0XHR9XG5cdFx0XHRpZiAoKG0gPSB0aW1lLm1hdGNoKC9eXFxzKihcXGQrKVxccypob3Vycz9cXHMqJC8pKSAhPT0gbnVsbCkge1xuXHRcdFx0XHRyZXR1cm4gbVsxXSArIHdpbmRvdy53Z1VMUygn5bCP5pe2JywgJ+Wwj+aZgicpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKChtID0gdGltZS5tYXRjaCgvXlxccyooXFxkKylcXHMqZGF5cz9cXHMqJC8pKSAhPT0gbnVsbCkge1xuXHRcdFx0XHRyZXR1cm4gYCR7bVsxXX3lpKlgO1xuXHRcdFx0fVxuXHRcdFx0aWYgKChtID0gdGltZS5tYXRjaCgvXlxccyooXFxkKylcXHMqd2Vla3M/XFxzKiQvKSkgIT09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuIG1bMV0gKyB3aW5kb3cud2dVTFMoJ+WRqCcsICfpgLEnKTtcblx0XHRcdH1cblx0XHRcdGlmICgobSA9IHRpbWUubWF0Y2goL15cXHMqKFxcZCspXFxzKm1vbnRocz9cXHMqJC8pKSAhPT0gbnVsbCkge1xuXHRcdFx0XHRyZXR1cm4gbVsxXSArIHdpbmRvdy53Z1VMUygn5Liq5pyIJywgJ+WAi+aciCcpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKChtID0gdGltZS5tYXRjaCgvXlxccyooXFxkKylcXHMqeWVhcnM/XFxzKiQvKSkgIT09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuIGAke21bMV195bm0YDtcblx0XHRcdH1cblx0XHRcdGlmIChNb3JlYml0cy5zdHJpbmcuaXNJbmZpbml0eSh0aW1lLnRyaW0oKSkpIHtcblx0XHRcdFx0cmV0dXJuIHdpbmRvdy53Z1VMUygn5peg6ZmQ5pyfJywgJ+eEoemZkOacnycpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRpbWU7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBBcHBlbmQgcHVuY3R1YXRpb24gdG8gYSBzdHJpbmcgd2hlbiBpdCdzIG1pc3Npbmdcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gcHVuY3R1YXRpb25cblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdGFwcGVuZFB1bmN0dWF0aW9uOiAoc3RyLCBwdW5jdHVhdGlvbikgPT4ge1xuXHRcdFx0aWYgKHB1bmN0dWF0aW9uID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0cHVuY3R1YXRpb24gPSAn44CCJztcblx0XHRcdH1cblx0XHRcdGlmIChzdHIuc2VhcmNoKC9bLj8hO+OAgu+8n++8ge+8m10kLykgPT09IC0xKSB7XG5cdFx0XHRcdHN0ciArPSBwdW5jdHVhdGlvbjtcblx0XHRcdH1cblx0XHRcdHJldHVybiBzdHI7XG5cdFx0fSxcblx0fTtcblx0LyoqXG5cdCAqIEhlbHBlciBmdW5jdGlvbnMgdG8gbWFuaXB1bGF0ZSBhcnJheXMuXG5cdCAqXG5cdCAqIEBuYW1lc3BhY2UgTW9yZWJpdHMuYXJyYXlcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzXG5cdCAqL1xuXHRNb3JlYml0cy5hcnJheSA9IHtcblx0XHQvKipcblx0XHQgKiBSZW1vdmUgZHVwbGljYXRlZCBpdGVtcyBmcm9tIGFuIGFycmF5LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtBcnJheX0gYXJyXG5cdFx0ICogQHJldHVybnMge0FycmF5fSBBIGNvcHkgb2YgdGhlIGFycmF5IHdpdGggZHVwbGljYXRlcyByZW1vdmVkLlxuXHRcdCAqIEB0aHJvd3MgV2hlbiBwcm92aWRlZCBhIG5vbi1hcnJheS5cblx0XHQgKi9cblx0XHR1bmlxOiAoYXJyKSA9PiB7XG5cdFx0XHRpZiAoIUFycmF5LmlzQXJyYXkoYXJyKSkge1xuXHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdBIG5vbi1hcnJheSBvYmplY3QgcGFzc2VkIHRvIE1vcmViaXRzLmFycmF5LnVuaXEnKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBhcnIuZmlsdGVyKChpdGVtLCBpZHgpID0+IHtcblx0XHRcdFx0cmV0dXJuIGFyci5pbmRleE9mKGl0ZW0pID09PSBpZHg7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIFJlbW92ZSBub24tZHVwbGljYXRlZCBpdGVtcyBmcm9tIGFuIGFycmF5LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtBcnJheX0gYXJyXG5cdFx0ICogQHJldHVybnMge0FycmF5fSBBIGNvcHkgb2YgdGhlIGFycmF5IHdpdGggdGhlIGZpcnN0IGluc3RhbmNlIG9mIGVhY2ggdmFsdWVcblx0XHQgKiByZW1vdmVkOyBzdWJzZXF1ZW50IGluc3RhbmNlcyBvZiB0aG9zZSB2YWx1ZXMgKGR1cGxpY2F0ZXMpIHJlbWFpbi5cblx0XHQgKiBAdGhyb3dzIFdoZW4gcHJvdmlkZWQgYSBub24tYXJyYXkuXG5cdFx0ICovXG5cdFx0ZHVwczogKGFycikgPT4ge1xuXHRcdFx0aWYgKCFBcnJheS5pc0FycmF5KGFycikpIHtcblx0XHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQSBub24tYXJyYXkgb2JqZWN0IHBhc3NlZCB0byBNb3JlYml0cy5hcnJheS5kdXBzJyk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gYXJyLmZpbHRlcigoaXRlbSwgaWR4KSA9PiB7XG5cdFx0XHRcdHJldHVybiBhcnIuaW5kZXhPZihpdGVtKSAhPT0gaWR4O1xuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBCcmVhayB1cCBhbiBhcnJheSBpbnRvIHNtYWxsZXIgYXJyYXlzLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtBcnJheX0gYXJyXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IHNpemUgLSBTaXplIG9mIGVhY2ggY2h1bmsgKGV4Y2VwdCB0aGUgbGFzdCwgd2hpY2ggY291bGQgYmUgZGlmZmVyZW50KS5cblx0XHQgKiBAcmV0dXJucyB7QXJyYXlbXX0gQW4gYXJyYXkgY29udGFpbmluZyB0aGUgc21hbGxlciwgY2h1bmtlZCBhcnJheXMuXG5cdFx0ICogQHRocm93cyBXaGVuIHByb3ZpZGVkIGEgbm9uLWFycmF5LlxuXHRcdCAqL1xuXHRcdGNodW5rOiAoYXJyLCBzaXplKSA9PiB7XG5cdFx0XHRpZiAoIUFycmF5LmlzQXJyYXkoYXJyKSkge1xuXHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdBIG5vbi1hcnJheSBvYmplY3QgcGFzc2VkIHRvIE1vcmViaXRzLmFycmF5LmNodW5rJyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodHlwZW9mIHNpemUgIT09ICdudW1iZXInIHx8IHNpemUgPD0gMCkge1xuXHRcdFx0XHQvLyBwcmV0dHkgaW1wb3NzaWJsZSB0byBkbyBhbnl0aGluZyA6KVxuXHRcdFx0XHRyZXR1cm4gW2Fycl07IC8vIHdlIHJldHVybiBhbiBhcnJheSBjb25zaXN0aW5nIG9mIHRoaXMgYXJyYXkuXG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IG51bUNodW5rcyA9IE1hdGguY2VpbChhcnIubGVuZ3RoIC8gc2l6ZSk7XG5cdFx0XHRjb25zdCByZXN1bHQgPSBBcnJheS5mcm9tKHtcblx0XHRcdFx0bGVuZ3RoOiBudW1DaHVua3MsXG5cdFx0XHR9KTtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ2h1bmtzOyBpKyspIHtcblx0XHRcdFx0cmVzdWx0W2ldID0gYXJyLnNsaWNlKGkgKiBzaXplLCAoaSArIDEpICogc2l6ZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH0sXG5cdH07XG5cdC8qKlxuXHQgKiBVdGlsaXRpZXMgdG8gZW5oYW5jZSBzZWxlY3QyIG1lbnVzLiBTZWUgdHdpbmtsZXdhcm4sIHR3aW5rbGVibG9ja1xuXHQgKiBmb3Igc2FtcGxlIHVzYWdlcy5cblx0ICpcblx0ICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9zZWxlY3QyLm9yZy99XG5cdCAqXG5cdCAqIEBuYW1lc3BhY2UgTW9yZWJpdHMuc2VsZWN0MlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHNcblx0ICogQHJlcXVpcmVzIGpxdWVyeS5zZWxlY3QyXG5cdCAqL1xuXHRNb3JlYml0cy5zZWxlY3QyID0ge1xuXHRcdG1hdGNoZXJzOiB7XG5cdFx0XHQvKipcblx0XHRcdCAqIEN1c3RvbSBtYXRjaGVyIGluIHdoaWNoIGlmIHRoZSBvcHRncm91cCBuYW1lIG1hdGNoZXMsIGFsbCBvcHRpb25zIGluIHRoYXRcblx0XHRcdCAqIGdyb3VwIGFyZSBzaG93biwgbGlrZSBpbiBqcXVlcnkuY2hvc2VuLlxuXHRcdFx0ICpcblx0XHRcdCAqIEBwYXJhbSB7Kn0gcGFyYW1zXG5cdFx0XHQgKiBAcGFyYW0geyp9IGRhdGFcblx0XHRcdCAqL1xuXHRcdFx0b3B0Z3JvdXBGdWxsOiAocGFyYW1zLCBkYXRhKSA9PiB7XG5cdFx0XHRcdGNvbnN0IG9yaWdpbmFsTWF0Y2hlciA9ICQuZm4uc2VsZWN0Mi5kZWZhdWx0cy5kZWZhdWx0cy5tYXRjaGVyO1xuXHRcdFx0XHRjb25zdCByZXN1bHQgPSBvcmlnaW5hbE1hdGNoZXIocGFyYW1zLCBkYXRhKTtcblx0XHRcdFx0aWYgKHJlc3VsdCAmJiBwYXJhbXMudGVybSAmJiBkYXRhLnRleHQudG9VcHBlckNhc2UoKS5pbmNsdWRlcyhwYXJhbXMudGVybS50b1VwcGVyQ2FzZSgpKSkge1xuXHRcdFx0XHRcdHJlc3VsdC5jaGlsZHJlbiA9IGRhdGEuY2hpbGRyZW47XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdH0sXG5cdFx0XHQvKipcblx0XHRcdCAqIEN1c3RvbSBtYXRjaGVyIHRoYXQgbWF0Y2hlcyBmcm9tIHRoZSBiZWdpbm5pbmcgb2Ygd29yZHMgb25seS5cblx0XHRcdCAqXG5cdFx0XHQgKiBAcGFyYW0geyp9IHBhcmFtc1xuXHRcdFx0ICogQHBhcmFtIHsqfSBkYXRhXG5cdFx0XHQgKi9cblx0XHRcdHdvcmRCZWdpbm5pbmc6IChwYXJhbXMsIGRhdGEpID0+IHtcblx0XHRcdFx0Y29uc3Qgb3JpZ2luYWxNYXRjaGVyID0gJC5mbi5zZWxlY3QyLmRlZmF1bHRzLmRlZmF1bHRzLm1hdGNoZXI7XG5cdFx0XHRcdGNvbnN0IHJlc3VsdCA9IG9yaWdpbmFsTWF0Y2hlcihwYXJhbXMsIGRhdGEpO1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0IXBhcmFtcy50ZXJtIHx8XG5cdFx0XHRcdFx0KHJlc3VsdCAmJiBuZXcgUmVnRXhwKGBcXFxcYiR7bXcudXRpbC5lc2NhcGVSZWdFeHAocGFyYW1zLnRlcm0pfWAsICdpJykudGVzdChyZXN1bHQudGV4dCkpXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogVW5kZXJsaW5lIG1hdGNoZWQgcGFydCBvZiBvcHRpb25zLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHsqfSBkYXRhXG5cdFx0ICovXG5cdFx0aGlnaGxpZ2h0U2VhcmNoTWF0Y2hlczogKGRhdGEpID0+IHtcblx0XHRcdGNvbnN0IHNlYXJjaFRlcm0gPSBNb3JlYml0cy5zZWxlY3QyU2VhcmNoUXVlcnk7XG5cdFx0XHRpZiAoIXNlYXJjaFRlcm0gfHwgZGF0YS5sb2FkaW5nKSB7XG5cdFx0XHRcdHJldHVybiBkYXRhLnRleHQ7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBpZHggPSBkYXRhLnRleHQudG9VcHBlckNhc2UoKS5pbmRleE9mKHNlYXJjaFRlcm0udG9VcHBlckNhc2UoKSk7XG5cdFx0XHRpZiAoaWR4ID09PSAtMSkge1xuXHRcdFx0XHRyZXR1cm4gZGF0YS50ZXh0O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuICQoJzxzcGFuPicpLmFwcGVuZChcblx0XHRcdFx0ZGF0YS50ZXh0LnNsaWNlKDAsIGlkeCksXG5cdFx0XHRcdCQoJzxzcGFuPicpXG5cdFx0XHRcdFx0LmNzcygndGV4dC1kZWNvcmF0aW9uJywgJ3VuZGVybGluZScpXG5cdFx0XHRcdFx0LnRleHQoZGF0YS50ZXh0LnNsaWNlKGlkeCwgaWR4ICsgc2VhcmNoVGVybS5sZW5ndGgpKSxcblx0XHRcdFx0ZGF0YS50ZXh0LnNsaWNlKGlkeCArIHNlYXJjaFRlcm0ubGVuZ3RoKVxuXHRcdFx0KTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEludGVyY2VwdCBxdWVyeSBhcyBpdCBpcyBoYXBwZW5pbmcsIGZvciB1c2UgaW4gaGlnaGxpZ2h0U2VhcmNoTWF0Y2hlcy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7Kn0gcGFyYW1zXG5cdFx0ICovXG5cdFx0cXVlcnlJbnRlcmNlcHRvcjogKHBhcmFtcykgPT4ge1xuXHRcdFx0TW9yZWJpdHMuc2VsZWN0MlNlYXJjaFF1ZXJ5ID0gcGFyYW1zICYmIHBhcmFtcy50ZXJtO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogT3BlbiBkcm9wZG93biBhbmQgYmVnaW4gc2VhcmNoIHdoZW4gdGhlIGAuc2VsZWN0Mi1zZWxlY3Rpb25gIGhhc1xuXHRcdCAqIGZvY3VzIGFuZCBhIGtleSBpcyBwcmVzc2VkLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtLZXlib2FyZEV2ZW50fSBldlxuXHRcdCAqIEBzZWUge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9zZWxlY3QyL3NlbGVjdDIvaXNzdWVzLzMyNzkjaXNzdWVjb21tZW50LTQ0MjUyNDE0N31cblx0XHQgKi9cblx0XHRhdXRvU3RhcnQ6IChldikgPT4ge1xuXHRcdFx0aWYgKGV2LndoaWNoIDwgNDgpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0bGV0IHRhcmdldCA9ICQoZXYudGFyZ2V0KS5jbG9zZXN0KCcuc2VsZWN0Mi1jb250YWluZXInKTtcblx0XHRcdGlmICghdGFyZ2V0Lmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR0YXJnZXQgPSB0YXJnZXQucHJldigpO1xuXHRcdFx0dGFyZ2V0LnNlbGVjdDIoJ29wZW4nKTtcblx0XHRcdGNvbnN0IHNlYXJjaCA9IHRhcmdldC5kYXRhKCdzZWxlY3QyJykuZHJvcGRvd24uJHNlYXJjaCB8fCB0YXJnZXQuZGF0YSgnc2VsZWN0MicpLnNlbGVjdGlvbi4kc2VhcmNoO1xuXHRcdFx0Ly8gVXNlIERPTSAuZm9jdXMoKSB0byB3b3JrIGFyb3VuZCBhIGpRdWVyeSAzLjYuMCByZWdyZXNzaW9uIChodHRwczovL2dpdGh1Yi5jb20vc2VsZWN0Mi9zZWxlY3QyL2lzc3Vlcy81OTkzKVxuXHRcdFx0c2VhcmNoWzBdLmZvY3VzKCk7XG5cdFx0fSxcblx0fTtcblx0LyoqXG5cdCAqIFRlbXBvcmFyaWx5IGhpZGUgYSBwYXJ0IG9mIGEgc3RyaW5nIHdoaWxlIHByb2Nlc3NpbmcgdGhlIHJlc3Qgb2YgaXQuXG5cdCAqIFVzZWQgYnkge0BsaW5rIE1vcmViaXRzLndpa2l0ZXh0LnBhZ2UjY29tbWVudE91dEltYWdlfE1vcmViaXRzLndpa2l0ZXh0LnBhZ2UuY29tbWVudE91dEltYWdlfS5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzXG5cdCAqIEBjbGFzc1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIC0gVGhlIGluaXRpYWwgdGV4dCB0byBwcm9jZXNzLlxuXHQgKiBAZXhhbXBsZSBjb25zdCB1ID0gbmV3IE1vcmViaXRzLnVuYmluZGVyKCdIZWxsbyB3b3JsZCA8IS0tIHdvcmxkIC0tPiB3b3JsZCcpO1xuXHQgKiB1LnVuYmluZCgnPCEtLScsICctLT4nKTsgLy8gdGV4dCBpbnNpZGUgY29tbWVudCByZW1haW5zIGludGFjdFxuXHQgKiB1LmNvbnRlbnQgPSB1LmNvbnRlbnQucmVwbGFjZSgvd29ybGQvZywgJ2VhcnRoJyk7XG5cdCAqIHUucmViaW5kKCk7IC8vIGdpdmVzICdIZWxsbyBlYXJ0aCA8IS0tIHdvcmxkIC0tPiBlYXJ0aCdcblx0ICovXG5cdE1vcmViaXRzLnVuYmluZGVyID0gZnVuY3Rpb24gKHN0cmluZykge1xuXHRcdGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignbm90IGEgc3RyaW5nJyk7XG5cdFx0fVxuXHRcdC8qKiBUaGUgdGV4dCBiZWluZyBwcm9jZXNzZWQuICovXG5cdFx0dGhpcy5jb250ZW50ID0gc3RyaW5nO1xuXHRcdHRoaXMuY291bnRlciA9IDA7XG5cdFx0dGhpcy5oaXN0b3J5ID0ge307XG5cdFx0dGhpcy5wcmVmaXggPSBgJVVOSVE6OiR7TWF0aC5yYW5kb20oKX06OmA7XG5cdFx0dGhpcy5wb3N0Zml4ID0gJzo6VU5JUSUnO1xuXHR9O1xuXHRNb3JlYml0cy51bmJpbmRlci5wcm90b3R5cGUgPSB7XG5cdFx0LyoqXG5cdFx0ICogSGlkZSB0aGUgcmVnaW9uIGVuY2Fwc3VsYXRlZCBieSB0aGUgYHByZWZpeGAgYW5kIGBwb3N0Zml4YCBmcm9tXG5cdFx0ICogc3RyaW5nIHByb2Nlc3NpbmcuICBgcHJlZml4YCBhbmQgYHBvc3RmaXhgIHdpbGwgYmUgdXNlZCBpbiBhXG5cdFx0ICogUmVnRXhwLCBzbyBpdGVtcyB0aGF0IG5lZWQgZXNjYXBpbmcgc2hvdWxkIGJlIHVzZSBgXFxcXGAuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gcHJlZml4XG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHBvc3RmaXhcblx0XHQgKiBAdGhyb3dzIElmIGVpdGhlciBgcHJlZml4YCBvciBgcG9zdGZpeGAgaXMgbWlzc2luZy5cblx0XHQgKi9cblx0XHR1bmJpbmQocHJlZml4LCBwb3N0Zml4KSB7XG5cdFx0XHRpZiAoIXByZWZpeCB8fCAhcG9zdGZpeCkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0JvdGggcHJlZml4IGFuZCBwb3N0Zml4IG11c3QgYmUgcHJvdmlkZWQnKTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHJlID0gbmV3IFJlZ0V4cChgJHtwcmVmaXh9KFtcXFxcc1xcXFxTXSo/KSR7cG9zdGZpeH1gLCAnZycpO1xuXHRcdFx0dGhpcy5jb250ZW50ID0gdGhpcy5jb250ZW50LnJlcGxhY2UocmUsIE1vcmViaXRzLnVuYmluZGVyLmdldENhbGxiYWNrKHRoaXMpKTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIFJlc3RvcmUgdGhlIGhpZGRlbiBwb3J0aW9uIG9mIHRoZSBgY29udGVudGAgc3RyaW5nLlxuXHRcdCAqXG5cdFx0ICogQHJldHVybnMge3N0cmluZ30gVGhlIHByb2Nlc3NlZCBvdXRwdXQuXG5cdFx0ICovXG5cdFx0cmViaW5kKCkge1xuXHRcdFx0bGV0IHtjb250ZW50fSA9IHRoaXM7XG5cdFx0XHRmb3IgKGNvbnN0IGN1cnJlbnQgaW4gdGhpcy5oaXN0b3J5KSB7XG5cdFx0XHRcdGlmICghT2JqZWN0Lmhhc093bih0aGlzLmhpc3RvcnksIGN1cnJlbnQpKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29udGVudCA9IGNvbnRlbnQucmVwbGFjZShjdXJyZW50LCB0aGlzLmhpc3RvcnlbY3VycmVudF0pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0fSxcblx0XHRwcmVmaXg6IG51bGwsXG5cdFx0Ly8gJVVOSVE6OjAuNTk1NTk4MTY0NDkzODMyNDo6XG5cdFx0cG9zdGZpeDogbnVsbCxcblx0XHQvLyA6OlVOSVElXG5cdFx0Y29udGVudDogbnVsbCxcblx0XHQvLyBzdHJpbmdcblx0XHRjb3VudGVyOiBudWxsLFxuXHRcdC8vIDArK1xuXHRcdGhpc3Rvcnk6IG51bGwsIC8vIHt9XG5cdH07XG5cdC8qKlxuXHQgKiBAcGFyYW0ge3R5cGVvZiBNb3JlYml0c30gc2VsZlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMudW5iaW5kZXJcblx0ICovXG5cdE1vcmViaXRzLnVuYmluZGVyLmdldENhbGxiYWNrID0gKHNlbGYpID0+IHtcblx0XHRyZXR1cm4gKG1hdGNoKSA9PiB7XG5cdFx0XHRjb25zdCBjdXJyZW50ID0gc2VsZi5wcmVmaXggKyBzZWxmLmNvdW50ZXIgKyBzZWxmLnBvc3RmaXg7XG5cdFx0XHRzZWxmLmhpc3RvcnlbY3VycmVudF0gPSBtYXRjaDtcblx0XHRcdCsrc2VsZi5jb3VudGVyO1xuXHRcdFx0cmV0dXJuIGN1cnJlbnQ7XG5cdFx0fTtcblx0fTtcblx0LyogKioqKioqKioqKioqKioqKiBNb3JlYml0cy5kYXRlICoqKioqKioqKioqKioqKiogKi9cblx0LyoqXG5cdCAqIENyZWF0ZSBhIGRhdGUgb2JqZWN0IHdpdGggZW5oYW5jZWQgcHJvY2Vzc2luZyBjYXBhYmlsaXRpZXMsIGEgbGFcblx0ICoge0BsaW5rIGh0dHBzOi8vbW9tZW50anMuY29tL3xtb21lbnQuanN9LiBNZWRpYVdpa2kgdGltZXN0YW1wIGZvcm1hdCBpcyBhbHNvXG5cdCAqIGFjY2VwdGFibGUsIGluIGFkZGl0aW9uIHRvIGV2ZXJ5dGhpbmcgdGhhdCBKUyBEYXRlKCkgYWNjZXB0cy5cblx0ICpcblx0ICogQHBhcmFtIHsuLi5hbnl9IGFyZ3Ncblx0ICogQG1lbWJlcm9mIE1vcmViaXRzXG5cdCAqIEBjbGFzc1xuXHQgKi9cblx0TW9yZWJpdHMuZGF0ZSA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XG5cdFx0Ly8gQ2hlY2sgTWVkaWFXaWtpIGZvcm1hdHNcblx0XHQvLyBNdXN0IGJlIGZpcnN0IHNpbmNlIGZpcmVmb3ggZXJyb25lb3VzbHkgYWNjZXB0cyB0aGUgdGltZXN0YW1wXG5cdFx0Ly8gZm9ybWF0LCBzYW5zIHRpbWV6b25lIChTZWUgYWxzbzogIzkyMSwgIzkzNiwgIzExNzQsICMxMTg3KSwgYW5kIHRoZVxuXHRcdC8vIDE0LWRpZ2l0IHN0cmluZyB3aWxsIGJlIGludGVycHJldGVkIGRpZmZlcmVudGx5LlxuXHRcdGlmIChhcmdzLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0Y29uc3QgW3BhcmFtXSA9IGFyZ3M7XG5cdFx0XHRpZiAoL15cXGR7MTR9JC8udGVzdChwYXJhbSkpIHtcblx0XHRcdFx0Ly8gWVlZWU1NRERISG1tc3Ncblx0XHRcdFx0Y29uc3QgZGlnaXRNYXRjaCA9IC8oXFxkezR9KShcXGR7Mn0pKFxcZHsyfSkoXFxkezJ9KShcXGR7Mn0pKFxcZHsyfSkvLmV4ZWMocGFyYW0pO1xuXHRcdFx0XHRpZiAoZGlnaXRNYXRjaCkge1xuXHRcdFx0XHRcdC8vIC4uLi4uIHllYXIgLi4uIG1vbnRoIC4uIGRhdGUgLi4uIGhvdXIgLi4uLiBtaW51dGUgLi4uLi4gc2Vjb25kXG5cdFx0XHRcdFx0dGhpcy5fZCA9IG5ldyBEYXRlKFxuXHRcdFx0XHRcdFx0UmVmbGVjdC5hcHBseShEYXRlLlVUQywgbnVsbCwgW1xuXHRcdFx0XHRcdFx0XHRkaWdpdE1hdGNoWzFdLFxuXHRcdFx0XHRcdFx0XHRkaWdpdE1hdGNoWzJdIC0gMSxcblx0XHRcdFx0XHRcdFx0ZGlnaXRNYXRjaFszXSxcblx0XHRcdFx0XHRcdFx0ZGlnaXRNYXRjaFs0XSxcblx0XHRcdFx0XHRcdFx0ZGlnaXRNYXRjaFs1XSxcblx0XHRcdFx0XHRcdFx0ZGlnaXRNYXRjaFs2XSxcblx0XHRcdFx0XHRcdF0pXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdC8vIFdpa2l0ZXh0IHNpZ25hdHVyZSB0aW1lc3RhbXBcblx0XHRcdFx0Y29uc3QgZGF0ZVBhcnRzID0gTW9yZWJpdHMubDEwbi5zaWduYXR1cmVUaW1lc3RhbXBGb3JtYXQocGFyYW0pO1xuXHRcdFx0XHRpZiAoZGF0ZVBhcnRzKSB7XG5cdFx0XHRcdFx0dGhpcy5fZCA9IG5ldyBEYXRlKERhdGUuVVRDLmFwcGx5KG51bGwsIGRhdGVQYXJ0cykpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIFRyeSBzdGFuZGFyZCBkYXRlXG5cdFx0dGhpcy5fZCA/Pz0gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShEYXRlLCBbRGF0ZSwgLi4uZ2VuZXJhdGVBcnJheShhcmdzKV0pKSgpO1xuXHRcdC8vIFN0aWxsIG5vP1xuXHRcdGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcblx0XHRcdG13LmxvZy53YXJuKCdJbnZhbGlkIE1vcmViaXRzLmRhdGUgaW5pdGlhbGlzYXRpb246JywgYXJncyk7XG5cdFx0fVxuXHR9O1xuXHQvKipcblx0ICogTG9jYWxpemVkIHN0cmluZ3MgZm9yIGRhdGUgcHJvY2Vzc2luZy5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLmRhdGVcblx0ICogQHR5cGUge29iamVjdC48c3RyaW5nLCBzdHJpbmc+fVxuXHQgKiBAcHJvcGVydHkge3N0cmluZ1tdfSBtb250aHNcblx0ICogQHByb3BlcnR5IHtzdHJpbmdbXX0gbW9udGhzU2hvcnRcblx0ICogQHByb3BlcnR5IHtzdHJpbmdbXX0gZGF5c1xuXHQgKiBAcHJvcGVydHkge3N0cmluZ1tdfSBkYXlzU2hvcnRcblx0ICogQHByb3BlcnR5IHtvYmplY3QuPHN0cmluZywgc3RyaW5nPn0gcmVsYXRpdmVUaW1lc1xuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0TW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhID0ge1xuXHRcdC8vIG1lc3NhZ2UgbmFtZXMgaGVyZSBjb3JyZXNwb25kIHRvIE1lZGlhV2lraSBtZXNzYWdlIG5hbWVzXG5cdFx0Ly8gTm8gaTE4biBhdCB0aGlzIHRpbWVcblx0XHRtb250aHM6IFsnMeaciCcsICcy5pyIJywgJzPmnIgnLCAnNOaciCcsICc15pyIJywgJzbmnIgnLCAnN+aciCcsICc45pyIJywgJznmnIgnLCAnMTDmnIgnLCAnMTHmnIgnLCAnMTLmnIgnXSxcblx0XHRtb250aHNTaG9ydDogWycx5pyIJywgJzLmnIgnLCAnM+aciCcsICc05pyIJywgJzXmnIgnLCAnNuaciCcsICc35pyIJywgJzjmnIgnLCAnOeaciCcsICcxMOaciCcsICcxMeaciCcsICcxMuaciCddLFxuXHRcdGRheXM6IFsn5pif5pyf5pelJywgJ+aYn+acn+S4gCcsICfmmJ/mnJ/kuownLCAn5pif5pyf5LiJJywgJ+aYn+acn+WbmycsICfmmJ/mnJ/kupQnLCAn5pif5pyf5YWtJ10sXG5cdFx0ZGF5c1Nob3J0OiBbJ+aXpScsICfkuIAnLCAn5LqMJywgJ+S4iScsICflm5snLCAn5LqUJywgJ+WFrSddLFxuXHRcdHJlbGF0aXZlVGltZXM6IHtcblx0XHRcdHRoaXNEYXk6ICdb5LuK5aSpXUEgaGg6bW0nLFxuXHRcdFx0cHJldkRheTogJ1vmmKjlpKldQSBoaDptbScsXG5cdFx0XHRuZXh0RGF5OiAnW+aYjuWkqV1BIGhoOm1tJyxcblx0XHRcdHRoaXNXZWVrOiAnZGRkZEEgaGg6bW0nLFxuXHRcdFx0cGFzdFdlZWs6ICdb5LiKXWRkZGRBIGhoOm1tJyxcblx0XHRcdG90aGVyOiAnWVlZWS1NTS1ERCcsXG5cdFx0fSxcblx0fTtcblx0LyoqXG5cdCAqIE1hcCB1bml0cyB3aXRoIGdldHRlci9zZXR0ZXIgZnVuY3Rpb24gbmFtZXMsIGZvciBgYWRkYCBhbmQgYHN1YnRyYWN0YFxuXHQgKiBtZXRob2RzLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMuZGF0ZVxuXHQgKiBAdHlwZSB7b2JqZWN0LjxzdHJpbmcsIHN0cmluZz59XG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBzZWNvbmRzXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBtaW51dGVzXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBob3Vyc1xuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gZGF5c1xuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gd2Vla3Ncblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IG1vbnRoc1xuXHQgKiBAcHJvcGVydHkge3N0cmluZ30geWVhcnNcblx0ICovXG5cdE1vcmViaXRzLmRhdGUudW5pdE1hcCA9IHtcblx0XHRzZWNvbmRzOiAnU2Vjb25kcycsXG5cdFx0bWludXRlczogJ01pbnV0ZXMnLFxuXHRcdGhvdXJzOiAnSG91cnMnLFxuXHRcdGRheXM6ICdEYXRlJyxcblx0XHR3ZWVrczogJ1dlZWsnLFxuXHRcdC8vIE5vdCBhIGZ1bmN0aW9uIGJ1dCBoYW5kbGVkIGluIGBhZGRgIHRocm91Z2ggY3VubmluZyB1c2Ugb2YgbXVsdGlwbGljYXRpb25cblx0XHRtb250aHM6ICdNb250aCcsXG5cdFx0eWVhcnM6ICdGdWxsWWVhcicsXG5cdH07XG5cdE1vcmViaXRzLmRhdGUucHJvdG90eXBlID0ge1xuXHRcdC8qKiBAcmV0dXJucyB7Ym9vbGVhbn0gKi9cblx0XHRpc1ZhbGlkKCkge1xuXHRcdFx0cmV0dXJuICFOdW1iZXIuaXNOYU4odGhpcy5nZXRUaW1lKCkpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHsoRGF0ZXxNb3JlYml0cy5kYXRlKX0gZGF0ZVxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHRcdCAqL1xuXHRcdGlzQmVmb3JlKGRhdGUpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRpbWUoKSA8IGRhdGUuZ2V0VGltZSgpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHsoRGF0ZXxNb3JlYml0cy5kYXRlKX0gZGF0ZVxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHRcdCAqL1xuXHRcdGlzQWZ0ZXIoZGF0ZSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VGltZSgpID4gZGF0ZS5nZXRUaW1lKCk7XG5cdFx0fSxcblx0XHQvKiogQHJldHVybnMge3N0cmluZ30gKi9cblx0XHRnZXRVVENNb250aE5hbWUoKSB7XG5cdFx0XHRyZXR1cm4gTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLm1vbnRoc1t0aGlzLmdldFVUQ01vbnRoKCldO1xuXHRcdH0sXG5cdFx0LyoqIEByZXR1cm5zIHtzdHJpbmd9ICovXG5cdFx0Z2V0VVRDTW9udGhOYW1lQWJicmV2KCkge1xuXHRcdFx0cmV0dXJuIE1vcmViaXRzLmRhdGUubG9jYWxlRGF0YS5tb250aHNTaG9ydFt0aGlzLmdldFVUQ01vbnRoKCldO1xuXHRcdH0sXG5cdFx0LyoqIEByZXR1cm5zIHtzdHJpbmd9ICovXG5cdFx0Z2V0TW9udGhOYW1lKCkge1xuXHRcdFx0cmV0dXJuIE1vcmViaXRzLmRhdGUubG9jYWxlRGF0YS5tb250aHNbdGhpcy5nZXRNb250aCgpXTtcblx0XHR9LFxuXHRcdC8qKiBAcmV0dXJucyB7c3RyaW5nfSAqL1xuXHRcdGdldE1vbnRoTmFtZUFiYnJldigpIHtcblx0XHRcdHJldHVybiBNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEubW9udGhzU2hvcnRbdGhpcy5nZXRNb250aCgpXTtcblx0XHR9LFxuXHRcdC8qKiBAcmV0dXJucyB7c3RyaW5nfSAqL1xuXHRcdGdldFVUQ0RheU5hbWUoKSB7XG5cdFx0XHRyZXR1cm4gTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLmRheXNbdGhpcy5nZXRVVENEYXkoKV07XG5cdFx0fSxcblx0XHQvKiogQHJldHVybnMge3N0cmluZ30gKi9cblx0XHRnZXRVVENEYXlOYW1lQWJicmV2KCkge1xuXHRcdFx0cmV0dXJuIE1vcmViaXRzLmRhdGUubG9jYWxlRGF0YS5kYXlzU2hvcnRbdGhpcy5nZXRVVENEYXkoKV07XG5cdFx0fSxcblx0XHQvKiogQHJldHVybnMge3N0cmluZ30gKi9cblx0XHRnZXREYXlOYW1lKCkge1xuXHRcdFx0cmV0dXJuIE1vcmViaXRzLmRhdGUubG9jYWxlRGF0YS5kYXlzW3RoaXMuZ2V0RGF5KCldO1xuXHRcdH0sXG5cdFx0LyoqIEByZXR1cm5zIHtzdHJpbmd9ICovXG5cdFx0Z2V0RGF5TmFtZUFiYnJldigpIHtcblx0XHRcdHJldHVybiBNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEuZGF5c1Nob3J0W3RoaXMuZ2V0RGF5KCldO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogQWRkIGEgZ2l2ZW4gbnVtYmVyIG9mIG1pbnV0ZXMsIGhvdXJzLCBkYXlzLCB3ZWVrcywgbW9udGhzLCBvciB5ZWFycyB0byB0aGUgZGF0ZS5cblx0XHQgKiBUaGlzIGlzIGRvbmUgaW4tcGxhY2UuIFRoZSBtb2RpZmllZCBkYXRlIG9iamVjdCBpcyBhbHNvIHJldHVybmVkLCBhbGxvd2luZyBjaGFpbmluZy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXIgLSBTaG91bGQgYmUgYW4gaW50ZWdlci5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gdW5pdFxuXHRcdCAqIEB0aHJvd3MgSWYgaW52YWxpZCBvciB1bnN1cHBvcnRlZCB1bml0IGlzIGdpdmVuLlxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy5kYXRlfVxuXHRcdCAqL1xuXHRcdGFkZChudW1iZXIsIHVuaXQpIHtcblx0XHRcdGxldCBudW0gPSBOdW1iZXIucGFyc2VJbnQobnVtYmVyLCAxMCk7IC8vIG5vcm1hbGl6ZVxuXHRcdFx0aWYgKE51bWJlci5pc05hTihudW0pKSB7XG5cdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYEludmFsaWQgbnVtYmVyIFwiJHtudW1iZXJ9XCIgcHJvdmlkZWQuYCk7XG5cdFx0XHR9XG5cdFx0XHR1bml0ID0gdW5pdC50b0xvd2VyQ2FzZSgpOyAvLyBub3JtYWxpemVcblx0XHRcdGNvbnN0IHt1bml0TWFwfSA9IE1vcmViaXRzLmRhdGU7XG5cdFx0XHRsZXQgdW5pdE5vcm0gPSB1bml0TWFwW3VuaXRdIHx8IHVuaXRNYXBbYCR7dW5pdH1zYF07IC8vIHNvIHRoYXQgYm90aCBzaW5ndWxhciBhbmQgIHBsdXJhbCBmb3JtcyB3b3JrXG5cdFx0XHRpZiAodW5pdE5vcm0pIHtcblx0XHRcdFx0Ly8gTm8gYnVpbHQtaW4gd2VlayBmdW5jdGlvbnMsIHNvIHJhdGhlciB0aGFuIGJ1aWxkIG91dCBJU08ncyBnZXRXZWVrL3NldFdlZWssIGp1c3QgbXVsdGlwbHlcblx0XHRcdFx0Ly8gUHJvYmFibHkgY2FuJ3QgYmUgdXNlZCBmb3IgSnVsaWFuLT5HcmVnb3JpYW4gY2hhbmdlb3ZlcnMsIGV0Yy5cblx0XHRcdFx0aWYgKHVuaXROb3JtID09PSAnV2VlaycpIHtcblx0XHRcdFx0XHR1bml0Tm9ybSA9ICdEYXRlJztcblx0XHRcdFx0XHRudW0gKj0gNztcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzW2BzZXQke3VuaXROb3JtfWBdKHRoaXNbYGdldCR7dW5pdE5vcm19YF0oKSArIG51bSk7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHVuaXQgXCIke3VuaXR9XCI6IE9ubHkgJHtPYmplY3Qua2V5cyh1bml0TWFwKS5qb2luKCcsICcpfSBhcmUgYWxsb3dlZC5gKTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIFN1YnRyYWN0cyBhIGdpdmVuIG51bWJlciBvZiBtaW51dGVzLCBob3VycywgZGF5cywgd2Vla3MsIG1vbnRocywgb3IgeWVhcnMgdG8gdGhlIGRhdGUuXG5cdFx0ICogVGhpcyBpcyBkb25lIGluLXBsYWNlLiBUaGUgbW9kaWZpZWQgZGF0ZSBvYmplY3QgaXMgYWxzbyByZXR1cm5lZCwgYWxsb3dpbmcgY2hhaW5pbmcuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyIC0gU2hvdWxkIGJlIGFuIGludGVnZXIuXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHVuaXRcblx0XHQgKiBAdGhyb3dzIElmIGludmFsaWQgb3IgdW5zdXBwb3J0ZWQgdW5pdCBpcyBnaXZlbi5cblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuZGF0ZX1cblx0XHQgKi9cblx0XHRzdWJ0cmFjdChudW1iZXIsIHVuaXQpIHtcblx0XHRcdHJldHVybiB0aGlzLmFkZCgtbnVtYmVyLCB1bml0KTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEZvcm1hdCB0aGUgZGF0ZSBpbnRvIGEgc3RyaW5nIHBlciB0aGUgZ2l2ZW4gZm9ybWF0IHN0cmluZy5cblx0XHQgKiBSZXBsYWNlbWVudCBzeW50YXggaXMgYSBzdWJzZXQgb2YgdGhhdCBpbiBtb21lbnQuanM6XG5cdFx0ICpcblx0XHQgKiB8IFN5bnRheCB8IE91dHB1dCB8XG5cdFx0ICogfC0tLS0tLS0tfC0tLS0tLS0tfFxuXHRcdCAqIHwgSCB8IEhvdXJzICgyNC1ob3VyKSB8XG5cdFx0ICogfCBISCB8IEhvdXJzICgyNC1ob3VyLCBwYWRkZWQgdG8gMiBkaWdpdHMpIHxcblx0XHQgKiB8IGggfCBIb3VycyAoMTItaG91cikgfFxuXHRcdCAqIHwgaGggfCBIb3VycyAoMTItaG91ciwgcGFkZGVkIHRvIDIgZGlnaXRzKSB8XG5cdFx0ICogfCBBIHwgQU0gb3IgUE0gfFxuXHRcdCAqIHwgbSB8IE1pbnV0ZXMgfFxuXHRcdCAqIHwgbW0gfCBNaW51dGVzIChwYWRkZWQgdG8gMiBkaWdpdHMpIHxcblx0XHQgKiB8IHMgfCBTZWNvbmRzIHxcblx0XHQgKiB8IHNzIHwgU2Vjb25kcyAocGFkZGVkIHRvIDIgZGlnaXRzKSB8XG5cdFx0ICogfCBTU1MgfCBNaWxsaXNlY29uZHMgZnJhZ21lbnQsIDMgZGlnaXRzIHxcblx0XHQgKiB8IGQgfCBEYXkgbnVtYmVyIG9mIHRoZSB3ZWVrIChTdW49MCkgfFxuXHRcdCAqIHwgZGRkIHwgQWJicmV2aWF0ZWQgZGF5IG5hbWUgfFxuXHRcdCAqIHwgZGRkZCB8IEZ1bGwgZGF5IG5hbWUgfFxuXHRcdCAqIHwgRCB8IERhdGUgfFxuXHRcdCAqIHwgREQgfCBEYXRlIChwYWRkZWQgdG8gMiBkaWdpdHMpIHxcblx0XHQgKiB8IE0gfCBNb250aCBudW1iZXIgKDEtaW5kZXhlZCkgfFxuXHRcdCAqIHwgTU0gfCBNb250aCBudW1iZXIgKDEtaW5kZXhlZCwgcGFkZGVkIHRvIDIgZGlnaXRzKSB8XG5cdFx0ICogfCBNTU0gfCBBYmJyZXZpYXRlZCBtb250aCBuYW1lIHxcblx0XHQgKiB8IE1NTU0gfCBGdWxsIG1vbnRoIG5hbWUgfFxuXHRcdCAqIHwgWSB8IFllYXIgfFxuXHRcdCAqIHwgWVkgfCBGaW5hbCB0d28gZGlnaXRzIG9mIHllYXIgKDIwIGZvciAyMDIwLCA0MiBmb3IgMTk0MikgfFxuXHRcdCAqIHwgWVlZWSB8IFllYXIgKHNhbWUgYXMgYFlgKSB8XG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gZm9ybWF0c3RyIC0gRm9ybWF0IHRoZSBkYXRlIGludG8gYSBzdHJpbmcsIHVzaW5nXG5cdFx0ICogdGhlIHJlcGxhY2VtZW50IHN5bnRheC4gIFVzZSBgW2AgYW5kIGBdYCB0byBlc2NhcGUgaXRlbXMuICBJZiBub3Rcblx0XHQgKiBwcm92aWRlZCwgd2lsbCByZXR1cm4gdGhlIElTTy04NjAxLWZvcm1hdHRlZCBzdHJpbmcuXG5cdFx0ICogQHBhcmFtIHsoc3RyaW5nfG51bWJlcil9IFt6b25lPXN5c3RlbV0gLSBgc3lzdGVtYCAoZm9yIGJyb3dzZXItZGVmYXVsdCB0aW1lIHpvbmUpLFxuXHRcdCAqIGB1dGNgLCBvciBzcGVjaWZ5IGEgdGltZSB6b25lIGFzIG51bWJlciBvZiBtaW51dGVzIHJlbGF0aXZlIHRvIFVUQy5cblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdGZvcm1hdChmb3JtYXRzdHIsIHpvbmUpIHtcblx0XHRcdGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcblx0XHRcdFx0cmV0dXJuICdJbnZhbGlkIGRhdGUnOyAvLyBQdXQgdGhlIHRydXRoIG91dCwgcHJlZmVyYWJsZSB0byBcIk5hTk5hTk5hbiBOYU46TmFOXCIgb3Igd2hhdGV2ZXJcblx0XHRcdH1cblxuXHRcdFx0bGV0IHVkYXRlID0gdGhpcztcblx0XHRcdC8vIGNyZWF0ZSBhIG5ldyBkYXRlIG9iamVjdCB0aGF0IHdpbGwgY29udGFpbiB0aGUgZGF0ZSB0byBkaXNwbGF5IGFzIHN5c3RlbSB0aW1lXG5cdFx0XHRpZiAoem9uZSA9PT0gJ3V0YycpIHtcblx0XHRcdFx0dWRhdGUgPSBuZXcgTW9yZWJpdHMuZGF0ZSh0aGlzLmdldFRpbWUoKSkuYWRkKHRoaXMuZ2V0VGltZXpvbmVPZmZzZXQoKSwgJ21pbnV0ZXMnKTtcblx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIHpvbmUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdC8vIGNvbnZlcnQgdG8gdXRjLCB0aGVuIGFkZCB0aGUgdXRjIG9mZnNldCBnaXZlblxuXHRcdFx0XHR1ZGF0ZSA9IG5ldyBNb3JlYml0cy5kYXRlKHRoaXMuZ2V0VGltZSgpKS5hZGQodGhpcy5nZXRUaW1lem9uZU9mZnNldCgpICsgem9uZSwgJ21pbnV0ZXMnKTtcblx0XHRcdH1cblx0XHRcdC8vIGRlZmF1bHQgdG8gSVNPU3RyaW5nXG5cdFx0XHRpZiAoIWZvcm1hdHN0cikge1xuXHRcdFx0XHRyZXR1cm4gdWRhdGUudG9JU09TdHJpbmcoKTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHBhZCA9IChudW0sIGxlbikgPT4ge1xuXHRcdFx0XHRsZW4gfHw9IDI7IC8vIFVwIHRvIGxlbmd0aCBvZiAwMCArIDFcblx0XHRcdFx0cmV0dXJuIGAwMCR7bnVtfWAudG9TdHJpbmcoKS5zbGljZSgwIC0gbGVuKTtcblx0XHRcdH07XG5cdFx0XHRjb25zdCBoMjQgPSB1ZGF0ZS5nZXRIb3VycygpO1xuXHRcdFx0Y29uc3QgbSA9IHVkYXRlLmdldE1pbnV0ZXMoKTtcblx0XHRcdGNvbnN0IHMgPSB1ZGF0ZS5nZXRTZWNvbmRzKCk7XG5cdFx0XHRjb25zdCBtcyA9IHVkYXRlLmdldE1pbGxpc2Vjb25kcygpO1xuXHRcdFx0Y29uc3QgRCA9IHVkYXRlLmdldERhdGUoKTtcblx0XHRcdGNvbnN0IE0gPSB1ZGF0ZS5nZXRNb250aCgpICsgMTtcblx0XHRcdGNvbnN0IFkgPSB1ZGF0ZS5nZXRGdWxsWWVhcigpO1xuXHRcdFx0Y29uc3QgaDEyID0gaDI0ICUgMTIgfHwgMTI7XG5cdFx0XHRjb25zdCBhbU9yUG0gPSBoMjQgPj0gMTIgPyAn5LiL5Y2IJyA6ICfkuIrljYgnO1xuXHRcdFx0Y29uc3QgcmVwbGFjZW1lbnRNYXAgPSB7XG5cdFx0XHRcdEhIOiBwYWQoaDI0KSxcblx0XHRcdFx0SDogaDI0LFxuXHRcdFx0XHRoaDogcGFkKGgxMiksXG5cdFx0XHRcdGg6IGgxMixcblx0XHRcdFx0QTogYW1PclBtLFxuXHRcdFx0XHRtbTogcGFkKG0pLFxuXHRcdFx0XHRtLFxuXHRcdFx0XHRzczogcGFkKHMpLFxuXHRcdFx0XHRzLFxuXHRcdFx0XHRTU1M6IHBhZChtcywgMyksXG5cdFx0XHRcdGRkZGQ6IHVkYXRlLmdldERheU5hbWUoKSxcblx0XHRcdFx0ZGRkOiB1ZGF0ZS5nZXREYXlOYW1lQWJicmV2KCksXG5cdFx0XHRcdGQ6IHVkYXRlLmdldERheSgpLFxuXHRcdFx0XHRERDogcGFkKEQpLFxuXHRcdFx0XHRELFxuXHRcdFx0XHRNTU1NOiB1ZGF0ZS5nZXRNb250aE5hbWUoKSxcblx0XHRcdFx0TU1NOiB1ZGF0ZS5nZXRNb250aE5hbWVBYmJyZXYoKSxcblx0XHRcdFx0TU06IHBhZChNKSxcblx0XHRcdFx0TSxcblx0XHRcdFx0WVlZWTogWSxcblx0XHRcdFx0WVk6IHBhZChZICUgMTAwKSxcblx0XHRcdFx0WSxcblx0XHRcdH07XG5cdFx0XHRjb25zdCB1bmJpbmRlciA9IG5ldyBNb3JlYml0cy51bmJpbmRlcihmb3JtYXRzdHIpOyAvLyBlc2NhcGUgc3R1ZmYgYmV0d2VlbiBbLi4uXVxuXHRcdFx0dW5iaW5kZXIudW5iaW5kKFN0cmluZy5yYXdgXFxbYCwgU3RyaW5nLnJhd2BcXF1gKTtcblx0XHRcdHVuYmluZGVyLmNvbnRlbnQgPSB1bmJpbmRlci5jb250ZW50LnJlcGxhY2UoXG5cdFx0XHRcdC8qIFJlZ2V4IG5vdGVzOlxuXHRcdFx0XHQgKiBkKGR7MiwzfSk/IG1hdGNoZXMgZXhhY3RseSAxLCAzIG9yIDQgb2NjdXJyZW5jZXMgb2YgJ2QnICgnZGQnIGlzIHRyZWF0ZWQgYXMgYSBkb3VibGUgbWF0Y2ggb2YgJ2QnKVxuXHRcdFx0XHQgKiBZezEsMn0oWXsyfSk/IG1hdGNoZXMgZXhhY3RseSAxLCAyIG9yIDQgb2NjdXJyZW5jZXMgb2YgJ1knXG5cdFx0XHRcdCAqL1xuXHRcdFx0XHQvSHsxLDJ9fGh7MSwyfXxtezEsMn18c3sxLDJ9fFNTU3xkKGR7MiwzfSk/fER7MSwyfXxNezEsNH18WXsxLDJ9KFl7Mn0pP3xBL2csXG5cdFx0XHRcdChtYXRjaCkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiByZXBsYWNlbWVudE1hcFttYXRjaF07XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0XHRyZXR1cm4gdW5iaW5kZXIucmViaW5kKCkucmVwbGFjZSgvXFxbKC4qPylcXF0vZywgJyQxJyk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBHaXZlcyBhIHJlYWRhYmxlIHJlbGF0aXZlIHRpbWUgc3RyaW5nIHN1Y2ggYXMgXCJZZXN0ZXJkYXkgYXQgNjo0MyBQTVwiIG9yIFwiTGFzdCBUaHVyc2RheSBhdCAxMTo0NSBBTVwiLlxuXHRcdCAqIFNpbWlsYXIgdG8gYGNhbGVuZGFyYCBpbiBtb21lbnQuanMsIGJ1dCB3aXRoIHRpbWUgem9uZSBzdXBwb3J0LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHsoc3RyaW5nfG51bWJlcil9IFt6b25lPXN5c3RlbV0gLSAnc3lzdGVtJyAoZm9yIGJyb3dzZXItZGVmYXVsdCB0aW1lIHpvbmUpLFxuXHRcdCAqICd1dGMnIChmb3IgVVRDKSwgb3Igc3BlY2lmeSBhIHRpbWUgem9uZSBhcyBudW1iZXIgb2YgbWludXRlcyBwYXN0IFVUQy5cblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdGNhbGVuZGFyKHpvbmUpIHtcblx0XHRcdC8vIFplcm8gb3V0IHRoZSBob3VycywgbWludXRlcywgc2Vjb25kcyBhbmQgbWlsbGlzZWNvbmRzIC0ga2VlcGluZyBvbmx5IHRoZSBkYXRlO1xuXHRcdFx0Ly8gZmluZCB0aGUgZGlmZmVyZW5jZS4gTm90ZSB0aGF0IHNldEhvdXJzKCkgcmV0dXJucyB0aGUgc2FtZSB0aGluZyBhcyBnZXRUaW1lKCkuXG5cdFx0XHRjb25zdCBkYXRlRGlmZiA9IChuZXcgRGF0ZSgpLnNldEhvdXJzKDAsIDAsIDAsIDApIC0gbmV3IERhdGUodGhpcykuc2V0SG91cnMoMCwgMCwgMCwgMCkpIC8gOC42NGU3O1xuXHRcdFx0c3dpdGNoICh0cnVlKSB7XG5cdFx0XHRcdGNhc2UgZGF0ZURpZmYgPT09IDA6XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuZm9ybWF0KE1vcmViaXRzLmRhdGUubG9jYWxlRGF0YS5yZWxhdGl2ZVRpbWVzLnRoaXNEYXksIHpvbmUpO1xuXHRcdFx0XHRjYXNlIGRhdGVEaWZmID09PSAxOlxuXHRcdFx0XHRcdHJldHVybiB0aGlzLmZvcm1hdChNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEucmVsYXRpdmVUaW1lcy5wcmV2RGF5LCB6b25lKTtcblx0XHRcdFx0Y2FzZSBkYXRlRGlmZiA+IDAgJiYgZGF0ZURpZmYgPCA3OlxuXHRcdFx0XHRcdHJldHVybiB0aGlzLmZvcm1hdChNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEucmVsYXRpdmVUaW1lcy5wYXN0V2Vlaywgem9uZSk7XG5cdFx0XHRcdGNhc2UgZGF0ZURpZmYgPT09IC0xOlxuXHRcdFx0XHRcdHJldHVybiB0aGlzLmZvcm1hdChNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEucmVsYXRpdmVUaW1lcy5uZXh0RGF5LCB6b25lKTtcblx0XHRcdFx0Y2FzZSBkYXRlRGlmZiA8IDAgJiYgZGF0ZURpZmYgPiAtNzpcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5mb3JtYXQoTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLnJlbGF0aXZlVGltZXMudGhpc1dlZWssIHpvbmUpO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHJldHVybiB0aGlzLmZvcm1hdChNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEucmVsYXRpdmVUaW1lcy5vdGhlciwgem9uZSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBHZXQgYSByZWd1bGFyIGV4cHJlc3Npb24gdGhhdCBtYXRjaGVzIHdpa2l0ZXh0IHNlY3Rpb24gdGl0bGVzLCBzdWNoXG5cdFx0ICogYXMgYD09RGVjZW1iZXIgMjAxOT09YCBvciBgPT09IEphbiAyMDE4ID09PWAuXG5cdFx0ICpcblx0XHQgKiBAcmV0dXJucyB7UmVnRXhwfVxuXHRcdCAqL1xuXHRcdG1vbnRoSGVhZGVyUmVnZXgoKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFJlZ0V4cChcblx0XHRcdFx0YF4oPT0rKVxcXFxzKiR7dGhpcy5nZXRVVENGdWxsWWVhcigpfeW5tCg/OiR7dGhpcy5nZXRVVENNb250aE5hbWUoKX18JHt0aGlzLmdldFVUQ01vbnRoTmFtZUFiYnJldigpfSlcXFxccypcXFxcMWAsXG5cdFx0XHRcdCdtZydcblx0XHRcdCk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBDcmVhdGVzIGEgd2lraXRleHQgc2VjdGlvbiBoZWFkZXIgd2l0aCB0aGUgbW9udGggYW5kIHllYXIuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gW2xldmVsPTJdIC0gSGVhZGVyIGxldmVsLiAgUGFzcyAwIGZvciBqdXN0IHRoZSB0ZXh0XG5cdFx0ICogd2l0aCBubyB3aWtpdGV4dCBtYXJrZXJzICg9PSkuXG5cdFx0ICogQHJldHVybnMge3N0cmluZ31cblx0XHQgKi9cblx0XHRtb250aEhlYWRlcihsZXZlbCkge1xuXHRcdFx0Ly8gRGVmYXVsdCB0byAyLCBidXQgYWxsb3cgZm9yIDAgb3Igc3RyaW5neSBudW1iZXJzXG5cdFx0XHRsZXZlbCA9IE51bWJlci5wYXJzZUludChsZXZlbCwgMTApO1xuXHRcdFx0bGV2ZWwgPSBOdW1iZXIuaXNOYU4obGV2ZWwpID8gMiA6IGxldmVsO1xuXHRcdFx0Y29uc3QgaGVhZGVyID0gJz0nLnJlcGVhdChsZXZlbCk7XG5cdFx0XHRjb25zdCB0ZXh0ID0gYCR7dGhpcy5nZXRVVENGdWxsWWVhcigpfeW5tCR7dGhpcy5nZXRVVENNb250aE5hbWUoKX1gO1xuXHRcdFx0aWYgKGhlYWRlci5sZW5ndGgpIHtcblx0XHRcdFx0Ly8gd2lraXRleHQtZm9ybWF0dGVkIGhlYWRlclxuXHRcdFx0XHRyZXR1cm4gYCR7aGVhZGVyfSAke3RleHR9ICR7aGVhZGVyfWA7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGV4dDsgLy8gSnVzdCB0aGUgc3RyaW5nXG5cdFx0fSxcblx0fTtcblx0Ly8gQWxsb3cgbmF0aXZlIERhdGUucHJvdG90eXBlIG1ldGhvZHMgdG8gYmUgdXNlZCBvbiBNb3JlYml0cy5kYXRlIG9iamVjdHNcblx0Zm9yIChjb25zdCBmdW5jIG9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKERhdGUucHJvdG90eXBlKSkge1xuXHRcdC8vIEV4Y2x1ZGUgbWV0aG9kcyB0aGF0IGNvbGxpZGUgd2l0aCBQYWdlVHJpYWdlJ3MgRGF0ZS5qcyBleHRlcm5hbCwgd2hpY2ggY2xvYmJlcnMgbmF0aXZlIERhdGVcblx0XHRpZiAoIVsnYWRkJywgJ2dldERheU5hbWUnLCAnZ2V0TW9udGhOYW1lJ10uaW5jbHVkZXMoZnVuYykpIHtcblx0XHRcdE1vcmViaXRzLmRhdGUucHJvdG90eXBlW2Z1bmNdID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX2RbZnVuY10oLi4uYXJncyk7XG5cdFx0XHR9O1xuXHRcdH1cblx0fVxuXHQvKiAqKioqKioqKioqKioqKioqIE1vcmViaXRzLndpa2kgKioqKioqKioqKioqKioqKiAqL1xuXHQvKipcblx0ICogVmFyaW91cyBvYmplY3RzIGZvciB3aWtpIGVkaXRpbmcgYW5kIEFQSSBhY2Nlc3MsIGluY2x1ZGluZ1xuXHQgKiB7QGxpbmsgTW9yZWJpdHMud2lraS5hcGl9IGFuZCB7QGxpbmsgTW9yZWJpdHMud2lraS5wYWdlfS5cblx0ICpcblx0ICogQG5hbWVzcGFjZSBNb3JlYml0cy53aWtpXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0c1xuXHQgKi9cblx0TW9yZWJpdHMud2lraSA9IHt9O1xuXHQvKipcblx0ICogQGRlcHJlY2F0ZWQgaW4gZmF2b3Igb2YgTW9yZWJpdHMuaXNQYWdlUmVkaXJlY3QgYXMgb2YgTm92ZW1iZXIgMjAyMFxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraVxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdE1vcmViaXRzLndpa2kuaXNQYWdlUmVkaXJlY3QgPSAoKSA9PiB7XG5cdFx0Y29uc29sZS53YXJuKFxuXHRcdFx0J1tNb3JlYml0c10gTk9URTogTW9yZWJpdHMud2lraS5pc1BhZ2VSZWRpcmVjdCBoYXMgYmVlbiBkZXByZWNhdGVkLCB1c2UgTW9yZWJpdHMuaXNQYWdlUmVkaXJlY3QgaW5zdGVhZC4nXG5cdFx0KTtcblx0XHRyZXR1cm4gTW9yZWJpdHMuaXNQYWdlUmVkaXJlY3QoKTtcblx0fTtcblx0LyogKioqKioqKioqKioqKioqKiBNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZCAqKioqKioqKioqKioqKioqICovXG5cdC8qKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraVxuXHQgKiBAdHlwZSB7bnVtYmVyfVxuXHQgKi9cblx0TW9yZWJpdHMud2lraS5udW1iZXJPZkFjdGlvbnNMZWZ0ID0gMDtcblx0LyoqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpXG5cdCAqIEB0eXBlIHtudW1iZXJ9XG5cdCAqL1xuXHRNb3JlYml0cy53aWtpLm5ick9mQ2hlY2twb2ludHNMZWZ0ID0gMDtcblx0LyoqXG5cdCAqIERpc3BsYXkgbWVzc2FnZSBhbmQvb3IgcmVkaXJlY3QgdG8gcGFnZSB1cG9uIGNvbXBsZXRpb24gb2YgdGFza3MuXG5cdCAqXG5cdCAqIEV2ZXJ5IGNhbGwgdG8gTW9yZWJpdHMud2lraS5hcGkucG9zdCgpIHJlc3VsdHMgaW4gdGhlIGRpc3BhdGNoIG9mIGFuXG5cdCAqIGFzeW5jaHJvbm91cyBjYWxsYmFjay4gRWFjaCBjYWxsYmFjayBjYW4gaW4gdHVybiBtYWtlIGFuIGFkZGl0aW9uYWwgY2FsbCB0b1xuXHQgKiBNb3JlYml0cy53aWtpLmFwaS5wb3N0KCkgdG8gY29udGludWUgYSBwcm9jZXNzaW5nIHNlcXVlbmNlLiBBdCB0aGVcblx0ICogY29uY2x1c2lvbiBvZiB0aGUgZmluYWwgY2FsbGJhY2sgb2YgYSBwcm9jZXNzaW5nIHNlcXVlbmNlLCBpdCBpcyBub3Rcblx0ICogcG9zc2libGUgdG8gc2ltcGx5IHJldHVybiB0byB0aGUgb3JpZ2luYWwgY2FsbGVyIGJlY2F1c2UgdGhlcmUgaXMgbm8gY2FsbFxuXHQgKiBzdGFjayBsZWFkaW5nIGJhY2sgdG8gdGhlIG9yaWdpbmFsIGNvbnRleHQuIEluc3RlYWQsXG5cdCAqIE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLmV2ZW50KCkgaXMgY2FsbGVkIHRvIGRpc3BsYXkgdGhlIHJlc3VsdCB0b1xuXHQgKiB0aGUgdXNlciBhbmQgdG8gcGVyZm9ybSBhbiBvcHRpb25hbCBwYWdlIHJlZGlyZWN0LlxuXHQgKlxuXHQgKiBUaGUgZGV0ZXJtaW5hdGlvbiBvZiB3aGVuIHRvIGNhbGwgTW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQuZXZlbnQoKSBpc1xuXHQgKiBtYW5hZ2VkIHRocm91Z2ggdGhlIGdsb2JhbHMgTW9yZWJpdHMud2lraS5udW1iZXJPZkFjdGlvbnNMZWZ0IGFuZFxuXHQgKiBNb3JlYml0cy53aWtpLm5ick9mQ2hlY2twb2ludHNMZWZ0LiBNb3JlYml0cy53aWtpLm51bWJlck9mQWN0aW9uc0xlZnQgaXNcblx0ICogaW5jcmVtZW50ZWQgYXQgdGhlIHN0YXJ0IG9mIGV2ZXJ5IE1vcmViaXRzLndpa2kuYXBpIGNhbGwgYW5kIGRlY3JlbWVudGVkXG5cdCAqIGFmdGVyIHRoZSBjb21wbGV0aW9uIG9mIGEgY2FsbGJhY2sgZnVuY3Rpb24uIElmIGEgY2FsbGJhY2sgZnVuY3Rpb24gZG9lc1xuXHQgKiBub3QgY3JlYXRlIGEgbmV3IE1vcmViaXRzLndpa2kuYXBpIG9iamVjdCBiZWZvcmUgZXhpdGluZywgaXQgaXMgdGhlIGZpbmFsXG5cdCAqIHN0ZXAgaW4gdGhlIHByb2Nlc3NpbmcgY2hhaW4gYW5kIE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLmV2ZW50KCkgd2lsbFxuXHQgKiB0aGVuIGJlIGNhbGxlZC5cblx0ICpcblx0ICogT3B0aW9uYWxseSwgY2FsbGVycyBtYXkgdXNlIE1vcmViaXRzLndpa2kuYWRkQ2hlY2twb2ludCgpIHRvIGluZGljYXRlIHRoYXRcblx0ICogcHJvY2Vzc2luZyBpcyBub3QgY29tcGxldGUgdXBvbiB0aGUgY29uY2x1c2lvbiBvZiB0aGUgZmluYWwgY2FsbGJhY2tcblx0ICogZnVuY3Rpb24uICBUaGlzIGlzIHVzZWQgZm9yIGJhdGNoIG9wZXJhdGlvbnMuIFRoZSBlbmQgb2YgYSBiYXRjaCBpc1xuXHQgKiBzaWduYWxlZCBieSBjYWxsaW5nIE1vcmViaXRzLndpa2kucmVtb3ZlQ2hlY2twb2ludCgpLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3R5cGVvZiBNb3JlYml0c30gc2VsZlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraVxuXHQgKi9cblx0TW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQgPSAoc2VsZikgPT4ge1xuXHRcdGlmICgtLU1vcmViaXRzLndpa2kubnVtYmVyT2ZBY3Rpb25zTGVmdCA8PSAwICYmIE1vcmViaXRzLndpa2kubmJyT2ZDaGVja3BvaW50c0xlZnQgPD0gMCkge1xuXHRcdFx0TW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQuZXZlbnQoc2VsZik7XG5cdFx0fVxuXHR9O1xuXHQvLyBDaGFuZ2UgcGVyIGFjdGlvbiB3YW50ZWRcblx0LyoqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpICovXG5cdE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLmV2ZW50ID0gKCkgPT4ge1xuXHRcdGlmIChNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5ub3RpY2UpIHtcblx0XHRcdE1vcmViaXRzLnN0YXR1cy5hY3Rpb25Db21wbGV0ZWQoTW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQubm90aWNlKTtcblx0XHR9XG5cdFx0aWYgKE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLnJlZGlyZWN0KSB7XG5cdFx0XHQvLyBpZiBpdCBpc24ndCBhIFVSTCwgbWFrZSBpdCBvbmUuIFRPRE86IFRoaXMgYnJlYWtzIG9uIHRoZSBhcnRpY2xlcyAnaHR0cDovLycsICdmdHA6Ly8nLCBhbmQgc2ltaWxhciBvbmVzLlxuXHRcdFx0aWYgKCEvXlxcdys6XFwvXFwvLy50ZXN0KE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLnJlZGlyZWN0KSkge1xuXHRcdFx0XHRNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5yZWRpcmVjdCA9IG13LnV0aWwuZ2V0VXJsKE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLnJlZGlyZWN0KTtcblx0XHRcdFx0aWYgKE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLmZvbGxvd1JlZGlyZWN0ID09PSBmYWxzZSkge1xuXHRcdFx0XHRcdE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLnJlZGlyZWN0ICs9ICc/cmVkaXJlY3Q9bm8nO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0bG9jYXRpb24gPSBNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5yZWRpcmVjdDtcblx0XHRcdH0sIE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLnRpbWVPdXQpO1xuXHRcdH1cblx0fTtcblx0LyoqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpICovXG5cdE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLnRpbWVPdXQgPVxuXHRcdHdpbmRvdy53cEFjdGlvbkNvbXBsZXRlZFRpbWVPdXQgPT09IHVuZGVmaW5lZCA/IDUwMDAgOiB3aW5kb3cud3BBY3Rpb25Db21wbGV0ZWRUaW1lT3V0O1xuXHQvKiogQG1lbWJlcm9mIE1vcmViaXRzLndpa2kgKi9cblx0TW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQucmVkaXJlY3QgPSBudWxsO1xuXHQvKiogQG1lbWJlcm9mIE1vcmViaXRzLndpa2kgKi9cblx0TW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQubm90aWNlID0gbnVsbDtcblx0LyoqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpICovXG5cdE1vcmViaXRzLndpa2kuYWRkQ2hlY2twb2ludCA9ICgpID0+IHtcblx0XHQrK01vcmViaXRzLndpa2kubmJyT2ZDaGVja3BvaW50c0xlZnQ7XG5cdH07XG5cdC8qKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraSAqL1xuXHRNb3JlYml0cy53aWtpLnJlbW92ZUNoZWNrcG9pbnQgPSAoKSA9PiB7XG5cdFx0aWYgKC0tTW9yZWJpdHMud2lraS5uYnJPZkNoZWNrcG9pbnRzTGVmdCA8PSAwICYmIE1vcmViaXRzLndpa2kubnVtYmVyT2ZBY3Rpb25zTGVmdCA8PSAwKSB7XG5cdFx0XHRNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5ldmVudCgpO1xuXHRcdH1cblx0fTtcblx0LyogKioqKioqKioqKioqKioqKiBNb3JlYml0cy53aWtpLmFwaSAqKioqKioqKioqKioqKioqICovXG5cdC8qKlxuXHQgKiBBbiBlYXN5IHdheSB0byB0YWxrIHRvIHRoZSBNZWRpYVdpa2kgQVBJLiAgQWNjZXB0cyBlaXRoZXIganNvbiBvciB4bWxcblx0ICogKGRlZmF1bHQpIGZvcm1hdHM7IGlmIGpzb24gaXMgc2VsZWN0ZWQsIHdpbGwgZGVmYXVsdCB0byBgZm9ybWF0dmVyc2lvbj0yYFxuXHQgKiB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC4gIFNpbWlsYXJseSwgZW5mb3JjZXMgbmV3ZXIgYGVycm9yZm9ybWF0YHMsXG5cdCAqIGRlZmF1bHRpbmcgdG8gYGh0bWxgIGlmIHVuc3BlY2lmaWVkLiAgYHVzZWxhbmdgIGVuZm9yY2VkIHRvIHRoZSB3aWtpJ3Ncblx0ICogY29udGVudCBsYW5ndWFnZS5cblx0ICpcblx0ICogSW4gbmV3IGNvZGUsIHRoZSB1c2Ugb2YgdGhlIGxhc3QgMyBwYXJhbWV0ZXJzIHNob3VsZCBiZSBhdm9pZGVkLCBpbnN0ZWFkXG5cdCAqIHVzZSB7QGxpbmsgTW9yZWJpdHMud2lraS5hcGkjc2V0U3RhdHVzRWxlbWVudHxzZXRTdGF0dXNFbGVtZW50KCl9IHRvIGJpbmRcblx0ICogdGhlIHN0YXR1cyBlbGVtZW50IChpZiBuZWVkZWQpIGFuZCB1c2UgYC50aGVuKClgIG9yIGAuY2F0Y2goKWAgb24gdGhlXG5cdCAqIHByb21pc2UgcmV0dXJuZWQgYnkgYHBvc3QoKWAsIHJhdGhlciB0aGFuIHNwZWNpZnkgdGhlIGBvblN1Y2Nlc3NgIG9yXG5cdCAqIGBvbkZhaWx1cmVgIGNhbGxiYWNrcy5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLndpa2lcblx0ICogQGNsYXNzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjdXJyZW50QWN0aW9uIC0gVGhlIGN1cnJlbnQgYWN0aW9uIChyZXF1aXJlZCkuXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBxdWVyeSAtIFRoZSBxdWVyeSAocmVxdWlyZWQpLlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25TdWNjZXNzXSAtIFRoZSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gcmVxdWVzdCBpcyBzdWNjZXNzZnVsLlxuXHQgKiBAcGFyYW0ge01vcmViaXRzLnN0YXR1c30gW3N0YXR1c0VsZW1lbnRdIC0gQSBNb3JlYml0cy5zdGF0dXMgb2JqZWN0IHRvIHVzZSBmb3Igc3RhdHVzIG1lc3NhZ2VzLlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25FcnJvcl0gLSBUaGUgZnVuY3Rpb24gdG8gY2FsbCBpZiBhbiBlcnJvciBvY2N1cnMuXG5cdCAqL1xuXHRNb3JlYml0cy53aWtpLmFwaSA9IGZ1bmN0aW9uIChjdXJyZW50QWN0aW9uLCBxdWVyeSwgb25TdWNjZXNzLCBzdGF0dXNFbGVtZW50LCBvbkVycm9yKSB7XG5cdFx0dGhpcy5jdXJyZW50QWN0aW9uID0gY3VycmVudEFjdGlvbjtcblx0XHR0aGlzLnF1ZXJ5ID0gcXVlcnk7XG5cdFx0dGhpcy5xdWVyeS5hc3NlcnQgPSAndXNlcic7XG5cdFx0Ly8gRW5mb3JjZSBuZXdlciBlcnJvciBmb3JtYXRzLCBwcmVmZXJyaW5nIGh0bWxcblx0XHRpZiAoIXF1ZXJ5LmVycm9yZm9ybWF0IHx8ICFbJ3dpa2l0ZXh0JywgJ3BsYWludGV4dCddLmluY2x1ZGVzKHF1ZXJ5LmVycm9yZm9ybWF0KSkge1xuXHRcdFx0dGhpcy5xdWVyeS5lcnJvcmZvcm1hdCA9ICdodG1sJztcblx0XHR9XG5cdFx0Ly8gRXhwbGljaXRseSB1c2UgdGhlIHdpa2kncyBjb250ZW50IGxhbmd1YWdlIHRvIG1pbmltaXplIGNvbmZ1c2lvbixcblx0XHQvLyBzZWUgIzExNzkgZm9yIGRpc2N1c3Npb25cblx0XHR0aGlzLnF1ZXJ5LnVzZWxhbmcgfHw9ICdjb250ZW50JzsgLy8gVXNlIHdnVXNlckxhbmd1YWdlIGZvciBwcmV2aWV3XG5cdFx0dGhpcy5xdWVyeS5lcnJvcmxhbmcgPSAndXNlbGFuZyc7XG5cdFx0dGhpcy5xdWVyeS5lcnJvcnN1c2Vsb2NhbCA9IDE7XG5cdFx0dGhpcy5vblN1Y2Nlc3MgPSBvblN1Y2Nlc3M7XG5cdFx0dGhpcy5vbkVycm9yID0gb25FcnJvcjtcblx0XHRpZiAoc3RhdHVzRWxlbWVudCkge1xuXHRcdFx0dGhpcy5zZXRTdGF0dXNFbGVtZW50KHN0YXR1c0VsZW1lbnQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnN0YXRlbGVtID0gbmV3IE1vcmViaXRzLnN0YXR1cyhjdXJyZW50QWN0aW9uKTtcblx0XHR9XG5cdFx0Ly8gSlNPTiBpcyB1c2VkIHRocm91Z2hvdXQgTW9yZWJpdHMvVHdpbmtsZSwgYnV0IHhtbCByZW1haW5zIHRoZSBkZWZhdWx0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuXHRcdGlmICghcXVlcnkuZm9ybWF0KSB7XG5cdFx0XHR0aGlzLnF1ZXJ5LmZvcm1hdCA9ICd4bWwnO1xuXHRcdH0gZWxzZSBpZiAocXVlcnkuZm9ybWF0ID09PSAnanNvbicgJiYgIXF1ZXJ5LmZvcm1hdHZlcnNpb24pIHtcblx0XHRcdHRoaXMucXVlcnkuZm9ybWF0dmVyc2lvbiA9ICcyJztcblx0XHR9IGVsc2UgaWYgKCFbJ3htbCcsICdqc29uJ10uaW5jbHVkZXMocXVlcnkuZm9ybWF0KSkge1xuXHRcdFx0dGhpcy5zdGF0ZWxlbS5lcnJvcignSW52YWxpZCBBUEkgZm9ybWF0OiBvbmx5IHhtbCBhbmQganNvbiBhcmUgc3VwcG9ydGVkLicpO1xuXHRcdH1cblx0XHQvLyBJZ25vcmUgdGFncyBmb3IgcXVlcmllcyBhbmQgbW9zdCBjb21tb24gdW5zdXBwb3J0ZWQgYWN0aW9ucywgcHJvZHVjZXMgd2FybmluZ3Ncblx0XHRpZiAocXVlcnkuYWN0aW9uICYmIFsncXVlcnknLCAnd2F0Y2gnXS5pbmNsdWRlcyhxdWVyeS5hY3Rpb24pKSB7XG5cdFx0XHRkZWxldGUgcXVlcnkudGFncztcblx0XHR9IGVsc2UgaWYgKCFxdWVyeS50YWdzICYmIG1vcmViaXRzV2lraUNoYW5nZVRhZykge1xuXHRcdFx0cXVlcnkudGFncyA9IG1vcmViaXRzV2lraUNoYW5nZVRhZztcblx0XHR9XG5cdH07XG5cdE1vcmViaXRzLndpa2kuYXBpLnByb3RvdHlwZSA9IHtcblx0XHRjdXJyZW50QWN0aW9uOiAnJyxcblx0XHRvblN1Y2Nlc3M6IG51bGwsXG5cdFx0b25FcnJvcjogbnVsbCxcblx0XHRwYXJlbnQ6IHdpbmRvdyxcblx0XHQvLyB1c2UgZ2xvYmFsIGNvbnRleHQgaWYgdGhlcmUgaXMgbm8gcGFyZW50IG9iamVjdFxuXHRcdHF1ZXJ5OiBudWxsLFxuXHRcdHJlc3BvbnNlOiBudWxsLFxuXHRcdHJlc3BvbnNlWE1MOiBudWxsLFxuXHRcdC8vIHVzZSBgcmVzcG9uc2VgIGluc3RlYWQ7IHJldGFpbmVkIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuXHRcdHN0YXRlbGVtOiBudWxsLFxuXHRcdC8vIHRoaXMgbm9uLXN0YW5kYXJkIG5hbWUga2VwdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcblx0XHRzdGF0dXNUZXh0OiBudWxsLFxuXHRcdC8vIHJlc3VsdCByZWNlaXZlZCBmcm9tIHRoZSBBUEksIG5vcm1hbGx5IFwic3VjY2Vzc1wiIG9yIFwiZXJyb3JcIlxuXHRcdGVycm9yQ29kZTogbnVsbCxcblx0XHQvLyBzaG9ydCB0ZXh0IGVycm9yIGNvZGUsIGlmIGFueSwgYXMgZG9jdW1lbnRlZCBpbiB0aGUgTWVkaWFXaWtpIEFQSVxuXHRcdGVycm9yVGV4dDogbnVsbCxcblx0XHQvLyBmdWxsIGVycm9yIGRlc2NyaXB0aW9uLCBpZiBhbnlcblx0XHRiYWR0b2tlblJldHJ5OiBmYWxzZSxcblx0XHQvLyBzZXQgdG8gdHJ1ZSBpZiB0aGlzIG9uIGEgcmV0cnkgYXR0ZW1wdGVkIGFmdGVyIGEgYmFkdG9rZW4gZXJyb3Jcblx0XHQvKipcblx0XHQgKiBLZWVwIHRyYWNrIG9mIHBhcmVudCBvYmplY3QgZm9yIGNhbGxiYWNrcy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7Kn0gcGFyZW50XG5cdFx0ICovXG5cdFx0c2V0UGFyZW50KHBhcmVudCkge1xuXHRcdFx0dGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG5cdFx0fSxcblx0XHQvKiogQHBhcmFtIHtNb3JlYml0cy5zdGF0dXN9IHN0YXR1c0VsZW1lbnQgKi9cblx0XHRzZXRTdGF0dXNFbGVtZW50KHN0YXR1c0VsZW1lbnQpIHtcblx0XHRcdHRoaXMuc3RhdGVsZW0gPSBzdGF0dXNFbGVtZW50O1xuXHRcdFx0dGhpcy5zdGF0ZWxlbS5zdGF0dXModGhpcy5jdXJyZW50QWN0aW9uKTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIENhcnJ5IG91dCB0aGUgcmVxdWVzdC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsZXJBamF4UGFyYW1ldGVycyAtIERvIG5vdCBzcGVjaWZ5IGEgcGFyYW1ldGVyIHVubGVzcyB5b3UgcmVhbGx5XG5cdFx0ICogcmVhbGx5IHdhbnQgdG8gZ2l2ZSBqUXVlcnkgc29tZSBleHRyYSBwYXJhbWV0ZXJzLlxuXHRcdCAqIEByZXR1cm5zIHtwcm9taXNlfSAtIEEgalF1ZXJ5IHByb21pc2Ugb2JqZWN0IHRoYXQgaXMgcmVzb2x2ZWQgb3IgcmVqZWN0ZWQgd2l0aCB0aGUgYXBpIG9iamVjdC5cblx0XHQgKi9cblx0XHRwb3N0KGNhbGxlckFqYXhQYXJhbWV0ZXJzKSB7XG5cdFx0XHQrK01vcmViaXRzLndpa2kubnVtYmVyT2ZBY3Rpb25zTGVmdDtcblx0XHRcdGNvbnN0IHF1ZXJ5U3RyaW5nQXJyID0gW107XG5cdFx0XHRmb3IgKGNvbnN0IFtpLCB2YWxdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMucXVlcnkpKSB7XG5cdFx0XHRcdGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcblx0XHRcdFx0XHRxdWVyeVN0cmluZ0FycltxdWVyeVN0cmluZ0Fyci5sZW5ndGhdID1cblx0XHRcdFx0XHRcdGAke2VuY29kZVVSSUNvbXBvbmVudChpKX09JHt2YWwubWFwKGVuY29kZVVSSUNvbXBvbmVudCkuam9pbignfCcpfWA7XG5cdFx0XHRcdH0gZWxzZSBpZiAodmFsICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRxdWVyeVN0cmluZ0FycltxdWVyeVN0cmluZ0Fyci5sZW5ndGhdID0gYCR7ZW5jb2RlVVJJQ29tcG9uZW50KGkpfT0ke2VuY29kZVVSSUNvbXBvbmVudCh2YWwpfWA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGNvbnN0IHF1ZXJ5U3RyaW5nID0gcXVlcnlTdHJpbmdBcnIuam9pbignJicpLnJlcGxhY2UoL14oLio/KShcXGJ0b2tlbj1bXiZdKikmKC4qKS8sICckMSQzJiQyJyk7XG5cdFx0XHQvLyB0b2tlbiBzaG91bGQgYWx3YXlzIGJlIHRoZSBsYXN0IGl0ZW0gaW4gdGhlIHF1ZXJ5IHN0cmluZyAoYnVnIFRXLUItMDAxMylcblx0XHRcdGNvbnN0IGFqYXhwYXJhbXMgPSB7XG5cdFx0XHRcdGNvbnRleHQ6IHRoaXMsXG5cdFx0XHRcdHR5cGU6IHRoaXMucXVlcnkuYWN0aW9uID09PSAncXVlcnknID8gJ0dFVCcgOiAnUE9TVCcsXG5cdFx0XHRcdHVybDogbXcudXRpbC53aWtpU2NyaXB0KCdhcGknKSxcblx0XHRcdFx0ZGF0YTogcXVlcnlTdHJpbmcsXG5cdFx0XHRcdGRhdGFUeXBlOiB0aGlzLnF1ZXJ5LmZvcm1hdCxcblx0XHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRcdCdBcGktVXNlci1BZ2VudCc6IG1vcmViaXRzV2lraUFwaVVzZXJBZ2VudCxcblx0XHRcdFx0fSxcblx0XHRcdFx0Li4uY2FsbGVyQWpheFBhcmFtZXRlcnMsXG5cdFx0XHR9O1xuXHRcdFx0cmV0dXJuICQuYWpheChhamF4cGFyYW1zKS50aGVuKFxuXHRcdFx0XHRmdW5jdGlvbiBvbkFQSXN1Y2Nlc3MocmVzcG9uc2UsIHN0YXR1c1RleHQpIHtcblx0XHRcdFx0XHR0aGlzLnN0YXR1c1RleHQgPSBzdGF0dXNUZXh0O1xuXHRcdFx0XHRcdHRoaXMucmVzcG9uc2UgPSByZXNwb25zZTtcblx0XHRcdFx0XHR0aGlzLnJlc3BvbnNlWE1MID0gcmVzcG9uc2U7XG5cdFx0XHRcdFx0Ly8gTGltaXQgdG8gZmlyc3QgZXJyb3Jcblx0XHRcdFx0XHRpZiAodGhpcy5xdWVyeS5mb3JtYXQgPT09ICdqc29uJykge1xuXHRcdFx0XHRcdFx0dGhpcy5lcnJvckNvZGUgPSByZXNwb25zZS5lcnJvcnMgJiYgcmVzcG9uc2UuZXJyb3JzWzBdLmNvZGU7XG5cdFx0XHRcdFx0XHRpZiAodGhpcy5xdWVyeS5lcnJvcmZvcm1hdCA9PT0gJ2h0bWwnKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuZXJyb3JUZXh0ID0gcmVzcG9uc2UuZXJyb3JzICYmIHJlc3BvbnNlLmVycm9yc1swXS5odG1sO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLnF1ZXJ5LmVycm9yZm9ybWF0ID09PSAnd2lraXRleHQnIHx8IHRoaXMucXVlcnkuZXJyb3Jmb3JtYXQgPT09ICdwbGFpbnRleHQnKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuZXJyb3JUZXh0ID0gcmVzcG9uc2UuZXJyb3JzICYmIHJlc3BvbnNlLmVycm9yc1swXS50ZXh0O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLmVycm9yQ29kZSA9ICQocmVzcG9uc2UpLmZpbmQoJ2Vycm9ycyBlcnJvcicpLmVxKDApLmF0dHIoJ2NvZGUnKTtcblx0XHRcdFx0XHRcdC8vIFN1ZmZpY2llbnQgZm9yIGh0bWwsIHdpa2l0ZXh0LCBvciBwbGFpbnRleHQgZXJyb3Jmb3JtYXRzXG5cdFx0XHRcdFx0XHR0aGlzLmVycm9yVGV4dCA9ICQocmVzcG9uc2UpLmZpbmQoJ2Vycm9ycyBlcnJvcicpLmVxKDApLnRleHQoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHR5cGVvZiB0aGlzLmVycm9yQ29kZSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHRcdC8vIHRoZSBBUEkgZGlkbid0IGxpa2Ugd2hhdCB3ZSB0b2xkIGl0LCBlLmcuLCBiYWQgZWRpdCB0b2tlbiBvciBhbiBlcnJvciBjcmVhdGluZyBhIHBhZ2Vcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLnJldHVybkVycm9yKGNhbGxlckFqYXhQYXJhbWV0ZXJzKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gaW52b2tlIHN1Y2Nlc3MgY2FsbGJhY2sgaWYgb25lIHdhcyBzdXBwbGllZFxuXHRcdFx0XHRcdGlmICh0aGlzLm9uU3VjY2Vzcykge1xuXHRcdFx0XHRcdFx0Ly8gc2V0IHRoZSBjYWxsYmFjayBjb250ZXh0IHRvIHRoaXMucGFyZW50IGZvciBuZXcgY29kZSBhbmQgc3VwcGx5IHRoZSBBUEkgb2JqZWN0XG5cdFx0XHRcdFx0XHQvLyBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gdGhlIGNhbGxiYWNrIChmb3IgbGVnYWN5IGNvZGUpXG5cdFx0XHRcdFx0XHR0aGlzLm9uU3VjY2Vzcy5jYWxsKHRoaXMucGFyZW50LCB0aGlzKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZWxlbS5pbmZvKCflrozmiJAnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0TW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQoKTtcblx0XHRcdFx0XHRyZXR1cm4gJC5EZWZlcnJlZCgpLnJlc29sdmVXaXRoKHRoaXMucGFyZW50LCBbdGhpc10pO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHQvLyBvbmx5IG5ldHdvcmsgYW5kIHNlcnZlciBlcnJvcnMgcmVhY2ggaGVyZSAtIGNvbXBsYWludHMgZnJvbSB0aGUgQVBJIGl0c2VsZiBhcmUgY2F1Z2h0IGluIHN1Y2Nlc3MoKVxuXHRcdFx0XHRmdW5jdGlvbiBvbkFQSWZhaWx1cmUoZXJyb3IsIHN0YXR1c1RleHQsIGVycm9yVGhyb3duKSB7XG5cdFx0XHRcdFx0dGhpcy5zdGF0dXNUZXh0ID0gc3RhdHVzVGV4dDtcblx0XHRcdFx0XHR0aGlzLmVycm9yVGhyb3duID0gZXJyb3JUaHJvd247IC8vIGZyZXF1ZW50bHkgdW5kZWZpbmVkXG5cdFx0XHRcdFx0dGhpcy5lcnJvclRleHQgPVxuXHRcdFx0XHRcdFx0c3RhdHVzVGV4dCArXG5cdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+WcqOiwg+eUqEFQSeaXtuWPkeeUn+S6humUmeivr+KAnCcsICflnKjlkbzlj6tBUEnmmYLnmbznlJ/kuobpjK/oqqTjgIwnKSArXG5cdFx0XHRcdFx0XHRlcnJvci5zdGF0dXNUZXh0ICtcblx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn4oCd44CCJywgJ+OAjeOAgicpO1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLnJldHVybkVycm9yKCk7XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0fSxcblx0XHRyZXR1cm5FcnJvcihjYWxsZXJBamF4UGFyYW1ldGVycykge1xuXHRcdFx0aWYgKHRoaXMuZXJyb3JDb2RlID09PSAnYmFkdG9rZW4nICYmICF0aGlzLmJhZHRva2VuUmV0cnkpIHtcblx0XHRcdFx0dGhpcy5zdGF0ZWxlbS53YXJuKHdpbmRvdy53Z1VMUygn5peg5pWI5Luk54mM77yM6I635Y+W5paw55qE5Luk54mM5bm26YeN6K+V4oCm4oCmJywgJ+eEoeaViOasiuadlu+8jOWPluW+l+aWsOeahOasiuadluS4pumHjeippuKApuKApicpKTtcblx0XHRcdFx0dGhpcy5iYWR0b2tlblJldHJ5ID0gdHJ1ZTtcblx0XHRcdFx0Ly8gR2V0IGEgbmV3IENTUkYgdG9rZW4gYW5kIHJldHJ5LiBJZiB0aGUgb3JpZ2luYWwgYWN0aW9uIG5lZWRzIGEgZGlmZmVyZW50XG5cdFx0XHRcdC8vIHR5cGUgb2YgYWN0aW9uIHRoYW4gQ1NSRiwgd2UgZG8gb25lIHBvaW50bGVzcyByZXRyeSBiZWZvcmUgYmFpbGluZyBvdXRcblx0XHRcdFx0cmV0dXJuIE1vcmViaXRzLndpa2kuYXBpLmdldFRva2VuKCkudGhlbigodG9rZW4pID0+IHtcblx0XHRcdFx0XHR0aGlzLnF1ZXJ5LnRva2VuID0gdG9rZW47XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMucG9zdChjYWxsZXJBamF4UGFyYW1ldGVycyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zdGF0ZWxlbS5lcnJvcihgJHt0aGlzLmVycm9yVGV4dH3vvIgke3RoaXMuZXJyb3JDb2Rlfe+8iWApO1xuXHRcdFx0Ly8gaW52b2tlIGZhaWx1cmUgY2FsbGJhY2sgaWYgb25lIHdhcyBzdXBwbGllZFxuXHRcdFx0aWYgKHRoaXMub25FcnJvcikge1xuXHRcdFx0XHQvLyBzZXQgdGhlIGNhbGxiYWNrIGNvbnRleHQgdG8gdGhpcy5wYXJlbnQgZm9yIG5ldyBjb2RlIGFuZCBzdXBwbHkgdGhlIEFQSSBvYmplY3Rcblx0XHRcdFx0Ly8gYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIHRoZSBjYWxsYmFjayBmb3IgbGVnYWN5IGNvZGVcblx0XHRcdFx0dGhpcy5vbkVycm9yLmNhbGwodGhpcy5wYXJlbnQsIHRoaXMpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gZG9uJ3QgY29tcGxldGUgdGhlIGFjdGlvbiBzbyB0aGF0IHRoZSBlcnJvciByZW1haW5zIGRpc3BsYXllZFxuXHRcdFx0cmV0dXJuICQuRGVmZXJyZWQoKS5yZWplY3RXaXRoKHRoaXMucGFyZW50LCBbdGhpc10pO1xuXHRcdH0sXG5cdFx0Z2V0U3RhdHVzRWxlbWVudCgpIHtcblx0XHRcdHJldHVybiB0aGlzLnN0YXRlbGVtO1xuXHRcdH0sXG5cdFx0Z2V0RXJyb3JDb2RlKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZXJyb3JDb2RlO1xuXHRcdH0sXG5cdFx0Z2V0RXJyb3JUZXh0KCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZXJyb3JUZXh0O1xuXHRcdH0sXG5cdFx0Z2V0WE1MKCkge1xuXHRcdFx0Ly8gcmV0YWluZWQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LCB1c2UgZ2V0UmVzcG9uc2UoKSBpbnN0ZWFkXG5cdFx0XHRyZXR1cm4gdGhpcy5yZXNwb25zZVhNTDtcblx0XHR9LFxuXHRcdGdldFJlc3BvbnNlKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucmVzcG9uc2U7XG5cdFx0fSxcblx0fTtcblx0LyoqXG5cdCAqIFJldHJpZXZlcyB3aWtpdGV4dCBmcm9tIGEgcGFnZS4gQ2FjaGluZyBlbmFibGVkLCBkdXJhdGlvbiAxIGRheS5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlXG5cdCAqL1xuXHRNb3JlYml0cy53aWtpLmdldENhY2hlZEpzb24gPSAodGl0bGUpID0+IHtcblx0XHRjb25zdCBxdWVyeSA9IHtcblx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRcdFx0dGl0bGVzOiB0aXRsZSxcblx0XHRcdHJ2c2xvdHM6ICdtYWluJyxcblx0XHRcdHJ2cHJvcDogJ2NvbnRlbnQnLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRzbWF4YWdlOiAnMzYwMCcsXG5cdFx0XHRtYXhhZ2U6ICczNjAwJyxcblx0XHR9O1xuXG5cdFx0cmV0dXJuIG5ldyBNb3JlYml0cy53aWtpLmFwaSgnJywgcXVlcnkpLnBvc3QoKS50aGVuKChhcGlvYmopID0+IHtcblx0XHRcdGFwaW9iai5nZXRTdGF0dXNFbGVtZW50KCkudW5saW5rKCk7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGFwaW9iai5nZXRSZXNwb25zZSgpO1xuXHRcdFx0Y29uc3Qgd2lraXRleHQgPSByZXNwb25zZS5xdWVyeS5wYWdlc1swXS5yZXZpc2lvbnNbMF0uc2xvdHMubWFpbi5jb250ZW50O1xuXHRcdFx0cmV0dXJuIEpTT04ucGFyc2Uod2lraXRleHQpO1xuXHRcdH0pO1xuXHR9O1xuXHRsZXQgbW9yZWJpdHNXaWtpQXBpVXNlckFnZW50ID0gJ1FpdXdlbi8xLjEgKG1vcmViaXRzLmpzKSc7XG5cdC8qKlxuXHQgKiBTZXQgdGhlIGN1c3RvbSB1c2VyIGFnZW50IGhlYWRlciwgd2hpY2ggaXMgdXNlZCBmb3Igc2VydmVyLXNpZGUgbG9nZ2luZy5cblx0ICogTm90ZSB0aGF0IGRvaW5nIHNvIHdpbGwgc2V0IHRoZSB1c2VyYWdlbnQgZm9yIGV2ZXJ5IGBNb3JlYml0cy53aWtpLmFwaWBcblx0ICogcHJvY2VzcyBwZXJmb3JtZWQgdGhlcmVhZnRlci5cblx0ICpcblx0ICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9saXN0cy53aWtpbWVkaWEub3JnL3BpcGVybWFpbC9tZWRpYXdpa2ktYXBpLWFubm91bmNlLzIwMTQtTm92ZW1iZXIvMDAwMDc1Lmh0bWx9XG5cdCAqIGZvciBvcmlnaW5hbCBhbm5vdW5jZW1lbnQuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpLmFwaVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW3VhPVFpdXdlbi8xLjEgKG1vcmViaXRzLmpzKV0gLSBVc2VyIGFnZW50LiAgVGhlIGRlZmF1bHRcblx0ICogdmFsdWUgb2YgYG1vcmViaXRzLmpzYCB3aWxsIGJlIGFwcGVuZGVkIHRvIGFueSBwcm92aWRlZFxuXHQgKiB2YWx1ZS5cblx0ICovXG5cdE1vcmViaXRzLndpa2kuYXBpLnNldEFwaVVzZXJBZ2VudCA9ICh1YSkgPT4ge1xuXHRcdG1vcmViaXRzV2lraUFwaVVzZXJBZ2VudCA9IGBRaXV3ZW4vMS4xIChtb3JlYml0cy5qcyR7dWEgPyBgOyAke3VhfWAgOiAnJ30pYDtcblx0fTtcblx0LyoqXG5cdCAqIENoYW5nZS9yZXZpc2lvbiB0YWcgYXBwbGllZCB0byBNb3JlYml0cyBhY3Rpb25zIHdoZW4gbm8gb3RoZXIgdGFncyBhcmUgc3BlY2lmaWVkLlxuXHQgKiBVbnVzZWQgYnkgZGVmYXVsdC5cblx0ICpcblx0ICogQGNvbnN0YW50XG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpLmFwaVxuXHQgKiBAdHlwZSB7c3RyaW5nfVxuXHQgKi9cblx0Y29uc3QgbW9yZWJpdHNXaWtpQ2hhbmdlVGFnID0gJyc7XG5cdC8qKlxuXHQgKiBHZXQgYSBuZXcgQ1NSRiB0b2tlbiBvbiBlbmNvdW50ZXJpbmcgdG9rZW4gZXJyb3JzLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraS5hcGlcblx0ICogQHJldHVybnMge3N0cmluZ30gTWVkaWFXaWtpIENTUkYgdG9rZW4uXG5cdCAqL1xuXHRNb3JlYml0cy53aWtpLmFwaS5nZXRUb2tlbiA9ICgpID0+IHtcblx0XHRjb25zdCB0b2tlbkFwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaSh3aW5kb3cud2dVTFMoJ+iOt+WPluS7pOeJjCcsICflj5blvpfmrIrmnZYnKSwge1xuXHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0bWV0YTogJ3Rva2VucycsXG5cdFx0XHR0eXBlOiAnY3NyZicsXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHR9KTtcblx0XHRyZXR1cm4gdG9rZW5BcGkucG9zdCgpLnRoZW4oKGFwaW9iaikgPT4ge1xuXHRcdFx0cmV0dXJuIGFwaW9iai5yZXNwb25zZS5xdWVyeS50b2tlbnMuY3NyZnRva2VuO1xuXHRcdH0pO1xuXHR9O1xuXHQvKiAqKioqKioqKioqKioqKioqIE1vcmViaXRzLndpa2kucGFnZSAqKioqKioqKioqKioqKioqICovXG5cdC8qKlxuXHQgKiBVc2UgdGhlIE1lZGlhV2lraSBBUEkgdG8gbG9hZCBhIHBhZ2UgYW5kIG9wdGlvbmFsbHkgZWRpdCBpdCwgbW92ZSBpdCwgZXRjLlxuXHQgKlxuXHQgKiBDYWxsZXJzIGFyZSBub3QgcGVybWl0dGVkIHRvIGRpcmVjdGx5IGFjY2VzcyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIGNsYXNzIVxuXHQgKiBBbGwgcHJvcGVydHkgYWNjZXNzIGlzIHRocm91Z2ggdGhlIGFwcHJvcHJpYXRlIGdldF9fXygpIG9yIHNldF9fXygpIG1ldGhvZC5cblx0ICpcblx0ICogQ2FsbGVycyBzaG91bGQgc2V0IHtAbGluayBNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5ub3RpY2V9IGFuZCB7QGxpbmsgTW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQucmVkaXJlY3R9XG5cdCAqIGJlZm9yZSB0aGUgZmlyc3QgY2FsbCB0byB7QGxpbmsgTW9yZWJpdHMud2lraS5wYWdlLmxvYWQoKX0uXG5cdCAqXG5cdCAqIEVhY2ggb2YgdGhlIGNhbGxiYWNrIGZ1bmN0aW9ucyB0YWtlcyBvbmUgcGFyYW1ldGVyLCB3aGljaCBpcyBhXG5cdCAqIHJlZmVyZW5jZSB0byB0aGUgTW9yZWJpdHMud2lraS5wYWdlIG9iamVjdCB0aGF0IHJlZ2lzdGVyZWQgdGhlIGNhbGxiYWNrLlxuXHQgKiBDYWxsYmFjayBmdW5jdGlvbnMgbWF5IGludm9rZSBhbnkgTW9yZWJpdHMud2lraS5wYWdlIHByb3RvdHlwZSBtZXRob2QgdXNpbmcgdGhpcyByZWZlcmVuY2UuXG5cdCAqXG5cdCAqXG5cdCAqIENhbGwgc2VxdWVuY2UgZm9yIGNvbW1vbiBvcGVyYXRpb25zIChvcHRpb25hbCBmaW5hbCB1c2VyIGNhbGxiYWNrcyBub3Qgc2hvd24pOlxuXHQgKlxuXHQgKiAtIEVkaXQgY3VycmVudCBjb250ZW50cyBvZiBhIHBhZ2UgKG5vIGVkaXQgY29uZmxpY3QpOlxuXHQgKiBgLmxvYWQodXNlclRleHRFZGl0Q2FsbGJhY2spIC0+IGN0eC5sb2FkQXBpLnBvc3QoKSAtPlxuXHQgKiBjdHgubG9hZEFwaS5wb3N0LnN1Y2Nlc3MoKSAtPiBjdHguZm5Mb2FkU3VjY2VzcygpIC0+IHVzZXJUZXh0RWRpdENhbGxiYWNrKCkgLT5cblx0ICogLnNhdmUoKSAtPiBjdHguc2F2ZUFwaS5wb3N0KCkgLT4gY3R4LmxvYWRBcGkucG9zdC5zdWNjZXNzKCkgLT4gY3R4LmZuU2F2ZVN1Y2Nlc3MoKWBcblx0ICpcblx0ICogLSBFZGl0IGN1cnJlbnQgY29udGVudHMgb2YgYSBwYWdlICh3aXRoIGVkaXQgY29uZmxpY3QpOlxuXHQgKiBgLmxvYWQodXNlclRleHRFZGl0Q2FsbGJhY2spIC0+IGN0eC5sb2FkQXBpLnBvc3QoKSAtPlxuXHQgKiBjdHgubG9hZEFwaS5wb3N0LnN1Y2Nlc3MoKSAtPiBjdHguZm5Mb2FkU3VjY2VzcygpIC0+IHVzZXJUZXh0RWRpdENhbGxiYWNrKCkgLT5cblx0ICogLnNhdmUoKSAtPiBjdHguc2F2ZUFwaS5wb3N0KCkgLT4gY3R4LmxvYWRBcGkucG9zdC5zdWNjZXNzKCkgLT5cblx0ICogY3R4LmZuU2F2ZUVycm9yKCkgLT4gY3R4LmxvYWRBcGkucG9zdCgpIC0+IGN0eC5sb2FkQXBpLnBvc3Quc3VjY2VzcygpIC0+XG5cdCAqIGN0eC5mbkxvYWRTdWNjZXNzKCkgLT4gdXNlclRleHRFZGl0Q2FsbGJhY2soKSAtPiAuc2F2ZSgpIC0+XG5cdCAqIGN0eC5zYXZlQXBpLnBvc3QoKSAtPiBjdHgubG9hZEFwaS5wb3N0LnN1Y2Nlc3MoKSAtPiBjdHguZm5TYXZlU3VjY2VzcygpYFxuXHQgKlxuXHQgKiAtIEFwcGVuZCB0byBhIHBhZ2UgKHNpbWlsYXIgZm9yIHByZXBlbmQgYW5kIG5ld1NlY3Rpb24pOlxuXHQgKiBgLmFwcGVuZCgpIC0+IGN0eC5sb2FkQXBpLnBvc3QoKSAtPiBjdHgubG9hZEFwaS5wb3N0LnN1Y2Nlc3MoKSAtPlxuXHQgKiBjdHguZm5Mb2FkU3VjY2VzcygpIC0+IGN0eC5mbkF1dG9TYXZlKCkgLT4gLnNhdmUoKSAtPiBjdHguc2F2ZUFwaS5wb3N0KCkgLT5cblx0ICogY3R4LmxvYWRBcGkucG9zdC5zdWNjZXNzKCkgLT4gY3R4LmZuU2F2ZVN1Y2Nlc3MoKWBcblx0ICpcblx0ICogTm90ZXM6XG5cdCAqIDEuIEFsbCBmdW5jdGlvbnMgZm9sbG93aW5nIE1vcmViaXRzLndpa2kuYXBpLnBvc3QoKSBhcmUgaW52b2tlZCBhc3luY2hyb25vdXNseSBmcm9tIHRoZSBqUXVlcnkgQUpBWCBsaWJyYXJ5LlxuXHQgKiAyLiBUaGUgc2VxdWVuY2UgZm9yIGFwcGVuZC9wcmVwZW5kL25ld1NlY3Rpb24gY291bGQgYmUgc2xpZ2h0bHkgc2hvcnRlbmVkLFxuXHQgKiBidXQgaXQgd291bGQgcmVxdWlyZSBzaWduaWZpY2FudCBkdXBsaWNhdGlvbiBvZiBjb2RlIGZvciBsaXR0bGUgYmVuZWZpdC5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLndpa2lcblx0ICogQGNsYXNzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBwYWdlTmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBwYWdlLCBwcmVmaXhlZCBieSB0aGUgbmFtZXNwYWNlIChpZiBhbnkpLlxuXHQgKiBGb3IgdGhlIGN1cnJlbnQgcGFnZSwgdXNlIGBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJylgLlxuXHQgKiBAcGFyYW0ge3N0cmluZ3xNb3JlYml0cy5zdGF0dXN9IFtzdGF0dXNdIC0gQSBzdHJpbmcgZGVzY3JpYmluZyB0aGUgYWN0aW9uIGFib3V0IHRvIGJlIHVuZGVydGFrZW4sXG5cdCAqIG9yIGEgTW9yZWJpdHMuc3RhdHVzIG9iamVjdFxuXHQgKi9cblx0TW9yZWJpdHMud2lraS5wYWdlID0gZnVuY3Rpb24gKHBhZ2VOYW1lLCBzdGF0dXMpIHtcblx0XHRzdGF0dXMgfHw9IHdpbmRvdy53Z1VMUygn5omT5byA6aG16Z2i4oCcJywgJ+aJk+mWi+mggemdouOAjCcpICsgcGFnZU5hbWUgKyB3aW5kb3cud2dVTFMoJ+KAnScsICfjgI0nKTtcblx0XHQvKipcblx0XHQgKiBQcml2YXRlIGNvbnRleHQgdmFyaWFibGVzLlxuXHRcdCAqXG5cdFx0ICogVGhpcyBjb250ZXh0IGlzIG5vdCB2aXNpYmxlIHRvIHRoZSBvdXRzaWRlLCB0aHVzIGFsbCB0aGUgZGF0YSBoZXJlXG5cdFx0ICogbXVzdCBiZSBhY2Nlc3NlZCB2aWEgZ2V0dGVyIGFuZCBzZXR0ZXIgZnVuY3Rpb25zLlxuXHRcdCAqXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKi9cblx0XHRjb25zdCBjdHggPSB7XG5cdFx0XHQvLyBiYWNraW5nIGZpZWxkcyBmb3IgcHVibGljIHByb3BlcnRpZXNcblx0XHRcdHBhZ2VOYW1lLFxuXHRcdFx0cGFnZUV4aXN0czogZmFsc2UsXG5cdFx0XHRlZGl0U3VtbWFyeTogbnVsbCxcblx0XHRcdGNoYW5nZVRhZ3M6IG51bGwsXG5cdFx0XHR0ZXN0QWN0aW9uczogbnVsbCxcblx0XHRcdC8vIGFycmF5IGlmIGFueSB2YWxpZCBhY3Rpb25zXG5cdFx0XHRjYWxsYmFja1BhcmFtZXRlcnM6IG51bGwsXG5cdFx0XHRzdGF0dXNFbGVtZW50OiBzdGF0dXMgaW5zdGFuY2VvZiBNb3JlYml0cy5zdGF0dXMgPyBzdGF0dXMgOiBuZXcgTW9yZWJpdHMuc3RhdHVzKHN0YXR1cyksXG5cdFx0XHQvLyAtIGVkaXRcblx0XHRcdHBhZ2VUZXh0OiBudWxsLFxuXHRcdFx0ZWRpdE1vZGU6ICdhbGwnLFxuXHRcdFx0Ly8gc2F2ZSgpIHJlcGxhY2VzIGVudGlyZSBjb250ZW50cyBvZiB0aGUgcGFnZSBieSBkZWZhdWx0XG5cdFx0XHRhcHBlbmRUZXh0OiBudWxsLFxuXHRcdFx0Ly8gY2FuJ3QgcmV1c2UgcGFnZVRleHQgZm9yIHRoaXMgYmVjYXVzZSBwYWdlVGV4dCBpcyBuZWVkZWQgdG8gZm9sbG93IGEgcmVkaXJlY3Rcblx0XHRcdHByZXBlbmRUZXh0OiBudWxsLFxuXHRcdFx0Ly8gY2FuJ3QgcmV1c2UgcGFnZVRleHQgZm9yIHRoaXMgYmVjYXVzZSBwYWdlVGV4dCBpcyBuZWVkZWQgdG8gZm9sbG93IGEgcmVkaXJlY3Rcblx0XHRcdG5ld1NlY3Rpb25UZXh0OiBudWxsLFxuXHRcdFx0bmV3U2VjdGlvblRpdGxlOiBudWxsLFxuXHRcdFx0Y3JlYXRlT3B0aW9uOiBudWxsLFxuXHRcdFx0bWlub3JFZGl0OiBmYWxzZSxcblx0XHRcdGJvdEVkaXQ6IGZhbHNlLFxuXHRcdFx0cGFnZVNlY3Rpb246IG51bGwsXG5cdFx0XHRtYXhDb25mbGljdFJldHJpZXM6IDIsXG5cdFx0XHRtYXhSZXRyaWVzOiAyLFxuXHRcdFx0Zm9sbG93UmVkaXJlY3Q6IGZhbHNlLFxuXHRcdFx0Zm9sbG93Q3Jvc3NOc1JlZGlyZWN0OiB0cnVlLFxuXHRcdFx0d2F0Y2hsaXN0T3B0aW9uOiAnbm9jaGFuZ2UnLFxuXHRcdFx0d2F0Y2hsaXN0RXhwaXJ5OiBudWxsLFxuXHRcdFx0Y3JlYXRvcjogbnVsbCxcblx0XHRcdHRpbWVzdGFtcDogbnVsbCxcblx0XHRcdC8vIC0gcmV2ZXJ0XG5cdFx0XHRyZXZlcnRPbGRJRDogbnVsbCxcblx0XHRcdC8vIC0gbW92ZVxuXHRcdFx0bW92ZURlc3RpbmF0aW9uOiBudWxsLFxuXHRcdFx0bW92ZVRhbGtQYWdlOiBmYWxzZSxcblx0XHRcdG1vdmVTdWJwYWdlczogZmFsc2UsXG5cdFx0XHRtb3ZlU3VwcHJlc3NSZWRpcmVjdDogZmFsc2UsXG5cdFx0XHQvLyAtIHByb3RlY3Rcblx0XHRcdHByb3RlY3RFZGl0OiBudWxsLFxuXHRcdFx0cHJvdGVjdE1vdmU6IG51bGwsXG5cdFx0XHRwcm90ZWN0Q3JlYXRlOiBudWxsLFxuXHRcdFx0cHJvdGVjdENhc2NhZGU6IG51bGwsXG5cdFx0XHQvLyAtIGNyZWF0aW9uIGxvb2t1cFxuXHRcdFx0bG9va3VwTm9uUmVkaXJlY3RDcmVhdG9yOiBmYWxzZSxcblx0XHRcdC8vIGludGVybmFsIHN0YXR1c1xuXHRcdFx0cGFnZUxvYWRlZDogZmFsc2UsXG5cdFx0XHRjc3JmVG9rZW46IG51bGwsXG5cdFx0XHRsb2FkVGltZTogbnVsbCxcblx0XHRcdGxhc3RFZGl0VGltZTogbnVsbCxcblx0XHRcdHBhZ2VJRDogbnVsbCxcblx0XHRcdGNvbnRlbnRNb2RlbDogbnVsbCxcblx0XHRcdHJldmVydEN1cklEOiBudWxsLFxuXHRcdFx0cmV2ZXJ0VXNlcjogbnVsbCxcblx0XHRcdHdhdGNoZWQ6IGZhbHNlLFxuXHRcdFx0ZnVsbHlQcm90ZWN0ZWQ6IGZhbHNlLFxuXHRcdFx0c3VwcHJlc3NQcm90ZWN0V2FybmluZzogZmFsc2UsXG5cdFx0XHRjb25mbGljdFJldHJpZXM6IDAsXG5cdFx0XHRyZXRyaWVzOiAwLFxuXHRcdFx0Ly8gY2FsbGJhY2tzXG5cdFx0XHRvbkxvYWRTdWNjZXNzOiBudWxsLFxuXHRcdFx0b25Mb2FkRmFpbHVyZTogbnVsbCxcblx0XHRcdG9uU2F2ZVN1Y2Nlc3M6IG51bGwsXG5cdFx0XHRvblNhdmVGYWlsdXJlOiBudWxsLFxuXHRcdFx0b25Mb29rdXBDcmVhdGlvblN1Y2Nlc3M6IG51bGwsXG5cdFx0XHRvbkxvb2t1cENyZWF0aW9uRmFpbHVyZTogbnVsbCxcblx0XHRcdG9uTW92ZVN1Y2Nlc3M6IG51bGwsXG5cdFx0XHRvbk1vdmVGYWlsdXJlOiBudWxsLFxuXHRcdFx0b25EZWxldGVTdWNjZXNzOiBudWxsLFxuXHRcdFx0b25EZWxldGVGYWlsdXJlOiBudWxsLFxuXHRcdFx0b25VbmRlbGV0ZVN1Y2Nlc3M6IG51bGwsXG5cdFx0XHRvblVuZGVsZXRlRmFpbHVyZTogbnVsbCxcblx0XHRcdG9uUHJvdGVjdFN1Y2Nlc3M6IG51bGwsXG5cdFx0XHRvblByb3RlY3RGYWlsdXJlOiBudWxsLFxuXHRcdFx0Ly8gaW50ZXJuYWwgb2JqZWN0c1xuXHRcdFx0bG9hZFF1ZXJ5OiBudWxsLFxuXHRcdFx0bG9hZEFwaTogbnVsbCxcblx0XHRcdHNhdmVBcGk6IG51bGwsXG5cdFx0XHRsb29rdXBDcmVhdGlvbkFwaTogbnVsbCxcblx0XHRcdG1vdmVBcGk6IG51bGwsXG5cdFx0XHRtb3ZlUHJvY2Vzc0FwaTogbnVsbCxcblx0XHRcdHBhdHJvbEFwaTogbnVsbCxcblx0XHRcdHBhdHJvbFByb2Nlc3NBcGk6IG51bGwsXG5cdFx0XHRkZWxldGVBcGk6IG51bGwsXG5cdFx0XHRkZWxldGVQcm9jZXNzQXBpOiBudWxsLFxuXHRcdFx0dW5kZWxldGVBcGk6IG51bGwsXG5cdFx0XHR1bmRlbGV0ZVByb2Nlc3NBcGk6IG51bGwsXG5cdFx0XHRwcm90ZWN0QXBpOiBudWxsLFxuXHRcdFx0cHJvdGVjdFByb2Nlc3NBcGk6IG51bGwsXG5cdFx0fTtcblx0XHRjb25zdCBlbXB0eUZ1bmN0aW9uID0gKCkgPT4ge307XG5cdFx0LyoqXG5cdFx0ICogTG9hZHMgdGhlIHRleHQgZm9yIHRoZSBwYWdlLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gb25TdWNjZXNzIC0gQ2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIHdoZW4gdGhlIGxvYWQgaGFzIHN1Y2NlZWRlZC5cblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25GYWlsdXJlXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCB3aGVuIHRoZSBsb2FkIGZhaWxzLlxuXHRcdCAqL1xuXHRcdHRoaXMubG9hZCA9IGZ1bmN0aW9uIChvblN1Y2Nlc3MsIG9uRmFpbHVyZSkge1xuXHRcdFx0Y3R4Lm9uTG9hZFN1Y2Nlc3MgPSBvblN1Y2Nlc3M7XG5cdFx0XHRjdHgub25Mb2FkRmFpbHVyZSA9IG9uRmFpbHVyZSB8fCBlbXB0eUZ1bmN0aW9uO1xuXHRcdFx0Ly8gTmVlZCB0byBiZSBhYmxlIHRvIGRvIHNvbWV0aGluZyBhZnRlciB0aGUgcGFnZSBsb2Fkc1xuXHRcdFx0aWYgKCFvblN1Y2Nlc3MpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoJ0ludGVybmFsIGVycm9yOiBubyBvblN1Y2Nlc3MgY2FsbGJhY2sgcHJvdmlkZWQgdG8gbG9hZCgpIScpO1xuXHRcdFx0XHRjdHgub25Mb2FkRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y3R4LmxvYWRRdWVyeSA9IHtcblx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRwcm9wOiAnaW5mb3xyZXZpc2lvbnMnLFxuXHRcdFx0XHRpbnByb3A6ICd3YXRjaGVkJyxcblx0XHRcdFx0aW50ZXN0YWN0aW9uczogJ2VkaXQnLFxuXHRcdFx0XHQvLyBjYW4gYmUgZXhwYW5kZWRcblx0XHRcdFx0Y3VydGltZXN0YW1wOiAnJyxcblx0XHRcdFx0bWV0YTogJ3Rva2VucycsXG5cdFx0XHRcdHR5cGU6ICdjc3JmJyxcblx0XHRcdFx0dGl0bGVzOiBjdHgucGFnZU5hbWUsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHQvLyBkb24ndCBuZWVkIHJ2bGltaXQ9MSBiZWNhdXNlIHdlIGRvbid0IG5lZWQgcnZzdGFydGlkIGhlcmUgYW5kIG9ubHkgb25lIGFjdHVhbCByZXYgaXMgcmV0dXJuZWQgYnkgZGVmYXVsdFxuXHRcdFx0fTtcblxuXHRcdFx0aWYgKGN0eC5lZGl0TW9kZSA9PT0gJ2FsbCcpIHtcblx0XHRcdFx0Y3R4LmxvYWRRdWVyeS5ydnByb3AgPSAnY29udGVudHx0aW1lc3RhbXAnOyAvLyBnZXQgdGhlIHBhZ2UgY29udGVudCBhdCB0aGUgc2FtZSB0aW1lLCBpZiBuZWVkZWRcblx0XHRcdH0gZWxzZSBpZiAoY3R4LmVkaXRNb2RlID09PSAncmV2ZXJ0Jykge1xuXHRcdFx0XHRjdHgubG9hZFF1ZXJ5LnJ2cHJvcCA9ICd0aW1lc3RhbXAnO1xuXHRcdFx0XHRjdHgubG9hZFF1ZXJ5LnJ2bGltaXQgPSAxO1xuXHRcdFx0XHRjdHgubG9hZFF1ZXJ5LnJ2c3RhcnRpZCA9IGN0eC5yZXZlcnRPbGRJRDtcblx0XHRcdH1cblx0XHRcdGlmIChjdHguZm9sbG93UmVkaXJlY3QpIHtcblx0XHRcdFx0Y3R4LmxvYWRRdWVyeS5yZWRpcmVjdHMgPSAnJzsgLy8gZm9sbG93IGFsbCByZWRpcmVjdHNcblx0XHRcdH1cblxuXHRcdFx0aWYgKHR5cGVvZiBjdHgucGFnZVNlY3Rpb24gPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGN0eC5sb2FkUXVlcnkucnZzZWN0aW9uID0gY3R4LnBhZ2VTZWN0aW9uO1xuXHRcdFx0fVxuXHRcdFx0aWYgKE1vcmViaXRzLnVzZXJJc1N5c29wKSB7XG5cdFx0XHRcdGN0eC5sb2FkUXVlcnkuaW5wcm9wICs9ICd8cHJvdGVjdGlvbic7XG5cdFx0XHR9XG5cdFx0XHRjdHgubG9hZEFwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdFx0d2luZG93LndnVUxTKCfmipPlj5bpobXpnaLigKbigKYnLCAn5oqT5Y+W6aCB6Z2i4oCm4oCmJyksXG5cdFx0XHRcdGN0eC5sb2FkUXVlcnksXG5cdFx0XHRcdGZuTG9hZFN1Y2Nlc3MsXG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LFxuXHRcdFx0XHRjdHgub25Mb2FkRmFpbHVyZVxuXHRcdFx0KTtcblx0XHRcdGN0eC5sb2FkQXBpLnNldFBhcmVudCh0aGlzKTtcblx0XHRcdGN0eC5sb2FkQXBpLnBvc3QoKTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIFNhdmVzIHRoZSB0ZXh0IGZvciB0aGUgcGFnZSB0byBXaWtpcGVkaWEuXG5cdFx0ICogTXVzdCBiZSBwcmVjZWRlZCBieSBzdWNjZXNzZnVsbHkgY2FsbGluZyBgbG9hZCgpYC5cblx0XHQgKlxuXHRcdCAqIFdhcm5pbmc6IENhbGxpbmcgYHNhdmUoKWAgY2FuIHJlc3VsdCBpbiBhZGRpdGlvbmFsIGNhbGxzIHRvIHRoZVxuXHRcdCAqIHByZXZpb3VzIGBsb2FkKClgIGNhbGxiYWNrcyB0byByZWNvdmVyIGZyb20gZWRpdCBjb25mbGljdHMhIEluIHRoaXNcblx0XHQgKiBjYXNlLCBjYWxsZXJzIG11c3QgbWFrZSB0aGUgc2FtZSBlZGl0IHRvIHRoZSBuZXcgcGFnZVRleHQgYW5kXG5cdFx0ICogcmUtaW52b2tlIGBzYXZlKClgLiAgVGhpcyBiZWhhdmlvciBjYW4gYmUgZGlzYWJsZWQgd2l0aFxuXHRcdCAqIGBzZXRNYXhDb25mbGljdFJldHJpZXMoMClgLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uU3VjY2Vzc10gLSBDYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgd2hlbiB0aGUgc2F2ZSBoYXMgc3VjY2VlZGVkLlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvbkZhaWx1cmVdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIHdoZW4gdGhlIHNhdmUgZmFpbHMuXG5cdFx0ICovXG5cdFx0dGhpcy5zYXZlID0gZnVuY3Rpb24gKG9uU3VjY2Vzcywgb25GYWlsdXJlKSB7XG5cdFx0XHRjdHgub25TYXZlU3VjY2VzcyA9IG9uU3VjY2Vzcztcblx0XHRcdGN0eC5vblNhdmVGYWlsdXJlID0gb25GYWlsdXJlIHx8IGVtcHR5RnVuY3Rpb247XG5cdFx0XHQvLyBhcmUgd2UgZ2V0dGluZyBvdXIgZWRpdGluZyB0b2tlbiBmcm9tIG13LnVzZXIudG9rZW5zP1xuXHRcdFx0Y29uc3QgY2FuVXNlTXdVc2VyVG9rZW4gPSBmbkNhblVzZU13VXNlclRva2VuKCdlZGl0Jyk7XG5cdFx0XHRpZiAoIWN0eC5wYWdlTG9hZGVkICYmICFjYW5Vc2VNd1VzZXJUb2tlbikge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcignSW50ZXJuYWwgZXJyb3I6IGF0dGVtcHQgdG8gc2F2ZSBhIHBhZ2UgdGhhdCBoYXMgbm90IGJlZW4gbG9hZGVkIScpO1xuXHRcdFx0XHRjdHgub25TYXZlRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFjdHguZWRpdFN1bW1hcnkpIHtcblx0XHRcdFx0Ly8gbmV3IHNlY3Rpb24gbW9kZSBhbGxvd3MgKG5heSwgZW5jb3VyYWdlcykgdXNpbmcgdGhlXG5cdFx0XHRcdC8vIHRpdGxlIGFzIHRoZSBlZGl0IHN1bW1hcnksIGJ1dCB0aGUgcXVlcnkgbmVlZHNcblx0XHRcdFx0Ly8gZWRpdFN1bW1hcnkgdG8gYmUgdW5kZWZpbmVkIG9yICcnLCBub3QgbnVsbFxuXHRcdFx0XHRpZiAoY3R4LmVkaXRNb2RlID09PSAnbmV3JyAmJiBjdHgubmV3U2VjdGlvblRpdGxlKSB7XG5cdFx0XHRcdFx0Y3R4LmVkaXRTdW1tYXJ5ID0gJyc7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoJ0ludGVybmFsIGVycm9yOiBlZGl0IHN1bW1hcnkgbm90IHNldCBiZWZvcmUgc2F2ZSEnKTtcblx0XHRcdFx0XHRjdHgub25TYXZlRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vIHNob3VsZG4ndCBoYXBwZW4gaWYgY2FuVXNlTXdVc2VyVG9rZW4gPT09IHRydWVcblx0XHRcdGlmIChcblx0XHRcdFx0Y3R4LmZ1bGx5UHJvdGVjdGVkICYmXG5cdFx0XHRcdCFjdHguc3VwcHJlc3NQcm90ZWN0V2FybmluZyAmJlxuXHRcdFx0XHQhY29uZmlybShcblx0XHRcdFx0XHRjdHguZnVsbHlQcm90ZWN0ZWQgPT09ICdpbmZpbml0eSdcblx0XHRcdFx0XHRcdD8gd2luZG93LndnVUxTKCfmgqjljbPlsIbnvJbovpHlhajkv53miqTpobXpnaLigJwnLCAn5oKo5Y2z5bCH57eo6Lyv5YWo5L+d6K236aCB6Z2i44CMJykgK1xuXHRcdFx0XHRcdFx0XHRcdGN0eC5wYWdlTmFtZSArXG5cdFx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKFxuXHRcdFx0XHRcdFx0XHRcdFx0J+KAne+8iOaXoOmZkOacn++8ieOAglxcblxcbuWNleWHu+ehruWumuS7peehruWumu+8jOaIluWNleWHu+WPlua2iOS7peWPlua2iOaTjeS9nOOAgicsXG5cdFx0XHRcdFx0XHRcdFx0XHQn44CN77yI54Sh6ZmQ5pyf77yJ44CCXFxuXFxu6bue5pOK56K65a6a5Lul56K65a6a77yM5oiW6bue5pOK5Y+W5raI5Lul5Y+W5raI5pON5L2c44CCJ1xuXHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdDogYCR7XG5cdFx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfmgqjljbPlsIbnvJbovpHlhajkv53miqTpobXpnaLigJwnLCAn5oKo5Y2z5bCH57eo6Lyv5YWo5L+d6K236aCB6Z2i44CMJykgK1xuXHRcdFx0XHRcdFx0XHRcdGN0eC5wYWdlTmFtZSArXG5cdFx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfigJ3vvIjliLDmnJ/vvJonLCAn44CN77yI5Yiw5pyf77yaJykgK1xuXHRcdFx0XHRcdFx0XHRcdG5ldyBNb3JlYml0cy5kYXRlKGN0eC5mdWxseVByb3RlY3RlZCkuY2FsZW5kYXIoJ3V0YycpXG5cdFx0XHRcdFx0XHRcdH0gKFVUQynvvInjgIJcXG5cXG4ke3dpbmRvdy53Z1VMUyhcblx0XHRcdFx0XHRcdFx0XHQn5Y2V5Ye756Gu5a6a5Lul56Gu5a6a77yM5oiW5Y2V5Ye75Y+W5raI5Lul5Y+W5raI5pON5L2c44CCJyxcblx0XHRcdFx0XHRcdFx0XHQn6bue5pOK56K65a6a5Lul56K65a6a77yM5oiW6bue5pOK5Y+W5raI5Lul5Y+W5raI5pON5L2c44CCJ1xuXHRcdFx0XHRcdFx0XHQpfWBcblx0XHRcdFx0KVxuXHRcdFx0KSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdpbmRvdy53Z1VMUygn5bey5Y+W5raI5a+55YWo5L+d5oqk6aG16Z2i55qE57yW6L6R44CCJywgJ+W3suWPlua2iOWwjeWFqOS/neitt+mggemdoueahOe3qOi8r+OAgicpKTtcblx0XHRcdFx0Y3R4Lm9uU2F2ZUZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGN0eC5yZXRyaWVzID0gMDtcblx0XHRcdGNvbnN0IHF1ZXJ5ID0ge1xuXHRcdFx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRcdFx0dGl0bGU6IGN0eC5wYWdlTmFtZSxcblx0XHRcdFx0c3VtbWFyeTogY3R4LmVkaXRTdW1tYXJ5LFxuXHRcdFx0XHR0b2tlbjogY2FuVXNlTXdVc2VyVG9rZW4gPyBtdy51c2VyLnRva2Vucy5nZXQoJ2NzcmZUb2tlbicpIDogY3R4LmNzcmZUb2tlbixcblx0XHRcdFx0d2F0Y2hsaXN0OiBjdHgud2F0Y2hsaXN0T3B0aW9uLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdH07XG5cdFx0XHRpZiAoY3R4LmNoYW5nZVRhZ3MpIHtcblx0XHRcdFx0cXVlcnkudGFncyA9IGN0eC5jaGFuZ2VUYWdzO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGZuQXBwbHlXYXRjaGxpc3RFeHBpcnkoKSkge1xuXHRcdFx0XHRxdWVyeS53YXRjaGxpc3RleHBpcnkgPSBjdHgud2F0Y2hsaXN0RXhwaXJ5O1xuXHRcdFx0fVxuXHRcdFx0aWYgKHR5cGVvZiBjdHgucGFnZVNlY3Rpb24gPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdHF1ZXJ5LnNlY3Rpb24gPSBjdHgucGFnZVNlY3Rpb247XG5cdFx0XHR9XG5cdFx0XHQvLyBTZXQgbWlub3IgZWRpdCBhdHRyaWJ1dGUuIElmIHRoZXNlIHBhcmFtZXRlcnMgYXJlIHByZXNlbnQgd2l0aCBhbnkgdmFsdWUsIGl0IGlzIGludGVycHJldGVkIGFzIHRydWVcblx0XHRcdGlmIChjdHgubWlub3JFZGl0KSB7XG5cdFx0XHRcdHF1ZXJ5Lm1pbm9yID0gdHJ1ZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHF1ZXJ5Lm5vdG1pbm9yID0gdHJ1ZTsgLy8gZm9yY2UgVHdpbmtsZSBjb25maWcgdG8gb3ZlcnJpZGUgdXNlciBwcmVmZXJlbmNlIHNldHRpbmcgZm9yIFwiYWxsIGVkaXRzIGFyZSBtaW5vclwiXG5cdFx0XHR9XG5cdFx0XHQvLyBTZXQgYm90IGVkaXQgYXR0cmlidXRlLiBJZiB0aGlzIHBhcmFtZXRlciBpcyBwcmVzZW50IHdpdGggYW55IHZhbHVlLCBpdCBpcyBpbnRlcnByZXRlZCBhcyB0cnVlXG5cdFx0XHRpZiAoY3R4LmJvdEVkaXQpIHtcblx0XHRcdFx0cXVlcnkuYm90ID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHN3aXRjaCAoY3R4LmVkaXRNb2RlKSB7XG5cdFx0XHRcdGNhc2UgJ2FwcGVuZCc6XG5cdFx0XHRcdFx0aWYgKGN0eC5hcHBlbmRUZXh0ID09PSBudWxsKSB7XG5cdFx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcignSW50ZXJuYWwgZXJyb3I6IGFwcGVuZCB0ZXh0IG5vdCBzZXQgYmVmb3JlIHNhdmUhJyk7XG5cdFx0XHRcdFx0XHRjdHgub25TYXZlRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cXVlcnkuYXBwZW5kdGV4dCA9IGN0eC5hcHBlbmRUZXh0OyAvLyB1c2UgbW9kZSB0byBhcHBlbmQgdG8gY3VycmVudCBwYWdlIGNvbnRlbnRzXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3ByZXBlbmQnOlxuXHRcdFx0XHRcdGlmIChjdHgucHJlcGVuZFRleHQgPT09IG51bGwpIHtcblx0XHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKCdJbnRlcm5hbCBlcnJvcjogcHJlcGVuZCB0ZXh0IG5vdCBzZXQgYmVmb3JlIHNhdmUhJyk7XG5cdFx0XHRcdFx0XHRjdHgub25TYXZlRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cXVlcnkucHJlcGVuZHRleHQgPSBjdHgucHJlcGVuZFRleHQ7IC8vIHVzZSBtb2RlIHRvIHByZXBlbmQgdG8gY3VycmVudCBwYWdlIGNvbnRlbnRzXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ25ldyc6XG5cdFx0XHRcdFx0aWYgKCFjdHgubmV3U2VjdGlvblRleHQpIHtcblx0XHRcdFx0XHRcdC8vIEFQSSBkb2Vzbid0IGFsbG93IGVtcHR5IG5ldyBzZWN0aW9uIHRleHRcblx0XHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKCdJbnRlcm5hbCBlcnJvcjogbmV3IHNlY3Rpb24gdGV4dCBub3Qgc2V0IGJlZm9yZSBzYXZlIScpO1xuXHRcdFx0XHRcdFx0Y3R4Lm9uU2F2ZUZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHF1ZXJ5LnNlY3Rpb24gPSAnbmV3Jztcblx0XHRcdFx0XHRxdWVyeS50ZXh0ID0gY3R4Lm5ld1NlY3Rpb25UZXh0OyAvLyBhZGQgYSBuZXcgc2VjdGlvbiB0byBjdXJyZW50IHBhZ2Vcblx0XHRcdFx0XHRxdWVyeS5zZWN0aW9udGl0bGUgPSBjdHgubmV3U2VjdGlvblRpdGxlIHx8IGN0eC5lZGl0U3VtbWFyeTsgLy8gZG9uZSBieSB0aGUgQVBJLCBidXQgbm9uLScnIHZhbHVlcyB3b3VsZCBnZXQgdHJlYXRlZCBhcyB0ZXh0XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3JldmVydCc6XG5cdFx0XHRcdFx0cXVlcnkudW5kbyA9IGN0eC5yZXZlcnRDdXJJRDtcblx0XHRcdFx0XHRxdWVyeS51bmRvYWZ0ZXIgPSBjdHgucmV2ZXJ0T2xkSUQ7XG5cdFx0XHRcdFx0aWYgKGN0eC5sYXN0RWRpdFRpbWUpIHtcblx0XHRcdFx0XHRcdHF1ZXJ5LmJhc2V0aW1lc3RhbXAgPSBjdHgubGFzdEVkaXRUaW1lOyAvLyBjaGVjayB0aGF0IHBhZ2UgaGFzbid0IGJlZW4gZWRpdGVkIHNpbmNlIGl0IHdhcyBsb2FkZWRcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRxdWVyeS5zdGFydHRpbWVzdGFtcCA9IGN0eC5sb2FkVGltZTsgLy8gY2hlY2sgdGhhdCBwYWdlIGhhc24ndCBiZWVuIGRlbGV0ZWQgc2luY2UgaXQgd2FzIGxvYWRlZCAoZG9uJ3QgcmVjcmVhdGUgYmFkIHN0dWZmKVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdC8vICdhbGwnXG5cdFx0XHRcdFx0cXVlcnkudGV4dCA9IGN0eC5wYWdlVGV4dDsgLy8gcmVwbGFjZSBlbnRpcmUgY29udGVudHMgb2YgdGhlIHBhZ2Vcblx0XHRcdFx0XHRpZiAoY3R4Lmxhc3RFZGl0VGltZSkge1xuXHRcdFx0XHRcdFx0cXVlcnkuYmFzZXRpbWVzdGFtcCA9IGN0eC5sYXN0RWRpdFRpbWU7IC8vIGNoZWNrIHRoYXQgcGFnZSBoYXNuJ3QgYmVlbiBlZGl0ZWQgc2luY2UgaXQgd2FzIGxvYWRlZFxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHF1ZXJ5LnN0YXJ0dGltZXN0YW1wID0gY3R4LmxvYWRUaW1lOyAvLyBjaGVjayB0aGF0IHBhZ2UgaGFzbid0IGJlZW4gZGVsZXRlZCBzaW5jZSBpdCB3YXMgbG9hZGVkIChkb24ndCByZWNyZWF0ZSBiYWQgc3R1ZmYpXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRpZiAoWydyZWNyZWF0ZScsICdjcmVhdGVvbmx5JywgJ25vY3JlYXRlJ10uaW5jbHVkZXMoY3R4LmNyZWF0ZU9wdGlvbikpIHtcblx0XHRcdFx0cXVlcnlbY3R4LmNyZWF0ZU9wdGlvbl0gPSAnJztcblx0XHRcdH1cblx0XHRcdGlmIChjYW5Vc2VNd1VzZXJUb2tlbiAmJiBjdHguZm9sbG93UmVkaXJlY3QpIHtcblx0XHRcdFx0cXVlcnkucmVkaXJlY3QgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0Y3R4LnNhdmVBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdHdpbmRvdy53Z1VMUygn5L+d5a2Y6aG16Z2i4oCm4oCmJywgJ+WEsuWtmOmggemdouKApuKApicpLFxuXHRcdFx0XHRxdWVyeSxcblx0XHRcdFx0Zm5TYXZlU3VjY2Vzcyxcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQsXG5cdFx0XHRcdGZuU2F2ZUVycm9yXG5cdFx0XHQpO1xuXHRcdFx0Y3R4LnNhdmVBcGkuc2V0UGFyZW50KHRoaXMpO1xuXHRcdFx0Y3R4LnNhdmVBcGkucG9zdCgpO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQWRkcyB0aGUgdGV4dCBwcm92aWRlZCB2aWEgYHNldEFwcGVuZFRleHQoKWAgdG8gdGhlIGVuZCBvZiB0aGVcblx0XHQgKiBwYWdlLiAgRG9lcyBub3QgcmVxdWlyZSBjYWxsaW5nIGBsb2FkKClgIGZpcnN0LCB1bmxlc3MgYSB3YXRjaGxpc3Rcblx0XHQgKiBleHBpcnkgaXMgdXNlZC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvblN1Y2Nlc3NdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIHdoZW4gdGhlIG1ldGhvZCBoYXMgc3VjY2VlZGVkLlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvbkZhaWx1cmVdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIHdoZW4gdGhlIG1ldGhvZCBmYWlscy5cblx0XHQgKi9cblx0XHR0aGlzLmFwcGVuZCA9IGZ1bmN0aW9uIChvblN1Y2Nlc3MsIG9uRmFpbHVyZSkge1xuXHRcdFx0Y3R4LmVkaXRNb2RlID0gJ2FwcGVuZCc7XG5cdFx0XHRpZiAoZm5DYW5Vc2VNd1VzZXJUb2tlbignZWRpdCcpKSB7XG5cdFx0XHRcdHRoaXMuc2F2ZShvblN1Y2Nlc3MsIG9uRmFpbHVyZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjdHgub25TYXZlU3VjY2VzcyA9IG9uU3VjY2Vzcztcblx0XHRcdFx0Y3R4Lm9uU2F2ZUZhaWx1cmUgPSBvbkZhaWx1cmUgfHwgZW1wdHlGdW5jdGlvbjtcblx0XHRcdFx0dGhpcy5sb2FkKGZuQXV0b1NhdmUsIGN0eC5vblNhdmVGYWlsdXJlKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEFkZHMgdGhlIHRleHQgcHJvdmlkZWQgdmlhIGBzZXRQcmVwZW5kVGV4dCgpYCB0byB0aGUgc3RhcnQgb2YgdGhlXG5cdFx0ICogcGFnZS4gIERvZXMgbm90IHJlcXVpcmUgY2FsbGluZyBgbG9hZCgpYCBmaXJzdCwgdW5sZXNzIGEgd2F0Y2hsaXN0XG5cdFx0ICogZXhwaXJ5IGlzIHVzZWQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSAgW29uU3VjY2Vzc10gLSBDYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgd2hlbiB0aGUgbWV0aG9kIGhhcyBzdWNjZWVkZWQuXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gIFtvbkZhaWx1cmVdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIHdoZW4gdGhlIG1ldGhvZCBmYWlscy5cblx0XHQgKi9cblx0XHR0aGlzLnByZXBlbmQgPSBmdW5jdGlvbiAob25TdWNjZXNzLCBvbkZhaWx1cmUpIHtcblx0XHRcdGN0eC5lZGl0TW9kZSA9ICdwcmVwZW5kJztcblx0XHRcdGlmIChmbkNhblVzZU13VXNlclRva2VuKCdlZGl0JykpIHtcblx0XHRcdFx0dGhpcy5zYXZlKG9uU3VjY2Vzcywgb25GYWlsdXJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGN0eC5vblNhdmVTdWNjZXNzID0gb25TdWNjZXNzO1xuXHRcdFx0XHRjdHgub25TYXZlRmFpbHVyZSA9IG9uRmFpbHVyZSB8fCBlbXB0eUZ1bmN0aW9uO1xuXHRcdFx0XHR0aGlzLmxvYWQoZm5BdXRvU2F2ZSwgY3R4Lm9uU2F2ZUZhaWx1cmUpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQ3JlYXRlcyBhIG5ldyBzZWN0aW9uIHdpdGggdGhlIHRleHQgcHJvdmlkZWQgYnkgYHNldE5ld1NlY3Rpb25UZXh0KClgXG5cdFx0ICogYW5kIHNlY3Rpb24gdGl0bGUgZnJvbSBgc2V0TmV3U2VjdGlvblRpdGxlKClgLlxuXHRcdCAqIElmIGBlZGl0U3VtbWFyeWAgaXMgcHJvdmlkZWQsIHRoYXQgd2lsbCBiZSB1c2VkIGluc3RlYWQgb2YgdGhlXG5cdFx0ICogYXV0b2dlbmVyYXRlZCBcIi0+VGl0bGUgKG5ldyBzZWN0aW9uXCIgZWRpdCBzdW1tYXJ5LlxuXHRcdCAqIERvZXMgbm90IHJlcXVpcmUgY2FsbGluZyBgbG9hZCgpYCBmaXJzdCwgdW5sZXNzIGEgd2F0Y2hsaXN0IGV4cGlyeVxuXHRcdCAqIGlzIHVzZWQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSAgW29uU3VjY2Vzc10gLSBDYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgd2hlbiB0aGUgbWV0aG9kIGhhcyBzdWNjZWVkZWQuXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gIFtvbkZhaWx1cmVdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIHdoZW4gdGhlIG1ldGhvZCBmYWlscy5cblx0XHQgKi9cblx0XHR0aGlzLm5ld1NlY3Rpb24gPSBmdW5jdGlvbiAob25TdWNjZXNzLCBvbkZhaWx1cmUpIHtcblx0XHRcdGN0eC5lZGl0TW9kZSA9ICduZXcnO1xuXHRcdFx0aWYgKGZuQ2FuVXNlTXdVc2VyVG9rZW4oJ2VkaXQnKSkge1xuXHRcdFx0XHR0aGlzLnNhdmUob25TdWNjZXNzLCBvbkZhaWx1cmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3R4Lm9uU2F2ZVN1Y2Nlc3MgPSBvblN1Y2Nlc3M7XG5cdFx0XHRcdGN0eC5vblNhdmVGYWlsdXJlID0gb25GYWlsdXJlIHx8IGVtcHR5RnVuY3Rpb247XG5cdFx0XHRcdHRoaXMubG9hZChmbkF1dG9TYXZlLCBjdHgub25TYXZlRmFpbHVyZSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHQvKiogQHJldHVybnMge3N0cmluZ30gVGhlIG5hbWUgb2YgdGhlIGxvYWRlZCBwYWdlLCBpbmNsdWRpbmcgdGhlIG5hbWVzcGFjZSAqL1xuXHRcdHRoaXMuZ2V0UGFnZU5hbWUgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gY3R4LnBhZ2VOYW1lO1xuXHRcdH07XG5cdFx0LyoqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSB0ZXh0IG9mIHRoZSBwYWdlIGFmdGVyIGEgc3VjY2Vzc2Z1bCBsb2FkKCkgKi9cblx0XHR0aGlzLmdldFBhZ2VUZXh0ID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGN0eC5wYWdlVGV4dDtcblx0XHR9O1xuXHRcdC8qKiBAcGFyYW0ge3N0cmluZ30gcGFnZVRleHQgLSBVcGRhdGVkIHBhZ2UgdGV4dCB0aGF0IHdpbGwgYmUgc2F2ZWQgd2hlbiBgc2F2ZSgpYCBpcyBjYWxsZWQgKi9cblx0XHR0aGlzLnNldFBhZ2VUZXh0ID0gKHBhZ2VUZXh0KSA9PiB7XG5cdFx0XHRjdHguZWRpdE1vZGUgPSAnYWxsJztcblx0XHRcdGN0eC5wYWdlVGV4dCA9IHBhZ2VUZXh0O1xuXHRcdH07XG5cdFx0LyoqIEBwYXJhbSB7c3RyaW5nfSBhcHBlbmRUZXh0IC0gVGV4dCB0aGF0IHdpbGwgYmUgYXBwZW5kZWQgdG8gdGhlIHBhZ2Ugd2hlbiBgYXBwZW5kKClgIGlzIGNhbGxlZCAqL1xuXHRcdHRoaXMuc2V0QXBwZW5kVGV4dCA9IChhcHBlbmRUZXh0KSA9PiB7XG5cdFx0XHRjdHguZWRpdE1vZGUgPSAnYXBwZW5kJztcblx0XHRcdGN0eC5hcHBlbmRUZXh0ID0gYXBwZW5kVGV4dDtcblx0XHR9O1xuXHRcdC8qKiBAcGFyYW0ge3N0cmluZ30gcHJlcGVuZFRleHQgLSBUZXh0IHRoYXQgd2lsbCBiZSBwcmVwZW5kZWQgdG8gdGhlIHBhZ2Ugd2hlbiBgcHJlcGVuZCgpYCBpcyBjYWxsZWQgKi9cblx0XHR0aGlzLnNldFByZXBlbmRUZXh0ID0gKHByZXBlbmRUZXh0KSA9PiB7XG5cdFx0XHRjdHguZWRpdE1vZGUgPSAncHJlcGVuZCc7XG5cdFx0XHRjdHgucHJlcGVuZFRleHQgPSBwcmVwZW5kVGV4dDtcblx0XHR9O1xuXHRcdC8qKiBAcGFyYW0ge3N0cmluZ30gbmV3U2VjdGlvblRleHQgLSBUZXh0IHRoYXQgd2lsbCBiZSBhZGRlZCBpbiBhIG5ldyBzZWN0aW9uIG9uIHRoZSBwYWdlIHdoZW4gYG5ld1NlY3Rpb24oKWAgaXMgY2FsbGVkICovXG5cdFx0dGhpcy5zZXROZXdTZWN0aW9uVGV4dCA9IChuZXdTZWN0aW9uVGV4dCkgPT4ge1xuXHRcdFx0Y3R4LmVkaXRNb2RlID0gJ25ldyc7XG5cdFx0XHRjdHgubmV3U2VjdGlvblRleHQgPSBuZXdTZWN0aW9uVGV4dDtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBuZXdTZWN0aW9uVGl0bGUgLSBUaXRsZSBmb3IgdGhlIG5ldyBzZWN0aW9uIGNyZWF0ZWQgd2hlbiBgbmV3U2VjdGlvbigpYCBpcyBjYWxsZWRcblx0XHQgKiBJZiBtaXNzaW5nLCBgY3R4LmVkaXRTdW1tYXJ5YCB3aWxsIGJlIHVzZWQuIElzc3VlcyBtYXkgb2NjdXIgaWYgYSBzdWJzdGl0dXRlZCB0ZW1wbGF0ZSBpcyB1c2VkLlxuXHRcdCAqL1xuXHRcdHRoaXMuc2V0TmV3U2VjdGlvblRpdGxlID0gKG5ld1NlY3Rpb25UaXRsZSkgPT4ge1xuXHRcdFx0Y3R4LmVkaXRNb2RlID0gJ25ldyc7XG5cdFx0XHRjdHgubmV3U2VjdGlvblRpdGxlID0gbmV3U2VjdGlvblRpdGxlO1xuXHRcdH07XG5cdFx0Ly8gRWRpdC1yZWxhdGVkIHNldHRlciBtZXRob2RzOlxuXHRcdC8qKlxuXHRcdCAqIFNldCB0aGUgZWRpdCBzdW1tYXJ5IHRoYXQgd2lsbCBiZSB1c2VkIHdoZW4gYHNhdmUoKWAgaXMgY2FsbGVkLlxuXHRcdCAqIFVubmVjZXNzYXJ5IGlmIGVkaXRNb2RlIGlzICduZXcnIGFuZCBuZXdTZWN0aW9uVGl0bGUgaXMgcHJvdmlkZWQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gc3VtbWFyeVxuXHRcdCAqL1xuXHRcdHRoaXMuc2V0RWRpdFN1bW1hcnkgPSAoc3VtbWFyeSkgPT4ge1xuXHRcdFx0Y3R4LmVkaXRTdW1tYXJ5ID0gc3VtbWFyeTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIFNldCBhbnkgY3VzdG9tIHRhZyhzKSB0byBiZSBhcHBsaWVkIHRvIHRoZSBBUEkgYWN0aW9uLlxuXHRcdCAqIEEgbnVtYmVyIG9mIGFjdGlvbnMgZG9uJ3Qgc3VwcG9ydCBpdCwgbW9zdCBub3RhYmx5IHdhdGNoLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IHRhZ3MgLSBTdHJpbmcgb3IgYXJyYXkgb2YgdGFnKHMpLlxuXHRcdCAqL1xuXHRcdHRoaXMuc2V0Q2hhbmdlVGFncyA9ICh0YWdzKSA9PiB7XG5cdFx0XHRjdHguY2hhbmdlVGFncyA9IHRhZ3M7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gW2NyZWF0ZU9wdGlvbj1udWxsXSAtIENhbiB0YWtlIHRoZSBmb2xsb3dpbmcgZm91ciB2YWx1ZXM6XG5cdFx0ICogLSByZWNyZWF0ZTogY3JlYXRlIHRoZSBwYWdlIGlmIGl0IGRvZXMgbm90IGV4aXN0LCBvciBlZGl0IGl0IGlmIGl0IGV4aXN0cy5cblx0XHQgKiAtIGNyZWF0ZW9ubHk6IGNyZWF0ZSB0aGUgcGFnZSBpZiBpdCBkb2VzIG5vdCBleGlzdCwgYnV0IHJldHVybiBhblxuXHRcdCAqIGVycm9yIGlmIGl0IGFscmVhZHkgZXhpc3RzLlxuXHRcdCAqIC0gbm9jcmVhdGU6IGRvbid0IGNyZWF0ZSB0aGUgcGFnZSwgb25seSBlZGl0IGl0IGlmIGl0IGFscmVhZHkgZXhpc3RzLlxuXHRcdCAqIC0gYG51bGxgOiBjcmVhdGUgdGhlIHBhZ2UgaWYgaXQgZG9lcyBub3QgZXhpc3QsIHVubGVzcyBpdCB3YXMgZGVsZXRlZFxuXHRcdCAqIGluIHRoZSBtb21lbnQgYmV0d2VlbiBsb2FkaW5nIHRoZSBwYWdlIGFuZCBzYXZpbmcgdGhlIGVkaXQgKGRlZmF1bHQpLlxuXHRcdCAqL1xuXHRcdHRoaXMuc2V0Q3JlYXRlT3B0aW9uID0gKGNyZWF0ZU9wdGlvbikgPT4ge1xuXHRcdFx0Y3R4LmNyZWF0ZU9wdGlvbiA9IGNyZWF0ZU9wdGlvbjtcblx0XHR9O1xuXHRcdC8qKiBAcGFyYW0ge2Jvb2xlYW59IG1pbm9yRWRpdCAtIFNldCB0cnVlIHRvIG1hcmsgdGhlIGVkaXQgYXMgYSBtaW5vciBlZGl0LiAqL1xuXHRcdHRoaXMuc2V0TWlub3JFZGl0ID0gKG1pbm9yRWRpdCkgPT4ge1xuXHRcdFx0Y3R4Lm1pbm9yRWRpdCA9IG1pbm9yRWRpdDtcblx0XHR9O1xuXHRcdC8qKiBAcGFyYW0ge2Jvb2xlYW59IGJvdEVkaXQgLSBTZXQgdHJ1ZSB0byBtYXJrIHRoZSBlZGl0IGFzIGEgYm90IGVkaXQgKi9cblx0XHR0aGlzLnNldEJvdEVkaXQgPSAoYm90RWRpdCkgPT4ge1xuXHRcdFx0Y3R4LmJvdEVkaXQgPSBib3RFZGl0O1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IHBhZ2VTZWN0aW9uIC0gSW50ZWdlciBzcGVjaWZ5aW5nIHRoZSBzZWN0aW9uIG51bWJlciB0byBsb2FkIG9yIHNhdmUuXG5cdFx0ICogSWYgc3BlY2lmaWVkIGFzIGBudWxsYCwgdGhlIGVudGlyZSBwYWdlIHdpbGwgYmUgcmV0cmlldmVkLlxuXHRcdCAqL1xuXHRcdHRoaXMuc2V0UGFnZVNlY3Rpb24gPSAocGFnZVNlY3Rpb24pID0+IHtcblx0XHRcdGN0eC5wYWdlU2VjdGlvbiA9IHBhZ2VTZWN0aW9uO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IG1heENvbmZsaWN0UmV0cmllcyAtIE51bWJlciBvZiByZXRyaWVzIGZvciBzYXZlIGVycm9ycyBpbnZvbHZpbmcgYW4gZWRpdCBjb25mbGljdCBvclxuXHRcdCAqIGxvc3Mgb2YgdG9rZW4uIERlZmF1bHQ6IDIuXG5cdFx0ICovXG5cdFx0dGhpcy5zZXRNYXhDb25mbGljdFJldHJpZXMgPSAobWF4Q29uZmxpY3RSZXRyaWVzKSA9PiB7XG5cdFx0XHRjdHgubWF4Q29uZmxpY3RSZXRyaWVzID0gbWF4Q29uZmxpY3RSZXRyaWVzO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IG1heFJldHJpZXMgLSBOdW1iZXIgb2YgcmV0cmllcyBmb3Igc2F2ZSBlcnJvcnMgbm90IGludm9sdmluZyBhbiBlZGl0IGNvbmZsaWN0IG9yXG5cdFx0ICogbG9zcyBvZiB0b2tlbi4gRGVmYXVsdDogMi5cblx0XHQgKi9cblx0XHR0aGlzLnNldE1heFJldHJpZXMgPSAobWF4UmV0cmllcykgPT4ge1xuXHRcdFx0Y3R4Lm1heFJldHJpZXMgPSBtYXhSZXRyaWVzO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogU2V0IHdoZXRoZXIgYW5kIGhvdyB0byB3YXRjaCB0aGUgcGFnZSwgaW5jbHVkaW5nIHNldHRpbmcgYW4gZXhwaXJ5LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtib29sZWFufHN0cmluZ3xNb3JlYml0cy5kYXRlfERhdGV9IFt3YXRjaGxpc3RPcHRpb249ZmFsc2VdIC1cblx0XHQgKiBCYXNpY2FsbHkgYSBtaXggb2YgTVcgQVBJIGFuZCBUd2lua2xleSBvcHRpb25zIGF2YWlsYWJsZSBwcmUtZXhwaXJ5OlxuXHRcdCAqIC0gYHRydWVgfGAneWVzJ2B8YCd3YXRjaCdgOiBwYWdlIHdpbGwgYmUgYWRkZWQgdG8gdGhlIHVzZXInc1xuXHRcdCAqIHdhdGNobGlzdCB3aGVuIHRoZSBhY3Rpb24gaXMgY2FsbGVkLiBEZWZhdWx0cyB0byBhbiBpbmRlZmluaXRlXG5cdFx0ICogd2F0Y2ggdW5sZXNzIGB3YXRjaGxpc3RFeHBpcnlgIGlzIHByb3ZpZGVkLlxuXHRcdCAqIC0gYGZhbHNlYHxgJ25vJ2B8YCdub2NoYW5nZSdgOiB3YXRjaGxpc3Qgc3RhdHVzIG9mIHRoZSBwYWdlIChpbmNsdWRpbmcgZXhwaXJ5KSB3aWxsIG5vdCBiZSBjaGFuZ2VkLlxuXHRcdCAqIC0gYCdkZWZhdWx0J2B8YCdwcmVmZXJlbmNlcydgOiB3YXRjaGxpc3Qgc3RhdHVzIG9mIHRoZSBwYWdlIHdpbGwgYmVcblx0XHQgKiBzZXQgYmFzZWQgb24gdGhlIHVzZXIncyBwcmVmZXJlbmNlIHNldHRpbmdzIHdoZW4gdGhlIGFjdGlvbiBpc1xuXHRcdCAqIGNhbGxlZC4gRGVmYXVsdHMgdG8gYW4gaW5kZWZpbml0ZSB3YXRjaCB1bmxlc3MgYHdhdGNobGlzdEV4cGlyeWAgaXNcblx0XHQgKiBwcm92aWRlZC5cblx0XHQgKiAtIGAndW53YXRjaCdgOiBleHBsaWNpdGx5IHVud2F0Y2ggdGhlIHBhZ2UuXG5cdFx0ICogLSBBbnkgb3RoZXIgYHN0cmluZ2Agb3IgYG51bWJlcmAsIG9yIGEgYE1vcmViaXRzLmRhdGVgIG9yIGBEYXRlYFxuXHRcdCAqIG9iamVjdDogd2F0Y2ggcGFnZSB1bnRpbCB0aGUgc3BlY2lmaWVkIHRpbWUsIGRlZmVycmluZyB0b1xuXHRcdCAqIGB3YXRjaGxpc3RFeHBpcnlgIGlmIHByb3ZpZGVkLlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcnxNb3JlYml0cy5kYXRlfERhdGV9IFt3YXRjaGxpc3RFeHBpcnk9aW5maW5pdHldIC1cblx0XHQgKiBBIGRhdGUtbGlrZSBzdHJpbmcgb3IgbnVtYmVyLCBvciBhIGRhdGUgb2JqZWN0LiAgSWYgYSBzdHJpbmcgb3IgbnVtYmVyLFxuXHRcdCAqIGNhbiBiZSByZWxhdGl2ZSAoMiB3ZWVrcykgb3Igb3RoZXIgc2ltaWxhcmx5IGRhdGUtbGlrZSAoaS5lLiBOT1QgXCJwb3RhdG9cIik6XG5cdFx0ICogSVNPIDg2MDE6IDIwMzgtMDEtMDlUMDM6MTQ6MDdaXG5cdFx0ICogTWVkaWFXaWtpOiAyMDM4MDEwOTAzMTQwN1xuXHRcdCAqIFVOSVg6IDIxNDc0ODM2NDdcblx0XHQgKiBTUUw6IDIwMzgtMDEtMDkgMDM6MTQ6MDdcblx0XHQgKiBDYW4gYWxzbyBiZSBgaW5maW5pdHlgIG9yIGluZmluaXR5LWxpa2UgKGBpbmZpbml0ZWAsIGBpbmRlZmluaXRlYCwgYW5kIGBuZXZlcmApLlxuXHRcdCAqIFNlZSB7QGxpbmsgaHR0cHM6Ly9waGFicmljYXRvci53aWtpbWVkaWEub3JnL3NvdXJjZS9tZWRpYXdpa2ktbGlicy1UaW1lc3RhbXAvYnJvd3NlL21hc3Rlci9zcmMvQ29udmVydGlibGVUaW1lc3RhbXAucGhwOzRlNTNiODU5YTk1ODBjNTU5NTgwNzhmNDZkZDRmM2E0NGQwZmNhYTAkNTctMTA5P2FzPXNvdXJjZSZibGFtZT1vZmZ9XG5cdFx0ICovXG5cdFx0dGhpcy5zZXRXYXRjaGxpc3QgPSAod2F0Y2hsaXN0T3B0aW9uLCB3YXRjaGxpc3RFeHBpcnkpID0+IHtcblx0XHRcdGlmICh3YXRjaGxpc3RPcHRpb24gaW5zdGFuY2VvZiBNb3JlYml0cy5kYXRlIHx8IHdhdGNobGlzdE9wdGlvbiBpbnN0YW5jZW9mIERhdGUpIHtcblx0XHRcdFx0d2F0Y2hsaXN0T3B0aW9uID0gd2F0Y2hsaXN0T3B0aW9uLnRvSVNPU3RyaW5nKCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAod2F0Y2hsaXN0RXhwaXJ5ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0d2F0Y2hsaXN0RXhwaXJ5ID0gJ2luZmluaXR5Jztcblx0XHRcdH0gZWxzZSBpZiAod2F0Y2hsaXN0RXhwaXJ5IGluc3RhbmNlb2YgTW9yZWJpdHMuZGF0ZSB8fCB3YXRjaGxpc3RFeHBpcnkgaW5zdGFuY2VvZiBEYXRlKSB7XG5cdFx0XHRcdHdhdGNobGlzdEV4cGlyeSA9IHdhdGNobGlzdEV4cGlyeS50b0lTT1N0cmluZygpO1xuXHRcdFx0fVxuXHRcdFx0c3dpdGNoICh3YXRjaGxpc3RPcHRpb24pIHtcblx0XHRcdFx0Y2FzZSAnbm9jaGFuZ2UnOlxuXHRcdFx0XHRjYXNlICdubyc6XG5cdFx0XHRcdGNhc2UgZmFsc2U6XG5cdFx0XHRcdGNhc2UgdW5kZWZpbmVkOlxuXHRcdFx0XHRcdGN0eC53YXRjaGxpc3RPcHRpb24gPSAnbm9jaGFuZ2UnO1xuXHRcdFx0XHRcdC8vIFRoZSBNVyBBUEkgYWxsb3dzIGZvciBjaGFuZ2luZyBleHBpcnkgd2l0aCBub2NoYW5nZSAoYXMgXCJub2NoYW5nZVwiIHJlZmVycyB0byB0aGUgYmluYXJ5IHN0YXR1cyksXG5cdFx0XHRcdFx0Ly8gYnV0IGJ5IGtlZXBpbmcgdGhpcyBudWxsIGl0IHdpbGwgZGVmYXVsdCB0byBhbnkgZXhpc3RpbmcgZXhwaXJ5LCBlbnN1cmUgdGhlcmUgaXMgYWN0dWFsbHkgXCJubyBjaGFuZ2UuXCJcblx0XHRcdFx0XHRjdHgud2F0Y2hsaXN0RXhwaXJ5ID0gbnVsbDtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAndW53YXRjaCc6XG5cdFx0XHRcdFx0Ly8gZXhwaXJ5IHVuaW1wb3J0YW50XG5cdFx0XHRcdFx0Y3R4LndhdGNobGlzdE9wdGlvbiA9ICd1bndhdGNoJztcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAncHJlZmVyZW5jZXMnOlxuXHRcdFx0XHRjYXNlICdkZWZhdWx0Jzpcblx0XHRcdFx0XHRjdHgud2F0Y2hsaXN0T3B0aW9uID0gJ3ByZWZlcmVuY2VzJztcblx0XHRcdFx0XHQvLyBUaGUgQVBJIGFsbG93cyBhbiBleHBpcnkgaGVyZSwgYnV0IHRoZXJlIGlzIGFzIG9mIHlldCAoVDI2NTcxNilcblx0XHRcdFx0XHQvLyBubyBleHBpcnkgcHJlZmVyZW5jZSBvcHRpb24sIHNvIGl0J3MgYSBiaXQgZGV2b2lkIG9mIGNvbnRleHQuXG5cdFx0XHRcdFx0Y3R4LndhdGNobGlzdEV4cGlyeSA9IHdhdGNobGlzdEV4cGlyeTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnd2F0Y2gnOlxuXHRcdFx0XHRjYXNlICd5ZXMnOlxuXHRcdFx0XHRjYXNlIHRydWU6XG5cdFx0XHRcdFx0Y3R4LndhdGNobGlzdE9wdGlvbiA9ICd3YXRjaCc7XG5cdFx0XHRcdFx0Y3R4LndhdGNobGlzdEV4cGlyeSA9IHdhdGNobGlzdEV4cGlyeTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHQvLyBOb3QgcmVhbGx5IGEgXCJkZWZhdWx0XCIgcGVyIHNlIGJ1dCBjYXRjaGVzIFwiYW55IG90aGVyIHN0cmluZ1wiXG5cdFx0XHRcdFx0Y3R4LndhdGNobGlzdE9wdGlvbiA9ICd3YXRjaCc7XG5cdFx0XHRcdFx0Y3R4LndhdGNobGlzdEV4cGlyeSA9IHdhdGNobGlzdE9wdGlvbjtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIFNldCBhIHdhdGNobGlzdCBleHBpcnkuIHNldFdhdGNobGlzdCBjYW4gbW9zdGx5IGhhbmRsZSB0aGlzIGJ5XG5cdFx0ICogaXRzZWxmLCBzbyB0aGlzIGlzIGhlcmUgbGFyZ2VseSBmb3IgY29tcGxldGVuZXNzIGFuZCBjb21wYXRpYmlsaXR5XG5cdFx0ICogd2l0aCB0aGUgZnVsbCBzdWl0ZSBvZiBvcHRpb25zLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfE1vcmViaXRzLmRhdGV8RGF0ZX0gW3dhdGNobGlzdEV4cGlyeT1pbmZpbml0eV0gLVxuXHRcdCAqIEEgZGF0ZS1saWtlIHN0cmluZyBvciBudW1iZXIsIG9yIGEgZGF0ZSBvYmplY3QuICBJZiBhIHN0cmluZyBvciBudW1iZXIsXG5cdFx0ICogY2FuIGJlIHJlbGF0aXZlICgyIHdlZWtzKSBvciBvdGhlciBzaW1pbGFybHkgZGF0ZS1saWtlIChpLmUuIE5PVCBcInBvdGF0b1wiKTpcblx0XHQgKiBJU08gODYwMTogMjAzOC0wMS0wOVQwMzoxNDowN1pcblx0XHQgKiBNZWRpYVdpa2k6IDIwMzgwMTA5MDMxNDA3XG5cdFx0ICogVU5JWDogMjE0NzQ4MzY0N1xuXHRcdCAqIFNRTDogMjAzOC0wMS0wOSAwMzoxNDowN1xuXHRcdCAqIENhbiBhbHNvIGJlIGBpbmZpbml0eWAgb3IgaW5maW5pdHktbGlrZSAoYGluZmluaXRlYCwgYGluZGVmaW5pdGVgLCBhbmQgYG5ldmVyYCkuXG5cdFx0ICogU2VlIHtAbGluayBodHRwczovL3BoYWJyaWNhdG9yLndpa2ltZWRpYS5vcmcvc291cmNlL21lZGlhd2lraS1saWJzLVRpbWVzdGFtcC9icm93c2UvbWFzdGVyL3NyYy9Db252ZXJ0aWJsZVRpbWVzdGFtcC5waHA7NGU1M2I4NTlhOTU4MGM1NTk1ODA3OGY0NmRkNGYzYTQ0ZDBmY2FhMCQ1Ny0xMDk/YXM9c291cmNlJmJsYW1lPW9mZn1cblx0XHQgKi9cblx0XHR0aGlzLnNldFdhdGNobGlzdEV4cGlyeSA9ICh3YXRjaGxpc3RFeHBpcnkpID0+IHtcblx0XHRcdGlmICh3YXRjaGxpc3RFeHBpcnkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR3YXRjaGxpc3RFeHBpcnkgPSAnaW5maW5pdHknO1xuXHRcdFx0fSBlbHNlIGlmICh3YXRjaGxpc3RFeHBpcnkgaW5zdGFuY2VvZiBNb3JlYml0cy5kYXRlIHx8IHdhdGNobGlzdEV4cGlyeSBpbnN0YW5jZW9mIERhdGUpIHtcblx0XHRcdFx0d2F0Y2hsaXN0RXhwaXJ5ID0gd2F0Y2hsaXN0RXhwaXJ5LnRvSVNPU3RyaW5nKCk7XG5cdFx0XHR9XG5cdFx0XHRjdHgud2F0Y2hsaXN0RXhwaXJ5ID0gd2F0Y2hsaXN0RXhwaXJ5O1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQGRlcHJlY2F0ZWQgQXMgb2YgRGVjZW1iZXIgMjAyMCwgdXNlIHNldFdhdGNobGlzdC5cblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFt3YXRjaGxpc3RPcHRpb249ZmFsc2VdIC1cblx0XHQgKiAtIGBUcnVlYDogcGFnZSB3YXRjaGxpc3Qgc3RhdHVzIHdpbGwgYmUgc2V0IGJhc2VkIG9uIHRoZSB1c2VyJ3Ncblx0XHQgKiBwcmVmZXJlbmNlIHNldHRpbmdzIHdoZW4gYHNhdmUoKWAgaXMgY2FsbGVkLlxuXHRcdCAqIC0gYEZhbHNlYDogd2F0Y2hsaXN0IHN0YXR1cyBvZiB0aGUgcGFnZSB3aWxsIG5vdCBiZSBjaGFuZ2VkLlxuXHRcdCAqXG5cdFx0ICogV2F0Y2hsaXN0IG5vdGVzOlxuXHRcdCAqIDEuIFRoZSBNZWRpYVdpa2kgQVBJIHZhbHVlIG9mICd1bndhdGNoJywgd2hpY2ggZXhwbGljaXRseSByZW1vdmVzXG5cdFx0ICogdGhlIHBhZ2UgZnJvbSB0aGUgdXNlcidzIHdhdGNobGlzdCwgaXMgbm90IHVzZWQuXG5cdFx0ICogMi4gSWYgYm90aCBgc2V0V2F0Y2hsaXN0KClgIGFuZCBgc2V0V2F0Y2hsaXN0RnJvbVByZWZlcmVuY2VzKClgIGFyZVxuXHRcdCAqIGNhbGxlZCwgdGhlIGxhc3QgY2FsbCB0YWtlcyBwcmlvcml0eS5cblx0XHQgKiAzLiBUd2lua2xlIG1vZHVsZXMgc2hvdWxkIHVzZSB0aGUgYXBwcm9wcmlhdGUgcHJlZmVyZW5jZSB0byBzZXQgdGhlIHdhdGNobGlzdCBvcHRpb25zLlxuXHRcdCAqIDQuIE1vc3QgVHdpbmtsZSBtb2R1bGVzIHVzZSBgc2V0V2F0Y2hsaXN0KClgLiBgc2V0V2F0Y2hsaXN0RnJvbVByZWZlcmVuY2VzKClgXG5cdFx0ICogaXMgb25seSBuZWVkZWQgZm9yIHRoZSBmZXcgVHdpbmtsZSB3YXRjaGxpc3QgcHJlZmVyZW5jZXMgdGhhdFxuXHRcdCAqIGFjY2VwdCBhIHN0cmluZyB2YWx1ZSBvZiBgZGVmYXVsdGAuXG5cdFx0ICovXG5cdFx0dGhpcy5zZXRXYXRjaGxpc3RGcm9tUHJlZmVyZW5jZXMgPSAod2F0Y2hsaXN0T3B0aW9uKSA9PiB7XG5cdFx0XHRjb25zb2xlLndhcm4oXG5cdFx0XHRcdCdbTW9yZWJpdHNdIE5PVEU6IE1vcmViaXRzLndpa2kucGFnZS5zZXRXYXRjaGxpc3RGcm9tUHJlZmVyZW5jZXMgd2FzIGRlcHJlY2F0ZWQgRGVjZW1iZXIgMjAyMCwgcGxlYXNlIHVzZSBzZXRXYXRjaGxpc3QnXG5cdFx0XHQpO1xuXHRcdFx0aWYgKHdhdGNobGlzdE9wdGlvbikge1xuXHRcdFx0XHRjdHgud2F0Y2hsaXN0T3B0aW9uID0gJ3ByZWZlcmVuY2VzJztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGN0eC53YXRjaGxpc3RPcHRpb24gPSAnbm9jaGFuZ2UnO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBbZm9sbG93UmVkaXJlY3Q9ZmFsc2VdIC1cblx0XHQgKiAtIGB0cnVlYDogYSBtYXhpbXVtIG9mIG9uZSByZWRpcmVjdCB3aWxsIGJlIGZvbGxvd2VkLiBJbiB0aGUgZXZlbnRcblx0XHQgKiBvZiBhIHJlZGlyZWN0LCBhIG1lc3NhZ2UgaXMgZGlzcGxheWVkIHRvIHRoZSB1c2VyIGFuZCB0aGUgcmVkaXJlY3Rcblx0XHQgKiB0YXJnZXQgY2FuIGJlIHJldHJpZXZlZCB3aXRoIGdldFBhZ2VOYW1lKCkuXG5cdFx0ICogLSBgZmFsc2VgOiAoZGVmYXVsdCkgdGhlIHJlcXVlc3RlZCBwYWdlTmFtZSB3aWxsIGJlIHVzZWQgd2l0aG91dCByZWdhcmQgdG8gYW55IHJlZGlyZWN0LlxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZvbGxvd0Nyb3NzTnNSZWRpcmVjdD10cnVlXSAtIE5vdCBhcHBsaWNhYmxlIGlmIGBmb2xsb3dSZWRpcmVjdGAgaXMgbm90IHNldCB0cnVlLlxuXHRcdCAqIC0gYHRydWVgOiAoZGVmYXVsdCkgZm9sbG93IHJlZGlyZWN0IGV2ZW4gaWYgaXQgaXMgYSBjcm9zcy1uYW1lc3BhY2UgcmVkaXJlY3Rcblx0XHQgKiAtIGBmYWxzZWA6IGRvbid0IGZvbGxvdyByZWRpcmVjdCBpZiBpdCBpcyBjcm9zcy1uYW1lc3BhY2UsIGVkaXQgdGhlIHJlZGlyZWN0IGl0c2VsZi5cblx0XHQgKi9cblx0XHR0aGlzLnNldEZvbGxvd1JlZGlyZWN0ID0gKGZvbGxvd1JlZGlyZWN0LCBmb2xsb3dDcm9zc05zUmVkaXJlY3QpID0+IHtcblx0XHRcdGlmIChjdHgucGFnZUxvYWRlZCkge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0XHQnSW50ZXJuYWwgZXJyb3I6IGNhbm5vdCBjaGFuZ2UgcmVkaXJlY3Qgc2V0dGluZyBhZnRlciB0aGUgcGFnZSBoYXMgYmVlbiBsb2FkZWQhJ1xuXHRcdFx0XHQpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjdHguZm9sbG93UmVkaXJlY3QgPSBmb2xsb3dSZWRpcmVjdDtcblx0XHRcdGN0eC5mb2xsb3dDcm9zc05zUmVkaXJlY3QgPVxuXHRcdFx0XHRmb2xsb3dDcm9zc05zUmVkaXJlY3QgPT09IHVuZGVmaW5lZCA/IGN0eC5mb2xsb3dDcm9zc05zUmVkaXJlY3QgOiBmb2xsb3dDcm9zc05zUmVkaXJlY3Q7XG5cdFx0fTtcblx0XHQvLyBsb29rdXAtY3JlYXRpb24gc2V0dGVyIGZ1bmN0aW9uXG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBmbGFnIC0gSWYgc2V0IHRydWUsIHRoZSBhdXRob3IgYW5kIHRpbWVzdGFtcCBvZlxuXHRcdCAqIHRoZSBmaXJzdCBub24tcmVkaXJlY3QgdmVyc2lvbiBvZiB0aGUgcGFnZSBpcyByZXRyaWV2ZWQuXG5cdFx0ICpcblx0XHQgKiBXYXJuaW5nOlxuXHRcdCAqIDEuIElmIHRoZXJlIGFyZSBubyByZXZpc2lvbnMgYW1vbmcgdGhlIGZpcnN0IDUwIHRoYXQgYXJlXG5cdFx0ICogbm9uLXJlZGlyZWN0cywgb3IgaWYgdGhlcmUgYXJlIGxlc3MgNTAgcmV2aXNpb25zIGFuZCBhbGwgYXJlXG5cdFx0ICogcmVkaXJlY3RzLCB0aGUgb3JpZ2luYWwgY3JlYXRpb24gaXMgcmV0cmlldmVkLlxuXHRcdCAqIDIuIFJldmlzaW9ucyB0aGF0IHRoZSB1c2VyIGlzIG5vdCBwcml2aWxlZ2VkIHRvIGFjY2Vzc1xuXHRcdCAqIChyZXZkZWxlZC9zdXBwcmVzc2VkKSB3aWxsIGJlIHRyZWF0ZWQgYXMgbm9uLXJlZGlyZWN0cy5cblx0XHQgKiAzLiBNdXN0IG5vdCBiZSB1c2VkIHdoZW4gdGhlIHBhZ2UgaGFzIGEgbm9uLXdpa2l0ZXh0IGNvbnRlbnRtb2RlbFxuXHRcdCAqIHN1Y2ggYXMgTW9kdWxlc3BhY2UgTHVhIG9yIHVzZXIgSmF2YVNjcmlwdC9DU1MuXG5cdFx0ICovXG5cdFx0dGhpcy5zZXRMb29rdXBOb25SZWRpcmVjdENyZWF0b3IgPSAoZmxhZykgPT4ge1xuXHRcdFx0Y3R4Lmxvb2t1cE5vblJlZGlyZWN0Q3JlYXRvciA9IGZsYWc7XG5cdFx0fTtcblx0XHQvLyBNb3ZlLXJlbGF0ZWQgc2V0dGVyIGZ1bmN0aW9uc1xuXHRcdC8qKiBAcGFyYW0ge3N0cmluZ30gZGVzdGluYXRpb24gKi9cblx0XHR0aGlzLnNldE1vdmVEZXN0aW5hdGlvbiA9IChkZXN0aW5hdGlvbikgPT4ge1xuXHRcdFx0Y3R4Lm1vdmVEZXN0aW5hdGlvbiA9IGRlc3RpbmF0aW9uO1xuXHRcdH07XG5cdFx0LyoqIEBwYXJhbSB7Ym9vbGVhbn0gZmxhZyAqL1xuXHRcdHRoaXMuc2V0TW92ZVRhbGtQYWdlID0gKGZsYWcpID0+IHtcblx0XHRcdGN0eC5tb3ZlVGFsa1BhZ2UgPSAhIWZsYWc7XG5cdFx0fTtcblx0XHQvKiogQHBhcmFtIHtib29sZWFufSBmbGFnICovXG5cdFx0dGhpcy5zZXRNb3ZlU3VicGFnZXMgPSAoZmxhZykgPT4ge1xuXHRcdFx0Y3R4Lm1vdmVTdWJwYWdlcyA9ICEhZmxhZztcblx0XHR9O1xuXHRcdC8qKiBAcGFyYW0ge2Jvb2xlYW59IGZsYWcgKi9cblx0XHR0aGlzLnNldE1vdmVTdXBwcmVzc1JlZGlyZWN0ID0gKGZsYWcpID0+IHtcblx0XHRcdGN0eC5tb3ZlU3VwcHJlc3NSZWRpcmVjdCA9ICEhZmxhZztcblx0XHR9O1xuXHRcdC8vIFByb3RlY3QtcmVsYXRlZCBzZXR0ZXIgZnVuY3Rpb25zXG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGxldmVsIC0gVGhlIHJpZ2h0IHJlcXVpcmVkIGZvciB0aGUgc3BlY2lmaWMgYWN0aW9uXG5cdFx0ICogZS5nLiBzeXNvcCwgdGVtcGxhdGVlZGl0b3IsIGF1dG9jb25maXJtZWRcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gW2V4cGlyeT1pbmZpbml0eV1cblx0XHQgKi9cblx0XHR0aGlzLnNldEVkaXRQcm90ZWN0aW9uID0gKGxldmVsLCBleHBpcnkpID0+IHtcblx0XHRcdGN0eC5wcm90ZWN0RWRpdCA9IHtcblx0XHRcdFx0bGV2ZWwsXG5cdFx0XHRcdGV4cGlyeTogZXhwaXJ5IHx8ICdpbmZpbml0eScsXG5cdFx0XHR9O1xuXHRcdH07XG5cdFx0dGhpcy5zZXRNb3ZlUHJvdGVjdGlvbiA9IChsZXZlbCwgZXhwaXJ5KSA9PiB7XG5cdFx0XHRjdHgucHJvdGVjdE1vdmUgPSB7XG5cdFx0XHRcdGxldmVsLFxuXHRcdFx0XHRleHBpcnk6IGV4cGlyeSB8fCAnaW5maW5pdHknLFxuXHRcdFx0fTtcblx0XHR9O1xuXHRcdHRoaXMuc2V0Q3JlYXRlUHJvdGVjdGlvbiA9IChsZXZlbCwgZXhwaXJ5KSA9PiB7XG5cdFx0XHRjdHgucHJvdGVjdENyZWF0ZSA9IHtcblx0XHRcdFx0bGV2ZWwsXG5cdFx0XHRcdGV4cGlyeTogZXhwaXJ5IHx8ICdpbmZpbml0eScsXG5cdFx0XHR9O1xuXHRcdH07XG5cdFx0dGhpcy5zZXRDYXNjYWRpbmdQcm90ZWN0aW9uID0gKGZsYWcpID0+IHtcblx0XHRcdGN0eC5wcm90ZWN0Q2FzY2FkZSA9ICEhZmxhZztcblx0XHR9O1xuXHRcdHRoaXMuc3VwcHJlc3NQcm90ZWN0V2FybmluZyA9ICgpID0+IHtcblx0XHRcdGN0eC5zdXBwcmVzc1Byb3RlY3RXYXJuaW5nID0gdHJ1ZTtcblx0XHR9O1xuXHRcdC8vIFJldmVydC1yZWxhdGVkIGdldHRlcnMvc2V0dGVyczpcblx0XHR0aGlzLnNldE9sZElEID0gKG9sZElEKSA9PiB7XG5cdFx0XHRjdHgucmV2ZXJ0T2xkSUQgPSBvbGRJRDtcblx0XHR9O1xuXHRcdC8qKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY3VycmVudCByZXZpc2lvbiBJRCBvZiB0aGUgcGFnZSAqL1xuXHRcdHRoaXMuZ2V0Q3VycmVudElEID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGN0eC5yZXZlcnRDdXJJRDtcblx0XHR9O1xuXHRcdC8qKiBAcmV0dXJucyB7c3RyaW5nfSBMYXN0IGVkaXRvciBvZiB0aGUgcGFnZSAqL1xuXHRcdHRoaXMuZ2V0UmV2aXNpb25Vc2VyID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGN0eC5yZXZlcnRVc2VyO1xuXHRcdH07XG5cdFx0LyoqIEByZXR1cm5zIHtzdHJpbmd9IElTTyA4NjAxIHRpbWVzdGFtcCBhdCB3aGljaCB0aGUgcGFnZSB3YXMgbGFzdCBlZGl0ZWQuICovXG5cdFx0dGhpcy5nZXRMYXN0RWRpdFRpbWUgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gY3R4Lmxhc3RFZGl0VGltZTtcblx0XHR9O1xuXHRcdC8vIE1pc2NlbGxhbmVvdXMgZ2V0dGVycy9zZXR0ZXJzOlxuXHRcdC8qKlxuXHRcdCAqIERlZmluZSBhbiBvYmplY3QgZm9yIHVzZSBpbiBhIGNhbGxiYWNrIGZ1bmN0aW9uLlxuXHRcdCAqXG5cdFx0ICogYGNhbGxiYWNrUGFyYW1ldGVyc2AgaXMgZm9yIHVzZSBieSB0aGUgY2FsbGVyIG9ubHkuIFRoZSBwYXJhbWV0ZXJzXG5cdFx0ICogYWxsb3cgYSBjYWxsZXIgdG8gcGFzcyB0aGUgcHJvcGVyIGNvbnRleHQgaW50byBpdHMgY2FsbGJhY2tcblx0XHQgKiBmdW5jdGlvbi4gIENhbGxlcnMgbXVzdCBlbnN1cmUgdGhhdCBhbnkgY2hhbmdlcyB0byB0aGVcblx0XHQgKiBjYWxsYmFja1BhcmFtZXRlcnMgb2JqZWN0IHdpdGhpbiBhIGBsb2FkKClgIGNhbGxiYWNrIHN0aWxsIHBlcm1pdCBhXG5cdFx0ICogcHJvcGVyIHJlLWVudHJ5IGludG8gdGhlIGBsb2FkKClgIGNhbGxiYWNrIGlmIGFuIGVkaXQgY29uZmxpY3QgaXNcblx0XHQgKiBkZXRlY3RlZCB1cG9uIGNhbGxpbmcgYHNhdmUoKWAuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2tQYXJhbWV0ZXJzXG5cdFx0ICovXG5cdFx0dGhpcy5zZXRDYWxsYmFja1BhcmFtZXRlcnMgPSAoY2FsbGJhY2tQYXJhbWV0ZXJzKSA9PiB7XG5cdFx0XHRjdHguY2FsbGJhY2tQYXJhbWV0ZXJzID0gY2FsbGJhY2tQYXJhbWV0ZXJzO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHJldHVybnMge09iamVjdH0gLSBUaGUgb2JqZWN0IHByZXZpb3VzbHkgc2V0IGJ5IGBzZXRDYWxsYmFja1BhcmFtZXRlcnMoKWAuXG5cdFx0ICovXG5cdFx0dGhpcy5nZXRDYWxsYmFja1BhcmFtZXRlcnMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gY3R4LmNhbGxiYWNrUGFyYW1ldGVycztcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEBwYXJhbSB7TW9yZWJpdHMuc3RhdHVzfSBzdGF0dXNFbGVtZW50XG5cdFx0ICovXG5cdFx0dGhpcy5zZXRTdGF0dXNFbGVtZW50ID0gKHN0YXR1c0VsZW1lbnQpID0+IHtcblx0XHRcdGN0eC5zdGF0dXNFbGVtZW50ID0gc3RhdHVzRWxlbWVudDtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zdGF0dXN9IFN0YXR1cyBlbGVtZW50IGNyZWF0ZWQgYnkgdGhlIGNvbnN0cnVjdG9yLlxuXHRcdCAqL1xuXHRcdHRoaXMuZ2V0U3RhdHVzRWxlbWVudCA9ICgpID0+IHtcblx0XHRcdHJldHVybiBjdHguc3RhdHVzRWxlbWVudDtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBwYWdlIGV4aXN0ZWQgb24gdGhlIHdpa2kgd2hlbiBpdCB3YXMgbGFzdCBsb2FkZWQuXG5cdFx0ICovXG5cdFx0dGhpcy5leGlzdHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gY3R4LnBhZ2VFeGlzdHM7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfSBQYWdlIElEIG9mIHRoZSBwYWdlIGxvYWRlZC4gMCBpZiB0aGUgcGFnZSBkb2Vzbid0XG5cdFx0ICogZXhpc3QuXG5cdFx0ICovXG5cdFx0dGhpcy5nZXRQYWdlSUQgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gY3R4LnBhZ2VJRDtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9IC0gQ29udGVudCBtb2RlbCBvZiB0aGUgcGFnZS4gIFBvc3NpYmxlIHZhbHVlc1xuXHRcdCAqIGluY2x1ZGUgKGJ1dCBtYXkgbm90IGJlIGxpbWl0ZWQgdG8pOiBgd2lraXRleHRgLCBgamF2YXNjcmlwdGAsXG5cdFx0ICogYGNzc2AsIGBqc29uYCwgYFNjcmlidW50b2AsIGBzYW5pdGl6ZWQtY3NzYCwgYE1hc3NNZXNzYWdlTGlzdENvbnRlbnRgLlxuXHRcdCAqIEFsc28gZ2V0dGFibGUgdmlhIGBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VDb250ZW50TW9kZWwnKWAuXG5cdFx0ICovXG5cdFx0dGhpcy5nZXRDb250ZW50TW9kZWwgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gY3R4LmNvbnRlbnRNb2RlbDtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufHN0cmluZ30gLSBXYXRjaGVkIHN0YXR1cyBvZiB0aGUgcGFnZS4gQm9vbGVhblxuXHRcdCAqIHVubGVzcyBpdCdzIGJlaW5nIHdhdGNoZWQgdGVtcG9yYXJpbHksIGluIHdoaWNoIGNhc2UgcmV0dXJucyB0aGVcblx0XHQgKiBleHBpcnkgc3RyaW5nLlxuXHRcdCAqL1xuXHRcdHRoaXMuZ2V0V2F0Y2hlZCA9ICgpID0+IHtcblx0XHRcdHJldHVybiBjdHgud2F0Y2hlZDtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9IElTTyA4NjAxIHRpbWVzdGFtcCBhdCB3aGljaCB0aGUgcGFnZSB3YXMgbGFzdCBsb2FkZWQuXG5cdFx0ICovXG5cdFx0dGhpcy5nZXRMb2FkVGltZSA9ICgpID0+IHtcblx0XHRcdHJldHVybiBjdHgubG9hZFRpbWU7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgdXNlciB3aG8gY3JlYXRlZCB0aGUgcGFnZSBmb2xsb3dpbmcgYGxvb2t1cENyZWF0aW9uKClgLlxuXHRcdCAqL1xuXHRcdHRoaXMuZ2V0Q3JlYXRvciA9ICgpID0+IHtcblx0XHRcdHJldHVybiBjdHguY3JlYXRvcjtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBJU09TdHJpbmcgdGltZXN0YW1wIG9mIHBhZ2UgY3JlYXRpb24gZm9sbG93aW5nIGBsb29rdXBDcmVhdGlvbigpYC5cblx0XHQgKi9cblx0XHR0aGlzLmdldENyZWF0aW9uVGltZXN0YW1wID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGN0eC50aW1lc3RhbXA7XG5cdFx0fTtcblx0XHQvKiogQHJldHVybnMge2Jvb2xlYW59IHdoZXRoZXIgb3Igbm90IHlvdSBjYW4gZWRpdCB0aGUgcGFnZSAqL1xuXHRcdHRoaXMuY2FuRWRpdCA9ICgpID0+IHtcblx0XHRcdHJldHVybiAhIWN0eC50ZXN0QWN0aW9ucyAmJiBjdHgudGVzdEFjdGlvbnMuaW5jbHVkZXMoJ2VkaXQnKTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIFJldHJpZXZlcyB0aGUgdXNlcm5hbWUgb2YgdGhlIHVzZXIgd2hvIGNyZWF0ZWQgdGhlIHBhZ2UgYXMgd2VsbCBhc1xuXHRcdCAqIHRoZSB0aW1lc3RhbXAgb2YgY3JlYXRpb24uICBUaGUgdXNlcm5hbWUgY2FuIGJlIHJldHJpZXZlZCB1c2luZyB0aGVcblx0XHQgKiBgZ2V0Q3JlYXRvcigpYCBmdW5jdGlvbjsgdGhlIHRpbWVzdGFtcCBjYW4gYmUgcmV0cmlldmVkIHVzaW5nIHRoZVxuXHRcdCAqIGBnZXRDcmVhdGlvblRpbWVzdGFtcCgpYCBmdW5jdGlvbi5cblx0XHQgKiBQcmlvciB0byBKdW5lIDIwMTkga25vd24gYXMgYGxvb2t1cENyZWF0b3IoKWAuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBvblN1Y2Nlc3MgLSBDYWxsYmFjayBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2hlblxuXHRcdCAqIHRoZSB1c2VybmFtZSBhbmQgdGltZXN0YW1wIGFyZSBmb3VuZCB3aXRoaW4gdGhlIGNhbGxiYWNrLlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvbkZhaWx1cmVdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIHdoZW5cblx0XHQgKiB0aGUgbG9va3VwIGZhaWxzXG5cdFx0ICovXG5cdFx0dGhpcy5sb29rdXBDcmVhdGlvbiA9IGZ1bmN0aW9uIChvblN1Y2Nlc3MsIG9uRmFpbHVyZSkge1xuXHRcdFx0Y3R4Lm9uTG9va3VwQ3JlYXRpb25TdWNjZXNzID0gb25TdWNjZXNzO1xuXHRcdFx0Y3R4Lm9uTG9va3VwQ3JlYXRpb25GYWlsdXJlID0gb25GYWlsdXJlIHx8IGVtcHR5RnVuY3Rpb247XG5cdFx0XHRpZiAoIW9uU3VjY2Vzcykge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcignSW50ZXJuYWwgZXJyb3I6IG5vIG9uU3VjY2VzcyBjYWxsYmFjayBwcm92aWRlZCB0byBsb29rdXBDcmVhdGlvbigpIScpO1xuXHRcdFx0XHRjdHgub25Mb29rdXBDcmVhdGlvbkZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHF1ZXJ5ID0ge1xuXHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRcdFx0XHR0aXRsZXM6IGN0eC5wYWdlTmFtZSxcblx0XHRcdFx0cnZsaW1pdDogMSxcblx0XHRcdFx0cnZwcm9wOiAndXNlcnx0aW1lc3RhbXAnLFxuXHRcdFx0XHRydmRpcjogJ25ld2VyJyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHR9O1xuXHRcdFx0Ly8gT25seSB0aGUgd2lraXRleHQgY29udGVudCBtb2RlbCBjYW4gcmVsaWFibHkgaGFuZGxlXG5cdFx0XHQvLyBydnNlY3Rpb24sIG90aGVycyByZXR1cm4gYW4gZXJyb3Igd2hlbiBwYWlyZWQgd2l0aCB0aGVcblx0XHRcdC8vIGNvbnRlbnQgcnZwcm9wLiBSZWxhdGVkbHksIG5vbi13aWtpdGV4dCBtb2RlbHMgZG9uJ3Rcblx0XHRcdC8vIHVuZGVyc3RhbmQgdGhlICNSRURJUkVDVCBjb25jZXB0LCBzbyB3ZSBzaG91bGRuJ3QgYXR0ZW1wdFxuXHRcdFx0Ly8gdGhlIHJlZGlyZWN0IHJlc29sdXRpb24gaW4gZm5Mb29rdXBDcmVhdGlvblN1Y2Nlc3Ncblx0XHRcdGlmIChjdHgubG9va3VwTm9uUmVkaXJlY3RDcmVhdG9yKSB7XG5cdFx0XHRcdHF1ZXJ5LnJ2c2VjdGlvbiA9IDA7XG5cdFx0XHRcdHF1ZXJ5LnJ2cHJvcCArPSAnfGNvbnRlbnQnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGN0eC5mb2xsb3dSZWRpcmVjdCkge1xuXHRcdFx0XHRxdWVyeS5yZWRpcmVjdHMgPSAnJzsgLy8gZm9sbG93IGFsbCByZWRpcmVjdHNcblx0XHRcdH1cblxuXHRcdFx0Y3R4Lmxvb2t1cENyZWF0aW9uQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0XHR3aW5kb3cud2dVTFMoJ+aKk+WPlumhtemdouWIm+W7uuiAheS/oeaBrycsICfmipPlj5bpoIHpnaLlu7rnq4vogIXos4foqIonKSxcblx0XHRcdFx0cXVlcnksXG5cdFx0XHRcdGZuTG9va3VwQ3JlYXRpb25TdWNjZXNzLFxuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudCxcblx0XHRcdFx0Y3R4Lm9uTG9va3VwQ3JlYXRpb25GYWlsdXJlXG5cdFx0XHQpO1xuXHRcdFx0Y3R4Lmxvb2t1cENyZWF0aW9uQXBpLnNldFBhcmVudCh0aGlzKTtcblx0XHRcdGN0eC5sb29rdXBDcmVhdGlvbkFwaS5wb3N0KCk7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBSZXZlcnRzIGEgcGFnZSB0byBgcmV2ZXJ0T2xkSURgIHNldCBieSBgc2V0T2xkSURgLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uU3VjY2Vzc10gLSBDYWxsYmFjayBmdW5jdGlvbiB0byBydW4gb24gc3VjY2Vzcy5cblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25GYWlsdXJlXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHRvIHJ1biBvbiBmYWlsdXJlLlxuXHRcdCAqL1xuXHRcdHRoaXMucmV2ZXJ0ID0gZnVuY3Rpb24gKG9uU3VjY2Vzcywgb25GYWlsdXJlKSB7XG5cdFx0XHRjdHgub25TYXZlU3VjY2VzcyA9IG9uU3VjY2Vzcztcblx0XHRcdGN0eC5vblNhdmVGYWlsdXJlID0gb25GYWlsdXJlIHx8IGVtcHR5RnVuY3Rpb247XG5cdFx0XHRpZiAoIWN0eC5yZXZlcnRPbGRJRCkge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcignSW50ZXJuYWwgZXJyb3I6IHJldmlzaW9uIElEIHRvIHJldmVydCB0byB3YXMgbm90IHNldCBiZWZvcmUgcmV2ZXJ0IScpO1xuXHRcdFx0XHRjdHgub25TYXZlRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y3R4LmVkaXRNb2RlID0gJ3JldmVydCc7XG5cdFx0XHR0aGlzLmxvYWQoZm5BdXRvU2F2ZSwgY3R4Lm9uU2F2ZUZhaWx1cmUpO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogTW92ZXMgYSBwYWdlIHRvIGFub3RoZXIgdGl0bGUuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25TdWNjZXNzXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHRvIHJ1biBvbiBzdWNjZXNzLlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvbkZhaWx1cmVdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gcnVuIG9uIGZhaWx1cmUuXG5cdFx0ICovXG5cdFx0dGhpcy5tb3ZlID0gZnVuY3Rpb24gKG9uU3VjY2Vzcywgb25GYWlsdXJlKSB7XG5cdFx0XHRjdHgub25Nb3ZlU3VjY2VzcyA9IG9uU3VjY2Vzcztcblx0XHRcdGN0eC5vbk1vdmVGYWlsdXJlID0gb25GYWlsdXJlIHx8IGVtcHR5RnVuY3Rpb247XG5cdFx0XHRpZiAoIWZuUHJlZmxpZ2h0Q2hlY2tzLmNhbGwodGhpcywgJ21vdmUnLCBjdHgub25Nb3ZlRmFpbHVyZSkpIHtcblx0XHRcdFx0cmV0dXJuOyAvLyBhYm9ydFxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIWN0eC5tb3ZlRGVzdGluYXRpb24pIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoJ0ludGVybmFsIGVycm9yOiBkZXN0aW5hdGlvbiBwYWdlIG5hbWUgd2FzIG5vdCBzZXQgYmVmb3JlIG1vdmUhJyk7XG5cdFx0XHRcdGN0eC5vbk1vdmVGYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAoZm5DYW5Vc2VNd1VzZXJUb2tlbignbW92ZScpKSB7XG5cdFx0XHRcdGZuUHJvY2Vzc01vdmUuY2FsbCh0aGlzLCB0aGlzKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnN0IHF1ZXJ5ID0gZm5OZWVkVG9rZW5JbmZvUXVlcnkoJ21vdmUnKTtcblx0XHRcdFx0Y3R4Lm1vdmVBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdFx0d2luZG93LndnVUxTKCfojrflj5bku6TniYzigKbigKYnLCAn5Y+W5b6X5qyK5p2W4oCm4oCmJyksXG5cdFx0XHRcdFx0cXVlcnksXG5cdFx0XHRcdFx0Zm5Qcm9jZXNzTW92ZSxcblx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudCxcblx0XHRcdFx0XHRjdHgub25Nb3ZlRmFpbHVyZVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRjdHgubW92ZUFwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0XHRcdGN0eC5tb3ZlQXBpLnBvc3QoKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIE1hcmtzIHRoZSBwYWdlIGFzIHBhdHJvbGxlZCwgdXNpbmcgYHJjaWRgIChpZiBhdmFpbGFibGUpIG9yIGByZXZpZGAuXG5cdFx0ICpcblx0XHQgKiBQYXRyb2xsaW5nIGFzIHN1Y2ggZG9lc24ndCBuZWVkIHRvIHJlbHkgb24gbG9hZGluZyB0aGUgcGFnZSBpblxuXHRcdCAqIHF1ZXN0aW9uOyBzaW1wbHkgcGFzc2luZyBhIHJldmlkIHRvIHRoZSBBUEkgaXMgc3VmZmljaWVudCwgc28gaW5cblx0XHQgKiB0aG9zZSBjYXNlcyBqdXN0IHVzaW5nIHtAbGluayBNb3JlYml0cy53aWtpLmFwaX0gaXMgcHJvYmFibHkgcHJlZmVyYWJsZS5cblx0XHQgKlxuXHRcdCAqIE5vIGVycm9yIGhhbmRsaW5nIHNpbmNlIHdlIGRvbid0IGFjdHVhbGx5IGNhcmUgYWJvdXQgdGhlIGVycm9ycy5cblx0XHQgKi9cblx0XHR0aGlzLnBhdHJvbCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmICghTW9yZWJpdHMudXNlcklzU3lzb3AgJiYgIU1vcmViaXRzLnVzZXJJc0luR3JvdXAoJ3BhdHJvbGxlcicpKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRcdFx0Ly8gSWYgYSBsaW5rIGlzIHByZXNlbnQsIGRvbid0IG5lZWQgdG8gY2hlY2sgaWYgaXQncyBwYXRyb2xsZWRcblx0XHRcdGlmICgkYm9keS5maW5kKCcucGF0cm9sbGluaycpLmxlbmd0aCkge1xuXHRcdFx0XHRjb25zdCBwYXRyb2xocmVmID0gJGJvZHkuZmluZCgnLnBhdHJvbGxpbmsgYScpLmF0dHIoJ2hyZWYnKTtcblx0XHRcdFx0Y3R4LnJjaWQgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3JjaWQnLCBwYXRyb2xocmVmKTtcblx0XHRcdFx0Zm5Qcm9jZXNzUGF0cm9sKHRoaXMsIHRoaXMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3QgcGF0cm9sUXVlcnkgPSB7XG5cdFx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRcdHByb3A6ICdpbmZvJyxcblx0XHRcdFx0XHRtZXRhOiAndG9rZW5zJyxcblx0XHRcdFx0XHR0eXBlOiAncGF0cm9sJyxcblx0XHRcdFx0XHQvLyBhcyBsb25nIGFzIHdlJ3JlIHF1ZXJ5aW5nLCBtaWdodCBhcyB3ZWxsIGdldCBhIHRva2VuXG5cdFx0XHRcdFx0bGlzdDogJ3JlY2VudGNoYW5nZXMnLFxuXHRcdFx0XHRcdC8vIGNoZWNrIGlmIHRoZSBwYWdlIGlzIHVucGF0cm9sbGVkXG5cdFx0XHRcdFx0dGl0bGVzOiBjdHgucGFnZU5hbWUsXG5cdFx0XHRcdFx0cmNwcm9wOiAncGF0cm9sbGVkJyxcblx0XHRcdFx0XHRyY3RpdGxlOiBjdHgucGFnZU5hbWUsXG5cdFx0XHRcdFx0cmNsaW1pdDogMSxcblx0XHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0fTtcblx0XHRcdFx0Y3R4LnBhdHJvbEFwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+iOt+WPluS7pOeJjOKApuKApicsICflj5blvpfmrIrmnZbigKbigKYnKSxcblx0XHRcdFx0XHRwYXRyb2xRdWVyeSxcblx0XHRcdFx0XHRmblByb2Nlc3NQYXRyb2xcblx0XHRcdFx0KTtcblx0XHRcdFx0Y3R4LnBhdHJvbEFwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0XHRcdGN0eC5wYXRyb2xBcGkucG9zdCgpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0Ly8gfGRlbGV0ZXwgaXMgYSByZXNlcnZlZCB3b3JkIGluIHNvbWUgZmxhdm91cnMgb2YgSlNcblx0XHQvKipcblx0XHQgKiBEZWxldGVzIGEgcGFnZSAoZm9yIGFkbWlucyBvbmx5KS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvblN1Y2Nlc3NdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gcnVuIG9uIHN1Y2Nlc3MuXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRmFpbHVyZV0gLSBDYWxsYmFjayBmdW5jdGlvbiB0byBydW4gb24gZmFpbHVyZS5cblx0XHQgKi9cblx0XHR0aGlzLmRlbGV0ZVBhZ2UgPSBmdW5jdGlvbiAob25TdWNjZXNzLCBvbkZhaWx1cmUpIHtcblx0XHRcdGN0eC5vbkRlbGV0ZVN1Y2Nlc3MgPSBvblN1Y2Nlc3M7XG5cdFx0XHRjdHgub25EZWxldGVGYWlsdXJlID0gb25GYWlsdXJlIHx8IGVtcHR5RnVuY3Rpb247XG5cdFx0XHRpZiAoIWZuUHJlZmxpZ2h0Q2hlY2tzLmNhbGwodGhpcywgJ2RlbGV0ZScsIGN0eC5vbkRlbGV0ZUZhaWx1cmUpKSB7XG5cdFx0XHRcdHJldHVybjsgLy8gYWJvcnRcblx0XHRcdH1cblxuXHRcdFx0aWYgKGZuQ2FuVXNlTXdVc2VyVG9rZW4oJ2RlbGV0ZScpKSB7XG5cdFx0XHRcdGZuUHJvY2Vzc0RlbGV0ZS5jYWxsKHRoaXMsIHRoaXMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3QgcXVlcnkgPSBmbk5lZWRUb2tlbkluZm9RdWVyeSgnZGVsZXRlJyk7XG5cdFx0XHRcdGN0eC5kZWxldGVBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdFx0d2luZG93LndnVUxTKCfojrflj5bku6TniYzigKbigKYnLCAn5Y+W5b6X5qyK5p2W4oCm4oCmJyksXG5cdFx0XHRcdFx0cXVlcnksXG5cdFx0XHRcdFx0Zm5Qcm9jZXNzRGVsZXRlLFxuXHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LFxuXHRcdFx0XHRcdGN0eC5vbkRlbGV0ZUZhaWx1cmVcblx0XHRcdFx0KTtcblx0XHRcdFx0Y3R4LmRlbGV0ZUFwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0XHRcdGN0eC5kZWxldGVBcGkucG9zdCgpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogVW5kZWxldGVzIGEgcGFnZSAoZm9yIGFkbWlucyBvbmx5KS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvblN1Y2Nlc3NdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gcnVuIG9uIHN1Y2Nlc3MuXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRmFpbHVyZV0gLSBDYWxsYmFjayBmdW5jdGlvbiB0byBydW4gb24gZmFpbHVyZS5cblx0XHQgKi9cblx0XHR0aGlzLnVuZGVsZXRlUGFnZSA9IGZ1bmN0aW9uIChvblN1Y2Nlc3MsIG9uRmFpbHVyZSkge1xuXHRcdFx0Y3R4Lm9uVW5kZWxldGVTdWNjZXNzID0gb25TdWNjZXNzO1xuXHRcdFx0Y3R4Lm9uVW5kZWxldGVGYWlsdXJlID0gb25GYWlsdXJlIHx8IGVtcHR5RnVuY3Rpb247XG5cdFx0XHRpZiAoIWZuUHJlZmxpZ2h0Q2hlY2tzLmNhbGwodGhpcywgJ3VuZGVsZXRlJywgY3R4Lm9uVW5kZWxldGVGYWlsdXJlKSkge1xuXHRcdFx0XHRyZXR1cm47IC8vIGFib3J0XG5cdFx0XHR9XG5cblx0XHRcdGlmIChmbkNhblVzZU13VXNlclRva2VuKCd1bmRlbGV0ZScpKSB7XG5cdFx0XHRcdGZuUHJvY2Vzc1VuZGVsZXRlLmNhbGwodGhpcywgdGhpcyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCBxdWVyeSA9IGZuTmVlZFRva2VuSW5mb1F1ZXJ5KCd1bmRlbGV0ZScpO1xuXHRcdFx0XHRjdHgudW5kZWxldGVBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdFx0d2luZG93LndnVUxTKCfojrflj5bku6TniYzigKbigKYnLCAn5Y+W5b6X5qyK5p2W4oCm4oCmJyksXG5cdFx0XHRcdFx0cXVlcnksXG5cdFx0XHRcdFx0Zm5Qcm9jZXNzVW5kZWxldGUsXG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQsXG5cdFx0XHRcdFx0Y3R4Lm9uVW5kZWxldGVGYWlsdXJlXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGN0eC51bmRlbGV0ZUFwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0XHRcdGN0eC51bmRlbGV0ZUFwaS5wb3N0KCk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBQcm90ZWN0cyBhIHBhZ2UgKGZvciBhZG1pbnMgb25seSkuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25TdWNjZXNzXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHRvIHJ1biBvbiBzdWNjZXNzLlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvbkZhaWx1cmVdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gcnVuIG9uIGZhaWx1cmUuXG5cdFx0ICovXG5cdFx0dGhpcy5wcm90ZWN0ID0gZnVuY3Rpb24gKG9uU3VjY2Vzcywgb25GYWlsdXJlKSB7XG5cdFx0XHRjdHgub25Qcm90ZWN0U3VjY2VzcyA9IG9uU3VjY2Vzcztcblx0XHRcdGN0eC5vblByb3RlY3RGYWlsdXJlID0gb25GYWlsdXJlIHx8IGVtcHR5RnVuY3Rpb247XG5cdFx0XHRpZiAoIWZuUHJlZmxpZ2h0Q2hlY2tzLmNhbGwodGhpcywgJ3Byb3RlY3QnLCBjdHgub25Qcm90ZWN0RmFpbHVyZSkpIHtcblx0XHRcdFx0cmV0dXJuOyAvLyBhYm9ydFxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIWN0eC5wcm90ZWN0RWRpdCAmJiAhY3R4LnByb3RlY3RNb3ZlICYmICFjdHgucHJvdGVjdENyZWF0ZSkge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0XHQnSW50ZXJuYWwgZXJyb3I6IHlvdSBtdXN0IHNldCBlZGl0IGFuZC9vciBtb3ZlIGFuZC9vciBjcmVhdGUgcHJvdGVjdGlvbiBiZWZvcmUgY2FsbGluZyBwcm90ZWN0KCkhJ1xuXHRcdFx0XHQpO1xuXHRcdFx0XHRjdHgub25Qcm90ZWN0RmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Ly8gYmVjYXVzZSBvZiB0aGUgd2F5IE1XIEFQSSBpbnRlcnByZXRzIHByb3RlY3Rpb24gbGV2ZWxzXG5cdFx0XHQvLyAoYWJzb2x1dGUsIG5vdCBkaWZmZXJlbnRpYWwpLCB3ZSBhbHdheXMgbmVlZCB0byByZXF1ZXN0XG5cdFx0XHQvLyBwcm90ZWN0aW9uIGxldmVscyBmcm9tIHRoZSBzZXJ2ZXJcblx0XHRcdGNvbnN0IHF1ZXJ5ID0gZm5OZWVkVG9rZW5JbmZvUXVlcnkoJ3Byb3RlY3QnKTtcblx0XHRcdGN0eC5wcm90ZWN0QXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0XHR3aW5kb3cud2dVTFMoJ+iOt+WPluS7pOeJjOKApuKApicsICflj5blvpfmrIrmnZbigKbigKYnKSxcblx0XHRcdFx0cXVlcnksXG5cdFx0XHRcdGZuUHJvY2Vzc1Byb3RlY3QsXG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LFxuXHRcdFx0XHRjdHgub25Qcm90ZWN0RmFpbHVyZVxuXHRcdFx0KTtcblx0XHRcdGN0eC5wcm90ZWN0QXBpLnNldFBhcmVudCh0aGlzKTtcblx0XHRcdGN0eC5wcm90ZWN0QXBpLnBvc3QoKTtcblx0XHR9O1xuXHRcdC8qXG5cdFx0ICogUHJpdmF0ZSBtZW1iZXIgZnVuY3Rpb25zXG5cdFx0ICogVGhlc2UgYXJlIG5vdCBleHBvc2VkIG91dHNpZGVcblx0XHQgKi9cblx0XHQvKipcblx0XHQgKiBEZXRlcm1pbmVzIHdoZXRoZXIgd2UgY2FuIHNhdmUgYW4gQVBJIGNhbGwgYnkgdXNpbmcgdGhlIGNzcmYgdG9rZW5cblx0XHQgKiBzZW50IHdpdGggdGhlIHBhZ2UgSFRNTCwgb3Igd2hldGhlciB3ZSBuZWVkIHRvIGFzayB0aGUgc2VydmVyIGZvclxuXHRcdCAqIG1vcmUgaW5mbyAoZS5nLiBwcm90ZWN0aW9uIG9yIHdhdGNobGlzdCBleHBpcnkpLlxuXHRcdCAqXG5cdFx0ICogQ3VycmVudGx5IHVzZWQgZm9yIGBhcHBlbmRgLCBgcHJlcGVuZGAsIGBuZXdTZWN0aW9uYCwgYG1vdmVgLFxuXHRcdCAqIGBkZWxldGVQYWdlYCwgYW5kIGB1bmRlbGV0ZVBhZ2VgLiBOb3QgdXNlZCBmb3IgYHByb3RlY3RgXG5cdFx0ICogc2luY2UgaXQgYWx3YXlzIG5lZWRzIHRvIHJlcXVlc3QgcHJvdGVjdGlvbiBzdGF0dXMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gW2FjdGlvbj1lZGl0XSAtIFRoZSBhY3Rpb24gYmVpbmcgdW5kZXJ0YWtlbiwgZS5nLlxuXHRcdCAqIFwiZWRpdFwiIG9yIFwiZGVsZXRlXCIuIEluIHByYWN0aWNlLCBvbmx5IFwiZWRpdFwiIG9yIFwibm90ZWRpdFwiIG1hdHRlcnMuXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdFx0ICovXG5cdFx0Y29uc3QgZm5DYW5Vc2VNd1VzZXJUb2tlbiA9IChhY3Rpb24pID0+IHtcblx0XHRcdGFjdGlvbiB8fD0gJ2VkaXQnO1xuXHRcdFx0Ly8gSWYgYSB3YXRjaGxpc3QgZXhwaXJ5IGlzIHNldCwgd2UgbXVzdCBhbHdheXMgbG9hZCB0aGUgcGFnZVxuXHRcdFx0Ly8gdG8gYXZvaWQgb3ZlcndyaXRpbmcgaW5kZWZpbml0ZSBwcm90ZWN0aW9uLiAgT2YgY291cnNlLCBub3Rcblx0XHRcdC8vIG5lZWRlZCBpZiBzZXR0aW5nIGluZGVmaW5pdGUgd2F0Y2hpbmchXG5cdFx0XHRpZiAoY3R4LndhdGNobGlzdEV4cGlyeSAmJiAhTW9yZWJpdHMuc3RyaW5nLmlzSW5maW5pdHkoY3R4LndhdGNobGlzdEV4cGlyeSkpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0Ly8gQVBJLWJhc2VkIHJlZGlyZWN0IHJlc29sdXRpb24gb25seSB3b3JrcyBmb3IgYWN0aW9uPXF1ZXJ5IGFuZFxuXHRcdFx0Ly8gYWN0aW9uPWVkaXQgaW4gYXBwZW5kL3ByZXBlbmQvbmV3IG1vZGVzXG5cdFx0XHRpZiAoY3R4LmZvbGxvd1JlZGlyZWN0KSB7XG5cdFx0XHRcdGlmICghY3R4LmZvbGxvd0Nyb3NzTnNSZWRpcmVjdCkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTsgLy8gbXVzdCBsb2FkIHRoZSBwYWdlIHRvIGNoZWNrIGZvciBjcm9zcyBuYW1lc3BhY2UgcmVkaXJlY3RzXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoYWN0aW9uICE9PSAnZWRpdCcgfHwgY3R4LmVkaXRNb2RlID09PSAnYWxsJyB8fCBjdHguZWRpdE1vZGUgPT09ICdyZXZlcnQnKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyBkbyB3ZSBuZWVkIHRvIGZldGNoIHRoZSBlZGl0IHByb3RlY3Rpb24gZXhwaXJ5P1xuXHRcdFx0aWYgKE1vcmViaXRzLnVzZXJJc1N5c29wICYmICFjdHguc3VwcHJlc3NQcm90ZWN0V2FybmluZykge1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0bmV3IG13LlRpdGxlKE1vcmViaXRzLnBhZ2VOYW1lTm9ybSkuZ2V0UHJlZml4ZWRUZXh0KCkgIT09XG5cdFx0XHRcdFx0bmV3IG13LlRpdGxlKGN0eC5wYWdlTmFtZSkuZ2V0UHJlZml4ZWRUZXh0KClcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIHdnUmVzdHJpY3Rpb25FZGl0IGlzIG51bGwgb24gbm9uLWV4aXN0ZW50IHBhZ2VzLFxuXHRcdFx0XHQvLyBzbyB0aGlzIG5lYXRseSBoYW5kbGVzIG5vbmV4aXN0ZW50IHBhZ2VzXG5cdFx0XHRcdGNvbnN0IGVkaXRSZXN0cmljdGlvbiA9IG13LmNvbmZpZy5nZXQoJ3dnUmVzdHJpY3Rpb25FZGl0Jyk7XG5cdFx0XHRcdGlmICghZWRpdFJlc3RyaWN0aW9uIHx8IGVkaXRSZXN0cmljdGlvbi5pbmNsdWRlcygnc3lzb3AnKSkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuICEhbXcudXNlci50b2tlbnMuZ2V0KCdjc3JmVG9rZW4nKTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIFdoZW4gZnVuY3Rpb25zIGNhbid0IHVzZVxuXHRcdCAqIHtAbGluayBNb3JlYml0cy53aWtpLnBhZ2V+Zm5DYW5Vc2VNd1VzZXJUb2tlbnxmbkNhblVzZU13VXNlclRva2VufVxuXHRcdCAqIG9yIHJlcXVpcmUgY2hlY2tpbmcgcHJvdGVjdGlvbiBvciB3YXRjaGVkIHN0YXR1cywgbWFpbnRhaW4gdGhlIHF1ZXJ5XG5cdFx0ICogaW4gb25lIHBsYWNlLiBVc2VkIGZvciB7QGxpbmsgTW9yZWJpdHMud2lraS5wYWdlI2RlbGV0ZVBhZ2V8ZGVsZXRlfSxcblx0XHQgKiB7QGxpbmsgTW9yZWJpdHMud2lraS5wYWdlI3VuZGVsZXRlUGFnZXx1bmRlbGV0ZX0sXG5cdFx0ICoge0BsaW5rKiBNb3JlYml0cy53aWtpLnBhZ2UjcHJvdGVjdHxwcm90ZWN0fSxcblx0XHQgKiBhbmQge0BsaW5rIE1vcmViaXRzLndpa2kucGFnZSNtb3ZlfG1vdmV9XG5cdFx0ICogKGJhc2ljYWxseSwganVzdCBub3Qge0BsaW5rIE1vcmViaXRzLndpa2kucGFnZSNsb2FkfGxvYWR9KS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb24gLSBUaGUgYWN0aW9uIGJlaW5nIHVuZGVydGFrZW4sIGUuZy4gXCJlZGl0XCIgb3Jcblx0XHQgKiBcImRlbGV0ZVwiLlxuXHRcdCAqIEByZXR1cm5zIHtPYmplY3R9IEFwcHJvcHJpYXRlIHF1ZXJ5LlxuXHRcdCAqL1xuXHRcdGNvbnN0IGZuTmVlZFRva2VuSW5mb1F1ZXJ5ID0gKGFjdGlvbikgPT4ge1xuXHRcdFx0Y29uc3QgcXVlcnkgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0bWV0YTogJ3Rva2VucycsXG5cdFx0XHRcdHR5cGU6ICdjc3JmJyxcblx0XHRcdFx0dGl0bGVzOiBjdHgucGFnZU5hbWUsXG5cdFx0XHRcdHByb3A6ICdpbmZvJyxcblx0XHRcdFx0aW5wcm9wOiAnd2F0Y2hlZCcsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0fTtcblx0XHRcdC8vIFByb3RlY3Rpb24gbm90IGNoZWNrZWQgZm9yIG5vbi1zeXNvcCBtb3Zlc1xuXHRcdFx0aWYgKGFjdGlvbiAhPT0gJ21vdmUnIHx8IE1vcmViaXRzLnVzZXJJc1N5c29wKSB7XG5cdFx0XHRcdHF1ZXJ5LmlucHJvcCArPSAnfHByb3RlY3Rpb24nO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGN0eC5mb2xsb3dSZWRpcmVjdCAmJiBhY3Rpb24gIT09ICd1bmRlbGV0ZScpIHtcblx0XHRcdFx0cXVlcnkucmVkaXJlY3RzID0gJyc7IC8vIGZvbGxvdyBhbGwgcmVkaXJlY3RzXG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBxdWVyeTtcblx0XHR9O1xuXHRcdC8vIGNhbGxiYWNrIGZyb20gbG9hZFN1Y2Nlc3MoKSBmb3IgYXBwZW5kKCksIHByZXBlbmQoKSwgYW5kIG5ld1NlY3Rpb24oKSB0aHJlYWRzXG5cdFx0Y29uc3QgZm5BdXRvU2F2ZSA9IChwYWdlb2JqKSA9PiB7XG5cdFx0XHRwYWdlb2JqLnNhdmUoY3R4Lm9uU2F2ZVN1Y2Nlc3MsIGN0eC5vblNhdmVGYWlsdXJlKTtcblx0XHR9O1xuXHRcdC8vIGNhbGxiYWNrIGZyb20gbG9hZEFwaS5wb3N0KClcblx0XHRjb25zdCBmbkxvYWRTdWNjZXNzID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBjdHgubG9hZEFwaS5nZXRSZXNwb25zZSgpLnF1ZXJ5O1xuXHRcdFx0aWYgKCFmbkNoZWNrUGFnZU5hbWUocmVzcG9uc2UsIGN0eC5vbkxvYWRGYWlsdXJlKSkge1xuXHRcdFx0XHRyZXR1cm47IC8vIGFib3J0XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IFtwYWdlXSA9IHJlc3BvbnNlLnBhZ2VzO1xuXHRcdFx0bGV0IHJldjtcblx0XHRcdGN0eC5wYWdlRXhpc3RzID0gIXBhZ2UubWlzc2luZztcblx0XHRcdGlmIChjdHgucGFnZUV4aXN0cykge1xuXHRcdFx0XHRbcmV2XSA9IHBhZ2UucmV2aXNpb25zO1xuXHRcdFx0XHRjdHgubGFzdEVkaXRUaW1lID0gcmV2LnRpbWVzdGFtcDtcblx0XHRcdFx0Y3R4LnBhZ2VUZXh0ID0gcmV2LmNvbnRlbnQ7XG5cdFx0XHRcdGN0eC5wYWdlSUQgPSBwYWdlLnBhZ2VpZDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGN0eC5wYWdlVGV4dCA9ICcnOyAvLyBhbGxvdyBmb3IgY29uY2F0ZW5hdGlvbiwgZXRjLlxuXHRcdFx0XHRjdHgucGFnZUlEID0gMDsgLy8gbm9uZXhpc3RlbnQgaW4gcmVzcG9uc2UsIG1hdGNoZXMgd2dBcnRpY2xlSWRcblx0XHRcdH1cblxuXHRcdFx0Y3R4LmNzcmZUb2tlbiA9IHJlc3BvbnNlLnRva2Vucy5jc3JmdG9rZW47XG5cdFx0XHRpZiAoIWN0eC5jc3JmVG9rZW4pIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2luZG93LndnVUxTKCfmnKrog73ojrflj5bnvJbovpHku6TniYzjgIInLCAn5pyq6IO95Y+W5b6X57eo6Lyv5qyK5p2W44CCJykpO1xuXHRcdFx0XHRjdHgub25Mb2FkRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y3R4LmxvYWRUaW1lID0gY3R4LmxvYWRBcGkuZ2V0UmVzcG9uc2UoKS5jdXJ0aW1lc3RhbXA7XG5cdFx0XHRpZiAoIWN0eC5sb2FkVGltZSkge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3aW5kb3cud2dVTFMoJ+acquiDveiOt+WPluW9k+WJjeaXtumXtOaIs+OAgicsICfmnKrog73lj5blvpfnlbbliY3mmYLplpPmiLPjgIInKSk7XG5cdFx0XHRcdGN0eC5vbkxvYWRGYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjdHguY29udGVudE1vZGVsID0gcGFnZS5jb250ZW50bW9kZWw7XG5cdFx0XHRjdHgud2F0Y2hlZCA9IHBhZ2Uud2F0Y2hsaXN0ZXhwaXJ5IHx8IHBhZ2Uud2F0Y2hlZDtcblx0XHRcdC8vIGV4dHJhY3QgcHJvdGVjdGlvbiBpbmZvLCB0byBhbGVydCBhZG1pbnMgd2hlbiB0aGV5IGFyZSBhYm91dCB0byBlZGl0IGEgcHJvdGVjdGVkIHBhZ2Vcblx0XHRcdC8vIEluY2x1ZGVzIGNhc2NhZGluZyBwcm90ZWN0aW9uXG5cdFx0XHRpZiAoTW9yZWJpdHMudXNlcklzU3lzb3ApIHtcblx0XHRcdFx0Y29uc3QgZWRpdFByb3QgPSBwYWdlLnByb3RlY3Rpb24uZmluZExhc3QoKHByKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIHByLnR5cGUgPT09ICdlZGl0JyAmJiBwci5sZXZlbCA9PT0gJ3N5c29wJztcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGlmIChlZGl0UHJvdCkge1xuXHRcdFx0XHRcdGN0eC5mdWxseVByb3RlY3RlZCA9IGVkaXRQcm90LmV4cGlyeTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjdHguZnVsbHlQcm90ZWN0ZWQgPSBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Y3R4LnJldmVydEN1cklEID0gcGFnZS5sYXN0cmV2aWQ7XG5cdFx0XHRjb25zdCB0ZXN0YWN0aW9ucyA9IHBhZ2UuYWN0aW9ucztcblx0XHRcdGN0eC50ZXN0QWN0aW9ucyA9IFtdOyAvLyB3YXMgbnVsbFxuXHRcdFx0Zm9yIChjb25zdCBhY3Rpb24gb2YgT2JqZWN0LmtleXModGVzdGFjdGlvbnMpKSB7XG5cdFx0XHRcdGlmICh0ZXN0YWN0aW9uc1thY3Rpb25dKSB7XG5cdFx0XHRcdFx0Y3R4LnRlc3RBY3Rpb25zW2N0eC50ZXN0QWN0aW9ucy5sZW5ndGhdID0gYWN0aW9uO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoY3R4LmVkaXRNb2RlID09PSAncmV2ZXJ0Jykge1xuXHRcdFx0XHRjdHgucmV2ZXJ0Q3VySUQgPSByZXYgJiYgcmV2LnJldmlkO1xuXHRcdFx0XHRpZiAoIWN0eC5yZXZlcnRDdXJJRCkge1xuXHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdpbmRvdy53Z1VMUygn5pyq6IO96I635Y+W5b2T5YmN5L+u6K6i54mI5pysSUTjgIInLCAn5pyq6IO95Y+W5b6X55uu5YmN5L+u6KiC54mI5pysSUTjgIInKSk7XG5cdFx0XHRcdFx0Y3R4Lm9uTG9hZEZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGN0eC5yZXZlcnRVc2VyID0gcmV2ICYmIHJldi51c2VyO1xuXHRcdFx0XHRpZiAoIWN0eC5yZXZlcnRVc2VyKSB7XG5cdFx0XHRcdFx0aWYgKHJldiAmJiByZXYudXNlcmhpZGRlbikge1xuXHRcdFx0XHRcdFx0Ly8gdXNlcm5hbWUgd2FzIFJldkRlbCdkIG9yIG92ZXJzaWdodGVkXG5cdFx0XHRcdFx0XHRjdHgucmV2ZXJ0VXNlciA9IHdpbmRvdy53Z1VMUygnPOeUqOaIt+WQjeW3sumakOiXjz4nLCAnPOS9v+eUqOiAheWQjeeoseW3sumaseiXjz4nKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5pyq6IO96I635Y+W5q2k5L+u6K6i54mI5pys55qE57yW6L6R6ICF44CCJywgJ+acquiDveWPluW+l+atpOS/ruiogueJiOacrOeahOe3qOi8r+iAheOAgicpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0Y3R4Lm9uTG9hZEZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIHNldCByZXZlcnQgZWRpdCBzdW1tYXJ5XG5cdFx0XHRcdGN0eC5lZGl0U3VtbWFyeSA9IGBbW1FXOlVORE985pKk6ZSAXV3nlLEgJHtjdHgucmV2ZXJ0VXNlcn0g5omA5YGa5Ye655qEJHt3aW5kb3cud2dVTFMoJ+S/ruiuoiAnLCAn5L+u6KiCICcpfSR7XG5cdFx0XHRcdFx0Y3R4LnJldmVydE9sZElEXG5cdFx0XHRcdH3vvJoke2N0eC5lZGl0U3VtbWFyeX1gO1xuXHRcdFx0fVxuXHRcdFx0Y3R4LnBhZ2VMb2FkZWQgPSB0cnVlO1xuXHRcdFx0Ly8gbXcubm90aWZ5KFwiR2VuZXJhdGUgZWRpdCBjb25mbGljdCBub3dcIiwge3R5cGU6ICd3YXJuJywgdGFnOiAnbW9yZWJpdHMnfSk7ICAvLyBmb3IgdGVzdGluZyBlZGl0IGNvbmZsaWN0IHJlY292ZXJ5IGxvZ2ljXG5cdFx0XHRjdHgub25Mb2FkU3VjY2Vzcyh0aGlzKTsgLy8gaW52b2tlIGNhbGxiYWNrXG5cdFx0fTtcblx0XHQvLyBoZWxwZXIgZnVuY3Rpb24gdG8gcGFyc2UgdGhlIHBhZ2UgbmFtZSByZXR1cm5lZCBmcm9tIHRoZSBBUElcblx0XHRjb25zdCBmbkNoZWNrUGFnZU5hbWUgPSBmdW5jdGlvbiAocmVzcG9uc2UsIG9uRmFpbHVyZSkge1xuXHRcdFx0b25GYWlsdXJlIHx8PSBlbXB0eUZ1bmN0aW9uO1xuXHRcdFx0Y29uc3QgcGFnZSA9IHJlc3BvbnNlLnBhZ2VzICYmIHJlc3BvbnNlLnBhZ2VzWzBdO1xuXHRcdFx0aWYgKHBhZ2UpIHtcblx0XHRcdFx0Ly8gY2hlY2sgZm9yIGludmFsaWQgdGl0bGVzXG5cdFx0XHRcdGlmIChwYWdlLmludmFsaWQpIHtcblx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3aW5kb3cud2dVTFMoJ+agh+mimOS4jeWQiOazle+8micsIGDmqJnpoYzkuI3lkIjms5XvvJoke2N0eC5wYWdlTmFtZX1gKSk7XG5cdFx0XHRcdFx0b25GYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTsgLy8gYWJvcnRcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyByZXRyaWV2ZSBhY3R1YWwgdGl0bGUgb2YgdGhlIHBhZ2UgYWZ0ZXIgbm9ybWFsaXphdGlvbiBhbmQgcmVkaXJlY3RzXG5cdFx0XHRcdGNvbnN0IHJlc29sdmVkTmFtZSA9IHBhZ2UudGl0bGU7XG5cdFx0XHRcdGlmIChyZXNwb25zZS5yZWRpcmVjdHMpIHtcblx0XHRcdFx0XHQvLyBjaGVjayBmb3IgY3Jvc3MtbmFtZXNwYWNlIHJlZGlyZWN0OlxuXHRcdFx0XHRcdGNvbnN0IG9yaWdOcyA9IG5ldyBtdy5UaXRsZShjdHgucGFnZU5hbWUpLm5hbWVzcGFjZTtcblx0XHRcdFx0XHRjb25zdCBuZXdOcyA9IG5ldyBtdy5UaXRsZShyZXNvbHZlZE5hbWUpLm5hbWVzcGFjZTtcblx0XHRcdFx0XHRpZiAob3JpZ05zICE9PSBuZXdOcyAmJiAhY3R4LmZvbGxvd0Nyb3NzTnNSZWRpcmVjdCkge1xuXHRcdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdFx0XHRcdGN0eC5wYWdlTmFtZSArXG5cdFx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfmmK/ot6jlkb3lkI3nqbrpl7Tph43lrprlkJHliLAnLCAn5piv6Leo5ZG95ZCN56m66ZaT6YeN5paw5bCO5ZCR5YiwJykgK1xuXHRcdFx0XHRcdFx0XHRcdHJlc29sdmVkTmFtZSArXG5cdFx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfvvIznlaXov4cnLCAn77yM55Wl6YGOJylcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRvbkZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIG9ubHkgbm90aWZ5IHVzZXIgZm9yIHJlZGlyZWN0cywgbm90IG5vcm1hbGl6YXRpb25cblx0XHRcdFx0XHRuZXcgTW9yZWJpdHMuc3RhdHVzKFxuXHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfkv6Hmga8nLCAn6LOH6KiKJyksXG5cdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+S7jiAnLCAn5b6eICcpICtcblx0XHRcdFx0XHRcdFx0Y3R4LnBhZ2VOYW1lICtcblx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCcg6YeN5a6a5ZCR5YiwICcsICcg6YeN5paw5bCO5ZCR5YiwICcpICtcblx0XHRcdFx0XHRcdFx0cmVzb2x2ZWROYW1lXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjdHgucGFnZU5hbWUgPSByZXNvbHZlZE5hbWU7IC8vIHVwZGF0ZSB0byByZWRpcmVjdCB0YXJnZXQgb3Igbm9ybWFsaXplZCBuYW1lXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBjb3VsZCBiZSBhIGNpcmN1bGFyIHJlZGlyZWN0IG9yIG90aGVyIHByb2JsZW1cblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdFx0d2luZG93LndnVUxTKCfkuI3og73op6PmnpDpobXpnaLnmoTph43lrprlkJHvvJonLCAn5LiN6IO96Kej5p6Q6aCB6Z2i55qE6YeN5paw5bCO5ZCR77yaJykgKyBjdHgucGFnZU5hbWVcblx0XHRcdFx0KTtcblx0XHRcdFx0b25GYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHQvLyBmb3JjZSBlcnJvciB0byBzdGF5IG9uIHRoZSBzY3JlZW5cblx0XHRcdFx0KytNb3JlYml0cy53aWtpLm51bWJlck9mQWN0aW9uc0xlZnQ7XG5cdFx0XHRcdHJldHVybiBmYWxzZTsgLy8gYWJvcnRcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRydWU7IC8vIGFsbCBPS1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogRGV0ZXJtaW5lIHdoZXRoZXIgd2Ugc2hvdWxkIHByb3ZpZGUgYSB3YXRjaGxpc3QgZXhwaXJ5LiAgV2lsbCBub3Rcblx0XHQgKiBkbyBzbyBpZiB0aGUgcGFnZSBpcyBjdXJyZW50bHkgcGVybWFuZW50bHkgd2F0Y2hlZCwgb3IgdGhlIGN1cnJlbnRcblx0XHQgKiBleHBpcnkgaXMgKmFmdGVyKiB0aGUgbmV3LCBwcm92aWRlZCBleHBpcnkuICBPbmx5IGhhbmRsZXMgc3RyaW5nc1xuXHRcdCAqIHJlY29nbml6ZWQgYnkge0BsaW5rIE1vcmViaXRzLmRhdGV9IG9yIHJlbGF0aXZlIHRpbWVmcmFtZXMgd2l0aFxuXHRcdCAqIHVuaXQgaXQgY2FuIHByb2Nlc3MuICBSZWxpZXMgb24gdGhlIGZhY3QgdGhhdCBmbkNhblVzZU13VXNlclRva2VuXG5cdFx0ICogcmVxdWlyZXMgcGFnZSBsb2FkaW5nIGlmIGEgd2F0Y2hsaXN0ZXhwaXJ5IGlzIHByb3ZpZGVkLCBzbyB3ZSBhcmVcblx0XHQgKiBlbnN1cmVkIG9mIGtub3dpbmcgdGhlIHdhdGNoIHN0YXR1cyBieSB0aGUgdXNlIG9mIHRoaXMuXG5cdFx0ICpcblx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0XHQgKi9cblx0XHRjb25zdCBmbkFwcGx5V2F0Y2hsaXN0RXhwaXJ5ID0gKCkgPT4ge1xuXHRcdFx0aWYgKGN0eC53YXRjaGxpc3RFeHBpcnkpIHtcblx0XHRcdFx0aWYgKCFjdHgud2F0Y2hlZCB8fCBNb3JlYml0cy5zdHJpbmcuaXNJbmZpbml0eShjdHgud2F0Y2hsaXN0RXhwaXJ5KSkge1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBjdHgud2F0Y2hlZCA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHRsZXQgbmV3RXhwaXJ5O1xuXHRcdFx0XHRcdC8vIEF0dGVtcHQgdG8gZGV0ZXJtaW5lIGlmIHRoZSBuZXcgZXhwaXJ5IGlzIGFcblx0XHRcdFx0XHQvLyByZWxhdGl2ZSAoZS5nLiBgMSBtb250aGApIG9yIGFic29sdXRlIGRhdGV0aW1lXG5cdFx0XHRcdFx0Y29uc3QgcmVsID0gY3R4LndhdGNobGlzdEV4cGlyeS5zcGxpdCgnICcpO1xuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRuZXdFeHBpcnkgPSBuZXcgTW9yZWJpdHMuZGF0ZSgpLmFkZChyZWxbMF0sIHJlbFsxXSk7XG5cdFx0XHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdFx0XHRuZXdFeHBpcnkgPSBuZXcgTW9yZWJpdHMuZGF0ZShjdHgud2F0Y2hsaXN0RXhwaXJ5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gSWYgdGhlIGRhdGUgaXMgdmFsaWQsIG9ubHkgdXNlIGl0IGlmIGl0IGV4dGVuZHMgdGhlIGN1cnJlbnQgZXhwaXJ5XG5cdFx0XHRcdFx0aWYgKG5ld0V4cGlyeS5pc1ZhbGlkKCkpIHtcblx0XHRcdFx0XHRcdGlmIChuZXdFeHBpcnkuaXNBZnRlcihuZXcgTW9yZWJpdHMuZGF0ZShjdHgud2F0Y2hlZCkpKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHQvLyBJZiBpdCdzIHN0aWxsIG5vdCB2YWxpZCwgaG9wZSBpdCdzIGEgdmFsaWQgTVcgZXhwaXJ5IGZvcm1hdCB0aGF0XG5cdFx0XHRcdFx0XHQvLyBNb3JlYml0cy5kYXRlIGRvZXNuJ3QgcmVjb2duaXplLCBzbyBqdXN0IGRlZmF1bHQgdG8gdXNpbmcgaXQuXG5cdFx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgYWxzbyBpbmNsdWRlIG1pbm9yIHR5cG9zLlxuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fTtcblx0XHQvLyBjYWxsYmFjayBmcm9tIHNhdmVBcGkucG9zdCgpXG5cdFx0Y29uc3QgZm5TYXZlU3VjY2VzcyA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGN0eC5lZGl0TW9kZSA9ICdhbGwnOyAvLyBjYW5jZWwgYXBwZW5kL3ByZXBlbmQvbmV3U2VjdGlvbi9yZXZlcnQgbW9kZXNcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gY3R4LnNhdmVBcGkuZ2V0UmVzcG9uc2UoKTtcblx0XHRcdC8vIHNlZSBpZiB0aGUgQVBJIHRoaW5rcyB3ZSB3ZXJlIHN1Y2Nlc3NmdWxcblx0XHRcdGlmIChyZXNwb25zZS5lZGl0LnJlc3VsdCA9PT0gJ1N1Y2Nlc3MnKSB7XG5cdFx0XHRcdC8vIHJlYWwgc3VjY2Vzc1xuXHRcdFx0XHQvLyBkZWZhdWx0IG9uIHN1Y2Nlc3MgYWN0aW9uIC0gZGlzcGxheSBsaW5rIGZvciBlZGl0ZWQgcGFnZVxuXHRcdFx0XHRjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXHRcdFx0XHRsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIG13LnV0aWwuZ2V0VXJsKGN0eC5wYWdlTmFtZSkpO1xuXHRcdFx0XHRsaW5rLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGN0eC5wYWdlTmFtZSkpO1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5pbmZvKFsn5a6M5oiQ77yIJywgbGluaywgJ++8iSddKTtcblx0XHRcdFx0aWYgKGN0eC5vblNhdmVTdWNjZXNzKSB7XG5cdFx0XHRcdFx0Y3R4Lm9uU2F2ZVN1Y2Nlc3ModGhpcyk7IC8vIGludm9rZSBjYWxsYmFja1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Ly8gZXJyb3JzIGhlcmUgYXJlIG9ubHkgZ2VuZXJhdGVkIGJ5IGV4dGVuc2lvbnMgd2hpY2ggaG9vayBBUElFZGl0QmVmb3JlU2F2ZSB3aXRoaW4gTWVkaWFXaWtpLFxuXHRcdFx0Ly8gd2hpY2ggYXMgb2YgMS4zNC4wLXdtZi4yMyAoU2VwdCAyMDE5KSBzaG91bGQgb25seSBlbmNvbXBhc3MgY2FwdGNoYSBtZXNzYWdlc1xuXHRcdFx0aWYgKHJlc3BvbnNlLmVkaXQuY2FwdGNoYSkge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+S4jeiDveS/neWtmOmhtemdou+8jOWboOacjeWKoeWZqOimgeaxguaCqOi+k+WFpemqjOivgeeggeOAgicsICfkuI3og73lhLLlrZjpoIHpnaLvvIzlm6DkvLrmnI3lmajopoHmsYLmgqjovLjlhaXpqZforYnnorzjgIInKVxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2luZG93LndnVUxTKCfkv53lrZjpobXpnaLml7bnlLFBUEnlvpfliLDmnKrnn6XplJnor68nLCAn5YSy5a2Y6aCB6Z2i5pmC55SxQVBJ5b6X5Yiw5pyq55+l6Yyv6KqkJykpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gZm9yY2UgZXJyb3IgdG8gc3RheSBvbiB0aGUgc2NyZWVuXG5cdFx0XHQrK01vcmViaXRzLndpa2kubnVtYmVyT2ZBY3Rpb25zTGVmdDtcblx0XHRcdGN0eC5vblNhdmVGYWlsdXJlKHRoaXMpO1xuXHRcdH07XG5cdFx0Ly8gY2FsbGJhY2sgZnJvbSBzYXZlQXBpLnBvc3QoKVxuXHRcdGNvbnN0IGZuU2F2ZUVycm9yID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc3QgZXJyb3JDb2RlID0gY3R4LnNhdmVBcGkuZ2V0RXJyb3JDb2RlKCk7XG5cdFx0XHQvLyBjaGVjayBmb3IgZWRpdCBjb25mbGljdFxuXHRcdFx0aWYgKGVycm9yQ29kZSA9PT0gJ2VkaXRjb25mbGljdCcgJiYgY3R4LmNvbmZsaWN0UmV0cmllcysrIDwgY3R4Lm1heENvbmZsaWN0UmV0cmllcykge1xuXHRcdFx0XHQvLyBlZGl0IGNvbmZsaWN0cyBjYW4gb2NjdXIgd2hlbiB0aGUgcGFnZSBuZWVkcyB0byBiZSBwdXJnZWQgZnJvbSB0aGUgc2VydmVyIGNhY2hlXG5cdFx0XHRcdGNvbnN0IHB1cmdlUXVlcnkgPSB7XG5cdFx0XHRcdFx0YWN0aW9uOiAncHVyZ2UnLFxuXHRcdFx0XHRcdHRpdGxlczogY3R4LnBhZ2VOYW1lLCAvLyByZWRpcmVjdHMgYXJlIGFscmVhZHkgcmVzb2x2ZWRcblx0XHRcdFx0fTtcblxuXHRcdFx0XHRjb25zdCBwdXJnZUFwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+ajgOa1i+WIsOe8lui+keWGsueqge+8jOato+WcqOabtOaWsOacjeWKoeWZqOe8k+WtmCcsICfmqqLmuKzliLDnt6jovK/ooZ3nqoHvvIzmraPlnKjmm7TmlrDkvLrmnI3lmajlv6vlj5YnKSxcblx0XHRcdFx0XHRwdXJnZVF1ZXJ5LFxuXHRcdFx0XHRcdCgpID0+IHtcblx0XHRcdFx0XHRcdC0tTW9yZWJpdHMud2lraS5udW1iZXJPZkFjdGlvbnNMZWZ0OyAvLyBhbGxvdyBmb3Igbm9ybWFsIGNvbXBsZXRpb24gaWYgcmV0cnkgc3VjY2VlZHNcblx0XHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmluZm8od2luZG93LndnVUxTKCfmo4DmtYvliLDnvJbovpHlhrLnqoHvvIzph43or5Xkv67mlLknLCAn5qqi5ris5Yiw57eo6Lyv6KGd56qB77yM6YeN6Kmm5L+u5pS5JykpO1xuXHRcdFx0XHRcdFx0aWYgKGZuQ2FuVXNlTXdVc2VyVG9rZW4oJ2VkaXQnKSkge1xuXHRcdFx0XHRcdFx0XHRjdHguc2F2ZUFwaS5wb3N0KCk7IC8vIG5lY2Vzc2FyaWx5IGFwcGVuZCwgcHJlcGVuZCwgb3IgbmV3U2VjdGlvbiwgc28gdGhpcyBzaG91bGQgd29yayBhcyBkZXNpcmVkXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRjdHgubG9hZEFwaS5wb3N0KCk7IC8vIHJlbG9hZCB0aGUgcGFnZSBhbmQgcmVhcHBseSB0aGUgZWRpdFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnRcblx0XHRcdFx0KTtcblx0XHRcdFx0cHVyZ2VBcGkucG9zdCgpO1xuXHRcdFx0XHQvLyBjaGVjayBmb3IgbmV0d29yayBvciBzZXJ2ZXIgZXJyb3Jcblx0XHRcdH0gZWxzZSBpZiAoKGVycm9yQ29kZSA9PT0gbnVsbCB8fCBlcnJvckNvZGUgPT09IHVuZGVmaW5lZCkgJiYgY3R4LnJldHJpZXMrKyA8IGN0eC5tYXhSZXRyaWVzKSB7XG5cdFx0XHRcdC8vIHRoZSBlcnJvciBtaWdodCBiZSB0cmFuc2llbnQsIHNvIHRyeSBhZ2FpblxuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5pbmZvKHdpbmRvdy53Z1VMUygn5L+d5a2Y5aSx6LSl77yM5ZyoMuenkuWQjumHjeivleKApuKApicsICflhLLlrZjlpLHmlZfvvIzlnKgy56eS5b6M6YeN6Kmm4oCm4oCmJykpO1xuXHRcdFx0XHQtLU1vcmViaXRzLndpa2kubnVtYmVyT2ZBY3Rpb25zTGVmdDsgLy8gYWxsb3cgZm9yIG5vcm1hbCBjb21wbGV0aW9uIGlmIHJldHJ5IHN1Y2NlZWRzXG5cdFx0XHRcdC8vIHdhaXQgZm9yIHNvbWV0aW1lIGZvciBjbGllbnQgdG8gcmVnYWluIGNvbm5lY3Rpdml0eVxuXHRcdFx0XHRzbGVlcCgyMDAwKS50aGVuKCgpID0+IHtcblx0XHRcdFx0XHRjdHguc2F2ZUFwaS5wb3N0KCk7IC8vIGdpdmUgaXQgYW5vdGhlciBnbyFcblx0XHRcdFx0fSk7XG5cdFx0XHRcdC8vIGhhcmQgZXJyb3IsIGdpdmUgdXBcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gY3R4LnNhdmVBcGkuZ2V0UmVzcG9uc2UoKTtcblx0XHRcdFx0Y29uc3QgZXJyb3JEYXRhID1cblx0XHRcdFx0XHRyZXNwb25zZS5lcnJvciB8fFxuXHRcdFx0XHRcdC8vIGJjIGVycm9yIGZvcm1hdFxuXHRcdFx0XHRcdHJlc3BvbnNlLmVycm9yc1swXS5kYXRhOyAvLyBodG1sL3dpa2l0ZXh0L3BsYWludGV4dCBlcnJvciBmb3JtYXRcblx0XHRcdFx0c3dpdGNoIChlcnJvckNvZGUpIHtcblx0XHRcdFx0XHRjYXNlICdwcm90ZWN0ZWRwYWdlJzpcblx0XHRcdFx0XHRcdC8vIG5vbi1hZG1pbiBhdHRlbXB0aW5nIHRvIGVkaXQgYSBwcm90ZWN0ZWQgcGFnZSAtIHRoaXMgZ2l2ZXMgYSBmcmllbmRsaWVyIG1lc3NhZ2UgdGhhbiB0aGUgZGVmYXVsdFxuXHRcdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2luZG93LndnVUxTKCfkuI3og73kv53lrZjkv67mlLnvvJrpobXpnaLooqvkv53miqQnLCAn5LiN6IO95YSy5a2Y5L+u5pS577ya6aCB6Z2i6KKr5L+d6K23JykpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnYWJ1c2VmaWx0ZXItZGlzYWxsb3dlZCc6XG5cdFx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfnvJbovpHooqvpmLLmu6XnlKjov4fmu6Tlmajop4TliJnigJwnLCAn57eo6Lyv6KKr6Ziy5r+r55So6YGO5r++5Zmo6KaP5YmH44CMJykgK1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yRGF0YS5hYnVzZWZpbHRlci5kZXNjcmlwdGlvbiArXG5cdFx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKFxuXHRcdFx0XHRcdFx0XHRcdFx0J+KAnemYu+atouOAguiLpeaCqOiupOS4uuaCqOeahOivpeasoee8lui+keaYr+acieaEj+S5ieeahO+8jOivt+iHsyBRaXV3ZW5fdGFsazrnrqHnkIblkZjlkYrnpLrmnb8g5o+Q5oql44CCJyxcblx0XHRcdFx0XHRcdFx0XHRcdCfjgI3pmLvmraLjgILoi6Xmgqjoqo3ngrrmgqjnmoToqbLmrKHnt6jovK/mmK/mnInmhI/nvqnnmoTvvIzoq4voh7MgUWl1d2VuX3RhbGs6566h55CG5ZOh5ZGK56S65p2/IOaPkOWgseOAgidcblx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnYWJ1c2VmaWx0ZXItd2FybmluZyc6XG5cdFx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihbXG5cdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn57yW6L6R6KKr6Ziy5rul55So6L+H5ruk5Zmo6KeE5YiZ4oCcJywgJ+e3qOi8r+iiq+mYsua/q+eUqOmBjua/vuWZqOimj+WJh+OAjCcpLFxuXHRcdFx0XHRcdFx0XHRlcnJvckRhdGEuYWJ1c2VmaWx0ZXIuZGVzY3JpcHRpb24sXG5cdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUyhcblx0XHRcdFx0XHRcdFx0XHQn4oCd6K2m5ZGK77yM6Iul5oKo5LuN5biM5pyb5YGa5Ye66K+l57yW6L6R77yM6K+35bCd6K+V6YeN5paw5o+Q5Lqk77yM5qC55o2u6L+H5ruk5Zmo55qE6K6+572u5oKo5Y+v6IO95Y+v5Lul5L2c5Ye65q2k57yW6L6R44CCJyxcblx0XHRcdFx0XHRcdFx0XHQn44CN6K2m5ZGK77yM6Iul5oKo5LuN5biM5pyb5YGa5Ye66Kmy57eo6Lyv77yM6KuL5ZiX6Kmm6YeN5paw5o+Q5Lqk77yM5qC55pOa6YGO5r++5Zmo55qE6Kit5a6a5oKo5Y+v6IO95Y+v5Lul5L2c5Ye65q2k57eo6Lyv44CCJ1xuXHRcdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0XSk7XG5cdFx0XHRcdFx0XHQvLyBXZSBzaG91bGQgcHJvdmlkZSB0aGUgdXNlciB3aXRoIGEgd2F5IHRvIGF1dG9tYXRpY2FsbHkgcmV0cnkgdGhlIGFjdGlvbiBpZiB0aGV5IHNvIGNob29zZSAtXG5cdFx0XHRcdFx0XHQvLyBJIGNhbid0IHNlZSBob3cgdG8gZG8gdGhpcyB3aXRob3V0IGNyZWF0aW5nIGEgVUkgZGVwZW5kZW5jeSBvbiBNb3JlYml0cy53aWtpLnBhZ2UgdGhvdWdoIC0tIFRUT1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnc3BhbWJsYWNrbGlzdCc6IHtcblx0XHRcdFx0XHRcdC8vIElmIG11bHRpcGxlIGl0ZW1zIGFyZSBibGFja2xpc3RlZCwgd2Ugb25seSByZXR1cm4gdGhlIGZpcnN0XG5cdFx0XHRcdFx0XHRjb25zdCBbc3BhbV0gPSBlcnJvckRhdGEuc3BhbWJsYWNrbGlzdC5tYXRjaGVzO1xuXHRcdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5LiN6IO95L+d5a2Y6aG16Z2i77yM5ZugVVJMICcsICfkuI3og73lhLLlrZjpoIHpnaLvvIzlm6BVUkwgJykgK1xuXHRcdFx0XHRcdFx0XHRcdHNwYW0gK1xuXHRcdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygnIOWcqOWeg+WcvumTvuaOpem7keWQjeWNleS4reOAgicsICcg5Zyo5Z6D5Zy+6YCj57WQ6buR5ZCN5Zau5Lit44CCJylcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+S4jeiDveS/neWtmOS/ruaUue+8micsICfkuI3og73lhLLlrZjkv67mlLnvvJonKSArIGN0eC5zYXZlQXBpLmdldEVycm9yVGV4dCgpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGN0eC5lZGl0TW9kZSA9ICdhbGwnOyAvLyBjYW5jZWwgYXBwZW5kL3ByZXBlbmQvbmV3U2VjdGlvbi9yZXZlcnQgbW9kZXNcblx0XHRcdFx0aWYgKGN0eC5vblNhdmVGYWlsdXJlKSB7XG5cdFx0XHRcdFx0Y3R4Lm9uU2F2ZUZhaWx1cmUodGhpcyk7IC8vIGludm9rZSBjYWxsYmFja1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdGNvbnN0IGlzVGV4dFJlZGlyZWN0ID0gKHRleHQpID0+IHtcblx0XHRcdGlmICghdGV4dCkge1xuXHRcdFx0XHQvLyBubyB0ZXh0IC0gY29udGVudCBlbXB0eSBvciBpbmFjY2Vzc2libGUgKHJldmRlbGxlZCBvciBzdXBwcmVzc2VkKVxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gTW9yZWJpdHMubDEwbi5yZWRpcmVjdFRhZ0FsaWFzZXMuc29tZSgodGFnKSA9PiB7XG5cdFx0XHRcdHJldHVybiBuZXcgUmVnRXhwKGBeXFxcXHMqJHt0YWd9XFxcXFdgLCAnaScpLnRlc3QodGV4dCk7XG5cdFx0XHR9KTtcblx0XHR9O1xuXHRcdGNvbnN0IGZuTG9va3VwQ3JlYXRpb25TdWNjZXNzID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBjdHgubG9va3VwQ3JlYXRpb25BcGkuZ2V0UmVzcG9uc2UoKS5xdWVyeTtcblx0XHRcdGlmICghZm5DaGVja1BhZ2VOYW1lKHJlc3BvbnNlLCBjdHgub25Mb29rdXBDcmVhdGlvbkZhaWx1cmUpKSB7XG5cdFx0XHRcdHJldHVybjsgLy8gYWJvcnRcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgcmV2ID0gcmVzcG9uc2UucGFnZXNbMF0ucmV2aXNpb25zICYmIHJlc3BvbnNlLnBhZ2VzWzBdLnJldmlzaW9uc1swXTtcblx0XHRcdGlmICghcmV2KSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5peg5rOV5om+5YiwJywgJ+eEoeazleaJvuWIsCcpICtcblx0XHRcdFx0XHRcdGN0eC5wYWdlTmFtZSArXG5cdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+eahOS7u+S9leS/ruiuoueJiOacrCcsICfnmoTku7vkvZXkv67oqILniYjmnKwnKVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRjdHgub25Mb29rdXBDcmVhdGlvbkZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmICghY3R4Lmxvb2t1cE5vblJlZGlyZWN0Q3JlYXRvciB8fCAhaXNUZXh0UmVkaXJlY3QocmV2LmNvbnRlbnQpKSB7XG5cdFx0XHRcdGN0eC5jcmVhdG9yID0gcmV2LnVzZXI7XG5cdFx0XHRcdGlmICghY3R4LmNyZWF0b3IpIHtcblx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3aW5kb3cud2dVTFMoJ+aXoOazleiOt+WPlumhtemdouWIm+W7uuiAheeahOWQjeWtlycsICfnhKHms5Xlj5blvpfpoIHpnaLlu7rnq4vogIXnmoTlkI3lrZcnKSk7XG5cdFx0XHRcdFx0Y3R4Lm9uTG9va3VwQ3JlYXRpb25GYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRjdHgudGltZXN0YW1wID0gcmV2LnRpbWVzdGFtcDtcblx0XHRcdFx0aWYgKCFjdHgudGltZXN0YW1wKSB7XG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2luZG93LndnVUxTKCfml6Dms5Xojrflj5bpobXpnaLliJvlu7rml7bpl7QnLCAn54Sh5rOV5Y+W5b6X6aCB6Z2i5bu656uL5pmC6ZaTJykpO1xuXHRcdFx0XHRcdGN0eC5vbkxvb2t1cENyZWF0aW9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuaW5mbyh3aW5kb3cud2dVTFMoJ+W3suiOt+WPlumhtemdouWIm+W7uuS/oeaBrycsICflt7Llj5blvpfpoIHpnaLlu7rnq4vos4foqIonKSk7XG5cdFx0XHRcdGN0eC5vbkxvb2t1cENyZWF0aW9uU3VjY2Vzcyh0aGlzKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGN0eC5sb29rdXBDcmVhdGlvbkFwaS5xdWVyeS5ydmxpbWl0ID0gNTA7IC8vIG1vZGlmeSBwcmV2aW91cyBxdWVyeSB0byBmZXRjaCBtb3JlIHJldmlzaW9uc1xuXHRcdFx0XHRjdHgubG9va3VwQ3JlYXRpb25BcGkucXVlcnkudGl0bGVzID0gY3R4LnBhZ2VOYW1lOyAvLyB1cGRhdGUgcGFnZU5hbWUgaWYgcmVkaXJlY3QgcmVzb2x1dGlvbiB0b29rIHBsYWNlIGluIGVhcmxpZXIgcXVlcnlcblx0XHRcdFx0Y3R4Lmxvb2t1cENyZWF0aW9uQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn6I635Y+W6aG16Z2i5Yib5bu65L+h5oGvJywgJ+WPluW+l+mggemdouW7uueri+izh+ioiicpLFxuXHRcdFx0XHRcdGN0eC5sb29rdXBDcmVhdGlvbkFwaS5xdWVyeSxcblx0XHRcdFx0XHRmbkxvb2t1cE5vblJlZGlyZWN0Q3JlYXRvcixcblx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudCxcblx0XHRcdFx0XHRjdHgub25Mb29rdXBDcmVhdGlvbkZhaWx1cmVcblx0XHRcdFx0KTtcblx0XHRcdFx0Y3R4Lmxvb2t1cENyZWF0aW9uQXBpLnNldFBhcmVudCh0aGlzKTtcblx0XHRcdFx0Y3R4Lmxvb2t1cENyZWF0aW9uQXBpLnBvc3QoKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdGNvbnN0IGZuTG9va3VwTm9uUmVkaXJlY3RDcmVhdG9yID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBjdHgubG9va3VwQ3JlYXRpb25BcGkuZ2V0UmVzcG9uc2UoKS5xdWVyeTtcblx0XHRcdGNvbnN0IHJldnMgPSByZXNwb25zZS5wYWdlc1swXS5yZXZpc2lvbnM7XG5cdFx0XHRmb3IgKGNvbnN0IHJldiBvZiByZXZzKSB7XG5cdFx0XHRcdGlmICghaXNUZXh0UmVkaXJlY3QocmV2LmNvbnRlbnQpKSB7XG5cdFx0XHRcdFx0Y3R4LmNyZWF0b3IgPSByZXYudXNlcjtcblx0XHRcdFx0XHRjdHgudGltZXN0YW1wID0gcmV2LnRpbWVzdGFtcDtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKCFjdHguY3JlYXRvcikge1xuXHRcdFx0XHQvLyBmYWxsYmFjayB0byBnaXZlIGZpcnN0IHJldmlzaW9uIGF1dGhvciBpZiBubyBub24tcmVkaXJlY3QgdmVyc2lvbiBpbiB0aGUgZmlyc3QgNTBcblx0XHRcdFx0Y3R4LmNyZWF0b3IgPSByZXZzWzBdLnVzZXI7XG5cdFx0XHRcdGN0eC50aW1lc3RhbXAgPSByZXZzWzBdLnRpbWVzdGFtcDtcblx0XHRcdFx0aWYgKCFjdHguY3JlYXRvcikge1xuXHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdpbmRvdy53Z1VMUygn5peg5rOV6I635Y+W6aG16Z2i5Yib5bu66ICF55qE5ZCN5a2XJywgJ+eEoeazleWPluW+l+mggemdouW7uueri+iAheeahOWQjeWtlycpKTtcblx0XHRcdFx0XHRjdHgub25Mb29rdXBDcmVhdGlvbkZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWN0eC50aW1lc3RhbXApIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2luZG93LndnVUxTKCfml6Dms5Xojrflj5bpobXpnaLliJvlu7rml7bpl7QnLCAn54Sh5rOV5Y+W5b6X6aCB6Z2i5bu656uL5pmC6ZaTJykpO1xuXHRcdFx0XHRjdHgub25Mb29rdXBDcmVhdGlvbkZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmluZm8od2luZG93LndnVUxTKCflt7Lojrflj5bpobXpnaLliJvlu7rkv6Hmga8nLCAn5bey5Y+W5b6X6aCB6Z2i5bu656uL6LOH6KiKJykpO1xuXHRcdFx0Y3R4Lm9uTG9va3VwQ3JlYXRpb25TdWNjZXNzKHRoaXMpO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQ29tbW9uIGNoZWNrcyBmb3IgYWN0aW9uIG1ldGhvZHMuIFVzZWQgZm9yIG1vdmUsIHVuZGVsZXRlLCBkZWxldGUsXG5cdFx0ICogcHJvdGVjdC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb24gLSBUaGUgYWN0aW9uIGJlaW5nIGNoZWNrZWQuXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IG9uRmFpbHVyZSAtIEZhaWx1cmUgY2FsbGJhY2suXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdFx0ICovXG5cdFx0Y29uc3QgZm5QcmVmbGlnaHRDaGVja3MgPSBmdW5jdGlvbiAoYWN0aW9uLCBvbkZhaWx1cmUpIHtcblx0XHRcdC8vIGlmIGEgbm9uLWFkbWluIHRyaWVzIHRvIGRvIHRoaXMsIGRvbid0IGJvdGhlclxuXHRcdFx0aWYgKCFNb3JlYml0cy51c2VySXNTeXNvcCAmJiBhY3Rpb24gIT09ICdtb3ZlJykge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+aXoOazleWvuemhtemdoui/m+ihjOKAnCcsICfnhKHms5XlsI3poIHpnaLpgLLooYzjgIwnKSArXG5cdFx0XHRcdFx0XHRhY3Rpb24gK1xuXHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfigJ3mk43kvZzvvJrlj6rmnInnrqHnkIblkZjlj6/ku6Xov5vooYzmraTmk43kvZwnLCAn44CN5pON5L2c77ya5Y+q5pyJ566h55CG5ZOh5Y+v5Lul6YCy6KGM5q2k5pON5L2cJylcblx0XHRcdFx0KTtcblx0XHRcdFx0b25GYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWN0eC5lZGl0U3VtbWFyeSkge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihgSW50ZXJuYWwgZXJyb3I6ICR7YWN0aW9ufSByZWFzb24gbm90IHNldCAodXNlIHNldEVkaXRTdW1tYXJ5IGZ1bmN0aW9uKSFgKTtcblx0XHRcdFx0b25GYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJ1ZTsgLy8gYWxsIE9LXG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBDb21tb24gY2hlY2tzIGZvciBmblByb2Nlc3MgZnVuY3Rpb25zIChgZm5Qcm9jZXNzRGVsZXRlYCwgYGZuUHJvY2Vzc01vdmVgLCBldGMuXG5cdFx0ICogVXNlZCBmb3IgbW92ZSwgdW5kZWxldGUsIGRlbGV0ZSwgcHJvdGVjdC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb24gLSBUaGUgYWN0aW9uIGJlaW5nIGNoZWNrZWQuXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IG9uRmFpbHVyZSAtIEZhaWx1cmUgY2FsbGJhY2suXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHJlc3BvbnNlIC0gVGhlIHJlc3BvbnNlIGRvY3VtZW50IGZyb20gdGhlIEFQSSBjYWxsLlxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHRcdCAqL1xuXHRcdGNvbnN0IGZuUHJvY2Vzc0NoZWNrcyA9IGZ1bmN0aW9uIChhY3Rpb24sIG9uRmFpbHVyZSwgcmVzcG9uc2UpIHtcblx0XHRcdGNvbnN0IFt7bWlzc2luZ31dID0gcmVzcG9uc2UucGFnZXM7XG5cdFx0XHQvLyBObyB1bmRlbGV0ZSBhcyBhbiBleGlzdGluZyBwYWdlIGNvdWxkIGhhdmUgZGVsZXRlZCByZXZpc2lvbnNcblx0XHRcdGNvbnN0IGFjdGlvbk1pc3NpbmcgPSBtaXNzaW5nICYmIFsnZGVsZXRlJywgJ21vdmUnXS5pbmNsdWRlcyhhY3Rpb24pO1xuXHRcdFx0Y29uc3QgcHJvdGVjdE1pc3NpbmcgPSBhY3Rpb24gPT09ICdwcm90ZWN0JyAmJiBtaXNzaW5nICYmIChjdHgucHJvdGVjdEVkaXQgfHwgY3R4LnByb3RlY3RNb3ZlKTtcblx0XHRcdGNvbnN0IHNhbHRNaXNzaW5nID0gYWN0aW9uID09PSAncHJvdGVjdCcgJiYgIW1pc3NpbmcgJiYgY3R4LnByb3RlY3RDcmVhdGU7XG5cdFx0XHRpZiAoYWN0aW9uTWlzc2luZyB8fCBwcm90ZWN0TWlzc2luZyB8fCBzYWx0TWlzc2luZykge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0XHRgJHtcblx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5peg5rOV5a+56aG16Z2i6L+b6KGM4oCcJywgJ+eEoeazleWwjemggemdoumAsuihjOOAjCcpICtcblx0XHRcdFx0XHRcdGFjdGlvbiArXG5cdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+KAneaTjeS9nO+8jOWboOS4uumhtemdoicsICfjgI3mk43kvZzvvIzlm6DngrrpoIHpnaInKSArXG5cdFx0XHRcdFx0XHQobWlzc2luZyA/ICflt7LkuI0nIDogd2luZG93LndnVUxTKCflt7Lnu48nLCAn5bey57aTJykpXG5cdFx0XHRcdFx0feWtmOWcqGBcblx0XHRcdFx0KTtcblx0XHRcdFx0b25GYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHQvLyBEZWxldGUsIHVuZGVsZXRlLCBtb3ZlXG5cdFx0XHQvLyBleHRyYWN0IHByb3RlY3Rpb24gaW5mb1xuXHRcdFx0bGV0IGVkaXRwcm90O1xuXHRcdFx0aWYgKGFjdGlvbiA9PT0gJ3VuZGVsZXRlJykge1xuXHRcdFx0XHRlZGl0cHJvdCA9IHJlc3BvbnNlLnBhZ2VzWzBdLnByb3RlY3Rpb24uZmluZExhc3QoKHByKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIHByLnR5cGUgPT09ICdjcmVhdGUnICYmIHByLmxldmVsID09PSAnc3lzb3AnO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSBpZiAoYWN0aW9uID09PSAnZGVsZXRlJyB8fCBhY3Rpb24gPT09ICdtb3ZlJykge1xuXHRcdFx0XHRlZGl0cHJvdCA9IHJlc3BvbnNlLnBhZ2VzWzBdLnByb3RlY3Rpb24uZmluZExhc3QoKHByKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIHByLnR5cGUgPT09ICdlZGl0JyAmJiBwci5sZXZlbCA9PT0gJ3N5c29wJztcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoXG5cdFx0XHRcdGVkaXRwcm90ICYmXG5cdFx0XHRcdCFjdHguc3VwcHJlc3NQcm90ZWN0V2FybmluZyAmJlxuXHRcdFx0XHQhY29uZmlybShcblx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+aCqOWNs+WwhuWvueWFqOS/neaKpOmhtemdouKAnCcsICfmgqjljbPlsIflsI3lhajkv53orbfpoIHpnaLjgIwnKSArXG5cdFx0XHRcdFx0XHRjdHgucGFnZU5hbWUgK1xuXHRcdFx0XHRcdFx0KGVkaXRwcm90LmV4cGlyeSA9PT0gJ2luZmluaXR5J1xuXHRcdFx0XHRcdFx0XHQ/IHdpbmRvdy53Z1VMUygn4oCd77yI5rC45LmF77yJJywgJ+OAje+8iOawuOS5he+8iScpXG5cdFx0XHRcdFx0XHRcdDogYCR7XG5cdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+KAne+8iOWIsOacn++8micsICfjgI3vvIjliLDmnJ/vvJonKSArXG5cdFx0XHRcdFx0XHRcdFx0XHRuZXcgTW9yZWJpdHMuZGF0ZShlZGl0cHJvdC5leHBpcnkpLmNhbGVuZGFyKCd1dGMnKVxuXHRcdFx0XHRcdFx0XHRcdH0gKFVUQynvvIlgKSArXG5cdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+KAnei/m+ihjOKAnCcsICfjgI3pgLLooYzjgIwnKSArXG5cdFx0XHRcdFx0XHRhY3Rpb24gK1xuXHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfigJ3mk43kvZwnLCAn44CN5pON5L2cJykgK1xuXHRcdFx0XHRcdFx0d2luZG93LndnVUxTKFxuXHRcdFx0XHRcdFx0XHQn44CCXFxuXFxu5Y2V5Ye756Gu5a6a5Lul57un57ut5pON5L2c77yM5oiW5Y2V5Ye75Y+W5raI5Lul5Y+W5raI5pON5L2c44CCJyxcblx0XHRcdFx0XHRcdFx0J+OAglxcblxcbum7nuaTiueiuuWumuS7pee5vOe6jOaTjeS9nO+8jOaIlum7nuaTiuWPlua2iOS7peWPlua2iOaTjeS9nOOAgidcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0KVxuXHRcdFx0KSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdpbmRvdy53Z1VMUygn5bey5Y+W5raI5a+55YWo5L+d5oqk6aG16Z2i55qE5pON5L2c44CCJywgJ+W3suWPlua2iOWwjeWFqOS/neitt+mggemdoueahOaTjeS9nOOAgicpKTtcblx0XHRcdFx0b25GYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIXJlc3BvbnNlLnRva2Vucy5jc3JmdG9rZW4pIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2luZG93LndnVUxTKCfml6Dms5Xojrflj5bku6TniYzjgIInLCAn54Sh5rOV5Y+W5b6X5qyK5p2W44CCJykpO1xuXHRcdFx0XHRvbkZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0cnVlOyAvLyBhbGwgT0tcblx0XHR9O1xuXG5cdFx0Y29uc3QgZm5Qcm9jZXNzTW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGxldCBwYWdlVGl0bGU7XG5cdFx0XHRsZXQgdG9rZW47XG5cdFx0XHRpZiAoZm5DYW5Vc2VNd1VzZXJUb2tlbignbW92ZScpKSB7XG5cdFx0XHRcdHRva2VuID0gbXcudXNlci50b2tlbnMuZ2V0KCdjc3JmVG9rZW4nKTtcblx0XHRcdFx0cGFnZVRpdGxlID0gY3R4LnBhZ2VOYW1lO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBjdHgubW92ZUFwaS5nZXRSZXNwb25zZSgpLnF1ZXJ5O1xuXHRcdFx0XHRpZiAoIWZuUHJvY2Vzc0NoZWNrcygnbW92ZScsIGN0eC5vbk1vdmVGYWlsdXJlLCByZXNwb25zZSkpIHtcblx0XHRcdFx0XHRyZXR1cm47IC8vIGFib3J0XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0b2tlbiA9IHJlc3BvbnNlLnRva2Vucy5jc3JmdG9rZW47XG5cdFx0XHRcdGNvbnN0IFtwYWdlXSA9IHJlc3BvbnNlLnBhZ2VzO1xuXHRcdFx0XHRwYWdlVGl0bGUgPSBwYWdlLnRpdGxlO1xuXHRcdFx0XHRjdHgud2F0Y2hlZCA9IHBhZ2Uud2F0Y2hsaXN0ZXhwaXJ5IHx8IHBhZ2Uud2F0Y2hlZDtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHF1ZXJ5ID0ge1xuXHRcdFx0XHRhY3Rpb246ICdtb3ZlJyxcblx0XHRcdFx0ZnJvbTogcGFnZVRpdGxlLFxuXHRcdFx0XHR0bzogY3R4Lm1vdmVEZXN0aW5hdGlvbixcblx0XHRcdFx0dG9rZW4sXG5cdFx0XHRcdHJlYXNvbjogY3R4LmVkaXRTdW1tYXJ5LFxuXHRcdFx0XHR3YXRjaGxpc3Q6IGN0eC53YXRjaGxpc3RPcHRpb24sXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0fTtcblx0XHRcdGlmIChjdHguY2hhbmdlVGFncykge1xuXHRcdFx0XHRxdWVyeS50YWdzID0gY3R4LmNoYW5nZVRhZ3M7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZm5BcHBseVdhdGNobGlzdEV4cGlyeSgpKSB7XG5cdFx0XHRcdHF1ZXJ5LndhdGNobGlzdGV4cGlyeSA9IGN0eC53YXRjaGxpc3RFeHBpcnk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY3R4Lm1vdmVUYWxrUGFnZSkge1xuXHRcdFx0XHRxdWVyeS5tb3ZldGFsayA9ICd0cnVlJztcblx0XHRcdH1cblx0XHRcdGlmIChjdHgubW92ZVN1YnBhZ2VzKSB7XG5cdFx0XHRcdHF1ZXJ5Lm1vdmVzdWJwYWdlcyA9ICd0cnVlJztcblx0XHRcdH1cblx0XHRcdGlmIChjdHgubW92ZVN1cHByZXNzUmVkaXJlY3QpIHtcblx0XHRcdFx0cXVlcnkubm9yZWRpcmVjdCA9ICd0cnVlJztcblx0XHRcdH1cblx0XHRcdGN0eC5tb3ZlUHJvY2Vzc0FwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdFx0d2luZG93LndnVUxTKCfnp7vliqjpobXpnaLigKbigKYnLCAn56e75YuV6aCB6Z2i4oCm4oCmJyksXG5cdFx0XHRcdHF1ZXJ5LFxuXHRcdFx0XHRjdHgub25Nb3ZlU3VjY2Vzcyxcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQsXG5cdFx0XHRcdGN0eC5vbk1vdmVGYWlsdXJlXG5cdFx0XHQpO1xuXHRcdFx0Y3R4Lm1vdmVQcm9jZXNzQXBpLnNldFBhcmVudCh0aGlzKTtcblx0XHRcdGN0eC5tb3ZlUHJvY2Vzc0FwaS5wb3N0KCk7XG5cdFx0fTtcblx0XHRjb25zdCBmblByb2Nlc3NQYXRyb2wgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zdCBxdWVyeSA9IHtcblx0XHRcdFx0YWN0aW9uOiAncGF0cm9sJyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHR9O1xuXHRcdFx0Ly8gRGlkbid0IG5lZWQgdG8gbG9hZCB0aGUgcGFnZVxuXHRcdFx0aWYgKGN0eC5yY2lkKSB7XG5cdFx0XHRcdHF1ZXJ5LnJjaWQgPSBjdHgucmNpZDtcblx0XHRcdFx0cXVlcnkudG9rZW4gPSBtdy51c2VyLnRva2Vucy5nZXQoJ3BhdHJvbFRva2VuJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCByZXNwb25zZSA9IGN0eC5wYXRyb2xBcGkuZ2V0UmVzcG9uc2UoKS5xdWVyeTtcblx0XHRcdFx0Ly8gRG9uJ3QgcGF0cm9sIGlmIG5vdCB1bnBhdHJvbGxlZFxuXHRcdFx0XHRpZiAoIXJlc3BvbnNlLnJlY2VudGNoYW5nZXNbMF0udW5wYXRyb2xsZWQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgW3tsYXN0cmV2aWR9XSA9IHJlc3BvbnNlLnBhZ2VzO1xuXHRcdFx0XHRpZiAoIWxhc3RyZXZpZCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRxdWVyeS5yZXZpZCA9IGxhc3RyZXZpZDtcblx0XHRcdFx0Y29uc3QgdG9rZW4gPSByZXNwb25zZS50b2tlbnMuY3NyZnRva2VuO1xuXHRcdFx0XHRpZiAoIXRva2VuKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHF1ZXJ5LnRva2VuID0gdG9rZW47XG5cdFx0XHR9XG5cdFx0XHRpZiAoY3R4LmNoYW5nZVRhZ3MpIHtcblx0XHRcdFx0cXVlcnkudGFncyA9IGN0eC5jaGFuZ2VUYWdzO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcGF0cm9sU3RhdCA9IG5ldyBNb3JlYml0cy5zdGF0dXMod2luZG93LndnVUxTKCfmoIforrDpobXpnaLkuLrlt7Llt6Hmn6UnLCAn5qiZ6KiY6aCB6Z2i54K65bey5beh5p+lJykpO1xuXHRcdFx0Y3R4LnBhdHJvbFByb2Nlc3NBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdHdpbmRvdy53Z1VMUygn5beh5p+l6aG16Z2i4oCm4oCmJywgJ+W3oeafpemggemdouKApuKApicpLFxuXHRcdFx0XHRxdWVyeSxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0cGF0cm9sU3RhdFxuXHRcdFx0KTtcblx0XHRcdGN0eC5wYXRyb2xQcm9jZXNzQXBpLnNldFBhcmVudCh0aGlzKTtcblx0XHRcdGN0eC5wYXRyb2xQcm9jZXNzQXBpLnBvc3QoKTtcblx0XHR9O1xuXHRcdGNvbnN0IGZuUHJvY2Vzc0RlbGV0ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGxldCBwYWdlVGl0bGU7XG5cdFx0XHRsZXQgdG9rZW47XG5cdFx0XHRpZiAoZm5DYW5Vc2VNd1VzZXJUb2tlbignZGVsZXRlJykpIHtcblx0XHRcdFx0dG9rZW4gPSBtdy51c2VyLnRva2Vucy5nZXQoJ2NzcmZUb2tlbicpO1xuXHRcdFx0XHRwYWdlVGl0bGUgPSBjdHgucGFnZU5hbWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCByZXNwb25zZSA9IGN0eC5kZWxldGVBcGkuZ2V0UmVzcG9uc2UoKS5xdWVyeTtcblx0XHRcdFx0aWYgKCFmblByb2Nlc3NDaGVja3MoJ2RlbGV0ZScsIGN0eC5vbkRlbGV0ZUZhaWx1cmUsIHJlc3BvbnNlKSkge1xuXHRcdFx0XHRcdHJldHVybjsgLy8gYWJvcnRcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRva2VuID0gcmVzcG9uc2UudG9rZW5zLmNzcmZ0b2tlbjtcblx0XHRcdFx0Y29uc3QgW3BhZ2VdID0gcmVzcG9uc2UucGFnZXM7XG5cdFx0XHRcdHBhZ2VUaXRsZSA9IHBhZ2UudGl0bGU7XG5cdFx0XHRcdGN0eC53YXRjaGVkID0gcGFnZS53YXRjaGxpc3RleHBpcnkgfHwgcGFnZS53YXRjaGVkO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcXVlcnkgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ2RlbGV0ZScsXG5cdFx0XHRcdHRpdGxlOiBwYWdlVGl0bGUsXG5cdFx0XHRcdHRva2VuLFxuXHRcdFx0XHRyZWFzb246IGN0eC5lZGl0U3VtbWFyeSxcblx0XHRcdFx0d2F0Y2hsaXN0OiBjdHgud2F0Y2hsaXN0T3B0aW9uLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdH07XG5cdFx0XHRpZiAoY3R4LmNoYW5nZVRhZ3MpIHtcblx0XHRcdFx0cXVlcnkudGFncyA9IGN0eC5jaGFuZ2VUYWdzO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGZuQXBwbHlXYXRjaGxpc3RFeHBpcnkoKSkge1xuXHRcdFx0XHRxdWVyeS53YXRjaGxpc3RleHBpcnkgPSBjdHgud2F0Y2hsaXN0RXhwaXJ5O1xuXHRcdFx0fVxuXHRcdFx0Y3R4LmRlbGV0ZVByb2Nlc3NBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdHdpbmRvdy53Z1VMUygn5Yig6Zmk6aG16Z2i4oCm4oCmJywgJ+WIqumZpOmggemdouKApuKApicpLFxuXHRcdFx0XHRxdWVyeSxcblx0XHRcdFx0Y3R4Lm9uRGVsZXRlU3VjY2Vzcyxcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQsXG5cdFx0XHRcdGZuUHJvY2Vzc0RlbGV0ZUVycm9yXG5cdFx0XHQpO1xuXHRcdFx0Y3R4LmRlbGV0ZVByb2Nlc3NBcGkuc2V0UGFyZW50KHRoaXMpO1xuXHRcdFx0Y3R4LmRlbGV0ZVByb2Nlc3NBcGkucG9zdCgpO1xuXHRcdH07XG5cdFx0Ly8gY2FsbGJhY2sgZnJvbSBkZWxldGVQcm9jZXNzQXBpLnBvc3QoKVxuXHRcdGNvbnN0IGZuUHJvY2Vzc0RlbGV0ZUVycm9yID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc3QgZXJyb3JDb2RlID0gY3R4LmRlbGV0ZVByb2Nlc3NBcGkuZ2V0RXJyb3JDb2RlKCk7XG5cdFx0XHQvLyBjaGVjayBmb3IgXCJEYXRhYmFzZSBxdWVyeSBlcnJvclwiXG5cdFx0XHRpZiAoZXJyb3JDb2RlID09PSAnaW50ZXJuYWxfYXBpX2Vycm9yX0RCUXVlcnlFcnJvcicgJiYgY3R4LnJldHJpZXMrKyA8IGN0eC5tYXhSZXRyaWVzKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmluZm8od2luZG93LndnVUxTKCfmlbDmja7lupPmn6Xor6LplJnor6/vvIzph43or5UnLCAn6LOH5paZ5bqr5p+l6Kmi6Yyv6Kqk77yM6YeN6KmmJykpO1xuXHRcdFx0XHQtLU1vcmViaXRzLndpa2kubnVtYmVyT2ZBY3Rpb25zTGVmdDsgLy8gYWxsb3cgZm9yIG5vcm1hbCBjb21wbGV0aW9uIGlmIHJldHJ5IHN1Y2NlZWRzXG5cdFx0XHRcdGN0eC5kZWxldGVQcm9jZXNzQXBpLnBvc3QoKTsgLy8gZ2l2ZSBpdCBhbm90aGVyIGdvIVxuXHRcdFx0fSBlbHNlIGlmIChlcnJvckNvZGUgPT09ICdtaXNzaW5ndGl0bGUnKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdpbmRvdy53Z1VMUygn5LiN6IO95Yig6Zmk6aG16Z2i77yM5Zug5YW25bey5LiN5a2Y5ZyoJywgJ+S4jeiDveWIqumZpOmggemdou+8jOWboOWFtuW3suS4jeWtmOWcqCcpKTtcblx0XHRcdFx0aWYgKGN0eC5vbkRlbGV0ZUZhaWx1cmUpIHtcblx0XHRcdFx0XHRjdHgub25EZWxldGVGYWlsdXJlLmNhbGwodGhpcywgY3R4LmRlbGV0ZVByb2Nlc3NBcGkpOyAvLyBpbnZva2UgY2FsbGJhY2tcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBoYXJkIGVycm9yLCBnaXZlIHVwXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+aXoOazleWIoOmZpOmhtemdou+8micsICfnhKHms5XliKrpmaTpoIHpnaLvvJonKSArIGN0eC5kZWxldGVQcm9jZXNzQXBpLmdldEVycm9yVGV4dCgpXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGlmIChjdHgub25EZWxldGVGYWlsdXJlKSB7XG5cdFx0XHRcdFx0Y3R4Lm9uRGVsZXRlRmFpbHVyZS5jYWxsKHRoaXMsIGN0eC5kZWxldGVQcm9jZXNzQXBpKTsgLy8gaW52b2tlIGNhbGxiYWNrXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0Y29uc3QgZm5Qcm9jZXNzVW5kZWxldGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRsZXQgcGFnZVRpdGxlO1xuXHRcdFx0bGV0IHRva2VuO1xuXHRcdFx0aWYgKGZuQ2FuVXNlTXdVc2VyVG9rZW4oJ3VuZGVsZXRlJykpIHtcblx0XHRcdFx0dG9rZW4gPSBtdy51c2VyLnRva2Vucy5nZXQoJ2NzcmZUb2tlbicpO1xuXHRcdFx0XHRwYWdlVGl0bGUgPSBjdHgucGFnZU5hbWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCByZXNwb25zZSA9IGN0eC51bmRlbGV0ZUFwaS5nZXRSZXNwb25zZSgpLnF1ZXJ5O1xuXHRcdFx0XHRpZiAoIWZuUHJvY2Vzc0NoZWNrcygndW5kZWxldGUnLCBjdHgub25VbmRlbGV0ZUZhaWx1cmUsIHJlc3BvbnNlKSkge1xuXHRcdFx0XHRcdHJldHVybjsgLy8gYWJvcnRcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRva2VuID0gcmVzcG9uc2UudG9rZW5zLmNzcmZ0b2tlbjtcblx0XHRcdFx0Y29uc3QgW3BhZ2VdID0gcmVzcG9uc2UucGFnZXM7XG5cdFx0XHRcdHBhZ2VUaXRsZSA9IHBhZ2UudGl0bGU7XG5cdFx0XHRcdGN0eC53YXRjaGVkID0gcGFnZS53YXRjaGxpc3RleHBpcnkgfHwgcGFnZS53YXRjaGVkO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcXVlcnkgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3VuZGVsZXRlJyxcblx0XHRcdFx0dGl0bGU6IHBhZ2VUaXRsZSxcblx0XHRcdFx0dG9rZW4sXG5cdFx0XHRcdHJlYXNvbjogY3R4LmVkaXRTdW1tYXJ5LFxuXHRcdFx0XHR3YXRjaGxpc3Q6IGN0eC53YXRjaGxpc3RPcHRpb24sXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0fTtcblx0XHRcdGlmIChjdHguY2hhbmdlVGFncykge1xuXHRcdFx0XHRxdWVyeS50YWdzID0gY3R4LmNoYW5nZVRhZ3M7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZm5BcHBseVdhdGNobGlzdEV4cGlyeSgpKSB7XG5cdFx0XHRcdHF1ZXJ5LndhdGNobGlzdGV4cGlyeSA9IGN0eC53YXRjaGxpc3RFeHBpcnk7XG5cdFx0XHR9XG5cdFx0XHRjdHgudW5kZWxldGVQcm9jZXNzQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0XHR3aW5kb3cud2dVTFMoJ+i/mOWOn+mhtemdouKApuKApicsICfpgoTljp/poIHpnaLigKbigKYnKSxcblx0XHRcdFx0cXVlcnksXG5cdFx0XHRcdGN0eC5vblVuZGVsZXRlU3VjY2Vzcyxcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQsXG5cdFx0XHRcdGZuUHJvY2Vzc1VuZGVsZXRlRXJyb3Jcblx0XHRcdCk7XG5cdFx0XHRjdHgudW5kZWxldGVQcm9jZXNzQXBpLnNldFBhcmVudCh0aGlzKTtcblx0XHRcdGN0eC51bmRlbGV0ZVByb2Nlc3NBcGkucG9zdCgpO1xuXHRcdH07XG5cdFx0Ly8gY2FsbGJhY2sgZnJvbSB1bmRlbGV0ZVByb2Nlc3NBcGkucG9zdCgpXG5cdFx0Y29uc3QgZm5Qcm9jZXNzVW5kZWxldGVFcnJvciA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IGVycm9yQ29kZSA9IGN0eC51bmRlbGV0ZVByb2Nlc3NBcGkuZ2V0RXJyb3JDb2RlKCk7XG5cdFx0XHQvLyBjaGVjayBmb3IgXCJEYXRhYmFzZSBxdWVyeSBlcnJvclwiXG5cdFx0XHRpZiAoZXJyb3JDb2RlID09PSAnaW50ZXJuYWxfYXBpX2Vycm9yX0RCUXVlcnlFcnJvcicpIHtcblx0XHRcdFx0aWYgKGN0eC5yZXRyaWVzKysgPCBjdHgubWF4UmV0cmllcykge1xuXHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmluZm8od2luZG93LndnVUxTKCfmlbDmja7lupPmn6Xor6LplJnor6/vvIzph43or5UnLCAn6LOH5paZ5bqr5p+l6Kmi6Yyv6Kqk77yM6YeN6KmmJykpO1xuXHRcdFx0XHRcdC0tTW9yZWJpdHMud2lraS5udW1iZXJPZkFjdGlvbnNMZWZ0OyAvLyBhbGxvdyBmb3Igbm9ybWFsIGNvbXBsZXRpb24gaWYgcmV0cnkgc3VjY2VlZHNcblx0XHRcdFx0XHRjdHgudW5kZWxldGVQcm9jZXNzQXBpLnBvc3QoKTsgLy8gZ2l2ZSBpdCBhbm90aGVyIGdvIVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdFx0d2luZG93LndnVUxTKFxuXHRcdFx0XHRcdFx0XHQn5oyB57ut55qE5pWw5o2u5bqT5p+l6K+i6ZSZ6K+v77yM6YeN5paw5Yqg6L296aG16Z2i5bm26YeN6K+VJyxcblx0XHRcdFx0XHRcdFx0J+aMgee6jOeahOizh+aWmeW6q+afpeipoumMr+iqpO+8jOmHjeaWsOi8ieWFpemggemdouS4pumHjeippidcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGlmIChjdHgub25VbmRlbGV0ZUZhaWx1cmUpIHtcblx0XHRcdFx0XHRcdGN0eC5vblVuZGVsZXRlRmFpbHVyZS5jYWxsKHRoaXMsIGN0eC51bmRlbGV0ZVByb2Nlc3NBcGkpOyAvLyBpbnZva2UgY2FsbGJhY2tcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoZXJyb3JDb2RlID09PSAnY2FudHVuZGVsZXRlJykge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0XHR3aW5kb3cud2dVTFMoXG5cdFx0XHRcdFx0XHQn5peg5rOV6L+Y5Y6f5Yig6Zmk6aG16Z2i77yM5Zug5rKh5pyJ54mI5pys5L6b6L+Y5Y6f5oiW5bey6KKr6L+Y5Y6fJyxcblx0XHRcdFx0XHRcdCfnhKHms5XpgoTljp/liKrpmaTpoIHpnaLvvIzlm6DmspLmnInniYjmnKzkvpvpgoTljp/miJblt7LooqvpgoTljp8nXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRpZiAoY3R4Lm9uVW5kZWxldGVGYWlsdXJlKSB7XG5cdFx0XHRcdFx0Y3R4Lm9uVW5kZWxldGVGYWlsdXJlLmNhbGwodGhpcywgY3R4LnVuZGVsZXRlUHJvY2Vzc0FwaSk7IC8vIGludm9rZSBjYWxsYmFja1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIGhhcmQgZXJyb3IsIGdpdmUgdXBcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5peg5rOV6L+Y5Y6f6aG16Z2i77yaJywgJ+eEoeazlemChOWOn+mggemdou+8micpICsgY3R4LnVuZGVsZXRlUHJvY2Vzc0FwaS5nZXRFcnJvclRleHQoKVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRpZiAoY3R4Lm9uVW5kZWxldGVGYWlsdXJlKSB7XG5cdFx0XHRcdFx0Y3R4Lm9uVW5kZWxldGVGYWlsdXJlLmNhbGwodGhpcywgY3R4LnVuZGVsZXRlUHJvY2Vzc0FwaSk7IC8vIGludm9rZSBjYWxsYmFja1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdGNvbnN0IGZuUHJvY2Vzc1Byb3RlY3QgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGN0eC5wcm90ZWN0QXBpLmdldFJlc3BvbnNlKCkucXVlcnk7XG5cdFx0XHRpZiAoIWZuUHJvY2Vzc0NoZWNrcygncHJvdGVjdCcsIGN0eC5vblByb3RlY3RGYWlsdXJlLCByZXNwb25zZSkpIHtcblx0XHRcdFx0cmV0dXJuOyAvLyBhYm9ydFxuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCB0b2tlbiA9IHJlc3BvbnNlLnRva2Vucy5jc3JmdG9rZW47XG5cdFx0XHRjb25zdCBbcGFnZV0gPSByZXNwb25zZS5wYWdlcztcblx0XHRcdGNvbnN0IHBhZ2VUaXRsZSA9IHBhZ2UudGl0bGU7XG5cdFx0XHRjdHgud2F0Y2hlZCA9IHBhZ2Uud2F0Y2hsaXN0ZXhwaXJ5IHx8IHBhZ2Uud2F0Y2hlZDtcblx0XHRcdC8vIEZldGNoIGV4aXN0aW5nIHByb3RlY3Rpb24gbGV2ZWxzXG5cdFx0XHRjb25zdCBwcnMgPSByZXNwb25zZS5wYWdlc1swXS5wcm90ZWN0aW9uO1xuXHRcdFx0bGV0IGVkaXRwcm90O1xuXHRcdFx0bGV0IG1vdmVwcm90O1xuXHRcdFx0bGV0IGNyZWF0ZXByb3Q7XG5cdFx0XHRmb3IgKGNvbnN0IHByIG9mIHBycykge1xuXHRcdFx0XHQvLyBGaWx0ZXIgb3V0IHByb3RlY3Rpb24gZnJvbSBjYXNjYWRpbmdcblx0XHRcdFx0aWYgKHByLnR5cGUgPT09ICdlZGl0JyAmJiAhcHIuc291cmNlKSB7XG5cdFx0XHRcdFx0ZWRpdHByb3QgPSBwcjtcblx0XHRcdFx0fSBlbHNlIGlmIChwci50eXBlID09PSAnbW92ZScpIHtcblx0XHRcdFx0XHRtb3ZlcHJvdCA9IHByO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHByLnR5cGUgPT09ICdjcmVhdGUnKSB7XG5cdFx0XHRcdFx0Y3JlYXRlcHJvdCA9IHByO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyBGYWxsIGJhY2sgdG8gY3VycmVudCBsZXZlbHMgaWYgbm90IGV4cGxpY2l0bHkgc2V0XG5cdFx0XHRpZiAoIWN0eC5wcm90ZWN0RWRpdCAmJiBlZGl0cHJvdCkge1xuXHRcdFx0XHRjdHgucHJvdGVjdEVkaXQgPSB7XG5cdFx0XHRcdFx0bGV2ZWw6IGVkaXRwcm90LmxldmVsLFxuXHRcdFx0XHRcdGV4cGlyeTogZWRpdHByb3QuZXhwaXJ5LFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFjdHgucHJvdGVjdE1vdmUgJiYgbW92ZXByb3QpIHtcblx0XHRcdFx0Y3R4LnByb3RlY3RNb3ZlID0ge1xuXHRcdFx0XHRcdGxldmVsOiBtb3ZlcHJvdC5sZXZlbCxcblx0XHRcdFx0XHRleHBpcnk6IG1vdmVwcm90LmV4cGlyeSxcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGlmICghY3R4LnByb3RlY3RDcmVhdGUgJiYgY3JlYXRlcHJvdCkge1xuXHRcdFx0XHRjdHgucHJvdGVjdENyZWF0ZSA9IHtcblx0XHRcdFx0XHRsZXZlbDogY3JlYXRlcHJvdC5sZXZlbCxcblx0XHRcdFx0XHRleHBpcnk6IGNyZWF0ZXByb3QuZXhwaXJ5LFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0Ly8gRGVmYXVsdCB0byBwcmUtZXhpc3RpbmcgY2FzY2FkaW5nIHByb3RlY3Rpb24gaWYgdW5jaGFuZ2VkIChzaW1pbGFyIHRvIGFib3ZlKVxuXHRcdFx0aWYgKGN0eC5wcm90ZWN0Q2FzY2FkZSA9PT0gbnVsbCkge1xuXHRcdFx0XHRjdHgucHJvdGVjdENhc2NhZGUgPSAhIXBycy5maWx0ZXIoKHByKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIHByLmNhc2NhZGU7XG5cdFx0XHRcdH0pLmxlbmd0aDtcblx0XHRcdH1cblx0XHRcdC8vIFdhcm4gaWYgY2FzY2FkaW5nIHByb3RlY3Rpb24gYmVpbmcgYXBwbGllZCB3aXRoIGFuIGludmFsaWQgcHJvdGVjdGlvbiBsZXZlbCxcblx0XHRcdC8vIHdoaWNoIGZvciBlZGl0IHByb3RlY3Rpb24gd2lsbCBjYXVzZSBjYXNjYWRpbmcgdG8gYmUgc2lsZW50bHkgc3RyaXBwZWRcblx0XHRcdGlmIChjdHgucHJvdGVjdENhc2NhZGUpIHtcblx0XHRcdFx0Ly8gT24gbW92ZSBwcm90ZWN0aW9uLCB0aGlzIGlzIHRlY2huaWNhbGx5IHN0cmljdGVyIHRoYW4gdGhlIE1XIEFQSSxcblx0XHRcdFx0Ly8gYnV0IHNlZW1zIHJlYXNvbmFibGUgdG8gYXZvaWQgZHVtYiB2YWx1ZXMgYW5kIG1pc2xlYWRpbmcgbG9nIGVudHJpZXMgKFQyNjU2MjYpXG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHQoIWN0eC5wcm90ZWN0RWRpdCB8fFxuXHRcdFx0XHRcdFx0Y3R4LnByb3RlY3RFZGl0LmxldmVsICE9PSAnc3lzb3AnIHx8XG5cdFx0XHRcdFx0XHQhY3R4LnByb3RlY3RNb3ZlIHx8XG5cdFx0XHRcdFx0XHRjdHgucHJvdGVjdE1vdmUubGV2ZWwgIT09ICdzeXNvcCcpICYmXG5cdFx0XHRcdFx0IWNvbmZpcm0oXG5cdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+aCqOW3suWvueKAnCcsICfmgqjlt7LlsI3jgIwnKSArXG5cdFx0XHRcdFx0XHRcdGN0eC5wYWdlTmFtZSArXG5cdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn4oCd5ZCv55So5LqG6L+e6ZSB5L+d5oqkJywgJ+OAjeWVn+eUqOS6humAo+mOluS/neittycpICtcblx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKFxuXHRcdFx0XHRcdFx0XHRcdCfvvIzkvYbmsqHmnInorr7nva7ku4XnrqHnkIblkZjnmoTkv53miqTnuqfliKvjgIJcXG5cXG4nLFxuXHRcdFx0XHRcdFx0XHRcdCfvvIzkvYbmspLmnInoqK3lrprlg4XnrqHnkIblk6HnmoTkv53orbfntJrliKXjgIJcXG5cXG4nXG5cdFx0XHRcdFx0XHRcdCkgK1xuXHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoXG5cdFx0XHRcdFx0XHRcdFx0J+WNleWHu+ehruiupOS7peiHquWKqOiwg+aVtOW5tue7p+e7rei/numUgeWFqOS/neaKpO+8jOWNleWHu+WPlua2iOS7pei3s+i/h+atpOaTjeS9nCcsXG5cdFx0XHRcdFx0XHRcdFx0J+m7nuaTiueiuuiqjeS7peiHquWLleiqv+aVtOS4pue5vOe6jOmAo+mOluWFqOS/neitt++8jOm7nuaTiuWPlua2iOS7pei3s+mBjuatpOaTjeS9nCdcblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdClcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2luZG93LndnVUxTKCfov57plIHkv53miqTlt7Llj5bmtojjgIInLCAn6YCj6Y6W5L+d6K235bey5Y+W5raI44CCJykpO1xuXHRcdFx0XHRcdGN0eC5vblByb3RlY3RGYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRjdHgucHJvdGVjdEVkaXQubGV2ZWwgPSAnc3lzb3AnO1xuXHRcdFx0XHRjdHgucHJvdGVjdE1vdmUubGV2ZWwgPSAnc3lzb3AnO1xuXHRcdFx0fVxuXHRcdFx0Ly8gQnVpbGQgcHJvdGVjdGlvbiBsZXZlbHMgYW5kIGV4cGlyeXMgKGV4cGlyaWVzPykgZm9yIHF1ZXJ5XG5cdFx0XHRjb25zdCBwcm90ZWN0aW9ucyA9IFtdO1xuXHRcdFx0Y29uc3QgZXhwaXJ5cyA9IFtdO1xuXHRcdFx0aWYgKGN0eC5wcm90ZWN0RWRpdCkge1xuXHRcdFx0XHRwcm90ZWN0aW9uc1twcm90ZWN0aW9ucy5sZW5ndGhdID0gYGVkaXQ9JHtjdHgucHJvdGVjdEVkaXQubGV2ZWx9YDtcblx0XHRcdFx0ZXhwaXJ5c1tleHBpcnlzLmxlbmd0aF0gPSBjdHgucHJvdGVjdEVkaXQuZXhwaXJ5O1xuXHRcdFx0fVxuXHRcdFx0aWYgKGN0eC5wcm90ZWN0TW92ZSkge1xuXHRcdFx0XHRwcm90ZWN0aW9uc1twcm90ZWN0aW9ucy5sZW5ndGhdID0gYG1vdmU9JHtjdHgucHJvdGVjdE1vdmUubGV2ZWx9YDtcblx0XHRcdFx0ZXhwaXJ5c1tleHBpcnlzLmxlbmd0aF0gPSBjdHgucHJvdGVjdE1vdmUuZXhwaXJ5O1xuXHRcdFx0fVxuXHRcdFx0aWYgKGN0eC5wcm90ZWN0Q3JlYXRlKSB7XG5cdFx0XHRcdHByb3RlY3Rpb25zW3Byb3RlY3Rpb25zLmxlbmd0aF0gPSBgY3JlYXRlPSR7Y3R4LnByb3RlY3RDcmVhdGUubGV2ZWx9YDtcblx0XHRcdFx0ZXhwaXJ5c1tleHBpcnlzLmxlbmd0aF0gPSBjdHgucHJvdGVjdENyZWF0ZS5leHBpcnk7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBxdWVyeSA9IHtcblx0XHRcdFx0YWN0aW9uOiAncHJvdGVjdCcsXG5cdFx0XHRcdHRpdGxlOiBwYWdlVGl0bGUsXG5cdFx0XHRcdHRva2VuLFxuXHRcdFx0XHRwcm90ZWN0aW9uczogcHJvdGVjdGlvbnMuam9pbignfCcpLFxuXHRcdFx0XHRleHBpcnk6IGV4cGlyeXMuam9pbignfCcpLFxuXHRcdFx0XHRyZWFzb246IGN0eC5lZGl0U3VtbWFyeSxcblx0XHRcdFx0d2F0Y2hsaXN0OiBjdHgud2F0Y2hsaXN0T3B0aW9uLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdH07XG5cdFx0XHQvLyBPbmx5IHNob3dzIHVwIGluIGxvZ3MsIG5vdCBwYWdlIGhpc3Rvcnlcblx0XHRcdGlmIChjdHguY2hhbmdlVGFncykge1xuXHRcdFx0XHRxdWVyeS50YWdzID0gY3R4LmNoYW5nZVRhZ3M7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZm5BcHBseVdhdGNobGlzdEV4cGlyeSgpKSB7XG5cdFx0XHRcdHF1ZXJ5LndhdGNobGlzdGV4cGlyeSA9IGN0eC53YXRjaGxpc3RFeHBpcnk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY3R4LnByb3RlY3RDYXNjYWRlKSB7XG5cdFx0XHRcdHF1ZXJ5LmNhc2NhZGUgPSAndHJ1ZSc7XG5cdFx0XHR9XG5cdFx0XHRjdHgucHJvdGVjdFByb2Nlc3NBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdHdpbmRvdy53Z1VMUygn5L+d5oqk6aG16Z2i4oCm4oCmJywgJ+S/neitt+mggemdouKApuKApicpLFxuXHRcdFx0XHRxdWVyeSxcblx0XHRcdFx0Y3R4Lm9uUHJvdGVjdFN1Y2Nlc3MsXG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LFxuXHRcdFx0XHRjdHgub25Qcm90ZWN0RmFpbHVyZVxuXHRcdFx0KTtcblx0XHRcdGN0eC5wcm90ZWN0UHJvY2Vzc0FwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0XHRjdHgucHJvdGVjdFByb2Nlc3NBcGkucG9zdCgpO1xuXHRcdH07XG5cdFx0Y29uc3Qgc2xlZXAgPSAobWlsbGlzZWNvbmRzKSA9PiB7XG5cdFx0XHRjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQoKTtcblx0XHRcdHNldFRpbWVvdXQoZGVmZXJyZWQucmVzb2x2ZSwgbWlsbGlzZWNvbmRzKTtcblx0XHRcdHJldHVybiBkZWZlcnJlZDtcblx0XHR9O1xuXHR9OyAvLyBlbmQgTW9yZWJpdHMud2lraS5wYWdlXG5cdC8qICoqKioqKioqKioqKioqKiogTW9yZWJpdHMud2lraS5wcmV2aWV3ICoqKioqKioqKioqKioqKiogKi9cblx0LyoqXG5cdCAqIFVzZSB0aGUgQVBJIHRvIHBhcnNlIGEgZnJhZ21lbnQgb2Ygd2lraXRleHQgYW5kIHJlbmRlciBpdCBhcyBIVE1MLlxuXHQgKlxuXHQgKiBUaGUgc3VnZ2VzdGVkIGltcGxlbWVudGF0aW9uIHBhdHRlcm4gKGluIHtAbGluayBNb3JlYml0cy5zaW1wbGVXaW5kb3d9IGFuZFxuXHQgKiB7QGxpbmsgTW9yZWJpdHMucXVpY2tGb3JtfSBzaXR1YXRpb25zKSBpcyB0byBjb25zdHJ1Y3QgYVxuXHQgKiBgTW9yZWJpdHMud2lraS5wcmV2aWV3YCBvYmplY3QgYWZ0ZXIgcmVuZGVyaW5nIGEgYE1vcmViaXRzLnF1aWNrRm9ybWAsIGFuZFxuXHQgKiBiaW5kIHRoZSBvYmplY3QgdG8gYW4gYXJiaXRyYXJ5IHByb3BlcnR5IG9mIHRoZSBmb3JtIChlLmcuIHxwcmV2aWV3ZXJ8KS5cblx0ICogRm9yIGFuIGV4YW1wbGUsIHNlZSB0d2lua2xld2Fybi5qcy5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLndpa2lcblx0ICogQGNsYXNzXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHByZXZpZXdib3ggLSBUaGUgZWxlbWVudCB0aGF0IHdpbGwgY29udGFpbiB0aGUgcmVuZGVyZWQgSFRNTCxcblx0ICogdXN1YWxseSBhIDxkaXY+IGVsZW1lbnQuXG5cdCAqL1xuXHRNb3JlYml0cy53aWtpLnByZXZpZXcgPSBmdW5jdGlvbiAocHJldmlld2JveCkge1xuXHRcdHRoaXMucHJldmlld2JveCA9IHByZXZpZXdib3g7XG5cdFx0JChwcmV2aWV3Ym94KS5hZGRDbGFzcygnbW9yZWJpdHMtcHJldmlld2JveCcpLmhpZGUoKTtcblx0XHQvKipcblx0XHQgKiBEaXNwbGF5cyB0aGUgcHJldmlldyBib3gsIGFuZCBiZWdpbnMgYW4gYXN5bmNocm9ub3VzIGF0dGVtcHRcblx0XHQgKiB0byByZW5kZXIgdGhlIHNwZWNpZmllZCB3aWtpdGV4dC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB3aWtpdGV4dCAtIFdpa2l0ZXh0IHRvIHJlbmRlcjsgbW9zdCB0aGluZ3Mgc2hvdWxkIHdvcmssIGluY2x1ZGluZyBgc3Vic3Q6YCBhbmQgYH5+fn5gLlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBbcGFnZVRpdGxlXSAtIE9wdGlvbmFsIHBhcmFtZXRlciBmb3IgdGhlIHBhZ2UgdGhpcyBzaG91bGQgYmUgcmVuZGVyZWQgYXMgYmVpbmcgb24sIGlmIG9taXR0ZWQgaXQgaXMgdGFrZW4gYXMgdGhlIGN1cnJlbnQgcGFnZS5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gW3NlY3Rpb25UaXRsZV0gLSBJZiBwcm92aWRlZCwgcmVuZGVyIHRoZSB0ZXh0IGFzIGEgbmV3IHNlY3Rpb24gdXNpbmcgdGhpcyBhcyB0aGUgdGl0bGUuXG5cdFx0ICogQHJldHVybnMge2pRdWVyeS5wcm9taXNlfVxuXHRcdCAqL1xuXHRcdHRoaXMuYmVnaW5SZW5kZXIgPSAod2lraXRleHQsIHBhZ2VUaXRsZSwgc2VjdGlvblRpdGxlKSA9PiB7XG5cdFx0XHQkKHByZXZpZXdib3gpLnNob3coKTtcblx0XHRcdGNvbnN0IHN0YXR1c3NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0XHRwcmV2aWV3Ym94LmFwcGVuZENoaWxkKHN0YXR1c3NwYW4pO1xuXHRcdFx0TW9yZWJpdHMuc3RhdHVzLmluaXQoc3RhdHVzc3Bhbik7XG5cdFx0XHQvLyDoi6XpobXpnaLkuI3mmK93aWtpdGV4dO+8iOS+i+WmgkpT44CBQ1NT562J77yJ77yM6YKj5LmI5om+5LiA5Liqd2lraXRleHTpobXpnaLmnaXpooTop4jjgIJcblx0XHRcdGxldCBwYWdlTmFtZSA9IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKTtcblx0XHRcdGlmIChtdy5jb25maWcuZ2V0KCd3Z1BhZ2VDb250ZW50TW9kZWwnKSAhPT0gJ3dpa2l0ZXh0Jykge1xuXHRcdFx0XHRwYWdlTmFtZSA9IGBEcmFmdDoke3BhZ2VOYW1lfWA7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBxdWVyeSA9IHtcblx0XHRcdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdFx0XHRwcm9wOiBbJ3RleHQnLCAnbW9kdWxlcyddLFxuXHRcdFx0XHRwc3Q6IHRydWUsXG5cdFx0XHRcdC8vIFBTVCA9IHByZS1zYXZlIHRyYW5zZm9ybTsgdGhpcyBtYWtlcyBzdWJzdGl0dXRpb24gd29yayBwcm9wZXJseVxuXHRcdFx0XHRwcmV2aWV3OiB0cnVlLFxuXHRcdFx0XHR0ZXh0OiB3aWtpdGV4dCxcblx0XHRcdFx0dGl0bGU6IHBhZ2VUaXRsZSB8fCBwYWdlTmFtZSxcblx0XHRcdFx0ZGlzYWJsZWxpbWl0cmVwb3J0OiB0cnVlLFxuXHRcdFx0XHRkaXNhYmxlZWRpdHNlY3Rpb246IHRydWUsXG5cdFx0XHRcdHVzZWxhbmc6IG13LmNvbmZpZy5nZXQoJ3dnVXNlckxhbmd1YWdlJyksXG5cdFx0XHRcdC8vIFVzZSB3Z1VzZXJMYW5ndWFnZSBmb3IgcHJldmlld1xuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdH07XG5cdFx0XHRpZiAoc2VjdGlvblRpdGxlKSB7XG5cdFx0XHRcdHF1ZXJ5LnNlY3Rpb24gPSAnbmV3Jztcblx0XHRcdFx0cXVlcnkuc2VjdGlvbnRpdGxlID0gc2VjdGlvblRpdGxlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcmVuZGVyQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0XHR3aW5kb3cud2dVTFMoJ+WKoOi9veS4reKApuKApicsICfovInlhaXkuK3igKbigKYnKSxcblx0XHRcdFx0cXVlcnksXG5cdFx0XHRcdGZuUmVuZGVyU3VjY2Vzcyxcblx0XHRcdFx0bmV3IE1vcmViaXRzLnN0YXR1cyh3aW5kb3cud2dVTFMoJ+mihOiniCcsICfpoJDopr0nKSlcblx0XHRcdCk7XG5cdFx0XHRyZW5kZXJBcGkucG9zdCgpO1xuXHRcdH07XG5cdFx0Y29uc3QgZm5SZW5kZXJTdWNjZXNzID0gKGFwaW9iaikgPT4ge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhcGlvYmouZ2V0UmVzcG9uc2UoKTtcblx0XHRcdGNvbnN0IGh0bWwgPSByZXNwb25zZS5wYXJzZS50ZXh0O1xuXHRcdFx0aWYgKCFodG1sKSB7XG5cdFx0XHRcdGFwaW9iai5zdGF0ZWxlbS5lcnJvcih3aW5kb3cud2dVTFMoJ+WKoOi9vemihOiniOWksei0pe+8jOaIluaooeadv+S4uuepuicsICfovInlhaXpoJDopr3lpLHmlZfvvIzmiJbmqKHmnb/ngrrnqbonKSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHByZXZpZXdib3guaW5uZXJIVE1MID0gaHRtbDtcblx0XHRcdG13LmxvYWRlci5sb2FkKHJlc3BvbnNlLnBhcnNlLm1vZHVsZXN0eWxlcyk7XG5cdFx0XHRtdy5sb2FkZXIubG9hZChyZXNwb25zZS5wYXJzZS5tb2R1bGVzKTtcblx0XHRcdC8vIHRoaXMgbWFrZXMgbGlua3Mgb3BlbiBpbiBuZXcgdGFiXG5cdFx0XHQkKHByZXZpZXdib3gpLmZpbmQoJ2EnKS5hdHRyKCd0YXJnZXQnLCAnX2JsYW5rJykuYXR0cigncmVsJywgJ25vb3BlbmVyIG5vcmVmZXJyZXInKTtcblx0XHR9O1xuXHRcdC8qKiBIaWRlcyB0aGUgcHJldmlldyBib3ggYW5kIGNsZWFycyBpdC4gKi9cblx0XHR0aGlzLmNsb3NlUHJldmlldyA9ICgpID0+IHtcblx0XHRcdCQocHJldmlld2JveCkuZW1wdHkoKS5oaWRlKCk7XG5cdFx0fTtcblx0fTtcblx0LyogKioqKioqKioqKioqKioqKiBNb3JlYml0cy53aWtpdGV4dCAqKioqKioqKioqKioqKioqICovXG5cdC8qKlxuXHQgKiBXaWtpdGV4dCBtYW5pcHVsYXRpb24uXG5cdCAqXG5cdCAqIEBuYW1lc3BhY2UgTW9yZWJpdHMud2lraXRleHRcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzXG5cdCAqL1xuXHRNb3JlYml0cy53aWtpdGV4dCA9IHt9O1xuXHQvKipcblx0ICogR2V0IHRoZSB2YWx1ZSBvZiBldmVyeSBwYXJhbWV0ZXIgZm91bmQgaW4gdGhlIHdpa2l0ZXh0IG9mIGEgZ2l2ZW4gdGVtcGxhdGUuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpdGV4dFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIFdpa2l0ZXh0IGNvbnRhaW5pbmcgYSB0ZW1wbGF0ZS5cblx0ICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydD0wXSAtIEluZGV4IG5vdGluZyB3aGVyZSBpbiB0aGUgdGV4dCB0aGUgdGVtcGxhdGUgYmVnaW5zLlxuXHQgKiBAcmV0dXJucyB7T2JqZWN0fSBge25hbWU6IHRlbXBsYXRlTmFtZSwgcGFyYW1ldGVyczoge2tleTogdmFsdWV9fWAuXG5cdCAqL1xuXHRNb3JlYml0cy53aWtpdGV4dC5wYXJzZVRlbXBsYXRlID0gKHRleHQsIHN0YXJ0KSA9PiB7XG5cdFx0c3RhcnQgfHw9IDA7XG5cdFx0Y29uc3QgbGV2ZWwgPSBbXTsgLy8gVHJhY2sgb2YgaG93IGRlZXAgd2UgYXJlICh7eywge3t7LCBvciBbWylcblx0XHRsZXQgY291bnQgPSAtMTsgLy8gTnVtYmVyIG9mIHBhcmFtZXRlcnMgZm91bmRcblx0XHRsZXQgdW5uYW1lZCA9IDA7IC8vIEtlZXAgdHJhY2sgb2Ygd2hhdCBudW1iZXIgYW4gdW5uYW1lZCBwYXJhbWV0ZXIgc2hvdWxkIHJlY2VpdmVcblx0XHRsZXQgZXF1YWxzID0gLTE7IC8vIEFmdGVyIGZpbmRpbmcgXCI9XCIgYmVmb3JlIGEgcGFyYW1ldGVyLCB0aGUgaW5kZXg7IG90aGVyd2lzZSwgLTFcblx0XHRsZXQgY3VycmVudCA9ICcnO1xuXHRcdGNvbnN0IHJlc3VsdCA9IHtcblx0XHRcdG5hbWU6ICcnLFxuXHRcdFx0cGFyYW1ldGVyczoge30sXG5cdFx0fTtcblx0XHRsZXQga2V5O1xuXHRcdGxldCB2YWx1ZTtcblx0XHQvKipcblx0XHQgKiBGdW5jdGlvbiB0byBoYW5kbGUgZmluZGluZyBwYXJhbWV0ZXIgdmFsdWVzLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBbZmluYWw9ZmFsc2VdIC0gV2hldGhlciB0aGlzIGlzIHRoZSBmaW5hbFxuXHRcdCAqIHBhcmFtZXRlciBhbmQgd2UgbmVlZCB0byByZW1vdmUgdGhlIHRyYWlsaW5nIGB9fWAuXG5cdFx0ICovXG5cdFx0Y29uc3QgZmluZFBhcmFtID0gKGZpbmFsKSA9PiB7XG5cdFx0XHQvLyBOb3RoaW5nIGZvdW5kIHlldCwgdGhpcyBtdXN0IGJlIHRoZSB0ZW1wbGF0ZSBuYW1lXG5cdFx0XHRpZiAoY291bnQgPT09IC0xKSB7XG5cdFx0XHRcdHJlc3VsdC5uYW1lID0gY3VycmVudC5zbGljZSgyKS50cmltKCk7XG5cdFx0XHRcdCsrY291bnQ7XG5cdFx0XHR9IGVsc2UgaWYgKGVxdWFscyA9PT0gLTEpIHtcblx0XHRcdFx0Ly8gSW4gYSBwYXJhbWV0ZXJcblx0XHRcdFx0Ly8gTm8gZXF1YWxzLCBzbyBpdCBtdXN0IGJlIHVubmFtZWQ7IG5vIHRyaW0gc2luY2Ugd2hpdGVzcGFjZSBhbGxvd2VkXG5cdFx0XHRcdGNvbnN0IHBhcmFtID0gZmluYWwgPyBjdXJyZW50LnNsaWNlKGVxdWFscyArIDEsIC0yKSA6IGN1cnJlbnQ7XG5cdFx0XHRcdGlmIChwYXJhbSkge1xuXHRcdFx0XHRcdHJlc3VsdC5wYXJhbWV0ZXJzWysrdW5uYW1lZF0gPSBwYXJhbTtcblx0XHRcdFx0XHQrK2NvdW50O1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBXZSBmb3VuZCBhbiBlcXVhbHMsIHNvIHNhdmUgdGhlIHBhcmFtZXRlciBhcyBrZXk6IHZhbHVlXG5cdFx0XHRcdGtleSA9IGN1cnJlbnQuc2xpY2UoMCwgTWF0aC5tYXgoMCwgZXF1YWxzKSkudHJpbSgpO1xuXHRcdFx0XHR2YWx1ZSA9IGZpbmFsID8gY3VycmVudC5zbGljZShlcXVhbHMgKyAxLCAtMikudHJpbSgpIDogY3VycmVudC5zbGljZShNYXRoLm1heCgwLCBlcXVhbHMgKyAxKSkudHJpbSgpO1xuXHRcdFx0XHRyZXN1bHQucGFyYW1ldGVyc1trZXldID0gdmFsdWU7XG5cdFx0XHRcdGVxdWFscyA9IC0xO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0Zm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgdGV4dC5sZW5ndGg7ICsraSkge1xuXHRcdFx0Y29uc3QgdGVzdDMgPSB0ZXh0LnNsaWNlKGksIGkgKyAzKTtcblx0XHRcdGlmICh0ZXN0MyA9PT0gJ3t7eycgfHwgKHRlc3QzID09PSAnfX19JyAmJiBsZXZlbC5hdCgtMSkgPT09IDMpKSB7XG5cdFx0XHRcdGN1cnJlbnQgKz0gdGVzdDM7XG5cdFx0XHRcdGkgKz0gMjtcblx0XHRcdFx0aWYgKHRlc3QzID09PSAne3t7Jykge1xuXHRcdFx0XHRcdGxldmVsW2xldmVsLmxlbmd0aF0gPSAzO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGxldmVsLnBvcCgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgdGVzdDIgPSB0ZXh0LnNsaWNlKGksIGkgKyAyKTtcblx0XHRcdC8vIEVudGVyaW5nIGEgdGVtcGxhdGUgKG9yIGxpbmspXG5cdFx0XHRpZiAodGVzdDIgPT09ICd7eycgfHwgdGVzdDIgPT09ICdbWycpIHtcblx0XHRcdFx0Y3VycmVudCArPSB0ZXN0Mjtcblx0XHRcdFx0KytpO1xuXHRcdFx0XHRpZiAodGVzdDIgPT09ICd7eycpIHtcblx0XHRcdFx0XHRsZXZlbFtsZXZlbC5sZW5ndGhdID0gMjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRsZXZlbFtsZXZlbC5sZW5ndGhdID0gJ3dsJztcblx0XHRcdFx0fVxuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdC8vIEVpdGhlciBsZWF2aW5nIGEgbGluayBvciB0ZW1wbGF0ZS9wYXJzZXIgZnVuY3Rpb25cblx0XHRcdGlmICgodGVzdDIgPT09ICd9fScgJiYgbGV2ZWwuYXQoLTEpID09PSAyKSB8fCAodGVzdDIgPT09ICddXScgJiYgbGV2ZWwuYXQoLTEpID09PSAnd2wnKSkge1xuXHRcdFx0XHRjdXJyZW50ICs9IHRlc3QyO1xuXHRcdFx0XHQrK2k7XG5cdFx0XHRcdGxldmVsLnBvcCgpO1xuXHRcdFx0XHQvLyBGaW5kIHRoZSBmaW5hbCBwYXJhbWV0ZXIgaWYgdGhpcyByZWFsbHkgaXMgdGhlIGVuZFxuXHRcdFx0XHRpZiAodGVzdDIgPT09ICd9fScgJiYgbGV2ZWwubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0ZmluZFBhcmFtKHRydWUpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRleHQuY2hhckF0KGkpID09PSAnfCcgJiYgbGV2ZWwubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRcdC8vIEFub3RoZXIgcGlwZSBmb3VuZCwgdG9wbGV2ZWwsIHNvIHBhcmFtZXRlciBjb21pbmcgdXAhXG5cdFx0XHRcdGZpbmRQYXJhbSgpO1xuXHRcdFx0XHRjdXJyZW50ID0gJyc7XG5cdFx0XHR9IGVsc2UgaWYgKGVxdWFscyA9PT0gLTEgJiYgdGV4dC5jaGFyQXQoaSkgPT09ICc9JyAmJiBsZXZlbC5sZW5ndGggPT09IDEpIHtcblx0XHRcdFx0Ly8gRXF1YWxzIGZvdW5kLCB0b3BsZXZlbFxuXHRcdFx0XHRlcXVhbHMgPSBjdXJyZW50Lmxlbmd0aDtcblx0XHRcdFx0Y3VycmVudCArPSB0ZXh0LmNoYXJBdChpKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIEp1c3QgYWR2YW5jZSB0aGUgcG9zaXRpb25cblx0XHRcdFx0Y3VycmVudCArPSB0ZXh0LmNoYXJBdChpKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fTtcblx0LyoqXG5cdCAqIEFkanVzdCBhbmQgbWFuaXB1bGF0ZSB0aGUgd2lraXRleHQgb2YgYSBwYWdlLlxuXHQgKlxuXHQgKiBAY2xhc3Ncblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLndpa2l0ZXh0XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gV2lraXRleHQgdG8gYmUgbWFuaXB1bGF0ZWQuXG5cdCAqL1xuXHRNb3JlYml0cy53aWtpdGV4dC5wYWdlID0gZnVuY3Rpb24gKHRleHQpIHtcblx0XHR0aGlzLnRleHQgPSB0ZXh0O1xuXHR9O1xuXHRNb3JlYml0cy53aWtpdGV4dC5wYWdlLnByb3RvdHlwZSA9IHtcblx0XHR0ZXh0OiAnJyxcblx0XHQvKipcblx0XHQgKiBSZW1vdmVzIGxpbmtzIHRvIGBsaW5rX3RhcmdldGAgZnJvbSB0aGUgcGFnZSB0ZXh0LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGxpbmtUYXJnZXRcblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMud2lraXRleHQucGFnZX1cblx0XHQgKi9cblx0XHRyZW1vdmVMaW5rKGxpbmtUYXJnZXQpIHtcblx0XHRcdGNvbnN0IG13VGl0bGUgPSBtdy5UaXRsZS5uZXdGcm9tVGV4dChsaW5rVGFyZ2V0KTtcblx0XHRcdGNvbnN0IG5hbWVzcGFjZUlEID0gbXdUaXRsZS5nZXROYW1lc3BhY2VJZCgpO1xuXHRcdFx0Y29uc3QgdGl0bGUgPSBtd1RpdGxlLmdldE1haW5UZXh0KCk7XG5cdFx0XHRsZXQgbGlua1JlZ2V4U3RyaW5nID0gJyc7XG5cdFx0XHRpZiAobmFtZXNwYWNlSUQgIT09IDApIHtcblx0XHRcdFx0bGlua1JlZ2V4U3RyaW5nID0gYCR7TW9yZWJpdHMubmFtZXNwYWNlUmVnZXgobmFtZXNwYWNlSUQpfTpgO1xuXHRcdFx0fVxuXHRcdFx0bGlua1JlZ2V4U3RyaW5nICs9IE1vcmViaXRzLnBhZ2VOYW1lUmVnZXgodGl0bGUpO1xuXHRcdFx0Ly8gRm9yIG1vc3QgbmFtZXNwYWNlcywgdW5saW5rIGJvdGggW1tVc2VyOlRlc3RdXSBhbmQgW1s6VXNlcjpUZXN0XV1cblx0XHRcdC8vIEZvciBmaWxlcyBhbmQgY2F0ZWdvcmllcywgb25seSB1bmxpbmsgW1s6Q2F0ZWdvcnk6VGVzdF1dLiBEbyBub3QgdW5saW5rIFtbQ2F0ZWdvcnk6VGVzdF1dXG5cdFx0XHRjb25zdCBpc0ZpbGVPckNhdGVnb3J5ID0gWzYsIDE0XS5pbmNsdWRlcyhuYW1lc3BhY2VJRCk7XG5cdFx0XHRjb25zdCBjb2xvbiA9IGlzRmlsZU9yQ2F0ZWdvcnkgPyAnOicgOiAnOj8nO1xuXHRcdFx0Y29uc3Qgc2ltcGxlTGlua1JlZ2V4ID0gbmV3IFJlZ0V4cChgXFxcXFtcXFxcWyR7Y29sb259KCR7bGlua1JlZ2V4U3RyaW5nfSlcXFxcXVxcXFxdYCwgJ2cnKTtcblx0XHRcdGNvbnN0IHBpcGVkTGlua1JlZ2V4ID0gbmV3IFJlZ0V4cChgXFxcXFtcXFxcWyR7Y29sb259JHtsaW5rUmVnZXhTdHJpbmd9XFxcXHwoLis/KVxcXFxdXFxcXF1gLCAnZycpO1xuXHRcdFx0dGhpcy50ZXh0ID0gdGhpcy50ZXh0LnJlcGxhY2Uoc2ltcGxlTGlua1JlZ2V4LCAnJDEnKS5yZXBsYWNlKHBpcGVkTGlua1JlZ2V4LCAnJDEnKTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogQ29tbWVudHMgb3V0IGltYWdlcyBmcm9tIHBhZ2UgdGV4dDsgaWYgdXNlZCBpbiBhIGdhbGxlcnksIGRlbGV0ZXMgdGhlIHdob2xlIGxpbmUuXG5cdFx0ICogSWYgdXNlZCBhcyBhIHRlbXBsYXRlIGFyZ3VtZW50IChub3QgbmVjZXNzYXJpbHkgd2l0aCBgRmlsZTpgIHByZWZpeCksIHRoZSB0ZW1wbGF0ZSBwYXJhbWV0ZXIgaXMgY29tbWVudGVkIG91dC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBpbWFnZSAtIEltYWdlIG5hbWUgd2l0aG91dCBgRmlsZTpgIHByZWZpeC5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gW3JlYXNvbl0gLSBSZWFzb24gdG8gYmUgaW5jbHVkZWQgaW4gY29tbWVudCwgYWxvbmdzaWRlIHRoZSBjb21tZW50ZWQtb3V0IGltYWdlLlxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy53aWtpdGV4dC5wYWdlfVxuXHRcdCAqL1xuXHRcdGNvbW1lbnRPdXRJbWFnZShpbWFnZSwgcmVhc29uKSB7XG5cdFx0XHRjb25zdCB1bmJpbmRlciA9IG5ldyBNb3JlYml0cy51bmJpbmRlcih0aGlzLnRleHQpO1xuXHRcdFx0dW5iaW5kZXIudW5iaW5kKCc8IS0tJywgJy0tPicpO1xuXHRcdFx0cmVhc29uID0gcmVhc29uID8gYCR7cmVhc29ufTogYCA6ICcnO1xuXHRcdFx0Y29uc3QgaW1hZ2VSZWdleFN0cmluZyA9IE1vcmViaXRzLnBhZ2VOYW1lUmVnZXgoaW1hZ2UpO1xuXHRcdFx0Ly8gQ2hlY2sgZm9yIG5vcm1hbCBpbWFnZSBsaW5rcywgaS5lLiBbW0ZpbGU6Rm9vYmFyLnBuZ3wuLi5dXVxuXHRcdFx0Ly8gV2lsbCBlYXQgdGhlIHdob2xlIGxpbmtcblx0XHRcdGNvbnN0IGxpbmtzUmVnZXggPSBuZXcgUmVnRXhwKFxuXHRcdFx0XHRgXFxcXFtcXFxcWyR7TW9yZWJpdHMubmFtZXNwYWNlUmVnZXgoNil9OlxcXFxzKiR7aW1hZ2VSZWdleFN0cmluZ31cXFxccypbXFxcXHwoPzpcXFxcXVxcXFxdKV1gXG5cdFx0XHQpO1xuXHRcdFx0Y29uc3QgYWxsTGlua3MgPSBNb3JlYml0cy5zdHJpbmcuc3BsaXRXZWlnaHRlZEJ5S2V5cyh1bmJpbmRlci5jb250ZW50LCAnW1snLCAnXV0nKTtcblx0XHRcdGZvciAoY29uc3QgYWxsTGluayBvZiBhbGxMaW5rcykge1xuXHRcdFx0XHRpZiAobGlua3NSZWdleC50ZXN0KGFsbExpbmspKSB7XG5cdFx0XHRcdFx0Y29uc3QgcmVwbGFjZW1lbnQgPSBgPCEtLSAke3JlYXNvbn0ke2FsbExpbmt9IC0tPmA7XG5cdFx0XHRcdFx0dW5iaW5kZXIuY29udGVudCA9IHVuYmluZGVyLmNvbnRlbnQucmVwbGFjZShhbGxMaW5rLCByZXBsYWNlbWVudCk7XG5cdFx0XHRcdFx0Ly8gdW5iaW5kIHRoZSBuZXdseSBjcmVhdGVkIGNvbW1lbnRzXG5cdFx0XHRcdFx0dW5iaW5kZXIudW5iaW5kKCc8IS0tJywgJy0tPicpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyBDaGVjayBmb3IgZ2FsbGVyeSBpbWFnZXMsIGkuZS4gaW5zdGFuY2VzIHRoYXQgbXVzdCBzdGFydCBvbiBhIG5ldyBsaW5lLFxuXHRcdFx0Ly8gZXZlbnR1YWxseSBwcmVjZWRlZCB3aXRoIHNvbWUgc3BhY2UsIGFuZCBtdXN0IGluY2x1ZGUgRmlsZTogcHJlZml4XG5cdFx0XHQvLyBXaWxsIGVhdCB0aGUgd2hvbGUgbGluZS5cblx0XHRcdGNvbnN0IGdhbGxlcnlJbWFnZVJlZ2V4ID0gbmV3IFJlZ0V4cChcblx0XHRcdFx0YCheXFxcXHMqJHtNb3JlYml0cy5uYW1lc3BhY2VSZWdleCg2KX06XFxcXHMqJHtpbWFnZVJlZ2V4U3RyaW5nfVxcXFxzKig/OlxcXFx8Lio/JHwkKSlgLFxuXHRcdFx0XHQnbWcnXG5cdFx0XHQpO1xuXHRcdFx0dW5iaW5kZXIuY29udGVudCA9IHVuYmluZGVyLmNvbnRlbnQucmVwbGFjZShnYWxsZXJ5SW1hZ2VSZWdleCwgYDwhLS0gJHtyZWFzb259JDEgLS0+YCk7XG5cdFx0XHQvLyB1bmJpbmQgdGhlIG5ld2x5IGNyZWF0ZWQgY29tbWVudHNcblx0XHRcdHVuYmluZGVyLnVuYmluZCgnPCEtLScsICctLT4nKTtcblx0XHRcdC8vIENoZWNrIGZyZWUgaW1hZ2UgdXNhZ2VzLCBmb3IgZXhhbXBsZSBhcyB0ZW1wbGF0ZSBhcmd1bWVudHMsIG1pZ2h0IGhhdmUgdGhlIEZpbGU6IHByZWZpeCBleGNsdWRlZCwgYnV0IG11c3QgYmUgcHJlY2VkZWQgYnkgYW4gfFxuXHRcdFx0Ly8gV2lsbCBvbmx5IGVhdCB0aGUgaW1hZ2UgbmFtZSBhbmQgdGhlIHByZWNlZGluZyBiYXIgYW5kIGFuIGV2ZW50dWFsIG5hbWVkIHBhcmFtZXRlclxuXHRcdFx0Y29uc3QgZnJlZUltYWdlUmVnZXggPSBuZXcgUmVnRXhwKFxuXHRcdFx0XHRgKFxcXFx8XFxcXHMqKD86W1xcXFx3XFxcXHNdK1xcXFw9KT9cXFxccyooPzoke01vcmViaXRzLm5hbWVzcGFjZVJlZ2V4KDYpfTpcXFxccyopPyR7aW1hZ2VSZWdleFN0cmluZ30pYCxcblx0XHRcdFx0J21nJ1xuXHRcdFx0KTtcblx0XHRcdHVuYmluZGVyLmNvbnRlbnQgPSB1bmJpbmRlci5jb250ZW50LnJlcGxhY2UoZnJlZUltYWdlUmVnZXgsIGA8IS0tICR7cmVhc29ufSQxIC0tPmApO1xuXHRcdFx0Ly8gUmViaW5kIHRoZSBjb250ZW50IG5vdywgd2UgYXJlIGRvbmUhXG5cdFx0XHR0aGlzLnRleHQgPSB1bmJpbmRlci5yZWJpbmQoKTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogQ29udmVydHMgdXNlcyBvZiBbW0ZpbGU6YGltYWdlYF1dIHRvIFtbRmlsZTpgaW1hZ2VgfGBkYXRhYF1dLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGltYWdlIC0gSW1hZ2UgbmFtZSB3aXRob3V0IEZpbGU6IHByZWZpeC5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gZGF0YSAtIFRoZSBkaXNwbGF5IG9wdGlvbnMuXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLndpa2l0ZXh0LnBhZ2V9XG5cdFx0ICovXG5cdFx0YWRkVG9JbWFnZUNvbW1lbnQoaW1hZ2UsIGRhdGEpIHtcblx0XHRcdGNvbnN0IGltYWdlUmVnZXhTdHJpbmcgPSBNb3JlYml0cy5wYWdlTmFtZVJlZ2V4KGltYWdlKTtcblx0XHRcdGNvbnN0IGxpbmtzUmVnZXggPSBuZXcgUmVnRXhwKFxuXHRcdFx0XHRgXFxcXFtcXFxcWyR7TW9yZWJpdHMubmFtZXNwYWNlUmVnZXgoNil9OlxcXFxzKiR7aW1hZ2VSZWdleFN0cmluZ31cXFxccypbXFxcXHwoPzpcXFxcXVxcXFxdKV1gXG5cdFx0XHQpO1xuXHRcdFx0Y29uc3QgYWxsTGlua3MgPSBNb3JlYml0cy5zdHJpbmcuc3BsaXRXZWlnaHRlZEJ5S2V5cyh0aGlzLnRleHQsICdbWycsICddXScpO1xuXHRcdFx0Zm9yIChsZXQgcmVwbGFjZW1lbnQgb2YgYWxsTGlua3MpIHtcblx0XHRcdFx0aWYgKGxpbmtzUmVnZXgudGVzdChyZXBsYWNlbWVudCkpIHtcblx0XHRcdFx0XHQvLyBqdXN0IHB1dCBpdCBhdCB0aGUgZW5kP1xuXHRcdFx0XHRcdHJlcGxhY2VtZW50ID0gcmVwbGFjZW1lbnQucmVwbGFjZSgvXFxdXFxdJC8sIGB8JHtkYXRhfV1dYCk7XG5cdFx0XHRcdFx0dGhpcy50ZXh0ID0gdGhpcy50ZXh0LnJlcGxhY2UocmVwbGFjZW1lbnQsIHJlcGxhY2VtZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Y29uc3QgZ2FsbGVyeVJlZ2V4ID0gbmV3IFJlZ0V4cChgXihcXFxccyoke2ltYWdlUmVnZXhTdHJpbmd9Lio/KVxcXFx8PyguKj8pJGAsICdtZycpO1xuXHRcdFx0Y29uc3QgbmV3dGV4dCA9IGAkMXwkMiAke2RhdGF9YDtcblx0XHRcdHRoaXMudGV4dCA9IHRoaXMudGV4dC5yZXBsYWNlKGdhbGxlcnlSZWdleCwgbmV3dGV4dCk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIFJlbW92ZSBhbGwgdHJhbnNjbHVzaW9ucyBvZiBhIHRlbXBsYXRlIGZyb20gcGFnZSB0ZXh0LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHRlbXBsYXRlIC0gUGFnZSBuYW1lIHdob3NlIHRyYW5zY2x1c2lvbnMgYXJlIHRvIGJlIHJlbW92ZWQsXG5cdFx0ICogaW5jbHVkZSBuYW1lc3BhY2UgcHJlZml4IG9ubHkgaWYgbm90IGluIHRlbXBsYXRlIG5hbWVzcGFjZS5cblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMud2lraXRleHQucGFnZX1cblx0XHQgKi9cblx0XHRyZW1vdmVUZW1wbGF0ZSh0ZW1wbGF0ZSkge1xuXHRcdFx0Y29uc3QgdGVtcGxhdGVSZWdleFN0cmluZyA9IE1vcmViaXRzLnBhZ2VOYW1lUmVnZXgodGVtcGxhdGUpO1xuXHRcdFx0Y29uc3QgbGlua3NSZWdleCA9IG5ldyBSZWdFeHAoXG5cdFx0XHRcdGBcXFxce1xcXFx7KD86JHtNb3JlYml0cy5uYW1lc3BhY2VSZWdleCgxMCl9Oik/XFxcXHMqJHt0ZW1wbGF0ZVJlZ2V4U3RyaW5nfVxcXFxzKltcXFxcfCg/OlxcXFx9XFxcXH0pXWBcblx0XHRcdCk7XG5cdFx0XHRjb25zdCBhbGxUZW1wbGF0ZXMgPSBNb3JlYml0cy5zdHJpbmcuc3BsaXRXZWlnaHRlZEJ5S2V5cyh0aGlzLnRleHQsICd7eycsICd9fScsIFsne3t7JywgJ319fSddKTtcblx0XHRcdGZvciAoY29uc3QgYWxsVGVtcGxhdGUgb2YgYWxsVGVtcGxhdGVzKSB7XG5cdFx0XHRcdGlmIChsaW5rc1JlZ2V4LnRlc3QoYWxsVGVtcGxhdGUpKSB7XG5cdFx0XHRcdFx0dGhpcy50ZXh0ID0gdGhpcy50ZXh0LnJlcGxhY2UoYWxsVGVtcGxhdGUsICcnKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBTbWFydGx5IGluc2VydCBhIHRhZyBhdG9wIHBhZ2UgdGV4dCBidXQgYWZ0ZXIgc3BlY2lmaWVkIHRlbXBsYXRlcyxcblx0XHQgKiBzdWNoIGFzIGhhdG5vdGVzLCBzaG9ydCBkZXNjcmlwdGlvbiwgb3IgZGVsZXRpb24gYW5kIHByb3RlY3Rpb24gdGVtcGxhdGVzLlxuXHRcdCAqIE5vdGFibHksIGRvZXMgKm5vdCogaW5zZXJ0IGEgbmV3bGluZSBhZnRlciB0aGUgdGFnLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHRhZyAtIFRoZSB0YWcgdG8gYmUgaW5zZXJ0ZWQuXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IHJlZ2V4IC0gVGVtcGxhdGVzIGFmdGVyIHdoaWNoIHRvIGluc2VydCB0YWcsXG5cdFx0ICogZ2l2ZW4gYXMgZWl0aGVyIGFzIGEgKHJlZ2V4LXZhbGlkKSBzdHJpbmcgb3IgYW4gYXJyYXkgdG8gYmUgam9pbmVkIGJ5IHBpcGVzLlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBbZmxhZ3M9aV0gLSBSZWdleCBmbGFncyB0byBhcHBseS4gIGAnJ2AgdG8gcHJvdmlkZSBubyBmbGFncztcblx0XHQgKiBvdGhlciBmYWxzZXkgdmFsdWVzIHdpbGwgZGVmYXVsdCB0byBgaWAuXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IFtwcmVSZWdleF0gLSBPcHRpb25hbCByZWdleCBzdHJpbmcgb3IgYXJyYXkgdG8gbWF0Y2hcblx0XHQgKiBiZWZvcmUgYW55IHRlbXBsYXRlIG1hdGNoZXMgKGkuZS4gYmVmb3JlIGB7e2ApLCBzdWNoIGFzIGh0bWwgY29tbWVudHMuXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLndpa2l0ZXh0LnBhZ2V9XG5cdFx0ICovXG5cdFx0aW5zZXJ0QWZ0ZXJUZW1wbGF0ZXModGFnLCByZWdleCwgZmxhZ3MsIHByZVJlZ2V4KSB7XG5cdFx0XHRpZiAodGFnID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignTm8gdGFnIHByb3ZpZGVkJyk7XG5cdFx0XHR9XG5cdFx0XHQvLyAubGVuZ3RoIGlzIG9ubHkgYSBwcm9wZXJ0eSBvZiBzdHJpbmdzIGFuZCBhcnJheXMgc28gd2Vcblx0XHRcdC8vIHNob3VsZG4ndCBuZWVkIHRvIGNoZWNrIHR5cGVcblx0XHRcdGlmIChyZWdleCA9PT0gdW5kZWZpbmVkIHx8ICFyZWdleC5sZW5ndGgpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdObyByZWdleCBwcm92aWRlZCcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHJlZ2V4KSkge1xuXHRcdFx0XHRyZWdleCA9IHJlZ2V4LmpvaW4oJ3wnKTtcblx0XHRcdH1cblx0XHRcdGlmICh0eXBlb2YgZmxhZ3MgIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdGZsYWdzID0gJ2knO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFwcmVSZWdleCB8fCAhcHJlUmVnZXgubGVuZ3RoKSB7XG5cdFx0XHRcdHByZVJlZ2V4ID0gJyc7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocHJlUmVnZXgpKSB7XG5cdFx0XHRcdHByZVJlZ2V4ID0gcHJlUmVnZXguam9pbignfCcpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gUmVnZXggaXMgZXh0cmEgY29tcGxpY2F0ZWQgdG8gYWxsb3cgZm9yIHRlbXBsYXRlcyB3aXRoXG5cdFx0XHQvLyBwYXJhbWV0ZXJzIGFuZCB0byBoYW5kbGUgd2hpdGVzcGFjZSBwcm9wZXJseVxuXHRcdFx0dGhpcy50ZXh0ID0gdGhpcy50ZXh0LnJlcGxhY2UoXG5cdFx0XHRcdG5ldyBSZWdFeHAoXG5cdFx0XHRcdFx0Ly8gbGVhZGluZyB3aGl0ZXNwYWNlXG5cdFx0XHRcdFx0Ly8gY2FwdHVyZSB0ZW1wbGF0ZShzKVxuXHRcdFx0XHRcdC8vIFByZS10ZW1wbGF0ZSByZWdleCwgc3VjaCBhcyBsZWFkaW5nIGh0bWwgY29tbWVudHNcblx0XHRcdFx0XHQvLyBiZWdpbiB0ZW1wbGF0ZSBmb3JtYXRcblx0XHRcdFx0XHQvLyBUZW1wbGF0ZSByZWdleFxuXHRcdFx0XHRcdC8vIGVuZCBtYWluIHRlbXBsYXRlIG5hbWUsIG9wdGlvbmFsbHkgd2l0aCBhIG51bWJlclxuXHRcdFx0XHRcdC8vIFByb2JhYmx5IHJlbW92ZSB0aGUgKD86KSB0aG91Z2hcblx0XHRcdFx0XHQvLyB0ZW1wbGF0ZSBwYXJhbWV0ZXJzXG5cdFx0XHRcdFx0Ly8gZW5kIHRlbXBsYXRlIGZvcm1hdFxuXHRcdFx0XHRcdC8vIGVuZCBjYXB0dXJlXG5cdFx0XHRcdFx0Ly8gdHJhaWxpbmcgd2hpdGVzcGFjZVxuXHRcdFx0XHRcdGBeXFxcXHMqKD86KCg/OlxcXFxzKiR7XG5cdFx0XHRcdFx0XHQvLyBQcmUtdGVtcGxhdGUgcmVnZXgsIHN1Y2ggYXMgbGVhZGluZyBodG1sIGNvbW1lbnRzXG5cdFx0XHRcdFx0XHRwcmVSZWdleFxuXHRcdFx0XHRcdH18XFxcXHtcXFxce1xcXFxzKig/OiR7XG5cdFx0XHRcdFx0XHQvLyBUZW1wbGF0ZSByZWdleFxuXHRcdFx0XHRcdFx0cmVnZXhcblx0XHRcdFx0XHR9KVxcXFxkKlxcXFxzKihcXFxcfCg/OlxcXFx7XFxcXHtbXnt9XSpcXFxcfVxcXFx9fFtee31dKSopP1xcXFx9XFxcXH0pKyg/OlxcXFxzKlxcXFxuKT8pXFxcXHMqKT9gLFxuXHRcdFx0XHRcdGZsYWdzXG5cdFx0XHRcdCksXG5cdFx0XHRcdGAkMSR7dGFnfWBcblx0XHRcdCk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEdldCB0aGUgbWFuaXB1bGF0ZWQgd2lraXRleHQuXG5cdFx0ICpcblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdGdldFRleHQoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy50ZXh0O1xuXHRcdH0sXG5cdH07XG5cdC8qICoqKioqKioqKioqIE1vcmViaXRzLnVzZXJzcGFjZUxvZ2dlciAqKioqKioqKioqKiogKi9cblx0LyoqXG5cdCAqIEhhbmRsZXMgbG9nZ2luZyBhY3Rpb25zIHRvIGEgdXNlcnNwYWNlIGxvZy5cblx0ICogVXNlZCBpbiBDU0QsIFBST0QsIGFuZCBYRkQuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0c1xuXHQgKiBAY2xhc3Ncblx0ICogQHBhcmFtIHtzdHJpbmd9IGxvZ1BhZ2VOYW1lIC0gVGl0bGUgb2YgdGhlIHN1YnBhZ2Ugb2YgdGhlIGN1cnJlbnQgdXNlcidzIGxvZy5cblx0ICovXG5cdE1vcmViaXRzLnVzZXJzcGFjZUxvZ2dlciA9IGZ1bmN0aW9uIChsb2dQYWdlTmFtZSkge1xuXHRcdGlmICghbG9nUGFnZU5hbWUpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignbm8gbG9nIHBhZ2UgbmFtZSBzcGVjaWZpZWQnKTtcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogVGhlIHRleHQgdG8gcHJlZml4IHRoZSBsb2cgd2l0aCB1cG9uIGNyZWF0aW9uLCBkZWZhdWx0cyB0byBlbXB0eS5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dGhpcy5pbml0aWFsVGV4dCA9ICcnO1xuXHRcdC8qKlxuXHRcdCAqIFRoZSBoZWFkZXIgbGV2ZWwgdG8gdXNlIGZvciBtb250aHMsIGRlZmF1bHRzIHRvIDMgKGA9PT1gKS5cblx0XHQgKlxuXHRcdCAqIEB0eXBlIHtudW1iZXJ9XG5cdFx0ICovXG5cdFx0dGhpcy5oZWFkZXJMZXZlbCA9IDM7XG5cdFx0dGhpcy5jaGFuZ2VUYWdzID0gJyc7XG5cdFx0LyoqXG5cdFx0ICogTG9nIHRoZSBlbnRyeS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBsb2dUZXh0IC0gRG9lc24ndCBpbmNsdWRlIGxlYWRpbmcgYCNgIG9yIGAqYC5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gc3VtbWFyeVRleHQgLSBFZGl0IHN1bW1hcnkuXG5cdFx0ICogQHJldHVybnMge0pRdWVyeS5Qcm9taXNlfVxuXHRcdCAqL1xuXHRcdHRoaXMubG9nID0gZnVuY3Rpb24gKGxvZ1RleHQsIHN1bW1hcnlUZXh0KSB7XG5cdFx0XHRjb25zdCBkZWYgPSAkLkRlZmVycmVkKCk7XG5cdFx0XHRpZiAoIWxvZ1RleHQpIHtcblx0XHRcdFx0cmV0dXJuIGRlZi5yZWplY3QoKTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHBhZ2UgPSBuZXcgTW9yZWJpdHMud2lraS5wYWdlKFxuXHRcdFx0XHRgVXNlcjoke213LmNvbmZpZy5nZXQoJ3dnVXNlck5hbWUnKX0vJHtsb2dQYWdlTmFtZX1gLFxuXHRcdFx0XHR3aW5kb3cud2dVTFMoJ+WwhumhueebruWKoOWFpeWIsOeUqOaIt+epuumXtOaXpeW/lycsICflsIfpoIXnm67liqDlhaXliLDkvb/nlKjogIXnqbrplpPml6XoqownKVxuXHRcdFx0KTsgLy8gbWFrZSB0aGlzICcuLi4gdG8gJyArIGxvZ1BhZ2VOYW1lID9cblx0XHRcdHBhZ2UubG9hZCgocGFnZW9iaikgPT4ge1xuXHRcdFx0XHQvLyBhZGQgYmx1cmIgaWYgbG9nIHBhZ2UgZG9lc24ndCBleGlzdCBvciBpcyBibGFua1xuXHRcdFx0XHRsZXQgdGV4dCA9IHBhZ2VvYmouZ2V0UGFnZVRleHQoKSB8fCB0aGlzLmluaXRpYWxUZXh0O1xuXHRcdFx0XHQvLyBjcmVhdGUgbW9udGhseSBoZWFkZXIgaWYgaXQgZG9lc24ndCBleGlzdCBhbHJlYWR5XG5cdFx0XHRcdGNvbnN0IGRhdGUgPSBuZXcgTW9yZWJpdHMuZGF0ZShwYWdlb2JqLmdldExvYWRUaW1lKCkpO1xuXHRcdFx0XHRpZiAoIWRhdGUubW9udGhIZWFkZXJSZWdleCgpLmV4ZWModGV4dCkpIHtcblx0XHRcdFx0XHR0ZXh0ICs9IGBcXG5cXG4ke2RhdGUubW9udGhIZWFkZXIodGhpcy5oZWFkZXJMZXZlbCl9YDtcblx0XHRcdFx0fVxuXHRcdFx0XHRwYWdlb2JqLnNldFBhZ2VUZXh0KGAke3RleHR9XFxuJHtsb2dUZXh0fWApO1xuXHRcdFx0XHRwYWdlb2JqLnNldEVkaXRTdW1tYXJ5KHN1bW1hcnlUZXh0KTtcblx0XHRcdFx0cGFnZW9iai5zZXRDaGFuZ2VUYWdzKHRoaXMuY2hhbmdlVGFncyk7XG5cdFx0XHRcdHBhZ2VvYmouc2V0Q3JlYXRlT3B0aW9uKCdyZWNyZWF0ZScpO1xuXHRcdFx0XHRwYWdlb2JqLnNhdmUoZGVmLnJlc29sdmUsIGRlZi5yZWplY3QpO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gZGVmO1xuXHRcdH07XG5cdH07XG5cdC8qICoqKioqKioqKioqKioqKiogTW9yZWJpdHMuc3RhdHVzICoqKioqKioqKioqKioqKiogKi9cblx0LyoqXG5cdCAqIENyZWF0ZSBhbmQgc2hvdyBzdGF0dXMgbWVzc2FnZXMgb2YgdmFyeWluZyB1cmdlbmN5LlxuXHQgKiB7QGxpbmsgTW9yZWJpdHMuc3RhdHVzLmluaXR8TW9yZWJpdHMuc3RhdHVzLmluaXQoKX0gbXVzdCBiZSBjYWxsZWQgYmVmb3JlXG5cdCAqIGFueSBzdGF0dXMgb2JqZWN0IGlzIGNyZWF0ZWQsIG90aGVyd2lzZSB0aG9zZSBzdGF0dXNlcyB3b24ndCBiZSB2aXNpYmxlLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHNcblx0ICogQGNsYXNzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gVGV4dCBiZWZvcmUgdGhlIHRoZSBjb2xvbiBgOmAuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzdGF0IC0gVGV4dCBhZnRlciB0aGUgY29sb24gYDpgLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW3R5cGU9c3RhdHVzXSAtIERldGVybWluZSB0aGUgZm9udCBjb2xvciBvZiB0aGUgc3RhdHVzXG5cdCAqIGxpbmUsIGFsbG93YWJsZSB2YWx1ZXMgYXJlOiBgc3RhdHVzYCAoYmx1ZSksIGBpbmZvYCAoZ3JlZW4pLCBgd2FybmAgKHJlZCksXG5cdCAqIG9yIGBlcnJvcmAgKGJvbGQgcmVkKS5cblx0ICovXG5cdE1vcmViaXRzLnN0YXR1cyA9IGZ1bmN0aW9uICh0ZXh0LCBzdGF0LCB0eXBlKSB7XG5cdFx0dGhpcy50ZXh0UmF3ID0gdGV4dDtcblx0XHR0aGlzLnRleHQgPSBNb3JlYml0cy5jcmVhdGVIdG1sKHRleHQpO1xuXHRcdHRoaXMudHlwZSA9IHR5cGUgfHwgJ3N0YXR1cyc7XG5cdFx0dGhpcy5nZW5lcmF0ZSgpO1xuXHRcdGlmIChzdGF0KSB7XG5cdFx0XHR0aGlzLnVwZGF0ZShzdGF0LCB0eXBlKTtcblx0XHR9XG5cdH07XG5cdC8qKlxuXHQgKiBTcGVjaWZ5IGFuIGFyZWEgZm9yIHN0YXR1cyBtZXNzYWdlIGVsZW1lbnRzIHRvIGJlIGFkZGVkIHRvLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMuc3RhdHVzXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHJvb3QgLSBVc3VhbGx5IGEgZGl2IGVsZW1lbnQuXG5cdCAqIEB0aHJvd3MgSWYgYHJvb3RgIGlzIG5vdCBhbiBgSFRNTEVsZW1lbnRgLlxuXHQgKi9cblx0TW9yZWJpdHMuc3RhdHVzLmluaXQgPSAocm9vdCkgPT4ge1xuXHRcdGlmICghKHJvb3QgaW5zdGFuY2VvZiBFbGVtZW50KSkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignb2JqZWN0IG5vdCBhbiBpbnN0YW5jZSBvZiBFbGVtZW50Jyk7XG5cdFx0fVxuXHRcdHdoaWxlIChyb290Lmhhc0NoaWxkTm9kZXMoKSkge1xuXHRcdFx0cm9vdC5yZW1vdmVDaGlsZChyb290LmZpcnN0Q2hpbGQpO1xuXHRcdH1cblx0XHRNb3JlYml0cy5zdGF0dXMucm9vdCA9IHJvb3Q7XG5cdFx0TW9yZWJpdHMuc3RhdHVzLmVycm9yRXZlbnQgPSBudWxsO1xuXHR9O1xuXHRNb3JlYml0cy5zdGF0dXMucm9vdCA9IG51bGw7XG5cdC8qKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMuc3RhdHVzXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGhhbmRsZXIgLSBGdW5jdGlvbiB0byBleGVjdXRlIG9uIGVycm9yLlxuXHQgKiBAdGhyb3dzIFdoZW4gYGhhbmRsZXJgIGlzIG5vdCBhIGZ1bmN0aW9uLlxuXHQgKi9cblx0TW9yZWJpdHMuc3RhdHVzLm9uRXJyb3IgPSAoaGFuZGxlcikgPT4ge1xuXHRcdGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0TW9yZWJpdHMuc3RhdHVzLmVycm9yRXZlbnQgPSBoYW5kbGVyO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdNb3JlYml0cy5zdGF0dXMub25FcnJvcjogaGFuZGxlciBpcyBub3QgYSBmdW5jdGlvbicpO1xuXHRcdH1cblx0fTtcblx0TW9yZWJpdHMuc3RhdHVzLnByb3RvdHlwZSA9IHtcblx0XHRzdGF0OiBudWxsLFxuXHRcdHN0YXRSYXc6IG51bGwsXG5cdFx0dGV4dDogbnVsbCxcblx0XHR0ZXh0UmF3OiBudWxsLFxuXHRcdHR5cGU6ICdzdGF0dXMnLFxuXHRcdHRhcmdldDogbnVsbCxcblx0XHRub2RlOiBudWxsLFxuXHRcdGxpbmtlZDogZmFsc2UsXG5cdFx0LyoqIEFkZCB0aGUgc3RhdHVzIGVsZW1lbnQgbm9kZSB0byB0aGUgRE9NLiAqL1xuXHRcdGxpbmsoKSB7XG5cdFx0XHRpZiAoIXRoaXMubGlua2VkICYmIE1vcmViaXRzLnN0YXR1cy5yb290KSB7XG5cdFx0XHRcdE1vcmViaXRzLnN0YXR1cy5yb290LmFwcGVuZENoaWxkKHRoaXMubm9kZSk7XG5cdFx0XHRcdHRoaXMubGlua2VkID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdC8qKiBSZW1vdmUgdGhlIHN0YXR1cyBlbGVtZW50IG5vZGUgZnJvbSB0aGUgRE9NLiAqL1xuXHRcdHVubGluaygpIHtcblx0XHRcdGlmICh0aGlzLmxpbmtlZCkge1xuXHRcdFx0XHRNb3JlYml0cy5zdGF0dXMucm9vdC5yZW1vdmVDaGlsZCh0aGlzLm5vZGUpO1xuXHRcdFx0XHR0aGlzLmxpbmtlZCA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogVXBkYXRlIHRoZSBzdGF0dXMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gc3RhdHVzIC0gUGFydCBvZiBzdGF0dXMgbWVzc2FnZSBhZnRlciBjb2xvbi5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAtICdzdGF0dXMnIChibHVlKSwgJ2luZm8nIChncmVlbiksICd3YXJuJ1xuXHRcdCAqIChyZWQpLCBvciAnZXJyb3InIChib2xkIHJlZCkuXG5cdFx0ICovXG5cdFx0dXBkYXRlKHN0YXR1cywgdHlwZSkge1xuXHRcdFx0dGhpcy5zdGF0UmF3ID0gc3RhdHVzO1xuXHRcdFx0dGhpcy5zdGF0ID0gTW9yZWJpdHMuY3JlYXRlSHRtbChzdGF0dXMpO1xuXHRcdFx0aWYgKHR5cGUpIHtcblx0XHRcdFx0dGhpcy50eXBlID0gdHlwZTtcblx0XHRcdFx0aWYgKHR5cGUgPT09ICdlcnJvcicpIHtcblx0XHRcdFx0XHQvLyBoYWNrIHRvIGZvcmNlIHRoZSBwYWdlIG5vdCB0byByZWxvYWQgd2hlbiBhbiBlcnJvciBpcyBvdXRwdXQgLSBzZWUgYWxzbyBNb3JlYml0cy5zdGF0dXMoKSBhYm92ZVxuXHRcdFx0XHRcdE1vcmViaXRzLndpa2kubnVtYmVyT2ZBY3Rpb25zTGVmdCA9IDEwMDA7XG5cdFx0XHRcdFx0Ly8gY2FsbCBlcnJvciBjYWxsYmFja1xuXHRcdFx0XHRcdGlmIChNb3JlYml0cy5zdGF0dXMuZXJyb3JFdmVudCkge1xuXHRcdFx0XHRcdFx0TW9yZWJpdHMuc3RhdHVzLmVycm9yRXZlbnQoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gYWxzbyBsb2cgZXJyb3IgbWVzc2FnZXMgaW4gdGhlIGJyb3dzZXIgY29uc29sZVxuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYFtNb3JlYml0c10gJHt0aGlzLnRleHRSYXd9OiAke3RoaXMuc3RhdFJhd31gKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5yZW5kZXIoKTtcblx0XHR9LFxuXHRcdC8qKiBQcm9kdWNlIHRoZSBodG1sIGZvciBmaXJzdCBwYXJ0IG9mIHRoZSBzdGF0dXMgbWVzc2FnZS4gKi9cblx0XHRnZW5lcmF0ZSgpIHtcblx0XHRcdHRoaXMubm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0dGhpcy5ub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSkuYXBwZW5kQ2hpbGQodGhpcy50ZXh0KTtcblx0XHRcdHRoaXMubm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJykpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCc6ICcpKTtcblx0XHRcdHRoaXMudGFyZ2V0ID0gdGhpcy5ub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSk7XG5cdFx0XHR0aGlzLnRhcmdldC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJykpOyAvLyBkdW1teSBub2RlXG5cdFx0fSxcblxuXHRcdC8qKiBDb21wbGV0ZSB0aGUgaHRtbCwgZm9yIHRoZSBzZWNvbmQgcGFydCBvZiB0aGUgc3RhdHVzIG1lc3NhZ2UuICovXG5cdFx0cmVuZGVyKCkge1xuXHRcdFx0dGhpcy5ub2RlLmNsYXNzTmFtZSA9IGBtb3JlYml0c19zdGF0dXNfJHt0aGlzLnR5cGV9YDtcblx0XHRcdHdoaWxlICh0aGlzLnRhcmdldC5oYXNDaGlsZE5vZGVzKCkpIHtcblx0XHRcdFx0dGhpcy50YXJnZXQucmVtb3ZlQ2hpbGQodGhpcy50YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnRhcmdldC5hcHBlbmRDaGlsZCh0aGlzLnN0YXQpO1xuXHRcdFx0dGhpcy5saW5rKCk7XG5cdFx0fSxcblx0XHRzdGF0dXMoc3RhdHVzKSB7XG5cdFx0XHR0aGlzLnVwZGF0ZShzdGF0dXMsICdzdGF0dXMnKTtcblx0XHR9LFxuXHRcdGluZm8oc3RhdHVzKSB7XG5cdFx0XHR0aGlzLnVwZGF0ZShzdGF0dXMsICdpbmZvJyk7XG5cdFx0fSxcblx0XHR3YXJuKHN0YXR1cykge1xuXHRcdFx0dGhpcy51cGRhdGUoc3RhdHVzLCAnd2FybicpO1xuXHRcdH0sXG5cdFx0ZXJyb3Ioc3RhdHVzKSB7XG5cdFx0XHR0aGlzLnVwZGF0ZShzdGF0dXMsICdlcnJvcicpO1xuXHRcdH0sXG5cdH07XG5cdC8qKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMuc3RhdHVzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gQmVmb3JlIGNvbG9uXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzdGF0dXMgLSBBZnRlciBjb2xvblxuXHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc3RhdHVzfSAtIGBzdGF0dXNgLXR5cGUgKGJsdWUpXG5cdCAqL1xuXHRNb3JlYml0cy5zdGF0dXMuc3RhdHVzID0gKHRleHQsIHN0YXR1cykgPT4ge1xuXHRcdHJldHVybiBuZXcgTW9yZWJpdHMuc3RhdHVzKHRleHQsIHN0YXR1cyk7XG5cdH07XG5cdC8qKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMuc3RhdHVzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gQmVmb3JlIGNvbG9uXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzdGF0dXMgLSBBZnRlciBjb2xvblxuXHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc3RhdHVzfSAtIGBpbmZvYC10eXBlIChncmVlbilcblx0ICovXG5cdE1vcmViaXRzLnN0YXR1cy5pbmZvID0gKHRleHQsIHN0YXR1cykgPT4ge1xuXHRcdHJldHVybiBuZXcgTW9yZWJpdHMuc3RhdHVzKHRleHQsIHN0YXR1cywgJ2luZm8nKTtcblx0fTtcblx0LyoqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5zdGF0dXNcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBCZWZvcmUgY29sb25cblx0ICogQHBhcmFtIHtzdHJpbmd9IHN0YXR1cyAtIEFmdGVyIGNvbG9uXG5cdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zdGF0dXN9IC0gYHdhcm5gLXR5cGUgKHJlZClcblx0ICovXG5cdE1vcmViaXRzLnN0YXR1cy53YXJuID0gKHRleHQsIHN0YXR1cykgPT4ge1xuXHRcdHJldHVybiBuZXcgTW9yZWJpdHMuc3RhdHVzKHRleHQsIHN0YXR1cywgJ3dhcm4nKTtcblx0fTtcblx0LyoqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5zdGF0dXNcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBCZWZvcmUgY29sb25cblx0ICogQHBhcmFtIHtzdHJpbmd9IHN0YXR1cyAtIEFmdGVyIGNvbG9uXG5cdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zdGF0dXN9IC0gYGVycm9yYC10eXBlIChib2xkIHJlZClcblx0ICovXG5cdE1vcmViaXRzLnN0YXR1cy5lcnJvciA9ICh0ZXh0LCBzdGF0dXMpID0+IHtcblx0XHRyZXR1cm4gbmV3IE1vcmViaXRzLnN0YXR1cyh0ZXh0LCBzdGF0dXMsICdlcnJvcicpO1xuXHR9O1xuXHQvKipcblx0ICogRm9yIHRoZSBhY3Rpb24gY29tcGxldGUgbWVzc2FnZSBhdCB0aGUgZW5kLCBjcmVhdGUgYSBzdGF0dXMgbGluZSB3aXRob3V0XG5cdCAqIGEgY29sb24gc2VwYXJhdG9yLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMuc3RhdHVzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0XG5cdCAqL1xuXHRNb3JlYml0cy5zdGF0dXMuYWN0aW9uQ29tcGxldGVkID0gKHRleHQpID0+IHtcblx0XHRjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0bm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdiJykpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpKTtcblx0XHRub2RlLmNsYXNzTmFtZSA9ICdtb3JlYml0c19zdGF0dXNfaW5mbyBtb3JlYml0c19hY3Rpb25fY29tcGxldGUnO1xuXHRcdGlmIChNb3JlYml0cy5zdGF0dXMucm9vdCkge1xuXHRcdFx0TW9yZWJpdHMuc3RhdHVzLnJvb3QuYXBwZW5kQ2hpbGQobm9kZSk7XG5cdFx0fVxuXHR9O1xuXHQvKipcblx0ICogRGlzcGxheSB0aGUgdXNlcidzIHJhdGlvbmFsZSwgY29tbWVudHMsIGV0Yy4gQmFjayB0byB0aGVtIGFmdGVyIGEgZmFpbHVyZSxcblx0ICogc28gdGhhdCB0aGV5IG1heSByZS11c2UgaXQuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5zdGF0dXNcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbW1lbnRzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlXG5cdCAqL1xuXHRNb3JlYml0cy5zdGF0dXMucHJpbnRVc2VyVGV4dCA9IChjb21tZW50cywgbWVzc2FnZSkgPT4ge1xuXHRcdGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdFx0cC5pbm5lckhUTUwgPSBtZXNzYWdlO1xuXHRcdGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdGRpdi5jbGFzc05hbWUgPSAnbW9yZWJpdHMtdXNlcnRleHQnO1xuXHRcdGRpdi5zdHlsZS5tYXJnaW5Ub3AgPSAnMCc7XG5cdFx0ZGl2LnN0eWxlLndoaXRlU3BhY2UgPSAncHJlLXdyYXAnO1xuXHRcdGRpdi50ZXh0Q29udGVudCA9IGNvbW1lbnRzO1xuXHRcdHAuYXBwZW5kQ2hpbGQoZGl2KTtcblx0XHRNb3JlYml0cy5zdGF0dXMucm9vdC5hcHBlbmRDaGlsZChwKTtcblx0fTtcblx0LyoqXG5cdCAqIFNpbXBsZSBoZWxwZXIgZnVuY3Rpb24gdG8gY3JlYXRlIGEgc2ltcGxlIG5vZGUuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gVHlwZSBvZiBIVE1MIGVsZW1lbnQuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50IC0gVGV4dCBjb250ZW50LlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW2NvbG9yXSAtIEZvbnQgY29sb3IuXG5cdCAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cblx0ICovXG5cdE1vcmViaXRzLmh0bWxOb2RlID0gKHR5cGUsIGNvbnRlbnQsIGNvbG9yKSA9PiB7XG5cdFx0Y29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG5cdFx0aWYgKGNvbG9yKSB7XG5cdFx0XHRub2RlLnN0eWxlLmNvbG9yID0gY29sb3I7XG5cdFx0fVxuXHRcdG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY29udGVudCkpO1xuXHRcdHJldHVybiBub2RlO1xuXHR9O1xuXHQvKipcblx0ICogQWRkIHNoaWZ0LWNsaWNrIHN1cHBvcnQgZm9yIGNoZWNrYm94ZXMuIFRoZSB3aWtpYml0cyB2ZXJzaW9uXG5cdCAqIChgd2luZG93LmFkZENoZWNrYm94Q2xpY2tIYW5kbGVyc2ApIGhhcyBzb21lIHJlc3RyaWN0aW9ucywgYW5kIGRvZXNuJ3Qgd29ya1xuXHQgKiB3aXRoIGNoZWNrYm94ZXMgaW5zaWRlIGEgc29ydGFibGUgdGFibGUsIHNvIGxldCdzIGJ1aWxkIG91ciBvd24uXG5cdCAqXG5cdCAqIEBwYXJhbSBqUXVlcnlTZWxlY3RvclxuXHQgKiBAcGFyYW0galF1ZXJ5Q29udGV4dFxuXHQgKi9cblx0TW9yZWJpdHMuY2hlY2tib3hTaGlmdENsaWNrU3VwcG9ydCA9IChqUXVlcnlTZWxlY3RvciwgalF1ZXJ5Q29udGV4dCkgPT4ge1xuXHRcdGxldCBsYXN0Q2hlY2tib3ggPSBudWxsO1xuXHRcdGNvbnN0IGNsaWNrSGFuZGxlciA9IGZ1bmN0aW9uIGNsaWNrSGFuZGxlcihldmVudCkge1xuXHRcdFx0Y29uc3QgdGhpc0NiID0gdGhpcztcblx0XHRcdGlmIChldmVudC5zaGlmdEtleSAmJiBsYXN0Q2hlY2tib3ggIT09IG51bGwpIHtcblx0XHRcdFx0Y29uc3QgY2JzID0gJChqUXVlcnlTZWxlY3RvciwgalF1ZXJ5Q29udGV4dCk7IC8vIGNhbid0IGNhY2hlIHRoZW0sIG9idmlvdXNseSwgaWYgd2Ugd2FudCB0byBzdXBwb3J0IHJlc29ydGluZ1xuXHRcdFx0XHRsZXQgaW5kZXggPSAtMTtcblx0XHRcdFx0bGV0IGxhc3RJbmRleCA9IC0xO1xuXHRcdFx0XHRsZXQgaTtcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGNicy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmIChjYnNbaV0gPT09IHRoaXNDYikge1xuXHRcdFx0XHRcdFx0aW5kZXggPSBpO1xuXHRcdFx0XHRcdFx0aWYgKGxhc3RJbmRleCA+IC0xKSB7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoY2JzW2ldID09PSBsYXN0Q2hlY2tib3gpIHtcblx0XHRcdFx0XHRcdGxhc3RJbmRleCA9IGk7XG5cdFx0XHRcdFx0XHRpZiAoaW5kZXggPiAtMSkge1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGluZGV4ID4gLTEgJiYgbGFzdEluZGV4ID4gLTEpIHtcblx0XHRcdFx0XHQvLyBpbnNwaXJlZCBieSB3aWtpYml0c1xuXHRcdFx0XHRcdGNvbnN0IGVuZFN0YXRlID0gdGhpc0NiLmNoZWNrZWQ7XG5cdFx0XHRcdFx0bGV0IHN0YXJ0O1xuXHRcdFx0XHRcdGxldCBmaW5pc2g7XG5cdFx0XHRcdFx0aWYgKGluZGV4IDwgbGFzdEluZGV4KSB7XG5cdFx0XHRcdFx0XHRzdGFydCA9IGluZGV4ICsgMTtcblx0XHRcdFx0XHRcdGZpbmlzaCA9IGxhc3RJbmRleDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0c3RhcnQgPSBsYXN0SW5kZXg7XG5cdFx0XHRcdFx0XHRmaW5pc2ggPSBpbmRleCAtIDE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGZvciAoaSA9IHN0YXJ0OyBpIDw9IGZpbmlzaDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRpZiAoY2JzW2ldLmNoZWNrZWQgIT09IGVuZFN0YXRlKSB7XG5cdFx0XHRcdFx0XHRcdGNic1tpXS5jbGljaygpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bGFzdENoZWNrYm94ID0gdGhpc0NiO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fTtcblx0XHQkKGpRdWVyeVNlbGVjdG9yLCBqUXVlcnlDb250ZXh0KS5vbignY2xpY2snLCBjbGlja0hhbmRsZXIpO1xuXHR9O1xuXHQvKiAqKioqKioqKioqKioqKioqIE1vcmViaXRzLmJhdGNoT3BlcmF0aW9uICoqKioqKioqKioqKioqKiogKi9cblx0LyoqXG5cdCAqIEl0ZXJhdGVzIG92ZXIgYSBncm91cCBvZiBwYWdlcyAob3IgYXJiaXRyYXJ5IG9iamVjdHMpIGFuZCBleGVjdXRlcyBhIHdvcmtlciBmdW5jdGlvblxuXHQgKiBmb3IgZWFjaC5cblx0ICpcblx0ICogYHNldFBhZ2VMaXN0KHBhZ2VMaXN0KWA6IFNldHMgdGhlIGxpc3Qgb2YgcGFnZXMgdG8gd29yayBvbi4gSXQgc2hvdWxkIGJlIGFuXG5cdCAqIGFycmF5IG9mIHBhZ2UgbmFtZXMgc3RyaW5ncy5cblx0ICpcblx0ICogYHNldE9wdGlvbihvcHRpb25OYW1lLCBvcHRpb25WYWx1ZSlgOiBTZXRzIGEga25vd24gb3B0aW9uOlxuXHQgKiAtIGBjaHVua1NpemVgIChpbnRlZ2VyKTogVGhlIHNpemUgb2YgY2h1bmtzIHRvIGJyZWFrIHRoZSBhcnJheSBpbnRvIChkZWZhdWx0XG5cdCAqIDUwKS4gU2V0dGluZyB0aGlzIHRvIGEgc21hbGwgdmFsdWUgKDw1KSBjYW4gY2F1c2UgcHJvYmxlbXMuXG5cdCAqIC0gYHByZXNlcnZlSW5kaXZpZHVhbFN0YXR1c0xpbmVzYCAoYm9vbGVhbik6IEtlZXAgZWFjaCBwYWdlJ3Mgc3RhdHVzIGVsZW1lbnRcblx0ICogdmlzaWJsZSB3aGVuIHdvcmtlciBpcyBjb21wbGV0ZT8gU2VlIG5vdGUgYmVsb3cuXG5cdCAqXG5cdCAqIGBydW4od29ya2VyLCBwb3N0RmluaXNoKWA6IFJ1bnMgdGhlIGNhbGxiYWNrIGB3b3JrZXJgIGZvciBlYWNoIHBhZ2UgaW4gdGhlXG5cdCAqIGxpc3QuICBUaGUgY2FsbGJhY2sgbXVzdCBjYWxsIGB3b3JrZXJTdWNjZXNzYCB3aGVuIHN1Y2NlZWRpbmcsIG9yXG5cdCAqIGB3b3JrZXJGYWlsdXJlYCB3aGVuIGZhaWxpbmcuICBJZiB1c2luZyB7QGxpbmsgTW9yZWJpdHMud2lraS5hcGl9IG9yXG5cdCAqIHtAbGluayBNb3JlYml0cy53aWtpLnBhZ2V9LCB0aGlzIGlzIGVhc2lseSBkb25lIGJ5IHBhc3NpbmcgdGhlc2UgdHdvXG5cdCAqIGZ1bmN0aW9ucyBhcyBwYXJhbWV0ZXJzIHRvIHRoZSBtZXRob2RzIG9uIHRob3NlIG9iamVjdHM6IGZvciBpbnN0YW5jZSxcblx0ICogYHBhZ2Uuc2F2ZShiYXRjaE9wLndvcmtlclN1Y2Nlc3MsIGJhdGNoT3Aud29ya2VyRmFpbHVyZSlgLiAgTWFrZSBzdXJlIHRoZVxuXHQgKiBtZXRob2RzIGFyZSBjYWxsZWQgZGlyZWN0bHkgaWYgc3BlY2lhbCBzdWNjZXNzL2ZhaWx1cmUgY2FzZXMgYXJpc2UuICBJZiB5b3Vcblx0ICogb21pdCB0byBjYWxsIHRoZXNlIG1ldGhvZHMsIHRoZSBiYXRjaCBvcGVyYXRpb24gd2lsbCBzdGFsbCBhZnRlciB0aGUgZmlyc3Rcblx0ICogY2h1bmshICBBbHNvIGVuc3VyZSB0aGF0IGVpdGhlciB3b3JrZXJTdWNjZXNzIG9yIHdvcmtlckZhaWx1cmUgaXMgY2FsbGVkIG5vXG5cdCAqIG1vcmUgdGhhbiBvbmNlLiAgVGhlIHNlY29uZCBjYWxsYmFjayBgcG9zdEZpbmlzaGAgaXMgZXhlY3V0ZWQgd2hlbiB0aGVcblx0ICogZW50aXJlIGJhdGNoIGhhcyBiZWVuIHByb2Nlc3NlZC5cblx0ICpcblx0ICogSWYgdXNpbmcgYHByZXNlcnZlSW5kaXZpZHVhbFN0YXR1c0xpbmVzYCwgeW91IHNob3VsZCB0cnkgdG8gZW5zdXJlIHRoYXQgdGhlXG5cdCAqIGB3b3JrZXJTdWNjZXNzYCBjYWxsYmFjayBoYXMgYWNjZXNzIHRvIHRoZSBwYWdlIHRpdGxlLiAgVGhpcyBpcyBubyBwcm9ibGVtIGZvclxuXHQgKiB7QGxpbmsgTW9yZWJpdHMud2lraS5wYWdlfSBvYmplY3RzLiAgQnV0IHdoZW4gdXNpbmcgdGhlIEFQSSwgcGxlYXNlIHNldCB0aGVcblx0ICogfHBhZ2VOYW1lfCBwcm9wZXJ0eSBvbiB0aGUge0BsaW5rIE1vcmViaXRzLndpa2kuYXBpfSBvYmplY3QuXG5cdCAqXG5cdCAqIFRoZXJlIGFyZSBzYW1wbGUgYmF0Y2hPcGVyYXRpb24gaW1wbGVtZW50YXRpb25zIHVzaW5nIE1vcmViaXRzLndpa2kucGFnZSBpblxuXHQgKiB0d2lua2xlYmF0Y2hkZWxldGUuanMsIHR3aW5rbGViYXRjaHVuZGVsZXRlLmpzLCBhbmQgdHdpbmtsZWJhdGNocHJvdGVjdC5qcy5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzXG5cdCAqIEBjbGFzc1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gW2N1cnJlbnRBY3Rpb25dXG5cdCAqL1xuXHRNb3JlYml0cy5iYXRjaE9wZXJhdGlvbiA9IGZ1bmN0aW9uIChjdXJyZW50QWN0aW9uKSB7XG5cdFx0Y29uc3QgY3R4ID0ge1xuXHRcdFx0Ly8gYmFja2luZyBmaWVsZHMgZm9yIHB1YmxpYyBwcm9wZXJ0aWVzXG5cdFx0XHRwYWdlTGlzdDogbnVsbCxcblx0XHRcdG9wdGlvbnM6IHtcblx0XHRcdFx0Y2h1bmtTaXplOiA1MCxcblx0XHRcdFx0cHJlc2VydmVJbmRpdmlkdWFsU3RhdHVzTGluZXM6IGZhbHNlLFxuXHRcdFx0fSxcblx0XHRcdC8vIGludGVybmFsIGNvdW50ZXJzLCBldGMuXG5cdFx0XHRzdGF0dXNFbGVtZW50OiBuZXcgTW9yZWJpdHMuc3RhdHVzKGN1cnJlbnRBY3Rpb24gfHwgd2luZG93LndnVUxTKCfmiafooYzmibnph4/mk43kvZwnLCAn5Z+36KGM5om55qyh5pON5L2cJykpLFxuXHRcdFx0d29ya2VyOiBudWxsLFxuXHRcdFx0Ly8gZnVuY3Rpb24gdGhhdCBleGVjdXRlcyBmb3IgZWFjaCBpdGVtIGluIHBhZ2VMaXN0XG5cdFx0XHRwb3N0RmluaXNoOiBudWxsLFxuXHRcdFx0Ly8gZnVuY3Rpb24gdGhhdCBleGVjdXRlcyB3aGVuIHRoZSB3aG9sZSBiYXRjaCBoYXMgYmVlbiBwcm9jZXNzZWRcblx0XHRcdGNvdW50U3RhcnRlZDogMCxcblx0XHRcdGNvdW50RmluaXNoZWQ6IDAsXG5cdFx0XHRjb3VudEZpbmlzaGVkU3VjY2VzczogMCxcblx0XHRcdGN1cnJlbnRDaHVua0luZGV4OiAtMSxcblx0XHRcdHBhZ2VDaHVua3M6IFtdLFxuXHRcdFx0cnVubmluZzogZmFsc2UsXG5cdFx0fTtcblx0XHQvLyBzaG91bGRuJ3QgYmUgbmVlZGVkIGJ5IGV4dGVybmFsIHVzZXJzLCBidXQgcHJvdmlkZWQgYW55d2F5IGZvciBtYXhpbXVtIGZsZXhpYmlsaXR5XG5cdFx0dGhpcy5nZXRTdGF0dXNFbGVtZW50ID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGN0eC5zdGF0dXNFbGVtZW50O1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogU2V0cyB0aGUgbGlzdCBvZiBwYWdlcyB0byB3b3JrIG9uLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtBcnJheX0gcGFnZUxpc3QgLSBBcnJheSBvZiBvYmplY3RzIG92ZXIgd2hpY2ggeW91IHdpc2ggdG8gZXhlY3V0ZSB0aGUgd29ya2VyIGZ1bmN0aW9uXG5cdFx0ICogVGhpcyBpcyB1c3VhbGx5IHRoZSBsaXN0IG9mIHBhZ2UgbmFtZXMgKHN0cmluZ3MpLlxuXHRcdCAqL1xuXHRcdHRoaXMuc2V0UGFnZUxpc3QgPSAocGFnZUxpc3QpID0+IHtcblx0XHRcdGN0eC5wYWdlTGlzdCA9IHBhZ2VMaXN0O1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogU2V0cyBhIGtub3duIG9wdGlvbi5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25OYW1lIC0gTmFtZSBvZiB0aGUgb3B0aW9uOlxuXHRcdCAqIC0gY2h1bmtTaXplIChpbnRlZ2VyKTogVGhlIHNpemUgb2YgY2h1bmtzIHRvIGJyZWFrIHRoZSBhcnJheSBpbnRvXG5cdFx0ICogKGRlZmF1bHQgNTApLiBTZXR0aW5nIHRoaXMgdG8gYSBzbWFsbCB2YWx1ZSAoPDUpIGNhbiBjYXVzZSBwcm9ibGVtcy5cblx0XHQgKiAtIHByZXNlcnZlSW5kaXZpZHVhbFN0YXR1c0xpbmVzIChib29sZWFuKTogS2VlcCBlYWNoIHBhZ2UncyBzdGF0dXNcblx0XHQgKiBlbGVtZW50IHZpc2libGUgd2hlbiB3b3JrZXIgaXMgY29tcGxldGU/XG5cdFx0ICogQHBhcmFtIHtudW1iZXJ8Ym9vbGVhbn0gb3B0aW9uVmFsdWUgLSBWYWx1ZSB0byB3aGljaCB0aGUgb3B0aW9uIGlzXG5cdFx0ICogdG8gYmUgc2V0LiBTaG91bGQgYmUgYW4gaW50ZWdlciBmb3IgY2h1bmtTaXplIGFuZCBhIGJvb2xlYW4gZm9yXG5cdFx0ICogcHJlc2VydmVJbmRpdmlkdWFsU3RhdHVzTGluZXMuXG5cdFx0ICovXG5cdFx0dGhpcy5zZXRPcHRpb24gPSAob3B0aW9uTmFtZSwgb3B0aW9uVmFsdWUpID0+IHtcblx0XHRcdGN0eC5vcHRpb25zW29wdGlvbk5hbWVdID0gb3B0aW9uVmFsdWU7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBSdW5zIHRoZSBmaXJzdCBjYWxsYmFjayBmb3IgZWFjaCBwYWdlIGluIHRoZSBsaXN0LlxuXHRcdCAqIFRoZSBjYWxsYmFjayBtdXN0IGNhbGwgd29ya2VyU3VjY2VzcyB3aGVuIHN1Y2NlZWRpbmcsIG9yIHdvcmtlckZhaWx1cmUgd2hlbiBmYWlsaW5nLlxuXHRcdCAqIFJ1bnMgdGhlIG9wdGlvbmFsIHNlY29uZCBjYWxsYmFjayB3aGVuIHRoZSB3aG9sZSBiYXRjaCBoYXMgYmVlbiBwcm9jZXNzZWQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSB3b3JrZXJcblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbcG9zdEZpbmlzaF1cblx0XHQgKi9cblx0XHR0aGlzLnJ1biA9ICh3b3JrZXIsIHBvc3RGaW5pc2gpID0+IHtcblx0XHRcdGlmIChjdHgucnVubmluZykge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3aW5kb3cud2dVTFMoJ+aJuemHj+aTjeS9nOW3suWcqOi/kOihjCcsICfmibnmrKHmk43kvZzlt7LlnKjln7fooYwnKSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGN0eC5ydW5uaW5nID0gdHJ1ZTtcblx0XHRcdGN0eC53b3JrZXIgPSB3b3JrZXI7XG5cdFx0XHRjdHgucG9zdEZpbmlzaCA9IHBvc3RGaW5pc2g7XG5cdFx0XHRjdHguY291bnRTdGFydGVkID0gMDtcblx0XHRcdGN0eC5jb3VudEZpbmlzaGVkID0gMDtcblx0XHRcdGN0eC5jb3VudEZpbmlzaGVkU3VjY2VzcyA9IDA7XG5cdFx0XHRjdHguY3VycmVudENodW5rSW5kZXggPSAtMTtcblx0XHRcdGN0eC5wYWdlQ2h1bmtzID0gW107XG5cdFx0XHRjb25zdCB0b3RhbCA9IGN0eC5wYWdlTGlzdC5sZW5ndGg7XG5cdFx0XHRpZiAoIXRvdGFsKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmluZm8od2luZG93LndnVUxTKCfmsqHmnInmjIflrprpobXpnaInLCAn5rKS5pyJ5oyH5a6a6aCB6Z2iJykpO1xuXHRcdFx0XHRjdHgucnVubmluZyA9IGZhbHNlO1xuXHRcdFx0XHRpZiAoY3R4LnBvc3RGaW5pc2gpIHtcblx0XHRcdFx0XHRjdHgucG9zdEZpbmlzaCgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdC8vIGNodW5rIHBhZ2UgbGlzdCBpbnRvIG1vcmUgbWFuYWdlYWJsZSB1bml0c1xuXHRcdFx0Y3R4LnBhZ2VDaHVua3MgPSBNb3JlYml0cy5hcnJheS5jaHVuayhjdHgucGFnZUxpc3QsIGN0eC5vcHRpb25zLmNodW5rU2l6ZSk7XG5cdFx0XHQvLyBzdGFydCB0aGUgcHJvY2Vzc1xuXHRcdFx0TW9yZWJpdHMud2lraS5hZGRDaGVja3BvaW50KCk7XG5cdFx0XHRjdHguc3RhdHVzRWxlbWVudC5zdGF0dXMoJzAlJyk7XG5cdFx0XHRmblN0YXJ0TmV3Q2h1bmsoKTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIFRvIGJlIGNhbGxlZCBieSB3b3JrZXIgYmVmb3JlIGl0IHRlcm1pbmF0ZXMgc3VjY2Vzc2Z1bGx5LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHsoTW9yZWJpdHMud2lraS5wYWdlfE1vcmViaXRzLndpa2kuYXBpfHN0cmluZyl9IGFyZyAtXG5cdFx0ICogVGhpcyBzaG91bGQgYmUgdGhlIGBNb3JlYml0cy53aWtpLnBhZ2VgIG9yIGBNb3JlYml0cy53aWtpLmFwaWAgb2JqZWN0IHVzZWQgYnkgd29ya2VyXG5cdFx0ICogKGZvciB0aGUgYWRqdXN0bWVudCBvZiBzdGF0dXMgbGluZXMgZW1pdHRlZCBieSB0aGVtKS5cblx0XHQgKiBJZiBubyBNb3JlYml0cy53aWtpLiogb2JqZWN0IGlzIHVzZWQgKGUuZy4geW91J3JlIHVzaW5nIGBtdy5BcGkoKWAgb3Igc29tZXRoaW5nIGVsc2UpLCBhbmRcblx0XHQgKiBgcHJlc2VydmVJbmRpdmlkdWFsU3RhdHVzTGluZXNgIG9wdGlvbiBpcyBvbiwgZ2l2ZSB0aGUgcGFnZSBuYW1lIChzdHJpbmcpIGFzIGFyZ3VtZW50LlxuXHRcdCAqL1xuXHRcdHRoaXMud29ya2VyU3VjY2VzcyA9IChhcmcpID0+IHtcblx0XHRcdGlmIChhcmcgaW5zdGFuY2VvZiBNb3JlYml0cy53aWtpLmFwaSB8fCBhcmcgaW5zdGFuY2VvZiBNb3JlYml0cy53aWtpLnBhZ2UpIHtcblx0XHRcdFx0Ly8gdXBkYXRlIG9yIHJlbW92ZSBzdGF0dXMgbGluZVxuXHRcdFx0XHRjb25zdCBzdGF0ZWxlbSA9IGFyZy5nZXRTdGF0dXNFbGVtZW50KCk7XG5cdFx0XHRcdGlmIChjdHgub3B0aW9ucy5wcmVzZXJ2ZUluZGl2aWR1YWxTdGF0dXNMaW5lcykge1xuXHRcdFx0XHRcdGlmIChhcmcuZ2V0UGFnZU5hbWUgfHwgYXJnLnBhZ2VOYW1lIHx8IChhcmcucXVlcnkgJiYgYXJnLnF1ZXJ5LnRpdGxlKSkge1xuXHRcdFx0XHRcdFx0Ly8gd2Uga25vdyB0aGUgcGFnZSB0aXRsZSAtIGRpc3BsYXkgYSByZWxldmFudCBtZXNzYWdlXG5cdFx0XHRcdFx0XHRjb25zdCBwYWdlTmFtZSA9IGFyZy5nZXRQYWdlTmFtZSA/IGFyZy5nZXRQYWdlTmFtZSgpIDogYXJnLnBhZ2VOYW1lIHx8IGFyZy5xdWVyeS50aXRsZTtcblx0XHRcdFx0XHRcdHN0YXRlbGVtLmluZm8oYOWujOaIkO+8iFtbJHtwYWdlTmFtZX1dXe+8iWApO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHQvLyB3ZSBkb24ndCBrbm93IHRoZSBwYWdlIHRpdGxlIC0ganVzdCBkaXNwbGF5IGEgZ2VuZXJpYyBtZXNzYWdlXG5cdFx0XHRcdFx0XHRzdGF0ZWxlbS5pbmZvKCflrozmiJAnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gcmVtb3ZlIHRoZSBzdGF0dXMgbGluZSBhdXRvbWF0aWNhbGx5IHByb2R1Y2VkIGJ5IE1vcmViaXRzLndpa2kuKlxuXHRcdFx0XHRcdHN0YXRlbGVtLnVubGluaygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnICYmIGN0eC5vcHRpb25zLnByZXNlcnZlSW5kaXZpZHVhbFN0YXR1c0xpbmVzKSB7XG5cdFx0XHRcdG5ldyBNb3JlYml0cy5zdGF0dXMoYXJnLCBg5a6M5oiQ77yIW1ske2FyZ31dXe+8iWApO1xuXHRcdFx0fVxuXHRcdFx0Y3R4LmNvdW50RmluaXNoZWRTdWNjZXNzKys7XG5cdFx0XHRmbkRvbmVPbmUoKTtcblx0XHR9O1xuXHRcdHRoaXMud29ya2VyRmFpbHVyZSA9ICgpID0+IHtcblx0XHRcdGZuRG9uZU9uZSgpO1xuXHRcdH07XG5cdFx0Ly8gcHJpdmF0ZSBmdW5jdGlvbnNcblx0XHRjb25zdCB0aGlzUHJveHkgPSB0aGlzO1xuXHRcdGNvbnN0IGZuU3RhcnROZXdDaHVuayA9ICgpID0+IHtcblx0XHRcdGNvbnN0IGNodW5rID0gY3R4LnBhZ2VDaHVua3NbKytjdHguY3VycmVudENodW5rSW5kZXhdO1xuXHRcdFx0aWYgKCFjaHVuaykge1xuXHRcdFx0XHRyZXR1cm47IC8vIGRvbmUhIHlheVxuXHRcdFx0fVxuXHRcdFx0Ly8gc3RhcnQgd29ya2VycyBmb3IgdGhlIGN1cnJlbnQgY2h1bmtcblx0XHRcdGN0eC5jb3VudFN0YXJ0ZWQgKz0gY2h1bmsubGVuZ3RoO1xuXHRcdFx0Zm9yIChjb25zdCBwYWdlIG9mIGNodW5rKSB7XG5cdFx0XHRcdGN0eC53b3JrZXIocGFnZSwgdGhpc1Byb3h5KTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdGNvbnN0IGZuRG9uZU9uZSA9ICgpID0+IHtcblx0XHRcdGN0eC5jb3VudEZpbmlzaGVkKys7XG5cdFx0XHQvLyB1cGRhdGUgb3ZlcmFsbCBzdGF0dXMgbGluZVxuXHRcdFx0Y29uc3QgdG90YWwgPSBjdHgucGFnZUxpc3QubGVuZ3RoO1xuXHRcdFx0aWYgKGN0eC5jb3VudEZpbmlzaGVkIDwgdG90YWwpIHtcblx0XHRcdFx0Y29uc3QgcHJvZ3Jlc3MgPSBNYXRoLnJvdW5kKCgxMDAgKiBjdHguY291bnRGaW5pc2hlZCkgLyB0b3RhbCk7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LnN0YXR1cyhgJHtwcm9ncmVzc30lYCk7XG5cdFx0XHRcdC8vIHN0YXJ0IGEgbmV3IGNodW5rIGlmIHdlJ3JlIGNsb3NlIGVub3VnaCB0byB0aGUgZW5kIG9mIHRoZSBwcmV2aW91cyBjaHVuaywgYW5kXG5cdFx0XHRcdC8vIHdlIGhhdmVuJ3QgYWxyZWFkeSBzdGFydGVkIHRoZSBuZXh0IG9uZVxuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0Y3R4LmNvdW50RmluaXNoZWQgPj0gY3R4LmNvdW50U3RhcnRlZCAtIE1hdGgubWF4KGN0eC5vcHRpb25zLmNodW5rU2l6ZSAvIDEwLCAyKSAmJlxuXHRcdFx0XHRcdE1hdGguZmxvb3IoY3R4LmNvdW50RmluaXNoZWQgLyBjdHgub3B0aW9ucy5jaHVua1NpemUpID4gY3R4LmN1cnJlbnRDaHVua0luZGV4XG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdGZuU3RhcnROZXdDaHVuaygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGN0eC5jb3VudEZpbmlzaGVkID09PSB0b3RhbCkge1xuXHRcdFx0XHRjb25zdCBzdGF0dXNTdHJpbmcgPSBg5a6M5oiQ77yIJHtjdHguY291bnRGaW5pc2hlZFN1Y2Nlc3N9LyR7Y3R4LmNvdW50RmluaXNoZWR95pON5L2c5oiQ5Yqf5a6M5oiQ77yJYDtcblx0XHRcdFx0aWYgKGN0eC5jb3VudEZpbmlzaGVkU3VjY2VzcyA8IGN0eC5jb3VudEZpbmlzaGVkKSB7XG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQud2FybihzdGF0dXNTdHJpbmcpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmluZm8oc3RhdHVzU3RyaW5nKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoY3R4LnBvc3RGaW5pc2gpIHtcblx0XHRcdFx0XHRjdHgucG9zdEZpbmlzaCgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdE1vcmViaXRzLndpa2kucmVtb3ZlQ2hlY2twb2ludCgpO1xuXHRcdFx0XHRjdHgucnVubmluZyA9IGZhbHNlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gY3R4LmNvdW50RmluaXNoZWQgPiB0b3RhbFxuXHRcdFx0XHQvLyBqdXN0IGZvciBnaWdnbGVzISAod2VsbCwgc2VyaW91cyBkZWJ1Z2dpbmcsIGFjdHVhbGx5KVxuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC53YXJuKFxuXHRcdFx0XHRcdGAke3dpbmRvdy53Z1VMUygn5a6M5oiQ77yI5aSa5omn6KGM5LqGJywgJ+WujOaIkO+8iOWkmuWft+ihjOS6hicpICsgKGN0eC5jb3VudEZpbmlzaGVkIC0gdG90YWwpfeasoe+8iWBcblx0XHRcdFx0KTtcblx0XHRcdFx0TW9yZWJpdHMud2lraS5yZW1vdmVDaGVja3BvaW50KCk7XG5cdFx0XHRcdGN0eC5ydW5uaW5nID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fTtcblx0fTtcblx0LyoqXG5cdCAqIEEgc2ltcGxlIGRyYWdnYWJsZSB3aW5kb3csIG5vdyBhIHdyYXBwZXIgZm9yIGpRdWVyeSBVSSdzIGRpYWxvZyBmZWF0dXJlLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHNcblx0ICogQGNsYXNzXG5cdCAqIEByZXF1aXJlcyBqcXVlcnkudWkuZGlhbG9nXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aFxuXHQgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IC0gVGhlIG1heGltdW0gYWxsb3dhYmxlIGhlaWdodCBmb3IgdGhlIGNvbnRlbnQgYXJlYS5cblx0ICovXG5cdE1vcmViaXRzLnNpbXBsZVdpbmRvdyA9IGZ1bmN0aW9uICh3aWR0aCwgaGVpZ2h0KSB7XG5cdFx0Y29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG5cdFx0Y29udGVudC5jbGFzc05hbWUgPSAnbW9yZWJpdHMtZGlhbG9nLWNvbnRlbnQnO1xuXHRcdGNvbnRlbnQuaWQgPSBgbW9yZWJpdHMtZGlhbG9nLWNvbnRlbnQtJHtNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxZTE1KX1gO1xuXHRcdHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuXHRcdCQodGhpcy5jb250ZW50KS5kaWFsb2coe1xuXHRcdFx0YXV0b09wZW46IGZhbHNlLFxuXHRcdFx0YnV0dG9uczoge1xuXHRcdFx0XHQnUGxhY2Vob2xkZXIgYnV0dG9uJzogKCkgPT4ge30sXG5cdFx0XHR9LFxuXHRcdFx0ZGlhbG9nQ2xhc3M6ICdtb3JlYml0cy1kaWFsb2cnLFxuXHRcdFx0d2lkdGg6IE1hdGgubWluKE51bWJlci5wYXJzZUludCh3aW5kb3cuaW5uZXJXaWR0aCwgMTApLCBOdW1iZXIucGFyc2VJbnQod2lkdGggfHwgODAwLCAxMCkpLFxuXHRcdFx0Ly8gZ2l2ZSBqUXVlcnkgdGhlIGdpdmVuIGhlaWdodCB2YWx1ZSAod2hpY2ggcmVwcmVzZW50cyB0aGUgYW50aWNpcGF0ZWQgaGVpZ2h0IG9mIHRoZSBkaWFsb2cpIGhlcmUsIHNvXG5cdFx0XHQvLyBpdCBjYW4gcG9zaXRpb24gdGhlIGRpYWxvZyBhcHByb3ByaWF0ZWx5XG5cdFx0XHQvLyB0aGUgMjAgcGl4ZWxzIHJlcHJlc2VudHMgYWRqdXN0bWVudCBmb3IgdGhlIGV4dHJhIGhlaWdodCBvZiB0aGUgalF1ZXJ5IGRpYWxvZyBcImNocm9tZVwiLCBjb21wYXJlZFxuXHRcdFx0Ly8gdG8gdGhhdCBvZiB0aGUgb2xkIFNpbXBsZVdpbmRvd1xuXHRcdFx0aGVpZ2h0OiBoZWlnaHQgKyAyMCxcblx0XHRcdGNsb3NlOiAoZXZlbnQpID0+IHtcblx0XHRcdFx0Ly8gZGlhbG9ncyBhbmQgdGhlaXIgY29udGVudCBjYW4gYmUgZGVzdHJveWVkIG9uY2UgY2xvc2VkXG5cdFx0XHRcdCQoZXZlbnQudGFyZ2V0KS5kaWFsb2coJ2Rlc3Ryb3knKS5yZW1vdmUoKTtcblx0XHRcdH0sXG5cdFx0XHRyZXNpemVTdGFydCgpIHtcblx0XHRcdFx0W3RoaXMuc2Nyb2xsYm94XSA9ICQodGhpcykuZmluZCgnLm1vcmViaXRzLXNjcm9sbGJveCcpO1xuXHRcdFx0XHRpZiAodGhpcy5zY3JvbGxib3gpIHtcblx0XHRcdFx0XHR0aGlzLnNjcm9sbGJveC5zdHlsZS5tYXhIZWlnaHQgPSAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRyZXNpemVTdG9wKCkge1xuXHRcdFx0XHR0aGlzLnNjcm9sbGJveCA9IG51bGw7XG5cdFx0XHR9LFxuXHRcdFx0cmVzaXplKCkge1xuXHRcdFx0XHR0aGlzLnN0eWxlLm1heEhlaWdodCA9ICcnO1xuXHRcdFx0XHRpZiAodGhpcy5zY3JvbGxib3gpIHtcblx0XHRcdFx0XHR0aGlzLnNjcm9sbGJveC5zdHlsZS53aWR0aCA9ICcnO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdH0pO1xuXHRcdGNvbnN0ICR3aWRnZXQgPSAkKHRoaXMuY29udGVudCkuZGlhbG9nKCd3aWRnZXQnKTtcblx0XHQvLyBkZWxldGUgdGhlIHBsYWNlaG9sZGVyIGJ1dHRvbiAoaXQncyBvbmx5IHRoZXJlIHNvIHRoZSBidXR0b25wYW5lIGdldHMgY3JlYXRlZClcblx0XHQkd2lkZ2V0LmZpbmQoJ2J1dHRvbicpLmVhY2goKGtleSwgdmFsdWUpID0+IHtcblx0XHRcdHZhbHVlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodmFsdWUpO1xuXHRcdH0pO1xuXHRcdC8vIGFkZCBjb250YWluZXIgZm9yIHRoZSBidXR0b25zIHdlIGFkZCwgYW5kIHRoZSBmb290ZXIgbGlua3MgKGlmIGFueSlcblx0XHRjb25zdCBidXR0b25zcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdGJ1dHRvbnNwYW4uY2xhc3NOYW1lID0gJ21vcmViaXRzLWRpYWxvZy1idXR0b25zJztcblx0XHRjb25zdCBsaW5rc3NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0bGlua3NzcGFuLmNsYXNzTmFtZSA9ICdtb3JlYml0cy1kaWFsb2ctZm9vdGVybGlua3MnO1xuXHRcdCR3aWRnZXQuZmluZCgnLnVpLWRpYWxvZy1idXR0b25wYW5lJykuYXBwZW5kKGJ1dHRvbnNwYW4sIGxpbmtzc3Bhbik7XG5cdFx0Ly8gcmVzaXplIHRoZSBzY3JvbGxib3ggd2l0aCB0aGUgZGlhbG9nLCBpZiBvbmUgaXMgcHJlc2VudFxuXHRcdCR3aWRnZXQucmVzaXphYmxlKCdvcHRpb24nLCAnYWxzb1Jlc2l6ZScsIGAjJHt0aGlzLmNvbnRlbnQuaWR9IC5tb3JlYml0cy1zY3JvbGxib3gsICMke3RoaXMuY29udGVudC5pZH1gKTtcblx0fTtcblx0TW9yZWJpdHMuc2ltcGxlV2luZG93LnByb3RvdHlwZSA9IHtcblx0XHRidXR0b25zOiBbXSxcblx0XHRoZWlnaHQ6IDYwMCxcblx0XHRoYXNGb290ZXJMaW5rczogZmFsc2UsXG5cdFx0c2NyaXB0TmFtZTogbnVsbCxcblx0XHQvKipcblx0XHQgKiBGb2N1c2VzIHRoZSBkaWFsb2cuIFRoaXMgbWlnaHQgd29yaywgb3Igb24gdGhlIGNvbnRyYXJ5LCBpdCBtaWdodCBub3QuXG5cdFx0ICpcblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc2ltcGxlV2luZG93fVxuXHRcdCAqL1xuXHRcdGZvY3VzKCkge1xuXHRcdFx0JCh0aGlzLmNvbnRlbnQpLmRpYWxvZygnbW92ZVRvVG9wJyk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIENsb3NlcyB0aGUgZGlhbG9nLiBJZiB0aGlzIGlzIHNldCBhcyBhbiBldmVudCBoYW5kbGVyLCBpdCB3aWxsIHN0b3AgdGhlIGV2ZW50XG5cdFx0ICogZnJvbSBkb2luZyBhbnl0aGluZyBtb3JlLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtldmVudH0gW2V2ZW50XVxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zaW1wbGVXaW5kb3d9XG5cdFx0ICovXG5cdFx0Y2xvc2UoZXZlbnQpIHtcblx0XHRcdGlmIChldmVudCkge1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0fVxuXHRcdFx0JCh0aGlzLmNvbnRlbnQpLmRpYWxvZygnY2xvc2UnKTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogU2hvd3MgdGhlIGRpYWxvZy4gQ2FsbGluZyBkaXNwbGF5KCkgb24gYSBkaWFsb2cgdGhhdCBoYXMgcHJldmlvdXNseSBiZWVuIGNsb3NlZFxuXHRcdCAqIG1pZ2h0IHdvcmssIGJ1dCBpdCBpcyBub3QgZ3VhcmFudGVlZC5cblx0XHQgKlxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zaW1wbGVXaW5kb3d9XG5cdFx0ICovXG5cdFx0ZGlzcGxheSgpIHtcblx0XHRcdGlmICh0aGlzLnNjcmlwdE5hbWUpIHtcblx0XHRcdFx0Y29uc3QgJHdpZGdldCA9ICQodGhpcy5jb250ZW50KS5kaWFsb2coJ3dpZGdldCcpO1xuXHRcdFx0XHQkd2lkZ2V0LmZpbmQoJy5tb3JlYml0cy1kaWFsb2ctc2NyaXB0bmFtZScpLnJlbW92ZSgpO1xuXHRcdFx0XHRjb25zdCBzY3JpcHRuYW1lc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRcdFx0c2NyaXB0bmFtZXNwYW4uY2xhc3NOYW1lID0gJ21vcmViaXRzLWRpYWxvZy1zY3JpcHRuYW1lJztcblx0XHRcdFx0c2NyaXB0bmFtZXNwYW4udGV4dENvbnRlbnQgPSBgJHt0aGlzLnNjcmlwdE5hbWV9IFxcdTAwQjcgYDsgLy8gVSswMEI3IE1JRERMRSBET1QgPSAmbWlkZG90O1xuXHRcdFx0XHQkd2lkZ2V0LmZpbmQoJy51aS1kaWFsb2ctdGl0bGUnKS5wcmVwZW5kKHNjcmlwdG5hbWVzcGFuKTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IGRpYWxvZyA9ICQodGhpcy5jb250ZW50KS5kaWFsb2coJ29wZW4nKTtcblx0XHRcdGlmICh3aW5kb3cuc2V0dXBUb29sdGlwcyAmJiB3aW5kb3cucGcgJiYgd2luZG93LnBnLnJlICYmIHdpbmRvdy5wZy5yZS5kaWZmKSB7XG5cdFx0XHRcdC8vIHRpZSBpbiB3aXRoIE5BVlBPUFxuXHRcdFx0XHRkaWFsb2cucGFyZW50KClbMF0ucmFuU2V0dXBUb29sdGlwc0FscmVhZHkgPSBmYWxzZTtcblx0XHRcdFx0d2luZG93LnNldHVwVG9vbHRpcHMoZGlhbG9nLnBhcmVudCgpWzBdKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuc2V0SGVpZ2h0KHRoaXMuaGVpZ2h0KTsgLy8gaW5pdCBoZWlnaHQgYWxnb3JpdGhtXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIFNldHMgdGhlIGRpYWxvZyB0aXRsZS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZVxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zaW1wbGVXaW5kb3d9XG5cdFx0ICovXG5cdFx0c2V0VGl0bGUodGl0bGUpIHtcblx0XHRcdCQodGhpcy5jb250ZW50KS5kaWFsb2coJ29wdGlvbicsICd0aXRsZScsIHRpdGxlKTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogU2V0cyB0aGUgc2NyaXB0IG5hbWUsIGFwcGVhcmluZyBhcyBhIHByZWZpeCB0byB0aGUgdGl0bGUgdG8gaGVscCB1c2VycyBkZXRlcm1pbmUgd2hpY2hcblx0XHQgKiB1c2VyIHNjcmlwdCBpcyBwcm9kdWNpbmcgd2hpY2ggZGlhbG9nLiBGb3IgaW5zdGFuY2UsIFR3aW5rbGUgbW9kdWxlcyBzZXQgdGhpcyB0byBcIlR3aW5rbGVcIi5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLnNpbXBsZVdpbmRvd31cblx0XHQgKi9cblx0XHRzZXRTY3JpcHROYW1lKG5hbWUpIHtcblx0XHRcdHRoaXMuc2NyaXB0TmFtZSA9IG5hbWU7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIFNldHMgdGhlIGRpYWxvZyB3aWR0aC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aFxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zaW1wbGVXaW5kb3d9XG5cdFx0ICovXG5cdFx0c2V0V2lkdGgod2lkdGgpIHtcblx0XHRcdCQodGhpcy5jb250ZW50KS5kaWFsb2coJ29wdGlvbicsICd3aWR0aCcsIHdpZHRoKTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogU2V0cyB0aGUgZGlhbG9nJ3MgbWF4aW11bSBoZWlnaHQuIFRoZSBkaWFsb2cgd2lsbCBhdXRvLXNpemUgdG8gZml0IGl0cyBjb250ZW50cyxcblx0XHQgKiBidXQgdGhlIGNvbnRlbnQgYXJlYSB3aWxsIGdyb3cgbm8gbGFyZ2VyIHRoYW4gdGhlIGhlaWdodCBnaXZlbiBoZXJlLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodFxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zaW1wbGVXaW5kb3d9XG5cdFx0ICovXG5cdFx0c2V0SGVpZ2h0KGhlaWdodCkge1xuXHRcdFx0dGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG5cdFx0XHQvLyBmcm9tIGRpc3BsYXkgdGltZSBvbndhcmRzLCBsZXQgdGhlIGJyb3dzZXIgZGV0ZXJtaW5lIHRoZSBvcHRpbXVtIGhlaWdodCxcblx0XHRcdC8vIGFuZCBpbnN0ZWFkIGxpbWl0IHRoZSBoZWlnaHQgYXQgdGhlIGdpdmVuIHZhbHVlXG5cdFx0XHQvLyBub3RlIHRoYXQgdGhlIGdpdmVuIGhlaWdodCB3aWxsIGV4Y2x1ZGUgdGhlIGFwcHJveC4gMjBweCB0aGF0IHRoZSBqUXVlcnkgVUlcblx0XHRcdC8vIGNocm9tZSBoYXMgaW4gaGVpZ2h0IGluIGFkZGl0aW9uIHRvIHRoZSBoZWlnaHQgb2YgYW4gZXF1aXZhbGVudCBcImNsYXNzaWNcIlxuXHRcdFx0Ly8gTW9yZWJpdHMuc2ltcGxlV2luZG93XG5cdFx0XHRpZiAoXG5cdFx0XHRcdE51bWJlci5wYXJzZUludChnZXRDb21wdXRlZFN0eWxlKCQodGhpcy5jb250ZW50KS5kaWFsb2coJ3dpZGdldCcpWzBdLCBudWxsKS5oZWlnaHQsIDEwKSA+XG5cdFx0XHRcdHdpbmRvdy5pbm5lckhlaWdodFxuXHRcdFx0KSB7XG5cdFx0XHRcdCQodGhpcy5jb250ZW50KVxuXHRcdFx0XHRcdC5kaWFsb2coJ29wdGlvbicsICdoZWlnaHQnLCB3aW5kb3cuaW5uZXJIZWlnaHQgLSAyKVxuXHRcdFx0XHRcdC5kaWFsb2coJ29wdGlvbicsICdwb3NpdGlvbicsICd0b3AnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCQodGhpcy5jb250ZW50KS5kaWFsb2coJ29wdGlvbicsICdoZWlnaHQnLCAnYXV0bycpO1xuXHRcdFx0fVxuXHRcdFx0JCh0aGlzLmNvbnRlbnQpLmRpYWxvZygnd2lkZ2V0JykuZmluZCgnLm1vcmViaXRzLWRpYWxvZy1jb250ZW50JylbMF0uc3R5bGUubWF4SGVpZ2h0ID0gYCR7TnVtYmVyLnBhcnNlSW50KFxuXHRcdFx0XHR0aGlzLmhlaWdodCAtIDMwLFxuXHRcdFx0XHQxMFxuXHRcdFx0KX1weGA7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIFNldHMgdGhlIGNvbnRlbnQgb2YgdGhlIGRpYWxvZyB0byB0aGUgZ2l2ZW4gZWxlbWVudCBub2RlLCB1c3VhbGx5IGZyb20gcmVuZGVyaW5nXG5cdFx0ICogYSB7QGxpbmsgTW9yZWJpdHMucXVpY2tGb3JtfS5cblx0XHQgKiBSZS1lbnVtZXJhdGVzIHRoZSBmb290ZXIgYnV0dG9ucywgYnV0IGxlYXZlcyB0aGUgZm9vdGVyIGxpbmtzIGFzIHRoZXkgYXJlLlxuXHRcdCAqIEJlIHN1cmUgdG8gY2FsbCB0aGlzIGF0IGxlYXN0IG9uY2UgYmVmb3JlIHRoZSBkaWFsb2cgaXMgZGlzcGxheWVkLi4uXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250ZW50XG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLnNpbXBsZVdpbmRvd31cblx0XHQgKi9cblx0XHRzZXRDb250ZW50KGNvbnRlbnQpIHtcblx0XHRcdHRoaXMucHVyZ2VDb250ZW50KCk7XG5cdFx0XHR0aGlzLmFkZENvbnRlbnQoY29udGVudCk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEFkZHMgdGhlIGdpdmVuIGVsZW1lbnQgbm9kZSB0byB0aGUgZGlhbG9nIGNvbnRlbnQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250ZW50XG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLnNpbXBsZVdpbmRvd31cblx0XHQgKi9cblx0XHRhZGRDb250ZW50KGNvbnRlbnQpIHtcblx0XHRcdHRoaXMuY29udGVudC5hcHBlbmRDaGlsZChjb250ZW50KTtcblx0XHRcdC8vIGxvb2sgZm9yIHN1Ym1pdCBidXR0b25zIGluIHRoZSBjb250ZW50LCBoaWRlIHRoZW0sIGFuZCBhZGQgYSBwcm94eSBidXR0b24gdG8gdGhlIGJ1dHRvbiBwYW5lXG5cdFx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRcdCQodGhpcy5jb250ZW50KVxuXHRcdFx0XHQuZmluZCgnaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSwgYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKVxuXHRcdFx0XHQuZWFjaCgoa2V5LCB2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdHZhbHVlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdFx0Y29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdFx0XHRcdFx0aWYgKHZhbHVlLmhhc0F0dHJpYnV0ZSgndmFsdWUnKSkge1xuXHRcdFx0XHRcdFx0YnV0dG9uLnRleHRDb250ZW50ID0gdmFsdWUuZ2V0QXR0cmlidXRlKCd2YWx1ZScpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAodmFsdWUudGV4dENvbnRlbnQpIHtcblx0XHRcdFx0XHRcdGJ1dHRvbi50ZXh0Q29udGVudCA9IHZhbHVlLnRleHRDb250ZW50O1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRidXR0b24udGV4dENvbnRlbnQgPSAn5o+Q5LqkJztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnV0dG9uLmNsYXNzTmFtZSA9IHZhbHVlLmNsYXNzTmFtZSB8fCAnc3VibWl0QnV0dG9uUHJveHknO1xuXHRcdFx0XHRcdC8vIGhlcmUgaXMgYW4gaW5zdGFuY2Ugb2YgY2hlYXAgY29kaW5nLCBwcm9iYWJseSBhIG1lbW9yeS11c2FnZSBoaXQgaW4gdXNpbmcgYSBjbG9zdXJlIGhlcmVcblx0XHRcdFx0XHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdFx0XHRcdCdjbGljaycsXG5cdFx0XHRcdFx0XHQoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHZhbHVlLmNsaWNrKCk7XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0ZmFsc2Vcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdHNlbGYuYnV0dG9uc1tzZWxmLmJ1dHRvbnMubGVuZ3RoXSA9IGJ1dHRvbjtcblx0XHRcdFx0fSk7XG5cdFx0XHQvLyByZW1vdmUgYWxsIGJ1dHRvbnMgZnJvbSB0aGUgYnV0dG9uIHBhbmUgYW5kIHJlLWFkZCB0aGVtXG5cdFx0XHRpZiAodGhpcy5idXR0b25zLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0JCh0aGlzLmNvbnRlbnQpXG5cdFx0XHRcdFx0LmRpYWxvZygnd2lkZ2V0Jylcblx0XHRcdFx0XHQuZmluZCgnLm1vcmViaXRzLWRpYWxvZy1idXR0b25zJylcblx0XHRcdFx0XHQuZW1wdHkoKVxuXHRcdFx0XHRcdC5hcHBlbmQodGhpcy5idXR0b25zKVswXVxuXHRcdFx0XHRcdC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtZW1wdHknKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCQodGhpcy5jb250ZW50KVxuXHRcdFx0XHRcdC5kaWFsb2coJ3dpZGdldCcpXG5cdFx0XHRcdFx0LmZpbmQoJy5tb3JlYml0cy1kaWFsb2ctYnV0dG9ucycpWzBdXG5cdFx0XHRcdFx0LnNldEF0dHJpYnV0ZSgnZGF0YS1lbXB0eScsICdkYXRhLWVtcHR5Jyk7IC8vIHVzZWQgYnkgQ1NTXG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogUmVtb3ZlcyBhbGwgY29udGVudHMgZnJvbSB0aGUgZGlhbG9nLCBiYXJyaW5nIGFueSBmb290ZXIgbGlua3MuXG5cdFx0ICpcblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc2ltcGxlV2luZG93fVxuXHRcdCAqL1xuXHRcdHB1cmdlQ29udGVudCgpIHtcblx0XHRcdHRoaXMuYnV0dG9ucyA9IFtdO1xuXHRcdFx0Ly8gZGVsZXRlIGFsbCBidXR0b25zIGluIHRoZSBidXR0b25wYW5lXG5cdFx0XHQkKHRoaXMuY29udGVudCkuZGlhbG9nKCd3aWRnZXQnKS5maW5kKCcubW9yZWJpdHMtZGlhbG9nLWJ1dHRvbnMnKS5lbXB0eSgpO1xuXHRcdFx0d2hpbGUgKHRoaXMuY29udGVudC5oYXNDaGlsZE5vZGVzKCkpIHtcblx0XHRcdFx0dGhpcy5jb250ZW50LnJlbW92ZUNoaWxkKHRoaXMuY29udGVudC5maXJzdENoaWxkKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogQWRkcyBhIGxpbmsgaW4gdGhlIGJvdHRvbS1yaWdodCBjb3JuZXIgb2YgdGhlIGRpYWxvZy5cblx0XHQgKiBUaGlzIGNhbiBiZSB1c2VkIHRvIHByb3ZpZGUgaGVscCBvciBwb2xpY3kgbGlua3MuXG5cdFx0ICogRm9yIGV4YW1wbGUsIFR3aW5rbGUncyBDU0QgbW9kdWxlIGFkZHMgYSBsaW5rIHRvIHRoZSBDU0QgcG9saWN5IHBhZ2UsXG5cdFx0ICogYXMgd2VsbCBhcyBhIGxpbmsgdG8gVHdpbmtsZSdzIGRvY3VtZW50YXRpb24uXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIERpc3BsYXkgdGV4dC5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gd2lraVBhZ2UgLSBMaW5rIHRhcmdldC5cblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtwcmVwPWZhbHNlXSAtIFNldCB0cnVlIHRvIHByZXBlbmQgcmF0aGVyIHRoYW4gYXBwZW5kLlxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zaW1wbGVXaW5kb3d9XG5cdFx0ICovXG5cdFx0YWRkRm9vdGVyTGluayh0ZXh0LCB3aWtpUGFnZSwgcHJlcCkge1xuXHRcdFx0Y29uc3QgJGZvb3RlcmxpbmtzID0gJCh0aGlzLmNvbnRlbnQpLmRpYWxvZygnd2lkZ2V0JykuZmluZCgnLm1vcmViaXRzLWRpYWxvZy1mb290ZXJsaW5rcycpO1xuXHRcdFx0aWYgKHRoaXMuaGFzRm9vdGVyTGlua3MpIHtcblx0XHRcdFx0Y29uc3QgYnVsbGV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdFx0XHRidWxsZXQudGV4dENvbnRlbnQgPSAnIFxcdTIwMjIgJzsgLy8gVSsyMDIyIEJVTExFVFxuXHRcdFx0XHRpZiAocHJlcCkge1xuXHRcdFx0XHRcdCRmb290ZXJsaW5rcy5wcmVwZW5kKGJ1bGxldCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0JGZvb3RlcmxpbmtzLmFwcGVuZChidWxsZXQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXHRcdFx0bGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBtdy51dGlsLmdldFVybCh3aWtpUGFnZSkpO1xuXHRcdFx0bGluay5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgd2lraVBhZ2UpO1xuXHRcdFx0bGluay5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcblx0XHRcdGxpbmsuc2V0QXR0cmlidXRlKCdyZWwnLCAnbm9vcGVuZXIgbm9yZWZlcnJlcicpO1xuXHRcdFx0bGluay50ZXh0Q29udGVudCA9IHRleHQ7XG5cdFx0XHRpZiAocHJlcCkge1xuXHRcdFx0XHQkZm9vdGVybGlua3MucHJlcGVuZChsaW5rKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCRmb290ZXJsaW5rcy5hcHBlbmQobGluayk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmhhc0Zvb3RlckxpbmtzID0gdHJ1ZTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogU2V0cyB3aGV0aGVyIHRoZSB3aW5kb3cgc2hvdWxkIGJlIG1vZGFsIG9yIG5vdC4gTW9kYWwgZGlhbG9ncyBjcmVhdGVcblx0XHQgKiBhbiBvdmVybGF5IGJlbG93IHRoZSBkaWFsb2cgYnV0IGFib3ZlIG90aGVyIHBhZ2UgZWxlbWVudHMuIFRoaXNcblx0XHQgKiBtdXN0IGJlIHVzZWQgKGlmIG5lY2Vzc2FyeSkgYmVmb3JlIGNhbGxpbmcgZGlzcGxheSgpLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBbbW9kYWw9ZmFsc2VdIC0gSWYgc2V0IHRvIHRydWUsIG90aGVyIGl0ZW1zIG9uIHRoZVxuXHRcdCAqIHBhZ2Ugd2lsbCBiZSBkaXNhYmxlZCwgaS5lLiwgY2Fubm90IGJlIGludGVyYWN0ZWQgd2l0aC5cblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc2ltcGxlV2luZG93fVxuXHRcdCAqL1xuXHRcdHNldE1vZGFsaXR5KG1vZGFsKSB7XG5cdFx0XHQkKHRoaXMuY29udGVudCkuZGlhbG9nKCdvcHRpb24nLCAnbW9kYWwnLCBtb2RhbCk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHR9O1xuXHQvKipcblx0ICogRW5hYmxlcyBvciBkaXNhYmxlcyBhbGwgZm9vdGVyIGJ1dHRvbnMgb24gYWxsIHtAbGluayBNb3JlYml0cy5zaW1wbGVXaW5kb3d9cyBpbiB0aGUgY3VycmVudCBwYWdlLlxuXHQgKiBUaGlzIHNob3VsZCBiZSBjYWxsZWQgd2l0aCBgZmFsc2VgIHdoZW4gdGhlIGJ1dHRvbihzKSBiZWNvbWUgaXJyZWxldmFudCAoZS5nLiBqdXN0IGJlZm9yZVxuXHQgKiB7QGxpbmsgTW9yZWJpdHMuc3RhdHVzLmluaXR9IGlzIGNhbGxlZCkuXG5cdCAqIFRoaXMgaXMgbm90IGFuIGluc3RhbmNlIG1ldGhvZCBzbyB0aGF0IGNvbnN1bWVycyBkb24ndCBoYXZlIHRvIGtlZXAgYSByZWZlcmVuY2UgdG8gdGhlXG5cdCAqIG9yaWdpbmFsIGBNb3JlYml0cy5zaW1wbGVXaW5kb3dgIG9iamVjdCBzaXR0aW5nIGFyb3VuZCBzb21ld2hlcmUuIEFueXdheSwgbW9zdCBvZiB0aGUgdGltZVxuXHQgKiB0aGVyZSB3aWxsIG9ubHkgYmUgb25lIGBNb3JlYml0cy5zaW1wbGVXaW5kb3dgIG9wZW4sIHNvIHRoaXMgc2hvdWxkbid0IG1hdHRlci5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnNpbXBsZVdpbmRvd1xuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IGVuYWJsZWRcblx0ICovXG5cdE1vcmViaXRzLnNpbXBsZVdpbmRvdy5zZXRCdXR0b25zRW5hYmxlZCA9IChlbmFibGVkKSA9PiB7XG5cdFx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdFx0JGJvZHkuZmluZCgnLm1vcmViaXRzLWRpYWxvZy1idXR0b25zIGJ1dHRvbicpLnByb3AoJ2Rpc2FibGVkJywgIWVuYWJsZWQpO1xuXHR9O1xufSkoalF1ZXJ5KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUEsNkZBQUFBLFNBQUE7QUFBQTtBQUNBLFFBQUksUUFBUSxTQUFVLElBQUk7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QUFxQjtBQUM5QzBuQixXQUFLaGhCLGNBQWMvSjtBQUNuQixVQUFJazVCLE1BQU07QUFDVEMscUJBQWF0VSxRQUFRa0csSUFBSTtNQUMxQixPQUFPO0FBQ05vTyxxQkFBYWozQixPQUFPNm9CLElBQUk7TUFDekI7QUFDQSxXQUFLOE0saUJBQWlCO0FBQ3RCLGFBQU87SUFDUjs7Ozs7Ozs7OztJQVVBd0IsWUFBWUMsT0FBTztBQUNsQjE5QixRQUFFLEtBQUt3RSxPQUFPLEVBQUV3MkIsT0FBTyxVQUFVLFNBQVMwQyxLQUFLO0FBQy9DLGFBQU87SUFDUjtFQUNEO0FBWUF6OUIsV0FBUzQ2QixhQUFhOEMsb0JBQXFCQyxhQUFZO0FBQ3RELFVBQU1uUixRQUFRenNCLEVBQUUsTUFBTTtBQUN0QnlzQixVQUFNcGYsS0FBSyxpQ0FBaUMsRUFBRTBULEtBQUssWUFBWSxDQUFDNmMsT0FBTztFQUN4RTtBQUNELEdBQUdDLE1BQU07IiwKICAibmFtZXMiOiBbIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiU3ltYm9sIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiZG9jdW1lbnQiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJUeXBlRXJyb3IiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiSlNPTiIsICJOdW1iZXIiLCAiU3ludGF4RXJyb3IiLCAiTm9kZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgIm1vcmViaXRzIiwgIiQiLCAiTW9yZWJpdHMiLCAid2luZG93IiwgImwxMG4iLCAicmVkaXJlY3RUYWdBbGlhc2VzIiwgInNpZ25hdHVyZVRpbWVzdGFtcEZvcm1hdCIsICJzdHIiLCAicmd4VVRDIiwgInJneENTVCIsICJtYXRjaCIsICJleGVjIiwgIm1hdGNoQ1NUIiwgIm1vbnRoIiwgImRhdGUiLCAibG9jYWxlRGF0YSIsICJtb250aHMiLCAiaW5kZXhPZiIsICJ1c2VySXNJbkdyb3VwIiwgImdyb3VwIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiaW5jbHVkZXMiLCAidXNlcklzU3lzb3AiLCAic2FuaXRpemVJUHY2IiwgImFkZHJlc3MiLCAiY29uc29sZSIsICJ3YXJuIiwgImlwIiwgImlzUGFnZVJlZGlyZWN0IiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAicGFnZU5hbWVOb3JtIiwgInJlcGxhY2UiLCAicGFnZU5hbWVSZWdleCIsICJwYWdlTmFtZSIsICJmaXJzdENoYXIiLCAicmVtYWluZGVyIiwgInN0cmluZyIsICJlc2NhcGVSZWdFeHAiLCAic2xpY2UiLCAiVGl0bGUiLCAicGhwQ2hhclRvVXBwZXIiLCAidG9Mb3dlckNhc2UiLCAiY29uY2F0IiwgImNyZWF0ZUh0bWwiLCAiaW5wdXQiLCAiZnJhZ21lbnQiLCAiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsICJnZW5lcmF0ZUFycmF5IiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJlbGVtZW50IiwgInZhbHVlIiwgIk5vZGUiLCAiYXBwZW5kQ2hpbGQiLCAiX2l0ZXJhdG9yMiIsICJwYXJzZUhUTUwiLCAicmVuZGVyV2lraWxpbmtzIiwgIl9zdGVwMiIsICJub2RlIiwgImVyciIsICJlIiwgImYiLCAidGV4dCIsICJ1YiIsICJ1bmJpbmRlciIsICJ1bmJpbmQiLCAiY29udGVudCIsICJfIiwgInRhcmdldCIsICJ0ZXh0XyIsICJ1dGlsIiwgImdldFVybCIsICJyZWJpbmQiLCAibmFtZXNwYWNlUmVnZXgiLCAibmFtZXNwYWNlcyIsICJhbGlhc2VzIiwgInJlZ2V4IiwgIl9pIiwgIl9PYmplY3QkZW50cmllcyIsICJPYmplY3QiLCAiZW50cmllcyIsICJsZW5ndGgiLCAibmFtZSIsICJudW1iZXIiLCAibWFwIiwgImNoYXIiLCAiam9pbiIsICJxdWlja0Zvcm0iLCAiZXZlbnQiLCAiZXZlbnRUeXBlIiwgInJvb3QiLCAidHlwZSIsICJwcm90b3R5cGUiLCAicmVuZGVyIiwgInJldCIsICJuYW1lcyIsICJhcHBlbmQiLCAiZGF0YSIsICJjaGlsZHMiLCAiaWQiLCAiY2hpbGQiLCAiaW50ZXJuYWxTdWJncm91cElkIiwgImN1cnJlbnROb2RlIiwgImNvbXB1dGUiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAiaW5JZCIsICJjaGlsZENvbnRhaW5lciIsICJsYWJlbCIsICJhZG1pbm9ubHkiLCAiaSIsICJjdXJyZW50IiwgInN1Ym5vZGUiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzc05hbWUiLCAic2V0QXR0cmlidXRlIiwgImFkZEV2ZW50TGlzdGVuZXIiLCAic2VsZWN0IiwgIm11bHRpcGxlIiwgInNpemUiLCAiZGlzYWJsZWQiLCAibGlzdCIsICJ2YWx1ZXMiLCAic2VsZWN0ZWQiLCAiaGlkZGVuIiwgImNyZWF0ZVRleHROb2RlIiwgImN1cklkIiwgImN1ckRpdiIsICJ0b29sdGlwIiwgImdlbmVyYXRlVG9vbHRpcCIsICJjaGVja2VkIiwgInN0eWxlIiwgInN1Ymdyb3VwIiwgInRtcGdyb3VwIiwgInN1Ymdyb3VwUmF3IiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgImVsIiwgIm5ld0VsIiwgInNob3duIiwgInBhcmVudE5vZGUiLCAiZm9ybSIsICJyZW1vdmVDaGlsZCIsICJzaGlmdENsaWNrU3VwcG9ydCIsICJjaGVja2JveFNoaWZ0Q2xpY2tTdXBwb3J0IiwgImdldEVsZW1lbnRzIiwgInBsYWNlaG9sZGVyIiwgIl9pMiIsICJfYXJyIiwgImF0dCIsICJfaTMiLCAiX2FycjIiLCAiX2k0IiwgIl9hcnIzIiwgIm1pbiIsICJtYXgiLCAiTnVtYmVyIiwgIlBPU0lUSVZFX0lORklOSVRZIiwgImxpc3ROb2RlIiwgIm1vcmUiLCAibmV3Tm9kZSIsICJzdWJsaXN0IiwgImFyZWEiLCAiY291bnRlciIsICJzdG9wUHJvcGFnYXRpb24iLCAibW9yZUJ1dHRvbiIsICJzdWJsYWJlbCIsICJyZW1vdmUiLCAibWF4bGVuZ3RoIiwgImVsZW0iLCAibW9yZWJ1dHRvbiIsICJsaXN0bm9kZSIsICJub2RlXyIsICJpbnB1dG5vZGUiLCAicmVtb3ZlQXR0cmlidXRlIiwgInJlbW92ZUJ1dHRvbiIsICJyZXN1bHQiLCAibGFiZWxFbGVtZW50IiwgImNvbHMiLCAicm93cyIsICJyZXF1aXJlZCIsICJyZWFkb25seSIsICJFcnJvciIsICJ0b1N0cmluZyIsICJleHRyYSIsICIkZGF0YSIsICJ0b29sdGlwQnV0dG9uIiwgInRpdGxlIiwgInBvc2l0aW9uIiwgIm15IiwgImF0IiwgImNvbGxpc2lvbiIsICJ0b29sdGlwQ2xhc3MiLCAiZ2V0SW5wdXREYXRhIiwgIl9pdGVyYXRvcjUiLCAiZWxlbWVudHMiLCAiX3N0ZXA1IiwgImZpZWxkIiwgImZpZWxkTmFtZU5vcm0iLCAiZGF0YXNldCIsICJzaW5nbGUiLCAidmFsIiwgInRyaW0iLCAiZmllbGROYW1lIiwgIiRmb3JtIiwgImVzY2FwZVNlbGVjdG9yIiwgIiRlbGVtZW50cyIsICJmaW5kIiwgInRvQXJyYXkiLCAiZ2V0Q2hlY2tib3hPclJhZGlvIiwgImVsZW1lbnRBcnJheSIsICJmb3VuZCIsICJmaWx0ZXIiLCAiZ2V0RWxlbWVudENvbnRhaW5lciIsICJIVE1MRmllbGRTZXRFbGVtZW50IiwgIkhUTUxEaXZFbGVtZW50IiwgIkhUTUxIZWFkaW5nRWxlbWVudCIsICJnZXRFbGVtZW50TGFiZWxPYmplY3QiLCAiSFRNTFRleHRBcmVhRWxlbWVudCIsICJnZXRFbGVtZW50TGFiZWwiLCAiZmlyc3RDaGlsZCIsICJ0ZXh0Q29udGVudCIsICJzZXRFbGVtZW50TGFiZWwiLCAibGFiZWxUZXh0IiwgIm92ZXJyaWRlRWxlbWVudExhYmVsIiwgInRlbXBvcmFyeUxhYmVsVGV4dCIsICJoYXNBdHRyaWJ1dGUiLCAicmVzZXRFbGVtZW50TGFiZWwiLCAiZ2V0QXR0cmlidXRlIiwgInNldEVsZW1lbnRWaXNpYmlsaXR5IiwgInZpc2liaWxpdHkiLCAidG9nZ2xlIiwgInNldEVsZW1lbnRUb29sdGlwVmlzaWJpbGl0eSIsICJIVE1MRm9ybUVsZW1lbnQiLCAiZ2V0Q2hlY2tlZCIsICJyZXR1cm5BcnJheSIsICJIVE1MU2VsZWN0RWxlbWVudCIsICJvcHRpb25zIiwgIkhUTUxJbnB1dEVsZW1lbnQiLCAiZ2V0VW5jaGVja2VkIiwgImlzSVB2NkFkZHJlc3MiLCAidG9VcHBlckNhc2UiLCAiYWJicmV2UG9zIiwgIkNJRFJTdGFydCIsICJhZGRyZXNzRW5kIiwgInJlcGVhdCIsICJwYWQiLCAicmVwbGFjZW1lbnQiLCAic3BsaXQiLCAiaXNSYW5nZSIsICJpc0lQQWRkcmVzcyIsICJ2YWxpZENJRFIiLCAic3VibmV0IiwgInBhcnNlSW50IiwgImdldDY0IiwgImlwdjYiLCAic3VibmV0TWF0Y2giLCAiaXBSZWdleCIsICJ0b1VwcGVyQ2FzZUZpcnN0Q2hhciIsICJ0b0xvd2VyQ2FzZUZpcnN0Q2hhciIsICJzcGxpdFdlaWdodGVkQnlLZXlzIiwgInN0YXJ0IiwgImVuZCIsICJza2lwbGlzdCIsICJsZXZlbCIsICJpbml0aWFsIiwgIkFycmF5IiwgImlzQXJyYXkiLCAiVHlwZUVycm9yIiwgIl9pdGVyYXRvcjYiLCAiX3N0ZXA2IiwgImZvcm1hdFJlYXNvblRleHQiLCAiYWRkU2lnIiwgInJlYXNvbiIsICJzaWciLCAic2lnSW5kZXgiLCAibGFzdEluZGV4T2YiLCAiZm9ybWF0UmVhc29uRm9yTG9nIiwgInNhZmVSZXBsYWNlIiwgInBhdHRlcm4iLCAiaXNJbmZpbml0eSIsICJleHBpcnkiLCAiZm9ybWF0VGltZSIsICJ0aW1lIiwgIm0iLCAid2dVTFMiLCAiYXBwZW5kUHVuY3R1YXRpb24iLCAicHVuY3R1YXRpb24iLCAic2VhcmNoIiwgImFycmF5IiwgInVuaXEiLCAiYXJyIiwgIml0ZW0iLCAiaWR4IiwgImR1cHMiLCAiY2h1bmsiLCAibnVtQ2h1bmtzIiwgIk1hdGgiLCAiY2VpbCIsICJmcm9tIiwgInNlbGVjdDIiLCAibWF0Y2hlcnMiLCAib3B0Z3JvdXBGdWxsIiwgInBhcmFtcyIsICJvcmlnaW5hbE1hdGNoZXIiLCAiZm4iLCAiZGVmYXVsdHMiLCAibWF0Y2hlciIsICJ0ZXJtIiwgImNoaWxkcmVuIiwgIndvcmRCZWdpbm5pbmciLCAiUmVnRXhwIiwgInRlc3QiLCAiaGlnaGxpZ2h0U2VhcmNoTWF0Y2hlcyIsICJzZWFyY2hUZXJtIiwgInNlbGVjdDJTZWFyY2hRdWVyeSIsICJsb2FkaW5nIiwgImNzcyIsICJxdWVyeUludGVyY2VwdG9yIiwgImF1dG9TdGFydCIsICJldiIsICJ3aGljaCIsICJjbG9zZXN0IiwgInByZXYiLCAiZHJvcGRvd24iLCAiJHNlYXJjaCIsICJzZWxlY3Rpb24iLCAiZm9jdXMiLCAiaGlzdG9yeSIsICJwcmVmaXgiLCAicmFuZG9tIiwgInBvc3RmaXgiLCAicmUiLCAiZ2V0Q2FsbGJhY2siLCAiaGFzT3duIiwgInNlbGYiLCAiYXJncyIsICJfdGhpcyRfZCIsICJwYXJhbSIsICJkaWdpdE1hdGNoIiwgIl9kIiwgIkRhdGUiLCAiUmVmbGVjdCIsICJhcHBseSIsICJVVEMiLCAiZGF0ZVBhcnRzIiwgIkZ1bmN0aW9uIiwgImJpbmQiLCAiaXNWYWxpZCIsICJsb2ciLCAibW9udGhzU2hvcnQiLCAiZGF5cyIsICJkYXlzU2hvcnQiLCAicmVsYXRpdmVUaW1lcyIsICJ0aGlzRGF5IiwgInByZXZEYXkiLCAibmV4dERheSIsICJ0aGlzV2VlayIsICJwYXN0V2VlayIsICJvdGhlciIsICJ1bml0TWFwIiwgInNlY29uZHMiLCAibWludXRlcyIsICJob3VycyIsICJ3ZWVrcyIsICJ5ZWFycyIsICJpc05hTiIsICJnZXRUaW1lIiwgImlzQmVmb3JlIiwgImlzQWZ0ZXIiLCAiZ2V0VVRDTW9udGhOYW1lIiwgImdldFVUQ01vbnRoIiwgImdldFVUQ01vbnRoTmFtZUFiYnJldiIsICJnZXRNb250aE5hbWUiLCAiZ2V0TW9udGgiLCAiZ2V0TW9udGhOYW1lQWJicmV2IiwgImdldFVUQ0RheU5hbWUiLCAiZ2V0VVRDRGF5IiwgImdldFVUQ0RheU5hbWVBYmJyZXYiLCAiZ2V0RGF5TmFtZSIsICJnZXREYXkiLCAiZ2V0RGF5TmFtZUFiYnJldiIsICJhZGQiLCAidW5pdCIsICJudW0iLCAidW5pdE5vcm0iLCAia2V5cyIsICJzdWJ0cmFjdCIsICJmb3JtYXQiLCAiZm9ybWF0c3RyIiwgInpvbmUiLCAidWRhdGUiLCAiZ2V0VGltZXpvbmVPZmZzZXQiLCAidG9JU09TdHJpbmciLCAibGVuIiwgImgyNCIsICJnZXRIb3VycyIsICJnZXRNaW51dGVzIiwgImdldFNlY29uZHMiLCAibXMiLCAiZ2V0TWlsbGlzZWNvbmRzIiwgIkQiLCAiZ2V0RGF0ZSIsICJNIiwgIlkiLCAiZ2V0RnVsbFllYXIiLCAiaDEyIiwgImFtT3JQbSIsICJyZXBsYWNlbWVudE1hcCIsICJISCIsICJIIiwgImhoIiwgImgiLCAiQSIsICJtbSIsICJzcyIsICJTU1MiLCAiZGRkZCIsICJkZGQiLCAiZCIsICJERCIsICJNTU1NIiwgIk1NTSIsICJNTSIsICJZWVlZIiwgIllZIiwgIlN0cmluZyIsICJyYXciLCAiX3RlbXBsYXRlT2JqZWN0IiwgIl90YWdnZWRUZW1wbGF0ZUxpdGVyYWwiLCAiX3RlbXBsYXRlT2JqZWN0MiIsICJjYWxlbmRhciIsICJkYXRlRGlmZiIsICJzZXRIb3VycyIsICJtb250aEhlYWRlclJlZ2V4IiwgImdldFVUQ0Z1bGxZZWFyIiwgIm1vbnRoSGVhZGVyIiwgImhlYWRlciIsICJfaXRlcmF0b3I3IiwgImdldE93blByb3BlcnR5TmFtZXMiLCAiX3N0ZXA3IiwgImZ1bmMiLCAid2lraSIsICJudW1iZXJPZkFjdGlvbnNMZWZ0IiwgIm5ick9mQ2hlY2twb2ludHNMZWZ0IiwgImFjdGlvbkNvbXBsZXRlZCIsICJub3RpY2UiLCAic3RhdHVzIiwgInJlZGlyZWN0IiwgImZvbGxvd1JlZGlyZWN0IiwgInNldFRpbWVvdXQiLCAibG9jYXRpb24iLCAidGltZU91dCIsICJ3cEFjdGlvbkNvbXBsZXRlZFRpbWVPdXQiLCAiYWRkQ2hlY2twb2ludCIsICJyZW1vdmVDaGVja3BvaW50IiwgImFwaSIsICJjdXJyZW50QWN0aW9uIiwgInF1ZXJ5IiwgIm9uU3VjY2VzcyIsICJzdGF0dXNFbGVtZW50IiwgIm9uRXJyb3IiLCAiX3RoaXMkcXVlcnkiLCAiYXNzZXJ0IiwgImVycm9yZm9ybWF0IiwgInVzZWxhbmciLCAiZXJyb3JsYW5nIiwgImVycm9yc3VzZWxvY2FsIiwgInNldFN0YXR1c0VsZW1lbnQiLCAic3RhdGVsZW0iLCAiZm9ybWF0dmVyc2lvbiIsICJlcnJvciIsICJhY3Rpb24iLCAidGFncyIsICJtb3JlYml0c1dpa2lDaGFuZ2VUYWciLCAicGFyZW50IiwgInJlc3BvbnNlIiwgInJlc3BvbnNlWE1MIiwgInN0YXR1c1RleHQiLCAiZXJyb3JDb2RlIiwgImVycm9yVGV4dCIsICJiYWR0b2tlblJldHJ5IiwgInNldFBhcmVudCIsICJwb3N0IiwgImNhbGxlckFqYXhQYXJhbWV0ZXJzIiwgInF1ZXJ5U3RyaW5nQXJyIiwgIl9pNSIsICJfT2JqZWN0JGVudHJpZXMyIiwgImVuY29kZVVSSUNvbXBvbmVudCIsICJxdWVyeVN0cmluZyIsICJhamF4cGFyYW1zIiwgImNvbnRleHQiLCAidXJsIiwgIndpa2lTY3JpcHQiLCAiZGF0YVR5cGUiLCAiaGVhZGVycyIsICJtb3JlYml0c1dpa2lBcGlVc2VyQWdlbnQiLCAiYWpheCIsICJ0aGVuIiwgIm9uQVBJc3VjY2VzcyIsICJlcnJvcnMiLCAiY29kZSIsICJodG1sIiwgImVxIiwgImF0dHIiLCAicmV0dXJuRXJyb3IiLCAiY2FsbCIsICJpbmZvIiwgIkRlZmVycmVkIiwgInJlc29sdmVXaXRoIiwgIm9uQVBJZmFpbHVyZSIsICJlcnJvclRocm93biIsICJnZXRUb2tlbiIsICJ0b2tlbiIsICJyZWplY3RXaXRoIiwgImdldFN0YXR1c0VsZW1lbnQiLCAiZ2V0RXJyb3JDb2RlIiwgImdldEVycm9yVGV4dCIsICJnZXRYTUwiLCAiZ2V0UmVzcG9uc2UiLCAiZ2V0Q2FjaGVkSnNvbiIsICJwcm9wIiwgInRpdGxlcyIsICJydnNsb3RzIiwgInJ2cHJvcCIsICJzbWF4YWdlIiwgIm1heGFnZSIsICJhcGlvYmoiLCAidW5saW5rIiwgIndpa2l0ZXh0IiwgInBhZ2VzIiwgInJldmlzaW9ucyIsICJzbG90cyIsICJtYWluIiwgIkpTT04iLCAicGFyc2UiLCAic2V0QXBpVXNlckFnZW50IiwgInVhIiwgInRva2VuQXBpIiwgIm1ldGEiLCAidG9rZW5zIiwgImNzcmZ0b2tlbiIsICJwYWdlIiwgImN0eCIsICJwYWdlRXhpc3RzIiwgImVkaXRTdW1tYXJ5IiwgImNoYW5nZVRhZ3MiLCAidGVzdEFjdGlvbnMiLCAiY2FsbGJhY2tQYXJhbWV0ZXJzIiwgInBhZ2VUZXh0IiwgImVkaXRNb2RlIiwgImFwcGVuZFRleHQiLCAicHJlcGVuZFRleHQiLCAibmV3U2VjdGlvblRleHQiLCAibmV3U2VjdGlvblRpdGxlIiwgImNyZWF0ZU9wdGlvbiIsICJtaW5vckVkaXQiLCAiYm90RWRpdCIsICJwYWdlU2VjdGlvbiIsICJtYXhDb25mbGljdFJldHJpZXMiLCAibWF4UmV0cmllcyIsICJmb2xsb3dDcm9zc05zUmVkaXJlY3QiLCAid2F0Y2hsaXN0T3B0aW9uIiwgIndhdGNobGlzdEV4cGlyeSIsICJjcmVhdG9yIiwgInRpbWVzdGFtcCIsICJyZXZlcnRPbGRJRCIsICJtb3ZlRGVzdGluYXRpb24iLCAibW92ZVRhbGtQYWdlIiwgIm1vdmVTdWJwYWdlcyIsICJtb3ZlU3VwcHJlc3NSZWRpcmVjdCIsICJwcm90ZWN0RWRpdCIsICJwcm90ZWN0TW92ZSIsICJwcm90ZWN0Q3JlYXRlIiwgInByb3RlY3RDYXNjYWRlIiwgImxvb2t1cE5vblJlZGlyZWN0Q3JlYXRvciIsICJwYWdlTG9hZGVkIiwgImNzcmZUb2tlbiIsICJsb2FkVGltZSIsICJsYXN0RWRpdFRpbWUiLCAicGFnZUlEIiwgImNvbnRlbnRNb2RlbCIsICJyZXZlcnRDdXJJRCIsICJyZXZlcnRVc2VyIiwgIndhdGNoZWQiLCAiZnVsbHlQcm90ZWN0ZWQiLCAic3VwcHJlc3NQcm90ZWN0V2FybmluZyIsICJjb25mbGljdFJldHJpZXMiLCAicmV0cmllcyIsICJvbkxvYWRTdWNjZXNzIiwgIm9uTG9hZEZhaWx1cmUiLCAib25TYXZlU3VjY2VzcyIsICJvblNhdmVGYWlsdXJlIiwgIm9uTG9va3VwQ3JlYXRpb25TdWNjZXNzIiwgIm9uTG9va3VwQ3JlYXRpb25GYWlsdXJlIiwgIm9uTW92ZVN1Y2Nlc3MiLCAib25Nb3ZlRmFpbHVyZSIsICJvbkRlbGV0ZVN1Y2Nlc3MiLCAib25EZWxldGVGYWlsdXJlIiwgIm9uVW5kZWxldGVTdWNjZXNzIiwgIm9uVW5kZWxldGVGYWlsdXJlIiwgIm9uUHJvdGVjdFN1Y2Nlc3MiLCAib25Qcm90ZWN0RmFpbHVyZSIsICJsb2FkUXVlcnkiLCAibG9hZEFwaSIsICJzYXZlQXBpIiwgImxvb2t1cENyZWF0aW9uQXBpIiwgIm1vdmVBcGkiLCAibW92ZVByb2Nlc3NBcGkiLCAicGF0cm9sQXBpIiwgInBhdHJvbFByb2Nlc3NBcGkiLCAiZGVsZXRlQXBpIiwgImRlbGV0ZVByb2Nlc3NBcGkiLCAidW5kZWxldGVBcGkiLCAidW5kZWxldGVQcm9jZXNzQXBpIiwgInByb3RlY3RBcGkiLCAicHJvdGVjdFByb2Nlc3NBcGkiLCAiZW1wdHlGdW5jdGlvbiIsICJsb2FkIiwgIm9uRmFpbHVyZSIsICJpbnByb3AiLCAiaW50ZXN0YWN0aW9ucyIsICJjdXJ0aW1lc3RhbXAiLCAicnZsaW1pdCIsICJydnN0YXJ0aWQiLCAicmVkaXJlY3RzIiwgInJ2c2VjdGlvbiIsICJmbkxvYWRTdWNjZXNzIiwgInNhdmUiLCAiY2FuVXNlTXdVc2VyVG9rZW4iLCAiZm5DYW5Vc2VNd1VzZXJUb2tlbiIsICJjb25maXJtIiwgInN1bW1hcnkiLCAidXNlciIsICJ3YXRjaGxpc3QiLCAiZm5BcHBseVdhdGNobGlzdEV4cGlyeSIsICJ3YXRjaGxpc3RleHBpcnkiLCAic2VjdGlvbiIsICJtaW5vciIsICJub3RtaW5vciIsICJib3QiLCAiYXBwZW5kdGV4dCIsICJwcmVwZW5kdGV4dCIsICJzZWN0aW9udGl0bGUiLCAidW5kbyIsICJ1bmRvYWZ0ZXIiLCAiYmFzZXRpbWVzdGFtcCIsICJzdGFydHRpbWVzdGFtcCIsICJmblNhdmVTdWNjZXNzIiwgImZuU2F2ZUVycm9yIiwgImZuQXV0b1NhdmUiLCAicHJlcGVuZCIsICJuZXdTZWN0aW9uIiwgImdldFBhZ2VOYW1lIiwgImdldFBhZ2VUZXh0IiwgInNldFBhZ2VUZXh0IiwgInNldEFwcGVuZFRleHQiLCAic2V0UHJlcGVuZFRleHQiLCAic2V0TmV3U2VjdGlvblRleHQiLCAic2V0TmV3U2VjdGlvblRpdGxlIiwgInNldEVkaXRTdW1tYXJ5IiwgInNldENoYW5nZVRhZ3MiLCAic2V0Q3JlYXRlT3B0aW9uIiwgInNldE1pbm9yRWRpdCIsICJzZXRCb3RFZGl0IiwgInNldFBhZ2VTZWN0aW9uIiwgInNldE1heENvbmZsaWN0UmV0cmllcyIsICJzZXRNYXhSZXRyaWVzIiwgInNldFdhdGNobGlzdCIsICJzZXRXYXRjaGxpc3RFeHBpcnkiLCAic2V0V2F0Y2hsaXN0RnJvbVByZWZlcmVuY2VzIiwgInNldEZvbGxvd1JlZGlyZWN0IiwgInNldExvb2t1cE5vblJlZGlyZWN0Q3JlYXRvciIsICJmbGFnIiwgInNldE1vdmVEZXN0aW5hdGlvbiIsICJkZXN0aW5hdGlvbiIsICJzZXRNb3ZlVGFsa1BhZ2UiLCAic2V0TW92ZVN1YnBhZ2VzIiwgInNldE1vdmVTdXBwcmVzc1JlZGlyZWN0IiwgInNldEVkaXRQcm90ZWN0aW9uIiwgInNldE1vdmVQcm90ZWN0aW9uIiwgInNldENyZWF0ZVByb3RlY3Rpb24iLCAic2V0Q2FzY2FkaW5nUHJvdGVjdGlvbiIsICJzZXRPbGRJRCIsICJvbGRJRCIsICJnZXRDdXJyZW50SUQiLCAiZ2V0UmV2aXNpb25Vc2VyIiwgImdldExhc3RFZGl0VGltZSIsICJzZXRDYWxsYmFja1BhcmFtZXRlcnMiLCAiZ2V0Q2FsbGJhY2tQYXJhbWV0ZXJzIiwgImV4aXN0cyIsICJnZXRQYWdlSUQiLCAiZ2V0Q29udGVudE1vZGVsIiwgImdldFdhdGNoZWQiLCAiZ2V0TG9hZFRpbWUiLCAiZ2V0Q3JlYXRvciIsICJnZXRDcmVhdGlvblRpbWVzdGFtcCIsICJjYW5FZGl0IiwgImxvb2t1cENyZWF0aW9uIiwgInJ2ZGlyIiwgImZuTG9va3VwQ3JlYXRpb25TdWNjZXNzIiwgInJldmVydCIsICJtb3ZlIiwgImZuUHJlZmxpZ2h0Q2hlY2tzIiwgImZuUHJvY2Vzc01vdmUiLCAiZm5OZWVkVG9rZW5JbmZvUXVlcnkiLCAicGF0cm9sIiwgIiRib2R5IiwgInBhdHJvbGhyZWYiLCAicmNpZCIsICJnZXRQYXJhbVZhbHVlIiwgImZuUHJvY2Vzc1BhdHJvbCIsICJwYXRyb2xRdWVyeSIsICJyY3Byb3AiLCAicmN0aXRsZSIsICJyY2xpbWl0IiwgImRlbGV0ZVBhZ2UiLCAiZm5Qcm9jZXNzRGVsZXRlIiwgInVuZGVsZXRlUGFnZSIsICJmblByb2Nlc3NVbmRlbGV0ZSIsICJwcm90ZWN0IiwgImZuUHJvY2Vzc1Byb3RlY3QiLCAiZ2V0UHJlZml4ZWRUZXh0IiwgImVkaXRSZXN0cmljdGlvbiIsICJwYWdlb2JqIiwgImZuQ2hlY2tQYWdlTmFtZSIsICJyZXYiLCAibWlzc2luZyIsICJwYWdlaWQiLCAiY29udGVudG1vZGVsIiwgImVkaXRQcm90IiwgInByb3RlY3Rpb24iLCAiZmluZExhc3QiLCAicHIiLCAibGFzdHJldmlkIiwgInRlc3RhY3Rpb25zIiwgImFjdGlvbnMiLCAiX2k2IiwgIl9PYmplY3Qka2V5cyIsICJyZXZpZCIsICJ1c2VyaGlkZGVuIiwgImludmFsaWQiLCAicmVzb2x2ZWROYW1lIiwgIm9yaWdOcyIsICJuYW1lc3BhY2UiLCAibmV3TnMiLCAibmV3RXhwaXJ5IiwgInJlbCIsICJlZGl0IiwgImxpbmsiLCAiY2FwdGNoYSIsICJwdXJnZVF1ZXJ5IiwgInB1cmdlQXBpIiwgInNsZWVwIiwgImVycm9yRGF0YSIsICJhYnVzZWZpbHRlciIsICJkZXNjcmlwdGlvbiIsICJzcGFtIiwgInNwYW1ibGFja2xpc3QiLCAibWF0Y2hlcyIsICJpc1RleHRSZWRpcmVjdCIsICJzb21lIiwgInRhZyIsICJmbkxvb2t1cE5vblJlZGlyZWN0Q3JlYXRvciIsICJyZXZzIiwgIl9pdGVyYXRvcjgiLCAiX3N0ZXA4IiwgImZuUHJvY2Vzc0NoZWNrcyIsICJhY3Rpb25NaXNzaW5nIiwgInByb3RlY3RNaXNzaW5nIiwgInNhbHRNaXNzaW5nIiwgImVkaXRwcm90IiwgInBhZ2VUaXRsZSIsICJ0byIsICJtb3ZldGFsayIsICJtb3Zlc3VicGFnZXMiLCAibm9yZWRpcmVjdCIsICJyZWNlbnRjaGFuZ2VzIiwgInVucGF0cm9sbGVkIiwgInBhdHJvbFN0YXQiLCAiZm5Qcm9jZXNzRGVsZXRlRXJyb3IiLCAiZm5Qcm9jZXNzVW5kZWxldGVFcnJvciIsICJwcnMiLCAibW92ZXByb3QiLCAiY3JlYXRlcHJvdCIsICJfaXRlcmF0b3I5IiwgIl9zdGVwOSIsICJzb3VyY2UiLCAiY2FzY2FkZSIsICJwcm90ZWN0aW9ucyIsICJleHBpcnlzIiwgIm1pbGxpc2Vjb25kcyIsICJkZWZlcnJlZCIsICJyZXNvbHZlIiwgInByZXZpZXciLCAicHJldmlld2JveCIsICJhZGRDbGFzcyIsICJoaWRlIiwgImJlZ2luUmVuZGVyIiwgInNlY3Rpb25UaXRsZSIsICJzaG93IiwgInN0YXR1c3NwYW4iLCAiaW5pdCIsICJwc3QiLCAiZGlzYWJsZWxpbWl0cmVwb3J0IiwgImRpc2FibGVlZGl0c2VjdGlvbiIsICJyZW5kZXJBcGkiLCAiZm5SZW5kZXJTdWNjZXNzIiwgImlubmVySFRNTCIsICJsb2FkZXIiLCAibW9kdWxlc3R5bGVzIiwgIm1vZHVsZXMiLCAiY2xvc2VQcmV2aWV3IiwgImVtcHR5IiwgInBhcnNlVGVtcGxhdGUiLCAiY291bnQiLCAidW5uYW1lZCIsICJlcXVhbHMiLCAicGFyYW1ldGVycyIsICJrZXkiLCAiZmluZFBhcmFtIiwgImZpbmFsIiwgInRlc3QzIiwgInBvcCIsICJ0ZXN0MiIsICJjaGFyQXQiLCAicmVtb3ZlTGluayIsICJsaW5rVGFyZ2V0IiwgIm13VGl0bGUiLCAibmV3RnJvbVRleHQiLCAibmFtZXNwYWNlSUQiLCAiZ2V0TmFtZXNwYWNlSWQiLCAiZ2V0TWFpblRleHQiLCAibGlua1JlZ2V4U3RyaW5nIiwgImlzRmlsZU9yQ2F0ZWdvcnkiLCAiY29sb24iLCAic2ltcGxlTGlua1JlZ2V4IiwgInBpcGVkTGlua1JlZ2V4IiwgImNvbW1lbnRPdXRJbWFnZSIsICJpbWFnZSIsICJpbWFnZVJlZ2V4U3RyaW5nIiwgImxpbmtzUmVnZXgiLCAiYWxsTGlua3MiLCAiX2l0ZXJhdG9yMCIsICJfc3RlcDAiLCAiYWxsTGluayIsICJnYWxsZXJ5SW1hZ2VSZWdleCIsICJmcmVlSW1hZ2VSZWdleCIsICJhZGRUb0ltYWdlQ29tbWVudCIsICJfaXRlcmF0b3IxIiwgIl9zdGVwMSIsICJnYWxsZXJ5UmVnZXgiLCAibmV3dGV4dCIsICJyZW1vdmVUZW1wbGF0ZSIsICJ0ZW1wbGF0ZSIsICJ0ZW1wbGF0ZVJlZ2V4U3RyaW5nIiwgImFsbFRlbXBsYXRlcyIsICJfaXRlcmF0b3IxMCIsICJfc3RlcDEwIiwgImFsbFRlbXBsYXRlIiwgImluc2VydEFmdGVyVGVtcGxhdGVzIiwgImZsYWdzIiwgInByZVJlZ2V4IiwgImdldFRleHQiLCAidXNlcnNwYWNlTG9nZ2VyIiwgImxvZ1BhZ2VOYW1lIiwgImluaXRpYWxUZXh0IiwgImhlYWRlckxldmVsIiwgImxvZ1RleHQiLCAic3VtbWFyeVRleHQiLCAiZGVmIiwgInJlamVjdCIsICJzdGF0IiwgInRleHRSYXciLCAiZ2VuZXJhdGUiLCAidXBkYXRlIiwgIkVsZW1lbnQiLCAiaGFzQ2hpbGROb2RlcyIsICJlcnJvckV2ZW50IiwgImhhbmRsZXIiLCAic3RhdFJhdyIsICJsaW5rZWQiLCAicHJpbnRVc2VyVGV4dCIsICJjb21tZW50cyIsICJtZXNzYWdlIiwgInAiLCAiZGl2IiwgIm1hcmdpblRvcCIsICJ3aGl0ZVNwYWNlIiwgImh0bWxOb2RlIiwgImNvbG9yIiwgImpRdWVyeVNlbGVjdG9yIiwgImpRdWVyeUNvbnRleHQiLCAibGFzdENoZWNrYm94IiwgImNsaWNrSGFuZGxlciIsICJjbGlja0hhbmRsZXIyIiwgInRoaXNDYiIsICJzaGlmdEtleSIsICJjYnMiLCAiaW5kZXgiLCAibGFzdEluZGV4IiwgImVuZFN0YXRlIiwgImZpbmlzaCIsICJjbGljayIsICJvbiIsICJiYXRjaE9wZXJhdGlvbiIsICJwYWdlTGlzdCIsICJjaHVua1NpemUiLCAicHJlc2VydmVJbmRpdmlkdWFsU3RhdHVzTGluZXMiLCAid29ya2VyIiwgInBvc3RGaW5pc2giLCAiY291bnRTdGFydGVkIiwgImNvdW50RmluaXNoZWQiLCAiY291bnRGaW5pc2hlZFN1Y2Nlc3MiLCAiY3VycmVudENodW5rSW5kZXgiLCAicGFnZUNodW5rcyIsICJydW5uaW5nIiwgInNldFBhZ2VMaXN0IiwgInNldE9wdGlvbiIsICJvcHRpb25OYW1lIiwgIm9wdGlvblZhbHVlIiwgInJ1biIsICJ0b3RhbCIsICJmblN0YXJ0TmV3Q2h1bmsiLCAid29ya2VyU3VjY2VzcyIsICJhcmciLCAiZm5Eb25lT25lIiwgIndvcmtlckZhaWx1cmUiLCAidGhpc1Byb3h5IiwgIl9pdGVyYXRvcjExIiwgIl9zdGVwMTEiLCAicHJvZ3Jlc3MiLCAicm91bmQiLCAiZmxvb3IiLCAic3RhdHVzU3RyaW5nIiwgInNpbXBsZVdpbmRvdyIsICJ3aWR0aCIsICJoZWlnaHQiLCAiZGlhbG9nIiwgImF1dG9PcGVuIiwgImJ1dHRvbnMiLCAiUGxhY2Vob2xkZXIgYnV0dG9uIiwgImRpYWxvZ0NsYXNzIiwgImlubmVyV2lkdGgiLCAiY2xvc2UiLCAicmVzaXplU3RhcnQiLCAic2Nyb2xsYm94IiwgIm1heEhlaWdodCIsICJyZXNpemVTdG9wIiwgInJlc2l6ZSIsICIkd2lkZ2V0IiwgImVhY2giLCAiYnV0dG9uc3BhbiIsICJsaW5rc3NwYW4iLCAicmVzaXphYmxlIiwgImhhc0Zvb3RlckxpbmtzIiwgInNjcmlwdE5hbWUiLCAicHJldmVudERlZmF1bHQiLCAiZGlzcGxheSIsICJzY3JpcHRuYW1lc3BhbiIsICJzZXR1cFRvb2x0aXBzIiwgInBnIiwgImRpZmYiLCAicmFuU2V0dXBUb29sdGlwc0FscmVhZHkiLCAic2V0SGVpZ2h0IiwgInNldFRpdGxlIiwgInNldFNjcmlwdE5hbWUiLCAic2V0V2lkdGgiLCAiZ2V0Q29tcHV0ZWRTdHlsZSIsICJpbm5lckhlaWdodCIsICJzZXRDb250ZW50IiwgInB1cmdlQ29udGVudCIsICJhZGRDb250ZW50IiwgImJ1dHRvbiIsICJhZGRGb290ZXJMaW5rIiwgIndpa2lQYWdlIiwgInByZXAiLCAiJGZvb3RlcmxpbmtzIiwgImJ1bGxldCIsICJzZXRNb2RhbGl0eSIsICJtb2RhbCIsICJzZXRCdXR0b25zRW5hYmxlZCIsICJlbmFibGVkIiwgImpRdWVyeSJdCn0K

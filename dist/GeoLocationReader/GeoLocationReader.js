/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|title=GeoLocationReader|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/GeoLocationReader}
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
    /* @__PURE__ */ (function() {
      return this;
    })() || Function("return this")();
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
    var version2;
    if (v8) {
      match = v8.split(".");
      version2 = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
    }
    if (!version2 && userAgent) {
      match = userAgent.match(/Edge\/(\d+)/);
      if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/);
        if (match) version2 = +match[1];
      }
    }
    module2.exports = version2;
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
      var symbol = /* @__PURE__ */ Symbol("symbol detection");
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
    $({ target: "JSON", stat: true, forced: NO_SOURCE_SUPPORT }, {
      parse: function parse(text, reviver) {
        return PROPER_BASE_PARSE && !isCallable(reviver) ? nativeParse(text) : $parse(text, reviver);
      }
    });
  }
});

// dist/GeoLocationReader/GeoLocationReader.js
require_es_json_parse();
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
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames2 = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
//! src/GeoLocationReader/options.json
var mountPointSelector = "#footer-info,.page-info";
var storageKey = "ext.gadget.MarkRights_GeoLocationReader-";
var userNameSpaceNumber = 2;
var version = "2.1";
//! src/GeoLocation/modules/constant.ts
var SYSTEM_SCRIPT_LIST = ["滥用过滤器", "求闻编者", "求闻百科社区", "Example", "External contributors", "Maintenance script", "MediaWiki default", "MediaWiki message delivery", "New user page"];
var WEBMASTER_LIST = ["QiuWen", "QiuWen for Accounts", "QiuwenSocialMedia"];
//! src/GeoLocationReader/modules/constant.ts
var CLASS_NAME = "gadget-geo_location_reader";
var CLASS_NAME_ICON = "".concat(CLASS_NAME, "__icon");
var CLASS_NAME_TEXT = "".concat(CLASS_NAME, "__text");
//! src/GeoLocationReader/modules/components/react.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.JSX"), 1);
//! src/GeoLocationReader/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    ":": (0, import_ext_gadget.localize)({
      en: ": ",
      ja: "：",
      zh: "："
    }),
    Unknown: (0, import_ext_gadget.localize)({
      en: "Unknown Location",
      ja: "未知IP地域",
      "zh-hans": "未知IP属地",
      "zh-hant": "未知IP屬地"
    }),
    Location: (0, import_ext_gadget.localize)({
      en: "IP Location",
      ja: "IP地域",
      "zh-hans": "IP属地",
      "zh-hant": "IP屬地"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/GeoLocationReader/modules/components/react.tsx
var FooterNotice = ({
  spanClass,
  children = /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null)
}) => {
  const {
    skin
  } = mw.config.get();
  const id = CLASS_NAME;
  const classNames = [CLASS_NAME, "".concat(CLASS_NAME, "-").concat(spanClass)];
  if (skin === "citizen") {
    return /* @__PURE__ */ import_ext_gadget2.default.createElement("section", {
      id,
      className: [...classNames, "page-info__item", "citizen-footer__pageinfo-item", "noprint"]
    }, children);
  } else if (["gongbi", "vector", "vector-2022"].includes(skin) || document.querySelector("ul#footer-info")) {
    return /* @__PURE__ */ import_ext_gadget2.default.createElement("li", {
      id,
      className: [...classNames, "noprint"]
    }, children);
  }
  return /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
    id,
    className: [...classNames, "noprint"]
  }, children);
};
var Indicator = ({
  icon,
  indicatorText
}) => {
  const text = icon === "globe" ? getMessage("Location") + getMessage(":") + indicatorText : indicatorText !== null && indicatorText !== void 0 ? indicatorText : "";
  return /* @__PURE__ */ import_ext_gadget2.default.createElement(import_ext_gadget2.default.Fragment, null, /* @__PURE__ */ import_ext_gadget2.default.createElement("span", {
    className: [CLASS_NAME_ICON, "".concat(CLASS_NAME_ICON, "-").concat(icon)],
    "aria-label": text
  }), /* @__PURE__ */ import_ext_gadget2.default.createElement("span", {
    className: CLASS_NAME_TEXT
  }, text));
};
var FooterIcon = ({
  icon,
  spanClass,
  indicatorText
}) => /* @__PURE__ */ import_ext_gadget2.default.createElement(FooterNotice, {
  spanClass
}, /* @__PURE__ */ import_ext_gadget2.default.createElement(Indicator, {
  icon,
  indicatorText
}));
//! src/GeoLocationReader/modules/util/appendIcon.tsx
var import_ext_gadget3 = __toESM(require("ext.gadget.JSX"), 1);
var appendIcon = ({
  icon,
  indicatorText,
  spanClass
}) => {
  if (!spanClass || !icon || !indicatorText) {
    return;
  }
  const mountPoint = document.querySelector(mountPointSelector);
  if (!mountPoint) {
    return;
  }
  mountPoint.prepend(/* @__PURE__ */ import_ext_gadget3.default.createElement(FooterIcon, {
    spanClass,
    icon,
    indicatorText
  }));
};
//! src/GeoLocationReader/modules/util/name.ts
var getCountryOrAreaNameList = () => {
  const {
    wgUserLanguage
  } = mw.config.get();
  if (["zh-hant", "zh-hk", "zh-mo"].includes(wgUserLanguage)) {
    return {
      AF: "阿富汗",
      AX: "奧蘭",
      AL: "阿爾巴尼亞",
      DZ: "阿爾及利亞",
      AS: "美屬薩摩亞",
      AD: "安道爾",
      AO: "安哥拉",
      AI: "安圭拉",
      AQ: "南極洲",
      AG: "安提瓜和巴布達",
      AR: "阿根廷",
      AM: "亞美尼亞",
      AW: "阿魯巴",
      AU: "澳洲",
      AT: "奧地利",
      AZ: "阿塞拜疆",
      BS: "巴哈馬",
      BH: "巴林",
      BD: "孟加拉國",
      BB: "巴巴多斯",
      BY: "白俄羅斯",
      BE: "比利時",
      BZ: "伯利茲",
      BJ: "貝寧",
      BM: "百慕達",
      BT: "不丹",
      BO: "玻利維亞",
      BQ: "荷蘭加勒比區",
      BA: "波黑",
      BW: "博茨瓦納",
      BV: "布韋島",
      BR: "巴西",
      IO: "英屬印度洋領地",
      BN: "汶萊",
      BG: "保加利亞",
      BF: "布基納法索",
      BI: "布隆迪",
      CV: "佛得角",
      KH: "柬埔寨",
      CM: "喀麥隆",
      CA: "加拿大",
      KY: "開曼群島",
      CF: "中非",
      TD: "乍得",
      CL: "智利",
      CN: "中國",
      CX: "聖誕島",
      CC: "科科斯（基林）群島",
      CO: "哥倫比亞",
      KM: "科摩羅",
      CG: "剛果共和國",
      CD: "剛果民主共和國",
      CK: "庫克群島",
      CR: "哥斯達黎加",
      CI: "科特迪瓦",
      HR: "克羅地亞",
      CU: "古巴",
      CW: "庫拉索",
      CY: "塞浦路斯",
      CZ: "捷克",
      DK: "丹麥",
      DJ: "吉布提",
      DM: "多米尼克",
      DO: "多米尼加",
      EC: "厄瓜多爾",
      EG: "埃及",
      SV: "薩爾瓦多",
      GQ: "赤道畿內亞",
      ER: "厄立特里亞",
      EE: "愛沙尼亞",
      SZ: "斯威士蘭",
      ET: "埃塞俄比亞",
      FK: "福克蘭群島",
      FO: "法羅群島",
      FJ: "斐濟",
      FI: "芬蘭",
      FR: "法國",
      GF: "法屬圭亞那",
      PF: "法屬波利尼西亞",
      TF: "法屬南部和南極領地",
      GA: "加蓬",
      GM: "岡比亞",
      GE: "格魯吉亞",
      DE: "德國",
      GH: "加納",
      GI: "直布羅陀",
      GR: "希臘",
      GL: "格陵蘭",
      GD: "格林納達",
      GP: "瓜德羅普",
      GU: "關島",
      GT: "危地馬拉",
      GG: "根西",
      GN: "畿內亞",
      GW: "畿內亞比紹",
      GY: "圭亞那",
      HT: "海地",
      HM: "赫德島和麥克唐納群島",
      VA: "梵蒂岡",
      HN: "洪都拉斯",
      HK: "中國香港",
      HU: "匈牙利",
      IS: "冰島",
      IN: "印度",
      ID: "印尼",
      IR: "伊朗",
      IQ: "伊拉克",
      IE: "愛爾蘭",
      IM: "人島",
      IL: "以色列",
      IT: "意大利",
      JM: "牙買加",
      JP: "日本",
      JE: "澤西",
      JO: "約旦",
      KZ: "哈薩克",
      KE: "肯雅",
      KI: "基里巴斯",
      KP: "北韓",
      KR: "韓國",
      KW: "科威特",
      KG: "吉爾吉斯",
      LA: "老撾",
      LV: "拉脫維亞",
      LB: "黎巴嫩",
      LS: "萊索托",
      LR: "利比里亞",
      LY: "利比亞",
      LI: "列支敦士登",
      LT: "立陶宛",
      LU: "盧森堡",
      MO: "中國澳門",
      MG: "馬達加斯加",
      MW: "馬拉維",
      MY: "馬來西亞",
      MV: "馬爾代夫",
      ML: "馬里",
      MT: "馬耳他",
      MH: "馬紹爾群島",
      MQ: "馬提尼克",
      MR: "毛里塔尼亞",
      MU: "毛里裘斯",
      YT: "馬約特",
      MX: "墨西哥",
      FM: "密克羅尼西亞聯邦",
      MD: "摩爾多瓦",
      MC: "摩納哥",
      MN: "蒙古",
      ME: "黑山",
      MS: "蒙特塞拉特",
      MA: "摩洛哥",
      MZ: "莫桑比克",
      MM: "緬甸",
      NA: "納米比亞",
      NR: "瑙魯",
      NP: "尼泊爾",
      NL: "荷蘭",
      NC: "新喀里多尼亞",
      NZ: "新西蘭",
      NI: "尼加拉瓜",
      NE: "尼日爾",
      NG: "尼日利亞",
      NU: "紐埃",
      NF: "諾福克島",
      MK: "北馬其頓",
      MP: "北馬利安納群島",
      NO: "挪威",
      OM: "阿曼",
      PK: "巴基斯坦",
      PW: "帕勞",
      PS: "巴勒斯坦",
      PA: "巴拿馬",
      PG: "巴布亞新畿內亞",
      PY: "巴拉圭",
      PE: "秘魯",
      PH: "菲律賓",
      PN: "皮特肯群島",
      PL: "波蘭",
      PT: "葡萄牙",
      PR: "波多黎各",
      QA: "卡塔爾",
      RE: "留尼汪",
      RO: "羅馬尼亞",
      RU: "俄羅斯",
      RW: "盧旺達",
      BL: "聖巴泰勒米",
      SH: "聖海倫娜、阿森松和特里斯坦-達庫尼亞",
      KN: "聖基茨和尼維斯",
      LC: "聖盧西亞",
      MF: "法屬聖馬丁",
      PM: "聖皮埃爾和密克隆",
      VC: "聖文森特和格林納丁斯",
      WS: "薩摩亞",
      SM: "聖馬力諾",
      ST: "聖多美和普林西比",
      SA: "沙地阿拉伯",
      SN: "塞內加爾",
      RS: "塞爾維亞",
      SC: "塞舌爾",
      SL: "塞拉利昂",
      SG: "新加坡",
      SX: "荷屬聖馬丁",
      SK: "斯洛伐克",
      SI: "斯洛文尼亞",
      SB: "所羅門群島",
      SO: "索馬里",
      ZA: "南非",
      GS: "南喬治亞和南桑威奇群島",
      SS: "南蘇丹",
      ES: "西班牙",
      LK: "斯里蘭卡",
      SD: "蘇丹",
      SR: "蘇里南",
      SJ: "斯瓦爾巴和揚馬延",
      SE: "瑞典",
      CH: "瑞士",
      SY: "敘利亞",
      TW: "中國臺灣",
      TJ: "塔吉克",
      TZ: "坦桑尼亞",
      TH: "泰國",
      TL: "東帝汶",
      TG: "多哥",
      TK: "托克勞",
      TO: "湯加",
      TT: "千里達和多巴哥",
      TN: "突尼西亞",
      TR: "土耳其",
      TM: "土庫曼",
      TC: "特克斯和凱科斯群島",
      TV: "圖瓦盧",
      UG: "烏干達",
      UA: "烏克蘭",
      AE: "阿聯酋",
      GB: "英國",
      US: "美國",
      UM: "美國本土外小島嶼",
      UY: "烏拉圭",
      UZ: "烏茲別克",
      VU: "瓦努阿圖",
      VE: "委內瑞拉",
      VN: "越南",
      VG: "英屬處女群島",
      VI: "美屬處女群島",
      WF: "瓦利斯和富圖納",
      EH: "西撒哈拉",
      YE: "也門",
      ZM: "贊比亞",
      ZW: "津巴布韋"
    };
  } else if (["zh-tw"].includes(wgUserLanguage)) {
    return {
      AF: "阿富汗",
      AX: "奧蘭",
      AL: "阿爾巴尼亞",
      DZ: "阿爾及利亞",
      AS: "美屬薩摩亞",
      AD: "安道爾",
      AO: "安哥拉",
      AI: "安圭拉",
      AQ: "南極洲",
      AG: "安地卡及巴布達",
      AR: "阿根廷",
      AM: "亞美尼亞",
      AW: "阿魯巴",
      AU: "澳洲",
      AT: "奧地利",
      AZ: "亞塞拜然",
      BS: "巴哈馬",
      BH: "巴林",
      BD: "孟加拉國",
      BB: "巴貝多",
      BY: "白俄羅斯",
      BE: "比利時",
      BZ: "貝里斯",
      BJ: "貝南",
      BM: "百慕達",
      BT: "不丹",
      BO: "玻利維亞",
      BQ: "荷蘭加勒比區",
      BA: "波赫",
      BW: "波札那",
      BV: "布韋島",
      BR: "巴西",
      IO: "英屬印度洋領地",
      BN: "汶萊",
      BG: "保加利亞",
      BF: "布吉納法索",
      BI: "蒲隆地",
      CV: "維德角",
      KH: "柬埔寨",
      CM: "喀麥隆",
      CA: "加拿大",
      KY: "開曼群島",
      CF: "中非",
      TD: "查德",
      CL: "智利",
      CN: "中國",
      CX: "聖誕島",
      CC: "科科斯（基林）群島",
      CO: "哥倫比亞",
      KM: "葛摩",
      CG: "剛果共和國",
      CD: "剛果民主共和國",
      CK: "庫克群島",
      CR: "哥斯大黎加",
      CI: "象牙海岸",
      HR: "克羅埃西亞",
      CU: "古巴",
      CW: "古拉索",
      CY: "賽普勒斯",
      CZ: "捷克",
      DK: "丹麥",
      DJ: "吉布地",
      DM: "多米尼克",
      DO: "多明尼加",
      EC: "厄瓜多",
      EG: "埃及",
      SV: "薩爾瓦多",
      GQ: "赤道幾內亞",
      ER: "厄利垂亞",
      EE: "愛沙尼亞",
      SZ: "史瓦帝尼",
      ET: "衣索比亞",
      FK: "福克蘭群島",
      FO: "法羅群島",
      FJ: "斐濟",
      FI: "芬蘭",
      FR: "法國",
      GF: "法屬圭亞那",
      PF: "法屬玻里尼西亞",
      TF: "法屬南部和南極領地",
      GA: "加彭",
      GM: "甘比亞",
      GE: "喬治亞",
      DE: "德國",
      GH: "迦納",
      GI: "直布羅陀",
      GR: "希臘",
      GL: "格陵蘭",
      GD: "格瑞那達",
      GP: "瓜德羅普",
      GU: "關島",
      GT: "瓜地馬拉",
      GG: "根西",
      GN: "幾內亞",
      GW: "幾內亞比索",
      GY: "蓋亞那",
      HT: "海地",
      HM: "赫德島和麥克唐納群島",
      VA: "梵蒂岡",
      HN: "宏都拉斯",
      HK: "中國香港",
      HU: "匈牙利",
      IS: "冰島",
      IN: "印度",
      ID: "印尼",
      IR: "伊朗",
      IQ: "伊拉克",
      IE: "愛爾蘭",
      IM: "曼島",
      IL: "以色列",
      IT: "義大利",
      JM: "牙買加",
      JP: "日本",
      JE: "澤西",
      JO: "約旦",
      KZ: "哈薩克",
      KE: "肯亞",
      KI: "吉里巴斯",
      KP: "北韓",
      KR: "韓國",
      KW: "科威特",
      KG: "吉爾吉斯",
      LA: "老撾",
      LV: "拉脫維亞",
      LB: "黎巴嫩",
      LS: "賴索托",
      LR: "賴比瑞亞",
      LY: "利比亞",
      LI: "列支敦斯登",
      LT: "立陶宛",
      LU: "盧森堡",
      MO: "中國澳門",
      MG: "馬達加斯加",
      MW: "馬拉威",
      MY: "馬來西亞",
      MV: "馬爾地夫",
      ML: "馬里",
      MT: "馬爾他",
      MH: "馬紹爾群島",
      MQ: "馬提尼克",
      MR: "茅利塔尼亞",
      MU: "模里西斯",
      YT: "馬約特",
      MX: "墨西哥",
      FM: "密克羅尼西亞聯邦",
      MD: "摩爾多瓦",
      MC: "摩納哥",
      MN: "蒙古",
      ME: "蒙特內哥羅",
      MS: "蒙哲臘",
      MA: "摩洛哥",
      MZ: "莫三比克",
      MM: "緬甸",
      NA: "納米比亞",
      NR: "諾魯",
      NP: "尼泊爾",
      NL: "荷蘭",
      NC: "新喀里多尼亞",
      NZ: "紐西蘭",
      NI: "尼加拉瓜",
      NE: "尼日",
      NG: "奈及利亞",
      NU: "紐埃",
      NF: "諾福克島",
      MK: "北馬其頓",
      MP: "北馬利安納群島",
      NO: "挪威",
      OM: "阿曼",
      PK: "巴基斯坦",
      PW: "帛琉",
      PS: "巴勒斯坦",
      PA: "巴拿馬",
      PG: "巴布亞紐幾內亞",
      PY: "巴拉圭",
      PE: "秘魯",
      PH: "菲律賓",
      PN: "皮特肯群島",
      PL: "波蘭",
      PT: "葡萄牙",
      PR: "波多黎各",
      QA: "卡達",
      RE: "留尼旺",
      RO: "羅馬尼亞",
      RU: "俄羅斯",
      RW: "盧安達",
      BL: "聖巴泰勒米",
      SH: "聖海蓮娜、阿森松和特里斯坦-達庫尼亞",
      KN: "聖克里斯多福及尼維斯",
      LC: "聖露西亞",
      MF: "法屬聖馬丁",
      PM: "聖皮耶與密克隆",
      VC: "聖文森及格瑞那丁",
      WS: "薩摩亞",
      SM: "聖馬利諾",
      ST: "聖多美普林西比",
      SA: "沙烏地阿拉伯",
      SN: "塞內加爾",
      RS: "塞爾維亞",
      SC: "塞席爾",
      SL: "獅子山",
      SG: "新加坡",
      SX: "荷屬聖馬丁",
      SK: "斯洛伐克",
      SI: "斯洛維尼亞",
      SB: "索羅門群島",
      SO: "索馬利亞",
      ZA: "南非",
      GS: "南喬治亞和南桑威奇群島",
      SS: "南蘇丹",
      ES: "西班牙",
      LK: "斯里蘭卡",
      SD: "蘇丹",
      SR: "蘇利南",
      SJ: "斯瓦爾巴和揚馬延",
      SE: "瑞典",
      CH: "瑞士",
      SY: "敘利亞",
      TW: "中國臺灣",
      TJ: "塔吉克",
      TZ: "坦尚尼亞",
      TH: "泰國",
      TL: "東帝汶",
      TG: "多哥",
      TK: "托克勞",
      TO: "東加",
      TT: "千里達及托巴哥",
      TN: "突尼西亞",
      TR: "土耳其",
      TM: "土庫曼",
      TC: "土克凱可群島",
      TV: "吐瓦魯",
      UG: "烏干達",
      UA: "烏克蘭",
      AE: "阿聯",
      GB: "英國",
      US: "美國",
      UM: "美國本土外小島嶼",
      UY: "烏拉圭",
      UZ: "烏茲別克",
      VU: "萬那杜",
      VE: "委內瑞拉",
      VN: "越南",
      VG: "英屬維京群島",
      VI: "美屬維京群島",
      WF: "瓦利斯和富圖納",
      EH: "西撒哈拉",
      YE: "葉門",
      ZM: "尚比亞",
      ZW: "辛巴威"
    };
  } else if (["zh-my", "zh-sg"].includes(wgUserLanguage)) {
    return {
      AF: "阿富汗",
      AX: "奥兰",
      AL: "阿尔巴尼亚",
      DZ: "阿尔及利亚",
      AS: "美属萨摩亚",
      AD: "安道尔",
      AO: "安哥拉",
      AI: "安圭拉",
      AQ: "南极洲",
      AG: "安提瓜和巴布达",
      AR: "阿根廷",
      AM: "亚美尼亚",
      AW: "阿鲁巴",
      AU: "澳大利亚",
      AT: "奥地利",
      AZ: "阿塞拜疆",
      BS: "巴哈马",
      BH: "巴林",
      BD: "孟加拉国",
      BB: "巴巴多斯",
      BY: "白俄罗斯",
      BE: "比利时",
      BZ: "伯利兹",
      BJ: "贝宁",
      BM: "百慕大",
      BT: "不丹",
      BO: "玻利维亚",
      BQ: "荷兰加勒比区",
      BA: "波黑",
      BW: "博茨瓦纳",
      BV: "布韦岛",
      BR: "巴西",
      IO: "英属印度洋领地",
      BN: "汶莱",
      BG: "保加利亚",
      BF: "布基纳法索",
      BI: "布隆迪",
      CV: "佛得角",
      KH: "柬埔寨",
      CM: "喀麦隆",
      CA: "加拿大",
      KY: "开曼群岛",
      CF: "中非",
      TD: "乍得",
      CL: "智利",
      CN: "中国",
      CX: "圣诞岛",
      CC: "科科斯（基林）群岛",
      CO: "哥伦比亚",
      KM: "科摩罗",
      CG: "刚果共和国",
      CD: "刚果民主共和国",
      CK: "库克群岛",
      CR: "哥斯达黎加",
      CI: "象牙海岸",
      HR: "克罗地亚",
      CU: "古巴",
      CW: "库拉索",
      CY: "塞浦路斯",
      CZ: "捷克",
      DK: "丹麦",
      DJ: "吉布提",
      DM: "多米尼克",
      DO: "多米尼加",
      EC: "厄瓜多尔",
      EG: "埃及",
      SV: "萨尔瓦多",
      GQ: "赤道几内亚",
      ER: "厄立特里亚",
      EE: "爱沙尼亚",
      SZ: "斯威士兰",
      ET: "埃塞俄比亚",
      FK: "福克兰群岛",
      FO: "法罗群岛",
      FJ: "斐济",
      FI: "芬兰",
      FR: "法国",
      GF: "法属圭亚那",
      PF: "法属波利尼西亚",
      TF: "法属南部和南极领地",
      GA: "加蓬",
      GM: "冈比亚",
      GE: "格鲁吉亚",
      DE: "德国",
      GH: "加纳",
      GI: "直布罗陀",
      GR: "希腊",
      GL: "格陵兰",
      GD: "格林纳达",
      GP: "瓜德罗普",
      GU: "关岛",
      GT: "危地马拉",
      GG: "根西",
      GN: "几内亚",
      GW: "几内亚比绍",
      GY: "圭亚那",
      HT: "海地",
      HM: "赫德岛和麦克唐纳群岛",
      VA: "梵蒂冈",
      HN: "洪都拉斯",
      HK: "中国香港",
      HU: "匈牙利",
      IS: "冰岛",
      IN: "印度",
      ID: "印尼",
      IR: "伊朗",
      IQ: "伊拉克",
      IE: "爱尔兰",
      IM: "马恩岛",
      IL: "以色列",
      IT: "意大利",
      JM: "牙买加",
      JP: "日本",
      JE: "泽西",
      JO: "约旦",
      KZ: "哈萨克斯坦",
      KE: "肯尼亚",
      KI: "基里巴斯",
      KP: "北韩",
      KR: "韩国",
      KW: "科威特",
      KG: "吉尔吉斯斯坦",
      LA: "老挝",
      LV: "拉脱维亚",
      LB: "黎巴嫩",
      LS: "莱索托",
      LR: "利比里亚",
      LY: "利比亚",
      LI: "列支敦士登",
      LT: "立陶宛",
      LU: "卢森堡",
      MO: "中国澳门",
      MG: "马达加斯加",
      MW: "马拉维",
      MY: "马来西亚",
      MV: "马尔代夫",
      ML: "马里",
      MT: "马耳他",
      MH: "马绍尔群岛",
      MQ: "马提尼克",
      MR: "毛里塔尼亚",
      MU: "毛里求斯",
      YT: "马约特",
      MX: "墨西哥",
      FM: "密克罗尼西亚联邦",
      MD: "摩尔多瓦",
      MC: "摩纳哥",
      MN: "蒙古",
      ME: "黑山",
      MS: "蒙特塞拉特",
      MA: "摩洛哥",
      MZ: "莫桑比克",
      MM: "缅甸",
      NA: "那米比亚",
      NR: "瑙鲁",
      NP: "尼泊尔",
      NL: "荷兰",
      NC: "新喀里多尼亚",
      NZ: "新西兰",
      NI: "尼加拉瓜",
      NE: "尼日尔",
      NG: "尼日利亚",
      NU: "纽埃",
      NF: "诺福克岛",
      MK: "北马其顿",
      MP: "北马里亚纳群岛",
      NO: "挪威",
      OM: "阿曼",
      PK: "巴基斯坦",
      PW: "帕劳",
      PS: "巴勒斯坦",
      PA: "巴拿马",
      PG: "巴布亚新几内亚",
      PY: "巴拉圭",
      PE: "秘鲁",
      PH: "菲律宾",
      PN: "皮特凯恩群岛",
      PL: "波兰",
      PT: "葡萄牙",
      PR: "波多黎各",
      QA: "卡塔尔",
      RE: "留尼汪",
      RO: "罗马尼亚",
      RU: "俄罗斯",
      RW: "卢旺达",
      BL: "圣巴泰勒米",
      SH: "圣赫勒拿、阿森松和特里斯坦-达库尼亚",
      KN: "圣基茨和尼维斯",
      LC: "圣卢西亚",
      MF: "法属圣马丁",
      PM: "圣皮埃尔和密克隆",
      VC: "圣文森特和格林纳丁斯",
      WS: "萨摩亚",
      SM: "圣马力诺",
      ST: "圣多美和普林西比",
      SA: "沙特阿拉伯",
      SN: "塞内加尔",
      RS: "塞尔维亚",
      SC: "塞舌尔",
      SL: "塞拉利昂",
      SG: "新加坡",
      SX: "荷属圣马丁",
      SK: "斯洛伐克",
      SI: "斯洛文尼亚",
      SB: "所罗门群岛",
      SO: "索马里",
      ZA: "南非",
      GS: "南乔治亚和南桑威奇群岛",
      SS: "南苏丹",
      ES: "西班牙",
      LK: "斯里兰卡",
      SD: "苏丹",
      SR: "苏里南",
      SJ: "斯瓦尔巴和扬马延",
      SE: "瑞典",
      CH: "瑞士",
      SY: "叙利亚",
      TW: "中国台湾",
      TJ: "塔吉克斯坦",
      TZ: "坦桑尼亚",
      TH: "泰国",
      TL: "东帝汶",
      TG: "多哥",
      TK: "托克劳",
      TO: "汤加",
      TT: "特立尼达和多巴哥",
      TN: "突尼斯",
      TR: "土耳其",
      TM: "土库曼斯坦",
      TC: "特克斯和凯科斯群岛",
      TV: "图瓦卢",
      UG: "乌干达",
      UA: "乌克兰",
      AE: "阿联酋",
      GB: "英国",
      US: "美国",
      UM: "美国本土外小岛屿",
      UY: "乌拉圭",
      UZ: "乌兹别克斯坦",
      VU: "瓦努阿图",
      VE: "委内瑞拉",
      VN: "越南",
      VG: "英属维尔京群岛",
      VI: "美属维尔京群岛",
      WF: "瓦利斯和富图纳",
      EH: "西撒哈拉",
      YE: "也门",
      ZM: "赞比亚",
      ZW: "津巴布韦"
    };
  }
  return {
    AF: "阿富汗",
    AX: "奥兰",
    AL: "阿尔巴尼亚",
    DZ: "阿尔及利亚",
    AS: "美属萨摩亚",
    AD: "安道尔",
    AO: "安哥拉",
    AI: "安圭拉",
    AQ: "南极洲",
    AG: "安提瓜和巴布达",
    AR: "阿根廷",
    AM: "亚美尼亚",
    AW: "阿鲁巴",
    AU: "澳大利亚",
    AT: "奥地利",
    AZ: "阿塞拜疆",
    BS: "巴哈马",
    BH: "巴林",
    BD: "孟加拉国",
    BB: "巴巴多斯",
    BY: "白俄罗斯",
    BE: "比利时",
    BZ: "伯利兹",
    BJ: "贝宁",
    BM: "百慕大",
    BT: "不丹",
    BO: "玻利维亚",
    BQ: "荷兰加勒比区",
    BA: "波黑",
    BW: "博茨瓦纳",
    BV: "布韦岛",
    BR: "巴西",
    IO: "英属印度洋领地",
    BN: "文莱",
    BG: "保加利亚",
    BF: "布基纳法索",
    BI: "布隆迪",
    CV: "佛得角",
    KH: "柬埔寨",
    CM: "喀麦隆",
    CA: "加拿大",
    KY: "开曼群岛",
    CF: "中非",
    TD: "乍得",
    CL: "智利",
    CN: "中国",
    CX: "圣诞岛",
    CC: "科科斯（基林）群岛",
    CO: "哥伦比亚",
    KM: "科摩罗",
    CG: "刚果共和国",
    CD: "刚果民主共和国",
    CK: "库克群岛",
    CR: "哥斯达黎加",
    CI: "科特迪瓦",
    HR: "克罗地亚",
    CU: "古巴",
    CW: "库拉索",
    CY: "塞浦路斯",
    CZ: "捷克",
    DK: "丹麦",
    DJ: "吉布提",
    DM: "多米尼克",
    DO: "多米尼加",
    EC: "厄瓜多尔",
    EG: "埃及",
    SV: "萨尔瓦多",
    GQ: "赤道几内亚",
    ER: "厄立特里亚",
    EE: "爱沙尼亚",
    SZ: "斯威士兰",
    ET: "埃塞俄比亚",
    FK: "福克兰群岛",
    FO: "法罗群岛",
    FJ: "斐济",
    FI: "芬兰",
    FR: "法国",
    GF: "法属圭亚那",
    PF: "法属波利尼西亚",
    TF: "法属南部和南极领地",
    GA: "加蓬",
    GM: "冈比亚",
    GE: "格鲁吉亚",
    DE: "德国",
    GH: "加纳",
    GI: "直布罗陀",
    GR: "希腊",
    GL: "格陵兰",
    GD: "格林纳达",
    GP: "瓜德罗普",
    GU: "关岛",
    GT: "危地马拉",
    GG: "根西",
    GN: "几内亚",
    GW: "几内亚比绍",
    GY: "圭亚那",
    HT: "海地",
    HM: "赫德岛和麦克唐纳群岛",
    VA: "梵蒂冈",
    HN: "洪都拉斯",
    HK: "中国香港",
    HU: "匈牙利",
    IS: "冰岛",
    IN: "印度",
    ID: "印尼",
    IR: "伊朗",
    IQ: "伊拉克",
    IE: "爱尔兰",
    IM: "马恩岛",
    IL: "以色列",
    IT: "意大利",
    JM: "牙买加",
    JP: "日本",
    JE: "泽西",
    JO: "约旦",
    KZ: "哈萨克斯坦",
    KE: "肯尼亚",
    KI: "基里巴斯",
    KP: "朝鲜",
    KR: "韩国",
    KW: "科威特",
    KG: "吉尔吉斯斯坦",
    LA: "老挝",
    LV: "拉脱维亚",
    LB: "黎巴嫩",
    LS: "莱索托",
    LR: "利比里亚",
    LY: "利比亚",
    LI: "列支敦士登",
    LT: "立陶宛",
    LU: "卢森堡",
    MO: "中国澳门",
    MG: "马达加斯加",
    MW: "马拉维",
    MY: "马来西亚",
    MV: "马尔代夫",
    ML: "马里",
    MT: "马耳他",
    MH: "马绍尔群岛",
    MQ: "马提尼克",
    MR: "毛里塔尼亚",
    MU: "毛里求斯",
    YT: "马约特",
    MX: "墨西哥",
    FM: "密克罗尼西亚联邦",
    MD: "摩尔多瓦",
    MC: "摩纳哥",
    MN: "蒙古",
    ME: "黑山",
    MS: "蒙特塞拉特",
    MA: "摩洛哥",
    MZ: "莫桑比克",
    MM: "缅甸",
    NA: "纳米比亚",
    NR: "瑙鲁",
    NP: "尼泊尔",
    NL: "荷兰",
    NC: "新喀里多尼亚",
    NZ: "新西兰",
    NI: "尼加拉瓜",
    NE: "尼日尔",
    NG: "尼日利亚",
    NU: "纽埃",
    NF: "诺福克岛",
    MK: "北马其顿",
    MP: "北马里亚纳群岛",
    NO: "挪威",
    OM: "阿曼",
    PK: "巴基斯坦",
    PW: "帕劳",
    PS: "巴勒斯坦",
    PA: "巴拿马",
    PG: "巴布亚新几内亚",
    PY: "巴拉圭",
    PE: "秘鲁",
    PH: "菲律宾",
    PN: "皮特凯恩群岛",
    PL: "波兰",
    PT: "葡萄牙",
    PR: "波多黎各",
    QA: "卡塔尔",
    RE: "留尼汪",
    RO: "罗马尼亚",
    RU: "俄罗斯",
    RW: "卢旺达",
    BL: "圣巴泰勒米",
    SH: "圣赫勒拿、阿森松和特里斯坦-达库尼亚",
    KN: "圣基茨和尼维斯",
    LC: "圣卢西亚",
    MF: "法属圣马丁",
    PM: "圣皮埃尔和密克隆",
    VC: "圣文森特和格林纳丁斯",
    WS: "萨摩亚",
    SM: "圣马力诺",
    ST: "圣多美和普林西比",
    SA: "沙特阿拉伯",
    SN: "塞内加尔",
    RS: "塞尔维亚",
    SC: "塞舌尔",
    SL: "塞拉利昂",
    SG: "新加坡",
    SX: "荷属圣马丁",
    SK: "斯洛伐克",
    SI: "斯洛文尼亚",
    SB: "所罗门群岛",
    SO: "索马里",
    ZA: "南非",
    GS: "南乔治亚和南桑威奇群岛",
    SS: "南苏丹",
    ES: "西班牙",
    LK: "斯里兰卡",
    SD: "苏丹",
    SR: "苏里南",
    SJ: "斯瓦尔巴和扬马延",
    SE: "瑞典",
    CH: "瑞士",
    SY: "叙利亚",
    TW: "中国臺湾",
    TJ: "塔吉克斯坦",
    TZ: "坦桑尼亚",
    TH: "泰国",
    TL: "东帝汶",
    TG: "多哥",
    TK: "托克劳",
    TO: "汤加",
    TT: "特立尼达和多巴哥",
    TN: "突尼斯",
    TR: "土耳其",
    TM: "土库曼斯坦",
    TC: "特克斯和凯科斯群岛",
    TV: "图瓦卢",
    UG: "乌干达",
    UA: "乌克兰",
    AE: "阿联酋",
    GB: "英国",
    US: "美国",
    UM: "美国本土外小岛屿",
    UY: "乌拉圭",
    UZ: "乌兹别克斯坦",
    VU: "瓦努阿图",
    VE: "委内瑞拉",
    VN: "越南",
    VG: "英属维尔京群岛",
    VI: "美属维尔京群岛",
    WF: "瓦利斯和富图纳",
    EH: "西撒哈拉",
    YE: "也门",
    ZM: "赞比亚",
    ZW: "津巴布韦"
  };
};
var getRegionNameList = () => {
  const {
    wgUserLanguage
  } = mw.config.get();
  if (["zh-hant", "zh-hk", "zh-mo", "zh-tw"].includes(wgUserLanguage)) {
    return {
      AH: "安徽",
      BJ: "北京",
      CQ: "重慶",
      FJ: "福建",
      GD: "廣東",
      GS: "甘肅",
      GX: "廣西",
      GZ: "貴州",
      HA: "河南",
      HB: "湖北",
      HE: "河北",
      HI: "海南",
      HL: "黑龍江",
      HN: "湖南",
      JL: "吉林",
      JS: "江蘇",
      JX: "江西",
      LN: "遼寧",
      NM: "內蒙古",
      NX: "寧夏",
      QH: "青海",
      SC: "四川",
      SD: "山東",
      SH: "上海",
      SN: "陝西",
      SX: "山西",
      TJ: "天津",
      XJ: "新疆",
      XZ: "西藏",
      YN: "雲南",
      ZJ: "浙江"
    };
  }
  return {
    AH: "安徽",
    BJ: "北京",
    CQ: "重庆",
    FJ: "福建",
    GD: "广东",
    GS: "甘肃",
    GX: "广西",
    GZ: "贵州",
    HA: "河南",
    HB: "湖北",
    HE: "河北",
    HI: "海南",
    HL: "黑龙江",
    HN: "湖南",
    JL: "吉林",
    JS: "江苏",
    JX: "江西",
    LN: "辽宁",
    NM: "内蒙古",
    NX: "宁夏",
    QH: "青海",
    SC: "四川",
    SD: "山东",
    SH: "上海",
    SN: "陕西",
    SX: "山西",
    TJ: "天津",
    XJ: "新疆",
    XZ: "西藏",
    YN: "云南",
    ZJ: "浙江"
  };
};
//! src/GeoLocationReader/modules/util/getName.ts
var countryOrAreaList = getCountryOrAreaNameList();
var regionList = getRegionNameList();
var getCountryOrAreaName = (key) => {
  return countryOrAreaList[key];
};
var getRegionName = (key) => {
  return regionList[key];
};
//! src/GeoLocationReader/modules/api.ts
var import_ext_gadget4 = require("ext.gadget.Util");
var api = (0, import_ext_gadget4.initMwApi)("GeoLocationReader/".concat(version));
//! src/GeoLocationReader/modules/util/getLocation.ts
var getLocation = /* @__PURE__ */ (function() {
  var _ref = _asyncToGenerator(function* (wgRelevantUserName) {
    const storePageTitle = "User:".concat(wgRelevantUserName, "/GeoIP.json");
    let countryOrAreaName = getMessage("Unknown");
    let regionName = "";
    if (mw.storage.getObject(storageKey + wgRelevantUserName)) {
      ({
        countryOrAreaName,
        regionName
      } = mw.storage.getObject(storageKey + wgRelevantUserName));
    } else {
      try {
        var _data$query$pages$, _data$query;
        const params = {
          action: "query",
          format: "json",
          formatversion: "2",
          titles: [storePageTitle],
          prop: ["revisions"],
          rvprop: ["content"],
          rvslots: "main",
          smaxage: 600,
          maxage: 600
        };
        const data = yield api.get(params);
        const content = ((_data$query$pages$ = data["query"].pages[0]) !== null && _data$query$pages$ !== void 0 && _data$query$pages$.missing ? "" : (_data$query = data["query"]) === null || _data$query === void 0 || (_data$query = _data$query.pages[0]) === null || _data$query === void 0 || (_data$query = _data$query.revisions) === null || _data$query === void 0 ? void 0 : _data$query[0].slots.main.content) || "";
        const response = JSON.parse(content);
        if (!(response.country || response.countryOrArea) && !response.region) {
          return;
        }
        const {
          country,
          countryOrArea,
          region
        } = response;
        let location = "";
        if (country || countryOrArea) {
          location = country || countryOrArea;
        }
        if (getCountryOrAreaName(location)) {
          countryOrAreaName = getCountryOrAreaName(location) || getMessage("Unknown");
        }
        if (location && location === "CN") {
          regionName = getRegionName(region) || "";
        }
        mw.storage.setObject(storageKey + wgRelevantUserName, {
          countryOrAreaName,
          regionName
        }, 60 * 60);
      } catch (error) {
        console.error("[GeoLocationReader] Ajax error in `getLocation` method:", error);
      }
    }
    return {
      countryOrAreaName,
      regionName
    };
  });
  return function getLocation2(_x) {
    return _ref.apply(this, arguments);
  };
})();
//! src/GeoLocationReader/modules/appendGeoIcon.tsx
var appendGeoIcon = /* @__PURE__ */ (function() {
  var _ref2 = _asyncToGenerator(function* () {
    const {
      wgRelevantUserName
    } = mw.config.get();
    if (!wgRelevantUserName) {
      return;
    }
    try {
      var _response$countryOrAr, _response$regionName;
      const response = yield getLocation(wgRelevantUserName);
      const countryOrAreaName = (_response$countryOrAr = response === null || response === void 0 ? void 0 : response.countryOrAreaName) !== null && _response$countryOrAr !== void 0 ? _response$countryOrAr : "";
      const regionName = (_response$regionName = response === null || response === void 0 ? void 0 : response.regionName) !== null && _response$regionName !== void 0 ? _response$regionName : "";
      appendIcon({
        icon: "globe",
        indicatorText: countryOrAreaName + regionName,
        spanClass: "green"
      });
    } catch (error) {
      console.error("[GeoLocationReader] Ajax error in `appendGeoIcon` method:", error);
      appendIcon({
        icon: "helpNotice",
        indicatorText: getMessage("Unknown"),
        spanClass: "orange"
      });
    }
  });
  return function appendGeoIcon2() {
    return _ref2.apply(this, arguments);
  };
})();
//! src/GeoLocationReader/modules/addElement.ts
var import_ext_gadget5 = require("ext.gadget.MarkRights");
var addElement = /* @__PURE__ */ (function() {
  var _ref3 = _asyncToGenerator(function* () {
    const {
      wgRelevantUserName
    } = mw.config.get();
    if (!wgRelevantUserName) {
      return;
    }
    try {
      var _groupsMap$wgRelevant;
      const groupsMap = yield (0, import_ext_gadget5.getLocalUserGroups)([wgRelevantUserName]);
      const groups = (_groupsMap$wgRelevant = groupsMap[wgRelevantUserName]) !== null && _groupsMap$wgRelevant !== void 0 ? _groupsMap$wgRelevant : [];
      if (groups.includes("bot") || groups.includes("qiuwen")) {
      } else {
        void appendGeoIcon();
      }
    } catch (error) {
      console.error("[GeoLocationReader] Ajax error in `addElement` method:", error);
    }
  });
  return function addElement2() {
    return _ref3.apply(this, arguments);
  };
})();
//! src/GeoLocationReader/GeoLocationReader.ts
(function geoLocationReader() {
  const {
    wgAction,
    wgNamespaceNumber,
    wgPageName,
    wgRelevantUserName
  } = mw.config.get();
  if (!wgRelevantUserName || SYSTEM_SCRIPT_LIST.includes(wgRelevantUserName) || WEBMASTER_LIST.includes(wgRelevantUserName) || !(wgNamespaceNumber === userNameSpaceNumber) || !(wgAction === "view")) {
    return;
  }
  const pageName = new mw.Title(wgPageName).toText();
  const relevantUserPageName = new mw.Title(wgRelevantUserName, userNameSpaceNumber).toText();
  if (pageName !== relevantUserPageName) {
    return;
  }
  void addElement();
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwtdGhpcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZhaWxzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVzY3JpcHRvcnMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2xhc3NvZi1yYXcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbmRleGVkLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1jYWxsYWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1idWlsdC1pbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbnZpcm9ubWVudC11c2VyLWFnZW50LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdjgtdmVyc2lvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXN5bWJvbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RyeS10by1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWNhbGxhYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1Zy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1uYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9tYXRoLXRydW5jLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjQ5LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtYXJyYXkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1zdHJpbmctdGFnLXN1cHBvcnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jbGFzc29mLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tc3RyaW5nLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNDkuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcGFyc2UtanNvbi1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy40OS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuanNvbi5wYXJzZS5qcyIsICJzcmMvR2VvTG9jYXRpb25SZWFkZXIvb3B0aW9ucy5qc29uIiwgInNyYy9HZW9Mb2NhdGlvbi9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9HZW9Mb2NhdGlvblJlYWRlci9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9HZW9Mb2NhdGlvblJlYWRlci9tb2R1bGVzL2NvbXBvbmVudHMvcmVhY3QudHN4IiwgInNyYy9HZW9Mb2NhdGlvblJlYWRlci9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0dlb0xvY2F0aW9uUmVhZGVyL21vZHVsZXMvdXRpbC9hcHBlbmRJY29uLnRzeCIsICJzcmMvR2VvTG9jYXRpb25SZWFkZXIvbW9kdWxlcy91dGlsL25hbWUudHMiLCAic3JjL0dlb0xvY2F0aW9uUmVhZGVyL21vZHVsZXMvdXRpbC9nZXROYW1lLnRzIiwgInNyYy9HZW9Mb2NhdGlvblJlYWRlci9tb2R1bGVzL2FwaS50cyIsICJzcmMvR2VvTG9jYXRpb25SZWFkZXIvbW9kdWxlcy91dGlsL2dldExvY2F0aW9uLnRzIiwgInNyYy9HZW9Mb2NhdGlvblJlYWRlci9tb2R1bGVzL2FwcGVuZEdlb0ljb24udHN4IiwgInNyYy9HZW9Mb2NhdGlvblJlYWRlci9tb2R1bGVzL2FkZEVsZW1lbnQudHMiLCAic3JjL0dlb0xvY2F0aW9uUmVhZGVyL0dlb0xvY2F0aW9uUmVhZGVyLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIndXNlIHN0cmljdCc7XG52YXIgY2hlY2sgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICYmIGl0Lk1hdGggPT09IE1hdGggJiYgaXQ7XG59O1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxubW9kdWxlLmV4cG9ydHMgPVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZ2xvYmFsLXRoaXMgLS0gc2FmZVxuICBjaGVjayh0eXBlb2YgZ2xvYmFsVGhpcyA9PSAnb2JqZWN0JyAmJiBnbG9iYWxUaGlzKSB8fFxuICBjaGVjayh0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdykgfHxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAtLSBzYWZlXG4gIGNoZWNrKHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYpIHx8XG4gIGNoZWNrKHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsKSB8fFxuICBjaGVjayh0eXBlb2YgdGhpcyA9PSAnb2JqZWN0JyAmJiB0aGlzKSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmMgLS0gZmFsbGJhY2tcbiAgKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pKCkgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBEZXRlY3QgSUU4J3MgaW5jb21wbGV0ZSBkZWZpbmVQcm9wZXJ0eSBpbXBsZW1lbnRhdGlvblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sIDEsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pWzFdICE9PSA3O1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWZ1bmN0aW9uLXByb3RvdHlwZS1iaW5kIC0tIHNhZmVcbiAgdmFyIHRlc3QgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0uYmluZCgpO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zIC0tIHNhZmVcbiAgcmV0dXJuIHR5cGVvZiB0ZXN0ICE9ICdmdW5jdGlvbicgfHwgdGVzdC5oYXNPd25Qcm9wZXJ0eSgncHJvdG90eXBlJyk7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgTkFUSVZFX0JJTkQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUnKTtcblxudmFyIGNhbGwgPSBGdW5jdGlvbi5wcm90b3R5cGUuY2FsbDtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1mdW5jdGlvbi1wcm90b3R5cGUtYmluZCAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9CSU5EID8gY2FsbC5iaW5kKGNhbGwpIDogZnVuY3Rpb24gKCkge1xuICByZXR1cm4gY2FsbC5hcHBseShjYWxsLCBhcmd1bWVudHMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gTmFzaG9ybiB+IEpESzggYnVnXG52YXIgTkFTSE9STl9CVUcgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgJiYgISRwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHsgMTogMiB9LCAxKTtcblxuLy8gYE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGVgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QucHJvdG90eXBlLnByb3BlcnR5aXNlbnVtZXJhYmxlXG5leHBvcnRzLmYgPSBOQVNIT1JOX0JVRyA/IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKFYpIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGhpcywgVik7XG4gIHJldHVybiAhIWRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci5lbnVtZXJhYmxlO1xufSA6ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgY2FsbCA9IEZ1bmN0aW9uUHJvdG90eXBlLmNhbGw7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZnVuY3Rpb24tcHJvdG90eXBlLWJpbmQgLS0gc2FmZVxudmFyIHVuY3VycnlUaGlzV2l0aEJpbmQgPSBOQVRJVkVfQklORCAmJiBGdW5jdGlvblByb3RvdHlwZS5iaW5kLmJpbmQoY2FsbCwgY2FsbCk7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX0JJTkQgPyB1bmN1cnJ5VGhpc1dpdGhCaW5kIDogZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGNhbGwuYXBwbHkoZm4sIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxudmFyIHRvU3RyaW5nID0gdW5jdXJyeVRoaXMoe30udG9TdHJpbmcpO1xudmFyIHN0cmluZ1NsaWNlID0gdW5jdXJyeVRoaXMoJycuc2xpY2UpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gc3RyaW5nU2xpY2UodG9TdHJpbmcoaXQpLCA4LCAtMSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG52YXIgc3BsaXQgPSB1bmN1cnJ5VGhpcygnJy5zcGxpdCk7XG5cbi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG5tb2R1bGUuZXhwb3J0cyA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gdGhyb3dzIGFuIGVycm9yIGluIHJoaW5vLCBzZWUgaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvcmhpbm8vaXNzdWVzLzM0NlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zIC0tIHNhZmVcbiAgcmV0dXJuICEkT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCk7XG59KSA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY2xhc3NvZihpdCkgPT09ICdTdHJpbmcnID8gc3BsaXQoaXQsICcnKSA6ICRPYmplY3QoaXQpO1xufSA6ICRPYmplY3Q7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gd2UgY2FuJ3QgdXNlIGp1c3QgYGl0ID09IG51bGxgIHNpbmNlIG9mIGBkb2N1bWVudC5hbGxgIHNwZWNpYWwgY2FzZVxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1Jc0hUTUxEREEtaW50ZXJuYWwtc2xvdC1hZWNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA9PT0gbnVsbCB8fCBpdCA9PT0gdW5kZWZpbmVkO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtbnVsbC1vci11bmRlZmluZWQnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcmVxdWlyZW9iamVjdGNvZXJjaWJsZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGlzTnVsbE9yVW5kZWZpbmVkKGl0KSkgdGhyb3cgbmV3ICRUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSW5kZXhlZE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGl0KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtSXNIVE1MRERBLWludGVybmFsLXNsb3RcbnZhciBkb2N1bWVudEFsbCA9IHR5cGVvZiBkb2N1bWVudCA9PSAnb2JqZWN0JyAmJiBkb2N1bWVudC5hbGw7XG5cbi8vIGBJc0NhbGxhYmxlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXNjYWxsYWJsZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vbm8tdHlwZW9mLXVuZGVmaW5lZCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xubW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgZG9jdW1lbnRBbGwgPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnRBbGwgIT09IHVuZGVmaW5lZCA/IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gdHlwZW9mIGFyZ3VtZW50ID09ICdmdW5jdGlvbicgfHwgYXJndW1lbnQgPT09IGRvY3VtZW50QWxsO1xufSA6IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gdHlwZW9mIGFyZ3VtZW50ID09ICdmdW5jdGlvbic7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IGlzQ2FsbGFibGUoaXQpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIGFGdW5jdGlvbiA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gaXNDYWxsYWJsZShhcmd1bWVudCkgPyBhcmd1bWVudCA6IHVuZGVmaW5lZDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWVzcGFjZSwgbWV0aG9kKSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IGFGdW5jdGlvbihnbG9iYWxUaGlzW25hbWVzcGFjZV0pIDogZ2xvYmFsVGhpc1tuYW1lc3BhY2VdICYmIGdsb2JhbFRoaXNbbmFtZXNwYWNlXVttZXRob2RdO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gdW5jdXJyeVRoaXMoe30uaXNQcm90b3R5cGVPZik7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcblxudmFyIG5hdmlnYXRvciA9IGdsb2JhbFRoaXMubmF2aWdhdG9yO1xudmFyIHVzZXJBZ2VudCA9IG5hdmlnYXRvciAmJiBuYXZpZ2F0b3IudXNlckFnZW50O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVzZXJBZ2VudCA/IFN0cmluZyh1c2VyQWdlbnQpIDogJyc7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdXNlci1hZ2VudCcpO1xuXG52YXIgcHJvY2VzcyA9IGdsb2JhbFRoaXMucHJvY2VzcztcbnZhciBEZW5vID0gZ2xvYmFsVGhpcy5EZW5vO1xudmFyIHZlcnNpb25zID0gcHJvY2VzcyAmJiBwcm9jZXNzLnZlcnNpb25zIHx8IERlbm8gJiYgRGVuby52ZXJzaW9uO1xudmFyIHY4ID0gdmVyc2lvbnMgJiYgdmVyc2lvbnMudjg7XG52YXIgbWF0Y2gsIHZlcnNpb247XG5cbmlmICh2OCkge1xuICBtYXRjaCA9IHY4LnNwbGl0KCcuJyk7XG4gIC8vIGluIG9sZCBDaHJvbWUsIHZlcnNpb25zIG9mIFY4IGlzbid0IFY4ID0gQ2hyb21lIC8gMTBcbiAgLy8gYnV0IHRoZWlyIGNvcnJlY3QgdmVyc2lvbnMgYXJlIG5vdCBpbnRlcmVzdGluZyBmb3IgdXNcbiAgdmVyc2lvbiA9IG1hdGNoWzBdID4gMCAmJiBtYXRjaFswXSA8IDQgPyAxIDogKyhtYXRjaFswXSArIG1hdGNoWzFdKTtcbn1cblxuLy8gQnJvd3NlckZTIE5vZGVKUyBgcHJvY2Vzc2AgcG9seWZpbGwgaW5jb3JyZWN0bHkgc2V0IGAudjhgIHRvIGAwLjBgXG4vLyBzbyBjaGVjayBgdXNlckFnZW50YCBldmVuIGlmIGAudjhgIGV4aXN0cywgYnV0IDBcbmlmICghdmVyc2lvbiAmJiB1c2VyQWdlbnQpIHtcbiAgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2goL0VkZ2VcXC8oXFxkKykvKTtcbiAgaWYgKCFtYXRjaCB8fCBtYXRjaFsxXSA+PSA3NCkge1xuICAgIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9DaHJvbWVcXC8oXFxkKykvKTtcbiAgICBpZiAobWF0Y2gpIHZlcnNpb24gPSArbWF0Y2hbMV07XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2ZXJzaW9uO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLXN5bWJvbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZyAqL1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdjgtdmVyc2lvbicpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xuXG52YXIgJFN0cmluZyA9IGdsb2JhbFRoaXMuU3RyaW5nO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5c3ltYm9scyAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xubW9kdWxlLmV4cG9ydHMgPSAhIU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN5bWJvbCA9IFN5bWJvbCgnc3ltYm9sIGRldGVjdGlvbicpO1xuICAvLyBDaHJvbWUgMzggU3ltYm9sIGhhcyBpbmNvcnJlY3QgdG9TdHJpbmcgY29udmVyc2lvblxuICAvLyBgZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzYCBwb2x5ZmlsbCBzeW1ib2xzIGNvbnZlcnRlZCB0byBvYmplY3QgYXJlIG5vdCBTeW1ib2wgaW5zdGFuY2VzXG4gIC8vIG5iOiBEbyBub3QgY2FsbCBgU3RyaW5nYCBkaXJlY3RseSB0byBhdm9pZCB0aGlzIGJlaW5nIG9wdGltaXplZCBvdXQgdG8gYHN5bWJvbCsnJ2Agd2hpY2ggd2lsbCxcbiAgLy8gb2YgY291cnNlLCBmYWlsLlxuICByZXR1cm4gISRTdHJpbmcoc3ltYm9sKSB8fCAhKE9iamVjdChzeW1ib2wpIGluc3RhbmNlb2YgU3ltYm9sKSB8fFxuICAgIC8vIENocm9tZSAzOC00MCBzeW1ib2xzIGFyZSBub3QgaW5oZXJpdGVkIGZyb20gRE9NIGNvbGxlY3Rpb25zIHByb3RvdHlwZXMgdG8gaW5zdGFuY2VzXG4gICAgIVN5bWJvbC5zaGFtICYmIFY4X1ZFUlNJT04gJiYgVjhfVkVSU0lPTiA8IDQxO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tc3ltYm9sIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zeW1ib2wtY29uc3RydWN0b3ItZGV0ZWN0aW9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX1NZTUJPTCAmJlxuICAhU3ltYm9sLnNoYW0gJiZcbiAgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mJyk7XG52YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbm1vZHVsZS5leHBvcnRzID0gVVNFX1NZTUJPTF9BU19VSUQgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyICRTeW1ib2wgPSBnZXRCdWlsdEluKCdTeW1ib2wnKTtcbiAgcmV0dXJuIGlzQ2FsbGFibGUoJFN5bWJvbCkgJiYgaXNQcm90b3R5cGVPZigkU3ltYm9sLnByb3RvdHlwZSwgJE9iamVjdChpdCkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJFN0cmluZyA9IFN0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gJFN0cmluZyhhcmd1bWVudCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuICdPYmplY3QnO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgdHJ5VG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdHJ5LXRvLXN0cmluZycpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYEFzc2VydDogSXNDYWxsYWJsZShhcmd1bWVudCkgaXMgdHJ1ZWBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIGlmIChpc0NhbGxhYmxlKGFyZ3VtZW50KSkgcmV0dXJuIGFyZ3VtZW50O1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcih0cnlUb1N0cmluZyhhcmd1bWVudCkgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkJyk7XG5cbi8vIGBHZXRNZXRob2RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1nZXRtZXRob2Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFYsIFApIHtcbiAgdmFyIGZ1bmMgPSBWW1BdO1xuICByZXR1cm4gaXNOdWxsT3JVbmRlZmluZWQoZnVuYykgPyB1bmRlZmluZWQgOiBhQ2FsbGFibGUoZnVuYyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgT3JkaW5hcnlUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9yZGluYXJ5dG9wcmltaXRpdmVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBwcmVmKSB7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAocHJlZiA9PT0gJ3N0cmluZycgJiYgaXNDYWxsYWJsZShmbiA9IGlucHV0LnRvU3RyaW5nKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKGlzQ2FsbGFibGUoZm4gPSBpbnB1dC52YWx1ZU9mKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHByZWYgIT09ICdzdHJpbmcnICYmIGlzQ2FsbGFibGUoZm4gPSBpbnB1dC50b1N0cmluZykgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHRyeSB7XG4gICAgZGVmaW5lUHJvcGVydHkoZ2xvYmFsVGhpcywga2V5LCB7IHZhbHVlOiB2YWx1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBnbG9iYWxUaGlzW2tleV0gPSB2YWx1ZTtcbiAgfSByZXR1cm4gdmFsdWU7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgZGVmaW5lR2xvYmFsUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWdsb2JhbC1wcm9wZXJ0eScpO1xuXG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IGdsb2JhbFRoaXNbU0hBUkVEXSB8fCBkZWZpbmVHbG9iYWxQcm9wZXJ0eShTSEFSRUQsIHt9KTtcblxuKHN0b3JlLnZlcnNpb25zIHx8IChzdG9yZS52ZXJzaW9ucyA9IFtdKSkucHVzaCh7XG4gIHZlcnNpb246ICczLjQ5LjAnLFxuICBtb2RlOiBJU19QVVJFID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMTPigJMyMDI1IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpLCAyMDI14oCTMjAyNiBDb3JlSlMgQ29tcGFueSAoY29yZS1qcy5pbykuIEFsbCByaWdodHMgcmVzZXJ2ZWQuJyxcbiAgbGljZW5zZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2Jsb2IvdjMuNDkuMC9MSUNFTlNFJyxcbiAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMnXG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgc3RvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSB8fCB7fSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcblxuLy8gYFRvT2JqZWN0YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9vYmplY3Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiAkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xuXG52YXIgaGFzT3duUHJvcGVydHkgPSB1bmN1cnJ5VGhpcyh7fS5oYXNPd25Qcm9wZXJ0eSk7XG5cbi8vIGBIYXNPd25Qcm9wZXJ0eWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWhhc293bnByb3BlcnR5XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWhhc293biAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5oYXNPd24gfHwgZnVuY3Rpb24gaGFzT3duKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5KHRvT2JqZWN0KGl0KSwga2V5KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG52YXIgaWQgPSAwO1xudmFyIHBvc3RmaXggPSBNYXRoLnJhbmRvbSgpO1xudmFyIHRvU3RyaW5nID0gdW5jdXJyeVRoaXMoMS4xLnRvU3RyaW5nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcgKyAoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSkgKyAnKV8nICsgdG9TdHJpbmcoKytpZCArIHBvc3RmaXgsIDM2KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zeW1ib2wtY29uc3RydWN0b3ItZGV0ZWN0aW9uJyk7XG52YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQnKTtcblxudmFyIFN5bWJvbCA9IGdsb2JhbFRoaXMuU3ltYm9sO1xudmFyIFdlbGxLbm93blN5bWJvbHNTdG9yZSA9IHNoYXJlZCgnd2tzJyk7XG52YXIgY3JlYXRlV2VsbEtub3duU3ltYm9sID0gVVNFX1NZTUJPTF9BU19VSUQgPyBTeW1ib2xbJ2ZvciddIHx8IFN5bWJvbCA6IFN5bWJvbCAmJiBTeW1ib2wud2l0aG91dFNldHRlciB8fCB1aWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgaWYgKCFoYXNPd24oV2VsbEtub3duU3ltYm9sc1N0b3JlLCBuYW1lKSkge1xuICAgIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXSA9IE5BVElWRV9TWU1CT0wgJiYgaGFzT3duKFN5bWJvbCwgbmFtZSlcbiAgICAgID8gU3ltYm9sW25hbWVdXG4gICAgICA6IGNyZWF0ZVdlbGxLbm93blN5bWJvbCgnU3ltYm9sLicgKyBuYW1lKTtcbiAgfSByZXR1cm4gV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciBvcmRpbmFyeVRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZScpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbnZhciBUT19QUklNSVRJVkUgPSB3ZWxsS25vd25TeW1ib2woJ3RvUHJpbWl0aXZlJyk7XG5cbi8vIGBUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJpbWl0aXZlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnB1dCwgcHJlZikge1xuICBpZiAoIWlzT2JqZWN0KGlucHV0KSB8fCBpc1N5bWJvbChpbnB1dCkpIHJldHVybiBpbnB1dDtcbiAgdmFyIGV4b3RpY1RvUHJpbSA9IGdldE1ldGhvZChpbnB1dCwgVE9fUFJJTUlUSVZFKTtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKGV4b3RpY1RvUHJpbSkge1xuICAgIGlmIChwcmVmID09PSB1bmRlZmluZWQpIHByZWYgPSAnZGVmYXVsdCc7XG4gICAgcmVzdWx0ID0gY2FsbChleG90aWNUb1ByaW0sIGlucHV0LCBwcmVmKTtcbiAgICBpZiAoIWlzT2JqZWN0KHJlc3VsdCkgfHwgaXNTeW1ib2wocmVzdWx0KSkgcmV0dXJuIHJlc3VsdDtcbiAgICB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbiAgfVxuICBpZiAocHJlZiA9PT0gdW5kZWZpbmVkKSBwcmVmID0gJ251bWJlcic7XG4gIHJldHVybiBvcmRpbmFyeVRvUHJpbWl0aXZlKGlucHV0LCBwcmVmKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xudmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXN5bWJvbCcpO1xuXG4vLyBgVG9Qcm9wZXJ0eUtleWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJvcGVydHlrZXlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBrZXkgPSB0b1ByaW1pdGl2ZShhcmd1bWVudCwgJ3N0cmluZycpO1xuICByZXR1cm4gaXNTeW1ib2woa2V5KSA/IGtleSA6IGtleSArICcnO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgZG9jdW1lbnQgPSBnbG9iYWxUaGlzLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgRVhJU1RTID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gRVhJU1RTID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBjcmVhdGVFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50Jyk7XG5cbi8vIFRoYW5rcyB0byBJRTggZm9yIGl0cyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhREVTQ1JJUFRPUlMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGNyZWF0ZUVsZW1lbnQoJ2RpdicpLCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH1cbiAgfSkuYSAhPT0gNztcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1wcm9wZXJ0eS1pcy1lbnVtZXJhYmxlJyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcm9wZXJ0eS1rZXknKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yXG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyA/ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICBPID0gdG9JbmRleGVkT2JqZWN0KE8pO1xuICBQID0gdG9Qcm9wZXJ0eUtleShQKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIGlmIChoYXNPd24oTywgUCkpIHJldHVybiBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoIWNhbGwocHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUuZiwgTywgUCksIE9bUF0pO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBWOCB+IENocm9tZSAzNi1cbi8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMzMzRcbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9LCAncHJvdG90eXBlJywge1xuICAgIHZhbHVlOiA0MixcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSkucHJvdG90eXBlICE9PSA0Mjtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyICRTdHJpbmcgPSBTdHJpbmc7XG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYEFzc2VydDogVHlwZShhcmd1bWVudCkgaXMgT2JqZWN0YFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgaWYgKGlzT2JqZWN0KGFyZ3VtZW50KSkgcmV0dXJuIGFyZ3VtZW50O1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcigkU3RyaW5nKGFyZ3VtZW50KSArICcgaXMgbm90IGFuIG9iamVjdCcpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pZTgtZG9tLWRlZmluZScpO1xudmFyIFY4X1BST1RPVFlQRV9ERUZJTkVfQlVHID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Y4LXByb3RvdHlwZS1kZWZpbmUtYnVnJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcm9wZXJ0eS1rZXknKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbnZhciAkZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgRU5VTUVSQUJMRSA9ICdlbnVtZXJhYmxlJztcbnZhciBDT05GSUdVUkFCTEUgPSAnY29uZmlndXJhYmxlJztcbnZhciBXUklUQUJMRSA9ICd3cml0YWJsZSc7XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydHlgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydHlcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gVjhfUFJPVE9UWVBFX0RFRklORV9CVUcgPyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9Qcm9wZXJ0eUtleShQKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmICh0eXBlb2YgTyA9PT0gJ2Z1bmN0aW9uJyAmJiBQID09PSAncHJvdG90eXBlJyAmJiAndmFsdWUnIGluIEF0dHJpYnV0ZXMgJiYgV1JJVEFCTEUgaW4gQXR0cmlidXRlcyAmJiAhQXR0cmlidXRlc1tXUklUQUJMRV0pIHtcbiAgICB2YXIgY3VycmVudCA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG4gICAgaWYgKGN1cnJlbnQgJiYgY3VycmVudFtXUklUQUJMRV0pIHtcbiAgICAgIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICAgICAgQXR0cmlidXRlcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiBDT05GSUdVUkFCTEUgaW4gQXR0cmlidXRlcyA/IEF0dHJpYnV0ZXNbQ09ORklHVVJBQkxFXSA6IGN1cnJlbnRbQ09ORklHVVJBQkxFXSxcbiAgICAgICAgZW51bWVyYWJsZTogRU5VTUVSQUJMRSBpbiBBdHRyaWJ1dGVzID8gQXR0cmlidXRlc1tFTlVNRVJBQkxFXSA6IGN1cnJlbnRbRU5VTUVSQUJMRV0sXG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgICAgfTtcbiAgICB9XG4gIH0gcmV0dXJuICRkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKTtcbn0gOiAkZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9Qcm9wZXJ0eUtleShQKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gJGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IG5ldyAkVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCcpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5TW9kdWxlLmYob2JqZWN0LCBrZXksIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcblxudmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyIGdldERlc2NyaXB0b3IgPSBERVNDUklQVE9SUyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG52YXIgRVhJU1RTID0gaGFzT3duKEZ1bmN0aW9uUHJvdG90eXBlLCAnbmFtZScpO1xuLy8gYWRkaXRpb25hbCBwcm90ZWN0aW9uIGZyb20gbWluaWZpZWQgLyBtYW5nbGVkIC8gZHJvcHBlZCBmdW5jdGlvbiBuYW1lc1xudmFyIFBST1BFUiA9IEVYSVNUUyAmJiBmdW5jdGlvbiBzb21ldGhpbmcoKSB7IC8qIGVtcHR5ICovIH0ubmFtZSA9PT0gJ3NvbWV0aGluZyc7XG52YXIgQ09ORklHVVJBQkxFID0gRVhJU1RTICYmICghREVTQ1JJUFRPUlMgfHwgKERFU0NSSVBUT1JTICYmIGdldERlc2NyaXB0b3IoRnVuY3Rpb25Qcm90b3R5cGUsICduYW1lJykuY29uZmlndXJhYmxlKSk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBFWElTVFM6IEVYSVNUUyxcbiAgUFJPUEVSOiBQUk9QRVIsXG4gIENPTkZJR1VSQUJMRTogQ09ORklHVVJBQkxFXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgc3RvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG5cbnZhciBmdW5jdGlvblRvU3RyaW5nID0gdW5jdXJyeVRoaXMoRnVuY3Rpb24udG9TdHJpbmcpO1xuXG4vLyB0aGlzIGhlbHBlciBicm9rZW4gaW4gYGNvcmUtanNAMy40LjEtMy40LjRgLCBzbyB3ZSBjYW4ndCB1c2UgYHNoYXJlZGAgaGVscGVyXG5pZiAoIWlzQ2FsbGFibGUoc3RvcmUuaW5zcGVjdFNvdXJjZSkpIHtcbiAgc3RvcmUuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBmdW5jdGlvblRvU3RyaW5nKGl0KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdG9yZS5pbnNwZWN0U291cmNlO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgV2Vha01hcCA9IGdsb2JhbFRoaXMuV2Vha01hcDtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0NhbGxhYmxlKFdlYWtNYXApICYmIC9uYXRpdmUgY29kZS8udGVzdChTdHJpbmcoV2Vha01hcCkpO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xuXG52YXIga2V5cyA9IHNoYXJlZCgna2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIGtleXNba2V5XSB8fCAoa2V5c1trZXldID0gdWlkKGtleSkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfV0VBS19NQVAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2Vhay1tYXAtYmFzaWMtZGV0ZWN0aW9uJyk7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcbnZhciBzaGFyZWRLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLWtleScpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcblxudmFyIE9CSkVDVF9BTFJFQURZX0lOSVRJQUxJWkVEID0gJ09iamVjdCBhbHJlYWR5IGluaXRpYWxpemVkJztcbnZhciBUeXBlRXJyb3IgPSBnbG9iYWxUaGlzLlR5cGVFcnJvcjtcbnZhciBXZWFrTWFwID0gZ2xvYmFsVGhpcy5XZWFrTWFwO1xudmFyIHNldCwgZ2V0LCBoYXM7XG5cbnZhciBlbmZvcmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBoYXMoaXQpID8gZ2V0KGl0KSA6IHNldChpdCwge30pO1xufTtcblxudmFyIGdldHRlckZvciA9IGZ1bmN0aW9uIChUWVBFKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaXQpIHtcbiAgICB2YXIgc3RhdGU7XG4gICAgaWYgKCFpc09iamVjdChpdCkgfHwgKHN0YXRlID0gZ2V0KGl0KSkudHlwZSAhPT0gVFlQRSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW5jb21wYXRpYmxlIHJlY2VpdmVyLCAnICsgVFlQRSArICcgcmVxdWlyZWQnKTtcbiAgICB9IHJldHVybiBzdGF0ZTtcbiAgfTtcbn07XG5cbmlmIChOQVRJVkVfV0VBS19NQVAgfHwgc2hhcmVkLnN0YXRlKSB7XG4gIHZhciBzdG9yZSA9IHNoYXJlZC5zdGF0ZSB8fCAoc2hhcmVkLnN0YXRlID0gbmV3IFdlYWtNYXAoKSk7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXNlbGYtYXNzaWduIC0tIHByb3RvdHlwZSBtZXRob2RzIHByb3RlY3Rpb24gKi9cbiAgc3RvcmUuZ2V0ID0gc3RvcmUuZ2V0O1xuICBzdG9yZS5oYXMgPSBzdG9yZS5oYXM7XG4gIHN0b3JlLnNldCA9IHN0b3JlLnNldDtcbiAgLyogZXNsaW50LWVuYWJsZSBuby1zZWxmLWFzc2lnbiAtLSBwcm90b3R5cGUgbWV0aG9kcyBwcm90ZWN0aW9uICovXG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICBpZiAoc3RvcmUuaGFzKGl0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcihPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCk7XG4gICAgbWV0YWRhdGEuZmFjYWRlID0gaXQ7XG4gICAgc3RvcmUuc2V0KGl0LCBtZXRhZGF0YSk7XG4gICAgcmV0dXJuIG1ldGFkYXRhO1xuICB9O1xuICBnZXQgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gc3RvcmUuZ2V0KGl0KSB8fCB7fTtcbiAgfTtcbiAgaGFzID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHN0b3JlLmhhcyhpdCk7XG4gIH07XG59IGVsc2Uge1xuICB2YXIgU1RBVEUgPSBzaGFyZWRLZXkoJ3N0YXRlJyk7XG4gIGhpZGRlbktleXNbU1RBVEVdID0gdHJ1ZTtcbiAgc2V0ID0gZnVuY3Rpb24gKGl0LCBtZXRhZGF0YSkge1xuICAgIGlmIChoYXNPd24oaXQsIFNUQVRFKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCk7XG4gICAgbWV0YWRhdGEuZmFjYWRlID0gaXQ7XG4gICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KGl0LCBTVEFURSwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGhhc093bihpdCwgU1RBVEUpID8gaXRbU1RBVEVdIDoge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBoYXNPd24oaXQsIFNUQVRFKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogc2V0LFxuICBnZXQ6IGdldCxcbiAgaGFzOiBoYXMsXG4gIGVuZm9yY2U6IGVuZm9yY2UsXG4gIGdldHRlckZvcjogZ2V0dGVyRm9yXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgQ09ORklHVVJBQkxFX0ZVTkNUSU9OX05BTUUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tbmFtZScpLkNPTkZJR1VSQUJMRTtcbnZhciBpbnNwZWN0U291cmNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luc3BlY3Qtc291cmNlJyk7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpO1xuXG52YXIgZW5mb3JjZUludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmVuZm9yY2U7XG52YXIgZ2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0O1xudmFyICRTdHJpbmcgPSBTdHJpbmc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBzdHJpbmdTbGljZSA9IHVuY3VycnlUaGlzKCcnLnNsaWNlKTtcbnZhciByZXBsYWNlID0gdW5jdXJyeVRoaXMoJycucmVwbGFjZSk7XG52YXIgam9pbiA9IHVuY3VycnlUaGlzKFtdLmpvaW4pO1xuXG52YXIgQ09ORklHVVJBQkxFX0xFTkdUSCA9IERFU0NSSVBUT1JTICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eShmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0sICdsZW5ndGgnLCB7IHZhbHVlOiA4IH0pLmxlbmd0aCAhPT0gODtcbn0pO1xuXG52YXIgVEVNUExBVEUgPSBTdHJpbmcoU3RyaW5nKS5zcGxpdCgnU3RyaW5nJyk7XG5cbnZhciBtYWtlQnVpbHRJbiA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlLCBuYW1lLCBvcHRpb25zKSB7XG4gIGlmIChzdHJpbmdTbGljZSgkU3RyaW5nKG5hbWUpLCAwLCA3KSA9PT0gJ1N5bWJvbCgnKSB7XG4gICAgbmFtZSA9ICdbJyArIHJlcGxhY2UoJFN0cmluZyhuYW1lKSwgL15TeW1ib2xcXCgoW14pXSopXFwpLiokLywgJyQxJykgKyAnXSc7XG4gIH1cbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5nZXR0ZXIpIG5hbWUgPSAnZ2V0ICcgKyBuYW1lO1xuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnNldHRlcikgbmFtZSA9ICdzZXQgJyArIG5hbWU7XG4gIGlmICghaGFzT3duKHZhbHVlLCAnbmFtZScpIHx8IChDT05GSUdVUkFCTEVfRlVOQ1RJT05fTkFNRSAmJiB2YWx1ZS5uYW1lICE9PSBuYW1lKSkge1xuICAgIGlmIChERVNDUklQVE9SUykgZGVmaW5lUHJvcGVydHkodmFsdWUsICduYW1lJywgeyB2YWx1ZTogbmFtZSwgY29uZmlndXJhYmxlOiB0cnVlIH0pO1xuICAgIGVsc2UgdmFsdWUubmFtZSA9IG5hbWU7XG4gIH1cbiAgaWYgKENPTkZJR1VSQUJMRV9MRU5HVEggJiYgb3B0aW9ucyAmJiBoYXNPd24ob3B0aW9ucywgJ2FyaXR5JykgJiYgdmFsdWUubGVuZ3RoICE9PSBvcHRpb25zLmFyaXR5KSB7XG4gICAgZGVmaW5lUHJvcGVydHkodmFsdWUsICdsZW5ndGgnLCB7IHZhbHVlOiBvcHRpb25zLmFyaXR5IH0pO1xuICB9XG4gIHRyeSB7XG4gICAgaWYgKG9wdGlvbnMgJiYgaGFzT3duKG9wdGlvbnMsICdjb25zdHJ1Y3RvcicpICYmIG9wdGlvbnMuY29uc3RydWN0b3IpIHtcbiAgICAgIGlmIChERVNDUklQVE9SUykgZGVmaW5lUHJvcGVydHkodmFsdWUsICdwcm90b3R5cGUnLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTtcbiAgICAvLyBpbiBWOCB+IENocm9tZSA1MywgcHJvdG90eXBlcyBvZiBzb21lIG1ldGhvZHMsIGxpa2UgYEFycmF5LnByb3RvdHlwZS52YWx1ZXNgLCBhcmUgbm9uLXdyaXRhYmxlXG4gICAgfSBlbHNlIGlmICh2YWx1ZS5wcm90b3R5cGUpIHZhbHVlLnByb3RvdHlwZSA9IHVuZGVmaW5lZDtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICB2YXIgc3RhdGUgPSBlbmZvcmNlSW50ZXJuYWxTdGF0ZSh2YWx1ZSk7XG4gIGlmICghaGFzT3duKHN0YXRlLCAnc291cmNlJykpIHtcbiAgICBzdGF0ZS5zb3VyY2UgPSBqb2luKFRFTVBMQVRFLCB0eXBlb2YgbmFtZSA9PSAnc3RyaW5nJyA/IG5hbWUgOiAnJyk7XG4gIH0gcmV0dXJuIHZhbHVlO1xufTtcblxuLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXh0ZW5kLW5hdGl2ZSAtLSByZXF1aXJlZFxuRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nID0gbWFrZUJ1aWx0SW4oZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiBpc0NhbGxhYmxlKHRoaXMpICYmIGdldEludGVybmFsU3RhdGUodGhpcykuc291cmNlIHx8IGluc3BlY3RTb3VyY2UodGhpcyk7XG59LCAndG9TdHJpbmcnKTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBtYWtlQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9tYWtlLWJ1aWx0LWluJyk7XG52YXIgZGVmaW5lR2xvYmFsUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWdsb2JhbC1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBrZXksIHZhbHVlLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykgb3B0aW9ucyA9IHt9O1xuICB2YXIgc2ltcGxlID0gb3B0aW9ucy5lbnVtZXJhYmxlO1xuICB2YXIgbmFtZSA9IG9wdGlvbnMubmFtZSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5uYW1lIDoga2V5O1xuICBpZiAoaXNDYWxsYWJsZSh2YWx1ZSkpIG1ha2VCdWlsdEluKHZhbHVlLCBuYW1lLCBvcHRpb25zKTtcbiAgaWYgKG9wdGlvbnMuZ2xvYmFsKSB7XG4gICAgaWYgKHNpbXBsZSkgT1trZXldID0gdmFsdWU7XG4gICAgZWxzZSBkZWZpbmVHbG9iYWxQcm9wZXJ0eShrZXksIHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFvcHRpb25zLnVuc2FmZSkgZGVsZXRlIE9ba2V5XTtcbiAgICAgIGVsc2UgaWYgKE9ba2V5XSkgc2ltcGxlID0gdHJ1ZTtcbiAgICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gICAgaWYgKHNpbXBsZSkgT1trZXldID0gdmFsdWU7XG4gICAgZWxzZSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKE8sIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6ICFvcHRpb25zLm5vbkNvbmZpZ3VyYWJsZSxcbiAgICAgIHdyaXRhYmxlOiAhb3B0aW9ucy5ub25Xcml0YWJsZVxuICAgIH0pO1xuICB9IHJldHVybiBPO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5cbi8vIGBNYXRoLnRydW5jYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbWF0aC50cnVuY1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW1hdGgtdHJ1bmMgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBNYXRoLnRydW5jIHx8IGZ1bmN0aW9uIHRydW5jKHgpIHtcbiAgdmFyIG4gPSAreDtcbiAgcmV0dXJuIChuID4gMCA/IGZsb29yIDogY2VpbCkobik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0cnVuYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9tYXRoLXRydW5jJyk7XG5cbi8vIGBUb0ludGVnZXJPckluZmluaXR5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9pbnRlZ2Vyb3JpbmZpbml0eVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIG51bWJlciA9ICthcmd1bWVudDtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgcmV0dXJuIG51bWJlciAhPT0gbnVtYmVyIHx8IG51bWJlciA9PT0gMCA/IDAgOiB0cnVuYyhudW1iZXIpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9JbnRlZ2VyT3JJbmZpbml0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyLW9yLWluZmluaXR5Jyk7XG5cbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcblxuLy8gSGVscGVyIGZvciBhIHBvcHVsYXIgcmVwZWF0aW5nIGNhc2Ugb2YgdGhlIHNwZWM6XG4vLyBMZXQgaW50ZWdlciBiZSA/IFRvSW50ZWdlcihpbmRleCkuXG4vLyBJZiBpbnRlZ2VyIDwgMCwgbGV0IHJlc3VsdCBiZSBtYXgoKGxlbmd0aCArIGludGVnZXIpLCAwKTsgZWxzZSBsZXQgcmVzdWx0IGJlIG1pbihpbnRlZ2VyLCBsZW5ndGgpLlxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICB2YXIgaW50ZWdlciA9IHRvSW50ZWdlck9ySW5maW5pdHkoaW5kZXgpO1xuICByZXR1cm4gaW50ZWdlciA8IDAgPyBtYXgoaW50ZWdlciArIGxlbmd0aCwgMCkgOiBtaW4oaW50ZWdlciwgbGVuZ3RoKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xuXG52YXIgbWluID0gTWF0aC5taW47XG5cbi8vIGBUb0xlbmd0aGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvbGVuZ3RoXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICB2YXIgbGVuID0gdG9JbnRlZ2VyT3JJbmZpbml0eShhcmd1bWVudCk7XG4gIHJldHVybiBsZW4gPiAwID8gbWluKGxlbiwgMHgxRkZGRkZGRkZGRkZGRikgOiAwOyAvLyAyICoqIDUzIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcblxuLy8gYExlbmd0aE9mQXJyYXlMaWtlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbGVuZ3Rob2ZhcnJheWxpa2Vcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdG9MZW5ndGgob2JqLmxlbmd0aCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tYWJzb2x1dGUtaW5kZXgnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnsgaW5kZXhPZiwgaW5jbHVkZXMgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSBsZW5ndGhPZkFycmF5TGlrZShPKTtcbiAgICBpZiAobGVuZ3RoID09PSAwKSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgICAgIGlmICh2YWx1ZSAhPT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgIGlmICgoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykgJiYgT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5pbmNsdWRlc2AgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluY2x1ZGVzXG4gIGluY2x1ZGVzOiBjcmVhdGVNZXRob2QodHJ1ZSksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuaW5kZXhPZmAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluZGV4b2ZcbiAgaW5kZXhPZjogY3JlYXRlTWV0aG9kKGZhbHNlKVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBpbmRleE9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzJykuaW5kZXhPZjtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG5cbnZhciBwdXNoID0gdW5jdXJyeVRoaXMoW10ucHVzaCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pICFoYXNPd24oaGlkZGVuS2V5cywga2V5KSAmJiBoYXNPd24oTywga2V5KSAmJiBwdXNoKHJlc3VsdCwga2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhc093bihPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5pbmRleE9mKHJlc3VsdCwga2V5KSB8fCBwdXNoKHJlc3VsdCwga2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBJRTgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gW1xuICAnY29uc3RydWN0b3InLFxuICAnaGFzT3duUHJvcGVydHknLFxuICAnaXNQcm90b3R5cGVPZicsXG4gICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsXG4gICd0b0xvY2FsZVN0cmluZycsXG4gICd0b1N0cmluZycsXG4gICd2YWx1ZU9mJ1xuXTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaW50ZXJuYWxPYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xuXG52YXIgaGlkZGVuS2V5cyA9IGVudW1CdWdLZXlzLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHluYW1lc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eW5hbWVzIC0tIHNhZmVcbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICByZXR1cm4gaW50ZXJuYWxPYmplY3RLZXlzKE8sIGhpZGRlbktleXMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5c3ltYm9scyAtLSBzYWZlXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xuXG52YXIgY29uY2F0ID0gdW5jdXJyeVRoaXMoW10uY29uY2F0KTtcblxuLy8gYWxsIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBub24tZW51bWVyYWJsZSBhbmQgc3ltYm9sc1xubW9kdWxlLmV4cG9ydHMgPSBnZXRCdWlsdEluKCdSZWZsZWN0JywgJ293bktleXMnKSB8fCBmdW5jdGlvbiBvd25LZXlzKGl0KSB7XG4gIHZhciBrZXlzID0gZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZS5mKGFuT2JqZWN0KGl0KSk7XG4gIHZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUuZjtcbiAgcmV0dXJuIGdldE93blByb3BlcnR5U3ltYm9scyA/IGNvbmNhdChrZXlzLCBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpKSA6IGtleXM7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIG93bktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb3duLWtleXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UsIGV4Y2VwdGlvbnMpIHtcbiAgdmFyIGtleXMgPSBvd25LZXlzKHNvdXJjZSk7XG4gIHZhciBkZWZpbmVQcm9wZXJ0eSA9IGRlZmluZVByb3BlcnR5TW9kdWxlLmY7XG4gIHZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUuZjtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgaWYgKCFoYXNPd24odGFyZ2V0LCBrZXkpICYmICEoZXhjZXB0aW9ucyAmJiBoYXNPd24oZXhjZXB0aW9ucywga2V5KSkpIHtcbiAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICB9XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgcmVwbGFjZW1lbnQgPSAvI3xcXC5wcm90b3R5cGVcXC4vO1xuXG52YXIgaXNGb3JjZWQgPSBmdW5jdGlvbiAoZmVhdHVyZSwgZGV0ZWN0aW9uKSB7XG4gIHZhciB2YWx1ZSA9IGRhdGFbbm9ybWFsaXplKGZlYXR1cmUpXTtcbiAgcmV0dXJuIHZhbHVlID09PSBQT0xZRklMTCA/IHRydWVcbiAgICA6IHZhbHVlID09PSBOQVRJVkUgPyBmYWxzZVxuICAgIDogaXNDYWxsYWJsZShkZXRlY3Rpb24pID8gZmFpbHMoZGV0ZWN0aW9uKVxuICAgIDogISFkZXRlY3Rpb247XG59O1xuXG52YXIgbm9ybWFsaXplID0gaXNGb3JjZWQubm9ybWFsaXplID0gZnVuY3Rpb24gKHN0cmluZykge1xuICByZXR1cm4gU3RyaW5nKHN0cmluZykucmVwbGFjZShyZXBsYWNlbWVudCwgJy4nKS50b0xvd2VyQ2FzZSgpO1xufTtcblxudmFyIGRhdGEgPSBpc0ZvcmNlZC5kYXRhID0ge307XG52YXIgTkFUSVZFID0gaXNGb3JjZWQuTkFUSVZFID0gJ04nO1xudmFyIFBPTFlGSUxMID0gaXNGb3JjZWQuUE9MWUZJTEwgPSAnUCc7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGb3JjZWQ7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpLmY7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIGRlZmluZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluJyk7XG52YXIgZGVmaW5lR2xvYmFsUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWdsb2JhbC1wcm9wZXJ0eScpO1xudmFyIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzJyk7XG52YXIgaXNGb3JjZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtZm9yY2VkJyk7XG5cbi8qXG4gIG9wdGlvbnMudGFyZ2V0ICAgICAgICAgLSBuYW1lIG9mIHRoZSB0YXJnZXQgb2JqZWN0XG4gIG9wdGlvbnMuZ2xvYmFsICAgICAgICAgLSB0YXJnZXQgaXMgdGhlIGdsb2JhbCBvYmplY3RcbiAgb3B0aW9ucy5zdGF0ICAgICAgICAgICAtIGV4cG9ydCBhcyBzdGF0aWMgbWV0aG9kcyBvZiB0YXJnZXRcbiAgb3B0aW9ucy5wcm90byAgICAgICAgICAtIGV4cG9ydCBhcyBwcm90b3R5cGUgbWV0aG9kcyBvZiB0YXJnZXRcbiAgb3B0aW9ucy5yZWFsICAgICAgICAgICAtIHJlYWwgcHJvdG90eXBlIG1ldGhvZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMuZm9yY2VkICAgICAgICAgLSBleHBvcnQgZXZlbiBpZiB0aGUgbmF0aXZlIGZlYXR1cmUgaXMgYXZhaWxhYmxlXG4gIG9wdGlvbnMuYmluZCAgICAgICAgICAgLSBiaW5kIG1ldGhvZHMgdG8gdGhlIHRhcmdldCwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLndyYXAgICAgICAgICAgIC0gd3JhcCBjb25zdHJ1Y3RvcnMgdG8gcHJldmVudGluZyBnbG9iYWwgcG9sbHV0aW9uLCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMudW5zYWZlICAgICAgICAgLSB1c2UgdGhlIHNpbXBsZSBhc3NpZ25tZW50IG9mIHByb3BlcnR5IGluc3RlYWQgb2YgZGVsZXRlICsgZGVmaW5lUHJvcGVydHlcbiAgb3B0aW9ucy5zaGFtICAgICAgICAgICAtIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgb3B0aW9ucy5lbnVtZXJhYmxlICAgICAtIGV4cG9ydCBhcyBlbnVtZXJhYmxlIHByb3BlcnR5XG4gIG9wdGlvbnMuZG9udENhbGxHZXRTZXQgLSBwcmV2ZW50IGNhbGxpbmcgYSBnZXR0ZXIgb24gdGFyZ2V0XG4gIG9wdGlvbnMubmFtZSAgICAgICAgICAgLSB0aGUgLm5hbWUgb2YgdGhlIGZ1bmN0aW9uIGlmIGl0IGRvZXMgbm90IG1hdGNoIHRoZSBrZXlcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcHRpb25zLCBzb3VyY2UpIHtcbiAgdmFyIFRBUkdFVCA9IG9wdGlvbnMudGFyZ2V0O1xuICB2YXIgR0xPQkFMID0gb3B0aW9ucy5nbG9iYWw7XG4gIHZhciBTVEFUSUMgPSBvcHRpb25zLnN0YXQ7XG4gIHZhciBGT1JDRUQsIHRhcmdldCwga2V5LCB0YXJnZXRQcm9wZXJ0eSwgc291cmNlUHJvcGVydHksIGRlc2NyaXB0b3I7XG4gIGlmIChHTE9CQUwpIHtcbiAgICB0YXJnZXQgPSBnbG9iYWxUaGlzO1xuICB9IGVsc2UgaWYgKFNUQVRJQykge1xuICAgIHRhcmdldCA9IGdsb2JhbFRoaXNbVEFSR0VUXSB8fCBkZWZpbmVHbG9iYWxQcm9wZXJ0eShUQVJHRVQsIHt9KTtcbiAgfSBlbHNlIHtcbiAgICB0YXJnZXQgPSBnbG9iYWxUaGlzW1RBUkdFVF0gJiYgZ2xvYmFsVGhpc1tUQVJHRVRdLnByb3RvdHlwZTtcbiAgfVxuICBpZiAodGFyZ2V0KSBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICBzb3VyY2VQcm9wZXJ0eSA9IHNvdXJjZVtrZXldO1xuICAgIGlmIChvcHRpb25zLmRvbnRDYWxsR2V0U2V0KSB7XG4gICAgICBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KTtcbiAgICAgIHRhcmdldFByb3BlcnR5ID0gZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLnZhbHVlO1xuICAgIH0gZWxzZSB0YXJnZXRQcm9wZXJ0eSA9IHRhcmdldFtrZXldO1xuICAgIEZPUkNFRCA9IGlzRm9yY2VkKEdMT0JBTCA/IGtleSA6IFRBUkdFVCArIChTVEFUSUMgPyAnLicgOiAnIycpICsga2V5LCBvcHRpb25zLmZvcmNlZCk7XG4gICAgLy8gY29udGFpbmVkIGluIHRhcmdldFxuICAgIGlmICghRk9SQ0VEICYmIHRhcmdldFByb3BlcnR5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0eXBlb2Ygc291cmNlUHJvcGVydHkgPT0gdHlwZW9mIHRhcmdldFByb3BlcnR5KSBjb250aW51ZTtcbiAgICAgIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMoc291cmNlUHJvcGVydHksIHRhcmdldFByb3BlcnR5KTtcbiAgICB9XG4gICAgLy8gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuICAgIGlmIChvcHRpb25zLnNoYW0gfHwgKHRhcmdldFByb3BlcnR5ICYmIHRhcmdldFByb3BlcnR5LnNoYW0pKSB7XG4gICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoc291cmNlUHJvcGVydHksICdzaGFtJywgdHJ1ZSk7XG4gICAgfVxuICAgIGRlZmluZUJ1aWx0SW4odGFyZ2V0LCBrZXksIHNvdXJjZVByb3BlcnR5LCBvcHRpb25zKTtcbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG4vLyBgSXNBcnJheWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWlzYXJyYXlcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1pc2FycmF5IC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZ3VtZW50KSB7XG4gIHJldHVybiBjbGFzc29mKGFyZ3VtZW50KSA9PT0gJ0FycmF5Jztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcbnZhciB0ZXN0ID0ge307XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9uby1pbW1lZGlhdGUtbXV0YXRpb24gLS0gRVMzIHN5bnRheCBsaW1pdGF0aW9uXG50ZXN0W1RPX1NUUklOR19UQUddID0gJ3onO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0cmluZyh0ZXN0KSA9PT0gJ1tvYmplY3Qgel0nO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBUT19TVFJJTkdfVEFHX1NVUFBPUlQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nLXRhZy1zdXBwb3J0Jyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGNsYXNzb2ZSYXcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFRPX1NUUklOR19UQUcgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG52YXIgJE9iamVjdCA9IE9iamVjdDtcblxuLy8gRVMzIHdyb25nIGhlcmVcbnZhciBDT1JSRUNUX0FSR1VNRU5UUyA9IGNsYXNzb2ZSYXcoZnVuY3Rpb24gKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG59O1xuXG4vLyBnZXR0aW5nIHRhZyBmcm9tIEVTNisgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgXG5tb2R1bGUuZXhwb3J0cyA9IFRPX1NUUklOR19UQUdfU1VQUE9SVCA/IGNsYXNzb2ZSYXcgOiBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIE8sIHRhZywgcmVzdWx0O1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAodGFnID0gdHJ5R2V0KE8gPSAkT2JqZWN0KGl0KSwgVE9fU1RSSU5HX1RBRykpID09ICdzdHJpbmcnID8gdGFnXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBDT1JSRUNUX0FSR1VNRU5UUyA/IGNsYXNzb2ZSYXcoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAocmVzdWx0ID0gY2xhc3NvZlJhdyhPKSkgPT09ICdPYmplY3QnICYmIGlzQ2FsbGFibGUoTy5jYWxsZWUpID8gJ0FyZ3VtZW50cycgOiByZXN1bHQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YnKTtcblxudmFyICRTdHJpbmcgPSBTdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIGlmIChjbGFzc29mKGFyZ3VtZW50KSA9PT0gJ1N5bWJvbCcpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IGEgU3ltYm9sIHZhbHVlIHRvIGEgc3RyaW5nJyk7XG4gIHJldHVybiAkU3RyaW5nKGFyZ3VtZW50KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgaWYgKERFU0NSSVBUT1JTKSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKG9iamVjdCwga2V5LCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMCwgdmFsdWUpKTtcbiAgZWxzZSBvYmplY3Rba2V5XSA9IHZhbHVlO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcblxudmFyICRTeW50YXhFcnJvciA9IFN5bnRheEVycm9yO1xudmFyICRwYXJzZUludCA9IHBhcnNlSW50O1xudmFyIGZyb21DaGFyQ29kZSA9IFN0cmluZy5mcm9tQ2hhckNvZGU7XG52YXIgYXQgPSB1bmN1cnJ5VGhpcygnJy5jaGFyQXQpO1xudmFyIHNsaWNlID0gdW5jdXJyeVRoaXMoJycuc2xpY2UpO1xudmFyIGV4ZWMgPSB1bmN1cnJ5VGhpcygvLi8uZXhlYyk7XG5cbnZhciBjb2RlUG9pbnRzID0ge1xuICAnXFxcXFwiJzogJ1wiJyxcbiAgJ1xcXFxcXFxcJzogJ1xcXFwnLFxuICAnXFxcXC8nOiAnLycsXG4gICdcXFxcYic6ICdcXGInLFxuICAnXFxcXGYnOiAnXFxmJyxcbiAgJ1xcXFxuJzogJ1xcbicsXG4gICdcXFxccic6ICdcXHInLFxuICAnXFxcXHQnOiAnXFx0J1xufTtcblxudmFyIElTXzRfSEVYX0RJR0lUUyA9IC9eW1xcZGEtZl17NH0kL2k7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVnZXhwL25vLWNvbnRyb2wtY2hhcmFjdGVyIC0tIHNhZmVcbnZhciBJU19DMF9DT05UUk9MX0NPREUgPSAvXltcXHUwMDAwLVxcdTAwMUZdJC87XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHNvdXJjZSwgaSkge1xuICB2YXIgdW50ZXJtaW5hdGVkID0gdHJ1ZTtcbiAgdmFyIHZhbHVlID0gJyc7XG4gIHdoaWxlIChpIDwgc291cmNlLmxlbmd0aCkge1xuICAgIHZhciBjaHIgPSBhdChzb3VyY2UsIGkpO1xuICAgIGlmIChjaHIgPT09ICdcXFxcJykge1xuICAgICAgdmFyIHR3b0NoYXJzID0gc2xpY2Uoc291cmNlLCBpLCBpICsgMik7XG4gICAgICBpZiAoaGFzT3duKGNvZGVQb2ludHMsIHR3b0NoYXJzKSkge1xuICAgICAgICB2YWx1ZSArPSBjb2RlUG9pbnRzW3R3b0NoYXJzXTtcbiAgICAgICAgaSArPSAyO1xuICAgICAgfSBlbHNlIGlmICh0d29DaGFycyA9PT0gJ1xcXFx1Jykge1xuICAgICAgICBpICs9IDI7XG4gICAgICAgIHZhciBmb3VySGV4RGlnaXRzID0gc2xpY2Uoc291cmNlLCBpLCBpICsgNCk7XG4gICAgICAgIGlmICghZXhlYyhJU180X0hFWF9ESUdJVFMsIGZvdXJIZXhEaWdpdHMpKSB0aHJvdyBuZXcgJFN5bnRheEVycm9yKCdCYWQgVW5pY29kZSBlc2NhcGUgYXQ6ICcgKyBpKTtcbiAgICAgICAgdmFsdWUgKz0gZnJvbUNoYXJDb2RlKCRwYXJzZUludChmb3VySGV4RGlnaXRzLCAxNikpO1xuICAgICAgICBpICs9IDQ7XG4gICAgICB9IGVsc2UgdGhyb3cgbmV3ICRTeW50YXhFcnJvcignVW5rbm93biBlc2NhcGUgc2VxdWVuY2U6IFwiJyArIHR3b0NoYXJzICsgJ1wiJyk7XG4gICAgfSBlbHNlIGlmIChjaHIgPT09ICdcIicpIHtcbiAgICAgIHVudGVybWluYXRlZCA9IGZhbHNlO1xuICAgICAgaSsrO1xuICAgICAgYnJlYWs7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChleGVjKElTX0MwX0NPTlRST0xfQ09ERSwgY2hyKSkgdGhyb3cgbmV3ICRTeW50YXhFcnJvcignQmFkIGNvbnRyb2wgY2hhcmFjdGVyIGluIHN0cmluZyBsaXRlcmFsIGF0OiAnICsgaSk7XG4gICAgICB2YWx1ZSArPSBjaHI7XG4gICAgICBpKys7XG4gICAgfVxuICB9XG4gIGlmICh1bnRlcm1pbmF0ZWQpIHRocm93IG5ldyAkU3ludGF4RXJyb3IoJ1VudGVybWluYXRlZCBzdHJpbmcgYXQ6ICcgKyBpKTtcbiAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlLCBlbmQ6IGkgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHknKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHBhcnNlSlNPTlN0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9wYXJzZS1qc29uLXN0cmluZycpO1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3ltYm9sLWNvbnN0cnVjdG9yLWRldGVjdGlvbicpO1xuXG52YXIgSlNPTiA9IGdsb2JhbFRoaXMuSlNPTjtcbnZhciBOdW1iZXIgPSBnbG9iYWxUaGlzLk51bWJlcjtcbnZhciBTeW50YXhFcnJvciA9IGdsb2JhbFRoaXMuU3ludGF4RXJyb3I7XG52YXIgbmF0aXZlUGFyc2UgPSBKU09OICYmIEpTT04ucGFyc2U7XG52YXIgZW51bWVyYWJsZU93blByb3BlcnRpZXMgPSBnZXRCdWlsdEluKCdPYmplY3QnLCAna2V5cycpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgYXQgPSB1bmN1cnJ5VGhpcygnJy5jaGFyQXQpO1xudmFyIHNsaWNlID0gdW5jdXJyeVRoaXMoJycuc2xpY2UpO1xudmFyIGV4ZWMgPSB1bmN1cnJ5VGhpcygvLi8uZXhlYyk7XG52YXIgcHVzaCA9IHVuY3VycnlUaGlzKFtdLnB1c2gpO1xuXG52YXIgSVNfRElHSVQgPSAvXlxcZCQvO1xudmFyIElTX05PTl9aRVJPX0RJR0lUID0gL15bMS05XSQvO1xudmFyIElTX05VTUJFUl9TVEFSVCA9IC9eW1xcZC1dJC87XG52YXIgSVNfV0hJVEVTUEFDRSA9IC9eW1xcdFxcblxcciBdJC87XG5cbnZhciBQUklNSVRJVkUgPSAwO1xudmFyIE9CSkVDVCA9IDE7XG5cbnZhciAkcGFyc2UgPSBmdW5jdGlvbiAoc291cmNlLCByZXZpdmVyKSB7XG4gIHNvdXJjZSA9IHRvU3RyaW5nKHNvdXJjZSk7XG4gIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQoc291cmNlLCAwLCAnJyk7XG4gIHZhciByb290ID0gY29udGV4dC5wYXJzZSgpO1xuICB2YXIgdmFsdWUgPSByb290LnZhbHVlO1xuICB2YXIgZW5kSW5kZXggPSBjb250ZXh0LnNraXAoSVNfV0hJVEVTUEFDRSwgcm9vdC5lbmQpO1xuICBpZiAoZW5kSW5kZXggPCBzb3VyY2UubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKCdVbmV4cGVjdGVkIGV4dHJhIGNoYXJhY3RlcjogXCInICsgYXQoc291cmNlLCBlbmRJbmRleCkgKyAnXCIgYWZ0ZXIgdGhlIHBhcnNlZCBkYXRhIGF0OiAnICsgZW5kSW5kZXgpO1xuICB9XG4gIHJldHVybiBpc0NhbGxhYmxlKHJldml2ZXIpID8gaW50ZXJuYWxpemUoeyAnJzogdmFsdWUgfSwgJycsIHJldml2ZXIsIHJvb3QpIDogdmFsdWU7XG59O1xuXG52YXIgaW50ZXJuYWxpemUgPSBmdW5jdGlvbiAoaG9sZGVyLCBuYW1lLCByZXZpdmVyLCBub2RlKSB7XG4gIHZhciB2YWwgPSBob2xkZXJbbmFtZV07XG4gIHZhciB1bm1vZGlmaWVkID0gbm9kZSAmJiB2YWwgPT09IG5vZGUudmFsdWU7XG4gIHZhciBjb250ZXh0ID0gdW5tb2RpZmllZCAmJiB0eXBlb2Ygbm9kZS5zb3VyY2UgPT0gJ3N0cmluZycgPyB7IHNvdXJjZTogbm9kZS5zb3VyY2UgfSA6IHt9O1xuICB2YXIgZWxlbWVudFJlY29yZHNMZW4sIGtleXMsIGxlbiwgaSwgUDtcbiAgaWYgKGlzT2JqZWN0KHZhbCkpIHtcbiAgICB2YXIgbm9kZUlzQXJyYXkgPSBpc0FycmF5KHZhbCk7XG4gICAgdmFyIG5vZGVzID0gdW5tb2RpZmllZCA/IG5vZGUubm9kZXMgOiBub2RlSXNBcnJheSA/IFtdIDoge307XG4gICAgaWYgKG5vZGVJc0FycmF5KSB7XG4gICAgICBlbGVtZW50UmVjb3Jkc0xlbiA9IG5vZGVzLmxlbmd0aDtcbiAgICAgIGxlbiA9IGxlbmd0aE9mQXJyYXlMaWtlKHZhbCk7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaW50ZXJuYWxpemVQcm9wZXJ0eSh2YWwsIGksIGludGVybmFsaXplKHZhbCwgJycgKyBpLCByZXZpdmVyLCBpIDwgZWxlbWVudFJlY29yZHNMZW4gPyBub2Rlc1tpXSA6IHVuZGVmaW5lZCkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBrZXlzID0gZW51bWVyYWJsZU93blByb3BlcnRpZXModmFsKTtcbiAgICAgIGxlbiA9IGxlbmd0aE9mQXJyYXlMaWtlKGtleXMpO1xuICAgICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIFAgPSBrZXlzW2ldO1xuICAgICAgICBpbnRlcm5hbGl6ZVByb3BlcnR5KHZhbCwgUCwgaW50ZXJuYWxpemUodmFsLCBQLCByZXZpdmVyLCBoYXNPd24obm9kZXMsIFApID8gbm9kZXNbUF0gOiB1bmRlZmluZWQpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNhbGwocmV2aXZlciwgaG9sZGVyLCBuYW1lLCB2YWwsIGNvbnRleHQpO1xufTtcblxudmFyIGludGVybmFsaXplUHJvcGVydHkgPSBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIGlmIChERVNDUklQVE9SUykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwga2V5KTtcbiAgICBpZiAoZGVzY3JpcHRvciAmJiAhZGVzY3JpcHRvci5jb25maWd1cmFibGUpIHJldHVybjtcbiAgfVxuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkgZGVsZXRlIG9iamVjdFtrZXldO1xuICBlbHNlIGNyZWF0ZVByb3BlcnR5KG9iamVjdCwga2V5LCB2YWx1ZSk7XG59O1xuXG52YXIgTm9kZSA9IGZ1bmN0aW9uICh2YWx1ZSwgZW5kLCBzb3VyY2UsIG5vZGVzKSB7XG4gIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgdGhpcy5lbmQgPSBlbmQ7XG4gIHRoaXMuc291cmNlID0gc291cmNlO1xuICB0aGlzLm5vZGVzID0gbm9kZXM7XG59O1xuXG52YXIgQ29udGV4dCA9IGZ1bmN0aW9uIChzb3VyY2UsIGluZGV4KSB7XG4gIHRoaXMuc291cmNlID0gc291cmNlO1xuICB0aGlzLmluZGV4ID0gaW5kZXg7XG59O1xuXG4vLyBodHRwczovL3d3dy5qc29uLm9yZy9qc29uLWVuLmh0bWxcbkNvbnRleHQucHJvdG90eXBlID0ge1xuICBmb3JrOiBmdW5jdGlvbiAobmV4dEluZGV4KSB7XG4gICAgcmV0dXJuIG5ldyBDb250ZXh0KHRoaXMuc291cmNlLCBuZXh0SW5kZXgpO1xuICB9LFxuICBwYXJzZTogZnVuY3Rpb24gKCkge1xuICAgIHZhciBzb3VyY2UgPSB0aGlzLnNvdXJjZTtcbiAgICB2YXIgaSA9IHRoaXMuc2tpcChJU19XSElURVNQQUNFLCB0aGlzLmluZGV4KTtcbiAgICB2YXIgZm9yayA9IHRoaXMuZm9yayhpKTtcbiAgICB2YXIgY2hyID0gYXQoc291cmNlLCBpKTtcbiAgICBpZiAoZXhlYyhJU19OVU1CRVJfU1RBUlQsIGNocikpIHJldHVybiBmb3JrLm51bWJlcigpO1xuICAgIHN3aXRjaCAoY2hyKSB7XG4gICAgICBjYXNlICd7JzpcbiAgICAgICAgcmV0dXJuIGZvcmsub2JqZWN0KCk7XG4gICAgICBjYXNlICdbJzpcbiAgICAgICAgcmV0dXJuIGZvcmsuYXJyYXkoKTtcbiAgICAgIGNhc2UgJ1wiJzpcbiAgICAgICAgcmV0dXJuIGZvcmsuc3RyaW5nKCk7XG4gICAgICBjYXNlICd0JzpcbiAgICAgICAgcmV0dXJuIGZvcmsua2V5d29yZCh0cnVlKTtcbiAgICAgIGNhc2UgJ2YnOlxuICAgICAgICByZXR1cm4gZm9yay5rZXl3b3JkKGZhbHNlKTtcbiAgICAgIGNhc2UgJ24nOlxuICAgICAgICByZXR1cm4gZm9yay5rZXl3b3JkKG51bGwpO1xuICAgIH0gdGhyb3cgbmV3IFN5bnRheEVycm9yKCdVbmV4cGVjdGVkIGNoYXJhY3RlcjogXCInICsgY2hyICsgJ1wiIGF0OiAnICsgaSk7XG4gIH0sXG4gIG5vZGU6IGZ1bmN0aW9uICh0eXBlLCB2YWx1ZSwgc3RhcnQsIGVuZCwgbm9kZXMpIHtcbiAgICByZXR1cm4gbmV3IE5vZGUodmFsdWUsIGVuZCwgdHlwZSA/IG51bGwgOiBzbGljZSh0aGlzLnNvdXJjZSwgc3RhcnQsIGVuZCksIG5vZGVzKTtcbiAgfSxcbiAgb2JqZWN0OiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNvdXJjZSA9IHRoaXMuc291cmNlO1xuICAgIHZhciBpID0gdGhpcy5pbmRleCArIDE7XG4gICAgdmFyIGV4cGVjdEtleXBhaXIgPSBmYWxzZTtcbiAgICB2YXIgb2JqZWN0ID0ge307XG4gICAgdmFyIG5vZGVzID0ge307XG4gICAgdmFyIGNsb3NlZCA9IGZhbHNlO1xuICAgIHdoaWxlIChpIDwgc291cmNlLmxlbmd0aCkge1xuICAgICAgaSA9IHRoaXMudW50aWwoWydcIicsICd9J10sIGkpO1xuICAgICAgaWYgKGF0KHNvdXJjZSwgaSkgPT09ICd9JyAmJiAhZXhwZWN0S2V5cGFpcikge1xuICAgICAgICBpKys7XG4gICAgICAgIGNsb3NlZCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgLy8gUGFyc2luZyB0aGUga2V5XG4gICAgICB2YXIgcmVzdWx0ID0gdGhpcy5mb3JrKGkpLnN0cmluZygpO1xuICAgICAgdmFyIGtleSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgIGkgPSByZXN1bHQuZW5kO1xuICAgICAgaSA9IHRoaXMudW50aWwoWyc6J10sIGkpICsgMTtcbiAgICAgIC8vIFBhcnNpbmcgdmFsdWVcbiAgICAgIGkgPSB0aGlzLnNraXAoSVNfV0hJVEVTUEFDRSwgaSk7XG4gICAgICByZXN1bHQgPSB0aGlzLmZvcmsoaSkucGFyc2UoKTtcbiAgICAgIGNyZWF0ZVByb3BlcnR5KG5vZGVzLCBrZXksIHJlc3VsdCk7XG4gICAgICBjcmVhdGVQcm9wZXJ0eShvYmplY3QsIGtleSwgcmVzdWx0LnZhbHVlKTtcbiAgICAgIGkgPSB0aGlzLnVudGlsKFsnLCcsICd9J10sIHJlc3VsdC5lbmQpO1xuICAgICAgdmFyIGNociA9IGF0KHNvdXJjZSwgaSk7XG4gICAgICBpZiAoY2hyID09PSAnLCcpIHtcbiAgICAgICAgZXhwZWN0S2V5cGFpciA9IHRydWU7XG4gICAgICAgIGkrKztcbiAgICAgIH0gZWxzZSBpZiAoY2hyID09PSAnfScpIHtcbiAgICAgICAgaSsrO1xuICAgICAgICBjbG9zZWQgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFjbG9zZWQpIHRocm93IG5ldyBTeW50YXhFcnJvcignVW50ZXJtaW5hdGVkIG9iamVjdCBhdDogJyArIGkpO1xuICAgIHJldHVybiB0aGlzLm5vZGUoT0JKRUNULCBvYmplY3QsIHRoaXMuaW5kZXgsIGksIG5vZGVzKTtcbiAgfSxcbiAgYXJyYXk6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc291cmNlID0gdGhpcy5zb3VyY2U7XG4gICAgdmFyIGkgPSB0aGlzLmluZGV4ICsgMTtcbiAgICB2YXIgZXhwZWN0RWxlbWVudCA9IGZhbHNlO1xuICAgIHZhciBhcnJheSA9IFtdO1xuICAgIHZhciBub2RlcyA9IFtdO1xuICAgIHZhciBjbG9zZWQgPSBmYWxzZTtcbiAgICB3aGlsZSAoaSA8IHNvdXJjZS5sZW5ndGgpIHtcbiAgICAgIGkgPSB0aGlzLnNraXAoSVNfV0hJVEVTUEFDRSwgaSk7XG4gICAgICBpZiAoYXQoc291cmNlLCBpKSA9PT0gJ10nICYmICFleHBlY3RFbGVtZW50KSB7XG4gICAgICAgIGkrKztcbiAgICAgICAgY2xvc2VkID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB2YXIgcmVzdWx0ID0gdGhpcy5mb3JrKGkpLnBhcnNlKCk7XG4gICAgICBwdXNoKG5vZGVzLCByZXN1bHQpO1xuICAgICAgcHVzaChhcnJheSwgcmVzdWx0LnZhbHVlKTtcbiAgICAgIGkgPSB0aGlzLnVudGlsKFsnLCcsICddJ10sIHJlc3VsdC5lbmQpO1xuICAgICAgaWYgKGF0KHNvdXJjZSwgaSkgPT09ICcsJykge1xuICAgICAgICBleHBlY3RFbGVtZW50ID0gdHJ1ZTtcbiAgICAgICAgaSsrO1xuICAgICAgfSBlbHNlIGlmIChhdChzb3VyY2UsIGkpID09PSAnXScpIHtcbiAgICAgICAgaSsrO1xuICAgICAgICBjbG9zZWQgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFjbG9zZWQpIHRocm93IG5ldyBTeW50YXhFcnJvcignVW50ZXJtaW5hdGVkIGFycmF5IGF0OiAnICsgaSk7XG4gICAgcmV0dXJuIHRoaXMubm9kZShPQkpFQ1QsIGFycmF5LCB0aGlzLmluZGV4LCBpLCBub2Rlcyk7XG4gIH0sXG4gIHN0cmluZzogZnVuY3Rpb24gKCkge1xuICAgIHZhciBpbmRleCA9IHRoaXMuaW5kZXg7XG4gICAgdmFyIHBhcnNlZCA9IHBhcnNlSlNPTlN0cmluZyh0aGlzLnNvdXJjZSwgdGhpcy5pbmRleCArIDEpO1xuICAgIHJldHVybiB0aGlzLm5vZGUoUFJJTUlUSVZFLCBwYXJzZWQudmFsdWUsIGluZGV4LCBwYXJzZWQuZW5kKTtcbiAgfSxcbiAgbnVtYmVyOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNvdXJjZSA9IHRoaXMuc291cmNlO1xuICAgIHZhciBzdGFydEluZGV4ID0gdGhpcy5pbmRleDtcbiAgICB2YXIgaSA9IHN0YXJ0SW5kZXg7XG4gICAgaWYgKGF0KHNvdXJjZSwgaSkgPT09ICctJykgaSsrO1xuICAgIGlmIChhdChzb3VyY2UsIGkpID09PSAnMCcpIGkrKztcbiAgICBlbHNlIGlmIChleGVjKElTX05PTl9aRVJPX0RJR0lULCBhdChzb3VyY2UsIGkpKSkgaSA9IHRoaXMuc2tpcChJU19ESUdJVCwgaSArIDEpO1xuICAgIGVsc2UgdGhyb3cgbmV3IFN5bnRheEVycm9yKCdGYWlsZWQgdG8gcGFyc2UgbnVtYmVyIGF0OiAnICsgaSk7XG4gICAgaWYgKGF0KHNvdXJjZSwgaSkgPT09ICcuJykge1xuICAgICAgdmFyIGZyYWN0aW9uU3RhcnRJbmRleCA9IGkgKyAxO1xuICAgICAgaSA9IHRoaXMuc2tpcChJU19ESUdJVCwgZnJhY3Rpb25TdGFydEluZGV4KTtcbiAgICAgIGlmIChmcmFjdGlvblN0YXJ0SW5kZXggPT09IGkpIHRocm93IG5ldyBTeW50YXhFcnJvcihcIkZhaWxlZCB0byBwYXJzZSBudW1iZXIncyBmcmFjdGlvbiBhdDogXCIgKyBpKTtcbiAgICB9XG4gICAgaWYgKGF0KHNvdXJjZSwgaSkgPT09ICdlJyB8fCBhdChzb3VyY2UsIGkpID09PSAnRScpIHtcbiAgICAgIGkrKztcbiAgICAgIGlmIChhdChzb3VyY2UsIGkpID09PSAnKycgfHwgYXQoc291cmNlLCBpKSA9PT0gJy0nKSBpKys7XG4gICAgICB2YXIgZXhwb25lbnRTdGFydEluZGV4ID0gaTtcbiAgICAgIGkgPSB0aGlzLnNraXAoSVNfRElHSVQsIGkpO1xuICAgICAgaWYgKGV4cG9uZW50U3RhcnRJbmRleCA9PT0gaSkgdGhyb3cgbmV3IFN5bnRheEVycm9yKFwiRmFpbGVkIHRvIHBhcnNlIG51bWJlcidzIGV4cG9uZW50IHZhbHVlIGF0OiBcIiArIGkpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5ub2RlKFBSSU1JVElWRSwgTnVtYmVyKHNsaWNlKHNvdXJjZSwgc3RhcnRJbmRleCwgaSkpLCBzdGFydEluZGV4LCBpKTtcbiAgfSxcbiAga2V5d29yZDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdmFyIGtleXdvcmQgPSAnJyArIHZhbHVlO1xuICAgIHZhciBpbmRleCA9IHRoaXMuaW5kZXg7XG4gICAgdmFyIGVuZEluZGV4ID0gaW5kZXggKyBrZXl3b3JkLmxlbmd0aDtcbiAgICBpZiAoc2xpY2UodGhpcy5zb3VyY2UsIGluZGV4LCBlbmRJbmRleCkgIT09IGtleXdvcmQpIHRocm93IG5ldyBTeW50YXhFcnJvcignRmFpbGVkIHRvIHBhcnNlIHZhbHVlIGF0OiAnICsgaW5kZXgpO1xuICAgIHJldHVybiB0aGlzLm5vZGUoUFJJTUlUSVZFLCB2YWx1ZSwgaW5kZXgsIGVuZEluZGV4KTtcbiAgfSxcbiAgc2tpcDogZnVuY3Rpb24gKHJlZ2V4LCBpKSB7XG4gICAgdmFyIHNvdXJjZSA9IHRoaXMuc291cmNlO1xuICAgIGZvciAoOyBpIDwgc291cmNlLmxlbmd0aDsgaSsrKSBpZiAoIWV4ZWMocmVnZXgsIGF0KHNvdXJjZSwgaSkpKSBicmVhaztcbiAgICByZXR1cm4gaTtcbiAgfSxcbiAgdW50aWw6IGZ1bmN0aW9uIChhcnJheSwgaSkge1xuICAgIGkgPSB0aGlzLnNraXAoSVNfV0hJVEVTUEFDRSwgaSk7XG4gICAgdmFyIGNociA9IGF0KHRoaXMuc291cmNlLCBpKTtcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IGFycmF5Lmxlbmd0aDsgaisrKSBpZiAoYXJyYXlbal0gPT09IGNocikgcmV0dXJuIGk7XG4gICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKCdVbmV4cGVjdGVkIGNoYXJhY3RlcjogXCInICsgY2hyICsgJ1wiIGF0OiAnICsgaSk7XG4gIH1cbn07XG5cbnZhciBOT19TT1VSQ0VfU1VQUE9SVCA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHVuc2FmZUludCA9ICc5MDA3MTk5MjU0NzQwOTkzJztcbiAgdmFyIHNvdXJjZTtcbiAgbmF0aXZlUGFyc2UodW5zYWZlSW50LCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSwgY29udGV4dCkge1xuICAgIHNvdXJjZSA9IGNvbnRleHQuc291cmNlO1xuICB9KTtcbiAgcmV0dXJuIHNvdXJjZSAhPT0gdW5zYWZlSW50O1xufSk7XG5cbnZhciBQUk9QRVJfQkFTRV9QQVJTRSA9IE5BVElWRV9TWU1CT0wgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gU2FmYXJpIDkgYnVnXG4gIHJldHVybiAxIC8gbmF0aXZlUGFyc2UoJy0wIFxcdCcpICE9PSAtSW5maW5pdHk7XG59KTtcblxuLy8gYEpTT04ucGFyc2VgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1qc29uLnBhcnNlXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1qc29uLXBhcnNlLXdpdGgtc291cmNlXG4kKHsgdGFyZ2V0OiAnSlNPTicsIHN0YXQ6IHRydWUsIGZvcmNlZDogTk9fU09VUkNFX1NVUFBPUlQgfSwge1xuICBwYXJzZTogZnVuY3Rpb24gcGFyc2UodGV4dCwgcmV2aXZlcikge1xuICAgIHJldHVybiBQUk9QRVJfQkFTRV9QQVJTRSAmJiAhaXNDYWxsYWJsZShyZXZpdmVyKSA/IG5hdGl2ZVBhcnNlKHRleHQpIDogJHBhcnNlKHRleHQsIHJldml2ZXIpO1xuICB9XG59KTtcbiIsICJ7XG5cdFwiZGVmYXVsdEdlb0luZm9cIjoge1xuXHRcdFwiY291bnRyeU9yQXJlYVwiOiBcIlwiLFxuXHRcdFwicmVnaW9uXCI6IFwiXCIsXG5cdFx0XCJjaXR5XCI6IFwiXCJcblx0fSxcblx0XCJtb3VudFBvaW50U2VsZWN0b3JcIjogXCIjZm9vdGVyLWluZm8sLnBhZ2UtaW5mb1wiLFxuXHRcInN0b3JhZ2VLZXlcIjogXCJleHQuZ2FkZ2V0Lk1hcmtSaWdodHNfR2VvTG9jYXRpb25SZWFkZXItXCIsXG5cdFwidXNlck5hbWVTcGFjZU51bWJlclwiOiAyLFxuXHRcInZlcnNpb25cIjogXCIyLjFcIlxufVxuIiwgImNvbnN0IFNZU1RFTV9TQ1JJUFRfTElTVDogc3RyaW5nW10gPSBbXG5cdCfmu6XnlKjov4fmu6TlmagnLFxuXHQn5rGC6Ze757yW6ICFJyxcblx0J+axgumXu+eZvuenkeekvuWMuicsXG5cdCdFeGFtcGxlJyxcblx0J0V4dGVybmFsIGNvbnRyaWJ1dG9ycycsXG5cdCdNYWludGVuYW5jZSBzY3JpcHQnLFxuXHQnTWVkaWFXaWtpIGRlZmF1bHQnLFxuXHQnTWVkaWFXaWtpIG1lc3NhZ2UgZGVsaXZlcnknLFxuXHQnTmV3IHVzZXIgcGFnZScsXG5dO1xuY29uc3QgV0VCTUFTVEVSX0xJU1Q6IHN0cmluZ1tdID0gWydRaXVXZW4nLCAnUWl1V2VuIGZvciBBY2NvdW50cycsICdRaXV3ZW5Tb2NpYWxNZWRpYSddO1xuXG5leHBvcnQge1NZU1RFTV9TQ1JJUFRfTElTVCwgV0VCTUFTVEVSX0xJU1R9O1xuIiwgImNvbnN0IENMQVNTX05BTUU6IHN0cmluZyA9ICdnYWRnZXQtZ2VvX2xvY2F0aW9uX3JlYWRlcic7XG5jb25zdCBDTEFTU19OQU1FX0lDT046IHN0cmluZyA9IGAke0NMQVNTX05BTUV9X19pY29uYDtcbmNvbnN0IENMQVNTX05BTUVfVEVYVDogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRX1fX3RleHRgO1xuXG5leHBvcnQge1NZU1RFTV9TQ1JJUFRfTElTVCwgV0VCTUFTVEVSX0xJU1R9IGZyb20gJ34vR2VvTG9jYXRpb24vbW9kdWxlcy9jb25zdGFudCc7XG5leHBvcnQge0NMQVNTX05BTUUsIENMQVNTX05BTUVfSUNPTiwgQ0xBU1NfTkFNRV9URVhUfTtcbiIsICJpbXBvcnQge0NMQVNTX05BTUUsIENMQVNTX05BTUVfSUNPTiwgQ0xBU1NfTkFNRV9URVhUfSBmcm9tICcuLi9jb25zdGFudCc7XG5pbXBvcnQgUmVhY3QsIHtSZWFjdEVsZW1lbnR9IGZyb20gJ2V4dC5nYWRnZXQuSlNYJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbmludGVyZmFjZSBGb290ZXJOb3RpY2VQcm9wcyB7XG5cdHNwYW5DbGFzczogc3RyaW5nO1xuXHRjaGlsZHJlbj86IFJlYWN0RWxlbWVudDtcbn1cblxuY29uc3QgRm9vdGVyTm90aWNlID0gKHtzcGFuQ2xhc3MsIGNoaWxkcmVuID0gPD48Lz59OiBGb290ZXJOb3RpY2VQcm9wcykgPT4ge1xuXHRjb25zdCB7c2tpbn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IGlkID0gQ0xBU1NfTkFNRTtcblx0Y29uc3QgY2xhc3NOYW1lcyA9IFtDTEFTU19OQU1FLCBgJHtDTEFTU19OQU1FfS0ke3NwYW5DbGFzc31gXTtcblxuXHRpZiAoc2tpbiA9PT0gJ2NpdGl6ZW4nKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxzZWN0aW9uIGlkPXtpZH0gY2xhc3NOYW1lPXtbLi4uY2xhc3NOYW1lcywgJ3BhZ2UtaW5mb19faXRlbScsICdjaXRpemVuLWZvb3Rlcl9fcGFnZWluZm8taXRlbScsICdub3ByaW50J119PlxuXHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHQ8L3NlY3Rpb24+XG5cdFx0KTtcblx0fSBlbHNlIGlmIChbJ2dvbmdiaScsICd2ZWN0b3InLCAndmVjdG9yLTIwMjInXS5pbmNsdWRlcyhza2luKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bCNmb290ZXItaW5mbycpKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxsaSBpZD17aWR9IGNsYXNzTmFtZT17Wy4uLmNsYXNzTmFtZXMsICdub3ByaW50J119PlxuXHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHQ8L2xpPlxuXHRcdCk7XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgaWQ9e2lkfSBjbGFzc05hbWU9e1suLi5jbGFzc05hbWVzLCAnbm9wcmludCddfT5cblx0XHRcdHtjaGlsZHJlbn1cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmludGVyZmFjZSBJbmRpY2F0b3JQcm9wcyB7XG5cdGljb246ICdnbG9iZScgfCAnaGVscE5vdGljZSc7XG5cdGluZGljYXRvclRleHQ6IHN0cmluZztcbn1cblxuY29uc3QgSW5kaWNhdG9yID0gKHtpY29uLCBpbmRpY2F0b3JUZXh0fTogSW5kaWNhdG9yUHJvcHMpID0+IHtcblx0Y29uc3QgdGV4dDogc3RyaW5nID1cblx0XHRpY29uID09PSAnZ2xvYmUnID8gZ2V0TWVzc2FnZSgnTG9jYXRpb24nKSArIGdldE1lc3NhZ2UoJzonKSArIGluZGljYXRvclRleHQgOiAoaW5kaWNhdG9yVGV4dCA/PyAnJyk7XG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtbQ0xBU1NfTkFNRV9JQ09OLCBgJHtDTEFTU19OQU1FX0lDT059LSR7aWNvbn1gXX0gYXJpYS1sYWJlbD17dGV4dH0+PC9zcGFuPlxuXHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtDTEFTU19OQU1FX1RFWFR9Pnt0ZXh0fTwvc3Bhbj5cblx0XHQ8Lz5cblx0KTtcbn07XG5cbmludGVyZmFjZSBGb290ZXJJY29uUHJvcHMge1xuXHRzcGFuQ2xhc3M6IHN0cmluZztcblx0aWNvbjogJ2dsb2JlJyB8ICdoZWxwTm90aWNlJztcblx0aW5kaWNhdG9yVGV4dDogc3RyaW5nO1xufVxuXG5jb25zdCBGb290ZXJJY29uID0gKHtpY29uLCBzcGFuQ2xhc3MsIGluZGljYXRvclRleHR9OiBGb290ZXJJY29uUHJvcHMpID0+IChcblx0PEZvb3Rlck5vdGljZSBzcGFuQ2xhc3M9e3NwYW5DbGFzc30+XG5cdFx0PEluZGljYXRvciBpY29uPXtpY29ufSBpbmRpY2F0b3JUZXh0PXtpbmRpY2F0b3JUZXh0fSAvPlxuXHQ8L0Zvb3Rlck5vdGljZT5cbik7XG5cbmV4cG9ydCB7Rm9vdGVySWNvbiwgdHlwZSBGb290ZXJJY29uUHJvcHN9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHQnOic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnOiAnLFxuXHRcdFx0amE6ICfvvJonLFxuXHRcdFx0emg6ICfvvJonLFxuXHRcdH0pLFxuXHRcdFVua25vd246IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVW5rbm93biBMb2NhdGlvbicsXG5cdFx0XHRqYTogJ+acquefpUlQ5Zyw5Z+fJyxcblx0XHRcdCd6aC1oYW5zJzogJ+acquefpUlQ5bGe5ZywJyxcblx0XHRcdCd6aC1oYW50JzogJ+acquefpUlQ5bGs5ZywJyxcblx0XHR9KSxcblx0XHRMb2NhdGlvbjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdJUCBMb2NhdGlvbicsXG5cdFx0XHRqYTogJ0lQ5Zyw5Z+fJyxcblx0XHRcdCd6aC1oYW5zJzogJ0lQ5bGe5ZywJyxcblx0XHRcdCd6aC1oYW50JzogJ0lQ5bGs5ZywJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtGb290ZXJJY29uLCB0eXBlIEZvb3Rlckljb25Qcm9wc30gZnJvbSAnLi4vY29tcG9uZW50cy9yZWFjdCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5KU1gnO1xuXG5jb25zdCBhcHBlbmRJY29uID0gKHtpY29uLCBpbmRpY2F0b3JUZXh0LCBzcGFuQ2xhc3N9OiBGb290ZXJJY29uUHJvcHMpOiB2b2lkID0+IHtcblx0aWYgKCFzcGFuQ2xhc3MgfHwgIWljb24gfHwgIWluZGljYXRvclRleHQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBtb3VudFBvaW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oT1BUSU9OUy5tb3VudFBvaW50U2VsZWN0b3IpO1xuXHRpZiAoIW1vdW50UG9pbnQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRtb3VudFBvaW50LnByZXBlbmQoPEZvb3Rlckljb24gc3BhbkNsYXNzPXtzcGFuQ2xhc3N9IGljb249e2ljb259IGluZGljYXRvclRleHQ9e2luZGljYXRvclRleHR9IC8+KTtcbn07XG5cbmV4cG9ydCB7YXBwZW5kSWNvbn07XG4iLCAiY29uc3QgZ2V0Q291bnRyeU9yQXJlYU5hbWVMaXN0ID0gKCkgPT4ge1xuXHRjb25zdCB7d2dVc2VyTGFuZ3VhZ2V9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmIChbJ3poLWhhbnQnLCAnemgtaGsnLCAnemgtbW8nXS5pbmNsdWRlcyh3Z1VzZXJMYW5ndWFnZSkpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0QUY6ICfpmL/lr4zmsZcnLFxuXHRcdFx0QVg6ICflpafomK0nLFxuXHRcdFx0QUw6ICfpmL/niL7lt7TlsLzkup4nLFxuXHRcdFx0RFo6ICfpmL/niL7lj4rliKnkup4nLFxuXHRcdFx0QVM6ICfnvo7lsazolqnmkankup4nLFxuXHRcdFx0QUQ6ICflronpgZPniL4nLFxuXHRcdFx0QU86ICflronlk6Xmi4knLFxuXHRcdFx0QUk6ICflronlnK3mi4knLFxuXHRcdFx0QVE6ICfljZfmpbXmtLInLFxuXHRcdFx0QUc6ICflronmj5Dnk5zlkozlt7TluIPpgZQnLFxuXHRcdFx0QVI6ICfpmL/moLnlu7cnLFxuXHRcdFx0QU06ICfkup7nvo7lsLzkup4nLFxuXHRcdFx0QVc6ICfpmL/pra/lt7QnLFxuXHRcdFx0QVU6ICfmvrPmtLInLFxuXHRcdFx0QVQ6ICflpaflnLDliKknLFxuXHRcdFx0QVo6ICfpmL/loZ7mi5znloYnLFxuXHRcdFx0QlM6ICflt7Tlk4jppqwnLFxuXHRcdFx0Qkg6ICflt7TmnpcnLFxuXHRcdFx0QkQ6ICflrZ/liqDmi4nlnIsnLFxuXHRcdFx0QkI6ICflt7Tlt7TlpJrmlq8nLFxuXHRcdFx0Qlk6ICfnmb3kv4TnvoXmlq8nLFxuXHRcdFx0QkU6ICfmr5TliKnmmYInLFxuXHRcdFx0Qlo6ICfkvK/liKnojLInLFxuXHRcdFx0Qko6ICfosp3lr6cnLFxuXHRcdFx0Qk06ICfnmb7mhZXpgZQnLFxuXHRcdFx0QlQ6ICfkuI3kuLknLFxuXHRcdFx0Qk86ICfnjrvliKnntq3kup4nLFxuXHRcdFx0QlE6ICfojbfomK3liqDli5Lmr5TljYAnLFxuXHRcdFx0QkE6ICfms6Lpu5EnLFxuXHRcdFx0Qlc6ICfljZrojKjnk6bntI0nLFxuXHRcdFx0QlY6ICfluIPpn4vls7YnLFxuXHRcdFx0QlI6ICflt7Topb8nLFxuXHRcdFx0SU86ICfoi7HlsazljbDluqbmtIvpoJjlnLAnLFxuXHRcdFx0Qk46ICfmsbbokIonLFxuXHRcdFx0Qkc6ICfkv53liqDliKnkup4nLFxuXHRcdFx0QkY6ICfluIPln7rntI3ms5XntKInLFxuXHRcdFx0Qkk6ICfluIPpmobov6onLFxuXHRcdFx0Q1Y6ICfkvZvlvpfop5InLFxuXHRcdFx0S0g6ICfmn6zln5Tlr6gnLFxuXHRcdFx0Q006ICflloDpuqXpmoYnLFxuXHRcdFx0Q0E6ICfliqDmi7/lpKcnLFxuXHRcdFx0S1k6ICfplovmm7znvqTls7YnLFxuXHRcdFx0Q0Y6ICfkuK3pnZ4nLFxuXHRcdFx0VEQ6ICfkuY3lvpcnLFxuXHRcdFx0Q0w6ICfmmbrliKknLFxuXHRcdFx0Q046ICfkuK3lnIsnLFxuXHRcdFx0Q1g6ICfogZboqpXls7YnLFxuXHRcdFx0Q0M6ICfnp5Hnp5Hmlq/vvIjln7rmnpfvvInnvqTls7YnLFxuXHRcdFx0Q086ICflk6XlgKvmr5Tkup4nLFxuXHRcdFx0S006ICfnp5HmkannvoUnLFxuXHRcdFx0Q0c6ICfliZvmnpzlhbHlkozlnIsnLFxuXHRcdFx0Q0Q6ICfliZvmnpzmsJHkuLvlhbHlkozlnIsnLFxuXHRcdFx0Q0s6ICfluqvlhYvnvqTls7YnLFxuXHRcdFx0Q1I6ICflk6Xmlq/pgZTpu47liqAnLFxuXHRcdFx0Q0k6ICfnp5Hnibnov6rnk6YnLFxuXHRcdFx0SFI6ICflhYvnvoXlnLDkup4nLFxuXHRcdFx0Q1U6ICflj6Tlt7QnLFxuXHRcdFx0Q1c6ICfluqvmi4nntKInLFxuXHRcdFx0Q1k6ICfloZ7mtabot6/mlq8nLFxuXHRcdFx0Q1o6ICfmjbflhYsnLFxuXHRcdFx0REs6ICfkuLnpuqUnLFxuXHRcdFx0REo6ICflkInluIPmj5AnLFxuXHRcdFx0RE06ICflpJrnsbPlsLzlhYsnLFxuXHRcdFx0RE86ICflpJrnsbPlsLzliqAnLFxuXHRcdFx0RUM6ICfljoTnk5zlpJrniL4nLFxuXHRcdFx0RUc6ICfln4Plj4onLFxuXHRcdFx0U1Y6ICfolqnniL7nk6blpJonLFxuXHRcdFx0R1E6ICfotaTpgZPnlb/lhafkup4nLFxuXHRcdFx0RVI6ICfljoTnq4vnibnph4zkup4nLFxuXHRcdFx0RUU6ICfmhJvmspnlsLzkup4nLFxuXHRcdFx0U1o6ICfmlq/lqIHlo6vomK0nLFxuXHRcdFx0RVQ6ICfln4PloZ7kv4Tmr5Tkup4nLFxuXHRcdFx0Rks6ICfnpo/lhYvomK3nvqTls7YnLFxuXHRcdFx0Rk86ICfms5XnvoXnvqTls7YnLFxuXHRcdFx0Rko6ICfmlpDmv58nLFxuXHRcdFx0Rkk6ICfoiqzomK0nLFxuXHRcdFx0RlI6ICfms5XlnIsnLFxuXHRcdFx0R0Y6ICfms5XlsazlnK3kup7pgqMnLFxuXHRcdFx0UEY6ICfms5Xlsazms6LliKnlsLzopb/kup4nLFxuXHRcdFx0VEY6ICfms5XlsazljZfpg6jlkozljZfmpbXpoJjlnLAnLFxuXHRcdFx0R0E6ICfliqDok6wnLFxuXHRcdFx0R006ICflsqHmr5Tkup4nLFxuXHRcdFx0R0U6ICfmoLzpra/lkInkup4nLFxuXHRcdFx0REU6ICflvrflnIsnLFxuXHRcdFx0R0g6ICfliqDntI0nLFxuXHRcdFx0R0k6ICfnm7TluIPnvoXpmYAnLFxuXHRcdFx0R1I6ICfluIzoh5gnLFxuXHRcdFx0R0w6ICfmoLzpmbXomK0nLFxuXHRcdFx0R0Q6ICfmoLzmnpfntI3pgZQnLFxuXHRcdFx0R1A6ICfnk5zlvrfnvoXmma4nLFxuXHRcdFx0R1U6ICfpl5zls7YnLFxuXHRcdFx0R1Q6ICfljbHlnLDppqzmi4knLFxuXHRcdFx0R0c6ICfmoLnopb8nLFxuXHRcdFx0R046ICfnlb/lhafkup4nLFxuXHRcdFx0R1c6ICfnlb/lhafkup7mr5TntLknLFxuXHRcdFx0R1k6ICflnK3kup7pgqMnLFxuXHRcdFx0SFQ6ICfmtbflnLAnLFxuXHRcdFx0SE06ICfotavlvrfls7blkozpuqXlhYvllJDntI3nvqTls7YnLFxuXHRcdFx0VkE6ICfmorXokoLlsqEnLFxuXHRcdFx0SE46ICfmtKrpg73mi4nmlq8nLFxuXHRcdFx0SEs6ICfkuK3lnIvpppnmuK8nLFxuXHRcdFx0SFU6ICfljIjniZnliKknLFxuXHRcdFx0SVM6ICflhrDls7YnLFxuXHRcdFx0SU46ICfljbDluqYnLFxuXHRcdFx0SUQ6ICfljbDlsLwnLFxuXHRcdFx0SVI6ICfkvIrmnJcnLFxuXHRcdFx0SVE6ICfkvIrmi4nlhYsnLFxuXHRcdFx0SUU6ICfmhJvniL7omK0nLFxuXHRcdFx0SU06ICfkurrls7YnLFxuXHRcdFx0SUw6ICfku6XoibLliJcnLFxuXHRcdFx0SVQ6ICfmhI/lpKfliKknLFxuXHRcdFx0Sk06ICfniZnosrfliqAnLFxuXHRcdFx0SlA6ICfml6XmnKwnLFxuXHRcdFx0SkU6ICfmvqTopb8nLFxuXHRcdFx0Sk86ICfntITml6YnLFxuXHRcdFx0S1o6ICflk4jolqnlhYsnLFxuXHRcdFx0S0U6ICfogq/pm4UnLFxuXHRcdFx0S0k6ICfln7rph4zlt7Tmlq8nLFxuXHRcdFx0S1A6ICfljJfpn5MnLFxuXHRcdFx0S1I6ICfpn5PlnIsnLFxuXHRcdFx0S1c6ICfnp5HlqIHnibknLFxuXHRcdFx0S0c6ICflkInniL7lkInmlq8nLFxuXHRcdFx0TEE6ICfogIHmkr4nLFxuXHRcdFx0TFY6ICfmi4nohKvntq3kup4nLFxuXHRcdFx0TEI6ICfpu47lt7Tlq6knLFxuXHRcdFx0TFM6ICfokIrntKLmiZgnLFxuXHRcdFx0TFI6ICfliKnmr5Tph4zkup4nLFxuXHRcdFx0TFk6ICfliKnmr5Tkup4nLFxuXHRcdFx0TEk6ICfliJfmlK/mlablo6vnmbsnLFxuXHRcdFx0TFQ6ICfnq4vpmbblrpsnLFxuXHRcdFx0TFU6ICfnm6fmo67loKEnLFxuXHRcdFx0TU86ICfkuK3lnIvmvrPploAnLFxuXHRcdFx0TUc6ICfppqzpgZTliqDmlq/liqAnLFxuXHRcdFx0TVc6ICfppqzmi4nntq0nLFxuXHRcdFx0TVk6ICfppqzkvobopb/kup4nLFxuXHRcdFx0TVY6ICfppqzniL7ku6PlpKsnLFxuXHRcdFx0TUw6ICfppqzph4wnLFxuXHRcdFx0TVQ6ICfppqzogLPku5YnLFxuXHRcdFx0TUg6ICfppqzntLnniL7nvqTls7YnLFxuXHRcdFx0TVE6ICfppqzmj5DlsLzlhYsnLFxuXHRcdFx0TVI6ICfmr5vph4zloZTlsLzkup4nLFxuXHRcdFx0TVU6ICfmr5vph4zoo5jmlq8nLFxuXHRcdFx0WVQ6ICfppqzntITnibknLFxuXHRcdFx0TVg6ICfloqjopb/lk6UnLFxuXHRcdFx0Rk06ICflr4blhYvnvoXlsLzopb/kup7oga/pgqYnLFxuXHRcdFx0TUQ6ICfmkanniL7lpJrnk6YnLFxuXHRcdFx0TUM6ICfmkanntI3lk6UnLFxuXHRcdFx0TU46ICfokpnlj6QnLFxuXHRcdFx0TUU6ICfpu5HlsbEnLFxuXHRcdFx0TVM6ICfokpnnibnloZ7mi4nnibknLFxuXHRcdFx0TUE6ICfmkanmtJvlk6UnLFxuXHRcdFx0TVo6ICfojqvmoZHmr5TlhYsnLFxuXHRcdFx0TU06ICfnt6znlLgnLFxuXHRcdFx0TkE6ICfntI3nsbPmr5Tkup4nLFxuXHRcdFx0TlI6ICfnkZnpra8nLFxuXHRcdFx0TlA6ICflsLzms4rniL4nLFxuXHRcdFx0Tkw6ICfojbfomK0nLFxuXHRcdFx0TkM6ICfmlrDlloDph4zlpJrlsLzkup4nLFxuXHRcdFx0Tlo6ICfmlrDopb/omK0nLFxuXHRcdFx0Tkk6ICflsLzliqDmi4nnk5wnLFxuXHRcdFx0TkU6ICflsLzml6XniL4nLFxuXHRcdFx0Tkc6ICflsLzml6XliKnkup4nLFxuXHRcdFx0TlU6ICfntJDln4MnLFxuXHRcdFx0TkY6ICfoq77npo/lhYvls7YnLFxuXHRcdFx0TUs6ICfljJfppqzlhbbpoJMnLFxuXHRcdFx0TVA6ICfljJfppqzliKnlronntI3nvqTls7YnLFxuXHRcdFx0Tk86ICfmjKrlqIEnLFxuXHRcdFx0T006ICfpmL/mm7wnLFxuXHRcdFx0UEs6ICflt7Tln7rmlq/lnaYnLFxuXHRcdFx0UFc6ICfluJXli54nLFxuXHRcdFx0UFM6ICflt7Tli5Lmlq/lnaYnLFxuXHRcdFx0UEE6ICflt7Tmi7/ppqwnLFxuXHRcdFx0UEc6ICflt7TluIPkup7mlrDnlb/lhafkup4nLFxuXHRcdFx0UFk6ICflt7Tmi4nlnK0nLFxuXHRcdFx0UEU6ICfnp5jpra8nLFxuXHRcdFx0UEg6ICfoj7Llvovos5MnLFxuXHRcdFx0UE46ICfnmq7nibnogq/nvqTls7YnLFxuXHRcdFx0UEw6ICfms6LomK0nLFxuXHRcdFx0UFQ6ICfokaHokITniZknLFxuXHRcdFx0UFI6ICfms6LlpJrpu47lkIQnLFxuXHRcdFx0UUE6ICfljaHloZTniL4nLFxuXHRcdFx0UkU6ICfnlZnlsLzmsaonLFxuXHRcdFx0Uk86ICfnvoXppqzlsLzkup4nLFxuXHRcdFx0UlU6ICfkv4TnvoXmlq8nLFxuXHRcdFx0Ulc6ICfnm6fml7rpgZQnLFxuXHRcdFx0Qkw6ICfogZblt7Tms7Dli5LnsbMnLFxuXHRcdFx0U0g6ICfogZbmtbflgKvlqJzjgIHpmL/mo67mnb7lkoznibnph4zmlq/lnaYt6YGU5bqr5bC85LqeJyxcblx0XHRcdEtOOiAn6IGW5Z+66Iyo5ZKM5bC857at5pavJyxcblx0XHRcdExDOiAn6IGW55un6KW/5LqeJyxcblx0XHRcdE1GOiAn5rOV5bGs6IGW6aas5LiBJyxcblx0XHRcdFBNOiAn6IGW55qu5Z+D54i+5ZKM5a+G5YWL6ZqGJyxcblx0XHRcdFZDOiAn6IGW5paH5qOu54m55ZKM5qC85p6X57SN5LiB5pavJyxcblx0XHRcdFdTOiAn6Jap5pGp5LqeJyxcblx0XHRcdFNNOiAn6IGW6aas5Yqb6Ku+Jyxcblx0XHRcdFNUOiAn6IGW5aSa576O5ZKM5pmu5p6X6KW/5q+UJyxcblx0XHRcdFNBOiAn5rKZ5Zyw6Zi/5ouJ5LyvJyxcblx0XHRcdFNOOiAn5aGe5YWn5Yqg54i+Jyxcblx0XHRcdFJTOiAn5aGe54i+57at5LqeJyxcblx0XHRcdFNDOiAn5aGe6IiM54i+Jyxcblx0XHRcdFNMOiAn5aGe5ouJ5Yip5piCJyxcblx0XHRcdFNHOiAn5paw5Yqg5Z2hJyxcblx0XHRcdFNYOiAn6I235bGs6IGW6aas5LiBJyxcblx0XHRcdFNLOiAn5pav5rSb5LyQ5YWLJyxcblx0XHRcdFNJOiAn5pav5rSb5paH5bC85LqeJyxcblx0XHRcdFNCOiAn5omA576F6ZaA576k5bO2Jyxcblx0XHRcdFNPOiAn57Si6aas6YeMJyxcblx0XHRcdFpBOiAn5Y2X6Z2eJyxcblx0XHRcdEdTOiAn5Y2X5Zas5rK75Lqe5ZKM5Y2X5qGR5aiB5aWH576k5bO2Jyxcblx0XHRcdFNTOiAn5Y2X6JiH5Li5Jyxcblx0XHRcdEVTOiAn6KW/54+t54mZJyxcblx0XHRcdExLOiAn5pav6YeM6Jit5Y2hJyxcblx0XHRcdFNEOiAn6JiH5Li5Jyxcblx0XHRcdFNSOiAn6JiH6YeM5Y2XJyxcblx0XHRcdFNKOiAn5pav55Om54i+5be05ZKM5o+a6aas5bu2Jyxcblx0XHRcdFNFOiAn55Ge5YW4Jyxcblx0XHRcdENIOiAn55Ge5aOrJyxcblx0XHRcdFNZOiAn5pWY5Yip5LqeJyxcblx0XHRcdFRXOiAn5Lit5ZyL6Ie654GjJyxcblx0XHRcdFRKOiAn5aGU5ZCJ5YWLJyxcblx0XHRcdFRaOiAn5Z2m5qGR5bC85LqeJyxcblx0XHRcdFRIOiAn5rOw5ZyLJyxcblx0XHRcdFRMOiAn5p2x5bid5rG2Jyxcblx0XHRcdFRHOiAn5aSa5ZOlJyxcblx0XHRcdFRLOiAn5omY5YWL5YueJyxcblx0XHRcdFRPOiAn5rmv5YqgJyxcblx0XHRcdFRUOiAn5Y2D6YeM6YGU5ZKM5aSa5be05ZOlJyxcblx0XHRcdFROOiAn56qB5bC86KW/5LqeJyxcblx0XHRcdFRSOiAn5Zyf6ICz5YW2Jyxcblx0XHRcdFRNOiAn5Zyf5bqr5pu8Jyxcblx0XHRcdFRDOiAn54m55YWL5pav5ZKM5Yex56eR5pav576k5bO2Jyxcblx0XHRcdFRWOiAn5ZyW55Om55unJyxcblx0XHRcdFVHOiAn54OP5bmy6YGUJyxcblx0XHRcdFVBOiAn54OP5YWL6JitJyxcblx0XHRcdEFFOiAn6Zi/6IGv6YWLJyxcblx0XHRcdEdCOiAn6Iux5ZyLJyxcblx0XHRcdFVTOiAn576O5ZyLJyxcblx0XHRcdFVNOiAn576O5ZyL5pys5Zyf5aSW5bCP5bO25ba8Jyxcblx0XHRcdFVZOiAn54OP5ouJ5ZytJyxcblx0XHRcdFVaOiAn54OP6Iyy5Yil5YWLJyxcblx0XHRcdFZVOiAn55Om5Yqq6Zi/5ZyWJyxcblx0XHRcdFZFOiAn5aeU5YWn55Ge5ouJJyxcblx0XHRcdFZOOiAn6LaK5Y2XJyxcblx0XHRcdFZHOiAn6Iux5bGs6JmV5aWz576k5bO2Jyxcblx0XHRcdFZJOiAn576O5bGs6JmV5aWz576k5bO2Jyxcblx0XHRcdFdGOiAn55Om5Yip5pav5ZKM5a+M5ZyW57SNJyxcblx0XHRcdEVIOiAn6KW/5pKS5ZOI5ouJJyxcblx0XHRcdFlFOiAn5Lmf6ZaAJyxcblx0XHRcdFpNOiAn6LSK5q+U5LqeJyxcblx0XHRcdFpXOiAn5rSl5be05biD6Z+LJyxcblx0XHR9O1xuXHR9IGVsc2UgaWYgKFsnemgtdHcnXS5pbmNsdWRlcyh3Z1VzZXJMYW5ndWFnZSkpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0QUY6ICfpmL/lr4zmsZcnLFxuXHRcdFx0QVg6ICflpafomK0nLFxuXHRcdFx0QUw6ICfpmL/niL7lt7TlsLzkup4nLFxuXHRcdFx0RFo6ICfpmL/niL7lj4rliKnkup4nLFxuXHRcdFx0QVM6ICfnvo7lsazolqnmkankup4nLFxuXHRcdFx0QUQ6ICflronpgZPniL4nLFxuXHRcdFx0QU86ICflronlk6Xmi4knLFxuXHRcdFx0QUk6ICflronlnK3mi4knLFxuXHRcdFx0QVE6ICfljZfmpbXmtLInLFxuXHRcdFx0QUc6ICflronlnLDljaHlj4rlt7TluIPpgZQnLFxuXHRcdFx0QVI6ICfpmL/moLnlu7cnLFxuXHRcdFx0QU06ICfkup7nvo7lsLzkup4nLFxuXHRcdFx0QVc6ICfpmL/pra/lt7QnLFxuXHRcdFx0QVU6ICfmvrPmtLInLFxuXHRcdFx0QVQ6ICflpaflnLDliKknLFxuXHRcdFx0QVo6ICfkup7loZ7mi5znhLYnLFxuXHRcdFx0QlM6ICflt7Tlk4jppqwnLFxuXHRcdFx0Qkg6ICflt7TmnpcnLFxuXHRcdFx0QkQ6ICflrZ/liqDmi4nlnIsnLFxuXHRcdFx0QkI6ICflt7Tosp3lpJonLFxuXHRcdFx0Qlk6ICfnmb3kv4TnvoXmlq8nLFxuXHRcdFx0QkU6ICfmr5TliKnmmYInLFxuXHRcdFx0Qlo6ICfosp3ph4zmlq8nLFxuXHRcdFx0Qko6ICfosp3ljZcnLFxuXHRcdFx0Qk06ICfnmb7mhZXpgZQnLFxuXHRcdFx0QlQ6ICfkuI3kuLknLFxuXHRcdFx0Qk86ICfnjrvliKnntq3kup4nLFxuXHRcdFx0QlE6ICfojbfomK3liqDli5Lmr5TljYAnLFxuXHRcdFx0QkE6ICfms6LotasnLFxuXHRcdFx0Qlc6ICfms6LmnK3pgqMnLFxuXHRcdFx0QlY6ICfluIPpn4vls7YnLFxuXHRcdFx0QlI6ICflt7Topb8nLFxuXHRcdFx0SU86ICfoi7HlsazljbDluqbmtIvpoJjlnLAnLFxuXHRcdFx0Qk46ICfmsbbokIonLFxuXHRcdFx0Qkc6ICfkv53liqDliKnkup4nLFxuXHRcdFx0QkY6ICfluIPlkInntI3ms5XntKInLFxuXHRcdFx0Qkk6ICfokrLpmoblnLAnLFxuXHRcdFx0Q1Y6ICfntq3lvrfop5InLFxuXHRcdFx0S0g6ICfmn6zln5Tlr6gnLFxuXHRcdFx0Q006ICflloDpuqXpmoYnLFxuXHRcdFx0Q0E6ICfliqDmi7/lpKcnLFxuXHRcdFx0S1k6ICfplovmm7znvqTls7YnLFxuXHRcdFx0Q0Y6ICfkuK3pnZ4nLFxuXHRcdFx0VEQ6ICfmn6XlvrcnLFxuXHRcdFx0Q0w6ICfmmbrliKknLFxuXHRcdFx0Q046ICfkuK3lnIsnLFxuXHRcdFx0Q1g6ICfogZboqpXls7YnLFxuXHRcdFx0Q0M6ICfnp5Hnp5Hmlq/vvIjln7rmnpfvvInnvqTls7YnLFxuXHRcdFx0Q086ICflk6XlgKvmr5Tkup4nLFxuXHRcdFx0S006ICfokZvmkaknLFxuXHRcdFx0Q0c6ICfliZvmnpzlhbHlkozlnIsnLFxuXHRcdFx0Q0Q6ICfliZvmnpzmsJHkuLvlhbHlkozlnIsnLFxuXHRcdFx0Q0s6ICfluqvlhYvnvqTls7YnLFxuXHRcdFx0Q1I6ICflk6Xmlq/lpKfpu47liqAnLFxuXHRcdFx0Q0k6ICfosaHniZnmtbflsrgnLFxuXHRcdFx0SFI6ICflhYvnvoXln4Popb/kup4nLFxuXHRcdFx0Q1U6ICflj6Tlt7QnLFxuXHRcdFx0Q1c6ICflj6Tmi4nntKInLFxuXHRcdFx0Q1k6ICfos73mma7li5Lmlq8nLFxuXHRcdFx0Q1o6ICfmjbflhYsnLFxuXHRcdFx0REs6ICfkuLnpuqUnLFxuXHRcdFx0REo6ICflkInluIPlnLAnLFxuXHRcdFx0RE06ICflpJrnsbPlsLzlhYsnLFxuXHRcdFx0RE86ICflpJrmmI7lsLzliqAnLFxuXHRcdFx0RUM6ICfljoTnk5zlpJonLFxuXHRcdFx0RUc6ICfln4Plj4onLFxuXHRcdFx0U1Y6ICfolqnniL7nk6blpJonLFxuXHRcdFx0R1E6ICfotaTpgZPlub7lhafkup4nLFxuXHRcdFx0RVI6ICfljoTliKnlnoLkup4nLFxuXHRcdFx0RUU6ICfmhJvmspnlsLzkup4nLFxuXHRcdFx0U1o6ICflj7Lnk6bluJ3lsLwnLFxuXHRcdFx0RVQ6ICfooaPntKLmr5Tkup4nLFxuXHRcdFx0Rks6ICfnpo/lhYvomK3nvqTls7YnLFxuXHRcdFx0Rk86ICfms5XnvoXnvqTls7YnLFxuXHRcdFx0Rko6ICfmlpDmv58nLFxuXHRcdFx0Rkk6ICfoiqzomK0nLFxuXHRcdFx0RlI6ICfms5XlnIsnLFxuXHRcdFx0R0Y6ICfms5XlsazlnK3kup7pgqMnLFxuXHRcdFx0UEY6ICfms5Xlsaznjrvph4zlsLzopb/kup4nLFxuXHRcdFx0VEY6ICfms5XlsazljZfpg6jlkozljZfmpbXpoJjlnLAnLFxuXHRcdFx0R0E6ICfliqDlva0nLFxuXHRcdFx0R006ICfnlJjmr5Tkup4nLFxuXHRcdFx0R0U6ICfllqzmsrvkup4nLFxuXHRcdFx0REU6ICflvrflnIsnLFxuXHRcdFx0R0g6ICfov6bntI0nLFxuXHRcdFx0R0k6ICfnm7TluIPnvoXpmYAnLFxuXHRcdFx0R1I6ICfluIzoh5gnLFxuXHRcdFx0R0w6ICfmoLzpmbXomK0nLFxuXHRcdFx0R0Q6ICfmoLznkZ7pgqPpgZQnLFxuXHRcdFx0R1A6ICfnk5zlvrfnvoXmma4nLFxuXHRcdFx0R1U6ICfpl5zls7YnLFxuXHRcdFx0R1Q6ICfnk5zlnLDppqzmi4knLFxuXHRcdFx0R0c6ICfmoLnopb8nLFxuXHRcdFx0R046ICflub7lhafkup4nLFxuXHRcdFx0R1c6ICflub7lhafkup7mr5TntKInLFxuXHRcdFx0R1k6ICfok4vkup7pgqMnLFxuXHRcdFx0SFQ6ICfmtbflnLAnLFxuXHRcdFx0SE06ICfotavlvrfls7blkozpuqXlhYvllJDntI3nvqTls7YnLFxuXHRcdFx0VkE6ICfmorXokoLlsqEnLFxuXHRcdFx0SE46ICflro/pg73mi4nmlq8nLFxuXHRcdFx0SEs6ICfkuK3lnIvpppnmuK8nLFxuXHRcdFx0SFU6ICfljIjniZnliKknLFxuXHRcdFx0SVM6ICflhrDls7YnLFxuXHRcdFx0SU46ICfljbDluqYnLFxuXHRcdFx0SUQ6ICfljbDlsLwnLFxuXHRcdFx0SVI6ICfkvIrmnJcnLFxuXHRcdFx0SVE6ICfkvIrmi4nlhYsnLFxuXHRcdFx0SUU6ICfmhJvniL7omK0nLFxuXHRcdFx0SU06ICfmm7zls7YnLFxuXHRcdFx0SUw6ICfku6XoibLliJcnLFxuXHRcdFx0SVQ6ICfnvqnlpKfliKknLFxuXHRcdFx0Sk06ICfniZnosrfliqAnLFxuXHRcdFx0SlA6ICfml6XmnKwnLFxuXHRcdFx0SkU6ICfmvqTopb8nLFxuXHRcdFx0Sk86ICfntITml6YnLFxuXHRcdFx0S1o6ICflk4jolqnlhYsnLFxuXHRcdFx0S0U6ICfogq/kup4nLFxuXHRcdFx0S0k6ICflkInph4zlt7Tmlq8nLFxuXHRcdFx0S1A6ICfljJfpn5MnLFxuXHRcdFx0S1I6ICfpn5PlnIsnLFxuXHRcdFx0S1c6ICfnp5HlqIHnibknLFxuXHRcdFx0S0c6ICflkInniL7lkInmlq8nLFxuXHRcdFx0TEE6ICfogIHmkr4nLFxuXHRcdFx0TFY6ICfmi4nohKvntq3kup4nLFxuXHRcdFx0TEI6ICfpu47lt7Tlq6knLFxuXHRcdFx0TFM6ICfos7TntKLmiZgnLFxuXHRcdFx0TFI6ICfos7Tmr5TnkZ7kup4nLFxuXHRcdFx0TFk6ICfliKnmr5Tkup4nLFxuXHRcdFx0TEk6ICfliJfmlK/mlabmlq/nmbsnLFxuXHRcdFx0TFQ6ICfnq4vpmbblrpsnLFxuXHRcdFx0TFU6ICfnm6fmo67loKEnLFxuXHRcdFx0TU86ICfkuK3lnIvmvrPploAnLFxuXHRcdFx0TUc6ICfppqzpgZTliqDmlq/liqAnLFxuXHRcdFx0TVc6ICfppqzmi4nlqIEnLFxuXHRcdFx0TVk6ICfppqzkvobopb/kup4nLFxuXHRcdFx0TVY6ICfppqzniL7lnLDlpKsnLFxuXHRcdFx0TUw6ICfppqzph4wnLFxuXHRcdFx0TVQ6ICfppqzniL7ku5YnLFxuXHRcdFx0TUg6ICfppqzntLnniL7nvqTls7YnLFxuXHRcdFx0TVE6ICfppqzmj5DlsLzlhYsnLFxuXHRcdFx0TVI6ICfojIXliKnloZTlsLzkup4nLFxuXHRcdFx0TVU6ICfmqKHph4zopb/mlq8nLFxuXHRcdFx0WVQ6ICfppqzntITnibknLFxuXHRcdFx0TVg6ICfloqjopb/lk6UnLFxuXHRcdFx0Rk06ICflr4blhYvnvoXlsLzopb/kup7oga/pgqYnLFxuXHRcdFx0TUQ6ICfmkanniL7lpJrnk6YnLFxuXHRcdFx0TUM6ICfmkanntI3lk6UnLFxuXHRcdFx0TU46ICfokpnlj6QnLFxuXHRcdFx0TUU6ICfokpnnibnlhaflk6XnvoUnLFxuXHRcdFx0TVM6ICfokpnlk7Loh5gnLFxuXHRcdFx0TUE6ICfmkanmtJvlk6UnLFxuXHRcdFx0TVo6ICfojqvkuInmr5TlhYsnLFxuXHRcdFx0TU06ICfnt6znlLgnLFxuXHRcdFx0TkE6ICfntI3nsbPmr5Tkup4nLFxuXHRcdFx0TlI6ICfoq77pra8nLFxuXHRcdFx0TlA6ICflsLzms4rniL4nLFxuXHRcdFx0Tkw6ICfojbfomK0nLFxuXHRcdFx0TkM6ICfmlrDlloDph4zlpJrlsLzkup4nLFxuXHRcdFx0Tlo6ICfntJDopb/omK0nLFxuXHRcdFx0Tkk6ICflsLzliqDmi4nnk5wnLFxuXHRcdFx0TkU6ICflsLzml6UnLFxuXHRcdFx0Tkc6ICflpYjlj4rliKnkup4nLFxuXHRcdFx0TlU6ICfntJDln4MnLFxuXHRcdFx0TkY6ICfoq77npo/lhYvls7YnLFxuXHRcdFx0TUs6ICfljJfppqzlhbbpoJMnLFxuXHRcdFx0TVA6ICfljJfppqzliKnlronntI3nvqTls7YnLFxuXHRcdFx0Tk86ICfmjKrlqIEnLFxuXHRcdFx0T006ICfpmL/mm7wnLFxuXHRcdFx0UEs6ICflt7Tln7rmlq/lnaYnLFxuXHRcdFx0UFc6ICfluJvnkIknLFxuXHRcdFx0UFM6ICflt7Tli5Lmlq/lnaYnLFxuXHRcdFx0UEE6ICflt7Tmi7/ppqwnLFxuXHRcdFx0UEc6ICflt7TluIPkup7ntJDlub7lhafkup4nLFxuXHRcdFx0UFk6ICflt7Tmi4nlnK0nLFxuXHRcdFx0UEU6ICfnp5jpra8nLFxuXHRcdFx0UEg6ICfoj7Llvovos5MnLFxuXHRcdFx0UE46ICfnmq7nibnogq/nvqTls7YnLFxuXHRcdFx0UEw6ICfms6LomK0nLFxuXHRcdFx0UFQ6ICfokaHokITniZknLFxuXHRcdFx0UFI6ICfms6LlpJrpu47lkIQnLFxuXHRcdFx0UUE6ICfljaHpgZQnLFxuXHRcdFx0UkU6ICfnlZnlsLzml7onLFxuXHRcdFx0Uk86ICfnvoXppqzlsLzkup4nLFxuXHRcdFx0UlU6ICfkv4TnvoXmlq8nLFxuXHRcdFx0Ulc6ICfnm6flronpgZQnLFxuXHRcdFx0Qkw6ICfogZblt7Tms7Dli5LnsbMnLFxuXHRcdFx0U0g6ICfogZbmtbfok67lqJzjgIHpmL/mo67mnb7lkoznibnph4zmlq/lnaYt6YGU5bqr5bC85LqeJyxcblx0XHRcdEtOOiAn6IGW5YWL6YeM5pav5aSa56aP5Y+K5bC857at5pavJyxcblx0XHRcdExDOiAn6IGW6Zyy6KW/5LqeJyxcblx0XHRcdE1GOiAn5rOV5bGs6IGW6aas5LiBJyxcblx0XHRcdFBNOiAn6IGW55qu6IC26IiH5a+G5YWL6ZqGJyxcblx0XHRcdFZDOiAn6IGW5paH5qOu5Y+K5qC855Ge6YKj5LiBJyxcblx0XHRcdFdTOiAn6Jap5pGp5LqeJyxcblx0XHRcdFNNOiAn6IGW6aas5Yip6Ku+Jyxcblx0XHRcdFNUOiAn6IGW5aSa576O5pmu5p6X6KW/5q+UJyxcblx0XHRcdFNBOiAn5rKZ54OP5Zyw6Zi/5ouJ5LyvJyxcblx0XHRcdFNOOiAn5aGe5YWn5Yqg54i+Jyxcblx0XHRcdFJTOiAn5aGe54i+57at5LqeJyxcblx0XHRcdFNDOiAn5aGe5bit54i+Jyxcblx0XHRcdFNMOiAn542F5a2Q5bGxJyxcblx0XHRcdFNHOiAn5paw5Yqg5Z2hJyxcblx0XHRcdFNYOiAn6I235bGs6IGW6aas5LiBJyxcblx0XHRcdFNLOiAn5pav5rSb5LyQ5YWLJyxcblx0XHRcdFNJOiAn5pav5rSb57at5bC85LqeJyxcblx0XHRcdFNCOiAn57Si576F6ZaA576k5bO2Jyxcblx0XHRcdFNPOiAn57Si6aas5Yip5LqeJyxcblx0XHRcdFpBOiAn5Y2X6Z2eJyxcblx0XHRcdEdTOiAn5Y2X5Zas5rK75Lqe5ZKM5Y2X5qGR5aiB5aWH576k5bO2Jyxcblx0XHRcdFNTOiAn5Y2X6JiH5Li5Jyxcblx0XHRcdEVTOiAn6KW/54+t54mZJyxcblx0XHRcdExLOiAn5pav6YeM6Jit5Y2hJyxcblx0XHRcdFNEOiAn6JiH5Li5Jyxcblx0XHRcdFNSOiAn6JiH5Yip5Y2XJyxcblx0XHRcdFNKOiAn5pav55Om54i+5be05ZKM5o+a6aas5bu2Jyxcblx0XHRcdFNFOiAn55Ge5YW4Jyxcblx0XHRcdENIOiAn55Ge5aOrJyxcblx0XHRcdFNZOiAn5pWY5Yip5LqeJyxcblx0XHRcdFRXOiAn5Lit5ZyL6Ie654GjJyxcblx0XHRcdFRKOiAn5aGU5ZCJ5YWLJyxcblx0XHRcdFRaOiAn5Z2m5bCa5bC85LqeJyxcblx0XHRcdFRIOiAn5rOw5ZyLJyxcblx0XHRcdFRMOiAn5p2x5bid5rG2Jyxcblx0XHRcdFRHOiAn5aSa5ZOlJyxcblx0XHRcdFRLOiAn5omY5YWL5YueJyxcblx0XHRcdFRPOiAn5p2x5YqgJyxcblx0XHRcdFRUOiAn5Y2D6YeM6YGU5Y+K5omY5be05ZOlJyxcblx0XHRcdFROOiAn56qB5bC86KW/5LqeJyxcblx0XHRcdFRSOiAn5Zyf6ICz5YW2Jyxcblx0XHRcdFRNOiAn5Zyf5bqr5pu8Jyxcblx0XHRcdFRDOiAn5Zyf5YWL5Yex5Y+v576k5bO2Jyxcblx0XHRcdFRWOiAn5ZCQ55Om6a2vJyxcblx0XHRcdFVHOiAn54OP5bmy6YGUJyxcblx0XHRcdFVBOiAn54OP5YWL6JitJyxcblx0XHRcdEFFOiAn6Zi/6IGvJyxcblx0XHRcdEdCOiAn6Iux5ZyLJyxcblx0XHRcdFVTOiAn576O5ZyLJyxcblx0XHRcdFVNOiAn576O5ZyL5pys5Zyf5aSW5bCP5bO25ba8Jyxcblx0XHRcdFVZOiAn54OP5ouJ5ZytJyxcblx0XHRcdFVaOiAn54OP6Iyy5Yil5YWLJyxcblx0XHRcdFZVOiAn6JCs6YKj5p2cJyxcblx0XHRcdFZFOiAn5aeU5YWn55Ge5ouJJyxcblx0XHRcdFZOOiAn6LaK5Y2XJyxcblx0XHRcdFZHOiAn6Iux5bGs57at5Lqs576k5bO2Jyxcblx0XHRcdFZJOiAn576O5bGs57at5Lqs576k5bO2Jyxcblx0XHRcdFdGOiAn55Om5Yip5pav5ZKM5a+M5ZyW57SNJyxcblx0XHRcdEVIOiAn6KW/5pKS5ZOI5ouJJyxcblx0XHRcdFlFOiAn6JGJ6ZaAJyxcblx0XHRcdFpNOiAn5bCa5q+U5LqeJyxcblx0XHRcdFpXOiAn6L6b5be05aiBJyxcblx0XHR9O1xuXHR9IGVsc2UgaWYgKFsnemgtbXknLCAnemgtc2cnXS5pbmNsdWRlcyh3Z1VzZXJMYW5ndWFnZSkpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0QUY6ICfpmL/lr4zmsZcnLFxuXHRcdFx0QVg6ICflpaXlhbAnLFxuXHRcdFx0QUw6ICfpmL/lsJTlt7TlsLzkuponLFxuXHRcdFx0RFo6ICfpmL/lsJTlj4rliKnkuponLFxuXHRcdFx0QVM6ICfnvo7lsZ7okKjmkankuponLFxuXHRcdFx0QUQ6ICflronpgZPlsJQnLFxuXHRcdFx0QU86ICflronlk6Xmi4knLFxuXHRcdFx0QUk6ICflronlnK3mi4knLFxuXHRcdFx0QVE6ICfljZfmnoHmtLInLFxuXHRcdFx0QUc6ICflronmj5Dnk5zlkozlt7TluIPovr4nLFxuXHRcdFx0QVI6ICfpmL/moLnlu7cnLFxuXHRcdFx0QU06ICfkuprnvo7lsLzkuponLFxuXHRcdFx0QVc6ICfpmL/psoHlt7QnLFxuXHRcdFx0QVU6ICfmvrPlpKfliKnkuponLFxuXHRcdFx0QVQ6ICflpaXlnLDliKknLFxuXHRcdFx0QVo6ICfpmL/loZ7mi5znloYnLFxuXHRcdFx0QlM6ICflt7Tlk4jpqawnLFxuXHRcdFx0Qkg6ICflt7TmnpcnLFxuXHRcdFx0QkQ6ICflrZ/liqDmi4nlm70nLFxuXHRcdFx0QkI6ICflt7Tlt7TlpJrmlq8nLFxuXHRcdFx0Qlk6ICfnmb3kv4TnvZfmlq8nLFxuXHRcdFx0QkU6ICfmr5TliKnml7YnLFxuXHRcdFx0Qlo6ICfkvK/liKnlhbknLFxuXHRcdFx0Qko6ICfotJ3lroEnLFxuXHRcdFx0Qk06ICfnmb7mhZXlpKcnLFxuXHRcdFx0QlQ6ICfkuI3kuLknLFxuXHRcdFx0Qk86ICfnjrvliKnnu7TkuponLFxuXHRcdFx0QlE6ICfojbflhbDliqDli5Lmr5TljLonLFxuXHRcdFx0QkE6ICfms6Lpu5EnLFxuXHRcdFx0Qlc6ICfljZrojKjnk6bnurMnLFxuXHRcdFx0QlY6ICfluIPpn6blspsnLFxuXHRcdFx0QlI6ICflt7Topb8nLFxuXHRcdFx0SU86ICfoi7HlsZ7ljbDluqbmtIvpooblnLAnLFxuXHRcdFx0Qk46ICfmsbbojrEnLFxuXHRcdFx0Qkc6ICfkv53liqDliKnkuponLFxuXHRcdFx0QkY6ICfluIPln7rnurPms5XntKInLFxuXHRcdFx0Qkk6ICfluIPpmobov6onLFxuXHRcdFx0Q1Y6ICfkvZvlvpfop5InLFxuXHRcdFx0S0g6ICfmn6zln5Tlr6gnLFxuXHRcdFx0Q006ICflloDpuqbpmoYnLFxuXHRcdFx0Q0E6ICfliqDmi7/lpKcnLFxuXHRcdFx0S1k6ICflvIDmm7znvqTlspsnLFxuXHRcdFx0Q0Y6ICfkuK3pnZ4nLFxuXHRcdFx0VEQ6ICfkuY3lvpcnLFxuXHRcdFx0Q0w6ICfmmbrliKknLFxuXHRcdFx0Q046ICfkuK3lm70nLFxuXHRcdFx0Q1g6ICflnKPor57lspsnLFxuXHRcdFx0Q0M6ICfnp5Hnp5Hmlq/vvIjln7rmnpfvvInnvqTlspsnLFxuXHRcdFx0Q086ICflk6XkvKbmr5TkuponLFxuXHRcdFx0S006ICfnp5HmkannvZcnLFxuXHRcdFx0Q0c6ICfliJrmnpzlhbHlkozlm70nLFxuXHRcdFx0Q0Q6ICfliJrmnpzmsJHkuLvlhbHlkozlm70nLFxuXHRcdFx0Q0s6ICflupPlhYvnvqTlspsnLFxuXHRcdFx0Q1I6ICflk6Xmlq/ovr7pu47liqAnLFxuXHRcdFx0Q0k6ICfosaHniZnmtbflsrgnLFxuXHRcdFx0SFI6ICflhYvnvZflnLDkuponLFxuXHRcdFx0Q1U6ICflj6Tlt7QnLFxuXHRcdFx0Q1c6ICflupPmi4nntKInLFxuXHRcdFx0Q1k6ICfloZ7mtabot6/mlq8nLFxuXHRcdFx0Q1o6ICfmjbflhYsnLFxuXHRcdFx0REs6ICfkuLnpuqYnLFxuXHRcdFx0REo6ICflkInluIPmj5AnLFxuXHRcdFx0RE06ICflpJrnsbPlsLzlhYsnLFxuXHRcdFx0RE86ICflpJrnsbPlsLzliqAnLFxuXHRcdFx0RUM6ICfljoTnk5zlpJrlsJQnLFxuXHRcdFx0RUc6ICfln4Plj4onLFxuXHRcdFx0U1Y6ICfokKjlsJTnk6blpJonLFxuXHRcdFx0R1E6ICfotaTpgZPlh6DlhoXkuponLFxuXHRcdFx0RVI6ICfljoTnq4vnibnph4zkuponLFxuXHRcdFx0RUU6ICfniLHmspnlsLzkuponLFxuXHRcdFx0U1o6ICfmlq/lqIHlo6vlhbAnLFxuXHRcdFx0RVQ6ICfln4PloZ7kv4Tmr5TkuponLFxuXHRcdFx0Rks6ICfnpo/lhYvlhbDnvqTlspsnLFxuXHRcdFx0Rk86ICfms5XnvZfnvqTlspsnLFxuXHRcdFx0Rko6ICfmlpDmtY4nLFxuXHRcdFx0Rkk6ICfoiqzlhbAnLFxuXHRcdFx0RlI6ICfms5Xlm70nLFxuXHRcdFx0R0Y6ICfms5XlsZ7lnK3kuprpgqMnLFxuXHRcdFx0UEY6ICfms5XlsZ7ms6LliKnlsLzopb/kuponLFxuXHRcdFx0VEY6ICfms5XlsZ7ljZfpg6jlkozljZfmnoHpooblnLAnLFxuXHRcdFx0R0E6ICfliqDok6wnLFxuXHRcdFx0R006ICflhojmr5TkuponLFxuXHRcdFx0R0U6ICfmoLzpsoHlkInkuponLFxuXHRcdFx0REU6ICflvrflm70nLFxuXHRcdFx0R0g6ICfliqDnurMnLFxuXHRcdFx0R0k6ICfnm7TluIPnvZfpmYAnLFxuXHRcdFx0R1I6ICfluIzohYonLFxuXHRcdFx0R0w6ICfmoLzpmbXlhbAnLFxuXHRcdFx0R0Q6ICfmoLzmnpfnurPovr4nLFxuXHRcdFx0R1A6ICfnk5zlvrfnvZfmma4nLFxuXHRcdFx0R1U6ICflhbPlspsnLFxuXHRcdFx0R1Q6ICfljbHlnLDpqazmi4knLFxuXHRcdFx0R0c6ICfmoLnopb8nLFxuXHRcdFx0R046ICflh6DlhoXkuponLFxuXHRcdFx0R1c6ICflh6DlhoXkuprmr5Tnu40nLFxuXHRcdFx0R1k6ICflnK3kuprpgqMnLFxuXHRcdFx0SFQ6ICfmtbflnLAnLFxuXHRcdFx0SE06ICfotavlvrflspvlkozpuqblhYvllJDnurPnvqTlspsnLFxuXHRcdFx0VkE6ICfmorXokoLlhognLFxuXHRcdFx0SE46ICfmtKrpg73mi4nmlq8nLFxuXHRcdFx0SEs6ICfkuK3lm73pppnmuK8nLFxuXHRcdFx0SFU6ICfljIjniZnliKknLFxuXHRcdFx0SVM6ICflhrDlspsnLFxuXHRcdFx0SU46ICfljbDluqYnLFxuXHRcdFx0SUQ6ICfljbDlsLwnLFxuXHRcdFx0SVI6ICfkvIrmnJcnLFxuXHRcdFx0SVE6ICfkvIrmi4nlhYsnLFxuXHRcdFx0SUU6ICfniLHlsJTlhbAnLFxuXHRcdFx0SU06ICfpqazmganlspsnLFxuXHRcdFx0SUw6ICfku6XoibLliJcnLFxuXHRcdFx0SVQ6ICfmhI/lpKfliKknLFxuXHRcdFx0Sk06ICfniZnkubDliqAnLFxuXHRcdFx0SlA6ICfml6XmnKwnLFxuXHRcdFx0SkU6ICfms73opb8nLFxuXHRcdFx0Sk86ICfnuqbml6YnLFxuXHRcdFx0S1o6ICflk4jokKjlhYvmlq/lnaYnLFxuXHRcdFx0S0U6ICfogq/lsLzkuponLFxuXHRcdFx0S0k6ICfln7rph4zlt7Tmlq8nLFxuXHRcdFx0S1A6ICfljJfpn6knLFxuXHRcdFx0S1I6ICfpn6nlm70nLFxuXHRcdFx0S1c6ICfnp5HlqIHnibknLFxuXHRcdFx0S0c6ICflkInlsJTlkInmlq/mlq/lnaYnLFxuXHRcdFx0TEE6ICfogIHmjJ0nLFxuXHRcdFx0TFY6ICfmi4nohLHnu7TkuponLFxuXHRcdFx0TEI6ICfpu47lt7Tlq6knLFxuXHRcdFx0TFM6ICfojrHntKLmiZgnLFxuXHRcdFx0TFI6ICfliKnmr5Tph4zkuponLFxuXHRcdFx0TFk6ICfliKnmr5TkuponLFxuXHRcdFx0TEk6ICfliJfmlK/mlablo6vnmbsnLFxuXHRcdFx0TFQ6ICfnq4vpmbblrpsnLFxuXHRcdFx0TFU6ICfljaLmo67loKEnLFxuXHRcdFx0TU86ICfkuK3lm73mvrPpl6gnLFxuXHRcdFx0TUc6ICfpqazovr7liqDmlq/liqAnLFxuXHRcdFx0TVc6ICfpqazmi4nnu7QnLFxuXHRcdFx0TVk6ICfpqazmnaXopb/kuponLFxuXHRcdFx0TVY6ICfpqazlsJTku6PlpKsnLFxuXHRcdFx0TUw6ICfpqazph4wnLFxuXHRcdFx0TVQ6ICfpqazogLPku5YnLFxuXHRcdFx0TUg6ICfpqaznu43lsJTnvqTlspsnLFxuXHRcdFx0TVE6ICfpqazmj5DlsLzlhYsnLFxuXHRcdFx0TVI6ICfmr5vph4zloZTlsLzkuponLFxuXHRcdFx0TVU6ICfmr5vph4zmsYLmlq8nLFxuXHRcdFx0WVQ6ICfpqaznuqbnibknLFxuXHRcdFx0TVg6ICfloqjopb/lk6UnLFxuXHRcdFx0Rk06ICflr4blhYvnvZflsLzopb/kuprogZTpgqYnLFxuXHRcdFx0TUQ6ICfmkanlsJTlpJrnk6YnLFxuXHRcdFx0TUM6ICfmkannurPlk6UnLFxuXHRcdFx0TU46ICfokpnlj6QnLFxuXHRcdFx0TUU6ICfpu5HlsbEnLFxuXHRcdFx0TVM6ICfokpnnibnloZ7mi4nnibknLFxuXHRcdFx0TUE6ICfmkanmtJvlk6UnLFxuXHRcdFx0TVo6ICfojqvmoZHmr5TlhYsnLFxuXHRcdFx0TU06ICfnvIXnlLgnLFxuXHRcdFx0TkE6ICfpgqPnsbPmr5TkuponLFxuXHRcdFx0TlI6ICfnkZnpsoEnLFxuXHRcdFx0TlA6ICflsLzms4rlsJQnLFxuXHRcdFx0Tkw6ICfojbflhbAnLFxuXHRcdFx0TkM6ICfmlrDlloDph4zlpJrlsLzkuponLFxuXHRcdFx0Tlo6ICfmlrDopb/lhbAnLFxuXHRcdFx0Tkk6ICflsLzliqDmi4nnk5wnLFxuXHRcdFx0TkU6ICflsLzml6XlsJQnLFxuXHRcdFx0Tkc6ICflsLzml6XliKnkuponLFxuXHRcdFx0TlU6ICfnur3ln4MnLFxuXHRcdFx0TkY6ICfor7rnpo/lhYvlspsnLFxuXHRcdFx0TUs6ICfljJfpqazlhbbpob8nLFxuXHRcdFx0TVA6ICfljJfpqazph4zkuprnurPnvqTlspsnLFxuXHRcdFx0Tk86ICfmjKrlqIEnLFxuXHRcdFx0T006ICfpmL/mm7wnLFxuXHRcdFx0UEs6ICflt7Tln7rmlq/lnaYnLFxuXHRcdFx0UFc6ICfluJXlirMnLFxuXHRcdFx0UFM6ICflt7Tli5Lmlq/lnaYnLFxuXHRcdFx0UEE6ICflt7Tmi7/pqawnLFxuXHRcdFx0UEc6ICflt7TluIPkuprmlrDlh6DlhoXkuponLFxuXHRcdFx0UFk6ICflt7Tmi4nlnK0nLFxuXHRcdFx0UEU6ICfnp5jpsoEnLFxuXHRcdFx0UEg6ICfoj7Llvovlrr4nLFxuXHRcdFx0UE46ICfnmq7nibnlh6/mgannvqTlspsnLFxuXHRcdFx0UEw6ICfms6LlhbAnLFxuXHRcdFx0UFQ6ICfokaHokITniZknLFxuXHRcdFx0UFI6ICfms6LlpJrpu47lkIQnLFxuXHRcdFx0UUE6ICfljaHloZTlsJQnLFxuXHRcdFx0UkU6ICfnlZnlsLzmsaonLFxuXHRcdFx0Uk86ICfnvZfpqazlsLzkuponLFxuXHRcdFx0UlU6ICfkv4TnvZfmlq8nLFxuXHRcdFx0Ulc6ICfljaLml7rovr4nLFxuXHRcdFx0Qkw6ICflnKPlt7Tms7Dli5LnsbMnLFxuXHRcdFx0U0g6ICflnKPotavli5Lmi7/jgIHpmL/mo67mnb7lkoznibnph4zmlq/lnaYt6L6+5bqT5bC85LqaJyxcblx0XHRcdEtOOiAn5Zyj5Z+66Iyo5ZKM5bC857u05pavJyxcblx0XHRcdExDOiAn5Zyj5Y2i6KW/5LqaJyxcblx0XHRcdE1GOiAn5rOV5bGe5Zyj6ams5LiBJyxcblx0XHRcdFBNOiAn5Zyj55qu5Z+D5bCU5ZKM5a+G5YWL6ZqGJyxcblx0XHRcdFZDOiAn5Zyj5paH5qOu54m55ZKM5qC85p6X57qz5LiB5pavJyxcblx0XHRcdFdTOiAn6JCo5pGp5LqaJyxcblx0XHRcdFNNOiAn5Zyj6ams5Yqb6K+6Jyxcblx0XHRcdFNUOiAn5Zyj5aSa576O5ZKM5pmu5p6X6KW/5q+UJyxcblx0XHRcdFNBOiAn5rKZ54m56Zi/5ouJ5LyvJyxcblx0XHRcdFNOOiAn5aGe5YaF5Yqg5bCUJyxcblx0XHRcdFJTOiAn5aGe5bCU57u05LqaJyxcblx0XHRcdFNDOiAn5aGe6IiM5bCUJyxcblx0XHRcdFNMOiAn5aGe5ouJ5Yip5piCJyxcblx0XHRcdFNHOiAn5paw5Yqg5Z2hJyxcblx0XHRcdFNYOiAn6I235bGe5Zyj6ams5LiBJyxcblx0XHRcdFNLOiAn5pav5rSb5LyQ5YWLJyxcblx0XHRcdFNJOiAn5pav5rSb5paH5bC85LqaJyxcblx0XHRcdFNCOiAn5omA572X6Zeo576k5bKbJyxcblx0XHRcdFNPOiAn57Si6ams6YeMJyxcblx0XHRcdFpBOiAn5Y2X6Z2eJyxcblx0XHRcdEdTOiAn5Y2X5LmU5rK75Lqa5ZKM5Y2X5qGR5aiB5aWH576k5bKbJyxcblx0XHRcdFNTOiAn5Y2X6IuP5Li5Jyxcblx0XHRcdEVTOiAn6KW/54+t54mZJyxcblx0XHRcdExLOiAn5pav6YeM5YWw5Y2hJyxcblx0XHRcdFNEOiAn6IuP5Li5Jyxcblx0XHRcdFNSOiAn6IuP6YeM5Y2XJyxcblx0XHRcdFNKOiAn5pav55Om5bCU5be05ZKM5oms6ams5bu2Jyxcblx0XHRcdFNFOiAn55Ge5YW4Jyxcblx0XHRcdENIOiAn55Ge5aOrJyxcblx0XHRcdFNZOiAn5Y+Z5Yip5LqaJyxcblx0XHRcdFRXOiAn5Lit5Zu95Y+w5rm+Jyxcblx0XHRcdFRKOiAn5aGU5ZCJ5YWL5pav5Z2mJyxcblx0XHRcdFRaOiAn5Z2m5qGR5bC85LqaJyxcblx0XHRcdFRIOiAn5rOw5Zu9Jyxcblx0XHRcdFRMOiAn5Lic5bid5rG2Jyxcblx0XHRcdFRHOiAn5aSa5ZOlJyxcblx0XHRcdFRLOiAn5omY5YWL5YqzJyxcblx0XHRcdFRPOiAn5rGk5YqgJyxcblx0XHRcdFRUOiAn54m556uL5bC86L6+5ZKM5aSa5be05ZOlJyxcblx0XHRcdFROOiAn56qB5bC85pavJyxcblx0XHRcdFRSOiAn5Zyf6ICz5YW2Jyxcblx0XHRcdFRNOiAn5Zyf5bqT5pu85pav5Z2mJyxcblx0XHRcdFRDOiAn54m55YWL5pav5ZKM5Yev56eR5pav576k5bKbJyxcblx0XHRcdFRWOiAn5Zu+55Om5Y2iJyxcblx0XHRcdFVHOiAn5LmM5bmy6L6+Jyxcblx0XHRcdFVBOiAn5LmM5YWL5YWwJyxcblx0XHRcdEFFOiAn6Zi/6IGU6YWLJyxcblx0XHRcdEdCOiAn6Iux5Zu9Jyxcblx0XHRcdFVTOiAn576O5Zu9Jyxcblx0XHRcdFVNOiAn576O5Zu95pys5Zyf5aSW5bCP5bKb5bG/Jyxcblx0XHRcdFVZOiAn5LmM5ouJ5ZytJyxcblx0XHRcdFVaOiAn5LmM5YW55Yir5YWL5pav5Z2mJyxcblx0XHRcdFZVOiAn55Om5Yqq6Zi/5Zu+Jyxcblx0XHRcdFZFOiAn5aeU5YaF55Ge5ouJJyxcblx0XHRcdFZOOiAn6LaK5Y2XJyxcblx0XHRcdFZHOiAn6Iux5bGe57u05bCU5Lqs576k5bKbJyxcblx0XHRcdFZJOiAn576O5bGe57u05bCU5Lqs576k5bKbJyxcblx0XHRcdFdGOiAn55Om5Yip5pav5ZKM5a+M5Zu+57qzJyxcblx0XHRcdEVIOiAn6KW/5pKS5ZOI5ouJJyxcblx0XHRcdFlFOiAn5Lmf6ZeoJyxcblx0XHRcdFpNOiAn6LWe5q+U5LqaJyxcblx0XHRcdFpXOiAn5rSl5be05biD6Z+mJyxcblx0XHR9O1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRBRjogJ+mYv+WvjOaxlycsXG5cdFx0QVg6ICflpaXlhbAnLFxuXHRcdEFMOiAn6Zi/5bCU5be05bC85LqaJyxcblx0XHREWjogJ+mYv+WwlOWPiuWIqeS6micsXG5cdFx0QVM6ICfnvo7lsZ7okKjmkankuponLFxuXHRcdEFEOiAn5a6J6YGT5bCUJyxcblx0XHRBTzogJ+WuieWTpeaLiScsXG5cdFx0QUk6ICflronlnK3mi4knLFxuXHRcdEFROiAn5Y2X5p6B5rSyJyxcblx0XHRBRzogJ+WuieaPkOeTnOWSjOW3tOW4g+i+vicsXG5cdFx0QVI6ICfpmL/moLnlu7cnLFxuXHRcdEFNOiAn5Lqa576O5bC85LqaJyxcblx0XHRBVzogJ+mYv+mygeW3tCcsXG5cdFx0QVU6ICfmvrPlpKfliKnkuponLFxuXHRcdEFUOiAn5aWl5Zyw5YipJyxcblx0XHRBWjogJ+mYv+WhnuaLnOeWhicsXG5cdFx0QlM6ICflt7Tlk4jpqawnLFxuXHRcdEJIOiAn5be05p6XJyxcblx0XHRCRDogJ+Wtn+WKoOaLieWbvScsXG5cdFx0QkI6ICflt7Tlt7TlpJrmlq8nLFxuXHRcdEJZOiAn55m95L+E572X5pavJyxcblx0XHRCRTogJ+avlOWIqeaXticsXG5cdFx0Qlo6ICfkvK/liKnlhbknLFxuXHRcdEJKOiAn6LSd5a6BJyxcblx0XHRCTTogJ+eZvuaFleWkpycsXG5cdFx0QlQ6ICfkuI3kuLknLFxuXHRcdEJPOiAn54675Yip57u05LqaJyxcblx0XHRCUTogJ+iNt+WFsOWKoOWLkuavlOWMuicsXG5cdFx0QkE6ICfms6Lpu5EnLFxuXHRcdEJXOiAn5Y2a6Iyo55Om57qzJyxcblx0XHRCVjogJ+W4g+mfpuWymycsXG5cdFx0QlI6ICflt7Topb8nLFxuXHRcdElPOiAn6Iux5bGe5Y2w5bqm5rSL6aKG5ZywJyxcblx0XHRCTjogJ+aWh+iOsScsXG5cdFx0Qkc6ICfkv53liqDliKnkuponLFxuXHRcdEJGOiAn5biD5Z+657qz5rOV57SiJyxcblx0XHRCSTogJ+W4g+mahui/qicsXG5cdFx0Q1Y6ICfkvZvlvpfop5InLFxuXHRcdEtIOiAn5p+s5Z+U5a+oJyxcblx0XHRDTTogJ+WWgOm6pumahicsXG5cdFx0Q0E6ICfliqDmi7/lpKcnLFxuXHRcdEtZOiAn5byA5pu8576k5bKbJyxcblx0XHRDRjogJ+S4remdnicsXG5cdFx0VEQ6ICfkuY3lvpcnLFxuXHRcdENMOiAn5pm65YipJyxcblx0XHRDTjogJ+S4reWbvScsXG5cdFx0Q1g6ICflnKPor57lspsnLFxuXHRcdENDOiAn56eR56eR5pav77yI5Z+65p6X77yJ576k5bKbJyxcblx0XHRDTzogJ+WTpeS8puavlOS6micsXG5cdFx0S006ICfnp5HmkannvZcnLFxuXHRcdENHOiAn5Yia5p6c5YWx5ZKM5Zu9Jyxcblx0XHRDRDogJ+WImuaenOawkeS4u+WFseWSjOWbvScsXG5cdFx0Q0s6ICflupPlhYvnvqTlspsnLFxuXHRcdENSOiAn5ZOl5pav6L6+6buO5YqgJyxcblx0XHRDSTogJ+enkeeJuei/queTpicsXG5cdFx0SFI6ICflhYvnvZflnLDkuponLFxuXHRcdENVOiAn5Y+k5be0Jyxcblx0XHRDVzogJ+W6k+aLiee0oicsXG5cdFx0Q1k6ICfloZ7mtabot6/mlq8nLFxuXHRcdENaOiAn5o235YWLJyxcblx0XHRESzogJ+S4uem6picsXG5cdFx0REo6ICflkInluIPmj5AnLFxuXHRcdERNOiAn5aSa57Gz5bC85YWLJyxcblx0XHRETzogJ+Wkmuexs+WwvOWKoCcsXG5cdFx0RUM6ICfljoTnk5zlpJrlsJQnLFxuXHRcdEVHOiAn5Z+D5Y+KJyxcblx0XHRTVjogJ+iQqOWwlOeTpuWkmicsXG5cdFx0R1E6ICfotaTpgZPlh6DlhoXkuponLFxuXHRcdEVSOiAn5Y6E56uL54m56YeM5LqaJyxcblx0XHRFRTogJ+eIseaymeWwvOS6micsXG5cdFx0U1o6ICfmlq/lqIHlo6vlhbAnLFxuXHRcdEVUOiAn5Z+D5aGe5L+E5q+U5LqaJyxcblx0XHRGSzogJ+emj+WFi+WFsOe+pOWymycsXG5cdFx0Rk86ICfms5XnvZfnvqTlspsnLFxuXHRcdEZKOiAn5paQ5rWOJyxcblx0XHRGSTogJ+iKrOWFsCcsXG5cdFx0RlI6ICfms5Xlm70nLFxuXHRcdEdGOiAn5rOV5bGe5Zyt5Lqa6YKjJyxcblx0XHRQRjogJ+azleWxnuazouWIqeWwvOilv+S6micsXG5cdFx0VEY6ICfms5XlsZ7ljZfpg6jlkozljZfmnoHpooblnLAnLFxuXHRcdEdBOiAn5Yqg6JOsJyxcblx0XHRHTTogJ+WGiOavlOS6micsXG5cdFx0R0U6ICfmoLzpsoHlkInkuponLFxuXHRcdERFOiAn5b635Zu9Jyxcblx0XHRHSDogJ+WKoOe6sycsXG5cdFx0R0k6ICfnm7TluIPnvZfpmYAnLFxuXHRcdEdSOiAn5biM6IWKJyxcblx0XHRHTDogJ+agvOmZteWFsCcsXG5cdFx0R0Q6ICfmoLzmnpfnurPovr4nLFxuXHRcdEdQOiAn55Oc5b63572X5pmuJyxcblx0XHRHVTogJ+WFs+WymycsXG5cdFx0R1Q6ICfljbHlnLDpqazmi4knLFxuXHRcdEdHOiAn5qC56KW/Jyxcblx0XHRHTjogJ+WHoOWGheS6micsXG5cdFx0R1c6ICflh6DlhoXkuprmr5Tnu40nLFxuXHRcdEdZOiAn5Zyt5Lqa6YKjJyxcblx0XHRIVDogJ+a1t+WcsCcsXG5cdFx0SE06ICfotavlvrflspvlkozpuqblhYvllJDnurPnvqTlspsnLFxuXHRcdFZBOiAn5qK16JKC5YaIJyxcblx0XHRITjogJ+a0qumDveaLieaWrycsXG5cdFx0SEs6ICfkuK3lm73pppnmuK8nLFxuXHRcdEhVOiAn5YyI54mZ5YipJyxcblx0XHRJUzogJ+WGsOWymycsXG5cdFx0SU46ICfljbDluqYnLFxuXHRcdElEOiAn5Y2w5bC8Jyxcblx0XHRJUjogJ+S8iuaclycsXG5cdFx0SVE6ICfkvIrmi4nlhYsnLFxuXHRcdElFOiAn54ix5bCU5YWwJyxcblx0XHRJTTogJ+mprOaBqeWymycsXG5cdFx0SUw6ICfku6XoibLliJcnLFxuXHRcdElUOiAn5oSP5aSn5YipJyxcblx0XHRKTTogJ+eJmeS5sOWKoCcsXG5cdFx0SlA6ICfml6XmnKwnLFxuXHRcdEpFOiAn5rO96KW/Jyxcblx0XHRKTzogJ+e6puaXpicsXG5cdFx0S1o6ICflk4jokKjlhYvmlq/lnaYnLFxuXHRcdEtFOiAn6IKv5bC85LqaJyxcblx0XHRLSTogJ+WfuumHjOW3tOaWrycsXG5cdFx0S1A6ICfmnJ3pspwnLFxuXHRcdEtSOiAn6Z+p5Zu9Jyxcblx0XHRLVzogJ+enkeWogeeJuScsXG5cdFx0S0c6ICflkInlsJTlkInmlq/mlq/lnaYnLFxuXHRcdExBOiAn6ICB5oydJyxcblx0XHRMVjogJ+aLieiEsee7tOS6micsXG5cdFx0TEI6ICfpu47lt7Tlq6knLFxuXHRcdExTOiAn6I6x57Si5omYJyxcblx0XHRMUjogJ+WIqeavlOmHjOS6micsXG5cdFx0TFk6ICfliKnmr5TkuponLFxuXHRcdExJOiAn5YiX5pSv5pWm5aOr55m7Jyxcblx0XHRMVDogJ+eri+mZtuWumycsXG5cdFx0TFU6ICfljaLmo67loKEnLFxuXHRcdE1POiAn5Lit5Zu95r6z6ZeoJyxcblx0XHRNRzogJ+mprOi+vuWKoOaWr+WKoCcsXG5cdFx0TVc6ICfpqazmi4nnu7QnLFxuXHRcdE1ZOiAn6ams5p2l6KW/5LqaJyxcblx0XHRNVjogJ+mprOWwlOS7o+WkqycsXG5cdFx0TUw6ICfpqazph4wnLFxuXHRcdE1UOiAn6ams6ICz5LuWJyxcblx0XHRNSDogJ+mprOe7jeWwlOe+pOWymycsXG5cdFx0TVE6ICfpqazmj5DlsLzlhYsnLFxuXHRcdE1SOiAn5q+b6YeM5aGU5bC85LqaJyxcblx0XHRNVTogJ+avm+mHjOaxguaWrycsXG5cdFx0WVQ6ICfpqaznuqbnibknLFxuXHRcdE1YOiAn5aKo6KW/5ZOlJyxcblx0XHRGTTogJ+WvhuWFi+e9l+WwvOilv+S6muiBlOmCpicsXG5cdFx0TUQ6ICfmkanlsJTlpJrnk6YnLFxuXHRcdE1DOiAn5pGp57qz5ZOlJyxcblx0XHRNTjogJ+iSmeWPpCcsXG5cdFx0TUU6ICfpu5HlsbEnLFxuXHRcdE1TOiAn6JKZ54m55aGe5ouJ54m5Jyxcblx0XHRNQTogJ+aRqea0m+WTpScsXG5cdFx0TVo6ICfojqvmoZHmr5TlhYsnLFxuXHRcdE1NOiAn57yF55S4Jyxcblx0XHROQTogJ+e6s+exs+avlOS6micsXG5cdFx0TlI6ICfnkZnpsoEnLFxuXHRcdE5QOiAn5bC85rOK5bCUJyxcblx0XHROTDogJ+iNt+WFsCcsXG5cdFx0TkM6ICfmlrDlloDph4zlpJrlsLzkuponLFxuXHRcdE5aOiAn5paw6KW/5YWwJyxcblx0XHROSTogJ+WwvOWKoOaLieeTnCcsXG5cdFx0TkU6ICflsLzml6XlsJQnLFxuXHRcdE5HOiAn5bC85pel5Yip5LqaJyxcblx0XHROVTogJ+e6veWfgycsXG5cdFx0TkY6ICfor7rnpo/lhYvlspsnLFxuXHRcdE1LOiAn5YyX6ams5YW26aG/Jyxcblx0XHRNUDogJ+WMl+mprOmHjOS6mue6s+e+pOWymycsXG5cdFx0Tk86ICfmjKrlqIEnLFxuXHRcdE9NOiAn6Zi/5pu8Jyxcblx0XHRQSzogJ+W3tOWfuuaWr+WdpicsXG5cdFx0UFc6ICfluJXlirMnLFxuXHRcdFBTOiAn5be05YuS5pav5Z2mJyxcblx0XHRQQTogJ+W3tOaLv+mprCcsXG5cdFx0UEc6ICflt7TluIPkuprmlrDlh6DlhoXkuponLFxuXHRcdFBZOiAn5be05ouJ5ZytJyxcblx0XHRQRTogJ+enmOmygScsXG5cdFx0UEg6ICfoj7Llvovlrr4nLFxuXHRcdFBOOiAn55qu54m55Yev5oGp576k5bKbJyxcblx0XHRQTDogJ+azouWFsCcsXG5cdFx0UFQ6ICfokaHokITniZknLFxuXHRcdFBSOiAn5rOi5aSa6buO5ZCEJyxcblx0XHRRQTogJ+WNoeWhlOWwlCcsXG5cdFx0UkU6ICfnlZnlsLzmsaonLFxuXHRcdFJPOiAn572X6ams5bC85LqaJyxcblx0XHRSVTogJ+S/hOe9l+aWrycsXG5cdFx0Ulc6ICfljaLml7rovr4nLFxuXHRcdEJMOiAn5Zyj5be05rOw5YuS57GzJyxcblx0XHRTSDogJ+Wco+i1q+WLkuaLv+OAgemYv+ajruadvuWSjOeJuemHjOaWr+Wdpi3ovr7lupPlsLzkuponLFxuXHRcdEtOOiAn5Zyj5Z+66Iyo5ZKM5bC857u05pavJyxcblx0XHRMQzogJ+Wco+WNouilv+S6micsXG5cdFx0TUY6ICfms5XlsZ7lnKPpqazkuIEnLFxuXHRcdFBNOiAn5Zyj55qu5Z+D5bCU5ZKM5a+G5YWL6ZqGJyxcblx0XHRWQzogJ+Wco+aWh+ajrueJueWSjOagvOael+e6s+S4geaWrycsXG5cdFx0V1M6ICfokKjmkankuponLFxuXHRcdFNNOiAn5Zyj6ams5Yqb6K+6Jyxcblx0XHRTVDogJ+Wco+Wkmue+juWSjOaZruael+ilv+avlCcsXG5cdFx0U0E6ICfmspnnibnpmL/mi4nkvK8nLFxuXHRcdFNOOiAn5aGe5YaF5Yqg5bCUJyxcblx0XHRSUzogJ+WhnuWwlOe7tOS6micsXG5cdFx0U0M6ICfloZ7oiIzlsJQnLFxuXHRcdFNMOiAn5aGe5ouJ5Yip5piCJyxcblx0XHRTRzogJ+aWsOWKoOWdoScsXG5cdFx0U1g6ICfojbflsZ7lnKPpqazkuIEnLFxuXHRcdFNLOiAn5pav5rSb5LyQ5YWLJyxcblx0XHRTSTogJ+aWr+a0m+aWh+WwvOS6micsXG5cdFx0U0I6ICfmiYDnvZfpl6jnvqTlspsnLFxuXHRcdFNPOiAn57Si6ams6YeMJyxcblx0XHRaQTogJ+WNl+mdnicsXG5cdFx0R1M6ICfljZfkuZTmsrvkuprlkozljZfmoZHlqIHlpYfnvqTlspsnLFxuXHRcdFNTOiAn5Y2X6IuP5Li5Jyxcblx0XHRFUzogJ+ilv+ePreeJmScsXG5cdFx0TEs6ICfmlq/ph4zlhbDljaEnLFxuXHRcdFNEOiAn6IuP5Li5Jyxcblx0XHRTUjogJ+iLj+mHjOWNlycsXG5cdFx0U0o6ICfmlq/nk6blsJTlt7Tlkozmiazpqazlu7YnLFxuXHRcdFNFOiAn55Ge5YW4Jyxcblx0XHRDSDogJ+eRnuWjqycsXG5cdFx0U1k6ICflj5nliKnkuponLFxuXHRcdFRXOiAn5Lit5Zu96Ie65rm+Jyxcblx0XHRUSjogJ+WhlOWQieWFi+aWr+WdpicsXG5cdFx0VFo6ICflnabmoZHlsLzkuponLFxuXHRcdFRIOiAn5rOw5Zu9Jyxcblx0XHRUTDogJ+S4nOW4neaxticsXG5cdFx0VEc6ICflpJrlk6UnLFxuXHRcdFRLOiAn5omY5YWL5YqzJyxcblx0XHRUTzogJ+axpOWKoCcsXG5cdFx0VFQ6ICfnibnnq4vlsLzovr7lkozlpJrlt7Tlk6UnLFxuXHRcdFROOiAn56qB5bC85pavJyxcblx0XHRUUjogJ+Wcn+iAs+WFticsXG5cdFx0VE06ICflnJ/lupPmm7zmlq/lnaYnLFxuXHRcdFRDOiAn54m55YWL5pav5ZKM5Yev56eR5pav576k5bKbJyxcblx0XHRUVjogJ+WbvueTpuWNoicsXG5cdFx0VUc6ICfkuYzlubLovr4nLFxuXHRcdFVBOiAn5LmM5YWL5YWwJyxcblx0XHRBRTogJ+mYv+iBlOmFiycsXG5cdFx0R0I6ICfoi7Hlm70nLFxuXHRcdFVTOiAn576O5Zu9Jyxcblx0XHRVTTogJ+e+juWbveacrOWcn+WkluWwj+Wym+WxvycsXG5cdFx0VVk6ICfkuYzmi4nlnK0nLFxuXHRcdFVaOiAn5LmM5YW55Yir5YWL5pav5Z2mJyxcblx0XHRWVTogJ+eTpuWKqumYv+WbvicsXG5cdFx0VkU6ICflp5TlhoXnkZ7mi4knLFxuXHRcdFZOOiAn6LaK5Y2XJyxcblx0XHRWRzogJ+iLseWxnue7tOWwlOS6rOe+pOWymycsXG5cdFx0Vkk6ICfnvo7lsZ7nu7TlsJTkuqznvqTlspsnLFxuXHRcdFdGOiAn55Om5Yip5pav5ZKM5a+M5Zu+57qzJyxcblx0XHRFSDogJ+ilv+aSkuWTiOaLiScsXG5cdFx0WUU6ICfkuZ/pl6gnLFxuXHRcdFpNOiAn6LWe5q+U5LqaJyxcblx0XHRaVzogJ+a0peW3tOW4g+mfpicsXG5cdH07XG59O1xuXG5jb25zdCBnZXRSZWdpb25OYW1lTGlzdCA9ICgpID0+IHtcblx0Y29uc3Qge3dnVXNlckxhbmd1YWdlfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAoWyd6aC1oYW50JywgJ3poLWhrJywgJ3poLW1vJywgJ3poLXR3J10uaW5jbHVkZXMod2dVc2VyTGFuZ3VhZ2UpKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdEFIOiAn5a6J5b69Jyxcblx0XHRcdEJKOiAn5YyX5LqsJyxcblx0XHRcdENROiAn6YeN5oW2Jyxcblx0XHRcdEZKOiAn56aP5bu6Jyxcblx0XHRcdEdEOiAn5buj5p2xJyxcblx0XHRcdEdTOiAn55SY6IKFJyxcblx0XHRcdEdYOiAn5buj6KW/Jyxcblx0XHRcdEdaOiAn6LK05beeJyxcblx0XHRcdEhBOiAn5rKz5Y2XJyxcblx0XHRcdEhCOiAn5rmW5YyXJyxcblx0XHRcdEhFOiAn5rKz5YyXJyxcblx0XHRcdEhJOiAn5rW35Y2XJyxcblx0XHRcdEhMOiAn6buR6b6N5rGfJyxcblx0XHRcdEhOOiAn5rmW5Y2XJyxcblx0XHRcdEpMOiAn5ZCJ5p6XJyxcblx0XHRcdEpTOiAn5rGf6JiHJyxcblx0XHRcdEpYOiAn5rGf6KW/Jyxcblx0XHRcdExOOiAn6YG85a+nJyxcblx0XHRcdE5NOiAn5YWn6JKZ5Y+kJyxcblx0XHRcdE5YOiAn5a+n5aSPJyxcblx0XHRcdFFIOiAn6Z2S5rW3Jyxcblx0XHRcdFNDOiAn5Zub5bedJyxcblx0XHRcdFNEOiAn5bGx5p2xJyxcblx0XHRcdFNIOiAn5LiK5rW3Jyxcblx0XHRcdFNOOiAn6Zmd6KW/Jyxcblx0XHRcdFNYOiAn5bGx6KW/Jyxcblx0XHRcdFRKOiAn5aSp5rSlJyxcblx0XHRcdFhKOiAn5paw55aGJyxcblx0XHRcdFhaOiAn6KW/6JePJyxcblx0XHRcdFlOOiAn6Zuy5Y2XJyxcblx0XHRcdFpKOiAn5rWZ5rGfJyxcblx0XHR9O1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRBSDogJ+WuieW+vScsXG5cdFx0Qko6ICfljJfkuqwnLFxuXHRcdENROiAn6YeN5bqGJyxcblx0XHRGSjogJ+emj+W7uicsXG5cdFx0R0Q6ICflub/kuJwnLFxuXHRcdEdTOiAn55SY6IKDJyxcblx0XHRHWDogJ+W5v+ilvycsXG5cdFx0R1o6ICfotLXlt54nLFxuXHRcdEhBOiAn5rKz5Y2XJyxcblx0XHRIQjogJ+a5luWMlycsXG5cdFx0SEU6ICfmsrPljJcnLFxuXHRcdEhJOiAn5rW35Y2XJyxcblx0XHRITDogJ+m7kem+meaxnycsXG5cdFx0SE46ICfmuZbljZcnLFxuXHRcdEpMOiAn5ZCJ5p6XJyxcblx0XHRKUzogJ+axn+iLjycsXG5cdFx0Slg6ICfmsZ/opb8nLFxuXHRcdExOOiAn6L695a6BJyxcblx0XHROTTogJ+WGheiSmeWPpCcsXG5cdFx0Tlg6ICflroHlpI8nLFxuXHRcdFFIOiAn6Z2S5rW3Jyxcblx0XHRTQzogJ+Wbm+W3nScsXG5cdFx0U0Q6ICflsbHkuJwnLFxuXHRcdFNIOiAn5LiK5rW3Jyxcblx0XHRTTjogJ+mZleilvycsXG5cdFx0U1g6ICflsbHopb8nLFxuXHRcdFRKOiAn5aSp5rSlJyxcblx0XHRYSjogJ+aWsOeWhicsXG5cdFx0WFo6ICfopb/ol48nLFxuXHRcdFlOOiAn5LqR5Y2XJyxcblx0XHRaSjogJ+a1meaxnycsXG5cdH07XG59O1xuXG5leHBvcnQge2dldENvdW50cnlPckFyZWFOYW1lTGlzdCwgZ2V0UmVnaW9uTmFtZUxpc3R9O1xuIiwgImltcG9ydCB7Z2V0Q291bnRyeU9yQXJlYU5hbWVMaXN0LCBnZXRSZWdpb25OYW1lTGlzdH0gZnJvbSAnLi9uYW1lJztcblxudHlwZSBDb3VudHJ5T3JBcmVhTmFtZUxpc3QgPSBSZXR1cm5UeXBlPHR5cGVvZiBnZXRDb3VudHJ5T3JBcmVhTmFtZUxpc3Q+O1xudHlwZSBSZWdpb25OYW1lTGlzdCA9IFJldHVyblR5cGU8dHlwZW9mIGdldFJlZ2lvbk5hbWVMaXN0PjtcblxuY29uc3QgY291bnRyeU9yQXJlYUxpc3Q6IENvdW50cnlPckFyZWFOYW1lTGlzdCA9IGdldENvdW50cnlPckFyZWFOYW1lTGlzdCgpO1xuY29uc3QgcmVnaW9uTGlzdDogUmVnaW9uTmFtZUxpc3QgPSBnZXRSZWdpb25OYW1lTGlzdCgpO1xuXG5jb25zdCBnZXRDb3VudHJ5T3JBcmVhTmFtZSA9IDxUIGV4dGVuZHMga2V5b2YgQ291bnRyeU9yQXJlYU5hbWVMaXN0PihrZXk6IFQpOiBDb3VudHJ5T3JBcmVhTmFtZUxpc3RbVF0gfCB1bmRlZmluZWQgPT4ge1xuXHRyZXR1cm4gY291bnRyeU9yQXJlYUxpc3Rba2V5XTtcbn07XG5cbmNvbnN0IGdldFJlZ2lvbk5hbWUgPSA8VCBleHRlbmRzIGtleW9mIFJlZ2lvbk5hbWVMaXN0PihrZXk6IFQpOiBSZWdpb25OYW1lTGlzdFtUXSB8IHVuZGVmaW5lZCA9PiB7XG5cdHJldHVybiByZWdpb25MaXN0W2tleV07XG59O1xuXG5leHBvcnQge3R5cGUgQ291bnRyeU9yQXJlYU5hbWVMaXN0LCB0eXBlIFJlZ2lvbk5hbWVMaXN0LCBnZXRDb3VudHJ5T3JBcmVhTmFtZSwgZ2V0UmVnaW9uTmFtZX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBHZW9Mb2NhdGlvblJlYWRlci8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7dHlwZSBDb3VudHJ5T3JBcmVhTmFtZUxpc3QsIHR5cGUgUmVnaW9uTmFtZUxpc3QsIGdldENvdW50cnlPckFyZWFOYW1lLCBnZXRSZWdpb25OYW1lfSBmcm9tICcuL2dldE5hbWUnO1xuaW1wb3J0IHR5cGUge1N0b3JlR2VvSW5mb30gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4uL2FwaSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuXG5jb25zdCBnZXRMb2NhdGlvbiA9IGFzeW5jICh3Z1JlbGV2YW50VXNlck5hbWU6IHN0cmluZykgPT4ge1xuXHRjb25zdCBzdG9yZVBhZ2VUaXRsZTogc3RyaW5nID0gYFVzZXI6JHt3Z1JlbGV2YW50VXNlck5hbWV9L0dlb0lQLmpzb25gO1xuXG5cdGxldCBjb3VudHJ5T3JBcmVhTmFtZTogc3RyaW5nID0gZ2V0TWVzc2FnZSgnVW5rbm93bicpO1xuXHRsZXQgcmVnaW9uTmFtZTogc3RyaW5nID0gJyc7XG5cblx0aWYgKG13LnN0b3JhZ2UuZ2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleSArIHdnUmVsZXZhbnRVc2VyTmFtZSkpIHtcblx0XHQoe2NvdW50cnlPckFyZWFOYW1lLCByZWdpb25OYW1lfSA9IG13LnN0b3JhZ2UuZ2V0T2JqZWN0KE9QVElPTlMuc3RvcmFnZUtleSArIHdnUmVsZXZhbnRVc2VyTmFtZSkgYXMge1xuXHRcdFx0Y291bnRyeU9yQXJlYU5hbWU6IHN0cmluZztcblx0XHRcdHJlZ2lvbk5hbWU6IHN0cmluZztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVJldmlzaW9uc1BhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHR0aXRsZXM6IFtzdG9yZVBhZ2VUaXRsZV0sXG5cdFx0XHRcdHByb3A6IFsncmV2aXNpb25zJ10sXG5cdFx0XHRcdHJ2cHJvcDogWydjb250ZW50J10sXG5cdFx0XHRcdHJ2c2xvdHM6ICdtYWluJyxcblx0XHRcdFx0c21heGFnZTogNjAwLFxuXHRcdFx0XHRtYXhhZ2U6IDYwMCxcblx0XHRcdH07XG5cblx0XHRcdGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0XHRcdGNvbnN0IGNvbnRlbnQgPVxuXHRcdFx0XHQoZGF0YVsncXVlcnknXS5wYWdlc1swXT8ubWlzc2luZ1xuXHRcdFx0XHRcdD8gJydcblx0XHRcdFx0XHQ6IChkYXRhWydxdWVyeSddPy5wYWdlc1swXT8ucmV2aXNpb25zPy5bMF0uc2xvdHMubWFpbi5jb250ZW50IGFzIHN0cmluZykpIHx8ICcnO1xuXG5cdFx0XHRjb25zdCByZXNwb25zZSA9IEpTT04ucGFyc2UoY29udGVudCkgYXMgU3RvcmVHZW9JbmZvICYge1xuXHRcdFx0XHRjb3VudHJ5Pzogc3RyaW5nO1xuXHRcdFx0fTtcblxuXHRcdFx0aWYgKCEocmVzcG9uc2UuY291bnRyeSB8fCByZXNwb25zZS5jb3VudHJ5T3JBcmVhKSAmJiAhcmVzcG9uc2UucmVnaW9uKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qge2NvdW50cnksIGNvdW50cnlPckFyZWEsIHJlZ2lvbn0gPSByZXNwb25zZTtcblxuXHRcdFx0bGV0IGxvY2F0aW9uOiBTdG9yZUdlb0luZm9bJ2NvdW50cnlPckFyZWEnXSA9ICcnO1xuXG5cdFx0XHRpZiAoY291bnRyeSB8fCBjb3VudHJ5T3JBcmVhKSB7XG5cdFx0XHRcdGxvY2F0aW9uID0gY291bnRyeSB8fCBjb3VudHJ5T3JBcmVhO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoZ2V0Q291bnRyeU9yQXJlYU5hbWUobG9jYXRpb24gYXMga2V5b2YgQ291bnRyeU9yQXJlYU5hbWVMaXN0KSkge1xuXHRcdFx0XHRjb3VudHJ5T3JBcmVhTmFtZSA9XG5cdFx0XHRcdFx0Z2V0Q291bnRyeU9yQXJlYU5hbWUobG9jYXRpb24gYXMga2V5b2YgQ291bnRyeU9yQXJlYU5hbWVMaXN0KSB8fCBnZXRNZXNzYWdlKCdVbmtub3duJyk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChsb2NhdGlvbiAmJiBsb2NhdGlvbiA9PT0gJ0NOJykge1xuXHRcdFx0XHRyZWdpb25OYW1lID0gZ2V0UmVnaW9uTmFtZShyZWdpb24gYXMga2V5b2YgUmVnaW9uTmFtZUxpc3QpIHx8ICcnO1xuXHRcdFx0fVxuXG5cdFx0XHRtdy5zdG9yYWdlLnNldE9iamVjdChPUFRJT05TLnN0b3JhZ2VLZXkgKyB3Z1JlbGV2YW50VXNlck5hbWUsIHtjb3VudHJ5T3JBcmVhTmFtZSwgcmVnaW9uTmFtZX0sIDYwICogNjApO1xuXHRcdH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKCdbR2VvTG9jYXRpb25SZWFkZXJdIEFqYXggZXJyb3IgaW4gYGdldExvY2F0aW9uYCBtZXRob2Q6JywgZXJyb3IpO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB7Y291bnRyeU9yQXJlYU5hbWUsIHJlZ2lvbk5hbWV9O1xufTtcblxuZXhwb3J0IHtnZXRMb2NhdGlvbn07XG4iLCAiaW1wb3J0IHthcHBlbmRJY29ufSBmcm9tICcuL3V0aWwvYXBwZW5kSWNvbic7XG5pbXBvcnQge2dldExvY2F0aW9ufSBmcm9tICcuL3V0aWwvZ2V0TG9jYXRpb24nO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBhcHBlbmRHZW9JY29uID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCB7d2dSZWxldmFudFVzZXJOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0aWYgKCF3Z1JlbGV2YW50VXNlck5hbWUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR0cnkge1xuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0TG9jYXRpb24od2dSZWxldmFudFVzZXJOYW1lKTtcblx0XHRjb25zdCBjb3VudHJ5T3JBcmVhTmFtZSA9IHJlc3BvbnNlPy5jb3VudHJ5T3JBcmVhTmFtZSA/PyAnJztcblx0XHRjb25zdCByZWdpb25OYW1lID0gcmVzcG9uc2U/LnJlZ2lvbk5hbWUgPz8gJyc7XG5cblx0XHRhcHBlbmRJY29uKHtcblx0XHRcdGljb246ICdnbG9iZScsXG5cdFx0XHRpbmRpY2F0b3JUZXh0OiBjb3VudHJ5T3JBcmVhTmFtZSArIHJlZ2lvbk5hbWUsXG5cdFx0XHRzcGFuQ2xhc3M6ICdncmVlbicsXG5cdFx0fSk7XG5cdH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG5cdFx0Y29uc29sZS5lcnJvcignW0dlb0xvY2F0aW9uUmVhZGVyXSBBamF4IGVycm9yIGluIGBhcHBlbmRHZW9JY29uYCBtZXRob2Q6JywgZXJyb3IpO1xuXHRcdGFwcGVuZEljb24oe1xuXHRcdFx0aWNvbjogJ2hlbHBOb3RpY2UnLFxuXHRcdFx0aW5kaWNhdG9yVGV4dDogZ2V0TWVzc2FnZSgnVW5rbm93bicpLFxuXHRcdFx0c3BhbkNsYXNzOiAnb3JhbmdlJyxcblx0XHR9KTtcblx0fVxufTtcblxuZXhwb3J0IHthcHBlbmRHZW9JY29ufTtcbiIsICJpbXBvcnQge2FwcGVuZEdlb0ljb259IGZyb20gJy4vYXBwZW5kR2VvSWNvbic7XG5pbXBvcnQge2dldExvY2FsVXNlckdyb3Vwc30gZnJvbSAnZXh0LmdhZGdldC5NYXJrUmlnaHRzJztcblxuY29uc3QgYWRkRWxlbWVudCA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3Qge3dnUmVsZXZhbnRVc2VyTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKCF3Z1JlbGV2YW50VXNlck5hbWUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR0cnkge1xuXHRcdGNvbnN0IGdyb3Vwc01hcCA9IGF3YWl0IGdldExvY2FsVXNlckdyb3Vwcyhbd2dSZWxldmFudFVzZXJOYW1lXSk7XG5cdFx0Y29uc3QgZ3JvdXBzID0gZ3JvdXBzTWFwW3dnUmVsZXZhbnRVc2VyTmFtZV0gPz8gW107XG5cblx0XHRpZiAoZ3JvdXBzLmluY2x1ZGVzKCdib3QnKSB8fCBncm91cHMuaW5jbHVkZXMoJ3FpdXdlbicpKSB7XG5cdFx0XHQvKiBlbXB0eSAqL1xuXHRcdFx0Ly8gQWxyZWFkeSBzaG93biBpbiBNYXJrUmlnaHRzLVVzZXJwYWdlXG5cdFx0fSBlbHNlIHtcblx0XHRcdHZvaWQgYXBwZW5kR2VvSWNvbigpO1xuXHRcdH1cblx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHRjb25zb2xlLmVycm9yKCdbR2VvTG9jYXRpb25SZWFkZXJdIEFqYXggZXJyb3IgaW4gYGFkZEVsZW1lbnRgIG1ldGhvZDonLCBlcnJvcik7XG5cdH1cbn07XG5cbmV4cG9ydCB7YWRkRWxlbWVudH07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuL29wdGlvbnMuanNvbic7XG5pbXBvcnQge1NZU1RFTV9TQ1JJUFRfTElTVCwgV0VCTUFTVEVSX0xJU1R9IGZyb20gJy4vbW9kdWxlcy9jb25zdGFudCc7XG5pbXBvcnQge2FkZEVsZW1lbnR9IGZyb20gJy4vbW9kdWxlcy9hZGRFbGVtZW50JztcblxuKGZ1bmN0aW9uIGdlb0xvY2F0aW9uUmVhZGVyKCk6IHZvaWQge1xuXHRjb25zdCB7d2dBY3Rpb24sIHdnTmFtZXNwYWNlTnVtYmVyLCB3Z1BhZ2VOYW1lLCB3Z1JlbGV2YW50VXNlck5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRpZiAoXG5cdFx0IXdnUmVsZXZhbnRVc2VyTmFtZSB8fFxuXHRcdFNZU1RFTV9TQ1JJUFRfTElTVC5pbmNsdWRlcyh3Z1JlbGV2YW50VXNlck5hbWUpIHx8XG5cdFx0V0VCTUFTVEVSX0xJU1QuaW5jbHVkZXMod2dSZWxldmFudFVzZXJOYW1lKSB8fFxuXHRcdCEod2dOYW1lc3BhY2VOdW1iZXIgPT09IE9QVElPTlMudXNlck5hbWVTcGFjZU51bWJlcikgfHxcblx0XHQhKHdnQWN0aW9uID09PSAndmlldycpXG5cdCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHBhZ2VOYW1lOiBzdHJpbmcgPSBuZXcgbXcuVGl0bGUod2dQYWdlTmFtZSkudG9UZXh0KCk7XG5cdGNvbnN0IHJlbGV2YW50VXNlclBhZ2VOYW1lOiBzdHJpbmcgPSBuZXcgbXcuVGl0bGUod2dSZWxldmFudFVzZXJOYW1lLCBPUFRJT05TLnVzZXJOYW1lU3BhY2VOdW1iZXIpLnRvVGV4dCgpO1xuXHRpZiAocGFnZU5hbWUgIT09IHJlbGV2YW50VXNlclBhZ2VOYW1lKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dm9pZCBhZGRFbGVtZW50KCk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBLDZGQUFBQSxTQUFBO0FBQUE7QUFDQSxRQUFJLFFBQVEsU0FBVSxJQUFJO0FBQ3hCLGFBQU8sTUFBTSxHQUFHLFNBQVMsUUFBUTtBQUFBLElBQ25DO0FBR0EsSUFBQUEsUUFBTztBQUFBLElBRUwsTUFBTSxPQUFPLGNBQWMsWUFBWSxVQUFVLEtBQ2pELE1BQU0sT0FBTyxVQUFVLFlBQVksTUFBTTtBQUFBLElBRXpDLE1BQU0sT0FBTyxRQUFRLFlBQVksSUFBSSxLQUNyQyxNQUFNLE9BQU8sVUFBVSxZQUFZLE1BQU0sS0FDekMsTUFBTSxPQUFPLFdBQVEsWUFBWSxPQUFJO0FBQUEsSUFFcEMsNEJBQVk7QUFBRSxhQUFPO0FBQUEsSUFBTSxHQUFHLEtBQUssU0FBUyxhQUFhLEVBQUU7QUFBQTtBQUFBOzs7QUNmOUQ7QUFBQSx1RkFBQUMsU0FBQTtBQUFBO0FBQ0EsSUFBQUEsUUFBTyxVQUFVLFNBQVUsTUFBTTtBQUMvQixVQUFJO0FBQ0YsZUFBTyxDQUFDLENBQUMsS0FBSztBQUFBLE1BQ2hCLFNBQVMsT0FBTztBQUNkLGVBQU87QUFBQSxNQUNUO0FBQUEsSUFDRjtBQUFBO0FBQUE7OztBQ1BBO0FBQUEsNkZBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksUUFBUTtBQUdaLElBQUFBLFFBQU8sVUFBVSxDQUFDLE1BQU0sV0FBWTtBQUVsQyxhQUFPLE9BQU8sZUFBZSxDQUFDLEdBQUcsR0FBRyxFQUFFLEtBQUssV0FBWTtBQUFFLGVBQU87QUFBQSxNQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTTtBQUFBLElBQ2pGLENBQUM7QUFBQTtBQUFBOzs7QUNQRDtBQUFBLHNHQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLFFBQVE7QUFFWixJQUFBQSxRQUFPLFVBQVUsQ0FBQyxNQUFNLFdBQVk7QUFFbEMsVUFBSSxPQUFPLFdBQVk7QUFBQSxNQUFjLEVBQUUsS0FBSztBQUU1QyxhQUFPLE9BQU8sUUFBUSxjQUFjLEtBQUssZUFBZSxXQUFXO0FBQUEsSUFDckUsQ0FBQztBQUFBO0FBQUE7OztBQ1JEO0FBQUEsK0ZBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksY0FBYztBQUVsQixRQUFJLE9BQU8sU0FBUyxVQUFVO0FBRTlCLElBQUFBLFFBQU8sVUFBVSxjQUFjLEtBQUssS0FBSyxJQUFJLElBQUksV0FBWTtBQUMzRCxhQUFPLEtBQUssTUFBTSxNQUFNLFNBQVM7QUFBQSxJQUNuQztBQUFBO0FBQUE7OztBQ1BBO0FBQUE7QUFBQTtBQUNBLFFBQUksd0JBQXdCLENBQUMsRUFBRTtBQUUvQixRQUFJLDJCQUEyQixPQUFPO0FBR3RDLFFBQUksY0FBYyw0QkFBNEIsQ0FBQyxzQkFBc0IsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7QUFJckYsWUFBUSxJQUFJLGNBQWMsU0FBUyxxQkFBcUIsR0FBRztBQUN6RCxVQUFJLGFBQWEseUJBQXlCLE1BQU0sQ0FBQztBQUNqRCxhQUFPLENBQUMsQ0FBQyxjQUFjLFdBQVc7QUFBQSxJQUNwQyxJQUFJO0FBQUE7QUFBQTs7O0FDYko7QUFBQSw0R0FBQUMsU0FBQTtBQUFBO0FBQ0EsSUFBQUEsUUFBTyxVQUFVLFNBQVUsUUFBUSxPQUFPO0FBQ3hDLGFBQU87QUFBQSxRQUNMLFlBQVksRUFBRSxTQUFTO0FBQUEsUUFDdkIsY0FBYyxFQUFFLFNBQVM7QUFBQSxRQUN6QixVQUFVLEVBQUUsU0FBUztBQUFBLFFBQ3JCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQTtBQUFBOzs7QUNSQTtBQUFBLHVHQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLGNBQWM7QUFFbEIsUUFBSSxvQkFBb0IsU0FBUztBQUNqQyxRQUFJLE9BQU8sa0JBQWtCO0FBRTdCLFFBQUksc0JBQXNCLGVBQWUsa0JBQWtCLEtBQUssS0FBSyxNQUFNLElBQUk7QUFFL0UsSUFBQUEsUUFBTyxVQUFVLGNBQWMsc0JBQXNCLFNBQVUsSUFBSTtBQUNqRSxhQUFPLFdBQVk7QUFDakIsZUFBTyxLQUFLLE1BQU0sSUFBSSxTQUFTO0FBQUEsTUFDakM7QUFBQSxJQUNGO0FBQUE7QUFBQTs7O0FDWkE7QUFBQSw2RkFBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxjQUFjO0FBRWxCLFFBQUksV0FBVyxZQUFZLENBQUMsRUFBRSxRQUFRO0FBQ3RDLFFBQUksY0FBYyxZQUFZLEdBQUcsS0FBSztBQUV0QyxJQUFBQSxRQUFPLFVBQVUsU0FBVSxJQUFJO0FBQzdCLGFBQU8sWUFBWSxTQUFTLEVBQUUsR0FBRyxHQUFHLEVBQUU7QUFBQSxJQUN4QztBQUFBO0FBQUE7OztBQ1JBO0FBQUEsZ0dBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksY0FBYztBQUNsQixRQUFJLFFBQVE7QUFDWixRQUFJLFVBQVU7QUFFZCxRQUFJLFVBQVU7QUFDZCxRQUFJLFFBQVEsWUFBWSxHQUFHLEtBQUs7QUFHaEMsSUFBQUEsUUFBTyxVQUFVLE1BQU0sV0FBWTtBQUdqQyxhQUFPLENBQUMsUUFBUSxHQUFHLEVBQUUscUJBQXFCLENBQUM7QUFBQSxJQUM3QyxDQUFDLElBQUksU0FBVSxJQUFJO0FBQ2pCLGFBQU8sUUFBUSxFQUFFLE1BQU0sV0FBVyxNQUFNLElBQUksRUFBRSxJQUFJLFFBQVEsRUFBRTtBQUFBLElBQzlELElBQUk7QUFBQTtBQUFBOzs7QUNmSjtBQUFBLHNHQUFBQyxTQUFBO0FBQUE7QUFHQSxJQUFBQSxRQUFPLFVBQVUsU0FBVSxJQUFJO0FBQzdCLGFBQU8sT0FBTyxRQUFRLE9BQU87QUFBQSxJQUMvQjtBQUFBO0FBQUE7OztBQ0xBO0FBQUEsMEdBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksb0JBQW9CO0FBRXhCLFFBQUksYUFBYTtBQUlqQixJQUFBQSxRQUFPLFVBQVUsU0FBVSxJQUFJO0FBQzdCLFVBQUksa0JBQWtCLEVBQUUsRUFBRyxPQUFNLElBQUksV0FBVywwQkFBMEIsRUFBRTtBQUM1RSxhQUFPO0FBQUEsSUFDVDtBQUFBO0FBQUE7OztBQ1ZBO0FBQUEsbUdBQUFDLFNBQUE7QUFBQTtBQUVBLFFBQUksZ0JBQWdCO0FBQ3BCLFFBQUkseUJBQXlCO0FBRTdCLElBQUFBLFFBQU8sVUFBVSxTQUFVLElBQUk7QUFDN0IsYUFBTyxjQUFjLHVCQUF1QixFQUFFLENBQUM7QUFBQSxJQUNqRDtBQUFBO0FBQUE7OztBQ1BBO0FBQUEsNkZBQUFDLFNBQUE7QUFBQTtBQUVBLFFBQUksY0FBYyxPQUFPLFlBQVksWUFBWSxTQUFTO0FBSzFELElBQUFBLFFBQU8sVUFBVSxPQUFPLGVBQWUsZUFBZSxnQkFBZ0IsU0FBWSxTQUFVLFVBQVU7QUFDcEcsYUFBTyxPQUFPLFlBQVksY0FBYyxhQUFhO0FBQUEsSUFDdkQsSUFBSSxTQUFVLFVBQVU7QUFDdEIsYUFBTyxPQUFPLFlBQVk7QUFBQSxJQUM1QjtBQUFBO0FBQUE7OztBQ1hBO0FBQUEsMkZBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksYUFBYTtBQUVqQixJQUFBQSxRQUFPLFVBQVUsU0FBVSxJQUFJO0FBQzdCLGFBQU8sT0FBTyxNQUFNLFdBQVcsT0FBTyxPQUFPLFdBQVcsRUFBRTtBQUFBLElBQzVEO0FBQUE7QUFBQTs7O0FDTEE7QUFBQSw4RkFBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSUMsY0FBYTtBQUNqQixRQUFJLGFBQWE7QUFFakIsUUFBSSxZQUFZLFNBQVUsVUFBVTtBQUNsQyxhQUFPLFdBQVcsUUFBUSxJQUFJLFdBQVc7QUFBQSxJQUMzQztBQUVBLElBQUFELFFBQU8sVUFBVSxTQUFVLFdBQVcsUUFBUTtBQUM1QyxhQUFPLFVBQVUsU0FBUyxJQUFJLFVBQVVDLFlBQVcsU0FBUyxDQUFDLElBQUlBLFlBQVcsU0FBUyxLQUFLQSxZQUFXLFNBQVMsRUFBRSxNQUFNO0FBQUEsSUFDeEg7QUFBQTtBQUFBOzs7QUNWQTtBQUFBLHdHQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLGNBQWM7QUFFbEIsSUFBQUEsUUFBTyxVQUFVLFlBQVksQ0FBQyxFQUFFLGFBQWE7QUFBQTtBQUFBOzs7QUNIN0M7QUFBQSx3R0FBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSUMsY0FBYTtBQUVqQixRQUFJLFlBQVlBLFlBQVc7QUFDM0IsUUFBSSxZQUFZLGFBQWEsVUFBVTtBQUV2QyxJQUFBRCxRQUFPLFVBQVUsWUFBWSxPQUFPLFNBQVMsSUFBSTtBQUFBO0FBQUE7OztBQ05qRDtBQUFBLHdHQUFBRSxTQUFBO0FBQUE7QUFDQSxRQUFJQyxjQUFhO0FBQ2pCLFFBQUksWUFBWTtBQUVoQixRQUFJLFVBQVVBLFlBQVc7QUFDekIsUUFBSSxPQUFPQSxZQUFXO0FBQ3RCLFFBQUksV0FBVyxXQUFXLFFBQVEsWUFBWSxRQUFRLEtBQUs7QUFDM0QsUUFBSSxLQUFLLFlBQVksU0FBUztBQUM5QixRQUFJO0FBQUosUUFBV0M7QUFFWCxRQUFJLElBQUk7QUFDTixjQUFRLEdBQUcsTUFBTSxHQUFHO0FBR3BCLE1BQUFBLFdBQVUsTUFBTSxDQUFDLElBQUksS0FBSyxNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxNQUFNLENBQUM7QUFBQSxJQUNuRTtBQUlBLFFBQUksQ0FBQ0EsWUFBVyxXQUFXO0FBQ3pCLGNBQVEsVUFBVSxNQUFNLGFBQWE7QUFDckMsVUFBSSxDQUFDLFNBQVMsTUFBTSxDQUFDLEtBQUssSUFBSTtBQUM1QixnQkFBUSxVQUFVLE1BQU0sZUFBZTtBQUN2QyxZQUFJLE1BQU8sQ0FBQUEsV0FBVSxDQUFDLE1BQU0sQ0FBQztBQUFBLE1BQy9CO0FBQUEsSUFDRjtBQUVBLElBQUFGLFFBQU8sVUFBVUU7QUFBQTtBQUFBOzs7QUMzQmpCO0FBQUEsOEdBQUFDLFNBQUE7QUFBQTtBQUVBLFFBQUksYUFBYTtBQUNqQixRQUFJLFFBQVE7QUFDWixRQUFJQyxjQUFhO0FBRWpCLFFBQUksVUFBVUEsWUFBVztBQUd6QixJQUFBRCxRQUFPLFVBQVUsQ0FBQyxDQUFDLE9BQU8seUJBQXlCLENBQUMsTUFBTSxXQUFZO0FBQ3BFLFVBQUksU0FBUyx1QkFBTyxrQkFBa0I7QUFLdEMsYUFBTyxDQUFDLFFBQVEsTUFBTSxLQUFLLEVBQUUsT0FBTyxNQUFNLGFBQWE7QUFBQSxNQUVyRCxDQUFDLE9BQU8sUUFBUSxjQUFjLGFBQWE7QUFBQSxJQUMvQyxDQUFDO0FBQUE7QUFBQTs7O0FDbEJEO0FBQUEsbUdBQUFFLFNBQUE7QUFBQTtBQUVBLFFBQUksZ0JBQWdCO0FBRXBCLElBQUFBLFFBQU8sVUFBVSxpQkFDZixDQUFDLE9BQU8sUUFDUixPQUFPLE9BQU8sWUFBWTtBQUFBO0FBQUE7OztBQ041QjtBQUFBLDJGQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLGFBQWE7QUFDakIsUUFBSSxhQUFhO0FBQ2pCLFFBQUksZ0JBQWdCO0FBQ3BCLFFBQUksb0JBQW9CO0FBRXhCLFFBQUksVUFBVTtBQUVkLElBQUFBLFFBQU8sVUFBVSxvQkFBb0IsU0FBVSxJQUFJO0FBQ2pELGFBQU8sT0FBTyxNQUFNO0FBQUEsSUFDdEIsSUFBSSxTQUFVLElBQUk7QUFDaEIsVUFBSSxVQUFVLFdBQVcsUUFBUTtBQUNqQyxhQUFPLFdBQVcsT0FBTyxLQUFLLGNBQWMsUUFBUSxXQUFXLFFBQVEsRUFBRSxDQUFDO0FBQUEsSUFDNUU7QUFBQTtBQUFBOzs7QUNiQTtBQUFBLCtGQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLFVBQVU7QUFFZCxJQUFBQSxRQUFPLFVBQVUsU0FBVSxVQUFVO0FBQ25DLFVBQUk7QUFDRixlQUFPLFFBQVEsUUFBUTtBQUFBLE1BQ3pCLFNBQVMsT0FBTztBQUNkLGVBQU87QUFBQSxNQUNUO0FBQUEsSUFDRjtBQUFBO0FBQUE7OztBQ1RBO0FBQUEsNEZBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksYUFBYTtBQUNqQixRQUFJLGNBQWM7QUFFbEIsUUFBSSxhQUFhO0FBR2pCLElBQUFBLFFBQU8sVUFBVSxTQUFVLFVBQVU7QUFDbkMsVUFBSSxXQUFXLFFBQVEsRUFBRyxRQUFPO0FBQ2pDLFlBQU0sSUFBSSxXQUFXLFlBQVksUUFBUSxJQUFJLG9CQUFvQjtBQUFBLElBQ25FO0FBQUE7QUFBQTs7O0FDVkE7QUFBQSw0RkFBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxZQUFZO0FBQ2hCLFFBQUksb0JBQW9CO0FBSXhCLElBQUFBLFFBQU8sVUFBVSxTQUFVLEdBQUcsR0FBRztBQUMvQixVQUFJLE9BQU8sRUFBRSxDQUFDO0FBQ2QsYUFBTyxrQkFBa0IsSUFBSSxJQUFJLFNBQVksVUFBVSxJQUFJO0FBQUEsSUFDN0Q7QUFBQTtBQUFBOzs7QUNUQTtBQUFBLHVHQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLE9BQU87QUFDWCxRQUFJLGFBQWE7QUFDakIsUUFBSSxXQUFXO0FBRWYsUUFBSSxhQUFhO0FBSWpCLElBQUFBLFFBQU8sVUFBVSxTQUFVLE9BQU8sTUFBTTtBQUN0QyxVQUFJLElBQUk7QUFDUixVQUFJLFNBQVMsWUFBWSxXQUFXLEtBQUssTUFBTSxRQUFRLEtBQUssQ0FBQyxTQUFTLE1BQU0sS0FBSyxJQUFJLEtBQUssQ0FBQyxFQUFHLFFBQU87QUFDckcsVUFBSSxXQUFXLEtBQUssTUFBTSxPQUFPLEtBQUssQ0FBQyxTQUFTLE1BQU0sS0FBSyxJQUFJLEtBQUssQ0FBQyxFQUFHLFFBQU87QUFDL0UsVUFBSSxTQUFTLFlBQVksV0FBVyxLQUFLLE1BQU0sUUFBUSxLQUFLLENBQUMsU0FBUyxNQUFNLEtBQUssSUFBSSxLQUFLLENBQUMsRUFBRyxRQUFPO0FBQ3JHLFlBQU0sSUFBSSxXQUFXLHlDQUF5QztBQUFBLElBQ2hFO0FBQUE7QUFBQTs7O0FDZkE7QUFBQSx5RkFBQUMsU0FBQTtBQUFBO0FBQ0EsSUFBQUEsUUFBTyxVQUFVO0FBQUE7QUFBQTs7O0FDRGpCO0FBQUEsd0dBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUlDLGNBQWE7QUFHakIsUUFBSSxpQkFBaUIsT0FBTztBQUU1QixJQUFBRCxRQUFPLFVBQVUsU0FBVSxLQUFLLE9BQU87QUFDckMsVUFBSTtBQUNGLHVCQUFlQyxhQUFZLEtBQUssRUFBRSxPQUFjLGNBQWMsTUFBTSxVQUFVLEtBQUssQ0FBQztBQUFBLE1BQ3RGLFNBQVMsT0FBTztBQUNkLFFBQUFBLFlBQVcsR0FBRyxJQUFJO0FBQUEsTUFDcEI7QUFBRSxhQUFPO0FBQUEsSUFDWDtBQUFBO0FBQUE7OztBQ1pBO0FBQUEsOEZBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksVUFBVTtBQUNkLFFBQUlDLGNBQWE7QUFDakIsUUFBSSx1QkFBdUI7QUFFM0IsUUFBSSxTQUFTO0FBQ2IsUUFBSSxRQUFRRCxRQUFPLFVBQVVDLFlBQVcsTUFBTSxLQUFLLHFCQUFxQixRQUFRLENBQUMsQ0FBQztBQUVsRixLQUFDLE1BQU0sYUFBYSxNQUFNLFdBQVcsQ0FBQyxJQUFJLEtBQUs7QUFBQSxNQUM3QyxTQUFTO0FBQUEsTUFDVCxNQUFNLFVBQVUsU0FBUztBQUFBLE1BQ3pCLFdBQVc7QUFBQSxNQUNYLFNBQVM7QUFBQSxNQUNULFFBQVE7QUFBQSxJQUNWLENBQUM7QUFBQTtBQUFBOzs7QUNkRDtBQUFBLHdGQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLFFBQVE7QUFFWixJQUFBQSxRQUFPLFVBQVUsU0FBVSxLQUFLLE9BQU87QUFDckMsYUFBTyxNQUFNLEdBQUcsTUFBTSxNQUFNLEdBQUcsSUFBSSxTQUFTLENBQUM7QUFBQSxJQUMvQztBQUFBO0FBQUE7OztBQ0xBO0FBQUEsMkZBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUkseUJBQXlCO0FBRTdCLFFBQUksVUFBVTtBQUlkLElBQUFBLFFBQU8sVUFBVSxTQUFVLFVBQVU7QUFDbkMsYUFBTyxRQUFRLHVCQUF1QixRQUFRLENBQUM7QUFBQSxJQUNqRDtBQUFBO0FBQUE7OztBQ1RBO0FBQUEsa0dBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksY0FBYztBQUNsQixRQUFJLFdBQVc7QUFFZixRQUFJLGlCQUFpQixZQUFZLENBQUMsRUFBRSxjQUFjO0FBS2xELElBQUFBLFFBQU8sVUFBVSxPQUFPLFVBQVUsU0FBUyxPQUFPLElBQUksS0FBSztBQUN6RCxhQUFPLGVBQWUsU0FBUyxFQUFFLEdBQUcsR0FBRztBQUFBLElBQ3pDO0FBQUE7QUFBQTs7O0FDWEE7QUFBQSxxRkFBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxjQUFjO0FBRWxCLFFBQUksS0FBSztBQUNULFFBQUksVUFBVSxLQUFLLE9BQU87QUFDMUIsUUFBSSxXQUFXLFlBQVksSUFBSSxRQUFRO0FBRXZDLElBQUFBLFFBQU8sVUFBVSxTQUFVLEtBQUs7QUFDOUIsYUFBTyxhQUFhLFFBQVEsU0FBWSxLQUFLLE9BQU8sT0FBTyxTQUFTLEVBQUUsS0FBSyxTQUFTLEVBQUU7QUFBQSxJQUN4RjtBQUFBO0FBQUE7OztBQ1RBO0FBQUEsbUdBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUlDLGNBQWE7QUFDakIsUUFBSSxTQUFTO0FBQ2IsUUFBSSxTQUFTO0FBQ2IsUUFBSSxNQUFNO0FBQ1YsUUFBSSxnQkFBZ0I7QUFDcEIsUUFBSSxvQkFBb0I7QUFFeEIsUUFBSUMsVUFBU0QsWUFBVztBQUN4QixRQUFJLHdCQUF3QixPQUFPLEtBQUs7QUFDeEMsUUFBSSx3QkFBd0Isb0JBQW9CQyxRQUFPLEtBQUssS0FBS0EsVUFBU0EsV0FBVUEsUUFBTyxpQkFBaUI7QUFFNUcsSUFBQUYsUUFBTyxVQUFVLFNBQVUsTUFBTTtBQUMvQixVQUFJLENBQUMsT0FBTyx1QkFBdUIsSUFBSSxHQUFHO0FBQ3hDLDhCQUFzQixJQUFJLElBQUksaUJBQWlCLE9BQU9FLFNBQVEsSUFBSSxJQUM5REEsUUFBTyxJQUFJLElBQ1gsc0JBQXNCLFlBQVksSUFBSTtBQUFBLE1BQzVDO0FBQUUsYUFBTyxzQkFBc0IsSUFBSTtBQUFBLElBQ3JDO0FBQUE7QUFBQTs7O0FDbEJBO0FBQUEsOEZBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksT0FBTztBQUNYLFFBQUksV0FBVztBQUNmLFFBQUksV0FBVztBQUNmLFFBQUksWUFBWTtBQUNoQixRQUFJLHNCQUFzQjtBQUMxQixRQUFJLGtCQUFrQjtBQUV0QixRQUFJLGFBQWE7QUFDakIsUUFBSSxlQUFlLGdCQUFnQixhQUFhO0FBSWhELElBQUFBLFFBQU8sVUFBVSxTQUFVLE9BQU8sTUFBTTtBQUN0QyxVQUFJLENBQUMsU0FBUyxLQUFLLEtBQUssU0FBUyxLQUFLLEVBQUcsUUFBTztBQUNoRCxVQUFJLGVBQWUsVUFBVSxPQUFPLFlBQVk7QUFDaEQsVUFBSTtBQUNKLFVBQUksY0FBYztBQUNoQixZQUFJLFNBQVMsT0FBVyxRQUFPO0FBQy9CLGlCQUFTLEtBQUssY0FBYyxPQUFPLElBQUk7QUFDdkMsWUFBSSxDQUFDLFNBQVMsTUFBTSxLQUFLLFNBQVMsTUFBTSxFQUFHLFFBQU87QUFDbEQsY0FBTSxJQUFJLFdBQVcseUNBQXlDO0FBQUEsTUFDaEU7QUFDQSxVQUFJLFNBQVMsT0FBVyxRQUFPO0FBQy9CLGFBQU8sb0JBQW9CLE9BQU8sSUFBSTtBQUFBLElBQ3hDO0FBQUE7QUFBQTs7O0FDekJBO0FBQUEsaUdBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksY0FBYztBQUNsQixRQUFJLFdBQVc7QUFJZixJQUFBQSxRQUFPLFVBQVUsU0FBVSxVQUFVO0FBQ25DLFVBQUksTUFBTSxZQUFZLFVBQVUsUUFBUTtBQUN4QyxhQUFPLFNBQVMsR0FBRyxJQUFJLE1BQU0sTUFBTTtBQUFBLElBQ3JDO0FBQUE7QUFBQTs7O0FDVEE7QUFBQSx5R0FBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSUMsY0FBYTtBQUNqQixRQUFJLFdBQVc7QUFFZixRQUFJQyxZQUFXRCxZQUFXO0FBRTFCLFFBQUksU0FBUyxTQUFTQyxTQUFRLEtBQUssU0FBU0EsVUFBUyxhQUFhO0FBRWxFLElBQUFGLFFBQU8sVUFBVSxTQUFVLElBQUk7QUFDN0IsYUFBTyxTQUFTRSxVQUFTLGNBQWMsRUFBRSxJQUFJLENBQUM7QUFBQSxJQUNoRDtBQUFBO0FBQUE7OztBQ1ZBO0FBQUEsZ0dBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksY0FBYztBQUNsQixRQUFJLFFBQVE7QUFDWixRQUFJLGdCQUFnQjtBQUdwQixJQUFBQSxRQUFPLFVBQVUsQ0FBQyxlQUFlLENBQUMsTUFBTSxXQUFZO0FBRWxELGFBQU8sT0FBTyxlQUFlLGNBQWMsS0FBSyxHQUFHLEtBQUs7QUFBQSxRQUN0RCxLQUFLLFdBQVk7QUFBRSxpQkFBTztBQUFBLFFBQUc7QUFBQSxNQUMvQixDQUFDLEVBQUUsTUFBTTtBQUFBLElBQ1gsQ0FBQztBQUFBO0FBQUE7OztBQ1hEO0FBQUE7QUFBQTtBQUNBLFFBQUksY0FBYztBQUNsQixRQUFJLE9BQU87QUFDWCxRQUFJLDZCQUE2QjtBQUNqQyxRQUFJLDJCQUEyQjtBQUMvQixRQUFJLGtCQUFrQjtBQUN0QixRQUFJLGdCQUFnQjtBQUNwQixRQUFJLFNBQVM7QUFDYixRQUFJLGlCQUFpQjtBQUdyQixRQUFJLDRCQUE0QixPQUFPO0FBSXZDLFlBQVEsSUFBSSxjQUFjLDRCQUE0QixTQUFTLHlCQUF5QixHQUFHLEdBQUc7QUFDNUYsVUFBSSxnQkFBZ0IsQ0FBQztBQUNyQixVQUFJLGNBQWMsQ0FBQztBQUNuQixVQUFJLGVBQWdCLEtBQUk7QUFDdEIsZUFBTywwQkFBMEIsR0FBRyxDQUFDO0FBQUEsTUFDdkMsU0FBUyxPQUFPO0FBQUEsTUFBYztBQUM5QixVQUFJLE9BQU8sR0FBRyxDQUFDLEVBQUcsUUFBTyx5QkFBeUIsQ0FBQyxLQUFLLDJCQUEyQixHQUFHLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQUEsSUFDbkc7QUFBQTtBQUFBOzs7QUN0QkE7QUFBQSx5R0FBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxjQUFjO0FBQ2xCLFFBQUksUUFBUTtBQUlaLElBQUFBLFFBQU8sVUFBVSxlQUFlLE1BQU0sV0FBWTtBQUVoRCxhQUFPLE9BQU8sZUFBZSxXQUFZO0FBQUEsTUFBYyxHQUFHLGFBQWE7QUFBQSxRQUNyRSxPQUFPO0FBQUEsUUFDUCxVQUFVO0FBQUEsTUFDWixDQUFDLEVBQUUsY0FBYztBQUFBLElBQ25CLENBQUM7QUFBQTtBQUFBOzs7QUNaRDtBQUFBLDJGQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLFdBQVc7QUFFZixRQUFJLFVBQVU7QUFDZCxRQUFJLGFBQWE7QUFHakIsSUFBQUEsUUFBTyxVQUFVLFNBQVUsVUFBVTtBQUNuQyxVQUFJLFNBQVMsUUFBUSxFQUFHLFFBQU87QUFDL0IsWUFBTSxJQUFJLFdBQVcsUUFBUSxRQUFRLElBQUksbUJBQW1CO0FBQUEsSUFDOUQ7QUFBQTtBQUFBOzs7QUNWQTtBQUFBO0FBQUE7QUFDQSxRQUFJLGNBQWM7QUFDbEIsUUFBSSxpQkFBaUI7QUFDckIsUUFBSSwwQkFBMEI7QUFDOUIsUUFBSSxXQUFXO0FBQ2YsUUFBSSxnQkFBZ0I7QUFFcEIsUUFBSSxhQUFhO0FBRWpCLFFBQUksa0JBQWtCLE9BQU87QUFFN0IsUUFBSSw0QkFBNEIsT0FBTztBQUN2QyxRQUFJLGFBQWE7QUFDakIsUUFBSSxlQUFlO0FBQ25CLFFBQUksV0FBVztBQUlmLFlBQVEsSUFBSSxjQUFjLDBCQUEwQixTQUFTLGVBQWUsR0FBRyxHQUFHLFlBQVk7QUFDNUYsZUFBUyxDQUFDO0FBQ1YsVUFBSSxjQUFjLENBQUM7QUFDbkIsZUFBUyxVQUFVO0FBQ25CLFVBQUksT0FBTyxNQUFNLGNBQWMsTUFBTSxlQUFlLFdBQVcsY0FBYyxZQUFZLGNBQWMsQ0FBQyxXQUFXLFFBQVEsR0FBRztBQUM1SCxZQUFJLFVBQVUsMEJBQTBCLEdBQUcsQ0FBQztBQUM1QyxZQUFJLFdBQVcsUUFBUSxRQUFRLEdBQUc7QUFDaEMsWUFBRSxDQUFDLElBQUksV0FBVztBQUNsQix1QkFBYTtBQUFBLFlBQ1gsY0FBYyxnQkFBZ0IsYUFBYSxXQUFXLFlBQVksSUFBSSxRQUFRLFlBQVk7QUFBQSxZQUMxRixZQUFZLGNBQWMsYUFBYSxXQUFXLFVBQVUsSUFBSSxRQUFRLFVBQVU7QUFBQSxZQUNsRixVQUFVO0FBQUEsVUFDWjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUUsYUFBTyxnQkFBZ0IsR0FBRyxHQUFHLFVBQVU7QUFBQSxJQUMzQyxJQUFJLGtCQUFrQixTQUFTLGVBQWUsR0FBRyxHQUFHLFlBQVk7QUFDOUQsZUFBUyxDQUFDO0FBQ1YsVUFBSSxjQUFjLENBQUM7QUFDbkIsZUFBUyxVQUFVO0FBQ25CLFVBQUksZUFBZ0IsS0FBSTtBQUN0QixlQUFPLGdCQUFnQixHQUFHLEdBQUcsVUFBVTtBQUFBLE1BQ3pDLFNBQVMsT0FBTztBQUFBLE1BQWM7QUFDOUIsVUFBSSxTQUFTLGNBQWMsU0FBUyxXQUFZLE9BQU0sSUFBSSxXQUFXLHlCQUF5QjtBQUM5RixVQUFJLFdBQVcsV0FBWSxHQUFFLENBQUMsSUFBSSxXQUFXO0FBQzdDLGFBQU87QUFBQSxJQUNUO0FBQUE7QUFBQTs7O0FDM0NBO0FBQUEsZ0hBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksY0FBYztBQUNsQixRQUFJLHVCQUF1QjtBQUMzQixRQUFJLDJCQUEyQjtBQUUvQixJQUFBQSxRQUFPLFVBQVUsY0FBYyxTQUFVLFFBQVEsS0FBSyxPQUFPO0FBQzNELGFBQU8scUJBQXFCLEVBQUUsUUFBUSxLQUFLLHlCQUF5QixHQUFHLEtBQUssQ0FBQztBQUFBLElBQy9FLElBQUksU0FBVSxRQUFRLEtBQUssT0FBTztBQUNoQyxhQUFPLEdBQUcsSUFBSTtBQUNkLGFBQU87QUFBQSxJQUNUO0FBQUE7QUFBQTs7O0FDVkE7QUFBQSwrRkFBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxjQUFjO0FBQ2xCLFFBQUksU0FBUztBQUViLFFBQUksb0JBQW9CLFNBQVM7QUFFakMsUUFBSSxnQkFBZ0IsZUFBZSxPQUFPO0FBRTFDLFFBQUksU0FBUyxPQUFPLG1CQUFtQixNQUFNO0FBRTdDLFFBQUksU0FBUyxVQUFVLFNBQVMsWUFBWTtBQUFBLElBQWMsRUFBRSxTQUFTO0FBQ3JFLFFBQUksZUFBZSxXQUFXLENBQUMsZUFBZ0IsZUFBZSxjQUFjLG1CQUFtQixNQUFNLEVBQUU7QUFFdkcsSUFBQUEsUUFBTyxVQUFVO0FBQUEsTUFDZjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBO0FBQUE7OztBQ2pCQTtBQUFBLGdHQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLGNBQWM7QUFDbEIsUUFBSSxhQUFhO0FBQ2pCLFFBQUksUUFBUTtBQUVaLFFBQUksbUJBQW1CLFlBQVksU0FBUyxRQUFRO0FBR3BELFFBQUksQ0FBQyxXQUFXLE1BQU0sYUFBYSxHQUFHO0FBQ3BDLFlBQU0sZ0JBQWdCLFNBQVUsSUFBSTtBQUNsQyxlQUFPLGlCQUFpQixFQUFFO0FBQUEsTUFDNUI7QUFBQSxJQUNGO0FBRUEsSUFBQUEsUUFBTyxVQUFVLE1BQU07QUFBQTtBQUFBOzs7QUNkdkI7QUFBQSwwR0FBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSUMsY0FBYTtBQUNqQixRQUFJLGFBQWE7QUFFakIsUUFBSSxVQUFVQSxZQUFXO0FBRXpCLElBQUFELFFBQU8sVUFBVSxXQUFXLE9BQU8sS0FBSyxjQUFjLEtBQUssT0FBTyxPQUFPLENBQUM7QUFBQTtBQUFBOzs7QUNOMUU7QUFBQSw0RkFBQUUsU0FBQTtBQUFBO0FBQ0EsUUFBSSxTQUFTO0FBQ2IsUUFBSSxNQUFNO0FBRVYsUUFBSSxPQUFPLE9BQU8sTUFBTTtBQUV4QixJQUFBQSxRQUFPLFVBQVUsU0FBVSxLQUFLO0FBQzlCLGFBQU8sS0FBSyxHQUFHLE1BQU0sS0FBSyxHQUFHLElBQUksSUFBSSxHQUFHO0FBQUEsSUFDMUM7QUFBQTtBQUFBOzs7QUNSQTtBQUFBLDZGQUFBQyxTQUFBO0FBQUE7QUFDQSxJQUFBQSxRQUFPLFVBQVUsQ0FBQztBQUFBO0FBQUE7OztBQ0RsQjtBQUFBLGdHQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLGtCQUFrQjtBQUN0QixRQUFJQyxjQUFhO0FBQ2pCLFFBQUksV0FBVztBQUNmLFFBQUksOEJBQThCO0FBQ2xDLFFBQUksU0FBUztBQUNiLFFBQUksU0FBUztBQUNiLFFBQUksWUFBWTtBQUNoQixRQUFJLGFBQWE7QUFFakIsUUFBSSw2QkFBNkI7QUFDakMsUUFBSUMsYUFBWUQsWUFBVztBQUMzQixRQUFJLFVBQVVBLFlBQVc7QUFDekIsUUFBSTtBQUFKLFFBQVM7QUFBVCxRQUFjO0FBRWQsUUFBSSxVQUFVLFNBQVUsSUFBSTtBQUMxQixhQUFPLElBQUksRUFBRSxJQUFJLElBQUksRUFBRSxJQUFJLElBQUksSUFBSSxDQUFDLENBQUM7QUFBQSxJQUN2QztBQUVBLFFBQUksWUFBWSxTQUFVLE1BQU07QUFDOUIsYUFBTyxTQUFVLElBQUk7QUFDbkIsWUFBSTtBQUNKLFlBQUksQ0FBQyxTQUFTLEVBQUUsTUFBTSxRQUFRLElBQUksRUFBRSxHQUFHLFNBQVMsTUFBTTtBQUNwRCxnQkFBTSxJQUFJQyxXQUFVLDRCQUE0QixPQUFPLFdBQVc7QUFBQSxRQUNwRTtBQUFFLGVBQU87QUFBQSxNQUNYO0FBQUEsSUFDRjtBQUVBLFFBQUksbUJBQW1CLE9BQU8sT0FBTztBQUMvQixjQUFRLE9BQU8sVUFBVSxPQUFPLFFBQVEsSUFBSSxRQUFRO0FBRXhELFlBQU0sTUFBTSxNQUFNO0FBQ2xCLFlBQU0sTUFBTSxNQUFNO0FBQ2xCLFlBQU0sTUFBTSxNQUFNO0FBRWxCLFlBQU0sU0FBVSxJQUFJLFVBQVU7QUFDNUIsWUFBSSxNQUFNLElBQUksRUFBRSxFQUFHLE9BQU0sSUFBSUEsV0FBVSwwQkFBMEI7QUFDakUsaUJBQVMsU0FBUztBQUNsQixjQUFNLElBQUksSUFBSSxRQUFRO0FBQ3RCLGVBQU87QUFBQSxNQUNUO0FBQ0EsWUFBTSxTQUFVLElBQUk7QUFDbEIsZUFBTyxNQUFNLElBQUksRUFBRSxLQUFLLENBQUM7QUFBQSxNQUMzQjtBQUNBLFlBQU0sU0FBVSxJQUFJO0FBQ2xCLGVBQU8sTUFBTSxJQUFJLEVBQUU7QUFBQSxNQUNyQjtBQUFBLElBQ0YsT0FBTztBQUNELGNBQVEsVUFBVSxPQUFPO0FBQzdCLGlCQUFXLEtBQUssSUFBSTtBQUNwQixZQUFNLFNBQVUsSUFBSSxVQUFVO0FBQzVCLFlBQUksT0FBTyxJQUFJLEtBQUssRUFBRyxPQUFNLElBQUlBLFdBQVUsMEJBQTBCO0FBQ3JFLGlCQUFTLFNBQVM7QUFDbEIsb0NBQTRCLElBQUksT0FBTyxRQUFRO0FBQy9DLGVBQU87QUFBQSxNQUNUO0FBQ0EsWUFBTSxTQUFVLElBQUk7QUFDbEIsZUFBTyxPQUFPLElBQUksS0FBSyxJQUFJLEdBQUcsS0FBSyxJQUFJLENBQUM7QUFBQSxNQUMxQztBQUNBLFlBQU0sU0FBVSxJQUFJO0FBQ2xCLGVBQU8sT0FBTyxJQUFJLEtBQUs7QUFBQSxNQUN6QjtBQUFBLElBQ0Y7QUFqQ007QUFtQkE7QUFnQk4sSUFBQUYsUUFBTyxVQUFVO0FBQUEsTUFDZjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUE7QUFBQTs7O0FDdEVBO0FBQUEsK0ZBQUFHLFNBQUE7QUFBQTtBQUNBLFFBQUksY0FBYztBQUNsQixRQUFJLFFBQVE7QUFDWixRQUFJLGFBQWE7QUFDakIsUUFBSSxTQUFTO0FBQ2IsUUFBSSxjQUFjO0FBQ2xCLFFBQUksNkJBQTZCLHdCQUFzQztBQUN2RSxRQUFJLGdCQUFnQjtBQUNwQixRQUFJLHNCQUFzQjtBQUUxQixRQUFJLHVCQUF1QixvQkFBb0I7QUFDL0MsUUFBSSxtQkFBbUIsb0JBQW9CO0FBQzNDLFFBQUksVUFBVTtBQUVkLFFBQUksaUJBQWlCLE9BQU87QUFDNUIsUUFBSSxjQUFjLFlBQVksR0FBRyxLQUFLO0FBQ3RDLFFBQUksVUFBVSxZQUFZLEdBQUcsT0FBTztBQUNwQyxRQUFJLE9BQU8sWUFBWSxDQUFDLEVBQUUsSUFBSTtBQUU5QixRQUFJLHNCQUFzQixlQUFlLENBQUMsTUFBTSxXQUFZO0FBQzFELGFBQU8sZUFBZSxXQUFZO0FBQUEsTUFBYyxHQUFHLFVBQVUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLFdBQVc7QUFBQSxJQUN4RixDQUFDO0FBRUQsUUFBSSxXQUFXLE9BQU8sTUFBTSxFQUFFLE1BQU0sUUFBUTtBQUU1QyxRQUFJLGNBQWNBLFFBQU8sVUFBVSxTQUFVLE9BQU8sTUFBTSxTQUFTO0FBQ2pFLFVBQUksWUFBWSxRQUFRLElBQUksR0FBRyxHQUFHLENBQUMsTUFBTSxXQUFXO0FBQ2xELGVBQU8sTUFBTSxRQUFRLFFBQVEsSUFBSSxHQUFHLHlCQUF5QixJQUFJLElBQUk7QUFBQSxNQUN2RTtBQUNBLFVBQUksV0FBVyxRQUFRLE9BQVEsUUFBTyxTQUFTO0FBQy9DLFVBQUksV0FBVyxRQUFRLE9BQVEsUUFBTyxTQUFTO0FBQy9DLFVBQUksQ0FBQyxPQUFPLE9BQU8sTUFBTSxLQUFNLDhCQUE4QixNQUFNLFNBQVMsTUFBTztBQUNqRixZQUFJLFlBQWEsZ0JBQWUsT0FBTyxRQUFRLEVBQUUsT0FBTyxNQUFNLGNBQWMsS0FBSyxDQUFDO0FBQUEsWUFDN0UsT0FBTSxPQUFPO0FBQUEsTUFDcEI7QUFDQSxVQUFJLHVCQUF1QixXQUFXLE9BQU8sU0FBUyxPQUFPLEtBQUssTUFBTSxXQUFXLFFBQVEsT0FBTztBQUNoRyx1QkFBZSxPQUFPLFVBQVUsRUFBRSxPQUFPLFFBQVEsTUFBTSxDQUFDO0FBQUEsTUFDMUQ7QUFDQSxVQUFJO0FBQ0YsWUFBSSxXQUFXLE9BQU8sU0FBUyxhQUFhLEtBQUssUUFBUSxhQUFhO0FBQ3BFLGNBQUksWUFBYSxnQkFBZSxPQUFPLGFBQWEsRUFBRSxVQUFVLE1BQU0sQ0FBQztBQUFBLFFBRXpFLFdBQVcsTUFBTSxVQUFXLE9BQU0sWUFBWTtBQUFBLE1BQ2hELFNBQVMsT0FBTztBQUFBLE1BQWM7QUFDOUIsVUFBSSxRQUFRLHFCQUFxQixLQUFLO0FBQ3RDLFVBQUksQ0FBQyxPQUFPLE9BQU8sUUFBUSxHQUFHO0FBQzVCLGNBQU0sU0FBUyxLQUFLLFVBQVUsT0FBTyxRQUFRLFdBQVcsT0FBTyxFQUFFO0FBQUEsTUFDbkU7QUFBRSxhQUFPO0FBQUEsSUFDWDtBQUlBLGFBQVMsVUFBVSxXQUFXLFlBQVksU0FBUyxXQUFXO0FBQzVELGFBQU8sV0FBVyxJQUFJLEtBQUssaUJBQWlCLElBQUksRUFBRSxVQUFVLGNBQWMsSUFBSTtBQUFBLElBQ2hGLEdBQUcsVUFBVTtBQUFBO0FBQUE7OztBQ3REYjtBQUFBLGlHQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLGFBQWE7QUFDakIsUUFBSSx1QkFBdUI7QUFDM0IsUUFBSSxjQUFjO0FBQ2xCLFFBQUksdUJBQXVCO0FBRTNCLElBQUFBLFFBQU8sVUFBVSxTQUFVLEdBQUcsS0FBSyxPQUFPLFNBQVM7QUFDakQsVUFBSSxDQUFDLFFBQVMsV0FBVSxDQUFDO0FBQ3pCLFVBQUksU0FBUyxRQUFRO0FBQ3JCLFVBQUksT0FBTyxRQUFRLFNBQVMsU0FBWSxRQUFRLE9BQU87QUFDdkQsVUFBSSxXQUFXLEtBQUssRUFBRyxhQUFZLE9BQU8sTUFBTSxPQUFPO0FBQ3ZELFVBQUksUUFBUSxRQUFRO0FBQ2xCLFlBQUksT0FBUSxHQUFFLEdBQUcsSUFBSTtBQUFBLFlBQ2hCLHNCQUFxQixLQUFLLEtBQUs7QUFBQSxNQUN0QyxPQUFPO0FBQ0wsWUFBSTtBQUNGLGNBQUksQ0FBQyxRQUFRLE9BQVEsUUFBTyxFQUFFLEdBQUc7QUFBQSxtQkFDeEIsRUFBRSxHQUFHLEVBQUcsVUFBUztBQUFBLFFBQzVCLFNBQVMsT0FBTztBQUFBLFFBQWM7QUFDOUIsWUFBSSxPQUFRLEdBQUUsR0FBRyxJQUFJO0FBQUEsWUFDaEIsc0JBQXFCLEVBQUUsR0FBRyxLQUFLO0FBQUEsVUFDbEM7QUFBQSxVQUNBLFlBQVk7QUFBQSxVQUNaLGNBQWMsQ0FBQyxRQUFRO0FBQUEsVUFDdkIsVUFBVSxDQUFDLFFBQVE7QUFBQSxRQUNyQixDQUFDO0FBQUEsTUFDSDtBQUFFLGFBQU87QUFBQSxJQUNYO0FBQUE7QUFBQTs7O0FDM0JBO0FBQUEsNEZBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksT0FBTyxLQUFLO0FBQ2hCLFFBQUksUUFBUSxLQUFLO0FBS2pCLElBQUFBLFFBQU8sVUFBVSxLQUFLLFNBQVMsU0FBUyxNQUFNLEdBQUc7QUFDL0MsVUFBSSxJQUFJLENBQUM7QUFDVCxjQUFRLElBQUksSUFBSSxRQUFRLE1BQU0sQ0FBQztBQUFBLElBQ2pDO0FBQUE7QUFBQTs7O0FDVkE7QUFBQSx3R0FBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxRQUFRO0FBSVosSUFBQUEsUUFBTyxVQUFVLFNBQVUsVUFBVTtBQUNuQyxVQUFJLFNBQVMsQ0FBQztBQUVkLGFBQU8sV0FBVyxVQUFVLFdBQVcsSUFBSSxJQUFJLE1BQU0sTUFBTTtBQUFBLElBQzdEO0FBQUE7QUFBQTs7O0FDVEE7QUFBQSxtR0FBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxzQkFBc0I7QUFFMUIsUUFBSSxNQUFNLEtBQUs7QUFDZixRQUFJLE1BQU0sS0FBSztBQUtmLElBQUFBLFFBQU8sVUFBVSxTQUFVLE9BQU8sUUFBUTtBQUN4QyxVQUFJLFVBQVUsb0JBQW9CLEtBQUs7QUFDdkMsYUFBTyxVQUFVLElBQUksSUFBSSxVQUFVLFFBQVEsQ0FBQyxJQUFJLElBQUksU0FBUyxNQUFNO0FBQUEsSUFDckU7QUFBQTtBQUFBOzs7QUNaQTtBQUFBLDJGQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLHNCQUFzQjtBQUUxQixRQUFJLE1BQU0sS0FBSztBQUlmLElBQUFBLFFBQU8sVUFBVSxTQUFVLFVBQVU7QUFDbkMsVUFBSSxNQUFNLG9CQUFvQixRQUFRO0FBQ3RDLGFBQU8sTUFBTSxJQUFJLElBQUksS0FBSyxnQkFBZ0IsSUFBSTtBQUFBLElBQ2hEO0FBQUE7QUFBQTs7O0FDVkE7QUFBQSxzR0FBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxXQUFXO0FBSWYsSUFBQUEsUUFBTyxVQUFVLFNBQVUsS0FBSztBQUM5QixhQUFPLFNBQVMsSUFBSSxNQUFNO0FBQUEsSUFDNUI7QUFBQTtBQUFBOzs7QUNQQTtBQUFBLGdHQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLGtCQUFrQjtBQUN0QixRQUFJLGtCQUFrQjtBQUN0QixRQUFJLG9CQUFvQjtBQUd4QixRQUFJLGVBQWUsU0FBVSxhQUFhO0FBQ3hDLGFBQU8sU0FBVSxPQUFPLElBQUksV0FBVztBQUNyQyxZQUFJLElBQUksZ0JBQWdCLEtBQUs7QUFDN0IsWUFBSSxTQUFTLGtCQUFrQixDQUFDO0FBQ2hDLFlBQUksV0FBVyxFQUFHLFFBQU8sQ0FBQyxlQUFlO0FBQ3pDLFlBQUksUUFBUSxnQkFBZ0IsV0FBVyxNQUFNO0FBQzdDLFlBQUk7QUFHSixZQUFJLGVBQWUsT0FBTyxHQUFJLFFBQU8sU0FBUyxPQUFPO0FBQ25ELGtCQUFRLEVBQUUsT0FBTztBQUVqQixjQUFJLFVBQVUsTUFBTyxRQUFPO0FBQUEsUUFFOUI7QUFBQSxZQUFPLFFBQU0sU0FBUyxPQUFPLFNBQVM7QUFDcEMsZUFBSyxlQUFlLFNBQVMsTUFBTSxFQUFFLEtBQUssTUFBTSxHQUFJLFFBQU8sZUFBZSxTQUFTO0FBQUEsUUFDckY7QUFBRSxlQUFPLENBQUMsZUFBZTtBQUFBLE1BQzNCO0FBQUEsSUFDRjtBQUVBLElBQUFBLFFBQU8sVUFBVTtBQUFBO0FBQUE7QUFBQSxNQUdmLFVBQVUsYUFBYSxJQUFJO0FBQUE7QUFBQTtBQUFBLE1BRzNCLFNBQVMsYUFBYSxLQUFLO0FBQUEsSUFDN0I7QUFBQTtBQUFBOzs7QUNqQ0E7QUFBQSxzR0FBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxjQUFjO0FBQ2xCLFFBQUksU0FBUztBQUNiLFFBQUksa0JBQWtCO0FBQ3RCLFFBQUksVUFBVSx5QkFBdUM7QUFDckQsUUFBSSxhQUFhO0FBRWpCLFFBQUksT0FBTyxZQUFZLENBQUMsRUFBRSxJQUFJO0FBRTlCLElBQUFBLFFBQU8sVUFBVSxTQUFVLFFBQVEsT0FBTztBQUN4QyxVQUFJLElBQUksZ0JBQWdCLE1BQU07QUFDOUIsVUFBSSxJQUFJO0FBQ1IsVUFBSSxTQUFTLENBQUM7QUFDZCxVQUFJO0FBQ0osV0FBSyxPQUFPLEVBQUcsRUFBQyxPQUFPLFlBQVksR0FBRyxLQUFLLE9BQU8sR0FBRyxHQUFHLEtBQUssS0FBSyxRQUFRLEdBQUc7QUFFN0UsYUFBTyxNQUFNLFNBQVMsRUFBRyxLQUFJLE9BQU8sR0FBRyxNQUFNLE1BQU0sR0FBRyxDQUFDLEdBQUc7QUFDeEQsU0FBQyxRQUFRLFFBQVEsR0FBRyxLQUFLLEtBQUssUUFBUSxHQUFHO0FBQUEsTUFDM0M7QUFDQSxhQUFPO0FBQUEsSUFDVDtBQUFBO0FBQUE7OztBQ3BCQTtBQUFBLCtGQUFBQyxTQUFBO0FBQUE7QUFFQSxJQUFBQSxRQUFPLFVBQVU7QUFBQSxNQUNmO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBO0FBQUE7OztBQ1ZBO0FBQUE7QUFBQTtBQUNBLFFBQUkscUJBQXFCO0FBQ3pCLFFBQUksY0FBYztBQUVsQixRQUFJLGFBQWEsWUFBWSxPQUFPLFVBQVUsV0FBVztBQUt6RCxZQUFRLElBQUksT0FBTyx1QkFBdUIsU0FBUyxvQkFBb0IsR0FBRztBQUN4RSxhQUFPLG1CQUFtQixHQUFHLFVBQVU7QUFBQSxJQUN6QztBQUFBO0FBQUE7OztBQ1hBO0FBQUE7QUFBQTtBQUVBLFlBQVEsSUFBSSxPQUFPO0FBQUE7QUFBQTs7O0FDRm5CO0FBQUEsMEZBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksYUFBYTtBQUNqQixRQUFJLGNBQWM7QUFDbEIsUUFBSSw0QkFBNEI7QUFDaEMsUUFBSSw4QkFBOEI7QUFDbEMsUUFBSSxXQUFXO0FBRWYsUUFBSSxTQUFTLFlBQVksQ0FBQyxFQUFFLE1BQU07QUFHbEMsSUFBQUEsUUFBTyxVQUFVLFdBQVcsV0FBVyxTQUFTLEtBQUssU0FBUyxRQUFRLElBQUk7QUFDeEUsVUFBSSxPQUFPLDBCQUEwQixFQUFFLFNBQVMsRUFBRSxDQUFDO0FBQ25ELFVBQUksd0JBQXdCLDRCQUE0QjtBQUN4RCxhQUFPLHdCQUF3QixPQUFPLE1BQU0sc0JBQXNCLEVBQUUsQ0FBQyxJQUFJO0FBQUEsSUFDM0U7QUFBQTtBQUFBOzs7QUNkQTtBQUFBLDZHQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLFNBQVM7QUFDYixRQUFJLFVBQVU7QUFDZCxRQUFJLGlDQUFpQztBQUNyQyxRQUFJLHVCQUF1QjtBQUUzQixJQUFBQSxRQUFPLFVBQVUsU0FBVSxRQUFRLFFBQVEsWUFBWTtBQUNyRCxVQUFJLE9BQU8sUUFBUSxNQUFNO0FBQ3pCLFVBQUksaUJBQWlCLHFCQUFxQjtBQUMxQyxVQUFJLDJCQUEyQiwrQkFBK0I7QUFDOUQsZUFBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLFFBQVEsS0FBSztBQUNwQyxZQUFJLE1BQU0sS0FBSyxDQUFDO0FBQ2hCLFlBQUksQ0FBQyxPQUFPLFFBQVEsR0FBRyxLQUFLLEVBQUUsY0FBYyxPQUFPLFlBQVksR0FBRyxJQUFJO0FBQ3BFLHlCQUFlLFFBQVEsS0FBSyx5QkFBeUIsUUFBUSxHQUFHLENBQUM7QUFBQSxRQUNuRTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUE7QUFBQTs7O0FDaEJBO0FBQUEsMkZBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksUUFBUTtBQUNaLFFBQUksYUFBYTtBQUVqQixRQUFJLGNBQWM7QUFFbEIsUUFBSSxXQUFXLFNBQVUsU0FBUyxXQUFXO0FBQzNDLFVBQUksUUFBUSxLQUFLLFVBQVUsT0FBTyxDQUFDO0FBQ25DLGFBQU8sVUFBVSxXQUFXLE9BQ3hCLFVBQVUsU0FBUyxRQUNuQixXQUFXLFNBQVMsSUFBSSxNQUFNLFNBQVMsSUFDdkMsQ0FBQyxDQUFDO0FBQUEsSUFDUjtBQUVBLFFBQUksWUFBWSxTQUFTLFlBQVksU0FBVSxRQUFRO0FBQ3JELGFBQU8sT0FBTyxNQUFNLEVBQUUsUUFBUSxhQUFhLEdBQUcsRUFBRSxZQUFZO0FBQUEsSUFDOUQ7QUFFQSxRQUFJLE9BQU8sU0FBUyxPQUFPLENBQUM7QUFDNUIsUUFBSSxTQUFTLFNBQVMsU0FBUztBQUMvQixRQUFJLFdBQVcsU0FBUyxXQUFXO0FBRW5DLElBQUFBLFFBQU8sVUFBVTtBQUFBO0FBQUE7OztBQ3RCakI7QUFBQSx3RkFBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSUMsY0FBYTtBQUNqQixRQUFJLDJCQUEyQiw2Q0FBMkQ7QUFDMUYsUUFBSSw4QkFBOEI7QUFDbEMsUUFBSSxnQkFBZ0I7QUFDcEIsUUFBSSx1QkFBdUI7QUFDM0IsUUFBSSw0QkFBNEI7QUFDaEMsUUFBSSxXQUFXO0FBaUJmLElBQUFELFFBQU8sVUFBVSxTQUFVLFNBQVMsUUFBUTtBQUMxQyxVQUFJLFNBQVMsUUFBUTtBQUNyQixVQUFJLFNBQVMsUUFBUTtBQUNyQixVQUFJLFNBQVMsUUFBUTtBQUNyQixVQUFJLFFBQVEsUUFBUSxLQUFLLGdCQUFnQixnQkFBZ0I7QUFDekQsVUFBSSxRQUFRO0FBQ1YsaUJBQVNDO0FBQUEsTUFDWCxXQUFXLFFBQVE7QUFDakIsaUJBQVNBLFlBQVcsTUFBTSxLQUFLLHFCQUFxQixRQUFRLENBQUMsQ0FBQztBQUFBLE1BQ2hFLE9BQU87QUFDTCxpQkFBU0EsWUFBVyxNQUFNLEtBQUtBLFlBQVcsTUFBTSxFQUFFO0FBQUEsTUFDcEQ7QUFDQSxVQUFJLE9BQVEsTUFBSyxPQUFPLFFBQVE7QUFDOUIseUJBQWlCLE9BQU8sR0FBRztBQUMzQixZQUFJLFFBQVEsZ0JBQWdCO0FBQzFCLHVCQUFhLHlCQUF5QixRQUFRLEdBQUc7QUFDakQsMkJBQWlCLGNBQWMsV0FBVztBQUFBLFFBQzVDLE1BQU8sa0JBQWlCLE9BQU8sR0FBRztBQUNsQyxpQkFBUyxTQUFTLFNBQVMsTUFBTSxVQUFVLFNBQVMsTUFBTSxPQUFPLEtBQUssUUFBUSxNQUFNO0FBRXBGLFlBQUksQ0FBQyxVQUFVLG1CQUFtQixRQUFXO0FBQzNDLGNBQUksT0FBTyxrQkFBa0IsT0FBTyxlQUFnQjtBQUNwRCxvQ0FBMEIsZ0JBQWdCLGNBQWM7QUFBQSxRQUMxRDtBQUVBLFlBQUksUUFBUSxRQUFTLGtCQUFrQixlQUFlLE1BQU87QUFDM0Qsc0NBQTRCLGdCQUFnQixRQUFRLElBQUk7QUFBQSxRQUMxRDtBQUNBLHNCQUFjLFFBQVEsS0FBSyxnQkFBZ0IsT0FBTztBQUFBLE1BQ3BEO0FBQUEsSUFDRjtBQUFBO0FBQUE7OztBQ3REQTtBQUFBLDBGQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLFVBQVU7QUFLZCxJQUFBQSxRQUFPLFVBQVUsTUFBTSxXQUFXLFNBQVMsUUFBUSxVQUFVO0FBQzNELGFBQU8sUUFBUSxRQUFRLE1BQU07QUFBQSxJQUMvQjtBQUFBO0FBQUE7OztBQ1JBO0FBQUEsdUdBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksa0JBQWtCO0FBRXRCLFFBQUksZ0JBQWdCLGdCQUFnQixhQUFhO0FBQ2pELFFBQUksT0FBTyxDQUFDO0FBRVosU0FBSyxhQUFhLElBQUk7QUFFdEIsSUFBQUEsUUFBTyxVQUFVLE9BQU8sSUFBSSxNQUFNO0FBQUE7QUFBQTs7O0FDUmxDO0FBQUEseUZBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksd0JBQXdCO0FBQzVCLFFBQUksYUFBYTtBQUNqQixRQUFJLGFBQWE7QUFDakIsUUFBSSxrQkFBa0I7QUFFdEIsUUFBSSxnQkFBZ0IsZ0JBQWdCLGFBQWE7QUFDakQsUUFBSSxVQUFVO0FBR2QsUUFBSSxvQkFBb0IsV0FBVyw0QkFBWTtBQUFFLGFBQU87QUFBQSxJQUFXLEdBQUUsQ0FBQyxNQUFNO0FBRzVFLFFBQUksU0FBUyxTQUFVLElBQUksS0FBSztBQUM5QixVQUFJO0FBQ0YsZUFBTyxHQUFHLEdBQUc7QUFBQSxNQUNmLFNBQVMsT0FBTztBQUFBLE1BQWM7QUFBQSxJQUNoQztBQUdBLElBQUFBLFFBQU8sVUFBVSx3QkFBd0IsYUFBYSxTQUFVLElBQUk7QUFDbEUsVUFBSSxHQUFHLEtBQUs7QUFDWixhQUFPLE9BQU8sU0FBWSxjQUFjLE9BQU8sT0FBTyxTQUVsRCxRQUFRLE1BQU0sT0FBTyxJQUFJLFFBQVEsRUFBRSxHQUFHLGFBQWEsTUFBTSxXQUFXLE1BRXBFLG9CQUFvQixXQUFXLENBQUMsS0FFL0IsU0FBUyxXQUFXLENBQUMsT0FBTyxZQUFZLFdBQVcsRUFBRSxNQUFNLElBQUksY0FBYztBQUFBLElBQ3BGO0FBQUE7QUFBQTs7O0FDN0JBO0FBQUEsMkZBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksVUFBVTtBQUVkLFFBQUksVUFBVTtBQUVkLElBQUFBLFFBQU8sVUFBVSxTQUFVLFVBQVU7QUFDbkMsVUFBSSxRQUFRLFFBQVEsTUFBTSxTQUFVLE9BQU0sSUFBSSxVQUFVLDJDQUEyQztBQUNuRyxhQUFPLFFBQVEsUUFBUTtBQUFBLElBQ3pCO0FBQUE7QUFBQTs7O0FDUkE7QUFBQSxpR0FBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxjQUFjO0FBQ2xCLFFBQUksdUJBQXVCO0FBQzNCLFFBQUksMkJBQTJCO0FBRS9CLElBQUFBLFFBQU8sVUFBVSxTQUFVLFFBQVEsS0FBSyxPQUFPO0FBQzdDLFVBQUksWUFBYSxzQkFBcUIsRUFBRSxRQUFRLEtBQUsseUJBQXlCLEdBQUcsS0FBSyxDQUFDO0FBQUEsVUFDbEYsUUFBTyxHQUFHLElBQUk7QUFBQSxJQUNyQjtBQUFBO0FBQUE7OztBQ1JBO0FBQUEsbUdBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksY0FBYztBQUNsQixRQUFJLFNBQVM7QUFFYixRQUFJLGVBQWU7QUFDbkIsUUFBSSxZQUFZO0FBQ2hCLFFBQUksZUFBZSxPQUFPO0FBQzFCLFFBQUksS0FBSyxZQUFZLEdBQUcsTUFBTTtBQUM5QixRQUFJLFFBQVEsWUFBWSxHQUFHLEtBQUs7QUFDaEMsUUFBSSxPQUFPLFlBQVksSUFBSSxJQUFJO0FBRS9CLFFBQUksYUFBYTtBQUFBLE1BQ2YsT0FBTztBQUFBLE1BQ1AsUUFBUTtBQUFBLE1BQ1IsT0FBTztBQUFBLE1BQ1AsT0FBTztBQUFBLE1BQ1AsT0FBTztBQUFBLE1BQ1AsT0FBTztBQUFBLE1BQ1AsT0FBTztBQUFBLE1BQ1AsT0FBTztBQUFBLElBQ1Q7QUFFQSxRQUFJLGtCQUFrQjtBQUV0QixRQUFJLHFCQUFxQjtBQUV6QixJQUFBQSxRQUFPLFVBQVUsU0FBVSxRQUFRLEdBQUc7QUFDcEMsVUFBSSxlQUFlO0FBQ25CLFVBQUksUUFBUTtBQUNaLGFBQU8sSUFBSSxPQUFPLFFBQVE7QUFDeEIsWUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDO0FBQ3RCLFlBQUksUUFBUSxNQUFNO0FBQ2hCLGNBQUksV0FBVyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUM7QUFDckMsY0FBSSxPQUFPLFlBQVksUUFBUSxHQUFHO0FBQ2hDLHFCQUFTLFdBQVcsUUFBUTtBQUM1QixpQkFBSztBQUFBLFVBQ1AsV0FBVyxhQUFhLE9BQU87QUFDN0IsaUJBQUs7QUFDTCxnQkFBSSxnQkFBZ0IsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDO0FBQzFDLGdCQUFJLENBQUMsS0FBSyxpQkFBaUIsYUFBYSxFQUFHLE9BQU0sSUFBSSxhQUFhLDRCQUE0QixDQUFDO0FBQy9GLHFCQUFTLGFBQWEsVUFBVSxlQUFlLEVBQUUsQ0FBQztBQUNsRCxpQkFBSztBQUFBLFVBQ1AsTUFBTyxPQUFNLElBQUksYUFBYSwrQkFBK0IsV0FBVyxHQUFHO0FBQUEsUUFDN0UsV0FBVyxRQUFRLEtBQUs7QUFDdEIseUJBQWU7QUFDZjtBQUNBO0FBQUEsUUFDRixPQUFPO0FBQ0wsY0FBSSxLQUFLLG9CQUFvQixHQUFHLEVBQUcsT0FBTSxJQUFJLGFBQWEsaURBQWlELENBQUM7QUFDNUcsbUJBQVM7QUFDVDtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQ0EsVUFBSSxhQUFjLE9BQU0sSUFBSSxhQUFhLDZCQUE2QixDQUFDO0FBQ3ZFLGFBQU8sRUFBRSxPQUFjLEtBQUssRUFBRTtBQUFBLElBQ2hDO0FBQUE7QUFBQTs7O0FDdkRBO0FBQUE7QUFBQTtBQUNBLFFBQUksSUFBSTtBQUNSLFFBQUksY0FBYztBQUNsQixRQUFJQyxjQUFhO0FBQ2pCLFFBQUksYUFBYTtBQUNqQixRQUFJLGNBQWM7QUFDbEIsUUFBSSxPQUFPO0FBQ1gsUUFBSSxhQUFhO0FBQ2pCLFFBQUksV0FBVztBQUNmLFFBQUksVUFBVTtBQUNkLFFBQUksU0FBUztBQUNiLFFBQUksV0FBVztBQUNmLFFBQUksb0JBQW9CO0FBQ3hCLFFBQUksaUJBQWlCO0FBQ3JCLFFBQUksUUFBUTtBQUNaLFFBQUksa0JBQWtCO0FBQ3RCLFFBQUksZ0JBQWdCO0FBRXBCLFFBQUlDLFFBQU9ELFlBQVc7QUFDdEIsUUFBSSxTQUFTQSxZQUFXO0FBQ3hCLFFBQUlFLGVBQWNGLFlBQVc7QUFDN0IsUUFBSSxjQUFjQyxTQUFRQSxNQUFLO0FBQy9CLFFBQUksMEJBQTBCLFdBQVcsVUFBVSxNQUFNO0FBRXpELFFBQUksMkJBQTJCLE9BQU87QUFDdEMsUUFBSSxLQUFLLFlBQVksR0FBRyxNQUFNO0FBQzlCLFFBQUksUUFBUSxZQUFZLEdBQUcsS0FBSztBQUNoQyxRQUFJLE9BQU8sWUFBWSxJQUFJLElBQUk7QUFDL0IsUUFBSSxPQUFPLFlBQVksQ0FBQyxFQUFFLElBQUk7QUFFOUIsUUFBSSxXQUFXO0FBQ2YsUUFBSSxvQkFBb0I7QUFDeEIsUUFBSSxrQkFBa0I7QUFDdEIsUUFBSSxnQkFBZ0I7QUFFcEIsUUFBSSxZQUFZO0FBQ2hCLFFBQUksU0FBUztBQUViLFFBQUksU0FBUyxTQUFVLFFBQVEsU0FBUztBQUN0QyxlQUFTLFNBQVMsTUFBTTtBQUN4QixVQUFJLFVBQVUsSUFBSSxRQUFRLFFBQVEsR0FBRyxFQUFFO0FBQ3ZDLFVBQUksT0FBTyxRQUFRLE1BQU07QUFDekIsVUFBSSxRQUFRLEtBQUs7QUFDakIsVUFBSSxXQUFXLFFBQVEsS0FBSyxlQUFlLEtBQUssR0FBRztBQUNuRCxVQUFJLFdBQVcsT0FBTyxRQUFRO0FBQzVCLGNBQU0sSUFBSUMsYUFBWSxrQ0FBa0MsR0FBRyxRQUFRLFFBQVEsSUFBSSxpQ0FBaUMsUUFBUTtBQUFBLE1BQzFIO0FBQ0EsYUFBTyxXQUFXLE9BQU8sSUFBSSxZQUFZLEVBQUUsSUFBSSxNQUFNLEdBQUcsSUFBSSxTQUFTLElBQUksSUFBSTtBQUFBLElBQy9FO0FBRUEsUUFBSSxjQUFjLFNBQVUsUUFBUSxNQUFNLFNBQVMsTUFBTTtBQUN2RCxVQUFJLE1BQU0sT0FBTyxJQUFJO0FBQ3JCLFVBQUksYUFBYSxRQUFRLFFBQVEsS0FBSztBQUN0QyxVQUFJLFVBQVUsY0FBYyxPQUFPLEtBQUssVUFBVSxXQUFXLEVBQUUsUUFBUSxLQUFLLE9BQU8sSUFBSSxDQUFDO0FBQ3hGLFVBQUksbUJBQW1CLE1BQU0sS0FBSyxHQUFHO0FBQ3JDLFVBQUksU0FBUyxHQUFHLEdBQUc7QUFDakIsWUFBSSxjQUFjLFFBQVEsR0FBRztBQUM3QixZQUFJLFFBQVEsYUFBYSxLQUFLLFFBQVEsY0FBYyxDQUFDLElBQUksQ0FBQztBQUMxRCxZQUFJLGFBQWE7QUFDZiw4QkFBb0IsTUFBTTtBQUMxQixnQkFBTSxrQkFBa0IsR0FBRztBQUMzQixlQUFLLElBQUksR0FBRyxJQUFJLEtBQUssS0FBSztBQUN4QixnQ0FBb0IsS0FBSyxHQUFHLFlBQVksS0FBSyxLQUFLLEdBQUcsU0FBUyxJQUFJLG9CQUFvQixNQUFNLENBQUMsSUFBSSxNQUFTLENBQUM7QUFBQSxVQUM3RztBQUFBLFFBQ0YsT0FBTztBQUNMLGlCQUFPLHdCQUF3QixHQUFHO0FBQ2xDLGdCQUFNLGtCQUFrQixJQUFJO0FBQzVCLGVBQUssSUFBSSxHQUFHLElBQUksS0FBSyxLQUFLO0FBQ3hCLGdCQUFJLEtBQUssQ0FBQztBQUNWLGdDQUFvQixLQUFLLEdBQUcsWUFBWSxLQUFLLEdBQUcsU0FBUyxPQUFPLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLE1BQVMsQ0FBQztBQUFBLFVBQ25HO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFDQSxhQUFPLEtBQUssU0FBUyxRQUFRLE1BQU0sS0FBSyxPQUFPO0FBQUEsSUFDakQ7QUFFQSxRQUFJLHNCQUFzQixTQUFVLFFBQVEsS0FBSyxPQUFPO0FBQ3RELFVBQUksYUFBYTtBQUNmLFlBQUksYUFBYSx5QkFBeUIsUUFBUSxHQUFHO0FBQ3JELFlBQUksY0FBYyxDQUFDLFdBQVcsYUFBYztBQUFBLE1BQzlDO0FBQ0EsVUFBSSxVQUFVLE9BQVcsUUFBTyxPQUFPLEdBQUc7QUFBQSxVQUNyQyxnQkFBZSxRQUFRLEtBQUssS0FBSztBQUFBLElBQ3hDO0FBRUEsUUFBSSxPQUFPLFNBQVUsT0FBTyxLQUFLLFFBQVEsT0FBTztBQUM5QyxXQUFLLFFBQVE7QUFDYixXQUFLLE1BQU07QUFDWCxXQUFLLFNBQVM7QUFDZCxXQUFLLFFBQVE7QUFBQSxJQUNmO0FBRUEsUUFBSSxVQUFVLFNBQVUsUUFBUSxPQUFPO0FBQ3JDLFdBQUssU0FBUztBQUNkLFdBQUssUUFBUTtBQUFBLElBQ2Y7QUFHQSxZQUFRLFlBQVk7QUFBQSxNQUNsQixNQUFNLFNBQVUsV0FBVztBQUN6QixlQUFPLElBQUksUUFBUSxLQUFLLFFBQVEsU0FBUztBQUFBLE1BQzNDO0FBQUEsTUFDQSxPQUFPLFdBQVk7QUFDakIsWUFBSSxTQUFTLEtBQUs7QUFDbEIsWUFBSSxJQUFJLEtBQUssS0FBSyxlQUFlLEtBQUssS0FBSztBQUMzQyxZQUFJLE9BQU8sS0FBSyxLQUFLLENBQUM7QUFDdEIsWUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDO0FBQ3RCLFlBQUksS0FBSyxpQkFBaUIsR0FBRyxFQUFHLFFBQU8sS0FBSyxPQUFPO0FBQ25ELGdCQUFRLEtBQUs7QUFBQSxVQUNYLEtBQUs7QUFDSCxtQkFBTyxLQUFLLE9BQU87QUFBQSxVQUNyQixLQUFLO0FBQ0gsbUJBQU8sS0FBSyxNQUFNO0FBQUEsVUFDcEIsS0FBSztBQUNILG1CQUFPLEtBQUssT0FBTztBQUFBLFVBQ3JCLEtBQUs7QUFDSCxtQkFBTyxLQUFLLFFBQVEsSUFBSTtBQUFBLFVBQzFCLEtBQUs7QUFDSCxtQkFBTyxLQUFLLFFBQVEsS0FBSztBQUFBLFVBQzNCLEtBQUs7QUFDSCxtQkFBTyxLQUFLLFFBQVEsSUFBSTtBQUFBLFFBQzVCO0FBQUUsY0FBTSxJQUFJQSxhQUFZLDRCQUE0QixNQUFNLFdBQVcsQ0FBQztBQUFBLE1BQ3hFO0FBQUEsTUFDQSxNQUFNLFNBQVUsTUFBTSxPQUFPLE9BQU8sS0FBSyxPQUFPO0FBQzlDLGVBQU8sSUFBSSxLQUFLLE9BQU8sS0FBSyxPQUFPLE9BQU8sTUFBTSxLQUFLLFFBQVEsT0FBTyxHQUFHLEdBQUcsS0FBSztBQUFBLE1BQ2pGO0FBQUEsTUFDQSxRQUFRLFdBQVk7QUFDbEIsWUFBSSxTQUFTLEtBQUs7QUFDbEIsWUFBSSxJQUFJLEtBQUssUUFBUTtBQUNyQixZQUFJLGdCQUFnQjtBQUNwQixZQUFJLFNBQVMsQ0FBQztBQUNkLFlBQUksUUFBUSxDQUFDO0FBQ2IsWUFBSSxTQUFTO0FBQ2IsZUFBTyxJQUFJLE9BQU8sUUFBUTtBQUN4QixjQUFJLEtBQUssTUFBTSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7QUFDNUIsY0FBSSxHQUFHLFFBQVEsQ0FBQyxNQUFNLE9BQU8sQ0FBQyxlQUFlO0FBQzNDO0FBQ0EscUJBQVM7QUFDVDtBQUFBLFVBQ0Y7QUFFQSxjQUFJLFNBQVMsS0FBSyxLQUFLLENBQUMsRUFBRSxPQUFPO0FBQ2pDLGNBQUksTUFBTSxPQUFPO0FBQ2pCLGNBQUksT0FBTztBQUNYLGNBQUksS0FBSyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSTtBQUUzQixjQUFJLEtBQUssS0FBSyxlQUFlLENBQUM7QUFDOUIsbUJBQVMsS0FBSyxLQUFLLENBQUMsRUFBRSxNQUFNO0FBQzVCLHlCQUFlLE9BQU8sS0FBSyxNQUFNO0FBQ2pDLHlCQUFlLFFBQVEsS0FBSyxPQUFPLEtBQUs7QUFDeEMsY0FBSSxLQUFLLE1BQU0sQ0FBQyxLQUFLLEdBQUcsR0FBRyxPQUFPLEdBQUc7QUFDckMsY0FBSSxNQUFNLEdBQUcsUUFBUSxDQUFDO0FBQ3RCLGNBQUksUUFBUSxLQUFLO0FBQ2YsNEJBQWdCO0FBQ2hCO0FBQUEsVUFDRixXQUFXLFFBQVEsS0FBSztBQUN0QjtBQUNBLHFCQUFTO0FBQ1Q7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUNBLFlBQUksQ0FBQyxPQUFRLE9BQU0sSUFBSUEsYUFBWSw2QkFBNkIsQ0FBQztBQUNqRSxlQUFPLEtBQUssS0FBSyxRQUFRLFFBQVEsS0FBSyxPQUFPLEdBQUcsS0FBSztBQUFBLE1BQ3ZEO0FBQUEsTUFDQSxPQUFPLFdBQVk7QUFDakIsWUFBSSxTQUFTLEtBQUs7QUFDbEIsWUFBSSxJQUFJLEtBQUssUUFBUTtBQUNyQixZQUFJLGdCQUFnQjtBQUNwQixZQUFJLFFBQVEsQ0FBQztBQUNiLFlBQUksUUFBUSxDQUFDO0FBQ2IsWUFBSSxTQUFTO0FBQ2IsZUFBTyxJQUFJLE9BQU8sUUFBUTtBQUN4QixjQUFJLEtBQUssS0FBSyxlQUFlLENBQUM7QUFDOUIsY0FBSSxHQUFHLFFBQVEsQ0FBQyxNQUFNLE9BQU8sQ0FBQyxlQUFlO0FBQzNDO0FBQ0EscUJBQVM7QUFDVDtBQUFBLFVBQ0Y7QUFDQSxjQUFJLFNBQVMsS0FBSyxLQUFLLENBQUMsRUFBRSxNQUFNO0FBQ2hDLGVBQUssT0FBTyxNQUFNO0FBQ2xCLGVBQUssT0FBTyxPQUFPLEtBQUs7QUFDeEIsY0FBSSxLQUFLLE1BQU0sQ0FBQyxLQUFLLEdBQUcsR0FBRyxPQUFPLEdBQUc7QUFDckMsY0FBSSxHQUFHLFFBQVEsQ0FBQyxNQUFNLEtBQUs7QUFDekIsNEJBQWdCO0FBQ2hCO0FBQUEsVUFDRixXQUFXLEdBQUcsUUFBUSxDQUFDLE1BQU0sS0FBSztBQUNoQztBQUNBLHFCQUFTO0FBQ1Q7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUNBLFlBQUksQ0FBQyxPQUFRLE9BQU0sSUFBSUEsYUFBWSw0QkFBNEIsQ0FBQztBQUNoRSxlQUFPLEtBQUssS0FBSyxRQUFRLE9BQU8sS0FBSyxPQUFPLEdBQUcsS0FBSztBQUFBLE1BQ3REO0FBQUEsTUFDQSxRQUFRLFdBQVk7QUFDbEIsWUFBSSxRQUFRLEtBQUs7QUFDakIsWUFBSSxTQUFTLGdCQUFnQixLQUFLLFFBQVEsS0FBSyxRQUFRLENBQUM7QUFDeEQsZUFBTyxLQUFLLEtBQUssV0FBVyxPQUFPLE9BQU8sT0FBTyxPQUFPLEdBQUc7QUFBQSxNQUM3RDtBQUFBLE1BQ0EsUUFBUSxXQUFZO0FBQ2xCLFlBQUksU0FBUyxLQUFLO0FBQ2xCLFlBQUksYUFBYSxLQUFLO0FBQ3RCLFlBQUksSUFBSTtBQUNSLFlBQUksR0FBRyxRQUFRLENBQUMsTUFBTSxJQUFLO0FBQzNCLFlBQUksR0FBRyxRQUFRLENBQUMsTUFBTSxJQUFLO0FBQUEsaUJBQ2xCLEtBQUssbUJBQW1CLEdBQUcsUUFBUSxDQUFDLENBQUMsRUFBRyxLQUFJLEtBQUssS0FBSyxVQUFVLElBQUksQ0FBQztBQUFBLFlBQ3pFLE9BQU0sSUFBSUEsYUFBWSxnQ0FBZ0MsQ0FBQztBQUM1RCxZQUFJLEdBQUcsUUFBUSxDQUFDLE1BQU0sS0FBSztBQUN6QixjQUFJLHFCQUFxQixJQUFJO0FBQzdCLGNBQUksS0FBSyxLQUFLLFVBQVUsa0JBQWtCO0FBQzFDLGNBQUksdUJBQXVCLEVBQUcsT0FBTSxJQUFJQSxhQUFZLDJDQUEyQyxDQUFDO0FBQUEsUUFDbEc7QUFDQSxZQUFJLEdBQUcsUUFBUSxDQUFDLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEtBQUs7QUFDbEQ7QUFDQSxjQUFJLEdBQUcsUUFBUSxDQUFDLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxNQUFNLElBQUs7QUFDcEQsY0FBSSxxQkFBcUI7QUFDekIsY0FBSSxLQUFLLEtBQUssVUFBVSxDQUFDO0FBQ3pCLGNBQUksdUJBQXVCLEVBQUcsT0FBTSxJQUFJQSxhQUFZLGlEQUFpRCxDQUFDO0FBQUEsUUFDeEc7QUFDQSxlQUFPLEtBQUssS0FBSyxXQUFXLE9BQU8sTUFBTSxRQUFRLFlBQVksQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDO0FBQUEsTUFDakY7QUFBQSxNQUNBLFNBQVMsU0FBVSxPQUFPO0FBQ3hCLFlBQUksVUFBVSxLQUFLO0FBQ25CLFlBQUksUUFBUSxLQUFLO0FBQ2pCLFlBQUksV0FBVyxRQUFRLFFBQVE7QUFDL0IsWUFBSSxNQUFNLEtBQUssUUFBUSxPQUFPLFFBQVEsTUFBTSxRQUFTLE9BQU0sSUFBSUEsYUFBWSwrQkFBK0IsS0FBSztBQUMvRyxlQUFPLEtBQUssS0FBSyxXQUFXLE9BQU8sT0FBTyxRQUFRO0FBQUEsTUFDcEQ7QUFBQSxNQUNBLE1BQU0sU0FBVSxPQUFPLEdBQUc7QUFDeEIsWUFBSSxTQUFTLEtBQUs7QUFDbEIsZUFBTyxJQUFJLE9BQU8sUUFBUSxJQUFLLEtBQUksQ0FBQyxLQUFLLE9BQU8sR0FBRyxRQUFRLENBQUMsQ0FBQyxFQUFHO0FBQ2hFLGVBQU87QUFBQSxNQUNUO0FBQUEsTUFDQSxPQUFPLFNBQVUsT0FBTyxHQUFHO0FBQ3pCLFlBQUksS0FBSyxLQUFLLGVBQWUsQ0FBQztBQUM5QixZQUFJLE1BQU0sR0FBRyxLQUFLLFFBQVEsQ0FBQztBQUMzQixpQkFBUyxJQUFJLEdBQUcsSUFBSSxNQUFNLFFBQVEsSUFBSyxLQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUssUUFBTztBQUNwRSxjQUFNLElBQUlBLGFBQVksNEJBQTRCLE1BQU0sV0FBVyxDQUFDO0FBQUEsTUFDdEU7QUFBQSxJQUNGO0FBRUEsUUFBSSxvQkFBb0IsTUFBTSxXQUFZO0FBQ3hDLFVBQUksWUFBWTtBQUNoQixVQUFJO0FBQ0osa0JBQVksV0FBVyxTQUFVLEtBQUssT0FBTyxTQUFTO0FBQ3BELGlCQUFTLFFBQVE7QUFBQSxNQUNuQixDQUFDO0FBQ0QsYUFBTyxXQUFXO0FBQUEsSUFDcEIsQ0FBQztBQUVELFFBQUksb0JBQW9CLGlCQUFpQixDQUFDLE1BQU0sV0FBWTtBQUUxRCxhQUFPLElBQUksWUFBWSxNQUFPLE1BQU07QUFBQSxJQUN0QyxDQUFDO0FBS0QsTUFBRSxFQUFFLFFBQVEsUUFBUSxNQUFNLE1BQU0sUUFBUSxrQkFBa0IsR0FBRztBQUFBLE1BQzNELE9BQU8sU0FBUyxNQUFNLE1BQU0sU0FBUztBQUNuQyxlQUFPLHFCQUFxQixDQUFDLFdBQVcsT0FBTyxJQUFJLFlBQVksSUFBSSxJQUFJLE9BQU8sTUFBTSxPQUFPO0FBQUEsTUFDN0Y7QUFBQSxJQUNGLENBQUM7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hRQSxJQUFBQyxxQkFBc0I7QUFDdEIsSUFBQUMsYUFBYztBQUNkLElBQUFDLHNCQUF1QjtBQUN2QixJQUFBQyxVQUFXOztBQ1RaLElBQU1DLHFCQUErQixDQUNwQyxTQUNBLFFBQ0EsVUFDQSxXQUNBLHlCQUNBLHNCQUNBLHFCQUNBLDhCQUNBLGVBQUE7QUFFRCxJQUFNQyxpQkFBMkIsQ0FBQyxVQUFVLHVCQUF1QixtQkFBbUI7O0FDWHRGLElBQU1DLGFBQXFCO0FBQzNCLElBQU1DLGtCQUFBLEdBQUFDLE9BQTZCRixZQUFVLFFBQUE7QUFDN0MsSUFBTUcsa0JBQUEsR0FBQUQsT0FBNkJGLFlBQVUsUUFBQTs7QUNEN0MsSUFBQUkscUJBQWtDQyxRQUFBQyxRQUFBLGdCQUFBLEdBQUEsQ0FBQTs7QUNEbEMsSUFBQUMsb0JBQXVCRCxRQUFBLGlCQUFBO0FBRXZCLElBQU1FLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ04sTUFBQSxHQUFLRCxrQkFBQUUsVUFBUztNQUNiQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtJQUNMLENBQUM7SUFDREMsVUFBQSxHQUFTTixrQkFBQUUsVUFBUztNQUNqQkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RHLFdBQUEsR0FBVVAsa0JBQUFFLFVBQVM7TUFDbEJDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztFQUNGO0FBQ0Q7QUFFQSxJQUFNSSxlQUFlUCxnQkFBZ0I7QUFFckMsSUFBTVEsYUFBZ0RDLFNBQVE7QUFDN0QsU0FBT0YsYUFBYUUsR0FBRyxLQUFLQTtBQUM3Qjs7QURuQkEsSUFBTUMsZUFBZUEsQ0FBQztFQUFDQztFQUFXQyxXQUFXaEIsbUNBQUFpQixRQUFBQyxjQUFBbEIsbUJBQUFpQixRQUFBRSxVQUFBLElBQUU7QUFBRyxNQUF5QjtBQUMxRSxRQUFNO0lBQUNDO0VBQUksSUFBSUMsR0FBR0MsT0FBT0MsSUFBSTtBQUM3QixRQUFNQyxLQUFLNUI7QUFDWCxRQUFNNkIsYUFBYSxDQUFDN0IsWUFBQSxHQUFBRSxPQUFlRixZQUFVLEdBQUEsRUFBQUUsT0FBSWlCLFNBQVMsQ0FBQTtBQUUxRCxNQUFJSyxTQUFTLFdBQVc7QUFDdkIsV0FDQ3BCLG1DQUFBaUIsUUFBQUMsY0FBQyxXQUFBO01BQVFNO01BQVFFLFdBQVcsQ0FBQyxHQUFHRCxZQUFZLG1CQUFtQixpQ0FBaUMsU0FBUztJQUFBLEdBQ3ZHVCxRQUNGO0VBRUYsV0FBVyxDQUFDLFVBQVUsVUFBVSxhQUFhLEVBQUVXLFNBQVNQLElBQUksS0FBS1EsU0FBU0MsY0FBYyxnQkFBZ0IsR0FBRztBQUMxRyxXQUNDN0IsbUNBQUFpQixRQUFBQyxjQUFDLE1BQUE7TUFBR007TUFBUUUsV0FBVyxDQUFDLEdBQUdELFlBQVksU0FBUztJQUFBLEdBQzlDVCxRQUNGO0VBRUY7QUFFQSxTQUNDaEIsbUNBQUFpQixRQUFBQyxjQUFDLE9BQUE7SUFBSU07SUFBUUUsV0FBVyxDQUFDLEdBQUdELFlBQVksU0FBUztFQUFBLEdBQy9DVCxRQUNGO0FBRUY7QUFPQSxJQUFNYyxZQUFZQSxDQUFDO0VBQUNDO0VBQU1DO0FBQWEsTUFBc0I7QUFDNUQsUUFBTUMsT0FDTEYsU0FBUyxVQUFVbkIsV0FBVyxVQUFVLElBQUlBLFdBQVcsR0FBRyxJQUFJb0IsZ0JBQWlCQSxrQkFBQSxRQUFBQSxrQkFBQSxTQUFBQSxnQkFBaUI7QUFFakcsU0FDQ2hDLG1DQUFBaUIsUUFBQUMsY0FBQWxCLG1CQUFBaUIsUUFBQUUsVUFBQSxNQUNDbkIsbUNBQUFpQixRQUFBQyxjQUFDLFFBQUE7SUFBS1EsV0FBVyxDQUFDN0IsaUJBQUEsR0FBQUMsT0FBb0JELGlCQUFlLEdBQUEsRUFBQUMsT0FBSWlDLElBQUksQ0FBQTtJQUFLLGNBQVlFO0VBQUEsQ0FBTSxHQUNwRmpDLG1DQUFBaUIsUUFBQUMsY0FBQyxRQUFBO0lBQUtRLFdBQVczQjtFQUFBLEdBQWtCa0MsSUFBSyxDQUN6QztBQUVGO0FBUUEsSUFBTUMsYUFBYUEsQ0FBQztFQUFDSDtFQUFNaEI7RUFBV2lCO0FBQWEsTUFDbERoQyxtQ0FBQWlCLFFBQUFDLGNBQUNKLGNBQUE7RUFBYUM7QUFBQSxHQUNiZixtQ0FBQWlCLFFBQUFDLGNBQUNZLFdBQUE7RUFBVUM7RUFBWUM7QUFBQSxDQUE4QixDQUN0RDs7QUUzREQsSUFBQUcscUJBQWtCbEMsUUFBQUMsUUFBQSxnQkFBQSxHQUFBLENBQUE7QUFFbEIsSUFBTWtDLGFBQWFBLENBQUM7RUFBQ0w7RUFBTUM7RUFBZWpCO0FBQVMsTUFBNkI7QUFDL0UsTUFBSSxDQUFDQSxhQUFhLENBQUNnQixRQUFRLENBQUNDLGVBQWU7QUFDMUM7RUFDRDtBQUVBLFFBQU1LLGFBQWFULFNBQVNDLGNBQW1DdkMsa0JBQWtCO0FBQ2pGLE1BQUksQ0FBQytDLFlBQVk7QUFDaEI7RUFDRDtBQUVBQSxhQUFXQyxRQUFRSCxtQ0FBQWxCLFFBQUFDLGNBQUNnQixZQUFBO0lBQVduQjtJQUFzQmdCO0lBQVlDO0VBQUEsQ0FBOEIsQ0FBRTtBQUNsRzs7QUNmQSxJQUFNTywyQkFBMkJBLE1BQU07QUFDdEMsUUFBTTtJQUFDQztFQUFjLElBQUluQixHQUFHQyxPQUFPQyxJQUFJO0FBRXZDLE1BQUksQ0FBQyxXQUFXLFNBQVMsT0FBTyxFQUFFSSxTQUFTYSxjQUFjLEdBQUc7QUFDM0QsV0FBTztNQUNOQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtJQUNMO0VBQ0QsV0FBVyxDQUFDLE9BQU8sRUFBRXRRLFNBQVNhLGNBQWMsR0FBRztBQUM5QyxXQUFPO01BQ05DLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO0lBQ0w7RUFDRCxXQUFXLENBQUMsU0FBUyxPQUFPLEVBQUV0USxTQUFTYSxjQUFjLEdBQUc7QUFDdkQsV0FBTztNQUNOQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7TUFDSkMsSUFBSTtJQUNMO0VBQ0Q7QUFFQSxTQUFPO0lBQ054UCxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElBQUk7SUFDSkMsSUFBSTtJQUNKQyxJQUFJO0lBQ0pDLElB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QUFFQSxRQUFNRyxXQUFtQixJQUFJalcsR0FBR2tXLE1BQU1GLFVBQVUsRUFBRUcsT0FBTztBQUN6RCxRQUFNQyx1QkFBK0IsSUFBSXBXLEdBQUdrVyxNQUFNdEQsb0JBQTRCelUsbUJBQW1CLEVBQUVnWSxPQUFPO0FBQzFHLE1BQUlGLGFBQWFHLHNCQUFzQjtBQUN0QztFQUNEO0FBRUEsT0FBS2IsV0FBVztBQUNqQixHQUFHOyIsCiAgIm5hbWVzIjogWyJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJ2ZXJzaW9uIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiU3ltYm9sIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiZG9jdW1lbnQiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJUeXBlRXJyb3IiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiSlNPTiIsICJTeW50YXhFcnJvciIsICJtb3VudFBvaW50U2VsZWN0b3IiLCAic3RvcmFnZUtleSIsICJ1c2VyTmFtZVNwYWNlTnVtYmVyIiwgInZlcnNpb24iLCAiU1lTVEVNX1NDUklQVF9MSVNUIiwgIldFQk1BU1RFUl9MSVNUIiwgIkNMQVNTX05BTUUiLCAiQ0xBU1NfTkFNRV9JQ09OIiwgImNvbmNhdCIsICJDTEFTU19OQU1FX1RFWFQiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgIl9fdG9FU00iLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiemgiLCAiVW5rbm93biIsICJMb2NhdGlvbiIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiRm9vdGVyTm90aWNlIiwgInNwYW5DbGFzcyIsICJjaGlsZHJlbiIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiRnJhZ21lbnQiLCAic2tpbiIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImlkIiwgImNsYXNzTmFtZXMiLCAiY2xhc3NOYW1lIiwgImluY2x1ZGVzIiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiSW5kaWNhdG9yIiwgImljb24iLCAiaW5kaWNhdG9yVGV4dCIsICJ0ZXh0IiwgIkZvb3Rlckljb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImFwcGVuZEljb24iLCAibW91bnRQb2ludCIsICJwcmVwZW5kIiwgImdldENvdW50cnlPckFyZWFOYW1lTGlzdCIsICJ3Z1VzZXJMYW5ndWFnZSIsICJBRiIsICJBWCIsICJBTCIsICJEWiIsICJBUyIsICJBRCIsICJBTyIsICJBSSIsICJBUSIsICJBRyIsICJBUiIsICJBTSIsICJBVyIsICJBVSIsICJBVCIsICJBWiIsICJCUyIsICJCSCIsICJCRCIsICJCQiIsICJCWSIsICJCRSIsICJCWiIsICJCSiIsICJCTSIsICJCVCIsICJCTyIsICJCUSIsICJCQSIsICJCVyIsICJCViIsICJCUiIsICJJTyIsICJCTiIsICJCRyIsICJCRiIsICJCSSIsICJDViIsICJLSCIsICJDTSIsICJDQSIsICJLWSIsICJDRiIsICJURCIsICJDTCIsICJDTiIsICJDWCIsICJDQyIsICJDTyIsICJLTSIsICJDRyIsICJDRCIsICJDSyIsICJDUiIsICJDSSIsICJIUiIsICJDVSIsICJDVyIsICJDWSIsICJDWiIsICJESyIsICJESiIsICJETSIsICJETyIsICJFQyIsICJFRyIsICJTViIsICJHUSIsICJFUiIsICJFRSIsICJTWiIsICJFVCIsICJGSyIsICJGTyIsICJGSiIsICJGSSIsICJGUiIsICJHRiIsICJQRiIsICJURiIsICJHQSIsICJHTSIsICJHRSIsICJERSIsICJHSCIsICJHSSIsICJHUiIsICJHTCIsICJHRCIsICJHUCIsICJHVSIsICJHVCIsICJHRyIsICJHTiIsICJHVyIsICJHWSIsICJIVCIsICJITSIsICJWQSIsICJITiIsICJISyIsICJIVSIsICJJUyIsICJJTiIsICJJRCIsICJJUiIsICJJUSIsICJJRSIsICJJTSIsICJJTCIsICJJVCIsICJKTSIsICJKUCIsICJKRSIsICJKTyIsICJLWiIsICJLRSIsICJLSSIsICJLUCIsICJLUiIsICJLVyIsICJLRyIsICJMQSIsICJMViIsICJMQiIsICJMUyIsICJMUiIsICJMWSIsICJMSSIsICJMVCIsICJMVSIsICJNTyIsICJNRyIsICJNVyIsICJNWSIsICJNViIsICJNTCIsICJNVCIsICJNSCIsICJNUSIsICJNUiIsICJNVSIsICJZVCIsICJNWCIsICJGTSIsICJNRCIsICJNQyIsICJNTiIsICJNRSIsICJNUyIsICJNQSIsICJNWiIsICJNTSIsICJOQSIsICJOUiIsICJOUCIsICJOTCIsICJOQyIsICJOWiIsICJOSSIsICJORSIsICJORyIsICJOVSIsICJORiIsICJNSyIsICJNUCIsICJOTyIsICJPTSIsICJQSyIsICJQVyIsICJQUyIsICJQQSIsICJQRyIsICJQWSIsICJQRSIsICJQSCIsICJQTiIsICJQTCIsICJQVCIsICJQUiIsICJRQSIsICJSRSIsICJSTyIsICJSVSIsICJSVyIsICJCTCIsICJTSCIsICJLTiIsICJMQyIsICJNRiIsICJQTSIsICJWQyIsICJXUyIsICJTTSIsICJTVCIsICJTQSIsICJTTiIsICJSUyIsICJTQyIsICJTTCIsICJTRyIsICJTWCIsICJTSyIsICJTSSIsICJTQiIsICJTTyIsICJaQSIsICJHUyIsICJTUyIsICJFUyIsICJMSyIsICJTRCIsICJTUiIsICJTSiIsICJTRSIsICJDSCIsICJTWSIsICJUVyIsICJUSiIsICJUWiIsICJUSCIsICJUTCIsICJURyIsICJUSyIsICJUTyIsICJUVCIsICJUTiIsICJUUiIsICJUTSIsICJUQyIsICJUViIsICJVRyIsICJVQSIsICJBRSIsICJHQiIsICJVUyIsICJVTSIsICJVWSIsICJVWiIsICJWVSIsICJWRSIsICJWTiIsICJWRyIsICJWSSIsICJXRiIsICJFSCIsICJZRSIsICJaTSIsICJaVyIsICJnZXRSZWdpb25OYW1lTGlzdCIsICJBSCIsICJDUSIsICJHWCIsICJHWiIsICJIQSIsICJIQiIsICJIRSIsICJISSIsICJITCIsICJKTCIsICJKUyIsICJKWCIsICJMTiIsICJOTSIsICJOWCIsICJRSCIsICJYSiIsICJYWiIsICJZTiIsICJaSiIsICJjb3VudHJ5T3JBcmVhTGlzdCIsICJyZWdpb25MaXN0IiwgImdldENvdW50cnlPckFyZWFOYW1lIiwgImdldFJlZ2lvbk5hbWUiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgImFwaSIsICJpbml0TXdBcGkiLCAiZ2V0TG9jYXRpb24iLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJ3Z1JlbGV2YW50VXNlck5hbWUiLCAic3RvcmVQYWdlVGl0bGUiLCAiY291bnRyeU9yQXJlYU5hbWUiLCAicmVnaW9uTmFtZSIsICJzdG9yYWdlIiwgImdldE9iamVjdCIsICJfZGF0YSRxdWVyeSRwYWdlcyQiLCAiX2RhdGEkcXVlcnkiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJ0aXRsZXMiLCAicHJvcCIsICJydnByb3AiLCAicnZzbG90cyIsICJzbWF4YWdlIiwgIm1heGFnZSIsICJkYXRhIiwgImNvbnRlbnQiLCAicGFnZXMiLCAibWlzc2luZyIsICJyZXZpc2lvbnMiLCAic2xvdHMiLCAibWFpbiIsICJyZXNwb25zZSIsICJKU09OIiwgInBhcnNlIiwgImNvdW50cnkiLCAiY291bnRyeU9yQXJlYSIsICJyZWdpb24iLCAibG9jYXRpb24iLCAic2V0T2JqZWN0IiwgImVycm9yIiwgImNvbnNvbGUiLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImFwcGVuZEdlb0ljb24iLCAiX3JlZjIiLCAiX3Jlc3BvbnNlJGNvdW50cnlPckFyIiwgIl9yZXNwb25zZSRyZWdpb25OYW1lIiwgImltcG9ydF9leHRfZ2FkZ2V0NSIsICJhZGRFbGVtZW50IiwgIl9yZWYzIiwgIl9ncm91cHNNYXAkd2dSZWxldmFudCIsICJncm91cHNNYXAiLCAiZ2V0TG9jYWxVc2VyR3JvdXBzIiwgImdyb3VwcyIsICJnZW9Mb2NhdGlvblJlYWRlciIsICJ3Z0FjdGlvbiIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJ3Z1BhZ2VOYW1lIiwgInBhZ2VOYW1lIiwgIlRpdGxlIiwgInRvVGV4dCIsICJyZWxldmFudFVzZXJQYWdlTmFtZSJdCn0K

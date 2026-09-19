/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-noteTA.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/NoteTA}
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
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/global-this.js
var require_global_this = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/global-this.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/fails.js
var require_fails = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/fails.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/descriptors.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/function-bind-native.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/function-call.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/object-property-is-enumerable.js"(exports) {
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

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/create-property-descriptor.js
var require_create_property_descriptor = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/create-property-descriptor.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/function-uncurry-this.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/classof-raw.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/indexed-object.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/is-null-or-undefined.js"(exports, module2) {
    "use strict";
    module2.exports = function(it) {
      return it === null || it === void 0;
    };
  }
});

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/require-object-coercible.js
var require_require_object_coercible = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/require-object-coercible.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/to-indexed-object.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/is-callable.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/is-object.js"(exports, module2) {
    "use strict";
    var isCallable = require_is_callable();
    module2.exports = function(it) {
      return typeof it == "object" ? it !== null : isCallable(it);
    };
  }
});

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/get-built-in.js
var require_get_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/get-built-in.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/object-is-prototype-of.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    module2.exports = uncurryThis({}.isPrototypeOf);
  }
});

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/environment-user-agent.js
var require_environment_user_agent = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/environment-user-agent.js"(exports, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var navigator = globalThis2.navigator;
    var userAgent = navigator && navigator.userAgent;
    module2.exports = userAgent ? String(userAgent) : "";
  }
});

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/environment-v8-version.js
var require_environment_v8_version = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/environment-v8-version.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/symbol-constructor-detection.js
var require_symbol_constructor_detection = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/symbol-constructor-detection.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/use-symbol-as-uid.js"(exports, module2) {
    "use strict";
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    module2.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
  }
});

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/is-symbol.js
var require_is_symbol = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/is-symbol.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/try-to-string.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/a-callable.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/get-method.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/ordinary-to-primitive.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/is-pure.js"(exports, module2) {
    "use strict";
    module2.exports = false;
  }
});

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/define-global-property.js
var require_define_global_property = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/define-global-property.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/shared-store.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/shared.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/to-object.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/has-own-property.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/uid.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/well-known-symbol.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/to-primitive.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/to-property-key.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/document-create-element.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/ie8-dom-define.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/object-get-own-property-descriptor.js"(exports) {
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

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/v8-prototype-define-bug.js
var require_v8_prototype_define_bug = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/v8-prototype-define-bug.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/an-object.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/object-define-property.js"(exports) {
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

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/create-non-enumerable-property.js
var require_create_non_enumerable_property = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/create-non-enumerable-property.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/function-name.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/inspect-source.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/weak-map-basic-detection.js"(exports, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var isCallable = require_is_callable();
    var WeakMap = globalThis2.WeakMap;
    module2.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));
  }
});

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/shared-key.js
var require_shared_key = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/shared-key.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/hidden-keys.js"(exports, module2) {
    "use strict";
    module2.exports = {};
  }
});

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/internal-state.js
var require_internal_state = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/internal-state.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/make-built-in.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/define-built-in.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/math-trunc.js"(exports, module2) {
    "use strict";
    var ceil = Math.ceil;
    var floor = Math.floor;
    module2.exports = Math.trunc || function trunc(x) {
      var n = +x;
      return (n > 0 ? floor : ceil)(n);
    };
  }
});

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/to-integer-or-infinity.js
var require_to_integer_or_infinity = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/to-integer-or-infinity.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/to-absolute-index.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/to-length.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/length-of-array-like.js"(exports, module2) {
    "use strict";
    var toLength = require_to_length();
    module2.exports = function(obj) {
      return toLength(obj.length);
    };
  }
});

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/array-includes.js
var require_array_includes = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/array-includes.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/object-keys-internal.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/enum-bug-keys.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/object-get-own-property-names.js"(exports) {
    "use strict";
    var internalObjectKeys = require_object_keys_internal();
    var enumBugKeys = require_enum_bug_keys();
    var hiddenKeys = enumBugKeys.concat("length", "prototype");
    exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
      return internalObjectKeys(O, hiddenKeys);
    };
  }
});

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/object-get-own-property-symbols.js
var require_object_get_own_property_symbols = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/object-get-own-property-symbols.js"(exports) {
    "use strict";
    exports.f = Object.getOwnPropertySymbols;
  }
});

// node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/own-keys.js
var require_own_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/own-keys.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/copy-constructor-properties.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/is-forced.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/export.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.50.0/node_modules/core-js/internals/map-helpers.js"(exports, module2) {
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
    var $2 = require_export();
    var MapHelpers = require_map_helpers();
    var IS_PURE = require_is_pure();
    var get = MapHelpers.get;
    var has = MapHelpers.has;
    var set = MapHelpers.set;
    $2({ target: "Map", proto: true, real: true, forced: IS_PURE }, {
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
    var $2 = require_export();
    var aCallable = require_a_callable();
    var MapHelpers = require_map_helpers();
    var IS_PURE = require_is_pure();
    var get = MapHelpers.get;
    var has = MapHelpers.has;
    var set = MapHelpers.set;
    $2({ target: "Map", proto: true, real: true, forced: IS_PURE }, {
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

// dist/NoteTA/NoteTA.js
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
//! src/NoteTA/options.json
var portletClass = "x-noteTA-viewer";
var version = "1.0";
//! src/NoteTA/modules/util/ApiRetryFailError.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.JSX"), 1);
//! src/NoteTA/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    ApiRetryFailError: (0, import_ext_gadget.localize)({
      en: "Api calls failed $1 time(s) in a row. Errors: ",
      "zh-hans": "Api 调用连续失败 $1 次，$1 次调用的错误分别为：",
      "zh-hant": "Api 調用連續失敗 $1 次，$1 次調用的錯誤分別為："
    }),
    Loading: (0, import_ext_gadget.localize)({
      en: "Loading...",
      "zh-hans": "正在加载……",
      "zh-hant": "正在載入……"
    }),
    Title: (0, import_ext_gadget.localize)({
      en: "NoteTA",
      "zh-hans": "字词转换",
      "zh-hant": "字詞轉換"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/NoteTA/modules/util/ApiRetryFailError.tsx
var ApiRetryFailError = class extends Error {
  errors;
  constructor(errors) {
    super("Api calls failed ".concat(errors.length, " time(s) in a row."));
    this.name = "ApiRetryFailError";
    this.errors = errors;
  }
  toJQuery() {
    const errorCount = this.errors.length;
    const element = /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
      className: "error"
    }, /* @__PURE__ */ import_ext_gadget2.default.createElement("p", null, getMessage("ApiRetryFailError").replace(/\$1/g, errorCount.toString())), /* @__PURE__ */ import_ext_gadget2.default.createElement("ol", null, this.errors.map((error, index) => /* @__PURE__ */ import_ext_gadget2.default.createElement("li", {
      key: index
    }, error.split("\n").map((line, number) => /* @__PURE__ */ import_ext_gadget2.default.createElement("p", {
      key: number
    }, line))))));
    const $element = $(element);
    return $element;
  }
};
//! src/NoteTA/modules/api.ts
var import_ext_gadget3 = require("ext.gadget.Util");
var api = (0, import_ext_gadget3.initMwApi)("NoteTA/".concat(version));
//! src/NoteTA/modules/parseWikitext.ts
var parseWithRetry = (args, count = 3, previousErrors = []) => {
  if (!count) {
    return $.Deferred().reject(new ApiRetryFailError(previousErrors));
  }
  const deferred = $.Deferred();
  void api.parse(...args).then((response) => {
    void deferred.resolve(response);
  }).catch((error) => {
    console.error(error);
    if (error && typeof error === "object" && "stack" in error) {
      previousErrors[previousErrors.length] = error.stack;
    } else {
      previousErrors[previousErrors.length] = String(error);
    }
    parseWithRetry(args, --count, previousErrors).then((newResponse) => {
      void deferred.resolve(newResponse);
    }).catch((newError) => {
      void deferred.reject(newError);
    });
  });
  return deferred;
};
var parseWikitext = (...args) => {
  return parseWithRetry(args);
};
//! src/NoteTA/modules/viewer.tsx
var import_ext_gadget4 = __toESM(require("ext.gadget.JSX"), 1);
//! src/NoteTA/modules/util/assert.ts
function assert(value, valueName) {
  if (!value) {
    throw new Error("Assert Fail, ".concat(valueName, " == false."));
  }
}
//! src/NoteTA/modules/initViewMap.ts
var viewerMap = /* @__PURE__ */ new Map();
//! src/NoteTA/modules/initWindowManager.ts
var initWindowManager = () => {
  return new OO.ui.WindowManager();
};
var windowManager = initWindowManager();
//! src/NoteTA/modules/viewer.tsx
var getViewer = ($body, hash) => {
  if (viewerMap.has(hash)) {
    const storedViewer = viewerMap.get(hash);
    assert(storedViewer, "viewer");
    return storedViewer;
  }
  const $targetElement = $body.find("#noteTA-".concat(hash));
  if (!$targetElement.length) {
    throw new Error(`Can't get Element "#noteTA-`.concat(hash, '".'));
  }
  const {
    wgPageName,
    wgUserVariant
  } = mw.config.get();
  class NoteTAViewer extends OO.ui.ProcessDialog {
    dataIsLoaded;
    executePromise;
    mutationObserver;
    $realContent;
    $body;
    // @ts-expect-error TS2503
    static lastError;
    static noteTAParseText;
    constructor() {
      super({
        size: "larger"
      });
      this.dataIsLoaded = false;
      this.$realContent = $(/* @__PURE__ */ import_ext_gadget4.default.createElement("div", null));
      this.mutationObserver = new MutationObserver(this.updateSize.bind(this));
      this.mutationObserver.observe(this.$realContent.get(0), {
        childList: true,
        subtree: true
      });
    }
    // @ts-expect-error TS4112
    initialize() {
      super.initialize();
      const panelLayout = new OO.ui.PanelLayout({
        expanded: false,
        padded: true
      });
      this.$realContent.appendTo(panelLayout.$element);
      panelLayout.$element.appendTo(this.$body);
      return this;
    }
    // @ts-expect-error TS2503
    getSetupProcess(data) {
      return super.getSetupProcess(data).next(() => {
        void this.doExecuteWrap();
        void NoteTAViewer.executeAction("main");
      });
    }
    // @ts-expect-error TS2503
    getActionProcess(action) {
      const isMainAction = action === "main";
      return super.getActionProcess(action).next(() => {
        if (isMainAction) {
          return this.doExecuteWrap();
        }
      }).next(() => {
        if (isMainAction && NoteTAViewer.lastError) {
          return NoteTAViewer.lastError;
        }
        return super.getActionProcess(action).execute();
      });
    }
    destroy() {
      this.mutationObserver.disconnect();
    }
    static getNoteTAParseText() {
      if (NoteTAViewer.noteTAParseText) {
        return $.Deferred().resolve(NoteTAViewer.noteTAParseText);
      }
      const $noteTAtitle = $targetElement.find(".noteTA-title");
      const actualTitle = wgPageName.replace(/_/g, " ");
      let wikitext = "";
      const titleDeferred = $.Deferred();
      if ($noteTAtitle.length) {
        const titleConv = $noteTAtitle.attr("data-noteta-code");
        assert(titleConv, "titleConv");
        let titleDesc = $noteTAtitle.attr("data-noteta-desc");
        if (titleDesc) {
          titleDesc = "（".concat(titleDesc, "）");
        } else {
          titleDesc = "";
        }
        wikitext += '<span style="float:right">{{edit|'.concat(actualTitle, "|section=0}}</span>\n");
        wikitext += "; 本文使用[[Help:字词转换处理|标题手工转换]]\n";
        wikitext += "* 转换标题为：-{D|".concat(titleConv, "}-").concat(titleDesc, "\n");
        wikitext += "* 实际标题为：-{R|".concat(actualTitle, "}-；当前显示为：-{|").concat(titleConv, "}-\n");
        void titleDeferred.resolve();
      } else {
        parseWikitext("{{noteTA/multititle|".concat(actualTitle, "}}"), {
          title: actualTitle,
          variant: "zh"
        }).then((resultHtml) => {
          const $multiTitle = $($.parseHTML(resultHtml)).find(".noteTA-multititle");
          if ($multiTitle.length) {
            wikitext += "; 本文[[Help:字词转换处理|标题可能经过转换]]\n* 转换标题为：";
            const textVariant = {};
            const variantText = {};
            var _iterator2 = _createForOfIteratorHelper($multiTitle.children()), _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                const element = _step2.value;
                const $element = $(element);
                const variant = $element.attr("data-noteta-multititle-variant");
                assert(variant, "variant");
                const text = $element.text().trim();
                variantText[variant] = text;
                const textVariantArray = textVariant[text];
                if (textVariantArray) {
                  textVariantArray[textVariantArray.length] = variant;
                } else {
                  textVariant[text] = [variant];
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
            const titleConverted = variantText[wgUserVariant];
            const multiTitle = [];
            for (var _i = 0, _Object$values = Object.values(variantText); _i < _Object$values.length; _i++) {
              const text = _Object$values[_i];
              if (text === null || text === void 0) {
                continue;
              }
              const variants = textVariant[text];
              if (!variants) {
                continue;
              }
              var _iterator3 = _createForOfIteratorHelper(variants), _step3;
              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                  const variant = _step3.value;
                  variantText[variant] = null;
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
              const variantsName = variants.map((variant) => "-{R|{{MediaWiki:Variantname-".concat(variant, "}}}-")).join("、");
              multiTitle[multiTitle.length] = "".concat(variantsName, "：-{R|").concat(text, "}-");
            }
            const subItemSeparator = "\n** ";
            wikitext += "".concat(subItemSeparator).concat(multiTitle.join(subItemSeparator));
            wikitext += "\n* 实际标题为：-{R|".concat(actualTitle, "}-；当前显示为：-{R|").concat(titleConverted, "}-\n");
          }
          void titleDeferred.resolve();
        }).catch((error) => {
          void titleDeferred.reject(error);
        });
      }
      const deferred = $.Deferred();
      titleDeferred.then(() => {
        const $noteTAgroups = $targetElement.find(".noteTA-group > *[data-noteta-group]");
        var _iterator4 = _createForOfIteratorHelper($noteTAgroups), _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
            const element = _step4.value;
            const $element = $(element);
            switch ($element.attr("data-noteta-group-source")) {
              case "template":
                wikitext += "{{CGroup/".concat($element.attr("data-noteta-group"), "}}\n");
                break;
              case "module":
                wikitext += "{{#invoke:CGroupViewer|dialog|".concat($element.attr("data-noteta-group"), "}}\n");
                break;
              case "none":
                wikitext += "; 本文使用的公共转换组“".concat($element.attr("data-noteta-group"), "”尚未创建\n");
                wikitext += "* {{edit|Module:CGroup/".concat($element.attr("data-noteta-group"), "|创建公共转换组“").concat($element.attr("data-noteta-group"), "”}}\n");
                break;
              default:
                wikitext += "; 未知公共转换组“".concat($element.attr("data-noteta-group"), "”来源“").concat($element.attr("data-noteta-group-source"), "”\n");
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
        const $noteTAlocal = $targetElement.find(".noteTA-local");
        if ($noteTAlocal.length) {
          wikitext += '<span style="float:right">{{edit|'.concat(actualTitle, "|section=0}}</span>\n");
          wikitext += "; 本文使用[[Help:字词转换处理|全文手工转换]]\n";
          const $noteTAlocals = $noteTAlocal.children("*[data-noteta-code]");
          var _iterator5 = _createForOfIteratorHelper($noteTAlocals), _step5;
          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
              const element = _step5.value;
              const $element = $(element);
              let localDesc = $element.attr("data-noteta-desc");
              if (localDesc) {
                localDesc = "（".concat(localDesc, "）");
              } else {
                localDesc = "";
              }
              const localConv = $element.attr("data-noteta-code");
              wikitext += "* -{D|".concat(localConv, "}-").concat(localDesc, "当前显示为：-{").concat(localConv, "}-\n");
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
        }
        wikitext += "{{noteTA/footer}}\n";
        NoteTAViewer.noteTAParseText = wikitext;
        void deferred.resolve(wikitext);
      }).catch((error) => {
        void deferred.reject(error);
      });
      return deferred;
    }
    doExecute() {
      if (this.dataIsLoaded) {
        return $.Deferred().resolve();
      }
      this.$realContent.empty().append(/* @__PURE__ */ import_ext_gadget4.default.createElement("p", null, getMessage("Loading")));
      return NoteTAViewer.getNoteTAParseText().then((wikitext) => parseWikitext(wikitext, {
        title: "Template:CGroup/-",
        variant: wgUserVariant
      })).then((parsedHtml) => {
        this.$realContent.empty().html(parsedHtml).addClass("".concat(portletClass, "-output"));
        this.$realContent.find(".mw-collapsible").makeCollapsible();
        this.updateSize();
        this.dataIsLoaded = true;
      }).catch((error) => {
        if (error instanceof ApiRetryFailError) {
          throw new OO.ui.Error(error.toJQuery(), {
            recoverable: true
          });
        } else {
          throw new OO.ui.Error(String(error), {
            recoverable: false
          });
        }
      });
    }
    doExecuteWrap() {
      if (this.executePromise === void 0) {
        this.executePromise = this.doExecute();
        delete NoteTAViewer.lastError;
        const executeDeferred = $.Deferred();
        void this.executePromise.then((response) => {
          void executeDeferred.resolve(response);
        }).catch((error) => {
          if (error instanceof OO.ui.Error) {
            NoteTAViewer.lastError = error;
          } else {
            void executeDeferred.reject(error);
          }
        }).always(() => {
          delete this.executePromise;
        });
        return executeDeferred;
      }
      const deferred = $.Deferred();
      void this.executePromise.then((response) => {
        void deferred.resolve(response);
      }).catch((error) => {
        if (error instanceof OO.ui.Error) {
          NoteTAViewer.lastError = error;
        } else {
          void deferred.reject(error);
        }
      }).always(() => {
        delete this.executePromise;
      });
      return deferred;
    }
  }
  NoteTAViewer.static = {
    // @ts-expect-error TS2304
    ...OO.ui.ProcessDialog.static
  };
  NoteTAViewer.static.name = "NoteTAViewer-".concat(hash);
  NoteTAViewer.static.title = getMessage("Title");
  NoteTAViewer.static.actions = [{
    label: mw.message("ooui-dialog-process-dismiss").parse(),
    flags: "safe"
  }];
  const viewer = new NoteTAViewer();
  windowManager.addWindows([viewer]);
  viewerMap.set(hash, viewer);
  return viewer;
};
var resetAllViewer = () => {
  var _iterator6 = _createForOfIteratorHelper(viewerMap.values()), _step6;
  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
      const viewer = _step6.value;
      viewer.destroy();
    }
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }
  viewerMap.clear();
  void windowManager.clearWindows();
};
//! src/NoteTA/modules/initGlobalMethods.ts
var portletId;
var initGlobalMethods = ($body) => {
  const globalMethods = {
    init() {
    },
    deInit() {
    }
  };
  const {
    skin
  } = mw.config.get();
  if (skin === "vector") {
    portletId = "p-noteTA";
    let $noteTATab;
    globalMethods.init = () => {
      if ($noteTATab || !portletId) {
        return;
      }
      const noteTATab = mw.util.addPortlet(portletId);
      if (!noteTATab) {
        return;
      }
      $noteTATab = $(noteTATab);
      $noteTATab.removeClass("mw-portlet-".concat(portletId)).addClass(["mw-portlet-".concat(portletId.replace("p-", "")), "vector-menu-tabs", "vector-menu-tabs-legacy"]);
      $body.find("#p-variants").after($noteTATab);
    };
    globalMethods.deInit = () => {
      if (!$noteTATab) {
        return;
      }
      $noteTATab.find("ul").empty();
      if (portletId) {
        mw.util.hidePortlet(portletId);
      }
    };
  } else if (skin === "vector-2022") {
    portletId = "p-associated-pages";
    globalMethods.deInit = () => {
      $body.find(".".concat(portletClass)).remove();
    };
  }
  return globalMethods;
};
//! src/NoteTA/NoteTA.ts
var import_ext_gadget6 = require("ext.gadget.Util");
//! src/NoteTA/modules/util/generatePortletLink.tsx
var import_ext_gadget5 = __toESM(require("ext.gadget.JSX"), 1);
var generatePortletLink = (hash) => {
  if (!portletId) {
    return;
  }
  const portletLink = mw.util.addPortletLink(portletId, "#", "汉/漢", "ca-noteTA-".concat(hash));
  if (!portletLink) {
    return;
  }
  portletLink.classList.add("ca-noteTA");
  const $portletLink = $(portletLink).addClass(portletClass);
  $portletLink.find("a").empty().append(/* @__PURE__ */ import_ext_gadget5.default.createElement("div", null, /* @__PURE__ */ import_ext_gadget5.default.createElement("span", {
    className: ["".concat(portletClass, "__label"), "".concat(portletClass, "__label-hans")]
  }, "汉"), /* @__PURE__ */ import_ext_gadget5.default.createElement("span", {
    className: ["".concat(portletClass, "__label"), "".concat(portletClass, "__label-hant")]
  }, "漢")));
  return $portletLink;
};
//! src/NoteTA/NoteTA.ts
var isInit = false;
mw.hook("wikipage.content").add(function noteTA($content) {
  const $body = $content.parents("body");
  if (!isInit) {
    isInit = true;
    windowManager.$element.appendTo($body);
  }
  resetAllViewer();
  const globalMethods = initGlobalMethods($body);
  globalMethods.deInit();
  globalMethods.init();
  var _iterator7 = _createForOfIteratorHelper($body.find(".mw-indicator[id^=mw-indicator-noteTA-]")), _step7;
  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
      const element = _step7.value;
      const hash = element.id.replace(/^mw-indicator-noteTA-/, "");
      let $element = $(element);
      if (portletId) {
        $element.hide();
        const $portletLink = generatePortletLink(hash);
        if (!$portletLink) {
          continue;
        }
        $element = $portletLink;
      }
      const openerListener = (event) => {
        if (!(0, import_ext_gadget6.checkA11yConfirmKey)(event)) {
          return;
        }
        event.preventDefault();
        getViewer($body, hash).open();
      };
      $element.on("click", openerListener);
      $element.on("keydown", openerListener);
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwtdGhpcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZhaWxzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVzY3JpcHRvcnMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2xhc3NvZi1yYXcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbmRleGVkLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1jYWxsYWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1idWlsdC1pbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbnZpcm9ubWVudC11c2VyLWFnZW50LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdjgtdmVyc2lvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXN5bWJvbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RyeS10by1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWNhbGxhYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1Zy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1uYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9tYXRoLXRydW5jLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjUwLjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuNTAuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbWFwLWhlbHBlcnMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMubWFwLmdldC1vci1pbnNlcnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy41MC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMubWFwLmdldC1vci1pbnNlcnQtY29tcHV0ZWQuanMiLCAic3JjL05vdGVUQS9vcHRpb25zLmpzb24iLCAic3JjL05vdGVUQS9tb2R1bGVzL3V0aWwvQXBpUmV0cnlGYWlsRXJyb3IudHN4IiwgInNyYy9Ob3RlVEEvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9Ob3RlVEEvbW9kdWxlcy9hcGkudHMiLCAic3JjL05vdGVUQS9tb2R1bGVzL3BhcnNlV2lraXRleHQudHMiLCAic3JjL05vdGVUQS9tb2R1bGVzL3ZpZXdlci50c3giLCAic3JjL05vdGVUQS9tb2R1bGVzL3V0aWwvYXNzZXJ0LnRzIiwgInNyYy9Ob3RlVEEvbW9kdWxlcy9pbml0Vmlld01hcC50cyIsICJzcmMvTm90ZVRBL21vZHVsZXMvaW5pdFdpbmRvd01hbmFnZXIudHMiLCAic3JjL05vdGVUQS9tb2R1bGVzL2luaXRHbG9iYWxNZXRob2RzLnRzIiwgInNyYy9Ob3RlVEEvTm90ZVRBLnRzIiwgInNyYy9Ob3RlVEEvbW9kdWxlcy91dGlsL2dlbmVyYXRlUG9ydGxldExpbmsudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyIndXNlIHN0cmljdCc7XG52YXIgY2hlY2sgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICYmIGl0Lk1hdGggPT09IE1hdGggJiYgaXQ7XG59O1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxubW9kdWxlLmV4cG9ydHMgPVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZ2xvYmFsLXRoaXMgLS0gc2FmZVxuICBjaGVjayh0eXBlb2YgZ2xvYmFsVGhpcyA9PSAnb2JqZWN0JyAmJiBnbG9iYWxUaGlzKSB8fFxuICBjaGVjayh0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdykgfHxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAtLSBzYWZlXG4gIGNoZWNrKHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYpIHx8XG4gIGNoZWNrKHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsKSB8fFxuICBjaGVjayh0eXBlb2YgdGhpcyA9PSAnb2JqZWN0JyAmJiB0aGlzKSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmMgLS0gZmFsbGJhY2tcbiAgKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pKCkgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBEZXRlY3QgSUU4J3MgaW5jb21wbGV0ZSBkZWZpbmVQcm9wZXJ0eSBpbXBsZW1lbnRhdGlvblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sIDEsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pWzFdICE9PSA3O1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWZ1bmN0aW9uLXByb3RvdHlwZS1iaW5kIC0tIHNhZmVcbiAgdmFyIHRlc3QgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0uYmluZCgpO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zIC0tIHNhZmVcbiAgcmV0dXJuIHR5cGVvZiB0ZXN0ICE9ICdmdW5jdGlvbicgfHwgdGVzdC5oYXNPd25Qcm9wZXJ0eSgncHJvdG90eXBlJyk7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgTkFUSVZFX0JJTkQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUnKTtcblxudmFyIGNhbGwgPSBGdW5jdGlvbi5wcm90b3R5cGUuY2FsbDtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1mdW5jdGlvbi1wcm90b3R5cGUtYmluZCAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9CSU5EID8gY2FsbC5iaW5kKGNhbGwpIDogZnVuY3Rpb24gKCkge1xuICByZXR1cm4gY2FsbC5hcHBseShjYWxsLCBhcmd1bWVudHMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gTmFzaG9ybiB+IEpESzggYnVnXG52YXIgTkFTSE9STl9CVUcgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgJiYgISRwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHsgMTogMiB9LCAxKTtcblxuLy8gYE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGVgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QucHJvdG90eXBlLnByb3BlcnR5aXNlbnVtZXJhYmxlXG5leHBvcnRzLmYgPSBOQVNIT1JOX0JVRyA/IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKFYpIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGhpcywgVik7XG4gIHJldHVybiAhIWRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci5lbnVtZXJhYmxlO1xufSA6ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgY2FsbCA9IEZ1bmN0aW9uUHJvdG90eXBlLmNhbGw7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZnVuY3Rpb24tcHJvdG90eXBlLWJpbmQgLS0gc2FmZVxudmFyIHVuY3VycnlUaGlzV2l0aEJpbmQgPSBOQVRJVkVfQklORCAmJiBGdW5jdGlvblByb3RvdHlwZS5iaW5kLmJpbmQoY2FsbCwgY2FsbCk7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX0JJTkQgPyB1bmN1cnJ5VGhpc1dpdGhCaW5kIDogZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGNhbGwuYXBwbHkoZm4sIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxudmFyIHRvU3RyaW5nID0gdW5jdXJyeVRoaXMoe30udG9TdHJpbmcpO1xudmFyIHN0cmluZ1NsaWNlID0gdW5jdXJyeVRoaXMoJycuc2xpY2UpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gc3RyaW5nU2xpY2UodG9TdHJpbmcoaXQpLCA4LCAtMSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG52YXIgc3BsaXQgPSB1bmN1cnJ5VGhpcygnJy5zcGxpdCk7XG5cbi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG5tb2R1bGUuZXhwb3J0cyA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gdGhyb3dzIGFuIGVycm9yIGluIHJoaW5vLCBzZWUgaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvcmhpbm8vaXNzdWVzLzM0NlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zIC0tIHNhZmVcbiAgcmV0dXJuICEkT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCk7XG59KSA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY2xhc3NvZihpdCkgPT09ICdTdHJpbmcnID8gc3BsaXQoaXQsICcnKSA6ICRPYmplY3QoaXQpO1xufSA6ICRPYmplY3Q7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gd2UgY2FuJ3QgdXNlIGp1c3QgYGl0ID09IG51bGxgIHNpbmNlIG9mIGBkb2N1bWVudC5hbGxgIHNwZWNpYWwgY2FzZVxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1Jc0hUTUxEREEtaW50ZXJuYWwtc2xvdC1hZWNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA9PT0gbnVsbCB8fCBpdCA9PT0gdW5kZWZpbmVkO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtbnVsbC1vci11bmRlZmluZWQnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcmVxdWlyZW9iamVjdGNvZXJjaWJsZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGlzTnVsbE9yVW5kZWZpbmVkKGl0KSkgdGhyb3cgbmV3ICRUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSW5kZXhlZE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGl0KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtSXNIVE1MRERBLWludGVybmFsLXNsb3RcbnZhciBkb2N1bWVudEFsbCA9IHR5cGVvZiBkb2N1bWVudCA9PSAnb2JqZWN0JyAmJiBkb2N1bWVudC5hbGw7XG5cbi8vIGBJc0NhbGxhYmxlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXNjYWxsYWJsZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vbm8tdHlwZW9mLXVuZGVmaW5lZCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xubW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgZG9jdW1lbnRBbGwgPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnRBbGwgIT09IHVuZGVmaW5lZCA/IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gdHlwZW9mIGFyZ3VtZW50ID09ICdmdW5jdGlvbicgfHwgYXJndW1lbnQgPT09IGRvY3VtZW50QWxsO1xufSA6IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gdHlwZW9mIGFyZ3VtZW50ID09ICdmdW5jdGlvbic7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IGlzQ2FsbGFibGUoaXQpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIGFGdW5jdGlvbiA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gaXNDYWxsYWJsZShhcmd1bWVudCkgPyBhcmd1bWVudCA6IHVuZGVmaW5lZDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWVzcGFjZSwgbWV0aG9kKSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IGFGdW5jdGlvbihnbG9iYWxUaGlzW25hbWVzcGFjZV0pIDogZ2xvYmFsVGhpc1tuYW1lc3BhY2VdICYmIGdsb2JhbFRoaXNbbmFtZXNwYWNlXVttZXRob2RdO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gdW5jdXJyeVRoaXMoe30uaXNQcm90b3R5cGVPZik7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcblxudmFyIG5hdmlnYXRvciA9IGdsb2JhbFRoaXMubmF2aWdhdG9yO1xudmFyIHVzZXJBZ2VudCA9IG5hdmlnYXRvciAmJiBuYXZpZ2F0b3IudXNlckFnZW50O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVzZXJBZ2VudCA/IFN0cmluZyh1c2VyQWdlbnQpIDogJyc7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdXNlci1hZ2VudCcpO1xuXG52YXIgcHJvY2VzcyA9IGdsb2JhbFRoaXMucHJvY2VzcztcbnZhciBEZW5vID0gZ2xvYmFsVGhpcy5EZW5vO1xudmFyIHZlcnNpb25zID0gcHJvY2VzcyAmJiBwcm9jZXNzLnZlcnNpb25zIHx8IERlbm8gJiYgRGVuby52ZXJzaW9uO1xudmFyIHY4ID0gdmVyc2lvbnMgJiYgdmVyc2lvbnMudjg7XG52YXIgbWF0Y2gsIHZlcnNpb247XG5cbmlmICh2OCkge1xuICBtYXRjaCA9IHY4LnNwbGl0KCcuJyk7XG4gIC8vIGluIG9sZCBDaHJvbWUsIHZlcnNpb25zIG9mIFY4IGlzbid0IFY4ID0gQ2hyb21lIC8gMTBcbiAgLy8gYnV0IHRoZWlyIGNvcnJlY3QgdmVyc2lvbnMgYXJlIG5vdCBpbnRlcmVzdGluZyBmb3IgdXNcbiAgdmVyc2lvbiA9IG1hdGNoWzBdID4gMCAmJiBtYXRjaFswXSA8IDQgPyAxIDogKyhtYXRjaFswXSArIG1hdGNoWzFdKTtcbn1cblxuLy8gQnJvd3NlckZTIE5vZGVKUyBgcHJvY2Vzc2AgcG9seWZpbGwgaW5jb3JyZWN0bHkgc2V0IGAudjhgIHRvIGAwLjBgXG4vLyBzbyBjaGVjayBgdXNlckFnZW50YCBldmVuIGlmIGAudjhgIGV4aXN0cywgYnV0IDBcbmlmICghdmVyc2lvbiAmJiB1c2VyQWdlbnQpIHtcbiAgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2goL0VkZ2VcXC8oXFxkKykvKTtcbiAgaWYgKCFtYXRjaCB8fCBtYXRjaFsxXSA+PSA3NCkge1xuICAgIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9DaHJvbWVcXC8oXFxkKykvKTtcbiAgICBpZiAobWF0Y2gpIHZlcnNpb24gPSArbWF0Y2hbMV07XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2ZXJzaW9uO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLXN5bWJvbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZyAqL1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdjgtdmVyc2lvbicpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xuXG52YXIgJFN0cmluZyA9IGdsb2JhbFRoaXMuU3RyaW5nO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5c3ltYm9scyAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xubW9kdWxlLmV4cG9ydHMgPSAhIU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN5bWJvbCA9IFN5bWJvbCgnc3ltYm9sIGRldGVjdGlvbicpO1xuICAvLyBDaHJvbWUgMzggU3ltYm9sIGhhcyBpbmNvcnJlY3QgdG9TdHJpbmcgY29udmVyc2lvblxuICAvLyBgZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzYCBwb2x5ZmlsbCBzeW1ib2xzIGNvbnZlcnRlZCB0byBvYmplY3QgYXJlIG5vdCBTeW1ib2wgaW5zdGFuY2VzXG4gIC8vIG5iOiBEbyBub3QgY2FsbCBgU3RyaW5nYCBkaXJlY3RseSB0byBhdm9pZCB0aGlzIGJlaW5nIG9wdGltaXplZCBvdXQgdG8gYHN5bWJvbCsnJ2Agd2hpY2ggd2lsbCxcbiAgLy8gb2YgY291cnNlLCBmYWlsLlxuICByZXR1cm4gISRTdHJpbmcoc3ltYm9sKSB8fCAhKE9iamVjdChzeW1ib2wpIGluc3RhbmNlb2YgU3ltYm9sKSB8fFxuICAgIC8vIENocm9tZSAzOC00MCBzeW1ib2xzIGFyZSBub3QgaW5oZXJpdGVkIGZyb20gRE9NIGNvbGxlY3Rpb25zIHByb3RvdHlwZXMgdG8gaW5zdGFuY2VzXG4gICAgIVN5bWJvbC5zaGFtICYmIFY4X1ZFUlNJT04gJiYgVjhfVkVSU0lPTiA8IDQxO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tc3ltYm9sIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zeW1ib2wtY29uc3RydWN0b3ItZGV0ZWN0aW9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX1NZTUJPTCAmJlxuICAhU3ltYm9sLnNoYW0gJiZcbiAgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mJyk7XG52YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbm1vZHVsZS5leHBvcnRzID0gVVNFX1NZTUJPTF9BU19VSUQgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyICRTeW1ib2wgPSBnZXRCdWlsdEluKCdTeW1ib2wnKTtcbiAgcmV0dXJuIGlzQ2FsbGFibGUoJFN5bWJvbCkgJiYgaXNQcm90b3R5cGVPZigkU3ltYm9sLnByb3RvdHlwZSwgJE9iamVjdChpdCkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJFN0cmluZyA9IFN0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gJFN0cmluZyhhcmd1bWVudCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuICdPYmplY3QnO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgdHJ5VG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdHJ5LXRvLXN0cmluZycpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYEFzc2VydDogSXNDYWxsYWJsZShhcmd1bWVudCkgaXMgdHJ1ZWBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIGlmIChpc0NhbGxhYmxlKGFyZ3VtZW50KSkgcmV0dXJuIGFyZ3VtZW50O1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcih0cnlUb1N0cmluZyhhcmd1bWVudCkgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkJyk7XG5cbi8vIGBHZXRNZXRob2RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1nZXRtZXRob2Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFYsIFApIHtcbiAgdmFyIGZ1bmMgPSBWW1BdO1xuICByZXR1cm4gaXNOdWxsT3JVbmRlZmluZWQoZnVuYykgPyB1bmRlZmluZWQgOiBhQ2FsbGFibGUoZnVuYyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgT3JkaW5hcnlUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9yZGluYXJ5dG9wcmltaXRpdmVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBwcmVmKSB7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAocHJlZiA9PT0gJ3N0cmluZycgJiYgaXNDYWxsYWJsZShmbiA9IGlucHV0LnRvU3RyaW5nKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKGlzQ2FsbGFibGUoZm4gPSBpbnB1dC52YWx1ZU9mKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHByZWYgIT09ICdzdHJpbmcnICYmIGlzQ2FsbGFibGUoZm4gPSBpbnB1dC50b1N0cmluZykgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHRyeSB7XG4gICAgZGVmaW5lUHJvcGVydHkoZ2xvYmFsVGhpcywga2V5LCB7IHZhbHVlOiB2YWx1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBnbG9iYWxUaGlzW2tleV0gPSB2YWx1ZTtcbiAgfSByZXR1cm4gdmFsdWU7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgZGVmaW5lR2xvYmFsUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWdsb2JhbC1wcm9wZXJ0eScpO1xuXG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IGdsb2JhbFRoaXNbU0hBUkVEXSB8fCBkZWZpbmVHbG9iYWxQcm9wZXJ0eShTSEFSRUQsIHt9KTtcblxuKHN0b3JlLnZlcnNpb25zIHx8IChzdG9yZS52ZXJzaW9ucyA9IFtdKSkucHVzaCh7XG4gIHZlcnNpb246ICczLjUwLjAnLFxuICBtb2RlOiBJU19QVVJFID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMTPigJMyMDI1IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpLCAyMDI14oCTMjAyNiBDb3JlSlMgQ29tcGFueSAoY29yZS1qcy5pbykuIEFsbCByaWdodHMgcmVzZXJ2ZWQuJyxcbiAgbGljZW5zZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2Jsb2IvdjMuNTAuMC9MSUNFTlNFJyxcbiAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMnXG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgc3RvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWNyZWF0ZSAtLSBzYWZlXG52YXIgY3JlYXRlID0gT2JqZWN0LmNyZWF0ZSB8fCBPYmplY3Q7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSB8fCBjcmVhdGUobnVsbCkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbi8vIGBUb09iamVjdGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvb2JqZWN0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gJE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcblxudmFyIGhhc093blByb3BlcnR5ID0gdW5jdXJyeVRoaXMoe30uaGFzT3duUHJvcGVydHkpO1xuXG4vLyBgSGFzT3duUHJvcGVydHlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1oYXNvd25wcm9wZXJ0eVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1oYXNvd24gLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuaGFzT3duIHx8IGZ1bmN0aW9uIGhhc093bihpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eSh0b09iamVjdChpdCksIGtleSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxudmFyIGlkID0gMDtcbnZhciBwb3N0Zml4ID0gTWF0aC5yYW5kb20oKTtcbnZhciB0b1N0cmluZyA9IHVuY3VycnlUaGlzKDEuMS50b1N0cmluZyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnICsgKGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXkpICsgJylfJyArIHRvU3RyaW5nKCsraWQgKyBwb3N0Zml4LCAzNik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3ltYm9sLWNvbnN0cnVjdG9yLWRldGVjdGlvbicpO1xudmFyIFVTRV9TWU1CT0xfQVNfVUlEID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkJyk7XG5cbnZhciBTeW1ib2wgPSBnbG9iYWxUaGlzLlN5bWJvbDtcbnZhciBXZWxsS25vd25TeW1ib2xzU3RvcmUgPSBzaGFyZWQoJ3drcycpO1xudmFyIGNyZWF0ZVdlbGxLbm93blN5bWJvbCA9IFVTRV9TWU1CT0xfQVNfVUlEID8gU3ltYm9sWydmb3InXSB8fCBTeW1ib2wgOiBTeW1ib2wgJiYgU3ltYm9sLndpdGhvdXRTZXR0ZXIgfHwgdWlkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGlmICghaGFzT3duKFdlbGxLbm93blN5bWJvbHNTdG9yZSwgbmFtZSkpIHtcbiAgICBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV0gPSBOQVRJVkVfU1lNQk9MICYmIGhhc093bihTeW1ib2wsIG5hbWUpXG4gICAgICA/IFN5bWJvbFtuYW1lXVxuICAgICAgOiBjcmVhdGVXZWxsS25vd25TeW1ib2woJ1N5bWJvbC4nICsgbmFtZSk7XG4gIH0gcmV0dXJuIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXN5bWJvbCcpO1xudmFyIGdldE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtbWV0aG9kJyk7XG52YXIgb3JkaW5hcnlUb1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vcmRpbmFyeS10by1wcmltaXRpdmUnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG52YXIgVE9fUFJJTUlUSVZFID0gd2VsbEtub3duU3ltYm9sKCd0b1ByaW1pdGl2ZScpO1xuXG4vLyBgVG9QcmltaXRpdmVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b3ByaW1pdGl2ZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5wdXQsIHByZWYpIHtcbiAgaWYgKCFpc09iamVjdChpbnB1dCkgfHwgaXNTeW1ib2woaW5wdXQpKSByZXR1cm4gaW5wdXQ7XG4gIHZhciBleG90aWNUb1ByaW0gPSBnZXRNZXRob2QoaW5wdXQsIFRPX1BSSU1JVElWRSk7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChleG90aWNUb1ByaW0pIHtcbiAgICBpZiAocHJlZiA9PT0gdW5kZWZpbmVkKSBwcmVmID0gJ2RlZmF1bHQnO1xuICAgIHJlc3VsdCA9IGNhbGwoZXhvdGljVG9QcmltLCBpbnB1dCwgcHJlZik7XG4gICAgaWYgKCFpc09iamVjdChyZXN1bHQpIHx8IGlzU3ltYm9sKHJlc3VsdCkpIHJldHVybiByZXN1bHQ7XG4gICAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG4gIH1cbiAgaWYgKHByZWYgPT09IHVuZGVmaW5lZCkgcHJlZiA9ICdudW1iZXInO1xuICByZXR1cm4gb3JkaW5hcnlUb1ByaW1pdGl2ZShpbnB1dCwgcHJlZik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcmltaXRpdmUnKTtcbnZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1zeW1ib2wnKTtcblxuLy8gYFRvUHJvcGVydHlLZXlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b3Byb3BlcnR5a2V5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICB2YXIga2V5ID0gdG9QcmltaXRpdmUoYXJndW1lbnQsICdzdHJpbmcnKTtcbiAgcmV0dXJuIGlzU3ltYm9sKGtleSkgPyBrZXkgOiBrZXkgKyAnJztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyIGRvY3VtZW50ID0gZ2xvYmFsVGhpcy5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIEVYSVNUUyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIEVYSVNUUyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCcpO1xuXG4vLyBUaGFua3MgdG8gSUU4IGZvciBpdHMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIURFU0NSSVBUT1JTICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjcmVhdGVFbGVtZW50KCdkaXYnKSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9XG4gIH0pLmEgIT09IDc7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5Jyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pZTgtZG9tLWRlZmluZScpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5ZGVzY3JpcHRvclxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgPyAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSW5kZXhlZE9iamVjdChPKTtcbiAgUCA9IHRvUHJvcGVydHlLZXkoUCk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzT3duKE8sIFApKSByZXR1cm4gY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKCFjYWxsKHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlLmYsIE8sIFApLCBPW1BdKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxuLy8gVjggfiBDaHJvbWUgMzYtXG4vLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMzM0XG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSwgJ3Byb3RvdHlwZScsIHtcbiAgICB2YWx1ZTogNDIsXG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pLnByb3RvdHlwZSAhPT0gNDI7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciAkU3RyaW5nID0gU3RyaW5nO1xudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBBc3NlcnQ6IFR5cGUoYXJndW1lbnQpIGlzIE9iamVjdGBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIGlmIChpc09iamVjdChhcmd1bWVudCkpIHJldHVybiBhcmd1bWVudDtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJFN0cmluZyhhcmd1bWVudCkgKyAnIGlzIG5vdCBhbiBvYmplY3QnKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcbnZhciBWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1ZycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5Jyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgJGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIEVOVU1FUkFCTEUgPSAnZW51bWVyYWJsZSc7XG52YXIgQ09ORklHVVJBQkxFID0gJ2NvbmZpZ3VyYWJsZSc7XG52YXIgV1JJVEFCTEUgPSAnd3JpdGFibGUnO1xuXG4vLyBgT2JqZWN0LmRlZmluZVByb3BlcnR5YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnR5XG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyA/IFY4X1BST1RPVFlQRV9ERUZJTkVfQlVHID8gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJvcGVydHlLZXkoUCk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAodHlwZW9mIE8gPT09ICdmdW5jdGlvbicgJiYgUCA9PT0gJ3Byb3RvdHlwZScgJiYgJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzICYmIFdSSVRBQkxFIGluIEF0dHJpYnV0ZXMgJiYgIUF0dHJpYnV0ZXNbV1JJVEFCTEVdKSB7XG4gICAgdmFyIGN1cnJlbnQgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApO1xuICAgIGlmIChjdXJyZW50ICYmIGN1cnJlbnRbV1JJVEFCTEVdKSB7XG4gICAgICBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgICAgIEF0dHJpYnV0ZXMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogQ09ORklHVVJBQkxFIGluIEF0dHJpYnV0ZXMgPyBBdHRyaWJ1dGVzW0NPTkZJR1VSQUJMRV0gOiBjdXJyZW50W0NPTkZJR1VSQUJMRV0sXG4gICAgICAgIGVudW1lcmFibGU6IEVOVU1FUkFCTEUgaW4gQXR0cmlidXRlcyA/IEF0dHJpYnV0ZXNbRU5VTUVSQUJMRV0gOiBjdXJyZW50W0VOVU1FUkFCTEVdLFxuICAgICAgICB3cml0YWJsZTogZmFsc2VcbiAgICAgIH07XG4gICAgfVxuICB9IHJldHVybiAkZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG59IDogJGRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJvcGVydHlLZXkoUCk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuICRkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBuZXcgJFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKG9iamVjdCwga2V5LCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG5cbnZhciBGdW5jdGlvblByb3RvdHlwZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciBnZXREZXNjcmlwdG9yID0gREVTQ1JJUFRPUlMgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxudmFyIEVYSVNUUyA9IGhhc093bihGdW5jdGlvblByb3RvdHlwZSwgJ25hbWUnKTtcbi8vIGFkZGl0aW9uYWwgcHJvdGVjdGlvbiBmcm9tIG1pbmlmaWVkIC8gbWFuZ2xlZCAvIGRyb3BwZWQgZnVuY3Rpb24gbmFtZXNcbnZhciBQUk9QRVIgPSBFWElTVFMgJiYgZnVuY3Rpb24gc29tZXRoaW5nKCkgeyAvKiBlbXB0eSAqLyB9Lm5hbWUgPT09ICdzb21ldGhpbmcnO1xudmFyIENPTkZJR1VSQUJMRSA9IEVYSVNUUyAmJiAoIURFU0NSSVBUT1JTIHx8IChERVNDUklQVE9SUyAmJiBnZXREZXNjcmlwdG9yKEZ1bmN0aW9uUHJvdG90eXBlLCAnbmFtZScpLmNvbmZpZ3VyYWJsZSkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgRVhJU1RTOiBFWElTVFMsXG4gIFBST1BFUjogUFJPUEVSLFxuICBDT05GSUdVUkFCTEU6IENPTkZJR1VSQUJMRVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHN0b3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xuXG52YXIgZnVuY3Rpb25Ub1N0cmluZyA9IHVuY3VycnlUaGlzKEZ1bmN0aW9uLnRvU3RyaW5nKTtcblxuLy8gdGhpcyBoZWxwZXIgYnJva2VuIGluIGBjb3JlLWpzQDMuNC4xLTMuNC40YCwgc28gd2UgY2FuJ3QgdXNlIGBzaGFyZWRgIGhlbHBlclxuaWYgKCFpc0NhbGxhYmxlKHN0b3JlLmluc3BlY3RTb3VyY2UpKSB7XG4gIHN0b3JlLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb25Ub1N0cmluZyhpdCk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RvcmUuaW5zcGVjdFNvdXJjZTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIFdlYWtNYXAgPSBnbG9iYWxUaGlzLldlYWtNYXA7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNDYWxsYWJsZShXZWFrTWFwKSAmJiAvbmF0aXZlIGNvZGUvLnRlc3QoU3RyaW5nKFdlYWtNYXApKTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcblxudmFyIGtleXMgPSBzaGFyZWQoJ2tleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBrZXlzW2tleV0gfHwgKGtleXNba2V5XSA9IHVpZChrZXkpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgTkFUSVZFX1dFQUtfTUFQID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlYWstbWFwLWJhc2ljLWRldGVjdGlvbicpO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG52YXIgc2hhcmVkS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG5cbnZhciBPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCA9ICdPYmplY3QgYWxyZWFkeSBpbml0aWFsaXplZCc7XG52YXIgVHlwZUVycm9yID0gZ2xvYmFsVGhpcy5UeXBlRXJyb3I7XG52YXIgV2Vha01hcCA9IGdsb2JhbFRoaXMuV2Vha01hcDtcbnZhciBzZXQsIGdldCwgaGFzO1xuXG52YXIgZW5mb3JjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaGFzKGl0KSA/IGdldChpdCkgOiBzZXQoaXQsIHt9KTtcbn07XG5cbnZhciBnZXR0ZXJGb3IgPSBmdW5jdGlvbiAoVFlQRSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGl0KSB7XG4gICAgdmFyIHN0YXRlO1xuICAgIGlmICghaXNPYmplY3QoaXQpIHx8IChzdGF0ZSA9IGdldChpdCkpLnR5cGUgIT09IFRZUEUpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0luY29tcGF0aWJsZSByZWNlaXZlciwgJyArIFRZUEUgKyAnIHJlcXVpcmVkJyk7XG4gICAgfSByZXR1cm4gc3RhdGU7XG4gIH07XG59O1xuXG5pZiAoTkFUSVZFX1dFQUtfTUFQIHx8IHNoYXJlZC5zdGF0ZSkge1xuICB2YXIgc3RvcmUgPSBzaGFyZWQuc3RhdGUgfHwgKHNoYXJlZC5zdGF0ZSA9IG5ldyBXZWFrTWFwKCkpO1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1zZWxmLWFzc2lnbiAtLSBwcm90b3R5cGUgbWV0aG9kcyBwcm90ZWN0aW9uICovXG4gIHN0b3JlLmdldCA9IHN0b3JlLmdldDtcbiAgc3RvcmUuaGFzID0gc3RvcmUuaGFzO1xuICBzdG9yZS5zZXQgPSBzdG9yZS5zZXQ7XG4gIC8qIGVzbGludC1lbmFibGUgbm8tc2VsZi1hc3NpZ24gLS0gcHJvdG90eXBlIG1ldGhvZHMgcHJvdGVjdGlvbiAqL1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgaWYgKHN0b3JlLmhhcyhpdCkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIHN0b3JlLnNldChpdCwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHN0b3JlLmdldChpdCkgfHwge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBzdG9yZS5oYXMoaXQpO1xuICB9O1xufSBlbHNlIHtcbiAgdmFyIFNUQVRFID0gc2hhcmVkS2V5KCdzdGF0ZScpO1xuICBoaWRkZW5LZXlzW1NUQVRFXSA9IHRydWU7XG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICBpZiAoaGFzT3duKGl0LCBTVEFURSkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShpdCwgU1RBVEUsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBoYXNPd24oaXQsIFNUQVRFKSA/IGl0W1NUQVRFXSA6IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaGFzT3duKGl0LCBTVEFURSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldCxcbiAgZ2V0OiBnZXQsXG4gIGhhczogaGFzLFxuICBlbmZvcmNlOiBlbmZvcmNlLFxuICBnZXR0ZXJGb3I6IGdldHRlckZvclxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIENPTkZJR1VSQUJMRV9GVU5DVElPTl9OQU1FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLW5hbWUnKS5DT05GSUdVUkFCTEU7XG52YXIgaW5zcGVjdFNvdXJjZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnNwZWN0LXNvdXJjZScpO1xudmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUnKTtcblxudmFyIGVuZm9yY2VJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5lbmZvcmNlO1xudmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldDtcbnZhciAkU3RyaW5nID0gU3RyaW5nO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG52YXIgcmVwbGFjZSA9IHVuY3VycnlUaGlzKCcnLnJlcGxhY2UpO1xudmFyIGpvaW4gPSB1bmN1cnJ5VGhpcyhbXS5qb2luKTtcblxudmFyIENPTkZJR1VSQUJMRV9MRU5HVEggPSBERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHkoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9LCAnbGVuZ3RoJywgeyB2YWx1ZTogOCB9KS5sZW5ndGggIT09IDg7XG59KTtcblxudmFyIFRFTVBMQVRFID0gU3RyaW5nKFN0cmluZykuc3BsaXQoJ1N0cmluZycpO1xuXG52YXIgbWFrZUJ1aWx0SW4gPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSwgbmFtZSwgb3B0aW9ucykge1xuICBpZiAoc3RyaW5nU2xpY2UoJFN0cmluZyhuYW1lKSwgMCwgNykgPT09ICdTeW1ib2woJykge1xuICAgIG5hbWUgPSAnWycgKyByZXBsYWNlKCRTdHJpbmcobmFtZSksIC9eU3ltYm9sXFwoKFteKV0qKVxcKS4qJC8sICckMScpICsgJ10nO1xuICB9XG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZ2V0dGVyKSBuYW1lID0gJ2dldCAnICsgbmFtZTtcbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5zZXR0ZXIpIG5hbWUgPSAnc2V0ICcgKyBuYW1lO1xuICBpZiAoIWhhc093bih2YWx1ZSwgJ25hbWUnKSB8fCAoQ09ORklHVVJBQkxFX0ZVTkNUSU9OX05BTUUgJiYgdmFsdWUubmFtZSAhPT0gbmFtZSkpIHtcbiAgICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5KHZhbHVlLCAnbmFtZScsIHsgdmFsdWU6IG5hbWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KTtcbiAgICBlbHNlIHZhbHVlLm5hbWUgPSBuYW1lO1xuICB9XG4gIGlmIChDT05GSUdVUkFCTEVfTEVOR1RIICYmIG9wdGlvbnMgJiYgaGFzT3duKG9wdGlvbnMsICdhcml0eScpICYmIHZhbHVlLmxlbmd0aCAhPT0gb3B0aW9ucy5hcml0eSkge1xuICAgIGRlZmluZVByb3BlcnR5KHZhbHVlLCAnbGVuZ3RoJywgeyB2YWx1ZTogb3B0aW9ucy5hcml0eSB9KTtcbiAgfVxuICB0cnkge1xuICAgIGlmIChvcHRpb25zICYmIGhhc093bihvcHRpb25zLCAnY29uc3RydWN0b3InKSAmJiBvcHRpb25zLmNvbnN0cnVjdG9yKSB7XG4gICAgICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5KHZhbHVlLCAncHJvdG90eXBlJywgeyB3cml0YWJsZTogZmFsc2UgfSk7XG4gICAgLy8gaW4gVjggfiBDaHJvbWUgNTMsIHByb3RvdHlwZXMgb2Ygc29tZSBtZXRob2RzLCBsaWtlIGBBcnJheS5wcm90b3R5cGUudmFsdWVzYCwgYXJlIG5vbi13cml0YWJsZVxuICAgIH0gZWxzZSBpZiAodmFsdWUucHJvdG90eXBlKSB2YWx1ZS5wcm90b3R5cGUgPSB1bmRlZmluZWQ7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgdmFyIHN0YXRlID0gZW5mb3JjZUludGVybmFsU3RhdGUodmFsdWUpO1xuICBpZiAoIWhhc093bihzdGF0ZSwgJ3NvdXJjZScpKSB7XG4gICAgc3RhdGUuc291cmNlID0gam9pbihURU1QTEFURSwgdHlwZW9mIG5hbWUgPT0gJ3N0cmluZycgPyBuYW1lIDogJycpO1xuICB9IHJldHVybiB2YWx1ZTtcbn07XG5cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWV4dGVuZC1uYXRpdmUgLS0gcmVxdWlyZWRcbkZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZyA9IG1ha2VCdWlsdEluKGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gaXNDYWxsYWJsZSh0aGlzKSAmJiBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpLnNvdXJjZSB8fCBpbnNwZWN0U291cmNlKHRoaXMpO1xufSwgJ3RvU3RyaW5nJyk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgbWFrZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWFrZS1idWlsdC1pbicpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywga2V5LCB2YWx1ZSwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcbiAgdmFyIHNpbXBsZSA9IG9wdGlvbnMuZW51bWVyYWJsZTtcbiAgdmFyIG5hbWUgPSBvcHRpb25zLm5hbWUgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubmFtZSA6IGtleTtcbiAgaWYgKGlzQ2FsbGFibGUodmFsdWUpKSBtYWtlQnVpbHRJbih2YWx1ZSwgbmFtZSwgb3B0aW9ucyk7XG4gIGlmIChvcHRpb25zLmdsb2JhbCkge1xuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2UgZGVmaW5lR2xvYmFsUHJvcGVydHkoa2V5LCB2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghb3B0aW9ucy51bnNhZmUpIGRlbGV0ZSBPW2tleV07XG4gICAgICBlbHNlIGlmIChPW2tleV0pIHNpbXBsZSA9IHRydWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2UgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihPLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiAhb3B0aW9ucy5ub25Db25maWd1cmFibGUsXG4gICAgICB3cml0YWJsZTogIW9wdGlvbnMubm9uV3JpdGFibGVcbiAgICB9KTtcbiAgfSByZXR1cm4gTztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuXG4vLyBgTWF0aC50cnVuY2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW1hdGgudHJ1bmNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1tYXRoLXRydW5jIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gTWF0aC50cnVuYyB8fCBmdW5jdGlvbiB0cnVuYyh4KSB7XG4gIHZhciBuID0gK3g7XG4gIHJldHVybiAobiA+IDAgPyBmbG9vciA6IGNlaWwpKG4pO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdHJ1bmMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWF0aC10cnVuYycpO1xuXG4vLyBgVG9JbnRlZ2VyT3JJbmZpbml0eWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvaW50ZWdlcm9yaW5maW5pdHlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBudW1iZXIgPSArYXJndW1lbnQ7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gIHJldHVybiBudW1iZXIgIT09IG51bWJlciB8fCBudW1iZXIgPT09IDAgPyAwIDogdHJ1bmMobnVtYmVyKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xuXG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5cbi8vIEhlbHBlciBmb3IgYSBwb3B1bGFyIHJlcGVhdGluZyBjYXNlIG9mIHRoZSBzcGVjOlxuLy8gTGV0IGludGVnZXIgYmUgPyBUb0ludGVnZXIoaW5kZXgpLlxuLy8gSWYgaW50ZWdlciA8IDAsIGxldCByZXN1bHQgYmUgbWF4KChsZW5ndGggKyBpbnRlZ2VyKSwgMCk7IGVsc2UgbGV0IHJlc3VsdCBiZSBtaW4oaW50ZWdlciwgbGVuZ3RoKS5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgdmFyIGludGVnZXIgPSB0b0ludGVnZXJPckluZmluaXR5KGluZGV4KTtcbiAgcmV0dXJuIGludGVnZXIgPCAwID8gbWF4KGludGVnZXIgKyBsZW5ndGgsIDApIDogbWluKGludGVnZXIsIGxlbmd0aCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHknKTtcblxudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBgVG9MZW5ndGhgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b2xlbmd0aFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIGxlbiA9IHRvSW50ZWdlck9ySW5maW5pdHkoYXJndW1lbnQpO1xuICByZXR1cm4gbGVuID4gMCA/IG1pbihsZW4sIDB4MUZGRkZGRkZGRkZGRkYpIDogMDsgLy8gMiAqKiA1MyAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG5cbi8vIGBMZW5ndGhPZkFycmF5TGlrZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWxlbmd0aG9mYXJyYXlsaWtlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHRvTGVuZ3RoKG9iai5sZW5ndGgpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS57IGluZGV4T2YsIGluY2x1ZGVzIH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gbGVuZ3RoT2ZBcnJheUxpa2UoTyk7XG4gICAgaWYgKGxlbmd0aCA9PT0gMCkgcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT09IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gICAgICBpZiAodmFsdWUgIT09IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICBpZiAoKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pICYmIE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBBcnJheS5wcm90b3R5cGUuaW5jbHVkZXNgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmNsdWRlc1xuICBpbmNsdWRlczogY3JlYXRlTWV0aG9kKHRydWUpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmluZGV4T2ZgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmRleG9mXG4gIGluZGV4T2Y6IGNyZWF0ZU1ldGhvZChmYWxzZSlcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgaW5kZXhPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pbmNsdWRlcycpLmluZGV4T2Y7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xuXG52YXIgcHVzaCA9IHVuY3VycnlUaGlzKFtdLnB1c2gpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSAhaGFzT3duKGhpZGRlbktleXMsIGtleSkgJiYgaGFzT3duKE8sIGtleSkgJiYgcHVzaChyZXN1bHQsIGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXNPd24oTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+aW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcHVzaChyZXN1bHQsIGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gSUU4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IFtcbiAgJ2NvbnN0cnVjdG9yJyxcbiAgJ2hhc093blByb3BlcnR5JyxcbiAgJ2lzUHJvdG90eXBlT2YnLFxuICAncHJvcGVydHlJc0VudW1lcmFibGUnLFxuICAndG9Mb2NhbGVTdHJpbmcnLFxuICAndG9TdHJpbmcnLFxuICAndmFsdWVPZidcbl07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGludGVybmFsT2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcblxudmFyIGhpZGRlbktleXMgPSBlbnVtQnVnS2V5cy5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5bmFtZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHluYW1lcyAtLSBzYWZlXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuIGludGVybmFsT2JqZWN0S2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eXN5bWJvbHMgLS0gc2FmZVxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcblxudmFyIGNvbmNhdCA9IHVuY3VycnlUaGlzKFtdLmNvbmNhdCk7XG5cbi8vIGFsbCBvYmplY3Qga2V5cywgaW5jbHVkZXMgbm9uLWVudW1lcmFibGUgYW5kIHN5bWJvbHNcbm1vZHVsZS5leHBvcnRzID0gZ2V0QnVpbHRJbignUmVmbGVjdCcsICdvd25LZXlzJykgfHwgZnVuY3Rpb24gb3duS2V5cyhpdCkge1xuICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUuZihhbk9iamVjdChpdCkpO1xuICB2YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlLmY7XG4gIHJldHVybiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPyBjb25jYXQoa2V5cywgZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSkgOiBrZXlzO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBvd25LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL293bi1rZXlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc291cmNlLCBleGNlcHRpb25zKSB7XG4gIHZhciBrZXlzID0gb3duS2V5cyhzb3VyY2UpO1xuICB2YXIgZGVmaW5lUHJvcGVydHkgPSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mO1xuICB2YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlLmY7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIGlmICghaGFzT3duKHRhcmdldCwga2V5KSAmJiAhKGV4Y2VwdGlvbnMgJiYgaGFzT3duKGV4Y2VwdGlvbnMsIGtleSkpKSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgfVxuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIHJlcGxhY2VtZW50ID0gLyN8XFwucHJvdG90eXBlXFwuLztcblxudmFyIGlzRm9yY2VkID0gZnVuY3Rpb24gKGZlYXR1cmUsIGRldGVjdGlvbikge1xuICB2YXIgdmFsdWUgPSBkYXRhW25vcm1hbGl6ZShmZWF0dXJlKV07XG4gIHJldHVybiB2YWx1ZSA9PT0gUE9MWUZJTEwgPyB0cnVlXG4gICAgOiB2YWx1ZSA9PT0gTkFUSVZFID8gZmFsc2VcbiAgICA6IGlzQ2FsbGFibGUoZGV0ZWN0aW9uKSA/IGZhaWxzKGRldGVjdGlvbilcbiAgICA6ICEhZGV0ZWN0aW9uO1xufTtcblxudmFyIG5vcm1hbGl6ZSA9IGlzRm9yY2VkLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgcmV0dXJuIFN0cmluZyhzdHJpbmcpLnJlcGxhY2UocmVwbGFjZW1lbnQsICcuJykudG9Mb3dlckNhc2UoKTtcbn07XG5cbnZhciBkYXRhID0gaXNGb3JjZWQuZGF0YSA9IHt9O1xudmFyIE5BVElWRSA9IGlzRm9yY2VkLk5BVElWRSA9ICdOJztcbnZhciBQT0xZRklMTCA9IGlzRm9yY2VkLlBPTFlGSUxMID0gJ1AnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRm9yY2VkO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKS5mO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBkZWZpbmVCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbicpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcbnZhciBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcHktY29uc3RydWN0b3ItcHJvcGVydGllcycpO1xudmFyIGlzRm9yY2VkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWZvcmNlZCcpO1xuXG4vKlxuICBvcHRpb25zLnRhcmdldCAgICAgICAgIC0gbmFtZSBvZiB0aGUgdGFyZ2V0IG9iamVjdFxuICBvcHRpb25zLmdsb2JhbCAgICAgICAgIC0gdGFyZ2V0IGlzIHRoZSBnbG9iYWwgb2JqZWN0XG4gIG9wdGlvbnMuc3RhdCAgICAgICAgICAgLSBleHBvcnQgYXMgc3RhdGljIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucHJvdG8gICAgICAgICAgLSBleHBvcnQgYXMgcHJvdG90eXBlIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucmVhbCAgICAgICAgICAgLSByZWFsIHByb3RvdHlwZSBtZXRob2QgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLmZvcmNlZCAgICAgICAgIC0gZXhwb3J0IGV2ZW4gaWYgdGhlIG5hdGl2ZSBmZWF0dXJlIGlzIGF2YWlsYWJsZVxuICBvcHRpb25zLmJpbmQgICAgICAgICAgIC0gYmluZCBtZXRob2RzIHRvIHRoZSB0YXJnZXQsIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy53cmFwICAgICAgICAgICAtIHdyYXAgY29uc3RydWN0b3JzIHRvIHByZXZlbnRpbmcgZ2xvYmFsIHBvbGx1dGlvbiwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLnVuc2FmZSAgICAgICAgIC0gdXNlIHRoZSBzaW1wbGUgYXNzaWdubWVudCBvZiBwcm9wZXJ0eSBpbnN0ZWFkIG9mIGRlbGV0ZSArIGRlZmluZVByb3BlcnR5XG4gIG9wdGlvbnMuc2hhbSAgICAgICAgICAgLSBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gIG9wdGlvbnMuZW51bWVyYWJsZSAgICAgLSBleHBvcnQgYXMgZW51bWVyYWJsZSBwcm9wZXJ0eVxuICBvcHRpb25zLmRvbnRDYWxsR2V0U2V0IC0gcHJldmVudCBjYWxsaW5nIGEgZ2V0dGVyIG9uIHRhcmdldFxuICBvcHRpb25zLm5hbWUgICAgICAgICAgIC0gdGhlIC5uYW1lIG9mIHRoZSBmdW5jdGlvbiBpZiBpdCBkb2VzIG5vdCBtYXRjaCB0aGUga2V5XG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3B0aW9ucywgc291cmNlKSB7XG4gIHZhciBUQVJHRVQgPSBvcHRpb25zLnRhcmdldDtcbiAgdmFyIEdMT0JBTCA9IG9wdGlvbnMuZ2xvYmFsO1xuICB2YXIgU1RBVElDID0gb3B0aW9ucy5zdGF0O1xuICB2YXIgRk9SQ0VELCB0YXJnZXQsIGtleSwgdGFyZ2V0UHJvcGVydHksIHNvdXJjZVByb3BlcnR5LCBkZXNjcmlwdG9yO1xuICBpZiAoR0xPQkFMKSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsVGhpcztcbiAgfSBlbHNlIGlmIChTVEFUSUMpIHtcbiAgICB0YXJnZXQgPSBnbG9iYWxUaGlzW1RBUkdFVF0gfHwgZGVmaW5lR2xvYmFsUHJvcGVydHkoVEFSR0VULCB7fSk7XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsVGhpc1tUQVJHRVRdICYmIGdsb2JhbFRoaXNbVEFSR0VUXS5wcm90b3R5cGU7XG4gIH1cbiAgaWYgKHRhcmdldCkgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgc291cmNlUHJvcGVydHkgPSBzb3VyY2Vba2V5XTtcbiAgICBpZiAob3B0aW9ucy5kb250Q2FsbEdldFNldCkge1xuICAgICAgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSk7XG4gICAgICB0YXJnZXRQcm9wZXJ0eSA9IGRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci52YWx1ZTtcbiAgICB9IGVsc2UgdGFyZ2V0UHJvcGVydHkgPSB0YXJnZXRba2V5XTtcbiAgICBGT1JDRUQgPSBpc0ZvcmNlZChHTE9CQUwgPyBrZXkgOiBUQVJHRVQgKyAoU1RBVElDID8gJy4nIDogJyMnKSArIGtleSwgb3B0aW9ucy5mb3JjZWQpO1xuICAgIC8vIGNvbnRhaW5lZCBpbiB0YXJnZXRcbiAgICBpZiAoIUZPUkNFRCAmJiB0YXJnZXRQcm9wZXJ0eSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodHlwZW9mIHNvdXJjZVByb3BlcnR5ID09IHR5cGVvZiB0YXJnZXRQcm9wZXJ0eSkgY29udGludWU7XG4gICAgICBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzKHNvdXJjZVByb3BlcnR5LCB0YXJnZXRQcm9wZXJ0eSk7XG4gICAgfVxuICAgIC8vIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgICBpZiAob3B0aW9ucy5zaGFtIHx8ICh0YXJnZXRQcm9wZXJ0eSAmJiB0YXJnZXRQcm9wZXJ0eS5zaGFtKSkge1xuICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KHNvdXJjZVByb3BlcnR5LCAnc2hhbScsIHRydWUpO1xuICAgIH1cbiAgICBkZWZpbmVCdWlsdEluKHRhcmdldCwga2V5LCBzb3VyY2VQcm9wZXJ0eSwgb3B0aW9ucyk7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tbWFwIC0tIHNhZmVcbnZhciBNYXBQcm90b3R5cGUgPSBNYXAucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW1hcCAtLSBzYWZlXG4gIE1hcDogTWFwLFxuICBzZXQ6IHVuY3VycnlUaGlzKE1hcFByb3RvdHlwZS5zZXQpLFxuICBnZXQ6IHVuY3VycnlUaGlzKE1hcFByb3RvdHlwZS5nZXQpLFxuICBoYXM6IHVuY3VycnlUaGlzKE1hcFByb3RvdHlwZS5oYXMpLFxuICByZW1vdmU6IHVuY3VycnlUaGlzKE1hcFByb3RvdHlwZVsnZGVsZXRlJ10pLFxuICBwcm90bzogTWFwUHJvdG90eXBlXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIE1hcEhlbHBlcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWFwLWhlbHBlcnMnKTtcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcblxudmFyIGdldCA9IE1hcEhlbHBlcnMuZ2V0O1xudmFyIGhhcyA9IE1hcEhlbHBlcnMuaGFzO1xudmFyIHNldCA9IE1hcEhlbHBlcnMuc2V0O1xuXG4vLyBgTWFwLnByb3RvdHlwZS5nZXRPckluc2VydGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW1hcC5wcm90b3R5cGUuZ2V0b3JpbnNlcnRcbiQoeyB0YXJnZXQ6ICdNYXAnLCBwcm90bzogdHJ1ZSwgcmVhbDogdHJ1ZSwgZm9yY2VkOiBJU19QVVJFIH0sIHtcbiAgZ2V0T3JJbnNlcnQ6IGZ1bmN0aW9uIGdldE9ySW5zZXJ0KGtleSwgdmFsdWUpIHtcbiAgICBpZiAoaGFzKHRoaXMsIGtleSkpIHJldHVybiBnZXQodGhpcywga2V5KTtcbiAgICBzZXQodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIE1hcEhlbHBlcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWFwLWhlbHBlcnMnKTtcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcblxudmFyIGdldCA9IE1hcEhlbHBlcnMuZ2V0O1xudmFyIGhhcyA9IE1hcEhlbHBlcnMuaGFzO1xudmFyIHNldCA9IE1hcEhlbHBlcnMuc2V0O1xuXG4vLyBgTWFwLnByb3RvdHlwZS5nZXRPckluc2VydENvbXB1dGVkYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbWFwLnByb3RvdHlwZS5nZXRvcmluc2VydGNvbXB1dGVkXG4kKHsgdGFyZ2V0OiAnTWFwJywgcHJvdG86IHRydWUsIHJlYWw6IHRydWUsIGZvcmNlZDogSVNfUFVSRSB9LCB7XG4gIGdldE9ySW5zZXJ0Q29tcHV0ZWQ6IGZ1bmN0aW9uIGdldE9ySW5zZXJ0Q29tcHV0ZWQoa2V5LCBjYWxsYmFja2ZuKSB7XG4gICAgdmFyIGhhc0tleSA9IGhhcyh0aGlzLCBrZXkpO1xuICAgIGFDYWxsYWJsZShjYWxsYmFja2ZuKTtcbiAgICBpZiAoaGFzS2V5KSByZXR1cm4gZ2V0KHRoaXMsIGtleSk7XG4gICAgLy8gQ2Fub25pY2FsaXplS2V5ZWRDb2xsZWN0aW9uS2V5XG4gICAgaWYgKGtleSA9PT0gMCAmJiAxIC8ga2V5ID09PSAtSW5maW5pdHkpIGtleSA9IDA7XG4gICAgdmFyIHZhbHVlID0gY2FsbGJhY2tmbihrZXkpO1xuICAgIHNldCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn0pO1xuIiwgIntcblx0XCJwb3J0bGV0Q2xhc3NcIjogXCJ4LW5vdGVUQS12aWV3ZXJcIixcblx0XCJ2ZXJzaW9uXCI6IFwiMS4wXCJcbn1cbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5KU1gnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuY2xhc3MgQXBpUmV0cnlGYWlsRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG5cdHByaXZhdGUgZXJyb3JzOiBzdHJpbmdbXTtcblxuXHRwdWJsaWMgY29uc3RydWN0b3IoZXJyb3JzOiBzdHJpbmdbXSkge1xuXHRcdHN1cGVyKGBBcGkgY2FsbHMgZmFpbGVkICR7ZXJyb3JzLmxlbmd0aH0gdGltZShzKSBpbiBhIHJvdy5gKTtcblx0XHR0aGlzLm5hbWUgPSAnQXBpUmV0cnlGYWlsRXJyb3InO1xuXHRcdHRoaXMuZXJyb3JzID0gZXJyb3JzO1xuXHR9XG5cblx0cHVibGljIHRvSlF1ZXJ5KCk6IEpRdWVyeSB7XG5cdFx0Y29uc3QgZXJyb3JDb3VudDogbnVtYmVyID0gdGhpcy5lcnJvcnMubGVuZ3RoO1xuXG5cdFx0Y29uc3QgZWxlbWVudCA9IChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JcIj5cblx0XHRcdFx0PHA+e2dldE1lc3NhZ2UoJ0FwaVJldHJ5RmFpbEVycm9yJykucmVwbGFjZSgvXFwkMS9nLCBlcnJvckNvdW50LnRvU3RyaW5nKCkpfTwvcD5cblx0XHRcdFx0PG9sPlxuXHRcdFx0XHRcdHt0aGlzLmVycm9ycy5tYXA8UmVhY3QuUmVhY3RFbGVtZW50PigoZXJyb3IsIGluZGV4KSA9PiAoXG5cdFx0XHRcdFx0XHQ8bGkga2V5PXtpbmRleH0+XG5cdFx0XHRcdFx0XHRcdHtlcnJvci5zcGxpdCgnXFxuJykubWFwPFJlYWN0LlJlYWN0RWxlbWVudD4oKGxpbmUsIG51bWJlcikgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdDxwIGtleT17bnVtYmVyfT57bGluZX08L3A+XG5cdFx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQpKX1cblx0XHRcdFx0PC9vbD5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdFx0Y29uc3QgJGVsZW1lbnQgPSAkKGVsZW1lbnQpIGFzIEpRdWVyeTtcblxuXHRcdHJldHVybiAkZWxlbWVudDtcblx0fVxufVxuXG5leHBvcnQge0FwaVJldHJ5RmFpbEVycm9yfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0QXBpUmV0cnlGYWlsRXJyb3I6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQXBpIGNhbGxzIGZhaWxlZCAkMSB0aW1lKHMpIGluIGEgcm93LiBFcnJvcnM6ICcsXG5cdFx0XHQnemgtaGFucyc6ICdBcGkg6LCD55So6L+e57ut5aSx6LSlICQxIOasoe+8jCQxIOasoeiwg+eUqOeahOmUmeivr+WIhuWIq+S4uu+8micsXG5cdFx0XHQnemgtaGFudCc6ICdBcGkg6Kq/55So6YCj57qM5aSx5pWXICQxIOasoe+8jCQxIOasoeiqv+eUqOeahOmMr+iqpOWIhuWIpeeCuu+8micsXG5cdFx0fSksXG5cdFx0TG9hZGluZzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdMb2FkaW5nLi4uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ato+WcqOWKoOi9veKApuKApicsXG5cdFx0XHQnemgtaGFudCc6ICfmraPlnKjovInlhaXigKbigKYnLFxuXHRcdH0pLFxuXHRcdFRpdGxlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ05vdGVUQScsXG5cdFx0XHQnemgtaGFucyc6ICflrZfor43ovazmjaInLFxuXHRcdFx0J3poLWhhbnQnOiAn5a2X6Kme6L2J5o+bJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBOb3RlVEEvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge0FwaVJldHJ5RmFpbEVycm9yfSBmcm9tICcuL3V0aWwvQXBpUmV0cnlGYWlsRXJyb3InO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcblxudHlwZSBBcGlQYXJzZSA9IG13LkFwaVsncGFyc2UnXTtcbnR5cGUgQXBpUGFyc2VQYXJhbWV0ZXJzID0gUGFyYW1ldGVyczxBcGlQYXJzZT47XG50eXBlIEFwaVBhcnNlUmVzcG9uc2UgPSBBd2FpdGVkPFJldHVyblR5cGU8QXBpUGFyc2U+PjtcbnR5cGUgQXBpUmVzcG9uc2UgPSBBcGlQYXJzZVJlc3BvbnNlIHwgQXBpUmV0cnlGYWlsRXJyb3I7XG5cbmNvbnN0IHBhcnNlV2l0aFJldHJ5ID0gKFxuXHRhcmdzOiBBcGlQYXJzZVBhcmFtZXRlcnMsXG5cdGNvdW50OiBudW1iZXIgPSAzLFxuXHRwcmV2aW91c0Vycm9yczogc3RyaW5nW10gPSBbXVxuKTogSlF1ZXJ5LkRlZmVycmVkPEFwaVJlc3BvbnNlPiA9PiB7XG5cdGlmICghY291bnQpIHtcblx0XHRyZXR1cm4gJC5EZWZlcnJlZDxBcGlSZXRyeUZhaWxFcnJvcj4oKS5yZWplY3QobmV3IEFwaVJldHJ5RmFpbEVycm9yKHByZXZpb3VzRXJyb3JzKSk7XG5cdH1cblxuXHRjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQ8QXBpUmVzcG9uc2U+KCk7XG5cblx0dm9pZCBhcGlcblx0XHQucGFyc2UoLi4uYXJncylcblx0XHQudGhlbigocmVzcG9uc2U6IEFwaVBhcnNlUmVzcG9uc2UpOiB2b2lkID0+IHtcblx0XHRcdHZvaWQgZGVmZXJyZWQucmVzb2x2ZShyZXNwb25zZSk7XG5cdFx0fSlcblx0XHQuY2F0Y2goKGVycm9yPzogRXJyb3IgfCBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXG5cdFx0XHRpZiAoZXJyb3IgJiYgdHlwZW9mIGVycm9yID09PSAnb2JqZWN0JyAmJiAnc3RhY2snIGluIGVycm9yKSB7XG5cdFx0XHRcdHByZXZpb3VzRXJyb3JzW3ByZXZpb3VzRXJyb3JzLmxlbmd0aF0gPSBlcnJvci5zdGFjaztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHByZXZpb3VzRXJyb3JzW3ByZXZpb3VzRXJyb3JzLmxlbmd0aF0gPSBTdHJpbmcoZXJyb3IpO1xuXHRcdFx0fVxuXG5cdFx0XHRwYXJzZVdpdGhSZXRyeShhcmdzLCAtLWNvdW50LCBwcmV2aW91c0Vycm9ycylcblx0XHRcdFx0LnRoZW4oKG5ld1Jlc3BvbnNlOiBBcGlSZXNwb25zZSk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVzb2x2ZShuZXdSZXNwb25zZSk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaCgobmV3RXJyb3I/OiBFcnJvciB8IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVqZWN0KG5ld0Vycm9yKTtcblx0XHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0cmV0dXJuIGRlZmVycmVkO1xufTtcblxuY29uc3QgcGFyc2VXaWtpdGV4dCA9ICguLi5hcmdzOiBBcGlQYXJzZVBhcmFtZXRlcnMpOiBKUXVlcnkuRGVmZXJyZWQ8QXBpUmVzcG9uc2U+ID0+IHtcblx0cmV0dXJuIHBhcnNlV2l0aFJldHJ5KGFyZ3MpO1xufTtcblxuZXhwb3J0IHt0eXBlIEFwaVBhcnNlUmVzcG9uc2UsIHR5cGUgQXBpUmVzcG9uc2UsIHBhcnNlV2lraXRleHR9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7dHlwZSBBcGlQYXJzZVJlc3BvbnNlLCB0eXBlIEFwaVJlc3BvbnNlLCBwYXJzZVdpa2l0ZXh0fSBmcm9tICcuL3BhcnNlV2lraXRleHQnO1xuaW1wb3J0IHtBcGlSZXRyeUZhaWxFcnJvcn0gZnJvbSAnLi91dGlsL0FwaVJldHJ5RmFpbEVycm9yJztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LkpTWCc7XG5pbXBvcnQge2Fzc2VydH0gZnJvbSAnLi91dGlsL2Fzc2VydCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge3ZpZXdlck1hcH0gZnJvbSAnLi9pbml0Vmlld01hcCc7XG5pbXBvcnQge3dpbmRvd01hbmFnZXJ9IGZyb20gJy4vaW5pdFdpbmRvd01hbmFnZXInO1xuXG5jb25zdCBnZXRWaWV3ZXIgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+LCBoYXNoOiBzdHJpbmcpOiB0eXBlb2Ygdmlld2VyID0+IHtcblx0aWYgKHZpZXdlck1hcC5oYXMoaGFzaCkpIHtcblx0XHRjb25zdCBzdG9yZWRWaWV3ZXIgPSB2aWV3ZXJNYXAuZ2V0KGhhc2gpO1xuXHRcdGFzc2VydChzdG9yZWRWaWV3ZXIsICd2aWV3ZXInKTtcblxuXHRcdHJldHVybiBzdG9yZWRWaWV3ZXI7XG5cdH1cblxuXHRjb25zdCAkdGFyZ2V0RWxlbWVudDogSlF1ZXJ5ID0gJGJvZHkuZmluZChgI25vdGVUQS0ke2hhc2h9YCk7XG5cdGlmICghJHRhcmdldEVsZW1lbnQubGVuZ3RoKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGBDYW4ndCBnZXQgRWxlbWVudCBcIiNub3RlVEEtJHtoYXNofVwiLmApO1xuXHR9XG5cblx0Y29uc3Qge3dnUGFnZU5hbWUsIHdnVXNlclZhcmlhbnR9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyNTAzXG5cdGNsYXNzIE5vdGVUQVZpZXdlciBleHRlbmRzIE9PLnVpLlByb2Nlc3NEaWFsb2cge1xuXHRcdHByaXZhdGUgZGF0YUlzTG9hZGVkOiBib29sZWFuO1xuXHRcdHByaXZhdGUgZXhlY3V0ZVByb21pc2U/OiBSZXR1cm5UeXBlPHR5cGVvZiB0aGlzLmRvRXhlY3V0ZT47XG5cdFx0cHJpdmF0ZSBtdXRhdGlvbk9ic2VydmVyOiBNdXRhdGlvbk9ic2VydmVyO1xuXHRcdHByaXZhdGUgJHJlYWxDb250ZW50OiBKUXVlcnk7XG5cdFx0cHJpdmF0ZSAkYm9keTogSlF1ZXJ5IHwgdW5kZWZpbmVkO1xuXHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyNTAzXG5cdFx0cHJpdmF0ZSBzdGF0aWMgbGFzdEVycm9yPzogT08udWkuRXJyb3I7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgbm90ZVRBUGFyc2VUZXh0OiBzdHJpbmc7XG5cblx0XHRwdWJsaWMgY29uc3RydWN0b3IoKSB7XG5cdFx0XHRzdXBlcih7XG5cdFx0XHRcdHNpemU6ICdsYXJnZXInLFxuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuZGF0YUlzTG9hZGVkID0gZmFsc2U7XG5cdFx0XHR0aGlzLiRyZWFsQ29udGVudCA9ICQoPGRpdiAvPikgYXMgSlF1ZXJ5O1xuXG5cdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjUwM1xuXHRcdFx0dGhpcy5tdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKHRoaXMgYXMgT08udWkuUHJvY2Vzc0RpYWxvZykudXBkYXRlU2l6ZS5iaW5kKHRoaXMpKTtcblx0XHRcdHRoaXMubXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKHRoaXMuJHJlYWxDb250ZW50LmdldCgwKSBhcyBIVE1MRWxlbWVudCwge1xuXHRcdFx0XHRjaGlsZExpc3Q6IHRydWUsXG5cdFx0XHRcdHN1YnRyZWU6IHRydWUsXG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTNDExMlxuXHRcdHB1YmxpYyBvdmVycmlkZSBpbml0aWFsaXplKCk6IHRoaXMge1xuXHRcdFx0c3VwZXIuaW5pdGlhbGl6ZSgpO1xuXG5cdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjUwM1xuXHRcdFx0Y29uc3QgcGFuZWxMYXlvdXQ6IE9PLnVpLlBhbmVsTGF5b3V0ID0gbmV3IE9PLnVpLlBhbmVsTGF5b3V0KHtcblx0XHRcdFx0ZXhwYW5kZWQ6IGZhbHNlLFxuXHRcdFx0XHRwYWRkZWQ6IHRydWUsXG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy4kcmVhbENvbnRlbnQuYXBwZW5kVG8ocGFuZWxMYXlvdXQuJGVsZW1lbnQpO1xuXHRcdFx0cGFuZWxMYXlvdXQuJGVsZW1lbnQuYXBwZW5kVG8odGhpcy4kYm9keSBhcyBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik7XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyNTAzXG5cdFx0cHVibGljIG92ZXJyaWRlIGdldFNldHVwUHJvY2VzcyhkYXRhOiBPTy51aS5EaWFsb2cuU2V0dXBEYXRhTWFwKTogT08udWkuUHJvY2VzcyB7XG5cdFx0XHRyZXR1cm4gc3VwZXIuZ2V0U2V0dXBQcm9jZXNzKGRhdGEpLm5leHQoKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHR2b2lkIHRoaXMuZG9FeGVjdXRlV3JhcCgpO1xuXHRcdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjUwM1xuXHRcdFx0XHR2b2lkIChOb3RlVEFWaWV3ZXIgYXMgT08udWkuUHJvY2Vzc0RpYWxvZykuZXhlY3V0ZUFjdGlvbignbWFpbicpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzI1MDNcblx0XHRwdWJsaWMgb3ZlcnJpZGUgZ2V0QWN0aW9uUHJvY2VzcyhhY3Rpb24/OiBzdHJpbmcpOiBPTy51aS5Qcm9jZXNzIHtcblx0XHRcdGNvbnN0IGlzTWFpbkFjdGlvbjogYm9vbGVhbiA9IGFjdGlvbiA9PT0gJ21haW4nO1xuXG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRzdXBlclxuXHRcdFx0XHRcdC5nZXRBY3Rpb25Qcm9jZXNzKGFjdGlvbilcblx0XHRcdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTNzAzMFxuXHRcdFx0XHRcdC5uZXh0KCgpID0+IHtcblx0XHRcdFx0XHRcdGlmIChpc01haW5BY3Rpb24pIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMuZG9FeGVjdXRlV3JhcCgpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0Lm5leHQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKGlzTWFpbkFjdGlvbiAmJiBOb3RlVEFWaWV3ZXIubGFzdEVycm9yKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBOb3RlVEFWaWV3ZXIubGFzdEVycm9yO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cmV0dXJuIHN1cGVyLmdldEFjdGlvblByb2Nlc3MoYWN0aW9uKS5leGVjdXRlKCk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0cHVibGljIGRlc3Ryb3koKTogdm9pZCB7XG5cdFx0XHR0aGlzLm11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgc3RhdGljIGdldE5vdGVUQVBhcnNlVGV4dCgpOiBKUXVlcnkuRGVmZXJyZWQ8QXBpUmVzcG9uc2U+IHtcblx0XHRcdGlmIChOb3RlVEFWaWV3ZXIubm90ZVRBUGFyc2VUZXh0KSB7XG5cdFx0XHRcdHJldHVybiAkLkRlZmVycmVkPHN0cmluZz4oKS5yZXNvbHZlKE5vdGVUQVZpZXdlci5ub3RlVEFQYXJzZVRleHQpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCAkbm90ZVRBdGl0bGU6IEpRdWVyeSA9ICR0YXJnZXRFbGVtZW50LmZpbmQoJy5ub3RlVEEtdGl0bGUnKTtcblx0XHRcdGNvbnN0IGFjdHVhbFRpdGxlOiBzdHJpbmcgPSB3Z1BhZ2VOYW1lLnJlcGxhY2UoL18vZywgJyAnKTtcblx0XHRcdGxldCB3aWtpdGV4dDogc3RyaW5nID0gJyc7XG5cblx0XHRcdGNvbnN0IHRpdGxlRGVmZXJyZWQgPSAkLkRlZmVycmVkPEFwaVJlc3BvbnNlPigpO1xuXG5cdFx0XHRpZiAoJG5vdGVUQXRpdGxlLmxlbmd0aCkge1xuXHRcdFx0XHRjb25zdCB0aXRsZUNvbnY6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICRub3RlVEF0aXRsZS5hdHRyKCdkYXRhLW5vdGV0YS1jb2RlJyk7XG5cdFx0XHRcdGFzc2VydCh0aXRsZUNvbnYsICd0aXRsZUNvbnYnKTtcblxuXHRcdFx0XHRsZXQgdGl0bGVEZXNjOiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkbm90ZVRBdGl0bGUuYXR0cignZGF0YS1ub3RldGEtZGVzYycpO1xuXHRcdFx0XHRpZiAodGl0bGVEZXNjKSB7XG5cdFx0XHRcdFx0dGl0bGVEZXNjID0gYO+8iCR7dGl0bGVEZXNjfe+8iWA7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGl0bGVEZXNjID0gJyc7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR3aWtpdGV4dCArPSBgPHNwYW4gc3R5bGU9XCJmbG9hdDpyaWdodFwiPnt7ZWRpdHwke2FjdHVhbFRpdGxlfXxzZWN0aW9uPTB9fTwvc3Bhbj5cXG5gO1xuXHRcdFx0XHR3aWtpdGV4dCArPSAnOyDmnKzmlofkvb/nlKhbW0hlbHA65a2X6K+N6L2s5o2i5aSE55CGfOagh+mimOaJi+W3pei9rOaNol1dXFxuJztcblx0XHRcdFx0d2lraXRleHQgKz0gYCog6L2s5o2i5qCH6aKY5Li677yaLXtEfCR7dGl0bGVDb252fX0tJHt0aXRsZURlc2N9XFxuYDtcblx0XHRcdFx0d2lraXRleHQgKz0gYCog5a6e6ZmF5qCH6aKY5Li677yaLXtSfCR7YWN0dWFsVGl0bGV9fS3vvJvlvZPliY3mmL7npLrkuLrvvJote3wke3RpdGxlQ29udn19LVxcbmA7XG5cblx0XHRcdFx0dm9pZCB0aXRsZURlZmVycmVkLnJlc29sdmUoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHBhcnNlV2lraXRleHQoYHt7bm90ZVRBL211bHRpdGl0bGV8JHthY3R1YWxUaXRsZX19fWAsIHtcblx0XHRcdFx0XHR0aXRsZTogYWN0dWFsVGl0bGUsXG5cdFx0XHRcdFx0dmFyaWFudDogJ3poJyxcblx0XHRcdFx0fSlcblx0XHRcdFx0XHQudGhlbigocmVzdWx0SHRtbDogQXBpUmVzcG9uc2UpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdGNvbnN0ICRtdWx0aVRpdGxlOiBKUXVlcnkgPSAkKCQucGFyc2VIVE1MKHJlc3VsdEh0bWwgYXMgQXBpUGFyc2VSZXNwb25zZSkpLmZpbmQoXG5cdFx0XHRcdFx0XHRcdCcubm90ZVRBLW11bHRpdGl0bGUnXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0aWYgKCRtdWx0aVRpdGxlLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0XHR3aWtpdGV4dCArPSAnOyDmnKzmlodbW0hlbHA65a2X6K+N6L2s5o2i5aSE55CGfOagh+mimOWPr+iDvee7j+i/h+i9rOaNol1dXFxuKiDovazmjaLmoIfpopjkuLrvvJonO1xuXG5cdFx0XHRcdFx0XHRcdGNvbnN0IHRleHRWYXJpYW50OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4gPSB7fTtcblx0XHRcdFx0XHRcdFx0Y29uc3QgdmFyaWFudFRleHQ6IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IG51bGw+ID0ge307XG5cblx0XHRcdFx0XHRcdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRtdWx0aVRpdGxlLmNoaWxkcmVuKCkpIHtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCAkZWxlbWVudCA9ICQoZWxlbWVudCk7XG5cblx0XHRcdFx0XHRcdFx0XHRjb25zdCB2YXJpYW50OiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1tdWx0aXRpdGxlLXZhcmlhbnQnKTtcblx0XHRcdFx0XHRcdFx0XHRhc3NlcnQodmFyaWFudCwgJ3ZhcmlhbnQnKTtcblxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHRleHQ6IHN0cmluZyA9ICRlbGVtZW50LnRleHQoKS50cmltKCk7XG5cdFx0XHRcdFx0XHRcdFx0dmFyaWFudFRleHRbdmFyaWFudF0gPSB0ZXh0O1xuXG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgdGV4dFZhcmlhbnRBcnJheTogc3RyaW5nW10gfCB1bmRlZmluZWQgPSB0ZXh0VmFyaWFudFt0ZXh0XTtcblx0XHRcdFx0XHRcdFx0XHRpZiAodGV4dFZhcmlhbnRBcnJheSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0dGV4dFZhcmlhbnRBcnJheVt0ZXh0VmFyaWFudEFycmF5Lmxlbmd0aF0gPSB2YXJpYW50O1xuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0ZXh0VmFyaWFudFt0ZXh0XSA9IFt2YXJpYW50XTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRjb25zdCB0aXRsZUNvbnZlcnRlZDogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCA9IHZhcmlhbnRUZXh0W3dnVXNlclZhcmlhbnQgYXMgc3RyaW5nXTtcblxuXHRcdFx0XHRcdFx0XHRjb25zdCBtdWx0aVRpdGxlOiBzdHJpbmdbXSA9IFtdO1xuXHRcdFx0XHRcdFx0XHRmb3IgKGNvbnN0IHRleHQgb2YgT2JqZWN0LnZhbHVlcyh2YXJpYW50VGV4dCkpIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAodGV4dCA9PT0gbnVsbCB8fCB0ZXh0ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHZhcmlhbnRzOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCA9IHRleHRWYXJpYW50W3RleHRdO1xuXHRcdFx0XHRcdFx0XHRcdGlmICghdmFyaWFudHMpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdGZvciAoY29uc3QgdmFyaWFudCBvZiB2YXJpYW50cykge1xuXHRcdFx0XHRcdFx0XHRcdFx0dmFyaWFudFRleHRbdmFyaWFudF0gPSBudWxsO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHZhcmlhbnRzTmFtZTogc3RyaW5nID0gdmFyaWFudHNcblx0XHRcdFx0XHRcdFx0XHRcdC5tYXAoKHZhcmlhbnQ6IHN0cmluZyk6IHN0cmluZyA9PiBgLXtSfHt7TWVkaWFXaWtpOlZhcmlhbnRuYW1lLSR7dmFyaWFudH19fX0tYClcblx0XHRcdFx0XHRcdFx0XHRcdC5qb2luKCfjgIEnKTtcblx0XHRcdFx0XHRcdFx0XHRtdWx0aVRpdGxlW211bHRpVGl0bGUubGVuZ3RoXSA9IGAke3ZhcmlhbnRzTmFtZX3vvJote1J8JHt0ZXh0fX0tYDtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdGNvbnN0IHN1Ykl0ZW1TZXBhcmF0b3I6IHN0cmluZyA9ICdcXG4qKiAnO1xuXHRcdFx0XHRcdFx0XHR3aWtpdGV4dCArPSBgJHtzdWJJdGVtU2VwYXJhdG9yfSR7bXVsdGlUaXRsZS5qb2luKHN1Ykl0ZW1TZXBhcmF0b3IpfWA7XG5cdFx0XHRcdFx0XHRcdHdpa2l0ZXh0ICs9IGBcXG4qIOWunumZheagh+mimOS4uu+8mi17Unwke2FjdHVhbFRpdGxlfX0t77yb5b2T5YmN5pi+56S65Li677yaLXtSfCR7dGl0bGVDb252ZXJ0ZWR9fS1cXG5gO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHR2b2lkIHRpdGxlRGVmZXJyZWQucmVzb2x2ZSgpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmNhdGNoKChlcnJvcjogQXBpUmV0cnlGYWlsRXJyb3IpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdHZvaWQgdGl0bGVEZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQ8QXBpUmVzcG9uc2U+KCk7XG5cblx0XHRcdHRpdGxlRGVmZXJyZWRcblx0XHRcdFx0LnRoZW4oKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdGNvbnN0ICRub3RlVEFncm91cHM6IEpRdWVyeSA9ICR0YXJnZXRFbGVtZW50LmZpbmQoJy5ub3RlVEEtZ3JvdXAgPiAqW2RhdGEtbm90ZXRhLWdyb3VwXScpO1xuXHRcdFx0XHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiAkbm90ZVRBZ3JvdXBzKSB7XG5cdFx0XHRcdFx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJChlbGVtZW50KTtcblx0XHRcdFx0XHRcdHN3aXRjaCAoJGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtZ3JvdXAtc291cmNlJykpIHtcblx0XHRcdFx0XHRcdFx0Y2FzZSAndGVtcGxhdGUnOlxuXHRcdFx0XHRcdFx0XHRcdHdpa2l0ZXh0ICs9IGB7e0NHcm91cC8keyRlbGVtZW50LmF0dHIoJ2RhdGEtbm90ZXRhLWdyb3VwJyl9fX1cXG5gO1xuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRjYXNlICdtb2R1bGUnOlxuXHRcdFx0XHRcdFx0XHRcdHdpa2l0ZXh0ICs9IGB7eyNpbnZva2U6Q0dyb3VwVmlld2VyfGRpYWxvZ3wkeyRlbGVtZW50LmF0dHIoJ2RhdGEtbm90ZXRhLWdyb3VwJyl9fX1cXG5gO1xuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRjYXNlICdub25lJzpcblx0XHRcdFx0XHRcdFx0XHR3aWtpdGV4dCArPSBgOyDmnKzmlofkvb/nlKjnmoTlhazlhbHovazmjaLnu4TigJwkeyRlbGVtZW50LmF0dHIoJ2RhdGEtbm90ZXRhLWdyb3VwJyl94oCd5bCa5pyq5Yib5bu6XFxuYDtcblx0XHRcdFx0XHRcdFx0XHR3aWtpdGV4dCArPSBgKiB7e2VkaXR8TW9kdWxlOkNHcm91cC8keyRlbGVtZW50LmF0dHIoJ2RhdGEtbm90ZXRhLWdyb3VwJyl9fOWIm+W7uuWFrOWFsei9rOaNoue7hOKAnCR7JGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtZ3JvdXAnKX3igJ19fVxcbmA7XG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRcdFx0d2lraXRleHQgKz0gYDsg5pyq55+l5YWs5YWx6L2s5o2i57uE4oCcJHskZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1ncm91cCcpfeKAneadpea6kOKAnCR7JGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtZ3JvdXAtc291cmNlJyl94oCdXFxuYDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRjb25zdCAkbm90ZVRBbG9jYWw6IEpRdWVyeSA9ICR0YXJnZXRFbGVtZW50LmZpbmQoJy5ub3RlVEEtbG9jYWwnKTtcblx0XHRcdFx0XHRpZiAoJG5vdGVUQWxvY2FsLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0d2lraXRleHQgKz0gYDxzcGFuIHN0eWxlPVwiZmxvYXQ6cmlnaHRcIj57e2VkaXR8JHthY3R1YWxUaXRsZX18c2VjdGlvbj0wfX08L3NwYW4+XFxuYDtcblx0XHRcdFx0XHRcdHdpa2l0ZXh0ICs9ICc7IOacrOaWh+S9v+eUqFtbSGVscDrlrZfor43ovazmjaLlpITnkIZ85YWo5paH5omL5bel6L2s5o2iXV1cXG4nO1xuXG5cdFx0XHRcdFx0XHRjb25zdCAkbm90ZVRBbG9jYWxzID0gJG5vdGVUQWxvY2FsLmNoaWxkcmVuKCcqW2RhdGEtbm90ZXRhLWNvZGVdJyk7XG5cdFx0XHRcdFx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJG5vdGVUQWxvY2Fscykge1xuXHRcdFx0XHRcdFx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJChlbGVtZW50KTtcblxuXHRcdFx0XHRcdFx0XHRsZXQgbG9jYWxEZXNjOiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1kZXNjJyk7XG5cdFx0XHRcdFx0XHRcdGlmIChsb2NhbERlc2MpIHtcblx0XHRcdFx0XHRcdFx0XHRsb2NhbERlc2MgPSBg77yIJHtsb2NhbERlc2N977yJYDtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRsb2NhbERlc2MgPSAnJztcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdGNvbnN0IGxvY2FsQ29udjogc3RyaW5nIHwgdW5kZWZpbmVkID0gJGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtY29kZScpO1xuXHRcdFx0XHRcdFx0XHR3aWtpdGV4dCArPSBgKiAte0R8JHtsb2NhbENvbnZ9fS0ke2xvY2FsRGVzY33lvZPliY3mmL7npLrkuLrvvJoteyR7bG9jYWxDb252fX0tXFxuYDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR3aWtpdGV4dCArPSAne3tub3RlVEEvZm9vdGVyfX1cXG4nO1xuXG5cdFx0XHRcdFx0Tm90ZVRBVmlld2VyLm5vdGVUQVBhcnNlVGV4dCA9IHdpa2l0ZXh0O1xuXG5cdFx0XHRcdFx0dm9pZCBkZWZlcnJlZC5yZXNvbHZlKHdpa2l0ZXh0KTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmNhdGNoKChlcnJvcjogQXBpUmV0cnlGYWlsRXJyb3IpOiB2b2lkID0+IHtcblx0XHRcdFx0XHR2b2lkIGRlZmVycmVkLnJlamVjdChlcnJvcik7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm4gZGVmZXJyZWQ7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSBkb0V4ZWN1dGUoKSB7XG5cdFx0XHRpZiAodGhpcy5kYXRhSXNMb2FkZWQpIHtcblx0XHRcdFx0cmV0dXJuICQuRGVmZXJyZWQ8QXBpUmVzcG9uc2U+KCkucmVzb2x2ZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLiRyZWFsQ29udGVudC5lbXB0eSgpLmFwcGVuZCg8cD57Z2V0TWVzc2FnZSgnTG9hZGluZycpfTwvcD4pO1xuXG5cdFx0XHRyZXR1cm4gTm90ZVRBVmlld2VyLmdldE5vdGVUQVBhcnNlVGV4dCgpXG5cdFx0XHRcdC50aGVuKCh3aWtpdGV4dDogQXBpUmVzcG9uc2UpID0+XG5cdFx0XHRcdFx0cGFyc2VXaWtpdGV4dCh3aWtpdGV4dCBhcyBBcGlQYXJzZVJlc3BvbnNlLCB7XG5cdFx0XHRcdFx0XHR0aXRsZTogJ1RlbXBsYXRlOkNHcm91cC8tJyxcblx0XHRcdFx0XHRcdHZhcmlhbnQ6IHdnVXNlclZhcmlhbnQgYXMgc3RyaW5nLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdClcblx0XHRcdFx0LnRoZW4oKHBhcnNlZEh0bWw6IEFwaVJlc3BvbnNlKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0Ly8gVGhlIGZvbGxvd2luZyBjbGFzc2VzIGFyZSB1c2VkIGhlcmU6XG5cdFx0XHRcdFx0Ly8gKiBzZWUgY29uc3RhbnQudHNcblx0XHRcdFx0XHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdFx0XHRcdFx0dGhpcy4kcmVhbENvbnRlbnRcblx0XHRcdFx0XHRcdC5lbXB0eSgpXG5cdFx0XHRcdFx0XHQuaHRtbChwYXJzZWRIdG1sIGFzIEFwaVBhcnNlUmVzcG9uc2UpXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoYCR7T1BUSU9OUy5wb3J0bGV0Q2xhc3N9LW91dHB1dGApO1xuXG5cdFx0XHRcdFx0KFxuXHRcdFx0XHRcdFx0dGhpcy4kcmVhbENvbnRlbnQuZmluZCgnLm13LWNvbGxhcHNpYmxlJykgYXMgSlF1ZXJ5ICYge21ha2VDb2xsYXBzaWJsZTogKCkgPT4gSlF1ZXJ5fVxuXHRcdFx0XHRcdCkubWFrZUNvbGxhcHNpYmxlKCk7XG5cblx0XHRcdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjUwM1xuXHRcdFx0XHRcdCh0aGlzIGFzIE9PLnVpLlByb2Nlc3NEaWFsb2cpLnVwZGF0ZVNpemUoKTtcblx0XHRcdFx0XHR0aGlzLmRhdGFJc0xvYWRlZCA9IHRydWU7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaCgoZXJyb3I6IEFwaVJldHJ5RmFpbEVycm9yIHwgRXJyb3IgfCBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRpZiAoZXJyb3IgaW5zdGFuY2VvZiBBcGlSZXRyeUZhaWxFcnJvcikge1xuXHRcdFx0XHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzIzMDRcblx0XHRcdFx0XHRcdHRocm93IG5ldyBPTy51aS5FcnJvcihlcnJvci50b0pRdWVyeSgpLCB7XG5cdFx0XHRcdFx0XHRcdHJlY292ZXJhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdFx0fSkgYXMgdW5rbm93biBhcyBFcnJvcjtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzIzMDRcblx0XHRcdFx0XHRcdHRocm93IG5ldyBPTy51aS5FcnJvcihTdHJpbmcoZXJyb3IpLCB7XG5cdFx0XHRcdFx0XHRcdHJlY292ZXJhYmxlOiBmYWxzZSxcblx0XHRcdFx0XHRcdH0pIGFzIHVua25vd24gYXMgRXJyb3I7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHR9XG5cblx0XHRwcml2YXRlIGRvRXhlY3V0ZVdyYXAoKSB7XG5cdFx0XHRpZiAodGhpcy5leGVjdXRlUHJvbWlzZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRoaXMuZXhlY3V0ZVByb21pc2UgPSB0aGlzLmRvRXhlY3V0ZSgpO1xuXHRcdFx0XHRkZWxldGUgTm90ZVRBVmlld2VyLmxhc3RFcnJvcjtcblxuXHRcdFx0XHRjb25zdCBleGVjdXRlRGVmZXJyZWQgPSAkLkRlZmVycmVkPEFwaVJlc3BvbnNlPigpO1xuXHRcdFx0XHR2b2lkICh0aGlzLmV4ZWN1dGVQcm9taXNlIGFzIEpRdWVyeS5Qcm9taXNlPEFwaVJlc3BvbnNlPilcblx0XHRcdFx0XHQudGhlbigocmVzcG9uc2U6IEFwaVJlc3BvbnNlKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHR2b2lkIGV4ZWN1dGVEZWZlcnJlZC5yZXNvbHZlKHJlc3BvbnNlKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyNTAzXG5cdFx0XHRcdFx0LmNhdGNoKChlcnJvcjogRXJyb3IgfCBPTy51aS5FcnJvciB8IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzI1MDNcblx0XHRcdFx0XHRcdGlmIChlcnJvciBpbnN0YW5jZW9mIE9PLnVpLkVycm9yKSB7XG5cdFx0XHRcdFx0XHRcdE5vdGVUQVZpZXdlci5sYXN0RXJyb3IgPSBlcnJvcjtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHZvaWQgZXhlY3V0ZURlZmVycmVkLnJlamVjdChlcnJvcik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuYWx3YXlzKCgpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdGRlbGV0ZSB0aGlzLmV4ZWN1dGVQcm9taXNlO1xuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdHJldHVybiBleGVjdXRlRGVmZXJyZWQ7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGRlZmVycmVkID0gJC5EZWZlcnJlZDxBcGlSZXNwb25zZT4oKTtcblx0XHRcdHZvaWQgKHRoaXMuZXhlY3V0ZVByb21pc2UgYXMgSlF1ZXJ5LlByb21pc2U8QXBpUmVzcG9uc2U+KVxuXHRcdFx0XHQudGhlbigocmVzcG9uc2U6IEFwaVJlc3BvbnNlKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0dm9pZCBkZWZlcnJlZC5yZXNvbHZlKHJlc3BvbnNlKTtcblx0XHRcdFx0fSlcblx0XHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzI1MDNcblx0XHRcdFx0LmNhdGNoKChlcnJvcjogRXJyb3IgfCBPTy51aS5FcnJvciB8IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyMzA0XG5cdFx0XHRcdFx0aWYgKGVycm9yIGluc3RhbmNlb2YgT08udWkuRXJyb3IpIHtcblx0XHRcdFx0XHRcdE5vdGVUQVZpZXdlci5sYXN0RXJyb3IgPSBlcnJvcjtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dm9pZCBkZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdFx0LmFsd2F5cygoKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0ZGVsZXRlIHRoaXMuZXhlY3V0ZVByb21pc2U7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm4gZGVmZXJyZWQ7XG5cdFx0fVxuXHR9XG5cblx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzI1MDNcblx0KE5vdGVUQVZpZXdlciBhcyBPTy51aS5Qcm9jZXNzRGlhbG9nKS5zdGF0aWMgPSB7XG5cdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzIzMDRcblx0XHQuLi5PTy51aS5Qcm9jZXNzRGlhbG9nLnN0YXRpYyxcblx0fTtcblx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzI1MDNcblx0KE5vdGVUQVZpZXdlciBhcyBPTy51aS5Qcm9jZXNzRGlhbG9nKS5zdGF0aWMubmFtZSA9IGBOb3RlVEFWaWV3ZXItJHtoYXNofWA7XG5cdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyNTAzXG5cdChOb3RlVEFWaWV3ZXIgYXMgT08udWkuUHJvY2Vzc0RpYWxvZykuc3RhdGljLnRpdGxlID0gZ2V0TWVzc2FnZSgnVGl0bGUnKTtcblx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzI1MDNcblx0KE5vdGVUQVZpZXdlciBhcyBPTy51aS5Qcm9jZXNzRGlhbG9nKS5zdGF0aWMuYWN0aW9ucyA9IFtcblx0XHR7XG5cdFx0XHRsYWJlbDogbXcubWVzc2FnZSgnb291aS1kaWFsb2ctcHJvY2Vzcy1kaXNtaXNzJykucGFyc2UoKSxcblx0XHRcdGZsYWdzOiAnc2FmZScsXG5cdFx0fSxcblx0XTtcblxuXHRjb25zdCB2aWV3ZXI6IE5vdGVUQVZpZXdlciA9IG5ldyBOb3RlVEFWaWV3ZXIoKTtcblx0d2luZG93TWFuYWdlci5hZGRXaW5kb3dzKFt2aWV3ZXJdKTtcblx0dmlld2VyTWFwLnNldChoYXNoLCB2aWV3ZXIpO1xuXG5cdHJldHVybiB2aWV3ZXI7XG59O1xuXG5jb25zdCByZXNldEFsbFZpZXdlciA9ICgpOiB2b2lkID0+IHtcblx0Zm9yIChjb25zdCB2aWV3ZXIgb2Ygdmlld2VyTWFwLnZhbHVlcygpKSB7XG5cdFx0dmlld2VyLmRlc3Ryb3koKTtcblx0fVxuXHR2aWV3ZXJNYXAuY2xlYXIoKTtcblx0dm9pZCB3aW5kb3dNYW5hZ2VyLmNsZWFyV2luZG93cygpO1xufTtcblxuZXhwb3J0IHtnZXRWaWV3ZXIsIHJlc2V0QWxsVmlld2VyfTtcbiIsICJmdW5jdGlvbiBhc3NlcnQ8VD4odmFsdWU6IFQgfCB1bmRlZmluZWQsIHZhbHVlTmFtZTogc3RyaW5nKTogYXNzZXJ0cyB2YWx1ZSB7XG5cdGlmICghdmFsdWUpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYEFzc2VydCBGYWlsLCAke3ZhbHVlTmFtZX0gPT0gZmFsc2UuYCk7XG5cdH1cbn1cblxuZXhwb3J0IHthc3NlcnR9O1xuIiwgImltcG9ydCB7dHlwZSBnZXRWaWV3ZXJ9IGZyb20gJy4vdmlld2VyJztcblxuY29uc3Qgdmlld2VyTWFwID0gbmV3IE1hcDxzdHJpbmcsIFJldHVyblR5cGU8dHlwZW9mIGdldFZpZXdlcj4+KCk7XG5cbmV4cG9ydCB7dmlld2VyTWFwfTtcbiIsICIvLyBAdHMtZXhwZWN0LWVycm9yIFRTMjUwM1xuY29uc3QgaW5pdFdpbmRvd01hbmFnZXIgPSAoKTogT08udWkuV2luZG93TWFuYWdlciA9PiB7XG5cdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyMzA0XG5cdHJldHVybiBuZXcgT08udWkuV2luZG93TWFuYWdlcigpO1xufTtcblxuLy8gQHRzLWV4cGVjdC1lcnJvciBUUzI1MDNcbmNvbnN0IHdpbmRvd01hbmFnZXI6IE9PLnVpLldpbmRvd01hbmFnZXIgPSBpbml0V2luZG93TWFuYWdlcigpO1xuXG5leHBvcnQge3dpbmRvd01hbmFnZXJ9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcblxubGV0IHBvcnRsZXRJZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5jb25zdCBpbml0R2xvYmFsTWV0aG9kcyA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB0eXBlb2YgZ2xvYmFsTWV0aG9kcyA9PiB7XG5cdGNvbnN0IGdsb2JhbE1ldGhvZHM6IHtcblx0XHRpbml0KCk6IHZvaWQ7XG5cdFx0ZGVJbml0KCk6IHZvaWQ7XG5cdH0gPSB7XG5cdFx0aW5pdCgpIHtcblx0XHRcdC8qIGZha2UgKi9cblx0XHR9LFxuXHRcdGRlSW5pdCgpIHtcblx0XHRcdC8qIGZha2UgKi9cblx0XHR9LFxuXHR9O1xuXG5cdGNvbnN0IHtza2lufSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAoc2tpbiA9PT0gJ3ZlY3RvcicpIHtcblx0XHRwb3J0bGV0SWQgPSAncC1ub3RlVEEnO1xuXG5cdFx0bGV0ICRub3RlVEFUYWI6IEpRdWVyeSB8IHVuZGVmaW5lZDtcblx0XHRnbG9iYWxNZXRob2RzLmluaXQgPSAoKTogdm9pZCA9PiB7XG5cdFx0XHRpZiAoJG5vdGVUQVRhYiB8fCAhcG9ydGxldElkKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNvbnN0IG5vdGVUQVRhYjogSFRNTEVsZW1lbnQgfCBudWxsID0gbXcudXRpbC5hZGRQb3J0bGV0KHBvcnRsZXRJZCk7XG5cdFx0XHRpZiAoIW5vdGVUQVRhYikge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHQkbm90ZVRBVGFiID0gJChub3RlVEFUYWIpO1xuXHRcdFx0Ly8gTWVzc2FnZXMgdGhhdCBjYW4gYmUgdXNlZCBoZXJlOlxuXHRcdFx0Ly8gKiBzZWUgYWJvdmUgY29kZVxuXHRcdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdFx0JG5vdGVUQVRhYlxuXHRcdFx0XHQucmVtb3ZlQ2xhc3MoYG13LXBvcnRsZXQtJHtwb3J0bGV0SWR9YClcblx0XHRcdFx0LmFkZENsYXNzKFtgbXctcG9ydGxldC0ke3BvcnRsZXRJZC5yZXBsYWNlKCdwLScsICcnKX1gLCAndmVjdG9yLW1lbnUtdGFicycsICd2ZWN0b3ItbWVudS10YWJzLWxlZ2FjeSddKTtcblx0XHRcdCRib2R5LmZpbmQoJyNwLXZhcmlhbnRzJykuYWZ0ZXIoJG5vdGVUQVRhYik7XG5cdFx0fTtcblx0XHRnbG9iYWxNZXRob2RzLmRlSW5pdCA9ICgpOiB2b2lkID0+IHtcblx0XHRcdGlmICghJG5vdGVUQVRhYikge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHQkbm90ZVRBVGFiLmZpbmQoJ3VsJykuZW1wdHkoKTtcblx0XHRcdGlmIChwb3J0bGV0SWQpIHtcblx0XHRcdFx0bXcudXRpbC5oaWRlUG9ydGxldChwb3J0bGV0SWQpO1xuXHRcdFx0fVxuXHRcdH07XG5cdH0gZWxzZSBpZiAoc2tpbiA9PT0gJ3ZlY3Rvci0yMDIyJykge1xuXHRcdHBvcnRsZXRJZCA9ICdwLWFzc29jaWF0ZWQtcGFnZXMnO1xuXG5cdFx0Z2xvYmFsTWV0aG9kcy5kZUluaXQgPSAoKTogdm9pZCA9PiB7XG5cdFx0XHQkYm9keS5maW5kKGAuJHtPUFRJT05TLnBvcnRsZXRDbGFzc31gKS5yZW1vdmUoKTtcblx0XHR9O1xuXHR9XG5cblx0cmV0dXJuIGdsb2JhbE1ldGhvZHM7XG59O1xuXG5leHBvcnQge3BvcnRsZXRJZCwgaW5pdEdsb2JhbE1ldGhvZHN9O1xuIiwgImltcG9ydCB7Z2V0Vmlld2VyLCByZXNldEFsbFZpZXdlcn0gZnJvbSAnLi9tb2R1bGVzL3ZpZXdlcic7XG5pbXBvcnQge2luaXRHbG9iYWxNZXRob2RzLCBwb3J0bGV0SWR9IGZyb20gJy4vbW9kdWxlcy9pbml0R2xvYmFsTWV0aG9kcyc7XG5pbXBvcnQge2NoZWNrQTExeUNvbmZpcm1LZXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2dlbmVyYXRlUG9ydGxldExpbmt9IGZyb20gJy4vbW9kdWxlcy91dGlsL2dlbmVyYXRlUG9ydGxldExpbmsnO1xuaW1wb3J0IHt3aW5kb3dNYW5hZ2VyfSBmcm9tICcuL21vZHVsZXMvaW5pdFdpbmRvd01hbmFnZXInO1xuXG5sZXQgaXNJbml0OiBib29sZWFuID0gZmFsc2U7XG5cbm13Lmhvb2soJ3dpa2lwYWdlLmNvbnRlbnQnKS5hZGQoZnVuY3Rpb24gbm90ZVRBKCRjb250ZW50KTogdm9pZCB7XG5cdGNvbnN0ICRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PiA9ICRjb250ZW50LnBhcmVudHMoJ2JvZHknKTtcblxuXHRpZiAoIWlzSW5pdCkge1xuXHRcdGlzSW5pdCA9IHRydWU7XG5cdFx0d2luZG93TWFuYWdlci4kZWxlbWVudC5hcHBlbmRUbygkYm9keSk7XG5cdH1cblxuXHRyZXNldEFsbFZpZXdlcigpO1xuXG5cdGNvbnN0IGdsb2JhbE1ldGhvZHMgPSBpbml0R2xvYmFsTWV0aG9kcygkYm9keSk7XG5cdGdsb2JhbE1ldGhvZHMuZGVJbml0KCk7XG5cdGdsb2JhbE1ldGhvZHMuaW5pdCgpO1xuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiAkYm9keS5maW5kKCcubXctaW5kaWNhdG9yW2lkXj1tdy1pbmRpY2F0b3Itbm90ZVRBLV0nKSkge1xuXHRcdGNvbnN0IGhhc2g6IHN0cmluZyA9IGVsZW1lbnQuaWQucmVwbGFjZSgvXm13LWluZGljYXRvci1ub3RlVEEtLywgJycpO1xuXG5cdFx0bGV0ICRlbGVtZW50OiBKUXVlcnkgPSAkKGVsZW1lbnQpO1xuXHRcdGlmIChwb3J0bGV0SWQpIHtcblx0XHRcdCRlbGVtZW50LmhpZGUoKTtcblxuXHRcdFx0Y29uc3QgJHBvcnRsZXRMaW5rOiBKUXVlcnkgfCB1bmRlZmluZWQgPSBnZW5lcmF0ZVBvcnRsZXRMaW5rKGhhc2gpO1xuXHRcdFx0aWYgKCEkcG9ydGxldExpbmspIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdCRlbGVtZW50ID0gJHBvcnRsZXRMaW5rO1xuXHRcdH1cblxuXHRcdGNvbnN0IG9wZW5lckxpc3RlbmVyID0gKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCB8IEpRdWVyeS5LZXlEb3duRXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdGlmICghY2hlY2tBMTF5Q29uZmlybUtleShldmVudCkpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzI1MDNcblx0XHRcdChnZXRWaWV3ZXIoJGJvZHksIGhhc2gpIGFzIE9PLnVpLlByb2Nlc3NEaWFsb2cpLm9wZW4oKTtcblx0XHR9O1xuXHRcdCRlbGVtZW50Lm9uKCdjbGljaycsIG9wZW5lckxpc3RlbmVyKTtcblx0XHQkZWxlbWVudC5vbigna2V5ZG93bicsIG9wZW5lckxpc3RlbmVyKTtcblx0fVxufSk7XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuSlNYJztcbmltcG9ydCB7cG9ydGxldElkfSBmcm9tICcuLi9pbml0R2xvYmFsTWV0aG9kcyc7XG5cbmNvbnN0IGdlbmVyYXRlUG9ydGxldExpbmsgPSAoaGFzaDogc3RyaW5nKTogSlF1ZXJ5IHwgdW5kZWZpbmVkID0+IHtcblx0aWYgKCFwb3J0bGV0SWQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBwb3J0bGV0TGluazogSFRNTExJRWxlbWVudCB8IG51bGwgPSBtdy51dGlsLmFkZFBvcnRsZXRMaW5rKHBvcnRsZXRJZCwgJyMnLCAn5rGJL+a8oicsIGBjYS1ub3RlVEEtJHtoYXNofWApO1xuXHRpZiAoIXBvcnRsZXRMaW5rKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHBvcnRsZXRMaW5rLmNsYXNzTGlzdC5hZGQoJ2NhLW5vdGVUQScpO1xuXG5cdC8vIFRoZSBmb2xsb3dpbmcgY2xhc3NlcyBhcmUgdXNlZCBoZXJlOlxuXHQvLyAqIHNlZSBjb25zdGFudC50c1xuXHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdGNvbnN0ICRwb3J0bGV0TGluazogSlF1ZXJ5ID0gJChwb3J0bGV0TGluaykuYWRkQ2xhc3MoT1BUSU9OUy5wb3J0bGV0Q2xhc3MpO1xuXHQkcG9ydGxldExpbmtcblx0XHQuZmluZCgnYScpXG5cdFx0LmVtcHR5KClcblx0XHQuYXBwZW5kKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtbYCR7T1BUSU9OUy5wb3J0bGV0Q2xhc3N9X19sYWJlbGAsIGAke09QVElPTlMucG9ydGxldENsYXNzfV9fbGFiZWwtaGFuc2BdfT5cblx0XHRcdFx0XHR7J+axiSd9XG5cdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtbYCR7T1BUSU9OUy5wb3J0bGV0Q2xhc3N9X19sYWJlbGAsIGAke09QVElPTlMucG9ydGxldENsYXNzfV9fbGFiZWwtaGFudGBdfT5cblx0XHRcdFx0XHR7J+a8oid9XG5cdFx0XHRcdDwvc3Bhbj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cblx0cmV0dXJu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UUFDRDtBQUVBM0ssbUJBQVcySztNQUNaO0FBRUEsWUFBTVUsaUJBQWtCQyxXQUF5RDtBQUNoRixZQUFJLEVBQUEsR0FBQ2xCLG1CQUFBbUIscUJBQW9CRCxLQUFLLEdBQUc7QUFDaEM7UUFDRDtBQUVBQSxjQUFNRSxlQUFlO0FBRXBCdEosa0JBQVVDLE9BQU9DLElBQUksRUFBMEJxSixLQUFLO01BQ3REO0FBQ0F6TCxlQUFTMEwsR0FBRyxTQUFTTCxjQUFjO0FBQ25DckwsZUFBUzBMLEdBQUcsV0FBV0wsY0FBYztJQUN0QztFQUFBLFNBQUE5RSxLQUFBO0FBQUEwRSxlQUFBekUsRUFBQUQsR0FBQTtFQUFBLFVBQUE7QUFBQTBFLGVBQUF4RSxFQUFBO0VBQUE7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogWyJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJ2ZXJzaW9uIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiU3ltYm9sIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiZG9jdW1lbnQiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJUeXBlRXJyb3IiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIm1vZHVsZSIsICIkIiwgIiQiLCAicG9ydGxldENsYXNzIiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgIl9fdG9FU00iLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAiQXBpUmV0cnlGYWlsRXJyb3IiLCAibG9jYWxpemUiLCAiZW4iLCAiTG9hZGluZyIsICJUaXRsZSIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiRXJyb3IiLCAiZXJyb3JzIiwgImNvbnN0cnVjdG9yIiwgImNvbmNhdCIsICJsZW5ndGgiLCAibmFtZSIsICJ0b0pRdWVyeSIsICJlcnJvckNvdW50IiwgImVsZW1lbnQiLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgImNsYXNzTmFtZSIsICJyZXBsYWNlIiwgInRvU3RyaW5nIiwgIm1hcCIsICJlcnJvciIsICJpbmRleCIsICJzcGxpdCIsICJsaW5lIiwgIm51bWJlciIsICIkZWxlbWVudCIsICIkIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJhcGkiLCAiaW5pdE13QXBpIiwgInBhcnNlV2l0aFJldHJ5IiwgImFyZ3MiLCAiY291bnQiLCAicHJldmlvdXNFcnJvcnMiLCAiRGVmZXJyZWQiLCAicmVqZWN0IiwgImRlZmVycmVkIiwgInBhcnNlIiwgInRoZW4iLCAicmVzcG9uc2UiLCAicmVzb2x2ZSIsICJjYXRjaCIsICJjb25zb2xlIiwgInN0YWNrIiwgIlN0cmluZyIsICJuZXdSZXNwb25zZSIsICJuZXdFcnJvciIsICJwYXJzZVdpa2l0ZXh0IiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJhc3NlcnQiLCAidmFsdWUiLCAidmFsdWVOYW1lIiwgInZpZXdlck1hcCIsICJNYXAiLCAiaW5pdFdpbmRvd01hbmFnZXIiLCAiT08iLCAidWkiLCAiV2luZG93TWFuYWdlciIsICJ3aW5kb3dNYW5hZ2VyIiwgImdldFZpZXdlciIsICIkYm9keSIsICJoYXNoIiwgImhhcyIsICJzdG9yZWRWaWV3ZXIiLCAiZ2V0IiwgIiR0YXJnZXRFbGVtZW50IiwgImZpbmQiLCAid2dQYWdlTmFtZSIsICJ3Z1VzZXJWYXJpYW50IiwgIm13IiwgImNvbmZpZyIsICJOb3RlVEFWaWV3ZXIiLCAiUHJvY2Vzc0RpYWxvZyIsICJkYXRhSXNMb2FkZWQiLCAiZXhlY3V0ZVByb21pc2UiLCAibXV0YXRpb25PYnNlcnZlciIsICIkcmVhbENvbnRlbnQiLCAibGFzdEVycm9yIiwgIm5vdGVUQVBhcnNlVGV4dCIsICJzaXplIiwgIk11dGF0aW9uT2JzZXJ2ZXIiLCAidXBkYXRlU2l6ZSIsICJiaW5kIiwgIm9ic2VydmUiLCAiY2hpbGRMaXN0IiwgInN1YnRyZWUiLCAiaW5pdGlhbGl6ZSIsICJwYW5lbExheW91dCIsICJQYW5lbExheW91dCIsICJleHBhbmRlZCIsICJwYWRkZWQiLCAiYXBwZW5kVG8iLCAiZ2V0U2V0dXBQcm9jZXNzIiwgImRhdGEiLCAibmV4dCIsICJkb0V4ZWN1dGVXcmFwIiwgImV4ZWN1dGVBY3Rpb24iLCAiZ2V0QWN0aW9uUHJvY2VzcyIsICJhY3Rpb24iLCAiaXNNYWluQWN0aW9uIiwgImV4ZWN1dGUiLCAiZGVzdHJveSIsICJkaXNjb25uZWN0IiwgImdldE5vdGVUQVBhcnNlVGV4dCIsICIkbm90ZVRBdGl0bGUiLCAiYWN0dWFsVGl0bGUiLCAid2lraXRleHQiLCAidGl0bGVEZWZlcnJlZCIsICJ0aXRsZUNvbnYiLCAiYXR0ciIsICJ0aXRsZURlc2MiLCAidGl0bGUiLCAidmFyaWFudCIsICJyZXN1bHRIdG1sIiwgIiRtdWx0aVRpdGxlIiwgInBhcnNlSFRNTCIsICJ0ZXh0VmFyaWFudCIsICJ2YXJpYW50VGV4dCIsICJfaXRlcmF0b3IyIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgImNoaWxkcmVuIiwgIl9zdGVwMiIsICJzIiwgIm4iLCAiZG9uZSIsICJ0ZXh0IiwgInRyaW0iLCAidGV4dFZhcmlhbnRBcnJheSIsICJlcnIiLCAiZSIsICJmIiwgInRpdGxlQ29udmVydGVkIiwgIm11bHRpVGl0bGUiLCAiX2kiLCAiX09iamVjdCR2YWx1ZXMiLCAiT2JqZWN0IiwgInZhbHVlcyIsICJ2YXJpYW50cyIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJ2YXJpYW50c05hbWUiLCAiam9pbiIsICJzdWJJdGVtU2VwYXJhdG9yIiwgIiRub3RlVEFncm91cHMiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAiJG5vdGVUQWxvY2FsIiwgIiRub3RlVEFsb2NhbHMiLCAiX2l0ZXJhdG9yNSIsICJfc3RlcDUiLCAibG9jYWxEZXNjIiwgImxvY2FsQ29udiIsICJkb0V4ZWN1dGUiLCAiZW1wdHkiLCAiYXBwZW5kIiwgInBhcnNlZEh0bWwiLCAiaHRtbCIsICJhZGRDbGFzcyIsICJtYWtlQ29sbGFwc2libGUiLCAicmVjb3ZlcmFibGUiLCAiZXhlY3V0ZURlZmVycmVkIiwgImFsd2F5cyIsICJzdGF0aWMiLCAiYWN0aW9ucyIsICJsYWJlbCIsICJtZXNzYWdlIiwgImZsYWdzIiwgInZpZXdlciIsICJhZGRXaW5kb3dzIiwgInNldCIsICJyZXNldEFsbFZpZXdlciIsICJfaXRlcmF0b3I2IiwgIl9zdGVwNiIsICJjbGVhciIsICJjbGVhcldpbmRvd3MiLCAicG9ydGxldElkIiwgImluaXRHbG9iYWxNZXRob2RzIiwgImdsb2JhbE1ldGhvZHMiLCAiaW5pdCIsICJkZUluaXQiLCAic2tpbiIsICIkbm90ZVRBVGFiIiwgIm5vdGVUQVRhYiIsICJ1dGlsIiwgImFkZFBvcnRsZXQiLCAicmVtb3ZlQ2xhc3MiLCAiYWZ0ZXIiLCAiaGlkZVBvcnRsZXQiLCAicmVtb3ZlIiwgImltcG9ydF9leHRfZ2FkZ2V0NiIsICJpbXBvcnRfZXh0X2dhZGdldDUiLCAiZ2VuZXJhdGVQb3J0bGV0TGluayIsICJwb3J0bGV0TGluayIsICJhZGRQb3J0bGV0TGluayIsICJjbGFzc0xpc3QiLCAiYWRkIiwgIiRwb3J0bGV0TGluayIsICJpc0luaXQiLCAiaG9vayIsICJub3RlVEEiLCAiJGNvbnRlbnQiLCAicGFyZW50cyIsICJfaXRlcmF0b3I3IiwgIl9zdGVwNyIsICJpZCIsICJoaWRlIiwgIm9wZW5lckxpc3RlbmVyIiwgImV2ZW50IiwgImNoZWNrQTExeUNvbmZpcm1LZXkiLCAicHJldmVudERlZmF1bHQiLCAib3BlbiIsICJvbiJdCn0K

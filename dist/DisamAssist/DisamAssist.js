/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/User:Peacearth/DisamAssist.js}
 * @base {@link https://es.wikipedia.org/wiki/Usuario:Qwertyytrewqqwerty/DisamAssist.js}
 * @base {@link https://es.wikipedia.org/wiki/Usuario:Qwertyytrewqqwerty/DisamAssist.css}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/DisamAssist}
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/global.js
var require_global = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/global.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/fails.js
var require_fails = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/fails.js"(exports, module2) {
    "use strict";
    module2.exports = function(exec) {
      try {
        return !!exec();
      } catch (error2) {
        return true;
      }
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/descriptors.js
var require_descriptors = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/descriptors.js"(exports, module2) {
    "use strict";
    var fails = require_fails();
    module2.exports = !fails(function() {
      return Object.defineProperty({}, 1, { get: function() {
        return 7;
      } })[1] !== 7;
    });
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/function-bind-native.js
var require_function_bind_native = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/function-bind-native.js"(exports, module2) {
    "use strict";
    var fails = require_fails();
    module2.exports = !fails(function() {
      var test = function() {
      }.bind();
      return typeof test != "function" || test.hasOwnProperty("prototype");
    });
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/function-call.js
var require_function_call = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/function-call.js"(exports, module2) {
    "use strict";
    var NATIVE_BIND = require_function_bind_native();
    var call = Function.prototype.call;
    module2.exports = NATIVE_BIND ? call.bind(call) : function() {
      return call.apply(call, arguments);
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-property-is-enumerable.js
var require_object_property_is_enumerable = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-property-is-enumerable.js"(exports) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/create-property-descriptor.js
var require_create_property_descriptor = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/create-property-descriptor.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/function-uncurry-this.js
var require_function_uncurry_this = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/function-uncurry-this.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/classof-raw.js
var require_classof_raw = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/classof-raw.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var toString = uncurryThis({}.toString);
    var stringSlice = uncurryThis("".slice);
    module2.exports = function(it) {
      return stringSlice(toString(it), 8, -1);
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/indexed-object.js
var require_indexed_object = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/indexed-object.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/is-null-or-undefined.js
var require_is_null_or_undefined = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/is-null-or-undefined.js"(exports, module2) {
    "use strict";
    module2.exports = function(it) {
      return it === null || it === void 0;
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/require-object-coercible.js
var require_require_object_coercible = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/require-object-coercible.js"(exports, module2) {
    "use strict";
    var isNullOrUndefined = require_is_null_or_undefined();
    var $TypeError = TypeError;
    module2.exports = function(it) {
      if (isNullOrUndefined(it))
        throw new $TypeError("Can't call method on " + it);
      return it;
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/to-indexed-object.js
var require_to_indexed_object = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/to-indexed-object.js"(exports, module2) {
    "use strict";
    var IndexedObject = require_indexed_object();
    var requireObjectCoercible = require_require_object_coercible();
    module2.exports = function(it) {
      return IndexedObject(requireObjectCoercible(it));
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/is-callable.js
var require_is_callable = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/is-callable.js"(exports, module2) {
    "use strict";
    var documentAll = typeof document == "object" && document.all;
    module2.exports = typeof documentAll == "undefined" && documentAll !== void 0 ? function(argument) {
      return typeof argument == "function" || argument === documentAll;
    } : function(argument) {
      return typeof argument == "function";
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/is-object.js
var require_is_object = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/is-object.js"(exports, module2) {
    "use strict";
    var isCallable = require_is_callable();
    module2.exports = function(it) {
      return typeof it == "object" ? it !== null : isCallable(it);
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/get-built-in.js
var require_get_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/get-built-in.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-is-prototype-of.js
var require_object_is_prototype_of = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-is-prototype-of.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    module2.exports = uncurryThis({}.isPrototypeOf);
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/engine-user-agent.js
var require_engine_user_agent = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/engine-user-agent.js"(exports, module2) {
    "use strict";
    module2.exports = typeof navigator != "undefined" && String(navigator.userAgent) || "";
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/engine-v8-version.js
var require_engine_v8_version = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/engine-v8-version.js"(exports, module2) {
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
        if (match)
          version = +match[1];
      }
    }
    module2.exports = version;
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/symbol-constructor-detection.js
var require_symbol_constructor_detection = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/symbol-constructor-detection.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/use-symbol-as-uid.js
var require_use_symbol_as_uid = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/use-symbol-as-uid.js"(exports, module2) {
    "use strict";
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    module2.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/is-symbol.js
var require_is_symbol = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/is-symbol.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/try-to-string.js
var require_try_to_string = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/try-to-string.js"(exports, module2) {
    "use strict";
    var $String = String;
    module2.exports = function(argument) {
      try {
        return $String(argument);
      } catch (error2) {
        return "Object";
      }
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/a-callable.js
var require_a_callable = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/a-callable.js"(exports, module2) {
    "use strict";
    var isCallable = require_is_callable();
    var tryToString = require_try_to_string();
    var $TypeError = TypeError;
    module2.exports = function(argument) {
      if (isCallable(argument))
        return argument;
      throw new $TypeError(tryToString(argument) + " is not a function");
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/get-method.js
var require_get_method = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/get-method.js"(exports, module2) {
    "use strict";
    var aCallable = require_a_callable();
    var isNullOrUndefined = require_is_null_or_undefined();
    module2.exports = function(V, P) {
      var func = V[P];
      return isNullOrUndefined(func) ? void 0 : aCallable(func);
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/ordinary-to-primitive.js
var require_ordinary_to_primitive = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/ordinary-to-primitive.js"(exports, module2) {
    "use strict";
    var call = require_function_call();
    var isCallable = require_is_callable();
    var isObject = require_is_object();
    var $TypeError = TypeError;
    module2.exports = function(input, pref) {
      var fn, val;
      if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input)))
        return val;
      if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input)))
        return val;
      if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input)))
        return val;
      throw new $TypeError("Can't convert object to primitive value");
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/is-pure.js
var require_is_pure = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/is-pure.js"(exports, module2) {
    "use strict";
    module2.exports = false;
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/define-global-property.js
var require_define_global_property = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/define-global-property.js"(exports, module2) {
    "use strict";
    var global2 = require_global();
    var defineProperty = Object.defineProperty;
    module2.exports = function(key, value) {
      try {
        defineProperty(global2, key, { value, configurable: true, writable: true });
      } catch (error2) {
        global2[key] = value;
      }
      return value;
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/shared-store.js
var require_shared_store = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/shared-store.js"(exports, module2) {
    "use strict";
    var IS_PURE = require_is_pure();
    var globalThis2 = require_global();
    var defineGlobalProperty = require_define_global_property();
    var SHARED = "__core-js_shared__";
    var store = module2.exports = globalThis2[SHARED] || defineGlobalProperty(SHARED, {});
    (store.versions || (store.versions = [])).push({
      version: "3.36.0",
      mode: IS_PURE ? "pure" : "global",
      copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
      license: "https://github.com/zloirock/core-js/blob/v3.36.0/LICENSE",
      source: "https://github.com/zloirock/core-js"
    });
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/shared.js
var require_shared = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/shared.js"(exports, module2) {
    "use strict";
    var store = require_shared_store();
    module2.exports = function(key, value) {
      return store[key] || (store[key] = value || {});
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/to-object.js
var require_to_object = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/to-object.js"(exports, module2) {
    "use strict";
    var requireObjectCoercible = require_require_object_coercible();
    var $Object = Object;
    module2.exports = function(argument) {
      return $Object(requireObjectCoercible(argument));
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/has-own-property.js
var require_has_own_property = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/has-own-property.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var toObject = require_to_object();
    var hasOwnProperty = uncurryThis({}.hasOwnProperty);
    module2.exports = Object.hasOwn || function hasOwn(it, key) {
      return hasOwnProperty(toObject(it), key);
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/uid.js
var require_uid = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/uid.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/well-known-symbol.js
var require_well_known_symbol = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/well-known-symbol.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/to-primitive.js
var require_to_primitive = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/to-primitive.js"(exports, module2) {
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
      if (!isObject(input) || isSymbol(input))
        return input;
      var exoticToPrim = getMethod(input, TO_PRIMITIVE);
      var result;
      if (exoticToPrim) {
        if (pref === void 0)
          pref = "default";
        result = call(exoticToPrim, input, pref);
        if (!isObject(result) || isSymbol(result))
          return result;
        throw new $TypeError("Can't convert object to primitive value");
      }
      if (pref === void 0)
        pref = "number";
      return ordinaryToPrimitive(input, pref);
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/to-property-key.js
var require_to_property_key = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/to-property-key.js"(exports, module2) {
    "use strict";
    var toPrimitive = require_to_primitive();
    var isSymbol = require_is_symbol();
    module2.exports = function(argument) {
      var key = toPrimitive(argument, "string");
      return isSymbol(key) ? key : key + "";
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/document-create-element.js
var require_document_create_element = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/document-create-element.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/ie8-dom-define.js
var require_ie8_dom_define = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/ie8-dom-define.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-get-own-property-descriptor.js
var require_object_get_own_property_descriptor = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-get-own-property-descriptor.js"(exports) {
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
      if (IE8_DOM_DEFINE)
        try {
          return $getOwnPropertyDescriptor(O, P);
        } catch (error2) {
        }
      if (hasOwn(O, P))
        return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/v8-prototype-define-bug.js
var require_v8_prototype_define_bug = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/v8-prototype-define-bug.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/an-object.js
var require_an_object = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/an-object.js"(exports, module2) {
    "use strict";
    var isObject = require_is_object();
    var $String = String;
    var $TypeError = TypeError;
    module2.exports = function(argument) {
      if (isObject(argument))
        return argument;
      throw new $TypeError($String(argument) + " is not an object");
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-define-property.js
var require_object_define_property = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-define-property.js"(exports) {
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
      if (IE8_DOM_DEFINE)
        try {
          return $defineProperty(O, P, Attributes);
        } catch (error2) {
        }
      if ("get" in Attributes || "set" in Attributes)
        throw new $TypeError("Accessors not supported");
      if ("value" in Attributes)
        O[P] = Attributes.value;
      return O;
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/create-non-enumerable-property.js
var require_create_non_enumerable_property = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/create-non-enumerable-property.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/function-name.js
var require_function_name = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/function-name.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/inspect-source.js
var require_inspect_source = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/inspect-source.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/weak-map-basic-detection.js
var require_weak_map_basic_detection = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/weak-map-basic-detection.js"(exports, module2) {
    "use strict";
    var global2 = require_global();
    var isCallable = require_is_callable();
    var WeakMap = global2.WeakMap;
    module2.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/shared-key.js
var require_shared_key = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/shared-key.js"(exports, module2) {
    "use strict";
    var shared = require_shared();
    var uid = require_uid();
    var keys = shared("keys");
    module2.exports = function(key) {
      return keys[key] || (keys[key] = uid(key));
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/hidden-keys.js
var require_hidden_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/hidden-keys.js"(exports, module2) {
    "use strict";
    module2.exports = {};
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/internal-state.js
var require_internal_state = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/internal-state.js"(exports, module2) {
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
        if (store.has(it))
          throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
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
        if (hasOwn(it, STATE))
          throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/make-built-in.js
var require_make_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/make-built-in.js"(exports, module2) {
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
      if (options && options.getter)
        name = "get " + name;
      if (options && options.setter)
        name = "set " + name;
      if (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
        if (DESCRIPTORS)
          defineProperty(value, "name", { value: name, configurable: true });
        else
          value.name = name;
      }
      if (CONFIGURABLE_LENGTH && options && hasOwn(options, "arity") && value.length !== options.arity) {
        defineProperty(value, "length", { value: options.arity });
      }
      try {
        if (options && hasOwn(options, "constructor") && options.constructor) {
          if (DESCRIPTORS)
            defineProperty(value, "prototype", { writable: false });
        } else if (value.prototype)
          value.prototype = void 0;
      } catch (error2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/define-built-in.js
var require_define_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/define-built-in.js"(exports, module2) {
    "use strict";
    var isCallable = require_is_callable();
    var definePropertyModule = require_object_define_property();
    var makeBuiltIn = require_make_built_in();
    var defineGlobalProperty = require_define_global_property();
    module2.exports = function(O, key, value, options) {
      if (!options)
        options = {};
      var simple = options.enumerable;
      var name = options.name !== void 0 ? options.name : key;
      if (isCallable(value))
        makeBuiltIn(value, name, options);
      if (options.global) {
        if (simple)
          O[key] = value;
        else
          defineGlobalProperty(key, value);
      } else {
        try {
          if (!options.unsafe)
            delete O[key];
          else if (O[key])
            simple = true;
        } catch (error2) {
        }
        if (simple)
          O[key] = value;
        else
          definePropertyModule.f(O, key, {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/math-trunc.js
var require_math_trunc = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/math-trunc.js"(exports, module2) {
    "use strict";
    var ceil = Math.ceil;
    var floor = Math.floor;
    module2.exports = Math.trunc || function trunc(x) {
      var n = +x;
      return (n > 0 ? floor : ceil)(n);
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/to-integer-or-infinity.js
var require_to_integer_or_infinity = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/to-integer-or-infinity.js"(exports, module2) {
    "use strict";
    var trunc = require_math_trunc();
    module2.exports = function(argument) {
      var number = +argument;
      return number !== number || number === 0 ? 0 : trunc(number);
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/to-absolute-index.js
var require_to_absolute_index = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/to-absolute-index.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/to-length.js
var require_to_length = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/to-length.js"(exports, module2) {
    "use strict";
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var min = Math.min;
    module2.exports = function(argument) {
      var len = toIntegerOrInfinity(argument);
      return len > 0 ? min(len, 9007199254740991) : 0;
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/length-of-array-like.js
var require_length_of_array_like = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/length-of-array-like.js"(exports, module2) {
    "use strict";
    var toLength = require_to_length();
    module2.exports = function(obj) {
      return toLength(obj.length);
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/array-includes.js
var require_array_includes = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/array-includes.js"(exports, module2) {
    "use strict";
    var toIndexedObject = require_to_indexed_object();
    var toAbsoluteIndex = require_to_absolute_index();
    var lengthOfArrayLike = require_length_of_array_like();
    var createMethod = function(IS_INCLUDES) {
      return function($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = lengthOfArrayLike(O);
        if (length === 0)
          return !IS_INCLUDES && -1;
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        if (IS_INCLUDES && el !== el)
          while (length > index) {
            value = O[index++];
            if (value !== value)
              return true;
          }
        else
          for (; length > index; index++) {
            if ((IS_INCLUDES || index in O) && O[index] === el)
              return IS_INCLUDES || index || 0;
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-keys-internal.js
var require_object_keys_internal = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-keys-internal.js"(exports, module2) {
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
      for (key in O)
        !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
      while (names.length > i)
        if (hasOwn(O, key = names[i++])) {
          ~indexOf(result, key) || push(result, key);
        }
      return result;
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/enum-bug-keys.js
var require_enum_bug_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/enum-bug-keys.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-get-own-property-names.js
var require_object_get_own_property_names = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-get-own-property-names.js"(exports) {
    "use strict";
    var internalObjectKeys = require_object_keys_internal();
    var enumBugKeys = require_enum_bug_keys();
    var hiddenKeys = enumBugKeys.concat("length", "prototype");
    exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
      return internalObjectKeys(O, hiddenKeys);
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-get-own-property-symbols.js
var require_object_get_own_property_symbols = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-get-own-property-symbols.js"(exports) {
    "use strict";
    exports.f = Object.getOwnPropertySymbols;
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/own-keys.js
var require_own_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/own-keys.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/copy-constructor-properties.js
var require_copy_constructor_properties = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/copy-constructor-properties.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/is-forced.js
var require_is_forced = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/is-forced.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/export.js
var require_export = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/export.js"(exports, module2) {
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
      if (target)
        for (key in source) {
          sourceProperty = source[key];
          if (options.dontCallGetSet) {
            descriptor = getOwnPropertyDescriptor(target, key);
            targetProperty = descriptor && descriptor.value;
          } else
            targetProperty = target[key];
          FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
          if (!FORCED && targetProperty !== void 0) {
            if (typeof sourceProperty == typeof targetProperty)
              continue;
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/is-array.js
var require_is_array = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/is-array.js"(exports, module2) {
    "use strict";
    var classof = require_classof_raw();
    module2.exports = Array.isArray || function isArray(argument) {
      return classof(argument) === "Array";
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/array-set-length.js
var require_array_set_length = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/array-set-length.js"(exports, module2) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var isArray = require_is_array();
    var $TypeError = TypeError;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !function() {
      if (this !== void 0)
        return true;
      try {
        Object.defineProperty([], "length", { writable: false }).length = 1;
      } catch (error2) {
        return error2 instanceof TypeError;
      }
    }();
    module2.exports = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function(O, length) {
      if (isArray(O) && !getOwnPropertyDescriptor(O, "length").writable) {
        throw new $TypeError("Cannot set read only .length");
      }
      return O.length = length;
    } : function(O, length) {
      return O.length = length;
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/delete-property-or-throw.js
var require_delete_property_or_throw = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/delete-property-or-throw.js"(exports, module2) {
    "use strict";
    var tryToString = require_try_to_string();
    var $TypeError = TypeError;
    module2.exports = function(O, P) {
      if (!delete O[P])
        throw new $TypeError("Cannot delete property " + tryToString(P) + " of " + tryToString(O));
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/does-not-exceed-safe-integer.js
var require_does_not_exceed_safe_integer = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/does-not-exceed-safe-integer.js"(exports, module2) {
    "use strict";
    var $TypeError = TypeError;
    var MAX_SAFE_INTEGER = 9007199254740991;
    module2.exports = function(it) {
      if (it > MAX_SAFE_INTEGER)
        throw $TypeError("Maximum allowed index exceeded");
      return it;
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/modules/es.array.unshift.js
var require_es_array_unshift = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/modules/es.array.unshift.js"() {
    "use strict";
    var $2 = require_export();
    var toObject = require_to_object();
    var lengthOfArrayLike = require_length_of_array_like();
    var setArrayLength = require_array_set_length();
    var deletePropertyOrThrow = require_delete_property_or_throw();
    var doesNotExceedSafeInteger = require_does_not_exceed_safe_integer();
    var INCORRECT_RESULT = [].unshift(0) !== 1;
    var properErrorOnNonWritableLength = function() {
      try {
        Object.defineProperty([], "length", { writable: false }).unshift();
      } catch (error2) {
        return error2 instanceof TypeError;
      }
    };
    var FORCED = INCORRECT_RESULT || !properErrorOnNonWritableLength();
    $2({ target: "Array", proto: true, arity: 1, forced: FORCED }, {
      // eslint-disable-next-line no-unused-vars -- required for `.length`
      unshift: function unshift(item) {
        var O = toObject(this);
        var len = lengthOfArrayLike(O);
        var argCount = arguments.length;
        if (argCount) {
          doesNotExceedSafeInteger(len + argCount);
          var k = len;
          while (k--) {
            var to = k + argCount;
            if (k in O)
              O[to] = O[k];
            else
              deletePropertyOrThrow(O, to);
          }
          for (var j = 0; j < argCount; j++) {
            O[j] = arguments[j];
          }
        }
        return setArrayLength(O, len + argCount);
      }
    });
  }
});

// dist/DisamAssist/DisamAssist.js
require_es_array_unshift();
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function() {
      };
      return { s: F, n: function() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function(e) {
        throw e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function(e) {
    didErr = true;
    err = e;
  }, f: function() {
    try {
      if (!normalCompletion && it.return != null)
        it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
//! src/DisamAssist/modules/constant.ts
var WG_ACTION = mw.config.get("wgAction");
//! src/DisamAssist/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("DisamAssist/1.1");
//! src/DisamAssist/modules/config.ts
var cfg = {
  /* Categories where disambiguation pages are added (usually by a template like {{Disambiguation}} */
  disamCategories: ["全部消歧义页面"],
  /* "Canonical names" of the templates that may appear after ambiguous links and which should be removed when fixing those links */
  disamLinkTemplates: ["Disambiguation needed", "Ambiguous link", "Amblink", "Dab needed", "Disamb-link", "Disambig needed", "Disambiguate", "Dn", "Needdab"],
  /* "Canonical names" of the templates that designate intentional links to disambiguation pages */
  disamLinkIgnoreTemplates: ["R from ambiguous page", "R to disambiguation page", "R from incomplete disambiguation"],
  /* Format string for "Foo (disambiguation)"-style pages */
  disamFormat: "$1（消歧义）",
  /* Regular expression matching the titles of disambiguation pages (when they are different from the titles of the primary topics) */
  disamRegExp: "^(.*)（(消歧义|消歧義)）$",
  /* Text that will be inserted after the link if the user requests help. If the value is null, the option to request help won't be offered */
  disamNeededText: "{{dn|date={{".concat("subst:", "CURRENTMONTHNAME", "}} {{", "subst:", "CURRENTYEAR}}}}"),
  /* Content of the "Foo (disambiguation)" pages that will be created automatically when using DisamAssist from a "Foo" page */
  redirectToDisam: "#重定向 [[$1]]".concat("{{R to disambiguation page}}"),
  /* Whether intentional links to disambiguation pages can be explicitly marked by adding " (disambiguation)" */
  intentionalLinkOption: false,
  /* Namespaces that will be searched for incoming links to the disambiguation page (pages in other namespaces will be ignored) */
  targetNamespaces: [6, 10, 14, 118, 0],
  /* Number of backlinks that will be downloaded at once When using blredirect, the maximum limit is supposedly halved (see http://www.mediawiki.org/wiki/API:Backlinks) */
  backlinkLimit: 250,
  /* Number of titles we can query for at once */
  queryTitleLimit: 50,
  /* Number of characters before and after the incoming link that will be displayed */
  radius: 300,
  /* Height of the context box, in lines */
  numContextLines: 4,
  /* Number of pages that will be stored before saving, so that changes to them can be undone if need be */
  historySize: 2,
  /* Minimum time in seconds since the last change was saved before a new edit can be made. A negative value or 0 disables the cooldown. Users with the "bot" right won't be affected by the cooldown */
  editCooldown: 0,
  /* Specify how the watchlist is affected by DisamAssist edits. Possible values: "watch", "unwatch", "preferences", "nochange" */
  watch: "nochange"
};
//! src/DisamAssist/modules/messages.js
var messages = {
  start: "为链接消歧义",
  startMain: "为链至主条目的链接消歧义",
  startSame: "为链至消歧义页的链接消歧义",
  close: "关闭",
  undo: "复原",
  omit: "跳过",
  refresh: "重新整理",
  titleAsText: "其它目标",
  disamNeeded: "标示{{dn}}",
  intentionalLink: "有意链到消歧义页的链接",
  titleAsTextPrompt: "请输入新的链接目标：",
  removeLink: "去除链接",
  optionMarker: " [链接到这里]",
  targetOptionMarker: " [当前目标]",
  redirectOptionMarker: " [当前目标（重定向）]",
  pageTitleLine: '<a href="$1">$2</a>：',
  noMoreLinks: "没有需要消歧义的链接了。",
  pendingEditCounter: "已保存$1个，已编辑$2个",
  pendingEditBox: "DisamAssist正在储存您的编辑（$1）。",
  pendingEditBoxTimeEstimation: "$1；剩余时间：$2",
  pendingEditBoxLimited: "在所有更改保存前，请不要关闭页面；你可以在另一个页面编辑求闻百科，但是请勿同时使用多个DisamAssist。",
  error: "错误：$1",
  fetchRedirectsError: '获取重定向失败："$1".',
  getBacklinksError: '下载反向链接失败："$1".',
  fetchRightsError: '获取用户权限失败："$1",',
  loadPageError: '加载$1失败："$2".',
  savePageError: '保存至$1失败："$2".',
  dismissError: "Dismiss",
  pending: "DisamAssist尚有未储存的编辑。如欲储存之，请按“关闭”。",
  editInProgress: "DisamAssist正在进行编辑。若您将本分页关闭，可能会丧失您的编辑。",
  ellipsis: "……",
  notifyCharacter: "✔",
  summary: "使用[[MediaWiki:Gadget-DisamAssist.js|DisamAssist]]清理[[QW:DAB|消歧义]]链接：[[$1]]（$2）。",
  summaryChanged: "改链接至[[$1]]",
  summaryOmitted: "链接已跳过",
  summaryRemoved: "链接已移除",
  summaryIntentional: "刻意链接至消歧义页面",
  summaryHelpNeeded: "需要帮助",
  summarySeparator: "; ",
  redirectSummary: "使用[[MediaWiki:Gadget-DisamAssist.js|DisamAssist]]创建目标为[[$1]]的重定向。"
};
//! src/DisamAssist/modules/core.js
var startLink;
var ui;
var links;
var pageChanges;
var currentPageTitle;
var currentPageParameters;
var currentLink;
var possibleBacklinkDestinations;
var forceSamePage = false;
var running = false;
var choosing = false;
var canMarkIntentionalLinks = false;
var displayedPages = {};
var editCount = 0;
var editLimit;
var pendingSaves = [];
var pendingEditBox;
var pendingEditBoxText;
var lastEditMillis = 0;
var runningSaves = false;
var install = () => {
  if (WG_ACTION !== "view" || !isDisam()) {
    return;
  }
  $(() => {
    const portletId = document.querySelector("#p-cactions") ? "p-cactions" : "p-tb";
    if (new RegExp(cfg.disamRegExp).test(getTitle())) {
      const startMainLink = $(mw.util.addPortletLink(portletId, "#", messages.startMain, "ca-disamassist-main")).on("click", startMain);
      const startSameLink = $(mw.util.addPortletLink(portletId, "#", messages.startSame, "ca-disamassist-same")).on("click", startSame);
      startLink = startMainLink.add(startSameLink);
    } else {
      startLink = $(mw.util.addPortletLink(portletId, "#", messages.start, "ca-disamassist-page")).on("click", start);
    }
  });
};
var start = () => {
  if (running) {
    return;
  }
  running = true;
  links = [];
  pageChanges = [];
  displayedPages = {};
  ensureDABExists().then((canMark) => {
    canMarkIntentionalLinks = canMark;
    createUI();
    addUnloadConfirm();
    markDisamOptions();
    checkEditLimit().then(() => {
      togglePendingEditBox(false);
      doPage();
    });
  });
};
var startSame = () => {
  forceSamePage = true;
  start();
};
var startMain = () => {
  forceSamePage = false;
  start();
};
var createUI = () => {
  const $body = $("body");
  ui = {
    display: $("<div>").addClass("disamassist-box disamassist-mainbox"),
    finishedMessage: $("<div>").text(messages.noMoreLinks).hide(),
    pageTitleLine: $("<span>").addClass("disamassist-pagetitleline"),
    pendingEditCounter: $("<div>").addClass("disamassist-editcounter"),
    context: $("<span>").addClass("disamassist-context"),
    undoButton: createButton(messages.undo, undo),
    omitButton: createButton(messages.omit, omit),
    endButton: createButton(messages.close, saveAndEnd),
    refreshButton: createButton(messages.refresh, refresh),
    titleAsTextButton: createButton(messages.titleAsText, chooseTitleFromPrompt),
    intentionalLinkButton: canMarkIntentionalLinks ? createButton(messages.intentionalLink, chooseIntentionalLink) : $("<span>"),
    disamNeededButton: cfg.disamNeededText ? createButton(messages.disamNeeded, chooseDisamNeeded) : $("<span>"),
    removeLinkButton: createButton(messages.removeLink, chooseLinkRemoval)
  };
  const top = $("<div>").addClass("disamassist-top").append([ui.pendingEditCounter, ui.finishedMessage, ui.pageTitleLine]);
  const leftButtons = $("<div>").addClass("disamassist-leftbuttons").append([ui.titleAsTextButton, ui.removeLinkButton, ui.intentionalLinkButton, ui.disamNeededButton, ui.omitButton]);
  const rightButtons = $("<div>").addClass("disamassist-rightbuttons").append([ui.undoButton, ui.refreshButton, ui.endButton]);
  const allButtons = $("<div>").addClass("disamassist-allbuttons").append([leftButtons, rightButtons]);
  ui.display.append([top, ui.context, allButtons]);
  updateEditCounter();
  toggleActionButtons(false);
  $body.find("#mw-content-text").before(ui.display);
  ui.display.hide().fadeIn();
};
var addUnloadConfirm = () => {
  $(window).on("beforeunload", () => {
    if (running && checkActualChanges()) {
      return messages.pending;
    } else if (editCount !== 0) {
      return messages.editInProgress;
    }
  });
};
var markDisamOptions = () => {
  const optionPageTitles = [];
  const optionMarkers = [];
  getDisamOptions().each((_index, element) => {
    const link = $(element);
    const title = extractPageName(link);
    const optionMarker = $("<a>").attr("href", "#").addClass("disamassist-optionmarker").text(messages.optionMarker).on("click", (ev) => {
      ev.preventDefault();
      chooseReplacement(title);
    });
    link.after(optionMarker);
    optionMarkers[optionMarkers.length] = optionMarker;
    optionPageTitles[optionPageTitles.length] = title;
  });
  const targetPage = getTargetPage();
  fetchRedirects([...optionPageTitles, ...targetPage]).done((redirects) => {
    const endTargetPage = resolveRedirect(targetPage, redirects);
    var _iterator = _createForOfIteratorHelper(optionPageTitles.entries()), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        const [ii, optionPageTitle] = _step.value;
        const endOptionTitle = resolveRedirect(optionPageTitle, redirects);
        if (isSamePage(optionPageTitle, targetPage)) {
          optionMarkers[ii].text(messages.targetOptionMarker).addClass("disamassist-curroptionmarker");
        } else if (isSamePage(endOptionTitle, endTargetPage)) {
          optionMarkers[ii].text(messages.redirectOptionMarker).addClass("disamassist-curroptionmarker");
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }).fail(error);
};
var ensureDABExists = () => {
  const deferred = new $.Deferred();
  const title = getTitle();
  if (!cfg.intentionalLinkOption) {
    deferred.resolve(false);
  } else if (new RegExp(cfg.disamRegExp).exec(title)) {
    deferred.resolve(true);
  } else {
    const disamTitle = cfg.disamFormat.replace("$1", title);
    loadPage(disamTitle).done((page) => {
      if (page.missing) {
        page.content = cfg.redirectToDisam.replace("$1", title);
        const summary = messages.redirectSummary.replace("$1", title);
        savePage(disamTitle, page, summary, false, true).done(() => {
          deferred.resolve(true);
        }).fail((description) => {
          error(description);
          deferred.resolve(false);
        });
      } else {
        deferred.resolve(true);
      }
    }).fail((description) => {
      error(description);
      deferred.resolve(false);
    });
  }
  return deferred.promise();
};
var checkEditLimit = () => {
  const deferred = new $.Deferred();
  if (cfg.editCooldown <= 0) {
    editLimit = false;
    deferred.resolve();
  } else {
    fetchRights().done((rights) => {
      editLimit = !rights.includes("bot");
    }).fail((description) => {
      error(description);
      editLimit = true;
    }).always(() => {
      deferred.resolve();
    });
  }
  return deferred.promise();
};
var doPage = () => {
  if (pageChanges.length > cfg.historySize) {
    applyChange(pageChanges.shift());
  }
  if (links.length) {
    currentPageTitle = links.shift();
    displayedPages[currentPageTitle] = true;
    toggleActionButtons(false);
    loadPage(currentPageTitle).done((data) => {
      currentPageParameters = data;
      currentLink = void 0;
      doLink();
    }).fail(error);
  } else {
    const targetPage = getTargetPage();
    getBacklinks(targetPage).done((backlinks, pageTitles) => {
      const pending = {};
      for (var _i = 0, _pendingSaves = pendingSaves; _i < _pendingSaves.length; _i++) {
        const el = _pendingSaves[_i];
        pending[el[0]] = true;
      }
      possibleBacklinkDestinations = pageTitles.filter((t) => {
        if (t === targetPage) {
          return true;
        }
        return removeDisam(t) !== targetPage;
      });
      links = backlinks.filter((el) => {
        return !displayedPages[el] && !pending[el];
      });
      if (links.length) {
        doPage();
      } else {
        updateContext();
      }
    }).fail(error);
  }
};
var doLink = () => {
  currentLink = extractLinkToPage(currentPageParameters.content, possibleBacklinkDestinations, currentLink ? currentLink.end : 0);
  if (currentLink) {
    updateContext();
  } else {
    doPage();
  }
};
var chooseReplacement = (pageTitle, extra, summary) => {
  if (choosing) {
    choosing = false;
    if (!summary) {
      summary = pageTitle ? messages.summaryChanged.replace("$1", pageTitle) : messages.summaryOmitted;
    }
    addChange(currentPageTitle, currentPageParameters, currentPageParameters.content, currentLink, summary);
    if (pageTitle && (pageTitle !== getTargetPage() || extra)) {
      currentPageParameters.content = replaceLink(currentPageParameters.content, pageTitle, currentLink, extra || "");
    }
    doLink();
  }
};
var chooseIntentionalLink = () => {
  const disamTitle = cfg.disamFormat.replace("$1", getTargetPage());
  chooseReplacement(disamTitle, "", messages.summaryIntentional);
};
var chooseTitleFromPrompt = () => {
  const title = prompt(messages.titleAsTextPrompt);
  if (title !== null) {
    chooseReplacement(title);
  }
};
var chooseLinkRemoval = () => {
  if (choosing) {
    const summary = messages.summaryRemoved;
    addChange(currentPageTitle, currentPageParameters, currentPageParameters.content, currentLink, summary);
    currentPageParameters.content = removeLink(currentPageParameters.content, currentLink);
    doLink();
  }
};
var chooseDisamNeeded = () => {
  chooseReplacement(currentLink.title, cfg.disamNeededText, messages.summaryHelpNeeded);
};
var undo = () => {
  if (pageChanges.length) {
    const lastPage = pageChanges.at(-1);
    if (currentPageTitle !== lastPage.title) {
      links.unshift(currentPageTitle);
      currentPageTitle = lastPage.title;
    }
    currentPageParameters = lastPage.page;
    currentPageParameters.content = lastPage.contentBefore.pop();
    currentLink = lastPage.links.pop();
    lastPage.summary.pop();
    if (!lastPage.contentBefore.length) {
      pageChanges.pop();
    }
    updateContext();
  }
};
var omit = () => {
  chooseReplacement();
};
var refresh = () => {
  saveAndEnd();
  start();
};
var toggleActionButtons = (enabled) => {
  const affectedButtons = [ui.omitButton, ui.titleAsTextButton, ui.removeLinkButton, ui.intentionalLinkButton, ui.disamNeededButton, ui.undoButton];
  for (var _i2 = 0, _affectedButtons = affectedButtons; _i2 < _affectedButtons.length; _i2++) {
    const button = _affectedButtons[_i2];
    button.prop("disabled", !enabled);
  }
};
var toggleFinishedMessage = (show) => {
  toggleActionButtons(!show);
  ui.undoButton.prop("disabled", !pageChanges.length);
  ui.finishedMessage.toggle(show);
  ui.pageTitleLine.toggle(!show);
  ui.context.toggle(!show);
};
var togglePendingEditBox = (show) => {
  const $body = $("body");
  if (!pendingEditBox) {
    pendingEditBox = $("<div>").addClass("disamassist-box disamassist-pendingeditbox");
    pendingEditBoxText = $("<div>");
    pendingEditBox.append(pendingEditBoxText).hide();
    if (editLimit) {
      pendingEditBox.append($("<div>").text(messages.pendingEditBoxLimited).addClass("disamassist-subtitle"));
    }
    $body.find("#mw-content-text").before(pendingEditBox);
    updateEditCounter();
  }
  if (show) {
    pendingEditBox.fadeIn();
  } else {
    pendingEditBox.fadeOut();
  }
};
var notifyCompletion = () => {
  const $body = $("body");
  const oldTitle = document.title;
  document.title = messages.notifyCharacter + document.title;
  $body.one("mousemove", () => {
    document.title = oldTitle;
  });
};
var updateContext = () => {
  updateEditCounter();
  if (currentLink) {
    ui.pageTitleLine.html(messages.pageTitleLine.replace("$1", mw.util.getUrl(currentPageTitle, {
      redirect: "no"
    })).replace("$2", mw.html.escape(currentPageTitle)));
    const context = extractContext(currentPageParameters.content, currentLink);
    ui.context.empty().append($("<span>").text(context[0])).append($("<span>").text(context[1]).addClass("disamassist-inclink")).append($("<span>").text(context[2]));
    const numLines = Math.ceil(ui.context.height() / Number.parseFloat(ui.context.css("line-height")));
    if (numLines < cfg.numContextLines) {
      ui.context.append(Array.from({
        length: cfg.numContextLines - numLines + 2
      }).join("<br>"));
    }
    toggleFinishedMessage(false);
    ui.undoButton.prop("disabled", !pageChanges.length);
    ui.removeLinkButton.prop("disabled", currentPageParameters.redirect);
    ui.intentionalLinkButton.prop("disabled", currentPageParameters.redirect);
    ui.disamNeededButton.prop("disabled", currentPageParameters.redirect || currentLink.hasDisamTemplate);
    choosing = true;
  } else {
    toggleFinishedMessage(true);
  }
};
var updateEditCounter = () => {
  if (ui.pendingEditCounter) {
    ui.pendingEditCounter.text(messages.pendingEditCounter.replace("$1", editCount).replace("$2", countActuallyChangedFullyCheckedPages()));
  }
  if (pendingEditBox) {
    if (editCount === 0 && !running) {
      togglePendingEditBox(false);
      notifyCompletion();
    }
    let textContent = editCount;
    if (editLimit) {
      textContent = messages.pendingEditBoxTimeEstimation.replace("$1", editCount).replace("$2", secondsToHHMMSS(cfg.editCooldown * editCount));
    }
    pendingEditBoxText.text(messages.pendingEditBox.replace("$1", textContent));
  }
};
var applyChange = (pageChange) => {
  if (pageChange.page.content !== pageChange.contentBefore[0]) {
    editCount++;
    const changeSummaries = pageChange.summary.join(messages.summarySeparator);
    const summary = messages.summary.replace("$1", getTargetPage()).replace("$2", changeSummaries);
    const save = editLimit ? saveWithCooldown : savePage;
    save(pageChange.title, pageChange.page, summary, true, true).always(() => {
      if (editCount > 0) {
        editCount--;
      }
      updateEditCounter();
    }).fail(error);
    updateEditCounter();
  }
};
var applyAllChanges = () => {
  var _iterator2 = _createForOfIteratorHelper(pageChanges), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      const pageChange = _step2.value;
      applyChange(pageChange);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  pageChanges = [];
};
var addChange = (pageTitle, page, oldContent, link, summary) => {
  if (!pageChanges.length || pageChanges.at(-1).title !== pageTitle) {
    pageChanges[pageChanges.length] = {
      title: pageTitle,
      page,
      contentBefore: [],
      links: [],
      summary: []
    };
  }
  const lastPageChange = pageChanges.at(-1);
  lastPageChange.contentBefore[lastPageChange.contentBefore.length] = oldContent;
  lastPageChange.links[lastPageChange.links.length] = link;
  lastPageChange.summary[lastPageChange.summary.length] = summary;
};
var checkActualChanges = () => {
  return countActualChanges() !== 0;
};
var countActualChanges = () => {
  let changeCount = 0;
  var _iterator3 = _createForOfIteratorHelper(pageChanges), _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
      const pageChange = _step3.value;
      if (pageChange.page.content !== pageChange.contentBefore[0]) {
        changeCount++;
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  return changeCount;
};
var countActuallyChangedFullyCheckedPages = () => {
  let changeCount = countActualChanges();
  if (pageChanges.length) {
    const lastChange = pageChanges.at(-1);
    if (lastChange.title === currentPageTitle && currentLink && lastChange.page.content !== lastChange.contentBefore[0]) {
      changeCount--;
    }
  }
  return changeCount;
};
var getDisamOptions = () => {
  const $body = $("body");
  return $body.find("#mw-content-text a").filter((_index, element) => {
    return !!extractPageName($(element));
  });
};
var saveAndEnd = () => {
  applyAllChanges();
  end();
};
var end = () => {
  const $body = $("body");
  const currentToolUI = ui.display;
  choosing = false;
  running = false;
  startLink.removeClass("selected");
  $body.find(".disamassist-optionmarker").remove();
  currentToolUI.fadeOut({
    complete() {
      currentToolUI.remove();
      if (editCount) {
        togglePendingEditBox(true);
      }
    }
  });
};
var error = (errorDescription) => {
  const $body = $("body");
  const errorBox = $("<div>").addClass("disamassist-box disamassist-errorbox");
  errorBox.text(messages.error.replace("$1", errorDescription));
  errorBox.append(createButton(messages.dismissError, () => {
    errorBox.fadeOut();
  }).addClass("disamassist-errorbutton"));
  const uiIsInPlace = ui && $.contains(document.documentElement, ui.display[0]);
  const nextElement = uiIsInPlace ? ui.display : $body.find("#mw-content-text");
  nextElement.before(errorBox);
  errorBox.hide().fadeIn();
};
var replaceLink = (text, title, link, extra) => {
  let newContent;
  isSamePage(title, link.description) ? (
    // [[B|A]] should be replaced with [[A]] rather than [[A|A]]
    newContent = link.description
  ) : newContent = "".concat(title, "|").concat(link.description);
  const linkStart = text.slice(0, Math.max(0, link.start));
  const linkEnd = text.slice(Math.max(0, link.end));
  return "".concat(linkStart, "[[").concat(newContent, "]]").concat(link.afterDescription).concat(extra || "").concat(linkEnd);
};
var removeLink = (text, link) => {
  const linkStart = text.slice(0, Math.max(0, link.start));
  const linkEnd = text.slice(Math.max(0, link.end));
  return linkStart + link.description + link.afterDescription + linkEnd;
};
var extractLink = (text, lastIndex) => {
  const titleRegex = /\[\[(.*?)(?:\|(.*?))?]]/g;
  const templateRegex = /^(\w*[\s!),.:;?}]*){{\s*([^{|}]+?)\s*(?:\|[^{]*?)?}}/;
  titleRegex.lastIndex = lastIndex;
  const match = titleRegex.exec(text);
  if (match && match.index !== -1) {
    var _match$;
    let possiblyAmbiguous = true;
    let hasDisamTemplate = false;
    let _end = match.index + 4 + match[1].length + (match[2] ? 1 + match[2].length : 0);
    let afterDescription = "";
    const rest = text.slice(Math.max(0, _end));
    const templateMatch = templateRegex.exec(rest);
    if (templateMatch) {
      const templateTitle = getCanonicalTitle(templateMatch[2]);
      const {
        disamLinkTemplates
      } = cfg;
      const {
        disamLinkIgnoreTemplates
      } = cfg;
      if (disamLinkTemplates.includes(templateTitle)) {
        _end += templateMatch[0].length;
        afterDescription = templateMatch[1].replace(/\s$/, "");
        hasDisamTemplate = true;
      } else if (disamLinkIgnoreTemplates.includes(templateTitle)) {
        possiblyAmbiguous = false;
      }
    }
    return {
      start: match.index,
      end: _end,
      possiblyAmbiguous,
      hasDisamTemplate,
      title: match[1],
      description: (_match$ = match[2]) !== null && _match$ !== void 0 ? _match$ : match[1],
      afterDescription
    };
  }
};
var extractLinkToPage = (text, destinations, lastIndex) => {
  let link;
  let title;
  do {
    link = extractLink(text, lastIndex);
    if (link) {
      lastIndex = link.end;
      title = getCanonicalTitle(link.title);
    }
  } while (link && (!link.possiblyAmbiguous || !(destinations !== null && destinations !== void 0 && destinations.includes(title))));
  return link;
};
var getTargetPage = () => {
  const title = getTitle();
  return forceSamePage ? title : removeDisam(title);
};
var getTitle = () => {
  return mw.config.get("wgPageName").replace(/_/g, " ");
};
var removeDisam = (title) => {
  var _match$2;
  const match = new RegExp(cfg.disamRegExp).exec(title);
  return (_match$2 = match === null || match === void 0 ? void 0 : match[1]) !== null && _match$2 !== void 0 ? _match$2 : title;
};
var isSamePage = (title1, title2) => {
  return getCanonicalTitle(title1) === getCanonicalTitle(title2);
};
var getCanonicalTitle = (title) => {
  try {
    title = new mw.Title(title).getPrefixedText();
  } catch {
  }
  return title;
};
var extractContext = (text, link) => {
  const contextStart = link.start - cfg.radius;
  const contextEnd = link.end + cfg.radius;
  let contextPrev = text.slice(contextStart, link.start);
  if (contextStart > 0) {
    contextPrev = messages.ellipsis + contextPrev;
  }
  let contextNext = text.slice(link.end, contextEnd);
  if (contextEnd < text.length) {
    contextNext += messages.ellipsis;
  }
  return [contextPrev, text.slice(link.start, link.end), contextNext];
};
var extractPageName = (link) => {
  let pageName = extractPageNameRaw(link);
  if (pageName) {
    const sectionPos = pageName.indexOf("#");
    let section = "";
    if (sectionPos !== -1) {
      section = pageName.slice(Math.max(0, sectionPos));
      pageName = pageName.slice(0, Math.max(0, sectionPos));
    }
    return getCanonicalTitle(pageName) + section;
  }
};
var extractPageNameRaw = (link) => {
  if (!link.hasClass("image")) {
    const href = link.attr("href");
    if (link.hasClass("new")) {
      if (href.includes(mw.config.get("wgScript"))) {
        return mw.util.getParamValue("title", href);
      }
    } else {
      const regex = mw.config.get("wgArticlePath").replace("$1", "(.*)");
      const regexResult = new RegExp("^".concat(regex, "$")).exec(href);
      if (Array.isArray(regexResult) && regexResult.length) {
        return decodeURIComponent(regexResult[1]);
      }
    }
  }
};
var isDisam = () => {
  const categories = mw.config.get("wgCategories", []);
  var _iterator4 = _createForOfIteratorHelper(categories), _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
      const category = _step4.value;
      const {
        disamCategories
      } = cfg;
      if (disamCategories.includes(category)) {
        return true;
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  return false;
};
var secondsToHHMMSS = (totalSeconds) => {
  let hhmmss = "";
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor(totalSeconds % 3600 / 60);
  const seconds = Math.floor(totalSeconds % 3600 % 60);
  if (hours >= 1) {
    hhmmss = "".concat(pad(hours, "0", 2), ":");
  }
  hhmmss += "".concat(pad(minutes, "0", 2), ":").concat(pad(seconds, "0", 2));
  return hhmmss;
};
var pad = (str, z, width) => {
  str = str.toString();
  if (str.length >= width) {
    return str;
  }
  return Array.from({
    length: width - str.length + 1
  }).join(z) + str;
};
var createButton = (text, onClick) => {
  const button = $("<input>").attr({
    type: "button",
    value: text
  });
  button.addClass("disamassist-button").on("click", onClick);
  return button;
};
var resolveRedirect = (pageTitle, possibleRedirects) => {
  let appliedRedirect = true;
  const visitedPages = {};
  let currentPage = getCanonicalTitle(pageTitle);
  while (appliedRedirect) {
    appliedRedirect = false;
    var _iterator5 = _createForOfIteratorHelper(possibleRedirects), _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
        const possibleRedirect = _step5.value;
        if (possibleRedirect.from === currentPage) {
          if (visitedPages[possibleRedirect.to]) {
            return pageTitle;
          }
          visitedPages[currentPage] = true;
          appliedRedirect = true;
          currentPage = possibleRedirect.to;
        }
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
  }
  return currentPage;
};
var getBacklinks = (page) => {
  const deferred = new $.Deferred();
  const params = {
    action: "query",
    list: "backlinks",
    bltitle: page,
    blredirect: true,
    bllimit: cfg.backlinkLimit,
    blnamespace: cfg.targetNamespaces.join("|")
  };
  api.get(params).done(({
    query
  }) => {
    const backlinks = [];
    const linkTitles = [getCanonicalTitle(page)];
    const backlinksQuery = query.backlinks;
    var _iterator6 = _createForOfIteratorHelper(backlinksQuery), _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
        const element = _step6.value;
        backlinks[backlinks.length] = element.title;
        if (!element.redirlinks) {
          continue;
        }
        linkTitles[linkTitles.length] = element.title;
        const {
          redirlinks
        } = element;
        var _iterator7 = _createForOfIteratorHelper(redirlinks), _step7;
        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
            const {
              title
            } = _step7.value;
            backlinks[backlinks.length] = title;
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    deferred.resolve(backlinks, linkTitles);
  }).fail((code) => {
    deferred.reject(messages.getBacklinksError.replace("$1", code));
  });
  return deferred.promise();
};
var fetchRedirects = (pageTitles) => {
  const deferred = new $.Deferred();
  const currentTitles = pageTitles.slice(0, cfg.queryTitleLimit);
  const restTitles = pageTitles.slice(cfg.queryTitleLimit);
  const params = {
    action: "query",
    titles: currentTitles.join("|"),
    redirects: true
  };
  api.get(params).done(({
    query
  }) => {
    var _query$redirects;
    const theseRedirects = (_query$redirects = query.redirects) !== null && _query$redirects !== void 0 ? _query$redirects : [];
    if (restTitles.length) {
      fetchRedirects(restTitles).done((redirects) => {
        deferred.resolve([...theseRedirects, ...redirects]);
      }).fail((description) => {
        deferred.reject(description);
      });
    } else {
      deferred.resolve(theseRedirects);
    }
  }).fail((code) => {
    deferred.reject(messages.fetchRedirectsError.replace("$1", code));
  });
  return deferred.promise();
};
var fetchRights = () => {
  const deferred = $.Deferred();
  const params = {
    action: "query",
    meta: "userinfo",
    uiprop: "rights"
  };
  api.get(params).done(({
    query
  }) => {
    deferred.resolve(query.userinfo.rights);
  }).fail((code) => {
    deferred.reject(messages.fetchRightsError.replace("$1", code));
  });
  return deferred.promise();
};
var loadPage = (pageTitle) => {
  const deferred = new $.Deferred();
  const params = {
    action: "query",
    format: "json",
    formatversion: "2",
    titles: pageTitle,
    prop: "revisions",
    rvprop: "timestamp|content",
    meta: "tokens",
    type: "csrf"
  };
  api.get(params).done(({
    query
  }) => {
    const [rawPage] = query.pages;
    const page = {};
    page.redirect = rawPage.redirect !== void 0;
    page.missing = rawPage.missing !== void 0;
    if (rawPage.revisions) {
      page.content = rawPage.revisions[0].content;
      page.baseTimeStamp = rawPage.revisions[0].timestamp;
    } else {
      page.content = "";
      page.baseTimeStamp = void 0;
    }
    page.startTimeStamp = rawPage.starttimestamp;
    page.editToken = query.tokens.csrftoken;
    deferred.resolve(page);
  }).fail((code) => {
    deferred.reject(messages.loadPageError.replace("$1", pageTitle).replace("$2", code));
  });
  return deferred.promise();
};
var saveWithCooldown = (...args) => {
  const deferred = new $.Deferred();
  pendingSaves[pendingSaves.length] = {
    args,
    dfd: deferred
  };
  if (!runningSaves) {
    checkAndSave();
  }
  return deferred.promise();
};
var checkAndSave = function() {
  if (!pendingSaves.length) {
    runningSaves = false;
    return;
  }
  runningSaves = true;
  const millisSinceLast = Date.now() - lastEditMillis;
  if (millisSinceLast < cfg.editCooldown * 1e3) {
    setTimeout(checkAndSave, cfg.editCooldown * 1e3 - millisSinceLast);
  } else {
    const save = pendingSaves.shift();
    savePage.apply(this, save.args).done(() => {
      checkAndSave();
      save.dfd.resolve();
    }).fail((description) => {
      checkAndSave();
      save.dfd.reject(description);
    });
    lastEditMillis = Date.now();
  }
};
var savePage = (pageTitle, {
  editToken,
  content,
  baseTimeStamp,
  startTimeStamp
}, summary, minorEdit, botEdit) => {
  const deferred = new $.Deferred();
  const params = {
    action: "edit",
    title: pageTitle,
    token: editToken,
    text: content,
    basetimestamp: baseTimeStamp,
    starttimestamp: startTimeStamp,
    summary,
    watchlist: cfg.watch,
    minor: minorEdit,
    bot: botEdit
  };
  api.post(params).done(() => {
    deferred.resolve();
  }).fail((code) => {
    deferred.reject(messages.savePageError.replace("$1", pageTitle).replace("$2", code));
  });
  return deferred.promise();
};
//! src/DisamAssist/DisamAssist.ts
$(install);

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mYWlscy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Rlc2NyaXB0b3JzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1jYWxsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NsYXNzb2YtcmF3LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtY2FsbGFibGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nZXQtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXN5bWJvbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RyeS10by1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWNhbGxhYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1Zy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1uYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9tYXRoLXRydW5jLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtYXJyYXkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1zZXQtbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVsZXRlLXByb3BlcnR5LW9yLXRocm93LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9lcy1ub3QtZXhjZWVkLXNhZmUtaW50ZWdlci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS51bnNoaWZ0LmpzIiwgInNyYy9EaXNhbUFzc2lzdC9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9EaXNhbUFzc2lzdC9tb2R1bGVzL2FwaS50cyIsICJzcmMvRGlzYW1Bc3Npc3QvbW9kdWxlcy9jb25maWcudHMiLCAic3JjL0Rpc2FtQXNzaXN0L21vZHVsZXMvbWVzc2FnZXMuanMiLCAic3JjL0Rpc2FtQXNzaXN0L21vZHVsZXMvY29yZS5qcyIsICJzcmMvRGlzYW1Bc3Npc3QvRGlzYW1Bc3Npc3QudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIid1c2Ugc3RyaWN0JztcbnZhciBjaGVjayA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgJiYgaXQuTWF0aCA9PT0gTWF0aCAmJiBpdDtcbn07XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG5tb2R1bGUuZXhwb3J0cyA9XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1nbG9iYWwtdGhpcyAtLSBzYWZlXG4gIGNoZWNrKHR5cGVvZiBnbG9iYWxUaGlzID09ICdvYmplY3QnICYmIGdsb2JhbFRoaXMpIHx8XG4gIGNoZWNrKHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93KSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzIC0tIHNhZmVcbiAgY2hlY2sodHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZikgfHxcbiAgY2hlY2sodHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwpIHx8XG4gIGNoZWNrKHR5cGVvZiB0aGlzID09ICdvYmplY3QnICYmIHRoaXMpIHx8XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuYyAtLSBmYWxsYmFja1xuICAoZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSkoKSB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbi8vIERldGVjdCBJRTgncyBpbmNvbXBsZXRlIGRlZmluZVByb3BlcnR5IGltcGxlbWVudGF0aW9uXG5tb2R1bGUuZXhwb3J0cyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgMSwgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSlbMV0gIT09IDc7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZnVuY3Rpb24tcHJvdG90eXBlLWJpbmQgLS0gc2FmZVxuICB2YXIgdGVzdCA9IChmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0pLmJpbmQoKTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGlucyAtLSBzYWZlXG4gIHJldHVybiB0eXBlb2YgdGVzdCAhPSAnZnVuY3Rpb24nIHx8IHRlc3QuaGFzT3duUHJvcGVydHkoJ3Byb3RvdHlwZScpO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIE5BVElWRV9CSU5EID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtbmF0aXZlJyk7XG5cbnZhciBjYWxsID0gRnVuY3Rpb24ucHJvdG90eXBlLmNhbGw7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX0JJTkQgPyBjYWxsLmJpbmQoY2FsbCkgOiBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBjYWxsLmFwcGx5KGNhbGwsIGFyZ3VtZW50cyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBOYXNob3JuIH4gSkRLOCBidWdcbnZhciBOQVNIT1JOX0JVRyA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvciAmJiAhJHByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoeyAxOiAyIH0sIDEpO1xuXG4vLyBgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZWAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5wcm90b3R5cGUucHJvcGVydHlpc2VudW1lcmFibGVcbmV4cG9ydHMuZiA9IE5BU0hPUk5fQlVHID8gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoVikge1xuICB2YXIgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0aGlzLCBWKTtcbiAgcmV0dXJuICEhZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLmVudW1lcmFibGU7XG59IDogJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIE5BVElWRV9CSU5EID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtbmF0aXZlJyk7XG5cbnZhciBGdW5jdGlvblByb3RvdHlwZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbnZhciBjYWxsID0gRnVuY3Rpb25Qcm90b3R5cGUuY2FsbDtcbnZhciB1bmN1cnJ5VGhpc1dpdGhCaW5kID0gTkFUSVZFX0JJTkQgJiYgRnVuY3Rpb25Qcm90b3R5cGUuYmluZC5iaW5kKGNhbGwsIGNhbGwpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9CSU5EID8gdW5jdXJyeVRoaXNXaXRoQmluZCA6IGZ1bmN0aW9uIChmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBjYWxsLmFwcGx5KGZuLCBhcmd1bWVudHMpO1xuICB9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbnZhciB0b1N0cmluZyA9IHVuY3VycnlUaGlzKHt9LnRvU3RyaW5nKTtcbnZhciBzdHJpbmdTbGljZSA9IHVuY3VycnlUaGlzKCcnLnNsaWNlKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHN0cmluZ1NsaWNlKHRvU3RyaW5nKGl0KSwgOCwgLTEpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG5cbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xudmFyIHNwbGl0ID0gdW5jdXJyeVRoaXMoJycuc3BsaXQpO1xuXG4vLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xubW9kdWxlLmV4cG9ydHMgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIHRocm93cyBhbiBlcnJvciBpbiByaGlubywgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3JoaW5vL2lzc3Vlcy8zNDZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGlucyAtLSBzYWZlXG4gIHJldHVybiAhJE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApO1xufSkgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNsYXNzb2YoaXQpID09PSAnU3RyaW5nJyA/IHNwbGl0KGl0LCAnJykgOiAkT2JqZWN0KGl0KTtcbn0gOiAkT2JqZWN0O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIHdlIGNhbid0IHVzZSBqdXN0IGBpdCA9PSBudWxsYCBzaW5jZSBvZiBgZG9jdW1lbnQuYWxsYCBzcGVjaWFsIGNhc2Vcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtSXNIVE1MRERBLWludGVybmFsLXNsb3QtYWVjXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPT09IG51bGwgfHwgaXQgPT09IHVuZGVmaW5lZDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgUmVxdWlyZU9iamVjdENvZXJjaWJsZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXJlcXVpcmVvYmplY3Rjb2VyY2libGVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpc051bGxPclVuZGVmaW5lZChpdCkpIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0Jyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIEluZGV4ZWRPYmplY3QocmVxdWlyZU9iamVjdENvZXJjaWJsZShpdCkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLUlzSFRNTEREQS1pbnRlcm5hbC1zbG90XG52YXIgZG9jdW1lbnRBbGwgPSB0eXBlb2YgZG9jdW1lbnQgPT0gJ29iamVjdCcgJiYgZG9jdW1lbnQuYWxsO1xuXG4vLyBgSXNDYWxsYWJsZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWlzY2FsbGFibGVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL25vLXR5cGVvZi11bmRlZmluZWQgLS0gcmVxdWlyZWQgZm9yIHRlc3Rpbmdcbm1vZHVsZS5leHBvcnRzID0gdHlwZW9mIGRvY3VtZW50QWxsID09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50QWxsICE9PSB1bmRlZmluZWQgPyBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmd1bWVudCA9PSAnZnVuY3Rpb24nIHx8IGFyZ3VtZW50ID09PSBkb2N1bWVudEFsbDtcbn0gOiBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmd1bWVudCA9PSAnZnVuY3Rpb24nO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiBpc0NhbGxhYmxlKGl0KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbnZhciBhRnVuY3Rpb24gPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGlzQ2FsbGFibGUoYXJndW1lbnQpID8gYXJndW1lbnQgOiB1bmRlZmluZWQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lc3BhY2UsIG1ldGhvZCkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA8IDIgPyBhRnVuY3Rpb24oZ2xvYmFsW25hbWVzcGFjZV0pIDogZ2xvYmFsW25hbWVzcGFjZV0gJiYgZ2xvYmFsW25hbWVzcGFjZV1bbWV0aG9kXTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVuY3VycnlUaGlzKHt9LmlzUHJvdG90eXBlT2YpO1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gdHlwZW9mIG5hdmlnYXRvciAhPSAndW5kZWZpbmVkJyAmJiBTdHJpbmcobmF2aWdhdG9yLnVzZXJBZ2VudCkgfHwgJyc7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQnKTtcblxudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBEZW5vID0gZ2xvYmFsLkRlbm87XG52YXIgdmVyc2lvbnMgPSBwcm9jZXNzICYmIHByb2Nlc3MudmVyc2lvbnMgfHwgRGVubyAmJiBEZW5vLnZlcnNpb247XG52YXIgdjggPSB2ZXJzaW9ucyAmJiB2ZXJzaW9ucy52ODtcbnZhciBtYXRjaCwgdmVyc2lvbjtcblxuaWYgKHY4KSB7XG4gIG1hdGNoID0gdjguc3BsaXQoJy4nKTtcbiAgLy8gaW4gb2xkIENocm9tZSwgdmVyc2lvbnMgb2YgVjggaXNuJ3QgVjggPSBDaHJvbWUgLyAxMFxuICAvLyBidXQgdGhlaXIgY29ycmVjdCB2ZXJzaW9ucyBhcmUgbm90IGludGVyZXN0aW5nIGZvciB1c1xuICB2ZXJzaW9uID0gbWF0Y2hbMF0gPiAwICYmIG1hdGNoWzBdIDwgNCA/IDEgOiArKG1hdGNoWzBdICsgbWF0Y2hbMV0pO1xufVxuXG4vLyBCcm93c2VyRlMgTm9kZUpTIGBwcm9jZXNzYCBwb2x5ZmlsbCBpbmNvcnJlY3RseSBzZXQgYC52OGAgdG8gYDAuMGBcbi8vIHNvIGNoZWNrIGB1c2VyQWdlbnRgIGV2ZW4gaWYgYC52OGAgZXhpc3RzLCBidXQgMFxuaWYgKCF2ZXJzaW9uICYmIHVzZXJBZ2VudCkge1xuICBtYXRjaCA9IHVzZXJBZ2VudC5tYXRjaCgvRWRnZVxcLyhcXGQrKS8pO1xuICBpZiAoIW1hdGNoIHx8IG1hdGNoWzFdID49IDc0KSB7XG4gICAgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2goL0Nocm9tZVxcLyhcXGQrKS8pO1xuICAgIGlmIChtYXRjaCkgdmVyc2lvbiA9ICttYXRjaFsxXTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHZlcnNpb247XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tc3ltYm9sIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbicpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xuXG52YXIgJFN0cmluZyA9IGdsb2JhbC5TdHJpbmc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlzeW1ib2xzIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG5tb2R1bGUuZXhwb3J0cyA9ICEhT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgc3ltYm9sID0gU3ltYm9sKCdzeW1ib2wgZGV0ZWN0aW9uJyk7XG4gIC8vIENocm9tZSAzOCBTeW1ib2wgaGFzIGluY29ycmVjdCB0b1N0cmluZyBjb252ZXJzaW9uXG4gIC8vIGBnZXQtb3duLXByb3BlcnR5LXN5bWJvbHNgIHBvbHlmaWxsIHN5bWJvbHMgY29udmVydGVkIHRvIG9iamVjdCBhcmUgbm90IFN5bWJvbCBpbnN0YW5jZXNcbiAgLy8gbmI6IERvIG5vdCBjYWxsIGBTdHJpbmdgIGRpcmVjdGx5IHRvIGF2b2lkIHRoaXMgYmVpbmcgb3B0aW1pemVkIG91dCB0byBgc3ltYm9sKycnYCB3aGljaCB3aWxsLFxuICAvLyBvZiBjb3Vyc2UsIGZhaWwuXG4gIHJldHVybiAhJFN0cmluZyhzeW1ib2wpIHx8ICEoT2JqZWN0KHN5bWJvbCkgaW5zdGFuY2VvZiBTeW1ib2wpIHx8XG4gICAgLy8gQ2hyb21lIDM4LTQwIHN5bWJvbHMgYXJlIG5vdCBpbmhlcml0ZWQgZnJvbSBET00gY29sbGVjdGlvbnMgcHJvdG90eXBlcyB0byBpbnN0YW5jZXNcbiAgICAhU3ltYm9sLnNoYW0gJiYgVjhfVkVSU0lPTiAmJiBWOF9WRVJTSU9OIDwgNDE7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBlcy9uby1zeW1ib2wgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmcgKi9cbnZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfU1lNQk9MXG4gICYmICFTeW1ib2wuc2hhbVxuICAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBpc1Byb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YnKTtcbnZhciBVU0VfU1lNQk9MX0FTX1VJRCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZCcpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcblxubW9kdWxlLmV4cG9ydHMgPSBVU0VfU1lNQk9MX0FTX1VJRCA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgJFN5bWJvbCA9IGdldEJ1aWx0SW4oJ1N5bWJvbCcpO1xuICByZXR1cm4gaXNDYWxsYWJsZSgkU3ltYm9sKSAmJiBpc1Byb3RvdHlwZU9mKCRTeW1ib2wucHJvdG90eXBlLCAkT2JqZWN0KGl0KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkU3RyaW5nID0gU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICB0cnkge1xuICAgIHJldHVybiAkU3RyaW5nKGFyZ3VtZW50KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gJ09iamVjdCc7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciB0cnlUb1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90cnktdG8tc3RyaW5nJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgQXNzZXJ0OiBJc0NhbGxhYmxlKGFyZ3VtZW50KSBpcyB0cnVlYFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgaWYgKGlzQ2FsbGFibGUoYXJndW1lbnQpKSByZXR1cm4gYXJndW1lbnQ7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKHRyeVRvU3RyaW5nKGFyZ3VtZW50KSArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtbnVsbC1vci11bmRlZmluZWQnKTtcblxuLy8gYEdldE1ldGhvZGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWdldG1ldGhvZFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoViwgUCkge1xuICB2YXIgZnVuYyA9IFZbUF07XG4gIHJldHVybiBpc051bGxPclVuZGVmaW5lZChmdW5jKSA/IHVuZGVmaW5lZCA6IGFDYWxsYWJsZShmdW5jKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBPcmRpbmFyeVRvUHJpbWl0aXZlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb3JkaW5hcnl0b3ByaW1pdGl2ZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5wdXQsIHByZWYpIHtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChwcmVmID09PSAnc3RyaW5nJyAmJiBpc0NhbGxhYmxlKGZuID0gaW5wdXQudG9TdHJpbmcpICYmICFpc09iamVjdCh2YWwgPSBjYWxsKGZuLCBpbnB1dCkpKSByZXR1cm4gdmFsO1xuICBpZiAoaXNDYWxsYWJsZShmbiA9IGlucHV0LnZhbHVlT2YpICYmICFpc09iamVjdCh2YWwgPSBjYWxsKGZuLCBpbnB1dCkpKSByZXR1cm4gdmFsO1xuICBpZiAocHJlZiAhPT0gJ3N0cmluZycgJiYgaXNDYWxsYWJsZShmbiA9IGlucHV0LnRvU3RyaW5nKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgdHJ5IHtcbiAgICBkZWZpbmVQcm9wZXJ0eShnbG9iYWwsIGtleSwgeyB2YWx1ZTogdmFsdWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgZ2xvYmFsW2tleV0gPSB2YWx1ZTtcbiAgfSByZXR1cm4gdmFsdWU7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcblxudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gbW9kdWxlLmV4cG9ydHMgPSBnbG9iYWxUaGlzW1NIQVJFRF0gfHwgZGVmaW5lR2xvYmFsUHJvcGVydHkoU0hBUkVELCB7fSk7XG5cbihzdG9yZS52ZXJzaW9ucyB8fCAoc3RvcmUudmVyc2lvbnMgPSBbXSkpLnB1c2goe1xuICB2ZXJzaW9uOiAnMy4zNi4wJyxcbiAgbW9kZTogSVNfUFVSRSA/ICdwdXJlJyA6ICdnbG9iYWwnLFxuICBjb3B5cmlnaHQ6ICfCqSAyMDE0LTIwMjQgRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSknLFxuICBsaWNlbnNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvYmxvYi92My4zNi4wL0xJQ0VOU0UnLFxuICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcydcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBzdG9yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlIHx8IHt9KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xuXG4vLyBgVG9PYmplY3RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b29iamVjdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuICRPYmplY3QocmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudCkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IHVuY3VycnlUaGlzKHt9Lmhhc093blByb3BlcnR5KTtcblxuLy8gYEhhc093blByb3BlcnR5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaGFzb3ducHJvcGVydHlcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtaGFzb3duIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0Lmhhc093biB8fCBmdW5jdGlvbiBoYXNPd24oaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkodG9PYmplY3QoaXQpLCBrZXkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbnZhciBpZCA9IDA7XG52YXIgcG9zdGZpeCA9IE1hdGgucmFuZG9tKCk7XG52YXIgdG9TdHJpbmcgPSB1bmN1cnJ5VGhpcygxLjAudG9TdHJpbmcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJyArIChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5KSArICcpXycgKyB0b1N0cmluZygrK2lkICsgcG9zdGZpeCwgMzYpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcbnZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24nKTtcbnZhciBVU0VfU1lNQk9MX0FTX1VJRCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZCcpO1xuXG52YXIgU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcbnZhciBXZWxsS25vd25TeW1ib2xzU3RvcmUgPSBzaGFyZWQoJ3drcycpO1xudmFyIGNyZWF0ZVdlbGxLbm93blN5bWJvbCA9IFVTRV9TWU1CT0xfQVNfVUlEID8gU3ltYm9sWydmb3InXSB8fCBTeW1ib2wgOiBTeW1ib2wgJiYgU3ltYm9sLndpdGhvdXRTZXR0ZXIgfHwgdWlkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGlmICghaGFzT3duKFdlbGxLbm93blN5bWJvbHNTdG9yZSwgbmFtZSkpIHtcbiAgICBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV0gPSBOQVRJVkVfU1lNQk9MICYmIGhhc093bihTeW1ib2wsIG5hbWUpXG4gICAgICA/IFN5bWJvbFtuYW1lXVxuICAgICAgOiBjcmVhdGVXZWxsS25vd25TeW1ib2woJ1N5bWJvbC4nICsgbmFtZSk7XG4gIH0gcmV0dXJuIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXN5bWJvbCcpO1xudmFyIGdldE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtbWV0aG9kJyk7XG52YXIgb3JkaW5hcnlUb1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vcmRpbmFyeS10by1wcmltaXRpdmUnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG52YXIgVE9fUFJJTUlUSVZFID0gd2VsbEtub3duU3ltYm9sKCd0b1ByaW1pdGl2ZScpO1xuXG4vLyBgVG9QcmltaXRpdmVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b3ByaW1pdGl2ZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5wdXQsIHByZWYpIHtcbiAgaWYgKCFpc09iamVjdChpbnB1dCkgfHwgaXNTeW1ib2woaW5wdXQpKSByZXR1cm4gaW5wdXQ7XG4gIHZhciBleG90aWNUb1ByaW0gPSBnZXRNZXRob2QoaW5wdXQsIFRPX1BSSU1JVElWRSk7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChleG90aWNUb1ByaW0pIHtcbiAgICBpZiAocHJlZiA9PT0gdW5kZWZpbmVkKSBwcmVmID0gJ2RlZmF1bHQnO1xuICAgIHJlc3VsdCA9IGNhbGwoZXhvdGljVG9QcmltLCBpbnB1dCwgcHJlZik7XG4gICAgaWYgKCFpc09iamVjdChyZXN1bHQpIHx8IGlzU3ltYm9sKHJlc3VsdCkpIHJldHVybiByZXN1bHQ7XG4gICAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG4gIH1cbiAgaWYgKHByZWYgPT09IHVuZGVmaW5lZCkgcHJlZiA9ICdudW1iZXInO1xuICByZXR1cm4gb3JkaW5hcnlUb1ByaW1pdGl2ZShpbnB1dCwgcHJlZik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcmltaXRpdmUnKTtcbnZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1zeW1ib2wnKTtcblxuLy8gYFRvUHJvcGVydHlLZXlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b3Byb3BlcnR5a2V5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICB2YXIga2V5ID0gdG9QcmltaXRpdmUoYXJndW1lbnQsICdzdHJpbmcnKTtcbiAgcmV0dXJuIGlzU3ltYm9sKGtleSkgPyBrZXkgOiBrZXkgKyAnJztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyIGRvY3VtZW50ID0gZ2xvYmFsLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgRVhJU1RTID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gRVhJU1RTID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBjcmVhdGVFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50Jyk7XG5cbi8vIFRoYW5rcyB0byBJRTggZm9yIGl0cyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhREVTQ1JJUFRPUlMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGNyZWF0ZUVsZW1lbnQoJ2RpdicpLCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH1cbiAgfSkuYSAhPT0gNztcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1wcm9wZXJ0eS1pcy1lbnVtZXJhYmxlJyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcm9wZXJ0eS1rZXknKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yXG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyA/ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICBPID0gdG9JbmRleGVkT2JqZWN0KE8pO1xuICBQID0gdG9Qcm9wZXJ0eUtleShQKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIGlmIChoYXNPd24oTywgUCkpIHJldHVybiBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoIWNhbGwocHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUuZiwgTywgUCksIE9bUF0pO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBWOCB+IENocm9tZSAzNi1cbi8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMzMzRcbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9LCAncHJvdG90eXBlJywge1xuICAgIHZhbHVlOiA0MixcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSkucHJvdG90eXBlICE9PSA0Mjtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyICRTdHJpbmcgPSBTdHJpbmc7XG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYEFzc2VydDogVHlwZShhcmd1bWVudCkgaXMgT2JqZWN0YFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgaWYgKGlzT2JqZWN0KGFyZ3VtZW50KSkgcmV0dXJuIGFyZ3VtZW50O1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcigkU3RyaW5nKGFyZ3VtZW50KSArICcgaXMgbm90IGFuIG9iamVjdCcpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pZTgtZG9tLWRlZmluZScpO1xudmFyIFY4X1BST1RPVFlQRV9ERUZJTkVfQlVHID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Y4LXByb3RvdHlwZS1kZWZpbmUtYnVnJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcm9wZXJ0eS1rZXknKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbnZhciAkZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgRU5VTUVSQUJMRSA9ICdlbnVtZXJhYmxlJztcbnZhciBDT05GSUdVUkFCTEUgPSAnY29uZmlndXJhYmxlJztcbnZhciBXUklUQUJMRSA9ICd3cml0YWJsZSc7XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydHlgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydHlcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gVjhfUFJPVE9UWVBFX0RFRklORV9CVUcgPyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9Qcm9wZXJ0eUtleShQKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmICh0eXBlb2YgTyA9PT0gJ2Z1bmN0aW9uJyAmJiBQID09PSAncHJvdG90eXBlJyAmJiAndmFsdWUnIGluIEF0dHJpYnV0ZXMgJiYgV1JJVEFCTEUgaW4gQXR0cmlidXRlcyAmJiAhQXR0cmlidXRlc1tXUklUQUJMRV0pIHtcbiAgICB2YXIgY3VycmVudCA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG4gICAgaWYgKGN1cnJlbnQgJiYgY3VycmVudFtXUklUQUJMRV0pIHtcbiAgICAgIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICAgICAgQXR0cmlidXRlcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiBDT05GSUdVUkFCTEUgaW4gQXR0cmlidXRlcyA/IEF0dHJpYnV0ZXNbQ09ORklHVVJBQkxFXSA6IGN1cnJlbnRbQ09ORklHVVJBQkxFXSxcbiAgICAgICAgZW51bWVyYWJsZTogRU5VTUVSQUJMRSBpbiBBdHRyaWJ1dGVzID8gQXR0cmlidXRlc1tFTlVNRVJBQkxFXSA6IGN1cnJlbnRbRU5VTUVSQUJMRV0sXG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgICAgfTtcbiAgICB9XG4gIH0gcmV0dXJuICRkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKTtcbn0gOiAkZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9Qcm9wZXJ0eUtleShQKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gJGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IG5ldyAkVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCcpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5TW9kdWxlLmYob2JqZWN0LCBrZXksIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcblxudmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyIGdldERlc2NyaXB0b3IgPSBERVNDUklQVE9SUyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG52YXIgRVhJU1RTID0gaGFzT3duKEZ1bmN0aW9uUHJvdG90eXBlLCAnbmFtZScpO1xuLy8gYWRkaXRpb25hbCBwcm90ZWN0aW9uIGZyb20gbWluaWZpZWQgLyBtYW5nbGVkIC8gZHJvcHBlZCBmdW5jdGlvbiBuYW1lc1xudmFyIFBST1BFUiA9IEVYSVNUUyAmJiAoZnVuY3Rpb24gc29tZXRoaW5nKCkgeyAvKiBlbXB0eSAqLyB9KS5uYW1lID09PSAnc29tZXRoaW5nJztcbnZhciBDT05GSUdVUkFCTEUgPSBFWElTVFMgJiYgKCFERVNDUklQVE9SUyB8fCAoREVTQ1JJUFRPUlMgJiYgZ2V0RGVzY3JpcHRvcihGdW5jdGlvblByb3RvdHlwZSwgJ25hbWUnKS5jb25maWd1cmFibGUpKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEVYSVNUUzogRVhJU1RTLFxuICBQUk9QRVI6IFBST1BFUixcbiAgQ09ORklHVVJBQkxFOiBDT05GSUdVUkFCTEVcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBzdG9yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcblxudmFyIGZ1bmN0aW9uVG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyhGdW5jdGlvbi50b1N0cmluZyk7XG5cbi8vIHRoaXMgaGVscGVyIGJyb2tlbiBpbiBgY29yZS1qc0AzLjQuMS0zLjQuNGAsIHNvIHdlIGNhbid0IHVzZSBgc2hhcmVkYCBoZWxwZXJcbmlmICghaXNDYWxsYWJsZShzdG9yZS5pbnNwZWN0U291cmNlKSkge1xuICBzdG9yZS5pbnNwZWN0U291cmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uVG9TdHJpbmcoaXQpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0b3JlLmluc3BlY3RTb3VyY2U7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbnZhciBXZWFrTWFwID0gZ2xvYmFsLldlYWtNYXA7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNDYWxsYWJsZShXZWFrTWFwKSAmJiAvbmF0aXZlIGNvZGUvLnRlc3QoU3RyaW5nKFdlYWtNYXApKTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcblxudmFyIGtleXMgPSBzaGFyZWQoJ2tleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBrZXlzW2tleV0gfHwgKGtleXNba2V5XSA9IHVpZChrZXkpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgTkFUSVZFX1dFQUtfTUFQID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlYWstbWFwLWJhc2ljLWRldGVjdGlvbicpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG52YXIgc2hhcmVkS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG5cbnZhciBPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCA9ICdPYmplY3QgYWxyZWFkeSBpbml0aWFsaXplZCc7XG52YXIgVHlwZUVycm9yID0gZ2xvYmFsLlR5cGVFcnJvcjtcbnZhciBXZWFrTWFwID0gZ2xvYmFsLldlYWtNYXA7XG52YXIgc2V0LCBnZXQsIGhhcztcblxudmFyIGVuZm9yY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGhhcyhpdCkgPyBnZXQoaXQpIDogc2V0KGl0LCB7fSk7XG59O1xuXG52YXIgZ2V0dGVyRm9yID0gZnVuY3Rpb24gKFRZUEUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpdCkge1xuICAgIHZhciBzdGF0ZTtcbiAgICBpZiAoIWlzT2JqZWN0KGl0KSB8fCAoc3RhdGUgPSBnZXQoaXQpKS50eXBlICE9PSBUWVBFKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbmNvbXBhdGlibGUgcmVjZWl2ZXIsICcgKyBUWVBFICsgJyByZXF1aXJlZCcpO1xuICAgIH0gcmV0dXJuIHN0YXRlO1xuICB9O1xufTtcblxuaWYgKE5BVElWRV9XRUFLX01BUCB8fCBzaGFyZWQuc3RhdGUpIHtcbiAgdmFyIHN0b3JlID0gc2hhcmVkLnN0YXRlIHx8IChzaGFyZWQuc3RhdGUgPSBuZXcgV2Vha01hcCgpKTtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tc2VsZi1hc3NpZ24gLS0gcHJvdG90eXBlIG1ldGhvZHMgcHJvdGVjdGlvbiAqL1xuICBzdG9yZS5nZXQgPSBzdG9yZS5nZXQ7XG4gIHN0b3JlLmhhcyA9IHN0b3JlLmhhcztcbiAgc3RvcmUuc2V0ID0gc3RvcmUuc2V0O1xuICAvKiBlc2xpbnQtZW5hYmxlIG5vLXNlbGYtYXNzaWduIC0tIHByb3RvdHlwZSBtZXRob2RzIHByb3RlY3Rpb24gKi9cbiAgc2V0ID0gZnVuY3Rpb24gKGl0LCBtZXRhZGF0YSkge1xuICAgIGlmIChzdG9yZS5oYXMoaXQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKE9CSkVDVF9BTFJFQURZX0lOSVRJQUxJWkVEKTtcbiAgICBtZXRhZGF0YS5mYWNhZGUgPSBpdDtcbiAgICBzdG9yZS5zZXQoaXQsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBzdG9yZS5nZXQoaXQpIHx8IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gc3RvcmUuaGFzKGl0KTtcbiAgfTtcbn0gZWxzZSB7XG4gIHZhciBTVEFURSA9IHNoYXJlZEtleSgnc3RhdGUnKTtcbiAgaGlkZGVuS2V5c1tTVEFURV0gPSB0cnVlO1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgaWYgKGhhc093bihpdCwgU1RBVEUpKSB0aHJvdyBuZXcgVHlwZUVycm9yKE9CSkVDVF9BTFJFQURZX0lOSVRJQUxJWkVEKTtcbiAgICBtZXRhZGF0YS5mYWNhZGUgPSBpdDtcbiAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoaXQsIFNUQVRFLCBtZXRhZGF0YSk7XG4gICAgcmV0dXJuIG1ldGFkYXRhO1xuICB9O1xuICBnZXQgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaGFzT3duKGl0LCBTVEFURSkgPyBpdFtTVEFURV0gOiB7fTtcbiAgfTtcbiAgaGFzID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGhhc093bihpdCwgU1RBVEUpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBzZXQsXG4gIGdldDogZ2V0LFxuICBoYXM6IGhhcyxcbiAgZW5mb3JjZTogZW5mb3JjZSxcbiAgZ2V0dGVyRm9yOiBnZXR0ZXJGb3Jcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBDT05GSUdVUkFCTEVfRlVOQ1RJT05fTkFNRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1uYW1lJykuQ09ORklHVVJBQkxFO1xudmFyIGluc3BlY3RTb3VyY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UnKTtcbnZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJyk7XG5cbnZhciBlbmZvcmNlSW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZW5mb3JjZTtcbnZhciBnZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXQ7XG52YXIgJFN0cmluZyA9IFN0cmluZztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIHN0cmluZ1NsaWNlID0gdW5jdXJyeVRoaXMoJycuc2xpY2UpO1xudmFyIHJlcGxhY2UgPSB1bmN1cnJ5VGhpcygnJy5yZXBsYWNlKTtcbnZhciBqb2luID0gdW5jdXJyeVRoaXMoW10uam9pbik7XG5cbnZhciBDT05GSUdVUkFCTEVfTEVOR1RIID0gREVTQ1JJUFRPUlMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5KGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSwgJ2xlbmd0aCcsIHsgdmFsdWU6IDggfSkubGVuZ3RoICE9PSA4O1xufSk7XG5cbnZhciBURU1QTEFURSA9IFN0cmluZyhTdHJpbmcpLnNwbGl0KCdTdHJpbmcnKTtcblxudmFyIG1ha2VCdWlsdEluID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUsIG5hbWUsIG9wdGlvbnMpIHtcbiAgaWYgKHN0cmluZ1NsaWNlKCRTdHJpbmcobmFtZSksIDAsIDcpID09PSAnU3ltYm9sKCcpIHtcbiAgICBuYW1lID0gJ1snICsgcmVwbGFjZSgkU3RyaW5nKG5hbWUpLCAvXlN5bWJvbFxcKChbXildKilcXCkuKiQvLCAnJDEnKSArICddJztcbiAgfVxuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmdldHRlcikgbmFtZSA9ICdnZXQgJyArIG5hbWU7XG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuc2V0dGVyKSBuYW1lID0gJ3NldCAnICsgbmFtZTtcbiAgaWYgKCFoYXNPd24odmFsdWUsICduYW1lJykgfHwgKENPTkZJR1VSQUJMRV9GVU5DVElPTl9OQU1FICYmIHZhbHVlLm5hbWUgIT09IG5hbWUpKSB7XG4gICAgaWYgKERFU0NSSVBUT1JTKSBkZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgJ25hbWUnLCB7IHZhbHVlOiBuYW1lLCBjb25maWd1cmFibGU6IHRydWUgfSk7XG4gICAgZWxzZSB2YWx1ZS5uYW1lID0gbmFtZTtcbiAgfVxuICBpZiAoQ09ORklHVVJBQkxFX0xFTkdUSCAmJiBvcHRpb25zICYmIGhhc093bihvcHRpb25zLCAnYXJpdHknKSAmJiB2YWx1ZS5sZW5ndGggIT09IG9wdGlvbnMuYXJpdHkpIHtcbiAgICBkZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgJ2xlbmd0aCcsIHsgdmFsdWU6IG9wdGlvbnMuYXJpdHkgfSk7XG4gIH1cbiAgdHJ5IHtcbiAgICBpZiAob3B0aW9ucyAmJiBoYXNPd24ob3B0aW9ucywgJ2NvbnN0cnVjdG9yJykgJiYgb3B0aW9ucy5jb25zdHJ1Y3Rvcikge1xuICAgICAgaWYgKERFU0NSSVBUT1JTKSBkZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgJ3Byb3RvdHlwZScsIHsgd3JpdGFibGU6IGZhbHNlIH0pO1xuICAgIC8vIGluIFY4IH4gQ2hyb21lIDUzLCBwcm90b3R5cGVzIG9mIHNvbWUgbWV0aG9kcywgbGlrZSBgQXJyYXkucHJvdG90eXBlLnZhbHVlc2AsIGFyZSBub24td3JpdGFibGVcbiAgICB9IGVsc2UgaWYgKHZhbHVlLnByb3RvdHlwZSkgdmFsdWUucHJvdG90eXBlID0gdW5kZWZpbmVkO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIHZhciBzdGF0ZSA9IGVuZm9yY2VJbnRlcm5hbFN0YXRlKHZhbHVlKTtcbiAgaWYgKCFoYXNPd24oc3RhdGUsICdzb3VyY2UnKSkge1xuICAgIHN0YXRlLnNvdXJjZSA9IGpvaW4oVEVNUExBVEUsIHR5cGVvZiBuYW1lID09ICdzdHJpbmcnID8gbmFtZSA6ICcnKTtcbiAgfSByZXR1cm4gdmFsdWU7XG59O1xuXG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1leHRlbmQtbmF0aXZlIC0tIHJlcXVpcmVkXG5GdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmcgPSBtYWtlQnVpbHRJbihmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuIGlzQ2FsbGFibGUodGhpcykgJiYgZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKS5zb3VyY2UgfHwgaW5zcGVjdFNvdXJjZSh0aGlzKTtcbn0sICd0b1N0cmluZycpO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIG1ha2VCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4nKTtcbnZhciBkZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIGtleSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSBvcHRpb25zID0ge307XG4gIHZhciBzaW1wbGUgPSBvcHRpb25zLmVudW1lcmFibGU7XG4gIHZhciBuYW1lID0gb3B0aW9ucy5uYW1lICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm5hbWUgOiBrZXk7XG4gIGlmIChpc0NhbGxhYmxlKHZhbHVlKSkgbWFrZUJ1aWx0SW4odmFsdWUsIG5hbWUsIG9wdGlvbnMpO1xuICBpZiAob3B0aW9ucy5nbG9iYWwpIHtcbiAgICBpZiAoc2ltcGxlKSBPW2tleV0gPSB2YWx1ZTtcbiAgICBlbHNlIGRlZmluZUdsb2JhbFByb3BlcnR5KGtleSwgdmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIW9wdGlvbnMudW5zYWZlKSBkZWxldGUgT1trZXldO1xuICAgICAgZWxzZSBpZiAoT1trZXldKSBzaW1wbGUgPSB0cnVlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgICBpZiAoc2ltcGxlKSBPW2tleV0gPSB2YWx1ZTtcbiAgICBlbHNlIGRlZmluZVByb3BlcnR5TW9kdWxlLmYoTywga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogIW9wdGlvbnMubm9uQ29uZmlndXJhYmxlLFxuICAgICAgd3JpdGFibGU6ICFvcHRpb25zLm5vbldyaXRhYmxlXG4gICAgfSk7XG4gIH0gcmV0dXJuIE87XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcblxuLy8gYE1hdGgudHJ1bmNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1tYXRoLnRydW5jXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tbWF0aC10cnVuYyAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE1hdGgudHJ1bmMgfHwgZnVuY3Rpb24gdHJ1bmMoeCkge1xuICB2YXIgbiA9ICt4O1xuICByZXR1cm4gKG4gPiAwID8gZmxvb3IgOiBjZWlsKShuKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRydW5jID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL21hdGgtdHJ1bmMnKTtcblxuLy8gYFRvSW50ZWdlck9ySW5maW5pdHlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b2ludGVnZXJvcmluZmluaXR5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICB2YXIgbnVtYmVyID0gK2FyZ3VtZW50O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICByZXR1cm4gbnVtYmVyICE9PSBudW1iZXIgfHwgbnVtYmVyID09PSAwID8gMCA6IHRydW5jKG51bWJlcik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHknKTtcblxudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBIZWxwZXIgZm9yIGEgcG9wdWxhciByZXBlYXRpbmcgY2FzZSBvZiB0aGUgc3BlYzpcbi8vIExldCBpbnRlZ2VyIGJlID8gVG9JbnRlZ2VyKGluZGV4KS5cbi8vIElmIGludGVnZXIgPCAwLCBsZXQgcmVzdWx0IGJlIG1heCgobGVuZ3RoICsgaW50ZWdlciksIDApOyBlbHNlIGxldCByZXN1bHQgYmUgbWluKGludGVnZXIsIGxlbmd0aCkuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIHZhciBpbnRlZ2VyID0gdG9JbnRlZ2VyT3JJbmZpbml0eShpbmRleCk7XG4gIHJldHVybiBpbnRlZ2VyIDwgMCA/IG1heChpbnRlZ2VyICsgbGVuZ3RoLCAwKSA6IG1pbihpbnRlZ2VyLCBsZW5ndGgpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9JbnRlZ2VyT3JJbmZpbml0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyLW9yLWluZmluaXR5Jyk7XG5cbnZhciBtaW4gPSBNYXRoLm1pbjtcblxuLy8gYFRvTGVuZ3RoYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9sZW5ndGhcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBsZW4gPSB0b0ludGVnZXJPckluZmluaXR5KGFyZ3VtZW50KTtcbiAgcmV0dXJuIGxlbiA+IDAgPyBtaW4obGVuLCAweDFGRkZGRkZGRkZGRkZGKSA6IDA7IC8vIDIgKiogNTMgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xuXG4vLyBgTGVuZ3RoT2ZBcnJheUxpa2VgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1sZW5ndGhvZmFycmF5bGlrZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0b0xlbmd0aChvYmoubGVuZ3RoKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1hYnNvbHV0ZS1pbmRleCcpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUueyBpbmRleE9mLCBpbmNsdWRlcyB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IGxlbmd0aE9mQXJyYXlMaWtlKE8pO1xuICAgIGlmIChsZW5ndGggPT09IDApIHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9PSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICAgICAgaWYgKHZhbHVlICE9PSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgaWYgKChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSAmJiBPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcbiAgaW5jbHVkZXM6IGNyZWF0ZU1ldGhvZCh0cnVlKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5pbmRleE9mYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5kZXhvZlxuICBpbmRleE9mOiBjcmVhdGVNZXRob2QoZmFsc2UpXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIGluZGV4T2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMnKS5pbmRleE9mO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcblxudmFyIHB1c2ggPSB1bmN1cnJ5VGhpcyhbXS5wdXNoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgIWhhc093bihoaWRkZW5LZXlzLCBrZXkpICYmIGhhc093bihPLCBrZXkpICYmIHB1c2gocmVzdWx0LCBrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzT3duKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHB1c2gocmVzdWx0LCBrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIElFOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSBbXG4gICdjb25zdHJ1Y3RvcicsXG4gICdoYXNPd25Qcm9wZXJ0eScsXG4gICdpc1Byb3RvdHlwZU9mJyxcbiAgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJyxcbiAgJ3RvTG9jYWxlU3RyaW5nJyxcbiAgJ3RvU3RyaW5nJyxcbiAgJ3ZhbHVlT2YnXG5dO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpbnRlcm5hbE9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG5cbnZhciBoaWRkZW5LZXlzID0gZW51bUJ1Z0tleXMuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eW5hbWVzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5bmFtZXMgLS0gc2FmZVxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHJldHVybiBpbnRlcm5hbE9iamVjdEtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlzeW1ib2xzIC0tIHNhZmVcbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcycpO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG5cbnZhciBjb25jYXQgPSB1bmN1cnJ5VGhpcyhbXS5jb25jYXQpO1xuXG4vLyBhbGwgb2JqZWN0IGtleXMsIGluY2x1ZGVzIG5vbi1lbnVtZXJhYmxlIGFuZCBzeW1ib2xzXG5tb2R1bGUuZXhwb3J0cyA9IGdldEJ1aWx0SW4oJ1JlZmxlY3QnLCAnb3duS2V5cycpIHx8IGZ1bmN0aW9uIG93bktleXMoaXQpIHtcbiAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlLmYoYW5PYmplY3QoaXQpKTtcbiAgdmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZS5mO1xuICByZXR1cm4gZ2V0T3duUHJvcGVydHlTeW1ib2xzID8gY29uY2F0KGtleXMsIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkpIDoga2V5cztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgb3duS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vd24ta2V5cycpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSwgZXhjZXB0aW9ucykge1xuICB2YXIga2V5cyA9IG93bktleXMoc291cmNlKTtcbiAgdmFyIGRlZmluZVByb3BlcnR5ID0gZGVmaW5lUHJvcGVydHlNb2R1bGUuZjtcbiAgdmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZS5mO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICBpZiAoIWhhc093bih0YXJnZXQsIGtleSkgJiYgIShleGNlcHRpb25zICYmIGhhc093bihleGNlcHRpb25zLCBrZXkpKSkge1xuICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgIH1cbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbnZhciByZXBsYWNlbWVudCA9IC8jfFxcLnByb3RvdHlwZVxcLi87XG5cbnZhciBpc0ZvcmNlZCA9IGZ1bmN0aW9uIChmZWF0dXJlLCBkZXRlY3Rpb24pIHtcbiAgdmFyIHZhbHVlID0gZGF0YVtub3JtYWxpemUoZmVhdHVyZSldO1xuICByZXR1cm4gdmFsdWUgPT09IFBPTFlGSUxMID8gdHJ1ZVxuICAgIDogdmFsdWUgPT09IE5BVElWRSA/IGZhbHNlXG4gICAgOiBpc0NhbGxhYmxlKGRldGVjdGlvbikgPyBmYWlscyhkZXRlY3Rpb24pXG4gICAgOiAhIWRldGVjdGlvbjtcbn07XG5cbnZhciBub3JtYWxpemUgPSBpc0ZvcmNlZC5ub3JtYWxpemUgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gIHJldHVybiBTdHJpbmcoc3RyaW5nKS5yZXBsYWNlKHJlcGxhY2VtZW50LCAnLicpLnRvTG93ZXJDYXNlKCk7XG59O1xuXG52YXIgZGF0YSA9IGlzRm9yY2VkLmRhdGEgPSB7fTtcbnZhciBOQVRJVkUgPSBpc0ZvcmNlZC5OQVRJVkUgPSAnTic7XG52YXIgUE9MWUZJTEwgPSBpc0ZvcmNlZC5QT0xZRklMTCA9ICdQJztcblxubW9kdWxlLmV4cG9ydHMgPSBpc0ZvcmNlZDtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJykuZjtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgZGVmaW5lQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4nKTtcbnZhciBkZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5Jyk7XG52YXIgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jb3B5LWNvbnN0cnVjdG9yLXByb3BlcnRpZXMnKTtcbnZhciBpc0ZvcmNlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1mb3JjZWQnKTtcblxuLypcbiAgb3B0aW9ucy50YXJnZXQgICAgICAgICAtIG5hbWUgb2YgdGhlIHRhcmdldCBvYmplY3RcbiAgb3B0aW9ucy5nbG9iYWwgICAgICAgICAtIHRhcmdldCBpcyB0aGUgZ2xvYmFsIG9iamVjdFxuICBvcHRpb25zLnN0YXQgICAgICAgICAgIC0gZXhwb3J0IGFzIHN0YXRpYyBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnByb3RvICAgICAgICAgIC0gZXhwb3J0IGFzIHByb3RvdHlwZSBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnJlYWwgICAgICAgICAgIC0gcmVhbCBwcm90b3R5cGUgbWV0aG9kIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy5mb3JjZWQgICAgICAgICAtIGV4cG9ydCBldmVuIGlmIHRoZSBuYXRpdmUgZmVhdHVyZSBpcyBhdmFpbGFibGVcbiAgb3B0aW9ucy5iaW5kICAgICAgICAgICAtIGJpbmQgbWV0aG9kcyB0byB0aGUgdGFyZ2V0LCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMud3JhcCAgICAgICAgICAgLSB3cmFwIGNvbnN0cnVjdG9ycyB0byBwcmV2ZW50aW5nIGdsb2JhbCBwb2xsdXRpb24sIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy51bnNhZmUgICAgICAgICAtIHVzZSB0aGUgc2ltcGxlIGFzc2lnbm1lbnQgb2YgcHJvcGVydHkgaW5zdGVhZCBvZiBkZWxldGUgKyBkZWZpbmVQcm9wZXJ0eVxuICBvcHRpb25zLnNoYW0gICAgICAgICAgIC0gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuICBvcHRpb25zLmVudW1lcmFibGUgICAgIC0gZXhwb3J0IGFzIGVudW1lcmFibGUgcHJvcGVydHlcbiAgb3B0aW9ucy5kb250Q2FsbEdldFNldCAtIHByZXZlbnQgY2FsbGluZyBhIGdldHRlciBvbiB0YXJnZXRcbiAgb3B0aW9ucy5uYW1lICAgICAgICAgICAtIHRoZSAubmFtZSBvZiB0aGUgZnVuY3Rpb24gaWYgaXQgZG9lcyBub3QgbWF0Y2ggdGhlIGtleVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9wdGlvbnMsIHNvdXJjZSkge1xuICB2YXIgVEFSR0VUID0gb3B0aW9ucy50YXJnZXQ7XG4gIHZhciBHTE9CQUwgPSBvcHRpb25zLmdsb2JhbDtcbiAgdmFyIFNUQVRJQyA9IG9wdGlvbnMuc3RhdDtcbiAgdmFyIEZPUkNFRCwgdGFyZ2V0LCBrZXksIHRhcmdldFByb3BlcnR5LCBzb3VyY2VQcm9wZXJ0eSwgZGVzY3JpcHRvcjtcbiAgaWYgKEdMT0JBTCkge1xuICAgIHRhcmdldCA9IGdsb2JhbDtcbiAgfSBlbHNlIGlmIChTVEFUSUMpIHtcbiAgICB0YXJnZXQgPSBnbG9iYWxbVEFSR0VUXSB8fCBkZWZpbmVHbG9iYWxQcm9wZXJ0eShUQVJHRVQsIHt9KTtcbiAgfSBlbHNlIHtcbiAgICB0YXJnZXQgPSBnbG9iYWxbVEFSR0VUXSAmJiBnbG9iYWxbVEFSR0VUXS5wcm90b3R5cGU7XG4gIH1cbiAgaWYgKHRhcmdldCkgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgc291cmNlUHJvcGVydHkgPSBzb3VyY2Vba2V5XTtcbiAgICBpZiAob3B0aW9ucy5kb250Q2FsbEdldFNldCkge1xuICAgICAgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSk7XG4gICAgICB0YXJnZXRQcm9wZXJ0eSA9IGRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci52YWx1ZTtcbiAgICB9IGVsc2UgdGFyZ2V0UHJvcGVydHkgPSB0YXJnZXRba2V5XTtcbiAgICBGT1JDRUQgPSBpc0ZvcmNlZChHTE9CQUwgPyBrZXkgOiBUQVJHRVQgKyAoU1RBVElDID8gJy4nIDogJyMnKSArIGtleSwgb3B0aW9ucy5mb3JjZWQpO1xuICAgIC8vIGNvbnRhaW5lZCBpbiB0YXJnZXRcbiAgICBpZiAoIUZPUkNFRCAmJiB0YXJnZXRQcm9wZXJ0eSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodHlwZW9mIHNvdXJjZVByb3BlcnR5ID09IHR5cGVvZiB0YXJnZXRQcm9wZXJ0eSkgY29udGludWU7XG4gICAgICBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzKHNvdXJjZVByb3BlcnR5LCB0YXJnZXRQcm9wZXJ0eSk7XG4gICAgfVxuICAgIC8vIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgICBpZiAob3B0aW9ucy5zaGFtIHx8ICh0YXJnZXRQcm9wZXJ0eSAmJiB0YXJnZXRQcm9wZXJ0eS5zaGFtKSkge1xuICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KHNvdXJjZVByb3BlcnR5LCAnc2hhbScsIHRydWUpO1xuICAgIH1cbiAgICBkZWZpbmVCdWlsdEluKHRhcmdldCwga2V5LCBzb3VyY2VQcm9wZXJ0eSwgb3B0aW9ucyk7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcblxuLy8gYElzQXJyYXlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc2FycmF5XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktaXNhcnJheSAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmd1bWVudCkge1xuICByZXR1cm4gY2xhc3NvZihhcmd1bWVudCkgPT09ICdBcnJheSc7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gU2FmYXJpIDwgMTMgZG9lcyBub3QgdGhyb3cgYW4gZXJyb3IgaW4gdGhpcyBjYXNlXG52YXIgU0lMRU5UX09OX05PTl9XUklUQUJMRV9MRU5HVEhfU0VUID0gREVTQ1JJUFRPUlMgJiYgIWZ1bmN0aW9uICgpIHtcbiAgLy8gbWFrZXMgbm8gc2Vuc2Ugd2l0aG91dCBwcm9wZXIgc3RyaWN0IG1vZGUgc3VwcG9ydFxuICBpZiAodGhpcyAhPT0gdW5kZWZpbmVkKSByZXR1cm4gdHJ1ZTtcbiAgdHJ5IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoW10sICdsZW5ndGgnLCB7IHdyaXRhYmxlOiBmYWxzZSB9KS5sZW5ndGggPSAxO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBlcnJvciBpbnN0YW5jZW9mIFR5cGVFcnJvcjtcbiAgfVxufSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNJTEVOVF9PTl9OT05fV1JJVEFCTEVfTEVOR1RIX1NFVCA/IGZ1bmN0aW9uIChPLCBsZW5ndGgpIHtcbiAgaWYgKGlzQXJyYXkoTykgJiYgIWdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCAnbGVuZ3RoJykud3JpdGFibGUpIHtcbiAgICB0aHJvdyBuZXcgJFR5cGVFcnJvcignQ2Fubm90IHNldCByZWFkIG9ubHkgLmxlbmd0aCcpO1xuICB9IHJldHVybiBPLmxlbmd0aCA9IGxlbmd0aDtcbn0gOiBmdW5jdGlvbiAoTywgbGVuZ3RoKSB7XG4gIHJldHVybiBPLmxlbmd0aCA9IGxlbmd0aDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRyeVRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RyeS10by1zdHJpbmcnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIFApIHtcbiAgaWYgKCFkZWxldGUgT1tQXSkgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Nhbm5vdCBkZWxldGUgcHJvcGVydHkgJyArIHRyeVRvU3RyaW5nKFApICsgJyBvZiAnICsgdHJ5VG9TdHJpbmcoTykpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gMHgxRkZGRkZGRkZGRkZGRjsgLy8gMiAqKiA1MyAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPiBNQVhfU0FGRV9JTlRFR0VSKSB0aHJvdyAkVHlwZUVycm9yKCdNYXhpbXVtIGFsbG93ZWQgaW5kZXggZXhjZWVkZWQnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xudmFyIHNldEFycmF5TGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNldC1sZW5ndGgnKTtcbnZhciBkZWxldGVQcm9wZXJ0eU9yVGhyb3cgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVsZXRlLXByb3BlcnR5LW9yLXRocm93Jyk7XG52YXIgZG9lc05vdEV4Y2VlZFNhZmVJbnRlZ2VyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvZXMtbm90LWV4Y2VlZC1zYWZlLWludGVnZXInKTtcblxuLy8gSUU4LVxudmFyIElOQ09SUkVDVF9SRVNVTFQgPSBbXS51bnNoaWZ0KDApICE9PSAxO1xuXG4vLyBWOCB+IENocm9tZSA8IDcxIGFuZCBTYWZhcmkgPD0gMTUuNCwgRkYgPCAyMyB0aHJvd3MgSW50ZXJuYWxFcnJvclxudmFyIHByb3BlckVycm9yT25Ob25Xcml0YWJsZUxlbmd0aCA9IGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoW10sICdsZW5ndGgnLCB7IHdyaXRhYmxlOiBmYWxzZSB9KS51bnNoaWZ0KCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIGVycm9yIGluc3RhbmNlb2YgVHlwZUVycm9yO1xuICB9XG59O1xuXG52YXIgRk9SQ0VEID0gSU5DT1JSRUNUX1JFU1VMVCB8fCAhcHJvcGVyRXJyb3JPbk5vbldyaXRhYmxlTGVuZ3RoKCk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUudW5zaGlmdGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS51bnNoaWZ0XG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgYXJpdHk6IDEsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzIC0tIHJlcXVpcmVkIGZvciBgLmxlbmd0aGBcbiAgdW5zaGlmdDogZnVuY3Rpb24gdW5zaGlmdChpdGVtKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCh0aGlzKTtcbiAgICB2YXIgbGVuID0gbGVuZ3RoT2ZBcnJheUxpa2UoTyk7XG4gICAgdmFyIGFyZ0NvdW50ID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBpZiAoYXJnQ291bnQpIHtcbiAgICAgIGRvZXNOb3RFeGNlZWRTYWZlSW50ZWdlcihsZW4gKyBhcmdDb3VudCk7XG4gICAgICB2YXIgayA9IGxlbjtcbiAgICAgIHdoaWxlIChrLS0pIHtcbiAgICAgICAgdmFyIHRvID0gayArIGFyZ0NvdW50O1xuICAgICAgICBpZiAoayBpbiBPKSBPW3RvXSA9IE9ba107XG4gICAgICAgIGVsc2UgZGVsZXRlUHJvcGVydHlPclRocm93KE8sIHRvKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgYXJnQ291bnQ7IGorKykge1xuICAgICAgICBPW2pdID0gYXJndW1lbnRzW2pdO1xuICAgICAgfVxuICAgIH0gcmV0dXJuIHNldEFycmF5TGVuZ3RoKE8sIGxlbiArIGFyZ0NvdW50KTtcbiAgfVxufSk7XG4iLCAiY29uc3QgV0dfQUNUSU9OOiBNZWRpYVdpa2lDb25maWdNYXBXZ0FjdGlvbiA9IG13LmNvbmZpZy5nZXQoJ3dnQWN0aW9uJyk7XG5cbmV4cG9ydCB7V0dfQUNUSU9OfTtcbiIsICJpbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoJ0Rpc2FtQXNzaXN0LzEuMScpO1xuXG5leHBvcnQge2FwaX07XG4iLCAiY29uc3QgY2ZnID0ge1xuXHQvKiBDYXRlZ29yaWVzIHdoZXJlIGRpc2FtYmlndWF0aW9uIHBhZ2VzIGFyZSBhZGRlZCAodXN1YWxseSBieSBhIHRlbXBsYXRlIGxpa2Uge3tEaXNhbWJpZ3VhdGlvbn19ICovXG5cdGRpc2FtQ2F0ZWdvcmllczogWyflhajpg6jmtojmrafkuYnpobXpnaInXSxcblx0LyogXCJDYW5vbmljYWwgbmFtZXNcIiBvZiB0aGUgdGVtcGxhdGVzIHRoYXQgbWF5IGFwcGVhciBhZnRlciBhbWJpZ3VvdXMgbGlua3MgYW5kIHdoaWNoIHNob3VsZCBiZSByZW1vdmVkIHdoZW4gZml4aW5nIHRob3NlIGxpbmtzICovXG5cdGRpc2FtTGlua1RlbXBsYXRlczogW1xuXHRcdCdEaXNhbWJpZ3VhdGlvbiBuZWVkZWQnLFxuXHRcdCdBbWJpZ3VvdXMgbGluaycsXG5cdFx0J0FtYmxpbmsnLFxuXHRcdCdEYWIgbmVlZGVkJyxcblx0XHQnRGlzYW1iLWxpbmsnLFxuXHRcdCdEaXNhbWJpZyBuZWVkZWQnLFxuXHRcdCdEaXNhbWJpZ3VhdGUnLFxuXHRcdCdEbicsXG5cdFx0J05lZWRkYWInLFxuXHRdLFxuXHQvKiBcIkNhbm9uaWNhbCBuYW1lc1wiIG9mIHRoZSB0ZW1wbGF0ZXMgdGhhdCBkZXNpZ25hdGUgaW50ZW50aW9uYWwgbGlua3MgdG8gZGlzYW1iaWd1YXRpb24gcGFnZXMgKi9cblx0ZGlzYW1MaW5rSWdub3JlVGVtcGxhdGVzOiBbJ1IgZnJvbSBhbWJpZ3VvdXMgcGFnZScsICdSIHRvIGRpc2FtYmlndWF0aW9uIHBhZ2UnLCAnUiBmcm9tIGluY29tcGxldGUgZGlzYW1iaWd1YXRpb24nXSxcblx0LyogRm9ybWF0IHN0cmluZyBmb3IgXCJGb28gKGRpc2FtYmlndWF0aW9uKVwiLXN0eWxlIHBhZ2VzICovXG5cdGRpc2FtRm9ybWF0OiAnJDHvvIjmtojmrafkuYnvvIknLFxuXHQvKiBSZWd1bGFyIGV4cHJlc3Npb24gbWF0Y2hpbmcgdGhlIHRpdGxlcyBvZiBkaXNhbWJpZ3VhdGlvbiBwYWdlcyAod2hlbiB0aGV5IGFyZSBkaWZmZXJlbnQgZnJvbSB0aGUgdGl0bGVzIG9mIHRoZSBwcmltYXJ5IHRvcGljcykgKi9cblx0ZGlzYW1SZWdFeHA6ICdeKC4qKe+8iCjmtojmrafkuYl85raI5q2n576pKe+8iSQnLFxuXHQvKiBUZXh0IHRoYXQgd2lsbCBiZSBpbnNlcnRlZCBhZnRlciB0aGUgbGluayBpZiB0aGUgdXNlciByZXF1ZXN0cyBoZWxwLiBJZiB0aGUgdmFsdWUgaXMgbnVsbCwgdGhlIG9wdGlvbiB0byByZXF1ZXN0IGhlbHAgd29uJ3QgYmUgb2ZmZXJlZCAqL1xuXHRkaXNhbU5lZWRlZFRleHQ6ICd7e2RufGRhdGU9e3snLmNvbmNhdCgnc3Vic3Q6JywgJ0NVUlJFTlRNT05USE5BTUUnLCAnfX0ge3snLCAnc3Vic3Q6JywgJ0NVUlJFTlRZRUFSfX19fScpLFxuXHQvKiBDb250ZW50IG9mIHRoZSBcIkZvbyAoZGlzYW1iaWd1YXRpb24pXCIgcGFnZXMgdGhhdCB3aWxsIGJlIGNyZWF0ZWQgYXV0b21hdGljYWxseSB3aGVuIHVzaW5nIERpc2FtQXNzaXN0IGZyb20gYSBcIkZvb1wiIHBhZ2UgKi9cblx0cmVkaXJlY3RUb0Rpc2FtOiAnI+mHjeWumuWQkSBbWyQxXV0nLmNvbmNhdCgne3tSIHRvIGRpc2FtYmlndWF0aW9uIHBhZ2V9fScpLFxuXHQvKiBXaGV0aGVyIGludGVudGlvbmFsIGxpbmtzIHRvIGRpc2FtYmlndWF0aW9uIHBhZ2VzIGNhbiBiZSBleHBsaWNpdGx5IG1hcmtlZCBieSBhZGRpbmcgXCIgKGRpc2FtYmlndWF0aW9uKVwiICovXG5cdGludGVudGlvbmFsTGlua09wdGlvbjogZmFsc2UsXG5cdC8qIE5hbWVzcGFjZXMgdGhhdCB3aWxsIGJlIHNlYXJjaGVkIGZvciBpbmNvbWluZyBsaW5rcyB0byB0aGUgZGlzYW1iaWd1YXRpb24gcGFnZSAocGFnZXMgaW4gb3RoZXIgbmFtZXNwYWNlcyB3aWxsIGJlIGlnbm9yZWQpICovXG5cdHRhcmdldE5hbWVzcGFjZXM6IFs2LCAxMCwgMTQsIDExOCwgMF0sXG5cdC8qIE51bWJlciBvZiBiYWNrbGlua3MgdGhhdCB3aWxsIGJlIGRvd25sb2FkZWQgYXQgb25jZSBXaGVuIHVzaW5nIGJscmVkaXJlY3QsIHRoZSBtYXhpbXVtIGxpbWl0IGlzIHN1cHBvc2VkbHkgaGFsdmVkIChzZWUgaHR0cDovL3d3dy5tZWRpYXdpa2kub3JnL3dpa2kvQVBJOkJhY2tsaW5rcykgKi9cblx0YmFja2xpbmtMaW1pdDogMjUwLFxuXHQvKiBOdW1iZXIgb2YgdGl0bGVzIHdlIGNhbiBxdWVyeSBmb3IgYXQgb25jZSAqL1xuXHRxdWVyeVRpdGxlTGltaXQ6IDUwLFxuXHQvKiBOdW1iZXIgb2YgY2hhcmFjdGVycyBiZWZvcmUgYW5kIGFmdGVyIHRoZSBpbmNvbWluZyBsaW5rIHRoYXQgd2lsbCBiZSBkaXNwbGF5ZWQgKi9cblx0cmFkaXVzOiAzMDAsXG5cdC8qIEhlaWdodCBvZiB0aGUgY29udGV4dCBib3gsIGluIGxpbmVzICovXG5cdG51bUNvbnRleHRMaW5lczogNCxcblx0LyogTnVtYmVyIG9mIHBhZ2VzIHRoYXQgd2lsbCBiZSBzdG9yZWQgYmVmb3JlIHNhdmluZywgc28gdGhhdCBjaGFuZ2VzIHRvIHRoZW0gY2FuIGJlIHVuZG9uZSBpZiBuZWVkIGJlICovXG5cdGhpc3RvcnlTaXplOiAyLFxuXHQvKiBNaW5pbXVtIHRpbWUgaW4gc2Vjb25kcyBzaW5jZSB0aGUgbGFzdCBjaGFuZ2Ugd2FzIHNhdmVkIGJlZm9yZSBhIG5ldyBlZGl0IGNhbiBiZSBtYWRlLiBBIG5lZ2F0aXZlIHZhbHVlIG9yIDAgZGlzYWJsZXMgdGhlIGNvb2xkb3duLiBVc2VycyB3aXRoIHRoZSBcImJvdFwiIHJpZ2h0IHdvbid0IGJlIGFmZmVjdGVkIGJ5IHRoZSBjb29sZG93biAqL1xuXHRlZGl0Q29vbGRvd246IDAsXG5cdC8qIFNwZWNpZnkgaG93IHRoZSB3YXRjaGxpc3QgaXMgYWZmZWN0ZWQgYnkgRGlzYW1Bc3Npc3QgZWRpdHMuIFBvc3NpYmxlIHZhbHVlczogXCJ3YXRjaFwiLCBcInVud2F0Y2hcIiwgXCJwcmVmZXJlbmNlc1wiLCBcIm5vY2hhbmdlXCIgKi9cblx0d2F0Y2g6ICdub2NoYW5nZScsXG59O1xuXG5leHBvcnQge2NmZ307XG4iLCAiY29uc3QgbWVzc2FnZXMgPSB7XG5cdHN0YXJ0OiAn5Li66ZO+5o6l5raI5q2n5LmJJyxcblx0c3RhcnRNYWluOiAn5Li66ZO+6Iez5Li75p2h55uu55qE6ZO+5o6l5raI5q2n5LmJJyxcblx0c3RhcnRTYW1lOiAn5Li66ZO+6Iez5raI5q2n5LmJ6aG155qE6ZO+5o6l5raI5q2n5LmJJyxcblx0Y2xvc2U6ICflhbPpl60nLFxuXHR1bmRvOiAn5aSN5Y6fJyxcblx0b21pdDogJ+i3s+i/hycsXG5cdHJlZnJlc2g6ICfph43mlrDmlbTnkIYnLFxuXHR0aXRsZUFzVGV4dDogJ+WFtuWug+ebruaghycsXG5cdGRpc2FtTmVlZGVkOiAn5qCH56S6e3tkbn19Jyxcblx0aW50ZW50aW9uYWxMaW5rOiAn5pyJ5oSP6ZO+5Yiw5raI5q2n5LmJ6aG155qE6ZO+5o6lJyxcblx0dGl0bGVBc1RleHRQcm9tcHQ6ICfor7fovpPlhaXmlrDnmoTpk77mjqXnm67moIfvvJonLFxuXHRyZW1vdmVMaW5rOiAn5Y676Zmk6ZO+5o6lJyxcblx0b3B0aW9uTWFya2VyOiAnIFvpk77mjqXliLDov5nph4xdJyxcblx0dGFyZ2V0T3B0aW9uTWFya2VyOiAnIFvlvZPliY3nm67moIddJyxcblx0cmVkaXJlY3RPcHRpb25NYXJrZXI6ICcgW+W9k+WJjeebruagh++8iOmHjeWumuWQke+8iV0nLFxuXHRwYWdlVGl0bGVMaW5lOiAnPGEgaHJlZj1cIiQxXCI+JDI8L2E+77yaJyxcblx0bm9Nb3JlTGlua3M6ICfmsqHmnInpnIDopoHmtojmrafkuYnnmoTpk77mjqXkuobjgIInLFxuXHRwZW5kaW5nRWRpdENvdW50ZXI6ICflt7Lkv53lrZgkMeS4qu+8jOW3sue8lui+kSQy5LiqJyxcblx0cGVuZGluZ0VkaXRCb3g6ICdEaXNhbUFzc2lzdOato+WcqOWCqOWtmOaCqOeahOe8lui+ke+8iCQx77yJ44CCJyxcblx0cGVuZGluZ0VkaXRCb3hUaW1lRXN0aW1hdGlvbjogJyQx77yb5Ymp5L2Z5pe26Ze077yaJDInLFxuXHRwZW5kaW5nRWRpdEJveExpbWl0ZWQ6XG5cdFx0J+WcqOaJgOacieabtOaUueS/neWtmOWJje+8jOivt+S4jeimgeWFs+mXremhtemdou+8m+S9oOWPr+S7peWcqOWPpuS4gOS4qumhtemdoue8lui+keaxgumXu+eZvuenke+8jOS9huaYr+ivt+WLv+WQjOaXtuS9v+eUqOWkmuS4qkRpc2FtQXNzaXN044CCJyxcblx0ZXJyb3I6ICfplJnor6/vvJokMScsXG5cdGZldGNoUmVkaXJlY3RzRXJyb3I6ICfojrflj5bph43lrprlkJHlpLHotKXvvJpcIiQxXCIuJyxcblx0Z2V0QmFja2xpbmtzRXJyb3I6ICfkuIvovb3lj43lkJHpk77mjqXlpLHotKXvvJpcIiQxXCIuJyxcblx0ZmV0Y2hSaWdodHNFcnJvcjogJ+iOt+WPlueUqOaIt+adg+mZkOWksei0pe+8mlwiJDFcIiwnLFxuXHRsb2FkUGFnZUVycm9yOiAn5Yqg6L29JDHlpLHotKXvvJpcIiQyXCIuJyxcblx0c2F2ZVBhZ2VFcnJvcjogJ+S/neWtmOiHsyQx5aSx6LSl77yaXCIkMlwiLicsXG5cdGRpc21pc3NFcnJvcjogJ0Rpc21pc3MnLFxuXHRwZW5kaW5nOiAnRGlzYW1Bc3Npc3TlsJrmnInmnKrlgqjlrZjnmoTnvJbovpHjgILlpoLmrLLlgqjlrZjkuYvvvIzor7fmjInigJzlhbPpl63igJ3jgIInLFxuXHRlZGl0SW5Qcm9ncmVzczogJ0Rpc2FtQXNzaXN05q2j5Zyo6L+b6KGM57yW6L6R44CC6Iul5oKo5bCG5pys5YiG6aG15YWz6Zet77yM5Y+v6IO95Lya5Lin5aSx5oKo55qE57yW6L6R44CCJyxcblx0ZWxsaXBzaXM6ICfigKbigKYnLFxuXHRub3RpZnlDaGFyYWN0ZXI6ICfinJQnLFxuXHRzdW1tYXJ5OiAn5L2/55SoW1tNZWRpYVdpa2k6R2FkZ2V0LURpc2FtQXNzaXN0LmpzfERpc2FtQXNzaXN0XV3muIXnkIZbW1FXOkRBQnzmtojmrafkuYldXemTvuaOpe+8mltbJDFdXe+8iCQy77yJ44CCJyxcblx0c3VtbWFyeUNoYW5nZWQ6ICfmlLnpk77mjqXoh7NbWyQxXV0nLFxuXHRzdW1tYXJ5T21pdHRlZDogJ+mTvuaOpeW3sui3s+i/hycsXG5cdHN1bW1hcnlSZW1vdmVkOiAn6ZO+5o6l5bey56e76ZmkJyxcblx0c3VtbWFyeUludGVudGlvbmFsOiAn5Yi75oSP6ZO+5o6l6Iez5raI5q2n5LmJ6aG16Z2iJyxcblx0c3VtbWFyeUhlbHBOZWVkZWQ6ICfpnIDopoHluK7liqknLFxuXHRzdW1tYXJ5U2VwYXJhdG9yOiAnOyAnLFxuXHRyZWRpcmVjdFN1bW1hcnk6ICfkvb/nlKhbW01lZGlhV2lraTpHYWRnZXQtRGlzYW1Bc3Npc3QuanN8RGlzYW1Bc3Npc3RdXeWIm+W7uuebruagh+S4ultbJDFdXeeahOmHjeWumuWQkeOAgicsXG59O1xuXG5leHBvcnQge21lc3NhZ2VzfTtcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuaW1wb3J0IHtXR19BQ1RJT059IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7Y2ZnfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQge21lc3NhZ2VzfSBmcm9tICcuL21lc3NhZ2VzJztcblxubGV0IHN0YXJ0TGluaztcbmxldCB1aTtcbmxldCBsaW5rcztcbmxldCBwYWdlQ2hhbmdlcztcbmxldCBjdXJyZW50UGFnZVRpdGxlO1xubGV0IGN1cnJlbnRQYWdlUGFyYW1ldGVycztcbmxldCBjdXJyZW50TGluaztcbmxldCBwb3NzaWJsZUJhY2tsaW5rRGVzdGluYXRpb25zO1xubGV0IGZvcmNlU2FtZVBhZ2UgPSBmYWxzZTtcbmxldCBydW5uaW5nID0gZmFsc2U7XG5sZXQgY2hvb3NpbmcgPSBmYWxzZTtcbmxldCBjYW5NYXJrSW50ZW50aW9uYWxMaW5rcyA9IGZhbHNlO1xubGV0IGRpc3BsYXllZFBhZ2VzID0ge307XG5sZXQgZWRpdENvdW50ID0gMDtcbmxldCBlZGl0TGltaXQ7XG5jb25zdCBwZW5kaW5nU2F2ZXMgPSBbXTtcbmxldCBwZW5kaW5nRWRpdEJveDtcbmxldCBwZW5kaW5nRWRpdEJveFRleHQ7XG5sZXQgbGFzdEVkaXRNaWxsaXMgPSAwO1xubGV0IHJ1bm5pbmdTYXZlcyA9IGZhbHNlO1xuXG4vKiBFbnRyeSBwb2ludC4gQ2hlY2sgd2hldGhlciB3ZSBhcmUgaW4gYSBkaXNhbWJpZ3VhdGlvbiBwYWdlLiBJZiBzbywgYWRkIGEgbGluayB0byBzdGFydCB0aGUgdG9vbCAqL1xuZXhwb3J0IGNvbnN0IGluc3RhbGwgPSAoKSA9PiB7XG5cdGlmIChXR19BQ1RJT04gIT09ICd2aWV3JyB8fCAhaXNEaXNhbSgpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdCQoKCkgPT4ge1xuXHRcdGNvbnN0IHBvcnRsZXRJZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwLWNhY3Rpb25zJykgPyAncC1jYWN0aW9ucycgOiAncC10Yic7XG5cdFx0Ly8gVGhpcyBpcyBhIFwiIChkaXNhbWJpZ3VhdGlvbilcIiBwYWdlXG5cdFx0aWYgKG5ldyBSZWdFeHAoY2ZnLmRpc2FtUmVnRXhwKS50ZXN0KGdldFRpdGxlKCkpKSB7XG5cdFx0XHRjb25zdCBzdGFydE1haW5MaW5rID0gJChcblx0XHRcdFx0bXcudXRpbC5hZGRQb3J0bGV0TGluayhwb3J0bGV0SWQsICcjJywgbWVzc2FnZXMuc3RhcnRNYWluLCAnY2EtZGlzYW1hc3Npc3QtbWFpbicpXG5cdFx0XHQpLm9uKCdjbGljaycsIHN0YXJ0TWFpbik7XG5cdFx0XHRjb25zdCBzdGFydFNhbWVMaW5rID0gJChcblx0XHRcdFx0bXcudXRpbC5hZGRQb3J0bGV0TGluayhwb3J0bGV0SWQsICcjJywgbWVzc2FnZXMuc3RhcnRTYW1lLCAnY2EtZGlzYW1hc3Npc3Qtc2FtZScpXG5cdFx0XHQpLm9uKCdjbGljaycsIHN0YXJ0U2FtZSk7XG5cdFx0XHRzdGFydExpbmsgPSBzdGFydE1haW5MaW5rLmFkZChzdGFydFNhbWVMaW5rKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3RhcnRMaW5rID0gJChtdy51dGlsLmFkZFBvcnRsZXRMaW5rKHBvcnRsZXRJZCwgJyMnLCBtZXNzYWdlcy5zdGFydCwgJ2NhLWRpc2FtYXNzaXN0LXBhZ2UnKSkub24oXG5cdFx0XHRcdCdjbGljaycsXG5cdFx0XHRcdHN0YXJ0XG5cdFx0XHQpO1xuXHRcdH1cblx0fSk7XG59O1xuXG4vKiBTdGFydCB0aGUgdG9vbC4gRGlzcGxheSB0aGUgVUkgYW5kIGJlZ2luIGxvb2tpbmcgZm9yIGxpbmtzIHRvIGZpeCAqL1xuY29uc3Qgc3RhcnQgPSAoKSA9PiB7XG5cdGlmIChydW5uaW5nKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0cnVubmluZyA9IHRydWU7XG5cdGxpbmtzID0gW107XG5cdHBhZ2VDaGFuZ2VzID0gW107XG5cdGRpc3BsYXllZFBhZ2VzID0ge307XG5cdGVuc3VyZURBQkV4aXN0cygpLnRoZW4oKGNhbk1hcmspID0+IHtcblx0XHRjYW5NYXJrSW50ZW50aW9uYWxMaW5rcyA9IGNhbk1hcms7XG5cdFx0Y3JlYXRlVUkoKTtcblx0XHRhZGRVbmxvYWRDb25maXJtKCk7XG5cdFx0bWFya0Rpc2FtT3B0aW9ucygpO1xuXHRcdGNoZWNrRWRpdExpbWl0KCkudGhlbigoKSA9PiB7XG5cdFx0XHR0b2dnbGVQZW5kaW5nRWRpdEJveChmYWxzZSk7XG5cdFx0XHRkb1BhZ2UoKTtcblx0XHR9KTtcblx0fSk7XG59O1xuXG4vKiBTdGFydCBEaXNhbUFzc2lzdC4gRGlzYW1iaWd1YXRlIGluY29taW5nIGxpbmtzIHRvIHRoZSBjdXJyZW50IHBhZ2UsIHJlZ2FyZGxlc3Mgb2YgdGhlIHRpdGxlLiAqL1xuY29uc3Qgc3RhcnRTYW1lID0gKCkgPT4ge1xuXHRmb3JjZVNhbWVQYWdlID0gdHJ1ZTtcblx0c3RhcnQoKTtcbn07XG5cbi8qIFN0YXJ0IERpc2FtQXNzaXN0LiBJZiB0aGUgcGFnZSB0aXRsZSBlbmRzIHdpdGggXCIgKGRpc2FtYmlndWF0aW9uKVwiLCBkaXNhbWJpZ3VhdGUgbGlua3MgdG8gdGhlIHByaW1hcnkgdG9waWMgYXJ0aWNsZS4gT3RoZXJ3aXNlLCBkaXNhbWJpZ3VhdGUgbGlua3MgdG8gdGhlIGN1cnJlbnQgcGFnZS4gKi9cbmNvbnN0IHN0YXJ0TWFpbiA9ICgpID0+IHtcblx0Zm9yY2VTYW1lUGFnZSA9IGZhbHNlO1xuXHRzdGFydCgpO1xufTtcblxuLyogQ3JlYXRlIGFuZCBzaG93IHRoZSB1c2VyIGludGVyZmFjZS4gKi9cbmNvbnN0IGNyZWF0ZVVJID0gKCkgPT4ge1xuXHRjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblx0dWkgPSB7XG5cdFx0ZGlzcGxheTogJCgnPGRpdj4nKS5hZGRDbGFzcygnZGlzYW1hc3Npc3QtYm94IGRpc2FtYXNzaXN0LW1haW5ib3gnKSxcblx0XHRmaW5pc2hlZE1lc3NhZ2U6ICQoJzxkaXY+JykudGV4dChtZXNzYWdlcy5ub01vcmVMaW5rcykuaGlkZSgpLFxuXHRcdHBhZ2VUaXRsZUxpbmU6ICQoJzxzcGFuPicpLmFkZENsYXNzKCdkaXNhbWFzc2lzdC1wYWdldGl0bGVsaW5lJyksXG5cdFx0cGVuZGluZ0VkaXRDb3VudGVyOiAkKCc8ZGl2PicpLmFkZENsYXNzKCdkaXNhbWFzc2lzdC1lZGl0Y291bnRlcicpLFxuXHRcdGNvbnRleHQ6ICQoJzxzcGFuPicpLmFkZENsYXNzKCdkaXNhbWFzc2lzdC1jb250ZXh0JyksXG5cdFx0dW5kb0J1dHRvbjogY3JlYXRlQnV0dG9uKG1lc3NhZ2VzLnVuZG8sIHVuZG8pLFxuXHRcdG9taXRCdXR0b246IGNyZWF0ZUJ1dHRvbihtZXNzYWdlcy5vbWl0LCBvbWl0KSxcblx0XHRlbmRCdXR0b246IGNyZWF0ZUJ1dHRvbihtZXNzYWdlcy5jbG9zZSwgc2F2ZUFuZEVuZCksXG5cdFx0cmVmcmVzaEJ1dHRvbjogY3JlYXRlQnV0dG9uKG1lc3NhZ2VzLnJlZnJlc2gsIHJlZnJlc2gpLFxuXHRcdHRpdGxlQXNUZXh0QnV0dG9uOiBjcmVhdGVCdXR0b24obWVzc2FnZXMudGl0bGVBc1RleHQsIGNob29zZVRpdGxlRnJvbVByb21wdCksXG5cdFx0aW50ZW50aW9uYWxMaW5rQnV0dG9uOiBjYW5NYXJrSW50ZW50aW9uYWxMaW5rc1xuXHRcdFx0PyBjcmVhdGVCdXR0b24obWVzc2FnZXMuaW50ZW50aW9uYWxMaW5rLCBjaG9vc2VJbnRlbnRpb25hbExpbmspXG5cdFx0XHQ6ICQoJzxzcGFuPicpLFxuXHRcdGRpc2FtTmVlZGVkQnV0dG9uOiBjZmcuZGlzYW1OZWVkZWRUZXh0ID8gY3JlYXRlQnV0dG9uKG1lc3NhZ2VzLmRpc2FtTmVlZGVkLCBjaG9vc2VEaXNhbU5lZWRlZCkgOiAkKCc8c3Bhbj4nKSxcblx0XHRyZW1vdmVMaW5rQnV0dG9uOiBjcmVhdGVCdXR0b24obWVzc2FnZXMucmVtb3ZlTGluaywgY2hvb3NlTGlua1JlbW92YWwpLFxuXHR9O1xuXHRjb25zdCB0b3AgPSAkKCc8ZGl2PicpXG5cdFx0LmFkZENsYXNzKCdkaXNhbWFzc2lzdC10b3AnKVxuXHRcdC5hcHBlbmQoW3VpLnBlbmRpbmdFZGl0Q291bnRlciwgdWkuZmluaXNoZWRNZXNzYWdlLCB1aS5wYWdlVGl0bGVMaW5lXSk7XG5cdGNvbnN0IGxlZnRCdXR0b25zID0gJCgnPGRpdj4nKVxuXHRcdC5hZGRDbGFzcygnZGlzYW1hc3Npc3QtbGVmdGJ1dHRvbnMnKVxuXHRcdC5hcHBlbmQoW1xuXHRcdFx0dWkudGl0bGVBc1RleHRCdXR0b24sXG5cdFx0XHR1aS5yZW1vdmVMaW5rQnV0dG9uLFxuXHRcdFx0dWkuaW50ZW50aW9uYWxMaW5rQnV0dG9uLFxuXHRcdFx0dWkuZGlzYW1OZWVkZWRCdXR0b24sXG5cdFx0XHR1aS5vbWl0QnV0dG9uLFxuXHRcdF0pO1xuXHRjb25zdCByaWdodEJ1dHRvbnMgPSAkKCc8ZGl2PicpXG5cdFx0LmFkZENsYXNzKCdkaXNhbWFzc2lzdC1yaWdodGJ1dHRvbnMnKVxuXHRcdC5hcHBlbmQoW3VpLnVuZG9CdXR0b24sIHVpLnJlZnJlc2hCdXR0b24sIHVpLmVuZEJ1dHRvbl0pO1xuXHRjb25zdCBhbGxCdXR0b25zID0gJCgnPGRpdj4nKS5hZGRDbGFzcygnZGlzYW1hc3Npc3QtYWxsYnV0dG9ucycpLmFwcGVuZChbbGVmdEJ1dHRvbnMsIHJpZ2h0QnV0dG9uc10pO1xuXHR1aS5kaXNwbGF5LmFwcGVuZChbdG9wLCB1aS5jb250ZXh0LCBhbGxCdXR0b25zXSk7XG5cdHVwZGF0ZUVkaXRDb3VudGVyKCk7XG5cdHRvZ2dsZUFjdGlvbkJ1dHRvbnMoZmFsc2UpO1xuXHQvLyBJbnNlcnQgdGhlIFVJIGluIHRoZSBwYWdlXG5cdCRib2R5LmZpbmQoJyNtdy1jb250ZW50LXRleHQnKS5iZWZvcmUodWkuZGlzcGxheSk7XG5cdHVpLmRpc3BsYXkuaGlkZSgpLmZhZGVJbigpO1xufTtcblxuLyogSWYgdGhlcmUgYXJlIHBlbmRpbmcgY2hhbmdlcywgc2hvdyBhIGNvbmZpcm0gZGlhbG9nIGJlZm9yZSBjbG9zaW5nICovXG5jb25zdCBhZGRVbmxvYWRDb25maXJtID0gKCkgPT4ge1xuXHQkKHdpbmRvdykub24oJ2JlZm9yZXVubG9hZCcsICgpID0+IHtcblx0XHRpZiAocnVubmluZyAmJiBjaGVja0FjdHVhbENoYW5nZXMoKSkge1xuXHRcdFx0cmV0dXJuIG1lc3NhZ2VzLnBlbmRpbmc7XG5cdFx0fSBlbHNlIGlmIChlZGl0Q291bnQgIT09IDApIHtcblx0XHRcdHJldHVybiBtZXNzYWdlcy5lZGl0SW5Qcm9ncmVzcztcblx0XHR9XG5cdH0pO1xufTtcblxuLyogTWFyayB0aGUgZGlzYW1iaWd1YXRpb24gb3B0aW9ucyBhcyBzdWNoICovXG5jb25zdCBtYXJrRGlzYW1PcHRpb25zID0gKCkgPT4ge1xuXHRjb25zdCBvcHRpb25QYWdlVGl0bGVzID0gW107XG5cdGNvbnN0IG9wdGlvbk1hcmtlcnMgPSBbXTtcblx0Z2V0RGlzYW1PcHRpb25zKCkuZWFjaCgoX2luZGV4LCBlbGVtZW50KSA9PiB7XG5cdFx0Y29uc3QgbGluayA9ICQoZWxlbWVudCk7XG5cdFx0Y29uc3QgdGl0bGUgPSBleHRyYWN0UGFnZU5hbWUobGluayk7XG5cdFx0Y29uc3Qgb3B0aW9uTWFya2VyID0gJCgnPGE+Jylcblx0XHRcdC5hdHRyKCdocmVmJywgJyMnKVxuXHRcdFx0LmFkZENsYXNzKCdkaXNhbWFzc2lzdC1vcHRpb25tYXJrZXInKVxuXHRcdFx0LnRleHQobWVzc2FnZXMub3B0aW9uTWFya2VyKVxuXHRcdFx0Lm9uKCdjbGljaycsIChldikgPT4ge1xuXHRcdFx0XHRldi5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRjaG9vc2VSZXBsYWNlbWVudCh0aXRsZSk7XG5cdFx0XHR9KTtcblx0XHRsaW5rLmFmdGVyKG9wdGlvbk1hcmtlcik7XG5cdFx0b3B0aW9uTWFya2Vyc1tvcHRpb25NYXJrZXJzLmxlbmd0aF0gPSBvcHRpb25NYXJrZXI7XG5cdFx0b3B0aW9uUGFnZVRpdGxlc1tvcHRpb25QYWdlVGl0bGVzLmxlbmd0aF0gPSB0aXRsZTtcblx0fSk7XG5cdC8vIE5vdyBjaGVjayB0aGUgZGlzYW1iaWd1YXRpb24gb3B0aW9ucyBhbmQgZGlzcGxheSBhIGRpZmZlcmVudCBtZXNzYWdlIGZvciB0aG9zZSB0aGF0IGFyZVxuXHQvLyBhY3R1YWxseSB0aGUgc2FtZSBhcyB0aGUgdGFyZ2V0IHBhZ2Ugd2hlcmUgdGhlIGxpbmtzIGdvLCBhcyBjaG9vc2luZyB0aG9zZSBvcHRpb25zIGRvZXNuJ3QgcmVhbGx5XG5cdC8vIGFjY29tcGxpc2ggYW55dGhpbmcgKGV4Y2VwdCBieXBhc3NpbmcgcmVkaXJlY3RzLCB3aGljaCBtaWdodCBiZSB1c2VmdWwgaW4gc29tZSBjYXNlcylcblx0Y29uc3QgdGFyZ2V0UGFnZSA9IGdldFRhcmdldFBhZ2UoKTtcblx0ZmV0Y2hSZWRpcmVjdHMoWy4uLm9wdGlvblBhZ2VUaXRsZXMsIC4uLnRhcmdldFBhZ2VdKVxuXHRcdC5kb25lKChyZWRpcmVjdHMpID0+IHtcblx0XHRcdGNvbnN0IGVuZFRhcmdldFBhZ2UgPSByZXNvbHZlUmVkaXJlY3QodGFyZ2V0UGFnZSwgcmVkaXJlY3RzKTtcblx0XHRcdGZvciAoY29uc3QgW2lpLCBvcHRpb25QYWdlVGl0bGVdIG9mIG9wdGlvblBhZ2VUaXRsZXMuZW50cmllcygpKSB7XG5cdFx0XHRcdGNvbnN0IGVuZE9wdGlvblRpdGxlID0gcmVzb2x2ZVJlZGlyZWN0KG9wdGlvblBhZ2VUaXRsZSwgcmVkaXJlY3RzKTtcblx0XHRcdFx0aWYgKGlzU2FtZVBhZ2Uob3B0aW9uUGFnZVRpdGxlLCB0YXJnZXRQYWdlKSkge1xuXHRcdFx0XHRcdG9wdGlvbk1hcmtlcnNbaWldLnRleHQobWVzc2FnZXMudGFyZ2V0T3B0aW9uTWFya2VyKS5hZGRDbGFzcygnZGlzYW1hc3Npc3QtY3Vycm9wdGlvbm1hcmtlcicpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGlzU2FtZVBhZ2UoZW5kT3B0aW9uVGl0bGUsIGVuZFRhcmdldFBhZ2UpKSB7XG5cdFx0XHRcdFx0b3B0aW9uTWFya2Vyc1tpaV0udGV4dChtZXNzYWdlcy5yZWRpcmVjdE9wdGlvbk1hcmtlcikuYWRkQ2xhc3MoJ2Rpc2FtYXNzaXN0LWN1cnJvcHRpb25tYXJrZXInKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pXG5cdFx0LmZhaWwoZXJyb3IpO1xufTtcblxuLyogQ2hlY2sgd2hldGhlciBpbnRlbnRpb25hbCBsaW5rcyB0byBkaXNhbWJpZ3VhdGlvbiBwYWdlcyBjYW4gYmUgZXhwbGljaXRseSBtYXJrZWQvKiAqIGFzIHN1Y2ggaW4gdGhpcyB3aWtpLiBJZiBzbywgZW5zdXJlIHRoYXQgYSBcIkZvbyAoZGlzYW1iaWd1YXRpb24pXCIgcGFnZSBleGlzdHMuLyogKiBSZXR1cm5zIGEgalF1ZXJ5IHByb21pc2UgKi9cbmNvbnN0IGVuc3VyZURBQkV4aXN0cyA9ICgpID0+IHtcblx0Y29uc3QgZGVmZXJyZWQgPSBuZXcgJC5EZWZlcnJlZCgpO1xuXHRjb25zdCB0aXRsZSA9IGdldFRpdGxlKCk7XG5cdC8vIFRoYXQgY29uY2VwdCBkb2Vzbid0IGV4aXN0IGluIHRoaXMgd2lraS5cblx0aWYgKCFjZmcuaW50ZW50aW9uYWxMaW5rT3B0aW9uKSB7XG5cdFx0ZGVmZXJyZWQucmVzb2x2ZShmYWxzZSk7XG5cdFx0Ly8gXCJGb28gKGRpc2FtYmlndWF0aW9uKVwiIGV4aXN0czogaXQncyB0aGUgY3VycmVudCBwYWdlLlxuXHR9IGVsc2UgaWYgKG5ldyBSZWdFeHAoY2ZnLmRpc2FtUmVnRXhwKS5leGVjKHRpdGxlKSkge1xuXHRcdGRlZmVycmVkLnJlc29sdmUodHJ1ZSk7XG5cdH0gZWxzZSB7XG5cdFx0Y29uc3QgZGlzYW1UaXRsZSA9IGNmZy5kaXNhbUZvcm1hdC5yZXBsYWNlKCckMScsIHRpdGxlKTtcblx0XHRsb2FkUGFnZShkaXNhbVRpdGxlKVxuXHRcdFx0LmRvbmUoKHBhZ2UpID0+IHtcblx0XHRcdFx0Ly8gXCJGb28gKGRpc2FtYmlndWF0aW9uKVwiIGRvZXNuJ3QgZXhpc3QuXG5cdFx0XHRcdGlmIChwYWdlLm1pc3NpbmcpIHtcblx0XHRcdFx0XHQvLyBXZSB0cnkgdG8gY3JlYXRlIGl0XG5cdFx0XHRcdFx0cGFnZS5jb250ZW50ID0gY2ZnLnJlZGlyZWN0VG9EaXNhbS5yZXBsYWNlKCckMScsIHRpdGxlKTtcblx0XHRcdFx0XHRjb25zdCBzdW1tYXJ5ID0gbWVzc2FnZXMucmVkaXJlY3RTdW1tYXJ5LnJlcGxhY2UoJyQxJywgdGl0bGUpO1xuXHRcdFx0XHRcdHNhdmVQYWdlKGRpc2FtVGl0bGUsIHBhZ2UsIHN1bW1hcnksIGZhbHNlLCB0cnVlKVxuXHRcdFx0XHRcdFx0LmRvbmUoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKHRydWUpO1xuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdC5mYWlsKChkZXNjcmlwdGlvbikgPT4ge1xuXHRcdFx0XHRcdFx0XHRlcnJvcihkZXNjcmlwdGlvbik7XG5cdFx0XHRcdFx0XHRcdGRlZmVycmVkLnJlc29sdmUoZmFsc2UpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0Ly8gSXQgZG9lcyBleGlzdFxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGRlZmVycmVkLnJlc29sdmUodHJ1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0XHQuZmFpbCgoZGVzY3JpcHRpb24pID0+IHtcblx0XHRcdFx0ZXJyb3IoZGVzY3JpcHRpb24pO1xuXHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKGZhbHNlKTtcblx0XHRcdH0pO1xuXHR9XG5cdHJldHVybiBkZWZlcnJlZC5wcm9taXNlKCk7XG59O1xuXG4vKiBDaGVjayB3aGV0aGVyIHRoZSBlZGl0IGNvb2xkb3duIGFwcGxpZXMgYW5kIHNldHMgZWRpdExpbWl0IGFjY29yZGluZ2x5Li8qICogUmV0dXJucyBhIGpRdWVyeSBwcm9taXNlICovXG5jb25zdCBjaGVja0VkaXRMaW1pdCA9ICgpID0+IHtcblx0Y29uc3QgZGVmZXJyZWQgPSBuZXcgJC5EZWZlcnJlZCgpO1xuXHRpZiAoY2ZnLmVkaXRDb29sZG93biA8PSAwKSB7XG5cdFx0ZWRpdExpbWl0ID0gZmFsc2U7XG5cdFx0ZGVmZXJyZWQucmVzb2x2ZSgpO1xuXHR9IGVsc2Uge1xuXHRcdGZldGNoUmlnaHRzKClcblx0XHRcdC5kb25lKChyaWdodHMpID0+IHtcblx0XHRcdFx0ZWRpdExpbWl0ID0gIXJpZ2h0cy5pbmNsdWRlcygnYm90Jyk7XG5cdFx0XHR9KVxuXHRcdFx0LmZhaWwoKGRlc2NyaXB0aW9uKSA9PiB7XG5cdFx0XHRcdGVycm9yKGRlc2NyaXB0aW9uKTtcblx0XHRcdFx0ZWRpdExpbWl0ID0gdHJ1ZTtcblx0XHRcdH0pXG5cdFx0XHQuYWx3YXlzKCgpID0+IHtcblx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZSgpO1xuXHRcdFx0fSk7XG5cdH1cblx0cmV0dXJuIGRlZmVycmVkLnByb21pc2UoKTtcbn07XG5cbi8qIEZpbmQgYW5kIGFzayB0aGUgdXNlciB0byBmaXggYWxsIHRoZSBpbmNvbWluZyBsaW5rcyB0byB0aGUgZGlzYW1iaWd1YXRpb24gKFwidGFyZ2V0XCIpLyogKiBwYWdlIGZyb20gYSBzaW5nbGUgXCJvcmlnaW5cIiBwYWdlICovXG5jb25zdCBkb1BhZ2UgPSAoKSA9PiB7XG5cdGlmIChwYWdlQ2hhbmdlcy5sZW5ndGggPiBjZmcuaGlzdG9yeVNpemUpIHtcblx0XHRhcHBseUNoYW5nZShwYWdlQ2hhbmdlcy5zaGlmdCgpKTtcblx0fVxuXHRpZiAobGlua3MubGVuZ3RoKSB7XG5cdFx0Y3VycmVudFBhZ2VUaXRsZSA9IGxpbmtzLnNoaWZ0KCk7XG5cdFx0ZGlzcGxheWVkUGFnZXNbY3VycmVudFBhZ2VUaXRsZV0gPSB0cnVlO1xuXHRcdHRvZ2dsZUFjdGlvbkJ1dHRvbnMoZmFsc2UpO1xuXHRcdGxvYWRQYWdlKGN1cnJlbnRQYWdlVGl0bGUpXG5cdFx0XHQuZG9uZSgoZGF0YSkgPT4ge1xuXHRcdFx0XHRjdXJyZW50UGFnZVBhcmFtZXRlcnMgPSBkYXRhO1xuXHRcdFx0XHRjdXJyZW50TGluayA9IHVuZGVmaW5lZDtcblx0XHRcdFx0ZG9MaW5rKCk7XG5cdFx0XHR9KVxuXHRcdFx0LmZhaWwoZXJyb3IpO1xuXHR9IGVsc2Uge1xuXHRcdGNvbnN0IHRhcmdldFBhZ2UgPSBnZXRUYXJnZXRQYWdlKCk7XG5cdFx0Z2V0QmFja2xpbmtzKHRhcmdldFBhZ2UpXG5cdFx0XHQuZG9uZSgoYmFja2xpbmtzLCBwYWdlVGl0bGVzKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHBlbmRpbmcgPSB7fTtcblx0XHRcdFx0Zm9yIChjb25zdCBlbCBvZiBwZW5kaW5nU2F2ZXMpIHtcblx0XHRcdFx0XHRwZW5kaW5nW2VsWzBdXSA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0cG9zc2libGVCYWNrbGlua0Rlc3RpbmF0aW9ucyA9IHBhZ2VUaXRsZXMuZmlsdGVyKCh0KSA9PiB7XG5cdFx0XHRcdFx0aWYgKHQgPT09IHRhcmdldFBhZ2UpIHtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gcmVtb3ZlRGlzYW0odCkgIT09IHRhcmdldFBhZ2U7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHQvLyBPbmx5IGluY29taW5nIGxpbmtzIGZyb20gcGFnZXMgd2UgaGF2ZW4ndCBzZWVuIHlldCBhbmQgd2UgYXJlbid0IGN1cnJlbnRseVxuXHRcdFx0XHQvLyBzYXZpbmcgKGRpc3BsYXllZFBhZ2VzIGlzIHJlc2V0IHdoZW4gdGhlIHRvb2wgaXMgY2xvc2VkIGFuZCBvcGVuZWQgYWdhaW4sXG5cdFx0XHRcdC8vIHdoaWxlIHRoZSBsaXN0IG9mIHBlbmRpbmcgY2hhbmdlcyBpc24ndDsgaWYgdGhlIGVkaXQgY29vbGRvd24gaXMgZGlzYWJsZWQsXG5cdFx0XHRcdC8vIGl0IHdpbGwgYmUgZW1wdHkpXG5cdFx0XHRcdGxpbmtzID0gYmFja2xpbmtzLmZpbHRlcigoZWwpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gIWRpc3BsYXllZFBhZ2VzW2VsXSAmJiAhcGVuZGluZ1tlbF07XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRpZiAobGlua3MubGVuZ3RoKSB7XG5cdFx0XHRcdFx0ZG9QYWdlKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dXBkYXRlQ29udGV4dCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdFx0LmZhaWwoZXJyb3IpO1xuXHR9XG59O1xuXG4vKiBGaW5kIGFuZCBhc2sgdGhlIHVzZXIgdG8gZml4IGEgc2luZ2xlIGluY29taW5nIGxpbmsgdG8gdGhlIGRpc2FtYmlndWF0aW9uIChcInRhcmdldFwiKS8qICogcGFnZSAqL1xuY29uc3QgZG9MaW5rID0gKCkgPT4ge1xuXHRjdXJyZW50TGluayA9IGV4dHJhY3RMaW5rVG9QYWdlKFxuXHRcdGN1cnJlbnRQYWdlUGFyYW1ldGVycy5jb250ZW50LFxuXHRcdHBvc3NpYmxlQmFja2xpbmtEZXN0aW5hdGlvbnMsXG5cdFx0Y3VycmVudExpbmsgPyBjdXJyZW50TGluay5lbmQgOiAwXG5cdCk7XG5cdGlmIChjdXJyZW50TGluaykge1xuXHRcdHVwZGF0ZUNvbnRleHQoKTtcblx0fSBlbHNlIHtcblx0XHRkb1BhZ2UoKTtcblx0fVxufTtcblxuLyogUmVwbGFjZSB0aGUgdGFyZ2V0IG9mIGEgbGluayB3aXRoIGEgZGlmZmVyZW50IG9uZS8qICogcGFnZVRpdGxlOiBOZXcgbGluayB0YXJnZXQvKiAqIGV4dHJhOiBBZGRpdGlvbmFsIHRleHQgYWZ0ZXIgdGhlIGxpbmsgKG9wdGlvbmFsKS8qICogc3VtbWFyeTogQ2hhbmdlIHN1bW1hcnkgKG9wdGlvbmFsKSAqL1xuY29uc3QgY2hvb3NlUmVwbGFjZW1lbnQgPSAocGFnZVRpdGxlLCBleHRyYSwgc3VtbWFyeSkgPT4ge1xuXHRpZiAoY2hvb3NpbmcpIHtcblx0XHRjaG9vc2luZyA9IGZhbHNlO1xuXHRcdGlmICghc3VtbWFyeSkge1xuXHRcdFx0c3VtbWFyeSA9IHBhZ2VUaXRsZSA/IG1lc3NhZ2VzLnN1bW1hcnlDaGFuZ2VkLnJlcGxhY2UoJyQxJywgcGFnZVRpdGxlKSA6IG1lc3NhZ2VzLnN1bW1hcnlPbWl0dGVkO1xuXHRcdH1cblx0XHRhZGRDaGFuZ2UoY3VycmVudFBhZ2VUaXRsZSwgY3VycmVudFBhZ2VQYXJhbWV0ZXJzLCBjdXJyZW50UGFnZVBhcmFtZXRlcnMuY29udGVudCwgY3VycmVudExpbmssIHN1bW1hcnkpO1xuXHRcdGlmIChwYWdlVGl0bGUgJiYgKHBhZ2VUaXRsZSAhPT0gZ2V0VGFyZ2V0UGFnZSgpIHx8IGV4dHJhKSkge1xuXHRcdFx0Y3VycmVudFBhZ2VQYXJhbWV0ZXJzLmNvbnRlbnQgPSByZXBsYWNlTGluayhcblx0XHRcdFx0Y3VycmVudFBhZ2VQYXJhbWV0ZXJzLmNvbnRlbnQsXG5cdFx0XHRcdHBhZ2VUaXRsZSxcblx0XHRcdFx0Y3VycmVudExpbmssXG5cdFx0XHRcdGV4dHJhIHx8ICcnXG5cdFx0XHQpO1xuXHRcdH1cblx0XHRkb0xpbmsoKTtcblx0fVxufTtcblxuLyogUmVwbGFjZSB0aGUgbGluayB3aXRoIGFuIGV4cGxpY2l0IGxpbmsgdG8gdGhlIGRpc2FtYmlndWF0aW9uIHBhZ2UgKi9cbmNvbnN0IGNob29zZUludGVudGlvbmFsTGluayA9ICgpID0+IHtcblx0Y29uc3QgZGlzYW1UaXRsZSA9IGNmZy5kaXNhbUZvcm1hdC5yZXBsYWNlKCckMScsIGdldFRhcmdldFBhZ2UoKSk7XG5cdGNob29zZVJlcGxhY2VtZW50KGRpc2FtVGl0bGUsICcnLCBtZXNzYWdlcy5zdW1tYXJ5SW50ZW50aW9uYWwpO1xufTtcblxuLyogUHJvbXB0IGZvciBhbiBhbHRlcm5hdGl2ZSBsaW5rIHRhcmdldCBhbmQgdXNlIGl0IGFzIGEgcmVwbGFjZW1lbnQgKi9cbmNvbnN0IGNob29zZVRpdGxlRnJvbVByb21wdCA9ICgpID0+IHtcblx0Y29uc3QgdGl0bGUgPSBwcm9tcHQobWVzc2FnZXMudGl0bGVBc1RleHRQcm9tcHQpO1xuXHRpZiAodGl0bGUgIT09IG51bGwpIHtcblx0XHRjaG9vc2VSZXBsYWNlbWVudCh0aXRsZSk7XG5cdH1cbn07XG5cbi8qIFJlbW92ZSB0aGUgY3VycmVudCBsaW5rLCBsZWF2aW5nIHRoZSB0ZXh0IHVuY2hhbmdlZCAqL1xuY29uc3QgY2hvb3NlTGlua1JlbW92YWwgPSAoKSA9PiB7XG5cdGlmIChjaG9vc2luZykge1xuXHRcdGNvbnN0IHN1bW1hcnkgPSBtZXNzYWdlcy5zdW1tYXJ5UmVtb3ZlZDtcblx0XHRhZGRDaGFuZ2UoY3VycmVudFBhZ2VUaXRsZSwgY3VycmVudFBhZ2VQYXJhbWV0ZXJzLCBjdXJyZW50UGFnZVBhcmFtZXRlcnMuY29udGVudCwgY3VycmVudExpbmssIHN1bW1hcnkpO1xuXHRcdGN1cnJlbnRQYWdlUGFyYW1ldGVycy5jb250ZW50ID0gcmVtb3ZlTGluayhjdXJyZW50UGFnZVBhcmFtZXRlcnMuY29udGVudCwgY3VycmVudExpbmspO1xuXHRcdGRvTGluaygpO1xuXHR9XG59O1xuXG4vKiBBZGQgYSBcImRpc2FtYmlndWF0aW9uIG5lZWRlZFwiIHRlbXBsYXRlIGFmdGVyIHRoZSBsaW5rICovXG5jb25zdCBjaG9vc2VEaXNhbU5lZWRlZCA9ICgpID0+IHtcblx0Y2hvb3NlUmVwbGFjZW1lbnQoY3VycmVudExpbmsudGl0bGUsIGNmZy5kaXNhbU5lZWRlZFRleHQsIG1lc3NhZ2VzLnN1bW1hcnlIZWxwTmVlZGVkKTtcbn07XG5cbi8qIFVuZG8gdGhlIGxhc3QgY2hhbmdlICovXG5jb25zdCB1bmRvID0gKCkgPT4ge1xuXHRpZiAocGFnZUNoYW5nZXMubGVuZ3RoKSB7XG5cdFx0Y29uc3QgbGFzdFBhZ2UgPSBwYWdlQ2hhbmdlcy5hdCgtMSk7XG5cdFx0aWYgKGN1cnJlbnRQYWdlVGl0bGUgIT09IGxhc3RQYWdlLnRpdGxlKSB7XG5cdFx0XHRsaW5rcy51bnNoaWZ0KGN1cnJlbnRQYWdlVGl0bGUpO1xuXHRcdFx0Y3VycmVudFBhZ2VUaXRsZSA9IGxhc3RQYWdlLnRpdGxlO1xuXHRcdH1cblx0XHRjdXJyZW50UGFnZVBhcmFtZXRlcnMgPSBsYXN0UGFnZS5wYWdlO1xuXHRcdGN1cnJlbnRQYWdlUGFyYW1ldGVycy5jb250ZW50ID0gbGFzdFBhZ2UuY29udGVudEJlZm9yZS5wb3AoKTtcblx0XHRjdXJyZW50TGluayA9IGxhc3RQYWdlLmxpbmtzLnBvcCgpO1xuXHRcdGxhc3RQYWdlLnN1bW1hcnkucG9wKCk7XG5cdFx0aWYgKCFsYXN0UGFnZS5jb250ZW50QmVmb3JlLmxlbmd0aCkge1xuXHRcdFx0cGFnZUNoYW5nZXMucG9wKCk7XG5cdFx0fVxuXHRcdHVwZGF0ZUNvbnRleHQoKTtcblx0fVxufTtcblxuLyogT21pdCB0aGUgY3VycmVudCBsaW5rIHdpdGhvdXQgbWFraW5nIGEgY2hhbmdlICovXG5jb25zdCBvbWl0ID0gKCkgPT4ge1xuXHRjaG9vc2VSZXBsYWNlbWVudCgpO1xufTtcblxuLyogU2F2ZSBhbGwgdGhlIHBlbmRpbmcgY2hhbmdlcyBhbmQgcmVzdGFydCB0aGUgdG9vbC4gKi9cbmNvbnN0IHJlZnJlc2ggPSAoKSA9PiB7XG5cdHNhdmVBbmRFbmQoKTtcblx0c3RhcnQoKTtcbn07XG5cbi8qIEVuYWJsZSBvciBkaXNhYmxlIHRoZSBidXR0b25zIHRoYXQgY2FuIHBlcmZvcm0gYWN0aW9ucyBvbiBhIHBhZ2Ugb3IgY2hhbmdlIHRoZSBjdXJyZW50IGxpbmsuLyogKiBlbmFibGVkOiBXaGV0aGVyIHRvIGVuYWJsZSBvciBkaXNhYmxlIHRoZSBidXR0b25zICovXG5jb25zdCB0b2dnbGVBY3Rpb25CdXR0b25zID0gKGVuYWJsZWQpID0+IHtcblx0Y29uc3QgYWZmZWN0ZWRCdXR0b25zID0gW1xuXHRcdHVpLm9taXRCdXR0b24sXG5cdFx0dWkudGl0bGVBc1RleHRCdXR0b24sXG5cdFx0dWkucmVtb3ZlTGlua0J1dHRvbixcblx0XHR1aS5pbnRlbnRpb25hbExpbmtCdXR0b24sXG5cdFx0dWkuZGlzYW1OZWVkZWRCdXR0b24sXG5cdFx0dWkudW5kb0J1dHRvbixcblx0XTtcblx0Zm9yIChjb25zdCBidXR0b24gb2YgYWZmZWN0ZWRCdXR0b25zKSB7XG5cdFx0YnV0dG9uLnByb3AoJ2Rpc2FibGVkJywgIWVuYWJsZWQpO1xuXHR9XG59O1xuXG4vKiBTaG93IG9yIGhpZGUgdGhlICdubyBtb3JlIGxpbmtzJyBtZXNzYWdlLyogKiBzaG93OiBXaGV0aGVyIHRvIHNob3cgb3IgaGlkZSB0aGUgbWVzc2FnZSAqL1xuY29uc3QgdG9nZ2xlRmluaXNoZWRNZXNzYWdlID0gKHNob3cpID0+IHtcblx0dG9nZ2xlQWN0aW9uQnV0dG9ucyghc2hvdyk7XG5cdHVpLnVuZG9CdXR0b24ucHJvcCgnZGlzYWJsZWQnLCAhcGFnZUNoYW5nZXMubGVuZ3RoKTtcblx0dWkuZmluaXNoZWRNZXNzYWdlLnRvZ2dsZShzaG93KTtcblx0dWkucGFnZVRpdGxlTGluZS50b2dnbGUoIXNob3cpO1xuXHR1aS5jb250ZXh0LnRvZ2dsZSghc2hvdyk7XG59O1xuXG5jb25zdCB0b2dnbGVQZW5kaW5nRWRpdEJveCA9IChzaG93KSA9PiB7XG5cdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRpZiAoIXBlbmRpbmdFZGl0Qm94KSB7XG5cdFx0cGVuZGluZ0VkaXRCb3ggPSAkKCc8ZGl2PicpLmFkZENsYXNzKCdkaXNhbWFzc2lzdC1ib3ggZGlzYW1hc3Npc3QtcGVuZGluZ2VkaXRib3gnKTtcblx0XHRwZW5kaW5nRWRpdEJveFRleHQgPSAkKCc8ZGl2PicpO1xuXHRcdHBlbmRpbmdFZGl0Qm94LmFwcGVuZChwZW5kaW5nRWRpdEJveFRleHQpLmhpZGUoKTtcblx0XHRpZiAoZWRpdExpbWl0KSB7XG5cdFx0XHRwZW5kaW5nRWRpdEJveC5hcHBlbmQoJCgnPGRpdj4nKS50ZXh0KG1lc3NhZ2VzLnBlbmRpbmdFZGl0Qm94TGltaXRlZCkuYWRkQ2xhc3MoJ2Rpc2FtYXNzaXN0LXN1YnRpdGxlJykpO1xuXHRcdH1cblx0XHQkYm9keS5maW5kKCcjbXctY29udGVudC10ZXh0JykuYmVmb3JlKHBlbmRpbmdFZGl0Qm94KTtcblx0XHR1cGRhdGVFZGl0Q291bnRlcigpO1xuXHR9XG5cdGlmIChzaG93KSB7XG5cdFx0cGVuZGluZ0VkaXRCb3guZmFkZUluKCk7XG5cdH0gZWxzZSB7XG5cdFx0cGVuZGluZ0VkaXRCb3guZmFkZU91dCgpO1xuXHR9XG59O1xuXG5jb25zdCBub3RpZnlDb21wbGV0aW9uID0gKCkgPT4ge1xuXHRjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblx0Y29uc3Qgb2xkVGl0bGUgPSBkb2N1bWVudC50aXRsZTtcblx0ZG9jdW1lbnQudGl0bGUgPSBtZXNzYWdlcy5ub3RpZnlDaGFyYWN0ZXIgKyBkb2N1bWVudC50aXRsZTtcblx0JGJvZHkub25lKCdtb3VzZW1vdmUnLCAoKSA9PiB7XG5cdFx0ZG9jdW1lbnQudGl0bGUgPSBvbGRUaXRsZTtcblx0fSk7XG59O1xuXG4vKiBVcGRhdGUgdGhlIGRpc3BsYXllZCBpbmZvcm1hdGlvbiB0byBtYXRjaCB0aGUgY3VycmVudCBsaW5rLyogKiBvciBsYWNrIHRoZXJlb2YgKi9cbmNvbnN0IHVwZGF0ZUNvbnRleHQgPSAoKSA9PiB7XG5cdHVwZGF0ZUVkaXRDb3VudGVyKCk7XG5cdGlmIChjdXJyZW50TGluaykge1xuXHRcdHVpLnBhZ2VUaXRsZUxpbmUuaHRtbChcblx0XHRcdG1lc3NhZ2VzLnBhZ2VUaXRsZUxpbmVcblx0XHRcdFx0LnJlcGxhY2UoXG5cdFx0XHRcdFx0JyQxJyxcblx0XHRcdFx0XHRtdy51dGlsLmdldFVybChjdXJyZW50UGFnZVRpdGxlLCB7XG5cdFx0XHRcdFx0XHRyZWRpcmVjdDogJ25vJyxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpXG5cdFx0XHRcdC5yZXBsYWNlKCckMicsIG13Lmh0bWwuZXNjYXBlKGN1cnJlbnRQYWdlVGl0bGUpKVxuXHRcdCk7XG5cdFx0Y29uc3QgY29udGV4dCA9IGV4dHJhY3RDb250ZXh0KGN1cnJlbnRQYWdlUGFyYW1ldGVycy5jb250ZW50LCBjdXJyZW50TGluayk7XG5cdFx0dWkuY29udGV4dFxuXHRcdFx0LmVtcHR5KClcblx0XHRcdC5hcHBlbmQoJCgnPHNwYW4+JykudGV4dChjb250ZXh0WzBdKSlcblx0XHRcdC5hcHBlbmQoJCgnPHNwYW4+JykudGV4dChjb250ZXh0WzFdKS5hZGRDbGFzcygnZGlzYW1hc3Npc3QtaW5jbGluaycpKVxuXHRcdFx0LmFwcGVuZCgkKCc8c3Bhbj4nKS50ZXh0KGNvbnRleHRbMl0pKTtcblx0XHRjb25zdCBudW1MaW5lcyA9IE1hdGguY2VpbCh1aS5jb250ZXh0LmhlaWdodCgpIC8gTnVtYmVyLnBhcnNlRmxvYXQodWkuY29udGV4dC5jc3MoJ2xpbmUtaGVpZ2h0JykpKTtcblx0XHRpZiAobnVtTGluZXMgPCBjZmcubnVtQ29udGV4dExpbmVzKSB7XG5cdFx0XHQvLyBBZGQgY2ZnLm51bUNvbnRleHRMaW5lcyAtIG51bUxpbmVzICsgMSBsaW5lIGJyZWFrcywgc28gdGhhdCB0aGUgdG90YWwgbnVtYmVyXG5cdFx0XHQvLyBvZiBsaW5lcyBpcyBjZmcubnVtQ29udGV4dExpbmVzXG5cdFx0XHR1aS5jb250ZXh0LmFwcGVuZChcblx0XHRcdFx0QXJyYXkuZnJvbSh7XG5cdFx0XHRcdFx0bGVuZ3RoOiBjZmcubnVtQ29udGV4dExpbmVzIC0gbnVtTGluZXMgKyAyLFxuXHRcdFx0XHR9KS5qb2luKCc8YnI+Jylcblx0XHRcdCk7XG5cdFx0fVxuXHRcdHRvZ2dsZUZpbmlzaGVkTWVzc2FnZShmYWxzZSk7XG5cdFx0dWkudW5kb0J1dHRvbi5wcm9wKCdkaXNhYmxlZCcsICFwYWdlQ2hhbmdlcy5sZW5ndGgpO1xuXHRcdHVpLnJlbW92ZUxpbmtCdXR0b24ucHJvcCgnZGlzYWJsZWQnLCBjdXJyZW50UGFnZVBhcmFtZXRlcnMucmVkaXJlY3QpO1xuXHRcdHVpLmludGVudGlvbmFsTGlua0J1dHRvbi5wcm9wKCdkaXNhYmxlZCcsIGN1cnJlbnRQYWdlUGFyYW1ldGVycy5yZWRpcmVjdCk7XG5cdFx0dWkuZGlzYW1OZWVkZWRCdXR0b24ucHJvcCgnZGlzYWJsZWQnLCBjdXJyZW50UGFnZVBhcmFtZXRlcnMucmVkaXJlY3QgfHwgY3VycmVudExpbmsuaGFzRGlzYW1UZW1wbGF0ZSk7XG5cdFx0Y2hvb3NpbmcgPSB0cnVlO1xuXHR9IGVsc2Uge1xuXHRcdHRvZ2dsZUZpbmlzaGVkTWVzc2FnZSh0cnVlKTtcblx0fVxufTtcblxuLyogVXBkYXRlIHRoZSBjb3VudCBvZiBwZW5kaW5nIGNoYW5nZXMgKi9cbmNvbnN0IHVwZGF0ZUVkaXRDb3VudGVyID0gKCkgPT4ge1xuXHRpZiAodWkucGVuZGluZ0VkaXRDb3VudGVyKSB7XG5cdFx0dWkucGVuZGluZ0VkaXRDb3VudGVyLnRleHQoXG5cdFx0XHRtZXNzYWdlcy5wZW5kaW5nRWRpdENvdW50ZXIucmVwbGFjZSgnJDEnLCBlZGl0Q291bnQpLnJlcGxhY2UoJyQyJywgY291bnRBY3R1YWxseUNoYW5nZWRGdWxseUNoZWNrZWRQYWdlcygpKVxuXHRcdCk7XG5cdH1cblx0aWYgKHBlbmRpbmdFZGl0Qm94KSB7XG5cdFx0aWYgKGVkaXRDb3VudCA9PT0gMCAmJiAhcnVubmluZykge1xuXHRcdFx0dG9nZ2xlUGVuZGluZ0VkaXRCb3goZmFsc2UpO1xuXHRcdFx0bm90aWZ5Q29tcGxldGlvbigpO1xuXHRcdH1cblx0XHRsZXQgdGV4dENvbnRlbnQgPSBlZGl0Q291bnQ7XG5cdFx0aWYgKGVkaXRMaW1pdCkge1xuXHRcdFx0dGV4dENvbnRlbnQgPSBtZXNzYWdlcy5wZW5kaW5nRWRpdEJveFRpbWVFc3RpbWF0aW9uXG5cdFx0XHRcdC5yZXBsYWNlKCckMScsIGVkaXRDb3VudClcblx0XHRcdFx0LnJlcGxhY2UoJyQyJywgc2Vjb25kc1RvSEhNTVNTKGNmZy5lZGl0Q29vbGRvd24gKiBlZGl0Q291bnQpKTtcblx0XHR9XG5cdFx0cGVuZGluZ0VkaXRCb3hUZXh0LnRleHQobWVzc2FnZXMucGVuZGluZ0VkaXRCb3gucmVwbGFjZSgnJDEnLCB0ZXh0Q29udGVudCkpO1xuXHR9XG59O1xuXG4vKiBBcHBseSB0aGUgY2hhbmdlcyBtYWRlIHRvIGFuIFwib3JpZ2luXCIgcGFnZS8qICogcGFnZUNoYW5nZTogQ2hhbmdlIHRoYXQgd2lsbCBiZSBzYXZlZCAqL1xuY29uc3QgYXBwbHlDaGFuZ2UgPSAocGFnZUNoYW5nZSkgPT4ge1xuXHRpZiAocGFnZUNoYW5nZS5wYWdlLmNvbnRlbnQgIT09IHBhZ2VDaGFuZ2UuY29udGVudEJlZm9yZVswXSkge1xuXHRcdGVkaXRDb3VudCsrO1xuXHRcdGNvbnN0IGNoYW5nZVN1bW1hcmllcyA9IHBhZ2VDaGFuZ2Uuc3VtbWFyeS5qb2luKG1lc3NhZ2VzLnN1bW1hcnlTZXBhcmF0b3IpO1xuXHRcdGNvbnN0IHN1bW1hcnkgPSBtZXNzYWdlcy5zdW1tYXJ5LnJlcGxhY2UoJyQxJywgZ2V0VGFyZ2V0UGFnZSgpKS5yZXBsYWNlKCckMicsIGNoYW5nZVN1bW1hcmllcyk7XG5cdFx0Y29uc3Qgc2F2ZSA9IGVkaXRMaW1pdCA/IHNhdmVXaXRoQ29vbGRvd24gOiBzYXZlUGFnZTtcblx0XHRzYXZlKHBhZ2VDaGFuZ2UudGl0bGUsIHBhZ2VDaGFuZ2UucGFnZSwgc3VtbWFyeSwgdHJ1ZSwgdHJ1ZSlcblx0XHRcdC5hbHdheXMoKCkgPT4ge1xuXHRcdFx0XHRpZiAoZWRpdENvdW50ID4gMCkge1xuXHRcdFx0XHRcdGVkaXRDb3VudC0tO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHVwZGF0ZUVkaXRDb3VudGVyKCk7XG5cdFx0XHR9KVxuXHRcdFx0LmZhaWwoZXJyb3IpO1xuXHRcdHVwZGF0ZUVkaXRDb3VudGVyKCk7XG5cdH1cbn07XG5cbi8qIFNhdmUgYWxsIHRoZSBwZW5kaW5nIGNoYW5nZXMgKi9cbmNvbnN0IGFwcGx5QWxsQ2hhbmdlcyA9ICgpID0+IHtcblx0Zm9yIChjb25zdCBwYWdlQ2hhbmdlIG9mIHBhZ2VDaGFuZ2VzKSB7XG5cdFx0YXBwbHlDaGFuZ2UocGFnZUNoYW5nZSk7XG5cdH1cblx0cGFnZUNoYW5nZXMgPSBbXTtcbn07XG5cbi8qIFJlY29yZCBhIG5ldyBwZW5kaW5nIGNoYW5nZS8qICogcGFnZVRpdGxlOiBUaXRsZSBvZiB0aGUgcGFnZS8qICogcGFnZTogQ29udGVudCBvZiB0aGUgcGFnZS8qICogb2xkQ29udGVudDogQ29udGVudCBvZiB0aGUgcGFnZSBiZWZvcmUgdGhlIGNoYW5nZS8qICogbGluazogTGluayB0aGF0IGhhcyBiZWVuIGNoYW5nZWQvKiAqIHN1bW1hcnk6IENoYW5nZSBzdW1tYXJ5ICovXG5jb25zdCBhZGRDaGFuZ2UgPSAocGFnZVRpdGxlLCBwYWdlLCBvbGRDb250ZW50LCBsaW5rLCBzdW1tYXJ5KSA9PiB7XG5cdGlmICghcGFnZUNoYW5nZXMubGVuZ3RoIHx8IHBhZ2VDaGFuZ2VzLmF0KC0xKS50aXRsZSAhPT0gcGFnZVRpdGxlKSB7XG5cdFx0cGFnZUNoYW5nZXNbcGFnZUNoYW5nZXMubGVuZ3RoXSA9IHtcblx0XHRcdHRpdGxlOiBwYWdlVGl0bGUsXG5cdFx0XHRwYWdlLFxuXHRcdFx0Y29udGVudEJlZm9yZTogW10sXG5cdFx0XHRsaW5rczogW10sXG5cdFx0XHRzdW1tYXJ5OiBbXSxcblx0XHR9O1xuXHR9XG5cdGNvbnN0IGxhc3RQYWdlQ2hhbmdlID0gcGFnZUNoYW5nZXMuYXQoLTEpO1xuXHRsYXN0UGFnZUNoYW5nZS5jb250ZW50QmVmb3JlW2xhc3RQYWdlQ2hhbmdlLmNvbnRlbnRCZWZvcmUubGVuZ3RoXSA9IG9sZENvbnRlbnQ7XG5cdGxhc3RQYWdlQ2hhbmdlLmxpbmtzW2xhc3RQYWdlQ2hhbmdlLmxpbmtzLmxlbmd0aF0gPSBsaW5rO1xuXHRsYXN0UGFnZUNoYW5nZS5zdW1tYXJ5W2xhc3RQYWdlQ2hhbmdlLnN1bW1hcnkubGVuZ3RoXSA9IHN1bW1hcnk7XG59O1xuXG4vKiBDaGVjayB3aGV0aGVyIGFjdHVhbCBjaGFuZ2VzIGFyZSBzdG9yZWQgaW4gdGhlIGhpc3RvcnkgYXJyYXkgKi9cbmNvbnN0IGNoZWNrQWN0dWFsQ2hhbmdlcyA9ICgpID0+IHtcblx0cmV0dXJuIGNvdW50QWN0dWFsQ2hhbmdlcygpICE9PSAwO1xufTtcblxuLyogUmV0dXJuIHRoZSBudW1iZXIgb2YgZW50cmllcyBpbiB0aGUgaGlzdG9yeSBhcnJheSB0aGF0IHJlcHJlc2VudCBhY3R1YWwgY2hhbmdlcyAqL1xuY29uc3QgY291bnRBY3R1YWxDaGFuZ2VzID0gKCkgPT4ge1xuXHRsZXQgY2hhbmdlQ291bnQgPSAwO1xuXHRmb3IgKGNvbnN0IHBhZ2VDaGFuZ2Ugb2YgcGFnZUNoYW5nZXMpIHtcblx0XHRpZiAocGFnZUNoYW5nZS5wYWdlLmNvbnRlbnQgIT09IHBhZ2VDaGFuZ2UuY29udGVudEJlZm9yZVswXSkge1xuXHRcdFx0Y2hhbmdlQ291bnQrKztcblx0XHR9XG5cdH1cblx0cmV0dXJuIGNoYW5nZUNvdW50O1xufTtcblxuLyogUmV0dXJuIHRoZSBudW1iZXIgb2YgY2hhbmdlZCBwYWdlcyBpbiB0aGUgaGlzdG9yeSBhcnJheSwgaWdub3JpbmcgdGhlIGxhc3QgZW50cnkvKiAqIGlmIHdlIGFyZW4ndCBkb25lIHdpdGggdGhhdCBwYWdlIHlldCAqL1xuY29uc3QgY291bnRBY3R1YWxseUNoYW5nZWRGdWxseUNoZWNrZWRQYWdlcyA9ICgpID0+IHtcblx0bGV0IGNoYW5nZUNvdW50ID0gY291bnRBY3R1YWxDaGFuZ2VzKCk7XG5cdGlmIChwYWdlQ2hhbmdlcy5sZW5ndGgpIHtcblx0XHRjb25zdCBsYXN0Q2hhbmdlID0gcGFnZUNoYW5nZXMuYXQoLTEpO1xuXHRcdGlmIChcblx0XHRcdGxhc3RDaGFuZ2UudGl0bGUgPT09IGN1cnJlbnRQYWdlVGl0bGUgJiZcblx0XHRcdGN1cnJlbnRMaW5rICYmXG5cdFx0XHRsYXN0Q2hhbmdlLnBhZ2UuY29udGVudCAhPT0gbGFzdENoYW5nZS5jb250ZW50QmVmb3JlWzBdXG5cdFx0KSB7XG5cdFx0XHRjaGFuZ2VDb3VudC0tO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gY2hhbmdlQ291bnQ7XG59O1xuXG4vKiBGaW5kIHRoZSBsaW5rcyB0byBkaXNhbWJpZ3VhdGlvbiBvcHRpb25zIGluIGEgZGlzYW1iaWd1YXRpb24gcGFnZSAqL1xuY29uc3QgZ2V0RGlzYW1PcHRpb25zID0gKCkgPT4ge1xuXHRjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblx0cmV0dXJuICRib2R5LmZpbmQoJyNtdy1jb250ZW50LXRleHQgYScpLmZpbHRlcigoX2luZGV4LCBlbGVtZW50KSA9PiB7XG5cdFx0cmV0dXJuICEhZXh0cmFjdFBhZ2VOYW1lKCQoZWxlbWVudCkpO1xuXHR9KTtcbn07XG5cbi8qIFNhdmUgYWxsIHRoZSBwZW5kaW5nIGNoYW5nZXMgYW5kIGNsb3NlIHRoZSB0b29sICovXG5jb25zdCBzYXZlQW5kRW5kID0gKCkgPT4ge1xuXHRhcHBseUFsbENoYW5nZXMoKTtcblx0ZW5kKCk7XG59O1xuXG4vKiBDbG9zZSB0aGUgdG9vbCAqL1xuY29uc3QgZW5kID0gKCkgPT4ge1xuXHRjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblx0Y29uc3QgY3VycmVudFRvb2xVSSA9IHVpLmRpc3BsYXk7XG5cdGNob29zaW5nID0gZmFsc2U7XG5cdHJ1bm5pbmcgPSBmYWxzZTtcblx0c3RhcnRMaW5rLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xuXHQkYm9keS5maW5kKCcuZGlzYW1hc3Npc3Qtb3B0aW9ubWFya2VyJykucmVtb3ZlKCk7XG5cdGN1cnJlbnRUb29sVUkuZmFkZU91dCh7XG5cdFx0Y29tcGxldGUoKSB7XG5cdFx0XHRjdXJyZW50VG9vbFVJLnJlbW92ZSgpO1xuXHRcdFx0aWYgKGVkaXRDb3VudCkge1xuXHRcdFx0XHR0b2dnbGVQZW5kaW5nRWRpdEJveCh0cnVlKTtcblx0XHRcdH1cblx0XHR9LFxuXHR9KTtcbn07XG5cbi8qIERpc3BsYXkgYW4gZXJyb3IgbWVzc2FnZSAqL1xuY29uc3QgZXJyb3IgPSAoZXJyb3JEZXNjcmlwdGlvbikgPT4ge1xuXHRjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblx0Y29uc3QgZXJyb3JCb3ggPSAkKCc8ZGl2PicpLmFkZENsYXNzKCdkaXNhbWFzc2lzdC1ib3ggZGlzYW1hc3Npc3QtZXJyb3Jib3gnKTtcblx0ZXJyb3JCb3gudGV4dChtZXNzYWdlcy5lcnJvci5yZXBsYWNlKCckMScsIGVycm9yRGVzY3JpcHRpb24pKTtcblx0ZXJyb3JCb3guYXBwZW5kKFxuXHRcdGNyZWF0ZUJ1dHRvbihtZXNzYWdlcy5kaXNtaXNzRXJyb3IsICgpID0+IHtcblx0XHRcdGVycm9yQm94LmZhZGVPdXQoKTtcblx0XHR9KS5hZGRDbGFzcygnZGlzYW1hc3Npc3QtZXJyb3JidXR0b24nKVxuXHQpO1xuXHRjb25zdCB1aUlzSW5QbGFjZSA9IHVpICYmICQuY29udGFpbnMoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCB1aS5kaXNwbGF5WzBdKTtcblx0Y29uc3QgbmV4dEVsZW1lbnQgPSB1aUlzSW5QbGFjZSA/IHVpLmRpc3BsYXkgOiAkYm9keS5maW5kKCcjbXctY29udGVudC10ZXh0Jyk7XG5cdG5leHRFbGVtZW50LmJlZm9yZShlcnJvckJveCk7XG5cdGVycm9yQm94LmhpZGUoKS5mYWRlSW4oKTtcbn07XG5cbi8qIENoYW5nZSBhIGxpbmsgc28gdGhhdCBpdCBwb2ludHMgdG8gdGhlIHRpdGxlLyogKiB0ZXh0OiBUaGUgd2lraXRleHQgb2YgdGhlIHdob2xlIHBhZ2UvKiAqIHRpdGxlOiBUaGUgbmV3IGRlc3RpbmF0aW9uIG9mIHRoZSBsaW5rLyogKiBsaW5rOiBUaGUgbGluayB0aGF0IHdpbGwgYmUgbW9kaWZpZWQvKiAqIGV4dHJhOiBUZXh0IHRoYXQgd2lsbCBiZSBhZGRlZCBhZnRlciB0aGUgbGluayAob3B0aW9uYWwpICovXG5jb25zdCByZXBsYWNlTGluayA9ICh0ZXh0LCB0aXRsZSwgbGluaywgZXh0cmEpID0+IHtcblx0bGV0IG5ld0NvbnRlbnQ7XG5cdGlzU2FtZVBhZ2UodGl0bGUsIGxpbmsuZGVzY3JpcHRpb24pXG5cdFx0PyAvLyBbW0J8QV1dIHNob3VsZCBiZSByZXBsYWNlZCB3aXRoIFtbQV1dIHJhdGhlciB0aGFuIFtbQXxBXV1cblx0XHRcdChuZXdDb250ZW50ID0gbGluay5kZXNjcmlwdGlvbilcblx0XHQ6IChuZXdDb250ZW50ID0gYCR7dGl0bGV9fCR7bGluay5kZXNjcmlwdGlvbn1gKTtcblx0Y29uc3QgbGlua1N0YXJ0ID0gdGV4dC5zbGljZSgwLCBNYXRoLm1heCgwLCBsaW5rLnN0YXJ0KSk7XG5cdGNvbnN0IGxpbmtFbmQgPSB0ZXh0LnNsaWNlKE1hdGgubWF4KDAsIGxpbmsuZW5kKSk7XG5cdHJldHVybiBgJHtsaW5rU3RhcnR9W1ske25ld0NvbnRlbnR9XV0ke2xpbmsuYWZ0ZXJEZXNjcmlwdGlvbn0ke2V4dHJhIHx8ICcnfSR7bGlua0VuZH1gO1xufTtcblxuLyogUmVtb3ZlIGEgbGluayBmcm9tIHRoZSB0ZXh0LyogKiB0ZXh0OiBUaGUgd2lraXRleHQgb2YgdGhlIHdob2xlIHBhZ2UvKiAqIGxpbms6IFRoZSBsaW5rIHRoYXQgd2lsbCBiZSByZW1vdmVkICovXG5jb25zdCByZW1vdmVMaW5rID0gKHRleHQsIGxpbmspID0+IHtcblx0Y29uc3QgbGlua1N0YXJ0ID0gdGV4dC5zbGljZSgwLCBNYXRoLm1heCgwLCBsaW5rLnN0YXJ0KSk7XG5cdGNvbnN0IGxpbmtFbmQgPSB0ZXh0LnNsaWNlKE1hdGgubWF4KDAsIGxpbmsuZW5kKSk7XG5cdHJldHVybiBsaW5rU3RhcnQgKyBsaW5rLmRlc2NyaXB0aW9uICsgbGluay5hZnRlckRlc2NyaXB0aW9uICsgbGlua0VuZDtcbn07XG5cbi8qIEV4dHJhY3QgYSBsaW5rIGZyb20gYSBzdHJpbmcgaW4gd2lraSBmb3JtYXQsLyogKiBzdGFydGluZyBmcm9tIGEgZ2l2ZW4gaW5kZXguIFJldHVybiBhIGxpbmsgaWYgb25lIGNhbiBiZSBmb3VuZCwvKiAqIG90aGVyd2lzZSByZXR1cm4gbnVsbC4gVGhlIFwibGlua1wiIGluY2x1ZGVzIFwiZGlzYW1iaWd1YXRpb24gbmVlZGVkXCIvKiAqIHRlbXBsYXRlcyBpbm1lZGlhdGVseSBmb2xsb3dpbmcgdGhlIGxpbmsgcHJvcGVyLyogKiB0ZXh0OiBUZXh0IGZyb20gd2hpY2ggdGhlIGxpbmsgd2lsbCBiZSBleHRyYWN0ZWQvKiAqIGxhc3RJbmRleDogSW5kZXggZnJvbSB3aGljaCB0aGUgc2VhcmNoIHdpbGwgc3RhcnQgKi9cbmNvbnN0IGV4dHJhY3RMaW5rID0gKHRleHQsIGxhc3RJbmRleCkgPT4ge1xuXHQvLyBGSVhNRTogTm90IGFuIGFjdHVhbCB0aXRsZSByZWdleCAobG90cyBvZiBmYWxzZSBwb3NpdGl2ZXNcblx0Ly8gYW5kIHNvbWUgZmFsc2UgbmVnYXRpdmVzKSwgYnV0IGhvcGVmdWxseSBnb29kIGVub3VnaC5cblx0Y29uc3QgdGl0bGVSZWdleCA9IC9cXFtcXFsoLio/KSg/OlxcfCguKj8pKT9dXS9nO1xuXHQvLyBEaXR0byBmb3IgdGhlIHRlbXBsYXRlIHJlZ2V4LiBEaXNhbWJpZ3VhdGlvbiBsaW5rIHRlbXBsYXRlc1xuXHQvLyBzaG91bGQgYmUgc2ltcGxlIGVub3VnaCBmb3IgdGhpcyBub3QgdG8gbWF0dGVyLCB0aG91Z2guXG5cdGNvbnN0IHRlbXBsYXRlUmVnZXggPSAvXihcXHcqW1xccyEpLC46Oz99XSope3tcXHMqKFtee3x9XSs/KVxccyooPzpcXHxbXntdKj8pP319Lztcblx0dGl0bGVSZWdleC5sYXN0SW5kZXggPSBsYXN0SW5kZXg7XG5cdGNvbnN0IG1hdGNoID0gdGl0bGVSZWdleC5leGVjKHRleHQpO1xuXHRpZiAobWF0Y2ggJiYgbWF0Y2guaW5kZXggIT09IC0xKSB7XG5cdFx0bGV0IHBvc3NpYmx5QW1iaWd1b3VzID0gdHJ1ZTtcblx0XHRsZXQgaGFzRGlzYW1UZW1wbGF0ZSA9IGZhbHNlO1xuXHRcdGxldCBfZW5kID0gbWF0Y2guaW5kZXggKyA0ICsgbWF0Y2hbMV0ubGVuZ3RoICsgKG1hdGNoWzJdID8gMSArIG1hdGNoWzJdLmxlbmd0aCA6IDApO1xuXHRcdGxldCBhZnRlckRlc2NyaXB0aW9uID0gJyc7XG5cdFx0Y29uc3QgcmVzdCA9IHRleHQuc2xpY2UoTWF0aC5tYXgoMCwgX2VuZCkpO1xuXHRcdGNvbnN0IHRlbXBsYXRlTWF0Y2ggPSB0ZW1wbGF0ZVJlZ2V4LmV4ZWMocmVzdCk7XG5cdFx0aWYgKHRlbXBsYXRlTWF0Y2gpIHtcblx0XHRcdGNvbnN0IHRlbXBsYXRlVGl0bGUgPSBnZXRDYW5vbmljYWxUaXRsZSh0ZW1wbGF0ZU1hdGNoWzJdKTtcblx0XHRcdGNvbnN0IHtkaXNhbUxpbmtUZW1wbGF0ZXN9ID0gY2ZnO1xuXHRcdFx0Y29uc3Qge2Rpc2FtTGlua0lnbm9yZVRlbXBsYXRlc30gPSBjZmc7XG5cdFx0XHRpZiAoZGlzYW1MaW5rVGVtcGxhdGVzLmluY2x1ZGVzKHRlbXBsYXRlVGl0bGUpKSB7XG5cdFx0XHRcdF9lbmQgKz0gdGVtcGxhdGVNYXRjaFswXS5sZW5ndGg7XG5cdFx0XHRcdGFmdGVyRGVzY3JpcHRpb24gPSB0ZW1wbGF0ZU1hdGNoWzFdLnJlcGxhY2UoL1xccyQvLCAnJyk7XG5cdFx0XHRcdGhhc0Rpc2FtVGVtcGxhdGUgPSB0cnVlO1xuXHRcdFx0fSBlbHNlIGlmIChkaXNhbUxpbmtJZ25vcmVUZW1wbGF0ZXMuaW5jbHVkZXModGVtcGxhdGVUaXRsZSkpIHtcblx0XHRcdFx0cG9zc2libHlBbWJpZ3VvdXMgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHtcblx0XHRcdHN0YXJ0OiBtYXRjaC5pbmRleCxcblx0XHRcdGVuZDogX2VuZCxcblx0XHRcdHBvc3NpYmx5QW1iaWd1b3VzLFxuXHRcdFx0aGFzRGlzYW1UZW1wbGF0ZSxcblx0XHRcdHRpdGxlOiBtYXRjaFsxXSxcblx0XHRcdGRlc2NyaXB0aW9uOiBtYXRjaFsyXSA/PyBtYXRjaFsxXSxcblx0XHRcdGFmdGVyRGVzY3JpcHRpb24sXG5cdFx0fTtcblx0fVxufTtcblxuLyogRXh0cmFjdCBhIGxpbmsgdG8gb25lIG9mIGEgbnVtYmVyIG9mIGRlc3RpbmF0aW9uIHBhZ2VzIGZyb20gYSBzdHJpbmcvKiAqIChcInRleHRcIikgaW4gd2lraSBmb3JtYXQsIHN0YXJ0aW5nIGZyb20gYSBnaXZlbiBpbmRleCAoXCJsYXN0SW5kZXhcIikuLyogKiBcIkRpc2FtYmlndWF0aW9uIG5lZWRlZFwiIHRlbXBsYXRlcyBhcmUgaW5jbHVkZWQgYXMgcGFydCBvZiB0aGUgbGlua3MuLyogKiB0ZXh0OiBQYWdlIGluIHdpa2kgZm9ybWF0LyogKiBkZXN0aW5hdGlvbnM6IEFycmF5IG9mIHBhZ2UgdGl0bGVzIHRvIGxvb2sgZm9yLyogKiBsYXN0SW5kZXg6IEluZGV4IGZyb20gd2hpY2ggdGhlIHNlYXJjaCB3aWxsIHN0YXJ0ICovXG5jb25zdCBleHRyYWN0TGlua1RvUGFnZSA9ICh0ZXh0LCBkZXN0aW5hdGlvbnMsIGxhc3RJbmRleCkgPT4ge1xuXHRsZXQgbGluaztcblx0bGV0IHRpdGxlO1xuXHRkbyB7XG5cdFx0bGluayA9IGV4dHJhY3RMaW5rKHRleHQsIGxhc3RJbmRleCk7XG5cdFx0aWYgKGxpbmspIHtcblx0XHRcdGxhc3RJbmRleCA9IGxpbmsuZW5kO1xuXHRcdFx0dGl0bGUgPSBnZXRDYW5vbmljYWxUaXRsZShsaW5rLnRpdGxlKTtcblx0XHR9XG5cdH0gd2hpbGUgKGxpbmsgJiYgKCFsaW5rLnBvc3NpYmx5QW1iaWd1b3VzIHx8ICFkZXN0aW5hdGlvbnM/LmluY2x1ZGVzKHRpdGxlKSkpO1xuXHRyZXR1cm4gbGluaztcbn07XG5cbi8qIEZpbmQgdGhlIFwidGFyZ2V0XCIgcGFnZTogZWl0aGVyIHRoZSBvbmUgd2UgYXJlIGluIG9yIHRoZSBcIm1haW5cIiBvbmUgZm91bmQgYnkgZXh0cmFjdGluZy8qICogdGhlIHRpdGxlIGZyb20gXCIuKiAoZGlzYW1iaWd1YXRpb24pXCIgb3Igd2hhdGV2ZXIgdGhlIGFwcHJvcGlhdGUgbG9jYWwgZm9ybWF0IGlzICovXG5jb25zdCBnZXRUYXJnZXRQYWdlID0gKCkgPT4ge1xuXHRjb25zdCB0aXRsZSA9IGdldFRpdGxlKCk7XG5cdHJldHVybiBmb3JjZVNhbWVQYWdlID8gdGl0bGUgOiByZW1vdmVEaXNhbSh0aXRsZSk7XG59O1xuXG4vKiBHZXQgdGhlIHBhZ2UgdGl0bGUsIHdpdGggdGhlIG5hbWVzcGFjZSBwcmVmaXggaWYgYW55LiAqL1xuY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB7XG5cdHJldHVybiBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJykucmVwbGFjZSgvXy9nLCAnICcpO1xufTtcblxuLyogRXh0cmFjdCBhIFwibWFpblwiIHRpdGxlIGZyb20gXCIuKiAoZGlzYW1iaWd1YXRpb24pXCIgb3Igd2hhdGV2ZXIgdGhlIGFwcHJvcGlhdGUgbG9jYWwgZm9ybWF0IGlzICovXG5jb25zdCByZW1vdmVEaXNhbSA9ICh0aXRsZSkgPT4ge1xuXHRjb25zdCBtYXRjaCA9IG5ldyBSZWdFeHAoY2ZnLmRpc2FtUmVnRXhwKS5leGVjKHRpdGxlKTtcblx0cmV0dXJuIG1hdGNoPy5bMV0gPz8gdGl0bGU7XG59O1xuXG4vKiBDaGVjayB3aGV0aGVyIHR3byBwYWdlIHRpdGxlcyBhcmUgdGhlIHNhbWUgKi9cbmNvbnN0IGlzU2FtZVBhZ2UgPSAodGl0bGUxLCB0aXRsZTIpID0+IHtcblx0cmV0dXJuIGdldENhbm9uaWNhbFRpdGxlKHRpdGxlMSkgPT09IGdldENhbm9uaWNhbFRpdGxlKHRpdGxlMik7XG59O1xuXG4vKiBSZXR1cm4gdGhlICdjYW5vbmljYWwgdGl0bGUnIG9mIGEgcGFnZSAqL1xuY29uc3QgZ2V0Q2Fub25pY2FsVGl0bGUgPSAodGl0bGUpID0+IHtcblx0dHJ5IHtcblx0XHQvLyBtdy5UaXRsZSBzZWVtcyB0byBiZSBidWdneSwgYW5kIHNvbWUgdmFsaWQgdGl0bGVzIGFyZSByZWplY3RlZFxuXHRcdC8vIEZJWE1FOiBUaGlzIG1heSBjYXVzZSBmYWxzZSBuZWdhdGl2ZXNcblx0XHR0aXRsZSA9IG5ldyBtdy5UaXRsZSh0aXRsZSkuZ2V0UHJlZml4ZWRUZXh0KCk7XG5cdH0gY2F0Y2gge1xuXHRcdC8qIGVtcHR5ICovXG5cdH1cblx0cmV0dXJuIHRpdGxlO1xufTtcblxuLyogRXh0cmFjdCB0aGUgY29udGV4dCBhcm91bmQgYSBnaXZlbiBsaW5rIGluIGEgdGV4dCBzdHJpbmcgKi9cbmNvbnN0IGV4dHJhY3RDb250ZXh0ID0gKHRleHQsIGxpbmspID0+IHtcblx0Y29uc3QgY29udGV4dFN0YXJ0ID0gbGluay5zdGFydCAtIGNmZy5yYWRpdXM7XG5cdGNvbnN0IGNvbnRleHRFbmQgPSBsaW5rLmVuZCArIGNmZy5yYWRpdXM7XG5cdGxldCBjb250ZXh0UHJldiA9IHRleHQuc2xpY2UoY29udGV4dFN0YXJ0LCBsaW5rLnN0YXJ0KTtcblx0aWYgKGNvbnRleHRTdGFydCA+IDApIHtcblx0XHRjb250ZXh0UHJldiA9IG1lc3NhZ2VzLmVsbGlwc2lzICsgY29udGV4dFByZXY7XG5cdH1cblx0bGV0IGNvbnRleHROZXh0ID0gdGV4dC5zbGljZShsaW5rLmVuZCwgY29udGV4dEVuZCk7XG5cdGlmIChjb250ZXh0RW5kIDwgdGV4dC5sZW5ndGgpIHtcblx0XHRjb250ZXh0TmV4dCArPSBtZXNzYWdlcy5lbGxpcHNpcztcblx0fVxuXHRyZXR1cm4gW2NvbnRleHRQcmV2LCB0ZXh0LnNsaWNlKGxpbmsuc3RhcnQsIGxpbmsuZW5kKSwgY29udGV4dE5leHRdO1xufTtcblxuLyogRXh0cmFjdCB0aGUgcHJlZml4ZWQgcGFnZSBuYW1lIGZyb20gYSBsaW5rICovXG5jb25zdCBleHRyYWN0UGFnZU5hbWUgPSAobGluaykgPT4ge1xuXHRsZXQgcGFnZU5hbWUgPSBleHRyYWN0UGFnZU5hbWVSYXcobGluayk7XG5cdGlmIChwYWdlTmFtZSkge1xuXHRcdGNvbnN0IHNlY3Rpb25Qb3MgPSBwYWdlTmFtZS5pbmRleE9mKCcjJyk7XG5cdFx0bGV0IHNlY3Rpb24gPSAnJztcblx0XHRpZiAoc2VjdGlvblBvcyAhPT0gLTEpIHtcblx0XHRcdHNlY3Rpb24gPSBwYWdlTmFtZS5zbGljZShNYXRoLm1heCgwLCBzZWN0aW9uUG9zKSk7XG5cdFx0XHRwYWdlTmFtZSA9IHBhZ2VOYW1lLnNsaWNlKDAsIE1hdGgubWF4KDAsIHNlY3Rpb25Qb3MpKTtcblx0XHR9XG5cdFx0cmV0dXJuIGdldENhbm9uaWNhbFRpdGxlKHBhZ2VOYW1lKSArIHNlY3Rpb247XG5cdH1cbn07XG5cbi8qIEV4dHJhY3QgdGhlIHBhZ2UgbmFtZSBmcm9tIGEgbGluaywgYXMgaXMgKi9cbmNvbnN0IGV4dHJhY3RQYWdlTmFtZVJhdyA9IChsaW5rKSA9PiB7XG5cdGlmICghbGluay5oYXNDbGFzcygnaW1hZ2UnKSkge1xuXHRcdGNvbnN0IGhyZWYgPSBsaW5rLmF0dHIoJ2hyZWYnKTtcblx0XHRpZiAobGluay5oYXNDbGFzcygnbmV3JykpIHtcblx0XHRcdC8vIFwiUmVkXCIgbGlua1xuXHRcdFx0aWYgKGhyZWYuaW5jbHVkZXMobXcuY29uZmlnLmdldCgnd2dTY3JpcHQnKSkpIHtcblx0XHRcdFx0cmV0dXJuIG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgndGl0bGUnLCBocmVmKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgcmVnZXggPSBtdy5jb25maWcuZ2V0KCd3Z0FydGljbGVQYXRoJykucmVwbGFjZSgnJDEnLCAnKC4qKScpO1xuXHRcdFx0Y29uc3QgcmVnZXhSZXN1bHQgPSBuZXcgUmVnRXhwKGBeJHtyZWdleH0kYCkuZXhlYyhocmVmKTtcblx0XHRcdGlmIChBcnJheS5pc0FycmF5KHJlZ2V4UmVzdWx0KSAmJiByZWdleFJlc3VsdC5sZW5ndGgpIHtcblx0XHRcdFx0cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChyZWdleFJlc3VsdFsxXSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuXG4vKiBDaGVjayB3aGV0aGVyIHRoaXMgaXMgYSBkaXNhbWJpZ3VhdGlvbiBwYWdlICovXG5jb25zdCBpc0Rpc2FtID0gKCkgPT4ge1xuXHRjb25zdCBjYXRlZ29yaWVzID0gbXcuY29uZmlnLmdldCgnd2dDYXRlZ29yaWVzJywgW10pO1xuXHRmb3IgKGNvbnN0IGNhdGVnb3J5IG9mIGNhdGVnb3JpZXMpIHtcblx0XHRjb25zdCB7ZGlzYW1DYXRlZ29yaWVzfSA9IGNmZztcblx0XHRpZiAoZGlzYW1DYXRlZ29yaWVzLmluY2x1ZGVzKGNhdGVnb3J5KSkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IHNlY29uZHNUb0hITU1TUyA9ICh0b3RhbFNlY29uZHMpID0+IHtcblx0bGV0IGhobW1zcyA9ICcnO1xuXHRjb25zdCBob3VycyA9IE1hdGguZmxvb3IodG90YWxTZWNvbmRzIC8gMzYwMCk7XG5cdGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKCh0b3RhbFNlY29uZHMgJSAzNjAwKSAvIDYwKTtcblx0Y29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IoKHRvdGFsU2Vjb25kcyAlIDM2MDApICUgNjApO1xuXHRpZiAoaG91cnMgPj0gMSkge1xuXHRcdGhobW1zcyA9IGAke3BhZChob3VycywgJzAnLCAyKX06YDtcblx0fVxuXHRoaG1tc3MgKz0gYCR7cGFkKG1pbnV0ZXMsICcwJywgMil9OiR7cGFkKHNlY29uZHMsICcwJywgMil9YDtcblx0cmV0dXJuIGhobW1zcztcbn07XG5cbmNvbnN0IHBhZCA9IChzdHIsIHosIHdpZHRoKSA9PiB7XG5cdHN0ciA9IHN0ci50b1N0cmluZygpO1xuXHRpZiAoc3RyLmxlbmd0aCA+PSB3aWR0aCkge1xuXHRcdHJldHVybiBzdHI7XG5cdH1cblx0cmV0dXJuIChcblx0XHRBcnJheS5mcm9tKHtcblx0XHRcdGxlbmd0aDogd2lkdGggLSBzdHIubGVuZ3RoICsgMSxcblx0XHR9KS5qb2luKHopICsgc3RyXG5cdCk7XG59O1xuXG4vKiBDcmVhdGUgYSBuZXcgYnV0dG9uXG4gKiB0ZXh0OiBUZXh0IHRoYXQgd2lsbCBiZSBkaXNwbGF5ZWQgb24gdGhlIGJ1dHRvblxuICogb25DbGljazogRnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZVxuICogYnV0dG9uIGlzIGNsaWNrZWRcbiAqL1xuY29uc3QgY3JlYXRlQnV0dG9uID0gKHRleHQsIG9uQ2xpY2spID0+IHtcblx0Y29uc3QgYnV0dG9uID0gJCgnPGlucHV0PicpLmF0dHIoe1xuXHRcdHR5cGU6ICdidXR0b24nLFxuXHRcdHZhbHVlOiB0ZXh0LFxuXHR9KTtcblx0YnV0dG9uLmFkZENsYXNzKCdkaXNhbWFzc2lzdC1idXR0b24nKS5vbignY2xpY2snLCBvbkNsaWNrKTtcblx0cmV0dXJuIGJ1dHRvbjtcbn07XG5cbi8qIEdpdmVuIGEgcGFnZSB0aXRsZSBhbmQgYW4gYXJyYXkgb2YgcG9zc2libGUgcmVkaXJlY3RzIHtmcm9tLCB0b30gKFwiY2Fub25pY2FsIHRpdGxlc1wiKSwgZmluZCB0aGUgcGFnZS8qICogYXQgdGhlIGVuZCBvZiB0aGUgcmVkaXJlY3QgY2hhaW4sIGlmIHRoZXJlIGlzIG9uZS4gT3RoZXJ3aXNlLCByZXR1cm4gdGhlIHBhZ2UgdGl0bGUgdGhhdCB3YXMgcGFzc2VkICovXG5jb25zdCByZXNvbHZlUmVkaXJlY3QgPSAocGFnZVRpdGxlLCBwb3NzaWJsZVJlZGlyZWN0cykgPT4ge1xuXHRsZXQgYXBwbGllZFJlZGlyZWN0ID0gdHJ1ZTtcblx0Y29uc3QgdmlzaXRlZFBhZ2VzID0ge307XG5cdGxldCBjdXJyZW50UGFnZSA9IGdldENhbm9uaWNhbFRpdGxlKHBhZ2VUaXRsZSk7XG5cdHdoaWxlIChhcHBsaWVkUmVkaXJlY3QpIHtcblx0XHRhcHBsaWVkUmVkaXJlY3QgPSBmYWxzZTtcblx0XHRmb3IgKGNvbnN0IHBvc3NpYmxlUmVkaXJlY3Qgb2YgcG9zc2libGVSZWRpcmVjdHMpIHtcblx0XHRcdGlmIChwb3NzaWJsZVJlZGlyZWN0LmZyb20gPT09IGN1cnJlbnRQYWdlKSB7XG5cdFx0XHRcdGlmICh2aXNpdGVkUGFnZXNbcG9zc2libGVSZWRpcmVjdC50b10pIHtcblx0XHRcdFx0XHQvLyBSZWRpcmVjdCBjaGFpbiBkZXRlY3RlZFxuXHRcdFx0XHRcdHJldHVybiBwYWdlVGl0bGU7XG5cdFx0XHRcdH1cblx0XHRcdFx0dmlzaXRlZFBhZ2VzW2N1cnJlbnRQYWdlXSA9IHRydWU7XG5cdFx0XHRcdGFwcGxpZWRSZWRpcmVjdCA9IHRydWU7XG5cdFx0XHRcdGN1cnJlbnRQYWdlID0gcG9zc2libGVSZWRpcmVjdC50bztcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Ly8gTm8gcmVkaXJlY3QgcnVsZXMgYXBwbGllZCBmb3IgYW4gaXRlcmF0aW9uIG9mIHRoZSBvdXRlciBsb29wOlxuXHQvLyBubyBtb3JlIHJlZGlyZWN0cy4gV2UgYXJlIGRvbmVcblx0cmV0dXJuIGN1cnJlbnRQYWdlO1xufTtcblxuLyogRmV0Y2ggdGhlIGluY29taW5nIGxpbmtzIHRvIGEgcGFnZS4gUmV0dXJucyBhIGpRdWVyeSBwcm9taXNlLyogKiAoc3VjY2VzcyAtIGFycmF5IG9mIHRpdGxlcyBvZiBwYWdlcyB0aGF0IGNvbnRhaW4gbGlua3MgdG8gdGhlIHRhcmdldCBwYWdlIGFuZC8qICogYXJyYXkgb2YgXCJjYW5vbmljYWwgdGl0bGVzXCIgb2YgcG9zc2libGUgZGVzdGluYXRpb25zIG9mIHRoZSBiYWNrbGlua3MgKGVpdGhlci8qICogdGhlIHRhcmdldCBwYWdlIG9yIHJlZGlyZWN0cyB0byB0aGUgdGFyZ2V0IHBhZ2UpLCBmYWlsdXJlIC0gZXJyb3IgZGVzY3JpcHRpb24pLyogKiBwYWdlOiBUYXJnZXQgcGFnZSAqL1xuY29uc3QgZ2V0QmFja2xpbmtzID0gKHBhZ2UpID0+IHtcblx0Y29uc3QgZGVmZXJyZWQgPSBuZXcgJC5EZWZlcnJlZCgpO1xuXHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGxpc3Q6ICdiYWNrbGlua3MnLFxuXHRcdGJsdGl0bGU6IHBhZ2UsXG5cdFx0YmxyZWRpcmVjdDogdHJ1ZSxcblx0XHRibGxpbWl0OiBjZmcuYmFja2xpbmtMaW1pdCxcblx0XHRibG5hbWVzcGFjZTogY2ZnLnRhcmdldE5hbWVzcGFjZXMuam9pbignfCcpLFxuXHR9O1xuXHRhcGkuZ2V0KHBhcmFtcylcblx0XHQuZG9uZSgoe3F1ZXJ5fSkgPT4ge1xuXHRcdFx0Ly8gVGhlcmUgbWlnaHQgYmUgZHVwbGljYXRlIGVudHJpZXMgaW4gc29tZSBjb3JuZXIgY2FzZXMuIFdlIGRvbid0IGNhcmUsXG5cdFx0XHQvLyBzaW5jZSB3ZSBhcmUgZ29pbmcgdG8gY2hlY2sgbGF0ZXIsIGFueXdheVxuXHRcdFx0Y29uc3QgYmFja2xpbmtzID0gW107XG5cdFx0XHRjb25zdCBsaW5rVGl0bGVzID0gW2dldENhbm9uaWNhbFRpdGxlKHBhZ2UpXTtcblx0XHRcdGNvbnN0IGJhY2tsaW5rc1F1ZXJ5ID0gcXVlcnkuYmFja2xpbmtzO1xuXHRcdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mIGJhY2tsaW5rc1F1ZXJ5KSB7XG5cdFx0XHRcdGJhY2tsaW5rc1tiYWNrbGlua3MubGVuZ3RoXSA9IGVsZW1lbnQudGl0bGU7XG5cdFx0XHRcdGlmICghZWxlbWVudC5yZWRpcmxpbmtzKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlua1RpdGxlc1tsaW5rVGl0bGVzLmxlbmd0aF0gPSBlbGVtZW50LnRpdGxlO1xuXHRcdFx0XHRjb25zdCB7cmVkaXJsaW5rc30gPSBlbGVtZW50O1xuXHRcdFx0XHRmb3IgKGNvbnN0IHt0aXRsZX0gb2YgcmVkaXJsaW5rcykge1xuXHRcdFx0XHRcdGJhY2tsaW5rc1tiYWNrbGlua3MubGVuZ3RoXSA9IHRpdGxlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRkZWZlcnJlZC5yZXNvbHZlKGJhY2tsaW5rcywgbGlua1RpdGxlcyk7XG5cdFx0fSlcblx0XHQuZmFpbCgoY29kZSkgPT4ge1xuXHRcdFx0ZGVmZXJyZWQucmVqZWN0KG1lc3NhZ2VzLmdldEJhY2tsaW5rc0Vycm9yLnJlcGxhY2UoJyQxJywgY29kZSkpO1xuXHRcdH0pO1xuXHRyZXR1cm4gZGVmZXJyZWQucHJvbWlzZSgpO1xufTtcblxuLyogRG93bmxvYWQgYSBsaXN0IG9mIHJlZGlyZWN0cyBmb3Igc29tZSBwYWdlcy4gUmV0dXJucyBhIGpRdWVyeSBjYWxsYmFjayAoc3VjY2VzcyAtLyogKiBhcnJheSBvZiByZWRpcmVjdHMgKHtmcm9tLCB0b30pLCBmYWlsdXJlIC0gZXJyb3IgZGVzY3JpcHRpb24gKS8qICogcGFnZVRpdGxlczogQXJyYXkgb2YgcGFnZSB0aXRsZXMgKi9cbmNvbnN0IGZldGNoUmVkaXJlY3RzID0gKHBhZ2VUaXRsZXMpID0+IHtcblx0Y29uc3QgZGVmZXJyZWQgPSBuZXcgJC5EZWZlcnJlZCgpO1xuXHRjb25zdCBjdXJyZW50VGl0bGVzID0gcGFnZVRpdGxlcy5zbGljZSgwLCBjZmcucXVlcnlUaXRsZUxpbWl0KTtcblx0Y29uc3QgcmVzdFRpdGxlcyA9IHBhZ2VUaXRsZXMuc2xpY2UoY2ZnLnF1ZXJ5VGl0bGVMaW1pdCk7XG5cdGNvbnN0IHBhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0dGl0bGVzOiBjdXJyZW50VGl0bGVzLmpvaW4oJ3wnKSxcblx0XHRyZWRpcmVjdHM6IHRydWUsXG5cdH07XG5cdGFwaS5nZXQocGFyYW1zKVxuXHRcdC5kb25lKCh7cXVlcnl9KSA9PiB7XG5cdFx0XHRjb25zdCB0aGVzZVJlZGlyZWN0cyA9IHF1ZXJ5LnJlZGlyZWN0cyA/PyBbXTtcblx0XHRcdGlmIChyZXN0VGl0bGVzLmxlbmd0aCkge1xuXHRcdFx0XHRmZXRjaFJlZGlyZWN0cyhyZXN0VGl0bGVzKVxuXHRcdFx0XHRcdC5kb25lKChyZWRpcmVjdHMpID0+IHtcblx0XHRcdFx0XHRcdGRlZmVycmVkLnJlc29sdmUoWy4uLnRoZXNlUmVkaXJlY3RzLCAuLi5yZWRpcmVjdHNdKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5mYWlsKChkZXNjcmlwdGlvbikgPT4ge1xuXHRcdFx0XHRcdFx0ZGVmZXJyZWQucmVqZWN0KGRlc2NyaXB0aW9uKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGRlZmVycmVkLnJlc29sdmUodGhlc2VSZWRpcmVjdHMpO1xuXHRcdFx0fVxuXHRcdH0pXG5cdFx0LmZhaWwoKGNvZGUpID0+IHtcblx0XHRcdGRlZmVycmVkLnJlamVjdChtZXNzYWdlcy5mZXRjaFJlZGlyZWN0c0Vycm9yLnJlcGxhY2UoJyQxJywgY29kZSkpO1xuXHRcdH0pO1xuXHRyZXR1cm4gZGVmZXJyZWQucHJvbWlzZSgpO1xufTtcblxuLyogRG93bmxvYWQgdGhlIGxpc3Qgb2YgdXNlciByaWdodHMgZm9yIHRoZSBjdXJyZW50IHVzZXIuIFJldHVybnMgYS8qICogalF1ZXJ5IHByb21pc2UgKHN1Y2Nlc3MgLSBhcnJheSBvZiByaWdodCBuYW1lcywgZXJyb3IgLSBlcnJvciBkZXNjcmlwdGlvbikgKi9cbmNvbnN0IGZldGNoUmlnaHRzID0gKCkgPT4ge1xuXHRjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQoKTtcblx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRtZXRhOiAndXNlcmluZm8nLFxuXHRcdHVpcHJvcDogJ3JpZ2h0cycsXG5cdH07XG5cdGFwaS5nZXQocGFyYW1zKVxuXHRcdC5kb25lKCh7cXVlcnl9KSA9PiB7XG5cdFx0XHRkZWZlcnJlZC5yZXNvbHZlKHF1ZXJ5LnVzZXJpbmZvLnJpZ2h0cyk7XG5cdFx0fSlcblx0XHQuZmFpbCgoY29kZSkgPT4ge1xuXHRcdFx0ZGVmZXJyZWQucmVqZWN0KG1lc3NhZ2VzLmZldGNoUmlnaHRzRXJyb3IucmVwbGFjZSgnJDEnLCBjb2RlKSk7XG5cdFx0fSk7XG5cdHJldHVybiBkZWZlcnJlZC5wcm9taXNlKCk7XG59O1xuXG4vKiBMb2FkIHRoZSByYXcgcGFnZSB0ZXh0IGZvciBhIGdpdmVuIHRpdGxlLiBSZXR1cm5zIGEgalF1ZXJ5IHByb21pc2UgKHN1Y2Nlc3MgLSBwYWdlLyogKiBjb250ZW50LCBmYWlsdXJlIC0gZXJyb3IgZGVzY3JpcHRpb24pLyogKiBwYWdlVGl0bGU6IFRpdGxlIG9mIHRoZSBwYWdlICovXG5jb25zdCBsb2FkUGFnZSA9IChwYWdlVGl0bGUpID0+IHtcblx0Y29uc3QgZGVmZXJyZWQgPSBuZXcgJC5EZWZlcnJlZCgpO1xuXHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHR0aXRsZXM6IHBhZ2VUaXRsZSxcblx0XHRwcm9wOiAncmV2aXNpb25zJyxcblx0XHRydnByb3A6ICd0aW1lc3RhbXB8Y29udGVudCcsXG5cdFx0bWV0YTogJ3Rva2VucycsXG5cdFx0dHlwZTogJ2NzcmYnLFxuXHR9O1xuXHRhcGkuZ2V0KHBhcmFtcylcblx0XHQuZG9uZSgoe3F1ZXJ5fSkgPT4ge1xuXHRcdFx0Y29uc3QgW3Jhd1BhZ2VdID0gcXVlcnkucGFnZXM7XG5cdFx0XHRjb25zdCBwYWdlID0ge307XG5cdFx0XHRwYWdlLnJlZGlyZWN0ID0gcmF3UGFnZS5yZWRpcmVjdCAhPT0gdW5kZWZpbmVkO1xuXHRcdFx0cGFnZS5taXNzaW5nID0gcmF3UGFnZS5taXNzaW5nICE9PSB1bmRlZmluZWQ7XG5cdFx0XHRpZiAocmF3UGFnZS5yZXZpc2lvbnMpIHtcblx0XHRcdFx0cGFnZS5jb250ZW50ID0gcmF3UGFnZS5yZXZpc2lvbnNbMF0uY29udGVudDtcblx0XHRcdFx0cGFnZS5iYXNlVGltZVN0YW1wID0gcmF3UGFnZS5yZXZpc2lvbnNbMF0udGltZXN0YW1wO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cGFnZS5jb250ZW50ID0gJyc7XG5cdFx0XHRcdHBhZ2UuYmFzZVRpbWVTdGFtcCA9IHVuZGVmaW5lZDtcblx0XHRcdH1cblx0XHRcdHBhZ2Uuc3RhcnRUaW1lU3RhbXAgPSByYXdQYWdlLnN0YXJ0dGltZXN0YW1wO1xuXHRcdFx0cGFnZS5lZGl0VG9rZW4gPSBxdWVyeS50b2tlbnMuY3NyZnRva2VuO1xuXHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShwYWdlKTtcblx0XHR9KVxuXHRcdC5mYWlsKChjb2RlKSA9PiB7XG5cdFx0XHRkZWZlcnJlZC5yZWplY3QobWVzc2FnZXMubG9hZFBhZ2VFcnJvci5yZXBsYWNlKCckMScsIHBhZ2VUaXRsZSkucmVwbGFjZSgnJDInLCBjb2RlKSk7XG5cdFx0fSk7XG5cdHJldHVybiBkZWZlcnJlZC5wcm9taXNlKCk7XG59O1xuXG4vKiBSZWdpc3RlciBjaGFuZ2VzIHRvIGEgcGFnZSwgdG8gYmUgc2F2ZWQgbGF0ZXIuIFJldHVybnMgYSBqUXVlcnkgcHJvbWlzZS8qICogKHN1Y2Nlc3MgLSBubyBwYXJhbXMsIGZhaWx1cmUgLSBlcnJvciBkZXNjcmlwdGlvbikuIFRha2VzIHRoZSBzYW1lIHBhcmFtZXRlcnMvKiAqIGFzIHNhdmVQYWdlICovXG5jb25zdCBzYXZlV2l0aENvb2xkb3duID0gKC4uLmFyZ3MpID0+IHtcblx0Y29uc3QgZGVmZXJyZWQgPSBuZXcgJC5EZWZlcnJlZCgpO1xuXHRwZW5kaW5nU2F2ZXNbcGVuZGluZ1NhdmVzLmxlbmd0aF0gPSB7XG5cdFx0YXJncyxcblx0XHRkZmQ6IGRlZmVycmVkLFxuXHR9O1xuXHRpZiAoIXJ1bm5pbmdTYXZlcykge1xuXHRcdGNoZWNrQW5kU2F2ZSgpO1xuXHR9XG5cdHJldHVybiBkZWZlcnJlZC5wcm9taXNlKCk7XG59O1xuXG4vKiBTYXZlIHRoZSBmaXJzdCBzZXQgb2YgY2hhbmdlcyBpbiB0aGUgbGlzdCBvZiBwZW5kaW5nIGNoYW5nZXMsIHByb3ZpZGluZyB0aGF0LyogKiBlbm91Z2ggdGltZSBoYXMgcGFzc2VkIHNpbmNlIHRoZSBsYXN0IGVkaXQgKi9cbmNvbnN0IGNoZWNrQW5kU2F2ZSA9IGZ1bmN0aW9uICgpIHtcblx0aWYgKCFwZW5kaW5nU2F2ZXMubGVuZ3RoKSB7XG5cdFx0cnVubmluZ1NhdmVzID0gZmFsc2U7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHJ1bm5pbmdTYXZlcyA9IHRydWU7XG5cdGNvbnN0IG1pbGxpc1NpbmNlTGFzdCA9IERhdGUubm93KCkgLSBsYXN0RWRpdE1pbGxpcztcblx0aWYgKG1pbGxpc1NpbmNlTGFzdCA8IGNmZy5lZGl0Q29vbGRvd24gKiAxMDAwKSB7XG5cdFx0c2V0VGltZW91dChjaGVja0FuZFNhdmUsIGNmZy5lZGl0Q29vbGRvd24gKiAxMDAwIC0gbWlsbGlzU2luY2VMYXN0KTtcblx0fSBlbHNlIHtcblx0XHQvLyBUaGUgbGFzdCBlZGl0IHN0YXJ0ZWQgYXQgbGVhc3QgY2ZnLmVkaXRDb29sZG93biBzZWNvbmRzIGFnb1xuXHRcdGNvbnN0IHNhdmUgPSBwZW5kaW5nU2F2ZXMuc2hpZnQoKTtcblx0XHRzYXZlUGFnZVxuXHRcdFx0LmFwcGx5KHRoaXMsIHNhdmUuYXJncylcblx0XHRcdC5kb25lKCgpID0+IHtcblx0XHRcdFx0Y2hlY2tBbmRTYXZlKCk7XG5cdFx0XHRcdHNhdmUuZGZkLnJlc29sdmUoKTtcblx0XHRcdH0pXG5cdFx0XHQuZmFpbCgoZGVzY3JpcHRpb24pID0+IHtcblx0XHRcdFx0Y2hlY2tBbmRTYXZlKCk7XG5cdFx0XHRcdHNhdmUuZGZkLnJlamVjdChkZXNjcmlwdGlvbik7XG5cdFx0XHR9KTtcblx0XHQvLyBXZSdsbCB1c2UgdGhlIHRpbWUgc2luY2UgdGhlIGxhc3QgZWRpdCBzdGFydGVkXG5cdFx0bGFzdEVkaXRNaWxsaXMgPSBEYXRlLm5vdygpO1xuXHR9XG59O1xuXG4vKiBTYXZlIHRoZSBjaGFuZ2VzIG1hZGUgdG8gYSBwYWdlLiBSZXR1cm5zIGEgalF1ZXJ5IHByb21pc2UgKHN1Y2Nlc3MgLSBubyBwYXJhbXMsLyogKiBmYWlsdXJlIC0gZXJyb3IgZGVzY3JpcHRpb24pLyogKiBwYWdlVGl0bGU6IFRpdGxlIG9mIHRoZSBwYWdlLyogKiBwYWdlOiBQYWdlIGRhdGEvKiAqIHN1bW1hcnk6IFN1bW1hcnkgb2YgdGhlIGNoYW5nZXMgbWFkZSB0byB0aGUgcGFnZS8qICogbWlub3JFZGl0OiBXaGV0aGVyIHRvIG1hcmsgdGhlIGVkaXQgYXMgJ21pbm9yJy8qICogYm90RWRpdDogV2hldGhlciB0byBtYXJrIHRoZSBlZGl0IGFzICdib3QnICovXG5jb25zdCBzYXZlUGFnZSA9IChwYWdlVGl0bGUsIHtlZGl0VG9rZW4sIGNvbnRlbnQsIGJhc2VUaW1lU3RhbXAsIHN0YXJ0VGltZVN0YW1wfSwgc3VtbWFyeSwgbWlub3JFZGl0LCBib3RFZGl0KSA9PiB7XG5cdGNvbnN0IGRlZmVycmVkID0gbmV3ICQuRGVmZXJyZWQoKTtcblx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ2VkaXQnLFxuXHRcdHRpdGxlOiBwYWdlVGl0bGUsXG5cdFx0dG9rZW46IGVkaXRUb2tlbixcblx0XHR0ZXh0OiBjb250ZW50LFxuXHRcdGJhc2V0aW1lc3RhbXA6IGJhc2VUaW1lU3RhbXAsXG5cdFx0c3RhcnR0aW1lc3RhbXA6IHN0YXJ0VGltZVN0YW1wLFxuXHRcdHN1bW1hcnksXG5cdFx0d2F0Y2hsaXN0OiBjZmcud2F0Y2gsXG5cdFx0bWlub3I6IG1pbm9yRWRpdCxcblx0XHRib3Q6IGJvdEVkaXQsXG5cdH07XG5cdGFwaS5wb3N0KHBhcmFtcylcblx0XHQuZG9uZSgoKSA9PiB7XG5cdFx0XHRkZWZlcnJlZC5yZXNvbHZlKCk7XG5cdFx0fSlcblx0XHQuZmFpbCgoY29kZSkgPT4ge1xuXHRcdFx0ZGVmZXJyZWQucmVqZWN0KG1lc3NhZ2VzLnNhdmVQYWdlRXJyb3IucmVwbGFjZSgnJDEnLCBwYWdlVGl0bGUpLnJlcGxhY2UoJyQyJywgY29kZSkpO1xuXHRcdH0pO1xuXHRyZXR1cm4gZGVmZXJyZWQucHJvbWlzZSgpO1xufTtcbiIsICIvKipcbiAqIERpc2FtQXNzaXN0OiBhIHRvb2wgZm9yIHJlcGFpcmluZyBsaW5rcyBmcm9tIGFydGljbGVzIHRvIGRpc2FtYmlndWF0aW9uIHBhZ2VzLlxuICog55SxUXdlcnR5eXRyZXdxcXdlcnR55pyA5Yid6K6+6K6h77yaQ0MgQlktU0EgMy4wXG4gKiDnlLFHWldEZXLmnKzlnLDljJbvvJoyMDIwLTA4LTE5IENDIEJZLVNBIDMuMFxuICog55Sx5ZKM5bmz5aWL5paX5pWR5Zyw55CD56iN5L2c57+76K+RIDIwMjEtMDUtMTUgQ0MgQlktU0EgMy4wXG4gKiDmsYLpl7vnmb7np5FOanpqeueugOS9k+WMliAyMDIyLTItMTQgQ0MgQlktU0EgNC4wXG4gKi9cbmltcG9ydCAnLi9EaXNhbUFzc2lzdC5sZXNzJztcblxuaW1wb3J0IHtpbnN0YWxsfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbiQoaW5zdGFsbCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUEsd0ZBQUFBLFNBQUE7QUFBQTtBQUNBLFFBQUksUUFBUSxTQUFVLElBQUk7QUFDeEIsYUFBTyxNQUFNLEdBQUcsU0FBUyxRQUFRO0FBQUEsSUFDbkM7QUFHQSxJQUFBQSxRQUFPO0FBQUEsSUFFTCxNQUFNLE9BQU8sY0FBYyxZQUFZLFVBQVUsS0FDakQsTUFBTSxPQUFPLFVBQVUsWUFBWSxNQUFNO0FBQUEsSUFFekMsTUFBTSxPQUFPLFFBQVEsWUFBWSxJQUFJLEtBQ3JDLE1BQU0sT0FBTyxVQUFVLFlBQVksTUFBTSxLQUN6QyxNQUFNLE9BQU8sV0FBUSxZQUFZLE9BQUk7QUFBQSxJQUVwQywyQkFBWTtBQUFFLGFBQU87QUFBQSxJQUFNLEVBQUcsS0FBSyxTQUFTLGFBQWEsRUFBRTtBQUFBO0FBQUE7OztBQ2Y5RDtBQUFBLHVGQUFBQyxTQUFBO0FBQUE7QUFDQSxJQUFBQSxRQUFPLFVBQVUsU0FBVSxNQUFNO0FBQy9CLFVBQUk7QUFDRixlQUFPLENBQUMsQ0FBQyxLQUFLO0FBQUEsTUFDaEIsU0FBU0MsUUFBTztBQUNkLGVBQU87QUFBQSxNQUNUO0FBQUEsSUFDRjtBQUFBO0FBQUE7OztBQ1BBO0FBQUEsNkZBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksUUFB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Q0YsU0FBT3JMLFNBQVNZLFFBQVE7QUFDekI7O0FDbGdDQXhHLEVBQUVGLE9BQU87IiwKICAibmFtZXMiOiBbIm1vZHVsZSIsICJtb2R1bGUiLCAiZXJyb3IiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAibW9kdWxlIiwgImdsb2JhbCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJlcnJvciIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbCIsICJlcnJvciIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbCIsICJTeW1ib2wiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgImRvY3VtZW50IiwgIm1vZHVsZSIsICJlcnJvciIsICJtb2R1bGUiLCAibW9kdWxlIiwgImVycm9yIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIlR5cGVFcnJvciIsICJtb2R1bGUiLCAiZXJyb3IiLCAibW9kdWxlIiwgImVycm9yIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbCIsICJtb2R1bGUiLCAibW9kdWxlIiwgImVycm9yIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiJCIsICJlcnJvciIsICJXR19BQ1RJT04iLCAibXciLCAiY29uZmlnIiwgImdldCIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImFwaSIsICJpbml0TXdBcGkiLCAiY2ZnIiwgImRpc2FtQ2F0ZWdvcmllcyIsICJkaXNhbUxpbmtUZW1wbGF0ZXMiLCAiZGlzYW1MaW5rSWdub3JlVGVtcGxhdGVzIiwgImRpc2FtRm9ybWF0IiwgImRpc2FtUmVnRXhwIiwgImRpc2FtTmVlZGVkVGV4dCIsICJjb25jYXQiLCAicmVkaXJlY3RUb0Rpc2FtIiwgImludGVudGlvbmFsTGlua09wdGlvbiIsICJ0YXJnZXROYW1lc3BhY2VzIiwgImJhY2tsaW5rTGltaXQiLCAicXVlcnlUaXRsZUxpbWl0IiwgInJhZGl1cyIsICJudW1Db250ZXh0TGluZXMiLCAiaGlzdG9yeVNpemUiLCAiZWRpdENvb2xkb3duIiwgIndhdGNoIiwgIm1lc3NhZ2VzIiwgInN0YXJ0IiwgInN0YXJ0TWFpbiIsICJzdGFydFNhbWUiLCAiY2xvc2UiLCAidW5kbyIsICJvbWl0IiwgInJlZnJlc2giLCAidGl0bGVBc1RleHQiLCAiZGlzYW1OZWVkZWQiLCAiaW50ZW50aW9uYWxMaW5rIiwgInRpdGxlQXNUZXh0UHJvbXB0IiwgInJlbW92ZUxpbmsiLCAib3B0aW9uTWFya2VyIiwgInRhcmdldE9wdGlvbk1hcmtlciIsICJyZWRpcmVjdE9wdGlvbk1hcmtlciIsICJwYWdlVGl0bGVMaW5lIiwgIm5vTW9yZUxpbmtzIiwgInBlbmRpbmdFZGl0Q291bnRlciIsICJwZW5kaW5nRWRpdEJveCIsICJwZW5kaW5nRWRpdEJveFRpbWVFc3RpbWF0aW9uIiwgInBlbmRpbmdFZGl0Qm94TGltaXRlZCIsICJlcnJvciIsICJmZXRjaFJlZGlyZWN0c0Vycm9yIiwgImdldEJhY2tsaW5rc0Vycm9yIiwgImZldGNoUmlnaHRzRXJyb3IiLCAibG9hZFBhZ2VFcnJvciIsICJzYXZlUGFnZUVycm9yIiwgImRpc21pc3NFcnJvciIsICJwZW5kaW5nIiwgImVkaXRJblByb2dyZXNzIiwgImVsbGlwc2lzIiwgIm5vdGlmeUNoYXJhY3RlciIsICJzdW1tYXJ5IiwgInN1bW1hcnlDaGFuZ2VkIiwgInN1bW1hcnlPbWl0dGVkIiwgInN1bW1hcnlSZW1vdmVkIiwgInN1bW1hcnlJbnRlbnRpb25hbCIsICJzdW1tYXJ5SGVscE5lZWRlZCIsICJzdW1tYXJ5U2VwYXJhdG9yIiwgInJlZGlyZWN0U3VtbWFyeSIsICJzdGFydExpbmsiLCAidWkiLCAibGlua3MiLCAicGFnZUNoYW5nZXMiLCAiY3VycmVudFBhZ2VUaXRsZSIsICJjdXJyZW50UGFnZVBhcmFtZXRlcnMiLCAiY3VycmVudExpbmsiLCAicG9zc2libGVCYWNrbGlua0Rlc3RpbmF0aW9ucyIsICJmb3JjZVNhbWVQYWdlIiwgInJ1bm5pbmciLCAiY2hvb3NpbmciLCAiY2FuTWFya0ludGVudGlvbmFsTGlua3MiLCAiZGlzcGxheWVkUGFnZXMiLCAiZWRpdENvdW50IiwgImVkaXRMaW1pdCIsICJwZW5kaW5nU2F2ZXMiLCAicGVuZGluZ0VkaXRCb3hUZXh0IiwgImxhc3RFZGl0TWlsbGlzIiwgInJ1bm5pbmdTYXZlcyIsICJpbnN0YWxsIiwgImlzRGlzYW0iLCAiJCIsICJwb3J0bGV0SWQiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJSZWdFeHAiLCAidGVzdCIsICJnZXRUaXRsZSIsICJzdGFydE1haW5MaW5rIiwgInV0aWwiLCAiYWRkUG9ydGxldExpbmsiLCAib24iLCAic3RhcnRTYW1lTGluayIsICJhZGQiLCAiZW5zdXJlREFCRXhpc3RzIiwgInRoZW4iLCAiY2FuTWFyayIsICJjcmVhdGVVSSIsICJhZGRVbmxvYWRDb25maXJtIiwgIm1hcmtEaXNhbU9wdGlvbnMiLCAiY2hlY2tFZGl0TGltaXQiLCAidG9nZ2xlUGVuZGluZ0VkaXRCb3giLCAiZG9QYWdlIiwgIiRib2R5IiwgImRpc3BsYXkiLCAiYWRkQ2xhc3MiLCAiZmluaXNoZWRNZXNzYWdlIiwgInRleHQiLCAiaGlkZSIsICJjb250ZXh0IiwgInVuZG9CdXR0b24iLCAiY3JlYXRlQnV0dG9uIiwgIm9taXRCdXR0b24iLCAiZW5kQnV0dG9uIiwgInNhdmVBbmRFbmQiLCAicmVmcmVzaEJ1dHRvbiIsICJ0aXRsZUFzVGV4dEJ1dHRvbiIsICJjaG9vc2VUaXRsZUZyb21Qcm9tcHQiLCAiaW50ZW50aW9uYWxMaW5rQnV0dG9uIiwgImNob29zZUludGVudGlvbmFsTGluayIsICJkaXNhbU5lZWRlZEJ1dHRvbiIsICJjaG9vc2VEaXNhbU5lZWRlZCIsICJyZW1vdmVMaW5rQnV0dG9uIiwgImNob29zZUxpbmtSZW1vdmFsIiwgInRvcCIsICJhcHBlbmQiLCAibGVmdEJ1dHRvbnMiLCAicmlnaHRCdXR0b25zIiwgImFsbEJ1dHRvbnMiLCAidXBkYXRlRWRpdENvdW50ZXIiLCAidG9nZ2xlQWN0aW9uQnV0dG9ucyIsICJmaW5kIiwgImJlZm9yZSIsICJmYWRlSW4iLCAid2luZG93IiwgImNoZWNrQWN0dWFsQ2hhbmdlcyIsICJvcHRpb25QYWdlVGl0bGVzIiwgIm9wdGlvbk1hcmtlcnMiLCAiZ2V0RGlzYW1PcHRpb25zIiwgImVhY2giLCAiX2luZGV4IiwgImVsZW1lbnQiLCAibGluayIsICJ0aXRsZSIsICJleHRyYWN0UGFnZU5hbWUiLCAiYXR0ciIsICJldiIsICJwcmV2ZW50RGVmYXVsdCIsICJjaG9vc2VSZXBsYWNlbWVudCIsICJhZnRlciIsICJsZW5ndGgiLCAidGFyZ2V0UGFnZSIsICJnZXRUYXJnZXRQYWdlIiwgImZldGNoUmVkaXJlY3RzIiwgImRvbmUiLCAicmVkaXJlY3RzIiwgImVuZFRhcmdldFBhZ2UiLCAicmVzb2x2ZVJlZGlyZWN0IiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJlbnRyaWVzIiwgIl9zdGVwIiwgInMiLCAibiIsICJpaSIsICJvcHRpb25QYWdlVGl0bGUiLCAidmFsdWUiLCAiZW5kT3B0aW9uVGl0bGUiLCAiaXNTYW1lUGFnZSIsICJlcnIiLCAiZSIsICJmIiwgImZhaWwiLCAiZGVmZXJyZWQiLCAiRGVmZXJyZWQiLCAicmVzb2x2ZSIsICJleGVjIiwgImRpc2FtVGl0bGUiLCAicmVwbGFjZSIsICJsb2FkUGFnZSIsICJwYWdlIiwgIm1pc3NpbmciLCAiY29udGVudCIsICJzYXZlUGFnZSIsICJkZXNjcmlwdGlvbiIsICJwcm9taXNlIiwgImZldGNoUmlnaHRzIiwgInJpZ2h0cyIsICJpbmNsdWRlcyIsICJhbHdheXMiLCAiYXBwbHlDaGFuZ2UiLCAic2hpZnQiLCAiZGF0YSIsICJkb0xpbmsiLCAiZ2V0QmFja2xpbmtzIiwgImJhY2tsaW5rcyIsICJwYWdlVGl0bGVzIiwgIl9pIiwgIl9wZW5kaW5nU2F2ZXMiLCAiZWwiLCAiZmlsdGVyIiwgInQiLCAicmVtb3ZlRGlzYW0iLCAidXBkYXRlQ29udGV4dCIsICJleHRyYWN0TGlua1RvUGFnZSIsICJlbmQiLCAicGFnZVRpdGxlIiwgImV4dHJhIiwgImFkZENoYW5nZSIsICJyZXBsYWNlTGluayIsICJwcm9tcHQiLCAibGFzdFBhZ2UiLCAiYXQiLCAidW5zaGlmdCIsICJjb250ZW50QmVmb3JlIiwgInBvcCIsICJlbmFibGVkIiwgImFmZmVjdGVkQnV0dG9ucyIsICJfaTIiLCAiX2FmZmVjdGVkQnV0dG9ucyIsICJidXR0b24iLCAicHJvcCIsICJ0b2dnbGVGaW5pc2hlZE1lc3NhZ2UiLCAic2hvdyIsICJ0b2dnbGUiLCAiZmFkZU91dCIsICJub3RpZnlDb21wbGV0aW9uIiwgIm9sZFRpdGxlIiwgIm9uZSIsICJodG1sIiwgImdldFVybCIsICJyZWRpcmVjdCIsICJlc2NhcGUiLCAiZXh0cmFjdENvbnRleHQiLCAiZW1wdHkiLCAibnVtTGluZXMiLCAiTWF0aCIsICJjZWlsIiwgImhlaWdodCIsICJOdW1iZXIiLCAicGFyc2VGbG9hdCIsICJjc3MiLCAiQXJyYXkiLCAiZnJvbSIsICJqb2luIiwgImhhc0Rpc2FtVGVtcGxhdGUiLCAiY291bnRBY3R1YWxseUNoYW5nZWRGdWxseUNoZWNrZWRQYWdlcyIsICJ0ZXh0Q29udGVudCIsICJzZWNvbmRzVG9ISE1NU1MiLCAicGFnZUNoYW5nZSIsICJjaGFuZ2VTdW1tYXJpZXMiLCAic2F2ZSIsICJzYXZlV2l0aENvb2xkb3duIiwgImFwcGx5QWxsQ2hhbmdlcyIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJvbGRDb250ZW50IiwgImxhc3RQYWdlQ2hhbmdlIiwgImNvdW50QWN0dWFsQ2hhbmdlcyIsICJjaGFuZ2VDb3VudCIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJsYXN0Q2hhbmdlIiwgImN1cnJlbnRUb29sVUkiLCAicmVtb3ZlQ2xhc3MiLCAicmVtb3ZlIiwgImNvbXBsZXRlIiwgImVycm9yRGVzY3JpcHRpb24iLCAiZXJyb3JCb3giLCAidWlJc0luUGxhY2UiLCAiY29udGFpbnMiLCAiZG9jdW1lbnRFbGVtZW50IiwgIm5leHRFbGVtZW50IiwgIm5ld0NvbnRlbnQiLCAibGlua1N0YXJ0IiwgInNsaWNlIiwgIm1heCIsICJsaW5rRW5kIiwgImFmdGVyRGVzY3JpcHRpb24iLCAiZXh0cmFjdExpbmsiLCAibGFzdEluZGV4IiwgInRpdGxlUmVnZXgiLCAidGVtcGxhdGVSZWdleCIsICJtYXRjaCIsICJpbmRleCIsICJfbWF0Y2gkIiwgInBvc3NpYmx5QW1iaWd1b3VzIiwgIl9lbmQiLCAicmVzdCIsICJ0ZW1wbGF0ZU1hdGNoIiwgInRlbXBsYXRlVGl0bGUiLCAiZ2V0Q2Fub25pY2FsVGl0bGUiLCAiZGVzdGluYXRpb25zIiwgIl9tYXRjaCQyIiwgInRpdGxlMSIsICJ0aXRsZTIiLCAiVGl0bGUiLCAiZ2V0UHJlZml4ZWRUZXh0IiwgImNvbnRleHRTdGFydCIsICJjb250ZXh0RW5kIiwgImNvbnRleHRQcmV2IiwgImNvbnRleHROZXh0IiwgInBhZ2VOYW1lIiwgImV4dHJhY3RQYWdlTmFtZVJhdyIsICJzZWN0aW9uUG9zIiwgImluZGV4T2YiLCAic2VjdGlvbiIsICJoYXNDbGFzcyIsICJocmVmIiwgImdldFBhcmFtVmFsdWUiLCAicmVnZXgiLCAicmVnZXhSZXN1bHQiLCAiaXNBcnJheSIsICJkZWNvZGVVUklDb21wb25lbnQiLCAiY2F0ZWdvcmllcyIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJjYXRlZ29yeSIsICJ0b3RhbFNlY29uZHMiLCAiaGhtbXNzIiwgImhvdXJzIiwgImZsb29yIiwgIm1pbnV0ZXMiLCAic2Vjb25kcyIsICJwYWQiLCAic3RyIiwgInoiLCAid2lkdGgiLCAidG9TdHJpbmciLCAib25DbGljayIsICJ0eXBlIiwgInBvc3NpYmxlUmVkaXJlY3RzIiwgImFwcGxpZWRSZWRpcmVjdCIsICJ2aXNpdGVkUGFnZXMiLCAiY3VycmVudFBhZ2UiLCAiX2l0ZXJhdG9yNSIsICJfc3RlcDUiLCAicG9zc2libGVSZWRpcmVjdCIsICJ0byIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImxpc3QiLCAiYmx0aXRsZSIsICJibHJlZGlyZWN0IiwgImJsbGltaXQiLCAiYmxuYW1lc3BhY2UiLCAicXVlcnkiLCAibGlua1RpdGxlcyIsICJiYWNrbGlua3NRdWVyeSIsICJfaXRlcmF0b3I2IiwgIl9zdGVwNiIsICJyZWRpcmxpbmtzIiwgIl9pdGVyYXRvcjciLCAiX3N0ZXA3IiwgImNvZGUiLCAicmVqZWN0IiwgImN1cnJlbnRUaXRsZXMiLCAicmVzdFRpdGxlcyIsICJ0aXRsZXMiLCAiX3F1ZXJ5JHJlZGlyZWN0cyIsICJ0aGVzZVJlZGlyZWN0cyIsICJtZXRhIiwgInVpcHJvcCIsICJ1c2VyaW5mbyIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJydnByb3AiLCAicmF3UGFnZSIsICJwYWdlcyIsICJyZXZpc2lvbnMiLCAiYmFzZVRpbWVTdGFtcCIsICJ0aW1lc3RhbXAiLCAic3RhcnRUaW1lU3RhbXAiLCAic3RhcnR0aW1lc3RhbXAiLCAiZWRpdFRva2VuIiwgInRva2VucyIsICJjc3JmdG9rZW4iLCAiYXJncyIsICJkZmQiLCAiY2hlY2tBbmRTYXZlIiwgIm1pbGxpc1NpbmNlTGFzdCIsICJEYXRlIiwgIm5vdyIsICJzZXRUaW1lb3V0IiwgImFwcGx5IiwgIm1pbm9yRWRpdCIsICJib3RFZGl0IiwgInRva2VuIiwgImJhc2V0aW1lc3RhbXAiLCAid2F0Y2hsaXN0IiwgIm1pbm9yIiwgImJvdCIsICJwb3N0Il0KfQo=

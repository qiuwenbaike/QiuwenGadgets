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
      } catch (error) {
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
      } catch (error) {
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
      } catch (error) {
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
        } catch (error) {
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
        } catch (error) {
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
        } catch (error) {
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
      } catch (error) {
        return error instanceof TypeError;
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/modules/es.array.push.js
var require_es_array_push = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/modules/es.array.push.js"() {
    "use strict";
    var $ = require_export();
    var toObject = require_to_object();
    var lengthOfArrayLike = require_length_of_array_like();
    var setArrayLength = require_array_set_length();
    var doesNotExceedSafeInteger = require_does_not_exceed_safe_integer();
    var fails = require_fails();
    var INCORRECT_TO_LENGTH = fails(function() {
      return [].push.call({ length: 4294967296 }, 1) !== 4294967297;
    });
    var properErrorOnNonWritableLength = function() {
      try {
        Object.defineProperty([], "length", { writable: false }).push();
      } catch (error) {
        return error instanceof TypeError;
      }
    };
    var FORCED = INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength();
    $({ target: "Array", proto: true, arity: 1, forced: FORCED }, {
      // eslint-disable-next-line no-unused-vars -- required for `.length`
      push: function push(item) {
        var O = toObject(this);
        var len = lengthOfArrayLike(O);
        var argCount = arguments.length;
        doesNotExceedSafeInteger(len + argCount);
        for (var i = 0; i < argCount; i++) {
          O[len] = arguments[i];
          len++;
        }
        setArrayLength(O, len);
        return len;
      }
    });
  }
});

// dist/morebits/morebits.js
require_es_array_push();
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
    return mw.config.get("wgUserGroups").includes(group);
  };
  Morebits.userIsSysop = Morebits.userIsInGroup("sysop") || Morebits.userIsInGroup("steward") || Morebits.userIsInGroup("qiuwen");
  Morebits.sanitizeIPv6 = (address) => {
    console.warn("[Morebits] NOTE: Morebits.sanitizeIPv6 was renamed to Morebits.ip.sanitizeIPv6 in February 2021, please use that instead");
    return Morebits.ip.sanitizeIPv6(address);
  };
  Morebits.isPageRedirect = () => {
    const $body = $("body");
    return !!(mw.config.get("wgIsRedirect") || document.querySelector("#softredirect") || $body.find(".box-RfD").length || $body.find(".box-Redirect_category_shell").length);
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
      if (!target) {
        target = text_;
      }
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
        aliases.push([...name].map((char) => {
          return Morebits.pageNameRegex(char);
        }).join(""));
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
    this.childs.push(child);
    return child;
  };
  Morebits.quickForm.element.prototype.render = function(internalSubgroupId) {
    const currentNode = this.compute(this.data, internalSubgroupId);
    for (let i = 0; i < this.childs.length; ++i) {
      currentNode[1].appendChild(this.childs[i].render());
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
              var _iterator3 = _createForOfIteratorHelper(tmpgroup), _step3;
              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                  const el = _step3.value;
                  const newEl = {
                    ...el
                  };
                  if (!newEl.type) {
                    newEl.type = data.type;
                  }
                  newEl.name = "".concat(current.name || data.name, ".").concat(newEl.name);
                  subgroupRaw.append(newEl);
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
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
    if (!childContainer) {
      childContainer = node;
    }
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
    var _iterator4 = _createForOfIteratorHelper(form.elements), _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
        const field = _step4.value;
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
                result[fieldNameNorm].push(field.value);
              }
            }
            break;
          case "select-multiple":
            result[fieldNameNorm] = $(field).val();
            break;
          case "text":
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
      _iterator4.e(err);
    } finally {
      _iterator4.f();
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
            returnArray.push(options[i].values);
          } else {
            returnArray.push(options[i].value);
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
            returnArray.push(elements[i].values);
          } else {
            returnArray.push(elements[i].value);
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
            returnArray.push(options[i].values);
          } else {
            returnArray.push(options[i].value);
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
            returnArray.push(elements[i].values);
          } else {
            returnArray.push(elements[i].value);
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
      if (abbrevPos > -1) {
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
        var _iterator5 = _createForOfIteratorHelper(skiplist), _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
            const element = _step5.value;
            if (str.slice(i, i + element.length) === element) {
              i += element.length - 1;
              continue;
            }
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
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
          result.push(str.slice(initial, i + 1));
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
      if (idx < 0) {
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
    if (!this._d) {
      this._d = new (Function.prototype.bind.apply(Date, [Date, ...(0, import_ext_gadget.generateArray)(args)]))();
    }
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
      unbinder.unbind("\\[", "\\]");
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
  var _iterator6 = _createForOfIteratorHelper(Object.getOwnPropertyNames(Date.prototype)), _step6;
  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
      const func = _step6.value;
      if (!["add", "getDayName", "getMonthName"].includes(func)) {
        Morebits.date.prototype[func] = function(...args) {
          return this._d[func](...args);
        };
      }
    }
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
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
      const _queryString = [];
      for (var _i5 = 0, _Object$entries2 = Object.entries(this.query); _i5 < _Object$entries2.length; _i5++) {
        const [i, val] = _Object$entries2[_i5];
        if (Array.isArray(val)) {
          _queryString.push("".concat(encodeURIComponent(i), "=").concat(val.map(encodeURIComponent).join("|")));
        } else if (val !== void 0) {
          _queryString.push("".concat(encodeURIComponent(i), "=").concat(encodeURIComponent(val)));
        }
      }
      const queryString = _queryString.join("&").replace(/^(.*?)(\btoken=[^&]*)&(.*)/, "$1$3&$2");
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
    if (!status) {
      status = window.wgULS("打开页面“", "打開頁面「") + pageName + window.wgULS("”", "」");
    }
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
        const editProt = page.protection.filter((pr) => {
          return pr.type === "edit" && pr.level === "sysop";
        }).pop();
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
          ctx.testActions.push(action);
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
      if (!onFailure) {
        onFailure = emptyFunction;
      }
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
            ctx.statusElement.error(window.wgULS("编辑被防滥用过滤器规则“", "編輯被防濫用過濾器規則「") + errorData.abusefilter.description + window.wgULS("”阻止。若您认为您的该次编辑是有意义的，请至 Wikipedia:防滥用过滤器/错误报告 提报。", "」阻止。若您認為您的該次編輯是有意義的，請至 Wikipedia:防濫用過濾器/錯誤報告 提報。"));
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
      var _iterator7 = _createForOfIteratorHelper(revs), _step7;
      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
          const rev = _step7.value;
          if (!isTextRedirect(rev.content)) {
            ctx.creator = rev.user;
            ctx.timestamp = rev.timestamp;
            break;
          }
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
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
        editprot = response.pages[0].protection.filter((pr) => {
          return pr.type === "create" && pr.level === "sysop";
        }).pop();
      } else if (action === "delete" || action === "move") {
        editprot = response.pages[0].protection.filter((pr) => {
          return pr.type === "edit" && pr.level === "sysop";
        }).pop();
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
      var _iterator8 = _createForOfIteratorHelper(prs), _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
          const pr = _step8.value;
          if (pr.type === "edit" && !pr.source) {
            editprot = pr;
          } else if (pr.type === "move") {
            moveprot = pr;
          } else if (pr.type === "create") {
            createprot = pr;
          }
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
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
        protections.push("edit=".concat(ctx.protectEdit.level));
        expirys.push(ctx.protectEdit.expiry);
      }
      if (ctx.protectMove) {
        protections.push("move=".concat(ctx.protectMove.level));
        expirys.push(ctx.protectMove.expiry);
      }
      if (ctx.protectCreate) {
        protections.push("create=".concat(ctx.protectCreate.level));
        expirys.push(ctx.protectCreate.expiry);
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
          level.push(3);
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
          level.push(2);
        } else {
          level.push("wl");
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
      var _iterator9 = _createForOfIteratorHelper(allLinks), _step9;
      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) {
          const allLink = _step9.value;
          if (linksRegex.test(allLink)) {
            const replacement = "<!-- ".concat(reason).concat(allLink, " -->");
            unbinder.content = unbinder.content.replace(allLink, replacement);
            unbinder.unbind("<!--", "-->");
          }
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
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
      var _iterator10 = _createForOfIteratorHelper(allLinks), _step10;
      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done; ) {
          let replacement = _step10.value;
          if (linksRegex.test(replacement)) {
            replacement = replacement.replace(/\]\]$/, "|".concat(data, "]]"));
            this.text = this.text.replace(replacement, replacement);
          }
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
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
      var _iterator11 = _createForOfIteratorHelper(allTemplates), _step11;
      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done; ) {
          const allTemplate = _step11.value;
          if (linksRegex.test(allTemplate)) {
            this.text = this.text.replace(allTemplate, "");
          }
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
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
      var _iterator12 = _createForOfIteratorHelper(chunk), _step12;
      try {
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done; ) {
          const page = _step12.value;
          ctx.worker(page, thisProxy);
        }
      } catch (err) {
        _iterator12.e(err);
      } finally {
        _iterator12.f();
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
        self2.buttons.push(button);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mYWlscy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Rlc2NyaXB0b3JzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1jYWxsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NsYXNzb2YtcmF3LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtY2FsbGFibGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nZXQtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXN5bWJvbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RyeS10by1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWNhbGxhYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1Zy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1uYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9tYXRoLXRydW5jLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtYXJyYXkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1zZXQtbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9lcy1ub3QtZXhjZWVkLXNhZmUtaW50ZWdlci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5wdXNoLmpzIiwgInNyYy9tb3JlYml0cy9tb3JlYml0cy5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiJ3VzZSBzdHJpY3QnO1xudmFyIGNoZWNrID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAmJiBpdC5NYXRoID09PSBNYXRoICYmIGl0O1xufTtcblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbm1vZHVsZS5leHBvcnRzID1cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWdsb2JhbC10aGlzIC0tIHNhZmVcbiAgY2hlY2sodHlwZW9mIGdsb2JhbFRoaXMgPT0gJ29iamVjdCcgJiYgZ2xvYmFsVGhpcykgfHxcbiAgY2hlY2sodHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cpIHx8XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLWdsb2JhbHMgLS0gc2FmZVxuICBjaGVjayh0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmKSB8fFxuICBjaGVjayh0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCkgfHxcbiAgY2hlY2sodHlwZW9mIHRoaXMgPT0gJ29iamVjdCcgJiYgdGhpcykgfHxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jIC0tIGZhbGxiYWNrXG4gIChmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KSgpIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxuLy8gRGV0ZWN0IElFOCdzIGluY29tcGxldGUgZGVmaW5lUHJvcGVydHkgaW1wbGVtZW50YXRpb25cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAxLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KVsxXSAhPT0gNztcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1mdW5jdGlvbi1wcm90b3R5cGUtYmluZCAtLSBzYWZlXG4gIHZhciB0ZXN0ID0gKGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSkuYmluZCgpO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zIC0tIHNhZmVcbiAgcmV0dXJuIHR5cGVvZiB0ZXN0ICE9ICdmdW5jdGlvbicgfHwgdGVzdC5oYXNPd25Qcm9wZXJ0eSgncHJvdG90eXBlJyk7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgTkFUSVZFX0JJTkQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUnKTtcblxudmFyIGNhbGwgPSBGdW5jdGlvbi5wcm90b3R5cGUuY2FsbDtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfQklORCA/IGNhbGwuYmluZChjYWxsKSA6IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGNhbGwuYXBwbHkoY2FsbCwgYXJndW1lbnRzKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIE5hc2hvcm4gfiBKREs4IGJ1Z1xudmFyIE5BU0hPUk5fQlVHID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yICYmICEkcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh7IDE6IDIgfSwgMSk7XG5cbi8vIGBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eWlzZW51bWVyYWJsZVxuZXhwb3J0cy5mID0gTkFTSE9STl9CVUcgPyBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShWKSB7XG4gIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRoaXMsIFYpO1xuICByZXR1cm4gISFkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IuZW51bWVyYWJsZTtcbn0gOiAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgTkFUSVZFX0JJTkQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUnKTtcblxudmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xudmFyIGNhbGwgPSBGdW5jdGlvblByb3RvdHlwZS5jYWxsO1xudmFyIHVuY3VycnlUaGlzV2l0aEJpbmQgPSBOQVRJVkVfQklORCAmJiBGdW5jdGlvblByb3RvdHlwZS5iaW5kLmJpbmQoY2FsbCwgY2FsbCk7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX0JJTkQgPyB1bmN1cnJ5VGhpc1dpdGhCaW5kIDogZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGNhbGwuYXBwbHkoZm4sIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxudmFyIHRvU3RyaW5nID0gdW5jdXJyeVRoaXMoe30udG9TdHJpbmcpO1xudmFyIHN0cmluZ1NsaWNlID0gdW5jdXJyeVRoaXMoJycuc2xpY2UpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gc3RyaW5nU2xpY2UodG9TdHJpbmcoaXQpLCA4LCAtMSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG52YXIgc3BsaXQgPSB1bmN1cnJ5VGhpcygnJy5zcGxpdCk7XG5cbi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG5tb2R1bGUuZXhwb3J0cyA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gdGhyb3dzIGFuIGVycm9yIGluIHJoaW5vLCBzZWUgaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvcmhpbm8vaXNzdWVzLzM0NlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zIC0tIHNhZmVcbiAgcmV0dXJuICEkT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCk7XG59KSA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY2xhc3NvZihpdCkgPT09ICdTdHJpbmcnID8gc3BsaXQoaXQsICcnKSA6ICRPYmplY3QoaXQpO1xufSA6ICRPYmplY3Q7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gd2UgY2FuJ3QgdXNlIGp1c3QgYGl0ID09IG51bGxgIHNpbmNlIG9mIGBkb2N1bWVudC5hbGxgIHNwZWNpYWwgY2FzZVxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1Jc0hUTUxEREEtaW50ZXJuYWwtc2xvdC1hZWNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA9PT0gbnVsbCB8fCBpdCA9PT0gdW5kZWZpbmVkO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtbnVsbC1vci11bmRlZmluZWQnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcmVxdWlyZW9iamVjdGNvZXJjaWJsZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGlzTnVsbE9yVW5kZWZpbmVkKGl0KSkgdGhyb3cgbmV3ICRUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSW5kZXhlZE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGl0KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtSXNIVE1MRERBLWludGVybmFsLXNsb3RcbnZhciBkb2N1bWVudEFsbCA9IHR5cGVvZiBkb2N1bWVudCA9PSAnb2JqZWN0JyAmJiBkb2N1bWVudC5hbGw7XG5cbi8vIGBJc0NhbGxhYmxlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXNjYWxsYWJsZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vbm8tdHlwZW9mLXVuZGVmaW5lZCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xubW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgZG9jdW1lbnRBbGwgPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnRBbGwgIT09IHVuZGVmaW5lZCA/IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gdHlwZW9mIGFyZ3VtZW50ID09ICdmdW5jdGlvbicgfHwgYXJndW1lbnQgPT09IGRvY3VtZW50QWxsO1xufSA6IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gdHlwZW9mIGFyZ3VtZW50ID09ICdmdW5jdGlvbic7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IGlzQ2FsbGFibGUoaXQpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIGFGdW5jdGlvbiA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gaXNDYWxsYWJsZShhcmd1bWVudCkgPyBhcmd1bWVudCA6IHVuZGVmaW5lZDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWVzcGFjZSwgbWV0aG9kKSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IGFGdW5jdGlvbihnbG9iYWxbbmFtZXNwYWNlXSkgOiBnbG9iYWxbbmFtZXNwYWNlXSAmJiBnbG9iYWxbbmFtZXNwYWNlXVttZXRob2RdO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gdW5jdXJyeVRoaXMoe30uaXNQcm90b3R5cGVPZik7XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgbmF2aWdhdG9yICE9ICd1bmRlZmluZWQnICYmIFN0cmluZyhuYXZpZ2F0b3IudXNlckFnZW50KSB8fCAnJztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudCcpO1xuXG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIERlbm8gPSBnbG9iYWwuRGVubztcbnZhciB2ZXJzaW9ucyA9IHByb2Nlc3MgJiYgcHJvY2Vzcy52ZXJzaW9ucyB8fCBEZW5vICYmIERlbm8udmVyc2lvbjtcbnZhciB2OCA9IHZlcnNpb25zICYmIHZlcnNpb25zLnY4O1xudmFyIG1hdGNoLCB2ZXJzaW9uO1xuXG5pZiAodjgpIHtcbiAgbWF0Y2ggPSB2OC5zcGxpdCgnLicpO1xuICAvLyBpbiBvbGQgQ2hyb21lLCB2ZXJzaW9ucyBvZiBWOCBpc24ndCBWOCA9IENocm9tZSAvIDEwXG4gIC8vIGJ1dCB0aGVpciBjb3JyZWN0IHZlcnNpb25zIGFyZSBub3QgaW50ZXJlc3RpbmcgZm9yIHVzXG4gIHZlcnNpb24gPSBtYXRjaFswXSA+IDAgJiYgbWF0Y2hbMF0gPCA0ID8gMSA6ICsobWF0Y2hbMF0gKyBtYXRjaFsxXSk7XG59XG5cbi8vIEJyb3dzZXJGUyBOb2RlSlMgYHByb2Nlc3NgIHBvbHlmaWxsIGluY29ycmVjdGx5IHNldCBgLnY4YCB0byBgMC4wYFxuLy8gc28gY2hlY2sgYHVzZXJBZ2VudGAgZXZlbiBpZiBgLnY4YCBleGlzdHMsIGJ1dCAwXG5pZiAoIXZlcnNpb24gJiYgdXNlckFnZW50KSB7XG4gIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9FZGdlXFwvKFxcZCspLyk7XG4gIGlmICghbWF0Y2ggfHwgbWF0Y2hbMV0gPj0gNzQpIHtcbiAgICBtYXRjaCA9IHVzZXJBZ2VudC5tYXRjaCgvQ2hyb21lXFwvKFxcZCspLyk7XG4gICAgaWYgKG1hdGNoKSB2ZXJzaW9uID0gK21hdGNoWzFdO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdmVyc2lvbjtcbiIsICIndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBlcy9uby1zeW1ib2wgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmcgKi9cbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS12OC12ZXJzaW9uJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbnZhciAkU3RyaW5nID0gZ2xvYmFsLlN0cmluZztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eXN5bWJvbHMgLS0gcmVxdWlyZWQgZm9yIHRlc3Rpbmdcbm1vZHVsZS5leHBvcnRzID0gISFPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBzeW1ib2wgPSBTeW1ib2woJ3N5bWJvbCBkZXRlY3Rpb24nKTtcbiAgLy8gQ2hyb21lIDM4IFN5bWJvbCBoYXMgaW5jb3JyZWN0IHRvU3RyaW5nIGNvbnZlcnNpb25cbiAgLy8gYGdldC1vd24tcHJvcGVydHktc3ltYm9sc2AgcG9seWZpbGwgc3ltYm9scyBjb252ZXJ0ZWQgdG8gb2JqZWN0IGFyZSBub3QgU3ltYm9sIGluc3RhbmNlc1xuICAvLyBuYjogRG8gbm90IGNhbGwgYFN0cmluZ2AgZGlyZWN0bHkgdG8gYXZvaWQgdGhpcyBiZWluZyBvcHRpbWl6ZWQgb3V0IHRvIGBzeW1ib2wrJydgIHdoaWNoIHdpbGwsXG4gIC8vIG9mIGNvdXJzZSwgZmFpbC5cbiAgcmV0dXJuICEkU3RyaW5nKHN5bWJvbCkgfHwgIShPYmplY3Qoc3ltYm9sKSBpbnN0YW5jZW9mIFN5bWJvbCkgfHxcbiAgICAvLyBDaHJvbWUgMzgtNDAgc3ltYm9scyBhcmUgbm90IGluaGVyaXRlZCBmcm9tIERPTSBjb2xsZWN0aW9ucyBwcm90b3R5cGVzIHRvIGluc3RhbmNlc1xuICAgICFTeW1ib2wuc2hhbSAmJiBWOF9WRVJTSU9OICYmIFY4X1ZFUlNJT04gPCA0MTtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLXN5bWJvbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZyAqL1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3ltYm9sLWNvbnN0cnVjdG9yLWRldGVjdGlvbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9TWU1CT0xcbiAgJiYgIVN5bWJvbC5zaGFtXG4gICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCc7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGlzUHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWlzLXByb3RvdHlwZS1vZicpO1xudmFyIFVTRV9TWU1CT0xfQVNfVUlEID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkJyk7XG5cbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVTRV9TWU1CT0xfQVNfVUlEID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24gKGl0KSB7XG4gIHZhciAkU3ltYm9sID0gZ2V0QnVpbHRJbignU3ltYm9sJyk7XG4gIHJldHVybiBpc0NhbGxhYmxlKCRTeW1ib2wpICYmIGlzUHJvdG90eXBlT2YoJFN5bWJvbC5wcm90b3R5cGUsICRPYmplY3QoaXQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICRTdHJpbmcgPSBTdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICRTdHJpbmcoYXJndW1lbnQpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiAnT2JqZWN0JztcbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHRyeVRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RyeS10by1zdHJpbmcnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBBc3NlcnQ6IElzQ2FsbGFibGUoYXJndW1lbnQpIGlzIHRydWVgXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoaXNDYWxsYWJsZShhcmd1bWVudCkpIHJldHVybiBhcmd1bWVudDtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IodHJ5VG9TdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcbnZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZCcpO1xuXG4vLyBgR2V0TWV0aG9kYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtZ2V0bWV0aG9kXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChWLCBQKSB7XG4gIHZhciBmdW5jID0gVltQXTtcbiAgcmV0dXJuIGlzTnVsbE9yVW5kZWZpbmVkKGZ1bmMpID8gdW5kZWZpbmVkIDogYUNhbGxhYmxlKGZ1bmMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYE9yZGluYXJ5VG9QcmltaXRpdmVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vcmRpbmFyeXRvcHJpbWl0aXZlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnB1dCwgcHJlZikge1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKHByZWYgPT09ICdzdHJpbmcnICYmIGlzQ2FsbGFibGUoZm4gPSBpbnB1dC50b1N0cmluZykgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmIChpc0NhbGxhYmxlKGZuID0gaW5wdXQudmFsdWVPZikgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmIChwcmVmICE9PSAnc3RyaW5nJyAmJiBpc0NhbGxhYmxlKGZuID0gaW5wdXQudG9TdHJpbmcpICYmICFpc09iamVjdCh2YWwgPSBjYWxsKGZuLCBpbnB1dCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICB0cnkge1xuICAgIGRlZmluZVByb3BlcnR5KGdsb2JhbCwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBnbG9iYWxba2V5XSA9IHZhbHVlO1xuICB9IHJldHVybiB2YWx1ZTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgZGVmaW5lR2xvYmFsUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWdsb2JhbC1wcm9wZXJ0eScpO1xuXG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IGdsb2JhbFRoaXNbU0hBUkVEXSB8fCBkZWZpbmVHbG9iYWxQcm9wZXJ0eShTSEFSRUQsIHt9KTtcblxuKHN0b3JlLnZlcnNpb25zIHx8IChzdG9yZS52ZXJzaW9ucyA9IFtdKSkucHVzaCh7XG4gIHZlcnNpb246ICczLjM2LjAnLFxuICBtb2RlOiBJU19QVVJFID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMTQtMjAyNCBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KScsXG4gIGxpY2Vuc2U6ICdodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9ibG9iL3YzLjM2LjAvTElDRU5TRScsXG4gIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzJ1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHN0b3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0gdmFsdWUgfHwge30pO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbi8vIGBUb09iamVjdGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvb2JqZWN0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gJE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcblxudmFyIGhhc093blByb3BlcnR5ID0gdW5jdXJyeVRoaXMoe30uaGFzT3duUHJvcGVydHkpO1xuXG4vLyBgSGFzT3duUHJvcGVydHlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1oYXNvd25wcm9wZXJ0eVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1oYXNvd24gLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuaGFzT3duIHx8IGZ1bmN0aW9uIGhhc093bihpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eSh0b09iamVjdChpdCksIGtleSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxudmFyIGlkID0gMDtcbnZhciBwb3N0Zml4ID0gTWF0aC5yYW5kb20oKTtcbnZhciB0b1N0cmluZyA9IHVuY3VycnlUaGlzKDEuMC50b1N0cmluZyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnICsgKGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXkpICsgJylfJyArIHRvU3RyaW5nKCsraWQgKyBwb3N0Zml4LCAzNik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3ltYm9sLWNvbnN0cnVjdG9yLWRldGVjdGlvbicpO1xudmFyIFVTRV9TWU1CT0xfQVNfVUlEID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkJyk7XG5cbnZhciBTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyIFdlbGxLbm93blN5bWJvbHNTdG9yZSA9IHNoYXJlZCgnd2tzJyk7XG52YXIgY3JlYXRlV2VsbEtub3duU3ltYm9sID0gVVNFX1NZTUJPTF9BU19VSUQgPyBTeW1ib2xbJ2ZvciddIHx8IFN5bWJvbCA6IFN5bWJvbCAmJiBTeW1ib2wud2l0aG91dFNldHRlciB8fCB1aWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgaWYgKCFoYXNPd24oV2VsbEtub3duU3ltYm9sc1N0b3JlLCBuYW1lKSkge1xuICAgIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXSA9IE5BVElWRV9TWU1CT0wgJiYgaGFzT3duKFN5bWJvbCwgbmFtZSlcbiAgICAgID8gU3ltYm9sW25hbWVdXG4gICAgICA6IGNyZWF0ZVdlbGxLbm93blN5bWJvbCgnU3ltYm9sLicgKyBuYW1lKTtcbiAgfSByZXR1cm4gV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciBvcmRpbmFyeVRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZScpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbnZhciBUT19QUklNSVRJVkUgPSB3ZWxsS25vd25TeW1ib2woJ3RvUHJpbWl0aXZlJyk7XG5cbi8vIGBUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJpbWl0aXZlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnB1dCwgcHJlZikge1xuICBpZiAoIWlzT2JqZWN0KGlucHV0KSB8fCBpc1N5bWJvbChpbnB1dCkpIHJldHVybiBpbnB1dDtcbiAgdmFyIGV4b3RpY1RvUHJpbSA9IGdldE1ldGhvZChpbnB1dCwgVE9fUFJJTUlUSVZFKTtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKGV4b3RpY1RvUHJpbSkge1xuICAgIGlmIChwcmVmID09PSB1bmRlZmluZWQpIHByZWYgPSAnZGVmYXVsdCc7XG4gICAgcmVzdWx0ID0gY2FsbChleG90aWNUb1ByaW0sIGlucHV0LCBwcmVmKTtcbiAgICBpZiAoIWlzT2JqZWN0KHJlc3VsdCkgfHwgaXNTeW1ib2wocmVzdWx0KSkgcmV0dXJuIHJlc3VsdDtcbiAgICB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbiAgfVxuICBpZiAocHJlZiA9PT0gdW5kZWZpbmVkKSBwcmVmID0gJ251bWJlcic7XG4gIHJldHVybiBvcmRpbmFyeVRvUHJpbWl0aXZlKGlucHV0LCBwcmVmKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xudmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXN5bWJvbCcpO1xuXG4vLyBgVG9Qcm9wZXJ0eUtleWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJvcGVydHlrZXlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBrZXkgPSB0b1ByaW1pdGl2ZShhcmd1bWVudCwgJ3N0cmluZycpO1xuICByZXR1cm4gaXNTeW1ib2woa2V5KSA/IGtleSA6IGtleSArICcnO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgZG9jdW1lbnQgPSBnbG9iYWwuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBFWElTVFMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBFWElTVFMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcblxuLy8gVGhhbmtzIHRvIElFOCBmb3IgaXRzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3JlYXRlRWxlbWVudCgnZGl2JyksICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfVxuICB9KS5hICE9PSA3O1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0luZGV4ZWRPYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhc093bihPLCBQKSkgcmV0dXJuIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcighY2FsbChwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZS5mLCBPLCBQKSwgT1tQXSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbi8vIFY4IH4gQ2hyb21lIDM2LVxuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzMzNFxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0sICdwcm90b3R5cGUnLCB7XG4gICAgdmFsdWU6IDQyLFxuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KS5wcm90b3R5cGUgIT09IDQyO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgJFN0cmluZyA9IFN0cmluZztcbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgQXNzZXJ0OiBUeXBlKGFyZ3VtZW50KSBpcyBPYmplY3RgXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoaXNPYmplY3QoYXJndW1lbnQpKSByZXR1cm4gYXJndW1lbnQ7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKCRTdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgYW4gb2JqZWN0Jyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG52YXIgVjhfUFJPVE9UWVBFX0RFRklORV9CVUcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdjgtcHJvdG90eXBlLWRlZmluZS1idWcnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleScpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBFTlVNRVJBQkxFID0gJ2VudW1lcmFibGUnO1xudmFyIENPTkZJR1VSQUJMRSA9ICdjb25maWd1cmFibGUnO1xudmFyIFdSSVRBQkxFID0gJ3dyaXRhYmxlJztcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0eWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0eVxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgPyBWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA/IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKHR5cGVvZiBPID09PSAnZnVuY3Rpb24nICYmIFAgPT09ICdwcm90b3R5cGUnICYmICd2YWx1ZScgaW4gQXR0cmlidXRlcyAmJiBXUklUQUJMRSBpbiBBdHRyaWJ1dGVzICYmICFBdHRyaWJ1dGVzW1dSSVRBQkxFXSkge1xuICAgIHZhciBjdXJyZW50ID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKTtcbiAgICBpZiAoY3VycmVudCAmJiBjdXJyZW50W1dSSVRBQkxFXSkge1xuICAgICAgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gICAgICBBdHRyaWJ1dGVzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IENPTkZJR1VSQUJMRSBpbiBBdHRyaWJ1dGVzID8gQXR0cmlidXRlc1tDT05GSUdVUkFCTEVdIDogY3VycmVudFtDT05GSUdVUkFCTEVdLFxuICAgICAgICBlbnVtZXJhYmxlOiBFTlVNRVJBQkxFIGluIEF0dHJpYnV0ZXMgPyBBdHRyaWJ1dGVzW0VOVU1FUkFCTEVdIDogY3VycmVudFtFTlVNRVJBQkxFXSxcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlXG4gICAgICB9O1xuICAgIH1cbiAgfSByZXR1cm4gJGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xufSA6ICRkZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiAkZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIGtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0RGVzY3JpcHRvciA9IERFU0NSSVBUT1JTICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbnZhciBFWElTVFMgPSBoYXNPd24oRnVuY3Rpb25Qcm90b3R5cGUsICduYW1lJyk7XG4vLyBhZGRpdGlvbmFsIHByb3RlY3Rpb24gZnJvbSBtaW5pZmllZCAvIG1hbmdsZWQgLyBkcm9wcGVkIGZ1bmN0aW9uIG5hbWVzXG52YXIgUFJPUEVSID0gRVhJU1RTICYmIChmdW5jdGlvbiBzb21ldGhpbmcoKSB7IC8qIGVtcHR5ICovIH0pLm5hbWUgPT09ICdzb21ldGhpbmcnO1xudmFyIENPTkZJR1VSQUJMRSA9IEVYSVNUUyAmJiAoIURFU0NSSVBUT1JTIHx8IChERVNDUklQVE9SUyAmJiBnZXREZXNjcmlwdG9yKEZ1bmN0aW9uUHJvdG90eXBlLCAnbmFtZScpLmNvbmZpZ3VyYWJsZSkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgRVhJU1RTOiBFWElTVFMsXG4gIFBST1BFUjogUFJPUEVSLFxuICBDT05GSUdVUkFCTEU6IENPTkZJR1VSQUJMRVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHN0b3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xuXG52YXIgZnVuY3Rpb25Ub1N0cmluZyA9IHVuY3VycnlUaGlzKEZ1bmN0aW9uLnRvU3RyaW5nKTtcblxuLy8gdGhpcyBoZWxwZXIgYnJva2VuIGluIGBjb3JlLWpzQDMuNC4xLTMuNC40YCwgc28gd2UgY2FuJ3QgdXNlIGBzaGFyZWRgIGhlbHBlclxuaWYgKCFpc0NhbGxhYmxlKHN0b3JlLmluc3BlY3RTb3VyY2UpKSB7XG4gIHN0b3JlLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb25Ub1N0cmluZyhpdCk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RvcmUuaW5zcGVjdFNvdXJjZTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIFdlYWtNYXAgPSBnbG9iYWwuV2Vha01hcDtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0NhbGxhYmxlKFdlYWtNYXApICYmIC9uYXRpdmUgY29kZS8udGVzdChTdHJpbmcoV2Vha01hcCkpO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xuXG52YXIga2V5cyA9IHNoYXJlZCgna2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIGtleXNba2V5XSB8fCAoa2V5c1trZXldID0gdWlkKGtleSkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfV0VBS19NQVAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2Vhay1tYXAtYmFzaWMtZGV0ZWN0aW9uJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcbnZhciBzaGFyZWRLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLWtleScpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcblxudmFyIE9CSkVDVF9BTFJFQURZX0lOSVRJQUxJWkVEID0gJ09iamVjdCBhbHJlYWR5IGluaXRpYWxpemVkJztcbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xudmFyIFdlYWtNYXAgPSBnbG9iYWwuV2Vha01hcDtcbnZhciBzZXQsIGdldCwgaGFzO1xuXG52YXIgZW5mb3JjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaGFzKGl0KSA/IGdldChpdCkgOiBzZXQoaXQsIHt9KTtcbn07XG5cbnZhciBnZXR0ZXJGb3IgPSBmdW5jdGlvbiAoVFlQRSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGl0KSB7XG4gICAgdmFyIHN0YXRlO1xuICAgIGlmICghaXNPYmplY3QoaXQpIHx8IChzdGF0ZSA9IGdldChpdCkpLnR5cGUgIT09IFRZUEUpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0luY29tcGF0aWJsZSByZWNlaXZlciwgJyArIFRZUEUgKyAnIHJlcXVpcmVkJyk7XG4gICAgfSByZXR1cm4gc3RhdGU7XG4gIH07XG59O1xuXG5pZiAoTkFUSVZFX1dFQUtfTUFQIHx8IHNoYXJlZC5zdGF0ZSkge1xuICB2YXIgc3RvcmUgPSBzaGFyZWQuc3RhdGUgfHwgKHNoYXJlZC5zdGF0ZSA9IG5ldyBXZWFrTWFwKCkpO1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1zZWxmLWFzc2lnbiAtLSBwcm90b3R5cGUgbWV0aG9kcyBwcm90ZWN0aW9uICovXG4gIHN0b3JlLmdldCA9IHN0b3JlLmdldDtcbiAgc3RvcmUuaGFzID0gc3RvcmUuaGFzO1xuICBzdG9yZS5zZXQgPSBzdG9yZS5zZXQ7XG4gIC8qIGVzbGludC1lbmFibGUgbm8tc2VsZi1hc3NpZ24gLS0gcHJvdG90eXBlIG1ldGhvZHMgcHJvdGVjdGlvbiAqL1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgaWYgKHN0b3JlLmhhcyhpdCkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIHN0b3JlLnNldChpdCwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHN0b3JlLmdldChpdCkgfHwge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBzdG9yZS5oYXMoaXQpO1xuICB9O1xufSBlbHNlIHtcbiAgdmFyIFNUQVRFID0gc2hhcmVkS2V5KCdzdGF0ZScpO1xuICBoaWRkZW5LZXlzW1NUQVRFXSA9IHRydWU7XG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICBpZiAoaGFzT3duKGl0LCBTVEFURSkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShpdCwgU1RBVEUsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBoYXNPd24oaXQsIFNUQVRFKSA/IGl0W1NUQVRFXSA6IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaGFzT3duKGl0LCBTVEFURSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldCxcbiAgZ2V0OiBnZXQsXG4gIGhhczogaGFzLFxuICBlbmZvcmNlOiBlbmZvcmNlLFxuICBnZXR0ZXJGb3I6IGdldHRlckZvclxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIENPTkZJR1VSQUJMRV9GVU5DVElPTl9OQU1FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLW5hbWUnKS5DT05GSUdVUkFCTEU7XG52YXIgaW5zcGVjdFNvdXJjZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnNwZWN0LXNvdXJjZScpO1xudmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUnKTtcblxudmFyIGVuZm9yY2VJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5lbmZvcmNlO1xudmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldDtcbnZhciAkU3RyaW5nID0gU3RyaW5nO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG52YXIgcmVwbGFjZSA9IHVuY3VycnlUaGlzKCcnLnJlcGxhY2UpO1xudmFyIGpvaW4gPSB1bmN1cnJ5VGhpcyhbXS5qb2luKTtcblxudmFyIENPTkZJR1VSQUJMRV9MRU5HVEggPSBERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHkoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9LCAnbGVuZ3RoJywgeyB2YWx1ZTogOCB9KS5sZW5ndGggIT09IDg7XG59KTtcblxudmFyIFRFTVBMQVRFID0gU3RyaW5nKFN0cmluZykuc3BsaXQoJ1N0cmluZycpO1xuXG52YXIgbWFrZUJ1aWx0SW4gPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSwgbmFtZSwgb3B0aW9ucykge1xuICBpZiAoc3RyaW5nU2xpY2UoJFN0cmluZyhuYW1lKSwgMCwgNykgPT09ICdTeW1ib2woJykge1xuICAgIG5hbWUgPSAnWycgKyByZXBsYWNlKCRTdHJpbmcobmFtZSksIC9eU3ltYm9sXFwoKFteKV0qKVxcKS4qJC8sICckMScpICsgJ10nO1xuICB9XG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZ2V0dGVyKSBuYW1lID0gJ2dldCAnICsgbmFtZTtcbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5zZXR0ZXIpIG5hbWUgPSAnc2V0ICcgKyBuYW1lO1xuICBpZiAoIWhhc093bih2YWx1ZSwgJ25hbWUnKSB8fCAoQ09ORklHVVJBQkxFX0ZVTkNUSU9OX05BTUUgJiYgdmFsdWUubmFtZSAhPT0gbmFtZSkpIHtcbiAgICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5KHZhbHVlLCAnbmFtZScsIHsgdmFsdWU6IG5hbWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KTtcbiAgICBlbHNlIHZhbHVlLm5hbWUgPSBuYW1lO1xuICB9XG4gIGlmIChDT05GSUdVUkFCTEVfTEVOR1RIICYmIG9wdGlvbnMgJiYgaGFzT3duKG9wdGlvbnMsICdhcml0eScpICYmIHZhbHVlLmxlbmd0aCAhPT0gb3B0aW9ucy5hcml0eSkge1xuICAgIGRlZmluZVByb3BlcnR5KHZhbHVlLCAnbGVuZ3RoJywgeyB2YWx1ZTogb3B0aW9ucy5hcml0eSB9KTtcbiAgfVxuICB0cnkge1xuICAgIGlmIChvcHRpb25zICYmIGhhc093bihvcHRpb25zLCAnY29uc3RydWN0b3InKSAmJiBvcHRpb25zLmNvbnN0cnVjdG9yKSB7XG4gICAgICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5KHZhbHVlLCAncHJvdG90eXBlJywgeyB3cml0YWJsZTogZmFsc2UgfSk7XG4gICAgLy8gaW4gVjggfiBDaHJvbWUgNTMsIHByb3RvdHlwZXMgb2Ygc29tZSBtZXRob2RzLCBsaWtlIGBBcnJheS5wcm90b3R5cGUudmFsdWVzYCwgYXJlIG5vbi13cml0YWJsZVxuICAgIH0gZWxzZSBpZiAodmFsdWUucHJvdG90eXBlKSB2YWx1ZS5wcm90b3R5cGUgPSB1bmRlZmluZWQ7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgdmFyIHN0YXRlID0gZW5mb3JjZUludGVybmFsU3RhdGUodmFsdWUpO1xuICBpZiAoIWhhc093bihzdGF0ZSwgJ3NvdXJjZScpKSB7XG4gICAgc3RhdGUuc291cmNlID0gam9pbihURU1QTEFURSwgdHlwZW9mIG5hbWUgPT0gJ3N0cmluZycgPyBuYW1lIDogJycpO1xuICB9IHJldHVybiB2YWx1ZTtcbn07XG5cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWV4dGVuZC1uYXRpdmUgLS0gcmVxdWlyZWRcbkZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZyA9IG1ha2VCdWlsdEluKGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gaXNDYWxsYWJsZSh0aGlzKSAmJiBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpLnNvdXJjZSB8fCBpbnNwZWN0U291cmNlKHRoaXMpO1xufSwgJ3RvU3RyaW5nJyk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgbWFrZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWFrZS1idWlsdC1pbicpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywga2V5LCB2YWx1ZSwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcbiAgdmFyIHNpbXBsZSA9IG9wdGlvbnMuZW51bWVyYWJsZTtcbiAgdmFyIG5hbWUgPSBvcHRpb25zLm5hbWUgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubmFtZSA6IGtleTtcbiAgaWYgKGlzQ2FsbGFibGUodmFsdWUpKSBtYWtlQnVpbHRJbih2YWx1ZSwgbmFtZSwgb3B0aW9ucyk7XG4gIGlmIChvcHRpb25zLmdsb2JhbCkge1xuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2UgZGVmaW5lR2xvYmFsUHJvcGVydHkoa2V5LCB2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghb3B0aW9ucy51bnNhZmUpIGRlbGV0ZSBPW2tleV07XG4gICAgICBlbHNlIGlmIChPW2tleV0pIHNpbXBsZSA9IHRydWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2UgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihPLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiAhb3B0aW9ucy5ub25Db25maWd1cmFibGUsXG4gICAgICB3cml0YWJsZTogIW9wdGlvbnMubm9uV3JpdGFibGVcbiAgICB9KTtcbiAgfSByZXR1cm4gTztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuXG4vLyBgTWF0aC50cnVuY2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW1hdGgudHJ1bmNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1tYXRoLXRydW5jIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gTWF0aC50cnVuYyB8fCBmdW5jdGlvbiB0cnVuYyh4KSB7XG4gIHZhciBuID0gK3g7XG4gIHJldHVybiAobiA+IDAgPyBmbG9vciA6IGNlaWwpKG4pO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdHJ1bmMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWF0aC10cnVuYycpO1xuXG4vLyBgVG9JbnRlZ2VyT3JJbmZpbml0eWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvaW50ZWdlcm9yaW5maW5pdHlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBudW1iZXIgPSArYXJndW1lbnQ7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gIHJldHVybiBudW1iZXIgIT09IG51bWJlciB8fCBudW1iZXIgPT09IDAgPyAwIDogdHJ1bmMobnVtYmVyKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xuXG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5cbi8vIEhlbHBlciBmb3IgYSBwb3B1bGFyIHJlcGVhdGluZyBjYXNlIG9mIHRoZSBzcGVjOlxuLy8gTGV0IGludGVnZXIgYmUgPyBUb0ludGVnZXIoaW5kZXgpLlxuLy8gSWYgaW50ZWdlciA8IDAsIGxldCByZXN1bHQgYmUgbWF4KChsZW5ndGggKyBpbnRlZ2VyKSwgMCk7IGVsc2UgbGV0IHJlc3VsdCBiZSBtaW4oaW50ZWdlciwgbGVuZ3RoKS5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgdmFyIGludGVnZXIgPSB0b0ludGVnZXJPckluZmluaXR5KGluZGV4KTtcbiAgcmV0dXJuIGludGVnZXIgPCAwID8gbWF4KGludGVnZXIgKyBsZW5ndGgsIDApIDogbWluKGludGVnZXIsIGxlbmd0aCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHknKTtcblxudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBgVG9MZW5ndGhgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b2xlbmd0aFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIGxlbiA9IHRvSW50ZWdlck9ySW5maW5pdHkoYXJndW1lbnQpO1xuICByZXR1cm4gbGVuID4gMCA/IG1pbihsZW4sIDB4MUZGRkZGRkZGRkZGRkYpIDogMDsgLy8gMiAqKiA1MyAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG5cbi8vIGBMZW5ndGhPZkFycmF5TGlrZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWxlbmd0aG9mYXJyYXlsaWtlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHRvTGVuZ3RoKG9iai5sZW5ndGgpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS57IGluZGV4T2YsIGluY2x1ZGVzIH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gbGVuZ3RoT2ZBcnJheUxpa2UoTyk7XG4gICAgaWYgKGxlbmd0aCA9PT0gMCkgcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT09IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gICAgICBpZiAodmFsdWUgIT09IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICBpZiAoKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pICYmIE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBBcnJheS5wcm90b3R5cGUuaW5jbHVkZXNgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmNsdWRlc1xuICBpbmNsdWRlczogY3JlYXRlTWV0aG9kKHRydWUpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmluZGV4T2ZgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmRleG9mXG4gIGluZGV4T2Y6IGNyZWF0ZU1ldGhvZChmYWxzZSlcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgaW5kZXhPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pbmNsdWRlcycpLmluZGV4T2Y7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xuXG52YXIgcHVzaCA9IHVuY3VycnlUaGlzKFtdLnB1c2gpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSAhaGFzT3duKGhpZGRlbktleXMsIGtleSkgJiYgaGFzT3duKE8sIGtleSkgJiYgcHVzaChyZXN1bHQsIGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXNPd24oTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+aW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcHVzaChyZXN1bHQsIGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gSUU4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IFtcbiAgJ2NvbnN0cnVjdG9yJyxcbiAgJ2hhc093blByb3BlcnR5JyxcbiAgJ2lzUHJvdG90eXBlT2YnLFxuICAncHJvcGVydHlJc0VudW1lcmFibGUnLFxuICAndG9Mb2NhbGVTdHJpbmcnLFxuICAndG9TdHJpbmcnLFxuICAndmFsdWVPZidcbl07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGludGVybmFsT2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcblxudmFyIGhpZGRlbktleXMgPSBlbnVtQnVnS2V5cy5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5bmFtZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHluYW1lcyAtLSBzYWZlXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuIGludGVybmFsT2JqZWN0S2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eXN5bWJvbHMgLS0gc2FmZVxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcblxudmFyIGNvbmNhdCA9IHVuY3VycnlUaGlzKFtdLmNvbmNhdCk7XG5cbi8vIGFsbCBvYmplY3Qga2V5cywgaW5jbHVkZXMgbm9uLWVudW1lcmFibGUgYW5kIHN5bWJvbHNcbm1vZHVsZS5leHBvcnRzID0gZ2V0QnVpbHRJbignUmVmbGVjdCcsICdvd25LZXlzJykgfHwgZnVuY3Rpb24gb3duS2V5cyhpdCkge1xuICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUuZihhbk9iamVjdChpdCkpO1xuICB2YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlLmY7XG4gIHJldHVybiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPyBjb25jYXQoa2V5cywgZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSkgOiBrZXlzO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBvd25LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL293bi1rZXlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc291cmNlLCBleGNlcHRpb25zKSB7XG4gIHZhciBrZXlzID0gb3duS2V5cyhzb3VyY2UpO1xuICB2YXIgZGVmaW5lUHJvcGVydHkgPSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mO1xuICB2YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlLmY7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIGlmICghaGFzT3duKHRhcmdldCwga2V5KSAmJiAhKGV4Y2VwdGlvbnMgJiYgaGFzT3duKGV4Y2VwdGlvbnMsIGtleSkpKSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgfVxuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIHJlcGxhY2VtZW50ID0gLyN8XFwucHJvdG90eXBlXFwuLztcblxudmFyIGlzRm9yY2VkID0gZnVuY3Rpb24gKGZlYXR1cmUsIGRldGVjdGlvbikge1xuICB2YXIgdmFsdWUgPSBkYXRhW25vcm1hbGl6ZShmZWF0dXJlKV07XG4gIHJldHVybiB2YWx1ZSA9PT0gUE9MWUZJTEwgPyB0cnVlXG4gICAgOiB2YWx1ZSA9PT0gTkFUSVZFID8gZmFsc2VcbiAgICA6IGlzQ2FsbGFibGUoZGV0ZWN0aW9uKSA/IGZhaWxzKGRldGVjdGlvbilcbiAgICA6ICEhZGV0ZWN0aW9uO1xufTtcblxudmFyIG5vcm1hbGl6ZSA9IGlzRm9yY2VkLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgcmV0dXJuIFN0cmluZyhzdHJpbmcpLnJlcGxhY2UocmVwbGFjZW1lbnQsICcuJykudG9Mb3dlckNhc2UoKTtcbn07XG5cbnZhciBkYXRhID0gaXNGb3JjZWQuZGF0YSA9IHt9O1xudmFyIE5BVElWRSA9IGlzRm9yY2VkLk5BVElWRSA9ICdOJztcbnZhciBQT0xZRklMTCA9IGlzRm9yY2VkLlBPTFlGSUxMID0gJ1AnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRm9yY2VkO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKS5mO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBkZWZpbmVCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbicpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcbnZhciBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcHktY29uc3RydWN0b3ItcHJvcGVydGllcycpO1xudmFyIGlzRm9yY2VkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWZvcmNlZCcpO1xuXG4vKlxuICBvcHRpb25zLnRhcmdldCAgICAgICAgIC0gbmFtZSBvZiB0aGUgdGFyZ2V0IG9iamVjdFxuICBvcHRpb25zLmdsb2JhbCAgICAgICAgIC0gdGFyZ2V0IGlzIHRoZSBnbG9iYWwgb2JqZWN0XG4gIG9wdGlvbnMuc3RhdCAgICAgICAgICAgLSBleHBvcnQgYXMgc3RhdGljIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucHJvdG8gICAgICAgICAgLSBleHBvcnQgYXMgcHJvdG90eXBlIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucmVhbCAgICAgICAgICAgLSByZWFsIHByb3RvdHlwZSBtZXRob2QgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLmZvcmNlZCAgICAgICAgIC0gZXhwb3J0IGV2ZW4gaWYgdGhlIG5hdGl2ZSBmZWF0dXJlIGlzIGF2YWlsYWJsZVxuICBvcHRpb25zLmJpbmQgICAgICAgICAgIC0gYmluZCBtZXRob2RzIHRvIHRoZSB0YXJnZXQsIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy53cmFwICAgICAgICAgICAtIHdyYXAgY29uc3RydWN0b3JzIHRvIHByZXZlbnRpbmcgZ2xvYmFsIHBvbGx1dGlvbiwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLnVuc2FmZSAgICAgICAgIC0gdXNlIHRoZSBzaW1wbGUgYXNzaWdubWVudCBvZiBwcm9wZXJ0eSBpbnN0ZWFkIG9mIGRlbGV0ZSArIGRlZmluZVByb3BlcnR5XG4gIG9wdGlvbnMuc2hhbSAgICAgICAgICAgLSBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gIG9wdGlvbnMuZW51bWVyYWJsZSAgICAgLSBleHBvcnQgYXMgZW51bWVyYWJsZSBwcm9wZXJ0eVxuICBvcHRpb25zLmRvbnRDYWxsR2V0U2V0IC0gcHJldmVudCBjYWxsaW5nIGEgZ2V0dGVyIG9uIHRhcmdldFxuICBvcHRpb25zLm5hbWUgICAgICAgICAgIC0gdGhlIC5uYW1lIG9mIHRoZSBmdW5jdGlvbiBpZiBpdCBkb2VzIG5vdCBtYXRjaCB0aGUga2V5XG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3B0aW9ucywgc291cmNlKSB7XG4gIHZhciBUQVJHRVQgPSBvcHRpb25zLnRhcmdldDtcbiAgdmFyIEdMT0JBTCA9IG9wdGlvbnMuZ2xvYmFsO1xuICB2YXIgU1RBVElDID0gb3B0aW9ucy5zdGF0O1xuICB2YXIgRk9SQ0VELCB0YXJnZXQsIGtleSwgdGFyZ2V0UHJvcGVydHksIHNvdXJjZVByb3BlcnR5LCBkZXNjcmlwdG9yO1xuICBpZiAoR0xPQkFMKSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsO1xuICB9IGVsc2UgaWYgKFNUQVRJQykge1xuICAgIHRhcmdldCA9IGdsb2JhbFtUQVJHRVRdIHx8IGRlZmluZUdsb2JhbFByb3BlcnR5KFRBUkdFVCwge30pO1xuICB9IGVsc2Uge1xuICAgIHRhcmdldCA9IGdsb2JhbFtUQVJHRVRdICYmIGdsb2JhbFtUQVJHRVRdLnByb3RvdHlwZTtcbiAgfVxuICBpZiAodGFyZ2V0KSBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICBzb3VyY2VQcm9wZXJ0eSA9IHNvdXJjZVtrZXldO1xuICAgIGlmIChvcHRpb25zLmRvbnRDYWxsR2V0U2V0KSB7XG4gICAgICBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KTtcbiAgICAgIHRhcmdldFByb3BlcnR5ID0gZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLnZhbHVlO1xuICAgIH0gZWxzZSB0YXJnZXRQcm9wZXJ0eSA9IHRhcmdldFtrZXldO1xuICAgIEZPUkNFRCA9IGlzRm9yY2VkKEdMT0JBTCA/IGtleSA6IFRBUkdFVCArIChTVEFUSUMgPyAnLicgOiAnIycpICsga2V5LCBvcHRpb25zLmZvcmNlZCk7XG4gICAgLy8gY29udGFpbmVkIGluIHRhcmdldFxuICAgIGlmICghRk9SQ0VEICYmIHRhcmdldFByb3BlcnR5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0eXBlb2Ygc291cmNlUHJvcGVydHkgPT0gdHlwZW9mIHRhcmdldFByb3BlcnR5KSBjb250aW51ZTtcbiAgICAgIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMoc291cmNlUHJvcGVydHksIHRhcmdldFByb3BlcnR5KTtcbiAgICB9XG4gICAgLy8gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuICAgIGlmIChvcHRpb25zLnNoYW0gfHwgKHRhcmdldFByb3BlcnR5ICYmIHRhcmdldFByb3BlcnR5LnNoYW0pKSB7XG4gICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoc291cmNlUHJvcGVydHksICdzaGFtJywgdHJ1ZSk7XG4gICAgfVxuICAgIGRlZmluZUJ1aWx0SW4odGFyZ2V0LCBrZXksIHNvdXJjZVByb3BlcnR5LCBvcHRpb25zKTtcbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG4vLyBgSXNBcnJheWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWlzYXJyYXlcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1pc2FycmF5IC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZ3VtZW50KSB7XG4gIHJldHVybiBjbGFzc29mKGFyZ3VtZW50KSA9PT0gJ0FycmF5Jztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBTYWZhcmkgPCAxMyBkb2VzIG5vdCB0aHJvdyBhbiBlcnJvciBpbiB0aGlzIGNhc2VcbnZhciBTSUxFTlRfT05fTk9OX1dSSVRBQkxFX0xFTkdUSF9TRVQgPSBERVNDUklQVE9SUyAmJiAhZnVuY3Rpb24gKCkge1xuICAvLyBtYWtlcyBubyBzZW5zZSB3aXRob3V0IHByb3BlciBzdHJpY3QgbW9kZSBzdXBwb3J0XG4gIGlmICh0aGlzICE9PSB1bmRlZmluZWQpIHJldHVybiB0cnVlO1xuICB0cnkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShbXSwgJ2xlbmd0aCcsIHsgd3JpdGFibGU6IGZhbHNlIH0pLmxlbmd0aCA9IDE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIGVycm9yIGluc3RhbmNlb2YgVHlwZUVycm9yO1xuICB9XG59KCk7XG5cbm1vZHVsZS5leHBvcnRzID0gU0lMRU5UX09OX05PTl9XUklUQUJMRV9MRU5HVEhfU0VUID8gZnVuY3Rpb24gKE8sIGxlbmd0aCkge1xuICBpZiAoaXNBcnJheShPKSAmJiAhZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sICdsZW5ndGgnKS53cml0YWJsZSkge1xuICAgIHRocm93IG5ldyAkVHlwZUVycm9yKCdDYW5ub3Qgc2V0IHJlYWQgb25seSAubGVuZ3RoJyk7XG4gIH0gcmV0dXJuIE8ubGVuZ3RoID0gbGVuZ3RoO1xufSA6IGZ1bmN0aW9uIChPLCBsZW5ndGgpIHtcbiAgcmV0dXJuIE8ubGVuZ3RoID0gbGVuZ3RoO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gMHgxRkZGRkZGRkZGRkZGRjsgLy8gMiAqKiA1MyAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPiBNQVhfU0FGRV9JTlRFR0VSKSB0aHJvdyAkVHlwZUVycm9yKCdNYXhpbXVtIGFsbG93ZWQgaW5kZXggZXhjZWVkZWQnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xudmFyIHNldEFycmF5TGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNldC1sZW5ndGgnKTtcbnZhciBkb2VzTm90RXhjZWVkU2FmZUludGVnZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9lcy1ub3QtZXhjZWVkLXNhZmUtaW50ZWdlcicpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbnZhciBJTkNPUlJFQ1RfVE9fTEVOR1RIID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gW10ucHVzaC5jYWxsKHsgbGVuZ3RoOiAweDEwMDAwMDAwMCB9LCAxKSAhPT0gNDI5NDk2NzI5Nztcbn0pO1xuXG4vLyBWOCA8PSAxMjEgYW5kIFNhZmFyaSA8PSAxNS40OyBGRiA8IDIzIHRocm93cyBJbnRlcm5hbEVycm9yXG4vLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0xMjY4MVxudmFyIHByb3BlckVycm9yT25Ob25Xcml0YWJsZUxlbmd0aCA9IGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoW10sICdsZW5ndGgnLCB7IHdyaXRhYmxlOiBmYWxzZSB9KS5wdXNoKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIGVycm9yIGluc3RhbmNlb2YgVHlwZUVycm9yO1xuICB9XG59O1xuXG52YXIgRk9SQ0VEID0gSU5DT1JSRUNUX1RPX0xFTkdUSCB8fCAhcHJvcGVyRXJyb3JPbk5vbldyaXRhYmxlTGVuZ3RoKCk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUucHVzaGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5wdXNoXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgYXJpdHk6IDEsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzIC0tIHJlcXVpcmVkIGZvciBgLmxlbmd0aGBcbiAgcHVzaDogZnVuY3Rpb24gcHVzaChpdGVtKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCh0aGlzKTtcbiAgICB2YXIgbGVuID0gbGVuZ3RoT2ZBcnJheUxpa2UoTyk7XG4gICAgdmFyIGFyZ0NvdW50ID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBkb2VzTm90RXhjZWVkU2FmZUludGVnZXIobGVuICsgYXJnQ291bnQpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJnQ291bnQ7IGkrKykge1xuICAgICAgT1tsZW5dID0gYXJndW1lbnRzW2ldO1xuICAgICAgbGVuKys7XG4gICAgfVxuICAgIHNldEFycmF5TGVuZ3RoKE8sIGxlbik7XG4gICAgcmV0dXJuIGxlbjtcbiAgfVxufSk7XG4iLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbi8qISBUd2lua2xlLmpzIC0gbW9yZWJpdHMuanMgKi9cblxuLyoqXG4gKiBBIGxpYnJhcnkgZnVsbCBvZiBsb3RzIG9mIGdvb2RuZXNzIGZvciB1c2VyIHNjcmlwdHMgb24gTWVkaWFXaWtpIHdpa2lzLlxuICpcbiAqIFRoZSBoaWdobGlnaHRzIGluY2x1ZGU6XG4gKiAtIHtAbGluayBNb3JlYml0cy53aWtpLmFwaX0gLSBtYWtlIGNhbGxzIHRvIHRoZSBNZWRpYVdpa2kgQVBJXG4gKiAtIHtAbGluayBNb3JlYml0cy53aWtpLnBhZ2V9IC0gbW9kaWZ5IHBhZ2VzIG9uIHRoZSB3aWtpIChlZGl0LCByZXZlcnQsIGRlbGV0ZSwgZXRjLilcbiAqIC0ge0BsaW5rIE1vcmViaXRzLmRhdGV9IC0gZW5oYW5jZWQgZGF0ZSBvYmplY3QgcHJvY2Vzc2luZywgc29ydCBvZiBhIGxpZ2h0IG1vbWVudC5qc1xuICogLSB7QGxpbmsgTW9yZWJpdHMucXVpY2tGb3JtfSAtIGdlbmVyYXRlIHF1aWNrIEhUTUwgZm9ybXMgb24gdGhlIGZseVxuICogLSB7QGxpbmsgTW9yZWJpdHMuc2ltcGxlV2luZG93fSAtIGEgd3JhcHBlciBmb3IgalF1ZXJ5IFVJIERpYWxvZyB3aXRoIGEgY3VzdG9tIGxvb2sgYW5kIGV4dHJhIGZlYXR1cmVzXG4gKiAtIHtAbGluayBNb3JlYml0cy5zdGF0dXN9IC0gYSByb3VnaC1hbmQtcmVhZHkgc3RhdHVzIG1lc3NhZ2UgZGlzcGxheWVyLCB1c2VkIGJ5IHRoZSBNb3JlYml0cy53aWtpIGNsYXNzZXNcbiAqIC0ge0BsaW5rIE1vcmViaXRzLndpa2l0ZXh0fSAtIHV0aWxpdGllcyBmb3IgZGVhbGluZyB3aXRoIHdpa2l0ZXh0XG4gKiAtIHtAbGluayBNb3JlYml0cy5zdHJpbmd9IC0gdXRpbGl0aWVzIGZvciBtYW5pcHVsYXRpbmcgc3RyaW5nc1xuICogLSB7QGxpbmsgTW9yZWJpdHMuYXJyYXl9IC0gdXRpbGl0aWVzIGZvciBtYW5pcHVsYXRpbmcgYXJyYXlzXG4gKiAtIHtAbGluayBNb3JlYml0cy5pcH0gLSB1dGlsaXRpZXMgdG8gaGVscCBwcm9jZXNzIElQIGFkZHJlc3Nlc1xuICpcbiAqIERlcGVuZGVuY2llczpcbiAqIC0gVGhlIHdob2xlIHRoaW5nIHJlbGllcyBvbiBqUXVlcnkuICBCdXQgbW9zdCB3aWtpcyBzaG91bGQgcHJvdmlkZSB0aGlzIGJ5IGRlZmF1bHQuXG4gKiAtIHtAbGluayBNb3JlYml0cy5xdWlja0Zvcm19LCB7QGxpbmsgTW9yZWJpdHMuc2ltcGxlV2luZG93fSwgYW5kIHtAbGluayBNb3JlYml0cy5zdGF0dXN9IHJlbHkgb24gdGhlIFwibW9yZWJpdHMuY3NzXCIgZmlsZSBmb3IgdGhlaXIgc3R5bGluZy5cbiAqIC0ge0BsaW5rIE1vcmViaXRzLnNpbXBsZVdpbmRvd30gYW5kIHtAbGluayBNb3JlYml0cy5xdWlja0Zvcm19IHRvb2x0aXBzIHJlbHkgb24galF1ZXJ5IFVJIERpYWxvZyAoZnJvbSBSZXNvdXJjZUxvYWRlciBtb2R1bGUgbmFtZSAnanF1ZXJ5LnVpJykuXG4gKiAtIFRvIGNyZWF0ZSBhIGdhZGdldCBiYXNlZCBvbiBtb3JlYml0cy5qcywgdXNlIHRoaXMgc3ludGF4IGluIE1lZGlhV2lraTpHYWRnZXRzLWRlZmluaXRpb246XG4gKiAgICAgLSBgKkdhZGdldE5hbWVbUmVzb3VyY2VMb2FkZXJ8ZGVwZW5kZW5jaWVzPW1lZGlhd2lraS51c2VyLG1lZGlhd2lraS51dGlsLG1lZGlhd2lraS5UaXRsZSxqcXVlcnkudWldfG1vcmViaXRzLmpzfG1vcmViaXRzLmNzc3xHYWRnZXROYW1lLmpzYFxuICogLSBBbHRlcm5hdGl2ZWx5LCB5b3UgY2FuIGNvbmZpZ3VyZSBtb3JlYml0cy5qcyBhcyBhIGhpZGRlbiBnYWRnZXQgaW4gTWVkaWFXaWtpOkdhZGdldHMtZGVmaW5pdGlvbjpcbiAqICAgICAtIGAqbW9yZWJpdHNbUmVzb3VyY2VMb2FkZXJ8ZGVwZW5kZW5jaWVzPW1lZGlhd2lraS51c2VyLG1lZGlhd2lraS51dGlsLG1lZGlhd2lraS5UaXRsZSxqcXVlcnkudWl8aGlkZGVuXXxtb3JlYml0cy5qc3xtb3JlYml0cy5jc3NgXG4gKiAgICAgYW5kIHRoZW4gbG9hZCBleHQuZ2FkZ2V0Lm1vcmViaXRzIGFzIG9uZSBvZiB0aGUgZGVwZW5kZW5jaWVzIGZvciB0aGUgbmV3IGdhZGdldC5cbiAqXG4gKiBBbGwgdGhlIHN0dWZmIGhlcmUgd29ya3Mgb24gYWxsIGJyb3dzZXJzIGZvciB3aGljaCBNZWRpYVdpa2kgcHJvdmlkZXMgSmF2YVNjcmlwdCBzdXBwb3J0LlxuICpcbiAqIFRoaXMgbGlicmFyeSBpcyBtYWludGFpbmVkIGJ5IHRoZSBtYWludGFpbmVycyBvZiBUd2lua2xlLlxuICogRm9yIHF1ZXJpZXMsIHN1Z2dlc3Rpb25zLCBoZWxwLCBldGMuLCBoZWFkIHRvIFtIZWxwOlR3aW5rbGVdKGh0dHBzOi8vd3d3LnFpdXdlbmJhaWtlLmNuL3dpa2kvSDpUVykuXG4gKiBUaGUgbGF0ZXN0IGRldmVsb3BtZW50IHNvdXJjZSBpcyBhdmFpbGFibGUgYXQge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS93aWtpbWVkaWEtZ2FkZ2V0cy90d2lua2xlL2Jsb2IvbWFzdGVyL21vcmViaXRzLmpzfEdpdEh1Yn0uXG4gKlxuICogQHBhcmFtIHtKUXVlcnl9ICRcbiAqIEBuYW1lc3BhY2UgTW9yZWJpdHNcbiAqL1xuaW1wb3J0ICcuL21vcmViaXRzLmxlc3MnO1xuaW1wb3J0IHtnZW5lcmF0ZUFycmF5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG4oZnVuY3Rpb24gbW9yZWJpdHMoJCkge1xuXHQvLyBXcmFwIGVudGlyZSBmaWxlIHdpdGggYW5vbnltb3VzIGZ1bmN0aW9uXG5cdC8qKiBAbGVuZHMgTW9yZWJpdHMgKi9cblx0Y29uc3QgTW9yZWJpdHMgPSB7fTtcblx0d2luZG93Lk1vcmViaXRzID0gTW9yZWJpdHM7IC8vIGFsbG93IGdsb2JhbCBhY2Nlc3Ncblx0Ly8gTm8gTW9yZWJpdHMuaTE4biBhdCB0aGlzIHRpbWVcblx0LyoqXG5cdCAqIFdpa2ktc3BlY2lmaWMgY29uZmlndXJhdGlvbnMgZm9yIE1vcmViaXRzXG5cdCAqL1xuXHRNb3JlYml0cy5sMTBuID0ge1xuXHRcdC8qKlxuXHRcdCAqIExvY2FsIGFsaWFzZXMgZm9yIFwicmVkaXJlY3RcIiBtYWdpYyB3b3JkLlxuXHRcdCAqIENoZWNrIHVzaW5nIGFwaS5waHA/YWN0aW9uPXF1ZXJ5JmZvcm1hdD1qc29uJm1ldGE9c2l0ZWluZm8mZm9ybWF0dmVyc2lvbj0yJnNpcHJvcD1tYWdpY3dvcmRzXG5cdFx0ICovXG5cdFx0cmVkaXJlY3RUYWdBbGlhc2VzOiBbJyNSRURJUkVDVCcsICcj6YeN5a6a5ZCRJ10sXG5cdFx0LyoqXG5cdFx0ICogVGFrZXMgYSBzdHJpbmcgYXMgYXJndW1lbnQgYW5kIGNoZWNrcyBpZiBpdCBpcyBhIHRpbWVzdGFtcCBvciBub3Rcblx0XHQgKiBJZiBub3QsIGl0IHJldHVybnMgbnVsbC4gSWYgeWVzLCBpdCByZXR1cm5zIGFuIGFycmF5IG9mIGludGVnZXJzXG5cdFx0ICogaW4gdGhlIGZvcm1hdCBbeWVhciwgbW9udGgsIGRhdGUsIGhvdXIsIG1pbnV0ZSwgc2Vjb25kXVxuXHRcdCAqIHdoaWNoIGNhbiBiZSBwYXNzZWQgdG8gRGF0ZS5VVEMoKVxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHN0clxuXHRcdCAqIEByZXR1cm5zIHtudW1iZXJbXSB8IG51bGx9XG5cdFx0ICovXG5cdFx0c2lnbmF0dXJlVGltZXN0YW1wRm9ybWF0OiAoc3RyKSA9PiB7XG5cdFx0XHRjb25zdCByZ3hVVEMgPSAvKFxcZHs0fSnlubQoXFxkezEsMn0p5pyIKFxcZHsxLDJ9KeaXpSBcXCguXFwpIChcXGR7Mn0pOihcXGR7Mn0pIFxcKFVUQ1xcKS87IC8vIFlZWVnlubRNb250aOaciERE5pelICh3KSBISDptbSAoVVRDKVxuXHRcdFx0Y29uc3Qgcmd4Q1NUID0gLyhcXGR7NH0p5bm0KFxcZHsxLDJ9KeaciChcXGR7MSwyfSnml6UgXFwoLlxcKSAoXFxkezJ9KTooXFxkezJ9KSBcXChDU1RcXCkvOyAvLyBZWVlZ5bm0TW9udGjmnIhEROaXpSAodykgSEg6bW0gKENTVClcblx0XHRcdGNvbnN0IG1hdGNoID0gcmd4VVRDLmV4ZWMoc3RyKSB8fCByZ3hDU1QuZXhlYyhzdHIpO1xuXHRcdFx0Y29uc3QgbWF0Y2hDU1QgPSByZ3hDU1QuZXhlYyhzdHIpO1xuXHRcdFx0aWYgKCFtYXRjaCkge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblx0XHRcdGNvbnN0IG1vbnRoID0gTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLm1vbnRocy5pbmRleE9mKG1hdGNoWzRdKTtcblx0XHRcdGlmIChtb250aCA9PT0gLTEpIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0XHQvLyAuLi4uLiB5ZWFyIC4uLi4gbW9udGggLi4uIGRhdGUgLi4uLiBob3VyIC4uLiBtaW51dGVcblx0XHRcdHJldHVybiBtYXRjaENTVFxuXHRcdFx0XHQ/IFttYXRjaFsxXSwgbWF0Y2hbMl0gLSAxLCBtYXRjaFszXSwgbWF0Y2hbNF0gLSA4LCBtYXRjaFs1XV1cblx0XHRcdFx0OiBbbWF0Y2hbMV0sIG1hdGNoWzJdIC0gMSwgbWF0Y2hbM10sIG1hdGNoWzRdLCBtYXRjaFs1XV07XG5cdFx0fSxcblx0fTtcblx0LyoqXG5cdCAqIFNpbXBsZSBoZWxwZXIgZnVuY3Rpb24gdG8gc2VlIHdoYXQgZ3JvdXBzIGEgdXNlciBtaWdodCBiZWxvbmcuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBncm91cCAtIGUuZy4gYHN5c29wYCwgYGF1dG9jb25maXJtZWRgLCBldGMuXG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0TW9yZWJpdHMudXNlcklzSW5Hcm91cCA9IChncm91cCkgPT4ge1xuXHRcdHJldHVybiBtdy5jb25maWcuZ2V0KCd3Z1VzZXJHcm91cHMnKS5pbmNsdWRlcyhncm91cCk7XG5cdH07XG5cdC8qKlxuXHQgKiBIYXJkY29kZXMgd2hldGhlciB0aGUgdXNlciBpcyBhIHN5c29wLCB1c2VkIGEgbG90LlxuXHQgKlxuXHQgKiBAdHlwZSB7Ym9vbGVhbn1cblx0ICovXG5cdE1vcmViaXRzLnVzZXJJc1N5c29wID1cblx0XHRNb3JlYml0cy51c2VySXNJbkdyb3VwKCdzeXNvcCcpIHx8IE1vcmViaXRzLnVzZXJJc0luR3JvdXAoJ3N0ZXdhcmQnKSB8fCBNb3JlYml0cy51c2VySXNJbkdyb3VwKCdxaXV3ZW4nKTtcblx0LyoqXG5cdCAqIERlcHJlY2F0ZWQgYXMgb2YgRmVicnVhcnkgMjAyMSwgdXNlIHtAbGluayBNb3JlYml0cy5pcC5zYW5pdGl6ZUlQdjZ9LlxuXHQgKlxuXHQgKiBAZGVwcmVjYXRlZCBVc2Uge0BsaW5rIE1vcmViaXRzLmlwLnNhbml0aXplSVB2Nn0uXG5cdCAqIENvbnZlcnRzIGFuIElQdjYgYWRkcmVzcyB0byB0aGUgY2Fub25pY2FsIGZvcm0gc3RvcmVkIGFuZCB1c2VkIGJ5IE1lZGlhV2lraS5cblx0ICogSmF2YVNjcmlwdCB0cmFuc2xhdGlvbiBvZiB0aGUge0BsaW5rIGh0dHBzOi8vZ2Vycml0Lndpa2ltZWRpYS5vcmcvci9wbHVnaW5zL2dpdGlsZXMvbWVkaWF3aWtpL2NvcmUvKy84ZWI2YWMzZTg0ZWEzMzEyZDM5MWNhOTZjMTJjNDllM2FkMDc1M2JiL2luY2x1ZGVzL3V0aWxzL0lQLnBocCMxMzF8YElQOjpzYW5pdGl6ZUlQKClgfVxuXHQgKiBmdW5jdGlvbiBmcm9tIHRoZSBJUFV0aWxzIGxpYnJhcnkuICBBZGRyZXNzZXMgYXJlIHZlcmJvc2UsIHVwcGVyY2FzZSxcblx0ICogbm9ybWFsaXplZCwgYW5kIGV4cGFuZGVkIHRvIDggd29yZHMuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBhZGRyZXNzIC0gVGhlIElQdjYgYWRkcmVzcywgd2l0aCBvciB3aXRob3V0IENJRFIuXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdCAqL1xuXHRNb3JlYml0cy5zYW5pdGl6ZUlQdjYgPSAoYWRkcmVzcykgPT4ge1xuXHRcdGNvbnNvbGUud2Fybihcblx0XHRcdCdbTW9yZWJpdHNdIE5PVEU6IE1vcmViaXRzLnNhbml0aXplSVB2NiB3YXMgcmVuYW1lZCB0byBNb3JlYml0cy5pcC5zYW5pdGl6ZUlQdjYgaW4gRmVicnVhcnkgMjAyMSwgcGxlYXNlIHVzZSB0aGF0IGluc3RlYWQnXG5cdFx0KTtcblx0XHRyZXR1cm4gTW9yZWJpdHMuaXAuc2FuaXRpemVJUHY2KGFkZHJlc3MpO1xuXHR9O1xuXHQvKipcblx0ICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBjdXJyZW50IHBhZ2UgaXMgYSByZWRpcmVjdCBvciBzb2Z0IHJlZGlyZWN0LiBGYWlsc1xuXHQgKiB0byBkZXRlY3Qgc29mdCByZWRpcmVjdHMgb24gZWRpdCwgaGlzdG9yeSwgZXRjLiBwYWdlcy4gIFdpbGwgYXR0ZW1wdCB0b1xuXHQgKiBkZXRlY3QgTW9kdWxlOlJmRCwgd2l0aCB0aGUgc2FtZSBmYWlsdXJlIHBvaW50cy5cblx0ICpcblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRNb3JlYml0cy5pc1BhZ2VSZWRpcmVjdCA9ICgpID0+IHtcblx0XHRjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblx0XHRyZXR1cm4gISEoXG5cdFx0XHRtdy5jb25maWcuZ2V0KCd3Z0lzUmVkaXJlY3QnKSB8fFxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NvZnRyZWRpcmVjdCcpIHx8XG5cdFx0XHQkYm9keS5maW5kKCcuYm94LVJmRCcpLmxlbmd0aCB8fFxuXHRcdFx0JGJvZHkuZmluZCgnLmJveC1SZWRpcmVjdF9jYXRlZ29yeV9zaGVsbCcpLmxlbmd0aFxuXHRcdCk7XG5cdH07XG5cdC8qKlxuXHQgKiBTdG9yZXMgYSBub3JtYWxpemVkICh1bmRlcnNjb3JlcyBjb252ZXJ0ZWQgdG8gc3BhY2VzKSB2ZXJzaW9uIG9mIHRoZVxuXHQgKiBgd2dQYWdlTmFtZWAgdmFyaWFibGUuXG5cdCAqXG5cdCAqIEB0eXBlIHtzdHJpbmd9XG5cdCAqL1xuXHRNb3JlYml0cy5wYWdlTmFtZU5vcm0gPSBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJykucmVwbGFjZSgvXy9nLCAnICcpO1xuXHQvKipcblx0ICogQ3JlYXRlIGEgc3RyaW5nIGZvciB1c2UgaW4gcmVnZXggbWF0Y2hpbmcgYSBwYWdlIG5hbWUuICBBY2NvdW50cyBmb3Jcblx0ICogbGVhZGluZyBjaGFyYWN0ZXIncyBjYXBpdGFsaXphdGlvbiwgdW5kZXJzY29yZXMgYXMgc3BhY2VzLCBhbmQgc3BlY2lhbFxuXHQgKiBjaGFyYWN0ZXJzIGJlaW5nIGVzY2FwZWQuICBTZWUgYWxzbyB7QGxpbmsgTW9yZWJpdHMubmFtZXNwYWNlUmVnZXh9LlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gcGFnZU5hbWUgLSBQYWdlIG5hbWUgd2l0aG91dCBuYW1lc3BhY2UuXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9IC0gRm9yIGEgcGFnZSBuYW1lIGBGb28gYmFyYCwgcmV0dXJucyB0aGUgc3RyaW5nIGBbRmZdb29bXyBdYmFyYC5cblx0ICovXG5cdE1vcmViaXRzLnBhZ2VOYW1lUmVnZXggPSAocGFnZU5hbWUpID0+IHtcblx0XHRpZiAocGFnZU5hbWUgPT09ICcnKSB7XG5cdFx0XHRyZXR1cm4gJyc7XG5cdFx0fVxuXHRcdGNvbnN0IFtmaXJzdENoYXJdID0gcGFnZU5hbWU7XG5cdFx0Y29uc3QgcmVtYWluZGVyID0gTW9yZWJpdHMuc3RyaW5nLmVzY2FwZVJlZ0V4cChwYWdlTmFtZS5zbGljZSgxKSk7XG5cdFx0aWYgKG13LlRpdGxlLnBocENoYXJUb1VwcGVyKGZpcnN0Q2hhcikgIT09IGZpcnN0Q2hhci50b0xvd2VyQ2FzZSgpKSB7XG5cdFx0XHRyZXR1cm4gYFske213LlRpdGxlLnBocENoYXJUb1VwcGVyKGZpcnN0Q2hhcil9JHtmaXJzdENoYXIudG9Mb3dlckNhc2UoKX1dJHtyZW1haW5kZXJ9YDtcblx0XHR9XG5cdFx0cmV0dXJuIE1vcmViaXRzLnN0cmluZy5lc2NhcGVSZWdFeHAoZmlyc3RDaGFyKSArIHJlbWFpbmRlcjtcblx0fTtcblx0LyoqXG5cdCAqIENvbnZlcnRzIHN0cmluZyBvciBhcnJheSBvZiBET00gbm9kZXMgaW50byBhbiBIVE1MIGZyYWdtZW50LlxuXHQgKiBXaWtpbGluayBzeW50YXggKGBbWy4uLl1dYCkgaXMgdHJhbnNmb3JtZWQgaW50byBIVE1MIGFuY2hvci5cblx0ICogVXNlZCBpbiBNb3JlYml0cy5xdWlja0Zvcm0gYW5kIE1vcmViaXRzLnN0YXR1c1xuXHQgKlxuXHQgKiBAaW50ZXJuYWxcblx0ICogQHBhcmFtIHtzdHJpbmd8Tm9kZXwoc3RyaW5nfE5vZGUpW119IGlucHV0XG5cdCAqIEByZXR1cm5zIHtEb2N1bWVudEZyYWdtZW50fVxuXHQgKi9cblx0TW9yZWJpdHMuY3JlYXRlSHRtbCA9IChpbnB1dCkgPT4ge1xuXHRcdGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXHRcdGlmICghaW5wdXQpIHtcblx0XHRcdHJldHVybiBmcmFnbWVudDtcblx0XHR9XG5cdFx0aW5wdXQgPSBnZW5lcmF0ZUFycmF5KGlucHV0KTtcblx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgaW5wdXQpIHtcblx0XHRcdGlmIChlbGVtZW50IGluc3RhbmNlb2YgTm9kZSkge1xuXHRcdFx0XHRmcmFnbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZvciAoY29uc3Qgbm9kZSBvZiAkLnBhcnNlSFRNTChNb3JlYml0cy5jcmVhdGVIdG1sLnJlbmRlcldpa2lsaW5rcyhlbGVtZW50KSkpIHtcblx0XHRcdFx0XHRmcmFnbWVudC5hcHBlbmRDaGlsZChub2RlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZnJhZ21lbnQ7XG5cdH07XG5cdC8qKlxuXHQgKiBDb252ZXJ0cyB3aWtpbGlua3MgdG8gSFRNTCBhbmNob3IgdGFncy5cblx0ICpcblx0ICogQHBhcmFtIHRleHRcblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRNb3JlYml0cy5jcmVhdGVIdG1sLnJlbmRlcldpa2lsaW5rcyA9ICh0ZXh0KSA9PiB7XG5cdFx0Y29uc3QgdWIgPSBuZXcgTW9yZWJpdHMudW5iaW5kZXIodGV4dCk7XG5cdFx0Ly8gRG9uJ3QgY29udmVydCB3aWtpbGlua3Mgd2l0aGluIGNvZGUgdGFncyBhcyB0aGV5J3JlIHVzZWQgZm9yIGRpc3BsYXlpbmcgd2lraS1jb2RlXG5cdFx0dWIudW5iaW5kKCc8Y29kZT4nLCAnPC9jb2RlPicpO1xuXHRcdHViLmNvbnRlbnQgPSB1Yi5jb250ZW50LnJlcGxhY2UoL1xcW1xcWzo/KD86KFtefFxcXV0rPylcXHwpPyhbXlxcXXxdKz8pXFxdXFxdL2csIChfLCB0YXJnZXQsIHRleHRfKSA9PiB7XG5cdFx0XHRpZiAoIXRhcmdldCkge1xuXHRcdFx0XHR0YXJnZXQgPSB0ZXh0Xztcblx0XHRcdH1cblx0XHRcdHJldHVybiBgPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiJHttdy51dGlsLmdldFVybCh0YXJnZXQpfVwiIHRpdGxlPVwiJHt0YXJnZXQucmVwbGFjZShcblx0XHRcdFx0L1wiL2csXG5cdFx0XHRcdCcmIzM0Oydcblx0XHRcdCl9XCI+JHt0ZXh0X308L2E+YDtcblx0XHR9KTtcblx0XHRyZXR1cm4gdWIucmViaW5kKCk7XG5cdH07XG5cdC8qKlxuXHQgKiBDcmVhdGUgYSBzdHJpbmcgZm9yIHVzZSBpbiByZWdleCBtYXRjaGluZyBhbGwgbmFtZXNwYWNlIGFsaWFzZXMsIHJlZ2FyZGxlc3Ncblx0ICogb2YgdGhlIGNhcGl0YWxpemF0aW9uIGFuZCB1bmRlcnNjb3Jlcy9zcGFjZXMuICBEb2Vzbid0IGluY2x1ZGUgdGhlIG9wdGlvbmFsXG5cdCAqIGxlYWRpbmcgYDpgLCBidXQgaWYgdGhlcmUncyBtb3JlIHRoYW4gb25lIGl0ZW0sIHdyYXBzIHRoZSBsaXN0IGluIGFcblx0ICogbm9uLWNhcHR1cmluZyBncm91cC4gIFRoaXMgbWVhbnMgeW91IGNhbiBkbyBgTW9yZWJpdHMubmFtZXNwYWNlUmVnZXgoWzRdKSArXG5cdCAqICc6JyArIE1vcmViaXRzLnBhZ2VOYW1lUmVnZXgoJ1R3aW5rbGUnKWAgdG8gbWF0Y2ggYSBmdWxsIHBhZ2UuICBVc2VzXG5cdCAqIHtAbGluayBNb3JlYml0cy5wYWdlTmFtZVJlZ2V4fS5cblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJbXX0gbmFtZXNwYWNlcyAtIEFycmF5IG9mIG5hbWVzcGFjZSBudW1iZXJzLiAgVW51c2VkL2ludmFsaWRcblx0ICogbmFtZXNwYWNlIG51bWJlcnMgYXJlIHNpbGVudGx5IGRpc2NhcmRlZC5cblx0ICogQGV4YW1wbGVcblx0ICogLy8gcmV0dXJucyAnKD86W0ZmXVtJaV1bTGxdW0VlXXxbSWldW01tXVtBYV1bR2ddW0VlXSknXG5cdCAqIE1vcmViaXRzLm5hbWVzcGFjZVJlZ2V4KFs2XSlcblx0ICogQHJldHVybnMge3N0cmluZ30gLSBSZWdleC1zdWl0YWJsZSBzdHJpbmcgb2YgYWxsIG5hbWVzcGFjZSBhbGlhc2VzLlxuXHQgKi9cblx0TW9yZWJpdHMubmFtZXNwYWNlUmVnZXggPSAobmFtZXNwYWNlcykgPT4ge1xuXHRcdG5hbWVzcGFjZXMgPSBnZW5lcmF0ZUFycmF5KG5hbWVzcGFjZXMpO1xuXHRcdGNvbnN0IGFsaWFzZXMgPSBbXTtcblx0XHRsZXQgcmVnZXg7XG5cdFx0Zm9yIChjb25zdCBbbmFtZSwgbnVtYmVyXSBvZiBPYmplY3QuZW50cmllcyhtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZUlkcycpKSkge1xuXHRcdFx0aWYgKG5hbWVzcGFjZXMuaW5jbHVkZXMobnVtYmVyKSkge1xuXHRcdFx0XHQvLyBOYW1lc3BhY2VzIGFyZSBjb21wbGV0ZWx5IGFnbm9zdGljIGFzIHRvIGNhc2UsXG5cdFx0XHRcdC8vIGFuZCBhIHJlZ2V4IHN0cmluZyBpcyBtb3JlIHVzZWZ1bC9jb21wYXRpYmxlIHRoYW4gYSBSZWdFeHAgb2JqZWN0LFxuXHRcdFx0XHQvLyBzbyB3ZSBhY2NlcHQgYW55IGNhc2luZyBmb3IgYW55IGxldHRlci5cblx0XHRcdFx0YWxpYXNlcy5wdXNoKFxuXHRcdFx0XHRcdFsuLi5uYW1lXVxuXHRcdFx0XHRcdFx0Lm1hcCgoY2hhcikgPT4ge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gTW9yZWJpdHMucGFnZU5hbWVSZWdleChjaGFyKTtcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQuam9pbignJylcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0c3dpdGNoIChhbGlhc2VzLmxlbmd0aCkge1xuXHRcdFx0Y2FzZSAwOlxuXHRcdFx0XHRyZWdleCA9ICcnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0W3JlZ2V4XSA9IGFsaWFzZXM7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmVnZXggPSBgKD86JHthbGlhc2VzLmpvaW4oJ3wnKX0pYDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdHJldHVybiByZWdleDtcblx0fTtcblx0LyogKioqKioqKioqKioqKioqKiBNb3JlYml0cy5xdWlja0Zvcm0gKioqKioqKioqKioqKioqKiAqL1xuXHQvKipcblx0ICogQ3JlYXRpb24gb2Ygc2ltcGxlIGFuZCBzdGFuZGFyZCBmb3JtcyB3aXRob3V0IG11Y2ggc3BlY2lmaWMgY29kaW5nLlxuXHQgKlxuXHQgKiBAbmFtZXNwYWNlIE1vcmViaXRzLnF1aWNrRm9ybVxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHNcblx0ICogQGNsYXNzXG5cdCAqIEBwYXJhbSB7ZXZlbnR9IGV2ZW50IC0gRnVuY3Rpb24gdG8gZXhlY3V0ZSB3aGVuIGZvcm0gaXMgc3VibWl0dGVkLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW2V2ZW50VHlwZT1zdWJtaXRdIC0gVHlwZSBvZiB0aGUgZXZlbnQuXG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0gPSBmdW5jdGlvbiAoZXZlbnQsIGV2ZW50VHlwZSkge1xuXHRcdHRoaXMucm9vdCA9IG5ldyBNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudCh7XG5cdFx0XHR0eXBlOiAnZm9ybScsXG5cdFx0XHRldmVudCxcblx0XHRcdGV2ZW50VHlwZSxcblx0XHR9KTtcblx0fTtcblx0LyoqXG5cdCAqIFJlbmRlcnMgdGhlIEhUTUwgb3V0cHV0IG9mIHRoZSBxdWlja0Zvcm0uXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5xdWlja0Zvcm1cblx0ICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgcmV0ID0gdGhpcy5yb290LnJlbmRlcigpO1xuXHRcdHJldC5uYW1lcyA9IHt9O1xuXHRcdHJldHVybiByZXQ7XG5cdH07XG5cdC8qKlxuXHQgKiBBcHBlbmQgZWxlbWVudCB0byB0aGUgZm9ybS5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybVxuXHQgKiBAcGFyYW0geyhvYmplY3R8TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQpfSBkYXRhIC0gQSBxdWlja2Zvcm0gZWxlbWVudCwgb3IgdGhlIG9iamVjdCB3aXRoIHdoaWNoXG5cdCAqIGEgcXVpY2tmb3JtIGVsZW1lbnQgaXMgY29uc3RydWN0ZWQuXG5cdCAqIEByZXR1cm5zIHtNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudH0gLSBTYW1lIGFzIHdoYXQgaXMgcGFzc2VkIHRvIHRoZSBmdW5jdGlvbi5cblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5wcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24gKGRhdGEpIHtcblx0XHRyZXR1cm4gdGhpcy5yb290LmFwcGVuZChkYXRhKTtcblx0fTtcblx0LyoqXG5cdCAqIENyZWF0ZSBhIG5ldyBlbGVtZW50IGZvciB0aGUgdGhlIGZvcm0uXG5cdCAqXG5cdCAqIEluZGV4IHRvIE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50IHR5cGVzOlxuXHQgKiAtIEdsb2JhbCBhdHRyaWJ1dGVzOiBpZCwgY2xhc3NOYW1lLCBzdHlsZSwgdG9vbHRpcCwgZXh0cmEsICRkYXRhLCBhZG1pbm9ubHlcblx0ICogLSBgc2VsZWN0YDogQSBjb21ibyBib3ggKGFrYSBkcm9wLWRvd24pLlxuXHQgKiAgICAgLSBBdHRyaWJ1dGVzOiBuYW1lLCBsYWJlbCwgbXVsdGlwbGUsIHNpemUsIGxpc3QsIGV2ZW50LCBkaXNhYmxlZFxuXHQgKiAgLSBgb3B0aW9uYDogQW4gZWxlbWVudCBmb3IgYSBjb21ibyBib3guXG5cdCAqICAgICAgLSBBdHRyaWJ1dGVzOiB2YWx1ZSwgbGFiZWwsIHNlbGVjdGVkLCBkaXNhYmxlZFxuXHQgKiAgLSBgb3B0Z3JvdXBgOiBBIGdyb3VwIG9mIFwib3B0aW9uXCJzLlxuXHQgKiAgICAgIC0gQXR0cmlidXRlczogbGFiZWwsIGxpc3Rcblx0ICogIC0gYGZpZWxkYDogQSBmaWVsZHNldCAoYWthIGdyb3VwIGJveCkuXG5cdCAqICAgICAgLSBBdHRyaWJ1dGVzOiBuYW1lLCBsYWJlbCwgZGlzYWJsZWRcblx0ICogIC0gYGNoZWNrYm94YDogQSBjaGVja2JveC4gTXVzdCB1c2UgXCJsaXN0XCIgcGFyYW1ldGVyLlxuXHQgKiAgICAgIC0gQXR0cmlidXRlczogbmFtZSwgbGlzdCwgZXZlbnRcblx0ICogICAgICAtIEF0dHJpYnV0ZXMgKHdpdGhpbiBsaXN0KTogbmFtZSwgbGFiZWwsIHZhbHVlLCBjaGVja2VkLCBkaXNhYmxlZCwgZXZlbnQsIHN1Ymdyb3VwXG5cdCAqICAtIGByYWRpb2A6IEEgcmFkaW8gYnV0dG9uLiBNdXN0IHVzZSBcImxpc3RcIiBwYXJhbWV0ZXIuXG5cdCAqICAgICAgLSBBdHRyaWJ1dGVzOiBuYW1lLCBsaXN0LCBldmVudFxuXHQgKiAgICAgIC0gQXR0cmlidXRlcyAod2l0aGluIGxpc3QpOiBuYW1lLCBsYWJlbCwgdmFsdWUsIGNoZWNrZWQsIGRpc2FibGVkLCBldmVudCwgc3ViZ3JvdXBcblx0ICogIC0gYGlucHV0YDogQSB0ZXh0IGlucHV0IGJveC5cblx0ICogICAgICAtIEF0dHJpYnV0ZXM6IG5hbWUsIGxhYmVsLCB2YWx1ZSwgc2l6ZSwgcGxhY2Vob2xkZXIsIG1heGxlbmd0aCwgZGlzYWJsZWQsIHJlcXVpcmVkLCByZWFkb25seSwgZXZlbnRcblx0ICogIC0gYG51bWJlcmA6IEEgbnVtYmVyIGlucHV0IGJveC5cblx0ICogICAgICAtIEF0dHJpYnV0ZXM6IEV2ZXJ5dGhpbmcgdGhlIHRleHQgYGlucHV0YCBoYXMsIGFzIHdlbGwgYXM6IG1pbiwgbWF4LCBzdGVwLCBsaXN0XG5cdCAqICAtIGBkeW5pbnB1dGA6IEEgc2V0IG9mIHRleHQgYm94ZXMgd2l0aCBcIlJlbW92ZVwiIGJ1dHRvbnMgYW5kIGFuIFwiQWRkXCIgYnV0dG9uLlxuXHQgKiAgICAgIC0gQXR0cmlidXRlczogbmFtZSwgbGFiZWwsIG1pbiwgbWF4LCBzdWJsYWJlbCwgdmFsdWUsIHNpemUsIG1heGxlbmd0aCwgZXZlbnRcblx0ICogIC0gYGhpZGRlbmA6IEFuIGludmlzaWJsZSBmb3JtIGZpZWxkLlxuXHQgKiAgICAgIC0gQXR0cmlidXRlczogbmFtZSwgdmFsdWVcblx0ICogIC0gYGhlYWRlcmA6IEEgbGV2ZWwgNSBoZWFkZXIuXG5cdCAqICAgICAgLSBBdHRyaWJ1dGVzOiBsYWJlbFxuXHQgKiAgLSBgZGl2YDogQSBnZW5lcmljIHBsYWNlaG9sZGVyIGVsZW1lbnQgb3IgbGFiZWwuXG5cdCAqICAgICAgLSBBdHRyaWJ1dGVzOiBuYW1lLCBsYWJlbFxuXHQgKiAgLSBgc3VibWl0YDogQSBzdWJtaXQgYnV0dG9uLiBNb3JlYml0cy5zaW1wbGVXaW5kb3cgbW92ZXMgdGhlc2UgdG8gdGhlIGZvb3RlciBvZiB0aGUgZGlhbG9nLlxuXHQgKiAgICAgIC0gQXR0cmlidXRlczogbmFtZSwgbGFiZWwsIGRpc2FibGVkXG5cdCAqICAtIGBidXR0b25gOiBBIGdlbmVyaWMgYnV0dG9uLlxuXHQgKiAgICAgIC0gQXR0cmlidXRlczogbmFtZSwgbGFiZWwsIGRpc2FibGVkLCBldmVudFxuXHQgKiAgLSBgdGV4dGFyZWFgOiBBIGJpZywgbXVsdGktbGluZSB0ZXh0IGJveC5cblx0ICogICAgICAtIEF0dHJpYnV0ZXM6IG5hbWUsIGxhYmVsLCB2YWx1ZSwgY29scywgcm93cywgZGlzYWJsZWQsIHJlcXVpcmVkLCByZWFkb25seVxuXHQgKiAgLSBgZnJhZ21lbnRgOiBBIERvY3VtZW50RnJhZ21lbnQgb2JqZWN0LlxuXHQgKiAgICAgIC0gTm8gYXR0cmlidXRlcywgYW5kIG5vIGdsb2JhbCBhdHRyaWJ1dGVzIGV4Y2VwdCBhZG1pbm9ubHkuXG5cdCAqIFRoZXJlIGlzIHNvbWUgZGlmZmVyZW5jZSBvbiBob3cgdHlwZXMgaGFuZGxlIHRoZSBgbGFiZWxgIGF0dHJpYnV0ZTpcblx0ICogLSBgZGl2YCwgYHNlbGVjdGAsIGBmaWVsZGAsIGBjaGVja2JveGAvYHJhZGlvYCwgYGlucHV0YCwgYHRleHRhcmVhYCwgYGhlYWRlcmAsIGFuZCBgZHluaW5wdXRgIGNhbiBhY2NlcHQgYW4gYXJyYXkgb2YgaXRlbXMsXG5cdCAqIGFuZCB0aGUgbGFiZWwgaXRlbShzKSBjYW4gYmUgYEVsZW1lbnRgcy5cblx0ICogLSBgb3B0aW9uYCwgYG9wdGdyb3VwYCwgYF9keW5pbnB1dF9lbGVtZW50YCwgYHN1Ym1pdGAsIGFuZCBgYnV0dG9uYCBhY2NlcHQgb25seSBhIHNpbmdsZSBzdHJpbmcuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5xdWlja0Zvcm1cblx0ICogQGNsYXNzXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIC0gT2JqZWN0IHJlcHJlc2VudGluZyB0aGUgcXVpY2tmb3JtIGVsZW1lbnQuIFNob3VsZFxuXHQgKiBzcGVjaWZ5IG9uZSBvZiB0aGUgYXZhaWxhYmxlIHR5cGVzIGZyb20gdGhlIGluZGV4IGFib3ZlLCBhcyB3ZWxsIGFzIGFueVxuXHQgKiByZWxldmFudCBhbmQgYXZhaWxhYmxlIGF0dHJpYnV0ZXMuXG5cdCAqIEBleGFtcGxlIG5ldyBNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudCh7XG5cdCAqICAgICBuYW1lOiAndGFyZ2V0Jyxcblx0ICogICAgIHR5cGU6ICdpbnB1dCcsXG5cdCAqICAgICBsYWJlbDogJ1lvdXIgdGFyZ2V0OicsXG5cdCAqICAgICB0b29sdGlwOiAnRW50ZXIgeW91ciB0YXJnZXQuIFJlcXVpcmVkLicsXG5cdCAqICAgICByZXF1aXJlZDogdHJ1ZVxuXHQgKiB9KTtcblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50ID0gZnVuY3Rpb24gKGRhdGEpIHtcblx0XHR0aGlzLmRhdGEgPSBkYXRhO1xuXHRcdHRoaXMuY2hpbGRzID0gW107XG5cdH07XG5cdC8qKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnRcblx0ICogQHR5cGUge251bWJlcn1cblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50LmlkID0gMDtcblx0LyoqXG5cdCAqIEFwcGVuZHMgYW4gZWxlbWVudCB0byBjdXJyZW50IGVsZW1lbnQuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudFxuXHQgKiBAcGFyYW0ge01vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50fSBkYXRhIC0gQSBxdWlja0Zvcm0gZWxlbWVudCBvciB0aGUgb2JqZWN0IHJlcXVpcmVkIHRvXG5cdCAqIGNyZWF0ZSB0aGUgcXVpY2tGb3JtIGVsZW1lbnQuXG5cdCAqIEByZXR1cm5zIHtNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudH0gVGhlIHNhbWUgZWxlbWVudCBwYXNzZWQgaW4uXG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudC5wcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24gKGRhdGEpIHtcblx0XHRsZXQgY2hpbGQ7XG5cdFx0aWYgKGRhdGEgaW5zdGFuY2VvZiBNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudCkge1xuXHRcdFx0Y2hpbGQgPSBkYXRhO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjaGlsZCA9IG5ldyBNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudChkYXRhKTtcblx0XHR9XG5cdFx0dGhpcy5jaGlsZHMucHVzaChjaGlsZCk7XG5cdFx0cmV0dXJuIGNoaWxkO1xuXHR9O1xuXHQvKipcblx0ICogUmVuZGVycyB0aGUgSFRNTCBvdXRwdXQgZm9yIHRoZSBxdWlja0Zvcm0gZWxlbWVudC4gIFRoaXMgc2hvdWxkIGJlIGNhbGxlZFxuXHQgKiB3aXRob3V0IHBhcmFtZXRlcnM6IGBmb3JtLnJlbmRlcigpYC5cblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IGludGVybmFsU3ViZ3JvdXBJZFxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnRcblx0ICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChpbnRlcm5hbFN1Ymdyb3VwSWQpIHtcblx0XHRjb25zdCBjdXJyZW50Tm9kZSA9IHRoaXMuY29tcHV0ZSh0aGlzLmRhdGEsIGludGVybmFsU3ViZ3JvdXBJZCk7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcy5sZW5ndGg7ICsraSkge1xuXHRcdFx0Ly8gZG8gbm90IHBhc3MgaW50ZXJuYWxfc3ViZ3JvdXBfaWQgdG8gcmVjdXJzaXZlIGNhbGxzXG5cdFx0XHRjdXJyZW50Tm9kZVsxXS5hcHBlbmRDaGlsZCh0aGlzLmNoaWxkc1tpXS5yZW5kZXIoKSk7XG5cdFx0fVxuXHRcdHJldHVybiBjdXJyZW50Tm9kZVswXTtcblx0fTtcblx0LyoqXG5cdCAqIEBwYXJhbSB7Kn0gZGF0YVxuXHQgKiBAcGFyYW0ge251bWJlcn0gaW5JZFxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnRcblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50LnByb3RvdHlwZS5jb21wdXRlID0gZnVuY3Rpb24gKGRhdGEsIGluSWQpIHtcblx0XHRsZXQgbm9kZTtcblx0XHRsZXQgY2hpbGRDb250YWluZXIgPSBudWxsO1xuXHRcdGxldCBsYWJlbDtcblx0XHRjb25zdCBpZCA9IGAke2luSWQgPyBgJHtpbklkfV9gIDogJyd9bm9kZV8ke01vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50LmlkKyt9YDtcblx0XHRpZiAoZGF0YS5hZG1pbm9ubHkgJiYgIU1vcmViaXRzLnVzZXJJc1N5c29wKSB7XG5cdFx0XHQvLyBoZWxsIGhhY2sgYWxwaGFcblx0XHRcdGRhdGEudHlwZSA9ICdoaWRkZW4nO1xuXHRcdH1cblx0XHRsZXQgaTtcblx0XHRsZXQgY3VycmVudDtcblx0XHRsZXQgc3Vibm9kZTtcblx0XHRzd2l0Y2ggKGRhdGEudHlwZSkge1xuXHRcdFx0Y2FzZSAnZm9ybSc6XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5cdFx0XHRcdG5vZGUuY2xhc3NOYW1lID0gJ3F1aWNrZm9ybSc7XG5cdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zY3JpcHQtdXJsXG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCdhY3Rpb24nLCAnamF2YXNjcmlwdDp2b2lkKDApOycpO1xuXHRcdFx0XHRpZiAoZGF0YS5ldmVudCkge1xuXHRcdFx0XHRcdG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihkYXRhLmV2ZW50VHlwZSB8fCAnc3VibWl0JywgZGF0YS5ldmVudCwgZmFsc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnZnJhZ21lbnQnOlxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXHRcdFx0XHQvLyBmcmFnbWVudHMgY2FuJ3QgaGF2ZSBhbnkgYXR0cmlidXRlcywgc28ganVzdCByZXR1cm4gaXQgc3RyYWlnaHQgYXdheVxuXHRcdFx0XHRyZXR1cm4gW25vZGUsIG5vZGVdO1xuXHRcdFx0Y2FzZSAnc2VsZWN0Jzoge1xuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCdpZCcsIGBkaXZfJHtpZH1gKTtcblx0XHRcdFx0aWYgKGRhdGEubGFiZWwpIHtcblx0XHRcdFx0XHRsYWJlbCA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKSk7XG5cdFx0XHRcdFx0bGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBpZCk7XG5cdFx0XHRcdFx0bGFiZWwuYXBwZW5kQ2hpbGQoTW9yZWJpdHMuY3JlYXRlSHRtbChkYXRhLmxhYmVsKSk7XG5cdFx0XHRcdFx0Ly8gTm8gbWFyZ2luXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zdCBzZWxlY3QgPSBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpKTtcblx0XHRcdFx0aWYgKGRhdGEuZXZlbnQpIHtcblx0XHRcdFx0XHRzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZGF0YS5ldmVudCwgZmFsc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLm11bHRpcGxlKSB7XG5cdFx0XHRcdFx0c2VsZWN0LnNldEF0dHJpYnV0ZSgnbXVsdGlwbGUnLCAnbXVsdGlwbGUnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5zaXplKSB7XG5cdFx0XHRcdFx0c2VsZWN0LnNldEF0dHJpYnV0ZSgnc2l6ZScsIGRhdGEuc2l6ZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEuZGlzYWJsZWQpIHtcblx0XHRcdFx0XHRzZWxlY3QuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBkYXRhLm5hbWUpO1xuXHRcdFx0XHRpZiAoZGF0YS5saXN0KSB7XG5cdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGRhdGEubGlzdC5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHRcdFx0Y3VycmVudCA9IGRhdGEubGlzdFtpXTtcblx0XHRcdFx0XHRcdGlmIChjdXJyZW50Lmxpc3QpIHtcblx0XHRcdFx0XHRcdFx0Y3VycmVudC50eXBlID0gJ29wdGdyb3VwJztcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGN1cnJlbnQudHlwZSA9ICdvcHRpb24nO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0c3Vibm9kZSA9IHRoaXMuY29tcHV0ZShjdXJyZW50KTtcblx0XHRcdFx0XHRcdHNlbGVjdC5hcHBlbmRDaGlsZChzdWJub2RlWzBdKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2hpbGRDb250YWluZXIgPSBzZWxlY3Q7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0Y2FzZSAnb3B0aW9uJzpcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuXHRcdFx0XHRub2RlLnZhbHVlcyA9IGRhdGEudmFsdWU7XG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGRhdGEudmFsdWUpO1xuXHRcdFx0XHRpZiAoZGF0YS5zZWxlY3RlZCkge1xuXHRcdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLmRpc2FibGVkKSB7XG5cdFx0XHRcdFx0bm9kZS5kaXNhYmxlZCA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gQWRkIGhpZGRlbiBhdHRyXG5cdFx0XHRcdGlmIChkYXRhLmhpZGRlbikge1xuXHRcdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ2xhYmVsJywgZGF0YS5sYWJlbCk7XG5cdFx0XHRcdG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZGF0YS5sYWJlbCkpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ29wdGdyb3VwJzpcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGdyb3VwJyk7XG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCdsYWJlbCcsIGRhdGEubGFiZWwpO1xuXHRcdFx0XHRpZiAoZGF0YS5saXN0KSB7XG5cdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGRhdGEubGlzdC5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHRcdFx0Y3VycmVudCA9IGRhdGEubGlzdFtpXTtcblx0XHRcdFx0XHRcdGN1cnJlbnQudHlwZSA9ICdvcHRpb24nOyAvLyBtdXN0IGJlIG9wdGlvbnMgaGVyZVxuXHRcdFx0XHRcdFx0c3Vibm9kZSA9IHRoaXMuY29tcHV0ZShjdXJyZW50KTtcblx0XHRcdFx0XHRcdG5vZGUuYXBwZW5kQ2hpbGQoc3Vibm9kZVswXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnZmllbGQnOlxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKTtcblx0XHRcdFx0bGFiZWwgPSBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xlZ2VuZCcpKTtcblx0XHRcdFx0bGFiZWwuYXBwZW5kQ2hpbGQoTW9yZWJpdHMuY3JlYXRlSHRtbChkYXRhLmxhYmVsKSk7XG5cdFx0XHRcdGlmIChkYXRhLm5hbWUpIHtcblx0XHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgnbmFtZScsIGRhdGEubmFtZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEuZGlzYWJsZWQpIHtcblx0XHRcdFx0XHRub2RlLmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2NoZWNrYm94Jzpcblx0XHRcdGNhc2UgJ3JhZGlvJzpcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0XHRpZiAoZGF0YS5saXN0KSB7XG5cdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGRhdGEubGlzdC5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHRcdFx0Y29uc3QgY3VySWQgPSBgJHtpZH1fJHtpfWA7XG5cdFx0XHRcdFx0XHRjdXJyZW50ID0gZGF0YS5saXN0W2ldO1xuXHRcdFx0XHRcdFx0bGV0IGN1ckRpdjtcblx0XHRcdFx0XHRcdGlmIChjdXJyZW50LnR5cGUgPT09ICdoZWFkZXInKSB7XG5cdFx0XHRcdFx0XHRcdC8vIGlubGluZSBoYWNrXG5cdFx0XHRcdFx0XHRcdGN1ckRpdiA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDYnKSk7XG5cdFx0XHRcdFx0XHRcdGN1ckRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjdXJyZW50LmxhYmVsKSk7XG5cdFx0XHRcdFx0XHRcdGlmIChjdXJyZW50LnRvb2x0aXApIHtcblx0XHRcdFx0XHRcdFx0XHRNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudC5nZW5lcmF0ZVRvb2x0aXAoY3VyRGl2LCBjdXJyZW50KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGN1ckRpdiA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuXHRcdFx0XHRcdFx0Ly8gQWRkIGhpZGRlbiBhdHRyXG5cdFx0XHRcdFx0XHRpZiAoY3VycmVudC5oaWRkZW4pIHtcblx0XHRcdFx0XHRcdFx0Y3VyRGl2LnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgJycpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0c3Vibm9kZSA9IGN1ckRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKTtcblx0XHRcdFx0XHRcdHN1Ym5vZGUudmFsdWVzID0gY3VycmVudC52YWx1ZTtcblx0XHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGN1cnJlbnQudmFsdWUpO1xuXHRcdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBkYXRhLnR5cGUpO1xuXHRcdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ2lkJywgY3VySWQpO1xuXHRcdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBjdXJyZW50Lm5hbWUgfHwgZGF0YS5uYW1lKTtcblx0XHRcdFx0XHRcdC8vIElmIG5hbWUgaXMgcHJvdmlkZWQgb24gdGhlIGluZGl2aWR1YWwgY2hlY2tib3gsIGFkZCBhIGRhdGEtc2luZ2xlXG5cdFx0XHRcdFx0XHQvLyBhdHRyaWJ1dGUgd2hpY2ggaW5kaWNhdGVzIGl0IGlzbid0IHBhcnQgb2YgYSBsaXN0IG9mIGNoZWNrYm94ZXMgd2l0aFxuXHRcdFx0XHRcdFx0Ly8gc2FtZSBuYW1lLiBVc2VkIGluIGdldElucHV0RGF0YSgpXG5cdFx0XHRcdFx0XHRpZiAoY3VycmVudC5uYW1lKSB7XG5cdFx0XHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCdkYXRhLXNpbmdsZScsICdkYXRhLXNpbmdsZScpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnQuY2hlY2tlZCkge1xuXHRcdFx0XHRcdFx0XHRzdWJub2RlLmNoZWNrZWQgPSB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnQuZGlzYWJsZWQpIHtcblx0XHRcdFx0XHRcdFx0c3Vibm9kZS5kaXNhYmxlZCA9IHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRsYWJlbCA9IGN1ckRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpKTtcblx0XHRcdFx0XHRcdGxhYmVsLmFwcGVuZENoaWxkKE1vcmViaXRzLmNyZWF0ZUh0bWwoY3VycmVudC5sYWJlbCkpO1xuXHRcdFx0XHRcdFx0bGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjdXJJZCk7XG5cdFx0XHRcdFx0XHRpZiAoY3VycmVudC50b29sdGlwKSB7XG5cdFx0XHRcdFx0XHRcdE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50LmdlbmVyYXRlVG9vbHRpcChsYWJlbCwgY3VycmVudCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvLyBzdHlsZXMgZ28gb24gdGhlIGxhYmVsLCBkb2Vzbid0IG1ha2Ugc2Vuc2UgdG8gc3R5bGUgYSBjaGVja2JveC9yYWRpb1xuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnQuc3R5bGUpIHtcblx0XHRcdFx0XHRcdFx0bGFiZWwuc2V0QXR0cmlidXRlKCdzdHlsZScsIGN1cnJlbnQuc3R5bGUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0bGV0IGV2ZW50O1xuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnQuc3ViZ3JvdXApIHtcblx0XHRcdFx0XHRcdFx0bGV0IHRtcGdyb3VwID0gY3VycmVudC5zdWJncm91cDtcblx0XHRcdFx0XHRcdFx0dG1wZ3JvdXAgPSBnZW5lcmF0ZUFycmF5KHRtcGdyb3VwKTtcblx0XHRcdFx0XHRcdFx0Y29uc3Qgc3ViZ3JvdXBSYXcgPSBuZXcgTW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQoe1xuXHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdkaXYnLFxuXHRcdFx0XHRcdFx0XHRcdGlkOiBgJHtpZH1fJHtpfV9zdWJncm91cGAsXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRmb3IgKGNvbnN0IGVsIG9mIHRtcGdyb3VwKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgbmV3RWwgPSB7XG5cdFx0XHRcdFx0XHRcdFx0XHQuLi5lbCxcblx0XHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0XHRcdGlmICghbmV3RWwudHlwZSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0bmV3RWwudHlwZSA9IGRhdGEudHlwZTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0bmV3RWwubmFtZSA9IGAke2N1cnJlbnQubmFtZSB8fCBkYXRhLm5hbWV9LiR7bmV3RWwubmFtZX1gO1xuXHRcdFx0XHRcdFx0XHRcdHN1Ymdyb3VwUmF3LmFwcGVuZChuZXdFbCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Y29uc3Qgc3ViZ3JvdXAgPSBzdWJncm91cFJhdy5yZW5kZXIoY3VySWQpO1xuXHRcdFx0XHRcdFx0XHRzdWJncm91cC5jbGFzc05hbWUgPSAncXVpY2tmb3JtU3ViZ3JvdXAnO1xuXHRcdFx0XHRcdFx0XHRzdWJub2RlLnN1Ymdyb3VwID0gc3ViZ3JvdXA7XG5cdFx0XHRcdFx0XHRcdHN1Ym5vZGUuc2hvd24gPSBmYWxzZTtcblx0XHRcdFx0XHRcdFx0ZXZlbnQgPSAoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRlLnRhcmdldC5wYXJlbnROb2RlLmFwcGVuZENoaWxkKGUudGFyZ2V0LnN1Ymdyb3VwKTtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChlLnRhcmdldC50eXBlID09PSAncmFkaW8nKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IHtuYW1lfSA9IGUudGFyZ2V0O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoZS50YXJnZXQuZm9ybS5uYW1lc1tuYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZS50YXJnZXQuZm9ybS5uYW1lc1tuYW1lXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZS50YXJnZXQuZm9ybS5uYW1lc1tuYW1lXS5zdWJncm91cFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0ZS50YXJnZXQuZm9ybS5uYW1lc1tuYW1lXSA9IGUudGFyZ2V0O1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRlLnRhcmdldC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUudGFyZ2V0LnN1Ymdyb3VwKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdHN1Ym5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZlbnQsIHRydWUpO1xuXHRcdFx0XHRcdFx0XHRpZiAoY3VycmVudC5jaGVja2VkKSB7XG5cdFx0XHRcdFx0XHRcdFx0c3Vibm9kZS5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHN1Ymdyb3VwKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChkYXRhLnR5cGUgPT09ICdyYWRpbycpIHtcblx0XHRcdFx0XHRcdFx0ZXZlbnQgPSAoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCB7bmFtZX0gPSBlLnRhcmdldDtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChlLnRhcmdldC5mb3JtLm5hbWVzW25hbWVdICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZS50YXJnZXQuZm9ybS5uYW1lc1tuYW1lXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGUudGFyZ2V0LmZvcm0ubmFtZXNbbmFtZV0uc3ViZ3JvdXBcblx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdGRlbGV0ZSBlLnRhcmdldC5mb3JtLm5hbWVzW25hbWVdO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdFx0c3Vibm9kZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldmVudCwgdHJ1ZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvLyBhZGQgdXNlcnMnIGV2ZW50IGxhc3QsIHNvIGl0IGNhbiBpbnRlcmFjdCB3aXRoIHRoZSBzdWJncm91cFxuXHRcdFx0XHRcdFx0aWYgKGRhdGEuZXZlbnQpIHtcblx0XHRcdFx0XHRcdFx0c3Vibm9kZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBkYXRhLmV2ZW50LCBmYWxzZSk7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGN1cnJlbnQuZXZlbnQpIHtcblx0XHRcdFx0XHRcdFx0c3Vibm9kZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjdXJyZW50LmV2ZW50LCB0cnVlKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEuc2hpZnRDbGlja1N1cHBvcnQgJiYgZGF0YS50eXBlID09PSAnY2hlY2tib3gnKSB7XG5cdFx0XHRcdFx0TW9yZWJpdHMuY2hlY2tib3hTaGlmdENsaWNrU3VwcG9ydChNb3JlYml0cy5xdWlja0Zvcm0uZ2V0RWxlbWVudHMobm9kZSwgZGF0YS5uYW1lKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHQvLyBpbnB1dCBpcyBhY3R1YWxseSBhIHRleHQtdHlwZSwgc28gbnVtYmVyIGhlcmUgaW5oZXJpdHMgdGhlIHNhbWUgc3R1ZmZcblx0XHRcdGNhc2UgJ251bWJlcic6XG5cdFx0XHRjYXNlICdpbnB1dCc6XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ2lkJywgYGRpdl8ke2lkfWApO1xuXHRcdFx0XHQvLyBBZGQgaGlkZGVuIGF0dHJcblx0XHRcdFx0aWYgKGRhdGEuaGlkZGVuKSB7XG5cdFx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICcnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5sYWJlbCkge1xuXHRcdFx0XHRcdGxhYmVsID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpKTtcblx0XHRcdFx0XHRsYWJlbC5hcHBlbmRDaGlsZChNb3JlYml0cy5jcmVhdGVIdG1sKGRhdGEubGFiZWwpKTtcblx0XHRcdFx0XHRsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGRhdGEuaWQgfHwgaWQpO1xuXHRcdFx0XHRcdC8vIE5vIG1hcmdpblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0c3Vibm9kZSA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSk7XG5cdFx0XHRcdC8vIEFkZCB2YWx1ZSBhbmQgcGxhY2Vob2xkZXIgYXR0cnNcblx0XHRcdFx0aWYgKGRhdGEudmFsdWUpIHtcblx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBkYXRhLnZhbHVlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5wbGFjZWhvbGRlcikge1xuXHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIGRhdGEucGxhY2Vob2xkZXIpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCduYW1lJywgZGF0YS5uYW1lKTtcblx0XHRcdFx0aWYgKGRhdGEudHlwZSA9PT0gJ2lucHV0Jykge1xuXHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgndHlwZScsICdudW1iZXInKTtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IGF0dCBvZiBbJ21pbicsICdtYXgnLCAnc3RlcCcsICdsaXN0J10pIHtcblx0XHRcdFx0XHRcdGlmIChkYXRhW2F0dF0pIHtcblx0XHRcdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoYXR0LCBkYXRhW2F0dF0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRmb3IgKGNvbnN0IGF0dCBvZiBbJ3ZhbHVlJywgJ3NpemUnLCAncGxhY2Vob2xkZXInLCAnbWF4bGVuZ3RoJ10pIHtcblx0XHRcdFx0XHRpZiAoZGF0YVthdHRdKSB7XG5cdFx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZShhdHQsIGRhdGFbYXR0XSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGZvciAoY29uc3QgYXR0IG9mIFsnZGlzYWJsZWQnLCAncmVxdWlyZWQnLCAncmVhZG9ubHknXSkge1xuXHRcdFx0XHRcdGlmIChkYXRhW2F0dF0pIHtcblx0XHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKGF0dCwgYXR0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEuZXZlbnQpIHtcblx0XHRcdFx0XHRzdWJub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZGF0YS5ldmVudCwgZmFsc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNoaWxkQ29udGFpbmVyID0gc3Vibm9kZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdkeW5pbnB1dCc6IHtcblx0XHRcdFx0Y29uc3QgbWluID0gZGF0YS5taW4gfHwgMTtcblx0XHRcdFx0Y29uc3QgbWF4ID0gZGF0YS5tYXggfHwgTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdGxhYmVsID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpKTtcblx0XHRcdFx0bGFiZWwuYXBwZW5kQ2hpbGQoTW9yZWJpdHMuY3JlYXRlSHRtbChkYXRhLmxhYmVsKSk7XG5cdFx0XHRcdGNvbnN0IGxpc3ROb2RlID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG5cdFx0XHRcdGNvbnN0IG1vcmUgPSB0aGlzLmNvbXB1dGUoe1xuXHRcdFx0XHRcdHR5cGU6ICdidXR0b24nLFxuXHRcdFx0XHRcdGxhYmVsOiAn5pu05aSaJyxcblx0XHRcdFx0XHRkaXNhYmxlZDogbWluID49IG1heCxcblx0XHRcdFx0XHRldmVudDogKGUpID0+IHtcblx0XHRcdFx0XHRcdGNvbnN0IG5ld05vZGUgPSBuZXcgTW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQoZS50YXJnZXQuc3VibGlzdCk7XG5cdFx0XHRcdFx0XHRlLnRhcmdldC5hcmVhLmFwcGVuZENoaWxkKG5ld05vZGUucmVuZGVyKCkpO1xuXHRcdFx0XHRcdFx0aWYgKCsrZS50YXJnZXQuY291bnRlciA+PSBlLnRhcmdldC5tYXgpIHtcblx0XHRcdFx0XHRcdFx0ZS50YXJnZXQuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0bm9kZS5hcHBlbmRDaGlsZChtb3JlWzBdKTtcblx0XHRcdFx0Y29uc3QgWywgbW9yZUJ1dHRvbl0gPSBtb3JlO1xuXHRcdFx0XHRjb25zdCBzdWJsaXN0ID0ge1xuXHRcdFx0XHRcdHR5cGU6ICdfZHluaW5wdXRfZWxlbWVudCcsXG5cdFx0XHRcdFx0bGFiZWw6IGRhdGEuc3VibGFiZWwgfHwgZGF0YS5sYWJlbCxcblx0XHRcdFx0XHRuYW1lOiBkYXRhLm5hbWUsXG5cdFx0XHRcdFx0dmFsdWU6IGRhdGEudmFsdWUsXG5cdFx0XHRcdFx0c2l6ZTogZGF0YS5zaXplLFxuXHRcdFx0XHRcdHJlbW92ZTogZmFsc2UsXG5cdFx0XHRcdFx0bWF4bGVuZ3RoOiBkYXRhLm1heGxlbmd0aCxcblx0XHRcdFx0XHRldmVudDogZGF0YS5ldmVudCxcblx0XHRcdFx0fTtcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IG1pbjsgKytpKSB7XG5cdFx0XHRcdFx0Y29uc3QgZWxlbSA9IG5ldyBNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudChzdWJsaXN0KTtcblx0XHRcdFx0XHRsaXN0Tm9kZS5hcHBlbmRDaGlsZChlbGVtLnJlbmRlcigpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzdWJsaXN0LnJlbW92ZSA9IHRydWU7XG5cdFx0XHRcdHN1Ymxpc3QubW9yZWJ1dHRvbiA9IG1vcmVCdXR0b247XG5cdFx0XHRcdHN1Ymxpc3QubGlzdG5vZGUgPSBsaXN0Tm9kZTtcblx0XHRcdFx0bW9yZUJ1dHRvbi5zdWJsaXN0ID0gc3VibGlzdDtcblx0XHRcdFx0bW9yZUJ1dHRvbi5hcmVhID0gbGlzdE5vZGU7XG5cdFx0XHRcdG1vcmVCdXR0b24ubWF4ID0gbWF4IC0gbWluO1xuXHRcdFx0XHRtb3JlQnV0dG9uLmNvdW50ZXIgPSAwO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGNhc2UgJ19keW5pbnB1dF9lbGVtZW50Jzpcblx0XHRcdFx0Ly8gUHJpdmF0ZSwgc2ltaWxhciB0byBub3JtYWwgaW5wdXRcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0XHRpZiAoZGF0YS5sYWJlbCkge1xuXHRcdFx0XHRcdGxhYmVsID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpKTtcblx0XHRcdFx0XHRsYWJlbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShkYXRhLmxhYmVsKSk7XG5cdFx0XHRcdFx0bGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBpZCk7XG5cdFx0XHRcdFx0Ly8gTm8gbWFyZ2luXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRzdWJub2RlID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKTtcblx0XHRcdFx0aWYgKGRhdGEudmFsdWUpIHtcblx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBkYXRhLnZhbHVlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgnbmFtZScsIGRhdGEubmFtZSk7XG5cdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcblx0XHRcdFx0aWYgKGRhdGEuc2l6ZSkge1xuXHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCdzaXplJywgZGF0YS5zaXplKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5tYXhsZW5ndGgpIHtcblx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgnbWF4bGVuZ3RoJywgZGF0YS5tYXhsZW5ndGgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLmV2ZW50KSB7XG5cdFx0XHRcdFx0c3Vibm9kZS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGRhdGEuZXZlbnQsIGZhbHNlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5yZW1vdmUpIHtcblx0XHRcdFx0XHRjb25zdCByZW1vdmUgPSB0aGlzLmNvbXB1dGUoe1xuXHRcdFx0XHRcdFx0dHlwZTogJ2J1dHRvbicsXG5cdFx0XHRcdFx0XHRsYWJlbDogJ+enu+mZpCcsXG5cdFx0XHRcdFx0XHRldmVudDogKGUpID0+IHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgbGlzdCA9IGUudGFyZ2V0Lmxpc3Rub2RlO1xuXHRcdFx0XHRcdFx0XHRjb25zdCBub2RlXyA9IGUudGFyZ2V0LmlucHV0bm9kZTtcblx0XHRcdFx0XHRcdFx0Y29uc3QgbW9yZSA9IGUudGFyZ2V0Lm1vcmVidXR0b247XG5cdFx0XHRcdFx0XHRcdGxpc3QucmVtb3ZlQ2hpbGQobm9kZV8pO1xuXHRcdFx0XHRcdFx0XHQtLW1vcmUuY291bnRlcjtcblx0XHRcdFx0XHRcdFx0bW9yZS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG5cdFx0XHRcdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdG5vZGUuYXBwZW5kQ2hpbGQocmVtb3ZlWzBdKTtcblx0XHRcdFx0XHRjb25zdCBbLCByZW1vdmVCdXR0b25dID0gcmVtb3ZlO1xuXHRcdFx0XHRcdHJlbW92ZUJ1dHRvbi5pbnB1dG5vZGUgPSBub2RlO1xuXHRcdFx0XHRcdHJlbW92ZUJ1dHRvbi5saXN0bm9kZSA9IGRhdGEubGlzdG5vZGU7XG5cdFx0XHRcdFx0cmVtb3ZlQnV0dG9uLm1vcmVidXR0b24gPSBkYXRhLm1vcmVidXR0b247XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdoaWRkZW4nOlxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnaGlkZGVuJyk7XG5cdFx0XHRcdG5vZGUudmFsdWVzID0gZGF0YS52YWx1ZTtcblx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgZGF0YS52YWx1ZSk7XG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCduYW1lJywgZGF0YS5uYW1lKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdoZWFkZXInOlxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcblx0XHRcdFx0bm9kZS5hcHBlbmRDaGlsZChNb3JlYml0cy5jcmVhdGVIdG1sKGRhdGEubGFiZWwpKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdkaXYnOlxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdGlmIChkYXRhLm5hbWUpIHtcblx0XHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgnbmFtZScsIGRhdGEubmFtZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEubGFiZWwpIHtcblx0XHRcdFx0XHRjb25zdCByZXN1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0XHRcdFx0cmVzdWx0LmNsYXNzTmFtZSA9ICdxdWlja2Zvcm1EZXNjcmlwdGlvbic7XG5cdFx0XHRcdFx0cmVzdWx0LmFwcGVuZENoaWxkKE1vcmViaXRzLmNyZWF0ZUh0bWwoZGF0YS5sYWJlbCkpO1xuXHRcdFx0XHRcdG5vZGUuYXBwZW5kQ2hpbGQocmVzdWx0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3N1Ym1pdCc6XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0XHRcdGNoaWxkQ29udGFpbmVyID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKTtcblx0XHRcdFx0Y2hpbGRDb250YWluZXIuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuXHRcdFx0XHRpZiAoZGF0YS5sYWJlbCkge1xuXHRcdFx0XHRcdGNoaWxkQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBkYXRhLmxhYmVsKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjaGlsZENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBkYXRhLm5hbWUgfHwgJ3N1Ym1pdCcpO1xuXHRcdFx0XHRpZiAoZGF0YS5kaXNhYmxlZCkge1xuXHRcdFx0XHRcdGNoaWxkQ29udGFpbmVyLmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2J1dHRvbic6XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0XHRcdGNoaWxkQ29udGFpbmVyID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKTtcblx0XHRcdFx0Y2hpbGRDb250YWluZXIuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuXHRcdFx0XHRpZiAoZGF0YS5sYWJlbCkge1xuXHRcdFx0XHRcdGNoaWxkQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBkYXRhLmxhYmVsKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjaGlsZENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBkYXRhLm5hbWUpO1xuXHRcdFx0XHRpZiAoZGF0YS5kaXNhYmxlZCkge1xuXHRcdFx0XHRcdGNoaWxkQ29udGFpbmVyLmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5ldmVudCkge1xuXHRcdFx0XHRcdGNoaWxkQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGF0YS5ldmVudCwgZmFsc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAndGV4dGFyZWEnOlxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCdpZCcsIGBkaXZfJHtpZH1gKTtcblx0XHRcdFx0Ly8gQWRkIGhpZGRlbiBhdHRyXG5cdFx0XHRcdGlmIChkYXRhLmhpZGRlbikge1xuXHRcdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEubGFiZWwpIHtcblx0XHRcdFx0XHRsYWJlbCA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKSk7XG5cdFx0XHRcdFx0Y29uc3QgbGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcblx0XHRcdFx0XHRsYWJlbEVsZW1lbnQuYXBwZW5kQ2hpbGQoTW9yZWJpdHMuY3JlYXRlSHRtbChkYXRhLmxhYmVsKSk7XG5cdFx0XHRcdFx0bGFiZWxFbGVtZW50LnNldEF0dHJpYnV0ZSgnZm9yJywgZGF0YS5pZCB8fCBpZCk7XG5cdFx0XHRcdFx0bGFiZWwuYXBwZW5kQ2hpbGQobGFiZWxFbGVtZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzdWJub2RlID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpKTtcblx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBkYXRhLm5hbWUpO1xuXHRcdFx0XHRpZiAoZGF0YS5jb2xzKSB7XG5cdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ2NvbHMnLCBkYXRhLmNvbHMpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLnJvd3MpIHtcblx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgncm93cycsIGRhdGEucm93cyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEuZGlzYWJsZWQpIHtcblx0XHRcdFx0XHRzdWJub2RlLmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5yZXF1aXJlZCkge1xuXHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICdyZXF1aXJlZCcpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLnJlYWRvbmx5KSB7XG5cdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJ3JlYWRvbmx5Jyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEudmFsdWUpIHtcblx0XHRcdFx0XHRzdWJub2RlLnZhbHVlID0gZGF0YS52YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBBZGQgcGxhY2Vob2xkZXIgYXR0clxuXHRcdFx0XHRpZiAoZGF0YS5wbGFjZWhvbGRlcikge1xuXHRcdFx0XHRcdHN1Ym5vZGUucGxhY2Vob2xkZXIgPSBkYXRhLnBsYWNlaG9sZGVyO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNoaWxkQ29udGFpbmVyID0gc3Vibm9kZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYE1vcmViaXRzLnF1aWNrRm9ybTogdW5rbm93biBlbGVtZW50IHR5cGUgJHtkYXRhLnR5cGUudG9TdHJpbmcoKX1gKTtcblx0XHR9XG5cdFx0aWYgKCFjaGlsZENvbnRhaW5lcikge1xuXHRcdFx0Y2hpbGRDb250YWluZXIgPSBub2RlO1xuXHRcdH1cblx0XHRpZiAoZGF0YS50b29sdGlwKSB7XG5cdFx0XHRNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudC5nZW5lcmF0ZVRvb2x0aXAobGFiZWwgfHwgbm9kZSwgZGF0YSk7XG5cdFx0fVxuXHRcdGlmIChkYXRhLmV4dHJhKSB7XG5cdFx0XHRjaGlsZENvbnRhaW5lci5leHRyYSA9IGRhdGEuZXh0cmE7XG5cdFx0fVxuXHRcdGlmIChkYXRhLiRkYXRhKSB7XG5cdFx0XHQkKGNoaWxkQ29udGFpbmVyKS5kYXRhKGRhdGEuJGRhdGEpO1xuXHRcdH1cblx0XHRpZiAoZGF0YS5zdHlsZSkge1xuXHRcdFx0Y2hpbGRDb250YWluZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsIGRhdGEuc3R5bGUpO1xuXHRcdH1cblx0XHRpZiAoZGF0YS5jbGFzc05hbWUpIHtcblx0XHRcdGNoaWxkQ29udGFpbmVyLmNsYXNzTmFtZSA9IGNoaWxkQ29udGFpbmVyLmNsYXNzTmFtZVxuXHRcdFx0XHQ/IGAke2NoaWxkQ29udGFpbmVyLmNsYXNzTmFtZX0gJHtkYXRhLmNsYXNzTmFtZX1gXG5cdFx0XHRcdDogZGF0YS5jbGFzc05hbWU7XG5cdFx0fVxuXHRcdGNoaWxkQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCBkYXRhLmlkIHx8IGlkKTtcblx0XHRyZXR1cm4gW25vZGUsIGNoaWxkQ29udGFpbmVyXTtcblx0fTtcblx0LyoqXG5cdCAqIENyZWF0ZSBhIGpRdWVyeSBVSS1iYXNlZCB0b29sdGlwLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnRcblx0ICogQHJlcXVpcmVzIGpxdWVyeS51aVxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBub2RlIC0gVGhlIEhUTUwgZWxlbWVudCBiZXNpZGUgd2hpY2ggYSB0b29sdGlwIGlzIHRvIGJlIGdlbmVyYXRlZC5cblx0ICogQHBhcmFtIHtPYmplY3R9IGRhdGEgLSBUb29sdGlwLXJlbGF0ZWQgY29uZmlndXJhdGlvbiBkYXRhLlxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQuZ2VuZXJhdGVUb29sdGlwID0gKG5vZGUsIGRhdGEpID0+IHtcblx0XHRjb25zdCB0b29sdGlwQnV0dG9uID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJykpO1xuXHRcdHRvb2x0aXBCdXR0b24uY2xhc3NOYW1lID0gJ21vcmViaXRzLXRvb2x0aXBCdXR0b24nO1xuXHRcdHRvb2x0aXBCdXR0b24udGl0bGUgPSBkYXRhLnRvb2x0aXA7IC8vIFByb3ZpZGVzIHRoZSBjb250ZW50IGZvciBqUXVlcnkgVUlcblx0XHR0b29sdGlwQnV0dG9uLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCc/JykpO1xuXHRcdCQodG9vbHRpcEJ1dHRvbikudG9vbHRpcCh7XG5cdFx0XHRwb3NpdGlvbjoge1xuXHRcdFx0XHRteTogJ2xlZnQgdG9wJyxcblx0XHRcdFx0YXQ6ICdjZW50ZXIgYm90dG9tJyxcblx0XHRcdFx0Y29sbGlzaW9uOiAnZmxpcGZpdCcsXG5cdFx0XHR9LFxuXHRcdFx0Ly8gRGVwcmVjYXRlZCBpbiBVSSAxLjEyLCBidXQgTVcgc3R1Y2sgb24gMS45LjIgaW5kZWZpbml0ZWx5OyBzZWUgIzM5OCBhbmQgVDcxMzg2XG5cdFx0XHR0b29sdGlwQ2xhc3M6ICdtb3JlYml0cy11aS10b29sdGlwJyxcblx0XHR9KTtcblx0fTtcblx0Ly8gU29tZSB1dGlsaXR5IG1ldGhvZHMgZm9yIG1hbmlwdWxhdGluZyBxdWlja0Zvcm1zIGFmdGVyIHRoZWlyIGNyZWF0aW9uOlxuXHQvLyAoTm9uZSBvZiB0aGVzZSB3b3JrIGZvciBcImR5bmlucHV0XCIgdHlwZSBmaWVsZHMgYXQgcHJlc2VudClcblx0LyoqXG5cdCAqIFJldHVybnMgYW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIGZpbGxlZCBmb3JtIGRhdGEgZW50ZXJlZCBieSB0aGUgdXNlciwgd2l0aCB0aGUgb2JqZWN0XG5cdCAqIGtleXMgYmVpbmcgdGhlIGZvcm0gZWxlbWVudCBuYW1lcy4gRGlzYWJsZWQgZmllbGRzIHdpbGwgYmUgaWdub3JlZCwgYnV0IG5vdCBoaWRkZW4gZmllbGRzLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtXG5cdCAqIEBwYXJhbSB7SFRNTEZvcm1FbGVtZW50fSBmb3JtXG5cdCAqIEByZXR1cm5zIHtPYmplY3R9IFdpdGggZmllbGQgbmFtZXMgYXMga2V5cywgaW5wdXQgZGF0YSBhcyB2YWx1ZXMuXG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0uZ2V0SW5wdXREYXRhID0gKGZvcm0pID0+IHtcblx0XHRjb25zdCByZXN1bHQgPSB7fTtcblx0XHRmb3IgKGNvbnN0IGZpZWxkIG9mIGZvcm0uZWxlbWVudHMpIHtcblx0XHRcdGlmIChmaWVsZC5kaXNhYmxlZCB8fCAhZmllbGQubmFtZSB8fCAhZmllbGQudHlwZSB8fCBmaWVsZC50eXBlID09PSAnc3VibWl0JyB8fCBmaWVsZC50eXBlID09PSAnYnV0dG9uJykge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdC8vIEZvciBlbGVtZW50cyBpbiBzdWJncm91cHMsIHF1aWNrZm9ybSBwcmVwZW5kcyBlbGVtZW50IG5hbWVzIHdpdGhcblx0XHRcdC8vIG5hbWUgb2YgdGhlIHBhcmVudCBncm91cCBmb2xsb3dlZCBieSBhIHBlcmlvZCwgZ2V0IHJpZCBvZiB0aGF0LlxuXHRcdFx0Y29uc3QgZmllbGROYW1lTm9ybSA9IGZpZWxkLm5hbWUuc2xpY2UoZmllbGQubmFtZS5pbmRleE9mKCcuJykgKyAxKTtcblx0XHRcdHN3aXRjaCAoZmllbGQudHlwZSkge1xuXHRcdFx0XHRjYXNlICdyYWRpbyc6XG5cdFx0XHRcdFx0aWYgKGZpZWxkLmNoZWNrZWQpIHtcblx0XHRcdFx0XHRcdHJlc3VsdFtmaWVsZE5hbWVOb3JtXSA9IGZpZWxkLnZhbHVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnY2hlY2tib3gnOlxuXHRcdFx0XHRcdGlmIChmaWVsZC5kYXRhc2V0LnNpbmdsZSkge1xuXHRcdFx0XHRcdFx0cmVzdWx0W2ZpZWxkTmFtZU5vcm1dID0gZmllbGQuY2hlY2tlZDsgLy8gYm9vbGVhblxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXN1bHRbZmllbGROYW1lTm9ybV0gfHw9IFtdO1xuXHRcdFx0XHRcdFx0aWYgKGZpZWxkLmNoZWNrZWQpIHtcblx0XHRcdFx0XHRcdFx0cmVzdWx0W2ZpZWxkTmFtZU5vcm1dLnB1c2goZmllbGQudmFsdWUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnc2VsZWN0LW11bHRpcGxlJzpcblx0XHRcdFx0XHRyZXN1bHRbZmllbGROYW1lTm9ybV0gPSAkKGZpZWxkKS52YWwoKTsgLy8gZmllbGQudmFsdWUgZG9lc24ndCB3b3JrXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3RleHQnOiAvLyBmYWxscyB0aHJvdWdoXG5cdFx0XHRcdGNhc2UgJ3RleHRhcmVhJzpcblx0XHRcdFx0XHRyZXN1bHRbZmllbGROYW1lTm9ybV0gPSBmaWVsZC52YWx1ZS50cmltKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0Ly8gY291bGQgYmUgc2VsZWN0LW9uZSwgZGF0ZSwgbnVtYmVyLCBlbWFpbCwgZXRjXG5cdFx0XHRcdFx0aWYgKGZpZWxkLnZhbHVlKSB7XG5cdFx0XHRcdFx0XHRyZXN1bHRbZmllbGROYW1lTm9ybV0gPSBmaWVsZC52YWx1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH07XG5cdC8qKlxuXHQgKiBSZXR1cm5zIGFsbCBmb3JtIGVsZW1lbnRzIHdpdGggYSBnaXZlbiBmaWVsZCBuYW1lIG9yIElELlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtXG5cdCAqIEBwYXJhbSB7SFRNTEZvcm1FbGVtZW50fSBmb3JtXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBmaWVsZE5hbWUgLSBUaGUgbmFtZSBvciBpZCBvZiB0aGUgZmllbGRzLlxuXHQgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnRbXX0gLSBBcnJheSBvZiBtYXRjaGluZyBmb3JtIGVsZW1lbnRzLlxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLmdldEVsZW1lbnRzID0gKGZvcm0sIGZpZWxkTmFtZSkgPT4ge1xuXHRcdGNvbnN0ICRmb3JtID0gJChmb3JtKTtcblx0XHRmaWVsZE5hbWUgPSAkLmVzY2FwZVNlbGVjdG9yKGZpZWxkTmFtZSk7IC8vIHNhbml0aXplIGlucHV0XG5cdFx0bGV0ICRlbGVtZW50cyA9ICRmb3JtLmZpbmQoYFtuYW1lPVwiJHtmaWVsZE5hbWV9XCJdYCk7XG5cdFx0aWYgKCRlbGVtZW50cy5sZW5ndGggPiAwKSB7XG5cdFx0XHRyZXR1cm4gJGVsZW1lbnRzLnRvQXJyYXkoKTtcblx0XHR9XG5cdFx0JGVsZW1lbnRzID0gJGZvcm0uZmluZChgIyR7ZmllbGROYW1lfWApO1xuXHRcdHJldHVybiAkZWxlbWVudHMudG9BcnJheSgpO1xuXHR9O1xuXHQvKipcblx0ICogU2VhcmNoZXMgdGhlIGFycmF5IG9mIGVsZW1lbnRzIGZvciBhIGNoZWNrYm94IG9yIHJhZGlvIGJ1dHRvbiB3aXRoIGEgY2VydGFpblxuXHQgKiBgdmFsdWVgIGF0dHJpYnV0ZSwgYW5kIHJldHVybnMgdGhlIGZpcnN0IHN1Y2ggZWxlbWVudC4gUmV0dXJucyBudWxsIGlmIG5vdCBmb3VuZC5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybVxuXHQgKiBAcGFyYW0ge0hUTUxJbnB1dEVsZW1lbnRbXX0gZWxlbWVudEFycmF5IC0gQXJyYXkgb2YgY2hlY2tib3ggb3IgcmFkaW8gZWxlbWVudHMuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIFZhbHVlIHRvIHNlYXJjaCBmb3IuXG5cdCAqIEByZXR1cm5zIHtIVE1MSW5wdXRFbGVtZW50fVxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLmdldENoZWNrYm94T3JSYWRpbyA9IChlbGVtZW50QXJyYXksIHZhbHVlKSA9PiB7XG5cdFx0Y29uc3QgZm91bmQgPSBlbGVtZW50QXJyYXkuZmlsdGVyKChlbGVtZW50KSA9PiB7XG5cdFx0XHRyZXR1cm4gZWxlbWVudC52YWx1ZSA9PT0gdmFsdWU7XG5cdFx0fSk7XG5cdFx0aWYgKGZvdW5kLmxlbmd0aCA+IDApIHtcblx0XHRcdHJldHVybiBmb3VuZFswXTtcblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH07XG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSAmbHQ7ZGl2PiBjb250YWluaW5nIHRoZSBmb3JtIGVsZW1lbnQsIG9yIHRoZSBmb3JtIGVsZW1lbnQgaXRzZWxmXG5cdCAqIE1heSBub3Qgd29yayBhcyBleHBlY3RlZCBvbiBjaGVja2JveGVzIG9yIHJhZGlvcy5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybVxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG5cdCAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5nZXRFbGVtZW50Q29udGFpbmVyID0gKGVsZW1lbnQpID0+IHtcblx0XHQvLyBmb3IgZGl2cywgaGVhZGluZ3MgYW5kIGZpZWxkc2V0cywgdGhlIGNvbnRhaW5lciBpcyB0aGUgZWxlbWVudCBpdHNlbGZcblx0XHRpZiAoXG5cdFx0XHRlbGVtZW50IGluc3RhbmNlb2YgSFRNTEZpZWxkU2V0RWxlbWVudCB8fFxuXHRcdFx0ZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxEaXZFbGVtZW50IHx8XG5cdFx0XHRlbGVtZW50IGluc3RhbmNlb2YgSFRNTEhlYWRpbmdFbGVtZW50XG5cdFx0KSB7XG5cdFx0XHRyZXR1cm4gZWxlbWVudDtcblx0XHR9XG5cdFx0Ly8gZm9yIG90aGVycywganVzdCByZXR1cm4gdGhlIHBhcmVudCBub2RlXG5cdFx0cmV0dXJuIGVsZW1lbnQucGFyZW50Tm9kZTtcblx0fTtcblx0LyoqXG5cdCAqIEdldHMgdGhlIEhUTUwgZWxlbWVudCB0aGF0IGNvbnRhaW5zIHRoZSBsYWJlbCBvZiB0aGUgZ2l2ZW4gZm9ybSBlbGVtZW50XG5cdCAqIChtYWlubHkgZm9yIGludGVybmFsIHVzZSkuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5xdWlja0Zvcm1cblx0ICogQHBhcmFtIHsoSFRNTEVsZW1lbnR8TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQpfSBlbGVtZW50XG5cdCAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5nZXRFbGVtZW50TGFiZWxPYmplY3QgPSAoZWxlbWVudCkgPT4ge1xuXHRcdC8vIGZvciBidXR0b25zLCBkaXZzIGFuZCBoZWFkZXJzLCB0aGUgbGFiZWwgaXMgb24gdGhlIGVsZW1lbnQgaXRzZWxmXG5cdFx0aWYgKFxuXHRcdFx0ZWxlbWVudC50eXBlID09PSAnYnV0dG9uJyB8fFxuXHRcdFx0ZWxlbWVudC50eXBlID09PSAnc3VibWl0JyB8fFxuXHRcdFx0ZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxEaXZFbGVtZW50IHx8XG5cdFx0XHRlbGVtZW50IGluc3RhbmNlb2YgSFRNTEhlYWRpbmdFbGVtZW50XG5cdFx0KSB7XG5cdFx0XHRyZXR1cm4gZWxlbWVudDtcblx0XHRcdC8vIGZvciBmaWVsZHNldHMsIHRoZSBsYWJlbCBpcyB0aGUgY2hpbGQgPGxlZ2VuZD4gZWxlbWVudFxuXHRcdH0gZWxzZSBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxGaWVsZFNldEVsZW1lbnQpIHtcblx0XHRcdHJldHVybiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xlZ2VuZCcpO1xuXHRcdFx0Ly8gZm9yIHRleHRhcmVhcywgdGhlIGxhYmVsIGlzIHRoZSBzaWJsaW5nIDxoNT4gZWxlbWVudFxuXHRcdH0gZWxzZSBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxUZXh0QXJlYUVsZW1lbnQpIHtcblx0XHRcdHJldHVybiBlbGVtZW50LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignaDUnKTtcblx0XHR9XG5cdFx0Ly8gZm9yIG90aGVycywgdGhlIGxhYmVsIGlzIHRoZSBzaWJsaW5nIDxsYWJlbD4gZWxlbWVudFxuXHRcdHJldHVybiBlbGVtZW50LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignbGFiZWwnKTtcblx0fTtcblx0LyoqXG5cdCAqIEdldHMgdGhlIGxhYmVsIHRleHQgb2YgdGhlIGVsZW1lbnQuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5xdWlja0Zvcm1cblx0ICogQHBhcmFtIHsoSFRNTEVsZW1lbnR8TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQpfSBlbGVtZW50XG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0uZ2V0RWxlbWVudExhYmVsID0gKGVsZW1lbnQpID0+IHtcblx0XHRjb25zdCBsYWJlbEVsZW1lbnQgPSBNb3JlYml0cy5xdWlja0Zvcm0uZ2V0RWxlbWVudExhYmVsT2JqZWN0KGVsZW1lbnQpO1xuXHRcdGlmICghbGFiZWxFbGVtZW50KSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0cmV0dXJuIGxhYmVsRWxlbWVudC5maXJzdENoaWxkLnRleHRDb250ZW50O1xuXHR9O1xuXHQvKipcblx0ICogU2V0cyB0aGUgbGFiZWwgb2YgdGhlIGVsZW1lbnQgdG8gdGhlIGdpdmVuIHRleHQuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5xdWlja0Zvcm1cblx0ICogQHBhcmFtIHsoSFRNTEVsZW1lbnR8TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQpfSBlbGVtZW50XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbFRleHRcblx0ICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgc3VjY2VlZGVkLCBmYWxzZSBpZiB0aGUgbGFiZWwgZWxlbWVudCBpcyB1bmF2YWlsYWJsZS5cblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5zZXRFbGVtZW50TGFiZWwgPSAoZWxlbWVudCwgbGFiZWxUZXh0KSA9PiB7XG5cdFx0Y29uc3QgbGFiZWxFbGVtZW50ID0gTW9yZWJpdHMucXVpY2tGb3JtLmdldEVsZW1lbnRMYWJlbE9iamVjdChlbGVtZW50KTtcblx0XHRpZiAoIWxhYmVsRWxlbWVudCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRsYWJlbEVsZW1lbnQuZmlyc3RDaGlsZC50ZXh0Q29udGVudCA9IGxhYmVsVGV4dDtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fTtcblx0LyoqXG5cdCAqIFN0b3JlcyB0aGUgZWxlbWVudCdzIGN1cnJlbnQgbGFiZWwsIGFuZCB0ZW1wb3JhcmlseSBzZXRzIHRoZSBsYWJlbCB0byB0aGUgZ2l2ZW4gdGV4dC5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybVxuXHQgKiBAcGFyYW0geyhIVE1MRWxlbWVudHxNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudCl9IGVsZW1lbnRcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRlbXBvcmFyeUxhYmVsVGV4dFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gYHRydWVgIGlmIHN1Y2NlZWRlZCwgYGZhbHNlYCBpZiB0aGUgbGFiZWwgZWxlbWVudCBpcyB1bmF2YWlsYWJsZS5cblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5vdmVycmlkZUVsZW1lbnRMYWJlbCA9IChlbGVtZW50LCB0ZW1wb3JhcnlMYWJlbFRleHQpID0+IHtcblx0XHRpZiAoIWVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLW9sZGxhYmVsJykpIHtcblx0XHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLW9sZGxhYmVsJywgTW9yZWJpdHMucXVpY2tGb3JtLmdldEVsZW1lbnRMYWJlbChlbGVtZW50KSk7XG5cdFx0fVxuXHRcdHJldHVybiBNb3JlYml0cy5xdWlja0Zvcm0uc2V0RWxlbWVudExhYmVsKGVsZW1lbnQsIHRlbXBvcmFyeUxhYmVsVGV4dCk7XG5cdH07XG5cdC8qKlxuXHQgKiBSZXN0b3JlcyB0aGUgbGFiZWwgc3RvcmVkIGJ5IG92ZXJyaWRlRWxlbWVudExhYmVsLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtXG5cdCAqIEBwYXJhbSB7KEhUTUxFbGVtZW50fE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50KX0gZWxlbWVudFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBzdWNjZWVkZWQsIGZhbHNlIGlmIHRoZSBsYWJlbCBlbGVtZW50IGlzIHVuYXZhaWxhYmxlLlxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLnJlc2V0RWxlbWVudExhYmVsID0gKGVsZW1lbnQpID0+IHtcblx0XHRpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEtb2xkbGFiZWwnKSkge1xuXHRcdFx0cmV0dXJuIE1vcmViaXRzLnF1aWNrRm9ybS5zZXRFbGVtZW50TGFiZWwoZWxlbWVudCwgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb2xkbGFiZWwnKSk7XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9O1xuXHQvKipcblx0ICogU2hvd3Mgb3IgaGlkZXMgYSBmb3JtIGVsZW1lbnQgcGx1cyBpdHMgbGFiZWwgYW5kIHRvb2x0aXAuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5xdWlja0Zvcm1cblx0ICogQHBhcmFtIHsoSFRNTEVsZW1lbnR8alF1ZXJ5fHN0cmluZyl9IGVsZW1lbnQgLSBIVE1ML2pRdWVyeSBlbGVtZW50LCBvciBqUXVlcnkgc2VsZWN0b3Igc3RyaW5nLlxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IFt2aXNpYmlsaXR5XSAtIFNraXAgdGhpcyB0byB0b2dnbGUgdmlzaWJpbGl0eS5cblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5zZXRFbGVtZW50VmlzaWJpbGl0eSA9IChlbGVtZW50LCB2aXNpYmlsaXR5KSA9PiB7XG5cdFx0JChlbGVtZW50KS50b2dnbGUodmlzaWJpbGl0eSk7XG5cdH07XG5cdC8qKlxuXHQgKiBTaG93cyBvciBoaWRlcyB0aGUgcXVlc3Rpb24gbWFyayBpY29uICh3aGljaCBkaXNwbGF5cyB0aGUgdG9vbHRpcCkgbmV4dCB0byBhIGZvcm0gZWxlbWVudC5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybVxuXHQgKiBAcGFyYW0geyhIVE1MRWxlbWVudHxqUXVlcnkpfSBlbGVtZW50XG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Zpc2liaWxpdHldIC0gU2tpcCB0aGlzIHRvIHRvZ2dsZSB2aXNpYmlsaXR5LlxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLnNldEVsZW1lbnRUb29sdGlwVmlzaWJpbGl0eSA9IChlbGVtZW50LCB2aXNpYmlsaXR5KSA9PiB7XG5cdFx0JChNb3JlYml0cy5xdWlja0Zvcm0uZ2V0RWxlbWVudENvbnRhaW5lcihlbGVtZW50KSkuZmluZCgnLm1vcmViaXRzLXRvb2x0aXBCdXR0b24nKS50b2dnbGUodmlzaWJpbGl0eSk7XG5cdH07XG5cdC8qKlxuXHQgKiBAZXh0ZXJuYWwgSFRNTEZvcm1FbGVtZW50XG5cdCAqL1xuXHQvKipcblx0ICogR2V0IGNoZWNrZWQgaXRlbXMgaW4gdGhlIGZvcm0uXG5cdCAqXG5cdCAqIEBmdW5jdGlvbiBleHRlcm5hbDpIVE1MRm9ybUVsZW1lbnQuZ2V0Q2hlY2tlZFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIEZpbmQgY2hlY2tlZCBwcm9wZXJ0eSBvZiBlbGVtZW50cyAoaS5lLiBhIGNoZWNrYm94XG5cdCAqIG9yIGEgcmFkaW9idXR0b24pIHdpdGggdGhlIGdpdmVuIG5hbWUsIG9yIHNlbGVjdCBvcHRpb25zIHRoYXQgaGF2ZSBzZWxlY3RlZFxuXHQgKiBzZXQgdG8gdHJ1ZSAoZG9uJ3QgdHJ5IHRvIG1peCBzZWxlY3RzIHdpdGggcmFkaW8vY2hlY2tib3hlcykuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbdHlwZV0gLSBPcHRpb25hbGx5IHNwZWNpZnkgZWl0aGVyIHJhZGlvIG9yIGNoZWNrYm94IChmb3Jcblx0ICogdGhlIGV2ZW50IHRoYXQgYm90aCBjaGVja2JveGVzIGFuZCByYWRpb2J1dHRvbnMgaGF2ZSB0aGUgc2FtZSBuYW1lKS5cblx0ICogQHJldHVybnMge3N0cmluZ1tdfSAtIENvbnRhaW5zIHRoZSB2YWx1ZXMgb2YgZWxlbWVudHMgd2l0aCB0aGUgZ2l2ZW4gbmFtZVxuXHQgKiBjaGVja2VkIHByb3BlcnR5IHNldCB0byB0cnVlLlxuXHQgKi9cblx0SFRNTEZvcm1FbGVtZW50LnByb3RvdHlwZS5nZXRDaGVja2VkID0gZnVuY3Rpb24gKG5hbWUsIHR5cGUpIHtcblx0XHRjb25zdCBlbGVtZW50cyA9IHRoaXMuZWxlbWVudHNbbmFtZV07XG5cdFx0aWYgKCFlbGVtZW50cykge1xuXHRcdFx0cmV0dXJuIFtdO1xuXHRcdH1cblx0XHRjb25zdCByZXR1cm5BcnJheSA9IFtdO1xuXHRcdGxldCBpO1xuXHRcdGlmIChlbGVtZW50cyBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50KSB7XG5cdFx0XHRjb25zdCB7b3B0aW9uc30gPSBlbGVtZW50cztcblx0XHRcdGZvciAoaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRcdGlmIChvcHRpb25zW2ldLnNlbGVjdGVkKSB7XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnNbaV0udmFsdWVzKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm5BcnJheS5wdXNoKG9wdGlvbnNbaV0udmFsdWVzKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuQXJyYXkucHVzaChvcHRpb25zW2ldLnZhbHVlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKGVsZW1lbnRzIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xuXHRcdFx0aWYgKHR5cGUgJiYgZWxlbWVudHMudHlwZSAhPT0gdHlwZSkge1xuXHRcdFx0XHRyZXR1cm4gW107XG5cdFx0XHR9IGVsc2UgaWYgKGVsZW1lbnRzLmNoZWNrZWQpIHtcblx0XHRcdFx0cmV0dXJuIFtlbGVtZW50cy52YWx1ZV07XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGZvciAoaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHRpZiAoZWxlbWVudHNbaV0uY2hlY2tlZCkge1xuXHRcdFx0XHRcdGlmICh0eXBlICYmIGVsZW1lbnRzW2ldLnR5cGUgIT09IHR5cGUpIHtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoZWxlbWVudHNbaV0udmFsdWVzKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm5BcnJheS5wdXNoKGVsZW1lbnRzW2ldLnZhbHVlcyk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJldHVybkFycmF5LnB1c2goZWxlbWVudHNbaV0udmFsdWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmV0dXJuQXJyYXk7XG5cdH07XG5cdC8qKlxuXHQgKiBEb2VzIHRoZSBzYW1lIGFzIHtAbGluayBIVE1MRm9ybUVsZW1lbnQuZ2V0Q2hlY2tlZHxnZXRDaGVja2VkfSwgYnV0IHdpdGggdW5jaGVja2VkIGVsZW1lbnRzLlxuXHQgKlxuXHQgKiBAZnVuY3Rpb24gZXh0ZXJuYWw6SFRNTEZvcm1FbGVtZW50LmdldFVuY2hlY2tlZFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIEZpbmQgY2hlY2tlZCBwcm9wZXJ0eSBvZiBlbGVtZW50cyAoaS5lLiBhIGNoZWNrYm94XG5cdCAqIG9yIGEgcmFkaW9idXR0b24pIHdpdGggdGhlIGdpdmVuIG5hbWUsIG9yIHNlbGVjdCBvcHRpb25zIHRoYXQgaGF2ZSBzZWxlY3RlZFxuXHQgKiBzZXQgdG8gdHJ1ZSAoZG9uJ3QgdHJ5IHRvIG1peCBzZWxlY3RzIHdpdGggcmFkaW8vY2hlY2tib3hlcykuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbdHlwZV0gLSBPcHRpb25hbGx5IHNwZWNpZnkgZWl0aGVyIHJhZGlvIG9yIGNoZWNrYm94IChmb3Jcblx0ICogdGhlIGV2ZW50IHRoYXQgYm90aCBjaGVja2JveGVzIGFuZCByYWRpb2J1dHRvbnMgaGF2ZSB0aGUgc2FtZSBuYW1lKS5cblx0ICogQHJldHVybnMge3N0cmluZ1tdfSAtIENvbnRhaW5zIHRoZSB2YWx1ZXMgb2YgZWxlbWVudHMgd2l0aCB0aGUgZ2l2ZW4gbmFtZVxuXHQgKiBjaGVja2VkIHByb3BlcnR5IHNldCB0byB0cnVlLlxuXHQgKi9cblx0SFRNTEZvcm1FbGVtZW50LnByb3RvdHlwZS5nZXRVbmNoZWNrZWQgPSBmdW5jdGlvbiAobmFtZSwgdHlwZSkge1xuXHRcdGNvbnN0IGVsZW1lbnRzID0gdGhpcy5lbGVtZW50c1tuYW1lXTtcblx0XHRpZiAoIWVsZW1lbnRzKSB7XG5cdFx0XHRyZXR1cm4gW107XG5cdFx0fVxuXHRcdGNvbnN0IHJldHVybkFycmF5ID0gW107XG5cdFx0bGV0IGk7XG5cdFx0aWYgKGVsZW1lbnRzIGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQpIHtcblx0XHRcdGNvbnN0IHtvcHRpb25zfSA9IGVsZW1lbnRzO1xuXHRcdFx0Zm9yIChpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0aWYgKCFvcHRpb25zW2ldLnNlbGVjdGVkKSB7XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnNbaV0udmFsdWVzKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm5BcnJheS5wdXNoKG9wdGlvbnNbaV0udmFsdWVzKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuQXJyYXkucHVzaChvcHRpb25zW2ldLnZhbHVlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKGVsZW1lbnRzIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xuXHRcdFx0aWYgKHR5cGUgJiYgZWxlbWVudHMudHlwZSAhPT0gdHlwZSkge1xuXHRcdFx0XHRyZXR1cm4gW107XG5cdFx0XHR9IGVsc2UgaWYgKCFlbGVtZW50cy5jaGVja2VkKSB7XG5cdFx0XHRcdHJldHVybiBbZWxlbWVudHMudmFsdWVdO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0aWYgKCFlbGVtZW50c1tpXS5jaGVja2VkKSB7XG5cdFx0XHRcdFx0aWYgKHR5cGUgJiYgZWxlbWVudHNbaV0udHlwZSAhPT0gdHlwZSkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChlbGVtZW50c1tpXS52YWx1ZXMpIHtcblx0XHRcdFx0XHRcdHJldHVybkFycmF5LnB1c2goZWxlbWVudHNbaV0udmFsdWVzKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuQXJyYXkucHVzaChlbGVtZW50c1tpXS52YWx1ZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByZXR1cm5BcnJheTtcblx0fTtcblx0LyoqXG5cdCAqIFV0aWxpdGllcyB0byBoZWxwIHByb2Nlc3MgSVAgYWRkcmVzc2VzLlxuXHQgKlxuXHQgKiBAbmFtZXNwYWNlIE1vcmViaXRzLmlwXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0c1xuXHQgKi9cblx0TW9yZWJpdHMuaXAgPSB7XG5cdFx0LyoqXG5cdFx0ICogQ29udmVydHMgYW4gSVB2NiBhZGRyZXNzIHRvIHRoZSBjYW5vbmljYWwgZm9ybSBzdG9yZWQgYW5kIHVzZWQgYnkgTWVkaWFXaWtpLlxuXHRcdCAqIEphdmFTY3JpcHQgdHJhbnNsYXRpb24gb2YgdGhlIHtAbGluayBodHRwczovL2dlcnJpdC53aWtpbWVkaWEub3JnL3IvcGx1Z2lucy9naXRpbGVzL21lZGlhd2lraS9jb3JlLysvOGViNmFjM2U4NGVhMzMxMmQzOTFjYTk2YzEyYzQ5ZTNhZDA3NTNiYi9pbmNsdWRlcy91dGlscy9JUC5waHAjMTMxfGBJUDo6c2FuaXRpemVJUCgpYH1cblx0XHQgKiBmdW5jdGlvbiBmcm9tIHRoZSBJUFV0aWxzIGxpYnJhcnkuICBBZGRyZXNzZXMgYXJlIHZlcmJvc2UsIHVwcGVyY2FzZSxcblx0XHQgKiBub3JtYWxpemVkLCBhbmQgZXhwYW5kZWQgdG8gOCB3b3Jkcy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBhZGRyZXNzIC0gVGhlIElQdjYgYWRkcmVzcywgd2l0aCBvciB3aXRob3V0IENJRFIuXG5cdFx0ICogQHJldHVybnMge3N0cmluZ31cblx0XHQgKi9cblx0XHRzYW5pdGl6ZUlQdjY6IChhZGRyZXNzKSA9PiB7XG5cdFx0XHRhZGRyZXNzID0gYWRkcmVzcy50cmltKCk7XG5cdFx0XHRpZiAoYWRkcmVzcyA9PT0gJycpIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIW13LnV0aWwuaXNJUHY2QWRkcmVzcyhhZGRyZXNzLCB0cnVlKSkge1xuXHRcdFx0XHRyZXR1cm4gYWRkcmVzczsgLy8gbm90aGluZyBlbHNlIHRvIGRvIGZvciBJUHY0IGFkZHJlc3NlcyBvciBpbnZhbGlkIG9uZXNcblx0XHRcdH1cblx0XHRcdC8vIFJlbW92ZSBhbnkgd2hpdGVzcGFjZXMsIGNvbnZlcnQgdG8gdXBwZXIgY2FzZVxuXHRcdFx0YWRkcmVzcyA9IGFkZHJlc3MudG9VcHBlckNhc2UoKTtcblx0XHRcdC8vIEV4cGFuZCB6ZXJvIGFiYnJldmlhdGlvbnNcblx0XHRcdGNvbnN0IGFiYnJldlBvcyA9IGFkZHJlc3MuaW5kZXhPZignOjonKTtcblx0XHRcdGlmIChhYmJyZXZQb3MgPiAtMSkge1xuXHRcdFx0XHQvLyBXZSBrbm93IHRoaXMgaXMgdmFsaWQgSVB2Ni4gRmluZCB0aGUgbGFzdCBpbmRleCBvZiB0aGVcblx0XHRcdFx0Ly8gYWRkcmVzcyBiZWZvcmUgYW55IENJRFIgbnVtYmVyIChlLmcuIFwiYTpiOmM6Oi8yNFwiKS5cblx0XHRcdFx0Y29uc3QgQ0lEUlN0YXJ0ID0gYWRkcmVzcy5pbmRleE9mKCcvJyk7XG5cdFx0XHRcdGNvbnN0IGFkZHJlc3NFbmQgPSBDSURSU3RhcnQgPT09IC0xID8gYWRkcmVzcy5sZW5ndGggLSAxIDogQ0lEUlN0YXJ0IC0gMTtcblx0XHRcdFx0Ly8gSWYgdGhlICc6OicgaXMgYXQgdGhlIGJlZ2lubmluZy4uLlxuXHRcdFx0XHRsZXQgcmVwZWF0O1xuXHRcdFx0XHRsZXQgZXh0cmE7XG5cdFx0XHRcdGxldCBwYWQ7XG5cdFx0XHRcdGlmIChhYmJyZXZQb3MgPT09IDApIHtcblx0XHRcdFx0XHRyZXBlYXQgPSAnMDonO1xuXHRcdFx0XHRcdGV4dHJhID0gYWRkcmVzcyA9PT0gJzo6JyA/ICcwJyA6ICcnOyAvLyBmb3IgdGhlIGFkZHJlc3MgJzo6J1xuXHRcdFx0XHRcdHBhZCA9IDk7IC8vIDcrMiAoZHVlIHRvICc6OicpXG5cdFx0XHRcdFx0Ly8gSWYgdGhlICc6OicgaXMgYXQgdGhlIGVuZC4uLlxuXHRcdFx0XHR9IGVsc2UgaWYgKGFiYnJldlBvcyA9PT0gYWRkcmVzc0VuZCAtIDEpIHtcblx0XHRcdFx0XHRyZXBlYXQgPSAnOjAnO1xuXHRcdFx0XHRcdGV4dHJhID0gJyc7XG5cdFx0XHRcdFx0cGFkID0gOTsgLy8gNysyIChkdWUgdG8gJzo6Jylcblx0XHRcdFx0XHQvLyBJZiB0aGUgJzo6JyBpcyBpbiB0aGUgbWlkZGxlLi4uXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmVwZWF0ID0gJzowJztcblx0XHRcdFx0XHRleHRyYSA9ICc6Jztcblx0XHRcdFx0XHRwYWQgPSA4OyAvLyA2KzIgKGR1ZSB0byAnOjonKVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0bGV0IHJlcGxhY2VtZW50ID0gcmVwZWF0O1xuXHRcdFx0XHRwYWQgLT0gYWRkcmVzcy5zcGxpdCgnOicpLmxlbmd0aCAtIDE7XG5cdFx0XHRcdGZvciAobGV0IGkgPSAxOyBpIDwgcGFkOyBpKyspIHtcblx0XHRcdFx0XHRyZXBsYWNlbWVudCArPSByZXBlYXQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmVwbGFjZW1lbnQgKz0gZXh0cmE7XG5cdFx0XHRcdGFkZHJlc3MgPSBhZGRyZXNzLnJlcGxhY2UoJzo6JywgcmVwbGFjZW1lbnQpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gUmVtb3ZlIGxlYWRpbmcgemVyb3MgZnJvbSBlYWNoIGJsb2MgYXMgbmVlZGVkXG5cdFx0XHRyZXR1cm4gYWRkcmVzcy5yZXBsYWNlKC8oXnw6KTArKFswLTlBLUZhLWZdezEsNH0pL2csICckMSQyJyk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBEZXRlcm1pbmUgaWYgdGhlIGdpdmVuIElQIGFkZHJlc3MgaXMgYSByYW5nZS4gIEp1c3QgY29uam9pbnNcblx0XHQgKiBgbXcudXRpbC5pc0lQQWRkcmVzc2Agd2l0aCBhbmQgd2l0aG91dCB0aGUgYGFsbG93QmxvY2tgIG9wdGlvbi5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBpcFxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufSAtIFRydWUgaWYgZ2l2ZW4gYSB2YWxpZCBJUCBhZGRyZXNzIHJhbmdlLCBmYWxzZSBvdGhlcndpc2UuXG5cdFx0ICovXG5cdFx0aXNSYW5nZTogKGlwKSA9PiB7XG5cdFx0XHRyZXR1cm4gbXcudXRpbC5pc0lQQWRkcmVzcyhpcCwgdHJ1ZSkgJiYgIW13LnV0aWwuaXNJUEFkZHJlc3MoaXApO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogQ2hlY2sgdGhhdCBhbiBJUCByYW5nZSBpcyB3aXRoaW4gdGhlIENJRFIgbGltaXRzLiAgTW9zdCBsaWtlbHkgdG8gYmUgdXNlZnVsXG5cdFx0ICogaW4gY29uanVuY3Rpb24gd2l0aCBgd2dSZWxldmFudFVzZXJOYW1lYC4gIENJRFIgbGltaXRzIGFyZSBoYXJkY29kZWQgYXMgLzE2XG5cdFx0ICogZm9yIElQdjQgYW5kIC8zMiBmb3IgSVB2Ni5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBpcFxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufSAtIFRydWUgZm9yIHZhbGlkIHJhbmdlcyB3aXRoaW4gdGhlIENJRFIgbGltaXRzLFxuXHRcdCAqIG90aGVyd2lzZSBmYWxzZSAocmFuZ2VzIG91dHNpZGUgdGhlIGxpbWl0LCBzaW5nbGUgSVBzLCBub24tSVBzKS5cblx0XHQgKi9cblx0XHR2YWxpZENJRFI6IChpcCkgPT4ge1xuXHRcdFx0aWYgKE1vcmViaXRzLmlwLmlzUmFuZ2UoaXApKSB7XG5cdFx0XHRcdGNvbnN0IHN1Ym5ldCA9IE51bWJlci5wYXJzZUludChpcC5tYXRjaCgvXFwvKFxcZHsxLDN9KSQvKVsxXSwgMTApO1xuXHRcdFx0XHRpZiAoc3VibmV0KSB7XG5cdFx0XHRcdFx0Ly8gU2hvdWxkIGJlIHJlZHVuZGFudFxuXHRcdFx0XHRcdGlmIChtdy51dGlsLmlzSVB2NkFkZHJlc3MoaXAsIHRydWUpKSB7XG5cdFx0XHRcdFx0XHRpZiAoc3VibmV0ID49IDMyKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoc3VibmV0ID49IDE2KSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEdldCB0aGUgLzY0IHN1Ym5ldCBmb3IgYW4gSVB2NiBhZGRyZXNzLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGlwdjYgLSBUaGUgSVB2NiBhZGRyZXNzLCB3aXRoIG9yIHdpdGhvdXQgYSBzdWJuZXQuXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW58c3RyaW5nfSAtIEZhbHNlIGlmIG5vdCBJUHY2IG9yIGJpZ2dlciB0aGFuIGEgNjQsXG5cdFx0ICogb3RoZXJ3aXNlIHRoZSAoc2FuaXRpemVkKSAvNjQgYWRkcmVzcy5cblx0XHQgKi9cblx0XHRnZXQ2NDogKGlwdjYpID0+IHtcblx0XHRcdGlmICghaXB2NiB8fCAhbXcudXRpbC5pc0lQdjZBZGRyZXNzKGlwdjYsIHRydWUpKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHN1Ym5ldE1hdGNoID0gaXB2Ni5tYXRjaCgvXFwvKFxcZHsxLDN9KSQvKTtcblx0XHRcdGlmIChzdWJuZXRNYXRjaCAmJiBOdW1iZXIucGFyc2VJbnQoc3VibmV0TWF0Y2hbMV0sIDEwKSA8IDY0KSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGlwdjYgPSBNb3JlYml0cy5pcC5zYW5pdGl6ZUlQdjYoaXB2Nik7XG5cdFx0XHRjb25zdCBpcFJlZ2V4ID0gL14oKD86WzAtOUEtRl17MSw0fTopezR9KSg/OlswLTlBLUZdezEsNH06KXszfVswLTlBLUZdezEsNH0oPzpcXC9cXGR7MSwzfSk/JC87XG5cdFx0XHRyZXR1cm4gaXB2Ni5yZXBsYWNlKGlwUmVnZXgsICckMScuY29uY2F0KCcwOjA6MDowLzY0JykpO1xuXHRcdH0sXG5cdH07XG5cdC8qKlxuXHQgKiBIZWxwZXIgZnVuY3Rpb25zIHRvIG1hbmlwdWxhdGUgc3RyaW5ncy5cblx0ICpcblx0ICogQG5hbWVzcGFjZSBNb3JlYml0cy5zdHJpbmdcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzXG5cdCAqL1xuXHRNb3JlYml0cy5zdHJpbmcgPSB7XG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHN0clxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dG9VcHBlckNhc2VGaXJzdENoYXI6IChzdHIpID0+IHtcblx0XHRcdHN0ciA9IHN0ci50b1N0cmluZygpO1xuXHRcdFx0cmV0dXJuIHN0ci5zbGljZSgwLCAxKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHN0clxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0dG9Mb3dlckNhc2VGaXJzdENoYXI6IChzdHIpID0+IHtcblx0XHRcdHN0ciA9IHN0ci50b1N0cmluZygpO1xuXHRcdFx0cmV0dXJuIHN0ci5zbGljZSgwLCAxKS50b0xvd2VyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogR2l2ZXMgYW4gYXJyYXkgb2Ygc3Vic3RyaW5ncyBvZiBgc3RyYCAtIHN0YXJ0aW5nIHdpdGggYHN0YXJ0YCBhbmRcblx0XHQgKiBlbmRpbmcgd2l0aCBgZW5kYCAtIHdoaWNoIGlzIG5vdCBpbiBgc2tpcGxpc3RgLiAgSW50ZW5kZWQgZm9yIHVzZVxuXHRcdCAqIG9uIHdpa2l0ZXh0IHdpdGggdGVtcGxhdGVzIG9yIGxpbmtzLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHN0clxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBzdGFydFxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBlbmRcblx0XHQgKiBAcGFyYW0geyhzdHJpbmdbXXxzdHJpbmcpfSBbc2tpcGxpc3RdXG5cdFx0ICogQHJldHVybnMge3N0cmluZ1tdfVxuXHRcdCAqIEB0aHJvd3MgSWYgdGhlIGBzdGFydGAgYW5kIGBlbmRgIHN0cmluZ3MgYXJlbid0IG9mIHRoZSBzYW1lIGxlbmd0aC5cblx0XHQgKiBAdGhyb3dzIElmIGBza2lwbGlzdGAgaXNuJ3QgYW4gYXJyYXkgb3Igc3RyaW5nXG5cdFx0ICovXG5cdFx0c3BsaXRXZWlnaHRlZEJ5S2V5czogKHN0ciwgc3RhcnQsIGVuZCwgc2tpcGxpc3QpID0+IHtcblx0XHRcdGlmIChzdGFydC5sZW5ndGggIT09IGVuZC5sZW5ndGgpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdzdGFydCBtYXJrZXIgYW5kIGVuZCBtYXJrZXIgbXVzdCBiZSBvZiB0aGUgc2FtZSBsZW5ndGgnKTtcblx0XHRcdH1cblx0XHRcdGxldCBsZXZlbCA9IDA7XG5cdFx0XHRsZXQgaW5pdGlhbCA9IG51bGw7XG5cdFx0XHRjb25zdCByZXN1bHQgPSBbXTtcblx0XHRcdGlmICghQXJyYXkuaXNBcnJheShza2lwbGlzdCkpIHtcblx0XHRcdFx0aWYgKHNraXBsaXN0ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRza2lwbGlzdCA9IFtdO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBza2lwbGlzdCA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHRza2lwbGlzdCA9IFtza2lwbGlzdF07XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignbm9uLWFwcGxpY2FibGUgc2tpcGxpc3QgcGFyYW1ldGVyJyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiBza2lwbGlzdCkge1xuXHRcdFx0XHRcdGlmIChzdHIuc2xpY2UoaSwgaSArIGVsZW1lbnQubGVuZ3RoKSA9PT0gZWxlbWVudCkge1xuXHRcdFx0XHRcdFx0aSArPSBlbGVtZW50Lmxlbmd0aCAtIDE7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHN0ci5zbGljZShpLCBpICsgc3RhcnQubGVuZ3RoKSA9PT0gc3RhcnQpIHtcblx0XHRcdFx0XHRpZiAoaW5pdGlhbCA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0aW5pdGlhbCA9IGk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCsrbGV2ZWw7XG5cdFx0XHRcdFx0aSArPSBzdGFydC5sZW5ndGggLSAxO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHN0ci5zbGljZShpLCBpICsgZW5kLmxlbmd0aCkgPT09IGVuZCkge1xuXHRcdFx0XHRcdC0tbGV2ZWw7XG5cdFx0XHRcdFx0aSArPSBlbmQubGVuZ3RoIC0gMTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWxldmVsICYmIGluaXRpYWwgIT09IG51bGwpIHtcblx0XHRcdFx0XHRyZXN1bHQucHVzaChzdHIuc2xpY2UoaW5pdGlhbCwgaSArIDEpKTtcblx0XHRcdFx0XHRpbml0aWFsID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEZvcm1hdHMgZnJlZWZvcm0gXCJyZWFzb25cIiAoZnJvbSBhIHRleHRhcmVhKSBmb3IgZGVsZXRpb24vb3RoZXJcblx0XHQgKiB0ZW1wbGF0ZXMgdGhhdCBhcmUgZ29pbmcgdG8gYmUgc3Vic3RpdHV0ZWQsIChlLmcuIFBST0QsIFhGRCwgUlBQKS5cblx0XHQgKiBIYW5kbGVzIGB8YCBvdXRzaWRlIGEgbm93aWtpIHRhZy5cblx0XHQgKiBPcHRpb25hbGx5LCBhbHNvIGFkZHMgYSBzaWduYXR1cmUgaWYgbm90IHByZXNlbnQgYWxyZWFkeS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFthZGRTaWddXG5cdFx0ICogQHJldHVybnMge3N0cmluZ31cblx0XHQgKi9cblx0XHRmb3JtYXRSZWFzb25UZXh0OiAoc3RyLCBhZGRTaWcpID0+IHtcblx0XHRcdGxldCByZWFzb24gPSAoc3RyIHx8ICcnKS50b1N0cmluZygpLnRyaW0oKTtcblx0XHRcdGNvbnN0IHVuYmluZGVyID0gbmV3IE1vcmViaXRzLnVuYmluZGVyKHJlYXNvbik7XG5cdFx0XHR1bmJpbmRlci51bmJpbmQoJzxubycuY29uY2F0KCd3aWtpJywgJz4nKSwgJzwvbm8nLmNvbmNhdCgnd2lraScsICc+JykpO1xuXHRcdFx0dW5iaW5kZXIuY29udGVudCA9IHVuYmluZGVyLmNvbnRlbnQucmVwbGFjZSgvXFx8L2csICd7eycuY29uY2F0KCdzdWJzdDonLCAnIX19JykpO1xuXHRcdFx0cmVhc29uID0gdW5iaW5kZXIucmViaW5kKCk7XG5cdFx0XHRpZiAoYWRkU2lnKSB7XG5cdFx0XHRcdGNvbnN0IHNpZyA9ICd+ficuY29uY2F0KCd+ficpO1xuXHRcdFx0XHRjb25zdCBzaWdJbmRleCA9IHJlYXNvbi5sYXN0SW5kZXhPZihzaWcpO1xuXHRcdFx0XHRpZiAoc2lnSW5kZXggPT09IC0xIHx8IHNpZ0luZGV4ICE9PSByZWFzb24ubGVuZ3RoIC0gc2lnLmxlbmd0aCkge1xuXHRcdFx0XHRcdHJlYXNvbiArPSBgICR7c2lnfWA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiByZWFzb24udHJpbSgpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogRm9ybWF0cyBhIFwicmVhc29uXCIgKGZyb20gYSB0ZXh0YXJlYSkgZm9yIGluY2x1c2lvbiBpbiBhIHVzZXJzcGFjZVxuXHRcdCAqIGxvZy4gIFJlcGxhY2VzIG5ld2xpbmVzIHdpdGgge3tQYn19LCBhbmQgYWRkcyBhbiBleHRyYSBgI2AgYmVmb3JlXG5cdFx0ICogbGlzdCBpdGVtcyBmb3IgcHJvcGVyIGZvcm1hdHRpbmcuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG5cdFx0ICogQHJldHVybnMge3N0cmluZ31cblx0XHQgKi9cblx0XHRmb3JtYXRSZWFzb25Gb3JMb2c6IChzdHIpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdHN0clxuXHRcdFx0XHRcdC8vIGhhbmRsZSBsaW5lIGJyZWFrcywgd2hpY2ggb3RoZXJ3aXNlIGJyZWFrIG51bWJlcmluZ1xuXHRcdFx0XHRcdC5yZXBsYWNlKC9cXG4rL2csICd7e3BifX0nKVxuXHRcdFx0XHRcdC8vIHB1dCBhbiBleHRyYSAjIGluIGZyb250IGJlZm9yZSBidWxsZXRlZCBvciBudW1iZXJlZCBsaXN0IGl0ZW1zXG5cdFx0XHRcdFx0LnJlcGxhY2UoL14oIyspL2dtLCAnIyQxJylcblx0XHRcdFx0XHQucmVwbGFjZSgvXihcXCorKS9nbSwgJyMkMScpXG5cdFx0XHQpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogTGlrZSBgU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlKClgLCBidXQgZXNjYXBlcyBhbnkgZG9sbGFyIHNpZ25zIGluXG5cdFx0ICogdGhlIHJlcGxhY2VtZW50IHN0cmluZy4gIFVzZWZ1bCB3aGVuIHRoZSB0aGUgcmVwbGFjZW1lbnQgc3RyaW5nIGlzXG5cdFx0ICogYXJiaXRyYXJ5LCBzdWNoIGFzIGEgdXNlcm5hbWUgb3IgZnJlZWZvcm0gdXNlciBpbnB1dCwgYW5kIGNvdWxkXG5cdFx0ICogY29udGFpbiBkb2xsYXIgc2lnbnMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIC0gVGV4dCBpbiB3aGljaCB0byByZXBsYWNlLlxuXHRcdCAqIEBwYXJhbSB7KHN0cmluZ3xSZWdFeHApfSBwYXR0ZXJuXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHJlcGxhY2VtZW50XG5cdFx0ICogQHJldHVybnMge3N0cmluZ31cblx0XHQgKi9cblx0XHRzYWZlUmVwbGFjZTogKHN0cmluZywgcGF0dGVybiwgcmVwbGFjZW1lbnQpID0+IHtcblx0XHRcdHJldHVybiBzdHJpbmcucmVwbGFjZShwYXR0ZXJuLCByZXBsYWNlbWVudC5yZXBsYWNlKC9cXCQvZywgJyQkJCQnKSk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBEZXRlcm1pbmUgaWYgdGhlIHVzZXItcHJvdmlkZWQgZXhwaXJhdGlvbiB3aWxsIGJlIGNvbnNpZGVyZWQgYW5cblx0XHQgKiBpbmZpbml0ZS1sZW5ndGggYnkgTVcuXG5cdFx0ICpcblx0XHQgKiBAc2VlIHtAbGluayBodHRwczovL3BoYWJyaWNhdG9yLndpa2ltZWRpYS5vcmcvVDY4NjQ2fVxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGV4cGlyeVxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHRcdCAqL1xuXHRcdGlzSW5maW5pdHk6IChleHBpcnkpID0+IHtcblx0XHRcdHJldHVybiBbJ2luZGVmaW5pdGUnLCAnaW5maW5pdHknLCAnaW5maW5pdGUnLCAnbmV2ZXInXS5pbmNsdWRlcyhleHBpcnkpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogRXNjYXBlcyBhIHN0cmluZyB0byBiZSB1c2VkIGluIGEgUmVnRXhwLCByZXBsYWNpbmcgc3BhY2VzIGFuZFxuXHRcdCAqIHVuZGVyc2NvcmVzIHdpdGggYFtfIF1gIGFzIHRoZXkgYXJlIG9mdGVuIGVxdWl2YWxlbnQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIFN0cmluZyB0byBiZSBlc2NhcGVkLlxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9IC0gVGhlIGVzY2FwZWQgdGV4dC5cblx0XHQgKi9cblx0XHRlc2NhcGVSZWdFeHA6ICh0ZXh0KSA9PiB7XG5cdFx0XHRyZXR1cm4gbXcudXRpbC5lc2NhcGVSZWdFeHAodGV4dCkucmVwbGFjZSgvIHxfL2csICdbXyBdJyk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBmb3JtYXRUaW1lXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0geyp9IHRpbWUgVGhlIHN0cmluZyB0byBmb3JhbXRcblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdGZvcm1hdFRpbWU6ICh0aW1lKSA9PiB7XG5cdFx0XHRsZXQgbTtcblx0XHRcdGlmICgobSA9IHRpbWUubWF0Y2goL15cXHMqKFxcZCspXFxzKnNlYyhvbmQpP3M/XFxzKiQvKSkgIT09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuIGAke21bMV1956eSYDtcblx0XHRcdH1cblx0XHRcdGlmICgobSA9IHRpbWUubWF0Y2goL15cXHMqKFxcZCspXFxzKm1pbih1dGUpP3M/XFxzKiQvKSkgIT09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuIGAke21bMV195YiGYDtcblx0XHRcdH1cblx0XHRcdGlmICgobSA9IHRpbWUubWF0Y2goL15cXHMqKFxcZCspXFxzKmhvdXJzP1xccyokLykpICE9PSBudWxsKSB7XG5cdFx0XHRcdHJldHVybiBtWzFdICsgd2luZG93LndnVUxTKCflsI/ml7YnLCAn5bCP5pmCJyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoKG0gPSB0aW1lLm1hdGNoKC9eXFxzKihcXGQrKVxccypkYXlzP1xccyokLykpICE9PSBudWxsKSB7XG5cdFx0XHRcdHJldHVybiBgJHttWzFdfeWkqWA7XG5cdFx0XHR9XG5cdFx0XHRpZiAoKG0gPSB0aW1lLm1hdGNoKC9eXFxzKihcXGQrKVxccyp3ZWVrcz9cXHMqJC8pKSAhPT0gbnVsbCkge1xuXHRcdFx0XHRyZXR1cm4gbVsxXSArIHdpbmRvdy53Z1VMUygn5ZGoJywgJ+mAsScpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKChtID0gdGltZS5tYXRjaCgvXlxccyooXFxkKylcXHMqbW9udGhzP1xccyokLykpICE9PSBudWxsKSB7XG5cdFx0XHRcdHJldHVybiBtWzFdICsgd2luZG93LndnVUxTKCfkuKrmnIgnLCAn5YCL5pyIJyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoKG0gPSB0aW1lLm1hdGNoKC9eXFxzKihcXGQrKVxccyp5ZWFycz9cXHMqJC8pKSAhPT0gbnVsbCkge1xuXHRcdFx0XHRyZXR1cm4gYCR7bVsxXX3lubRgO1xuXHRcdFx0fVxuXHRcdFx0aWYgKE1vcmViaXRzLnN0cmluZy5pc0luZmluaXR5KHRpbWUudHJpbSgpKSkge1xuXHRcdFx0XHRyZXR1cm4gd2luZG93LndnVUxTKCfml6DpmZDmnJ8nLCAn54Sh6ZmQ5pyfJyk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGltZTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEFwcGVuZCBwdW5jdHVhdGlvbiB0byBhIHN0cmluZyB3aGVuIGl0J3MgbWlzc2luZ1xuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHN0clxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBwdW5jdHVhdGlvblxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0YXBwZW5kUHVuY3R1YXRpb246IChzdHIsIHB1bmN0dWF0aW9uKSA9PiB7XG5cdFx0XHRpZiAocHVuY3R1YXRpb24gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRwdW5jdHVhdGlvbiA9ICfjgIInO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHN0ci5zZWFyY2goL1suPyE744CC77yf77yB77ybXSQvKSA9PT0gLTEpIHtcblx0XHRcdFx0c3RyICs9IHB1bmN0dWF0aW9uO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHN0cjtcblx0XHR9LFxuXHR9O1xuXHQvKipcblx0ICogSGVscGVyIGZ1bmN0aW9ucyB0byBtYW5pcHVsYXRlIGFycmF5cy5cblx0ICpcblx0ICogQG5hbWVzcGFjZSBNb3JlYml0cy5hcnJheVxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHNcblx0ICovXG5cdE1vcmViaXRzLmFycmF5ID0ge1xuXHRcdC8qKlxuXHRcdCAqIFJlbW92ZSBkdXBsaWNhdGVkIGl0ZW1zIGZyb20gYW4gYXJyYXkuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0FycmF5fSBhcnJcblx0XHQgKiBAcmV0dXJucyB7QXJyYXl9IEEgY29weSBvZiB0aGUgYXJyYXkgd2l0aCBkdXBsaWNhdGVzIHJlbW92ZWQuXG5cdFx0ICogQHRocm93cyBXaGVuIHByb3ZpZGVkIGEgbm9uLWFycmF5LlxuXHRcdCAqL1xuXHRcdHVuaXE6IChhcnIpID0+IHtcblx0XHRcdGlmICghQXJyYXkuaXNBcnJheShhcnIpKSB7XG5cdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0Egbm9uLWFycmF5IG9iamVjdCBwYXNzZWQgdG8gTW9yZWJpdHMuYXJyYXkudW5pcScpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGFyci5maWx0ZXIoKGl0ZW0sIGlkeCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gYXJyLmluZGV4T2YoaXRlbSkgPT09IGlkeDtcblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogUmVtb3ZlIG5vbi1kdXBsaWNhdGVkIGl0ZW1zIGZyb20gYW4gYXJyYXkuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0FycmF5fSBhcnJcblx0XHQgKiBAcmV0dXJucyB7QXJyYXl9IEEgY29weSBvZiB0aGUgYXJyYXkgd2l0aCB0aGUgZmlyc3QgaW5zdGFuY2Ugb2YgZWFjaCB2YWx1ZVxuXHRcdCAqIHJlbW92ZWQ7IHN1YnNlcXVlbnQgaW5zdGFuY2VzIG9mIHRob3NlIHZhbHVlcyAoZHVwbGljYXRlcykgcmVtYWluLlxuXHRcdCAqIEB0aHJvd3MgV2hlbiBwcm92aWRlZCBhIG5vbi1hcnJheS5cblx0XHQgKi9cblx0XHRkdXBzOiAoYXJyKSA9PiB7XG5cdFx0XHRpZiAoIUFycmF5LmlzQXJyYXkoYXJyKSkge1xuXHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdBIG5vbi1hcnJheSBvYmplY3QgcGFzc2VkIHRvIE1vcmViaXRzLmFycmF5LmR1cHMnKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBhcnIuZmlsdGVyKChpdGVtLCBpZHgpID0+IHtcblx0XHRcdFx0cmV0dXJuIGFyci5pbmRleE9mKGl0ZW0pICE9PSBpZHg7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEJyZWFrIHVwIGFuIGFycmF5IGludG8gc21hbGxlciBhcnJheXMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0FycmF5fSBhcnJcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gc2l6ZSAtIFNpemUgb2YgZWFjaCBjaHVuayAoZXhjZXB0IHRoZSBsYXN0LCB3aGljaCBjb3VsZCBiZSBkaWZmZXJlbnQpLlxuXHRcdCAqIEByZXR1cm5zIHtBcnJheVtdfSBBbiBhcnJheSBjb250YWluaW5nIHRoZSBzbWFsbGVyLCBjaHVua2VkIGFycmF5cy5cblx0XHQgKiBAdGhyb3dzIFdoZW4gcHJvdmlkZWQgYSBub24tYXJyYXkuXG5cdFx0ICovXG5cdFx0Y2h1bms6IChhcnIsIHNpemUpID0+IHtcblx0XHRcdGlmICghQXJyYXkuaXNBcnJheShhcnIpKSB7XG5cdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0Egbm9uLWFycmF5IG9iamVjdCBwYXNzZWQgdG8gTW9yZWJpdHMuYXJyYXkuY2h1bmsnKTtcblx0XHRcdH1cblx0XHRcdGlmICh0eXBlb2Ygc2l6ZSAhPT0gJ251bWJlcicgfHwgc2l6ZSA8PSAwKSB7XG5cdFx0XHRcdC8vIHByZXR0eSBpbXBvc3NpYmxlIHRvIGRvIGFueXRoaW5nIDopXG5cdFx0XHRcdHJldHVybiBbYXJyXTsgLy8gd2UgcmV0dXJuIGFuIGFycmF5IGNvbnNpc3Rpbmcgb2YgdGhpcyBhcnJheS5cblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgbnVtQ2h1bmtzID0gTWF0aC5jZWlsKGFyci5sZW5ndGggLyBzaXplKTtcblx0XHRcdGNvbnN0IHJlc3VsdCA9IEFycmF5LmZyb20oe1xuXHRcdFx0XHRsZW5ndGg6IG51bUNodW5rcyxcblx0XHRcdH0pO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBudW1DaHVua3M7IGkrKykge1xuXHRcdFx0XHRyZXN1bHRbaV0gPSBhcnIuc2xpY2UoaSAqIHNpemUsIChpICsgMSkgKiBzaXplKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fSxcblx0fTtcblx0LyoqXG5cdCAqIFV0aWxpdGllcyB0byBlbmhhbmNlIHNlbGVjdDIgbWVudXMuIFNlZSB0d2lua2xld2FybiwgdHdpbmtsZWJsb2NrXG5cdCAqIGZvciBzYW1wbGUgdXNhZ2VzLlxuXHQgKlxuXHQgKiBAc2VlIHtAbGluayBodHRwczovL3NlbGVjdDIub3JnL31cblx0ICpcblx0ICogQG5hbWVzcGFjZSBNb3JlYml0cy5zZWxlY3QyXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0c1xuXHQgKiBAcmVxdWlyZXMganF1ZXJ5LnNlbGVjdDJcblx0ICovXG5cdE1vcmViaXRzLnNlbGVjdDIgPSB7XG5cdFx0bWF0Y2hlcnM6IHtcblx0XHRcdC8qKlxuXHRcdFx0ICogQ3VzdG9tIG1hdGNoZXIgaW4gd2hpY2ggaWYgdGhlIG9wdGdyb3VwIG5hbWUgbWF0Y2hlcywgYWxsIG9wdGlvbnMgaW4gdGhhdFxuXHRcdFx0ICogZ3JvdXAgYXJlIHNob3duLCBsaWtlIGluIGpxdWVyeS5jaG9zZW4uXG5cdFx0XHQgKlxuXHRcdFx0ICogQHBhcmFtIHsqfSBwYXJhbXNcblx0XHRcdCAqIEBwYXJhbSB7Kn0gZGF0YVxuXHRcdFx0ICovXG5cdFx0XHRvcHRncm91cEZ1bGw6IChwYXJhbXMsIGRhdGEpID0+IHtcblx0XHRcdFx0Y29uc3Qgb3JpZ2luYWxNYXRjaGVyID0gJC5mbi5zZWxlY3QyLmRlZmF1bHRzLmRlZmF1bHRzLm1hdGNoZXI7XG5cdFx0XHRcdGNvbnN0IHJlc3VsdCA9IG9yaWdpbmFsTWF0Y2hlcihwYXJhbXMsIGRhdGEpO1xuXHRcdFx0XHRpZiAocmVzdWx0ICYmIHBhcmFtcy50ZXJtICYmIGRhdGEudGV4dC50b1VwcGVyQ2FzZSgpLmluY2x1ZGVzKHBhcmFtcy50ZXJtLnRvVXBwZXJDYXNlKCkpKSB7XG5cdFx0XHRcdFx0cmVzdWx0LmNoaWxkcmVuID0gZGF0YS5jaGlsZHJlbjtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fSxcblx0XHRcdC8qKlxuXHRcdFx0ICogQ3VzdG9tIG1hdGNoZXIgdGhhdCBtYXRjaGVzIGZyb20gdGhlIGJlZ2lubmluZyBvZiB3b3JkcyBvbmx5LlxuXHRcdFx0ICpcblx0XHRcdCAqIEBwYXJhbSB7Kn0gcGFyYW1zXG5cdFx0XHQgKiBAcGFyYW0geyp9IGRhdGFcblx0XHRcdCAqL1xuXHRcdFx0d29yZEJlZ2lubmluZzogKHBhcmFtcywgZGF0YSkgPT4ge1xuXHRcdFx0XHRjb25zdCBvcmlnaW5hbE1hdGNoZXIgPSAkLmZuLnNlbGVjdDIuZGVmYXVsdHMuZGVmYXVsdHMubWF0Y2hlcjtcblx0XHRcdFx0Y29uc3QgcmVzdWx0ID0gb3JpZ2luYWxNYXRjaGVyKHBhcmFtcywgZGF0YSk7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHQhcGFyYW1zLnRlcm0gfHxcblx0XHRcdFx0XHQocmVzdWx0ICYmIG5ldyBSZWdFeHAoYFxcXFxiJHttdy51dGlsLmVzY2FwZVJlZ0V4cChwYXJhbXMudGVybSl9YCwgJ2knKS50ZXN0KHJlc3VsdC50ZXh0KSlcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH0sXG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBVbmRlcmxpbmUgbWF0Y2hlZCBwYXJ0IG9mIG9wdGlvbnMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0geyp9IGRhdGFcblx0XHQgKi9cblx0XHRoaWdobGlnaHRTZWFyY2hNYXRjaGVzOiAoZGF0YSkgPT4ge1xuXHRcdFx0Y29uc3Qgc2VhcmNoVGVybSA9IE1vcmViaXRzLnNlbGVjdDJTZWFyY2hRdWVyeTtcblx0XHRcdGlmICghc2VhcmNoVGVybSB8fCBkYXRhLmxvYWRpbmcpIHtcblx0XHRcdFx0cmV0dXJuIGRhdGEudGV4dDtcblx0XHRcdH1cblx0XHRcdGNvbnN0IGlkeCA9IGRhdGEudGV4dC50b1VwcGVyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoVGVybS50b1VwcGVyQ2FzZSgpKTtcblx0XHRcdGlmIChpZHggPCAwKSB7XG5cdFx0XHRcdHJldHVybiBkYXRhLnRleHQ7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gJCgnPHNwYW4+JykuYXBwZW5kKFxuXHRcdFx0XHRkYXRhLnRleHQuc2xpY2UoMCwgaWR4KSxcblx0XHRcdFx0JCgnPHNwYW4+Jylcblx0XHRcdFx0XHQuY3NzKCd0ZXh0LWRlY29yYXRpb24nLCAndW5kZXJsaW5lJylcblx0XHRcdFx0XHQudGV4dChkYXRhLnRleHQuc2xpY2UoaWR4LCBpZHggKyBzZWFyY2hUZXJtLmxlbmd0aCkpLFxuXHRcdFx0XHRkYXRhLnRleHQuc2xpY2UoaWR4ICsgc2VhcmNoVGVybS5sZW5ndGgpXG5cdFx0XHQpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogSW50ZXJjZXB0IHF1ZXJ5IGFzIGl0IGlzIGhhcHBlbmluZywgZm9yIHVzZSBpbiBoaWdobGlnaHRTZWFyY2hNYXRjaGVzLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHsqfSBwYXJhbXNcblx0XHQgKi9cblx0XHRxdWVyeUludGVyY2VwdG9yOiAocGFyYW1zKSA9PiB7XG5cdFx0XHRNb3JlYml0cy5zZWxlY3QyU2VhcmNoUXVlcnkgPSBwYXJhbXMgJiYgcGFyYW1zLnRlcm07XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBPcGVuIGRyb3Bkb3duIGFuZCBiZWdpbiBzZWFyY2ggd2hlbiB0aGUgYC5zZWxlY3QyLXNlbGVjdGlvbmAgaGFzXG5cdFx0ICogZm9jdXMgYW5kIGEga2V5IGlzIHByZXNzZWQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGV2XG5cdFx0ICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3NlbGVjdDIvc2VsZWN0Mi9pc3N1ZXMvMzI3OSNpc3N1ZWNvbW1lbnQtNDQyNTI0MTQ3fVxuXHRcdCAqL1xuXHRcdGF1dG9TdGFydDogKGV2KSA9PiB7XG5cdFx0XHRpZiAoZXYud2hpY2ggPCA0OCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRsZXQgdGFyZ2V0ID0gJChldi50YXJnZXQpLmNsb3Nlc3QoJy5zZWxlY3QyLWNvbnRhaW5lcicpO1xuXHRcdFx0aWYgKCF0YXJnZXQubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHRhcmdldCA9IHRhcmdldC5wcmV2KCk7XG5cdFx0XHR0YXJnZXQuc2VsZWN0Mignb3BlbicpO1xuXHRcdFx0Y29uc3Qgc2VhcmNoID0gdGFyZ2V0LmRhdGEoJ3NlbGVjdDInKS5kcm9wZG93bi4kc2VhcmNoIHx8IHRhcmdldC5kYXRhKCdzZWxlY3QyJykuc2VsZWN0aW9uLiRzZWFyY2g7XG5cdFx0XHQvLyBVc2UgRE9NIC5mb2N1cygpIHRvIHdvcmsgYXJvdW5kIGEgalF1ZXJ5IDMuNi4wIHJlZ3Jlc3Npb24gKGh0dHBzOi8vZ2l0aHViLmNvbS9zZWxlY3QyL3NlbGVjdDIvaXNzdWVzLzU5OTMpXG5cdFx0XHRzZWFyY2hbMF0uZm9jdXMoKTtcblx0XHR9LFxuXHR9O1xuXHQvKipcblx0ICogVGVtcG9yYXJpbHkgaGlkZSBhIHBhcnQgb2YgYSBzdHJpbmcgd2hpbGUgcHJvY2Vzc2luZyB0aGUgcmVzdCBvZiBpdC5cblx0ICogVXNlZCBieSB7QGxpbmsgTW9yZWJpdHMud2lraXRleHQucGFnZSNjb21tZW50T3V0SW1hZ2V8TW9yZWJpdHMud2lraXRleHQucGFnZS5jb21tZW50T3V0SW1hZ2V9LlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHNcblx0ICogQGNsYXNzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgLSBUaGUgaW5pdGlhbCB0ZXh0IHRvIHByb2Nlc3MuXG5cdCAqIEBleGFtcGxlIGNvbnN0IHUgPSBuZXcgTW9yZWJpdHMudW5iaW5kZXIoJ0hlbGxvIHdvcmxkIDwhLS0gd29ybGQgLS0+IHdvcmxkJyk7XG5cdCAqIHUudW5iaW5kKCc8IS0tJywgJy0tPicpOyAvLyB0ZXh0IGluc2lkZSBjb21tZW50IHJlbWFpbnMgaW50YWN0XG5cdCAqIHUuY29udGVudCA9IHUuY29udGVudC5yZXBsYWNlKC93b3JsZC9nLCAnZWFydGgnKTtcblx0ICogdS5yZWJpbmQoKTsgLy8gZ2l2ZXMgJ0hlbGxvIGVhcnRoIDwhLS0gd29ybGQgLS0+IGVhcnRoJ1xuXHQgKi9cblx0TW9yZWJpdHMudW5iaW5kZXIgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG5cdFx0aWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdub3QgYSBzdHJpbmcnKTtcblx0XHR9XG5cdFx0LyoqIFRoZSB0ZXh0IGJlaW5nIHByb2Nlc3NlZC4gKi9cblx0XHR0aGlzLmNvbnRlbnQgPSBzdHJpbmc7XG5cdFx0dGhpcy5jb3VudGVyID0gMDtcblx0XHR0aGlzLmhpc3RvcnkgPSB7fTtcblx0XHR0aGlzLnByZWZpeCA9IGAlVU5JUTo6JHtNYXRoLnJhbmRvbSgpfTo6YDtcblx0XHR0aGlzLnBvc3RmaXggPSAnOjpVTklRJSc7XG5cdH07XG5cdE1vcmViaXRzLnVuYmluZGVyLnByb3RvdHlwZSA9IHtcblx0XHQvKipcblx0XHQgKiBIaWRlIHRoZSByZWdpb24gZW5jYXBzdWxhdGVkIGJ5IHRoZSBgcHJlZml4YCBhbmQgYHBvc3RmaXhgIGZyb21cblx0XHQgKiBzdHJpbmcgcHJvY2Vzc2luZy4gIGBwcmVmaXhgIGFuZCBgcG9zdGZpeGAgd2lsbCBiZSB1c2VkIGluIGFcblx0XHQgKiBSZWdFeHAsIHNvIGl0ZW1zIHRoYXQgbmVlZCBlc2NhcGluZyBzaG91bGQgYmUgdXNlIGBcXFxcYC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBwcmVmaXhcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gcG9zdGZpeFxuXHRcdCAqIEB0aHJvd3MgSWYgZWl0aGVyIGBwcmVmaXhgIG9yIGBwb3N0Zml4YCBpcyBtaXNzaW5nLlxuXHRcdCAqL1xuXHRcdHVuYmluZChwcmVmaXgsIHBvc3RmaXgpIHtcblx0XHRcdGlmICghcHJlZml4IHx8ICFwb3N0Zml4KSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignQm90aCBwcmVmaXggYW5kIHBvc3RmaXggbXVzdCBiZSBwcm92aWRlZCcpO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcmUgPSBuZXcgUmVnRXhwKGAke3ByZWZpeH0oW1xcXFxzXFxcXFNdKj8pJHtwb3N0Zml4fWAsICdnJyk7XG5cdFx0XHR0aGlzLmNvbnRlbnQgPSB0aGlzLmNvbnRlbnQucmVwbGFjZShyZSwgTW9yZWJpdHMudW5iaW5kZXIuZ2V0Q2FsbGJhY2sodGhpcykpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogUmVzdG9yZSB0aGUgaGlkZGVuIHBvcnRpb24gb2YgdGhlIGBjb250ZW50YCBzdHJpbmcuXG5cdFx0ICpcblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgcHJvY2Vzc2VkIG91dHB1dC5cblx0XHQgKi9cblx0XHRyZWJpbmQoKSB7XG5cdFx0XHRsZXQge2NvbnRlbnR9ID0gdGhpcztcblx0XHRcdGZvciAoY29uc3QgY3VycmVudCBpbiB0aGlzLmhpc3RvcnkpIHtcblx0XHRcdFx0aWYgKCFPYmplY3QuaGFzT3duKHRoaXMuaGlzdG9yeSwgY3VycmVudCkpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb250ZW50ID0gY29udGVudC5yZXBsYWNlKGN1cnJlbnQsIHRoaXMuaGlzdG9yeVtjdXJyZW50XSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHR9LFxuXHRcdHByZWZpeDogbnVsbCxcblx0XHQvLyAlVU5JUTo6MC41OTU1OTgxNjQ0OTM4MzI0Ojpcblx0XHRwb3N0Zml4OiBudWxsLFxuXHRcdC8vIDo6VU5JUSVcblx0XHRjb250ZW50OiBudWxsLFxuXHRcdC8vIHN0cmluZ1xuXHRcdGNvdW50ZXI6IG51bGwsXG5cdFx0Ly8gMCsrXG5cdFx0aGlzdG9yeTogbnVsbCwgLy8ge31cblx0fTtcblx0LyoqXG5cdCAqIEBwYXJhbSB7dHlwZW9mIE1vcmViaXRzfSBzZWxmXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy51bmJpbmRlclxuXHQgKi9cblx0TW9yZWJpdHMudW5iaW5kZXIuZ2V0Q2FsbGJhY2sgPSAoc2VsZikgPT4ge1xuXHRcdHJldHVybiAobWF0Y2gpID0+IHtcblx0XHRcdGNvbnN0IGN1cnJlbnQgPSBzZWxmLnByZWZpeCArIHNlbGYuY291bnRlciArIHNlbGYucG9zdGZpeDtcblx0XHRcdHNlbGYuaGlzdG9yeVtjdXJyZW50XSA9IG1hdGNoO1xuXHRcdFx0KytzZWxmLmNvdW50ZXI7XG5cdFx0XHRyZXR1cm4gY3VycmVudDtcblx0XHR9O1xuXHR9O1xuXHQvKiAqKioqKioqKioqKioqKioqIE1vcmViaXRzLmRhdGUgKioqKioqKioqKioqKioqKiAqL1xuXHQvKipcblx0ICogQ3JlYXRlIGEgZGF0ZSBvYmplY3Qgd2l0aCBlbmhhbmNlZCBwcm9jZXNzaW5nIGNhcGFiaWxpdGllcywgYSBsYVxuXHQgKiB7QGxpbmsgaHR0cHM6Ly9tb21lbnRqcy5jb20vfG1vbWVudC5qc30uIE1lZGlhV2lraSB0aW1lc3RhbXAgZm9ybWF0IGlzIGFsc29cblx0ICogYWNjZXB0YWJsZSwgaW4gYWRkaXRpb24gdG8gZXZlcnl0aGluZyB0aGF0IEpTIERhdGUoKSBhY2NlcHRzLlxuXHQgKlxuXHQgKiBAcGFyYW0gey4uLmFueX0gYXJnc1xuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHNcblx0ICogQGNsYXNzXG5cdCAqL1xuXHRNb3JlYml0cy5kYXRlID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcblx0XHQvLyBDaGVjayBNZWRpYVdpa2kgZm9ybWF0c1xuXHRcdC8vIE11c3QgYmUgZmlyc3Qgc2luY2UgZmlyZWZveCBlcnJvbmVvdXNseSBhY2NlcHRzIHRoZSB0aW1lc3RhbXBcblx0XHQvLyBmb3JtYXQsIHNhbnMgdGltZXpvbmUgKFNlZSBhbHNvOiAjOTIxLCAjOTM2LCAjMTE3NCwgIzExODcpLCBhbmQgdGhlXG5cdFx0Ly8gMTQtZGlnaXQgc3RyaW5nIHdpbGwgYmUgaW50ZXJwcmV0ZWQgZGlmZmVyZW50bHkuXG5cdFx0aWYgKGFyZ3MubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRjb25zdCBbcGFyYW1dID0gYXJncztcblx0XHRcdGlmICgvXlxcZHsxNH0kLy50ZXN0KHBhcmFtKSkge1xuXHRcdFx0XHQvLyBZWVlZTU1EREhIbW1zc1xuXHRcdFx0XHRjb25zdCBkaWdpdE1hdGNoID0gLyhcXGR7NH0pKFxcZHsyfSkoXFxkezJ9KShcXGR7Mn0pKFxcZHsyfSkoXFxkezJ9KS8uZXhlYyhwYXJhbSk7XG5cdFx0XHRcdGlmIChkaWdpdE1hdGNoKSB7XG5cdFx0XHRcdFx0Ly8gLi4uLi4geWVhciAuLi4gbW9udGggLi4gZGF0ZSAuLi4gaG91ciAuLi4uIG1pbnV0ZSAuLi4uLiBzZWNvbmRcblx0XHRcdFx0XHR0aGlzLl9kID0gbmV3IERhdGUoXG5cdFx0XHRcdFx0XHRSZWZsZWN0LmFwcGx5KERhdGUuVVRDLCBudWxsLCBbXG5cdFx0XHRcdFx0XHRcdGRpZ2l0TWF0Y2hbMV0sXG5cdFx0XHRcdFx0XHRcdGRpZ2l0TWF0Y2hbMl0gLSAxLFxuXHRcdFx0XHRcdFx0XHRkaWdpdE1hdGNoWzNdLFxuXHRcdFx0XHRcdFx0XHRkaWdpdE1hdGNoWzRdLFxuXHRcdFx0XHRcdFx0XHRkaWdpdE1hdGNoWzVdLFxuXHRcdFx0XHRcdFx0XHRkaWdpdE1hdGNoWzZdLFxuXHRcdFx0XHRcdFx0XSlcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBwYXJhbSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0Ly8gV2lraXRleHQgc2lnbmF0dXJlIHRpbWVzdGFtcFxuXHRcdFx0XHRjb25zdCBkYXRlUGFydHMgPSBNb3JlYml0cy5sMTBuLnNpZ25hdHVyZVRpbWVzdGFtcEZvcm1hdChwYXJhbSk7XG5cdFx0XHRcdGlmIChkYXRlUGFydHMpIHtcblx0XHRcdFx0XHR0aGlzLl9kID0gbmV3IERhdGUoRGF0ZS5VVEMuYXBwbHkobnVsbCwgZGF0ZVBhcnRzKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKCF0aGlzLl9kKSB7XG5cdFx0XHQvLyBUcnkgc3RhbmRhcmQgZGF0ZVxuXHRcdFx0dGhpcy5fZCA9IG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoRGF0ZSwgW0RhdGUsIC4uLmdlbmVyYXRlQXJyYXkoYXJncyldKSkoKTtcblx0XHR9XG5cdFx0Ly8gU3RpbGwgbm8/XG5cdFx0aWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuXHRcdFx0bXcubG9nLndhcm4oJ0ludmFsaWQgTW9yZWJpdHMuZGF0ZSBpbml0aWFsaXNhdGlvbjonLCBhcmdzKTtcblx0XHR9XG5cdH07XG5cdC8qKlxuXHQgKiBMb2NhbGl6ZWQgc3RyaW5ncyBmb3IgZGF0ZSBwcm9jZXNzaW5nLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMuZGF0ZVxuXHQgKiBAdHlwZSB7b2JqZWN0LjxzdHJpbmcsIHN0cmluZz59XG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nW119IG1vbnRoc1xuXHQgKiBAcHJvcGVydHkge3N0cmluZ1tdfSBtb250aHNTaG9ydFxuXHQgKiBAcHJvcGVydHkge3N0cmluZ1tdfSBkYXlzXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nW119IGRheXNTaG9ydFxuXHQgKiBAcHJvcGVydHkge29iamVjdC48c3RyaW5nLCBzdHJpbmc+fSByZWxhdGl2ZVRpbWVzXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEgPSB7XG5cdFx0Ly8gbWVzc2FnZSBuYW1lcyBoZXJlIGNvcnJlc3BvbmQgdG8gTWVkaWFXaWtpIG1lc3NhZ2UgbmFtZXNcblx0XHQvLyBObyBpMThuIGF0IHRoaXMgdGltZVxuXHRcdG1vbnRoczogWycx5pyIJywgJzLmnIgnLCAnM+aciCcsICc05pyIJywgJzXmnIgnLCAnNuaciCcsICc35pyIJywgJzjmnIgnLCAnOeaciCcsICcxMOaciCcsICcxMeaciCcsICcxMuaciCddLFxuXHRcdG1vbnRoc1Nob3J0OiBbJzHmnIgnLCAnMuaciCcsICcz5pyIJywgJzTmnIgnLCAnNeaciCcsICc25pyIJywgJzfmnIgnLCAnOOaciCcsICc55pyIJywgJzEw5pyIJywgJzEx5pyIJywgJzEy5pyIJ10sXG5cdFx0ZGF5czogWyfmmJ/mnJ/ml6UnLCAn5pif5pyf5LiAJywgJ+aYn+acn+S6jCcsICfmmJ/mnJ/kuIknLCAn5pif5pyf5ZubJywgJ+aYn+acn+S6lCcsICfmmJ/mnJ/lha0nXSxcblx0XHRkYXlzU2hvcnQ6IFsn5pelJywgJ+S4gCcsICfkuownLCAn5LiJJywgJ+WbmycsICfkupQnLCAn5YWtJ10sXG5cdFx0cmVsYXRpdmVUaW1lczoge1xuXHRcdFx0dGhpc0RheTogJ1vku4rlpKldQSBoaDptbScsXG5cdFx0XHRwcmV2RGF5OiAnW+aYqOWkqV1BIGhoOm1tJyxcblx0XHRcdG5leHREYXk6ICdb5piO5aSpXUEgaGg6bW0nLFxuXHRcdFx0dGhpc1dlZWs6ICdkZGRkQSBoaDptbScsXG5cdFx0XHRwYXN0V2VlazogJ1vkuIpdZGRkZEEgaGg6bW0nLFxuXHRcdFx0b3RoZXI6ICdZWVlZLU1NLUREJyxcblx0XHR9LFxuXHR9O1xuXHQvKipcblx0ICogTWFwIHVuaXRzIHdpdGggZ2V0dGVyL3NldHRlciBmdW5jdGlvbiBuYW1lcywgZm9yIGBhZGRgIGFuZCBgc3VidHJhY3RgXG5cdCAqIG1ldGhvZHMuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5kYXRlXG5cdCAqIEB0eXBlIHtvYmplY3QuPHN0cmluZywgc3RyaW5nPn1cblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IHNlY29uZHNcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IG1pbnV0ZXNcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGhvdXJzXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBkYXlzXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB3ZWVrc1xuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gbW9udGhzXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB5ZWFyc1xuXHQgKi9cblx0TW9yZWJpdHMuZGF0ZS51bml0TWFwID0ge1xuXHRcdHNlY29uZHM6ICdTZWNvbmRzJyxcblx0XHRtaW51dGVzOiAnTWludXRlcycsXG5cdFx0aG91cnM6ICdIb3VycycsXG5cdFx0ZGF5czogJ0RhdGUnLFxuXHRcdHdlZWtzOiAnV2VlaycsXG5cdFx0Ly8gTm90IGEgZnVuY3Rpb24gYnV0IGhhbmRsZWQgaW4gYGFkZGAgdGhyb3VnaCBjdW5uaW5nIHVzZSBvZiBtdWx0aXBsaWNhdGlvblxuXHRcdG1vbnRoczogJ01vbnRoJyxcblx0XHR5ZWFyczogJ0Z1bGxZZWFyJyxcblx0fTtcblx0TW9yZWJpdHMuZGF0ZS5wcm90b3R5cGUgPSB7XG5cdFx0LyoqIEByZXR1cm5zIHtib29sZWFufSAqL1xuXHRcdGlzVmFsaWQoKSB7XG5cdFx0XHRyZXR1cm4gIU51bWJlci5pc05hTih0aGlzLmdldFRpbWUoKSk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBAcGFyYW0geyhEYXRlfE1vcmViaXRzLmRhdGUpfSBkYXRlXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdFx0ICovXG5cdFx0aXNCZWZvcmUoZGF0ZSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VGltZSgpIDwgZGF0ZS5nZXRUaW1lKCk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBAcGFyYW0geyhEYXRlfE1vcmViaXRzLmRhdGUpfSBkYXRlXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdFx0ICovXG5cdFx0aXNBZnRlcihkYXRlKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUaW1lKCkgPiBkYXRlLmdldFRpbWUoKTtcblx0XHR9LFxuXHRcdC8qKiBAcmV0dXJucyB7c3RyaW5nfSAqL1xuXHRcdGdldFVUQ01vbnRoTmFtZSgpIHtcblx0XHRcdHJldHVybiBNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEubW9udGhzW3RoaXMuZ2V0VVRDTW9udGgoKV07XG5cdFx0fSxcblx0XHQvKiogQHJldHVybnMge3N0cmluZ30gKi9cblx0XHRnZXRVVENNb250aE5hbWVBYmJyZXYoKSB7XG5cdFx0XHRyZXR1cm4gTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLm1vbnRoc1Nob3J0W3RoaXMuZ2V0VVRDTW9udGgoKV07XG5cdFx0fSxcblx0XHQvKiogQHJldHVybnMge3N0cmluZ30gKi9cblx0XHRnZXRNb250aE5hbWUoKSB7XG5cdFx0XHRyZXR1cm4gTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLm1vbnRoc1t0aGlzLmdldE1vbnRoKCldO1xuXHRcdH0sXG5cdFx0LyoqIEByZXR1cm5zIHtzdHJpbmd9ICovXG5cdFx0Z2V0TW9udGhOYW1lQWJicmV2KCkge1xuXHRcdFx0cmV0dXJuIE1vcmViaXRzLmRhdGUubG9jYWxlRGF0YS5tb250aHNTaG9ydFt0aGlzLmdldE1vbnRoKCldO1xuXHRcdH0sXG5cdFx0LyoqIEByZXR1cm5zIHtzdHJpbmd9ICovXG5cdFx0Z2V0VVRDRGF5TmFtZSgpIHtcblx0XHRcdHJldHVybiBNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEuZGF5c1t0aGlzLmdldFVUQ0RheSgpXTtcblx0XHR9LFxuXHRcdC8qKiBAcmV0dXJucyB7c3RyaW5nfSAqL1xuXHRcdGdldFVUQ0RheU5hbWVBYmJyZXYoKSB7XG5cdFx0XHRyZXR1cm4gTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLmRheXNTaG9ydFt0aGlzLmdldFVUQ0RheSgpXTtcblx0XHR9LFxuXHRcdC8qKiBAcmV0dXJucyB7c3RyaW5nfSAqL1xuXHRcdGdldERheU5hbWUoKSB7XG5cdFx0XHRyZXR1cm4gTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLmRheXNbdGhpcy5nZXREYXkoKV07XG5cdFx0fSxcblx0XHQvKiogQHJldHVybnMge3N0cmluZ30gKi9cblx0XHRnZXREYXlOYW1lQWJicmV2KCkge1xuXHRcdFx0cmV0dXJuIE1vcmViaXRzLmRhdGUubG9jYWxlRGF0YS5kYXlzU2hvcnRbdGhpcy5nZXREYXkoKV07XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBBZGQgYSBnaXZlbiBudW1iZXIgb2YgbWludXRlcywgaG91cnMsIGRheXMsIHdlZWtzLCBtb250aHMsIG9yIHllYXJzIHRvIHRoZSBkYXRlLlxuXHRcdCAqIFRoaXMgaXMgZG9uZSBpbi1wbGFjZS4gVGhlIG1vZGlmaWVkIGRhdGUgb2JqZWN0IGlzIGFsc28gcmV0dXJuZWQsIGFsbG93aW5nIGNoYWluaW5nLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IG51bWJlciAtIFNob3VsZCBiZSBhbiBpbnRlZ2VyLlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB1bml0XG5cdFx0ICogQHRocm93cyBJZiBpbnZhbGlkIG9yIHVuc3VwcG9ydGVkIHVuaXQgaXMgZ2l2ZW4uXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLmRhdGV9XG5cdFx0ICovXG5cdFx0YWRkKG51bWJlciwgdW5pdCkge1xuXHRcdFx0bGV0IG51bSA9IE51bWJlci5wYXJzZUludChudW1iZXIsIDEwKTsgLy8gbm9ybWFsaXplXG5cdFx0XHRpZiAoTnVtYmVyLmlzTmFOKG51bSkpIHtcblx0XHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgSW52YWxpZCBudW1iZXIgXCIke251bWJlcn1cIiBwcm92aWRlZC5gKTtcblx0XHRcdH1cblx0XHRcdHVuaXQgPSB1bml0LnRvTG93ZXJDYXNlKCk7IC8vIG5vcm1hbGl6ZVxuXHRcdFx0Y29uc3Qge3VuaXRNYXB9ID0gTW9yZWJpdHMuZGF0ZTtcblx0XHRcdGxldCB1bml0Tm9ybSA9IHVuaXRNYXBbdW5pdF0gfHwgdW5pdE1hcFtgJHt1bml0fXNgXTsgLy8gc28gdGhhdCBib3RoIHNpbmd1bGFyIGFuZCAgcGx1cmFsIGZvcm1zIHdvcmtcblx0XHRcdGlmICh1bml0Tm9ybSkge1xuXHRcdFx0XHQvLyBObyBidWlsdC1pbiB3ZWVrIGZ1bmN0aW9ucywgc28gcmF0aGVyIHRoYW4gYnVpbGQgb3V0IElTTydzIGdldFdlZWsvc2V0V2VlaywganVzdCBtdWx0aXBseVxuXHRcdFx0XHQvLyBQcm9iYWJseSBjYW4ndCBiZSB1c2VkIGZvciBKdWxpYW4tPkdyZWdvcmlhbiBjaGFuZ2VvdmVycywgZXRjLlxuXHRcdFx0XHRpZiAodW5pdE5vcm0gPT09ICdXZWVrJykge1xuXHRcdFx0XHRcdHVuaXROb3JtID0gJ0RhdGUnO1xuXHRcdFx0XHRcdG51bSAqPSA3O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXNbYHNldCR7dW5pdE5vcm19YF0odGhpc1tgZ2V0JHt1bml0Tm9ybX1gXSgpICsgbnVtKTtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgdW5pdCBcIiR7dW5pdH1cIjogT25seSAke09iamVjdC5rZXlzKHVuaXRNYXApLmpvaW4oJywgJyl9IGFyZSBhbGxvd2VkLmApO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogU3VidHJhY3RzIGEgZ2l2ZW4gbnVtYmVyIG9mIG1pbnV0ZXMsIGhvdXJzLCBkYXlzLCB3ZWVrcywgbW9udGhzLCBvciB5ZWFycyB0byB0aGUgZGF0ZS5cblx0XHQgKiBUaGlzIGlzIGRvbmUgaW4tcGxhY2UuIFRoZSBtb2RpZmllZCBkYXRlIG9iamVjdCBpcyBhbHNvIHJldHVybmVkLCBhbGxvd2luZyBjaGFpbmluZy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXIgLSBTaG91bGQgYmUgYW4gaW50ZWdlci5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gdW5pdFxuXHRcdCAqIEB0aHJvd3MgSWYgaW52YWxpZCBvciB1bnN1cHBvcnRlZCB1bml0IGlzIGdpdmVuLlxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy5kYXRlfVxuXHRcdCAqL1xuXHRcdHN1YnRyYWN0KG51bWJlciwgdW5pdCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuYWRkKC1udW1iZXIsIHVuaXQpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogRm9ybWF0IHRoZSBkYXRlIGludG8gYSBzdHJpbmcgcGVyIHRoZSBnaXZlbiBmb3JtYXQgc3RyaW5nLlxuXHRcdCAqIFJlcGxhY2VtZW50IHN5bnRheCBpcyBhIHN1YnNldCBvZiB0aGF0IGluIG1vbWVudC5qczpcblx0XHQgKlxuXHRcdCAqIHwgU3ludGF4IHwgT3V0cHV0IHxcblx0XHQgKiB8LS0tLS0tLS18LS0tLS0tLS18XG5cdFx0ICogfCBIIHwgSG91cnMgKDI0LWhvdXIpIHxcblx0XHQgKiB8IEhIIHwgSG91cnMgKDI0LWhvdXIsIHBhZGRlZCB0byAyIGRpZ2l0cykgfFxuXHRcdCAqIHwgaCB8IEhvdXJzICgxMi1ob3VyKSB8XG5cdFx0ICogfCBoaCB8IEhvdXJzICgxMi1ob3VyLCBwYWRkZWQgdG8gMiBkaWdpdHMpIHxcblx0XHQgKiB8IEEgfCBBTSBvciBQTSB8XG5cdFx0ICogfCBtIHwgTWludXRlcyB8XG5cdFx0ICogfCBtbSB8IE1pbnV0ZXMgKHBhZGRlZCB0byAyIGRpZ2l0cykgfFxuXHRcdCAqIHwgcyB8IFNlY29uZHMgfFxuXHRcdCAqIHwgc3MgfCBTZWNvbmRzIChwYWRkZWQgdG8gMiBkaWdpdHMpIHxcblx0XHQgKiB8IFNTUyB8IE1pbGxpc2Vjb25kcyBmcmFnbWVudCwgMyBkaWdpdHMgfFxuXHRcdCAqIHwgZCB8IERheSBudW1iZXIgb2YgdGhlIHdlZWsgKFN1bj0wKSB8XG5cdFx0ICogfCBkZGQgfCBBYmJyZXZpYXRlZCBkYXkgbmFtZSB8XG5cdFx0ICogfCBkZGRkIHwgRnVsbCBkYXkgbmFtZSB8XG5cdFx0ICogfCBEIHwgRGF0ZSB8XG5cdFx0ICogfCBERCB8IERhdGUgKHBhZGRlZCB0byAyIGRpZ2l0cykgfFxuXHRcdCAqIHwgTSB8IE1vbnRoIG51bWJlciAoMS1pbmRleGVkKSB8XG5cdFx0ICogfCBNTSB8IE1vbnRoIG51bWJlciAoMS1pbmRleGVkLCBwYWRkZWQgdG8gMiBkaWdpdHMpIHxcblx0XHQgKiB8IE1NTSB8IEFiYnJldmlhdGVkIG1vbnRoIG5hbWUgfFxuXHRcdCAqIHwgTU1NTSB8IEZ1bGwgbW9udGggbmFtZSB8XG5cdFx0ICogfCBZIHwgWWVhciB8XG5cdFx0ICogfCBZWSB8IEZpbmFsIHR3byBkaWdpdHMgb2YgeWVhciAoMjAgZm9yIDIwMjAsIDQyIGZvciAxOTQyKSB8XG5cdFx0ICogfCBZWVlZIHwgWWVhciAoc2FtZSBhcyBgWWApIHxcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtYXRzdHIgLSBGb3JtYXQgdGhlIGRhdGUgaW50byBhIHN0cmluZywgdXNpbmdcblx0XHQgKiB0aGUgcmVwbGFjZW1lbnQgc3ludGF4LiAgVXNlIGBbYCBhbmQgYF1gIHRvIGVzY2FwZSBpdGVtcy4gIElmIG5vdFxuXHRcdCAqIHByb3ZpZGVkLCB3aWxsIHJldHVybiB0aGUgSVNPLTg2MDEtZm9ybWF0dGVkIHN0cmluZy5cblx0XHQgKiBAcGFyYW0geyhzdHJpbmd8bnVtYmVyKX0gW3pvbmU9c3lzdGVtXSAtIGBzeXN0ZW1gIChmb3IgYnJvd3Nlci1kZWZhdWx0IHRpbWUgem9uZSksXG5cdFx0ICogYHV0Y2AsIG9yIHNwZWNpZnkgYSB0aW1lIHpvbmUgYXMgbnVtYmVyIG9mIG1pbnV0ZXMgcmVsYXRpdmUgdG8gVVRDLlxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0Zm9ybWF0KGZvcm1hdHN0ciwgem9uZSkge1xuXHRcdFx0aWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuXHRcdFx0XHRyZXR1cm4gJ0ludmFsaWQgZGF0ZSc7IC8vIFB1dCB0aGUgdHJ1dGggb3V0LCBwcmVmZXJhYmxlIHRvIFwiTmFOTmFOTmFuIE5hTjpOYU5cIiBvciB3aGF0ZXZlclxuXHRcdFx0fVxuXG5cdFx0XHRsZXQgdWRhdGUgPSB0aGlzO1xuXHRcdFx0Ly8gY3JlYXRlIGEgbmV3IGRhdGUgb2JqZWN0IHRoYXQgd2lsbCBjb250YWluIHRoZSBkYXRlIHRvIGRpc3BsYXkgYXMgc3lzdGVtIHRpbWVcblx0XHRcdGlmICh6b25lID09PSAndXRjJykge1xuXHRcdFx0XHR1ZGF0ZSA9IG5ldyBNb3JlYml0cy5kYXRlKHRoaXMuZ2V0VGltZSgpKS5hZGQodGhpcy5nZXRUaW1lem9uZU9mZnNldCgpLCAnbWludXRlcycpO1xuXHRcdFx0fSBlbHNlIGlmICh0eXBlb2Ygem9uZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Ly8gY29udmVydCB0byB1dGMsIHRoZW4gYWRkIHRoZSB1dGMgb2Zmc2V0IGdpdmVuXG5cdFx0XHRcdHVkYXRlID0gbmV3IE1vcmViaXRzLmRhdGUodGhpcy5nZXRUaW1lKCkpLmFkZCh0aGlzLmdldFRpbWV6b25lT2Zmc2V0KCkgKyB6b25lLCAnbWludXRlcycpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gZGVmYXVsdCB0byBJU09TdHJpbmdcblx0XHRcdGlmICghZm9ybWF0c3RyKSB7XG5cdFx0XHRcdHJldHVybiB1ZGF0ZS50b0lTT1N0cmluZygpO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcGFkID0gKG51bSwgbGVuKSA9PiB7XG5cdFx0XHRcdGxlbiB8fD0gMjsgLy8gVXAgdG8gbGVuZ3RoIG9mIDAwICsgMVxuXHRcdFx0XHRyZXR1cm4gYDAwJHtudW19YC50b1N0cmluZygpLnNsaWNlKDAgLSBsZW4pO1xuXHRcdFx0fTtcblx0XHRcdGNvbnN0IGgyNCA9IHVkYXRlLmdldEhvdXJzKCk7XG5cdFx0XHRjb25zdCBtID0gdWRhdGUuZ2V0TWludXRlcygpO1xuXHRcdFx0Y29uc3QgcyA9IHVkYXRlLmdldFNlY29uZHMoKTtcblx0XHRcdGNvbnN0IG1zID0gdWRhdGUuZ2V0TWlsbGlzZWNvbmRzKCk7XG5cdFx0XHRjb25zdCBEID0gdWRhdGUuZ2V0RGF0ZSgpO1xuXHRcdFx0Y29uc3QgTSA9IHVkYXRlLmdldE1vbnRoKCkgKyAxO1xuXHRcdFx0Y29uc3QgWSA9IHVkYXRlLmdldEZ1bGxZZWFyKCk7XG5cdFx0XHRjb25zdCBoMTIgPSBoMjQgJSAxMiB8fCAxMjtcblx0XHRcdGNvbnN0IGFtT3JQbSA9IGgyNCA+PSAxMiA/ICfkuIvljYgnIDogJ+S4iuWNiCc7XG5cdFx0XHRjb25zdCByZXBsYWNlbWVudE1hcCA9IHtcblx0XHRcdFx0SEg6IHBhZChoMjQpLFxuXHRcdFx0XHRIOiBoMjQsXG5cdFx0XHRcdGhoOiBwYWQoaDEyKSxcblx0XHRcdFx0aDogaDEyLFxuXHRcdFx0XHRBOiBhbU9yUG0sXG5cdFx0XHRcdG1tOiBwYWQobSksXG5cdFx0XHRcdG0sXG5cdFx0XHRcdHNzOiBwYWQocyksXG5cdFx0XHRcdHMsXG5cdFx0XHRcdFNTUzogcGFkKG1zLCAzKSxcblx0XHRcdFx0ZGRkZDogdWRhdGUuZ2V0RGF5TmFtZSgpLFxuXHRcdFx0XHRkZGQ6IHVkYXRlLmdldERheU5hbWVBYmJyZXYoKSxcblx0XHRcdFx0ZDogdWRhdGUuZ2V0RGF5KCksXG5cdFx0XHRcdEREOiBwYWQoRCksXG5cdFx0XHRcdEQsXG5cdFx0XHRcdE1NTU06IHVkYXRlLmdldE1vbnRoTmFtZSgpLFxuXHRcdFx0XHRNTU06IHVkYXRlLmdldE1vbnRoTmFtZUFiYnJldigpLFxuXHRcdFx0XHRNTTogcGFkKE0pLFxuXHRcdFx0XHRNLFxuXHRcdFx0XHRZWVlZOiBZLFxuXHRcdFx0XHRZWTogcGFkKFkgJSAxMDApLFxuXHRcdFx0XHRZLFxuXHRcdFx0fTtcblx0XHRcdGNvbnN0IHVuYmluZGVyID0gbmV3IE1vcmViaXRzLnVuYmluZGVyKGZvcm1hdHN0cik7IC8vIGVzY2FwZSBzdHVmZiBiZXR3ZWVuIFsuLi5dXG5cdFx0XHR1bmJpbmRlci51bmJpbmQoJ1xcXFxbJywgJ1xcXFxdJyk7XG5cdFx0XHR1bmJpbmRlci5jb250ZW50ID0gdW5iaW5kZXIuY29udGVudC5yZXBsYWNlKFxuXHRcdFx0XHQvKiBSZWdleCBub3Rlczpcblx0XHRcdFx0ICogZChkezIsM30pPyBtYXRjaGVzIGV4YWN0bHkgMSwgMyBvciA0IG9jY3VycmVuY2VzIG9mICdkJyAoJ2RkJyBpcyB0cmVhdGVkIGFzIGEgZG91YmxlIG1hdGNoIG9mICdkJylcblx0XHRcdFx0ICogWXsxLDJ9KFl7Mn0pPyBtYXRjaGVzIGV4YWN0bHkgMSwgMiBvciA0IG9jY3VycmVuY2VzIG9mICdZJ1xuXHRcdFx0XHQgKi9cblx0XHRcdFx0L0h7MSwyfXxoezEsMn18bXsxLDJ9fHN7MSwyfXxTU1N8ZChkezIsM30pP3xEezEsMn18TXsxLDR9fFl7MSwyfShZezJ9KT98QS9nLFxuXHRcdFx0XHQobWF0Y2gpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gcmVwbGFjZW1lbnRNYXBbbWF0Y2hdO1xuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdFx0cmV0dXJuIHVuYmluZGVyLnJlYmluZCgpLnJlcGxhY2UoL1xcWyguKj8pXFxdL2csICckMScpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogR2l2ZXMgYSByZWFkYWJsZSByZWxhdGl2ZSB0aW1lIHN0cmluZyBzdWNoIGFzIFwiWWVzdGVyZGF5IGF0IDY6NDMgUE1cIiBvciBcIkxhc3QgVGh1cnNkYXkgYXQgMTE6NDUgQU1cIi5cblx0XHQgKiBTaW1pbGFyIHRvIGBjYWxlbmRhcmAgaW4gbW9tZW50LmpzLCBidXQgd2l0aCB0aW1lIHpvbmUgc3VwcG9ydC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7KHN0cmluZ3xudW1iZXIpfSBbem9uZT1zeXN0ZW1dIC0gJ3N5c3RlbScgKGZvciBicm93c2VyLWRlZmF1bHQgdGltZSB6b25lKSxcblx0XHQgKiAndXRjJyAoZm9yIFVUQyksIG9yIHNwZWNpZnkgYSB0aW1lIHpvbmUgYXMgbnVtYmVyIG9mIG1pbnV0ZXMgcGFzdCBVVEMuXG5cdFx0ICogQHJldHVybnMge3N0cmluZ31cblx0XHQgKi9cblx0XHRjYWxlbmRhcih6b25lKSB7XG5cdFx0XHQvLyBaZXJvIG91dCB0aGUgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMgYW5kIG1pbGxpc2Vjb25kcyAtIGtlZXBpbmcgb25seSB0aGUgZGF0ZTtcblx0XHRcdC8vIGZpbmQgdGhlIGRpZmZlcmVuY2UuIE5vdGUgdGhhdCBzZXRIb3VycygpIHJldHVybnMgdGhlIHNhbWUgdGhpbmcgYXMgZ2V0VGltZSgpLlxuXHRcdFx0Y29uc3QgZGF0ZURpZmYgPSAobmV3IERhdGUoKS5zZXRIb3VycygwLCAwLCAwLCAwKSAtIG5ldyBEYXRlKHRoaXMpLnNldEhvdXJzKDAsIDAsIDAsIDApKSAvIDguNjRlNztcblx0XHRcdHN3aXRjaCAodHJ1ZSkge1xuXHRcdFx0XHRjYXNlIGRhdGVEaWZmID09PSAwOlxuXHRcdFx0XHRcdHJldHVybiB0aGlzLmZvcm1hdChNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEucmVsYXRpdmVUaW1lcy50aGlzRGF5LCB6b25lKTtcblx0XHRcdFx0Y2FzZSBkYXRlRGlmZiA9PT0gMTpcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5mb3JtYXQoTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLnJlbGF0aXZlVGltZXMucHJldkRheSwgem9uZSk7XG5cdFx0XHRcdGNhc2UgZGF0ZURpZmYgPiAwICYmIGRhdGVEaWZmIDwgNzpcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5mb3JtYXQoTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLnJlbGF0aXZlVGltZXMucGFzdFdlZWssIHpvbmUpO1xuXHRcdFx0XHRjYXNlIGRhdGVEaWZmID09PSAtMTpcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5mb3JtYXQoTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLnJlbGF0aXZlVGltZXMubmV4dERheSwgem9uZSk7XG5cdFx0XHRcdGNhc2UgZGF0ZURpZmYgPCAwICYmIGRhdGVEaWZmID4gLTc6XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuZm9ybWF0KE1vcmViaXRzLmRhdGUubG9jYWxlRGF0YS5yZWxhdGl2ZVRpbWVzLnRoaXNXZWVrLCB6b25lKTtcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5mb3JtYXQoTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLnJlbGF0aXZlVGltZXMub3RoZXIsIHpvbmUpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogR2V0IGEgcmVndWxhciBleHByZXNzaW9uIHRoYXQgbWF0Y2hlcyB3aWtpdGV4dCBzZWN0aW9uIHRpdGxlcywgc3VjaFxuXHRcdCAqIGFzIGA9PURlY2VtYmVyIDIwMTk9PWAgb3IgYD09PSBKYW4gMjAxOCA9PT1gLlxuXHRcdCAqXG5cdFx0ICogQHJldHVybnMge1JlZ0V4cH1cblx0XHQgKi9cblx0XHRtb250aEhlYWRlclJlZ2V4KCkge1xuXHRcdFx0cmV0dXJuIG5ldyBSZWdFeHAoXG5cdFx0XHRcdGBeKD09KylcXFxccyoke3RoaXMuZ2V0VVRDRnVsbFllYXIoKX3lubQoPzoke3RoaXMuZ2V0VVRDTW9udGhOYW1lKCl9fCR7dGhpcy5nZXRVVENNb250aE5hbWVBYmJyZXYoKX0pXFxcXHMqXFxcXDFgLFxuXHRcdFx0XHQnbWcnXG5cdFx0XHQpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogQ3JlYXRlcyBhIHdpa2l0ZXh0IHNlY3Rpb24gaGVhZGVyIHdpdGggdGhlIG1vbnRoIGFuZCB5ZWFyLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IFtsZXZlbD0yXSAtIEhlYWRlciBsZXZlbC4gIFBhc3MgMCBmb3IganVzdCB0aGUgdGV4dFxuXHRcdCAqIHdpdGggbm8gd2lraXRleHQgbWFya2VycyAoPT0pLlxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0bW9udGhIZWFkZXIobGV2ZWwpIHtcblx0XHRcdC8vIERlZmF1bHQgdG8gMiwgYnV0IGFsbG93IGZvciAwIG9yIHN0cmluZ3kgbnVtYmVyc1xuXHRcdFx0bGV2ZWwgPSBOdW1iZXIucGFyc2VJbnQobGV2ZWwsIDEwKTtcblx0XHRcdGxldmVsID0gTnVtYmVyLmlzTmFOKGxldmVsKSA/IDIgOiBsZXZlbDtcblx0XHRcdGNvbnN0IGhlYWRlciA9ICc9Jy5yZXBlYXQobGV2ZWwpO1xuXHRcdFx0Y29uc3QgdGV4dCA9IGAke3RoaXMuZ2V0VVRDRnVsbFllYXIoKX3lubQke3RoaXMuZ2V0VVRDTW9udGhOYW1lKCl9YDtcblx0XHRcdGlmIChoZWFkZXIubGVuZ3RoKSB7XG5cdFx0XHRcdC8vIHdpa2l0ZXh0LWZvcm1hdHRlZCBoZWFkZXJcblx0XHRcdFx0cmV0dXJuIGAke2hlYWRlcn0gJHt0ZXh0fSAke2hlYWRlcn1gO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRleHQ7IC8vIEp1c3QgdGhlIHN0cmluZ1xuXHRcdH0sXG5cdH07XG5cdC8vIEFsbG93IG5hdGl2ZSBEYXRlLnByb3RvdHlwZSBtZXRob2RzIHRvIGJlIHVzZWQgb24gTW9yZWJpdHMuZGF0ZSBvYmplY3RzXG5cdGZvciAoY29uc3QgZnVuYyBvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhEYXRlLnByb3RvdHlwZSkpIHtcblx0XHQvLyBFeGNsdWRlIG1ldGhvZHMgdGhhdCBjb2xsaWRlIHdpdGggUGFnZVRyaWFnZSdzIERhdGUuanMgZXh0ZXJuYWwsIHdoaWNoIGNsb2JiZXJzIG5hdGl2ZSBEYXRlXG5cdFx0aWYgKCFbJ2FkZCcsICdnZXREYXlOYW1lJywgJ2dldE1vbnRoTmFtZSddLmluY2x1ZGVzKGZ1bmMpKSB7XG5cdFx0XHRNb3JlYml0cy5kYXRlLnByb3RvdHlwZVtmdW5jXSA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLl9kW2Z1bmNdKC4uLmFyZ3MpO1xuXHRcdFx0fTtcblx0XHR9XG5cdH1cblx0LyogKioqKioqKioqKioqKioqKiBNb3JlYml0cy53aWtpICoqKioqKioqKioqKioqKiogKi9cblx0LyoqXG5cdCAqIFZhcmlvdXMgb2JqZWN0cyBmb3Igd2lraSBlZGl0aW5nIGFuZCBBUEkgYWNjZXNzLCBpbmNsdWRpbmdcblx0ICoge0BsaW5rIE1vcmViaXRzLndpa2kuYXBpfSBhbmQge0BsaW5rIE1vcmViaXRzLndpa2kucGFnZX0uXG5cdCAqXG5cdCAqIEBuYW1lc3BhY2UgTW9yZWJpdHMud2lraVxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHNcblx0ICovXG5cdE1vcmViaXRzLndpa2kgPSB7fTtcblx0LyoqXG5cdCAqIEBkZXByZWNhdGVkIGluIGZhdm9yIG9mIE1vcmViaXRzLmlzUGFnZVJlZGlyZWN0IGFzIG9mIE5vdmVtYmVyIDIwMjBcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLndpa2lcblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRNb3JlYml0cy53aWtpLmlzUGFnZVJlZGlyZWN0ID0gKCkgPT4ge1xuXHRcdGNvbnNvbGUud2Fybihcblx0XHRcdCdbTW9yZWJpdHNdIE5PVEU6IE1vcmViaXRzLndpa2kuaXNQYWdlUmVkaXJlY3QgaGFzIGJlZW4gZGVwcmVjYXRlZCwgdXNlIE1vcmViaXRzLmlzUGFnZVJlZGlyZWN0IGluc3RlYWQuJ1xuXHRcdCk7XG5cdFx0cmV0dXJuIE1vcmViaXRzLmlzUGFnZVJlZGlyZWN0KCk7XG5cdH07XG5cdC8qICoqKioqKioqKioqKioqKiogTW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQgKioqKioqKioqKioqKioqKiAqL1xuXHQvKipcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLndpa2lcblx0ICogQHR5cGUge251bWJlcn1cblx0ICovXG5cdE1vcmViaXRzLndpa2kubnVtYmVyT2ZBY3Rpb25zTGVmdCA9IDA7XG5cdC8qKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraVxuXHQgKiBAdHlwZSB7bnVtYmVyfVxuXHQgKi9cblx0TW9yZWJpdHMud2lraS5uYnJPZkNoZWNrcG9pbnRzTGVmdCA9IDA7XG5cdC8qKlxuXHQgKiBEaXNwbGF5IG1lc3NhZ2UgYW5kL29yIHJlZGlyZWN0IHRvIHBhZ2UgdXBvbiBjb21wbGV0aW9uIG9mIHRhc2tzLlxuXHQgKlxuXHQgKiBFdmVyeSBjYWxsIHRvIE1vcmViaXRzLndpa2kuYXBpLnBvc3QoKSByZXN1bHRzIGluIHRoZSBkaXNwYXRjaCBvZiBhblxuXHQgKiBhc3luY2hyb25vdXMgY2FsbGJhY2suIEVhY2ggY2FsbGJhY2sgY2FuIGluIHR1cm4gbWFrZSBhbiBhZGRpdGlvbmFsIGNhbGwgdG9cblx0ICogTW9yZWJpdHMud2lraS5hcGkucG9zdCgpIHRvIGNvbnRpbnVlIGEgcHJvY2Vzc2luZyBzZXF1ZW5jZS4gQXQgdGhlXG5cdCAqIGNvbmNsdXNpb24gb2YgdGhlIGZpbmFsIGNhbGxiYWNrIG9mIGEgcHJvY2Vzc2luZyBzZXF1ZW5jZSwgaXQgaXMgbm90XG5cdCAqIHBvc3NpYmxlIHRvIHNpbXBseSByZXR1cm4gdG8gdGhlIG9yaWdpbmFsIGNhbGxlciBiZWNhdXNlIHRoZXJlIGlzIG5vIGNhbGxcblx0ICogc3RhY2sgbGVhZGluZyBiYWNrIHRvIHRoZSBvcmlnaW5hbCBjb250ZXh0LiBJbnN0ZWFkLFxuXHQgKiBNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5ldmVudCgpIGlzIGNhbGxlZCB0byBkaXNwbGF5IHRoZSByZXN1bHQgdG9cblx0ICogdGhlIHVzZXIgYW5kIHRvIHBlcmZvcm0gYW4gb3B0aW9uYWwgcGFnZSByZWRpcmVjdC5cblx0ICpcblx0ICogVGhlIGRldGVybWluYXRpb24gb2Ygd2hlbiB0byBjYWxsIE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLmV2ZW50KCkgaXNcblx0ICogbWFuYWdlZCB0aHJvdWdoIHRoZSBnbG9iYWxzIE1vcmViaXRzLndpa2kubnVtYmVyT2ZBY3Rpb25zTGVmdCBhbmRcblx0ICogTW9yZWJpdHMud2lraS5uYnJPZkNoZWNrcG9pbnRzTGVmdC4gTW9yZWJpdHMud2lraS5udW1iZXJPZkFjdGlvbnNMZWZ0IGlzXG5cdCAqIGluY3JlbWVudGVkIGF0IHRoZSBzdGFydCBvZiBldmVyeSBNb3JlYml0cy53aWtpLmFwaSBjYWxsIGFuZCBkZWNyZW1lbnRlZFxuXHQgKiBhZnRlciB0aGUgY29tcGxldGlvbiBvZiBhIGNhbGxiYWNrIGZ1bmN0aW9uLiBJZiBhIGNhbGxiYWNrIGZ1bmN0aW9uIGRvZXNcblx0ICogbm90IGNyZWF0ZSBhIG5ldyBNb3JlYml0cy53aWtpLmFwaSBvYmplY3QgYmVmb3JlIGV4aXRpbmcsIGl0IGlzIHRoZSBmaW5hbFxuXHQgKiBzdGVwIGluIHRoZSBwcm9jZXNzaW5nIGNoYWluIGFuZCBNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5ldmVudCgpIHdpbGxcblx0ICogdGhlbiBiZSBjYWxsZWQuXG5cdCAqXG5cdCAqIE9wdGlvbmFsbHksIGNhbGxlcnMgbWF5IHVzZSBNb3JlYml0cy53aWtpLmFkZENoZWNrcG9pbnQoKSB0byBpbmRpY2F0ZSB0aGF0XG5cdCAqIHByb2Nlc3NpbmcgaXMgbm90IGNvbXBsZXRlIHVwb24gdGhlIGNvbmNsdXNpb24gb2YgdGhlIGZpbmFsIGNhbGxiYWNrXG5cdCAqIGZ1bmN0aW9uLiAgVGhpcyBpcyB1c2VkIGZvciBiYXRjaCBvcGVyYXRpb25zLiBUaGUgZW5kIG9mIGEgYmF0Y2ggaXNcblx0ICogc2lnbmFsZWQgYnkgY2FsbGluZyBNb3JlYml0cy53aWtpLnJlbW92ZUNoZWNrcG9pbnQoKS5cblx0ICpcblx0ICogQHBhcmFtIHt0eXBlb2YgTW9yZWJpdHN9IHNlbGZcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLndpa2lcblx0ICovXG5cdE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkID0gKHNlbGYpID0+IHtcblx0XHRpZiAoLS1Nb3JlYml0cy53aWtpLm51bWJlck9mQWN0aW9uc0xlZnQgPD0gMCAmJiBNb3JlYml0cy53aWtpLm5ick9mQ2hlY2twb2ludHNMZWZ0IDw9IDApIHtcblx0XHRcdE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLmV2ZW50KHNlbGYpO1xuXHRcdH1cblx0fTtcblx0Ly8gQ2hhbmdlIHBlciBhY3Rpb24gd2FudGVkXG5cdC8qKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraSAqL1xuXHRNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5ldmVudCA9ICgpID0+IHtcblx0XHRpZiAoTW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQubm90aWNlKSB7XG5cdFx0XHRNb3JlYml0cy5zdGF0dXMuYWN0aW9uQ29tcGxldGVkKE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLm5vdGljZSk7XG5cdFx0fVxuXHRcdGlmIChNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5yZWRpcmVjdCkge1xuXHRcdFx0Ly8gaWYgaXQgaXNuJ3QgYSBVUkwsIG1ha2UgaXQgb25lLiBUT0RPOiBUaGlzIGJyZWFrcyBvbiB0aGUgYXJ0aWNsZXMgJ2h0dHA6Ly8nLCAnZnRwOi8vJywgYW5kIHNpbWlsYXIgb25lcy5cblx0XHRcdGlmICghL15cXHcrOlxcL1xcLy8udGVzdChNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5yZWRpcmVjdCkpIHtcblx0XHRcdFx0TW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQucmVkaXJlY3QgPSBtdy51dGlsLmdldFVybChNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5yZWRpcmVjdCk7XG5cdFx0XHRcdGlmIChNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5mb2xsb3dSZWRpcmVjdCA9PT0gZmFsc2UpIHtcblx0XHRcdFx0XHRNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5yZWRpcmVjdCArPSAnP3JlZGlyZWN0PW5vJztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdGxvY2F0aW9uID0gTW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQucmVkaXJlY3Q7XG5cdFx0XHR9LCBNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC50aW1lT3V0KTtcblx0XHR9XG5cdH07XG5cdC8qKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraSAqL1xuXHRNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC50aW1lT3V0ID1cblx0XHR3aW5kb3cud3BBY3Rpb25Db21wbGV0ZWRUaW1lT3V0ID09PSB1bmRlZmluZWQgPyA1MDAwIDogd2luZG93LndwQWN0aW9uQ29tcGxldGVkVGltZU91dDtcblx0LyoqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpICovXG5cdE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLnJlZGlyZWN0ID0gbnVsbDtcblx0LyoqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpICovXG5cdE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLm5vdGljZSA9IG51bGw7XG5cdC8qKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraSAqL1xuXHRNb3JlYml0cy53aWtpLmFkZENoZWNrcG9pbnQgPSAoKSA9PiB7XG5cdFx0KytNb3JlYml0cy53aWtpLm5ick9mQ2hlY2twb2ludHNMZWZ0O1xuXHR9O1xuXHQvKiogQG1lbWJlcm9mIE1vcmViaXRzLndpa2kgKi9cblx0TW9yZWJpdHMud2lraS5yZW1vdmVDaGVja3BvaW50ID0gKCkgPT4ge1xuXHRcdGlmICgtLU1vcmViaXRzLndpa2kubmJyT2ZDaGVja3BvaW50c0xlZnQgPD0gMCAmJiBNb3JlYml0cy53aWtpLm51bWJlck9mQWN0aW9uc0xlZnQgPD0gMCkge1xuXHRcdFx0TW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQuZXZlbnQoKTtcblx0XHR9XG5cdH07XG5cdC8qICoqKioqKioqKioqKioqKiogTW9yZWJpdHMud2lraS5hcGkgKioqKioqKioqKioqKioqKiAqL1xuXHQvKipcblx0ICogQW4gZWFzeSB3YXkgdG8gdGFsayB0byB0aGUgTWVkaWFXaWtpIEFQSS4gIEFjY2VwdHMgZWl0aGVyIGpzb24gb3IgeG1sXG5cdCAqIChkZWZhdWx0KSBmb3JtYXRzOyBpZiBqc29uIGlzIHNlbGVjdGVkLCB3aWxsIGRlZmF1bHQgdG8gYGZvcm1hdHZlcnNpb249MmBcblx0ICogdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuICBTaW1pbGFybHksIGVuZm9yY2VzIG5ld2VyIGBlcnJvcmZvcm1hdGBzLFxuXHQgKiBkZWZhdWx0aW5nIHRvIGBodG1sYCBpZiB1bnNwZWNpZmllZC4gIGB1c2VsYW5nYCBlbmZvcmNlZCB0byB0aGUgd2lraSdzXG5cdCAqIGNvbnRlbnQgbGFuZ3VhZ2UuXG5cdCAqXG5cdCAqIEluIG5ldyBjb2RlLCB0aGUgdXNlIG9mIHRoZSBsYXN0IDMgcGFyYW1ldGVycyBzaG91bGQgYmUgYXZvaWRlZCwgaW5zdGVhZFxuXHQgKiB1c2Uge0BsaW5rIE1vcmViaXRzLndpa2kuYXBpI3NldFN0YXR1c0VsZW1lbnR8c2V0U3RhdHVzRWxlbWVudCgpfSB0byBiaW5kXG5cdCAqIHRoZSBzdGF0dXMgZWxlbWVudCAoaWYgbmVlZGVkKSBhbmQgdXNlIGAudGhlbigpYCBvciBgLmNhdGNoKClgIG9uIHRoZVxuXHQgKiBwcm9taXNlIHJldHVybmVkIGJ5IGBwb3N0KClgLCByYXRoZXIgdGhhbiBzcGVjaWZ5IHRoZSBgb25TdWNjZXNzYCBvclxuXHQgKiBgb25GYWlsdXJlYCBjYWxsYmFja3MuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpXG5cdCAqIEBjbGFzc1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gY3VycmVudEFjdGlvbiAtIFRoZSBjdXJyZW50IGFjdGlvbiAocmVxdWlyZWQpLlxuXHQgKiBAcGFyYW0ge09iamVjdH0gcXVlcnkgLSBUaGUgcXVlcnkgKHJlcXVpcmVkKS5cblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uU3VjY2Vzc10gLSBUaGUgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIHJlcXVlc3QgaXMgc3VjY2Vzc2Z1bC5cblx0ICogQHBhcmFtIHtNb3JlYml0cy5zdGF0dXN9IFtzdGF0dXNFbGVtZW50XSAtIEEgTW9yZWJpdHMuc3RhdHVzIG9iamVjdCB0byB1c2UgZm9yIHN0YXR1cyBtZXNzYWdlcy5cblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRXJyb3JdIC0gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgaWYgYW4gZXJyb3Igb2NjdXJzLlxuXHQgKi9cblx0TW9yZWJpdHMud2lraS5hcGkgPSBmdW5jdGlvbiAoY3VycmVudEFjdGlvbiwgcXVlcnksIG9uU3VjY2Vzcywgc3RhdHVzRWxlbWVudCwgb25FcnJvcikge1xuXHRcdHRoaXMuY3VycmVudEFjdGlvbiA9IGN1cnJlbnRBY3Rpb247XG5cdFx0dGhpcy5xdWVyeSA9IHF1ZXJ5O1xuXHRcdHRoaXMucXVlcnkuYXNzZXJ0ID0gJ3VzZXInO1xuXHRcdC8vIEVuZm9yY2UgbmV3ZXIgZXJyb3IgZm9ybWF0cywgcHJlZmVycmluZyBodG1sXG5cdFx0aWYgKCFxdWVyeS5lcnJvcmZvcm1hdCB8fCAhWyd3aWtpdGV4dCcsICdwbGFpbnRleHQnXS5pbmNsdWRlcyhxdWVyeS5lcnJvcmZvcm1hdCkpIHtcblx0XHRcdHRoaXMucXVlcnkuZXJyb3Jmb3JtYXQgPSAnaHRtbCc7XG5cdFx0fVxuXHRcdC8vIEV4cGxpY2l0bHkgdXNlIHRoZSB3aWtpJ3MgY29udGVudCBsYW5ndWFnZSB0byBtaW5pbWl6ZSBjb25mdXNpb24sXG5cdFx0Ly8gc2VlICMxMTc5IGZvciBkaXNjdXNzaW9uXG5cdFx0dGhpcy5xdWVyeS51c2VsYW5nIHx8PSAnY29udGVudCc7IC8vIFVzZSB3Z1VzZXJMYW5ndWFnZSBmb3IgcHJldmlld1xuXHRcdHRoaXMucXVlcnkuZXJyb3JsYW5nID0gJ3VzZWxhbmcnO1xuXHRcdHRoaXMucXVlcnkuZXJyb3JzdXNlbG9jYWwgPSAxO1xuXHRcdHRoaXMub25TdWNjZXNzID0gb25TdWNjZXNzO1xuXHRcdHRoaXMub25FcnJvciA9IG9uRXJyb3I7XG5cdFx0aWYgKHN0YXR1c0VsZW1lbnQpIHtcblx0XHRcdHRoaXMuc2V0U3RhdHVzRWxlbWVudChzdGF0dXNFbGVtZW50KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zdGF0ZWxlbSA9IG5ldyBNb3JlYml0cy5zdGF0dXMoY3VycmVudEFjdGlvbik7XG5cdFx0fVxuXHRcdC8vIEpTT04gaXMgdXNlZCB0aHJvdWdob3V0IE1vcmViaXRzL1R3aW5rbGUsIGJ1dCB4bWwgcmVtYWlucyB0aGUgZGVmYXVsdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcblx0XHRpZiAoIXF1ZXJ5LmZvcm1hdCkge1xuXHRcdFx0dGhpcy5xdWVyeS5mb3JtYXQgPSAneG1sJztcblx0XHR9IGVsc2UgaWYgKHF1ZXJ5LmZvcm1hdCA9PT0gJ2pzb24nICYmICFxdWVyeS5mb3JtYXR2ZXJzaW9uKSB7XG5cdFx0XHR0aGlzLnF1ZXJ5LmZvcm1hdHZlcnNpb24gPSAnMic7XG5cdFx0fSBlbHNlIGlmICghWyd4bWwnLCAnanNvbiddLmluY2x1ZGVzKHF1ZXJ5LmZvcm1hdCkpIHtcblx0XHRcdHRoaXMuc3RhdGVsZW0uZXJyb3IoJ0ludmFsaWQgQVBJIGZvcm1hdDogb25seSB4bWwgYW5kIGpzb24gYXJlIHN1cHBvcnRlZC4nKTtcblx0XHR9XG5cdFx0Ly8gSWdub3JlIHRhZ3MgZm9yIHF1ZXJpZXMgYW5kIG1vc3QgY29tbW9uIHVuc3VwcG9ydGVkIGFjdGlvbnMsIHByb2R1Y2VzIHdhcm5pbmdzXG5cdFx0aWYgKHF1ZXJ5LmFjdGlvbiAmJiBbJ3F1ZXJ5JywgJ3dhdGNoJ10uaW5jbHVkZXMocXVlcnkuYWN0aW9uKSkge1xuXHRcdFx0ZGVsZXRlIHF1ZXJ5LnRhZ3M7XG5cdFx0fSBlbHNlIGlmICghcXVlcnkudGFncyAmJiBtb3JlYml0c1dpa2lDaGFuZ2VUYWcpIHtcblx0XHRcdHF1ZXJ5LnRhZ3MgPSBtb3JlYml0c1dpa2lDaGFuZ2VUYWc7XG5cdFx0fVxuXHR9O1xuXHRNb3JlYml0cy53aWtpLmFwaS5wcm90b3R5cGUgPSB7XG5cdFx0Y3VycmVudEFjdGlvbjogJycsXG5cdFx0b25TdWNjZXNzOiBudWxsLFxuXHRcdG9uRXJyb3I6IG51bGwsXG5cdFx0cGFyZW50OiB3aW5kb3csXG5cdFx0Ly8gdXNlIGdsb2JhbCBjb250ZXh0IGlmIHRoZXJlIGlzIG5vIHBhcmVudCBvYmplY3Rcblx0XHRxdWVyeTogbnVsbCxcblx0XHRyZXNwb25zZTogbnVsbCxcblx0XHRyZXNwb25zZVhNTDogbnVsbCxcblx0XHQvLyB1c2UgYHJlc3BvbnNlYCBpbnN0ZWFkOyByZXRhaW5lZCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcblx0XHRzdGF0ZWxlbTogbnVsbCxcblx0XHQvLyB0aGlzIG5vbi1zdGFuZGFyZCBuYW1lIGtlcHQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG5cdFx0c3RhdHVzVGV4dDogbnVsbCxcblx0XHQvLyByZXN1bHQgcmVjZWl2ZWQgZnJvbSB0aGUgQVBJLCBub3JtYWxseSBcInN1Y2Nlc3NcIiBvciBcImVycm9yXCJcblx0XHRlcnJvckNvZGU6IG51bGwsXG5cdFx0Ly8gc2hvcnQgdGV4dCBlcnJvciBjb2RlLCBpZiBhbnksIGFzIGRvY3VtZW50ZWQgaW4gdGhlIE1lZGlhV2lraSBBUElcblx0XHRlcnJvclRleHQ6IG51bGwsXG5cdFx0Ly8gZnVsbCBlcnJvciBkZXNjcmlwdGlvbiwgaWYgYW55XG5cdFx0YmFkdG9rZW5SZXRyeTogZmFsc2UsXG5cdFx0Ly8gc2V0IHRvIHRydWUgaWYgdGhpcyBvbiBhIHJldHJ5IGF0dGVtcHRlZCBhZnRlciBhIGJhZHRva2VuIGVycm9yXG5cdFx0LyoqXG5cdFx0ICogS2VlcCB0cmFjayBvZiBwYXJlbnQgb2JqZWN0IGZvciBjYWxsYmFja3MuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0geyp9IHBhcmVudFxuXHRcdCAqL1xuXHRcdHNldFBhcmVudChwYXJlbnQpIHtcblx0XHRcdHRoaXMucGFyZW50ID0gcGFyZW50O1xuXHRcdH0sXG5cdFx0LyoqIEBwYXJhbSB7TW9yZWJpdHMuc3RhdHVzfSBzdGF0dXNFbGVtZW50ICovXG5cdFx0c2V0U3RhdHVzRWxlbWVudChzdGF0dXNFbGVtZW50KSB7XG5cdFx0XHR0aGlzLnN0YXRlbGVtID0gc3RhdHVzRWxlbWVudDtcblx0XHRcdHRoaXMuc3RhdGVsZW0uc3RhdHVzKHRoaXMuY3VycmVudEFjdGlvbik7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBDYXJyeSBvdXQgdGhlIHJlcXVlc3QuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge09iamVjdH0gY2FsbGVyQWpheFBhcmFtZXRlcnMgLSBEbyBub3Qgc3BlY2lmeSBhIHBhcmFtZXRlciB1bmxlc3MgeW91IHJlYWxseVxuXHRcdCAqIHJlYWxseSB3YW50IHRvIGdpdmUgalF1ZXJ5IHNvbWUgZXh0cmEgcGFyYW1ldGVycy5cblx0XHQgKiBAcmV0dXJucyB7cHJvbWlzZX0gLSBBIGpRdWVyeSBwcm9taXNlIG9iamVjdCB0aGF0IGlzIHJlc29sdmVkIG9yIHJlamVjdGVkIHdpdGggdGhlIGFwaSBvYmplY3QuXG5cdFx0ICovXG5cdFx0cG9zdChjYWxsZXJBamF4UGFyYW1ldGVycykge1xuXHRcdFx0KytNb3JlYml0cy53aWtpLm51bWJlck9mQWN0aW9uc0xlZnQ7XG5cdFx0XHRjb25zdCBfcXVlcnlTdHJpbmcgPSBbXTtcblx0XHRcdGZvciAoY29uc3QgW2ksIHZhbF0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5xdWVyeSkpIHtcblx0XHRcdFx0aWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuXHRcdFx0XHRcdF9xdWVyeVN0cmluZy5wdXNoKGAke2VuY29kZVVSSUNvbXBvbmVudChpKX09JHt2YWwubWFwKGVuY29kZVVSSUNvbXBvbmVudCkuam9pbignfCcpfWApO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHZhbCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0X3F1ZXJ5U3RyaW5nLnB1c2goYCR7ZW5jb2RlVVJJQ29tcG9uZW50KGkpfT0ke2VuY29kZVVSSUNvbXBvbmVudCh2YWwpfWApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBxdWVyeVN0cmluZyA9IF9xdWVyeVN0cmluZy5qb2luKCcmJykucmVwbGFjZSgvXiguKj8pKFxcYnRva2VuPVteJl0qKSYoLiopLywgJyQxJDMmJDInKTtcblx0XHRcdC8vIHRva2VuIHNob3VsZCBhbHdheXMgYmUgdGhlIGxhc3QgaXRlbSBpbiB0aGUgcXVlcnkgc3RyaW5nIChidWcgVFctQi0wMDEzKVxuXHRcdFx0Y29uc3QgYWpheHBhcmFtcyA9IHtcblx0XHRcdFx0Y29udGV4dDogdGhpcyxcblx0XHRcdFx0dHlwZTogdGhpcy5xdWVyeS5hY3Rpb24gPT09ICdxdWVyeScgPyAnR0VUJyA6ICdQT1NUJyxcblx0XHRcdFx0dXJsOiBtdy51dGlsLndpa2lTY3JpcHQoJ2FwaScpLFxuXHRcdFx0XHRkYXRhOiBxdWVyeVN0cmluZyxcblx0XHRcdFx0ZGF0YVR5cGU6IHRoaXMucXVlcnkuZm9ybWF0LFxuXHRcdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdFx0J0FwaS1Vc2VyLUFnZW50JzogbW9yZWJpdHNXaWtpQXBpVXNlckFnZW50LFxuXHRcdFx0XHR9LFxuXHRcdFx0XHQuLi5jYWxsZXJBamF4UGFyYW1ldGVycyxcblx0XHRcdH07XG5cdFx0XHRyZXR1cm4gJC5hamF4KGFqYXhwYXJhbXMpLnRoZW4oXG5cdFx0XHRcdGZ1bmN0aW9uIG9uQVBJc3VjY2VzcyhyZXNwb25zZSwgc3RhdHVzVGV4dCkge1xuXHRcdFx0XHRcdHRoaXMuc3RhdHVzVGV4dCA9IHN0YXR1c1RleHQ7XG5cdFx0XHRcdFx0dGhpcy5yZXNwb25zZSA9IHJlc3BvbnNlO1xuXHRcdFx0XHRcdHRoaXMucmVzcG9uc2VYTUwgPSByZXNwb25zZTtcblx0XHRcdFx0XHQvLyBMaW1pdCB0byBmaXJzdCBlcnJvclxuXHRcdFx0XHRcdGlmICh0aGlzLnF1ZXJ5LmZvcm1hdCA9PT0gJ2pzb24nKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmVycm9yQ29kZSA9IHJlc3BvbnNlLmVycm9ycyAmJiByZXNwb25zZS5lcnJvcnNbMF0uY29kZTtcblx0XHRcdFx0XHRcdGlmICh0aGlzLnF1ZXJ5LmVycm9yZm9ybWF0ID09PSAnaHRtbCcpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5lcnJvclRleHQgPSByZXNwb25zZS5lcnJvcnMgJiYgcmVzcG9uc2UuZXJyb3JzWzBdLmh0bWw7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMucXVlcnkuZXJyb3Jmb3JtYXQgPT09ICd3aWtpdGV4dCcgfHwgdGhpcy5xdWVyeS5lcnJvcmZvcm1hdCA9PT0gJ3BsYWludGV4dCcpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5lcnJvclRleHQgPSByZXNwb25zZS5lcnJvcnMgJiYgcmVzcG9uc2UuZXJyb3JzWzBdLnRleHQ7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMuZXJyb3JDb2RlID0gJChyZXNwb25zZSkuZmluZCgnZXJyb3JzIGVycm9yJykuZXEoMCkuYXR0cignY29kZScpO1xuXHRcdFx0XHRcdFx0Ly8gU3VmZmljaWVudCBmb3IgaHRtbCwgd2lraXRleHQsIG9yIHBsYWludGV4dCBlcnJvcmZvcm1hdHNcblx0XHRcdFx0XHRcdHRoaXMuZXJyb3JUZXh0ID0gJChyZXNwb25zZSkuZmluZCgnZXJyb3JzIGVycm9yJykuZXEoMCkudGV4dCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAodHlwZW9mIHRoaXMuZXJyb3JDb2RlID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRcdFx0Ly8gdGhlIEFQSSBkaWRuJ3QgbGlrZSB3aGF0IHdlIHRvbGQgaXQsIGUuZy4sIGJhZCBlZGl0IHRva2VuIG9yIGFuIGVycm9yIGNyZWF0aW5nIGEgcGFnZVxuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMucmV0dXJuRXJyb3IoY2FsbGVyQWpheFBhcmFtZXRlcnMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBpbnZva2Ugc3VjY2VzcyBjYWxsYmFjayBpZiBvbmUgd2FzIHN1cHBsaWVkXG5cdFx0XHRcdFx0aWYgKHRoaXMub25TdWNjZXNzKSB7XG5cdFx0XHRcdFx0XHQvLyBzZXQgdGhlIGNhbGxiYWNrIGNvbnRleHQgdG8gdGhpcy5wYXJlbnQgZm9yIG5ldyBjb2RlIGFuZCBzdXBwbHkgdGhlIEFQSSBvYmplY3Rcblx0XHRcdFx0XHRcdC8vIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byB0aGUgY2FsbGJhY2sgKGZvciBsZWdhY3kgY29kZSlcblx0XHRcdFx0XHRcdHRoaXMub25TdWNjZXNzLmNhbGwodGhpcy5wYXJlbnQsIHRoaXMpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlbGVtLmluZm8oJ+WujOaIkCcpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZCgpO1xuXHRcdFx0XHRcdHJldHVybiAkLkRlZmVycmVkKCkucmVzb2x2ZVdpdGgodGhpcy5wYXJlbnQsIFt0aGlzXSk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdC8vIG9ubHkgbmV0d29yayBhbmQgc2VydmVyIGVycm9ycyByZWFjaCBoZXJlIC0gY29tcGxhaW50cyBmcm9tIHRoZSBBUEkgaXRzZWxmIGFyZSBjYXVnaHQgaW4gc3VjY2VzcygpXG5cdFx0XHRcdGZ1bmN0aW9uIG9uQVBJZmFpbHVyZShlcnJvciwgc3RhdHVzVGV4dCwgZXJyb3JUaHJvd24pIHtcblx0XHRcdFx0XHR0aGlzLnN0YXR1c1RleHQgPSBzdGF0dXNUZXh0O1xuXHRcdFx0XHRcdHRoaXMuZXJyb3JUaHJvd24gPSBlcnJvclRocm93bjsgLy8gZnJlcXVlbnRseSB1bmRlZmluZWRcblx0XHRcdFx0XHR0aGlzLmVycm9yVGV4dCA9XG5cdFx0XHRcdFx0XHRzdGF0dXNUZXh0ICtcblx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5Zyo6LCD55SoQVBJ5pe25Y+R55Sf5LqG6ZSZ6K+v4oCcJywgJ+WcqOWRvOWPq0FQSeaZgueZvOeUn+S6humMr+iqpOOAjCcpICtcblx0XHRcdFx0XHRcdGVycm9yLnN0YXR1c1RleHQgK1xuXHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfigJ3jgIInLCAn44CN44CCJyk7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMucmV0dXJuRXJyb3IoKTtcblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHR9LFxuXHRcdHJldHVybkVycm9yKGNhbGxlckFqYXhQYXJhbWV0ZXJzKSB7XG5cdFx0XHRpZiAodGhpcy5lcnJvckNvZGUgPT09ICdiYWR0b2tlbicgJiYgIXRoaXMuYmFkdG9rZW5SZXRyeSkge1xuXHRcdFx0XHR0aGlzLnN0YXRlbGVtLndhcm4od2luZG93LndnVUxTKCfml6DmlYjku6TniYzvvIzojrflj5bmlrDnmoTku6TniYzlubbph43or5XigKbigKYnLCAn54Sh5pWI5qyK5p2W77yM5Y+W5b6X5paw55qE5qyK5p2W5Lim6YeN6Kmm4oCm4oCmJykpO1xuXHRcdFx0XHR0aGlzLmJhZHRva2VuUmV0cnkgPSB0cnVlO1xuXHRcdFx0XHQvLyBHZXQgYSBuZXcgQ1NSRiB0b2tlbiBhbmQgcmV0cnkuIElmIHRoZSBvcmlnaW5hbCBhY3Rpb24gbmVlZHMgYSBkaWZmZXJlbnRcblx0XHRcdFx0Ly8gdHlwZSBvZiBhY3Rpb24gdGhhbiBDU1JGLCB3ZSBkbyBvbmUgcG9pbnRsZXNzIHJldHJ5IGJlZm9yZSBiYWlsaW5nIG91dFxuXHRcdFx0XHRyZXR1cm4gTW9yZWJpdHMud2lraS5hcGkuZ2V0VG9rZW4oKS50aGVuKCh0b2tlbikgPT4ge1xuXHRcdFx0XHRcdHRoaXMucXVlcnkudG9rZW4gPSB0b2tlbjtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5wb3N0KGNhbGxlckFqYXhQYXJhbWV0ZXJzKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnN0YXRlbGVtLmVycm9yKGAke3RoaXMuZXJyb3JUZXh0fe+8iCR7dGhpcy5lcnJvckNvZGV977yJYCk7XG5cdFx0XHQvLyBpbnZva2UgZmFpbHVyZSBjYWxsYmFjayBpZiBvbmUgd2FzIHN1cHBsaWVkXG5cdFx0XHRpZiAodGhpcy5vbkVycm9yKSB7XG5cdFx0XHRcdC8vIHNldCB0aGUgY2FsbGJhY2sgY29udGV4dCB0byB0aGlzLnBhcmVudCBmb3IgbmV3IGNvZGUgYW5kIHN1cHBseSB0aGUgQVBJIG9iamVjdFxuXHRcdFx0XHQvLyBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gdGhlIGNhbGxiYWNrIGZvciBsZWdhY3kgY29kZVxuXHRcdFx0XHR0aGlzLm9uRXJyb3IuY2FsbCh0aGlzLnBhcmVudCwgdGhpcyk7XG5cdFx0XHR9XG5cdFx0XHQvLyBkb24ndCBjb21wbGV0ZSB0aGUgYWN0aW9uIHNvIHRoYXQgdGhlIGVycm9yIHJlbWFpbnMgZGlzcGxheWVkXG5cdFx0XHRyZXR1cm4gJC5EZWZlcnJlZCgpLnJlamVjdFdpdGgodGhpcy5wYXJlbnQsIFt0aGlzXSk7XG5cdFx0fSxcblx0XHRnZXRTdGF0dXNFbGVtZW50KCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuc3RhdGVsZW07XG5cdFx0fSxcblx0XHRnZXRFcnJvckNvZGUoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5lcnJvckNvZGU7XG5cdFx0fSxcblx0XHRnZXRFcnJvclRleHQoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5lcnJvclRleHQ7XG5cdFx0fSxcblx0XHRnZXRYTUwoKSB7XG5cdFx0XHQvLyByZXRhaW5lZCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHksIHVzZSBnZXRSZXNwb25zZSgpIGluc3RlYWRcblx0XHRcdHJldHVybiB0aGlzLnJlc3BvbnNlWE1MO1xuXHRcdH0sXG5cdFx0Z2V0UmVzcG9uc2UoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yZXNwb25zZTtcblx0XHR9LFxuXHR9O1xuXHQvKipcblx0ICogUmV0cmlldmVzIHdpa2l0ZXh0IGZyb20gYSBwYWdlLiBDYWNoaW5nIGVuYWJsZWQsIGR1cmF0aW9uIDEgZGF5LlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGl0bGVcblx0ICovXG5cdE1vcmViaXRzLndpa2kuZ2V0Q2FjaGVkSnNvbiA9ICh0aXRsZSkgPT4ge1xuXHRcdGNvbnN0IHF1ZXJ5ID0ge1xuXHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0cHJvcDogJ3JldmlzaW9ucycsXG5cdFx0XHR0aXRsZXM6IHRpdGxlLFxuXHRcdFx0cnZzbG90czogJ21haW4nLFxuXHRcdFx0cnZwcm9wOiAnY29udGVudCcsXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdHNtYXhhZ2U6ICczNjAwJyxcblx0XHRcdG1heGFnZTogJzM2MDAnLFxuXHRcdH07XG5cblx0XHRyZXR1cm4gbmV3IE1vcmViaXRzLndpa2kuYXBpKCcnLCBxdWVyeSkucG9zdCgpLnRoZW4oKGFwaW9iaikgPT4ge1xuXHRcdFx0YXBpb2JqLmdldFN0YXR1c0VsZW1lbnQoKS51bmxpbmsoKTtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXBpb2JqLmdldFJlc3BvbnNlKCk7XG5cdFx0XHRjb25zdCB3aWtpdGV4dCA9IHJlc3BvbnNlLnF1ZXJ5LnBhZ2VzWzBdLnJldmlzaW9uc1swXS5zbG90cy5tYWluLmNvbnRlbnQ7XG5cdFx0XHRyZXR1cm4gSlNPTi5wYXJzZSh3aWtpdGV4dCk7XG5cdFx0fSk7XG5cdH07XG5cdGxldCBtb3JlYml0c1dpa2lBcGlVc2VyQWdlbnQgPSAnUWl1d2VuLzEuMSAobW9yZWJpdHMuanMpJztcblx0LyoqXG5cdCAqIFNldCB0aGUgY3VzdG9tIHVzZXIgYWdlbnQgaGVhZGVyLCB3aGljaCBpcyB1c2VkIGZvciBzZXJ2ZXItc2lkZSBsb2dnaW5nLlxuXHQgKiBOb3RlIHRoYXQgZG9pbmcgc28gd2lsbCBzZXQgdGhlIHVzZXJhZ2VudCBmb3IgZXZlcnkgYE1vcmViaXRzLndpa2kuYXBpYFxuXHQgKiBwcm9jZXNzIHBlcmZvcm1lZCB0aGVyZWFmdGVyLlxuXHQgKlxuXHQgKiBAc2VlIHtAbGluayBodHRwczovL2xpc3RzLndpa2ltZWRpYS5vcmcvcGlwZXJtYWlsL21lZGlhd2lraS1hcGktYW5ub3VuY2UvMjAxNC1Ob3ZlbWJlci8wMDAwNzUuaHRtbH1cblx0ICogZm9yIG9yaWdpbmFsIGFubm91bmNlbWVudC5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLndpa2kuYXBpXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbdWE9UWl1d2VuLzEuMSAobW9yZWJpdHMuanMpXSAtIFVzZXIgYWdlbnQuICBUaGUgZGVmYXVsdFxuXHQgKiB2YWx1ZSBvZiBgbW9yZWJpdHMuanNgIHdpbGwgYmUgYXBwZW5kZWQgdG8gYW55IHByb3ZpZGVkXG5cdCAqIHZhbHVlLlxuXHQgKi9cblx0TW9yZWJpdHMud2lraS5hcGkuc2V0QXBpVXNlckFnZW50ID0gKHVhKSA9PiB7XG5cdFx0bW9yZWJpdHNXaWtpQXBpVXNlckFnZW50ID0gYFFpdXdlbi8xLjEgKG1vcmViaXRzLmpzJHt1YSA/IGA7ICR7dWF9YCA6ICcnfSlgO1xuXHR9O1xuXHQvKipcblx0ICogQ2hhbmdlL3JldmlzaW9uIHRhZyBhcHBsaWVkIHRvIE1vcmViaXRzIGFjdGlvbnMgd2hlbiBubyBvdGhlciB0YWdzIGFyZSBzcGVjaWZpZWQuXG5cdCAqIFVudXNlZCBieSBkZWZhdWx0LlxuXHQgKlxuXHQgKiBAY29uc3RhbnRcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLndpa2kuYXBpXG5cdCAqIEB0eXBlIHtzdHJpbmd9XG5cdCAqL1xuXHRjb25zdCBtb3JlYml0c1dpa2lDaGFuZ2VUYWcgPSAnJztcblx0LyoqXG5cdCAqIEdldCBhIG5ldyBDU1JGIHRva2VuIG9uIGVuY291bnRlcmluZyB0b2tlbiBlcnJvcnMuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpLmFwaVxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfSBNZWRpYVdpa2kgQ1NSRiB0b2tlbi5cblx0ICovXG5cdE1vcmViaXRzLndpa2kuYXBpLmdldFRva2VuID0gKCkgPT4ge1xuXHRcdGNvbnN0IHRva2VuQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKHdpbmRvdy53Z1VMUygn6I635Y+W5Luk54mMJywgJ+WPluW+l+asiuadlicpLCB7XG5cdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRtZXRhOiAndG9rZW5zJyxcblx0XHRcdHR5cGU6ICdjc3JmJyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdH0pO1xuXHRcdHJldHVybiB0b2tlbkFwaS5wb3N0KCkudGhlbigoYXBpb2JqKSA9PiB7XG5cdFx0XHRyZXR1cm4gYXBpb2JqLnJlc3BvbnNlLnF1ZXJ5LnRva2Vucy5jc3JmdG9rZW47XG5cdFx0fSk7XG5cdH07XG5cdC8qICoqKioqKioqKioqKioqKiogTW9yZWJpdHMud2lraS5wYWdlICoqKioqKioqKioqKioqKiogKi9cblx0LyoqXG5cdCAqIFVzZSB0aGUgTWVkaWFXaWtpIEFQSSB0byBsb2FkIGEgcGFnZSBhbmQgb3B0aW9uYWxseSBlZGl0IGl0LCBtb3ZlIGl0LCBldGMuXG5cdCAqXG5cdCAqIENhbGxlcnMgYXJlIG5vdCBwZXJtaXR0ZWQgdG8gZGlyZWN0bHkgYWNjZXNzIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgY2xhc3MhXG5cdCAqIEFsbCBwcm9wZXJ0eSBhY2Nlc3MgaXMgdGhyb3VnaCB0aGUgYXBwcm9wcmlhdGUgZ2V0X19fKCkgb3Igc2V0X19fKCkgbWV0aG9kLlxuXHQgKlxuXHQgKiBDYWxsZXJzIHNob3VsZCBzZXQge0BsaW5rIE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLm5vdGljZX0gYW5kIHtAbGluayBNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5yZWRpcmVjdH1cblx0ICogYmVmb3JlIHRoZSBmaXJzdCBjYWxsIHRvIHtAbGluayBNb3JlYml0cy53aWtpLnBhZ2UubG9hZCgpfS5cblx0ICpcblx0ICogRWFjaCBvZiB0aGUgY2FsbGJhY2sgZnVuY3Rpb25zIHRha2VzIG9uZSBwYXJhbWV0ZXIsIHdoaWNoIGlzIGFcblx0ICogcmVmZXJlbmNlIHRvIHRoZSBNb3JlYml0cy53aWtpLnBhZ2Ugb2JqZWN0IHRoYXQgcmVnaXN0ZXJlZCB0aGUgY2FsbGJhY2suXG5cdCAqIENhbGxiYWNrIGZ1bmN0aW9ucyBtYXkgaW52b2tlIGFueSBNb3JlYml0cy53aWtpLnBhZ2UgcHJvdG90eXBlIG1ldGhvZCB1c2luZyB0aGlzIHJlZmVyZW5jZS5cblx0ICpcblx0ICpcblx0ICogQ2FsbCBzZXF1ZW5jZSBmb3IgY29tbW9uIG9wZXJhdGlvbnMgKG9wdGlvbmFsIGZpbmFsIHVzZXIgY2FsbGJhY2tzIG5vdCBzaG93bik6XG5cdCAqXG5cdCAqIC0gRWRpdCBjdXJyZW50IGNvbnRlbnRzIG9mIGEgcGFnZSAobm8gZWRpdCBjb25mbGljdCk6XG5cdCAqIGAubG9hZCh1c2VyVGV4dEVkaXRDYWxsYmFjaykgLT4gY3R4LmxvYWRBcGkucG9zdCgpIC0+XG5cdCAqIGN0eC5sb2FkQXBpLnBvc3Quc3VjY2VzcygpIC0+IGN0eC5mbkxvYWRTdWNjZXNzKCkgLT4gdXNlclRleHRFZGl0Q2FsbGJhY2soKSAtPlxuXHQgKiAuc2F2ZSgpIC0+IGN0eC5zYXZlQXBpLnBvc3QoKSAtPiBjdHgubG9hZEFwaS5wb3N0LnN1Y2Nlc3MoKSAtPiBjdHguZm5TYXZlU3VjY2VzcygpYFxuXHQgKlxuXHQgKiAtIEVkaXQgY3VycmVudCBjb250ZW50cyBvZiBhIHBhZ2UgKHdpdGggZWRpdCBjb25mbGljdCk6XG5cdCAqIGAubG9hZCh1c2VyVGV4dEVkaXRDYWxsYmFjaykgLT4gY3R4LmxvYWRBcGkucG9zdCgpIC0+XG5cdCAqIGN0eC5sb2FkQXBpLnBvc3Quc3VjY2VzcygpIC0+IGN0eC5mbkxvYWRTdWNjZXNzKCkgLT4gdXNlclRleHRFZGl0Q2FsbGJhY2soKSAtPlxuXHQgKiAuc2F2ZSgpIC0+IGN0eC5zYXZlQXBpLnBvc3QoKSAtPiBjdHgubG9hZEFwaS5wb3N0LnN1Y2Nlc3MoKSAtPlxuXHQgKiBjdHguZm5TYXZlRXJyb3IoKSAtPiBjdHgubG9hZEFwaS5wb3N0KCkgLT4gY3R4LmxvYWRBcGkucG9zdC5zdWNjZXNzKCkgLT5cblx0ICogY3R4LmZuTG9hZFN1Y2Nlc3MoKSAtPiB1c2VyVGV4dEVkaXRDYWxsYmFjaygpIC0+IC5zYXZlKCkgLT5cblx0ICogY3R4LnNhdmVBcGkucG9zdCgpIC0+IGN0eC5sb2FkQXBpLnBvc3Quc3VjY2VzcygpIC0+IGN0eC5mblNhdmVTdWNjZXNzKClgXG5cdCAqXG5cdCAqIC0gQXBwZW5kIHRvIGEgcGFnZSAoc2ltaWxhciBmb3IgcHJlcGVuZCBhbmQgbmV3U2VjdGlvbik6XG5cdCAqIGAuYXBwZW5kKCkgLT4gY3R4LmxvYWRBcGkucG9zdCgpIC0+IGN0eC5sb2FkQXBpLnBvc3Quc3VjY2VzcygpIC0+XG5cdCAqIGN0eC5mbkxvYWRTdWNjZXNzKCkgLT4gY3R4LmZuQXV0b1NhdmUoKSAtPiAuc2F2ZSgpIC0+IGN0eC5zYXZlQXBpLnBvc3QoKSAtPlxuXHQgKiBjdHgubG9hZEFwaS5wb3N0LnN1Y2Nlc3MoKSAtPiBjdHguZm5TYXZlU3VjY2VzcygpYFxuXHQgKlxuXHQgKiBOb3Rlczpcblx0ICogMS4gQWxsIGZ1bmN0aW9ucyBmb2xsb3dpbmcgTW9yZWJpdHMud2lraS5hcGkucG9zdCgpIGFyZSBpbnZva2VkIGFzeW5jaHJvbm91c2x5IGZyb20gdGhlIGpRdWVyeSBBSkFYIGxpYnJhcnkuXG5cdCAqIDIuIFRoZSBzZXF1ZW5jZSBmb3IgYXBwZW5kL3ByZXBlbmQvbmV3U2VjdGlvbiBjb3VsZCBiZSBzbGlnaHRseSBzaG9ydGVuZWQsXG5cdCAqIGJ1dCBpdCB3b3VsZCByZXF1aXJlIHNpZ25pZmljYW50IGR1cGxpY2F0aW9uIG9mIGNvZGUgZm9yIGxpdHRsZSBiZW5lZml0LlxuXHQgKlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraVxuXHQgKiBAY2xhc3Ncblx0ICogQHBhcmFtIHtzdHJpbmd9IHBhZ2VOYW1lIC0gVGhlIG5hbWUgb2YgdGhlIHBhZ2UsIHByZWZpeGVkIGJ5IHRoZSBuYW1lc3BhY2UgKGlmIGFueSkuXG5cdCAqIEZvciB0aGUgY3VycmVudCBwYWdlLCB1c2UgYG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKWAuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfE1vcmViaXRzLnN0YXR1c30gW3N0YXR1c10gLSBBIHN0cmluZyBkZXNjcmliaW5nIHRoZSBhY3Rpb24gYWJvdXQgdG8gYmUgdW5kZXJ0YWtlbixcblx0ICogb3IgYSBNb3JlYml0cy5zdGF0dXMgb2JqZWN0XG5cdCAqL1xuXHRNb3JlYml0cy53aWtpLnBhZ2UgPSBmdW5jdGlvbiAocGFnZU5hbWUsIHN0YXR1cykge1xuXHRcdGlmICghc3RhdHVzKSB7XG5cdFx0XHRzdGF0dXMgPSB3aW5kb3cud2dVTFMoJ+aJk+W8gOmhtemdouKAnCcsICfmiZPplovpoIHpnaLjgIwnKSArIHBhZ2VOYW1lICsgd2luZG93LndnVUxTKCfigJ0nLCAn44CNJyk7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIFByaXZhdGUgY29udGV4dCB2YXJpYWJsZXMuXG5cdFx0ICpcblx0XHQgKiBUaGlzIGNvbnRleHQgaXMgbm90IHZpc2libGUgdG8gdGhlIG91dHNpZGUsIHRodXMgYWxsIHRoZSBkYXRhIGhlcmVcblx0XHQgKiBtdXN0IGJlIGFjY2Vzc2VkIHZpYSBnZXR0ZXIgYW5kIHNldHRlciBmdW5jdGlvbnMuXG5cdFx0ICpcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdGNvbnN0IGN0eCA9IHtcblx0XHRcdC8vIGJhY2tpbmcgZmllbGRzIGZvciBwdWJsaWMgcHJvcGVydGllc1xuXHRcdFx0cGFnZU5hbWUsXG5cdFx0XHRwYWdlRXhpc3RzOiBmYWxzZSxcblx0XHRcdGVkaXRTdW1tYXJ5OiBudWxsLFxuXHRcdFx0Y2hhbmdlVGFnczogbnVsbCxcblx0XHRcdHRlc3RBY3Rpb25zOiBudWxsLFxuXHRcdFx0Ly8gYXJyYXkgaWYgYW55IHZhbGlkIGFjdGlvbnNcblx0XHRcdGNhbGxiYWNrUGFyYW1ldGVyczogbnVsbCxcblx0XHRcdHN0YXR1c0VsZW1lbnQ6IHN0YXR1cyBpbnN0YW5jZW9mIE1vcmViaXRzLnN0YXR1cyA/IHN0YXR1cyA6IG5ldyBNb3JlYml0cy5zdGF0dXMoc3RhdHVzKSxcblx0XHRcdC8vIC0gZWRpdFxuXHRcdFx0cGFnZVRleHQ6IG51bGwsXG5cdFx0XHRlZGl0TW9kZTogJ2FsbCcsXG5cdFx0XHQvLyBzYXZlKCkgcmVwbGFjZXMgZW50aXJlIGNvbnRlbnRzIG9mIHRoZSBwYWdlIGJ5IGRlZmF1bHRcblx0XHRcdGFwcGVuZFRleHQ6IG51bGwsXG5cdFx0XHQvLyBjYW4ndCByZXVzZSBwYWdlVGV4dCBmb3IgdGhpcyBiZWNhdXNlIHBhZ2VUZXh0IGlzIG5lZWRlZCB0byBmb2xsb3cgYSByZWRpcmVjdFxuXHRcdFx0cHJlcGVuZFRleHQ6IG51bGwsXG5cdFx0XHQvLyBjYW4ndCByZXVzZSBwYWdlVGV4dCBmb3IgdGhpcyBiZWNhdXNlIHBhZ2VUZXh0IGlzIG5lZWRlZCB0byBmb2xsb3cgYSByZWRpcmVjdFxuXHRcdFx0bmV3U2VjdGlvblRleHQ6IG51bGwsXG5cdFx0XHRuZXdTZWN0aW9uVGl0bGU6IG51bGwsXG5cdFx0XHRjcmVhdGVPcHRpb246IG51bGwsXG5cdFx0XHRtaW5vckVkaXQ6IGZhbHNlLFxuXHRcdFx0Ym90RWRpdDogZmFsc2UsXG5cdFx0XHRwYWdlU2VjdGlvbjogbnVsbCxcblx0XHRcdG1heENvbmZsaWN0UmV0cmllczogMixcblx0XHRcdG1heFJldHJpZXM6IDIsXG5cdFx0XHRmb2xsb3dSZWRpcmVjdDogZmFsc2UsXG5cdFx0XHRmb2xsb3dDcm9zc05zUmVkaXJlY3Q6IHRydWUsXG5cdFx0XHR3YXRjaGxpc3RPcHRpb246ICdub2NoYW5nZScsXG5cdFx0XHR3YXRjaGxpc3RFeHBpcnk6IG51bGwsXG5cdFx0XHRjcmVhdG9yOiBudWxsLFxuXHRcdFx0dGltZXN0YW1wOiBudWxsLFxuXHRcdFx0Ly8gLSByZXZlcnRcblx0XHRcdHJldmVydE9sZElEOiBudWxsLFxuXHRcdFx0Ly8gLSBtb3ZlXG5cdFx0XHRtb3ZlRGVzdGluYXRpb246IG51bGwsXG5cdFx0XHRtb3ZlVGFsa1BhZ2U6IGZhbHNlLFxuXHRcdFx0bW92ZVN1YnBhZ2VzOiBmYWxzZSxcblx0XHRcdG1vdmVTdXBwcmVzc1JlZGlyZWN0OiBmYWxzZSxcblx0XHRcdC8vIC0gcHJvdGVjdFxuXHRcdFx0cHJvdGVjdEVkaXQ6IG51bGwsXG5cdFx0XHRwcm90ZWN0TW92ZTogbnVsbCxcblx0XHRcdHByb3RlY3RDcmVhdGU6IG51bGwsXG5cdFx0XHRwcm90ZWN0Q2FzY2FkZTogbnVsbCxcblx0XHRcdC8vIC0gY3JlYXRpb24gbG9va3VwXG5cdFx0XHRsb29rdXBOb25SZWRpcmVjdENyZWF0b3I6IGZhbHNlLFxuXHRcdFx0Ly8gaW50ZXJuYWwgc3RhdHVzXG5cdFx0XHRwYWdlTG9hZGVkOiBmYWxzZSxcblx0XHRcdGNzcmZUb2tlbjogbnVsbCxcblx0XHRcdGxvYWRUaW1lOiBudWxsLFxuXHRcdFx0bGFzdEVkaXRUaW1lOiBudWxsLFxuXHRcdFx0cGFnZUlEOiBudWxsLFxuXHRcdFx0Y29udGVudE1vZGVsOiBudWxsLFxuXHRcdFx0cmV2ZXJ0Q3VySUQ6IG51bGwsXG5cdFx0XHRyZXZlcnRVc2VyOiBudWxsLFxuXHRcdFx0d2F0Y2hlZDogZmFsc2UsXG5cdFx0XHRmdWxseVByb3RlY3RlZDogZmFsc2UsXG5cdFx0XHRzdXBwcmVzc1Byb3RlY3RXYXJuaW5nOiBmYWxzZSxcblx0XHRcdGNvbmZsaWN0UmV0cmllczogMCxcblx0XHRcdHJldHJpZXM6IDAsXG5cdFx0XHQvLyBjYWxsYmFja3Ncblx0XHRcdG9uTG9hZFN1Y2Nlc3M6IG51bGwsXG5cdFx0XHRvbkxvYWRGYWlsdXJlOiBudWxsLFxuXHRcdFx0b25TYXZlU3VjY2VzczogbnVsbCxcblx0XHRcdG9uU2F2ZUZhaWx1cmU6IG51bGwsXG5cdFx0XHRvbkxvb2t1cENyZWF0aW9uU3VjY2VzczogbnVsbCxcblx0XHRcdG9uTG9va3VwQ3JlYXRpb25GYWlsdXJlOiBudWxsLFxuXHRcdFx0b25Nb3ZlU3VjY2VzczogbnVsbCxcblx0XHRcdG9uTW92ZUZhaWx1cmU6IG51bGwsXG5cdFx0XHRvbkRlbGV0ZVN1Y2Nlc3M6IG51bGwsXG5cdFx0XHRvbkRlbGV0ZUZhaWx1cmU6IG51bGwsXG5cdFx0XHRvblVuZGVsZXRlU3VjY2VzczogbnVsbCxcblx0XHRcdG9uVW5kZWxldGVGYWlsdXJlOiBudWxsLFxuXHRcdFx0b25Qcm90ZWN0U3VjY2VzczogbnVsbCxcblx0XHRcdG9uUHJvdGVjdEZhaWx1cmU6IG51bGwsXG5cdFx0XHQvLyBpbnRlcm5hbCBvYmplY3RzXG5cdFx0XHRsb2FkUXVlcnk6IG51bGwsXG5cdFx0XHRsb2FkQXBpOiBudWxsLFxuXHRcdFx0c2F2ZUFwaTogbnVsbCxcblx0XHRcdGxvb2t1cENyZWF0aW9uQXBpOiBudWxsLFxuXHRcdFx0bW92ZUFwaTogbnVsbCxcblx0XHRcdG1vdmVQcm9jZXNzQXBpOiBudWxsLFxuXHRcdFx0cGF0cm9sQXBpOiBudWxsLFxuXHRcdFx0cGF0cm9sUHJvY2Vzc0FwaTogbnVsbCxcblx0XHRcdGRlbGV0ZUFwaTogbnVsbCxcblx0XHRcdGRlbGV0ZVByb2Nlc3NBcGk6IG51bGwsXG5cdFx0XHR1bmRlbGV0ZUFwaTogbnVsbCxcblx0XHRcdHVuZGVsZXRlUHJvY2Vzc0FwaTogbnVsbCxcblx0XHRcdHByb3RlY3RBcGk6IG51bGwsXG5cdFx0XHRwcm90ZWN0UHJvY2Vzc0FwaTogbnVsbCxcblx0XHR9O1xuXHRcdGNvbnN0IGVtcHR5RnVuY3Rpb24gPSAoKSA9PiB7fTtcblx0XHQvKipcblx0XHQgKiBMb2FkcyB0aGUgdGV4dCBmb3IgdGhlIHBhZ2UuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBvblN1Y2Nlc3MgLSBDYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgd2hlbiB0aGUgbG9hZCBoYXMgc3VjY2VlZGVkLlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvbkZhaWx1cmVdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIHdoZW4gdGhlIGxvYWQgZmFpbHMuXG5cdFx0ICovXG5cdFx0dGhpcy5sb2FkID0gZnVuY3Rpb24gKG9uU3VjY2Vzcywgb25GYWlsdXJlKSB7XG5cdFx0XHRjdHgub25Mb2FkU3VjY2VzcyA9IG9uU3VjY2Vzcztcblx0XHRcdGN0eC5vbkxvYWRGYWlsdXJlID0gb25GYWlsdXJlIHx8IGVtcHR5RnVuY3Rpb247XG5cdFx0XHQvLyBOZWVkIHRvIGJlIGFibGUgdG8gZG8gc29tZXRoaW5nIGFmdGVyIHRoZSBwYWdlIGxvYWRzXG5cdFx0XHRpZiAoIW9uU3VjY2Vzcykge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcignSW50ZXJuYWwgZXJyb3I6IG5vIG9uU3VjY2VzcyBjYWxsYmFjayBwcm92aWRlZCB0byBsb2FkKCkhJyk7XG5cdFx0XHRcdGN0eC5vbkxvYWRGYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjdHgubG9hZFF1ZXJ5ID0ge1xuXHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdHByb3A6ICdpbmZvfHJldmlzaW9ucycsXG5cdFx0XHRcdGlucHJvcDogJ3dhdGNoZWQnLFxuXHRcdFx0XHRpbnRlc3RhY3Rpb25zOiAnZWRpdCcsXG5cdFx0XHRcdC8vIGNhbiBiZSBleHBhbmRlZFxuXHRcdFx0XHRjdXJ0aW1lc3RhbXA6ICcnLFxuXHRcdFx0XHRtZXRhOiAndG9rZW5zJyxcblx0XHRcdFx0dHlwZTogJ2NzcmYnLFxuXHRcdFx0XHR0aXRsZXM6IGN0eC5wYWdlTmFtZSxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdC8vIGRvbid0IG5lZWQgcnZsaW1pdD0xIGJlY2F1c2Ugd2UgZG9uJ3QgbmVlZCBydnN0YXJ0aWQgaGVyZSBhbmQgb25seSBvbmUgYWN0dWFsIHJldiBpcyByZXR1cm5lZCBieSBkZWZhdWx0XG5cdFx0XHR9O1xuXG5cdFx0XHRpZiAoY3R4LmVkaXRNb2RlID09PSAnYWxsJykge1xuXHRcdFx0XHRjdHgubG9hZFF1ZXJ5LnJ2cHJvcCA9ICdjb250ZW50fHRpbWVzdGFtcCc7IC8vIGdldCB0aGUgcGFnZSBjb250ZW50IGF0IHRoZSBzYW1lIHRpbWUsIGlmIG5lZWRlZFxuXHRcdFx0fSBlbHNlIGlmIChjdHguZWRpdE1vZGUgPT09ICdyZXZlcnQnKSB7XG5cdFx0XHRcdGN0eC5sb2FkUXVlcnkucnZwcm9wID0gJ3RpbWVzdGFtcCc7XG5cdFx0XHRcdGN0eC5sb2FkUXVlcnkucnZsaW1pdCA9IDE7XG5cdFx0XHRcdGN0eC5sb2FkUXVlcnkucnZzdGFydGlkID0gY3R4LnJldmVydE9sZElEO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGN0eC5mb2xsb3dSZWRpcmVjdCkge1xuXHRcdFx0XHRjdHgubG9hZFF1ZXJ5LnJlZGlyZWN0cyA9ICcnOyAvLyBmb2xsb3cgYWxsIHJlZGlyZWN0c1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodHlwZW9mIGN0eC5wYWdlU2VjdGlvbiA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y3R4LmxvYWRRdWVyeS5ydnNlY3Rpb24gPSBjdHgucGFnZVNlY3Rpb247XG5cdFx0XHR9XG5cdFx0XHRpZiAoTW9yZWJpdHMudXNlcklzU3lzb3ApIHtcblx0XHRcdFx0Y3R4LmxvYWRRdWVyeS5pbnByb3AgKz0gJ3xwcm90ZWN0aW9uJztcblx0XHRcdH1cblx0XHRcdGN0eC5sb2FkQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0XHR3aW5kb3cud2dVTFMoJ+aKk+WPlumhtemdouKApuKApicsICfmipPlj5bpoIHpnaLigKbigKYnKSxcblx0XHRcdFx0Y3R4LmxvYWRRdWVyeSxcblx0XHRcdFx0Zm5Mb2FkU3VjY2Vzcyxcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQsXG5cdFx0XHRcdGN0eC5vbkxvYWRGYWlsdXJlXG5cdFx0XHQpO1xuXHRcdFx0Y3R4LmxvYWRBcGkuc2V0UGFyZW50KHRoaXMpO1xuXHRcdFx0Y3R4LmxvYWRBcGkucG9zdCgpO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogU2F2ZXMgdGhlIHRleHQgZm9yIHRoZSBwYWdlIHRvIFdpa2lwZWRpYS5cblx0XHQgKiBNdXN0IGJlIHByZWNlZGVkIGJ5IHN1Y2Nlc3NmdWxseSBjYWxsaW5nIGBsb2FkKClgLlxuXHRcdCAqXG5cdFx0ICogV2FybmluZzogQ2FsbGluZyBgc2F2ZSgpYCBjYW4gcmVzdWx0IGluIGFkZGl0aW9uYWwgY2FsbHMgdG8gdGhlXG5cdFx0ICogcHJldmlvdXMgYGxvYWQoKWAgY2FsbGJhY2tzIHRvIHJlY292ZXIgZnJvbSBlZGl0IGNvbmZsaWN0cyEgSW4gdGhpc1xuXHRcdCAqIGNhc2UsIGNhbGxlcnMgbXVzdCBtYWtlIHRoZSBzYW1lIGVkaXQgdG8gdGhlIG5ldyBwYWdlVGV4dCBhbmRcblx0XHQgKiByZS1pbnZva2UgYHNhdmUoKWAuICBUaGlzIGJlaGF2aW9yIGNhbiBiZSBkaXNhYmxlZCB3aXRoXG5cdFx0ICogYHNldE1heENvbmZsaWN0UmV0cmllcygwKWAuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25TdWNjZXNzXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCB3aGVuIHRoZSBzYXZlIGhhcyBzdWNjZWVkZWQuXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRmFpbHVyZV0gLSBDYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgd2hlbiB0aGUgc2F2ZSBmYWlscy5cblx0XHQgKi9cblx0XHR0aGlzLnNhdmUgPSBmdW5jdGlvbiAob25TdWNjZXNzLCBvbkZhaWx1cmUpIHtcblx0XHRcdGN0eC5vblNhdmVTdWNjZXNzID0gb25TdWNjZXNzO1xuXHRcdFx0Y3R4Lm9uU2F2ZUZhaWx1cmUgPSBvbkZhaWx1cmUgfHwgZW1wdHlGdW5jdGlvbjtcblx0XHRcdC8vIGFyZSB3ZSBnZXR0aW5nIG91ciBlZGl0aW5nIHRva2VuIGZyb20gbXcudXNlci50b2tlbnM/XG5cdFx0XHRjb25zdCBjYW5Vc2VNd1VzZXJUb2tlbiA9IGZuQ2FuVXNlTXdVc2VyVG9rZW4oJ2VkaXQnKTtcblx0XHRcdGlmICghY3R4LnBhZ2VMb2FkZWQgJiYgIWNhblVzZU13VXNlclRva2VuKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKCdJbnRlcm5hbCBlcnJvcjogYXR0ZW1wdCB0byBzYXZlIGEgcGFnZSB0aGF0IGhhcyBub3QgYmVlbiBsb2FkZWQhJyk7XG5cdFx0XHRcdGN0eC5vblNhdmVGYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWN0eC5lZGl0U3VtbWFyeSkge1xuXHRcdFx0XHQvLyBuZXcgc2VjdGlvbiBtb2RlIGFsbG93cyAobmF5LCBlbmNvdXJhZ2VzKSB1c2luZyB0aGVcblx0XHRcdFx0Ly8gdGl0bGUgYXMgdGhlIGVkaXQgc3VtbWFyeSwgYnV0IHRoZSBxdWVyeSBuZWVkc1xuXHRcdFx0XHQvLyBlZGl0U3VtbWFyeSB0byBiZSB1bmRlZmluZWQgb3IgJycsIG5vdCBudWxsXG5cdFx0XHRcdGlmIChjdHguZWRpdE1vZGUgPT09ICduZXcnICYmIGN0eC5uZXdTZWN0aW9uVGl0bGUpIHtcblx0XHRcdFx0XHRjdHguZWRpdFN1bW1hcnkgPSAnJztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcignSW50ZXJuYWwgZXJyb3I6IGVkaXQgc3VtbWFyeSBub3Qgc2V0IGJlZm9yZSBzYXZlIScpO1xuXHRcdFx0XHRcdGN0eC5vblNhdmVGYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ly8gc2hvdWxkbid0IGhhcHBlbiBpZiBjYW5Vc2VNd1VzZXJUb2tlbiA9PT0gdHJ1ZVxuXHRcdFx0aWYgKFxuXHRcdFx0XHRjdHguZnVsbHlQcm90ZWN0ZWQgJiZcblx0XHRcdFx0IWN0eC5zdXBwcmVzc1Byb3RlY3RXYXJuaW5nICYmXG5cdFx0XHRcdCFjb25maXJtKFxuXHRcdFx0XHRcdGN0eC5mdWxseVByb3RlY3RlZCA9PT0gJ2luZmluaXR5J1xuXHRcdFx0XHRcdFx0PyB3aW5kb3cud2dVTFMoJ+aCqOWNs+Wwhue8lui+keWFqOS/neaKpOmhtemdouKAnCcsICfmgqjljbPlsIfnt6jovK/lhajkv53orbfpoIHpnaLjgIwnKSArXG5cdFx0XHRcdFx0XHRcdFx0Y3R4LnBhZ2VOYW1lICtcblx0XHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoXG5cdFx0XHRcdFx0XHRcdFx0XHQn4oCd77yI5peg6ZmQ5pyf77yJ44CCXFxuXFxu5Y2V5Ye756Gu5a6a5Lul56Gu5a6a77yM5oiW5Y2V5Ye75Y+W5raI5Lul5Y+W5raI5pON5L2c44CCJyxcblx0XHRcdFx0XHRcdFx0XHRcdCfjgI3vvIjnhKHpmZDmnJ/vvInjgIJcXG5cXG7pu57mk4rnorrlrprku6XnorrlrprvvIzmiJbpu57mk4rlj5bmtojku6Xlj5bmtojmk43kvZzjgIInXG5cdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0OiBgJHtcblx0XHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+aCqOWNs+Wwhue8lui+keWFqOS/neaKpOmhtemdouKAnCcsICfmgqjljbPlsIfnt6jovK/lhajkv53orbfpoIHpnaLjgIwnKSArXG5cdFx0XHRcdFx0XHRcdFx0Y3R4LnBhZ2VOYW1lICtcblx0XHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+KAne+8iOWIsOacn++8micsICfjgI3vvIjliLDmnJ/vvJonKSArXG5cdFx0XHRcdFx0XHRcdFx0bmV3IE1vcmViaXRzLmRhdGUoY3R4LmZ1bGx5UHJvdGVjdGVkKS5jYWxlbmRhcigndXRjJylcblx0XHRcdFx0XHRcdFx0fSAoVVRDKe+8ieOAglxcblxcbiR7d2luZG93LndnVUxTKFxuXHRcdFx0XHRcdFx0XHRcdCfljZXlh7vnoa7lrprku6Xnoa7lrprvvIzmiJbljZXlh7vlj5bmtojku6Xlj5bmtojmk43kvZzjgIInLFxuXHRcdFx0XHRcdFx0XHRcdCfpu57mk4rnorrlrprku6XnorrlrprvvIzmiJbpu57mk4rlj5bmtojku6Xlj5bmtojmk43kvZzjgIInXG5cdFx0XHRcdFx0XHRcdCl9YFxuXHRcdFx0XHQpXG5cdFx0XHQpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2luZG93LndnVUxTKCflt7Llj5bmtojlr7nlhajkv53miqTpobXpnaLnmoTnvJbovpHjgIInLCAn5bey5Y+W5raI5bCN5YWo5L+d6K236aCB6Z2i55qE57eo6Lyv44CCJykpO1xuXHRcdFx0XHRjdHgub25TYXZlRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y3R4LnJldHJpZXMgPSAwO1xuXHRcdFx0Y29uc3QgcXVlcnkgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ2VkaXQnLFxuXHRcdFx0XHR0aXRsZTogY3R4LnBhZ2VOYW1lLFxuXHRcdFx0XHRzdW1tYXJ5OiBjdHguZWRpdFN1bW1hcnksXG5cdFx0XHRcdHRva2VuOiBjYW5Vc2VNd1VzZXJUb2tlbiA/IG13LnVzZXIudG9rZW5zLmdldCgnY3NyZlRva2VuJykgOiBjdHguY3NyZlRva2VuLFxuXHRcdFx0XHR3YXRjaGxpc3Q6IGN0eC53YXRjaGxpc3RPcHRpb24sXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0fTtcblx0XHRcdGlmIChjdHguY2hhbmdlVGFncykge1xuXHRcdFx0XHRxdWVyeS50YWdzID0gY3R4LmNoYW5nZVRhZ3M7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZm5BcHBseVdhdGNobGlzdEV4cGlyeSgpKSB7XG5cdFx0XHRcdHF1ZXJ5LndhdGNobGlzdGV4cGlyeSA9IGN0eC53YXRjaGxpc3RFeHBpcnk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodHlwZW9mIGN0eC5wYWdlU2VjdGlvbiA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0cXVlcnkuc2VjdGlvbiA9IGN0eC5wYWdlU2VjdGlvbjtcblx0XHRcdH1cblx0XHRcdC8vIFNldCBtaW5vciBlZGl0IGF0dHJpYnV0ZS4gSWYgdGhlc2UgcGFyYW1ldGVycyBhcmUgcHJlc2VudCB3aXRoIGFueSB2YWx1ZSwgaXQgaXMgaW50ZXJwcmV0ZWQgYXMgdHJ1ZVxuXHRcdFx0aWYgKGN0eC5taW5vckVkaXQpIHtcblx0XHRcdFx0cXVlcnkubWlub3IgPSB0cnVlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cXVlcnkubm90bWlub3IgPSB0cnVlOyAvLyBmb3JjZSBUd2lua2xlIGNvbmZpZyB0byBvdmVycmlkZSB1c2VyIHByZWZlcmVuY2Ugc2V0dGluZyBmb3IgXCJhbGwgZWRpdHMgYXJlIG1pbm9yXCJcblx0XHRcdH1cblx0XHRcdC8vIFNldCBib3QgZWRpdCBhdHRyaWJ1dGUuIElmIHRoaXMgcGFyYW1ldGVyIGlzIHByZXNlbnQgd2l0aCBhbnkgdmFsdWUsIGl0IGlzIGludGVycHJldGVkIGFzIHRydWVcblx0XHRcdGlmIChjdHguYm90RWRpdCkge1xuXHRcdFx0XHRxdWVyeS5ib3QgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0c3dpdGNoIChjdHguZWRpdE1vZGUpIHtcblx0XHRcdFx0Y2FzZSAnYXBwZW5kJzpcblx0XHRcdFx0XHRpZiAoY3R4LmFwcGVuZFRleHQgPT09IG51bGwpIHtcblx0XHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKCdJbnRlcm5hbCBlcnJvcjogYXBwZW5kIHRleHQgbm90IHNldCBiZWZvcmUgc2F2ZSEnKTtcblx0XHRcdFx0XHRcdGN0eC5vblNhdmVGYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRxdWVyeS5hcHBlbmR0ZXh0ID0gY3R4LmFwcGVuZFRleHQ7IC8vIHVzZSBtb2RlIHRvIGFwcGVuZCB0byBjdXJyZW50IHBhZ2UgY29udGVudHNcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAncHJlcGVuZCc6XG5cdFx0XHRcdFx0aWYgKGN0eC5wcmVwZW5kVGV4dCA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoJ0ludGVybmFsIGVycm9yOiBwcmVwZW5kIHRleHQgbm90IHNldCBiZWZvcmUgc2F2ZSEnKTtcblx0XHRcdFx0XHRcdGN0eC5vblNhdmVGYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRxdWVyeS5wcmVwZW5kdGV4dCA9IGN0eC5wcmVwZW5kVGV4dDsgLy8gdXNlIG1vZGUgdG8gcHJlcGVuZCB0byBjdXJyZW50IHBhZ2UgY29udGVudHNcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnbmV3Jzpcblx0XHRcdFx0XHRpZiAoIWN0eC5uZXdTZWN0aW9uVGV4dCkge1xuXHRcdFx0XHRcdFx0Ly8gQVBJIGRvZXNuJ3QgYWxsb3cgZW1wdHkgbmV3IHNlY3Rpb24gdGV4dFxuXHRcdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoJ0ludGVybmFsIGVycm9yOiBuZXcgc2VjdGlvbiB0ZXh0IG5vdCBzZXQgYmVmb3JlIHNhdmUhJyk7XG5cdFx0XHRcdFx0XHRjdHgub25TYXZlRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cXVlcnkuc2VjdGlvbiA9ICduZXcnO1xuXHRcdFx0XHRcdHF1ZXJ5LnRleHQgPSBjdHgubmV3U2VjdGlvblRleHQ7IC8vIGFkZCBhIG5ldyBzZWN0aW9uIHRvIGN1cnJlbnQgcGFnZVxuXHRcdFx0XHRcdHF1ZXJ5LnNlY3Rpb250aXRsZSA9IGN0eC5uZXdTZWN0aW9uVGl0bGUgfHwgY3R4LmVkaXRTdW1tYXJ5OyAvLyBkb25lIGJ5IHRoZSBBUEksIGJ1dCBub24tJycgdmFsdWVzIHdvdWxkIGdldCB0cmVhdGVkIGFzIHRleHRcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAncmV2ZXJ0Jzpcblx0XHRcdFx0XHRxdWVyeS51bmRvID0gY3R4LnJldmVydEN1cklEO1xuXHRcdFx0XHRcdHF1ZXJ5LnVuZG9hZnRlciA9IGN0eC5yZXZlcnRPbGRJRDtcblx0XHRcdFx0XHRpZiAoY3R4Lmxhc3RFZGl0VGltZSkge1xuXHRcdFx0XHRcdFx0cXVlcnkuYmFzZXRpbWVzdGFtcCA9IGN0eC5sYXN0RWRpdFRpbWU7IC8vIGNoZWNrIHRoYXQgcGFnZSBoYXNuJ3QgYmVlbiBlZGl0ZWQgc2luY2UgaXQgd2FzIGxvYWRlZFxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHF1ZXJ5LnN0YXJ0dGltZXN0YW1wID0gY3R4LmxvYWRUaW1lOyAvLyBjaGVjayB0aGF0IHBhZ2UgaGFzbid0IGJlZW4gZGVsZXRlZCBzaW5jZSBpdCB3YXMgbG9hZGVkIChkb24ndCByZWNyZWF0ZSBiYWQgc3R1ZmYpXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0Ly8gJ2FsbCdcblx0XHRcdFx0XHRxdWVyeS50ZXh0ID0gY3R4LnBhZ2VUZXh0OyAvLyByZXBsYWNlIGVudGlyZSBjb250ZW50cyBvZiB0aGUgcGFnZVxuXHRcdFx0XHRcdGlmIChjdHgubGFzdEVkaXRUaW1lKSB7XG5cdFx0XHRcdFx0XHRxdWVyeS5iYXNldGltZXN0YW1wID0gY3R4Lmxhc3RFZGl0VGltZTsgLy8gY2hlY2sgdGhhdCBwYWdlIGhhc24ndCBiZWVuIGVkaXRlZCBzaW5jZSBpdCB3YXMgbG9hZGVkXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cXVlcnkuc3RhcnR0aW1lc3RhbXAgPSBjdHgubG9hZFRpbWU7IC8vIGNoZWNrIHRoYXQgcGFnZSBoYXNuJ3QgYmVlbiBkZWxldGVkIHNpbmNlIGl0IHdhcyBsb2FkZWQgKGRvbid0IHJlY3JlYXRlIGJhZCBzdHVmZilcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGlmIChbJ3JlY3JlYXRlJywgJ2NyZWF0ZW9ubHknLCAnbm9jcmVhdGUnXS5pbmNsdWRlcyhjdHguY3JlYXRlT3B0aW9uKSkge1xuXHRcdFx0XHRxdWVyeVtjdHguY3JlYXRlT3B0aW9uXSA9ICcnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGNhblVzZU13VXNlclRva2VuICYmIGN0eC5mb2xsb3dSZWRpcmVjdCkge1xuXHRcdFx0XHRxdWVyeS5yZWRpcmVjdCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0XHRjdHguc2F2ZUFwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdFx0d2luZG93LndnVUxTKCfkv53lrZjpobXpnaLigKbigKYnLCAn5YSy5a2Y6aCB6Z2i4oCm4oCmJyksXG5cdFx0XHRcdHF1ZXJ5LFxuXHRcdFx0XHRmblNhdmVTdWNjZXNzLFxuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudCxcblx0XHRcdFx0Zm5TYXZlRXJyb3Jcblx0XHRcdCk7XG5cdFx0XHRjdHguc2F2ZUFwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0XHRjdHguc2F2ZUFwaS5wb3N0KCk7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBBZGRzIHRoZSB0ZXh0IHByb3ZpZGVkIHZpYSBgc2V0QXBwZW5kVGV4dCgpYCB0byB0aGUgZW5kIG9mIHRoZVxuXHRcdCAqIHBhZ2UuICBEb2VzIG5vdCByZXF1aXJlIGNhbGxpbmcgYGxvYWQoKWAgZmlyc3QsIHVubGVzcyBhIHdhdGNobGlzdFxuXHRcdCAqIGV4cGlyeSBpcyB1c2VkLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uU3VjY2Vzc10gLSBDYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgd2hlbiB0aGUgbWV0aG9kIGhhcyBzdWNjZWVkZWQuXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRmFpbHVyZV0gLSBDYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgd2hlbiB0aGUgbWV0aG9kIGZhaWxzLlxuXHRcdCAqL1xuXHRcdHRoaXMuYXBwZW5kID0gZnVuY3Rpb24gKG9uU3VjY2Vzcywgb25GYWlsdXJlKSB7XG5cdFx0XHRjdHguZWRpdE1vZGUgPSAnYXBwZW5kJztcblx0XHRcdGlmIChmbkNhblVzZU13VXNlclRva2VuKCdlZGl0JykpIHtcblx0XHRcdFx0dGhpcy5zYXZlKG9uU3VjY2Vzcywgb25GYWlsdXJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGN0eC5vblNhdmVTdWNjZXNzID0gb25TdWNjZXNzO1xuXHRcdFx0XHRjdHgub25TYXZlRmFpbHVyZSA9IG9uRmFpbHVyZSB8fCBlbXB0eUZ1bmN0aW9uO1xuXHRcdFx0XHR0aGlzLmxvYWQoZm5BdXRvU2F2ZSwgY3R4Lm9uU2F2ZUZhaWx1cmUpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQWRkcyB0aGUgdGV4dCBwcm92aWRlZCB2aWEgYHNldFByZXBlbmRUZXh0KClgIHRvIHRoZSBzdGFydCBvZiB0aGVcblx0XHQgKiBwYWdlLiAgRG9lcyBub3QgcmVxdWlyZSBjYWxsaW5nIGBsb2FkKClgIGZpcnN0LCB1bmxlc3MgYSB3YXRjaGxpc3Rcblx0XHQgKiBleHBpcnkgaXMgdXNlZC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259ICBbb25TdWNjZXNzXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCB3aGVuIHRoZSBtZXRob2QgaGFzIHN1Y2NlZWRlZC5cblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSAgW29uRmFpbHVyZV0gLSBDYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgd2hlbiB0aGUgbWV0aG9kIGZhaWxzLlxuXHRcdCAqL1xuXHRcdHRoaXMucHJlcGVuZCA9IGZ1bmN0aW9uIChvblN1Y2Nlc3MsIG9uRmFpbHVyZSkge1xuXHRcdFx0Y3R4LmVkaXRNb2RlID0gJ3ByZXBlbmQnO1xuXHRcdFx0aWYgKGZuQ2FuVXNlTXdVc2VyVG9rZW4oJ2VkaXQnKSkge1xuXHRcdFx0XHR0aGlzLnNhdmUob25TdWNjZXNzLCBvbkZhaWx1cmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3R4Lm9uU2F2ZVN1Y2Nlc3MgPSBvblN1Y2Nlc3M7XG5cdFx0XHRcdGN0eC5vblNhdmVGYWlsdXJlID0gb25GYWlsdXJlIHx8IGVtcHR5RnVuY3Rpb247XG5cdFx0XHRcdHRoaXMubG9hZChmbkF1dG9TYXZlLCBjdHgub25TYXZlRmFpbHVyZSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBDcmVhdGVzIGEgbmV3IHNlY3Rpb24gd2l0aCB0aGUgdGV4dCBwcm92aWRlZCBieSBgc2V0TmV3U2VjdGlvblRleHQoKWBcblx0XHQgKiBhbmQgc2VjdGlvbiB0aXRsZSBmcm9tIGBzZXROZXdTZWN0aW9uVGl0bGUoKWAuXG5cdFx0ICogSWYgYGVkaXRTdW1tYXJ5YCBpcyBwcm92aWRlZCwgdGhhdCB3aWxsIGJlIHVzZWQgaW5zdGVhZCBvZiB0aGVcblx0XHQgKiBhdXRvZ2VuZXJhdGVkIFwiLT5UaXRsZSAobmV3IHNlY3Rpb25cIiBlZGl0IHN1bW1hcnkuXG5cdFx0ICogRG9lcyBub3QgcmVxdWlyZSBjYWxsaW5nIGBsb2FkKClgIGZpcnN0LCB1bmxlc3MgYSB3YXRjaGxpc3QgZXhwaXJ5XG5cdFx0ICogaXMgdXNlZC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259ICBbb25TdWNjZXNzXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCB3aGVuIHRoZSBtZXRob2QgaGFzIHN1Y2NlZWRlZC5cblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSAgW29uRmFpbHVyZV0gLSBDYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgd2hlbiB0aGUgbWV0aG9kIGZhaWxzLlxuXHRcdCAqL1xuXHRcdHRoaXMubmV3U2VjdGlvbiA9IGZ1bmN0aW9uIChvblN1Y2Nlc3MsIG9uRmFpbHVyZSkge1xuXHRcdFx0Y3R4LmVkaXRNb2RlID0gJ25ldyc7XG5cdFx0XHRpZiAoZm5DYW5Vc2VNd1VzZXJUb2tlbignZWRpdCcpKSB7XG5cdFx0XHRcdHRoaXMuc2F2ZShvblN1Y2Nlc3MsIG9uRmFpbHVyZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjdHgub25TYXZlU3VjY2VzcyA9IG9uU3VjY2Vzcztcblx0XHRcdFx0Y3R4Lm9uU2F2ZUZhaWx1cmUgPSBvbkZhaWx1cmUgfHwgZW1wdHlGdW5jdGlvbjtcblx0XHRcdFx0dGhpcy5sb2FkKGZuQXV0b1NhdmUsIGN0eC5vblNhdmVGYWlsdXJlKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdC8qKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgbmFtZSBvZiB0aGUgbG9hZGVkIHBhZ2UsIGluY2x1ZGluZyB0aGUgbmFtZXNwYWNlICovXG5cdFx0dGhpcy5nZXRQYWdlTmFtZSA9ICgpID0+IHtcblx0XHRcdHJldHVybiBjdHgucGFnZU5hbWU7XG5cdFx0fTtcblx0XHQvKiogQHJldHVybnMge3N0cmluZ30gVGhlIHRleHQgb2YgdGhlIHBhZ2UgYWZ0ZXIgYSBzdWNjZXNzZnVsIGxvYWQoKSAqL1xuXHRcdHRoaXMuZ2V0UGFnZVRleHQgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gY3R4LnBhZ2VUZXh0O1xuXHRcdH07XG5cdFx0LyoqIEBwYXJhbSB7c3RyaW5nfSBwYWdlVGV4dCAtIFVwZGF0ZWQgcGFnZSB0ZXh0IHRoYXQgd2lsbCBiZSBzYXZlZCB3aGVuIGBzYXZlKClgIGlzIGNhbGxlZCAqL1xuXHRcdHRoaXMuc2V0UGFnZVRleHQgPSAocGFnZVRleHQpID0+IHtcblx0XHRcdGN0eC5lZGl0TW9kZSA9ICdhbGwnO1xuXHRcdFx0Y3R4LnBhZ2VUZXh0ID0gcGFnZVRleHQ7XG5cdFx0fTtcblx0XHQvKiogQHBhcmFtIHtzdHJpbmd9IGFwcGVuZFRleHQgLSBUZXh0IHRoYXQgd2lsbCBiZSBhcHBlbmRlZCB0byB0aGUgcGFnZSB3aGVuIGBhcHBlbmQoKWAgaXMgY2FsbGVkICovXG5cdFx0dGhpcy5zZXRBcHBlbmRUZXh0ID0gKGFwcGVuZFRleHQpID0+IHtcblx0XHRcdGN0eC5lZGl0TW9kZSA9ICdhcHBlbmQnO1xuXHRcdFx0Y3R4LmFwcGVuZFRleHQgPSBhcHBlbmRUZXh0O1xuXHRcdH07XG5cdFx0LyoqIEBwYXJhbSB7c3RyaW5nfSBwcmVwZW5kVGV4dCAtIFRleHQgdGhhdCB3aWxsIGJlIHByZXBlbmRlZCB0byB0aGUgcGFnZSB3aGVuIGBwcmVwZW5kKClgIGlzIGNhbGxlZCAqL1xuXHRcdHRoaXMuc2V0UHJlcGVuZFRleHQgPSAocHJlcGVuZFRleHQpID0+IHtcblx0XHRcdGN0eC5lZGl0TW9kZSA9ICdwcmVwZW5kJztcblx0XHRcdGN0eC5wcmVwZW5kVGV4dCA9IHByZXBlbmRUZXh0O1xuXHRcdH07XG5cdFx0LyoqIEBwYXJhbSB7c3RyaW5nfSBuZXdTZWN0aW9uVGV4dCAtIFRleHQgdGhhdCB3aWxsIGJlIGFkZGVkIGluIGEgbmV3IHNlY3Rpb24gb24gdGhlIHBhZ2Ugd2hlbiBgbmV3U2VjdGlvbigpYCBpcyBjYWxsZWQgKi9cblx0XHR0aGlzLnNldE5ld1NlY3Rpb25UZXh0ID0gKG5ld1NlY3Rpb25UZXh0KSA9PiB7XG5cdFx0XHRjdHguZWRpdE1vZGUgPSAnbmV3Jztcblx0XHRcdGN0eC5uZXdTZWN0aW9uVGV4dCA9IG5ld1NlY3Rpb25UZXh0O1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IG5ld1NlY3Rpb25UaXRsZSAtIFRpdGxlIGZvciB0aGUgbmV3IHNlY3Rpb24gY3JlYXRlZCB3aGVuIGBuZXdTZWN0aW9uKClgIGlzIGNhbGxlZFxuXHRcdCAqIElmIG1pc3NpbmcsIGBjdHguZWRpdFN1bW1hcnlgIHdpbGwgYmUgdXNlZC4gSXNzdWVzIG1heSBvY2N1ciBpZiBhIHN1YnN0aXR1dGVkIHRlbXBsYXRlIGlzIHVzZWQuXG5cdFx0ICovXG5cdFx0dGhpcy5zZXROZXdTZWN0aW9uVGl0bGUgPSAobmV3U2VjdGlvblRpdGxlKSA9PiB7XG5cdFx0XHRjdHguZWRpdE1vZGUgPSAnbmV3Jztcblx0XHRcdGN0eC5uZXdTZWN0aW9uVGl0bGUgPSBuZXdTZWN0aW9uVGl0bGU7XG5cdFx0fTtcblx0XHQvLyBFZGl0LXJlbGF0ZWQgc2V0dGVyIG1ldGhvZHM6XG5cdFx0LyoqXG5cdFx0ICogU2V0IHRoZSBlZGl0IHN1bW1hcnkgdGhhdCB3aWxsIGJlIHVzZWQgd2hlbiBgc2F2ZSgpYCBpcyBjYWxsZWQuXG5cdFx0ICogVW5uZWNlc3NhcnkgaWYgZWRpdE1vZGUgaXMgJ25ldycgYW5kIG5ld1NlY3Rpb25UaXRsZSBpcyBwcm92aWRlZC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBzdW1tYXJ5XG5cdFx0ICovXG5cdFx0dGhpcy5zZXRFZGl0U3VtbWFyeSA9IChzdW1tYXJ5KSA9PiB7XG5cdFx0XHRjdHguZWRpdFN1bW1hcnkgPSBzdW1tYXJ5O1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogU2V0IGFueSBjdXN0b20gdGFnKHMpIHRvIGJlIGFwcGxpZWQgdG8gdGhlIEFQSSBhY3Rpb24uXG5cdFx0ICogQSBudW1iZXIgb2YgYWN0aW9ucyBkb24ndCBzdXBwb3J0IGl0LCBtb3N0IG5vdGFibHkgd2F0Y2guXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gdGFncyAtIFN0cmluZyBvciBhcnJheSBvZiB0YWcocykuXG5cdFx0ICovXG5cdFx0dGhpcy5zZXRDaGFuZ2VUYWdzID0gKHRhZ3MpID0+IHtcblx0XHRcdGN0eC5jaGFuZ2VUYWdzID0gdGFncztcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBbY3JlYXRlT3B0aW9uPW51bGxdIC0gQ2FuIHRha2UgdGhlIGZvbGxvd2luZyBmb3VyIHZhbHVlczpcblx0XHQgKiAtIHJlY3JlYXRlOiBjcmVhdGUgdGhlIHBhZ2UgaWYgaXQgZG9lcyBub3QgZXhpc3QsIG9yIGVkaXQgaXQgaWYgaXQgZXhpc3RzLlxuXHRcdCAqIC0gY3JlYXRlb25seTogY3JlYXRlIHRoZSBwYWdlIGlmIGl0IGRvZXMgbm90IGV4aXN0LCBidXQgcmV0dXJuIGFuXG5cdFx0ICogZXJyb3IgaWYgaXQgYWxyZWFkeSBleGlzdHMuXG5cdFx0ICogLSBub2NyZWF0ZTogZG9uJ3QgY3JlYXRlIHRoZSBwYWdlLCBvbmx5IGVkaXQgaXQgaWYgaXQgYWxyZWFkeSBleGlzdHMuXG5cdFx0ICogLSBgbnVsbGA6IGNyZWF0ZSB0aGUgcGFnZSBpZiBpdCBkb2VzIG5vdCBleGlzdCwgdW5sZXNzIGl0IHdhcyBkZWxldGVkXG5cdFx0ICogaW4gdGhlIG1vbWVudCBiZXR3ZWVuIGxvYWRpbmcgdGhlIHBhZ2UgYW5kIHNhdmluZyB0aGUgZWRpdCAoZGVmYXVsdCkuXG5cdFx0ICpcblx0XHQgKi9cblx0XHR0aGlzLnNldENyZWF0ZU9wdGlvbiA9IChjcmVhdGVPcHRpb24pID0+IHtcblx0XHRcdGN0eC5jcmVhdGVPcHRpb24gPSBjcmVhdGVPcHRpb247XG5cdFx0fTtcblx0XHQvKiogQHBhcmFtIHtib29sZWFufSBtaW5vckVkaXQgLSBTZXQgdHJ1ZSB0byBtYXJrIHRoZSBlZGl0IGFzIGEgbWlub3IgZWRpdC4gKi9cblx0XHR0aGlzLnNldE1pbm9yRWRpdCA9IChtaW5vckVkaXQpID0+IHtcblx0XHRcdGN0eC5taW5vckVkaXQgPSBtaW5vckVkaXQ7XG5cdFx0fTtcblx0XHQvKiogQHBhcmFtIHtib29sZWFufSBib3RFZGl0IC0gU2V0IHRydWUgdG8gbWFyayB0aGUgZWRpdCBhcyBhIGJvdCBlZGl0ICovXG5cdFx0dGhpcy5zZXRCb3RFZGl0ID0gKGJvdEVkaXQpID0+IHtcblx0XHRcdGN0eC5ib3RFZGl0ID0gYm90RWRpdDtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBwYWdlU2VjdGlvbiAtIEludGVnZXIgc3BlY2lmeWluZyB0aGUgc2VjdGlvbiBudW1iZXIgdG8gbG9hZCBvciBzYXZlLlxuXHRcdCAqIElmIHNwZWNpZmllZCBhcyBgbnVsbGAsIHRoZSBlbnRpcmUgcGFnZSB3aWxsIGJlIHJldHJpZXZlZC5cblx0XHQgKi9cblx0XHR0aGlzLnNldFBhZ2VTZWN0aW9uID0gKHBhZ2VTZWN0aW9uKSA9PiB7XG5cdFx0XHRjdHgucGFnZVNlY3Rpb24gPSBwYWdlU2VjdGlvbjtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBtYXhDb25mbGljdFJldHJpZXMgLSBOdW1iZXIgb2YgcmV0cmllcyBmb3Igc2F2ZSBlcnJvcnMgaW52b2x2aW5nIGFuIGVkaXQgY29uZmxpY3Qgb3Jcblx0XHQgKiBsb3NzIG9mIHRva2VuLiBEZWZhdWx0OiAyLlxuXHRcdCAqL1xuXHRcdHRoaXMuc2V0TWF4Q29uZmxpY3RSZXRyaWVzID0gKG1heENvbmZsaWN0UmV0cmllcykgPT4ge1xuXHRcdFx0Y3R4Lm1heENvbmZsaWN0UmV0cmllcyA9IG1heENvbmZsaWN0UmV0cmllcztcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBtYXhSZXRyaWVzIC0gTnVtYmVyIG9mIHJldHJpZXMgZm9yIHNhdmUgZXJyb3JzIG5vdCBpbnZvbHZpbmcgYW4gZWRpdCBjb25mbGljdCBvclxuXHRcdCAqIGxvc3Mgb2YgdG9rZW4uIERlZmF1bHQ6IDIuXG5cdFx0ICovXG5cdFx0dGhpcy5zZXRNYXhSZXRyaWVzID0gKG1heFJldHJpZXMpID0+IHtcblx0XHRcdGN0eC5tYXhSZXRyaWVzID0gbWF4UmV0cmllcztcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIFNldCB3aGV0aGVyIGFuZCBob3cgdG8gd2F0Y2ggdGhlIHBhZ2UsIGluY2x1ZGluZyBzZXR0aW5nIGFuIGV4cGlyeS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbnxzdHJpbmd8TW9yZWJpdHMuZGF0ZXxEYXRlfSBbd2F0Y2hsaXN0T3B0aW9uPWZhbHNlXSAtXG5cdFx0ICogQmFzaWNhbGx5IGEgbWl4IG9mIE1XIEFQSSBhbmQgVHdpbmtsZXkgb3B0aW9ucyBhdmFpbGFibGUgcHJlLWV4cGlyeTpcblx0XHQgKiAtIGB0cnVlYHxgJ3llcydgfGAnd2F0Y2gnYDogcGFnZSB3aWxsIGJlIGFkZGVkIHRvIHRoZSB1c2VyJ3Ncblx0XHQgKiB3YXRjaGxpc3Qgd2hlbiB0aGUgYWN0aW9uIGlzIGNhbGxlZC4gRGVmYXVsdHMgdG8gYW4gaW5kZWZpbml0ZVxuXHRcdCAqIHdhdGNoIHVubGVzcyBgd2F0Y2hsaXN0RXhwaXJ5YCBpcyBwcm92aWRlZC5cblx0XHQgKiAtIGBmYWxzZWB8YCdubydgfGAnbm9jaGFuZ2UnYDogd2F0Y2hsaXN0IHN0YXR1cyBvZiB0aGUgcGFnZSAoaW5jbHVkaW5nIGV4cGlyeSkgd2lsbCBub3QgYmUgY2hhbmdlZC5cblx0XHQgKiAtIGAnZGVmYXVsdCdgfGAncHJlZmVyZW5jZXMnYDogd2F0Y2hsaXN0IHN0YXR1cyBvZiB0aGUgcGFnZSB3aWxsIGJlXG5cdFx0ICogc2V0IGJhc2VkIG9uIHRoZSB1c2VyJ3MgcHJlZmVyZW5jZSBzZXR0aW5ncyB3aGVuIHRoZSBhY3Rpb24gaXNcblx0XHQgKiBjYWxsZWQuIERlZmF1bHRzIHRvIGFuIGluZGVmaW5pdGUgd2F0Y2ggdW5sZXNzIGB3YXRjaGxpc3RFeHBpcnlgIGlzXG5cdFx0ICogcHJvdmlkZWQuXG5cdFx0ICogLSBgJ3Vud2F0Y2gnYDogZXhwbGljaXRseSB1bndhdGNoIHRoZSBwYWdlLlxuXHRcdCAqIC0gQW55IG90aGVyIGBzdHJpbmdgIG9yIGBudW1iZXJgLCBvciBhIGBNb3JlYml0cy5kYXRlYCBvciBgRGF0ZWBcblx0XHQgKiBvYmplY3Q6IHdhdGNoIHBhZ2UgdW50aWwgdGhlIHNwZWNpZmllZCB0aW1lLCBkZWZlcnJpbmcgdG9cblx0XHQgKiBgd2F0Y2hsaXN0RXhwaXJ5YCBpZiBwcm92aWRlZC5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ8TW9yZWJpdHMuZGF0ZXxEYXRlfSBbd2F0Y2hsaXN0RXhwaXJ5PWluZmluaXR5XSAtXG5cdFx0ICogQSBkYXRlLWxpa2Ugc3RyaW5nIG9yIG51bWJlciwgb3IgYSBkYXRlIG9iamVjdC4gIElmIGEgc3RyaW5nIG9yIG51bWJlcixcblx0XHQgKiBjYW4gYmUgcmVsYXRpdmUgKDIgd2Vla3MpIG9yIG90aGVyIHNpbWlsYXJseSBkYXRlLWxpa2UgKGkuZS4gTk9UIFwicG90YXRvXCIpOlxuXHRcdCAqIElTTyA4NjAxOiAyMDM4LTAxLTA5VDAzOjE0OjA3WlxuXHRcdCAqIE1lZGlhV2lraTogMjAzODAxMDkwMzE0MDdcblx0XHQgKiBVTklYOiAyMTQ3NDgzNjQ3XG5cdFx0ICogU1FMOiAyMDM4LTAxLTA5IDAzOjE0OjA3XG5cdFx0ICogQ2FuIGFsc28gYmUgYGluZmluaXR5YCBvciBpbmZpbml0eS1saWtlIChgaW5maW5pdGVgLCBgaW5kZWZpbml0ZWAsIGFuZCBgbmV2ZXJgKS5cblx0XHQgKiBTZWUge0BsaW5rIGh0dHBzOi8vcGhhYnJpY2F0b3Iud2lraW1lZGlhLm9yZy9zb3VyY2UvbWVkaWF3aWtpLWxpYnMtVGltZXN0YW1wL2Jyb3dzZS9tYXN0ZXIvc3JjL0NvbnZlcnRpYmxlVGltZXN0YW1wLnBocDs0ZTUzYjg1OWE5NTgwYzU1OTU4MDc4ZjQ2ZGQ0ZjNhNDRkMGZjYWEwJDU3LTEwOT9hcz1zb3VyY2UmYmxhbWU9b2ZmfVxuXHRcdCAqL1xuXHRcdHRoaXMuc2V0V2F0Y2hsaXN0ID0gKHdhdGNobGlzdE9wdGlvbiwgd2F0Y2hsaXN0RXhwaXJ5KSA9PiB7XG5cdFx0XHRpZiAod2F0Y2hsaXN0T3B0aW9uIGluc3RhbmNlb2YgTW9yZWJpdHMuZGF0ZSB8fCB3YXRjaGxpc3RPcHRpb24gaW5zdGFuY2VvZiBEYXRlKSB7XG5cdFx0XHRcdHdhdGNobGlzdE9wdGlvbiA9IHdhdGNobGlzdE9wdGlvbi50b0lTT1N0cmluZygpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHdhdGNobGlzdEV4cGlyeSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHdhdGNobGlzdEV4cGlyeSA9ICdpbmZpbml0eSc7XG5cdFx0XHR9IGVsc2UgaWYgKHdhdGNobGlzdEV4cGlyeSBpbnN0YW5jZW9mIE1vcmViaXRzLmRhdGUgfHwgd2F0Y2hsaXN0RXhwaXJ5IGluc3RhbmNlb2YgRGF0ZSkge1xuXHRcdFx0XHR3YXRjaGxpc3RFeHBpcnkgPSB3YXRjaGxpc3RFeHBpcnkudG9JU09TdHJpbmcoKTtcblx0XHRcdH1cblx0XHRcdHN3aXRjaCAod2F0Y2hsaXN0T3B0aW9uKSB7XG5cdFx0XHRcdGNhc2UgJ25vY2hhbmdlJzpcblx0XHRcdFx0Y2FzZSAnbm8nOlxuXHRcdFx0XHRjYXNlIGZhbHNlOlxuXHRcdFx0XHRjYXNlIHVuZGVmaW5lZDpcblx0XHRcdFx0XHRjdHgud2F0Y2hsaXN0T3B0aW9uID0gJ25vY2hhbmdlJztcblx0XHRcdFx0XHQvLyBUaGUgTVcgQVBJIGFsbG93cyBmb3IgY2hhbmdpbmcgZXhwaXJ5IHdpdGggbm9jaGFuZ2UgKGFzIFwibm9jaGFuZ2VcIiByZWZlcnMgdG8gdGhlIGJpbmFyeSBzdGF0dXMpLFxuXHRcdFx0XHRcdC8vIGJ1dCBieSBrZWVwaW5nIHRoaXMgbnVsbCBpdCB3aWxsIGRlZmF1bHQgdG8gYW55IGV4aXN0aW5nIGV4cGlyeSwgZW5zdXJlIHRoZXJlIGlzIGFjdHVhbGx5IFwibm8gY2hhbmdlLlwiXG5cdFx0XHRcdFx0Y3R4LndhdGNobGlzdEV4cGlyeSA9IG51bGw7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3Vud2F0Y2gnOlxuXHRcdFx0XHRcdC8vIGV4cGlyeSB1bmltcG9ydGFudFxuXHRcdFx0XHRcdGN0eC53YXRjaGxpc3RPcHRpb24gPSAndW53YXRjaCc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3ByZWZlcmVuY2VzJzpcblx0XHRcdFx0Y2FzZSAnZGVmYXVsdCc6XG5cdFx0XHRcdFx0Y3R4LndhdGNobGlzdE9wdGlvbiA9ICdwcmVmZXJlbmNlcyc7XG5cdFx0XHRcdFx0Ly8gVGhlIEFQSSBhbGxvd3MgYW4gZXhwaXJ5IGhlcmUsIGJ1dCB0aGVyZSBpcyBhcyBvZiB5ZXQgKFQyNjU3MTYpXG5cdFx0XHRcdFx0Ly8gbm8gZXhwaXJ5IHByZWZlcmVuY2Ugb3B0aW9uLCBzbyBpdCdzIGEgYml0IGRldm9pZCBvZiBjb250ZXh0LlxuXHRcdFx0XHRcdGN0eC53YXRjaGxpc3RFeHBpcnkgPSB3YXRjaGxpc3RFeHBpcnk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3dhdGNoJzpcblx0XHRcdFx0Y2FzZSAneWVzJzpcblx0XHRcdFx0Y2FzZSB0cnVlOlxuXHRcdFx0XHRcdGN0eC53YXRjaGxpc3RPcHRpb24gPSAnd2F0Y2gnO1xuXHRcdFx0XHRcdGN0eC53YXRjaGxpc3RFeHBpcnkgPSB3YXRjaGxpc3RFeHBpcnk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0Ly8gTm90IHJlYWxseSBhIFwiZGVmYXVsdFwiIHBlciBzZSBidXQgY2F0Y2hlcyBcImFueSBvdGhlciBzdHJpbmdcIlxuXHRcdFx0XHRcdGN0eC53YXRjaGxpc3RPcHRpb24gPSAnd2F0Y2gnO1xuXHRcdFx0XHRcdGN0eC53YXRjaGxpc3RFeHBpcnkgPSB3YXRjaGxpc3RPcHRpb247XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBTZXQgYSB3YXRjaGxpc3QgZXhwaXJ5LiBzZXRXYXRjaGxpc3QgY2FuIG1vc3RseSBoYW5kbGUgdGhpcyBieVxuXHRcdCAqIGl0c2VsZiwgc28gdGhpcyBpcyBoZXJlIGxhcmdlbHkgZm9yIGNvbXBsZXRlbmVzcyBhbmQgY29tcGF0aWJpbGl0eVxuXHRcdCAqIHdpdGggdGhlIGZ1bGwgc3VpdGUgb2Ygb3B0aW9ucy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcnxNb3JlYml0cy5kYXRlfERhdGV9IFt3YXRjaGxpc3RFeHBpcnk9aW5maW5pdHldIC1cblx0XHQgKiBBIGRhdGUtbGlrZSBzdHJpbmcgb3IgbnVtYmVyLCBvciBhIGRhdGUgb2JqZWN0LiAgSWYgYSBzdHJpbmcgb3IgbnVtYmVyLFxuXHRcdCAqIGNhbiBiZSByZWxhdGl2ZSAoMiB3ZWVrcykgb3Igb3RoZXIgc2ltaWxhcmx5IGRhdGUtbGlrZSAoaS5lLiBOT1QgXCJwb3RhdG9cIik6XG5cdFx0ICogSVNPIDg2MDE6IDIwMzgtMDEtMDlUMDM6MTQ6MDdaXG5cdFx0ICogTWVkaWFXaWtpOiAyMDM4MDEwOTAzMTQwN1xuXHRcdCAqIFVOSVg6IDIxNDc0ODM2NDdcblx0XHQgKiBTUUw6IDIwMzgtMDEtMDkgMDM6MTQ6MDdcblx0XHQgKiBDYW4gYWxzbyBiZSBgaW5maW5pdHlgIG9yIGluZmluaXR5LWxpa2UgKGBpbmZpbml0ZWAsIGBpbmRlZmluaXRlYCwgYW5kIGBuZXZlcmApLlxuXHRcdCAqIFNlZSB7QGxpbmsgaHR0cHM6Ly9waGFicmljYXRvci53aWtpbWVkaWEub3JnL3NvdXJjZS9tZWRpYXdpa2ktbGlicy1UaW1lc3RhbXAvYnJvd3NlL21hc3Rlci9zcmMvQ29udmVydGlibGVUaW1lc3RhbXAucGhwOzRlNTNiODU5YTk1ODBjNTU5NTgwNzhmNDZkZDRmM2E0NGQwZmNhYTAkNTctMTA5P2FzPXNvdXJjZSZibGFtZT1vZmZ9XG5cdFx0ICovXG5cdFx0dGhpcy5zZXRXYXRjaGxpc3RFeHBpcnkgPSAod2F0Y2hsaXN0RXhwaXJ5KSA9PiB7XG5cdFx0XHRpZiAod2F0Y2hsaXN0RXhwaXJ5ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0d2F0Y2hsaXN0RXhwaXJ5ID0gJ2luZmluaXR5Jztcblx0XHRcdH0gZWxzZSBpZiAod2F0Y2hsaXN0RXhwaXJ5IGluc3RhbmNlb2YgTW9yZWJpdHMuZGF0ZSB8fCB3YXRjaGxpc3RFeHBpcnkgaW5zdGFuY2VvZiBEYXRlKSB7XG5cdFx0XHRcdHdhdGNobGlzdEV4cGlyeSA9IHdhdGNobGlzdEV4cGlyeS50b0lTT1N0cmluZygpO1xuXHRcdFx0fVxuXHRcdFx0Y3R4LndhdGNobGlzdEV4cGlyeSA9IHdhdGNobGlzdEV4cGlyeTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEBkZXByZWNhdGVkIEFzIG9mIERlY2VtYmVyIDIwMjAsIHVzZSBzZXRXYXRjaGxpc3QuXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBbd2F0Y2hsaXN0T3B0aW9uPWZhbHNlXSAtXG5cdFx0ICogLSBgVHJ1ZWA6IHBhZ2Ugd2F0Y2hsaXN0IHN0YXR1cyB3aWxsIGJlIHNldCBiYXNlZCBvbiB0aGUgdXNlcidzXG5cdFx0ICogcHJlZmVyZW5jZSBzZXR0aW5ncyB3aGVuIGBzYXZlKClgIGlzIGNhbGxlZC5cblx0XHQgKiAtIGBGYWxzZWA6IHdhdGNobGlzdCBzdGF0dXMgb2YgdGhlIHBhZ2Ugd2lsbCBub3QgYmUgY2hhbmdlZC5cblx0XHQgKlxuXHRcdCAqIFdhdGNobGlzdCBub3Rlczpcblx0XHQgKiAxLiBUaGUgTWVkaWFXaWtpIEFQSSB2YWx1ZSBvZiAndW53YXRjaCcsIHdoaWNoIGV4cGxpY2l0bHkgcmVtb3Zlc1xuXHRcdCAqIHRoZSBwYWdlIGZyb20gdGhlIHVzZXIncyB3YXRjaGxpc3QsIGlzIG5vdCB1c2VkLlxuXHRcdCAqIDIuIElmIGJvdGggYHNldFdhdGNobGlzdCgpYCBhbmQgYHNldFdhdGNobGlzdEZyb21QcmVmZXJlbmNlcygpYCBhcmVcblx0XHQgKiBjYWxsZWQsIHRoZSBsYXN0IGNhbGwgdGFrZXMgcHJpb3JpdHkuXG5cdFx0ICogMy4gVHdpbmtsZSBtb2R1bGVzIHNob3VsZCB1c2UgdGhlIGFwcHJvcHJpYXRlIHByZWZlcmVuY2UgdG8gc2V0IHRoZSB3YXRjaGxpc3Qgb3B0aW9ucy5cblx0XHQgKiA0LiBNb3N0IFR3aW5rbGUgbW9kdWxlcyB1c2UgYHNldFdhdGNobGlzdCgpYC4gYHNldFdhdGNobGlzdEZyb21QcmVmZXJlbmNlcygpYFxuXHRcdCAqIGlzIG9ubHkgbmVlZGVkIGZvciB0aGUgZmV3IFR3aW5rbGUgd2F0Y2hsaXN0IHByZWZlcmVuY2VzIHRoYXRcblx0XHQgKiBhY2NlcHQgYSBzdHJpbmcgdmFsdWUgb2YgYGRlZmF1bHRgLlxuXHRcdCAqL1xuXHRcdHRoaXMuc2V0V2F0Y2hsaXN0RnJvbVByZWZlcmVuY2VzID0gKHdhdGNobGlzdE9wdGlvbikgPT4ge1xuXHRcdFx0Y29uc29sZS53YXJuKFxuXHRcdFx0XHQnW01vcmViaXRzXSBOT1RFOiBNb3JlYml0cy53aWtpLnBhZ2Uuc2V0V2F0Y2hsaXN0RnJvbVByZWZlcmVuY2VzIHdhcyBkZXByZWNhdGVkIERlY2VtYmVyIDIwMjAsIHBsZWFzZSB1c2Ugc2V0V2F0Y2hsaXN0J1xuXHRcdFx0KTtcblx0XHRcdGlmICh3YXRjaGxpc3RPcHRpb24pIHtcblx0XHRcdFx0Y3R4LndhdGNobGlzdE9wdGlvbiA9ICdwcmVmZXJlbmNlcyc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjdHgud2F0Y2hsaXN0T3B0aW9uID0gJ25vY2hhbmdlJztcblx0XHRcdH1cblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZvbGxvd1JlZGlyZWN0PWZhbHNlXSAtXG5cdFx0ICogLSBgdHJ1ZWA6IGEgbWF4aW11bSBvZiBvbmUgcmVkaXJlY3Qgd2lsbCBiZSBmb2xsb3dlZC4gSW4gdGhlIGV2ZW50XG5cdFx0ICogb2YgYSByZWRpcmVjdCwgYSBtZXNzYWdlIGlzIGRpc3BsYXllZCB0byB0aGUgdXNlciBhbmQgdGhlIHJlZGlyZWN0XG5cdFx0ICogdGFyZ2V0IGNhbiBiZSByZXRyaWV2ZWQgd2l0aCBnZXRQYWdlTmFtZSgpLlxuXHRcdCAqIC0gYGZhbHNlYDogKGRlZmF1bHQpIHRoZSByZXF1ZXN0ZWQgcGFnZU5hbWUgd2lsbCBiZSB1c2VkIHdpdGhvdXQgcmVnYXJkIHRvIGFueSByZWRpcmVjdC5cblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtmb2xsb3dDcm9zc05zUmVkaXJlY3Q9dHJ1ZV0gLSBOb3QgYXBwbGljYWJsZSBpZiBgZm9sbG93UmVkaXJlY3RgIGlzIG5vdCBzZXQgdHJ1ZS5cblx0XHQgKiAtIGB0cnVlYDogKGRlZmF1bHQpIGZvbGxvdyByZWRpcmVjdCBldmVuIGlmIGl0IGlzIGEgY3Jvc3MtbmFtZXNwYWNlIHJlZGlyZWN0XG5cdFx0ICogLSBgZmFsc2VgOiBkb24ndCBmb2xsb3cgcmVkaXJlY3QgaWYgaXQgaXMgY3Jvc3MtbmFtZXNwYWNlLCBlZGl0IHRoZSByZWRpcmVjdCBpdHNlbGYuXG5cdFx0ICovXG5cdFx0dGhpcy5zZXRGb2xsb3dSZWRpcmVjdCA9IChmb2xsb3dSZWRpcmVjdCwgZm9sbG93Q3Jvc3NOc1JlZGlyZWN0KSA9PiB7XG5cdFx0XHRpZiAoY3R4LnBhZ2VMb2FkZWQpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdFx0J0ludGVybmFsIGVycm9yOiBjYW5ub3QgY2hhbmdlIHJlZGlyZWN0IHNldHRpbmcgYWZ0ZXIgdGhlIHBhZ2UgaGFzIGJlZW4gbG9hZGVkISdcblx0XHRcdFx0KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y3R4LmZvbGxvd1JlZGlyZWN0ID0gZm9sbG93UmVkaXJlY3Q7XG5cdFx0XHRjdHguZm9sbG93Q3Jvc3NOc1JlZGlyZWN0ID1cblx0XHRcdFx0Zm9sbG93Q3Jvc3NOc1JlZGlyZWN0ID09PSB1bmRlZmluZWQgPyBjdHguZm9sbG93Q3Jvc3NOc1JlZGlyZWN0IDogZm9sbG93Q3Jvc3NOc1JlZGlyZWN0O1xuXHRcdH07XG5cdFx0Ly8gbG9va3VwLWNyZWF0aW9uIHNldHRlciBmdW5jdGlvblxuXHRcdC8qKlxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gZmxhZyAtIElmIHNldCB0cnVlLCB0aGUgYXV0aG9yIGFuZCB0aW1lc3RhbXAgb2Zcblx0XHQgKiB0aGUgZmlyc3Qgbm9uLXJlZGlyZWN0IHZlcnNpb24gb2YgdGhlIHBhZ2UgaXMgcmV0cmlldmVkLlxuXHRcdCAqXG5cdFx0ICogV2FybmluZzpcblx0XHQgKiAxLiBJZiB0aGVyZSBhcmUgbm8gcmV2aXNpb25zIGFtb25nIHRoZSBmaXJzdCA1MCB0aGF0IGFyZVxuXHRcdCAqIG5vbi1yZWRpcmVjdHMsIG9yIGlmIHRoZXJlIGFyZSBsZXNzIDUwIHJldmlzaW9ucyBhbmQgYWxsIGFyZVxuXHRcdCAqIHJlZGlyZWN0cywgdGhlIG9yaWdpbmFsIGNyZWF0aW9uIGlzIHJldHJpZXZlZC5cblx0XHQgKiAyLiBSZXZpc2lvbnMgdGhhdCB0aGUgdXNlciBpcyBub3QgcHJpdmlsZWdlZCB0byBhY2Nlc3Ncblx0XHQgKiAocmV2ZGVsZWQvc3VwcHJlc3NlZCkgd2lsbCBiZSB0cmVhdGVkIGFzIG5vbi1yZWRpcmVjdHMuXG5cdFx0ICogMy4gTXVzdCBub3QgYmUgdXNlZCB3aGVuIHRoZSBwYWdlIGhhcyBhIG5vbi13aWtpdGV4dCBjb250ZW50bW9kZWxcblx0XHQgKiBzdWNoIGFzIE1vZHVsZXNwYWNlIEx1YSBvciB1c2VyIEphdmFTY3JpcHQvQ1NTLlxuXHRcdCAqL1xuXHRcdHRoaXMuc2V0TG9va3VwTm9uUmVkaXJlY3RDcmVhdG9yID0gKGZsYWcpID0+IHtcblx0XHRcdGN0eC5sb29rdXBOb25SZWRpcmVjdENyZWF0b3IgPSBmbGFnO1xuXHRcdH07XG5cdFx0Ly8gTW92ZS1yZWxhdGVkIHNldHRlciBmdW5jdGlvbnNcblx0XHQvKiogQHBhcmFtIHtzdHJpbmd9IGRlc3RpbmF0aW9uICovXG5cdFx0dGhpcy5zZXRNb3ZlRGVzdGluYXRpb24gPSAoZGVzdGluYXRpb24pID0+IHtcblx0XHRcdGN0eC5tb3ZlRGVzdGluYXRpb24gPSBkZXN0aW5hdGlvbjtcblx0XHR9O1xuXHRcdC8qKiBAcGFyYW0ge2Jvb2xlYW59IGZsYWcgKi9cblx0XHR0aGlzLnNldE1vdmVUYWxrUGFnZSA9IChmbGFnKSA9PiB7XG5cdFx0XHRjdHgubW92ZVRhbGtQYWdlID0gISFmbGFnO1xuXHRcdH07XG5cdFx0LyoqIEBwYXJhbSB7Ym9vbGVhbn0gZmxhZyAqL1xuXHRcdHRoaXMuc2V0TW92ZVN1YnBhZ2VzID0gKGZsYWcpID0+IHtcblx0XHRcdGN0eC5tb3ZlU3VicGFnZXMgPSAhIWZsYWc7XG5cdFx0fTtcblx0XHQvKiogQHBhcmFtIHtib29sZWFufSBmbGFnICovXG5cdFx0dGhpcy5zZXRNb3ZlU3VwcHJlc3NSZWRpcmVjdCA9IChmbGFnKSA9PiB7XG5cdFx0XHRjdHgubW92ZVN1cHByZXNzUmVkaXJlY3QgPSAhIWZsYWc7XG5cdFx0fTtcblx0XHQvLyBQcm90ZWN0LXJlbGF0ZWQgc2V0dGVyIGZ1bmN0aW9uc1xuXHRcdC8qKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBsZXZlbCAtIFRoZSByaWdodCByZXF1aXJlZCBmb3IgdGhlIHNwZWNpZmljIGFjdGlvblxuXHRcdCAqIGUuZy4gc3lzb3AsIHRlbXBsYXRlZWRpdG9yLCBhdXRvY29uZmlybWVkXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IFtleHBpcnk9aW5maW5pdHldXG5cdFx0ICovXG5cdFx0dGhpcy5zZXRFZGl0UHJvdGVjdGlvbiA9IChsZXZlbCwgZXhwaXJ5KSA9PiB7XG5cdFx0XHRjdHgucHJvdGVjdEVkaXQgPSB7XG5cdFx0XHRcdGxldmVsLFxuXHRcdFx0XHRleHBpcnk6IGV4cGlyeSB8fCAnaW5maW5pdHknLFxuXHRcdFx0fTtcblx0XHR9O1xuXHRcdHRoaXMuc2V0TW92ZVByb3RlY3Rpb24gPSAobGV2ZWwsIGV4cGlyeSkgPT4ge1xuXHRcdFx0Y3R4LnByb3RlY3RNb3ZlID0ge1xuXHRcdFx0XHRsZXZlbCxcblx0XHRcdFx0ZXhwaXJ5OiBleHBpcnkgfHwgJ2luZmluaXR5Jyxcblx0XHRcdH07XG5cdFx0fTtcblx0XHR0aGlzLnNldENyZWF0ZVByb3RlY3Rpb24gPSAobGV2ZWwsIGV4cGlyeSkgPT4ge1xuXHRcdFx0Y3R4LnByb3RlY3RDcmVhdGUgPSB7XG5cdFx0XHRcdGxldmVsLFxuXHRcdFx0XHRleHBpcnk6IGV4cGlyeSB8fCAnaW5maW5pdHknLFxuXHRcdFx0fTtcblx0XHR9O1xuXHRcdHRoaXMuc2V0Q2FzY2FkaW5nUHJvdGVjdGlvbiA9IChmbGFnKSA9PiB7XG5cdFx0XHRjdHgucHJvdGVjdENhc2NhZGUgPSAhIWZsYWc7XG5cdFx0fTtcblx0XHR0aGlzLnN1cHByZXNzUHJvdGVjdFdhcm5pbmcgPSAoKSA9PiB7XG5cdFx0XHRjdHguc3VwcHJlc3NQcm90ZWN0V2FybmluZyA9IHRydWU7XG5cdFx0fTtcblx0XHQvLyBSZXZlcnQtcmVsYXRlZCBnZXR0ZXJzL3NldHRlcnM6XG5cdFx0dGhpcy5zZXRPbGRJRCA9IChvbGRJRCkgPT4ge1xuXHRcdFx0Y3R4LnJldmVydE9sZElEID0gb2xkSUQ7XG5cdFx0fTtcblx0XHQvKiogQHJldHVybnMge3N0cmluZ30gVGhlIGN1cnJlbnQgcmV2aXNpb24gSUQgb2YgdGhlIHBhZ2UgKi9cblx0XHR0aGlzLmdldEN1cnJlbnRJRCA9ICgpID0+IHtcblx0XHRcdHJldHVybiBjdHgucmV2ZXJ0Q3VySUQ7XG5cdFx0fTtcblx0XHQvKiogQHJldHVybnMge3N0cmluZ30gTGFzdCBlZGl0b3Igb2YgdGhlIHBhZ2UgKi9cblx0XHR0aGlzLmdldFJldmlzaW9uVXNlciA9ICgpID0+IHtcblx0XHRcdHJldHVybiBjdHgucmV2ZXJ0VXNlcjtcblx0XHR9O1xuXHRcdC8qKiBAcmV0dXJucyB7c3RyaW5nfSBJU08gODYwMSB0aW1lc3RhbXAgYXQgd2hpY2ggdGhlIHBhZ2Ugd2FzIGxhc3QgZWRpdGVkLiAqL1xuXHRcdHRoaXMuZ2V0TGFzdEVkaXRUaW1lID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGN0eC5sYXN0RWRpdFRpbWU7XG5cdFx0fTtcblx0XHQvLyBNaXNjZWxsYW5lb3VzIGdldHRlcnMvc2V0dGVyczpcblx0XHQvKipcblx0XHQgKiBEZWZpbmUgYW4gb2JqZWN0IGZvciB1c2UgaW4gYSBjYWxsYmFjayBmdW5jdGlvbi5cblx0XHQgKlxuXHRcdCAqIGBjYWxsYmFja1BhcmFtZXRlcnNgIGlzIGZvciB1c2UgYnkgdGhlIGNhbGxlciBvbmx5LiBUaGUgcGFyYW1ldGVyc1xuXHRcdCAqIGFsbG93IGEgY2FsbGVyIHRvIHBhc3MgdGhlIHByb3BlciBjb250ZXh0IGludG8gaXRzIGNhbGxiYWNrXG5cdFx0ICogZnVuY3Rpb24uICBDYWxsZXJzIG11c3QgZW5zdXJlIHRoYXQgYW55IGNoYW5nZXMgdG8gdGhlXG5cdFx0ICogY2FsbGJhY2tQYXJhbWV0ZXJzIG9iamVjdCB3aXRoaW4gYSBgbG9hZCgpYCBjYWxsYmFjayBzdGlsbCBwZXJtaXQgYVxuXHRcdCAqIHByb3BlciByZS1lbnRyeSBpbnRvIHRoZSBgbG9hZCgpYCBjYWxsYmFjayBpZiBhbiBlZGl0IGNvbmZsaWN0IGlzXG5cdFx0ICogZGV0ZWN0ZWQgdXBvbiBjYWxsaW5nIGBzYXZlKClgLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtPYmplY3R9IGNhbGxiYWNrUGFyYW1ldGVyc1xuXHRcdCAqL1xuXHRcdHRoaXMuc2V0Q2FsbGJhY2tQYXJhbWV0ZXJzID0gKGNhbGxiYWNrUGFyYW1ldGVycykgPT4ge1xuXHRcdFx0Y3R4LmNhbGxiYWNrUGFyYW1ldGVycyA9IGNhbGxiYWNrUGFyYW1ldGVycztcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEByZXR1cm5zIHtPYmplY3R9IC0gVGhlIG9iamVjdCBwcmV2aW91c2x5IHNldCBieSBgc2V0Q2FsbGJhY2tQYXJhbWV0ZXJzKClgLlxuXHRcdCAqL1xuXHRcdHRoaXMuZ2V0Q2FsbGJhY2tQYXJhbWV0ZXJzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGN0eC5jYWxsYmFja1BhcmFtZXRlcnM7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBAcGFyYW0ge01vcmViaXRzLnN0YXR1c30gc3RhdHVzRWxlbWVudFxuXHRcdCAqL1xuXHRcdHRoaXMuc2V0U3RhdHVzRWxlbWVudCA9IChzdGF0dXNFbGVtZW50KSA9PiB7XG5cdFx0XHRjdHguc3RhdHVzRWxlbWVudCA9IHN0YXR1c0VsZW1lbnQ7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc3RhdHVzfSBTdGF0dXMgZWxlbWVudCBjcmVhdGVkIGJ5IHRoZSBjb25zdHJ1Y3Rvci5cblx0XHQgKi9cblx0XHR0aGlzLmdldFN0YXR1c0VsZW1lbnQgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gY3R4LnN0YXR1c0VsZW1lbnQ7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgcGFnZSBleGlzdGVkIG9uIHRoZSB3aWtpIHdoZW4gaXQgd2FzIGxhc3QgbG9hZGVkLlxuXHRcdCAqL1xuXHRcdHRoaXMuZXhpc3RzID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGN0eC5wYWdlRXhpc3RzO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHJldHVybnMge3N0cmluZ30gUGFnZSBJRCBvZiB0aGUgcGFnZSBsb2FkZWQuIDAgaWYgdGhlIHBhZ2UgZG9lc24ndFxuXHRcdCAqIGV4aXN0LlxuXHRcdCAqL1xuXHRcdHRoaXMuZ2V0UGFnZUlEID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGN0eC5wYWdlSUQ7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfSAtIENvbnRlbnQgbW9kZWwgb2YgdGhlIHBhZ2UuICBQb3NzaWJsZSB2YWx1ZXNcblx0XHQgKiBpbmNsdWRlIChidXQgbWF5IG5vdCBiZSBsaW1pdGVkIHRvKTogYHdpa2l0ZXh0YCwgYGphdmFzY3JpcHRgLFxuXHRcdCAqIGBjc3NgLCBganNvbmAsIGBTY3JpYnVudG9gLCBgc2FuaXRpemVkLWNzc2AsIGBNYXNzTWVzc2FnZUxpc3RDb250ZW50YC5cblx0XHQgKiBBbHNvIGdldHRhYmxlIHZpYSBgbXcuY29uZmlnLmdldCgnd2dQYWdlQ29udGVudE1vZGVsJylgLlxuXHRcdCAqL1xuXHRcdHRoaXMuZ2V0Q29udGVudE1vZGVsID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGN0eC5jb250ZW50TW9kZWw7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbnxzdHJpbmd9IC0gV2F0Y2hlZCBzdGF0dXMgb2YgdGhlIHBhZ2UuIEJvb2xlYW5cblx0XHQgKiB1bmxlc3MgaXQncyBiZWluZyB3YXRjaGVkIHRlbXBvcmFyaWx5LCBpbiB3aGljaCBjYXNlIHJldHVybnMgdGhlXG5cdFx0ICogZXhwaXJ5IHN0cmluZy5cblx0XHQgKi9cblx0XHR0aGlzLmdldFdhdGNoZWQgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gY3R4LndhdGNoZWQ7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfSBJU08gODYwMSB0aW1lc3RhbXAgYXQgd2hpY2ggdGhlIHBhZ2Ugd2FzIGxhc3QgbG9hZGVkLlxuXHRcdCAqL1xuXHRcdHRoaXMuZ2V0TG9hZFRpbWUgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gY3R4LmxvYWRUaW1lO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHJldHVybnMge3N0cmluZ30gVGhlIHVzZXIgd2hvIGNyZWF0ZWQgdGhlIHBhZ2UgZm9sbG93aW5nIGBsb29rdXBDcmVhdGlvbigpYC5cblx0XHQgKi9cblx0XHR0aGlzLmdldENyZWF0b3IgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gY3R4LmNyZWF0b3I7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgSVNPU3RyaW5nIHRpbWVzdGFtcCBvZiBwYWdlIGNyZWF0aW9uIGZvbGxvd2luZyBgbG9va3VwQ3JlYXRpb24oKWAuXG5cdFx0ICovXG5cdFx0dGhpcy5nZXRDcmVhdGlvblRpbWVzdGFtcCA9ICgpID0+IHtcblx0XHRcdHJldHVybiBjdHgudGltZXN0YW1wO1xuXHRcdH07XG5cdFx0LyoqIEByZXR1cm5zIHtib29sZWFufSB3aGV0aGVyIG9yIG5vdCB5b3UgY2FuIGVkaXQgdGhlIHBhZ2UgKi9cblx0XHR0aGlzLmNhbkVkaXQgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gISFjdHgudGVzdEFjdGlvbnMgJiYgY3R4LnRlc3RBY3Rpb25zLmluY2x1ZGVzKCdlZGl0Jyk7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBSZXRyaWV2ZXMgdGhlIHVzZXJuYW1lIG9mIHRoZSB1c2VyIHdobyBjcmVhdGVkIHRoZSBwYWdlIGFzIHdlbGwgYXNcblx0XHQgKiB0aGUgdGltZXN0YW1wIG9mIGNyZWF0aW9uLiAgVGhlIHVzZXJuYW1lIGNhbiBiZSByZXRyaWV2ZWQgdXNpbmcgdGhlXG5cdFx0ICogYGdldENyZWF0b3IoKWAgZnVuY3Rpb247IHRoZSB0aW1lc3RhbXAgY2FuIGJlIHJldHJpZXZlZCB1c2luZyB0aGVcblx0XHQgKiBgZ2V0Q3JlYXRpb25UaW1lc3RhbXAoKWAgZnVuY3Rpb24uXG5cdFx0ICogUHJpb3IgdG8gSnVuZSAyMDE5IGtub3duIGFzIGBsb29rdXBDcmVhdG9yKClgLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gb25TdWNjZXNzIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIHdoZW5cblx0XHQgKiB0aGUgdXNlcm5hbWUgYW5kIHRpbWVzdGFtcCBhcmUgZm91bmQgd2l0aGluIHRoZSBjYWxsYmFjay5cblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25GYWlsdXJlXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aGVuXG5cdFx0ICogdGhlIGxvb2t1cCBmYWlsc1xuXHRcdCAqL1xuXHRcdHRoaXMubG9va3VwQ3JlYXRpb24gPSBmdW5jdGlvbiAob25TdWNjZXNzLCBvbkZhaWx1cmUpIHtcblx0XHRcdGN0eC5vbkxvb2t1cENyZWF0aW9uU3VjY2VzcyA9IG9uU3VjY2Vzcztcblx0XHRcdGN0eC5vbkxvb2t1cENyZWF0aW9uRmFpbHVyZSA9IG9uRmFpbHVyZSB8fCBlbXB0eUZ1bmN0aW9uO1xuXHRcdFx0aWYgKCFvblN1Y2Nlc3MpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoJ0ludGVybmFsIGVycm9yOiBubyBvblN1Y2Nlc3MgY2FsbGJhY2sgcHJvdmlkZWQgdG8gbG9va3VwQ3JlYXRpb24oKSEnKTtcblx0XHRcdFx0Y3R4Lm9uTG9va3VwQ3JlYXRpb25GYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBxdWVyeSA9IHtcblx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRwcm9wOiAncmV2aXNpb25zJyxcblx0XHRcdFx0dGl0bGVzOiBjdHgucGFnZU5hbWUsXG5cdFx0XHRcdHJ2bGltaXQ6IDEsXG5cdFx0XHRcdHJ2cHJvcDogJ3VzZXJ8dGltZXN0YW1wJyxcblx0XHRcdFx0cnZkaXI6ICduZXdlcicsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0fTtcblx0XHRcdC8vIE9ubHkgdGhlIHdpa2l0ZXh0IGNvbnRlbnQgbW9kZWwgY2FuIHJlbGlhYmx5IGhhbmRsZVxuXHRcdFx0Ly8gcnZzZWN0aW9uLCBvdGhlcnMgcmV0dXJuIGFuIGVycm9yIHdoZW4gcGFpcmVkIHdpdGggdGhlXG5cdFx0XHQvLyBjb250ZW50IHJ2cHJvcC4gUmVsYXRlZGx5LCBub24td2lraXRleHQgbW9kZWxzIGRvbid0XG5cdFx0XHQvLyB1bmRlcnN0YW5kIHRoZSAjUkVESVJFQ1QgY29uY2VwdCwgc28gd2Ugc2hvdWxkbid0IGF0dGVtcHRcblx0XHRcdC8vIHRoZSByZWRpcmVjdCByZXNvbHV0aW9uIGluIGZuTG9va3VwQ3JlYXRpb25TdWNjZXNzXG5cdFx0XHRpZiAoY3R4Lmxvb2t1cE5vblJlZGlyZWN0Q3JlYXRvcikge1xuXHRcdFx0XHRxdWVyeS5ydnNlY3Rpb24gPSAwO1xuXHRcdFx0XHRxdWVyeS5ydnByb3AgKz0gJ3xjb250ZW50Jztcblx0XHRcdH1cblx0XHRcdGlmIChjdHguZm9sbG93UmVkaXJlY3QpIHtcblx0XHRcdFx0cXVlcnkucmVkaXJlY3RzID0gJyc7IC8vIGZvbGxvdyBhbGwgcmVkaXJlY3RzXG5cdFx0XHR9XG5cblx0XHRcdGN0eC5sb29rdXBDcmVhdGlvbkFwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdFx0d2luZG93LndnVUxTKCfmipPlj5bpobXpnaLliJvlu7rogIXkv6Hmga8nLCAn5oqT5Y+W6aCB6Z2i5bu656uL6ICF6LOH6KiKJyksXG5cdFx0XHRcdHF1ZXJ5LFxuXHRcdFx0XHRmbkxvb2t1cENyZWF0aW9uU3VjY2Vzcyxcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQsXG5cdFx0XHRcdGN0eC5vbkxvb2t1cENyZWF0aW9uRmFpbHVyZVxuXHRcdFx0KTtcblx0XHRcdGN0eC5sb29rdXBDcmVhdGlvbkFwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0XHRjdHgubG9va3VwQ3JlYXRpb25BcGkucG9zdCgpO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogUmV2ZXJ0cyBhIHBhZ2UgdG8gYHJldmVydE9sZElEYCBzZXQgYnkgYHNldE9sZElEYC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvblN1Y2Nlc3NdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gcnVuIG9uIHN1Y2Nlc3MuXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRmFpbHVyZV0gLSBDYWxsYmFjayBmdW5jdGlvbiB0byBydW4gb24gZmFpbHVyZS5cblx0XHQgKi9cblx0XHR0aGlzLnJldmVydCA9IGZ1bmN0aW9uIChvblN1Y2Nlc3MsIG9uRmFpbHVyZSkge1xuXHRcdFx0Y3R4Lm9uU2F2ZVN1Y2Nlc3MgPSBvblN1Y2Nlc3M7XG5cdFx0XHRjdHgub25TYXZlRmFpbHVyZSA9IG9uRmFpbHVyZSB8fCBlbXB0eUZ1bmN0aW9uO1xuXHRcdFx0aWYgKCFjdHgucmV2ZXJ0T2xkSUQpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoJ0ludGVybmFsIGVycm9yOiByZXZpc2lvbiBJRCB0byByZXZlcnQgdG8gd2FzIG5vdCBzZXQgYmVmb3JlIHJldmVydCEnKTtcblx0XHRcdFx0Y3R4Lm9uU2F2ZUZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGN0eC5lZGl0TW9kZSA9ICdyZXZlcnQnO1xuXHRcdFx0dGhpcy5sb2FkKGZuQXV0b1NhdmUsIGN0eC5vblNhdmVGYWlsdXJlKTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIE1vdmVzIGEgcGFnZSB0byBhbm90aGVyIHRpdGxlLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uU3VjY2Vzc10gLSBDYWxsYmFjayBmdW5jdGlvbiB0byBydW4gb24gc3VjY2Vzcy5cblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25GYWlsdXJlXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHRvIHJ1biBvbiBmYWlsdXJlLlxuXHRcdCAqL1xuXHRcdHRoaXMubW92ZSA9IGZ1bmN0aW9uIChvblN1Y2Nlc3MsIG9uRmFpbHVyZSkge1xuXHRcdFx0Y3R4Lm9uTW92ZVN1Y2Nlc3MgPSBvblN1Y2Nlc3M7XG5cdFx0XHRjdHgub25Nb3ZlRmFpbHVyZSA9IG9uRmFpbHVyZSB8fCBlbXB0eUZ1bmN0aW9uO1xuXHRcdFx0aWYgKCFmblByZWZsaWdodENoZWNrcy5jYWxsKHRoaXMsICdtb3ZlJywgY3R4Lm9uTW92ZUZhaWx1cmUpKSB7XG5cdFx0XHRcdHJldHVybjsgLy8gYWJvcnRcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFjdHgubW92ZURlc3RpbmF0aW9uKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKCdJbnRlcm5hbCBlcnJvcjogZGVzdGluYXRpb24gcGFnZSBuYW1lIHdhcyBub3Qgc2V0IGJlZm9yZSBtb3ZlIScpO1xuXHRcdFx0XHRjdHgub25Nb3ZlRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGZuQ2FuVXNlTXdVc2VyVG9rZW4oJ21vdmUnKSkge1xuXHRcdFx0XHRmblByb2Nlc3NNb3ZlLmNhbGwodGhpcywgdGhpcyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCBxdWVyeSA9IGZuTmVlZFRva2VuSW5mb1F1ZXJ5KCdtb3ZlJyk7XG5cdFx0XHRcdGN0eC5tb3ZlQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn6I635Y+W5Luk54mM4oCm4oCmJywgJ+WPluW+l+asiuadluKApuKApicpLFxuXHRcdFx0XHRcdHF1ZXJ5LFxuXHRcdFx0XHRcdGZuUHJvY2Vzc01vdmUsXG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQsXG5cdFx0XHRcdFx0Y3R4Lm9uTW92ZUZhaWx1cmVcblx0XHRcdFx0KTtcblx0XHRcdFx0Y3R4Lm1vdmVBcGkuc2V0UGFyZW50KHRoaXMpO1xuXHRcdFx0XHRjdHgubW92ZUFwaS5wb3N0KCk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBNYXJrcyB0aGUgcGFnZSBhcyBwYXRyb2xsZWQsIHVzaW5nIGByY2lkYCAoaWYgYXZhaWxhYmxlKSBvciBgcmV2aWRgLlxuXHRcdCAqXG5cdFx0ICogUGF0cm9sbGluZyBhcyBzdWNoIGRvZXNuJ3QgbmVlZCB0byByZWx5IG9uIGxvYWRpbmcgdGhlIHBhZ2UgaW5cblx0XHQgKiBxdWVzdGlvbjsgc2ltcGx5IHBhc3NpbmcgYSByZXZpZCB0byB0aGUgQVBJIGlzIHN1ZmZpY2llbnQsIHNvIGluXG5cdFx0ICogdGhvc2UgY2FzZXMganVzdCB1c2luZyB7QGxpbmsgTW9yZWJpdHMud2lraS5hcGl9IGlzIHByb2JhYmx5IHByZWZlcmFibGUuXG5cdFx0ICpcblx0XHQgKiBObyBlcnJvciBoYW5kbGluZyBzaW5jZSB3ZSBkb24ndCBhY3R1YWxseSBjYXJlIGFib3V0IHRoZSBlcnJvcnMuXG5cdFx0ICovXG5cdFx0dGhpcy5wYXRyb2wgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAoIU1vcmViaXRzLnVzZXJJc1N5c29wICYmICFNb3JlYml0cy51c2VySXNJbkdyb3VwKCdwYXRyb2xsZXInKSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblx0XHRcdC8vIElmIGEgbGluayBpcyBwcmVzZW50LCBkb24ndCBuZWVkIHRvIGNoZWNrIGlmIGl0J3MgcGF0cm9sbGVkXG5cdFx0XHRpZiAoJGJvZHkuZmluZCgnLnBhdHJvbGxpbmsnKS5sZW5ndGgpIHtcblx0XHRcdFx0Y29uc3QgcGF0cm9saHJlZiA9ICRib2R5LmZpbmQoJy5wYXRyb2xsaW5rIGEnKS5hdHRyKCdocmVmJyk7XG5cdFx0XHRcdGN0eC5yY2lkID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCdyY2lkJywgcGF0cm9saHJlZik7XG5cdFx0XHRcdGZuUHJvY2Vzc1BhdHJvbCh0aGlzLCB0aGlzKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnN0IHBhdHJvbFF1ZXJ5ID0ge1xuXHRcdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0XHRwcm9wOiAnaW5mbycsXG5cdFx0XHRcdFx0bWV0YTogJ3Rva2VucycsXG5cdFx0XHRcdFx0dHlwZTogJ3BhdHJvbCcsXG5cdFx0XHRcdFx0Ly8gYXMgbG9uZyBhcyB3ZSdyZSBxdWVyeWluZywgbWlnaHQgYXMgd2VsbCBnZXQgYSB0b2tlblxuXHRcdFx0XHRcdGxpc3Q6ICdyZWNlbnRjaGFuZ2VzJyxcblx0XHRcdFx0XHQvLyBjaGVjayBpZiB0aGUgcGFnZSBpcyB1bnBhdHJvbGxlZFxuXHRcdFx0XHRcdHRpdGxlczogY3R4LnBhZ2VOYW1lLFxuXHRcdFx0XHRcdHJjcHJvcDogJ3BhdHJvbGxlZCcsXG5cdFx0XHRcdFx0cmN0aXRsZTogY3R4LnBhZ2VOYW1lLFxuXHRcdFx0XHRcdHJjbGltaXQ6IDEsXG5cdFx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdH07XG5cdFx0XHRcdGN0eC5wYXRyb2xBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdFx0d2luZG93LndnVUxTKCfojrflj5bku6TniYzigKbigKYnLCAn5Y+W5b6X5qyK5p2W4oCm4oCmJyksXG5cdFx0XHRcdFx0cGF0cm9sUXVlcnksXG5cdFx0XHRcdFx0Zm5Qcm9jZXNzUGF0cm9sXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGN0eC5wYXRyb2xBcGkuc2V0UGFyZW50KHRoaXMpO1xuXHRcdFx0XHRjdHgucGF0cm9sQXBpLnBvc3QoKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdC8vIHxkZWxldGV8IGlzIGEgcmVzZXJ2ZWQgd29yZCBpbiBzb21lIGZsYXZvdXJzIG9mIEpTXG5cdFx0LyoqXG5cdFx0ICogRGVsZXRlcyBhIHBhZ2UgKGZvciBhZG1pbnMgb25seSkuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25TdWNjZXNzXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHRvIHJ1biBvbiBzdWNjZXNzLlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvbkZhaWx1cmVdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gcnVuIG9uIGZhaWx1cmUuXG5cdFx0ICovXG5cdFx0dGhpcy5kZWxldGVQYWdlID0gZnVuY3Rpb24gKG9uU3VjY2Vzcywgb25GYWlsdXJlKSB7XG5cdFx0XHRjdHgub25EZWxldGVTdWNjZXNzID0gb25TdWNjZXNzO1xuXHRcdFx0Y3R4Lm9uRGVsZXRlRmFpbHVyZSA9IG9uRmFpbHVyZSB8fCBlbXB0eUZ1bmN0aW9uO1xuXHRcdFx0aWYgKCFmblByZWZsaWdodENoZWNrcy5jYWxsKHRoaXMsICdkZWxldGUnLCBjdHgub25EZWxldGVGYWlsdXJlKSkge1xuXHRcdFx0XHRyZXR1cm47IC8vIGFib3J0XG5cdFx0XHR9XG5cblx0XHRcdGlmIChmbkNhblVzZU13VXNlclRva2VuKCdkZWxldGUnKSkge1xuXHRcdFx0XHRmblByb2Nlc3NEZWxldGUuY2FsbCh0aGlzLCB0aGlzKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnN0IHF1ZXJ5ID0gZm5OZWVkVG9rZW5JbmZvUXVlcnkoJ2RlbGV0ZScpO1xuXHRcdFx0XHRjdHguZGVsZXRlQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn6I635Y+W5Luk54mM4oCm4oCmJywgJ+WPluW+l+asiuadluKApuKApicpLFxuXHRcdFx0XHRcdHF1ZXJ5LFxuXHRcdFx0XHRcdGZuUHJvY2Vzc0RlbGV0ZSxcblx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudCxcblx0XHRcdFx0XHRjdHgub25EZWxldGVGYWlsdXJlXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGN0eC5kZWxldGVBcGkuc2V0UGFyZW50KHRoaXMpO1xuXHRcdFx0XHRjdHguZGVsZXRlQXBpLnBvc3QoKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIFVuZGVsZXRlcyBhIHBhZ2UgKGZvciBhZG1pbnMgb25seSkuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25TdWNjZXNzXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHRvIHJ1biBvbiBzdWNjZXNzLlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvbkZhaWx1cmVdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gcnVuIG9uIGZhaWx1cmUuXG5cdFx0ICovXG5cdFx0dGhpcy51bmRlbGV0ZVBhZ2UgPSBmdW5jdGlvbiAob25TdWNjZXNzLCBvbkZhaWx1cmUpIHtcblx0XHRcdGN0eC5vblVuZGVsZXRlU3VjY2VzcyA9IG9uU3VjY2Vzcztcblx0XHRcdGN0eC5vblVuZGVsZXRlRmFpbHVyZSA9IG9uRmFpbHVyZSB8fCBlbXB0eUZ1bmN0aW9uO1xuXHRcdFx0aWYgKCFmblByZWZsaWdodENoZWNrcy5jYWxsKHRoaXMsICd1bmRlbGV0ZScsIGN0eC5vblVuZGVsZXRlRmFpbHVyZSkpIHtcblx0XHRcdFx0cmV0dXJuOyAvLyBhYm9ydFxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoZm5DYW5Vc2VNd1VzZXJUb2tlbigndW5kZWxldGUnKSkge1xuXHRcdFx0XHRmblByb2Nlc3NVbmRlbGV0ZS5jYWxsKHRoaXMsIHRoaXMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3QgcXVlcnkgPSBmbk5lZWRUb2tlbkluZm9RdWVyeSgndW5kZWxldGUnKTtcblx0XHRcdFx0Y3R4LnVuZGVsZXRlQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn6I635Y+W5Luk54mM4oCm4oCmJywgJ+WPluW+l+asiuadluKApuKApicpLFxuXHRcdFx0XHRcdHF1ZXJ5LFxuXHRcdFx0XHRcdGZuUHJvY2Vzc1VuZGVsZXRlLFxuXHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LFxuXHRcdFx0XHRcdGN0eC5vblVuZGVsZXRlRmFpbHVyZVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRjdHgudW5kZWxldGVBcGkuc2V0UGFyZW50KHRoaXMpO1xuXHRcdFx0XHRjdHgudW5kZWxldGVBcGkucG9zdCgpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogUHJvdGVjdHMgYSBwYWdlIChmb3IgYWRtaW5zIG9ubHkpLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uU3VjY2Vzc10gLSBDYWxsYmFjayBmdW5jdGlvbiB0byBydW4gb24gc3VjY2Vzcy5cblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25GYWlsdXJlXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHRvIHJ1biBvbiBmYWlsdXJlLlxuXHRcdCAqL1xuXHRcdHRoaXMucHJvdGVjdCA9IGZ1bmN0aW9uIChvblN1Y2Nlc3MsIG9uRmFpbHVyZSkge1xuXHRcdFx0Y3R4Lm9uUHJvdGVjdFN1Y2Nlc3MgPSBvblN1Y2Nlc3M7XG5cdFx0XHRjdHgub25Qcm90ZWN0RmFpbHVyZSA9IG9uRmFpbHVyZSB8fCBlbXB0eUZ1bmN0aW9uO1xuXHRcdFx0aWYgKCFmblByZWZsaWdodENoZWNrcy5jYWxsKHRoaXMsICdwcm90ZWN0JywgY3R4Lm9uUHJvdGVjdEZhaWx1cmUpKSB7XG5cdFx0XHRcdHJldHVybjsgLy8gYWJvcnRcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFjdHgucHJvdGVjdEVkaXQgJiYgIWN0eC5wcm90ZWN0TW92ZSAmJiAhY3R4LnByb3RlY3RDcmVhdGUpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdFx0J0ludGVybmFsIGVycm9yOiB5b3UgbXVzdCBzZXQgZWRpdCBhbmQvb3IgbW92ZSBhbmQvb3IgY3JlYXRlIHByb3RlY3Rpb24gYmVmb3JlIGNhbGxpbmcgcHJvdGVjdCgpISdcblx0XHRcdFx0KTtcblx0XHRcdFx0Y3R4Lm9uUHJvdGVjdEZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdC8vIGJlY2F1c2Ugb2YgdGhlIHdheSBNVyBBUEkgaW50ZXJwcmV0cyBwcm90ZWN0aW9uIGxldmVsc1xuXHRcdFx0Ly8gKGFic29sdXRlLCBub3QgZGlmZmVyZW50aWFsKSwgd2UgYWx3YXlzIG5lZWQgdG8gcmVxdWVzdFxuXHRcdFx0Ly8gcHJvdGVjdGlvbiBsZXZlbHMgZnJvbSB0aGUgc2VydmVyXG5cdFx0XHRjb25zdCBxdWVyeSA9IGZuTmVlZFRva2VuSW5mb1F1ZXJ5KCdwcm90ZWN0Jyk7XG5cdFx0XHRjdHgucHJvdGVjdEFwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdFx0d2luZG93LndnVUxTKCfojrflj5bku6TniYzigKbigKYnLCAn5Y+W5b6X5qyK5p2W4oCm4oCmJyksXG5cdFx0XHRcdHF1ZXJ5LFxuXHRcdFx0XHRmblByb2Nlc3NQcm90ZWN0LFxuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudCxcblx0XHRcdFx0Y3R4Lm9uUHJvdGVjdEZhaWx1cmVcblx0XHRcdCk7XG5cdFx0XHRjdHgucHJvdGVjdEFwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0XHRjdHgucHJvdGVjdEFwaS5wb3N0KCk7XG5cdFx0fTtcblx0XHQvKlxuXHRcdCAqIFByaXZhdGUgbWVtYmVyIGZ1bmN0aW9uc1xuXHRcdCAqIFRoZXNlIGFyZSBub3QgZXhwb3NlZCBvdXRzaWRlXG5cdFx0ICovXG5cdFx0LyoqXG5cdFx0ICogRGV0ZXJtaW5lcyB3aGV0aGVyIHdlIGNhbiBzYXZlIGFuIEFQSSBjYWxsIGJ5IHVzaW5nIHRoZSBjc3JmIHRva2VuXG5cdFx0ICogc2VudCB3aXRoIHRoZSBwYWdlIEhUTUwsIG9yIHdoZXRoZXIgd2UgbmVlZCB0byBhc2sgdGhlIHNlcnZlciBmb3Jcblx0XHQgKiBtb3JlIGluZm8gKGUuZy4gcHJvdGVjdGlvbiBvciB3YXRjaGxpc3QgZXhwaXJ5KS5cblx0XHQgKlxuXHRcdCAqIEN1cnJlbnRseSB1c2VkIGZvciBgYXBwZW5kYCwgYHByZXBlbmRgLCBgbmV3U2VjdGlvbmAsIGBtb3ZlYCxcblx0XHQgKiBgZGVsZXRlUGFnZWAsIGFuZCBgdW5kZWxldGVQYWdlYC4gTm90IHVzZWQgZm9yIGBwcm90ZWN0YFxuXHRcdCAqIHNpbmNlIGl0IGFsd2F5cyBuZWVkcyB0byByZXF1ZXN0IHByb3RlY3Rpb24gc3RhdHVzLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IFthY3Rpb249ZWRpdF0gLSBUaGUgYWN0aW9uIGJlaW5nIHVuZGVydGFrZW4sIGUuZy5cblx0XHQgKiBcImVkaXRcIiBvciBcImRlbGV0ZVwiLiBJbiBwcmFjdGljZSwgb25seSBcImVkaXRcIiBvciBcIm5vdGVkaXRcIiBtYXR0ZXJzLlxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHRcdCAqL1xuXHRcdGNvbnN0IGZuQ2FuVXNlTXdVc2VyVG9rZW4gPSAoYWN0aW9uKSA9PiB7XG5cdFx0XHRhY3Rpb24gfHw9ICdlZGl0Jztcblx0XHRcdC8vIElmIGEgd2F0Y2hsaXN0IGV4cGlyeSBpcyBzZXQsIHdlIG11c3QgYWx3YXlzIGxvYWQgdGhlIHBhZ2Vcblx0XHRcdC8vIHRvIGF2b2lkIG92ZXJ3cml0aW5nIGluZGVmaW5pdGUgcHJvdGVjdGlvbi4gIE9mIGNvdXJzZSwgbm90XG5cdFx0XHQvLyBuZWVkZWQgaWYgc2V0dGluZyBpbmRlZmluaXRlIHdhdGNoaW5nIVxuXHRcdFx0aWYgKGN0eC53YXRjaGxpc3RFeHBpcnkgJiYgIU1vcmViaXRzLnN0cmluZy5pc0luZmluaXR5KGN0eC53YXRjaGxpc3RFeHBpcnkpKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdC8vIEFQSS1iYXNlZCByZWRpcmVjdCByZXNvbHV0aW9uIG9ubHkgd29ya3MgZm9yIGFjdGlvbj1xdWVyeSBhbmRcblx0XHRcdC8vIGFjdGlvbj1lZGl0IGluIGFwcGVuZC9wcmVwZW5kL25ldyBtb2Rlc1xuXHRcdFx0aWYgKGN0eC5mb2xsb3dSZWRpcmVjdCkge1xuXHRcdFx0XHRpZiAoIWN0eC5mb2xsb3dDcm9zc05zUmVkaXJlY3QpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7IC8vIG11c3QgbG9hZCB0aGUgcGFnZSB0byBjaGVjayBmb3IgY3Jvc3MgbmFtZXNwYWNlIHJlZGlyZWN0c1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGFjdGlvbiAhPT0gJ2VkaXQnIHx8IGN0eC5lZGl0TW9kZSA9PT0gJ2FsbCcgfHwgY3R4LmVkaXRNb2RlID09PSAncmV2ZXJ0Jykge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ly8gZG8gd2UgbmVlZCB0byBmZXRjaCB0aGUgZWRpdCBwcm90ZWN0aW9uIGV4cGlyeT9cblx0XHRcdGlmIChNb3JlYml0cy51c2VySXNTeXNvcCAmJiAhY3R4LnN1cHByZXNzUHJvdGVjdFdhcm5pbmcpIHtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdG5ldyBtdy5UaXRsZShNb3JlYml0cy5wYWdlTmFtZU5vcm0pLmdldFByZWZpeGVkVGV4dCgpICE9PVxuXHRcdFx0XHRcdG5ldyBtdy5UaXRsZShjdHgucGFnZU5hbWUpLmdldFByZWZpeGVkVGV4dCgpXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyB3Z1Jlc3RyaWN0aW9uRWRpdCBpcyBudWxsIG9uIG5vbi1leGlzdGVudCBwYWdlcyxcblx0XHRcdFx0Ly8gc28gdGhpcyBuZWF0bHkgaGFuZGxlcyBub25leGlzdGVudCBwYWdlc1xuXHRcdFx0XHRjb25zdCBlZGl0UmVzdHJpY3Rpb24gPSBtdy5jb25maWcuZ2V0KCd3Z1Jlc3RyaWN0aW9uRWRpdCcpO1xuXHRcdFx0XHRpZiAoIWVkaXRSZXN0cmljdGlvbiB8fCBlZGl0UmVzdHJpY3Rpb24uaW5jbHVkZXMoJ3N5c29wJykpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiAhIW13LnVzZXIudG9rZW5zLmdldCgnY3NyZlRva2VuJyk7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBXaGVuIGZ1bmN0aW9ucyBjYW4ndCB1c2Vcblx0XHQgKiB7QGxpbmsgTW9yZWJpdHMud2lraS5wYWdlfmZuQ2FuVXNlTXdVc2VyVG9rZW58Zm5DYW5Vc2VNd1VzZXJUb2tlbn1cblx0XHQgKiBvciByZXF1aXJlIGNoZWNraW5nIHByb3RlY3Rpb24gb3Igd2F0Y2hlZCBzdGF0dXMsIG1haW50YWluIHRoZSBxdWVyeVxuXHRcdCAqIGluIG9uZSBwbGFjZS4gVXNlZCBmb3Ige0BsaW5rIE1vcmViaXRzLndpa2kucGFnZSNkZWxldGVQYWdlfGRlbGV0ZX0sXG5cdFx0ICoge0BsaW5rIE1vcmViaXRzLndpa2kucGFnZSN1bmRlbGV0ZVBhZ2V8dW5kZWxldGV9LFxuXHRcdCAqIHtAbGluayogTW9yZWJpdHMud2lraS5wYWdlI3Byb3RlY3R8cHJvdGVjdH0sXG5cdFx0ICogYW5kIHtAbGluayBNb3JlYml0cy53aWtpLnBhZ2UjbW92ZXxtb3ZlfVxuXHRcdCAqIChiYXNpY2FsbHksIGp1c3Qgbm90IHtAbGluayBNb3JlYml0cy53aWtpLnBhZ2UjbG9hZHxsb2FkfSkuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gYWN0aW9uIC0gVGhlIGFjdGlvbiBiZWluZyB1bmRlcnRha2VuLCBlLmcuIFwiZWRpdFwiIG9yXG5cdFx0ICogXCJkZWxldGVcIi5cblx0XHQgKiBAcmV0dXJucyB7T2JqZWN0fSBBcHByb3ByaWF0ZSBxdWVyeS5cblx0XHQgKi9cblx0XHRjb25zdCBmbk5lZWRUb2tlbkluZm9RdWVyeSA9IChhY3Rpb24pID0+IHtcblx0XHRcdGNvbnN0IHF1ZXJ5ID0ge1xuXHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdG1ldGE6ICd0b2tlbnMnLFxuXHRcdFx0XHR0eXBlOiAnY3NyZicsXG5cdFx0XHRcdHRpdGxlczogY3R4LnBhZ2VOYW1lLFxuXHRcdFx0XHRwcm9wOiAnaW5mbycsXG5cdFx0XHRcdGlucHJvcDogJ3dhdGNoZWQnLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdH07XG5cdFx0XHQvLyBQcm90ZWN0aW9uIG5vdCBjaGVja2VkIGZvciBub24tc3lzb3AgbW92ZXNcblx0XHRcdGlmIChhY3Rpb24gIT09ICdtb3ZlJyB8fCBNb3JlYml0cy51c2VySXNTeXNvcCkge1xuXHRcdFx0XHRxdWVyeS5pbnByb3AgKz0gJ3xwcm90ZWN0aW9uJztcblx0XHRcdH1cblx0XHRcdGlmIChjdHguZm9sbG93UmVkaXJlY3QgJiYgYWN0aW9uICE9PSAndW5kZWxldGUnKSB7XG5cdFx0XHRcdHF1ZXJ5LnJlZGlyZWN0cyA9ICcnOyAvLyBmb2xsb3cgYWxsIHJlZGlyZWN0c1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gcXVlcnk7XG5cdFx0fTtcblx0XHQvLyBjYWxsYmFjayBmcm9tIGxvYWRTdWNjZXNzKCkgZm9yIGFwcGVuZCgpLCBwcmVwZW5kKCksIGFuZCBuZXdTZWN0aW9uKCkgdGhyZWFkc1xuXHRcdGNvbnN0IGZuQXV0b1NhdmUgPSAocGFnZW9iaikgPT4ge1xuXHRcdFx0cGFnZW9iai5zYXZlKGN0eC5vblNhdmVTdWNjZXNzLCBjdHgub25TYXZlRmFpbHVyZSk7XG5cdFx0fTtcblx0XHQvLyBjYWxsYmFjayBmcm9tIGxvYWRBcGkucG9zdCgpXG5cdFx0Y29uc3QgZm5Mb2FkU3VjY2VzcyA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gY3R4LmxvYWRBcGkuZ2V0UmVzcG9uc2UoKS5xdWVyeTtcblx0XHRcdGlmICghZm5DaGVja1BhZ2VOYW1lKHJlc3BvbnNlLCBjdHgub25Mb2FkRmFpbHVyZSkpIHtcblx0XHRcdFx0cmV0dXJuOyAvLyBhYm9ydFxuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBbcGFnZV0gPSByZXNwb25zZS5wYWdlcztcblx0XHRcdGxldCByZXY7XG5cdFx0XHRjdHgucGFnZUV4aXN0cyA9ICFwYWdlLm1pc3Npbmc7XG5cdFx0XHRpZiAoY3R4LnBhZ2VFeGlzdHMpIHtcblx0XHRcdFx0W3Jldl0gPSBwYWdlLnJldmlzaW9ucztcblx0XHRcdFx0Y3R4Lmxhc3RFZGl0VGltZSA9IHJldi50aW1lc3RhbXA7XG5cdFx0XHRcdGN0eC5wYWdlVGV4dCA9IHJldi5jb250ZW50O1xuXHRcdFx0XHRjdHgucGFnZUlEID0gcGFnZS5wYWdlaWQ7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjdHgucGFnZVRleHQgPSAnJzsgLy8gYWxsb3cgZm9yIGNvbmNhdGVuYXRpb24sIGV0Yy5cblx0XHRcdFx0Y3R4LnBhZ2VJRCA9IDA7IC8vIG5vbmV4aXN0ZW50IGluIHJlc3BvbnNlLCBtYXRjaGVzIHdnQXJ0aWNsZUlkXG5cdFx0XHR9XG5cblx0XHRcdGN0eC5jc3JmVG9rZW4gPSByZXNwb25zZS50b2tlbnMuY3NyZnRva2VuO1xuXHRcdFx0aWYgKCFjdHguY3NyZlRva2VuKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdpbmRvdy53Z1VMUygn5pyq6IO96I635Y+W57yW6L6R5Luk54mM44CCJywgJ+acquiDveWPluW+l+e3qOi8r+asiuadluOAgicpKTtcblx0XHRcdFx0Y3R4Lm9uTG9hZEZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGN0eC5sb2FkVGltZSA9IGN0eC5sb2FkQXBpLmdldFJlc3BvbnNlKCkuY3VydGltZXN0YW1wO1xuXHRcdFx0aWYgKCFjdHgubG9hZFRpbWUpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2luZG93LndnVUxTKCfmnKrog73ojrflj5blvZPliY3ml7bpl7TmiLPjgIInLCAn5pyq6IO95Y+W5b6X55W25YmN5pmC6ZaT5oiz44CCJykpO1xuXHRcdFx0XHRjdHgub25Mb2FkRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y3R4LmNvbnRlbnRNb2RlbCA9IHBhZ2UuY29udGVudG1vZGVsO1xuXHRcdFx0Y3R4LndhdGNoZWQgPSBwYWdlLndhdGNobGlzdGV4cGlyeSB8fCBwYWdlLndhdGNoZWQ7XG5cdFx0XHQvLyBleHRyYWN0IHByb3RlY3Rpb24gaW5mbywgdG8gYWxlcnQgYWRtaW5zIHdoZW4gdGhleSBhcmUgYWJvdXQgdG8gZWRpdCBhIHByb3RlY3RlZCBwYWdlXG5cdFx0XHQvLyBJbmNsdWRlcyBjYXNjYWRpbmcgcHJvdGVjdGlvblxuXHRcdFx0aWYgKE1vcmViaXRzLnVzZXJJc1N5c29wKSB7XG5cdFx0XHRcdGNvbnN0IGVkaXRQcm90ID0gcGFnZS5wcm90ZWN0aW9uXG5cdFx0XHRcdFx0LmZpbHRlcigocHIpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBwci50eXBlID09PSAnZWRpdCcgJiYgcHIubGV2ZWwgPT09ICdzeXNvcCc7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQucG9wKCk7XG5cdFx0XHRcdGlmIChlZGl0UHJvdCkge1xuXHRcdFx0XHRcdGN0eC5mdWxseVByb3RlY3RlZCA9IGVkaXRQcm90LmV4cGlyeTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjdHguZnVsbHlQcm90ZWN0ZWQgPSBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Y3R4LnJldmVydEN1cklEID0gcGFnZS5sYXN0cmV2aWQ7XG5cdFx0XHRjb25zdCB0ZXN0YWN0aW9ucyA9IHBhZ2UuYWN0aW9ucztcblx0XHRcdGN0eC50ZXN0QWN0aW9ucyA9IFtdOyAvLyB3YXMgbnVsbFxuXHRcdFx0Zm9yIChjb25zdCBhY3Rpb24gb2YgT2JqZWN0LmtleXModGVzdGFjdGlvbnMpKSB7XG5cdFx0XHRcdGlmICh0ZXN0YWN0aW9uc1thY3Rpb25dKSB7XG5cdFx0XHRcdFx0Y3R4LnRlc3RBY3Rpb25zLnB1c2goYWN0aW9uKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGN0eC5lZGl0TW9kZSA9PT0gJ3JldmVydCcpIHtcblx0XHRcdFx0Y3R4LnJldmVydEN1cklEID0gcmV2ICYmIHJldi5yZXZpZDtcblx0XHRcdFx0aWYgKCFjdHgucmV2ZXJ0Q3VySUQpIHtcblx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3aW5kb3cud2dVTFMoJ+acquiDveiOt+WPluW9k+WJjeS/ruiuoueJiOacrElE44CCJywgJ+acquiDveWPluW+l+ebruWJjeS/ruiogueJiOacrElE44CCJykpO1xuXHRcdFx0XHRcdGN0eC5vbkxvYWRGYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRjdHgucmV2ZXJ0VXNlciA9IHJldiAmJiByZXYudXNlcjtcblx0XHRcdFx0aWYgKCFjdHgucmV2ZXJ0VXNlcikge1xuXHRcdFx0XHRcdGlmIChyZXYgJiYgcmV2LnVzZXJoaWRkZW4pIHtcblx0XHRcdFx0XHRcdC8vIHVzZXJuYW1lIHdhcyBSZXZEZWwnZCBvciBvdmVyc2lnaHRlZFxuXHRcdFx0XHRcdFx0Y3R4LnJldmVydFVzZXIgPSB3aW5kb3cud2dVTFMoJzznlKjmiLflkI3lt7LpmpDol48+JywgJzzkvb/nlKjogIXlkI3nqLHlt7LpmrHol48+Jyk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+acquiDveiOt+WPluatpOS/ruiuoueJiOacrOeahOe8lui+keiAheOAgicsICfmnKrog73lj5blvpfmraTkv67oqILniYjmnKznmoTnt6jovK/ogIXjgIInKVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdGN0eC5vbkxvYWRGYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBzZXQgcmV2ZXJ0IGVkaXQgc3VtbWFyeVxuXHRcdFx0XHRjdHguZWRpdFN1bW1hcnkgPSBgW1tRVzpVTkRPfOaSpOmUgF1d55SxICR7Y3R4LnJldmVydFVzZXJ9IOaJgOWBmuWHuueahCR7d2luZG93LndnVUxTKCfkv67orqIgJywgJ+S/ruiogiAnKX0ke1xuXHRcdFx0XHRcdGN0eC5yZXZlcnRPbGRJRFxuXHRcdFx0XHR977yaJHtjdHguZWRpdFN1bW1hcnl9YDtcblx0XHRcdH1cblx0XHRcdGN0eC5wYWdlTG9hZGVkID0gdHJ1ZTtcblx0XHRcdC8vIG13Lm5vdGlmeShcIkdlbmVyYXRlIGVkaXQgY29uZmxpY3Qgbm93XCIsIHt0eXBlOiAnd2FybicsIHRhZzogJ21vcmViaXRzJ30pOyAgLy8gZm9yIHRlc3RpbmcgZWRpdCBjb25mbGljdCByZWNvdmVyeSBsb2dpY1xuXHRcdFx0Y3R4Lm9uTG9hZFN1Y2Nlc3ModGhpcyk7IC8vIGludm9rZSBjYWxsYmFja1xuXHRcdH07XG5cdFx0Ly8gaGVscGVyIGZ1bmN0aW9uIHRvIHBhcnNlIHRoZSBwYWdlIG5hbWUgcmV0dXJuZWQgZnJvbSB0aGUgQVBJXG5cdFx0Y29uc3QgZm5DaGVja1BhZ2VOYW1lID0gZnVuY3Rpb24gKHJlc3BvbnNlLCBvbkZhaWx1cmUpIHtcblx0XHRcdGlmICghb25GYWlsdXJlKSB7XG5cdFx0XHRcdG9uRmFpbHVyZSA9IGVtcHR5RnVuY3Rpb247XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBwYWdlID0gcmVzcG9uc2UucGFnZXMgJiYgcmVzcG9uc2UucGFnZXNbMF07XG5cdFx0XHRpZiAocGFnZSkge1xuXHRcdFx0XHQvLyBjaGVjayBmb3IgaW52YWxpZCB0aXRsZXNcblx0XHRcdFx0aWYgKHBhZ2UuaW52YWxpZCkge1xuXHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdpbmRvdy53Z1VMUygn5qCH6aKY5LiN5ZCI5rOV77yaJywgYOaomemhjOS4jeWQiOazle+8miR7Y3R4LnBhZ2VOYW1lfWApKTtcblx0XHRcdFx0XHRvbkZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlOyAvLyBhYm9ydFxuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIHJldHJpZXZlIGFjdHVhbCB0aXRsZSBvZiB0aGUgcGFnZSBhZnRlciBub3JtYWxpemF0aW9uIGFuZCByZWRpcmVjdHNcblx0XHRcdFx0Y29uc3QgcmVzb2x2ZWROYW1lID0gcGFnZS50aXRsZTtcblx0XHRcdFx0aWYgKHJlc3BvbnNlLnJlZGlyZWN0cykge1xuXHRcdFx0XHRcdC8vIGNoZWNrIGZvciBjcm9zcy1uYW1lc3BhY2UgcmVkaXJlY3Q6XG5cdFx0XHRcdFx0Y29uc3Qgb3JpZ05zID0gbmV3IG13LlRpdGxlKGN0eC5wYWdlTmFtZSkubmFtZXNwYWNlO1xuXHRcdFx0XHRcdGNvbnN0IG5ld05zID0gbmV3IG13LlRpdGxlKHJlc29sdmVkTmFtZSkubmFtZXNwYWNlO1xuXHRcdFx0XHRcdGlmIChvcmlnTnMgIT09IG5ld05zICYmICFjdHguZm9sbG93Q3Jvc3NOc1JlZGlyZWN0KSB7XG5cdFx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0XHRcdFx0Y3R4LnBhZ2VOYW1lICtcblx0XHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+aYr+i3qOWRveWQjeepuumXtOmHjeWumuWQkeWIsCcsICfmmK/ot6jlkb3lkI3nqbrplpPph43mlrDlsI7lkJHliLAnKSArXG5cdFx0XHRcdFx0XHRcdFx0cmVzb2x2ZWROYW1lICtcblx0XHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ++8jOeVpei/hycsICfvvIznlaXpgY4nKVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdG9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gb25seSBub3RpZnkgdXNlciBmb3IgcmVkaXJlY3RzLCBub3Qgbm9ybWFsaXphdGlvblxuXHRcdFx0XHRcdG5ldyBNb3JlYml0cy5zdGF0dXMoXG5cdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+S/oeaBrycsICfos4foqIonKSxcblx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5LuOICcsICflvp4gJykgK1xuXHRcdFx0XHRcdFx0XHRjdHgucGFnZU5hbWUgK1xuXHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJyDph43lrprlkJHliLAgJywgJyDph43mlrDlsI7lkJHliLAgJykgK1xuXHRcdFx0XHRcdFx0XHRyZXNvbHZlZE5hbWVcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGN0eC5wYWdlTmFtZSA9IHJlc29sdmVkTmFtZTsgLy8gdXBkYXRlIHRvIHJlZGlyZWN0IHRhcmdldCBvciBub3JtYWxpemVkIG5hbWVcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIGNvdWxkIGJlIGEgY2lyY3VsYXIgcmVkaXJlY3Qgb3Igb3RoZXIgcHJvYmxlbVxuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+S4jeiDveino+aekOmhtemdoueahOmHjeWumuWQke+8micsICfkuI3og73op6PmnpDpoIHpnaLnmoTph43mlrDlsI7lkJHvvJonKSArIGN0eC5wYWdlTmFtZVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRvbkZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdC8vIGZvcmNlIGVycm9yIHRvIHN0YXkgb24gdGhlIHNjcmVlblxuXHRcdFx0XHQrK01vcmViaXRzLndpa2kubnVtYmVyT2ZBY3Rpb25zTGVmdDtcblx0XHRcdFx0cmV0dXJuIGZhbHNlOyAvLyBhYm9ydFxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdHJ1ZTsgLy8gYWxsIE9LXG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBEZXRlcm1pbmUgd2hldGhlciB3ZSBzaG91bGQgcHJvdmlkZSBhIHdhdGNobGlzdCBleHBpcnkuICBXaWxsIG5vdFxuXHRcdCAqIGRvIHNvIGlmIHRoZSBwYWdlIGlzIGN1cnJlbnRseSBwZXJtYW5lbnRseSB3YXRjaGVkLCBvciB0aGUgY3VycmVudFxuXHRcdCAqIGV4cGlyeSBpcyAqYWZ0ZXIqIHRoZSBuZXcsIHByb3ZpZGVkIGV4cGlyeS4gIE9ubHkgaGFuZGxlcyBzdHJpbmdzXG5cdFx0ICogcmVjb2duaXplZCBieSB7QGxpbmsgTW9yZWJpdHMuZGF0ZX0gb3IgcmVsYXRpdmUgdGltZWZyYW1lcyB3aXRoXG5cdFx0ICogdW5pdCBpdCBjYW4gcHJvY2Vzcy4gIFJlbGllcyBvbiB0aGUgZmFjdCB0aGF0IGZuQ2FuVXNlTXdVc2VyVG9rZW5cblx0XHQgKiByZXF1aXJlcyBwYWdlIGxvYWRpbmcgaWYgYSB3YXRjaGxpc3RleHBpcnkgaXMgcHJvdmlkZWQsIHNvIHdlIGFyZVxuXHRcdCAqIGVuc3VyZWQgb2Yga25vd2luZyB0aGUgd2F0Y2ggc3RhdHVzIGJ5IHRoZSB1c2Ugb2YgdGhpcy5cblx0XHQgKlxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHRcdCAqL1xuXHRcdGNvbnN0IGZuQXBwbHlXYXRjaGxpc3RFeHBpcnkgPSAoKSA9PiB7XG5cdFx0XHRpZiAoY3R4LndhdGNobGlzdEV4cGlyeSkge1xuXHRcdFx0XHRpZiAoIWN0eC53YXRjaGVkIHx8IE1vcmViaXRzLnN0cmluZy5pc0luZmluaXR5KGN0eC53YXRjaGxpc3RFeHBpcnkpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIGN0eC53YXRjaGVkID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRcdGxldCBuZXdFeHBpcnk7XG5cdFx0XHRcdFx0Ly8gQXR0ZW1wdCB0byBkZXRlcm1pbmUgaWYgdGhlIG5ldyBleHBpcnkgaXMgYVxuXHRcdFx0XHRcdC8vIHJlbGF0aXZlIChlLmcuIGAxIG1vbnRoYCkgb3IgYWJzb2x1dGUgZGF0ZXRpbWVcblx0XHRcdFx0XHRjb25zdCByZWwgPSBjdHgud2F0Y2hsaXN0RXhwaXJ5LnNwbGl0KCcgJyk7XG5cdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdG5ld0V4cGlyeSA9IG5ldyBNb3JlYml0cy5kYXRlKCkuYWRkKHJlbFswXSwgcmVsWzFdKTtcblx0XHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHRcdG5ld0V4cGlyeSA9IG5ldyBNb3JlYml0cy5kYXRlKGN0eC53YXRjaGxpc3RFeHBpcnkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBJZiB0aGUgZGF0ZSBpcyB2YWxpZCwgb25seSB1c2UgaXQgaWYgaXQgZXh0ZW5kcyB0aGUgY3VycmVudCBleHBpcnlcblx0XHRcdFx0XHRpZiAobmV3RXhwaXJ5LmlzVmFsaWQoKSkge1xuXHRcdFx0XHRcdFx0aWYgKG5ld0V4cGlyeS5pc0FmdGVyKG5ldyBNb3JlYml0cy5kYXRlKGN0eC53YXRjaGVkKSkpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdC8vIElmIGl0J3Mgc3RpbGwgbm90IHZhbGlkLCBob3BlIGl0J3MgYSB2YWxpZCBNVyBleHBpcnkgZm9ybWF0IHRoYXRcblx0XHRcdFx0XHRcdC8vIE1vcmViaXRzLmRhdGUgZG9lc24ndCByZWNvZ25pemUsIHNvIGp1c3QgZGVmYXVsdCB0byB1c2luZyBpdC5cblx0XHRcdFx0XHRcdC8vIFRoaXMgd2lsbCBhbHNvIGluY2x1ZGUgbWlub3IgdHlwb3MuXG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9O1xuXHRcdC8vIGNhbGxiYWNrIGZyb20gc2F2ZUFwaS5wb3N0KClcblx0XHRjb25zdCBmblNhdmVTdWNjZXNzID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0Y3R4LmVkaXRNb2RlID0gJ2FsbCc7IC8vIGNhbmNlbCBhcHBlbmQvcHJlcGVuZC9uZXdTZWN0aW9uL3JldmVydCBtb2Rlc1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBjdHguc2F2ZUFwaS5nZXRSZXNwb25zZSgpO1xuXHRcdFx0Ly8gc2VlIGlmIHRoZSBBUEkgdGhpbmtzIHdlIHdlcmUgc3VjY2Vzc2Z1bFxuXHRcdFx0aWYgKHJlc3BvbnNlLmVkaXQucmVzdWx0ID09PSAnU3VjY2VzcycpIHtcblx0XHRcdFx0Ly8gcmVhbCBzdWNjZXNzXG5cdFx0XHRcdC8vIGRlZmF1bHQgb24gc3VjY2VzcyBhY3Rpb24gLSBkaXNwbGF5IGxpbmsgZm9yIGVkaXRlZCBwYWdlXG5cdFx0XHRcdGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cdFx0XHRcdGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgbXcudXRpbC5nZXRVcmwoY3R4LnBhZ2VOYW1lKSk7XG5cdFx0XHRcdGxpbmsuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3R4LnBhZ2VOYW1lKSk7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmluZm8oWyflrozmiJDvvIgnLCBsaW5rLCAn77yJJ10pO1xuXHRcdFx0XHRpZiAoY3R4Lm9uU2F2ZVN1Y2Nlc3MpIHtcblx0XHRcdFx0XHRjdHgub25TYXZlU3VjY2Vzcyh0aGlzKTsgLy8gaW52b2tlIGNhbGxiYWNrXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHQvLyBlcnJvcnMgaGVyZSBhcmUgb25seSBnZW5lcmF0ZWQgYnkgZXh0ZW5zaW9ucyB3aGljaCBob29rIEFQSUVkaXRCZWZvcmVTYXZlIHdpdGhpbiBNZWRpYVdpa2ksXG5cdFx0XHQvLyB3aGljaCBhcyBvZiAxLjM0LjAtd21mLjIzIChTZXB0IDIwMTkpIHNob3VsZCBvbmx5IGVuY29tcGFzcyBjYXB0Y2hhIG1lc3NhZ2VzXG5cdFx0XHRpZiAocmVzcG9uc2UuZWRpdC5jYXB0Y2hhKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5LiN6IO95L+d5a2Y6aG16Z2i77yM5Zug5pyN5Yqh5Zmo6KaB5rGC5oKo6L6T5YWl6aqM6K+B56CB44CCJywgJ+S4jeiDveWEsuWtmOmggemdou+8jOWboOS8uuacjeWZqOimgeaxguaCqOi8uOWFpempl+itieeivOOAgicpXG5cdFx0XHRcdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3aW5kb3cud2dVTFMoJ+S/neWtmOmhtemdouaXtueUsUFQSeW+l+WIsOacquefpemUmeivrycsICflhLLlrZjpoIHpnaLmmYLnlLFBUEnlvpfliLDmnKrnn6XpjK/oqqQnKSk7XG5cdFx0XHR9XG5cdFx0XHQvLyBmb3JjZSBlcnJvciB0byBzdGF5IG9uIHRoZSBzY3JlZW5cblx0XHRcdCsrTW9yZWJpdHMud2lraS5udW1iZXJPZkFjdGlvbnNMZWZ0O1xuXHRcdFx0Y3R4Lm9uU2F2ZUZhaWx1cmUodGhpcyk7XG5cdFx0fTtcblx0XHQvLyBjYWxsYmFjayBmcm9tIHNhdmVBcGkucG9zdCgpXG5cdFx0Y29uc3QgZm5TYXZlRXJyb3IgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zdCBlcnJvckNvZGUgPSBjdHguc2F2ZUFwaS5nZXRFcnJvckNvZGUoKTtcblx0XHRcdC8vIGNoZWNrIGZvciBlZGl0IGNvbmZsaWN0XG5cdFx0XHRpZiAoZXJyb3JDb2RlID09PSAnZWRpdGNvbmZsaWN0JyAmJiBjdHguY29uZmxpY3RSZXRyaWVzKysgPCBjdHgubWF4Q29uZmxpY3RSZXRyaWVzKSB7XG5cdFx0XHRcdC8vIGVkaXQgY29uZmxpY3RzIGNhbiBvY2N1ciB3aGVuIHRoZSBwYWdlIG5lZWRzIHRvIGJlIHB1cmdlZCBmcm9tIHRoZSBzZXJ2ZXIgY2FjaGVcblx0XHRcdFx0Y29uc3QgcHVyZ2VRdWVyeSA9IHtcblx0XHRcdFx0XHRhY3Rpb246ICdwdXJnZScsXG5cdFx0XHRcdFx0dGl0bGVzOiBjdHgucGFnZU5hbWUsIC8vIHJlZGlyZWN0cyBhcmUgYWxyZWFkeSByZXNvbHZlZFxuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdGNvbnN0IHB1cmdlQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5qOA5rWL5Yiw57yW6L6R5Yay56qB77yM5q2j5Zyo5pu05paw5pyN5Yqh5Zmo57yT5a2YJywgJ+aqoua4rOWIsOe3qOi8r+ihneeqge+8jOato+WcqOabtOaWsOS8uuacjeWZqOW/q+WPlicpLFxuXHRcdFx0XHRcdHB1cmdlUXVlcnksXG5cdFx0XHRcdFx0KCkgPT4ge1xuXHRcdFx0XHRcdFx0LS1Nb3JlYml0cy53aWtpLm51bWJlck9mQWN0aW9uc0xlZnQ7IC8vIGFsbG93IGZvciBub3JtYWwgY29tcGxldGlvbiBpZiByZXRyeSBzdWNjZWVkc1xuXHRcdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuaW5mbyh3aW5kb3cud2dVTFMoJ+ajgOa1i+WIsOe8lui+keWGsueqge+8jOmHjeivleS/ruaUuScsICfmqqLmuKzliLDnt6jovK/ooZ3nqoHvvIzph43oqabkv67mlLknKSk7XG5cdFx0XHRcdFx0XHRpZiAoZm5DYW5Vc2VNd1VzZXJUb2tlbignZWRpdCcpKSB7XG5cdFx0XHRcdFx0XHRcdGN0eC5zYXZlQXBpLnBvc3QoKTsgLy8gbmVjZXNzYXJpbHkgYXBwZW5kLCBwcmVwZW5kLCBvciBuZXdTZWN0aW9uLCBzbyB0aGlzIHNob3VsZCB3b3JrIGFzIGRlc2lyZWRcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGN0eC5sb2FkQXBpLnBvc3QoKTsgLy8gcmVsb2FkIHRoZSBwYWdlIGFuZCByZWFwcGx5IHRoZSBlZGl0XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudFxuXHRcdFx0XHQpO1xuXHRcdFx0XHRwdXJnZUFwaS5wb3N0KCk7XG5cdFx0XHRcdC8vIGNoZWNrIGZvciBuZXR3b3JrIG9yIHNlcnZlciBlcnJvclxuXHRcdFx0fSBlbHNlIGlmICgoZXJyb3JDb2RlID09PSBudWxsIHx8IGVycm9yQ29kZSA9PT0gdW5kZWZpbmVkKSAmJiBjdHgucmV0cmllcysrIDwgY3R4Lm1heFJldHJpZXMpIHtcblx0XHRcdFx0Ly8gdGhlIGVycm9yIG1pZ2h0IGJlIHRyYW5zaWVudCwgc28gdHJ5IGFnYWluXG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmluZm8od2luZG93LndnVUxTKCfkv53lrZjlpLHotKXvvIzlnKgy56eS5ZCO6YeN6K+V4oCm4oCmJywgJ+WEsuWtmOWkseaVl++8jOWcqDLnp5Llvozph43oqabigKbigKYnKSk7XG5cdFx0XHRcdC0tTW9yZWJpdHMud2lraS5udW1iZXJPZkFjdGlvbnNMZWZ0OyAvLyBhbGxvdyBmb3Igbm9ybWFsIGNvbXBsZXRpb24gaWYgcmV0cnkgc3VjY2VlZHNcblx0XHRcdFx0Ly8gd2FpdCBmb3Igc29tZXRpbWUgZm9yIGNsaWVudCB0byByZWdhaW4gY29ubmVjdGl2aXR5XG5cdFx0XHRcdHNsZWVwKDIwMDApLnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRcdGN0eC5zYXZlQXBpLnBvc3QoKTsgLy8gZ2l2ZSBpdCBhbm90aGVyIGdvIVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0Ly8gaGFyZCBlcnJvciwgZ2l2ZSB1cFxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBjdHguc2F2ZUFwaS5nZXRSZXNwb25zZSgpO1xuXHRcdFx0XHRjb25zdCBlcnJvckRhdGEgPVxuXHRcdFx0XHRcdHJlc3BvbnNlLmVycm9yIHx8XG5cdFx0XHRcdFx0Ly8gYmMgZXJyb3IgZm9ybWF0XG5cdFx0XHRcdFx0cmVzcG9uc2UuZXJyb3JzWzBdLmRhdGE7IC8vIGh0bWwvd2lraXRleHQvcGxhaW50ZXh0IGVycm9yIGZvcm1hdFxuXHRcdFx0XHRzd2l0Y2ggKGVycm9yQ29kZSkge1xuXHRcdFx0XHRcdGNhc2UgJ3Byb3RlY3RlZHBhZ2UnOlxuXHRcdFx0XHRcdFx0Ly8gbm9uLWFkbWluIGF0dGVtcHRpbmcgdG8gZWRpdCBhIHByb3RlY3RlZCBwYWdlIC0gdGhpcyBnaXZlcyBhIGZyaWVuZGxpZXIgbWVzc2FnZSB0aGFuIHRoZSBkZWZhdWx0XG5cdFx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3aW5kb3cud2dVTFMoJ+S4jeiDveS/neWtmOS/ruaUue+8mumhtemdouiiq+S/neaKpCcsICfkuI3og73lhLLlrZjkv67mlLnvvJrpoIHpnaLooqvkv53orbcnKSk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdhYnVzZWZpbHRlci1kaXNhbGxvd2VkJzpcblx0XHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+e8lui+keiiq+mYsua7peeUqOi/h+a7pOWZqOinhOWImeKAnCcsICfnt6jovK/ooqvpmLLmv6vnlKjpgY7mv77lmajopo/liYfjgIwnKSArXG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3JEYXRhLmFidXNlZmlsdGVyLmRlc2NyaXB0aW9uICtcblx0XHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoXG5cdFx0XHRcdFx0XHRcdFx0XHQn4oCd6Zi75q2i44CC6Iul5oKo6K6k5Li65oKo55qE6K+l5qyh57yW6L6R5piv5pyJ5oSP5LmJ55qE77yM6K+36IezIFdpa2lwZWRpYTrpmLLmu6XnlKjov4fmu6Tlmagv6ZSZ6K+v5oql5ZGKIOaPkOaKpeOAgicsXG5cdFx0XHRcdFx0XHRcdFx0XHQn44CN6Zi75q2i44CC6Iul5oKo6KqN54K65oKo55qE6Kmy5qyh57eo6Lyv5piv5pyJ5oSP576p55qE77yM6KuL6IezIFdpa2lwZWRpYTrpmLLmv6vnlKjpgY7mv77lmagv6Yyv6Kqk5aCx5ZGKIOaPkOWgseOAgidcblx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnYWJ1c2VmaWx0ZXItd2FybmluZyc6XG5cdFx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihbXG5cdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn57yW6L6R6KKr6Ziy5rul55So6L+H5ruk5Zmo6KeE5YiZ4oCcJywgJ+e3qOi8r+iiq+mYsua/q+eUqOmBjua/vuWZqOimj+WJh+OAjCcpLFxuXHRcdFx0XHRcdFx0XHRlcnJvckRhdGEuYWJ1c2VmaWx0ZXIuZGVzY3JpcHRpb24sXG5cdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUyhcblx0XHRcdFx0XHRcdFx0XHQn4oCd6K2m5ZGK77yM6Iul5oKo5LuN5biM5pyb5YGa5Ye66K+l57yW6L6R77yM6K+35bCd6K+V6YeN5paw5o+Q5Lqk77yM5qC55o2u6L+H5ruk5Zmo55qE6K6+572u5oKo5Y+v6IO95Y+v5Lul5L2c5Ye65q2k57yW6L6R44CCJyxcblx0XHRcdFx0XHRcdFx0XHQn44CN6K2m5ZGK77yM6Iul5oKo5LuN5biM5pyb5YGa5Ye66Kmy57eo6Lyv77yM6KuL5ZiX6Kmm6YeN5paw5o+Q5Lqk77yM5qC55pOa6YGO5r++5Zmo55qE6Kit5a6a5oKo5Y+v6IO95Y+v5Lul5L2c5Ye65q2k57eo6Lyv44CCJ1xuXHRcdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0XSk7XG5cdFx0XHRcdFx0XHQvLyBXZSBzaG91bGQgcHJvdmlkZSB0aGUgdXNlciB3aXRoIGEgd2F5IHRvIGF1dG9tYXRpY2FsbHkgcmV0cnkgdGhlIGFjdGlvbiBpZiB0aGV5IHNvIGNob29zZSAtXG5cdFx0XHRcdFx0XHQvLyBJIGNhbid0IHNlZSBob3cgdG8gZG8gdGhpcyB3aXRob3V0IGNyZWF0aW5nIGEgVUkgZGVwZW5kZW5jeSBvbiBNb3JlYml0cy53aWtpLnBhZ2UgdGhvdWdoIC0tIFRUT1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnc3BhbWJsYWNrbGlzdCc6IHtcblx0XHRcdFx0XHRcdC8vIElmIG11bHRpcGxlIGl0ZW1zIGFyZSBibGFja2xpc3RlZCwgd2Ugb25seSByZXR1cm4gdGhlIGZpcnN0XG5cdFx0XHRcdFx0XHRjb25zdCBbc3BhbV0gPSBlcnJvckRhdGEuc3BhbWJsYWNrbGlzdC5tYXRjaGVzO1xuXHRcdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5LiN6IO95L+d5a2Y6aG16Z2i77yM5ZugVVJMICcsICfkuI3og73lhLLlrZjpoIHpnaLvvIzlm6BVUkwgJykgK1xuXHRcdFx0XHRcdFx0XHRcdHNwYW0gK1xuXHRcdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygnIOWcqOWeg+WcvumTvuaOpem7keWQjeWNleS4reOAgicsICcg5Zyo5Z6D5Zy+6YCj57WQ6buR5ZCN5Zau5Lit44CCJylcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+S4jeiDveS/neWtmOS/ruaUue+8micsICfkuI3og73lhLLlrZjkv67mlLnvvJonKSArIGN0eC5zYXZlQXBpLmdldEVycm9yVGV4dCgpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGN0eC5lZGl0TW9kZSA9ICdhbGwnOyAvLyBjYW5jZWwgYXBwZW5kL3ByZXBlbmQvbmV3U2VjdGlvbi9yZXZlcnQgbW9kZXNcblx0XHRcdFx0aWYgKGN0eC5vblNhdmVGYWlsdXJlKSB7XG5cdFx0XHRcdFx0Y3R4Lm9uU2F2ZUZhaWx1cmUodGhpcyk7IC8vIGludm9rZSBjYWxsYmFja1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdGNvbnN0IGlzVGV4dFJlZGlyZWN0ID0gKHRleHQpID0+IHtcblx0XHRcdGlmICghdGV4dCkge1xuXHRcdFx0XHQvLyBubyB0ZXh0IC0gY29udGVudCBlbXB0eSBvciBpbmFjY2Vzc2libGUgKHJldmRlbGxlZCBvciBzdXBwcmVzc2VkKVxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gTW9yZWJpdHMubDEwbi5yZWRpcmVjdFRhZ0FsaWFzZXMuc29tZSgodGFnKSA9PiB7XG5cdFx0XHRcdHJldHVybiBuZXcgUmVnRXhwKGBeXFxcXHMqJHt0YWd9XFxcXFdgLCAnaScpLnRlc3QodGV4dCk7XG5cdFx0XHR9KTtcblx0XHR9O1xuXHRcdGNvbnN0IGZuTG9va3VwQ3JlYXRpb25TdWNjZXNzID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBjdHgubG9va3VwQ3JlYXRpb25BcGkuZ2V0UmVzcG9uc2UoKS5xdWVyeTtcblx0XHRcdGlmICghZm5DaGVja1BhZ2VOYW1lKHJlc3BvbnNlLCBjdHgub25Mb29rdXBDcmVhdGlvbkZhaWx1cmUpKSB7XG5cdFx0XHRcdHJldHVybjsgLy8gYWJvcnRcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgcmV2ID0gcmVzcG9uc2UucGFnZXNbMF0ucmV2aXNpb25zICYmIHJlc3BvbnNlLnBhZ2VzWzBdLnJldmlzaW9uc1swXTtcblx0XHRcdGlmICghcmV2KSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5peg5rOV5om+5YiwJywgJ+eEoeazleaJvuWIsCcpICtcblx0XHRcdFx0XHRcdGN0eC5wYWdlTmFtZSArXG5cdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+eahOS7u+S9leS/ruiuoueJiOacrCcsICfnmoTku7vkvZXkv67oqILniYjmnKwnKVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRjdHgub25Mb29rdXBDcmVhdGlvbkZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmICghY3R4Lmxvb2t1cE5vblJlZGlyZWN0Q3JlYXRvciB8fCAhaXNUZXh0UmVkaXJlY3QocmV2LmNvbnRlbnQpKSB7XG5cdFx0XHRcdGN0eC5jcmVhdG9yID0gcmV2LnVzZXI7XG5cdFx0XHRcdGlmICghY3R4LmNyZWF0b3IpIHtcblx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3aW5kb3cud2dVTFMoJ+aXoOazleiOt+WPlumhtemdouWIm+W7uuiAheeahOWQjeWtlycsICfnhKHms5Xlj5blvpfpoIHpnaLlu7rnq4vogIXnmoTlkI3lrZcnKSk7XG5cdFx0XHRcdFx0Y3R4Lm9uTG9va3VwQ3JlYXRpb25GYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRjdHgudGltZXN0YW1wID0gcmV2LnRpbWVzdGFtcDtcblx0XHRcdFx0aWYgKCFjdHgudGltZXN0YW1wKSB7XG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2luZG93LndnVUxTKCfml6Dms5Xojrflj5bpobXpnaLliJvlu7rml7bpl7QnLCAn54Sh5rOV5Y+W5b6X6aCB6Z2i5bu656uL5pmC6ZaTJykpO1xuXHRcdFx0XHRcdGN0eC5vbkxvb2t1cENyZWF0aW9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuaW5mbyh3aW5kb3cud2dVTFMoJ+W3suiOt+WPlumhtemdouWIm+W7uuS/oeaBrycsICflt7Llj5blvpfpoIHpnaLlu7rnq4vos4foqIonKSk7XG5cdFx0XHRcdGN0eC5vbkxvb2t1cENyZWF0aW9uU3VjY2Vzcyh0aGlzKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGN0eC5sb29rdXBDcmVhdGlvbkFwaS5xdWVyeS5ydmxpbWl0ID0gNTA7IC8vIG1vZGlmeSBwcmV2aW91cyBxdWVyeSB0byBmZXRjaCBtb3JlIHJldmlzaW9uc1xuXHRcdFx0XHRjdHgubG9va3VwQ3JlYXRpb25BcGkucXVlcnkudGl0bGVzID0gY3R4LnBhZ2VOYW1lOyAvLyB1cGRhdGUgcGFnZU5hbWUgaWYgcmVkaXJlY3QgcmVzb2x1dGlvbiB0b29rIHBsYWNlIGluIGVhcmxpZXIgcXVlcnlcblx0XHRcdFx0Y3R4Lmxvb2t1cENyZWF0aW9uQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn6I635Y+W6aG16Z2i5Yib5bu65L+h5oGvJywgJ+WPluW+l+mggemdouW7uueri+izh+ioiicpLFxuXHRcdFx0XHRcdGN0eC5sb29rdXBDcmVhdGlvbkFwaS5xdWVyeSxcblx0XHRcdFx0XHRmbkxvb2t1cE5vblJlZGlyZWN0Q3JlYXRvcixcblx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudCxcblx0XHRcdFx0XHRjdHgub25Mb29rdXBDcmVhdGlvbkZhaWx1cmVcblx0XHRcdFx0KTtcblx0XHRcdFx0Y3R4Lmxvb2t1cENyZWF0aW9uQXBpLnNldFBhcmVudCh0aGlzKTtcblx0XHRcdFx0Y3R4Lmxvb2t1cENyZWF0aW9uQXBpLnBvc3QoKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdGNvbnN0IGZuTG9va3VwTm9uUmVkaXJlY3RDcmVhdG9yID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBjdHgubG9va3VwQ3JlYXRpb25BcGkuZ2V0UmVzcG9uc2UoKS5xdWVyeTtcblx0XHRcdGNvbnN0IHJldnMgPSByZXNwb25zZS5wYWdlc1swXS5yZXZpc2lvbnM7XG5cdFx0XHRmb3IgKGNvbnN0IHJldiBvZiByZXZzKSB7XG5cdFx0XHRcdGlmICghaXNUZXh0UmVkaXJlY3QocmV2LmNvbnRlbnQpKSB7XG5cdFx0XHRcdFx0Y3R4LmNyZWF0b3IgPSByZXYudXNlcjtcblx0XHRcdFx0XHRjdHgudGltZXN0YW1wID0gcmV2LnRpbWVzdGFtcDtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKCFjdHguY3JlYXRvcikge1xuXHRcdFx0XHQvLyBmYWxsYmFjayB0byBnaXZlIGZpcnN0IHJldmlzaW9uIGF1dGhvciBpZiBubyBub24tcmVkaXJlY3QgdmVyc2lvbiBpbiB0aGUgZmlyc3QgNTBcblx0XHRcdFx0Y3R4LmNyZWF0b3IgPSByZXZzWzBdLnVzZXI7XG5cdFx0XHRcdGN0eC50aW1lc3RhbXAgPSByZXZzWzBdLnRpbWVzdGFtcDtcblx0XHRcdFx0aWYgKCFjdHguY3JlYXRvcikge1xuXHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdpbmRvdy53Z1VMUygn5peg5rOV6I635Y+W6aG16Z2i5Yib5bu66ICF55qE5ZCN5a2XJywgJ+eEoeazleWPluW+l+mggemdouW7uueri+iAheeahOWQjeWtlycpKTtcblx0XHRcdFx0XHRjdHgub25Mb29rdXBDcmVhdGlvbkZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWN0eC50aW1lc3RhbXApIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2luZG93LndnVUxTKCfml6Dms5Xojrflj5bpobXpnaLliJvlu7rml7bpl7QnLCAn54Sh5rOV5Y+W5b6X6aCB6Z2i5bu656uL5pmC6ZaTJykpO1xuXHRcdFx0XHRjdHgub25Mb29rdXBDcmVhdGlvbkZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmluZm8od2luZG93LndnVUxTKCflt7Lojrflj5bpobXpnaLliJvlu7rkv6Hmga8nLCAn5bey5Y+W5b6X6aCB6Z2i5bu656uL6LOH6KiKJykpO1xuXHRcdFx0Y3R4Lm9uTG9va3VwQ3JlYXRpb25TdWNjZXNzKHRoaXMpO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQ29tbW9uIGNoZWNrcyBmb3IgYWN0aW9uIG1ldGhvZHMuIFVzZWQgZm9yIG1vdmUsIHVuZGVsZXRlLCBkZWxldGUsXG5cdFx0ICogcHJvdGVjdC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb24gLSBUaGUgYWN0aW9uIGJlaW5nIGNoZWNrZWQuXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IG9uRmFpbHVyZSAtIEZhaWx1cmUgY2FsbGJhY2suXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdFx0ICovXG5cdFx0Y29uc3QgZm5QcmVmbGlnaHRDaGVja3MgPSBmdW5jdGlvbiAoYWN0aW9uLCBvbkZhaWx1cmUpIHtcblx0XHRcdC8vIGlmIGEgbm9uLWFkbWluIHRyaWVzIHRvIGRvIHRoaXMsIGRvbid0IGJvdGhlclxuXHRcdFx0aWYgKCFNb3JlYml0cy51c2VySXNTeXNvcCAmJiBhY3Rpb24gIT09ICdtb3ZlJykge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+aXoOazleWvuemhtemdoui/m+ihjOKAnCcsICfnhKHms5XlsI3poIHpnaLpgLLooYzjgIwnKSArXG5cdFx0XHRcdFx0XHRhY3Rpb24gK1xuXHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfigJ3mk43kvZzvvJrlj6rmnInnrqHnkIblkZjlj6/ku6Xov5vooYzmraTmk43kvZwnLCAn44CN5pON5L2c77ya5Y+q5pyJ566h55CG5ZOh5Y+v5Lul6YCy6KGM5q2k5pON5L2cJylcblx0XHRcdFx0KTtcblx0XHRcdFx0b25GYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWN0eC5lZGl0U3VtbWFyeSkge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihgSW50ZXJuYWwgZXJyb3I6ICR7YWN0aW9ufSByZWFzb24gbm90IHNldCAodXNlIHNldEVkaXRTdW1tYXJ5IGZ1bmN0aW9uKSFgKTtcblx0XHRcdFx0b25GYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJ1ZTsgLy8gYWxsIE9LXG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBDb21tb24gY2hlY2tzIGZvciBmblByb2Nlc3MgZnVuY3Rpb25zIChgZm5Qcm9jZXNzRGVsZXRlYCwgYGZuUHJvY2Vzc01vdmVgLCBldGMuXG5cdFx0ICogVXNlZCBmb3IgbW92ZSwgdW5kZWxldGUsIGRlbGV0ZSwgcHJvdGVjdC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb24gLSBUaGUgYWN0aW9uIGJlaW5nIGNoZWNrZWQuXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IG9uRmFpbHVyZSAtIEZhaWx1cmUgY2FsbGJhY2suXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHJlc3BvbnNlIC0gVGhlIHJlc3BvbnNlIGRvY3VtZW50IGZyb20gdGhlIEFQSSBjYWxsLlxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHRcdCAqL1xuXHRcdGNvbnN0IGZuUHJvY2Vzc0NoZWNrcyA9IGZ1bmN0aW9uIChhY3Rpb24sIG9uRmFpbHVyZSwgcmVzcG9uc2UpIHtcblx0XHRcdGNvbnN0IFt7bWlzc2luZ31dID0gcmVzcG9uc2UucGFnZXM7XG5cdFx0XHQvLyBObyB1bmRlbGV0ZSBhcyBhbiBleGlzdGluZyBwYWdlIGNvdWxkIGhhdmUgZGVsZXRlZCByZXZpc2lvbnNcblx0XHRcdGNvbnN0IGFjdGlvbk1pc3NpbmcgPSBtaXNzaW5nICYmIFsnZGVsZXRlJywgJ21vdmUnXS5pbmNsdWRlcyhhY3Rpb24pO1xuXHRcdFx0Y29uc3QgcHJvdGVjdE1pc3NpbmcgPSBhY3Rpb24gPT09ICdwcm90ZWN0JyAmJiBtaXNzaW5nICYmIChjdHgucHJvdGVjdEVkaXQgfHwgY3R4LnByb3RlY3RNb3ZlKTtcblx0XHRcdGNvbnN0IHNhbHRNaXNzaW5nID0gYWN0aW9uID09PSAncHJvdGVjdCcgJiYgIW1pc3NpbmcgJiYgY3R4LnByb3RlY3RDcmVhdGU7XG5cdFx0XHRpZiAoYWN0aW9uTWlzc2luZyB8fCBwcm90ZWN0TWlzc2luZyB8fCBzYWx0TWlzc2luZykge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0XHRgJHtcblx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5peg5rOV5a+56aG16Z2i6L+b6KGM4oCcJywgJ+eEoeazleWwjemggemdoumAsuihjOOAjCcpICtcblx0XHRcdFx0XHRcdGFjdGlvbiArXG5cdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+KAneaTjeS9nO+8jOWboOS4uumhtemdoicsICfjgI3mk43kvZzvvIzlm6DngrrpoIHpnaInKSArXG5cdFx0XHRcdFx0XHQobWlzc2luZyA/ICflt7LkuI0nIDogd2luZG93LndnVUxTKCflt7Lnu48nLCAn5bey57aTJykpXG5cdFx0XHRcdFx0feWtmOWcqGBcblx0XHRcdFx0KTtcblx0XHRcdFx0b25GYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHQvLyBEZWxldGUsIHVuZGVsZXRlLCBtb3ZlXG5cdFx0XHQvLyBleHRyYWN0IHByb3RlY3Rpb24gaW5mb1xuXHRcdFx0bGV0IGVkaXRwcm90O1xuXHRcdFx0aWYgKGFjdGlvbiA9PT0gJ3VuZGVsZXRlJykge1xuXHRcdFx0XHRlZGl0cHJvdCA9IHJlc3BvbnNlLnBhZ2VzWzBdLnByb3RlY3Rpb25cblx0XHRcdFx0XHQuZmlsdGVyKChwcikgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHByLnR5cGUgPT09ICdjcmVhdGUnICYmIHByLmxldmVsID09PSAnc3lzb3AnO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LnBvcCgpO1xuXHRcdFx0fSBlbHNlIGlmIChhY3Rpb24gPT09ICdkZWxldGUnIHx8IGFjdGlvbiA9PT0gJ21vdmUnKSB7XG5cdFx0XHRcdGVkaXRwcm90ID0gcmVzcG9uc2UucGFnZXNbMF0ucHJvdGVjdGlvblxuXHRcdFx0XHRcdC5maWx0ZXIoKHByKSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gcHIudHlwZSA9PT0gJ2VkaXQnICYmIHByLmxldmVsID09PSAnc3lzb3AnO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LnBvcCgpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKFxuXHRcdFx0XHRlZGl0cHJvdCAmJlxuXHRcdFx0XHQhY3R4LnN1cHByZXNzUHJvdGVjdFdhcm5pbmcgJiZcblx0XHRcdFx0IWNvbmZpcm0oXG5cdFx0XHRcdFx0d2luZG93LndnVUxTKCfmgqjljbPlsIblr7nlhajkv53miqTpobXpnaLigJwnLCAn5oKo5Y2z5bCH5bCN5YWo5L+d6K236aCB6Z2i44CMJykgK1xuXHRcdFx0XHRcdFx0Y3R4LnBhZ2VOYW1lICtcblx0XHRcdFx0XHRcdChlZGl0cHJvdC5leHBpcnkgPT09ICdpbmZpbml0eSdcblx0XHRcdFx0XHRcdFx0PyB3aW5kb3cud2dVTFMoJ+KAne+8iOawuOS5he+8iScsICfjgI3vvIjmsLjkuYXvvIknKVxuXHRcdFx0XHRcdFx0XHQ6IGAke1xuXHRcdFx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfigJ3vvIjliLDmnJ/vvJonLCAn44CN77yI5Yiw5pyf77yaJykgK1xuXHRcdFx0XHRcdFx0XHRcdFx0bmV3IE1vcmViaXRzLmRhdGUoZWRpdHByb3QuZXhwaXJ5KS5jYWxlbmRhcigndXRjJylcblx0XHRcdFx0XHRcdFx0XHR9IChVVEMp77yJYCkgK1xuXHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfigJ3ov5vooYzigJwnLCAn44CN6YCy6KGM44CMJykgK1xuXHRcdFx0XHRcdFx0YWN0aW9uICtcblx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn4oCd5pON5L2cJywgJ+OAjeaTjeS9nCcpICtcblx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUyhcblx0XHRcdFx0XHRcdFx0J+OAglxcblxcbuWNleWHu+ehruWumuS7pee7p+e7reaTjeS9nO+8jOaIluWNleWHu+WPlua2iOS7peWPlua2iOaTjeS9nOOAgicsXG5cdFx0XHRcdFx0XHRcdCfjgIJcXG5cXG7pu57mk4rnorrlrprku6Xnubznuozmk43kvZzvvIzmiJbpu57mk4rlj5bmtojku6Xlj5bmtojmk43kvZzjgIInXG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdClcblx0XHRcdCkge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3aW5kb3cud2dVTFMoJ+W3suWPlua2iOWvueWFqOS/neaKpOmhtemdoueahOaTjeS9nOOAgicsICflt7Llj5bmtojlsI3lhajkv53orbfpoIHpnaLnmoTmk43kvZzjgIInKSk7XG5cdFx0XHRcdG9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFyZXNwb25zZS50b2tlbnMuY3NyZnRva2VuKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdpbmRvdy53Z1VMUygn5peg5rOV6I635Y+W5Luk54mM44CCJywgJ+eEoeazleWPluW+l+asiuadluOAgicpKTtcblx0XHRcdFx0b25GYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJ1ZTsgLy8gYWxsIE9LXG5cdFx0fTtcblxuXHRcdGNvbnN0IGZuUHJvY2Vzc01vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRsZXQgcGFnZVRpdGxlO1xuXHRcdFx0bGV0IHRva2VuO1xuXHRcdFx0aWYgKGZuQ2FuVXNlTXdVc2VyVG9rZW4oJ21vdmUnKSkge1xuXHRcdFx0XHR0b2tlbiA9IG13LnVzZXIudG9rZW5zLmdldCgnY3NyZlRva2VuJyk7XG5cdFx0XHRcdHBhZ2VUaXRsZSA9IGN0eC5wYWdlTmFtZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gY3R4Lm1vdmVBcGkuZ2V0UmVzcG9uc2UoKS5xdWVyeTtcblx0XHRcdFx0aWYgKCFmblByb2Nlc3NDaGVja3MoJ21vdmUnLCBjdHgub25Nb3ZlRmFpbHVyZSwgcmVzcG9uc2UpKSB7XG5cdFx0XHRcdFx0cmV0dXJuOyAvLyBhYm9ydFxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dG9rZW4gPSByZXNwb25zZS50b2tlbnMuY3NyZnRva2VuO1xuXHRcdFx0XHRjb25zdCBbcGFnZV0gPSByZXNwb25zZS5wYWdlcztcblx0XHRcdFx0cGFnZVRpdGxlID0gcGFnZS50aXRsZTtcblx0XHRcdFx0Y3R4LndhdGNoZWQgPSBwYWdlLndhdGNobGlzdGV4cGlyeSB8fCBwYWdlLndhdGNoZWQ7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBxdWVyeSA9IHtcblx0XHRcdFx0YWN0aW9uOiAnbW92ZScsXG5cdFx0XHRcdGZyb206IHBhZ2VUaXRsZSxcblx0XHRcdFx0dG86IGN0eC5tb3ZlRGVzdGluYXRpb24sXG5cdFx0XHRcdHRva2VuLFxuXHRcdFx0XHRyZWFzb246IGN0eC5lZGl0U3VtbWFyeSxcblx0XHRcdFx0d2F0Y2hsaXN0OiBjdHgud2F0Y2hsaXN0T3B0aW9uLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdH07XG5cdFx0XHRpZiAoY3R4LmNoYW5nZVRhZ3MpIHtcblx0XHRcdFx0cXVlcnkudGFncyA9IGN0eC5jaGFuZ2VUYWdzO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGZuQXBwbHlXYXRjaGxpc3RFeHBpcnkoKSkge1xuXHRcdFx0XHRxdWVyeS53YXRjaGxpc3RleHBpcnkgPSBjdHgud2F0Y2hsaXN0RXhwaXJ5O1xuXHRcdFx0fVxuXHRcdFx0aWYgKGN0eC5tb3ZlVGFsa1BhZ2UpIHtcblx0XHRcdFx0cXVlcnkubW92ZXRhbGsgPSAndHJ1ZSc7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY3R4Lm1vdmVTdWJwYWdlcykge1xuXHRcdFx0XHRxdWVyeS5tb3Zlc3VicGFnZXMgPSAndHJ1ZSc7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY3R4Lm1vdmVTdXBwcmVzc1JlZGlyZWN0KSB7XG5cdFx0XHRcdHF1ZXJ5Lm5vcmVkaXJlY3QgPSAndHJ1ZSc7XG5cdFx0XHR9XG5cdFx0XHRjdHgubW92ZVByb2Nlc3NBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdHdpbmRvdy53Z1VMUygn56e75Yqo6aG16Z2i4oCm4oCmJywgJ+enu+WLlemggemdouKApuKApicpLFxuXHRcdFx0XHRxdWVyeSxcblx0XHRcdFx0Y3R4Lm9uTW92ZVN1Y2Nlc3MsXG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LFxuXHRcdFx0XHRjdHgub25Nb3ZlRmFpbHVyZVxuXHRcdFx0KTtcblx0XHRcdGN0eC5tb3ZlUHJvY2Vzc0FwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0XHRjdHgubW92ZVByb2Nlc3NBcGkucG9zdCgpO1xuXHRcdH07XG5cdFx0Y29uc3QgZm5Qcm9jZXNzUGF0cm9sID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc3QgcXVlcnkgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3BhdHJvbCcsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0fTtcblx0XHRcdC8vIERpZG4ndCBuZWVkIHRvIGxvYWQgdGhlIHBhZ2Vcblx0XHRcdGlmIChjdHgucmNpZCkge1xuXHRcdFx0XHRxdWVyeS5yY2lkID0gY3R4LnJjaWQ7XG5cdFx0XHRcdHF1ZXJ5LnRva2VuID0gbXcudXNlci50b2tlbnMuZ2V0KCdwYXRyb2xUb2tlbicpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBjdHgucGF0cm9sQXBpLmdldFJlc3BvbnNlKCkucXVlcnk7XG5cdFx0XHRcdC8vIERvbid0IHBhdHJvbCBpZiBub3QgdW5wYXRyb2xsZWRcblx0XHRcdFx0aWYgKCFyZXNwb25zZS5yZWNlbnRjaGFuZ2VzWzBdLnVucGF0cm9sbGVkKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IFt7bGFzdHJldmlkfV0gPSByZXNwb25zZS5wYWdlcztcblx0XHRcdFx0aWYgKCFsYXN0cmV2aWQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0cXVlcnkucmV2aWQgPSBsYXN0cmV2aWQ7XG5cdFx0XHRcdGNvbnN0IHRva2VuID0gcmVzcG9uc2UudG9rZW5zLmNzcmZ0b2tlbjtcblx0XHRcdFx0aWYgKCF0b2tlbikge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRxdWVyeS50b2tlbiA9IHRva2VuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGN0eC5jaGFuZ2VUYWdzKSB7XG5cdFx0XHRcdHF1ZXJ5LnRhZ3MgPSBjdHguY2hhbmdlVGFncztcblx0XHRcdH1cblx0XHRcdGNvbnN0IHBhdHJvbFN0YXQgPSBuZXcgTW9yZWJpdHMuc3RhdHVzKHdpbmRvdy53Z1VMUygn5qCH6K6w6aG16Z2i5Li65bey5beh5p+lJywgJ+aomeiomOmggemdoueCuuW3suW3oeafpScpKTtcblx0XHRcdGN0eC5wYXRyb2xQcm9jZXNzQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0XHR3aW5kb3cud2dVTFMoJ+W3oeafpemhtemdouKApuKApicsICflt6Hmn6XpoIHpnaLigKbigKYnKSxcblx0XHRcdFx0cXVlcnksXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdHBhdHJvbFN0YXRcblx0XHRcdCk7XG5cdFx0XHRjdHgucGF0cm9sUHJvY2Vzc0FwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0XHRjdHgucGF0cm9sUHJvY2Vzc0FwaS5wb3N0KCk7XG5cdFx0fTtcblx0XHRjb25zdCBmblByb2Nlc3NEZWxldGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRsZXQgcGFnZVRpdGxlO1xuXHRcdFx0bGV0IHRva2VuO1xuXHRcdFx0aWYgKGZuQ2FuVXNlTXdVc2VyVG9rZW4oJ2RlbGV0ZScpKSB7XG5cdFx0XHRcdHRva2VuID0gbXcudXNlci50b2tlbnMuZ2V0KCdjc3JmVG9rZW4nKTtcblx0XHRcdFx0cGFnZVRpdGxlID0gY3R4LnBhZ2VOYW1lO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBjdHguZGVsZXRlQXBpLmdldFJlc3BvbnNlKCkucXVlcnk7XG5cdFx0XHRcdGlmICghZm5Qcm9jZXNzQ2hlY2tzKCdkZWxldGUnLCBjdHgub25EZWxldGVGYWlsdXJlLCByZXNwb25zZSkpIHtcblx0XHRcdFx0XHRyZXR1cm47IC8vIGFib3J0XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0b2tlbiA9IHJlc3BvbnNlLnRva2Vucy5jc3JmdG9rZW47XG5cdFx0XHRcdGNvbnN0IFtwYWdlXSA9IHJlc3BvbnNlLnBhZ2VzO1xuXHRcdFx0XHRwYWdlVGl0bGUgPSBwYWdlLnRpdGxlO1xuXHRcdFx0XHRjdHgud2F0Y2hlZCA9IHBhZ2Uud2F0Y2hsaXN0ZXhwaXJ5IHx8IHBhZ2Uud2F0Y2hlZDtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHF1ZXJ5ID0ge1xuXHRcdFx0XHRhY3Rpb246ICdkZWxldGUnLFxuXHRcdFx0XHR0aXRsZTogcGFnZVRpdGxlLFxuXHRcdFx0XHR0b2tlbixcblx0XHRcdFx0cmVhc29uOiBjdHguZWRpdFN1bW1hcnksXG5cdFx0XHRcdHdhdGNobGlzdDogY3R4LndhdGNobGlzdE9wdGlvbixcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHR9O1xuXHRcdFx0aWYgKGN0eC5jaGFuZ2VUYWdzKSB7XG5cdFx0XHRcdHF1ZXJ5LnRhZ3MgPSBjdHguY2hhbmdlVGFncztcblx0XHRcdH1cblx0XHRcdGlmIChmbkFwcGx5V2F0Y2hsaXN0RXhwaXJ5KCkpIHtcblx0XHRcdFx0cXVlcnkud2F0Y2hsaXN0ZXhwaXJ5ID0gY3R4LndhdGNobGlzdEV4cGlyeTtcblx0XHRcdH1cblx0XHRcdGN0eC5kZWxldGVQcm9jZXNzQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0XHR3aW5kb3cud2dVTFMoJ+WIoOmZpOmhtemdouKApuKApicsICfliKrpmaTpoIHpnaLigKbigKYnKSxcblx0XHRcdFx0cXVlcnksXG5cdFx0XHRcdGN0eC5vbkRlbGV0ZVN1Y2Nlc3MsXG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LFxuXHRcdFx0XHRmblByb2Nlc3NEZWxldGVFcnJvclxuXHRcdFx0KTtcblx0XHRcdGN0eC5kZWxldGVQcm9jZXNzQXBpLnNldFBhcmVudCh0aGlzKTtcblx0XHRcdGN0eC5kZWxldGVQcm9jZXNzQXBpLnBvc3QoKTtcblx0XHR9O1xuXHRcdC8vIGNhbGxiYWNrIGZyb20gZGVsZXRlUHJvY2Vzc0FwaS5wb3N0KClcblx0XHRjb25zdCBmblByb2Nlc3NEZWxldGVFcnJvciA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IGVycm9yQ29kZSA9IGN0eC5kZWxldGVQcm9jZXNzQXBpLmdldEVycm9yQ29kZSgpO1xuXHRcdFx0Ly8gY2hlY2sgZm9yIFwiRGF0YWJhc2UgcXVlcnkgZXJyb3JcIlxuXHRcdFx0aWYgKGVycm9yQ29kZSA9PT0gJ2ludGVybmFsX2FwaV9lcnJvcl9EQlF1ZXJ5RXJyb3InICYmIGN0eC5yZXRyaWVzKysgPCBjdHgubWF4UmV0cmllcykge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5pbmZvKHdpbmRvdy53Z1VMUygn5pWw5o2u5bqT5p+l6K+i6ZSZ6K+v77yM6YeN6K+VJywgJ+izh+aWmeW6q+afpeipoumMr+iqpO+8jOmHjeippicpKTtcblx0XHRcdFx0LS1Nb3JlYml0cy53aWtpLm51bWJlck9mQWN0aW9uc0xlZnQ7IC8vIGFsbG93IGZvciBub3JtYWwgY29tcGxldGlvbiBpZiByZXRyeSBzdWNjZWVkc1xuXHRcdFx0XHRjdHguZGVsZXRlUHJvY2Vzc0FwaS5wb3N0KCk7IC8vIGdpdmUgaXQgYW5vdGhlciBnbyFcblx0XHRcdH0gZWxzZSBpZiAoZXJyb3JDb2RlID09PSAnbWlzc2luZ3RpdGxlJykge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3aW5kb3cud2dVTFMoJ+S4jeiDveWIoOmZpOmhtemdou+8jOWboOWFtuW3suS4jeWtmOWcqCcsICfkuI3og73liKrpmaTpoIHpnaLvvIzlm6Dlhbblt7LkuI3lrZjlnKgnKSk7XG5cdFx0XHRcdGlmIChjdHgub25EZWxldGVGYWlsdXJlKSB7XG5cdFx0XHRcdFx0Y3R4Lm9uRGVsZXRlRmFpbHVyZS5jYWxsKHRoaXMsIGN0eC5kZWxldGVQcm9jZXNzQXBpKTsgLy8gaW52b2tlIGNhbGxiYWNrXG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gaGFyZCBlcnJvciwgZ2l2ZSB1cFxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdFx0d2luZG93LndnVUxTKCfml6Dms5XliKDpmaTpobXpnaLvvJonLCAn54Sh5rOV5Yiq6Zmk6aCB6Z2i77yaJykgKyBjdHguZGVsZXRlUHJvY2Vzc0FwaS5nZXRFcnJvclRleHQoKVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRpZiAoY3R4Lm9uRGVsZXRlRmFpbHVyZSkge1xuXHRcdFx0XHRcdGN0eC5vbkRlbGV0ZUZhaWx1cmUuY2FsbCh0aGlzLCBjdHguZGVsZXRlUHJvY2Vzc0FwaSk7IC8vIGludm9rZSBjYWxsYmFja1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdGNvbnN0IGZuUHJvY2Vzc1VuZGVsZXRlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0bGV0IHBhZ2VUaXRsZTtcblx0XHRcdGxldCB0b2tlbjtcblx0XHRcdGlmIChmbkNhblVzZU13VXNlclRva2VuKCd1bmRlbGV0ZScpKSB7XG5cdFx0XHRcdHRva2VuID0gbXcudXNlci50b2tlbnMuZ2V0KCdjc3JmVG9rZW4nKTtcblx0XHRcdFx0cGFnZVRpdGxlID0gY3R4LnBhZ2VOYW1lO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBjdHgudW5kZWxldGVBcGkuZ2V0UmVzcG9uc2UoKS5xdWVyeTtcblx0XHRcdFx0aWYgKCFmblByb2Nlc3NDaGVja3MoJ3VuZGVsZXRlJywgY3R4Lm9uVW5kZWxldGVGYWlsdXJlLCByZXNwb25zZSkpIHtcblx0XHRcdFx0XHRyZXR1cm47IC8vIGFib3J0XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0b2tlbiA9IHJlc3BvbnNlLnRva2Vucy5jc3JmdG9rZW47XG5cdFx0XHRcdGNvbnN0IFtwYWdlXSA9IHJlc3BvbnNlLnBhZ2VzO1xuXHRcdFx0XHRwYWdlVGl0bGUgPSBwYWdlLnRpdGxlO1xuXHRcdFx0XHRjdHgud2F0Y2hlZCA9IHBhZ2Uud2F0Y2hsaXN0ZXhwaXJ5IHx8IHBhZ2Uud2F0Y2hlZDtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHF1ZXJ5ID0ge1xuXHRcdFx0XHRhY3Rpb246ICd1bmRlbGV0ZScsXG5cdFx0XHRcdHRpdGxlOiBwYWdlVGl0bGUsXG5cdFx0XHRcdHRva2VuLFxuXHRcdFx0XHRyZWFzb246IGN0eC5lZGl0U3VtbWFyeSxcblx0XHRcdFx0d2F0Y2hsaXN0OiBjdHgud2F0Y2hsaXN0T3B0aW9uLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdH07XG5cdFx0XHRpZiAoY3R4LmNoYW5nZVRhZ3MpIHtcblx0XHRcdFx0cXVlcnkudGFncyA9IGN0eC5jaGFuZ2VUYWdzO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGZuQXBwbHlXYXRjaGxpc3RFeHBpcnkoKSkge1xuXHRcdFx0XHRxdWVyeS53YXRjaGxpc3RleHBpcnkgPSBjdHgud2F0Y2hsaXN0RXhwaXJ5O1xuXHRcdFx0fVxuXHRcdFx0Y3R4LnVuZGVsZXRlUHJvY2Vzc0FwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdFx0d2luZG93LndnVUxTKCfov5jljp/pobXpnaLigKbigKYnLCAn6YKE5Y6f6aCB6Z2i4oCm4oCmJyksXG5cdFx0XHRcdHF1ZXJ5LFxuXHRcdFx0XHRjdHgub25VbmRlbGV0ZVN1Y2Nlc3MsXG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LFxuXHRcdFx0XHRmblByb2Nlc3NVbmRlbGV0ZUVycm9yXG5cdFx0XHQpO1xuXHRcdFx0Y3R4LnVuZGVsZXRlUHJvY2Vzc0FwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0XHRjdHgudW5kZWxldGVQcm9jZXNzQXBpLnBvc3QoKTtcblx0XHR9O1xuXHRcdC8vIGNhbGxiYWNrIGZyb20gdW5kZWxldGVQcm9jZXNzQXBpLnBvc3QoKVxuXHRcdGNvbnN0IGZuUHJvY2Vzc1VuZGVsZXRlRXJyb3IgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zdCBlcnJvckNvZGUgPSBjdHgudW5kZWxldGVQcm9jZXNzQXBpLmdldEVycm9yQ29kZSgpO1xuXHRcdFx0Ly8gY2hlY2sgZm9yIFwiRGF0YWJhc2UgcXVlcnkgZXJyb3JcIlxuXHRcdFx0aWYgKGVycm9yQ29kZSA9PT0gJ2ludGVybmFsX2FwaV9lcnJvcl9EQlF1ZXJ5RXJyb3InKSB7XG5cdFx0XHRcdGlmIChjdHgucmV0cmllcysrIDwgY3R4Lm1heFJldHJpZXMpIHtcblx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5pbmZvKHdpbmRvdy53Z1VMUygn5pWw5o2u5bqT5p+l6K+i6ZSZ6K+v77yM6YeN6K+VJywgJ+izh+aWmeW6q+afpeipoumMr+iqpO+8jOmHjeippicpKTtcblx0XHRcdFx0XHQtLU1vcmViaXRzLndpa2kubnVtYmVyT2ZBY3Rpb25zTGVmdDsgLy8gYWxsb3cgZm9yIG5vcm1hbCBjb21wbGV0aW9uIGlmIHJldHJ5IHN1Y2NlZWRzXG5cdFx0XHRcdFx0Y3R4LnVuZGVsZXRlUHJvY2Vzc0FwaS5wb3N0KCk7IC8vIGdpdmUgaXQgYW5vdGhlciBnbyFcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUyhcblx0XHRcdFx0XHRcdFx0J+aMgee7reeahOaVsOaNruW6k+afpeivoumUmeivr++8jOmHjeaWsOWKoOi9vemhtemdouW5tumHjeivlScsXG5cdFx0XHRcdFx0XHRcdCfmjIHnuoznmoTos4fmlpnluqvmn6XoqaLpjK/oqqTvvIzph43mlrDovInlhaXpoIHpnaLkuKbph43oqaYnXG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRpZiAoY3R4Lm9uVW5kZWxldGVGYWlsdXJlKSB7XG5cdFx0XHRcdFx0XHRjdHgub25VbmRlbGV0ZUZhaWx1cmUuY2FsbCh0aGlzLCBjdHgudW5kZWxldGVQcm9jZXNzQXBpKTsgLy8gaW52b2tlIGNhbGxiYWNrXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGVycm9yQ29kZSA9PT0gJ2NhbnR1bmRlbGV0ZScpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdFx0d2luZG93LndnVUxTKFxuXHRcdFx0XHRcdFx0J+aXoOazlei/mOWOn+WIoOmZpOmhtemdou+8jOWboOayoeacieeJiOacrOS+m+i/mOWOn+aIluW3suiiq+i/mOWOnycsXG5cdFx0XHRcdFx0XHQn54Sh5rOV6YKE5Y6f5Yiq6Zmk6aCB6Z2i77yM5Zug5rKS5pyJ54mI5pys5L6b6YKE5Y6f5oiW5bey6KKr6YKE5Y6fJ1xuXHRcdFx0XHRcdClcblx0XHRcdFx0KTtcblx0XHRcdFx0aWYgKGN0eC5vblVuZGVsZXRlRmFpbHVyZSkge1xuXHRcdFx0XHRcdGN0eC5vblVuZGVsZXRlRmFpbHVyZS5jYWxsKHRoaXMsIGN0eC51bmRlbGV0ZVByb2Nlc3NBcGkpOyAvLyBpbnZva2UgY2FsbGJhY2tcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBoYXJkIGVycm9yLCBnaXZlIHVwXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+aXoOazlei/mOWOn+mhtemdou+8micsICfnhKHms5XpgoTljp/poIHpnaLvvJonKSArIGN0eC51bmRlbGV0ZVByb2Nlc3NBcGkuZ2V0RXJyb3JUZXh0KClcblx0XHRcdFx0KTtcblx0XHRcdFx0aWYgKGN0eC5vblVuZGVsZXRlRmFpbHVyZSkge1xuXHRcdFx0XHRcdGN0eC5vblVuZGVsZXRlRmFpbHVyZS5jYWxsKHRoaXMsIGN0eC51bmRlbGV0ZVByb2Nlc3NBcGkpOyAvLyBpbnZva2UgY2FsbGJhY2tcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRjb25zdCBmblByb2Nlc3NQcm90ZWN0ID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBjdHgucHJvdGVjdEFwaS5nZXRSZXNwb25zZSgpLnF1ZXJ5O1xuXHRcdFx0aWYgKCFmblByb2Nlc3NDaGVja3MoJ3Byb3RlY3QnLCBjdHgub25Qcm90ZWN0RmFpbHVyZSwgcmVzcG9uc2UpKSB7XG5cdFx0XHRcdHJldHVybjsgLy8gYWJvcnRcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgdG9rZW4gPSByZXNwb25zZS50b2tlbnMuY3NyZnRva2VuO1xuXHRcdFx0Y29uc3QgW3BhZ2VdID0gcmVzcG9uc2UucGFnZXM7XG5cdFx0XHRjb25zdCBwYWdlVGl0bGUgPSBwYWdlLnRpdGxlO1xuXHRcdFx0Y3R4LndhdGNoZWQgPSBwYWdlLndhdGNobGlzdGV4cGlyeSB8fCBwYWdlLndhdGNoZWQ7XG5cdFx0XHQvLyBGZXRjaCBleGlzdGluZyBwcm90ZWN0aW9uIGxldmVsc1xuXHRcdFx0Y29uc3QgcHJzID0gcmVzcG9uc2UucGFnZXNbMF0ucHJvdGVjdGlvbjtcblx0XHRcdGxldCBlZGl0cHJvdDtcblx0XHRcdGxldCBtb3ZlcHJvdDtcblx0XHRcdGxldCBjcmVhdGVwcm90O1xuXHRcdFx0Zm9yIChjb25zdCBwciBvZiBwcnMpIHtcblx0XHRcdFx0Ly8gRmlsdGVyIG91dCBwcm90ZWN0aW9uIGZyb20gY2FzY2FkaW5nXG5cdFx0XHRcdGlmIChwci50eXBlID09PSAnZWRpdCcgJiYgIXByLnNvdXJjZSkge1xuXHRcdFx0XHRcdGVkaXRwcm90ID0gcHI7XG5cdFx0XHRcdH0gZWxzZSBpZiAocHIudHlwZSA9PT0gJ21vdmUnKSB7XG5cdFx0XHRcdFx0bW92ZXByb3QgPSBwcjtcblx0XHRcdFx0fSBlbHNlIGlmIChwci50eXBlID09PSAnY3JlYXRlJykge1xuXHRcdFx0XHRcdGNyZWF0ZXByb3QgPSBwcjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ly8gRmFsbCBiYWNrIHRvIGN1cnJlbnQgbGV2ZWxzIGlmIG5vdCBleHBsaWNpdGx5IHNldFxuXHRcdFx0aWYgKCFjdHgucHJvdGVjdEVkaXQgJiYgZWRpdHByb3QpIHtcblx0XHRcdFx0Y3R4LnByb3RlY3RFZGl0ID0ge1xuXHRcdFx0XHRcdGxldmVsOiBlZGl0cHJvdC5sZXZlbCxcblx0XHRcdFx0XHRleHBpcnk6IGVkaXRwcm90LmV4cGlyeSxcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGlmICghY3R4LnByb3RlY3RNb3ZlICYmIG1vdmVwcm90KSB7XG5cdFx0XHRcdGN0eC5wcm90ZWN0TW92ZSA9IHtcblx0XHRcdFx0XHRsZXZlbDogbW92ZXByb3QubGV2ZWwsXG5cdFx0XHRcdFx0ZXhwaXJ5OiBtb3ZlcHJvdC5leHBpcnksXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWN0eC5wcm90ZWN0Q3JlYXRlICYmIGNyZWF0ZXByb3QpIHtcblx0XHRcdFx0Y3R4LnByb3RlY3RDcmVhdGUgPSB7XG5cdFx0XHRcdFx0bGV2ZWw6IGNyZWF0ZXByb3QubGV2ZWwsXG5cdFx0XHRcdFx0ZXhwaXJ5OiBjcmVhdGVwcm90LmV4cGlyeSxcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdC8vIERlZmF1bHQgdG8gcHJlLWV4aXN0aW5nIGNhc2NhZGluZyBwcm90ZWN0aW9uIGlmIHVuY2hhbmdlZCAoc2ltaWxhciB0byBhYm92ZSlcblx0XHRcdGlmIChjdHgucHJvdGVjdENhc2NhZGUgPT09IG51bGwpIHtcblx0XHRcdFx0Y3R4LnByb3RlY3RDYXNjYWRlID0gISFwcnMuZmlsdGVyKChwcikgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBwci5jYXNjYWRlO1xuXHRcdFx0XHR9KS5sZW5ndGg7XG5cdFx0XHR9XG5cdFx0XHQvLyBXYXJuIGlmIGNhc2NhZGluZyBwcm90ZWN0aW9uIGJlaW5nIGFwcGxpZWQgd2l0aCBhbiBpbnZhbGlkIHByb3RlY3Rpb24gbGV2ZWwsXG5cdFx0XHQvLyB3aGljaCBmb3IgZWRpdCBwcm90ZWN0aW9uIHdpbGwgY2F1c2UgY2FzY2FkaW5nIHRvIGJlIHNpbGVudGx5IHN0cmlwcGVkXG5cdFx0XHRpZiAoY3R4LnByb3RlY3RDYXNjYWRlKSB7XG5cdFx0XHRcdC8vIE9uIG1vdmUgcHJvdGVjdGlvbiwgdGhpcyBpcyB0ZWNobmljYWxseSBzdHJpY3RlciB0aGFuIHRoZSBNVyBBUEksXG5cdFx0XHRcdC8vIGJ1dCBzZWVtcyByZWFzb25hYmxlIHRvIGF2b2lkIGR1bWIgdmFsdWVzIGFuZCBtaXNsZWFkaW5nIGxvZyBlbnRyaWVzIChUMjY1NjI2KVxuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0KCFjdHgucHJvdGVjdEVkaXQgfHxcblx0XHRcdFx0XHRcdGN0eC5wcm90ZWN0RWRpdC5sZXZlbCAhPT0gJ3N5c29wJyB8fFxuXHRcdFx0XHRcdFx0IWN0eC5wcm90ZWN0TW92ZSB8fFxuXHRcdFx0XHRcdFx0Y3R4LnByb3RlY3RNb3ZlLmxldmVsICE9PSAnc3lzb3AnKSAmJlxuXHRcdFx0XHRcdCFjb25maXJtKFxuXHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfmgqjlt7Llr7nigJwnLCAn5oKo5bey5bCN44CMJykgK1xuXHRcdFx0XHRcdFx0XHRjdHgucGFnZU5hbWUgK1xuXHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+KAneWQr+eUqOS6hui/numUgeS/neaKpCcsICfjgI3llZ/nlKjkuobpgKPpjpbkv53orbcnKSArXG5cdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUyhcblx0XHRcdFx0XHRcdFx0XHQn77yM5L2G5rKh5pyJ6K6+572u5LuF566h55CG5ZGY55qE5L+d5oqk57qn5Yir44CCXFxuXFxuJyxcblx0XHRcdFx0XHRcdFx0XHQn77yM5L2G5rKS5pyJ6Kit5a6a5YOF566h55CG5ZOh55qE5L+d6K2357Sa5Yil44CCXFxuXFxuJ1xuXHRcdFx0XHRcdFx0XHQpICtcblx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKFxuXHRcdFx0XHRcdFx0XHRcdCfljZXlh7vnoa7orqTku6Xoh6rliqjosIPmlbTlubbnu6fnu63ov57plIHlhajkv53miqTvvIzljZXlh7vlj5bmtojku6Xot7Pov4fmraTmk43kvZwnLFxuXHRcdFx0XHRcdFx0XHRcdCfpu57mk4rnorroqo3ku6Xoh6rli5Xoqr/mlbTkuKbnubznuozpgKPpjpblhajkv53orbfvvIzpu57mk4rlj5bmtojku6Xot7PpgY7mraTmk43kvZwnXG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHQpXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdpbmRvdy53Z1VMUygn6L+e6ZSB5L+d5oqk5bey5Y+W5raI44CCJywgJ+mAo+mOluS/neitt+W3suWPlua2iOOAgicpKTtcblx0XHRcdFx0XHRjdHgub25Qcm90ZWN0RmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0Y3R4LnByb3RlY3RFZGl0LmxldmVsID0gJ3N5c29wJztcblx0XHRcdFx0Y3R4LnByb3RlY3RNb3ZlLmxldmVsID0gJ3N5c29wJztcblx0XHRcdH1cblx0XHRcdC8vIEJ1aWxkIHByb3RlY3Rpb24gbGV2ZWxzIGFuZCBleHBpcnlzIChleHBpcmllcz8pIGZvciBxdWVyeVxuXHRcdFx0Y29uc3QgcHJvdGVjdGlvbnMgPSBbXTtcblx0XHRcdGNvbnN0IGV4cGlyeXMgPSBbXTtcblx0XHRcdGlmIChjdHgucHJvdGVjdEVkaXQpIHtcblx0XHRcdFx0cHJvdGVjdGlvbnMucHVzaChgZWRpdD0ke2N0eC5wcm90ZWN0RWRpdC5sZXZlbH1gKTtcblx0XHRcdFx0ZXhwaXJ5cy5wdXNoKGN0eC5wcm90ZWN0RWRpdC5leHBpcnkpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGN0eC5wcm90ZWN0TW92ZSkge1xuXHRcdFx0XHRwcm90ZWN0aW9ucy5wdXNoKGBtb3ZlPSR7Y3R4LnByb3RlY3RNb3ZlLmxldmVsfWApO1xuXHRcdFx0XHRleHBpcnlzLnB1c2goY3R4LnByb3RlY3RNb3ZlLmV4cGlyeSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY3R4LnByb3RlY3RDcmVhdGUpIHtcblx0XHRcdFx0cHJvdGVjdGlvbnMucHVzaChgY3JlYXRlPSR7Y3R4LnByb3RlY3RDcmVhdGUubGV2ZWx9YCk7XG5cdFx0XHRcdGV4cGlyeXMucHVzaChjdHgucHJvdGVjdENyZWF0ZS5leHBpcnkpO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcXVlcnkgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3Byb3RlY3QnLFxuXHRcdFx0XHR0aXRsZTogcGFnZVRpdGxlLFxuXHRcdFx0XHR0b2tlbixcblx0XHRcdFx0cHJvdGVjdGlvbnM6IHByb3RlY3Rpb25zLmpvaW4oJ3wnKSxcblx0XHRcdFx0ZXhwaXJ5OiBleHBpcnlzLmpvaW4oJ3wnKSxcblx0XHRcdFx0cmVhc29uOiBjdHguZWRpdFN1bW1hcnksXG5cdFx0XHRcdHdhdGNobGlzdDogY3R4LndhdGNobGlzdE9wdGlvbixcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHR9O1xuXHRcdFx0Ly8gT25seSBzaG93cyB1cCBpbiBsb2dzLCBub3QgcGFnZSBoaXN0b3J5XG5cdFx0XHRpZiAoY3R4LmNoYW5nZVRhZ3MpIHtcblx0XHRcdFx0cXVlcnkudGFncyA9IGN0eC5jaGFuZ2VUYWdzO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGZuQXBwbHlXYXRjaGxpc3RFeHBpcnkoKSkge1xuXHRcdFx0XHRxdWVyeS53YXRjaGxpc3RleHBpcnkgPSBjdHgud2F0Y2hsaXN0RXhwaXJ5O1xuXHRcdFx0fVxuXHRcdFx0aWYgKGN0eC5wcm90ZWN0Q2FzY2FkZSkge1xuXHRcdFx0XHRxdWVyeS5jYXNjYWRlID0gJ3RydWUnO1xuXHRcdFx0fVxuXHRcdFx0Y3R4LnByb3RlY3RQcm9jZXNzQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0XHR3aW5kb3cud2dVTFMoJ+S/neaKpOmhtemdouKApuKApicsICfkv53orbfpoIHpnaLigKbigKYnKSxcblx0XHRcdFx0cXVlcnksXG5cdFx0XHRcdGN0eC5vblByb3RlY3RTdWNjZXNzLFxuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudCxcblx0XHRcdFx0Y3R4Lm9uUHJvdGVjdEZhaWx1cmVcblx0XHRcdCk7XG5cdFx0XHRjdHgucHJvdGVjdFByb2Nlc3NBcGkuc2V0UGFyZW50KHRoaXMpO1xuXHRcdFx0Y3R4LnByb3RlY3RQcm9jZXNzQXBpLnBvc3QoKTtcblx0XHR9O1xuXHRcdGNvbnN0IHNsZWVwID0gKG1pbGxpc2Vjb25kcykgPT4ge1xuXHRcdFx0Y29uc3QgZGVmZXJyZWQgPSAkLkRlZmVycmVkKCk7XG5cdFx0XHRzZXRUaW1lb3V0KGRlZmVycmVkLnJlc29sdmUsIG1pbGxpc2Vjb25kcyk7XG5cdFx0XHRyZXR1cm4gZGVmZXJyZWQ7XG5cdFx0fTtcblx0fTsgLy8gZW5kIE1vcmViaXRzLndpa2kucGFnZVxuXHQvKiAqKioqKioqKioqKioqKioqIE1vcmViaXRzLndpa2kucHJldmlldyAqKioqKioqKioqKioqKioqICovXG5cdC8qKlxuXHQgKiBVc2UgdGhlIEFQSSB0byBwYXJzZSBhIGZyYWdtZW50IG9mIHdpa2l0ZXh0IGFuZCByZW5kZXIgaXQgYXMgSFRNTC5cblx0ICpcblx0ICogVGhlIHN1Z2dlc3RlZCBpbXBsZW1lbnRhdGlvbiBwYXR0ZXJuIChpbiB7QGxpbmsgTW9yZWJpdHMuc2ltcGxlV2luZG93fSBhbmRcblx0ICoge0BsaW5rIE1vcmViaXRzLnF1aWNrRm9ybX0gc2l0dWF0aW9ucykgaXMgdG8gY29uc3RydWN0IGFcblx0ICogYE1vcmViaXRzLndpa2kucHJldmlld2Agb2JqZWN0IGFmdGVyIHJlbmRlcmluZyBhIGBNb3JlYml0cy5xdWlja0Zvcm1gLCBhbmRcblx0ICogYmluZCB0aGUgb2JqZWN0IHRvIGFuIGFyYml0cmFyeSBwcm9wZXJ0eSBvZiB0aGUgZm9ybSAoZS5nLiB8cHJldmlld2VyfCkuXG5cdCAqIEZvciBhbiBleGFtcGxlLCBzZWUgdHdpbmtsZXdhcm4uanMuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpXG5cdCAqIEBjbGFzc1xuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwcmV2aWV3Ym94IC0gVGhlIGVsZW1lbnQgdGhhdCB3aWxsIGNvbnRhaW4gdGhlIHJlbmRlcmVkIEhUTUwsXG5cdCAqIHVzdWFsbHkgYSA8ZGl2PiBlbGVtZW50LlxuXHQgKi9cblx0TW9yZWJpdHMud2lraS5wcmV2aWV3ID0gZnVuY3Rpb24gKHByZXZpZXdib3gpIHtcblx0XHR0aGlzLnByZXZpZXdib3ggPSBwcmV2aWV3Ym94O1xuXHRcdCQocHJldmlld2JveCkuYWRkQ2xhc3MoJ21vcmViaXRzLXByZXZpZXdib3gnKS5oaWRlKCk7XG5cdFx0LyoqXG5cdFx0ICogRGlzcGxheXMgdGhlIHByZXZpZXcgYm94LCBhbmQgYmVnaW5zIGFuIGFzeW5jaHJvbm91cyBhdHRlbXB0XG5cdFx0ICogdG8gcmVuZGVyIHRoZSBzcGVjaWZpZWQgd2lraXRleHQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gd2lraXRleHQgLSBXaWtpdGV4dCB0byByZW5kZXI7IG1vc3QgdGhpbmdzIHNob3VsZCB3b3JrLCBpbmNsdWRpbmcgYHN1YnN0OmAgYW5kIGB+fn5+YC5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gW3BhZ2VUaXRsZV0gLSBPcHRpb25hbCBwYXJhbWV0ZXIgZm9yIHRoZSBwYWdlIHRoaXMgc2hvdWxkIGJlIHJlbmRlcmVkIGFzIGJlaW5nIG9uLCBpZiBvbWl0dGVkIGl0IGlzIHRha2VuIGFzIHRoZSBjdXJyZW50IHBhZ2UuXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IFtzZWN0aW9uVGl0bGVdIC0gSWYgcHJvdmlkZWQsIHJlbmRlciB0aGUgdGV4dCBhcyBhIG5ldyBzZWN0aW9uIHVzaW5nIHRoaXMgYXMgdGhlIHRpdGxlLlxuXHRcdCAqIEByZXR1cm5zIHtqUXVlcnkucHJvbWlzZX1cblx0XHQgKi9cblx0XHR0aGlzLmJlZ2luUmVuZGVyID0gKHdpa2l0ZXh0LCBwYWdlVGl0bGUsIHNlY3Rpb25UaXRsZSkgPT4ge1xuXHRcdFx0JChwcmV2aWV3Ym94KS5zaG93KCk7XG5cdFx0XHRjb25zdCBzdGF0dXNzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdFx0cHJldmlld2JveC5hcHBlbmRDaGlsZChzdGF0dXNzcGFuKTtcblx0XHRcdE1vcmViaXRzLnN0YXR1cy5pbml0KHN0YXR1c3NwYW4pO1xuXHRcdFx0Ly8g6Iul6aG16Z2i5LiN5pivd2lraXRleHTvvIjkvovlpoJKU+OAgUNTU+etie+8ie+8jOmCo+S5iOaJvuS4gOS4qndpa2l0ZXh06aG16Z2i5p2l6aKE6KeI44CCXG5cdFx0XHRsZXQgcGFnZU5hbWUgPSBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJyk7XG5cdFx0XHRpZiAobXcuY29uZmlnLmdldCgnd2dQYWdlQ29udGVudE1vZGVsJykgIT09ICd3aWtpdGV4dCcpIHtcblx0XHRcdFx0cGFnZU5hbWUgPSBgRHJhZnQ6JHtwYWdlTmFtZX1gO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcXVlcnkgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRcdFx0cHJvcDogWyd0ZXh0JywgJ21vZHVsZXMnXSxcblx0XHRcdFx0cHN0OiB0cnVlLFxuXHRcdFx0XHQvLyBQU1QgPSBwcmUtc2F2ZSB0cmFuc2Zvcm07IHRoaXMgbWFrZXMgc3Vic3RpdHV0aW9uIHdvcmsgcHJvcGVybHlcblx0XHRcdFx0cHJldmlldzogdHJ1ZSxcblx0XHRcdFx0dGV4dDogd2lraXRleHQsXG5cdFx0XHRcdHRpdGxlOiBwYWdlVGl0bGUgfHwgcGFnZU5hbWUsXG5cdFx0XHRcdGRpc2FibGVsaW1pdHJlcG9ydDogdHJ1ZSxcblx0XHRcdFx0ZGlzYWJsZWVkaXRzZWN0aW9uOiB0cnVlLFxuXHRcdFx0XHR1c2VsYW5nOiBtdy5jb25maWcuZ2V0KCd3Z1VzZXJMYW5ndWFnZScpLFxuXHRcdFx0XHQvLyBVc2Ugd2dVc2VyTGFuZ3VhZ2UgZm9yIHByZXZpZXdcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHR9O1xuXHRcdFx0aWYgKHNlY3Rpb25UaXRsZSkge1xuXHRcdFx0XHRxdWVyeS5zZWN0aW9uID0gJ25ldyc7XG5cdFx0XHRcdHF1ZXJ5LnNlY3Rpb250aXRsZSA9IHNlY3Rpb25UaXRsZTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHJlbmRlckFwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdFx0d2luZG93LndnVUxTKCfliqDovb3kuK3igKbigKYnLCAn6LyJ5YWl5Lit4oCm4oCmJyksXG5cdFx0XHRcdHF1ZXJ5LFxuXHRcdFx0XHRmblJlbmRlclN1Y2Nlc3MsXG5cdFx0XHRcdG5ldyBNb3JlYml0cy5zdGF0dXMod2luZG93LndnVUxTKCfpooTop4gnLCAn6aCQ6Ka9JykpXG5cdFx0XHQpO1xuXHRcdFx0cmVuZGVyQXBpLnBvc3QoKTtcblx0XHR9O1xuXHRcdGNvbnN0IGZuUmVuZGVyU3VjY2VzcyA9IChhcGlvYmopID0+IHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXBpb2JqLmdldFJlc3BvbnNlKCk7XG5cdFx0XHRjb25zdCBodG1sID0gcmVzcG9uc2UucGFyc2UudGV4dDtcblx0XHRcdGlmICghaHRtbCkge1xuXHRcdFx0XHRhcGlvYmouc3RhdGVsZW0uZXJyb3Iod2luZG93LndnVUxTKCfliqDovb3pooTop4jlpLHotKXvvIzmiJbmqKHmnb/kuLrnqbonLCAn6LyJ5YWl6aCQ6Ka95aSx5pWX77yM5oiW5qih5p2/54K656m6JykpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRwcmV2aWV3Ym94LmlubmVySFRNTCA9IGh0bWw7XG5cdFx0XHRtdy5sb2FkZXIubG9hZChyZXNwb25zZS5wYXJzZS5tb2R1bGVzdHlsZXMpO1xuXHRcdFx0bXcubG9hZGVyLmxvYWQocmVzcG9uc2UucGFyc2UubW9kdWxlcyk7XG5cdFx0XHQvLyB0aGlzIG1ha2VzIGxpbmtzIG9wZW4gaW4gbmV3IHRhYlxuXHRcdFx0JChwcmV2aWV3Ym94KS5maW5kKCdhJykuYXR0cigndGFyZ2V0JywgJ19ibGFuaycpLmF0dHIoJ3JlbCcsICdub29wZW5lciBub3JlZmVycmVyJyk7XG5cdFx0fTtcblx0XHQvKiogSGlkZXMgdGhlIHByZXZpZXcgYm94IGFuZCBjbGVhcnMgaXQuICovXG5cdFx0dGhpcy5jbG9zZVByZXZpZXcgPSAoKSA9PiB7XG5cdFx0XHQkKHByZXZpZXdib3gpLmVtcHR5KCkuaGlkZSgpO1xuXHRcdH07XG5cdH07XG5cdC8qICoqKioqKioqKioqKioqKiogTW9yZWJpdHMud2lraXRleHQgKioqKioqKioqKioqKioqKiAqL1xuXHQvKipcblx0ICogV2lraXRleHQgbWFuaXB1bGF0aW9uLlxuXHQgKlxuXHQgKiBAbmFtZXNwYWNlIE1vcmViaXRzLndpa2l0ZXh0XG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0c1xuXHQgKi9cblx0TW9yZWJpdHMud2lraXRleHQgPSB7fTtcblx0LyoqXG5cdCAqIEdldCB0aGUgdmFsdWUgb2YgZXZlcnkgcGFyYW1ldGVyIGZvdW5kIGluIHRoZSB3aWtpdGV4dCBvZiBhIGdpdmVuIHRlbXBsYXRlLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraXRleHRcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBXaWtpdGV4dCBjb250YWluaW5nIGEgdGVtcGxhdGUuXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9MF0gLSBJbmRleCBub3Rpbmcgd2hlcmUgaW4gdGhlIHRleHQgdGhlIHRlbXBsYXRlIGJlZ2lucy5cblx0ICogQHJldHVybnMge09iamVjdH0gYHtuYW1lOiB0ZW1wbGF0ZU5hbWUsIHBhcmFtZXRlcnM6IHtrZXk6IHZhbHVlfX1gLlxuXHQgKi9cblx0TW9yZWJpdHMud2lraXRleHQucGFyc2VUZW1wbGF0ZSA9ICh0ZXh0LCBzdGFydCkgPT4ge1xuXHRcdHN0YXJ0IHx8PSAwO1xuXHRcdGNvbnN0IGxldmVsID0gW107IC8vIFRyYWNrIG9mIGhvdyBkZWVwIHdlIGFyZSAoe3ssIHt7eywgb3IgW1spXG5cdFx0bGV0IGNvdW50ID0gLTE7IC8vIE51bWJlciBvZiBwYXJhbWV0ZXJzIGZvdW5kXG5cdFx0bGV0IHVubmFtZWQgPSAwOyAvLyBLZWVwIHRyYWNrIG9mIHdoYXQgbnVtYmVyIGFuIHVubmFtZWQgcGFyYW1ldGVyIHNob3VsZCByZWNlaXZlXG5cdFx0bGV0IGVxdWFscyA9IC0xOyAvLyBBZnRlciBmaW5kaW5nIFwiPVwiIGJlZm9yZSBhIHBhcmFtZXRlciwgdGhlIGluZGV4OyBvdGhlcndpc2UsIC0xXG5cdFx0bGV0IGN1cnJlbnQgPSAnJztcblx0XHRjb25zdCByZXN1bHQgPSB7XG5cdFx0XHRuYW1lOiAnJyxcblx0XHRcdHBhcmFtZXRlcnM6IHt9LFxuXHRcdH07XG5cdFx0bGV0IGtleTtcblx0XHRsZXQgdmFsdWU7XG5cdFx0LyoqXG5cdFx0ICogRnVuY3Rpb24gdG8gaGFuZGxlIGZpbmRpbmcgcGFyYW1ldGVyIHZhbHVlcy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZpbmFsPWZhbHNlXSAtIFdoZXRoZXIgdGhpcyBpcyB0aGUgZmluYWxcblx0XHQgKiBwYXJhbWV0ZXIgYW5kIHdlIG5lZWQgdG8gcmVtb3ZlIHRoZSB0cmFpbGluZyBgfX1gLlxuXHRcdCAqL1xuXHRcdGNvbnN0IGZpbmRQYXJhbSA9IChmaW5hbCkgPT4ge1xuXHRcdFx0Ly8gTm90aGluZyBmb3VuZCB5ZXQsIHRoaXMgbXVzdCBiZSB0aGUgdGVtcGxhdGUgbmFtZVxuXHRcdFx0aWYgKGNvdW50ID09PSAtMSkge1xuXHRcdFx0XHRyZXN1bHQubmFtZSA9IGN1cnJlbnQuc2xpY2UoMikudHJpbSgpO1xuXHRcdFx0XHQrK2NvdW50O1xuXHRcdFx0fSBlbHNlIGlmIChlcXVhbHMgPT09IC0xKSB7XG5cdFx0XHRcdC8vIEluIGEgcGFyYW1ldGVyXG5cdFx0XHRcdC8vIE5vIGVxdWFscywgc28gaXQgbXVzdCBiZSB1bm5hbWVkOyBubyB0cmltIHNpbmNlIHdoaXRlc3BhY2UgYWxsb3dlZFxuXHRcdFx0XHRjb25zdCBwYXJhbSA9IGZpbmFsID8gY3VycmVudC5zbGljZShlcXVhbHMgKyAxLCAtMikgOiBjdXJyZW50O1xuXHRcdFx0XHRpZiAocGFyYW0pIHtcblx0XHRcdFx0XHRyZXN1bHQucGFyYW1ldGVyc1srK3VubmFtZWRdID0gcGFyYW07XG5cdFx0XHRcdFx0Kytjb3VudDtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gV2UgZm91bmQgYW4gZXF1YWxzLCBzbyBzYXZlIHRoZSBwYXJhbWV0ZXIgYXMga2V5OiB2YWx1ZVxuXHRcdFx0XHRrZXkgPSBjdXJyZW50LnNsaWNlKDAsIE1hdGgubWF4KDAsIGVxdWFscykpLnRyaW0oKTtcblx0XHRcdFx0dmFsdWUgPSBmaW5hbCA/IGN1cnJlbnQuc2xpY2UoZXF1YWxzICsgMSwgLTIpLnRyaW0oKSA6IGN1cnJlbnQuc2xpY2UoTWF0aC5tYXgoMCwgZXF1YWxzICsgMSkpLnRyaW0oKTtcblx0XHRcdFx0cmVzdWx0LnBhcmFtZXRlcnNba2V5XSA9IHZhbHVlO1xuXHRcdFx0XHRlcXVhbHMgPSAtMTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdGZvciAobGV0IGkgPSBzdGFydDsgaSA8IHRleHQubGVuZ3RoOyArK2kpIHtcblx0XHRcdGNvbnN0IHRlc3QzID0gdGV4dC5zbGljZShpLCBpICsgMyk7XG5cdFx0XHRpZiAodGVzdDMgPT09ICd7e3snIHx8ICh0ZXN0MyA9PT0gJ319fScgJiYgbGV2ZWwuYXQoLTEpID09PSAzKSkge1xuXHRcdFx0XHRjdXJyZW50ICs9IHRlc3QzO1xuXHRcdFx0XHRpICs9IDI7XG5cdFx0XHRcdGlmICh0ZXN0MyA9PT0gJ3t7eycpIHtcblx0XHRcdFx0XHRsZXZlbC5wdXNoKDMpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGxldmVsLnBvcCgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgdGVzdDIgPSB0ZXh0LnNsaWNlKGksIGkgKyAyKTtcblx0XHRcdC8vIEVudGVyaW5nIGEgdGVtcGxhdGUgKG9yIGxpbmspXG5cdFx0XHRpZiAodGVzdDIgPT09ICd7eycgfHwgdGVzdDIgPT09ICdbWycpIHtcblx0XHRcdFx0Y3VycmVudCArPSB0ZXN0Mjtcblx0XHRcdFx0KytpO1xuXHRcdFx0XHRpZiAodGVzdDIgPT09ICd7eycpIHtcblx0XHRcdFx0XHRsZXZlbC5wdXNoKDIpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGxldmVsLnB1c2goJ3dsJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHQvLyBFaXRoZXIgbGVhdmluZyBhIGxpbmsgb3IgdGVtcGxhdGUvcGFyc2VyIGZ1bmN0aW9uXG5cdFx0XHRpZiAoKHRlc3QyID09PSAnfX0nICYmIGxldmVsLmF0KC0xKSA9PT0gMikgfHwgKHRlc3QyID09PSAnXV0nICYmIGxldmVsLmF0KC0xKSA9PT0gJ3dsJykpIHtcblx0XHRcdFx0Y3VycmVudCArPSB0ZXN0Mjtcblx0XHRcdFx0KytpO1xuXHRcdFx0XHRsZXZlbC5wb3AoKTtcblx0XHRcdFx0Ly8gRmluZCB0aGUgZmluYWwgcGFyYW1ldGVyIGlmIHRoaXMgcmVhbGx5IGlzIHRoZSBlbmRcblx0XHRcdFx0aWYgKHRlc3QyID09PSAnfX0nICYmIGxldmVsLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdGZpbmRQYXJhbSh0cnVlKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGlmICh0ZXh0LmNoYXJBdChpKSA9PT0gJ3wnICYmIGxldmVsLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHQvLyBBbm90aGVyIHBpcGUgZm91bmQsIHRvcGxldmVsLCBzbyBwYXJhbWV0ZXIgY29taW5nIHVwIVxuXHRcdFx0XHRmaW5kUGFyYW0oKTtcblx0XHRcdFx0Y3VycmVudCA9ICcnO1xuXHRcdFx0fSBlbHNlIGlmIChlcXVhbHMgPT09IC0xICYmIHRleHQuY2hhckF0KGkpID09PSAnPScgJiYgbGV2ZWwubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRcdC8vIEVxdWFscyBmb3VuZCwgdG9wbGV2ZWxcblx0XHRcdFx0ZXF1YWxzID0gY3VycmVudC5sZW5ndGg7XG5cdFx0XHRcdGN1cnJlbnQgKz0gdGV4dC5jaGFyQXQoaSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBKdXN0IGFkdmFuY2UgdGhlIHBvc2l0aW9uXG5cdFx0XHRcdGN1cnJlbnQgKz0gdGV4dC5jaGFyQXQoaSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH07XG5cdC8qKlxuXHQgKiBBZGp1c3QgYW5kIG1hbmlwdWxhdGUgdGhlIHdpa2l0ZXh0IG9mIGEgcGFnZS5cblx0ICpcblx0ICogQGNsYXNzXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpdGV4dFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIFdpa2l0ZXh0IHRvIGJlIG1hbmlwdWxhdGVkLlxuXHQgKi9cblx0TW9yZWJpdHMud2lraXRleHQucGFnZSA9IGZ1bmN0aW9uICh0ZXh0KSB7XG5cdFx0dGhpcy50ZXh0ID0gdGV4dDtcblx0fTtcblx0TW9yZWJpdHMud2lraXRleHQucGFnZS5wcm90b3R5cGUgPSB7XG5cdFx0dGV4dDogJycsXG5cdFx0LyoqXG5cdFx0ICogUmVtb3ZlcyBsaW5rcyB0byBgbGlua190YXJnZXRgIGZyb20gdGhlIHBhZ2UgdGV4dC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBsaW5rVGFyZ2V0XG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLndpa2l0ZXh0LnBhZ2V9XG5cdFx0ICovXG5cdFx0cmVtb3ZlTGluayhsaW5rVGFyZ2V0KSB7XG5cdFx0XHRjb25zdCBtd1RpdGxlID0gbXcuVGl0bGUubmV3RnJvbVRleHQobGlua1RhcmdldCk7XG5cdFx0XHRjb25zdCBuYW1lc3BhY2VJRCA9IG13VGl0bGUuZ2V0TmFtZXNwYWNlSWQoKTtcblx0XHRcdGNvbnN0IHRpdGxlID0gbXdUaXRsZS5nZXRNYWluVGV4dCgpO1xuXHRcdFx0bGV0IGxpbmtSZWdleFN0cmluZyA9ICcnO1xuXHRcdFx0aWYgKG5hbWVzcGFjZUlEICE9PSAwKSB7XG5cdFx0XHRcdGxpbmtSZWdleFN0cmluZyA9IGAke01vcmViaXRzLm5hbWVzcGFjZVJlZ2V4KG5hbWVzcGFjZUlEKX06YDtcblx0XHRcdH1cblx0XHRcdGxpbmtSZWdleFN0cmluZyArPSBNb3JlYml0cy5wYWdlTmFtZVJlZ2V4KHRpdGxlKTtcblx0XHRcdC8vIEZvciBtb3N0IG5hbWVzcGFjZXMsIHVubGluayBib3RoIFtbVXNlcjpUZXN0XV0gYW5kIFtbOlVzZXI6VGVzdF1dXG5cdFx0XHQvLyBGb3IgZmlsZXMgYW5kIGNhdGVnb3JpZXMsIG9ubHkgdW5saW5rIFtbOkNhdGVnb3J5OlRlc3RdXS4gRG8gbm90IHVubGluayBbW0NhdGVnb3J5OlRlc3RdXVxuXHRcdFx0Y29uc3QgaXNGaWxlT3JDYXRlZ29yeSA9IFs2LCAxNF0uaW5jbHVkZXMobmFtZXNwYWNlSUQpO1xuXHRcdFx0Y29uc3QgY29sb24gPSBpc0ZpbGVPckNhdGVnb3J5ID8gJzonIDogJzo/Jztcblx0XHRcdGNvbnN0IHNpbXBsZUxpbmtSZWdleCA9IG5ldyBSZWdFeHAoYFxcXFxbXFxcXFske2NvbG9ufSgke2xpbmtSZWdleFN0cmluZ30pXFxcXF1cXFxcXWAsICdnJyk7XG5cdFx0XHRjb25zdCBwaXBlZExpbmtSZWdleCA9IG5ldyBSZWdFeHAoYFxcXFxbXFxcXFske2NvbG9ufSR7bGlua1JlZ2V4U3RyaW5nfVxcXFx8KC4rPylcXFxcXVxcXFxdYCwgJ2cnKTtcblx0XHRcdHRoaXMudGV4dCA9IHRoaXMudGV4dC5yZXBsYWNlKHNpbXBsZUxpbmtSZWdleCwgJyQxJykucmVwbGFjZShwaXBlZExpbmtSZWdleCwgJyQxJyk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIENvbW1lbnRzIG91dCBpbWFnZXMgZnJvbSBwYWdlIHRleHQ7IGlmIHVzZWQgaW4gYSBnYWxsZXJ5LCBkZWxldGVzIHRoZSB3aG9sZSBsaW5lLlxuXHRcdCAqIElmIHVzZWQgYXMgYSB0ZW1wbGF0ZSBhcmd1bWVudCAobm90IG5lY2Vzc2FyaWx5IHdpdGggYEZpbGU6YCBwcmVmaXgpLCB0aGUgdGVtcGxhdGUgcGFyYW1ldGVyIGlzIGNvbW1lbnRlZCBvdXQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gaW1hZ2UgLSBJbWFnZSBuYW1lIHdpdGhvdXQgYEZpbGU6YCBwcmVmaXguXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IFtyZWFzb25dIC0gUmVhc29uIHRvIGJlIGluY2x1ZGVkIGluIGNvbW1lbnQsIGFsb25nc2lkZSB0aGUgY29tbWVudGVkLW91dCBpbWFnZS5cblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMud2lraXRleHQucGFnZX1cblx0XHQgKi9cblx0XHRjb21tZW50T3V0SW1hZ2UoaW1hZ2UsIHJlYXNvbikge1xuXHRcdFx0Y29uc3QgdW5iaW5kZXIgPSBuZXcgTW9yZWJpdHMudW5iaW5kZXIodGhpcy50ZXh0KTtcblx0XHRcdHVuYmluZGVyLnVuYmluZCgnPCEtLScsICctLT4nKTtcblx0XHRcdHJlYXNvbiA9IHJlYXNvbiA/IGAke3JlYXNvbn06IGAgOiAnJztcblx0XHRcdGNvbnN0IGltYWdlUmVnZXhTdHJpbmcgPSBNb3JlYml0cy5wYWdlTmFtZVJlZ2V4KGltYWdlKTtcblx0XHRcdC8vIENoZWNrIGZvciBub3JtYWwgaW1hZ2UgbGlua3MsIGkuZS4gW1tGaWxlOkZvb2Jhci5wbmd8Li4uXV1cblx0XHRcdC8vIFdpbGwgZWF0IHRoZSB3aG9sZSBsaW5rXG5cdFx0XHRjb25zdCBsaW5rc1JlZ2V4ID0gbmV3IFJlZ0V4cChcblx0XHRcdFx0YFxcXFxbXFxcXFske01vcmViaXRzLm5hbWVzcGFjZVJlZ2V4KDYpfTpcXFxccyoke2ltYWdlUmVnZXhTdHJpbmd9XFxcXHMqW1xcXFx8KD86XFxcXF1cXFxcXSldYFxuXHRcdFx0KTtcblx0XHRcdGNvbnN0IGFsbExpbmtzID0gTW9yZWJpdHMuc3RyaW5nLnNwbGl0V2VpZ2h0ZWRCeUtleXModW5iaW5kZXIuY29udGVudCwgJ1tbJywgJ11dJyk7XG5cdFx0XHRmb3IgKGNvbnN0IGFsbExpbmsgb2YgYWxsTGlua3MpIHtcblx0XHRcdFx0aWYgKGxpbmtzUmVnZXgudGVzdChhbGxMaW5rKSkge1xuXHRcdFx0XHRcdGNvbnN0IHJlcGxhY2VtZW50ID0gYDwhLS0gJHtyZWFzb259JHthbGxMaW5rfSAtLT5gO1xuXHRcdFx0XHRcdHVuYmluZGVyLmNvbnRlbnQgPSB1bmJpbmRlci5jb250ZW50LnJlcGxhY2UoYWxsTGluaywgcmVwbGFjZW1lbnQpO1xuXHRcdFx0XHRcdC8vIHVuYmluZCB0aGUgbmV3bHkgY3JlYXRlZCBjb21tZW50c1xuXHRcdFx0XHRcdHVuYmluZGVyLnVuYmluZCgnPCEtLScsICctLT4nKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ly8gQ2hlY2sgZm9yIGdhbGxlcnkgaW1hZ2VzLCBpLmUuIGluc3RhbmNlcyB0aGF0IG11c3Qgc3RhcnQgb24gYSBuZXcgbGluZSxcblx0XHRcdC8vIGV2ZW50dWFsbHkgcHJlY2VkZWQgd2l0aCBzb21lIHNwYWNlLCBhbmQgbXVzdCBpbmNsdWRlIEZpbGU6IHByZWZpeFxuXHRcdFx0Ly8gV2lsbCBlYXQgdGhlIHdob2xlIGxpbmUuXG5cdFx0XHRjb25zdCBnYWxsZXJ5SW1hZ2VSZWdleCA9IG5ldyBSZWdFeHAoXG5cdFx0XHRcdGAoXlxcXFxzKiR7TW9yZWJpdHMubmFtZXNwYWNlUmVnZXgoNil9OlxcXFxzKiR7aW1hZ2VSZWdleFN0cmluZ31cXFxccyooPzpcXFxcfC4qPyR8JCkpYCxcblx0XHRcdFx0J21nJ1xuXHRcdFx0KTtcblx0XHRcdHVuYmluZGVyLmNvbnRlbnQgPSB1bmJpbmRlci5jb250ZW50LnJlcGxhY2UoZ2FsbGVyeUltYWdlUmVnZXgsIGA8IS0tICR7cmVhc29ufSQxIC0tPmApO1xuXHRcdFx0Ly8gdW5iaW5kIHRoZSBuZXdseSBjcmVhdGVkIGNvbW1lbnRzXG5cdFx0XHR1bmJpbmRlci51bmJpbmQoJzwhLS0nLCAnLS0+Jyk7XG5cdFx0XHQvLyBDaGVjayBmcmVlIGltYWdlIHVzYWdlcywgZm9yIGV4YW1wbGUgYXMgdGVtcGxhdGUgYXJndW1lbnRzLCBtaWdodCBoYXZlIHRoZSBGaWxlOiBwcmVmaXggZXhjbHVkZWQsIGJ1dCBtdXN0IGJlIHByZWNlZGVkIGJ5IGFuIHxcblx0XHRcdC8vIFdpbGwgb25seSBlYXQgdGhlIGltYWdlIG5hbWUgYW5kIHRoZSBwcmVjZWRpbmcgYmFyIGFuZCBhbiBldmVudHVhbCBuYW1lZCBwYXJhbWV0ZXJcblx0XHRcdGNvbnN0IGZyZWVJbWFnZVJlZ2V4ID0gbmV3IFJlZ0V4cChcblx0XHRcdFx0YChcXFxcfFxcXFxzKig/OltcXFxcd1xcXFxzXStcXFxcPSk/XFxcXHMqKD86JHtNb3JlYml0cy5uYW1lc3BhY2VSZWdleCg2KX06XFxcXHMqKT8ke2ltYWdlUmVnZXhTdHJpbmd9KWAsXG5cdFx0XHRcdCdtZydcblx0XHRcdCk7XG5cdFx0XHR1bmJpbmRlci5jb250ZW50ID0gdW5iaW5kZXIuY29udGVudC5yZXBsYWNlKGZyZWVJbWFnZVJlZ2V4LCBgPCEtLSAke3JlYXNvbn0kMSAtLT5gKTtcblx0XHRcdC8vIFJlYmluZCB0aGUgY29udGVudCBub3csIHdlIGFyZSBkb25lIVxuXHRcdFx0dGhpcy50ZXh0ID0gdW5iaW5kZXIucmViaW5kKCk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIENvbnZlcnRzIHVzZXMgb2YgW1tGaWxlOmBpbWFnZWBdXSB0byBbW0ZpbGU6YGltYWdlYHxgZGF0YWBdXS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBpbWFnZSAtIEltYWdlIG5hbWUgd2l0aG91dCBGaWxlOiBwcmVmaXguXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGRhdGEgLSBUaGUgZGlzcGxheSBvcHRpb25zLlxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy53aWtpdGV4dC5wYWdlfVxuXHRcdCAqL1xuXHRcdGFkZFRvSW1hZ2VDb21tZW50KGltYWdlLCBkYXRhKSB7XG5cdFx0XHRjb25zdCBpbWFnZVJlZ2V4U3RyaW5nID0gTW9yZWJpdHMucGFnZU5hbWVSZWdleChpbWFnZSk7XG5cdFx0XHRjb25zdCBsaW5rc1JlZ2V4ID0gbmV3IFJlZ0V4cChcblx0XHRcdFx0YFxcXFxbXFxcXFske01vcmViaXRzLm5hbWVzcGFjZVJlZ2V4KDYpfTpcXFxccyoke2ltYWdlUmVnZXhTdHJpbmd9XFxcXHMqW1xcXFx8KD86XFxcXF1cXFxcXSldYFxuXHRcdFx0KTtcblx0XHRcdGNvbnN0IGFsbExpbmtzID0gTW9yZWJpdHMuc3RyaW5nLnNwbGl0V2VpZ2h0ZWRCeUtleXModGhpcy50ZXh0LCAnW1snLCAnXV0nKTtcblx0XHRcdGZvciAobGV0IHJlcGxhY2VtZW50IG9mIGFsbExpbmtzKSB7XG5cdFx0XHRcdGlmIChsaW5rc1JlZ2V4LnRlc3QocmVwbGFjZW1lbnQpKSB7XG5cdFx0XHRcdFx0Ly8ganVzdCBwdXQgaXQgYXQgdGhlIGVuZD9cblx0XHRcdFx0XHRyZXBsYWNlbWVudCA9IHJlcGxhY2VtZW50LnJlcGxhY2UoL1xcXVxcXSQvLCBgfCR7ZGF0YX1dXWApO1xuXHRcdFx0XHRcdHRoaXMudGV4dCA9IHRoaXMudGV4dC5yZXBsYWNlKHJlcGxhY2VtZW50LCByZXBsYWNlbWVudCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGNvbnN0IGdhbGxlcnlSZWdleCA9IG5ldyBSZWdFeHAoYF4oXFxcXHMqJHtpbWFnZVJlZ2V4U3RyaW5nfS4qPylcXFxcfD8oLio/KSRgLCAnbWcnKTtcblx0XHRcdGNvbnN0IG5ld3RleHQgPSBgJDF8JDIgJHtkYXRhfWA7XG5cdFx0XHR0aGlzLnRleHQgPSB0aGlzLnRleHQucmVwbGFjZShnYWxsZXJ5UmVnZXgsIG5ld3RleHQpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBSZW1vdmUgYWxsIHRyYW5zY2x1c2lvbnMgb2YgYSB0ZW1wbGF0ZSBmcm9tIHBhZ2UgdGV4dC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wbGF0ZSAtIFBhZ2UgbmFtZSB3aG9zZSB0cmFuc2NsdXNpb25zIGFyZSB0byBiZSByZW1vdmVkLFxuXHRcdCAqIGluY2x1ZGUgbmFtZXNwYWNlIHByZWZpeCBvbmx5IGlmIG5vdCBpbiB0ZW1wbGF0ZSBuYW1lc3BhY2UuXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLndpa2l0ZXh0LnBhZ2V9XG5cdFx0ICovXG5cdFx0cmVtb3ZlVGVtcGxhdGUodGVtcGxhdGUpIHtcblx0XHRcdGNvbnN0IHRlbXBsYXRlUmVnZXhTdHJpbmcgPSBNb3JlYml0cy5wYWdlTmFtZVJlZ2V4KHRlbXBsYXRlKTtcblx0XHRcdGNvbnN0IGxpbmtzUmVnZXggPSBuZXcgUmVnRXhwKFxuXHRcdFx0XHRgXFxcXHtcXFxceyg/OiR7TW9yZWJpdHMubmFtZXNwYWNlUmVnZXgoMTApfTopP1xcXFxzKiR7dGVtcGxhdGVSZWdleFN0cmluZ31cXFxccypbXFxcXHwoPzpcXFxcfVxcXFx9KV1gXG5cdFx0XHQpO1xuXHRcdFx0Y29uc3QgYWxsVGVtcGxhdGVzID0gTW9yZWJpdHMuc3RyaW5nLnNwbGl0V2VpZ2h0ZWRCeUtleXModGhpcy50ZXh0LCAne3snLCAnfX0nLCBbJ3t7eycsICd9fX0nXSk7XG5cdFx0XHRmb3IgKGNvbnN0IGFsbFRlbXBsYXRlIG9mIGFsbFRlbXBsYXRlcykge1xuXHRcdFx0XHRpZiAobGlua3NSZWdleC50ZXN0KGFsbFRlbXBsYXRlKSkge1xuXHRcdFx0XHRcdHRoaXMudGV4dCA9IHRoaXMudGV4dC5yZXBsYWNlKGFsbFRlbXBsYXRlLCAnJyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogU21hcnRseSBpbnNlcnQgYSB0YWcgYXRvcCBwYWdlIHRleHQgYnV0IGFmdGVyIHNwZWNpZmllZCB0ZW1wbGF0ZXMsXG5cdFx0ICogc3VjaCBhcyBoYXRub3Rlcywgc2hvcnQgZGVzY3JpcHRpb24sIG9yIGRlbGV0aW9uIGFuZCBwcm90ZWN0aW9uIHRlbXBsYXRlcy5cblx0XHQgKiBOb3RhYmx5LCBkb2VzICpub3QqIGluc2VydCBhIG5ld2xpbmUgYWZ0ZXIgdGhlIHRhZy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB0YWcgLSBUaGUgdGFnIHRvIGJlIGluc2VydGVkLlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSByZWdleCAtIFRlbXBsYXRlcyBhZnRlciB3aGljaCB0byBpbnNlcnQgdGFnLFxuXHRcdCAqIGdpdmVuIGFzIGVpdGhlciBhcyBhIChyZWdleC12YWxpZCkgc3RyaW5nIG9yIGFuIGFycmF5IHRvIGJlIGpvaW5lZCBieSBwaXBlcy5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gW2ZsYWdzPWldIC0gUmVnZXggZmxhZ3MgdG8gYXBwbHkuICBgJydgIHRvIHByb3ZpZGUgbm8gZmxhZ3M7XG5cdFx0ICogb3RoZXIgZmFsc2V5IHZhbHVlcyB3aWxsIGRlZmF1bHQgdG8gYGlgLlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBbcHJlUmVnZXhdIC0gT3B0aW9uYWwgcmVnZXggc3RyaW5nIG9yIGFycmF5IHRvIG1hdGNoXG5cdFx0ICogYmVmb3JlIGFueSB0ZW1wbGF0ZSBtYXRjaGVzIChpLmUuIGJlZm9yZSBge3tgKSwgc3VjaCBhcyBodG1sIGNvbW1lbnRzLlxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy53aWtpdGV4dC5wYWdlfVxuXHRcdCAqL1xuXHRcdGluc2VydEFmdGVyVGVtcGxhdGVzKHRhZywgcmVnZXgsIGZsYWdzLCBwcmVSZWdleCkge1xuXHRcdFx0aWYgKHRhZyA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ05vIHRhZyBwcm92aWRlZCcpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gLmxlbmd0aCBpcyBvbmx5IGEgcHJvcGVydHkgb2Ygc3RyaW5ncyBhbmQgYXJyYXlzIHNvIHdlXG5cdFx0XHQvLyBzaG91bGRuJ3QgbmVlZCB0byBjaGVjayB0eXBlXG5cdFx0XHRpZiAocmVnZXggPT09IHVuZGVmaW5lZCB8fCAhcmVnZXgubGVuZ3RoKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignTm8gcmVnZXggcHJvdmlkZWQnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShyZWdleCkpIHtcblx0XHRcdFx0cmVnZXggPSByZWdleC5qb2luKCd8Jyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodHlwZW9mIGZsYWdzICE9PSAnc3RyaW5nJykge1xuXHRcdFx0XHRmbGFncyA9ICdpJztcblx0XHRcdH1cblx0XHRcdGlmICghcHJlUmVnZXggfHwgIXByZVJlZ2V4Lmxlbmd0aCkge1xuXHRcdFx0XHRwcmVSZWdleCA9ICcnO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHByZVJlZ2V4KSkge1xuXHRcdFx0XHRwcmVSZWdleCA9IHByZVJlZ2V4LmpvaW4oJ3wnKTtcblx0XHRcdH1cblx0XHRcdC8vIFJlZ2V4IGlzIGV4dHJhIGNvbXBsaWNhdGVkIHRvIGFsbG93IGZvciB0ZW1wbGF0ZXMgd2l0aFxuXHRcdFx0Ly8gcGFyYW1ldGVycyBhbmQgdG8gaGFuZGxlIHdoaXRlc3BhY2UgcHJvcGVybHlcblx0XHRcdHRoaXMudGV4dCA9IHRoaXMudGV4dC5yZXBsYWNlKFxuXHRcdFx0XHRuZXcgUmVnRXhwKFxuXHRcdFx0XHRcdC8vIGxlYWRpbmcgd2hpdGVzcGFjZVxuXHRcdFx0XHRcdC8vIGNhcHR1cmUgdGVtcGxhdGUocylcblx0XHRcdFx0XHQvLyBQcmUtdGVtcGxhdGUgcmVnZXgsIHN1Y2ggYXMgbGVhZGluZyBodG1sIGNvbW1lbnRzXG5cdFx0XHRcdFx0Ly8gYmVnaW4gdGVtcGxhdGUgZm9ybWF0XG5cdFx0XHRcdFx0Ly8gVGVtcGxhdGUgcmVnZXhcblx0XHRcdFx0XHQvLyBlbmQgbWFpbiB0ZW1wbGF0ZSBuYW1lLCBvcHRpb25hbGx5IHdpdGggYSBudW1iZXJcblx0XHRcdFx0XHQvLyBQcm9iYWJseSByZW1vdmUgdGhlICg/OikgdGhvdWdoXG5cdFx0XHRcdFx0Ly8gdGVtcGxhdGUgcGFyYW1ldGVyc1xuXHRcdFx0XHRcdC8vIGVuZCB0ZW1wbGF0ZSBmb3JtYXRcblx0XHRcdFx0XHQvLyBlbmQgY2FwdHVyZVxuXHRcdFx0XHRcdC8vIHRyYWlsaW5nIHdoaXRlc3BhY2Vcblx0XHRcdFx0XHRgXlxcXFxzKig/OigoPzpcXFxccyoke1xuXHRcdFx0XHRcdFx0Ly8gUHJlLXRlbXBsYXRlIHJlZ2V4LCBzdWNoIGFzIGxlYWRpbmcgaHRtbCBjb21tZW50c1xuXHRcdFx0XHRcdFx0cHJlUmVnZXhcblx0XHRcdFx0XHR9fFxcXFx7XFxcXHtcXFxccyooPzoke1xuXHRcdFx0XHRcdFx0Ly8gVGVtcGxhdGUgcmVnZXhcblx0XHRcdFx0XHRcdHJlZ2V4XG5cdFx0XHRcdFx0fSlcXFxcZCpcXFxccyooXFxcXHwoPzpcXFxce1xcXFx7W157fV0qXFxcXH1cXFxcfXxbXnt9XSkqKT9cXFxcfVxcXFx9KSsoPzpcXFxccypcXFxcbik/KVxcXFxzKik/YCxcblx0XHRcdFx0XHRmbGFnc1xuXHRcdFx0XHQpLFxuXHRcdFx0XHRgJDEke3RhZ31gXG5cdFx0XHQpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBHZXQgdGhlIG1hbmlwdWxhdGVkIHdpa2l0ZXh0LlxuXHRcdCAqXG5cdFx0ICogQHJldHVybnMge3N0cmluZ31cblx0XHQgKi9cblx0XHRnZXRUZXh0KCkge1xuXHRcdFx0cmV0dXJuIHRoaXMudGV4dDtcblx0XHR9LFxuXHR9O1xuXHQvKiAqKioqKioqKioqKiBNb3JlYml0cy51c2Vyc3BhY2VMb2dnZXIgKioqKioqKioqKioqICovXG5cdC8qKlxuXHQgKiBIYW5kbGVzIGxvZ2dpbmcgYWN0aW9ucyB0byBhIHVzZXJzcGFjZSBsb2cuXG5cdCAqIFVzZWQgaW4gQ1NELCBQUk9ELCBhbmQgWEZELlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHNcblx0ICogQGNsYXNzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBsb2dQYWdlTmFtZSAtIFRpdGxlIG9mIHRoZSBzdWJwYWdlIG9mIHRoZSBjdXJyZW50IHVzZXIncyBsb2cuXG5cdCAqL1xuXHRNb3JlYml0cy51c2Vyc3BhY2VMb2dnZXIgPSBmdW5jdGlvbiAobG9nUGFnZU5hbWUpIHtcblx0XHRpZiAoIWxvZ1BhZ2VOYW1lKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ25vIGxvZyBwYWdlIG5hbWUgc3BlY2lmaWVkJyk7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIFRoZSB0ZXh0IHRvIHByZWZpeCB0aGUgbG9nIHdpdGggdXBvbiBjcmVhdGlvbiwgZGVmYXVsdHMgdG8gZW1wdHkuXG5cdFx0ICpcblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMuaW5pdGlhbFRleHQgPSAnJztcblx0XHQvKipcblx0XHQgKiBUaGUgaGVhZGVyIGxldmVsIHRvIHVzZSBmb3IgbW9udGhzLCBkZWZhdWx0cyB0byAzIChgPT09YCkuXG5cdFx0ICpcblx0XHQgKiBAdHlwZSB7bnVtYmVyfVxuXHRcdCAqL1xuXHRcdHRoaXMuaGVhZGVyTGV2ZWwgPSAzO1xuXHRcdHRoaXMuY2hhbmdlVGFncyA9ICcnO1xuXHRcdC8qKlxuXHRcdCAqIExvZyB0aGUgZW50cnkuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gbG9nVGV4dCAtIERvZXNuJ3QgaW5jbHVkZSBsZWFkaW5nIGAjYCBvciBgKmAuXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHN1bW1hcnlUZXh0IC0gRWRpdCBzdW1tYXJ5LlxuXHRcdCAqIEByZXR1cm5zIHtKUXVlcnkuUHJvbWlzZX1cblx0XHQgKi9cblx0XHR0aGlzLmxvZyA9IGZ1bmN0aW9uIChsb2dUZXh0LCBzdW1tYXJ5VGV4dCkge1xuXHRcdFx0Y29uc3QgZGVmID0gJC5EZWZlcnJlZCgpO1xuXHRcdFx0aWYgKCFsb2dUZXh0KSB7XG5cdFx0XHRcdHJldHVybiBkZWYucmVqZWN0KCk7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBwYWdlID0gbmV3IE1vcmViaXRzLndpa2kucGFnZShcblx0XHRcdFx0YFVzZXI6JHttdy5jb25maWcuZ2V0KCd3Z1VzZXJOYW1lJyl9LyR7bG9nUGFnZU5hbWV9YCxcblx0XHRcdFx0d2luZG93LndnVUxTKCflsIbpobnnm67liqDlhaXliLDnlKjmiLfnqbrpl7Tml6Xlv5cnLCAn5bCH6aCF55uu5Yqg5YWl5Yiw5L2/55So6ICF56m66ZaT5pel6KqMJylcblx0XHRcdCk7IC8vIG1ha2UgdGhpcyAnLi4uIHRvICcgKyBsb2dQYWdlTmFtZSA/XG5cdFx0XHRwYWdlLmxvYWQoKHBhZ2VvYmopID0+IHtcblx0XHRcdFx0Ly8gYWRkIGJsdXJiIGlmIGxvZyBwYWdlIGRvZXNuJ3QgZXhpc3Qgb3IgaXMgYmxhbmtcblx0XHRcdFx0bGV0IHRleHQgPSBwYWdlb2JqLmdldFBhZ2VUZXh0KCkgfHwgdGhpcy5pbml0aWFsVGV4dDtcblx0XHRcdFx0Ly8gY3JlYXRlIG1vbnRobHkgaGVhZGVyIGlmIGl0IGRvZXNuJ3QgZXhpc3QgYWxyZWFkeVxuXHRcdFx0XHRjb25zdCBkYXRlID0gbmV3IE1vcmViaXRzLmRhdGUocGFnZW9iai5nZXRMb2FkVGltZSgpKTtcblx0XHRcdFx0aWYgKCFkYXRlLm1vbnRoSGVhZGVyUmVnZXgoKS5leGVjKHRleHQpKSB7XG5cdFx0XHRcdFx0dGV4dCArPSBgXFxuXFxuJHtkYXRlLm1vbnRoSGVhZGVyKHRoaXMuaGVhZGVyTGV2ZWwpfWA7XG5cdFx0XHRcdH1cblx0XHRcdFx0cGFnZW9iai5zZXRQYWdlVGV4dChgJHt0ZXh0fVxcbiR7bG9nVGV4dH1gKTtcblx0XHRcdFx0cGFnZW9iai5zZXRFZGl0U3VtbWFyeShzdW1tYXJ5VGV4dCk7XG5cdFx0XHRcdHBhZ2VvYmouc2V0Q2hhbmdlVGFncyh0aGlzLmNoYW5nZVRhZ3MpO1xuXHRcdFx0XHRwYWdlb2JqLnNldENyZWF0ZU9wdGlvbigncmVjcmVhdGUnKTtcblx0XHRcdFx0cGFnZW9iai5zYXZlKGRlZi5yZXNvbHZlLCBkZWYucmVqZWN0KTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIGRlZjtcblx0XHR9O1xuXHR9O1xuXHQvKiAqKioqKioqKioqKioqKioqIE1vcmViaXRzLnN0YXR1cyAqKioqKioqKioqKioqKioqICovXG5cdC8qKlxuXHQgKiBDcmVhdGUgYW5kIHNob3cgc3RhdHVzIG1lc3NhZ2VzIG9mIHZhcnlpbmcgdXJnZW5jeS5cblx0ICoge0BsaW5rIE1vcmViaXRzLnN0YXR1cy5pbml0fE1vcmViaXRzLnN0YXR1cy5pbml0KCl9IG11c3QgYmUgY2FsbGVkIGJlZm9yZVxuXHQgKiBhbnkgc3RhdHVzIG9iamVjdCBpcyBjcmVhdGVkLCBvdGhlcndpc2UgdGhvc2Ugc3RhdHVzZXMgd29uJ3QgYmUgdmlzaWJsZS5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzXG5cdCAqIEBjbGFzc1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIFRleHQgYmVmb3JlIHRoZSB0aGUgY29sb24gYDpgLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc3RhdCAtIFRleHQgYWZ0ZXIgdGhlIGNvbG9uIGA6YC5cblx0ICogQHBhcmFtIHtzdHJpbmd9IFt0eXBlPXN0YXR1c10gLSBEZXRlcm1pbmUgdGhlIGZvbnQgY29sb3Igb2YgdGhlIHN0YXR1c1xuXHQgKiBsaW5lLCBhbGxvd2FibGUgdmFsdWVzIGFyZTogYHN0YXR1c2AgKGJsdWUpLCBgaW5mb2AgKGdyZWVuKSwgYHdhcm5gIChyZWQpLFxuXHQgKiBvciBgZXJyb3JgIChib2xkIHJlZCkuXG5cdCAqL1xuXHRNb3JlYml0cy5zdGF0dXMgPSBmdW5jdGlvbiAodGV4dCwgc3RhdCwgdHlwZSkge1xuXHRcdHRoaXMudGV4dFJhdyA9IHRleHQ7XG5cdFx0dGhpcy50ZXh0ID0gTW9yZWJpdHMuY3JlYXRlSHRtbCh0ZXh0KTtcblx0XHR0aGlzLnR5cGUgPSB0eXBlIHx8ICdzdGF0dXMnO1xuXHRcdHRoaXMuZ2VuZXJhdGUoKTtcblx0XHRpZiAoc3RhdCkge1xuXHRcdFx0dGhpcy51cGRhdGUoc3RhdCwgdHlwZSk7XG5cdFx0fVxuXHR9O1xuXHQvKipcblx0ICogU3BlY2lmeSBhbiBhcmVhIGZvciBzdGF0dXMgbWVzc2FnZSBlbGVtZW50cyB0byBiZSBhZGRlZCB0by5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnN0YXR1c1xuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSByb290IC0gVXN1YWxseSBhIGRpdiBlbGVtZW50LlxuXHQgKiBAdGhyb3dzIElmIGByb290YCBpcyBub3QgYW4gYEhUTUxFbGVtZW50YC5cblx0ICovXG5cdE1vcmViaXRzLnN0YXR1cy5pbml0ID0gKHJvb3QpID0+IHtcblx0XHRpZiAoIShyb290IGluc3RhbmNlb2YgRWxlbWVudCkpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ29iamVjdCBub3QgYW4gaW5zdGFuY2Ugb2YgRWxlbWVudCcpO1xuXHRcdH1cblx0XHR3aGlsZSAocm9vdC5oYXNDaGlsZE5vZGVzKCkpIHtcblx0XHRcdHJvb3QucmVtb3ZlQ2hpbGQocm9vdC5maXJzdENoaWxkKTtcblx0XHR9XG5cdFx0TW9yZWJpdHMuc3RhdHVzLnJvb3QgPSByb290O1xuXHRcdE1vcmViaXRzLnN0YXR1cy5lcnJvckV2ZW50ID0gbnVsbDtcblx0fTtcblx0TW9yZWJpdHMuc3RhdHVzLnJvb3QgPSBudWxsO1xuXHQvKipcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnN0YXR1c1xuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYW5kbGVyIC0gRnVuY3Rpb24gdG8gZXhlY3V0ZSBvbiBlcnJvci5cblx0ICogQHRocm93cyBXaGVuIGBoYW5kbGVyYCBpcyBub3QgYSBmdW5jdGlvbi5cblx0ICovXG5cdE1vcmViaXRzLnN0YXR1cy5vbkVycm9yID0gKGhhbmRsZXIpID0+IHtcblx0XHRpZiAodHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdE1vcmViaXRzLnN0YXR1cy5lcnJvckV2ZW50ID0gaGFuZGxlcjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignTW9yZWJpdHMuc3RhdHVzLm9uRXJyb3I6IGhhbmRsZXIgaXMgbm90IGEgZnVuY3Rpb24nKTtcblx0XHR9XG5cdH07XG5cdE1vcmViaXRzLnN0YXR1cy5wcm90b3R5cGUgPSB7XG5cdFx0c3RhdDogbnVsbCxcblx0XHRzdGF0UmF3OiBudWxsLFxuXHRcdHRleHQ6IG51bGwsXG5cdFx0dGV4dFJhdzogbnVsbCxcblx0XHR0eXBlOiAnc3RhdHVzJyxcblx0XHR0YXJnZXQ6IG51bGwsXG5cdFx0bm9kZTogbnVsbCxcblx0XHRsaW5rZWQ6IGZhbHNlLFxuXHRcdC8qKiBBZGQgdGhlIHN0YXR1cyBlbGVtZW50IG5vZGUgdG8gdGhlIERPTS4gKi9cblx0XHRsaW5rKCkge1xuXHRcdFx0aWYgKCF0aGlzLmxpbmtlZCAmJiBNb3JlYml0cy5zdGF0dXMucm9vdCkge1xuXHRcdFx0XHRNb3JlYml0cy5zdGF0dXMucm9vdC5hcHBlbmRDaGlsZCh0aGlzLm5vZGUpO1xuXHRcdFx0XHR0aGlzLmxpbmtlZCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvKiogUmVtb3ZlIHRoZSBzdGF0dXMgZWxlbWVudCBub2RlIGZyb20gdGhlIERPTS4gKi9cblx0XHR1bmxpbmsoKSB7XG5cdFx0XHRpZiAodGhpcy5saW5rZWQpIHtcblx0XHRcdFx0TW9yZWJpdHMuc3RhdHVzLnJvb3QucmVtb3ZlQ2hpbGQodGhpcy5ub2RlKTtcblx0XHRcdFx0dGhpcy5saW5rZWQgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIFVwZGF0ZSB0aGUgc3RhdHVzLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHN0YXR1cyAtIFBhcnQgb2Ygc3RhdHVzIG1lc3NhZ2UgYWZ0ZXIgY29sb24uXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgLSAnc3RhdHVzJyAoYmx1ZSksICdpbmZvJyAoZ3JlZW4pLCAnd2Fybidcblx0XHQgKiAocmVkKSwgb3IgJ2Vycm9yJyAoYm9sZCByZWQpLlxuXHRcdCAqL1xuXHRcdHVwZGF0ZShzdGF0dXMsIHR5cGUpIHtcblx0XHRcdHRoaXMuc3RhdFJhdyA9IHN0YXR1cztcblx0XHRcdHRoaXMuc3RhdCA9IE1vcmViaXRzLmNyZWF0ZUh0bWwoc3RhdHVzKTtcblx0XHRcdGlmICh0eXBlKSB7XG5cdFx0XHRcdHRoaXMudHlwZSA9IHR5cGU7XG5cdFx0XHRcdGlmICh0eXBlID09PSAnZXJyb3InKSB7XG5cdFx0XHRcdFx0Ly8gaGFjayB0byBmb3JjZSB0aGUgcGFnZSBub3QgdG8gcmVsb2FkIHdoZW4gYW4gZXJyb3IgaXMgb3V0cHV0IC0gc2VlIGFsc28gTW9yZWJpdHMuc3RhdHVzKCkgYWJvdmVcblx0XHRcdFx0XHRNb3JlYml0cy53aWtpLm51bWJlck9mQWN0aW9uc0xlZnQgPSAxMDAwO1xuXHRcdFx0XHRcdC8vIGNhbGwgZXJyb3IgY2FsbGJhY2tcblx0XHRcdFx0XHRpZiAoTW9yZWJpdHMuc3RhdHVzLmVycm9yRXZlbnQpIHtcblx0XHRcdFx0XHRcdE1vcmViaXRzLnN0YXR1cy5lcnJvckV2ZW50KCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIGFsc28gbG9nIGVycm9yIG1lc3NhZ2VzIGluIHRoZSBicm93c2VyIGNvbnNvbGVcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGBbTW9yZWJpdHNdICR7dGhpcy50ZXh0UmF3fTogJHt0aGlzLnN0YXRSYXd9YCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMucmVuZGVyKCk7XG5cdFx0fSxcblx0XHQvKiogUHJvZHVjZSB0aGUgaHRtbCBmb3IgZmlyc3QgcGFydCBvZiB0aGUgc3RhdHVzIG1lc3NhZ2UuICovXG5cdFx0Z2VuZXJhdGUoKSB7XG5cdFx0XHR0aGlzLm5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdHRoaXMubm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJykpLmFwcGVuZENoaWxkKHRoaXMudGV4dCk7XG5cdFx0XHR0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpKS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnOiAnKSk7XG5cdFx0XHR0aGlzLnRhcmdldCA9IHRoaXMubm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJykpO1xuXHRcdFx0dGhpcy50YXJnZXQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpKTsgLy8gZHVtbXkgbm9kZVxuXHRcdH0sXG5cblx0XHQvKiogQ29tcGxldGUgdGhlIGh0bWwsIGZvciB0aGUgc2Vjb25kIHBhcnQgb2YgdGhlIHN0YXR1cyBtZXNzYWdlLiAqL1xuXHRcdHJlbmRlcigpIHtcblx0XHRcdHRoaXMubm9kZS5jbGFzc05hbWUgPSBgbW9yZWJpdHNfc3RhdHVzXyR7dGhpcy50eXBlfWA7XG5cdFx0XHR3aGlsZSAodGhpcy50YXJnZXQuaGFzQ2hpbGROb2RlcygpKSB7XG5cdFx0XHRcdHRoaXMudGFyZ2V0LnJlbW92ZUNoaWxkKHRoaXMudGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy50YXJnZXQuYXBwZW5kQ2hpbGQodGhpcy5zdGF0KTtcblx0XHRcdHRoaXMubGluaygpO1xuXHRcdH0sXG5cdFx0c3RhdHVzKHN0YXR1cykge1xuXHRcdFx0dGhpcy51cGRhdGUoc3RhdHVzLCAnc3RhdHVzJyk7XG5cdFx0fSxcblx0XHRpbmZvKHN0YXR1cykge1xuXHRcdFx0dGhpcy51cGRhdGUoc3RhdHVzLCAnaW5mbycpO1xuXHRcdH0sXG5cdFx0d2FybihzdGF0dXMpIHtcblx0XHRcdHRoaXMudXBkYXRlKHN0YXR1cywgJ3dhcm4nKTtcblx0XHR9LFxuXHRcdGVycm9yKHN0YXR1cykge1xuXHRcdFx0dGhpcy51cGRhdGUoc3RhdHVzLCAnZXJyb3InKTtcblx0XHR9LFxuXHR9O1xuXHQvKipcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnN0YXR1c1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIEJlZm9yZSBjb2xvblxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc3RhdHVzIC0gQWZ0ZXIgY29sb25cblx0ICogQHJldHVybnMge01vcmViaXRzLnN0YXR1c30gLSBgc3RhdHVzYC10eXBlIChibHVlKVxuXHQgKi9cblx0TW9yZWJpdHMuc3RhdHVzLnN0YXR1cyA9ICh0ZXh0LCBzdGF0dXMpID0+IHtcblx0XHRyZXR1cm4gbmV3IE1vcmViaXRzLnN0YXR1cyh0ZXh0LCBzdGF0dXMpO1xuXHR9O1xuXHQvKipcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnN0YXR1c1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIEJlZm9yZSBjb2xvblxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc3RhdHVzIC0gQWZ0ZXIgY29sb25cblx0ICogQHJldHVybnMge01vcmViaXRzLnN0YXR1c30gLSBgaW5mb2AtdHlwZSAoZ3JlZW4pXG5cdCAqL1xuXHRNb3JlYml0cy5zdGF0dXMuaW5mbyA9ICh0ZXh0LCBzdGF0dXMpID0+IHtcblx0XHRyZXR1cm4gbmV3IE1vcmViaXRzLnN0YXR1cyh0ZXh0LCBzdGF0dXMsICdpbmZvJyk7XG5cdH07XG5cdC8qKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMuc3RhdHVzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gQmVmb3JlIGNvbG9uXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzdGF0dXMgLSBBZnRlciBjb2xvblxuXHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc3RhdHVzfSAtIGB3YXJuYC10eXBlIChyZWQpXG5cdCAqL1xuXHRNb3JlYml0cy5zdGF0dXMud2FybiA9ICh0ZXh0LCBzdGF0dXMpID0+IHtcblx0XHRyZXR1cm4gbmV3IE1vcmViaXRzLnN0YXR1cyh0ZXh0LCBzdGF0dXMsICd3YXJuJyk7XG5cdH07XG5cdC8qKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMuc3RhdHVzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gQmVmb3JlIGNvbG9uXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzdGF0dXMgLSBBZnRlciBjb2xvblxuXHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc3RhdHVzfSAtIGBlcnJvcmAtdHlwZSAoYm9sZCByZWQpXG5cdCAqL1xuXHRNb3JlYml0cy5zdGF0dXMuZXJyb3IgPSAodGV4dCwgc3RhdHVzKSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBNb3JlYml0cy5zdGF0dXModGV4dCwgc3RhdHVzLCAnZXJyb3InKTtcblx0fTtcblx0LyoqXG5cdCAqIEZvciB0aGUgYWN0aW9uIGNvbXBsZXRlIG1lc3NhZ2UgYXQgdGhlIGVuZCwgY3JlYXRlIGEgc3RhdHVzIGxpbmUgd2l0aG91dFxuXHQgKiBhIGNvbG9uIHNlcGFyYXRvci5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnN0YXR1c1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dFxuXHQgKi9cblx0TW9yZWJpdHMuc3RhdHVzLmFjdGlvbkNvbXBsZXRlZCA9ICh0ZXh0KSA9PiB7XG5cdFx0Y29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYicpKS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KSk7XG5cdFx0bm9kZS5jbGFzc05hbWUgPSAnbW9yZWJpdHNfc3RhdHVzX2luZm8gbW9yZWJpdHNfYWN0aW9uX2NvbXBsZXRlJztcblx0XHRpZiAoTW9yZWJpdHMuc3RhdHVzLnJvb3QpIHtcblx0XHRcdE1vcmViaXRzLnN0YXR1cy5yb290LmFwcGVuZENoaWxkKG5vZGUpO1xuXHRcdH1cblx0fTtcblx0LyoqXG5cdCAqIERpc3BsYXkgdGhlIHVzZXIncyByYXRpb25hbGUsIGNvbW1lbnRzLCBldGMuIEJhY2sgdG8gdGhlbSBhZnRlciBhIGZhaWx1cmUsXG5cdCAqIHNvIHRoYXQgdGhleSBtYXkgcmUtdXNlIGl0LlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMuc3RhdHVzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb21tZW50c1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZVxuXHQgKi9cblx0TW9yZWJpdHMuc3RhdHVzLnByaW50VXNlclRleHQgPSAoY29tbWVudHMsIG1lc3NhZ2UpID0+IHtcblx0XHRjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRcdHAuaW5uZXJIVE1MID0gbWVzc2FnZTtcblx0XHRjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRkaXYuY2xhc3NOYW1lID0gJ21vcmViaXRzLXVzZXJ0ZXh0Jztcblx0XHRkaXYuc3R5bGUubWFyZ2luVG9wID0gJzAnO1xuXHRcdGRpdi5zdHlsZS53aGl0ZVNwYWNlID0gJ3ByZS13cmFwJztcblx0XHRkaXYudGV4dENvbnRlbnQgPSBjb21tZW50cztcblx0XHRwLmFwcGVuZENoaWxkKGRpdik7XG5cdFx0TW9yZWJpdHMuc3RhdHVzLnJvb3QuYXBwZW5kQ2hpbGQocCk7XG5cdH07XG5cdC8qKlxuXHQgKiBTaW1wbGUgaGVscGVyIGZ1bmN0aW9uIHRvIGNyZWF0ZSBhIHNpbXBsZSBub2RlLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAtIFR5cGUgb2YgSFRNTCBlbGVtZW50LlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29udGVudCAtIFRleHQgY29udGVudC5cblx0ICogQHBhcmFtIHtzdHJpbmd9IFtjb2xvcl0gLSBGb250IGNvbG9yLlxuXHQgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG5cdCAqL1xuXHRNb3JlYml0cy5odG1sTm9kZSA9ICh0eXBlLCBjb250ZW50LCBjb2xvcikgPT4ge1xuXHRcdGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuXHRcdGlmIChjb2xvcikge1xuXHRcdFx0bm9kZS5zdHlsZS5jb2xvciA9IGNvbG9yO1xuXHRcdH1cblx0XHRub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvbnRlbnQpKTtcblx0XHRyZXR1cm4gbm9kZTtcblx0fTtcblx0LyoqXG5cdCAqIEFkZCBzaGlmdC1jbGljayBzdXBwb3J0IGZvciBjaGVja2JveGVzLiBUaGUgd2lraWJpdHMgdmVyc2lvblxuXHQgKiAoYHdpbmRvdy5hZGRDaGVja2JveENsaWNrSGFuZGxlcnNgKSBoYXMgc29tZSByZXN0cmljdGlvbnMsIGFuZCBkb2Vzbid0IHdvcmtcblx0ICogd2l0aCBjaGVja2JveGVzIGluc2lkZSBhIHNvcnRhYmxlIHRhYmxlLCBzbyBsZXQncyBidWlsZCBvdXIgb3duLlxuXHQgKlxuXHQgKiBAcGFyYW0galF1ZXJ5U2VsZWN0b3Jcblx0ICogQHBhcmFtIGpRdWVyeUNvbnRleHRcblx0ICovXG5cdE1vcmViaXRzLmNoZWNrYm94U2hpZnRDbGlja1N1cHBvcnQgPSAoalF1ZXJ5U2VsZWN0b3IsIGpRdWVyeUNvbnRleHQpID0+IHtcblx0XHRsZXQgbGFzdENoZWNrYm94ID0gbnVsbDtcblx0XHRjb25zdCBjbGlja0hhbmRsZXIgPSBmdW5jdGlvbiBjbGlja0hhbmRsZXIoZXZlbnQpIHtcblx0XHRcdGNvbnN0IHRoaXNDYiA9IHRoaXM7XG5cdFx0XHRpZiAoZXZlbnQuc2hpZnRLZXkgJiYgbGFzdENoZWNrYm94ICE9PSBudWxsKSB7XG5cdFx0XHRcdGNvbnN0IGNicyA9ICQoalF1ZXJ5U2VsZWN0b3IsIGpRdWVyeUNvbnRleHQpOyAvLyBjYW4ndCBjYWNoZSB0aGVtLCBvYnZpb3VzbHksIGlmIHdlIHdhbnQgdG8gc3VwcG9ydCByZXNvcnRpbmdcblx0XHRcdFx0bGV0IGluZGV4ID0gLTE7XG5cdFx0XHRcdGxldCBsYXN0SW5kZXggPSAtMTtcblx0XHRcdFx0bGV0IGk7XG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBjYnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoY2JzW2ldID09PSB0aGlzQ2IpIHtcblx0XHRcdFx0XHRcdGluZGV4ID0gaTtcblx0XHRcdFx0XHRcdGlmIChsYXN0SW5kZXggPiAtMSkge1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGNic1tpXSA9PT0gbGFzdENoZWNrYm94KSB7XG5cdFx0XHRcdFx0XHRsYXN0SW5kZXggPSBpO1xuXHRcdFx0XHRcdFx0aWYgKGluZGV4ID4gLTEpIHtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChpbmRleCA+IC0xICYmIGxhc3RJbmRleCA+IC0xKSB7XG5cdFx0XHRcdFx0Ly8gaW5zcGlyZWQgYnkgd2lraWJpdHNcblx0XHRcdFx0XHRjb25zdCBlbmRTdGF0ZSA9IHRoaXNDYi5jaGVja2VkO1xuXHRcdFx0XHRcdGxldCBzdGFydDtcblx0XHRcdFx0XHRsZXQgZmluaXNoO1xuXHRcdFx0XHRcdGlmIChpbmRleCA8IGxhc3RJbmRleCkge1xuXHRcdFx0XHRcdFx0c3RhcnQgPSBpbmRleCArIDE7XG5cdFx0XHRcdFx0XHRmaW5pc2ggPSBsYXN0SW5kZXg7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHN0YXJ0ID0gbGFzdEluZGV4O1xuXHRcdFx0XHRcdFx0ZmluaXNoID0gaW5kZXggLSAxO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRmb3IgKGkgPSBzdGFydDsgaSA8PSBmaW5pc2g7IGkrKykge1xuXHRcdFx0XHRcdFx0aWYgKGNic1tpXS5jaGVja2VkICE9PSBlbmRTdGF0ZSkge1xuXHRcdFx0XHRcdFx0XHRjYnNbaV0uY2xpY2soKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGxhc3RDaGVja2JveCA9IHRoaXNDYjtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH07XG5cdFx0JChqUXVlcnlTZWxlY3RvciwgalF1ZXJ5Q29udGV4dCkub24oJ2NsaWNrJywgY2xpY2tIYW5kbGVyKTtcblx0fTtcblx0LyogKioqKioqKioqKioqKioqKiBNb3JlYml0cy5iYXRjaE9wZXJhdGlvbiAqKioqKioqKioqKioqKioqICovXG5cdC8qKlxuXHQgKiBJdGVyYXRlcyBvdmVyIGEgZ3JvdXAgb2YgcGFnZXMgKG9yIGFyYml0cmFyeSBvYmplY3RzKSBhbmQgZXhlY3V0ZXMgYSB3b3JrZXIgZnVuY3Rpb25cblx0ICogZm9yIGVhY2guXG5cdCAqXG5cdCAqIGBzZXRQYWdlTGlzdChwYWdlTGlzdClgOiBTZXRzIHRoZSBsaXN0IG9mIHBhZ2VzIHRvIHdvcmsgb24uIEl0IHNob3VsZCBiZSBhblxuXHQgKiBhcnJheSBvZiBwYWdlIG5hbWVzIHN0cmluZ3MuXG5cdCAqXG5cdCAqIGBzZXRPcHRpb24ob3B0aW9uTmFtZSwgb3B0aW9uVmFsdWUpYDogU2V0cyBhIGtub3duIG9wdGlvbjpcblx0ICogLSBgY2h1bmtTaXplYCAoaW50ZWdlcik6IFRoZSBzaXplIG9mIGNodW5rcyB0byBicmVhayB0aGUgYXJyYXkgaW50byAoZGVmYXVsdFxuXHQgKiA1MCkuIFNldHRpbmcgdGhpcyB0byBhIHNtYWxsIHZhbHVlICg8NSkgY2FuIGNhdXNlIHByb2JsZW1zLlxuXHQgKiAtIGBwcmVzZXJ2ZUluZGl2aWR1YWxTdGF0dXNMaW5lc2AgKGJvb2xlYW4pOiBLZWVwIGVhY2ggcGFnZSdzIHN0YXR1cyBlbGVtZW50XG5cdCAqIHZpc2libGUgd2hlbiB3b3JrZXIgaXMgY29tcGxldGU/IFNlZSBub3RlIGJlbG93LlxuXHQgKlxuXHQgKiBgcnVuKHdvcmtlciwgcG9zdEZpbmlzaClgOiBSdW5zIHRoZSBjYWxsYmFjayBgd29ya2VyYCBmb3IgZWFjaCBwYWdlIGluIHRoZVxuXHQgKiBsaXN0LiAgVGhlIGNhbGxiYWNrIG11c3QgY2FsbCBgd29ya2VyU3VjY2Vzc2Agd2hlbiBzdWNjZWVkaW5nLCBvclxuXHQgKiBgd29ya2VyRmFpbHVyZWAgd2hlbiBmYWlsaW5nLiAgSWYgdXNpbmcge0BsaW5rIE1vcmViaXRzLndpa2kuYXBpfSBvclxuXHQgKiB7QGxpbmsgTW9yZWJpdHMud2lraS5wYWdlfSwgdGhpcyBpcyBlYXNpbHkgZG9uZSBieSBwYXNzaW5nIHRoZXNlIHR3b1xuXHQgKiBmdW5jdGlvbnMgYXMgcGFyYW1ldGVycyB0byB0aGUgbWV0aG9kcyBvbiB0aG9zZSBvYmplY3RzOiBmb3IgaW5zdGFuY2UsXG5cdCAqIGBwYWdlLnNhdmUoYmF0Y2hPcC53b3JrZXJTdWNjZXNzLCBiYXRjaE9wLndvcmtlckZhaWx1cmUpYC4gIE1ha2Ugc3VyZSB0aGVcblx0ICogbWV0aG9kcyBhcmUgY2FsbGVkIGRpcmVjdGx5IGlmIHNwZWNpYWwgc3VjY2Vzcy9mYWlsdXJlIGNhc2VzIGFyaXNlLiAgSWYgeW91XG5cdCAqIG9taXQgdG8gY2FsbCB0aGVzZSBtZXRob2RzLCB0aGUgYmF0Y2ggb3BlcmF0aW9uIHdpbGwgc3RhbGwgYWZ0ZXIgdGhlIGZpcnN0XG5cdCAqIGNodW5rISAgQWxzbyBlbnN1cmUgdGhhdCBlaXRoZXIgd29ya2VyU3VjY2VzcyBvciB3b3JrZXJGYWlsdXJlIGlzIGNhbGxlZCBub1xuXHQgKiBtb3JlIHRoYW4gb25jZS4gIFRoZSBzZWNvbmQgY2FsbGJhY2sgYHBvc3RGaW5pc2hgIGlzIGV4ZWN1dGVkIHdoZW4gdGhlXG5cdCAqIGVudGlyZSBiYXRjaCBoYXMgYmVlbiBwcm9jZXNzZWQuXG5cdCAqXG5cdCAqIElmIHVzaW5nIGBwcmVzZXJ2ZUluZGl2aWR1YWxTdGF0dXNMaW5lc2AsIHlvdSBzaG91bGQgdHJ5IHRvIGVuc3VyZSB0aGF0IHRoZVxuXHQgKiBgd29ya2VyU3VjY2Vzc2AgY2FsbGJhY2sgaGFzIGFjY2VzcyB0byB0aGUgcGFnZSB0aXRsZS4gIFRoaXMgaXMgbm8gcHJvYmxlbSBmb3Jcblx0ICoge0BsaW5rIE1vcmViaXRzLndpa2kucGFnZX0gb2JqZWN0cy4gIEJ1dCB3aGVuIHVzaW5nIHRoZSBBUEksIHBsZWFzZSBzZXQgdGhlXG5cdCAqIHxwYWdlTmFtZXwgcHJvcGVydHkgb24gdGhlIHtAbGluayBNb3JlYml0cy53aWtpLmFwaX0gb2JqZWN0LlxuXHQgKlxuXHQgKiBUaGVyZSBhcmUgc2FtcGxlIGJhdGNoT3BlcmF0aW9uIGltcGxlbWVudGF0aW9ucyB1c2luZyBNb3JlYml0cy53aWtpLnBhZ2UgaW5cblx0ICogdHdpbmtsZWJhdGNoZGVsZXRlLmpzLCB0d2lua2xlYmF0Y2h1bmRlbGV0ZS5qcywgYW5kIHR3aW5rbGViYXRjaHByb3RlY3QuanMuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0c1xuXHQgKiBAY2xhc3Ncblx0ICogQHBhcmFtIHtzdHJpbmd9IFtjdXJyZW50QWN0aW9uXVxuXHQgKi9cblx0TW9yZWJpdHMuYmF0Y2hPcGVyYXRpb24gPSBmdW5jdGlvbiAoY3VycmVudEFjdGlvbikge1xuXHRcdGNvbnN0IGN0eCA9IHtcblx0XHRcdC8vIGJhY2tpbmcgZmllbGRzIGZvciBwdWJsaWMgcHJvcGVydGllc1xuXHRcdFx0cGFnZUxpc3Q6IG51bGwsXG5cdFx0XHRvcHRpb25zOiB7XG5cdFx0XHRcdGNodW5rU2l6ZTogNTAsXG5cdFx0XHRcdHByZXNlcnZlSW5kaXZpZHVhbFN0YXR1c0xpbmVzOiBmYWxzZSxcblx0XHRcdH0sXG5cdFx0XHQvLyBpbnRlcm5hbCBjb3VudGVycywgZXRjLlxuXHRcdFx0c3RhdHVzRWxlbWVudDogbmV3IE1vcmViaXRzLnN0YXR1cyhjdXJyZW50QWN0aW9uIHx8IHdpbmRvdy53Z1VMUygn5omn6KGM5om56YeP5pON5L2cJywgJ+Wft+ihjOaJueasoeaTjeS9nCcpKSxcblx0XHRcdHdvcmtlcjogbnVsbCxcblx0XHRcdC8vIGZ1bmN0aW9uIHRoYXQgZXhlY3V0ZXMgZm9yIGVhY2ggaXRlbSBpbiBwYWdlTGlzdFxuXHRcdFx0cG9zdEZpbmlzaDogbnVsbCxcblx0XHRcdC8vIGZ1bmN0aW9uIHRoYXQgZXhlY3V0ZXMgd2hlbiB0aGUgd2hvbGUgYmF0Y2ggaGFzIGJlZW4gcHJvY2Vzc2VkXG5cdFx0XHRjb3VudFN0YXJ0ZWQ6IDAsXG5cdFx0XHRjb3VudEZpbmlzaGVkOiAwLFxuXHRcdFx0Y291bnRGaW5pc2hlZFN1Y2Nlc3M6IDAsXG5cdFx0XHRjdXJyZW50Q2h1bmtJbmRleDogLTEsXG5cdFx0XHRwYWdlQ2h1bmtzOiBbXSxcblx0XHRcdHJ1bm5pbmc6IGZhbHNlLFxuXHRcdH07XG5cdFx0Ly8gc2hvdWxkbid0IGJlIG5lZWRlZCBieSBleHRlcm5hbCB1c2VycywgYnV0IHByb3ZpZGVkIGFueXdheSBmb3IgbWF4aW11bSBmbGV4aWJpbGl0eVxuXHRcdHRoaXMuZ2V0U3RhdHVzRWxlbWVudCA9ICgpID0+IHtcblx0XHRcdHJldHVybiBjdHguc3RhdHVzRWxlbWVudDtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIFNldHMgdGhlIGxpc3Qgb2YgcGFnZXMgdG8gd29yayBvbi5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7QXJyYXl9IHBhZ2VMaXN0IC0gQXJyYXkgb2Ygb2JqZWN0cyBvdmVyIHdoaWNoIHlvdSB3aXNoIHRvIGV4ZWN1dGUgdGhlIHdvcmtlciBmdW5jdGlvblxuXHRcdCAqIFRoaXMgaXMgdXN1YWxseSB0aGUgbGlzdCBvZiBwYWdlIG5hbWVzIChzdHJpbmdzKS5cblx0XHQgKi9cblx0XHR0aGlzLnNldFBhZ2VMaXN0ID0gKHBhZ2VMaXN0KSA9PiB7XG5cdFx0XHRjdHgucGFnZUxpc3QgPSBwYWdlTGlzdDtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIFNldHMgYSBrbm93biBvcHRpb24uXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9uTmFtZSAtIE5hbWUgb2YgdGhlIG9wdGlvbjpcblx0XHQgKiAtIGNodW5rU2l6ZSAoaW50ZWdlcik6IFRoZSBzaXplIG9mIGNodW5rcyB0byBicmVhayB0aGUgYXJyYXkgaW50b1xuXHRcdCAqIChkZWZhdWx0IDUwKS4gU2V0dGluZyB0aGlzIHRvIGEgc21hbGwgdmFsdWUgKDw1KSBjYW4gY2F1c2UgcHJvYmxlbXMuXG5cdFx0ICogLSBwcmVzZXJ2ZUluZGl2aWR1YWxTdGF0dXNMaW5lcyAoYm9vbGVhbik6IEtlZXAgZWFjaCBwYWdlJ3Mgc3RhdHVzXG5cdFx0ICogZWxlbWVudCB2aXNpYmxlIHdoZW4gd29ya2VyIGlzIGNvbXBsZXRlP1xuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfGJvb2xlYW59IG9wdGlvblZhbHVlIC0gVmFsdWUgdG8gd2hpY2ggdGhlIG9wdGlvbiBpc1xuXHRcdCAqIHRvIGJlIHNldC4gU2hvdWxkIGJlIGFuIGludGVnZXIgZm9yIGNodW5rU2l6ZSBhbmQgYSBib29sZWFuIGZvclxuXHRcdCAqIHByZXNlcnZlSW5kaXZpZHVhbFN0YXR1c0xpbmVzLlxuXHRcdCAqL1xuXHRcdHRoaXMuc2V0T3B0aW9uID0gKG9wdGlvbk5hbWUsIG9wdGlvblZhbHVlKSA9PiB7XG5cdFx0XHRjdHgub3B0aW9uc1tvcHRpb25OYW1lXSA9IG9wdGlvblZhbHVlO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogUnVucyB0aGUgZmlyc3QgY2FsbGJhY2sgZm9yIGVhY2ggcGFnZSBpbiB0aGUgbGlzdC5cblx0XHQgKiBUaGUgY2FsbGJhY2sgbXVzdCBjYWxsIHdvcmtlclN1Y2Nlc3Mgd2hlbiBzdWNjZWVkaW5nLCBvciB3b3JrZXJGYWlsdXJlIHdoZW4gZmFpbGluZy5cblx0XHQgKiBSdW5zIHRoZSBvcHRpb25hbCBzZWNvbmQgY2FsbGJhY2sgd2hlbiB0aGUgd2hvbGUgYmF0Y2ggaGFzIGJlZW4gcHJvY2Vzc2VkLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gd29ya2VyXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW3Bvc3RGaW5pc2hdXG5cdFx0ICovXG5cdFx0dGhpcy5ydW4gPSAod29ya2VyLCBwb3N0RmluaXNoKSA9PiB7XG5cdFx0XHRpZiAoY3R4LnJ1bm5pbmcpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2luZG93LndnVUxTKCfmibnph4/mk43kvZzlt7LlnKjov5DooYwnLCAn5om55qyh5pON5L2c5bey5Zyo5Z+36KGMJykpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjdHgucnVubmluZyA9IHRydWU7XG5cdFx0XHRjdHgud29ya2VyID0gd29ya2VyO1xuXHRcdFx0Y3R4LnBvc3RGaW5pc2ggPSBwb3N0RmluaXNoO1xuXHRcdFx0Y3R4LmNvdW50U3RhcnRlZCA9IDA7XG5cdFx0XHRjdHguY291bnRGaW5pc2hlZCA9IDA7XG5cdFx0XHRjdHguY291bnRGaW5pc2hlZFN1Y2Nlc3MgPSAwO1xuXHRcdFx0Y3R4LmN1cnJlbnRDaHVua0luZGV4ID0gLTE7XG5cdFx0XHRjdHgucGFnZUNodW5rcyA9IFtdO1xuXHRcdFx0Y29uc3QgdG90YWwgPSBjdHgucGFnZUxpc3QubGVuZ3RoO1xuXHRcdFx0aWYgKCF0b3RhbCkge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5pbmZvKHdpbmRvdy53Z1VMUygn5rKh5pyJ5oyH5a6a6aG16Z2iJywgJ+aykuacieaMh+WumumggemdoicpKTtcblx0XHRcdFx0Y3R4LnJ1bm5pbmcgPSBmYWxzZTtcblx0XHRcdFx0aWYgKGN0eC5wb3N0RmluaXNoKSB7XG5cdFx0XHRcdFx0Y3R4LnBvc3RGaW5pc2goKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHQvLyBjaHVuayBwYWdlIGxpc3QgaW50byBtb3JlIG1hbmFnZWFibGUgdW5pdHNcblx0XHRcdGN0eC5wYWdlQ2h1bmtzID0gTW9yZWJpdHMuYXJyYXkuY2h1bmsoY3R4LnBhZ2VMaXN0LCBjdHgub3B0aW9ucy5jaHVua1NpemUpO1xuXHRcdFx0Ly8gc3RhcnQgdGhlIHByb2Nlc3Ncblx0XHRcdE1vcmViaXRzLndpa2kuYWRkQ2hlY2twb2ludCgpO1xuXHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuc3RhdHVzKCcwJScpO1xuXHRcdFx0Zm5TdGFydE5ld0NodW5rKCk7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBUbyBiZSBjYWxsZWQgYnkgd29ya2VyIGJlZm9yZSBpdCB0ZXJtaW5hdGVzIHN1Y2Nlc3NmdWxseS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7KE1vcmViaXRzLndpa2kucGFnZXxNb3JlYml0cy53aWtpLmFwaXxzdHJpbmcpfSBhcmcgLVxuXHRcdCAqIFRoaXMgc2hvdWxkIGJlIHRoZSBgTW9yZWJpdHMud2lraS5wYWdlYCBvciBgTW9yZWJpdHMud2lraS5hcGlgIG9iamVjdCB1c2VkIGJ5IHdvcmtlclxuXHRcdCAqIChmb3IgdGhlIGFkanVzdG1lbnQgb2Ygc3RhdHVzIGxpbmVzIGVtaXR0ZWQgYnkgdGhlbSkuXG5cdFx0ICogSWYgbm8gTW9yZWJpdHMud2lraS4qIG9iamVjdCBpcyB1c2VkIChlLmcuIHlvdSdyZSB1c2luZyBgbXcuQXBpKClgIG9yIHNvbWV0aGluZyBlbHNlKSwgYW5kXG5cdFx0ICogYHByZXNlcnZlSW5kaXZpZHVhbFN0YXR1c0xpbmVzYCBvcHRpb24gaXMgb24sIGdpdmUgdGhlIHBhZ2UgbmFtZSAoc3RyaW5nKSBhcyBhcmd1bWVudC5cblx0XHQgKi9cblx0XHR0aGlzLndvcmtlclN1Y2Nlc3MgPSAoYXJnKSA9PiB7XG5cdFx0XHRpZiAoYXJnIGluc3RhbmNlb2YgTW9yZWJpdHMud2lraS5hcGkgfHwgYXJnIGluc3RhbmNlb2YgTW9yZWJpdHMud2lraS5wYWdlKSB7XG5cdFx0XHRcdC8vIHVwZGF0ZSBvciByZW1vdmUgc3RhdHVzIGxpbmVcblx0XHRcdFx0Y29uc3Qgc3RhdGVsZW0gPSBhcmcuZ2V0U3RhdHVzRWxlbWVudCgpO1xuXHRcdFx0XHRpZiAoY3R4Lm9wdGlvbnMucHJlc2VydmVJbmRpdmlkdWFsU3RhdHVzTGluZXMpIHtcblx0XHRcdFx0XHRpZiAoYXJnLmdldFBhZ2VOYW1lIHx8IGFyZy5wYWdlTmFtZSB8fCAoYXJnLnF1ZXJ5ICYmIGFyZy5xdWVyeS50aXRsZSkpIHtcblx0XHRcdFx0XHRcdC8vIHdlIGtub3cgdGhlIHBhZ2UgdGl0bGUgLSBkaXNwbGF5IGEgcmVsZXZhbnQgbWVzc2FnZVxuXHRcdFx0XHRcdFx0Y29uc3QgcGFnZU5hbWUgPSBhcmcuZ2V0UGFnZU5hbWUgPyBhcmcuZ2V0UGFnZU5hbWUoKSA6IGFyZy5wYWdlTmFtZSB8fCBhcmcucXVlcnkudGl0bGU7XG5cdFx0XHRcdFx0XHRzdGF0ZWxlbS5pbmZvKGDlrozmiJDvvIhbWyR7cGFnZU5hbWV9XV3vvIlgKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Ly8gd2UgZG9uJ3Qga25vdyB0aGUgcGFnZSB0aXRsZSAtIGp1c3QgZGlzcGxheSBhIGdlbmVyaWMgbWVzc2FnZVxuXHRcdFx0XHRcdFx0c3RhdGVsZW0uaW5mbygn5a6M5oiQJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIHJlbW92ZSB0aGUgc3RhdHVzIGxpbmUgYXV0b21hdGljYWxseSBwcm9kdWNlZCBieSBNb3JlYml0cy53aWtpLipcblx0XHRcdFx0XHRzdGF0ZWxlbS51bmxpbmsoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgYXJnID09PSAnc3RyaW5nJyAmJiBjdHgub3B0aW9ucy5wcmVzZXJ2ZUluZGl2aWR1YWxTdGF0dXNMaW5lcykge1xuXHRcdFx0XHRuZXcgTW9yZWJpdHMuc3RhdHVzKGFyZywgYOWujOaIkO+8iFtbJHthcmd9XV3vvIlgKTtcblx0XHRcdH1cblx0XHRcdGN0eC5jb3VudEZpbmlzaGVkU3VjY2VzcysrO1xuXHRcdFx0Zm5Eb25lT25lKCk7XG5cdFx0fTtcblx0XHR0aGlzLndvcmtlckZhaWx1cmUgPSAoKSA9PiB7XG5cdFx0XHRmbkRvbmVPbmUoKTtcblx0XHR9O1xuXHRcdC8vIHByaXZhdGUgZnVuY3Rpb25zXG5cdFx0Y29uc3QgdGhpc1Byb3h5ID0gdGhpcztcblx0XHRjb25zdCBmblN0YXJ0TmV3Q2h1bmsgPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBjaHVuayA9IGN0eC5wYWdlQ2h1bmtzWysrY3R4LmN1cnJlbnRDaHVua0luZGV4XTtcblx0XHRcdGlmICghY2h1bmspIHtcblx0XHRcdFx0cmV0dXJuOyAvLyBkb25lISB5YXlcblx0XHRcdH1cblx0XHRcdC8vIHN0YXJ0IHdvcmtlcnMgZm9yIHRoZSBjdXJyZW50IGNodW5rXG5cdFx0XHRjdHguY291bnRTdGFydGVkICs9IGNodW5rLmxlbmd0aDtcblx0XHRcdGZvciAoY29uc3QgcGFnZSBvZiBjaHVuaykge1xuXHRcdFx0XHRjdHgud29ya2VyKHBhZ2UsIHRoaXNQcm94eSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRjb25zdCBmbkRvbmVPbmUgPSAoKSA9PiB7XG5cdFx0XHRjdHguY291bnRGaW5pc2hlZCsrO1xuXHRcdFx0Ly8gdXBkYXRlIG92ZXJhbGwgc3RhdHVzIGxpbmVcblx0XHRcdGNvbnN0IHRvdGFsID0gY3R4LnBhZ2VMaXN0Lmxlbmd0aDtcblx0XHRcdGlmIChjdHguY291bnRGaW5pc2hlZCA8IHRvdGFsKSB7XG5cdFx0XHRcdGNvbnN0IHByb2dyZXNzID0gTWF0aC5yb3VuZCgoMTAwICogY3R4LmNvdW50RmluaXNoZWQpIC8gdG90YWwpO1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5zdGF0dXMoYCR7cHJvZ3Jlc3N9JWApO1xuXHRcdFx0XHQvLyBzdGFydCBhIG5ldyBjaHVuayBpZiB3ZSdyZSBjbG9zZSBlbm91Z2ggdG8gdGhlIGVuZCBvZiB0aGUgcHJldmlvdXMgY2h1bmssIGFuZFxuXHRcdFx0XHQvLyB3ZSBoYXZlbid0IGFscmVhZHkgc3RhcnRlZCB0aGUgbmV4dCBvbmVcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdGN0eC5jb3VudEZpbmlzaGVkID49IGN0eC5jb3VudFN0YXJ0ZWQgLSBNYXRoLm1heChjdHgub3B0aW9ucy5jaHVua1NpemUgLyAxMCwgMikgJiZcblx0XHRcdFx0XHRNYXRoLmZsb29yKGN0eC5jb3VudEZpbmlzaGVkIC8gY3R4Lm9wdGlvbnMuY2h1bmtTaXplKSA+IGN0eC5jdXJyZW50Q2h1bmtJbmRleFxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRmblN0YXJ0TmV3Q2h1bmsoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChjdHguY291bnRGaW5pc2hlZCA9PT0gdG90YWwpIHtcblx0XHRcdFx0Y29uc3Qgc3RhdHVzU3RyaW5nID0gYOWujOaIkO+8iCR7Y3R4LmNvdW50RmluaXNoZWRTdWNjZXNzfS8ke2N0eC5jb3VudEZpbmlzaGVkfeaTjeS9nOaIkOWKn+WujOaIkO+8iWA7XG5cdFx0XHRcdGlmIChjdHguY291bnRGaW5pc2hlZFN1Y2Nlc3MgPCBjdHguY291bnRGaW5pc2hlZCkge1xuXHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50Lndhcm4oc3RhdHVzU3RyaW5nKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5pbmZvKHN0YXR1c1N0cmluZyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGN0eC5wb3N0RmluaXNoKSB7XG5cdFx0XHRcdFx0Y3R4LnBvc3RGaW5pc2goKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRNb3JlYml0cy53aWtpLnJlbW92ZUNoZWNrcG9pbnQoKTtcblx0XHRcdFx0Y3R4LnJ1bm5pbmcgPSBmYWxzZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIGN0eC5jb3VudEZpbmlzaGVkID4gdG90YWxcblx0XHRcdFx0Ly8ganVzdCBmb3IgZ2lnZ2xlcyEgKHdlbGwsIHNlcmlvdXMgZGVidWdnaW5nLCBhY3R1YWxseSlcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQud2Fybihcblx0XHRcdFx0XHRgJHt3aW5kb3cud2dVTFMoJ+WujOaIkO+8iOWkmuaJp+ihjOS6hicsICflrozmiJDvvIjlpJrln7fooYzkuoYnKSArIChjdHguY291bnRGaW5pc2hlZCAtIHRvdGFsKX3mrKHvvIlgXG5cdFx0XHRcdCk7XG5cdFx0XHRcdE1vcmViaXRzLndpa2kucmVtb3ZlQ2hlY2twb2ludCgpO1xuXHRcdFx0XHRjdHgucnVubmluZyA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH07XG5cdH07XG5cdC8qKlxuXHQgKiBBIHNpbXBsZSBkcmFnZ2FibGUgd2luZG93LCBub3cgYSB3cmFwcGVyIGZvciBqUXVlcnkgVUkncyBkaWFsb2cgZmVhdHVyZS5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzXG5cdCAqIEBjbGFzc1xuXHQgKiBAcmVxdWlyZXMganF1ZXJ5LnVpLmRpYWxvZ1xuXHQgKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcblx0ICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCAtIFRoZSBtYXhpbXVtIGFsbG93YWJsZSBoZWlnaHQgZm9yIHRoZSBjb250ZW50IGFyZWEuXG5cdCAqL1xuXHRNb3JlYml0cy5zaW1wbGVXaW5kb3cgPSBmdW5jdGlvbiAod2lkdGgsIGhlaWdodCkge1xuXHRcdGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHR0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuXHRcdGNvbnRlbnQuY2xhc3NOYW1lID0gJ21vcmViaXRzLWRpYWxvZy1jb250ZW50Jztcblx0XHRjb250ZW50LmlkID0gYG1vcmViaXRzLWRpYWxvZy1jb250ZW50LSR7TWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMWUxNSl9YDtcblx0XHR0aGlzLmhlaWdodCA9IGhlaWdodDtcblx0XHQkKHRoaXMuY29udGVudCkuZGlhbG9nKHtcblx0XHRcdGF1dG9PcGVuOiBmYWxzZSxcblx0XHRcdGJ1dHRvbnM6IHtcblx0XHRcdFx0J1BsYWNlaG9sZGVyIGJ1dHRvbic6ICgpID0+IHt9LFxuXHRcdFx0fSxcblx0XHRcdGRpYWxvZ0NsYXNzOiAnbW9yZWJpdHMtZGlhbG9nJyxcblx0XHRcdHdpZHRoOiBNYXRoLm1pbihOdW1iZXIucGFyc2VJbnQod2luZG93LmlubmVyV2lkdGgsIDEwKSwgTnVtYmVyLnBhcnNlSW50KHdpZHRoIHx8IDgwMCwgMTApKSxcblx0XHRcdC8vIGdpdmUgalF1ZXJ5IHRoZSBnaXZlbiBoZWlnaHQgdmFsdWUgKHdoaWNoIHJlcHJlc2VudHMgdGhlIGFudGljaXBhdGVkIGhlaWdodCBvZiB0aGUgZGlhbG9nKSBoZXJlLCBzb1xuXHRcdFx0Ly8gaXQgY2FuIHBvc2l0aW9uIHRoZSBkaWFsb2cgYXBwcm9wcmlhdGVseVxuXHRcdFx0Ly8gdGhlIDIwIHBpeGVscyByZXByZXNlbnRzIGFkanVzdG1lbnQgZm9yIHRoZSBleHRyYSBoZWlnaHQgb2YgdGhlIGpRdWVyeSBkaWFsb2cgXCJjaHJvbWVcIiwgY29tcGFyZWRcblx0XHRcdC8vIHRvIHRoYXQgb2YgdGhlIG9sZCBTaW1wbGVXaW5kb3dcblx0XHRcdGhlaWdodDogaGVpZ2h0ICsgMjAsXG5cdFx0XHRjbG9zZTogKGV2ZW50KSA9PiB7XG5cdFx0XHRcdC8vIGRpYWxvZ3MgYW5kIHRoZWlyIGNvbnRlbnQgY2FuIGJlIGRlc3Ryb3llZCBvbmNlIGNsb3NlZFxuXHRcdFx0XHQkKGV2ZW50LnRhcmdldCkuZGlhbG9nKCdkZXN0cm95JykucmVtb3ZlKCk7XG5cdFx0XHR9LFxuXHRcdFx0cmVzaXplU3RhcnQoKSB7XG5cdFx0XHRcdFt0aGlzLnNjcm9sbGJveF0gPSAkKHRoaXMpLmZpbmQoJy5tb3JlYml0cy1zY3JvbGxib3gnKTtcblx0XHRcdFx0aWYgKHRoaXMuc2Nyb2xsYm94KSB7XG5cdFx0XHRcdFx0dGhpcy5zY3JvbGxib3guc3R5bGUubWF4SGVpZ2h0ID0gJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0cmVzaXplU3RvcCgpIHtcblx0XHRcdFx0dGhpcy5zY3JvbGxib3ggPSBudWxsO1xuXHRcdFx0fSxcblx0XHRcdHJlc2l6ZSgpIHtcblx0XHRcdFx0dGhpcy5zdHlsZS5tYXhIZWlnaHQgPSAnJztcblx0XHRcdFx0aWYgKHRoaXMuc2Nyb2xsYm94KSB7XG5cdFx0XHRcdFx0dGhpcy5zY3JvbGxib3guc3R5bGUud2lkdGggPSAnJztcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHR9KTtcblx0XHRjb25zdCAkd2lkZ2V0ID0gJCh0aGlzLmNvbnRlbnQpLmRpYWxvZygnd2lkZ2V0Jyk7XG5cdFx0Ly8gZGVsZXRlIHRoZSBwbGFjZWhvbGRlciBidXR0b24gKGl0J3Mgb25seSB0aGVyZSBzbyB0aGUgYnV0dG9ucGFuZSBnZXRzIGNyZWF0ZWQpXG5cdFx0JHdpZGdldC5maW5kKCdidXR0b24nKS5lYWNoKChrZXksIHZhbHVlKSA9PiB7XG5cdFx0XHR2YWx1ZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHZhbHVlKTtcblx0XHR9KTtcblx0XHQvLyBhZGQgY29udGFpbmVyIGZvciB0aGUgYnV0dG9ucyB3ZSBhZGQsIGFuZCB0aGUgZm9vdGVyIGxpbmtzIChpZiBhbnkpXG5cdFx0Y29uc3QgYnV0dG9uc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRidXR0b25zcGFuLmNsYXNzTmFtZSA9ICdtb3JlYml0cy1kaWFsb2ctYnV0dG9ucyc7XG5cdFx0Y29uc3QgbGlua3NzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdGxpbmtzc3Bhbi5jbGFzc05hbWUgPSAnbW9yZWJpdHMtZGlhbG9nLWZvb3RlcmxpbmtzJztcblx0XHQkd2lkZ2V0LmZpbmQoJy51aS1kaWFsb2ctYnV0dG9ucGFuZScpLmFwcGVuZChidXR0b25zcGFuLCBsaW5rc3NwYW4pO1xuXHRcdC8vIHJlc2l6ZSB0aGUgc2Nyb2xsYm94IHdpdGggdGhlIGRpYWxvZywgaWYgb25lIGlzIHByZXNlbnRcblx0XHQkd2lkZ2V0LnJlc2l6YWJsZSgnb3B0aW9uJywgJ2Fsc29SZXNpemUnLCBgIyR7dGhpcy5jb250ZW50LmlkfSAubW9yZWJpdHMtc2Nyb2xsYm94LCAjJHt0aGlzLmNvbnRlbnQuaWR9YCk7XG5cdH07XG5cdE1vcmViaXRzLnNpbXBsZVdpbmRvdy5wcm90b3R5cGUgPSB7XG5cdFx0YnV0dG9uczogW10sXG5cdFx0aGVpZ2h0OiA2MDAsXG5cdFx0aGFzRm9vdGVyTGlua3M6IGZhbHNlLFxuXHRcdHNjcmlwdE5hbWU6IG51bGwsXG5cdFx0LyoqXG5cdFx0ICogRm9jdXNlcyB0aGUgZGlhbG9nLiBUaGlzIG1pZ2h0IHdvcmssIG9yIG9uIHRoZSBjb250cmFyeSwgaXQgbWlnaHQgbm90LlxuXHRcdCAqXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLnNpbXBsZVdpbmRvd31cblx0XHQgKi9cblx0XHRmb2N1cygpIHtcblx0XHRcdCQodGhpcy5jb250ZW50KS5kaWFsb2coJ21vdmVUb1RvcCcpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBDbG9zZXMgdGhlIGRpYWxvZy4gSWYgdGhpcyBpcyBzZXQgYXMgYW4gZXZlbnQgaGFuZGxlciwgaXQgd2lsbCBzdG9wIHRoZSBldmVudFxuXHRcdCAqIGZyb20gZG9pbmcgYW55dGhpbmcgbW9yZS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7ZXZlbnR9IFtldmVudF1cblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc2ltcGxlV2luZG93fVxuXHRcdCAqL1xuXHRcdGNsb3NlKGV2ZW50KSB7XG5cdFx0XHRpZiAoZXZlbnQpIHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdH1cblx0XHRcdCQodGhpcy5jb250ZW50KS5kaWFsb2coJ2Nsb3NlJyk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIFNob3dzIHRoZSBkaWFsb2cuIENhbGxpbmcgZGlzcGxheSgpIG9uIGEgZGlhbG9nIHRoYXQgaGFzIHByZXZpb3VzbHkgYmVlbiBjbG9zZWRcblx0XHQgKiBtaWdodCB3b3JrLCBidXQgaXQgaXMgbm90IGd1YXJhbnRlZWQuXG5cdFx0ICpcblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc2ltcGxlV2luZG93fVxuXHRcdCAqL1xuXHRcdGRpc3BsYXkoKSB7XG5cdFx0XHRpZiAodGhpcy5zY3JpcHROYW1lKSB7XG5cdFx0XHRcdGNvbnN0ICR3aWRnZXQgPSAkKHRoaXMuY29udGVudCkuZGlhbG9nKCd3aWRnZXQnKTtcblx0XHRcdFx0JHdpZGdldC5maW5kKCcubW9yZWJpdHMtZGlhbG9nLXNjcmlwdG5hbWUnKS5yZW1vdmUoKTtcblx0XHRcdFx0Y29uc3Qgc2NyaXB0bmFtZXNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0XHRcdHNjcmlwdG5hbWVzcGFuLmNsYXNzTmFtZSA9ICdtb3JlYml0cy1kaWFsb2ctc2NyaXB0bmFtZSc7XG5cdFx0XHRcdHNjcmlwdG5hbWVzcGFuLnRleHRDb250ZW50ID0gYCR7dGhpcy5zY3JpcHROYW1lfSBcXHUwMEI3IGA7IC8vIFUrMDBCNyBNSURETEUgRE9UID0gJm1pZGRvdDtcblx0XHRcdFx0JHdpZGdldC5maW5kKCcudWktZGlhbG9nLXRpdGxlJykucHJlcGVuZChzY3JpcHRuYW1lc3Bhbik7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBkaWFsb2cgPSAkKHRoaXMuY29udGVudCkuZGlhbG9nKCdvcGVuJyk7XG5cdFx0XHRpZiAod2luZG93LnNldHVwVG9vbHRpcHMgJiYgd2luZG93LnBnICYmIHdpbmRvdy5wZy5yZSAmJiB3aW5kb3cucGcucmUuZGlmZikge1xuXHRcdFx0XHQvLyB0aWUgaW4gd2l0aCBOQVZQT1Bcblx0XHRcdFx0ZGlhbG9nLnBhcmVudCgpWzBdLnJhblNldHVwVG9vbHRpcHNBbHJlYWR5ID0gZmFsc2U7XG5cdFx0XHRcdHdpbmRvdy5zZXR1cFRvb2x0aXBzKGRpYWxvZy5wYXJlbnQoKVswXSk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnNldEhlaWdodCh0aGlzLmhlaWdodCk7IC8vIGluaXQgaGVpZ2h0IGFsZ29yaXRobVxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBTZXRzIHRoZSBkaWFsb2cgdGl0bGUuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gdGl0bGVcblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc2ltcGxlV2luZG93fVxuXHRcdCAqL1xuXHRcdHNldFRpdGxlKHRpdGxlKSB7XG5cdFx0XHQkKHRoaXMuY29udGVudCkuZGlhbG9nKCdvcHRpb24nLCAndGl0bGUnLCB0aXRsZSk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIFNldHMgdGhlIHNjcmlwdCBuYW1lLCBhcHBlYXJpbmcgYXMgYSBwcmVmaXggdG8gdGhlIHRpdGxlIHRvIGhlbHAgdXNlcnMgZGV0ZXJtaW5lIHdoaWNoXG5cdFx0ICogdXNlciBzY3JpcHQgaXMgcHJvZHVjaW5nIHdoaWNoIGRpYWxvZy4gRm9yIGluc3RhbmNlLCBUd2lua2xlIG1vZHVsZXMgc2V0IHRoaXMgdG8gXCJUd2lua2xlXCIuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zaW1wbGVXaW5kb3d9XG5cdFx0ICovXG5cdFx0c2V0U2NyaXB0TmFtZShuYW1lKSB7XG5cdFx0XHR0aGlzLnNjcmlwdE5hbWUgPSBuYW1lO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBTZXRzIHRoZSBkaWFsb2cgd2lkdGguXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc2ltcGxlV2luZG93fVxuXHRcdCAqL1xuXHRcdHNldFdpZHRoKHdpZHRoKSB7XG5cdFx0XHQkKHRoaXMuY29udGVudCkuZGlhbG9nKCdvcHRpb24nLCAnd2lkdGgnLCB3aWR0aCk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIFNldHMgdGhlIGRpYWxvZydzIG1heGltdW0gaGVpZ2h0LiBUaGUgZGlhbG9nIHdpbGwgYXV0by1zaXplIHRvIGZpdCBpdHMgY29udGVudHMsXG5cdFx0ICogYnV0IHRoZSBjb250ZW50IGFyZWEgd2lsbCBncm93IG5vIGxhcmdlciB0aGFuIHRoZSBoZWlnaHQgZ2l2ZW4gaGVyZS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHRcblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc2ltcGxlV2luZG93fVxuXHRcdCAqL1xuXHRcdHNldEhlaWdodChoZWlnaHQpIHtcblx0XHRcdHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuXHRcdFx0Ly8gZnJvbSBkaXNwbGF5IHRpbWUgb253YXJkcywgbGV0IHRoZSBicm93c2VyIGRldGVybWluZSB0aGUgb3B0aW11bSBoZWlnaHQsXG5cdFx0XHQvLyBhbmQgaW5zdGVhZCBsaW1pdCB0aGUgaGVpZ2h0IGF0IHRoZSBnaXZlbiB2YWx1ZVxuXHRcdFx0Ly8gbm90ZSB0aGF0IHRoZSBnaXZlbiBoZWlnaHQgd2lsbCBleGNsdWRlIHRoZSBhcHByb3guIDIwcHggdGhhdCB0aGUgalF1ZXJ5IFVJXG5cdFx0XHQvLyBjaHJvbWUgaGFzIGluIGhlaWdodCBpbiBhZGRpdGlvbiB0byB0aGUgaGVpZ2h0IG9mIGFuIGVxdWl2YWxlbnQgXCJjbGFzc2ljXCJcblx0XHRcdC8vIE1vcmViaXRzLnNpbXBsZVdpbmRvd1xuXHRcdFx0aWYgKFxuXHRcdFx0XHROdW1iZXIucGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZSgkKHRoaXMuY29udGVudCkuZGlhbG9nKCd3aWRnZXQnKVswXSwgbnVsbCkuaGVpZ2h0LCAxMCkgPlxuXHRcdFx0XHR3aW5kb3cuaW5uZXJIZWlnaHRcblx0XHRcdCkge1xuXHRcdFx0XHQkKHRoaXMuY29udGVudClcblx0XHRcdFx0XHQuZGlhbG9nKCdvcHRpb24nLCAnaGVpZ2h0Jywgd2luZG93LmlubmVySGVpZ2h0IC0gMilcblx0XHRcdFx0XHQuZGlhbG9nKCdvcHRpb24nLCAncG9zaXRpb24nLCAndG9wJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkKHRoaXMuY29udGVudCkuZGlhbG9nKCdvcHRpb24nLCAnaGVpZ2h0JywgJ2F1dG8nKTtcblx0XHRcdH1cblx0XHRcdCQodGhpcy5jb250ZW50KS5kaWFsb2coJ3dpZGdldCcpLmZpbmQoJy5tb3JlYml0cy1kaWFsb2ctY29udGVudCcpWzBdLnN0eWxlLm1heEhlaWdodCA9IGAke051bWJlci5wYXJzZUludChcblx0XHRcdFx0dGhpcy5oZWlnaHQgLSAzMCxcblx0XHRcdFx0MTBcblx0XHRcdCl9cHhgO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBTZXRzIHRoZSBjb250ZW50IG9mIHRoZSBkaWFsb2cgdG8gdGhlIGdpdmVuIGVsZW1lbnQgbm9kZSwgdXN1YWxseSBmcm9tIHJlbmRlcmluZ1xuXHRcdCAqIGEge0BsaW5rIE1vcmViaXRzLnF1aWNrRm9ybX0uXG5cdFx0ICogUmUtZW51bWVyYXRlcyB0aGUgZm9vdGVyIGJ1dHRvbnMsIGJ1dCBsZWF2ZXMgdGhlIGZvb3RlciBsaW5rcyBhcyB0aGV5IGFyZS5cblx0XHQgKiBCZSBzdXJlIHRvIGNhbGwgdGhpcyBhdCBsZWFzdCBvbmNlIGJlZm9yZSB0aGUgZGlhbG9nIGlzIGRpc3BsYXllZC4uLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGVudFxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zaW1wbGVXaW5kb3d9XG5cdFx0ICovXG5cdFx0c2V0Q29udGVudChjb250ZW50KSB7XG5cdFx0XHR0aGlzLnB1cmdlQ29udGVudCgpO1xuXHRcdFx0dGhpcy5hZGRDb250ZW50KGNvbnRlbnQpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBBZGRzIHRoZSBnaXZlbiBlbGVtZW50IG5vZGUgdG8gdGhlIGRpYWxvZyBjb250ZW50LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGVudFxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zaW1wbGVXaW5kb3d9XG5cdFx0ICovXG5cdFx0YWRkQ29udGVudChjb250ZW50KSB7XG5cdFx0XHR0aGlzLmNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cdFx0XHQvLyBsb29rIGZvciBzdWJtaXQgYnV0dG9ucyBpbiB0aGUgY29udGVudCwgaGlkZSB0aGVtLCBhbmQgYWRkIGEgcHJveHkgYnV0dG9uIHRvIHRoZSBidXR0b24gcGFuZVxuXHRcdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0XHQkKHRoaXMuY29udGVudClcblx0XHRcdFx0LmZpbmQoJ2lucHV0W3R5cGU9XCJzdWJtaXRcIl0sIGJ1dHRvblt0eXBlPVwic3VibWl0XCJdJylcblx0XHRcdFx0LmVhY2goKGtleSwgdmFsdWUpID0+IHtcblx0XHRcdFx0XHR2YWx1ZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHRcdGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRcdFx0XHRcdGlmICh2YWx1ZS5oYXNBdHRyaWJ1dGUoJ3ZhbHVlJykpIHtcblx0XHRcdFx0XHRcdGJ1dHRvbi50ZXh0Q29udGVudCA9IHZhbHVlLmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHZhbHVlLnRleHRDb250ZW50KSB7XG5cdFx0XHRcdFx0XHRidXR0b24udGV4dENvbnRlbnQgPSB2YWx1ZS50ZXh0Q29udGVudDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0YnV0dG9uLnRleHRDb250ZW50ID0gJ+aPkOS6pCc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJ1dHRvbi5jbGFzc05hbWUgPSB2YWx1ZS5jbGFzc05hbWUgfHwgJ3N1Ym1pdEJ1dHRvblByb3h5Jztcblx0XHRcdFx0XHQvLyBoZXJlIGlzIGFuIGluc3RhbmNlIG9mIGNoZWFwIGNvZGluZywgcHJvYmFibHkgYSBtZW1vcnktdXNhZ2UgaGl0IGluIHVzaW5nIGEgY2xvc3VyZSBoZXJlXG5cdFx0XHRcdFx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcdFx0XHQnY2xpY2snLFxuXHRcdFx0XHRcdFx0KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHR2YWx1ZS5jbGljaygpO1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdGZhbHNlXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRzZWxmLmJ1dHRvbnMucHVzaChidXR0b24pO1xuXHRcdFx0XHR9KTtcblx0XHRcdC8vIHJlbW92ZSBhbGwgYnV0dG9ucyBmcm9tIHRoZSBidXR0b24gcGFuZSBhbmQgcmUtYWRkIHRoZW1cblx0XHRcdGlmICh0aGlzLmJ1dHRvbnMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHQkKHRoaXMuY29udGVudClcblx0XHRcdFx0XHQuZGlhbG9nKCd3aWRnZXQnKVxuXHRcdFx0XHRcdC5maW5kKCcubW9yZWJpdHMtZGlhbG9nLWJ1dHRvbnMnKVxuXHRcdFx0XHRcdC5lbXB0eSgpXG5cdFx0XHRcdFx0LmFwcGVuZCh0aGlzLmJ1dHRvbnMpWzBdXG5cdFx0XHRcdFx0LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1lbXB0eScpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JCh0aGlzLmNvbnRlbnQpXG5cdFx0XHRcdFx0LmRpYWxvZygnd2lkZ2V0Jylcblx0XHRcdFx0XHQuZmluZCgnLm1vcmViaXRzLWRpYWxvZy1idXR0b25zJylbMF1cblx0XHRcdFx0XHQuc2V0QXR0cmlidXRlKCdkYXRhLWVtcHR5JywgJ2RhdGEtZW1wdHknKTsgLy8gdXNlZCBieSBDU1Ncblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBSZW1vdmVzIGFsbCBjb250ZW50cyBmcm9tIHRoZSBkaWFsb2csIGJhcnJpbmcgYW55IGZvb3RlciBsaW5rcy5cblx0XHQgKlxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zaW1wbGVXaW5kb3d9XG5cdFx0ICovXG5cdFx0cHVyZ2VDb250ZW50KCkge1xuXHRcdFx0dGhpcy5idXR0b25zID0gW107XG5cdFx0XHQvLyBkZWxldGUgYWxsIGJ1dHRvbnMgaW4gdGhlIGJ1dHRvbnBhbmVcblx0XHRcdCQodGhpcy5jb250ZW50KS5kaWFsb2coJ3dpZGdldCcpLmZpbmQoJy5tb3JlYml0cy1kaWFsb2ctYnV0dG9ucycpLmVtcHR5KCk7XG5cdFx0XHR3aGlsZSAodGhpcy5jb250ZW50Lmhhc0NoaWxkTm9kZXMoKSkge1xuXHRcdFx0XHR0aGlzLmNvbnRlbnQucmVtb3ZlQ2hpbGQodGhpcy5jb250ZW50LmZpcnN0Q2hpbGQpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBBZGRzIGEgbGluayBpbiB0aGUgYm90dG9tLXJpZ2h0IGNvcm5lciBvZiB0aGUgZGlhbG9nLlxuXHRcdCAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gcHJvdmlkZSBoZWxwIG9yIHBvbGljeSBsaW5rcy5cblx0XHQgKiBGb3IgZXhhbXBsZSwgVHdpbmtsZSdzIENTRCBtb2R1bGUgYWRkcyBhIGxpbmsgdG8gdGhlIENTRCBwb2xpY3kgcGFnZSxcblx0XHQgKiBhcyB3ZWxsIGFzIGEgbGluayB0byBUd2lua2xlJ3MgZG9jdW1lbnRhdGlvbi5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gRGlzcGxheSB0ZXh0LlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB3aWtpUGFnZSAtIExpbmsgdGFyZ2V0LlxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3ByZXA9ZmFsc2VdIC0gU2V0IHRydWUgdG8gcHJlcGVuZCByYXRoZXIgdGhhbiBhcHBlbmQuXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLnNpbXBsZVdpbmRvd31cblx0XHQgKi9cblx0XHRhZGRGb290ZXJMaW5rKHRleHQsIHdpa2lQYWdlLCBwcmVwKSB7XG5cdFx0XHRjb25zdCAkZm9vdGVybGlua3MgPSAkKHRoaXMuY29udGVudCkuZGlhbG9nKCd3aWRnZXQnKS5maW5kKCcubW9yZWJpdHMtZGlhbG9nLWZvb3RlcmxpbmtzJyk7XG5cdFx0XHRpZiAodGhpcy5oYXNGb290ZXJMaW5rcykge1xuXHRcdFx0XHRjb25zdCBidWxsZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0XHRcdGJ1bGxldC50ZXh0Q29udGVudCA9ICcgXFx1MjAyMiAnOyAvLyBVKzIwMjIgQlVMTEVUXG5cdFx0XHRcdGlmIChwcmVwKSB7XG5cdFx0XHRcdFx0JGZvb3RlcmxpbmtzLnByZXBlbmQoYnVsbGV0KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkZm9vdGVybGlua3MuYXBwZW5kKGJ1bGxldCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cdFx0XHRsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIG13LnV0aWwuZ2V0VXJsKHdpa2lQYWdlKSk7XG5cdFx0XHRsaW5rLnNldEF0dHJpYnV0ZSgndGl0bGUnLCB3aWtpUGFnZSk7XG5cdFx0XHRsaW5rLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19ibGFuaycpO1xuXHRcdFx0bGluay5zZXRBdHRyaWJ1dGUoJ3JlbCcsICdub29wZW5lciBub3JlZmVycmVyJyk7XG5cdFx0XHRsaW5rLnRleHRDb250ZW50ID0gdGV4dDtcblx0XHRcdGlmIChwcmVwKSB7XG5cdFx0XHRcdCRmb290ZXJsaW5rcy5wcmVwZW5kKGxpbmspO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JGZvb3RlcmxpbmtzLmFwcGVuZChsaW5rKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuaGFzRm9vdGVyTGlua3MgPSB0cnVlO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBTZXRzIHdoZXRoZXIgdGhlIHdpbmRvdyBzaG91bGQgYmUgbW9kYWwgb3Igbm90LiBNb2RhbCBkaWFsb2dzIGNyZWF0ZVxuXHRcdCAqIGFuIG92ZXJsYXkgYmVsb3cgdGhlIGRpYWxvZyBidXQgYWJvdmUgb3RoZXIgcGFnZSBlbGVtZW50cy4gVGhpc1xuXHRcdCAqIG11c3QgYmUgdXNlZCAoaWYgbmVjZXNzYXJ5KSBiZWZvcmUgY2FsbGluZyBkaXNwbGF5KCkuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFttb2RhbD1mYWxzZV0gLSBJZiBzZXQgdG8gdHJ1ZSwgb3RoZXIgaXRlbXMgb24gdGhlXG5cdFx0ICogcGFnZSB3aWxsIGJlIGRpc2FibGVkLCBpLmUuLCBjYW5ub3QgYmUgaW50ZXJhY3RlZCB3aXRoLlxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zaW1wbGVXaW5kb3d9XG5cdFx0ICovXG5cdFx0c2V0TW9kYWxpdHkobW9kYWwpIHtcblx0XHRcdCQodGhpcy5jb250ZW50KS5kaWFsb2coJ29wdGlvbicsICdtb2RhbCcsIG1vZGFsKTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdH07XG5cdC8qKlxuXHQgKiBFbmFibGVzIG9yIGRpc2FibGVzIGFsbCBmb290ZXIgYnV0dG9ucyBvbiBhbGwge0BsaW5rIE1vcmViaXRzLnNpbXBsZVdpbmRvd31zIGluIHRoZSBjdXJyZW50IHBhZ2UuXG5cdCAqIFRoaXMgc2hvdWxkIGJlIGNhbGxlZCB3aXRoIGBmYWxzZWAgd2hlbiB0aGUgYnV0dG9uKHMpIGJlY29tZSBpcnJlbGV2YW50IChlLmcuIGp1c3QgYmVmb3JlXG5cdCAqIHtAbGluayBNb3JlYml0cy5zdGF0dXMuaW5pdH0gaXMgY2FsbGVkKS5cblx0ICogVGhpcyBpcyBub3QgYW4gaW5zdGFuY2UgbWV0aG9kIHNvIHRoYXQgY29uc3VtZXJzIGRvbid0IGhhdmUgdG8ga2VlcCBhIHJlZmVyZW5jZSB0byB0aGVcblx0ICogb3JpZ2luYWwgYE1vcmViaXRzLnNpbXBsZVdpbmRvd2Agb2JqZWN0IHNpdHRpbmcgYXJvdW5kIHNvbWV3aGVyZS4gQW55d2F5LCBtb3N0IG9mIHRoZSB0aW1lXG5cdCAqIHRoZXJlIHdpbGwgb25seSBiZSBvbmUgYE1vcmViaXRzLnNpbXBsZVdpbmRvd2Agb3Blbiwgc28gdGhpcyBzaG91bGRuJ3QgbWF0dGVyLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMuc2ltcGxlV2luZG93XG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gZW5hYmxlZFxuXHQgKi9cblx0TW9yZWJpdHMuc2ltcGxlV2luZG93LnNldEJ1dHRvbnNFbmFibGVkID0gKGVuYWJsZWQpID0+IHtcblx0XHRjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblx0XHQkYm9keS5maW5kKCcubW9yZWJpdHMtZGlhbG9nLWJ1dHRvbnMgYnV0dG9uJykucHJvcCgnZGlzYWJsZWQnLCAhZW5hYmxlZCk7XG5cdH07XG59KShqUXVlcnkpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQSx3RkFBQUEsU0FBQTtBQUFBO0FBQ0EsUUFBSSxRQUFRLFNBQVUsSUFBSTtBQUN4QixhQUFPLE1BQU0sR0FBRyxTQUFTLFFBQVE7QUFBQSxJQUNuQztBQUdBLElBQUFBLFFBQU87QUFBQSxJQUVMLE1BQU0sT0FBTyxjQUFjLFlBQVksVUFBVSxLQUNqRCxNQUFNLE9BQU8sVUFBVSxZQUFZLE1BQU07QUFBQSxJQUV6QyxNQUFNLE9BQU8sUUFBUSxZQUFZLElBQUksS0FDckMsTUFBTSxPQUFPLFVBQVUsWUFBWSxNQUFNLEtBQ3pDLE1BQU0sT0FBTyxXQUFRLFlBQVksT0FBSTtBQUFBLElBRXBDLDJCQUFZO0FBQUUsYUFBTztBQUFBLElBQU0sRUFBRyxLQUFLLFNBQVMsYUFBYSxFQUFFO0FBQUE7QUFBQTs7O0FDZjlEO0FBQUEsdUZBQUFDLFNBQUE7QUFBQTtBQUNBLElBQUFBLFFBQU8sVUFBVSxTQUFVLE1BQU07QUFDL0IsVUFBSTtBQUNGLGVBQU8sQ0FBQyxDQUFDLEtBQUs7QUFBQSxNQUNoQixTQUFTLE9BQU87QUFDZCxlQUFPO0FBQUEsTUFDVDtBQUFBLElBQ0Y7QUFBQTtBQUFBOzs7QUNQQTtBQUFBLDZGQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLFFBQVE7QUFHWixJQUFBQSxRQUFPLFVBQVUsQ0FBQyxNQUFNLFdBQVk7QUFFbEMsYUFBTyxPQUFPLGVBQWUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxLQUFLLFdBQVk7QUFBRSxlQUFPO0FBQUEsTUFBRyxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU07QUFBQSxJQUNqRixDQUFDO0FBQUE7QUFBQTs7O0FDUEQ7QUFBQSxzR0FBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxRQUFRO0FBRVosSUFBQUEsUUFBTyxVQUFVLENBQUMsTUFBTSxXQUFZO0FBRWxDLFVBQUksT0FBUSxXQUFZO0FBQUEsTUFBYyxFQUFHLEtBQUs7QUFFOUMsYUFBTyxPQUFPLFFBQVEsY0FBYyxLQUFLLGVBQWUsV0FBVztBQUFBLElBQ3JFLENBQUM7QUFBQTtBQUFBOzs7QUNSRDtBQUFBLCtGQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLGNBQWM7QUFFbEIsUUFBSSxPQUFPLFNBQVMsVUFBVTtBQUU5QixJQUFBQSxRQUFPLFVBQVUsY0FBYyxLQUFLLEtBQUssSUFBSSxJQUFJLFdBQVk7QUFDM0QsYUFBTyxLQUFLLE1BQU0sTUFBTSxTQUFTO0FBQUEsSUFDbkM7QUFBQTtBQUFBOzs7QUNQQTtBQUFBO0FBQUE7QUFDQSxRQUFJLHdCQUF3QixDQUFDLEVBQUU7QUFFL0IsUUFBSSwyQkFBMkIsT0FBTztBQUd0QyxRQUFJLGNBQWMsNEJBQTRCLENBQUMsc0JBQXNCLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0FBSXJGLFlBQVEsSUFBSSxjQUFjLFNBQVMscUJBQXFCLEdBQUc7QUFDekQsVUFBSSxhQUFhLHlCQUF5QixNQUFNLENBQUM7QUFDakQsYUFBTyxDQUFDLENBQUMsY0FBYyxXQUFXO0FBQUEsSUFDcEMsSUFBSTtBQUFBO0FBQUE7OztBQ2JKO0FBQUEsNEdBQUFDLFNBQUE7QUFBQTtBQUNBLElBQUFBLFFBQU8sVUFBVSxTQUFVLFFBQVEsT0FBTztBQUN4QyxhQUFPO0FBQUEsUUFDTCxZQUFZLEVBQUUsU0FBUztBQUFBLFFBQ3ZCLGNBQWMsRUFBRSxTQUFTO0FBQUEsUUFDekIsVUFBVSxFQUFFLFNBQVM7QUFBQSxRQUNyQjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUE7QUFBQTs7O0FDUkE7QUFBQSx1R0FBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxjQUFjO0FBRWxCLFFBQUksb0JBQW9CLFNBQVM7QUFDakMsUUFBSSxPQUFPLGtCQUFrQjtBQUM3QixRQUFJLHNCQUFzQixlQUFlLGtCQUFrQixLQUFLLEtBQUssTUFBTSxJQUFJO0FBRS9FLElBQUFBLFFBQU8sVUFBVSxjQUFjLHNCQUFzQixTQUFVLElBQUk7QUFDakUsYUFBTyxXQUFZO0FBQ2pCLGVBQU8sS0FBSyxNQUFNLElBQUksU0FBUztBQUFBLE1BQ2pDO0FBQUEsSUFDRjtBQUFBO0FBQUE7OztBQ1hBO0FBQUEsNkZBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksY0FBYztBQUVsQixRQUFJLFdBQVcsWUFBWSxDQUFDLEVBQUUsUUFBUTtBQUN0QyxRQUFJLGNBQWMsWUFBWSxHQUFHLEtBQUs7QUFFdEMsSUFBQUEsUUFBTyxVQUFVLFNBQVUsSUFBSTtBQUM3QixhQUFPLFlBQVksU0FBUyxFQUFFLEdBQUcsR0FBRyxFQUFFO0FBQUEsSUFDeEM7QUFBQTtBQUFBOzs7QUNSQTtBQUFBLGdHQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLGNBQWM7QUFDbEIsUUFBSSxRQUFRO0FBQ1osUUFBSSxVQUFVO0FBRWQsUUFBSSxVQUFVO0FBQ2QsUUFBSSxRQUFRLFlBQVksR0FBRyxLQUFLO0FBR2hDLElBQUFBLFFBQU8sVUFBVSxNQUFNLFdBQVk7QUFHakMsYUFBTyxDQUFDLFFBQVEsR0FBRyxFQUFFLHFCQUFxQixDQUFDO0FBQUEsSUFDN0MsQ0FBQyxJQUFJLFNBQVUsSUFBSTtBQUNqQixhQUFPLFFBQVEsRUFBRSxNQUFNLFdBQVcsTUFBTSxJQUFJLEVBQUUsSUFBSSxRQUFRLEVBQUU7QUFBQSxJQUM5RCxJQUFJO0FBQUE7QUFBQTs7O0FDZko7QUFBQSxzR0FBQUMsU0FBQTtBQUFBO0FBR0EsSUFBQUEsUUFBTyxVQUFVLFNBQVUsSUFBSTtBQUM3QixhQUFPLE9BQU8sUUFBUSxPQUFPO0FBQUEsSUFDL0I7QUFBQTtBQUFBOzs7QUNMQTtBQUFBLDBHQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLG9CQUFvQjtBQUV4QixRQUFJLGFBQWE7QUFJakIsSUFBQUEsUUFBTyxVQUFVLFNBQVUsSUFBSTtBQUM3QixVQUFJLGtCQUFrQixFQUFFO0FBQUcsY0FBTSxJQUFJLFdBQVcsMEJBQTBCLEVBQUU7QUFDNUUsYUFBTztBQUFBLElBQ1Q7QUFBQTtBQUFBOzs7QUNWQTtBQUFBLG1HQUFBQyxTQUFBO0FBQUE7QUFFQSxRQUFJLGdCQUFnQjtBQUNwQixRQUFJLHlCQUF5QjtBQUU3QixJQUFBQSxRQUFPLFVBQVUsU0FBVSxJQUFJO0FBQzdCLGFBQU8sY0FBYyx1QkFBdUIsRUFBRSxDQUFDO0FBQUEsSUFDakQ7QUFBQTtBQUFBOzs7QUNQQTtBQUFBLDZGQUFBQyxTQUFBO0FBQUE7QUFFQSxRQUFJLGNBQWMsT0FBTyxZQUFZLFlBQVksU0FBUztBQUsxRCxJQUFBQSxRQUFPLFVBQVUsT0FBTyxlQUFlLGVBQWUsZ0JBQWdCLFNBQVksU0FBVSxVQUFVO0FBQ3BHLGFBQU8sT0FBTyxZQUFZLGNBQWMsYUFBYTtBQUFBLElBQ3ZELElBQUksU0FBVSxVQUFVO0FBQ3RCLGFBQU8sT0FBTyxZQUFZO0FBQUEsSUFDNUI7QUFBQTtBQUFBOzs7QUNYQTtBQUFBLDJGQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLGFBQWE7QUFFakIsSUFBQUEsUUFBTyxVQUFVLFNBQVUsSUFBSTtBQUM3QixhQUFPLE9BQU8sTUFBTSxXQUFXLE9BQU8sT0FBTyxXQUFXLEVBQUU7QUFBQSxJQUM1RDtBQUFBO0FBQUE7OztBQ0xBO0FBQUEsOEZBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUlDLFVBQVM7QUFDYixRQUFJLGFBQWE7QUFFakIsUUFBSSxZQUFZLFNBQVUsVUFBVTtBQUNsQyxhQUFPLFdBQVcsUUFBUSxJQUFJLFdBQVc7QUFBQSxJQUMzQztBQUVBLElBQUFELFFBQU8sVUFBVSxTQUFVLFdBQVcsUUFBUTtBQUM1QyxhQUFPLFVBQVUsU0FBUyxJQUFJLFVBQVVDLFFBQU8sU0FBUyxDQUFDLElBQUlBLFFBQU8sU0FBUyxLQUFLQSxRQUFPLFNBQVMsRUFBRSxNQUFNO0FBQUEsSUFDNUc7QUFBQTtBQUFBOzs7QUNWQTtBQUFBLHdHQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLGNBQWM7QUFFbEIsSUFBQUEsUUFBTyxVQUFVLFlBQVksQ0FBQyxFQUFFLGFBQWE7QUFBQTtBQUFBOzs7QUNIN0M7QUFBQSxtR0FBQUMsU0FBQTtBQUFBO0FBQ0EsSUFBQUEsUUFBTyxVQUFVLE9BQU8sYUFBYSxlQUFlLE9BQU8sVUFBVSxTQUFTLEtBQUs7QUFBQTtBQUFBOzs7QUNEbkY7QUFBQSxtR0FBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSUMsVUFBUztBQUNiLFFBQUksWUFBWTtBQUVoQixRQUFJLFVBQVVBLFFBQU87QUFDckIsUUFBSSxPQUFPQSxRQUFPO0FBQ2xCLFFBQUksV0FBVyxXQUFXLFFBQVEsWUFBWSxRQUFRLEtBQUs7QUFDM0QsUUFBSSxLQUFLLFlBQVksU0FBUztBQUM5QixRQUFJO0FBQUosUUFBVztBQUVYLFFBQUksSUFBSTtBQUNOLGNBQVEsR0FBRyxNQUFNLEdBQUc7QUFHcEIsZ0JBQVUsTUFBTSxDQUFDLElBQUksS0FBSyxNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxNQUFNLENBQUM7QUFBQSxJQUNuRTtBQUlBLFFBQUksQ0FBQyxXQUFXLFdBQVc7QUFDekIsY0FBUSxVQUFVLE1BQU0sYUFBYTtBQUNyQyxVQUFJLENBQUMsU0FBUyxNQUFNLENBQUMsS0FBSyxJQUFJO0FBQzVCLGdCQUFRLFVBQVUsTUFBTSxlQUFlO0FBQ3ZDLFlBQUk7QUFBTyxvQkFBVSxDQUFDLE1BQU0sQ0FBQztBQUFBLE1BQy9CO0FBQUEsSUFDRjtBQUVBLElBQUFELFFBQU8sVUFBVTtBQUFBO0FBQUE7OztBQzNCakI7QUFBQSw4R0FBQUUsU0FBQTtBQUFBO0FBRUEsUUFBSSxhQUFhO0FBQ2pCLFFBQUksUUFBUTtBQUNaLFFBQUlDLFVBQVM7QUFFYixRQUFJLFVBQVVBLFFBQU87QUFHckIsSUFBQUQsUUFBTyxVQUFVLENBQUMsQ0FBQyxPQUFPLHlCQUF5QixDQUFDLE1BQU0sV0FBWTtBQUNwRSxVQUFJLFNBQVMsT0FBTyxrQkFBa0I7QUFLdEMsYUFBTyxDQUFDLFFBQVEsTUFBTSxLQUFLLEVBQUUsT0FBTyxNQUFNLGFBQWE7QUFBQSxNQUVyRCxDQUFDLE9BQU8sUUFBUSxjQUFjLGFBQWE7QUFBQSxJQUMvQyxDQUFDO0FBQUE7QUFBQTs7O0FDbEJEO0FBQUEsbUdBQUFFLFNBQUE7QUFBQTtBQUVBLFFBQUksZ0JBQWdCO0FBRXBCLElBQUFBLFFBQU8sVUFBVSxpQkFDWixDQUFDLE9BQU8sUUFDUixPQUFPLE9BQU8sWUFBWTtBQUFBO0FBQUE7OztBQ04vQjtBQUFBLDJGQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLGFBQWE7QUFDakIsUUFBSSxhQUFhO0FBQ2pCLFFBQUksZ0JBQWdCO0FBQ3BCLFFBQUksb0JBQW9CO0FBRXhCLFFBQUksVUFBVTtBQUVkLElBQUFBLFFBQU8sVUFBVSxvQkFBb0IsU0FBVSxJQUFJO0FBQ2pELGFBQU8sT0FBTyxNQUFNO0FBQUEsSUFDdEIsSUFBSSxTQUFVLElBQUk7QUFDaEIsVUFBSSxVQUFVLFdBQVcsUUFBUTtBQUNqQyxhQUFPLFdBQVcsT0FBTyxLQUFLLGNBQWMsUUFBUSxXQUFXLFFBQVEsRUFBRSxDQUFDO0FBQUEsSUFDNUU7QUFBQTtBQUFBOzs7QUNiQTtBQUFBLCtGQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLFVBQVU7QUFFZCxJQUFBQSxRQUFPLFVBQVUsU0FBVSxVQUFVO0FBQ25DLFVBQUk7QUFDRixlQUFPLFFBQVEsUUFBUTtBQUFBLE1BQ3pCLFNBQVMsT0FBTztBQUNkLGVBQU87QUFBQSxNQUNUO0FBQUEsSUFDRjtBQUFBO0FBQUE7OztBQ1RBO0FBQUEsNEZBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksYUFBYTtBQUNqQixRQUFJLGNBQWM7QUFFbEIsUUFBSSxhQUFhO0FBR2pCLElBQUFBLFFBQU8sVUFBVSxTQUFVLFVBQVU7QUFDbkMsVUFBSSxXQUFXLFFBQVE7QUFBRyxlQUFPO0FBQ2pDLFlBQU0sSUFBSSxXQUFXLFlBQVksUUFBUSxJQUFJLG9CQUFvQjtBQUFBLElBQ25FO0FBQUE7QUFBQTs7O0FDVkE7QUFBQSw0RkFBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxZQUFZO0FBQ2hCLFFBQUksb0JBQW9CO0FBSXhCLElBQUFBLFFBQU8sVUFBVSxTQUFVLEdBQUcsR0FBRztBQUMvQixVQUFJLE9BQU8sRUFBRSxDQUFDO0FBQ2QsYUFBTyxrQkFBa0IsSUFBSSxJQUFJLFNBQVksVUFBVSxJQUFJO0FBQUEsSUFDN0Q7QUFBQTtBQUFBOzs7QUNUQTtBQUFBLHVHQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLE9BQU87QUFDWCxRQUFJLGFBQWE7QUFDakIsUUFBSSxXQUFXO0FBRWYsUUFBSSxhQUFhO0FBSWpCLElBQUFBLFFBQU8sVUFBVSxTQUFVLE9BQU8sTUFBTTtBQUN0QyxVQUFJLElBQUk7QUFDUixVQUFJLFNBQVMsWUFBWSxXQUFXLEtBQUssTUFBTSxRQUFRLEtBQUssQ0FBQyxTQUFTLE1BQU0sS0FBSyxJQUFJLEtBQUssQ0FBQztBQUFHLGVBQU87QUFDckcsVUFBSSxXQUFXLEtBQUssTUFBTSxPQUFPLEtBQUssQ0FBQyxTQUFTLE1BQU0sS0FBSyxJQUFJLEtBQUssQ0FBQztBQUFHLGVBQU87QUFDL0UsVUFBSSxTQUFTLFlBQVksV0FBVyxLQUFLLE1BQU0sUUFBUSxLQUFLLENBQUMsU0FBUyxNQUFNLEtBQUssSUFBSSxLQUFLLENBQUM7QUFBRyxlQUFPO0FBQ3JHLFlBQU0sSUFBSSxXQUFXLHlDQUF5QztBQUFBLElBQ2hFO0FBQUE7QUFBQTs7O0FDZkE7QUFBQSx5RkFBQUMsU0FBQTtBQUFBO0FBQ0EsSUFBQUEsUUFBTyxVQUFVO0FBQUE7QUFBQTs7O0FDRGpCO0FBQUEsd0dBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUlDLFVBQVM7QUFHYixRQUFJLGlCQUFpQixPQUFPO0FBRTVCLElBQUFELFFBQU8sVUFBVSxTQUFVLEtBQUssT0FBTztBQUNyQyxVQUFJO0FBQ0YsdUJBQWVDLFNBQVEsS0FBSyxFQUFFLE9BQWMsY0FBYyxNQUFNLFVBQVUsS0FBSyxDQUFDO0FBQUEsTUFDbEYsU0FBUyxPQUFPO0FBQ2QsUUFBQUEsUUFBTyxHQUFHLElBQUk7QUFBQSxNQUNoQjtBQUFFLGFBQU87QUFBQSxJQUNYO0FBQUE7QUFBQTs7O0FDWkE7QUFBQSw4RkFBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxVQUFVO0FBQ2QsUUFBSUMsY0FBYTtBQUNqQixRQUFJLHVCQUF1QjtBQUUzQixRQUFJLFNBQVM7QUFDYixRQUFJLFFBQVFELFFBQU8sVUFBVUMsWUFBVyxNQUFNLEtBQUsscUJBQXFCLFFBQVEsQ0FBQyxDQUFDO0FBRWxGLEtBQUMsTUFBTSxhQUFhLE1BQU0sV0FBVyxDQUFDLElBQUksS0FBSztBQUFBLE1BQzdDLFNBQVM7QUFBQSxNQUNULE1BQU0sVUFBVSxTQUFTO0FBQUEsTUFDekIsV0FBVztBQUFBLE1BQ1gsU0FBUztBQUFBLE1BQ1QsUUFBUTtBQUFBLElBQ1YsQ0FBQztBQUFBO0FBQUE7OztBQ2REO0FBQUEsd0ZBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksUUFBUTtBQUVaLElBQUFBLFFBQU8sVUFBVSxTQUFVLEtBQUssT0FBTztBQUNyQyxhQUFPLE1BQU0sR0FBRyxNQUFNLE1BQU0sR0FBRyxJQUFJLFNBQVMsQ0FBQztBQUFBLElBQy9DO0FBQUE7QUFBQTs7O0FDTEE7QUFBQSwyRkFBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSx5QkFBeUI7QUFFN0IsUUFBSSxVQUFVO0FBSWQsSUFBQUEsUUFBTyxVQUFVLFNBQVUsVUFBVTtBQUNuQyxhQUFPLFFBQVEsdUJBQXVCLFFBQVEsQ0FBQztBQUFBLElBQ2pEO0FBQUE7QUFBQTs7O0FDVEE7QUFBQSxrR0FBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxjQUFjO0FBQ2xCLFFBQUksV0FBVztBQUVmLFFBQUksaUJBQWlCLFlBQVksQ0FBQyxFQUFFLGNBQWM7QUFLbEQsSUFBQUEsUUFBTyxVQUFVLE9BQU8sVUFBVSxTQUFTLE9BQU8sSUFBSSxLQUFLO0FBQ3pELGFBQU8sZUFBZSxTQUFTLEVBQUUsR0FBRyxHQUFHO0FBQUEsSUFDekM7QUFBQTtBQUFBOzs7QUNYQTtBQUFBLHFGQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLGNBQWM7QUFFbEIsUUFBSSxLQUFLO0FBQ1QsUUFBSSxVQUFVLEtBQUssT0FBTztBQUMxQixRQUFJLFdBQVcsWUFBWSxHQUFJLFFBQVE7QUFFdkMsSUFBQUEsUUFBTyxVQUFVLFNBQVUsS0FBSztBQUM5QixhQUFPLGFBQWEsUUFBUSxTQUFZLEtBQUssT0FBTyxPQUFPLFNBQVMsRUFBRSxLQUFLLFNBQVMsRUFBRTtBQUFBLElBQ3hGO0FBQUE7QUFBQTs7O0FDVEE7QUFBQSxtR0FBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSUMsVUFBUztBQUNiLFFBQUksU0FBUztBQUNiLFFBQUksU0FBUztBQUNiLFFBQUksTUFBTTtBQUNWLFFBQUksZ0JBQWdCO0FBQ3BCLFFBQUksb0JBQW9CO0FBRXhCLFFBQUlDLFVBQVNELFFBQU87QUFDcEIsUUFBSSx3QkFBd0IsT0FBTyxLQUFLO0FBQ3hDLFFBQUksd0JBQXdCLG9CQUFvQkMsUUFBTyxLQUFLLEtBQUtBLFVBQVNBLFdBQVVBLFFBQU8saUJBQWlCO0FBRTVHLElBQUFGLFFBQU8sVUFBVSxTQUFVLE1BQU07QUFDL0IsVUFBSSxDQUFDLE9BQU8sdUJBQXVCLElBQUksR0FBRztBQUN4Qyw4QkFBc0IsSUFBSSxJQUFJLGlCQUFpQixPQUFPRSxTQUFRLElBQUksSUFDOURBLFFBQU8sSUFBSSxJQUNYLHNCQUFzQixZQUFZLElBQUk7QUFBQSxNQUM1QztBQUFFLGFBQU8sc0JBQXNCLElBQUk7QUFBQSxJQUNyQztBQUFBO0FBQUE7OztBQ2xCQTtBQUFBLDhGQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLE9BQU87QUFDWCxRQUFJLFdBQVc7QUFDZixRQUFJLFdBQVc7QUFDZixRQUFJLFlBQVk7QUFDaEIsUUFBSSxzQkFBc0I7QUFDMUIsUUFBSSxrQkFBa0I7QUFFdEIsUUFBSSxhQUFhO0FBQ2pCLFFBQUksZUFBZSxnQkFBZ0IsYUFBYTtBQUloRCxJQUFBQSxRQUFPLFVBQVUsU0FBVSxPQUFPLE1BQU07QUFDdEMsVUFBSSxDQUFDLFNBQVMsS0FBSyxLQUFLLFNBQVMsS0FBSztBQUFHLGVBQU87QUFDaEQsVUFBSSxlQUFlLFVBQVUsT0FBTyxZQUFZO0FBQ2hELFVBQUk7QUFDSixVQUFJLGNBQWM7QUFDaEIsWUFBSSxTQUFTO0FBQVcsaUJBQU87QUFDL0IsaUJBQVMsS0FBSyxjQUFjLE9BQU8sSUFBSTtBQUN2QyxZQUFJLENBQUMsU0FBUyxNQUFNLEtBQUssU0FBUyxNQUFNO0FBQUcsaUJBQU87QUFDbEQsY0FBTSxJQUFJLFdBQVcseUNBQXlDO0FBQUEsTUFDaEU7QUFDQSxVQUFJLFNBQVM7QUFBVyxlQUFPO0FBQy9CLGFBQU8sb0JBQW9CLE9BQU8sSUFBSTtBQUFBLElBQ3hDO0FBQUE7QUFBQTs7O0FDekJBO0FBQUEsaUdBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksY0FBYztBQUNsQixRQUFJLFdBQVc7QUFJZixJQUFBQSxRQUFPLFVBQVUsU0FBVSxVQUFVO0FBQ25DLFVBQUksTUFBTSxZQUFZLFVBQVUsUUFBUTtBQUN4QyxhQUFPLFNBQVMsR0FBRyxJQUFJLE1BQU0sTUFBTTtBQUFBLElBQ3JDO0FBQUE7QUFBQTs7O0FDVEE7QUFBQSx5R0FBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSUMsVUFBUztBQUNiLFFBQUksV0FBVztBQUVmLFFBQUlDLFlBQVdELFFBQU87QUFFdEIsUUFBSSxTQUFTLFNBQVNDLFNBQVEsS0FBSyxTQUFTQSxVQUFTLGFBQWE7QUFFbEUsSUFBQUYsUUFBTyxVQUFVLFNBQVUsSUFBSTtBQUM3QixhQUFPLFNBQVNFLFVBQVMsY0FBYyxFQUFFLElBQUksQ0FBQztBQUFBLElBQ2hEO0FBQUE7QUFBQTs7O0FDVkE7QUFBQSxnR0FBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxjQUFjO0FBQ2xCLFFBQUksUUFBUTtBQUNaLFFBQUksZ0JBQWdCO0FBR3BCLElBQUFBLFFBQU8sVUFBVSxDQUFDLGVBQWUsQ0FBQyxNQUFNLFdBQVk7QUFFbEQsYUFBTyxPQUFPLGVBQWUsY0FBYyxLQUFLLEdBQUcsS0FBSztBQUFBLFFBQ3RELEtBQUssV0FBWTtBQUFFLGlCQUFPO0FBQUEsUUFBRztBQUFBLE1BQy9CLENBQUMsRUFBRSxNQUFNO0FBQUEsSUFDWCxDQUFDO0FBQUE7QUFBQTs7O0FDWEQ7QUFBQTtBQUFBO0FBQ0EsUUFBSSxjQUFjO0FBQ2xCLFFBQUksT0FBTztBQUNYLFFBQUksNkJBQTZCO0FBQ2pDLFFBQUksMkJBQTJCO0FBQy9CLFFBQUksa0JBQWtCO0FBQ3RCLFFBQUksZ0JBQWdCO0FBQ3BCLFFBQUksU0FBUztBQUNiLFFBQUksaUJBQWlCO0FBR3JCLFFBQUksNEJBQTRCLE9BQU87QUFJdkMsWUFBUSxJQUFJLGNBQWMsNEJBQTRCLFNBQVMseUJBQXlCLEdBQUcsR0FBRztBQUM1RixVQUFJLGdCQUFnQixDQUFDO0FBQ3JCLFVBQUksY0FBYyxDQUFDO0FBQ25CLFVBQUk7QUFBZ0IsWUFBSTtBQUN0QixpQkFBTywwQkFBMEIsR0FBRyxDQUFDO0FBQUEsUUFDdkMsU0FBUyxPQUFPO0FBQUEsUUFBYztBQUM5QixVQUFJLE9BQU8sR0FBRyxDQUFDO0FBQUcsZUFBTyx5QkFBeUIsQ0FBQyxLQUFLLDJCQUEyQixHQUFHLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQUEsSUFDbkc7QUFBQTtBQUFBOzs7QUN0QkE7QUFBQSx5R0FBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxjQUFjO0FBQ2xCLFFBQUksUUFBUTtBQUlaLElBQUFBLFFBQU8sVUFBVSxlQUFlLE1BQU0sV0FBWTtBQUVoRCxhQUFPLE9BQU8sZUFBZSxXQUFZO0FBQUEsTUFBYyxHQUFHLGFBQWE7QUFBQSxRQUNyRSxPQUFPO0FBQUEsUUFDUCxVQUFVO0FBQUEsTUFDWixDQUFDLEVBQUUsY0FBYztBQUFBLElBQ25CLENBQUM7QUFBQTtBQUFBOzs7QUNaRDtBQUFBLDJGQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLFdBQVc7QUFFZixRQUFJLFVBQVU7QUFDZCxRQUFJLGFBQWE7QUFHakIsSUFBQUEsUUFBTyxVQUFVLFNBQVUsVUFBVTtBQUNuQyxVQUFJLFNBQVMsUUFBUTtBQUFHLGVBQU87QUFDL0IsWUFBTSxJQUFJLFdBQVcsUUFBUSxRQUFRLElBQUksbUJBQW1CO0FBQUEsSUFDOUQ7QUFBQTtBQUFBOzs7QUNWQTtBQUFBO0FBQUE7QUFDQSxRQUFJLGNBQWM7QUFDbEIsUUFBSSxpQkFBaUI7QUFDckIsUUFBSSwwQkFBMEI7QUFDOUIsUUFBSSxXQUFXO0FBQ2YsUUFBSSxnQkFBZ0I7QUFFcEIsUUFBSSxhQUFhO0FBRWpCLFFBQUksa0JBQWtCLE9BQU87QUFFN0IsUUFBSSw0QkFBNEIsT0FBTztBQUN2QyxRQUFJLGFBQWE7QUFDakIsUUFBSSxlQUFlO0FBQ25CLFFBQUksV0FBVztBQUlmLFlBQVEsSUFBSSxjQUFjLDBCQUEwQixTQUFTLGVBQWUsR0FBRyxHQUFHLFlBQVk7QUFDNUYsZUFBUyxDQUFDO0FBQ1YsVUFBSSxjQUFjLENBQUM7QUFDbkIsZUFBUyxVQUFVO0FBQ25CLFVBQUksT0FBTyxNQUFNLGNBQWMsTUFBTSxlQUFlLFdBQVcsY0FBYyxZQUFZLGNBQWMsQ0FBQyxXQUFXLFFBQVEsR0FBRztBQUM1SCxZQUFJLFVBQVUsMEJBQTBCLEdBQUcsQ0FBQztBQUM1QyxZQUFJLFdBQVcsUUFBUSxRQUFRLEdBQUc7QUFDaEMsWUFBRSxDQUFDLElBQUksV0FBVztBQUNsQix1QkFBYTtBQUFBLFlBQ1gsY0FBYyxnQkFBZ0IsYUFBYSxXQUFXLFlBQVksSUFBSSxRQUFRLFlBQVk7QUFBQSxZQUMxRixZQUFZLGNBQWMsYUFBYSxXQUFXLFVBQVUsSUFBSSxRQUFRLFVBQVU7QUFBQSxZQUNsRixVQUFVO0FBQUEsVUFDWjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUUsYUFBTyxnQkFBZ0IsR0FBRyxHQUFHLFVBQVU7QUFBQSxJQUMzQyxJQUFJLGtCQUFrQixTQUFTLGVBQWUsR0FBRyxHQUFHLFlBQVk7QUFDOUQsZUFBUyxDQUFDO0FBQ1YsVUFBSSxjQUFjLENBQUM7QUFDbkIsZUFBUyxVQUFVO0FBQ25CLFVBQUk7QUFBZ0IsWUFBSTtBQUN0QixpQkFBTyxnQkFBZ0IsR0FBRyxHQUFHLFVBQVU7QUFBQSxRQUN6QyxTQUFTLE9BQU87QUFBQSxRQUFjO0FBQzlCLFVBQUksU0FBUyxjQUFjLFNBQVM7QUFBWSxjQUFNLElBQUksV0FBVyx5QkFBeUI7QUFDOUYsVUFBSSxXQUFXO0FBQVksVUFBRSxDQUFDLElBQUksV0FBVztBQUM3QyxhQUFPO0FBQUEsSUFDVDtBQUFBO0FBQUE7OztBQzNDQTtBQUFBLGdIQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLGNBQWM7QUFDbEIsUUFBSSx1QkFBdUI7QUFDM0IsUUFBSSwyQkFBMkI7QUFFL0IsSUFBQUEsUUFBTyxVQUFVLGNBQWMsU0FBVSxRQUFRLEtBQUssT0FBTztBQUMzRCxhQUFPLHFCQUFxQixFQUFFLFFBQVEsS0FBSyx5QkFBeUIsR0FBRyxLQUFLLENBQUM7QUFBQSxJQUMvRSxJQUFJLFNBQVUsUUFBUSxLQUFLLE9BQU87QUFDaEMsYUFBTyxHQUFHLElBQUk7QUFDZCxhQUFPO0FBQUEsSUFDVDtBQUFBO0FBQUE7OztBQ1ZBO0FBQUEsK0ZBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksY0FBYztBQUNsQixRQUFJLFNBQVM7QUFFYixRQUFJLG9CQUFvQixTQUFTO0FBRWpDLFFBQUksZ0JBQWdCLGVBQWUsT0FBTztBQUUxQyxRQUFJLFNBQVMsT0FBTyxtQkFBbUIsTUFBTTtBQUU3QyxRQUFJLFNBQVMsVUFBVyxTQUFTLFlBQVk7QUFBQSxJQUFjLEVBQUcsU0FBUztBQUN2RSxRQUFJLGVBQWUsV0FBVyxDQUFDLGVBQWdCLGVBQWUsY0FBYyxtQkFBbUIsTUFBTSxFQUFFO0FBRXZHLElBQUFBLFFBQU8sVUFBVTtBQUFBLE1BQ2Y7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQTtBQUFBOzs7QUNqQkE7QUFBQSxnR0FBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxjQUFjO0FBQ2xCLFFBQUksYUFBYTtBQUNqQixRQUFJLFFBQVE7QUFFWixRQUFJLG1CQUFtQixZQUFZLFNBQVMsUUFBUTtBQUdwRCxRQUFJLENBQUMsV0FBVyxNQUFNLGFBQWEsR0FBRztBQUNwQyxZQUFNLGdCQUFnQixTQUFVLElBQUk7QUFDbEMsZUFBTyxpQkFBaUIsRUFBRTtBQUFBLE1BQzVCO0FBQUEsSUFDRjtBQUVBLElBQUFBLFFBQU8sVUFBVSxNQUFNO0FBQUE7QUFBQTs7O0FDZHZCO0FBQUEsMEdBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUlDLFVBQVM7QUFDYixRQUFJLGFBQWE7QUFFakIsUUFBSSxVQUFVQSxRQUFPO0FBRXJCLElBQUFELFFBQU8sVUFBVSxXQUFXLE9BQU8sS0FBSyxjQUFjLEtBQUssT0FBTyxPQUFPLENBQUM7QUFBQTtBQUFBOzs7QUNOMUU7QUFBQSw0RkFBQUUsU0FBQTtBQUFBO0FBQ0EsUUFBSSxTQUFTO0FBQ2IsUUFBSSxNQUFNO0FBRVYsUUFBSSxPQUFPLE9BQU8sTUFBTTtBQUV4QixJQUFBQSxRQUFPLFVBQVUsU0FBVSxLQUFLO0FBQzlCLGFBQU8sS0FBSyxHQUFHLE1BQU0sS0FBSyxHQUFHLElBQUksSUFBSSxHQUFHO0FBQUEsSUFDMUM7QUFBQTtBQUFBOzs7QUNSQTtBQUFBLDZGQUFBQyxTQUFBO0FBQUE7QUFDQSxJQUFBQSxRQUFPLFVBQVUsQ0FBQztBQUFBO0FBQUE7OztBQ0RsQjtBQUFBLGdHQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLGtCQUFrQjtBQUN0QixRQUFJQyxVQUFTO0FBQ2IsUUFBSSxXQUFXO0FBQ2YsUUFBSSw4QkFBOEI7QUFDbEMsUUFBSSxTQUFTO0FBQ2IsUUFBSSxTQUFTO0FBQ2IsUUFBSSxZQUFZO0FBQ2hCLFFBQUksYUFBYTtBQUVqQixRQUFJLDZCQUE2QjtBQUNqQyxRQUFJQyxhQUFZRCxRQUFPO0FBQ3ZCLFFBQUksVUFBVUEsUUFBTztBQUNyQixRQUFJO0FBQUosUUFBUztBQUFULFFBQWM7QUFFZCxRQUFJLFVBQVUsU0FBVSxJQUFJO0FBQzFCLGFBQU8sSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQztBQUFBLElBQ3ZDO0FBRUEsUUFBSSxZQUFZLFNBQVUsTUFBTTtBQUM5QixhQUFPLFNBQVUsSUFBSTtBQUNuQixZQUFJO0FBQ0osWUFBSSxDQUFDLFNBQVMsRUFBRSxNQUFNLFFBQVEsSUFBSSxFQUFFLEdBQUcsU0FBUyxNQUFNO0FBQ3BELGdCQUFNLElBQUlDLFdBQVUsNEJBQTRCLE9BQU8sV0FBVztBQUFBLFFBQ3BFO0FBQUUsZUFBTztBQUFBLE1BQ1g7QUFBQSxJQUNGO0FBRUEsUUFBSSxtQkFBbUIsT0FBTyxPQUFPO0FBQy9CLGNBQVEsT0FBTyxVQUFVLE9BQU8sUUFBUSxJQUFJLFFBQVE7QUFFeEQsWUFBTSxNQUFNLE1BQU07QUFDbEIsWUFBTSxNQUFNLE1BQU07QUFDbEIsWUFBTSxNQUFNLE1BQU07QUFFbEIsWUFBTSxTQUFVLElBQUksVUFBVTtBQUM1QixZQUFJLE1BQU0sSUFBSSxFQUFFO0FBQUcsZ0JBQU0sSUFBSUEsV0FBVSwwQkFBMEI7QUFDakUsaUJBQVMsU0FBUztBQUNsQixjQUFNLElBQUksSUFBSSxRQUFRO0FBQ3RCLGVBQU87QUFBQSxNQUNUO0FBQ0EsWUFBTSxTQUFVLElBQUk7QUFDbEIsZUFBTyxNQUFNLElBQUksRUFBRSxLQUFLLENBQUM7QUFBQSxNQUMzQjtBQUNBLFlBQU0sU0FBVSxJQUFJO0FBQ2xCLGVBQU8sTUFBTSxJQUFJLEVBQUU7QUFBQSxNQUNyQjtBQUFBLElBQ0YsT0FBTztBQUNELGNBQVEsVUFBVSxPQUFPO0FBQzdCLGlCQUFXLEtBQUssSUFBSTtBQUNwQixZQUFNLFNBQVUsSUFBSSxVQUFVO0FBQzVCLFlBQUksT0FBTyxJQUFJLEtBQUs7QUFBRyxnQkFBTSxJQUFJQSxXQUFVLDBCQUEwQjtBQUNyRSxpQkFBUyxTQUFTO0FBQ2xCLG9DQUE0QixJQUFJLE9BQU8sUUFBUTtBQUMvQyxlQUFPO0FBQUEsTUFDVDtBQUNBLFlBQU0sU0FBVSxJQUFJO0FBQ2xCLGVBQU8sT0FBTyxJQUFJLEtBQUssSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDO0FBQUEsTUFDMUM7QUFDQSxZQUFNLFNBQVUsSUFBSTtBQUNsQixlQUFPLE9BQU8sSUFBSSxLQUFLO0FBQUEsTUFDekI7QUFBQSxJQUNGO0FBakNNO0FBbUJBO0FBZ0JOLElBQUFGLFFBQU8sVUFBVTtBQUFBLE1BQ2Y7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBO0FBQUE7OztBQ3RFQTtBQUFBLCtGQUFBRyxTQUFBO0FBQUE7QUFDQSxRQUFJLGNBQWM7QUFDbEIsUUFBSSxRQUFRO0FBQ1osUUFBSSxhQUFhO0FBQ2pCLFFBQUksU0FBUztBQUNiLFFBQUksY0FBYztBQUNsQixRQUFJLDZCQUE2Qix3QkFBc0M7QUFDdkUsUUFBSSxnQkFBZ0I7QUFDcEIsUUFBSSxzQkFBc0I7QUFFMUIsUUFBSSx1QkFBdUIsb0JBQW9CO0FBQy9DLFFBQUksbUJBQW1CLG9CQUFvQjtBQUMzQyxRQUFJLFVBQVU7QUFFZCxRQUFJLGlCQUFpQixPQUFPO0FBQzVCLFFBQUksY0FBYyxZQUFZLEdBQUcsS0FBSztBQUN0QyxRQUFJLFVBQVUsWUFBWSxHQUFHLE9BQU87QUFDcEMsUUFBSSxPQUFPLFlBQVksQ0FBQyxFQUFFLElBQUk7QUFFOUIsUUFBSSxzQkFBc0IsZUFBZSxDQUFDLE1BQU0sV0FBWTtBQUMxRCxhQUFPLGVBQWUsV0FBWTtBQUFBLE1BQWMsR0FBRyxVQUFVLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxXQUFXO0FBQUEsSUFDeEYsQ0FBQztBQUVELFFBQUksV0FBVyxPQUFPLE1BQU0sRUFBRSxNQUFNLFFBQVE7QUFFNUMsUUFBSSxjQUFjQSxRQUFPLFVBQVUsU0FBVSxPQUFPLE1BQU0sU0FBUztBQUNqRSxVQUFJLFlBQVksUUFBUSxJQUFJLEdBQUcsR0FBRyxDQUFDLE1BQU0sV0FBVztBQUNsRCxlQUFPLE1BQU0sUUFBUSxRQUFRLElBQUksR0FBRyx5QkFBeUIsSUFBSSxJQUFJO0FBQUEsTUFDdkU7QUFDQSxVQUFJLFdBQVcsUUFBUTtBQUFRLGVBQU8sU0FBUztBQUMvQyxVQUFJLFdBQVcsUUFBUTtBQUFRLGVBQU8sU0FBUztBQUMvQyxVQUFJLENBQUMsT0FBTyxPQUFPLE1BQU0sS0FBTSw4QkFBOEIsTUFBTSxTQUFTLE1BQU87QUFDakYsWUFBSTtBQUFhLHlCQUFlLE9BQU8sUUFBUSxFQUFFLE9BQU8sTUFBTSxjQUFjLEtBQUssQ0FBQztBQUFBO0FBQzdFLGdCQUFNLE9BQU87QUFBQSxNQUNwQjtBQUNBLFVBQUksdUJBQXVCLFdBQVcsT0FBTyxTQUFTLE9BQU8sS0FBSyxNQUFNLFdBQVcsUUFBUSxPQUFPO0FBQ2hHLHVCQUFlLE9BQU8sVUFBVSxFQUFFLE9BQU8sUUFBUSxNQUFNLENBQUM7QUFBQSxNQUMxRDtBQUNBLFVBQUk7QUFDRixZQUFJLFdBQVcsT0FBTyxTQUFTLGFBQWEsS0FBSyxRQUFRLGFBQWE7QUFDcEUsY0FBSTtBQUFhLDJCQUFlLE9BQU8sYUFBYSxFQUFFLFVBQVUsTUFBTSxDQUFDO0FBQUEsUUFFekUsV0FBVyxNQUFNO0FBQVcsZ0JBQU0sWUFBWTtBQUFBLE1BQ2hELFNBQVMsT0FBTztBQUFBLE1BQWM7QUFDOUIsVUFBSSxRQUFRLHFCQUFxQixLQUFLO0FBQ3RDLFVBQUksQ0FBQyxPQUFPLE9BQU8sUUFBUSxHQUFHO0FBQzVCLGNBQU0sU0FBUyxLQUFLLFVBQVUsT0FBTyxRQUFRLFdBQVcsT0FBTyxFQUFFO0FBQUEsTUFDbkU7QUFBRSxhQUFPO0FBQUEsSUFDWDtBQUlBLGFBQVMsVUFBVSxXQUFXLFlBQVksU0FBUyxXQUFXO0FBQzVELGFBQU8sV0FBVyxJQUFJLEtBQUssaUJBQWlCLElBQUksRUFBRSxVQUFVLGNBQWMsSUFBSTtBQUFBLElBQ2hGLEdBQUcsVUFBVTtBQUFBO0FBQUE7OztBQ3REYjtBQUFBLGlHQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLGFBQWE7QUFDakIsUUFBSSx1QkFBdUI7QUFDM0IsUUFBSSxjQUFjO0FBQ2xCLFFBQUksdUJBQXVCO0FBRTNCLElBQUFBLFFBQU8sVUFBVSxTQUFVLEdBQUcsS0FBSyxPQUFPLFNBQVM7QUFDakQsVUFBSSxDQUFDO0FBQVMsa0JBQVUsQ0FBQztBQUN6QixVQUFJLFNBQVMsUUFBUTtBQUNyQixVQUFJLE9BQU8sUUFBUSxTQUFTLFNBQVksUUFBUSxPQUFPO0FBQ3ZELFVBQUksV0FBVyxLQUFLO0FBQUcsb0JBQVksT0FBTyxNQUFNLE9BQU87QUFDdkQsVUFBSSxRQUFRLFFBQVE7QUFDbEIsWUFBSTtBQUFRLFlBQUUsR0FBRyxJQUFJO0FBQUE7QUFDaEIsK0JBQXFCLEtBQUssS0FBSztBQUFBLE1BQ3RDLE9BQU87QUFDTCxZQUFJO0FBQ0YsY0FBSSxDQUFDLFFBQVE7QUFBUSxtQkFBTyxFQUFFLEdBQUc7QUFBQSxtQkFDeEIsRUFBRSxHQUFHO0FBQUcscUJBQVM7QUFBQSxRQUM1QixTQUFTLE9BQU87QUFBQSxRQUFjO0FBQzlCLFlBQUk7QUFBUSxZQUFFLEdBQUcsSUFBSTtBQUFBO0FBQ2hCLCtCQUFxQixFQUFFLEdBQUcsS0FBSztBQUFBLFlBQ2xDO0FBQUEsWUFDQSxZQUFZO0FBQUEsWUFDWixjQUFjLENBQUMsUUFBUTtBQUFBLFlBQ3ZCLFVBQVUsQ0FBQyxRQUFRO0FBQUEsVUFDckIsQ0FBQztBQUFBLE1BQ0g7QUFBRSxhQUFPO0FBQUEsSUFDWDtBQUFBO0FBQUE7OztBQzNCQTtBQUFBLDRGQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLE9BQU8sS0FBSztBQUNoQixRQUFJLFFBQVEsS0FBSztBQUtqQixJQUFBQSxRQUFPLFVBQVUsS0FBSyxTQUFTLFNBQVMsTUFBTSxHQUFHO0FBQy9DLFVBQUksSUFBSSxDQUFDO0FBQ1QsY0FBUSxJQUFJLElBQUksUUFBUSxNQUFNLENBQUM7QUFBQSxJQUNqQztBQUFBO0FBQUE7OztBQ1ZBO0FBQUEsd0dBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksUUFBUTtBQUlaLElBQUFBLFFBQU8sVUFBVSxTQUFVLFVBQVU7QUFDbkMsVUFBSSxTQUFTLENBQUM7QUFFZCxhQUFPLFdBQVcsVUFBVSxXQUFXLElBQUksSUFBSSxNQUFNLE1BQU07QUFBQSxJQUM3RDtBQUFBO0FBQUE7OztBQ1RBO0FBQUEsbUdBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksc0JBQXNCO0FBRTFCLFFBQUksTUFBTSxLQUFLO0FBQ2YsUUFBSSxNQUFNLEtBQUs7QUFLZixJQUFBQSxRQUFPLFVBQVUsU0FBVSxPQUFPLFFBQVE7QUFDeEMsVUFBSSxVQUFVLG9CQUFvQixLQUFLO0FBQ3ZDLGFBQU8sVUFBVSxJQUFJLElBQUksVUFBVSxRQUFRLENBQUMsSUFBSSxJQUFJLFNBQVMsTUFBTTtBQUFBLElBQ3JFO0FBQUE7QUFBQTs7O0FDWkE7QUFBQSwyRkFBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxzQkFBc0I7QUFFMUIsUUFBSSxNQUFNLEtBQUs7QUFJZixJQUFBQSxRQUFPLFVBQVUsU0FBVSxVQUFVO0FBQ25DLFVBQUksTUFBTSxvQkFBb0IsUUFBUTtBQUN0QyxhQUFPLE1BQU0sSUFBSSxJQUFJLEtBQUssZ0JBQWdCLElBQUk7QUFBQSxJQUNoRDtBQUFBO0FBQUE7OztBQ1ZBO0FBQUEsc0dBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksV0FBVztBQUlmLElBQUFBLFFBQU8sVUFBVSxTQUFVLEtBQUs7QUFDOUIsYUFBTyxTQUFTLElBQUksTUFBTTtBQUFBLElBQzVCO0FBQUE7QUFBQTs7O0FDUEE7QUFBQSxnR0FBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxrQkFBa0I7QUFDdEIsUUFBSSxrQkFBa0I7QUFDdEIsUUFBSSxvQkFBb0I7QUFHeEIsUUFBSSxlQUFlLFNBQVUsYUFBYTtBQUN4QyxhQUFPLFNBQVUsT0FBTyxJQUFJLFdBQVc7QUFDckMsWUFBSSxJQUFJLGdCQUFnQixLQUFLO0FBQzdCLFlBQUksU0FBUyxrQkFBa0IsQ0FBQztBQUNoQyxZQUFJLFdBQVc7QUFBRyxpQkFBTyxDQUFDLGVBQWU7QUFDekMsWUFBSSxRQUFRLGdCQUFnQixXQUFXLE1BQU07QUFDN0MsWUFBSTtBQUdKLFlBQUksZUFBZSxPQUFPO0FBQUksaUJBQU8sU0FBUyxPQUFPO0FBQ25ELG9CQUFRLEVBQUUsT0FBTztBQUVqQixnQkFBSSxVQUFVO0FBQU8scUJBQU87QUFBQSxVQUU5QjtBQUFBO0FBQU8saUJBQU0sU0FBUyxPQUFPLFNBQVM7QUFDcEMsaUJBQUssZUFBZSxTQUFTLE1BQU0sRUFBRSxLQUFLLE1BQU07QUFBSSxxQkFBTyxlQUFlLFNBQVM7QUFBQSxVQUNyRjtBQUFFLGVBQU8sQ0FBQyxlQUFlO0FBQUEsTUFDM0I7QUFBQSxJQUNGO0FBRUEsSUFBQUEsUUFBTyxVQUFVO0FBQUE7QUFBQTtBQUFBLE1BR2YsVUFBVSxhQUFhLElBQUk7QUFBQTtBQUFBO0FBQUEsTUFHM0IsU0FBUyxhQUFhLEtBQUs7QUFBQSxJQUM3QjtBQUFBO0FBQUE7OztBQ2pDQTtBQUFBLHNHQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLGNBQWM7QUFDbEIsUUFBSSxTQUFTO0FBQ2IsUUFBSSxrQkFBa0I7QUFDdEIsUUFBSSxVQUFVLHlCQUF1QztBQUNyRCxRQUFJLGFBQWE7QUFFakIsUUFBSSxPQUFPLFlBQVksQ0FBQyxFQUFFLElBQUk7QUFFOUIsSUFBQUEsUUFBTyxVQUFVLFNBQVUsUUFBUSxPQUFPO0FBQ3hDLFVBQUksSUFBSSxnQkFBZ0IsTUFBTTtBQUM5QixVQUFJLElBQUk7QUFDUixVQUFJLFNBQVMsQ0FBQztBQUNkLFVBQUk7QUFDSixXQUFLLE9BQU87QUFBRyxTQUFDLE9BQU8sWUFBWSxHQUFHLEtBQUssT0FBTyxHQUFHLEdBQUcsS0FBSyxLQUFLLFFBQVEsR0FBRztBQUU3RSxhQUFPLE1BQU0sU0FBUztBQUFHLFlBQUksT0FBTyxHQUFHLE1BQU0sTUFBTSxHQUFHLENBQUMsR0FBRztBQUN4RCxXQUFDLFFBQVEsUUFBUSxHQUFHLEtBQUssS0FBSyxRQUFRLEdBQUc7QUFBQSxRQUMzQztBQUNBLGFBQU87QUFBQSxJQUNUO0FBQUE7QUFBQTs7O0FDcEJBO0FBQUEsK0ZBQUFDLFNBQUE7QUFBQTtBQUVBLElBQUFBLFFBQU8sVUFBVTtBQUFBLE1BQ2Y7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUE7QUFBQTs7O0FDVkE7QUFBQTtBQUFBO0FBQ0EsUUFBSSxxQkFBcUI7QUFDekIsUUFBSSxjQUFjO0FBRWxCLFFBQUksYUFBYSxZQUFZLE9BQU8sVUFBVSxXQUFXO0FBS3pELFlBQVEsSUFBSSxPQUFPLHVCQUF1QixTQUFTLG9CQUFvQixHQUFHO0FBQ3hFLGFBQU8sbUJBQW1CLEdBQUcsVUFBVTtBQUFBLElBQ3pDO0FBQUE7QUFBQTs7O0FDWEE7QUFBQTtBQUFBO0FBRUEsWUFBUSxJQUFJLE9BQU87QUFBQTtBQUFBOzs7QUNGbkI7QUFBQSwwRkFBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxhQUFhO0FBQ2pCLFFBQUksY0FBYztBQUNsQixRQUFJLDRCQUE0QjtBQUNoQyxRQUFJLDhCQUE4QjtBQUNsQyxRQUFJLFdBQVc7QUFFZixRQUFJLFNBQVMsWUFBWSxDQUFDLEVBQUUsTUFBTTtBQUdsQyxJQUFBQSxRQUFPLFVBQVUsV0FBVyxXQUFXLFNBQVMsS0FBSyxTQUFTLFFBQVEsSUFBSTtBQUN4RSxVQUFJLE9BQU8sMEJBQTBCLEVBQUUsU0FBUyxFQUFFLENBQUM7QUFDbkQsVUFBSSx3QkFBd0IsNEJBQTRCO0FBQ3hELGFBQU8sd0JBQXdCLE9BQU8sTUFBTSxzQkFBc0IsRUFBRSxDQUFDLElBQUk7QUFBQSxJQUMzRTtBQUFBO0FBQUE7OztBQ2RBO0FBQUEsNkdBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksU0FBUztBQUNiLFFBQUksVUFBVTtBQUNkLFFBQUksaUNBQWlDO0FBQ3JDLFFBQUksdUJBQXVCO0FBRTNCLElBQUFBLFFBQU8sVUFBVSxTQUFVLFFBQVEsUUFBUSxZQUFZO0FBQ3JELFVBQUksT0FBTyxRQUFRLE1BQU07QUFDekIsVUFBSSxpQkFBaUIscUJBQXFCO0FBQzFDLFVBQUksMkJBQTJCLCtCQUErQjtBQUM5RCxlQUFTLElBQUksR0FBRyxJQUFJLEtBQUssUUFBUSxLQUFLO0FBQ3BDLFlBQUksTUFBTSxLQUFLLENBQUM7QUFDaEIsWUFBSSxDQUFDLE9BQU8sUUFBUSxHQUFHLEtBQUssRUFBRSxjQUFjLE9BQU8sWUFBWSxHQUFHLElBQUk7QUFDcEUseUJBQWUsUUFBUSxLQUFLLHlCQUF5QixRQUFRLEdBQUcsQ0FBQztBQUFBLFFBQ25FO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQTtBQUFBOzs7QUNoQkE7QUFBQSwyRkFBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxRQUFRO0FBQ1osUUFBSSxhQUFhO0FBRWpCLFFBQUksY0FBYztBQUVsQixRQUFJLFdBQVcsU0FBVSxTQUFTLFdBQVc7QUFDM0MsVUFBSSxRQUFRLEtBQUssVUFBVSxPQUFPLENBQUM7QUFDbkMsYUFBTyxVQUFVLFdBQVcsT0FDeEIsVUFBVSxTQUFTLFFBQ25CLFdBQVcsU0FBUyxJQUFJLE1BQU0sU0FBUyxJQUN2QyxDQUFDLENBQUM7QUFBQSxJQUNSO0FBRUEsUUFBSSxZQUFZLFNBQVMsWUFBWSxTQUFVLFFBQVE7QUFDckQsYUFBTyxPQUFPLE1BQU0sRUFBRSxRQUFRLGFBQWEsR0FBRyxFQUFFLFlBQVk7QUFBQSxJQUM5RDtBQUVBLFFBQUksT0FBTyxTQUFTLE9BQU8sQ0FBQztBQUM1QixRQUFJLFNBQVMsU0FBUyxTQUFTO0FBQy9CLFFBQUksV0FBVyxTQUFTLFdBQVc7QUFFbkMsSUFBQUEsUUFBTyxVQUFVO0FBQUE7QUFBQTs7O0FDdEJqQjtBQUFBLHdGQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJQyxVQUFTO0FBQ2IsUUFBSSwyQkFBMkIsNkNBQTJEO0FBQzFGLFFBQUksOEJBQThCO0FBQ2xDLFFBQUksZ0JBQWdCO0FBQ3BCLFFBQUksdUJBQXVCO0FBQzNCLFFBQUksNEJBQTRCO0FBQ2hDLFFBQUksV0FBVztBQWlCZixJQUFBRCxRQUFPLFVBQVUsU0FBVSxTQUFTLFFBQVE7QUFDMUMsVUFBSSxTQUFTLFFBQVE7QUFDckIsVUFBSSxTQUFTLFFBQVE7QUFDckIsVUFBSSxTQUFTLFFBQVE7QUFDckIsVUFBSSxRQUFRLFFBQVEsS0FBSyxnQkFBZ0IsZ0JBQWdCO0FBQ3pELFVBQUksUUFBUTtBQUNWLGlCQUFTQztBQUFBLE1BQ1gsV0FBVyxRQUFRO0FBQ2pCLGlCQUFTQSxRQUFPLE1BQU0sS0FBSyxxQkFBcUIsUUFBUSxDQUFDLENBQUM7QUFBQSxNQUM1RCxPQUFPO0FBQ0wsaUJBQVNBLFFBQU8sTUFBTSxLQUFLQSxRQUFPLE1BQU0sRUFBRTtBQUFBLE1BQzVDO0FBQ0EsVUFBSTtBQUFRLGFBQUssT0FBTyxRQUFRO0FBQzlCLDJCQUFpQixPQUFPLEdBQUc7QUFDM0IsY0FBSSxRQUFRLGdCQUFnQjtBQUMxQix5QkFBYSx5QkFBeUIsUUFBUSxHQUFHO0FBQ2pELDZCQUFpQixjQUFjLFdBQVc7QUFBQSxVQUM1QztBQUFPLDZCQUFpQixPQUFPLEdBQUc7QUFDbEMsbUJBQVMsU0FBUyxTQUFTLE1BQU0sVUFBVSxTQUFTLE1BQU0sT0FBTyxLQUFLLFFBQVEsTUFBTTtBQUVwRixjQUFJLENBQUMsVUFBVSxtQkFBbUIsUUFBVztBQUMzQyxnQkFBSSxPQUFPLGtCQUFrQixPQUFPO0FBQWdCO0FBQ3BELHNDQUEwQixnQkFBZ0IsY0FBYztBQUFBLFVBQzFEO0FBRUEsY0FBSSxRQUFRLFFBQVMsa0JBQWtCLGVBQWUsTUFBTztBQUMzRCx3Q0FBNEIsZ0JBQWdCLFFBQVEsSUFBSTtBQUFBLFVBQzFEO0FBQ0Esd0JBQWMsUUFBUSxLQUFLLGdCQUFnQixPQUFPO0FBQUEsUUFDcEQ7QUFBQSxJQUNGO0FBQUE7QUFBQTs7O0FDdERBO0FBQUEsMEZBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksVUFBVTtBQUtkLElBQUFBLFFBQU8sVUFBVSxNQUFNLFdBQVcsU0FBUyxRQUFRLFVBQVU7QUFDM0QsYUFBTyxRQUFRLFFBQVEsTUFBTTtBQUFBLElBQy9CO0FBQUE7QUFBQTs7O0FDUkE7QUFBQSxrR0FBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxjQUFjO0FBQ2xCLFFBQUksVUFBVTtBQUVkLFFBQUksYUFBYTtBQUVqQixRQUFJLDJCQUEyQixPQUFPO0FBR3RDLFFBQUksb0NBQW9DLGVBQWUsQ0FBQyxXQUFZO0FBRWxFLFVBQUksU0FBUztBQUFXLGVBQU87QUFDL0IsVUFBSTtBQUVGLGVBQU8sZUFBZSxDQUFDLEdBQUcsVUFBVSxFQUFFLFVBQVUsTUFBTSxDQUFDLEVBQUUsU0FBUztBQUFBLE1BQ3BFLFNBQVMsT0FBTztBQUNkLGVBQU8saUJBQWlCO0FBQUEsTUFDMUI7QUFBQSxJQUNGLEVBQUU7QUFFRixJQUFBQSxRQUFPLFVBQVUsb0NBQW9DLFNBQVUsR0FBRyxRQUFRO0FBQ3hFLFVBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsR0FBRyxRQUFRLEVBQUUsVUFBVTtBQUNqRSxjQUFNLElBQUksV0FBVyw4QkFBOEI7QUFBQSxNQUNyRDtBQUFFLGFBQU8sRUFBRSxTQUFTO0FBQUEsSUFDdEIsSUFBSSxTQUFVLEdBQUcsUUFBUTtBQUN2QixhQUFPLEVBQUUsU0FBUztBQUFBLElBQ3BCO0FBQUE7QUFBQTs7O0FDMUJBO0FBQUEsOEdBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksYUFBYTtBQUNqQixRQUFJLG1CQUFtQjtBQUV2QixJQUFBQSxRQUFPLFVBQVUsU0FBVSxJQUFJO0FBQzdCLFVBQUksS0FBSztBQUFrQixjQUFNLFdBQVcsZ0NBQWdDO0FBQzVFLGFBQU87QUFBQSxJQUNUO0FBQUE7QUFBQTs7O0FDUEE7QUFBQTtBQUFBO0FBQ0EsUUFBSSxJQUFJO0FBQ1IsUUFBSSxXQUFXO0FBQ2YsUUFBSSxvQkFBb0I7QUFDeEIsUUFBSSxpQkFBaUI7QUFDckIsUUFBSSwyQkFBMkI7QUFDL0IsUUFBSSxRQUFRO0FBRVosUUFBSSxzQkFBc0IsTUFBTSxXQUFZO0FBQzFDLGFBQU8sQ0FBQyxFQUFFLEtBQUssS0FBSyxFQUFFLFFBQVEsV0FBWSxHQUFHLENBQUMsTUFBTTtBQUFBLElBQ3RELENBQUM7QUFJRCxRQUFJLGlDQUFpQyxXQUFZO0FBQy9DLFVBQUk7QUFFRixlQUFPLGVBQWUsQ0FBQyxHQUFHLFVBQVUsRUFBRSxVQUFVLE1BQU0sQ0FBQyxFQUFFLEtBQUs7QUFBQSxNQUNoRSxTQUFTLE9BQU87QUFDZCxlQUFPLGlCQUFpQjtBQUFBLE1BQzFCO0FBQUEsSUFDRjtBQUVBLFFBQUksU0FBUyx1QkFBdUIsQ0FBQywrQkFBK0I7QUFJcEUsTUFBRSxFQUFFLFFBQVEsU0FBUyxPQUFPLE1BQU0sT0FBTyxHQUFHLFFBQVEsT0FBTyxHQUFHO0FBQUE7QUFBQSxNQUU1RCxNQUFNLFNBQVMsS0FBSyxNQUFNO0FBQ3hCLFlBQUksSUFBSSxTQUFTLElBQUk7QUFDckIsWUFBSSxNQUFNLGtCQUFrQixDQUFDO0FBQzdCLFlBQUksV0FBVyxVQUFVO0FBQ3pCLGlDQUF5QixNQUFNLFFBQVE7QUFDdkMsaUJBQVMsSUFBSSxHQUFHLElBQUksVUFBVSxLQUFLO0FBQ2pDLFlBQUUsR0FBRyxJQUFJLFVBQVUsQ0FBQztBQUNwQjtBQUFBLFFBQ0Y7QUFDQSx1QkFBZSxHQUFHLEdBQUc7QUFDckIsZUFBTztBQUFBLE1BQ1Q7QUFBQSxJQUNGLENBQUM7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkQsSUFBQUMsb0JBQTRCQyxRQUFBLGlCQUFBO0FBckM1QjtDQXVDQyxTQUFTQyxTQUFTQyxHQUFHO0FBR3JCLFFBQU1DLFdBQVcsQ0FBQztBQUNsQkMsU0FBT0QsV0FBV0E7QUFLbEJBLFdBQVNFLE9BQU87Ozs7O0lBS2ZDLG9CQUFvQixDQUFDLGFBQWEsTUFBTTs7Ozs7Ozs7OztJQVV4Q0MsMEJBQTJCQyxTQUFRO0FBQ2xDLFlBQU1DLFNBQVM7QUFDZixZQUFNQyxTQUFTO0FBQ2YsWUFBTUMsUUFBUUYsT0FBT0csS0FBS0osR0FBRyxLQUFLRSxPQUFPRSxLQUFLSixHQUFHO0FBQ2pELFlBQU1LLFdBQVdILE9BQU9FLEtBQUtKLEdBQUc7QUFDaEMsVUFBSSxDQUFDRyxPQUFPO0FBQ1gsZUFBTztNQUNSO0FBQ0EsWUFBTUcsUUFBUVgsU0FBU1ksS0FBS0MsV0FBV0MsT0FBT0MsUUFBUVAsTUFBTSxDQUFDLENBQUM7QUFDOUQsVUFBSUcsVUFBVSxJQUFJO0FBQ2pCLGVBQU87TUFDUjtBQUVBLGFBQU9ELFdBQ0osQ0FBQ0YsTUFBTSxDQUFDLEdBQUdBLE1BQU0sQ0FBQyxJQUFJLEdBQUdBLE1BQU0sQ0FBQyxHQUFHQSxNQUFNLENBQUMsSUFBSSxHQUFHQSxNQUFNLENBQUMsQ0FBQyxJQUN6RCxDQUFDQSxNQUFNLENBQUMsR0FBR0EsTUFBTSxDQUFDLElBQUksR0FBR0EsTUFBTSxDQUFDLEdBQUdBLE1BQU0sQ0FBQyxHQUFHQSxNQUFNLENBQUMsQ0FBQztJQUN6RDtFQUNEO0FBT0FSLFdBQVNnQixnQkFBaUJDLFdBQVU7QUFDbkMsV0FBT0MsR0FBR0MsT0FBT0MsSUFBSSxjQUFjLEVBQUVDLFNBQVNKLEtBQUs7RUFDcEQ7QUFNQWpCLFdBQVNzQixjQUNSdEIsU0FBU2dCLGNBQWMsT0FBTyxLQUFLaEIsU0FBU2dCLGNBQWMsU0FBUyxLQUFLaEIsU0FBU2dCLGNBQWMsUUFBUTtBQWF4R2hCLFdBQVN1QixlQUFnQkMsYUFBWTtBQUNwQ0MsWUFBUUMsS0FDUCwwSEFDRDtBQUNBLFdBQU8xQixTQUFTMkIsR0FBR0osYUFBYUMsT0FBTztFQUN4QztBQVFBeEIsV0FBUzRCLGlCQUFpQixNQUFNO0FBQy9CLFVBQU1DLFFBQVE5QixFQUFFLE1BQU07QUFDdEIsV0FBTyxDQUFDLEVBQ1BtQixHQUFHQyxPQUFPQyxJQUFJLGNBQWMsS0FDNUJVLFNBQVNDLGNBQWMsZUFBZSxLQUN0Q0YsTUFBTUcsS0FBSyxVQUFVLEVBQUVDLFVBQ3ZCSixNQUFNRyxLQUFLLDhCQUE4QixFQUFFQztFQUU3QztBQU9BakMsV0FBU2tDLGVBQWVoQixHQUFHQyxPQUFPQyxJQUFJLFlBQVksRUFBRWUsUUFBUSxNQUFNLEdBQUc7QUFTckVuQyxXQUFTb0MsZ0JBQWlCQyxjQUFhO0FBQ3RDLFFBQUlBLGFBQWEsSUFBSTtBQUNwQixhQUFPO0lBQ1I7QUFDQSxVQUFNLENBQUNDLFNBQVMsSUFBSUQ7QUFDcEIsVUFBTUUsWUFBWXZDLFNBQVN3QyxPQUFPQyxhQUFhSixTQUFTSyxNQUFNLENBQUMsQ0FBQztBQUNoRSxRQUFJeEIsR0FBR3lCLE1BQU1DLGVBQWVOLFNBQVMsTUFBTUEsVUFBVU8sWUFBWSxHQUFHO0FBQ25FLGFBQUEsSUFBQUMsT0FBVzVCLEdBQUd5QixNQUFNQyxlQUFlTixTQUFTLENBQUMsRUFBQVEsT0FBR1IsVUFBVU8sWUFBWSxHQUFDLEdBQUEsRUFBQUMsT0FBSVAsU0FBUztJQUNyRjtBQUNBLFdBQU92QyxTQUFTd0MsT0FBT0MsYUFBYUgsU0FBUyxJQUFJQztFQUNsRDtBQVVBdkMsV0FBUytDLGFBQWNDLFdBQVU7QUFDaEMsVUFBTUMsV0FBV25CLFNBQVNvQix1QkFBdUI7QUFDakQsUUFBSSxDQUFDRixPQUFPO0FBQ1gsYUFBT0M7SUFDUjtBQUNBRCxhQUFBLEdBQVFwRCxrQkFBQXVELGVBQWNILEtBQUs7QUFBQSxRQUFBSSxZQUFBQywyQkFDTEwsS0FBQSxHQUFBTTtBQUFBLFFBQUE7QUFBdEIsV0FBQUYsVUFBQUcsRUFBQSxHQUFBLEVBQUFELFFBQUFGLFVBQUFJLEVBQUEsR0FBQUMsUUFBNkI7QUFBQSxjQUFsQkMsVUFBQUosTUFBQUs7QUFDVixZQUFJRCxtQkFBbUJFLE1BQU07QUFDNUJYLG1CQUFTWSxZQUFZSCxPQUFPO1FBQzdCLE9BQU87QUFBQSxjQUFBSSxhQUFBVCwyQkFDYXRELEVBQUVnRSxVQUFVL0QsU0FBUytDLFdBQVdpQixnQkFBZ0JOLE9BQU8sQ0FBQyxDQUFBLEdBQUFPO0FBQUEsY0FBQTtBQUEzRSxpQkFBQUgsV0FBQVAsRUFBQSxHQUFBLEVBQUFVLFNBQUFILFdBQUFOLEVBQUEsR0FBQUMsUUFBOEU7QUFBQSxvQkFBbkVTLE9BQUFELE9BQUFOO0FBQ1ZWLHVCQUFTWSxZQUFZSyxJQUFJO1lBQzFCO1VBQUEsU0FBQUMsS0FBQTtBQUFBTCx1QkFBQU0sRUFBQUQsR0FBQTtVQUFBLFVBQUE7QUFBQUwsdUJBQUFPLEVBQUE7VUFBQTtRQUNEO01BQ0Q7SUFBQSxTQUFBRixLQUFBO0FBQUFmLGdCQUFBZ0IsRUFBQUQsR0FBQTtJQUFBLFVBQUE7QUFBQWYsZ0JBQUFpQixFQUFBO0lBQUE7QUFDQSxXQUFPcEI7RUFDUjtBQU9BakQsV0FBUytDLFdBQVdpQixrQkFBbUJNLFVBQVM7QUFDL0MsVUFBTUMsS0FBSyxJQUFJdkUsU0FBU3dFLFNBQVNGLElBQUk7QUFFckNDLE9BQUdFLE9BQU8sVUFBVSxTQUFTO0FBQzdCRixPQUFHRyxVQUFVSCxHQUFHRyxRQUFRdkMsUUFBUSwwQ0FBMEMsQ0FBQ3dDLEdBQUdDLFFBQVFDLFVBQVU7QUFDL0YsVUFBSSxDQUFDRCxRQUFRO0FBQ1pBLGlCQUFTQztNQUNWO0FBQ0EsYUFBQSwyQ0FBQS9CLE9BQWtENUIsR0FBRzRELEtBQUtDLE9BQU9ILE1BQU0sR0FBQyxXQUFBLEVBQUE5QixPQUFZOEIsT0FBT3pDLFFBQzFGLE1BQ0EsT0FDRCxHQUFDLElBQUEsRUFBQVcsT0FBSytCLE9BQUssTUFBQTtJQUNaLENBQUM7QUFDRCxXQUFPTixHQUFHUyxPQUFPO0VBQ2xCO0FBZ0JBaEYsV0FBU2lGLGlCQUFrQkMsZ0JBQWU7QUFDekNBLGtCQUFBLEdBQWF0RixrQkFBQXVELGVBQWMrQixVQUFVO0FBQ3JDLFVBQU1DLFVBQVUsQ0FBQTtBQUNoQixRQUFJQztBQUNKLGFBQUFDLEtBQUEsR0FBQUMsa0JBQTZCQyxPQUFPQyxRQUFRdEUsR0FBR0MsT0FBT0MsSUFBSSxnQkFBZ0IsQ0FBQyxHQUFBaUUsS0FBQUMsZ0JBQUFyRCxRQUFBb0QsTUFBRztBQUE5RSxZQUFXLENBQUNJLE1BQU1DLE1BQU0sSUFBQUosZ0JBQUFELEVBQUE7QUFDdkIsVUFBSUgsV0FBVzdELFNBQVNxRSxNQUFNLEdBQUc7QUFJaENQLGdCQUFRUSxLQUNQLENBQUMsR0FBR0YsSUFBSSxFQUNORyxJQUFLQyxVQUFTO0FBQ2QsaUJBQU83RixTQUFTb0MsY0FBY3lELElBQUk7UUFDbkMsQ0FBQyxFQUNBQyxLQUFLLEVBQUUsQ0FDVjtNQUNEO0lBQ0Q7QUFDQSxZQUFRWCxRQUFRbEQsUUFBQTtNQUNmLEtBQUs7QUFDSm1ELGdCQUFRO0FBQ1I7TUFDRCxLQUFLO0FBQ0osU0FBQ0EsS0FBSyxJQUFJRDtBQUNWO01BQ0Q7QUFDQ0MsZ0JBQUEsTUFBQXRDLE9BQWNxQyxRQUFRVyxLQUFLLEdBQUcsR0FBQyxHQUFBO0FBQy9CO0lBQ0Y7QUFDQSxXQUFPVjtFQUNSO0FBV0FwRixXQUFTK0YsWUFBWSxTQUFVQyxPQUFPQyxXQUFXO0FBQ2hELFNBQUtDLE9BQU8sSUFBSWxHLFNBQVMrRixVQUFVckMsUUFBUTtNQUMxQ3lDLE1BQU07TUFDTkg7TUFDQUM7SUFDRCxDQUFDO0VBQ0Y7QUFPQWpHLFdBQVMrRixVQUFVSyxVQUFVQyxTQUFTLFdBQVk7QUFDakQsVUFBTUMsTUFBTSxLQUFLSixLQUFLRyxPQUFPO0FBQzdCQyxRQUFJQyxRQUFRLENBQUM7QUFDYixXQUFPRDtFQUNSO0FBU0F0RyxXQUFTK0YsVUFBVUssVUFBVUksU0FBUyxTQUFVQyxNQUFNO0FBQ3JELFdBQU8sS0FBS1AsS0FBS00sT0FBT0MsSUFBSTtFQUM3QjtBQTBEQXpHLFdBQVMrRixVQUFVckMsVUFBVSxTQUFVK0MsTUFBTTtBQUM1QyxTQUFLQSxPQUFPQTtBQUNaLFNBQUtDLFNBQVMsQ0FBQTtFQUNmO0FBS0ExRyxXQUFTK0YsVUFBVXJDLFFBQVFpRCxLQUFLO0FBU2hDM0csV0FBUytGLFVBQVVyQyxRQUFRMEMsVUFBVUksU0FBUyxTQUFVQyxNQUFNO0FBQzdELFFBQUlHO0FBQ0osUUFBSUgsZ0JBQWdCekcsU0FBUytGLFVBQVVyQyxTQUFTO0FBQy9Da0QsY0FBUUg7SUFDVCxPQUFPO0FBQ05HLGNBQVEsSUFBSTVHLFNBQVMrRixVQUFVckMsUUFBUStDLElBQUk7SUFDNUM7QUFDQSxTQUFLQyxPQUFPZixLQUFLaUIsS0FBSztBQUN0QixXQUFPQTtFQUNSO0FBU0E1RyxXQUFTK0YsVUFBVXJDLFFBQVEwQyxVQUFVQyxTQUFTLFNBQVVRLG9CQUFvQjtBQUMzRSxVQUFNQyxjQUFjLEtBQUtDLFFBQVEsS0FBS04sTUFBTUksa0JBQWtCO0FBQzlELGFBQVNHLElBQUksR0FBR0EsSUFBSSxLQUFLTixPQUFPekUsUUFBUSxFQUFFK0UsR0FBRztBQUU1Q0Ysa0JBQVksQ0FBQyxFQUFFakQsWUFBWSxLQUFLNkMsT0FBT00sQ0FBQyxFQUFFWCxPQUFPLENBQUM7SUFDbkQ7QUFDQSxXQUFPUyxZQUFZLENBQUM7RUFDckI7QUFNQTlHLFdBQVMrRixVQUFVckMsUUFBUTBDLFVBQVVXLFVBQVUsU0FBVU4sTUFBTVEsTUFBTTtBQUNwRSxRQUFJL0M7QUFDSixRQUFJZ0QsaUJBQWlCO0FBQ3JCLFFBQUlDO0FBQ0osVUFBTVIsS0FBQSxHQUFBN0QsT0FBUW1FLE9BQUEsR0FBQW5FLE9BQVVtRSxNQUFJLEdBQUEsSUFBTSxJQUFFLE9BQUEsRUFBQW5FLE9BQVE5QyxTQUFTK0YsVUFBVXJDLFFBQVFpRCxJQUFJO0FBQzNFLFFBQUlGLEtBQUtXLGFBQWEsQ0FBQ3BILFNBQVNzQixhQUFhO0FBRTVDbUYsV0FBS04sT0FBTztJQUNiO0FBQ0EsUUFBSWE7QUFDSixRQUFJSztBQUNKLFFBQUlDO0FBQ0osWUFBUWIsS0FBS04sTUFBQTtNQUNaLEtBQUs7QUFDSmpDLGVBQU9wQyxTQUFTeUYsY0FBYyxNQUFNO0FBQ3BDckQsYUFBS3NELFlBQVk7QUFFakJ0RCxhQUFLdUQsYUFBYSxVQUFVLHFCQUFxQjtBQUNqRCxZQUFJaEIsS0FBS1QsT0FBTztBQUNmOUIsZUFBS3dELGlCQUFpQmpCLEtBQUtSLGFBQWEsVUFBVVEsS0FBS1QsT0FBTyxLQUFLO1FBQ3BFO0FBQ0E7TUFDRCxLQUFLO0FBQ0o5QixlQUFPcEMsU0FBU29CLHVCQUF1QjtBQUV2QyxlQUFPLENBQUNnQixNQUFNQSxJQUFJO01BQ25CLEtBQUssVUFBVTtBQUNkQSxlQUFPcEMsU0FBU3lGLGNBQWMsS0FBSztBQUNuQ3JELGFBQUt1RCxhQUFhLE1BQUEsT0FBQTNFLE9BQWE2RCxFQUFFLENBQUU7QUFDbkMsWUFBSUYsS0FBS1UsT0FBTztBQUNmQSxrQkFBUWpELEtBQUtMLFlBQVkvQixTQUFTeUYsY0FBYyxPQUFPLENBQUM7QUFDeERKLGdCQUFNTSxhQUFhLE9BQU9kLEVBQUU7QUFDNUJRLGdCQUFNdEQsWUFBWTdELFNBQVMrQyxXQUFXMEQsS0FBS1UsS0FBSyxDQUFDO1FBRWxEO0FBRUEsY0FBTVEsU0FBU3pELEtBQUtMLFlBQVkvQixTQUFTeUYsY0FBYyxRQUFRLENBQUM7QUFDaEUsWUFBSWQsS0FBS1QsT0FBTztBQUNmMkIsaUJBQU9ELGlCQUFpQixVQUFVakIsS0FBS1QsT0FBTyxLQUFLO1FBQ3BEO0FBQ0EsWUFBSVMsS0FBS21CLFVBQVU7QUFDbEJELGlCQUFPRixhQUFhLFlBQVksVUFBVTtRQUMzQztBQUNBLFlBQUloQixLQUFLb0IsTUFBTTtBQUNkRixpQkFBT0YsYUFBYSxRQUFRaEIsS0FBS29CLElBQUk7UUFDdEM7QUFDQSxZQUFJcEIsS0FBS3FCLFVBQVU7QUFDbEJILGlCQUFPRyxXQUFXO1FBQ25CO0FBQ0FILGVBQU9GLGFBQWEsUUFBUWhCLEtBQUtoQixJQUFJO0FBQ3JDLFlBQUlnQixLQUFLc0IsTUFBTTtBQUNkLGVBQUtmLElBQUksR0FBR0EsSUFBSVAsS0FBS3NCLEtBQUs5RixRQUFRLEVBQUUrRSxHQUFHO0FBQ3RDSyxzQkFBVVosS0FBS3NCLEtBQUtmLENBQUM7QUFDckIsZ0JBQUlLLFFBQVFVLE1BQU07QUFDakJWLHNCQUFRbEIsT0FBTztZQUNoQixPQUFPO0FBQ05rQixzQkFBUWxCLE9BQU87WUFDaEI7QUFDQW1CLHNCQUFVLEtBQUtQLFFBQVFNLE9BQU87QUFDOUJNLG1CQUFPOUQsWUFBWXlELFFBQVEsQ0FBQyxDQUFDO1VBQzlCO1FBQ0Q7QUFDQUoseUJBQWlCUztBQUNqQjtNQUNEO01BQ0EsS0FBSztBQUNKekQsZUFBT3BDLFNBQVN5RixjQUFjLFFBQVE7QUFDdENyRCxhQUFLOEQsU0FBU3ZCLEtBQUs5QztBQUNuQk8sYUFBS3VELGFBQWEsU0FBU2hCLEtBQUs5QyxLQUFLO0FBQ3JDLFlBQUk4QyxLQUFLd0IsVUFBVTtBQUNsQi9ELGVBQUt1RCxhQUFhLFlBQVksVUFBVTtRQUN6QztBQUNBLFlBQUloQixLQUFLcUIsVUFBVTtBQUNsQjVELGVBQUs0RCxXQUFXO1FBQ2pCO0FBRUEsWUFBSXJCLEtBQUt5QixRQUFRO0FBQ2hCaEUsZUFBS3VELGFBQWEsVUFBVSxFQUFFO1FBQy9CO0FBQ0F2RCxhQUFLdUQsYUFBYSxTQUFTaEIsS0FBS1UsS0FBSztBQUNyQ2pELGFBQUtMLFlBQVkvQixTQUFTcUcsZUFBZTFCLEtBQUtVLEtBQUssQ0FBQztBQUNwRDtNQUNELEtBQUs7QUFDSmpELGVBQU9wQyxTQUFTeUYsY0FBYyxVQUFVO0FBQ3hDckQsYUFBS3VELGFBQWEsU0FBU2hCLEtBQUtVLEtBQUs7QUFDckMsWUFBSVYsS0FBS3NCLE1BQU07QUFDZCxlQUFLZixJQUFJLEdBQUdBLElBQUlQLEtBQUtzQixLQUFLOUYsUUFBUSxFQUFFK0UsR0FBRztBQUN0Q0ssc0JBQVVaLEtBQUtzQixLQUFLZixDQUFDO0FBQ3JCSyxvQkFBUWxCLE9BQU87QUFDZm1CLHNCQUFVLEtBQUtQLFFBQVFNLE9BQU87QUFDOUJuRCxpQkFBS0wsWUFBWXlELFFBQVEsQ0FBQyxDQUFDO1VBQzVCO1FBQ0Q7QUFDQTtNQUNELEtBQUs7QUFDSnBELGVBQU9wQyxTQUFTeUYsY0FBYyxVQUFVO0FBQ3hDSixnQkFBUWpELEtBQUtMLFlBQVkvQixTQUFTeUYsY0FBYyxRQUFRLENBQUM7QUFDekRKLGNBQU10RCxZQUFZN0QsU0FBUytDLFdBQVcwRCxLQUFLVSxLQUFLLENBQUM7QUFDakQsWUFBSVYsS0FBS2hCLE1BQU07QUFDZHZCLGVBQUt1RCxhQUFhLFFBQVFoQixLQUFLaEIsSUFBSTtRQUNwQztBQUNBLFlBQUlnQixLQUFLcUIsVUFBVTtBQUNsQjVELGVBQUs0RCxXQUFXO1FBQ2pCO0FBQ0E7TUFDRCxLQUFLO01BQ0wsS0FBSztBQUNKNUQsZUFBT3BDLFNBQVN5RixjQUFjLEtBQUs7QUFDbkMsWUFBSWQsS0FBS3NCLE1BQU07QUFDZCxlQUFLZixJQUFJLEdBQUdBLElBQUlQLEtBQUtzQixLQUFLOUYsUUFBUSxFQUFFK0UsR0FBRztBQUN0QyxrQkFBTW9CLFFBQUEsR0FBQXRGLE9BQVc2RCxJQUFFLEdBQUEsRUFBQTdELE9BQUlrRSxDQUFDO0FBQ3hCSyxzQkFBVVosS0FBS3NCLEtBQUtmLENBQUM7QUFDckIsZ0JBQUlxQjtBQUNKLGdCQUFJaEIsUUFBUWxCLFNBQVMsVUFBVTtBQUU5QmtDLHVCQUFTbkUsS0FBS0wsWUFBWS9CLFNBQVN5RixjQUFjLElBQUksQ0FBQztBQUN0RGMscUJBQU94RSxZQUFZL0IsU0FBU3FHLGVBQWVkLFFBQVFGLEtBQUssQ0FBQztBQUN6RCxrQkFBSUUsUUFBUWlCLFNBQVM7QUFDcEJ0SSx5QkFBUytGLFVBQVVyQyxRQUFRNkUsZ0JBQWdCRixRQUFRaEIsT0FBTztjQUMzRDtBQUNBO1lBQ0Q7QUFDQWdCLHFCQUFTbkUsS0FBS0wsWUFBWS9CLFNBQVN5RixjQUFjLEtBQUssQ0FBQztBQUV2RCxnQkFBSUYsUUFBUWEsUUFBUTtBQUNuQkcscUJBQU9aLGFBQWEsVUFBVSxFQUFFO1lBQ2pDO0FBQ0FILHNCQUFVZSxPQUFPeEUsWUFBWS9CLFNBQVN5RixjQUFjLE9BQU8sQ0FBQztBQUM1REQsb0JBQVFVLFNBQVNYLFFBQVExRDtBQUN6QjJELG9CQUFRRyxhQUFhLFNBQVNKLFFBQVExRCxLQUFLO0FBQzNDMkQsb0JBQVFHLGFBQWEsUUFBUWhCLEtBQUtOLElBQUk7QUFDdENtQixvQkFBUUcsYUFBYSxNQUFNVyxLQUFLO0FBQ2hDZCxvQkFBUUcsYUFBYSxRQUFRSixRQUFRNUIsUUFBUWdCLEtBQUtoQixJQUFJO0FBSXRELGdCQUFJNEIsUUFBUTVCLE1BQU07QUFDakI2QixzQkFBUUcsYUFBYSxlQUFlLGFBQWE7WUFDbEQ7QUFDQSxnQkFBSUosUUFBUW1CLFNBQVM7QUFDcEJsQixzQkFBUWtCLFVBQVU7WUFDbkI7QUFDQSxnQkFBSW5CLFFBQVFTLFVBQVU7QUFDckJSLHNCQUFRUSxXQUFXO1lBQ3BCO0FBQ0FYLG9CQUFRa0IsT0FBT3hFLFlBQVkvQixTQUFTeUYsY0FBYyxPQUFPLENBQUM7QUFDMURKLGtCQUFNdEQsWUFBWTdELFNBQVMrQyxXQUFXc0UsUUFBUUYsS0FBSyxDQUFDO0FBQ3BEQSxrQkFBTU0sYUFBYSxPQUFPVyxLQUFLO0FBQy9CLGdCQUFJZixRQUFRaUIsU0FBUztBQUNwQnRJLHVCQUFTK0YsVUFBVXJDLFFBQVE2RSxnQkFBZ0JwQixPQUFPRSxPQUFPO1lBQzFEO0FBRUEsZ0JBQUlBLFFBQVFvQixPQUFPO0FBQ2xCdEIsb0JBQU1NLGFBQWEsU0FBU0osUUFBUW9CLEtBQUs7WUFDMUM7QUFDQSxnQkFBSXpDO0FBQ0osZ0JBQUlxQixRQUFRcUIsVUFBVTtBQUNyQixrQkFBSUMsV0FBV3RCLFFBQVFxQjtBQUN2QkMsMEJBQUEsR0FBVy9JLGtCQUFBdUQsZUFBY3dGLFFBQVE7QUFDakMsb0JBQU1DLGNBQWMsSUFBSTVJLFNBQVMrRixVQUFVckMsUUFBUTtnQkFDbER5QyxNQUFNO2dCQUNOUSxJQUFBLEdBQUE3RCxPQUFPNkQsSUFBRSxHQUFBLEVBQUE3RCxPQUFJa0UsR0FBQyxXQUFBO2NBQ2YsQ0FBQztBQUFBLGtCQUFBNkIsYUFBQXhGLDJCQUNnQnNGLFFBQUEsR0FBQUc7QUFBQSxrQkFBQTtBQUFqQixxQkFBQUQsV0FBQXRGLEVBQUEsR0FBQSxFQUFBdUYsU0FBQUQsV0FBQXJGLEVBQUEsR0FBQUMsUUFBMkI7QUFBQSx3QkFBaEJzRixLQUFBRCxPQUFBbkY7QUFDVix3QkFBTXFGLFFBQVE7b0JBQ2IsR0FBR0Q7a0JBQ0o7QUFDQSxzQkFBSSxDQUFDQyxNQUFNN0MsTUFBTTtBQUNoQjZDLDBCQUFNN0MsT0FBT00sS0FBS047a0JBQ25CO0FBQ0E2Qyx3QkFBTXZELE9BQUEsR0FBQTNDLE9BQVV1RSxRQUFRNUIsUUFBUWdCLEtBQUtoQixNQUFJLEdBQUEsRUFBQTNDLE9BQUlrRyxNQUFNdkQsSUFBSTtBQUN2RG1ELDhCQUFZcEMsT0FBT3dDLEtBQUs7Z0JBQ3pCO2NBQUEsU0FBQTdFLEtBQUE7QUFBQTBFLDJCQUFBekUsRUFBQUQsR0FBQTtjQUFBLFVBQUE7QUFBQTBFLDJCQUFBeEUsRUFBQTtjQUFBO0FBQ0Esb0JBQU1xRSxXQUFXRSxZQUFZdkMsT0FBTytCLEtBQUs7QUFDekNNLHVCQUFTbEIsWUFBWTtBQUNyQkYsc0JBQVFvQixXQUFXQTtBQUNuQnBCLHNCQUFRMkIsUUFBUTtBQUNoQmpELHNCQUFTNUIsT0FBTTtBQUNkLG9CQUFJQSxFQUFFUSxPQUFPNEQsU0FBUztBQUNyQnBFLG9CQUFFUSxPQUFPc0UsV0FBV3JGLFlBQVlPLEVBQUVRLE9BQU84RCxRQUFRO0FBQ2pELHNCQUFJdEUsRUFBRVEsT0FBT3VCLFNBQVMsU0FBUztBQUM5QiwwQkFBTTtzQkFBQ1Y7b0JBQUksSUFBSXJCLEVBQUVRO0FBQ2pCLHdCQUFJUixFQUFFUSxPQUFPdUUsS0FBSzVDLE1BQU1kLElBQUksTUFBTSxRQUFXO0FBQzVDckIsd0JBQUVRLE9BQU91RSxLQUFLNUMsTUFBTWQsSUFBSSxFQUFFeUQsV0FBV0UsWUFDcENoRixFQUFFUSxPQUFPdUUsS0FBSzVDLE1BQU1kLElBQUksRUFBRWlELFFBQzNCO29CQUNEO0FBQ0F0RSxzQkFBRVEsT0FBT3VFLEtBQUs1QyxNQUFNZCxJQUFJLElBQUlyQixFQUFFUTtrQkFDL0I7Z0JBQ0QsT0FBTztBQUNOUixvQkFBRVEsT0FBT3NFLFdBQVdFLFlBQVloRixFQUFFUSxPQUFPOEQsUUFBUTtnQkFDbEQ7Y0FDRDtBQUNBcEIsc0JBQVFJLGlCQUFpQixVQUFVMUIsT0FBTyxJQUFJO0FBQzlDLGtCQUFJcUIsUUFBUW1CLFNBQVM7QUFDcEJsQix3QkFBUTRCLFdBQVdyRixZQUFZNkUsUUFBUTtjQUN4QztZQUNELFdBQVdqQyxLQUFLTixTQUFTLFNBQVM7QUFDakNILHNCQUFTNUIsT0FBTTtBQUNkLG9CQUFJQSxFQUFFUSxPQUFPNEQsU0FBUztBQUNyQix3QkFBTTtvQkFBQy9DO2tCQUFJLElBQUlyQixFQUFFUTtBQUNqQixzQkFBSVIsRUFBRVEsT0FBT3VFLEtBQUs1QyxNQUFNZCxJQUFJLE1BQU0sUUFBVztBQUM1Q3JCLHNCQUFFUSxPQUFPdUUsS0FBSzVDLE1BQU1kLElBQUksRUFBRXlELFdBQVdFLFlBQ3BDaEYsRUFBRVEsT0FBT3VFLEtBQUs1QyxNQUFNZCxJQUFJLEVBQUVpRCxRQUMzQjtrQkFDRDtBQUNBLHlCQUFPdEUsRUFBRVEsT0FBT3VFLEtBQUs1QyxNQUFNZCxJQUFJO2dCQUNoQztjQUNEO0FBQ0E2QixzQkFBUUksaUJBQWlCLFVBQVUxQixPQUFPLElBQUk7WUFDL0M7QUFFQSxnQkFBSVMsS0FBS1QsT0FBTztBQUNmc0Isc0JBQVFJLGlCQUFpQixVQUFVakIsS0FBS1QsT0FBTyxLQUFLO1lBQ3JELFdBQVdxQixRQUFRckIsT0FBTztBQUN6QnNCLHNCQUFRSSxpQkFBaUIsVUFBVUwsUUFBUXJCLE9BQU8sSUFBSTtZQUN2RDtVQUNEO1FBQ0Q7QUFDQSxZQUFJUyxLQUFLNEMscUJBQXFCNUMsS0FBS04sU0FBUyxZQUFZO0FBQ3ZEbkcsbUJBQVNzSiwwQkFBMEJ0SixTQUFTK0YsVUFBVXdELFlBQVlyRixNQUFNdUMsS0FBS2hCLElBQUksQ0FBQztRQUNuRjtBQUNBO01BRUQsS0FBSztNQUNMLEtBQUs7QUFDSnZCLGVBQU9wQyxTQUFTeUYsY0FBYyxLQUFLO0FBQ25DckQsYUFBS3VELGFBQWEsTUFBQSxPQUFBM0UsT0FBYTZELEVBQUUsQ0FBRTtBQUVuQyxZQUFJRixLQUFLeUIsUUFBUTtBQUNoQmhFLGVBQUt1RCxhQUFhLFVBQVUsRUFBRTtRQUMvQjtBQUNBLFlBQUloQixLQUFLVSxPQUFPO0FBQ2ZBLGtCQUFRakQsS0FBS0wsWUFBWS9CLFNBQVN5RixjQUFjLE9BQU8sQ0FBQztBQUN4REosZ0JBQU10RCxZQUFZN0QsU0FBUytDLFdBQVcwRCxLQUFLVSxLQUFLLENBQUM7QUFDakRBLGdCQUFNTSxhQUFhLE9BQU9oQixLQUFLRSxNQUFNQSxFQUFFO1FBRXhDO0FBRUFXLGtCQUFVcEQsS0FBS0wsWUFBWS9CLFNBQVN5RixjQUFjLE9BQU8sQ0FBQztBQUUxRCxZQUFJZCxLQUFLOUMsT0FBTztBQUNmMkQsa0JBQVFHLGFBQWEsU0FBU2hCLEtBQUs5QyxLQUFLO1FBQ3pDO0FBQ0EsWUFBSThDLEtBQUsrQyxhQUFhO0FBQ3JCbEMsa0JBQVFHLGFBQWEsZUFBZWhCLEtBQUsrQyxXQUFXO1FBQ3JEO0FBQ0FsQyxnQkFBUUcsYUFBYSxRQUFRaEIsS0FBS2hCLElBQUk7QUFDdEMsWUFBSWdCLEtBQUtOLFNBQVMsU0FBUztBQUMxQm1CLGtCQUFRRyxhQUFhLFFBQVEsTUFBTTtRQUNwQyxPQUFPO0FBQ05ILGtCQUFRRyxhQUFhLFFBQVEsUUFBUTtBQUNyQyxtQkFBQWdDLE1BQUEsR0FBQUMsT0FBa0IsQ0FBQyxPQUFPLE9BQU8sUUFBUSxNQUFNLEdBQUFELE1BQUFDLEtBQUF6SCxRQUFBd0gsT0FBRztBQUFsRCxrQkFBV0UsTUFBQUQsS0FBQUQsR0FBQTtBQUNWLGdCQUFJaEQsS0FBS2tELEdBQUcsR0FBRztBQUNkckMsc0JBQVFHLGFBQWFrQyxLQUFLbEQsS0FBS2tELEdBQUcsQ0FBQztZQUNwQztVQUNEO1FBQ0Q7QUFDQSxpQkFBQUMsTUFBQSxHQUFBQyxRQUFrQixDQUFDLFNBQVMsUUFBUSxlQUFlLFdBQVcsR0FBQUQsTUFBQUMsTUFBQTVILFFBQUEySCxPQUFHO0FBQWpFLGdCQUFXRCxNQUFBRSxNQUFBRCxHQUFBO0FBQ1YsY0FBSW5ELEtBQUtrRCxHQUFHLEdBQUc7QUFDZHJDLG9CQUFRRyxhQUFha0MsS0FBS2xELEtBQUtrRCxHQUFHLENBQUM7VUFDcEM7UUFDRDtBQUNBLGlCQUFBRyxNQUFBLEdBQUFDLFFBQWtCLENBQUMsWUFBWSxZQUFZLFVBQVUsR0FBQUQsTUFBQUMsTUFBQTlILFFBQUE2SCxPQUFHO0FBQXhELGdCQUFXSCxNQUFBSSxNQUFBRCxHQUFBO0FBQ1YsY0FBSXJELEtBQUtrRCxHQUFHLEdBQUc7QUFDZHJDLG9CQUFRRyxhQUFha0MsS0FBS0EsR0FBRztVQUM5QjtRQUNEO0FBQ0EsWUFBSWxELEtBQUtULE9BQU87QUFDZnNCLGtCQUFRSSxpQkFBaUIsU0FBU2pCLEtBQUtULE9BQU8sS0FBSztRQUNwRDtBQUNBa0IseUJBQWlCSTtBQUNqQjtNQUNELEtBQUssWUFBWTtBQUNoQixjQUFNMEMsTUFBTXZELEtBQUt1RCxPQUFPO0FBQ3hCLGNBQU1DLE1BQU14RCxLQUFLd0QsT0FBT0MsT0FBT0M7QUFDL0JqRyxlQUFPcEMsU0FBU3lGLGNBQWMsS0FBSztBQUNuQ0osZ0JBQVFqRCxLQUFLTCxZQUFZL0IsU0FBU3lGLGNBQWMsSUFBSSxDQUFDO0FBQ3JESixjQUFNdEQsWUFBWTdELFNBQVMrQyxXQUFXMEQsS0FBS1UsS0FBSyxDQUFDO0FBQ2pELGNBQU1pRCxXQUFXbEcsS0FBS0wsWUFBWS9CLFNBQVN5RixjQUFjLEtBQUssQ0FBQztBQUMvRCxjQUFNOEMsT0FBTyxLQUFLdEQsUUFBUTtVQUN6QlosTUFBTTtVQUNOZ0IsT0FBTztVQUNQVyxVQUFVa0MsT0FBT0M7VUFDakJqRSxPQUFRNUIsT0FBTTtBQUNiLGtCQUFNa0csVUFBVSxJQUFJdEssU0FBUytGLFVBQVVyQyxRQUFRVSxFQUFFUSxPQUFPMkYsT0FBTztBQUMvRG5HLGNBQUVRLE9BQU80RixLQUFLM0csWUFBWXlHLFFBQVFqRSxPQUFPLENBQUM7QUFDMUMsZ0JBQUksRUFBRWpDLEVBQUVRLE9BQU82RixXQUFXckcsRUFBRVEsT0FBT3FGLEtBQUs7QUFDdkM3RixnQkFBRVEsT0FBT2tELFdBQVc7WUFDckI7QUFDQTFELGNBQUVzRyxnQkFBZ0I7VUFDbkI7UUFDRCxDQUFDO0FBQ0R4RyxhQUFLTCxZQUFZd0csS0FBSyxDQUFDLENBQUM7QUFDeEIsY0FBTSxDQUFBLEVBQUdNLFVBQVUsSUFBSU47QUFDdkIsY0FBTUUsVUFBVTtVQUNmcEUsTUFBTTtVQUNOZ0IsT0FBT1YsS0FBS21FLFlBQVluRSxLQUFLVTtVQUM3QjFCLE1BQU1nQixLQUFLaEI7VUFDWDlCLE9BQU84QyxLQUFLOUM7VUFDWmtFLE1BQU1wQixLQUFLb0I7VUFDWGdELFFBQVE7VUFDUkMsV0FBV3JFLEtBQUtxRTtVQUNoQjlFLE9BQU9TLEtBQUtUO1FBQ2I7QUFDQSxhQUFLZ0IsSUFBSSxHQUFHQSxJQUFJZ0QsS0FBSyxFQUFFaEQsR0FBRztBQUN6QixnQkFBTStELE9BQU8sSUFBSS9LLFNBQVMrRixVQUFVckMsUUFBUTZHLE9BQU87QUFDbkRILG1CQUFTdkcsWUFBWWtILEtBQUsxRSxPQUFPLENBQUM7UUFDbkM7QUFDQWtFLGdCQUFRTSxTQUFTO0FBQ2pCTixnQkFBUVMsYUFBYUw7QUFDckJKLGdCQUFRVSxXQUFXYjtBQUNuQk8sbUJBQVdKLFVBQVVBO0FBQ3JCSSxtQkFBV0gsT0FBT0o7QUFDbEJPLG1CQUFXVixNQUFNQSxNQUFNRDtBQUN2QlcsbUJBQVdGLFVBQVU7QUFDckI7TUFDRDtNQUNBLEtBQUs7QUFFSnZHLGVBQU9wQyxTQUFTeUYsY0FBYyxLQUFLO0FBQ25DLFlBQUlkLEtBQUtVLE9BQU87QUFDZkEsa0JBQVFqRCxLQUFLTCxZQUFZL0IsU0FBU3lGLGNBQWMsT0FBTyxDQUFDO0FBQ3hESixnQkFBTXRELFlBQVkvQixTQUFTcUcsZUFBZTFCLEtBQUtVLEtBQUssQ0FBQztBQUNyREEsZ0JBQU1NLGFBQWEsT0FBT2QsRUFBRTtRQUU3QjtBQUVBVyxrQkFBVXBELEtBQUtMLFlBQVkvQixTQUFTeUYsY0FBYyxPQUFPLENBQUM7QUFDMUQsWUFBSWQsS0FBSzlDLE9BQU87QUFDZjJELGtCQUFRRyxhQUFhLFNBQVNoQixLQUFLOUMsS0FBSztRQUN6QztBQUNBMkQsZ0JBQVFHLGFBQWEsUUFBUWhCLEtBQUtoQixJQUFJO0FBQ3RDNkIsZ0JBQVFHLGFBQWEsUUFBUSxNQUFNO0FBQ25DLFlBQUloQixLQUFLb0IsTUFBTTtBQUNkUCxrQkFBUUcsYUFBYSxRQUFRaEIsS0FBS29CLElBQUk7UUFDdkM7QUFDQSxZQUFJcEIsS0FBS3FFLFdBQVc7QUFDbkJ4RCxrQkFBUUcsYUFBYSxhQUFhaEIsS0FBS3FFLFNBQVM7UUFDakQ7QUFDQSxZQUFJckUsS0FBS1QsT0FBTztBQUNmc0Isa0JBQVFJLGlCQUFpQixTQUFTakIsS0FBS1QsT0FBTyxLQUFLO1FBQ3BEO0FBQ0EsWUFBSVMsS0FBS29FLFFBQVE7QUFDaEIsZ0JBQU1BLFNBQVMsS0FBSzlELFFBQVE7WUFDM0JaLE1BQU07WUFDTmdCLE9BQU87WUFDUG5CLE9BQVE1QixPQUFNO0FBQ2Isb0JBQU0yRCxPQUFPM0QsRUFBRVEsT0FBT3FHO0FBQ3RCLG9CQUFNQyxRQUFROUcsRUFBRVEsT0FBT3VHO0FBQ3ZCLG9CQUFNZCxPQUFPakcsRUFBRVEsT0FBT29HO0FBQ3RCakQsbUJBQUtxQixZQUFZOEIsS0FBSztBQUN0QixnQkFBRWIsS0FBS0k7QUFDUEosbUJBQUtlLGdCQUFnQixVQUFVO0FBQy9CaEgsZ0JBQUVzRyxnQkFBZ0I7WUFDbkI7VUFDRCxDQUFDO0FBQ0R4RyxlQUFLTCxZQUFZZ0gsT0FBTyxDQUFDLENBQUM7QUFDMUIsZ0JBQU0sQ0FBQSxFQUFHUSxZQUFZLElBQUlSO0FBQ3pCUSx1QkFBYUYsWUFBWWpIO0FBQ3pCbUgsdUJBQWFKLFdBQVd4RSxLQUFLd0U7QUFDN0JJLHVCQUFhTCxhQUFhdkUsS0FBS3VFO1FBQ2hDO0FBQ0E7TUFDRCxLQUFLO0FBQ0o5RyxlQUFPcEMsU0FBU3lGLGNBQWMsT0FBTztBQUNyQ3JELGFBQUt1RCxhQUFhLFFBQVEsUUFBUTtBQUNsQ3ZELGFBQUs4RCxTQUFTdkIsS0FBSzlDO0FBQ25CTyxhQUFLdUQsYUFBYSxTQUFTaEIsS0FBSzlDLEtBQUs7QUFDckNPLGFBQUt1RCxhQUFhLFFBQVFoQixLQUFLaEIsSUFBSTtBQUNuQztNQUNELEtBQUs7QUFDSnZCLGVBQU9wQyxTQUFTeUYsY0FBYyxJQUFJO0FBQ2xDckQsYUFBS0wsWUFBWTdELFNBQVMrQyxXQUFXMEQsS0FBS1UsS0FBSyxDQUFDO0FBQ2hEO01BQ0QsS0FBSztBQUNKakQsZUFBT3BDLFNBQVN5RixjQUFjLEtBQUs7QUFDbkMsWUFBSWQsS0FBS2hCLE1BQU07QUFDZHZCLGVBQUt1RCxhQUFhLFFBQVFoQixLQUFLaEIsSUFBSTtRQUNwQztBQUNBLFlBQUlnQixLQUFLVSxPQUFPO0FBQ2YsZ0JBQU1tRSxTQUFTeEosU0FBU3lGLGNBQWMsTUFBTTtBQUM1QytELGlCQUFPOUQsWUFBWTtBQUNuQjhELGlCQUFPekgsWUFBWTdELFNBQVMrQyxXQUFXMEQsS0FBS1UsS0FBSyxDQUFDO0FBQ2xEakQsZUFBS0wsWUFBWXlILE1BQU07UUFDeEI7QUFDQTtNQUNELEtBQUs7QUFDSnBILGVBQU9wQyxTQUFTeUYsY0FBYyxNQUFNO0FBQ3BDTCx5QkFBaUJoRCxLQUFLTCxZQUFZL0IsU0FBU3lGLGNBQWMsT0FBTyxDQUFDO0FBQ2pFTCx1QkFBZU8sYUFBYSxRQUFRLFFBQVE7QUFDNUMsWUFBSWhCLEtBQUtVLE9BQU87QUFDZkQseUJBQWVPLGFBQWEsU0FBU2hCLEtBQUtVLEtBQUs7UUFDaEQ7QUFDQUQsdUJBQWVPLGFBQWEsUUFBUWhCLEtBQUtoQixRQUFRLFFBQVE7QUFDekQsWUFBSWdCLEtBQUtxQixVQUFVO0FBQ2xCWix5QkFBZVksV0FBVztRQUMzQjtBQUNBO01BQ0QsS0FBSztBQUNKNUQsZUFBT3BDLFNBQVN5RixjQUFjLE1BQU07QUFDcENMLHlCQUFpQmhELEtBQUtMLFlBQVkvQixTQUFTeUYsY0FBYyxPQUFPLENBQUM7QUFDakVMLHVCQUFlTyxhQUFhLFFBQVEsUUFBUTtBQUM1QyxZQUFJaEIsS0FBS1UsT0FBTztBQUNmRCx5QkFBZU8sYUFBYSxTQUFTaEIsS0FBS1UsS0FBSztRQUNoRDtBQUNBRCx1QkFBZU8sYUFBYSxRQUFRaEIsS0FBS2hCLElBQUk7QUFDN0MsWUFBSWdCLEtBQUtxQixVQUFVO0FBQ2xCWix5QkFBZVksV0FBVztRQUMzQjtBQUNBLFlBQUlyQixLQUFLVCxPQUFPO0FBQ2ZrQix5QkFBZVEsaUJBQWlCLFNBQVNqQixLQUFLVCxPQUFPLEtBQUs7UUFDM0Q7QUFDQTtNQUNELEtBQUs7QUFDSjlCLGVBQU9wQyxTQUFTeUYsY0FBYyxLQUFLO0FBQ25DckQsYUFBS3VELGFBQWEsTUFBQSxPQUFBM0UsT0FBYTZELEVBQUUsQ0FBRTtBQUVuQyxZQUFJRixLQUFLeUIsUUFBUTtBQUNoQmhFLGVBQUt1RCxhQUFhLFVBQVUsRUFBRTtRQUMvQjtBQUNBLFlBQUloQixLQUFLVSxPQUFPO0FBQ2ZBLGtCQUFRakQsS0FBS0wsWUFBWS9CLFNBQVN5RixjQUFjLElBQUksQ0FBQztBQUNyRCxnQkFBTWdFLGVBQWV6SixTQUFTeUYsY0FBYyxPQUFPO0FBQ25EZ0UsdUJBQWExSCxZQUFZN0QsU0FBUytDLFdBQVcwRCxLQUFLVSxLQUFLLENBQUM7QUFDeERvRSx1QkFBYTlELGFBQWEsT0FBT2hCLEtBQUtFLE1BQU1BLEVBQUU7QUFDOUNRLGdCQUFNdEQsWUFBWTBILFlBQVk7UUFDL0I7QUFDQWpFLGtCQUFVcEQsS0FBS0wsWUFBWS9CLFNBQVN5RixjQUFjLFVBQVUsQ0FBQztBQUM3REQsZ0JBQVFHLGFBQWEsUUFBUWhCLEtBQUtoQixJQUFJO0FBQ3RDLFlBQUlnQixLQUFLK0UsTUFBTTtBQUNkbEUsa0JBQVFHLGFBQWEsUUFBUWhCLEtBQUsrRSxJQUFJO1FBQ3ZDO0FBQ0EsWUFBSS9FLEtBQUtnRixNQUFNO0FBQ2RuRSxrQkFBUUcsYUFBYSxRQUFRaEIsS0FBS2dGLElBQUk7UUFDdkM7QUFDQSxZQUFJaEYsS0FBS3FCLFVBQVU7QUFDbEJSLGtCQUFRUSxXQUFXO1FBQ3BCO0FBQ0EsWUFBSXJCLEtBQUtpRixVQUFVO0FBQ2xCcEUsa0JBQVFHLGFBQWEsWUFBWSxVQUFVO1FBQzVDO0FBQ0EsWUFBSWhCLEtBQUtrRixVQUFVO0FBQ2xCckUsa0JBQVFHLGFBQWEsWUFBWSxVQUFVO1FBQzVDO0FBQ0EsWUFBSWhCLEtBQUs5QyxPQUFPO0FBQ2YyRCxrQkFBUTNELFFBQVE4QyxLQUFLOUM7UUFDdEI7QUFFQSxZQUFJOEMsS0FBSytDLGFBQWE7QUFDckJsQyxrQkFBUWtDLGNBQWMvQyxLQUFLK0M7UUFDNUI7QUFDQXRDLHlCQUFpQkk7QUFDakI7TUFDRDtBQUNDLGNBQU0sSUFBSXNFLE1BQUEsNENBQUE5SSxPQUFrRDJELEtBQUtOLEtBQUswRixTQUFTLENBQUMsQ0FBRTtJQUNwRjtBQUNBLFFBQUksQ0FBQzNFLGdCQUFnQjtBQUNwQkEsdUJBQWlCaEQ7SUFDbEI7QUFDQSxRQUFJdUMsS0FBSzZCLFNBQVM7QUFDakJ0SSxlQUFTK0YsVUFBVXJDLFFBQVE2RSxnQkFBZ0JwQixTQUFTakQsTUFBTXVDLElBQUk7SUFDL0Q7QUFDQSxRQUFJQSxLQUFLcUYsT0FBTztBQUNmNUUscUJBQWU0RSxRQUFRckYsS0FBS3FGO0lBQzdCO0FBQ0EsUUFBSXJGLEtBQUtzRixPQUFPO0FBQ2ZoTSxRQUFFbUgsY0FBYyxFQUFFVCxLQUFLQSxLQUFLc0YsS0FBSztJQUNsQztBQUNBLFFBQUl0RixLQUFLZ0MsT0FBTztBQUNmdkIscUJBQWVPLGFBQWEsU0FBU2hCLEtBQUtnQyxLQUFLO0lBQ2hEO0FBQ0EsUUFBSWhDLEtBQUtlLFdBQVc7QUFDbkJOLHFCQUFlTSxZQUFZTixlQUFlTSxZQUFBLEdBQUExRSxPQUNwQ29FLGVBQWVNLFdBQVMsR0FBQSxFQUFBMUUsT0FBSTJELEtBQUtlLFNBQVMsSUFDN0NmLEtBQUtlO0lBQ1Q7QUFDQU4sbUJBQWVPLGFBQWEsTUFBTWhCLEtBQUtFLE1BQU1BLEVBQUU7QUFDL0MsV0FBTyxDQUFDekMsTUFBTWdELGNBQWM7RUFDN0I7QUFTQWxILFdBQVMrRixVQUFVckMsUUFBUTZFLGtCQUFrQixDQUFDckUsTUFBTXVDLFNBQVM7QUFDNUQsVUFBTXVGLGdCQUFnQjlILEtBQUtMLFlBQVkvQixTQUFTeUYsY0FBYyxNQUFNLENBQUM7QUFDckV5RSxrQkFBY3hFLFlBQVk7QUFDMUJ3RSxrQkFBY0MsUUFBUXhGLEtBQUs2QjtBQUMzQjBELGtCQUFjbkksWUFBWS9CLFNBQVNxRyxlQUFlLEdBQUcsQ0FBQztBQUN0RHBJLE1BQUVpTSxhQUFhLEVBQUUxRCxRQUFRO01BQ3hCNEQsVUFBVTtRQUNUQyxJQUFJO1FBQ0pDLElBQUk7UUFDSkMsV0FBVztNQUNaOztNQUVBQyxjQUFjO0lBQ2YsQ0FBQztFQUNGO0FBV0F0TSxXQUFTK0YsVUFBVXdHLGVBQWdCcEQsVUFBUztBQUMzQyxVQUFNbUMsU0FBUyxDQUFDO0FBQUEsUUFBQWtCLGFBQUFuSiwyQkFDSThGLEtBQUtzRCxRQUFBLEdBQUFDO0FBQUEsUUFBQTtBQUF6QixXQUFBRixXQUFBakosRUFBQSxHQUFBLEVBQUFtSixTQUFBRixXQUFBaEosRUFBQSxHQUFBQyxRQUFtQztBQUFBLGNBQXhCa0osUUFBQUQsT0FBQS9JO0FBQ1YsWUFBSWdKLE1BQU03RSxZQUFZLENBQUM2RSxNQUFNbEgsUUFBUSxDQUFDa0gsTUFBTXhHLFFBQVF3RyxNQUFNeEcsU0FBUyxZQUFZd0csTUFBTXhHLFNBQVMsVUFBVTtBQUN2RztRQUNEO0FBR0EsY0FBTXlHLGdCQUFnQkQsTUFBTWxILEtBQUsvQyxNQUFNaUssTUFBTWxILEtBQUsxRSxRQUFRLEdBQUcsSUFBSSxDQUFDO0FBQ2xFLGdCQUFRNEwsTUFBTXhHLE1BQUE7VUFDYixLQUFLO0FBQ0osZ0JBQUl3RyxNQUFNbkUsU0FBUztBQUNsQjhDLHFCQUFPc0IsYUFBYSxJQUFJRCxNQUFNaEo7WUFDL0I7QUFDQTtVQUNELEtBQUs7QUFDSixnQkFBSWdKLE1BQU1FLFFBQVFDLFFBQVE7QUFDekJ4QixxQkFBT3NCLGFBQWEsSUFBSUQsTUFBTW5FO1lBQy9CLE9BQU87QUFDTjhDLHFCQUFPc0IsYUFBYSxNQUFwQnRCLE9BQU9zQixhQUFhLElBQU0sQ0FBQTtBQUMxQixrQkFBSUQsTUFBTW5FLFNBQVM7QUFDbEI4Qyx1QkFBT3NCLGFBQWEsRUFBRWpILEtBQUtnSCxNQUFNaEosS0FBSztjQUN2QztZQUNEO0FBQ0E7VUFDRCxLQUFLO0FBQ0oySCxtQkFBT3NCLGFBQWEsSUFBSTdNLEVBQUU0TSxLQUFLLEVBQUVJLElBQUk7QUFDckM7VUFDRCxLQUFLO1VBQ0wsS0FBSztBQUNKekIsbUJBQU9zQixhQUFhLElBQUlELE1BQU1oSixNQUFNcUosS0FBSztBQUN6QztVQUNEO0FBRUMsZ0JBQUlMLE1BQU1oSixPQUFPO0FBQ2hCMkgscUJBQU9zQixhQUFhLElBQUlELE1BQU1oSjtZQUMvQjtBQUNBO1FBQ0Y7TUFDRDtJQUFBLFNBQUFRLEtBQUE7QUFBQXFJLGlCQUFBcEksRUFBQUQsR0FBQTtJQUFBLFVBQUE7QUFBQXFJLGlCQUFBbkksRUFBQTtJQUFBO0FBQ0EsV0FBT2lIO0VBQ1I7QUFTQXRMLFdBQVMrRixVQUFVd0QsY0FBYyxDQUFDSixNQUFNOEQsY0FBYztBQUNyRCxVQUFNQyxRQUFRbk4sRUFBRW9KLElBQUk7QUFDcEI4RCxnQkFBWWxOLEVBQUVvTixlQUFlRixTQUFTO0FBQ3RDLFFBQUlHLFlBQVlGLE1BQU1sTCxLQUFBLFVBQUFjLE9BQWVtSyxXQUFTLElBQUEsQ0FBSTtBQUNsRCxRQUFJRyxVQUFVbkwsU0FBUyxHQUFHO0FBQ3pCLGFBQU9tTCxVQUFVQyxRQUFRO0lBQzFCO0FBQ0FELGdCQUFZRixNQUFNbEwsS0FBQSxJQUFBYyxPQUFTbUssU0FBUyxDQUFFO0FBQ3RDLFdBQU9HLFVBQVVDLFFBQVE7RUFDMUI7QUFVQXJOLFdBQVMrRixVQUFVdUgscUJBQXFCLENBQUNDLGNBQWM1SixVQUFVO0FBQ2hFLFVBQU02SixRQUFRRCxhQUFhRSxPQUFRL0osYUFBWTtBQUM5QyxhQUFPQSxRQUFRQyxVQUFVQTtJQUMxQixDQUFDO0FBQ0QsUUFBSTZKLE1BQU12TCxTQUFTLEdBQUc7QUFDckIsYUFBT3VMLE1BQU0sQ0FBQztJQUNmO0FBQ0EsV0FBTztFQUNSO0FBU0F4TixXQUFTK0YsVUFBVTJILHNCQUF1QmhLLGFBQVk7QUFFckQsUUFDQ0EsbUJBQW1CaUssdUJBQ25CakssbUJBQW1Ca0ssa0JBQ25CbEssbUJBQW1CbUssb0JBQ2xCO0FBQ0QsYUFBT25LO0lBQ1I7QUFFQSxXQUFPQSxRQUFRd0Y7RUFDaEI7QUFTQWxKLFdBQVMrRixVQUFVK0gsd0JBQXlCcEssYUFBWTtBQUV2RCxRQUNDQSxRQUFReUMsU0FBUyxZQUNqQnpDLFFBQVF5QyxTQUFTLFlBQ2pCekMsbUJBQW1Ca0ssa0JBQ25CbEssbUJBQW1CbUssb0JBQ2xCO0FBQ0QsYUFBT25LO0lBRVIsV0FBV0EsbUJBQW1CaUsscUJBQXFCO0FBQ2xELGFBQU9qSyxRQUFRM0IsY0FBYyxRQUFRO0lBRXRDLFdBQVcyQixtQkFBbUJxSyxxQkFBcUI7QUFDbEQsYUFBT3JLLFFBQVF3RixXQUFXbkgsY0FBYyxJQUFJO0lBQzdDO0FBRUEsV0FBTzJCLFFBQVF3RixXQUFXbkgsY0FBYyxPQUFPO0VBQ2hEO0FBUUEvQixXQUFTK0YsVUFBVWlJLGtCQUFtQnRLLGFBQVk7QUFDakQsVUFBTTZILGVBQWV2TCxTQUFTK0YsVUFBVStILHNCQUFzQnBLLE9BQU87QUFDckUsUUFBSSxDQUFDNkgsY0FBYztBQUNsQixhQUFPO0lBQ1I7QUFDQSxXQUFPQSxhQUFhMEMsV0FBV0M7RUFDaEM7QUFTQWxPLFdBQVMrRixVQUFVb0ksa0JBQWtCLENBQUN6SyxTQUFTMEssY0FBYztBQUM1RCxVQUFNN0MsZUFBZXZMLFNBQVMrRixVQUFVK0gsc0JBQXNCcEssT0FBTztBQUNyRSxRQUFJLENBQUM2SCxjQUFjO0FBQ2xCLGFBQU87SUFDUjtBQUNBQSxpQkFBYTBDLFdBQVdDLGNBQWNFO0FBQ3RDLFdBQU87RUFDUjtBQVNBcE8sV0FBUytGLFVBQVVzSSx1QkFBdUIsQ0FBQzNLLFNBQVM0Syx1QkFBdUI7QUFDMUUsUUFBSSxDQUFDNUssUUFBUTZLLGFBQWEsZUFBZSxHQUFHO0FBQzNDN0ssY0FBUStELGFBQWEsaUJBQWlCekgsU0FBUytGLFVBQVVpSSxnQkFBZ0J0SyxPQUFPLENBQUM7SUFDbEY7QUFDQSxXQUFPMUQsU0FBUytGLFVBQVVvSSxnQkFBZ0J6SyxTQUFTNEssa0JBQWtCO0VBQ3RFO0FBUUF0TyxXQUFTK0YsVUFBVXlJLG9CQUFxQjlLLGFBQVk7QUFDbkQsUUFBSUEsUUFBUTZLLGFBQWEsZUFBZSxHQUFHO0FBQzFDLGFBQU92TyxTQUFTK0YsVUFBVW9JLGdCQUFnQnpLLFNBQVNBLFFBQVErSyxhQUFhLGVBQWUsQ0FBQztJQUN6RjtBQUNBLFdBQU87RUFDUjtBQVFBek8sV0FBUytGLFVBQVUySSx1QkFBdUIsQ0FBQ2hMLFNBQVNpTCxlQUFlO0FBQ2xFNU8sTUFBRTJELE9BQU8sRUFBRWtMLE9BQU9ELFVBQVU7RUFDN0I7QUFRQTNPLFdBQVMrRixVQUFVOEksOEJBQThCLENBQUNuTCxTQUFTaUwsZUFBZTtBQUN6RTVPLE1BQUVDLFNBQVMrRixVQUFVMkgsb0JBQW9CaEssT0FBTyxDQUFDLEVBQUUxQixLQUFLLHlCQUF5QixFQUFFNE0sT0FBT0QsVUFBVTtFQUNyRztBQWdCQUcsa0JBQWdCMUksVUFBVTJJLGFBQWEsU0FBVXRKLE1BQU1VLE1BQU07QUFDNUQsVUFBTXNHLFdBQVcsS0FBS0EsU0FBU2hILElBQUk7QUFDbkMsUUFBSSxDQUFDZ0gsVUFBVTtBQUNkLGFBQU8sQ0FBQTtJQUNSO0FBQ0EsVUFBTXVDLGNBQWMsQ0FBQTtBQUNwQixRQUFJaEk7QUFDSixRQUFJeUYsb0JBQW9Cd0MsbUJBQW1CO0FBQzFDLFlBQU07UUFBQ0M7TUFBTyxJQUFJekM7QUFDbEIsV0FBS3pGLElBQUksR0FBR0EsSUFBSWtJLFFBQVFqTixRQUFRLEVBQUUrRSxHQUFHO0FBQ3BDLFlBQUlrSSxRQUFRbEksQ0FBQyxFQUFFaUIsVUFBVTtBQUN4QixjQUFJaUgsUUFBUWxJLENBQUMsRUFBRWdCLFFBQVE7QUFDdEJnSCx3QkFBWXJKLEtBQUt1SixRQUFRbEksQ0FBQyxFQUFFZ0IsTUFBTTtVQUNuQyxPQUFPO0FBQ05nSCx3QkFBWXJKLEtBQUt1SixRQUFRbEksQ0FBQyxFQUFFckQsS0FBSztVQUNsQztRQUNEO01BQ0Q7SUFDRCxXQUFXOEksb0JBQW9CMEMsa0JBQWtCO0FBQ2hELFVBQUloSixRQUFRc0csU0FBU3RHLFNBQVNBLE1BQU07QUFDbkMsZUFBTyxDQUFBO01BQ1IsV0FBV3NHLFNBQVNqRSxTQUFTO0FBQzVCLGVBQU8sQ0FBQ2lFLFNBQVM5SSxLQUFLO01BQ3ZCO0lBQ0QsT0FBTztBQUNOLFdBQUtxRCxJQUFJLEdBQUdBLElBQUl5RixTQUFTeEssUUFBUSxFQUFFK0UsR0FBRztBQUNyQyxZQUFJeUYsU0FBU3pGLENBQUMsRUFBRXdCLFNBQVM7QUFDeEIsY0FBSXJDLFFBQVFzRyxTQUFTekYsQ0FBQyxFQUFFYixTQUFTQSxNQUFNO0FBQ3RDO1VBQ0Q7QUFDQSxjQUFJc0csU0FBU3pGLENBQUMsRUFBRWdCLFFBQVE7QUFDdkJnSCx3QkFBWXJKLEtBQUs4RyxTQUFTekYsQ0FBQyxFQUFFZ0IsTUFBTTtVQUNwQyxPQUFPO0FBQ05nSCx3QkFBWXJKLEtBQUs4RyxTQUFTekYsQ0FBQyxFQUFFckQsS0FBSztVQUNuQztRQUNEO01BQ0Q7SUFDRDtBQUNBLFdBQU9xTDtFQUNSO0FBYUFGLGtCQUFnQjFJLFVBQVVnSixlQUFlLFNBQVUzSixNQUFNVSxNQUFNO0FBQzlELFVBQU1zRyxXQUFXLEtBQUtBLFNBQVNoSCxJQUFJO0FBQ25DLFFBQUksQ0FBQ2dILFVBQVU7QUFDZCxhQUFPLENBQUE7SUFDUjtBQUNBLFVBQU11QyxjQUFjLENBQUE7QUFDcEIsUUFBSWhJO0FBQ0osUUFBSXlGLG9CQUFvQndDLG1CQUFtQjtBQUMxQyxZQUFNO1FBQUNDO01BQU8sSUFBSXpDO0FBQ2xCLFdBQUt6RixJQUFJLEdBQUdBLElBQUlrSSxRQUFRak4sUUFBUSxFQUFFK0UsR0FBRztBQUNwQyxZQUFJLENBQUNrSSxRQUFRbEksQ0FBQyxFQUFFaUIsVUFBVTtBQUN6QixjQUFJaUgsUUFBUWxJLENBQUMsRUFBRWdCLFFBQVE7QUFDdEJnSCx3QkFBWXJKLEtBQUt1SixRQUFRbEksQ0FBQyxFQUFFZ0IsTUFBTTtVQUNuQyxPQUFPO0FBQ05nSCx3QkFBWXJKLEtBQUt1SixRQUFRbEksQ0FBQyxFQUFFckQsS0FBSztVQUNsQztRQUNEO01BQ0Q7SUFDRCxXQUFXOEksb0JBQW9CMEMsa0JBQWtCO0FBQ2hELFVBQUloSixRQUFRc0csU0FBU3RHLFNBQVNBLE1BQU07QUFDbkMsZUFBTyxDQUFBO01BQ1IsV0FBVyxDQUFDc0csU0FBU2pFLFNBQVM7QUFDN0IsZUFBTyxDQUFDaUUsU0FBUzlJLEtBQUs7TUFDdkI7SUFDRCxPQUFPO0FBQ04sV0FBS3FELElBQUksR0FBR0EsSUFBSXlGLFNBQVN4SyxRQUFRLEVBQUUrRSxHQUFHO0FBQ3JDLFlBQUksQ0FBQ3lGLFNBQVN6RixDQUFDLEVBQUV3QixTQUFTO0FBQ3pCLGNBQUlyQyxRQUFRc0csU0FBU3pGLENBQUMsRUFBRWIsU0FBU0EsTUFBTTtBQUN0QztVQUNEO0FBQ0EsY0FBSXNHLFNBQVN6RixDQUFDLEVBQUVnQixRQUFRO0FBQ3ZCZ0gsd0JBQVlySixLQUFLOEcsU0FBU3pGLENBQUMsRUFBRWdCLE1BQU07VUFDcEMsT0FBTztBQUNOZ0gsd0JBQVlySixLQUFLOEcsU0FBU3pGLENBQUMsRUFBRXJELEtBQUs7VUFDbkM7UUFDRDtNQUNEO0lBQ0Q7QUFDQSxXQUFPcUw7RUFDUjtBQU9BaFAsV0FBUzJCLEtBQUs7Ozs7Ozs7Ozs7SUFVYkosY0FBZUMsYUFBWTtBQUMxQkEsZ0JBQVVBLFFBQVF3TCxLQUFLO0FBQ3ZCLFVBQUl4TCxZQUFZLElBQUk7QUFDbkIsZUFBTztNQUNSO0FBQ0EsVUFBSSxDQUFDTixHQUFHNEQsS0FBS3VLLGNBQWM3TixTQUFTLElBQUksR0FBRztBQUMxQyxlQUFPQTtNQUNSO0FBRUFBLGdCQUFVQSxRQUFROE4sWUFBWTtBQUU5QixZQUFNQyxZQUFZL04sUUFBUVQsUUFBUSxJQUFJO0FBQ3RDLFVBQUl3TyxZQUFZLElBQUk7QUFHbkIsY0FBTUMsWUFBWWhPLFFBQVFULFFBQVEsR0FBRztBQUNyQyxjQUFNME8sYUFBYUQsY0FBYyxLQUFLaE8sUUFBUVMsU0FBUyxJQUFJdU4sWUFBWTtBQUV2RSxZQUFJRTtBQUNKLFlBQUk1RDtBQUNKLFlBQUk2RDtBQUNKLFlBQUlKLGNBQWMsR0FBRztBQUNwQkcsbUJBQVM7QUFDVDVELGtCQUFRdEssWUFBWSxPQUFPLE1BQU07QUFDakNtTyxnQkFBTTtRQUVQLFdBQVdKLGNBQWNFLGFBQWEsR0FBRztBQUN4Q0MsbUJBQVM7QUFDVDVELGtCQUFRO0FBQ1I2RCxnQkFBTTtRQUVQLE9BQU87QUFDTkQsbUJBQVM7QUFDVDVELGtCQUFRO0FBQ1I2RCxnQkFBTTtRQUNQO0FBRUEsWUFBSUMsY0FBY0Y7QUFDbEJDLGVBQU9uTyxRQUFRcU8sTUFBTSxHQUFHLEVBQUU1TixTQUFTO0FBQ25DLGlCQUFTK0UsSUFBSSxHQUFHQSxJQUFJMkksS0FBSzNJLEtBQUs7QUFDN0I0SSx5QkFBZUY7UUFDaEI7QUFDQUUsdUJBQWU5RDtBQUNmdEssa0JBQVVBLFFBQVFXLFFBQVEsTUFBTXlOLFdBQVc7TUFDNUM7QUFFQSxhQUFPcE8sUUFBUVcsUUFBUSw4QkFBOEIsTUFBTTtJQUM1RDs7Ozs7Ozs7SUFRQTJOLFNBQVVuTyxRQUFPO0FBQ2hCLGFBQU9ULEdBQUc0RCxLQUFLaUwsWUFBWXBPLElBQUksSUFBSSxLQUFLLENBQUNULEdBQUc0RCxLQUFLaUwsWUFBWXBPLEVBQUU7SUFDaEU7Ozs7Ozs7Ozs7SUFVQXFPLFdBQVlyTyxRQUFPO0FBQ2xCLFVBQUkzQixTQUFTMkIsR0FBR21PLFFBQVFuTyxFQUFFLEdBQUc7QUFDNUIsY0FBTXNPLFNBQVMvRixPQUFPZ0csU0FBU3ZPLEdBQUduQixNQUFNLGNBQWMsRUFBRSxDQUFDLEdBQUcsRUFBRTtBQUM5RCxZQUFJeVAsUUFBUTtBQUVYLGNBQUkvTyxHQUFHNEQsS0FBS3VLLGNBQWMxTixJQUFJLElBQUksR0FBRztBQUNwQyxnQkFBSXNPLFVBQVUsSUFBSTtBQUNqQixxQkFBTztZQUNSO1VBQ0QsV0FBV0EsVUFBVSxJQUFJO0FBQ3hCLG1CQUFPO1VBQ1I7UUFDRDtNQUNEO0FBQ0EsYUFBTztJQUNSOzs7Ozs7OztJQVFBRSxPQUFRQyxVQUFTO0FBQ2hCLFVBQUksQ0FBQ0EsUUFBUSxDQUFDbFAsR0FBRzRELEtBQUt1SyxjQUFjZSxNQUFNLElBQUksR0FBRztBQUNoRCxlQUFPO01BQ1I7QUFDQSxZQUFNQyxjQUFjRCxLQUFLNVAsTUFBTSxjQUFjO0FBQzdDLFVBQUk2UCxlQUFlbkcsT0FBT2dHLFNBQVNHLFlBQVksQ0FBQyxHQUFHLEVBQUUsSUFBSSxJQUFJO0FBQzVELGVBQU87TUFDUjtBQUNBRCxhQUFPcFEsU0FBUzJCLEdBQUdKLGFBQWE2TyxJQUFJO0FBQ3BDLFlBQU1FLFVBQVU7QUFDaEIsYUFBT0YsS0FBS2pPLFFBQVFtTyxTQUFTLEtBQUt4TixPQUFPLFlBQVksQ0FBQztJQUN2RDtFQUNEO0FBT0E5QyxXQUFTd0MsU0FBUzs7Ozs7SUFLakIrTixzQkFBdUJsUSxTQUFRO0FBQzlCQSxZQUFNQSxJQUFJd0wsU0FBUztBQUNuQixhQUFPeEwsSUFBSXFDLE1BQU0sR0FBRyxDQUFDLEVBQUU0TSxZQUFZLElBQUlqUCxJQUFJcUMsTUFBTSxDQUFDO0lBQ25EOzs7OztJQUtBOE4sc0JBQXVCblEsU0FBUTtBQUM5QkEsWUFBTUEsSUFBSXdMLFNBQVM7QUFDbkIsYUFBT3hMLElBQUlxQyxNQUFNLEdBQUcsQ0FBQyxFQUFFRyxZQUFZLElBQUl4QyxJQUFJcUMsTUFBTSxDQUFDO0lBQ25EOzs7Ozs7Ozs7Ozs7OztJQWNBK04scUJBQXFCQSxDQUFDcFEsS0FBS3FRLE9BQU9DLEtBQUtDLGFBQWE7QUFDbkQsVUFBSUYsTUFBTXpPLFdBQVcwTyxJQUFJMU8sUUFBUTtBQUNoQyxjQUFNLElBQUkySixNQUFNLHdEQUF3RDtNQUN6RTtBQUNBLFVBQUlpRixRQUFRO0FBQ1osVUFBSUMsVUFBVTtBQUNkLFlBQU14RixTQUFTLENBQUE7QUFDZixVQUFJLENBQUN5RixNQUFNQyxRQUFRSixRQUFRLEdBQUc7QUFDN0IsWUFBSUEsYUFBYSxRQUFXO0FBQzNCQSxxQkFBVyxDQUFBO1FBQ1osV0FBVyxPQUFPQSxhQUFhLFVBQVU7QUFDeENBLHFCQUFXLENBQUNBLFFBQVE7UUFDckIsT0FBTztBQUNOLGdCQUFNLElBQUlLLFVBQVUsbUNBQW1DO1FBQ3hEO01BQ0Q7QUFDQSxlQUFTakssSUFBSSxHQUFHQSxJQUFJM0csSUFBSTRCLFFBQVEsRUFBRStFLEdBQUc7QUFBQSxZQUFBa0ssYUFBQTdOLDJCQUNkdU4sUUFBQSxHQUFBTztBQUFBLFlBQUE7QUFBdEIsZUFBQUQsV0FBQTNOLEVBQUEsR0FBQSxFQUFBNE4sU0FBQUQsV0FBQTFOLEVBQUEsR0FBQUMsUUFBZ0M7QUFBQSxrQkFBckJDLFVBQUF5TixPQUFBeE47QUFDVixnQkFBSXRELElBQUlxQyxNQUFNc0UsR0FBR0EsSUFBSXRELFFBQVF6QixNQUFNLE1BQU15QixTQUFTO0FBQ2pEc0QsbUJBQUt0RCxRQUFRekIsU0FBUztBQUN0QjtZQUNEO1VBQ0Q7UUFBQSxTQUFBa0MsS0FBQTtBQUFBK00scUJBQUE5TSxFQUFBRCxHQUFBO1FBQUEsVUFBQTtBQUFBK00scUJBQUE3TSxFQUFBO1FBQUE7QUFDQSxZQUFJaEUsSUFBSXFDLE1BQU1zRSxHQUFHQSxJQUFJMEosTUFBTXpPLE1BQU0sTUFBTXlPLE9BQU87QUFDN0MsY0FBSUksWUFBWSxNQUFNO0FBQ3JCQSxzQkFBVTlKO1VBQ1g7QUFDQSxZQUFFNko7QUFDRjdKLGVBQUswSixNQUFNek8sU0FBUztRQUNyQixXQUFXNUIsSUFBSXFDLE1BQU1zRSxHQUFHQSxJQUFJMkosSUFBSTFPLE1BQU0sTUFBTTBPLEtBQUs7QUFDaEQsWUFBRUU7QUFDRjdKLGVBQUsySixJQUFJMU8sU0FBUztRQUNuQjtBQUNBLFlBQUksQ0FBQzRPLFNBQVNDLFlBQVksTUFBTTtBQUMvQnhGLGlCQUFPM0YsS0FBS3RGLElBQUlxQyxNQUFNb08sU0FBUzlKLElBQUksQ0FBQyxDQUFDO0FBQ3JDOEosb0JBQVU7UUFDWDtNQUNEO0FBQ0EsYUFBT3hGO0lBQ1I7Ozs7Ozs7Ozs7O0lBV0E4RixrQkFBa0JBLENBQUMvUSxLQUFLZ1IsV0FBVztBQUNsQyxVQUFJQyxVQUFValIsT0FBTyxJQUFJd0wsU0FBUyxFQUFFbUIsS0FBSztBQUN6QyxZQUFNeEksV0FBVyxJQUFJeEUsU0FBU3dFLFNBQVM4TSxNQUFNO0FBQzdDOU0sZUFBU0MsT0FBTyxNQUFNM0IsT0FBTyxRQUFRLEdBQUcsR0FBRyxPQUFPQSxPQUFPLFFBQVEsR0FBRyxDQUFDO0FBQ3JFMEIsZUFBU0UsVUFBVUYsU0FBU0UsUUFBUXZDLFFBQVEsT0FBTyxLQUFLVyxPQUFPLFVBQVUsS0FBSyxDQUFDO0FBQy9Fd08sZUFBUzlNLFNBQVNRLE9BQU87QUFDekIsVUFBSXFNLFFBQVE7QUFDWCxjQUFNRSxNQUFNLEtBQUt6TyxPQUFPLElBQUk7QUFDNUIsY0FBTTBPLFdBQVdGLE9BQU9HLFlBQVlGLEdBQUc7QUFDdkMsWUFBSUMsYUFBYSxNQUFNQSxhQUFhRixPQUFPclAsU0FBU3NQLElBQUl0UCxRQUFRO0FBQy9EcVAsb0JBQUEsSUFBQXhPLE9BQWN5TyxHQUFHO1FBQ2xCO01BQ0Q7QUFDQSxhQUFPRCxPQUFPdEUsS0FBSztJQUNwQjs7Ozs7Ozs7O0lBU0EwRSxvQkFBcUJyUixTQUFRO0FBQzVCLGFBQ0NBLElBRUU4QixRQUFRLFFBQVEsUUFBUSxFQUV4QkEsUUFBUSxXQUFXLEtBQUssRUFDeEJBLFFBQVEsWUFBWSxLQUFLO0lBRTdCOzs7Ozs7Ozs7Ozs7SUFZQXdQLGFBQWFBLENBQUNuUCxRQUFRb1AsU0FBU2hDLGdCQUFnQjtBQUM5QyxhQUFPcE4sT0FBT0wsUUFBUXlQLFNBQVNoQyxZQUFZek4sUUFBUSxPQUFPLE1BQU0sQ0FBQztJQUNsRTs7Ozs7Ozs7OztJQVVBMFAsWUFBYUMsWUFBVztBQUN2QixhQUFPLENBQUMsY0FBYyxZQUFZLFlBQVksT0FBTyxFQUFFelEsU0FBU3lRLE1BQU07SUFDdkU7Ozs7Ozs7O0lBUUFyUCxjQUFlNkIsVUFBUztBQUN2QixhQUFPcEQsR0FBRzRELEtBQUtyQyxhQUFhNkIsSUFBSSxFQUFFbkMsUUFBUSxRQUFRLE1BQU07SUFDekQ7Ozs7Ozs7SUFPQTRQLFlBQWFDLFVBQVM7QUFDckIsVUFBSUM7QUFDSixXQUFLQSxJQUFJRCxLQUFLeFIsTUFBTSw2QkFBNkIsT0FBTyxNQUFNO0FBQzdELGVBQUEsR0FBQXNDLE9BQVVtUCxFQUFFLENBQUMsR0FBQyxHQUFBO01BQ2Y7QUFDQSxXQUFLQSxJQUFJRCxLQUFLeFIsTUFBTSw2QkFBNkIsT0FBTyxNQUFNO0FBQzdELGVBQUEsR0FBQXNDLE9BQVVtUCxFQUFFLENBQUMsR0FBQyxHQUFBO01BQ2Y7QUFDQSxXQUFLQSxJQUFJRCxLQUFLeFIsTUFBTSx3QkFBd0IsT0FBTyxNQUFNO0FBQ3hELGVBQU95UixFQUFFLENBQUMsSUFBSWhTLE9BQU9pUyxNQUFNLE1BQU0sSUFBSTtNQUN0QztBQUNBLFdBQUtELElBQUlELEtBQUt4UixNQUFNLHVCQUF1QixPQUFPLE1BQU07QUFDdkQsZUFBQSxHQUFBc0MsT0FBVW1QLEVBQUUsQ0FBQyxHQUFDLEdBQUE7TUFDZjtBQUNBLFdBQUtBLElBQUlELEtBQUt4UixNQUFNLHdCQUF3QixPQUFPLE1BQU07QUFDeEQsZUFBT3lSLEVBQUUsQ0FBQyxJQUFJaFMsT0FBT2lTLE1BQU0sS0FBSyxHQUFHO01BQ3BDO0FBQ0EsV0FBS0QsSUFBSUQsS0FBS3hSLE1BQU0seUJBQXlCLE9BQU8sTUFBTTtBQUN6RCxlQUFPeVIsRUFBRSxDQUFDLElBQUloUyxPQUFPaVMsTUFBTSxNQUFNLElBQUk7TUFDdEM7QUFDQSxXQUFLRCxJQUFJRCxLQUFLeFIsTUFBTSx3QkFBd0IsT0FBTyxNQUFNO0FBQ3hELGVBQUEsR0FBQXNDLE9BQVVtUCxFQUFFLENBQUMsR0FBQyxHQUFBO01BQ2Y7QUFDQSxVQUFJalMsU0FBU3dDLE9BQU9xUCxXQUFXRyxLQUFLaEYsS0FBSyxDQUFDLEdBQUc7QUFDNUMsZUFBTy9NLE9BQU9pUyxNQUFNLE9BQU8sS0FBSztNQUNqQztBQUNBLGFBQU9GO0lBQ1I7Ozs7Ozs7O0lBUUFHLG1CQUFtQkEsQ0FBQzlSLEtBQUsrUixnQkFBZ0I7QUFDeEMsVUFBSUEsZ0JBQWdCLFFBQVc7QUFDOUJBLHNCQUFjO01BQ2Y7QUFDQSxVQUFJL1IsSUFBSWdTLE9BQU8sYUFBYSxNQUFNLElBQUk7QUFDckNoUyxlQUFPK1I7TUFDUjtBQUNBLGFBQU8vUjtJQUNSO0VBQ0Q7QUFPQUwsV0FBU3NTLFFBQVE7Ozs7Ozs7O0lBUWhCQyxNQUFPQyxTQUFRO0FBQ2QsVUFBSSxDQUFDekIsTUFBTUMsUUFBUXdCLEdBQUcsR0FBRztBQUN4QixjQUFNLElBQUl2QixVQUFVLGtEQUFrRDtNQUN2RTtBQUNBLGFBQU91QixJQUFJL0UsT0FBTyxDQUFDZ0YsTUFBTUMsUUFBUTtBQUNoQyxlQUFPRixJQUFJelIsUUFBUTBSLElBQUksTUFBTUM7TUFDOUIsQ0FBQztJQUNGOzs7Ozs7Ozs7SUFTQUMsTUFBT0gsU0FBUTtBQUNkLFVBQUksQ0FBQ3pCLE1BQU1DLFFBQVF3QixHQUFHLEdBQUc7QUFDeEIsY0FBTSxJQUFJdkIsVUFBVSxrREFBa0Q7TUFDdkU7QUFDQSxhQUFPdUIsSUFBSS9FLE9BQU8sQ0FBQ2dGLE1BQU1DLFFBQVE7QUFDaEMsZUFBT0YsSUFBSXpSLFFBQVEwUixJQUFJLE1BQU1DO01BQzlCLENBQUM7SUFDRjs7Ozs7Ozs7O0lBU0FFLE9BQU9BLENBQUNKLEtBQUszSyxTQUFTO0FBQ3JCLFVBQUksQ0FBQ2tKLE1BQU1DLFFBQVF3QixHQUFHLEdBQUc7QUFDeEIsY0FBTSxJQUFJdkIsVUFBVSxtREFBbUQ7TUFDeEU7QUFDQSxVQUFJLE9BQU9wSixTQUFTLFlBQVlBLFFBQVEsR0FBRztBQUUxQyxlQUFPLENBQUMySyxHQUFHO01BQ1o7QUFFQSxZQUFNSyxZQUFZQyxLQUFLQyxLQUFLUCxJQUFJdlEsU0FBUzRGLElBQUk7QUFDN0MsWUFBTXlELFNBQVN5RixNQUFNaUMsS0FBSztRQUN6Qi9RLFFBQVE0UTtNQUNULENBQUM7QUFDRCxlQUFTN0wsSUFBSSxHQUFHQSxJQUFJNkwsV0FBVzdMLEtBQUs7QUFDbkNzRSxlQUFPdEUsQ0FBQyxJQUFJd0wsSUFBSTlQLE1BQU1zRSxJQUFJYSxPQUFPYixJQUFJLEtBQUthLElBQUk7TUFDL0M7QUFDQSxhQUFPeUQ7SUFDUjtFQUNEO0FBV0F0TCxXQUFTaVQsVUFBVTtJQUNsQkMsVUFBVTs7Ozs7Ozs7TUFRVEMsY0FBY0EsQ0FBQ0MsUUFBUTNNLFNBQVM7QUFDL0IsY0FBTTRNLGtCQUFrQnRULEVBQUV1VCxHQUFHTCxRQUFRTSxTQUFTQSxTQUFTQztBQUN2RCxjQUFNbEksU0FBUytILGdCQUFnQkQsUUFBUTNNLElBQUk7QUFDM0MsWUFBSTZFLFVBQVU4SCxPQUFPSyxRQUFRaE4sS0FBS25DLEtBQUtnTCxZQUFZLEVBQUVqTyxTQUFTK1IsT0FBT0ssS0FBS25FLFlBQVksQ0FBQyxHQUFHO0FBQ3pGaEUsaUJBQU9vSSxXQUFXak4sS0FBS2lOO1FBQ3hCO0FBQ0EsZUFBT3BJO01BQ1I7Ozs7Ozs7TUFPQXFJLGVBQWVBLENBQUNQLFFBQVEzTSxTQUFTO0FBQ2hDLGNBQU00TSxrQkFBa0J0VCxFQUFFdVQsR0FBR0wsUUFBUU0sU0FBU0EsU0FBU0M7QUFDdkQsY0FBTWxJLFNBQVMrSCxnQkFBZ0JELFFBQVEzTSxJQUFJO0FBQzNDLFlBQ0MsQ0FBQzJNLE9BQU9LLFFBQ1BuSSxVQUFVLElBQUlzSSxPQUFBLE1BQUE5USxPQUFhNUIsR0FBRzRELEtBQUtyQyxhQUFhMlEsT0FBT0ssSUFBSSxDQUFDLEdBQUksR0FBRyxFQUFFSSxLQUFLdkksT0FBT2hILElBQUksR0FDckY7QUFDRCxpQkFBT2dIO1FBQ1I7QUFDQSxlQUFPO01BQ1I7SUFDRDs7Ozs7O0lBTUF3SSx3QkFBeUJyTixVQUFTO0FBQ2pDLFlBQU1zTixhQUFhL1QsU0FBU2dVO0FBQzVCLFVBQUksQ0FBQ0QsY0FBY3ROLEtBQUt3TixTQUFTO0FBQ2hDLGVBQU94TixLQUFLbkM7TUFDYjtBQUNBLFlBQU1vTyxNQUFNak0sS0FBS25DLEtBQUtnTCxZQUFZLEVBQUV2TyxRQUFRZ1QsV0FBV3pFLFlBQVksQ0FBQztBQUNwRSxVQUFJb0QsTUFBTSxHQUFHO0FBQ1osZUFBT2pNLEtBQUtuQztNQUNiO0FBQ0EsYUFBT3ZFLEVBQUUsUUFBUSxFQUFFeUcsT0FDbEJDLEtBQUtuQyxLQUFLNUIsTUFBTSxHQUFHZ1EsR0FBRyxHQUN0QjNTLEVBQUUsUUFBUSxFQUNSbVUsSUFBSSxtQkFBbUIsV0FBVyxFQUNsQzVQLEtBQUttQyxLQUFLbkMsS0FBSzVCLE1BQU1nUSxLQUFLQSxNQUFNcUIsV0FBVzlSLE1BQU0sQ0FBQyxHQUNwRHdFLEtBQUtuQyxLQUFLNUIsTUFBTWdRLE1BQU1xQixXQUFXOVIsTUFBTSxDQUN4QztJQUNEOzs7Ozs7SUFNQWtTLGtCQUFtQmYsWUFBVztBQUM3QnBULGVBQVNnVSxxQkFBcUJaLFVBQVVBLE9BQU9LO0lBQ2hEOzs7Ozs7OztJQVFBVyxXQUFZQyxRQUFPO0FBQ2xCLFVBQUlBLEdBQUdDLFFBQVEsSUFBSTtBQUNsQjtNQUNEO0FBQ0EsVUFBSTFQLFNBQVM3RSxFQUFFc1UsR0FBR3pQLE1BQU0sRUFBRTJQLFFBQVEsb0JBQW9CO0FBQ3RELFVBQUksQ0FBQzNQLE9BQU8zQyxRQUFRO0FBQ25CO01BQ0Q7QUFDQTJDLGVBQVNBLE9BQU80UCxLQUFLO0FBQ3JCNVAsYUFBT3FPLFFBQVEsTUFBTTtBQUNyQixZQUFNWixTQUFTek4sT0FBTzZCLEtBQUssU0FBUyxFQUFFZ08sU0FBU0MsV0FBVzlQLE9BQU82QixLQUFLLFNBQVMsRUFBRWtPLFVBQVVEO0FBRTNGckMsYUFBTyxDQUFDLEVBQUV1QyxNQUFNO0lBQ2pCO0VBQ0Q7QUFhQTVVLFdBQVN3RSxXQUFXLFNBQVVoQyxRQUFRO0FBQ3JDLFFBQUksT0FBT0EsV0FBVyxVQUFVO0FBQy9CLFlBQU0sSUFBSXlPLFVBQVUsY0FBYztJQUNuQztBQUVBLFNBQUt2TSxVQUFVbEM7QUFDZixTQUFLaUksVUFBVTtBQUNmLFNBQUtvSyxVQUFVLENBQUM7QUFDaEIsU0FBS0MsU0FBQSxVQUFBaFMsT0FBbUJnUSxLQUFLaUMsT0FBTyxHQUFDLElBQUE7QUFDckMsU0FBS0MsVUFBVTtFQUNoQjtBQUNBaFYsV0FBU3dFLFNBQVM0QixZQUFZOzs7Ozs7Ozs7O0lBVTdCM0IsT0FBT3FRLFFBQVFFLFNBQVM7QUFDdkIsVUFBSSxDQUFDRixVQUFVLENBQUNFLFNBQVM7QUFDeEIsY0FBTSxJQUFJcEosTUFBTSwwQ0FBMEM7TUFDM0Q7QUFDQSxZQUFNcUosS0FBSyxJQUFJckIsT0FBQSxHQUFBOVEsT0FBVWdTLFFBQU0sY0FBQSxFQUFBaFMsT0FBZWtTLE9BQU8sR0FBSSxHQUFHO0FBQzVELFdBQUt0USxVQUFVLEtBQUtBLFFBQVF2QyxRQUFROFMsSUFBSWpWLFNBQVN3RSxTQUFTMFEsWUFBWSxJQUFJLENBQUM7SUFDNUU7Ozs7OztJQU1BbFEsU0FBUztBQUNSLFVBQUk7UUFBQ047TUFBTyxJQUFJO0FBQ2hCLGlCQUFXMkMsV0FBVyxLQUFLd04sU0FBUztBQUNuQyxZQUFJLENBQUN0UCxPQUFPNFAsT0FBTyxLQUFLTixTQUFTeE4sT0FBTyxHQUFHO0FBQzFDO1FBQ0Q7QUFDQTNDLGtCQUFVQSxRQUFRdkMsUUFBUWtGLFNBQVMsS0FBS3dOLFFBQVF4TixPQUFPLENBQUM7TUFDekQ7QUFDQSxhQUFPM0M7SUFDUjtJQUNBb1EsUUFBUTs7SUFFUkUsU0FBUzs7SUFFVHRRLFNBQVM7O0lBRVQrRixTQUFTOztJQUVUb0ssU0FBUzs7RUFDVjtBQUtBN1UsV0FBU3dFLFNBQVMwUSxjQUFlRSxDQUFBQSxVQUFTO0FBQ3pDLFdBQVE1VSxXQUFVO0FBQ2pCLFlBQU02RyxVQUFVK04sTUFBS04sU0FBU00sTUFBSzNLLFVBQVUySyxNQUFLSjtBQUNsREksTUFBQUEsTUFBS1AsUUFBUXhOLE9BQU8sSUFBSTdHO0FBQ3hCLFFBQUU0VSxNQUFLM0s7QUFDUCxhQUFPcEQ7SUFDUjtFQUNEO0FBV0FySCxXQUFTWSxPQUFPLFlBQWF5VSxNQUFNO0FBS2xDLFFBQUlBLEtBQUtwVCxXQUFXLEdBQUc7QUFDdEIsWUFBTSxDQUFDcVQsS0FBSyxJQUFJRDtBQUNoQixVQUFJLFdBQVd4QixLQUFLeUIsS0FBSyxHQUFHO0FBRTNCLGNBQU1DLGFBQWEsNkNBQTZDOVUsS0FBSzZVLEtBQUs7QUFDMUUsWUFBSUMsWUFBWTtBQUVmLGVBQUtDLEtBQUssSUFBSUMsS0FDYkMsUUFBUUMsTUFBTUYsS0FBS0csS0FBSyxNQUFNLENBQzdCTCxXQUFXLENBQUMsR0FDWkEsV0FBVyxDQUFDLElBQUksR0FDaEJBLFdBQVcsQ0FBQyxHQUNaQSxXQUFXLENBQUMsR0FDWkEsV0FBVyxDQUFDLEdBQ1pBLFdBQVcsQ0FBQyxDQUFBLENBQ1osQ0FDRjtRQUNEO01BQ0QsV0FBVyxPQUFPRCxVQUFVLFVBQVU7QUFFckMsY0FBTU8sWUFBWTdWLFNBQVNFLEtBQUtFLHlCQUF5QmtWLEtBQUs7QUFDOUQsWUFBSU8sV0FBVztBQUNkLGVBQUtMLEtBQUssSUFBSUMsS0FBS0EsS0FBS0csSUFBSUQsTUFBTSxNQUFNRSxTQUFTLENBQUM7UUFDbkQ7TUFDRDtJQUNEO0FBQ0EsUUFBSSxDQUFDLEtBQUtMLElBQUk7QUFFYixXQUFLQSxLQUFLLEtBQUtNLFNBQVMxUCxVQUFVMlAsS0FBS0osTUFBTUYsTUFBTSxDQUFDQSxNQUFNLElBQUEsR0FBRzdWLGtCQUFBdUQsZUFBY2tTLElBQUksQ0FBQyxDQUFDLEdBQUc7SUFDckY7QUFFQSxRQUFJLENBQUMsS0FBS1csUUFBUSxHQUFHO0FBQ3BCOVUsU0FBRytVLElBQUl2VSxLQUFLLHlDQUF5QzJULElBQUk7SUFDMUQ7RUFDRDtBQWFBclYsV0FBU1ksS0FBS0MsYUFBYTs7O0lBRzFCQyxRQUFRLENBQUMsTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sT0FBTyxPQUFPLEtBQUs7SUFDbEZvVixhQUFhLENBQUMsTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sT0FBTyxPQUFPLEtBQUs7SUFDdkZDLE1BQU0sQ0FBQyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxLQUFLO0lBQ3REQyxXQUFXLENBQUMsS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssR0FBRztJQUM3Q0MsZUFBZTtNQUNkQyxTQUFTO01BQ1RDLFNBQVM7TUFDVEMsU0FBUztNQUNUQyxVQUFVO01BQ1ZDLFVBQVU7TUFDVkMsT0FBTztJQUNSO0VBQ0Q7QUFlQTNXLFdBQVNZLEtBQUtnVyxVQUFVO0lBQ3ZCQyxTQUFTO0lBQ1RDLFNBQVM7SUFDVEMsT0FBTztJQUNQWixNQUFNO0lBQ05hLE9BQU87O0lBRVBsVyxRQUFRO0lBQ1JtVyxPQUFPO0VBQ1I7QUFDQWpYLFdBQVNZLEtBQUt3RixZQUFZOztJQUV6QjRQLFVBQVU7QUFDVCxhQUFPLENBQUM5TCxPQUFPZ04sTUFBTSxLQUFLQyxRQUFRLENBQUM7SUFDcEM7Ozs7O0lBS0FDLFNBQVN4VyxNQUFNO0FBQ2QsYUFBTyxLQUFLdVcsUUFBUSxJQUFJdlcsS0FBS3VXLFFBQVE7SUFDdEM7Ozs7O0lBS0FFLFFBQVF6VyxNQUFNO0FBQ2IsYUFBTyxLQUFLdVcsUUFBUSxJQUFJdlcsS0FBS3VXLFFBQVE7SUFDdEM7O0lBRUFHLGtCQUFrQjtBQUNqQixhQUFPdFgsU0FBU1ksS0FBS0MsV0FBV0MsT0FBTyxLQUFLeVcsWUFBWSxDQUFDO0lBQzFEOztJQUVBQyx3QkFBd0I7QUFDdkIsYUFBT3hYLFNBQVNZLEtBQUtDLFdBQVdxVixZQUFZLEtBQUtxQixZQUFZLENBQUM7SUFDL0Q7O0lBRUFFLGVBQWU7QUFDZCxhQUFPelgsU0FBU1ksS0FBS0MsV0FBV0MsT0FBTyxLQUFLNFcsU0FBUyxDQUFDO0lBQ3ZEOztJQUVBQyxxQkFBcUI7QUFDcEIsYUFBTzNYLFNBQVNZLEtBQUtDLFdBQVdxVixZQUFZLEtBQUt3QixTQUFTLENBQUM7SUFDNUQ7O0lBRUFFLGdCQUFnQjtBQUNmLGFBQU81WCxTQUFTWSxLQUFLQyxXQUFXc1YsS0FBSyxLQUFLMEIsVUFBVSxDQUFDO0lBQ3REOztJQUVBQyxzQkFBc0I7QUFDckIsYUFBTzlYLFNBQVNZLEtBQUtDLFdBQVd1VixVQUFVLEtBQUt5QixVQUFVLENBQUM7SUFDM0Q7O0lBRUFFLGFBQWE7QUFDWixhQUFPL1gsU0FBU1ksS0FBS0MsV0FBV3NWLEtBQUssS0FBSzZCLE9BQU8sQ0FBQztJQUNuRDs7SUFFQUMsbUJBQW1CO0FBQ2xCLGFBQU9qWSxTQUFTWSxLQUFLQyxXQUFXdVYsVUFBVSxLQUFLNEIsT0FBTyxDQUFDO0lBQ3hEOzs7Ozs7Ozs7O0lBVUFFLElBQUl4UyxRQUFReVMsTUFBTTtBQUNqQixVQUFJQyxNQUFNbE8sT0FBT2dHLFNBQVN4SyxRQUFRLEVBQUU7QUFDcEMsVUFBSXdFLE9BQU9nTixNQUFNa0IsR0FBRyxHQUFHO0FBQ3RCLGNBQU0sSUFBSW5ILFVBQUEsbUJBQUFuTyxPQUE2QjRDLFFBQU0sYUFBQSxDQUFhO01BQzNEO0FBQ0F5UyxhQUFPQSxLQUFLdFYsWUFBWTtBQUN4QixZQUFNO1FBQUMrVDtNQUFPLElBQUk1VyxTQUFTWTtBQUMzQixVQUFJeVgsV0FBV3pCLFFBQVF1QixJQUFJLEtBQUt2QixRQUFBLEdBQUE5VCxPQUFXcVYsTUFBSSxHQUFBLENBQUE7QUFDL0MsVUFBSUUsVUFBVTtBQUdiLFlBQUlBLGFBQWEsUUFBUTtBQUN4QkEscUJBQVc7QUFDWEQsaUJBQU87UUFDUjtBQUNBLGFBQUEsTUFBQXRWLE9BQVd1VixRQUFRLENBQUEsRUFBSSxLQUFBLE1BQUF2VixPQUFXdVYsUUFBUSxDQUFBLEVBQUksSUFBSUQsR0FBRztBQUNyRCxlQUFPO01BQ1I7QUFDQSxZQUFNLElBQUl4TSxNQUFBLGlCQUFBOUksT0FBdUJxVixNQUFJLFVBQUEsRUFBQXJWLE9BQVd5QyxPQUFPK1MsS0FBSzFCLE9BQU8sRUFBRTlRLEtBQUssSUFBSSxHQUFDLGVBQUEsQ0FBZTtJQUMvRjs7Ozs7Ozs7OztJQVVBeVMsU0FBUzdTLFFBQVF5UyxNQUFNO0FBQ3RCLGFBQU8sS0FBS0QsSUFBSSxDQUFDeFMsUUFBUXlTLElBQUk7SUFDOUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFxQ0FLLE9BQU9DLFdBQVdDLE1BQU07QUFDdkIsVUFBSSxDQUFDLEtBQUsxQyxRQUFRLEdBQUc7QUFDcEIsZUFBTztNQUNSO0FBRUEsVUFBSTJDLFFBQVE7QUFFWixVQUFJRCxTQUFTLE9BQU87QUFDbkJDLGdCQUFRLElBQUkzWSxTQUFTWSxLQUFLLEtBQUt1VyxRQUFRLENBQUMsRUFBRWUsSUFBSSxLQUFLVSxrQkFBa0IsR0FBRyxTQUFTO01BQ2xGLFdBQVcsT0FBT0YsU0FBUyxVQUFVO0FBRXBDQyxnQkFBUSxJQUFJM1ksU0FBU1ksS0FBSyxLQUFLdVcsUUFBUSxDQUFDLEVBQUVlLElBQUksS0FBS1Usa0JBQWtCLElBQUlGLE1BQU0sU0FBUztNQUN6RjtBQUVBLFVBQUksQ0FBQ0QsV0FBVztBQUNmLGVBQU9FLE1BQU1FLFlBQVk7TUFDMUI7QUFDQSxZQUFNbEosTUFBTUEsQ0FBQ3lJLEtBQUtVLFFBQVE7QUFDekJBLGdCQUFBQSxNQUFRO0FBQ1IsZUFBTyxLQUFBaFcsT0FBS3NWLEdBQUcsRUFBR3ZNLFNBQVMsRUFBRW5KLE1BQU0sSUFBSW9XLEdBQUc7TUFDM0M7QUFDQSxZQUFNQyxNQUFNSixNQUFNSyxTQUFTO0FBQzNCLFlBQU0vRyxJQUFJMEcsTUFBTU0sV0FBVztBQUMzQixZQUFNMVYsSUFBSW9WLE1BQU1PLFdBQVc7QUFDM0IsWUFBTUMsS0FBS1IsTUFBTVMsZ0JBQWdCO0FBQ2pDLFlBQU1DLElBQUlWLE1BQU1XLFFBQVE7QUFDeEIsWUFBTUMsSUFBSVosTUFBTWpCLFNBQVMsSUFBSTtBQUM3QixZQUFNOEIsSUFBSWIsTUFBTWMsWUFBWTtBQUM1QixZQUFNQyxNQUFNWCxNQUFNLE1BQU07QUFDeEIsWUFBTVksU0FBU1osT0FBTyxLQUFLLE9BQU87QUFDbEMsWUFBTWEsaUJBQWlCO1FBQ3RCQyxJQUFJbEssSUFBSW9KLEdBQUc7UUFDWGUsR0FBR2Y7UUFDSGdCLElBQUlwSyxJQUFJK0osR0FBRztRQUNYTSxHQUFHTjtRQUNITyxHQUFHTjtRQUNITyxJQUFJdkssSUFBSXNDLENBQUM7UUFDVEE7UUFDQWtJLElBQUl4SyxJQUFJcE0sQ0FBQztRQUNUQTtRQUNBNlcsS0FBS3pLLElBQUl3SixJQUFJLENBQUM7UUFDZGtCLE1BQU0xQixNQUFNWixXQUFXO1FBQ3ZCdUMsS0FBSzNCLE1BQU1WLGlCQUFpQjtRQUM1QnNDLEdBQUc1QixNQUFNWCxPQUFPO1FBQ2hCd0MsSUFBSTdLLElBQUkwSixDQUFDO1FBQ1RBO1FBQ0FvQixNQUFNOUIsTUFBTWxCLGFBQWE7UUFDekJpRCxLQUFLL0IsTUFBTWhCLG1CQUFtQjtRQUM5QmdELElBQUloTCxJQUFJNEosQ0FBQztRQUNUQTtRQUNBcUIsTUFBTXBCO1FBQ05xQixJQUFJbEwsSUFBSTZKLElBQUksR0FBRztRQUNmQTtNQUNEO0FBQ0EsWUFBTWhWLFdBQVcsSUFBSXhFLFNBQVN3RSxTQUFTaVUsU0FBUztBQUNoRGpVLGVBQVNDLE9BQU8sT0FBTyxLQUFLO0FBQzVCRCxlQUFTRSxVQUFVRixTQUFTRSxRQUFRdkM7Ozs7O1FBS25DO1FBQ0MzQixXQUFVO0FBQ1YsaUJBQU9vWixlQUFlcFosS0FBSztRQUM1QjtNQUNEO0FBQ0EsYUFBT2dFLFNBQVNRLE9BQU8sRUFBRTdDLFFBQVEsY0FBYyxJQUFJO0lBQ3BEOzs7Ozs7Ozs7SUFTQTJZLFNBQVNwQyxNQUFNO0FBR2QsWUFBTXFDLGFBQVksb0JBQUl0RixLQUFLLEdBQUV1RixTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxJQUFJdkYsS0FBSyxJQUFJLEVBQUV1RixTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSztBQUMzRixjQUFRLE1BQUE7UUFDUCxLQUFLRCxhQUFhO0FBQ2pCLGlCQUFPLEtBQUt2QyxPQUFPeFksU0FBU1ksS0FBS0MsV0FBV3dWLGNBQWNDLFNBQVNvQyxJQUFJO1FBQ3hFLEtBQUtxQyxhQUFhO0FBQ2pCLGlCQUFPLEtBQUt2QyxPQUFPeFksU0FBU1ksS0FBS0MsV0FBV3dWLGNBQWNFLFNBQVNtQyxJQUFJO1FBQ3hFLE1BQUtxQyxXQUFXLEtBQUtBLFdBQVc7QUFDL0IsaUJBQU8sS0FBS3ZDLE9BQU94WSxTQUFTWSxLQUFLQyxXQUFXd1YsY0FBY0ssVUFBVWdDLElBQUk7UUFDekUsS0FBS3FDLGFBQWE7QUFDakIsaUJBQU8sS0FBS3ZDLE9BQU94WSxTQUFTWSxLQUFLQyxXQUFXd1YsY0FBY0csU0FBU2tDLElBQUk7UUFDeEUsTUFBS3FDLFdBQVcsS0FBS0EsV0FBVztBQUMvQixpQkFBTyxLQUFLdkMsT0FBT3hZLFNBQVNZLEtBQUtDLFdBQVd3VixjQUFjSSxVQUFVaUMsSUFBSTtRQUN6RTtBQUNDLGlCQUFPLEtBQUtGLE9BQU94WSxTQUFTWSxLQUFLQyxXQUFXd1YsY0FBY00sT0FBTytCLElBQUk7TUFDdkU7SUFDRDs7Ozs7OztJQU9BdUMsbUJBQW1CO0FBQ2xCLGFBQU8sSUFBSXJILE9BQUEsYUFBQTlRLE9BQ0csS0FBS29ZLGVBQWUsR0FBQyxNQUFBLEVBQUFwWSxPQUFPLEtBQUt3VSxnQkFBZ0IsR0FBQyxHQUFBLEVBQUF4VSxPQUFJLEtBQUswVSxzQkFBc0IsR0FBQyxVQUFBLEdBQy9GLElBQ0Q7SUFDRDs7Ozs7Ozs7SUFRQTJELFlBQVl0SyxPQUFPO0FBRWxCQSxjQUFRM0csT0FBT2dHLFNBQVNXLE9BQU8sRUFBRTtBQUNqQ0EsY0FBUTNHLE9BQU9nTixNQUFNckcsS0FBSyxJQUFJLElBQUlBO0FBQ2xDLFlBQU11SyxTQUFTLElBQUkxTCxPQUFPbUIsS0FBSztBQUMvQixZQUFNdk0sT0FBQSxHQUFBeEIsT0FBVSxLQUFLb1ksZUFBZSxHQUFDLEdBQUEsRUFBQXBZLE9BQUksS0FBS3dVLGdCQUFnQixDQUFDO0FBQy9ELFVBQUk4RCxPQUFPblosUUFBUTtBQUVsQixlQUFBLEdBQUFhLE9BQVVzWSxRQUFNLEdBQUEsRUFBQXRZLE9BQUl3QixNQUFJLEdBQUEsRUFBQXhCLE9BQUlzWSxNQUFNO01BQ25DO0FBQ0EsYUFBTzlXO0lBQ1I7RUFDRDtBQUFBLE1BQUErVyxhQUFBaFksMkJBRW1Ca0MsT0FBTytWLG9CQUFvQjdGLEtBQUtyUCxTQUFTLENBQUEsR0FBQW1WO0FBQUEsTUFBQTtBQUE1RCxTQUFBRixXQUFBOVgsRUFBQSxHQUFBLEVBQUFnWSxTQUFBRixXQUFBN1gsRUFBQSxHQUFBQyxRQUErRDtBQUFBLFlBQXBEK1gsT0FBQUQsT0FBQTVYO0FBRVYsVUFBSSxDQUFDLENBQUMsT0FBTyxjQUFjLGNBQWMsRUFBRXRDLFNBQVNtYSxJQUFJLEdBQUc7QUFDMUR4YixpQkFBU1ksS0FBS3dGLFVBQVVvVixJQUFJLElBQUksWUFBYW5HLE1BQU07QUFDbEQsaUJBQU8sS0FBS0csR0FBR2dHLElBQUksRUFBRSxHQUFHbkcsSUFBSTtRQUM3QjtNQUNEO0lBQ0Q7RUFBQSxTQUFBbFIsS0FBQTtBQUFBa1gsZUFBQWpYLEVBQUFELEdBQUE7RUFBQSxVQUFBO0FBQUFrWCxlQUFBaFgsRUFBQTtFQUFBO0FBU0FyRSxXQUFTeWIsT0FBTyxDQUFDO0FBTWpCemIsV0FBU3liLEtBQUs3WixpQkFBaUIsTUFBTTtBQUNwQ0gsWUFBUUMsS0FDUCx5R0FDRDtBQUNBLFdBQU8xQixTQUFTNEIsZUFBZTtFQUNoQztBQU1BNUIsV0FBU3liLEtBQUtDLHNCQUFzQjtBQUtwQzFiLFdBQVN5YixLQUFLRSx1QkFBdUI7QUE4QnJDM2IsV0FBU3liLEtBQUtHLGtCQUFtQnhHLENBQUFBLFVBQVM7QUFDekMsUUFBSSxFQUFFcFYsU0FBU3liLEtBQUtDLHVCQUF1QixLQUFLMWIsU0FBU3liLEtBQUtFLHdCQUF3QixHQUFHO0FBQ3hGM2IsZUFBU3liLEtBQUtHLGdCQUFnQjVWLE1BQU1vUCxLQUFJO0lBQ3pDO0VBQ0Q7QUFHQXBWLFdBQVN5YixLQUFLRyxnQkFBZ0I1VixRQUFRLE1BQU07QUFDM0MsUUFBSWhHLFNBQVN5YixLQUFLRyxnQkFBZ0JDLFFBQVE7QUFDekM3YixlQUFTOGIsT0FBT0YsZ0JBQWdCNWIsU0FBU3liLEtBQUtHLGdCQUFnQkMsTUFBTTtJQUNyRTtBQUNBLFFBQUk3YixTQUFTeWIsS0FBS0csZ0JBQWdCRyxVQUFVO0FBRTNDLFVBQUksQ0FBQyxZQUFZbEksS0FBSzdULFNBQVN5YixLQUFLRyxnQkFBZ0JHLFFBQVEsR0FBRztBQUM5RC9iLGlCQUFTeWIsS0FBS0csZ0JBQWdCRyxXQUFXN2EsR0FBRzRELEtBQUtDLE9BQU8vRSxTQUFTeWIsS0FBS0csZ0JBQWdCRyxRQUFRO0FBQzlGLFlBQUkvYixTQUFTeWIsS0FBS0csZ0JBQWdCSSxtQkFBbUIsT0FBTztBQUMzRGhjLG1CQUFTeWIsS0FBS0csZ0JBQWdCRyxZQUFZO1FBQzNDO01BQ0Q7QUFDQUUsaUJBQVcsTUFBTTtBQUNoQkMsbUJBQVdsYyxTQUFTeWIsS0FBS0csZ0JBQWdCRztNQUMxQyxHQUFHL2IsU0FBU3liLEtBQUtHLGdCQUFnQk8sT0FBTztJQUN6QztFQUNEO0FBRUFuYyxXQUFTeWIsS0FBS0csZ0JBQWdCTyxVQUM3QmxjLE9BQU9tYyw2QkFBNkIsU0FBWSxNQUFPbmMsT0FBT21jO0FBRS9EcGMsV0FBU3liLEtBQUtHLGdCQUFnQkcsV0FBVztBQUV6Qy9iLFdBQVN5YixLQUFLRyxnQkFBZ0JDLFNBQVM7QUFFdkM3YixXQUFTeWIsS0FBS1ksZ0JBQWdCLE1BQU07QUFDbkMsTUFBRXJjLFNBQVN5YixLQUFLRTtFQUNqQjtBQUVBM2IsV0FBU3liLEtBQUthLG1CQUFtQixNQUFNO0FBQ3RDLFFBQUksRUFBRXRjLFNBQVN5YixLQUFLRSx3QkFBd0IsS0FBSzNiLFNBQVN5YixLQUFLQyx1QkFBdUIsR0FBRztBQUN4RjFiLGVBQVN5YixLQUFLRyxnQkFBZ0I1VixNQUFNO0lBQ3JDO0VBQ0Q7QUF1QkFoRyxXQUFTeWIsS0FBS2MsTUFBTSxTQUFVQyxlQUFlQyxPQUFPQyxXQUFXQyxlQUFlQyxTQUFTO0FBQUEsUUFBQUM7QUFDdEYsU0FBS0wsZ0JBQWdCQTtBQUNyQixTQUFLQyxRQUFRQTtBQUNiLFNBQUtBLE1BQU1LLFNBQVM7QUFFcEIsUUFBSSxDQUFDTCxNQUFNTSxlQUFlLENBQUMsQ0FBQyxZQUFZLFdBQVcsRUFBRTFiLFNBQVNvYixNQUFNTSxXQUFXLEdBQUc7QUFDakYsV0FBS04sTUFBTU0sY0FBYztJQUMxQjtBQUdBLEtBQUFGLGNBQUEsS0FBS0osT0FBTU8sWUFBWEgsWUFBV0csVUFBWTtBQUN2QixTQUFLUCxNQUFNUSxZQUFZO0FBQ3ZCLFNBQUtSLE1BQU1TLGlCQUFpQjtBQUM1QixTQUFLUixZQUFZQTtBQUNqQixTQUFLRSxVQUFVQTtBQUNmLFFBQUlELGVBQWU7QUFDbEIsV0FBS1EsaUJBQWlCUixhQUFhO0lBQ3BDLE9BQU87QUFDTixXQUFLUyxXQUFXLElBQUlwZCxTQUFTOGIsT0FBT1UsYUFBYTtJQUNsRDtBQUVBLFFBQUksQ0FBQ0MsTUFBTWpFLFFBQVE7QUFDbEIsV0FBS2lFLE1BQU1qRSxTQUFTO0lBQ3JCLFdBQVdpRSxNQUFNakUsV0FBVyxVQUFVLENBQUNpRSxNQUFNWSxlQUFlO0FBQzNELFdBQUtaLE1BQU1ZLGdCQUFnQjtJQUM1QixXQUFXLENBQUMsQ0FBQyxPQUFPLE1BQU0sRUFBRWhjLFNBQVNvYixNQUFNakUsTUFBTSxHQUFHO0FBQ25ELFdBQUs0RSxTQUFTRSxNQUFNLHNEQUFzRDtJQUMzRTtBQUVBLFFBQUliLE1BQU1jLFVBQVUsQ0FBQyxTQUFTLE9BQU8sRUFBRWxjLFNBQVNvYixNQUFNYyxNQUFNLEdBQUc7QUFDOUQsYUFBT2QsTUFBTWU7SUFDZCxXQUFXLENBQUNmLE1BQU1lLFFBQVFDLHVCQUF1QjtBQUNoRGhCLFlBQU1lLE9BQU9DO0lBQ2Q7RUFDRDtBQUNBemQsV0FBU3liLEtBQUtjLElBQUluVyxZQUFZO0lBQzdCb1csZUFBZTtJQUNmRSxXQUFXO0lBQ1hFLFNBQVM7SUFDVGMsUUFBUXpkOztJQUVSd2MsT0FBTztJQUNQa0IsVUFBVTtJQUNWQyxhQUFhOztJQUViUixVQUFVOztJQUVWUyxZQUFZOztJQUVaQyxXQUFXOztJQUVYQyxXQUFXOztJQUVYQyxlQUFlOzs7Ozs7O0lBT2ZDLFVBQVVQLFFBQVE7QUFDakIsV0FBS0EsU0FBU0E7SUFDZjs7SUFFQVAsaUJBQWlCUixlQUFlO0FBQy9CLFdBQUtTLFdBQVdUO0FBQ2hCLFdBQUtTLFNBQVN0QixPQUFPLEtBQUtVLGFBQWE7SUFDeEM7Ozs7Ozs7O0lBUUEwQixLQUFLQyxzQkFBc0I7QUFDMUIsUUFBRW5lLFNBQVN5YixLQUFLQztBQUNoQixZQUFNMEMsZUFBZSxDQUFBO0FBQ3JCLGVBQUFDLE1BQUEsR0FBQUMsbUJBQXVCL1ksT0FBT0MsUUFBUSxLQUFLaVgsS0FBSyxHQUFBNEIsTUFBQUMsaUJBQUFyYyxRQUFBb2MsT0FBRztBQUFuRCxjQUFXLENBQUNyWCxHQUFHK0YsR0FBRyxJQUFBdVIsaUJBQUFELEdBQUE7QUFDakIsWUFBSXROLE1BQU1DLFFBQVFqRSxHQUFHLEdBQUc7QUFDdkJxUix1QkFBYXpZLEtBQUEsR0FBQTdDLE9BQVF5YixtQkFBbUJ2WCxDQUFDLEdBQUMsR0FBQSxFQUFBbEUsT0FBSWlLLElBQUluSCxJQUFJMlksa0JBQWtCLEVBQUV6WSxLQUFLLEdBQUcsQ0FBQyxDQUFFO1FBQ3RGLFdBQVdpSCxRQUFRLFFBQVc7QUFDN0JxUix1QkFBYXpZLEtBQUEsR0FBQTdDLE9BQVF5YixtQkFBbUJ2WCxDQUFDLEdBQUMsR0FBQSxFQUFBbEUsT0FBSXliLG1CQUFtQnhSLEdBQUcsQ0FBQyxDQUFFO1FBQ3hFO01BQ0Q7QUFDQSxZQUFNeVIsY0FBY0osYUFBYXRZLEtBQUssR0FBRyxFQUFFM0QsUUFBUSw4QkFBOEIsU0FBUztBQUUxRixZQUFNc2MsYUFBYTtRQUNsQkMsU0FBUztRQUNUdlksTUFBTSxLQUFLc1csTUFBTWMsV0FBVyxVQUFVLFFBQVE7UUFDOUNvQixLQUFLemQsR0FBRzRELEtBQUs4WixXQUFXLEtBQUs7UUFDN0JuWSxNQUFNK1g7UUFDTkssVUFBVSxLQUFLcEMsTUFBTWpFO1FBQ3JCc0csU0FBUztVQUNSLGtCQUFrQkM7UUFDbkI7UUFDQSxHQUFHWjtNQUNKO0FBQ0EsYUFBT3BlLEVBQUVpZixLQUFLUCxVQUFVLEVBQUVRO1FBQ3pCLFNBQVNDLGFBQWF2QixVQUFVRSxZQUFZO0FBQzNDLGVBQUtBLGFBQWFBO0FBQ2xCLGVBQUtGLFdBQVdBO0FBQ2hCLGVBQUtDLGNBQWNEO0FBRW5CLGNBQUksS0FBS2xCLE1BQU1qRSxXQUFXLFFBQVE7QUFDakMsaUJBQUtzRixZQUFZSCxTQUFTd0IsVUFBVXhCLFNBQVN3QixPQUFPLENBQUMsRUFBRUM7QUFDdkQsZ0JBQUksS0FBSzNDLE1BQU1NLGdCQUFnQixRQUFRO0FBQ3RDLG1CQUFLZ0IsWUFBWUosU0FBU3dCLFVBQVV4QixTQUFTd0IsT0FBTyxDQUFDLEVBQUVFO1lBQ3hELFdBQVcsS0FBSzVDLE1BQU1NLGdCQUFnQixjQUFjLEtBQUtOLE1BQU1NLGdCQUFnQixhQUFhO0FBQzNGLG1CQUFLZ0IsWUFBWUosU0FBU3dCLFVBQVV4QixTQUFTd0IsT0FBTyxDQUFDLEVBQUU3YTtZQUN4RDtVQUNELE9BQU87QUFDTixpQkFBS3daLFlBQVkvZCxFQUFFNGQsUUFBUSxFQUFFM2IsS0FBSyxjQUFjLEVBQUVzZCxHQUFHLENBQUMsRUFBRUMsS0FBSyxNQUFNO0FBRW5FLGlCQUFLeEIsWUFBWWhlLEVBQUU0ZCxRQUFRLEVBQUUzYixLQUFLLGNBQWMsRUFBRXNkLEdBQUcsQ0FBQyxFQUFFaGIsS0FBSztVQUM5RDtBQUNBLGNBQUksT0FBTyxLQUFLd1osY0FBYyxVQUFVO0FBRXZDLG1CQUFPLEtBQUswQixZQUFZckIsb0JBQW9CO1VBQzdDO0FBRUEsY0FBSSxLQUFLekIsV0FBVztBQUduQixpQkFBS0EsVUFBVStDLEtBQUssS0FBSy9CLFFBQVEsSUFBSTtVQUN0QyxPQUFPO0FBQ04saUJBQUtOLFNBQVNzQyxLQUFLLElBQUk7VUFDeEI7QUFDQTFmLG1CQUFTeWIsS0FBS0csZ0JBQWdCO0FBQzlCLGlCQUFPN2IsRUFBRTRmLFNBQVMsRUFBRUMsWUFBWSxLQUFLbEMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUNwRDs7UUFFQSxTQUFTbUMsYUFBYXZDLE9BQU9PLFlBQVlpQyxhQUFhO0FBQ3JELGVBQUtqQyxhQUFhQTtBQUNsQixlQUFLaUMsY0FBY0E7QUFDbkIsZUFBSy9CLFlBQ0pGLGFBQ0E1ZCxPQUFPaVMsTUFBTSxpQkFBaUIsZUFBZSxJQUM3Q29MLE1BQU1PLGFBQ041ZCxPQUFPaVMsTUFBTSxNQUFNLElBQUk7QUFDeEIsaUJBQU8sS0FBS3NOLFlBQVk7UUFDekI7TUFDRDtJQUNEO0lBQ0FBLFlBQVlyQixzQkFBc0I7QUFDakMsVUFBSSxLQUFLTCxjQUFjLGNBQWMsQ0FBQyxLQUFLRSxlQUFlO0FBQ3pELGFBQUtaLFNBQVMxYixLQUFLekIsT0FBT2lTLE1BQU0sb0JBQW9CLGtCQUFrQixDQUFDO0FBQ3ZFLGFBQUs4TCxnQkFBZ0I7QUFHckIsZUFBT2hlLFNBQVN5YixLQUFLYyxJQUFJd0QsU0FBUyxFQUFFZCxLQUFNZSxXQUFVO0FBQ25ELGVBQUt2RCxNQUFNdUQsUUFBUUE7QUFDbkIsaUJBQU8sS0FBSzlCLEtBQUtDLG9CQUFvQjtRQUN0QyxDQUFDO01BQ0Y7QUFDQSxXQUFLZixTQUFTRSxNQUFBLEdBQUF4YSxPQUFTLEtBQUtpYixXQUFTLEdBQUEsRUFBQWpiLE9BQUksS0FBS2diLFdBQVMsR0FBQSxDQUFHO0FBRTFELFVBQUksS0FBS2xCLFNBQVM7QUFHakIsYUFBS0EsUUFBUTZDLEtBQUssS0FBSy9CLFFBQVEsSUFBSTtNQUNwQztBQUVBLGFBQU8zZCxFQUFFNGYsU0FBUyxFQUFFTSxXQUFXLEtBQUt2QyxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQ25EO0lBQ0F3QyxtQkFBbUI7QUFDbEIsYUFBTyxLQUFLOUM7SUFDYjtJQUNBK0MsZUFBZTtBQUNkLGFBQU8sS0FBS3JDO0lBQ2I7SUFDQXNDLGVBQWU7QUFDZCxhQUFPLEtBQUtyQztJQUNiO0lBQ0FzQyxTQUFTO0FBRVIsYUFBTyxLQUFLekM7SUFDYjtJQUNBMEMsY0FBYztBQUNiLGFBQU8sS0FBSzNDO0lBQ2I7RUFDRDtBQU1BM2QsV0FBU3liLEtBQUs4RSxnQkFBaUJ0VSxXQUFVO0FBQ3hDLFVBQU13USxRQUFRO01BQ2JjLFFBQVE7TUFDUmlELE1BQU07TUFDTkMsUUFBUXhVO01BQ1J5VSxTQUFTO01BQ1RDLFFBQVE7TUFDUm5JLFFBQVE7TUFDUm9JLFNBQVM7TUFDVEMsUUFBUTtJQUNUO0FBRUEsV0FBTyxJQUFJN2dCLFNBQVN5YixLQUFLYyxJQUFJLElBQUlFLEtBQUssRUFBRXlCLEtBQUssRUFBRWUsS0FBTTZCLFlBQVc7QUFDL0RBLGFBQU9aLGlCQUFpQixFQUFFYSxPQUFPO0FBQ2pDLFlBQU1wRCxXQUFXbUQsT0FBT1IsWUFBWTtBQUNwQyxZQUFNVSxXQUFXckQsU0FBU2xCLE1BQU13RSxNQUFNLENBQUMsRUFBRUMsVUFBVSxDQUFDLEVBQUVDLE1BQU1DLEtBQUsxYztBQUNqRSxhQUFPMmMsS0FBS0MsTUFBTU4sUUFBUTtJQUMzQixDQUFDO0VBQ0Y7QUFDQSxNQUFJakMsMkJBQTJCO0FBYy9CL2UsV0FBU3liLEtBQUtjLElBQUlnRixrQkFBbUJDLFFBQU87QUFDM0N6QywrQkFBQSwwQkFBQWpjLE9BQXFEMGUsS0FBQSxLQUFBMWUsT0FBVTBlLEVBQUUsSUFBSyxJQUFFLEdBQUE7RUFDekU7QUFTQSxRQUFNL0Qsd0JBQXdCO0FBTzlCemQsV0FBU3liLEtBQUtjLElBQUl3RCxXQUFXLE1BQU07QUFDbEMsVUFBTTBCLFdBQVcsSUFBSXpoQixTQUFTeWIsS0FBS2MsSUFBSXRjLE9BQU9pUyxNQUFNLFFBQVEsTUFBTSxHQUFHO01BQ3BFcUwsUUFBUTtNQUNSbUUsTUFBTTtNQUNOdmIsTUFBTTtNQUNOcVMsUUFBUTtJQUNULENBQUM7QUFDRCxXQUFPaUosU0FBU3ZELEtBQUssRUFBRWUsS0FBTTZCLFlBQVc7QUFDdkMsYUFBT0EsT0FBT25ELFNBQVNsQixNQUFNa0YsT0FBT0M7SUFDckMsQ0FBQztFQUNGO0FBaURBNWhCLFdBQVN5YixLQUFLb0csT0FBTyxTQUFVeGYsVUFBVXlaLFFBQVE7QUFDaEQsUUFBSSxDQUFDQSxRQUFRO0FBQ1pBLGVBQVM3YixPQUFPaVMsTUFBTSxTQUFTLE9BQU8sSUFBSTdQLFdBQVdwQyxPQUFPaVMsTUFBTSxLQUFLLEdBQUc7SUFDM0U7QUFTQSxVQUFNNFAsTUFBTTs7TUFFWHpmO01BQ0EwZixZQUFZO01BQ1pDLGFBQWE7TUFDYkMsWUFBWTtNQUNaQyxhQUFhOztNQUViQyxvQkFBb0I7TUFDcEJ4RixlQUFlYixrQkFBa0I5YixTQUFTOGIsU0FBU0EsU0FBUyxJQUFJOWIsU0FBUzhiLE9BQU9BLE1BQU07O01BRXRGc0csVUFBVTtNQUNWQyxVQUFVOztNQUVWQyxZQUFZOztNQUVaQyxhQUFhOztNQUViQyxnQkFBZ0I7TUFDaEJDLGlCQUFpQjtNQUNqQkMsY0FBYztNQUNkQyxXQUFXO01BQ1hDLFNBQVM7TUFDVEMsYUFBYTtNQUNiQyxvQkFBb0I7TUFDcEJDLFlBQVk7TUFDWi9HLGdCQUFnQjtNQUNoQmdILHVCQUF1QjtNQUN2QkMsaUJBQWlCO01BQ2pCQyxpQkFBaUI7TUFDakJDLFNBQVM7TUFDVEMsV0FBVzs7TUFFWEMsYUFBYTs7TUFFYkMsaUJBQWlCO01BQ2pCQyxjQUFjO01BQ2RDLGNBQWM7TUFDZEMsc0JBQXNCOztNQUV0QkMsYUFBYTtNQUNiQyxhQUFhO01BQ2JDLGVBQWU7TUFDZkMsZ0JBQWdCOztNQUVoQkMsMEJBQTBCOztNQUUxQkMsWUFBWTtNQUNaQyxXQUFXO01BQ1hDLFVBQVU7TUFDVkMsY0FBYztNQUNkQyxRQUFRO01BQ1JDLGNBQWM7TUFDZEMsYUFBYTtNQUNiQyxZQUFZO01BQ1pDLFNBQVM7TUFDVEMsZ0JBQWdCO01BQ2hCQyx3QkFBd0I7TUFDeEJDLGlCQUFpQjtNQUNqQkMsU0FBUzs7TUFFVEMsZUFBZTtNQUNmQyxlQUFlO01BQ2ZDLGVBQWU7TUFDZkMsZUFBZTtNQUNmQyx5QkFBeUI7TUFDekJDLHlCQUF5QjtNQUN6QkMsZUFBZTtNQUNmQyxlQUFlO01BQ2ZDLGlCQUFpQjtNQUNqQkMsaUJBQWlCO01BQ2pCQyxtQkFBbUI7TUFDbkJDLG1CQUFtQjtNQUNuQkMsa0JBQWtCO01BQ2xCQyxrQkFBa0I7O01BRWxCQyxXQUFXO01BQ1hDLFNBQVM7TUFDVEMsU0FBUztNQUNUQyxtQkFBbUI7TUFDbkJDLFNBQVM7TUFDVEMsZ0JBQWdCO01BQ2hCQyxXQUFXO01BQ1hDLGtCQUFrQjtNQUNsQkMsV0FBVztNQUNYQyxrQkFBa0I7TUFDbEJDLGFBQWE7TUFDYkMsb0JBQW9CO01BQ3BCQyxZQUFZO01BQ1pDLG1CQUFtQjtJQUNwQjtBQUNBLFVBQU1DLGdCQUFnQkEsTUFBTTtJQUFDO0FBTzdCLFNBQUtDLE9BQU8sU0FBVS9KLFdBQVdnSyxXQUFXO0FBQzNDNUUsVUFBSThDLGdCQUFnQmxJO0FBQ3BCb0YsVUFBSStDLGdCQUFnQjZCLGFBQWFGO0FBRWpDLFVBQUksQ0FBQzlKLFdBQVc7QUFDZm9GLFlBQUluRixjQUFjVyxNQUFNLDJEQUEyRDtBQUNuRndFLFlBQUkrQyxjQUFjLElBQUk7QUFDdEI7TUFDRDtBQUNBL0MsVUFBSTRELFlBQVk7UUFDZm5JLFFBQVE7UUFDUmlELE1BQU07UUFDTm1HLFFBQVE7UUFDUkMsZUFBZTs7UUFFZkMsY0FBYztRQUNkbkYsTUFBTTtRQUNOdmIsTUFBTTtRQUNOc2EsUUFBUXFCLElBQUl6ZjtRQUNabVcsUUFBUTs7TUFFVDtBQUVBLFVBQUlzSixJQUFJTyxhQUFhLE9BQU87QUFDM0JQLFlBQUk0RCxVQUFVL0UsU0FBUztNQUN4QixXQUFXbUIsSUFBSU8sYUFBYSxVQUFVO0FBQ3JDUCxZQUFJNEQsVUFBVS9FLFNBQVM7QUFDdkJtQixZQUFJNEQsVUFBVW9CLFVBQVU7QUFDeEJoRixZQUFJNEQsVUFBVXFCLFlBQVlqRixJQUFJdUI7TUFDL0I7QUFDQSxVQUFJdkIsSUFBSTlGLGdCQUFnQjtBQUN2QjhGLFlBQUk0RCxVQUFVc0IsWUFBWTtNQUMzQjtBQUVBLFVBQUksT0FBT2xGLElBQUllLGdCQUFnQixVQUFVO0FBQ3hDZixZQUFJNEQsVUFBVXVCLFlBQVluRixJQUFJZTtNQUMvQjtBQUNBLFVBQUk3aUIsU0FBU3NCLGFBQWE7QUFDekJ3Z0IsWUFBSTRELFVBQVVpQixVQUFVO01BQ3pCO0FBQ0E3RSxVQUFJNkQsVUFBVSxJQUFJM2xCLFNBQVN5YixLQUFLYyxJQUMvQnRjLE9BQU9pUyxNQUFNLFVBQVUsUUFBUSxHQUMvQjRQLElBQUk0RCxXQUNKd0IsZUFDQXBGLElBQUluRixlQUNKbUYsSUFBSStDLGFBQ0w7QUFDQS9DLFVBQUk2RCxRQUFRMUgsVUFBVSxJQUFJO0FBQzFCNkQsVUFBSTZELFFBQVF6SCxLQUFLO0lBQ2xCO0FBY0EsU0FBS2lKLE9BQU8sU0FBVXpLLFdBQVdnSyxXQUFXO0FBQzNDNUUsVUFBSWdELGdCQUFnQnBJO0FBQ3BCb0YsVUFBSWlELGdCQUFnQjJCLGFBQWFGO0FBRWpDLFlBQU1ZLG9CQUFvQkMsb0JBQW9CLE1BQU07QUFDcEQsVUFBSSxDQUFDdkYsSUFBSWlDLGNBQWMsQ0FBQ3FELG1CQUFtQjtBQUMxQ3RGLFlBQUluRixjQUFjVyxNQUFNLGtFQUFrRTtBQUMxRndFLFlBQUlpRCxjQUFjLElBQUk7QUFDdEI7TUFDRDtBQUNBLFVBQUksQ0FBQ2pELElBQUlFLGFBQWE7QUFJckIsWUFBSUYsSUFBSU8sYUFBYSxTQUFTUCxJQUFJVyxpQkFBaUI7QUFDbERYLGNBQUlFLGNBQWM7UUFDbkIsT0FBTztBQUNORixjQUFJbkYsY0FBY1csTUFBTSxtREFBbUQ7QUFDM0V3RSxjQUFJaUQsY0FBYyxJQUFJO0FBQ3RCO1FBQ0Q7TUFDRDtBQUVBLFVBQ0NqRCxJQUFJMEMsa0JBQ0osQ0FBQzFDLElBQUkyQywwQkFDTCxDQUFDNkMsUUFDQXhGLElBQUkwQyxtQkFBbUIsYUFDcEJ2a0IsT0FBT2lTLE1BQU0sZUFBZSxhQUFhLElBQ3pDNFAsSUFBSXpmLFdBQ0pwQyxPQUFPaVMsTUFDTixrQ0FDQSxnQ0FDRCxJQUFBLEdBQUFwUCxPQUVBN0MsT0FBT2lTLE1BQU0sZUFBZSxhQUFhLElBQ3pDNFAsSUFBSXpmLFdBQ0pwQyxPQUFPaVMsTUFBTSxTQUFTLE9BQU8sSUFDN0IsSUFBSWxTLFNBQVNZLEtBQUtraEIsSUFBSTBDLGNBQWMsRUFBRTFKLFNBQVMsS0FBSyxHQUNyRCxjQUFBLEVBQUFoWSxPQUFlN0MsT0FBT2lTLE1BQ3JCLHVCQUNBLHFCQUNELENBQUMsQ0FDSixHQUNDO0FBQ0Q0UCxZQUFJbkYsY0FBY1csTUFBTXJkLE9BQU9pUyxNQUFNLGlCQUFpQixlQUFlLENBQUM7QUFDdEU0UCxZQUFJaUQsY0FBYyxJQUFJO0FBQ3RCO01BQ0Q7QUFDQWpELFVBQUk2QyxVQUFVO0FBQ2QsWUFBTWxJLFFBQVE7UUFDYmMsUUFBUTtRQUNSdFIsT0FBTzZWLElBQUl6ZjtRQUNYa2xCLFNBQVN6RixJQUFJRTtRQUNiaEMsT0FBT29ILG9CQUFvQmxtQixHQUFHc21CLEtBQUs3RixPQUFPdmdCLElBQUksV0FBVyxJQUFJMGdCLElBQUlrQztRQUNqRXlELFdBQVczRixJQUFJbUI7UUFDZnpLLFFBQVE7TUFDVDtBQUNBLFVBQUlzSixJQUFJRyxZQUFZO0FBQ25CeEYsY0FBTWUsT0FBT3NFLElBQUlHO01BQ2xCO0FBQ0EsVUFBSXlGLHVCQUF1QixHQUFHO0FBQzdCakwsY0FBTWtMLGtCQUFrQjdGLElBQUlvQjtNQUM3QjtBQUNBLFVBQUksT0FBT3BCLElBQUllLGdCQUFnQixVQUFVO0FBQ3hDcEcsY0FBTW1MLFVBQVU5RixJQUFJZTtNQUNyQjtBQUVBLFVBQUlmLElBQUlhLFdBQVc7QUFDbEJsRyxjQUFNb0wsUUFBUTtNQUNmLE9BQU87QUFDTnBMLGNBQU1xTCxXQUFXO01BQ2xCO0FBRUEsVUFBSWhHLElBQUljLFNBQVM7QUFDaEJuRyxjQUFNc0wsTUFBTTtNQUNiO0FBQ0EsY0FBUWpHLElBQUlPLFVBQUE7UUFDWCxLQUFLO0FBQ0osY0FBSVAsSUFBSVEsZUFBZSxNQUFNO0FBQzVCUixnQkFBSW5GLGNBQWNXLE1BQU0sa0RBQWtEO0FBQzFFd0UsZ0JBQUlpRCxjQUFjLElBQUk7QUFDdEI7VUFDRDtBQUNBdEksZ0JBQU11TCxhQUFhbEcsSUFBSVE7QUFDdkI7UUFDRCxLQUFLO0FBQ0osY0FBSVIsSUFBSVMsZ0JBQWdCLE1BQU07QUFDN0JULGdCQUFJbkYsY0FBY1csTUFBTSxtREFBbUQ7QUFDM0V3RSxnQkFBSWlELGNBQWMsSUFBSTtBQUN0QjtVQUNEO0FBQ0F0SSxnQkFBTXdMLGNBQWNuRyxJQUFJUztBQUN4QjtRQUNELEtBQUs7QUFDSixjQUFJLENBQUNULElBQUlVLGdCQUFnQjtBQUV4QlYsZ0JBQUluRixjQUFjVyxNQUFNLHVEQUF1RDtBQUMvRXdFLGdCQUFJaUQsY0FBYyxJQUFJO0FBQ3RCO1VBQ0Q7QUFDQXRJLGdCQUFNbUwsVUFBVTtBQUNoQm5MLGdCQUFNblksT0FBT3dkLElBQUlVO0FBQ2pCL0YsZ0JBQU15TCxlQUFlcEcsSUFBSVcsbUJBQW1CWCxJQUFJRTtBQUNoRDtRQUNELEtBQUs7QUFDSnZGLGdCQUFNMEwsT0FBT3JHLElBQUl1QztBQUNqQjVILGdCQUFNMkwsWUFBWXRHLElBQUl1QjtBQUN0QixjQUFJdkIsSUFBSW9DLGNBQWM7QUFDckJ6SCxrQkFBTTRMLGdCQUFnQnZHLElBQUlvQztVQUMzQjtBQUVBekgsZ0JBQU02TCxpQkFBaUJ4RyxJQUFJbUM7QUFDM0I7UUFDRDtBQUVDeEgsZ0JBQU1uWSxPQUFPd2QsSUFBSU07QUFDakIsY0FBSU4sSUFBSW9DLGNBQWM7QUFDckJ6SCxrQkFBTTRMLGdCQUFnQnZHLElBQUlvQztVQUMzQjtBQUVBekgsZ0JBQU02TCxpQkFBaUJ4RyxJQUFJbUM7QUFDM0I7TUFDRjtBQUNBLFVBQUksQ0FBQyxZQUFZLGNBQWMsVUFBVSxFQUFFNWlCLFNBQVN5Z0IsSUFBSVksWUFBWSxHQUFHO0FBQ3RFakcsY0FBTXFGLElBQUlZLFlBQVksSUFBSTtNQUMzQjtBQUNBLFVBQUkwRSxxQkFBcUJ0RixJQUFJOUYsZ0JBQWdCO0FBQzVDUyxjQUFNVixXQUFXO01BQ2xCO0FBQ0ErRixVQUFJOEQsVUFBVSxJQUFJNWxCLFNBQVN5YixLQUFLYyxJQUMvQnRjLE9BQU9pUyxNQUFNLFVBQVUsUUFBUSxHQUMvQnVLLE9BQ0E4TCxlQUNBekcsSUFBSW5GLGVBQ0o2TCxXQUNEO0FBQ0ExRyxVQUFJOEQsUUFBUTNILFVBQVUsSUFBSTtBQUMxQjZELFVBQUk4RCxRQUFRMUgsS0FBSztJQUNsQjtBQVNBLFNBQUsxWCxTQUFTLFNBQVVrVyxXQUFXZ0ssV0FBVztBQUM3QzVFLFVBQUlPLFdBQVc7QUFDZixVQUFJZ0Ysb0JBQW9CLE1BQU0sR0FBRztBQUNoQyxhQUFLRixLQUFLekssV0FBV2dLLFNBQVM7TUFDL0IsT0FBTztBQUNONUUsWUFBSWdELGdCQUFnQnBJO0FBQ3BCb0YsWUFBSWlELGdCQUFnQjJCLGFBQWFGO0FBQ2pDLGFBQUtDLEtBQUtnQyxZQUFZM0csSUFBSWlELGFBQWE7TUFDeEM7SUFDRDtBQVNBLFNBQUsyRCxVQUFVLFNBQVVoTSxXQUFXZ0ssV0FBVztBQUM5QzVFLFVBQUlPLFdBQVc7QUFDZixVQUFJZ0Ysb0JBQW9CLE1BQU0sR0FBRztBQUNoQyxhQUFLRixLQUFLekssV0FBV2dLLFNBQVM7TUFDL0IsT0FBTztBQUNONUUsWUFBSWdELGdCQUFnQnBJO0FBQ3BCb0YsWUFBSWlELGdCQUFnQjJCLGFBQWFGO0FBQ2pDLGFBQUtDLEtBQUtnQyxZQUFZM0csSUFBSWlELGFBQWE7TUFDeEM7SUFDRDtBQVlBLFNBQUs0RCxhQUFhLFNBQVVqTSxXQUFXZ0ssV0FBVztBQUNqRDVFLFVBQUlPLFdBQVc7QUFDZixVQUFJZ0Ysb0JBQW9CLE1BQU0sR0FBRztBQUNoQyxhQUFLRixLQUFLekssV0FBV2dLLFNBQVM7TUFDL0IsT0FBTztBQUNONUUsWUFBSWdELGdCQUFnQnBJO0FBQ3BCb0YsWUFBSWlELGdCQUFnQjJCLGFBQWFGO0FBQ2pDLGFBQUtDLEtBQUtnQyxZQUFZM0csSUFBSWlELGFBQWE7TUFDeEM7SUFDRDtBQUVBLFNBQUs2RCxjQUFjLE1BQU07QUFDeEIsYUFBTzlHLElBQUl6ZjtJQUNaO0FBRUEsU0FBS3dtQixjQUFjLE1BQU07QUFDeEIsYUFBTy9HLElBQUlNO0lBQ1o7QUFFQSxTQUFLMEcsY0FBZTFHLGNBQWE7QUFDaENOLFVBQUlPLFdBQVc7QUFDZlAsVUFBSU0sV0FBV0E7SUFDaEI7QUFFQSxTQUFLMkcsZ0JBQWlCekcsZ0JBQWU7QUFDcENSLFVBQUlPLFdBQVc7QUFDZlAsVUFBSVEsYUFBYUE7SUFDbEI7QUFFQSxTQUFLMEcsaUJBQWtCekcsaUJBQWdCO0FBQ3RDVCxVQUFJTyxXQUFXO0FBQ2ZQLFVBQUlTLGNBQWNBO0lBQ25CO0FBRUEsU0FBSzBHLG9CQUFxQnpHLG9CQUFtQjtBQUM1Q1YsVUFBSU8sV0FBVztBQUNmUCxVQUFJVSxpQkFBaUJBO0lBQ3RCO0FBS0EsU0FBSzBHLHFCQUFzQnpHLHFCQUFvQjtBQUM5Q1gsVUFBSU8sV0FBVztBQUNmUCxVQUFJVyxrQkFBa0JBO0lBQ3ZCO0FBUUEsU0FBSzBHLGlCQUFrQjVCLGFBQVk7QUFDbEN6RixVQUFJRSxjQUFjdUY7SUFDbkI7QUFPQSxTQUFLNkIsZ0JBQWlCNUwsVUFBUztBQUM5QnNFLFVBQUlHLGFBQWF6RTtJQUNsQjtBQVdBLFNBQUs2TCxrQkFBbUIzRyxrQkFBaUI7QUFDeENaLFVBQUlZLGVBQWVBO0lBQ3BCO0FBRUEsU0FBSzRHLGVBQWdCM0csZUFBYztBQUNsQ2IsVUFBSWEsWUFBWUE7SUFDakI7QUFFQSxTQUFLNEcsYUFBYzNHLGFBQVk7QUFDOUJkLFVBQUljLFVBQVVBO0lBQ2Y7QUFLQSxTQUFLNEcsaUJBQWtCM0csaUJBQWdCO0FBQ3RDZixVQUFJZSxjQUFjQTtJQUNuQjtBQUtBLFNBQUs0Ryx3QkFBeUIzRyx3QkFBdUI7QUFDcERoQixVQUFJZ0IscUJBQXFCQTtJQUMxQjtBQUtBLFNBQUs0RyxnQkFBaUIzRyxnQkFBZTtBQUNwQ2pCLFVBQUlpQixhQUFhQTtJQUNsQjtBQTRCQSxTQUFLNEcsZUFBZSxDQUFDMUcsaUJBQWlCQyxvQkFBb0I7QUFDekQsVUFBSUQsMkJBQTJCampCLFNBQVNZLFFBQVFxaUIsMkJBQTJCeE4sTUFBTTtBQUNoRndOLDBCQUFrQkEsZ0JBQWdCcEssWUFBWTtNQUMvQztBQUNBLFVBQUlxSyxvQkFBb0IsUUFBVztBQUNsQ0EsMEJBQWtCO01BQ25CLFdBQVdBLDJCQUEyQmxqQixTQUFTWSxRQUFRc2lCLDJCQUEyQnpOLE1BQU07QUFDdkZ5TiwwQkFBa0JBLGdCQUFnQnJLLFlBQVk7TUFDL0M7QUFDQSxjQUFRb0ssaUJBQUE7UUFDUCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO0FBQ0puQixjQUFJbUIsa0JBQWtCO0FBR3RCbkIsY0FBSW9CLGtCQUFrQjtBQUN0QjtRQUNELEtBQUs7QUFFSnBCLGNBQUltQixrQkFBa0I7QUFDdEI7UUFDRCxLQUFLO1FBQ0wsS0FBSztBQUNKbkIsY0FBSW1CLGtCQUFrQjtBQUd0Qm5CLGNBQUlvQixrQkFBa0JBO0FBQ3RCO1FBQ0QsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO0FBQ0pwQixjQUFJbUIsa0JBQWtCO0FBQ3RCbkIsY0FBSW9CLGtCQUFrQkE7QUFDdEI7UUFDRDtBQUVDcEIsY0FBSW1CLGtCQUFrQjtBQUN0Qm5CLGNBQUlvQixrQkFBa0JEO0FBQ3RCO01BQ0Y7SUFDRDtBQWdCQSxTQUFLMkcscUJBQXNCMUcscUJBQW9CO0FBQzlDLFVBQUlBLG9CQUFvQixRQUFXO0FBQ2xDQSwwQkFBa0I7TUFDbkIsV0FBV0EsMkJBQTJCbGpCLFNBQVNZLFFBQVFzaUIsMkJBQTJCek4sTUFBTTtBQUN2RnlOLDBCQUFrQkEsZ0JBQWdCckssWUFBWTtNQUMvQztBQUNBaUosVUFBSW9CLGtCQUFrQkE7SUFDdkI7QUFrQkEsU0FBSzJHLDhCQUErQjVHLHFCQUFvQjtBQUN2RHhoQixjQUFRQyxLQUNQLHVIQUNEO0FBQ0EsVUFBSXVoQixpQkFBaUI7QUFDcEJuQixZQUFJbUIsa0JBQWtCO01BQ3ZCLE9BQU87QUFDTm5CLFlBQUltQixrQkFBa0I7TUFDdkI7SUFDRDtBQVdBLFNBQUs2RyxvQkFBb0IsQ0FBQzlOLGdCQUFnQmdILDBCQUEwQjtBQUNuRSxVQUFJbEIsSUFBSWlDLFlBQVk7QUFDbkJqQyxZQUFJbkYsY0FBY1csTUFDakIsZ0ZBQ0Q7QUFDQTtNQUNEO0FBQ0F3RSxVQUFJOUYsaUJBQWlCQTtBQUNyQjhGLFVBQUlrQix3QkFDSEEsMEJBQTBCLFNBQVlsQixJQUFJa0Isd0JBQXdCQTtJQUNwRTtBQWVBLFNBQUsrRyw4QkFBK0JDLFVBQVM7QUFDNUNsSSxVQUFJZ0MsMkJBQTJCa0c7SUFDaEM7QUFHQSxTQUFLQyxxQkFBc0JDLGlCQUFnQjtBQUMxQ3BJLFVBQUl3QixrQkFBa0I0RztJQUN2QjtBQUVBLFNBQUtDLGtCQUFtQkgsVUFBUztBQUNoQ2xJLFVBQUl5QixlQUFlLENBQUMsQ0FBQ3lHO0lBQ3RCO0FBRUEsU0FBS0ksa0JBQW1CSixVQUFTO0FBQ2hDbEksVUFBSTBCLGVBQWUsQ0FBQyxDQUFDd0c7SUFDdEI7QUFFQSxTQUFLSywwQkFBMkJMLFVBQVM7QUFDeENsSSxVQUFJMkIsdUJBQXVCLENBQUMsQ0FBQ3VHO0lBQzlCO0FBT0EsU0FBS00sb0JBQW9CLENBQUN6WixPQUFPaUIsV0FBVztBQUMzQ2dRLFVBQUk0QixjQUFjO1FBQ2pCN1M7UUFDQWlCLFFBQVFBLFVBQVU7TUFDbkI7SUFDRDtBQUNBLFNBQUt5WSxvQkFBb0IsQ0FBQzFaLE9BQU9pQixXQUFXO0FBQzNDZ1EsVUFBSTZCLGNBQWM7UUFDakI5UztRQUNBaUIsUUFBUUEsVUFBVTtNQUNuQjtJQUNEO0FBQ0EsU0FBSzBZLHNCQUFzQixDQUFDM1osT0FBT2lCLFdBQVc7QUFDN0NnUSxVQUFJOEIsZ0JBQWdCO1FBQ25CL1M7UUFDQWlCLFFBQVFBLFVBQVU7TUFDbkI7SUFDRDtBQUNBLFNBQUsyWSx5QkFBMEJULFVBQVM7QUFDdkNsSSxVQUFJK0IsaUJBQWlCLENBQUMsQ0FBQ21HO0lBQ3hCO0FBQ0EsU0FBS3ZGLHlCQUF5QixNQUFNO0FBQ25DM0MsVUFBSTJDLHlCQUF5QjtJQUM5QjtBQUVBLFNBQUtpRyxXQUFZQyxXQUFVO0FBQzFCN0ksVUFBSXVCLGNBQWNzSDtJQUNuQjtBQUVBLFNBQUtDLGVBQWUsTUFBTTtBQUN6QixhQUFPOUksSUFBSXVDO0lBQ1o7QUFFQSxTQUFLd0csa0JBQWtCLE1BQU07QUFDNUIsYUFBTy9JLElBQUl3QztJQUNaO0FBRUEsU0FBS3dHLGtCQUFrQixNQUFNO0FBQzVCLGFBQU9oSixJQUFJb0M7SUFDWjtBQWNBLFNBQUs2Ryx3QkFBeUI1SSx3QkFBdUI7QUFDcERMLFVBQUlLLHFCQUFxQkE7SUFDMUI7QUFJQSxTQUFLNkksd0JBQXdCLE1BQU07QUFDbEMsYUFBT2xKLElBQUlLO0lBQ1o7QUFJQSxTQUFLaEYsbUJBQW9CUixtQkFBa0I7QUFDMUNtRixVQUFJbkYsZ0JBQWdCQTtJQUNyQjtBQUlBLFNBQUt1RCxtQkFBbUIsTUFBTTtBQUM3QixhQUFPNEIsSUFBSW5GO0lBQ1o7QUFJQSxTQUFLc08sU0FBUyxNQUFNO0FBQ25CLGFBQU9uSixJQUFJQztJQUNaO0FBS0EsU0FBS21KLFlBQVksTUFBTTtBQUN0QixhQUFPcEosSUFBSXFDO0lBQ1o7QUFPQSxTQUFLZ0gsa0JBQWtCLE1BQU07QUFDNUIsYUFBT3JKLElBQUlzQztJQUNaO0FBTUEsU0FBS2dILGFBQWEsTUFBTTtBQUN2QixhQUFPdEosSUFBSXlDO0lBQ1o7QUFJQSxTQUFLOEcsY0FBYyxNQUFNO0FBQ3hCLGFBQU92SixJQUFJbUM7SUFDWjtBQUlBLFNBQUtxSCxhQUFhLE1BQU07QUFDdkIsYUFBT3hKLElBQUlxQjtJQUNaO0FBSUEsU0FBS29JLHVCQUF1QixNQUFNO0FBQ2pDLGFBQU96SixJQUFJc0I7SUFDWjtBQUVBLFNBQUtvSSxVQUFVLE1BQU07QUFDcEIsYUFBTyxDQUFDLENBQUMxSixJQUFJSSxlQUFlSixJQUFJSSxZQUFZN2dCLFNBQVMsTUFBTTtJQUM1RDtBQWFBLFNBQUtvcUIsaUJBQWlCLFNBQVUvTyxXQUFXZ0ssV0FBVztBQUNyRDVFLFVBQUlrRCwwQkFBMEJ0STtBQUM5Qm9GLFVBQUltRCwwQkFBMEJ5QixhQUFhRjtBQUMzQyxVQUFJLENBQUM5SixXQUFXO0FBQ2ZvRixZQUFJbkYsY0FBY1csTUFBTSxxRUFBcUU7QUFDN0Z3RSxZQUFJbUQsd0JBQXdCLElBQUk7QUFDaEM7TUFDRDtBQUNBLFlBQU14SSxRQUFRO1FBQ2JjLFFBQVE7UUFDUmlELE1BQU07UUFDTkMsUUFBUXFCLElBQUl6ZjtRQUNaeWtCLFNBQVM7UUFDVG5HLFFBQVE7UUFDUitLLE9BQU87UUFDUGxULFFBQVE7TUFDVDtBQU1BLFVBQUlzSixJQUFJZ0MsMEJBQTBCO0FBQ2pDckgsY0FBTXdLLFlBQVk7QUFDbEJ4SyxjQUFNa0UsVUFBVTtNQUNqQjtBQUNBLFVBQUltQixJQUFJOUYsZ0JBQWdCO0FBQ3ZCUyxjQUFNdUssWUFBWTtNQUNuQjtBQUVBbEYsVUFBSStELG9CQUFvQixJQUFJN2xCLFNBQVN5YixLQUFLYyxJQUN6Q3RjLE9BQU9pUyxNQUFNLGFBQWEsV0FBVyxHQUNyQ3VLLE9BQ0FrUCx5QkFDQTdKLElBQUluRixlQUNKbUYsSUFBSW1ELHVCQUNMO0FBQ0FuRCxVQUFJK0Qsa0JBQWtCNUgsVUFBVSxJQUFJO0FBQ3BDNkQsVUFBSStELGtCQUFrQjNILEtBQUs7SUFDNUI7QUFPQSxTQUFLME4sU0FBUyxTQUFVbFAsV0FBV2dLLFdBQVc7QUFDN0M1RSxVQUFJZ0QsZ0JBQWdCcEk7QUFDcEJvRixVQUFJaUQsZ0JBQWdCMkIsYUFBYUY7QUFDakMsVUFBSSxDQUFDMUUsSUFBSXVCLGFBQWE7QUFDckJ2QixZQUFJbkYsY0FBY1csTUFBTSxxRUFBcUU7QUFDN0Z3RSxZQUFJaUQsY0FBYyxJQUFJO0FBQ3RCO01BQ0Q7QUFDQWpELFVBQUlPLFdBQVc7QUFDZixXQUFLb0UsS0FBS2dDLFlBQVkzRyxJQUFJaUQsYUFBYTtJQUN4QztBQU9BLFNBQUs4RyxPQUFPLFNBQVVuUCxXQUFXZ0ssV0FBVztBQUMzQzVFLFVBQUlvRCxnQkFBZ0J4STtBQUNwQm9GLFVBQUlxRCxnQkFBZ0J1QixhQUFhRjtBQUNqQyxVQUFJLENBQUNzRixrQkFBa0JyTSxLQUFLLE1BQU0sUUFBUXFDLElBQUlxRCxhQUFhLEdBQUc7QUFDN0Q7TUFDRDtBQUVBLFVBQUksQ0FBQ3JELElBQUl3QixpQkFBaUI7QUFDekJ4QixZQUFJbkYsY0FBY1csTUFBTSxnRUFBZ0U7QUFDeEZ3RSxZQUFJcUQsY0FBYyxJQUFJO0FBQ3RCO01BQ0Q7QUFDQSxVQUFJa0Msb0JBQW9CLE1BQU0sR0FBRztBQUNoQzBFLHNCQUFjdE0sS0FBSyxNQUFNLElBQUk7TUFDOUIsT0FBTztBQUNOLGNBQU1oRCxRQUFRdVAscUJBQXFCLE1BQU07QUFDekNsSyxZQUFJZ0UsVUFBVSxJQUFJOWxCLFNBQVN5YixLQUFLYyxJQUMvQnRjLE9BQU9pUyxNQUFNLFVBQVUsUUFBUSxHQUMvQnVLLE9BQ0FzUCxlQUNBakssSUFBSW5GLGVBQ0ptRixJQUFJcUQsYUFDTDtBQUNBckQsWUFBSWdFLFFBQVE3SCxVQUFVLElBQUk7QUFDMUI2RCxZQUFJZ0UsUUFBUTVILEtBQUs7TUFDbEI7SUFDRDtBQVVBLFNBQUsrTixTQUFTLFdBQVk7QUFDekIsVUFBSSxDQUFDanNCLFNBQVNzQixlQUFlLENBQUN0QixTQUFTZ0IsY0FBYyxXQUFXLEdBQUc7QUFDbEU7TUFDRDtBQUNBLFlBQU1hLFFBQVE5QixFQUFFLE1BQU07QUFFdEIsVUFBSThCLE1BQU1HLEtBQUssYUFBYSxFQUFFQyxRQUFRO0FBQ3JDLGNBQU1pcUIsYUFBYXJxQixNQUFNRyxLQUFLLGVBQWUsRUFBRXVkLEtBQUssTUFBTTtBQUMxRHVDLFlBQUlxSyxPQUFPanJCLEdBQUc0RCxLQUFLc25CLGNBQWMsUUFBUUYsVUFBVTtBQUNuREcsd0JBQWdCLE1BQU0sSUFBSTtNQUMzQixPQUFPO0FBQ04sY0FBTUMsY0FBYztVQUNuQi9PLFFBQVE7VUFDUmlELE1BQU07VUFDTmtCLE1BQU07VUFDTnZiLE1BQU07O1VBRU40QixNQUFNOztVQUVOMFksUUFBUXFCLElBQUl6ZjtVQUNaa3FCLFFBQVE7VUFDUkMsU0FBUzFLLElBQUl6ZjtVQUNib3FCLFNBQVM7VUFDVGpVLFFBQVE7UUFDVDtBQUNBc0osWUFBSWtFLFlBQVksSUFBSWhtQixTQUFTeWIsS0FBS2MsSUFDakN0YyxPQUFPaVMsTUFBTSxVQUFVLFFBQVEsR0FDL0JvYSxhQUNBRCxlQUNEO0FBQ0F2SyxZQUFJa0UsVUFBVS9ILFVBQVUsSUFBSTtBQUM1QjZELFlBQUlrRSxVQUFVOUgsS0FBSztNQUNwQjtJQUNEO0FBUUEsU0FBS3dPLGFBQWEsU0FBVWhRLFdBQVdnSyxXQUFXO0FBQ2pENUUsVUFBSXNELGtCQUFrQjFJO0FBQ3RCb0YsVUFBSXVELGtCQUFrQnFCLGFBQWFGO0FBQ25DLFVBQUksQ0FBQ3NGLGtCQUFrQnJNLEtBQUssTUFBTSxVQUFVcUMsSUFBSXVELGVBQWUsR0FBRztBQUNqRTtNQUNEO0FBRUEsVUFBSWdDLG9CQUFvQixRQUFRLEdBQUc7QUFDbENzRix3QkFBZ0JsTixLQUFLLE1BQU0sSUFBSTtNQUNoQyxPQUFPO0FBQ04sY0FBTWhELFFBQVF1UCxxQkFBcUIsUUFBUTtBQUMzQ2xLLFlBQUlvRSxZQUFZLElBQUlsbUIsU0FBU3liLEtBQUtjLElBQ2pDdGMsT0FBT2lTLE1BQU0sVUFBVSxRQUFRLEdBQy9CdUssT0FDQWtRLGlCQUNBN0ssSUFBSW5GLGVBQ0ptRixJQUFJdUQsZUFDTDtBQUNBdkQsWUFBSW9FLFVBQVVqSSxVQUFVLElBQUk7QUFDNUI2RCxZQUFJb0UsVUFBVWhJLEtBQUs7TUFDcEI7SUFDRDtBQU9BLFNBQUswTyxlQUFlLFNBQVVsUSxXQUFXZ0ssV0FBVztBQUNuRDVFLFVBQUl3RCxvQkFBb0I1STtBQUN4Qm9GLFVBQUl5RCxvQkFBb0JtQixhQUFhRjtBQUNyQyxVQUFJLENBQUNzRixrQkFBa0JyTSxLQUFLLE1BQU0sWUFBWXFDLElBQUl5RCxpQkFBaUIsR0FBRztBQUNyRTtNQUNEO0FBRUEsVUFBSThCLG9CQUFvQixVQUFVLEdBQUc7QUFDcEN3RiwwQkFBa0JwTixLQUFLLE1BQU0sSUFBSTtNQUNsQyxPQUFPO0FBQ04sY0FBTWhELFFBQVF1UCxxQkFBcUIsVUFBVTtBQUM3Q2xLLFlBQUlzRSxjQUFjLElBQUlwbUIsU0FBU3liLEtBQUtjLElBQ25DdGMsT0FBT2lTLE1BQU0sVUFBVSxRQUFRLEdBQy9CdUssT0FDQW9RLG1CQUNBL0ssSUFBSW5GLGVBQ0ptRixJQUFJeUQsaUJBQ0w7QUFDQXpELFlBQUlzRSxZQUFZbkksVUFBVSxJQUFJO0FBQzlCNkQsWUFBSXNFLFlBQVlsSSxLQUFLO01BQ3RCO0lBQ0Q7QUFPQSxTQUFLNE8sVUFBVSxTQUFVcFEsV0FBV2dLLFdBQVc7QUFDOUM1RSxVQUFJMEQsbUJBQW1COUk7QUFDdkJvRixVQUFJMkQsbUJBQW1CaUIsYUFBYUY7QUFDcEMsVUFBSSxDQUFDc0Ysa0JBQWtCck0sS0FBSyxNQUFNLFdBQVdxQyxJQUFJMkQsZ0JBQWdCLEdBQUc7QUFDbkU7TUFDRDtBQUVBLFVBQUksQ0FBQzNELElBQUk0QixlQUFlLENBQUM1QixJQUFJNkIsZUFBZSxDQUFDN0IsSUFBSThCLGVBQWU7QUFDL0Q5QixZQUFJbkYsY0FBY1csTUFDakIsa0dBQ0Q7QUFDQXdFLFlBQUkyRCxpQkFBaUIsSUFBSTtBQUN6QjtNQUNEO0FBSUEsWUFBTWhKLFFBQVF1UCxxQkFBcUIsU0FBUztBQUM1Q2xLLFVBQUl3RSxhQUFhLElBQUl0bUIsU0FBU3liLEtBQUtjLElBQ2xDdGMsT0FBT2lTLE1BQU0sVUFBVSxRQUFRLEdBQy9CdUssT0FDQXNRLGtCQUNBakwsSUFBSW5GLGVBQ0ptRixJQUFJMkQsZ0JBQ0w7QUFDQTNELFVBQUl3RSxXQUFXckksVUFBVSxJQUFJO0FBQzdCNkQsVUFBSXdFLFdBQVdwSSxLQUFLO0lBQ3JCO0FBa0JBLFVBQU1tSixzQkFBdUI5SixZQUFXO0FBQ3ZDQSxpQkFBQUEsU0FBVztBQUlYLFVBQUl1RSxJQUFJb0IsbUJBQW1CLENBQUNsakIsU0FBU3dDLE9BQU9xUCxXQUFXaVEsSUFBSW9CLGVBQWUsR0FBRztBQUM1RSxlQUFPO01BQ1I7QUFHQSxVQUFJcEIsSUFBSTlGLGdCQUFnQjtBQUN2QixZQUFJLENBQUM4RixJQUFJa0IsdUJBQXVCO0FBQy9CLGlCQUFPO1FBQ1I7QUFFQSxZQUFJekYsV0FBVyxVQUFVdUUsSUFBSU8sYUFBYSxTQUFTUCxJQUFJTyxhQUFhLFVBQVU7QUFDN0UsaUJBQU87UUFDUjtNQUNEO0FBRUEsVUFBSXJpQixTQUFTc0IsZUFBZSxDQUFDd2dCLElBQUkyQyx3QkFBd0I7QUFDeEQsWUFDQyxJQUFJdmpCLEdBQUd5QixNQUFNM0MsU0FBU2tDLFlBQVksRUFBRThxQixnQkFBZ0IsTUFDcEQsSUFBSTlyQixHQUFHeUIsTUFBTW1mLElBQUl6ZixRQUFRLEVBQUUycUIsZ0JBQWdCLEdBQzFDO0FBQ0QsaUJBQU87UUFDUjtBQUdBLGNBQU1DLGtCQUFrQi9yQixHQUFHQyxPQUFPQyxJQUFJLG1CQUFtQjtBQUN6RCxZQUFJLENBQUM2ckIsbUJBQW1CQSxnQkFBZ0I1ckIsU0FBUyxPQUFPLEdBQUc7QUFDMUQsaUJBQU87UUFDUjtNQUNEO0FBQ0EsYUFBTyxDQUFDLENBQUNILEdBQUdzbUIsS0FBSzdGLE9BQU92Z0IsSUFBSSxXQUFXO0lBQ3hDO0FBZUEsVUFBTTRxQix1QkFBd0J6TyxZQUFXO0FBQ3hDLFlBQU1kLFFBQVE7UUFDYmMsUUFBUTtRQUNSbUUsTUFBTTtRQUNOdmIsTUFBTTtRQUNOc2EsUUFBUXFCLElBQUl6ZjtRQUNabWUsTUFBTTtRQUNObUcsUUFBUTtRQUNSbk8sUUFBUTtNQUNUO0FBRUEsVUFBSStFLFdBQVcsVUFBVXZkLFNBQVNzQixhQUFhO0FBQzlDbWIsY0FBTWtLLFVBQVU7TUFDakI7QUFDQSxVQUFJN0UsSUFBSTlGLGtCQUFrQnVCLFdBQVcsWUFBWTtBQUNoRGQsY0FBTXVLLFlBQVk7TUFDbkI7QUFFQSxhQUFPdks7SUFDUjtBQUVBLFVBQU1nTSxhQUFjeUUsYUFBWTtBQUMvQkEsY0FBUS9GLEtBQUtyRixJQUFJZ0QsZUFBZWhELElBQUlpRCxhQUFhO0lBQ2xEO0FBRUEsVUFBTW1DLGdCQUFnQixXQUFZO0FBQ2pDLFlBQU12SixXQUFXbUUsSUFBSTZELFFBQVFyRixZQUFZLEVBQUU3RDtBQUMzQyxVQUFJLENBQUMwUSxnQkFBZ0J4UCxVQUFVbUUsSUFBSStDLGFBQWEsR0FBRztBQUNsRDtNQUNEO0FBRUEsWUFBTSxDQUFDaEQsSUFBSSxJQUFJbEUsU0FBU3NEO0FBQ3hCLFVBQUltTTtBQUNKdEwsVUFBSUMsYUFBYSxDQUFDRixLQUFLd0w7QUFDdkIsVUFBSXZMLElBQUlDLFlBQVk7QUFDbkIsU0FBQ3FMLEdBQUcsSUFBSXZMLEtBQUtYO0FBQ2JZLFlBQUlvQyxlQUFla0osSUFBSWhLO0FBQ3ZCdEIsWUFBSU0sV0FBV2dMLElBQUkxb0I7QUFDbkJvZCxZQUFJcUMsU0FBU3RDLEtBQUt5TDtNQUNuQixPQUFPO0FBQ054TCxZQUFJTSxXQUFXO0FBQ2ZOLFlBQUlxQyxTQUFTO01BQ2Q7QUFFQXJDLFVBQUlrQyxZQUFZckcsU0FBU2dFLE9BQU9DO0FBQ2hDLFVBQUksQ0FBQ0UsSUFBSWtDLFdBQVc7QUFDbkJsQyxZQUFJbkYsY0FBY1csTUFBTXJkLE9BQU9pUyxNQUFNLGFBQWEsV0FBVyxDQUFDO0FBQzlENFAsWUFBSStDLGNBQWMsSUFBSTtBQUN0QjtNQUNEO0FBQ0EvQyxVQUFJbUMsV0FBV25DLElBQUk2RCxRQUFRckYsWUFBWSxFQUFFdUc7QUFDekMsVUFBSSxDQUFDL0UsSUFBSW1DLFVBQVU7QUFDbEJuQyxZQUFJbkYsY0FBY1csTUFBTXJkLE9BQU9pUyxNQUFNLGNBQWMsWUFBWSxDQUFDO0FBQ2hFNFAsWUFBSStDLGNBQWMsSUFBSTtBQUN0QjtNQUNEO0FBQ0EvQyxVQUFJc0MsZUFBZXZDLEtBQUswTDtBQUN4QnpMLFVBQUl5QyxVQUFVMUMsS0FBSzhGLG1CQUFtQjlGLEtBQUswQztBQUczQyxVQUFJdmtCLFNBQVNzQixhQUFhO0FBQ3pCLGNBQU1rc0IsV0FBVzNMLEtBQUs0TCxXQUNwQmhnQixPQUFRaWdCLFFBQU87QUFDZixpQkFBT0EsR0FBR3ZuQixTQUFTLFVBQVV1bkIsR0FBRzdjLFVBQVU7UUFDM0MsQ0FBQyxFQUNBOGMsSUFBSTtBQUNOLFlBQUlILFVBQVU7QUFDYjFMLGNBQUkwQyxpQkFBaUJnSixTQUFTMWI7UUFDL0IsT0FBTztBQUNOZ1EsY0FBSTBDLGlCQUFpQjtRQUN0QjtNQUNEO0FBQ0ExQyxVQUFJdUMsY0FBY3hDLEtBQUsrTDtBQUN2QixZQUFNQyxjQUFjaE0sS0FBS2lNO0FBQ3pCaE0sVUFBSUksY0FBYyxDQUFBO0FBQ2xCLGVBQUE2TCxNQUFBLEdBQUFDLGVBQXFCem9CLE9BQU8rUyxLQUFLdVYsV0FBVyxHQUFBRSxNQUFBQyxhQUFBL3JCLFFBQUE4ckIsT0FBRztBQUEvQyxjQUFXeFEsU0FBQXlRLGFBQUFELEdBQUE7QUFDVixZQUFJRixZQUFZdFEsTUFBTSxHQUFHO0FBQ3hCdUUsY0FBSUksWUFBWXZjLEtBQUs0WCxNQUFNO1FBQzVCO01BQ0Q7QUFDQSxVQUFJdUUsSUFBSU8sYUFBYSxVQUFVO0FBQzlCUCxZQUFJdUMsY0FBYytJLE9BQU9BLElBQUlhO0FBQzdCLFlBQUksQ0FBQ25NLElBQUl1QyxhQUFhO0FBQ3JCdkMsY0FBSW5GLGNBQWNXLE1BQU1yZCxPQUFPaVMsTUFBTSxpQkFBaUIsZUFBZSxDQUFDO0FBQ3RFNFAsY0FBSStDLGNBQWMsSUFBSTtBQUN0QjtRQUNEO0FBQ0EvQyxZQUFJd0MsYUFBYThJLE9BQU9BLElBQUk1RjtBQUM1QixZQUFJLENBQUMxRixJQUFJd0MsWUFBWTtBQUNwQixjQUFJOEksT0FBT0EsSUFBSWMsWUFBWTtBQUUxQnBNLGdCQUFJd0MsYUFBYXJrQixPQUFPaVMsTUFBTSxZQUFZLFlBQVk7VUFDdkQsT0FBTztBQUNONFAsZ0JBQUluRixjQUFjVyxNQUNqQnJkLE9BQU9pUyxNQUFNLGtCQUFrQixnQkFBZ0IsQ0FDaEQ7QUFDQTRQLGdCQUFJK0MsY0FBYyxJQUFJO0FBQ3RCO1VBQ0Q7UUFDRDtBQUVBL0MsWUFBSUUsY0FBQSxtQkFBQWxmLE9BQWlDZ2YsSUFBSXdDLFlBQVUsT0FBQSxFQUFBeGhCLE9BQVE3QyxPQUFPaVMsTUFBTSxPQUFPLEtBQUssQ0FBQyxFQUFBcFAsT0FDcEZnZixJQUFJdUIsYUFDTCxHQUFBLEVBQUF2Z0IsT0FBSWdmLElBQUlFLFdBQVc7TUFDcEI7QUFDQUYsVUFBSWlDLGFBQWE7QUFFakJqQyxVQUFJOEMsY0FBYyxJQUFJO0lBQ3ZCO0FBRUEsVUFBTXVJLGtCQUFrQixTQUFVeFAsVUFBVStJLFdBQVc7QUFDdEQsVUFBSSxDQUFDQSxXQUFXO0FBQ2ZBLG9CQUFZRjtNQUNiO0FBQ0EsWUFBTTNFLE9BQU9sRSxTQUFTc0QsU0FBU3RELFNBQVNzRCxNQUFNLENBQUM7QUFDL0MsVUFBSVksTUFBTTtBQUVULFlBQUlBLEtBQUtzTSxTQUFTO0FBQ2pCck0sY0FBSW5GLGNBQWNXLE1BQU1yZCxPQUFPaVMsTUFBTSxVQUFBLFNBQUFwUCxPQUFtQmdmLElBQUl6ZixRQUFRLENBQUUsQ0FBQztBQUN2RXFrQixvQkFBVSxJQUFJO0FBQ2QsaUJBQU87UUFDUjtBQUVBLGNBQU0wSCxlQUFldk0sS0FBSzVWO0FBQzFCLFlBQUkwUixTQUFTcUosV0FBVztBQUV2QixnQkFBTXFILFNBQVMsSUFBSW50QixHQUFHeUIsTUFBTW1mLElBQUl6ZixRQUFRLEVBQUVpc0I7QUFDMUMsZ0JBQU1DLFFBQVEsSUFBSXJ0QixHQUFHeUIsTUFBTXlyQixZQUFZLEVBQUVFO0FBQ3pDLGNBQUlELFdBQVdFLFNBQVMsQ0FBQ3pNLElBQUlrQix1QkFBdUI7QUFDbkRsQixnQkFBSW5GLGNBQWNXLE1BQ2pCd0UsSUFBSXpmLFdBQ0hwQyxPQUFPaVMsTUFBTSxjQUFjLGFBQWEsSUFDeENrYyxlQUNBbnVCLE9BQU9pUyxNQUFNLE9BQU8sS0FBSyxDQUMzQjtBQUNBd1Usc0JBQVUsSUFBSTtBQUNkLG1CQUFPO1VBQ1I7QUFFQSxjQUFJMW1CLFNBQVM4YixPQUNaN2IsT0FBT2lTLE1BQU0sTUFBTSxJQUFJLEdBQ3ZCalMsT0FBT2lTLE1BQU0sTUFBTSxJQUFJLElBQ3RCNFAsSUFBSXpmLFdBQ0pwQyxPQUFPaVMsTUFBTSxVQUFVLFNBQVMsSUFDaENrYyxZQUNGO1FBQ0Q7QUFDQXRNLFlBQUl6ZixXQUFXK3JCO01BQ2hCLE9BQU87QUFFTnRNLFlBQUluRixjQUFjVyxNQUNqQnJkLE9BQU9pUyxNQUFNLGVBQWUsY0FBYyxJQUFJNFAsSUFBSXpmLFFBQ25EO0FBQ0Fxa0Isa0JBQVUsSUFBSTtBQUVkLFVBQUUxbUIsU0FBU3liLEtBQUtDO0FBQ2hCLGVBQU87TUFDUjtBQUVBLGFBQU87SUFDUjtBQVlBLFVBQU1nTSx5QkFBeUJBLE1BQU07QUFDcEMsVUFBSTVGLElBQUlvQixpQkFBaUI7QUFDeEIsWUFBSSxDQUFDcEIsSUFBSXlDLFdBQVd2a0IsU0FBU3dDLE9BQU9xUCxXQUFXaVEsSUFBSW9CLGVBQWUsR0FBRztBQUNwRSxpQkFBTztRQUNSLFdBQVcsT0FBT3BCLElBQUl5QyxZQUFZLFVBQVU7QUFDM0MsY0FBSWlLO0FBR0osZ0JBQU1DLE1BQU0zTSxJQUFJb0IsZ0JBQWdCclQsTUFBTSxHQUFHO0FBQ3pDLGNBQUk7QUFDSDJlLHdCQUFZLElBQUl4dUIsU0FBU1ksS0FBSyxFQUFFc1gsSUFBSXVXLElBQUksQ0FBQyxHQUFHQSxJQUFJLENBQUMsQ0FBQztVQUNuRCxRQUFRO0FBQ1BELHdCQUFZLElBQUl4dUIsU0FBU1ksS0FBS2toQixJQUFJb0IsZUFBZTtVQUNsRDtBQUVBLGNBQUlzTCxVQUFVeFksUUFBUSxHQUFHO0FBQ3hCLGdCQUFJd1ksVUFBVW5YLFFBQVEsSUFBSXJYLFNBQVNZLEtBQUtraEIsSUFBSXlDLE9BQU8sQ0FBQyxHQUFHO0FBQ3RELHFCQUFPO1lBQ1I7VUFDRCxPQUFPO0FBSU4sbUJBQU87VUFDUjtRQUNEO01BQ0Q7QUFDQSxhQUFPO0lBQ1I7QUFFQSxVQUFNZ0UsZ0JBQWdCLFdBQVk7QUFDakN6RyxVQUFJTyxXQUFXO0FBQ2YsWUFBTTFFLFdBQVdtRSxJQUFJOEQsUUFBUXRGLFlBQVk7QUFFekMsVUFBSTNDLFNBQVMrUSxLQUFLcGpCLFdBQVcsV0FBVztBQUd2QyxjQUFNcWpCLE9BQU83c0IsU0FBU3lGLGNBQWMsR0FBRztBQUN2Q29uQixhQUFLbG5CLGFBQWEsUUFBUXZHLEdBQUc0RCxLQUFLQyxPQUFPK2MsSUFBSXpmLFFBQVEsQ0FBQztBQUN0RHNzQixhQUFLOXFCLFlBQVkvQixTQUFTcUcsZUFBZTJaLElBQUl6ZixRQUFRLENBQUM7QUFDdER5ZixZQUFJbkYsY0FBYytDLEtBQUssQ0FBQyxPQUFPaVAsTUFBTSxHQUFHLENBQUM7QUFDekMsWUFBSTdNLElBQUlnRCxlQUFlO0FBQ3RCaEQsY0FBSWdELGNBQWMsSUFBSTtRQUN2QjtBQUVBO01BQ0Q7QUFHQSxVQUFJbkgsU0FBUytRLEtBQUtFLFNBQVM7QUFDMUI5TSxZQUFJbkYsY0FBY1csTUFDakJyZCxPQUFPaVMsTUFBTSx3QkFBd0Isc0JBQXNCLENBQzVEO01BQ0QsT0FBTztBQUNONFAsWUFBSW5GLGNBQWNXLE1BQU1yZCxPQUFPaVMsTUFBTSxtQkFBbUIsaUJBQWlCLENBQUM7TUFDM0U7QUFFQSxRQUFFbFMsU0FBU3liLEtBQUtDO0FBQ2hCb0csVUFBSWlELGNBQWMsSUFBSTtJQUN2QjtBQUVBLFVBQU15RCxjQUFjLFdBQVk7QUFDL0IsWUFBTTFLLFlBQVlnRSxJQUFJOEQsUUFBUXpGLGFBQWE7QUFFM0MsVUFBSXJDLGNBQWMsa0JBQWtCZ0UsSUFBSTRDLG9CQUFvQjVDLElBQUlnQixvQkFBb0I7QUFFbkYsY0FBTStMLGFBQWE7VUFDbEJ0UixRQUFRO1VBQ1JrRCxRQUFRcUIsSUFBSXpmOztRQUNiO0FBRUEsY0FBTXlzQixXQUFXLElBQUk5dUIsU0FBU3liLEtBQUtjLElBQ2xDdGMsT0FBT2lTLE1BQU0scUJBQXFCLG1CQUFtQixHQUNyRDJjLFlBQ0EsTUFBTTtBQUNMLFlBQUU3dUIsU0FBU3liLEtBQUtDO0FBQ2hCb0csY0FBSW5GLGNBQWMrQyxLQUFLemYsT0FBT2lTLE1BQU0sZ0JBQWdCLGNBQWMsQ0FBQztBQUNuRSxjQUFJbVYsb0JBQW9CLE1BQU0sR0FBRztBQUNoQ3ZGLGdCQUFJOEQsUUFBUTFILEtBQUs7VUFDbEIsT0FBTztBQUNONEQsZ0JBQUk2RCxRQUFRekgsS0FBSztVQUNsQjtRQUNELEdBQ0E0RCxJQUFJbkYsYUFDTDtBQUNBbVMsaUJBQVM1USxLQUFLO01BRWYsWUFBWUosY0FBYyxRQUFRQSxjQUFjLFdBQWNnRSxJQUFJNkMsWUFBWTdDLElBQUlpQixZQUFZO0FBRTdGakIsWUFBSW5GLGNBQWMrQyxLQUFLemYsT0FBT2lTLE1BQU0saUJBQWlCLGVBQWUsQ0FBQztBQUNyRSxVQUFFbFMsU0FBU3liLEtBQUtDO0FBRWhCcVQsY0FBTSxHQUFJLEVBQUU5UCxLQUFLLE1BQU07QUFDdEI2QyxjQUFJOEQsUUFBUTFILEtBQUs7UUFDbEIsQ0FBQztNQUVGLE9BQU87QUFDTixjQUFNUCxXQUFXbUUsSUFBSThELFFBQVF0RixZQUFZO0FBQ3pDLGNBQU0wTyxZQUNMclIsU0FBU0w7UUFFVEssU0FBU3dCLE9BQU8sQ0FBQyxFQUFFMVk7QUFDcEIsZ0JBQVFxWCxXQUFBO1VBQ1AsS0FBSztBQUVKZ0UsZ0JBQUluRixjQUFjVyxNQUFNcmQsT0FBT2lTLE1BQU0sZ0JBQWdCLGNBQWMsQ0FBQztBQUNwRTtVQUNELEtBQUs7QUFDSjRQLGdCQUFJbkYsY0FBY1csTUFDakJyZCxPQUFPaVMsTUFBTSxnQkFBZ0IsY0FBYyxJQUMxQzhjLFVBQVVDLFlBQVlDLGNBQ3RCanZCLE9BQU9pUyxNQUNOLG9EQUNBLGtEQUNELENBQ0Y7QUFDQTtVQUNELEtBQUs7QUFDSjRQLGdCQUFJbkYsY0FBY1csTUFBTSxDQUN2QnJkLE9BQU9pUyxNQUFNLGdCQUFnQixjQUFjLEdBQzNDOGMsVUFBVUMsWUFBWUMsYUFDdEJqdkIsT0FBT2lTLE1BQ04sOENBQ0EsNENBQ0QsQ0FBQSxDQUNBO0FBR0Q7VUFDRCxLQUFLLGlCQUFpQjtBQUVyQixrQkFBTSxDQUFDaWQsSUFBSSxJQUFJSCxVQUFVSSxjQUFjQztBQUN2Q3ZOLGdCQUFJbkYsY0FBY1csTUFDakJyZCxPQUFPaVMsTUFBTSxnQkFBZ0IsY0FBYyxJQUMxQ2lkLE9BQ0FsdkIsT0FBT2lTLE1BQU0sZUFBZSxhQUFhLENBQzNDO0FBQ0E7VUFDRDtVQUNBO0FBQ0M0UCxnQkFBSW5GLGNBQWNXLE1BQ2pCcmQsT0FBT2lTLE1BQU0sV0FBVyxTQUFTLElBQUk0UCxJQUFJOEQsUUFBUXhGLGFBQWEsQ0FDL0Q7UUFDRjtBQUNBMEIsWUFBSU8sV0FBVztBQUNmLFlBQUlQLElBQUlpRCxlQUFlO0FBQ3RCakQsY0FBSWlELGNBQWMsSUFBSTtRQUN2QjtNQUNEO0lBQ0Q7QUFFQSxVQUFNdUssaUJBQWtCaHJCLFVBQVM7QUFDaEMsVUFBSSxDQUFDQSxNQUFNO0FBRVYsZUFBTztNQUNSO0FBQ0EsYUFBT3RFLFNBQVNFLEtBQUtDLG1CQUFtQm92QixLQUFNQyxTQUFRO0FBQ3JELGVBQU8sSUFBSTViLE9BQUEsUUFBQTlRLE9BQWUwc0IsS0FBRyxLQUFBLEdBQU8sR0FBRyxFQUFFM2IsS0FBS3ZQLElBQUk7TUFDbkQsQ0FBQztJQUNGO0FBQ0EsVUFBTXFuQiwwQkFBMEIsV0FBWTtBQUMzQyxZQUFNaE8sV0FBV21FLElBQUkrRCxrQkFBa0J2RixZQUFZLEVBQUU3RDtBQUNyRCxVQUFJLENBQUMwUSxnQkFBZ0J4UCxVQUFVbUUsSUFBSW1ELHVCQUF1QixHQUFHO0FBQzVEO01BQ0Q7QUFFQSxZQUFNbUksTUFBTXpQLFNBQVNzRCxNQUFNLENBQUMsRUFBRUMsYUFBYXZELFNBQVNzRCxNQUFNLENBQUMsRUFBRUMsVUFBVSxDQUFDO0FBQ3hFLFVBQUksQ0FBQ2tNLEtBQUs7QUFDVHRMLFlBQUluRixjQUFjVyxNQUNqQnJkLE9BQU9pUyxNQUFNLFFBQVEsTUFBTSxJQUMxQjRQLElBQUl6ZixXQUNKcEMsT0FBT2lTLE1BQU0sV0FBVyxTQUFTLENBQ25DO0FBQ0E0UCxZQUFJbUQsd0JBQXdCLElBQUk7QUFDaEM7TUFDRDtBQUNBLFVBQUksQ0FBQ25ELElBQUlnQyw0QkFBNEIsQ0FBQ3dMLGVBQWVsQyxJQUFJMW9CLE9BQU8sR0FBRztBQUNsRW9kLFlBQUlxQixVQUFVaUssSUFBSTVGO0FBQ2xCLFlBQUksQ0FBQzFGLElBQUlxQixTQUFTO0FBQ2pCckIsY0FBSW5GLGNBQWNXLE1BQU1yZCxPQUFPaVMsTUFBTSxnQkFBZ0IsY0FBYyxDQUFDO0FBQ3BFNFAsY0FBSW1ELHdCQUF3QixJQUFJO0FBQ2hDO1FBQ0Q7QUFDQW5ELFlBQUlzQixZQUFZZ0ssSUFBSWhLO0FBQ3BCLFlBQUksQ0FBQ3RCLElBQUlzQixXQUFXO0FBQ25CdEIsY0FBSW5GLGNBQWNXLE1BQU1yZCxPQUFPaVMsTUFBTSxjQUFjLFlBQVksQ0FBQztBQUNoRTRQLGNBQUltRCx3QkFBd0IsSUFBSTtBQUNoQztRQUNEO0FBQ0FuRCxZQUFJbkYsY0FBYytDLEtBQUt6ZixPQUFPaVMsTUFBTSxhQUFhLFdBQVcsQ0FBQztBQUM3RDRQLFlBQUlrRCx3QkFBd0IsSUFBSTtNQUNqQyxPQUFPO0FBQ05sRCxZQUFJK0Qsa0JBQWtCcEosTUFBTXFLLFVBQVU7QUFDdENoRixZQUFJK0Qsa0JBQWtCcEosTUFBTWdFLFNBQVNxQixJQUFJemY7QUFDekN5ZixZQUFJK0Qsb0JBQW9CLElBQUk3bEIsU0FBU3liLEtBQUtjLElBQ3pDdGMsT0FBT2lTLE1BQU0sWUFBWSxVQUFVLEdBQ25DNFAsSUFBSStELGtCQUFrQnBKLE9BQ3RCZ1QsNEJBQ0EzTixJQUFJbkYsZUFDSm1GLElBQUltRCx1QkFDTDtBQUNBbkQsWUFBSStELGtCQUFrQjVILFVBQVUsSUFBSTtBQUNwQzZELFlBQUkrRCxrQkFBa0IzSCxLQUFLO01BQzVCO0lBQ0Q7QUFDQSxVQUFNdVIsNkJBQTZCLFdBQVk7QUFDOUMsWUFBTTlSLFdBQVdtRSxJQUFJK0Qsa0JBQWtCdkYsWUFBWSxFQUFFN0Q7QUFDckQsWUFBTWlULE9BQU8vUixTQUFTc0QsTUFBTSxDQUFDLEVBQUVDO0FBQUEsVUFBQXlPLGFBQUF0c0IsMkJBQ2Jxc0IsSUFBQSxHQUFBRTtBQUFBLFVBQUE7QUFBbEIsYUFBQUQsV0FBQXBzQixFQUFBLEdBQUEsRUFBQXFzQixTQUFBRCxXQUFBbnNCLEVBQUEsR0FBQUMsUUFBd0I7QUFBQSxnQkFBYjJwQixNQUFBd0MsT0FBQWpzQjtBQUNWLGNBQUksQ0FBQzJyQixlQUFlbEMsSUFBSTFvQixPQUFPLEdBQUc7QUFDakNvZCxnQkFBSXFCLFVBQVVpSyxJQUFJNUY7QUFDbEIxRixnQkFBSXNCLFlBQVlnSyxJQUFJaEs7QUFDcEI7VUFDRDtRQUNEO01BQUEsU0FBQWpmLEtBQUE7QUFBQXdyQixtQkFBQXZyQixFQUFBRCxHQUFBO01BQUEsVUFBQTtBQUFBd3JCLG1CQUFBdHJCLEVBQUE7TUFBQTtBQUNBLFVBQUksQ0FBQ3lkLElBQUlxQixTQUFTO0FBRWpCckIsWUFBSXFCLFVBQVV1TSxLQUFLLENBQUMsRUFBRWxJO0FBQ3RCMUYsWUFBSXNCLFlBQVlzTSxLQUFLLENBQUMsRUFBRXRNO0FBQ3hCLFlBQUksQ0FBQ3RCLElBQUlxQixTQUFTO0FBQ2pCckIsY0FBSW5GLGNBQWNXLE1BQU1yZCxPQUFPaVMsTUFBTSxnQkFBZ0IsY0FBYyxDQUFDO0FBQ3BFNFAsY0FBSW1ELHdCQUF3QixJQUFJO0FBQ2hDO1FBQ0Q7TUFDRDtBQUNBLFVBQUksQ0FBQ25ELElBQUlzQixXQUFXO0FBQ25CdEIsWUFBSW5GLGNBQWNXLE1BQU1yZCxPQUFPaVMsTUFBTSxjQUFjLFlBQVksQ0FBQztBQUNoRTRQLFlBQUltRCx3QkFBd0IsSUFBSTtBQUNoQztNQUNEO0FBQ0FuRCxVQUFJbkYsY0FBYytDLEtBQUt6ZixPQUFPaVMsTUFBTSxhQUFhLFdBQVcsQ0FBQztBQUM3RDRQLFVBQUlrRCx3QkFBd0IsSUFBSTtJQUNqQztBQVNBLFVBQU04RyxvQkFBb0IsU0FBVXZPLFFBQVFtSixXQUFXO0FBRXRELFVBQUksQ0FBQzFtQixTQUFTc0IsZUFBZWljLFdBQVcsUUFBUTtBQUMvQ3VFLFlBQUluRixjQUFjVyxNQUNqQnJkLE9BQU9pUyxNQUFNLFlBQVksVUFBVSxJQUNsQ3FMLFNBQ0F0ZCxPQUFPaVMsTUFBTSxvQkFBb0Isa0JBQWtCLENBQ3JEO0FBQ0F3VSxrQkFBVSxJQUFJO0FBQ2QsZUFBTztNQUNSO0FBQ0EsVUFBSSxDQUFDNUUsSUFBSUUsYUFBYTtBQUNyQkYsWUFBSW5GLGNBQWNXLE1BQUEsbUJBQUF4YSxPQUF5QnlhLFFBQU0sZ0RBQUEsQ0FBZ0Q7QUFDakdtSixrQkFBVSxJQUFJO0FBQ2QsZUFBTztNQUNSO0FBQ0EsYUFBTztJQUNSO0FBVUEsVUFBTW1KLGtCQUFrQixTQUFVdFMsUUFBUW1KLFdBQVcvSSxVQUFVO0FBQzlELFlBQU0sQ0FBQztRQUFDMFA7TUFBTyxDQUFDLElBQUkxUCxTQUFTc0Q7QUFFN0IsWUFBTTZPLGdCQUFnQnpDLFdBQVcsQ0FBQyxVQUFVLE1BQU0sRUFBRWhzQixTQUFTa2MsTUFBTTtBQUNuRSxZQUFNd1MsaUJBQWlCeFMsV0FBVyxhQUFhOFAsWUFBWXZMLElBQUk0QixlQUFlNUIsSUFBSTZCO0FBQ2xGLFlBQU1xTSxjQUFjelMsV0FBVyxhQUFhLENBQUM4UCxXQUFXdkwsSUFBSThCO0FBQzVELFVBQUlrTSxpQkFBaUJDLGtCQUFrQkMsYUFBYTtBQUNuRGxPLFlBQUluRixjQUFjVyxNQUFBLEdBQUF4YSxPQUVoQjdDLE9BQU9pUyxNQUFNLFlBQVksVUFBVSxJQUNuQ3FMLFNBQ0F0ZCxPQUFPaVMsTUFBTSxZQUFZLFVBQVUsS0FDbENtYixVQUFVLE9BQU9wdEIsT0FBT2lTLE1BQU0sTUFBTSxJQUFJLElBQzFDLElBQUEsQ0FDRDtBQUNBd1Usa0JBQVUsSUFBSTtBQUNkLGVBQU87TUFDUjtBQUdBLFVBQUl1SjtBQUNKLFVBQUkxUyxXQUFXLFlBQVk7QUFDMUIwUyxtQkFBV3RTLFNBQVNzRCxNQUFNLENBQUMsRUFBRXdNLFdBQzNCaGdCLE9BQVFpZ0IsUUFBTztBQUNmLGlCQUFPQSxHQUFHdm5CLFNBQVMsWUFBWXVuQixHQUFHN2MsVUFBVTtRQUM3QyxDQUFDLEVBQ0E4YyxJQUFJO01BQ1AsV0FBV3BRLFdBQVcsWUFBWUEsV0FBVyxRQUFRO0FBQ3BEMFMsbUJBQVd0UyxTQUFTc0QsTUFBTSxDQUFDLEVBQUV3TSxXQUMzQmhnQixPQUFRaWdCLFFBQU87QUFDZixpQkFBT0EsR0FBR3ZuQixTQUFTLFVBQVV1bkIsR0FBRzdjLFVBQVU7UUFDM0MsQ0FBQyxFQUNBOGMsSUFBSTtNQUNQO0FBQ0EsVUFDQ3NDLFlBQ0EsQ0FBQ25PLElBQUkyQywwQkFDTCxDQUFDNkMsUUFDQXJuQixPQUFPaVMsTUFBTSxjQUFjLFlBQVksSUFDdEM0UCxJQUFJemYsWUFDSDR0QixTQUFTbmUsV0FBVyxhQUNsQjdSLE9BQU9pUyxNQUFNLFNBQVMsT0FBTyxJQUFBLEdBQUFwUCxPQUU3QjdDLE9BQU9pUyxNQUFNLFNBQVMsT0FBTyxJQUM3QixJQUFJbFMsU0FBU1ksS0FBS3F2QixTQUFTbmUsTUFBTSxFQUFFZ0osU0FBUyxLQUFLLEdBQ2xELFNBQUEsS0FDRjdhLE9BQU9pUyxNQUFNLFFBQVEsTUFBTSxJQUMzQnFMLFNBQ0F0ZCxPQUFPaVMsTUFBTSxPQUFPLEtBQUssSUFDekJqUyxPQUFPaVMsTUFDTiw4QkFDQSw0QkFDRCxDQUNGLEdBQ0M7QUFDRDRQLFlBQUluRixjQUFjVyxNQUFNcmQsT0FBT2lTLE1BQU0saUJBQWlCLGVBQWUsQ0FBQztBQUN0RXdVLGtCQUFVLElBQUk7QUFDZCxlQUFPO01BQ1I7QUFDQSxVQUFJLENBQUMvSSxTQUFTZ0UsT0FBT0MsV0FBVztBQUMvQkUsWUFBSW5GLGNBQWNXLE1BQU1yZCxPQUFPaVMsTUFBTSxXQUFXLFNBQVMsQ0FBQztBQUMxRHdVLGtCQUFVLElBQUk7QUFDZCxlQUFPO01BQ1I7QUFDQSxhQUFPO0lBQ1I7QUFFQSxVQUFNcUYsZ0JBQWdCLFdBQVk7QUFDakMsVUFBSW1FO0FBQ0osVUFBSWxRO0FBQ0osVUFBSXFILG9CQUFvQixNQUFNLEdBQUc7QUFDaENySCxnQkFBUTllLEdBQUdzbUIsS0FBSzdGLE9BQU92Z0IsSUFBSSxXQUFXO0FBQ3RDOHVCLG9CQUFZcE8sSUFBSXpmO01BQ2pCLE9BQU87QUFDTixjQUFNc2IsV0FBV21FLElBQUlnRSxRQUFReEYsWUFBWSxFQUFFN0Q7QUFDM0MsWUFBSSxDQUFDb1QsZ0JBQWdCLFFBQVEvTixJQUFJcUQsZUFBZXhILFFBQVEsR0FBRztBQUMxRDtRQUNEO0FBRUFxQyxnQkFBUXJDLFNBQVNnRSxPQUFPQztBQUN4QixjQUFNLENBQUNDLElBQUksSUFBSWxFLFNBQVNzRDtBQUN4QmlQLG9CQUFZck8sS0FBSzVWO0FBQ2pCNlYsWUFBSXlDLFVBQVUxQyxLQUFLOEYsbUJBQW1COUYsS0FBSzBDO01BQzVDO0FBQ0EsWUFBTTlILFFBQVE7UUFDYmMsUUFBUTtRQUNSdkssTUFBTWtkO1FBQ05DLElBQUlyTyxJQUFJd0I7UUFDUnREO1FBQ0ExTyxRQUFRd1EsSUFBSUU7UUFDWnlGLFdBQVczRixJQUFJbUI7UUFDZnpLLFFBQVE7TUFDVDtBQUNBLFVBQUlzSixJQUFJRyxZQUFZO0FBQ25CeEYsY0FBTWUsT0FBT3NFLElBQUlHO01BQ2xCO0FBQ0EsVUFBSXlGLHVCQUF1QixHQUFHO0FBQzdCakwsY0FBTWtMLGtCQUFrQjdGLElBQUlvQjtNQUM3QjtBQUNBLFVBQUlwQixJQUFJeUIsY0FBYztBQUNyQjlHLGNBQU0yVCxXQUFXO01BQ2xCO0FBQ0EsVUFBSXRPLElBQUkwQixjQUFjO0FBQ3JCL0csY0FBTTRULGVBQWU7TUFDdEI7QUFDQSxVQUFJdk8sSUFBSTJCLHNCQUFzQjtBQUM3QmhILGNBQU02VCxhQUFhO01BQ3BCO0FBQ0F4TyxVQUFJaUUsaUJBQWlCLElBQUkvbEIsU0FBU3liLEtBQUtjLElBQ3RDdGMsT0FBT2lTLE1BQU0sVUFBVSxRQUFRLEdBQy9CdUssT0FDQXFGLElBQUlvRCxlQUNKcEQsSUFBSW5GLGVBQ0ptRixJQUFJcUQsYUFDTDtBQUNBckQsVUFBSWlFLGVBQWU5SCxVQUFVLElBQUk7QUFDakM2RCxVQUFJaUUsZUFBZTdILEtBQUs7SUFDekI7QUFDQSxVQUFNbU8sa0JBQWtCLFdBQVk7QUFDbkMsWUFBTTVQLFFBQVE7UUFDYmMsUUFBUTtRQUNSL0UsUUFBUTtNQUNUO0FBRUEsVUFBSXNKLElBQUlxSyxNQUFNO0FBQ2IxUCxjQUFNMFAsT0FBT3JLLElBQUlxSztBQUNqQjFQLGNBQU11RCxRQUFROWUsR0FBR3NtQixLQUFLN0YsT0FBT3ZnQixJQUFJLGFBQWE7TUFDL0MsT0FBTztBQUNOLGNBQU11YyxXQUFXbUUsSUFBSWtFLFVBQVUxRixZQUFZLEVBQUU3RDtBQUU3QyxZQUFJLENBQUNrQixTQUFTNFMsY0FBYyxDQUFDLEVBQUVDLGFBQWE7QUFDM0M7UUFDRDtBQUNBLGNBQU0sQ0FBQztVQUFDNUM7UUFBUyxDQUFDLElBQUlqUSxTQUFTc0Q7QUFDL0IsWUFBSSxDQUFDMk0sV0FBVztBQUNmO1FBQ0Q7QUFDQW5SLGNBQU13UixRQUFRTDtBQUNkLGNBQU01TixRQUFRckMsU0FBU2dFLE9BQU9DO0FBQzlCLFlBQUksQ0FBQzVCLE9BQU87QUFDWDtRQUNEO0FBQ0F2RCxjQUFNdUQsUUFBUUE7TUFDZjtBQUNBLFVBQUk4QixJQUFJRyxZQUFZO0FBQ25CeEYsY0FBTWUsT0FBT3NFLElBQUlHO01BQ2xCO0FBQ0EsWUFBTXdPLGFBQWEsSUFBSXp3QixTQUFTOGIsT0FBTzdiLE9BQU9pUyxNQUFNLFlBQVksVUFBVSxDQUFDO0FBQzNFNFAsVUFBSW1FLG1CQUFtQixJQUFJam1CLFNBQVN5YixLQUFLYyxJQUN4Q3RjLE9BQU9pUyxNQUFNLFVBQVUsUUFBUSxHQUMvQnVLLE9BQ0EsTUFDQWdVLFVBQ0Q7QUFDQTNPLFVBQUltRSxpQkFBaUJoSSxVQUFVLElBQUk7QUFDbkM2RCxVQUFJbUUsaUJBQWlCL0gsS0FBSztJQUMzQjtBQUNBLFVBQU15TyxrQkFBa0IsV0FBWTtBQUNuQyxVQUFJdUQ7QUFDSixVQUFJbFE7QUFDSixVQUFJcUgsb0JBQW9CLFFBQVEsR0FBRztBQUNsQ3JILGdCQUFROWUsR0FBR3NtQixLQUFLN0YsT0FBT3ZnQixJQUFJLFdBQVc7QUFDdEM4dUIsb0JBQVlwTyxJQUFJemY7TUFDakIsT0FBTztBQUNOLGNBQU1zYixXQUFXbUUsSUFBSW9FLFVBQVU1RixZQUFZLEVBQUU3RDtBQUM3QyxZQUFJLENBQUNvVCxnQkFBZ0IsVUFBVS9OLElBQUl1RCxpQkFBaUIxSCxRQUFRLEdBQUc7QUFDOUQ7UUFDRDtBQUVBcUMsZ0JBQVFyQyxTQUFTZ0UsT0FBT0M7QUFDeEIsY0FBTSxDQUFDQyxJQUFJLElBQUlsRSxTQUFTc0Q7QUFDeEJpUCxvQkFBWXJPLEtBQUs1VjtBQUNqQjZWLFlBQUl5QyxVQUFVMUMsS0FBSzhGLG1CQUFtQjlGLEtBQUswQztNQUM1QztBQUNBLFlBQU05SCxRQUFRO1FBQ2JjLFFBQVE7UUFDUnRSLE9BQU9pa0I7UUFDUGxRO1FBQ0ExTyxRQUFRd1EsSUFBSUU7UUFDWnlGLFdBQVczRixJQUFJbUI7UUFDZnpLLFFBQVE7TUFDVDtBQUNBLFVBQUlzSixJQUFJRyxZQUFZO0FBQ25CeEYsY0FBTWUsT0FBT3NFLElBQUlHO01BQ2xCO0FBQ0EsVUFBSXlGLHVCQUF1QixHQUFHO0FBQzdCakwsY0FBTWtMLGtCQUFrQjdGLElBQUlvQjtNQUM3QjtBQUNBcEIsVUFBSXFFLG1CQUFtQixJQUFJbm1CLFNBQVN5YixLQUFLYyxJQUN4Q3RjLE9BQU9pUyxNQUFNLFVBQVUsUUFBUSxHQUMvQnVLLE9BQ0FxRixJQUFJc0QsaUJBQ0p0RCxJQUFJbkYsZUFDSitULG9CQUNEO0FBQ0E1TyxVQUFJcUUsaUJBQWlCbEksVUFBVSxJQUFJO0FBQ25DNkQsVUFBSXFFLGlCQUFpQmpJLEtBQUs7SUFDM0I7QUFFQSxVQUFNd1MsdUJBQXVCLFdBQVk7QUFDeEMsWUFBTTVTLFlBQVlnRSxJQUFJcUUsaUJBQWlCaEcsYUFBYTtBQUVwRCxVQUFJckMsY0FBYyxxQ0FBcUNnRSxJQUFJNkMsWUFBWTdDLElBQUlpQixZQUFZO0FBQ3RGakIsWUFBSW5GLGNBQWMrQyxLQUFLemYsT0FBT2lTLE1BQU0sY0FBYyxZQUFZLENBQUM7QUFDL0QsVUFBRWxTLFNBQVN5YixLQUFLQztBQUNoQm9HLFlBQUlxRSxpQkFBaUJqSSxLQUFLO01BQzNCLFdBQVdKLGNBQWMsZ0JBQWdCO0FBQ3hDZ0UsWUFBSW5GLGNBQWNXLE1BQU1yZCxPQUFPaVMsTUFBTSxpQkFBaUIsZUFBZSxDQUFDO0FBQ3RFLFlBQUk0UCxJQUFJdUQsaUJBQWlCO0FBQ3hCdkQsY0FBSXVELGdCQUFnQjVGLEtBQUssTUFBTXFDLElBQUlxRSxnQkFBZ0I7UUFDcEQ7TUFFRCxPQUFPO0FBQ05yRSxZQUFJbkYsY0FBY1csTUFDakJyZCxPQUFPaVMsTUFBTSxXQUFXLFNBQVMsSUFBSTRQLElBQUlxRSxpQkFBaUIvRixhQUFhLENBQ3hFO0FBQ0EsWUFBSTBCLElBQUl1RCxpQkFBaUI7QUFDeEJ2RCxjQUFJdUQsZ0JBQWdCNUYsS0FBSyxNQUFNcUMsSUFBSXFFLGdCQUFnQjtRQUNwRDtNQUNEO0lBQ0Q7QUFFQSxVQUFNMEcsb0JBQW9CLFdBQVk7QUFDckMsVUFBSXFEO0FBQ0osVUFBSWxRO0FBQ0osVUFBSXFILG9CQUFvQixVQUFVLEdBQUc7QUFDcENySCxnQkFBUTllLEdBQUdzbUIsS0FBSzdGLE9BQU92Z0IsSUFBSSxXQUFXO0FBQ3RDOHVCLG9CQUFZcE8sSUFBSXpmO01BQ2pCLE9BQU87QUFDTixjQUFNc2IsV0FBV21FLElBQUlzRSxZQUFZOUYsWUFBWSxFQUFFN0Q7QUFDL0MsWUFBSSxDQUFDb1QsZ0JBQWdCLFlBQVkvTixJQUFJeUQsbUJBQW1CNUgsUUFBUSxHQUFHO0FBQ2xFO1FBQ0Q7QUFFQXFDLGdCQUFRckMsU0FBU2dFLE9BQU9DO0FBQ3hCLGNBQU0sQ0FBQ0MsSUFBSSxJQUFJbEUsU0FBU3NEO0FBQ3hCaVAsb0JBQVlyTyxLQUFLNVY7QUFDakI2VixZQUFJeUMsVUFBVTFDLEtBQUs4RixtQkFBbUI5RixLQUFLMEM7TUFDNUM7QUFDQSxZQUFNOUgsUUFBUTtRQUNiYyxRQUFRO1FBQ1J0UixPQUFPaWtCO1FBQ1BsUTtRQUNBMU8sUUFBUXdRLElBQUlFO1FBQ1p5RixXQUFXM0YsSUFBSW1CO1FBQ2Z6SyxRQUFRO01BQ1Q7QUFDQSxVQUFJc0osSUFBSUcsWUFBWTtBQUNuQnhGLGNBQU1lLE9BQU9zRSxJQUFJRztNQUNsQjtBQUNBLFVBQUl5Rix1QkFBdUIsR0FBRztBQUM3QmpMLGNBQU1rTCxrQkFBa0I3RixJQUFJb0I7TUFDN0I7QUFDQXBCLFVBQUl1RSxxQkFBcUIsSUFBSXJtQixTQUFTeWIsS0FBS2MsSUFDMUN0YyxPQUFPaVMsTUFBTSxVQUFVLFFBQVEsR0FDL0J1SyxPQUNBcUYsSUFBSXdELG1CQUNKeEQsSUFBSW5GLGVBQ0pnVSxzQkFDRDtBQUNBN08sVUFBSXVFLG1CQUFtQnBJLFVBQVUsSUFBSTtBQUNyQzZELFVBQUl1RSxtQkFBbUJuSSxLQUFLO0lBQzdCO0FBRUEsVUFBTXlTLHlCQUF5QixXQUFZO0FBQzFDLFlBQU03UyxZQUFZZ0UsSUFBSXVFLG1CQUFtQmxHLGFBQWE7QUFFdEQsVUFBSXJDLGNBQWMsbUNBQW1DO0FBQ3BELFlBQUlnRSxJQUFJNkMsWUFBWTdDLElBQUlpQixZQUFZO0FBQ25DakIsY0FBSW5GLGNBQWMrQyxLQUFLemYsT0FBT2lTLE1BQU0sY0FBYyxZQUFZLENBQUM7QUFDL0QsWUFBRWxTLFNBQVN5YixLQUFLQztBQUNoQm9HLGNBQUl1RSxtQkFBbUJuSSxLQUFLO1FBQzdCLE9BQU87QUFDTjRELGNBQUluRixjQUFjVyxNQUNqQnJkLE9BQU9pUyxNQUNOLHdCQUNBLHNCQUNELENBQ0Q7QUFDQSxjQUFJNFAsSUFBSXlELG1CQUFtQjtBQUMxQnpELGdCQUFJeUQsa0JBQWtCOUYsS0FBSyxNQUFNcUMsSUFBSXVFLGtCQUFrQjtVQUN4RDtRQUNEO01BQ0QsV0FBV3ZJLGNBQWMsZ0JBQWdCO0FBQ3hDZ0UsWUFBSW5GLGNBQWNXLE1BQ2pCcmQsT0FBT2lTLE1BQ04sMEJBQ0Esd0JBQ0QsQ0FDRDtBQUNBLFlBQUk0UCxJQUFJeUQsbUJBQW1CO0FBQzFCekQsY0FBSXlELGtCQUFrQjlGLEtBQUssTUFBTXFDLElBQUl1RSxrQkFBa0I7UUFDeEQ7TUFFRCxPQUFPO0FBQ052RSxZQUFJbkYsY0FBY1csTUFDakJyZCxPQUFPaVMsTUFBTSxXQUFXLFNBQVMsSUFBSTRQLElBQUl1RSxtQkFBbUJqRyxhQUFhLENBQzFFO0FBQ0EsWUFBSTBCLElBQUl5RCxtQkFBbUI7QUFDMUJ6RCxjQUFJeUQsa0JBQWtCOUYsS0FBSyxNQUFNcUMsSUFBSXVFLGtCQUFrQjtRQUN4RDtNQUNEO0lBQ0Q7QUFFQSxVQUFNMEcsbUJBQW1CLFdBQVk7QUFDcEMsWUFBTXBQLFdBQVdtRSxJQUFJd0UsV0FBV2hHLFlBQVksRUFBRTdEO0FBQzlDLFVBQUksQ0FBQ29ULGdCQUFnQixXQUFXL04sSUFBSTJELGtCQUFrQjlILFFBQVEsR0FBRztBQUNoRTtNQUNEO0FBRUEsWUFBTXFDLFFBQVFyQyxTQUFTZ0UsT0FBT0M7QUFDOUIsWUFBTSxDQUFDQyxJQUFJLElBQUlsRSxTQUFTc0Q7QUFDeEIsWUFBTWlQLFlBQVlyTyxLQUFLNVY7QUFDdkI2VixVQUFJeUMsVUFBVTFDLEtBQUs4RixtQkFBbUI5RixLQUFLMEM7QUFFM0MsWUFBTXFNLE1BQU1qVCxTQUFTc0QsTUFBTSxDQUFDLEVBQUV3TTtBQUM5QixVQUFJd0M7QUFDSixVQUFJWTtBQUNKLFVBQUlDO0FBQUEsVUFBQUMsYUFBQTF0QiwyQkFDYXV0QixHQUFBLEdBQUFJO0FBQUEsVUFBQTtBQUFqQixhQUFBRCxXQUFBeHRCLEVBQUEsR0FBQSxFQUFBeXRCLFNBQUFELFdBQUF2dEIsRUFBQSxHQUFBQyxRQUFzQjtBQUFBLGdCQUFYaXFCLEtBQUFzRCxPQUFBcnRCO0FBRVYsY0FBSStwQixHQUFHdm5CLFNBQVMsVUFBVSxDQUFDdW5CLEdBQUd1RCxRQUFRO0FBQ3JDaEIsdUJBQVd2QztVQUNaLFdBQVdBLEdBQUd2bkIsU0FBUyxRQUFRO0FBQzlCMHFCLHVCQUFXbkQ7VUFDWixXQUFXQSxHQUFHdm5CLFNBQVMsVUFBVTtBQUNoQzJxQix5QkFBYXBEO1VBQ2Q7UUFDRDtNQUFBLFNBQUF2cEIsS0FBQTtBQUFBNHNCLG1CQUFBM3NCLEVBQUFELEdBQUE7TUFBQSxVQUFBO0FBQUE0c0IsbUJBQUExc0IsRUFBQTtNQUFBO0FBRUEsVUFBSSxDQUFDeWQsSUFBSTRCLGVBQWV1TSxVQUFVO0FBQ2pDbk8sWUFBSTRCLGNBQWM7VUFDakI3UyxPQUFPb2YsU0FBU3BmO1VBQ2hCaUIsUUFBUW1lLFNBQVNuZTtRQUNsQjtNQUNEO0FBQ0EsVUFBSSxDQUFDZ1EsSUFBSTZCLGVBQWVrTixVQUFVO0FBQ2pDL08sWUFBSTZCLGNBQWM7VUFDakI5UyxPQUFPZ2dCLFNBQVNoZ0I7VUFDaEJpQixRQUFRK2UsU0FBUy9lO1FBQ2xCO01BQ0Q7QUFDQSxVQUFJLENBQUNnUSxJQUFJOEIsaUJBQWlCa04sWUFBWTtBQUNyQ2hQLFlBQUk4QixnQkFBZ0I7VUFDbkIvUyxPQUFPaWdCLFdBQVdqZ0I7VUFDbEJpQixRQUFRZ2YsV0FBV2hmO1FBQ3BCO01BQ0Q7QUFFQSxVQUFJZ1EsSUFBSStCLG1CQUFtQixNQUFNO0FBQ2hDL0IsWUFBSStCLGlCQUFpQixDQUFDLENBQUMrTSxJQUFJbmpCLE9BQVFpZ0IsUUFBTztBQUN6QyxpQkFBT0EsR0FBR3dEO1FBQ1gsQ0FBQyxFQUFFanZCO01BQ0o7QUFHQSxVQUFJNmYsSUFBSStCLGdCQUFnQjtBQUd2QixhQUNFLENBQUMvQixJQUFJNEIsZUFDTDVCLElBQUk0QixZQUFZN1MsVUFBVSxXQUMxQixDQUFDaVIsSUFBSTZCLGVBQ0w3QixJQUFJNkIsWUFBWTlTLFVBQVUsWUFDM0IsQ0FBQ3lXLFFBQ0FybkIsT0FBT2lTLE1BQU0sUUFBUSxNQUFNLElBQzFCNFAsSUFBSXpmLFdBQ0pwQyxPQUFPaVMsTUFBTSxZQUFZLFVBQVUsSUFDbkNqUyxPQUFPaVMsTUFDTix3QkFDQSxzQkFDRCxJQUNBalMsT0FBT2lTLE1BQ04sZ0NBQ0EsOEJBQ0QsQ0FDRixHQUNDO0FBQ0Q0UCxjQUFJbkYsY0FBY1csTUFBTXJkLE9BQU9pUyxNQUFNLFlBQVksVUFBVSxDQUFDO0FBQzVENFAsY0FBSTJELGlCQUFpQixJQUFJO0FBQ3pCO1FBQ0Q7QUFDQTNELFlBQUk0QixZQUFZN1MsUUFBUTtBQUN4QmlSLFlBQUk2QixZQUFZOVMsUUFBUTtNQUN6QjtBQUVBLFlBQU1zZ0IsY0FBYyxDQUFBO0FBQ3BCLFlBQU1DLFVBQVUsQ0FBQTtBQUNoQixVQUFJdFAsSUFBSTRCLGFBQWE7QUFDcEJ5TixvQkFBWXhyQixLQUFBLFFBQUE3QyxPQUFhZ2YsSUFBSTRCLFlBQVk3UyxLQUFLLENBQUU7QUFDaER1Z0IsZ0JBQVF6ckIsS0FBS21jLElBQUk0QixZQUFZNVIsTUFBTTtNQUNwQztBQUNBLFVBQUlnUSxJQUFJNkIsYUFBYTtBQUNwQndOLG9CQUFZeHJCLEtBQUEsUUFBQTdDLE9BQWFnZixJQUFJNkIsWUFBWTlTLEtBQUssQ0FBRTtBQUNoRHVnQixnQkFBUXpyQixLQUFLbWMsSUFBSTZCLFlBQVk3UixNQUFNO01BQ3BDO0FBQ0EsVUFBSWdRLElBQUk4QixlQUFlO0FBQ3RCdU4sb0JBQVl4ckIsS0FBQSxVQUFBN0MsT0FBZWdmLElBQUk4QixjQUFjL1MsS0FBSyxDQUFFO0FBQ3BEdWdCLGdCQUFRenJCLEtBQUttYyxJQUFJOEIsY0FBYzlSLE1BQU07TUFDdEM7QUFDQSxZQUFNMkssUUFBUTtRQUNiYyxRQUFRO1FBQ1J0UixPQUFPaWtCO1FBQ1BsUTtRQUNBbVIsYUFBYUEsWUFBWXJyQixLQUFLLEdBQUc7UUFDakNnTSxRQUFRc2YsUUFBUXRyQixLQUFLLEdBQUc7UUFDeEJ3TCxRQUFRd1EsSUFBSUU7UUFDWnlGLFdBQVczRixJQUFJbUI7UUFDZnpLLFFBQVE7TUFDVDtBQUVBLFVBQUlzSixJQUFJRyxZQUFZO0FBQ25CeEYsY0FBTWUsT0FBT3NFLElBQUlHO01BQ2xCO0FBQ0EsVUFBSXlGLHVCQUF1QixHQUFHO0FBQzdCakwsY0FBTWtMLGtCQUFrQjdGLElBQUlvQjtNQUM3QjtBQUNBLFVBQUlwQixJQUFJK0IsZ0JBQWdCO0FBQ3ZCcEgsY0FBTXlVLFVBQVU7TUFDakI7QUFDQXBQLFVBQUl5RSxvQkFBb0IsSUFBSXZtQixTQUFTeWIsS0FBS2MsSUFDekN0YyxPQUFPaVMsTUFBTSxVQUFVLFFBQVEsR0FDL0J1SyxPQUNBcUYsSUFBSTBELGtCQUNKMUQsSUFBSW5GLGVBQ0ptRixJQUFJMkQsZ0JBQ0w7QUFDQTNELFVBQUl5RSxrQkFBa0J0SSxVQUFVLElBQUk7QUFDcEM2RCxVQUFJeUUsa0JBQWtCckksS0FBSztJQUM1QjtBQUNBLFVBQU02USxRQUFTc0Msa0JBQWlCO0FBQy9CLFlBQU1DLFdBQVd2eEIsRUFBRTRmLFNBQVM7QUFDNUIxRCxpQkFBV3FWLFNBQVNDLFNBQVNGLFlBQVk7QUFDekMsYUFBT0M7SUFDUjtFQUNEO0FBZ0JBdHhCLFdBQVN5YixLQUFLK1YsVUFBVSxTQUFVQyxZQUFZO0FBQzdDLFNBQUtBLGFBQWFBO0FBQ2xCMXhCLE1BQUUweEIsVUFBVSxFQUFFQyxTQUFTLHFCQUFxQixFQUFFQyxLQUFLO0FBVW5ELFNBQUtDLGNBQWMsQ0FBQzVRLFVBQVVrUCxXQUFXMkIsaUJBQWlCO0FBQ3pEOXhCLFFBQUUweEIsVUFBVSxFQUFFSyxLQUFLO0FBQ25CLFlBQU1DLGFBQWFqd0IsU0FBU3lGLGNBQWMsTUFBTTtBQUNoRGtxQixpQkFBVzV0QixZQUFZa3VCLFVBQVU7QUFDakMveEIsZUFBUzhiLE9BQU9rVyxLQUFLRCxVQUFVO0FBRS9CLFVBQUkxdkIsV0FBV25CLEdBQUdDLE9BQU9DLElBQUksWUFBWTtBQUN6QyxVQUFJRixHQUFHQyxPQUFPQyxJQUFJLG9CQUFvQixNQUFNLFlBQVk7QUFDdkRpQixtQkFBQSxTQUFBUyxPQUFvQlQsUUFBUTtNQUM3QjtBQUNBLFlBQU1vYSxRQUFRO1FBQ2JjLFFBQVE7UUFDUmlELE1BQU0sQ0FBQyxRQUFRLFNBQVM7UUFDeEJ5UixLQUFLOztRQUVMVCxTQUFTO1FBQ1RsdEIsTUFBTTBjO1FBQ04vVSxPQUFPaWtCLGFBQWE3dEI7UUFDcEI2dkIsb0JBQW9CO1FBQ3BCQyxvQkFBb0I7UUFDcEJuVixTQUFTOWIsR0FBR0MsT0FBT0MsSUFBSSxnQkFBZ0I7O1FBRXZDb1gsUUFBUTtNQUNUO0FBQ0EsVUFBSXFaLGNBQWM7QUFDakJwVixjQUFNbUwsVUFBVTtBQUNoQm5MLGNBQU15TCxlQUFlMko7TUFDdEI7QUFDQSxZQUFNTyxZQUFZLElBQUlweUIsU0FBU3liLEtBQUtjLElBQ25DdGMsT0FBT2lTLE1BQU0sU0FBUyxPQUFPLEdBQzdCdUssT0FDQTRWLGlCQUNBLElBQUlyeUIsU0FBUzhiLE9BQU83YixPQUFPaVMsTUFBTSxNQUFNLElBQUksQ0FBQyxDQUM3QztBQUNBa2dCLGdCQUFVbFUsS0FBSztJQUNoQjtBQUNBLFVBQU1tVSxrQkFBbUJ2UixZQUFXO0FBQ25DLFlBQU1uRCxXQUFXbUQsT0FBT1IsWUFBWTtBQUNwQyxZQUFNakIsT0FBTzFCLFNBQVMyRCxNQUFNaGQ7QUFDNUIsVUFBSSxDQUFDK2EsTUFBTTtBQUNWeUIsZUFBTzFELFNBQVNFLE1BQU1yZCxPQUFPaVMsTUFBTSxnQkFBZ0IsY0FBYyxDQUFDO0FBQ2xFO01BQ0Q7QUFDQXVmLGlCQUFXYSxZQUFZalQ7QUFDdkJuZSxTQUFHcXhCLE9BQU85TCxLQUFLOUksU0FBUzJELE1BQU1rUixZQUFZO0FBQzFDdHhCLFNBQUdxeEIsT0FBTzlMLEtBQUs5SSxTQUFTMkQsTUFBTW1SLE9BQU87QUFFckMxeUIsUUFBRTB4QixVQUFVLEVBQUV6dkIsS0FBSyxHQUFHLEVBQUV1ZCxLQUFLLFVBQVUsUUFBUSxFQUFFQSxLQUFLLE9BQU8scUJBQXFCO0lBQ25GO0FBRUEsU0FBS21ULGVBQWUsTUFBTTtBQUN6QjN5QixRQUFFMHhCLFVBQVUsRUFBRWtCLE1BQU0sRUFBRWhCLEtBQUs7SUFDNUI7RUFDRDtBQVFBM3hCLFdBQVNnaEIsV0FBVyxDQUFDO0FBU3JCaGhCLFdBQVNnaEIsU0FBUzRSLGdCQUFnQixDQUFDdHVCLE1BQU1vTSxVQUFVO0FBQ2xEQSxjQUFBQSxRQUFVO0FBQ1YsVUFBTUcsUUFBUSxDQUFBO0FBQ2QsUUFBSWdpQixRQUFRO0FBQ1osUUFBSUMsVUFBVTtBQUNkLFFBQUlDLFNBQVM7QUFDYixRQUFJMXJCLFVBQVU7QUFDZCxVQUFNaUUsU0FBUztNQUNkN0YsTUFBTTtNQUNOdXRCLFlBQVksQ0FBQztJQUNkO0FBQ0EsUUFBSUM7QUFDSixRQUFJdHZCO0FBT0osVUFBTXV2QixZQUFhQyxXQUFVO0FBRTVCLFVBQUlOLFVBQVUsSUFBSTtBQUNqQnZuQixlQUFPN0YsT0FBTzRCLFFBQVEzRSxNQUFNLENBQUMsRUFBRXNLLEtBQUs7QUFDcEMsVUFBRTZsQjtNQUNILFdBQVdFLFdBQVcsSUFBSTtBQUd6QixjQUFNemQsUUFBUTZkLFFBQVE5ckIsUUFBUTNFLE1BQU1xd0IsU0FBUyxHQUFHLEVBQUUsSUFBSTFyQjtBQUN0RCxZQUFJaU8sT0FBTztBQUNWaEssaUJBQU8wbkIsV0FBVyxFQUFFRixPQUFPLElBQUl4ZDtBQUMvQixZQUFFdWQ7UUFDSDtNQUNELE9BQU87QUFFTkksY0FBTTVyQixRQUFRM0UsTUFBTSxHQUFHb1EsS0FBSzdJLElBQUksR0FBRzhvQixNQUFNLENBQUMsRUFBRS9sQixLQUFLO0FBQ2pEckosZ0JBQVF3dkIsUUFBUTlyQixRQUFRM0UsTUFBTXF3QixTQUFTLEdBQUcsRUFBRSxFQUFFL2xCLEtBQUssSUFBSTNGLFFBQVEzRSxNQUFNb1EsS0FBSzdJLElBQUksR0FBRzhvQixTQUFTLENBQUMsQ0FBQyxFQUFFL2xCLEtBQUs7QUFDbkcxQixlQUFPMG5CLFdBQVdDLEdBQUcsSUFBSXR2QjtBQUN6Qm92QixpQkFBUztNQUNWO0lBQ0Q7QUFDQSxhQUFTL3JCLElBQUkwSixPQUFPMUosSUFBSTFDLEtBQUtyQyxRQUFRLEVBQUUrRSxHQUFHO0FBQ3pDLFlBQU1vc0IsUUFBUTl1QixLQUFLNUIsTUFBTXNFLEdBQUdBLElBQUksQ0FBQztBQUNqQyxVQUFJb3NCLFVBQVUsU0FBVUEsVUFBVSxTQUFTdmlCLE1BQU16RSxHQUFHLEVBQUUsTUFBTSxHQUFJO0FBQy9EL0UsbUJBQVcrckI7QUFDWHBzQixhQUFLO0FBQ0wsWUFBSW9zQixVQUFVLE9BQU87QUFDcEJ2aUIsZ0JBQU1sTCxLQUFLLENBQUM7UUFDYixPQUFPO0FBQ05rTCxnQkFBTThjLElBQUk7UUFDWDtBQUNBO01BQ0Q7QUFDQSxZQUFNMEYsUUFBUS91QixLQUFLNUIsTUFBTXNFLEdBQUdBLElBQUksQ0FBQztBQUVqQyxVQUFJcXNCLFVBQVUsUUFBUUEsVUFBVSxNQUFNO0FBQ3JDaHNCLG1CQUFXZ3NCO0FBQ1gsVUFBRXJzQjtBQUNGLFlBQUlxc0IsVUFBVSxNQUFNO0FBQ25CeGlCLGdCQUFNbEwsS0FBSyxDQUFDO1FBQ2IsT0FBTztBQUNOa0wsZ0JBQU1sTCxLQUFLLElBQUk7UUFDaEI7QUFDQTtNQUNEO0FBRUEsVUFBSzB0QixVQUFVLFFBQVF4aUIsTUFBTXpFLEdBQUcsRUFBRSxNQUFNLEtBQU9pbkIsVUFBVSxRQUFReGlCLE1BQU16RSxHQUFHLEVBQUUsTUFBTSxNQUFPO0FBQ3hGL0UsbUJBQVdnc0I7QUFDWCxVQUFFcnNCO0FBQ0Y2SixjQUFNOGMsSUFBSTtBQUVWLFlBQUkwRixVQUFVLFFBQVF4aUIsTUFBTTVPLFdBQVcsR0FBRztBQUN6Q2l4QixvQkFBVSxJQUFJO0FBQ2Q7UUFDRDtBQUNBO01BQ0Q7QUFDQSxVQUFJNXVCLEtBQUtndkIsT0FBT3RzQixDQUFDLE1BQU0sT0FBTzZKLE1BQU01TyxXQUFXLEdBQUc7QUFFakRpeEIsa0JBQVU7QUFDVjdyQixrQkFBVTtNQUNYLFdBQVcwckIsV0FBVyxNQUFNenVCLEtBQUtndkIsT0FBT3RzQixDQUFDLE1BQU0sT0FBTzZKLE1BQU01TyxXQUFXLEdBQUc7QUFFekU4d0IsaUJBQVMxckIsUUFBUXBGO0FBQ2pCb0YsbUJBQVcvQyxLQUFLZ3ZCLE9BQU90c0IsQ0FBQztNQUN6QixPQUFPO0FBRU5LLG1CQUFXL0MsS0FBS2d2QixPQUFPdHNCLENBQUM7TUFDekI7SUFDRDtBQUNBLFdBQU9zRTtFQUNSO0FBUUF0TCxXQUFTZ2hCLFNBQVNhLE9BQU8sU0FBVXZkLE1BQU07QUFDeEMsU0FBS0EsT0FBT0E7RUFDYjtBQUNBdEUsV0FBU2doQixTQUFTYSxLQUFLemIsWUFBWTtJQUNsQzlCLE1BQU07Ozs7Ozs7SUFPTml2QixXQUFXQyxZQUFZO0FBQ3RCLFlBQU1DLFVBQVV2eUIsR0FBR3lCLE1BQU0rd0IsWUFBWUYsVUFBVTtBQUMvQyxZQUFNRyxjQUFjRixRQUFRRyxlQUFlO0FBQzNDLFlBQU0zbkIsUUFBUXduQixRQUFRSSxZQUFZO0FBQ2xDLFVBQUlDLGtCQUFrQjtBQUN0QixVQUFJSCxnQkFBZ0IsR0FBRztBQUN0QkcsMEJBQUEsR0FBQWh4QixPQUFxQjlDLFNBQVNpRixlQUFlMHVCLFdBQVcsR0FBQyxHQUFBO01BQzFEO0FBQ0FHLHlCQUFtQjl6QixTQUFTb0MsY0FBYzZKLEtBQUs7QUFHL0MsWUFBTThuQixtQkFBbUIsQ0FBQyxHQUFHLEVBQUUsRUFBRTF5QixTQUFTc3lCLFdBQVc7QUFDckQsWUFBTUssUUFBUUQsbUJBQW1CLE1BQU07QUFDdkMsWUFBTUUsa0JBQWtCLElBQUlyZ0IsT0FBQSxTQUFBOVEsT0FBZ0JreEIsT0FBSyxHQUFBLEVBQUFseEIsT0FBSWd4QixpQkFBZSxTQUFBLEdBQVcsR0FBRztBQUNsRixZQUFNSSxpQkFBaUIsSUFBSXRnQixPQUFBLFNBQUE5USxPQUFnQmt4QixLQUFLLEVBQUFseEIsT0FBR2d4QixpQkFBZSxnQkFBQSxHQUFrQixHQUFHO0FBQ3ZGLFdBQUt4dkIsT0FBTyxLQUFLQSxLQUFLbkMsUUFBUTh4QixpQkFBaUIsSUFBSSxFQUFFOXhCLFFBQVEreEIsZ0JBQWdCLElBQUk7QUFDakYsYUFBTztJQUNSOzs7Ozs7Ozs7SUFTQUMsZ0JBQWdCQyxPQUFPOWlCLFFBQVE7QUFDOUIsWUFBTTlNLFdBQVcsSUFBSXhFLFNBQVN3RSxTQUFTLEtBQUtGLElBQUk7QUFDaERFLGVBQVNDLE9BQU8sUUFBUSxLQUFLO0FBQzdCNk0sZUFBU0EsU0FBQSxHQUFBeE8sT0FBWXdPLFFBQU0sSUFBQSxJQUFPO0FBQ2xDLFlBQU0raUIsbUJBQW1CcjBCLFNBQVNvQyxjQUFjZ3lCLEtBQUs7QUFHckQsWUFBTUUsYUFBYSxJQUFJMWdCLE9BQUEsU0FBQTlRLE9BQ2I5QyxTQUFTaUYsZUFBZSxDQUFDLEdBQUMsT0FBQSxFQUFBbkMsT0FBUXV4QixrQkFBZ0IscUJBQUEsQ0FDNUQ7QUFDQSxZQUFNRSxXQUFXdjBCLFNBQVN3QyxPQUFPaU8sb0JBQW9Cak0sU0FBU0UsU0FBUyxNQUFNLElBQUk7QUFBQSxVQUFBOHZCLGFBQUFueEIsMkJBQzNEa3hCLFFBQUEsR0FBQUU7QUFBQSxVQUFBO0FBQXRCLGFBQUFELFdBQUFqeEIsRUFBQSxHQUFBLEVBQUFreEIsU0FBQUQsV0FBQWh4QixFQUFBLEdBQUFDLFFBQWdDO0FBQUEsZ0JBQXJCaXhCLFVBQUFELE9BQUE5d0I7QUFDVixjQUFJMndCLFdBQVd6Z0IsS0FBSzZnQixPQUFPLEdBQUc7QUFDN0Isa0JBQU05a0IsY0FBQSxRQUFBOU0sT0FBc0J3TyxNQUFNLEVBQUF4TyxPQUFHNHhCLFNBQU8sTUFBQTtBQUM1Q2x3QixxQkFBU0UsVUFBVUYsU0FBU0UsUUFBUXZDLFFBQVF1eUIsU0FBUzlrQixXQUFXO0FBRWhFcEwscUJBQVNDLE9BQU8sUUFBUSxLQUFLO1VBQzlCO1FBQ0Q7TUFBQSxTQUFBTixLQUFBO0FBQUFxd0IsbUJBQUFwd0IsRUFBQUQsR0FBQTtNQUFBLFVBQUE7QUFBQXF3QixtQkFBQW53QixFQUFBO01BQUE7QUFJQSxZQUFNc3dCLG9CQUFvQixJQUFJL2dCLE9BQUEsU0FBQTlRLE9BQ3BCOUMsU0FBU2lGLGVBQWUsQ0FBQyxHQUFDLE9BQUEsRUFBQW5DLE9BQVF1eEIsa0JBQWdCLG9CQUFBLEdBQzNELElBQ0Q7QUFDQTd2QixlQUFTRSxVQUFVRixTQUFTRSxRQUFRdkMsUUFBUXd5QixtQkFBQSxRQUFBN3hCLE9BQTJCd08sUUFBTSxRQUFBLENBQVE7QUFFckY5TSxlQUFTQyxPQUFPLFFBQVEsS0FBSztBQUc3QixZQUFNbXdCLGlCQUFpQixJQUFJaGhCLE9BQUEsbUNBQUE5USxPQUNTOUMsU0FBU2lGLGVBQWUsQ0FBQyxHQUFDLFNBQUEsRUFBQW5DLE9BQVV1eEIsa0JBQWdCLEdBQUEsR0FDdkYsSUFDRDtBQUNBN3ZCLGVBQVNFLFVBQVVGLFNBQVNFLFFBQVF2QyxRQUFReXlCLGdCQUFBLFFBQUE5eEIsT0FBd0J3TyxRQUFNLFFBQUEsQ0FBUTtBQUVsRixXQUFLaE4sT0FBT0UsU0FBU1EsT0FBTztBQUM1QixhQUFPO0lBQ1I7Ozs7Ozs7O0lBUUE2dkIsa0JBQWtCVCxPQUFPM3RCLE1BQU07QUFDOUIsWUFBTTR0QixtQkFBbUJyMEIsU0FBU29DLGNBQWNneUIsS0FBSztBQUNyRCxZQUFNRSxhQUFhLElBQUkxZ0IsT0FBQSxTQUFBOVEsT0FDYjlDLFNBQVNpRixlQUFlLENBQUMsR0FBQyxPQUFBLEVBQUFuQyxPQUFRdXhCLGtCQUFnQixxQkFBQSxDQUM1RDtBQUNBLFlBQU1FLFdBQVd2MEIsU0FBU3dDLE9BQU9pTyxvQkFBb0IsS0FBS25NLE1BQU0sTUFBTSxJQUFJO0FBQUEsVUFBQXd3QixjQUFBenhCLDJCQUNsRGt4QixRQUFBLEdBQUFRO0FBQUEsVUFBQTtBQUF4QixhQUFBRCxZQUFBdnhCLEVBQUEsR0FBQSxFQUFBd3hCLFVBQUFELFlBQUF0eEIsRUFBQSxHQUFBQyxRQUFrQztBQUFBLGNBQXpCbU0sY0FBQW1sQixRQUFBcHhCO0FBQ1IsY0FBSTJ3QixXQUFXemdCLEtBQUtqRSxXQUFXLEdBQUc7QUFFakNBLDBCQUFjQSxZQUFZek4sUUFBUSxTQUFBLElBQUFXLE9BQWEyRCxNQUFJLElBQUEsQ0FBSTtBQUN2RCxpQkFBS25DLE9BQU8sS0FBS0EsS0FBS25DLFFBQVF5TixhQUFhQSxXQUFXO1VBQ3ZEO1FBQ0Q7TUFBQSxTQUFBekwsS0FBQTtBQUFBMndCLG9CQUFBMXdCLEVBQUFELEdBQUE7TUFBQSxVQUFBO0FBQUEyd0Isb0JBQUF6d0IsRUFBQTtNQUFBO0FBQ0EsWUFBTTJ3QixlQUFlLElBQUlwaEIsT0FBQSxTQUFBOVEsT0FBZ0J1eEIsa0JBQWdCLGdCQUFBLEdBQWtCLElBQUk7QUFDL0UsWUFBTVksVUFBQSxTQUFBbnlCLE9BQW1CMkQsSUFBSTtBQUM3QixXQUFLbkMsT0FBTyxLQUFLQSxLQUFLbkMsUUFBUTZ5QixjQUFjQyxPQUFPO0FBQ25ELGFBQU87SUFDUjs7Ozs7Ozs7SUFRQUMsZUFBZUMsVUFBVTtBQUN4QixZQUFNQyxzQkFBc0JwMUIsU0FBU29DLGNBQWMreUIsUUFBUTtBQUMzRCxZQUFNYixhQUFhLElBQUkxZ0IsT0FBQSxZQUFBOVEsT0FDVjlDLFNBQVNpRixlQUFlLEVBQUUsR0FBQyxTQUFBLEVBQUFuQyxPQUFVc3lCLHFCQUFtQixxQkFBQSxDQUNyRTtBQUNBLFlBQU1DLGVBQWVyMUIsU0FBU3dDLE9BQU9pTyxvQkFBb0IsS0FBS25NLE1BQU0sTUFBTSxNQUFNLENBQUMsT0FBTyxLQUFLLENBQUM7QUFBQSxVQUFBZ3hCLGNBQUFqeUIsMkJBQ3BFZ3lCLFlBQUEsR0FBQUU7QUFBQSxVQUFBO0FBQTFCLGFBQUFELFlBQUEveEIsRUFBQSxHQUFBLEVBQUFneUIsVUFBQUQsWUFBQTl4QixFQUFBLEdBQUFDLFFBQXdDO0FBQUEsZ0JBQTdCK3hCLGNBQUFELFFBQUE1eEI7QUFDVixjQUFJMndCLFdBQVd6Z0IsS0FBSzJoQixXQUFXLEdBQUc7QUFDakMsaUJBQUtseEIsT0FBTyxLQUFLQSxLQUFLbkMsUUFBUXF6QixhQUFhLEVBQUU7VUFDOUM7UUFDRDtNQUFBLFNBQUFyeEIsS0FBQTtBQUFBbXhCLG9CQUFBbHhCLEVBQUFELEdBQUE7TUFBQSxVQUFBO0FBQUFteEIsb0JBQUFqeEIsRUFBQTtNQUFBO0FBQ0EsYUFBTztJQUNSOzs7Ozs7Ozs7Ozs7Ozs7SUFlQW94QixxQkFBcUJqRyxLQUFLcHFCLE9BQU9zd0IsT0FBT0MsVUFBVTtBQUNqRCxVQUFJbkcsUUFBUSxRQUFXO0FBQ3RCLGNBQU0sSUFBSXZlLFVBQVUsaUJBQWlCO01BQ3RDO0FBR0EsVUFBSTdMLFVBQVUsVUFBYSxDQUFDQSxNQUFNbkQsUUFBUTtBQUN6QyxjQUFNLElBQUkySixNQUFNLG1CQUFtQjtNQUNwQyxXQUFXbUYsTUFBTUMsUUFBUTVMLEtBQUssR0FBRztBQUNoQ0EsZ0JBQVFBLE1BQU1VLEtBQUssR0FBRztNQUN2QjtBQUNBLFVBQUksT0FBTzR2QixVQUFVLFVBQVU7QUFDOUJBLGdCQUFRO01BQ1Q7QUFDQSxVQUFJLENBQUNDLFlBQVksQ0FBQ0EsU0FBUzF6QixRQUFRO0FBQ2xDMHpCLG1CQUFXO01BQ1osV0FBVzVrQixNQUFNQyxRQUFRMmtCLFFBQVEsR0FBRztBQUNuQ0EsbUJBQVdBLFNBQVM3dkIsS0FBSyxHQUFHO01BQzdCO0FBR0EsV0FBS3hCLE9BQU8sS0FBS0EsS0FBS25DLFFBQ3JCLElBQUl5Ujs7Ozs7Ozs7Ozs7O1FBQUEsbUJBQUE5UTs7VUFjRjZ5QjtVQUNEO1FBQUEsRUFBQTd5Qjs7VUFFQ3NDO1VBQ0Q7UUFBQTtRQUNBc3dCO01BQ0QsR0FBQSxLQUFBNXlCLE9BQ0swc0IsR0FBRyxDQUNUO0FBQ0EsYUFBTztJQUNSOzs7Ozs7SUFNQW9HLFVBQVU7QUFDVCxhQUFPLEtBQUt0eEI7SUFDYjtFQUNEO0FBVUF0RSxXQUFTNjFCLGtCQUFrQixTQUFVQyxhQUFhO0FBQ2pELFFBQUksQ0FBQ0EsYUFBYTtBQUNqQixZQUFNLElBQUlscUIsTUFBTSw0QkFBNEI7SUFDN0M7QUFNQSxTQUFLbXFCLGNBQWM7QUFNbkIsU0FBS0MsY0FBYztBQUNuQixTQUFLL1QsYUFBYTtBQVFsQixTQUFLaE0sTUFBTSxTQUFVZ2dCLFNBQVNDLGFBQWE7QUFDMUMsWUFBTUMsTUFBTXAyQixFQUFFNGYsU0FBUztBQUN2QixVQUFJLENBQUNzVyxTQUFTO0FBQ2IsZUFBT0UsSUFBSUMsT0FBTztNQUNuQjtBQUNBLFlBQU12VSxPQUFPLElBQUk3aEIsU0FBU3liLEtBQUtvRyxLQUFBLFFBQUEvZSxPQUN0QjVCLEdBQUdDLE9BQU9DLElBQUksWUFBWSxHQUFDLEdBQUEsRUFBQTBCLE9BQUlnekIsV0FBVyxHQUNsRDcxQixPQUFPaVMsTUFBTSxnQkFBZ0IsZUFBZSxDQUM3QztBQUNBMlAsV0FBSzRFLEtBQU15RyxhQUFZO0FBRXRCLFlBQUk1b0IsT0FBTzRvQixRQUFRckUsWUFBWSxLQUFLLEtBQUtrTjtBQUV6QyxjQUFNbjFCLE9BQU8sSUFBSVosU0FBU1ksS0FBS3NzQixRQUFRN0IsWUFBWSxDQUFDO0FBQ3BELFlBQUksQ0FBQ3pxQixLQUFLcWEsaUJBQWlCLEVBQUV4YSxLQUFLNkQsSUFBSSxHQUFHO0FBQ3hDQSxrQkFBQSxPQUFBeEIsT0FBZWxDLEtBQUt1YSxZQUFZLEtBQUs2YSxXQUFXLENBQUM7UUFDbEQ7QUFDQTlJLGdCQUFRcEUsWUFBQSxHQUFBaG1CLE9BQWV3QixNQUFJLElBQUEsRUFBQXhCLE9BQUttekIsT0FBTyxDQUFFO0FBQ3pDL0ksZ0JBQVEvRCxlQUFlK00sV0FBVztBQUNsQ2hKLGdCQUFROUQsY0FBYyxLQUFLbkgsVUFBVTtBQUNyQ2lMLGdCQUFRN0QsZ0JBQWdCLFVBQVU7QUFDbEM2RCxnQkFBUS9GLEtBQUtnUCxJQUFJNUUsU0FBUzRFLElBQUlDLE1BQU07TUFDckMsQ0FBQztBQUNELGFBQU9EO0lBQ1I7RUFDRDtBQWVBbjJCLFdBQVM4YixTQUFTLFNBQVV4WCxNQUFNK3hCLE1BQU1sd0IsTUFBTTtBQUM3QyxTQUFLbXdCLFVBQVVoeUI7QUFDZixTQUFLQSxPQUFPdEUsU0FBUytDLFdBQVd1QixJQUFJO0FBQ3BDLFNBQUs2QixPQUFPQSxRQUFRO0FBQ3BCLFNBQUtvd0IsU0FBUztBQUNkLFFBQUlGLE1BQU07QUFDVCxXQUFLRyxPQUFPSCxNQUFNbHdCLElBQUk7SUFDdkI7RUFDRDtBQVFBbkcsV0FBUzhiLE9BQU9rVyxPQUFROXJCLFVBQVM7QUFDaEMsUUFBSSxFQUFFQSxnQkFBZ0J1d0IsVUFBVTtBQUMvQixZQUFNLElBQUl4bEIsVUFBVSxtQ0FBbUM7SUFDeEQ7QUFDQSxXQUFPL0ssS0FBS3d3QixjQUFjLEdBQUc7QUFDNUJ4d0IsV0FBS2tELFlBQVlsRCxLQUFLK0gsVUFBVTtJQUNqQztBQUNBak8sYUFBUzhiLE9BQU81VixPQUFPQTtBQUN2QmxHLGFBQVM4YixPQUFPNmEsYUFBYTtFQUM5QjtBQUNBMzJCLFdBQVM4YixPQUFPNVYsT0FBTztBQU12QmxHLFdBQVM4YixPQUFPYyxVQUFXZ2EsYUFBWTtBQUN0QyxRQUFJLE9BQU9BLFlBQVksWUFBWTtBQUNsQzUyQixlQUFTOGIsT0FBTzZhLGFBQWFDO0lBQzlCLE9BQU87QUFDTixZQUFNLElBQUkzbEIsVUFBVSxvREFBb0Q7SUFDekU7RUFDRDtBQUNBalIsV0FBUzhiLE9BQU8xVixZQUFZO0lBQzNCaXdCLE1BQU07SUFDTlEsU0FBUztJQUNUdnlCLE1BQU07SUFDTmd5QixTQUFTO0lBQ1Rud0IsTUFBTTtJQUNOdkIsUUFBUTtJQUNSVixNQUFNO0lBQ040eUIsUUFBUTs7SUFFUm5JLE9BQU87QUFDTixVQUFJLENBQUMsS0FBS21JLFVBQVU5MkIsU0FBUzhiLE9BQU81VixNQUFNO0FBQ3pDbEcsaUJBQVM4YixPQUFPNVYsS0FBS3JDLFlBQVksS0FBS0ssSUFBSTtBQUMxQyxhQUFLNHlCLFNBQVM7TUFDZjtJQUNEOztJQUVBL1YsU0FBUztBQUNSLFVBQUksS0FBSytWLFFBQVE7QUFDaEI5MkIsaUJBQVM4YixPQUFPNVYsS0FBS2tELFlBQVksS0FBS2xGLElBQUk7QUFDMUMsYUFBSzR5QixTQUFTO01BQ2Y7SUFDRDs7Ozs7Ozs7SUFRQU4sT0FBTzFhLFFBQVEzVixNQUFNO0FBQ3BCLFdBQUswd0IsVUFBVS9hO0FBQ2YsV0FBS3VhLE9BQU9yMkIsU0FBUytDLFdBQVcrWSxNQUFNO0FBQ3RDLFVBQUkzVixNQUFNO0FBQ1QsYUFBS0EsT0FBT0E7QUFDWixZQUFJQSxTQUFTLFNBQVM7QUFFckJuRyxtQkFBU3liLEtBQUtDLHNCQUFzQjtBQUVwQyxjQUFJMWIsU0FBUzhiLE9BQU82YSxZQUFZO0FBQy9CMzJCLHFCQUFTOGIsT0FBTzZhLFdBQVc7VUFDNUI7QUFFQWwxQixrQkFBUTZiLE1BQUEsY0FBQXhhLE9BQW9CLEtBQUt3ekIsU0FBTyxJQUFBLEVBQUF4ekIsT0FBSyxLQUFLK3pCLE9BQU8sQ0FBRTtRQUM1RDtNQUNEO0FBQ0EsV0FBS3h3QixPQUFPO0lBQ2I7O0lBRUFrd0IsV0FBVztBQUNWLFdBQUtyeUIsT0FBT3BDLFNBQVN5RixjQUFjLEtBQUs7QUFDeEMsV0FBS3JELEtBQUtMLFlBQVkvQixTQUFTeUYsY0FBYyxNQUFNLENBQUMsRUFBRTFELFlBQVksS0FBS1MsSUFBSTtBQUMzRSxXQUFLSixLQUFLTCxZQUFZL0IsU0FBU3lGLGNBQWMsTUFBTSxDQUFDLEVBQUUxRCxZQUFZL0IsU0FBU3FHLGVBQWUsSUFBSSxDQUFDO0FBQy9GLFdBQUt2RCxTQUFTLEtBQUtWLEtBQUtMLFlBQVkvQixTQUFTeUYsY0FBYyxNQUFNLENBQUM7QUFDbEUsV0FBSzNDLE9BQU9mLFlBQVkvQixTQUFTcUcsZUFBZSxFQUFFLENBQUM7SUFDcEQ7O0lBR0E5QixTQUFTO0FBQ1IsV0FBS25DLEtBQUtzRCxZQUFBLG1CQUFBMUUsT0FBK0IsS0FBS3FELElBQUk7QUFDbEQsYUFBTyxLQUFLdkIsT0FBTzh4QixjQUFjLEdBQUc7QUFDbkMsYUFBSzl4QixPQUFPd0UsWUFBWSxLQUFLeEUsT0FBT3FKLFVBQVU7TUFDL0M7QUFDQSxXQUFLckosT0FBT2YsWUFBWSxLQUFLd3lCLElBQUk7QUFDakMsV0FBSzFILEtBQUs7SUFDWDtJQUNBN1MsT0FBT0EsUUFBUTtBQUNkLFdBQUswYSxPQUFPMWEsUUFBUSxRQUFRO0lBQzdCO0lBQ0E0RCxLQUFLNUQsUUFBUTtBQUNaLFdBQUswYSxPQUFPMWEsUUFBUSxNQUFNO0lBQzNCO0lBQ0FwYSxLQUFLb2EsUUFBUTtBQUNaLFdBQUswYSxPQUFPMWEsUUFBUSxNQUFNO0lBQzNCO0lBQ0F3QixNQUFNeEIsUUFBUTtBQUNiLFdBQUswYSxPQUFPMWEsUUFBUSxPQUFPO0lBQzVCO0VBQ0Q7QUFPQTliLFdBQVM4YixPQUFPQSxTQUFTLENBQUN4WCxNQUFNd1gsV0FBVztBQUMxQyxXQUFPLElBQUk5YixTQUFTOGIsT0FBT3hYLE1BQU13WCxNQUFNO0VBQ3hDO0FBT0E5YixXQUFTOGIsT0FBTzRELE9BQU8sQ0FBQ3BiLE1BQU13WCxXQUFXO0FBQ3hDLFdBQU8sSUFBSTliLFNBQVM4YixPQUFPeFgsTUFBTXdYLFFBQVEsTUFBTTtFQUNoRDtBQU9BOWIsV0FBUzhiLE9BQU9wYSxPQUFPLENBQUM0QyxNQUFNd1gsV0FBVztBQUN4QyxXQUFPLElBQUk5YixTQUFTOGIsT0FBT3hYLE1BQU13WCxRQUFRLE1BQU07RUFDaEQ7QUFPQTliLFdBQVM4YixPQUFPd0IsUUFBUSxDQUFDaFosTUFBTXdYLFdBQVc7QUFDekMsV0FBTyxJQUFJOWIsU0FBUzhiLE9BQU94WCxNQUFNd1gsUUFBUSxPQUFPO0VBQ2pEO0FBUUE5YixXQUFTOGIsT0FBT0Ysa0JBQW1CdFgsVUFBUztBQUMzQyxVQUFNSixPQUFPcEMsU0FBU3lGLGNBQWMsS0FBSztBQUN6Q3JELFNBQUtMLFlBQVkvQixTQUFTeUYsY0FBYyxHQUFHLENBQUMsRUFBRTFELFlBQVkvQixTQUFTcUcsZUFBZTdELElBQUksQ0FBQztBQUN2RkosU0FBS3NELFlBQVk7QUFDakIsUUFBSXhILFNBQVM4YixPQUFPNVYsTUFBTTtBQUN6QmxHLGVBQVM4YixPQUFPNVYsS0FBS3JDLFlBQVlLLElBQUk7SUFDdEM7RUFDRDtBQVNBbEUsV0FBUzhiLE9BQU9pYixnQkFBZ0IsQ0FBQ0MsVUFBVUMsWUFBWTtBQUN0RCxVQUFNQyxJQUFJcDFCLFNBQVN5RixjQUFjLEdBQUc7QUFDcEMydkIsTUFBRTVFLFlBQVkyRTtBQUNkLFVBQU1FLE1BQU1yMUIsU0FBU3lGLGNBQWMsS0FBSztBQUN4QzR2QixRQUFJM3ZCLFlBQVk7QUFDaEIydkIsUUFBSTF1QixNQUFNMnVCLFlBQVk7QUFDdEJELFFBQUkxdUIsTUFBTTR1QixhQUFhO0FBQ3ZCRixRQUFJanBCLGNBQWM4b0I7QUFDbEJFLE1BQUVyekIsWUFBWXN6QixHQUFHO0FBQ2pCbjNCLGFBQVM4YixPQUFPNVYsS0FBS3JDLFlBQVlxekIsQ0FBQztFQUNuQztBQVNBbDNCLFdBQVNzM0IsV0FBVyxDQUFDbnhCLE1BQU16QixTQUFTNnlCLFVBQVU7QUFDN0MsVUFBTXJ6QixPQUFPcEMsU0FBU3lGLGNBQWNwQixJQUFJO0FBQ3hDLFFBQUlveEIsT0FBTztBQUNWcnpCLFdBQUt1RSxNQUFNOHVCLFFBQVFBO0lBQ3BCO0FBQ0FyekIsU0FBS0wsWUFBWS9CLFNBQVNxRyxlQUFlekQsT0FBTyxDQUFDO0FBQ2pELFdBQU9SO0VBQ1I7QUFTQWxFLFdBQVNzSiw0QkFBNEIsQ0FBQ2t1QixnQkFBZ0JDLGtCQUFrQjtBQUN2RSxRQUFJQyxlQUFlO0FBQ25CLFVBQU1DLGVBQWUsU0FBU0MsY0FBYTV4QixPQUFPO0FBQ2pELFlBQU02eEIsU0FBUztBQUNmLFVBQUk3eEIsTUFBTTh4QixZQUFZSixpQkFBaUIsTUFBTTtBQUM1QyxjQUFNSyxNQUFNaDRCLEVBQUV5M0IsZ0JBQWdCQyxhQUFhO0FBQzNDLFlBQUlPLFFBQVE7QUFDWixZQUFJQyxZQUFZO0FBQ2hCLFlBQUlqeEI7QUFDSixhQUFLQSxJQUFJLEdBQUdBLElBQUkrd0IsSUFBSTkxQixRQUFRK0UsS0FBSztBQUNoQyxjQUFJK3dCLElBQUkvd0IsQ0FBQyxNQUFNNndCLFFBQVE7QUFDdEJHLG9CQUFRaHhCO0FBQ1IsZ0JBQUlpeEIsWUFBWSxJQUFJO0FBQ25CO1lBQ0Q7VUFDRDtBQUNBLGNBQUlGLElBQUkvd0IsQ0FBQyxNQUFNMHdCLGNBQWM7QUFDNUJPLHdCQUFZanhCO0FBQ1osZ0JBQUlneEIsUUFBUSxJQUFJO0FBQ2Y7WUFDRDtVQUNEO1FBQ0Q7QUFDQSxZQUFJQSxRQUFRLE1BQU1DLFlBQVksSUFBSTtBQUVqQyxnQkFBTUMsV0FBV0wsT0FBT3J2QjtBQUN4QixjQUFJa0k7QUFDSixjQUFJeW5CO0FBQ0osY0FBSUgsUUFBUUMsV0FBVztBQUN0QnZuQixvQkFBUXNuQixRQUFRO0FBQ2hCRyxxQkFBU0Y7VUFDVixPQUFPO0FBQ052bkIsb0JBQVF1bkI7QUFDUkUscUJBQVNILFFBQVE7VUFDbEI7QUFDQSxlQUFLaHhCLElBQUkwSixPQUFPMUosS0FBS214QixRQUFRbnhCLEtBQUs7QUFDakMsZ0JBQUkrd0IsSUFBSS93QixDQUFDLEVBQUV3QixZQUFZMHZCLFVBQVU7QUFDaENILGtCQUFJL3dCLENBQUMsRUFBRW94QixNQUFNO1lBQ2Q7VUFDRDtRQUNEO01BQ0Q7QUFDQVYscUJBQWVHO0FBQ2YsYUFBTztJQUNSO0FBQ0E5M0IsTUFBRXkzQixnQkFBZ0JDLGFBQWEsRUFBRVksR0FBRyxTQUFTVixZQUFZO0VBQzFEO0FBdUNBMzNCLFdBQVNzNEIsaUJBQWlCLFNBQVU5YixlQUFlO0FBQ2xELFVBQU1zRixNQUFNOztNQUVYeVcsVUFBVTtNQUNWcnBCLFNBQVM7UUFDUnNwQixXQUFXO1FBQ1hDLCtCQUErQjtNQUNoQzs7TUFFQTliLGVBQWUsSUFBSTNjLFNBQVM4YixPQUFPVSxpQkFBaUJ2YyxPQUFPaVMsTUFBTSxVQUFVLFFBQVEsQ0FBQztNQUNwRndtQixRQUFROztNQUVSQyxZQUFZOztNQUVaQyxjQUFjO01BQ2RDLGVBQWU7TUFDZkMsc0JBQXNCO01BQ3RCQyxtQkFBbUI7TUFDbkJDLFlBQVksQ0FBQTtNQUNaQyxTQUFTO0lBQ1Y7QUFFQSxTQUFLL1ksbUJBQW1CLE1BQU07QUFDN0IsYUFBTzRCLElBQUluRjtJQUNaO0FBT0EsU0FBS3VjLGNBQWVYLGNBQWE7QUFDaEN6VyxVQUFJeVcsV0FBV0E7SUFDaEI7QUFhQSxTQUFLWSxZQUFZLENBQUNDLFlBQVlDLGdCQUFnQjtBQUM3Q3ZYLFVBQUk1UyxRQUFRa3FCLFVBQVUsSUFBSUM7SUFDM0I7QUFTQSxTQUFLQyxNQUFNLENBQUNaLFFBQVFDLGVBQWU7QUFDbEMsVUFBSTdXLElBQUltWCxTQUFTO0FBQ2hCblgsWUFBSW5GLGNBQWNXLE1BQU1yZCxPQUFPaVMsTUFBTSxZQUFZLFVBQVUsQ0FBQztBQUM1RDtNQUNEO0FBQ0E0UCxVQUFJbVgsVUFBVTtBQUNkblgsVUFBSTRXLFNBQVNBO0FBQ2I1VyxVQUFJNlcsYUFBYUE7QUFDakI3VyxVQUFJOFcsZUFBZTtBQUNuQjlXLFVBQUkrVyxnQkFBZ0I7QUFDcEIvVyxVQUFJZ1gsdUJBQXVCO0FBQzNCaFgsVUFBSWlYLG9CQUFvQjtBQUN4QmpYLFVBQUlrWCxhQUFhLENBQUE7QUFDakIsWUFBTU8sUUFBUXpYLElBQUl5VyxTQUFTdDJCO0FBQzNCLFVBQUksQ0FBQ3MzQixPQUFPO0FBQ1h6WCxZQUFJbkYsY0FBYytDLEtBQUt6ZixPQUFPaVMsTUFBTSxVQUFVLFFBQVEsQ0FBQztBQUN2RDRQLFlBQUltWCxVQUFVO0FBQ2QsWUFBSW5YLElBQUk2VyxZQUFZO0FBQ25CN1csY0FBSTZXLFdBQVc7UUFDaEI7QUFDQTtNQUNEO0FBRUE3VyxVQUFJa1gsYUFBYWg1QixTQUFTc1MsTUFBTU0sTUFBTWtQLElBQUl5VyxVQUFVelcsSUFBSTVTLFFBQVFzcEIsU0FBUztBQUV6RXg0QixlQUFTeWIsS0FBS1ksY0FBYztBQUM1QnlGLFVBQUluRixjQUFjYixPQUFPLElBQUk7QUFDN0IwZCxzQkFBZ0I7SUFDakI7QUFVQSxTQUFLQyxnQkFBaUJDLFNBQVE7QUFDN0IsVUFBSUEsZUFBZTE1QixTQUFTeWIsS0FBS2MsT0FBT21kLGVBQWUxNUIsU0FBU3liLEtBQUtvRyxNQUFNO0FBRTFFLGNBQU16RSxXQUFXc2MsSUFBSXhaLGlCQUFpQjtBQUN0QyxZQUFJNEIsSUFBSTVTLFFBQVF1cEIsK0JBQStCO0FBQzlDLGNBQUlpQixJQUFJOVEsZUFBZThRLElBQUlyM0IsWUFBYXEzQixJQUFJamQsU0FBU2lkLElBQUlqZCxNQUFNeFEsT0FBUTtBQUV0RSxrQkFBTTVKLFdBQVdxM0IsSUFBSTlRLGNBQWM4USxJQUFJOVEsWUFBWSxJQUFJOFEsSUFBSXIzQixZQUFZcTNCLElBQUlqZCxNQUFNeFE7QUFDakZtUixxQkFBU3NDLEtBQUEsUUFBQTVjLE9BQWFULFVBQVEsS0FBQSxDQUFLO1VBQ3BDLE9BQU87QUFFTithLHFCQUFTc0MsS0FBSyxJQUFJO1VBQ25CO1FBQ0QsT0FBTztBQUVOdEMsbUJBQVMyRCxPQUFPO1FBQ2pCO01BQ0QsV0FBVyxPQUFPMlksUUFBUSxZQUFZNVgsSUFBSTVTLFFBQVF1cEIsK0JBQStCO0FBQ2hGLFlBQUl6NEIsU0FBUzhiLE9BQU80ZCxLQUFBLFFBQUE1MkIsT0FBYTQyQixLQUFHLEtBQUEsQ0FBSztNQUMxQztBQUNBNVgsVUFBSWdYO0FBQ0phLGdCQUFVO0lBQ1g7QUFDQSxTQUFLQyxnQkFBZ0IsTUFBTTtBQUMxQkQsZ0JBQVU7SUFDWDtBQUVBLFVBQU1FLFlBQVk7QUFDbEIsVUFBTUwsa0JBQWtCQSxNQUFNO0FBQzdCLFlBQU01bUIsUUFBUWtQLElBQUlrWCxXQUFXLEVBQUVsWCxJQUFJaVgsaUJBQWlCO0FBQ3BELFVBQUksQ0FBQ25tQixPQUFPO0FBQ1g7TUFDRDtBQUVBa1AsVUFBSThXLGdCQUFnQmhtQixNQUFNM1E7QUFBQSxVQUFBNjNCLGNBQUF6MkIsMkJBQ1B1UCxLQUFBLEdBQUFtbkI7QUFBQSxVQUFBO0FBQW5CLGFBQUFELFlBQUF2MkIsRUFBQSxHQUFBLEVBQUF3MkIsVUFBQUQsWUFBQXQyQixFQUFBLEdBQUFDLFFBQTBCO0FBQUEsZ0JBQWZvZSxPQUFBa1ksUUFBQXAyQjtBQUNWbWUsY0FBSTRXLE9BQU83VyxNQUFNZ1ksU0FBUztRQUMzQjtNQUFBLFNBQUExMUIsS0FBQTtBQUFBMjFCLG9CQUFBMTFCLEVBQUFELEdBQUE7TUFBQSxVQUFBO0FBQUEyMUIsb0JBQUF6MUIsRUFBQTtNQUFBO0lBQ0Q7QUFDQSxVQUFNczFCLFlBQVlBLE1BQU07QUFDdkI3WCxVQUFJK1c7QUFFSixZQUFNVSxRQUFRelgsSUFBSXlXLFNBQVN0MkI7QUFDM0IsVUFBSTZmLElBQUkrVyxnQkFBZ0JVLE9BQU87QUFDOUIsY0FBTVMsV0FBV2xuQixLQUFLbW5CLE1BQU8sTUFBTW5ZLElBQUkrVyxnQkFBaUJVLEtBQUs7QUFDN0R6WCxZQUFJbkYsY0FBY2IsT0FBQSxHQUFBaFosT0FBVWszQixVQUFRLEdBQUEsQ0FBRztBQUd2QyxZQUNDbFksSUFBSStXLGlCQUFpQi9XLElBQUk4VyxlQUFlOWxCLEtBQUs3SSxJQUFJNlgsSUFBSTVTLFFBQVFzcEIsWUFBWSxJQUFJLENBQUMsS0FDOUUxbEIsS0FBS29uQixNQUFNcFksSUFBSStXLGdCQUFnQi9XLElBQUk1UyxRQUFRc3BCLFNBQVMsSUFBSTFXLElBQUlpWCxtQkFDM0Q7QUFDRFMsMEJBQWdCO1FBQ2pCO01BQ0QsV0FBVzFYLElBQUkrVyxrQkFBa0JVLE9BQU87QUFDdkMsY0FBTVksZUFBQSxNQUFBcjNCLE9BQXFCZ2YsSUFBSWdYLHNCQUFvQixHQUFBLEVBQUFoMkIsT0FBSWdmLElBQUkrVyxlQUFhLFNBQUE7QUFDeEUsWUFBSS9XLElBQUlnWCx1QkFBdUJoWCxJQUFJK1csZUFBZTtBQUNqRC9XLGNBQUluRixjQUFjamIsS0FBS3k0QixZQUFZO1FBQ3BDLE9BQU87QUFDTnJZLGNBQUluRixjQUFjK0MsS0FBS3lhLFlBQVk7UUFDcEM7QUFDQSxZQUFJclksSUFBSTZXLFlBQVk7QUFDbkI3VyxjQUFJNlcsV0FBVztRQUNoQjtBQUNBMzRCLGlCQUFTeWIsS0FBS2EsaUJBQWlCO0FBQy9Cd0YsWUFBSW1YLFVBQVU7TUFDZixPQUFPO0FBR05uWCxZQUFJbkYsY0FBY2piLEtBQUEsR0FBQW9CLE9BQ2Q3QyxPQUFPaVMsTUFBTSxXQUFXLFNBQVMsS0FBSzRQLElBQUkrVyxnQkFBZ0JVLFFBQU0sSUFBQSxDQUNwRTtBQUNBdjVCLGlCQUFTeWIsS0FBS2EsaUJBQWlCO0FBQy9Cd0YsWUFBSW1YLFVBQVU7TUFDZjtJQUNEO0VBQ0Q7QUFVQWo1QixXQUFTbzZCLGVBQWUsU0FBVUMsT0FBT0MsUUFBUTtBQUNoRCxVQUFNNTFCLFVBQVU1QyxTQUFTeUYsY0FBYyxLQUFLO0FBQzVDLFNBQUs3QyxVQUFVQTtBQUNmQSxZQUFROEMsWUFBWTtBQUNwQjlDLFlBQVFpQyxLQUFBLDJCQUFBN0QsT0FBZ0NnUSxLQUFLbW5CLE1BQU1ubkIsS0FBS2lDLE9BQU8sSUFBSSxJQUFJLENBQUM7QUFDeEUsU0FBS3VsQixTQUFTQTtBQUNkdjZCLE1BQUUsS0FBSzJFLE9BQU8sRUFBRTYxQixPQUFPO01BQ3RCQyxVQUFVO01BQ1ZDLFNBQVM7UUFDUixzQkFBc0JDLE1BQU07UUFBQztNQUM5QjtNQUNBQyxhQUFhO01BQ2JOLE9BQU92bkIsS0FBSzlJLElBQUlFLE9BQU9nRyxTQUFTalEsT0FBTzI2QixZQUFZLEVBQUUsR0FBRzF3QixPQUFPZ0csU0FBU21xQixTQUFTLEtBQUssRUFBRSxDQUFDOzs7OztNQUt6RkMsUUFBUUEsU0FBUztNQUNqQk8sT0FBUTcwQixXQUFVO0FBRWpCakcsVUFBRWlHLE1BQU1wQixNQUFNLEVBQUUyMUIsT0FBTyxTQUFTLEVBQUUxdkIsT0FBTztNQUMxQztNQUNBaXdCLGNBQWM7QUFDYixTQUFDLEtBQUtDLFNBQVMsSUFBSWg3QixFQUFFLElBQUksRUFBRWlDLEtBQUsscUJBQXFCO0FBQ3JELFlBQUksS0FBSys0QixXQUFXO0FBQ25CLGVBQUtBLFVBQVV0eUIsTUFBTXV5QixZQUFZO1FBQ2xDO01BQ0Q7TUFDQUMsYUFBYTtBQUNaLGFBQUtGLFlBQVk7TUFDbEI7TUFDQUcsU0FBUztBQUNSLGFBQUt6eUIsTUFBTXV5QixZQUFZO0FBQ3ZCLFlBQUksS0FBS0QsV0FBVztBQUNuQixlQUFLQSxVQUFVdHlCLE1BQU00eEIsUUFBUTtRQUM5QjtNQUNEO0lBQ0QsQ0FBQztBQUNELFVBQU1jLFVBQVVwN0IsRUFBRSxLQUFLMkUsT0FBTyxFQUFFNjFCLE9BQU8sUUFBUTtBQUUvQ1ksWUFBUW41QixLQUFLLFFBQVEsRUFBRW81QixLQUFLLENBQUNuSSxLQUFLdHZCLFVBQVU7QUFDM0NBLFlBQU11RixXQUFXRSxZQUFZekYsS0FBSztJQUNuQyxDQUFDO0FBRUQsVUFBTTAzQixhQUFhdjVCLFNBQVN5RixjQUFjLE1BQU07QUFDaEQ4ekIsZUFBVzd6QixZQUFZO0FBQ3ZCLFVBQU04ekIsWUFBWXg1QixTQUFTeUYsY0FBYyxNQUFNO0FBQy9DK3pCLGNBQVU5ekIsWUFBWTtBQUN0QjJ6QixZQUFRbjVCLEtBQUssdUJBQXVCLEVBQUV3RSxPQUFPNjBCLFlBQVlDLFNBQVM7QUFFbEVILFlBQVFJLFVBQVUsVUFBVSxjQUFBLElBQUF6NEIsT0FBa0IsS0FBSzRCLFFBQVFpQyxJQUFFLHlCQUFBLEVBQUE3RCxPQUEwQixLQUFLNEIsUUFBUWlDLEVBQUUsQ0FBRTtFQUN6RztBQUNBM0csV0FBU282QixhQUFhaDBCLFlBQVk7SUFDakNxMEIsU0FBUyxDQUFBO0lBQ1RILFFBQVE7SUFDUmtCLGdCQUFnQjtJQUNoQkMsWUFBWTs7Ozs7O0lBTVo3bUIsUUFBUTtBQUNQN1UsUUFBRSxLQUFLMkUsT0FBTyxFQUFFNjFCLE9BQU8sV0FBVztBQUNsQyxhQUFPO0lBQ1I7Ozs7Ozs7O0lBUUFNLE1BQU03MEIsT0FBTztBQUNaLFVBQUlBLE9BQU87QUFDVkEsY0FBTTAxQixlQUFlO01BQ3RCO0FBQ0EzN0IsUUFBRSxLQUFLMkUsT0FBTyxFQUFFNjFCLE9BQU8sT0FBTztBQUM5QixhQUFPO0lBQ1I7Ozs7Ozs7SUFPQW9CLFVBQVU7QUFDVCxVQUFJLEtBQUtGLFlBQVk7QUFDcEIsY0FBTU4sVUFBVXA3QixFQUFFLEtBQUsyRSxPQUFPLEVBQUU2MUIsT0FBTyxRQUFRO0FBQy9DWSxnQkFBUW41QixLQUFLLDZCQUE2QixFQUFFNkksT0FBTztBQUNuRCxjQUFNK3dCLGlCQUFpQjk1QixTQUFTeUYsY0FBYyxNQUFNO0FBQ3BEcTBCLHVCQUFlcDBCLFlBQVk7QUFDM0JvMEIsdUJBQWUxdEIsY0FBQSxHQUFBcEwsT0FBaUIsS0FBSzI0QixZQUFVLEtBQUE7QUFDL0NOLGdCQUFRbjVCLEtBQUssa0JBQWtCLEVBQUUwbUIsUUFBUWtULGNBQWM7TUFDeEQ7QUFDQSxZQUFNckIsU0FBU3g2QixFQUFFLEtBQUsyRSxPQUFPLEVBQUU2MUIsT0FBTyxNQUFNO0FBQzVDLFVBQUl0NkIsT0FBTzQ3QixpQkFBaUI1N0IsT0FBTzY3QixNQUFNNzdCLE9BQU82N0IsR0FBRzdtQixNQUFNaFYsT0FBTzY3QixHQUFHN21CLEdBQUc4bUIsTUFBTTtBQUUzRXhCLGVBQU83YyxPQUFPLEVBQUUsQ0FBQyxFQUFFc2UsMEJBQTBCO0FBQzdDLzdCLGVBQU80N0IsY0FBY3RCLE9BQU83YyxPQUFPLEVBQUUsQ0FBQyxDQUFDO01BQ3hDO0FBQ0EsV0FBS3VlLFVBQVUsS0FBSzNCLE1BQU07QUFDMUIsYUFBTztJQUNSOzs7Ozs7O0lBT0E0QixTQUFTandCLE9BQU87QUFDZmxNLFFBQUUsS0FBSzJFLE9BQU8sRUFBRTYxQixPQUFPLFVBQVUsU0FBU3R1QixLQUFLO0FBQy9DLGFBQU87SUFDUjs7Ozs7Ozs7SUFRQWt3QixjQUFjMTJCLE1BQU07QUFDbkIsV0FBS2cyQixhQUFhaDJCO0FBQ2xCLGFBQU87SUFDUjs7Ozs7OztJQU9BMjJCLFNBQVMvQixPQUFPO0FBQ2Z0NkIsUUFBRSxLQUFLMkUsT0FBTyxFQUFFNjFCLE9BQU8sVUFBVSxTQUFTRixLQUFLO0FBQy9DLGFBQU87SUFDUjs7Ozs7Ozs7SUFRQTRCLFVBQVUzQixRQUFRO0FBQ2pCLFdBQUtBLFNBQVNBO0FBTWQsVUFDQ3B3QixPQUFPZ0csU0FBU21zQixpQkFBaUJ0OEIsRUFBRSxLQUFLMkUsT0FBTyxFQUFFNjFCLE9BQU8sUUFBUSxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUVELFFBQVEsRUFBRSxJQUN0RnI2QixPQUFPcThCLGFBQ047QUFDRHY4QixVQUFFLEtBQUsyRSxPQUFPLEVBQ1o2MUIsT0FBTyxVQUFVLFVBQVV0NkIsT0FBT3E4QixjQUFjLENBQUMsRUFDakQvQixPQUFPLFVBQVUsWUFBWSxLQUFLO01BQ3JDLE9BQU87QUFDTng2QixVQUFFLEtBQUsyRSxPQUFPLEVBQUU2MUIsT0FBTyxVQUFVLFVBQVUsTUFBTTtNQUNsRDtBQUNBeDZCLFFBQUUsS0FBSzJFLE9BQU8sRUFBRTYxQixPQUFPLFFBQVEsRUFBRXY0QixLQUFLLDBCQUEwQixFQUFFLENBQUMsRUFBRXlHLE1BQU11eUIsWUFBQSxHQUFBbDRCLE9BQWVvSCxPQUFPZ0csU0FDaEcsS0FBS29xQixTQUFTLElBQ2QsRUFDRCxHQUFDLElBQUE7QUFDRCxhQUFPO0lBQ1I7Ozs7Ozs7Ozs7SUFVQWlDLFdBQVc3M0IsU0FBUztBQUNuQixXQUFLODNCLGFBQWE7QUFDbEIsV0FBS0MsV0FBVy8zQixPQUFPO0FBQ3ZCLGFBQU87SUFDUjs7Ozs7OztJQU9BKzNCLFdBQVcvM0IsU0FBUztBQUNuQixXQUFLQSxRQUFRYixZQUFZYSxPQUFPO0FBRWhDLFlBQU0wUSxRQUFPO0FBQ2JyVixRQUFFLEtBQUsyRSxPQUFPLEVBQ1oxQyxLQUFLLDZDQUE2QyxFQUNsRG81QixLQUFLLENBQUNuSSxLQUFLdHZCLFVBQVU7QUFDckJBLGNBQU04RSxNQUFNa3pCLFVBQVU7QUFDdEIsY0FBTWUsU0FBUzU2QixTQUFTeUYsY0FBYyxRQUFRO0FBQzlDLFlBQUk1RCxNQUFNNEssYUFBYSxPQUFPLEdBQUc7QUFDaENtdUIsaUJBQU94dUIsY0FBY3ZLLE1BQU04SyxhQUFhLE9BQU87UUFDaEQsV0FBVzlLLE1BQU11SyxhQUFhO0FBQzdCd3VCLGlCQUFPeHVCLGNBQWN2SyxNQUFNdUs7UUFDNUIsT0FBTztBQUNOd3VCLGlCQUFPeHVCLGNBQWM7UUFDdEI7QUFDQXd1QixlQUFPbDFCLFlBQVk3RCxNQUFNNkQsYUFBYTtBQUV0Q2sxQixlQUFPaDFCLGlCQUNOLFNBQ0EsTUFBTTtBQUNML0QsZ0JBQU15MEIsTUFBTTtRQUNiLEdBQ0EsS0FDRDtBQUNBaGpCLFFBQUFBLE1BQUtxbEIsUUFBUTkwQixLQUFLKzJCLE1BQU07TUFDekIsQ0FBQztBQUVGLFVBQUksS0FBS2pDLFFBQVF4NEIsU0FBUyxHQUFHO0FBQzVCbEMsVUFBRSxLQUFLMkUsT0FBTyxFQUNaNjFCLE9BQU8sUUFBUSxFQUNmdjRCLEtBQUssMEJBQTBCLEVBQy9CMndCLE1BQU0sRUFDTm5zQixPQUFPLEtBQUtpMEIsT0FBTyxFQUFFLENBQUMsRUFDdEJydkIsZ0JBQWdCLFlBQVk7TUFDL0IsT0FBTztBQUNOckwsVUFBRSxLQUFLMkUsT0FBTyxFQUNaNjFCLE9BQU8sUUFBUSxFQUNmdjRCLEtBQUssMEJBQTBCLEVBQUUsQ0FBQyxFQUNsQ3lGLGFBQWEsY0FBYyxZQUFZO01BQzFDO0FBRUEsYUFBTztJQUNSOzs7Ozs7SUFNQSswQixlQUFlO0FBQ2QsV0FBSy9CLFVBQVUsQ0FBQTtBQUVmMTZCLFFBQUUsS0FBSzJFLE9BQU8sRUFBRTYxQixPQUFPLFFBQVEsRUFBRXY0QixLQUFLLDBCQUEwQixFQUFFMndCLE1BQU07QUFDeEUsYUFBTyxLQUFLanVCLFFBQVFneUIsY0FBYyxHQUFHO0FBQ3BDLGFBQUtoeUIsUUFBUTBFLFlBQVksS0FBSzFFLFFBQVF1SixVQUFVO01BQ2pEO0FBQ0EsYUFBTztJQUNSOzs7Ozs7Ozs7Ozs7SUFZQTB1QixjQUFjcjRCLE1BQU1zNEIsVUFBVUMsTUFBTTtBQUNuQyxZQUFNQyxlQUFlLzhCLEVBQUUsS0FBSzJFLE9BQU8sRUFBRTYxQixPQUFPLFFBQVEsRUFBRXY0QixLQUFLLDhCQUE4QjtBQUN6RixVQUFJLEtBQUt3NUIsZ0JBQWdCO0FBQ3hCLGNBQU11QixTQUFTajdCLFNBQVN5RixjQUFjLE1BQU07QUFDNUN3MUIsZUFBTzd1QixjQUFjO0FBQ3JCLFlBQUkydUIsTUFBTTtBQUNUQyx1QkFBYXBVLFFBQVFxVSxNQUFNO1FBQzVCLE9BQU87QUFDTkQsdUJBQWF0MkIsT0FBT3UyQixNQUFNO1FBQzNCO01BQ0Q7QUFDQSxZQUFNcE8sT0FBTzdzQixTQUFTeUYsY0FBYyxHQUFHO0FBQ3ZDb25CLFdBQUtsbkIsYUFBYSxRQUFRdkcsR0FBRzRELEtBQUtDLE9BQU82M0IsUUFBUSxDQUFDO0FBQ2xEak8sV0FBS2xuQixhQUFhLFNBQVNtMUIsUUFBUTtBQUNuQ2pPLFdBQUtsbkIsYUFBYSxVQUFVLFFBQVE7QUFDcENrbkIsV0FBS2xuQixhQUFhLE9BQU8scUJBQXFCO0FBQzlDa25CLFdBQUt6Z0IsY0FBYzVKO0FBQ25CLFVBQUl1NEIsTUFBTTtBQUNUQyxxQkFBYXBVLFFBQVFpRyxJQUFJO01BQzFCLE9BQU87QUFDTm1PLHFCQUFhdDJCLE9BQU9tb0IsSUFBSTtNQUN6QjtBQUNBLFdBQUs2TSxpQkFBaUI7QUFDdEIsYUFBTztJQUNSOzs7Ozs7Ozs7O0lBVUF3QixZQUFZQyxPQUFPO0FBQ2xCbDlCLFFBQUUsS0FBSzJFLE9BQU8sRUFBRTYxQixPQUFPLFVBQVUsU0FBUzBDLEtBQUs7QUFDL0MsYUFBTztJQUNSO0VBQ0Q7QUFZQWo5QixXQUFTbzZCLGFBQWE4QyxvQkFBcUJDLGFBQVk7QUFDdEQsVUFBTXQ3QixRQUFROUIsRUFBRSxNQUFNO0FBQ3RCOEIsVUFBTUcsS0FBSyxpQ0FBaUMsRUFBRXdlLEtBQUssWUFBWSxDQUFDMmMsT0FBTztFQUN4RTtBQUNELEdBQUdDLE1BQU07IiwKICAibmFtZXMiOiBbIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAibW9kdWxlIiwgImdsb2JhbCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbCIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbCIsICJTeW1ib2wiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgImRvY3VtZW50IiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIlR5cGVFcnJvciIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgIm1vcmViaXRzIiwgIiQiLCAiTW9yZWJpdHMiLCAid2luZG93IiwgImwxMG4iLCAicmVkaXJlY3RUYWdBbGlhc2VzIiwgInNpZ25hdHVyZVRpbWVzdGFtcEZvcm1hdCIsICJzdHIiLCAicmd4VVRDIiwgInJneENTVCIsICJtYXRjaCIsICJleGVjIiwgIm1hdGNoQ1NUIiwgIm1vbnRoIiwgImRhdGUiLCAibG9jYWxlRGF0YSIsICJtb250aHMiLCAiaW5kZXhPZiIsICJ1c2VySXNJbkdyb3VwIiwgImdyb3VwIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiaW5jbHVkZXMiLCAidXNlcklzU3lzb3AiLCAic2FuaXRpemVJUHY2IiwgImFkZHJlc3MiLCAiY29uc29sZSIsICJ3YXJuIiwgImlwIiwgImlzUGFnZVJlZGlyZWN0IiwgIiRib2R5IiwgImRvY3VtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiZmluZCIsICJsZW5ndGgiLCAicGFnZU5hbWVOb3JtIiwgInJlcGxhY2UiLCAicGFnZU5hbWVSZWdleCIsICJwYWdlTmFtZSIsICJmaXJzdENoYXIiLCAicmVtYWluZGVyIiwgInN0cmluZyIsICJlc2NhcGVSZWdFeHAiLCAic2xpY2UiLCAiVGl0bGUiLCAicGhwQ2hhclRvVXBwZXIiLCAidG9Mb3dlckNhc2UiLCAiY29uY2F0IiwgImNyZWF0ZUh0bWwiLCAiaW5wdXQiLCAiZnJhZ21lbnQiLCAiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsICJnZW5lcmF0ZUFycmF5IiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJlbGVtZW50IiwgInZhbHVlIiwgIk5vZGUiLCAiYXBwZW5kQ2hpbGQiLCAiX2l0ZXJhdG9yMiIsICJwYXJzZUhUTUwiLCAicmVuZGVyV2lraWxpbmtzIiwgIl9zdGVwMiIsICJub2RlIiwgImVyciIsICJlIiwgImYiLCAidGV4dCIsICJ1YiIsICJ1bmJpbmRlciIsICJ1bmJpbmQiLCAiY29udGVudCIsICJfIiwgInRhcmdldCIsICJ0ZXh0XyIsICJ1dGlsIiwgImdldFVybCIsICJyZWJpbmQiLCAibmFtZXNwYWNlUmVnZXgiLCAibmFtZXNwYWNlcyIsICJhbGlhc2VzIiwgInJlZ2V4IiwgIl9pIiwgIl9PYmplY3QkZW50cmllcyIsICJPYmplY3QiLCAiZW50cmllcyIsICJuYW1lIiwgIm51bWJlciIsICJwdXNoIiwgIm1hcCIsICJjaGFyIiwgImpvaW4iLCAicXVpY2tGb3JtIiwgImV2ZW50IiwgImV2ZW50VHlwZSIsICJyb290IiwgInR5cGUiLCAicHJvdG90eXBlIiwgInJlbmRlciIsICJyZXQiLCAibmFtZXMiLCAiYXBwZW5kIiwgImRhdGEiLCAiY2hpbGRzIiwgImlkIiwgImNoaWxkIiwgImludGVybmFsU3ViZ3JvdXBJZCIsICJjdXJyZW50Tm9kZSIsICJjb21wdXRlIiwgImkiLCAiaW5JZCIsICJjaGlsZENvbnRhaW5lciIsICJsYWJlbCIsICJhZG1pbm9ubHkiLCAiY3VycmVudCIsICJzdWJub2RlIiwgImNyZWF0ZUVsZW1lbnQiLCAiY2xhc3NOYW1lIiwgInNldEF0dHJpYnV0ZSIsICJhZGRFdmVudExpc3RlbmVyIiwgInNlbGVjdCIsICJtdWx0aXBsZSIsICJzaXplIiwgImRpc2FibGVkIiwgImxpc3QiLCAidmFsdWVzIiwgInNlbGVjdGVkIiwgImhpZGRlbiIsICJjcmVhdGVUZXh0Tm9kZSIsICJjdXJJZCIsICJjdXJEaXYiLCAidG9vbHRpcCIsICJnZW5lcmF0ZVRvb2x0aXAiLCAiY2hlY2tlZCIsICJzdHlsZSIsICJzdWJncm91cCIsICJ0bXBncm91cCIsICJzdWJncm91cFJhdyIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJlbCIsICJuZXdFbCIsICJzaG93biIsICJwYXJlbnROb2RlIiwgImZvcm0iLCAicmVtb3ZlQ2hpbGQiLCAic2hpZnRDbGlja1N1cHBvcnQiLCAiY2hlY2tib3hTaGlmdENsaWNrU3VwcG9ydCIsICJnZXRFbGVtZW50cyIsICJwbGFjZWhvbGRlciIsICJfaTIiLCAiX2FyciIsICJhdHQiLCAiX2kzIiwgIl9hcnIyIiwgIl9pNCIsICJfYXJyMyIsICJtaW4iLCAibWF4IiwgIk51bWJlciIsICJQT1NJVElWRV9JTkZJTklUWSIsICJsaXN0Tm9kZSIsICJtb3JlIiwgIm5ld05vZGUiLCAic3VibGlzdCIsICJhcmVhIiwgImNvdW50ZXIiLCAic3RvcFByb3BhZ2F0aW9uIiwgIm1vcmVCdXR0b24iLCAic3VibGFiZWwiLCAicmVtb3ZlIiwgIm1heGxlbmd0aCIsICJlbGVtIiwgIm1vcmVidXR0b24iLCAibGlzdG5vZGUiLCAibm9kZV8iLCAiaW5wdXRub2RlIiwgInJlbW92ZUF0dHJpYnV0ZSIsICJyZW1vdmVCdXR0b24iLCAicmVzdWx0IiwgImxhYmVsRWxlbWVudCIsICJjb2xzIiwgInJvd3MiLCAicmVxdWlyZWQiLCAicmVhZG9ubHkiLCAiRXJyb3IiLCAidG9TdHJpbmciLCAiZXh0cmEiLCAiJGRhdGEiLCAidG9vbHRpcEJ1dHRvbiIsICJ0aXRsZSIsICJwb3NpdGlvbiIsICJteSIsICJhdCIsICJjb2xsaXNpb24iLCAidG9vbHRpcENsYXNzIiwgImdldElucHV0RGF0YSIsICJfaXRlcmF0b3I0IiwgImVsZW1lbnRzIiwgIl9zdGVwNCIsICJmaWVsZCIsICJmaWVsZE5hbWVOb3JtIiwgImRhdGFzZXQiLCAic2luZ2xlIiwgInZhbCIsICJ0cmltIiwgImZpZWxkTmFtZSIsICIkZm9ybSIsICJlc2NhcGVTZWxlY3RvciIsICIkZWxlbWVudHMiLCAidG9BcnJheSIsICJnZXRDaGVja2JveE9yUmFkaW8iLCAiZWxlbWVudEFycmF5IiwgImZvdW5kIiwgImZpbHRlciIsICJnZXRFbGVtZW50Q29udGFpbmVyIiwgIkhUTUxGaWVsZFNldEVsZW1lbnQiLCAiSFRNTERpdkVsZW1lbnQiLCAiSFRNTEhlYWRpbmdFbGVtZW50IiwgImdldEVsZW1lbnRMYWJlbE9iamVjdCIsICJIVE1MVGV4dEFyZWFFbGVtZW50IiwgImdldEVsZW1lbnRMYWJlbCIsICJmaXJzdENoaWxkIiwgInRleHRDb250ZW50IiwgInNldEVsZW1lbnRMYWJlbCIsICJsYWJlbFRleHQiLCAib3ZlcnJpZGVFbGVtZW50TGFiZWwiLCAidGVtcG9yYXJ5TGFiZWxUZXh0IiwgImhhc0F0dHJpYnV0ZSIsICJyZXNldEVsZW1lbnRMYWJlbCIsICJnZXRBdHRyaWJ1dGUiLCAic2V0RWxlbWVudFZpc2liaWxpdHkiLCAidmlzaWJpbGl0eSIsICJ0b2dnbGUiLCAic2V0RWxlbWVudFRvb2x0aXBWaXNpYmlsaXR5IiwgIkhUTUxGb3JtRWxlbWVudCIsICJnZXRDaGVja2VkIiwgInJldHVybkFycmF5IiwgIkhUTUxTZWxlY3RFbGVtZW50IiwgIm9wdGlvbnMiLCAiSFRNTElucHV0RWxlbWVudCIsICJnZXRVbmNoZWNrZWQiLCAiaXNJUHY2QWRkcmVzcyIsICJ0b1VwcGVyQ2FzZSIsICJhYmJyZXZQb3MiLCAiQ0lEUlN0YXJ0IiwgImFkZHJlc3NFbmQiLCAicmVwZWF0IiwgInBhZCIsICJyZXBsYWNlbWVudCIsICJzcGxpdCIsICJpc1JhbmdlIiwgImlzSVBBZGRyZXNzIiwgInZhbGlkQ0lEUiIsICJzdWJuZXQiLCAicGFyc2VJbnQiLCAiZ2V0NjQiLCAiaXB2NiIsICJzdWJuZXRNYXRjaCIsICJpcFJlZ2V4IiwgInRvVXBwZXJDYXNlRmlyc3RDaGFyIiwgInRvTG93ZXJDYXNlRmlyc3RDaGFyIiwgInNwbGl0V2VpZ2h0ZWRCeUtleXMiLCAic3RhcnQiLCAiZW5kIiwgInNraXBsaXN0IiwgImxldmVsIiwgImluaXRpYWwiLCAiQXJyYXkiLCAiaXNBcnJheSIsICJUeXBlRXJyb3IiLCAiX2l0ZXJhdG9yNSIsICJfc3RlcDUiLCAiZm9ybWF0UmVhc29uVGV4dCIsICJhZGRTaWciLCAicmVhc29uIiwgInNpZyIsICJzaWdJbmRleCIsICJsYXN0SW5kZXhPZiIsICJmb3JtYXRSZWFzb25Gb3JMb2ciLCAic2FmZVJlcGxhY2UiLCAicGF0dGVybiIsICJpc0luZmluaXR5IiwgImV4cGlyeSIsICJmb3JtYXRUaW1lIiwgInRpbWUiLCAibSIsICJ3Z1VMUyIsICJhcHBlbmRQdW5jdHVhdGlvbiIsICJwdW5jdHVhdGlvbiIsICJzZWFyY2giLCAiYXJyYXkiLCAidW5pcSIsICJhcnIiLCAiaXRlbSIsICJpZHgiLCAiZHVwcyIsICJjaHVuayIsICJudW1DaHVua3MiLCAiTWF0aCIsICJjZWlsIiwgImZyb20iLCAic2VsZWN0MiIsICJtYXRjaGVycyIsICJvcHRncm91cEZ1bGwiLCAicGFyYW1zIiwgIm9yaWdpbmFsTWF0Y2hlciIsICJmbiIsICJkZWZhdWx0cyIsICJtYXRjaGVyIiwgInRlcm0iLCAiY2hpbGRyZW4iLCAid29yZEJlZ2lubmluZyIsICJSZWdFeHAiLCAidGVzdCIsICJoaWdobGlnaHRTZWFyY2hNYXRjaGVzIiwgInNlYXJjaFRlcm0iLCAic2VsZWN0MlNlYXJjaFF1ZXJ5IiwgImxvYWRpbmciLCAiY3NzIiwgInF1ZXJ5SW50ZXJjZXB0b3IiLCAiYXV0b1N0YXJ0IiwgImV2IiwgIndoaWNoIiwgImNsb3Nlc3QiLCAicHJldiIsICJkcm9wZG93biIsICIkc2VhcmNoIiwgInNlbGVjdGlvbiIsICJmb2N1cyIsICJoaXN0b3J5IiwgInByZWZpeCIsICJyYW5kb20iLCAicG9zdGZpeCIsICJyZSIsICJnZXRDYWxsYmFjayIsICJoYXNPd24iLCAic2VsZiIsICJhcmdzIiwgInBhcmFtIiwgImRpZ2l0TWF0Y2giLCAiX2QiLCAiRGF0ZSIsICJSZWZsZWN0IiwgImFwcGx5IiwgIlVUQyIsICJkYXRlUGFydHMiLCAiRnVuY3Rpb24iLCAiYmluZCIsICJpc1ZhbGlkIiwgImxvZyIsICJtb250aHNTaG9ydCIsICJkYXlzIiwgImRheXNTaG9ydCIsICJyZWxhdGl2ZVRpbWVzIiwgInRoaXNEYXkiLCAicHJldkRheSIsICJuZXh0RGF5IiwgInRoaXNXZWVrIiwgInBhc3RXZWVrIiwgIm90aGVyIiwgInVuaXRNYXAiLCAic2Vjb25kcyIsICJtaW51dGVzIiwgImhvdXJzIiwgIndlZWtzIiwgInllYXJzIiwgImlzTmFOIiwgImdldFRpbWUiLCAiaXNCZWZvcmUiLCAiaXNBZnRlciIsICJnZXRVVENNb250aE5hbWUiLCAiZ2V0VVRDTW9udGgiLCAiZ2V0VVRDTW9udGhOYW1lQWJicmV2IiwgImdldE1vbnRoTmFtZSIsICJnZXRNb250aCIsICJnZXRNb250aE5hbWVBYmJyZXYiLCAiZ2V0VVRDRGF5TmFtZSIsICJnZXRVVENEYXkiLCAiZ2V0VVRDRGF5TmFtZUFiYnJldiIsICJnZXREYXlOYW1lIiwgImdldERheSIsICJnZXREYXlOYW1lQWJicmV2IiwgImFkZCIsICJ1bml0IiwgIm51bSIsICJ1bml0Tm9ybSIsICJrZXlzIiwgInN1YnRyYWN0IiwgImZvcm1hdCIsICJmb3JtYXRzdHIiLCAiem9uZSIsICJ1ZGF0ZSIsICJnZXRUaW1lem9uZU9mZnNldCIsICJ0b0lTT1N0cmluZyIsICJsZW4iLCAiaDI0IiwgImdldEhvdXJzIiwgImdldE1pbnV0ZXMiLCAiZ2V0U2Vjb25kcyIsICJtcyIsICJnZXRNaWxsaXNlY29uZHMiLCAiRCIsICJnZXREYXRlIiwgIk0iLCAiWSIsICJnZXRGdWxsWWVhciIsICJoMTIiLCAiYW1PclBtIiwgInJlcGxhY2VtZW50TWFwIiwgIkhIIiwgIkgiLCAiaGgiLCAiaCIsICJBIiwgIm1tIiwgInNzIiwgIlNTUyIsICJkZGRkIiwgImRkZCIsICJkIiwgIkREIiwgIk1NTU0iLCAiTU1NIiwgIk1NIiwgIllZWVkiLCAiWVkiLCAiY2FsZW5kYXIiLCAiZGF0ZURpZmYiLCAic2V0SG91cnMiLCAibW9udGhIZWFkZXJSZWdleCIsICJnZXRVVENGdWxsWWVhciIsICJtb250aEhlYWRlciIsICJoZWFkZXIiLCAiX2l0ZXJhdG9yNiIsICJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwgIl9zdGVwNiIsICJmdW5jIiwgIndpa2kiLCAibnVtYmVyT2ZBY3Rpb25zTGVmdCIsICJuYnJPZkNoZWNrcG9pbnRzTGVmdCIsICJhY3Rpb25Db21wbGV0ZWQiLCAibm90aWNlIiwgInN0YXR1cyIsICJyZWRpcmVjdCIsICJmb2xsb3dSZWRpcmVjdCIsICJzZXRUaW1lb3V0IiwgImxvY2F0aW9uIiwgInRpbWVPdXQiLCAid3BBY3Rpb25Db21wbGV0ZWRUaW1lT3V0IiwgImFkZENoZWNrcG9pbnQiLCAicmVtb3ZlQ2hlY2twb2ludCIsICJhcGkiLCAiY3VycmVudEFjdGlvbiIsICJxdWVyeSIsICJvblN1Y2Nlc3MiLCAic3RhdHVzRWxlbWVudCIsICJvbkVycm9yIiwgIl90aGlzJHF1ZXJ5IiwgImFzc2VydCIsICJlcnJvcmZvcm1hdCIsICJ1c2VsYW5nIiwgImVycm9ybGFuZyIsICJlcnJvcnN1c2Vsb2NhbCIsICJzZXRTdGF0dXNFbGVtZW50IiwgInN0YXRlbGVtIiwgImZvcm1hdHZlcnNpb24iLCAiZXJyb3IiLCAiYWN0aW9uIiwgInRhZ3MiLCAibW9yZWJpdHNXaWtpQ2hhbmdlVGFnIiwgInBhcmVudCIsICJyZXNwb25zZSIsICJyZXNwb25zZVhNTCIsICJzdGF0dXNUZXh0IiwgImVycm9yQ29kZSIsICJlcnJvclRleHQiLCAiYmFkdG9rZW5SZXRyeSIsICJzZXRQYXJlbnQiLCAicG9zdCIsICJjYWxsZXJBamF4UGFyYW1ldGVycyIsICJfcXVlcnlTdHJpbmciLCAiX2k1IiwgIl9PYmplY3QkZW50cmllczIiLCAiZW5jb2RlVVJJQ29tcG9uZW50IiwgInF1ZXJ5U3RyaW5nIiwgImFqYXhwYXJhbXMiLCAiY29udGV4dCIsICJ1cmwiLCAid2lraVNjcmlwdCIsICJkYXRhVHlwZSIsICJoZWFkZXJzIiwgIm1vcmViaXRzV2lraUFwaVVzZXJBZ2VudCIsICJhamF4IiwgInRoZW4iLCAib25BUElzdWNjZXNzIiwgImVycm9ycyIsICJjb2RlIiwgImh0bWwiLCAiZXEiLCAiYXR0ciIsICJyZXR1cm5FcnJvciIsICJjYWxsIiwgImluZm8iLCAiRGVmZXJyZWQiLCAicmVzb2x2ZVdpdGgiLCAib25BUElmYWlsdXJlIiwgImVycm9yVGhyb3duIiwgImdldFRva2VuIiwgInRva2VuIiwgInJlamVjdFdpdGgiLCAiZ2V0U3RhdHVzRWxlbWVudCIsICJnZXRFcnJvckNvZGUiLCAiZ2V0RXJyb3JUZXh0IiwgImdldFhNTCIsICJnZXRSZXNwb25zZSIsICJnZXRDYWNoZWRKc29uIiwgInByb3AiLCAidGl0bGVzIiwgInJ2c2xvdHMiLCAicnZwcm9wIiwgInNtYXhhZ2UiLCAibWF4YWdlIiwgImFwaW9iaiIsICJ1bmxpbmsiLCAid2lraXRleHQiLCAicGFnZXMiLCAicmV2aXNpb25zIiwgInNsb3RzIiwgIm1haW4iLCAiSlNPTiIsICJwYXJzZSIsICJzZXRBcGlVc2VyQWdlbnQiLCAidWEiLCAidG9rZW5BcGkiLCAibWV0YSIsICJ0b2tlbnMiLCAiY3NyZnRva2VuIiwgInBhZ2UiLCAiY3R4IiwgInBhZ2VFeGlzdHMiLCAiZWRpdFN1bW1hcnkiLCAiY2hhbmdlVGFncyIsICJ0ZXN0QWN0aW9ucyIsICJjYWxsYmFja1BhcmFtZXRlcnMiLCAicGFnZVRleHQiLCAiZWRpdE1vZGUiLCAiYXBwZW5kVGV4dCIsICJwcmVwZW5kVGV4dCIsICJuZXdTZWN0aW9uVGV4dCIsICJuZXdTZWN0aW9uVGl0bGUiLCAiY3JlYXRlT3B0aW9uIiwgIm1pbm9yRWRpdCIsICJib3RFZGl0IiwgInBhZ2VTZWN0aW9uIiwgIm1heENvbmZsaWN0UmV0cmllcyIsICJtYXhSZXRyaWVzIiwgImZvbGxvd0Nyb3NzTnNSZWRpcmVjdCIsICJ3YXRjaGxpc3RPcHRpb24iLCAid2F0Y2hsaXN0RXhwaXJ5IiwgImNyZWF0b3IiLCAidGltZXN0YW1wIiwgInJldmVydE9sZElEIiwgIm1vdmVEZXN0aW5hdGlvbiIsICJtb3ZlVGFsa1BhZ2UiLCAibW92ZVN1YnBhZ2VzIiwgIm1vdmVTdXBwcmVzc1JlZGlyZWN0IiwgInByb3RlY3RFZGl0IiwgInByb3RlY3RNb3ZlIiwgInByb3RlY3RDcmVhdGUiLCAicHJvdGVjdENhc2NhZGUiLCAibG9va3VwTm9uUmVkaXJlY3RDcmVhdG9yIiwgInBhZ2VMb2FkZWQiLCAiY3NyZlRva2VuIiwgImxvYWRUaW1lIiwgImxhc3RFZGl0VGltZSIsICJwYWdlSUQiLCAiY29udGVudE1vZGVsIiwgInJldmVydEN1cklEIiwgInJldmVydFVzZXIiLCAid2F0Y2hlZCIsICJmdWxseVByb3RlY3RlZCIsICJzdXBwcmVzc1Byb3RlY3RXYXJuaW5nIiwgImNvbmZsaWN0UmV0cmllcyIsICJyZXRyaWVzIiwgIm9uTG9hZFN1Y2Nlc3MiLCAib25Mb2FkRmFpbHVyZSIsICJvblNhdmVTdWNjZXNzIiwgIm9uU2F2ZUZhaWx1cmUiLCAib25Mb29rdXBDcmVhdGlvblN1Y2Nlc3MiLCAib25Mb29rdXBDcmVhdGlvbkZhaWx1cmUiLCAib25Nb3ZlU3VjY2VzcyIsICJvbk1vdmVGYWlsdXJlIiwgIm9uRGVsZXRlU3VjY2VzcyIsICJvbkRlbGV0ZUZhaWx1cmUiLCAib25VbmRlbGV0ZVN1Y2Nlc3MiLCAib25VbmRlbGV0ZUZhaWx1cmUiLCAib25Qcm90ZWN0U3VjY2VzcyIsICJvblByb3RlY3RGYWlsdXJlIiwgImxvYWRRdWVyeSIsICJsb2FkQXBpIiwgInNhdmVBcGkiLCAibG9va3VwQ3JlYXRpb25BcGkiLCAibW92ZUFwaSIsICJtb3ZlUHJvY2Vzc0FwaSIsICJwYXRyb2xBcGkiLCAicGF0cm9sUHJvY2Vzc0FwaSIsICJkZWxldGVBcGkiLCAiZGVsZXRlUHJvY2Vzc0FwaSIsICJ1bmRlbGV0ZUFwaSIsICJ1bmRlbGV0ZVByb2Nlc3NBcGkiLCAicHJvdGVjdEFwaSIsICJwcm90ZWN0UHJvY2Vzc0FwaSIsICJlbXB0eUZ1bmN0aW9uIiwgImxvYWQiLCAib25GYWlsdXJlIiwgImlucHJvcCIsICJpbnRlc3RhY3Rpb25zIiwgImN1cnRpbWVzdGFtcCIsICJydmxpbWl0IiwgInJ2c3RhcnRpZCIsICJyZWRpcmVjdHMiLCAicnZzZWN0aW9uIiwgImZuTG9hZFN1Y2Nlc3MiLCAic2F2ZSIsICJjYW5Vc2VNd1VzZXJUb2tlbiIsICJmbkNhblVzZU13VXNlclRva2VuIiwgImNvbmZpcm0iLCAic3VtbWFyeSIsICJ1c2VyIiwgIndhdGNobGlzdCIsICJmbkFwcGx5V2F0Y2hsaXN0RXhwaXJ5IiwgIndhdGNobGlzdGV4cGlyeSIsICJzZWN0aW9uIiwgIm1pbm9yIiwgIm5vdG1pbm9yIiwgImJvdCIsICJhcHBlbmR0ZXh0IiwgInByZXBlbmR0ZXh0IiwgInNlY3Rpb250aXRsZSIsICJ1bmRvIiwgInVuZG9hZnRlciIsICJiYXNldGltZXN0YW1wIiwgInN0YXJ0dGltZXN0YW1wIiwgImZuU2F2ZVN1Y2Nlc3MiLCAiZm5TYXZlRXJyb3IiLCAiZm5BdXRvU2F2ZSIsICJwcmVwZW5kIiwgIm5ld1NlY3Rpb24iLCAiZ2V0UGFnZU5hbWUiLCAiZ2V0UGFnZVRleHQiLCAic2V0UGFnZVRleHQiLCAic2V0QXBwZW5kVGV4dCIsICJzZXRQcmVwZW5kVGV4dCIsICJzZXROZXdTZWN0aW9uVGV4dCIsICJzZXROZXdTZWN0aW9uVGl0bGUiLCAic2V0RWRpdFN1bW1hcnkiLCAic2V0Q2hhbmdlVGFncyIsICJzZXRDcmVhdGVPcHRpb24iLCAic2V0TWlub3JFZGl0IiwgInNldEJvdEVkaXQiLCAic2V0UGFnZVNlY3Rpb24iLCAic2V0TWF4Q29uZmxpY3RSZXRyaWVzIiwgInNldE1heFJldHJpZXMiLCAic2V0V2F0Y2hsaXN0IiwgInNldFdhdGNobGlzdEV4cGlyeSIsICJzZXRXYXRjaGxpc3RGcm9tUHJlZmVyZW5jZXMiLCAic2V0Rm9sbG93UmVkaXJlY3QiLCAic2V0TG9va3VwTm9uUmVkaXJlY3RDcmVhdG9yIiwgImZsYWciLCAic2V0TW92ZURlc3RpbmF0aW9uIiwgImRlc3RpbmF0aW9uIiwgInNldE1vdmVUYWxrUGFnZSIsICJzZXRNb3ZlU3VicGFnZXMiLCAic2V0TW92ZVN1cHByZXNzUmVkaXJlY3QiLCAic2V0RWRpdFByb3RlY3Rpb24iLCAic2V0TW92ZVByb3RlY3Rpb24iLCAic2V0Q3JlYXRlUHJvdGVjdGlvbiIsICJzZXRDYXNjYWRpbmdQcm90ZWN0aW9uIiwgInNldE9sZElEIiwgIm9sZElEIiwgImdldEN1cnJlbnRJRCIsICJnZXRSZXZpc2lvblVzZXIiLCAiZ2V0TGFzdEVkaXRUaW1lIiwgInNldENhbGxiYWNrUGFyYW1ldGVycyIsICJnZXRDYWxsYmFja1BhcmFtZXRlcnMiLCAiZXhpc3RzIiwgImdldFBhZ2VJRCIsICJnZXRDb250ZW50TW9kZWwiLCAiZ2V0V2F0Y2hlZCIsICJnZXRMb2FkVGltZSIsICJnZXRDcmVhdG9yIiwgImdldENyZWF0aW9uVGltZXN0YW1wIiwgImNhbkVkaXQiLCAibG9va3VwQ3JlYXRpb24iLCAicnZkaXIiLCAiZm5Mb29rdXBDcmVhdGlvblN1Y2Nlc3MiLCAicmV2ZXJ0IiwgIm1vdmUiLCAiZm5QcmVmbGlnaHRDaGVja3MiLCAiZm5Qcm9jZXNzTW92ZSIsICJmbk5lZWRUb2tlbkluZm9RdWVyeSIsICJwYXRyb2wiLCAicGF0cm9saHJlZiIsICJyY2lkIiwgImdldFBhcmFtVmFsdWUiLCAiZm5Qcm9jZXNzUGF0cm9sIiwgInBhdHJvbFF1ZXJ5IiwgInJjcHJvcCIsICJyY3RpdGxlIiwgInJjbGltaXQiLCAiZGVsZXRlUGFnZSIsICJmblByb2Nlc3NEZWxldGUiLCAidW5kZWxldGVQYWdlIiwgImZuUHJvY2Vzc1VuZGVsZXRlIiwgInByb3RlY3QiLCAiZm5Qcm9jZXNzUHJvdGVjdCIsICJnZXRQcmVmaXhlZFRleHQiLCAiZWRpdFJlc3RyaWN0aW9uIiwgInBhZ2VvYmoiLCAiZm5DaGVja1BhZ2VOYW1lIiwgInJldiIsICJtaXNzaW5nIiwgInBhZ2VpZCIsICJjb250ZW50bW9kZWwiLCAiZWRpdFByb3QiLCAicHJvdGVjdGlvbiIsICJwciIsICJwb3AiLCAibGFzdHJldmlkIiwgInRlc3RhY3Rpb25zIiwgImFjdGlvbnMiLCAiX2k2IiwgIl9PYmplY3Qka2V5cyIsICJyZXZpZCIsICJ1c2VyaGlkZGVuIiwgImludmFsaWQiLCAicmVzb2x2ZWROYW1lIiwgIm9yaWdOcyIsICJuYW1lc3BhY2UiLCAibmV3TnMiLCAibmV3RXhwaXJ5IiwgInJlbCIsICJlZGl0IiwgImxpbmsiLCAiY2FwdGNoYSIsICJwdXJnZVF1ZXJ5IiwgInB1cmdlQXBpIiwgInNsZWVwIiwgImVycm9yRGF0YSIsICJhYnVzZWZpbHRlciIsICJkZXNjcmlwdGlvbiIsICJzcGFtIiwgInNwYW1ibGFja2xpc3QiLCAibWF0Y2hlcyIsICJpc1RleHRSZWRpcmVjdCIsICJzb21lIiwgInRhZyIsICJmbkxvb2t1cE5vblJlZGlyZWN0Q3JlYXRvciIsICJyZXZzIiwgIl9pdGVyYXRvcjciLCAiX3N0ZXA3IiwgImZuUHJvY2Vzc0NoZWNrcyIsICJhY3Rpb25NaXNzaW5nIiwgInByb3RlY3RNaXNzaW5nIiwgInNhbHRNaXNzaW5nIiwgImVkaXRwcm90IiwgInBhZ2VUaXRsZSIsICJ0byIsICJtb3ZldGFsayIsICJtb3Zlc3VicGFnZXMiLCAibm9yZWRpcmVjdCIsICJyZWNlbnRjaGFuZ2VzIiwgInVucGF0cm9sbGVkIiwgInBhdHJvbFN0YXQiLCAiZm5Qcm9jZXNzRGVsZXRlRXJyb3IiLCAiZm5Qcm9jZXNzVW5kZWxldGVFcnJvciIsICJwcnMiLCAibW92ZXByb3QiLCAiY3JlYXRlcHJvdCIsICJfaXRlcmF0b3I4IiwgIl9zdGVwOCIsICJzb3VyY2UiLCAiY2FzY2FkZSIsICJwcm90ZWN0aW9ucyIsICJleHBpcnlzIiwgIm1pbGxpc2Vjb25kcyIsICJkZWZlcnJlZCIsICJyZXNvbHZlIiwgInByZXZpZXciLCAicHJldmlld2JveCIsICJhZGRDbGFzcyIsICJoaWRlIiwgImJlZ2luUmVuZGVyIiwgInNlY3Rpb25UaXRsZSIsICJzaG93IiwgInN0YXR1c3NwYW4iLCAiaW5pdCIsICJwc3QiLCAiZGlzYWJsZWxpbWl0cmVwb3J0IiwgImRpc2FibGVlZGl0c2VjdGlvbiIsICJyZW5kZXJBcGkiLCAiZm5SZW5kZXJTdWNjZXNzIiwgImlubmVySFRNTCIsICJsb2FkZXIiLCAibW9kdWxlc3R5bGVzIiwgIm1vZHVsZXMiLCAiY2xvc2VQcmV2aWV3IiwgImVtcHR5IiwgInBhcnNlVGVtcGxhdGUiLCAiY291bnQiLCAidW5uYW1lZCIsICJlcXVhbHMiLCAicGFyYW1ldGVycyIsICJrZXkiLCAiZmluZFBhcmFtIiwgImZpbmFsIiwgInRlc3QzIiwgInRlc3QyIiwgImNoYXJBdCIsICJyZW1vdmVMaW5rIiwgImxpbmtUYXJnZXQiLCAibXdUaXRsZSIsICJuZXdGcm9tVGV4dCIsICJuYW1lc3BhY2VJRCIsICJnZXROYW1lc3BhY2VJZCIsICJnZXRNYWluVGV4dCIsICJsaW5rUmVnZXhTdHJpbmciLCAiaXNGaWxlT3JDYXRlZ29yeSIsICJjb2xvbiIsICJzaW1wbGVMaW5rUmVnZXgiLCAicGlwZWRMaW5rUmVnZXgiLCAiY29tbWVudE91dEltYWdlIiwgImltYWdlIiwgImltYWdlUmVnZXhTdHJpbmciLCAibGlua3NSZWdleCIsICJhbGxMaW5rcyIsICJfaXRlcmF0b3I5IiwgIl9zdGVwOSIsICJhbGxMaW5rIiwgImdhbGxlcnlJbWFnZVJlZ2V4IiwgImZyZWVJbWFnZVJlZ2V4IiwgImFkZFRvSW1hZ2VDb21tZW50IiwgIl9pdGVyYXRvcjEwIiwgIl9zdGVwMTAiLCAiZ2FsbGVyeVJlZ2V4IiwgIm5ld3RleHQiLCAicmVtb3ZlVGVtcGxhdGUiLCAidGVtcGxhdGUiLCAidGVtcGxhdGVSZWdleFN0cmluZyIsICJhbGxUZW1wbGF0ZXMiLCAiX2l0ZXJhdG9yMTEiLCAiX3N0ZXAxMSIsICJhbGxUZW1wbGF0ZSIsICJpbnNlcnRBZnRlclRlbXBsYXRlcyIsICJmbGFncyIsICJwcmVSZWdleCIsICJnZXRUZXh0IiwgInVzZXJzcGFjZUxvZ2dlciIsICJsb2dQYWdlTmFtZSIsICJpbml0aWFsVGV4dCIsICJoZWFkZXJMZXZlbCIsICJsb2dUZXh0IiwgInN1bW1hcnlUZXh0IiwgImRlZiIsICJyZWplY3QiLCAic3RhdCIsICJ0ZXh0UmF3IiwgImdlbmVyYXRlIiwgInVwZGF0ZSIsICJFbGVtZW50IiwgImhhc0NoaWxkTm9kZXMiLCAiZXJyb3JFdmVudCIsICJoYW5kbGVyIiwgInN0YXRSYXciLCAibGlua2VkIiwgInByaW50VXNlclRleHQiLCAiY29tbWVudHMiLCAibWVzc2FnZSIsICJwIiwgImRpdiIsICJtYXJnaW5Ub3AiLCAid2hpdGVTcGFjZSIsICJodG1sTm9kZSIsICJjb2xvciIsICJqUXVlcnlTZWxlY3RvciIsICJqUXVlcnlDb250ZXh0IiwgImxhc3RDaGVja2JveCIsICJjbGlja0hhbmRsZXIiLCAiY2xpY2tIYW5kbGVyMiIsICJ0aGlzQ2IiLCAic2hpZnRLZXkiLCAiY2JzIiwgImluZGV4IiwgImxhc3RJbmRleCIsICJlbmRTdGF0ZSIsICJmaW5pc2giLCAiY2xpY2siLCAib24iLCAiYmF0Y2hPcGVyYXRpb24iLCAicGFnZUxpc3QiLCAiY2h1bmtTaXplIiwgInByZXNlcnZlSW5kaXZpZHVhbFN0YXR1c0xpbmVzIiwgIndvcmtlciIsICJwb3N0RmluaXNoIiwgImNvdW50U3RhcnRlZCIsICJjb3VudEZpbmlzaGVkIiwgImNvdW50RmluaXNoZWRTdWNjZXNzIiwgImN1cnJlbnRDaHVua0luZGV4IiwgInBhZ2VDaHVua3MiLCAicnVubmluZyIsICJzZXRQYWdlTGlzdCIsICJzZXRPcHRpb24iLCAib3B0aW9uTmFtZSIsICJvcHRpb25WYWx1ZSIsICJydW4iLCAidG90YWwiLCAiZm5TdGFydE5ld0NodW5rIiwgIndvcmtlclN1Y2Nlc3MiLCAiYXJnIiwgImZuRG9uZU9uZSIsICJ3b3JrZXJGYWlsdXJlIiwgInRoaXNQcm94eSIsICJfaXRlcmF0b3IxMiIsICJfc3RlcDEyIiwgInByb2dyZXNzIiwgInJvdW5kIiwgImZsb29yIiwgInN0YXR1c1N0cmluZyIsICJzaW1wbGVXaW5kb3ciLCAid2lkdGgiLCAiaGVpZ2h0IiwgImRpYWxvZyIsICJhdXRvT3BlbiIsICJidXR0b25zIiwgIlBsYWNlaG9sZGVyIGJ1dHRvbiIsICJkaWFsb2dDbGFzcyIsICJpbm5lcldpZHRoIiwgImNsb3NlIiwgInJlc2l6ZVN0YXJ0IiwgInNjcm9sbGJveCIsICJtYXhIZWlnaHQiLCAicmVzaXplU3RvcCIsICJyZXNpemUiLCAiJHdpZGdldCIsICJlYWNoIiwgImJ1dHRvbnNwYW4iLCAibGlua3NzcGFuIiwgInJlc2l6YWJsZSIsICJoYXNGb290ZXJMaW5rcyIsICJzY3JpcHROYW1lIiwgInByZXZlbnREZWZhdWx0IiwgImRpc3BsYXkiLCAic2NyaXB0bmFtZXNwYW4iLCAic2V0dXBUb29sdGlwcyIsICJwZyIsICJkaWZmIiwgInJhblNldHVwVG9vbHRpcHNBbHJlYWR5IiwgInNldEhlaWdodCIsICJzZXRUaXRsZSIsICJzZXRTY3JpcHROYW1lIiwgInNldFdpZHRoIiwgImdldENvbXB1dGVkU3R5bGUiLCAiaW5uZXJIZWlnaHQiLCAic2V0Q29udGVudCIsICJwdXJnZUNvbnRlbnQiLCAiYWRkQ29udGVudCIsICJidXR0b24iLCAiYWRkRm9vdGVyTGluayIsICJ3aWtpUGFnZSIsICJwcmVwIiwgIiRmb290ZXJsaW5rcyIsICJidWxsZXQiLCAic2V0TW9kYWxpdHkiLCAibW9kYWwiLCAic2V0QnV0dG9uc0VuYWJsZWQiLCAiZW5hYmxlZCIsICJqUXVlcnkiXQp9Cg==

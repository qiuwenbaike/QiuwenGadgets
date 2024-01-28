/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/User:Peacearth/DisamAssist.js}
 * @base {@link https://es.wikipedia.org/wiki/Usuario:Qwertyytrewqqwerty/DisamAssist.js}
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

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/global.js
var require_global = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/global.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/fails.js
var require_fails = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/fails.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/descriptors.js
var require_descriptors = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/descriptors.js"(exports2, module2) {
    "use strict";
    var fails = require_fails();
    module2.exports = !fails(function() {
      return Object.defineProperty({}, 1, { get: function() {
        return 7;
      } })[1] !== 7;
    });
  }
});

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/function-bind-native.js
var require_function_bind_native = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/function-bind-native.js"(exports2, module2) {
    "use strict";
    var fails = require_fails();
    module2.exports = !fails(function() {
      var test = function() {
      }.bind();
      return typeof test != "function" || test.hasOwnProperty("prototype");
    });
  }
});

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/function-call.js
var require_function_call = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/function-call.js"(exports2, module2) {
    "use strict";
    var NATIVE_BIND = require_function_bind_native();
    var call = Function.prototype.call;
    module2.exports = NATIVE_BIND ? call.bind(call) : function() {
      return call.apply(call, arguments);
    };
  }
});

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/object-property-is-enumerable.js
var require_object_property_is_enumerable = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/object-property-is-enumerable.js"(exports2) {
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

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/create-property-descriptor.js
var require_create_property_descriptor = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/create-property-descriptor.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/function-uncurry-this.js
var require_function_uncurry_this = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/function-uncurry-this.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/classof-raw.js
var require_classof_raw = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/classof-raw.js"(exports2, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var toString = uncurryThis({}.toString);
    var stringSlice = uncurryThis("".slice);
    module2.exports = function(it) {
      return stringSlice(toString(it), 8, -1);
    };
  }
});

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/indexed-object.js
var require_indexed_object = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/indexed-object.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/is-null-or-undefined.js
var require_is_null_or_undefined = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/is-null-or-undefined.js"(exports2, module2) {
    "use strict";
    module2.exports = function(it) {
      return it === null || it === void 0;
    };
  }
});

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/require-object-coercible.js
var require_require_object_coercible = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/require-object-coercible.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/to-indexed-object.js
var require_to_indexed_object = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/to-indexed-object.js"(exports2, module2) {
    "use strict";
    var IndexedObject = require_indexed_object();
    var requireObjectCoercible = require_require_object_coercible();
    module2.exports = function(it) {
      return IndexedObject(requireObjectCoercible(it));
    };
  }
});

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/is-callable.js
var require_is_callable = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/is-callable.js"(exports2, module2) {
    "use strict";
    var documentAll = typeof document == "object" && document.all;
    module2.exports = typeof documentAll == "undefined" && documentAll !== void 0 ? function(argument) {
      return typeof argument == "function" || argument === documentAll;
    } : function(argument) {
      return typeof argument == "function";
    };
  }
});

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/is-object.js
var require_is_object = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/is-object.js"(exports2, module2) {
    "use strict";
    var isCallable = require_is_callable();
    module2.exports = function(it) {
      return typeof it == "object" ? it !== null : isCallable(it);
    };
  }
});

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/get-built-in.js
var require_get_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/get-built-in.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/object-is-prototype-of.js
var require_object_is_prototype_of = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/object-is-prototype-of.js"(exports2, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    module2.exports = uncurryThis({}.isPrototypeOf);
  }
});

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/engine-user-agent.js
var require_engine_user_agent = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/engine-user-agent.js"(exports2, module2) {
    "use strict";
    module2.exports = typeof navigator != "undefined" && String(navigator.userAgent) || "";
  }
});

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/engine-v8-version.js
var require_engine_v8_version = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/engine-v8-version.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/symbol-constructor-detection.js
var require_symbol_constructor_detection = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/symbol-constructor-detection.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/use-symbol-as-uid.js
var require_use_symbol_as_uid = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/use-symbol-as-uid.js"(exports2, module2) {
    "use strict";
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    module2.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
  }
});

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/is-symbol.js
var require_is_symbol = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/is-symbol.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/try-to-string.js
var require_try_to_string = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/try-to-string.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/a-callable.js
var require_a_callable = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/a-callable.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/get-method.js
var require_get_method = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/get-method.js"(exports2, module2) {
    "use strict";
    var aCallable = require_a_callable();
    var isNullOrUndefined = require_is_null_or_undefined();
    module2.exports = function(V, P) {
      var func = V[P];
      return isNullOrUndefined(func) ? void 0 : aCallable(func);
    };
  }
});

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/ordinary-to-primitive.js
var require_ordinary_to_primitive = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/ordinary-to-primitive.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/is-pure.js
var require_is_pure = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/is-pure.js"(exports2, module2) {
    "use strict";
    module2.exports = false;
  }
});

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/define-global-property.js
var require_define_global_property = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/define-global-property.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/shared-store.js
var require_shared_store = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/shared-store.js"(exports2, module2) {
    "use strict";
    var global2 = require_global();
    var defineGlobalProperty = require_define_global_property();
    var SHARED = "__core-js_shared__";
    var store = global2[SHARED] || defineGlobalProperty(SHARED, {});
    module2.exports = store;
  }
});

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/shared.js
var require_shared = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/shared.js"(exports2, module2) {
    "use strict";
    var IS_PURE = require_is_pure();
    var store = require_shared_store();
    (module2.exports = function(key, value) {
      return store[key] || (store[key] = value !== void 0 ? value : {});
    })("versions", []).push({
      version: "3.35.1",
      mode: IS_PURE ? "pure" : "global",
      copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
      license: "https://github.com/zloirock/core-js/blob/v3.35.1/LICENSE",
      source: "https://github.com/zloirock/core-js"
    });
  }
});

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/to-object.js
var require_to_object = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/to-object.js"(exports2, module2) {
    "use strict";
    var requireObjectCoercible = require_require_object_coercible();
    var $Object = Object;
    module2.exports = function(argument) {
      return $Object(requireObjectCoercible(argument));
    };
  }
});

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/has-own-property.js
var require_has_own_property = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/has-own-property.js"(exports2, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var toObject = require_to_object();
    var hasOwnProperty = uncurryThis({}.hasOwnProperty);
    module2.exports = Object.hasOwn || function hasOwn(it, key) {
      return hasOwnProperty(toObject(it), key);
    };
  }
});

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/uid.js
var require_uid = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/uid.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/well-known-symbol.js
var require_well_known_symbol = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/well-known-symbol.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/to-primitive.js
var require_to_primitive = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/to-primitive.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/to-property-key.js
var require_to_property_key = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/to-property-key.js"(exports2, module2) {
    "use strict";
    var toPrimitive = require_to_primitive();
    var isSymbol = require_is_symbol();
    module2.exports = function(argument) {
      var key = toPrimitive(argument, "string");
      return isSymbol(key) ? key : key + "";
    };
  }
});

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/document-create-element.js
var require_document_create_element = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/document-create-element.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/ie8-dom-define.js
var require_ie8_dom_define = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/ie8-dom-define.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/object-get-own-property-descriptor.js
var require_object_get_own_property_descriptor = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/object-get-own-property-descriptor.js"(exports2) {
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

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/v8-prototype-define-bug.js
var require_v8_prototype_define_bug = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/v8-prototype-define-bug.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/an-object.js
var require_an_object = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/an-object.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/object-define-property.js
var require_object_define_property = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/object-define-property.js"(exports2) {
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

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/create-non-enumerable-property.js
var require_create_non_enumerable_property = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/create-non-enumerable-property.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/function-name.js
var require_function_name = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/function-name.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/inspect-source.js
var require_inspect_source = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/inspect-source.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/weak-map-basic-detection.js
var require_weak_map_basic_detection = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/weak-map-basic-detection.js"(exports2, module2) {
    "use strict";
    var global2 = require_global();
    var isCallable = require_is_callable();
    var WeakMap = global2.WeakMap;
    module2.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));
  }
});

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/shared-key.js
var require_shared_key = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/shared-key.js"(exports2, module2) {
    "use strict";
    var shared = require_shared();
    var uid = require_uid();
    var keys = shared("keys");
    module2.exports = function(key) {
      return keys[key] || (keys[key] = uid(key));
    };
  }
});

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/hidden-keys.js
var require_hidden_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/hidden-keys.js"(exports2, module2) {
    "use strict";
    module2.exports = {};
  }
});

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/internal-state.js
var require_internal_state = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/internal-state.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/make-built-in.js
var require_make_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/make-built-in.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/define-built-in.js
var require_define_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/define-built-in.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/math-trunc.js
var require_math_trunc = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/math-trunc.js"(exports2, module2) {
    "use strict";
    var ceil = Math.ceil;
    var floor = Math.floor;
    module2.exports = Math.trunc || function trunc(x) {
      var n = +x;
      return (n > 0 ? floor : ceil)(n);
    };
  }
});

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/to-integer-or-infinity.js
var require_to_integer_or_infinity = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/to-integer-or-infinity.js"(exports2, module2) {
    "use strict";
    var trunc = require_math_trunc();
    module2.exports = function(argument) {
      var number = +argument;
      return number !== number || number === 0 ? 0 : trunc(number);
    };
  }
});

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/to-absolute-index.js
var require_to_absolute_index = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/to-absolute-index.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/to-length.js
var require_to_length = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/to-length.js"(exports2, module2) {
    "use strict";
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var min = Math.min;
    module2.exports = function(argument) {
      var len = toIntegerOrInfinity(argument);
      return len > 0 ? min(len, 9007199254740991) : 0;
    };
  }
});

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/length-of-array-like.js
var require_length_of_array_like = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/length-of-array-like.js"(exports2, module2) {
    "use strict";
    var toLength = require_to_length();
    module2.exports = function(obj) {
      return toLength(obj.length);
    };
  }
});

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/array-includes.js
var require_array_includes = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/array-includes.js"(exports2, module2) {
    "use strict";
    var toIndexedObject = require_to_indexed_object();
    var toAbsoluteIndex = require_to_absolute_index();
    var lengthOfArrayLike = require_length_of_array_like();
    var createMethod = function(IS_INCLUDES) {
      return function($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = lengthOfArrayLike(O);
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

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/object-keys-internal.js
var require_object_keys_internal = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/object-keys-internal.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/enum-bug-keys.js
var require_enum_bug_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/enum-bug-keys.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/object-get-own-property-names.js
var require_object_get_own_property_names = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/object-get-own-property-names.js"(exports2) {
    "use strict";
    var internalObjectKeys = require_object_keys_internal();
    var enumBugKeys = require_enum_bug_keys();
    var hiddenKeys = enumBugKeys.concat("length", "prototype");
    exports2.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
      return internalObjectKeys(O, hiddenKeys);
    };
  }
});

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/object-get-own-property-symbols.js
var require_object_get_own_property_symbols = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/object-get-own-property-symbols.js"(exports2) {
    "use strict";
    exports2.f = Object.getOwnPropertySymbols;
  }
});

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/own-keys.js
var require_own_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/own-keys.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/copy-constructor-properties.js
var require_copy_constructor_properties = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/copy-constructor-properties.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/is-forced.js
var require_is_forced = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/is-forced.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/export.js
var require_export = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/export.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/is-array.js
var require_is_array = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/is-array.js"(exports2, module2) {
    "use strict";
    var classof = require_classof_raw();
    module2.exports = Array.isArray || function isArray(argument) {
      return classof(argument) === "Array";
    };
  }
});

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/array-set-length.js
var require_array_set_length = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/array-set-length.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/does-not-exceed-safe-integer.js
var require_does_not_exceed_safe_integer = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/does-not-exceed-safe-integer.js"(exports2, module2) {
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

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/modules/es.array.push.js
var require_es_array_push = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/modules/es.array.push.js"() {
    "use strict";
    var $2 = require_export();
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
      } catch (error2) {
        return error2 instanceof TypeError;
      }
    };
    var FORCED = INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength();
    $2({ target: "Array", proto: true, arity: 1, forced: FORCED }, {
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

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/delete-property-or-throw.js
var require_delete_property_or_throw = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/delete-property-or-throw.js"(exports2, module2) {
    "use strict";
    var tryToString = require_try_to_string();
    var $TypeError = TypeError;
    module2.exports = function(O, P) {
      if (!delete O[P])
        throw new $TypeError("Cannot delete property " + tryToString(P) + " of " + tryToString(O));
    };
  }
});

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/modules/es.array.unshift.js
var require_es_array_unshift = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/modules/es.array.unshift.js"() {
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
//! src/DisamAssist/modules/constant.ts
require_es_array_push();
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
var WG_ACTION = mw.config.get("wgAction");
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
//! src/DisamAssist/modules/core.js
var import_ext_gadget = require("ext.gadget.Util");
//! src/DisamAssist/modules/messages.js
var txt = {
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
var api = (0, import_ext_gadget.initMwApi)("DisamAssist/1.1");
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
      const startMainLink = $(mw.util.addPortletLink(portletId, "#", txt.startMain, "ca-disamassist-main")).on("click", startMain);
      const startSameLink = $(mw.util.addPortletLink(portletId, "#", txt.startSame, "ca-disamassist-same")).on("click", startSame);
      startLink = startMainLink.add(startSameLink);
    } else {
      startLink = $(mw.util.addPortletLink(portletId, "#", txt.start, "ca-disamassist-page")).on("click", start);
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
    finishedMessage: $("<div>").text(txt.noMoreLinks).hide(),
    pageTitleLine: $("<span>").addClass("disamassist-pagetitleline"),
    pendingEditCounter: $("<div>").addClass("disamassist-editcounter"),
    context: $("<span>").addClass("disamassist-context"),
    undoButton: createButton(txt.undo, undo),
    omitButton: createButton(txt.omit, omit),
    endButton: createButton(txt.close, saveAndEnd),
    refreshButton: createButton(txt.refresh, refresh),
    titleAsTextButton: createButton(txt.titleAsText, chooseTitleFromPrompt),
    intentionalLinkButton: canMarkIntentionalLinks ? createButton(txt.intentionalLink, chooseIntentionalLink) : $("<span>"),
    disamNeededButton: cfg.disamNeededText ? createButton(txt.disamNeeded, chooseDisamNeeded) : $("<span>"),
    removeLinkButton: createButton(txt.removeLink, chooseLinkRemoval)
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
      return txt.pending;
    } else if (editCount !== 0) {
      return txt.editInProgress;
    }
  });
};
var markDisamOptions = () => {
  const optionPageTitles = [];
  const optionMarkers = [];
  getDisamOptions().each((_index, element) => {
    const link = $(element);
    const title = extractPageName(link);
    const optionMarker = $("<a>").attr("href", "#").addClass("disamassist-optionmarker").text(txt.optionMarker).on("click", (ev) => {
      ev.preventDefault();
      chooseReplacement(title);
    });
    link.after(optionMarker);
    optionMarkers.push(optionMarker);
    optionPageTitles.push(title);
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
          optionMarkers[ii].text(txt.targetOptionMarker).addClass("disamassist-curroptionmarker");
        } else if (isSamePage(endOptionTitle, endTargetPage)) {
          optionMarkers[ii].text(txt.redirectOptionMarker).addClass("disamassist-curroptionmarker");
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
        const summary = txt.redirectSummary.replace("$1", title);
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
      summary = pageTitle ? txt.summaryChanged.replace("$1", pageTitle) : txt.summaryOmitted;
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
  chooseReplacement(disamTitle, "", txt.summaryIntentional);
};
var chooseTitleFromPrompt = () => {
  const title = prompt(txt.titleAsTextPrompt);
  if (title !== null) {
    chooseReplacement(title);
  }
};
var chooseLinkRemoval = () => {
  if (choosing) {
    const summary = txt.summaryRemoved;
    addChange(currentPageTitle, currentPageParameters, currentPageParameters.content, currentLink, summary);
    currentPageParameters.content = removeLink(currentPageParameters.content, currentLink);
    doLink();
  }
};
var chooseDisamNeeded = () => {
  chooseReplacement(currentLink.title, cfg.disamNeededText, txt.summaryHelpNeeded);
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
      pendingEditBox.append($("<div>").text(txt.pendingEditBoxLimited).addClass("disamassist-subtitle"));
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
  document.title = txt.notifyCharacter + document.title;
  $body.one("mousemove", () => {
    document.title = oldTitle;
  });
};
var updateContext = () => {
  updateEditCounter();
  if (currentLink) {
    ui.pageTitleLine.html(txt.pageTitleLine.replace("$1", mw.util.getUrl(currentPageTitle, {
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
    ui.pendingEditCounter.text(txt.pendingEditCounter.replace("$1", editCount).replace("$2", countActuallyChangedFullyCheckedPages()));
  }
  if (pendingEditBox) {
    if (editCount === 0 && !running) {
      togglePendingEditBox(false);
      notifyCompletion();
    }
    let textContent = editCount;
    if (editLimit) {
      textContent = txt.pendingEditBoxTimeEstimation.replace("$1", editCount).replace("$2", secondsToHHMMSS(cfg.editCooldown * editCount));
    }
    pendingEditBoxText.text(txt.pendingEditBox.replace("$1", textContent));
  }
};
var applyChange = (pageChange) => {
  if (pageChange.page.content !== pageChange.contentBefore[0]) {
    editCount++;
    const changeSummaries = pageChange.summary.join(txt.summarySeparator);
    const summary = txt.summary.replace("$1", getTargetPage()).replace("$2", changeSummaries);
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
    pageChanges.push({
      title: pageTitle,
      page,
      contentBefore: [],
      links: [],
      summary: []
    });
  }
  const lastPageChange = pageChanges.at(-1);
  lastPageChange.contentBefore.push(oldContent);
  lastPageChange.links.push(link);
  lastPageChange.summary.push(summary);
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
  errorBox.text(txt.error.replace("$1", errorDescription));
  errorBox.append(createButton(txt.dismissError, () => {
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
    contextPrev = txt.ellipsis + contextPrev;
  }
  let contextNext = text.slice(link.end, contextEnd);
  if (contextEnd < text.length) {
    contextNext += txt.ellipsis;
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
        backlinks.push(element.title);
        if (!element.redirlinks) {
          continue;
        }
        linkTitles.push(element.title);
        const {
          redirlinks
        } = element;
        var _iterator7 = _createForOfIteratorHelper(redirlinks), _step7;
        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
            const {
              title
            } = _step7.value;
            backlinks.push(title);
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
    deferred.reject(txt.getBacklinksError.replace("$1", code));
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
    deferred.reject(txt.fetchRedirectsError.replace("$1", code));
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
    deferred.reject(txt.fetchRightsError.replace("$1", code));
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
    deferred.reject(txt.loadPageError.replace("$1", pageTitle).replace("$2", code));
  });
  return deferred.promise();
};
var saveWithCooldown = (...args) => {
  const deferred = new $.Deferred();
  pendingSaves.push({
    args,
    dfd: deferred
  });
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
    deferred.reject(txt.savePageError.replace("$1", pageTitle).replace("$2", code));
  });
  return deferred.promise();
};
//! src/DisamAssist/DisamAssist.js
$(install);
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mYWlscy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Rlc2NyaXB0b3JzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1jYWxsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NsYXNzb2YtcmF3LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtY2FsbGFibGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nZXQtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXN5bWJvbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RyeS10by1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWNhbGxhYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1Zy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1uYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9tYXRoLXRydW5jLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtYXJyYXkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1zZXQtbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9lcy1ub3QtZXhjZWVkLXNhZmUtaW50ZWdlci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5wdXNoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVsZXRlLXByb3BlcnR5LW9yLXRocm93LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LnVuc2hpZnQuanMiLCAic3JjL0Rpc2FtQXNzaXN0L21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0Rpc2FtQXNzaXN0L21vZHVsZXMvY29uZmlnLnRzIiwgInNyYy9EaXNhbUFzc2lzdC9tb2R1bGVzL2NvcmUuanMiLCAic3JjL0Rpc2FtQXNzaXN0L21vZHVsZXMvbWVzc2FnZXMuanMiLCAic3JjL0Rpc2FtQXNzaXN0L0Rpc2FtQXNzaXN0LmpzIl0sCiAgInNvdXJjZVJvb3QiOiAiLi4vR2FkZ2V0cyIsCiAgInNvdXJjZXNDb250ZW50IjogWyIndXNlIHN0cmljdCc7XG52YXIgY2hlY2sgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICYmIGl0Lk1hdGggPT09IE1hdGggJiYgaXQ7XG59O1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxubW9kdWxlLmV4cG9ydHMgPVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZ2xvYmFsLXRoaXMgLS0gc2FmZVxuICBjaGVjayh0eXBlb2YgZ2xvYmFsVGhpcyA9PSAnb2JqZWN0JyAmJiBnbG9iYWxUaGlzKSB8fFxuICBjaGVjayh0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdykgfHxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAtLSBzYWZlXG4gIGNoZWNrKHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYpIHx8XG4gIGNoZWNrKHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsKSB8fFxuICBjaGVjayh0eXBlb2YgdGhpcyA9PSAnb2JqZWN0JyAmJiB0aGlzKSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmMgLS0gZmFsbGJhY2tcbiAgKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pKCkgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBEZXRlY3QgSUU4J3MgaW5jb21wbGV0ZSBkZWZpbmVQcm9wZXJ0eSBpbXBsZW1lbnRhdGlvblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sIDEsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pWzFdICE9PSA3O1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWZ1bmN0aW9uLXByb3RvdHlwZS1iaW5kIC0tIHNhZmVcbiAgdmFyIHRlc3QgPSAoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9KS5iaW5kKCk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gdHlwZW9mIHRlc3QgIT0gJ2Z1bmN0aW9uJyB8fCB0ZXN0Lmhhc093blByb3BlcnR5KCdwcm90b3R5cGUnKTtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgY2FsbCA9IEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9CSU5EID8gY2FsbC5iaW5kKGNhbGwpIDogZnVuY3Rpb24gKCkge1xuICByZXR1cm4gY2FsbC5hcHBseShjYWxsLCBhcmd1bWVudHMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gTmFzaG9ybiB+IEpESzggYnVnXG52YXIgTkFTSE9STl9CVUcgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgJiYgISRwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHsgMTogMiB9LCAxKTtcblxuLy8gYE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGVgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QucHJvdG90eXBlLnByb3BlcnR5aXNlbnVtZXJhYmxlXG5leHBvcnRzLmYgPSBOQVNIT1JOX0JVRyA/IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKFYpIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGhpcywgVik7XG4gIHJldHVybiAhIWRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci5lbnVtZXJhYmxlO1xufSA6ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgY2FsbCA9IEZ1bmN0aW9uUHJvdG90eXBlLmNhbGw7XG52YXIgdW5jdXJyeVRoaXNXaXRoQmluZCA9IE5BVElWRV9CSU5EICYmIEZ1bmN0aW9uUHJvdG90eXBlLmJpbmQuYmluZChjYWxsLCBjYWxsKTtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfQklORCA/IHVuY3VycnlUaGlzV2l0aEJpbmQgOiBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY2FsbC5hcHBseShmbiwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG52YXIgdG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyh7fS50b1N0cmluZyk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBzdHJpbmdTbGljZSh0b1N0cmluZyhpdCksIDgsIC0xKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcbnZhciBzcGxpdCA9IHVuY3VycnlUaGlzKCcnLnNwbGl0KTtcblxuLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3Ncbm1vZHVsZS5leHBvcnRzID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyB0aHJvd3MgYW4gZXJyb3IgaW4gcmhpbm8sIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9yaGluby9pc3N1ZXMvMzQ2XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gISRPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKTtcbn0pID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjbGFzc29mKGl0KSA9PT0gJ1N0cmluZycgPyBzcGxpdChpdCwgJycpIDogJE9iamVjdChpdCk7XG59IDogJE9iamVjdDtcbiIsICIndXNlIHN0cmljdCc7XG4vLyB3ZSBjYW4ndCB1c2UganVzdCBgaXQgPT0gbnVsbGAgc2luY2Ugb2YgYGRvY3VtZW50LmFsbGAgc3BlY2lhbCBjYXNlXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLUlzSFRNTEREQS1pbnRlcm5hbC1zbG90LWFlY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID09PSBudWxsIHx8IGl0ID09PSB1bmRlZmluZWQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYFJlcXVpcmVPYmplY3RDb2VyY2libGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZXF1aXJlb2JqZWN0Y29lcmNpYmxlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXNOdWxsT3JVbmRlZmluZWQoaXQpKSB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJbmRleGVkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoaXQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1Jc0hUTUxEREEtaW50ZXJuYWwtc2xvdFxudmFyIGRvY3VtZW50QWxsID0gdHlwZW9mIGRvY3VtZW50ID09ICdvYmplY3QnICYmIGRvY3VtZW50LmFsbDtcblxuLy8gYElzQ2FsbGFibGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc2NhbGxhYmxlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9uby10eXBlb2YtdW5kZWZpbmVkIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBkb2N1bWVudEFsbCA9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudEFsbCAhPT0gdW5kZWZpbmVkID8gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJyB8fCBhcmd1bWVudCA9PT0gZG9jdW1lbnRBbGw7XG59IDogZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogaXNDYWxsYWJsZShpdCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgYUZ1bmN0aW9uID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBpc0NhbGxhYmxlKGFyZ3VtZW50KSA/IGFyZ3VtZW50IDogdW5kZWZpbmVkO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZXNwYWNlLCBtZXRob2QpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPCAyID8gYUZ1bmN0aW9uKGdsb2JhbFtuYW1lc3BhY2VdKSA6IGdsb2JhbFtuYW1lc3BhY2VdICYmIGdsb2JhbFtuYW1lc3BhY2VdW21ldGhvZF07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB1bmN1cnJ5VGhpcyh7fS5pc1Byb3RvdHlwZU9mKTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBuYXZpZ2F0b3IgIT0gJ3VuZGVmaW5lZCcgJiYgU3RyaW5nKG5hdmlnYXRvci51c2VyQWdlbnQpIHx8ICcnO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50Jyk7XG5cbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgRGVubyA9IGdsb2JhbC5EZW5vO1xudmFyIHZlcnNpb25zID0gcHJvY2VzcyAmJiBwcm9jZXNzLnZlcnNpb25zIHx8IERlbm8gJiYgRGVuby52ZXJzaW9uO1xudmFyIHY4ID0gdmVyc2lvbnMgJiYgdmVyc2lvbnMudjg7XG52YXIgbWF0Y2gsIHZlcnNpb247XG5cbmlmICh2OCkge1xuICBtYXRjaCA9IHY4LnNwbGl0KCcuJyk7XG4gIC8vIGluIG9sZCBDaHJvbWUsIHZlcnNpb25zIG9mIFY4IGlzbid0IFY4ID0gQ2hyb21lIC8gMTBcbiAgLy8gYnV0IHRoZWlyIGNvcnJlY3QgdmVyc2lvbnMgYXJlIG5vdCBpbnRlcmVzdGluZyBmb3IgdXNcbiAgdmVyc2lvbiA9IG1hdGNoWzBdID4gMCAmJiBtYXRjaFswXSA8IDQgPyAxIDogKyhtYXRjaFswXSArIG1hdGNoWzFdKTtcbn1cblxuLy8gQnJvd3NlckZTIE5vZGVKUyBgcHJvY2Vzc2AgcG9seWZpbGwgaW5jb3JyZWN0bHkgc2V0IGAudjhgIHRvIGAwLjBgXG4vLyBzbyBjaGVjayBgdXNlckFnZW50YCBldmVuIGlmIGAudjhgIGV4aXN0cywgYnV0IDBcbmlmICghdmVyc2lvbiAmJiB1c2VyQWdlbnQpIHtcbiAgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2goL0VkZ2VcXC8oXFxkKykvKTtcbiAgaWYgKCFtYXRjaCB8fCBtYXRjaFsxXSA+PSA3NCkge1xuICAgIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9DaHJvbWVcXC8oXFxkKykvKTtcbiAgICBpZiAobWF0Y2gpIHZlcnNpb24gPSArbWF0Y2hbMV07XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2ZXJzaW9uO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLXN5bWJvbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZyAqL1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24nKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcblxudmFyICRTdHJpbmcgPSBnbG9iYWwuU3RyaW5nO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5c3ltYm9scyAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xubW9kdWxlLmV4cG9ydHMgPSAhIU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN5bWJvbCA9IFN5bWJvbCgnc3ltYm9sIGRldGVjdGlvbicpO1xuICAvLyBDaHJvbWUgMzggU3ltYm9sIGhhcyBpbmNvcnJlY3QgdG9TdHJpbmcgY29udmVyc2lvblxuICAvLyBgZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzYCBwb2x5ZmlsbCBzeW1ib2xzIGNvbnZlcnRlZCB0byBvYmplY3QgYXJlIG5vdCBTeW1ib2wgaW5zdGFuY2VzXG4gIC8vIG5iOiBEbyBub3QgY2FsbCBgU3RyaW5nYCBkaXJlY3RseSB0byBhdm9pZCB0aGlzIGJlaW5nIG9wdGltaXplZCBvdXQgdG8gYHN5bWJvbCsnJ2Agd2hpY2ggd2lsbCxcbiAgLy8gb2YgY291cnNlLCBmYWlsLlxuICByZXR1cm4gISRTdHJpbmcoc3ltYm9sKSB8fCAhKE9iamVjdChzeW1ib2wpIGluc3RhbmNlb2YgU3ltYm9sKSB8fFxuICAgIC8vIENocm9tZSAzOC00MCBzeW1ib2xzIGFyZSBub3QgaW5oZXJpdGVkIGZyb20gRE9NIGNvbGxlY3Rpb25zIHByb3RvdHlwZXMgdG8gaW5zdGFuY2VzXG4gICAgIVN5bWJvbC5zaGFtICYmIFY4X1ZFUlNJT04gJiYgVjhfVkVSU0lPTiA8IDQxO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tc3ltYm9sIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zeW1ib2wtY29uc3RydWN0b3ItZGV0ZWN0aW9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX1NZTUJPTFxuICAmJiAhU3ltYm9sLnNoYW1cbiAgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mJyk7XG52YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbm1vZHVsZS5leHBvcnRzID0gVVNFX1NZTUJPTF9BU19VSUQgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyICRTeW1ib2wgPSBnZXRCdWlsdEluKCdTeW1ib2wnKTtcbiAgcmV0dXJuIGlzQ2FsbGFibGUoJFN5bWJvbCkgJiYgaXNQcm90b3R5cGVPZigkU3ltYm9sLnByb3RvdHlwZSwgJE9iamVjdChpdCkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJFN0cmluZyA9IFN0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gJFN0cmluZyhhcmd1bWVudCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuICdPYmplY3QnO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgdHJ5VG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdHJ5LXRvLXN0cmluZycpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYEFzc2VydDogSXNDYWxsYWJsZShhcmd1bWVudCkgaXMgdHJ1ZWBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIGlmIChpc0NhbGxhYmxlKGFyZ3VtZW50KSkgcmV0dXJuIGFyZ3VtZW50O1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcih0cnlUb1N0cmluZyhhcmd1bWVudCkgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkJyk7XG5cbi8vIGBHZXRNZXRob2RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1nZXRtZXRob2Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFYsIFApIHtcbiAgdmFyIGZ1bmMgPSBWW1BdO1xuICByZXR1cm4gaXNOdWxsT3JVbmRlZmluZWQoZnVuYykgPyB1bmRlZmluZWQgOiBhQ2FsbGFibGUoZnVuYyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgT3JkaW5hcnlUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9yZGluYXJ5dG9wcmltaXRpdmVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBwcmVmKSB7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAocHJlZiA9PT0gJ3N0cmluZycgJiYgaXNDYWxsYWJsZShmbiA9IGlucHV0LnRvU3RyaW5nKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKGlzQ2FsbGFibGUoZm4gPSBpbnB1dC52YWx1ZU9mKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHByZWYgIT09ICdzdHJpbmcnICYmIGlzQ2FsbGFibGUoZm4gPSBpbnB1dC50b1N0cmluZykgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHRyeSB7XG4gICAgZGVmaW5lUHJvcGVydHkoZ2xvYmFsLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGdsb2JhbFtrZXldID0gdmFsdWU7XG4gIH0gcmV0dXJuIHZhbHVlO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcblxudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgZGVmaW5lR2xvYmFsUHJvcGVydHkoU0hBUkVELCB7fSk7XG5cbm1vZHVsZS5leHBvcnRzID0gc3RvcmU7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xudmFyIHN0b3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHt9KTtcbn0pKCd2ZXJzaW9ucycsIFtdKS5wdXNoKHtcbiAgdmVyc2lvbjogJzMuMzUuMScsXG4gIG1vZGU6IElTX1BVUkUgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAxNC0yMDI0IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJyxcbiAgbGljZW5zZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2Jsb2IvdjMuMzUuMS9MSUNFTlNFJyxcbiAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMnXG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbi8vIGBUb09iamVjdGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvb2JqZWN0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gJE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcblxudmFyIGhhc093blByb3BlcnR5ID0gdW5jdXJyeVRoaXMoe30uaGFzT3duUHJvcGVydHkpO1xuXG4vLyBgSGFzT3duUHJvcGVydHlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1oYXNvd25wcm9wZXJ0eVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1oYXNvd24gLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuaGFzT3duIHx8IGZ1bmN0aW9uIGhhc093bihpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eSh0b09iamVjdChpdCksIGtleSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxudmFyIGlkID0gMDtcbnZhciBwb3N0Zml4ID0gTWF0aC5yYW5kb20oKTtcbnZhciB0b1N0cmluZyA9IHVuY3VycnlUaGlzKDEuMC50b1N0cmluZyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnICsgKGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXkpICsgJylfJyArIHRvU3RyaW5nKCsraWQgKyBwb3N0Zml4LCAzNik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3ltYm9sLWNvbnN0cnVjdG9yLWRldGVjdGlvbicpO1xudmFyIFVTRV9TWU1CT0xfQVNfVUlEID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkJyk7XG5cbnZhciBTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyIFdlbGxLbm93blN5bWJvbHNTdG9yZSA9IHNoYXJlZCgnd2tzJyk7XG52YXIgY3JlYXRlV2VsbEtub3duU3ltYm9sID0gVVNFX1NZTUJPTF9BU19VSUQgPyBTeW1ib2xbJ2ZvciddIHx8IFN5bWJvbCA6IFN5bWJvbCAmJiBTeW1ib2wud2l0aG91dFNldHRlciB8fCB1aWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgaWYgKCFoYXNPd24oV2VsbEtub3duU3ltYm9sc1N0b3JlLCBuYW1lKSkge1xuICAgIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXSA9IE5BVElWRV9TWU1CT0wgJiYgaGFzT3duKFN5bWJvbCwgbmFtZSlcbiAgICAgID8gU3ltYm9sW25hbWVdXG4gICAgICA6IGNyZWF0ZVdlbGxLbm93blN5bWJvbCgnU3ltYm9sLicgKyBuYW1lKTtcbiAgfSByZXR1cm4gV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciBvcmRpbmFyeVRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZScpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbnZhciBUT19QUklNSVRJVkUgPSB3ZWxsS25vd25TeW1ib2woJ3RvUHJpbWl0aXZlJyk7XG5cbi8vIGBUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJpbWl0aXZlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnB1dCwgcHJlZikge1xuICBpZiAoIWlzT2JqZWN0KGlucHV0KSB8fCBpc1N5bWJvbChpbnB1dCkpIHJldHVybiBpbnB1dDtcbiAgdmFyIGV4b3RpY1RvUHJpbSA9IGdldE1ldGhvZChpbnB1dCwgVE9fUFJJTUlUSVZFKTtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKGV4b3RpY1RvUHJpbSkge1xuICAgIGlmIChwcmVmID09PSB1bmRlZmluZWQpIHByZWYgPSAnZGVmYXVsdCc7XG4gICAgcmVzdWx0ID0gY2FsbChleG90aWNUb1ByaW0sIGlucHV0LCBwcmVmKTtcbiAgICBpZiAoIWlzT2JqZWN0KHJlc3VsdCkgfHwgaXNTeW1ib2wocmVzdWx0KSkgcmV0dXJuIHJlc3VsdDtcbiAgICB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbiAgfVxuICBpZiAocHJlZiA9PT0gdW5kZWZpbmVkKSBwcmVmID0gJ251bWJlcic7XG4gIHJldHVybiBvcmRpbmFyeVRvUHJpbWl0aXZlKGlucHV0LCBwcmVmKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xudmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXN5bWJvbCcpO1xuXG4vLyBgVG9Qcm9wZXJ0eUtleWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJvcGVydHlrZXlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBrZXkgPSB0b1ByaW1pdGl2ZShhcmd1bWVudCwgJ3N0cmluZycpO1xuICByZXR1cm4gaXNTeW1ib2woa2V5KSA/IGtleSA6IGtleSArICcnO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgZG9jdW1lbnQgPSBnbG9iYWwuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBFWElTVFMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBFWElTVFMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcblxuLy8gVGhhbmtzIHRvIElFOCBmb3IgaXRzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3JlYXRlRWxlbWVudCgnZGl2JyksICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfVxuICB9KS5hICE9PSA3O1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0luZGV4ZWRPYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhc093bihPLCBQKSkgcmV0dXJuIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcighY2FsbChwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZS5mLCBPLCBQKSwgT1tQXSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbi8vIFY4IH4gQ2hyb21lIDM2LVxuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzMzNFxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0sICdwcm90b3R5cGUnLCB7XG4gICAgdmFsdWU6IDQyLFxuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KS5wcm90b3R5cGUgIT09IDQyO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgJFN0cmluZyA9IFN0cmluZztcbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgQXNzZXJ0OiBUeXBlKGFyZ3VtZW50KSBpcyBPYmplY3RgXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoaXNPYmplY3QoYXJndW1lbnQpKSByZXR1cm4gYXJndW1lbnQ7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKCRTdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgYW4gb2JqZWN0Jyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG52YXIgVjhfUFJPVE9UWVBFX0RFRklORV9CVUcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdjgtcHJvdG90eXBlLWRlZmluZS1idWcnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleScpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBFTlVNRVJBQkxFID0gJ2VudW1lcmFibGUnO1xudmFyIENPTkZJR1VSQUJMRSA9ICdjb25maWd1cmFibGUnO1xudmFyIFdSSVRBQkxFID0gJ3dyaXRhYmxlJztcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0eWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0eVxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgPyBWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA/IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKHR5cGVvZiBPID09PSAnZnVuY3Rpb24nICYmIFAgPT09ICdwcm90b3R5cGUnICYmICd2YWx1ZScgaW4gQXR0cmlidXRlcyAmJiBXUklUQUJMRSBpbiBBdHRyaWJ1dGVzICYmICFBdHRyaWJ1dGVzW1dSSVRBQkxFXSkge1xuICAgIHZhciBjdXJyZW50ID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKTtcbiAgICBpZiAoY3VycmVudCAmJiBjdXJyZW50W1dSSVRBQkxFXSkge1xuICAgICAgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gICAgICBBdHRyaWJ1dGVzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IENPTkZJR1VSQUJMRSBpbiBBdHRyaWJ1dGVzID8gQXR0cmlidXRlc1tDT05GSUdVUkFCTEVdIDogY3VycmVudFtDT05GSUdVUkFCTEVdLFxuICAgICAgICBlbnVtZXJhYmxlOiBFTlVNRVJBQkxFIGluIEF0dHJpYnV0ZXMgPyBBdHRyaWJ1dGVzW0VOVU1FUkFCTEVdIDogY3VycmVudFtFTlVNRVJBQkxFXSxcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlXG4gICAgICB9O1xuICAgIH1cbiAgfSByZXR1cm4gJGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xufSA6ICRkZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiAkZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIGtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0RGVzY3JpcHRvciA9IERFU0NSSVBUT1JTICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbnZhciBFWElTVFMgPSBoYXNPd24oRnVuY3Rpb25Qcm90b3R5cGUsICduYW1lJyk7XG4vLyBhZGRpdGlvbmFsIHByb3RlY3Rpb24gZnJvbSBtaW5pZmllZCAvIG1hbmdsZWQgLyBkcm9wcGVkIGZ1bmN0aW9uIG5hbWVzXG52YXIgUFJPUEVSID0gRVhJU1RTICYmIChmdW5jdGlvbiBzb21ldGhpbmcoKSB7IC8qIGVtcHR5ICovIH0pLm5hbWUgPT09ICdzb21ldGhpbmcnO1xudmFyIENPTkZJR1VSQUJMRSA9IEVYSVNUUyAmJiAoIURFU0NSSVBUT1JTIHx8IChERVNDUklQVE9SUyAmJiBnZXREZXNjcmlwdG9yKEZ1bmN0aW9uUHJvdG90eXBlLCAnbmFtZScpLmNvbmZpZ3VyYWJsZSkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgRVhJU1RTOiBFWElTVFMsXG4gIFBST1BFUjogUFJPUEVSLFxuICBDT05GSUdVUkFCTEU6IENPTkZJR1VSQUJMRVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHN0b3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xuXG52YXIgZnVuY3Rpb25Ub1N0cmluZyA9IHVuY3VycnlUaGlzKEZ1bmN0aW9uLnRvU3RyaW5nKTtcblxuLy8gdGhpcyBoZWxwZXIgYnJva2VuIGluIGBjb3JlLWpzQDMuNC4xLTMuNC40YCwgc28gd2UgY2FuJ3QgdXNlIGBzaGFyZWRgIGhlbHBlclxuaWYgKCFpc0NhbGxhYmxlKHN0b3JlLmluc3BlY3RTb3VyY2UpKSB7XG4gIHN0b3JlLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb25Ub1N0cmluZyhpdCk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RvcmUuaW5zcGVjdFNvdXJjZTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIFdlYWtNYXAgPSBnbG9iYWwuV2Vha01hcDtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0NhbGxhYmxlKFdlYWtNYXApICYmIC9uYXRpdmUgY29kZS8udGVzdChTdHJpbmcoV2Vha01hcCkpO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xuXG52YXIga2V5cyA9IHNoYXJlZCgna2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIGtleXNba2V5XSB8fCAoa2V5c1trZXldID0gdWlkKGtleSkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfV0VBS19NQVAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2Vhay1tYXAtYmFzaWMtZGV0ZWN0aW9uJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcbnZhciBzaGFyZWRLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLWtleScpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcblxudmFyIE9CSkVDVF9BTFJFQURZX0lOSVRJQUxJWkVEID0gJ09iamVjdCBhbHJlYWR5IGluaXRpYWxpemVkJztcbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xudmFyIFdlYWtNYXAgPSBnbG9iYWwuV2Vha01hcDtcbnZhciBzZXQsIGdldCwgaGFzO1xuXG52YXIgZW5mb3JjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaGFzKGl0KSA/IGdldChpdCkgOiBzZXQoaXQsIHt9KTtcbn07XG5cbnZhciBnZXR0ZXJGb3IgPSBmdW5jdGlvbiAoVFlQRSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGl0KSB7XG4gICAgdmFyIHN0YXRlO1xuICAgIGlmICghaXNPYmplY3QoaXQpIHx8IChzdGF0ZSA9IGdldChpdCkpLnR5cGUgIT09IFRZUEUpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0luY29tcGF0aWJsZSByZWNlaXZlciwgJyArIFRZUEUgKyAnIHJlcXVpcmVkJyk7XG4gICAgfSByZXR1cm4gc3RhdGU7XG4gIH07XG59O1xuXG5pZiAoTkFUSVZFX1dFQUtfTUFQIHx8IHNoYXJlZC5zdGF0ZSkge1xuICB2YXIgc3RvcmUgPSBzaGFyZWQuc3RhdGUgfHwgKHNoYXJlZC5zdGF0ZSA9IG5ldyBXZWFrTWFwKCkpO1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1zZWxmLWFzc2lnbiAtLSBwcm90b3R5cGUgbWV0aG9kcyBwcm90ZWN0aW9uICovXG4gIHN0b3JlLmdldCA9IHN0b3JlLmdldDtcbiAgc3RvcmUuaGFzID0gc3RvcmUuaGFzO1xuICBzdG9yZS5zZXQgPSBzdG9yZS5zZXQ7XG4gIC8qIGVzbGludC1lbmFibGUgbm8tc2VsZi1hc3NpZ24gLS0gcHJvdG90eXBlIG1ldGhvZHMgcHJvdGVjdGlvbiAqL1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgaWYgKHN0b3JlLmhhcyhpdCkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIHN0b3JlLnNldChpdCwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHN0b3JlLmdldChpdCkgfHwge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBzdG9yZS5oYXMoaXQpO1xuICB9O1xufSBlbHNlIHtcbiAgdmFyIFNUQVRFID0gc2hhcmVkS2V5KCdzdGF0ZScpO1xuICBoaWRkZW5LZXlzW1NUQVRFXSA9IHRydWU7XG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICBpZiAoaGFzT3duKGl0LCBTVEFURSkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShpdCwgU1RBVEUsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBoYXNPd24oaXQsIFNUQVRFKSA/IGl0W1NUQVRFXSA6IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaGFzT3duKGl0LCBTVEFURSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldCxcbiAgZ2V0OiBnZXQsXG4gIGhhczogaGFzLFxuICBlbmZvcmNlOiBlbmZvcmNlLFxuICBnZXR0ZXJGb3I6IGdldHRlckZvclxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIENPTkZJR1VSQUJMRV9GVU5DVElPTl9OQU1FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLW5hbWUnKS5DT05GSUdVUkFCTEU7XG52YXIgaW5zcGVjdFNvdXJjZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnNwZWN0LXNvdXJjZScpO1xudmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUnKTtcblxudmFyIGVuZm9yY2VJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5lbmZvcmNlO1xudmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldDtcbnZhciAkU3RyaW5nID0gU3RyaW5nO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG52YXIgcmVwbGFjZSA9IHVuY3VycnlUaGlzKCcnLnJlcGxhY2UpO1xudmFyIGpvaW4gPSB1bmN1cnJ5VGhpcyhbXS5qb2luKTtcblxudmFyIENPTkZJR1VSQUJMRV9MRU5HVEggPSBERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHkoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9LCAnbGVuZ3RoJywgeyB2YWx1ZTogOCB9KS5sZW5ndGggIT09IDg7XG59KTtcblxudmFyIFRFTVBMQVRFID0gU3RyaW5nKFN0cmluZykuc3BsaXQoJ1N0cmluZycpO1xuXG52YXIgbWFrZUJ1aWx0SW4gPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSwgbmFtZSwgb3B0aW9ucykge1xuICBpZiAoc3RyaW5nU2xpY2UoJFN0cmluZyhuYW1lKSwgMCwgNykgPT09ICdTeW1ib2woJykge1xuICAgIG5hbWUgPSAnWycgKyByZXBsYWNlKCRTdHJpbmcobmFtZSksIC9eU3ltYm9sXFwoKFteKV0qKVxcKS4qJC8sICckMScpICsgJ10nO1xuICB9XG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZ2V0dGVyKSBuYW1lID0gJ2dldCAnICsgbmFtZTtcbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5zZXR0ZXIpIG5hbWUgPSAnc2V0ICcgKyBuYW1lO1xuICBpZiAoIWhhc093bih2YWx1ZSwgJ25hbWUnKSB8fCAoQ09ORklHVVJBQkxFX0ZVTkNUSU9OX05BTUUgJiYgdmFsdWUubmFtZSAhPT0gbmFtZSkpIHtcbiAgICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5KHZhbHVlLCAnbmFtZScsIHsgdmFsdWU6IG5hbWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KTtcbiAgICBlbHNlIHZhbHVlLm5hbWUgPSBuYW1lO1xuICB9XG4gIGlmIChDT05GSUdVUkFCTEVfTEVOR1RIICYmIG9wdGlvbnMgJiYgaGFzT3duKG9wdGlvbnMsICdhcml0eScpICYmIHZhbHVlLmxlbmd0aCAhPT0gb3B0aW9ucy5hcml0eSkge1xuICAgIGRlZmluZVByb3BlcnR5KHZhbHVlLCAnbGVuZ3RoJywgeyB2YWx1ZTogb3B0aW9ucy5hcml0eSB9KTtcbiAgfVxuICB0cnkge1xuICAgIGlmIChvcHRpb25zICYmIGhhc093bihvcHRpb25zLCAnY29uc3RydWN0b3InKSAmJiBvcHRpb25zLmNvbnN0cnVjdG9yKSB7XG4gICAgICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5KHZhbHVlLCAncHJvdG90eXBlJywgeyB3cml0YWJsZTogZmFsc2UgfSk7XG4gICAgLy8gaW4gVjggfiBDaHJvbWUgNTMsIHByb3RvdHlwZXMgb2Ygc29tZSBtZXRob2RzLCBsaWtlIGBBcnJheS5wcm90b3R5cGUudmFsdWVzYCwgYXJlIG5vbi13cml0YWJsZVxuICAgIH0gZWxzZSBpZiAodmFsdWUucHJvdG90eXBlKSB2YWx1ZS5wcm90b3R5cGUgPSB1bmRlZmluZWQ7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgdmFyIHN0YXRlID0gZW5mb3JjZUludGVybmFsU3RhdGUodmFsdWUpO1xuICBpZiAoIWhhc093bihzdGF0ZSwgJ3NvdXJjZScpKSB7XG4gICAgc3RhdGUuc291cmNlID0gam9pbihURU1QTEFURSwgdHlwZW9mIG5hbWUgPT0gJ3N0cmluZycgPyBuYW1lIDogJycpO1xuICB9IHJldHVybiB2YWx1ZTtcbn07XG5cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWV4dGVuZC1uYXRpdmUgLS0gcmVxdWlyZWRcbkZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZyA9IG1ha2VCdWlsdEluKGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gaXNDYWxsYWJsZSh0aGlzKSAmJiBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpLnNvdXJjZSB8fCBpbnNwZWN0U291cmNlKHRoaXMpO1xufSwgJ3RvU3RyaW5nJyk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgbWFrZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWFrZS1idWlsdC1pbicpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywga2V5LCB2YWx1ZSwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcbiAgdmFyIHNpbXBsZSA9IG9wdGlvbnMuZW51bWVyYWJsZTtcbiAgdmFyIG5hbWUgPSBvcHRpb25zLm5hbWUgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubmFtZSA6IGtleTtcbiAgaWYgKGlzQ2FsbGFibGUodmFsdWUpKSBtYWtlQnVpbHRJbih2YWx1ZSwgbmFtZSwgb3B0aW9ucyk7XG4gIGlmIChvcHRpb25zLmdsb2JhbCkge1xuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2UgZGVmaW5lR2xvYmFsUHJvcGVydHkoa2V5LCB2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghb3B0aW9ucy51bnNhZmUpIGRlbGV0ZSBPW2tleV07XG4gICAgICBlbHNlIGlmIChPW2tleV0pIHNpbXBsZSA9IHRydWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2UgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihPLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiAhb3B0aW9ucy5ub25Db25maWd1cmFibGUsXG4gICAgICB3cml0YWJsZTogIW9wdGlvbnMubm9uV3JpdGFibGVcbiAgICB9KTtcbiAgfSByZXR1cm4gTztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuXG4vLyBgTWF0aC50cnVuY2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW1hdGgudHJ1bmNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1tYXRoLXRydW5jIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gTWF0aC50cnVuYyB8fCBmdW5jdGlvbiB0cnVuYyh4KSB7XG4gIHZhciBuID0gK3g7XG4gIHJldHVybiAobiA+IDAgPyBmbG9vciA6IGNlaWwpKG4pO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdHJ1bmMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWF0aC10cnVuYycpO1xuXG4vLyBgVG9JbnRlZ2VyT3JJbmZpbml0eWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvaW50ZWdlcm9yaW5maW5pdHlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBudW1iZXIgPSArYXJndW1lbnQ7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gIHJldHVybiBudW1iZXIgIT09IG51bWJlciB8fCBudW1iZXIgPT09IDAgPyAwIDogdHJ1bmMobnVtYmVyKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xuXG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5cbi8vIEhlbHBlciBmb3IgYSBwb3B1bGFyIHJlcGVhdGluZyBjYXNlIG9mIHRoZSBzcGVjOlxuLy8gTGV0IGludGVnZXIgYmUgPyBUb0ludGVnZXIoaW5kZXgpLlxuLy8gSWYgaW50ZWdlciA8IDAsIGxldCByZXN1bHQgYmUgbWF4KChsZW5ndGggKyBpbnRlZ2VyKSwgMCk7IGVsc2UgbGV0IHJlc3VsdCBiZSBtaW4oaW50ZWdlciwgbGVuZ3RoKS5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgdmFyIGludGVnZXIgPSB0b0ludGVnZXJPckluZmluaXR5KGluZGV4KTtcbiAgcmV0dXJuIGludGVnZXIgPCAwID8gbWF4KGludGVnZXIgKyBsZW5ndGgsIDApIDogbWluKGludGVnZXIsIGxlbmd0aCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHknKTtcblxudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBgVG9MZW5ndGhgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b2xlbmd0aFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIGxlbiA9IHRvSW50ZWdlck9ySW5maW5pdHkoYXJndW1lbnQpO1xuICByZXR1cm4gbGVuID4gMCA/IG1pbihsZW4sIDB4MUZGRkZGRkZGRkZGRkYpIDogMDsgLy8gMiAqKiA1MyAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG5cbi8vIGBMZW5ndGhPZkFycmF5TGlrZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWxlbmd0aG9mYXJyYXlsaWtlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHRvTGVuZ3RoKG9iai5sZW5ndGgpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS57IGluZGV4T2YsIGluY2x1ZGVzIH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gbGVuZ3RoT2ZBcnJheUxpa2UoTyk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9PSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICAgICAgaWYgKHZhbHVlICE9PSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgaWYgKChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSAmJiBPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcbiAgaW5jbHVkZXM6IGNyZWF0ZU1ldGhvZCh0cnVlKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5pbmRleE9mYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5kZXhvZlxuICBpbmRleE9mOiBjcmVhdGVNZXRob2QoZmFsc2UpXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIGluZGV4T2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMnKS5pbmRleE9mO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcblxudmFyIHB1c2ggPSB1bmN1cnJ5VGhpcyhbXS5wdXNoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgIWhhc093bihoaWRkZW5LZXlzLCBrZXkpICYmIGhhc093bihPLCBrZXkpICYmIHB1c2gocmVzdWx0LCBrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzT3duKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHB1c2gocmVzdWx0LCBrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIElFOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSBbXG4gICdjb25zdHJ1Y3RvcicsXG4gICdoYXNPd25Qcm9wZXJ0eScsXG4gICdpc1Byb3RvdHlwZU9mJyxcbiAgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJyxcbiAgJ3RvTG9jYWxlU3RyaW5nJyxcbiAgJ3RvU3RyaW5nJyxcbiAgJ3ZhbHVlT2YnXG5dO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpbnRlcm5hbE9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG5cbnZhciBoaWRkZW5LZXlzID0gZW51bUJ1Z0tleXMuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eW5hbWVzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5bmFtZXMgLS0gc2FmZVxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHJldHVybiBpbnRlcm5hbE9iamVjdEtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlzeW1ib2xzIC0tIHNhZmVcbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcycpO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG5cbnZhciBjb25jYXQgPSB1bmN1cnJ5VGhpcyhbXS5jb25jYXQpO1xuXG4vLyBhbGwgb2JqZWN0IGtleXMsIGluY2x1ZGVzIG5vbi1lbnVtZXJhYmxlIGFuZCBzeW1ib2xzXG5tb2R1bGUuZXhwb3J0cyA9IGdldEJ1aWx0SW4oJ1JlZmxlY3QnLCAnb3duS2V5cycpIHx8IGZ1bmN0aW9uIG93bktleXMoaXQpIHtcbiAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlLmYoYW5PYmplY3QoaXQpKTtcbiAgdmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZS5mO1xuICByZXR1cm4gZ2V0T3duUHJvcGVydHlTeW1ib2xzID8gY29uY2F0KGtleXMsIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkpIDoga2V5cztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgb3duS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vd24ta2V5cycpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSwgZXhjZXB0aW9ucykge1xuICB2YXIga2V5cyA9IG93bktleXMoc291cmNlKTtcbiAgdmFyIGRlZmluZVByb3BlcnR5ID0gZGVmaW5lUHJvcGVydHlNb2R1bGUuZjtcbiAgdmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZS5mO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICBpZiAoIWhhc093bih0YXJnZXQsIGtleSkgJiYgIShleGNlcHRpb25zICYmIGhhc093bihleGNlcHRpb25zLCBrZXkpKSkge1xuICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgIH1cbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbnZhciByZXBsYWNlbWVudCA9IC8jfFxcLnByb3RvdHlwZVxcLi87XG5cbnZhciBpc0ZvcmNlZCA9IGZ1bmN0aW9uIChmZWF0dXJlLCBkZXRlY3Rpb24pIHtcbiAgdmFyIHZhbHVlID0gZGF0YVtub3JtYWxpemUoZmVhdHVyZSldO1xuICByZXR1cm4gdmFsdWUgPT09IFBPTFlGSUxMID8gdHJ1ZVxuICAgIDogdmFsdWUgPT09IE5BVElWRSA/IGZhbHNlXG4gICAgOiBpc0NhbGxhYmxlKGRldGVjdGlvbikgPyBmYWlscyhkZXRlY3Rpb24pXG4gICAgOiAhIWRldGVjdGlvbjtcbn07XG5cbnZhciBub3JtYWxpemUgPSBpc0ZvcmNlZC5ub3JtYWxpemUgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gIHJldHVybiBTdHJpbmcoc3RyaW5nKS5yZXBsYWNlKHJlcGxhY2VtZW50LCAnLicpLnRvTG93ZXJDYXNlKCk7XG59O1xuXG52YXIgZGF0YSA9IGlzRm9yY2VkLmRhdGEgPSB7fTtcbnZhciBOQVRJVkUgPSBpc0ZvcmNlZC5OQVRJVkUgPSAnTic7XG52YXIgUE9MWUZJTEwgPSBpc0ZvcmNlZC5QT0xZRklMTCA9ICdQJztcblxubW9kdWxlLmV4cG9ydHMgPSBpc0ZvcmNlZDtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJykuZjtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgZGVmaW5lQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4nKTtcbnZhciBkZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5Jyk7XG52YXIgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jb3B5LWNvbnN0cnVjdG9yLXByb3BlcnRpZXMnKTtcbnZhciBpc0ZvcmNlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1mb3JjZWQnKTtcblxuLypcbiAgb3B0aW9ucy50YXJnZXQgICAgICAgICAtIG5hbWUgb2YgdGhlIHRhcmdldCBvYmplY3RcbiAgb3B0aW9ucy5nbG9iYWwgICAgICAgICAtIHRhcmdldCBpcyB0aGUgZ2xvYmFsIG9iamVjdFxuICBvcHRpb25zLnN0YXQgICAgICAgICAgIC0gZXhwb3J0IGFzIHN0YXRpYyBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnByb3RvICAgICAgICAgIC0gZXhwb3J0IGFzIHByb3RvdHlwZSBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnJlYWwgICAgICAgICAgIC0gcmVhbCBwcm90b3R5cGUgbWV0aG9kIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy5mb3JjZWQgICAgICAgICAtIGV4cG9ydCBldmVuIGlmIHRoZSBuYXRpdmUgZmVhdHVyZSBpcyBhdmFpbGFibGVcbiAgb3B0aW9ucy5iaW5kICAgICAgICAgICAtIGJpbmQgbWV0aG9kcyB0byB0aGUgdGFyZ2V0LCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMud3JhcCAgICAgICAgICAgLSB3cmFwIGNvbnN0cnVjdG9ycyB0byBwcmV2ZW50aW5nIGdsb2JhbCBwb2xsdXRpb24sIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy51bnNhZmUgICAgICAgICAtIHVzZSB0aGUgc2ltcGxlIGFzc2lnbm1lbnQgb2YgcHJvcGVydHkgaW5zdGVhZCBvZiBkZWxldGUgKyBkZWZpbmVQcm9wZXJ0eVxuICBvcHRpb25zLnNoYW0gICAgICAgICAgIC0gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuICBvcHRpb25zLmVudW1lcmFibGUgICAgIC0gZXhwb3J0IGFzIGVudW1lcmFibGUgcHJvcGVydHlcbiAgb3B0aW9ucy5kb250Q2FsbEdldFNldCAtIHByZXZlbnQgY2FsbGluZyBhIGdldHRlciBvbiB0YXJnZXRcbiAgb3B0aW9ucy5uYW1lICAgICAgICAgICAtIHRoZSAubmFtZSBvZiB0aGUgZnVuY3Rpb24gaWYgaXQgZG9lcyBub3QgbWF0Y2ggdGhlIGtleVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9wdGlvbnMsIHNvdXJjZSkge1xuICB2YXIgVEFSR0VUID0gb3B0aW9ucy50YXJnZXQ7XG4gIHZhciBHTE9CQUwgPSBvcHRpb25zLmdsb2JhbDtcbiAgdmFyIFNUQVRJQyA9IG9wdGlvbnMuc3RhdDtcbiAgdmFyIEZPUkNFRCwgdGFyZ2V0LCBrZXksIHRhcmdldFByb3BlcnR5LCBzb3VyY2VQcm9wZXJ0eSwgZGVzY3JpcHRvcjtcbiAgaWYgKEdMT0JBTCkge1xuICAgIHRhcmdldCA9IGdsb2JhbDtcbiAgfSBlbHNlIGlmIChTVEFUSUMpIHtcbiAgICB0YXJnZXQgPSBnbG9iYWxbVEFSR0VUXSB8fCBkZWZpbmVHbG9iYWxQcm9wZXJ0eShUQVJHRVQsIHt9KTtcbiAgfSBlbHNlIHtcbiAgICB0YXJnZXQgPSBnbG9iYWxbVEFSR0VUXSAmJiBnbG9iYWxbVEFSR0VUXS5wcm90b3R5cGU7XG4gIH1cbiAgaWYgKHRhcmdldCkgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgc291cmNlUHJvcGVydHkgPSBzb3VyY2Vba2V5XTtcbiAgICBpZiAob3B0aW9ucy5kb250Q2FsbEdldFNldCkge1xuICAgICAgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSk7XG4gICAgICB0YXJnZXRQcm9wZXJ0eSA9IGRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci52YWx1ZTtcbiAgICB9IGVsc2UgdGFyZ2V0UHJvcGVydHkgPSB0YXJnZXRba2V5XTtcbiAgICBGT1JDRUQgPSBpc0ZvcmNlZChHTE9CQUwgPyBrZXkgOiBUQVJHRVQgKyAoU1RBVElDID8gJy4nIDogJyMnKSArIGtleSwgb3B0aW9ucy5mb3JjZWQpO1xuICAgIC8vIGNvbnRhaW5lZCBpbiB0YXJnZXRcbiAgICBpZiAoIUZPUkNFRCAmJiB0YXJnZXRQcm9wZXJ0eSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodHlwZW9mIHNvdXJjZVByb3BlcnR5ID09IHR5cGVvZiB0YXJnZXRQcm9wZXJ0eSkgY29udGludWU7XG4gICAgICBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzKHNvdXJjZVByb3BlcnR5LCB0YXJnZXRQcm9wZXJ0eSk7XG4gICAgfVxuICAgIC8vIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgICBpZiAob3B0aW9ucy5zaGFtIHx8ICh0YXJnZXRQcm9wZXJ0eSAmJiB0YXJnZXRQcm9wZXJ0eS5zaGFtKSkge1xuICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KHNvdXJjZVByb3BlcnR5LCAnc2hhbScsIHRydWUpO1xuICAgIH1cbiAgICBkZWZpbmVCdWlsdEluKHRhcmdldCwga2V5LCBzb3VyY2VQcm9wZXJ0eSwgb3B0aW9ucyk7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcblxuLy8gYElzQXJyYXlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc2FycmF5XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktaXNhcnJheSAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmd1bWVudCkge1xuICByZXR1cm4gY2xhc3NvZihhcmd1bWVudCkgPT09ICdBcnJheSc7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gU2FmYXJpIDwgMTMgZG9lcyBub3QgdGhyb3cgYW4gZXJyb3IgaW4gdGhpcyBjYXNlXG52YXIgU0lMRU5UX09OX05PTl9XUklUQUJMRV9MRU5HVEhfU0VUID0gREVTQ1JJUFRPUlMgJiYgIWZ1bmN0aW9uICgpIHtcbiAgLy8gbWFrZXMgbm8gc2Vuc2Ugd2l0aG91dCBwcm9wZXIgc3RyaWN0IG1vZGUgc3VwcG9ydFxuICBpZiAodGhpcyAhPT0gdW5kZWZpbmVkKSByZXR1cm4gdHJ1ZTtcbiAgdHJ5IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoW10sICdsZW5ndGgnLCB7IHdyaXRhYmxlOiBmYWxzZSB9KS5sZW5ndGggPSAxO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBlcnJvciBpbnN0YW5jZW9mIFR5cGVFcnJvcjtcbiAgfVxufSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNJTEVOVF9PTl9OT05fV1JJVEFCTEVfTEVOR1RIX1NFVCA/IGZ1bmN0aW9uIChPLCBsZW5ndGgpIHtcbiAgaWYgKGlzQXJyYXkoTykgJiYgIWdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCAnbGVuZ3RoJykud3JpdGFibGUpIHtcbiAgICB0aHJvdyBuZXcgJFR5cGVFcnJvcignQ2Fubm90IHNldCByZWFkIG9ubHkgLmxlbmd0aCcpO1xuICB9IHJldHVybiBPLmxlbmd0aCA9IGxlbmd0aDtcbn0gOiBmdW5jdGlvbiAoTywgbGVuZ3RoKSB7XG4gIHJldHVybiBPLmxlbmd0aCA9IGxlbmd0aDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDB4MUZGRkZGRkZGRkZGRkY7IC8vIDIgKiogNTMgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID4gTUFYX1NBRkVfSU5URUdFUikgdGhyb3cgJFR5cGVFcnJvcignTWF4aW11bSBhbGxvd2VkIGluZGV4IGV4Y2VlZGVkJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcbnZhciBzZXRBcnJheUxlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zZXQtbGVuZ3RoJyk7XG52YXIgZG9lc05vdEV4Y2VlZFNhZmVJbnRlZ2VyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvZXMtbm90LWV4Y2VlZC1zYWZlLWludGVnZXInKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG52YXIgSU5DT1JSRUNUX1RPX0xFTkdUSCA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIFtdLnB1c2guY2FsbCh7IGxlbmd0aDogMHgxMDAwMDAwMDAgfSwgMSkgIT09IDQyOTQ5NjcyOTc7XG59KTtcblxuLy8gVjggPD0gMTIxIGFuZCBTYWZhcmkgPD0gMTUuNDsgRkYgPCAyMyB0aHJvd3MgSW50ZXJuYWxFcnJvclxuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MTI2ODFcbnZhciBwcm9wZXJFcnJvck9uTm9uV3JpdGFibGVMZW5ndGggPSBmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFtdLCAnbGVuZ3RoJywgeyB3cml0YWJsZTogZmFsc2UgfSkucHVzaCgpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBlcnJvciBpbnN0YW5jZW9mIFR5cGVFcnJvcjtcbiAgfVxufTtcblxudmFyIEZPUkNFRCA9IElOQ09SUkVDVF9UT19MRU5HVEggfHwgIXByb3BlckVycm9yT25Ob25Xcml0YWJsZUxlbmd0aCgpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnB1c2hgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUucHVzaFxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGFyaXR5OiAxLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFycyAtLSByZXF1aXJlZCBmb3IgYC5sZW5ndGhgXG4gIHB1c2g6IGZ1bmN0aW9uIHB1c2goaXRlbSkge1xuICAgIHZhciBPID0gdG9PYmplY3QodGhpcyk7XG4gICAgdmFyIGxlbiA9IGxlbmd0aE9mQXJyYXlMaWtlKE8pO1xuICAgIHZhciBhcmdDb3VudCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgZG9lc05vdEV4Y2VlZFNhZmVJbnRlZ2VyKGxlbiArIGFyZ0NvdW50KTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ0NvdW50OyBpKyspIHtcbiAgICAgIE9bbGVuXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgIGxlbisrO1xuICAgIH1cbiAgICBzZXRBcnJheUxlbmd0aChPLCBsZW4pO1xuICAgIHJldHVybiBsZW47XG4gIH1cbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0cnlUb1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90cnktdG8tc3RyaW5nJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBQKSB7XG4gIGlmICghZGVsZXRlIE9bUF0pIHRocm93IG5ldyAkVHlwZUVycm9yKCdDYW5ub3QgZGVsZXRlIHByb3BlcnR5ICcgKyB0cnlUb1N0cmluZyhQKSArICcgb2YgJyArIHRyeVRvU3RyaW5nKE8pKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcbnZhciBzZXRBcnJheUxlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zZXQtbGVuZ3RoJyk7XG52YXIgZGVsZXRlUHJvcGVydHlPclRocm93ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlbGV0ZS1wcm9wZXJ0eS1vci10aHJvdycpO1xudmFyIGRvZXNOb3RFeGNlZWRTYWZlSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2VzLW5vdC1leGNlZWQtc2FmZS1pbnRlZ2VyJyk7XG5cbi8vIElFOC1cbnZhciBJTkNPUlJFQ1RfUkVTVUxUID0gW10udW5zaGlmdCgwKSAhPT0gMTtcblxuLy8gVjggfiBDaHJvbWUgPCA3MSBhbmQgU2FmYXJpIDw9IDE1LjQsIEZGIDwgMjMgdGhyb3dzIEludGVybmFsRXJyb3JcbnZhciBwcm9wZXJFcnJvck9uTm9uV3JpdGFibGVMZW5ndGggPSBmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFtdLCAnbGVuZ3RoJywgeyB3cml0YWJsZTogZmFsc2UgfSkudW5zaGlmdCgpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBlcnJvciBpbnN0YW5jZW9mIFR5cGVFcnJvcjtcbiAgfVxufTtcblxudmFyIEZPUkNFRCA9IElOQ09SUkVDVF9SRVNVTFQgfHwgIXByb3BlckVycm9yT25Ob25Xcml0YWJsZUxlbmd0aCgpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnVuc2hpZnRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUudW5zaGlmdFxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGFyaXR5OiAxLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFycyAtLSByZXF1aXJlZCBmb3IgYC5sZW5ndGhgXG4gIHVuc2hpZnQ6IGZ1bmN0aW9uIHVuc2hpZnQoaXRlbSkge1xuICAgIHZhciBPID0gdG9PYmplY3QodGhpcyk7XG4gICAgdmFyIGxlbiA9IGxlbmd0aE9mQXJyYXlMaWtlKE8pO1xuICAgIHZhciBhcmdDb3VudCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgaWYgKGFyZ0NvdW50KSB7XG4gICAgICBkb2VzTm90RXhjZWVkU2FmZUludGVnZXIobGVuICsgYXJnQ291bnQpO1xuICAgICAgdmFyIGsgPSBsZW47XG4gICAgICB3aGlsZSAoay0tKSB7XG4gICAgICAgIHZhciB0byA9IGsgKyBhcmdDb3VudDtcbiAgICAgICAgaWYgKGsgaW4gTykgT1t0b10gPSBPW2tdO1xuICAgICAgICBlbHNlIGRlbGV0ZVByb3BlcnR5T3JUaHJvdyhPLCB0byk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGFyZ0NvdW50OyBqKyspIHtcbiAgICAgICAgT1tqXSA9IGFyZ3VtZW50c1tqXTtcbiAgICAgIH1cbiAgICB9IHJldHVybiBzZXRBcnJheUxlbmd0aChPLCBsZW4gKyBhcmdDb3VudCk7XG4gIH1cbn0pO1xuIiwgImNvbnN0IFdHX0FDVElPTjogTWVkaWFXaWtpQ29uZmlnTWFwV2dBY3Rpb24gPSBtdy5jb25maWcuZ2V0KCd3Z0FjdGlvbicpO1xuXG5leHBvcnQge1dHX0FDVElPTn07XG4iLCAiY29uc3QgY2ZnID0ge1xuXHQvKiBDYXRlZ29yaWVzIHdoZXJlIGRpc2FtYmlndWF0aW9uIHBhZ2VzIGFyZSBhZGRlZCAodXN1YWxseSBieSBhIHRlbXBsYXRlIGxpa2Uge3tEaXNhbWJpZ3VhdGlvbn19ICovXG5cdGRpc2FtQ2F0ZWdvcmllczogWyflhajpg6jmtojmrafkuYnpobXpnaInXSxcblx0LyogXCJDYW5vbmljYWwgbmFtZXNcIiBvZiB0aGUgdGVtcGxhdGVzIHRoYXQgbWF5IGFwcGVhciBhZnRlciBhbWJpZ3VvdXMgbGlua3MgYW5kIHdoaWNoIHNob3VsZCBiZSByZW1vdmVkIHdoZW4gZml4aW5nIHRob3NlIGxpbmtzICovXG5cdGRpc2FtTGlua1RlbXBsYXRlczogW1xuXHRcdCdEaXNhbWJpZ3VhdGlvbiBuZWVkZWQnLFxuXHRcdCdBbWJpZ3VvdXMgbGluaycsXG5cdFx0J0FtYmxpbmsnLFxuXHRcdCdEYWIgbmVlZGVkJyxcblx0XHQnRGlzYW1iLWxpbmsnLFxuXHRcdCdEaXNhbWJpZyBuZWVkZWQnLFxuXHRcdCdEaXNhbWJpZ3VhdGUnLFxuXHRcdCdEbicsXG5cdFx0J05lZWRkYWInLFxuXHRdLFxuXHQvKiBcIkNhbm9uaWNhbCBuYW1lc1wiIG9mIHRoZSB0ZW1wbGF0ZXMgdGhhdCBkZXNpZ25hdGUgaW50ZW50aW9uYWwgbGlua3MgdG8gZGlzYW1iaWd1YXRpb24gcGFnZXMgKi9cblx0ZGlzYW1MaW5rSWdub3JlVGVtcGxhdGVzOiBbJ1IgZnJvbSBhbWJpZ3VvdXMgcGFnZScsICdSIHRvIGRpc2FtYmlndWF0aW9uIHBhZ2UnLCAnUiBmcm9tIGluY29tcGxldGUgZGlzYW1iaWd1YXRpb24nXSxcblx0LyogRm9ybWF0IHN0cmluZyBmb3IgXCJGb28gKGRpc2FtYmlndWF0aW9uKVwiLXN0eWxlIHBhZ2VzICovXG5cdGRpc2FtRm9ybWF0OiAnJDHvvIjmtojmrafkuYnvvIknLFxuXHQvKiBSZWd1bGFyIGV4cHJlc3Npb24gbWF0Y2hpbmcgdGhlIHRpdGxlcyBvZiBkaXNhbWJpZ3VhdGlvbiBwYWdlcyAod2hlbiB0aGV5IGFyZSBkaWZmZXJlbnQgZnJvbSB0aGUgdGl0bGVzIG9mIHRoZSBwcmltYXJ5IHRvcGljcykgKi9cblx0ZGlzYW1SZWdFeHA6ICdeKC4qKe+8iCjmtojmrafkuYl85raI5q2n576pKe+8iSQnLFxuXHQvKiBUZXh0IHRoYXQgd2lsbCBiZSBpbnNlcnRlZCBhZnRlciB0aGUgbGluayBpZiB0aGUgdXNlciByZXF1ZXN0cyBoZWxwLiBJZiB0aGUgdmFsdWUgaXMgbnVsbCwgdGhlIG9wdGlvbiB0byByZXF1ZXN0IGhlbHAgd29uJ3QgYmUgb2ZmZXJlZCAqL1xuXHRkaXNhbU5lZWRlZFRleHQ6ICd7e2RufGRhdGU9e3snLmNvbmNhdCgnc3Vic3Q6JywgJ0NVUlJFTlRNT05USE5BTUUnLCAnfX0ge3snLCAnc3Vic3Q6JywgJ0NVUlJFTlRZRUFSfX19fScpLFxuXHQvKiBDb250ZW50IG9mIHRoZSBcIkZvbyAoZGlzYW1iaWd1YXRpb24pXCIgcGFnZXMgdGhhdCB3aWxsIGJlIGNyZWF0ZWQgYXV0b21hdGljYWxseSB3aGVuIHVzaW5nIERpc2FtQXNzaXN0IGZyb20gYSBcIkZvb1wiIHBhZ2UgKi9cblx0cmVkaXJlY3RUb0Rpc2FtOiAnI+mHjeWumuWQkSBbWyQxXV0nLmNvbmNhdCgne3tSIHRvIGRpc2FtYmlndWF0aW9uIHBhZ2V9fScpLFxuXHQvKiBXaGV0aGVyIGludGVudGlvbmFsIGxpbmtzIHRvIGRpc2FtYmlndWF0aW9uIHBhZ2VzIGNhbiBiZSBleHBsaWNpdGx5IG1hcmtlZCBieSBhZGRpbmcgXCIgKGRpc2FtYmlndWF0aW9uKVwiICovXG5cdGludGVudGlvbmFsTGlua09wdGlvbjogZmFsc2UsXG5cdC8qIE5hbWVzcGFjZXMgdGhhdCB3aWxsIGJlIHNlYXJjaGVkIGZvciBpbmNvbWluZyBsaW5rcyB0byB0aGUgZGlzYW1iaWd1YXRpb24gcGFnZSAocGFnZXMgaW4gb3RoZXIgbmFtZXNwYWNlcyB3aWxsIGJlIGlnbm9yZWQpICovXG5cdHRhcmdldE5hbWVzcGFjZXM6IFs2LCAxMCwgMTQsIDExOCwgMF0sXG5cdC8qIE51bWJlciBvZiBiYWNrbGlua3MgdGhhdCB3aWxsIGJlIGRvd25sb2FkZWQgYXQgb25jZSBXaGVuIHVzaW5nIGJscmVkaXJlY3QsIHRoZSBtYXhpbXVtIGxpbWl0IGlzIHN1cHBvc2VkbHkgaGFsdmVkIChzZWUgaHR0cDovL3d3dy5tZWRpYXdpa2kub3JnL3dpa2kvQVBJOkJhY2tsaW5rcykgKi9cblx0YmFja2xpbmtMaW1pdDogMjUwLFxuXHQvKiBOdW1iZXIgb2YgdGl0bGVzIHdlIGNhbiBxdWVyeSBmb3IgYXQgb25jZSAqL1xuXHRxdWVyeVRpdGxlTGltaXQ6IDUwLFxuXHQvKiBOdW1iZXIgb2YgY2hhcmFjdGVycyBiZWZvcmUgYW5kIGFmdGVyIHRoZSBpbmNvbWluZyBsaW5rIHRoYXQgd2lsbCBiZSBkaXNwbGF5ZWQgKi9cblx0cmFkaXVzOiAzMDAsXG5cdC8qIEhlaWdodCBvZiB0aGUgY29udGV4dCBib3gsIGluIGxpbmVzICovXG5cdG51bUNvbnRleHRMaW5lczogNCxcblx0LyogTnVtYmVyIG9mIHBhZ2VzIHRoYXQgd2lsbCBiZSBzdG9yZWQgYmVmb3JlIHNhdmluZywgc28gdGhhdCBjaGFuZ2VzIHRvIHRoZW0gY2FuIGJlIHVuZG9uZSBpZiBuZWVkIGJlICovXG5cdGhpc3RvcnlTaXplOiAyLFxuXHQvKiBNaW5pbXVtIHRpbWUgaW4gc2Vjb25kcyBzaW5jZSB0aGUgbGFzdCBjaGFuZ2Ugd2FzIHNhdmVkIGJlZm9yZSBhIG5ldyBlZGl0IGNhbiBiZSBtYWRlLiBBIG5lZ2F0aXZlIHZhbHVlIG9yIDAgZGlzYWJsZXMgdGhlIGNvb2xkb3duLiBVc2VycyB3aXRoIHRoZSBcImJvdFwiIHJpZ2h0IHdvbid0IGJlIGFmZmVjdGVkIGJ5IHRoZSBjb29sZG93biAqL1xuXHRlZGl0Q29vbGRvd246IDAsXG5cdC8qIFNwZWNpZnkgaG93IHRoZSB3YXRjaGxpc3QgaXMgYWZmZWN0ZWQgYnkgRGlzYW1Bc3Npc3QgZWRpdHMuIFBvc3NpYmxlIHZhbHVlczogXCJ3YXRjaFwiLCBcInVud2F0Y2hcIiwgXCJwcmVmZXJlbmNlc1wiLCBcIm5vY2hhbmdlXCIgKi9cblx0d2F0Y2g6ICdub2NoYW5nZScsXG59O1xuXG5leHBvcnQge2NmZ307XG4iLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCB7V0dfQUNUSU9OfSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCB7Y2ZnfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7dHh0fSBmcm9tICcuL21lc3NhZ2VzJztcblxuY29uc3QgYXBpID0gaW5pdE13QXBpKCdEaXNhbUFzc2lzdC8xLjEnKTtcblxubGV0IHN0YXJ0TGluaztcbmxldCB1aTtcbmxldCBsaW5rcztcbmxldCBwYWdlQ2hhbmdlcztcbmxldCBjdXJyZW50UGFnZVRpdGxlO1xubGV0IGN1cnJlbnRQYWdlUGFyYW1ldGVycztcbmxldCBjdXJyZW50TGluaztcbmxldCBwb3NzaWJsZUJhY2tsaW5rRGVzdGluYXRpb25zO1xubGV0IGZvcmNlU2FtZVBhZ2UgPSBmYWxzZTtcbmxldCBydW5uaW5nID0gZmFsc2U7XG5sZXQgY2hvb3NpbmcgPSBmYWxzZTtcbmxldCBjYW5NYXJrSW50ZW50aW9uYWxMaW5rcyA9IGZhbHNlO1xubGV0IGRpc3BsYXllZFBhZ2VzID0ge307XG5sZXQgZWRpdENvdW50ID0gMDtcbmxldCBlZGl0TGltaXQ7XG5jb25zdCBwZW5kaW5nU2F2ZXMgPSBbXTtcbmxldCBwZW5kaW5nRWRpdEJveDtcbmxldCBwZW5kaW5nRWRpdEJveFRleHQ7XG5sZXQgbGFzdEVkaXRNaWxsaXMgPSAwO1xubGV0IHJ1bm5pbmdTYXZlcyA9IGZhbHNlO1xuXG4vKiBFbnRyeSBwb2ludC4gQ2hlY2sgd2hldGhlciB3ZSBhcmUgaW4gYSBkaXNhbWJpZ3VhdGlvbiBwYWdlLiBJZiBzbywgYWRkIGEgbGluayB0byBzdGFydCB0aGUgdG9vbCAqL1xuZXhwb3J0IGNvbnN0IGluc3RhbGwgPSAoKSA9PiB7XG5cdGlmIChXR19BQ1RJT04gIT09ICd2aWV3JyB8fCAhaXNEaXNhbSgpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdCQoKCkgPT4ge1xuXHRcdGNvbnN0IHBvcnRsZXRJZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwLWNhY3Rpb25zJykgPyAncC1jYWN0aW9ucycgOiAncC10Yic7XG5cdFx0Ly8gVGhpcyBpcyBhIFwiIChkaXNhbWJpZ3VhdGlvbilcIiBwYWdlXG5cdFx0aWYgKG5ldyBSZWdFeHAoY2ZnLmRpc2FtUmVnRXhwKS50ZXN0KGdldFRpdGxlKCkpKSB7XG5cdFx0XHRjb25zdCBzdGFydE1haW5MaW5rID0gJChtdy51dGlsLmFkZFBvcnRsZXRMaW5rKHBvcnRsZXRJZCwgJyMnLCB0eHQuc3RhcnRNYWluLCAnY2EtZGlzYW1hc3Npc3QtbWFpbicpKS5vbihcblx0XHRcdFx0J2NsaWNrJyxcblx0XHRcdFx0c3RhcnRNYWluXG5cdFx0XHQpO1xuXHRcdFx0Y29uc3Qgc3RhcnRTYW1lTGluayA9ICQobXcudXRpbC5hZGRQb3J0bGV0TGluayhwb3J0bGV0SWQsICcjJywgdHh0LnN0YXJ0U2FtZSwgJ2NhLWRpc2FtYXNzaXN0LXNhbWUnKSkub24oXG5cdFx0XHRcdCdjbGljaycsXG5cdFx0XHRcdHN0YXJ0U2FtZVxuXHRcdFx0KTtcblx0XHRcdHN0YXJ0TGluayA9IHN0YXJ0TWFpbkxpbmsuYWRkKHN0YXJ0U2FtZUxpbmspO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdGFydExpbmsgPSAkKG13LnV0aWwuYWRkUG9ydGxldExpbmsocG9ydGxldElkLCAnIycsIHR4dC5zdGFydCwgJ2NhLWRpc2FtYXNzaXN0LXBhZ2UnKSkub24oJ2NsaWNrJywgc3RhcnQpO1xuXHRcdH1cblx0fSk7XG59O1xuXG4vKiBTdGFydCB0aGUgdG9vbC4gRGlzcGxheSB0aGUgVUkgYW5kIGJlZ2luIGxvb2tpbmcgZm9yIGxpbmtzIHRvIGZpeCAqL1xuY29uc3Qgc3RhcnQgPSAoKSA9PiB7XG5cdGlmIChydW5uaW5nKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0cnVubmluZyA9IHRydWU7XG5cdGxpbmtzID0gW107XG5cdHBhZ2VDaGFuZ2VzID0gW107XG5cdGRpc3BsYXllZFBhZ2VzID0ge307XG5cdGVuc3VyZURBQkV4aXN0cygpLnRoZW4oKGNhbk1hcmspID0+IHtcblx0XHRjYW5NYXJrSW50ZW50aW9uYWxMaW5rcyA9IGNhbk1hcms7XG5cdFx0Y3JlYXRlVUkoKTtcblx0XHRhZGRVbmxvYWRDb25maXJtKCk7XG5cdFx0bWFya0Rpc2FtT3B0aW9ucygpO1xuXHRcdGNoZWNrRWRpdExpbWl0KCkudGhlbigoKSA9PiB7XG5cdFx0XHR0b2dnbGVQZW5kaW5nRWRpdEJveChmYWxzZSk7XG5cdFx0XHRkb1BhZ2UoKTtcblx0XHR9KTtcblx0fSk7XG59O1xuXG4vKiBTdGFydCBEaXNhbUFzc2lzdC4gRGlzYW1iaWd1YXRlIGluY29taW5nIGxpbmtzIHRvIHRoZSBjdXJyZW50IHBhZ2UsIHJlZ2FyZGxlc3Mgb2YgdGhlIHRpdGxlLiAqL1xuY29uc3Qgc3RhcnRTYW1lID0gKCkgPT4ge1xuXHRmb3JjZVNhbWVQYWdlID0gdHJ1ZTtcblx0c3RhcnQoKTtcbn07XG5cbi8qIFN0YXJ0IERpc2FtQXNzaXN0LiBJZiB0aGUgcGFnZSB0aXRsZSBlbmRzIHdpdGggXCIgKGRpc2FtYmlndWF0aW9uKVwiLCBkaXNhbWJpZ3VhdGUgbGlua3MgdG8gdGhlIHByaW1hcnkgdG9waWMgYXJ0aWNsZS4gT3RoZXJ3aXNlLCBkaXNhbWJpZ3VhdGUgbGlua3MgdG8gdGhlIGN1cnJlbnQgcGFnZS4gKi9cbmNvbnN0IHN0YXJ0TWFpbiA9ICgpID0+IHtcblx0Zm9yY2VTYW1lUGFnZSA9IGZhbHNlO1xuXHRzdGFydCgpO1xufTtcblxuLyogQ3JlYXRlIGFuZCBzaG93IHRoZSB1c2VyIGludGVyZmFjZS4gKi9cbmNvbnN0IGNyZWF0ZVVJID0gKCkgPT4ge1xuXHRjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblx0dWkgPSB7XG5cdFx0ZGlzcGxheTogJCgnPGRpdj4nKS5hZGRDbGFzcygnZGlzYW1hc3Npc3QtYm94IGRpc2FtYXNzaXN0LW1haW5ib3gnKSxcblx0XHRmaW5pc2hlZE1lc3NhZ2U6ICQoJzxkaXY+JykudGV4dCh0eHQubm9Nb3JlTGlua3MpLmhpZGUoKSxcblx0XHRwYWdlVGl0bGVMaW5lOiAkKCc8c3Bhbj4nKS5hZGRDbGFzcygnZGlzYW1hc3Npc3QtcGFnZXRpdGxlbGluZScpLFxuXHRcdHBlbmRpbmdFZGl0Q291bnRlcjogJCgnPGRpdj4nKS5hZGRDbGFzcygnZGlzYW1hc3Npc3QtZWRpdGNvdW50ZXInKSxcblx0XHRjb250ZXh0OiAkKCc8c3Bhbj4nKS5hZGRDbGFzcygnZGlzYW1hc3Npc3QtY29udGV4dCcpLFxuXHRcdHVuZG9CdXR0b246IGNyZWF0ZUJ1dHRvbih0eHQudW5kbywgdW5kbyksXG5cdFx0b21pdEJ1dHRvbjogY3JlYXRlQnV0dG9uKHR4dC5vbWl0LCBvbWl0KSxcblx0XHRlbmRCdXR0b246IGNyZWF0ZUJ1dHRvbih0eHQuY2xvc2UsIHNhdmVBbmRFbmQpLFxuXHRcdHJlZnJlc2hCdXR0b246IGNyZWF0ZUJ1dHRvbih0eHQucmVmcmVzaCwgcmVmcmVzaCksXG5cdFx0dGl0bGVBc1RleHRCdXR0b246IGNyZWF0ZUJ1dHRvbih0eHQudGl0bGVBc1RleHQsIGNob29zZVRpdGxlRnJvbVByb21wdCksXG5cdFx0aW50ZW50aW9uYWxMaW5rQnV0dG9uOiBjYW5NYXJrSW50ZW50aW9uYWxMaW5rc1xuXHRcdFx0PyBjcmVhdGVCdXR0b24odHh0LmludGVudGlvbmFsTGluaywgY2hvb3NlSW50ZW50aW9uYWxMaW5rKVxuXHRcdFx0OiAkKCc8c3Bhbj4nKSxcblx0XHRkaXNhbU5lZWRlZEJ1dHRvbjogY2ZnLmRpc2FtTmVlZGVkVGV4dCA/IGNyZWF0ZUJ1dHRvbih0eHQuZGlzYW1OZWVkZWQsIGNob29zZURpc2FtTmVlZGVkKSA6ICQoJzxzcGFuPicpLFxuXHRcdHJlbW92ZUxpbmtCdXR0b246IGNyZWF0ZUJ1dHRvbih0eHQucmVtb3ZlTGluaywgY2hvb3NlTGlua1JlbW92YWwpLFxuXHR9O1xuXHRjb25zdCB0b3AgPSAkKCc8ZGl2PicpXG5cdFx0LmFkZENsYXNzKCdkaXNhbWFzc2lzdC10b3AnKVxuXHRcdC5hcHBlbmQoW3VpLnBlbmRpbmdFZGl0Q291bnRlciwgdWkuZmluaXNoZWRNZXNzYWdlLCB1aS5wYWdlVGl0bGVMaW5lXSk7XG5cdGNvbnN0IGxlZnRCdXR0b25zID0gJCgnPGRpdj4nKVxuXHRcdC5hZGRDbGFzcygnZGlzYW1hc3Npc3QtbGVmdGJ1dHRvbnMnKVxuXHRcdC5hcHBlbmQoW1xuXHRcdFx0dWkudGl0bGVBc1RleHRCdXR0b24sXG5cdFx0XHR1aS5yZW1vdmVMaW5rQnV0dG9uLFxuXHRcdFx0dWkuaW50ZW50aW9uYWxMaW5rQnV0dG9uLFxuXHRcdFx0dWkuZGlzYW1OZWVkZWRCdXR0b24sXG5cdFx0XHR1aS5vbWl0QnV0dG9uLFxuXHRcdF0pO1xuXHRjb25zdCByaWdodEJ1dHRvbnMgPSAkKCc8ZGl2PicpXG5cdFx0LmFkZENsYXNzKCdkaXNhbWFzc2lzdC1yaWdodGJ1dHRvbnMnKVxuXHRcdC5hcHBlbmQoW3VpLnVuZG9CdXR0b24sIHVpLnJlZnJlc2hCdXR0b24sIHVpLmVuZEJ1dHRvbl0pO1xuXHRjb25zdCBhbGxCdXR0b25zID0gJCgnPGRpdj4nKS5hZGRDbGFzcygnZGlzYW1hc3Npc3QtYWxsYnV0dG9ucycpLmFwcGVuZChbbGVmdEJ1dHRvbnMsIHJpZ2h0QnV0dG9uc10pO1xuXHR1aS5kaXNwbGF5LmFwcGVuZChbdG9wLCB1aS5jb250ZXh0LCBhbGxCdXR0b25zXSk7XG5cdHVwZGF0ZUVkaXRDb3VudGVyKCk7XG5cdHRvZ2dsZUFjdGlvbkJ1dHRvbnMoZmFsc2UpO1xuXHQvLyBJbnNlcnQgdGhlIFVJIGluIHRoZSBwYWdlXG5cdCRib2R5LmZpbmQoJyNtdy1jb250ZW50LXRleHQnKS5iZWZvcmUodWkuZGlzcGxheSk7XG5cdHVpLmRpc3BsYXkuaGlkZSgpLmZhZGVJbigpO1xufTtcblxuLyogSWYgdGhlcmUgYXJlIHBlbmRpbmcgY2hhbmdlcywgc2hvdyBhIGNvbmZpcm0gZGlhbG9nIGJlZm9yZSBjbG9zaW5nICovXG5jb25zdCBhZGRVbmxvYWRDb25maXJtID0gKCkgPT4ge1xuXHQkKHdpbmRvdykub24oJ2JlZm9yZXVubG9hZCcsICgpID0+IHtcblx0XHRpZiAocnVubmluZyAmJiBjaGVja0FjdHVhbENoYW5nZXMoKSkge1xuXHRcdFx0cmV0dXJuIHR4dC5wZW5kaW5nO1xuXHRcdH0gZWxzZSBpZiAoZWRpdENvdW50ICE9PSAwKSB7XG5cdFx0XHRyZXR1cm4gdHh0LmVkaXRJblByb2dyZXNzO1xuXHRcdH1cblx0fSk7XG59O1xuXG4vKiBNYXJrIHRoZSBkaXNhbWJpZ3VhdGlvbiBvcHRpb25zIGFzIHN1Y2ggKi9cbmNvbnN0IG1hcmtEaXNhbU9wdGlvbnMgPSAoKSA9PiB7XG5cdGNvbnN0IG9wdGlvblBhZ2VUaXRsZXMgPSBbXTtcblx0Y29uc3Qgb3B0aW9uTWFya2VycyA9IFtdO1xuXHRnZXREaXNhbU9wdGlvbnMoKS5lYWNoKChfaW5kZXgsIGVsZW1lbnQpID0+IHtcblx0XHRjb25zdCBsaW5rID0gJChlbGVtZW50KTtcblx0XHRjb25zdCB0aXRsZSA9IGV4dHJhY3RQYWdlTmFtZShsaW5rKTtcblx0XHRjb25zdCBvcHRpb25NYXJrZXIgPSAkKCc8YT4nKVxuXHRcdFx0LmF0dHIoJ2hyZWYnLCAnIycpXG5cdFx0XHQuYWRkQ2xhc3MoJ2Rpc2FtYXNzaXN0LW9wdGlvbm1hcmtlcicpXG5cdFx0XHQudGV4dCh0eHQub3B0aW9uTWFya2VyKVxuXHRcdFx0Lm9uKCdjbGljaycsIChldikgPT4ge1xuXHRcdFx0XHRldi5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRjaG9vc2VSZXBsYWNlbWVudCh0aXRsZSk7XG5cdFx0XHR9KTtcblx0XHRsaW5rLmFmdGVyKG9wdGlvbk1hcmtlcik7XG5cdFx0b3B0aW9uTWFya2Vycy5wdXNoKG9wdGlvbk1hcmtlcik7XG5cdFx0b3B0aW9uUGFnZVRpdGxlcy5wdXNoKHRpdGxlKTtcblx0fSk7XG5cdC8vIE5vdyBjaGVjayB0aGUgZGlzYW1iaWd1YXRpb24gb3B0aW9ucyBhbmQgZGlzcGxheSBhIGRpZmZlcmVudCBtZXNzYWdlIGZvciB0aG9zZSB0aGF0IGFyZVxuXHQvLyBhY3R1YWxseSB0aGUgc2FtZSBhcyB0aGUgdGFyZ2V0IHBhZ2Ugd2hlcmUgdGhlIGxpbmtzIGdvLCBhcyBjaG9vc2luZyB0aG9zZSBvcHRpb25zIGRvZXNuJ3QgcmVhbGx5XG5cdC8vIGFjY29tcGxpc2ggYW55dGhpbmcgKGV4Y2VwdCBieXBhc3NpbmcgcmVkaXJlY3RzLCB3aGljaCBtaWdodCBiZSB1c2VmdWwgaW4gc29tZSBjYXNlcylcblx0Y29uc3QgdGFyZ2V0UGFnZSA9IGdldFRhcmdldFBhZ2UoKTtcblx0ZmV0Y2hSZWRpcmVjdHMoWy4uLm9wdGlvblBhZ2VUaXRsZXMsIC4uLnRhcmdldFBhZ2VdKVxuXHRcdC5kb25lKChyZWRpcmVjdHMpID0+IHtcblx0XHRcdGNvbnN0IGVuZFRhcmdldFBhZ2UgPSByZXNvbHZlUmVkaXJlY3QodGFyZ2V0UGFnZSwgcmVkaXJlY3RzKTtcblx0XHRcdGZvciAoY29uc3QgW2lpLCBvcHRpb25QYWdlVGl0bGVdIG9mIG9wdGlvblBhZ2VUaXRsZXMuZW50cmllcygpKSB7XG5cdFx0XHRcdGNvbnN0IGVuZE9wdGlvblRpdGxlID0gcmVzb2x2ZVJlZGlyZWN0KG9wdGlvblBhZ2VUaXRsZSwgcmVkaXJlY3RzKTtcblx0XHRcdFx0aWYgKGlzU2FtZVBhZ2Uob3B0aW9uUGFnZVRpdGxlLCB0YXJnZXRQYWdlKSkge1xuXHRcdFx0XHRcdG9wdGlvbk1hcmtlcnNbaWldLnRleHQodHh0LnRhcmdldE9wdGlvbk1hcmtlcikuYWRkQ2xhc3MoJ2Rpc2FtYXNzaXN0LWN1cnJvcHRpb25tYXJrZXInKTtcblx0XHRcdFx0fSBlbHNlIGlmIChpc1NhbWVQYWdlKGVuZE9wdGlvblRpdGxlLCBlbmRUYXJnZXRQYWdlKSkge1xuXHRcdFx0XHRcdG9wdGlvbk1hcmtlcnNbaWldLnRleHQodHh0LnJlZGlyZWN0T3B0aW9uTWFya2VyKS5hZGRDbGFzcygnZGlzYW1hc3Npc3QtY3Vycm9wdGlvbm1hcmtlcicpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSlcblx0XHQuZmFpbChlcnJvcik7XG59O1xuXG4vKiBDaGVjayB3aGV0aGVyIGludGVudGlvbmFsIGxpbmtzIHRvIGRpc2FtYmlndWF0aW9uIHBhZ2VzIGNhbiBiZSBleHBsaWNpdGx5IG1hcmtlZC8qICogYXMgc3VjaCBpbiB0aGlzIHdpa2kuIElmIHNvLCBlbnN1cmUgdGhhdCBhIFwiRm9vIChkaXNhbWJpZ3VhdGlvbilcIiBwYWdlIGV4aXN0cy4vKiAqIFJldHVybnMgYSBqUXVlcnkgcHJvbWlzZSAqL1xuY29uc3QgZW5zdXJlREFCRXhpc3RzID0gKCkgPT4ge1xuXHRjb25zdCBkZWZlcnJlZCA9IG5ldyAkLkRlZmVycmVkKCk7XG5cdGNvbnN0IHRpdGxlID0gZ2V0VGl0bGUoKTtcblx0Ly8gVGhhdCBjb25jZXB0IGRvZXNuJ3QgZXhpc3QgaW4gdGhpcyB3aWtpLlxuXHRpZiAoIWNmZy5pbnRlbnRpb25hbExpbmtPcHRpb24pIHtcblx0XHRkZWZlcnJlZC5yZXNvbHZlKGZhbHNlKTtcblx0XHQvLyBcIkZvbyAoZGlzYW1iaWd1YXRpb24pXCIgZXhpc3RzOiBpdCdzIHRoZSBjdXJyZW50IHBhZ2UuXG5cdH0gZWxzZSBpZiAobmV3IFJlZ0V4cChjZmcuZGlzYW1SZWdFeHApLmV4ZWModGl0bGUpKSB7XG5cdFx0ZGVmZXJyZWQucmVzb2x2ZSh0cnVlKTtcblx0fSBlbHNlIHtcblx0XHRjb25zdCBkaXNhbVRpdGxlID0gY2ZnLmRpc2FtRm9ybWF0LnJlcGxhY2UoJyQxJywgdGl0bGUpO1xuXHRcdGxvYWRQYWdlKGRpc2FtVGl0bGUpXG5cdFx0XHQuZG9uZSgocGFnZSkgPT4ge1xuXHRcdFx0XHQvLyBcIkZvbyAoZGlzYW1iaWd1YXRpb24pXCIgZG9lc24ndCBleGlzdC5cblx0XHRcdFx0aWYgKHBhZ2UubWlzc2luZykge1xuXHRcdFx0XHRcdC8vIFdlIHRyeSB0byBjcmVhdGUgaXRcblx0XHRcdFx0XHRwYWdlLmNvbnRlbnQgPSBjZmcucmVkaXJlY3RUb0Rpc2FtLnJlcGxhY2UoJyQxJywgdGl0bGUpO1xuXHRcdFx0XHRcdGNvbnN0IHN1bW1hcnkgPSB0eHQucmVkaXJlY3RTdW1tYXJ5LnJlcGxhY2UoJyQxJywgdGl0bGUpO1xuXHRcdFx0XHRcdHNhdmVQYWdlKGRpc2FtVGl0bGUsIHBhZ2UsIHN1bW1hcnksIGZhbHNlLCB0cnVlKVxuXHRcdFx0XHRcdFx0LmRvbmUoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKHRydWUpO1xuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdC5mYWlsKChkZXNjcmlwdGlvbikgPT4ge1xuXHRcdFx0XHRcdFx0XHRlcnJvcihkZXNjcmlwdGlvbik7XG5cdFx0XHRcdFx0XHRcdGRlZmVycmVkLnJlc29sdmUoZmFsc2UpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0Ly8gSXQgZG9lcyBleGlzdFxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGRlZmVycmVkLnJlc29sdmUodHJ1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0XHQuZmFpbCgoZGVzY3JpcHRpb24pID0+IHtcblx0XHRcdFx0ZXJyb3IoZGVzY3JpcHRpb24pO1xuXHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKGZhbHNlKTtcblx0XHRcdH0pO1xuXHR9XG5cdHJldHVybiBkZWZlcnJlZC5wcm9taXNlKCk7XG59O1xuXG4vKiBDaGVjayB3aGV0aGVyIHRoZSBlZGl0IGNvb2xkb3duIGFwcGxpZXMgYW5kIHNldHMgZWRpdExpbWl0IGFjY29yZGluZ2x5Li8qICogUmV0dXJucyBhIGpRdWVyeSBwcm9taXNlICovXG5jb25zdCBjaGVja0VkaXRMaW1pdCA9ICgpID0+IHtcblx0Y29uc3QgZGVmZXJyZWQgPSBuZXcgJC5EZWZlcnJlZCgpO1xuXHRpZiAoY2ZnLmVkaXRDb29sZG93biA8PSAwKSB7XG5cdFx0ZWRpdExpbWl0ID0gZmFsc2U7XG5cdFx0ZGVmZXJyZWQucmVzb2x2ZSgpO1xuXHR9IGVsc2Uge1xuXHRcdGZldGNoUmlnaHRzKClcblx0XHRcdC5kb25lKChyaWdodHMpID0+IHtcblx0XHRcdFx0ZWRpdExpbWl0ID0gIXJpZ2h0cy5pbmNsdWRlcygnYm90Jyk7XG5cdFx0XHR9KVxuXHRcdFx0LmZhaWwoKGRlc2NyaXB0aW9uKSA9PiB7XG5cdFx0XHRcdGVycm9yKGRlc2NyaXB0aW9uKTtcblx0XHRcdFx0ZWRpdExpbWl0ID0gdHJ1ZTtcblx0XHRcdH0pXG5cdFx0XHQuYWx3YXlzKCgpID0+IHtcblx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZSgpO1xuXHRcdFx0fSk7XG5cdH1cblx0cmV0dXJuIGRlZmVycmVkLnByb21pc2UoKTtcbn07XG5cbi8qIEZpbmQgYW5kIGFzayB0aGUgdXNlciB0byBmaXggYWxsIHRoZSBpbmNvbWluZyBsaW5rcyB0byB0aGUgZGlzYW1iaWd1YXRpb24gKFwidGFyZ2V0XCIpLyogKiBwYWdlIGZyb20gYSBzaW5nbGUgXCJvcmlnaW5cIiBwYWdlICovXG5jb25zdCBkb1BhZ2UgPSAoKSA9PiB7XG5cdGlmIChwYWdlQ2hhbmdlcy5sZW5ndGggPiBjZmcuaGlzdG9yeVNpemUpIHtcblx0XHRhcHBseUNoYW5nZShwYWdlQ2hhbmdlcy5zaGlmdCgpKTtcblx0fVxuXHRpZiAobGlua3MubGVuZ3RoKSB7XG5cdFx0Y3VycmVudFBhZ2VUaXRsZSA9IGxpbmtzLnNoaWZ0KCk7XG5cdFx0ZGlzcGxheWVkUGFnZXNbY3VycmVudFBhZ2VUaXRsZV0gPSB0cnVlO1xuXHRcdHRvZ2dsZUFjdGlvbkJ1dHRvbnMoZmFsc2UpO1xuXHRcdGxvYWRQYWdlKGN1cnJlbnRQYWdlVGl0bGUpXG5cdFx0XHQuZG9uZSgoZGF0YSkgPT4ge1xuXHRcdFx0XHRjdXJyZW50UGFnZVBhcmFtZXRlcnMgPSBkYXRhO1xuXHRcdFx0XHRjdXJyZW50TGluayA9IHVuZGVmaW5lZDtcblx0XHRcdFx0ZG9MaW5rKCk7XG5cdFx0XHR9KVxuXHRcdFx0LmZhaWwoZXJyb3IpO1xuXHR9IGVsc2Uge1xuXHRcdGNvbnN0IHRhcmdldFBhZ2UgPSBnZXRUYXJnZXRQYWdlKCk7XG5cdFx0Z2V0QmFja2xpbmtzKHRhcmdldFBhZ2UpXG5cdFx0XHQuZG9uZSgoYmFja2xpbmtzLCBwYWdlVGl0bGVzKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHBlbmRpbmcgPSB7fTtcblx0XHRcdFx0Zm9yIChjb25zdCBlbCBvZiBwZW5kaW5nU2F2ZXMpIHtcblx0XHRcdFx0XHRwZW5kaW5nW2VsWzBdXSA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0cG9zc2libGVCYWNrbGlua0Rlc3RpbmF0aW9ucyA9IHBhZ2VUaXRsZXMuZmlsdGVyKCh0KSA9PiB7XG5cdFx0XHRcdFx0aWYgKHQgPT09IHRhcmdldFBhZ2UpIHtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gcmVtb3ZlRGlzYW0odCkgIT09IHRhcmdldFBhZ2U7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHQvLyBPbmx5IGluY29taW5nIGxpbmtzIGZyb20gcGFnZXMgd2UgaGF2ZW4ndCBzZWVuIHlldCBhbmQgd2UgYXJlbid0IGN1cnJlbnRseVxuXHRcdFx0XHQvLyBzYXZpbmcgKGRpc3BsYXllZFBhZ2VzIGlzIHJlc2V0IHdoZW4gdGhlIHRvb2wgaXMgY2xvc2VkIGFuZCBvcGVuZWQgYWdhaW4sXG5cdFx0XHRcdC8vIHdoaWxlIHRoZSBsaXN0IG9mIHBlbmRpbmcgY2hhbmdlcyBpc24ndDsgaWYgdGhlIGVkaXQgY29vbGRvd24gaXMgZGlzYWJsZWQsXG5cdFx0XHRcdC8vIGl0IHdpbGwgYmUgZW1wdHkpXG5cdFx0XHRcdGxpbmtzID0gYmFja2xpbmtzLmZpbHRlcigoZWwpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gIWRpc3BsYXllZFBhZ2VzW2VsXSAmJiAhcGVuZGluZ1tlbF07XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRpZiAobGlua3MubGVuZ3RoKSB7XG5cdFx0XHRcdFx0ZG9QYWdlKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dXBkYXRlQ29udGV4dCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdFx0LmZhaWwoZXJyb3IpO1xuXHR9XG59O1xuXG4vKiBGaW5kIGFuZCBhc2sgdGhlIHVzZXIgdG8gZml4IGEgc2luZ2xlIGluY29taW5nIGxpbmsgdG8gdGhlIGRpc2FtYmlndWF0aW9uIChcInRhcmdldFwiKS8qICogcGFnZSAqL1xuY29uc3QgZG9MaW5rID0gKCkgPT4ge1xuXHRjdXJyZW50TGluayA9IGV4dHJhY3RMaW5rVG9QYWdlKFxuXHRcdGN1cnJlbnRQYWdlUGFyYW1ldGVycy5jb250ZW50LFxuXHRcdHBvc3NpYmxlQmFja2xpbmtEZXN0aW5hdGlvbnMsXG5cdFx0Y3VycmVudExpbmsgPyBjdXJyZW50TGluay5lbmQgOiAwXG5cdCk7XG5cdGlmIChjdXJyZW50TGluaykge1xuXHRcdHVwZGF0ZUNvbnRleHQoKTtcblx0fSBlbHNlIHtcblx0XHRkb1BhZ2UoKTtcblx0fVxufTtcblxuLyogUmVwbGFjZSB0aGUgdGFyZ2V0IG9mIGEgbGluayB3aXRoIGEgZGlmZmVyZW50IG9uZS8qICogcGFnZVRpdGxlOiBOZXcgbGluayB0YXJnZXQvKiAqIGV4dHJhOiBBZGRpdGlvbmFsIHRleHQgYWZ0ZXIgdGhlIGxpbmsgKG9wdGlvbmFsKS8qICogc3VtbWFyeTogQ2hhbmdlIHN1bW1hcnkgKG9wdGlvbmFsKSAqL1xuY29uc3QgY2hvb3NlUmVwbGFjZW1lbnQgPSAocGFnZVRpdGxlLCBleHRyYSwgc3VtbWFyeSkgPT4ge1xuXHRpZiAoY2hvb3NpbmcpIHtcblx0XHRjaG9vc2luZyA9IGZhbHNlO1xuXHRcdGlmICghc3VtbWFyeSkge1xuXHRcdFx0c3VtbWFyeSA9IHBhZ2VUaXRsZSA/IHR4dC5zdW1tYXJ5Q2hhbmdlZC5yZXBsYWNlKCckMScsIHBhZ2VUaXRsZSkgOiB0eHQuc3VtbWFyeU9taXR0ZWQ7XG5cdFx0fVxuXHRcdGFkZENoYW5nZShjdXJyZW50UGFnZVRpdGxlLCBjdXJyZW50UGFnZVBhcmFtZXRlcnMsIGN1cnJlbnRQYWdlUGFyYW1ldGVycy5jb250ZW50LCBjdXJyZW50TGluaywgc3VtbWFyeSk7XG5cdFx0aWYgKHBhZ2VUaXRsZSAmJiAocGFnZVRpdGxlICE9PSBnZXRUYXJnZXRQYWdlKCkgfHwgZXh0cmEpKSB7XG5cdFx0XHRjdXJyZW50UGFnZVBhcmFtZXRlcnMuY29udGVudCA9IHJlcGxhY2VMaW5rKFxuXHRcdFx0XHRjdXJyZW50UGFnZVBhcmFtZXRlcnMuY29udGVudCxcblx0XHRcdFx0cGFnZVRpdGxlLFxuXHRcdFx0XHRjdXJyZW50TGluayxcblx0XHRcdFx0ZXh0cmEgfHwgJydcblx0XHRcdCk7XG5cdFx0fVxuXHRcdGRvTGluaygpO1xuXHR9XG59O1xuXG4vKiBSZXBsYWNlIHRoZSBsaW5rIHdpdGggYW4gZXhwbGljaXQgbGluayB0byB0aGUgZGlzYW1iaWd1YXRpb24gcGFnZSAqL1xuY29uc3QgY2hvb3NlSW50ZW50aW9uYWxMaW5rID0gKCkgPT4ge1xuXHRjb25zdCBkaXNhbVRpdGxlID0gY2ZnLmRpc2FtRm9ybWF0LnJlcGxhY2UoJyQxJywgZ2V0VGFyZ2V0UGFnZSgpKTtcblx0Y2hvb3NlUmVwbGFjZW1lbnQoZGlzYW1UaXRsZSwgJycsIHR4dC5zdW1tYXJ5SW50ZW50aW9uYWwpO1xufTtcblxuLyogUHJvbXB0IGZvciBhbiBhbHRlcm5hdGl2ZSBsaW5rIHRhcmdldCBhbmQgdXNlIGl0IGFzIGEgcmVwbGFjZW1lbnQgKi9cbmNvbnN0IGNob29zZVRpdGxlRnJvbVByb21wdCA9ICgpID0+IHtcblx0Y29uc3QgdGl0bGUgPSBwcm9tcHQodHh0LnRpdGxlQXNUZXh0UHJvbXB0KTtcblx0aWYgKHRpdGxlICE9PSBudWxsKSB7XG5cdFx0Y2hvb3NlUmVwbGFjZW1lbnQodGl0bGUpO1xuXHR9XG59O1xuXG4vKiBSZW1vdmUgdGhlIGN1cnJlbnQgbGluaywgbGVhdmluZyB0aGUgdGV4dCB1bmNoYW5nZWQgKi9cbmNvbnN0IGNob29zZUxpbmtSZW1vdmFsID0gKCkgPT4ge1xuXHRpZiAoY2hvb3NpbmcpIHtcblx0XHRjb25zdCBzdW1tYXJ5ID0gdHh0LnN1bW1hcnlSZW1vdmVkO1xuXHRcdGFkZENoYW5nZShjdXJyZW50UGFnZVRpdGxlLCBjdXJyZW50UGFnZVBhcmFtZXRlcnMsIGN1cnJlbnRQYWdlUGFyYW1ldGVycy5jb250ZW50LCBjdXJyZW50TGluaywgc3VtbWFyeSk7XG5cdFx0Y3VycmVudFBhZ2VQYXJhbWV0ZXJzLmNvbnRlbnQgPSByZW1vdmVMaW5rKGN1cnJlbnRQYWdlUGFyYW1ldGVycy5jb250ZW50LCBjdXJyZW50TGluayk7XG5cdFx0ZG9MaW5rKCk7XG5cdH1cbn07XG5cbi8qIEFkZCBhIFwiZGlzYW1iaWd1YXRpb24gbmVlZGVkXCIgdGVtcGxhdGUgYWZ0ZXIgdGhlIGxpbmsgKi9cbmNvbnN0IGNob29zZURpc2FtTmVlZGVkID0gKCkgPT4ge1xuXHRjaG9vc2VSZXBsYWNlbWVudChjdXJyZW50TGluay50aXRsZSwgY2ZnLmRpc2FtTmVlZGVkVGV4dCwgdHh0LnN1bW1hcnlIZWxwTmVlZGVkKTtcbn07XG5cbi8qIFVuZG8gdGhlIGxhc3QgY2hhbmdlICovXG5jb25zdCB1bmRvID0gKCkgPT4ge1xuXHRpZiAocGFnZUNoYW5nZXMubGVuZ3RoKSB7XG5cdFx0Y29uc3QgbGFzdFBhZ2UgPSBwYWdlQ2hhbmdlcy5hdCgtMSk7XG5cdFx0aWYgKGN1cnJlbnRQYWdlVGl0bGUgIT09IGxhc3RQYWdlLnRpdGxlKSB7XG5cdFx0XHRsaW5rcy51bnNoaWZ0KGN1cnJlbnRQYWdlVGl0bGUpO1xuXHRcdFx0Y3VycmVudFBhZ2VUaXRsZSA9IGxhc3RQYWdlLnRpdGxlO1xuXHRcdH1cblx0XHRjdXJyZW50UGFnZVBhcmFtZXRlcnMgPSBsYXN0UGFnZS5wYWdlO1xuXHRcdGN1cnJlbnRQYWdlUGFyYW1ldGVycy5jb250ZW50ID0gbGFzdFBhZ2UuY29udGVudEJlZm9yZS5wb3AoKTtcblx0XHRjdXJyZW50TGluayA9IGxhc3RQYWdlLmxpbmtzLnBvcCgpO1xuXHRcdGxhc3RQYWdlLnN1bW1hcnkucG9wKCk7XG5cdFx0aWYgKCFsYXN0UGFnZS5jb250ZW50QmVmb3JlLmxlbmd0aCkge1xuXHRcdFx0cGFnZUNoYW5nZXMucG9wKCk7XG5cdFx0fVxuXHRcdHVwZGF0ZUNvbnRleHQoKTtcblx0fVxufTtcblxuLyogT21pdCB0aGUgY3VycmVudCBsaW5rIHdpdGhvdXQgbWFraW5nIGEgY2hhbmdlICovXG5jb25zdCBvbWl0ID0gKCkgPT4ge1xuXHRjaG9vc2VSZXBsYWNlbWVudCgpO1xufTtcblxuLyogU2F2ZSBhbGwgdGhlIHBlbmRpbmcgY2hhbmdlcyBhbmQgcmVzdGFydCB0aGUgdG9vbC4gKi9cbmNvbnN0IHJlZnJlc2ggPSAoKSA9PiB7XG5cdHNhdmVBbmRFbmQoKTtcblx0c3RhcnQoKTtcbn07XG5cbi8qIEVuYWJsZSBvciBkaXNhYmxlIHRoZSBidXR0b25zIHRoYXQgY2FuIHBlcmZvcm0gYWN0aW9ucyBvbiBhIHBhZ2Ugb3IgY2hhbmdlIHRoZSBjdXJyZW50IGxpbmsuLyogKiBlbmFibGVkOiBXaGV0aGVyIHRvIGVuYWJsZSBvciBkaXNhYmxlIHRoZSBidXR0b25zICovXG5jb25zdCB0b2dnbGVBY3Rpb25CdXR0b25zID0gKGVuYWJsZWQpID0+IHtcblx0Y29uc3QgYWZmZWN0ZWRCdXR0b25zID0gW1xuXHRcdHVpLm9taXRCdXR0b24sXG5cdFx0dWkudGl0bGVBc1RleHRCdXR0b24sXG5cdFx0dWkucmVtb3ZlTGlua0J1dHRvbixcblx0XHR1aS5pbnRlbnRpb25hbExpbmtCdXR0b24sXG5cdFx0dWkuZGlzYW1OZWVkZWRCdXR0b24sXG5cdFx0dWkudW5kb0J1dHRvbixcblx0XTtcblx0Zm9yIChjb25zdCBidXR0b24gb2YgYWZmZWN0ZWRCdXR0b25zKSB7XG5cdFx0YnV0dG9uLnByb3AoJ2Rpc2FibGVkJywgIWVuYWJsZWQpO1xuXHR9XG59O1xuXG4vKiBTaG93IG9yIGhpZGUgdGhlICdubyBtb3JlIGxpbmtzJyBtZXNzYWdlLyogKiBzaG93OiBXaGV0aGVyIHRvIHNob3cgb3IgaGlkZSB0aGUgbWVzc2FnZSAqL1xuY29uc3QgdG9nZ2xlRmluaXNoZWRNZXNzYWdlID0gKHNob3cpID0+IHtcblx0dG9nZ2xlQWN0aW9uQnV0dG9ucyghc2hvdyk7XG5cdHVpLnVuZG9CdXR0b24ucHJvcCgnZGlzYWJsZWQnLCAhcGFnZUNoYW5nZXMubGVuZ3RoKTtcblx0dWkuZmluaXNoZWRNZXNzYWdlLnRvZ2dsZShzaG93KTtcblx0dWkucGFnZVRpdGxlTGluZS50b2dnbGUoIXNob3cpO1xuXHR1aS5jb250ZXh0LnRvZ2dsZSghc2hvdyk7XG59O1xuXG5jb25zdCB0b2dnbGVQZW5kaW5nRWRpdEJveCA9IChzaG93KSA9PiB7XG5cdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRpZiAoIXBlbmRpbmdFZGl0Qm94KSB7XG5cdFx0cGVuZGluZ0VkaXRCb3ggPSAkKCc8ZGl2PicpLmFkZENsYXNzKCdkaXNhbWFzc2lzdC1ib3ggZGlzYW1hc3Npc3QtcGVuZGluZ2VkaXRib3gnKTtcblx0XHRwZW5kaW5nRWRpdEJveFRleHQgPSAkKCc8ZGl2PicpO1xuXHRcdHBlbmRpbmdFZGl0Qm94LmFwcGVuZChwZW5kaW5nRWRpdEJveFRleHQpLmhpZGUoKTtcblx0XHRpZiAoZWRpdExpbWl0KSB7XG5cdFx0XHRwZW5kaW5nRWRpdEJveC5hcHBlbmQoJCgnPGRpdj4nKS50ZXh0KHR4dC5wZW5kaW5nRWRpdEJveExpbWl0ZWQpLmFkZENsYXNzKCdkaXNhbWFzc2lzdC1zdWJ0aXRsZScpKTtcblx0XHR9XG5cdFx0JGJvZHkuZmluZCgnI213LWNvbnRlbnQtdGV4dCcpLmJlZm9yZShwZW5kaW5nRWRpdEJveCk7XG5cdFx0dXBkYXRlRWRpdENvdW50ZXIoKTtcblx0fVxuXHRpZiAoc2hvdykge1xuXHRcdHBlbmRpbmdFZGl0Qm94LmZhZGVJbigpO1xuXHR9IGVsc2Uge1xuXHRcdHBlbmRpbmdFZGl0Qm94LmZhZGVPdXQoKTtcblx0fVxufTtcblxuY29uc3Qgbm90aWZ5Q29tcGxldGlvbiA9ICgpID0+IHtcblx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdGNvbnN0IG9sZFRpdGxlID0gZG9jdW1lbnQudGl0bGU7XG5cdGRvY3VtZW50LnRpdGxlID0gdHh0Lm5vdGlmeUNoYXJhY3RlciArIGRvY3VtZW50LnRpdGxlO1xuXHQkYm9keS5vbmUoJ21vdXNlbW92ZScsICgpID0+IHtcblx0XHRkb2N1bWVudC50aXRsZSA9IG9sZFRpdGxlO1xuXHR9KTtcbn07XG5cbi8qIFVwZGF0ZSB0aGUgZGlzcGxheWVkIGluZm9ybWF0aW9uIHRvIG1hdGNoIHRoZSBjdXJyZW50IGxpbmsvKiAqIG9yIGxhY2sgdGhlcmVvZiAqL1xuY29uc3QgdXBkYXRlQ29udGV4dCA9ICgpID0+IHtcblx0dXBkYXRlRWRpdENvdW50ZXIoKTtcblx0aWYgKGN1cnJlbnRMaW5rKSB7XG5cdFx0dWkucGFnZVRpdGxlTGluZS5odG1sKFxuXHRcdFx0dHh0LnBhZ2VUaXRsZUxpbmVcblx0XHRcdFx0LnJlcGxhY2UoXG5cdFx0XHRcdFx0JyQxJyxcblx0XHRcdFx0XHRtdy51dGlsLmdldFVybChjdXJyZW50UGFnZVRpdGxlLCB7XG5cdFx0XHRcdFx0XHRyZWRpcmVjdDogJ25vJyxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpXG5cdFx0XHRcdC5yZXBsYWNlKCckMicsIG13Lmh0bWwuZXNjYXBlKGN1cnJlbnRQYWdlVGl0bGUpKVxuXHRcdCk7XG5cdFx0Y29uc3QgY29udGV4dCA9IGV4dHJhY3RDb250ZXh0KGN1cnJlbnRQYWdlUGFyYW1ldGVycy5jb250ZW50LCBjdXJyZW50TGluayk7XG5cdFx0dWkuY29udGV4dFxuXHRcdFx0LmVtcHR5KClcblx0XHRcdC5hcHBlbmQoJCgnPHNwYW4+JykudGV4dChjb250ZXh0WzBdKSlcblx0XHRcdC5hcHBlbmQoJCgnPHNwYW4+JykudGV4dChjb250ZXh0WzFdKS5hZGRDbGFzcygnZGlzYW1hc3Npc3QtaW5jbGluaycpKVxuXHRcdFx0LmFwcGVuZCgkKCc8c3Bhbj4nKS50ZXh0KGNvbnRleHRbMl0pKTtcblx0XHRjb25zdCBudW1MaW5lcyA9IE1hdGguY2VpbCh1aS5jb250ZXh0LmhlaWdodCgpIC8gTnVtYmVyLnBhcnNlRmxvYXQodWkuY29udGV4dC5jc3MoJ2xpbmUtaGVpZ2h0JykpKTtcblx0XHRpZiAobnVtTGluZXMgPCBjZmcubnVtQ29udGV4dExpbmVzKSB7XG5cdFx0XHQvLyBBZGQgY2ZnLm51bUNvbnRleHRMaW5lcyAtIG51bUxpbmVzICsgMSBsaW5lIGJyZWFrcywgc28gdGhhdCB0aGUgdG90YWwgbnVtYmVyXG5cdFx0XHQvLyBvZiBsaW5lcyBpcyBjZmcubnVtQ29udGV4dExpbmVzXG5cdFx0XHR1aS5jb250ZXh0LmFwcGVuZChcblx0XHRcdFx0QXJyYXkuZnJvbSh7XG5cdFx0XHRcdFx0bGVuZ3RoOiBjZmcubnVtQ29udGV4dExpbmVzIC0gbnVtTGluZXMgKyAyLFxuXHRcdFx0XHR9KS5qb2luKCc8YnI+Jylcblx0XHRcdCk7XG5cdFx0fVxuXHRcdHRvZ2dsZUZpbmlzaGVkTWVzc2FnZShmYWxzZSk7XG5cdFx0dWkudW5kb0J1dHRvbi5wcm9wKCdkaXNhYmxlZCcsICFwYWdlQ2hhbmdlcy5sZW5ndGgpO1xuXHRcdHVpLnJlbW92ZUxpbmtCdXR0b24ucHJvcCgnZGlzYWJsZWQnLCBjdXJyZW50UGFnZVBhcmFtZXRlcnMucmVkaXJlY3QpO1xuXHRcdHVpLmludGVudGlvbmFsTGlua0J1dHRvbi5wcm9wKCdkaXNhYmxlZCcsIGN1cnJlbnRQYWdlUGFyYW1ldGVycy5yZWRpcmVjdCk7XG5cdFx0dWkuZGlzYW1OZWVkZWRCdXR0b24ucHJvcCgnZGlzYWJsZWQnLCBjdXJyZW50UGFnZVBhcmFtZXRlcnMucmVkaXJlY3QgfHwgY3VycmVudExpbmsuaGFzRGlzYW1UZW1wbGF0ZSk7XG5cdFx0Y2hvb3NpbmcgPSB0cnVlO1xuXHR9IGVsc2Uge1xuXHRcdHRvZ2dsZUZpbmlzaGVkTWVzc2FnZSh0cnVlKTtcblx0fVxufTtcblxuLyogVXBkYXRlIHRoZSBjb3VudCBvZiBwZW5kaW5nIGNoYW5nZXMgKi9cbmNvbnN0IHVwZGF0ZUVkaXRDb3VudGVyID0gKCkgPT4ge1xuXHRpZiAodWkucGVuZGluZ0VkaXRDb3VudGVyKSB7XG5cdFx0dWkucGVuZGluZ0VkaXRDb3VudGVyLnRleHQoXG5cdFx0XHR0eHQucGVuZGluZ0VkaXRDb3VudGVyLnJlcGxhY2UoJyQxJywgZWRpdENvdW50KS5yZXBsYWNlKCckMicsIGNvdW50QWN0dWFsbHlDaGFuZ2VkRnVsbHlDaGVja2VkUGFnZXMoKSlcblx0XHQpO1xuXHR9XG5cdGlmIChwZW5kaW5nRWRpdEJveCkge1xuXHRcdGlmIChlZGl0Q291bnQgPT09IDAgJiYgIXJ1bm5pbmcpIHtcblx0XHRcdHRvZ2dsZVBlbmRpbmdFZGl0Qm94KGZhbHNlKTtcblx0XHRcdG5vdGlmeUNvbXBsZXRpb24oKTtcblx0XHR9XG5cdFx0bGV0IHRleHRDb250ZW50ID0gZWRpdENvdW50O1xuXHRcdGlmIChlZGl0TGltaXQpIHtcblx0XHRcdHRleHRDb250ZW50ID0gdHh0LnBlbmRpbmdFZGl0Qm94VGltZUVzdGltYXRpb25cblx0XHRcdFx0LnJlcGxhY2UoJyQxJywgZWRpdENvdW50KVxuXHRcdFx0XHQucmVwbGFjZSgnJDInLCBzZWNvbmRzVG9ISE1NU1MoY2ZnLmVkaXRDb29sZG93biAqIGVkaXRDb3VudCkpO1xuXHRcdH1cblx0XHRwZW5kaW5nRWRpdEJveFRleHQudGV4dCh0eHQucGVuZGluZ0VkaXRCb3gucmVwbGFjZSgnJDEnLCB0ZXh0Q29udGVudCkpO1xuXHR9XG59O1xuXG4vKiBBcHBseSB0aGUgY2hhbmdlcyBtYWRlIHRvIGFuIFwib3JpZ2luXCIgcGFnZS8qICogcGFnZUNoYW5nZTogQ2hhbmdlIHRoYXQgd2lsbCBiZSBzYXZlZCAqL1xuY29uc3QgYXBwbHlDaGFuZ2UgPSAocGFnZUNoYW5nZSkgPT4ge1xuXHRpZiAocGFnZUNoYW5nZS5wYWdlLmNvbnRlbnQgIT09IHBhZ2VDaGFuZ2UuY29udGVudEJlZm9yZVswXSkge1xuXHRcdGVkaXRDb3VudCsrO1xuXHRcdGNvbnN0IGNoYW5nZVN1bW1hcmllcyA9IHBhZ2VDaGFuZ2Uuc3VtbWFyeS5qb2luKHR4dC5zdW1tYXJ5U2VwYXJhdG9yKTtcblx0XHRjb25zdCBzdW1tYXJ5ID0gdHh0LnN1bW1hcnkucmVwbGFjZSgnJDEnLCBnZXRUYXJnZXRQYWdlKCkpLnJlcGxhY2UoJyQyJywgY2hhbmdlU3VtbWFyaWVzKTtcblx0XHRjb25zdCBzYXZlID0gZWRpdExpbWl0ID8gc2F2ZVdpdGhDb29sZG93biA6IHNhdmVQYWdlO1xuXHRcdHNhdmUocGFnZUNoYW5nZS50aXRsZSwgcGFnZUNoYW5nZS5wYWdlLCBzdW1tYXJ5LCB0cnVlLCB0cnVlKVxuXHRcdFx0LmFsd2F5cygoKSA9PiB7XG5cdFx0XHRcdGlmIChlZGl0Q291bnQgPiAwKSB7XG5cdFx0XHRcdFx0ZWRpdENvdW50LS07XG5cdFx0XHRcdH1cblx0XHRcdFx0dXBkYXRlRWRpdENvdW50ZXIoKTtcblx0XHRcdH0pXG5cdFx0XHQuZmFpbChlcnJvcik7XG5cdFx0dXBkYXRlRWRpdENvdW50ZXIoKTtcblx0fVxufTtcblxuLyogU2F2ZSBhbGwgdGhlIHBlbmRpbmcgY2hhbmdlcyAqL1xuY29uc3QgYXBwbHlBbGxDaGFuZ2VzID0gKCkgPT4ge1xuXHRmb3IgKGNvbnN0IHBhZ2VDaGFuZ2Ugb2YgcGFnZUNoYW5nZXMpIHtcblx0XHRhcHBseUNoYW5nZShwYWdlQ2hhbmdlKTtcblx0fVxuXHRwYWdlQ2hhbmdlcyA9IFtdO1xufTtcblxuLyogUmVjb3JkIGEgbmV3IHBlbmRpbmcgY2hhbmdlLyogKiBwYWdlVGl0bGU6IFRpdGxlIG9mIHRoZSBwYWdlLyogKiBwYWdlOiBDb250ZW50IG9mIHRoZSBwYWdlLyogKiBvbGRDb250ZW50OiBDb250ZW50IG9mIHRoZSBwYWdlIGJlZm9yZSB0aGUgY2hhbmdlLyogKiBsaW5rOiBMaW5rIHRoYXQgaGFzIGJlZW4gY2hhbmdlZC8qICogc3VtbWFyeTogQ2hhbmdlIHN1bW1hcnkgKi9cbmNvbnN0IGFkZENoYW5nZSA9IChwYWdlVGl0bGUsIHBhZ2UsIG9sZENvbnRlbnQsIGxpbmssIHN1bW1hcnkpID0+IHtcblx0aWYgKCFwYWdlQ2hhbmdlcy5sZW5ndGggfHwgcGFnZUNoYW5nZXMuYXQoLTEpLnRpdGxlICE9PSBwYWdlVGl0bGUpIHtcblx0XHRwYWdlQ2hhbmdlcy5wdXNoKHtcblx0XHRcdHRpdGxlOiBwYWdlVGl0bGUsXG5cdFx0XHRwYWdlLFxuXHRcdFx0Y29udGVudEJlZm9yZTogW10sXG5cdFx0XHRsaW5rczogW10sXG5cdFx0XHRzdW1tYXJ5OiBbXSxcblx0XHR9KTtcblx0fVxuXHRjb25zdCBsYXN0UGFnZUNoYW5nZSA9IHBhZ2VDaGFuZ2VzLmF0KC0xKTtcblx0bGFzdFBhZ2VDaGFuZ2UuY29udGVudEJlZm9yZS5wdXNoKG9sZENvbnRlbnQpO1xuXHRsYXN0UGFnZUNoYW5nZS5saW5rcy5wdXNoKGxpbmspO1xuXHRsYXN0UGFnZUNoYW5nZS5zdW1tYXJ5LnB1c2goc3VtbWFyeSk7XG59O1xuXG4vKiBDaGVjayB3aGV0aGVyIGFjdHVhbCBjaGFuZ2VzIGFyZSBzdG9yZWQgaW4gdGhlIGhpc3RvcnkgYXJyYXkgKi9cbmNvbnN0IGNoZWNrQWN0dWFsQ2hhbmdlcyA9ICgpID0+IHtcblx0cmV0dXJuIGNvdW50QWN0dWFsQ2hhbmdlcygpICE9PSAwO1xufTtcblxuLyogUmV0dXJuIHRoZSBudW1iZXIgb2YgZW50cmllcyBpbiB0aGUgaGlzdG9yeSBhcnJheSB0aGF0IHJlcHJlc2VudCBhY3R1YWwgY2hhbmdlcyAqL1xuY29uc3QgY291bnRBY3R1YWxDaGFuZ2VzID0gKCkgPT4ge1xuXHRsZXQgY2hhbmdlQ291bnQgPSAwO1xuXHRmb3IgKGNvbnN0IHBhZ2VDaGFuZ2Ugb2YgcGFnZUNoYW5nZXMpIHtcblx0XHRpZiAocGFnZUNoYW5nZS5wYWdlLmNvbnRlbnQgIT09IHBhZ2VDaGFuZ2UuY29udGVudEJlZm9yZVswXSkge1xuXHRcdFx0Y2hhbmdlQ291bnQrKztcblx0XHR9XG5cdH1cblx0cmV0dXJuIGNoYW5nZUNvdW50O1xufTtcblxuLyogUmV0dXJuIHRoZSBudW1iZXIgb2YgY2hhbmdlZCBwYWdlcyBpbiB0aGUgaGlzdG9yeSBhcnJheSwgaWdub3JpbmcgdGhlIGxhc3QgZW50cnkvKiAqIGlmIHdlIGFyZW4ndCBkb25lIHdpdGggdGhhdCBwYWdlIHlldCAqL1xuY29uc3QgY291bnRBY3R1YWxseUNoYW5nZWRGdWxseUNoZWNrZWRQYWdlcyA9ICgpID0+IHtcblx0bGV0IGNoYW5nZUNvdW50ID0gY291bnRBY3R1YWxDaGFuZ2VzKCk7XG5cdGlmIChwYWdlQ2hhbmdlcy5sZW5ndGgpIHtcblx0XHRjb25zdCBsYXN0Q2hhbmdlID0gcGFnZUNoYW5nZXMuYXQoLTEpO1xuXHRcdGlmIChcblx0XHRcdGxhc3RDaGFuZ2UudGl0bGUgPT09IGN1cnJlbnRQYWdlVGl0bGUgJiZcblx0XHRcdGN1cnJlbnRMaW5rICYmXG5cdFx0XHRsYXN0Q2hhbmdlLnBhZ2UuY29udGVudCAhPT0gbGFzdENoYW5nZS5jb250ZW50QmVmb3JlWzBdXG5cdFx0KSB7XG5cdFx0XHRjaGFuZ2VDb3VudC0tO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gY2hhbmdlQ291bnQ7XG59O1xuXG4vKiBGaW5kIHRoZSBsaW5rcyB0byBkaXNhbWJpZ3VhdGlvbiBvcHRpb25zIGluIGEgZGlzYW1iaWd1YXRpb24gcGFnZSAqL1xuY29uc3QgZ2V0RGlzYW1PcHRpb25zID0gKCkgPT4ge1xuXHRjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblx0cmV0dXJuICRib2R5LmZpbmQoJyNtdy1jb250ZW50LXRleHQgYScpLmZpbHRlcigoX2luZGV4LCBlbGVtZW50KSA9PiB7XG5cdFx0cmV0dXJuICEhZXh0cmFjdFBhZ2VOYW1lKCQoZWxlbWVudCkpO1xuXHR9KTtcbn07XG5cbi8qIFNhdmUgYWxsIHRoZSBwZW5kaW5nIGNoYW5nZXMgYW5kIGNsb3NlIHRoZSB0b29sICovXG5jb25zdCBzYXZlQW5kRW5kID0gKCkgPT4ge1xuXHRhcHBseUFsbENoYW5nZXMoKTtcblx0ZW5kKCk7XG59O1xuXG4vKiBDbG9zZSB0aGUgdG9vbCAqL1xuY29uc3QgZW5kID0gKCkgPT4ge1xuXHRjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblx0Y29uc3QgY3VycmVudFRvb2xVSSA9IHVpLmRpc3BsYXk7XG5cdGNob29zaW5nID0gZmFsc2U7XG5cdHJ1bm5pbmcgPSBmYWxzZTtcblx0c3RhcnRMaW5rLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xuXHQkYm9keS5maW5kKCcuZGlzYW1hc3Npc3Qtb3B0aW9ubWFya2VyJykucmVtb3ZlKCk7XG5cdGN1cnJlbnRUb29sVUkuZmFkZU91dCh7XG5cdFx0Y29tcGxldGUoKSB7XG5cdFx0XHRjdXJyZW50VG9vbFVJLnJlbW92ZSgpO1xuXHRcdFx0aWYgKGVkaXRDb3VudCkge1xuXHRcdFx0XHR0b2dnbGVQZW5kaW5nRWRpdEJveCh0cnVlKTtcblx0XHRcdH1cblx0XHR9LFxuXHR9KTtcbn07XG5cbi8qIERpc3BsYXkgYW4gZXJyb3IgbWVzc2FnZSAqL1xuY29uc3QgZXJyb3IgPSAoZXJyb3JEZXNjcmlwdGlvbikgPT4ge1xuXHRjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblx0Y29uc3QgZXJyb3JCb3ggPSAkKCc8ZGl2PicpLmFkZENsYXNzKCdkaXNhbWFzc2lzdC1ib3ggZGlzYW1hc3Npc3QtZXJyb3Jib3gnKTtcblx0ZXJyb3JCb3gudGV4dCh0eHQuZXJyb3IucmVwbGFjZSgnJDEnLCBlcnJvckRlc2NyaXB0aW9uKSk7XG5cdGVycm9yQm94LmFwcGVuZChcblx0XHRjcmVhdGVCdXR0b24odHh0LmRpc21pc3NFcnJvciwgKCkgPT4ge1xuXHRcdFx0ZXJyb3JCb3guZmFkZU91dCgpO1xuXHRcdH0pLmFkZENsYXNzKCdkaXNhbWFzc2lzdC1lcnJvcmJ1dHRvbicpXG5cdCk7XG5cdGNvbnN0IHVpSXNJblBsYWNlID0gdWkgJiYgJC5jb250YWlucyhkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHVpLmRpc3BsYXlbMF0pO1xuXHRjb25zdCBuZXh0RWxlbWVudCA9IHVpSXNJblBsYWNlID8gdWkuZGlzcGxheSA6ICRib2R5LmZpbmQoJyNtdy1jb250ZW50LXRleHQnKTtcblx0bmV4dEVsZW1lbnQuYmVmb3JlKGVycm9yQm94KTtcblx0ZXJyb3JCb3guaGlkZSgpLmZhZGVJbigpO1xufTtcblxuLyogQ2hhbmdlIGEgbGluayBzbyB0aGF0IGl0IHBvaW50cyB0byB0aGUgdGl0bGUvKiAqIHRleHQ6IFRoZSB3aWtpdGV4dCBvZiB0aGUgd2hvbGUgcGFnZS8qICogdGl0bGU6IFRoZSBuZXcgZGVzdGluYXRpb24gb2YgdGhlIGxpbmsvKiAqIGxpbms6IFRoZSBsaW5rIHRoYXQgd2lsbCBiZSBtb2RpZmllZC8qICogZXh0cmE6IFRleHQgdGhhdCB3aWxsIGJlIGFkZGVkIGFmdGVyIHRoZSBsaW5rIChvcHRpb25hbCkgKi9cbmNvbnN0IHJlcGxhY2VMaW5rID0gKHRleHQsIHRpdGxlLCBsaW5rLCBleHRyYSkgPT4ge1xuXHRsZXQgbmV3Q29udGVudDtcblx0aXNTYW1lUGFnZSh0aXRsZSwgbGluay5kZXNjcmlwdGlvbilcblx0XHQ/IC8vIFtbQnxBXV0gc2hvdWxkIGJlIHJlcGxhY2VkIHdpdGggW1tBXV0gcmF0aGVyIHRoYW4gW1tBfEFdXVxuXHRcdFx0KG5ld0NvbnRlbnQgPSBsaW5rLmRlc2NyaXB0aW9uKVxuXHRcdDogKG5ld0NvbnRlbnQgPSBgJHt0aXRsZX18JHtsaW5rLmRlc2NyaXB0aW9ufWApO1xuXHRjb25zdCBsaW5rU3RhcnQgPSB0ZXh0LnNsaWNlKDAsIE1hdGgubWF4KDAsIGxpbmsuc3RhcnQpKTtcblx0Y29uc3QgbGlua0VuZCA9IHRleHQuc2xpY2UoTWF0aC5tYXgoMCwgbGluay5lbmQpKTtcblx0cmV0dXJuIGAke2xpbmtTdGFydH1bWyR7bmV3Q29udGVudH1dXSR7bGluay5hZnRlckRlc2NyaXB0aW9ufSR7ZXh0cmEgfHwgJyd9JHtsaW5rRW5kfWA7XG59O1xuXG4vKiBSZW1vdmUgYSBsaW5rIGZyb20gdGhlIHRleHQvKiAqIHRleHQ6IFRoZSB3aWtpdGV4dCBvZiB0aGUgd2hvbGUgcGFnZS8qICogbGluazogVGhlIGxpbmsgdGhhdCB3aWxsIGJlIHJlbW92ZWQgKi9cbmNvbnN0IHJlbW92ZUxpbmsgPSAodGV4dCwgbGluaykgPT4ge1xuXHRjb25zdCBsaW5rU3RhcnQgPSB0ZXh0LnNsaWNlKDAsIE1hdGgubWF4KDAsIGxpbmsuc3RhcnQpKTtcblx0Y29uc3QgbGlua0VuZCA9IHRleHQuc2xpY2UoTWF0aC5tYXgoMCwgbGluay5lbmQpKTtcblx0cmV0dXJuIGxpbmtTdGFydCArIGxpbmsuZGVzY3JpcHRpb24gKyBsaW5rLmFmdGVyRGVzY3JpcHRpb24gKyBsaW5rRW5kO1xufTtcblxuLyogRXh0cmFjdCBhIGxpbmsgZnJvbSBhIHN0cmluZyBpbiB3aWtpIGZvcm1hdCwvKiAqIHN0YXJ0aW5nIGZyb20gYSBnaXZlbiBpbmRleC4gUmV0dXJuIGEgbGluayBpZiBvbmUgY2FuIGJlIGZvdW5kLC8qICogb3RoZXJ3aXNlIHJldHVybiBudWxsLiBUaGUgXCJsaW5rXCIgaW5jbHVkZXMgXCJkaXNhbWJpZ3VhdGlvbiBuZWVkZWRcIi8qICogdGVtcGxhdGVzIGlubWVkaWF0ZWx5IGZvbGxvd2luZyB0aGUgbGluayBwcm9wZXIvKiAqIHRleHQ6IFRleHQgZnJvbSB3aGljaCB0aGUgbGluayB3aWxsIGJlIGV4dHJhY3RlZC8qICogbGFzdEluZGV4OiBJbmRleCBmcm9tIHdoaWNoIHRoZSBzZWFyY2ggd2lsbCBzdGFydCAqL1xuY29uc3QgZXh0cmFjdExpbmsgPSAodGV4dCwgbGFzdEluZGV4KSA9PiB7XG5cdC8vIEZJWE1FOiBOb3QgYW4gYWN0dWFsIHRpdGxlIHJlZ2V4IChsb3RzIG9mIGZhbHNlIHBvc2l0aXZlc1xuXHQvLyBhbmQgc29tZSBmYWxzZSBuZWdhdGl2ZXMpLCBidXQgaG9wZWZ1bGx5IGdvb2QgZW5vdWdoLlxuXHRjb25zdCB0aXRsZVJlZ2V4ID0gL1xcW1xcWyguKj8pKD86XFx8KC4qPykpP11dL2c7XG5cdC8vIERpdHRvIGZvciB0aGUgdGVtcGxhdGUgcmVnZXguIERpc2FtYmlndWF0aW9uIGxpbmsgdGVtcGxhdGVzXG5cdC8vIHNob3VsZCBiZSBzaW1wbGUgZW5vdWdoIGZvciB0aGlzIG5vdCB0byBtYXR0ZXIsIHRob3VnaC5cblx0Y29uc3QgdGVtcGxhdGVSZWdleCA9IC9eKFxcdypbXFxzISksLjo7P31dKil7e1xccyooW157fH1dKz8pXFxzKig/OlxcfFtee10qPyk/fX0vO1xuXHR0aXRsZVJlZ2V4Lmxhc3RJbmRleCA9IGxhc3RJbmRleDtcblx0Y29uc3QgbWF0Y2ggPSB0aXRsZVJlZ2V4LmV4ZWModGV4dCk7XG5cdGlmIChtYXRjaCAmJiBtYXRjaC5pbmRleCAhPT0gLTEpIHtcblx0XHRsZXQgcG9zc2libHlBbWJpZ3VvdXMgPSB0cnVlO1xuXHRcdGxldCBoYXNEaXNhbVRlbXBsYXRlID0gZmFsc2U7XG5cdFx0bGV0IF9lbmQgPSBtYXRjaC5pbmRleCArIDQgKyBtYXRjaFsxXS5sZW5ndGggKyAobWF0Y2hbMl0gPyAxICsgbWF0Y2hbMl0ubGVuZ3RoIDogMCk7XG5cdFx0bGV0IGFmdGVyRGVzY3JpcHRpb24gPSAnJztcblx0XHRjb25zdCByZXN0ID0gdGV4dC5zbGljZShNYXRoLm1heCgwLCBfZW5kKSk7XG5cdFx0Y29uc3QgdGVtcGxhdGVNYXRjaCA9IHRlbXBsYXRlUmVnZXguZXhlYyhyZXN0KTtcblx0XHRpZiAodGVtcGxhdGVNYXRjaCkge1xuXHRcdFx0Y29uc3QgdGVtcGxhdGVUaXRsZSA9IGdldENhbm9uaWNhbFRpdGxlKHRlbXBsYXRlTWF0Y2hbMl0pO1xuXHRcdFx0Y29uc3Qge2Rpc2FtTGlua1RlbXBsYXRlc30gPSBjZmc7XG5cdFx0XHRjb25zdCB7ZGlzYW1MaW5rSWdub3JlVGVtcGxhdGVzfSA9IGNmZztcblx0XHRcdGlmIChkaXNhbUxpbmtUZW1wbGF0ZXMuaW5jbHVkZXModGVtcGxhdGVUaXRsZSkpIHtcblx0XHRcdFx0X2VuZCArPSB0ZW1wbGF0ZU1hdGNoWzBdLmxlbmd0aDtcblx0XHRcdFx0YWZ0ZXJEZXNjcmlwdGlvbiA9IHRlbXBsYXRlTWF0Y2hbMV0ucmVwbGFjZSgvXFxzJC8sICcnKTtcblx0XHRcdFx0aGFzRGlzYW1UZW1wbGF0ZSA9IHRydWU7XG5cdFx0XHR9IGVsc2UgaWYgKGRpc2FtTGlua0lnbm9yZVRlbXBsYXRlcy5pbmNsdWRlcyh0ZW1wbGF0ZVRpdGxlKSkge1xuXHRcdFx0XHRwb3NzaWJseUFtYmlndW91cyA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4ge1xuXHRcdFx0c3RhcnQ6IG1hdGNoLmluZGV4LFxuXHRcdFx0ZW5kOiBfZW5kLFxuXHRcdFx0cG9zc2libHlBbWJpZ3VvdXMsXG5cdFx0XHRoYXNEaXNhbVRlbXBsYXRlLFxuXHRcdFx0dGl0bGU6IG1hdGNoWzFdLFxuXHRcdFx0ZGVzY3JpcHRpb246IG1hdGNoWzJdID8/IG1hdGNoWzFdLFxuXHRcdFx0YWZ0ZXJEZXNjcmlwdGlvbixcblx0XHR9O1xuXHR9XG59O1xuXG4vKiBFeHRyYWN0IGEgbGluayB0byBvbmUgb2YgYSBudW1iZXIgb2YgZGVzdGluYXRpb24gcGFnZXMgZnJvbSBhIHN0cmluZy8qICogKFwidGV4dFwiKSBpbiB3aWtpIGZvcm1hdCwgc3RhcnRpbmcgZnJvbSBhIGdpdmVuIGluZGV4IChcImxhc3RJbmRleFwiKS4vKiAqIFwiRGlzYW1iaWd1YXRpb24gbmVlZGVkXCIgdGVtcGxhdGVzIGFyZSBpbmNsdWRlZCBhcyBwYXJ0IG9mIHRoZSBsaW5rcy4vKiAqIHRleHQ6IFBhZ2UgaW4gd2lraSBmb3JtYXQvKiAqIGRlc3RpbmF0aW9uczogQXJyYXkgb2YgcGFnZSB0aXRsZXMgdG8gbG9vayBmb3IvKiAqIGxhc3RJbmRleDogSW5kZXggZnJvbSB3aGljaCB0aGUgc2VhcmNoIHdpbGwgc3RhcnQgKi9cbmNvbnN0IGV4dHJhY3RMaW5rVG9QYWdlID0gKHRleHQsIGRlc3RpbmF0aW9ucywgbGFzdEluZGV4KSA9PiB7XG5cdGxldCBsaW5rO1xuXHRsZXQgdGl0bGU7XG5cdGRvIHtcblx0XHRsaW5rID0gZXh0cmFjdExpbmsodGV4dCwgbGFzdEluZGV4KTtcblx0XHRpZiAobGluaykge1xuXHRcdFx0bGFzdEluZGV4ID0gbGluay5lbmQ7XG5cdFx0XHR0aXRsZSA9IGdldENhbm9uaWNhbFRpdGxlKGxpbmsudGl0bGUpO1xuXHRcdH1cblx0fSB3aGlsZSAobGluayAmJiAoIWxpbmsucG9zc2libHlBbWJpZ3VvdXMgfHwgIWRlc3RpbmF0aW9ucz8uaW5jbHVkZXModGl0bGUpKSk7XG5cdHJldHVybiBsaW5rO1xufTtcblxuLyogRmluZCB0aGUgXCJ0YXJnZXRcIiBwYWdlOiBlaXRoZXIgdGhlIG9uZSB3ZSBhcmUgaW4gb3IgdGhlIFwibWFpblwiIG9uZSBmb3VuZCBieSBleHRyYWN0aW5nLyogKiB0aGUgdGl0bGUgZnJvbSBcIi4qIChkaXNhbWJpZ3VhdGlvbilcIiBvciB3aGF0ZXZlciB0aGUgYXBwcm9waWF0ZSBsb2NhbCBmb3JtYXQgaXMgKi9cbmNvbnN0IGdldFRhcmdldFBhZ2UgPSAoKSA9PiB7XG5cdGNvbnN0IHRpdGxlID0gZ2V0VGl0bGUoKTtcblx0cmV0dXJuIGZvcmNlU2FtZVBhZ2UgPyB0aXRsZSA6IHJlbW92ZURpc2FtKHRpdGxlKTtcbn07XG5cbi8qIEdldCB0aGUgcGFnZSB0aXRsZSwgd2l0aCB0aGUgbmFtZXNwYWNlIHByZWZpeCBpZiBhbnkuICovXG5jb25zdCBnZXRUaXRsZSA9ICgpID0+IHtcblx0cmV0dXJuIG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKS5yZXBsYWNlKC9fL2csICcgJyk7XG59O1xuXG4vKiBFeHRyYWN0IGEgXCJtYWluXCIgdGl0bGUgZnJvbSBcIi4qIChkaXNhbWJpZ3VhdGlvbilcIiBvciB3aGF0ZXZlciB0aGUgYXBwcm9waWF0ZSBsb2NhbCBmb3JtYXQgaXMgKi9cbmNvbnN0IHJlbW92ZURpc2FtID0gKHRpdGxlKSA9PiB7XG5cdGNvbnN0IG1hdGNoID0gbmV3IFJlZ0V4cChjZmcuZGlzYW1SZWdFeHApLmV4ZWModGl0bGUpO1xuXHRyZXR1cm4gbWF0Y2g/LlsxXSA/PyB0aXRsZTtcbn07XG5cbi8qIENoZWNrIHdoZXRoZXIgdHdvIHBhZ2UgdGl0bGVzIGFyZSB0aGUgc2FtZSAqL1xuY29uc3QgaXNTYW1lUGFnZSA9ICh0aXRsZTEsIHRpdGxlMikgPT4ge1xuXHRyZXR1cm4gZ2V0Q2Fub25pY2FsVGl0bGUodGl0bGUxKSA9PT0gZ2V0Q2Fub25pY2FsVGl0bGUodGl0bGUyKTtcbn07XG5cbi8qIFJldHVybiB0aGUgJ2Nhbm9uaWNhbCB0aXRsZScgb2YgYSBwYWdlICovXG5jb25zdCBnZXRDYW5vbmljYWxUaXRsZSA9ICh0aXRsZSkgPT4ge1xuXHR0cnkge1xuXHRcdC8vIG13LlRpdGxlIHNlZW1zIHRvIGJlIGJ1Z2d5LCBhbmQgc29tZSB2YWxpZCB0aXRsZXMgYXJlIHJlamVjdGVkXG5cdFx0Ly8gRklYTUU6IFRoaXMgbWF5IGNhdXNlIGZhbHNlIG5lZ2F0aXZlc1xuXHRcdHRpdGxlID0gbmV3IG13LlRpdGxlKHRpdGxlKS5nZXRQcmVmaXhlZFRleHQoKTtcblx0fSBjYXRjaCB7XG5cdFx0LyogZW1wdHkgKi9cblx0fVxuXHRyZXR1cm4gdGl0bGU7XG59O1xuXG4vKiBFeHRyYWN0IHRoZSBjb250ZXh0IGFyb3VuZCBhIGdpdmVuIGxpbmsgaW4gYSB0ZXh0IHN0cmluZyAqL1xuY29uc3QgZXh0cmFjdENvbnRleHQgPSAodGV4dCwgbGluaykgPT4ge1xuXHRjb25zdCBjb250ZXh0U3RhcnQgPSBsaW5rLnN0YXJ0IC0gY2ZnLnJhZGl1cztcblx0Y29uc3QgY29udGV4dEVuZCA9IGxpbmsuZW5kICsgY2ZnLnJhZGl1cztcblx0bGV0IGNvbnRleHRQcmV2ID0gdGV4dC5zbGljZShjb250ZXh0U3RhcnQsIGxpbmsuc3RhcnQpO1xuXHRpZiAoY29udGV4dFN0YXJ0ID4gMCkge1xuXHRcdGNvbnRleHRQcmV2ID0gdHh0LmVsbGlwc2lzICsgY29udGV4dFByZXY7XG5cdH1cblx0bGV0IGNvbnRleHROZXh0ID0gdGV4dC5zbGljZShsaW5rLmVuZCwgY29udGV4dEVuZCk7XG5cdGlmIChjb250ZXh0RW5kIDwgdGV4dC5sZW5ndGgpIHtcblx0XHRjb250ZXh0TmV4dCArPSB0eHQuZWxsaXBzaXM7XG5cdH1cblx0cmV0dXJuIFtjb250ZXh0UHJldiwgdGV4dC5zbGljZShsaW5rLnN0YXJ0LCBsaW5rLmVuZCksIGNvbnRleHROZXh0XTtcbn07XG5cbi8qIEV4dHJhY3QgdGhlIHByZWZpeGVkIHBhZ2UgbmFtZSBmcm9tIGEgbGluayAqL1xuY29uc3QgZXh0cmFjdFBhZ2VOYW1lID0gKGxpbmspID0+IHtcblx0bGV0IHBhZ2VOYW1lID0gZXh0cmFjdFBhZ2VOYW1lUmF3KGxpbmspO1xuXHRpZiAocGFnZU5hbWUpIHtcblx0XHRjb25zdCBzZWN0aW9uUG9zID0gcGFnZU5hbWUuaW5kZXhPZignIycpO1xuXHRcdGxldCBzZWN0aW9uID0gJyc7XG5cdFx0aWYgKHNlY3Rpb25Qb3MgIT09IC0xKSB7XG5cdFx0XHRzZWN0aW9uID0gcGFnZU5hbWUuc2xpY2UoTWF0aC5tYXgoMCwgc2VjdGlvblBvcykpO1xuXHRcdFx0cGFnZU5hbWUgPSBwYWdlTmFtZS5zbGljZSgwLCBNYXRoLm1heCgwLCBzZWN0aW9uUG9zKSk7XG5cdFx0fVxuXHRcdHJldHVybiBnZXRDYW5vbmljYWxUaXRsZShwYWdlTmFtZSkgKyBzZWN0aW9uO1xuXHR9XG59O1xuXG4vKiBFeHRyYWN0IHRoZSBwYWdlIG5hbWUgZnJvbSBhIGxpbmssIGFzIGlzICovXG5jb25zdCBleHRyYWN0UGFnZU5hbWVSYXcgPSAobGluaykgPT4ge1xuXHRpZiAoIWxpbmsuaGFzQ2xhc3MoJ2ltYWdlJykpIHtcblx0XHRjb25zdCBocmVmID0gbGluay5hdHRyKCdocmVmJyk7XG5cdFx0aWYgKGxpbmsuaGFzQ2xhc3MoJ25ldycpKSB7XG5cdFx0XHQvLyBcIlJlZFwiIGxpbmtcblx0XHRcdGlmIChocmVmLmluY2x1ZGVzKG13LmNvbmZpZy5nZXQoJ3dnU2NyaXB0JykpKSB7XG5cdFx0XHRcdHJldHVybiBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3RpdGxlJywgaHJlZik7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IHJlZ2V4ID0gbXcuY29uZmlnLmdldCgnd2dBcnRpY2xlUGF0aCcpLnJlcGxhY2UoJyQxJywgJyguKiknKTtcblx0XHRcdGNvbnN0IHJlZ2V4UmVzdWx0ID0gbmV3IFJlZ0V4cChgXiR7cmVnZXh9JGApLmV4ZWMoaHJlZik7XG5cdFx0XHRpZiAoQXJyYXkuaXNBcnJheShyZWdleFJlc3VsdCkgJiYgcmVnZXhSZXN1bHQubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocmVnZXhSZXN1bHRbMV0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcblxuLyogQ2hlY2sgd2hldGhlciB0aGlzIGlzIGEgZGlzYW1iaWd1YXRpb24gcGFnZSAqL1xuY29uc3QgaXNEaXNhbSA9ICgpID0+IHtcblx0Y29uc3QgY2F0ZWdvcmllcyA9IG13LmNvbmZpZy5nZXQoJ3dnQ2F0ZWdvcmllcycsIFtdKTtcblx0Zm9yIChjb25zdCBjYXRlZ29yeSBvZiBjYXRlZ29yaWVzKSB7XG5cdFx0Y29uc3Qge2Rpc2FtQ2F0ZWdvcmllc30gPSBjZmc7XG5cdFx0aWYgKGRpc2FtQ2F0ZWdvcmllcy5pbmNsdWRlcyhjYXRlZ29yeSkpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCBzZWNvbmRzVG9ISE1NU1MgPSAodG90YWxTZWNvbmRzKSA9PiB7XG5cdGxldCBoaG1tc3MgPSAnJztcblx0Y29uc3QgaG91cnMgPSBNYXRoLmZsb29yKHRvdGFsU2Vjb25kcyAvIDM2MDApO1xuXHRjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcigodG90YWxTZWNvbmRzICUgMzYwMCkgLyA2MCk7XG5cdGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKCh0b3RhbFNlY29uZHMgJSAzNjAwKSAlIDYwKTtcblx0aWYgKGhvdXJzID49IDEpIHtcblx0XHRoaG1tc3MgPSBgJHtwYWQoaG91cnMsICcwJywgMil9OmA7XG5cdH1cblx0aGhtbXNzICs9IGAke3BhZChtaW51dGVzLCAnMCcsIDIpfToke3BhZChzZWNvbmRzLCAnMCcsIDIpfWA7XG5cdHJldHVybiBoaG1tc3M7XG59O1xuXG5jb25zdCBwYWQgPSAoc3RyLCB6LCB3aWR0aCkgPT4ge1xuXHRzdHIgPSBzdHIudG9TdHJpbmcoKTtcblx0aWYgKHN0ci5sZW5ndGggPj0gd2lkdGgpIHtcblx0XHRyZXR1cm4gc3RyO1xuXHR9XG5cdHJldHVybiAoXG5cdFx0QXJyYXkuZnJvbSh7XG5cdFx0XHRsZW5ndGg6IHdpZHRoIC0gc3RyLmxlbmd0aCArIDEsXG5cdFx0fSkuam9pbih6KSArIHN0clxuXHQpO1xufTtcblxuLyogQ3JlYXRlIGEgbmV3IGJ1dHRvblxuICogdGV4dDogVGV4dCB0aGF0IHdpbGwgYmUgZGlzcGxheWVkIG9uIHRoZSBidXR0b25cbiAqIG9uQ2xpY2s6IEZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGVcbiAqIGJ1dHRvbiBpcyBjbGlja2VkXG4gKi9cbmNvbnN0IGNyZWF0ZUJ1dHRvbiA9ICh0ZXh0LCBvbkNsaWNrKSA9PiB7XG5cdGNvbnN0IGJ1dHRvbiA9ICQoJzxpbnB1dD4nKS5hdHRyKHtcblx0XHR0eXBlOiAnYnV0dG9uJyxcblx0XHR2YWx1ZTogdGV4dCxcblx0fSk7XG5cdGJ1dHRvbi5hZGRDbGFzcygnZGlzYW1hc3Npc3QtYnV0dG9uJykub24oJ2NsaWNrJywgb25DbGljayk7XG5cdHJldHVybiBidXR0b247XG59O1xuXG4vKiBHaXZlbiBhIHBhZ2UgdGl0bGUgYW5kIGFuIGFycmF5IG9mIHBvc3NpYmxlIHJlZGlyZWN0cyB7ZnJvbSwgdG99IChcImNhbm9uaWNhbCB0aXRsZXNcIiksIGZpbmQgdGhlIHBhZ2UvKiAqIGF0IHRoZSBlbmQgb2YgdGhlIHJlZGlyZWN0IGNoYWluLCBpZiB0aGVyZSBpcyBvbmUuIE90aGVyd2lzZSwgcmV0dXJuIHRoZSBwYWdlIHRpdGxlIHRoYXQgd2FzIHBhc3NlZCAqL1xuY29uc3QgcmVzb2x2ZVJlZGlyZWN0ID0gKHBhZ2VUaXRsZSwgcG9zc2libGVSZWRpcmVjdHMpID0+IHtcblx0bGV0IGFwcGxpZWRSZWRpcmVjdCA9IHRydWU7XG5cdGNvbnN0IHZpc2l0ZWRQYWdlcyA9IHt9O1xuXHRsZXQgY3VycmVudFBhZ2UgPSBnZXRDYW5vbmljYWxUaXRsZShwYWdlVGl0bGUpO1xuXHR3aGlsZSAoYXBwbGllZFJlZGlyZWN0KSB7XG5cdFx0YXBwbGllZFJlZGlyZWN0ID0gZmFsc2U7XG5cdFx0Zm9yIChjb25zdCBwb3NzaWJsZVJlZGlyZWN0IG9mIHBvc3NpYmxlUmVkaXJlY3RzKSB7XG5cdFx0XHRpZiAocG9zc2libGVSZWRpcmVjdC5mcm9tID09PSBjdXJyZW50UGFnZSkge1xuXHRcdFx0XHRpZiAodmlzaXRlZFBhZ2VzW3Bvc3NpYmxlUmVkaXJlY3QudG9dKSB7XG5cdFx0XHRcdFx0Ly8gUmVkaXJlY3QgY2hhaW4gZGV0ZWN0ZWRcblx0XHRcdFx0XHRyZXR1cm4gcGFnZVRpdGxlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZpc2l0ZWRQYWdlc1tjdXJyZW50UGFnZV0gPSB0cnVlO1xuXHRcdFx0XHRhcHBsaWVkUmVkaXJlY3QgPSB0cnVlO1xuXHRcdFx0XHRjdXJyZW50UGFnZSA9IHBvc3NpYmxlUmVkaXJlY3QudG87XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdC8vIE5vIHJlZGlyZWN0IHJ1bGVzIGFwcGxpZWQgZm9yIGFuIGl0ZXJhdGlvbiBvZiB0aGUgb3V0ZXIgbG9vcDpcblx0Ly8gbm8gbW9yZSByZWRpcmVjdHMuIFdlIGFyZSBkb25lXG5cdHJldHVybiBjdXJyZW50UGFnZTtcbn07XG5cbi8qIEZldGNoIHRoZSBpbmNvbWluZyBsaW5rcyB0byBhIHBhZ2UuIFJldHVybnMgYSBqUXVlcnkgcHJvbWlzZS8qICogKHN1Y2Nlc3MgLSBhcnJheSBvZiB0aXRsZXMgb2YgcGFnZXMgdGhhdCBjb250YWluIGxpbmtzIHRvIHRoZSB0YXJnZXQgcGFnZSBhbmQvKiAqIGFycmF5IG9mIFwiY2Fub25pY2FsIHRpdGxlc1wiIG9mIHBvc3NpYmxlIGRlc3RpbmF0aW9ucyBvZiB0aGUgYmFja2xpbmtzIChlaXRoZXIvKiAqIHRoZSB0YXJnZXQgcGFnZSBvciByZWRpcmVjdHMgdG8gdGhlIHRhcmdldCBwYWdlKSwgZmFpbHVyZSAtIGVycm9yIGRlc2NyaXB0aW9uKS8qICogcGFnZTogVGFyZ2V0IHBhZ2UgKi9cbmNvbnN0IGdldEJhY2tsaW5rcyA9IChwYWdlKSA9PiB7XG5cdGNvbnN0IGRlZmVycmVkID0gbmV3ICQuRGVmZXJyZWQoKTtcblx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRsaXN0OiAnYmFja2xpbmtzJyxcblx0XHRibHRpdGxlOiBwYWdlLFxuXHRcdGJscmVkaXJlY3Q6IHRydWUsXG5cdFx0YmxsaW1pdDogY2ZnLmJhY2tsaW5rTGltaXQsXG5cdFx0YmxuYW1lc3BhY2U6IGNmZy50YXJnZXROYW1lc3BhY2VzLmpvaW4oJ3wnKSxcblx0fTtcblx0YXBpLmdldChwYXJhbXMpXG5cdFx0LmRvbmUoKHtxdWVyeX0pID0+IHtcblx0XHRcdC8vIFRoZXJlIG1pZ2h0IGJlIGR1cGxpY2F0ZSBlbnRyaWVzIGluIHNvbWUgY29ybmVyIGNhc2VzLiBXZSBkb24ndCBjYXJlLFxuXHRcdFx0Ly8gc2luY2Ugd2UgYXJlIGdvaW5nIHRvIGNoZWNrIGxhdGVyLCBhbnl3YXlcblx0XHRcdGNvbnN0IGJhY2tsaW5rcyA9IFtdO1xuXHRcdFx0Y29uc3QgbGlua1RpdGxlcyA9IFtnZXRDYW5vbmljYWxUaXRsZShwYWdlKV07XG5cdFx0XHRjb25zdCBiYWNrbGlua3NRdWVyeSA9IHF1ZXJ5LmJhY2tsaW5rcztcblx0XHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiBiYWNrbGlua3NRdWVyeSkge1xuXHRcdFx0XHRiYWNrbGlua3MucHVzaChlbGVtZW50LnRpdGxlKTtcblx0XHRcdFx0aWYgKCFlbGVtZW50LnJlZGlybGlua3MpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaW5rVGl0bGVzLnB1c2goZWxlbWVudC50aXRsZSk7XG5cdFx0XHRcdGNvbnN0IHtyZWRpcmxpbmtzfSA9IGVsZW1lbnQ7XG5cdFx0XHRcdGZvciAoY29uc3Qge3RpdGxlfSBvZiByZWRpcmxpbmtzKSB7XG5cdFx0XHRcdFx0YmFja2xpbmtzLnB1c2godGl0bGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRkZWZlcnJlZC5yZXNvbHZlKGJhY2tsaW5rcywgbGlua1RpdGxlcyk7XG5cdFx0fSlcblx0XHQuZmFpbCgoY29kZSkgPT4ge1xuXHRcdFx0ZGVmZXJyZWQucmVqZWN0KHR4dC5nZXRCYWNrbGlua3NFcnJvci5yZXBsYWNlKCckMScsIGNvZGUpKTtcblx0XHR9KTtcblx0cmV0dXJuIGRlZmVycmVkLnByb21pc2UoKTtcbn07XG5cbi8qIERvd25sb2FkIGEgbGlzdCBvZiByZWRpcmVjdHMgZm9yIHNvbWUgcGFnZXMuIFJldHVybnMgYSBqUXVlcnkgY2FsbGJhY2sgKHN1Y2Nlc3MgLS8qICogYXJyYXkgb2YgcmVkaXJlY3RzICh7ZnJvbSwgdG99KSwgZmFpbHVyZSAtIGVycm9yIGRlc2NyaXB0aW9uICkvKiAqIHBhZ2VUaXRsZXM6IEFycmF5IG9mIHBhZ2UgdGl0bGVzICovXG5jb25zdCBmZXRjaFJlZGlyZWN0cyA9IChwYWdlVGl0bGVzKSA9PiB7XG5cdGNvbnN0IGRlZmVycmVkID0gbmV3ICQuRGVmZXJyZWQoKTtcblx0Y29uc3QgY3VycmVudFRpdGxlcyA9IHBhZ2VUaXRsZXMuc2xpY2UoMCwgY2ZnLnF1ZXJ5VGl0bGVMaW1pdCk7XG5cdGNvbnN0IHJlc3RUaXRsZXMgPSBwYWdlVGl0bGVzLnNsaWNlKGNmZy5xdWVyeVRpdGxlTGltaXQpO1xuXHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdHRpdGxlczogY3VycmVudFRpdGxlcy5qb2luKCd8JyksXG5cdFx0cmVkaXJlY3RzOiB0cnVlLFxuXHR9O1xuXHRhcGkuZ2V0KHBhcmFtcylcblx0XHQuZG9uZSgoe3F1ZXJ5fSkgPT4ge1xuXHRcdFx0Y29uc3QgdGhlc2VSZWRpcmVjdHMgPSBxdWVyeS5yZWRpcmVjdHMgPz8gW107XG5cdFx0XHRpZiAocmVzdFRpdGxlcy5sZW5ndGgpIHtcblx0XHRcdFx0ZmV0Y2hSZWRpcmVjdHMocmVzdFRpdGxlcylcblx0XHRcdFx0XHQuZG9uZSgocmVkaXJlY3RzKSA9PiB7XG5cdFx0XHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKFsuLi50aGVzZVJlZGlyZWN0cywgLi4ucmVkaXJlY3RzXSk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuZmFpbCgoZGVzY3JpcHRpb24pID0+IHtcblx0XHRcdFx0XHRcdGRlZmVycmVkLnJlamVjdChkZXNjcmlwdGlvbik7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKHRoZXNlUmVkaXJlY3RzKTtcblx0XHRcdH1cblx0XHR9KVxuXHRcdC5mYWlsKChjb2RlKSA9PiB7XG5cdFx0XHRkZWZlcnJlZC5yZWplY3QodHh0LmZldGNoUmVkaXJlY3RzRXJyb3IucmVwbGFjZSgnJDEnLCBjb2RlKSk7XG5cdFx0fSk7XG5cdHJldHVybiBkZWZlcnJlZC5wcm9taXNlKCk7XG59O1xuXG4vKiBEb3dubG9hZCB0aGUgbGlzdCBvZiB1c2VyIHJpZ2h0cyBmb3IgdGhlIGN1cnJlbnQgdXNlci4gUmV0dXJucyBhLyogKiBqUXVlcnkgcHJvbWlzZSAoc3VjY2VzcyAtIGFycmF5IG9mIHJpZ2h0IG5hbWVzLCBlcnJvciAtIGVycm9yIGRlc2NyaXB0aW9uKSAqL1xuY29uc3QgZmV0Y2hSaWdodHMgPSAoKSA9PiB7XG5cdGNvbnN0IGRlZmVycmVkID0gJC5EZWZlcnJlZCgpO1xuXHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdG1ldGE6ICd1c2VyaW5mbycsXG5cdFx0dWlwcm9wOiAncmlnaHRzJyxcblx0fTtcblx0YXBpLmdldChwYXJhbXMpXG5cdFx0LmRvbmUoKHtxdWVyeX0pID0+IHtcblx0XHRcdGRlZmVycmVkLnJlc29sdmUocXVlcnkudXNlcmluZm8ucmlnaHRzKTtcblx0XHR9KVxuXHRcdC5mYWlsKChjb2RlKSA9PiB7XG5cdFx0XHRkZWZlcnJlZC5yZWplY3QodHh0LmZldGNoUmlnaHRzRXJyb3IucmVwbGFjZSgnJDEnLCBjb2RlKSk7XG5cdFx0fSk7XG5cdHJldHVybiBkZWZlcnJlZC5wcm9taXNlKCk7XG59O1xuXG4vKiBMb2FkIHRoZSByYXcgcGFnZSB0ZXh0IGZvciBhIGdpdmVuIHRpdGxlLiBSZXR1cm5zIGEgalF1ZXJ5IHByb21pc2UgKHN1Y2Nlc3MgLSBwYWdlLyogKiBjb250ZW50LCBmYWlsdXJlIC0gZXJyb3IgZGVzY3JpcHRpb24pLyogKiBwYWdlVGl0bGU6IFRpdGxlIG9mIHRoZSBwYWdlICovXG5jb25zdCBsb2FkUGFnZSA9IChwYWdlVGl0bGUpID0+IHtcblx0Y29uc3QgZGVmZXJyZWQgPSBuZXcgJC5EZWZlcnJlZCgpO1xuXHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHR0aXRsZXM6IHBhZ2VUaXRsZSxcblx0XHRwcm9wOiAncmV2aXNpb25zJyxcblx0XHRydnByb3A6ICd0aW1lc3RhbXB8Y29udGVudCcsXG5cdFx0bWV0YTogJ3Rva2VucycsXG5cdFx0dHlwZTogJ2NzcmYnLFxuXHR9O1xuXHRhcGkuZ2V0KHBhcmFtcylcblx0XHQuZG9uZSgoe3F1ZXJ5fSkgPT4ge1xuXHRcdFx0Y29uc3QgW3Jhd1BhZ2VdID0gcXVlcnkucGFnZXM7XG5cdFx0XHRjb25zdCBwYWdlID0ge307XG5cdFx0XHRwYWdlLnJlZGlyZWN0ID0gcmF3UGFnZS5yZWRpcmVjdCAhPT0gdW5kZWZpbmVkO1xuXHRcdFx0cGFnZS5taXNzaW5nID0gcmF3UGFnZS5taXNzaW5nICE9PSB1bmRlZmluZWQ7XG5cdFx0XHRpZiAocmF3UGFnZS5yZXZpc2lvbnMpIHtcblx0XHRcdFx0cGFnZS5jb250ZW50ID0gcmF3UGFnZS5yZXZpc2lvbnNbMF0uY29udGVudDtcblx0XHRcdFx0cGFnZS5iYXNlVGltZVN0YW1wID0gcmF3UGFnZS5yZXZpc2lvbnNbMF0udGltZXN0YW1wO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cGFnZS5jb250ZW50ID0gJyc7XG5cdFx0XHRcdHBhZ2UuYmFzZVRpbWVTdGFtcCA9IHVuZGVmaW5lZDtcblx0XHRcdH1cblx0XHRcdHBhZ2Uuc3RhcnRUaW1lU3RhbXAgPSByYXdQYWdlLnN0YXJ0dGltZXN0YW1wO1xuXHRcdFx0cGFnZS5lZGl0VG9rZW4gPSBxdWVyeS50b2tlbnMuY3NyZnRva2VuO1xuXHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShwYWdlKTtcblx0XHR9KVxuXHRcdC5mYWlsKChjb2RlKSA9PiB7XG5cdFx0XHRkZWZlcnJlZC5yZWplY3QodHh0LmxvYWRQYWdlRXJyb3IucmVwbGFjZSgnJDEnLCBwYWdlVGl0bGUpLnJlcGxhY2UoJyQyJywgY29kZSkpO1xuXHRcdH0pO1xuXHRyZXR1cm4gZGVmZXJyZWQucHJvbWlzZSgpO1xufTtcblxuLyogUmVnaXN0ZXIgY2hhbmdlcyB0byBhIHBhZ2UsIHRvIGJlIHNhdmVkIGxhdGVyLiBSZXR1cm5zIGEgalF1ZXJ5IHByb21pc2UvKiAqIChzdWNjZXNzIC0gbm8gcGFyYW1zLCBmYWlsdXJlIC0gZXJyb3IgZGVzY3JpcHRpb24pLiBUYWtlcyB0aGUgc2FtZSBwYXJhbWV0ZXJzLyogKiBhcyBzYXZlUGFnZSAqL1xuY29uc3Qgc2F2ZVdpdGhDb29sZG93biA9ICguLi5hcmdzKSA9PiB7XG5cdGNvbnN0IGRlZmVycmVkID0gbmV3ICQuRGVmZXJyZWQoKTtcblx0cGVuZGluZ1NhdmVzLnB1c2goe1xuXHRcdGFyZ3MsXG5cdFx0ZGZkOiBkZWZlcnJlZCxcblx0fSk7XG5cdGlmICghcnVubmluZ1NhdmVzKSB7XG5cdFx0Y2hlY2tBbmRTYXZlKCk7XG5cdH1cblx0cmV0dXJuIGRlZmVycmVkLnByb21pc2UoKTtcbn07XG5cbi8qIFNhdmUgdGhlIGZpcnN0IHNldCBvZiBjaGFuZ2VzIGluIHRoZSBsaXN0IG9mIHBlbmRpbmcgY2hhbmdlcywgcHJvdmlkaW5nIHRoYXQvKiAqIGVub3VnaCB0aW1lIGhhcyBwYXNzZWQgc2luY2UgdGhlIGxhc3QgZWRpdCAqL1xuY29uc3QgY2hlY2tBbmRTYXZlID0gZnVuY3Rpb24gKCkge1xuXHRpZiAoIXBlbmRpbmdTYXZlcy5sZW5ndGgpIHtcblx0XHRydW5uaW5nU2F2ZXMgPSBmYWxzZTtcblx0XHRyZXR1cm47XG5cdH1cblx0cnVubmluZ1NhdmVzID0gdHJ1ZTtcblx0Y29uc3QgbWlsbGlzU2luY2VMYXN0ID0gRGF0ZS5ub3coKSAtIGxhc3RFZGl0TWlsbGlzO1xuXHRpZiAobWlsbGlzU2luY2VMYXN0IDwgY2ZnLmVkaXRDb29sZG93biAqIDEwMDApIHtcblx0XHRzZXRUaW1lb3V0KGNoZWNrQW5kU2F2ZSwgY2ZnLmVkaXRDb29sZG93biAqIDEwMDAgLSBtaWxsaXNTaW5jZUxhc3QpO1xuXHR9IGVsc2Uge1xuXHRcdC8vIFRoZSBsYXN0IGVkaXQgc3RhcnRlZCBhdCBsZWFzdCBjZmcuZWRpdENvb2xkb3duIHNlY29uZHMgYWdvXG5cdFx0Y29uc3Qgc2F2ZSA9IHBlbmRpbmdTYXZlcy5zaGlmdCgpO1xuXHRcdHNhdmVQYWdlXG5cdFx0XHQuYXBwbHkodGhpcywgc2F2ZS5hcmdzKVxuXHRcdFx0LmRvbmUoKCkgPT4ge1xuXHRcdFx0XHRjaGVja0FuZFNhdmUoKTtcblx0XHRcdFx0c2F2ZS5kZmQucmVzb2x2ZSgpO1xuXHRcdFx0fSlcblx0XHRcdC5mYWlsKChkZXNjcmlwdGlvbikgPT4ge1xuXHRcdFx0XHRjaGVja0FuZFNhdmUoKTtcblx0XHRcdFx0c2F2ZS5kZmQucmVqZWN0KGRlc2NyaXB0aW9uKTtcblx0XHRcdH0pO1xuXHRcdC8vIFdlJ2xsIHVzZSB0aGUgdGltZSBzaW5jZSB0aGUgbGFzdCBlZGl0IHN0YXJ0ZWRcblx0XHRsYXN0RWRpdE1pbGxpcyA9IERhdGUubm93KCk7XG5cdH1cbn07XG5cbi8qIFNhdmUgdGhlIGNoYW5nZXMgbWFkZSB0byBhIHBhZ2UuIFJldHVybnMgYSBqUXVlcnkgcHJvbWlzZSAoc3VjY2VzcyAtIG5vIHBhcmFtcywvKiAqIGZhaWx1cmUgLSBlcnJvciBkZXNjcmlwdGlvbikvKiAqIHBhZ2VUaXRsZTogVGl0bGUgb2YgdGhlIHBhZ2UvKiAqIHBhZ2U6IFBhZ2UgZGF0YS8qICogc3VtbWFyeTogU3VtbWFyeSBvZiB0aGUgY2hhbmdlcyBtYWRlIHRvIHRoZSBwYWdlLyogKiBtaW5vckVkaXQ6IFdoZXRoZXIgdG8gbWFyayB0aGUgZWRpdCBhcyAnbWlub3InLyogKiBib3RFZGl0OiBXaGV0aGVyIHRvIG1hcmsgdGhlIGVkaXQgYXMgJ2JvdCcgKi9cbmNvbnN0IHNhdmVQYWdlID0gKHBhZ2VUaXRsZSwge2VkaXRUb2tlbiwgY29udGVudCwgYmFzZVRpbWVTdGFtcCwgc3RhcnRUaW1lU3RhbXB9LCBzdW1tYXJ5LCBtaW5vckVkaXQsIGJvdEVkaXQpID0+IHtcblx0Y29uc3QgZGVmZXJyZWQgPSBuZXcgJC5EZWZlcnJlZCgpO1xuXHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0dGl0bGU6IHBhZ2VUaXRsZSxcblx0XHR0b2tlbjogZWRpdFRva2VuLFxuXHRcdHRleHQ6IGNvbnRlbnQsXG5cdFx0YmFzZXRpbWVzdGFtcDogYmFzZVRpbWVTdGFtcCxcblx0XHRzdGFydHRpbWVzdGFtcDogc3RhcnRUaW1lU3RhbXAsXG5cdFx0c3VtbWFyeSxcblx0XHR3YXRjaGxpc3Q6IGNmZy53YXRjaCxcblx0XHRtaW5vcjogbWlub3JFZGl0LFxuXHRcdGJvdDogYm90RWRpdCxcblx0fTtcblx0YXBpLnBvc3QocGFyYW1zKVxuXHRcdC5kb25lKCgpID0+IHtcblx0XHRcdGRlZmVycmVkLnJlc29sdmUoKTtcblx0XHR9KVxuXHRcdC5mYWlsKChjb2RlKSA9PiB7XG5cdFx0XHRkZWZlcnJlZC5yZWplY3QodHh0LnNhdmVQYWdlRXJyb3IucmVwbGFjZSgnJDEnLCBwYWdlVGl0bGUpLnJlcGxhY2UoJyQyJywgY29kZSkpO1xuXHRcdH0pO1xuXHRyZXR1cm4gZGVmZXJyZWQucHJvbWlzZSgpO1xufTtcbiIsICJleHBvcnQgY29uc3QgdHh0ID0ge1xuXHRzdGFydDogJ+S4uumTvuaOpea2iOatp+S5iScsXG5cdHN0YXJ0TWFpbjogJ+S4uumTvuiHs+S4u+adoeebrueahOmTvuaOpea2iOatp+S5iScsXG5cdHN0YXJ0U2FtZTogJ+S4uumTvuiHs+a2iOatp+S5iemhteeahOmTvuaOpea2iOatp+S5iScsXG5cdGNsb3NlOiAn5YWz6ZetJyxcblx0dW5kbzogJ+WkjeWOnycsXG5cdG9taXQ6ICfot7Pov4cnLFxuXHRyZWZyZXNoOiAn6YeN5paw5pW055CGJyxcblx0dGl0bGVBc1RleHQ6ICflhbblroPnm67moIcnLFxuXHRkaXNhbU5lZWRlZDogJ+agh+ekunt7ZG59fScsXG5cdGludGVudGlvbmFsTGluazogJ+acieaEj+mTvuWIsOa2iOatp+S5iemhteeahOmTvuaOpScsXG5cdHRpdGxlQXNUZXh0UHJvbXB0OiAn6K+36L6T5YWl5paw55qE6ZO+5o6l55uu5qCH77yaJyxcblx0cmVtb3ZlTGluazogJ+WOu+mZpOmTvuaOpScsXG5cdG9wdGlvbk1hcmtlcjogJyBb6ZO+5o6l5Yiw6L+Z6YeMXScsXG5cdHRhcmdldE9wdGlvbk1hcmtlcjogJyBb5b2T5YmN55uu5qCHXScsXG5cdHJlZGlyZWN0T3B0aW9uTWFya2VyOiAnIFvlvZPliY3nm67moIfvvIjph43lrprlkJHvvIldJyxcblx0cGFnZVRpdGxlTGluZTogJzxhIGhyZWY9XCIkMVwiPiQyPC9hPu+8micsXG5cdG5vTW9yZUxpbmtzOiAn5rKh5pyJ6ZyA6KaB5raI5q2n5LmJ55qE6ZO+5o6l5LqG44CCJyxcblx0cGVuZGluZ0VkaXRDb3VudGVyOiAn5bey5L+d5a2YJDHkuKrvvIzlt7LnvJbovpEkMuS4qicsXG5cdHBlbmRpbmdFZGl0Qm94OiAnRGlzYW1Bc3Npc3TmraPlnKjlgqjlrZjmgqjnmoTnvJbovpHvvIgkMe+8ieOAgicsXG5cdHBlbmRpbmdFZGl0Qm94VGltZUVzdGltYXRpb246ICckMe+8m+WJqeS9meaXtumXtO+8miQyJyxcblx0cGVuZGluZ0VkaXRCb3hMaW1pdGVkOlxuXHRcdCflnKjmiYDmnInmm7TmlLnkv53lrZjliY3vvIzor7fkuI3opoHlhbPpl63pobXpnaLvvJvkvaDlj6/ku6XlnKjlj6bkuIDkuKrpobXpnaLnvJbovpHmsYLpl7vnmb7np5HvvIzkvYbmmK/or7fli7/lkIzml7bkvb/nlKjlpJrkuKpEaXNhbUFzc2lzdOOAgicsXG5cdGVycm9yOiAn6ZSZ6K+v77yaJDEnLFxuXHRmZXRjaFJlZGlyZWN0c0Vycm9yOiAn6I635Y+W6YeN5a6a5ZCR5aSx6LSl77yaXCIkMVwiLicsXG5cdGdldEJhY2tsaW5rc0Vycm9yOiAn5LiL6L295Y+N5ZCR6ZO+5o6l5aSx6LSl77yaXCIkMVwiLicsXG5cdGZldGNoUmlnaHRzRXJyb3I6ICfojrflj5bnlKjmiLfmnYPpmZDlpLHotKXvvJpcIiQxXCIsJyxcblx0bG9hZFBhZ2VFcnJvcjogJ+WKoOi9vSQx5aSx6LSl77yaXCIkMlwiLicsXG5cdHNhdmVQYWdlRXJyb3I6ICfkv53lrZjoh7MkMeWksei0pe+8mlwiJDJcIi4nLFxuXHRkaXNtaXNzRXJyb3I6ICdEaXNtaXNzJyxcblx0cGVuZGluZzogJ0Rpc2FtQXNzaXN05bCa5pyJ5pyq5YKo5a2Y55qE57yW6L6R44CC5aaC5qyy5YKo5a2Y5LmL77yM6K+35oyJ4oCc5YWz6Zet4oCd44CCJyxcblx0ZWRpdEluUHJvZ3Jlc3M6ICdEaXNhbUFzc2lzdOato+WcqOi/m+ihjOe8lui+keOAguiLpeaCqOWwhuacrOWIhumhteWFs+mXre+8jOWPr+iDveS8muS4p+WkseaCqOeahOe8lui+keOAgicsXG5cdGVsbGlwc2lzOiAn4oCm4oCmJyxcblx0bm90aWZ5Q2hhcmFjdGVyOiAn4pyUJyxcblx0c3VtbWFyeTogJ+S9v+eUqFtbTWVkaWFXaWtpOkdhZGdldC1EaXNhbUFzc2lzdC5qc3xEaXNhbUFzc2lzdF1d5riF55CGW1tRVzpEQUJ85raI5q2n5LmJXV3pk77mjqXvvJpbWyQxXV3vvIgkMu+8ieOAgicsXG5cdHN1bW1hcnlDaGFuZ2VkOiAn5pS56ZO+5o6l6IezW1skMV1dJyxcblx0c3VtbWFyeU9taXR0ZWQ6ICfpk77mjqXlt7Lot7Pov4cnLFxuXHRzdW1tYXJ5UmVtb3ZlZDogJ+mTvuaOpeW3suenu+mZpCcsXG5cdHN1bW1hcnlJbnRlbnRpb25hbDogJ+WIu+aEj+mTvuaOpeiHs+a2iOatp+S5iemhtemdoicsXG5cdHN1bW1hcnlIZWxwTmVlZGVkOiAn6ZyA6KaB5biu5YqpJyxcblx0c3VtbWFyeVNlcGFyYXRvcjogJzsgJyxcblx0cmVkaXJlY3RTdW1tYXJ5OiAn5L2/55SoW1tNZWRpYVdpa2k6R2FkZ2V0LURpc2FtQXNzaXN0LmpzfERpc2FtQXNzaXN0XV3liJvlu7rnm67moIfkuLpbWyQxXV3nmoTph43lrprlkJHjgIInLFxufTtcbiIsICIvKipcbiAqIERpc2FtQXNzaXN0OiBhIHRvb2wgZm9yIHJlcGFpcmluZyBsaW5rcyBmcm9tIGFydGljbGVzIHRvIGRpc2FtYmlndWF0aW9uIHBhZ2VzLlxuICog55SxUXdlcnR5eXRyZXdxcXdlcnR55pyA5Yid6K6+6K6h77yaQ0MgQlktU0EgMy4wXG4gKiDnlLFHWldEZXLmnKzlnLDljJbvvJoyMDIwLTA4LTE5IENDIEJZLVNBIDMuMFxuICog55Sx5ZKM5bmz5aWL5paX5pWR5Zyw55CD56iN5L2c57+76K+RIDIwMjEtMDUtMTUgQ0MgQlktU0EgMy4wXG4gKiDmsYLpl7vnmb7np5FOanpqeueugOS9k+WMliAyMDIyLTItMTQgQ0MgQlktU0EgNC4wXG4gKi9cbmltcG9ydCB7aW5zdGFsbH0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuXG4kKGluc3RhbGwpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7OztBQUFBO0FBQUEsK0VBQUFBLFVBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksUUFBUSxTQUFVLElBQUk7QUFDeEIsYUFBTyxNQUFNLEdBQUcsU0FBUyxRQUFRO0FBQUEsSUFDbkM7QUFHQSxJQUFBQSxRQUFPO0FBQUEsSUFFTCxNQUFNLE9BQU8sY0FBYyxZQUFZLFVBQVUsS0FDakQsTUFBTSxPQUFPLFVBQVUsWUFBWSxNQUFNO0FBQUEsSUFFekMsTUFBTSxPQUFPLFFBQVEsWUFBWSxJQUFJLEtBQ3JDLE1BQU0sT0FBTyxVQUFVLFlBQVksTUFBTSxLQUN6QyxNQUFNLE9BQU9ELFlBQVEsWUFBWUEsUUFBSTtBQUFBLElBRXBDLDJCQUFZO0FBQUUsYUFBTztBQUFBLElBQU0sRUFBRyxLQUFLLFNBQVMsYUFBYSxFQUFFO0FBQUE7QUFBQTs7O0FDZjlEO0FBQUEsOEVBQUFFLFVBQUFDLFNBQUE7QUFBQTtBQUNBLElBQUFBLFFBQU8sVUFBVSxTQUFVLE1BQU07QUFDL0IsVUFBSTtBQUNGLGVBQU8sQ0FBQyxDQUFDLEtBQUs7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SUFDUnRNLE9BQU9nRTtJQUNQcUwsT0FBT2I7SUFDUDVRLE1BQU0yRTtJQUNOK00sZUFBZWxCO0lBQ2ZHLGdCQUFnQkQ7SUFDaEJuVTtJQUNBb1YsV0FBV3pZLElBQUlpQjtJQUNmeVgsT0FBT0w7SUFDUE0sS0FBS0w7RUFDTjtBQUNBelUsTUFBSStVLEtBQUtyRCxNQUFNLEVBQ2IxTCxLQUFLLE1BQU07QUFDWG1CLGFBQVNFLFFBQVE7RUFDbEIsQ0FBQyxFQUNBSCxLQUFNdUwsVUFBUztBQUNmdEwsYUFBU3VMLE9BQU9uVixJQUFJMkIsY0FBY3NJLFFBQVEsTUFBTTZCLFNBQVMsRUFBRTdCLFFBQVEsTUFBTWlMLElBQUksQ0FBQztFQUMvRSxDQUFDO0FBQ0YsU0FBT3RMLFNBQVNZLFFBQVE7QUFDekI7O0FFcmdDQXhHLEVBQUVGLE9BQU87IiwKICAibmFtZXMiOiBbImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImVycm9yIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbCIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXJyb3IiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgImVycm9yIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbCIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAiU3ltYm9sIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbCIsICJkb2N1bWVudCIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgImVycm9yIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAiZXJyb3IiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbCIsICJUeXBlRXJyb3IiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXJyb3IiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXJyb3IiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJleHBvcnRzIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbCIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJlcnJvciIsICJleHBvcnRzIiwgIm1vZHVsZSIsICIkIiwgImVycm9yIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIiQiLCAiZXJyb3IiLCAiV0dfQUNUSU9OIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiY2ZnIiwgImRpc2FtQ2F0ZWdvcmllcyIsICJkaXNhbUxpbmtUZW1wbGF0ZXMiLCAiZGlzYW1MaW5rSWdub3JlVGVtcGxhdGVzIiwgImRpc2FtRm9ybWF0IiwgImRpc2FtUmVnRXhwIiwgImRpc2FtTmVlZGVkVGV4dCIsICJjb25jYXQiLCAicmVkaXJlY3RUb0Rpc2FtIiwgImludGVudGlvbmFsTGlua09wdGlvbiIsICJ0YXJnZXROYW1lc3BhY2VzIiwgImJhY2tsaW5rTGltaXQiLCAicXVlcnlUaXRsZUxpbWl0IiwgInJhZGl1cyIsICJudW1Db250ZXh0TGluZXMiLCAiaGlzdG9yeVNpemUiLCAiZWRpdENvb2xkb3duIiwgIndhdGNoIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAidHh0IiwgInN0YXJ0IiwgInN0YXJ0TWFpbiIsICJzdGFydFNhbWUiLCAiY2xvc2UiLCAidW5kbyIsICJvbWl0IiwgInJlZnJlc2giLCAidGl0bGVBc1RleHQiLCAiZGlzYW1OZWVkZWQiLCAiaW50ZW50aW9uYWxMaW5rIiwgInRpdGxlQXNUZXh0UHJvbXB0IiwgInJlbW92ZUxpbmsiLCAib3B0aW9uTWFya2VyIiwgInRhcmdldE9wdGlvbk1hcmtlciIsICJyZWRpcmVjdE9wdGlvbk1hcmtlciIsICJwYWdlVGl0bGVMaW5lIiwgIm5vTW9yZUxpbmtzIiwgInBlbmRpbmdFZGl0Q291bnRlciIsICJwZW5kaW5nRWRpdEJveCIsICJwZW5kaW5nRWRpdEJveFRpbWVFc3RpbWF0aW9uIiwgInBlbmRpbmdFZGl0Qm94TGltaXRlZCIsICJlcnJvciIsICJmZXRjaFJlZGlyZWN0c0Vycm9yIiwgImdldEJhY2tsaW5rc0Vycm9yIiwgImZldGNoUmlnaHRzRXJyb3IiLCAibG9hZFBhZ2VFcnJvciIsICJzYXZlUGFnZUVycm9yIiwgImRpc21pc3NFcnJvciIsICJwZW5kaW5nIiwgImVkaXRJblByb2dyZXNzIiwgImVsbGlwc2lzIiwgIm5vdGlmeUNoYXJhY3RlciIsICJzdW1tYXJ5IiwgInN1bW1hcnlDaGFuZ2VkIiwgInN1bW1hcnlPbWl0dGVkIiwgInN1bW1hcnlSZW1vdmVkIiwgInN1bW1hcnlJbnRlbnRpb25hbCIsICJzdW1tYXJ5SGVscE5lZWRlZCIsICJzdW1tYXJ5U2VwYXJhdG9yIiwgInJlZGlyZWN0U3VtbWFyeSIsICJhcGkiLCAiaW5pdE13QXBpIiwgInN0YXJ0TGluayIsICJ1aSIsICJsaW5rcyIsICJwYWdlQ2hhbmdlcyIsICJjdXJyZW50UGFnZVRpdGxlIiwgImN1cnJlbnRQYWdlUGFyYW1ldGVycyIsICJjdXJyZW50TGluayIsICJwb3NzaWJsZUJhY2tsaW5rRGVzdGluYXRpb25zIiwgImZvcmNlU2FtZVBhZ2UiLCAicnVubmluZyIsICJjaG9vc2luZyIsICJjYW5NYXJrSW50ZW50aW9uYWxMaW5rcyIsICJkaXNwbGF5ZWRQYWdlcyIsICJlZGl0Q291bnQiLCAiZWRpdExpbWl0IiwgInBlbmRpbmdTYXZlcyIsICJwZW5kaW5nRWRpdEJveFRleHQiLCAibGFzdEVkaXRNaWxsaXMiLCAicnVubmluZ1NhdmVzIiwgImluc3RhbGwiLCAiaXNEaXNhbSIsICIkIiwgInBvcnRsZXRJZCIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgIlJlZ0V4cCIsICJ0ZXN0IiwgImdldFRpdGxlIiwgInN0YXJ0TWFpbkxpbmsiLCAidXRpbCIsICJhZGRQb3J0bGV0TGluayIsICJvbiIsICJzdGFydFNhbWVMaW5rIiwgImFkZCIsICJlbnN1cmVEQUJFeGlzdHMiLCAidGhlbiIsICJjYW5NYXJrIiwgImNyZWF0ZVVJIiwgImFkZFVubG9hZENvbmZpcm0iLCAibWFya0Rpc2FtT3B0aW9ucyIsICJjaGVja0VkaXRMaW1pdCIsICJ0b2dnbGVQZW5kaW5nRWRpdEJveCIsICJkb1BhZ2UiLCAiJGJvZHkiLCAiZGlzcGxheSIsICJhZGRDbGFzcyIsICJmaW5pc2hlZE1lc3NhZ2UiLCAidGV4dCIsICJoaWRlIiwgImNvbnRleHQiLCAidW5kb0J1dHRvbiIsICJjcmVhdGVCdXR0b24iLCAib21pdEJ1dHRvbiIsICJlbmRCdXR0b24iLCAic2F2ZUFuZEVuZCIsICJyZWZyZXNoQnV0dG9uIiwgInRpdGxlQXNUZXh0QnV0dG9uIiwgImNob29zZVRpdGxlRnJvbVByb21wdCIsICJpbnRlbnRpb25hbExpbmtCdXR0b24iLCAiY2hvb3NlSW50ZW50aW9uYWxMaW5rIiwgImRpc2FtTmVlZGVkQnV0dG9uIiwgImNob29zZURpc2FtTmVlZGVkIiwgInJlbW92ZUxpbmtCdXR0b24iLCAiY2hvb3NlTGlua1JlbW92YWwiLCAidG9wIiwgImFwcGVuZCIsICJsZWZ0QnV0dG9ucyIsICJyaWdodEJ1dHRvbnMiLCAiYWxsQnV0dG9ucyIsICJ1cGRhdGVFZGl0Q291bnRlciIsICJ0b2dnbGVBY3Rpb25CdXR0b25zIiwgImZpbmQiLCAiYmVmb3JlIiwgImZhZGVJbiIsICJ3aW5kb3ciLCAiY2hlY2tBY3R1YWxDaGFuZ2VzIiwgIm9wdGlvblBhZ2VUaXRsZXMiLCAib3B0aW9uTWFya2VycyIsICJnZXREaXNhbU9wdGlvbnMiLCAiZWFjaCIsICJfaW5kZXgiLCAiZWxlbWVudCIsICJsaW5rIiwgInRpdGxlIiwgImV4dHJhY3RQYWdlTmFtZSIsICJhdHRyIiwgImV2IiwgInByZXZlbnREZWZhdWx0IiwgImNob29zZVJlcGxhY2VtZW50IiwgImFmdGVyIiwgInB1c2giLCAidGFyZ2V0UGFnZSIsICJnZXRUYXJnZXRQYWdlIiwgImZldGNoUmVkaXJlY3RzIiwgImRvbmUiLCAicmVkaXJlY3RzIiwgImVuZFRhcmdldFBhZ2UiLCAicmVzb2x2ZVJlZGlyZWN0IiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJlbnRyaWVzIiwgIl9zdGVwIiwgInMiLCAibiIsICJpaSIsICJvcHRpb25QYWdlVGl0bGUiLCAidmFsdWUiLCAiZW5kT3B0aW9uVGl0bGUiLCAiaXNTYW1lUGFnZSIsICJlcnIiLCAiZSIsICJmIiwgImZhaWwiLCAiZGVmZXJyZWQiLCAiRGVmZXJyZWQiLCAicmVzb2x2ZSIsICJleGVjIiwgImRpc2FtVGl0bGUiLCAicmVwbGFjZSIsICJsb2FkUGFnZSIsICJwYWdlIiwgIm1pc3NpbmciLCAiY29udGVudCIsICJzYXZlUGFnZSIsICJkZXNjcmlwdGlvbiIsICJwcm9taXNlIiwgImZldGNoUmlnaHRzIiwgInJpZ2h0cyIsICJpbmNsdWRlcyIsICJhbHdheXMiLCAibGVuZ3RoIiwgImFwcGx5Q2hhbmdlIiwgInNoaWZ0IiwgImRhdGEiLCAiZG9MaW5rIiwgImdldEJhY2tsaW5rcyIsICJiYWNrbGlua3MiLCAicGFnZVRpdGxlcyIsICJfaSIsICJfcGVuZGluZ1NhdmVzIiwgImVsIiwgImZpbHRlciIsICJ0IiwgInJlbW92ZURpc2FtIiwgInVwZGF0ZUNvbnRleHQiLCAiZXh0cmFjdExpbmtUb1BhZ2UiLCAiZW5kIiwgInBhZ2VUaXRsZSIsICJleHRyYSIsICJhZGRDaGFuZ2UiLCAicmVwbGFjZUxpbmsiLCAicHJvbXB0IiwgImxhc3RQYWdlIiwgImF0IiwgInVuc2hpZnQiLCAiY29udGVudEJlZm9yZSIsICJwb3AiLCAiZW5hYmxlZCIsICJhZmZlY3RlZEJ1dHRvbnMiLCAiX2kyIiwgIl9hZmZlY3RlZEJ1dHRvbnMiLCAiYnV0dG9uIiwgInByb3AiLCAidG9nZ2xlRmluaXNoZWRNZXNzYWdlIiwgInNob3ciLCAidG9nZ2xlIiwgImZhZGVPdXQiLCAibm90aWZ5Q29tcGxldGlvbiIsICJvbGRUaXRsZSIsICJvbmUiLCAiaHRtbCIsICJnZXRVcmwiLCAicmVkaXJlY3QiLCAiZXNjYXBlIiwgImV4dHJhY3RDb250ZXh0IiwgImVtcHR5IiwgIm51bUxpbmVzIiwgIk1hdGgiLCAiY2VpbCIsICJoZWlnaHQiLCAiTnVtYmVyIiwgInBhcnNlRmxvYXQiLCAiY3NzIiwgIkFycmF5IiwgImZyb20iLCAiam9pbiIsICJoYXNEaXNhbVRlbXBsYXRlIiwgImNvdW50QWN0dWFsbHlDaGFuZ2VkRnVsbHlDaGVja2VkUGFnZXMiLCAidGV4dENvbnRlbnQiLCAic2Vjb25kc1RvSEhNTVNTIiwgInBhZ2VDaGFuZ2UiLCAiY2hhbmdlU3VtbWFyaWVzIiwgInNhdmUiLCAic2F2ZVdpdGhDb29sZG93biIsICJhcHBseUFsbENoYW5nZXMiLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAib2xkQ29udGVudCIsICJsYXN0UGFnZUNoYW5nZSIsICJjb3VudEFjdHVhbENoYW5nZXMiLCAiY2hhbmdlQ291bnQiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAibGFzdENoYW5nZSIsICJjdXJyZW50VG9vbFVJIiwgInJlbW92ZUNsYXNzIiwgInJlbW92ZSIsICJjb21wbGV0ZSIsICJlcnJvckRlc2NyaXB0aW9uIiwgImVycm9yQm94IiwgInVpSXNJblBsYWNlIiwgImNvbnRhaW5zIiwgImRvY3VtZW50RWxlbWVudCIsICJuZXh0RWxlbWVudCIsICJuZXdDb250ZW50IiwgImxpbmtTdGFydCIsICJzbGljZSIsICJtYXgiLCAibGlua0VuZCIsICJhZnRlckRlc2NyaXB0aW9uIiwgImV4dHJhY3RMaW5rIiwgImxhc3RJbmRleCIsICJ0aXRsZVJlZ2V4IiwgInRlbXBsYXRlUmVnZXgiLCAibWF0Y2giLCAiaW5kZXgiLCAiX21hdGNoJCIsICJwb3NzaWJseUFtYmlndW91cyIsICJfZW5kIiwgInJlc3QiLCAidGVtcGxhdGVNYXRjaCIsICJ0ZW1wbGF0ZVRpdGxlIiwgImdldENhbm9uaWNhbFRpdGxlIiwgImRlc3RpbmF0aW9ucyIsICJfbWF0Y2gkMiIsICJ0aXRsZTEiLCAidGl0bGUyIiwgIlRpdGxlIiwgImdldFByZWZpeGVkVGV4dCIsICJjb250ZXh0U3RhcnQiLCAiY29udGV4dEVuZCIsICJjb250ZXh0UHJldiIsICJjb250ZXh0TmV4dCIsICJwYWdlTmFtZSIsICJleHRyYWN0UGFnZU5hbWVSYXciLCAic2VjdGlvblBvcyIsICJpbmRleE9mIiwgInNlY3Rpb24iLCAiaGFzQ2xhc3MiLCAiaHJlZiIsICJnZXRQYXJhbVZhbHVlIiwgInJlZ2V4IiwgInJlZ2V4UmVzdWx0IiwgImlzQXJyYXkiLCAiZGVjb2RlVVJJQ29tcG9uZW50IiwgImNhdGVnb3JpZXMiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAiY2F0ZWdvcnkiLCAidG90YWxTZWNvbmRzIiwgImhobW1zcyIsICJob3VycyIsICJmbG9vciIsICJtaW51dGVzIiwgInNlY29uZHMiLCAicGFkIiwgInN0ciIsICJ6IiwgIndpZHRoIiwgInRvU3RyaW5nIiwgIm9uQ2xpY2siLCAidHlwZSIsICJwb3NzaWJsZVJlZGlyZWN0cyIsICJhcHBsaWVkUmVkaXJlY3QiLCAidmlzaXRlZFBhZ2VzIiwgImN1cnJlbnRQYWdlIiwgIl9pdGVyYXRvcjUiLCAiX3N0ZXA1IiwgInBvc3NpYmxlUmVkaXJlY3QiLCAidG8iLCAicGFyYW1zIiwgImFjdGlvbiIsICJsaXN0IiwgImJsdGl0bGUiLCAiYmxyZWRpcmVjdCIsICJibGxpbWl0IiwgImJsbmFtZXNwYWNlIiwgInF1ZXJ5IiwgImxpbmtUaXRsZXMiLCAiYmFja2xpbmtzUXVlcnkiLCAiX2l0ZXJhdG9yNiIsICJfc3RlcDYiLCAicmVkaXJsaW5rcyIsICJfaXRlcmF0b3I3IiwgIl9zdGVwNyIsICJjb2RlIiwgInJlamVjdCIsICJjdXJyZW50VGl0bGVzIiwgInJlc3RUaXRsZXMiLCAidGl0bGVzIiwgIl9xdWVyeSRyZWRpcmVjdHMiLCAidGhlc2VSZWRpcmVjdHMiLCAibWV0YSIsICJ1aXByb3AiLCAidXNlcmluZm8iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicnZwcm9wIiwgInJhd1BhZ2UiLCAicGFnZXMiLCAicmV2aXNpb25zIiwgImJhc2VUaW1lU3RhbXAiLCAidGltZXN0YW1wIiwgInN0YXJ0VGltZVN0YW1wIiwgInN0YXJ0dGltZXN0YW1wIiwgImVkaXRUb2tlbiIsICJ0b2tlbnMiLCAiY3NyZnRva2VuIiwgImFyZ3MiLCAiZGZkIiwgImNoZWNrQW5kU2F2ZSIsICJtaWxsaXNTaW5jZUxhc3QiLCAiRGF0ZSIsICJub3ciLCAic2V0VGltZW91dCIsICJhcHBseSIsICJtaW5vckVkaXQiLCAiYm90RWRpdCIsICJ0b2tlbiIsICJiYXNldGltZXN0YW1wIiwgIndhdGNobGlzdCIsICJtaW5vciIsICJib3QiLCAicG9zdCJdCn0K

})();

/* </nowiki> */

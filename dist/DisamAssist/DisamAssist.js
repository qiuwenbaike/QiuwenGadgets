/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/User:Peacearth/DisamAssist.js}
 * @base {@link https://es.wikipedia.org/wiki/Usuario:Qwertyytrewqqwerty/DisamAssist.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/DisamAssist}
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
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/global.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/fails.js
var require_fails = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/fails.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/descriptors.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/function-bind-native.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/function-call.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/object-property-is-enumerable.js"(exports) {
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

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/create-property-descriptor.js
var require_create_property_descriptor = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/create-property-descriptor.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/function-uncurry-this.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/classof-raw.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/indexed-object.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/is-null-or-undefined.js"(exports, module2) {
    "use strict";
    module2.exports = function(it) {
      return it === null || it === void 0;
    };
  }
});

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/require-object-coercible.js
var require_require_object_coercible = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/require-object-coercible.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/to-indexed-object.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/is-callable.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/is-object.js"(exports, module2) {
    "use strict";
    var isCallable = require_is_callable();
    module2.exports = function(it) {
      return typeof it == "object" ? it !== null : isCallable(it);
    };
  }
});

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/get-built-in.js
var require_get_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/get-built-in.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/object-is-prototype-of.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    module2.exports = uncurryThis({}.isPrototypeOf);
  }
});

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/engine-user-agent.js
var require_engine_user_agent = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/engine-user-agent.js"(exports, module2) {
    "use strict";
    module2.exports = typeof navigator != "undefined" && String(navigator.userAgent) || "";
  }
});

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/engine-v8-version.js
var require_engine_v8_version = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/engine-v8-version.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/symbol-constructor-detection.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/use-symbol-as-uid.js"(exports, module2) {
    "use strict";
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    module2.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
  }
});

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/is-symbol.js
var require_is_symbol = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/is-symbol.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/try-to-string.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/a-callable.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/get-method.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/ordinary-to-primitive.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/is-pure.js"(exports, module2) {
    "use strict";
    module2.exports = false;
  }
});

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/define-global-property.js
var require_define_global_property = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/define-global-property.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/shared-store.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/shared.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/to-object.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/has-own-property.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/uid.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/well-known-symbol.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/to-primitive.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/to-property-key.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/document-create-element.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/ie8-dom-define.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/object-get-own-property-descriptor.js"(exports) {
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

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/v8-prototype-define-bug.js
var require_v8_prototype_define_bug = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/v8-prototype-define-bug.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/an-object.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/object-define-property.js"(exports) {
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

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/create-non-enumerable-property.js
var require_create_non_enumerable_property = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/create-non-enumerable-property.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/function-name.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/inspect-source.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/weak-map-basic-detection.js"(exports, module2) {
    "use strict";
    var global2 = require_global();
    var isCallable = require_is_callable();
    var WeakMap = global2.WeakMap;
    module2.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));
  }
});

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/shared-key.js
var require_shared_key = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/shared-key.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/hidden-keys.js"(exports, module2) {
    "use strict";
    module2.exports = {};
  }
});

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/internal-state.js
var require_internal_state = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/internal-state.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/make-built-in.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/define-built-in.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/math-trunc.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/to-integer-or-infinity.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/to-absolute-index.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/to-length.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/length-of-array-like.js"(exports, module2) {
    "use strict";
    var toLength = require_to_length();
    module2.exports = function(obj) {
      return toLength(obj.length);
    };
  }
});

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/array-includes.js
var require_array_includes = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/array-includes.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/object-keys-internal.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/enum-bug-keys.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/object-get-own-property-names.js"(exports) {
    "use strict";
    var internalObjectKeys = require_object_keys_internal();
    var enumBugKeys = require_enum_bug_keys();
    var hiddenKeys = enumBugKeys.concat("length", "prototype");
    exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
      return internalObjectKeys(O, hiddenKeys);
    };
  }
});

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/object-get-own-property-symbols.js
var require_object_get_own_property_symbols = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/object-get-own-property-symbols.js"(exports) {
    "use strict";
    exports.f = Object.getOwnPropertySymbols;
  }
});

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/own-keys.js
var require_own_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/own-keys.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/copy-constructor-properties.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/is-forced.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/export.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/is-array.js"(exports, module2) {
    "use strict";
    var classof = require_classof_raw();
    module2.exports = Array.isArray || function isArray(argument) {
      return classof(argument) === "Array";
    };
  }
});

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/array-set-length.js
var require_array_set_length = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/array-set-length.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/does-not-exceed-safe-integer.js"(exports, module2) {
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
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/delete-property-or-throw.js"(exports, module2) {
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mYWlscy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Rlc2NyaXB0b3JzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1jYWxsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NsYXNzb2YtcmF3LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtY2FsbGFibGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nZXQtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXN5bWJvbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RyeS10by1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWNhbGxhYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1Zy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1uYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9tYXRoLXRydW5jLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtYXJyYXkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1zZXQtbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9lcy1ub3QtZXhjZWVkLXNhZmUtaW50ZWdlci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5wdXNoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVsZXRlLXByb3BlcnR5LW9yLXRocm93LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LnVuc2hpZnQuanMiLCAic3JjL0Rpc2FtQXNzaXN0L21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0Rpc2FtQXNzaXN0L21vZHVsZXMvY29uZmlnLnRzIiwgInNyYy9EaXNhbUFzc2lzdC9tb2R1bGVzL2NvcmUuanMiLCAic3JjL0Rpc2FtQXNzaXN0L21vZHVsZXMvbWVzc2FnZXMuanMiLCAic3JjL0Rpc2FtQXNzaXN0L0Rpc2FtQXNzaXN0LmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIndXNlIHN0cmljdCc7XG52YXIgY2hlY2sgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICYmIGl0Lk1hdGggPT09IE1hdGggJiYgaXQ7XG59O1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxubW9kdWxlLmV4cG9ydHMgPVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZ2xvYmFsLXRoaXMgLS0gc2FmZVxuICBjaGVjayh0eXBlb2YgZ2xvYmFsVGhpcyA9PSAnb2JqZWN0JyAmJiBnbG9iYWxUaGlzKSB8fFxuICBjaGVjayh0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdykgfHxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAtLSBzYWZlXG4gIGNoZWNrKHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYpIHx8XG4gIGNoZWNrKHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsKSB8fFxuICBjaGVjayh0eXBlb2YgdGhpcyA9PSAnb2JqZWN0JyAmJiB0aGlzKSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmMgLS0gZmFsbGJhY2tcbiAgKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pKCkgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBEZXRlY3QgSUU4J3MgaW5jb21wbGV0ZSBkZWZpbmVQcm9wZXJ0eSBpbXBsZW1lbnRhdGlvblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sIDEsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pWzFdICE9PSA3O1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWZ1bmN0aW9uLXByb3RvdHlwZS1iaW5kIC0tIHNhZmVcbiAgdmFyIHRlc3QgPSAoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9KS5iaW5kKCk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gdHlwZW9mIHRlc3QgIT0gJ2Z1bmN0aW9uJyB8fCB0ZXN0Lmhhc093blByb3BlcnR5KCdwcm90b3R5cGUnKTtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgY2FsbCA9IEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9CSU5EID8gY2FsbC5iaW5kKGNhbGwpIDogZnVuY3Rpb24gKCkge1xuICByZXR1cm4gY2FsbC5hcHBseShjYWxsLCBhcmd1bWVudHMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gTmFzaG9ybiB+IEpESzggYnVnXG52YXIgTkFTSE9STl9CVUcgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgJiYgISRwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHsgMTogMiB9LCAxKTtcblxuLy8gYE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGVgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QucHJvdG90eXBlLnByb3BlcnR5aXNlbnVtZXJhYmxlXG5leHBvcnRzLmYgPSBOQVNIT1JOX0JVRyA/IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKFYpIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGhpcywgVik7XG4gIHJldHVybiAhIWRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci5lbnVtZXJhYmxlO1xufSA6ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgY2FsbCA9IEZ1bmN0aW9uUHJvdG90eXBlLmNhbGw7XG52YXIgdW5jdXJyeVRoaXNXaXRoQmluZCA9IE5BVElWRV9CSU5EICYmIEZ1bmN0aW9uUHJvdG90eXBlLmJpbmQuYmluZChjYWxsLCBjYWxsKTtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfQklORCA/IHVuY3VycnlUaGlzV2l0aEJpbmQgOiBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY2FsbC5hcHBseShmbiwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG52YXIgdG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyh7fS50b1N0cmluZyk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBzdHJpbmdTbGljZSh0b1N0cmluZyhpdCksIDgsIC0xKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcbnZhciBzcGxpdCA9IHVuY3VycnlUaGlzKCcnLnNwbGl0KTtcblxuLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3Ncbm1vZHVsZS5leHBvcnRzID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyB0aHJvd3MgYW4gZXJyb3IgaW4gcmhpbm8sIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9yaGluby9pc3N1ZXMvMzQ2XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gISRPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKTtcbn0pID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjbGFzc29mKGl0KSA9PT0gJ1N0cmluZycgPyBzcGxpdChpdCwgJycpIDogJE9iamVjdChpdCk7XG59IDogJE9iamVjdDtcbiIsICIndXNlIHN0cmljdCc7XG4vLyB3ZSBjYW4ndCB1c2UganVzdCBgaXQgPT0gbnVsbGAgc2luY2Ugb2YgYGRvY3VtZW50LmFsbGAgc3BlY2lhbCBjYXNlXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLUlzSFRNTEREQS1pbnRlcm5hbC1zbG90LWFlY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID09PSBudWxsIHx8IGl0ID09PSB1bmRlZmluZWQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYFJlcXVpcmVPYmplY3RDb2VyY2libGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZXF1aXJlb2JqZWN0Y29lcmNpYmxlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXNOdWxsT3JVbmRlZmluZWQoaXQpKSB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJbmRleGVkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoaXQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1Jc0hUTUxEREEtaW50ZXJuYWwtc2xvdFxudmFyIGRvY3VtZW50QWxsID0gdHlwZW9mIGRvY3VtZW50ID09ICdvYmplY3QnICYmIGRvY3VtZW50LmFsbDtcblxuLy8gYElzQ2FsbGFibGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc2NhbGxhYmxlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9uby10eXBlb2YtdW5kZWZpbmVkIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBkb2N1bWVudEFsbCA9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudEFsbCAhPT0gdW5kZWZpbmVkID8gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJyB8fCBhcmd1bWVudCA9PT0gZG9jdW1lbnRBbGw7XG59IDogZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogaXNDYWxsYWJsZShpdCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgYUZ1bmN0aW9uID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBpc0NhbGxhYmxlKGFyZ3VtZW50KSA/IGFyZ3VtZW50IDogdW5kZWZpbmVkO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZXNwYWNlLCBtZXRob2QpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPCAyID8gYUZ1bmN0aW9uKGdsb2JhbFtuYW1lc3BhY2VdKSA6IGdsb2JhbFtuYW1lc3BhY2VdICYmIGdsb2JhbFtuYW1lc3BhY2VdW21ldGhvZF07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB1bmN1cnJ5VGhpcyh7fS5pc1Byb3RvdHlwZU9mKTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBuYXZpZ2F0b3IgIT0gJ3VuZGVmaW5lZCcgJiYgU3RyaW5nKG5hdmlnYXRvci51c2VyQWdlbnQpIHx8ICcnO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50Jyk7XG5cbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgRGVubyA9IGdsb2JhbC5EZW5vO1xudmFyIHZlcnNpb25zID0gcHJvY2VzcyAmJiBwcm9jZXNzLnZlcnNpb25zIHx8IERlbm8gJiYgRGVuby52ZXJzaW9uO1xudmFyIHY4ID0gdmVyc2lvbnMgJiYgdmVyc2lvbnMudjg7XG52YXIgbWF0Y2gsIHZlcnNpb247XG5cbmlmICh2OCkge1xuICBtYXRjaCA9IHY4LnNwbGl0KCcuJyk7XG4gIC8vIGluIG9sZCBDaHJvbWUsIHZlcnNpb25zIG9mIFY4IGlzbid0IFY4ID0gQ2hyb21lIC8gMTBcbiAgLy8gYnV0IHRoZWlyIGNvcnJlY3QgdmVyc2lvbnMgYXJlIG5vdCBpbnRlcmVzdGluZyBmb3IgdXNcbiAgdmVyc2lvbiA9IG1hdGNoWzBdID4gMCAmJiBtYXRjaFswXSA8IDQgPyAxIDogKyhtYXRjaFswXSArIG1hdGNoWzFdKTtcbn1cblxuLy8gQnJvd3NlckZTIE5vZGVKUyBgcHJvY2Vzc2AgcG9seWZpbGwgaW5jb3JyZWN0bHkgc2V0IGAudjhgIHRvIGAwLjBgXG4vLyBzbyBjaGVjayBgdXNlckFnZW50YCBldmVuIGlmIGAudjhgIGV4aXN0cywgYnV0IDBcbmlmICghdmVyc2lvbiAmJiB1c2VyQWdlbnQpIHtcbiAgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2goL0VkZ2VcXC8oXFxkKykvKTtcbiAgaWYgKCFtYXRjaCB8fCBtYXRjaFsxXSA+PSA3NCkge1xuICAgIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9DaHJvbWVcXC8oXFxkKykvKTtcbiAgICBpZiAobWF0Y2gpIHZlcnNpb24gPSArbWF0Y2hbMV07XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2ZXJzaW9uO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLXN5bWJvbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZyAqL1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24nKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcblxudmFyICRTdHJpbmcgPSBnbG9iYWwuU3RyaW5nO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5c3ltYm9scyAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xubW9kdWxlLmV4cG9ydHMgPSAhIU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN5bWJvbCA9IFN5bWJvbCgnc3ltYm9sIGRldGVjdGlvbicpO1xuICAvLyBDaHJvbWUgMzggU3ltYm9sIGhhcyBpbmNvcnJlY3QgdG9TdHJpbmcgY29udmVyc2lvblxuICAvLyBgZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzYCBwb2x5ZmlsbCBzeW1ib2xzIGNvbnZlcnRlZCB0byBvYmplY3QgYXJlIG5vdCBTeW1ib2wgaW5zdGFuY2VzXG4gIC8vIG5iOiBEbyBub3QgY2FsbCBgU3RyaW5nYCBkaXJlY3RseSB0byBhdm9pZCB0aGlzIGJlaW5nIG9wdGltaXplZCBvdXQgdG8gYHN5bWJvbCsnJ2Agd2hpY2ggd2lsbCxcbiAgLy8gb2YgY291cnNlLCBmYWlsLlxuICByZXR1cm4gISRTdHJpbmcoc3ltYm9sKSB8fCAhKE9iamVjdChzeW1ib2wpIGluc3RhbmNlb2YgU3ltYm9sKSB8fFxuICAgIC8vIENocm9tZSAzOC00MCBzeW1ib2xzIGFyZSBub3QgaW5oZXJpdGVkIGZyb20gRE9NIGNvbGxlY3Rpb25zIHByb3RvdHlwZXMgdG8gaW5zdGFuY2VzXG4gICAgIVN5bWJvbC5zaGFtICYmIFY4X1ZFUlNJT04gJiYgVjhfVkVSU0lPTiA8IDQxO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tc3ltYm9sIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zeW1ib2wtY29uc3RydWN0b3ItZGV0ZWN0aW9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX1NZTUJPTFxuICAmJiAhU3ltYm9sLnNoYW1cbiAgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mJyk7XG52YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbm1vZHVsZS5leHBvcnRzID0gVVNFX1NZTUJPTF9BU19VSUQgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyICRTeW1ib2wgPSBnZXRCdWlsdEluKCdTeW1ib2wnKTtcbiAgcmV0dXJuIGlzQ2FsbGFibGUoJFN5bWJvbCkgJiYgaXNQcm90b3R5cGVPZigkU3ltYm9sLnByb3RvdHlwZSwgJE9iamVjdChpdCkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJFN0cmluZyA9IFN0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gJFN0cmluZyhhcmd1bWVudCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuICdPYmplY3QnO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgdHJ5VG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdHJ5LXRvLXN0cmluZycpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYEFzc2VydDogSXNDYWxsYWJsZShhcmd1bWVudCkgaXMgdHJ1ZWBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIGlmIChpc0NhbGxhYmxlKGFyZ3VtZW50KSkgcmV0dXJuIGFyZ3VtZW50O1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcih0cnlUb1N0cmluZyhhcmd1bWVudCkgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkJyk7XG5cbi8vIGBHZXRNZXRob2RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1nZXRtZXRob2Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFYsIFApIHtcbiAgdmFyIGZ1bmMgPSBWW1BdO1xuICByZXR1cm4gaXNOdWxsT3JVbmRlZmluZWQoZnVuYykgPyB1bmRlZmluZWQgOiBhQ2FsbGFibGUoZnVuYyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgT3JkaW5hcnlUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9yZGluYXJ5dG9wcmltaXRpdmVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBwcmVmKSB7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAocHJlZiA9PT0gJ3N0cmluZycgJiYgaXNDYWxsYWJsZShmbiA9IGlucHV0LnRvU3RyaW5nKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKGlzQ2FsbGFibGUoZm4gPSBpbnB1dC52YWx1ZU9mKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHByZWYgIT09ICdzdHJpbmcnICYmIGlzQ2FsbGFibGUoZm4gPSBpbnB1dC50b1N0cmluZykgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHRyeSB7XG4gICAgZGVmaW5lUHJvcGVydHkoZ2xvYmFsLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGdsb2JhbFtrZXldID0gdmFsdWU7XG4gIH0gcmV0dXJuIHZhbHVlO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcblxudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgZGVmaW5lR2xvYmFsUHJvcGVydHkoU0hBUkVELCB7fSk7XG5cbm1vZHVsZS5leHBvcnRzID0gc3RvcmU7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xudmFyIHN0b3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHt9KTtcbn0pKCd2ZXJzaW9ucycsIFtdKS5wdXNoKHtcbiAgdmVyc2lvbjogJzMuMzUuMScsXG4gIG1vZGU6IElTX1BVUkUgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAxNC0yMDI0IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJyxcbiAgbGljZW5zZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2Jsb2IvdjMuMzUuMS9MSUNFTlNFJyxcbiAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMnXG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbi8vIGBUb09iamVjdGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvb2JqZWN0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gJE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcblxudmFyIGhhc093blByb3BlcnR5ID0gdW5jdXJyeVRoaXMoe30uaGFzT3duUHJvcGVydHkpO1xuXG4vLyBgSGFzT3duUHJvcGVydHlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1oYXNvd25wcm9wZXJ0eVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1oYXNvd24gLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuaGFzT3duIHx8IGZ1bmN0aW9uIGhhc093bihpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eSh0b09iamVjdChpdCksIGtleSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxudmFyIGlkID0gMDtcbnZhciBwb3N0Zml4ID0gTWF0aC5yYW5kb20oKTtcbnZhciB0b1N0cmluZyA9IHVuY3VycnlUaGlzKDEuMC50b1N0cmluZyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnICsgKGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXkpICsgJylfJyArIHRvU3RyaW5nKCsraWQgKyBwb3N0Zml4LCAzNik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3ltYm9sLWNvbnN0cnVjdG9yLWRldGVjdGlvbicpO1xudmFyIFVTRV9TWU1CT0xfQVNfVUlEID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkJyk7XG5cbnZhciBTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyIFdlbGxLbm93blN5bWJvbHNTdG9yZSA9IHNoYXJlZCgnd2tzJyk7XG52YXIgY3JlYXRlV2VsbEtub3duU3ltYm9sID0gVVNFX1NZTUJPTF9BU19VSUQgPyBTeW1ib2xbJ2ZvciddIHx8IFN5bWJvbCA6IFN5bWJvbCAmJiBTeW1ib2wud2l0aG91dFNldHRlciB8fCB1aWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgaWYgKCFoYXNPd24oV2VsbEtub3duU3ltYm9sc1N0b3JlLCBuYW1lKSkge1xuICAgIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXSA9IE5BVElWRV9TWU1CT0wgJiYgaGFzT3duKFN5bWJvbCwgbmFtZSlcbiAgICAgID8gU3ltYm9sW25hbWVdXG4gICAgICA6IGNyZWF0ZVdlbGxLbm93blN5bWJvbCgnU3ltYm9sLicgKyBuYW1lKTtcbiAgfSByZXR1cm4gV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciBvcmRpbmFyeVRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZScpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbnZhciBUT19QUklNSVRJVkUgPSB3ZWxsS25vd25TeW1ib2woJ3RvUHJpbWl0aXZlJyk7XG5cbi8vIGBUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJpbWl0aXZlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnB1dCwgcHJlZikge1xuICBpZiAoIWlzT2JqZWN0KGlucHV0KSB8fCBpc1N5bWJvbChpbnB1dCkpIHJldHVybiBpbnB1dDtcbiAgdmFyIGV4b3RpY1RvUHJpbSA9IGdldE1ldGhvZChpbnB1dCwgVE9fUFJJTUlUSVZFKTtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKGV4b3RpY1RvUHJpbSkge1xuICAgIGlmIChwcmVmID09PSB1bmRlZmluZWQpIHByZWYgPSAnZGVmYXVsdCc7XG4gICAgcmVzdWx0ID0gY2FsbChleG90aWNUb1ByaW0sIGlucHV0LCBwcmVmKTtcbiAgICBpZiAoIWlzT2JqZWN0KHJlc3VsdCkgfHwgaXNTeW1ib2wocmVzdWx0KSkgcmV0dXJuIHJlc3VsdDtcbiAgICB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbiAgfVxuICBpZiAocHJlZiA9PT0gdW5kZWZpbmVkKSBwcmVmID0gJ251bWJlcic7XG4gIHJldHVybiBvcmRpbmFyeVRvUHJpbWl0aXZlKGlucHV0LCBwcmVmKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xudmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXN5bWJvbCcpO1xuXG4vLyBgVG9Qcm9wZXJ0eUtleWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJvcGVydHlrZXlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBrZXkgPSB0b1ByaW1pdGl2ZShhcmd1bWVudCwgJ3N0cmluZycpO1xuICByZXR1cm4gaXNTeW1ib2woa2V5KSA/IGtleSA6IGtleSArICcnO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgZG9jdW1lbnQgPSBnbG9iYWwuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBFWElTVFMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBFWElTVFMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcblxuLy8gVGhhbmtzIHRvIElFOCBmb3IgaXRzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3JlYXRlRWxlbWVudCgnZGl2JyksICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfVxuICB9KS5hICE9PSA3O1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0luZGV4ZWRPYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhc093bihPLCBQKSkgcmV0dXJuIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcighY2FsbChwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZS5mLCBPLCBQKSwgT1tQXSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbi8vIFY4IH4gQ2hyb21lIDM2LVxuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzMzNFxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0sICdwcm90b3R5cGUnLCB7XG4gICAgdmFsdWU6IDQyLFxuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KS5wcm90b3R5cGUgIT09IDQyO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgJFN0cmluZyA9IFN0cmluZztcbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgQXNzZXJ0OiBUeXBlKGFyZ3VtZW50KSBpcyBPYmplY3RgXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoaXNPYmplY3QoYXJndW1lbnQpKSByZXR1cm4gYXJndW1lbnQ7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKCRTdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgYW4gb2JqZWN0Jyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG52YXIgVjhfUFJPVE9UWVBFX0RFRklORV9CVUcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdjgtcHJvdG90eXBlLWRlZmluZS1idWcnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleScpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBFTlVNRVJBQkxFID0gJ2VudW1lcmFibGUnO1xudmFyIENPTkZJR1VSQUJMRSA9ICdjb25maWd1cmFibGUnO1xudmFyIFdSSVRBQkxFID0gJ3dyaXRhYmxlJztcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0eWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0eVxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgPyBWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA/IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKHR5cGVvZiBPID09PSAnZnVuY3Rpb24nICYmIFAgPT09ICdwcm90b3R5cGUnICYmICd2YWx1ZScgaW4gQXR0cmlidXRlcyAmJiBXUklUQUJMRSBpbiBBdHRyaWJ1dGVzICYmICFBdHRyaWJ1dGVzW1dSSVRBQkxFXSkge1xuICAgIHZhciBjdXJyZW50ID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKTtcbiAgICBpZiAoY3VycmVudCAmJiBjdXJyZW50W1dSSVRBQkxFXSkge1xuICAgICAgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gICAgICBBdHRyaWJ1dGVzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IENPTkZJR1VSQUJMRSBpbiBBdHRyaWJ1dGVzID8gQXR0cmlidXRlc1tDT05GSUdVUkFCTEVdIDogY3VycmVudFtDT05GSUdVUkFCTEVdLFxuICAgICAgICBlbnVtZXJhYmxlOiBFTlVNRVJBQkxFIGluIEF0dHJpYnV0ZXMgPyBBdHRyaWJ1dGVzW0VOVU1FUkFCTEVdIDogY3VycmVudFtFTlVNRVJBQkxFXSxcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlXG4gICAgICB9O1xuICAgIH1cbiAgfSByZXR1cm4gJGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xufSA6ICRkZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiAkZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIGtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0RGVzY3JpcHRvciA9IERFU0NSSVBUT1JTICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbnZhciBFWElTVFMgPSBoYXNPd24oRnVuY3Rpb25Qcm90b3R5cGUsICduYW1lJyk7XG4vLyBhZGRpdGlvbmFsIHByb3RlY3Rpb24gZnJvbSBtaW5pZmllZCAvIG1hbmdsZWQgLyBkcm9wcGVkIGZ1bmN0aW9uIG5hbWVzXG52YXIgUFJPUEVSID0gRVhJU1RTICYmIChmdW5jdGlvbiBzb21ldGhpbmcoKSB7IC8qIGVtcHR5ICovIH0pLm5hbWUgPT09ICdzb21ldGhpbmcnO1xudmFyIENPTkZJR1VSQUJMRSA9IEVYSVNUUyAmJiAoIURFU0NSSVBUT1JTIHx8IChERVNDUklQVE9SUyAmJiBnZXREZXNjcmlwdG9yKEZ1bmN0aW9uUHJvdG90eXBlLCAnbmFtZScpLmNvbmZpZ3VyYWJsZSkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgRVhJU1RTOiBFWElTVFMsXG4gIFBST1BFUjogUFJPUEVSLFxuICBDT05GSUdVUkFCTEU6IENPTkZJR1VSQUJMRVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHN0b3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xuXG52YXIgZnVuY3Rpb25Ub1N0cmluZyA9IHVuY3VycnlUaGlzKEZ1bmN0aW9uLnRvU3RyaW5nKTtcblxuLy8gdGhpcyBoZWxwZXIgYnJva2VuIGluIGBjb3JlLWpzQDMuNC4xLTMuNC40YCwgc28gd2UgY2FuJ3QgdXNlIGBzaGFyZWRgIGhlbHBlclxuaWYgKCFpc0NhbGxhYmxlKHN0b3JlLmluc3BlY3RTb3VyY2UpKSB7XG4gIHN0b3JlLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb25Ub1N0cmluZyhpdCk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RvcmUuaW5zcGVjdFNvdXJjZTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIFdlYWtNYXAgPSBnbG9iYWwuV2Vha01hcDtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0NhbGxhYmxlKFdlYWtNYXApICYmIC9uYXRpdmUgY29kZS8udGVzdChTdHJpbmcoV2Vha01hcCkpO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xuXG52YXIga2V5cyA9IHNoYXJlZCgna2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIGtleXNba2V5XSB8fCAoa2V5c1trZXldID0gdWlkKGtleSkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfV0VBS19NQVAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2Vhay1tYXAtYmFzaWMtZGV0ZWN0aW9uJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcbnZhciBzaGFyZWRLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLWtleScpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcblxudmFyIE9CSkVDVF9BTFJFQURZX0lOSVRJQUxJWkVEID0gJ09iamVjdCBhbHJlYWR5IGluaXRpYWxpemVkJztcbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xudmFyIFdlYWtNYXAgPSBnbG9iYWwuV2Vha01hcDtcbnZhciBzZXQsIGdldCwgaGFzO1xuXG52YXIgZW5mb3JjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaGFzKGl0KSA/IGdldChpdCkgOiBzZXQoaXQsIHt9KTtcbn07XG5cbnZhciBnZXR0ZXJGb3IgPSBmdW5jdGlvbiAoVFlQRSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGl0KSB7XG4gICAgdmFyIHN0YXRlO1xuICAgIGlmICghaXNPYmplY3QoaXQpIHx8IChzdGF0ZSA9IGdldChpdCkpLnR5cGUgIT09IFRZUEUpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0luY29tcGF0aWJsZSByZWNlaXZlciwgJyArIFRZUEUgKyAnIHJlcXVpcmVkJyk7XG4gICAgfSByZXR1cm4gc3RhdGU7XG4gIH07XG59O1xuXG5pZiAoTkFUSVZFX1dFQUtfTUFQIHx8IHNoYXJlZC5zdGF0ZSkge1xuICB2YXIgc3RvcmUgPSBzaGFyZWQuc3RhdGUgfHwgKHNoYXJlZC5zdGF0ZSA9IG5ldyBXZWFrTWFwKCkpO1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1zZWxmLWFzc2lnbiAtLSBwcm90b3R5cGUgbWV0aG9kcyBwcm90ZWN0aW9uICovXG4gIHN0b3JlLmdldCA9IHN0b3JlLmdldDtcbiAgc3RvcmUuaGFzID0gc3RvcmUuaGFzO1xuICBzdG9yZS5zZXQgPSBzdG9yZS5zZXQ7XG4gIC8qIGVzbGludC1lbmFibGUgbm8tc2VsZi1hc3NpZ24gLS0gcHJvdG90eXBlIG1ldGhvZHMgcHJvdGVjdGlvbiAqL1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgaWYgKHN0b3JlLmhhcyhpdCkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIHN0b3JlLnNldChpdCwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHN0b3JlLmdldChpdCkgfHwge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBzdG9yZS5oYXMoaXQpO1xuICB9O1xufSBlbHNlIHtcbiAgdmFyIFNUQVRFID0gc2hhcmVkS2V5KCdzdGF0ZScpO1xuICBoaWRkZW5LZXlzW1NUQVRFXSA9IHRydWU7XG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICBpZiAoaGFzT3duKGl0LCBTVEFURSkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShpdCwgU1RBVEUsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBoYXNPd24oaXQsIFNUQVRFKSA/IGl0W1NUQVRFXSA6IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaGFzT3duKGl0LCBTVEFURSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldCxcbiAgZ2V0OiBnZXQsXG4gIGhhczogaGFzLFxuICBlbmZvcmNlOiBlbmZvcmNlLFxuICBnZXR0ZXJGb3I6IGdldHRlckZvclxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIENPTkZJR1VSQUJMRV9GVU5DVElPTl9OQU1FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLW5hbWUnKS5DT05GSUdVUkFCTEU7XG52YXIgaW5zcGVjdFNvdXJjZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnNwZWN0LXNvdXJjZScpO1xudmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUnKTtcblxudmFyIGVuZm9yY2VJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5lbmZvcmNlO1xudmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldDtcbnZhciAkU3RyaW5nID0gU3RyaW5nO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG52YXIgcmVwbGFjZSA9IHVuY3VycnlUaGlzKCcnLnJlcGxhY2UpO1xudmFyIGpvaW4gPSB1bmN1cnJ5VGhpcyhbXS5qb2luKTtcblxudmFyIENPTkZJR1VSQUJMRV9MRU5HVEggPSBERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHkoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9LCAnbGVuZ3RoJywgeyB2YWx1ZTogOCB9KS5sZW5ndGggIT09IDg7XG59KTtcblxudmFyIFRFTVBMQVRFID0gU3RyaW5nKFN0cmluZykuc3BsaXQoJ1N0cmluZycpO1xuXG52YXIgbWFrZUJ1aWx0SW4gPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSwgbmFtZSwgb3B0aW9ucykge1xuICBpZiAoc3RyaW5nU2xpY2UoJFN0cmluZyhuYW1lKSwgMCwgNykgPT09ICdTeW1ib2woJykge1xuICAgIG5hbWUgPSAnWycgKyByZXBsYWNlKCRTdHJpbmcobmFtZSksIC9eU3ltYm9sXFwoKFteKV0qKVxcKS4qJC8sICckMScpICsgJ10nO1xuICB9XG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZ2V0dGVyKSBuYW1lID0gJ2dldCAnICsgbmFtZTtcbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5zZXR0ZXIpIG5hbWUgPSAnc2V0ICcgKyBuYW1lO1xuICBpZiAoIWhhc093bih2YWx1ZSwgJ25hbWUnKSB8fCAoQ09ORklHVVJBQkxFX0ZVTkNUSU9OX05BTUUgJiYgdmFsdWUubmFtZSAhPT0gbmFtZSkpIHtcbiAgICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5KHZhbHVlLCAnbmFtZScsIHsgdmFsdWU6IG5hbWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KTtcbiAgICBlbHNlIHZhbHVlLm5hbWUgPSBuYW1lO1xuICB9XG4gIGlmIChDT05GSUdVUkFCTEVfTEVOR1RIICYmIG9wdGlvbnMgJiYgaGFzT3duKG9wdGlvbnMsICdhcml0eScpICYmIHZhbHVlLmxlbmd0aCAhPT0gb3B0aW9ucy5hcml0eSkge1xuICAgIGRlZmluZVByb3BlcnR5KHZhbHVlLCAnbGVuZ3RoJywgeyB2YWx1ZTogb3B0aW9ucy5hcml0eSB9KTtcbiAgfVxuICB0cnkge1xuICAgIGlmIChvcHRpb25zICYmIGhhc093bihvcHRpb25zLCAnY29uc3RydWN0b3InKSAmJiBvcHRpb25zLmNvbnN0cnVjdG9yKSB7XG4gICAgICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5KHZhbHVlLCAncHJvdG90eXBlJywgeyB3cml0YWJsZTogZmFsc2UgfSk7XG4gICAgLy8gaW4gVjggfiBDaHJvbWUgNTMsIHByb3RvdHlwZXMgb2Ygc29tZSBtZXRob2RzLCBsaWtlIGBBcnJheS5wcm90b3R5cGUudmFsdWVzYCwgYXJlIG5vbi13cml0YWJsZVxuICAgIH0gZWxzZSBpZiAodmFsdWUucHJvdG90eXBlKSB2YWx1ZS5wcm90b3R5cGUgPSB1bmRlZmluZWQ7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgdmFyIHN0YXRlID0gZW5mb3JjZUludGVybmFsU3RhdGUodmFsdWUpO1xuICBpZiAoIWhhc093bihzdGF0ZSwgJ3NvdXJjZScpKSB7XG4gICAgc3RhdGUuc291cmNlID0gam9pbihURU1QTEFURSwgdHlwZW9mIG5hbWUgPT0gJ3N0cmluZycgPyBuYW1lIDogJycpO1xuICB9IHJldHVybiB2YWx1ZTtcbn07XG5cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWV4dGVuZC1uYXRpdmUgLS0gcmVxdWlyZWRcbkZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZyA9IG1ha2VCdWlsdEluKGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gaXNDYWxsYWJsZSh0aGlzKSAmJiBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpLnNvdXJjZSB8fCBpbnNwZWN0U291cmNlKHRoaXMpO1xufSwgJ3RvU3RyaW5nJyk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgbWFrZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWFrZS1idWlsdC1pbicpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywga2V5LCB2YWx1ZSwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcbiAgdmFyIHNpbXBsZSA9IG9wdGlvbnMuZW51bWVyYWJsZTtcbiAgdmFyIG5hbWUgPSBvcHRpb25zLm5hbWUgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubmFtZSA6IGtleTtcbiAgaWYgKGlzQ2FsbGFibGUodmFsdWUpKSBtYWtlQnVpbHRJbih2YWx1ZSwgbmFtZSwgb3B0aW9ucyk7XG4gIGlmIChvcHRpb25zLmdsb2JhbCkge1xuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2UgZGVmaW5lR2xvYmFsUHJvcGVydHkoa2V5LCB2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghb3B0aW9ucy51bnNhZmUpIGRlbGV0ZSBPW2tleV07XG4gICAgICBlbHNlIGlmIChPW2tleV0pIHNpbXBsZSA9IHRydWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2UgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihPLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiAhb3B0aW9ucy5ub25Db25maWd1cmFibGUsXG4gICAgICB3cml0YWJsZTogIW9wdGlvbnMubm9uV3JpdGFibGVcbiAgICB9KTtcbiAgfSByZXR1cm4gTztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuXG4vLyBgTWF0aC50cnVuY2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW1hdGgudHJ1bmNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1tYXRoLXRydW5jIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gTWF0aC50cnVuYyB8fCBmdW5jdGlvbiB0cnVuYyh4KSB7XG4gIHZhciBuID0gK3g7XG4gIHJldHVybiAobiA+IDAgPyBmbG9vciA6IGNlaWwpKG4pO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdHJ1bmMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWF0aC10cnVuYycpO1xuXG4vLyBgVG9JbnRlZ2VyT3JJbmZpbml0eWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvaW50ZWdlcm9yaW5maW5pdHlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBudW1iZXIgPSArYXJndW1lbnQ7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gIHJldHVybiBudW1iZXIgIT09IG51bWJlciB8fCBudW1iZXIgPT09IDAgPyAwIDogdHJ1bmMobnVtYmVyKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xuXG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5cbi8vIEhlbHBlciBmb3IgYSBwb3B1bGFyIHJlcGVhdGluZyBjYXNlIG9mIHRoZSBzcGVjOlxuLy8gTGV0IGludGVnZXIgYmUgPyBUb0ludGVnZXIoaW5kZXgpLlxuLy8gSWYgaW50ZWdlciA8IDAsIGxldCByZXN1bHQgYmUgbWF4KChsZW5ndGggKyBpbnRlZ2VyKSwgMCk7IGVsc2UgbGV0IHJlc3VsdCBiZSBtaW4oaW50ZWdlciwgbGVuZ3RoKS5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgdmFyIGludGVnZXIgPSB0b0ludGVnZXJPckluZmluaXR5KGluZGV4KTtcbiAgcmV0dXJuIGludGVnZXIgPCAwID8gbWF4KGludGVnZXIgKyBsZW5ndGgsIDApIDogbWluKGludGVnZXIsIGxlbmd0aCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHknKTtcblxudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBgVG9MZW5ndGhgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b2xlbmd0aFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIGxlbiA9IHRvSW50ZWdlck9ySW5maW5pdHkoYXJndW1lbnQpO1xuICByZXR1cm4gbGVuID4gMCA/IG1pbihsZW4sIDB4MUZGRkZGRkZGRkZGRkYpIDogMDsgLy8gMiAqKiA1MyAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG5cbi8vIGBMZW5ndGhPZkFycmF5TGlrZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWxlbmd0aG9mYXJyYXlsaWtlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHRvTGVuZ3RoKG9iai5sZW5ndGgpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS57IGluZGV4T2YsIGluY2x1ZGVzIH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gbGVuZ3RoT2ZBcnJheUxpa2UoTyk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9PSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICAgICAgaWYgKHZhbHVlICE9PSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgaWYgKChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSAmJiBPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcbiAgaW5jbHVkZXM6IGNyZWF0ZU1ldGhvZCh0cnVlKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5pbmRleE9mYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5kZXhvZlxuICBpbmRleE9mOiBjcmVhdGVNZXRob2QoZmFsc2UpXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIGluZGV4T2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMnKS5pbmRleE9mO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcblxudmFyIHB1c2ggPSB1bmN1cnJ5VGhpcyhbXS5wdXNoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgIWhhc093bihoaWRkZW5LZXlzLCBrZXkpICYmIGhhc093bihPLCBrZXkpICYmIHB1c2gocmVzdWx0LCBrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzT3duKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHB1c2gocmVzdWx0LCBrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIElFOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSBbXG4gICdjb25zdHJ1Y3RvcicsXG4gICdoYXNPd25Qcm9wZXJ0eScsXG4gICdpc1Byb3RvdHlwZU9mJyxcbiAgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJyxcbiAgJ3RvTG9jYWxlU3RyaW5nJyxcbiAgJ3RvU3RyaW5nJyxcbiAgJ3ZhbHVlT2YnXG5dO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpbnRlcm5hbE9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG5cbnZhciBoaWRkZW5LZXlzID0gZW51bUJ1Z0tleXMuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eW5hbWVzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5bmFtZXMgLS0gc2FmZVxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHJldHVybiBpbnRlcm5hbE9iamVjdEtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlzeW1ib2xzIC0tIHNhZmVcbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcycpO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG5cbnZhciBjb25jYXQgPSB1bmN1cnJ5VGhpcyhbXS5jb25jYXQpO1xuXG4vLyBhbGwgb2JqZWN0IGtleXMsIGluY2x1ZGVzIG5vbi1lbnVtZXJhYmxlIGFuZCBzeW1ib2xzXG5tb2R1bGUuZXhwb3J0cyA9IGdldEJ1aWx0SW4oJ1JlZmxlY3QnLCAnb3duS2V5cycpIHx8IGZ1bmN0aW9uIG93bktleXMoaXQpIHtcbiAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlLmYoYW5PYmplY3QoaXQpKTtcbiAgdmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZS5mO1xuICByZXR1cm4gZ2V0T3duUHJvcGVydHlTeW1ib2xzID8gY29uY2F0KGtleXMsIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkpIDoga2V5cztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgb3duS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vd24ta2V5cycpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSwgZXhjZXB0aW9ucykge1xuICB2YXIga2V5cyA9IG93bktleXMoc291cmNlKTtcbiAgdmFyIGRlZmluZVByb3BlcnR5ID0gZGVmaW5lUHJvcGVydHlNb2R1bGUuZjtcbiAgdmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZS5mO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICBpZiAoIWhhc093bih0YXJnZXQsIGtleSkgJiYgIShleGNlcHRpb25zICYmIGhhc093bihleGNlcHRpb25zLCBrZXkpKSkge1xuICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgIH1cbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbnZhciByZXBsYWNlbWVudCA9IC8jfFxcLnByb3RvdHlwZVxcLi87XG5cbnZhciBpc0ZvcmNlZCA9IGZ1bmN0aW9uIChmZWF0dXJlLCBkZXRlY3Rpb24pIHtcbiAgdmFyIHZhbHVlID0gZGF0YVtub3JtYWxpemUoZmVhdHVyZSldO1xuICByZXR1cm4gdmFsdWUgPT09IFBPTFlGSUxMID8gdHJ1ZVxuICAgIDogdmFsdWUgPT09IE5BVElWRSA/IGZhbHNlXG4gICAgOiBpc0NhbGxhYmxlKGRldGVjdGlvbikgPyBmYWlscyhkZXRlY3Rpb24pXG4gICAgOiAhIWRldGVjdGlvbjtcbn07XG5cbnZhciBub3JtYWxpemUgPSBpc0ZvcmNlZC5ub3JtYWxpemUgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gIHJldHVybiBTdHJpbmcoc3RyaW5nKS5yZXBsYWNlKHJlcGxhY2VtZW50LCAnLicpLnRvTG93ZXJDYXNlKCk7XG59O1xuXG52YXIgZGF0YSA9IGlzRm9yY2VkLmRhdGEgPSB7fTtcbnZhciBOQVRJVkUgPSBpc0ZvcmNlZC5OQVRJVkUgPSAnTic7XG52YXIgUE9MWUZJTEwgPSBpc0ZvcmNlZC5QT0xZRklMTCA9ICdQJztcblxubW9kdWxlLmV4cG9ydHMgPSBpc0ZvcmNlZDtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJykuZjtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgZGVmaW5lQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4nKTtcbnZhciBkZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5Jyk7XG52YXIgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jb3B5LWNvbnN0cnVjdG9yLXByb3BlcnRpZXMnKTtcbnZhciBpc0ZvcmNlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1mb3JjZWQnKTtcblxuLypcbiAgb3B0aW9ucy50YXJnZXQgICAgICAgICAtIG5hbWUgb2YgdGhlIHRhcmdldCBvYmplY3RcbiAgb3B0aW9ucy5nbG9iYWwgICAgICAgICAtIHRhcmdldCBpcyB0aGUgZ2xvYmFsIG9iamVjdFxuICBvcHRpb25zLnN0YXQgICAgICAgICAgIC0gZXhwb3J0IGFzIHN0YXRpYyBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnByb3RvICAgICAgICAgIC0gZXhwb3J0IGFzIHByb3RvdHlwZSBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnJlYWwgICAgICAgICAgIC0gcmVhbCBwcm90b3R5cGUgbWV0aG9kIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy5mb3JjZWQgICAgICAgICAtIGV4cG9ydCBldmVuIGlmIHRoZSBuYXRpdmUgZmVhdHVyZSBpcyBhdmFpbGFibGVcbiAgb3B0aW9ucy5iaW5kICAgICAgICAgICAtIGJpbmQgbWV0aG9kcyB0byB0aGUgdGFyZ2V0LCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMud3JhcCAgICAgICAgICAgLSB3cmFwIGNvbnN0cnVjdG9ycyB0byBwcmV2ZW50aW5nIGdsb2JhbCBwb2xsdXRpb24sIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy51bnNhZmUgICAgICAgICAtIHVzZSB0aGUgc2ltcGxlIGFzc2lnbm1lbnQgb2YgcHJvcGVydHkgaW5zdGVhZCBvZiBkZWxldGUgKyBkZWZpbmVQcm9wZXJ0eVxuICBvcHRpb25zLnNoYW0gICAgICAgICAgIC0gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuICBvcHRpb25zLmVudW1lcmFibGUgICAgIC0gZXhwb3J0IGFzIGVudW1lcmFibGUgcHJvcGVydHlcbiAgb3B0aW9ucy5kb250Q2FsbEdldFNldCAtIHByZXZlbnQgY2FsbGluZyBhIGdldHRlciBvbiB0YXJnZXRcbiAgb3B0aW9ucy5uYW1lICAgICAgICAgICAtIHRoZSAubmFtZSBvZiB0aGUgZnVuY3Rpb24gaWYgaXQgZG9lcyBub3QgbWF0Y2ggdGhlIGtleVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9wdGlvbnMsIHNvdXJjZSkge1xuICB2YXIgVEFSR0VUID0gb3B0aW9ucy50YXJnZXQ7XG4gIHZhciBHTE9CQUwgPSBvcHRpb25zLmdsb2JhbDtcbiAgdmFyIFNUQVRJQyA9IG9wdGlvbnMuc3RhdDtcbiAgdmFyIEZPUkNFRCwgdGFyZ2V0LCBrZXksIHRhcmdldFByb3BlcnR5LCBzb3VyY2VQcm9wZXJ0eSwgZGVzY3JpcHRvcjtcbiAgaWYgKEdMT0JBTCkge1xuICAgIHRhcmdldCA9IGdsb2JhbDtcbiAgfSBlbHNlIGlmIChTVEFUSUMpIHtcbiAgICB0YXJnZXQgPSBnbG9iYWxbVEFSR0VUXSB8fCBkZWZpbmVHbG9iYWxQcm9wZXJ0eShUQVJHRVQsIHt9KTtcbiAgfSBlbHNlIHtcbiAgICB0YXJnZXQgPSBnbG9iYWxbVEFSR0VUXSAmJiBnbG9iYWxbVEFSR0VUXS5wcm90b3R5cGU7XG4gIH1cbiAgaWYgKHRhcmdldCkgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgc291cmNlUHJvcGVydHkgPSBzb3VyY2Vba2V5XTtcbiAgICBpZiAob3B0aW9ucy5kb250Q2FsbEdldFNldCkge1xuICAgICAgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSk7XG4gICAgICB0YXJnZXRQcm9wZXJ0eSA9IGRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci52YWx1ZTtcbiAgICB9IGVsc2UgdGFyZ2V0UHJvcGVydHkgPSB0YXJnZXRba2V5XTtcbiAgICBGT1JDRUQgPSBpc0ZvcmNlZChHTE9CQUwgPyBrZXkgOiBUQVJHRVQgKyAoU1RBVElDID8gJy4nIDogJyMnKSArIGtleSwgb3B0aW9ucy5mb3JjZWQpO1xuICAgIC8vIGNvbnRhaW5lZCBpbiB0YXJnZXRcbiAgICBpZiAoIUZPUkNFRCAmJiB0YXJnZXRQcm9wZXJ0eSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodHlwZW9mIHNvdXJjZVByb3BlcnR5ID09IHR5cGVvZiB0YXJnZXRQcm9wZXJ0eSkgY29udGludWU7XG4gICAgICBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzKHNvdXJjZVByb3BlcnR5LCB0YXJnZXRQcm9wZXJ0eSk7XG4gICAgfVxuICAgIC8vIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgICBpZiAob3B0aW9ucy5zaGFtIHx8ICh0YXJnZXRQcm9wZXJ0eSAmJiB0YXJnZXRQcm9wZXJ0eS5zaGFtKSkge1xuICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KHNvdXJjZVByb3BlcnR5LCAnc2hhbScsIHRydWUpO1xuICAgIH1cbiAgICBkZWZpbmVCdWlsdEluKHRhcmdldCwga2V5LCBzb3VyY2VQcm9wZXJ0eSwgb3B0aW9ucyk7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcblxuLy8gYElzQXJyYXlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc2FycmF5XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktaXNhcnJheSAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmd1bWVudCkge1xuICByZXR1cm4gY2xhc3NvZihhcmd1bWVudCkgPT09ICdBcnJheSc7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gU2FmYXJpIDwgMTMgZG9lcyBub3QgdGhyb3cgYW4gZXJyb3IgaW4gdGhpcyBjYXNlXG52YXIgU0lMRU5UX09OX05PTl9XUklUQUJMRV9MRU5HVEhfU0VUID0gREVTQ1JJUFRPUlMgJiYgIWZ1bmN0aW9uICgpIHtcbiAgLy8gbWFrZXMgbm8gc2Vuc2Ugd2l0aG91dCBwcm9wZXIgc3RyaWN0IG1vZGUgc3VwcG9ydFxuICBpZiAodGhpcyAhPT0gdW5kZWZpbmVkKSByZXR1cm4gdHJ1ZTtcbiAgdHJ5IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoW10sICdsZW5ndGgnLCB7IHdyaXRhYmxlOiBmYWxzZSB9KS5sZW5ndGggPSAxO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBlcnJvciBpbnN0YW5jZW9mIFR5cGVFcnJvcjtcbiAgfVxufSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNJTEVOVF9PTl9OT05fV1JJVEFCTEVfTEVOR1RIX1NFVCA/IGZ1bmN0aW9uIChPLCBsZW5ndGgpIHtcbiAgaWYgKGlzQXJyYXkoTykgJiYgIWdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCAnbGVuZ3RoJykud3JpdGFibGUpIHtcbiAgICB0aHJvdyBuZXcgJFR5cGVFcnJvcignQ2Fubm90IHNldCByZWFkIG9ubHkgLmxlbmd0aCcpO1xuICB9IHJldHVybiBPLmxlbmd0aCA9IGxlbmd0aDtcbn0gOiBmdW5jdGlvbiAoTywgbGVuZ3RoKSB7XG4gIHJldHVybiBPLmxlbmd0aCA9IGxlbmd0aDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDB4MUZGRkZGRkZGRkZGRkY7IC8vIDIgKiogNTMgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID4gTUFYX1NBRkVfSU5URUdFUikgdGhyb3cgJFR5cGVFcnJvcignTWF4aW11bSBhbGxvd2VkIGluZGV4IGV4Y2VlZGVkJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcbnZhciBzZXRBcnJheUxlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zZXQtbGVuZ3RoJyk7XG52YXIgZG9lc05vdEV4Y2VlZFNhZmVJbnRlZ2VyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvZXMtbm90LWV4Y2VlZC1zYWZlLWludGVnZXInKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG52YXIgSU5DT1JSRUNUX1RPX0xFTkdUSCA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIFtdLnB1c2guY2FsbCh7IGxlbmd0aDogMHgxMDAwMDAwMDAgfSwgMSkgIT09IDQyOTQ5NjcyOTc7XG59KTtcblxuLy8gVjggPD0gMTIxIGFuZCBTYWZhcmkgPD0gMTUuNDsgRkYgPCAyMyB0aHJvd3MgSW50ZXJuYWxFcnJvclxuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MTI2ODFcbnZhciBwcm9wZXJFcnJvck9uTm9uV3JpdGFibGVMZW5ndGggPSBmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFtdLCAnbGVuZ3RoJywgeyB3cml0YWJsZTogZmFsc2UgfSkucHVzaCgpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBlcnJvciBpbnN0YW5jZW9mIFR5cGVFcnJvcjtcbiAgfVxufTtcblxudmFyIEZPUkNFRCA9IElOQ09SUkVDVF9UT19MRU5HVEggfHwgIXByb3BlckVycm9yT25Ob25Xcml0YWJsZUxlbmd0aCgpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnB1c2hgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUucHVzaFxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGFyaXR5OiAxLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFycyAtLSByZXF1aXJlZCBmb3IgYC5sZW5ndGhgXG4gIHB1c2g6IGZ1bmN0aW9uIHB1c2goaXRlbSkge1xuICAgIHZhciBPID0gdG9PYmplY3QodGhpcyk7XG4gICAgdmFyIGxlbiA9IGxlbmd0aE9mQXJyYXlMaWtlKE8pO1xuICAgIHZhciBhcmdDb3VudCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgZG9lc05vdEV4Y2VlZFNhZmVJbnRlZ2VyKGxlbiArIGFyZ0NvdW50KTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ0NvdW50OyBpKyspIHtcbiAgICAgIE9bbGVuXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgIGxlbisrO1xuICAgIH1cbiAgICBzZXRBcnJheUxlbmd0aChPLCBsZW4pO1xuICAgIHJldHVybiBsZW47XG4gIH1cbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0cnlUb1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90cnktdG8tc3RyaW5nJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBQKSB7XG4gIGlmICghZGVsZXRlIE9bUF0pIHRocm93IG5ldyAkVHlwZUVycm9yKCdDYW5ub3QgZGVsZXRlIHByb3BlcnR5ICcgKyB0cnlUb1N0cmluZyhQKSArICcgb2YgJyArIHRyeVRvU3RyaW5nKE8pKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcbnZhciBzZXRBcnJheUxlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zZXQtbGVuZ3RoJyk7XG52YXIgZGVsZXRlUHJvcGVydHlPclRocm93ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlbGV0ZS1wcm9wZXJ0eS1vci10aHJvdycpO1xudmFyIGRvZXNOb3RFeGNlZWRTYWZlSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2VzLW5vdC1leGNlZWQtc2FmZS1pbnRlZ2VyJyk7XG5cbi8vIElFOC1cbnZhciBJTkNPUlJFQ1RfUkVTVUxUID0gW10udW5zaGlmdCgwKSAhPT0gMTtcblxuLy8gVjggfiBDaHJvbWUgPCA3MSBhbmQgU2FmYXJpIDw9IDE1LjQsIEZGIDwgMjMgdGhyb3dzIEludGVybmFsRXJyb3JcbnZhciBwcm9wZXJFcnJvck9uTm9uV3JpdGFibGVMZW5ndGggPSBmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFtdLCAnbGVuZ3RoJywgeyB3cml0YWJsZTogZmFsc2UgfSkudW5zaGlmdCgpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBlcnJvciBpbnN0YW5jZW9mIFR5cGVFcnJvcjtcbiAgfVxufTtcblxudmFyIEZPUkNFRCA9IElOQ09SUkVDVF9SRVNVTFQgfHwgIXByb3BlckVycm9yT25Ob25Xcml0YWJsZUxlbmd0aCgpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnVuc2hpZnRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUudW5zaGlmdFxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGFyaXR5OiAxLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFycyAtLSByZXF1aXJlZCBmb3IgYC5sZW5ndGhgXG4gIHVuc2hpZnQ6IGZ1bmN0aW9uIHVuc2hpZnQoaXRlbSkge1xuICAgIHZhciBPID0gdG9PYmplY3QodGhpcyk7XG4gICAgdmFyIGxlbiA9IGxlbmd0aE9mQXJyYXlMaWtlKE8pO1xuICAgIHZhciBhcmdDb3VudCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgaWYgKGFyZ0NvdW50KSB7XG4gICAgICBkb2VzTm90RXhjZWVkU2FmZUludGVnZXIobGVuICsgYXJnQ291bnQpO1xuICAgICAgdmFyIGsgPSBsZW47XG4gICAgICB3aGlsZSAoay0tKSB7XG4gICAgICAgIHZhciB0byA9IGsgKyBhcmdDb3VudDtcbiAgICAgICAgaWYgKGsgaW4gTykgT1t0b10gPSBPW2tdO1xuICAgICAgICBlbHNlIGRlbGV0ZVByb3BlcnR5T3JUaHJvdyhPLCB0byk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGFyZ0NvdW50OyBqKyspIHtcbiAgICAgICAgT1tqXSA9IGFyZ3VtZW50c1tqXTtcbiAgICAgIH1cbiAgICB9IHJldHVybiBzZXRBcnJheUxlbmd0aChPLCBsZW4gKyBhcmdDb3VudCk7XG4gIH1cbn0pO1xuIiwgImNvbnN0IFdHX0FDVElPTjogTWVkaWFXaWtpQ29uZmlnTWFwV2dBY3Rpb24gPSBtdy5jb25maWcuZ2V0KCd3Z0FjdGlvbicpO1xuXG5leHBvcnQge1dHX0FDVElPTn07XG4iLCAiY29uc3QgY2ZnID0ge1xuXHQvKiBDYXRlZ29yaWVzIHdoZXJlIGRpc2FtYmlndWF0aW9uIHBhZ2VzIGFyZSBhZGRlZCAodXN1YWxseSBieSBhIHRlbXBsYXRlIGxpa2Uge3tEaXNhbWJpZ3VhdGlvbn19ICovXG5cdGRpc2FtQ2F0ZWdvcmllczogWyflhajpg6jmtojmrafkuYnpobXpnaInXSxcblx0LyogXCJDYW5vbmljYWwgbmFtZXNcIiBvZiB0aGUgdGVtcGxhdGVzIHRoYXQgbWF5IGFwcGVhciBhZnRlciBhbWJpZ3VvdXMgbGlua3MgYW5kIHdoaWNoIHNob3VsZCBiZSByZW1vdmVkIHdoZW4gZml4aW5nIHRob3NlIGxpbmtzICovXG5cdGRpc2FtTGlua1RlbXBsYXRlczogW1xuXHRcdCdEaXNhbWJpZ3VhdGlvbiBuZWVkZWQnLFxuXHRcdCdBbWJpZ3VvdXMgbGluaycsXG5cdFx0J0FtYmxpbmsnLFxuXHRcdCdEYWIgbmVlZGVkJyxcblx0XHQnRGlzYW1iLWxpbmsnLFxuXHRcdCdEaXNhbWJpZyBuZWVkZWQnLFxuXHRcdCdEaXNhbWJpZ3VhdGUnLFxuXHRcdCdEbicsXG5cdFx0J05lZWRkYWInLFxuXHRdLFxuXHQvKiBcIkNhbm9uaWNhbCBuYW1lc1wiIG9mIHRoZSB0ZW1wbGF0ZXMgdGhhdCBkZXNpZ25hdGUgaW50ZW50aW9uYWwgbGlua3MgdG8gZGlzYW1iaWd1YXRpb24gcGFnZXMgKi9cblx0ZGlzYW1MaW5rSWdub3JlVGVtcGxhdGVzOiBbJ1IgZnJvbSBhbWJpZ3VvdXMgcGFnZScsICdSIHRvIGRpc2FtYmlndWF0aW9uIHBhZ2UnLCAnUiBmcm9tIGluY29tcGxldGUgZGlzYW1iaWd1YXRpb24nXSxcblx0LyogRm9ybWF0IHN0cmluZyBmb3IgXCJGb28gKGRpc2FtYmlndWF0aW9uKVwiLXN0eWxlIHBhZ2VzICovXG5cdGRpc2FtRm9ybWF0OiAnJDHvvIjmtojmrafkuYnvvIknLFxuXHQvKiBSZWd1bGFyIGV4cHJlc3Npb24gbWF0Y2hpbmcgdGhlIHRpdGxlcyBvZiBkaXNhbWJpZ3VhdGlvbiBwYWdlcyAod2hlbiB0aGV5IGFyZSBkaWZmZXJlbnQgZnJvbSB0aGUgdGl0bGVzIG9mIHRoZSBwcmltYXJ5IHRvcGljcykgKi9cblx0ZGlzYW1SZWdFeHA6ICdeKC4qKe+8iCjmtojmrafkuYl85raI5q2n576pKe+8iSQnLFxuXHQvKiBUZXh0IHRoYXQgd2lsbCBiZSBpbnNlcnRlZCBhZnRlciB0aGUgbGluayBpZiB0aGUgdXNlciByZXF1ZXN0cyBoZWxwLiBJZiB0aGUgdmFsdWUgaXMgbnVsbCwgdGhlIG9wdGlvbiB0byByZXF1ZXN0IGhlbHAgd29uJ3QgYmUgb2ZmZXJlZCAqL1xuXHRkaXNhbU5lZWRlZFRleHQ6ICd7e2RufGRhdGU9e3snLmNvbmNhdCgnc3Vic3Q6JywgJ0NVUlJFTlRNT05USE5BTUUnLCAnfX0ge3snLCAnc3Vic3Q6JywgJ0NVUlJFTlRZRUFSfX19fScpLFxuXHQvKiBDb250ZW50IG9mIHRoZSBcIkZvbyAoZGlzYW1iaWd1YXRpb24pXCIgcGFnZXMgdGhhdCB3aWxsIGJlIGNyZWF0ZWQgYXV0b21hdGljYWxseSB3aGVuIHVzaW5nIERpc2FtQXNzaXN0IGZyb20gYSBcIkZvb1wiIHBhZ2UgKi9cblx0cmVkaXJlY3RUb0Rpc2FtOiAnI+mHjeWumuWQkSBbWyQxXV0nLmNvbmNhdCgne3tSIHRvIGRpc2FtYmlndWF0aW9uIHBhZ2V9fScpLFxuXHQvKiBXaGV0aGVyIGludGVudGlvbmFsIGxpbmtzIHRvIGRpc2FtYmlndWF0aW9uIHBhZ2VzIGNhbiBiZSBleHBsaWNpdGx5IG1hcmtlZCBieSBhZGRpbmcgXCIgKGRpc2FtYmlndWF0aW9uKVwiICovXG5cdGludGVudGlvbmFsTGlua09wdGlvbjogZmFsc2UsXG5cdC8qIE5hbWVzcGFjZXMgdGhhdCB3aWxsIGJlIHNlYXJjaGVkIGZvciBpbmNvbWluZyBsaW5rcyB0byB0aGUgZGlzYW1iaWd1YXRpb24gcGFnZSAocGFnZXMgaW4gb3RoZXIgbmFtZXNwYWNlcyB3aWxsIGJlIGlnbm9yZWQpICovXG5cdHRhcmdldE5hbWVzcGFjZXM6IFs2LCAxMCwgMTQsIDExOCwgMF0sXG5cdC8qIE51bWJlciBvZiBiYWNrbGlua3MgdGhhdCB3aWxsIGJlIGRvd25sb2FkZWQgYXQgb25jZSBXaGVuIHVzaW5nIGJscmVkaXJlY3QsIHRoZSBtYXhpbXVtIGxpbWl0IGlzIHN1cHBvc2VkbHkgaGFsdmVkIChzZWUgaHR0cDovL3d3dy5tZWRpYXdpa2kub3JnL3dpa2kvQVBJOkJhY2tsaW5rcykgKi9cblx0YmFja2xpbmtMaW1pdDogMjUwLFxuXHQvKiBOdW1iZXIgb2YgdGl0bGVzIHdlIGNhbiBxdWVyeSBmb3IgYXQgb25jZSAqL1xuXHRxdWVyeVRpdGxlTGltaXQ6IDUwLFxuXHQvKiBOdW1iZXIgb2YgY2hhcmFjdGVycyBiZWZvcmUgYW5kIGFmdGVyIHRoZSBpbmNvbWluZyBsaW5rIHRoYXQgd2lsbCBiZSBkaXNwbGF5ZWQgKi9cblx0cmFkaXVzOiAzMDAsXG5cdC8qIEhlaWdodCBvZiB0aGUgY29udGV4dCBib3gsIGluIGxpbmVzICovXG5cdG51bUNvbnRleHRMaW5lczogNCxcblx0LyogTnVtYmVyIG9mIHBhZ2VzIHRoYXQgd2lsbCBiZSBzdG9yZWQgYmVmb3JlIHNhdmluZywgc28gdGhhdCBjaGFuZ2VzIHRvIHRoZW0gY2FuIGJlIHVuZG9uZSBpZiBuZWVkIGJlICovXG5cdGhpc3RvcnlTaXplOiAyLFxuXHQvKiBNaW5pbXVtIHRpbWUgaW4gc2Vjb25kcyBzaW5jZSB0aGUgbGFzdCBjaGFuZ2Ugd2FzIHNhdmVkIGJlZm9yZSBhIG5ldyBlZGl0IGNhbiBiZSBtYWRlLiBBIG5lZ2F0aXZlIHZhbHVlIG9yIDAgZGlzYWJsZXMgdGhlIGNvb2xkb3duLiBVc2VycyB3aXRoIHRoZSBcImJvdFwiIHJpZ2h0IHdvbid0IGJlIGFmZmVjdGVkIGJ5IHRoZSBjb29sZG93biAqL1xuXHRlZGl0Q29vbGRvd246IDAsXG5cdC8qIFNwZWNpZnkgaG93IHRoZSB3YXRjaGxpc3QgaXMgYWZmZWN0ZWQgYnkgRGlzYW1Bc3Npc3QgZWRpdHMuIFBvc3NpYmxlIHZhbHVlczogXCJ3YXRjaFwiLCBcInVud2F0Y2hcIiwgXCJwcmVmZXJlbmNlc1wiLCBcIm5vY2hhbmdlXCIgKi9cblx0d2F0Y2g6ICdub2NoYW5nZScsXG59O1xuXG5leHBvcnQge2NmZ307XG4iLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCB7V0dfQUNUSU9OfSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCB7Y2ZnfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7dHh0fSBmcm9tICcuL21lc3NhZ2VzJztcblxuY29uc3QgYXBpID0gaW5pdE13QXBpKCdEaXNhbUFzc2lzdC8xLjEnKTtcblxubGV0IHN0YXJ0TGluaztcbmxldCB1aTtcbmxldCBsaW5rcztcbmxldCBwYWdlQ2hhbmdlcztcbmxldCBjdXJyZW50UGFnZVRpdGxlO1xubGV0IGN1cnJlbnRQYWdlUGFyYW1ldGVycztcbmxldCBjdXJyZW50TGluaztcbmxldCBwb3NzaWJsZUJhY2tsaW5rRGVzdGluYXRpb25zO1xubGV0IGZvcmNlU2FtZVBhZ2UgPSBmYWxzZTtcbmxldCBydW5uaW5nID0gZmFsc2U7XG5sZXQgY2hvb3NpbmcgPSBmYWxzZTtcbmxldCBjYW5NYXJrSW50ZW50aW9uYWxMaW5rcyA9IGZhbHNlO1xubGV0IGRpc3BsYXllZFBhZ2VzID0ge307XG5sZXQgZWRpdENvdW50ID0gMDtcbmxldCBlZGl0TGltaXQ7XG5jb25zdCBwZW5kaW5nU2F2ZXMgPSBbXTtcbmxldCBwZW5kaW5nRWRpdEJveDtcbmxldCBwZW5kaW5nRWRpdEJveFRleHQ7XG5sZXQgbGFzdEVkaXRNaWxsaXMgPSAwO1xubGV0IHJ1bm5pbmdTYXZlcyA9IGZhbHNlO1xuXG4vKiBFbnRyeSBwb2ludC4gQ2hlY2sgd2hldGhlciB3ZSBhcmUgaW4gYSBkaXNhbWJpZ3VhdGlvbiBwYWdlLiBJZiBzbywgYWRkIGEgbGluayB0byBzdGFydCB0aGUgdG9vbCAqL1xuZXhwb3J0IGNvbnN0IGluc3RhbGwgPSAoKSA9PiB7XG5cdGlmIChXR19BQ1RJT04gIT09ICd2aWV3JyB8fCAhaXNEaXNhbSgpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdCQoKCkgPT4ge1xuXHRcdGNvbnN0IHBvcnRsZXRJZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwLWNhY3Rpb25zJykgPyAncC1jYWN0aW9ucycgOiAncC10Yic7XG5cdFx0Ly8gVGhpcyBpcyBhIFwiIChkaXNhbWJpZ3VhdGlvbilcIiBwYWdlXG5cdFx0aWYgKG5ldyBSZWdFeHAoY2ZnLmRpc2FtUmVnRXhwKS50ZXN0KGdldFRpdGxlKCkpKSB7XG5cdFx0XHRjb25zdCBzdGFydE1haW5MaW5rID0gJChtdy51dGlsLmFkZFBvcnRsZXRMaW5rKHBvcnRsZXRJZCwgJyMnLCB0eHQuc3RhcnRNYWluLCAnY2EtZGlzYW1hc3Npc3QtbWFpbicpKS5vbihcblx0XHRcdFx0J2NsaWNrJyxcblx0XHRcdFx0c3RhcnRNYWluXG5cdFx0XHQpO1xuXHRcdFx0Y29uc3Qgc3RhcnRTYW1lTGluayA9ICQobXcudXRpbC5hZGRQb3J0bGV0TGluayhwb3J0bGV0SWQsICcjJywgdHh0LnN0YXJ0U2FtZSwgJ2NhLWRpc2FtYXNzaXN0LXNhbWUnKSkub24oXG5cdFx0XHRcdCdjbGljaycsXG5cdFx0XHRcdHN0YXJ0U2FtZVxuXHRcdFx0KTtcblx0XHRcdHN0YXJ0TGluayA9IHN0YXJ0TWFpbkxpbmsuYWRkKHN0YXJ0U2FtZUxpbmspO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdGFydExpbmsgPSAkKG13LnV0aWwuYWRkUG9ydGxldExpbmsocG9ydGxldElkLCAnIycsIHR4dC5zdGFydCwgJ2NhLWRpc2FtYXNzaXN0LXBhZ2UnKSkub24oJ2NsaWNrJywgc3RhcnQpO1xuXHRcdH1cblx0fSk7XG59O1xuXG4vKiBTdGFydCB0aGUgdG9vbC4gRGlzcGxheSB0aGUgVUkgYW5kIGJlZ2luIGxvb2tpbmcgZm9yIGxpbmtzIHRvIGZpeCAqL1xuY29uc3Qgc3RhcnQgPSAoKSA9PiB7XG5cdGlmIChydW5uaW5nKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0cnVubmluZyA9IHRydWU7XG5cdGxpbmtzID0gW107XG5cdHBhZ2VDaGFuZ2VzID0gW107XG5cdGRpc3BsYXllZFBhZ2VzID0ge307XG5cdGVuc3VyZURBQkV4aXN0cygpLnRoZW4oKGNhbk1hcmspID0+IHtcblx0XHRjYW5NYXJrSW50ZW50aW9uYWxMaW5rcyA9IGNhbk1hcms7XG5cdFx0Y3JlYXRlVUkoKTtcblx0XHRhZGRVbmxvYWRDb25maXJtKCk7XG5cdFx0bWFya0Rpc2FtT3B0aW9ucygpO1xuXHRcdGNoZWNrRWRpdExpbWl0KCkudGhlbigoKSA9PiB7XG5cdFx0XHR0b2dnbGVQZW5kaW5nRWRpdEJveChmYWxzZSk7XG5cdFx0XHRkb1BhZ2UoKTtcblx0XHR9KTtcblx0fSk7XG59O1xuXG4vKiBTdGFydCBEaXNhbUFzc2lzdC4gRGlzYW1iaWd1YXRlIGluY29taW5nIGxpbmtzIHRvIHRoZSBjdXJyZW50IHBhZ2UsIHJlZ2FyZGxlc3Mgb2YgdGhlIHRpdGxlLiAqL1xuY29uc3Qgc3RhcnRTYW1lID0gKCkgPT4ge1xuXHRmb3JjZVNhbWVQYWdlID0gdHJ1ZTtcblx0c3RhcnQoKTtcbn07XG5cbi8qIFN0YXJ0IERpc2FtQXNzaXN0LiBJZiB0aGUgcGFnZSB0aXRsZSBlbmRzIHdpdGggXCIgKGRpc2FtYmlndWF0aW9uKVwiLCBkaXNhbWJpZ3VhdGUgbGlua3MgdG8gdGhlIHByaW1hcnkgdG9waWMgYXJ0aWNsZS4gT3RoZXJ3aXNlLCBkaXNhbWJpZ3VhdGUgbGlua3MgdG8gdGhlIGN1cnJlbnQgcGFnZS4gKi9cbmNvbnN0IHN0YXJ0TWFpbiA9ICgpID0+IHtcblx0Zm9yY2VTYW1lUGFnZSA9IGZhbHNlO1xuXHRzdGFydCgpO1xufTtcblxuLyogQ3JlYXRlIGFuZCBzaG93IHRoZSB1c2VyIGludGVyZmFjZS4gKi9cbmNvbnN0IGNyZWF0ZVVJID0gKCkgPT4ge1xuXHRjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblx0dWkgPSB7XG5cdFx0ZGlzcGxheTogJCgnPGRpdj4nKS5hZGRDbGFzcygnZGlzYW1hc3Npc3QtYm94IGRpc2FtYXNzaXN0LW1haW5ib3gnKSxcblx0XHRmaW5pc2hlZE1lc3NhZ2U6ICQoJzxkaXY+JykudGV4dCh0eHQubm9Nb3JlTGlua3MpLmhpZGUoKSxcblx0XHRwYWdlVGl0bGVMaW5lOiAkKCc8c3Bhbj4nKS5hZGRDbGFzcygnZGlzYW1hc3Npc3QtcGFnZXRpdGxlbGluZScpLFxuXHRcdHBlbmRpbmdFZGl0Q291bnRlcjogJCgnPGRpdj4nKS5hZGRDbGFzcygnZGlzYW1hc3Npc3QtZWRpdGNvdW50ZXInKSxcblx0XHRjb250ZXh0OiAkKCc8c3Bhbj4nKS5hZGRDbGFzcygnZGlzYW1hc3Npc3QtY29udGV4dCcpLFxuXHRcdHVuZG9CdXR0b246IGNyZWF0ZUJ1dHRvbih0eHQudW5kbywgdW5kbyksXG5cdFx0b21pdEJ1dHRvbjogY3JlYXRlQnV0dG9uKHR4dC5vbWl0LCBvbWl0KSxcblx0XHRlbmRCdXR0b246IGNyZWF0ZUJ1dHRvbih0eHQuY2xvc2UsIHNhdmVBbmRFbmQpLFxuXHRcdHJlZnJlc2hCdXR0b246IGNyZWF0ZUJ1dHRvbih0eHQucmVmcmVzaCwgcmVmcmVzaCksXG5cdFx0dGl0bGVBc1RleHRCdXR0b246IGNyZWF0ZUJ1dHRvbih0eHQudGl0bGVBc1RleHQsIGNob29zZVRpdGxlRnJvbVByb21wdCksXG5cdFx0aW50ZW50aW9uYWxMaW5rQnV0dG9uOiBjYW5NYXJrSW50ZW50aW9uYWxMaW5rc1xuXHRcdFx0PyBjcmVhdGVCdXR0b24odHh0LmludGVudGlvbmFsTGluaywgY2hvb3NlSW50ZW50aW9uYWxMaW5rKVxuXHRcdFx0OiAkKCc8c3Bhbj4nKSxcblx0XHRkaXNhbU5lZWRlZEJ1dHRvbjogY2ZnLmRpc2FtTmVlZGVkVGV4dCA/IGNyZWF0ZUJ1dHRvbih0eHQuZGlzYW1OZWVkZWQsIGNob29zZURpc2FtTmVlZGVkKSA6ICQoJzxzcGFuPicpLFxuXHRcdHJlbW92ZUxpbmtCdXR0b246IGNyZWF0ZUJ1dHRvbih0eHQucmVtb3ZlTGluaywgY2hvb3NlTGlua1JlbW92YWwpLFxuXHR9O1xuXHRjb25zdCB0b3AgPSAkKCc8ZGl2PicpXG5cdFx0LmFkZENsYXNzKCdkaXNhbWFzc2lzdC10b3AnKVxuXHRcdC5hcHBlbmQoW3VpLnBlbmRpbmdFZGl0Q291bnRlciwgdWkuZmluaXNoZWRNZXNzYWdlLCB1aS5wYWdlVGl0bGVMaW5lXSk7XG5cdGNvbnN0IGxlZnRCdXR0b25zID0gJCgnPGRpdj4nKVxuXHRcdC5hZGRDbGFzcygnZGlzYW1hc3Npc3QtbGVmdGJ1dHRvbnMnKVxuXHRcdC5hcHBlbmQoW1xuXHRcdFx0dWkudGl0bGVBc1RleHRCdXR0b24sXG5cdFx0XHR1aS5yZW1vdmVMaW5rQnV0dG9uLFxuXHRcdFx0dWkuaW50ZW50aW9uYWxMaW5rQnV0dG9uLFxuXHRcdFx0dWkuZGlzYW1OZWVkZWRCdXR0b24sXG5cdFx0XHR1aS5vbWl0QnV0dG9uLFxuXHRcdF0pO1xuXHRjb25zdCByaWdodEJ1dHRvbnMgPSAkKCc8ZGl2PicpXG5cdFx0LmFkZENsYXNzKCdkaXNhbWFzc2lzdC1yaWdodGJ1dHRvbnMnKVxuXHRcdC5hcHBlbmQoW3VpLnVuZG9CdXR0b24sIHVpLnJlZnJlc2hCdXR0b24sIHVpLmVuZEJ1dHRvbl0pO1xuXHRjb25zdCBhbGxCdXR0b25zID0gJCgnPGRpdj4nKS5hZGRDbGFzcygnZGlzYW1hc3Npc3QtYWxsYnV0dG9ucycpLmFwcGVuZChbbGVmdEJ1dHRvbnMsIHJpZ2h0QnV0dG9uc10pO1xuXHR1aS5kaXNwbGF5LmFwcGVuZChbdG9wLCB1aS5jb250ZXh0LCBhbGxCdXR0b25zXSk7XG5cdHVwZGF0ZUVkaXRDb3VudGVyKCk7XG5cdHRvZ2dsZUFjdGlvbkJ1dHRvbnMoZmFsc2UpO1xuXHQvLyBJbnNlcnQgdGhlIFVJIGluIHRoZSBwYWdlXG5cdCRib2R5LmZpbmQoJyNtdy1jb250ZW50LXRleHQnKS5iZWZvcmUodWkuZGlzcGxheSk7XG5cdHVpLmRpc3BsYXkuaGlkZSgpLmZhZGVJbigpO1xufTtcblxuLyogSWYgdGhlcmUgYXJlIHBlbmRpbmcgY2hhbmdlcywgc2hvdyBhIGNvbmZpcm0gZGlhbG9nIGJlZm9yZSBjbG9zaW5nICovXG5jb25zdCBhZGRVbmxvYWRDb25maXJtID0gKCkgPT4ge1xuXHQkKHdpbmRvdykub24oJ2JlZm9yZXVubG9hZCcsICgpID0+IHtcblx0XHRpZiAocnVubmluZyAmJiBjaGVja0FjdHVhbENoYW5nZXMoKSkge1xuXHRcdFx0cmV0dXJuIHR4dC5wZW5kaW5nO1xuXHRcdH0gZWxzZSBpZiAoZWRpdENvdW50ICE9PSAwKSB7XG5cdFx0XHRyZXR1cm4gdHh0LmVkaXRJblByb2dyZXNzO1xuXHRcdH1cblx0fSk7XG59O1xuXG4vKiBNYXJrIHRoZSBkaXNhbWJpZ3VhdGlvbiBvcHRpb25zIGFzIHN1Y2ggKi9cbmNvbnN0IG1hcmtEaXNhbU9wdGlvbnMgPSAoKSA9PiB7XG5cdGNvbnN0IG9wdGlvblBhZ2VUaXRsZXMgPSBbXTtcblx0Y29uc3Qgb3B0aW9uTWFya2VycyA9IFtdO1xuXHRnZXREaXNhbU9wdGlvbnMoKS5lYWNoKChfaW5kZXgsIGVsZW1lbnQpID0+IHtcblx0XHRjb25zdCBsaW5rID0gJChlbGVtZW50KTtcblx0XHRjb25zdCB0aXRsZSA9IGV4dHJhY3RQYWdlTmFtZShsaW5rKTtcblx0XHRjb25zdCBvcHRpb25NYXJrZXIgPSAkKCc8YT4nKVxuXHRcdFx0LmF0dHIoJ2hyZWYnLCAnIycpXG5cdFx0XHQuYWRkQ2xhc3MoJ2Rpc2FtYXNzaXN0LW9wdGlvbm1hcmtlcicpXG5cdFx0XHQudGV4dCh0eHQub3B0aW9uTWFya2VyKVxuXHRcdFx0Lm9uKCdjbGljaycsIChldikgPT4ge1xuXHRcdFx0XHRldi5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRjaG9vc2VSZXBsYWNlbWVudCh0aXRsZSk7XG5cdFx0XHR9KTtcblx0XHRsaW5rLmFmdGVyKG9wdGlvbk1hcmtlcik7XG5cdFx0b3B0aW9uTWFya2Vycy5wdXNoKG9wdGlvbk1hcmtlcik7XG5cdFx0b3B0aW9uUGFnZVRpdGxlcy5wdXNoKHRpdGxlKTtcblx0fSk7XG5cdC8vIE5vdyBjaGVjayB0aGUgZGlzYW1iaWd1YXRpb24gb3B0aW9ucyBhbmQgZGlzcGxheSBhIGRpZmZlcmVudCBtZXNzYWdlIGZvciB0aG9zZSB0aGF0IGFyZVxuXHQvLyBhY3R1YWxseSB0aGUgc2FtZSBhcyB0aGUgdGFyZ2V0IHBhZ2Ugd2hlcmUgdGhlIGxpbmtzIGdvLCBhcyBjaG9vc2luZyB0aG9zZSBvcHRpb25zIGRvZXNuJ3QgcmVhbGx5XG5cdC8vIGFjY29tcGxpc2ggYW55dGhpbmcgKGV4Y2VwdCBieXBhc3NpbmcgcmVkaXJlY3RzLCB3aGljaCBtaWdodCBiZSB1c2VmdWwgaW4gc29tZSBjYXNlcylcblx0Y29uc3QgdGFyZ2V0UGFnZSA9IGdldFRhcmdldFBhZ2UoKTtcblx0ZmV0Y2hSZWRpcmVjdHMoWy4uLm9wdGlvblBhZ2VUaXRsZXMsIC4uLnRhcmdldFBhZ2VdKVxuXHRcdC5kb25lKChyZWRpcmVjdHMpID0+IHtcblx0XHRcdGNvbnN0IGVuZFRhcmdldFBhZ2UgPSByZXNvbHZlUmVkaXJlY3QodGFyZ2V0UGFnZSwgcmVkaXJlY3RzKTtcblx0XHRcdGZvciAoY29uc3QgW2lpLCBvcHRpb25QYWdlVGl0bGVdIG9mIG9wdGlvblBhZ2VUaXRsZXMuZW50cmllcygpKSB7XG5cdFx0XHRcdGNvbnN0IGVuZE9wdGlvblRpdGxlID0gcmVzb2x2ZVJlZGlyZWN0KG9wdGlvblBhZ2VUaXRsZSwgcmVkaXJlY3RzKTtcblx0XHRcdFx0aWYgKGlzU2FtZVBhZ2Uob3B0aW9uUGFnZVRpdGxlLCB0YXJnZXRQYWdlKSkge1xuXHRcdFx0XHRcdG9wdGlvbk1hcmtlcnNbaWldLnRleHQodHh0LnRhcmdldE9wdGlvbk1hcmtlcikuYWRkQ2xhc3MoJ2Rpc2FtYXNzaXN0LWN1cnJvcHRpb25tYXJrZXInKTtcblx0XHRcdFx0fSBlbHNlIGlmIChpc1NhbWVQYWdlKGVuZE9wdGlvblRpdGxlLCBlbmRUYXJnZXRQYWdlKSkge1xuXHRcdFx0XHRcdG9wdGlvbk1hcmtlcnNbaWldLnRleHQodHh0LnJlZGlyZWN0T3B0aW9uTWFya2VyKS5hZGRDbGFzcygnZGlzYW1hc3Npc3QtY3Vycm9wdGlvbm1hcmtlcicpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSlcblx0XHQuZmFpbChlcnJvcik7XG59O1xuXG4vKiBDaGVjayB3aGV0aGVyIGludGVudGlvbmFsIGxpbmtzIHRvIGRpc2FtYmlndWF0aW9uIHBhZ2VzIGNhbiBiZSBleHBsaWNpdGx5IG1hcmtlZC8qICogYXMgc3VjaCBpbiB0aGlzIHdpa2kuIElmIHNvLCBlbnN1cmUgdGhhdCBhIFwiRm9vIChkaXNhbWJpZ3VhdGlvbilcIiBwYWdlIGV4aXN0cy4vKiAqIFJldHVybnMgYSBqUXVlcnkgcHJvbWlzZSAqL1xuY29uc3QgZW5zdXJlREFCRXhpc3RzID0gKCkgPT4ge1xuXHRjb25zdCBkZWZlcnJlZCA9IG5ldyAkLkRlZmVycmVkKCk7XG5cdGNvbnN0IHRpdGxlID0gZ2V0VGl0bGUoKTtcblx0Ly8gVGhhdCBjb25jZXB0IGRvZXNuJ3QgZXhpc3QgaW4gdGhpcyB3aWtpLlxuXHRpZiAoIWNmZy5pbnRlbnRpb25hbExpbmtPcHRpb24pIHtcblx0XHRkZWZlcnJlZC5yZXNvbHZlKGZhbHNlKTtcblx0XHQvLyBcIkZvbyAoZGlzYW1iaWd1YXRpb24pXCIgZXhpc3RzOiBpdCdzIHRoZSBjdXJyZW50IHBhZ2UuXG5cdH0gZWxzZSBpZiAobmV3IFJlZ0V4cChjZmcuZGlzYW1SZWdFeHApLmV4ZWModGl0bGUpKSB7XG5cdFx0ZGVmZXJyZWQucmVzb2x2ZSh0cnVlKTtcblx0fSBlbHNlIHtcblx0XHRjb25zdCBkaXNhbVRpdGxlID0gY2ZnLmRpc2FtRm9ybWF0LnJlcGxhY2UoJyQxJywgdGl0bGUpO1xuXHRcdGxvYWRQYWdlKGRpc2FtVGl0bGUpXG5cdFx0XHQuZG9uZSgocGFnZSkgPT4ge1xuXHRcdFx0XHQvLyBcIkZvbyAoZGlzYW1iaWd1YXRpb24pXCIgZG9lc24ndCBleGlzdC5cblx0XHRcdFx0aWYgKHBhZ2UubWlzc2luZykge1xuXHRcdFx0XHRcdC8vIFdlIHRyeSB0byBjcmVhdGUgaXRcblx0XHRcdFx0XHRwYWdlLmNvbnRlbnQgPSBjZmcucmVkaXJlY3RUb0Rpc2FtLnJlcGxhY2UoJyQxJywgdGl0bGUpO1xuXHRcdFx0XHRcdGNvbnN0IHN1bW1hcnkgPSB0eHQucmVkaXJlY3RTdW1tYXJ5LnJlcGxhY2UoJyQxJywgdGl0bGUpO1xuXHRcdFx0XHRcdHNhdmVQYWdlKGRpc2FtVGl0bGUsIHBhZ2UsIHN1bW1hcnksIGZhbHNlLCB0cnVlKVxuXHRcdFx0XHRcdFx0LmRvbmUoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKHRydWUpO1xuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdC5mYWlsKChkZXNjcmlwdGlvbikgPT4ge1xuXHRcdFx0XHRcdFx0XHRlcnJvcihkZXNjcmlwdGlvbik7XG5cdFx0XHRcdFx0XHRcdGRlZmVycmVkLnJlc29sdmUoZmFsc2UpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0Ly8gSXQgZG9lcyBleGlzdFxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGRlZmVycmVkLnJlc29sdmUodHJ1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0XHQuZmFpbCgoZGVzY3JpcHRpb24pID0+IHtcblx0XHRcdFx0ZXJyb3IoZGVzY3JpcHRpb24pO1xuXHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKGZhbHNlKTtcblx0XHRcdH0pO1xuXHR9XG5cdHJldHVybiBkZWZlcnJlZC5wcm9taXNlKCk7XG59O1xuXG4vKiBDaGVjayB3aGV0aGVyIHRoZSBlZGl0IGNvb2xkb3duIGFwcGxpZXMgYW5kIHNldHMgZWRpdExpbWl0IGFjY29yZGluZ2x5Li8qICogUmV0dXJucyBhIGpRdWVyeSBwcm9taXNlICovXG5jb25zdCBjaGVja0VkaXRMaW1pdCA9ICgpID0+IHtcblx0Y29uc3QgZGVmZXJyZWQgPSBuZXcgJC5EZWZlcnJlZCgpO1xuXHRpZiAoY2ZnLmVkaXRDb29sZG93biA8PSAwKSB7XG5cdFx0ZWRpdExpbWl0ID0gZmFsc2U7XG5cdFx0ZGVmZXJyZWQucmVzb2x2ZSgpO1xuXHR9IGVsc2Uge1xuXHRcdGZldGNoUmlnaHRzKClcblx0XHRcdC5kb25lKChyaWdodHMpID0+IHtcblx0XHRcdFx0ZWRpdExpbWl0ID0gIXJpZ2h0cy5pbmNsdWRlcygnYm90Jyk7XG5cdFx0XHR9KVxuXHRcdFx0LmZhaWwoKGRlc2NyaXB0aW9uKSA9PiB7XG5cdFx0XHRcdGVycm9yKGRlc2NyaXB0aW9uKTtcblx0XHRcdFx0ZWRpdExpbWl0ID0gdHJ1ZTtcblx0XHRcdH0pXG5cdFx0XHQuYWx3YXlzKCgpID0+IHtcblx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZSgpO1xuXHRcdFx0fSk7XG5cdH1cblx0cmV0dXJuIGRlZmVycmVkLnByb21pc2UoKTtcbn07XG5cbi8qIEZpbmQgYW5kIGFzayB0aGUgdXNlciB0byBmaXggYWxsIHRoZSBpbmNvbWluZyBsaW5rcyB0byB0aGUgZGlzYW1iaWd1YXRpb24gKFwidGFyZ2V0XCIpLyogKiBwYWdlIGZyb20gYSBzaW5nbGUgXCJvcmlnaW5cIiBwYWdlICovXG5jb25zdCBkb1BhZ2UgPSAoKSA9PiB7XG5cdGlmIChwYWdlQ2hhbmdlcy5sZW5ndGggPiBjZmcuaGlzdG9yeVNpemUpIHtcblx0XHRhcHBseUNoYW5nZShwYWdlQ2hhbmdlcy5zaGlmdCgpKTtcblx0fVxuXHRpZiAobGlua3MubGVuZ3RoKSB7XG5cdFx0Y3VycmVudFBhZ2VUaXRsZSA9IGxpbmtzLnNoaWZ0KCk7XG5cdFx0ZGlzcGxheWVkUGFnZXNbY3VycmVudFBhZ2VUaXRsZV0gPSB0cnVlO1xuXHRcdHRvZ2dsZUFjdGlvbkJ1dHRvbnMoZmFsc2UpO1xuXHRcdGxvYWRQYWdlKGN1cnJlbnRQYWdlVGl0bGUpXG5cdFx0XHQuZG9uZSgoZGF0YSkgPT4ge1xuXHRcdFx0XHRjdXJyZW50UGFnZVBhcmFtZXRlcnMgPSBkYXRhO1xuXHRcdFx0XHRjdXJyZW50TGluayA9IHVuZGVmaW5lZDtcblx0XHRcdFx0ZG9MaW5rKCk7XG5cdFx0XHR9KVxuXHRcdFx0LmZhaWwoZXJyb3IpO1xuXHR9IGVsc2Uge1xuXHRcdGNvbnN0IHRhcmdldFBhZ2UgPSBnZXRUYXJnZXRQYWdlKCk7XG5cdFx0Z2V0QmFja2xpbmtzKHRhcmdldFBhZ2UpXG5cdFx0XHQuZG9uZSgoYmFja2xpbmtzLCBwYWdlVGl0bGVzKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHBlbmRpbmcgPSB7fTtcblx0XHRcdFx0Zm9yIChjb25zdCBlbCBvZiBwZW5kaW5nU2F2ZXMpIHtcblx0XHRcdFx0XHRwZW5kaW5nW2VsWzBdXSA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0cG9zc2libGVCYWNrbGlua0Rlc3RpbmF0aW9ucyA9IHBhZ2VUaXRsZXMuZmlsdGVyKCh0KSA9PiB7XG5cdFx0XHRcdFx0aWYgKHQgPT09IHRhcmdldFBhZ2UpIHtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gcmVtb3ZlRGlzYW0odCkgIT09IHRhcmdldFBhZ2U7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHQvLyBPbmx5IGluY29taW5nIGxpbmtzIGZyb20gcGFnZXMgd2UgaGF2ZW4ndCBzZWVuIHlldCBhbmQgd2UgYXJlbid0IGN1cnJlbnRseVxuXHRcdFx0XHQvLyBzYXZpbmcgKGRpc3BsYXllZFBhZ2VzIGlzIHJlc2V0IHdoZW4gdGhlIHRvb2wgaXMgY2xvc2VkIGFuZCBvcGVuZWQgYWdhaW4sXG5cdFx0XHRcdC8vIHdoaWxlIHRoZSBsaXN0IG9mIHBlbmRpbmcgY2hhbmdlcyBpc24ndDsgaWYgdGhlIGVkaXQgY29vbGRvd24gaXMgZGlzYWJsZWQsXG5cdFx0XHRcdC8vIGl0IHdpbGwgYmUgZW1wdHkpXG5cdFx0XHRcdGxpbmtzID0gYmFja2xpbmtzLmZpbHRlcigoZWwpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gIWRpc3BsYXllZFBhZ2VzW2VsXSAmJiAhcGVuZGluZ1tlbF07XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRpZiAobGlua3MubGVuZ3RoKSB7XG5cdFx0XHRcdFx0ZG9QYWdlKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dXBkYXRlQ29udGV4dCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdFx0LmZhaWwoZXJyb3IpO1xuXHR9XG59O1xuXG4vKiBGaW5kIGFuZCBhc2sgdGhlIHVzZXIgdG8gZml4IGEgc2luZ2xlIGluY29taW5nIGxpbmsgdG8gdGhlIGRpc2FtYmlndWF0aW9uIChcInRhcmdldFwiKS8qICogcGFnZSAqL1xuY29uc3QgZG9MaW5rID0gKCkgPT4ge1xuXHRjdXJyZW50TGluayA9IGV4dHJhY3RMaW5rVG9QYWdlKFxuXHRcdGN1cnJlbnRQYWdlUGFyYW1ldGVycy5jb250ZW50LFxuXHRcdHBvc3NpYmxlQmFja2xpbmtEZXN0aW5hdGlvbnMsXG5cdFx0Y3VycmVudExpbmsgPyBjdXJyZW50TGluay5lbmQgOiAwXG5cdCk7XG5cdGlmIChjdXJyZW50TGluaykge1xuXHRcdHVwZGF0ZUNvbnRleHQoKTtcblx0fSBlbHNlIHtcblx0XHRkb1BhZ2UoKTtcblx0fVxufTtcblxuLyogUmVwbGFjZSB0aGUgdGFyZ2V0IG9mIGEgbGluayB3aXRoIGEgZGlmZmVyZW50IG9uZS8qICogcGFnZVRpdGxlOiBOZXcgbGluayB0YXJnZXQvKiAqIGV4dHJhOiBBZGRpdGlvbmFsIHRleHQgYWZ0ZXIgdGhlIGxpbmsgKG9wdGlvbmFsKS8qICogc3VtbWFyeTogQ2hhbmdlIHN1bW1hcnkgKG9wdGlvbmFsKSAqL1xuY29uc3QgY2hvb3NlUmVwbGFjZW1lbnQgPSAocGFnZVRpdGxlLCBleHRyYSwgc3VtbWFyeSkgPT4ge1xuXHRpZiAoY2hvb3NpbmcpIHtcblx0XHRjaG9vc2luZyA9IGZhbHNlO1xuXHRcdGlmICghc3VtbWFyeSkge1xuXHRcdFx0c3VtbWFyeSA9IHBhZ2VUaXRsZSA/IHR4dC5zdW1tYXJ5Q2hhbmdlZC5yZXBsYWNlKCckMScsIHBhZ2VUaXRsZSkgOiB0eHQuc3VtbWFyeU9taXR0ZWQ7XG5cdFx0fVxuXHRcdGFkZENoYW5nZShjdXJyZW50UGFnZVRpdGxlLCBjdXJyZW50UGFnZVBhcmFtZXRlcnMsIGN1cnJlbnRQYWdlUGFyYW1ldGVycy5jb250ZW50LCBjdXJyZW50TGluaywgc3VtbWFyeSk7XG5cdFx0aWYgKHBhZ2VUaXRsZSAmJiAocGFnZVRpdGxlICE9PSBnZXRUYXJnZXRQYWdlKCkgfHwgZXh0cmEpKSB7XG5cdFx0XHRjdXJyZW50UGFnZVBhcmFtZXRlcnMuY29udGVudCA9IHJlcGxhY2VMaW5rKFxuXHRcdFx0XHRjdXJyZW50UGFnZVBhcmFtZXRlcnMuY29udGVudCxcblx0XHRcdFx0cGFnZVRpdGxlLFxuXHRcdFx0XHRjdXJyZW50TGluayxcblx0XHRcdFx0ZXh0cmEgfHwgJydcblx0XHRcdCk7XG5cdFx0fVxuXHRcdGRvTGluaygpO1xuXHR9XG59O1xuXG4vKiBSZXBsYWNlIHRoZSBsaW5rIHdpdGggYW4gZXhwbGljaXQgbGluayB0byB0aGUgZGlzYW1iaWd1YXRpb24gcGFnZSAqL1xuY29uc3QgY2hvb3NlSW50ZW50aW9uYWxMaW5rID0gKCkgPT4ge1xuXHRjb25zdCBkaXNhbVRpdGxlID0gY2ZnLmRpc2FtRm9ybWF0LnJlcGxhY2UoJyQxJywgZ2V0VGFyZ2V0UGFnZSgpKTtcblx0Y2hvb3NlUmVwbGFjZW1lbnQoZGlzYW1UaXRsZSwgJycsIHR4dC5zdW1tYXJ5SW50ZW50aW9uYWwpO1xufTtcblxuLyogUHJvbXB0IGZvciBhbiBhbHRlcm5hdGl2ZSBsaW5rIHRhcmdldCBhbmQgdXNlIGl0IGFzIGEgcmVwbGFjZW1lbnQgKi9cbmNvbnN0IGNob29zZVRpdGxlRnJvbVByb21wdCA9ICgpID0+IHtcblx0Y29uc3QgdGl0bGUgPSBwcm9tcHQodHh0LnRpdGxlQXNUZXh0UHJvbXB0KTtcblx0aWYgKHRpdGxlICE9PSBudWxsKSB7XG5cdFx0Y2hvb3NlUmVwbGFjZW1lbnQodGl0bGUpO1xuXHR9XG59O1xuXG4vKiBSZW1vdmUgdGhlIGN1cnJlbnQgbGluaywgbGVhdmluZyB0aGUgdGV4dCB1bmNoYW5nZWQgKi9cbmNvbnN0IGNob29zZUxpbmtSZW1vdmFsID0gKCkgPT4ge1xuXHRpZiAoY2hvb3NpbmcpIHtcblx0XHRjb25zdCBzdW1tYXJ5ID0gdHh0LnN1bW1hcnlSZW1vdmVkO1xuXHRcdGFkZENoYW5nZShjdXJyZW50UGFnZVRpdGxlLCBjdXJyZW50UGFnZVBhcmFtZXRlcnMsIGN1cnJlbnRQYWdlUGFyYW1ldGVycy5jb250ZW50LCBjdXJyZW50TGluaywgc3VtbWFyeSk7XG5cdFx0Y3VycmVudFBhZ2VQYXJhbWV0ZXJzLmNvbnRlbnQgPSByZW1vdmVMaW5rKGN1cnJlbnRQYWdlUGFyYW1ldGVycy5jb250ZW50LCBjdXJyZW50TGluayk7XG5cdFx0ZG9MaW5rKCk7XG5cdH1cbn07XG5cbi8qIEFkZCBhIFwiZGlzYW1iaWd1YXRpb24gbmVlZGVkXCIgdGVtcGxhdGUgYWZ0ZXIgdGhlIGxpbmsgKi9cbmNvbnN0IGNob29zZURpc2FtTmVlZGVkID0gKCkgPT4ge1xuXHRjaG9vc2VSZXBsYWNlbWVudChjdXJyZW50TGluay50aXRsZSwgY2ZnLmRpc2FtTmVlZGVkVGV4dCwgdHh0LnN1bW1hcnlIZWxwTmVlZGVkKTtcbn07XG5cbi8qIFVuZG8gdGhlIGxhc3QgY2hhbmdlICovXG5jb25zdCB1bmRvID0gKCkgPT4ge1xuXHRpZiAocGFnZUNoYW5nZXMubGVuZ3RoKSB7XG5cdFx0Y29uc3QgbGFzdFBhZ2UgPSBwYWdlQ2hhbmdlcy5hdCgtMSk7XG5cdFx0aWYgKGN1cnJlbnRQYWdlVGl0bGUgIT09IGxhc3RQYWdlLnRpdGxlKSB7XG5cdFx0XHRsaW5rcy51bnNoaWZ0KGN1cnJlbnRQYWdlVGl0bGUpO1xuXHRcdFx0Y3VycmVudFBhZ2VUaXRsZSA9IGxhc3RQYWdlLnRpdGxlO1xuXHRcdH1cblx0XHRjdXJyZW50UGFnZVBhcmFtZXRlcnMgPSBsYXN0UGFnZS5wYWdlO1xuXHRcdGN1cnJlbnRQYWdlUGFyYW1ldGVycy5jb250ZW50ID0gbGFzdFBhZ2UuY29udGVudEJlZm9yZS5wb3AoKTtcblx0XHRjdXJyZW50TGluayA9IGxhc3RQYWdlLmxpbmtzLnBvcCgpO1xuXHRcdGxhc3RQYWdlLnN1bW1hcnkucG9wKCk7XG5cdFx0aWYgKCFsYXN0UGFnZS5jb250ZW50QmVmb3JlLmxlbmd0aCkge1xuXHRcdFx0cGFnZUNoYW5nZXMucG9wKCk7XG5cdFx0fVxuXHRcdHVwZGF0ZUNvbnRleHQoKTtcblx0fVxufTtcblxuLyogT21pdCB0aGUgY3VycmVudCBsaW5rIHdpdGhvdXQgbWFraW5nIGEgY2hhbmdlICovXG5jb25zdCBvbWl0ID0gKCkgPT4ge1xuXHRjaG9vc2VSZXBsYWNlbWVudCgpO1xufTtcblxuLyogU2F2ZSBhbGwgdGhlIHBlbmRpbmcgY2hhbmdlcyBhbmQgcmVzdGFydCB0aGUgdG9vbC4gKi9cbmNvbnN0IHJlZnJlc2ggPSAoKSA9PiB7XG5cdHNhdmVBbmRFbmQoKTtcblx0c3RhcnQoKTtcbn07XG5cbi8qIEVuYWJsZSBvciBkaXNhYmxlIHRoZSBidXR0b25zIHRoYXQgY2FuIHBlcmZvcm0gYWN0aW9ucyBvbiBhIHBhZ2Ugb3IgY2hhbmdlIHRoZSBjdXJyZW50IGxpbmsuLyogKiBlbmFibGVkOiBXaGV0aGVyIHRvIGVuYWJsZSBvciBkaXNhYmxlIHRoZSBidXR0b25zICovXG5jb25zdCB0b2dnbGVBY3Rpb25CdXR0b25zID0gKGVuYWJsZWQpID0+IHtcblx0Y29uc3QgYWZmZWN0ZWRCdXR0b25zID0gW1xuXHRcdHVpLm9taXRCdXR0b24sXG5cdFx0dWkudGl0bGVBc1RleHRCdXR0b24sXG5cdFx0dWkucmVtb3ZlTGlua0J1dHRvbixcblx0XHR1aS5pbnRlbnRpb25hbExpbmtCdXR0b24sXG5cdFx0dWkuZGlzYW1OZWVkZWRCdXR0b24sXG5cdFx0dWkudW5kb0J1dHRvbixcblx0XTtcblx0Zm9yIChjb25zdCBidXR0b24gb2YgYWZmZWN0ZWRCdXR0b25zKSB7XG5cdFx0YnV0dG9uLnByb3AoJ2Rpc2FibGVkJywgIWVuYWJsZWQpO1xuXHR9XG59O1xuXG4vKiBTaG93IG9yIGhpZGUgdGhlICdubyBtb3JlIGxpbmtzJyBtZXNzYWdlLyogKiBzaG93OiBXaGV0aGVyIHRvIHNob3cgb3IgaGlkZSB0aGUgbWVzc2FnZSAqL1xuY29uc3QgdG9nZ2xlRmluaXNoZWRNZXNzYWdlID0gKHNob3cpID0+IHtcblx0dG9nZ2xlQWN0aW9uQnV0dG9ucyghc2hvdyk7XG5cdHVpLnVuZG9CdXR0b24ucHJvcCgnZGlzYWJsZWQnLCAhcGFnZUNoYW5nZXMubGVuZ3RoKTtcblx0dWkuZmluaXNoZWRNZXNzYWdlLnRvZ2dsZShzaG93KTtcblx0dWkucGFnZVRpdGxlTGluZS50b2dnbGUoIXNob3cpO1xuXHR1aS5jb250ZXh0LnRvZ2dsZSghc2hvdyk7XG59O1xuXG5jb25zdCB0b2dnbGVQZW5kaW5nRWRpdEJveCA9IChzaG93KSA9PiB7XG5cdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRpZiAoIXBlbmRpbmdFZGl0Qm94KSB7XG5cdFx0cGVuZGluZ0VkaXRCb3ggPSAkKCc8ZGl2PicpLmFkZENsYXNzKCdkaXNhbWFzc2lzdC1ib3ggZGlzYW1hc3Npc3QtcGVuZGluZ2VkaXRib3gnKTtcblx0XHRwZW5kaW5nRWRpdEJveFRleHQgPSAkKCc8ZGl2PicpO1xuXHRcdHBlbmRpbmdFZGl0Qm94LmFwcGVuZChwZW5kaW5nRWRpdEJveFRleHQpLmhpZGUoKTtcblx0XHRpZiAoZWRpdExpbWl0KSB7XG5cdFx0XHRwZW5kaW5nRWRpdEJveC5hcHBlbmQoJCgnPGRpdj4nKS50ZXh0KHR4dC5wZW5kaW5nRWRpdEJveExpbWl0ZWQpLmFkZENsYXNzKCdkaXNhbWFzc2lzdC1zdWJ0aXRsZScpKTtcblx0XHR9XG5cdFx0JGJvZHkuZmluZCgnI213LWNvbnRlbnQtdGV4dCcpLmJlZm9yZShwZW5kaW5nRWRpdEJveCk7XG5cdFx0dXBkYXRlRWRpdENvdW50ZXIoKTtcblx0fVxuXHRpZiAoc2hvdykge1xuXHRcdHBlbmRpbmdFZGl0Qm94LmZhZGVJbigpO1xuXHR9IGVsc2Uge1xuXHRcdHBlbmRpbmdFZGl0Qm94LmZhZGVPdXQoKTtcblx0fVxufTtcblxuY29uc3Qgbm90aWZ5Q29tcGxldGlvbiA9ICgpID0+IHtcblx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdGNvbnN0IG9sZFRpdGxlID0gZG9jdW1lbnQudGl0bGU7XG5cdGRvY3VtZW50LnRpdGxlID0gdHh0Lm5vdGlmeUNoYXJhY3RlciArIGRvY3VtZW50LnRpdGxlO1xuXHQkYm9keS5vbmUoJ21vdXNlbW92ZScsICgpID0+IHtcblx0XHRkb2N1bWVudC50aXRsZSA9IG9sZFRpdGxlO1xuXHR9KTtcbn07XG5cbi8qIFVwZGF0ZSB0aGUgZGlzcGxheWVkIGluZm9ybWF0aW9uIHRvIG1hdGNoIHRoZSBjdXJyZW50IGxpbmsvKiAqIG9yIGxhY2sgdGhlcmVvZiAqL1xuY29uc3QgdXBkYXRlQ29udGV4dCA9ICgpID0+IHtcblx0dXBkYXRlRWRpdENvdW50ZXIoKTtcblx0aWYgKGN1cnJlbnRMaW5rKSB7XG5cdFx0dWkucGFnZVRpdGxlTGluZS5odG1sKFxuXHRcdFx0dHh0LnBhZ2VUaXRsZUxpbmVcblx0XHRcdFx0LnJlcGxhY2UoXG5cdFx0XHRcdFx0JyQxJyxcblx0XHRcdFx0XHRtdy51dGlsLmdldFVybChjdXJyZW50UGFnZVRpdGxlLCB7XG5cdFx0XHRcdFx0XHRyZWRpcmVjdDogJ25vJyxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpXG5cdFx0XHRcdC5yZXBsYWNlKCckMicsIG13Lmh0bWwuZXNjYXBlKGN1cnJlbnRQYWdlVGl0bGUpKVxuXHRcdCk7XG5cdFx0Y29uc3QgY29udGV4dCA9IGV4dHJhY3RDb250ZXh0KGN1cnJlbnRQYWdlUGFyYW1ldGVycy5jb250ZW50LCBjdXJyZW50TGluayk7XG5cdFx0dWkuY29udGV4dFxuXHRcdFx0LmVtcHR5KClcblx0XHRcdC5hcHBlbmQoJCgnPHNwYW4+JykudGV4dChjb250ZXh0WzBdKSlcblx0XHRcdC5hcHBlbmQoJCgnPHNwYW4+JykudGV4dChjb250ZXh0WzFdKS5hZGRDbGFzcygnZGlzYW1hc3Npc3QtaW5jbGluaycpKVxuXHRcdFx0LmFwcGVuZCgkKCc8c3Bhbj4nKS50ZXh0KGNvbnRleHRbMl0pKTtcblx0XHRjb25zdCBudW1MaW5lcyA9IE1hdGguY2VpbCh1aS5jb250ZXh0LmhlaWdodCgpIC8gTnVtYmVyLnBhcnNlRmxvYXQodWkuY29udGV4dC5jc3MoJ2xpbmUtaGVpZ2h0JykpKTtcblx0XHRpZiAobnVtTGluZXMgPCBjZmcubnVtQ29udGV4dExpbmVzKSB7XG5cdFx0XHQvLyBBZGQgY2ZnLm51bUNvbnRleHRMaW5lcyAtIG51bUxpbmVzICsgMSBsaW5lIGJyZWFrcywgc28gdGhhdCB0aGUgdG90YWwgbnVtYmVyXG5cdFx0XHQvLyBvZiBsaW5lcyBpcyBjZmcubnVtQ29udGV4dExpbmVzXG5cdFx0XHR1aS5jb250ZXh0LmFwcGVuZChcblx0XHRcdFx0QXJyYXkuZnJvbSh7XG5cdFx0XHRcdFx0bGVuZ3RoOiBjZmcubnVtQ29udGV4dExpbmVzIC0gbnVtTGluZXMgKyAyLFxuXHRcdFx0XHR9KS5qb2luKCc8YnI+Jylcblx0XHRcdCk7XG5cdFx0fVxuXHRcdHRvZ2dsZUZpbmlzaGVkTWVzc2FnZShmYWxzZSk7XG5cdFx0dWkudW5kb0J1dHRvbi5wcm9wKCdkaXNhYmxlZCcsICFwYWdlQ2hhbmdlcy5sZW5ndGgpO1xuXHRcdHVpLnJlbW92ZUxpbmtCdXR0b24ucHJvcCgnZGlzYWJsZWQnLCBjdXJyZW50UGFnZVBhcmFtZXRlcnMucmVkaXJlY3QpO1xuXHRcdHVpLmludGVudGlvbmFsTGlua0J1dHRvbi5wcm9wKCdkaXNhYmxlZCcsIGN1cnJlbnRQYWdlUGFyYW1ldGVycy5yZWRpcmVjdCk7XG5cdFx0dWkuZGlzYW1OZWVkZWRCdXR0b24ucHJvcCgnZGlzYWJsZWQnLCBjdXJyZW50UGFnZVBhcmFtZXRlcnMucmVkaXJlY3QgfHwgY3VycmVudExpbmsuaGFzRGlzYW1UZW1wbGF0ZSk7XG5cdFx0Y2hvb3NpbmcgPSB0cnVlO1xuXHR9IGVsc2Uge1xuXHRcdHRvZ2dsZUZpbmlzaGVkTWVzc2FnZSh0cnVlKTtcblx0fVxufTtcblxuLyogVXBkYXRlIHRoZSBjb3VudCBvZiBwZW5kaW5nIGNoYW5nZXMgKi9cbmNvbnN0IHVwZGF0ZUVkaXRDb3VudGVyID0gKCkgPT4ge1xuXHRpZiAodWkucGVuZGluZ0VkaXRDb3VudGVyKSB7XG5cdFx0dWkucGVuZGluZ0VkaXRDb3VudGVyLnRleHQoXG5cdFx0XHR0eHQucGVuZGluZ0VkaXRDb3VudGVyLnJlcGxhY2UoJyQxJywgZWRpdENvdW50KS5yZXBsYWNlKCckMicsIGNvdW50QWN0dWFsbHlDaGFuZ2VkRnVsbHlDaGVja2VkUGFnZXMoKSlcblx0XHQpO1xuXHR9XG5cdGlmIChwZW5kaW5nRWRpdEJveCkge1xuXHRcdGlmIChlZGl0Q291bnQgPT09IDAgJiYgIXJ1bm5pbmcpIHtcblx0XHRcdHRvZ2dsZVBlbmRpbmdFZGl0Qm94KGZhbHNlKTtcblx0XHRcdG5vdGlmeUNvbXBsZXRpb24oKTtcblx0XHR9XG5cdFx0bGV0IHRleHRDb250ZW50ID0gZWRpdENvdW50O1xuXHRcdGlmIChlZGl0TGltaXQpIHtcblx0XHRcdHRleHRDb250ZW50ID0gdHh0LnBlbmRpbmdFZGl0Qm94VGltZUVzdGltYXRpb25cblx0XHRcdFx0LnJlcGxhY2UoJyQxJywgZWRpdENvdW50KVxuXHRcdFx0XHQucmVwbGFjZSgnJDInLCBzZWNvbmRzVG9ISE1NU1MoY2ZnLmVkaXRDb29sZG93biAqIGVkaXRDb3VudCkpO1xuXHRcdH1cblx0XHRwZW5kaW5nRWRpdEJveFRleHQudGV4dCh0eHQucGVuZGluZ0VkaXRCb3gucmVwbGFjZSgnJDEnLCB0ZXh0Q29udGVudCkpO1xuXHR9XG59O1xuXG4vKiBBcHBseSB0aGUgY2hhbmdlcyBtYWRlIHRvIGFuIFwib3JpZ2luXCIgcGFnZS8qICogcGFnZUNoYW5nZTogQ2hhbmdlIHRoYXQgd2lsbCBiZSBzYXZlZCAqL1xuY29uc3QgYXBwbHlDaGFuZ2UgPSAocGFnZUNoYW5nZSkgPT4ge1xuXHRpZiAocGFnZUNoYW5nZS5wYWdlLmNvbnRlbnQgIT09IHBhZ2VDaGFuZ2UuY29udGVudEJlZm9yZVswXSkge1xuXHRcdGVkaXRDb3VudCsrO1xuXHRcdGNvbnN0IGNoYW5nZVN1bW1hcmllcyA9IHBhZ2VDaGFuZ2Uuc3VtbWFyeS5qb2luKHR4dC5zdW1tYXJ5U2VwYXJhdG9yKTtcblx0XHRjb25zdCBzdW1tYXJ5ID0gdHh0LnN1bW1hcnkucmVwbGFjZSgnJDEnLCBnZXRUYXJnZXRQYWdlKCkpLnJlcGxhY2UoJyQyJywgY2hhbmdlU3VtbWFyaWVzKTtcblx0XHRjb25zdCBzYXZlID0gZWRpdExpbWl0ID8gc2F2ZVdpdGhDb29sZG93biA6IHNhdmVQYWdlO1xuXHRcdHNhdmUocGFnZUNoYW5nZS50aXRsZSwgcGFnZUNoYW5nZS5wYWdlLCBzdW1tYXJ5LCB0cnVlLCB0cnVlKVxuXHRcdFx0LmFsd2F5cygoKSA9PiB7XG5cdFx0XHRcdGlmIChlZGl0Q291bnQgPiAwKSB7XG5cdFx0XHRcdFx0ZWRpdENvdW50LS07XG5cdFx0XHRcdH1cblx0XHRcdFx0dXBkYXRlRWRpdENvdW50ZXIoKTtcblx0XHRcdH0pXG5cdFx0XHQuZmFpbChlcnJvcik7XG5cdFx0dXBkYXRlRWRpdENvdW50ZXIoKTtcblx0fVxufTtcblxuLyogU2F2ZSBhbGwgdGhlIHBlbmRpbmcgY2hhbmdlcyAqL1xuY29uc3QgYXBwbHlBbGxDaGFuZ2VzID0gKCkgPT4ge1xuXHRmb3IgKGNvbnN0IHBhZ2VDaGFuZ2Ugb2YgcGFnZUNoYW5nZXMpIHtcblx0XHRhcHBseUNoYW5nZShwYWdlQ2hhbmdlKTtcblx0fVxuXHRwYWdlQ2hhbmdlcyA9IFtdO1xufTtcblxuLyogUmVjb3JkIGEgbmV3IHBlbmRpbmcgY2hhbmdlLyogKiBwYWdlVGl0bGU6IFRpdGxlIG9mIHRoZSBwYWdlLyogKiBwYWdlOiBDb250ZW50IG9mIHRoZSBwYWdlLyogKiBvbGRDb250ZW50OiBDb250ZW50IG9mIHRoZSBwYWdlIGJlZm9yZSB0aGUgY2hhbmdlLyogKiBsaW5rOiBMaW5rIHRoYXQgaGFzIGJlZW4gY2hhbmdlZC8qICogc3VtbWFyeTogQ2hhbmdlIHN1bW1hcnkgKi9cbmNvbnN0IGFkZENoYW5nZSA9IChwYWdlVGl0bGUsIHBhZ2UsIG9sZENvbnRlbnQsIGxpbmssIHN1bW1hcnkpID0+IHtcblx0aWYgKCFwYWdlQ2hhbmdlcy5sZW5ndGggfHwgcGFnZUNoYW5nZXMuYXQoLTEpLnRpdGxlICE9PSBwYWdlVGl0bGUpIHtcblx0XHRwYWdlQ2hhbmdlcy5wdXNoKHtcblx0XHRcdHRpdGxlOiBwYWdlVGl0bGUsXG5cdFx0XHRwYWdlLFxuXHRcdFx0Y29udGVudEJlZm9yZTogW10sXG5cdFx0XHRsaW5rczogW10sXG5cdFx0XHRzdW1tYXJ5OiBbXSxcblx0XHR9KTtcblx0fVxuXHRjb25zdCBsYXN0UGFnZUNoYW5nZSA9IHBhZ2VDaGFuZ2VzLmF0KC0xKTtcblx0bGFzdFBhZ2VDaGFuZ2UuY29udGVudEJlZm9yZS5wdXNoKG9sZENvbnRlbnQpO1xuXHRsYXN0UGFnZUNoYW5nZS5saW5rcy5wdXNoKGxpbmspO1xuXHRsYXN0UGFnZUNoYW5nZS5zdW1tYXJ5LnB1c2goc3VtbWFyeSk7XG59O1xuXG4vKiBDaGVjayB3aGV0aGVyIGFjdHVhbCBjaGFuZ2VzIGFyZSBzdG9yZWQgaW4gdGhlIGhpc3RvcnkgYXJyYXkgKi9cbmNvbnN0IGNoZWNrQWN0dWFsQ2hhbmdlcyA9ICgpID0+IHtcblx0cmV0dXJuIGNvdW50QWN0dWFsQ2hhbmdlcygpICE9PSAwO1xufTtcblxuLyogUmV0dXJuIHRoZSBudW1iZXIgb2YgZW50cmllcyBpbiB0aGUgaGlzdG9yeSBhcnJheSB0aGF0IHJlcHJlc2VudCBhY3R1YWwgY2hhbmdlcyAqL1xuY29uc3QgY291bnRBY3R1YWxDaGFuZ2VzID0gKCkgPT4ge1xuXHRsZXQgY2hhbmdlQ291bnQgPSAwO1xuXHRmb3IgKGNvbnN0IHBhZ2VDaGFuZ2Ugb2YgcGFnZUNoYW5nZXMpIHtcblx0XHRpZiAocGFnZUNoYW5nZS5wYWdlLmNvbnRlbnQgIT09IHBhZ2VDaGFuZ2UuY29udGVudEJlZm9yZVswXSkge1xuXHRcdFx0Y2hhbmdlQ291bnQrKztcblx0XHR9XG5cdH1cblx0cmV0dXJuIGNoYW5nZUNvdW50O1xufTtcblxuLyogUmV0dXJuIHRoZSBudW1iZXIgb2YgY2hhbmdlZCBwYWdlcyBpbiB0aGUgaGlzdG9yeSBhcnJheSwgaWdub3JpbmcgdGhlIGxhc3QgZW50cnkvKiAqIGlmIHdlIGFyZW4ndCBkb25lIHdpdGggdGhhdCBwYWdlIHlldCAqL1xuY29uc3QgY291bnRBY3R1YWxseUNoYW5nZWRGdWxseUNoZWNrZWRQYWdlcyA9ICgpID0+IHtcblx0bGV0IGNoYW5nZUNvdW50ID0gY291bnRBY3R1YWxDaGFuZ2VzKCk7XG5cdGlmIChwYWdlQ2hhbmdlcy5sZW5ndGgpIHtcblx0XHRjb25zdCBsYXN0Q2hhbmdlID0gcGFnZUNoYW5nZXMuYXQoLTEpO1xuXHRcdGlmIChcblx0XHRcdGxhc3RDaGFuZ2UudGl0bGUgPT09IGN1cnJlbnRQYWdlVGl0bGUgJiZcblx0XHRcdGN1cnJlbnRMaW5rICYmXG5cdFx0XHRsYXN0Q2hhbmdlLnBhZ2UuY29udGVudCAhPT0gbGFzdENoYW5nZS5jb250ZW50QmVmb3JlWzBdXG5cdFx0KSB7XG5cdFx0XHRjaGFuZ2VDb3VudC0tO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gY2hhbmdlQ291bnQ7XG59O1xuXG4vKiBGaW5kIHRoZSBsaW5rcyB0byBkaXNhbWJpZ3VhdGlvbiBvcHRpb25zIGluIGEgZGlzYW1iaWd1YXRpb24gcGFnZSAqL1xuY29uc3QgZ2V0RGlzYW1PcHRpb25zID0gKCkgPT4ge1xuXHRjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblx0cmV0dXJuICRib2R5LmZpbmQoJyNtdy1jb250ZW50LXRleHQgYScpLmZpbHRlcigoX2luZGV4LCBlbGVtZW50KSA9PiB7XG5cdFx0cmV0dXJuICEhZXh0cmFjdFBhZ2VOYW1lKCQoZWxlbWVudCkpO1xuXHR9KTtcbn07XG5cbi8qIFNhdmUgYWxsIHRoZSBwZW5kaW5nIGNoYW5nZXMgYW5kIGNsb3NlIHRoZSB0b29sICovXG5jb25zdCBzYXZlQW5kRW5kID0gKCkgPT4ge1xuXHRhcHBseUFsbENoYW5nZXMoKTtcblx0ZW5kKCk7XG59O1xuXG4vKiBDbG9zZSB0aGUgdG9vbCAqL1xuY29uc3QgZW5kID0gKCkgPT4ge1xuXHRjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblx0Y29uc3QgY3VycmVudFRvb2xVSSA9IHVpLmRpc3BsYXk7XG5cdGNob29zaW5nID0gZmFsc2U7XG5cdHJ1bm5pbmcgPSBmYWxzZTtcblx0c3RhcnRMaW5rLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xuXHQkYm9keS5maW5kKCcuZGlzYW1hc3Npc3Qtb3B0aW9ubWFya2VyJykucmVtb3ZlKCk7XG5cdGN1cnJlbnRUb29sVUkuZmFkZU91dCh7XG5cdFx0Y29tcGxldGUoKSB7XG5cdFx0XHRjdXJyZW50VG9vbFVJLnJlbW92ZSgpO1xuXHRcdFx0aWYgKGVkaXRDb3VudCkge1xuXHRcdFx0XHR0b2dnbGVQZW5kaW5nRWRpdEJveCh0cnVlKTtcblx0XHRcdH1cblx0XHR9LFxuXHR9KTtcbn07XG5cbi8qIERpc3BsYXkgYW4gZXJyb3IgbWVzc2FnZSAqL1xuY29uc3QgZXJyb3IgPSAoZXJyb3JEZXNjcmlwdGlvbikgPT4ge1xuXHRjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblx0Y29uc3QgZXJyb3JCb3ggPSAkKCc8ZGl2PicpLmFkZENsYXNzKCdkaXNhbWFzc2lzdC1ib3ggZGlzYW1hc3Npc3QtZXJyb3Jib3gnKTtcblx0ZXJyb3JCb3gudGV4dCh0eHQuZXJyb3IucmVwbGFjZSgnJDEnLCBlcnJvckRlc2NyaXB0aW9uKSk7XG5cdGVycm9yQm94LmFwcGVuZChcblx0XHRjcmVhdGVCdXR0b24odHh0LmRpc21pc3NFcnJvciwgKCkgPT4ge1xuXHRcdFx0ZXJyb3JCb3guZmFkZU91dCgpO1xuXHRcdH0pLmFkZENsYXNzKCdkaXNhbWFzc2lzdC1lcnJvcmJ1dHRvbicpXG5cdCk7XG5cdGNvbnN0IHVpSXNJblBsYWNlID0gdWkgJiYgJC5jb250YWlucyhkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHVpLmRpc3BsYXlbMF0pO1xuXHRjb25zdCBuZXh0RWxlbWVudCA9IHVpSXNJblBsYWNlID8gdWkuZGlzcGxheSA6ICRib2R5LmZpbmQoJyNtdy1jb250ZW50LXRleHQnKTtcblx0bmV4dEVsZW1lbnQuYmVmb3JlKGVycm9yQm94KTtcblx0ZXJyb3JCb3guaGlkZSgpLmZhZGVJbigpO1xufTtcblxuLyogQ2hhbmdlIGEgbGluayBzbyB0aGF0IGl0IHBvaW50cyB0byB0aGUgdGl0bGUvKiAqIHRleHQ6IFRoZSB3aWtpdGV4dCBvZiB0aGUgd2hvbGUgcGFnZS8qICogdGl0bGU6IFRoZSBuZXcgZGVzdGluYXRpb24gb2YgdGhlIGxpbmsvKiAqIGxpbms6IFRoZSBsaW5rIHRoYXQgd2lsbCBiZSBtb2RpZmllZC8qICogZXh0cmE6IFRleHQgdGhhdCB3aWxsIGJlIGFkZGVkIGFmdGVyIHRoZSBsaW5rIChvcHRpb25hbCkgKi9cbmNvbnN0IHJlcGxhY2VMaW5rID0gKHRleHQsIHRpdGxlLCBsaW5rLCBleHRyYSkgPT4ge1xuXHRsZXQgbmV3Q29udGVudDtcblx0aXNTYW1lUGFnZSh0aXRsZSwgbGluay5kZXNjcmlwdGlvbilcblx0XHQ/IC8vIFtbQnxBXV0gc2hvdWxkIGJlIHJlcGxhY2VkIHdpdGggW1tBXV0gcmF0aGVyIHRoYW4gW1tBfEFdXVxuXHRcdFx0KG5ld0NvbnRlbnQgPSBsaW5rLmRlc2NyaXB0aW9uKVxuXHRcdDogKG5ld0NvbnRlbnQgPSBgJHt0aXRsZX18JHtsaW5rLmRlc2NyaXB0aW9ufWApO1xuXHRjb25zdCBsaW5rU3RhcnQgPSB0ZXh0LnNsaWNlKDAsIE1hdGgubWF4KDAsIGxpbmsuc3RhcnQpKTtcblx0Y29uc3QgbGlua0VuZCA9IHRleHQuc2xpY2UoTWF0aC5tYXgoMCwgbGluay5lbmQpKTtcblx0cmV0dXJuIGAke2xpbmtTdGFydH1bWyR7bmV3Q29udGVudH1dXSR7bGluay5hZnRlckRlc2NyaXB0aW9ufSR7ZXh0cmEgfHwgJyd9JHtsaW5rRW5kfWA7XG59O1xuXG4vKiBSZW1vdmUgYSBsaW5rIGZyb20gdGhlIHRleHQvKiAqIHRleHQ6IFRoZSB3aWtpdGV4dCBvZiB0aGUgd2hvbGUgcGFnZS8qICogbGluazogVGhlIGxpbmsgdGhhdCB3aWxsIGJlIHJlbW92ZWQgKi9cbmNvbnN0IHJlbW92ZUxpbmsgPSAodGV4dCwgbGluaykgPT4ge1xuXHRjb25zdCBsaW5rU3RhcnQgPSB0ZXh0LnNsaWNlKDAsIE1hdGgubWF4KDAsIGxpbmsuc3RhcnQpKTtcblx0Y29uc3QgbGlua0VuZCA9IHRleHQuc2xpY2UoTWF0aC5tYXgoMCwgbGluay5lbmQpKTtcblx0cmV0dXJuIGxpbmtTdGFydCArIGxpbmsuZGVzY3JpcHRpb24gKyBsaW5rLmFmdGVyRGVzY3JpcHRpb24gKyBsaW5rRW5kO1xufTtcblxuLyogRXh0cmFjdCBhIGxpbmsgZnJvbSBhIHN0cmluZyBpbiB3aWtpIGZvcm1hdCwvKiAqIHN0YXJ0aW5nIGZyb20gYSBnaXZlbiBpbmRleC4gUmV0dXJuIGEgbGluayBpZiBvbmUgY2FuIGJlIGZvdW5kLC8qICogb3RoZXJ3aXNlIHJldHVybiBudWxsLiBUaGUgXCJsaW5rXCIgaW5jbHVkZXMgXCJkaXNhbWJpZ3VhdGlvbiBuZWVkZWRcIi8qICogdGVtcGxhdGVzIGlubWVkaWF0ZWx5IGZvbGxvd2luZyB0aGUgbGluayBwcm9wZXIvKiAqIHRleHQ6IFRleHQgZnJvbSB3aGljaCB0aGUgbGluayB3aWxsIGJlIGV4dHJhY3RlZC8qICogbGFzdEluZGV4OiBJbmRleCBmcm9tIHdoaWNoIHRoZSBzZWFyY2ggd2lsbCBzdGFydCAqL1xuY29uc3QgZXh0cmFjdExpbmsgPSAodGV4dCwgbGFzdEluZGV4KSA9PiB7XG5cdC8vIEZJWE1FOiBOb3QgYW4gYWN0dWFsIHRpdGxlIHJlZ2V4IChsb3RzIG9mIGZhbHNlIHBvc2l0aXZlc1xuXHQvLyBhbmQgc29tZSBmYWxzZSBuZWdhdGl2ZXMpLCBidXQgaG9wZWZ1bGx5IGdvb2QgZW5vdWdoLlxuXHRjb25zdCB0aXRsZVJlZ2V4ID0gL1xcW1xcWyguKj8pKD86XFx8KC4qPykpP11dL2c7XG5cdC8vIERpdHRvIGZvciB0aGUgdGVtcGxhdGUgcmVnZXguIERpc2FtYmlndWF0aW9uIGxpbmsgdGVtcGxhdGVzXG5cdC8vIHNob3VsZCBiZSBzaW1wbGUgZW5vdWdoIGZvciB0aGlzIG5vdCB0byBtYXR0ZXIsIHRob3VnaC5cblx0Y29uc3QgdGVtcGxhdGVSZWdleCA9IC9eKFxcdypbXFxzISksLjo7P31dKil7e1xccyooW157fH1dKz8pXFxzKig/OlxcfFtee10qPyk/fX0vO1xuXHR0aXRsZVJlZ2V4Lmxhc3RJbmRleCA9IGxhc3RJbmRleDtcblx0Y29uc3QgbWF0Y2ggPSB0aXRsZVJlZ2V4LmV4ZWModGV4dCk7XG5cdGlmIChtYXRjaCAmJiBtYXRjaC5pbmRleCAhPT0gLTEpIHtcblx0XHRsZXQgcG9zc2libHlBbWJpZ3VvdXMgPSB0cnVlO1xuXHRcdGxldCBoYXNEaXNhbVRlbXBsYXRlID0gZmFsc2U7XG5cdFx0bGV0IF9lbmQgPSBtYXRjaC5pbmRleCArIDQgKyBtYXRjaFsxXS5sZW5ndGggKyAobWF0Y2hbMl0gPyAxICsgbWF0Y2hbMl0ubGVuZ3RoIDogMCk7XG5cdFx0bGV0IGFmdGVyRGVzY3JpcHRpb24gPSAnJztcblx0XHRjb25zdCByZXN0ID0gdGV4dC5zbGljZShNYXRoLm1heCgwLCBfZW5kKSk7XG5cdFx0Y29uc3QgdGVtcGxhdGVNYXRjaCA9IHRlbXBsYXRlUmVnZXguZXhlYyhyZXN0KTtcblx0XHRpZiAodGVtcGxhdGVNYXRjaCkge1xuXHRcdFx0Y29uc3QgdGVtcGxhdGVUaXRsZSA9IGdldENhbm9uaWNhbFRpdGxlKHRlbXBsYXRlTWF0Y2hbMl0pO1xuXHRcdFx0Y29uc3Qge2Rpc2FtTGlua1RlbXBsYXRlc30gPSBjZmc7XG5cdFx0XHRjb25zdCB7ZGlzYW1MaW5rSWdub3JlVGVtcGxhdGVzfSA9IGNmZztcblx0XHRcdGlmIChkaXNhbUxpbmtUZW1wbGF0ZXMuaW5jbHVkZXModGVtcGxhdGVUaXRsZSkpIHtcblx0XHRcdFx0X2VuZCArPSB0ZW1wbGF0ZU1hdGNoWzBdLmxlbmd0aDtcblx0XHRcdFx0YWZ0ZXJEZXNjcmlwdGlvbiA9IHRlbXBsYXRlTWF0Y2hbMV0ucmVwbGFjZSgvXFxzJC8sICcnKTtcblx0XHRcdFx0aGFzRGlzYW1UZW1wbGF0ZSA9IHRydWU7XG5cdFx0XHR9IGVsc2UgaWYgKGRpc2FtTGlua0lnbm9yZVRlbXBsYXRlcy5pbmNsdWRlcyh0ZW1wbGF0ZVRpdGxlKSkge1xuXHRcdFx0XHRwb3NzaWJseUFtYmlndW91cyA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4ge1xuXHRcdFx0c3RhcnQ6IG1hdGNoLmluZGV4LFxuXHRcdFx0ZW5kOiBfZW5kLFxuXHRcdFx0cG9zc2libHlBbWJpZ3VvdXMsXG5cdFx0XHRoYXNEaXNhbVRlbXBsYXRlLFxuXHRcdFx0dGl0bGU6IG1hdGNoWzFdLFxuXHRcdFx0ZGVzY3JpcHRpb246IG1hdGNoWzJdID8/IG1hdGNoWzFdLFxuXHRcdFx0YWZ0ZXJEZXNjcmlwdGlvbixcblx0XHR9O1xuXHR9XG59O1xuXG4vKiBFeHRyYWN0IGEgbGluayB0byBvbmUgb2YgYSBudW1iZXIgb2YgZGVzdGluYXRpb24gcGFnZXMgZnJvbSBhIHN0cmluZy8qICogKFwidGV4dFwiKSBpbiB3aWtpIGZvcm1hdCwgc3RhcnRpbmcgZnJvbSBhIGdpdmVuIGluZGV4IChcImxhc3RJbmRleFwiKS4vKiAqIFwiRGlzYW1iaWd1YXRpb24gbmVlZGVkXCIgdGVtcGxhdGVzIGFyZSBpbmNsdWRlZCBhcyBwYXJ0IG9mIHRoZSBsaW5rcy4vKiAqIHRleHQ6IFBhZ2UgaW4gd2lraSBmb3JtYXQvKiAqIGRlc3RpbmF0aW9uczogQXJyYXkgb2YgcGFnZSB0aXRsZXMgdG8gbG9vayBmb3IvKiAqIGxhc3RJbmRleDogSW5kZXggZnJvbSB3aGljaCB0aGUgc2VhcmNoIHdpbGwgc3RhcnQgKi9cbmNvbnN0IGV4dHJhY3RMaW5rVG9QYWdlID0gKHRleHQsIGRlc3RpbmF0aW9ucywgbGFzdEluZGV4KSA9PiB7XG5cdGxldCBsaW5rO1xuXHRsZXQgdGl0bGU7XG5cdGRvIHtcblx0XHRsaW5rID0gZXh0cmFjdExpbmsodGV4dCwgbGFzdEluZGV4KTtcblx0XHRpZiAobGluaykge1xuXHRcdFx0bGFzdEluZGV4ID0gbGluay5lbmQ7XG5cdFx0XHR0aXRsZSA9IGdldENhbm9uaWNhbFRpdGxlKGxpbmsudGl0bGUpO1xuXHRcdH1cblx0fSB3aGlsZSAobGluayAmJiAoIWxpbmsucG9zc2libHlBbWJpZ3VvdXMgfHwgIWRlc3RpbmF0aW9ucz8uaW5jbHVkZXModGl0bGUpKSk7XG5cdHJldHVybiBsaW5rO1xufTtcblxuLyogRmluZCB0aGUgXCJ0YXJnZXRcIiBwYWdlOiBlaXRoZXIgdGhlIG9uZSB3ZSBhcmUgaW4gb3IgdGhlIFwibWFpblwiIG9uZSBmb3VuZCBieSBleHRyYWN0aW5nLyogKiB0aGUgdGl0bGUgZnJvbSBcIi4qIChkaXNhbWJpZ3VhdGlvbilcIiBvciB3aGF0ZXZlciB0aGUgYXBwcm9waWF0ZSBsb2NhbCBmb3JtYXQgaXMgKi9cbmNvbnN0IGdldFRhcmdldFBhZ2UgPSAoKSA9PiB7XG5cdGNvbnN0IHRpdGxlID0gZ2V0VGl0bGUoKTtcblx0cmV0dXJuIGZvcmNlU2FtZVBhZ2UgPyB0aXRsZSA6IHJlbW92ZURpc2FtKHRpdGxlKTtcbn07XG5cbi8qIEdldCB0aGUgcGFnZSB0aXRsZSwgd2l0aCB0aGUgbmFtZXNwYWNlIHByZWZpeCBpZiBhbnkuICovXG5jb25zdCBnZXRUaXRsZSA9ICgpID0+IHtcblx0cmV0dXJuIG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKS5yZXBsYWNlKC9fL2csICcgJyk7XG59O1xuXG4vKiBFeHRyYWN0IGEgXCJtYWluXCIgdGl0bGUgZnJvbSBcIi4qIChkaXNhbWJpZ3VhdGlvbilcIiBvciB3aGF0ZXZlciB0aGUgYXBwcm9waWF0ZSBsb2NhbCBmb3JtYXQgaXMgKi9cbmNvbnN0IHJlbW92ZURpc2FtID0gKHRpdGxlKSA9PiB7XG5cdGNvbnN0IG1hdGNoID0gbmV3IFJlZ0V4cChjZmcuZGlzYW1SZWdFeHApLmV4ZWModGl0bGUpO1xuXHRyZXR1cm4gbWF0Y2g/LlsxXSA/PyB0aXRsZTtcbn07XG5cbi8qIENoZWNrIHdoZXRoZXIgdHdvIHBhZ2UgdGl0bGVzIGFyZSB0aGUgc2FtZSAqL1xuY29uc3QgaXNTYW1lUGFnZSA9ICh0aXRsZTEsIHRpdGxlMikgPT4ge1xuXHRyZXR1cm4gZ2V0Q2Fub25pY2FsVGl0bGUodGl0bGUxKSA9PT0gZ2V0Q2Fub25pY2FsVGl0bGUodGl0bGUyKTtcbn07XG5cbi8qIFJldHVybiB0aGUgJ2Nhbm9uaWNhbCB0aXRsZScgb2YgYSBwYWdlICovXG5jb25zdCBnZXRDYW5vbmljYWxUaXRsZSA9ICh0aXRsZSkgPT4ge1xuXHR0cnkge1xuXHRcdC8vIG13LlRpdGxlIHNlZW1zIHRvIGJlIGJ1Z2d5LCBhbmQgc29tZSB2YWxpZCB0aXRsZXMgYXJlIHJlamVjdGVkXG5cdFx0Ly8gRklYTUU6IFRoaXMgbWF5IGNhdXNlIGZhbHNlIG5lZ2F0aXZlc1xuXHRcdHRpdGxlID0gbmV3IG13LlRpdGxlKHRpdGxlKS5nZXRQcmVmaXhlZFRleHQoKTtcblx0fSBjYXRjaCB7XG5cdFx0LyogZW1wdHkgKi9cblx0fVxuXHRyZXR1cm4gdGl0bGU7XG59O1xuXG4vKiBFeHRyYWN0IHRoZSBjb250ZXh0IGFyb3VuZCBhIGdpdmVuIGxpbmsgaW4gYSB0ZXh0IHN0cmluZyAqL1xuY29uc3QgZXh0cmFjdENvbnRleHQgPSAodGV4dCwgbGluaykgPT4ge1xuXHRjb25zdCBjb250ZXh0U3RhcnQgPSBsaW5rLnN0YXJ0IC0gY2ZnLnJhZGl1cztcblx0Y29uc3QgY29udGV4dEVuZCA9IGxpbmsuZW5kICsgY2ZnLnJhZGl1cztcblx0bGV0IGNvbnRleHRQcmV2ID0gdGV4dC5zbGljZShjb250ZXh0U3RhcnQsIGxpbmsuc3RhcnQpO1xuXHRpZiAoY29udGV4dFN0YXJ0ID4gMCkge1xuXHRcdGNvbnRleHRQcmV2ID0gdHh0LmVsbGlwc2lzICsgY29udGV4dFByZXY7XG5cdH1cblx0bGV0IGNvbnRleHROZXh0ID0gdGV4dC5zbGljZShsaW5rLmVuZCwgY29udGV4dEVuZCk7XG5cdGlmIChjb250ZXh0RW5kIDwgdGV4dC5sZW5ndGgpIHtcblx0XHRjb250ZXh0TmV4dCArPSB0eHQuZWxsaXBzaXM7XG5cdH1cblx0cmV0dXJuIFtjb250ZXh0UHJldiwgdGV4dC5zbGljZShsaW5rLnN0YXJ0LCBsaW5rLmVuZCksIGNvbnRleHROZXh0XTtcbn07XG5cbi8qIEV4dHJhY3QgdGhlIHByZWZpeGVkIHBhZ2UgbmFtZSBmcm9tIGEgbGluayAqL1xuY29uc3QgZXh0cmFjdFBhZ2VOYW1lID0gKGxpbmspID0+IHtcblx0bGV0IHBhZ2VOYW1lID0gZXh0cmFjdFBhZ2VOYW1lUmF3KGxpbmspO1xuXHRpZiAocGFnZU5hbWUpIHtcblx0XHRjb25zdCBzZWN0aW9uUG9zID0gcGFnZU5hbWUuaW5kZXhPZignIycpO1xuXHRcdGxldCBzZWN0aW9uID0gJyc7XG5cdFx0aWYgKHNlY3Rpb25Qb3MgIT09IC0xKSB7XG5cdFx0XHRzZWN0aW9uID0gcGFnZU5hbWUuc2xpY2UoTWF0aC5tYXgoMCwgc2VjdGlvblBvcykpO1xuXHRcdFx0cGFnZU5hbWUgPSBwYWdlTmFtZS5zbGljZSgwLCBNYXRoLm1heCgwLCBzZWN0aW9uUG9zKSk7XG5cdFx0fVxuXHRcdHJldHVybiBnZXRDYW5vbmljYWxUaXRsZShwYWdlTmFtZSkgKyBzZWN0aW9uO1xuXHR9XG59O1xuXG4vKiBFeHRyYWN0IHRoZSBwYWdlIG5hbWUgZnJvbSBhIGxpbmssIGFzIGlzICovXG5jb25zdCBleHRyYWN0UGFnZU5hbWVSYXcgPSAobGluaykgPT4ge1xuXHRpZiAoIWxpbmsuaGFzQ2xhc3MoJ2ltYWdlJykpIHtcblx0XHRjb25zdCBocmVmID0gbGluay5hdHRyKCdocmVmJyk7XG5cdFx0aWYgKGxpbmsuaGFzQ2xhc3MoJ25ldycpKSB7XG5cdFx0XHQvLyBcIlJlZFwiIGxpbmtcblx0XHRcdGlmIChocmVmLmluY2x1ZGVzKG13LmNvbmZpZy5nZXQoJ3dnU2NyaXB0JykpKSB7XG5cdFx0XHRcdHJldHVybiBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3RpdGxlJywgaHJlZik7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IHJlZ2V4ID0gbXcuY29uZmlnLmdldCgnd2dBcnRpY2xlUGF0aCcpLnJlcGxhY2UoJyQxJywgJyguKiknKTtcblx0XHRcdGNvbnN0IHJlZ2V4UmVzdWx0ID0gbmV3IFJlZ0V4cChgXiR7cmVnZXh9JGApLmV4ZWMoaHJlZik7XG5cdFx0XHRpZiAoQXJyYXkuaXNBcnJheShyZWdleFJlc3VsdCkgJiYgcmVnZXhSZXN1bHQubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocmVnZXhSZXN1bHRbMV0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcblxuLyogQ2hlY2sgd2hldGhlciB0aGlzIGlzIGEgZGlzYW1iaWd1YXRpb24gcGFnZSAqL1xuY29uc3QgaXNEaXNhbSA9ICgpID0+IHtcblx0Y29uc3QgY2F0ZWdvcmllcyA9IG13LmNvbmZpZy5nZXQoJ3dnQ2F0ZWdvcmllcycsIFtdKTtcblx0Zm9yIChjb25zdCBjYXRlZ29yeSBvZiBjYXRlZ29yaWVzKSB7XG5cdFx0Y29uc3Qge2Rpc2FtQ2F0ZWdvcmllc30gPSBjZmc7XG5cdFx0aWYgKGRpc2FtQ2F0ZWdvcmllcy5pbmNsdWRlcyhjYXRlZ29yeSkpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCBzZWNvbmRzVG9ISE1NU1MgPSAodG90YWxTZWNvbmRzKSA9PiB7XG5cdGxldCBoaG1tc3MgPSAnJztcblx0Y29uc3QgaG91cnMgPSBNYXRoLmZsb29yKHRvdGFsU2Vjb25kcyAvIDM2MDApO1xuXHRjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcigodG90YWxTZWNvbmRzICUgMzYwMCkgLyA2MCk7XG5cdGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKCh0b3RhbFNlY29uZHMgJSAzNjAwKSAlIDYwKTtcblx0aWYgKGhvdXJzID49IDEpIHtcblx0XHRoaG1tc3MgPSBgJHtwYWQoaG91cnMsICcwJywgMil9OmA7XG5cdH1cblx0aGhtbXNzICs9IGAke3BhZChtaW51dGVzLCAnMCcsIDIpfToke3BhZChzZWNvbmRzLCAnMCcsIDIpfWA7XG5cdHJldHVybiBoaG1tc3M7XG59O1xuXG5jb25zdCBwYWQgPSAoc3RyLCB6LCB3aWR0aCkgPT4ge1xuXHRzdHIgPSBzdHIudG9TdHJpbmcoKTtcblx0aWYgKHN0ci5sZW5ndGggPj0gd2lkdGgpIHtcblx0XHRyZXR1cm4gc3RyO1xuXHR9XG5cdHJldHVybiAoXG5cdFx0QXJyYXkuZnJvbSh7XG5cdFx0XHRsZW5ndGg6IHdpZHRoIC0gc3RyLmxlbmd0aCArIDEsXG5cdFx0fSkuam9pbih6KSArIHN0clxuXHQpO1xufTtcblxuLyogQ3JlYXRlIGEgbmV3IGJ1dHRvblxuICogdGV4dDogVGV4dCB0aGF0IHdpbGwgYmUgZGlzcGxheWVkIG9uIHRoZSBidXR0b25cbiAqIG9uQ2xpY2s6IEZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGVcbiAqIGJ1dHRvbiBpcyBjbGlja2VkXG4gKi9cbmNvbnN0IGNyZWF0ZUJ1dHRvbiA9ICh0ZXh0LCBvbkNsaWNrKSA9PiB7XG5cdGNvbnN0IGJ1dHRvbiA9ICQoJzxpbnB1dD4nKS5hdHRyKHtcblx0XHR0eXBlOiAnYnV0dG9uJyxcblx0XHR2YWx1ZTogdGV4dCxcblx0fSk7XG5cdGJ1dHRvbi5hZGRDbGFzcygnZGlzYW1hc3Npc3QtYnV0dG9uJykub24oJ2NsaWNrJywgb25DbGljayk7XG5cdHJldHVybiBidXR0b247XG59O1xuXG4vKiBHaXZlbiBhIHBhZ2UgdGl0bGUgYW5kIGFuIGFycmF5IG9mIHBvc3NpYmxlIHJlZGlyZWN0cyB7ZnJvbSwgdG99IChcImNhbm9uaWNhbCB0aXRsZXNcIiksIGZpbmQgdGhlIHBhZ2UvKiAqIGF0IHRoZSBlbmQgb2YgdGhlIHJlZGlyZWN0IGNoYWluLCBpZiB0aGVyZSBpcyBvbmUuIE90aGVyd2lzZSwgcmV0dXJuIHRoZSBwYWdlIHRpdGxlIHRoYXQgd2FzIHBhc3NlZCAqL1xuY29uc3QgcmVzb2x2ZVJlZGlyZWN0ID0gKHBhZ2VUaXRsZSwgcG9zc2libGVSZWRpcmVjdHMpID0+IHtcblx0bGV0IGFwcGxpZWRSZWRpcmVjdCA9IHRydWU7XG5cdGNvbnN0IHZpc2l0ZWRQYWdlcyA9IHt9O1xuXHRsZXQgY3VycmVudFBhZ2UgPSBnZXRDYW5vbmljYWxUaXRsZShwYWdlVGl0bGUpO1xuXHR3aGlsZSAoYXBwbGllZFJlZGlyZWN0KSB7XG5cdFx0YXBwbGllZFJlZGlyZWN0ID0gZmFsc2U7XG5cdFx0Zm9yIChjb25zdCBwb3NzaWJsZVJlZGlyZWN0IG9mIHBvc3NpYmxlUmVkaXJlY3RzKSB7XG5cdFx0XHRpZiAocG9zc2libGVSZWRpcmVjdC5mcm9tID09PSBjdXJyZW50UGFnZSkge1xuXHRcdFx0XHRpZiAodmlzaXRlZFBhZ2VzW3Bvc3NpYmxlUmVkaXJlY3QudG9dKSB7XG5cdFx0XHRcdFx0Ly8gUmVkaXJlY3QgY2hhaW4gZGV0ZWN0ZWRcblx0XHRcdFx0XHRyZXR1cm4gcGFnZVRpdGxlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZpc2l0ZWRQYWdlc1tjdXJyZW50UGFnZV0gPSB0cnVlO1xuXHRcdFx0XHRhcHBsaWVkUmVkaXJlY3QgPSB0cnVlO1xuXHRcdFx0XHRjdXJyZW50UGFnZSA9IHBvc3NpYmxlUmVkaXJlY3QudG87XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdC8vIE5vIHJlZGlyZWN0IHJ1bGVzIGFwcGxpZWQgZm9yIGFuIGl0ZXJhdGlvbiBvZiB0aGUgb3V0ZXIgbG9vcDpcblx0Ly8gbm8gbW9yZSByZWRpcmVjdHMuIFdlIGFyZSBkb25lXG5cdHJldHVybiBjdXJyZW50UGFnZTtcbn07XG5cbi8qIEZldGNoIHRoZSBpbmNvbWluZyBsaW5rcyB0byBhIHBhZ2UuIFJldHVybnMgYSBqUXVlcnkgcHJvbWlzZS8qICogKHN1Y2Nlc3MgLSBhcnJheSBvZiB0aXRsZXMgb2YgcGFnZXMgdGhhdCBjb250YWluIGxpbmtzIHRvIHRoZSB0YXJnZXQgcGFnZSBhbmQvKiAqIGFycmF5IG9mIFwiY2Fub25pY2FsIHRpdGxlc1wiIG9mIHBvc3NpYmxlIGRlc3RpbmF0aW9ucyBvZiB0aGUgYmFja2xpbmtzIChlaXRoZXIvKiAqIHRoZSB0YXJnZXQgcGFnZSBvciByZWRpcmVjdHMgdG8gdGhlIHRhcmdldCBwYWdlKSwgZmFpbHVyZSAtIGVycm9yIGRlc2NyaXB0aW9uKS8qICogcGFnZTogVGFyZ2V0IHBhZ2UgKi9cbmNvbnN0IGdldEJhY2tsaW5rcyA9IChwYWdlKSA9PiB7XG5cdGNvbnN0IGRlZmVycmVkID0gbmV3ICQuRGVmZXJyZWQoKTtcblx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRsaXN0OiAnYmFja2xpbmtzJyxcblx0XHRibHRpdGxlOiBwYWdlLFxuXHRcdGJscmVkaXJlY3Q6IHRydWUsXG5cdFx0YmxsaW1pdDogY2ZnLmJhY2tsaW5rTGltaXQsXG5cdFx0YmxuYW1lc3BhY2U6IGNmZy50YXJnZXROYW1lc3BhY2VzLmpvaW4oJ3wnKSxcblx0fTtcblx0YXBpLmdldChwYXJhbXMpXG5cdFx0LmRvbmUoKHtxdWVyeX0pID0+IHtcblx0XHRcdC8vIFRoZXJlIG1pZ2h0IGJlIGR1cGxpY2F0ZSBlbnRyaWVzIGluIHNvbWUgY29ybmVyIGNhc2VzLiBXZSBkb24ndCBjYXJlLFxuXHRcdFx0Ly8gc2luY2Ugd2UgYXJlIGdvaW5nIHRvIGNoZWNrIGxhdGVyLCBhbnl3YXlcblx0XHRcdGNvbnN0IGJhY2tsaW5rcyA9IFtdO1xuXHRcdFx0Y29uc3QgbGlua1RpdGxlcyA9IFtnZXRDYW5vbmljYWxUaXRsZShwYWdlKV07XG5cdFx0XHRjb25zdCBiYWNrbGlua3NRdWVyeSA9IHF1ZXJ5LmJhY2tsaW5rcztcblx0XHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiBiYWNrbGlua3NRdWVyeSkge1xuXHRcdFx0XHRiYWNrbGlua3MucHVzaChlbGVtZW50LnRpdGxlKTtcblx0XHRcdFx0aWYgKCFlbGVtZW50LnJlZGlybGlua3MpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaW5rVGl0bGVzLnB1c2goZWxlbWVudC50aXRsZSk7XG5cdFx0XHRcdGNvbnN0IHtyZWRpcmxpbmtzfSA9IGVsZW1lbnQ7XG5cdFx0XHRcdGZvciAoY29uc3Qge3RpdGxlfSBvZiByZWRpcmxpbmtzKSB7XG5cdFx0XHRcdFx0YmFja2xpbmtzLnB1c2godGl0bGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRkZWZlcnJlZC5yZXNvbHZlKGJhY2tsaW5rcywgbGlua1RpdGxlcyk7XG5cdFx0fSlcblx0XHQuZmFpbCgoY29kZSkgPT4ge1xuXHRcdFx0ZGVmZXJyZWQucmVqZWN0KHR4dC5nZXRCYWNrbGlua3NFcnJvci5yZXBsYWNlKCckMScsIGNvZGUpKTtcblx0XHR9KTtcblx0cmV0dXJuIGRlZmVycmVkLnByb21pc2UoKTtcbn07XG5cbi8qIERvd25sb2FkIGEgbGlzdCBvZiByZWRpcmVjdHMgZm9yIHNvbWUgcGFnZXMuIFJldHVybnMgYSBqUXVlcnkgY2FsbGJhY2sgKHN1Y2Nlc3MgLS8qICogYXJyYXkgb2YgcmVkaXJlY3RzICh7ZnJvbSwgdG99KSwgZmFpbHVyZSAtIGVycm9yIGRlc2NyaXB0aW9uICkvKiAqIHBhZ2VUaXRsZXM6IEFycmF5IG9mIHBhZ2UgdGl0bGVzICovXG5jb25zdCBmZXRjaFJlZGlyZWN0cyA9IChwYWdlVGl0bGVzKSA9PiB7XG5cdGNvbnN0IGRlZmVycmVkID0gbmV3ICQuRGVmZXJyZWQoKTtcblx0Y29uc3QgY3VycmVudFRpdGxlcyA9IHBhZ2VUaXRsZXMuc2xpY2UoMCwgY2ZnLnF1ZXJ5VGl0bGVMaW1pdCk7XG5cdGNvbnN0IHJlc3RUaXRsZXMgPSBwYWdlVGl0bGVzLnNsaWNlKGNmZy5xdWVyeVRpdGxlTGltaXQpO1xuXHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdHRpdGxlczogY3VycmVudFRpdGxlcy5qb2luKCd8JyksXG5cdFx0cmVkaXJlY3RzOiB0cnVlLFxuXHR9O1xuXHRhcGkuZ2V0KHBhcmFtcylcblx0XHQuZG9uZSgoe3F1ZXJ5fSkgPT4ge1xuXHRcdFx0Y29uc3QgdGhlc2VSZWRpcmVjdHMgPSBxdWVyeS5yZWRpcmVjdHMgPz8gW107XG5cdFx0XHRpZiAocmVzdFRpdGxlcy5sZW5ndGgpIHtcblx0XHRcdFx0ZmV0Y2hSZWRpcmVjdHMocmVzdFRpdGxlcylcblx0XHRcdFx0XHQuZG9uZSgocmVkaXJlY3RzKSA9PiB7XG5cdFx0XHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKFsuLi50aGVzZVJlZGlyZWN0cywgLi4ucmVkaXJlY3RzXSk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuZmFpbCgoZGVzY3JpcHRpb24pID0+IHtcblx0XHRcdFx0XHRcdGRlZmVycmVkLnJlamVjdChkZXNjcmlwdGlvbik7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKHRoZXNlUmVkaXJlY3RzKTtcblx0XHRcdH1cblx0XHR9KVxuXHRcdC5mYWlsKChjb2RlKSA9PiB7XG5cdFx0XHRkZWZlcnJlZC5yZWplY3QodHh0LmZldGNoUmVkaXJlY3RzRXJyb3IucmVwbGFjZSgnJDEnLCBjb2RlKSk7XG5cdFx0fSk7XG5cdHJldHVybiBkZWZlcnJlZC5wcm9taXNlKCk7XG59O1xuXG4vKiBEb3dubG9hZCB0aGUgbGlzdCBvZiB1c2VyIHJpZ2h0cyBmb3IgdGhlIGN1cnJlbnQgdXNlci4gUmV0dXJucyBhLyogKiBqUXVlcnkgcHJvbWlzZSAoc3VjY2VzcyAtIGFycmF5IG9mIHJpZ2h0IG5hbWVzLCBlcnJvciAtIGVycm9yIGRlc2NyaXB0aW9uKSAqL1xuY29uc3QgZmV0Y2hSaWdodHMgPSAoKSA9PiB7XG5cdGNvbnN0IGRlZmVycmVkID0gJC5EZWZlcnJlZCgpO1xuXHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdG1ldGE6ICd1c2VyaW5mbycsXG5cdFx0dWlwcm9wOiAncmlnaHRzJyxcblx0fTtcblx0YXBpLmdldChwYXJhbXMpXG5cdFx0LmRvbmUoKHtxdWVyeX0pID0+IHtcblx0XHRcdGRlZmVycmVkLnJlc29sdmUocXVlcnkudXNlcmluZm8ucmlnaHRzKTtcblx0XHR9KVxuXHRcdC5mYWlsKChjb2RlKSA9PiB7XG5cdFx0XHRkZWZlcnJlZC5yZWplY3QodHh0LmZldGNoUmlnaHRzRXJyb3IucmVwbGFjZSgnJDEnLCBjb2RlKSk7XG5cdFx0fSk7XG5cdHJldHVybiBkZWZlcnJlZC5wcm9taXNlKCk7XG59O1xuXG4vKiBMb2FkIHRoZSByYXcgcGFnZSB0ZXh0IGZvciBhIGdpdmVuIHRpdGxlLiBSZXR1cm5zIGEgalF1ZXJ5IHByb21pc2UgKHN1Y2Nlc3MgLSBwYWdlLyogKiBjb250ZW50LCBmYWlsdXJlIC0gZXJyb3IgZGVzY3JpcHRpb24pLyogKiBwYWdlVGl0bGU6IFRpdGxlIG9mIHRoZSBwYWdlICovXG5jb25zdCBsb2FkUGFnZSA9IChwYWdlVGl0bGUpID0+IHtcblx0Y29uc3QgZGVmZXJyZWQgPSBuZXcgJC5EZWZlcnJlZCgpO1xuXHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHR0aXRsZXM6IHBhZ2VUaXRsZSxcblx0XHRwcm9wOiAncmV2aXNpb25zJyxcblx0XHRydnByb3A6ICd0aW1lc3RhbXB8Y29udGVudCcsXG5cdFx0bWV0YTogJ3Rva2VucycsXG5cdFx0dHlwZTogJ2NzcmYnLFxuXHR9O1xuXHRhcGkuZ2V0KHBhcmFtcylcblx0XHQuZG9uZSgoe3F1ZXJ5fSkgPT4ge1xuXHRcdFx0Y29uc3QgW3Jhd1BhZ2VdID0gcXVlcnkucGFnZXM7XG5cdFx0XHRjb25zdCBwYWdlID0ge307XG5cdFx0XHRwYWdlLnJlZGlyZWN0ID0gcmF3UGFnZS5yZWRpcmVjdCAhPT0gdW5kZWZpbmVkO1xuXHRcdFx0cGFnZS5taXNzaW5nID0gcmF3UGFnZS5taXNzaW5nICE9PSB1bmRlZmluZWQ7XG5cdFx0XHRpZiAocmF3UGFnZS5yZXZpc2lvbnMpIHtcblx0XHRcdFx0cGFnZS5jb250ZW50ID0gcmF3UGFnZS5yZXZpc2lvbnNbMF0uY29udGVudDtcblx0XHRcdFx0cGFnZS5iYXNlVGltZVN0YW1wID0gcmF3UGFnZS5yZXZpc2lvbnNbMF0udGltZXN0YW1wO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cGFnZS5jb250ZW50ID0gJyc7XG5cdFx0XHRcdHBhZ2UuYmFzZVRpbWVTdGFtcCA9IHVuZGVmaW5lZDtcblx0XHRcdH1cblx0XHRcdHBhZ2Uuc3RhcnRUaW1lU3RhbXAgPSByYXdQYWdlLnN0YXJ0dGltZXN0YW1wO1xuXHRcdFx0cGFnZS5lZGl0VG9rZW4gPSBxdWVyeS50b2tlbnMuY3NyZnRva2VuO1xuXHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShwYWdlKTtcblx0XHR9KVxuXHRcdC5mYWlsKChjb2RlKSA9PiB7XG5cdFx0XHRkZWZlcnJlZC5yZWplY3QodHh0LmxvYWRQYWdlRXJyb3IucmVwbGFjZSgnJDEnLCBwYWdlVGl0bGUpLnJlcGxhY2UoJyQyJywgY29kZSkpO1xuXHRcdH0pO1xuXHRyZXR1cm4gZGVmZXJyZWQucHJvbWlzZSgpO1xufTtcblxuLyogUmVnaXN0ZXIgY2hhbmdlcyB0byBhIHBhZ2UsIHRvIGJlIHNhdmVkIGxhdGVyLiBSZXR1cm5zIGEgalF1ZXJ5IHByb21pc2UvKiAqIChzdWNjZXNzIC0gbm8gcGFyYW1zLCBmYWlsdXJlIC0gZXJyb3IgZGVzY3JpcHRpb24pLiBUYWtlcyB0aGUgc2FtZSBwYXJhbWV0ZXJzLyogKiBhcyBzYXZlUGFnZSAqL1xuY29uc3Qgc2F2ZVdpdGhDb29sZG93biA9ICguLi5hcmdzKSA9PiB7XG5cdGNvbnN0IGRlZmVycmVkID0gbmV3ICQuRGVmZXJyZWQoKTtcblx0cGVuZGluZ1NhdmVzLnB1c2goe1xuXHRcdGFyZ3MsXG5cdFx0ZGZkOiBkZWZlcnJlZCxcblx0fSk7XG5cdGlmICghcnVubmluZ1NhdmVzKSB7XG5cdFx0Y2hlY2tBbmRTYXZlKCk7XG5cdH1cblx0cmV0dXJuIGRlZmVycmVkLnByb21pc2UoKTtcbn07XG5cbi8qIFNhdmUgdGhlIGZpcnN0IHNldCBvZiBjaGFuZ2VzIGluIHRoZSBsaXN0IG9mIHBlbmRpbmcgY2hhbmdlcywgcHJvdmlkaW5nIHRoYXQvKiAqIGVub3VnaCB0aW1lIGhhcyBwYXNzZWQgc2luY2UgdGhlIGxhc3QgZWRpdCAqL1xuY29uc3QgY2hlY2tBbmRTYXZlID0gZnVuY3Rpb24gKCkge1xuXHRpZiAoIXBlbmRpbmdTYXZlcy5sZW5ndGgpIHtcblx0XHRydW5uaW5nU2F2ZXMgPSBmYWxzZTtcblx0XHRyZXR1cm47XG5cdH1cblx0cnVubmluZ1NhdmVzID0gdHJ1ZTtcblx0Y29uc3QgbWlsbGlzU2luY2VMYXN0ID0gRGF0ZS5ub3coKSAtIGxhc3RFZGl0TWlsbGlzO1xuXHRpZiAobWlsbGlzU2luY2VMYXN0IDwgY2ZnLmVkaXRDb29sZG93biAqIDEwMDApIHtcblx0XHRzZXRUaW1lb3V0KGNoZWNrQW5kU2F2ZSwgY2ZnLmVkaXRDb29sZG93biAqIDEwMDAgLSBtaWxsaXNTaW5jZUxhc3QpO1xuXHR9IGVsc2Uge1xuXHRcdC8vIFRoZSBsYXN0IGVkaXQgc3RhcnRlZCBhdCBsZWFzdCBjZmcuZWRpdENvb2xkb3duIHNlY29uZHMgYWdvXG5cdFx0Y29uc3Qgc2F2ZSA9IHBlbmRpbmdTYXZlcy5zaGlmdCgpO1xuXHRcdHNhdmVQYWdlXG5cdFx0XHQuYXBwbHkodGhpcywgc2F2ZS5hcmdzKVxuXHRcdFx0LmRvbmUoKCkgPT4ge1xuXHRcdFx0XHRjaGVja0FuZFNhdmUoKTtcblx0XHRcdFx0c2F2ZS5kZmQucmVzb2x2ZSgpO1xuXHRcdFx0fSlcblx0XHRcdC5mYWlsKChkZXNjcmlwdGlvbikgPT4ge1xuXHRcdFx0XHRjaGVja0FuZFNhdmUoKTtcblx0XHRcdFx0c2F2ZS5kZmQucmVqZWN0KGRlc2NyaXB0aW9uKTtcblx0XHRcdH0pO1xuXHRcdC8vIFdlJ2xsIHVzZSB0aGUgdGltZSBzaW5jZSB0aGUgbGFzdCBlZGl0IHN0YXJ0ZWRcblx0XHRsYXN0RWRpdE1pbGxpcyA9IERhdGUubm93KCk7XG5cdH1cbn07XG5cbi8qIFNhdmUgdGhlIGNoYW5nZXMgbWFkZSB0byBhIHBhZ2UuIFJldHVybnMgYSBqUXVlcnkgcHJvbWlzZSAoc3VjY2VzcyAtIG5vIHBhcmFtcywvKiAqIGZhaWx1cmUgLSBlcnJvciBkZXNjcmlwdGlvbikvKiAqIHBhZ2VUaXRsZTogVGl0bGUgb2YgdGhlIHBhZ2UvKiAqIHBhZ2U6IFBhZ2UgZGF0YS8qICogc3VtbWFyeTogU3VtbWFyeSBvZiB0aGUgY2hhbmdlcyBtYWRlIHRvIHRoZSBwYWdlLyogKiBtaW5vckVkaXQ6IFdoZXRoZXIgdG8gbWFyayB0aGUgZWRpdCBhcyAnbWlub3InLyogKiBib3RFZGl0OiBXaGV0aGVyIHRvIG1hcmsgdGhlIGVkaXQgYXMgJ2JvdCcgKi9cbmNvbnN0IHNhdmVQYWdlID0gKHBhZ2VUaXRsZSwge2VkaXRUb2tlbiwgY29udGVudCwgYmFzZVRpbWVTdGFtcCwgc3RhcnRUaW1lU3RhbXB9LCBzdW1tYXJ5LCBtaW5vckVkaXQsIGJvdEVkaXQpID0+IHtcblx0Y29uc3QgZGVmZXJyZWQgPSBuZXcgJC5EZWZlcnJlZCgpO1xuXHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0dGl0bGU6IHBhZ2VUaXRsZSxcblx0XHR0b2tlbjogZWRpdFRva2VuLFxuXHRcdHRleHQ6IGNvbnRlbnQsXG5cdFx0YmFzZXRpbWVzdGFtcDogYmFzZVRpbWVTdGFtcCxcblx0XHRzdGFydHRpbWVzdGFtcDogc3RhcnRUaW1lU3RhbXAsXG5cdFx0c3VtbWFyeSxcblx0XHR3YXRjaGxpc3Q6IGNmZy53YXRjaCxcblx0XHRtaW5vcjogbWlub3JFZGl0LFxuXHRcdGJvdDogYm90RWRpdCxcblx0fTtcblx0YXBpLnBvc3QocGFyYW1zKVxuXHRcdC5kb25lKCgpID0+IHtcblx0XHRcdGRlZmVycmVkLnJlc29sdmUoKTtcblx0XHR9KVxuXHRcdC5mYWlsKChjb2RlKSA9PiB7XG5cdFx0XHRkZWZlcnJlZC5yZWplY3QodHh0LnNhdmVQYWdlRXJyb3IucmVwbGFjZSgnJDEnLCBwYWdlVGl0bGUpLnJlcGxhY2UoJyQyJywgY29kZSkpO1xuXHRcdH0pO1xuXHRyZXR1cm4gZGVmZXJyZWQucHJvbWlzZSgpO1xufTtcbiIsICJleHBvcnQgY29uc3QgdHh0ID0ge1xuXHRzdGFydDogJ+S4uumTvuaOpea2iOatp+S5iScsXG5cdHN0YXJ0TWFpbjogJ+S4uumTvuiHs+S4u+adoeebrueahOmTvuaOpea2iOatp+S5iScsXG5cdHN0YXJ0U2FtZTogJ+S4uumTvuiHs+a2iOatp+S5iemhteeahOmTvuaOpea2iOatp+S5iScsXG5cdGNsb3NlOiAn5YWz6ZetJyxcblx0dW5kbzogJ+WkjeWOnycsXG5cdG9taXQ6ICfot7Pov4cnLFxuXHRyZWZyZXNoOiAn6YeN5paw5pW055CGJyxcblx0dGl0bGVBc1RleHQ6ICflhbblroPnm67moIcnLFxuXHRkaXNhbU5lZWRlZDogJ+agh+ekunt7ZG59fScsXG5cdGludGVudGlvbmFsTGluazogJ+acieaEj+mTvuWIsOa2iOatp+S5iemhteeahOmTvuaOpScsXG5cdHRpdGxlQXNUZXh0UHJvbXB0OiAn6K+36L6T5YWl5paw55qE6ZO+5o6l55uu5qCH77yaJyxcblx0cmVtb3ZlTGluazogJ+WOu+mZpOmTvuaOpScsXG5cdG9wdGlvbk1hcmtlcjogJyBb6ZO+5o6l5Yiw6L+Z6YeMXScsXG5cdHRhcmdldE9wdGlvbk1hcmtlcjogJyBb5b2T5YmN55uu5qCHXScsXG5cdHJlZGlyZWN0T3B0aW9uTWFya2VyOiAnIFvlvZPliY3nm67moIfvvIjph43lrprlkJHvvIldJyxcblx0cGFnZVRpdGxlTGluZTogJzxhIGhyZWY9XCIkMVwiPiQyPC9hPu+8micsXG5cdG5vTW9yZUxpbmtzOiAn5rKh5pyJ6ZyA6KaB5raI5q2n5LmJ55qE6ZO+5o6l5LqG44CCJyxcblx0cGVuZGluZ0VkaXRDb3VudGVyOiAn5bey5L+d5a2YJDHkuKrvvIzlt7LnvJbovpEkMuS4qicsXG5cdHBlbmRpbmdFZGl0Qm94OiAnRGlzYW1Bc3Npc3TmraPlnKjlgqjlrZjmgqjnmoTnvJbovpHvvIgkMe+8ieOAgicsXG5cdHBlbmRpbmdFZGl0Qm94VGltZUVzdGltYXRpb246ICckMe+8m+WJqeS9meaXtumXtO+8miQyJyxcblx0cGVuZGluZ0VkaXRCb3hMaW1pdGVkOlxuXHRcdCflnKjmiYDmnInmm7TmlLnkv53lrZjliY3vvIzor7fkuI3opoHlhbPpl63pobXpnaLvvJvkvaDlj6/ku6XlnKjlj6bkuIDkuKrpobXpnaLnvJbovpHmsYLpl7vnmb7np5HvvIzkvYbmmK/or7fli7/lkIzml7bkvb/nlKjlpJrkuKpEaXNhbUFzc2lzdOOAgicsXG5cdGVycm9yOiAn6ZSZ6K+v77yaJDEnLFxuXHRmZXRjaFJlZGlyZWN0c0Vycm9yOiAn6I635Y+W6YeN5a6a5ZCR5aSx6LSl77yaXCIkMVwiLicsXG5cdGdldEJhY2tsaW5rc0Vycm9yOiAn5LiL6L295Y+N5ZCR6ZO+5o6l5aSx6LSl77yaXCIkMVwiLicsXG5cdGZldGNoUmlnaHRzRXJyb3I6ICfojrflj5bnlKjmiLfmnYPpmZDlpLHotKXvvJpcIiQxXCIsJyxcblx0bG9hZFBhZ2VFcnJvcjogJ+WKoOi9vSQx5aSx6LSl77yaXCIkMlwiLicsXG5cdHNhdmVQYWdlRXJyb3I6ICfkv53lrZjoh7MkMeWksei0pe+8mlwiJDJcIi4nLFxuXHRkaXNtaXNzRXJyb3I6ICdEaXNtaXNzJyxcblx0cGVuZGluZzogJ0Rpc2FtQXNzaXN05bCa5pyJ5pyq5YKo5a2Y55qE57yW6L6R44CC5aaC5qyy5YKo5a2Y5LmL77yM6K+35oyJ4oCc5YWz6Zet4oCd44CCJyxcblx0ZWRpdEluUHJvZ3Jlc3M6ICdEaXNhbUFzc2lzdOato+WcqOi/m+ihjOe8lui+keOAguiLpeaCqOWwhuacrOWIhumhteWFs+mXre+8jOWPr+iDveS8muS4p+WkseaCqOeahOe8lui+keOAgicsXG5cdGVsbGlwc2lzOiAn4oCm4oCmJyxcblx0bm90aWZ5Q2hhcmFjdGVyOiAn4pyUJyxcblx0c3VtbWFyeTogJ+S9v+eUqFtbTWVkaWFXaWtpOkdhZGdldC1EaXNhbUFzc2lzdC5qc3xEaXNhbUFzc2lzdF1d5riF55CGW1tRVzpEQUJ85raI5q2n5LmJXV3pk77mjqXvvJpbWyQxXV3vvIgkMu+8ieOAgicsXG5cdHN1bW1hcnlDaGFuZ2VkOiAn5pS56ZO+5o6l6IezW1skMV1dJyxcblx0c3VtbWFyeU9taXR0ZWQ6ICfpk77mjqXlt7Lot7Pov4cnLFxuXHRzdW1tYXJ5UmVtb3ZlZDogJ+mTvuaOpeW3suenu+mZpCcsXG5cdHN1bW1hcnlJbnRlbnRpb25hbDogJ+WIu+aEj+mTvuaOpeiHs+a2iOatp+S5iemhtemdoicsXG5cdHN1bW1hcnlIZWxwTmVlZGVkOiAn6ZyA6KaB5biu5YqpJyxcblx0c3VtbWFyeVNlcGFyYXRvcjogJzsgJyxcblx0cmVkaXJlY3RTdW1tYXJ5OiAn5L2/55SoW1tNZWRpYVdpa2k6R2FkZ2V0LURpc2FtQXNzaXN0LmpzfERpc2FtQXNzaXN0XV3liJvlu7rnm67moIfkuLpbWyQxXV3nmoTph43lrprlkJHjgIInLFxufTtcbiIsICIvKipcbiAqIERpc2FtQXNzaXN0OiBhIHRvb2wgZm9yIHJlcGFpcmluZyBsaW5rcyBmcm9tIGFydGljbGVzIHRvIGRpc2FtYmlndWF0aW9uIHBhZ2VzLlxuICog55SxUXdlcnR5eXRyZXdxcXdlcnR55pyA5Yid6K6+6K6h77yaQ0MgQlktU0EgMy4wXG4gKiDnlLFHWldEZXLmnKzlnLDljJbvvJoyMDIwLTA4LTE5IENDIEJZLVNBIDMuMFxuICog55Sx5ZKM5bmz5aWL5paX5pWR5Zyw55CD56iN5L2c57+76K+RIDIwMjEtMDUtMTUgQ0MgQlktU0EgMy4wXG4gKiDmsYLpl7vnmb7np5FOanpqeueugOS9k+WMliAyMDIyLTItMTQgQ0MgQlktU0EgNC4wXG4gKi9cbmltcG9ydCB7aW5zdGFsbH0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuXG4kKGluc3RhbGwpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7OztBQUFBO0FBQUEsd0ZBQUFBLFNBQUE7QUFBQTtBQUNBLFFBQUksUUFBUSxTQUFVLElBQUk7QUFDeEIsYUFBTyxNQUFNLEdBQUcsU0FBUyxRQUFRO0FBQUEsSUFDbkM7QUFHQSxJQUFBQSxRQUFPO0FBQUEsSUFFTCxNQUFNLE9BQU8sY0FBYyxZQUFZLFVBQVUsS0FDakQsTUFBTSxPQUFPLFVBQVUsWUFBWSxNQUFNO0FBQUEsSUFFekMsTUFBTSxPQUFPLFFBQVEsWUFBWSxJQUFJLEtBQ3JDLE1BQU0sT0FBTyxVQUFVLFlBQVksTUFBTSxLQUN6QyxNQUFNLE9BQU8sV0FBUSxZQUFZLE9BQUk7QUFBQSxJQUVwQywyQkFBWTtBQUFFLGFBQU87QUFBQSxJQUFNLEVBQUcsS0FBSyxTQUFTLGFBQWEsRUFBRTtBQUFBO0FBQUE7OztBQ2Y5RDtBQUFBLHVGQUFBQyxTQUFBO0FBQUE7QUFDQSxJQUFBQSxRQUFPLFVBQVUsU0FBVSxNQUFNO0FBQy9CLFVBQUk7QUFDRixlQUFPLENBQUMsQ0FBQyxLQUFLO0FBQUEsTUFDaEIsU0FBU0MsUUFBTztBQUNkLGVBQU87QUFBQSxNQUNUO0FB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LE9BQU9qTCxhQUFhcUgsTUFBTTtBQUNoQ1QsYUFDRTBNLE1BQU0sTUFBTXJJLEtBQUs4SCxJQUFJLEVBQ3JCaE8sS0FBSyxNQUFNO0FBQ1hrTyxtQkFBYTtBQUNiaEksV0FBSytILElBQUk1TSxRQUFRO0lBQ2xCLENBQUMsRUFDQUgsS0FBTVksaUJBQWdCO0FBQ3RCb00sbUJBQWE7QUFDYmhJLFdBQUsrSCxJQUFJdkIsT0FBTzVLLFdBQVc7SUFDNUIsQ0FBQztBQUVGM0cscUJBQWlCaVQsS0FBS0MsSUFBSTtFQUMzQjtBQUNEO0FBR0EsSUFBTXhNLFdBQVdBLENBQUN3QixXQUFXO0VBQUN3SztFQUFXak07RUFBUzZMO0VBQWVFO0FBQWMsR0FBR25VLFNBQVNnVixXQUFXQyxZQUFZO0FBQ2pILFFBQU10TixXQUFXLElBQUk1RixFQUFFNkYsU0FBUztBQUNoQyxRQUFNc0ssU0FBUztJQUNkQyxRQUFRO0lBQ1J0TSxPQUFPZ0U7SUFDUHFMLE9BQU9iO0lBQ1A1USxNQUFNMkU7SUFDTitNLGVBQWVsQjtJQUNmRyxnQkFBZ0JEO0lBQ2hCblU7SUFDQW9WLFdBQVd6WSxJQUFJaUI7SUFDZnlYLE9BQU9MO0lBQ1BNLEtBQUtMO0VBQ047QUFDQXpVLE1BQUkrVSxLQUFLckQsTUFBTSxFQUNiMUwsS0FBSyxNQUFNO0FBQ1htQixhQUFTRSxRQUFRO0VBQ2xCLENBQUMsRUFDQUgsS0FBTXVMLFVBQVM7QUFDZnRMLGFBQVN1TCxPQUFPblYsSUFBSTJCLGNBQWNzSSxRQUFRLE1BQU02QixTQUFTLEVBQUU3QixRQUFRLE1BQU1pTCxJQUFJLENBQUM7RUFDL0UsQ0FBQztBQUNGLFNBQU90TCxTQUFTWSxRQUFRO0FBQ3pCOztBRXJnQ0F4RyxFQUFFRixPQUFPOyIsCiAgIm5hbWVzIjogWyJtb2R1bGUiLCAibW9kdWxlIiwgImVycm9yIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZXJyb3IiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAiZXJyb3IiLCAibW9kdWxlIiwgImdsb2JhbCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbCIsICJTeW1ib2wiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgImRvY3VtZW50IiwgIm1vZHVsZSIsICJlcnJvciIsICJtb2R1bGUiLCAibW9kdWxlIiwgImVycm9yIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIlR5cGVFcnJvciIsICJtb2R1bGUiLCAiZXJyb3IiLCAibW9kdWxlIiwgImVycm9yIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbCIsICJtb2R1bGUiLCAibW9kdWxlIiwgImVycm9yIiwgIm1vZHVsZSIsICIkIiwgImVycm9yIiwgIm1vZHVsZSIsICIkIiwgImVycm9yIiwgIldHX0FDVElPTiIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImNmZyIsICJkaXNhbUNhdGVnb3JpZXMiLCAiZGlzYW1MaW5rVGVtcGxhdGVzIiwgImRpc2FtTGlua0lnbm9yZVRlbXBsYXRlcyIsICJkaXNhbUZvcm1hdCIsICJkaXNhbVJlZ0V4cCIsICJkaXNhbU5lZWRlZFRleHQiLCAiY29uY2F0IiwgInJlZGlyZWN0VG9EaXNhbSIsICJpbnRlbnRpb25hbExpbmtPcHRpb24iLCAidGFyZ2V0TmFtZXNwYWNlcyIsICJiYWNrbGlua0xpbWl0IiwgInF1ZXJ5VGl0bGVMaW1pdCIsICJyYWRpdXMiLCAibnVtQ29udGV4dExpbmVzIiwgImhpc3RvcnlTaXplIiwgImVkaXRDb29sZG93biIsICJ3YXRjaCIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgInR4dCIsICJzdGFydCIsICJzdGFydE1haW4iLCAic3RhcnRTYW1lIiwgImNsb3NlIiwgInVuZG8iLCAib21pdCIsICJyZWZyZXNoIiwgInRpdGxlQXNUZXh0IiwgImRpc2FtTmVlZGVkIiwgImludGVudGlvbmFsTGluayIsICJ0aXRsZUFzVGV4dFByb21wdCIsICJyZW1vdmVMaW5rIiwgIm9wdGlvbk1hcmtlciIsICJ0YXJnZXRPcHRpb25NYXJrZXIiLCAicmVkaXJlY3RPcHRpb25NYXJrZXIiLCAicGFnZVRpdGxlTGluZSIsICJub01vcmVMaW5rcyIsICJwZW5kaW5nRWRpdENvdW50ZXIiLCAicGVuZGluZ0VkaXRCb3giLCAicGVuZGluZ0VkaXRCb3hUaW1lRXN0aW1hdGlvbiIsICJwZW5kaW5nRWRpdEJveExpbWl0ZWQiLCAiZXJyb3IiLCAiZmV0Y2hSZWRpcmVjdHNFcnJvciIsICJnZXRCYWNrbGlua3NFcnJvciIsICJmZXRjaFJpZ2h0c0Vycm9yIiwgImxvYWRQYWdlRXJyb3IiLCAic2F2ZVBhZ2VFcnJvciIsICJkaXNtaXNzRXJyb3IiLCAicGVuZGluZyIsICJlZGl0SW5Qcm9ncmVzcyIsICJlbGxpcHNpcyIsICJub3RpZnlDaGFyYWN0ZXIiLCAic3VtbWFyeSIsICJzdW1tYXJ5Q2hhbmdlZCIsICJzdW1tYXJ5T21pdHRlZCIsICJzdW1tYXJ5UmVtb3ZlZCIsICJzdW1tYXJ5SW50ZW50aW9uYWwiLCAic3VtbWFyeUhlbHBOZWVkZWQiLCAic3VtbWFyeVNlcGFyYXRvciIsICJyZWRpcmVjdFN1bW1hcnkiLCAiYXBpIiwgImluaXRNd0FwaSIsICJzdGFydExpbmsiLCAidWkiLCAibGlua3MiLCAicGFnZUNoYW5nZXMiLCAiY3VycmVudFBhZ2VUaXRsZSIsICJjdXJyZW50UGFnZVBhcmFtZXRlcnMiLCAiY3VycmVudExpbmsiLCAicG9zc2libGVCYWNrbGlua0Rlc3RpbmF0aW9ucyIsICJmb3JjZVNhbWVQYWdlIiwgInJ1bm5pbmciLCAiY2hvb3NpbmciLCAiY2FuTWFya0ludGVudGlvbmFsTGlua3MiLCAiZGlzcGxheWVkUGFnZXMiLCAiZWRpdENvdW50IiwgImVkaXRMaW1pdCIsICJwZW5kaW5nU2F2ZXMiLCAicGVuZGluZ0VkaXRCb3hUZXh0IiwgImxhc3RFZGl0TWlsbGlzIiwgInJ1bm5pbmdTYXZlcyIsICJpbnN0YWxsIiwgImlzRGlzYW0iLCAiJCIsICJwb3J0bGV0SWQiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJSZWdFeHAiLCAidGVzdCIsICJnZXRUaXRsZSIsICJzdGFydE1haW5MaW5rIiwgInV0aWwiLCAiYWRkUG9ydGxldExpbmsiLCAib24iLCAic3RhcnRTYW1lTGluayIsICJhZGQiLCAiZW5zdXJlREFCRXhpc3RzIiwgInRoZW4iLCAiY2FuTWFyayIsICJjcmVhdGVVSSIsICJhZGRVbmxvYWRDb25maXJtIiwgIm1hcmtEaXNhbU9wdGlvbnMiLCAiY2hlY2tFZGl0TGltaXQiLCAidG9nZ2xlUGVuZGluZ0VkaXRCb3giLCAiZG9QYWdlIiwgIiRib2R5IiwgImRpc3BsYXkiLCAiYWRkQ2xhc3MiLCAiZmluaXNoZWRNZXNzYWdlIiwgInRleHQiLCAiaGlkZSIsICJjb250ZXh0IiwgInVuZG9CdXR0b24iLCAiY3JlYXRlQnV0dG9uIiwgIm9taXRCdXR0b24iLCAiZW5kQnV0dG9uIiwgInNhdmVBbmRFbmQiLCAicmVmcmVzaEJ1dHRvbiIsICJ0aXRsZUFzVGV4dEJ1dHRvbiIsICJjaG9vc2VUaXRsZUZyb21Qcm9tcHQiLCAiaW50ZW50aW9uYWxMaW5rQnV0dG9uIiwgImNob29zZUludGVudGlvbmFsTGluayIsICJkaXNhbU5lZWRlZEJ1dHRvbiIsICJjaG9vc2VEaXNhbU5lZWRlZCIsICJyZW1vdmVMaW5rQnV0dG9uIiwgImNob29zZUxpbmtSZW1vdmFsIiwgInRvcCIsICJhcHBlbmQiLCAibGVmdEJ1dHRvbnMiLCAicmlnaHRCdXR0b25zIiwgImFsbEJ1dHRvbnMiLCAidXBkYXRlRWRpdENvdW50ZXIiLCAidG9nZ2xlQWN0aW9uQnV0dG9ucyIsICJmaW5kIiwgImJlZm9yZSIsICJmYWRlSW4iLCAid2luZG93IiwgImNoZWNrQWN0dWFsQ2hhbmdlcyIsICJvcHRpb25QYWdlVGl0bGVzIiwgIm9wdGlvbk1hcmtlcnMiLCAiZ2V0RGlzYW1PcHRpb25zIiwgImVhY2giLCAiX2luZGV4IiwgImVsZW1lbnQiLCAibGluayIsICJ0aXRsZSIsICJleHRyYWN0UGFnZU5hbWUiLCAiYXR0ciIsICJldiIsICJwcmV2ZW50RGVmYXVsdCIsICJjaG9vc2VSZXBsYWNlbWVudCIsICJhZnRlciIsICJwdXNoIiwgInRhcmdldFBhZ2UiLCAiZ2V0VGFyZ2V0UGFnZSIsICJmZXRjaFJlZGlyZWN0cyIsICJkb25lIiwgInJlZGlyZWN0cyIsICJlbmRUYXJnZXRQYWdlIiwgInJlc29sdmVSZWRpcmVjdCIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiZW50cmllcyIsICJfc3RlcCIsICJzIiwgIm4iLCAiaWkiLCAib3B0aW9uUGFnZVRpdGxlIiwgInZhbHVlIiwgImVuZE9wdGlvblRpdGxlIiwgImlzU2FtZVBhZ2UiLCAiZXJyIiwgImUiLCAiZiIsICJmYWlsIiwgImRlZmVycmVkIiwgIkRlZmVycmVkIiwgInJlc29sdmUiLCAiZXhlYyIsICJkaXNhbVRpdGxlIiwgInJlcGxhY2UiLCAibG9hZFBhZ2UiLCAicGFnZSIsICJtaXNzaW5nIiwgImNvbnRlbnQiLCAic2F2ZVBhZ2UiLCAiZGVzY3JpcHRpb24iLCAicHJvbWlzZSIsICJmZXRjaFJpZ2h0cyIsICJyaWdodHMiLCAiaW5jbHVkZXMiLCAiYWx3YXlzIiwgImxlbmd0aCIsICJhcHBseUNoYW5nZSIsICJzaGlmdCIsICJkYXRhIiwgImRvTGluayIsICJnZXRCYWNrbGlua3MiLCAiYmFja2xpbmtzIiwgInBhZ2VUaXRsZXMiLCAiX2kiLCAiX3BlbmRpbmdTYXZlcyIsICJlbCIsICJmaWx0ZXIiLCAidCIsICJyZW1vdmVEaXNhbSIsICJ1cGRhdGVDb250ZXh0IiwgImV4dHJhY3RMaW5rVG9QYWdlIiwgImVuZCIsICJwYWdlVGl0bGUiLCAiZXh0cmEiLCAiYWRkQ2hhbmdlIiwgInJlcGxhY2VMaW5rIiwgInByb21wdCIsICJsYXN0UGFnZSIsICJhdCIsICJ1bnNoaWZ0IiwgImNvbnRlbnRCZWZvcmUiLCAicG9wIiwgImVuYWJsZWQiLCAiYWZmZWN0ZWRCdXR0b25zIiwgIl9pMiIsICJfYWZmZWN0ZWRCdXR0b25zIiwgImJ1dHRvbiIsICJwcm9wIiwgInRvZ2dsZUZpbmlzaGVkTWVzc2FnZSIsICJzaG93IiwgInRvZ2dsZSIsICJmYWRlT3V0IiwgIm5vdGlmeUNvbXBsZXRpb24iLCAib2xkVGl0bGUiLCAib25lIiwgImh0bWwiLCAiZ2V0VXJsIiwgInJlZGlyZWN0IiwgImVzY2FwZSIsICJleHRyYWN0Q29udGV4dCIsICJlbXB0eSIsICJudW1MaW5lcyIsICJNYXRoIiwgImNlaWwiLCAiaGVpZ2h0IiwgIk51bWJlciIsICJwYXJzZUZsb2F0IiwgImNzcyIsICJBcnJheSIsICJmcm9tIiwgImpvaW4iLCAiaGFzRGlzYW1UZW1wbGF0ZSIsICJjb3VudEFjdHVhbGx5Q2hhbmdlZEZ1bGx5Q2hlY2tlZFBhZ2VzIiwgInRleHRDb250ZW50IiwgInNlY29uZHNUb0hITU1TUyIsICJwYWdlQ2hhbmdlIiwgImNoYW5nZVN1bW1hcmllcyIsICJzYXZlIiwgInNhdmVXaXRoQ29vbGRvd24iLCAiYXBwbHlBbGxDaGFuZ2VzIiwgIl9pdGVyYXRvcjIiLCAiX3N0ZXAyIiwgIm9sZENvbnRlbnQiLCAibGFzdFBhZ2VDaGFuZ2UiLCAiY291bnRBY3R1YWxDaGFuZ2VzIiwgImNoYW5nZUNvdW50IiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgImxhc3RDaGFuZ2UiLCAiY3VycmVudFRvb2xVSSIsICJyZW1vdmVDbGFzcyIsICJyZW1vdmUiLCAiY29tcGxldGUiLCAiZXJyb3JEZXNjcmlwdGlvbiIsICJlcnJvckJveCIsICJ1aUlzSW5QbGFjZSIsICJjb250YWlucyIsICJkb2N1bWVudEVsZW1lbnQiLCAibmV4dEVsZW1lbnQiLCAibmV3Q29udGVudCIsICJsaW5rU3RhcnQiLCAic2xpY2UiLCAibWF4IiwgImxpbmtFbmQiLCAiYWZ0ZXJEZXNjcmlwdGlvbiIsICJleHRyYWN0TGluayIsICJsYXN0SW5kZXgiLCAidGl0bGVSZWdleCIsICJ0ZW1wbGF0ZVJlZ2V4IiwgIm1hdGNoIiwgImluZGV4IiwgIl9tYXRjaCQiLCAicG9zc2libHlBbWJpZ3VvdXMiLCAiX2VuZCIsICJyZXN0IiwgInRlbXBsYXRlTWF0Y2giLCAidGVtcGxhdGVUaXRsZSIsICJnZXRDYW5vbmljYWxUaXRsZSIsICJkZXN0aW5hdGlvbnMiLCAiX21hdGNoJDIiLCAidGl0bGUxIiwgInRpdGxlMiIsICJUaXRsZSIsICJnZXRQcmVmaXhlZFRleHQiLCAiY29udGV4dFN0YXJ0IiwgImNvbnRleHRFbmQiLCAiY29udGV4dFByZXYiLCAiY29udGV4dE5leHQiLCAicGFnZU5hbWUiLCAiZXh0cmFjdFBhZ2VOYW1lUmF3IiwgInNlY3Rpb25Qb3MiLCAiaW5kZXhPZiIsICJzZWN0aW9uIiwgImhhc0NsYXNzIiwgImhyZWYiLCAiZ2V0UGFyYW1WYWx1ZSIsICJyZWdleCIsICJyZWdleFJlc3VsdCIsICJpc0FycmF5IiwgImRlY29kZVVSSUNvbXBvbmVudCIsICJjYXRlZ29yaWVzIiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgImNhdGVnb3J5IiwgInRvdGFsU2Vjb25kcyIsICJoaG1tc3MiLCAiaG91cnMiLCAiZmxvb3IiLCAibWludXRlcyIsICJzZWNvbmRzIiwgInBhZCIsICJzdHIiLCAieiIsICJ3aWR0aCIsICJ0b1N0cmluZyIsICJvbkNsaWNrIiwgInR5cGUiLCAicG9zc2libGVSZWRpcmVjdHMiLCAiYXBwbGllZFJlZGlyZWN0IiwgInZpc2l0ZWRQYWdlcyIsICJjdXJyZW50UGFnZSIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJwb3NzaWJsZVJlZGlyZWN0IiwgInRvIiwgInBhcmFtcyIsICJhY3Rpb24iLCAibGlzdCIsICJibHRpdGxlIiwgImJscmVkaXJlY3QiLCAiYmxsaW1pdCIsICJibG5hbWVzcGFjZSIsICJxdWVyeSIsICJsaW5rVGl0bGVzIiwgImJhY2tsaW5rc1F1ZXJ5IiwgIl9pdGVyYXRvcjYiLCAiX3N0ZXA2IiwgInJlZGlybGlua3MiLCAiX2l0ZXJhdG9yNyIsICJfc3RlcDciLCAiY29kZSIsICJyZWplY3QiLCAiY3VycmVudFRpdGxlcyIsICJyZXN0VGl0bGVzIiwgInRpdGxlcyIsICJfcXVlcnkkcmVkaXJlY3RzIiwgInRoZXNlUmVkaXJlY3RzIiwgIm1ldGEiLCAidWlwcm9wIiwgInVzZXJpbmZvIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInJ2cHJvcCIsICJyYXdQYWdlIiwgInBhZ2VzIiwgInJldmlzaW9ucyIsICJiYXNlVGltZVN0YW1wIiwgInRpbWVzdGFtcCIsICJzdGFydFRpbWVTdGFtcCIsICJzdGFydHRpbWVzdGFtcCIsICJlZGl0VG9rZW4iLCAidG9rZW5zIiwgImNzcmZ0b2tlbiIsICJhcmdzIiwgImRmZCIsICJjaGVja0FuZFNhdmUiLCAibWlsbGlzU2luY2VMYXN0IiwgIkRhdGUiLCAibm93IiwgInNldFRpbWVvdXQiLCAiYXBwbHkiLCAibWlub3JFZGl0IiwgImJvdEVkaXQiLCAidG9rZW4iLCAiYmFzZXRpbWVzdGFtcCIsICJ3YXRjaGxpc3QiLCAibWlub3IiLCAiYm90IiwgInBvc3QiXQp9Cg==

})();

/* </nowiki> */

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

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/global.js
var require_global = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/global.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/fails.js
var require_fails = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/fails.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/descriptors.js
var require_descriptors = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/descriptors.js"(exports, module2) {
    "use strict";
    var fails = require_fails();
    module2.exports = !fails(function() {
      return Object.defineProperty({}, 1, { get: function() {
        return 7;
      } })[1] !== 7;
    });
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/function-bind-native.js
var require_function_bind_native = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/function-bind-native.js"(exports, module2) {
    "use strict";
    var fails = require_fails();
    module2.exports = !fails(function() {
      var test = function() {
      }.bind();
      return typeof test != "function" || test.hasOwnProperty("prototype");
    });
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/function-call.js
var require_function_call = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/function-call.js"(exports, module2) {
    "use strict";
    var NATIVE_BIND = require_function_bind_native();
    var call = Function.prototype.call;
    module2.exports = NATIVE_BIND ? call.bind(call) : function() {
      return call.apply(call, arguments);
    };
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/object-property-is-enumerable.js
var require_object_property_is_enumerable = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/object-property-is-enumerable.js"(exports) {
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

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/create-property-descriptor.js
var require_create_property_descriptor = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/create-property-descriptor.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/function-uncurry-this.js
var require_function_uncurry_this = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/function-uncurry-this.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/classof-raw.js
var require_classof_raw = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/classof-raw.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var toString = uncurryThis({}.toString);
    var stringSlice = uncurryThis("".slice);
    module2.exports = function(it) {
      return stringSlice(toString(it), 8, -1);
    };
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/indexed-object.js
var require_indexed_object = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/indexed-object.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/is-null-or-undefined.js
var require_is_null_or_undefined = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/is-null-or-undefined.js"(exports, module2) {
    "use strict";
    module2.exports = function(it) {
      return it === null || it === void 0;
    };
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/require-object-coercible.js
var require_require_object_coercible = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/require-object-coercible.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/to-indexed-object.js
var require_to_indexed_object = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/to-indexed-object.js"(exports, module2) {
    "use strict";
    var IndexedObject = require_indexed_object();
    var requireObjectCoercible = require_require_object_coercible();
    module2.exports = function(it) {
      return IndexedObject(requireObjectCoercible(it));
    };
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/is-callable.js
var require_is_callable = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/is-callable.js"(exports, module2) {
    "use strict";
    var documentAll = typeof document == "object" && document.all;
    module2.exports = typeof documentAll == "undefined" && documentAll !== void 0 ? function(argument) {
      return typeof argument == "function" || argument === documentAll;
    } : function(argument) {
      return typeof argument == "function";
    };
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/is-object.js
var require_is_object = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/is-object.js"(exports, module2) {
    "use strict";
    var isCallable = require_is_callable();
    module2.exports = function(it) {
      return typeof it == "object" ? it !== null : isCallable(it);
    };
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/get-built-in.js
var require_get_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/get-built-in.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/object-is-prototype-of.js
var require_object_is_prototype_of = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/object-is-prototype-of.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    module2.exports = uncurryThis({}.isPrototypeOf);
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/engine-user-agent.js
var require_engine_user_agent = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/engine-user-agent.js"(exports, module2) {
    "use strict";
    module2.exports = typeof navigator != "undefined" && String(navigator.userAgent) || "";
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/engine-v8-version.js
var require_engine_v8_version = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/engine-v8-version.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/symbol-constructor-detection.js
var require_symbol_constructor_detection = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/symbol-constructor-detection.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/use-symbol-as-uid.js
var require_use_symbol_as_uid = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/use-symbol-as-uid.js"(exports, module2) {
    "use strict";
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    module2.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/is-symbol.js
var require_is_symbol = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/is-symbol.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/try-to-string.js
var require_try_to_string = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/try-to-string.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/a-callable.js
var require_a_callable = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/a-callable.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/get-method.js
var require_get_method = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/get-method.js"(exports, module2) {
    "use strict";
    var aCallable = require_a_callable();
    var isNullOrUndefined = require_is_null_or_undefined();
    module2.exports = function(V, P) {
      var func = V[P];
      return isNullOrUndefined(func) ? void 0 : aCallable(func);
    };
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/ordinary-to-primitive.js
var require_ordinary_to_primitive = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/ordinary-to-primitive.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/is-pure.js
var require_is_pure = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/is-pure.js"(exports, module2) {
    "use strict";
    module2.exports = false;
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/define-global-property.js
var require_define_global_property = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/define-global-property.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/shared-store.js
var require_shared_store = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/shared-store.js"(exports, module2) {
    "use strict";
    var global2 = require_global();
    var defineGlobalProperty = require_define_global_property();
    var SHARED = "__core-js_shared__";
    var store = global2[SHARED] || defineGlobalProperty(SHARED, {});
    module2.exports = store;
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/shared.js
var require_shared = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/shared.js"(exports, module2) {
    "use strict";
    var IS_PURE = require_is_pure();
    var store = require_shared_store();
    (module2.exports = function(key, value) {
      return store[key] || (store[key] = value !== void 0 ? value : {});
    })("versions", []).push({
      version: "3.35.0",
      mode: IS_PURE ? "pure" : "global",
      copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
      license: "https://github.com/zloirock/core-js/blob/v3.35.0/LICENSE",
      source: "https://github.com/zloirock/core-js"
    });
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/to-object.js
var require_to_object = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/to-object.js"(exports, module2) {
    "use strict";
    var requireObjectCoercible = require_require_object_coercible();
    var $Object = Object;
    module2.exports = function(argument) {
      return $Object(requireObjectCoercible(argument));
    };
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/has-own-property.js
var require_has_own_property = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/has-own-property.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var toObject = require_to_object();
    var hasOwnProperty = uncurryThis({}.hasOwnProperty);
    module2.exports = Object.hasOwn || function hasOwn(it, key) {
      return hasOwnProperty(toObject(it), key);
    };
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/uid.js
var require_uid = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/uid.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/well-known-symbol.js
var require_well_known_symbol = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/well-known-symbol.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/to-primitive.js
var require_to_primitive = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/to-primitive.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/to-property-key.js
var require_to_property_key = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/to-property-key.js"(exports, module2) {
    "use strict";
    var toPrimitive = require_to_primitive();
    var isSymbol = require_is_symbol();
    module2.exports = function(argument) {
      var key = toPrimitive(argument, "string");
      return isSymbol(key) ? key : key + "";
    };
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/document-create-element.js
var require_document_create_element = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/document-create-element.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/ie8-dom-define.js
var require_ie8_dom_define = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/ie8-dom-define.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/object-get-own-property-descriptor.js
var require_object_get_own_property_descriptor = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/object-get-own-property-descriptor.js"(exports) {
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

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/v8-prototype-define-bug.js
var require_v8_prototype_define_bug = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/v8-prototype-define-bug.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/an-object.js
var require_an_object = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/an-object.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/object-define-property.js
var require_object_define_property = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/object-define-property.js"(exports) {
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

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/create-non-enumerable-property.js
var require_create_non_enumerable_property = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/create-non-enumerable-property.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/function-name.js
var require_function_name = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/function-name.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/inspect-source.js
var require_inspect_source = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/inspect-source.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/weak-map-basic-detection.js
var require_weak_map_basic_detection = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/weak-map-basic-detection.js"(exports, module2) {
    "use strict";
    var global2 = require_global();
    var isCallable = require_is_callable();
    var WeakMap = global2.WeakMap;
    module2.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/shared-key.js
var require_shared_key = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/shared-key.js"(exports, module2) {
    "use strict";
    var shared = require_shared();
    var uid = require_uid();
    var keys = shared("keys");
    module2.exports = function(key) {
      return keys[key] || (keys[key] = uid(key));
    };
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/hidden-keys.js
var require_hidden_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/hidden-keys.js"(exports, module2) {
    "use strict";
    module2.exports = {};
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/internal-state.js
var require_internal_state = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/internal-state.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/make-built-in.js
var require_make_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/make-built-in.js"(exports, module2) {
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
        name = "[" + replace($String(name), /^Symbol\(([^)]*)\)/, "$1") + "]";
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

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/define-built-in.js
var require_define_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/define-built-in.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/math-trunc.js
var require_math_trunc = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/math-trunc.js"(exports, module2) {
    "use strict";
    var ceil = Math.ceil;
    var floor = Math.floor;
    module2.exports = Math.trunc || function trunc(x) {
      var n = +x;
      return (n > 0 ? floor : ceil)(n);
    };
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/to-integer-or-infinity.js
var require_to_integer_or_infinity = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/to-integer-or-infinity.js"(exports, module2) {
    "use strict";
    var trunc = require_math_trunc();
    module2.exports = function(argument) {
      var number = +argument;
      return number !== number || number === 0 ? 0 : trunc(number);
    };
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/to-absolute-index.js
var require_to_absolute_index = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/to-absolute-index.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/to-length.js
var require_to_length = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/to-length.js"(exports, module2) {
    "use strict";
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var min = Math.min;
    module2.exports = function(argument) {
      return argument > 0 ? min(toIntegerOrInfinity(argument), 9007199254740991) : 0;
    };
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/length-of-array-like.js
var require_length_of_array_like = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/length-of-array-like.js"(exports, module2) {
    "use strict";
    var toLength = require_to_length();
    module2.exports = function(obj) {
      return toLength(obj.length);
    };
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/array-includes.js
var require_array_includes = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/array-includes.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/object-keys-internal.js
var require_object_keys_internal = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/object-keys-internal.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/enum-bug-keys.js
var require_enum_bug_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/enum-bug-keys.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/object-get-own-property-names.js
var require_object_get_own_property_names = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/object-get-own-property-names.js"(exports) {
    "use strict";
    var internalObjectKeys = require_object_keys_internal();
    var enumBugKeys = require_enum_bug_keys();
    var hiddenKeys = enumBugKeys.concat("length", "prototype");
    exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
      return internalObjectKeys(O, hiddenKeys);
    };
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/object-get-own-property-symbols.js
var require_object_get_own_property_symbols = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/object-get-own-property-symbols.js"(exports) {
    "use strict";
    exports.f = Object.getOwnPropertySymbols;
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/own-keys.js
var require_own_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/own-keys.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/copy-constructor-properties.js
var require_copy_constructor_properties = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/copy-constructor-properties.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/is-forced.js
var require_is_forced = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/is-forced.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/export.js
var require_export = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/export.js"(exports, module2) {
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
        target = (global2[TARGET] || {}).prototype;
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

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/is-array.js
var require_is_array = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/is-array.js"(exports, module2) {
    "use strict";
    var classof = require_classof_raw();
    module2.exports = Array.isArray || function isArray(argument) {
      return classof(argument) === "Array";
    };
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/array-set-length.js
var require_array_set_length = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/array-set-length.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/does-not-exceed-safe-integer.js
var require_does_not_exceed_safe_integer = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/does-not-exceed-safe-integer.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/modules/es.array.push.js
var require_es_array_push = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/modules/es.array.push.js"() {
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

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/delete-property-or-throw.js
var require_delete_property_or_throw = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/internals/delete-property-or-throw.js"(exports, module2) {
    "use strict";
    var tryToString = require_try_to_string();
    var $TypeError = TypeError;
    module2.exports = function(O, P) {
      if (!delete O[P])
        throw new $TypeError("Cannot delete property " + tryToString(P) + " of " + tryToString(O));
    };
  }
});

// node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/modules/es.array.unshift.js
var require_es_array_unshift = __commonJS({
  "node_modules/.pnpm/core-js@3.35.0/node_modules/core-js/modules/es.array.unshift.js"() {
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mYWlscy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Rlc2NyaXB0b3JzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1jYWxsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NsYXNzb2YtcmF3LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtY2FsbGFibGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nZXQtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXN5bWJvbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RyeS10by1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWNhbGxhYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1Zy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1uYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9tYXRoLXRydW5jLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtYXJyYXkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1zZXQtbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9lcy1ub3QtZXhjZWVkLXNhZmUtaW50ZWdlci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5wdXNoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVsZXRlLXByb3BlcnR5LW9yLXRocm93LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LnVuc2hpZnQuanMiLCAic3JjL0Rpc2FtQXNzaXN0L21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0Rpc2FtQXNzaXN0L21vZHVsZXMvY29uZmlnLnRzIiwgInNyYy9EaXNhbUFzc2lzdC9tb2R1bGVzL2NvcmUuanMiLCAic3JjL0Rpc2FtQXNzaXN0L21vZHVsZXMvbWVzc2FnZXMuanMiLCAic3JjL0Rpc2FtQXNzaXN0L0Rpc2FtQXNzaXN0LmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIndXNlIHN0cmljdCc7XG52YXIgY2hlY2sgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICYmIGl0Lk1hdGggPT09IE1hdGggJiYgaXQ7XG59O1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxubW9kdWxlLmV4cG9ydHMgPVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZ2xvYmFsLXRoaXMgLS0gc2FmZVxuICBjaGVjayh0eXBlb2YgZ2xvYmFsVGhpcyA9PSAnb2JqZWN0JyAmJiBnbG9iYWxUaGlzKSB8fFxuICBjaGVjayh0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdykgfHxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAtLSBzYWZlXG4gIGNoZWNrKHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYpIHx8XG4gIGNoZWNrKHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsKSB8fFxuICBjaGVjayh0eXBlb2YgdGhpcyA9PSAnb2JqZWN0JyAmJiB0aGlzKSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmMgLS0gZmFsbGJhY2tcbiAgKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pKCkgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBEZXRlY3QgSUU4J3MgaW5jb21wbGV0ZSBkZWZpbmVQcm9wZXJ0eSBpbXBsZW1lbnRhdGlvblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sIDEsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pWzFdICE9PSA3O1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWZ1bmN0aW9uLXByb3RvdHlwZS1iaW5kIC0tIHNhZmVcbiAgdmFyIHRlc3QgPSAoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9KS5iaW5kKCk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gdHlwZW9mIHRlc3QgIT0gJ2Z1bmN0aW9uJyB8fCB0ZXN0Lmhhc093blByb3BlcnR5KCdwcm90b3R5cGUnKTtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgY2FsbCA9IEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9CSU5EID8gY2FsbC5iaW5kKGNhbGwpIDogZnVuY3Rpb24gKCkge1xuICByZXR1cm4gY2FsbC5hcHBseShjYWxsLCBhcmd1bWVudHMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gTmFzaG9ybiB+IEpESzggYnVnXG52YXIgTkFTSE9STl9CVUcgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgJiYgISRwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHsgMTogMiB9LCAxKTtcblxuLy8gYE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGVgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QucHJvdG90eXBlLnByb3BlcnR5aXNlbnVtZXJhYmxlXG5leHBvcnRzLmYgPSBOQVNIT1JOX0JVRyA/IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKFYpIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGhpcywgVik7XG4gIHJldHVybiAhIWRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci5lbnVtZXJhYmxlO1xufSA6ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgY2FsbCA9IEZ1bmN0aW9uUHJvdG90eXBlLmNhbGw7XG52YXIgdW5jdXJyeVRoaXNXaXRoQmluZCA9IE5BVElWRV9CSU5EICYmIEZ1bmN0aW9uUHJvdG90eXBlLmJpbmQuYmluZChjYWxsLCBjYWxsKTtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfQklORCA/IHVuY3VycnlUaGlzV2l0aEJpbmQgOiBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY2FsbC5hcHBseShmbiwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG52YXIgdG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyh7fS50b1N0cmluZyk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBzdHJpbmdTbGljZSh0b1N0cmluZyhpdCksIDgsIC0xKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcbnZhciBzcGxpdCA9IHVuY3VycnlUaGlzKCcnLnNwbGl0KTtcblxuLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3Ncbm1vZHVsZS5leHBvcnRzID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyB0aHJvd3MgYW4gZXJyb3IgaW4gcmhpbm8sIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9yaGluby9pc3N1ZXMvMzQ2XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gISRPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKTtcbn0pID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjbGFzc29mKGl0KSA9PT0gJ1N0cmluZycgPyBzcGxpdChpdCwgJycpIDogJE9iamVjdChpdCk7XG59IDogJE9iamVjdDtcbiIsICIndXNlIHN0cmljdCc7XG4vLyB3ZSBjYW4ndCB1c2UganVzdCBgaXQgPT0gbnVsbGAgc2luY2Ugb2YgYGRvY3VtZW50LmFsbGAgc3BlY2lhbCBjYXNlXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLUlzSFRNTEREQS1pbnRlcm5hbC1zbG90LWFlY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID09PSBudWxsIHx8IGl0ID09PSB1bmRlZmluZWQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYFJlcXVpcmVPYmplY3RDb2VyY2libGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZXF1aXJlb2JqZWN0Y29lcmNpYmxlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXNOdWxsT3JVbmRlZmluZWQoaXQpKSB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJbmRleGVkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoaXQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1Jc0hUTUxEREEtaW50ZXJuYWwtc2xvdFxudmFyIGRvY3VtZW50QWxsID0gdHlwZW9mIGRvY3VtZW50ID09ICdvYmplY3QnICYmIGRvY3VtZW50LmFsbDtcblxuLy8gYElzQ2FsbGFibGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc2NhbGxhYmxlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9uby10eXBlb2YtdW5kZWZpbmVkIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBkb2N1bWVudEFsbCA9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudEFsbCAhPT0gdW5kZWZpbmVkID8gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJyB8fCBhcmd1bWVudCA9PT0gZG9jdW1lbnRBbGw7XG59IDogZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogaXNDYWxsYWJsZShpdCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgYUZ1bmN0aW9uID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBpc0NhbGxhYmxlKGFyZ3VtZW50KSA/IGFyZ3VtZW50IDogdW5kZWZpbmVkO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZXNwYWNlLCBtZXRob2QpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPCAyID8gYUZ1bmN0aW9uKGdsb2JhbFtuYW1lc3BhY2VdKSA6IGdsb2JhbFtuYW1lc3BhY2VdICYmIGdsb2JhbFtuYW1lc3BhY2VdW21ldGhvZF07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB1bmN1cnJ5VGhpcyh7fS5pc1Byb3RvdHlwZU9mKTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBuYXZpZ2F0b3IgIT0gJ3VuZGVmaW5lZCcgJiYgU3RyaW5nKG5hdmlnYXRvci51c2VyQWdlbnQpIHx8ICcnO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50Jyk7XG5cbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgRGVubyA9IGdsb2JhbC5EZW5vO1xudmFyIHZlcnNpb25zID0gcHJvY2VzcyAmJiBwcm9jZXNzLnZlcnNpb25zIHx8IERlbm8gJiYgRGVuby52ZXJzaW9uO1xudmFyIHY4ID0gdmVyc2lvbnMgJiYgdmVyc2lvbnMudjg7XG52YXIgbWF0Y2gsIHZlcnNpb247XG5cbmlmICh2OCkge1xuICBtYXRjaCA9IHY4LnNwbGl0KCcuJyk7XG4gIC8vIGluIG9sZCBDaHJvbWUsIHZlcnNpb25zIG9mIFY4IGlzbid0IFY4ID0gQ2hyb21lIC8gMTBcbiAgLy8gYnV0IHRoZWlyIGNvcnJlY3QgdmVyc2lvbnMgYXJlIG5vdCBpbnRlcmVzdGluZyBmb3IgdXNcbiAgdmVyc2lvbiA9IG1hdGNoWzBdID4gMCAmJiBtYXRjaFswXSA8IDQgPyAxIDogKyhtYXRjaFswXSArIG1hdGNoWzFdKTtcbn1cblxuLy8gQnJvd3NlckZTIE5vZGVKUyBgcHJvY2Vzc2AgcG9seWZpbGwgaW5jb3JyZWN0bHkgc2V0IGAudjhgIHRvIGAwLjBgXG4vLyBzbyBjaGVjayBgdXNlckFnZW50YCBldmVuIGlmIGAudjhgIGV4aXN0cywgYnV0IDBcbmlmICghdmVyc2lvbiAmJiB1c2VyQWdlbnQpIHtcbiAgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2goL0VkZ2VcXC8oXFxkKykvKTtcbiAgaWYgKCFtYXRjaCB8fCBtYXRjaFsxXSA+PSA3NCkge1xuICAgIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9DaHJvbWVcXC8oXFxkKykvKTtcbiAgICBpZiAobWF0Y2gpIHZlcnNpb24gPSArbWF0Y2hbMV07XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2ZXJzaW9uO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLXN5bWJvbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZyAqL1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24nKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcblxudmFyICRTdHJpbmcgPSBnbG9iYWwuU3RyaW5nO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5c3ltYm9scyAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xubW9kdWxlLmV4cG9ydHMgPSAhIU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN5bWJvbCA9IFN5bWJvbCgnc3ltYm9sIGRldGVjdGlvbicpO1xuICAvLyBDaHJvbWUgMzggU3ltYm9sIGhhcyBpbmNvcnJlY3QgdG9TdHJpbmcgY29udmVyc2lvblxuICAvLyBgZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzYCBwb2x5ZmlsbCBzeW1ib2xzIGNvbnZlcnRlZCB0byBvYmplY3QgYXJlIG5vdCBTeW1ib2wgaW5zdGFuY2VzXG4gIC8vIG5iOiBEbyBub3QgY2FsbCBgU3RyaW5nYCBkaXJlY3RseSB0byBhdm9pZCB0aGlzIGJlaW5nIG9wdGltaXplZCBvdXQgdG8gYHN5bWJvbCsnJ2Agd2hpY2ggd2lsbCxcbiAgLy8gb2YgY291cnNlLCBmYWlsLlxuICByZXR1cm4gISRTdHJpbmcoc3ltYm9sKSB8fCAhKE9iamVjdChzeW1ib2wpIGluc3RhbmNlb2YgU3ltYm9sKSB8fFxuICAgIC8vIENocm9tZSAzOC00MCBzeW1ib2xzIGFyZSBub3QgaW5oZXJpdGVkIGZyb20gRE9NIGNvbGxlY3Rpb25zIHByb3RvdHlwZXMgdG8gaW5zdGFuY2VzXG4gICAgIVN5bWJvbC5zaGFtICYmIFY4X1ZFUlNJT04gJiYgVjhfVkVSU0lPTiA8IDQxO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tc3ltYm9sIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zeW1ib2wtY29uc3RydWN0b3ItZGV0ZWN0aW9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX1NZTUJPTFxuICAmJiAhU3ltYm9sLnNoYW1cbiAgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mJyk7XG52YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbm1vZHVsZS5leHBvcnRzID0gVVNFX1NZTUJPTF9BU19VSUQgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyICRTeW1ib2wgPSBnZXRCdWlsdEluKCdTeW1ib2wnKTtcbiAgcmV0dXJuIGlzQ2FsbGFibGUoJFN5bWJvbCkgJiYgaXNQcm90b3R5cGVPZigkU3ltYm9sLnByb3RvdHlwZSwgJE9iamVjdChpdCkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJFN0cmluZyA9IFN0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gJFN0cmluZyhhcmd1bWVudCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuICdPYmplY3QnO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgdHJ5VG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdHJ5LXRvLXN0cmluZycpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYEFzc2VydDogSXNDYWxsYWJsZShhcmd1bWVudCkgaXMgdHJ1ZWBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIGlmIChpc0NhbGxhYmxlKGFyZ3VtZW50KSkgcmV0dXJuIGFyZ3VtZW50O1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcih0cnlUb1N0cmluZyhhcmd1bWVudCkgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkJyk7XG5cbi8vIGBHZXRNZXRob2RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1nZXRtZXRob2Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFYsIFApIHtcbiAgdmFyIGZ1bmMgPSBWW1BdO1xuICByZXR1cm4gaXNOdWxsT3JVbmRlZmluZWQoZnVuYykgPyB1bmRlZmluZWQgOiBhQ2FsbGFibGUoZnVuYyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgT3JkaW5hcnlUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9yZGluYXJ5dG9wcmltaXRpdmVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBwcmVmKSB7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAocHJlZiA9PT0gJ3N0cmluZycgJiYgaXNDYWxsYWJsZShmbiA9IGlucHV0LnRvU3RyaW5nKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKGlzQ2FsbGFibGUoZm4gPSBpbnB1dC52YWx1ZU9mKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHByZWYgIT09ICdzdHJpbmcnICYmIGlzQ2FsbGFibGUoZm4gPSBpbnB1dC50b1N0cmluZykgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHRyeSB7XG4gICAgZGVmaW5lUHJvcGVydHkoZ2xvYmFsLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGdsb2JhbFtrZXldID0gdmFsdWU7XG4gIH0gcmV0dXJuIHZhbHVlO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcblxudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgZGVmaW5lR2xvYmFsUHJvcGVydHkoU0hBUkVELCB7fSk7XG5cbm1vZHVsZS5leHBvcnRzID0gc3RvcmU7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xudmFyIHN0b3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHt9KTtcbn0pKCd2ZXJzaW9ucycsIFtdKS5wdXNoKHtcbiAgdmVyc2lvbjogJzMuMzUuMCcsXG4gIG1vZGU6IElTX1BVUkUgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAxNC0yMDIzIERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJyxcbiAgbGljZW5zZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2Jsb2IvdjMuMzUuMC9MSUNFTlNFJyxcbiAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMnXG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbi8vIGBUb09iamVjdGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvb2JqZWN0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gJE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcblxudmFyIGhhc093blByb3BlcnR5ID0gdW5jdXJyeVRoaXMoe30uaGFzT3duUHJvcGVydHkpO1xuXG4vLyBgSGFzT3duUHJvcGVydHlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1oYXNvd25wcm9wZXJ0eVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1oYXNvd24gLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuaGFzT3duIHx8IGZ1bmN0aW9uIGhhc093bihpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eSh0b09iamVjdChpdCksIGtleSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxudmFyIGlkID0gMDtcbnZhciBwb3N0Zml4ID0gTWF0aC5yYW5kb20oKTtcbnZhciB0b1N0cmluZyA9IHVuY3VycnlUaGlzKDEuMC50b1N0cmluZyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnICsgKGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXkpICsgJylfJyArIHRvU3RyaW5nKCsraWQgKyBwb3N0Zml4LCAzNik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3ltYm9sLWNvbnN0cnVjdG9yLWRldGVjdGlvbicpO1xudmFyIFVTRV9TWU1CT0xfQVNfVUlEID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkJyk7XG5cbnZhciBTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyIFdlbGxLbm93blN5bWJvbHNTdG9yZSA9IHNoYXJlZCgnd2tzJyk7XG52YXIgY3JlYXRlV2VsbEtub3duU3ltYm9sID0gVVNFX1NZTUJPTF9BU19VSUQgPyBTeW1ib2xbJ2ZvciddIHx8IFN5bWJvbCA6IFN5bWJvbCAmJiBTeW1ib2wud2l0aG91dFNldHRlciB8fCB1aWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgaWYgKCFoYXNPd24oV2VsbEtub3duU3ltYm9sc1N0b3JlLCBuYW1lKSkge1xuICAgIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXSA9IE5BVElWRV9TWU1CT0wgJiYgaGFzT3duKFN5bWJvbCwgbmFtZSlcbiAgICAgID8gU3ltYm9sW25hbWVdXG4gICAgICA6IGNyZWF0ZVdlbGxLbm93blN5bWJvbCgnU3ltYm9sLicgKyBuYW1lKTtcbiAgfSByZXR1cm4gV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciBvcmRpbmFyeVRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZScpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbnZhciBUT19QUklNSVRJVkUgPSB3ZWxsS25vd25TeW1ib2woJ3RvUHJpbWl0aXZlJyk7XG5cbi8vIGBUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJpbWl0aXZlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnB1dCwgcHJlZikge1xuICBpZiAoIWlzT2JqZWN0KGlucHV0KSB8fCBpc1N5bWJvbChpbnB1dCkpIHJldHVybiBpbnB1dDtcbiAgdmFyIGV4b3RpY1RvUHJpbSA9IGdldE1ldGhvZChpbnB1dCwgVE9fUFJJTUlUSVZFKTtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKGV4b3RpY1RvUHJpbSkge1xuICAgIGlmIChwcmVmID09PSB1bmRlZmluZWQpIHByZWYgPSAnZGVmYXVsdCc7XG4gICAgcmVzdWx0ID0gY2FsbChleG90aWNUb1ByaW0sIGlucHV0LCBwcmVmKTtcbiAgICBpZiAoIWlzT2JqZWN0KHJlc3VsdCkgfHwgaXNTeW1ib2wocmVzdWx0KSkgcmV0dXJuIHJlc3VsdDtcbiAgICB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbiAgfVxuICBpZiAocHJlZiA9PT0gdW5kZWZpbmVkKSBwcmVmID0gJ251bWJlcic7XG4gIHJldHVybiBvcmRpbmFyeVRvUHJpbWl0aXZlKGlucHV0LCBwcmVmKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xudmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXN5bWJvbCcpO1xuXG4vLyBgVG9Qcm9wZXJ0eUtleWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJvcGVydHlrZXlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBrZXkgPSB0b1ByaW1pdGl2ZShhcmd1bWVudCwgJ3N0cmluZycpO1xuICByZXR1cm4gaXNTeW1ib2woa2V5KSA/IGtleSA6IGtleSArICcnO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgZG9jdW1lbnQgPSBnbG9iYWwuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBFWElTVFMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBFWElTVFMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcblxuLy8gVGhhbmtzIHRvIElFOCBmb3IgaXRzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3JlYXRlRWxlbWVudCgnZGl2JyksICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfVxuICB9KS5hICE9PSA3O1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0luZGV4ZWRPYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhc093bihPLCBQKSkgcmV0dXJuIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcighY2FsbChwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZS5mLCBPLCBQKSwgT1tQXSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbi8vIFY4IH4gQ2hyb21lIDM2LVxuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzMzNFxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0sICdwcm90b3R5cGUnLCB7XG4gICAgdmFsdWU6IDQyLFxuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KS5wcm90b3R5cGUgIT09IDQyO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgJFN0cmluZyA9IFN0cmluZztcbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgQXNzZXJ0OiBUeXBlKGFyZ3VtZW50KSBpcyBPYmplY3RgXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoaXNPYmplY3QoYXJndW1lbnQpKSByZXR1cm4gYXJndW1lbnQ7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKCRTdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgYW4gb2JqZWN0Jyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG52YXIgVjhfUFJPVE9UWVBFX0RFRklORV9CVUcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdjgtcHJvdG90eXBlLWRlZmluZS1idWcnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleScpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBFTlVNRVJBQkxFID0gJ2VudW1lcmFibGUnO1xudmFyIENPTkZJR1VSQUJMRSA9ICdjb25maWd1cmFibGUnO1xudmFyIFdSSVRBQkxFID0gJ3dyaXRhYmxlJztcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0eWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0eVxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgPyBWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA/IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKHR5cGVvZiBPID09PSAnZnVuY3Rpb24nICYmIFAgPT09ICdwcm90b3R5cGUnICYmICd2YWx1ZScgaW4gQXR0cmlidXRlcyAmJiBXUklUQUJMRSBpbiBBdHRyaWJ1dGVzICYmICFBdHRyaWJ1dGVzW1dSSVRBQkxFXSkge1xuICAgIHZhciBjdXJyZW50ID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKTtcbiAgICBpZiAoY3VycmVudCAmJiBjdXJyZW50W1dSSVRBQkxFXSkge1xuICAgICAgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gICAgICBBdHRyaWJ1dGVzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IENPTkZJR1VSQUJMRSBpbiBBdHRyaWJ1dGVzID8gQXR0cmlidXRlc1tDT05GSUdVUkFCTEVdIDogY3VycmVudFtDT05GSUdVUkFCTEVdLFxuICAgICAgICBlbnVtZXJhYmxlOiBFTlVNRVJBQkxFIGluIEF0dHJpYnV0ZXMgPyBBdHRyaWJ1dGVzW0VOVU1FUkFCTEVdIDogY3VycmVudFtFTlVNRVJBQkxFXSxcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlXG4gICAgICB9O1xuICAgIH1cbiAgfSByZXR1cm4gJGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xufSA6ICRkZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiAkZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIGtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0RGVzY3JpcHRvciA9IERFU0NSSVBUT1JTICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbnZhciBFWElTVFMgPSBoYXNPd24oRnVuY3Rpb25Qcm90b3R5cGUsICduYW1lJyk7XG4vLyBhZGRpdGlvbmFsIHByb3RlY3Rpb24gZnJvbSBtaW5pZmllZCAvIG1hbmdsZWQgLyBkcm9wcGVkIGZ1bmN0aW9uIG5hbWVzXG52YXIgUFJPUEVSID0gRVhJU1RTICYmIChmdW5jdGlvbiBzb21ldGhpbmcoKSB7IC8qIGVtcHR5ICovIH0pLm5hbWUgPT09ICdzb21ldGhpbmcnO1xudmFyIENPTkZJR1VSQUJMRSA9IEVYSVNUUyAmJiAoIURFU0NSSVBUT1JTIHx8IChERVNDUklQVE9SUyAmJiBnZXREZXNjcmlwdG9yKEZ1bmN0aW9uUHJvdG90eXBlLCAnbmFtZScpLmNvbmZpZ3VyYWJsZSkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgRVhJU1RTOiBFWElTVFMsXG4gIFBST1BFUjogUFJPUEVSLFxuICBDT05GSUdVUkFCTEU6IENPTkZJR1VSQUJMRVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHN0b3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xuXG52YXIgZnVuY3Rpb25Ub1N0cmluZyA9IHVuY3VycnlUaGlzKEZ1bmN0aW9uLnRvU3RyaW5nKTtcblxuLy8gdGhpcyBoZWxwZXIgYnJva2VuIGluIGBjb3JlLWpzQDMuNC4xLTMuNC40YCwgc28gd2UgY2FuJ3QgdXNlIGBzaGFyZWRgIGhlbHBlclxuaWYgKCFpc0NhbGxhYmxlKHN0b3JlLmluc3BlY3RTb3VyY2UpKSB7XG4gIHN0b3JlLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb25Ub1N0cmluZyhpdCk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RvcmUuaW5zcGVjdFNvdXJjZTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIFdlYWtNYXAgPSBnbG9iYWwuV2Vha01hcDtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0NhbGxhYmxlKFdlYWtNYXApICYmIC9uYXRpdmUgY29kZS8udGVzdChTdHJpbmcoV2Vha01hcCkpO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xuXG52YXIga2V5cyA9IHNoYXJlZCgna2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIGtleXNba2V5XSB8fCAoa2V5c1trZXldID0gdWlkKGtleSkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfV0VBS19NQVAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2Vhay1tYXAtYmFzaWMtZGV0ZWN0aW9uJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcbnZhciBzaGFyZWRLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLWtleScpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcblxudmFyIE9CSkVDVF9BTFJFQURZX0lOSVRJQUxJWkVEID0gJ09iamVjdCBhbHJlYWR5IGluaXRpYWxpemVkJztcbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xudmFyIFdlYWtNYXAgPSBnbG9iYWwuV2Vha01hcDtcbnZhciBzZXQsIGdldCwgaGFzO1xuXG52YXIgZW5mb3JjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaGFzKGl0KSA/IGdldChpdCkgOiBzZXQoaXQsIHt9KTtcbn07XG5cbnZhciBnZXR0ZXJGb3IgPSBmdW5jdGlvbiAoVFlQRSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGl0KSB7XG4gICAgdmFyIHN0YXRlO1xuICAgIGlmICghaXNPYmplY3QoaXQpIHx8IChzdGF0ZSA9IGdldChpdCkpLnR5cGUgIT09IFRZUEUpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0luY29tcGF0aWJsZSByZWNlaXZlciwgJyArIFRZUEUgKyAnIHJlcXVpcmVkJyk7XG4gICAgfSByZXR1cm4gc3RhdGU7XG4gIH07XG59O1xuXG5pZiAoTkFUSVZFX1dFQUtfTUFQIHx8IHNoYXJlZC5zdGF0ZSkge1xuICB2YXIgc3RvcmUgPSBzaGFyZWQuc3RhdGUgfHwgKHNoYXJlZC5zdGF0ZSA9IG5ldyBXZWFrTWFwKCkpO1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1zZWxmLWFzc2lnbiAtLSBwcm90b3R5cGUgbWV0aG9kcyBwcm90ZWN0aW9uICovXG4gIHN0b3JlLmdldCA9IHN0b3JlLmdldDtcbiAgc3RvcmUuaGFzID0gc3RvcmUuaGFzO1xuICBzdG9yZS5zZXQgPSBzdG9yZS5zZXQ7XG4gIC8qIGVzbGludC1lbmFibGUgbm8tc2VsZi1hc3NpZ24gLS0gcHJvdG90eXBlIG1ldGhvZHMgcHJvdGVjdGlvbiAqL1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgaWYgKHN0b3JlLmhhcyhpdCkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIHN0b3JlLnNldChpdCwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHN0b3JlLmdldChpdCkgfHwge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBzdG9yZS5oYXMoaXQpO1xuICB9O1xufSBlbHNlIHtcbiAgdmFyIFNUQVRFID0gc2hhcmVkS2V5KCdzdGF0ZScpO1xuICBoaWRkZW5LZXlzW1NUQVRFXSA9IHRydWU7XG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICBpZiAoaGFzT3duKGl0LCBTVEFURSkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShpdCwgU1RBVEUsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBoYXNPd24oaXQsIFNUQVRFKSA/IGl0W1NUQVRFXSA6IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaGFzT3duKGl0LCBTVEFURSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldCxcbiAgZ2V0OiBnZXQsXG4gIGhhczogaGFzLFxuICBlbmZvcmNlOiBlbmZvcmNlLFxuICBnZXR0ZXJGb3I6IGdldHRlckZvclxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIENPTkZJR1VSQUJMRV9GVU5DVElPTl9OQU1FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLW5hbWUnKS5DT05GSUdVUkFCTEU7XG52YXIgaW5zcGVjdFNvdXJjZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnNwZWN0LXNvdXJjZScpO1xudmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUnKTtcblxudmFyIGVuZm9yY2VJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5lbmZvcmNlO1xudmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldDtcbnZhciAkU3RyaW5nID0gU3RyaW5nO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG52YXIgcmVwbGFjZSA9IHVuY3VycnlUaGlzKCcnLnJlcGxhY2UpO1xudmFyIGpvaW4gPSB1bmN1cnJ5VGhpcyhbXS5qb2luKTtcblxudmFyIENPTkZJR1VSQUJMRV9MRU5HVEggPSBERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHkoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9LCAnbGVuZ3RoJywgeyB2YWx1ZTogOCB9KS5sZW5ndGggIT09IDg7XG59KTtcblxudmFyIFRFTVBMQVRFID0gU3RyaW5nKFN0cmluZykuc3BsaXQoJ1N0cmluZycpO1xuXG52YXIgbWFrZUJ1aWx0SW4gPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSwgbmFtZSwgb3B0aW9ucykge1xuICBpZiAoc3RyaW5nU2xpY2UoJFN0cmluZyhuYW1lKSwgMCwgNykgPT09ICdTeW1ib2woJykge1xuICAgIG5hbWUgPSAnWycgKyByZXBsYWNlKCRTdHJpbmcobmFtZSksIC9eU3ltYm9sXFwoKFteKV0qKVxcKS8sICckMScpICsgJ10nO1xuICB9XG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZ2V0dGVyKSBuYW1lID0gJ2dldCAnICsgbmFtZTtcbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5zZXR0ZXIpIG5hbWUgPSAnc2V0ICcgKyBuYW1lO1xuICBpZiAoIWhhc093bih2YWx1ZSwgJ25hbWUnKSB8fCAoQ09ORklHVVJBQkxFX0ZVTkNUSU9OX05BTUUgJiYgdmFsdWUubmFtZSAhPT0gbmFtZSkpIHtcbiAgICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5KHZhbHVlLCAnbmFtZScsIHsgdmFsdWU6IG5hbWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KTtcbiAgICBlbHNlIHZhbHVlLm5hbWUgPSBuYW1lO1xuICB9XG4gIGlmIChDT05GSUdVUkFCTEVfTEVOR1RIICYmIG9wdGlvbnMgJiYgaGFzT3duKG9wdGlvbnMsICdhcml0eScpICYmIHZhbHVlLmxlbmd0aCAhPT0gb3B0aW9ucy5hcml0eSkge1xuICAgIGRlZmluZVByb3BlcnR5KHZhbHVlLCAnbGVuZ3RoJywgeyB2YWx1ZTogb3B0aW9ucy5hcml0eSB9KTtcbiAgfVxuICB0cnkge1xuICAgIGlmIChvcHRpb25zICYmIGhhc093bihvcHRpb25zLCAnY29uc3RydWN0b3InKSAmJiBvcHRpb25zLmNvbnN0cnVjdG9yKSB7XG4gICAgICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5KHZhbHVlLCAncHJvdG90eXBlJywgeyB3cml0YWJsZTogZmFsc2UgfSk7XG4gICAgLy8gaW4gVjggfiBDaHJvbWUgNTMsIHByb3RvdHlwZXMgb2Ygc29tZSBtZXRob2RzLCBsaWtlIGBBcnJheS5wcm90b3R5cGUudmFsdWVzYCwgYXJlIG5vbi13cml0YWJsZVxuICAgIH0gZWxzZSBpZiAodmFsdWUucHJvdG90eXBlKSB2YWx1ZS5wcm90b3R5cGUgPSB1bmRlZmluZWQ7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgdmFyIHN0YXRlID0gZW5mb3JjZUludGVybmFsU3RhdGUodmFsdWUpO1xuICBpZiAoIWhhc093bihzdGF0ZSwgJ3NvdXJjZScpKSB7XG4gICAgc3RhdGUuc291cmNlID0gam9pbihURU1QTEFURSwgdHlwZW9mIG5hbWUgPT0gJ3N0cmluZycgPyBuYW1lIDogJycpO1xuICB9IHJldHVybiB2YWx1ZTtcbn07XG5cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWV4dGVuZC1uYXRpdmUgLS0gcmVxdWlyZWRcbkZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZyA9IG1ha2VCdWlsdEluKGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gaXNDYWxsYWJsZSh0aGlzKSAmJiBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpLnNvdXJjZSB8fCBpbnNwZWN0U291cmNlKHRoaXMpO1xufSwgJ3RvU3RyaW5nJyk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgbWFrZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWFrZS1idWlsdC1pbicpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywga2V5LCB2YWx1ZSwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcbiAgdmFyIHNpbXBsZSA9IG9wdGlvbnMuZW51bWVyYWJsZTtcbiAgdmFyIG5hbWUgPSBvcHRpb25zLm5hbWUgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubmFtZSA6IGtleTtcbiAgaWYgKGlzQ2FsbGFibGUodmFsdWUpKSBtYWtlQnVpbHRJbih2YWx1ZSwgbmFtZSwgb3B0aW9ucyk7XG4gIGlmIChvcHRpb25zLmdsb2JhbCkge1xuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2UgZGVmaW5lR2xvYmFsUHJvcGVydHkoa2V5LCB2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghb3B0aW9ucy51bnNhZmUpIGRlbGV0ZSBPW2tleV07XG4gICAgICBlbHNlIGlmIChPW2tleV0pIHNpbXBsZSA9IHRydWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2UgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihPLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiAhb3B0aW9ucy5ub25Db25maWd1cmFibGUsXG4gICAgICB3cml0YWJsZTogIW9wdGlvbnMubm9uV3JpdGFibGVcbiAgICB9KTtcbiAgfSByZXR1cm4gTztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuXG4vLyBgTWF0aC50cnVuY2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW1hdGgudHJ1bmNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1tYXRoLXRydW5jIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gTWF0aC50cnVuYyB8fCBmdW5jdGlvbiB0cnVuYyh4KSB7XG4gIHZhciBuID0gK3g7XG4gIHJldHVybiAobiA+IDAgPyBmbG9vciA6IGNlaWwpKG4pO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdHJ1bmMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWF0aC10cnVuYycpO1xuXG4vLyBgVG9JbnRlZ2VyT3JJbmZpbml0eWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvaW50ZWdlcm9yaW5maW5pdHlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBudW1iZXIgPSArYXJndW1lbnQ7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gIHJldHVybiBudW1iZXIgIT09IG51bWJlciB8fCBudW1iZXIgPT09IDAgPyAwIDogdHJ1bmMobnVtYmVyKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xuXG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5cbi8vIEhlbHBlciBmb3IgYSBwb3B1bGFyIHJlcGVhdGluZyBjYXNlIG9mIHRoZSBzcGVjOlxuLy8gTGV0IGludGVnZXIgYmUgPyBUb0ludGVnZXIoaW5kZXgpLlxuLy8gSWYgaW50ZWdlciA8IDAsIGxldCByZXN1bHQgYmUgbWF4KChsZW5ndGggKyBpbnRlZ2VyKSwgMCk7IGVsc2UgbGV0IHJlc3VsdCBiZSBtaW4oaW50ZWdlciwgbGVuZ3RoKS5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgdmFyIGludGVnZXIgPSB0b0ludGVnZXJPckluZmluaXR5KGluZGV4KTtcbiAgcmV0dXJuIGludGVnZXIgPCAwID8gbWF4KGludGVnZXIgKyBsZW5ndGgsIDApIDogbWluKGludGVnZXIsIGxlbmd0aCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHknKTtcblxudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBgVG9MZW5ndGhgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b2xlbmd0aFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGFyZ3VtZW50ID4gMCA/IG1pbih0b0ludGVnZXJPckluZmluaXR5KGFyZ3VtZW50KSwgMHgxRkZGRkZGRkZGRkZGRikgOiAwOyAvLyAyICoqIDUzIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcblxuLy8gYExlbmd0aE9mQXJyYXlMaWtlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbGVuZ3Rob2ZhcnJheWxpa2Vcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdG9MZW5ndGgob2JqLmxlbmd0aCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tYWJzb2x1dGUtaW5kZXgnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnsgaW5kZXhPZiwgaW5jbHVkZXMgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSBsZW5ndGhPZkFycmF5TGlrZShPKTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT09IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gICAgICBpZiAodmFsdWUgIT09IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICBpZiAoKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pICYmIE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBBcnJheS5wcm90b3R5cGUuaW5jbHVkZXNgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmNsdWRlc1xuICBpbmNsdWRlczogY3JlYXRlTWV0aG9kKHRydWUpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmluZGV4T2ZgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmRleG9mXG4gIGluZGV4T2Y6IGNyZWF0ZU1ldGhvZChmYWxzZSlcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgaW5kZXhPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pbmNsdWRlcycpLmluZGV4T2Y7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xuXG52YXIgcHVzaCA9IHVuY3VycnlUaGlzKFtdLnB1c2gpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSAhaGFzT3duKGhpZGRlbktleXMsIGtleSkgJiYgaGFzT3duKE8sIGtleSkgJiYgcHVzaChyZXN1bHQsIGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXNPd24oTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+aW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcHVzaChyZXN1bHQsIGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gSUU4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IFtcbiAgJ2NvbnN0cnVjdG9yJyxcbiAgJ2hhc093blByb3BlcnR5JyxcbiAgJ2lzUHJvdG90eXBlT2YnLFxuICAncHJvcGVydHlJc0VudW1lcmFibGUnLFxuICAndG9Mb2NhbGVTdHJpbmcnLFxuICAndG9TdHJpbmcnLFxuICAndmFsdWVPZidcbl07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGludGVybmFsT2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcblxudmFyIGhpZGRlbktleXMgPSBlbnVtQnVnS2V5cy5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5bmFtZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHluYW1lcyAtLSBzYWZlXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuIGludGVybmFsT2JqZWN0S2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eXN5bWJvbHMgLS0gc2FmZVxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcblxudmFyIGNvbmNhdCA9IHVuY3VycnlUaGlzKFtdLmNvbmNhdCk7XG5cbi8vIGFsbCBvYmplY3Qga2V5cywgaW5jbHVkZXMgbm9uLWVudW1lcmFibGUgYW5kIHN5bWJvbHNcbm1vZHVsZS5leHBvcnRzID0gZ2V0QnVpbHRJbignUmVmbGVjdCcsICdvd25LZXlzJykgfHwgZnVuY3Rpb24gb3duS2V5cyhpdCkge1xuICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUuZihhbk9iamVjdChpdCkpO1xuICB2YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlLmY7XG4gIHJldHVybiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPyBjb25jYXQoa2V5cywgZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSkgOiBrZXlzO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBvd25LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL293bi1rZXlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc291cmNlLCBleGNlcHRpb25zKSB7XG4gIHZhciBrZXlzID0gb3duS2V5cyhzb3VyY2UpO1xuICB2YXIgZGVmaW5lUHJvcGVydHkgPSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mO1xuICB2YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlLmY7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIGlmICghaGFzT3duKHRhcmdldCwga2V5KSAmJiAhKGV4Y2VwdGlvbnMgJiYgaGFzT3duKGV4Y2VwdGlvbnMsIGtleSkpKSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgfVxuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIHJlcGxhY2VtZW50ID0gLyN8XFwucHJvdG90eXBlXFwuLztcblxudmFyIGlzRm9yY2VkID0gZnVuY3Rpb24gKGZlYXR1cmUsIGRldGVjdGlvbikge1xuICB2YXIgdmFsdWUgPSBkYXRhW25vcm1hbGl6ZShmZWF0dXJlKV07XG4gIHJldHVybiB2YWx1ZSA9PT0gUE9MWUZJTEwgPyB0cnVlXG4gICAgOiB2YWx1ZSA9PT0gTkFUSVZFID8gZmFsc2VcbiAgICA6IGlzQ2FsbGFibGUoZGV0ZWN0aW9uKSA/IGZhaWxzKGRldGVjdGlvbilcbiAgICA6ICEhZGV0ZWN0aW9uO1xufTtcblxudmFyIG5vcm1hbGl6ZSA9IGlzRm9yY2VkLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgcmV0dXJuIFN0cmluZyhzdHJpbmcpLnJlcGxhY2UocmVwbGFjZW1lbnQsICcuJykudG9Mb3dlckNhc2UoKTtcbn07XG5cbnZhciBkYXRhID0gaXNGb3JjZWQuZGF0YSA9IHt9O1xudmFyIE5BVElWRSA9IGlzRm9yY2VkLk5BVElWRSA9ICdOJztcbnZhciBQT0xZRklMTCA9IGlzRm9yY2VkLlBPTFlGSUxMID0gJ1AnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRm9yY2VkO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKS5mO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBkZWZpbmVCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbicpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcbnZhciBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcHktY29uc3RydWN0b3ItcHJvcGVydGllcycpO1xudmFyIGlzRm9yY2VkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWZvcmNlZCcpO1xuXG4vKlxuICBvcHRpb25zLnRhcmdldCAgICAgICAgIC0gbmFtZSBvZiB0aGUgdGFyZ2V0IG9iamVjdFxuICBvcHRpb25zLmdsb2JhbCAgICAgICAgIC0gdGFyZ2V0IGlzIHRoZSBnbG9iYWwgb2JqZWN0XG4gIG9wdGlvbnMuc3RhdCAgICAgICAgICAgLSBleHBvcnQgYXMgc3RhdGljIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucHJvdG8gICAgICAgICAgLSBleHBvcnQgYXMgcHJvdG90eXBlIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucmVhbCAgICAgICAgICAgLSByZWFsIHByb3RvdHlwZSBtZXRob2QgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLmZvcmNlZCAgICAgICAgIC0gZXhwb3J0IGV2ZW4gaWYgdGhlIG5hdGl2ZSBmZWF0dXJlIGlzIGF2YWlsYWJsZVxuICBvcHRpb25zLmJpbmQgICAgICAgICAgIC0gYmluZCBtZXRob2RzIHRvIHRoZSB0YXJnZXQsIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy53cmFwICAgICAgICAgICAtIHdyYXAgY29uc3RydWN0b3JzIHRvIHByZXZlbnRpbmcgZ2xvYmFsIHBvbGx1dGlvbiwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLnVuc2FmZSAgICAgICAgIC0gdXNlIHRoZSBzaW1wbGUgYXNzaWdubWVudCBvZiBwcm9wZXJ0eSBpbnN0ZWFkIG9mIGRlbGV0ZSArIGRlZmluZVByb3BlcnR5XG4gIG9wdGlvbnMuc2hhbSAgICAgICAgICAgLSBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gIG9wdGlvbnMuZW51bWVyYWJsZSAgICAgLSBleHBvcnQgYXMgZW51bWVyYWJsZSBwcm9wZXJ0eVxuICBvcHRpb25zLmRvbnRDYWxsR2V0U2V0IC0gcHJldmVudCBjYWxsaW5nIGEgZ2V0dGVyIG9uIHRhcmdldFxuICBvcHRpb25zLm5hbWUgICAgICAgICAgIC0gdGhlIC5uYW1lIG9mIHRoZSBmdW5jdGlvbiBpZiBpdCBkb2VzIG5vdCBtYXRjaCB0aGUga2V5XG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3B0aW9ucywgc291cmNlKSB7XG4gIHZhciBUQVJHRVQgPSBvcHRpb25zLnRhcmdldDtcbiAgdmFyIEdMT0JBTCA9IG9wdGlvbnMuZ2xvYmFsO1xuICB2YXIgU1RBVElDID0gb3B0aW9ucy5zdGF0O1xuICB2YXIgRk9SQ0VELCB0YXJnZXQsIGtleSwgdGFyZ2V0UHJvcGVydHksIHNvdXJjZVByb3BlcnR5LCBkZXNjcmlwdG9yO1xuICBpZiAoR0xPQkFMKSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsO1xuICB9IGVsc2UgaWYgKFNUQVRJQykge1xuICAgIHRhcmdldCA9IGdsb2JhbFtUQVJHRVRdIHx8IGRlZmluZUdsb2JhbFByb3BlcnR5KFRBUkdFVCwge30pO1xuICB9IGVsc2Uge1xuICAgIHRhcmdldCA9IChnbG9iYWxbVEFSR0VUXSB8fCB7fSkucHJvdG90eXBlO1xuICB9XG4gIGlmICh0YXJnZXQpIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIHNvdXJjZVByb3BlcnR5ID0gc291cmNlW2tleV07XG4gICAgaWYgKG9wdGlvbnMuZG9udENhbGxHZXRTZXQpIHtcbiAgICAgIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpO1xuICAgICAgdGFyZ2V0UHJvcGVydHkgPSBkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IudmFsdWU7XG4gICAgfSBlbHNlIHRhcmdldFByb3BlcnR5ID0gdGFyZ2V0W2tleV07XG4gICAgRk9SQ0VEID0gaXNGb3JjZWQoR0xPQkFMID8ga2V5IDogVEFSR0VUICsgKFNUQVRJQyA/ICcuJyA6ICcjJykgKyBrZXksIG9wdGlvbnMuZm9yY2VkKTtcbiAgICAvLyBjb250YWluZWQgaW4gdGFyZ2V0XG4gICAgaWYgKCFGT1JDRUQgJiYgdGFyZ2V0UHJvcGVydHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHR5cGVvZiBzb3VyY2VQcm9wZXJ0eSA9PSB0eXBlb2YgdGFyZ2V0UHJvcGVydHkpIGNvbnRpbnVlO1xuICAgICAgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyhzb3VyY2VQcm9wZXJ0eSwgdGFyZ2V0UHJvcGVydHkpO1xuICAgIH1cbiAgICAvLyBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gICAgaWYgKG9wdGlvbnMuc2hhbSB8fCAodGFyZ2V0UHJvcGVydHkgJiYgdGFyZ2V0UHJvcGVydHkuc2hhbSkpIHtcbiAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShzb3VyY2VQcm9wZXJ0eSwgJ3NoYW0nLCB0cnVlKTtcbiAgICB9XG4gICAgZGVmaW5lQnVpbHRJbih0YXJnZXQsIGtleSwgc291cmNlUHJvcGVydHksIG9wdGlvbnMpO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG5cbi8vIGBJc0FycmF5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXNhcnJheVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LWlzYXJyYXkgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGNsYXNzb2YoYXJndW1lbnQpID09PSAnQXJyYXknO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIFNhZmFyaSA8IDEzIGRvZXMgbm90IHRocm93IGFuIGVycm9yIGluIHRoaXMgY2FzZVxudmFyIFNJTEVOVF9PTl9OT05fV1JJVEFCTEVfTEVOR1RIX1NFVCA9IERFU0NSSVBUT1JTICYmICFmdW5jdGlvbiAoKSB7XG4gIC8vIG1ha2VzIG5vIHNlbnNlIHdpdGhvdXQgcHJvcGVyIHN0cmljdCBtb2RlIHN1cHBvcnRcbiAgaWYgKHRoaXMgIT09IHVuZGVmaW5lZCkgcmV0dXJuIHRydWU7XG4gIHRyeSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFtdLCAnbGVuZ3RoJywgeyB3cml0YWJsZTogZmFsc2UgfSkubGVuZ3RoID0gMTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3IgaW5zdGFuY2VvZiBUeXBlRXJyb3I7XG4gIH1cbn0oKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTSUxFTlRfT05fTk9OX1dSSVRBQkxFX0xFTkdUSF9TRVQgPyBmdW5jdGlvbiAoTywgbGVuZ3RoKSB7XG4gIGlmIChpc0FycmF5KE8pICYmICFnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgJ2xlbmd0aCcpLndyaXRhYmxlKSB7XG4gICAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Nhbm5vdCBzZXQgcmVhZCBvbmx5IC5sZW5ndGgnKTtcbiAgfSByZXR1cm4gTy5sZW5ndGggPSBsZW5ndGg7XG59IDogZnVuY3Rpb24gKE8sIGxlbmd0aCkge1xuICByZXR1cm4gTy5sZW5ndGggPSBsZW5ndGg7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSAweDFGRkZGRkZGRkZGRkZGOyAvLyAyICoqIDUzIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA+IE1BWF9TQUZFX0lOVEVHRVIpIHRocm93ICRUeXBlRXJyb3IoJ01heGltdW0gYWxsb3dlZCBpbmRleCBleGNlZWRlZCcpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG52YXIgc2V0QXJyYXlMZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc2V0LWxlbmd0aCcpO1xudmFyIGRvZXNOb3RFeGNlZWRTYWZlSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2VzLW5vdC1leGNlZWQtc2FmZS1pbnRlZ2VyJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxudmFyIElOQ09SUkVDVF9UT19MRU5HVEggPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBbXS5wdXNoLmNhbGwoeyBsZW5ndGg6IDB4MTAwMDAwMDAwIH0sIDEpICE9PSA0Mjk0OTY3Mjk3O1xufSk7XG5cbi8vIFY4IDw9IDEyMSBhbmQgU2FmYXJpIDw9IDE1LjQ7IEZGIDwgMjMgdGhyb3dzIEludGVybmFsRXJyb3Jcbi8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTEyNjgxXG52YXIgcHJvcGVyRXJyb3JPbk5vbldyaXRhYmxlTGVuZ3RoID0gZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShbXSwgJ2xlbmd0aCcsIHsgd3JpdGFibGU6IGZhbHNlIH0pLnB1c2goKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3IgaW5zdGFuY2VvZiBUeXBlRXJyb3I7XG4gIH1cbn07XG5cbnZhciBGT1JDRUQgPSBJTkNPUlJFQ1RfVE9fTEVOR1RIIHx8ICFwcm9wZXJFcnJvck9uTm9uV3JpdGFibGVMZW5ndGgoKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5wdXNoYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnB1c2hcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBhcml0eTogMSwgZm9yY2VkOiBGT1JDRUQgfSwge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnMgLS0gcmVxdWlyZWQgZm9yIGAubGVuZ3RoYFxuICBwdXNoOiBmdW5jdGlvbiBwdXNoKGl0ZW0pIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpO1xuICAgIHZhciBsZW4gPSBsZW5ndGhPZkFycmF5TGlrZShPKTtcbiAgICB2YXIgYXJnQ291bnQgPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGRvZXNOb3RFeGNlZWRTYWZlSW50ZWdlcihsZW4gKyBhcmdDb3VudCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdDb3VudDsgaSsrKSB7XG4gICAgICBPW2xlbl0gPSBhcmd1bWVudHNbaV07XG4gICAgICBsZW4rKztcbiAgICB9XG4gICAgc2V0QXJyYXlMZW5ndGgoTywgbGVuKTtcbiAgICByZXR1cm4gbGVuO1xuICB9XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdHJ5VG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdHJ5LXRvLXN0cmluZycpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywgUCkge1xuICBpZiAoIWRlbGV0ZSBPW1BdKSB0aHJvdyBuZXcgJFR5cGVFcnJvcignQ2Fubm90IGRlbGV0ZSBwcm9wZXJ0eSAnICsgdHJ5VG9TdHJpbmcoUCkgKyAnIG9mICcgKyB0cnlUb1N0cmluZyhPKSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG52YXIgc2V0QXJyYXlMZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc2V0LWxlbmd0aCcpO1xudmFyIGRlbGV0ZVByb3BlcnR5T3JUaHJvdyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWxldGUtcHJvcGVydHktb3ItdGhyb3cnKTtcbnZhciBkb2VzTm90RXhjZWVkU2FmZUludGVnZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9lcy1ub3QtZXhjZWVkLXNhZmUtaW50ZWdlcicpO1xuXG4vLyBJRTgtXG52YXIgSU5DT1JSRUNUX1JFU1VMVCA9IFtdLnVuc2hpZnQoMCkgIT09IDE7XG5cbi8vIFY4IH4gQ2hyb21lIDwgNzEgYW5kIFNhZmFyaSA8PSAxNS40LCBGRiA8IDIzIHRocm93cyBJbnRlcm5hbEVycm9yXG52YXIgcHJvcGVyRXJyb3JPbk5vbldyaXRhYmxlTGVuZ3RoID0gZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShbXSwgJ2xlbmd0aCcsIHsgd3JpdGFibGU6IGZhbHNlIH0pLnVuc2hpZnQoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3IgaW5zdGFuY2VvZiBUeXBlRXJyb3I7XG4gIH1cbn07XG5cbnZhciBGT1JDRUQgPSBJTkNPUlJFQ1RfUkVTVUxUIHx8ICFwcm9wZXJFcnJvck9uTm9uV3JpdGFibGVMZW5ndGgoKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS51bnNoaWZ0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnVuc2hpZnRcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBhcml0eTogMSwgZm9yY2VkOiBGT1JDRUQgfSwge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnMgLS0gcmVxdWlyZWQgZm9yIGAubGVuZ3RoYFxuICB1bnNoaWZ0OiBmdW5jdGlvbiB1bnNoaWZ0KGl0ZW0pIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpO1xuICAgIHZhciBsZW4gPSBsZW5ndGhPZkFycmF5TGlrZShPKTtcbiAgICB2YXIgYXJnQ291bnQgPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGlmIChhcmdDb3VudCkge1xuICAgICAgZG9lc05vdEV4Y2VlZFNhZmVJbnRlZ2VyKGxlbiArIGFyZ0NvdW50KTtcbiAgICAgIHZhciBrID0gbGVuO1xuICAgICAgd2hpbGUgKGstLSkge1xuICAgICAgICB2YXIgdG8gPSBrICsgYXJnQ291bnQ7XG4gICAgICAgIGlmIChrIGluIE8pIE9bdG9dID0gT1trXTtcbiAgICAgICAgZWxzZSBkZWxldGVQcm9wZXJ0eU9yVGhyb3coTywgdG8pO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBhcmdDb3VudDsgaisrKSB7XG4gICAgICAgIE9bal0gPSBhcmd1bWVudHNbal07XG4gICAgICB9XG4gICAgfSByZXR1cm4gc2V0QXJyYXlMZW5ndGgoTywgbGVuICsgYXJnQ291bnQpO1xuICB9XG59KTtcbiIsICJjb25zdCBXR19BQ1RJT046IE1lZGlhV2lraUNvbmZpZ01hcFdnQWN0aW9uID0gbXcuY29uZmlnLmdldCgnd2dBY3Rpb24nKTtcblxuZXhwb3J0IHtXR19BQ1RJT059O1xuIiwgImNvbnN0IGNmZyA9IHtcblx0LyogQ2F0ZWdvcmllcyB3aGVyZSBkaXNhbWJpZ3VhdGlvbiBwYWdlcyBhcmUgYWRkZWQgKHVzdWFsbHkgYnkgYSB0ZW1wbGF0ZSBsaWtlIHt7RGlzYW1iaWd1YXRpb259fSAqL1xuXHRkaXNhbUNhdGVnb3JpZXM6IFsn5YWo6YOo5raI5q2n5LmJ6aG16Z2iJ10sXG5cdC8qIFwiQ2Fub25pY2FsIG5hbWVzXCIgb2YgdGhlIHRlbXBsYXRlcyB0aGF0IG1heSBhcHBlYXIgYWZ0ZXIgYW1iaWd1b3VzIGxpbmtzIGFuZCB3aGljaCBzaG91bGQgYmUgcmVtb3ZlZCB3aGVuIGZpeGluZyB0aG9zZSBsaW5rcyAqL1xuXHRkaXNhbUxpbmtUZW1wbGF0ZXM6IFtcblx0XHQnRGlzYW1iaWd1YXRpb24gbmVlZGVkJyxcblx0XHQnQW1iaWd1b3VzIGxpbmsnLFxuXHRcdCdBbWJsaW5rJyxcblx0XHQnRGFiIG5lZWRlZCcsXG5cdFx0J0Rpc2FtYi1saW5rJyxcblx0XHQnRGlzYW1iaWcgbmVlZGVkJyxcblx0XHQnRGlzYW1iaWd1YXRlJyxcblx0XHQnRG4nLFxuXHRcdCdOZWVkZGFiJyxcblx0XSxcblx0LyogXCJDYW5vbmljYWwgbmFtZXNcIiBvZiB0aGUgdGVtcGxhdGVzIHRoYXQgZGVzaWduYXRlIGludGVudGlvbmFsIGxpbmtzIHRvIGRpc2FtYmlndWF0aW9uIHBhZ2VzICovXG5cdGRpc2FtTGlua0lnbm9yZVRlbXBsYXRlczogWydSIGZyb20gYW1iaWd1b3VzIHBhZ2UnLCAnUiB0byBkaXNhbWJpZ3VhdGlvbiBwYWdlJywgJ1IgZnJvbSBpbmNvbXBsZXRlIGRpc2FtYmlndWF0aW9uJ10sXG5cdC8qIEZvcm1hdCBzdHJpbmcgZm9yIFwiRm9vIChkaXNhbWJpZ3VhdGlvbilcIi1zdHlsZSBwYWdlcyAqL1xuXHRkaXNhbUZvcm1hdDogJyQx77yI5raI5q2n5LmJ77yJJyxcblx0LyogUmVndWxhciBleHByZXNzaW9uIG1hdGNoaW5nIHRoZSB0aXRsZXMgb2YgZGlzYW1iaWd1YXRpb24gcGFnZXMgKHdoZW4gdGhleSBhcmUgZGlmZmVyZW50IGZyb20gdGhlIHRpdGxlcyBvZiB0aGUgcHJpbWFyeSB0b3BpY3MpICovXG5cdGRpc2FtUmVnRXhwOiAnXiguKinvvIgo5raI5q2n5LmJfOa2iOatp+e+qSnvvIkkJyxcblx0LyogVGV4dCB0aGF0IHdpbGwgYmUgaW5zZXJ0ZWQgYWZ0ZXIgdGhlIGxpbmsgaWYgdGhlIHVzZXIgcmVxdWVzdHMgaGVscC4gSWYgdGhlIHZhbHVlIGlzIG51bGwsIHRoZSBvcHRpb24gdG8gcmVxdWVzdCBoZWxwIHdvbid0IGJlIG9mZmVyZWQgKi9cblx0ZGlzYW1OZWVkZWRUZXh0OiAne3tkbnxkYXRlPXt7Jy5jb25jYXQoJ3N1YnN0OicsICdDVVJSRU5UTU9OVEhOQU1FJywgJ319IHt7JywgJ3N1YnN0OicsICdDVVJSRU5UWUVBUn19fX0nKSxcblx0LyogQ29udGVudCBvZiB0aGUgXCJGb28gKGRpc2FtYmlndWF0aW9uKVwiIHBhZ2VzIHRoYXQgd2lsbCBiZSBjcmVhdGVkIGF1dG9tYXRpY2FsbHkgd2hlbiB1c2luZyBEaXNhbUFzc2lzdCBmcm9tIGEgXCJGb29cIiBwYWdlICovXG5cdHJlZGlyZWN0VG9EaXNhbTogJyPph43lrprlkJEgW1skMV1dJy5jb25jYXQoJ3t7UiB0byBkaXNhbWJpZ3VhdGlvbiBwYWdlfX0nKSxcblx0LyogV2hldGhlciBpbnRlbnRpb25hbCBsaW5rcyB0byBkaXNhbWJpZ3VhdGlvbiBwYWdlcyBjYW4gYmUgZXhwbGljaXRseSBtYXJrZWQgYnkgYWRkaW5nIFwiIChkaXNhbWJpZ3VhdGlvbilcIiAqL1xuXHRpbnRlbnRpb25hbExpbmtPcHRpb246IGZhbHNlLFxuXHQvKiBOYW1lc3BhY2VzIHRoYXQgd2lsbCBiZSBzZWFyY2hlZCBmb3IgaW5jb21pbmcgbGlua3MgdG8gdGhlIGRpc2FtYmlndWF0aW9uIHBhZ2UgKHBhZ2VzIGluIG90aGVyIG5hbWVzcGFjZXMgd2lsbCBiZSBpZ25vcmVkKSAqL1xuXHR0YXJnZXROYW1lc3BhY2VzOiBbNiwgMTAsIDE0LCAxMTgsIDBdLFxuXHQvKiBOdW1iZXIgb2YgYmFja2xpbmtzIHRoYXQgd2lsbCBiZSBkb3dubG9hZGVkIGF0IG9uY2UgV2hlbiB1c2luZyBibHJlZGlyZWN0LCB0aGUgbWF4aW11bSBsaW1pdCBpcyBzdXBwb3NlZGx5IGhhbHZlZCAoc2VlIGh0dHA6Ly93d3cubWVkaWF3aWtpLm9yZy93aWtpL0FQSTpCYWNrbGlua3MpICovXG5cdGJhY2tsaW5rTGltaXQ6IDI1MCxcblx0LyogTnVtYmVyIG9mIHRpdGxlcyB3ZSBjYW4gcXVlcnkgZm9yIGF0IG9uY2UgKi9cblx0cXVlcnlUaXRsZUxpbWl0OiA1MCxcblx0LyogTnVtYmVyIG9mIGNoYXJhY3RlcnMgYmVmb3JlIGFuZCBhZnRlciB0aGUgaW5jb21pbmcgbGluayB0aGF0IHdpbGwgYmUgZGlzcGxheWVkICovXG5cdHJhZGl1czogMzAwLFxuXHQvKiBIZWlnaHQgb2YgdGhlIGNvbnRleHQgYm94LCBpbiBsaW5lcyAqL1xuXHRudW1Db250ZXh0TGluZXM6IDQsXG5cdC8qIE51bWJlciBvZiBwYWdlcyB0aGF0IHdpbGwgYmUgc3RvcmVkIGJlZm9yZSBzYXZpbmcsIHNvIHRoYXQgY2hhbmdlcyB0byB0aGVtIGNhbiBiZSB1bmRvbmUgaWYgbmVlZCBiZSAqL1xuXHRoaXN0b3J5U2l6ZTogMixcblx0LyogTWluaW11bSB0aW1lIGluIHNlY29uZHMgc2luY2UgdGhlIGxhc3QgY2hhbmdlIHdhcyBzYXZlZCBiZWZvcmUgYSBuZXcgZWRpdCBjYW4gYmUgbWFkZS4gQSBuZWdhdGl2ZSB2YWx1ZSBvciAwIGRpc2FibGVzIHRoZSBjb29sZG93bi4gVXNlcnMgd2l0aCB0aGUgXCJib3RcIiByaWdodCB3b24ndCBiZSBhZmZlY3RlZCBieSB0aGUgY29vbGRvd24gKi9cblx0ZWRpdENvb2xkb3duOiAwLFxuXHQvKiBTcGVjaWZ5IGhvdyB0aGUgd2F0Y2hsaXN0IGlzIGFmZmVjdGVkIGJ5IERpc2FtQXNzaXN0IGVkaXRzLiBQb3NzaWJsZSB2YWx1ZXM6IFwid2F0Y2hcIiwgXCJ1bndhdGNoXCIsIFwicHJlZmVyZW5jZXNcIiwgXCJub2NoYW5nZVwiICovXG5cdHdhdGNoOiAnbm9jaGFuZ2UnLFxufTtcblxuZXhwb3J0IHtjZmd9O1xuIiwgIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQge1dHX0FDVElPTn0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQge2NmZ30gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3R4dH0gZnJvbSAnLi9tZXNzYWdlcyc7XG5cbmNvbnN0IGFwaSA9IGluaXRNd0FwaSgnRGlzYW1Bc3Npc3QvMS4xJyk7XG5cbmxldCBzdGFydExpbms7XG5sZXQgdWk7XG5sZXQgbGlua3M7XG5sZXQgcGFnZUNoYW5nZXM7XG5sZXQgY3VycmVudFBhZ2VUaXRsZTtcbmxldCBjdXJyZW50UGFnZVBhcmFtZXRlcnM7XG5sZXQgY3VycmVudExpbms7XG5sZXQgcG9zc2libGVCYWNrbGlua0Rlc3RpbmF0aW9ucztcbmxldCBmb3JjZVNhbWVQYWdlID0gZmFsc2U7XG5sZXQgcnVubmluZyA9IGZhbHNlO1xubGV0IGNob29zaW5nID0gZmFsc2U7XG5sZXQgY2FuTWFya0ludGVudGlvbmFsTGlua3MgPSBmYWxzZTtcbmxldCBkaXNwbGF5ZWRQYWdlcyA9IHt9O1xubGV0IGVkaXRDb3VudCA9IDA7XG5sZXQgZWRpdExpbWl0O1xuY29uc3QgcGVuZGluZ1NhdmVzID0gW107XG5sZXQgcGVuZGluZ0VkaXRCb3g7XG5sZXQgcGVuZGluZ0VkaXRCb3hUZXh0O1xubGV0IGxhc3RFZGl0TWlsbGlzID0gMDtcbmxldCBydW5uaW5nU2F2ZXMgPSBmYWxzZTtcblxuLyogRW50cnkgcG9pbnQuIENoZWNrIHdoZXRoZXIgd2UgYXJlIGluIGEgZGlzYW1iaWd1YXRpb24gcGFnZS4gSWYgc28sIGFkZCBhIGxpbmsgdG8gc3RhcnQgdGhlIHRvb2wgKi9cbmV4cG9ydCBjb25zdCBpbnN0YWxsID0gKCkgPT4ge1xuXHRpZiAoV0dfQUNUSU9OICE9PSAndmlldycgfHwgIWlzRGlzYW0oKSkge1xuXHRcdHJldHVybjtcblx0fVxuXHQkKCgpID0+IHtcblx0XHRjb25zdCBwb3J0bGV0SWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcC1jYWN0aW9ucycpID8gJ3AtY2FjdGlvbnMnIDogJ3AtdGInO1xuXHRcdC8vIFRoaXMgaXMgYSBcIiAoZGlzYW1iaWd1YXRpb24pXCIgcGFnZVxuXHRcdGlmIChuZXcgUmVnRXhwKGNmZy5kaXNhbVJlZ0V4cCkudGVzdChnZXRUaXRsZSgpKSkge1xuXHRcdFx0Y29uc3Qgc3RhcnRNYWluTGluayA9ICQobXcudXRpbC5hZGRQb3J0bGV0TGluayhwb3J0bGV0SWQsICcjJywgdHh0LnN0YXJ0TWFpbiwgJ2NhLWRpc2FtYXNzaXN0LW1haW4nKSkub24oXG5cdFx0XHRcdCdjbGljaycsXG5cdFx0XHRcdHN0YXJ0TWFpblxuXHRcdFx0KTtcblx0XHRcdGNvbnN0IHN0YXJ0U2FtZUxpbmsgPSAkKG13LnV0aWwuYWRkUG9ydGxldExpbmsocG9ydGxldElkLCAnIycsIHR4dC5zdGFydFNhbWUsICdjYS1kaXNhbWFzc2lzdC1zYW1lJykpLm9uKFxuXHRcdFx0XHQnY2xpY2snLFxuXHRcdFx0XHRzdGFydFNhbWVcblx0XHRcdCk7XG5cdFx0XHRzdGFydExpbmsgPSBzdGFydE1haW5MaW5rLmFkZChzdGFydFNhbWVMaW5rKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3RhcnRMaW5rID0gJChtdy51dGlsLmFkZFBvcnRsZXRMaW5rKHBvcnRsZXRJZCwgJyMnLCB0eHQuc3RhcnQsICdjYS1kaXNhbWFzc2lzdC1wYWdlJykpLm9uKCdjbGljaycsIHN0YXJ0KTtcblx0XHR9XG5cdH0pO1xufTtcblxuLyogU3RhcnQgdGhlIHRvb2wuIERpc3BsYXkgdGhlIFVJIGFuZCBiZWdpbiBsb29raW5nIGZvciBsaW5rcyB0byBmaXggKi9cbmNvbnN0IHN0YXJ0ID0gKCkgPT4ge1xuXHRpZiAocnVubmluZykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHJ1bm5pbmcgPSB0cnVlO1xuXHRsaW5rcyA9IFtdO1xuXHRwYWdlQ2hhbmdlcyA9IFtdO1xuXHRkaXNwbGF5ZWRQYWdlcyA9IHt9O1xuXHRlbnN1cmVEQUJFeGlzdHMoKS50aGVuKChjYW5NYXJrKSA9PiB7XG5cdFx0Y2FuTWFya0ludGVudGlvbmFsTGlua3MgPSBjYW5NYXJrO1xuXHRcdGNyZWF0ZVVJKCk7XG5cdFx0YWRkVW5sb2FkQ29uZmlybSgpO1xuXHRcdG1hcmtEaXNhbU9wdGlvbnMoKTtcblx0XHRjaGVja0VkaXRMaW1pdCgpLnRoZW4oKCkgPT4ge1xuXHRcdFx0dG9nZ2xlUGVuZGluZ0VkaXRCb3goZmFsc2UpO1xuXHRcdFx0ZG9QYWdlKCk7XG5cdFx0fSk7XG5cdH0pO1xufTtcblxuLyogU3RhcnQgRGlzYW1Bc3Npc3QuIERpc2FtYmlndWF0ZSBpbmNvbWluZyBsaW5rcyB0byB0aGUgY3VycmVudCBwYWdlLCByZWdhcmRsZXNzIG9mIHRoZSB0aXRsZS4gKi9cbmNvbnN0IHN0YXJ0U2FtZSA9ICgpID0+IHtcblx0Zm9yY2VTYW1lUGFnZSA9IHRydWU7XG5cdHN0YXJ0KCk7XG59O1xuXG4vKiBTdGFydCBEaXNhbUFzc2lzdC4gSWYgdGhlIHBhZ2UgdGl0bGUgZW5kcyB3aXRoIFwiIChkaXNhbWJpZ3VhdGlvbilcIiwgZGlzYW1iaWd1YXRlIGxpbmtzIHRvIHRoZSBwcmltYXJ5IHRvcGljIGFydGljbGUuIE90aGVyd2lzZSwgZGlzYW1iaWd1YXRlIGxpbmtzIHRvIHRoZSBjdXJyZW50IHBhZ2UuICovXG5jb25zdCBzdGFydE1haW4gPSAoKSA9PiB7XG5cdGZvcmNlU2FtZVBhZ2UgPSBmYWxzZTtcblx0c3RhcnQoKTtcbn07XG5cbi8qIENyZWF0ZSBhbmQgc2hvdyB0aGUgdXNlciBpbnRlcmZhY2UuICovXG5jb25zdCBjcmVhdGVVSSA9ICgpID0+IHtcblx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdHVpID0ge1xuXHRcdGRpc3BsYXk6ICQoJzxkaXY+JykuYWRkQ2xhc3MoJ2Rpc2FtYXNzaXN0LWJveCBkaXNhbWFzc2lzdC1tYWluYm94JyksXG5cdFx0ZmluaXNoZWRNZXNzYWdlOiAkKCc8ZGl2PicpLnRleHQodHh0Lm5vTW9yZUxpbmtzKS5oaWRlKCksXG5cdFx0cGFnZVRpdGxlTGluZTogJCgnPHNwYW4+JykuYWRkQ2xhc3MoJ2Rpc2FtYXNzaXN0LXBhZ2V0aXRsZWxpbmUnKSxcblx0XHRwZW5kaW5nRWRpdENvdW50ZXI6ICQoJzxkaXY+JykuYWRkQ2xhc3MoJ2Rpc2FtYXNzaXN0LWVkaXRjb3VudGVyJyksXG5cdFx0Y29udGV4dDogJCgnPHNwYW4+JykuYWRkQ2xhc3MoJ2Rpc2FtYXNzaXN0LWNvbnRleHQnKSxcblx0XHR1bmRvQnV0dG9uOiBjcmVhdGVCdXR0b24odHh0LnVuZG8sIHVuZG8pLFxuXHRcdG9taXRCdXR0b246IGNyZWF0ZUJ1dHRvbih0eHQub21pdCwgb21pdCksXG5cdFx0ZW5kQnV0dG9uOiBjcmVhdGVCdXR0b24odHh0LmNsb3NlLCBzYXZlQW5kRW5kKSxcblx0XHRyZWZyZXNoQnV0dG9uOiBjcmVhdGVCdXR0b24odHh0LnJlZnJlc2gsIHJlZnJlc2gpLFxuXHRcdHRpdGxlQXNUZXh0QnV0dG9uOiBjcmVhdGVCdXR0b24odHh0LnRpdGxlQXNUZXh0LCBjaG9vc2VUaXRsZUZyb21Qcm9tcHQpLFxuXHRcdGludGVudGlvbmFsTGlua0J1dHRvbjogY2FuTWFya0ludGVudGlvbmFsTGlua3Ncblx0XHRcdD8gY3JlYXRlQnV0dG9uKHR4dC5pbnRlbnRpb25hbExpbmssIGNob29zZUludGVudGlvbmFsTGluaylcblx0XHRcdDogJCgnPHNwYW4+JyksXG5cdFx0ZGlzYW1OZWVkZWRCdXR0b246IGNmZy5kaXNhbU5lZWRlZFRleHQgPyBjcmVhdGVCdXR0b24odHh0LmRpc2FtTmVlZGVkLCBjaG9vc2VEaXNhbU5lZWRlZCkgOiAkKCc8c3Bhbj4nKSxcblx0XHRyZW1vdmVMaW5rQnV0dG9uOiBjcmVhdGVCdXR0b24odHh0LnJlbW92ZUxpbmssIGNob29zZUxpbmtSZW1vdmFsKSxcblx0fTtcblx0Y29uc3QgdG9wID0gJCgnPGRpdj4nKVxuXHRcdC5hZGRDbGFzcygnZGlzYW1hc3Npc3QtdG9wJylcblx0XHQuYXBwZW5kKFt1aS5wZW5kaW5nRWRpdENvdW50ZXIsIHVpLmZpbmlzaGVkTWVzc2FnZSwgdWkucGFnZVRpdGxlTGluZV0pO1xuXHRjb25zdCBsZWZ0QnV0dG9ucyA9ICQoJzxkaXY+Jylcblx0XHQuYWRkQ2xhc3MoJ2Rpc2FtYXNzaXN0LWxlZnRidXR0b25zJylcblx0XHQuYXBwZW5kKFtcblx0XHRcdHVpLnRpdGxlQXNUZXh0QnV0dG9uLFxuXHRcdFx0dWkucmVtb3ZlTGlua0J1dHRvbixcblx0XHRcdHVpLmludGVudGlvbmFsTGlua0J1dHRvbixcblx0XHRcdHVpLmRpc2FtTmVlZGVkQnV0dG9uLFxuXHRcdFx0dWkub21pdEJ1dHRvbixcblx0XHRdKTtcblx0Y29uc3QgcmlnaHRCdXR0b25zID0gJCgnPGRpdj4nKVxuXHRcdC5hZGRDbGFzcygnZGlzYW1hc3Npc3QtcmlnaHRidXR0b25zJylcblx0XHQuYXBwZW5kKFt1aS51bmRvQnV0dG9uLCB1aS5yZWZyZXNoQnV0dG9uLCB1aS5lbmRCdXR0b25dKTtcblx0Y29uc3QgYWxsQnV0dG9ucyA9ICQoJzxkaXY+JykuYWRkQ2xhc3MoJ2Rpc2FtYXNzaXN0LWFsbGJ1dHRvbnMnKS5hcHBlbmQoW2xlZnRCdXR0b25zLCByaWdodEJ1dHRvbnNdKTtcblx0dWkuZGlzcGxheS5hcHBlbmQoW3RvcCwgdWkuY29udGV4dCwgYWxsQnV0dG9uc10pO1xuXHR1cGRhdGVFZGl0Q291bnRlcigpO1xuXHR0b2dnbGVBY3Rpb25CdXR0b25zKGZhbHNlKTtcblx0Ly8gSW5zZXJ0IHRoZSBVSSBpbiB0aGUgcGFnZVxuXHQkYm9keS5maW5kKCcjbXctY29udGVudC10ZXh0JykuYmVmb3JlKHVpLmRpc3BsYXkpO1xuXHR1aS5kaXNwbGF5LmhpZGUoKS5mYWRlSW4oKTtcbn07XG5cbi8qIElmIHRoZXJlIGFyZSBwZW5kaW5nIGNoYW5nZXMsIHNob3cgYSBjb25maXJtIGRpYWxvZyBiZWZvcmUgY2xvc2luZyAqL1xuY29uc3QgYWRkVW5sb2FkQ29uZmlybSA9ICgpID0+IHtcblx0JCh3aW5kb3cpLm9uKCdiZWZvcmV1bmxvYWQnLCAoKSA9PiB7XG5cdFx0aWYgKHJ1bm5pbmcgJiYgY2hlY2tBY3R1YWxDaGFuZ2VzKCkpIHtcblx0XHRcdHJldHVybiB0eHQucGVuZGluZztcblx0XHR9IGVsc2UgaWYgKGVkaXRDb3VudCAhPT0gMCkge1xuXHRcdFx0cmV0dXJuIHR4dC5lZGl0SW5Qcm9ncmVzcztcblx0XHR9XG5cdH0pO1xufTtcblxuLyogTWFyayB0aGUgZGlzYW1iaWd1YXRpb24gb3B0aW9ucyBhcyBzdWNoICovXG5jb25zdCBtYXJrRGlzYW1PcHRpb25zID0gKCkgPT4ge1xuXHRjb25zdCBvcHRpb25QYWdlVGl0bGVzID0gW107XG5cdGNvbnN0IG9wdGlvbk1hcmtlcnMgPSBbXTtcblx0Z2V0RGlzYW1PcHRpb25zKCkuZWFjaCgoX2luZGV4LCBlbGVtZW50KSA9PiB7XG5cdFx0Y29uc3QgbGluayA9ICQoZWxlbWVudCk7XG5cdFx0Y29uc3QgdGl0bGUgPSBleHRyYWN0UGFnZU5hbWUobGluayk7XG5cdFx0Y29uc3Qgb3B0aW9uTWFya2VyID0gJCgnPGE+Jylcblx0XHRcdC5hdHRyKCdocmVmJywgJyMnKVxuXHRcdFx0LmFkZENsYXNzKCdkaXNhbWFzc2lzdC1vcHRpb25tYXJrZXInKVxuXHRcdFx0LnRleHQodHh0Lm9wdGlvbk1hcmtlcilcblx0XHRcdC5vbignY2xpY2snLCAoZXYpID0+IHtcblx0XHRcdFx0ZXYucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0Y2hvb3NlUmVwbGFjZW1lbnQodGl0bGUpO1xuXHRcdFx0fSk7XG5cdFx0bGluay5hZnRlcihvcHRpb25NYXJrZXIpO1xuXHRcdG9wdGlvbk1hcmtlcnMucHVzaChvcHRpb25NYXJrZXIpO1xuXHRcdG9wdGlvblBhZ2VUaXRsZXMucHVzaCh0aXRsZSk7XG5cdH0pO1xuXHQvLyBOb3cgY2hlY2sgdGhlIGRpc2FtYmlndWF0aW9uIG9wdGlvbnMgYW5kIGRpc3BsYXkgYSBkaWZmZXJlbnQgbWVzc2FnZSBmb3IgdGhvc2UgdGhhdCBhcmVcblx0Ly8gYWN0dWFsbHkgdGhlIHNhbWUgYXMgdGhlIHRhcmdldCBwYWdlIHdoZXJlIHRoZSBsaW5rcyBnbywgYXMgY2hvb3NpbmcgdGhvc2Ugb3B0aW9ucyBkb2Vzbid0IHJlYWxseVxuXHQvLyBhY2NvbXBsaXNoIGFueXRoaW5nIChleGNlcHQgYnlwYXNzaW5nIHJlZGlyZWN0cywgd2hpY2ggbWlnaHQgYmUgdXNlZnVsIGluIHNvbWUgY2FzZXMpXG5cdGNvbnN0IHRhcmdldFBhZ2UgPSBnZXRUYXJnZXRQYWdlKCk7XG5cdGZldGNoUmVkaXJlY3RzKFsuLi5vcHRpb25QYWdlVGl0bGVzLCAuLi50YXJnZXRQYWdlXSlcblx0XHQuZG9uZSgocmVkaXJlY3RzKSA9PiB7XG5cdFx0XHRjb25zdCBlbmRUYXJnZXRQYWdlID0gcmVzb2x2ZVJlZGlyZWN0KHRhcmdldFBhZ2UsIHJlZGlyZWN0cyk7XG5cdFx0XHRmb3IgKGNvbnN0IFtpaSwgb3B0aW9uUGFnZVRpdGxlXSBvZiBvcHRpb25QYWdlVGl0bGVzLmVudHJpZXMoKSkge1xuXHRcdFx0XHRjb25zdCBlbmRPcHRpb25UaXRsZSA9IHJlc29sdmVSZWRpcmVjdChvcHRpb25QYWdlVGl0bGUsIHJlZGlyZWN0cyk7XG5cdFx0XHRcdGlmIChpc1NhbWVQYWdlKG9wdGlvblBhZ2VUaXRsZSwgdGFyZ2V0UGFnZSkpIHtcblx0XHRcdFx0XHRvcHRpb25NYXJrZXJzW2lpXS50ZXh0KHR4dC50YXJnZXRPcHRpb25NYXJrZXIpLmFkZENsYXNzKCdkaXNhbWFzc2lzdC1jdXJyb3B0aW9ubWFya2VyJyk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoaXNTYW1lUGFnZShlbmRPcHRpb25UaXRsZSwgZW5kVGFyZ2V0UGFnZSkpIHtcblx0XHRcdFx0XHRvcHRpb25NYXJrZXJzW2lpXS50ZXh0KHR4dC5yZWRpcmVjdE9wdGlvbk1hcmtlcikuYWRkQ2xhc3MoJ2Rpc2FtYXNzaXN0LWN1cnJvcHRpb25tYXJrZXInKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pXG5cdFx0LmZhaWwoZXJyb3IpO1xufTtcblxuLyogQ2hlY2sgd2hldGhlciBpbnRlbnRpb25hbCBsaW5rcyB0byBkaXNhbWJpZ3VhdGlvbiBwYWdlcyBjYW4gYmUgZXhwbGljaXRseSBtYXJrZWQvKiAqIGFzIHN1Y2ggaW4gdGhpcyB3aWtpLiBJZiBzbywgZW5zdXJlIHRoYXQgYSBcIkZvbyAoZGlzYW1iaWd1YXRpb24pXCIgcGFnZSBleGlzdHMuLyogKiBSZXR1cm5zIGEgalF1ZXJ5IHByb21pc2UgKi9cbmNvbnN0IGVuc3VyZURBQkV4aXN0cyA9ICgpID0+IHtcblx0Y29uc3QgZGVmZXJyZWQgPSBuZXcgJC5EZWZlcnJlZCgpO1xuXHRjb25zdCB0aXRsZSA9IGdldFRpdGxlKCk7XG5cdC8vIFRoYXQgY29uY2VwdCBkb2Vzbid0IGV4aXN0IGluIHRoaXMgd2lraS5cblx0aWYgKCFjZmcuaW50ZW50aW9uYWxMaW5rT3B0aW9uKSB7XG5cdFx0ZGVmZXJyZWQucmVzb2x2ZShmYWxzZSk7XG5cdFx0Ly8gXCJGb28gKGRpc2FtYmlndWF0aW9uKVwiIGV4aXN0czogaXQncyB0aGUgY3VycmVudCBwYWdlLlxuXHR9IGVsc2UgaWYgKG5ldyBSZWdFeHAoY2ZnLmRpc2FtUmVnRXhwKS5leGVjKHRpdGxlKSkge1xuXHRcdGRlZmVycmVkLnJlc29sdmUodHJ1ZSk7XG5cdH0gZWxzZSB7XG5cdFx0Y29uc3QgZGlzYW1UaXRsZSA9IGNmZy5kaXNhbUZvcm1hdC5yZXBsYWNlKCckMScsIHRpdGxlKTtcblx0XHRsb2FkUGFnZShkaXNhbVRpdGxlKVxuXHRcdFx0LmRvbmUoKHBhZ2UpID0+IHtcblx0XHRcdFx0Ly8gXCJGb28gKGRpc2FtYmlndWF0aW9uKVwiIGRvZXNuJ3QgZXhpc3QuXG5cdFx0XHRcdGlmIChwYWdlLm1pc3NpbmcpIHtcblx0XHRcdFx0XHQvLyBXZSB0cnkgdG8gY3JlYXRlIGl0XG5cdFx0XHRcdFx0cGFnZS5jb250ZW50ID0gY2ZnLnJlZGlyZWN0VG9EaXNhbS5yZXBsYWNlKCckMScsIHRpdGxlKTtcblx0XHRcdFx0XHRjb25zdCBzdW1tYXJ5ID0gdHh0LnJlZGlyZWN0U3VtbWFyeS5yZXBsYWNlKCckMScsIHRpdGxlKTtcblx0XHRcdFx0XHRzYXZlUGFnZShkaXNhbVRpdGxlLCBwYWdlLCBzdW1tYXJ5LCBmYWxzZSwgdHJ1ZSlcblx0XHRcdFx0XHRcdC5kb25lKCgpID0+IHtcblx0XHRcdFx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZSh0cnVlKTtcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQuZmFpbCgoZGVzY3JpcHRpb24pID0+IHtcblx0XHRcdFx0XHRcdFx0ZXJyb3IoZGVzY3JpcHRpb24pO1xuXHRcdFx0XHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKGZhbHNlKTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdC8vIEl0IGRvZXMgZXhpc3Rcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKHRydWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdFx0LmZhaWwoKGRlc2NyaXB0aW9uKSA9PiB7XG5cdFx0XHRcdGVycm9yKGRlc2NyaXB0aW9uKTtcblx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShmYWxzZSk7XG5cdFx0XHR9KTtcblx0fVxuXHRyZXR1cm4gZGVmZXJyZWQucHJvbWlzZSgpO1xufTtcblxuLyogQ2hlY2sgd2hldGhlciB0aGUgZWRpdCBjb29sZG93biBhcHBsaWVzIGFuZCBzZXRzIGVkaXRMaW1pdCBhY2NvcmRpbmdseS4vKiAqIFJldHVybnMgYSBqUXVlcnkgcHJvbWlzZSAqL1xuY29uc3QgY2hlY2tFZGl0TGltaXQgPSAoKSA9PiB7XG5cdGNvbnN0IGRlZmVycmVkID0gbmV3ICQuRGVmZXJyZWQoKTtcblx0aWYgKGNmZy5lZGl0Q29vbGRvd24gPD0gMCkge1xuXHRcdGVkaXRMaW1pdCA9IGZhbHNlO1xuXHRcdGRlZmVycmVkLnJlc29sdmUoKTtcblx0fSBlbHNlIHtcblx0XHRmZXRjaFJpZ2h0cygpXG5cdFx0XHQuZG9uZSgocmlnaHRzKSA9PiB7XG5cdFx0XHRcdGVkaXRMaW1pdCA9ICFyaWdodHMuaW5jbHVkZXMoJ2JvdCcpO1xuXHRcdFx0fSlcblx0XHRcdC5mYWlsKChkZXNjcmlwdGlvbikgPT4ge1xuXHRcdFx0XHRlcnJvcihkZXNjcmlwdGlvbik7XG5cdFx0XHRcdGVkaXRMaW1pdCA9IHRydWU7XG5cdFx0XHR9KVxuXHRcdFx0LmFsd2F5cygoKSA9PiB7XG5cdFx0XHRcdGRlZmVycmVkLnJlc29sdmUoKTtcblx0XHRcdH0pO1xuXHR9XG5cdHJldHVybiBkZWZlcnJlZC5wcm9taXNlKCk7XG59O1xuXG4vKiBGaW5kIGFuZCBhc2sgdGhlIHVzZXIgdG8gZml4IGFsbCB0aGUgaW5jb21pbmcgbGlua3MgdG8gdGhlIGRpc2FtYmlndWF0aW9uIChcInRhcmdldFwiKS8qICogcGFnZSBmcm9tIGEgc2luZ2xlIFwib3JpZ2luXCIgcGFnZSAqL1xuY29uc3QgZG9QYWdlID0gKCkgPT4ge1xuXHRpZiAocGFnZUNoYW5nZXMubGVuZ3RoID4gY2ZnLmhpc3RvcnlTaXplKSB7XG5cdFx0YXBwbHlDaGFuZ2UocGFnZUNoYW5nZXMuc2hpZnQoKSk7XG5cdH1cblx0aWYgKGxpbmtzLmxlbmd0aCkge1xuXHRcdGN1cnJlbnRQYWdlVGl0bGUgPSBsaW5rcy5zaGlmdCgpO1xuXHRcdGRpc3BsYXllZFBhZ2VzW2N1cnJlbnRQYWdlVGl0bGVdID0gdHJ1ZTtcblx0XHR0b2dnbGVBY3Rpb25CdXR0b25zKGZhbHNlKTtcblx0XHRsb2FkUGFnZShjdXJyZW50UGFnZVRpdGxlKVxuXHRcdFx0LmRvbmUoKGRhdGEpID0+IHtcblx0XHRcdFx0Y3VycmVudFBhZ2VQYXJhbWV0ZXJzID0gZGF0YTtcblx0XHRcdFx0Y3VycmVudExpbmsgPSB1bmRlZmluZWQ7XG5cdFx0XHRcdGRvTGluaygpO1xuXHRcdFx0fSlcblx0XHRcdC5mYWlsKGVycm9yKTtcblx0fSBlbHNlIHtcblx0XHRjb25zdCB0YXJnZXRQYWdlID0gZ2V0VGFyZ2V0UGFnZSgpO1xuXHRcdGdldEJhY2tsaW5rcyh0YXJnZXRQYWdlKVxuXHRcdFx0LmRvbmUoKGJhY2tsaW5rcywgcGFnZVRpdGxlcykgPT4ge1xuXHRcdFx0XHRjb25zdCBwZW5kaW5nID0ge307XG5cdFx0XHRcdGZvciAoY29uc3QgZWwgb2YgcGVuZGluZ1NhdmVzKSB7XG5cdFx0XHRcdFx0cGVuZGluZ1tlbFswXV0gPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHBvc3NpYmxlQmFja2xpbmtEZXN0aW5hdGlvbnMgPSBwYWdlVGl0bGVzLmZpbHRlcigodCkgPT4ge1xuXHRcdFx0XHRcdGlmICh0ID09PSB0YXJnZXRQYWdlKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIHJlbW92ZURpc2FtKHQpICE9PSB0YXJnZXRQYWdlO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0Ly8gT25seSBpbmNvbWluZyBsaW5rcyBmcm9tIHBhZ2VzIHdlIGhhdmVuJ3Qgc2VlbiB5ZXQgYW5kIHdlIGFyZW4ndCBjdXJyZW50bHlcblx0XHRcdFx0Ly8gc2F2aW5nIChkaXNwbGF5ZWRQYWdlcyBpcyByZXNldCB3aGVuIHRoZSB0b29sIGlzIGNsb3NlZCBhbmQgb3BlbmVkIGFnYWluLFxuXHRcdFx0XHQvLyB3aGlsZSB0aGUgbGlzdCBvZiBwZW5kaW5nIGNoYW5nZXMgaXNuJ3Q7IGlmIHRoZSBlZGl0IGNvb2xkb3duIGlzIGRpc2FibGVkLFxuXHRcdFx0XHQvLyBpdCB3aWxsIGJlIGVtcHR5KVxuXHRcdFx0XHRsaW5rcyA9IGJhY2tsaW5rcy5maWx0ZXIoKGVsKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuICFkaXNwbGF5ZWRQYWdlc1tlbF0gJiYgIXBlbmRpbmdbZWxdO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0aWYgKGxpbmtzLmxlbmd0aCkge1xuXHRcdFx0XHRcdGRvUGFnZSgpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHVwZGF0ZUNvbnRleHQoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHRcdC5mYWlsKGVycm9yKTtcblx0fVxufTtcblxuLyogRmluZCBhbmQgYXNrIHRoZSB1c2VyIHRvIGZpeCBhIHNpbmdsZSBpbmNvbWluZyBsaW5rIHRvIHRoZSBkaXNhbWJpZ3VhdGlvbiAoXCJ0YXJnZXRcIikvKiAqIHBhZ2UgKi9cbmNvbnN0IGRvTGluayA9ICgpID0+IHtcblx0Y3VycmVudExpbmsgPSBleHRyYWN0TGlua1RvUGFnZShcblx0XHRjdXJyZW50UGFnZVBhcmFtZXRlcnMuY29udGVudCxcblx0XHRwb3NzaWJsZUJhY2tsaW5rRGVzdGluYXRpb25zLFxuXHRcdGN1cnJlbnRMaW5rID8gY3VycmVudExpbmsuZW5kIDogMFxuXHQpO1xuXHRpZiAoY3VycmVudExpbmspIHtcblx0XHR1cGRhdGVDb250ZXh0KCk7XG5cdH0gZWxzZSB7XG5cdFx0ZG9QYWdlKCk7XG5cdH1cbn07XG5cbi8qIFJlcGxhY2UgdGhlIHRhcmdldCBvZiBhIGxpbmsgd2l0aCBhIGRpZmZlcmVudCBvbmUvKiAqIHBhZ2VUaXRsZTogTmV3IGxpbmsgdGFyZ2V0LyogKiBleHRyYTogQWRkaXRpb25hbCB0ZXh0IGFmdGVyIHRoZSBsaW5rIChvcHRpb25hbCkvKiAqIHN1bW1hcnk6IENoYW5nZSBzdW1tYXJ5IChvcHRpb25hbCkgKi9cbmNvbnN0IGNob29zZVJlcGxhY2VtZW50ID0gKHBhZ2VUaXRsZSwgZXh0cmEsIHN1bW1hcnkpID0+IHtcblx0aWYgKGNob29zaW5nKSB7XG5cdFx0Y2hvb3NpbmcgPSBmYWxzZTtcblx0XHRpZiAoIXN1bW1hcnkpIHtcblx0XHRcdHN1bW1hcnkgPSBwYWdlVGl0bGUgPyB0eHQuc3VtbWFyeUNoYW5nZWQucmVwbGFjZSgnJDEnLCBwYWdlVGl0bGUpIDogdHh0LnN1bW1hcnlPbWl0dGVkO1xuXHRcdH1cblx0XHRhZGRDaGFuZ2UoY3VycmVudFBhZ2VUaXRsZSwgY3VycmVudFBhZ2VQYXJhbWV0ZXJzLCBjdXJyZW50UGFnZVBhcmFtZXRlcnMuY29udGVudCwgY3VycmVudExpbmssIHN1bW1hcnkpO1xuXHRcdGlmIChwYWdlVGl0bGUgJiYgKHBhZ2VUaXRsZSAhPT0gZ2V0VGFyZ2V0UGFnZSgpIHx8IGV4dHJhKSkge1xuXHRcdFx0Y3VycmVudFBhZ2VQYXJhbWV0ZXJzLmNvbnRlbnQgPSByZXBsYWNlTGluayhcblx0XHRcdFx0Y3VycmVudFBhZ2VQYXJhbWV0ZXJzLmNvbnRlbnQsXG5cdFx0XHRcdHBhZ2VUaXRsZSxcblx0XHRcdFx0Y3VycmVudExpbmssXG5cdFx0XHRcdGV4dHJhIHx8ICcnXG5cdFx0XHQpO1xuXHRcdH1cblx0XHRkb0xpbmsoKTtcblx0fVxufTtcblxuLyogUmVwbGFjZSB0aGUgbGluayB3aXRoIGFuIGV4cGxpY2l0IGxpbmsgdG8gdGhlIGRpc2FtYmlndWF0aW9uIHBhZ2UgKi9cbmNvbnN0IGNob29zZUludGVudGlvbmFsTGluayA9ICgpID0+IHtcblx0Y29uc3QgZGlzYW1UaXRsZSA9IGNmZy5kaXNhbUZvcm1hdC5yZXBsYWNlKCckMScsIGdldFRhcmdldFBhZ2UoKSk7XG5cdGNob29zZVJlcGxhY2VtZW50KGRpc2FtVGl0bGUsICcnLCB0eHQuc3VtbWFyeUludGVudGlvbmFsKTtcbn07XG5cbi8qIFByb21wdCBmb3IgYW4gYWx0ZXJuYXRpdmUgbGluayB0YXJnZXQgYW5kIHVzZSBpdCBhcyBhIHJlcGxhY2VtZW50ICovXG5jb25zdCBjaG9vc2VUaXRsZUZyb21Qcm9tcHQgPSAoKSA9PiB7XG5cdGNvbnN0IHRpdGxlID0gcHJvbXB0KHR4dC50aXRsZUFzVGV4dFByb21wdCk7XG5cdGlmICh0aXRsZSAhPT0gbnVsbCkge1xuXHRcdGNob29zZVJlcGxhY2VtZW50KHRpdGxlKTtcblx0fVxufTtcblxuLyogUmVtb3ZlIHRoZSBjdXJyZW50IGxpbmssIGxlYXZpbmcgdGhlIHRleHQgdW5jaGFuZ2VkICovXG5jb25zdCBjaG9vc2VMaW5rUmVtb3ZhbCA9ICgpID0+IHtcblx0aWYgKGNob29zaW5nKSB7XG5cdFx0Y29uc3Qgc3VtbWFyeSA9IHR4dC5zdW1tYXJ5UmVtb3ZlZDtcblx0XHRhZGRDaGFuZ2UoY3VycmVudFBhZ2VUaXRsZSwgY3VycmVudFBhZ2VQYXJhbWV0ZXJzLCBjdXJyZW50UGFnZVBhcmFtZXRlcnMuY29udGVudCwgY3VycmVudExpbmssIHN1bW1hcnkpO1xuXHRcdGN1cnJlbnRQYWdlUGFyYW1ldGVycy5jb250ZW50ID0gcmVtb3ZlTGluayhjdXJyZW50UGFnZVBhcmFtZXRlcnMuY29udGVudCwgY3VycmVudExpbmspO1xuXHRcdGRvTGluaygpO1xuXHR9XG59O1xuXG4vKiBBZGQgYSBcImRpc2FtYmlndWF0aW9uIG5lZWRlZFwiIHRlbXBsYXRlIGFmdGVyIHRoZSBsaW5rICovXG5jb25zdCBjaG9vc2VEaXNhbU5lZWRlZCA9ICgpID0+IHtcblx0Y2hvb3NlUmVwbGFjZW1lbnQoY3VycmVudExpbmsudGl0bGUsIGNmZy5kaXNhbU5lZWRlZFRleHQsIHR4dC5zdW1tYXJ5SGVscE5lZWRlZCk7XG59O1xuXG4vKiBVbmRvIHRoZSBsYXN0IGNoYW5nZSAqL1xuY29uc3QgdW5kbyA9ICgpID0+IHtcblx0aWYgKHBhZ2VDaGFuZ2VzLmxlbmd0aCkge1xuXHRcdGNvbnN0IGxhc3RQYWdlID0gcGFnZUNoYW5nZXMuYXQoLTEpO1xuXHRcdGlmIChjdXJyZW50UGFnZVRpdGxlICE9PSBsYXN0UGFnZS50aXRsZSkge1xuXHRcdFx0bGlua3MudW5zaGlmdChjdXJyZW50UGFnZVRpdGxlKTtcblx0XHRcdGN1cnJlbnRQYWdlVGl0bGUgPSBsYXN0UGFnZS50aXRsZTtcblx0XHR9XG5cdFx0Y3VycmVudFBhZ2VQYXJhbWV0ZXJzID0gbGFzdFBhZ2UucGFnZTtcblx0XHRjdXJyZW50UGFnZVBhcmFtZXRlcnMuY29udGVudCA9IGxhc3RQYWdlLmNvbnRlbnRCZWZvcmUucG9wKCk7XG5cdFx0Y3VycmVudExpbmsgPSBsYXN0UGFnZS5saW5rcy5wb3AoKTtcblx0XHRsYXN0UGFnZS5zdW1tYXJ5LnBvcCgpO1xuXHRcdGlmICghbGFzdFBhZ2UuY29udGVudEJlZm9yZS5sZW5ndGgpIHtcblx0XHRcdHBhZ2VDaGFuZ2VzLnBvcCgpO1xuXHRcdH1cblx0XHR1cGRhdGVDb250ZXh0KCk7XG5cdH1cbn07XG5cbi8qIE9taXQgdGhlIGN1cnJlbnQgbGluayB3aXRob3V0IG1ha2luZyBhIGNoYW5nZSAqL1xuY29uc3Qgb21pdCA9ICgpID0+IHtcblx0Y2hvb3NlUmVwbGFjZW1lbnQoKTtcbn07XG5cbi8qIFNhdmUgYWxsIHRoZSBwZW5kaW5nIGNoYW5nZXMgYW5kIHJlc3RhcnQgdGhlIHRvb2wuICovXG5jb25zdCByZWZyZXNoID0gKCkgPT4ge1xuXHRzYXZlQW5kRW5kKCk7XG5cdHN0YXJ0KCk7XG59O1xuXG4vKiBFbmFibGUgb3IgZGlzYWJsZSB0aGUgYnV0dG9ucyB0aGF0IGNhbiBwZXJmb3JtIGFjdGlvbnMgb24gYSBwYWdlIG9yIGNoYW5nZSB0aGUgY3VycmVudCBsaW5rLi8qICogZW5hYmxlZDogV2hldGhlciB0byBlbmFibGUgb3IgZGlzYWJsZSB0aGUgYnV0dG9ucyAqL1xuY29uc3QgdG9nZ2xlQWN0aW9uQnV0dG9ucyA9IChlbmFibGVkKSA9PiB7XG5cdGNvbnN0IGFmZmVjdGVkQnV0dG9ucyA9IFtcblx0XHR1aS5vbWl0QnV0dG9uLFxuXHRcdHVpLnRpdGxlQXNUZXh0QnV0dG9uLFxuXHRcdHVpLnJlbW92ZUxpbmtCdXR0b24sXG5cdFx0dWkuaW50ZW50aW9uYWxMaW5rQnV0dG9uLFxuXHRcdHVpLmRpc2FtTmVlZGVkQnV0dG9uLFxuXHRcdHVpLnVuZG9CdXR0b24sXG5cdF07XG5cdGZvciAoY29uc3QgYnV0dG9uIG9mIGFmZmVjdGVkQnV0dG9ucykge1xuXHRcdGJ1dHRvbi5wcm9wKCdkaXNhYmxlZCcsICFlbmFibGVkKTtcblx0fVxufTtcblxuLyogU2hvdyBvciBoaWRlIHRoZSAnbm8gbW9yZSBsaW5rcycgbWVzc2FnZS8qICogc2hvdzogV2hldGhlciB0byBzaG93IG9yIGhpZGUgdGhlIG1lc3NhZ2UgKi9cbmNvbnN0IHRvZ2dsZUZpbmlzaGVkTWVzc2FnZSA9IChzaG93KSA9PiB7XG5cdHRvZ2dsZUFjdGlvbkJ1dHRvbnMoIXNob3cpO1xuXHR1aS51bmRvQnV0dG9uLnByb3AoJ2Rpc2FibGVkJywgIXBhZ2VDaGFuZ2VzLmxlbmd0aCk7XG5cdHVpLmZpbmlzaGVkTWVzc2FnZS50b2dnbGUoc2hvdyk7XG5cdHVpLnBhZ2VUaXRsZUxpbmUudG9nZ2xlKCFzaG93KTtcblx0dWkuY29udGV4dC50b2dnbGUoIXNob3cpO1xufTtcblxuY29uc3QgdG9nZ2xlUGVuZGluZ0VkaXRCb3ggPSAoc2hvdykgPT4ge1xuXHRjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblx0aWYgKCFwZW5kaW5nRWRpdEJveCkge1xuXHRcdHBlbmRpbmdFZGl0Qm94ID0gJCgnPGRpdj4nKS5hZGRDbGFzcygnZGlzYW1hc3Npc3QtYm94IGRpc2FtYXNzaXN0LXBlbmRpbmdlZGl0Ym94Jyk7XG5cdFx0cGVuZGluZ0VkaXRCb3hUZXh0ID0gJCgnPGRpdj4nKTtcblx0XHRwZW5kaW5nRWRpdEJveC5hcHBlbmQocGVuZGluZ0VkaXRCb3hUZXh0KS5oaWRlKCk7XG5cdFx0aWYgKGVkaXRMaW1pdCkge1xuXHRcdFx0cGVuZGluZ0VkaXRCb3guYXBwZW5kKCQoJzxkaXY+JykudGV4dCh0eHQucGVuZGluZ0VkaXRCb3hMaW1pdGVkKS5hZGRDbGFzcygnZGlzYW1hc3Npc3Qtc3VidGl0bGUnKSk7XG5cdFx0fVxuXHRcdCRib2R5LmZpbmQoJyNtdy1jb250ZW50LXRleHQnKS5iZWZvcmUocGVuZGluZ0VkaXRCb3gpO1xuXHRcdHVwZGF0ZUVkaXRDb3VudGVyKCk7XG5cdH1cblx0aWYgKHNob3cpIHtcblx0XHRwZW5kaW5nRWRpdEJveC5mYWRlSW4oKTtcblx0fSBlbHNlIHtcblx0XHRwZW5kaW5nRWRpdEJveC5mYWRlT3V0KCk7XG5cdH1cbn07XG5cbmNvbnN0IG5vdGlmeUNvbXBsZXRpb24gPSAoKSA9PiB7XG5cdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRjb25zdCBvbGRUaXRsZSA9IGRvY3VtZW50LnRpdGxlO1xuXHRkb2N1bWVudC50aXRsZSA9IHR4dC5ub3RpZnlDaGFyYWN0ZXIgKyBkb2N1bWVudC50aXRsZTtcblx0JGJvZHkub25lKCdtb3VzZW1vdmUnLCAoKSA9PiB7XG5cdFx0ZG9jdW1lbnQudGl0bGUgPSBvbGRUaXRsZTtcblx0fSk7XG59O1xuXG4vKiBVcGRhdGUgdGhlIGRpc3BsYXllZCBpbmZvcm1hdGlvbiB0byBtYXRjaCB0aGUgY3VycmVudCBsaW5rLyogKiBvciBsYWNrIHRoZXJlb2YgKi9cbmNvbnN0IHVwZGF0ZUNvbnRleHQgPSAoKSA9PiB7XG5cdHVwZGF0ZUVkaXRDb3VudGVyKCk7XG5cdGlmIChjdXJyZW50TGluaykge1xuXHRcdHVpLnBhZ2VUaXRsZUxpbmUuaHRtbChcblx0XHRcdHR4dC5wYWdlVGl0bGVMaW5lXG5cdFx0XHRcdC5yZXBsYWNlKFxuXHRcdFx0XHRcdCckMScsXG5cdFx0XHRcdFx0bXcudXRpbC5nZXRVcmwoY3VycmVudFBhZ2VUaXRsZSwge1xuXHRcdFx0XHRcdFx0cmVkaXJlY3Q6ICdubycsXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KVxuXHRcdFx0XHQucmVwbGFjZSgnJDInLCBtdy5odG1sLmVzY2FwZShjdXJyZW50UGFnZVRpdGxlKSlcblx0XHQpO1xuXHRcdGNvbnN0IGNvbnRleHQgPSBleHRyYWN0Q29udGV4dChjdXJyZW50UGFnZVBhcmFtZXRlcnMuY29udGVudCwgY3VycmVudExpbmspO1xuXHRcdHVpLmNvbnRleHRcblx0XHRcdC5lbXB0eSgpXG5cdFx0XHQuYXBwZW5kKCQoJzxzcGFuPicpLnRleHQoY29udGV4dFswXSkpXG5cdFx0XHQuYXBwZW5kKCQoJzxzcGFuPicpLnRleHQoY29udGV4dFsxXSkuYWRkQ2xhc3MoJ2Rpc2FtYXNzaXN0LWluY2xpbmsnKSlcblx0XHRcdC5hcHBlbmQoJCgnPHNwYW4+JykudGV4dChjb250ZXh0WzJdKSk7XG5cdFx0Y29uc3QgbnVtTGluZXMgPSBNYXRoLmNlaWwodWkuY29udGV4dC5oZWlnaHQoKSAvIE51bWJlci5wYXJzZUZsb2F0KHVpLmNvbnRleHQuY3NzKCdsaW5lLWhlaWdodCcpKSk7XG5cdFx0aWYgKG51bUxpbmVzIDwgY2ZnLm51bUNvbnRleHRMaW5lcykge1xuXHRcdFx0Ly8gQWRkIGNmZy5udW1Db250ZXh0TGluZXMgLSBudW1MaW5lcyArIDEgbGluZSBicmVha3MsIHNvIHRoYXQgdGhlIHRvdGFsIG51bWJlclxuXHRcdFx0Ly8gb2YgbGluZXMgaXMgY2ZnLm51bUNvbnRleHRMaW5lc1xuXHRcdFx0dWkuY29udGV4dC5hcHBlbmQoXG5cdFx0XHRcdEFycmF5LmZyb20oe1xuXHRcdFx0XHRcdGxlbmd0aDogY2ZnLm51bUNvbnRleHRMaW5lcyAtIG51bUxpbmVzICsgMixcblx0XHRcdFx0fSkuam9pbignPGJyPicpXG5cdFx0XHQpO1xuXHRcdH1cblx0XHR0b2dnbGVGaW5pc2hlZE1lc3NhZ2UoZmFsc2UpO1xuXHRcdHVpLnVuZG9CdXR0b24ucHJvcCgnZGlzYWJsZWQnLCAhcGFnZUNoYW5nZXMubGVuZ3RoKTtcblx0XHR1aS5yZW1vdmVMaW5rQnV0dG9uLnByb3AoJ2Rpc2FibGVkJywgY3VycmVudFBhZ2VQYXJhbWV0ZXJzLnJlZGlyZWN0KTtcblx0XHR1aS5pbnRlbnRpb25hbExpbmtCdXR0b24ucHJvcCgnZGlzYWJsZWQnLCBjdXJyZW50UGFnZVBhcmFtZXRlcnMucmVkaXJlY3QpO1xuXHRcdHVpLmRpc2FtTmVlZGVkQnV0dG9uLnByb3AoJ2Rpc2FibGVkJywgY3VycmVudFBhZ2VQYXJhbWV0ZXJzLnJlZGlyZWN0IHx8IGN1cnJlbnRMaW5rLmhhc0Rpc2FtVGVtcGxhdGUpO1xuXHRcdGNob29zaW5nID0gdHJ1ZTtcblx0fSBlbHNlIHtcblx0XHR0b2dnbGVGaW5pc2hlZE1lc3NhZ2UodHJ1ZSk7XG5cdH1cbn07XG5cbi8qIFVwZGF0ZSB0aGUgY291bnQgb2YgcGVuZGluZyBjaGFuZ2VzICovXG5jb25zdCB1cGRhdGVFZGl0Q291bnRlciA9ICgpID0+IHtcblx0aWYgKHVpLnBlbmRpbmdFZGl0Q291bnRlcikge1xuXHRcdHVpLnBlbmRpbmdFZGl0Q291bnRlci50ZXh0KFxuXHRcdFx0dHh0LnBlbmRpbmdFZGl0Q291bnRlci5yZXBsYWNlKCckMScsIGVkaXRDb3VudCkucmVwbGFjZSgnJDInLCBjb3VudEFjdHVhbGx5Q2hhbmdlZEZ1bGx5Q2hlY2tlZFBhZ2VzKCkpXG5cdFx0KTtcblx0fVxuXHRpZiAocGVuZGluZ0VkaXRCb3gpIHtcblx0XHRpZiAoZWRpdENvdW50ID09PSAwICYmICFydW5uaW5nKSB7XG5cdFx0XHR0b2dnbGVQZW5kaW5nRWRpdEJveChmYWxzZSk7XG5cdFx0XHRub3RpZnlDb21wbGV0aW9uKCk7XG5cdFx0fVxuXHRcdGxldCB0ZXh0Q29udGVudCA9IGVkaXRDb3VudDtcblx0XHRpZiAoZWRpdExpbWl0KSB7XG5cdFx0XHR0ZXh0Q29udGVudCA9IHR4dC5wZW5kaW5nRWRpdEJveFRpbWVFc3RpbWF0aW9uXG5cdFx0XHRcdC5yZXBsYWNlKCckMScsIGVkaXRDb3VudClcblx0XHRcdFx0LnJlcGxhY2UoJyQyJywgc2Vjb25kc1RvSEhNTVNTKGNmZy5lZGl0Q29vbGRvd24gKiBlZGl0Q291bnQpKTtcblx0XHR9XG5cdFx0cGVuZGluZ0VkaXRCb3hUZXh0LnRleHQodHh0LnBlbmRpbmdFZGl0Qm94LnJlcGxhY2UoJyQxJywgdGV4dENvbnRlbnQpKTtcblx0fVxufTtcblxuLyogQXBwbHkgdGhlIGNoYW5nZXMgbWFkZSB0byBhbiBcIm9yaWdpblwiIHBhZ2UvKiAqIHBhZ2VDaGFuZ2U6IENoYW5nZSB0aGF0IHdpbGwgYmUgc2F2ZWQgKi9cbmNvbnN0IGFwcGx5Q2hhbmdlID0gKHBhZ2VDaGFuZ2UpID0+IHtcblx0aWYgKHBhZ2VDaGFuZ2UucGFnZS5jb250ZW50ICE9PSBwYWdlQ2hhbmdlLmNvbnRlbnRCZWZvcmVbMF0pIHtcblx0XHRlZGl0Q291bnQrKztcblx0XHRjb25zdCBjaGFuZ2VTdW1tYXJpZXMgPSBwYWdlQ2hhbmdlLnN1bW1hcnkuam9pbih0eHQuc3VtbWFyeVNlcGFyYXRvcik7XG5cdFx0Y29uc3Qgc3VtbWFyeSA9IHR4dC5zdW1tYXJ5LnJlcGxhY2UoJyQxJywgZ2V0VGFyZ2V0UGFnZSgpKS5yZXBsYWNlKCckMicsIGNoYW5nZVN1bW1hcmllcyk7XG5cdFx0Y29uc3Qgc2F2ZSA9IGVkaXRMaW1pdCA/IHNhdmVXaXRoQ29vbGRvd24gOiBzYXZlUGFnZTtcblx0XHRzYXZlKHBhZ2VDaGFuZ2UudGl0bGUsIHBhZ2VDaGFuZ2UucGFnZSwgc3VtbWFyeSwgdHJ1ZSwgdHJ1ZSlcblx0XHRcdC5hbHdheXMoKCkgPT4ge1xuXHRcdFx0XHRpZiAoZWRpdENvdW50ID4gMCkge1xuXHRcdFx0XHRcdGVkaXRDb3VudC0tO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHVwZGF0ZUVkaXRDb3VudGVyKCk7XG5cdFx0XHR9KVxuXHRcdFx0LmZhaWwoZXJyb3IpO1xuXHRcdHVwZGF0ZUVkaXRDb3VudGVyKCk7XG5cdH1cbn07XG5cbi8qIFNhdmUgYWxsIHRoZSBwZW5kaW5nIGNoYW5nZXMgKi9cbmNvbnN0IGFwcGx5QWxsQ2hhbmdlcyA9ICgpID0+IHtcblx0Zm9yIChjb25zdCBwYWdlQ2hhbmdlIG9mIHBhZ2VDaGFuZ2VzKSB7XG5cdFx0YXBwbHlDaGFuZ2UocGFnZUNoYW5nZSk7XG5cdH1cblx0cGFnZUNoYW5nZXMgPSBbXTtcbn07XG5cbi8qIFJlY29yZCBhIG5ldyBwZW5kaW5nIGNoYW5nZS8qICogcGFnZVRpdGxlOiBUaXRsZSBvZiB0aGUgcGFnZS8qICogcGFnZTogQ29udGVudCBvZiB0aGUgcGFnZS8qICogb2xkQ29udGVudDogQ29udGVudCBvZiB0aGUgcGFnZSBiZWZvcmUgdGhlIGNoYW5nZS8qICogbGluazogTGluayB0aGF0IGhhcyBiZWVuIGNoYW5nZWQvKiAqIHN1bW1hcnk6IENoYW5nZSBzdW1tYXJ5ICovXG5jb25zdCBhZGRDaGFuZ2UgPSAocGFnZVRpdGxlLCBwYWdlLCBvbGRDb250ZW50LCBsaW5rLCBzdW1tYXJ5KSA9PiB7XG5cdGlmICghcGFnZUNoYW5nZXMubGVuZ3RoIHx8IHBhZ2VDaGFuZ2VzLmF0KC0xKS50aXRsZSAhPT0gcGFnZVRpdGxlKSB7XG5cdFx0cGFnZUNoYW5nZXMucHVzaCh7XG5cdFx0XHR0aXRsZTogcGFnZVRpdGxlLFxuXHRcdFx0cGFnZSxcblx0XHRcdGNvbnRlbnRCZWZvcmU6IFtdLFxuXHRcdFx0bGlua3M6IFtdLFxuXHRcdFx0c3VtbWFyeTogW10sXG5cdFx0fSk7XG5cdH1cblx0Y29uc3QgbGFzdFBhZ2VDaGFuZ2UgPSBwYWdlQ2hhbmdlcy5hdCgtMSk7XG5cdGxhc3RQYWdlQ2hhbmdlLmNvbnRlbnRCZWZvcmUucHVzaChvbGRDb250ZW50KTtcblx0bGFzdFBhZ2VDaGFuZ2UubGlua3MucHVzaChsaW5rKTtcblx0bGFzdFBhZ2VDaGFuZ2Uuc3VtbWFyeS5wdXNoKHN1bW1hcnkpO1xufTtcblxuLyogQ2hlY2sgd2hldGhlciBhY3R1YWwgY2hhbmdlcyBhcmUgc3RvcmVkIGluIHRoZSBoaXN0b3J5IGFycmF5ICovXG5jb25zdCBjaGVja0FjdHVhbENoYW5nZXMgPSAoKSA9PiB7XG5cdHJldHVybiBjb3VudEFjdHVhbENoYW5nZXMoKSAhPT0gMDtcbn07XG5cbi8qIFJldHVybiB0aGUgbnVtYmVyIG9mIGVudHJpZXMgaW4gdGhlIGhpc3RvcnkgYXJyYXkgdGhhdCByZXByZXNlbnQgYWN0dWFsIGNoYW5nZXMgKi9cbmNvbnN0IGNvdW50QWN0dWFsQ2hhbmdlcyA9ICgpID0+IHtcblx0bGV0IGNoYW5nZUNvdW50ID0gMDtcblx0Zm9yIChjb25zdCBwYWdlQ2hhbmdlIG9mIHBhZ2VDaGFuZ2VzKSB7XG5cdFx0aWYgKHBhZ2VDaGFuZ2UucGFnZS5jb250ZW50ICE9PSBwYWdlQ2hhbmdlLmNvbnRlbnRCZWZvcmVbMF0pIHtcblx0XHRcdGNoYW5nZUNvdW50Kys7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBjaGFuZ2VDb3VudDtcbn07XG5cbi8qIFJldHVybiB0aGUgbnVtYmVyIG9mIGNoYW5nZWQgcGFnZXMgaW4gdGhlIGhpc3RvcnkgYXJyYXksIGlnbm9yaW5nIHRoZSBsYXN0IGVudHJ5LyogKiBpZiB3ZSBhcmVuJ3QgZG9uZSB3aXRoIHRoYXQgcGFnZSB5ZXQgKi9cbmNvbnN0IGNvdW50QWN0dWFsbHlDaGFuZ2VkRnVsbHlDaGVja2VkUGFnZXMgPSAoKSA9PiB7XG5cdGxldCBjaGFuZ2VDb3VudCA9IGNvdW50QWN0dWFsQ2hhbmdlcygpO1xuXHRpZiAocGFnZUNoYW5nZXMubGVuZ3RoKSB7XG5cdFx0Y29uc3QgbGFzdENoYW5nZSA9IHBhZ2VDaGFuZ2VzLmF0KC0xKTtcblx0XHRpZiAoXG5cdFx0XHRsYXN0Q2hhbmdlLnRpdGxlID09PSBjdXJyZW50UGFnZVRpdGxlICYmXG5cdFx0XHRjdXJyZW50TGluayAmJlxuXHRcdFx0bGFzdENoYW5nZS5wYWdlLmNvbnRlbnQgIT09IGxhc3RDaGFuZ2UuY29udGVudEJlZm9yZVswXVxuXHRcdCkge1xuXHRcdFx0Y2hhbmdlQ291bnQtLTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGNoYW5nZUNvdW50O1xufTtcblxuLyogRmluZCB0aGUgbGlua3MgdG8gZGlzYW1iaWd1YXRpb24gb3B0aW9ucyBpbiBhIGRpc2FtYmlndWF0aW9uIHBhZ2UgKi9cbmNvbnN0IGdldERpc2FtT3B0aW9ucyA9ICgpID0+IHtcblx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdHJldHVybiAkYm9keS5maW5kKCcjbXctY29udGVudC10ZXh0IGEnKS5maWx0ZXIoKF9pbmRleCwgZWxlbWVudCkgPT4ge1xuXHRcdHJldHVybiAhIWV4dHJhY3RQYWdlTmFtZSgkKGVsZW1lbnQpKTtcblx0fSk7XG59O1xuXG4vKiBTYXZlIGFsbCB0aGUgcGVuZGluZyBjaGFuZ2VzIGFuZCBjbG9zZSB0aGUgdG9vbCAqL1xuY29uc3Qgc2F2ZUFuZEVuZCA9ICgpID0+IHtcblx0YXBwbHlBbGxDaGFuZ2VzKCk7XG5cdGVuZCgpO1xufTtcblxuLyogQ2xvc2UgdGhlIHRvb2wgKi9cbmNvbnN0IGVuZCA9ICgpID0+IHtcblx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdGNvbnN0IGN1cnJlbnRUb29sVUkgPSB1aS5kaXNwbGF5O1xuXHRjaG9vc2luZyA9IGZhbHNlO1xuXHRydW5uaW5nID0gZmFsc2U7XG5cdHN0YXJ0TGluay5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcblx0JGJvZHkuZmluZCgnLmRpc2FtYXNzaXN0LW9wdGlvbm1hcmtlcicpLnJlbW92ZSgpO1xuXHRjdXJyZW50VG9vbFVJLmZhZGVPdXQoe1xuXHRcdGNvbXBsZXRlKCkge1xuXHRcdFx0Y3VycmVudFRvb2xVSS5yZW1vdmUoKTtcblx0XHRcdGlmIChlZGl0Q291bnQpIHtcblx0XHRcdFx0dG9nZ2xlUGVuZGluZ0VkaXRCb3godHJ1ZSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0fSk7XG59O1xuXG4vKiBEaXNwbGF5IGFuIGVycm9yIG1lc3NhZ2UgKi9cbmNvbnN0IGVycm9yID0gKGVycm9yRGVzY3JpcHRpb24pID0+IHtcblx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdGNvbnN0IGVycm9yQm94ID0gJCgnPGRpdj4nKS5hZGRDbGFzcygnZGlzYW1hc3Npc3QtYm94IGRpc2FtYXNzaXN0LWVycm9yYm94Jyk7XG5cdGVycm9yQm94LnRleHQodHh0LmVycm9yLnJlcGxhY2UoJyQxJywgZXJyb3JEZXNjcmlwdGlvbikpO1xuXHRlcnJvckJveC5hcHBlbmQoXG5cdFx0Y3JlYXRlQnV0dG9uKHR4dC5kaXNtaXNzRXJyb3IsICgpID0+IHtcblx0XHRcdGVycm9yQm94LmZhZGVPdXQoKTtcblx0XHR9KS5hZGRDbGFzcygnZGlzYW1hc3Npc3QtZXJyb3JidXR0b24nKVxuXHQpO1xuXHRjb25zdCB1aUlzSW5QbGFjZSA9IHVpICYmICQuY29udGFpbnMoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCB1aS5kaXNwbGF5WzBdKTtcblx0Y29uc3QgbmV4dEVsZW1lbnQgPSB1aUlzSW5QbGFjZSA/IHVpLmRpc3BsYXkgOiAkYm9keS5maW5kKCcjbXctY29udGVudC10ZXh0Jyk7XG5cdG5leHRFbGVtZW50LmJlZm9yZShlcnJvckJveCk7XG5cdGVycm9yQm94LmhpZGUoKS5mYWRlSW4oKTtcbn07XG5cbi8qIENoYW5nZSBhIGxpbmsgc28gdGhhdCBpdCBwb2ludHMgdG8gdGhlIHRpdGxlLyogKiB0ZXh0OiBUaGUgd2lraXRleHQgb2YgdGhlIHdob2xlIHBhZ2UvKiAqIHRpdGxlOiBUaGUgbmV3IGRlc3RpbmF0aW9uIG9mIHRoZSBsaW5rLyogKiBsaW5rOiBUaGUgbGluayB0aGF0IHdpbGwgYmUgbW9kaWZpZWQvKiAqIGV4dHJhOiBUZXh0IHRoYXQgd2lsbCBiZSBhZGRlZCBhZnRlciB0aGUgbGluayAob3B0aW9uYWwpICovXG5jb25zdCByZXBsYWNlTGluayA9ICh0ZXh0LCB0aXRsZSwgbGluaywgZXh0cmEpID0+IHtcblx0bGV0IG5ld0NvbnRlbnQ7XG5cdGlzU2FtZVBhZ2UodGl0bGUsIGxpbmsuZGVzY3JpcHRpb24pXG5cdFx0PyAvLyBbW0J8QV1dIHNob3VsZCBiZSByZXBsYWNlZCB3aXRoIFtbQV1dIHJhdGhlciB0aGFuIFtbQXxBXV1cblx0XHRcdChuZXdDb250ZW50ID0gbGluay5kZXNjcmlwdGlvbilcblx0XHQ6IChuZXdDb250ZW50ID0gYCR7dGl0bGV9fCR7bGluay5kZXNjcmlwdGlvbn1gKTtcblx0Y29uc3QgbGlua1N0YXJ0ID0gdGV4dC5zbGljZSgwLCBNYXRoLm1heCgwLCBsaW5rLnN0YXJ0KSk7XG5cdGNvbnN0IGxpbmtFbmQgPSB0ZXh0LnNsaWNlKE1hdGgubWF4KDAsIGxpbmsuZW5kKSk7XG5cdHJldHVybiBgJHtsaW5rU3RhcnR9W1ske25ld0NvbnRlbnR9XV0ke2xpbmsuYWZ0ZXJEZXNjcmlwdGlvbn0ke2V4dHJhIHx8ICcnfSR7bGlua0VuZH1gO1xufTtcblxuLyogUmVtb3ZlIGEgbGluayBmcm9tIHRoZSB0ZXh0LyogKiB0ZXh0OiBUaGUgd2lraXRleHQgb2YgdGhlIHdob2xlIHBhZ2UvKiAqIGxpbms6IFRoZSBsaW5rIHRoYXQgd2lsbCBiZSByZW1vdmVkICovXG5jb25zdCByZW1vdmVMaW5rID0gKHRleHQsIGxpbmspID0+IHtcblx0Y29uc3QgbGlua1N0YXJ0ID0gdGV4dC5zbGljZSgwLCBNYXRoLm1heCgwLCBsaW5rLnN0YXJ0KSk7XG5cdGNvbnN0IGxpbmtFbmQgPSB0ZXh0LnNsaWNlKE1hdGgubWF4KDAsIGxpbmsuZW5kKSk7XG5cdHJldHVybiBsaW5rU3RhcnQgKyBsaW5rLmRlc2NyaXB0aW9uICsgbGluay5hZnRlckRlc2NyaXB0aW9uICsgbGlua0VuZDtcbn07XG5cbi8qIEV4dHJhY3QgYSBsaW5rIGZyb20gYSBzdHJpbmcgaW4gd2lraSBmb3JtYXQsLyogKiBzdGFydGluZyBmcm9tIGEgZ2l2ZW4gaW5kZXguIFJldHVybiBhIGxpbmsgaWYgb25lIGNhbiBiZSBmb3VuZCwvKiAqIG90aGVyd2lzZSByZXR1cm4gbnVsbC4gVGhlIFwibGlua1wiIGluY2x1ZGVzIFwiZGlzYW1iaWd1YXRpb24gbmVlZGVkXCIvKiAqIHRlbXBsYXRlcyBpbm1lZGlhdGVseSBmb2xsb3dpbmcgdGhlIGxpbmsgcHJvcGVyLyogKiB0ZXh0OiBUZXh0IGZyb20gd2hpY2ggdGhlIGxpbmsgd2lsbCBiZSBleHRyYWN0ZWQvKiAqIGxhc3RJbmRleDogSW5kZXggZnJvbSB3aGljaCB0aGUgc2VhcmNoIHdpbGwgc3RhcnQgKi9cbmNvbnN0IGV4dHJhY3RMaW5rID0gKHRleHQsIGxhc3RJbmRleCkgPT4ge1xuXHQvLyBGSVhNRTogTm90IGFuIGFjdHVhbCB0aXRsZSByZWdleCAobG90cyBvZiBmYWxzZSBwb3NpdGl2ZXNcblx0Ly8gYW5kIHNvbWUgZmFsc2UgbmVnYXRpdmVzKSwgYnV0IGhvcGVmdWxseSBnb29kIGVub3VnaC5cblx0Y29uc3QgdGl0bGVSZWdleCA9IC9cXFtcXFsoLio/KSg/OlxcfCguKj8pKT9dXS9nO1xuXHQvLyBEaXR0byBmb3IgdGhlIHRlbXBsYXRlIHJlZ2V4LiBEaXNhbWJpZ3VhdGlvbiBsaW5rIHRlbXBsYXRlc1xuXHQvLyBzaG91bGQgYmUgc2ltcGxlIGVub3VnaCBmb3IgdGhpcyBub3QgdG8gbWF0dGVyLCB0aG91Z2guXG5cdGNvbnN0IHRlbXBsYXRlUmVnZXggPSAvXihcXHcqW1xccyEpLC46Oz99XSope3tcXHMqKFtee3x9XSs/KVxccyooPzpcXHxbXntdKj8pP319Lztcblx0dGl0bGVSZWdleC5sYXN0SW5kZXggPSBsYXN0SW5kZXg7XG5cdGNvbnN0IG1hdGNoID0gdGl0bGVSZWdleC5leGVjKHRleHQpO1xuXHRpZiAobWF0Y2ggJiYgbWF0Y2guaW5kZXggIT09IC0xKSB7XG5cdFx0bGV0IHBvc3NpYmx5QW1iaWd1b3VzID0gdHJ1ZTtcblx0XHRsZXQgaGFzRGlzYW1UZW1wbGF0ZSA9IGZhbHNlO1xuXHRcdGxldCBfZW5kID0gbWF0Y2guaW5kZXggKyA0ICsgbWF0Y2hbMV0ubGVuZ3RoICsgKG1hdGNoWzJdID8gMSArIG1hdGNoWzJdLmxlbmd0aCA6IDApO1xuXHRcdGxldCBhZnRlckRlc2NyaXB0aW9uID0gJyc7XG5cdFx0Y29uc3QgcmVzdCA9IHRleHQuc2xpY2UoTWF0aC5tYXgoMCwgX2VuZCkpO1xuXHRcdGNvbnN0IHRlbXBsYXRlTWF0Y2ggPSB0ZW1wbGF0ZVJlZ2V4LmV4ZWMocmVzdCk7XG5cdFx0aWYgKHRlbXBsYXRlTWF0Y2gpIHtcblx0XHRcdGNvbnN0IHRlbXBsYXRlVGl0bGUgPSBnZXRDYW5vbmljYWxUaXRsZSh0ZW1wbGF0ZU1hdGNoWzJdKTtcblx0XHRcdGNvbnN0IHtkaXNhbUxpbmtUZW1wbGF0ZXN9ID0gY2ZnO1xuXHRcdFx0Y29uc3Qge2Rpc2FtTGlua0lnbm9yZVRlbXBsYXRlc30gPSBjZmc7XG5cdFx0XHRpZiAoZGlzYW1MaW5rVGVtcGxhdGVzLmluY2x1ZGVzKHRlbXBsYXRlVGl0bGUpKSB7XG5cdFx0XHRcdF9lbmQgKz0gdGVtcGxhdGVNYXRjaFswXS5sZW5ndGg7XG5cdFx0XHRcdGFmdGVyRGVzY3JpcHRpb24gPSB0ZW1wbGF0ZU1hdGNoWzFdLnJlcGxhY2UoL1xccyQvLCAnJyk7XG5cdFx0XHRcdGhhc0Rpc2FtVGVtcGxhdGUgPSB0cnVlO1xuXHRcdFx0fSBlbHNlIGlmIChkaXNhbUxpbmtJZ25vcmVUZW1wbGF0ZXMuaW5jbHVkZXModGVtcGxhdGVUaXRsZSkpIHtcblx0XHRcdFx0cG9zc2libHlBbWJpZ3VvdXMgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHtcblx0XHRcdHN0YXJ0OiBtYXRjaC5pbmRleCxcblx0XHRcdGVuZDogX2VuZCxcblx0XHRcdHBvc3NpYmx5QW1iaWd1b3VzLFxuXHRcdFx0aGFzRGlzYW1UZW1wbGF0ZSxcblx0XHRcdHRpdGxlOiBtYXRjaFsxXSxcblx0XHRcdGRlc2NyaXB0aW9uOiBtYXRjaFsyXSA/PyBtYXRjaFsxXSxcblx0XHRcdGFmdGVyRGVzY3JpcHRpb24sXG5cdFx0fTtcblx0fVxufTtcblxuLyogRXh0cmFjdCBhIGxpbmsgdG8gb25lIG9mIGEgbnVtYmVyIG9mIGRlc3RpbmF0aW9uIHBhZ2VzIGZyb20gYSBzdHJpbmcvKiAqIChcInRleHRcIikgaW4gd2lraSBmb3JtYXQsIHN0YXJ0aW5nIGZyb20gYSBnaXZlbiBpbmRleCAoXCJsYXN0SW5kZXhcIikuLyogKiBcIkRpc2FtYmlndWF0aW9uIG5lZWRlZFwiIHRlbXBsYXRlcyBhcmUgaW5jbHVkZWQgYXMgcGFydCBvZiB0aGUgbGlua3MuLyogKiB0ZXh0OiBQYWdlIGluIHdpa2kgZm9ybWF0LyogKiBkZXN0aW5hdGlvbnM6IEFycmF5IG9mIHBhZ2UgdGl0bGVzIHRvIGxvb2sgZm9yLyogKiBsYXN0SW5kZXg6IEluZGV4IGZyb20gd2hpY2ggdGhlIHNlYXJjaCB3aWxsIHN0YXJ0ICovXG5jb25zdCBleHRyYWN0TGlua1RvUGFnZSA9ICh0ZXh0LCBkZXN0aW5hdGlvbnMsIGxhc3RJbmRleCkgPT4ge1xuXHRsZXQgbGluaztcblx0bGV0IHRpdGxlO1xuXHRkbyB7XG5cdFx0bGluayA9IGV4dHJhY3RMaW5rKHRleHQsIGxhc3RJbmRleCk7XG5cdFx0aWYgKGxpbmspIHtcblx0XHRcdGxhc3RJbmRleCA9IGxpbmsuZW5kO1xuXHRcdFx0dGl0bGUgPSBnZXRDYW5vbmljYWxUaXRsZShsaW5rLnRpdGxlKTtcblx0XHR9XG5cdH0gd2hpbGUgKGxpbmsgJiYgKCFsaW5rLnBvc3NpYmx5QW1iaWd1b3VzIHx8ICFkZXN0aW5hdGlvbnM/LmluY2x1ZGVzKHRpdGxlKSkpO1xuXHRyZXR1cm4gbGluaztcbn07XG5cbi8qIEZpbmQgdGhlIFwidGFyZ2V0XCIgcGFnZTogZWl0aGVyIHRoZSBvbmUgd2UgYXJlIGluIG9yIHRoZSBcIm1haW5cIiBvbmUgZm91bmQgYnkgZXh0cmFjdGluZy8qICogdGhlIHRpdGxlIGZyb20gXCIuKiAoZGlzYW1iaWd1YXRpb24pXCIgb3Igd2hhdGV2ZXIgdGhlIGFwcHJvcGlhdGUgbG9jYWwgZm9ybWF0IGlzICovXG5jb25zdCBnZXRUYXJnZXRQYWdlID0gKCkgPT4ge1xuXHRjb25zdCB0aXRsZSA9IGdldFRpdGxlKCk7XG5cdHJldHVybiBmb3JjZVNhbWVQYWdlID8gdGl0bGUgOiByZW1vdmVEaXNhbSh0aXRsZSk7XG59O1xuXG4vKiBHZXQgdGhlIHBhZ2UgdGl0bGUsIHdpdGggdGhlIG5hbWVzcGFjZSBwcmVmaXggaWYgYW55LiAqL1xuY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB7XG5cdHJldHVybiBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJykucmVwbGFjZSgvXy9nLCAnICcpO1xufTtcblxuLyogRXh0cmFjdCBhIFwibWFpblwiIHRpdGxlIGZyb20gXCIuKiAoZGlzYW1iaWd1YXRpb24pXCIgb3Igd2hhdGV2ZXIgdGhlIGFwcHJvcGlhdGUgbG9jYWwgZm9ybWF0IGlzICovXG5jb25zdCByZW1vdmVEaXNhbSA9ICh0aXRsZSkgPT4ge1xuXHRjb25zdCBtYXRjaCA9IG5ldyBSZWdFeHAoY2ZnLmRpc2FtUmVnRXhwKS5leGVjKHRpdGxlKTtcblx0cmV0dXJuIG1hdGNoPy5bMV0gPz8gdGl0bGU7XG59O1xuXG4vKiBDaGVjayB3aGV0aGVyIHR3byBwYWdlIHRpdGxlcyBhcmUgdGhlIHNhbWUgKi9cbmNvbnN0IGlzU2FtZVBhZ2UgPSAodGl0bGUxLCB0aXRsZTIpID0+IHtcblx0cmV0dXJuIGdldENhbm9uaWNhbFRpdGxlKHRpdGxlMSkgPT09IGdldENhbm9uaWNhbFRpdGxlKHRpdGxlMik7XG59O1xuXG4vKiBSZXR1cm4gdGhlICdjYW5vbmljYWwgdGl0bGUnIG9mIGEgcGFnZSAqL1xuY29uc3QgZ2V0Q2Fub25pY2FsVGl0bGUgPSAodGl0bGUpID0+IHtcblx0dHJ5IHtcblx0XHQvLyBtdy5UaXRsZSBzZWVtcyB0byBiZSBidWdneSwgYW5kIHNvbWUgdmFsaWQgdGl0bGVzIGFyZSByZWplY3RlZFxuXHRcdC8vIEZJWE1FOiBUaGlzIG1heSBjYXVzZSBmYWxzZSBuZWdhdGl2ZXNcblx0XHR0aXRsZSA9IG5ldyBtdy5UaXRsZSh0aXRsZSkuZ2V0UHJlZml4ZWRUZXh0KCk7XG5cdH0gY2F0Y2gge1xuXHRcdC8qIGVtcHR5ICovXG5cdH1cblx0cmV0dXJuIHRpdGxlO1xufTtcblxuLyogRXh0cmFjdCB0aGUgY29udGV4dCBhcm91bmQgYSBnaXZlbiBsaW5rIGluIGEgdGV4dCBzdHJpbmcgKi9cbmNvbnN0IGV4dHJhY3RDb250ZXh0ID0gKHRleHQsIGxpbmspID0+IHtcblx0Y29uc3QgY29udGV4dFN0YXJ0ID0gbGluay5zdGFydCAtIGNmZy5yYWRpdXM7XG5cdGNvbnN0IGNvbnRleHRFbmQgPSBsaW5rLmVuZCArIGNmZy5yYWRpdXM7XG5cdGxldCBjb250ZXh0UHJldiA9IHRleHQuc2xpY2UoY29udGV4dFN0YXJ0LCBsaW5rLnN0YXJ0KTtcblx0aWYgKGNvbnRleHRTdGFydCA+IDApIHtcblx0XHRjb250ZXh0UHJldiA9IHR4dC5lbGxpcHNpcyArIGNvbnRleHRQcmV2O1xuXHR9XG5cdGxldCBjb250ZXh0TmV4dCA9IHRleHQuc2xpY2UobGluay5lbmQsIGNvbnRleHRFbmQpO1xuXHRpZiAoY29udGV4dEVuZCA8IHRleHQubGVuZ3RoKSB7XG5cdFx0Y29udGV4dE5leHQgKz0gdHh0LmVsbGlwc2lzO1xuXHR9XG5cdHJldHVybiBbY29udGV4dFByZXYsIHRleHQuc2xpY2UobGluay5zdGFydCwgbGluay5lbmQpLCBjb250ZXh0TmV4dF07XG59O1xuXG4vKiBFeHRyYWN0IHRoZSBwcmVmaXhlZCBwYWdlIG5hbWUgZnJvbSBhIGxpbmsgKi9cbmNvbnN0IGV4dHJhY3RQYWdlTmFtZSA9IChsaW5rKSA9PiB7XG5cdGxldCBwYWdlTmFtZSA9IGV4dHJhY3RQYWdlTmFtZVJhdyhsaW5rKTtcblx0aWYgKHBhZ2VOYW1lKSB7XG5cdFx0Y29uc3Qgc2VjdGlvblBvcyA9IHBhZ2VOYW1lLmluZGV4T2YoJyMnKTtcblx0XHRsZXQgc2VjdGlvbiA9ICcnO1xuXHRcdGlmIChzZWN0aW9uUG9zICE9PSAtMSkge1xuXHRcdFx0c2VjdGlvbiA9IHBhZ2VOYW1lLnNsaWNlKE1hdGgubWF4KDAsIHNlY3Rpb25Qb3MpKTtcblx0XHRcdHBhZ2VOYW1lID0gcGFnZU5hbWUuc2xpY2UoMCwgTWF0aC5tYXgoMCwgc2VjdGlvblBvcykpO1xuXHRcdH1cblx0XHRyZXR1cm4gZ2V0Q2Fub25pY2FsVGl0bGUocGFnZU5hbWUpICsgc2VjdGlvbjtcblx0fVxufTtcblxuLyogRXh0cmFjdCB0aGUgcGFnZSBuYW1lIGZyb20gYSBsaW5rLCBhcyBpcyAqL1xuY29uc3QgZXh0cmFjdFBhZ2VOYW1lUmF3ID0gKGxpbmspID0+IHtcblx0aWYgKCFsaW5rLmhhc0NsYXNzKCdpbWFnZScpKSB7XG5cdFx0Y29uc3QgaHJlZiA9IGxpbmsuYXR0cignaHJlZicpO1xuXHRcdGlmIChsaW5rLmhhc0NsYXNzKCduZXcnKSkge1xuXHRcdFx0Ly8gXCJSZWRcIiBsaW5rXG5cdFx0XHRpZiAoaHJlZi5pbmNsdWRlcyhtdy5jb25maWcuZ2V0KCd3Z1NjcmlwdCcpKSkge1xuXHRcdFx0XHRyZXR1cm4gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCd0aXRsZScsIGhyZWYpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCByZWdleCA9IG13LmNvbmZpZy5nZXQoJ3dnQXJ0aWNsZVBhdGgnKS5yZXBsYWNlKCckMScsICcoLiopJyk7XG5cdFx0XHRjb25zdCByZWdleFJlc3VsdCA9IG5ldyBSZWdFeHAoYF4ke3JlZ2V4fSRgKS5leGVjKGhyZWYpO1xuXHRcdFx0aWYgKEFycmF5LmlzQXJyYXkocmVnZXhSZXN1bHQpICYmIHJlZ2V4UmVzdWx0Lmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHJlZ2V4UmVzdWx0WzFdKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn07XG5cbi8qIENoZWNrIHdoZXRoZXIgdGhpcyBpcyBhIGRpc2FtYmlndWF0aW9uIHBhZ2UgKi9cbmNvbnN0IGlzRGlzYW0gPSAoKSA9PiB7XG5cdGNvbnN0IGNhdGVnb3JpZXMgPSBtdy5jb25maWcuZ2V0KCd3Z0NhdGVnb3JpZXMnLCBbXSk7XG5cdGZvciAoY29uc3QgY2F0ZWdvcnkgb2YgY2F0ZWdvcmllcykge1xuXHRcdGNvbnN0IHtkaXNhbUNhdGVnb3JpZXN9ID0gY2ZnO1xuXHRcdGlmIChkaXNhbUNhdGVnb3JpZXMuaW5jbHVkZXMoY2F0ZWdvcnkpKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3Qgc2Vjb25kc1RvSEhNTVNTID0gKHRvdGFsU2Vjb25kcykgPT4ge1xuXHRsZXQgaGhtbXNzID0gJyc7XG5cdGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcih0b3RhbFNlY29uZHMgLyAzNjAwKTtcblx0Y29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoKHRvdGFsU2Vjb25kcyAlIDM2MDApIC8gNjApO1xuXHRjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcigodG90YWxTZWNvbmRzICUgMzYwMCkgJSA2MCk7XG5cdGlmIChob3VycyA+PSAxKSB7XG5cdFx0aGhtbXNzID0gYCR7cGFkKGhvdXJzLCAnMCcsIDIpfTpgO1xuXHR9XG5cdGhobW1zcyArPSBgJHtwYWQobWludXRlcywgJzAnLCAyKX06JHtwYWQoc2Vjb25kcywgJzAnLCAyKX1gO1xuXHRyZXR1cm4gaGhtbXNzO1xufTtcblxuY29uc3QgcGFkID0gKHN0ciwgeiwgd2lkdGgpID0+IHtcblx0c3RyID0gc3RyLnRvU3RyaW5nKCk7XG5cdGlmIChzdHIubGVuZ3RoID49IHdpZHRoKSB7XG5cdFx0cmV0dXJuIHN0cjtcblx0fVxuXHRyZXR1cm4gKFxuXHRcdEFycmF5LmZyb20oe1xuXHRcdFx0bGVuZ3RoOiB3aWR0aCAtIHN0ci5sZW5ndGggKyAxLFxuXHRcdH0pLmpvaW4oeikgKyBzdHJcblx0KTtcbn07XG5cbi8qIENyZWF0ZSBhIG5ldyBidXR0b25cbiAqIHRleHQ6IFRleHQgdGhhdCB3aWxsIGJlIGRpc3BsYXllZCBvbiB0aGUgYnV0dG9uXG4gKiBvbkNsaWNrOiBGdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlXG4gKiBidXR0b24gaXMgY2xpY2tlZFxuICovXG5jb25zdCBjcmVhdGVCdXR0b24gPSAodGV4dCwgb25DbGljaykgPT4ge1xuXHRjb25zdCBidXR0b24gPSAkKCc8aW5wdXQ+JykuYXR0cih7XG5cdFx0dHlwZTogJ2J1dHRvbicsXG5cdFx0dmFsdWU6IHRleHQsXG5cdH0pO1xuXHRidXR0b24uYWRkQ2xhc3MoJ2Rpc2FtYXNzaXN0LWJ1dHRvbicpLm9uKCdjbGljaycsIG9uQ2xpY2spO1xuXHRyZXR1cm4gYnV0dG9uO1xufTtcblxuLyogR2l2ZW4gYSBwYWdlIHRpdGxlIGFuZCBhbiBhcnJheSBvZiBwb3NzaWJsZSByZWRpcmVjdHMge2Zyb20sIHRvfSAoXCJjYW5vbmljYWwgdGl0bGVzXCIpLCBmaW5kIHRoZSBwYWdlLyogKiBhdCB0aGUgZW5kIG9mIHRoZSByZWRpcmVjdCBjaGFpbiwgaWYgdGhlcmUgaXMgb25lLiBPdGhlcndpc2UsIHJldHVybiB0aGUgcGFnZSB0aXRsZSB0aGF0IHdhcyBwYXNzZWQgKi9cbmNvbnN0IHJlc29sdmVSZWRpcmVjdCA9IChwYWdlVGl0bGUsIHBvc3NpYmxlUmVkaXJlY3RzKSA9PiB7XG5cdGxldCBhcHBsaWVkUmVkaXJlY3QgPSB0cnVlO1xuXHRjb25zdCB2aXNpdGVkUGFnZXMgPSB7fTtcblx0bGV0IGN1cnJlbnRQYWdlID0gZ2V0Q2Fub25pY2FsVGl0bGUocGFnZVRpdGxlKTtcblx0d2hpbGUgKGFwcGxpZWRSZWRpcmVjdCkge1xuXHRcdGFwcGxpZWRSZWRpcmVjdCA9IGZhbHNlO1xuXHRcdGZvciAoY29uc3QgcG9zc2libGVSZWRpcmVjdCBvZiBwb3NzaWJsZVJlZGlyZWN0cykge1xuXHRcdFx0aWYgKHBvc3NpYmxlUmVkaXJlY3QuZnJvbSA9PT0gY3VycmVudFBhZ2UpIHtcblx0XHRcdFx0aWYgKHZpc2l0ZWRQYWdlc1twb3NzaWJsZVJlZGlyZWN0LnRvXSkge1xuXHRcdFx0XHRcdC8vIFJlZGlyZWN0IGNoYWluIGRldGVjdGVkXG5cdFx0XHRcdFx0cmV0dXJuIHBhZ2VUaXRsZTtcblx0XHRcdFx0fVxuXHRcdFx0XHR2aXNpdGVkUGFnZXNbY3VycmVudFBhZ2VdID0gdHJ1ZTtcblx0XHRcdFx0YXBwbGllZFJlZGlyZWN0ID0gdHJ1ZTtcblx0XHRcdFx0Y3VycmVudFBhZ2UgPSBwb3NzaWJsZVJlZGlyZWN0LnRvO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHQvLyBObyByZWRpcmVjdCBydWxlcyBhcHBsaWVkIGZvciBhbiBpdGVyYXRpb24gb2YgdGhlIG91dGVyIGxvb3A6XG5cdC8vIG5vIG1vcmUgcmVkaXJlY3RzLiBXZSBhcmUgZG9uZVxuXHRyZXR1cm4gY3VycmVudFBhZ2U7XG59O1xuXG4vKiBGZXRjaCB0aGUgaW5jb21pbmcgbGlua3MgdG8gYSBwYWdlLiBSZXR1cm5zIGEgalF1ZXJ5IHByb21pc2UvKiAqIChzdWNjZXNzIC0gYXJyYXkgb2YgdGl0bGVzIG9mIHBhZ2VzIHRoYXQgY29udGFpbiBsaW5rcyB0byB0aGUgdGFyZ2V0IHBhZ2UgYW5kLyogKiBhcnJheSBvZiBcImNhbm9uaWNhbCB0aXRsZXNcIiBvZiBwb3NzaWJsZSBkZXN0aW5hdGlvbnMgb2YgdGhlIGJhY2tsaW5rcyAoZWl0aGVyLyogKiB0aGUgdGFyZ2V0IHBhZ2Ugb3IgcmVkaXJlY3RzIHRvIHRoZSB0YXJnZXQgcGFnZSksIGZhaWx1cmUgLSBlcnJvciBkZXNjcmlwdGlvbikvKiAqIHBhZ2U6IFRhcmdldCBwYWdlICovXG5jb25zdCBnZXRCYWNrbGlua3MgPSAocGFnZSkgPT4ge1xuXHRjb25zdCBkZWZlcnJlZCA9IG5ldyAkLkRlZmVycmVkKCk7XG5cdGNvbnN0IHBhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0bGlzdDogJ2JhY2tsaW5rcycsXG5cdFx0Ymx0aXRsZTogcGFnZSxcblx0XHRibHJlZGlyZWN0OiB0cnVlLFxuXHRcdGJsbGltaXQ6IGNmZy5iYWNrbGlua0xpbWl0LFxuXHRcdGJsbmFtZXNwYWNlOiBjZmcudGFyZ2V0TmFtZXNwYWNlcy5qb2luKCd8JyksXG5cdH07XG5cdGFwaS5nZXQocGFyYW1zKVxuXHRcdC5kb25lKCh7cXVlcnl9KSA9PiB7XG5cdFx0XHQvLyBUaGVyZSBtaWdodCBiZSBkdXBsaWNhdGUgZW50cmllcyBpbiBzb21lIGNvcm5lciBjYXNlcy4gV2UgZG9uJ3QgY2FyZSxcblx0XHRcdC8vIHNpbmNlIHdlIGFyZSBnb2luZyB0byBjaGVjayBsYXRlciwgYW55d2F5XG5cdFx0XHRjb25zdCBiYWNrbGlua3MgPSBbXTtcblx0XHRcdGNvbnN0IGxpbmtUaXRsZXMgPSBbZ2V0Q2Fub25pY2FsVGl0bGUocGFnZSldO1xuXHRcdFx0Y29uc3QgYmFja2xpbmtzUXVlcnkgPSBxdWVyeS5iYWNrbGlua3M7XG5cdFx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgYmFja2xpbmtzUXVlcnkpIHtcblx0XHRcdFx0YmFja2xpbmtzLnB1c2goZWxlbWVudC50aXRsZSk7XG5cdFx0XHRcdGlmICghZWxlbWVudC5yZWRpcmxpbmtzKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlua1RpdGxlcy5wdXNoKGVsZW1lbnQudGl0bGUpO1xuXHRcdFx0XHRjb25zdCB7cmVkaXJsaW5rc30gPSBlbGVtZW50O1xuXHRcdFx0XHRmb3IgKGNvbnN0IHt0aXRsZX0gb2YgcmVkaXJsaW5rcykge1xuXHRcdFx0XHRcdGJhY2tsaW5rcy5wdXNoKHRpdGxlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShiYWNrbGlua3MsIGxpbmtUaXRsZXMpO1xuXHRcdH0pXG5cdFx0LmZhaWwoKGNvZGUpID0+IHtcblx0XHRcdGRlZmVycmVkLnJlamVjdCh0eHQuZ2V0QmFja2xpbmtzRXJyb3IucmVwbGFjZSgnJDEnLCBjb2RlKSk7XG5cdFx0fSk7XG5cdHJldHVybiBkZWZlcnJlZC5wcm9taXNlKCk7XG59O1xuXG4vKiBEb3dubG9hZCBhIGxpc3Qgb2YgcmVkaXJlY3RzIGZvciBzb21lIHBhZ2VzLiBSZXR1cm5zIGEgalF1ZXJ5IGNhbGxiYWNrIChzdWNjZXNzIC0vKiAqIGFycmF5IG9mIHJlZGlyZWN0cyAoe2Zyb20sIHRvfSksIGZhaWx1cmUgLSBlcnJvciBkZXNjcmlwdGlvbiApLyogKiBwYWdlVGl0bGVzOiBBcnJheSBvZiBwYWdlIHRpdGxlcyAqL1xuY29uc3QgZmV0Y2hSZWRpcmVjdHMgPSAocGFnZVRpdGxlcykgPT4ge1xuXHRjb25zdCBkZWZlcnJlZCA9IG5ldyAkLkRlZmVycmVkKCk7XG5cdGNvbnN0IGN1cnJlbnRUaXRsZXMgPSBwYWdlVGl0bGVzLnNsaWNlKDAsIGNmZy5xdWVyeVRpdGxlTGltaXQpO1xuXHRjb25zdCByZXN0VGl0bGVzID0gcGFnZVRpdGxlcy5zbGljZShjZmcucXVlcnlUaXRsZUxpbWl0KTtcblx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHR0aXRsZXM6IGN1cnJlbnRUaXRsZXMuam9pbignfCcpLFxuXHRcdHJlZGlyZWN0czogdHJ1ZSxcblx0fTtcblx0YXBpLmdldChwYXJhbXMpXG5cdFx0LmRvbmUoKHtxdWVyeX0pID0+IHtcblx0XHRcdGNvbnN0IHRoZXNlUmVkaXJlY3RzID0gcXVlcnkucmVkaXJlY3RzID8/IFtdO1xuXHRcdFx0aWYgKHJlc3RUaXRsZXMubGVuZ3RoKSB7XG5cdFx0XHRcdGZldGNoUmVkaXJlY3RzKHJlc3RUaXRsZXMpXG5cdFx0XHRcdFx0LmRvbmUoKHJlZGlyZWN0cykgPT4ge1xuXHRcdFx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShbLi4udGhlc2VSZWRpcmVjdHMsIC4uLnJlZGlyZWN0c10pO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmZhaWwoKGRlc2NyaXB0aW9uKSA9PiB7XG5cdFx0XHRcdFx0XHRkZWZlcnJlZC5yZWplY3QoZGVzY3JpcHRpb24pO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZSh0aGVzZVJlZGlyZWN0cyk7XG5cdFx0XHR9XG5cdFx0fSlcblx0XHQuZmFpbCgoY29kZSkgPT4ge1xuXHRcdFx0ZGVmZXJyZWQucmVqZWN0KHR4dC5mZXRjaFJlZGlyZWN0c0Vycm9yLnJlcGxhY2UoJyQxJywgY29kZSkpO1xuXHRcdH0pO1xuXHRyZXR1cm4gZGVmZXJyZWQucHJvbWlzZSgpO1xufTtcblxuLyogRG93bmxvYWQgdGhlIGxpc3Qgb2YgdXNlciByaWdodHMgZm9yIHRoZSBjdXJyZW50IHVzZXIuIFJldHVybnMgYS8qICogalF1ZXJ5IHByb21pc2UgKHN1Y2Nlc3MgLSBhcnJheSBvZiByaWdodCBuYW1lcywgZXJyb3IgLSBlcnJvciBkZXNjcmlwdGlvbikgKi9cbmNvbnN0IGZldGNoUmlnaHRzID0gKCkgPT4ge1xuXHRjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQoKTtcblx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRtZXRhOiAndXNlcmluZm8nLFxuXHRcdHVpcHJvcDogJ3JpZ2h0cycsXG5cdH07XG5cdGFwaS5nZXQocGFyYW1zKVxuXHRcdC5kb25lKCh7cXVlcnl9KSA9PiB7XG5cdFx0XHRkZWZlcnJlZC5yZXNvbHZlKHF1ZXJ5LnVzZXJpbmZvLnJpZ2h0cyk7XG5cdFx0fSlcblx0XHQuZmFpbCgoY29kZSkgPT4ge1xuXHRcdFx0ZGVmZXJyZWQucmVqZWN0KHR4dC5mZXRjaFJpZ2h0c0Vycm9yLnJlcGxhY2UoJyQxJywgY29kZSkpO1xuXHRcdH0pO1xuXHRyZXR1cm4gZGVmZXJyZWQucHJvbWlzZSgpO1xufTtcblxuLyogTG9hZCB0aGUgcmF3IHBhZ2UgdGV4dCBmb3IgYSBnaXZlbiB0aXRsZS4gUmV0dXJucyBhIGpRdWVyeSBwcm9taXNlIChzdWNjZXNzIC0gcGFnZS8qICogY29udGVudCwgZmFpbHVyZSAtIGVycm9yIGRlc2NyaXB0aW9uKS8qICogcGFnZVRpdGxlOiBUaXRsZSBvZiB0aGUgcGFnZSAqL1xuY29uc3QgbG9hZFBhZ2UgPSAocGFnZVRpdGxlKSA9PiB7XG5cdGNvbnN0IGRlZmVycmVkID0gbmV3ICQuRGVmZXJyZWQoKTtcblx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0dGl0bGVzOiBwYWdlVGl0bGUsXG5cdFx0cHJvcDogJ3JldmlzaW9ucycsXG5cdFx0cnZwcm9wOiAndGltZXN0YW1wfGNvbnRlbnQnLFxuXHRcdG1ldGE6ICd0b2tlbnMnLFxuXHRcdHR5cGU6ICdjc3JmJyxcblx0fTtcblx0YXBpLmdldChwYXJhbXMpXG5cdFx0LmRvbmUoKHtxdWVyeX0pID0+IHtcblx0XHRcdGNvbnN0IFtyYXdQYWdlXSA9IHF1ZXJ5LnBhZ2VzO1xuXHRcdFx0Y29uc3QgcGFnZSA9IHt9O1xuXHRcdFx0cGFnZS5yZWRpcmVjdCA9IHJhd1BhZ2UucmVkaXJlY3QgIT09IHVuZGVmaW5lZDtcblx0XHRcdHBhZ2UubWlzc2luZyA9IHJhd1BhZ2UubWlzc2luZyAhPT0gdW5kZWZpbmVkO1xuXHRcdFx0aWYgKHJhd1BhZ2UucmV2aXNpb25zKSB7XG5cdFx0XHRcdHBhZ2UuY29udGVudCA9IHJhd1BhZ2UucmV2aXNpb25zWzBdLmNvbnRlbnQ7XG5cdFx0XHRcdHBhZ2UuYmFzZVRpbWVTdGFtcCA9IHJhd1BhZ2UucmV2aXNpb25zWzBdLnRpbWVzdGFtcDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHBhZ2UuY29udGVudCA9ICcnO1xuXHRcdFx0XHRwYWdlLmJhc2VUaW1lU3RhbXAgPSB1bmRlZmluZWQ7XG5cdFx0XHR9XG5cdFx0XHRwYWdlLnN0YXJ0VGltZVN0YW1wID0gcmF3UGFnZS5zdGFydHRpbWVzdGFtcDtcblx0XHRcdHBhZ2UuZWRpdFRva2VuID0gcXVlcnkudG9rZW5zLmNzcmZ0b2tlbjtcblx0XHRcdGRlZmVycmVkLnJlc29sdmUocGFnZSk7XG5cdFx0fSlcblx0XHQuZmFpbCgoY29kZSkgPT4ge1xuXHRcdFx0ZGVmZXJyZWQucmVqZWN0KHR4dC5sb2FkUGFnZUVycm9yLnJlcGxhY2UoJyQxJywgcGFnZVRpdGxlKS5yZXBsYWNlKCckMicsIGNvZGUpKTtcblx0XHR9KTtcblx0cmV0dXJuIGRlZmVycmVkLnByb21pc2UoKTtcbn07XG5cbi8qIFJlZ2lzdGVyIGNoYW5nZXMgdG8gYSBwYWdlLCB0byBiZSBzYXZlZCBsYXRlci4gUmV0dXJucyBhIGpRdWVyeSBwcm9taXNlLyogKiAoc3VjY2VzcyAtIG5vIHBhcmFtcywgZmFpbHVyZSAtIGVycm9yIGRlc2NyaXB0aW9uKS4gVGFrZXMgdGhlIHNhbWUgcGFyYW1ldGVycy8qICogYXMgc2F2ZVBhZ2UgKi9cbmNvbnN0IHNhdmVXaXRoQ29vbGRvd24gPSAoLi4uYXJncykgPT4ge1xuXHRjb25zdCBkZWZlcnJlZCA9IG5ldyAkLkRlZmVycmVkKCk7XG5cdHBlbmRpbmdTYXZlcy5wdXNoKHtcblx0XHRhcmdzLFxuXHRcdGRmZDogZGVmZXJyZWQsXG5cdH0pO1xuXHRpZiAoIXJ1bm5pbmdTYXZlcykge1xuXHRcdGNoZWNrQW5kU2F2ZSgpO1xuXHR9XG5cdHJldHVybiBkZWZlcnJlZC5wcm9taXNlKCk7XG59O1xuXG4vKiBTYXZlIHRoZSBmaXJzdCBzZXQgb2YgY2hhbmdlcyBpbiB0aGUgbGlzdCBvZiBwZW5kaW5nIGNoYW5nZXMsIHByb3ZpZGluZyB0aGF0LyogKiBlbm91Z2ggdGltZSBoYXMgcGFzc2VkIHNpbmNlIHRoZSBsYXN0IGVkaXQgKi9cbmNvbnN0IGNoZWNrQW5kU2F2ZSA9IGZ1bmN0aW9uICgpIHtcblx0aWYgKCFwZW5kaW5nU2F2ZXMubGVuZ3RoKSB7XG5cdFx0cnVubmluZ1NhdmVzID0gZmFsc2U7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHJ1bm5pbmdTYXZlcyA9IHRydWU7XG5cdGNvbnN0IG1pbGxpc1NpbmNlTGFzdCA9IERhdGUubm93KCkgLSBsYXN0RWRpdE1pbGxpcztcblx0aWYgKG1pbGxpc1NpbmNlTGFzdCA8IGNmZy5lZGl0Q29vbGRvd24gKiAxMDAwKSB7XG5cdFx0c2V0VGltZW91dChjaGVja0FuZFNhdmUsIGNmZy5lZGl0Q29vbGRvd24gKiAxMDAwIC0gbWlsbGlzU2luY2VMYXN0KTtcblx0fSBlbHNlIHtcblx0XHQvLyBUaGUgbGFzdCBlZGl0IHN0YXJ0ZWQgYXQgbGVhc3QgY2ZnLmVkaXRDb29sZG93biBzZWNvbmRzIGFnb1xuXHRcdGNvbnN0IHNhdmUgPSBwZW5kaW5nU2F2ZXMuc2hpZnQoKTtcblx0XHRzYXZlUGFnZVxuXHRcdFx0LmFwcGx5KHRoaXMsIHNhdmUuYXJncylcblx0XHRcdC5kb25lKCgpID0+IHtcblx0XHRcdFx0Y2hlY2tBbmRTYXZlKCk7XG5cdFx0XHRcdHNhdmUuZGZkLnJlc29sdmUoKTtcblx0XHRcdH0pXG5cdFx0XHQuZmFpbCgoZGVzY3JpcHRpb24pID0+IHtcblx0XHRcdFx0Y2hlY2tBbmRTYXZlKCk7XG5cdFx0XHRcdHNhdmUuZGZkLnJlamVjdChkZXNjcmlwdGlvbik7XG5cdFx0XHR9KTtcblx0XHQvLyBXZSdsbCB1c2UgdGhlIHRpbWUgc2luY2UgdGhlIGxhc3QgZWRpdCBzdGFydGVkXG5cdFx0bGFzdEVkaXRNaWxsaXMgPSBEYXRlLm5vdygpO1xuXHR9XG59O1xuXG4vKiBTYXZlIHRoZSBjaGFuZ2VzIG1hZGUgdG8gYSBwYWdlLiBSZXR1cm5zIGEgalF1ZXJ5IHByb21pc2UgKHN1Y2Nlc3MgLSBubyBwYXJhbXMsLyogKiBmYWlsdXJlIC0gZXJyb3IgZGVzY3JpcHRpb24pLyogKiBwYWdlVGl0bGU6IFRpdGxlIG9mIHRoZSBwYWdlLyogKiBwYWdlOiBQYWdlIGRhdGEvKiAqIHN1bW1hcnk6IFN1bW1hcnkgb2YgdGhlIGNoYW5nZXMgbWFkZSB0byB0aGUgcGFnZS8qICogbWlub3JFZGl0OiBXaGV0aGVyIHRvIG1hcmsgdGhlIGVkaXQgYXMgJ21pbm9yJy8qICogYm90RWRpdDogV2hldGhlciB0byBtYXJrIHRoZSBlZGl0IGFzICdib3QnICovXG5jb25zdCBzYXZlUGFnZSA9IChwYWdlVGl0bGUsIHtlZGl0VG9rZW4sIGNvbnRlbnQsIGJhc2VUaW1lU3RhbXAsIHN0YXJ0VGltZVN0YW1wfSwgc3VtbWFyeSwgbWlub3JFZGl0LCBib3RFZGl0KSA9PiB7XG5cdGNvbnN0IGRlZmVycmVkID0gbmV3ICQuRGVmZXJyZWQoKTtcblx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ2VkaXQnLFxuXHRcdHRpdGxlOiBwYWdlVGl0bGUsXG5cdFx0dG9rZW46IGVkaXRUb2tlbixcblx0XHR0ZXh0OiBjb250ZW50LFxuXHRcdGJhc2V0aW1lc3RhbXA6IGJhc2VUaW1lU3RhbXAsXG5cdFx0c3RhcnR0aW1lc3RhbXA6IHN0YXJ0VGltZVN0YW1wLFxuXHRcdHN1bW1hcnksXG5cdFx0d2F0Y2hsaXN0OiBjZmcud2F0Y2gsXG5cdFx0bWlub3I6IG1pbm9yRWRpdCxcblx0XHRib3Q6IGJvdEVkaXQsXG5cdH07XG5cdGFwaS5wb3N0KHBhcmFtcylcblx0XHQuZG9uZSgoKSA9PiB7XG5cdFx0XHRkZWZlcnJlZC5yZXNvbHZlKCk7XG5cdFx0fSlcblx0XHQuZmFpbCgoY29kZSkgPT4ge1xuXHRcdFx0ZGVmZXJyZWQucmVqZWN0KHR4dC5zYXZlUGFnZUVycm9yLnJlcGxhY2UoJyQxJywgcGFnZVRpdGxlKS5yZXBsYWNlKCckMicsIGNvZGUpKTtcblx0XHR9KTtcblx0cmV0dXJuIGRlZmVycmVkLnByb21pc2UoKTtcbn07XG4iLCAiZXhwb3J0IGNvbnN0IHR4dCA9IHtcblx0c3RhcnQ6ICfkuLrpk77mjqXmtojmrafkuYknLFxuXHRzdGFydE1haW46ICfkuLrpk77oh7PkuLvmnaHnm67nmoTpk77mjqXmtojmrafkuYknLFxuXHRzdGFydFNhbWU6ICfkuLrpk77oh7PmtojmrafkuYnpobXnmoTpk77mjqXmtojmrafkuYknLFxuXHRjbG9zZTogJ+WFs+mXrScsXG5cdHVuZG86ICflpI3ljp8nLFxuXHRvbWl0OiAn6Lez6L+HJyxcblx0cmVmcmVzaDogJ+mHjeaWsOaVtOeQhicsXG5cdHRpdGxlQXNUZXh0OiAn5YW25a6D55uu5qCHJyxcblx0ZGlzYW1OZWVkZWQ6ICfmoIfnpLp7e2RufX0nLFxuXHRpbnRlbnRpb25hbExpbms6ICfmnInmhI/pk77liLDmtojmrafkuYnpobXnmoTpk77mjqUnLFxuXHR0aXRsZUFzVGV4dFByb21wdDogJ+ivt+i+k+WFpeaWsOeahOmTvuaOpeebruagh++8micsXG5cdHJlbW92ZUxpbms6ICfljrvpmaTpk77mjqUnLFxuXHRvcHRpb25NYXJrZXI6ICcgW+mTvuaOpeWIsOi/memHjF0nLFxuXHR0YXJnZXRPcHRpb25NYXJrZXI6ICcgW+W9k+WJjeebruagh10nLFxuXHRyZWRpcmVjdE9wdGlvbk1hcmtlcjogJyBb5b2T5YmN55uu5qCH77yI6YeN5a6a5ZCR77yJXScsXG5cdHBhZ2VUaXRsZUxpbmU6ICc8YSBocmVmPVwiJDFcIj4kMjwvYT7vvJonLFxuXHRub01vcmVMaW5rczogJ+ayoeaciemcgOimgea2iOatp+S5ieeahOmTvuaOpeS6huOAgicsXG5cdHBlbmRpbmdFZGl0Q291bnRlcjogJ+W3suS/neWtmCQx5Liq77yM5bey57yW6L6RJDLkuKonLFxuXHRwZW5kaW5nRWRpdEJveDogJ0Rpc2FtQXNzaXN05q2j5Zyo5YKo5a2Y5oKo55qE57yW6L6R77yIJDHvvInjgIInLFxuXHRwZW5kaW5nRWRpdEJveFRpbWVFc3RpbWF0aW9uOiAnJDHvvJvliankvZnml7bpl7TvvJokMicsXG5cdHBlbmRpbmdFZGl0Qm94TGltaXRlZDpcblx0XHQn5Zyo5omA5pyJ5pu05pS55L+d5a2Y5YmN77yM6K+35LiN6KaB5YWz6Zet6aG16Z2i77yb5L2g5Y+v5Lul5Zyo5Y+m5LiA5Liq6aG16Z2i57yW6L6R5rGC6Ze755m+56eR77yM5L2G5piv6K+35Yu/5ZCM5pe25L2/55So5aSa5LiqRGlzYW1Bc3Npc3TjgIInLFxuXHRlcnJvcjogJ+mUmeivr++8miQxJyxcblx0ZmV0Y2hSZWRpcmVjdHNFcnJvcjogJ+iOt+WPlumHjeWumuWQkeWksei0pe+8mlwiJDFcIi4nLFxuXHRnZXRCYWNrbGlua3NFcnJvcjogJ+S4i+i9veWPjeWQkemTvuaOpeWksei0pe+8mlwiJDFcIi4nLFxuXHRmZXRjaFJpZ2h0c0Vycm9yOiAn6I635Y+W55So5oi35p2D6ZmQ5aSx6LSl77yaXCIkMVwiLCcsXG5cdGxvYWRQYWdlRXJyb3I6ICfliqDovb0kMeWksei0pe+8mlwiJDJcIi4nLFxuXHRzYXZlUGFnZUVycm9yOiAn5L+d5a2Y6IezJDHlpLHotKXvvJpcIiQyXCIuJyxcblx0ZGlzbWlzc0Vycm9yOiAnRGlzbWlzcycsXG5cdHBlbmRpbmc6ICdEaXNhbUFzc2lzdOWwmuacieacquWCqOWtmOeahOe8lui+keOAguWmguassuWCqOWtmOS5i++8jOivt+aMieKAnOWFs+mXreKAneOAgicsXG5cdGVkaXRJblByb2dyZXNzOiAnRGlzYW1Bc3Npc3TmraPlnKjov5vooYznvJbovpHjgILoi6XmgqjlsIbmnKzliIbpobXlhbPpl63vvIzlj6/og73kvJrkuKflpLHmgqjnmoTnvJbovpHjgIInLFxuXHRlbGxpcHNpczogJ+KApuKApicsXG5cdG5vdGlmeUNoYXJhY3RlcjogJ+KclCcsXG5cdHN1bW1hcnk6ICfkvb/nlKhbW01lZGlhV2lraTpHYWRnZXQtRGlzYW1Bc3Npc3QuanN8RGlzYW1Bc3Npc3RdXea4heeQhltbUVc6REFCfOa2iOatp+S5iV1d6ZO+5o6l77yaW1skMV1d77yIJDLvvInjgIInLFxuXHRzdW1tYXJ5Q2hhbmdlZDogJ+aUuemTvuaOpeiHs1tbJDFdXScsXG5cdHN1bW1hcnlPbWl0dGVkOiAn6ZO+5o6l5bey6Lez6L+HJyxcblx0c3VtbWFyeVJlbW92ZWQ6ICfpk77mjqXlt7Lnp7vpmaQnLFxuXHRzdW1tYXJ5SW50ZW50aW9uYWw6ICfliLvmhI/pk77mjqXoh7PmtojmrafkuYnpobXpnaInLFxuXHRzdW1tYXJ5SGVscE5lZWRlZDogJ+mcgOimgeW4ruWKqScsXG5cdHN1bW1hcnlTZXBhcmF0b3I6ICc7ICcsXG5cdHJlZGlyZWN0U3VtbWFyeTogJ+S9v+eUqFtbTWVkaWFXaWtpOkdhZGdldC1EaXNhbUFzc2lzdC5qc3xEaXNhbUFzc2lzdF1d5Yib5bu655uu5qCH5Li6W1skMV1d55qE6YeN5a6a5ZCR44CCJyxcbn07XG4iLCAiLyoqXG4gKiBEaXNhbUFzc2lzdDogYSB0b29sIGZvciByZXBhaXJpbmcgbGlua3MgZnJvbSBhcnRpY2xlcyB0byBkaXNhbWJpZ3VhdGlvbiBwYWdlcy5cbiAqIOeUsVF3ZXJ0eXl0cmV3cXF3ZXJ0eeacgOWIneiuvuiuoe+8mkNDIEJZLVNBIDMuMFxuICog55SxR1pXRGVy5pys5Zyw5YyW77yaMjAyMC0wOC0xOSBDQyBCWS1TQSAzLjBcbiAqIOeUseWSjOW5s+Wli+aWl+aVkeWcsOeQg+eojeS9nOe/u+ivkSAyMDIxLTA1LTE1IENDIEJZLVNBIDMuMFxuICog5rGC6Ze755m+56eRTmp6anrnroDkvZPljJYgMjAyMi0yLTE0IENDIEJZLVNBIDQuMFxuICovXG5pbXBvcnQge2luc3RhbGx9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcblxuJChpbnN0YWxsKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7QUFBQTtBQUFBLHdGQUFBQSxTQUFBO0FBQUE7QUFDQSxRQUFJLFFBQVEsU0FBVSxJQUFJO0FBQ3hCLGFBQU8sTUFBTSxHQUFHLFNBQVMsUUFBUTtBQUFBLElBQ25DO0FBR0EsSUFBQUEsUUFBTztBQUFBLElBRUwsTUFBTSxPQUFPLGNBQWMsWUFBWSxVQUFVLEtBQ2pELE1BQU0sT0FBTyxVQUFVLFlBQVksTUFBTTtBQUFBLElBRXpDLE1BQU0sT0FBTyxRQUFRLFlBQVksSUFBSSxLQUNyQyxNQUFNLE9BQU8sVUFBVSxZQUFZLE1BQU0sS0FDekMsTUFBTSxPQUFPLFdBQVEsWUFBWSxPQUFJO0FBQUEsSUFFcEMsMkJBQVk7QUFBRSxhQUFPO0FBQUEsSUFBTSxFQUFHLEtBQUssU0FBUyxhQUFhLEVBQUU7QUFBQTtBQUFBOzs7QUNmOUQ7QUFBQSx1RkFBQUMsU0FBQTtBQUFBO0FBQ0EsSUFBQUEsUUFBTyxVQUFVLFNBQVUsTUFBTTtBQUMvQixVQUFJO0FBQ0YsZUFBTyxDQUFDLENBQUMsS0FBSztBQUFBLE1BQ2hCLFNBQVNDLFFBQU87QUFDZCxlQUFPO0FBQUEsTUFDVDtBQUFBLElBQ0Y7QUFBQTtBQUFBOzs7QUNQQTtB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QUs4SCxJQUFJLEVBQ3JCaE8sS0FBSyxNQUFNO0FBQ1hrTyxtQkFBYTtBQUNiaEksV0FBSytILElBQUk1TSxRQUFRO0lBQ2xCLENBQUMsRUFDQUgsS0FBTVksaUJBQWdCO0FBQ3RCb00sbUJBQWE7QUFDYmhJLFdBQUsrSCxJQUFJdkIsT0FBTzVLLFdBQVc7SUFDNUIsQ0FBQztBQUVGM0cscUJBQWlCaVQsS0FBS0MsSUFBSTtFQUMzQjtBQUNEO0FBR0EsSUFBTXhNLFdBQVdBLENBQUN3QixXQUFXO0VBQUN3SztFQUFXak07RUFBUzZMO0VBQWVFO0FBQWMsR0FBR25VLFNBQVNnVixXQUFXQyxZQUFZO0FBQ2pILFFBQU10TixXQUFXLElBQUk1RixFQUFFNkYsU0FBUztBQUNoQyxRQUFNc0ssU0FBUztJQUNkQyxRQUFRO0lBQ1J0TSxPQUFPZ0U7SUFDUHFMLE9BQU9iO0lBQ1A1USxNQUFNMkU7SUFDTitNLGVBQWVsQjtJQUNmRyxnQkFBZ0JEO0lBQ2hCblU7SUFDQW9WLFdBQVd6WSxJQUFJaUI7SUFDZnlYLE9BQU9MO0lBQ1BNLEtBQUtMO0VBQ047QUFDQXpVLE1BQUkrVSxLQUFLckQsTUFBTSxFQUNiMUwsS0FBSyxNQUFNO0FBQ1htQixhQUFTRSxRQUFRO0VBQ2xCLENBQUMsRUFDQUgsS0FBTXVMLFVBQVM7QUFDZnRMLGFBQVN1TCxPQUFPblYsSUFBSTJCLGNBQWNzSSxRQUFRLE1BQU02QixTQUFTLEVBQUU3QixRQUFRLE1BQU1pTCxJQUFJLENBQUM7RUFDL0UsQ0FBQztBQUNGLFNBQU90TCxTQUFTWSxRQUFRO0FBQ3pCOztBRXJnQ0F4RyxFQUFFRixPQUFPOyIsCiAgIm5hbWVzIjogWyJtb2R1bGUiLCAibW9kdWxlIiwgImVycm9yIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZXJyb3IiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAiZXJyb3IiLCAibW9kdWxlIiwgImdsb2JhbCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbCIsICJTeW1ib2wiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgImRvY3VtZW50IiwgIm1vZHVsZSIsICJlcnJvciIsICJtb2R1bGUiLCAibW9kdWxlIiwgImVycm9yIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIlR5cGVFcnJvciIsICJtb2R1bGUiLCAiZXJyb3IiLCAibW9kdWxlIiwgImVycm9yIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbCIsICJtb2R1bGUiLCAibW9kdWxlIiwgImVycm9yIiwgIm1vZHVsZSIsICIkIiwgImVycm9yIiwgIm1vZHVsZSIsICIkIiwgImVycm9yIiwgIldHX0FDVElPTiIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImNmZyIsICJkaXNhbUNhdGVnb3JpZXMiLCAiZGlzYW1MaW5rVGVtcGxhdGVzIiwgImRpc2FtTGlua0lnbm9yZVRlbXBsYXRlcyIsICJkaXNhbUZvcm1hdCIsICJkaXNhbVJlZ0V4cCIsICJkaXNhbU5lZWRlZFRleHQiLCAiY29uY2F0IiwgInJlZGlyZWN0VG9EaXNhbSIsICJpbnRlbnRpb25hbExpbmtPcHRpb24iLCAidGFyZ2V0TmFtZXNwYWNlcyIsICJiYWNrbGlua0xpbWl0IiwgInF1ZXJ5VGl0bGVMaW1pdCIsICJyYWRpdXMiLCAibnVtQ29udGV4dExpbmVzIiwgImhpc3RvcnlTaXplIiwgImVkaXRDb29sZG93biIsICJ3YXRjaCIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgInR4dCIsICJzdGFydCIsICJzdGFydE1haW4iLCAic3RhcnRTYW1lIiwgImNsb3NlIiwgInVuZG8iLCAib21pdCIsICJyZWZyZXNoIiwgInRpdGxlQXNUZXh0IiwgImRpc2FtTmVlZGVkIiwgImludGVudGlvbmFsTGluayIsICJ0aXRsZUFzVGV4dFByb21wdCIsICJyZW1vdmVMaW5rIiwgIm9wdGlvbk1hcmtlciIsICJ0YXJnZXRPcHRpb25NYXJrZXIiLCAicmVkaXJlY3RPcHRpb25NYXJrZXIiLCAicGFnZVRpdGxlTGluZSIsICJub01vcmVMaW5rcyIsICJwZW5kaW5nRWRpdENvdW50ZXIiLCAicGVuZGluZ0VkaXRCb3giLCAicGVuZGluZ0VkaXRCb3hUaW1lRXN0aW1hdGlvbiIsICJwZW5kaW5nRWRpdEJveExpbWl0ZWQiLCAiZXJyb3IiLCAiZmV0Y2hSZWRpcmVjdHNFcnJvciIsICJnZXRCYWNrbGlua3NFcnJvciIsICJmZXRjaFJpZ2h0c0Vycm9yIiwgImxvYWRQYWdlRXJyb3IiLCAic2F2ZVBhZ2VFcnJvciIsICJkaXNtaXNzRXJyb3IiLCAicGVuZGluZyIsICJlZGl0SW5Qcm9ncmVzcyIsICJlbGxpcHNpcyIsICJub3RpZnlDaGFyYWN0ZXIiLCAic3VtbWFyeSIsICJzdW1tYXJ5Q2hhbmdlZCIsICJzdW1tYXJ5T21pdHRlZCIsICJzdW1tYXJ5UmVtb3ZlZCIsICJzdW1tYXJ5SW50ZW50aW9uYWwiLCAic3VtbWFyeUhlbHBOZWVkZWQiLCAic3VtbWFyeVNlcGFyYXRvciIsICJyZWRpcmVjdFN1bW1hcnkiLCAiYXBpIiwgImluaXRNd0FwaSIsICJzdGFydExpbmsiLCAidWkiLCAibGlua3MiLCAicGFnZUNoYW5nZXMiLCAiY3VycmVudFBhZ2VUaXRsZSIsICJjdXJyZW50UGFnZVBhcmFtZXRlcnMiLCAiY3VycmVudExpbmsiLCAicG9zc2libGVCYWNrbGlua0Rlc3RpbmF0aW9ucyIsICJmb3JjZVNhbWVQYWdlIiwgInJ1bm5pbmciLCAiY2hvb3NpbmciLCAiY2FuTWFya0ludGVudGlvbmFsTGlua3MiLCAiZGlzcGxheWVkUGFnZXMiLCAiZWRpdENvdW50IiwgImVkaXRMaW1pdCIsICJwZW5kaW5nU2F2ZXMiLCAicGVuZGluZ0VkaXRCb3hUZXh0IiwgImxhc3RFZGl0TWlsbGlzIiwgInJ1bm5pbmdTYXZlcyIsICJpbnN0YWxsIiwgImlzRGlzYW0iLCAiJCIsICJwb3J0bGV0SWQiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJSZWdFeHAiLCAidGVzdCIsICJnZXRUaXRsZSIsICJzdGFydE1haW5MaW5rIiwgInV0aWwiLCAiYWRkUG9ydGxldExpbmsiLCAib24iLCAic3RhcnRTYW1lTGluayIsICJhZGQiLCAiZW5zdXJlREFCRXhpc3RzIiwgInRoZW4iLCAiY2FuTWFyayIsICJjcmVhdGVVSSIsICJhZGRVbmxvYWRDb25maXJtIiwgIm1hcmtEaXNhbU9wdGlvbnMiLCAiY2hlY2tFZGl0TGltaXQiLCAidG9nZ2xlUGVuZGluZ0VkaXRCb3giLCAiZG9QYWdlIiwgIiRib2R5IiwgImRpc3BsYXkiLCAiYWRkQ2xhc3MiLCAiZmluaXNoZWRNZXNzYWdlIiwgInRleHQiLCAiaGlkZSIsICJjb250ZXh0IiwgInVuZG9CdXR0b24iLCAiY3JlYXRlQnV0dG9uIiwgIm9taXRCdXR0b24iLCAiZW5kQnV0dG9uIiwgInNhdmVBbmRFbmQiLCAicmVmcmVzaEJ1dHRvbiIsICJ0aXRsZUFzVGV4dEJ1dHRvbiIsICJjaG9vc2VUaXRsZUZyb21Qcm9tcHQiLCAiaW50ZW50aW9uYWxMaW5rQnV0dG9uIiwgImNob29zZUludGVudGlvbmFsTGluayIsICJkaXNhbU5lZWRlZEJ1dHRvbiIsICJjaG9vc2VEaXNhbU5lZWRlZCIsICJyZW1vdmVMaW5rQnV0dG9uIiwgImNob29zZUxpbmtSZW1vdmFsIiwgInRvcCIsICJhcHBlbmQiLCAibGVmdEJ1dHRvbnMiLCAicmlnaHRCdXR0b25zIiwgImFsbEJ1dHRvbnMiLCAidXBkYXRlRWRpdENvdW50ZXIiLCAidG9nZ2xlQWN0aW9uQnV0dG9ucyIsICJmaW5kIiwgImJlZm9yZSIsICJmYWRlSW4iLCAid2luZG93IiwgImNoZWNrQWN0dWFsQ2hhbmdlcyIsICJvcHRpb25QYWdlVGl0bGVzIiwgIm9wdGlvbk1hcmtlcnMiLCAiZ2V0RGlzYW1PcHRpb25zIiwgImVhY2giLCAiX2luZGV4IiwgImVsZW1lbnQiLCAibGluayIsICJ0aXRsZSIsICJleHRyYWN0UGFnZU5hbWUiLCAiYXR0ciIsICJldiIsICJwcmV2ZW50RGVmYXVsdCIsICJjaG9vc2VSZXBsYWNlbWVudCIsICJhZnRlciIsICJwdXNoIiwgInRhcmdldFBhZ2UiLCAiZ2V0VGFyZ2V0UGFnZSIsICJmZXRjaFJlZGlyZWN0cyIsICJkb25lIiwgInJlZGlyZWN0cyIsICJlbmRUYXJnZXRQYWdlIiwgInJlc29sdmVSZWRpcmVjdCIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiZW50cmllcyIsICJfc3RlcCIsICJzIiwgIm4iLCAiaWkiLCAib3B0aW9uUGFnZVRpdGxlIiwgInZhbHVlIiwgImVuZE9wdGlvblRpdGxlIiwgImlzU2FtZVBhZ2UiLCAiZXJyIiwgImUiLCAiZiIsICJmYWlsIiwgImRlZmVycmVkIiwgIkRlZmVycmVkIiwgInJlc29sdmUiLCAiZXhlYyIsICJkaXNhbVRpdGxlIiwgInJlcGxhY2UiLCAibG9hZFBhZ2UiLCAicGFnZSIsICJtaXNzaW5nIiwgImNvbnRlbnQiLCAic2F2ZVBhZ2UiLCAiZGVzY3JpcHRpb24iLCAicHJvbWlzZSIsICJmZXRjaFJpZ2h0cyIsICJyaWdodHMiLCAiaW5jbHVkZXMiLCAiYWx3YXlzIiwgImxlbmd0aCIsICJhcHBseUNoYW5nZSIsICJzaGlmdCIsICJkYXRhIiwgImRvTGluayIsICJnZXRCYWNrbGlua3MiLCAiYmFja2xpbmtzIiwgInBhZ2VUaXRsZXMiLCAiX2kiLCAiX3BlbmRpbmdTYXZlcyIsICJlbCIsICJmaWx0ZXIiLCAidCIsICJyZW1vdmVEaXNhbSIsICJ1cGRhdGVDb250ZXh0IiwgImV4dHJhY3RMaW5rVG9QYWdlIiwgImVuZCIsICJwYWdlVGl0bGUiLCAiZXh0cmEiLCAiYWRkQ2hhbmdlIiwgInJlcGxhY2VMaW5rIiwgInByb21wdCIsICJsYXN0UGFnZSIsICJhdCIsICJ1bnNoaWZ0IiwgImNvbnRlbnRCZWZvcmUiLCAicG9wIiwgImVuYWJsZWQiLCAiYWZmZWN0ZWRCdXR0b25zIiwgIl9pMiIsICJfYWZmZWN0ZWRCdXR0b25zIiwgImJ1dHRvbiIsICJwcm9wIiwgInRvZ2dsZUZpbmlzaGVkTWVzc2FnZSIsICJzaG93IiwgInRvZ2dsZSIsICJmYWRlT3V0IiwgIm5vdGlmeUNvbXBsZXRpb24iLCAib2xkVGl0bGUiLCAib25lIiwgImh0bWwiLCAiZ2V0VXJsIiwgInJlZGlyZWN0IiwgImVzY2FwZSIsICJleHRyYWN0Q29udGV4dCIsICJlbXB0eSIsICJudW1MaW5lcyIsICJNYXRoIiwgImNlaWwiLCAiaGVpZ2h0IiwgIk51bWJlciIsICJwYXJzZUZsb2F0IiwgImNzcyIsICJBcnJheSIsICJmcm9tIiwgImpvaW4iLCAiaGFzRGlzYW1UZW1wbGF0ZSIsICJjb3VudEFjdHVhbGx5Q2hhbmdlZEZ1bGx5Q2hlY2tlZFBhZ2VzIiwgInRleHRDb250ZW50IiwgInNlY29uZHNUb0hITU1TUyIsICJwYWdlQ2hhbmdlIiwgImNoYW5nZVN1bW1hcmllcyIsICJzYXZlIiwgInNhdmVXaXRoQ29vbGRvd24iLCAiYXBwbHlBbGxDaGFuZ2VzIiwgIl9pdGVyYXRvcjIiLCAiX3N0ZXAyIiwgIm9sZENvbnRlbnQiLCAibGFzdFBhZ2VDaGFuZ2UiLCAiY291bnRBY3R1YWxDaGFuZ2VzIiwgImNoYW5nZUNvdW50IiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgImxhc3RDaGFuZ2UiLCAiY3VycmVudFRvb2xVSSIsICJyZW1vdmVDbGFzcyIsICJyZW1vdmUiLCAiY29tcGxldGUiLCAiZXJyb3JEZXNjcmlwdGlvbiIsICJlcnJvckJveCIsICJ1aUlzSW5QbGFjZSIsICJjb250YWlucyIsICJkb2N1bWVudEVsZW1lbnQiLCAibmV4dEVsZW1lbnQiLCAibmV3Q29udGVudCIsICJsaW5rU3RhcnQiLCAic2xpY2UiLCAibWF4IiwgImxpbmtFbmQiLCAiYWZ0ZXJEZXNjcmlwdGlvbiIsICJleHRyYWN0TGluayIsICJsYXN0SW5kZXgiLCAidGl0bGVSZWdleCIsICJ0ZW1wbGF0ZVJlZ2V4IiwgIm1hdGNoIiwgImluZGV4IiwgIl9tYXRjaCQiLCAicG9zc2libHlBbWJpZ3VvdXMiLCAiX2VuZCIsICJyZXN0IiwgInRlbXBsYXRlTWF0Y2giLCAidGVtcGxhdGVUaXRsZSIsICJnZXRDYW5vbmljYWxUaXRsZSIsICJkZXN0aW5hdGlvbnMiLCAiX21hdGNoJDIiLCAidGl0bGUxIiwgInRpdGxlMiIsICJUaXRsZSIsICJnZXRQcmVmaXhlZFRleHQiLCAiY29udGV4dFN0YXJ0IiwgImNvbnRleHRFbmQiLCAiY29udGV4dFByZXYiLCAiY29udGV4dE5leHQiLCAicGFnZU5hbWUiLCAiZXh0cmFjdFBhZ2VOYW1lUmF3IiwgInNlY3Rpb25Qb3MiLCAiaW5kZXhPZiIsICJzZWN0aW9uIiwgImhhc0NsYXNzIiwgImhyZWYiLCAiZ2V0UGFyYW1WYWx1ZSIsICJyZWdleCIsICJyZWdleFJlc3VsdCIsICJpc0FycmF5IiwgImRlY29kZVVSSUNvbXBvbmVudCIsICJjYXRlZ29yaWVzIiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgImNhdGVnb3J5IiwgInRvdGFsU2Vjb25kcyIsICJoaG1tc3MiLCAiaG91cnMiLCAiZmxvb3IiLCAibWludXRlcyIsICJzZWNvbmRzIiwgInBhZCIsICJzdHIiLCAieiIsICJ3aWR0aCIsICJ0b1N0cmluZyIsICJvbkNsaWNrIiwgInR5cGUiLCAicG9zc2libGVSZWRpcmVjdHMiLCAiYXBwbGllZFJlZGlyZWN0IiwgInZpc2l0ZWRQYWdlcyIsICJjdXJyZW50UGFnZSIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJwb3NzaWJsZVJlZGlyZWN0IiwgInRvIiwgInBhcmFtcyIsICJhY3Rpb24iLCAibGlzdCIsICJibHRpdGxlIiwgImJscmVkaXJlY3QiLCAiYmxsaW1pdCIsICJibG5hbWVzcGFjZSIsICJxdWVyeSIsICJsaW5rVGl0bGVzIiwgImJhY2tsaW5rc1F1ZXJ5IiwgIl9pdGVyYXRvcjYiLCAiX3N0ZXA2IiwgInJlZGlybGlua3MiLCAiX2l0ZXJhdG9yNyIsICJfc3RlcDciLCAiY29kZSIsICJyZWplY3QiLCAiY3VycmVudFRpdGxlcyIsICJyZXN0VGl0bGVzIiwgInRpdGxlcyIsICJfcXVlcnkkcmVkaXJlY3RzIiwgInRoZXNlUmVkaXJlY3RzIiwgIm1ldGEiLCAidWlwcm9wIiwgInVzZXJpbmZvIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInJ2cHJvcCIsICJyYXdQYWdlIiwgInBhZ2VzIiwgInJldmlzaW9ucyIsICJiYXNlVGltZVN0YW1wIiwgInRpbWVzdGFtcCIsICJzdGFydFRpbWVTdGFtcCIsICJzdGFydHRpbWVzdGFtcCIsICJlZGl0VG9rZW4iLCAidG9rZW5zIiwgImNzcmZ0b2tlbiIsICJhcmdzIiwgImRmZCIsICJjaGVja0FuZFNhdmUiLCAibWlsbGlzU2luY2VMYXN0IiwgIkRhdGUiLCAibm93IiwgInNldFRpbWVvdXQiLCAiYXBwbHkiLCAibWlub3JFZGl0IiwgImJvdEVkaXQiLCAidG9rZW4iLCAiYmFzZXRpbWVzdGFtcCIsICJ3YXRjaGxpc3QiLCAibWlub3IiLCAiYm90IiwgInBvc3QiXQp9Cg==

})();

/* </nowiki> */

/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://github.com/wikimedia-gadgets/twinkle-core/tree/master/morebits}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/morebits}
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
      } catch (error) {
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
      } catch (error) {
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
      } catch (error) {
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
        } catch (error) {
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
//! src/morebits/morebits.js
/*! Twinkle.js - morebits.js */
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
    console.warn("NOTE: Morebits.sanitizeIPv6 was renamed to Morebits.ip.sanitizeIPv6 in February 2021, please use that instead");
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
    if (!Array.isArray(input)) {
      input = [input];
    }
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
    if (!Array.isArray(namespaces)) {
      namespaces = [namespaces];
    }
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
          select.setAttribute("disabled", "disabled");
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
          node.setAttribute("disabled", "disabled");
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
          node.setAttribute("disabled", "disabled");
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
              subnode.setAttribute("checked", "checked");
            }
            if (current.disabled) {
              subnode.setAttribute("disabled", "disabled");
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
              if (!Array.isArray(tmpgroup)) {
                tmpgroup = [tmpgroup];
              }
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
              e.target.setAttribute("disabled", "disabled");
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
          childContainer.setAttribute("disabled", "disabled");
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
          childContainer.setAttribute("disabled", "disabled");
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
          subnode.setAttribute("disabled", "disabled");
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
        return m[1] + wgULS("小时", "小時");
      }
      if ((m = time.match(/^\s*(\d+)\s*days?\s*$/)) !== null) {
        return "".concat(m[1], "天");
      }
      if ((m = time.match(/^\s*(\d+)\s*weeks?\s*$/)) !== null) {
        return m[1] + wgULS("周", "週");
      }
      if ((m = time.match(/^\s*(\d+)\s*months?\s*$/)) !== null) {
        return m[1] + wgULS("个月", "個月");
      }
      if ((m = time.match(/^\s*(\d+)\s*years?\s*$/)) !== null) {
        return "".concat(m[1], "年");
      }
      if (Morebits.string.isInfinity(time.trim())) {
        return wgULS("无限期", "無限期");
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
      this._d = new (Function.prototype.bind.apply(Date, [Date, ...Array.isArray(args) ? args : [args]]))();
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
    console.warn("NOTE: Morebits.wiki.isPageRedirect has been deprecated, use Morebits.isPageRedirect instead.");
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
          this.errorText = statusText + wgULS("在调用API时发生了错误“", "在呼叫API時發生了錯誤「") + error.statusText + wgULS("”。", "」。");
          return this.returnError();
        }
      );
    },
    returnError(callerAjaxParameters) {
      if (this.errorCode === "badtoken" && !this.badtokenRetry) {
        this.statelem.warn(wgULS("无效令牌，获取新的令牌并重试……", "無效權杖，取得新的權杖並重試……"));
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
      rvslots: "*",
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
    const tokenApi = new Morebits.wiki.api(wgULS("获取令牌", "取得權杖"), {
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
      status = wgULS("打开页面“", "打開頁面「") + pageName + wgULS("”", "」");
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
      ctx.loadApi = new Morebits.wiki.api(wgULS("抓取页面……", "抓取頁面……"), ctx.loadQuery, fnLoadSuccess, ctx.statusElement, ctx.onLoadFailure);
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
      if (ctx.fullyProtected && !ctx.suppressProtectWarning && !confirm(ctx.fullyProtected === "infinity" ? wgULS("您即将编辑全保护页面“", "您即將編輯全保護頁面「") + ctx.pageName + wgULS("”（无限期）。\n\n单击确定以确定，或单击取消以取消操作。", "」（無限期）。\n\n點擊確定以確定，或點擊取消以取消操作。") : "".concat(wgULS("您即将编辑全保护页面“", "您即將編輯全保護頁面「") + ctx.pageName + wgULS("”（到期：", "」（到期：") + new Morebits.date(ctx.fullyProtected).calendar("utc"), " (UTC)）。\n\n").concat(wgULS("单击确定以确定，或单击取消以取消操作。", "點擊確定以確定，或點擊取消以取消操作。")))) {
        ctx.statusElement.error(wgULS("已取消对全保护页面的编辑。", "已取消對全保護頁面的編輯。"));
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
      ctx.saveApi = new Morebits.wiki.api(wgULS("保存页面……", "儲存頁面……"), query, fnSaveSuccess, ctx.statusElement, fnSaveError);
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
      console.warn("NOTE: Morebits.wiki.page.setWatchlistFromPreferences was deprecated December 2020, please use setWatchlist");
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
      ctx.lookupCreationApi = new Morebits.wiki.api(wgULS("抓取页面创建者信息", "抓取頁面建立者資訊"), query, fnLookupCreationSuccess, ctx.statusElement, ctx.onLookupCreationFailure);
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
        ctx.moveApi = new Morebits.wiki.api(wgULS("获取令牌……", "取得權杖……"), query, fnProcessMove, ctx.statusElement, ctx.onMoveFailure);
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
        ctx.patrolApi = new Morebits.wiki.api(wgULS("获取令牌……", "取得權杖……"), patrolQuery, fnProcessPatrol);
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
        ctx.deleteApi = new Morebits.wiki.api(wgULS("获取令牌……", "取得權杖……"), query, fnProcessDelete, ctx.statusElement, ctx.onDeleteFailure);
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
        ctx.undeleteApi = new Morebits.wiki.api(wgULS("获取令牌……", "取得權杖……"), query, fnProcessUndelete, ctx.statusElement, ctx.onUndeleteFailure);
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
      ctx.protectApi = new Morebits.wiki.api(wgULS("获取令牌……", "取得權杖……"), query, fnProcessProtect, ctx.statusElement, ctx.onProtectFailure);
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
        ctx.statusElement.error(wgULS("未能获取编辑令牌。", "未能取得編輯權杖。"));
        ctx.onLoadFailure(this);
        return;
      }
      ctx.loadTime = ctx.loadApi.getResponse().curtimestamp;
      if (!ctx.loadTime) {
        ctx.statusElement.error(wgULS("未能获取当前时间戳。", "未能取得當前時間戳。"));
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
          ctx.statusElement.error(wgULS("未能获取当前修订版本ID。", "未能取得目前修訂版本ID。"));
          ctx.onLoadFailure(this);
          return;
        }
        ctx.revertUser = rev && rev.user;
        if (!ctx.revertUser) {
          if (rev && rev.userhidden) {
            ctx.revertUser = wgULS("<用户名已隐藏>", "<使用者名稱已隱藏>");
          } else {
            ctx.statusElement.error(wgULS("未能获取此修订版本的编辑者。", "未能取得此修訂版本的編輯者。"));
            ctx.onLoadFailure(this);
            return;
          }
        }
        ctx.editSummary = "[[QW:UNDO|撤销]]由 ".concat(ctx.revertUser, " 所做出的").concat(wgULS("修订 ", "修訂 ")).concat(ctx.revertOldID, "：").concat(ctx.editSummary);
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
          ctx.statusElement.error(wgULS("标题不合法：", "標題不合法：".concat(ctx.pageName)));
          onFailure(this);
          return false;
        }
        const resolvedName = page.title;
        if (response.redirects) {
          const origNs = new mw.Title(ctx.pageName).namespace;
          const newNs = new mw.Title(resolvedName).namespace;
          if (origNs !== newNs && !ctx.followCrossNsRedirect) {
            ctx.statusElement.error(ctx.pageName + wgULS("是跨命名空间重定向到", "是跨命名空間重新導向到") + resolvedName + wgULS("，略过", "，略過"));
            onFailure(this);
            return false;
          }
          new Morebits.status(wgULS("信息", "資訊"), wgULS("从 ", "從 ") + ctx.pageName + wgULS(" 重定向到 ", " 重新導向到 ") + resolvedName);
        }
        ctx.pageName = resolvedName;
      } else {
        ctx.statusElement.error(wgULS("不能解析页面的重定向：", "不能解析頁面的重新導向：") + ctx.pageName);
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
        ctx.statusElement.error(wgULS("不能保存页面，因服务器要求您输入验证码。", "不能儲存頁面，因伺服器要求您輸入驗證碼。"));
      } else {
        ctx.statusElement.error(wgULS("保存页面时由API得到未知错误", "儲存頁面時由API得到未知錯誤"));
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
        const purgeApi = new Morebits.wiki.api(wgULS("检测到编辑冲突，正在更新服务器缓存", "檢測到編輯衝突，正在更新伺服器快取"), purgeQuery, () => {
          --Morebits.wiki.numberOfActionsLeft;
          ctx.statusElement.info(wgULS("检测到编辑冲突，重试修改", "檢測到編輯衝突，重試修改"));
          if (fnCanUseMwUserToken("edit")) {
            ctx.saveApi.post();
          } else {
            ctx.loadApi.post();
          }
        }, ctx.statusElement);
        purgeApi.post();
      } else if ((errorCode === null || errorCode === void 0) && ctx.retries++ < ctx.maxRetries) {
        ctx.statusElement.info(wgULS("保存失败，在2秒后重试……", "儲存失敗，在2秒後重試……"));
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
            ctx.statusElement.error(wgULS("不能保存修改：页面被保护", "不能儲存修改：頁面被保護"));
            break;
          case "abusefilter-disallowed":
            ctx.statusElement.error(wgULS("编辑被防滥用过滤器规则“", "編輯被防濫用過濾器規則「") + errorData.abusefilter.description + wgULS("”阻止。若您认为您的该次编辑是有意义的，请至 Wikipedia:防滥用过滤器/错误报告 提报。", "」阻止。若您認為您的該次編輯是有意義的，請至 Wikipedia:防濫用過濾器/錯誤報告 提報。"));
            break;
          case "abusefilter-warning":
            ctx.statusElement.error([wgULS("编辑被防滥用过滤器规则“", "編輯被防濫用過濾器規則「"), errorData.abusefilter.description, wgULS("”警告，若您仍希望做出该编辑，请尝试重新提交，根据过滤器的设置您可能可以作出此编辑。", "」警告，若您仍希望做出該編輯，請嘗試重新提交，根據過濾器的設定您可能可以作出此編輯。")]);
            break;
          case "spamblacklist": {
            const [spam] = errorData.spamblacklist.matches;
            ctx.statusElement.error(wgULS("不能保存页面，因URL ", "不能儲存頁面，因URL ") + spam + wgULS(" 在垃圾链接黑名单中。", " 在垃圾連結黑名單中。"));
            break;
          }
          default:
            ctx.statusElement.error(wgULS("不能保存修改：", "不能儲存修改：") + ctx.saveApi.getErrorText());
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
        ctx.statusElement.error(wgULS("无法找到", "無法找到") + ctx.pageName + wgULS("的任何修订版本", "的任何修訂版本"));
        ctx.onLookupCreationFailure(this);
        return;
      }
      if (!ctx.lookupNonRedirectCreator || !isTextRedirect(rev.content)) {
        ctx.creator = rev.user;
        if (!ctx.creator) {
          ctx.statusElement.error(wgULS("无法获取页面创建者的名字", "無法取得頁面建立者的名字"));
          ctx.onLookupCreationFailure(this);
          return;
        }
        ctx.timestamp = rev.timestamp;
        if (!ctx.timestamp) {
          ctx.statusElement.error(wgULS("无法获取页面创建时间", "無法取得頁面建立時間"));
          ctx.onLookupCreationFailure(this);
          return;
        }
        ctx.statusElement.info(wgULS("已获取页面创建信息", "已取得頁面建立資訊"));
        ctx.onLookupCreationSuccess(this);
      } else {
        ctx.lookupCreationApi.query.rvlimit = 50;
        ctx.lookupCreationApi.query.titles = ctx.pageName;
        ctx.lookupCreationApi = new Morebits.wiki.api(wgULS("获取页面创建信息", "取得頁面建立資訊"), ctx.lookupCreationApi.query, fnLookupNonRedirectCreator, ctx.statusElement, ctx.onLookupCreationFailure);
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
          ctx.statusElement.error(wgULS("无法获取页面创建者的名字", "無法取得頁面建立者的名字"));
          ctx.onLookupCreationFailure(this);
          return;
        }
      }
      if (!ctx.timestamp) {
        ctx.statusElement.error(wgULS("无法获取页面创建时间", "無法取得頁面建立時間"));
        ctx.onLookupCreationFailure(this);
        return;
      }
      ctx.statusElement.info(wgULS("已获取页面创建信息", "已取得頁面建立資訊"));
      ctx.onLookupCreationSuccess(this);
    };
    const fnPreflightChecks = function(action, onFailure) {
      if (!Morebits.userIsSysop && action !== "move") {
        ctx.statusElement.error(wgULS("无法对页面进行“", "無法對頁面進行「") + action + wgULS("”操作：只有管理员可以进行此操作", "」操作：只有管理員可以進行此操作"));
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
        ctx.statusElement.error("".concat(wgULS("无法对页面进行“", "無法對頁面進行「") + action + wgULS("”操作，因为页面", "」操作，因為頁面") + (missing ? "已不" : wgULS("已经", "已經")), "存在"));
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
      if (editprot && !ctx.suppressProtectWarning && !confirm(wgULS("您即将对全保护页面“", "您即將對全保護頁面「") + ctx.pageName + (editprot.expiry === "infinity" ? wgULS("”（永久）", "」（永久）") : "".concat(wgULS("”（到期：", "」（到期：") + new Morebits.date(editprot.expiry).calendar("utc"), " (UTC)）")) + wgULS("”进行“", "」進行「") + action + wgULS("”操作", "」操作") + wgULS("。\n\n单击确定以继续操作，或单击取消以取消操作。", "。\n\n點擊確定以繼續操作，或點擊取消以取消操作。"))) {
        ctx.statusElement.error(wgULS("已取消对全保护页面的操作。", "已取消對全保護頁面的操作。"));
        onFailure(this);
        return false;
      }
      if (!response.tokens.csrftoken) {
        ctx.statusElement.error(wgULS("无法获取令牌。", "無法取得權杖。"));
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
      ctx.moveProcessApi = new Morebits.wiki.api(wgULS("移动页面……", "移動頁面……"), query, ctx.onMoveSuccess, ctx.statusElement, ctx.onMoveFailure);
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
      const patrolStat = new Morebits.status(wgULS("标记页面为已巡查", "標記頁面為已巡查"));
      ctx.patrolProcessApi = new Morebits.wiki.api(wgULS("巡查页面……", "巡查頁面……"), query, null, patrolStat);
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
      ctx.deleteProcessApi = new Morebits.wiki.api(wgULS("删除页面……", "刪除頁面……"), query, ctx.onDeleteSuccess, ctx.statusElement, fnProcessDeleteError);
      ctx.deleteProcessApi.setParent(this);
      ctx.deleteProcessApi.post();
    };
    const fnProcessDeleteError = function() {
      const errorCode = ctx.deleteProcessApi.getErrorCode();
      if (errorCode === "internal_api_error_DBQueryError" && ctx.retries++ < ctx.maxRetries) {
        ctx.statusElement.info(wgULS("数据库查询错误，重试", "資料庫查詢錯誤，重試"));
        --Morebits.wiki.numberOfActionsLeft;
        ctx.deleteProcessApi.post();
      } else if (errorCode === "missingtitle") {
        ctx.statusElement.error(wgULS("不能删除页面，因其已不存在", "不能刪除頁面，因其已不存在"));
        if (ctx.onDeleteFailure) {
          ctx.onDeleteFailure.call(this, ctx.deleteProcessApi);
        }
      } else {
        ctx.statusElement.error(wgULS("无法删除页面：", "無法刪除頁面：") + ctx.deleteProcessApi.getErrorText());
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
      ctx.undeleteProcessApi = new Morebits.wiki.api(wgULS("还原页面……", "還原頁面……"), query, ctx.onUndeleteSuccess, ctx.statusElement, fnProcessUndeleteError);
      ctx.undeleteProcessApi.setParent(this);
      ctx.undeleteProcessApi.post();
    };
    const fnProcessUndeleteError = function() {
      const errorCode = ctx.undeleteProcessApi.getErrorCode();
      if (errorCode === "internal_api_error_DBQueryError") {
        if (ctx.retries++ < ctx.maxRetries) {
          ctx.statusElement.info(wgULS("数据库查询错误，重试", "資料庫查詢錯誤，重試"));
          --Morebits.wiki.numberOfActionsLeft;
          ctx.undeleteProcessApi.post();
        } else {
          ctx.statusElement.error(wgULS("持续的数据库查询错误，重新加载页面并重试", "持續的資料庫查詢錯誤，重新載入頁面並重試"));
          if (ctx.onUndeleteFailure) {
            ctx.onUndeleteFailure.call(this, ctx.undeleteProcessApi);
          }
        }
      } else if (errorCode === "cantundelete") {
        ctx.statusElement.error(wgULS("无法还原删除页面，因没有版本供还原或已被还原", "無法還原刪除頁面，因沒有版本供還原或已被還原"));
        if (ctx.onUndeleteFailure) {
          ctx.onUndeleteFailure.call(this, ctx.undeleteProcessApi);
        }
      } else {
        ctx.statusElement.error(wgULS("无法还原页面：", "無法還原頁面：") + ctx.undeleteProcessApi.getErrorText());
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
        if ((!ctx.protectEdit || ctx.protectEdit.level !== "sysop" || !ctx.protectMove || ctx.protectMove.level !== "sysop") && !confirm(wgULS("您已对“", "您已對「") + ctx.pageName + wgULS("”启用了连锁保护", "」啟用了連鎖保護") + wgULS("，但没有设置仅管理员的保护级别。\n\n", "，但沒有設定僅管理員的保護級別。\n\n") + wgULS("单击确认以自动调整并继续连锁全保护，单击取消以跳过此操作", "點擊確認以自動調整並繼續連鎖全保護，點擊取消以跳過此操作"))) {
          ctx.statusElement.error(wgULS("连锁保护已取消。", "連鎖保護已取消。"));
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
      ctx.protectProcessApi = new Morebits.wiki.api(wgULS("保护页面……", "保護頁面……"), query, ctx.onProtectSuccess, ctx.statusElement, ctx.onProtectFailure);
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
      const renderApi = new Morebits.wiki.api(wgULS("加载中……", "載入中……"), query, fnRenderSuccess, new Morebits.status(wgULS("预览", "預覽")));
      renderApi.post();
    };
    const fnRenderSuccess = (apiobj) => {
      const response = apiobj.getResponse();
      const html = response.parse.text;
      if (!html) {
        apiobj.statelem.error(wgULS("加载预览失败，或模板为空", "載入預覽失敗，或模板為空"));
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
      const page = new Morebits.wiki.page("User:".concat(mw.config.get("wgUserName"), "/").concat(logPageName), wgULS("将项目加入到用户空间日志", "將項目加入到使用者空間日誌"));
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
      statusElement: new Morebits.status(currentAction || wgULS("执行批量操作", "執行批次操作")),
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
        ctx.statusElement.error(wgULS("批量操作已在运行", "批次操作已在執行"));
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
        ctx.statusElement.info(wgULS("没有指定页面", "沒有指定頁面"));
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
        ctx.statusElement.warn("".concat(wgULS("完成（多执行了", "完成（多執行了") + (ctx.countFinished - total), "次）"));
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mYWlscy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Rlc2NyaXB0b3JzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1jYWxsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NsYXNzb2YtcmF3LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtY2FsbGFibGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nZXQtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXN5bWJvbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RyeS10by1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWNhbGxhYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1Zy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1uYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9tYXRoLXRydW5jLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtYXJyYXkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1zZXQtbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9lcy1ub3QtZXhjZWVkLXNhZmUtaW50ZWdlci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5wdXNoLmpzIiwgInNyYy9tb3JlYml0cy9tb3JlYml0cy5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiJ3VzZSBzdHJpY3QnO1xudmFyIGNoZWNrID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAmJiBpdC5NYXRoID09PSBNYXRoICYmIGl0O1xufTtcblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbm1vZHVsZS5leHBvcnRzID1cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWdsb2JhbC10aGlzIC0tIHNhZmVcbiAgY2hlY2sodHlwZW9mIGdsb2JhbFRoaXMgPT0gJ29iamVjdCcgJiYgZ2xvYmFsVGhpcykgfHxcbiAgY2hlY2sodHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cpIHx8XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLWdsb2JhbHMgLS0gc2FmZVxuICBjaGVjayh0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmKSB8fFxuICBjaGVjayh0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCkgfHxcbiAgY2hlY2sodHlwZW9mIHRoaXMgPT0gJ29iamVjdCcgJiYgdGhpcykgfHxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jIC0tIGZhbGxiYWNrXG4gIChmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KSgpIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxuLy8gRGV0ZWN0IElFOCdzIGluY29tcGxldGUgZGVmaW5lUHJvcGVydHkgaW1wbGVtZW50YXRpb25cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAxLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KVsxXSAhPT0gNztcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1mdW5jdGlvbi1wcm90b3R5cGUtYmluZCAtLSBzYWZlXG4gIHZhciB0ZXN0ID0gKGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSkuYmluZCgpO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zIC0tIHNhZmVcbiAgcmV0dXJuIHR5cGVvZiB0ZXN0ICE9ICdmdW5jdGlvbicgfHwgdGVzdC5oYXNPd25Qcm9wZXJ0eSgncHJvdG90eXBlJyk7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgTkFUSVZFX0JJTkQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUnKTtcblxudmFyIGNhbGwgPSBGdW5jdGlvbi5wcm90b3R5cGUuY2FsbDtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfQklORCA/IGNhbGwuYmluZChjYWxsKSA6IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGNhbGwuYXBwbHkoY2FsbCwgYXJndW1lbnRzKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIE5hc2hvcm4gfiBKREs4IGJ1Z1xudmFyIE5BU0hPUk5fQlVHID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yICYmICEkcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh7IDE6IDIgfSwgMSk7XG5cbi8vIGBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eWlzZW51bWVyYWJsZVxuZXhwb3J0cy5mID0gTkFTSE9STl9CVUcgPyBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShWKSB7XG4gIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRoaXMsIFYpO1xuICByZXR1cm4gISFkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IuZW51bWVyYWJsZTtcbn0gOiAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgTkFUSVZFX0JJTkQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUnKTtcblxudmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xudmFyIGNhbGwgPSBGdW5jdGlvblByb3RvdHlwZS5jYWxsO1xudmFyIHVuY3VycnlUaGlzV2l0aEJpbmQgPSBOQVRJVkVfQklORCAmJiBGdW5jdGlvblByb3RvdHlwZS5iaW5kLmJpbmQoY2FsbCwgY2FsbCk7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX0JJTkQgPyB1bmN1cnJ5VGhpc1dpdGhCaW5kIDogZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGNhbGwuYXBwbHkoZm4sIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxudmFyIHRvU3RyaW5nID0gdW5jdXJyeVRoaXMoe30udG9TdHJpbmcpO1xudmFyIHN0cmluZ1NsaWNlID0gdW5jdXJyeVRoaXMoJycuc2xpY2UpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gc3RyaW5nU2xpY2UodG9TdHJpbmcoaXQpLCA4LCAtMSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG52YXIgc3BsaXQgPSB1bmN1cnJ5VGhpcygnJy5zcGxpdCk7XG5cbi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG5tb2R1bGUuZXhwb3J0cyA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gdGhyb3dzIGFuIGVycm9yIGluIHJoaW5vLCBzZWUgaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvcmhpbm8vaXNzdWVzLzM0NlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zIC0tIHNhZmVcbiAgcmV0dXJuICEkT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCk7XG59KSA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY2xhc3NvZihpdCkgPT09ICdTdHJpbmcnID8gc3BsaXQoaXQsICcnKSA6ICRPYmplY3QoaXQpO1xufSA6ICRPYmplY3Q7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gd2UgY2FuJ3QgdXNlIGp1c3QgYGl0ID09IG51bGxgIHNpbmNlIG9mIGBkb2N1bWVudC5hbGxgIHNwZWNpYWwgY2FzZVxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1Jc0hUTUxEREEtaW50ZXJuYWwtc2xvdC1hZWNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA9PT0gbnVsbCB8fCBpdCA9PT0gdW5kZWZpbmVkO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtbnVsbC1vci11bmRlZmluZWQnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcmVxdWlyZW9iamVjdGNvZXJjaWJsZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGlzTnVsbE9yVW5kZWZpbmVkKGl0KSkgdGhyb3cgbmV3ICRUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSW5kZXhlZE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGl0KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtSXNIVE1MRERBLWludGVybmFsLXNsb3RcbnZhciBkb2N1bWVudEFsbCA9IHR5cGVvZiBkb2N1bWVudCA9PSAnb2JqZWN0JyAmJiBkb2N1bWVudC5hbGw7XG5cbi8vIGBJc0NhbGxhYmxlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXNjYWxsYWJsZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vbm8tdHlwZW9mLXVuZGVmaW5lZCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xubW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgZG9jdW1lbnRBbGwgPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnRBbGwgIT09IHVuZGVmaW5lZCA/IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gdHlwZW9mIGFyZ3VtZW50ID09ICdmdW5jdGlvbicgfHwgYXJndW1lbnQgPT09IGRvY3VtZW50QWxsO1xufSA6IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gdHlwZW9mIGFyZ3VtZW50ID09ICdmdW5jdGlvbic7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IGlzQ2FsbGFibGUoaXQpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIGFGdW5jdGlvbiA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gaXNDYWxsYWJsZShhcmd1bWVudCkgPyBhcmd1bWVudCA6IHVuZGVmaW5lZDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWVzcGFjZSwgbWV0aG9kKSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IGFGdW5jdGlvbihnbG9iYWxbbmFtZXNwYWNlXSkgOiBnbG9iYWxbbmFtZXNwYWNlXSAmJiBnbG9iYWxbbmFtZXNwYWNlXVttZXRob2RdO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gdW5jdXJyeVRoaXMoe30uaXNQcm90b3R5cGVPZik7XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgbmF2aWdhdG9yICE9ICd1bmRlZmluZWQnICYmIFN0cmluZyhuYXZpZ2F0b3IudXNlckFnZW50KSB8fCAnJztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudCcpO1xuXG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIERlbm8gPSBnbG9iYWwuRGVubztcbnZhciB2ZXJzaW9ucyA9IHByb2Nlc3MgJiYgcHJvY2Vzcy52ZXJzaW9ucyB8fCBEZW5vICYmIERlbm8udmVyc2lvbjtcbnZhciB2OCA9IHZlcnNpb25zICYmIHZlcnNpb25zLnY4O1xudmFyIG1hdGNoLCB2ZXJzaW9uO1xuXG5pZiAodjgpIHtcbiAgbWF0Y2ggPSB2OC5zcGxpdCgnLicpO1xuICAvLyBpbiBvbGQgQ2hyb21lLCB2ZXJzaW9ucyBvZiBWOCBpc24ndCBWOCA9IENocm9tZSAvIDEwXG4gIC8vIGJ1dCB0aGVpciBjb3JyZWN0IHZlcnNpb25zIGFyZSBub3QgaW50ZXJlc3RpbmcgZm9yIHVzXG4gIHZlcnNpb24gPSBtYXRjaFswXSA+IDAgJiYgbWF0Y2hbMF0gPCA0ID8gMSA6ICsobWF0Y2hbMF0gKyBtYXRjaFsxXSk7XG59XG5cbi8vIEJyb3dzZXJGUyBOb2RlSlMgYHByb2Nlc3NgIHBvbHlmaWxsIGluY29ycmVjdGx5IHNldCBgLnY4YCB0byBgMC4wYFxuLy8gc28gY2hlY2sgYHVzZXJBZ2VudGAgZXZlbiBpZiBgLnY4YCBleGlzdHMsIGJ1dCAwXG5pZiAoIXZlcnNpb24gJiYgdXNlckFnZW50KSB7XG4gIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9FZGdlXFwvKFxcZCspLyk7XG4gIGlmICghbWF0Y2ggfHwgbWF0Y2hbMV0gPj0gNzQpIHtcbiAgICBtYXRjaCA9IHVzZXJBZ2VudC5tYXRjaCgvQ2hyb21lXFwvKFxcZCspLyk7XG4gICAgaWYgKG1hdGNoKSB2ZXJzaW9uID0gK21hdGNoWzFdO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdmVyc2lvbjtcbiIsICIndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBlcy9uby1zeW1ib2wgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmcgKi9cbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS12OC12ZXJzaW9uJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbnZhciAkU3RyaW5nID0gZ2xvYmFsLlN0cmluZztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eXN5bWJvbHMgLS0gcmVxdWlyZWQgZm9yIHRlc3Rpbmdcbm1vZHVsZS5leHBvcnRzID0gISFPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBzeW1ib2wgPSBTeW1ib2woJ3N5bWJvbCBkZXRlY3Rpb24nKTtcbiAgLy8gQ2hyb21lIDM4IFN5bWJvbCBoYXMgaW5jb3JyZWN0IHRvU3RyaW5nIGNvbnZlcnNpb25cbiAgLy8gYGdldC1vd24tcHJvcGVydHktc3ltYm9sc2AgcG9seWZpbGwgc3ltYm9scyBjb252ZXJ0ZWQgdG8gb2JqZWN0IGFyZSBub3QgU3ltYm9sIGluc3RhbmNlc1xuICAvLyBuYjogRG8gbm90IGNhbGwgYFN0cmluZ2AgZGlyZWN0bHkgdG8gYXZvaWQgdGhpcyBiZWluZyBvcHRpbWl6ZWQgb3V0IHRvIGBzeW1ib2wrJydgIHdoaWNoIHdpbGwsXG4gIC8vIG9mIGNvdXJzZSwgZmFpbC5cbiAgcmV0dXJuICEkU3RyaW5nKHN5bWJvbCkgfHwgIShPYmplY3Qoc3ltYm9sKSBpbnN0YW5jZW9mIFN5bWJvbCkgfHxcbiAgICAvLyBDaHJvbWUgMzgtNDAgc3ltYm9scyBhcmUgbm90IGluaGVyaXRlZCBmcm9tIERPTSBjb2xsZWN0aW9ucyBwcm90b3R5cGVzIHRvIGluc3RhbmNlc1xuICAgICFTeW1ib2wuc2hhbSAmJiBWOF9WRVJTSU9OICYmIFY4X1ZFUlNJT04gPCA0MTtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLXN5bWJvbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZyAqL1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3ltYm9sLWNvbnN0cnVjdG9yLWRldGVjdGlvbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9TWU1CT0xcbiAgJiYgIVN5bWJvbC5zaGFtXG4gICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCc7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGlzUHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWlzLXByb3RvdHlwZS1vZicpO1xudmFyIFVTRV9TWU1CT0xfQVNfVUlEID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkJyk7XG5cbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVTRV9TWU1CT0xfQVNfVUlEID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24gKGl0KSB7XG4gIHZhciAkU3ltYm9sID0gZ2V0QnVpbHRJbignU3ltYm9sJyk7XG4gIHJldHVybiBpc0NhbGxhYmxlKCRTeW1ib2wpICYmIGlzUHJvdG90eXBlT2YoJFN5bWJvbC5wcm90b3R5cGUsICRPYmplY3QoaXQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICRTdHJpbmcgPSBTdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICRTdHJpbmcoYXJndW1lbnQpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiAnT2JqZWN0JztcbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHRyeVRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RyeS10by1zdHJpbmcnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBBc3NlcnQ6IElzQ2FsbGFibGUoYXJndW1lbnQpIGlzIHRydWVgXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoaXNDYWxsYWJsZShhcmd1bWVudCkpIHJldHVybiBhcmd1bWVudDtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IodHJ5VG9TdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcbnZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZCcpO1xuXG4vLyBgR2V0TWV0aG9kYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtZ2V0bWV0aG9kXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChWLCBQKSB7XG4gIHZhciBmdW5jID0gVltQXTtcbiAgcmV0dXJuIGlzTnVsbE9yVW5kZWZpbmVkKGZ1bmMpID8gdW5kZWZpbmVkIDogYUNhbGxhYmxlKGZ1bmMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYE9yZGluYXJ5VG9QcmltaXRpdmVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vcmRpbmFyeXRvcHJpbWl0aXZlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnB1dCwgcHJlZikge1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKHByZWYgPT09ICdzdHJpbmcnICYmIGlzQ2FsbGFibGUoZm4gPSBpbnB1dC50b1N0cmluZykgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmIChpc0NhbGxhYmxlKGZuID0gaW5wdXQudmFsdWVPZikgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmIChwcmVmICE9PSAnc3RyaW5nJyAmJiBpc0NhbGxhYmxlKGZuID0gaW5wdXQudG9TdHJpbmcpICYmICFpc09iamVjdCh2YWwgPSBjYWxsKGZuLCBpbnB1dCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICB0cnkge1xuICAgIGRlZmluZVByb3BlcnR5KGdsb2JhbCwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBnbG9iYWxba2V5XSA9IHZhbHVlO1xuICB9IHJldHVybiB2YWx1ZTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBkZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5Jyk7XG5cbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IGRlZmluZUdsb2JhbFByb3BlcnR5KFNIQVJFRCwge30pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN0b3JlO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcbnZhciBzdG9yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB7fSk7XG59KSgndmVyc2lvbnMnLCBbXSkucHVzaCh7XG4gIHZlcnNpb246ICczLjM1LjAnLFxuICBtb2RlOiBJU19QVVJFID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMTQtMjAyMyBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KScsXG4gIGxpY2Vuc2U6ICdodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9ibG9iL3YzLjM1LjAvTElDRU5TRScsXG4gIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzJ1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xuXG4vLyBgVG9PYmplY3RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b29iamVjdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuICRPYmplY3QocmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudCkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IHVuY3VycnlUaGlzKHt9Lmhhc093blByb3BlcnR5KTtcblxuLy8gYEhhc093blByb3BlcnR5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaGFzb3ducHJvcGVydHlcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtaGFzb3duIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0Lmhhc093biB8fCBmdW5jdGlvbiBoYXNPd24oaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkodG9PYmplY3QoaXQpLCBrZXkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbnZhciBpZCA9IDA7XG52YXIgcG9zdGZpeCA9IE1hdGgucmFuZG9tKCk7XG52YXIgdG9TdHJpbmcgPSB1bmN1cnJ5VGhpcygxLjAudG9TdHJpbmcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJyArIChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5KSArICcpXycgKyB0b1N0cmluZygrK2lkICsgcG9zdGZpeCwgMzYpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcbnZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24nKTtcbnZhciBVU0VfU1lNQk9MX0FTX1VJRCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZCcpO1xuXG52YXIgU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcbnZhciBXZWxsS25vd25TeW1ib2xzU3RvcmUgPSBzaGFyZWQoJ3drcycpO1xudmFyIGNyZWF0ZVdlbGxLbm93blN5bWJvbCA9IFVTRV9TWU1CT0xfQVNfVUlEID8gU3ltYm9sWydmb3InXSB8fCBTeW1ib2wgOiBTeW1ib2wgJiYgU3ltYm9sLndpdGhvdXRTZXR0ZXIgfHwgdWlkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGlmICghaGFzT3duKFdlbGxLbm93blN5bWJvbHNTdG9yZSwgbmFtZSkpIHtcbiAgICBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV0gPSBOQVRJVkVfU1lNQk9MICYmIGhhc093bihTeW1ib2wsIG5hbWUpXG4gICAgICA/IFN5bWJvbFtuYW1lXVxuICAgICAgOiBjcmVhdGVXZWxsS25vd25TeW1ib2woJ1N5bWJvbC4nICsgbmFtZSk7XG4gIH0gcmV0dXJuIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXN5bWJvbCcpO1xudmFyIGdldE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtbWV0aG9kJyk7XG52YXIgb3JkaW5hcnlUb1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vcmRpbmFyeS10by1wcmltaXRpdmUnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG52YXIgVE9fUFJJTUlUSVZFID0gd2VsbEtub3duU3ltYm9sKCd0b1ByaW1pdGl2ZScpO1xuXG4vLyBgVG9QcmltaXRpdmVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b3ByaW1pdGl2ZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5wdXQsIHByZWYpIHtcbiAgaWYgKCFpc09iamVjdChpbnB1dCkgfHwgaXNTeW1ib2woaW5wdXQpKSByZXR1cm4gaW5wdXQ7XG4gIHZhciBleG90aWNUb1ByaW0gPSBnZXRNZXRob2QoaW5wdXQsIFRPX1BSSU1JVElWRSk7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChleG90aWNUb1ByaW0pIHtcbiAgICBpZiAocHJlZiA9PT0gdW5kZWZpbmVkKSBwcmVmID0gJ2RlZmF1bHQnO1xuICAgIHJlc3VsdCA9IGNhbGwoZXhvdGljVG9QcmltLCBpbnB1dCwgcHJlZik7XG4gICAgaWYgKCFpc09iamVjdChyZXN1bHQpIHx8IGlzU3ltYm9sKHJlc3VsdCkpIHJldHVybiByZXN1bHQ7XG4gICAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG4gIH1cbiAgaWYgKHByZWYgPT09IHVuZGVmaW5lZCkgcHJlZiA9ICdudW1iZXInO1xuICByZXR1cm4gb3JkaW5hcnlUb1ByaW1pdGl2ZShpbnB1dCwgcHJlZik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcmltaXRpdmUnKTtcbnZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1zeW1ib2wnKTtcblxuLy8gYFRvUHJvcGVydHlLZXlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b3Byb3BlcnR5a2V5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICB2YXIga2V5ID0gdG9QcmltaXRpdmUoYXJndW1lbnQsICdzdHJpbmcnKTtcbiAgcmV0dXJuIGlzU3ltYm9sKGtleSkgPyBrZXkgOiBrZXkgKyAnJztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyIGRvY3VtZW50ID0gZ2xvYmFsLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgRVhJU1RTID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gRVhJU1RTID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBjcmVhdGVFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50Jyk7XG5cbi8vIFRoYW5rcyB0byBJRTggZm9yIGl0cyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhREVTQ1JJUFRPUlMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGNyZWF0ZUVsZW1lbnQoJ2RpdicpLCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH1cbiAgfSkuYSAhPT0gNztcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1wcm9wZXJ0eS1pcy1lbnVtZXJhYmxlJyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcm9wZXJ0eS1rZXknKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yXG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyA/ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICBPID0gdG9JbmRleGVkT2JqZWN0KE8pO1xuICBQID0gdG9Qcm9wZXJ0eUtleShQKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIGlmIChoYXNPd24oTywgUCkpIHJldHVybiBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoIWNhbGwocHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUuZiwgTywgUCksIE9bUF0pO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBWOCB+IENocm9tZSAzNi1cbi8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMzMzRcbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9LCAncHJvdG90eXBlJywge1xuICAgIHZhbHVlOiA0MixcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSkucHJvdG90eXBlICE9PSA0Mjtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyICRTdHJpbmcgPSBTdHJpbmc7XG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYEFzc2VydDogVHlwZShhcmd1bWVudCkgaXMgT2JqZWN0YFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgaWYgKGlzT2JqZWN0KGFyZ3VtZW50KSkgcmV0dXJuIGFyZ3VtZW50O1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcigkU3RyaW5nKGFyZ3VtZW50KSArICcgaXMgbm90IGFuIG9iamVjdCcpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pZTgtZG9tLWRlZmluZScpO1xudmFyIFY4X1BST1RPVFlQRV9ERUZJTkVfQlVHID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Y4LXByb3RvdHlwZS1kZWZpbmUtYnVnJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcm9wZXJ0eS1rZXknKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbnZhciAkZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgRU5VTUVSQUJMRSA9ICdlbnVtZXJhYmxlJztcbnZhciBDT05GSUdVUkFCTEUgPSAnY29uZmlndXJhYmxlJztcbnZhciBXUklUQUJMRSA9ICd3cml0YWJsZSc7XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydHlgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydHlcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gVjhfUFJPVE9UWVBFX0RFRklORV9CVUcgPyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9Qcm9wZXJ0eUtleShQKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmICh0eXBlb2YgTyA9PT0gJ2Z1bmN0aW9uJyAmJiBQID09PSAncHJvdG90eXBlJyAmJiAndmFsdWUnIGluIEF0dHJpYnV0ZXMgJiYgV1JJVEFCTEUgaW4gQXR0cmlidXRlcyAmJiAhQXR0cmlidXRlc1tXUklUQUJMRV0pIHtcbiAgICB2YXIgY3VycmVudCA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG4gICAgaWYgKGN1cnJlbnQgJiYgY3VycmVudFtXUklUQUJMRV0pIHtcbiAgICAgIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICAgICAgQXR0cmlidXRlcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiBDT05GSUdVUkFCTEUgaW4gQXR0cmlidXRlcyA/IEF0dHJpYnV0ZXNbQ09ORklHVVJBQkxFXSA6IGN1cnJlbnRbQ09ORklHVVJBQkxFXSxcbiAgICAgICAgZW51bWVyYWJsZTogRU5VTUVSQUJMRSBpbiBBdHRyaWJ1dGVzID8gQXR0cmlidXRlc1tFTlVNRVJBQkxFXSA6IGN1cnJlbnRbRU5VTUVSQUJMRV0sXG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgICAgfTtcbiAgICB9XG4gIH0gcmV0dXJuICRkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKTtcbn0gOiAkZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9Qcm9wZXJ0eUtleShQKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gJGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IG5ldyAkVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCcpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5TW9kdWxlLmYob2JqZWN0LCBrZXksIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcblxudmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyIGdldERlc2NyaXB0b3IgPSBERVNDUklQVE9SUyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG52YXIgRVhJU1RTID0gaGFzT3duKEZ1bmN0aW9uUHJvdG90eXBlLCAnbmFtZScpO1xuLy8gYWRkaXRpb25hbCBwcm90ZWN0aW9uIGZyb20gbWluaWZpZWQgLyBtYW5nbGVkIC8gZHJvcHBlZCBmdW5jdGlvbiBuYW1lc1xudmFyIFBST1BFUiA9IEVYSVNUUyAmJiAoZnVuY3Rpb24gc29tZXRoaW5nKCkgeyAvKiBlbXB0eSAqLyB9KS5uYW1lID09PSAnc29tZXRoaW5nJztcbnZhciBDT05GSUdVUkFCTEUgPSBFWElTVFMgJiYgKCFERVNDUklQVE9SUyB8fCAoREVTQ1JJUFRPUlMgJiYgZ2V0RGVzY3JpcHRvcihGdW5jdGlvblByb3RvdHlwZSwgJ25hbWUnKS5jb25maWd1cmFibGUpKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEVYSVNUUzogRVhJU1RTLFxuICBQUk9QRVI6IFBST1BFUixcbiAgQ09ORklHVVJBQkxFOiBDT05GSUdVUkFCTEVcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBzdG9yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcblxudmFyIGZ1bmN0aW9uVG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyhGdW5jdGlvbi50b1N0cmluZyk7XG5cbi8vIHRoaXMgaGVscGVyIGJyb2tlbiBpbiBgY29yZS1qc0AzLjQuMS0zLjQuNGAsIHNvIHdlIGNhbid0IHVzZSBgc2hhcmVkYCBoZWxwZXJcbmlmICghaXNDYWxsYWJsZShzdG9yZS5pbnNwZWN0U291cmNlKSkge1xuICBzdG9yZS5pbnNwZWN0U291cmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uVG9TdHJpbmcoaXQpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0b3JlLmluc3BlY3RTb3VyY2U7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbnZhciBXZWFrTWFwID0gZ2xvYmFsLldlYWtNYXA7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNDYWxsYWJsZShXZWFrTWFwKSAmJiAvbmF0aXZlIGNvZGUvLnRlc3QoU3RyaW5nKFdlYWtNYXApKTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcblxudmFyIGtleXMgPSBzaGFyZWQoJ2tleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBrZXlzW2tleV0gfHwgKGtleXNba2V5XSA9IHVpZChrZXkpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgTkFUSVZFX1dFQUtfTUFQID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlYWstbWFwLWJhc2ljLWRldGVjdGlvbicpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG52YXIgc2hhcmVkS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG5cbnZhciBPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCA9ICdPYmplY3QgYWxyZWFkeSBpbml0aWFsaXplZCc7XG52YXIgVHlwZUVycm9yID0gZ2xvYmFsLlR5cGVFcnJvcjtcbnZhciBXZWFrTWFwID0gZ2xvYmFsLldlYWtNYXA7XG52YXIgc2V0LCBnZXQsIGhhcztcblxudmFyIGVuZm9yY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGhhcyhpdCkgPyBnZXQoaXQpIDogc2V0KGl0LCB7fSk7XG59O1xuXG52YXIgZ2V0dGVyRm9yID0gZnVuY3Rpb24gKFRZUEUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpdCkge1xuICAgIHZhciBzdGF0ZTtcbiAgICBpZiAoIWlzT2JqZWN0KGl0KSB8fCAoc3RhdGUgPSBnZXQoaXQpKS50eXBlICE9PSBUWVBFKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbmNvbXBhdGlibGUgcmVjZWl2ZXIsICcgKyBUWVBFICsgJyByZXF1aXJlZCcpO1xuICAgIH0gcmV0dXJuIHN0YXRlO1xuICB9O1xufTtcblxuaWYgKE5BVElWRV9XRUFLX01BUCB8fCBzaGFyZWQuc3RhdGUpIHtcbiAgdmFyIHN0b3JlID0gc2hhcmVkLnN0YXRlIHx8IChzaGFyZWQuc3RhdGUgPSBuZXcgV2Vha01hcCgpKTtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tc2VsZi1hc3NpZ24gLS0gcHJvdG90eXBlIG1ldGhvZHMgcHJvdGVjdGlvbiAqL1xuICBzdG9yZS5nZXQgPSBzdG9yZS5nZXQ7XG4gIHN0b3JlLmhhcyA9IHN0b3JlLmhhcztcbiAgc3RvcmUuc2V0ID0gc3RvcmUuc2V0O1xuICAvKiBlc2xpbnQtZW5hYmxlIG5vLXNlbGYtYXNzaWduIC0tIHByb3RvdHlwZSBtZXRob2RzIHByb3RlY3Rpb24gKi9cbiAgc2V0ID0gZnVuY3Rpb24gKGl0LCBtZXRhZGF0YSkge1xuICAgIGlmIChzdG9yZS5oYXMoaXQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKE9CSkVDVF9BTFJFQURZX0lOSVRJQUxJWkVEKTtcbiAgICBtZXRhZGF0YS5mYWNhZGUgPSBpdDtcbiAgICBzdG9yZS5zZXQoaXQsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBzdG9yZS5nZXQoaXQpIHx8IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gc3RvcmUuaGFzKGl0KTtcbiAgfTtcbn0gZWxzZSB7XG4gIHZhciBTVEFURSA9IHNoYXJlZEtleSgnc3RhdGUnKTtcbiAgaGlkZGVuS2V5c1tTVEFURV0gPSB0cnVlO1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgaWYgKGhhc093bihpdCwgU1RBVEUpKSB0aHJvdyBuZXcgVHlwZUVycm9yKE9CSkVDVF9BTFJFQURZX0lOSVRJQUxJWkVEKTtcbiAgICBtZXRhZGF0YS5mYWNhZGUgPSBpdDtcbiAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoaXQsIFNUQVRFLCBtZXRhZGF0YSk7XG4gICAgcmV0dXJuIG1ldGFkYXRhO1xuICB9O1xuICBnZXQgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaGFzT3duKGl0LCBTVEFURSkgPyBpdFtTVEFURV0gOiB7fTtcbiAgfTtcbiAgaGFzID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGhhc093bihpdCwgU1RBVEUpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBzZXQsXG4gIGdldDogZ2V0LFxuICBoYXM6IGhhcyxcbiAgZW5mb3JjZTogZW5mb3JjZSxcbiAgZ2V0dGVyRm9yOiBnZXR0ZXJGb3Jcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBDT05GSUdVUkFCTEVfRlVOQ1RJT05fTkFNRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1uYW1lJykuQ09ORklHVVJBQkxFO1xudmFyIGluc3BlY3RTb3VyY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UnKTtcbnZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJyk7XG5cbnZhciBlbmZvcmNlSW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZW5mb3JjZTtcbnZhciBnZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXQ7XG52YXIgJFN0cmluZyA9IFN0cmluZztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIHN0cmluZ1NsaWNlID0gdW5jdXJyeVRoaXMoJycuc2xpY2UpO1xudmFyIHJlcGxhY2UgPSB1bmN1cnJ5VGhpcygnJy5yZXBsYWNlKTtcbnZhciBqb2luID0gdW5jdXJyeVRoaXMoW10uam9pbik7XG5cbnZhciBDT05GSUdVUkFCTEVfTEVOR1RIID0gREVTQ1JJUFRPUlMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5KGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSwgJ2xlbmd0aCcsIHsgdmFsdWU6IDggfSkubGVuZ3RoICE9PSA4O1xufSk7XG5cbnZhciBURU1QTEFURSA9IFN0cmluZyhTdHJpbmcpLnNwbGl0KCdTdHJpbmcnKTtcblxudmFyIG1ha2VCdWlsdEluID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUsIG5hbWUsIG9wdGlvbnMpIHtcbiAgaWYgKHN0cmluZ1NsaWNlKCRTdHJpbmcobmFtZSksIDAsIDcpID09PSAnU3ltYm9sKCcpIHtcbiAgICBuYW1lID0gJ1snICsgcmVwbGFjZSgkU3RyaW5nKG5hbWUpLCAvXlN5bWJvbFxcKChbXildKilcXCkvLCAnJDEnKSArICddJztcbiAgfVxuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmdldHRlcikgbmFtZSA9ICdnZXQgJyArIG5hbWU7XG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuc2V0dGVyKSBuYW1lID0gJ3NldCAnICsgbmFtZTtcbiAgaWYgKCFoYXNPd24odmFsdWUsICduYW1lJykgfHwgKENPTkZJR1VSQUJMRV9GVU5DVElPTl9OQU1FICYmIHZhbHVlLm5hbWUgIT09IG5hbWUpKSB7XG4gICAgaWYgKERFU0NSSVBUT1JTKSBkZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgJ25hbWUnLCB7IHZhbHVlOiBuYW1lLCBjb25maWd1cmFibGU6IHRydWUgfSk7XG4gICAgZWxzZSB2YWx1ZS5uYW1lID0gbmFtZTtcbiAgfVxuICBpZiAoQ09ORklHVVJBQkxFX0xFTkdUSCAmJiBvcHRpb25zICYmIGhhc093bihvcHRpb25zLCAnYXJpdHknKSAmJiB2YWx1ZS5sZW5ndGggIT09IG9wdGlvbnMuYXJpdHkpIHtcbiAgICBkZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgJ2xlbmd0aCcsIHsgdmFsdWU6IG9wdGlvbnMuYXJpdHkgfSk7XG4gIH1cbiAgdHJ5IHtcbiAgICBpZiAob3B0aW9ucyAmJiBoYXNPd24ob3B0aW9ucywgJ2NvbnN0cnVjdG9yJykgJiYgb3B0aW9ucy5jb25zdHJ1Y3Rvcikge1xuICAgICAgaWYgKERFU0NSSVBUT1JTKSBkZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgJ3Byb3RvdHlwZScsIHsgd3JpdGFibGU6IGZhbHNlIH0pO1xuICAgIC8vIGluIFY4IH4gQ2hyb21lIDUzLCBwcm90b3R5cGVzIG9mIHNvbWUgbWV0aG9kcywgbGlrZSBgQXJyYXkucHJvdG90eXBlLnZhbHVlc2AsIGFyZSBub24td3JpdGFibGVcbiAgICB9IGVsc2UgaWYgKHZhbHVlLnByb3RvdHlwZSkgdmFsdWUucHJvdG90eXBlID0gdW5kZWZpbmVkO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIHZhciBzdGF0ZSA9IGVuZm9yY2VJbnRlcm5hbFN0YXRlKHZhbHVlKTtcbiAgaWYgKCFoYXNPd24oc3RhdGUsICdzb3VyY2UnKSkge1xuICAgIHN0YXRlLnNvdXJjZSA9IGpvaW4oVEVNUExBVEUsIHR5cGVvZiBuYW1lID09ICdzdHJpbmcnID8gbmFtZSA6ICcnKTtcbiAgfSByZXR1cm4gdmFsdWU7XG59O1xuXG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1leHRlbmQtbmF0aXZlIC0tIHJlcXVpcmVkXG5GdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmcgPSBtYWtlQnVpbHRJbihmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuIGlzQ2FsbGFibGUodGhpcykgJiYgZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKS5zb3VyY2UgfHwgaW5zcGVjdFNvdXJjZSh0aGlzKTtcbn0sICd0b1N0cmluZycpO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIG1ha2VCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4nKTtcbnZhciBkZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIGtleSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSBvcHRpb25zID0ge307XG4gIHZhciBzaW1wbGUgPSBvcHRpb25zLmVudW1lcmFibGU7XG4gIHZhciBuYW1lID0gb3B0aW9ucy5uYW1lICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm5hbWUgOiBrZXk7XG4gIGlmIChpc0NhbGxhYmxlKHZhbHVlKSkgbWFrZUJ1aWx0SW4odmFsdWUsIG5hbWUsIG9wdGlvbnMpO1xuICBpZiAob3B0aW9ucy5nbG9iYWwpIHtcbiAgICBpZiAoc2ltcGxlKSBPW2tleV0gPSB2YWx1ZTtcbiAgICBlbHNlIGRlZmluZUdsb2JhbFByb3BlcnR5KGtleSwgdmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIW9wdGlvbnMudW5zYWZlKSBkZWxldGUgT1trZXldO1xuICAgICAgZWxzZSBpZiAoT1trZXldKSBzaW1wbGUgPSB0cnVlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgICBpZiAoc2ltcGxlKSBPW2tleV0gPSB2YWx1ZTtcbiAgICBlbHNlIGRlZmluZVByb3BlcnR5TW9kdWxlLmYoTywga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogIW9wdGlvbnMubm9uQ29uZmlndXJhYmxlLFxuICAgICAgd3JpdGFibGU6ICFvcHRpb25zLm5vbldyaXRhYmxlXG4gICAgfSk7XG4gIH0gcmV0dXJuIE87XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcblxuLy8gYE1hdGgudHJ1bmNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1tYXRoLnRydW5jXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tbWF0aC10cnVuYyAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE1hdGgudHJ1bmMgfHwgZnVuY3Rpb24gdHJ1bmMoeCkge1xuICB2YXIgbiA9ICt4O1xuICByZXR1cm4gKG4gPiAwID8gZmxvb3IgOiBjZWlsKShuKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRydW5jID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL21hdGgtdHJ1bmMnKTtcblxuLy8gYFRvSW50ZWdlck9ySW5maW5pdHlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b2ludGVnZXJvcmluZmluaXR5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICB2YXIgbnVtYmVyID0gK2FyZ3VtZW50O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICByZXR1cm4gbnVtYmVyICE9PSBudW1iZXIgfHwgbnVtYmVyID09PSAwID8gMCA6IHRydW5jKG51bWJlcik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHknKTtcblxudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBIZWxwZXIgZm9yIGEgcG9wdWxhciByZXBlYXRpbmcgY2FzZSBvZiB0aGUgc3BlYzpcbi8vIExldCBpbnRlZ2VyIGJlID8gVG9JbnRlZ2VyKGluZGV4KS5cbi8vIElmIGludGVnZXIgPCAwLCBsZXQgcmVzdWx0IGJlIG1heCgobGVuZ3RoICsgaW50ZWdlciksIDApOyBlbHNlIGxldCByZXN1bHQgYmUgbWluKGludGVnZXIsIGxlbmd0aCkuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIHZhciBpbnRlZ2VyID0gdG9JbnRlZ2VyT3JJbmZpbml0eShpbmRleCk7XG4gIHJldHVybiBpbnRlZ2VyIDwgMCA/IG1heChpbnRlZ2VyICsgbGVuZ3RoLCAwKSA6IG1pbihpbnRlZ2VyLCBsZW5ndGgpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9JbnRlZ2VyT3JJbmZpbml0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyLW9yLWluZmluaXR5Jyk7XG5cbnZhciBtaW4gPSBNYXRoLm1pbjtcblxuLy8gYFRvTGVuZ3RoYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9sZW5ndGhcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBhcmd1bWVudCA+IDAgPyBtaW4odG9JbnRlZ2VyT3JJbmZpbml0eShhcmd1bWVudCksIDB4MUZGRkZGRkZGRkZGRkYpIDogMDsgLy8gMiAqKiA1MyAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG5cbi8vIGBMZW5ndGhPZkFycmF5TGlrZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWxlbmd0aG9mYXJyYXlsaWtlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHRvTGVuZ3RoKG9iai5sZW5ndGgpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS57IGluZGV4T2YsIGluY2x1ZGVzIH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gbGVuZ3RoT2ZBcnJheUxpa2UoTyk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9PSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICAgICAgaWYgKHZhbHVlICE9PSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgaWYgKChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSAmJiBPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcbiAgaW5jbHVkZXM6IGNyZWF0ZU1ldGhvZCh0cnVlKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5pbmRleE9mYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5kZXhvZlxuICBpbmRleE9mOiBjcmVhdGVNZXRob2QoZmFsc2UpXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIGluZGV4T2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMnKS5pbmRleE9mO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcblxudmFyIHB1c2ggPSB1bmN1cnJ5VGhpcyhbXS5wdXNoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgIWhhc093bihoaWRkZW5LZXlzLCBrZXkpICYmIGhhc093bihPLCBrZXkpICYmIHB1c2gocmVzdWx0LCBrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzT3duKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHB1c2gocmVzdWx0LCBrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIElFOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSBbXG4gICdjb25zdHJ1Y3RvcicsXG4gICdoYXNPd25Qcm9wZXJ0eScsXG4gICdpc1Byb3RvdHlwZU9mJyxcbiAgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJyxcbiAgJ3RvTG9jYWxlU3RyaW5nJyxcbiAgJ3RvU3RyaW5nJyxcbiAgJ3ZhbHVlT2YnXG5dO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpbnRlcm5hbE9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG5cbnZhciBoaWRkZW5LZXlzID0gZW51bUJ1Z0tleXMuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eW5hbWVzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5bmFtZXMgLS0gc2FmZVxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHJldHVybiBpbnRlcm5hbE9iamVjdEtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlzeW1ib2xzIC0tIHNhZmVcbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcycpO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG5cbnZhciBjb25jYXQgPSB1bmN1cnJ5VGhpcyhbXS5jb25jYXQpO1xuXG4vLyBhbGwgb2JqZWN0IGtleXMsIGluY2x1ZGVzIG5vbi1lbnVtZXJhYmxlIGFuZCBzeW1ib2xzXG5tb2R1bGUuZXhwb3J0cyA9IGdldEJ1aWx0SW4oJ1JlZmxlY3QnLCAnb3duS2V5cycpIHx8IGZ1bmN0aW9uIG93bktleXMoaXQpIHtcbiAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlLmYoYW5PYmplY3QoaXQpKTtcbiAgdmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZS5mO1xuICByZXR1cm4gZ2V0T3duUHJvcGVydHlTeW1ib2xzID8gY29uY2F0KGtleXMsIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkpIDoga2V5cztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgb3duS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vd24ta2V5cycpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSwgZXhjZXB0aW9ucykge1xuICB2YXIga2V5cyA9IG93bktleXMoc291cmNlKTtcbiAgdmFyIGRlZmluZVByb3BlcnR5ID0gZGVmaW5lUHJvcGVydHlNb2R1bGUuZjtcbiAgdmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZS5mO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICBpZiAoIWhhc093bih0YXJnZXQsIGtleSkgJiYgIShleGNlcHRpb25zICYmIGhhc093bihleGNlcHRpb25zLCBrZXkpKSkge1xuICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgIH1cbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbnZhciByZXBsYWNlbWVudCA9IC8jfFxcLnByb3RvdHlwZVxcLi87XG5cbnZhciBpc0ZvcmNlZCA9IGZ1bmN0aW9uIChmZWF0dXJlLCBkZXRlY3Rpb24pIHtcbiAgdmFyIHZhbHVlID0gZGF0YVtub3JtYWxpemUoZmVhdHVyZSldO1xuICByZXR1cm4gdmFsdWUgPT09IFBPTFlGSUxMID8gdHJ1ZVxuICAgIDogdmFsdWUgPT09IE5BVElWRSA/IGZhbHNlXG4gICAgOiBpc0NhbGxhYmxlKGRldGVjdGlvbikgPyBmYWlscyhkZXRlY3Rpb24pXG4gICAgOiAhIWRldGVjdGlvbjtcbn07XG5cbnZhciBub3JtYWxpemUgPSBpc0ZvcmNlZC5ub3JtYWxpemUgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gIHJldHVybiBTdHJpbmcoc3RyaW5nKS5yZXBsYWNlKHJlcGxhY2VtZW50LCAnLicpLnRvTG93ZXJDYXNlKCk7XG59O1xuXG52YXIgZGF0YSA9IGlzRm9yY2VkLmRhdGEgPSB7fTtcbnZhciBOQVRJVkUgPSBpc0ZvcmNlZC5OQVRJVkUgPSAnTic7XG52YXIgUE9MWUZJTEwgPSBpc0ZvcmNlZC5QT0xZRklMTCA9ICdQJztcblxubW9kdWxlLmV4cG9ydHMgPSBpc0ZvcmNlZDtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJykuZjtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgZGVmaW5lQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4nKTtcbnZhciBkZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5Jyk7XG52YXIgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jb3B5LWNvbnN0cnVjdG9yLXByb3BlcnRpZXMnKTtcbnZhciBpc0ZvcmNlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1mb3JjZWQnKTtcblxuLypcbiAgb3B0aW9ucy50YXJnZXQgICAgICAgICAtIG5hbWUgb2YgdGhlIHRhcmdldCBvYmplY3RcbiAgb3B0aW9ucy5nbG9iYWwgICAgICAgICAtIHRhcmdldCBpcyB0aGUgZ2xvYmFsIG9iamVjdFxuICBvcHRpb25zLnN0YXQgICAgICAgICAgIC0gZXhwb3J0IGFzIHN0YXRpYyBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnByb3RvICAgICAgICAgIC0gZXhwb3J0IGFzIHByb3RvdHlwZSBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnJlYWwgICAgICAgICAgIC0gcmVhbCBwcm90b3R5cGUgbWV0aG9kIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy5mb3JjZWQgICAgICAgICAtIGV4cG9ydCBldmVuIGlmIHRoZSBuYXRpdmUgZmVhdHVyZSBpcyBhdmFpbGFibGVcbiAgb3B0aW9ucy5iaW5kICAgICAgICAgICAtIGJpbmQgbWV0aG9kcyB0byB0aGUgdGFyZ2V0LCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMud3JhcCAgICAgICAgICAgLSB3cmFwIGNvbnN0cnVjdG9ycyB0byBwcmV2ZW50aW5nIGdsb2JhbCBwb2xsdXRpb24sIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy51bnNhZmUgICAgICAgICAtIHVzZSB0aGUgc2ltcGxlIGFzc2lnbm1lbnQgb2YgcHJvcGVydHkgaW5zdGVhZCBvZiBkZWxldGUgKyBkZWZpbmVQcm9wZXJ0eVxuICBvcHRpb25zLnNoYW0gICAgICAgICAgIC0gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuICBvcHRpb25zLmVudW1lcmFibGUgICAgIC0gZXhwb3J0IGFzIGVudW1lcmFibGUgcHJvcGVydHlcbiAgb3B0aW9ucy5kb250Q2FsbEdldFNldCAtIHByZXZlbnQgY2FsbGluZyBhIGdldHRlciBvbiB0YXJnZXRcbiAgb3B0aW9ucy5uYW1lICAgICAgICAgICAtIHRoZSAubmFtZSBvZiB0aGUgZnVuY3Rpb24gaWYgaXQgZG9lcyBub3QgbWF0Y2ggdGhlIGtleVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9wdGlvbnMsIHNvdXJjZSkge1xuICB2YXIgVEFSR0VUID0gb3B0aW9ucy50YXJnZXQ7XG4gIHZhciBHTE9CQUwgPSBvcHRpb25zLmdsb2JhbDtcbiAgdmFyIFNUQVRJQyA9IG9wdGlvbnMuc3RhdDtcbiAgdmFyIEZPUkNFRCwgdGFyZ2V0LCBrZXksIHRhcmdldFByb3BlcnR5LCBzb3VyY2VQcm9wZXJ0eSwgZGVzY3JpcHRvcjtcbiAgaWYgKEdMT0JBTCkge1xuICAgIHRhcmdldCA9IGdsb2JhbDtcbiAgfSBlbHNlIGlmIChTVEFUSUMpIHtcbiAgICB0YXJnZXQgPSBnbG9iYWxbVEFSR0VUXSB8fCBkZWZpbmVHbG9iYWxQcm9wZXJ0eShUQVJHRVQsIHt9KTtcbiAgfSBlbHNlIHtcbiAgICB0YXJnZXQgPSAoZ2xvYmFsW1RBUkdFVF0gfHwge30pLnByb3RvdHlwZTtcbiAgfVxuICBpZiAodGFyZ2V0KSBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICBzb3VyY2VQcm9wZXJ0eSA9IHNvdXJjZVtrZXldO1xuICAgIGlmIChvcHRpb25zLmRvbnRDYWxsR2V0U2V0KSB7XG4gICAgICBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KTtcbiAgICAgIHRhcmdldFByb3BlcnR5ID0gZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLnZhbHVlO1xuICAgIH0gZWxzZSB0YXJnZXRQcm9wZXJ0eSA9IHRhcmdldFtrZXldO1xuICAgIEZPUkNFRCA9IGlzRm9yY2VkKEdMT0JBTCA/IGtleSA6IFRBUkdFVCArIChTVEFUSUMgPyAnLicgOiAnIycpICsga2V5LCBvcHRpb25zLmZvcmNlZCk7XG4gICAgLy8gY29udGFpbmVkIGluIHRhcmdldFxuICAgIGlmICghRk9SQ0VEICYmIHRhcmdldFByb3BlcnR5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0eXBlb2Ygc291cmNlUHJvcGVydHkgPT0gdHlwZW9mIHRhcmdldFByb3BlcnR5KSBjb250aW51ZTtcbiAgICAgIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMoc291cmNlUHJvcGVydHksIHRhcmdldFByb3BlcnR5KTtcbiAgICB9XG4gICAgLy8gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuICAgIGlmIChvcHRpb25zLnNoYW0gfHwgKHRhcmdldFByb3BlcnR5ICYmIHRhcmdldFByb3BlcnR5LnNoYW0pKSB7XG4gICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoc291cmNlUHJvcGVydHksICdzaGFtJywgdHJ1ZSk7XG4gICAgfVxuICAgIGRlZmluZUJ1aWx0SW4odGFyZ2V0LCBrZXksIHNvdXJjZVByb3BlcnR5LCBvcHRpb25zKTtcbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG4vLyBgSXNBcnJheWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWlzYXJyYXlcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1pc2FycmF5IC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZ3VtZW50KSB7XG4gIHJldHVybiBjbGFzc29mKGFyZ3VtZW50KSA9PT0gJ0FycmF5Jztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBTYWZhcmkgPCAxMyBkb2VzIG5vdCB0aHJvdyBhbiBlcnJvciBpbiB0aGlzIGNhc2VcbnZhciBTSUxFTlRfT05fTk9OX1dSSVRBQkxFX0xFTkdUSF9TRVQgPSBERVNDUklQVE9SUyAmJiAhZnVuY3Rpb24gKCkge1xuICAvLyBtYWtlcyBubyBzZW5zZSB3aXRob3V0IHByb3BlciBzdHJpY3QgbW9kZSBzdXBwb3J0XG4gIGlmICh0aGlzICE9PSB1bmRlZmluZWQpIHJldHVybiB0cnVlO1xuICB0cnkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShbXSwgJ2xlbmd0aCcsIHsgd3JpdGFibGU6IGZhbHNlIH0pLmxlbmd0aCA9IDE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIGVycm9yIGluc3RhbmNlb2YgVHlwZUVycm9yO1xuICB9XG59KCk7XG5cbm1vZHVsZS5leHBvcnRzID0gU0lMRU5UX09OX05PTl9XUklUQUJMRV9MRU5HVEhfU0VUID8gZnVuY3Rpb24gKE8sIGxlbmd0aCkge1xuICBpZiAoaXNBcnJheShPKSAmJiAhZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sICdsZW5ndGgnKS53cml0YWJsZSkge1xuICAgIHRocm93IG5ldyAkVHlwZUVycm9yKCdDYW5ub3Qgc2V0IHJlYWQgb25seSAubGVuZ3RoJyk7XG4gIH0gcmV0dXJuIE8ubGVuZ3RoID0gbGVuZ3RoO1xufSA6IGZ1bmN0aW9uIChPLCBsZW5ndGgpIHtcbiAgcmV0dXJuIE8ubGVuZ3RoID0gbGVuZ3RoO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gMHgxRkZGRkZGRkZGRkZGRjsgLy8gMiAqKiA1MyAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPiBNQVhfU0FGRV9JTlRFR0VSKSB0aHJvdyAkVHlwZUVycm9yKCdNYXhpbXVtIGFsbG93ZWQgaW5kZXggZXhjZWVkZWQnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xudmFyIHNldEFycmF5TGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNldC1sZW5ndGgnKTtcbnZhciBkb2VzTm90RXhjZWVkU2FmZUludGVnZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9lcy1ub3QtZXhjZWVkLXNhZmUtaW50ZWdlcicpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbnZhciBJTkNPUlJFQ1RfVE9fTEVOR1RIID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gW10ucHVzaC5jYWxsKHsgbGVuZ3RoOiAweDEwMDAwMDAwMCB9LCAxKSAhPT0gNDI5NDk2NzI5Nztcbn0pO1xuXG4vLyBWOCA8PSAxMjEgYW5kIFNhZmFyaSA8PSAxNS40OyBGRiA8IDIzIHRocm93cyBJbnRlcm5hbEVycm9yXG4vLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0xMjY4MVxudmFyIHByb3BlckVycm9yT25Ob25Xcml0YWJsZUxlbmd0aCA9IGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoW10sICdsZW5ndGgnLCB7IHdyaXRhYmxlOiBmYWxzZSB9KS5wdXNoKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIGVycm9yIGluc3RhbmNlb2YgVHlwZUVycm9yO1xuICB9XG59O1xuXG52YXIgRk9SQ0VEID0gSU5DT1JSRUNUX1RPX0xFTkdUSCB8fCAhcHJvcGVyRXJyb3JPbk5vbldyaXRhYmxlTGVuZ3RoKCk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUucHVzaGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5wdXNoXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgYXJpdHk6IDEsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzIC0tIHJlcXVpcmVkIGZvciBgLmxlbmd0aGBcbiAgcHVzaDogZnVuY3Rpb24gcHVzaChpdGVtKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCh0aGlzKTtcbiAgICB2YXIgbGVuID0gbGVuZ3RoT2ZBcnJheUxpa2UoTyk7XG4gICAgdmFyIGFyZ0NvdW50ID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBkb2VzTm90RXhjZWVkU2FmZUludGVnZXIobGVuICsgYXJnQ291bnQpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJnQ291bnQ7IGkrKykge1xuICAgICAgT1tsZW5dID0gYXJndW1lbnRzW2ldO1xuICAgICAgbGVuKys7XG4gICAgfVxuICAgIHNldEFycmF5TGVuZ3RoKE8sIGxlbik7XG4gICAgcmV0dXJuIGxlbjtcbiAgfVxufSk7XG4iLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbi8qISBUd2lua2xlLmpzIC0gbW9yZWJpdHMuanMgKi9cblxuLyoqXG4gKiBBIGxpYnJhcnkgZnVsbCBvZiBsb3RzIG9mIGdvb2RuZXNzIGZvciB1c2VyIHNjcmlwdHMgb24gTWVkaWFXaWtpIHdpa2lzLlxuICpcbiAqIFRoZSBoaWdobGlnaHRzIGluY2x1ZGU6XG4gKiAtIHtAbGluayBNb3JlYml0cy53aWtpLmFwaX0gLSBtYWtlIGNhbGxzIHRvIHRoZSBNZWRpYVdpa2kgQVBJXG4gKiAtIHtAbGluayBNb3JlYml0cy53aWtpLnBhZ2V9IC0gbW9kaWZ5IHBhZ2VzIG9uIHRoZSB3aWtpIChlZGl0LCByZXZlcnQsIGRlbGV0ZSwgZXRjLilcbiAqIC0ge0BsaW5rIE1vcmViaXRzLmRhdGV9IC0gZW5oYW5jZWQgZGF0ZSBvYmplY3QgcHJvY2Vzc2luZywgc29ydCBvZiBhIGxpZ2h0IG1vbWVudC5qc1xuICogLSB7QGxpbmsgTW9yZWJpdHMucXVpY2tGb3JtfSAtIGdlbmVyYXRlIHF1aWNrIEhUTUwgZm9ybXMgb24gdGhlIGZseVxuICogLSB7QGxpbmsgTW9yZWJpdHMuc2ltcGxlV2luZG93fSAtIGEgd3JhcHBlciBmb3IgalF1ZXJ5IFVJIERpYWxvZyB3aXRoIGEgY3VzdG9tIGxvb2sgYW5kIGV4dHJhIGZlYXR1cmVzXG4gKiAtIHtAbGluayBNb3JlYml0cy5zdGF0dXN9IC0gYSByb3VnaC1hbmQtcmVhZHkgc3RhdHVzIG1lc3NhZ2UgZGlzcGxheWVyLCB1c2VkIGJ5IHRoZSBNb3JlYml0cy53aWtpIGNsYXNzZXNcbiAqIC0ge0BsaW5rIE1vcmViaXRzLndpa2l0ZXh0fSAtIHV0aWxpdGllcyBmb3IgZGVhbGluZyB3aXRoIHdpa2l0ZXh0XG4gKiAtIHtAbGluayBNb3JlYml0cy5zdHJpbmd9IC0gdXRpbGl0aWVzIGZvciBtYW5pcHVsYXRpbmcgc3RyaW5nc1xuICogLSB7QGxpbmsgTW9yZWJpdHMuYXJyYXl9IC0gdXRpbGl0aWVzIGZvciBtYW5pcHVsYXRpbmcgYXJyYXlzXG4gKiAtIHtAbGluayBNb3JlYml0cy5pcH0gLSB1dGlsaXRpZXMgdG8gaGVscCBwcm9jZXNzIElQIGFkZHJlc3Nlc1xuICpcbiAqIERlcGVuZGVuY2llczpcbiAqIC0gVGhlIHdob2xlIHRoaW5nIHJlbGllcyBvbiBqUXVlcnkuICBCdXQgbW9zdCB3aWtpcyBzaG91bGQgcHJvdmlkZSB0aGlzIGJ5IGRlZmF1bHQuXG4gKiAtIHtAbGluayBNb3JlYml0cy5xdWlja0Zvcm19LCB7QGxpbmsgTW9yZWJpdHMuc2ltcGxlV2luZG93fSwgYW5kIHtAbGluayBNb3JlYml0cy5zdGF0dXN9IHJlbHkgb24gdGhlIFwibW9yZWJpdHMuY3NzXCIgZmlsZSBmb3IgdGhlaXIgc3R5bGluZy5cbiAqIC0ge0BsaW5rIE1vcmViaXRzLnNpbXBsZVdpbmRvd30gYW5kIHtAbGluayBNb3JlYml0cy5xdWlja0Zvcm19IHRvb2x0aXBzIHJlbHkgb24galF1ZXJ5IFVJIERpYWxvZyAoZnJvbSBSZXNvdXJjZUxvYWRlciBtb2R1bGUgbmFtZSAnanF1ZXJ5LnVpJykuXG4gKiAtIFRvIGNyZWF0ZSBhIGdhZGdldCBiYXNlZCBvbiBtb3JlYml0cy5qcywgdXNlIHRoaXMgc3ludGF4IGluIE1lZGlhV2lraTpHYWRnZXRzLWRlZmluaXRpb246XG4gKiAgICAgLSBgKkdhZGdldE5hbWVbUmVzb3VyY2VMb2FkZXJ8ZGVwZW5kZW5jaWVzPW1lZGlhd2lraS51c2VyLG1lZGlhd2lraS51dGlsLG1lZGlhd2lraS5UaXRsZSxqcXVlcnkudWldfG1vcmViaXRzLmpzfG1vcmViaXRzLmNzc3xHYWRnZXROYW1lLmpzYFxuICogLSBBbHRlcm5hdGl2ZWx5LCB5b3UgY2FuIGNvbmZpZ3VyZSBtb3JlYml0cy5qcyBhcyBhIGhpZGRlbiBnYWRnZXQgaW4gTWVkaWFXaWtpOkdhZGdldHMtZGVmaW5pdGlvbjpcbiAqICAgICAtIGAqbW9yZWJpdHNbUmVzb3VyY2VMb2FkZXJ8ZGVwZW5kZW5jaWVzPW1lZGlhd2lraS51c2VyLG1lZGlhd2lraS51dGlsLG1lZGlhd2lraS5UaXRsZSxqcXVlcnkudWl8aGlkZGVuXXxtb3JlYml0cy5qc3xtb3JlYml0cy5jc3NgXG4gKiAgICAgYW5kIHRoZW4gbG9hZCBleHQuZ2FkZ2V0Lm1vcmViaXRzIGFzIG9uZSBvZiB0aGUgZGVwZW5kZW5jaWVzIGZvciB0aGUgbmV3IGdhZGdldC5cbiAqXG4gKiBBbGwgdGhlIHN0dWZmIGhlcmUgd29ya3Mgb24gYWxsIGJyb3dzZXJzIGZvciB3aGljaCBNZWRpYVdpa2kgcHJvdmlkZXMgSmF2YVNjcmlwdCBzdXBwb3J0LlxuICpcbiAqIFRoaXMgbGlicmFyeSBpcyBtYWludGFpbmVkIGJ5IHRoZSBtYWludGFpbmVycyBvZiBUd2lua2xlLlxuICogRm9yIHF1ZXJpZXMsIHN1Z2dlc3Rpb25zLCBoZWxwLCBldGMuLCBoZWFkIHRvIFtIZWxwOlR3aW5rbGVdKGh0dHBzOi8vd3d3LnFpdXdlbmJhaWtlLmNuL3dpa2kvSDpUVykuXG4gKiBUaGUgbGF0ZXN0IGRldmVsb3BtZW50IHNvdXJjZSBpcyBhdmFpbGFibGUgYXQge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS93aWtpbWVkaWEtZ2FkZ2V0cy90d2lua2xlL2Jsb2IvbWFzdGVyL21vcmViaXRzLmpzfEdpdEh1Yn0uXG4gKlxuICogQHBhcmFtIHtKUXVlcnl9ICRcbiAqIEBuYW1lc3BhY2UgTW9yZWJpdHNcbiAqL1xuKGZ1bmN0aW9uIG1vcmViaXRzKCQpIHtcblx0Ly8gV3JhcCBlbnRpcmUgZmlsZSB3aXRoIGFub255bW91cyBmdW5jdGlvblxuXHQvKiogQGxlbmRzIE1vcmViaXRzICovXG5cdGNvbnN0IE1vcmViaXRzID0ge307XG5cdHdpbmRvdy5Nb3JlYml0cyA9IE1vcmViaXRzOyAvLyBhbGxvdyBnbG9iYWwgYWNjZXNzXG5cdC8vIE5vIE1vcmViaXRzLmkxOG4gYXQgdGhpcyB0aW1lXG5cdC8qKlxuXHQgKiBXaWtpLXNwZWNpZmljIGNvbmZpZ3VyYXRpb25zIGZvciBNb3JlYml0c1xuXHQgKi9cblx0TW9yZWJpdHMubDEwbiA9IHtcblx0XHQvKipcblx0XHQgKiBMb2NhbCBhbGlhc2VzIGZvciBcInJlZGlyZWN0XCIgbWFnaWMgd29yZC5cblx0XHQgKiBDaGVjayB1c2luZyBhcGkucGhwP2FjdGlvbj1xdWVyeSZmb3JtYXQ9anNvbiZtZXRhPXNpdGVpbmZvJmZvcm1hdHZlcnNpb249MiZzaXByb3A9bWFnaWN3b3Jkc1xuXHRcdCAqL1xuXHRcdHJlZGlyZWN0VGFnQWxpYXNlczogWycjUkVESVJFQ1QnLCAnI+mHjeWumuWQkSddLFxuXHRcdC8qKlxuXHRcdCAqIFRha2VzIGEgc3RyaW5nIGFzIGFyZ3VtZW50IGFuZCBjaGVja3MgaWYgaXQgaXMgYSB0aW1lc3RhbXAgb3Igbm90XG5cdFx0ICogSWYgbm90LCBpdCByZXR1cm5zIG51bGwuIElmIHllcywgaXQgcmV0dXJucyBhbiBhcnJheSBvZiBpbnRlZ2Vyc1xuXHRcdCAqIGluIHRoZSBmb3JtYXQgW3llYXIsIG1vbnRoLCBkYXRlLCBob3VyLCBtaW51dGUsIHNlY29uZF1cblx0XHQgKiB3aGljaCBjYW4gYmUgcGFzc2VkIHRvIERhdGUuVVRDKClcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcblx0XHQgKiBAcmV0dXJucyB7bnVtYmVyW10gfCBudWxsfVxuXHRcdCAqL1xuXHRcdHNpZ25hdHVyZVRpbWVzdGFtcEZvcm1hdDogKHN0cikgPT4ge1xuXHRcdFx0Y29uc3Qgcmd4VVRDID0gLyhcXGR7NH0p5bm0KFxcZHsxLDJ9KeaciChcXGR7MSwyfSnml6UgXFwoLlxcKSAoXFxkezJ9KTooXFxkezJ9KSBcXChVVENcXCkvOyAvLyBZWVlZ5bm0TW9udGjmnIhEROaXpSAodykgSEg6bW0gKFVUQylcblx0XHRcdGNvbnN0IHJneENTVCA9IC8oXFxkezR9KeW5tChcXGR7MSwyfSnmnIgoXFxkezEsMn0p5pelIFxcKC5cXCkgKFxcZHsyfSk6KFxcZHsyfSkgXFwoQ1NUXFwpLzsgLy8gWVlZWeW5tE1vbnRo5pyIRETml6UgKHcpIEhIOm1tIChDU1QpXG5cdFx0XHRjb25zdCBtYXRjaCA9IHJneFVUQy5leGVjKHN0cikgfHwgcmd4Q1NULmV4ZWMoc3RyKTtcblx0XHRcdGNvbnN0IG1hdGNoQ1NUID0gcmd4Q1NULmV4ZWMoc3RyKTtcblx0XHRcdGlmICghbWF0Y2gpIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBtb250aCA9IE1vcmViaXRzLmRhdGUubG9jYWxlRGF0YS5tb250aHMuaW5kZXhPZihtYXRjaFs0XSk7XG5cdFx0XHRpZiAobW9udGggPT09IC0xKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdFx0Ly8gLi4uLi4geWVhciAuLi4uIG1vbnRoIC4uLiBkYXRlIC4uLi4gaG91ciAuLi4gbWludXRlXG5cdFx0XHRyZXR1cm4gbWF0Y2hDU1Rcblx0XHRcdFx0PyBbbWF0Y2hbMV0sIG1hdGNoWzJdIC0gMSwgbWF0Y2hbM10sIG1hdGNoWzRdIC0gOCwgbWF0Y2hbNV1dXG5cdFx0XHRcdDogW21hdGNoWzFdLCBtYXRjaFsyXSAtIDEsIG1hdGNoWzNdLCBtYXRjaFs0XSwgbWF0Y2hbNV1dO1xuXHRcdH0sXG5cdH07XG5cdC8qKlxuXHQgKiBTaW1wbGUgaGVscGVyIGZ1bmN0aW9uIHRvIHNlZSB3aGF0IGdyb3VwcyBhIHVzZXIgbWlnaHQgYmVsb25nLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZ3JvdXAgLSBlLmcuIGBzeXNvcGAsIGBhdXRvY29uZmlybWVkYCwgZXRjLlxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdE1vcmViaXRzLnVzZXJJc0luR3JvdXAgPSAoZ3JvdXApID0+IHtcblx0XHRyZXR1cm4gbXcuY29uZmlnLmdldCgnd2dVc2VyR3JvdXBzJykuaW5jbHVkZXMoZ3JvdXApO1xuXHR9O1xuXHQvKipcblx0ICogSGFyZGNvZGVzIHdoZXRoZXIgdGhlIHVzZXIgaXMgYSBzeXNvcCwgdXNlZCBhIGxvdC5cblx0ICpcblx0ICogQHR5cGUge2Jvb2xlYW59XG5cdCAqL1xuXHRNb3JlYml0cy51c2VySXNTeXNvcCA9XG5cdFx0TW9yZWJpdHMudXNlcklzSW5Hcm91cCgnc3lzb3AnKSB8fCBNb3JlYml0cy51c2VySXNJbkdyb3VwKCdzdGV3YXJkJykgfHwgTW9yZWJpdHMudXNlcklzSW5Hcm91cCgncWl1d2VuJyk7XG5cdC8qKlxuXHQgKiBEZXByZWNhdGVkIGFzIG9mIEZlYnJ1YXJ5IDIwMjEsIHVzZSB7QGxpbmsgTW9yZWJpdHMuaXAuc2FuaXRpemVJUHY2fS5cblx0ICpcblx0ICogQGRlcHJlY2F0ZWQgVXNlIHtAbGluayBNb3JlYml0cy5pcC5zYW5pdGl6ZUlQdjZ9LlxuXHQgKiBDb252ZXJ0cyBhbiBJUHY2IGFkZHJlc3MgdG8gdGhlIGNhbm9uaWNhbCBmb3JtIHN0b3JlZCBhbmQgdXNlZCBieSBNZWRpYVdpa2kuXG5cdCAqIEphdmFTY3JpcHQgdHJhbnNsYXRpb24gb2YgdGhlIHtAbGluayBodHRwczovL2dlcnJpdC53aWtpbWVkaWEub3JnL3IvcGx1Z2lucy9naXRpbGVzL21lZGlhd2lraS9jb3JlLysvOGViNmFjM2U4NGVhMzMxMmQzOTFjYTk2YzEyYzQ5ZTNhZDA3NTNiYi9pbmNsdWRlcy91dGlscy9JUC5waHAjMTMxfGBJUDo6c2FuaXRpemVJUCgpYH1cblx0ICogZnVuY3Rpb24gZnJvbSB0aGUgSVBVdGlscyBsaWJyYXJ5LiAgQWRkcmVzc2VzIGFyZSB2ZXJib3NlLCB1cHBlcmNhc2UsXG5cdCAqIG5vcm1hbGl6ZWQsIGFuZCBleHBhbmRlZCB0byA4IHdvcmRzLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gYWRkcmVzcyAtIFRoZSBJUHY2IGFkZHJlc3MsIHdpdGggb3Igd2l0aG91dCBDSURSLlxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHQgKi9cblx0TW9yZWJpdHMuc2FuaXRpemVJUHY2ID0gKGFkZHJlc3MpID0+IHtcblx0XHRjb25zb2xlLndhcm4oXG5cdFx0XHQnTk9URTogTW9yZWJpdHMuc2FuaXRpemVJUHY2IHdhcyByZW5hbWVkIHRvIE1vcmViaXRzLmlwLnNhbml0aXplSVB2NiBpbiBGZWJydWFyeSAyMDIxLCBwbGVhc2UgdXNlIHRoYXQgaW5zdGVhZCdcblx0XHQpO1xuXHRcdHJldHVybiBNb3JlYml0cy5pcC5zYW5pdGl6ZUlQdjYoYWRkcmVzcyk7XG5cdH07XG5cdC8qKlxuXHQgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGN1cnJlbnQgcGFnZSBpcyBhIHJlZGlyZWN0IG9yIHNvZnQgcmVkaXJlY3QuIEZhaWxzXG5cdCAqIHRvIGRldGVjdCBzb2Z0IHJlZGlyZWN0cyBvbiBlZGl0LCBoaXN0b3J5LCBldGMuIHBhZ2VzLiAgV2lsbCBhdHRlbXB0IHRvXG5cdCAqIGRldGVjdCBNb2R1bGU6UmZELCB3aXRoIHRoZSBzYW1lIGZhaWx1cmUgcG9pbnRzLlxuXHQgKlxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdE1vcmViaXRzLmlzUGFnZVJlZGlyZWN0ID0gKCkgPT4ge1xuXHRcdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRcdHJldHVybiAhIShcblx0XHRcdG13LmNvbmZpZy5nZXQoJ3dnSXNSZWRpcmVjdCcpIHx8XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc29mdHJlZGlyZWN0JykgfHxcblx0XHRcdCRib2R5LmZpbmQoJy5ib3gtUmZEJykubGVuZ3RoIHx8XG5cdFx0XHQkYm9keS5maW5kKCcuYm94LVJlZGlyZWN0X2NhdGVnb3J5X3NoZWxsJykubGVuZ3RoXG5cdFx0KTtcblx0fTtcblx0LyoqXG5cdCAqIFN0b3JlcyBhIG5vcm1hbGl6ZWQgKHVuZGVyc2NvcmVzIGNvbnZlcnRlZCB0byBzcGFjZXMpIHZlcnNpb24gb2YgdGhlXG5cdCAqIGB3Z1BhZ2VOYW1lYCB2YXJpYWJsZS5cblx0ICpcblx0ICogQHR5cGUge3N0cmluZ31cblx0ICovXG5cdE1vcmViaXRzLnBhZ2VOYW1lTm9ybSA9IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKS5yZXBsYWNlKC9fL2csICcgJyk7XG5cdC8qKlxuXHQgKiBDcmVhdGUgYSBzdHJpbmcgZm9yIHVzZSBpbiByZWdleCBtYXRjaGluZyBhIHBhZ2UgbmFtZS4gIEFjY291bnRzIGZvclxuXHQgKiBsZWFkaW5nIGNoYXJhY3RlcidzIGNhcGl0YWxpemF0aW9uLCB1bmRlcnNjb3JlcyBhcyBzcGFjZXMsIGFuZCBzcGVjaWFsXG5cdCAqIGNoYXJhY3RlcnMgYmVpbmcgZXNjYXBlZC4gIFNlZSBhbHNvIHtAbGluayBNb3JlYml0cy5uYW1lc3BhY2VSZWdleH0uXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBwYWdlTmFtZSAtIFBhZ2UgbmFtZSB3aXRob3V0IG5hbWVzcGFjZS5cblx0ICogQHJldHVybnMge3N0cmluZ30gLSBGb3IgYSBwYWdlIG5hbWUgYEZvbyBiYXJgLCByZXR1cm5zIHRoZSBzdHJpbmcgYFtGZl1vb1tfIF1iYXJgLlxuXHQgKi9cblx0TW9yZWJpdHMucGFnZU5hbWVSZWdleCA9IChwYWdlTmFtZSkgPT4ge1xuXHRcdGlmIChwYWdlTmFtZSA9PT0gJycpIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cdFx0Y29uc3QgW2ZpcnN0Q2hhcl0gPSBwYWdlTmFtZTtcblx0XHRjb25zdCByZW1haW5kZXIgPSBNb3JlYml0cy5zdHJpbmcuZXNjYXBlUmVnRXhwKHBhZ2VOYW1lLnNsaWNlKDEpKTtcblx0XHRpZiAobXcuVGl0bGUucGhwQ2hhclRvVXBwZXIoZmlyc3RDaGFyKSAhPT0gZmlyc3RDaGFyLnRvTG93ZXJDYXNlKCkpIHtcblx0XHRcdHJldHVybiBgWyR7bXcuVGl0bGUucGhwQ2hhclRvVXBwZXIoZmlyc3RDaGFyKX0ke2ZpcnN0Q2hhci50b0xvd2VyQ2FzZSgpfV0ke3JlbWFpbmRlcn1gO1xuXHRcdH1cblx0XHRyZXR1cm4gTW9yZWJpdHMuc3RyaW5nLmVzY2FwZVJlZ0V4cChmaXJzdENoYXIpICsgcmVtYWluZGVyO1xuXHR9O1xuXHQvKipcblx0ICogQ29udmVydHMgc3RyaW5nIG9yIGFycmF5IG9mIERPTSBub2RlcyBpbnRvIGFuIEhUTUwgZnJhZ21lbnQuXG5cdCAqIFdpa2lsaW5rIHN5bnRheCAoYFtbLi4uXV1gKSBpcyB0cmFuc2Zvcm1lZCBpbnRvIEhUTUwgYW5jaG9yLlxuXHQgKiBVc2VkIGluIE1vcmViaXRzLnF1aWNrRm9ybSBhbmQgTW9yZWJpdHMuc3RhdHVzXG5cdCAqXG5cdCAqIEBpbnRlcm5hbFxuXHQgKiBAcGFyYW0ge3N0cmluZ3xOb2RlfChzdHJpbmd8Tm9kZSlbXX0gaW5wdXRcblx0ICogQHJldHVybnMge0RvY3VtZW50RnJhZ21lbnR9XG5cdCAqL1xuXHRNb3JlYml0cy5jcmVhdGVIdG1sID0gKGlucHV0KSA9PiB7XG5cdFx0Y29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cdFx0aWYgKCFpbnB1dCkge1xuXHRcdFx0cmV0dXJuIGZyYWdtZW50O1xuXHRcdH1cblx0XHRpZiAoIUFycmF5LmlzQXJyYXkoaW5wdXQpKSB7XG5cdFx0XHRpbnB1dCA9IFtpbnB1dF07XG5cdFx0fVxuXHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiBpbnB1dCkge1xuXHRcdFx0aWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlKSB7XG5cdFx0XHRcdGZyYWdtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Zm9yIChjb25zdCBub2RlIG9mICQucGFyc2VIVE1MKE1vcmViaXRzLmNyZWF0ZUh0bWwucmVuZGVyV2lraWxpbmtzKGVsZW1lbnQpKSkge1xuXHRcdFx0XHRcdGZyYWdtZW50LmFwcGVuZENoaWxkKG5vZGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBmcmFnbWVudDtcblx0fTtcblx0LyoqXG5cdCAqIENvbnZlcnRzIHdpa2lsaW5rcyB0byBIVE1MIGFuY2hvciB0YWdzLlxuXHQgKlxuXHQgKiBAcGFyYW0gdGV4dFxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdE1vcmViaXRzLmNyZWF0ZUh0bWwucmVuZGVyV2lraWxpbmtzID0gKHRleHQpID0+IHtcblx0XHRjb25zdCB1YiA9IG5ldyBNb3JlYml0cy51bmJpbmRlcih0ZXh0KTtcblx0XHQvLyBEb24ndCBjb252ZXJ0IHdpa2lsaW5rcyB3aXRoaW4gY29kZSB0YWdzIGFzIHRoZXkncmUgdXNlZCBmb3IgZGlzcGxheWluZyB3aWtpLWNvZGVcblx0XHR1Yi51bmJpbmQoJzxjb2RlPicsICc8L2NvZGU+Jyk7XG5cdFx0dWIuY29udGVudCA9IHViLmNvbnRlbnQucmVwbGFjZSgvXFxbXFxbOj8oPzooW158XFxdXSs/KVxcfCk/KFteXFxdfF0rPylcXF1cXF0vZywgKF8sIHRhcmdldCwgdGV4dF8pID0+IHtcblx0XHRcdGlmICghdGFyZ2V0KSB7XG5cdFx0XHRcdHRhcmdldCA9IHRleHRfO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGA8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIke213LnV0aWwuZ2V0VXJsKHRhcmdldCl9XCIgdGl0bGU9XCIke3RhcmdldC5yZXBsYWNlKFxuXHRcdFx0XHQvXCIvZyxcblx0XHRcdFx0JyYjMzQ7J1xuXHRcdFx0KX1cIj4ke3RleHRffTwvYT5gO1xuXHRcdH0pO1xuXHRcdHJldHVybiB1Yi5yZWJpbmQoKTtcblx0fTtcblx0LyoqXG5cdCAqIENyZWF0ZSBhIHN0cmluZyBmb3IgdXNlIGluIHJlZ2V4IG1hdGNoaW5nIGFsbCBuYW1lc3BhY2UgYWxpYXNlcywgcmVnYXJkbGVzc1xuXHQgKiBvZiB0aGUgY2FwaXRhbGl6YXRpb24gYW5kIHVuZGVyc2NvcmVzL3NwYWNlcy4gIERvZXNuJ3QgaW5jbHVkZSB0aGUgb3B0aW9uYWxcblx0ICogbGVhZGluZyBgOmAsIGJ1dCBpZiB0aGVyZSdzIG1vcmUgdGhhbiBvbmUgaXRlbSwgd3JhcHMgdGhlIGxpc3QgaW4gYVxuXHQgKiBub24tY2FwdHVyaW5nIGdyb3VwLiAgVGhpcyBtZWFucyB5b3UgY2FuIGRvIGBNb3JlYml0cy5uYW1lc3BhY2VSZWdleChbNF0pICtcblx0ICogJzonICsgTW9yZWJpdHMucGFnZU5hbWVSZWdleCgnVHdpbmtsZScpYCB0byBtYXRjaCBhIGZ1bGwgcGFnZS4gIFVzZXNcblx0ICoge0BsaW5rIE1vcmViaXRzLnBhZ2VOYW1lUmVnZXh9LlxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcltdfSBuYW1lc3BhY2VzIC0gQXJyYXkgb2YgbmFtZXNwYWNlIG51bWJlcnMuICBVbnVzZWQvaW52YWxpZFxuXHQgKiBuYW1lc3BhY2UgbnVtYmVycyBhcmUgc2lsZW50bHkgZGlzY2FyZGVkLlxuXHQgKiBAZXhhbXBsZVxuXHQgKiAvLyByZXR1cm5zICcoPzpbRmZdW0lpXVtMbF1bRWVdfFtJaV1bTW1dW0FhXVtHZ11bRWVdKSdcblx0ICogTW9yZWJpdHMubmFtZXNwYWNlUmVnZXgoWzZdKVxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfSAtIFJlZ2V4LXN1aXRhYmxlIHN0cmluZyBvZiBhbGwgbmFtZXNwYWNlIGFsaWFzZXMuXG5cdCAqL1xuXHRNb3JlYml0cy5uYW1lc3BhY2VSZWdleCA9IChuYW1lc3BhY2VzKSA9PiB7XG5cdFx0aWYgKCFBcnJheS5pc0FycmF5KG5hbWVzcGFjZXMpKSB7XG5cdFx0XHRuYW1lc3BhY2VzID0gW25hbWVzcGFjZXNdO1xuXHRcdH1cblx0XHRjb25zdCBhbGlhc2VzID0gW107XG5cdFx0bGV0IHJlZ2V4O1xuXHRcdGZvciAoY29uc3QgW25hbWUsIG51bWJlcl0gb2YgT2JqZWN0LmVudHJpZXMobXcuY29uZmlnLmdldCgnd2dOYW1lc3BhY2VJZHMnKSkpIHtcblx0XHRcdGlmIChuYW1lc3BhY2VzLmluY2x1ZGVzKG51bWJlcikpIHtcblx0XHRcdFx0Ly8gTmFtZXNwYWNlcyBhcmUgY29tcGxldGVseSBhZ25vc3RpYyBhcyB0byBjYXNlLFxuXHRcdFx0XHQvLyBhbmQgYSByZWdleCBzdHJpbmcgaXMgbW9yZSB1c2VmdWwvY29tcGF0aWJsZSB0aGFuIGEgUmVnRXhwIG9iamVjdCxcblx0XHRcdFx0Ly8gc28gd2UgYWNjZXB0IGFueSBjYXNpbmcgZm9yIGFueSBsZXR0ZXIuXG5cdFx0XHRcdGFsaWFzZXMucHVzaChcblx0XHRcdFx0XHRbLi4ubmFtZV1cblx0XHRcdFx0XHRcdC5tYXAoKGNoYXIpID0+IHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIE1vcmViaXRzLnBhZ2VOYW1lUmVnZXgoY2hhcik7XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0LmpvaW4oJycpXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHN3aXRjaCAoYWxpYXNlcy5sZW5ndGgpIHtcblx0XHRcdGNhc2UgMDpcblx0XHRcdFx0cmVnZXggPSAnJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFtyZWdleF0gPSBhbGlhc2VzO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJlZ2V4ID0gYCg/OiR7YWxpYXNlcy5qb2luKCd8Jyl9KWA7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVnZXg7XG5cdH07XG5cdC8qICoqKioqKioqKioqKioqKiogTW9yZWJpdHMucXVpY2tGb3JtICoqKioqKioqKioqKioqKiogKi9cblx0LyoqXG5cdCAqIENyZWF0aW9uIG9mIHNpbXBsZSBhbmQgc3RhbmRhcmQgZm9ybXMgd2l0aG91dCBtdWNoIHNwZWNpZmljIGNvZGluZy5cblx0ICpcblx0ICogQG5hbWVzcGFjZSBNb3JlYml0cy5xdWlja0Zvcm1cblx0ICogQG1lbWJlcm9mIE1vcmViaXRzXG5cdCAqIEBjbGFzc1xuXHQgKiBAcGFyYW0ge2V2ZW50fSBldmVudCAtIEZ1bmN0aW9uIHRvIGV4ZWN1dGUgd2hlbiBmb3JtIGlzIHN1Ym1pdHRlZC5cblx0ICogQHBhcmFtIHtzdHJpbmd9IFtldmVudFR5cGU9c3VibWl0XSAtIFR5cGUgb2YgdGhlIGV2ZW50LlxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtID0gZnVuY3Rpb24gKGV2ZW50LCBldmVudFR5cGUpIHtcblx0XHR0aGlzLnJvb3QgPSBuZXcgTW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQoe1xuXHRcdFx0dHlwZTogJ2Zvcm0nLFxuXHRcdFx0ZXZlbnQsXG5cdFx0XHRldmVudFR5cGUsXG5cdFx0fSk7XG5cdH07XG5cdC8qKlxuXHQgKiBSZW5kZXJzIHRoZSBIVE1MIG91dHB1dCBvZiB0aGUgcXVpY2tGb3JtLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtXG5cdCAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IHJldCA9IHRoaXMucm9vdC5yZW5kZXIoKTtcblx0XHRyZXQubmFtZXMgPSB7fTtcblx0XHRyZXR1cm4gcmV0O1xuXHR9O1xuXHQvKipcblx0ICogQXBwZW5kIGVsZW1lbnQgdG8gdGhlIGZvcm0uXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5xdWlja0Zvcm1cblx0ICogQHBhcmFtIHsob2JqZWN0fE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50KX0gZGF0YSAtIEEgcXVpY2tmb3JtIGVsZW1lbnQsIG9yIHRoZSBvYmplY3Qgd2l0aCB3aGljaFxuXHQgKiBhIHF1aWNrZm9ybSBlbGVtZW50IGlzIGNvbnN0cnVjdGVkLlxuXHQgKiBAcmV0dXJucyB7TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnR9IC0gU2FtZSBhcyB3aGF0IGlzIHBhc3NlZCB0byB0aGUgZnVuY3Rpb24uXG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0ucHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uIChkYXRhKSB7XG5cdFx0cmV0dXJuIHRoaXMucm9vdC5hcHBlbmQoZGF0YSk7XG5cdH07XG5cdC8qKlxuXHQgKiBDcmVhdGUgYSBuZXcgZWxlbWVudCBmb3IgdGhlIHRoZSBmb3JtLlxuXHQgKlxuXHQgKiBJbmRleCB0byBNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudCB0eXBlczpcblx0ICogLSBHbG9iYWwgYXR0cmlidXRlczogaWQsIGNsYXNzTmFtZSwgc3R5bGUsIHRvb2x0aXAsIGV4dHJhLCAkZGF0YSwgYWRtaW5vbmx5XG5cdCAqIC0gYHNlbGVjdGA6IEEgY29tYm8gYm94IChha2EgZHJvcC1kb3duKS5cblx0ICogICAgIC0gQXR0cmlidXRlczogbmFtZSwgbGFiZWwsIG11bHRpcGxlLCBzaXplLCBsaXN0LCBldmVudCwgZGlzYWJsZWRcblx0ICogIC0gYG9wdGlvbmA6IEFuIGVsZW1lbnQgZm9yIGEgY29tYm8gYm94LlxuXHQgKiAgICAgIC0gQXR0cmlidXRlczogdmFsdWUsIGxhYmVsLCBzZWxlY3RlZCwgZGlzYWJsZWRcblx0ICogIC0gYG9wdGdyb3VwYDogQSBncm91cCBvZiBcIm9wdGlvblwicy5cblx0ICogICAgICAtIEF0dHJpYnV0ZXM6IGxhYmVsLCBsaXN0XG5cdCAqICAtIGBmaWVsZGA6IEEgZmllbGRzZXQgKGFrYSBncm91cCBib3gpLlxuXHQgKiAgICAgIC0gQXR0cmlidXRlczogbmFtZSwgbGFiZWwsIGRpc2FibGVkXG5cdCAqICAtIGBjaGVja2JveGA6IEEgY2hlY2tib3guIE11c3QgdXNlIFwibGlzdFwiIHBhcmFtZXRlci5cblx0ICogICAgICAtIEF0dHJpYnV0ZXM6IG5hbWUsIGxpc3QsIGV2ZW50XG5cdCAqICAgICAgLSBBdHRyaWJ1dGVzICh3aXRoaW4gbGlzdCk6IG5hbWUsIGxhYmVsLCB2YWx1ZSwgY2hlY2tlZCwgZGlzYWJsZWQsIGV2ZW50LCBzdWJncm91cFxuXHQgKiAgLSBgcmFkaW9gOiBBIHJhZGlvIGJ1dHRvbi4gTXVzdCB1c2UgXCJsaXN0XCIgcGFyYW1ldGVyLlxuXHQgKiAgICAgIC0gQXR0cmlidXRlczogbmFtZSwgbGlzdCwgZXZlbnRcblx0ICogICAgICAtIEF0dHJpYnV0ZXMgKHdpdGhpbiBsaXN0KTogbmFtZSwgbGFiZWwsIHZhbHVlLCBjaGVja2VkLCBkaXNhYmxlZCwgZXZlbnQsIHN1Ymdyb3VwXG5cdCAqICAtIGBpbnB1dGA6IEEgdGV4dCBpbnB1dCBib3guXG5cdCAqICAgICAgLSBBdHRyaWJ1dGVzOiBuYW1lLCBsYWJlbCwgdmFsdWUsIHNpemUsIHBsYWNlaG9sZGVyLCBtYXhsZW5ndGgsIGRpc2FibGVkLCByZXF1aXJlZCwgcmVhZG9ubHksIGV2ZW50XG5cdCAqICAtIGBudW1iZXJgOiBBIG51bWJlciBpbnB1dCBib3guXG5cdCAqICAgICAgLSBBdHRyaWJ1dGVzOiBFdmVyeXRoaW5nIHRoZSB0ZXh0IGBpbnB1dGAgaGFzLCBhcyB3ZWxsIGFzOiBtaW4sIG1heCwgc3RlcCwgbGlzdFxuXHQgKiAgLSBgZHluaW5wdXRgOiBBIHNldCBvZiB0ZXh0IGJveGVzIHdpdGggXCJSZW1vdmVcIiBidXR0b25zIGFuZCBhbiBcIkFkZFwiIGJ1dHRvbi5cblx0ICogICAgICAtIEF0dHJpYnV0ZXM6IG5hbWUsIGxhYmVsLCBtaW4sIG1heCwgc3VibGFiZWwsIHZhbHVlLCBzaXplLCBtYXhsZW5ndGgsIGV2ZW50XG5cdCAqICAtIGBoaWRkZW5gOiBBbiBpbnZpc2libGUgZm9ybSBmaWVsZC5cblx0ICogICAgICAtIEF0dHJpYnV0ZXM6IG5hbWUsIHZhbHVlXG5cdCAqICAtIGBoZWFkZXJgOiBBIGxldmVsIDUgaGVhZGVyLlxuXHQgKiAgICAgIC0gQXR0cmlidXRlczogbGFiZWxcblx0ICogIC0gYGRpdmA6IEEgZ2VuZXJpYyBwbGFjZWhvbGRlciBlbGVtZW50IG9yIGxhYmVsLlxuXHQgKiAgICAgIC0gQXR0cmlidXRlczogbmFtZSwgbGFiZWxcblx0ICogIC0gYHN1Ym1pdGA6IEEgc3VibWl0IGJ1dHRvbi4gTW9yZWJpdHMuc2ltcGxlV2luZG93IG1vdmVzIHRoZXNlIHRvIHRoZSBmb290ZXIgb2YgdGhlIGRpYWxvZy5cblx0ICogICAgICAtIEF0dHJpYnV0ZXM6IG5hbWUsIGxhYmVsLCBkaXNhYmxlZFxuXHQgKiAgLSBgYnV0dG9uYDogQSBnZW5lcmljIGJ1dHRvbi5cblx0ICogICAgICAtIEF0dHJpYnV0ZXM6IG5hbWUsIGxhYmVsLCBkaXNhYmxlZCwgZXZlbnRcblx0ICogIC0gYHRleHRhcmVhYDogQSBiaWcsIG11bHRpLWxpbmUgdGV4dCBib3guXG5cdCAqICAgICAgLSBBdHRyaWJ1dGVzOiBuYW1lLCBsYWJlbCwgdmFsdWUsIGNvbHMsIHJvd3MsIGRpc2FibGVkLCByZXF1aXJlZCwgcmVhZG9ubHlcblx0ICogIC0gYGZyYWdtZW50YDogQSBEb2N1bWVudEZyYWdtZW50IG9iamVjdC5cblx0ICogICAgICAtIE5vIGF0dHJpYnV0ZXMsIGFuZCBubyBnbG9iYWwgYXR0cmlidXRlcyBleGNlcHQgYWRtaW5vbmx5LlxuXHQgKiBUaGVyZSBpcyBzb21lIGRpZmZlcmVuY2Ugb24gaG93IHR5cGVzIGhhbmRsZSB0aGUgYGxhYmVsYCBhdHRyaWJ1dGU6XG5cdCAqIC0gYGRpdmAsIGBzZWxlY3RgLCBgZmllbGRgLCBgY2hlY2tib3hgL2ByYWRpb2AsIGBpbnB1dGAsIGB0ZXh0YXJlYWAsIGBoZWFkZXJgLCBhbmQgYGR5bmlucHV0YCBjYW4gYWNjZXB0IGFuIGFycmF5IG9mIGl0ZW1zLFxuXHQgKiBhbmQgdGhlIGxhYmVsIGl0ZW0ocykgY2FuIGJlIGBFbGVtZW50YHMuXG5cdCAqIC0gYG9wdGlvbmAsIGBvcHRncm91cGAsIGBfZHluaW5wdXRfZWxlbWVudGAsIGBzdWJtaXRgLCBhbmQgYGJ1dHRvbmAgYWNjZXB0IG9ubHkgYSBzaW5nbGUgc3RyaW5nLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtXG5cdCAqIEBjbGFzc1xuXHQgKiBAcGFyYW0ge09iamVjdH0gZGF0YSAtIE9iamVjdCByZXByZXNlbnRpbmcgdGhlIHF1aWNrZm9ybSBlbGVtZW50LiBTaG91bGRcblx0ICogc3BlY2lmeSBvbmUgb2YgdGhlIGF2YWlsYWJsZSB0eXBlcyBmcm9tIHRoZSBpbmRleCBhYm92ZSwgYXMgd2VsbCBhcyBhbnlcblx0ICogcmVsZXZhbnQgYW5kIGF2YWlsYWJsZSBhdHRyaWJ1dGVzLlxuXHQgKiBAZXhhbXBsZSBuZXcgTW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQoe1xuXHQgKiAgICAgbmFtZTogJ3RhcmdldCcsXG5cdCAqICAgICB0eXBlOiAnaW5wdXQnLFxuXHQgKiAgICAgbGFiZWw6ICdZb3VyIHRhcmdldDonLFxuXHQgKiAgICAgdG9vbHRpcDogJ0VudGVyIHlvdXIgdGFyZ2V0LiBSZXF1aXJlZC4nLFxuXHQgKiAgICAgcmVxdWlyZWQ6IHRydWVcblx0ICogfSk7XG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudCA9IGZ1bmN0aW9uIChkYXRhKSB7XG5cdFx0dGhpcy5kYXRhID0gZGF0YTtcblx0XHR0aGlzLmNoaWxkcyA9IFtdO1xuXHR9O1xuXHQvKipcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50XG5cdCAqIEB0eXBlIHtudW1iZXJ9XG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudC5pZCA9IDA7XG5cdC8qKlxuXHQgKiBBcHBlbmRzIGFuIGVsZW1lbnQgdG8gY3VycmVudCBlbGVtZW50LlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnRcblx0ICogQHBhcmFtIHtNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudH0gZGF0YSAtIEEgcXVpY2tGb3JtIGVsZW1lbnQgb3IgdGhlIG9iamVjdCByZXF1aXJlZCB0b1xuXHQgKiBjcmVhdGUgdGhlIHF1aWNrRm9ybSBlbGVtZW50LlxuXHQgKiBAcmV0dXJucyB7TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnR9IFRoZSBzYW1lIGVsZW1lbnQgcGFzc2VkIGluLlxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQucHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uIChkYXRhKSB7XG5cdFx0bGV0IGNoaWxkO1xuXHRcdGlmIChkYXRhIGluc3RhbmNlb2YgTW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQpIHtcblx0XHRcdGNoaWxkID0gZGF0YTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2hpbGQgPSBuZXcgTW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQoZGF0YSk7XG5cdFx0fVxuXHRcdHRoaXMuY2hpbGRzLnB1c2goY2hpbGQpO1xuXHRcdHJldHVybiBjaGlsZDtcblx0fTtcblx0LyoqXG5cdCAqIFJlbmRlcnMgdGhlIEhUTUwgb3V0cHV0IGZvciB0aGUgcXVpY2tGb3JtIGVsZW1lbnQuICBUaGlzIHNob3VsZCBiZSBjYWxsZWRcblx0ICogd2l0aG91dCBwYXJhbWV0ZXJzOiBgZm9ybS5yZW5kZXIoKWAuXG5cdCAqXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBpbnRlcm5hbFN1Ymdyb3VwSWRcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50XG5cdCAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoaW50ZXJuYWxTdWJncm91cElkKSB7XG5cdFx0Y29uc3QgY3VycmVudE5vZGUgPSB0aGlzLmNvbXB1dGUodGhpcy5kYXRhLCBpbnRlcm5hbFN1Ymdyb3VwSWQpO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jaGlsZHMubGVuZ3RoOyArK2kpIHtcblx0XHRcdC8vIGRvIG5vdCBwYXNzIGludGVybmFsX3N1Ymdyb3VwX2lkIHRvIHJlY3Vyc2l2ZSBjYWxsc1xuXHRcdFx0Y3VycmVudE5vZGVbMV0uYXBwZW5kQ2hpbGQodGhpcy5jaGlsZHNbaV0ucmVuZGVyKCkpO1xuXHRcdH1cblx0XHRyZXR1cm4gY3VycmVudE5vZGVbMF07XG5cdH07XG5cdC8qKlxuXHQgKiBAcGFyYW0geyp9IGRhdGFcblx0ICogQHBhcmFtIHtudW1iZXJ9IGluSWRcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50XG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudC5wcm90b3R5cGUuY29tcHV0ZSA9IGZ1bmN0aW9uIChkYXRhLCBpbklkKSB7XG5cdFx0bGV0IG5vZGU7XG5cdFx0bGV0IGNoaWxkQ29udGFpbmVyID0gbnVsbDtcblx0XHRsZXQgbGFiZWw7XG5cdFx0Y29uc3QgaWQgPSBgJHtpbklkID8gYCR7aW5JZH1fYCA6ICcnfW5vZGVfJHtNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudC5pZCsrfWA7XG5cdFx0aWYgKGRhdGEuYWRtaW5vbmx5ICYmICFNb3JlYml0cy51c2VySXNTeXNvcCkge1xuXHRcdFx0Ly8gaGVsbCBoYWNrIGFscGhhXG5cdFx0XHRkYXRhLnR5cGUgPSAnaGlkZGVuJztcblx0XHR9XG5cdFx0bGV0IGk7XG5cdFx0bGV0IGN1cnJlbnQ7XG5cdFx0bGV0IHN1Ym5vZGU7XG5cdFx0c3dpdGNoIChkYXRhLnR5cGUpIHtcblx0XHRcdGNhc2UgJ2Zvcm0nOlxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuXHRcdFx0XHRub2RlLmNsYXNzTmFtZSA9ICdxdWlja2Zvcm0nO1xuXHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2NyaXB0LXVybFxuXHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgnYWN0aW9uJywgJ2phdmFzY3JpcHQ6dm9pZCgwKTsnKTtcblx0XHRcdFx0aWYgKGRhdGEuZXZlbnQpIHtcblx0XHRcdFx0XHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoZGF0YS5ldmVudFR5cGUgfHwgJ3N1Ym1pdCcsIGRhdGEuZXZlbnQsIGZhbHNlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2ZyYWdtZW50Jzpcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblx0XHRcdFx0Ly8gZnJhZ21lbnRzIGNhbid0IGhhdmUgYW55IGF0dHJpYnV0ZXMsIHNvIGp1c3QgcmV0dXJuIGl0IHN0cmFpZ2h0IGF3YXlcblx0XHRcdFx0cmV0dXJuIFtub2RlLCBub2RlXTtcblx0XHRcdGNhc2UgJ3NlbGVjdCc6IHtcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgnaWQnLCBgZGl2XyR7aWR9YCk7XG5cdFx0XHRcdGlmIChkYXRhLmxhYmVsKSB7XG5cdFx0XHRcdFx0bGFiZWwgPSBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJykpO1xuXHRcdFx0XHRcdGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgaWQpO1xuXHRcdFx0XHRcdGxhYmVsLmFwcGVuZENoaWxkKE1vcmViaXRzLmNyZWF0ZUh0bWwoZGF0YS5sYWJlbCkpO1xuXHRcdFx0XHRcdC8vIE5vIG1hcmdpblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3Qgc2VsZWN0ID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKSk7XG5cdFx0XHRcdGlmIChkYXRhLmV2ZW50KSB7XG5cdFx0XHRcdFx0c2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGRhdGEuZXZlbnQsIGZhbHNlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5tdWx0aXBsZSkge1xuXHRcdFx0XHRcdHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ211bHRpcGxlJywgJ211bHRpcGxlJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEuc2l6ZSkge1xuXHRcdFx0XHRcdHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ3NpemUnLCBkYXRhLnNpemUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLmRpc2FibGVkKSB7XG5cdFx0XHRcdFx0c2VsZWN0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzZWxlY3Quc2V0QXR0cmlidXRlKCduYW1lJywgZGF0YS5uYW1lKTtcblx0XHRcdFx0aWYgKGRhdGEubGlzdCkge1xuXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBkYXRhLmxpc3QubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0XHRcdGN1cnJlbnQgPSBkYXRhLmxpc3RbaV07XG5cdFx0XHRcdFx0XHRpZiAoY3VycmVudC5saXN0KSB7XG5cdFx0XHRcdFx0XHRcdGN1cnJlbnQudHlwZSA9ICdvcHRncm91cCc7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRjdXJyZW50LnR5cGUgPSAnb3B0aW9uJztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHN1Ym5vZGUgPSB0aGlzLmNvbXB1dGUoY3VycmVudCk7XG5cdFx0XHRcdFx0XHRzZWxlY3QuYXBwZW5kQ2hpbGQoc3Vibm9kZVswXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGNoaWxkQ29udGFpbmVyID0gc2VsZWN0O1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGNhc2UgJ29wdGlvbic6XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcblx0XHRcdFx0bm9kZS52YWx1ZXMgPSBkYXRhLnZhbHVlO1xuXHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBkYXRhLnZhbHVlKTtcblx0XHRcdFx0aWYgKGRhdGEuc2VsZWN0ZWQpIHtcblx0XHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnc2VsZWN0ZWQnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5kaXNhYmxlZCkge1xuXHRcdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIEFkZCBoaWRkZW4gYXR0clxuXHRcdFx0XHRpZiAoZGF0YS5oaWRkZW4pIHtcblx0XHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgJycpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCdsYWJlbCcsIGRhdGEubGFiZWwpO1xuXHRcdFx0XHRub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGRhdGEubGFiZWwpKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdvcHRncm91cCc6XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRncm91cCcpO1xuXHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgnbGFiZWwnLCBkYXRhLmxhYmVsKTtcblx0XHRcdFx0aWYgKGRhdGEubGlzdCkge1xuXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBkYXRhLmxpc3QubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0XHRcdGN1cnJlbnQgPSBkYXRhLmxpc3RbaV07XG5cdFx0XHRcdFx0XHRjdXJyZW50LnR5cGUgPSAnb3B0aW9uJzsgLy8gbXVzdCBiZSBvcHRpb25zIGhlcmVcblx0XHRcdFx0XHRcdHN1Ym5vZGUgPSB0aGlzLmNvbXB1dGUoY3VycmVudCk7XG5cdFx0XHRcdFx0XHRub2RlLmFwcGVuZENoaWxkKHN1Ym5vZGVbMF0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2ZpZWxkJzpcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0Jyk7XG5cdFx0XHRcdGxhYmVsID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsZWdlbmQnKSk7XG5cdFx0XHRcdGxhYmVsLmFwcGVuZENoaWxkKE1vcmViaXRzLmNyZWF0ZUh0bWwoZGF0YS5sYWJlbCkpO1xuXHRcdFx0XHRpZiAoZGF0YS5uYW1lKSB7XG5cdFx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBkYXRhLm5hbWUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLmRpc2FibGVkKSB7XG5cdFx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdjaGVja2JveCc6XG5cdFx0XHRjYXNlICdyYWRpbyc6XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdFx0aWYgKGRhdGEubGlzdCkge1xuXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBkYXRhLmxpc3QubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0XHRcdGNvbnN0IGN1cklkID0gYCR7aWR9XyR7aX1gO1xuXHRcdFx0XHRcdFx0Y3VycmVudCA9IGRhdGEubGlzdFtpXTtcblx0XHRcdFx0XHRcdGxldCBjdXJEaXY7XG5cdFx0XHRcdFx0XHRpZiAoY3VycmVudC50eXBlID09PSAnaGVhZGVyJykge1xuXHRcdFx0XHRcdFx0XHQvLyBpbmxpbmUgaGFja1xuXHRcdFx0XHRcdFx0XHRjdXJEaXYgPSBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g2JykpO1xuXHRcdFx0XHRcdFx0XHRjdXJEaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3VycmVudC5sYWJlbCkpO1xuXHRcdFx0XHRcdFx0XHRpZiAoY3VycmVudC50b29sdGlwKSB7XG5cdFx0XHRcdFx0XHRcdFx0TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQuZ2VuZXJhdGVUb29sdGlwKGN1ckRpdiwgY3VycmVudCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRjdXJEaXYgPSBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcblx0XHRcdFx0XHRcdC8vIEFkZCBoaWRkZW4gYXR0clxuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnQuaGlkZGVuKSB7XG5cdFx0XHRcdFx0XHRcdGN1ckRpdi5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICcnKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHN1Ym5vZGUgPSBjdXJEaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSk7XG5cdFx0XHRcdFx0XHRzdWJub2RlLnZhbHVlcyA9IGN1cnJlbnQudmFsdWU7XG5cdFx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBjdXJyZW50LnZhbHVlKTtcblx0XHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCd0eXBlJywgZGF0YS50eXBlKTtcblx0XHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCdpZCcsIGN1cklkKTtcblx0XHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCduYW1lJywgY3VycmVudC5uYW1lIHx8IGRhdGEubmFtZSk7XG5cdFx0XHRcdFx0XHQvLyBJZiBuYW1lIGlzIHByb3ZpZGVkIG9uIHRoZSBpbmRpdmlkdWFsIGNoZWNrYm94LCBhZGQgYSBkYXRhLXNpbmdsZVxuXHRcdFx0XHRcdFx0Ly8gYXR0cmlidXRlIHdoaWNoIGluZGljYXRlcyBpdCBpc24ndCBwYXJ0IG9mIGEgbGlzdCBvZiBjaGVja2JveGVzIHdpdGhcblx0XHRcdFx0XHRcdC8vIHNhbWUgbmFtZS4gVXNlZCBpbiBnZXRJbnB1dERhdGEoKVxuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnQubmFtZSkge1xuXHRcdFx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgnZGF0YS1zaW5nbGUnLCAnZGF0YS1zaW5nbGUnKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmIChjdXJyZW50LmNoZWNrZWQpIHtcblx0XHRcdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnQuZGlzYWJsZWQpIHtcblx0XHRcdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRsYWJlbCA9IGN1ckRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpKTtcblx0XHRcdFx0XHRcdGxhYmVsLmFwcGVuZENoaWxkKE1vcmViaXRzLmNyZWF0ZUh0bWwoY3VycmVudC5sYWJlbCkpO1xuXHRcdFx0XHRcdFx0bGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjdXJJZCk7XG5cdFx0XHRcdFx0XHRpZiAoY3VycmVudC50b29sdGlwKSB7XG5cdFx0XHRcdFx0XHRcdE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50LmdlbmVyYXRlVG9vbHRpcChsYWJlbCwgY3VycmVudCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvLyBzdHlsZXMgZ28gb24gdGhlIGxhYmVsLCBkb2Vzbid0IG1ha2Ugc2Vuc2UgdG8gc3R5bGUgYSBjaGVja2JveC9yYWRpb1xuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnQuc3R5bGUpIHtcblx0XHRcdFx0XHRcdFx0bGFiZWwuc2V0QXR0cmlidXRlKCdzdHlsZScsIGN1cnJlbnQuc3R5bGUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0bGV0IGV2ZW50O1xuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnQuc3ViZ3JvdXApIHtcblx0XHRcdFx0XHRcdFx0bGV0IHRtcGdyb3VwID0gY3VycmVudC5zdWJncm91cDtcblx0XHRcdFx0XHRcdFx0aWYgKCFBcnJheS5pc0FycmF5KHRtcGdyb3VwKSkge1xuXHRcdFx0XHRcdFx0XHRcdHRtcGdyb3VwID0gW3RtcGdyb3VwXTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRjb25zdCBzdWJncm91cFJhdyA9IG5ldyBNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudCh7XG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJ2RpdicsXG5cdFx0XHRcdFx0XHRcdFx0aWQ6IGAke2lkfV8ke2l9X3N1Ymdyb3VwYCxcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdGZvciAoY29uc3QgZWwgb2YgdG1wZ3JvdXApIHtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCBuZXdFbCA9IHtcblx0XHRcdFx0XHRcdFx0XHRcdC4uLmVsLFxuXHRcdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdFx0aWYgKCFuZXdFbC50eXBlKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRuZXdFbC50eXBlID0gZGF0YS50eXBlO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRuZXdFbC5uYW1lID0gYCR7Y3VycmVudC5uYW1lIHx8IGRhdGEubmFtZX0uJHtuZXdFbC5uYW1lfWA7XG5cdFx0XHRcdFx0XHRcdFx0c3ViZ3JvdXBSYXcuYXBwZW5kKG5ld0VsKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRjb25zdCBzdWJncm91cCA9IHN1Ymdyb3VwUmF3LnJlbmRlcihjdXJJZCk7XG5cdFx0XHRcdFx0XHRcdHN1Ymdyb3VwLmNsYXNzTmFtZSA9ICdxdWlja2Zvcm1TdWJncm91cCc7XG5cdFx0XHRcdFx0XHRcdHN1Ym5vZGUuc3ViZ3JvdXAgPSBzdWJncm91cDtcblx0XHRcdFx0XHRcdFx0c3Vibm9kZS5zaG93biA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0XHRldmVudCA9IChlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGUudGFyZ2V0LnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoZS50YXJnZXQuc3ViZ3JvdXApO1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGUudGFyZ2V0LnR5cGUgPT09ICdyYWRpbycpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qge25hbWV9ID0gZS50YXJnZXQ7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChlLnRhcmdldC5mb3JtLm5hbWVzW25hbWVdICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlLnRhcmdldC5mb3JtLm5hbWVzW25hbWVdLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlLnRhcmdldC5mb3JtLm5hbWVzW25hbWVdLnN1Ymdyb3VwXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRlLnRhcmdldC5mb3JtLm5hbWVzW25hbWVdID0gZS50YXJnZXQ7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdGUudGFyZ2V0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZS50YXJnZXQuc3ViZ3JvdXApO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdFx0c3Vibm9kZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldmVudCwgdHJ1ZSk7XG5cdFx0XHRcdFx0XHRcdGlmIChjdXJyZW50LmNoZWNrZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRzdWJub2RlLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoc3ViZ3JvdXApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGRhdGEudHlwZSA9PT0gJ3JhZGlvJykge1xuXHRcdFx0XHRcdFx0XHRldmVudCA9IChlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IHtuYW1lfSA9IGUudGFyZ2V0O1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGUudGFyZ2V0LmZvcm0ubmFtZXNbbmFtZV0gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRlLnRhcmdldC5mb3JtLm5hbWVzW25hbWVdLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZS50YXJnZXQuZm9ybS5uYW1lc1tuYW1lXS5zdWJncm91cFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0ZGVsZXRlIGUudGFyZ2V0LmZvcm0ubmFtZXNbbmFtZV07XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0XHRzdWJub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2ZW50LCB0cnVlKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC8vIGFkZCB1c2VycycgZXZlbnQgbGFzdCwgc28gaXQgY2FuIGludGVyYWN0IHdpdGggdGhlIHN1Ymdyb3VwXG5cdFx0XHRcdFx0XHRpZiAoZGF0YS5ldmVudCkge1xuXHRcdFx0XHRcdFx0XHRzdWJub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGRhdGEuZXZlbnQsIGZhbHNlKTtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoY3VycmVudC5ldmVudCkge1xuXHRcdFx0XHRcdFx0XHRzdWJub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGN1cnJlbnQuZXZlbnQsIHRydWUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5zaGlmdENsaWNrU3VwcG9ydCAmJiBkYXRhLnR5cGUgPT09ICdjaGVja2JveCcpIHtcblx0XHRcdFx0XHRNb3JlYml0cy5jaGVja2JveFNoaWZ0Q2xpY2tTdXBwb3J0KE1vcmViaXRzLnF1aWNrRm9ybS5nZXRFbGVtZW50cyhub2RlLCBkYXRhLm5hbWUpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdC8vIGlucHV0IGlzIGFjdHVhbGx5IGEgdGV4dC10eXBlLCBzbyBudW1iZXIgaGVyZSBpbmhlcml0cyB0aGUgc2FtZSBzdHVmZlxuXHRcdFx0Y2FzZSAnbnVtYmVyJzpcblx0XHRcdGNhc2UgJ2lucHV0Jzpcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgnaWQnLCBgZGl2XyR7aWR9YCk7XG5cdFx0XHRcdC8vIEFkZCBoaWRkZW4gYXR0clxuXHRcdFx0XHRpZiAoZGF0YS5oaWRkZW4pIHtcblx0XHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgJycpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLmxhYmVsKSB7XG5cdFx0XHRcdFx0bGFiZWwgPSBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJykpO1xuXHRcdFx0XHRcdGxhYmVsLmFwcGVuZENoaWxkKE1vcmViaXRzLmNyZWF0ZUh0bWwoZGF0YS5sYWJlbCkpO1xuXHRcdFx0XHRcdGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgZGF0YS5pZCB8fCBpZCk7XG5cdFx0XHRcdFx0Ly8gTm8gbWFyZ2luXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRzdWJub2RlID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKTtcblx0XHRcdFx0Ly8gQWRkIHZhbHVlIGFuZCBwbGFjZWhvbGRlciBhdHRyc1xuXHRcdFx0XHRpZiAoZGF0YS52YWx1ZSkge1xuXHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGRhdGEudmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLnBsYWNlaG9sZGVyKSB7XG5cdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgZGF0YS5wbGFjZWhvbGRlcik7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBkYXRhLm5hbWUpO1xuXHRcdFx0XHRpZiAoZGF0YS50eXBlID09PSAnaW5wdXQnKSB7XG5cdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ251bWJlcicpO1xuXHRcdFx0XHRcdGZvciAoY29uc3QgYXR0IG9mIFsnbWluJywgJ21heCcsICdzdGVwJywgJ2xpc3QnXSkge1xuXHRcdFx0XHRcdFx0aWYgKGRhdGFbYXR0XSkge1xuXHRcdFx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZShhdHQsIGRhdGFbYXR0XSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGZvciAoY29uc3QgYXR0IG9mIFsndmFsdWUnLCAnc2l6ZScsICdwbGFjZWhvbGRlcicsICdtYXhsZW5ndGgnXSkge1xuXHRcdFx0XHRcdGlmIChkYXRhW2F0dF0pIHtcblx0XHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKGF0dCwgZGF0YVthdHRdKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0Zm9yIChjb25zdCBhdHQgb2YgWydkaXNhYmxlZCcsICdyZXF1aXJlZCcsICdyZWFkb25seSddKSB7XG5cdFx0XHRcdFx0aWYgKGRhdGFbYXR0XSkge1xuXHRcdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoYXR0LCBhdHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5ldmVudCkge1xuXHRcdFx0XHRcdHN1Ym5vZGUuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBkYXRhLmV2ZW50LCBmYWxzZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2hpbGRDb250YWluZXIgPSBzdWJub2RlO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2R5bmlucHV0Jzoge1xuXHRcdFx0XHRjb25zdCBtaW4gPSBkYXRhLm1pbiB8fCAxO1xuXHRcdFx0XHRjb25zdCBtYXggPSBkYXRhLm1heCB8fCBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdFx0bGFiZWwgPSBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1JykpO1xuXHRcdFx0XHRsYWJlbC5hcHBlbmRDaGlsZChNb3JlYml0cy5jcmVhdGVIdG1sKGRhdGEubGFiZWwpKTtcblx0XHRcdFx0Y29uc3QgbGlzdE5vZGUgPSBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcblx0XHRcdFx0Y29uc3QgbW9yZSA9IHRoaXMuY29tcHV0ZSh7XG5cdFx0XHRcdFx0dHlwZTogJ2J1dHRvbicsXG5cdFx0XHRcdFx0bGFiZWw6ICfmm7TlpJonLFxuXHRcdFx0XHRcdGRpc2FibGVkOiBtaW4gPj0gbWF4LFxuXHRcdFx0XHRcdGV2ZW50OiAoZSkgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3QgbmV3Tm9kZSA9IG5ldyBNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudChlLnRhcmdldC5zdWJsaXN0KTtcblx0XHRcdFx0XHRcdGUudGFyZ2V0LmFyZWEuYXBwZW5kQ2hpbGQobmV3Tm9kZS5yZW5kZXIoKSk7XG5cdFx0XHRcdFx0XHRpZiAoKytlLnRhcmdldC5jb3VudGVyID49IGUudGFyZ2V0Lm1heCkge1xuXHRcdFx0XHRcdFx0XHRlLnRhcmdldC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRub2RlLmFwcGVuZENoaWxkKG1vcmVbMF0pO1xuXHRcdFx0XHRjb25zdCBbLCBtb3JlQnV0dG9uXSA9IG1vcmU7XG5cdFx0XHRcdGNvbnN0IHN1Ymxpc3QgPSB7XG5cdFx0XHRcdFx0dHlwZTogJ19keW5pbnB1dF9lbGVtZW50Jyxcblx0XHRcdFx0XHRsYWJlbDogZGF0YS5zdWJsYWJlbCB8fCBkYXRhLmxhYmVsLFxuXHRcdFx0XHRcdG5hbWU6IGRhdGEubmFtZSxcblx0XHRcdFx0XHR2YWx1ZTogZGF0YS52YWx1ZSxcblx0XHRcdFx0XHRzaXplOiBkYXRhLnNpemUsXG5cdFx0XHRcdFx0cmVtb3ZlOiBmYWxzZSxcblx0XHRcdFx0XHRtYXhsZW5ndGg6IGRhdGEubWF4bGVuZ3RoLFxuXHRcdFx0XHRcdGV2ZW50OiBkYXRhLmV2ZW50LFxuXHRcdFx0XHR9O1xuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgbWluOyArK2kpIHtcblx0XHRcdFx0XHRjb25zdCBlbGVtID0gbmV3IE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50KHN1Ymxpc3QpO1xuXHRcdFx0XHRcdGxpc3ROb2RlLmFwcGVuZENoaWxkKGVsZW0ucmVuZGVyKCkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHN1Ymxpc3QucmVtb3ZlID0gdHJ1ZTtcblx0XHRcdFx0c3VibGlzdC5tb3JlYnV0dG9uID0gbW9yZUJ1dHRvbjtcblx0XHRcdFx0c3VibGlzdC5saXN0bm9kZSA9IGxpc3ROb2RlO1xuXHRcdFx0XHRtb3JlQnV0dG9uLnN1Ymxpc3QgPSBzdWJsaXN0O1xuXHRcdFx0XHRtb3JlQnV0dG9uLmFyZWEgPSBsaXN0Tm9kZTtcblx0XHRcdFx0bW9yZUJ1dHRvbi5tYXggPSBtYXggLSBtaW47XG5cdFx0XHRcdG1vcmVCdXR0b24uY291bnRlciA9IDA7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0Y2FzZSAnX2R5bmlucHV0X2VsZW1lbnQnOlxuXHRcdFx0XHQvLyBQcml2YXRlLCBzaW1pbGFyIHRvIG5vcm1hbCBpbnB1dFxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdGlmIChkYXRhLmxhYmVsKSB7XG5cdFx0XHRcdFx0bGFiZWwgPSBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJykpO1xuXHRcdFx0XHRcdGxhYmVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGRhdGEubGFiZWwpKTtcblx0XHRcdFx0XHRsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGlkKTtcblx0XHRcdFx0XHQvLyBObyBtYXJnaW5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHN1Ym5vZGUgPSBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpO1xuXHRcdFx0XHRpZiAoZGF0YS52YWx1ZSkge1xuXHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGRhdGEudmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCduYW1lJywgZGF0YS5uYW1lKTtcblx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuXHRcdFx0XHRpZiAoZGF0YS5zaXplKSB7XG5cdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ3NpemUnLCBkYXRhLnNpemUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLm1heGxlbmd0aCkge1xuXHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCBkYXRhLm1heGxlbmd0aCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEuZXZlbnQpIHtcblx0XHRcdFx0XHRzdWJub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZGF0YS5ldmVudCwgZmFsc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLnJlbW92ZSkge1xuXHRcdFx0XHRcdGNvbnN0IHJlbW92ZSA9IHRoaXMuY29tcHV0ZSh7XG5cdFx0XHRcdFx0XHR0eXBlOiAnYnV0dG9uJyxcblx0XHRcdFx0XHRcdGxhYmVsOiAn56e76ZmkJyxcblx0XHRcdFx0XHRcdGV2ZW50OiAoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRjb25zdCBsaXN0ID0gZS50YXJnZXQubGlzdG5vZGU7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IG5vZGVfID0gZS50YXJnZXQuaW5wdXRub2RlO1xuXHRcdFx0XHRcdFx0XHRjb25zdCBtb3JlID0gZS50YXJnZXQubW9yZWJ1dHRvbjtcblx0XHRcdFx0XHRcdFx0bGlzdC5yZW1vdmVDaGlsZChub2RlXyk7XG5cdFx0XHRcdFx0XHRcdC0tbW9yZS5jb3VudGVyO1xuXHRcdFx0XHRcdFx0XHRtb3JlLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcblx0XHRcdFx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0bm9kZS5hcHBlbmRDaGlsZChyZW1vdmVbMF0pO1xuXHRcdFx0XHRcdGNvbnN0IFssIHJlbW92ZUJ1dHRvbl0gPSByZW1vdmU7XG5cdFx0XHRcdFx0cmVtb3ZlQnV0dG9uLmlucHV0bm9kZSA9IG5vZGU7XG5cdFx0XHRcdFx0cmVtb3ZlQnV0dG9uLmxpc3Rub2RlID0gZGF0YS5saXN0bm9kZTtcblx0XHRcdFx0XHRyZW1vdmVCdXR0b24ubW9yZWJ1dHRvbiA9IGRhdGEubW9yZWJ1dHRvbjtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2hpZGRlbic6XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgndHlwZScsICdoaWRkZW4nKTtcblx0XHRcdFx0bm9kZS52YWx1ZXMgPSBkYXRhLnZhbHVlO1xuXHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBkYXRhLnZhbHVlKTtcblx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBkYXRhLm5hbWUpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2hlYWRlcic6XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xuXHRcdFx0XHRub2RlLmFwcGVuZENoaWxkKE1vcmViaXRzLmNyZWF0ZUh0bWwoZGF0YS5sYWJlbCkpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2Rpdic6XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdFx0aWYgKGRhdGEubmFtZSkge1xuXHRcdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCduYW1lJywgZGF0YS5uYW1lKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5sYWJlbCkge1xuXHRcdFx0XHRcdGNvbnN0IHJlc3VsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRcdFx0XHRyZXN1bHQuY2xhc3NOYW1lID0gJ3F1aWNrZm9ybURlc2NyaXB0aW9uJztcblx0XHRcdFx0XHRyZXN1bHQuYXBwZW5kQ2hpbGQoTW9yZWJpdHMuY3JlYXRlSHRtbChkYXRhLmxhYmVsKSk7XG5cdFx0XHRcdFx0bm9kZS5hcHBlbmRDaGlsZChyZXN1bHQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnc3VibWl0Jzpcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRcdFx0Y2hpbGRDb250YWluZXIgPSBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpO1xuXHRcdFx0XHRjaGlsZENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG5cdFx0XHRcdGlmIChkYXRhLmxhYmVsKSB7XG5cdFx0XHRcdFx0Y2hpbGRDb250YWluZXIuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGRhdGEubGFiZWwpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNoaWxkQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnbmFtZScsIGRhdGEubmFtZSB8fCAnc3VibWl0Jyk7XG5cdFx0XHRcdGlmIChkYXRhLmRpc2FibGVkKSB7XG5cdFx0XHRcdFx0Y2hpbGRDb250YWluZXIuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnYnV0dG9uJzpcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRcdFx0Y2hpbGRDb250YWluZXIgPSBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpO1xuXHRcdFx0XHRjaGlsZENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG5cdFx0XHRcdGlmIChkYXRhLmxhYmVsKSB7XG5cdFx0XHRcdFx0Y2hpbGRDb250YWluZXIuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGRhdGEubGFiZWwpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNoaWxkQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnbmFtZScsIGRhdGEubmFtZSk7XG5cdFx0XHRcdGlmIChkYXRhLmRpc2FibGVkKSB7XG5cdFx0XHRcdFx0Y2hpbGRDb250YWluZXIuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLmV2ZW50KSB7XG5cdFx0XHRcdFx0Y2hpbGRDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkYXRhLmV2ZW50LCBmYWxzZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICd0ZXh0YXJlYSc6XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ2lkJywgYGRpdl8ke2lkfWApO1xuXHRcdFx0XHQvLyBBZGQgaGlkZGVuIGF0dHJcblx0XHRcdFx0aWYgKGRhdGEuaGlkZGVuKSB7XG5cdFx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICcnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5sYWJlbCkge1xuXHRcdFx0XHRcdGxhYmVsID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpKTtcblx0XHRcdFx0XHRjb25zdCBsYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuXHRcdFx0XHRcdGxhYmVsRWxlbWVudC5hcHBlbmRDaGlsZChNb3JlYml0cy5jcmVhdGVIdG1sKGRhdGEubGFiZWwpKTtcblx0XHRcdFx0XHRsYWJlbEVsZW1lbnQuc2V0QXR0cmlidXRlKCdmb3InLCBkYXRhLmlkIHx8IGlkKTtcblx0XHRcdFx0XHRsYWJlbC5hcHBlbmRDaGlsZChsYWJlbEVsZW1lbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHN1Ym5vZGUgPSBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJykpO1xuXHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgnbmFtZScsIGRhdGEubmFtZSk7XG5cdFx0XHRcdGlmIChkYXRhLmNvbHMpIHtcblx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgnY29scycsIGRhdGEuY29scyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEucm93cykge1xuXHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCdyb3dzJywgZGF0YS5yb3dzKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5kaXNhYmxlZCkge1xuXHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLnJlcXVpcmVkKSB7XG5cdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJ3JlcXVpcmVkJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEucmVhZG9ubHkpIHtcblx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCAncmVhZG9ubHknKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS52YWx1ZSkge1xuXHRcdFx0XHRcdHN1Ym5vZGUudmFsdWUgPSBkYXRhLnZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIEFkZCBwbGFjZWhvbGRlciBhdHRyXG5cdFx0XHRcdGlmIChkYXRhLnBsYWNlaG9sZGVyKSB7XG5cdFx0XHRcdFx0c3Vibm9kZS5wbGFjZWhvbGRlciA9IGRhdGEucGxhY2Vob2xkZXI7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2hpbGRDb250YWluZXIgPSBzdWJub2RlO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihgTW9yZWJpdHMucXVpY2tGb3JtOiB1bmtub3duIGVsZW1lbnQgdHlwZSAke2RhdGEudHlwZS50b1N0cmluZygpfWApO1xuXHRcdH1cblx0XHRpZiAoIWNoaWxkQ29udGFpbmVyKSB7XG5cdFx0XHRjaGlsZENvbnRhaW5lciA9IG5vZGU7XG5cdFx0fVxuXHRcdGlmIChkYXRhLnRvb2x0aXApIHtcblx0XHRcdE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50LmdlbmVyYXRlVG9vbHRpcChsYWJlbCB8fCBub2RlLCBkYXRhKTtcblx0XHR9XG5cdFx0aWYgKGRhdGEuZXh0cmEpIHtcblx0XHRcdGNoaWxkQ29udGFpbmVyLmV4dHJhID0gZGF0YS5leHRyYTtcblx0XHR9XG5cdFx0aWYgKGRhdGEuJGRhdGEpIHtcblx0XHRcdCQoY2hpbGRDb250YWluZXIpLmRhdGEoZGF0YS4kZGF0YSk7XG5cdFx0fVxuXHRcdGlmIChkYXRhLnN0eWxlKSB7XG5cdFx0XHRjaGlsZENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgZGF0YS5zdHlsZSk7XG5cdFx0fVxuXHRcdGlmIChkYXRhLmNsYXNzTmFtZSkge1xuXHRcdFx0Y2hpbGRDb250YWluZXIuY2xhc3NOYW1lID0gY2hpbGRDb250YWluZXIuY2xhc3NOYW1lXG5cdFx0XHRcdD8gYCR7Y2hpbGRDb250YWluZXIuY2xhc3NOYW1lfSAke2RhdGEuY2xhc3NOYW1lfWBcblx0XHRcdFx0OiBkYXRhLmNsYXNzTmFtZTtcblx0XHR9XG5cdFx0Y2hpbGRDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsIGRhdGEuaWQgfHwgaWQpO1xuXHRcdHJldHVybiBbbm9kZSwgY2hpbGRDb250YWluZXJdO1xuXHR9O1xuXHQvKipcblx0ICogQ3JlYXRlIGEgalF1ZXJ5IFVJLWJhc2VkIHRvb2x0aXAuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudFxuXHQgKiBAcmVxdWlyZXMganF1ZXJ5LnVpXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IG5vZGUgLSBUaGUgSFRNTCBlbGVtZW50IGJlc2lkZSB3aGljaCBhIHRvb2x0aXAgaXMgdG8gYmUgZ2VuZXJhdGVkLlxuXHQgKiBAcGFyYW0ge09iamVjdH0gZGF0YSAtIFRvb2x0aXAtcmVsYXRlZCBjb25maWd1cmF0aW9uIGRhdGEuXG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudC5nZW5lcmF0ZVRvb2x0aXAgPSAobm9kZSwgZGF0YSkgPT4ge1xuXHRcdGNvbnN0IHRvb2x0aXBCdXR0b24gPSBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSk7XG5cdFx0dG9vbHRpcEJ1dHRvbi5jbGFzc05hbWUgPSAnbW9yZWJpdHMtdG9vbHRpcEJ1dHRvbic7XG5cdFx0dG9vbHRpcEJ1dHRvbi50aXRsZSA9IGRhdGEudG9vbHRpcDsgLy8gUHJvdmlkZXMgdGhlIGNvbnRlbnQgZm9yIGpRdWVyeSBVSVxuXHRcdHRvb2x0aXBCdXR0b24uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJz8nKSk7XG5cdFx0JCh0b29sdGlwQnV0dG9uKS50b29sdGlwKHtcblx0XHRcdHBvc2l0aW9uOiB7XG5cdFx0XHRcdG15OiAnbGVmdCB0b3AnLFxuXHRcdFx0XHRhdDogJ2NlbnRlciBib3R0b20nLFxuXHRcdFx0XHRjb2xsaXNpb246ICdmbGlwZml0Jyxcblx0XHRcdH0sXG5cdFx0XHQvLyBEZXByZWNhdGVkIGluIFVJIDEuMTIsIGJ1dCBNVyBzdHVjayBvbiAxLjkuMiBpbmRlZmluaXRlbHk7IHNlZSAjMzk4IGFuZCBUNzEzODZcblx0XHRcdHRvb2x0aXBDbGFzczogJ21vcmViaXRzLXVpLXRvb2x0aXAnLFxuXHRcdH0pO1xuXHR9O1xuXHQvLyBTb21lIHV0aWxpdHkgbWV0aG9kcyBmb3IgbWFuaXB1bGF0aW5nIHF1aWNrRm9ybXMgYWZ0ZXIgdGhlaXIgY3JlYXRpb246XG5cdC8vIChOb25lIG9mIHRoZXNlIHdvcmsgZm9yIFwiZHluaW5wdXRcIiB0eXBlIGZpZWxkcyBhdCBwcmVzZW50KVxuXHQvKipcblx0ICogUmV0dXJucyBhbiBvYmplY3QgY29udGFpbmluZyBhbGwgZmlsbGVkIGZvcm0gZGF0YSBlbnRlcmVkIGJ5IHRoZSB1c2VyLCB3aXRoIHRoZSBvYmplY3Rcblx0ICoga2V5cyBiZWluZyB0aGUgZm9ybSBlbGVtZW50IG5hbWVzLiBEaXNhYmxlZCBmaWVsZHMgd2lsbCBiZSBpZ25vcmVkLCBidXQgbm90IGhpZGRlbiBmaWVsZHMuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5xdWlja0Zvcm1cblx0ICogQHBhcmFtIHtIVE1MRm9ybUVsZW1lbnR9IGZvcm1cblx0ICogQHJldHVybnMge09iamVjdH0gV2l0aCBmaWVsZCBuYW1lcyBhcyBrZXlzLCBpbnB1dCBkYXRhIGFzIHZhbHVlcy5cblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5nZXRJbnB1dERhdGEgPSAoZm9ybSkgPT4ge1xuXHRcdGNvbnN0IHJlc3VsdCA9IHt9O1xuXHRcdGZvciAoY29uc3QgZmllbGQgb2YgZm9ybS5lbGVtZW50cykge1xuXHRcdFx0aWYgKGZpZWxkLmRpc2FibGVkIHx8ICFmaWVsZC5uYW1lIHx8ICFmaWVsZC50eXBlIHx8IGZpZWxkLnR5cGUgPT09ICdzdWJtaXQnIHx8IGZpZWxkLnR5cGUgPT09ICdidXR0b24nKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0Ly8gRm9yIGVsZW1lbnRzIGluIHN1Ymdyb3VwcywgcXVpY2tmb3JtIHByZXBlbmRzIGVsZW1lbnQgbmFtZXMgd2l0aFxuXHRcdFx0Ly8gbmFtZSBvZiB0aGUgcGFyZW50IGdyb3VwIGZvbGxvd2VkIGJ5IGEgcGVyaW9kLCBnZXQgcmlkIG9mIHRoYXQuXG5cdFx0XHRjb25zdCBmaWVsZE5hbWVOb3JtID0gZmllbGQubmFtZS5zbGljZShmaWVsZC5uYW1lLmluZGV4T2YoJy4nKSArIDEpO1xuXHRcdFx0c3dpdGNoIChmaWVsZC50eXBlKSB7XG5cdFx0XHRcdGNhc2UgJ3JhZGlvJzpcblx0XHRcdFx0XHRpZiAoZmllbGQuY2hlY2tlZCkge1xuXHRcdFx0XHRcdFx0cmVzdWx0W2ZpZWxkTmFtZU5vcm1dID0gZmllbGQudmFsdWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdjaGVja2JveCc6XG5cdFx0XHRcdFx0aWYgKGZpZWxkLmRhdGFzZXQuc2luZ2xlKSB7XG5cdFx0XHRcdFx0XHRyZXN1bHRbZmllbGROYW1lTm9ybV0gPSBmaWVsZC5jaGVja2VkOyAvLyBib29sZWFuXG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJlc3VsdFtmaWVsZE5hbWVOb3JtXSB8fD0gW107XG5cdFx0XHRcdFx0XHRpZiAoZmllbGQuY2hlY2tlZCkge1xuXHRcdFx0XHRcdFx0XHRyZXN1bHRbZmllbGROYW1lTm9ybV0ucHVzaChmaWVsZC52YWx1ZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdzZWxlY3QtbXVsdGlwbGUnOlxuXHRcdFx0XHRcdHJlc3VsdFtmaWVsZE5hbWVOb3JtXSA9ICQoZmllbGQpLnZhbCgpOyAvLyBmaWVsZC52YWx1ZSBkb2Vzbid0IHdvcmtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAndGV4dCc6IC8vIGZhbGxzIHRocm91Z2hcblx0XHRcdFx0Y2FzZSAndGV4dGFyZWEnOlxuXHRcdFx0XHRcdHJlc3VsdFtmaWVsZE5hbWVOb3JtXSA9IGZpZWxkLnZhbHVlLnRyaW0oKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHQvLyBjb3VsZCBiZSBzZWxlY3Qtb25lLCBkYXRlLCBudW1iZXIsIGVtYWlsLCBldGNcblx0XHRcdFx0XHRpZiAoZmllbGQudmFsdWUpIHtcblx0XHRcdFx0XHRcdHJlc3VsdFtmaWVsZE5hbWVOb3JtXSA9IGZpZWxkLnZhbHVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fTtcblx0LyoqXG5cdCAqIFJldHVybnMgYWxsIGZvcm0gZWxlbWVudHMgd2l0aCBhIGdpdmVuIGZpZWxkIG5hbWUgb3IgSUQuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5xdWlja0Zvcm1cblx0ICogQHBhcmFtIHtIVE1MRm9ybUVsZW1lbnR9IGZvcm1cblx0ICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkTmFtZSAtIFRoZSBuYW1lIG9yIGlkIG9mIHRoZSBmaWVsZHMuXG5cdCAqIEByZXR1cm5zIHtIVE1MRWxlbWVudFtdfSAtIEFycmF5IG9mIG1hdGNoaW5nIGZvcm0gZWxlbWVudHMuXG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0uZ2V0RWxlbWVudHMgPSAoZm9ybSwgZmllbGROYW1lKSA9PiB7XG5cdFx0Y29uc3QgJGZvcm0gPSAkKGZvcm0pO1xuXHRcdGZpZWxkTmFtZSA9ICQuZXNjYXBlU2VsZWN0b3IoZmllbGROYW1lKTsgLy8gc2FuaXRpemUgaW5wdXRcblx0XHRsZXQgJGVsZW1lbnRzID0gJGZvcm0uZmluZChgW25hbWU9XCIke2ZpZWxkTmFtZX1cIl1gKTtcblx0XHRpZiAoJGVsZW1lbnRzLmxlbmd0aCA+IDApIHtcblx0XHRcdHJldHVybiAkZWxlbWVudHMudG9BcnJheSgpO1xuXHRcdH1cblx0XHQkZWxlbWVudHMgPSAkZm9ybS5maW5kKGAjJHtmaWVsZE5hbWV9YCk7XG5cdFx0cmV0dXJuICRlbGVtZW50cy50b0FycmF5KCk7XG5cdH07XG5cdC8qKlxuXHQgKiBTZWFyY2hlcyB0aGUgYXJyYXkgb2YgZWxlbWVudHMgZm9yIGEgY2hlY2tib3ggb3IgcmFkaW8gYnV0dG9uIHdpdGggYSBjZXJ0YWluXG5cdCAqIGB2YWx1ZWAgYXR0cmlidXRlLCBhbmQgcmV0dXJucyB0aGUgZmlyc3Qgc3VjaCBlbGVtZW50LiBSZXR1cm5zIG51bGwgaWYgbm90IGZvdW5kLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtXG5cdCAqIEBwYXJhbSB7SFRNTElucHV0RWxlbWVudFtdfSBlbGVtZW50QXJyYXkgLSBBcnJheSBvZiBjaGVja2JveCBvciByYWRpbyBlbGVtZW50cy5cblx0ICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIC0gVmFsdWUgdG8gc2VhcmNoIGZvci5cblx0ICogQHJldHVybnMge0hUTUxJbnB1dEVsZW1lbnR9XG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0uZ2V0Q2hlY2tib3hPclJhZGlvID0gKGVsZW1lbnRBcnJheSwgdmFsdWUpID0+IHtcblx0XHRjb25zdCBmb3VuZCA9IGVsZW1lbnRBcnJheS5maWx0ZXIoKGVsZW1lbnQpID0+IHtcblx0XHRcdHJldHVybiBlbGVtZW50LnZhbHVlID09PSB2YWx1ZTtcblx0XHR9KTtcblx0XHRpZiAoZm91bmQubGVuZ3RoID4gMCkge1xuXHRcdFx0cmV0dXJuIGZvdW5kWzBdO1xuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fTtcblx0LyoqXG5cdCAqIFJldHVybnMgdGhlICZsdDtkaXY+IGNvbnRhaW5pbmcgdGhlIGZvcm0gZWxlbWVudCwgb3IgdGhlIGZvcm0gZWxlbWVudCBpdHNlbGZcblx0ICogTWF5IG5vdCB3b3JrIGFzIGV4cGVjdGVkIG9uIGNoZWNrYm94ZXMgb3IgcmFkaW9zLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcblx0ICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLmdldEVsZW1lbnRDb250YWluZXIgPSAoZWxlbWVudCkgPT4ge1xuXHRcdC8vIGZvciBkaXZzLCBoZWFkaW5ncyBhbmQgZmllbGRzZXRzLCB0aGUgY29udGFpbmVyIGlzIHRoZSBlbGVtZW50IGl0c2VsZlxuXHRcdGlmIChcblx0XHRcdGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRmllbGRTZXRFbGVtZW50IHx8XG5cdFx0XHRlbGVtZW50IGluc3RhbmNlb2YgSFRNTERpdkVsZW1lbnQgfHxcblx0XHRcdGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSGVhZGluZ0VsZW1lbnRcblx0XHQpIHtcblx0XHRcdHJldHVybiBlbGVtZW50O1xuXHRcdH1cblx0XHQvLyBmb3Igb3RoZXJzLCBqdXN0IHJldHVybiB0aGUgcGFyZW50IG5vZGVcblx0XHRyZXR1cm4gZWxlbWVudC5wYXJlbnROb2RlO1xuXHR9O1xuXHQvKipcblx0ICogR2V0cyB0aGUgSFRNTCBlbGVtZW50IHRoYXQgY29udGFpbnMgdGhlIGxhYmVsIG9mIHRoZSBnaXZlbiBmb3JtIGVsZW1lbnRcblx0ICogKG1haW5seSBmb3IgaW50ZXJuYWwgdXNlKS5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybVxuXHQgKiBAcGFyYW0geyhIVE1MRWxlbWVudHxNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudCl9IGVsZW1lbnRcblx0ICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLmdldEVsZW1lbnRMYWJlbE9iamVjdCA9IChlbGVtZW50KSA9PiB7XG5cdFx0Ly8gZm9yIGJ1dHRvbnMsIGRpdnMgYW5kIGhlYWRlcnMsIHRoZSBsYWJlbCBpcyBvbiB0aGUgZWxlbWVudCBpdHNlbGZcblx0XHRpZiAoXG5cdFx0XHRlbGVtZW50LnR5cGUgPT09ICdidXR0b24nIHx8XG5cdFx0XHRlbGVtZW50LnR5cGUgPT09ICdzdWJtaXQnIHx8XG5cdFx0XHRlbGVtZW50IGluc3RhbmNlb2YgSFRNTERpdkVsZW1lbnQgfHxcblx0XHRcdGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSGVhZGluZ0VsZW1lbnRcblx0XHQpIHtcblx0XHRcdHJldHVybiBlbGVtZW50O1xuXHRcdFx0Ly8gZm9yIGZpZWxkc2V0cywgdGhlIGxhYmVsIGlzIHRoZSBjaGlsZCA8bGVnZW5kPiBlbGVtZW50XG5cdFx0fSBlbHNlIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEZpZWxkU2V0RWxlbWVudCkge1xuXHRcdFx0cmV0dXJuIGVsZW1lbnQucXVlcnlTZWxlY3RvcignbGVnZW5kJyk7XG5cdFx0XHQvLyBmb3IgdGV4dGFyZWFzLCB0aGUgbGFiZWwgaXMgdGhlIHNpYmxpbmcgPGg1PiBlbGVtZW50XG5cdFx0fSBlbHNlIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTFRleHRBcmVhRWxlbWVudCkge1xuXHRcdFx0cmV0dXJuIGVsZW1lbnQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCdoNScpO1xuXHRcdH1cblx0XHQvLyBmb3Igb3RoZXJzLCB0aGUgbGFiZWwgaXMgdGhlIHNpYmxpbmcgPGxhYmVsPiBlbGVtZW50XG5cdFx0cmV0dXJuIGVsZW1lbnQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCdsYWJlbCcpO1xuXHR9O1xuXHQvKipcblx0ICogR2V0cyB0aGUgbGFiZWwgdGV4dCBvZiB0aGUgZWxlbWVudC5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybVxuXHQgKiBAcGFyYW0geyhIVE1MRWxlbWVudHxNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudCl9IGVsZW1lbnRcblx0ICogQHJldHVybnMge3N0cmluZ31cblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5nZXRFbGVtZW50TGFiZWwgPSAoZWxlbWVudCkgPT4ge1xuXHRcdGNvbnN0IGxhYmVsRWxlbWVudCA9IE1vcmViaXRzLnF1aWNrRm9ybS5nZXRFbGVtZW50TGFiZWxPYmplY3QoZWxlbWVudCk7XG5cdFx0aWYgKCFsYWJlbEVsZW1lbnQpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRyZXR1cm4gbGFiZWxFbGVtZW50LmZpcnN0Q2hpbGQudGV4dENvbnRlbnQ7XG5cdH07XG5cdC8qKlxuXHQgKiBTZXRzIHRoZSBsYWJlbCBvZiB0aGUgZWxlbWVudCB0byB0aGUgZ2l2ZW4gdGV4dC5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybVxuXHQgKiBAcGFyYW0geyhIVE1MRWxlbWVudHxNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudCl9IGVsZW1lbnRcblx0ICogQHBhcmFtIHtzdHJpbmd9IGxhYmVsVGV4dFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBzdWNjZWVkZWQsIGZhbHNlIGlmIHRoZSBsYWJlbCBlbGVtZW50IGlzIHVuYXZhaWxhYmxlLlxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLnNldEVsZW1lbnRMYWJlbCA9IChlbGVtZW50LCBsYWJlbFRleHQpID0+IHtcblx0XHRjb25zdCBsYWJlbEVsZW1lbnQgPSBNb3JlYml0cy5xdWlja0Zvcm0uZ2V0RWxlbWVudExhYmVsT2JqZWN0KGVsZW1lbnQpO1xuXHRcdGlmICghbGFiZWxFbGVtZW50KSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGxhYmVsRWxlbWVudC5maXJzdENoaWxkLnRleHRDb250ZW50ID0gbGFiZWxUZXh0O1xuXHRcdHJldHVybiB0cnVlO1xuXHR9O1xuXHQvKipcblx0ICogU3RvcmVzIHRoZSBlbGVtZW50J3MgY3VycmVudCBsYWJlbCwgYW5kIHRlbXBvcmFyaWx5IHNldHMgdGhlIGxhYmVsIHRvIHRoZSBnaXZlbiB0ZXh0LlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtXG5cdCAqIEBwYXJhbSB7KEhUTUxFbGVtZW50fE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50KX0gZWxlbWVudFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGVtcG9yYXJ5TGFiZWxUZXh0XG5cdCAqIEByZXR1cm5zIHtib29sZWFufSBgdHJ1ZWAgaWYgc3VjY2VlZGVkLCBgZmFsc2VgIGlmIHRoZSBsYWJlbCBlbGVtZW50IGlzIHVuYXZhaWxhYmxlLlxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLm92ZXJyaWRlRWxlbWVudExhYmVsID0gKGVsZW1lbnQsIHRlbXBvcmFyeUxhYmVsVGV4dCkgPT4ge1xuXHRcdGlmICghZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEtb2xkbGFiZWwnKSkge1xuXHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtb2xkbGFiZWwnLCBNb3JlYml0cy5xdWlja0Zvcm0uZ2V0RWxlbWVudExhYmVsKGVsZW1lbnQpKTtcblx0XHR9XG5cdFx0cmV0dXJuIE1vcmViaXRzLnF1aWNrRm9ybS5zZXRFbGVtZW50TGFiZWwoZWxlbWVudCwgdGVtcG9yYXJ5TGFiZWxUZXh0KTtcblx0fTtcblx0LyoqXG5cdCAqIFJlc3RvcmVzIHRoZSBsYWJlbCBzdG9yZWQgYnkgb3ZlcnJpZGVFbGVtZW50TGFiZWwuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5xdWlja0Zvcm1cblx0ICogQHBhcmFtIHsoSFRNTEVsZW1lbnR8TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQpfSBlbGVtZW50XG5cdCAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHN1Y2NlZWRlZCwgZmFsc2UgaWYgdGhlIGxhYmVsIGVsZW1lbnQgaXMgdW5hdmFpbGFibGUuXG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0ucmVzZXRFbGVtZW50TGFiZWwgPSAoZWxlbWVudCkgPT4ge1xuXHRcdGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS1vbGRsYWJlbCcpKSB7XG5cdFx0XHRyZXR1cm4gTW9yZWJpdHMucXVpY2tGb3JtLnNldEVsZW1lbnRMYWJlbChlbGVtZW50LCBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1vbGRsYWJlbCcpKTtcblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH07XG5cdC8qKlxuXHQgKiBTaG93cyBvciBoaWRlcyBhIGZvcm0gZWxlbWVudCBwbHVzIGl0cyBsYWJlbCBhbmQgdG9vbHRpcC5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybVxuXHQgKiBAcGFyYW0geyhIVE1MRWxlbWVudHxqUXVlcnl8c3RyaW5nKX0gZWxlbWVudCAtIEhUTUwvalF1ZXJ5IGVsZW1lbnQsIG9yIGpRdWVyeSBzZWxlY3RvciBzdHJpbmcuXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Zpc2liaWxpdHldIC0gU2tpcCB0aGlzIHRvIHRvZ2dsZSB2aXNpYmlsaXR5LlxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLnNldEVsZW1lbnRWaXNpYmlsaXR5ID0gKGVsZW1lbnQsIHZpc2liaWxpdHkpID0+IHtcblx0XHQkKGVsZW1lbnQpLnRvZ2dsZSh2aXNpYmlsaXR5KTtcblx0fTtcblx0LyoqXG5cdCAqIFNob3dzIG9yIGhpZGVzIHRoZSBxdWVzdGlvbiBtYXJrIGljb24gKHdoaWNoIGRpc3BsYXlzIHRoZSB0b29sdGlwKSBuZXh0IHRvIGEgZm9ybSBlbGVtZW50LlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtXG5cdCAqIEBwYXJhbSB7KEhUTUxFbGVtZW50fGpRdWVyeSl9IGVsZW1lbnRcblx0ICogQHBhcmFtIHtib29sZWFufSBbdmlzaWJpbGl0eV0gLSBTa2lwIHRoaXMgdG8gdG9nZ2xlIHZpc2liaWxpdHkuXG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0uc2V0RWxlbWVudFRvb2x0aXBWaXNpYmlsaXR5ID0gKGVsZW1lbnQsIHZpc2liaWxpdHkpID0+IHtcblx0XHQkKE1vcmViaXRzLnF1aWNrRm9ybS5nZXRFbGVtZW50Q29udGFpbmVyKGVsZW1lbnQpKS5maW5kKCcubW9yZWJpdHMtdG9vbHRpcEJ1dHRvbicpLnRvZ2dsZSh2aXNpYmlsaXR5KTtcblx0fTtcblx0LyoqXG5cdCAqIEBleHRlcm5hbCBIVE1MRm9ybUVsZW1lbnRcblx0ICovXG5cdC8qKlxuXHQgKiBHZXQgY2hlY2tlZCBpdGVtcyBpbiB0aGUgZm9ybS5cblx0ICpcblx0ICogQGZ1bmN0aW9uIGV4dGVybmFsOkhUTUxGb3JtRWxlbWVudC5nZXRDaGVja2VkXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gRmluZCBjaGVja2VkIHByb3BlcnR5IG9mIGVsZW1lbnRzIChpLmUuIGEgY2hlY2tib3hcblx0ICogb3IgYSByYWRpb2J1dHRvbikgd2l0aCB0aGUgZ2l2ZW4gbmFtZSwgb3Igc2VsZWN0IG9wdGlvbnMgdGhhdCBoYXZlIHNlbGVjdGVkXG5cdCAqIHNldCB0byB0cnVlIChkb24ndCB0cnkgdG8gbWl4IHNlbGVjdHMgd2l0aCByYWRpby9jaGVja2JveGVzKS5cblx0ICogQHBhcmFtIHtzdHJpbmd9IFt0eXBlXSAtIE9wdGlvbmFsbHkgc3BlY2lmeSBlaXRoZXIgcmFkaW8gb3IgY2hlY2tib3ggKGZvclxuXHQgKiB0aGUgZXZlbnQgdGhhdCBib3RoIGNoZWNrYm94ZXMgYW5kIHJhZGlvYnV0dG9ucyBoYXZlIHRoZSBzYW1lIG5hbWUpLlxuXHQgKiBAcmV0dXJucyB7c3RyaW5nW119IC0gQ29udGFpbnMgdGhlIHZhbHVlcyBvZiBlbGVtZW50cyB3aXRoIHRoZSBnaXZlbiBuYW1lXG5cdCAqIGNoZWNrZWQgcHJvcGVydHkgc2V0IHRvIHRydWUuXG5cdCAqL1xuXHRIVE1MRm9ybUVsZW1lbnQucHJvdG90eXBlLmdldENoZWNrZWQgPSBmdW5jdGlvbiAobmFtZSwgdHlwZSkge1xuXHRcdGNvbnN0IGVsZW1lbnRzID0gdGhpcy5lbGVtZW50c1tuYW1lXTtcblx0XHRpZiAoIWVsZW1lbnRzKSB7XG5cdFx0XHRyZXR1cm4gW107XG5cdFx0fVxuXHRcdGNvbnN0IHJldHVybkFycmF5ID0gW107XG5cdFx0bGV0IGk7XG5cdFx0aWYgKGVsZW1lbnRzIGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQpIHtcblx0XHRcdGNvbnN0IHtvcHRpb25zfSA9IGVsZW1lbnRzO1xuXHRcdFx0Zm9yIChpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0aWYgKG9wdGlvbnNbaV0uc2VsZWN0ZWQpIHtcblx0XHRcdFx0XHRpZiAob3B0aW9uc1tpXS52YWx1ZXMpIHtcblx0XHRcdFx0XHRcdHJldHVybkFycmF5LnB1c2gob3B0aW9uc1tpXS52YWx1ZXMpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXR1cm5BcnJheS5wdXNoKG9wdGlvbnNbaV0udmFsdWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoZWxlbWVudHMgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XG5cdFx0XHRpZiAodHlwZSAmJiBlbGVtZW50cy50eXBlICE9PSB0eXBlKSB7XG5cdFx0XHRcdHJldHVybiBbXTtcblx0XHRcdH0gZWxzZSBpZiAoZWxlbWVudHMuY2hlY2tlZCkge1xuXHRcdFx0XHRyZXR1cm4gW2VsZW1lbnRzLnZhbHVlXTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Zm9yIChpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRcdGlmIChlbGVtZW50c1tpXS5jaGVja2VkKSB7XG5cdFx0XHRcdFx0aWYgKHR5cGUgJiYgZWxlbWVudHNbaV0udHlwZSAhPT0gdHlwZSkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChlbGVtZW50c1tpXS52YWx1ZXMpIHtcblx0XHRcdFx0XHRcdHJldHVybkFycmF5LnB1c2goZWxlbWVudHNbaV0udmFsdWVzKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuQXJyYXkucHVzaChlbGVtZW50c1tpXS52YWx1ZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByZXR1cm5BcnJheTtcblx0fTtcblx0LyoqXG5cdCAqIERvZXMgdGhlIHNhbWUgYXMge0BsaW5rIEhUTUxGb3JtRWxlbWVudC5nZXRDaGVja2VkfGdldENoZWNrZWR9LCBidXQgd2l0aCB1bmNoZWNrZWQgZWxlbWVudHMuXG5cdCAqXG5cdCAqIEBmdW5jdGlvbiBleHRlcm5hbDpIVE1MRm9ybUVsZW1lbnQuZ2V0VW5jaGVja2VkXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gRmluZCBjaGVja2VkIHByb3BlcnR5IG9mIGVsZW1lbnRzIChpLmUuIGEgY2hlY2tib3hcblx0ICogb3IgYSByYWRpb2J1dHRvbikgd2l0aCB0aGUgZ2l2ZW4gbmFtZSwgb3Igc2VsZWN0IG9wdGlvbnMgdGhhdCBoYXZlIHNlbGVjdGVkXG5cdCAqIHNldCB0byB0cnVlIChkb24ndCB0cnkgdG8gbWl4IHNlbGVjdHMgd2l0aCByYWRpby9jaGVja2JveGVzKS5cblx0ICogQHBhcmFtIHtzdHJpbmd9IFt0eXBlXSAtIE9wdGlvbmFsbHkgc3BlY2lmeSBlaXRoZXIgcmFkaW8gb3IgY2hlY2tib3ggKGZvclxuXHQgKiB0aGUgZXZlbnQgdGhhdCBib3RoIGNoZWNrYm94ZXMgYW5kIHJhZGlvYnV0dG9ucyBoYXZlIHRoZSBzYW1lIG5hbWUpLlxuXHQgKiBAcmV0dXJucyB7c3RyaW5nW119IC0gQ29udGFpbnMgdGhlIHZhbHVlcyBvZiBlbGVtZW50cyB3aXRoIHRoZSBnaXZlbiBuYW1lXG5cdCAqIGNoZWNrZWQgcHJvcGVydHkgc2V0IHRvIHRydWUuXG5cdCAqL1xuXHRIVE1MRm9ybUVsZW1lbnQucHJvdG90eXBlLmdldFVuY2hlY2tlZCA9IGZ1bmN0aW9uIChuYW1lLCB0eXBlKSB7XG5cdFx0Y29uc3QgZWxlbWVudHMgPSB0aGlzLmVsZW1lbnRzW25hbWVdO1xuXHRcdGlmICghZWxlbWVudHMpIHtcblx0XHRcdHJldHVybiBbXTtcblx0XHR9XG5cdFx0Y29uc3QgcmV0dXJuQXJyYXkgPSBbXTtcblx0XHRsZXQgaTtcblx0XHRpZiAoZWxlbWVudHMgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCkge1xuXHRcdFx0Y29uc3Qge29wdGlvbnN9ID0gZWxlbWVudHM7XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHRpZiAoIW9wdGlvbnNbaV0uc2VsZWN0ZWQpIHtcblx0XHRcdFx0XHRpZiAob3B0aW9uc1tpXS52YWx1ZXMpIHtcblx0XHRcdFx0XHRcdHJldHVybkFycmF5LnB1c2gob3B0aW9uc1tpXS52YWx1ZXMpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXR1cm5BcnJheS5wdXNoKG9wdGlvbnNbaV0udmFsdWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoZWxlbWVudHMgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XG5cdFx0XHRpZiAodHlwZSAmJiBlbGVtZW50cy50eXBlICE9PSB0eXBlKSB7XG5cdFx0XHRcdHJldHVybiBbXTtcblx0XHRcdH0gZWxzZSBpZiAoIWVsZW1lbnRzLmNoZWNrZWQpIHtcblx0XHRcdFx0cmV0dXJuIFtlbGVtZW50cy52YWx1ZV07XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGZvciAoaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHRpZiAoIWVsZW1lbnRzW2ldLmNoZWNrZWQpIHtcblx0XHRcdFx0XHRpZiAodHlwZSAmJiBlbGVtZW50c1tpXS50eXBlICE9PSB0eXBlKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGVsZW1lbnRzW2ldLnZhbHVlcykge1xuXHRcdFx0XHRcdFx0cmV0dXJuQXJyYXkucHVzaChlbGVtZW50c1tpXS52YWx1ZXMpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXR1cm5BcnJheS5wdXNoKGVsZW1lbnRzW2ldLnZhbHVlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJldHVybkFycmF5O1xuXHR9O1xuXHQvKipcblx0ICogVXRpbGl0aWVzIHRvIGhlbHAgcHJvY2VzcyBJUCBhZGRyZXNzZXMuXG5cdCAqXG5cdCAqIEBuYW1lc3BhY2UgTW9yZWJpdHMuaXBcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzXG5cdCAqL1xuXHRNb3JlYml0cy5pcCA9IHtcblx0XHQvKipcblx0XHQgKiBDb252ZXJ0cyBhbiBJUHY2IGFkZHJlc3MgdG8gdGhlIGNhbm9uaWNhbCBmb3JtIHN0b3JlZCBhbmQgdXNlZCBieSBNZWRpYVdpa2kuXG5cdFx0ICogSmF2YVNjcmlwdCB0cmFuc2xhdGlvbiBvZiB0aGUge0BsaW5rIGh0dHBzOi8vZ2Vycml0Lndpa2ltZWRpYS5vcmcvci9wbHVnaW5zL2dpdGlsZXMvbWVkaWF3aWtpL2NvcmUvKy84ZWI2YWMzZTg0ZWEzMzEyZDM5MWNhOTZjMTJjNDllM2FkMDc1M2JiL2luY2x1ZGVzL3V0aWxzL0lQLnBocCMxMzF8YElQOjpzYW5pdGl6ZUlQKClgfVxuXHRcdCAqIGZ1bmN0aW9uIGZyb20gdGhlIElQVXRpbHMgbGlicmFyeS4gIEFkZHJlc3NlcyBhcmUgdmVyYm9zZSwgdXBwZXJjYXNlLFxuXHRcdCAqIG5vcm1hbGl6ZWQsIGFuZCBleHBhbmRlZCB0byA4IHdvcmRzLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGFkZHJlc3MgLSBUaGUgSVB2NiBhZGRyZXNzLCB3aXRoIG9yIHdpdGhvdXQgQ0lEUi5cblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHNhbml0aXplSVB2NjogKGFkZHJlc3MpID0+IHtcblx0XHRcdGFkZHJlc3MgPSBhZGRyZXNzLnRyaW0oKTtcblx0XHRcdGlmIChhZGRyZXNzID09PSAnJykge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblx0XHRcdGlmICghbXcudXRpbC5pc0lQdjZBZGRyZXNzKGFkZHJlc3MsIHRydWUpKSB7XG5cdFx0XHRcdHJldHVybiBhZGRyZXNzOyAvLyBub3RoaW5nIGVsc2UgdG8gZG8gZm9yIElQdjQgYWRkcmVzc2VzIG9yIGludmFsaWQgb25lc1xuXHRcdFx0fVxuXHRcdFx0Ly8gUmVtb3ZlIGFueSB3aGl0ZXNwYWNlcywgY29udmVydCB0byB1cHBlciBjYXNlXG5cdFx0XHRhZGRyZXNzID0gYWRkcmVzcy50b1VwcGVyQ2FzZSgpO1xuXHRcdFx0Ly8gRXhwYW5kIHplcm8gYWJicmV2aWF0aW9uc1xuXHRcdFx0Y29uc3QgYWJicmV2UG9zID0gYWRkcmVzcy5pbmRleE9mKCc6OicpO1xuXHRcdFx0aWYgKGFiYnJldlBvcyA+IC0xKSB7XG5cdFx0XHRcdC8vIFdlIGtub3cgdGhpcyBpcyB2YWxpZCBJUHY2LiBGaW5kIHRoZSBsYXN0IGluZGV4IG9mIHRoZVxuXHRcdFx0XHQvLyBhZGRyZXNzIGJlZm9yZSBhbnkgQ0lEUiBudW1iZXIgKGUuZy4gXCJhOmI6Yzo6LzI0XCIpLlxuXHRcdFx0XHRjb25zdCBDSURSU3RhcnQgPSBhZGRyZXNzLmluZGV4T2YoJy8nKTtcblx0XHRcdFx0Y29uc3QgYWRkcmVzc0VuZCA9IENJRFJTdGFydCA9PT0gLTEgPyBhZGRyZXNzLmxlbmd0aCAtIDEgOiBDSURSU3RhcnQgLSAxO1xuXHRcdFx0XHQvLyBJZiB0aGUgJzo6JyBpcyBhdCB0aGUgYmVnaW5uaW5nLi4uXG5cdFx0XHRcdGxldCByZXBlYXQ7XG5cdFx0XHRcdGxldCBleHRyYTtcblx0XHRcdFx0bGV0IHBhZDtcblx0XHRcdFx0aWYgKGFiYnJldlBvcyA9PT0gMCkge1xuXHRcdFx0XHRcdHJlcGVhdCA9ICcwOic7XG5cdFx0XHRcdFx0ZXh0cmEgPSBhZGRyZXNzID09PSAnOjonID8gJzAnIDogJyc7IC8vIGZvciB0aGUgYWRkcmVzcyAnOjonXG5cdFx0XHRcdFx0cGFkID0gOTsgLy8gNysyIChkdWUgdG8gJzo6Jylcblx0XHRcdFx0XHQvLyBJZiB0aGUgJzo6JyBpcyBhdCB0aGUgZW5kLi4uXG5cdFx0XHRcdH0gZWxzZSBpZiAoYWJicmV2UG9zID09PSBhZGRyZXNzRW5kIC0gMSkge1xuXHRcdFx0XHRcdHJlcGVhdCA9ICc6MCc7XG5cdFx0XHRcdFx0ZXh0cmEgPSAnJztcblx0XHRcdFx0XHRwYWQgPSA5OyAvLyA3KzIgKGR1ZSB0byAnOjonKVxuXHRcdFx0XHRcdC8vIElmIHRoZSAnOjonIGlzIGluIHRoZSBtaWRkbGUuLi5cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXBlYXQgPSAnOjAnO1xuXHRcdFx0XHRcdGV4dHJhID0gJzonO1xuXHRcdFx0XHRcdHBhZCA9IDg7IC8vIDYrMiAoZHVlIHRvICc6OicpXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRsZXQgcmVwbGFjZW1lbnQgPSByZXBlYXQ7XG5cdFx0XHRcdHBhZCAtPSBhZGRyZXNzLnNwbGl0KCc6JykubGVuZ3RoIC0gMTtcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDE7IGkgPCBwYWQ7IGkrKykge1xuXHRcdFx0XHRcdHJlcGxhY2VtZW50ICs9IHJlcGVhdDtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXBsYWNlbWVudCArPSBleHRyYTtcblx0XHRcdFx0YWRkcmVzcyA9IGFkZHJlc3MucmVwbGFjZSgnOjonLCByZXBsYWNlbWVudCk7XG5cdFx0XHR9XG5cdFx0XHQvLyBSZW1vdmUgbGVhZGluZyB6ZXJvcyBmcm9tIGVhY2ggYmxvYyBhcyBuZWVkZWRcblx0XHRcdHJldHVybiBhZGRyZXNzLnJlcGxhY2UoLyhefDopMCsoWzAtOUEtRmEtZl17MSw0fSkvZywgJyQxJDInKTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIERldGVybWluZSBpZiB0aGUgZ2l2ZW4gSVAgYWRkcmVzcyBpcyBhIHJhbmdlLiAgSnVzdCBjb25qb2luc1xuXHRcdCAqIGBtdy51dGlsLmlzSVBBZGRyZXNzYCB3aXRoIGFuZCB3aXRob3V0IHRoZSBgYWxsb3dCbG9ja2Agb3B0aW9uLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGlwXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW59IC0gVHJ1ZSBpZiBnaXZlbiBhIHZhbGlkIElQIGFkZHJlc3MgcmFuZ2UsIGZhbHNlIG90aGVyd2lzZS5cblx0XHQgKi9cblx0XHRpc1JhbmdlOiAoaXApID0+IHtcblx0XHRcdHJldHVybiBtdy51dGlsLmlzSVBBZGRyZXNzKGlwLCB0cnVlKSAmJiAhbXcudXRpbC5pc0lQQWRkcmVzcyhpcCk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBDaGVjayB0aGF0IGFuIElQIHJhbmdlIGlzIHdpdGhpbiB0aGUgQ0lEUiBsaW1pdHMuICBNb3N0IGxpa2VseSB0byBiZSB1c2VmdWxcblx0XHQgKiBpbiBjb25qdW5jdGlvbiB3aXRoIGB3Z1JlbGV2YW50VXNlck5hbWVgLiAgQ0lEUiBsaW1pdHMgYXJlIGhhcmRjb2RlZCBhcyAvMTZcblx0XHQgKiBmb3IgSVB2NCBhbmQgLzMyIGZvciBJUHY2LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGlwXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW59IC0gVHJ1ZSBmb3IgdmFsaWQgcmFuZ2VzIHdpdGhpbiB0aGUgQ0lEUiBsaW1pdHMsXG5cdFx0ICogb3RoZXJ3aXNlIGZhbHNlIChyYW5nZXMgb3V0c2lkZSB0aGUgbGltaXQsIHNpbmdsZSBJUHMsIG5vbi1JUHMpLlxuXHRcdCAqL1xuXHRcdHZhbGlkQ0lEUjogKGlwKSA9PiB7XG5cdFx0XHRpZiAoTW9yZWJpdHMuaXAuaXNSYW5nZShpcCkpIHtcblx0XHRcdFx0Y29uc3Qgc3VibmV0ID0gTnVtYmVyLnBhcnNlSW50KGlwLm1hdGNoKC9cXC8oXFxkezEsM30pJC8pWzFdLCAxMCk7XG5cdFx0XHRcdGlmIChzdWJuZXQpIHtcblx0XHRcdFx0XHQvLyBTaG91bGQgYmUgcmVkdW5kYW50XG5cdFx0XHRcdFx0aWYgKG13LnV0aWwuaXNJUHY2QWRkcmVzcyhpcCwgdHJ1ZSkpIHtcblx0XHRcdFx0XHRcdGlmIChzdWJuZXQgPj0gMzIpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChzdWJuZXQgPj0gMTYpIHtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogR2V0IHRoZSAvNjQgc3VibmV0IGZvciBhbiBJUHY2IGFkZHJlc3MuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gaXB2NiAtIFRoZSBJUHY2IGFkZHJlc3MsIHdpdGggb3Igd2l0aG91dCBhIHN1Ym5ldC5cblx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbnxzdHJpbmd9IC0gRmFsc2UgaWYgbm90IElQdjYgb3IgYmlnZ2VyIHRoYW4gYSA2NCxcblx0XHQgKiBvdGhlcndpc2UgdGhlIChzYW5pdGl6ZWQpIC82NCBhZGRyZXNzLlxuXHRcdCAqL1xuXHRcdGdldDY0OiAoaXB2NikgPT4ge1xuXHRcdFx0aWYgKCFpcHY2IHx8ICFtdy51dGlsLmlzSVB2NkFkZHJlc3MoaXB2NiwgdHJ1ZSkpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3Qgc3VibmV0TWF0Y2ggPSBpcHY2Lm1hdGNoKC9cXC8oXFxkezEsM30pJC8pO1xuXHRcdFx0aWYgKHN1Ym5ldE1hdGNoICYmIE51bWJlci5wYXJzZUludChzdWJuZXRNYXRjaFsxXSwgMTApIDwgNjQpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0aXB2NiA9IE1vcmViaXRzLmlwLnNhbml0aXplSVB2NihpcHY2KTtcblx0XHRcdGNvbnN0IGlwUmVnZXggPSAvXigoPzpbMC05QS1GXXsxLDR9Oil7NH0pKD86WzAtOUEtRl17MSw0fTopezN9WzAtOUEtRl17MSw0fSg/OlxcL1xcZHsxLDN9KT8kLztcblx0XHRcdHJldHVybiBpcHY2LnJlcGxhY2UoaXBSZWdleCwgJyQxJy5jb25jYXQoJzA6MDowOjAvNjQnKSk7XG5cdFx0fSxcblx0fTtcblx0LyoqXG5cdCAqIEhlbHBlciBmdW5jdGlvbnMgdG8gbWFuaXB1bGF0ZSBzdHJpbmdzLlxuXHQgKlxuXHQgKiBAbmFtZXNwYWNlIE1vcmViaXRzLnN0cmluZ1xuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHNcblx0ICovXG5cdE1vcmViaXRzLnN0cmluZyA9IHtcblx0XHQvKipcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG5cdFx0ICogQHJldHVybnMge3N0cmluZ31cblx0XHQgKi9cblx0XHR0b1VwcGVyQ2FzZUZpcnN0Q2hhcjogKHN0cikgPT4ge1xuXHRcdFx0c3RyID0gc3RyLnRvU3RyaW5nKCk7XG5cdFx0XHRyZXR1cm4gc3RyLnNsaWNlKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG5cdFx0ICogQHJldHVybnMge3N0cmluZ31cblx0XHQgKi9cblx0XHR0b0xvd2VyQ2FzZUZpcnN0Q2hhcjogKHN0cikgPT4ge1xuXHRcdFx0c3RyID0gc3RyLnRvU3RyaW5nKCk7XG5cdFx0XHRyZXR1cm4gc3RyLnNsaWNlKDAsIDEpLnRvTG93ZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBHaXZlcyBhbiBhcnJheSBvZiBzdWJzdHJpbmdzIG9mIGBzdHJgIC0gc3RhcnRpbmcgd2l0aCBgc3RhcnRgIGFuZFxuXHRcdCAqIGVuZGluZyB3aXRoIGBlbmRgIC0gd2hpY2ggaXMgbm90IGluIGBza2lwbGlzdGAuICBJbnRlbmRlZCBmb3IgdXNlXG5cdFx0ICogb24gd2lraXRleHQgd2l0aCB0ZW1wbGF0ZXMgb3IgbGlua3MuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHN0YXJ0XG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGVuZFxuXHRcdCAqIEBwYXJhbSB7KHN0cmluZ1tdfHN0cmluZyl9IFtza2lwbGlzdF1cblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nW119XG5cdFx0ICogQHRocm93cyBJZiB0aGUgYHN0YXJ0YCBhbmQgYGVuZGAgc3RyaW5ncyBhcmVuJ3Qgb2YgdGhlIHNhbWUgbGVuZ3RoLlxuXHRcdCAqIEB0aHJvd3MgSWYgYHNraXBsaXN0YCBpc24ndCBhbiBhcnJheSBvciBzdHJpbmdcblx0XHQgKi9cblx0XHRzcGxpdFdlaWdodGVkQnlLZXlzOiAoc3RyLCBzdGFydCwgZW5kLCBza2lwbGlzdCkgPT4ge1xuXHRcdFx0aWYgKHN0YXJ0Lmxlbmd0aCAhPT0gZW5kLmxlbmd0aCkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ3N0YXJ0IG1hcmtlciBhbmQgZW5kIG1hcmtlciBtdXN0IGJlIG9mIHRoZSBzYW1lIGxlbmd0aCcpO1xuXHRcdFx0fVxuXHRcdFx0bGV0IGxldmVsID0gMDtcblx0XHRcdGxldCBpbml0aWFsID0gbnVsbDtcblx0XHRcdGNvbnN0IHJlc3VsdCA9IFtdO1xuXHRcdFx0aWYgKCFBcnJheS5pc0FycmF5KHNraXBsaXN0KSkge1xuXHRcdFx0XHRpZiAoc2tpcGxpc3QgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdHNraXBsaXN0ID0gW107XG5cdFx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIHNraXBsaXN0ID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRcdHNraXBsaXN0ID0gW3NraXBsaXN0XTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdub24tYXBwbGljYWJsZSBza2lwbGlzdCBwYXJhbWV0ZXInKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mIHNraXBsaXN0KSB7XG5cdFx0XHRcdFx0aWYgKHN0ci5zbGljZShpLCBpICsgZWxlbWVudC5sZW5ndGgpID09PSBlbGVtZW50KSB7XG5cdFx0XHRcdFx0XHRpICs9IGVsZW1lbnQubGVuZ3RoIC0gMTtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoc3RyLnNsaWNlKGksIGkgKyBzdGFydC5sZW5ndGgpID09PSBzdGFydCkge1xuXHRcdFx0XHRcdGlmIChpbml0aWFsID09PSBudWxsKSB7XG5cdFx0XHRcdFx0XHRpbml0aWFsID0gaTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0KytsZXZlbDtcblx0XHRcdFx0XHRpICs9IHN0YXJ0Lmxlbmd0aCAtIDE7XG5cdFx0XHRcdH0gZWxzZSBpZiAoc3RyLnNsaWNlKGksIGkgKyBlbmQubGVuZ3RoKSA9PT0gZW5kKSB7XG5cdFx0XHRcdFx0LS1sZXZlbDtcblx0XHRcdFx0XHRpICs9IGVuZC5sZW5ndGggLSAxO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghbGV2ZWwgJiYgaW5pdGlhbCAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdHJlc3VsdC5wdXNoKHN0ci5zbGljZShpbml0aWFsLCBpICsgMSkpO1xuXHRcdFx0XHRcdGluaXRpYWwgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogRm9ybWF0cyBmcmVlZm9ybSBcInJlYXNvblwiIChmcm9tIGEgdGV4dGFyZWEpIGZvciBkZWxldGlvbi9vdGhlclxuXHRcdCAqIHRlbXBsYXRlcyB0aGF0IGFyZSBnb2luZyB0byBiZSBzdWJzdGl0dXRlZCwgKGUuZy4gUFJPRCwgWEZELCBSUFApLlxuXHRcdCAqIEhhbmRsZXMgYHxgIG91dHNpZGUgYSBub3dpa2kgdGFnLlxuXHRcdCAqIE9wdGlvbmFsbHksIGFsc28gYWRkcyBhIHNpZ25hdHVyZSBpZiBub3QgcHJlc2VudCBhbHJlYWR5LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHN0clxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW2FkZFNpZ11cblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdGZvcm1hdFJlYXNvblRleHQ6IChzdHIsIGFkZFNpZykgPT4ge1xuXHRcdFx0bGV0IHJlYXNvbiA9IChzdHIgfHwgJycpLnRvU3RyaW5nKCkudHJpbSgpO1xuXHRcdFx0Y29uc3QgdW5iaW5kZXIgPSBuZXcgTW9yZWJpdHMudW5iaW5kZXIocmVhc29uKTtcblx0XHRcdHVuYmluZGVyLnVuYmluZCgnPG5vJy5jb25jYXQoJ3dpa2knLCAnPicpLCAnPC9ubycuY29uY2F0KCd3aWtpJywgJz4nKSk7XG5cdFx0XHR1bmJpbmRlci5jb250ZW50ID0gdW5iaW5kZXIuY29udGVudC5yZXBsYWNlKC9cXHwvZywgJ3t7Jy5jb25jYXQoJ3N1YnN0OicsICchfX0nKSk7XG5cdFx0XHRyZWFzb24gPSB1bmJpbmRlci5yZWJpbmQoKTtcblx0XHRcdGlmIChhZGRTaWcpIHtcblx0XHRcdFx0Y29uc3Qgc2lnID0gJ35+Jy5jb25jYXQoJ35+Jyk7XG5cdFx0XHRcdGNvbnN0IHNpZ0luZGV4ID0gcmVhc29uLmxhc3RJbmRleE9mKHNpZyk7XG5cdFx0XHRcdGlmIChzaWdJbmRleCA9PT0gLTEgfHwgc2lnSW5kZXggIT09IHJlYXNvbi5sZW5ndGggLSBzaWcubGVuZ3RoKSB7XG5cdFx0XHRcdFx0cmVhc29uICs9IGAgJHtzaWd9YDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlYXNvbi50cmltKCk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBGb3JtYXRzIGEgXCJyZWFzb25cIiAoZnJvbSBhIHRleHRhcmVhKSBmb3IgaW5jbHVzaW9uIGluIGEgdXNlcnNwYWNlXG5cdFx0ICogbG9nLiAgUmVwbGFjZXMgbmV3bGluZXMgd2l0aCB7e1BifX0sIGFuZCBhZGRzIGFuIGV4dHJhIGAjYCBiZWZvcmVcblx0XHQgKiBsaXN0IGl0ZW1zIGZvciBwcm9wZXIgZm9ybWF0dGluZy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdGZvcm1hdFJlYXNvbkZvckxvZzogKHN0cikgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0c3RyXG5cdFx0XHRcdFx0Ly8gaGFuZGxlIGxpbmUgYnJlYWtzLCB3aGljaCBvdGhlcndpc2UgYnJlYWsgbnVtYmVyaW5nXG5cdFx0XHRcdFx0LnJlcGxhY2UoL1xcbisvZywgJ3t7cGJ9fScpXG5cdFx0XHRcdFx0Ly8gcHV0IGFuIGV4dHJhICMgaW4gZnJvbnQgYmVmb3JlIGJ1bGxldGVkIG9yIG51bWJlcmVkIGxpc3QgaXRlbXNcblx0XHRcdFx0XHQucmVwbGFjZSgvXigjKykvZ20sICcjJDEnKVxuXHRcdFx0XHRcdC5yZXBsYWNlKC9eKFxcKispL2dtLCAnIyQxJylcblx0XHRcdCk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBMaWtlIGBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2UoKWAsIGJ1dCBlc2NhcGVzIGFueSBkb2xsYXIgc2lnbnMgaW5cblx0XHQgKiB0aGUgcmVwbGFjZW1lbnQgc3RyaW5nLiAgVXNlZnVsIHdoZW4gdGhlIHRoZSByZXBsYWNlbWVudCBzdHJpbmcgaXNcblx0XHQgKiBhcmJpdHJhcnksIHN1Y2ggYXMgYSB1c2VybmFtZSBvciBmcmVlZm9ybSB1c2VyIGlucHV0LCBhbmQgY291bGRcblx0XHQgKiBjb250YWluIGRvbGxhciBzaWducy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgLSBUZXh0IGluIHdoaWNoIHRvIHJlcGxhY2UuXG5cdFx0ICogQHBhcmFtIHsoc3RyaW5nfFJlZ0V4cCl9IHBhdHRlcm5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gcmVwbGFjZW1lbnRcblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHNhZmVSZXBsYWNlOiAoc3RyaW5nLCBwYXR0ZXJuLCByZXBsYWNlbWVudCkgPT4ge1xuXHRcdFx0cmV0dXJuIHN0cmluZy5yZXBsYWNlKHBhdHRlcm4sIHJlcGxhY2VtZW50LnJlcGxhY2UoL1xcJC9nLCAnJCQkJCcpKTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIERldGVybWluZSBpZiB0aGUgdXNlci1wcm92aWRlZCBleHBpcmF0aW9uIHdpbGwgYmUgY29uc2lkZXJlZCBhblxuXHRcdCAqIGluZmluaXRlLWxlbmd0aCBieSBNVy5cblx0XHQgKlxuXHRcdCAqIEBzZWUge0BsaW5rIGh0dHBzOi8vcGhhYnJpY2F0b3Iud2lraW1lZGlhLm9yZy9UNjg2NDZ9XG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gZXhwaXJ5XG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdFx0ICovXG5cdFx0aXNJbmZpbml0eTogKGV4cGlyeSkgPT4ge1xuXHRcdFx0cmV0dXJuIFsnaW5kZWZpbml0ZScsICdpbmZpbml0eScsICdpbmZpbml0ZScsICduZXZlciddLmluY2x1ZGVzKGV4cGlyeSk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBFc2NhcGVzIGEgc3RyaW5nIHRvIGJlIHVzZWQgaW4gYSBSZWdFeHAsIHJlcGxhY2luZyBzcGFjZXMgYW5kXG5cdFx0ICogdW5kZXJzY29yZXMgd2l0aCBgW18gXWAgYXMgdGhleSBhcmUgb2Z0ZW4gZXF1aXZhbGVudC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gU3RyaW5nIHRvIGJlIGVzY2FwZWQuXG5cdFx0ICogQHJldHVybnMge3N0cmluZ30gLSBUaGUgZXNjYXBlZCB0ZXh0LlxuXHRcdCAqL1xuXHRcdGVzY2FwZVJlZ0V4cDogKHRleHQpID0+IHtcblx0XHRcdHJldHVybiBtdy51dGlsLmVzY2FwZVJlZ0V4cCh0ZXh0KS5yZXBsYWNlKC8gfF8vZywgJ1tfIF0nKTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIGZvcm1hdFRpbWVcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7Kn0gdGltZSBUaGUgc3RyaW5nIHRvIGZvcmFtdFxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0Zm9ybWF0VGltZTogKHRpbWUpID0+IHtcblx0XHRcdGxldCBtO1xuXHRcdFx0aWYgKChtID0gdGltZS5tYXRjaCgvXlxccyooXFxkKylcXHMqc2VjKG9uZCk/cz9cXHMqJC8pKSAhPT0gbnVsbCkge1xuXHRcdFx0XHRyZXR1cm4gYCR7bVsxXX3np5JgO1xuXHRcdFx0fVxuXHRcdFx0aWYgKChtID0gdGltZS5tYXRjaCgvXlxccyooXFxkKylcXHMqbWluKHV0ZSk/cz9cXHMqJC8pKSAhPT0gbnVsbCkge1xuXHRcdFx0XHRyZXR1cm4gYCR7bVsxXX3liIZgO1xuXHRcdFx0fVxuXHRcdFx0aWYgKChtID0gdGltZS5tYXRjaCgvXlxccyooXFxkKylcXHMqaG91cnM/XFxzKiQvKSkgIT09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuIG1bMV0gKyB3Z1VMUygn5bCP5pe2JywgJ+Wwj+aZgicpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKChtID0gdGltZS5tYXRjaCgvXlxccyooXFxkKylcXHMqZGF5cz9cXHMqJC8pKSAhPT0gbnVsbCkge1xuXHRcdFx0XHRyZXR1cm4gYCR7bVsxXX3lpKlgO1xuXHRcdFx0fVxuXHRcdFx0aWYgKChtID0gdGltZS5tYXRjaCgvXlxccyooXFxkKylcXHMqd2Vla3M/XFxzKiQvKSkgIT09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuIG1bMV0gKyB3Z1VMUygn5ZGoJywgJ+mAsScpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKChtID0gdGltZS5tYXRjaCgvXlxccyooXFxkKylcXHMqbW9udGhzP1xccyokLykpICE9PSBudWxsKSB7XG5cdFx0XHRcdHJldHVybiBtWzFdICsgd2dVTFMoJ+S4quaciCcsICflgIvmnIgnKTtcblx0XHRcdH1cblx0XHRcdGlmICgobSA9IHRpbWUubWF0Y2goL15cXHMqKFxcZCspXFxzKnllYXJzP1xccyokLykpICE9PSBudWxsKSB7XG5cdFx0XHRcdHJldHVybiBgJHttWzFdfeW5tGA7XG5cdFx0XHR9XG5cdFx0XHRpZiAoTW9yZWJpdHMuc3RyaW5nLmlzSW5maW5pdHkodGltZS50cmltKCkpKSB7XG5cdFx0XHRcdHJldHVybiB3Z1VMUygn5peg6ZmQ5pyfJywgJ+eEoemZkOacnycpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRpbWU7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBBcHBlbmQgcHVuY3R1YXRpb24gdG8gYSBzdHJpbmcgd2hlbiBpdCdzIG1pc3Npbmdcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gcHVuY3R1YXRpb25cblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdGFwcGVuZFB1bmN0dWF0aW9uOiAoc3RyLCBwdW5jdHVhdGlvbikgPT4ge1xuXHRcdFx0aWYgKHB1bmN0dWF0aW9uID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0cHVuY3R1YXRpb24gPSAn44CCJztcblx0XHRcdH1cblx0XHRcdGlmIChzdHIuc2VhcmNoKC9bLj8hO+OAgu+8n++8ge+8m10kLykgPT09IC0xKSB7XG5cdFx0XHRcdHN0ciArPSBwdW5jdHVhdGlvbjtcblx0XHRcdH1cblx0XHRcdHJldHVybiBzdHI7XG5cdFx0fSxcblx0fTtcblx0LyoqXG5cdCAqIEhlbHBlciBmdW5jdGlvbnMgdG8gbWFuaXB1bGF0ZSBhcnJheXMuXG5cdCAqXG5cdCAqIEBuYW1lc3BhY2UgTW9yZWJpdHMuYXJyYXlcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzXG5cdCAqL1xuXHRNb3JlYml0cy5hcnJheSA9IHtcblx0XHQvKipcblx0XHQgKiBSZW1vdmUgZHVwbGljYXRlZCBpdGVtcyBmcm9tIGFuIGFycmF5LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtBcnJheX0gYXJyXG5cdFx0ICogQHJldHVybnMge0FycmF5fSBBIGNvcHkgb2YgdGhlIGFycmF5IHdpdGggZHVwbGljYXRlcyByZW1vdmVkLlxuXHRcdCAqIEB0aHJvd3MgV2hlbiBwcm92aWRlZCBhIG5vbi1hcnJheS5cblx0XHQgKi9cblx0XHR1bmlxOiAoYXJyKSA9PiB7XG5cdFx0XHRpZiAoIUFycmF5LmlzQXJyYXkoYXJyKSkge1xuXHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdBIG5vbi1hcnJheSBvYmplY3QgcGFzc2VkIHRvIE1vcmViaXRzLmFycmF5LnVuaXEnKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBhcnIuZmlsdGVyKChpdGVtLCBpZHgpID0+IHtcblx0XHRcdFx0cmV0dXJuIGFyci5pbmRleE9mKGl0ZW0pID09PSBpZHg7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIFJlbW92ZSBub24tZHVwbGljYXRlZCBpdGVtcyBmcm9tIGFuIGFycmF5LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtBcnJheX0gYXJyXG5cdFx0ICogQHJldHVybnMge0FycmF5fSBBIGNvcHkgb2YgdGhlIGFycmF5IHdpdGggdGhlIGZpcnN0IGluc3RhbmNlIG9mIGVhY2ggdmFsdWVcblx0XHQgKiByZW1vdmVkOyBzdWJzZXF1ZW50IGluc3RhbmNlcyBvZiB0aG9zZSB2YWx1ZXMgKGR1cGxpY2F0ZXMpIHJlbWFpbi5cblx0XHQgKiBAdGhyb3dzIFdoZW4gcHJvdmlkZWQgYSBub24tYXJyYXkuXG5cdFx0ICovXG5cdFx0ZHVwczogKGFycikgPT4ge1xuXHRcdFx0aWYgKCFBcnJheS5pc0FycmF5KGFycikpIHtcblx0XHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQSBub24tYXJyYXkgb2JqZWN0IHBhc3NlZCB0byBNb3JlYml0cy5hcnJheS5kdXBzJyk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gYXJyLmZpbHRlcigoaXRlbSwgaWR4KSA9PiB7XG5cdFx0XHRcdHJldHVybiBhcnIuaW5kZXhPZihpdGVtKSAhPT0gaWR4O1xuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBCcmVhayB1cCBhbiBhcnJheSBpbnRvIHNtYWxsZXIgYXJyYXlzLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtBcnJheX0gYXJyXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IHNpemUgLSBTaXplIG9mIGVhY2ggY2h1bmsgKGV4Y2VwdCB0aGUgbGFzdCwgd2hpY2ggY291bGQgYmUgZGlmZmVyZW50KS5cblx0XHQgKiBAcmV0dXJucyB7QXJyYXlbXX0gQW4gYXJyYXkgY29udGFpbmluZyB0aGUgc21hbGxlciwgY2h1bmtlZCBhcnJheXMuXG5cdFx0ICogQHRocm93cyBXaGVuIHByb3ZpZGVkIGEgbm9uLWFycmF5LlxuXHRcdCAqL1xuXHRcdGNodW5rOiAoYXJyLCBzaXplKSA9PiB7XG5cdFx0XHRpZiAoIUFycmF5LmlzQXJyYXkoYXJyKSkge1xuXHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdBIG5vbi1hcnJheSBvYmplY3QgcGFzc2VkIHRvIE1vcmViaXRzLmFycmF5LmNodW5rJyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodHlwZW9mIHNpemUgIT09ICdudW1iZXInIHx8IHNpemUgPD0gMCkge1xuXHRcdFx0XHQvLyBwcmV0dHkgaW1wb3NzaWJsZSB0byBkbyBhbnl0aGluZyA6KVxuXHRcdFx0XHRyZXR1cm4gW2Fycl07IC8vIHdlIHJldHVybiBhbiBhcnJheSBjb25zaXN0aW5nIG9mIHRoaXMgYXJyYXkuXG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IG51bUNodW5rcyA9IE1hdGguY2VpbChhcnIubGVuZ3RoIC8gc2l6ZSk7XG5cdFx0XHRjb25zdCByZXN1bHQgPSBBcnJheS5mcm9tKHtcblx0XHRcdFx0bGVuZ3RoOiBudW1DaHVua3MsXG5cdFx0XHR9KTtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ2h1bmtzOyBpKyspIHtcblx0XHRcdFx0cmVzdWx0W2ldID0gYXJyLnNsaWNlKGkgKiBzaXplLCAoaSArIDEpICogc2l6ZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH0sXG5cdH07XG5cdC8qKlxuXHQgKiBVdGlsaXRpZXMgdG8gZW5oYW5jZSBzZWxlY3QyIG1lbnVzLiBTZWUgdHdpbmtsZXdhcm4sIHR3aW5rbGVibG9ja1xuXHQgKiBmb3Igc2FtcGxlIHVzYWdlcy5cblx0ICpcblx0ICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9zZWxlY3QyLm9yZy99XG5cdCAqXG5cdCAqIEBuYW1lc3BhY2UgTW9yZWJpdHMuc2VsZWN0MlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHNcblx0ICogQHJlcXVpcmVzIGpxdWVyeS5zZWxlY3QyXG5cdCAqL1xuXHRNb3JlYml0cy5zZWxlY3QyID0ge1xuXHRcdG1hdGNoZXJzOiB7XG5cdFx0XHQvKipcblx0XHRcdCAqIEN1c3RvbSBtYXRjaGVyIGluIHdoaWNoIGlmIHRoZSBvcHRncm91cCBuYW1lIG1hdGNoZXMsIGFsbCBvcHRpb25zIGluIHRoYXRcblx0XHRcdCAqIGdyb3VwIGFyZSBzaG93biwgbGlrZSBpbiBqcXVlcnkuY2hvc2VuLlxuXHRcdFx0ICpcblx0XHRcdCAqIEBwYXJhbSB7Kn0gcGFyYW1zXG5cdFx0XHQgKiBAcGFyYW0geyp9IGRhdGFcblx0XHRcdCAqL1xuXHRcdFx0b3B0Z3JvdXBGdWxsOiAocGFyYW1zLCBkYXRhKSA9PiB7XG5cdFx0XHRcdGNvbnN0IG9yaWdpbmFsTWF0Y2hlciA9ICQuZm4uc2VsZWN0Mi5kZWZhdWx0cy5kZWZhdWx0cy5tYXRjaGVyO1xuXHRcdFx0XHRjb25zdCByZXN1bHQgPSBvcmlnaW5hbE1hdGNoZXIocGFyYW1zLCBkYXRhKTtcblx0XHRcdFx0aWYgKHJlc3VsdCAmJiBwYXJhbXMudGVybSAmJiBkYXRhLnRleHQudG9VcHBlckNhc2UoKS5pbmNsdWRlcyhwYXJhbXMudGVybS50b1VwcGVyQ2FzZSgpKSkge1xuXHRcdFx0XHRcdHJlc3VsdC5jaGlsZHJlbiA9IGRhdGEuY2hpbGRyZW47XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdH0sXG5cdFx0XHQvKipcblx0XHRcdCAqIEN1c3RvbSBtYXRjaGVyIHRoYXQgbWF0Y2hlcyBmcm9tIHRoZSBiZWdpbm5pbmcgb2Ygd29yZHMgb25seS5cblx0XHRcdCAqXG5cdFx0XHQgKiBAcGFyYW0geyp9IHBhcmFtc1xuXHRcdFx0ICogQHBhcmFtIHsqfSBkYXRhXG5cdFx0XHQgKi9cblx0XHRcdHdvcmRCZWdpbm5pbmc6IChwYXJhbXMsIGRhdGEpID0+IHtcblx0XHRcdFx0Y29uc3Qgb3JpZ2luYWxNYXRjaGVyID0gJC5mbi5zZWxlY3QyLmRlZmF1bHRzLmRlZmF1bHRzLm1hdGNoZXI7XG5cdFx0XHRcdGNvbnN0IHJlc3VsdCA9IG9yaWdpbmFsTWF0Y2hlcihwYXJhbXMsIGRhdGEpO1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0IXBhcmFtcy50ZXJtIHx8XG5cdFx0XHRcdFx0KHJlc3VsdCAmJiBuZXcgUmVnRXhwKGBcXFxcYiR7bXcudXRpbC5lc2NhcGVSZWdFeHAocGFyYW1zLnRlcm0pfWAsICdpJykudGVzdChyZXN1bHQudGV4dCkpXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogVW5kZXJsaW5lIG1hdGNoZWQgcGFydCBvZiBvcHRpb25zLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHsqfSBkYXRhXG5cdFx0ICovXG5cdFx0aGlnaGxpZ2h0U2VhcmNoTWF0Y2hlczogKGRhdGEpID0+IHtcblx0XHRcdGNvbnN0IHNlYXJjaFRlcm0gPSBNb3JlYml0cy5zZWxlY3QyU2VhcmNoUXVlcnk7XG5cdFx0XHRpZiAoIXNlYXJjaFRlcm0gfHwgZGF0YS5sb2FkaW5nKSB7XG5cdFx0XHRcdHJldHVybiBkYXRhLnRleHQ7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBpZHggPSBkYXRhLnRleHQudG9VcHBlckNhc2UoKS5pbmRleE9mKHNlYXJjaFRlcm0udG9VcHBlckNhc2UoKSk7XG5cdFx0XHRpZiAoaWR4IDwgMCkge1xuXHRcdFx0XHRyZXR1cm4gZGF0YS50ZXh0O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuICQoJzxzcGFuPicpLmFwcGVuZChcblx0XHRcdFx0ZGF0YS50ZXh0LnNsaWNlKDAsIGlkeCksXG5cdFx0XHRcdCQoJzxzcGFuPicpXG5cdFx0XHRcdFx0LmNzcygndGV4dC1kZWNvcmF0aW9uJywgJ3VuZGVybGluZScpXG5cdFx0XHRcdFx0LnRleHQoZGF0YS50ZXh0LnNsaWNlKGlkeCwgaWR4ICsgc2VhcmNoVGVybS5sZW5ndGgpKSxcblx0XHRcdFx0ZGF0YS50ZXh0LnNsaWNlKGlkeCArIHNlYXJjaFRlcm0ubGVuZ3RoKVxuXHRcdFx0KTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEludGVyY2VwdCBxdWVyeSBhcyBpdCBpcyBoYXBwZW5pbmcsIGZvciB1c2UgaW4gaGlnaGxpZ2h0U2VhcmNoTWF0Y2hlcy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7Kn0gcGFyYW1zXG5cdFx0ICovXG5cdFx0cXVlcnlJbnRlcmNlcHRvcjogKHBhcmFtcykgPT4ge1xuXHRcdFx0TW9yZWJpdHMuc2VsZWN0MlNlYXJjaFF1ZXJ5ID0gcGFyYW1zICYmIHBhcmFtcy50ZXJtO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogT3BlbiBkcm9wZG93biBhbmQgYmVnaW4gc2VhcmNoIHdoZW4gdGhlIGAuc2VsZWN0Mi1zZWxlY3Rpb25gIGhhc1xuXHRcdCAqIGZvY3VzIGFuZCBhIGtleSBpcyBwcmVzc2VkLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtLZXlib2FyZEV2ZW50fSBldlxuXHRcdCAqIEBzZWUge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9zZWxlY3QyL3NlbGVjdDIvaXNzdWVzLzMyNzkjaXNzdWVjb21tZW50LTQ0MjUyNDE0N31cblx0XHQgKi9cblx0XHRhdXRvU3RhcnQ6IChldikgPT4ge1xuXHRcdFx0aWYgKGV2LndoaWNoIDwgNDgpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0bGV0IHRhcmdldCA9ICQoZXYudGFyZ2V0KS5jbG9zZXN0KCcuc2VsZWN0Mi1jb250YWluZXInKTtcblx0XHRcdGlmICghdGFyZ2V0Lmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR0YXJnZXQgPSB0YXJnZXQucHJldigpO1xuXHRcdFx0dGFyZ2V0LnNlbGVjdDIoJ29wZW4nKTtcblx0XHRcdGNvbnN0IHNlYXJjaCA9IHRhcmdldC5kYXRhKCdzZWxlY3QyJykuZHJvcGRvd24uJHNlYXJjaCB8fCB0YXJnZXQuZGF0YSgnc2VsZWN0MicpLnNlbGVjdGlvbi4kc2VhcmNoO1xuXHRcdFx0Ly8gVXNlIERPTSAuZm9jdXMoKSB0byB3b3JrIGFyb3VuZCBhIGpRdWVyeSAzLjYuMCByZWdyZXNzaW9uIChodHRwczovL2dpdGh1Yi5jb20vc2VsZWN0Mi9zZWxlY3QyL2lzc3Vlcy81OTkzKVxuXHRcdFx0c2VhcmNoWzBdLmZvY3VzKCk7XG5cdFx0fSxcblx0fTtcblx0LyoqXG5cdCAqIFRlbXBvcmFyaWx5IGhpZGUgYSBwYXJ0IG9mIGEgc3RyaW5nIHdoaWxlIHByb2Nlc3NpbmcgdGhlIHJlc3Qgb2YgaXQuXG5cdCAqIFVzZWQgYnkge0BsaW5rIE1vcmViaXRzLndpa2l0ZXh0LnBhZ2UjY29tbWVudE91dEltYWdlfE1vcmViaXRzLndpa2l0ZXh0LnBhZ2UuY29tbWVudE91dEltYWdlfS5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzXG5cdCAqIEBjbGFzc1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIC0gVGhlIGluaXRpYWwgdGV4dCB0byBwcm9jZXNzLlxuXHQgKiBAZXhhbXBsZSBjb25zdCB1ID0gbmV3IE1vcmViaXRzLnVuYmluZGVyKCdIZWxsbyB3b3JsZCA8IS0tIHdvcmxkIC0tPiB3b3JsZCcpO1xuXHQgKiB1LnVuYmluZCgnPCEtLScsICctLT4nKTsgLy8gdGV4dCBpbnNpZGUgY29tbWVudCByZW1haW5zIGludGFjdFxuXHQgKiB1LmNvbnRlbnQgPSB1LmNvbnRlbnQucmVwbGFjZSgvd29ybGQvZywgJ2VhcnRoJyk7XG5cdCAqIHUucmViaW5kKCk7IC8vIGdpdmVzICdIZWxsbyBlYXJ0aCA8IS0tIHdvcmxkIC0tPiBlYXJ0aCdcblx0ICovXG5cdE1vcmViaXRzLnVuYmluZGVyID0gZnVuY3Rpb24gKHN0cmluZykge1xuXHRcdGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignbm90IGEgc3RyaW5nJyk7XG5cdFx0fVxuXHRcdC8qKiBUaGUgdGV4dCBiZWluZyBwcm9jZXNzZWQuICovXG5cdFx0dGhpcy5jb250ZW50ID0gc3RyaW5nO1xuXHRcdHRoaXMuY291bnRlciA9IDA7XG5cdFx0dGhpcy5oaXN0b3J5ID0ge307XG5cdFx0dGhpcy5wcmVmaXggPSBgJVVOSVE6OiR7TWF0aC5yYW5kb20oKX06OmA7XG5cdFx0dGhpcy5wb3N0Zml4ID0gJzo6VU5JUSUnO1xuXHR9O1xuXHRNb3JlYml0cy51bmJpbmRlci5wcm90b3R5cGUgPSB7XG5cdFx0LyoqXG5cdFx0ICogSGlkZSB0aGUgcmVnaW9uIGVuY2Fwc3VsYXRlZCBieSB0aGUgYHByZWZpeGAgYW5kIGBwb3N0Zml4YCBmcm9tXG5cdFx0ICogc3RyaW5nIHByb2Nlc3NpbmcuICBgcHJlZml4YCBhbmQgYHBvc3RmaXhgIHdpbGwgYmUgdXNlZCBpbiBhXG5cdFx0ICogUmVnRXhwLCBzbyBpdGVtcyB0aGF0IG5lZWQgZXNjYXBpbmcgc2hvdWxkIGJlIHVzZSBgXFxcXGAuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gcHJlZml4XG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHBvc3RmaXhcblx0XHQgKiBAdGhyb3dzIElmIGVpdGhlciBgcHJlZml4YCBvciBgcG9zdGZpeGAgaXMgbWlzc2luZy5cblx0XHQgKi9cblx0XHR1bmJpbmQocHJlZml4LCBwb3N0Zml4KSB7XG5cdFx0XHRpZiAoIXByZWZpeCB8fCAhcG9zdGZpeCkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0JvdGggcHJlZml4IGFuZCBwb3N0Zml4IG11c3QgYmUgcHJvdmlkZWQnKTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHJlID0gbmV3IFJlZ0V4cChgJHtwcmVmaXh9KFtcXFxcc1xcXFxTXSo/KSR7cG9zdGZpeH1gLCAnZycpO1xuXHRcdFx0dGhpcy5jb250ZW50ID0gdGhpcy5jb250ZW50LnJlcGxhY2UocmUsIE1vcmViaXRzLnVuYmluZGVyLmdldENhbGxiYWNrKHRoaXMpKTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIFJlc3RvcmUgdGhlIGhpZGRlbiBwb3J0aW9uIG9mIHRoZSBgY29udGVudGAgc3RyaW5nLlxuXHRcdCAqXG5cdFx0ICogQHJldHVybnMge3N0cmluZ30gVGhlIHByb2Nlc3NlZCBvdXRwdXQuXG5cdFx0ICovXG5cdFx0cmViaW5kKCkge1xuXHRcdFx0bGV0IHtjb250ZW50fSA9IHRoaXM7XG5cdFx0XHRmb3IgKGNvbnN0IGN1cnJlbnQgaW4gdGhpcy5oaXN0b3J5KSB7XG5cdFx0XHRcdGlmICghT2JqZWN0Lmhhc093bih0aGlzLmhpc3RvcnksIGN1cnJlbnQpKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29udGVudCA9IGNvbnRlbnQucmVwbGFjZShjdXJyZW50LCB0aGlzLmhpc3RvcnlbY3VycmVudF0pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0fSxcblx0XHRwcmVmaXg6IG51bGwsXG5cdFx0Ly8gJVVOSVE6OjAuNTk1NTk4MTY0NDkzODMyNDo6XG5cdFx0cG9zdGZpeDogbnVsbCxcblx0XHQvLyA6OlVOSVElXG5cdFx0Y29udGVudDogbnVsbCxcblx0XHQvLyBzdHJpbmdcblx0XHRjb3VudGVyOiBudWxsLFxuXHRcdC8vIDArK1xuXHRcdGhpc3Rvcnk6IG51bGwsIC8vIHt9XG5cdH07XG5cdC8qKlxuXHQgKiBAcGFyYW0ge3R5cGVvZiBNb3JlYml0c30gc2VsZlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMudW5iaW5kZXJcblx0ICovXG5cdE1vcmViaXRzLnVuYmluZGVyLmdldENhbGxiYWNrID0gKHNlbGYpID0+IHtcblx0XHRyZXR1cm4gKG1hdGNoKSA9PiB7XG5cdFx0XHRjb25zdCBjdXJyZW50ID0gc2VsZi5wcmVmaXggKyBzZWxmLmNvdW50ZXIgKyBzZWxmLnBvc3RmaXg7XG5cdFx0XHRzZWxmLmhpc3RvcnlbY3VycmVudF0gPSBtYXRjaDtcblx0XHRcdCsrc2VsZi5jb3VudGVyO1xuXHRcdFx0cmV0dXJuIGN1cnJlbnQ7XG5cdFx0fTtcblx0fTtcblx0LyogKioqKioqKioqKioqKioqKiBNb3JlYml0cy5kYXRlICoqKioqKioqKioqKioqKiogKi9cblx0LyoqXG5cdCAqIENyZWF0ZSBhIGRhdGUgb2JqZWN0IHdpdGggZW5oYW5jZWQgcHJvY2Vzc2luZyBjYXBhYmlsaXRpZXMsIGEgbGFcblx0ICoge0BsaW5rIGh0dHBzOi8vbW9tZW50anMuY29tL3xtb21lbnQuanN9LiBNZWRpYVdpa2kgdGltZXN0YW1wIGZvcm1hdCBpcyBhbHNvXG5cdCAqIGFjY2VwdGFibGUsIGluIGFkZGl0aW9uIHRvIGV2ZXJ5dGhpbmcgdGhhdCBKUyBEYXRlKCkgYWNjZXB0cy5cblx0ICpcblx0ICogQHBhcmFtIHsuLi5hbnl9IGFyZ3Ncblx0ICogQG1lbWJlcm9mIE1vcmViaXRzXG5cdCAqIEBjbGFzc1xuXHQgKi9cblx0TW9yZWJpdHMuZGF0ZSA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XG5cdFx0Ly8gQ2hlY2sgTWVkaWFXaWtpIGZvcm1hdHNcblx0XHQvLyBNdXN0IGJlIGZpcnN0IHNpbmNlIGZpcmVmb3ggZXJyb25lb3VzbHkgYWNjZXB0cyB0aGUgdGltZXN0YW1wXG5cdFx0Ly8gZm9ybWF0LCBzYW5zIHRpbWV6b25lIChTZWUgYWxzbzogIzkyMSwgIzkzNiwgIzExNzQsICMxMTg3KSwgYW5kIHRoZVxuXHRcdC8vIDE0LWRpZ2l0IHN0cmluZyB3aWxsIGJlIGludGVycHJldGVkIGRpZmZlcmVudGx5LlxuXHRcdGlmIChhcmdzLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0Y29uc3QgW3BhcmFtXSA9IGFyZ3M7XG5cdFx0XHRpZiAoL15cXGR7MTR9JC8udGVzdChwYXJhbSkpIHtcblx0XHRcdFx0Ly8gWVlZWU1NRERISG1tc3Ncblx0XHRcdFx0Y29uc3QgZGlnaXRNYXRjaCA9IC8oXFxkezR9KShcXGR7Mn0pKFxcZHsyfSkoXFxkezJ9KShcXGR7Mn0pKFxcZHsyfSkvLmV4ZWMocGFyYW0pO1xuXHRcdFx0XHRpZiAoZGlnaXRNYXRjaCkge1xuXHRcdFx0XHRcdC8vIC4uLi4uIHllYXIgLi4uIG1vbnRoIC4uIGRhdGUgLi4uIGhvdXIgLi4uLiBtaW51dGUgLi4uLi4gc2Vjb25kXG5cdFx0XHRcdFx0dGhpcy5fZCA9IG5ldyBEYXRlKFxuXHRcdFx0XHRcdFx0UmVmbGVjdC5hcHBseShEYXRlLlVUQywgbnVsbCwgW1xuXHRcdFx0XHRcdFx0XHRkaWdpdE1hdGNoWzFdLFxuXHRcdFx0XHRcdFx0XHRkaWdpdE1hdGNoWzJdIC0gMSxcblx0XHRcdFx0XHRcdFx0ZGlnaXRNYXRjaFszXSxcblx0XHRcdFx0XHRcdFx0ZGlnaXRNYXRjaFs0XSxcblx0XHRcdFx0XHRcdFx0ZGlnaXRNYXRjaFs1XSxcblx0XHRcdFx0XHRcdFx0ZGlnaXRNYXRjaFs2XSxcblx0XHRcdFx0XHRcdF0pXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdC8vIFdpa2l0ZXh0IHNpZ25hdHVyZSB0aW1lc3RhbXBcblx0XHRcdFx0Y29uc3QgZGF0ZVBhcnRzID0gTW9yZWJpdHMubDEwbi5zaWduYXR1cmVUaW1lc3RhbXBGb3JtYXQocGFyYW0pO1xuXHRcdFx0XHRpZiAoZGF0ZVBhcnRzKSB7XG5cdFx0XHRcdFx0dGhpcy5fZCA9IG5ldyBEYXRlKERhdGUuVVRDLmFwcGx5KG51bGwsIGRhdGVQYXJ0cykpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICghdGhpcy5fZCkge1xuXHRcdFx0Ly8gVHJ5IHN0YW5kYXJkIGRhdGVcblx0XHRcdHRoaXMuX2QgPSBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KERhdGUsIFtEYXRlLCAuLi4oQXJyYXkuaXNBcnJheShhcmdzKSA/IGFyZ3MgOiBbYXJnc10pXSkpKCk7XG5cdFx0fVxuXHRcdC8vIFN0aWxsIG5vP1xuXHRcdGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcblx0XHRcdG13LmxvZy53YXJuKCdJbnZhbGlkIE1vcmViaXRzLmRhdGUgaW5pdGlhbGlzYXRpb246JywgYXJncyk7XG5cdFx0fVxuXHR9O1xuXHQvKipcblx0ICogTG9jYWxpemVkIHN0cmluZ3MgZm9yIGRhdGUgcHJvY2Vzc2luZy5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLmRhdGVcblx0ICogQHR5cGUge29iamVjdC48c3RyaW5nLCBzdHJpbmc+fVxuXHQgKiBAcHJvcGVydHkge3N0cmluZ1tdfSBtb250aHNcblx0ICogQHByb3BlcnR5IHtzdHJpbmdbXX0gbW9udGhzU2hvcnRcblx0ICogQHByb3BlcnR5IHtzdHJpbmdbXX0gZGF5c1xuXHQgKiBAcHJvcGVydHkge3N0cmluZ1tdfSBkYXlzU2hvcnRcblx0ICogQHByb3BlcnR5IHtvYmplY3QuPHN0cmluZywgc3RyaW5nPn0gcmVsYXRpdmVUaW1lc1xuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0TW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhID0ge1xuXHRcdC8vIG1lc3NhZ2UgbmFtZXMgaGVyZSBjb3JyZXNwb25kIHRvIE1lZGlhV2lraSBtZXNzYWdlIG5hbWVzXG5cdFx0Ly8gTm8gaTE4biBhdCB0aGlzIHRpbWVcblx0XHRtb250aHM6IFsnMeaciCcsICcy5pyIJywgJzPmnIgnLCAnNOaciCcsICc15pyIJywgJzbmnIgnLCAnN+aciCcsICc45pyIJywgJznmnIgnLCAnMTDmnIgnLCAnMTHmnIgnLCAnMTLmnIgnXSxcblx0XHRtb250aHNTaG9ydDogWycx5pyIJywgJzLmnIgnLCAnM+aciCcsICc05pyIJywgJzXmnIgnLCAnNuaciCcsICc35pyIJywgJzjmnIgnLCAnOeaciCcsICcxMOaciCcsICcxMeaciCcsICcxMuaciCddLFxuXHRcdGRheXM6IFsn5pif5pyf5pelJywgJ+aYn+acn+S4gCcsICfmmJ/mnJ/kuownLCAn5pif5pyf5LiJJywgJ+aYn+acn+WbmycsICfmmJ/mnJ/kupQnLCAn5pif5pyf5YWtJ10sXG5cdFx0ZGF5c1Nob3J0OiBbJ+aXpScsICfkuIAnLCAn5LqMJywgJ+S4iScsICflm5snLCAn5LqUJywgJ+WFrSddLFxuXHRcdHJlbGF0aXZlVGltZXM6IHtcblx0XHRcdHRoaXNEYXk6ICdb5LuK5aSpXUEgaGg6bW0nLFxuXHRcdFx0cHJldkRheTogJ1vmmKjlpKldQSBoaDptbScsXG5cdFx0XHRuZXh0RGF5OiAnW+aYjuWkqV1BIGhoOm1tJyxcblx0XHRcdHRoaXNXZWVrOiAnZGRkZEEgaGg6bW0nLFxuXHRcdFx0cGFzdFdlZWs6ICdb5LiKXWRkZGRBIGhoOm1tJyxcblx0XHRcdG90aGVyOiAnWVlZWS1NTS1ERCcsXG5cdFx0fSxcblx0fTtcblx0LyoqXG5cdCAqIE1hcCB1bml0cyB3aXRoIGdldHRlci9zZXR0ZXIgZnVuY3Rpb24gbmFtZXMsIGZvciBgYWRkYCBhbmQgYHN1YnRyYWN0YFxuXHQgKiBtZXRob2RzLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMuZGF0ZVxuXHQgKiBAdHlwZSB7b2JqZWN0LjxzdHJpbmcsIHN0cmluZz59XG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBzZWNvbmRzXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBtaW51dGVzXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBob3Vyc1xuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gZGF5c1xuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gd2Vla3Ncblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IG1vbnRoc1xuXHQgKiBAcHJvcGVydHkge3N0cmluZ30geWVhcnNcblx0ICovXG5cdE1vcmViaXRzLmRhdGUudW5pdE1hcCA9IHtcblx0XHRzZWNvbmRzOiAnU2Vjb25kcycsXG5cdFx0bWludXRlczogJ01pbnV0ZXMnLFxuXHRcdGhvdXJzOiAnSG91cnMnLFxuXHRcdGRheXM6ICdEYXRlJyxcblx0XHR3ZWVrczogJ1dlZWsnLFxuXHRcdC8vIE5vdCBhIGZ1bmN0aW9uIGJ1dCBoYW5kbGVkIGluIGBhZGRgIHRocm91Z2ggY3VubmluZyB1c2Ugb2YgbXVsdGlwbGljYXRpb25cblx0XHRtb250aHM6ICdNb250aCcsXG5cdFx0eWVhcnM6ICdGdWxsWWVhcicsXG5cdH07XG5cdE1vcmViaXRzLmRhdGUucHJvdG90eXBlID0ge1xuXHRcdC8qKiBAcmV0dXJucyB7Ym9vbGVhbn0gKi9cblx0XHRpc1ZhbGlkKCkge1xuXHRcdFx0cmV0dXJuICFOdW1iZXIuaXNOYU4odGhpcy5nZXRUaW1lKCkpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHsoRGF0ZXxNb3JlYml0cy5kYXRlKX0gZGF0ZVxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHRcdCAqL1xuXHRcdGlzQmVmb3JlKGRhdGUpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFRpbWUoKSA8IGRhdGUuZ2V0VGltZSgpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHsoRGF0ZXxNb3JlYml0cy5kYXRlKX0gZGF0ZVxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHRcdCAqL1xuXHRcdGlzQWZ0ZXIoZGF0ZSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VGltZSgpID4gZGF0ZS5nZXRUaW1lKCk7XG5cdFx0fSxcblx0XHQvKiogQHJldHVybnMge3N0cmluZ30gKi9cblx0XHRnZXRVVENNb250aE5hbWUoKSB7XG5cdFx0XHRyZXR1cm4gTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLm1vbnRoc1t0aGlzLmdldFVUQ01vbnRoKCldO1xuXHRcdH0sXG5cdFx0LyoqIEByZXR1cm5zIHtzdHJpbmd9ICovXG5cdFx0Z2V0VVRDTW9udGhOYW1lQWJicmV2KCkge1xuXHRcdFx0cmV0dXJuIE1vcmViaXRzLmRhdGUubG9jYWxlRGF0YS5tb250aHNTaG9ydFt0aGlzLmdldFVUQ01vbnRoKCldO1xuXHRcdH0sXG5cdFx0LyoqIEByZXR1cm5zIHtzdHJpbmd9ICovXG5cdFx0Z2V0TW9udGhOYW1lKCkge1xuXHRcdFx0cmV0dXJuIE1vcmViaXRzLmRhdGUubG9jYWxlRGF0YS5tb250aHNbdGhpcy5nZXRNb250aCgpXTtcblx0XHR9LFxuXHRcdC8qKiBAcmV0dXJucyB7c3RyaW5nfSAqL1xuXHRcdGdldE1vbnRoTmFtZUFiYnJldigpIHtcblx0XHRcdHJldHVybiBNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEubW9udGhzU2hvcnRbdGhpcy5nZXRNb250aCgpXTtcblx0XHR9LFxuXHRcdC8qKiBAcmV0dXJucyB7c3RyaW5nfSAqL1xuXHRcdGdldFVUQ0RheU5hbWUoKSB7XG5cdFx0XHRyZXR1cm4gTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLmRheXNbdGhpcy5nZXRVVENEYXkoKV07XG5cdFx0fSxcblx0XHQvKiogQHJldHVybnMge3N0cmluZ30gKi9cblx0XHRnZXRVVENEYXlOYW1lQWJicmV2KCkge1xuXHRcdFx0cmV0dXJuIE1vcmViaXRzLmRhdGUubG9jYWxlRGF0YS5kYXlzU2hvcnRbdGhpcy5nZXRVVENEYXkoKV07XG5cdFx0fSxcblx0XHQvKiogQHJldHVybnMge3N0cmluZ30gKi9cblx0XHRnZXREYXlOYW1lKCkge1xuXHRcdFx0cmV0dXJuIE1vcmViaXRzLmRhdGUubG9jYWxlRGF0YS5kYXlzW3RoaXMuZ2V0RGF5KCldO1xuXHRcdH0sXG5cdFx0LyoqIEByZXR1cm5zIHtzdHJpbmd9ICovXG5cdFx0Z2V0RGF5TmFtZUFiYnJldigpIHtcblx0XHRcdHJldHVybiBNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEuZGF5c1Nob3J0W3RoaXMuZ2V0RGF5KCldO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogQWRkIGEgZ2l2ZW4gbnVtYmVyIG9mIG1pbnV0ZXMsIGhvdXJzLCBkYXlzLCB3ZWVrcywgbW9udGhzLCBvciB5ZWFycyB0byB0aGUgZGF0ZS5cblx0XHQgKiBUaGlzIGlzIGRvbmUgaW4tcGxhY2UuIFRoZSBtb2RpZmllZCBkYXRlIG9iamVjdCBpcyBhbHNvIHJldHVybmVkLCBhbGxvd2luZyBjaGFpbmluZy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXIgLSBTaG91bGQgYmUgYW4gaW50ZWdlci5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gdW5pdFxuXHRcdCAqIEB0aHJvd3MgSWYgaW52YWxpZCBvciB1bnN1cHBvcnRlZCB1bml0IGlzIGdpdmVuLlxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy5kYXRlfVxuXHRcdCAqL1xuXHRcdGFkZChudW1iZXIsIHVuaXQpIHtcblx0XHRcdGxldCBudW0gPSBOdW1iZXIucGFyc2VJbnQobnVtYmVyLCAxMCk7IC8vIG5vcm1hbGl6ZVxuXHRcdFx0aWYgKE51bWJlci5pc05hTihudW0pKSB7XG5cdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYEludmFsaWQgbnVtYmVyIFwiJHtudW1iZXJ9XCIgcHJvdmlkZWQuYCk7XG5cdFx0XHR9XG5cdFx0XHR1bml0ID0gdW5pdC50b0xvd2VyQ2FzZSgpOyAvLyBub3JtYWxpemVcblx0XHRcdGNvbnN0IHt1bml0TWFwfSA9IE1vcmViaXRzLmRhdGU7XG5cdFx0XHRsZXQgdW5pdE5vcm0gPSB1bml0TWFwW3VuaXRdIHx8IHVuaXRNYXBbYCR7dW5pdH1zYF07IC8vIHNvIHRoYXQgYm90aCBzaW5ndWxhciBhbmQgIHBsdXJhbCBmb3JtcyB3b3JrXG5cdFx0XHRpZiAodW5pdE5vcm0pIHtcblx0XHRcdFx0Ly8gTm8gYnVpbHQtaW4gd2VlayBmdW5jdGlvbnMsIHNvIHJhdGhlciB0aGFuIGJ1aWxkIG91dCBJU08ncyBnZXRXZWVrL3NldFdlZWssIGp1c3QgbXVsdGlwbHlcblx0XHRcdFx0Ly8gUHJvYmFibHkgY2FuJ3QgYmUgdXNlZCBmb3IgSnVsaWFuLT5HcmVnb3JpYW4gY2hhbmdlb3ZlcnMsIGV0Yy5cblx0XHRcdFx0aWYgKHVuaXROb3JtID09PSAnV2VlaycpIHtcblx0XHRcdFx0XHR1bml0Tm9ybSA9ICdEYXRlJztcblx0XHRcdFx0XHRudW0gKj0gNztcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzW2BzZXQke3VuaXROb3JtfWBdKHRoaXNbYGdldCR7dW5pdE5vcm19YF0oKSArIG51bSk7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHVuaXQgXCIke3VuaXR9XCI6IE9ubHkgJHtPYmplY3Qua2V5cyh1bml0TWFwKS5qb2luKCcsICcpfSBhcmUgYWxsb3dlZC5gKTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIFN1YnRyYWN0cyBhIGdpdmVuIG51bWJlciBvZiBtaW51dGVzLCBob3VycywgZGF5cywgd2Vla3MsIG1vbnRocywgb3IgeWVhcnMgdG8gdGhlIGRhdGUuXG5cdFx0ICogVGhpcyBpcyBkb25lIGluLXBsYWNlLiBUaGUgbW9kaWZpZWQgZGF0ZSBvYmplY3QgaXMgYWxzbyByZXR1cm5lZCwgYWxsb3dpbmcgY2hhaW5pbmcuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyIC0gU2hvdWxkIGJlIGFuIGludGVnZXIuXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHVuaXRcblx0XHQgKiBAdGhyb3dzIElmIGludmFsaWQgb3IgdW5zdXBwb3J0ZWQgdW5pdCBpcyBnaXZlbi5cblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuZGF0ZX1cblx0XHQgKi9cblx0XHRzdWJ0cmFjdChudW1iZXIsIHVuaXQpIHtcblx0XHRcdHJldHVybiB0aGlzLmFkZCgtbnVtYmVyLCB1bml0KTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEZvcm1hdCB0aGUgZGF0ZSBpbnRvIGEgc3RyaW5nIHBlciB0aGUgZ2l2ZW4gZm9ybWF0IHN0cmluZy5cblx0XHQgKiBSZXBsYWNlbWVudCBzeW50YXggaXMgYSBzdWJzZXQgb2YgdGhhdCBpbiBtb21lbnQuanM6XG5cdFx0ICpcblx0XHQgKiB8IFN5bnRheCB8IE91dHB1dCB8XG5cdFx0ICogfC0tLS0tLS0tfC0tLS0tLS0tfFxuXHRcdCAqIHwgSCB8IEhvdXJzICgyNC1ob3VyKSB8XG5cdFx0ICogfCBISCB8IEhvdXJzICgyNC1ob3VyLCBwYWRkZWQgdG8gMiBkaWdpdHMpIHxcblx0XHQgKiB8IGggfCBIb3VycyAoMTItaG91cikgfFxuXHRcdCAqIHwgaGggfCBIb3VycyAoMTItaG91ciwgcGFkZGVkIHRvIDIgZGlnaXRzKSB8XG5cdFx0ICogfCBBIHwgQU0gb3IgUE0gfFxuXHRcdCAqIHwgbSB8IE1pbnV0ZXMgfFxuXHRcdCAqIHwgbW0gfCBNaW51dGVzIChwYWRkZWQgdG8gMiBkaWdpdHMpIHxcblx0XHQgKiB8IHMgfCBTZWNvbmRzIHxcblx0XHQgKiB8IHNzIHwgU2Vjb25kcyAocGFkZGVkIHRvIDIgZGlnaXRzKSB8XG5cdFx0ICogfCBTU1MgfCBNaWxsaXNlY29uZHMgZnJhZ21lbnQsIDMgZGlnaXRzIHxcblx0XHQgKiB8IGQgfCBEYXkgbnVtYmVyIG9mIHRoZSB3ZWVrIChTdW49MCkgfFxuXHRcdCAqIHwgZGRkIHwgQWJicmV2aWF0ZWQgZGF5IG5hbWUgfFxuXHRcdCAqIHwgZGRkZCB8IEZ1bGwgZGF5IG5hbWUgfFxuXHRcdCAqIHwgRCB8IERhdGUgfFxuXHRcdCAqIHwgREQgfCBEYXRlIChwYWRkZWQgdG8gMiBkaWdpdHMpIHxcblx0XHQgKiB8IE0gfCBNb250aCBudW1iZXIgKDEtaW5kZXhlZCkgfFxuXHRcdCAqIHwgTU0gfCBNb250aCBudW1iZXIgKDEtaW5kZXhlZCwgcGFkZGVkIHRvIDIgZGlnaXRzKSB8XG5cdFx0ICogfCBNTU0gfCBBYmJyZXZpYXRlZCBtb250aCBuYW1lIHxcblx0XHQgKiB8IE1NTU0gfCBGdWxsIG1vbnRoIG5hbWUgfFxuXHRcdCAqIHwgWSB8IFllYXIgfFxuXHRcdCAqIHwgWVkgfCBGaW5hbCB0d28gZGlnaXRzIG9mIHllYXIgKDIwIGZvciAyMDIwLCA0MiBmb3IgMTk0MikgfFxuXHRcdCAqIHwgWVlZWSB8IFllYXIgKHNhbWUgYXMgYFlgKSB8XG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gZm9ybWF0c3RyIC0gRm9ybWF0IHRoZSBkYXRlIGludG8gYSBzdHJpbmcsIHVzaW5nXG5cdFx0ICogdGhlIHJlcGxhY2VtZW50IHN5bnRheC4gIFVzZSBgW2AgYW5kIGBdYCB0byBlc2NhcGUgaXRlbXMuICBJZiBub3Rcblx0XHQgKiBwcm92aWRlZCwgd2lsbCByZXR1cm4gdGhlIElTTy04NjAxLWZvcm1hdHRlZCBzdHJpbmcuXG5cdFx0ICogQHBhcmFtIHsoc3RyaW5nfG51bWJlcil9IFt6b25lPXN5c3RlbV0gLSBgc3lzdGVtYCAoZm9yIGJyb3dzZXItZGVmYXVsdCB0aW1lIHpvbmUpLFxuXHRcdCAqIGB1dGNgLCBvciBzcGVjaWZ5IGEgdGltZSB6b25lIGFzIG51bWJlciBvZiBtaW51dGVzIHJlbGF0aXZlIHRvIFVUQy5cblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdGZvcm1hdChmb3JtYXRzdHIsIHpvbmUpIHtcblx0XHRcdGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcblx0XHRcdFx0cmV0dXJuICdJbnZhbGlkIGRhdGUnOyAvLyBQdXQgdGhlIHRydXRoIG91dCwgcHJlZmVyYWJsZSB0byBcIk5hTk5hTk5hbiBOYU46TmFOXCIgb3Igd2hhdGV2ZXJcblx0XHRcdH1cblxuXHRcdFx0bGV0IHVkYXRlID0gdGhpcztcblx0XHRcdC8vIGNyZWF0ZSBhIG5ldyBkYXRlIG9iamVjdCB0aGF0IHdpbGwgY29udGFpbiB0aGUgZGF0ZSB0byBkaXNwbGF5IGFzIHN5c3RlbSB0aW1lXG5cdFx0XHRpZiAoem9uZSA9PT0gJ3V0YycpIHtcblx0XHRcdFx0dWRhdGUgPSBuZXcgTW9yZWJpdHMuZGF0ZSh0aGlzLmdldFRpbWUoKSkuYWRkKHRoaXMuZ2V0VGltZXpvbmVPZmZzZXQoKSwgJ21pbnV0ZXMnKTtcblx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIHpvbmUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdC8vIGNvbnZlcnQgdG8gdXRjLCB0aGVuIGFkZCB0aGUgdXRjIG9mZnNldCBnaXZlblxuXHRcdFx0XHR1ZGF0ZSA9IG5ldyBNb3JlYml0cy5kYXRlKHRoaXMuZ2V0VGltZSgpKS5hZGQodGhpcy5nZXRUaW1lem9uZU9mZnNldCgpICsgem9uZSwgJ21pbnV0ZXMnKTtcblx0XHRcdH1cblx0XHRcdC8vIGRlZmF1bHQgdG8gSVNPU3RyaW5nXG5cdFx0XHRpZiAoIWZvcm1hdHN0cikge1xuXHRcdFx0XHRyZXR1cm4gdWRhdGUudG9JU09TdHJpbmcoKTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHBhZCA9IChudW0sIGxlbikgPT4ge1xuXHRcdFx0XHRsZW4gfHw9IDI7IC8vIFVwIHRvIGxlbmd0aCBvZiAwMCArIDFcblx0XHRcdFx0cmV0dXJuIGAwMCR7bnVtfWAudG9TdHJpbmcoKS5zbGljZSgwIC0gbGVuKTtcblx0XHRcdH07XG5cdFx0XHRjb25zdCBoMjQgPSB1ZGF0ZS5nZXRIb3VycygpO1xuXHRcdFx0Y29uc3QgbSA9IHVkYXRlLmdldE1pbnV0ZXMoKTtcblx0XHRcdGNvbnN0IHMgPSB1ZGF0ZS5nZXRTZWNvbmRzKCk7XG5cdFx0XHRjb25zdCBtcyA9IHVkYXRlLmdldE1pbGxpc2Vjb25kcygpO1xuXHRcdFx0Y29uc3QgRCA9IHVkYXRlLmdldERhdGUoKTtcblx0XHRcdGNvbnN0IE0gPSB1ZGF0ZS5nZXRNb250aCgpICsgMTtcblx0XHRcdGNvbnN0IFkgPSB1ZGF0ZS5nZXRGdWxsWWVhcigpO1xuXHRcdFx0Y29uc3QgaDEyID0gaDI0ICUgMTIgfHwgMTI7XG5cdFx0XHRjb25zdCBhbU9yUG0gPSBoMjQgPj0gMTIgPyAn5LiL5Y2IJyA6ICfkuIrljYgnO1xuXHRcdFx0Y29uc3QgcmVwbGFjZW1lbnRNYXAgPSB7XG5cdFx0XHRcdEhIOiBwYWQoaDI0KSxcblx0XHRcdFx0SDogaDI0LFxuXHRcdFx0XHRoaDogcGFkKGgxMiksXG5cdFx0XHRcdGg6IGgxMixcblx0XHRcdFx0QTogYW1PclBtLFxuXHRcdFx0XHRtbTogcGFkKG0pLFxuXHRcdFx0XHRtLFxuXHRcdFx0XHRzczogcGFkKHMpLFxuXHRcdFx0XHRzLFxuXHRcdFx0XHRTU1M6IHBhZChtcywgMyksXG5cdFx0XHRcdGRkZGQ6IHVkYXRlLmdldERheU5hbWUoKSxcblx0XHRcdFx0ZGRkOiB1ZGF0ZS5nZXREYXlOYW1lQWJicmV2KCksXG5cdFx0XHRcdGQ6IHVkYXRlLmdldERheSgpLFxuXHRcdFx0XHRERDogcGFkKEQpLFxuXHRcdFx0XHRELFxuXHRcdFx0XHRNTU1NOiB1ZGF0ZS5nZXRNb250aE5hbWUoKSxcblx0XHRcdFx0TU1NOiB1ZGF0ZS5nZXRNb250aE5hbWVBYmJyZXYoKSxcblx0XHRcdFx0TU06IHBhZChNKSxcblx0XHRcdFx0TSxcblx0XHRcdFx0WVlZWTogWSxcblx0XHRcdFx0WVk6IHBhZChZICUgMTAwKSxcblx0XHRcdFx0WSxcblx0XHRcdH07XG5cdFx0XHRjb25zdCB1bmJpbmRlciA9IG5ldyBNb3JlYml0cy51bmJpbmRlcihmb3JtYXRzdHIpOyAvLyBlc2NhcGUgc3R1ZmYgYmV0d2VlbiBbLi4uXVxuXHRcdFx0dW5iaW5kZXIudW5iaW5kKCdcXFxcWycsICdcXFxcXScpO1xuXHRcdFx0dW5iaW5kZXIuY29udGVudCA9IHVuYmluZGVyLmNvbnRlbnQucmVwbGFjZShcblx0XHRcdFx0LyogUmVnZXggbm90ZXM6XG5cdFx0XHRcdCAqIGQoZHsyLDN9KT8gbWF0Y2hlcyBleGFjdGx5IDEsIDMgb3IgNCBvY2N1cnJlbmNlcyBvZiAnZCcgKCdkZCcgaXMgdHJlYXRlZCBhcyBhIGRvdWJsZSBtYXRjaCBvZiAnZCcpXG5cdFx0XHRcdCAqIFl7MSwyfShZezJ9KT8gbWF0Y2hlcyBleGFjdGx5IDEsIDIgb3IgNCBvY2N1cnJlbmNlcyBvZiAnWSdcblx0XHRcdFx0ICovXG5cdFx0XHRcdC9IezEsMn18aHsxLDJ9fG17MSwyfXxzezEsMn18U1NTfGQoZHsyLDN9KT98RHsxLDJ9fE17MSw0fXxZezEsMn0oWXsyfSk/fEEvZyxcblx0XHRcdFx0KG1hdGNoKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlcGxhY2VtZW50TWFwW21hdGNoXTtcblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHRcdHJldHVybiB1bmJpbmRlci5yZWJpbmQoKS5yZXBsYWNlKC9cXFsoLio/KVxcXS9nLCAnJDEnKTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEdpdmVzIGEgcmVhZGFibGUgcmVsYXRpdmUgdGltZSBzdHJpbmcgc3VjaCBhcyBcIlllc3RlcmRheSBhdCA2OjQzIFBNXCIgb3IgXCJMYXN0IFRodXJzZGF5IGF0IDExOjQ1IEFNXCIuXG5cdFx0ICogU2ltaWxhciB0byBgY2FsZW5kYXJgIGluIG1vbWVudC5qcywgYnV0IHdpdGggdGltZSB6b25lIHN1cHBvcnQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0geyhzdHJpbmd8bnVtYmVyKX0gW3pvbmU9c3lzdGVtXSAtICdzeXN0ZW0nIChmb3IgYnJvd3Nlci1kZWZhdWx0IHRpbWUgem9uZSksXG5cdFx0ICogJ3V0YycgKGZvciBVVEMpLCBvciBzcGVjaWZ5IGEgdGltZSB6b25lIGFzIG51bWJlciBvZiBtaW51dGVzIHBhc3QgVVRDLlxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0Y2FsZW5kYXIoem9uZSkge1xuXHRcdFx0Ly8gWmVybyBvdXQgdGhlIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzIGFuZCBtaWxsaXNlY29uZHMgLSBrZWVwaW5nIG9ubHkgdGhlIGRhdGU7XG5cdFx0XHQvLyBmaW5kIHRoZSBkaWZmZXJlbmNlLiBOb3RlIHRoYXQgc2V0SG91cnMoKSByZXR1cm5zIHRoZSBzYW1lIHRoaW5nIGFzIGdldFRpbWUoKS5cblx0XHRcdGNvbnN0IGRhdGVEaWZmID0gKG5ldyBEYXRlKCkuc2V0SG91cnMoMCwgMCwgMCwgMCkgLSBuZXcgRGF0ZSh0aGlzKS5zZXRIb3VycygwLCAwLCAwLCAwKSkgLyA4LjY0ZTc7XG5cdFx0XHRzd2l0Y2ggKHRydWUpIHtcblx0XHRcdFx0Y2FzZSBkYXRlRGlmZiA9PT0gMDpcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5mb3JtYXQoTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLnJlbGF0aXZlVGltZXMudGhpc0RheSwgem9uZSk7XG5cdFx0XHRcdGNhc2UgZGF0ZURpZmYgPT09IDE6XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuZm9ybWF0KE1vcmViaXRzLmRhdGUubG9jYWxlRGF0YS5yZWxhdGl2ZVRpbWVzLnByZXZEYXksIHpvbmUpO1xuXHRcdFx0XHRjYXNlIGRhdGVEaWZmID4gMCAmJiBkYXRlRGlmZiA8IDc6XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuZm9ybWF0KE1vcmViaXRzLmRhdGUubG9jYWxlRGF0YS5yZWxhdGl2ZVRpbWVzLnBhc3RXZWVrLCB6b25lKTtcblx0XHRcdFx0Y2FzZSBkYXRlRGlmZiA9PT0gLTE6XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuZm9ybWF0KE1vcmViaXRzLmRhdGUubG9jYWxlRGF0YS5yZWxhdGl2ZVRpbWVzLm5leHREYXksIHpvbmUpO1xuXHRcdFx0XHRjYXNlIGRhdGVEaWZmIDwgMCAmJiBkYXRlRGlmZiA+IC03OlxuXHRcdFx0XHRcdHJldHVybiB0aGlzLmZvcm1hdChNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEucmVsYXRpdmVUaW1lcy50aGlzV2Vlaywgem9uZSk7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuZm9ybWF0KE1vcmViaXRzLmRhdGUubG9jYWxlRGF0YS5yZWxhdGl2ZVRpbWVzLm90aGVyLCB6b25lKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEdldCBhIHJlZ3VsYXIgZXhwcmVzc2lvbiB0aGF0IG1hdGNoZXMgd2lraXRleHQgc2VjdGlvbiB0aXRsZXMsIHN1Y2hcblx0XHQgKiBhcyBgPT1EZWNlbWJlciAyMDE5PT1gIG9yIGA9PT0gSmFuIDIwMTggPT09YC5cblx0XHQgKlxuXHRcdCAqIEByZXR1cm5zIHtSZWdFeHB9XG5cdFx0ICovXG5cdFx0bW9udGhIZWFkZXJSZWdleCgpIHtcblx0XHRcdHJldHVybiBuZXcgUmVnRXhwKFxuXHRcdFx0XHRgXig9PSspXFxcXHMqJHt0aGlzLmdldFVUQ0Z1bGxZZWFyKCl95bm0KD86JHt0aGlzLmdldFVUQ01vbnRoTmFtZSgpfXwke3RoaXMuZ2V0VVRDTW9udGhOYW1lQWJicmV2KCl9KVxcXFxzKlxcXFwxYCxcblx0XHRcdFx0J21nJ1xuXHRcdFx0KTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIENyZWF0ZXMgYSB3aWtpdGV4dCBzZWN0aW9uIGhlYWRlciB3aXRoIHRoZSBtb250aCBhbmQgeWVhci5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBbbGV2ZWw9Ml0gLSBIZWFkZXIgbGV2ZWwuICBQYXNzIDAgZm9yIGp1c3QgdGhlIHRleHRcblx0XHQgKiB3aXRoIG5vIHdpa2l0ZXh0IG1hcmtlcnMgKD09KS5cblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdG1vbnRoSGVhZGVyKGxldmVsKSB7XG5cdFx0XHQvLyBEZWZhdWx0IHRvIDIsIGJ1dCBhbGxvdyBmb3IgMCBvciBzdHJpbmd5IG51bWJlcnNcblx0XHRcdGxldmVsID0gTnVtYmVyLnBhcnNlSW50KGxldmVsLCAxMCk7XG5cdFx0XHRsZXZlbCA9IE51bWJlci5pc05hTihsZXZlbCkgPyAyIDogbGV2ZWw7XG5cdFx0XHRjb25zdCBoZWFkZXIgPSAnPScucmVwZWF0KGxldmVsKTtcblx0XHRcdGNvbnN0IHRleHQgPSBgJHt0aGlzLmdldFVUQ0Z1bGxZZWFyKCl95bm0JHt0aGlzLmdldFVUQ01vbnRoTmFtZSgpfWA7XG5cdFx0XHRpZiAoaGVhZGVyLmxlbmd0aCkge1xuXHRcdFx0XHQvLyB3aWtpdGV4dC1mb3JtYXR0ZWQgaGVhZGVyXG5cdFx0XHRcdHJldHVybiBgJHtoZWFkZXJ9ICR7dGV4dH0gJHtoZWFkZXJ9YDtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0ZXh0OyAvLyBKdXN0IHRoZSBzdHJpbmdcblx0XHR9LFxuXHR9O1xuXHQvLyBBbGxvdyBuYXRpdmUgRGF0ZS5wcm90b3R5cGUgbWV0aG9kcyB0byBiZSB1c2VkIG9uIE1vcmViaXRzLmRhdGUgb2JqZWN0c1xuXHRmb3IgKGNvbnN0IGZ1bmMgb2YgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoRGF0ZS5wcm90b3R5cGUpKSB7XG5cdFx0Ly8gRXhjbHVkZSBtZXRob2RzIHRoYXQgY29sbGlkZSB3aXRoIFBhZ2VUcmlhZ2UncyBEYXRlLmpzIGV4dGVybmFsLCB3aGljaCBjbG9iYmVycyBuYXRpdmUgRGF0ZVxuXHRcdGlmICghWydhZGQnLCAnZ2V0RGF5TmFtZScsICdnZXRNb250aE5hbWUnXS5pbmNsdWRlcyhmdW5jKSkge1xuXHRcdFx0TW9yZWJpdHMuZGF0ZS5wcm90b3R5cGVbZnVuY10gPSBmdW5jdGlvbiAoLi4uYXJncykge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fZFtmdW5jXSguLi5hcmdzKTtcblx0XHRcdH07XG5cdFx0fVxuXHR9XG5cdC8qICoqKioqKioqKioqKioqKiogTW9yZWJpdHMud2lraSAqKioqKioqKioqKioqKioqICovXG5cdC8qKlxuXHQgKiBWYXJpb3VzIG9iamVjdHMgZm9yIHdpa2kgZWRpdGluZyBhbmQgQVBJIGFjY2VzcywgaW5jbHVkaW5nXG5cdCAqIHtAbGluayBNb3JlYml0cy53aWtpLmFwaX0gYW5kIHtAbGluayBNb3JlYml0cy53aWtpLnBhZ2V9LlxuXHQgKlxuXHQgKiBAbmFtZXNwYWNlIE1vcmViaXRzLndpa2lcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzXG5cdCAqL1xuXHRNb3JlYml0cy53aWtpID0ge307XG5cdC8qKlxuXHQgKiBAZGVwcmVjYXRlZCBpbiBmYXZvciBvZiBNb3JlYml0cy5pc1BhZ2VSZWRpcmVjdCBhcyBvZiBOb3ZlbWJlciAyMDIwXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpXG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0TW9yZWJpdHMud2lraS5pc1BhZ2VSZWRpcmVjdCA9ICgpID0+IHtcblx0XHRjb25zb2xlLndhcm4oJ05PVEU6IE1vcmViaXRzLndpa2kuaXNQYWdlUmVkaXJlY3QgaGFzIGJlZW4gZGVwcmVjYXRlZCwgdXNlIE1vcmViaXRzLmlzUGFnZVJlZGlyZWN0IGluc3RlYWQuJyk7XG5cdFx0cmV0dXJuIE1vcmViaXRzLmlzUGFnZVJlZGlyZWN0KCk7XG5cdH07XG5cdC8qICoqKioqKioqKioqKioqKiogTW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQgKioqKioqKioqKioqKioqKiAqL1xuXHQvKipcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLndpa2lcblx0ICogQHR5cGUge251bWJlcn1cblx0ICovXG5cdE1vcmViaXRzLndpa2kubnVtYmVyT2ZBY3Rpb25zTGVmdCA9IDA7XG5cdC8qKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraVxuXHQgKiBAdHlwZSB7bnVtYmVyfVxuXHQgKi9cblx0TW9yZWJpdHMud2lraS5uYnJPZkNoZWNrcG9pbnRzTGVmdCA9IDA7XG5cdC8qKlxuXHQgKiBEaXNwbGF5IG1lc3NhZ2UgYW5kL29yIHJlZGlyZWN0IHRvIHBhZ2UgdXBvbiBjb21wbGV0aW9uIG9mIHRhc2tzLlxuXHQgKlxuXHQgKiBFdmVyeSBjYWxsIHRvIE1vcmViaXRzLndpa2kuYXBpLnBvc3QoKSByZXN1bHRzIGluIHRoZSBkaXNwYXRjaCBvZiBhblxuXHQgKiBhc3luY2hyb25vdXMgY2FsbGJhY2suIEVhY2ggY2FsbGJhY2sgY2FuIGluIHR1cm4gbWFrZSBhbiBhZGRpdGlvbmFsIGNhbGwgdG9cblx0ICogTW9yZWJpdHMud2lraS5hcGkucG9zdCgpIHRvIGNvbnRpbnVlIGEgcHJvY2Vzc2luZyBzZXF1ZW5jZS4gQXQgdGhlXG5cdCAqIGNvbmNsdXNpb24gb2YgdGhlIGZpbmFsIGNhbGxiYWNrIG9mIGEgcHJvY2Vzc2luZyBzZXF1ZW5jZSwgaXQgaXMgbm90XG5cdCAqIHBvc3NpYmxlIHRvIHNpbXBseSByZXR1cm4gdG8gdGhlIG9yaWdpbmFsIGNhbGxlciBiZWNhdXNlIHRoZXJlIGlzIG5vIGNhbGxcblx0ICogc3RhY2sgbGVhZGluZyBiYWNrIHRvIHRoZSBvcmlnaW5hbCBjb250ZXh0LiBJbnN0ZWFkLFxuXHQgKiBNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5ldmVudCgpIGlzIGNhbGxlZCB0byBkaXNwbGF5IHRoZSByZXN1bHQgdG9cblx0ICogdGhlIHVzZXIgYW5kIHRvIHBlcmZvcm0gYW4gb3B0aW9uYWwgcGFnZSByZWRpcmVjdC5cblx0ICpcblx0ICogVGhlIGRldGVybWluYXRpb24gb2Ygd2hlbiB0byBjYWxsIE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLmV2ZW50KCkgaXNcblx0ICogbWFuYWdlZCB0aHJvdWdoIHRoZSBnbG9iYWxzIE1vcmViaXRzLndpa2kubnVtYmVyT2ZBY3Rpb25zTGVmdCBhbmRcblx0ICogTW9yZWJpdHMud2lraS5uYnJPZkNoZWNrcG9pbnRzTGVmdC4gTW9yZWJpdHMud2lraS5udW1iZXJPZkFjdGlvbnNMZWZ0IGlzXG5cdCAqIGluY3JlbWVudGVkIGF0IHRoZSBzdGFydCBvZiBldmVyeSBNb3JlYml0cy53aWtpLmFwaSBjYWxsIGFuZCBkZWNyZW1lbnRlZFxuXHQgKiBhZnRlciB0aGUgY29tcGxldGlvbiBvZiBhIGNhbGxiYWNrIGZ1bmN0aW9uLiBJZiBhIGNhbGxiYWNrIGZ1bmN0aW9uIGRvZXNcblx0ICogbm90IGNyZWF0ZSBhIG5ldyBNb3JlYml0cy53aWtpLmFwaSBvYmplY3QgYmVmb3JlIGV4aXRpbmcsIGl0IGlzIHRoZSBmaW5hbFxuXHQgKiBzdGVwIGluIHRoZSBwcm9jZXNzaW5nIGNoYWluIGFuZCBNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5ldmVudCgpIHdpbGxcblx0ICogdGhlbiBiZSBjYWxsZWQuXG5cdCAqXG5cdCAqIE9wdGlvbmFsbHksIGNhbGxlcnMgbWF5IHVzZSBNb3JlYml0cy53aWtpLmFkZENoZWNrcG9pbnQoKSB0byBpbmRpY2F0ZSB0aGF0XG5cdCAqIHByb2Nlc3NpbmcgaXMgbm90IGNvbXBsZXRlIHVwb24gdGhlIGNvbmNsdXNpb24gb2YgdGhlIGZpbmFsIGNhbGxiYWNrXG5cdCAqIGZ1bmN0aW9uLiAgVGhpcyBpcyB1c2VkIGZvciBiYXRjaCBvcGVyYXRpb25zLiBUaGUgZW5kIG9mIGEgYmF0Y2ggaXNcblx0ICogc2lnbmFsZWQgYnkgY2FsbGluZyBNb3JlYml0cy53aWtpLnJlbW92ZUNoZWNrcG9pbnQoKS5cblx0ICpcblx0ICogQHBhcmFtIHt0eXBlb2YgTW9yZWJpdHN9IHNlbGZcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLndpa2lcblx0ICovXG5cdE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkID0gKHNlbGYpID0+IHtcblx0XHRpZiAoLS1Nb3JlYml0cy53aWtpLm51bWJlck9mQWN0aW9uc0xlZnQgPD0gMCAmJiBNb3JlYml0cy53aWtpLm5ick9mQ2hlY2twb2ludHNMZWZ0IDw9IDApIHtcblx0XHRcdE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLmV2ZW50KHNlbGYpO1xuXHRcdH1cblx0fTtcblx0Ly8gQ2hhbmdlIHBlciBhY3Rpb24gd2FudGVkXG5cdC8qKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraSAqL1xuXHRNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5ldmVudCA9ICgpID0+IHtcblx0XHRpZiAoTW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQubm90aWNlKSB7XG5cdFx0XHRNb3JlYml0cy5zdGF0dXMuYWN0aW9uQ29tcGxldGVkKE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLm5vdGljZSk7XG5cdFx0fVxuXHRcdGlmIChNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5yZWRpcmVjdCkge1xuXHRcdFx0Ly8gaWYgaXQgaXNuJ3QgYSBVUkwsIG1ha2UgaXQgb25lLiBUT0RPOiBUaGlzIGJyZWFrcyBvbiB0aGUgYXJ0aWNsZXMgJ2h0dHA6Ly8nLCAnZnRwOi8vJywgYW5kIHNpbWlsYXIgb25lcy5cblx0XHRcdGlmICghL15cXHcrOlxcL1xcLy8udGVzdChNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5yZWRpcmVjdCkpIHtcblx0XHRcdFx0TW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQucmVkaXJlY3QgPSBtdy51dGlsLmdldFVybChNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5yZWRpcmVjdCk7XG5cdFx0XHRcdGlmIChNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5mb2xsb3dSZWRpcmVjdCA9PT0gZmFsc2UpIHtcblx0XHRcdFx0XHRNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5yZWRpcmVjdCArPSAnP3JlZGlyZWN0PW5vJztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdGxvY2F0aW9uID0gTW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQucmVkaXJlY3Q7XG5cdFx0XHR9LCBNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC50aW1lT3V0KTtcblx0XHR9XG5cdH07XG5cdC8qKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraSAqL1xuXHRNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC50aW1lT3V0ID1cblx0XHR3aW5kb3cud3BBY3Rpb25Db21wbGV0ZWRUaW1lT3V0ID09PSB1bmRlZmluZWQgPyA1MDAwIDogd2luZG93LndwQWN0aW9uQ29tcGxldGVkVGltZU91dDtcblx0LyoqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpICovXG5cdE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLnJlZGlyZWN0ID0gbnVsbDtcblx0LyoqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpICovXG5cdE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLm5vdGljZSA9IG51bGw7XG5cdC8qKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraSAqL1xuXHRNb3JlYml0cy53aWtpLmFkZENoZWNrcG9pbnQgPSAoKSA9PiB7XG5cdFx0KytNb3JlYml0cy53aWtpLm5ick9mQ2hlY2twb2ludHNMZWZ0O1xuXHR9O1xuXHQvKiogQG1lbWJlcm9mIE1vcmViaXRzLndpa2kgKi9cblx0TW9yZWJpdHMud2lraS5yZW1vdmVDaGVja3BvaW50ID0gKCkgPT4ge1xuXHRcdGlmICgtLU1vcmViaXRzLndpa2kubmJyT2ZDaGVja3BvaW50c0xlZnQgPD0gMCAmJiBNb3JlYml0cy53aWtpLm51bWJlck9mQWN0aW9uc0xlZnQgPD0gMCkge1xuXHRcdFx0TW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQuZXZlbnQoKTtcblx0XHR9XG5cdH07XG5cdC8qICoqKioqKioqKioqKioqKiogTW9yZWJpdHMud2lraS5hcGkgKioqKioqKioqKioqKioqKiAqL1xuXHQvKipcblx0ICogQW4gZWFzeSB3YXkgdG8gdGFsayB0byB0aGUgTWVkaWFXaWtpIEFQSS4gIEFjY2VwdHMgZWl0aGVyIGpzb24gb3IgeG1sXG5cdCAqIChkZWZhdWx0KSBmb3JtYXRzOyBpZiBqc29uIGlzIHNlbGVjdGVkLCB3aWxsIGRlZmF1bHQgdG8gYGZvcm1hdHZlcnNpb249MmBcblx0ICogdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuICBTaW1pbGFybHksIGVuZm9yY2VzIG5ld2VyIGBlcnJvcmZvcm1hdGBzLFxuXHQgKiBkZWZhdWx0aW5nIHRvIGBodG1sYCBpZiB1bnNwZWNpZmllZC4gIGB1c2VsYW5nYCBlbmZvcmNlZCB0byB0aGUgd2lraSdzXG5cdCAqIGNvbnRlbnQgbGFuZ3VhZ2UuXG5cdCAqXG5cdCAqIEluIG5ldyBjb2RlLCB0aGUgdXNlIG9mIHRoZSBsYXN0IDMgcGFyYW1ldGVycyBzaG91bGQgYmUgYXZvaWRlZCwgaW5zdGVhZFxuXHQgKiB1c2Uge0BsaW5rIE1vcmViaXRzLndpa2kuYXBpI3NldFN0YXR1c0VsZW1lbnR8c2V0U3RhdHVzRWxlbWVudCgpfSB0byBiaW5kXG5cdCAqIHRoZSBzdGF0dXMgZWxlbWVudCAoaWYgbmVlZGVkKSBhbmQgdXNlIGAudGhlbigpYCBvciBgLmNhdGNoKClgIG9uIHRoZVxuXHQgKiBwcm9taXNlIHJldHVybmVkIGJ5IGBwb3N0KClgLCByYXRoZXIgdGhhbiBzcGVjaWZ5IHRoZSBgb25TdWNjZXNzYCBvclxuXHQgKiBgb25GYWlsdXJlYCBjYWxsYmFja3MuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpXG5cdCAqIEBjbGFzc1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gY3VycmVudEFjdGlvbiAtIFRoZSBjdXJyZW50IGFjdGlvbiAocmVxdWlyZWQpLlxuXHQgKiBAcGFyYW0ge09iamVjdH0gcXVlcnkgLSBUaGUgcXVlcnkgKHJlcXVpcmVkKS5cblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uU3VjY2Vzc10gLSBUaGUgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIHJlcXVlc3QgaXMgc3VjY2Vzc2Z1bC5cblx0ICogQHBhcmFtIHtNb3JlYml0cy5zdGF0dXN9IFtzdGF0dXNFbGVtZW50XSAtIEEgTW9yZWJpdHMuc3RhdHVzIG9iamVjdCB0byB1c2UgZm9yIHN0YXR1cyBtZXNzYWdlcy5cblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRXJyb3JdIC0gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgaWYgYW4gZXJyb3Igb2NjdXJzLlxuXHQgKi9cblx0TW9yZWJpdHMud2lraS5hcGkgPSBmdW5jdGlvbiAoY3VycmVudEFjdGlvbiwgcXVlcnksIG9uU3VjY2Vzcywgc3RhdHVzRWxlbWVudCwgb25FcnJvcikge1xuXHRcdHRoaXMuY3VycmVudEFjdGlvbiA9IGN1cnJlbnRBY3Rpb247XG5cdFx0dGhpcy5xdWVyeSA9IHF1ZXJ5O1xuXHRcdHRoaXMucXVlcnkuYXNzZXJ0ID0gJ3VzZXInO1xuXHRcdC8vIEVuZm9yY2UgbmV3ZXIgZXJyb3IgZm9ybWF0cywgcHJlZmVycmluZyBodG1sXG5cdFx0aWYgKCFxdWVyeS5lcnJvcmZvcm1hdCB8fCAhWyd3aWtpdGV4dCcsICdwbGFpbnRleHQnXS5pbmNsdWRlcyhxdWVyeS5lcnJvcmZvcm1hdCkpIHtcblx0XHRcdHRoaXMucXVlcnkuZXJyb3Jmb3JtYXQgPSAnaHRtbCc7XG5cdFx0fVxuXHRcdC8vIEV4cGxpY2l0bHkgdXNlIHRoZSB3aWtpJ3MgY29udGVudCBsYW5ndWFnZSB0byBtaW5pbWl6ZSBjb25mdXNpb24sXG5cdFx0Ly8gc2VlICMxMTc5IGZvciBkaXNjdXNzaW9uXG5cdFx0dGhpcy5xdWVyeS51c2VsYW5nIHx8PSAnY29udGVudCc7IC8vIFVzZSB3Z1VzZXJMYW5ndWFnZSBmb3IgcHJldmlld1xuXHRcdHRoaXMucXVlcnkuZXJyb3JsYW5nID0gJ3VzZWxhbmcnO1xuXHRcdHRoaXMucXVlcnkuZXJyb3JzdXNlbG9jYWwgPSAxO1xuXHRcdHRoaXMub25TdWNjZXNzID0gb25TdWNjZXNzO1xuXHRcdHRoaXMub25FcnJvciA9IG9uRXJyb3I7XG5cdFx0aWYgKHN0YXR1c0VsZW1lbnQpIHtcblx0XHRcdHRoaXMuc2V0U3RhdHVzRWxlbWVudChzdGF0dXNFbGVtZW50KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zdGF0ZWxlbSA9IG5ldyBNb3JlYml0cy5zdGF0dXMoY3VycmVudEFjdGlvbik7XG5cdFx0fVxuXHRcdC8vIEpTT04gaXMgdXNlZCB0aHJvdWdob3V0IE1vcmViaXRzL1R3aW5rbGUsIGJ1dCB4bWwgcmVtYWlucyB0aGUgZGVmYXVsdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcblx0XHRpZiAoIXF1ZXJ5LmZvcm1hdCkge1xuXHRcdFx0dGhpcy5xdWVyeS5mb3JtYXQgPSAneG1sJztcblx0XHR9IGVsc2UgaWYgKHF1ZXJ5LmZvcm1hdCA9PT0gJ2pzb24nICYmICFxdWVyeS5mb3JtYXR2ZXJzaW9uKSB7XG5cdFx0XHR0aGlzLnF1ZXJ5LmZvcm1hdHZlcnNpb24gPSAnMic7XG5cdFx0fSBlbHNlIGlmICghWyd4bWwnLCAnanNvbiddLmluY2x1ZGVzKHF1ZXJ5LmZvcm1hdCkpIHtcblx0XHRcdHRoaXMuc3RhdGVsZW0uZXJyb3IoJ0ludmFsaWQgQVBJIGZvcm1hdDogb25seSB4bWwgYW5kIGpzb24gYXJlIHN1cHBvcnRlZC4nKTtcblx0XHR9XG5cdFx0Ly8gSWdub3JlIHRhZ3MgZm9yIHF1ZXJpZXMgYW5kIG1vc3QgY29tbW9uIHVuc3VwcG9ydGVkIGFjdGlvbnMsIHByb2R1Y2VzIHdhcm5pbmdzXG5cdFx0aWYgKHF1ZXJ5LmFjdGlvbiAmJiBbJ3F1ZXJ5JywgJ3dhdGNoJ10uaW5jbHVkZXMocXVlcnkuYWN0aW9uKSkge1xuXHRcdFx0ZGVsZXRlIHF1ZXJ5LnRhZ3M7XG5cdFx0fSBlbHNlIGlmICghcXVlcnkudGFncyAmJiBtb3JlYml0c1dpa2lDaGFuZ2VUYWcpIHtcblx0XHRcdHF1ZXJ5LnRhZ3MgPSBtb3JlYml0c1dpa2lDaGFuZ2VUYWc7XG5cdFx0fVxuXHR9O1xuXHRNb3JlYml0cy53aWtpLmFwaS5wcm90b3R5cGUgPSB7XG5cdFx0Y3VycmVudEFjdGlvbjogJycsXG5cdFx0b25TdWNjZXNzOiBudWxsLFxuXHRcdG9uRXJyb3I6IG51bGwsXG5cdFx0cGFyZW50OiB3aW5kb3csXG5cdFx0Ly8gdXNlIGdsb2JhbCBjb250ZXh0IGlmIHRoZXJlIGlzIG5vIHBhcmVudCBvYmplY3Rcblx0XHRxdWVyeTogbnVsbCxcblx0XHRyZXNwb25zZTogbnVsbCxcblx0XHRyZXNwb25zZVhNTDogbnVsbCxcblx0XHQvLyB1c2UgYHJlc3BvbnNlYCBpbnN0ZWFkOyByZXRhaW5lZCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcblx0XHRzdGF0ZWxlbTogbnVsbCxcblx0XHQvLyB0aGlzIG5vbi1zdGFuZGFyZCBuYW1lIGtlcHQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG5cdFx0c3RhdHVzVGV4dDogbnVsbCxcblx0XHQvLyByZXN1bHQgcmVjZWl2ZWQgZnJvbSB0aGUgQVBJLCBub3JtYWxseSBcInN1Y2Nlc3NcIiBvciBcImVycm9yXCJcblx0XHRlcnJvckNvZGU6IG51bGwsXG5cdFx0Ly8gc2hvcnQgdGV4dCBlcnJvciBjb2RlLCBpZiBhbnksIGFzIGRvY3VtZW50ZWQgaW4gdGhlIE1lZGlhV2lraSBBUElcblx0XHRlcnJvclRleHQ6IG51bGwsXG5cdFx0Ly8gZnVsbCBlcnJvciBkZXNjcmlwdGlvbiwgaWYgYW55XG5cdFx0YmFkdG9rZW5SZXRyeTogZmFsc2UsXG5cdFx0Ly8gc2V0IHRvIHRydWUgaWYgdGhpcyBvbiBhIHJldHJ5IGF0dGVtcHRlZCBhZnRlciBhIGJhZHRva2VuIGVycm9yXG5cdFx0LyoqXG5cdFx0ICogS2VlcCB0cmFjayBvZiBwYXJlbnQgb2JqZWN0IGZvciBjYWxsYmFja3MuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0geyp9IHBhcmVudFxuXHRcdCAqL1xuXHRcdHNldFBhcmVudChwYXJlbnQpIHtcblx0XHRcdHRoaXMucGFyZW50ID0gcGFyZW50O1xuXHRcdH0sXG5cdFx0LyoqIEBwYXJhbSB7TW9yZWJpdHMuc3RhdHVzfSBzdGF0dXNFbGVtZW50ICovXG5cdFx0c2V0U3RhdHVzRWxlbWVudChzdGF0dXNFbGVtZW50KSB7XG5cdFx0XHR0aGlzLnN0YXRlbGVtID0gc3RhdHVzRWxlbWVudDtcblx0XHRcdHRoaXMuc3RhdGVsZW0uc3RhdHVzKHRoaXMuY3VycmVudEFjdGlvbik7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBDYXJyeSBvdXQgdGhlIHJlcXVlc3QuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge09iamVjdH0gY2FsbGVyQWpheFBhcmFtZXRlcnMgLSBEbyBub3Qgc3BlY2lmeSBhIHBhcmFtZXRlciB1bmxlc3MgeW91IHJlYWxseVxuXHRcdCAqIHJlYWxseSB3YW50IHRvIGdpdmUgalF1ZXJ5IHNvbWUgZXh0cmEgcGFyYW1ldGVycy5cblx0XHQgKiBAcmV0dXJucyB7cHJvbWlzZX0gLSBBIGpRdWVyeSBwcm9taXNlIG9iamVjdCB0aGF0IGlzIHJlc29sdmVkIG9yIHJlamVjdGVkIHdpdGggdGhlIGFwaSBvYmplY3QuXG5cdFx0ICovXG5cdFx0cG9zdChjYWxsZXJBamF4UGFyYW1ldGVycykge1xuXHRcdFx0KytNb3JlYml0cy53aWtpLm51bWJlck9mQWN0aW9uc0xlZnQ7XG5cdFx0XHRjb25zdCBfcXVlcnlTdHJpbmcgPSBbXTtcblx0XHRcdGZvciAoY29uc3QgW2ksIHZhbF0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5xdWVyeSkpIHtcblx0XHRcdFx0aWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuXHRcdFx0XHRcdF9xdWVyeVN0cmluZy5wdXNoKGAke2VuY29kZVVSSUNvbXBvbmVudChpKX09JHt2YWwubWFwKGVuY29kZVVSSUNvbXBvbmVudCkuam9pbignfCcpfWApO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHZhbCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0X3F1ZXJ5U3RyaW5nLnB1c2goYCR7ZW5jb2RlVVJJQ29tcG9uZW50KGkpfT0ke2VuY29kZVVSSUNvbXBvbmVudCh2YWwpfWApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBxdWVyeVN0cmluZyA9IF9xdWVyeVN0cmluZy5qb2luKCcmJykucmVwbGFjZSgvXiguKj8pKFxcYnRva2VuPVteJl0qKSYoLiopLywgJyQxJDMmJDInKTtcblx0XHRcdC8vIHRva2VuIHNob3VsZCBhbHdheXMgYmUgdGhlIGxhc3QgaXRlbSBpbiB0aGUgcXVlcnkgc3RyaW5nIChidWcgVFctQi0wMDEzKVxuXHRcdFx0Y29uc3QgYWpheHBhcmFtcyA9IHtcblx0XHRcdFx0Y29udGV4dDogdGhpcyxcblx0XHRcdFx0dHlwZTogdGhpcy5xdWVyeS5hY3Rpb24gPT09ICdxdWVyeScgPyAnR0VUJyA6ICdQT1NUJyxcblx0XHRcdFx0dXJsOiBtdy51dGlsLndpa2lTY3JpcHQoJ2FwaScpLFxuXHRcdFx0XHRkYXRhOiBxdWVyeVN0cmluZyxcblx0XHRcdFx0ZGF0YVR5cGU6IHRoaXMucXVlcnkuZm9ybWF0LFxuXHRcdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdFx0J0FwaS1Vc2VyLUFnZW50JzogbW9yZWJpdHNXaWtpQXBpVXNlckFnZW50LFxuXHRcdFx0XHR9LFxuXHRcdFx0XHQuLi5jYWxsZXJBamF4UGFyYW1ldGVycyxcblx0XHRcdH07XG5cdFx0XHRyZXR1cm4gJC5hamF4KGFqYXhwYXJhbXMpLnRoZW4oXG5cdFx0XHRcdGZ1bmN0aW9uIG9uQVBJc3VjY2VzcyhyZXNwb25zZSwgc3RhdHVzVGV4dCkge1xuXHRcdFx0XHRcdHRoaXMuc3RhdHVzVGV4dCA9IHN0YXR1c1RleHQ7XG5cdFx0XHRcdFx0dGhpcy5yZXNwb25zZSA9IHJlc3BvbnNlO1xuXHRcdFx0XHRcdHRoaXMucmVzcG9uc2VYTUwgPSByZXNwb25zZTtcblx0XHRcdFx0XHQvLyBMaW1pdCB0byBmaXJzdCBlcnJvclxuXHRcdFx0XHRcdGlmICh0aGlzLnF1ZXJ5LmZvcm1hdCA9PT0gJ2pzb24nKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmVycm9yQ29kZSA9IHJlc3BvbnNlLmVycm9ycyAmJiByZXNwb25zZS5lcnJvcnNbMF0uY29kZTtcblx0XHRcdFx0XHRcdGlmICh0aGlzLnF1ZXJ5LmVycm9yZm9ybWF0ID09PSAnaHRtbCcpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5lcnJvclRleHQgPSByZXNwb25zZS5lcnJvcnMgJiYgcmVzcG9uc2UuZXJyb3JzWzBdLmh0bWw7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMucXVlcnkuZXJyb3Jmb3JtYXQgPT09ICd3aWtpdGV4dCcgfHwgdGhpcy5xdWVyeS5lcnJvcmZvcm1hdCA9PT0gJ3BsYWludGV4dCcpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5lcnJvclRleHQgPSByZXNwb25zZS5lcnJvcnMgJiYgcmVzcG9uc2UuZXJyb3JzWzBdLnRleHQ7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMuZXJyb3JDb2RlID0gJChyZXNwb25zZSkuZmluZCgnZXJyb3JzIGVycm9yJykuZXEoMCkuYXR0cignY29kZScpO1xuXHRcdFx0XHRcdFx0Ly8gU3VmZmljaWVudCBmb3IgaHRtbCwgd2lraXRleHQsIG9yIHBsYWludGV4dCBlcnJvcmZvcm1hdHNcblx0XHRcdFx0XHRcdHRoaXMuZXJyb3JUZXh0ID0gJChyZXNwb25zZSkuZmluZCgnZXJyb3JzIGVycm9yJykuZXEoMCkudGV4dCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAodHlwZW9mIHRoaXMuZXJyb3JDb2RlID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRcdFx0Ly8gdGhlIEFQSSBkaWRuJ3QgbGlrZSB3aGF0IHdlIHRvbGQgaXQsIGUuZy4sIGJhZCBlZGl0IHRva2VuIG9yIGFuIGVycm9yIGNyZWF0aW5nIGEgcGFnZVxuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMucmV0dXJuRXJyb3IoY2FsbGVyQWpheFBhcmFtZXRlcnMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBpbnZva2Ugc3VjY2VzcyBjYWxsYmFjayBpZiBvbmUgd2FzIHN1cHBsaWVkXG5cdFx0XHRcdFx0aWYgKHRoaXMub25TdWNjZXNzKSB7XG5cdFx0XHRcdFx0XHQvLyBzZXQgdGhlIGNhbGxiYWNrIGNvbnRleHQgdG8gdGhpcy5wYXJlbnQgZm9yIG5ldyBjb2RlIGFuZCBzdXBwbHkgdGhlIEFQSSBvYmplY3Rcblx0XHRcdFx0XHRcdC8vIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byB0aGUgY2FsbGJhY2sgKGZvciBsZWdhY3kgY29kZSlcblx0XHRcdFx0XHRcdHRoaXMub25TdWNjZXNzLmNhbGwodGhpcy5wYXJlbnQsIHRoaXMpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlbGVtLmluZm8oJ+WujOaIkCcpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZCgpO1xuXHRcdFx0XHRcdHJldHVybiAkLkRlZmVycmVkKCkucmVzb2x2ZVdpdGgodGhpcy5wYXJlbnQsIFt0aGlzXSk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdC8vIG9ubHkgbmV0d29yayBhbmQgc2VydmVyIGVycm9ycyByZWFjaCBoZXJlIC0gY29tcGxhaW50cyBmcm9tIHRoZSBBUEkgaXRzZWxmIGFyZSBjYXVnaHQgaW4gc3VjY2VzcygpXG5cdFx0XHRcdGZ1bmN0aW9uIG9uQVBJZmFpbHVyZShlcnJvciwgc3RhdHVzVGV4dCwgZXJyb3JUaHJvd24pIHtcblx0XHRcdFx0XHR0aGlzLnN0YXR1c1RleHQgPSBzdGF0dXNUZXh0O1xuXHRcdFx0XHRcdHRoaXMuZXJyb3JUaHJvd24gPSBlcnJvclRocm93bjsgLy8gZnJlcXVlbnRseSB1bmRlZmluZWRcblx0XHRcdFx0XHR0aGlzLmVycm9yVGV4dCA9XG5cdFx0XHRcdFx0XHRzdGF0dXNUZXh0ICtcblx0XHRcdFx0XHRcdHdnVUxTKCflnKjosIPnlKhBUEnml7blj5HnlJ/kuobplJnor6/igJwnLCAn5Zyo5ZG85Y+rQVBJ5pmC55m855Sf5LqG6Yyv6Kqk44CMJykgK1xuXHRcdFx0XHRcdFx0ZXJyb3Iuc3RhdHVzVGV4dCArXG5cdFx0XHRcdFx0XHR3Z1VMUygn4oCd44CCJywgJ+OAjeOAgicpO1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLnJldHVybkVycm9yKCk7XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0fSxcblx0XHRyZXR1cm5FcnJvcihjYWxsZXJBamF4UGFyYW1ldGVycykge1xuXHRcdFx0aWYgKHRoaXMuZXJyb3JDb2RlID09PSAnYmFkdG9rZW4nICYmICF0aGlzLmJhZHRva2VuUmV0cnkpIHtcblx0XHRcdFx0dGhpcy5zdGF0ZWxlbS53YXJuKHdnVUxTKCfml6DmlYjku6TniYzvvIzojrflj5bmlrDnmoTku6TniYzlubbph43or5XigKbigKYnLCAn54Sh5pWI5qyK5p2W77yM5Y+W5b6X5paw55qE5qyK5p2W5Lim6YeN6Kmm4oCm4oCmJykpO1xuXHRcdFx0XHR0aGlzLmJhZHRva2VuUmV0cnkgPSB0cnVlO1xuXHRcdFx0XHQvLyBHZXQgYSBuZXcgQ1NSRiB0b2tlbiBhbmQgcmV0cnkuIElmIHRoZSBvcmlnaW5hbCBhY3Rpb24gbmVlZHMgYSBkaWZmZXJlbnRcblx0XHRcdFx0Ly8gdHlwZSBvZiBhY3Rpb24gdGhhbiBDU1JGLCB3ZSBkbyBvbmUgcG9pbnRsZXNzIHJldHJ5IGJlZm9yZSBiYWlsaW5nIG91dFxuXHRcdFx0XHRyZXR1cm4gTW9yZWJpdHMud2lraS5hcGkuZ2V0VG9rZW4oKS50aGVuKCh0b2tlbikgPT4ge1xuXHRcdFx0XHRcdHRoaXMucXVlcnkudG9rZW4gPSB0b2tlbjtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5wb3N0KGNhbGxlckFqYXhQYXJhbWV0ZXJzKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnN0YXRlbGVtLmVycm9yKGAke3RoaXMuZXJyb3JUZXh0fe+8iCR7dGhpcy5lcnJvckNvZGV977yJYCk7XG5cdFx0XHQvLyBpbnZva2UgZmFpbHVyZSBjYWxsYmFjayBpZiBvbmUgd2FzIHN1cHBsaWVkXG5cdFx0XHRpZiAodGhpcy5vbkVycm9yKSB7XG5cdFx0XHRcdC8vIHNldCB0aGUgY2FsbGJhY2sgY29udGV4dCB0byB0aGlzLnBhcmVudCBmb3IgbmV3IGNvZGUgYW5kIHN1cHBseSB0aGUgQVBJIG9iamVjdFxuXHRcdFx0XHQvLyBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gdGhlIGNhbGxiYWNrIGZvciBsZWdhY3kgY29kZVxuXHRcdFx0XHR0aGlzLm9uRXJyb3IuY2FsbCh0aGlzLnBhcmVudCwgdGhpcyk7XG5cdFx0XHR9XG5cdFx0XHQvLyBkb24ndCBjb21wbGV0ZSB0aGUgYWN0aW9uIHNvIHRoYXQgdGhlIGVycm9yIHJlbWFpbnMgZGlzcGxheWVkXG5cdFx0XHRyZXR1cm4gJC5EZWZlcnJlZCgpLnJlamVjdFdpdGgodGhpcy5wYXJlbnQsIFt0aGlzXSk7XG5cdFx0fSxcblx0XHRnZXRTdGF0dXNFbGVtZW50KCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuc3RhdGVsZW07XG5cdFx0fSxcblx0XHRnZXRFcnJvckNvZGUoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5lcnJvckNvZGU7XG5cdFx0fSxcblx0XHRnZXRFcnJvclRleHQoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5lcnJvclRleHQ7XG5cdFx0fSxcblx0XHRnZXRYTUwoKSB7XG5cdFx0XHQvLyByZXRhaW5lZCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHksIHVzZSBnZXRSZXNwb25zZSgpIGluc3RlYWRcblx0XHRcdHJldHVybiB0aGlzLnJlc3BvbnNlWE1MO1xuXHRcdH0sXG5cdFx0Z2V0UmVzcG9uc2UoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yZXNwb25zZTtcblx0XHR9LFxuXHR9O1xuXHQvKipcblx0ICogUmV0cmlldmVzIHdpa2l0ZXh0IGZyb20gYSBwYWdlLiBDYWNoaW5nIGVuYWJsZWQsIGR1cmF0aW9uIDEgZGF5LlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGl0bGVcblx0ICovXG5cdE1vcmViaXRzLndpa2kuZ2V0Q2FjaGVkSnNvbiA9ICh0aXRsZSkgPT4ge1xuXHRcdGNvbnN0IHF1ZXJ5ID0ge1xuXHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0cHJvcDogJ3JldmlzaW9ucycsXG5cdFx0XHR0aXRsZXM6IHRpdGxlLFxuXHRcdFx0cnZzbG90czogJyonLFxuXHRcdFx0cnZwcm9wOiAnY29udGVudCcsXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdHNtYXhhZ2U6ICczNjAwJyxcblx0XHRcdG1heGFnZTogJzM2MDAnLFxuXHRcdH07XG5cblx0XHRyZXR1cm4gbmV3IE1vcmViaXRzLndpa2kuYXBpKCcnLCBxdWVyeSkucG9zdCgpLnRoZW4oKGFwaW9iaikgPT4ge1xuXHRcdFx0YXBpb2JqLmdldFN0YXR1c0VsZW1lbnQoKS51bmxpbmsoKTtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXBpb2JqLmdldFJlc3BvbnNlKCk7XG5cdFx0XHRjb25zdCB3aWtpdGV4dCA9IHJlc3BvbnNlLnF1ZXJ5LnBhZ2VzWzBdLnJldmlzaW9uc1swXS5zbG90cy5tYWluLmNvbnRlbnQ7XG5cdFx0XHRyZXR1cm4gSlNPTi5wYXJzZSh3aWtpdGV4dCk7XG5cdFx0fSk7XG5cdH07XG5cdGxldCBtb3JlYml0c1dpa2lBcGlVc2VyQWdlbnQgPSAnUWl1d2VuLzEuMSAobW9yZWJpdHMuanMpJztcblx0LyoqXG5cdCAqIFNldCB0aGUgY3VzdG9tIHVzZXIgYWdlbnQgaGVhZGVyLCB3aGljaCBpcyB1c2VkIGZvciBzZXJ2ZXItc2lkZSBsb2dnaW5nLlxuXHQgKiBOb3RlIHRoYXQgZG9pbmcgc28gd2lsbCBzZXQgdGhlIHVzZXJhZ2VudCBmb3IgZXZlcnkgYE1vcmViaXRzLndpa2kuYXBpYFxuXHQgKiBwcm9jZXNzIHBlcmZvcm1lZCB0aGVyZWFmdGVyLlxuXHQgKlxuXHQgKiBAc2VlIHtAbGluayBodHRwczovL2xpc3RzLndpa2ltZWRpYS5vcmcvcGlwZXJtYWlsL21lZGlhd2lraS1hcGktYW5ub3VuY2UvMjAxNC1Ob3ZlbWJlci8wMDAwNzUuaHRtbH1cblx0ICogZm9yIG9yaWdpbmFsIGFubm91bmNlbWVudC5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLndpa2kuYXBpXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbdWE9UWl1d2VuLzEuMSAobW9yZWJpdHMuanMpXSAtIFVzZXIgYWdlbnQuICBUaGUgZGVmYXVsdFxuXHQgKiB2YWx1ZSBvZiBgbW9yZWJpdHMuanNgIHdpbGwgYmUgYXBwZW5kZWQgdG8gYW55IHByb3ZpZGVkXG5cdCAqIHZhbHVlLlxuXHQgKi9cblx0TW9yZWJpdHMud2lraS5hcGkuc2V0QXBpVXNlckFnZW50ID0gKHVhKSA9PiB7XG5cdFx0bW9yZWJpdHNXaWtpQXBpVXNlckFnZW50ID0gYFFpdXdlbi8xLjEgKG1vcmViaXRzLmpzJHt1YSA/IGA7ICR7dWF9YCA6ICcnfSlgO1xuXHR9O1xuXHQvKipcblx0ICogQ2hhbmdlL3JldmlzaW9uIHRhZyBhcHBsaWVkIHRvIE1vcmViaXRzIGFjdGlvbnMgd2hlbiBubyBvdGhlciB0YWdzIGFyZSBzcGVjaWZpZWQuXG5cdCAqIFVudXNlZCBieSBkZWZhdWx0LlxuXHQgKlxuXHQgKiBAY29uc3RhbnRcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLndpa2kuYXBpXG5cdCAqIEB0eXBlIHtzdHJpbmd9XG5cdCAqL1xuXHRjb25zdCBtb3JlYml0c1dpa2lDaGFuZ2VUYWcgPSAnJztcblx0LyoqXG5cdCAqIEdldCBhIG5ldyBDU1JGIHRva2VuIG9uIGVuY291bnRlcmluZyB0b2tlbiBlcnJvcnMuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpLmFwaVxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfSBNZWRpYVdpa2kgQ1NSRiB0b2tlbi5cblx0ICovXG5cdE1vcmViaXRzLndpa2kuYXBpLmdldFRva2VuID0gKCkgPT4ge1xuXHRcdGNvbnN0IHRva2VuQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKHdnVUxTKCfojrflj5bku6TniYwnLCAn5Y+W5b6X5qyK5p2WJyksIHtcblx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdG1ldGE6ICd0b2tlbnMnLFxuXHRcdFx0dHlwZTogJ2NzcmYnLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0fSk7XG5cdFx0cmV0dXJuIHRva2VuQXBpLnBvc3QoKS50aGVuKChhcGlvYmopID0+IHtcblx0XHRcdHJldHVybiBhcGlvYmoucmVzcG9uc2UucXVlcnkudG9rZW5zLmNzcmZ0b2tlbjtcblx0XHR9KTtcblx0fTtcblx0LyogKioqKioqKioqKioqKioqKiBNb3JlYml0cy53aWtpLnBhZ2UgKioqKioqKioqKioqKioqKiAqL1xuXHQvKipcblx0ICogVXNlIHRoZSBNZWRpYVdpa2kgQVBJIHRvIGxvYWQgYSBwYWdlIGFuZCBvcHRpb25hbGx5IGVkaXQgaXQsIG1vdmUgaXQsIGV0Yy5cblx0ICpcblx0ICogQ2FsbGVycyBhcmUgbm90IHBlcm1pdHRlZCB0byBkaXJlY3RseSBhY2Nlc3MgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBjbGFzcyFcblx0ICogQWxsIHByb3BlcnR5IGFjY2VzcyBpcyB0aHJvdWdoIHRoZSBhcHByb3ByaWF0ZSBnZXRfX18oKSBvciBzZXRfX18oKSBtZXRob2QuXG5cdCAqXG5cdCAqIENhbGxlcnMgc2hvdWxkIHNldCB7QGxpbmsgTW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQubm90aWNlfSBhbmQge0BsaW5rIE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLnJlZGlyZWN0fVxuXHQgKiBiZWZvcmUgdGhlIGZpcnN0IGNhbGwgdG8ge0BsaW5rIE1vcmViaXRzLndpa2kucGFnZS5sb2FkKCl9LlxuXHQgKlxuXHQgKiBFYWNoIG9mIHRoZSBjYWxsYmFjayBmdW5jdGlvbnMgdGFrZXMgb25lIHBhcmFtZXRlciwgd2hpY2ggaXMgYVxuXHQgKiByZWZlcmVuY2UgdG8gdGhlIE1vcmViaXRzLndpa2kucGFnZSBvYmplY3QgdGhhdCByZWdpc3RlcmVkIHRoZSBjYWxsYmFjay5cblx0ICogQ2FsbGJhY2sgZnVuY3Rpb25zIG1heSBpbnZva2UgYW55IE1vcmViaXRzLndpa2kucGFnZSBwcm90b3R5cGUgbWV0aG9kIHVzaW5nIHRoaXMgcmVmZXJlbmNlLlxuXHQgKlxuXHQgKlxuXHQgKiBDYWxsIHNlcXVlbmNlIGZvciBjb21tb24gb3BlcmF0aW9ucyAob3B0aW9uYWwgZmluYWwgdXNlciBjYWxsYmFja3Mgbm90IHNob3duKTpcblx0ICpcblx0ICogLSBFZGl0IGN1cnJlbnQgY29udGVudHMgb2YgYSBwYWdlIChubyBlZGl0IGNvbmZsaWN0KTpcblx0ICogYC5sb2FkKHVzZXJUZXh0RWRpdENhbGxiYWNrKSAtPiBjdHgubG9hZEFwaS5wb3N0KCkgLT5cblx0ICogY3R4LmxvYWRBcGkucG9zdC5zdWNjZXNzKCkgLT4gY3R4LmZuTG9hZFN1Y2Nlc3MoKSAtPiB1c2VyVGV4dEVkaXRDYWxsYmFjaygpIC0+XG5cdCAqIC5zYXZlKCkgLT4gY3R4LnNhdmVBcGkucG9zdCgpIC0+IGN0eC5sb2FkQXBpLnBvc3Quc3VjY2VzcygpIC0+IGN0eC5mblNhdmVTdWNjZXNzKClgXG5cdCAqXG5cdCAqIC0gRWRpdCBjdXJyZW50IGNvbnRlbnRzIG9mIGEgcGFnZSAod2l0aCBlZGl0IGNvbmZsaWN0KTpcblx0ICogYC5sb2FkKHVzZXJUZXh0RWRpdENhbGxiYWNrKSAtPiBjdHgubG9hZEFwaS5wb3N0KCkgLT5cblx0ICogY3R4LmxvYWRBcGkucG9zdC5zdWNjZXNzKCkgLT4gY3R4LmZuTG9hZFN1Y2Nlc3MoKSAtPiB1c2VyVGV4dEVkaXRDYWxsYmFjaygpIC0+XG5cdCAqIC5zYXZlKCkgLT4gY3R4LnNhdmVBcGkucG9zdCgpIC0+IGN0eC5sb2FkQXBpLnBvc3Quc3VjY2VzcygpIC0+XG5cdCAqIGN0eC5mblNhdmVFcnJvcigpIC0+IGN0eC5sb2FkQXBpLnBvc3QoKSAtPiBjdHgubG9hZEFwaS5wb3N0LnN1Y2Nlc3MoKSAtPlxuXHQgKiBjdHguZm5Mb2FkU3VjY2VzcygpIC0+IHVzZXJUZXh0RWRpdENhbGxiYWNrKCkgLT4gLnNhdmUoKSAtPlxuXHQgKiBjdHguc2F2ZUFwaS5wb3N0KCkgLT4gY3R4LmxvYWRBcGkucG9zdC5zdWNjZXNzKCkgLT4gY3R4LmZuU2F2ZVN1Y2Nlc3MoKWBcblx0ICpcblx0ICogLSBBcHBlbmQgdG8gYSBwYWdlIChzaW1pbGFyIGZvciBwcmVwZW5kIGFuZCBuZXdTZWN0aW9uKTpcblx0ICogYC5hcHBlbmQoKSAtPiBjdHgubG9hZEFwaS5wb3N0KCkgLT4gY3R4LmxvYWRBcGkucG9zdC5zdWNjZXNzKCkgLT5cblx0ICogY3R4LmZuTG9hZFN1Y2Nlc3MoKSAtPiBjdHguZm5BdXRvU2F2ZSgpIC0+IC5zYXZlKCkgLT4gY3R4LnNhdmVBcGkucG9zdCgpIC0+XG5cdCAqIGN0eC5sb2FkQXBpLnBvc3Quc3VjY2VzcygpIC0+IGN0eC5mblNhdmVTdWNjZXNzKClgXG5cdCAqXG5cdCAqIE5vdGVzOlxuXHQgKiAxLiBBbGwgZnVuY3Rpb25zIGZvbGxvd2luZyBNb3JlYml0cy53aWtpLmFwaS5wb3N0KCkgYXJlIGludm9rZWQgYXN5bmNocm9ub3VzbHkgZnJvbSB0aGUgalF1ZXJ5IEFKQVggbGlicmFyeS5cblx0ICogMi4gVGhlIHNlcXVlbmNlIGZvciBhcHBlbmQvcHJlcGVuZC9uZXdTZWN0aW9uIGNvdWxkIGJlIHNsaWdodGx5IHNob3J0ZW5lZCxcblx0ICogYnV0IGl0IHdvdWxkIHJlcXVpcmUgc2lnbmlmaWNhbnQgZHVwbGljYXRpb24gb2YgY29kZSBmb3IgbGl0dGxlIGJlbmVmaXQuXG5cdCAqXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpXG5cdCAqIEBjbGFzc1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gcGFnZU5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgcGFnZSwgcHJlZml4ZWQgYnkgdGhlIG5hbWVzcGFjZSAoaWYgYW55KS5cblx0ICogRm9yIHRoZSBjdXJyZW50IHBhZ2UsIHVzZSBgbXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpYC5cblx0ICogQHBhcmFtIHtzdHJpbmd8TW9yZWJpdHMuc3RhdHVzfSBbc3RhdHVzXSAtIEEgc3RyaW5nIGRlc2NyaWJpbmcgdGhlIGFjdGlvbiBhYm91dCB0byBiZSB1bmRlcnRha2VuLFxuXHQgKiBvciBhIE1vcmViaXRzLnN0YXR1cyBvYmplY3Rcblx0ICovXG5cdE1vcmViaXRzLndpa2kucGFnZSA9IGZ1bmN0aW9uIChwYWdlTmFtZSwgc3RhdHVzKSB7XG5cdFx0aWYgKCFzdGF0dXMpIHtcblx0XHRcdHN0YXR1cyA9IHdnVUxTKCfmiZPlvIDpobXpnaLigJwnLCAn5omT6ZaL6aCB6Z2i44CMJykgKyBwYWdlTmFtZSArIHdnVUxTKCfigJ0nLCAn44CNJyk7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIFByaXZhdGUgY29udGV4dCB2YXJpYWJsZXMuXG5cdFx0ICpcblx0XHQgKiBUaGlzIGNvbnRleHQgaXMgbm90IHZpc2libGUgdG8gdGhlIG91dHNpZGUsIHRodXMgYWxsIHRoZSBkYXRhIGhlcmVcblx0XHQgKiBtdXN0IGJlIGFjY2Vzc2VkIHZpYSBnZXR0ZXIgYW5kIHNldHRlciBmdW5jdGlvbnMuXG5cdFx0ICpcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdGNvbnN0IGN0eCA9IHtcblx0XHRcdC8vIGJhY2tpbmcgZmllbGRzIGZvciBwdWJsaWMgcHJvcGVydGllc1xuXHRcdFx0cGFnZU5hbWUsXG5cdFx0XHRwYWdlRXhpc3RzOiBmYWxzZSxcblx0XHRcdGVkaXRTdW1tYXJ5OiBudWxsLFxuXHRcdFx0Y2hhbmdlVGFnczogbnVsbCxcblx0XHRcdHRlc3RBY3Rpb25zOiBudWxsLFxuXHRcdFx0Ly8gYXJyYXkgaWYgYW55IHZhbGlkIGFjdGlvbnNcblx0XHRcdGNhbGxiYWNrUGFyYW1ldGVyczogbnVsbCxcblx0XHRcdHN0YXR1c0VsZW1lbnQ6IHN0YXR1cyBpbnN0YW5jZW9mIE1vcmViaXRzLnN0YXR1cyA/IHN0YXR1cyA6IG5ldyBNb3JlYml0cy5zdGF0dXMoc3RhdHVzKSxcblx0XHRcdC8vIC0gZWRpdFxuXHRcdFx0cGFnZVRleHQ6IG51bGwsXG5cdFx0XHRlZGl0TW9kZTogJ2FsbCcsXG5cdFx0XHQvLyBzYXZlKCkgcmVwbGFjZXMgZW50aXJlIGNvbnRlbnRzIG9mIHRoZSBwYWdlIGJ5IGRlZmF1bHRcblx0XHRcdGFwcGVuZFRleHQ6IG51bGwsXG5cdFx0XHQvLyBjYW4ndCByZXVzZSBwYWdlVGV4dCBmb3IgdGhpcyBiZWNhdXNlIHBhZ2VUZXh0IGlzIG5lZWRlZCB0byBmb2xsb3cgYSByZWRpcmVjdFxuXHRcdFx0cHJlcGVuZFRleHQ6IG51bGwsXG5cdFx0XHQvLyBjYW4ndCByZXVzZSBwYWdlVGV4dCBmb3IgdGhpcyBiZWNhdXNlIHBhZ2VUZXh0IGlzIG5lZWRlZCB0byBmb2xsb3cgYSByZWRpcmVjdFxuXHRcdFx0bmV3U2VjdGlvblRleHQ6IG51bGwsXG5cdFx0XHRuZXdTZWN0aW9uVGl0bGU6IG51bGwsXG5cdFx0XHRjcmVhdGVPcHRpb246IG51bGwsXG5cdFx0XHRtaW5vckVkaXQ6IGZhbHNlLFxuXHRcdFx0Ym90RWRpdDogZmFsc2UsXG5cdFx0XHRwYWdlU2VjdGlvbjogbnVsbCxcblx0XHRcdG1heENvbmZsaWN0UmV0cmllczogMixcblx0XHRcdG1heFJldHJpZXM6IDIsXG5cdFx0XHRmb2xsb3dSZWRpcmVjdDogZmFsc2UsXG5cdFx0XHRmb2xsb3dDcm9zc05zUmVkaXJlY3Q6IHRydWUsXG5cdFx0XHR3YXRjaGxpc3RPcHRpb246ICdub2NoYW5nZScsXG5cdFx0XHR3YXRjaGxpc3RFeHBpcnk6IG51bGwsXG5cdFx0XHRjcmVhdG9yOiBudWxsLFxuXHRcdFx0dGltZXN0YW1wOiBudWxsLFxuXHRcdFx0Ly8gLSByZXZlcnRcblx0XHRcdHJldmVydE9sZElEOiBudWxsLFxuXHRcdFx0Ly8gLSBtb3ZlXG5cdFx0XHRtb3ZlRGVzdGluYXRpb246IG51bGwsXG5cdFx0XHRtb3ZlVGFsa1BhZ2U6IGZhbHNlLFxuXHRcdFx0bW92ZVN1YnBhZ2VzOiBmYWxzZSxcblx0XHRcdG1vdmVTdXBwcmVzc1JlZGlyZWN0OiBmYWxzZSxcblx0XHRcdC8vIC0gcHJvdGVjdFxuXHRcdFx0cHJvdGVjdEVkaXQ6IG51bGwsXG5cdFx0XHRwcm90ZWN0TW92ZTogbnVsbCxcblx0XHRcdHByb3RlY3RDcmVhdGU6IG51bGwsXG5cdFx0XHRwcm90ZWN0Q2FzY2FkZTogbnVsbCxcblx0XHRcdC8vIC0gY3JlYXRpb24gbG9va3VwXG5cdFx0XHRsb29rdXBOb25SZWRpcmVjdENyZWF0b3I6IGZhbHNlLFxuXHRcdFx0Ly8gaW50ZXJuYWwgc3RhdHVzXG5cdFx0XHRwYWdlTG9hZGVkOiBmYWxzZSxcblx0XHRcdGNzcmZUb2tlbjogbnVsbCxcblx0XHRcdGxvYWRUaW1lOiBudWxsLFxuXHRcdFx0bGFzdEVkaXRUaW1lOiBudWxsLFxuXHRcdFx0cGFnZUlEOiBudWxsLFxuXHRcdFx0Y29udGVudE1vZGVsOiBudWxsLFxuXHRcdFx0cmV2ZXJ0Q3VySUQ6IG51bGwsXG5cdFx0XHRyZXZlcnRVc2VyOiBudWxsLFxuXHRcdFx0d2F0Y2hlZDogZmFsc2UsXG5cdFx0XHRmdWxseVByb3RlY3RlZDogZmFsc2UsXG5cdFx0XHRzdXBwcmVzc1Byb3RlY3RXYXJuaW5nOiBmYWxzZSxcblx0XHRcdGNvbmZsaWN0UmV0cmllczogMCxcblx0XHRcdHJldHJpZXM6IDAsXG5cdFx0XHQvLyBjYWxsYmFja3Ncblx0XHRcdG9uTG9hZFN1Y2Nlc3M6IG51bGwsXG5cdFx0XHRvbkxvYWRGYWlsdXJlOiBudWxsLFxuXHRcdFx0b25TYXZlU3VjY2VzczogbnVsbCxcblx0XHRcdG9uU2F2ZUZhaWx1cmU6IG51bGwsXG5cdFx0XHRvbkxvb2t1cENyZWF0aW9uU3VjY2VzczogbnVsbCxcblx0XHRcdG9uTG9va3VwQ3JlYXRpb25GYWlsdXJlOiBudWxsLFxuXHRcdFx0b25Nb3ZlU3VjY2VzczogbnVsbCxcblx0XHRcdG9uTW92ZUZhaWx1cmU6IG51bGwsXG5cdFx0XHRvbkRlbGV0ZVN1Y2Nlc3M6IG51bGwsXG5cdFx0XHRvbkRlbGV0ZUZhaWx1cmU6IG51bGwsXG5cdFx0XHRvblVuZGVsZXRlU3VjY2VzczogbnVsbCxcblx0XHRcdG9uVW5kZWxldGVGYWlsdXJlOiBudWxsLFxuXHRcdFx0b25Qcm90ZWN0U3VjY2VzczogbnVsbCxcblx0XHRcdG9uUHJvdGVjdEZhaWx1cmU6IG51bGwsXG5cdFx0XHQvLyBpbnRlcm5hbCBvYmplY3RzXG5cdFx0XHRsb2FkUXVlcnk6IG51bGwsXG5cdFx0XHRsb2FkQXBpOiBudWxsLFxuXHRcdFx0c2F2ZUFwaTogbnVsbCxcblx0XHRcdGxvb2t1cENyZWF0aW9uQXBpOiBudWxsLFxuXHRcdFx0bW92ZUFwaTogbnVsbCxcblx0XHRcdG1vdmVQcm9jZXNzQXBpOiBudWxsLFxuXHRcdFx0cGF0cm9sQXBpOiBudWxsLFxuXHRcdFx0cGF0cm9sUHJvY2Vzc0FwaTogbnVsbCxcblx0XHRcdGRlbGV0ZUFwaTogbnVsbCxcblx0XHRcdGRlbGV0ZVByb2Nlc3NBcGk6IG51bGwsXG5cdFx0XHR1bmRlbGV0ZUFwaTogbnVsbCxcblx0XHRcdHVuZGVsZXRlUHJvY2Vzc0FwaTogbnVsbCxcblx0XHRcdHByb3RlY3RBcGk6IG51bGwsXG5cdFx0XHRwcm90ZWN0UHJvY2Vzc0FwaTogbnVsbCxcblx0XHR9O1xuXHRcdGNvbnN0IGVtcHR5RnVuY3Rpb24gPSAoKSA9PiB7fTtcblx0XHQvKipcblx0XHQgKiBMb2FkcyB0aGUgdGV4dCBmb3IgdGhlIHBhZ2UuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBvblN1Y2Nlc3MgLSBDYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgd2hlbiB0aGUgbG9hZCBoYXMgc3VjY2VlZGVkLlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvbkZhaWx1cmVdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIHdoZW4gdGhlIGxvYWQgZmFpbHMuXG5cdFx0ICovXG5cdFx0dGhpcy5sb2FkID0gZnVuY3Rpb24gKG9uU3VjY2Vzcywgb25GYWlsdXJlKSB7XG5cdFx0XHRjdHgub25Mb2FkU3VjY2VzcyA9IG9uU3VjY2Vzcztcblx0XHRcdGN0eC5vbkxvYWRGYWlsdXJlID0gb25GYWlsdXJlIHx8IGVtcHR5RnVuY3Rpb247XG5cdFx0XHQvLyBOZWVkIHRvIGJlIGFibGUgdG8gZG8gc29tZXRoaW5nIGFmdGVyIHRoZSBwYWdlIGxvYWRzXG5cdFx0XHRpZiAoIW9uU3VjY2Vzcykge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcignSW50ZXJuYWwgZXJyb3I6IG5vIG9uU3VjY2VzcyBjYWxsYmFjayBwcm92aWRlZCB0byBsb2FkKCkhJyk7XG5cdFx0XHRcdGN0eC5vbkxvYWRGYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjdHgubG9hZFF1ZXJ5ID0ge1xuXHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdHByb3A6ICdpbmZvfHJldmlzaW9ucycsXG5cdFx0XHRcdGlucHJvcDogJ3dhdGNoZWQnLFxuXHRcdFx0XHRpbnRlc3RhY3Rpb25zOiAnZWRpdCcsXG5cdFx0XHRcdC8vIGNhbiBiZSBleHBhbmRlZFxuXHRcdFx0XHRjdXJ0aW1lc3RhbXA6ICcnLFxuXHRcdFx0XHRtZXRhOiAndG9rZW5zJyxcblx0XHRcdFx0dHlwZTogJ2NzcmYnLFxuXHRcdFx0XHR0aXRsZXM6IGN0eC5wYWdlTmFtZSxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdC8vIGRvbid0IG5lZWQgcnZsaW1pdD0xIGJlY2F1c2Ugd2UgZG9uJ3QgbmVlZCBydnN0YXJ0aWQgaGVyZSBhbmQgb25seSBvbmUgYWN0dWFsIHJldiBpcyByZXR1cm5lZCBieSBkZWZhdWx0XG5cdFx0XHR9O1xuXG5cdFx0XHRpZiAoY3R4LmVkaXRNb2RlID09PSAnYWxsJykge1xuXHRcdFx0XHRjdHgubG9hZFF1ZXJ5LnJ2cHJvcCA9ICdjb250ZW50fHRpbWVzdGFtcCc7IC8vIGdldCB0aGUgcGFnZSBjb250ZW50IGF0IHRoZSBzYW1lIHRpbWUsIGlmIG5lZWRlZFxuXHRcdFx0fSBlbHNlIGlmIChjdHguZWRpdE1vZGUgPT09ICdyZXZlcnQnKSB7XG5cdFx0XHRcdGN0eC5sb2FkUXVlcnkucnZwcm9wID0gJ3RpbWVzdGFtcCc7XG5cdFx0XHRcdGN0eC5sb2FkUXVlcnkucnZsaW1pdCA9IDE7XG5cdFx0XHRcdGN0eC5sb2FkUXVlcnkucnZzdGFydGlkID0gY3R4LnJldmVydE9sZElEO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGN0eC5mb2xsb3dSZWRpcmVjdCkge1xuXHRcdFx0XHRjdHgubG9hZFF1ZXJ5LnJlZGlyZWN0cyA9ICcnOyAvLyBmb2xsb3cgYWxsIHJlZGlyZWN0c1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodHlwZW9mIGN0eC5wYWdlU2VjdGlvbiA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y3R4LmxvYWRRdWVyeS5ydnNlY3Rpb24gPSBjdHgucGFnZVNlY3Rpb247XG5cdFx0XHR9XG5cdFx0XHRpZiAoTW9yZWJpdHMudXNlcklzU3lzb3ApIHtcblx0XHRcdFx0Y3R4LmxvYWRRdWVyeS5pbnByb3AgKz0gJ3xwcm90ZWN0aW9uJztcblx0XHRcdH1cblx0XHRcdGN0eC5sb2FkQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0XHR3Z1VMUygn5oqT5Y+W6aG16Z2i4oCm4oCmJywgJ+aKk+WPlumggemdouKApuKApicpLFxuXHRcdFx0XHRjdHgubG9hZFF1ZXJ5LFxuXHRcdFx0XHRmbkxvYWRTdWNjZXNzLFxuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudCxcblx0XHRcdFx0Y3R4Lm9uTG9hZEZhaWx1cmVcblx0XHRcdCk7XG5cdFx0XHRjdHgubG9hZEFwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0XHRjdHgubG9hZEFwaS5wb3N0KCk7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBTYXZlcyB0aGUgdGV4dCBmb3IgdGhlIHBhZ2UgdG8gV2lraXBlZGlhLlxuXHRcdCAqIE11c3QgYmUgcHJlY2VkZWQgYnkgc3VjY2Vzc2Z1bGx5IGNhbGxpbmcgYGxvYWQoKWAuXG5cdFx0ICpcblx0XHQgKiBXYXJuaW5nOiBDYWxsaW5nIGBzYXZlKClgIGNhbiByZXN1bHQgaW4gYWRkaXRpb25hbCBjYWxscyB0byB0aGVcblx0XHQgKiBwcmV2aW91cyBgbG9hZCgpYCBjYWxsYmFja3MgdG8gcmVjb3ZlciBmcm9tIGVkaXQgY29uZmxpY3RzISBJbiB0aGlzXG5cdFx0ICogY2FzZSwgY2FsbGVycyBtdXN0IG1ha2UgdGhlIHNhbWUgZWRpdCB0byB0aGUgbmV3IHBhZ2VUZXh0IGFuZFxuXHRcdCAqIHJlLWludm9rZSBgc2F2ZSgpYC4gIFRoaXMgYmVoYXZpb3IgY2FuIGJlIGRpc2FibGVkIHdpdGhcblx0XHQgKiBgc2V0TWF4Q29uZmxpY3RSZXRyaWVzKDApYC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvblN1Y2Nlc3NdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIHdoZW4gdGhlIHNhdmUgaGFzIHN1Y2NlZWRlZC5cblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25GYWlsdXJlXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCB3aGVuIHRoZSBzYXZlIGZhaWxzLlxuXHRcdCAqL1xuXHRcdHRoaXMuc2F2ZSA9IGZ1bmN0aW9uIChvblN1Y2Nlc3MsIG9uRmFpbHVyZSkge1xuXHRcdFx0Y3R4Lm9uU2F2ZVN1Y2Nlc3MgPSBvblN1Y2Nlc3M7XG5cdFx0XHRjdHgub25TYXZlRmFpbHVyZSA9IG9uRmFpbHVyZSB8fCBlbXB0eUZ1bmN0aW9uO1xuXHRcdFx0Ly8gYXJlIHdlIGdldHRpbmcgb3VyIGVkaXRpbmcgdG9rZW4gZnJvbSBtdy51c2VyLnRva2Vucz9cblx0XHRcdGNvbnN0IGNhblVzZU13VXNlclRva2VuID0gZm5DYW5Vc2VNd1VzZXJUb2tlbignZWRpdCcpO1xuXHRcdFx0aWYgKCFjdHgucGFnZUxvYWRlZCAmJiAhY2FuVXNlTXdVc2VyVG9rZW4pIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoJ0ludGVybmFsIGVycm9yOiBhdHRlbXB0IHRvIHNhdmUgYSBwYWdlIHRoYXQgaGFzIG5vdCBiZWVuIGxvYWRlZCEnKTtcblx0XHRcdFx0Y3R4Lm9uU2F2ZUZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmICghY3R4LmVkaXRTdW1tYXJ5KSB7XG5cdFx0XHRcdC8vIG5ldyBzZWN0aW9uIG1vZGUgYWxsb3dzIChuYXksIGVuY291cmFnZXMpIHVzaW5nIHRoZVxuXHRcdFx0XHQvLyB0aXRsZSBhcyB0aGUgZWRpdCBzdW1tYXJ5LCBidXQgdGhlIHF1ZXJ5IG5lZWRzXG5cdFx0XHRcdC8vIGVkaXRTdW1tYXJ5IHRvIGJlIHVuZGVmaW5lZCBvciAnJywgbm90IG51bGxcblx0XHRcdFx0aWYgKGN0eC5lZGl0TW9kZSA9PT0gJ25ldycgJiYgY3R4Lm5ld1NlY3Rpb25UaXRsZSkge1xuXHRcdFx0XHRcdGN0eC5lZGl0U3VtbWFyeSA9ICcnO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKCdJbnRlcm5hbCBlcnJvcjogZWRpdCBzdW1tYXJ5IG5vdCBzZXQgYmVmb3JlIHNhdmUhJyk7XG5cdFx0XHRcdFx0Y3R4Lm9uU2F2ZUZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyBzaG91bGRuJ3QgaGFwcGVuIGlmIGNhblVzZU13VXNlclRva2VuID09PSB0cnVlXG5cdFx0XHRpZiAoXG5cdFx0XHRcdGN0eC5mdWxseVByb3RlY3RlZCAmJlxuXHRcdFx0XHQhY3R4LnN1cHByZXNzUHJvdGVjdFdhcm5pbmcgJiZcblx0XHRcdFx0IWNvbmZpcm0oXG5cdFx0XHRcdFx0Y3R4LmZ1bGx5UHJvdGVjdGVkID09PSAnaW5maW5pdHknXG5cdFx0XHRcdFx0XHQ/IHdnVUxTKCfmgqjljbPlsIbnvJbovpHlhajkv53miqTpobXpnaLigJwnLCAn5oKo5Y2z5bCH57eo6Lyv5YWo5L+d6K236aCB6Z2i44CMJykgK1xuXHRcdFx0XHRcdFx0XHRcdGN0eC5wYWdlTmFtZSArXG5cdFx0XHRcdFx0XHRcdFx0d2dVTFMoXG5cdFx0XHRcdFx0XHRcdFx0XHQn4oCd77yI5peg6ZmQ5pyf77yJ44CCXFxuXFxu5Y2V5Ye756Gu5a6a5Lul56Gu5a6a77yM5oiW5Y2V5Ye75Y+W5raI5Lul5Y+W5raI5pON5L2c44CCJyxcblx0XHRcdFx0XHRcdFx0XHRcdCfjgI3vvIjnhKHpmZDmnJ/vvInjgIJcXG5cXG7pu57mk4rnorrlrprku6XnorrlrprvvIzmiJbpu57mk4rlj5bmtojku6Xlj5bmtojmk43kvZzjgIInXG5cdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0OiBgJHtcblx0XHRcdFx0XHRcdFx0XHR3Z1VMUygn5oKo5Y2z5bCG57yW6L6R5YWo5L+d5oqk6aG16Z2i4oCcJywgJ+aCqOWNs+Wwh+e3qOi8r+WFqOS/neitt+mggemdouOAjCcpICtcblx0XHRcdFx0XHRcdFx0XHRjdHgucGFnZU5hbWUgK1xuXHRcdFx0XHRcdFx0XHRcdHdnVUxTKCfigJ3vvIjliLDmnJ/vvJonLCAn44CN77yI5Yiw5pyf77yaJykgK1xuXHRcdFx0XHRcdFx0XHRcdG5ldyBNb3JlYml0cy5kYXRlKGN0eC5mdWxseVByb3RlY3RlZCkuY2FsZW5kYXIoJ3V0YycpXG5cdFx0XHRcdFx0XHRcdH0gKFVUQynvvInjgIJcXG5cXG4ke3dnVUxTKFxuXHRcdFx0XHRcdFx0XHRcdCfljZXlh7vnoa7lrprku6Xnoa7lrprvvIzmiJbljZXlh7vlj5bmtojku6Xlj5bmtojmk43kvZzjgIInLFxuXHRcdFx0XHRcdFx0XHRcdCfpu57mk4rnorrlrprku6XnorrlrprvvIzmiJbpu57mk4rlj5bmtojku6Xlj5bmtojmk43kvZzjgIInXG5cdFx0XHRcdFx0XHRcdCl9YFxuXHRcdFx0XHQpXG5cdFx0XHQpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2dVTFMoJ+W3suWPlua2iOWvueWFqOS/neaKpOmhtemdoueahOe8lui+keOAgicsICflt7Llj5bmtojlsI3lhajkv53orbfpoIHpnaLnmoTnt6jovK/jgIInKSk7XG5cdFx0XHRcdGN0eC5vblNhdmVGYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjdHgucmV0cmllcyA9IDA7XG5cdFx0XHRjb25zdCBxdWVyeSA9IHtcblx0XHRcdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0XHRcdHRpdGxlOiBjdHgucGFnZU5hbWUsXG5cdFx0XHRcdHN1bW1hcnk6IGN0eC5lZGl0U3VtbWFyeSxcblx0XHRcdFx0dG9rZW46IGNhblVzZU13VXNlclRva2VuID8gbXcudXNlci50b2tlbnMuZ2V0KCdjc3JmVG9rZW4nKSA6IGN0eC5jc3JmVG9rZW4sXG5cdFx0XHRcdHdhdGNobGlzdDogY3R4LndhdGNobGlzdE9wdGlvbixcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHR9O1xuXHRcdFx0aWYgKGN0eC5jaGFuZ2VUYWdzKSB7XG5cdFx0XHRcdHF1ZXJ5LnRhZ3MgPSBjdHguY2hhbmdlVGFncztcblx0XHRcdH1cblx0XHRcdGlmIChmbkFwcGx5V2F0Y2hsaXN0RXhwaXJ5KCkpIHtcblx0XHRcdFx0cXVlcnkud2F0Y2hsaXN0ZXhwaXJ5ID0gY3R4LndhdGNobGlzdEV4cGlyeTtcblx0XHRcdH1cblx0XHRcdGlmICh0eXBlb2YgY3R4LnBhZ2VTZWN0aW9uID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRxdWVyeS5zZWN0aW9uID0gY3R4LnBhZ2VTZWN0aW9uO1xuXHRcdFx0fVxuXHRcdFx0Ly8gU2V0IG1pbm9yIGVkaXQgYXR0cmlidXRlLiBJZiB0aGVzZSBwYXJhbWV0ZXJzIGFyZSBwcmVzZW50IHdpdGggYW55IHZhbHVlLCBpdCBpcyBpbnRlcnByZXRlZCBhcyB0cnVlXG5cdFx0XHRpZiAoY3R4Lm1pbm9yRWRpdCkge1xuXHRcdFx0XHRxdWVyeS5taW5vciA9IHRydWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRxdWVyeS5ub3RtaW5vciA9IHRydWU7IC8vIGZvcmNlIFR3aW5rbGUgY29uZmlnIHRvIG92ZXJyaWRlIHVzZXIgcHJlZmVyZW5jZSBzZXR0aW5nIGZvciBcImFsbCBlZGl0cyBhcmUgbWlub3JcIlxuXHRcdFx0fVxuXHRcdFx0Ly8gU2V0IGJvdCBlZGl0IGF0dHJpYnV0ZS4gSWYgdGhpcyBwYXJhbWV0ZXIgaXMgcHJlc2VudCB3aXRoIGFueSB2YWx1ZSwgaXQgaXMgaW50ZXJwcmV0ZWQgYXMgdHJ1ZVxuXHRcdFx0aWYgKGN0eC5ib3RFZGl0KSB7XG5cdFx0XHRcdHF1ZXJ5LmJvdCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0XHRzd2l0Y2ggKGN0eC5lZGl0TW9kZSkge1xuXHRcdFx0XHRjYXNlICdhcHBlbmQnOlxuXHRcdFx0XHRcdGlmIChjdHguYXBwZW5kVGV4dCA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoJ0ludGVybmFsIGVycm9yOiBhcHBlbmQgdGV4dCBub3Qgc2V0IGJlZm9yZSBzYXZlIScpO1xuXHRcdFx0XHRcdFx0Y3R4Lm9uU2F2ZUZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHF1ZXJ5LmFwcGVuZHRleHQgPSBjdHguYXBwZW5kVGV4dDsgLy8gdXNlIG1vZGUgdG8gYXBwZW5kIHRvIGN1cnJlbnQgcGFnZSBjb250ZW50c1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdwcmVwZW5kJzpcblx0XHRcdFx0XHRpZiAoY3R4LnByZXBlbmRUZXh0ID09PSBudWxsKSB7XG5cdFx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcignSW50ZXJuYWwgZXJyb3I6IHByZXBlbmQgdGV4dCBub3Qgc2V0IGJlZm9yZSBzYXZlIScpO1xuXHRcdFx0XHRcdFx0Y3R4Lm9uU2F2ZUZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHF1ZXJ5LnByZXBlbmR0ZXh0ID0gY3R4LnByZXBlbmRUZXh0OyAvLyB1c2UgbW9kZSB0byBwcmVwZW5kIHRvIGN1cnJlbnQgcGFnZSBjb250ZW50c1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICduZXcnOlxuXHRcdFx0XHRcdGlmICghY3R4Lm5ld1NlY3Rpb25UZXh0KSB7XG5cdFx0XHRcdFx0XHQvLyBBUEkgZG9lc24ndCBhbGxvdyBlbXB0eSBuZXcgc2VjdGlvbiB0ZXh0XG5cdFx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcignSW50ZXJuYWwgZXJyb3I6IG5ldyBzZWN0aW9uIHRleHQgbm90IHNldCBiZWZvcmUgc2F2ZSEnKTtcblx0XHRcdFx0XHRcdGN0eC5vblNhdmVGYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRxdWVyeS5zZWN0aW9uID0gJ25ldyc7XG5cdFx0XHRcdFx0cXVlcnkudGV4dCA9IGN0eC5uZXdTZWN0aW9uVGV4dDsgLy8gYWRkIGEgbmV3IHNlY3Rpb24gdG8gY3VycmVudCBwYWdlXG5cdFx0XHRcdFx0cXVlcnkuc2VjdGlvbnRpdGxlID0gY3R4Lm5ld1NlY3Rpb25UaXRsZSB8fCBjdHguZWRpdFN1bW1hcnk7IC8vIGRvbmUgYnkgdGhlIEFQSSwgYnV0IG5vbi0nJyB2YWx1ZXMgd291bGQgZ2V0IHRyZWF0ZWQgYXMgdGV4dFxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdyZXZlcnQnOlxuXHRcdFx0XHRcdHF1ZXJ5LnVuZG8gPSBjdHgucmV2ZXJ0Q3VySUQ7XG5cdFx0XHRcdFx0cXVlcnkudW5kb2FmdGVyID0gY3R4LnJldmVydE9sZElEO1xuXHRcdFx0XHRcdGlmIChjdHgubGFzdEVkaXRUaW1lKSB7XG5cdFx0XHRcdFx0XHRxdWVyeS5iYXNldGltZXN0YW1wID0gY3R4Lmxhc3RFZGl0VGltZTsgLy8gY2hlY2sgdGhhdCBwYWdlIGhhc24ndCBiZWVuIGVkaXRlZCBzaW5jZSBpdCB3YXMgbG9hZGVkXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cXVlcnkuc3RhcnR0aW1lc3RhbXAgPSBjdHgubG9hZFRpbWU7IC8vIGNoZWNrIHRoYXQgcGFnZSBoYXNuJ3QgYmVlbiBkZWxldGVkIHNpbmNlIGl0IHdhcyBsb2FkZWQgKGRvbid0IHJlY3JlYXRlIGJhZCBzdHVmZilcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHQvLyAnYWxsJ1xuXHRcdFx0XHRcdHF1ZXJ5LnRleHQgPSBjdHgucGFnZVRleHQ7IC8vIHJlcGxhY2UgZW50aXJlIGNvbnRlbnRzIG9mIHRoZSBwYWdlXG5cdFx0XHRcdFx0aWYgKGN0eC5sYXN0RWRpdFRpbWUpIHtcblx0XHRcdFx0XHRcdHF1ZXJ5LmJhc2V0aW1lc3RhbXAgPSBjdHgubGFzdEVkaXRUaW1lOyAvLyBjaGVjayB0aGF0IHBhZ2UgaGFzbid0IGJlZW4gZWRpdGVkIHNpbmNlIGl0IHdhcyBsb2FkZWRcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRxdWVyeS5zdGFydHRpbWVzdGFtcCA9IGN0eC5sb2FkVGltZTsgLy8gY2hlY2sgdGhhdCBwYWdlIGhhc24ndCBiZWVuIGRlbGV0ZWQgc2luY2UgaXQgd2FzIGxvYWRlZCAoZG9uJ3QgcmVjcmVhdGUgYmFkIHN0dWZmKVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0aWYgKFsncmVjcmVhdGUnLCAnY3JlYXRlb25seScsICdub2NyZWF0ZSddLmluY2x1ZGVzKGN0eC5jcmVhdGVPcHRpb24pKSB7XG5cdFx0XHRcdHF1ZXJ5W2N0eC5jcmVhdGVPcHRpb25dID0gJyc7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY2FuVXNlTXdVc2VyVG9rZW4gJiYgY3R4LmZvbGxvd1JlZGlyZWN0KSB7XG5cdFx0XHRcdHF1ZXJ5LnJlZGlyZWN0ID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGN0eC5zYXZlQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0XHR3Z1VMUygn5L+d5a2Y6aG16Z2i4oCm4oCmJywgJ+WEsuWtmOmggemdouKApuKApicpLFxuXHRcdFx0XHRxdWVyeSxcblx0XHRcdFx0Zm5TYXZlU3VjY2Vzcyxcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQsXG5cdFx0XHRcdGZuU2F2ZUVycm9yXG5cdFx0XHQpO1xuXHRcdFx0Y3R4LnNhdmVBcGkuc2V0UGFyZW50KHRoaXMpO1xuXHRcdFx0Y3R4LnNhdmVBcGkucG9zdCgpO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQWRkcyB0aGUgdGV4dCBwcm92aWRlZCB2aWEgYHNldEFwcGVuZFRleHQoKWAgdG8gdGhlIGVuZCBvZiB0aGVcblx0XHQgKiBwYWdlLiAgRG9lcyBub3QgcmVxdWlyZSBjYWxsaW5nIGBsb2FkKClgIGZpcnN0LCB1bmxlc3MgYSB3YXRjaGxpc3Rcblx0XHQgKiBleHBpcnkgaXMgdXNlZC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvblN1Y2Nlc3NdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIHdoZW4gdGhlIG1ldGhvZCBoYXMgc3VjY2VlZGVkLlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvbkZhaWx1cmVdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIHdoZW4gdGhlIG1ldGhvZCBmYWlscy5cblx0XHQgKi9cblx0XHR0aGlzLmFwcGVuZCA9IGZ1bmN0aW9uIChvblN1Y2Nlc3MsIG9uRmFpbHVyZSkge1xuXHRcdFx0Y3R4LmVkaXRNb2RlID0gJ2FwcGVuZCc7XG5cdFx0XHRpZiAoZm5DYW5Vc2VNd1VzZXJUb2tlbignZWRpdCcpKSB7XG5cdFx0XHRcdHRoaXMuc2F2ZShvblN1Y2Nlc3MsIG9uRmFpbHVyZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjdHgub25TYXZlU3VjY2VzcyA9IG9uU3VjY2Vzcztcblx0XHRcdFx0Y3R4Lm9uU2F2ZUZhaWx1cmUgPSBvbkZhaWx1cmUgfHwgZW1wdHlGdW5jdGlvbjtcblx0XHRcdFx0dGhpcy5sb2FkKGZuQXV0b1NhdmUsIGN0eC5vblNhdmVGYWlsdXJlKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEFkZHMgdGhlIHRleHQgcHJvdmlkZWQgdmlhIGBzZXRQcmVwZW5kVGV4dCgpYCB0byB0aGUgc3RhcnQgb2YgdGhlXG5cdFx0ICogcGFnZS4gIERvZXMgbm90IHJlcXVpcmUgY2FsbGluZyBgbG9hZCgpYCBmaXJzdCwgdW5sZXNzIGEgd2F0Y2hsaXN0XG5cdFx0ICogZXhwaXJ5IGlzIHVzZWQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSAgW29uU3VjY2Vzc10gLSBDYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgd2hlbiB0aGUgbWV0aG9kIGhhcyBzdWNjZWVkZWQuXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gIFtvbkZhaWx1cmVdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIHdoZW4gdGhlIG1ldGhvZCBmYWlscy5cblx0XHQgKi9cblx0XHR0aGlzLnByZXBlbmQgPSBmdW5jdGlvbiAob25TdWNjZXNzLCBvbkZhaWx1cmUpIHtcblx0XHRcdGN0eC5lZGl0TW9kZSA9ICdwcmVwZW5kJztcblx0XHRcdGlmIChmbkNhblVzZU13VXNlclRva2VuKCdlZGl0JykpIHtcblx0XHRcdFx0dGhpcy5zYXZlKG9uU3VjY2Vzcywgb25GYWlsdXJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGN0eC5vblNhdmVTdWNjZXNzID0gb25TdWNjZXNzO1xuXHRcdFx0XHRjdHgub25TYXZlRmFpbHVyZSA9IG9uRmFpbHVyZSB8fCBlbXB0eUZ1bmN0aW9uO1xuXHRcdFx0XHR0aGlzLmxvYWQoZm5BdXRvU2F2ZSwgY3R4Lm9uU2F2ZUZhaWx1cmUpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQ3JlYXRlcyBhIG5ldyBzZWN0aW9uIHdpdGggdGhlIHRleHQgcHJvdmlkZWQgYnkgYHNldE5ld1NlY3Rpb25UZXh0KClgXG5cdFx0ICogYW5kIHNlY3Rpb24gdGl0bGUgZnJvbSBgc2V0TmV3U2VjdGlvblRpdGxlKClgLlxuXHRcdCAqIElmIGBlZGl0U3VtbWFyeWAgaXMgcHJvdmlkZWQsIHRoYXQgd2lsbCBiZSB1c2VkIGluc3RlYWQgb2YgdGhlXG5cdFx0ICogYXV0b2dlbmVyYXRlZCBcIi0+VGl0bGUgKG5ldyBzZWN0aW9uXCIgZWRpdCBzdW1tYXJ5LlxuXHRcdCAqIERvZXMgbm90IHJlcXVpcmUgY2FsbGluZyBgbG9hZCgpYCBmaXJzdCwgdW5sZXNzIGEgd2F0Y2hsaXN0IGV4cGlyeVxuXHRcdCAqIGlzIHVzZWQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSAgW29uU3VjY2Vzc10gLSBDYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgd2hlbiB0aGUgbWV0aG9kIGhhcyBzdWNjZWVkZWQuXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gIFtvbkZhaWx1cmVdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIHdoZW4gdGhlIG1ldGhvZCBmYWlscy5cblx0XHQgKi9cblx0XHR0aGlzLm5ld1NlY3Rpb24gPSBmdW5jdGlvbiAob25TdWNjZXNzLCBvbkZhaWx1cmUpIHtcblx0XHRcdGN0eC5lZGl0TW9kZSA9ICduZXcnO1xuXHRcdFx0aWYgKGZuQ2FuVXNlTXdVc2VyVG9rZW4oJ2VkaXQnKSkge1xuXHRcdFx0XHR0aGlzLnNhdmUob25TdWNjZXNzLCBvbkZhaWx1cmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3R4Lm9uU2F2ZVN1Y2Nlc3MgPSBvblN1Y2Nlc3M7XG5cdFx0XHRcdGN0eC5vblNhdmVGYWlsdXJlID0gb25GYWlsdXJlIHx8IGVtcHR5RnVuY3Rpb247XG5cdFx0XHRcdHRoaXMubG9hZChmbkF1dG9TYXZlLCBjdHgub25TYXZlRmFpbHVyZSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHQvKiogQHJldHVybnMge3N0cmluZ30gVGhlIG5hbWUgb2YgdGhlIGxvYWRlZCBwYWdlLCBpbmNsdWRpbmcgdGhlIG5hbWVzcGFjZSAqL1xuXHRcdHRoaXMuZ2V0UGFnZU5hbWUgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gY3R4LnBhZ2VOYW1lO1xuXHRcdH07XG5cdFx0LyoqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSB0ZXh0IG9mIHRoZSBwYWdlIGFmdGVyIGEgc3VjY2Vzc2Z1bCBsb2FkKCkgKi9cblx0XHR0aGlzLmdldFBhZ2VUZXh0ID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGN0eC5wYWdlVGV4dDtcblx0XHR9O1xuXHRcdC8qKiBAcGFyYW0ge3N0cmluZ30gcGFnZVRleHQgLSBVcGRhdGVkIHBhZ2UgdGV4dCB0aGF0IHdpbGwgYmUgc2F2ZWQgd2hlbiBgc2F2ZSgpYCBpcyBjYWxsZWQgKi9cblx0XHR0aGlzLnNldFBhZ2VUZXh0ID0gKHBhZ2VUZXh0KSA9PiB7XG5cdFx0XHRjdHguZWRpdE1vZGUgPSAnYWxsJztcblx0XHRcdGN0eC5wYWdlVGV4dCA9IHBhZ2VUZXh0O1xuXHRcdH07XG5cdFx0LyoqIEBwYXJhbSB7c3RyaW5nfSBhcHBlbmRUZXh0IC0gVGV4dCB0aGF0IHdpbGwgYmUgYXBwZW5kZWQgdG8gdGhlIHBhZ2Ugd2hlbiBgYXBwZW5kKClgIGlzIGNhbGxlZCAqL1xuXHRcdHRoaXMuc2V0QXBwZW5kVGV4dCA9IChhcHBlbmRUZXh0KSA9PiB7XG5cdFx0XHRjdHguZWRpdE1vZGUgPSAnYXBwZW5kJztcblx0XHRcdGN0eC5hcHBlbmRUZXh0ID0gYXBwZW5kVGV4dDtcblx0XHR9O1xuXHRcdC8qKiBAcGFyYW0ge3N0cmluZ30gcHJlcGVuZFRleHQgLSBUZXh0IHRoYXQgd2lsbCBiZSBwcmVwZW5kZWQgdG8gdGhlIHBhZ2Ugd2hlbiBgcHJlcGVuZCgpYCBpcyBjYWxsZWQgKi9cblx0XHR0aGlzLnNldFByZXBlbmRUZXh0ID0gKHByZXBlbmRUZXh0KSA9PiB7XG5cdFx0XHRjdHguZWRpdE1vZGUgPSAncHJlcGVuZCc7XG5cdFx0XHRjdHgucHJlcGVuZFRleHQgPSBwcmVwZW5kVGV4dDtcblx0XHR9O1xuXHRcdC8qKiBAcGFyYW0ge3N0cmluZ30gbmV3U2VjdGlvblRleHQgLSBUZXh0IHRoYXQgd2lsbCBiZSBhZGRlZCBpbiBhIG5ldyBzZWN0aW9uIG9uIHRoZSBwYWdlIHdoZW4gYG5ld1NlY3Rpb24oKWAgaXMgY2FsbGVkICovXG5cdFx0dGhpcy5zZXROZXdTZWN0aW9uVGV4dCA9IChuZXdTZWN0aW9uVGV4dCkgPT4ge1xuXHRcdFx0Y3R4LmVkaXRNb2RlID0gJ25ldyc7XG5cdFx0XHRjdHgubmV3U2VjdGlvblRleHQgPSBuZXdTZWN0aW9uVGV4dDtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBuZXdTZWN0aW9uVGl0bGUgLSBUaXRsZSBmb3IgdGhlIG5ldyBzZWN0aW9uIGNyZWF0ZWQgd2hlbiBgbmV3U2VjdGlvbigpYCBpcyBjYWxsZWRcblx0XHQgKiBJZiBtaXNzaW5nLCBgY3R4LmVkaXRTdW1tYXJ5YCB3aWxsIGJlIHVzZWQuIElzc3VlcyBtYXkgb2NjdXIgaWYgYSBzdWJzdGl0dXRlZCB0ZW1wbGF0ZSBpcyB1c2VkLlxuXHRcdCAqL1xuXHRcdHRoaXMuc2V0TmV3U2VjdGlvblRpdGxlID0gKG5ld1NlY3Rpb25UaXRsZSkgPT4ge1xuXHRcdFx0Y3R4LmVkaXRNb2RlID0gJ25ldyc7XG5cdFx0XHRjdHgubmV3U2VjdGlvblRpdGxlID0gbmV3U2VjdGlvblRpdGxlO1xuXHRcdH07XG5cdFx0Ly8gRWRpdC1yZWxhdGVkIHNldHRlciBtZXRob2RzOlxuXHRcdC8qKlxuXHRcdCAqIFNldCB0aGUgZWRpdCBzdW1tYXJ5IHRoYXQgd2lsbCBiZSB1c2VkIHdoZW4gYHNhdmUoKWAgaXMgY2FsbGVkLlxuXHRcdCAqIFVubmVjZXNzYXJ5IGlmIGVkaXRNb2RlIGlzICduZXcnIGFuZCBuZXdTZWN0aW9uVGl0bGUgaXMgcHJvdmlkZWQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gc3VtbWFyeVxuXHRcdCAqL1xuXHRcdHRoaXMuc2V0RWRpdFN1bW1hcnkgPSAoc3VtbWFyeSkgPT4ge1xuXHRcdFx0Y3R4LmVkaXRTdW1tYXJ5ID0gc3VtbWFyeTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIFNldCBhbnkgY3VzdG9tIHRhZyhzKSB0byBiZSBhcHBsaWVkIHRvIHRoZSBBUEkgYWN0aW9uLlxuXHRcdCAqIEEgbnVtYmVyIG9mIGFjdGlvbnMgZG9uJ3Qgc3VwcG9ydCBpdCwgbW9zdCBub3RhYmx5IHdhdGNoLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IHRhZ3MgLSBTdHJpbmcgb3IgYXJyYXkgb2YgdGFnKHMpLlxuXHRcdCAqL1xuXHRcdHRoaXMuc2V0Q2hhbmdlVGFncyA9ICh0YWdzKSA9PiB7XG5cdFx0XHRjdHguY2hhbmdlVGFncyA9IHRhZ3M7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gW2NyZWF0ZU9wdGlvbj1udWxsXSAtIENhbiB0YWtlIHRoZSBmb2xsb3dpbmcgZm91ciB2YWx1ZXM6XG5cdFx0ICogLSByZWNyZWF0ZTogY3JlYXRlIHRoZSBwYWdlIGlmIGl0IGRvZXMgbm90IGV4aXN0LCBvciBlZGl0IGl0IGlmIGl0IGV4aXN0cy5cblx0XHQgKiAtIGNyZWF0ZW9ubHk6IGNyZWF0ZSB0aGUgcGFnZSBpZiBpdCBkb2VzIG5vdCBleGlzdCwgYnV0IHJldHVybiBhblxuXHRcdCAqIGVycm9yIGlmIGl0IGFscmVhZHkgZXhpc3RzLlxuXHRcdCAqIC0gbm9jcmVhdGU6IGRvbid0IGNyZWF0ZSB0aGUgcGFnZSwgb25seSBlZGl0IGl0IGlmIGl0IGFscmVhZHkgZXhpc3RzLlxuXHRcdCAqIC0gYG51bGxgOiBjcmVhdGUgdGhlIHBhZ2UgaWYgaXQgZG9lcyBub3QgZXhpc3QsIHVubGVzcyBpdCB3YXMgZGVsZXRlZFxuXHRcdCAqIGluIHRoZSBtb21lbnQgYmV0d2VlbiBsb2FkaW5nIHRoZSBwYWdlIGFuZCBzYXZpbmcgdGhlIGVkaXQgKGRlZmF1bHQpLlxuXHRcdCAqXG5cdFx0ICovXG5cdFx0dGhpcy5zZXRDcmVhdGVPcHRpb24gPSAoY3JlYXRlT3B0aW9uKSA9PiB7XG5cdFx0XHRjdHguY3JlYXRlT3B0aW9uID0gY3JlYXRlT3B0aW9uO1xuXHRcdH07XG5cdFx0LyoqIEBwYXJhbSB7Ym9vbGVhbn0gbWlub3JFZGl0IC0gU2V0IHRydWUgdG8gbWFyayB0aGUgZWRpdCBhcyBhIG1pbm9yIGVkaXQuICovXG5cdFx0dGhpcy5zZXRNaW5vckVkaXQgPSAobWlub3JFZGl0KSA9PiB7XG5cdFx0XHRjdHgubWlub3JFZGl0ID0gbWlub3JFZGl0O1xuXHRcdH07XG5cdFx0LyoqIEBwYXJhbSB7Ym9vbGVhbn0gYm90RWRpdCAtIFNldCB0cnVlIHRvIG1hcmsgdGhlIGVkaXQgYXMgYSBib3QgZWRpdCAqL1xuXHRcdHRoaXMuc2V0Qm90RWRpdCA9IChib3RFZGl0KSA9PiB7XG5cdFx0XHRjdHguYm90RWRpdCA9IGJvdEVkaXQ7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gcGFnZVNlY3Rpb24gLSBJbnRlZ2VyIHNwZWNpZnlpbmcgdGhlIHNlY3Rpb24gbnVtYmVyIHRvIGxvYWQgb3Igc2F2ZS5cblx0XHQgKiBJZiBzcGVjaWZpZWQgYXMgYG51bGxgLCB0aGUgZW50aXJlIHBhZ2Ugd2lsbCBiZSByZXRyaWV2ZWQuXG5cdFx0ICovXG5cdFx0dGhpcy5zZXRQYWdlU2VjdGlvbiA9IChwYWdlU2VjdGlvbikgPT4ge1xuXHRcdFx0Y3R4LnBhZ2VTZWN0aW9uID0gcGFnZVNlY3Rpb247XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gbWF4Q29uZmxpY3RSZXRyaWVzIC0gTnVtYmVyIG9mIHJldHJpZXMgZm9yIHNhdmUgZXJyb3JzIGludm9sdmluZyBhbiBlZGl0IGNvbmZsaWN0IG9yXG5cdFx0ICogbG9zcyBvZiB0b2tlbi4gRGVmYXVsdDogMi5cblx0XHQgKi9cblx0XHR0aGlzLnNldE1heENvbmZsaWN0UmV0cmllcyA9IChtYXhDb25mbGljdFJldHJpZXMpID0+IHtcblx0XHRcdGN0eC5tYXhDb25mbGljdFJldHJpZXMgPSBtYXhDb25mbGljdFJldHJpZXM7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gbWF4UmV0cmllcyAtIE51bWJlciBvZiByZXRyaWVzIGZvciBzYXZlIGVycm9ycyBub3QgaW52b2x2aW5nIGFuIGVkaXQgY29uZmxpY3Qgb3Jcblx0XHQgKiBsb3NzIG9mIHRva2VuLiBEZWZhdWx0OiAyLlxuXHRcdCAqL1xuXHRcdHRoaXMuc2V0TWF4UmV0cmllcyA9IChtYXhSZXRyaWVzKSA9PiB7XG5cdFx0XHRjdHgubWF4UmV0cmllcyA9IG1heFJldHJpZXM7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBTZXQgd2hldGhlciBhbmQgaG93IHRvIHdhdGNoIHRoZSBwYWdlLCBpbmNsdWRpbmcgc2V0dGluZyBhbiBleHBpcnkuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW58c3RyaW5nfE1vcmViaXRzLmRhdGV8RGF0ZX0gW3dhdGNobGlzdE9wdGlvbj1mYWxzZV0gLVxuXHRcdCAqIEJhc2ljYWxseSBhIG1peCBvZiBNVyBBUEkgYW5kIFR3aW5rbGV5IG9wdGlvbnMgYXZhaWxhYmxlIHByZS1leHBpcnk6XG5cdFx0ICogLSBgdHJ1ZWB8YCd5ZXMnYHxgJ3dhdGNoJ2A6IHBhZ2Ugd2lsbCBiZSBhZGRlZCB0byB0aGUgdXNlcidzXG5cdFx0ICogd2F0Y2hsaXN0IHdoZW4gdGhlIGFjdGlvbiBpcyBjYWxsZWQuIERlZmF1bHRzIHRvIGFuIGluZGVmaW5pdGVcblx0XHQgKiB3YXRjaCB1bmxlc3MgYHdhdGNobGlzdEV4cGlyeWAgaXMgcHJvdmlkZWQuXG5cdFx0ICogLSBgZmFsc2VgfGAnbm8nYHxgJ25vY2hhbmdlJ2A6IHdhdGNobGlzdCBzdGF0dXMgb2YgdGhlIHBhZ2UgKGluY2x1ZGluZyBleHBpcnkpIHdpbGwgbm90IGJlIGNoYW5nZWQuXG5cdFx0ICogLSBgJ2RlZmF1bHQnYHxgJ3ByZWZlcmVuY2VzJ2A6IHdhdGNobGlzdCBzdGF0dXMgb2YgdGhlIHBhZ2Ugd2lsbCBiZVxuXHRcdCAqIHNldCBiYXNlZCBvbiB0aGUgdXNlcidzIHByZWZlcmVuY2Ugc2V0dGluZ3Mgd2hlbiB0aGUgYWN0aW9uIGlzXG5cdFx0ICogY2FsbGVkLiBEZWZhdWx0cyB0byBhbiBpbmRlZmluaXRlIHdhdGNoIHVubGVzcyBgd2F0Y2hsaXN0RXhwaXJ5YCBpc1xuXHRcdCAqIHByb3ZpZGVkLlxuXHRcdCAqIC0gYCd1bndhdGNoJ2A6IGV4cGxpY2l0bHkgdW53YXRjaCB0aGUgcGFnZS5cblx0XHQgKiAtIEFueSBvdGhlciBgc3RyaW5nYCBvciBgbnVtYmVyYCwgb3IgYSBgTW9yZWJpdHMuZGF0ZWAgb3IgYERhdGVgXG5cdFx0ICogb2JqZWN0OiB3YXRjaCBwYWdlIHVudGlsIHRoZSBzcGVjaWZpZWQgdGltZSwgZGVmZXJyaW5nIHRvXG5cdFx0ICogYHdhdGNobGlzdEV4cGlyeWAgaWYgcHJvdmlkZWQuXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfE1vcmViaXRzLmRhdGV8RGF0ZX0gW3dhdGNobGlzdEV4cGlyeT1pbmZpbml0eV0gLVxuXHRcdCAqIEEgZGF0ZS1saWtlIHN0cmluZyBvciBudW1iZXIsIG9yIGEgZGF0ZSBvYmplY3QuICBJZiBhIHN0cmluZyBvciBudW1iZXIsXG5cdFx0ICogY2FuIGJlIHJlbGF0aXZlICgyIHdlZWtzKSBvciBvdGhlciBzaW1pbGFybHkgZGF0ZS1saWtlIChpLmUuIE5PVCBcInBvdGF0b1wiKTpcblx0XHQgKiBJU08gODYwMTogMjAzOC0wMS0wOVQwMzoxNDowN1pcblx0XHQgKiBNZWRpYVdpa2k6IDIwMzgwMTA5MDMxNDA3XG5cdFx0ICogVU5JWDogMjE0NzQ4MzY0N1xuXHRcdCAqIFNRTDogMjAzOC0wMS0wOSAwMzoxNDowN1xuXHRcdCAqIENhbiBhbHNvIGJlIGBpbmZpbml0eWAgb3IgaW5maW5pdHktbGlrZSAoYGluZmluaXRlYCwgYGluZGVmaW5pdGVgLCBhbmQgYG5ldmVyYCkuXG5cdFx0ICogU2VlIHtAbGluayBodHRwczovL3BoYWJyaWNhdG9yLndpa2ltZWRpYS5vcmcvc291cmNlL21lZGlhd2lraS1saWJzLVRpbWVzdGFtcC9icm93c2UvbWFzdGVyL3NyYy9Db252ZXJ0aWJsZVRpbWVzdGFtcC5waHA7NGU1M2I4NTlhOTU4MGM1NTk1ODA3OGY0NmRkNGYzYTQ0ZDBmY2FhMCQ1Ny0xMDk/YXM9c291cmNlJmJsYW1lPW9mZn1cblx0XHQgKi9cblx0XHR0aGlzLnNldFdhdGNobGlzdCA9ICh3YXRjaGxpc3RPcHRpb24sIHdhdGNobGlzdEV4cGlyeSkgPT4ge1xuXHRcdFx0aWYgKHdhdGNobGlzdE9wdGlvbiBpbnN0YW5jZW9mIE1vcmViaXRzLmRhdGUgfHwgd2F0Y2hsaXN0T3B0aW9uIGluc3RhbmNlb2YgRGF0ZSkge1xuXHRcdFx0XHR3YXRjaGxpc3RPcHRpb24gPSB3YXRjaGxpc3RPcHRpb24udG9JU09TdHJpbmcoKTtcblx0XHRcdH1cblx0XHRcdGlmICh3YXRjaGxpc3RFeHBpcnkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR3YXRjaGxpc3RFeHBpcnkgPSAnaW5maW5pdHknO1xuXHRcdFx0fSBlbHNlIGlmICh3YXRjaGxpc3RFeHBpcnkgaW5zdGFuY2VvZiBNb3JlYml0cy5kYXRlIHx8IHdhdGNobGlzdEV4cGlyeSBpbnN0YW5jZW9mIERhdGUpIHtcblx0XHRcdFx0d2F0Y2hsaXN0RXhwaXJ5ID0gd2F0Y2hsaXN0RXhwaXJ5LnRvSVNPU3RyaW5nKCk7XG5cdFx0XHR9XG5cdFx0XHRzd2l0Y2ggKHdhdGNobGlzdE9wdGlvbikge1xuXHRcdFx0XHRjYXNlICdub2NoYW5nZSc6XG5cdFx0XHRcdGNhc2UgJ25vJzpcblx0XHRcdFx0Y2FzZSBmYWxzZTpcblx0XHRcdFx0Y2FzZSB1bmRlZmluZWQ6XG5cdFx0XHRcdFx0Y3R4LndhdGNobGlzdE9wdGlvbiA9ICdub2NoYW5nZSc7XG5cdFx0XHRcdFx0Ly8gVGhlIE1XIEFQSSBhbGxvd3MgZm9yIGNoYW5naW5nIGV4cGlyeSB3aXRoIG5vY2hhbmdlIChhcyBcIm5vY2hhbmdlXCIgcmVmZXJzIHRvIHRoZSBiaW5hcnkgc3RhdHVzKSxcblx0XHRcdFx0XHQvLyBidXQgYnkga2VlcGluZyB0aGlzIG51bGwgaXQgd2lsbCBkZWZhdWx0IHRvIGFueSBleGlzdGluZyBleHBpcnksIGVuc3VyZSB0aGVyZSBpcyBhY3R1YWxseSBcIm5vIGNoYW5nZS5cIlxuXHRcdFx0XHRcdGN0eC53YXRjaGxpc3RFeHBpcnkgPSBudWxsO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICd1bndhdGNoJzpcblx0XHRcdFx0XHQvLyBleHBpcnkgdW5pbXBvcnRhbnRcblx0XHRcdFx0XHRjdHgud2F0Y2hsaXN0T3B0aW9uID0gJ3Vud2F0Y2gnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdwcmVmZXJlbmNlcyc6XG5cdFx0XHRcdGNhc2UgJ2RlZmF1bHQnOlxuXHRcdFx0XHRcdGN0eC53YXRjaGxpc3RPcHRpb24gPSAncHJlZmVyZW5jZXMnO1xuXHRcdFx0XHRcdC8vIFRoZSBBUEkgYWxsb3dzIGFuIGV4cGlyeSBoZXJlLCBidXQgdGhlcmUgaXMgYXMgb2YgeWV0IChUMjY1NzE2KVxuXHRcdFx0XHRcdC8vIG5vIGV4cGlyeSBwcmVmZXJlbmNlIG9wdGlvbiwgc28gaXQncyBhIGJpdCBkZXZvaWQgb2YgY29udGV4dC5cblx0XHRcdFx0XHRjdHgud2F0Y2hsaXN0RXhwaXJ5ID0gd2F0Y2hsaXN0RXhwaXJ5O1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICd3YXRjaCc6XG5cdFx0XHRcdGNhc2UgJ3llcyc6XG5cdFx0XHRcdGNhc2UgdHJ1ZTpcblx0XHRcdFx0XHRjdHgud2F0Y2hsaXN0T3B0aW9uID0gJ3dhdGNoJztcblx0XHRcdFx0XHRjdHgud2F0Y2hsaXN0RXhwaXJ5ID0gd2F0Y2hsaXN0RXhwaXJ5O1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdC8vIE5vdCByZWFsbHkgYSBcImRlZmF1bHRcIiBwZXIgc2UgYnV0IGNhdGNoZXMgXCJhbnkgb3RoZXIgc3RyaW5nXCJcblx0XHRcdFx0XHRjdHgud2F0Y2hsaXN0T3B0aW9uID0gJ3dhdGNoJztcblx0XHRcdFx0XHRjdHgud2F0Y2hsaXN0RXhwaXJ5ID0gd2F0Y2hsaXN0T3B0aW9uO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogU2V0IGEgd2F0Y2hsaXN0IGV4cGlyeS4gc2V0V2F0Y2hsaXN0IGNhbiBtb3N0bHkgaGFuZGxlIHRoaXMgYnlcblx0XHQgKiBpdHNlbGYsIHNvIHRoaXMgaXMgaGVyZSBsYXJnZWx5IGZvciBjb21wbGV0ZW5lc3MgYW5kIGNvbXBhdGliaWxpdHlcblx0XHQgKiB3aXRoIHRoZSBmdWxsIHN1aXRlIG9mIG9wdGlvbnMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ8TW9yZWJpdHMuZGF0ZXxEYXRlfSBbd2F0Y2hsaXN0RXhwaXJ5PWluZmluaXR5XSAtXG5cdFx0ICogQSBkYXRlLWxpa2Ugc3RyaW5nIG9yIG51bWJlciwgb3IgYSBkYXRlIG9iamVjdC4gIElmIGEgc3RyaW5nIG9yIG51bWJlcixcblx0XHQgKiBjYW4gYmUgcmVsYXRpdmUgKDIgd2Vla3MpIG9yIG90aGVyIHNpbWlsYXJseSBkYXRlLWxpa2UgKGkuZS4gTk9UIFwicG90YXRvXCIpOlxuXHRcdCAqIElTTyA4NjAxOiAyMDM4LTAxLTA5VDAzOjE0OjA3WlxuXHRcdCAqIE1lZGlhV2lraTogMjAzODAxMDkwMzE0MDdcblx0XHQgKiBVTklYOiAyMTQ3NDgzNjQ3XG5cdFx0ICogU1FMOiAyMDM4LTAxLTA5IDAzOjE0OjA3XG5cdFx0ICogQ2FuIGFsc28gYmUgYGluZmluaXR5YCBvciBpbmZpbml0eS1saWtlIChgaW5maW5pdGVgLCBgaW5kZWZpbml0ZWAsIGFuZCBgbmV2ZXJgKS5cblx0XHQgKiBTZWUge0BsaW5rIGh0dHBzOi8vcGhhYnJpY2F0b3Iud2lraW1lZGlhLm9yZy9zb3VyY2UvbWVkaWF3aWtpLWxpYnMtVGltZXN0YW1wL2Jyb3dzZS9tYXN0ZXIvc3JjL0NvbnZlcnRpYmxlVGltZXN0YW1wLnBocDs0ZTUzYjg1OWE5NTgwYzU1OTU4MDc4ZjQ2ZGQ0ZjNhNDRkMGZjYWEwJDU3LTEwOT9hcz1zb3VyY2UmYmxhbWU9b2ZmfVxuXHRcdCAqL1xuXHRcdHRoaXMuc2V0V2F0Y2hsaXN0RXhwaXJ5ID0gKHdhdGNobGlzdEV4cGlyeSkgPT4ge1xuXHRcdFx0aWYgKHdhdGNobGlzdEV4cGlyeSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHdhdGNobGlzdEV4cGlyeSA9ICdpbmZpbml0eSc7XG5cdFx0XHR9IGVsc2UgaWYgKHdhdGNobGlzdEV4cGlyeSBpbnN0YW5jZW9mIE1vcmViaXRzLmRhdGUgfHwgd2F0Y2hsaXN0RXhwaXJ5IGluc3RhbmNlb2YgRGF0ZSkge1xuXHRcdFx0XHR3YXRjaGxpc3RFeHBpcnkgPSB3YXRjaGxpc3RFeHBpcnkudG9JU09TdHJpbmcoKTtcblx0XHRcdH1cblx0XHRcdGN0eC53YXRjaGxpc3RFeHBpcnkgPSB3YXRjaGxpc3RFeHBpcnk7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBAZGVwcmVjYXRlZCBBcyBvZiBEZWNlbWJlciAyMDIwLCB1c2Ugc2V0V2F0Y2hsaXN0LlxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3dhdGNobGlzdE9wdGlvbj1mYWxzZV0gLVxuXHRcdCAqIC0gYFRydWVgOiBwYWdlIHdhdGNobGlzdCBzdGF0dXMgd2lsbCBiZSBzZXQgYmFzZWQgb24gdGhlIHVzZXInc1xuXHRcdCAqIHByZWZlcmVuY2Ugc2V0dGluZ3Mgd2hlbiBgc2F2ZSgpYCBpcyBjYWxsZWQuXG5cdFx0ICogLSBgRmFsc2VgOiB3YXRjaGxpc3Qgc3RhdHVzIG9mIHRoZSBwYWdlIHdpbGwgbm90IGJlIGNoYW5nZWQuXG5cdFx0ICpcblx0XHQgKiBXYXRjaGxpc3Qgbm90ZXM6XG5cdFx0ICogMS4gVGhlIE1lZGlhV2lraSBBUEkgdmFsdWUgb2YgJ3Vud2F0Y2gnLCB3aGljaCBleHBsaWNpdGx5IHJlbW92ZXNcblx0XHQgKiB0aGUgcGFnZSBmcm9tIHRoZSB1c2VyJ3Mgd2F0Y2hsaXN0LCBpcyBub3QgdXNlZC5cblx0XHQgKiAyLiBJZiBib3RoIGBzZXRXYXRjaGxpc3QoKWAgYW5kIGBzZXRXYXRjaGxpc3RGcm9tUHJlZmVyZW5jZXMoKWAgYXJlXG5cdFx0ICogY2FsbGVkLCB0aGUgbGFzdCBjYWxsIHRha2VzIHByaW9yaXR5LlxuXHRcdCAqIDMuIFR3aW5rbGUgbW9kdWxlcyBzaG91bGQgdXNlIHRoZSBhcHByb3ByaWF0ZSBwcmVmZXJlbmNlIHRvIHNldCB0aGUgd2F0Y2hsaXN0IG9wdGlvbnMuXG5cdFx0ICogNC4gTW9zdCBUd2lua2xlIG1vZHVsZXMgdXNlIGBzZXRXYXRjaGxpc3QoKWAuIGBzZXRXYXRjaGxpc3RGcm9tUHJlZmVyZW5jZXMoKWBcblx0XHQgKiBpcyBvbmx5IG5lZWRlZCBmb3IgdGhlIGZldyBUd2lua2xlIHdhdGNobGlzdCBwcmVmZXJlbmNlcyB0aGF0XG5cdFx0ICogYWNjZXB0IGEgc3RyaW5nIHZhbHVlIG9mIGBkZWZhdWx0YC5cblx0XHQgKi9cblx0XHR0aGlzLnNldFdhdGNobGlzdEZyb21QcmVmZXJlbmNlcyA9ICh3YXRjaGxpc3RPcHRpb24pID0+IHtcblx0XHRcdGNvbnNvbGUud2Fybihcblx0XHRcdFx0J05PVEU6IE1vcmViaXRzLndpa2kucGFnZS5zZXRXYXRjaGxpc3RGcm9tUHJlZmVyZW5jZXMgd2FzIGRlcHJlY2F0ZWQgRGVjZW1iZXIgMjAyMCwgcGxlYXNlIHVzZSBzZXRXYXRjaGxpc3QnXG5cdFx0XHQpO1xuXHRcdFx0aWYgKHdhdGNobGlzdE9wdGlvbikge1xuXHRcdFx0XHRjdHgud2F0Y2hsaXN0T3B0aW9uID0gJ3ByZWZlcmVuY2VzJztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGN0eC53YXRjaGxpc3RPcHRpb24gPSAnbm9jaGFuZ2UnO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBbZm9sbG93UmVkaXJlY3Q9ZmFsc2VdIC1cblx0XHQgKiAtIGB0cnVlYDogYSBtYXhpbXVtIG9mIG9uZSByZWRpcmVjdCB3aWxsIGJlIGZvbGxvd2VkLiBJbiB0aGUgZXZlbnRcblx0XHQgKiBvZiBhIHJlZGlyZWN0LCBhIG1lc3NhZ2UgaXMgZGlzcGxheWVkIHRvIHRoZSB1c2VyIGFuZCB0aGUgcmVkaXJlY3Rcblx0XHQgKiB0YXJnZXQgY2FuIGJlIHJldHJpZXZlZCB3aXRoIGdldFBhZ2VOYW1lKCkuXG5cdFx0ICogLSBgZmFsc2VgOiAoZGVmYXVsdCkgdGhlIHJlcXVlc3RlZCBwYWdlTmFtZSB3aWxsIGJlIHVzZWQgd2l0aG91dCByZWdhcmQgdG8gYW55IHJlZGlyZWN0LlxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZvbGxvd0Nyb3NzTnNSZWRpcmVjdD10cnVlXSAtIE5vdCBhcHBsaWNhYmxlIGlmIGBmb2xsb3dSZWRpcmVjdGAgaXMgbm90IHNldCB0cnVlLlxuXHRcdCAqIC0gYHRydWVgOiAoZGVmYXVsdCkgZm9sbG93IHJlZGlyZWN0IGV2ZW4gaWYgaXQgaXMgYSBjcm9zcy1uYW1lc3BhY2UgcmVkaXJlY3Rcblx0XHQgKiAtIGBmYWxzZWA6IGRvbid0IGZvbGxvdyByZWRpcmVjdCBpZiBpdCBpcyBjcm9zcy1uYW1lc3BhY2UsIGVkaXQgdGhlIHJlZGlyZWN0IGl0c2VsZi5cblx0XHQgKi9cblx0XHR0aGlzLnNldEZvbGxvd1JlZGlyZWN0ID0gKGZvbGxvd1JlZGlyZWN0LCBmb2xsb3dDcm9zc05zUmVkaXJlY3QpID0+IHtcblx0XHRcdGlmIChjdHgucGFnZUxvYWRlZCkge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0XHQnSW50ZXJuYWwgZXJyb3I6IGNhbm5vdCBjaGFuZ2UgcmVkaXJlY3Qgc2V0dGluZyBhZnRlciB0aGUgcGFnZSBoYXMgYmVlbiBsb2FkZWQhJ1xuXHRcdFx0XHQpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjdHguZm9sbG93UmVkaXJlY3QgPSBmb2xsb3dSZWRpcmVjdDtcblx0XHRcdGN0eC5mb2xsb3dDcm9zc05zUmVkaXJlY3QgPVxuXHRcdFx0XHRmb2xsb3dDcm9zc05zUmVkaXJlY3QgPT09IHVuZGVmaW5lZCA/IGN0eC5mb2xsb3dDcm9zc05zUmVkaXJlY3QgOiBmb2xsb3dDcm9zc05zUmVkaXJlY3Q7XG5cdFx0fTtcblx0XHQvLyBsb29rdXAtY3JlYXRpb24gc2V0dGVyIGZ1bmN0aW9uXG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBmbGFnIC0gSWYgc2V0IHRydWUsIHRoZSBhdXRob3IgYW5kIHRpbWVzdGFtcCBvZlxuXHRcdCAqIHRoZSBmaXJzdCBub24tcmVkaXJlY3QgdmVyc2lvbiBvZiB0aGUgcGFnZSBpcyByZXRyaWV2ZWQuXG5cdFx0ICpcblx0XHQgKiBXYXJuaW5nOlxuXHRcdCAqIDEuIElmIHRoZXJlIGFyZSBubyByZXZpc2lvbnMgYW1vbmcgdGhlIGZpcnN0IDUwIHRoYXQgYXJlXG5cdFx0ICogbm9uLXJlZGlyZWN0cywgb3IgaWYgdGhlcmUgYXJlIGxlc3MgNTAgcmV2aXNpb25zIGFuZCBhbGwgYXJlXG5cdFx0ICogcmVkaXJlY3RzLCB0aGUgb3JpZ2luYWwgY3JlYXRpb24gaXMgcmV0cmlldmVkLlxuXHRcdCAqIDIuIFJldmlzaW9ucyB0aGF0IHRoZSB1c2VyIGlzIG5vdCBwcml2aWxlZ2VkIHRvIGFjY2Vzc1xuXHRcdCAqIChyZXZkZWxlZC9zdXBwcmVzc2VkKSB3aWxsIGJlIHRyZWF0ZWQgYXMgbm9uLXJlZGlyZWN0cy5cblx0XHQgKiAzLiBNdXN0IG5vdCBiZSB1c2VkIHdoZW4gdGhlIHBhZ2UgaGFzIGEgbm9uLXdpa2l0ZXh0IGNvbnRlbnRtb2RlbFxuXHRcdCAqIHN1Y2ggYXMgTW9kdWxlc3BhY2UgTHVhIG9yIHVzZXIgSmF2YVNjcmlwdC9DU1MuXG5cdFx0ICovXG5cdFx0dGhpcy5zZXRMb29rdXBOb25SZWRpcmVjdENyZWF0b3IgPSAoZmxhZykgPT4ge1xuXHRcdFx0Y3R4Lmxvb2t1cE5vblJlZGlyZWN0Q3JlYXRvciA9IGZsYWc7XG5cdFx0fTtcblx0XHQvLyBNb3ZlLXJlbGF0ZWQgc2V0dGVyIGZ1bmN0aW9uc1xuXHRcdC8qKiBAcGFyYW0ge3N0cmluZ30gZGVzdGluYXRpb24gKi9cblx0XHR0aGlzLnNldE1vdmVEZXN0aW5hdGlvbiA9IChkZXN0aW5hdGlvbikgPT4ge1xuXHRcdFx0Y3R4Lm1vdmVEZXN0aW5hdGlvbiA9IGRlc3RpbmF0aW9uO1xuXHRcdH07XG5cdFx0LyoqIEBwYXJhbSB7Ym9vbGVhbn0gZmxhZyAqL1xuXHRcdHRoaXMuc2V0TW92ZVRhbGtQYWdlID0gKGZsYWcpID0+IHtcblx0XHRcdGN0eC5tb3ZlVGFsa1BhZ2UgPSAhIWZsYWc7XG5cdFx0fTtcblx0XHQvKiogQHBhcmFtIHtib29sZWFufSBmbGFnICovXG5cdFx0dGhpcy5zZXRNb3ZlU3VicGFnZXMgPSAoZmxhZykgPT4ge1xuXHRcdFx0Y3R4Lm1vdmVTdWJwYWdlcyA9ICEhZmxhZztcblx0XHR9O1xuXHRcdC8qKiBAcGFyYW0ge2Jvb2xlYW59IGZsYWcgKi9cblx0XHR0aGlzLnNldE1vdmVTdXBwcmVzc1JlZGlyZWN0ID0gKGZsYWcpID0+IHtcblx0XHRcdGN0eC5tb3ZlU3VwcHJlc3NSZWRpcmVjdCA9ICEhZmxhZztcblx0XHR9O1xuXHRcdC8vIFByb3RlY3QtcmVsYXRlZCBzZXR0ZXIgZnVuY3Rpb25zXG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGxldmVsIC0gVGhlIHJpZ2h0IHJlcXVpcmVkIGZvciB0aGUgc3BlY2lmaWMgYWN0aW9uXG5cdFx0ICogZS5nLiBzeXNvcCwgdGVtcGxhdGVlZGl0b3IsIGF1dG9jb25maXJtZWRcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gW2V4cGlyeT1pbmZpbml0eV1cblx0XHQgKi9cblx0XHR0aGlzLnNldEVkaXRQcm90ZWN0aW9uID0gKGxldmVsLCBleHBpcnkpID0+IHtcblx0XHRcdGN0eC5wcm90ZWN0RWRpdCA9IHtcblx0XHRcdFx0bGV2ZWwsXG5cdFx0XHRcdGV4cGlyeTogZXhwaXJ5IHx8ICdpbmZpbml0eScsXG5cdFx0XHR9O1xuXHRcdH07XG5cdFx0dGhpcy5zZXRNb3ZlUHJvdGVjdGlvbiA9IChsZXZlbCwgZXhwaXJ5KSA9PiB7XG5cdFx0XHRjdHgucHJvdGVjdE1vdmUgPSB7XG5cdFx0XHRcdGxldmVsLFxuXHRcdFx0XHRleHBpcnk6IGV4cGlyeSB8fCAnaW5maW5pdHknLFxuXHRcdFx0fTtcblx0XHR9O1xuXHRcdHRoaXMuc2V0Q3JlYXRlUHJvdGVjdGlvbiA9IChsZXZlbCwgZXhwaXJ5KSA9PiB7XG5cdFx0XHRjdHgucHJvdGVjdENyZWF0ZSA9IHtcblx0XHRcdFx0bGV2ZWwsXG5cdFx0XHRcdGV4cGlyeTogZXhwaXJ5IHx8ICdpbmZpbml0eScsXG5cdFx0XHR9O1xuXHRcdH07XG5cdFx0dGhpcy5zZXRDYXNjYWRpbmdQcm90ZWN0aW9uID0gKGZsYWcpID0+IHtcblx0XHRcdGN0eC5wcm90ZWN0Q2FzY2FkZSA9ICEhZmxhZztcblx0XHR9O1xuXHRcdHRoaXMuc3VwcHJlc3NQcm90ZWN0V2FybmluZyA9ICgpID0+IHtcblx0XHRcdGN0eC5zdXBwcmVzc1Byb3RlY3RXYXJuaW5nID0gdHJ1ZTtcblx0XHR9O1xuXHRcdC8vIFJldmVydC1yZWxhdGVkIGdldHRlcnMvc2V0dGVyczpcblx0XHR0aGlzLnNldE9sZElEID0gKG9sZElEKSA9PiB7XG5cdFx0XHRjdHgucmV2ZXJ0T2xkSUQgPSBvbGRJRDtcblx0XHR9O1xuXHRcdC8qKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY3VycmVudCByZXZpc2lvbiBJRCBvZiB0aGUgcGFnZSAqL1xuXHRcdHRoaXMuZ2V0Q3VycmVudElEID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGN0eC5yZXZlcnRDdXJJRDtcblx0XHR9O1xuXHRcdC8qKiBAcmV0dXJucyB7c3RyaW5nfSBMYXN0IGVkaXRvciBvZiB0aGUgcGFnZSAqL1xuXHRcdHRoaXMuZ2V0UmV2aXNpb25Vc2VyID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGN0eC5yZXZlcnRVc2VyO1xuXHRcdH07XG5cdFx0LyoqIEByZXR1cm5zIHtzdHJpbmd9IElTTyA4NjAxIHRpbWVzdGFtcCBhdCB3aGljaCB0aGUgcGFnZSB3YXMgbGFzdCBlZGl0ZWQuICovXG5cdFx0dGhpcy5nZXRMYXN0RWRpdFRpbWUgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gY3R4Lmxhc3RFZGl0VGltZTtcblx0XHR9O1xuXHRcdC8vIE1pc2NlbGxhbmVvdXMgZ2V0dGVycy9zZXR0ZXJzOlxuXHRcdC8qKlxuXHRcdCAqIERlZmluZSBhbiBvYmplY3QgZm9yIHVzZSBpbiBhIGNhbGxiYWNrIGZ1bmN0aW9uLlxuXHRcdCAqXG5cdFx0ICogYGNhbGxiYWNrUGFyYW1ldGVyc2AgaXMgZm9yIHVzZSBieSB0aGUgY2FsbGVyIG9ubHkuIFRoZSBwYXJhbWV0ZXJzXG5cdFx0ICogYWxsb3cgYSBjYWxsZXIgdG8gcGFzcyB0aGUgcHJvcGVyIGNvbnRleHQgaW50byBpdHMgY2FsbGJhY2tcblx0XHQgKiBmdW5jdGlvbi4gIENhbGxlcnMgbXVzdCBlbnN1cmUgdGhhdCBhbnkgY2hhbmdlcyB0byB0aGVcblx0XHQgKiBjYWxsYmFja1BhcmFtZXRlcnMgb2JqZWN0IHdpdGhpbiBhIGBsb2FkKClgIGNhbGxiYWNrIHN0aWxsIHBlcm1pdCBhXG5cdFx0ICogcHJvcGVyIHJlLWVudHJ5IGludG8gdGhlIGBsb2FkKClgIGNhbGxiYWNrIGlmIGFuIGVkaXQgY29uZmxpY3QgaXNcblx0XHQgKiBkZXRlY3RlZCB1cG9uIGNhbGxpbmcgYHNhdmUoKWAuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2tQYXJhbWV0ZXJzXG5cdFx0ICovXG5cdFx0dGhpcy5zZXRDYWxsYmFja1BhcmFtZXRlcnMgPSAoY2FsbGJhY2tQYXJhbWV0ZXJzKSA9PiB7XG5cdFx0XHRjdHguY2FsbGJhY2tQYXJhbWV0ZXJzID0gY2FsbGJhY2tQYXJhbWV0ZXJzO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHJldHVybnMge09iamVjdH0gLSBUaGUgb2JqZWN0IHByZXZpb3VzbHkgc2V0IGJ5IGBzZXRDYWxsYmFja1BhcmFtZXRlcnMoKWAuXG5cdFx0ICovXG5cdFx0dGhpcy5nZXRDYWxsYmFja1BhcmFtZXRlcnMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gY3R4LmNhbGxiYWNrUGFyYW1ldGVycztcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEBwYXJhbSB7TW9yZWJpdHMuc3RhdHVzfSBzdGF0dXNFbGVtZW50XG5cdFx0ICovXG5cdFx0dGhpcy5zZXRTdGF0dXNFbGVtZW50ID0gKHN0YXR1c0VsZW1lbnQpID0+IHtcblx0XHRcdGN0eC5zdGF0dXNFbGVtZW50ID0gc3RhdHVzRWxlbWVudDtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zdGF0dXN9IFN0YXR1cyBlbGVtZW50IGNyZWF0ZWQgYnkgdGhlIGNvbnN0cnVjdG9yLlxuXHRcdCAqL1xuXHRcdHRoaXMuZ2V0U3RhdHVzRWxlbWVudCA9ICgpID0+IHtcblx0XHRcdHJldHVybiBjdHguc3RhdHVzRWxlbWVudDtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBwYWdlIGV4aXN0ZWQgb24gdGhlIHdpa2kgd2hlbiBpdCB3YXMgbGFzdCBsb2FkZWQuXG5cdFx0ICovXG5cdFx0dGhpcy5leGlzdHMgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gY3R4LnBhZ2VFeGlzdHM7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfSBQYWdlIElEIG9mIHRoZSBwYWdlIGxvYWRlZC4gMCBpZiB0aGUgcGFnZSBkb2Vzbid0XG5cdFx0ICogZXhpc3QuXG5cdFx0ICovXG5cdFx0dGhpcy5nZXRQYWdlSUQgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gY3R4LnBhZ2VJRDtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9IC0gQ29udGVudCBtb2RlbCBvZiB0aGUgcGFnZS4gIFBvc3NpYmxlIHZhbHVlc1xuXHRcdCAqIGluY2x1ZGUgKGJ1dCBtYXkgbm90IGJlIGxpbWl0ZWQgdG8pOiBgd2lraXRleHRgLCBgamF2YXNjcmlwdGAsXG5cdFx0ICogYGNzc2AsIGBqc29uYCwgYFNjcmlidW50b2AsIGBzYW5pdGl6ZWQtY3NzYCwgYE1hc3NNZXNzYWdlTGlzdENvbnRlbnRgLlxuXHRcdCAqIEFsc28gZ2V0dGFibGUgdmlhIGBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VDb250ZW50TW9kZWwnKWAuXG5cdFx0ICovXG5cdFx0dGhpcy5nZXRDb250ZW50TW9kZWwgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gY3R4LmNvbnRlbnRNb2RlbDtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufHN0cmluZ30gLSBXYXRjaGVkIHN0YXR1cyBvZiB0aGUgcGFnZS4gQm9vbGVhblxuXHRcdCAqIHVubGVzcyBpdCdzIGJlaW5nIHdhdGNoZWQgdGVtcG9yYXJpbHksIGluIHdoaWNoIGNhc2UgcmV0dXJucyB0aGVcblx0XHQgKiBleHBpcnkgc3RyaW5nLlxuXHRcdCAqL1xuXHRcdHRoaXMuZ2V0V2F0Y2hlZCA9ICgpID0+IHtcblx0XHRcdHJldHVybiBjdHgud2F0Y2hlZDtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9IElTTyA4NjAxIHRpbWVzdGFtcCBhdCB3aGljaCB0aGUgcGFnZSB3YXMgbGFzdCBsb2FkZWQuXG5cdFx0ICovXG5cdFx0dGhpcy5nZXRMb2FkVGltZSA9ICgpID0+IHtcblx0XHRcdHJldHVybiBjdHgubG9hZFRpbWU7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgdXNlciB3aG8gY3JlYXRlZCB0aGUgcGFnZSBmb2xsb3dpbmcgYGxvb2t1cENyZWF0aW9uKClgLlxuXHRcdCAqL1xuXHRcdHRoaXMuZ2V0Q3JlYXRvciA9ICgpID0+IHtcblx0XHRcdHJldHVybiBjdHguY3JlYXRvcjtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBJU09TdHJpbmcgdGltZXN0YW1wIG9mIHBhZ2UgY3JlYXRpb24gZm9sbG93aW5nIGBsb29rdXBDcmVhdGlvbigpYC5cblx0XHQgKi9cblx0XHR0aGlzLmdldENyZWF0aW9uVGltZXN0YW1wID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGN0eC50aW1lc3RhbXA7XG5cdFx0fTtcblx0XHQvKiogQHJldHVybnMge2Jvb2xlYW59IHdoZXRoZXIgb3Igbm90IHlvdSBjYW4gZWRpdCB0aGUgcGFnZSAqL1xuXHRcdHRoaXMuY2FuRWRpdCA9ICgpID0+IHtcblx0XHRcdHJldHVybiAhIWN0eC50ZXN0QWN0aW9ucyAmJiBjdHgudGVzdEFjdGlvbnMuaW5jbHVkZXMoJ2VkaXQnKTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIFJldHJpZXZlcyB0aGUgdXNlcm5hbWUgb2YgdGhlIHVzZXIgd2hvIGNyZWF0ZWQgdGhlIHBhZ2UgYXMgd2VsbCBhc1xuXHRcdCAqIHRoZSB0aW1lc3RhbXAgb2YgY3JlYXRpb24uICBUaGUgdXNlcm5hbWUgY2FuIGJlIHJldHJpZXZlZCB1c2luZyB0aGVcblx0XHQgKiBgZ2V0Q3JlYXRvcigpYCBmdW5jdGlvbjsgdGhlIHRpbWVzdGFtcCBjYW4gYmUgcmV0cmlldmVkIHVzaW5nIHRoZVxuXHRcdCAqIGBnZXRDcmVhdGlvblRpbWVzdGFtcCgpYCBmdW5jdGlvbi5cblx0XHQgKiBQcmlvciB0byBKdW5lIDIwMTkga25vd24gYXMgYGxvb2t1cENyZWF0b3IoKWAuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBvblN1Y2Nlc3MgLSBDYWxsYmFjayBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2hlblxuXHRcdCAqIHRoZSB1c2VybmFtZSBhbmQgdGltZXN0YW1wIGFyZSBmb3VuZCB3aXRoaW4gdGhlIGNhbGxiYWNrLlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvbkZhaWx1cmVdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIHdoZW5cblx0XHQgKiB0aGUgbG9va3VwIGZhaWxzXG5cdFx0ICovXG5cdFx0dGhpcy5sb29rdXBDcmVhdGlvbiA9IGZ1bmN0aW9uIChvblN1Y2Nlc3MsIG9uRmFpbHVyZSkge1xuXHRcdFx0Y3R4Lm9uTG9va3VwQ3JlYXRpb25TdWNjZXNzID0gb25TdWNjZXNzO1xuXHRcdFx0Y3R4Lm9uTG9va3VwQ3JlYXRpb25GYWlsdXJlID0gb25GYWlsdXJlIHx8IGVtcHR5RnVuY3Rpb247XG5cdFx0XHRpZiAoIW9uU3VjY2Vzcykge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcignSW50ZXJuYWwgZXJyb3I6IG5vIG9uU3VjY2VzcyBjYWxsYmFjayBwcm92aWRlZCB0byBsb29rdXBDcmVhdGlvbigpIScpO1xuXHRcdFx0XHRjdHgub25Mb29rdXBDcmVhdGlvbkZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHF1ZXJ5ID0ge1xuXHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRcdFx0XHR0aXRsZXM6IGN0eC5wYWdlTmFtZSxcblx0XHRcdFx0cnZsaW1pdDogMSxcblx0XHRcdFx0cnZwcm9wOiAndXNlcnx0aW1lc3RhbXAnLFxuXHRcdFx0XHRydmRpcjogJ25ld2VyJyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHR9O1xuXHRcdFx0Ly8gT25seSB0aGUgd2lraXRleHQgY29udGVudCBtb2RlbCBjYW4gcmVsaWFibHkgaGFuZGxlXG5cdFx0XHQvLyBydnNlY3Rpb24sIG90aGVycyByZXR1cm4gYW4gZXJyb3Igd2hlbiBwYWlyZWQgd2l0aCB0aGVcblx0XHRcdC8vIGNvbnRlbnQgcnZwcm9wLiBSZWxhdGVkbHksIG5vbi13aWtpdGV4dCBtb2RlbHMgZG9uJ3Rcblx0XHRcdC8vIHVuZGVyc3RhbmQgdGhlICNSRURJUkVDVCBjb25jZXB0LCBzbyB3ZSBzaG91bGRuJ3QgYXR0ZW1wdFxuXHRcdFx0Ly8gdGhlIHJlZGlyZWN0IHJlc29sdXRpb24gaW4gZm5Mb29rdXBDcmVhdGlvblN1Y2Nlc3Ncblx0XHRcdGlmIChjdHgubG9va3VwTm9uUmVkaXJlY3RDcmVhdG9yKSB7XG5cdFx0XHRcdHF1ZXJ5LnJ2c2VjdGlvbiA9IDA7XG5cdFx0XHRcdHF1ZXJ5LnJ2cHJvcCArPSAnfGNvbnRlbnQnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGN0eC5mb2xsb3dSZWRpcmVjdCkge1xuXHRcdFx0XHRxdWVyeS5yZWRpcmVjdHMgPSAnJzsgLy8gZm9sbG93IGFsbCByZWRpcmVjdHNcblx0XHRcdH1cblxuXHRcdFx0Y3R4Lmxvb2t1cENyZWF0aW9uQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0XHR3Z1VMUygn5oqT5Y+W6aG16Z2i5Yib5bu66ICF5L+h5oGvJywgJ+aKk+WPlumggemdouW7uueri+iAheizh+ioiicpLFxuXHRcdFx0XHRxdWVyeSxcblx0XHRcdFx0Zm5Mb29rdXBDcmVhdGlvblN1Y2Nlc3MsXG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LFxuXHRcdFx0XHRjdHgub25Mb29rdXBDcmVhdGlvbkZhaWx1cmVcblx0XHRcdCk7XG5cdFx0XHRjdHgubG9va3VwQ3JlYXRpb25BcGkuc2V0UGFyZW50KHRoaXMpO1xuXHRcdFx0Y3R4Lmxvb2t1cENyZWF0aW9uQXBpLnBvc3QoKTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIFJldmVydHMgYSBwYWdlIHRvIGByZXZlcnRPbGRJRGAgc2V0IGJ5IGBzZXRPbGRJRGAuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25TdWNjZXNzXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHRvIHJ1biBvbiBzdWNjZXNzLlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvbkZhaWx1cmVdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gcnVuIG9uIGZhaWx1cmUuXG5cdFx0ICovXG5cdFx0dGhpcy5yZXZlcnQgPSBmdW5jdGlvbiAob25TdWNjZXNzLCBvbkZhaWx1cmUpIHtcblx0XHRcdGN0eC5vblNhdmVTdWNjZXNzID0gb25TdWNjZXNzO1xuXHRcdFx0Y3R4Lm9uU2F2ZUZhaWx1cmUgPSBvbkZhaWx1cmUgfHwgZW1wdHlGdW5jdGlvbjtcblx0XHRcdGlmICghY3R4LnJldmVydE9sZElEKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKCdJbnRlcm5hbCBlcnJvcjogcmV2aXNpb24gSUQgdG8gcmV2ZXJ0IHRvIHdhcyBub3Qgc2V0IGJlZm9yZSByZXZlcnQhJyk7XG5cdFx0XHRcdGN0eC5vblNhdmVGYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjdHguZWRpdE1vZGUgPSAncmV2ZXJ0Jztcblx0XHRcdHRoaXMubG9hZChmbkF1dG9TYXZlLCBjdHgub25TYXZlRmFpbHVyZSk7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBNb3ZlcyBhIHBhZ2UgdG8gYW5vdGhlciB0aXRsZS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvblN1Y2Nlc3NdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gcnVuIG9uIHN1Y2Nlc3MuXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRmFpbHVyZV0gLSBDYWxsYmFjayBmdW5jdGlvbiB0byBydW4gb24gZmFpbHVyZS5cblx0XHQgKi9cblx0XHR0aGlzLm1vdmUgPSBmdW5jdGlvbiAob25TdWNjZXNzLCBvbkZhaWx1cmUpIHtcblx0XHRcdGN0eC5vbk1vdmVTdWNjZXNzID0gb25TdWNjZXNzO1xuXHRcdFx0Y3R4Lm9uTW92ZUZhaWx1cmUgPSBvbkZhaWx1cmUgfHwgZW1wdHlGdW5jdGlvbjtcblx0XHRcdGlmICghZm5QcmVmbGlnaHRDaGVja3MuY2FsbCh0aGlzLCAnbW92ZScsIGN0eC5vbk1vdmVGYWlsdXJlKSkge1xuXHRcdFx0XHRyZXR1cm47IC8vIGFib3J0XG5cdFx0XHR9XG5cblx0XHRcdGlmICghY3R4Lm1vdmVEZXN0aW5hdGlvbikge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcignSW50ZXJuYWwgZXJyb3I6IGRlc3RpbmF0aW9uIHBhZ2UgbmFtZSB3YXMgbm90IHNldCBiZWZvcmUgbW92ZSEnKTtcblx0XHRcdFx0Y3R4Lm9uTW92ZUZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmIChmbkNhblVzZU13VXNlclRva2VuKCdtb3ZlJykpIHtcblx0XHRcdFx0Zm5Qcm9jZXNzTW92ZS5jYWxsKHRoaXMsIHRoaXMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3QgcXVlcnkgPSBmbk5lZWRUb2tlbkluZm9RdWVyeSgnbW92ZScpO1xuXHRcdFx0XHRjdHgubW92ZUFwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdFx0XHR3Z1VMUygn6I635Y+W5Luk54mM4oCm4oCmJywgJ+WPluW+l+asiuadluKApuKApicpLFxuXHRcdFx0XHRcdHF1ZXJ5LFxuXHRcdFx0XHRcdGZuUHJvY2Vzc01vdmUsXG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQsXG5cdFx0XHRcdFx0Y3R4Lm9uTW92ZUZhaWx1cmVcblx0XHRcdFx0KTtcblx0XHRcdFx0Y3R4Lm1vdmVBcGkuc2V0UGFyZW50KHRoaXMpO1xuXHRcdFx0XHRjdHgubW92ZUFwaS5wb3N0KCk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBNYXJrcyB0aGUgcGFnZSBhcyBwYXRyb2xsZWQsIHVzaW5nIGByY2lkYCAoaWYgYXZhaWxhYmxlKSBvciBgcmV2aWRgLlxuXHRcdCAqXG5cdFx0ICogUGF0cm9sbGluZyBhcyBzdWNoIGRvZXNuJ3QgbmVlZCB0byByZWx5IG9uIGxvYWRpbmcgdGhlIHBhZ2UgaW5cblx0XHQgKiBxdWVzdGlvbjsgc2ltcGx5IHBhc3NpbmcgYSByZXZpZCB0byB0aGUgQVBJIGlzIHN1ZmZpY2llbnQsIHNvIGluXG5cdFx0ICogdGhvc2UgY2FzZXMganVzdCB1c2luZyB7QGxpbmsgTW9yZWJpdHMud2lraS5hcGl9IGlzIHByb2JhYmx5IHByZWZlcmFibGUuXG5cdFx0ICpcblx0XHQgKiBObyBlcnJvciBoYW5kbGluZyBzaW5jZSB3ZSBkb24ndCBhY3R1YWxseSBjYXJlIGFib3V0IHRoZSBlcnJvcnMuXG5cdFx0ICovXG5cdFx0dGhpcy5wYXRyb2wgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAoIU1vcmViaXRzLnVzZXJJc1N5c29wICYmICFNb3JlYml0cy51c2VySXNJbkdyb3VwKCdwYXRyb2xsZXInKSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblx0XHRcdC8vIElmIGEgbGluayBpcyBwcmVzZW50LCBkb24ndCBuZWVkIHRvIGNoZWNrIGlmIGl0J3MgcGF0cm9sbGVkXG5cdFx0XHRpZiAoJGJvZHkuZmluZCgnLnBhdHJvbGxpbmsnKS5sZW5ndGgpIHtcblx0XHRcdFx0Y29uc3QgcGF0cm9saHJlZiA9ICRib2R5LmZpbmQoJy5wYXRyb2xsaW5rIGEnKS5hdHRyKCdocmVmJyk7XG5cdFx0XHRcdGN0eC5yY2lkID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCdyY2lkJywgcGF0cm9saHJlZik7XG5cdFx0XHRcdGZuUHJvY2Vzc1BhdHJvbCh0aGlzLCB0aGlzKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnN0IHBhdHJvbFF1ZXJ5ID0ge1xuXHRcdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0XHRwcm9wOiAnaW5mbycsXG5cdFx0XHRcdFx0bWV0YTogJ3Rva2VucycsXG5cdFx0XHRcdFx0dHlwZTogJ3BhdHJvbCcsXG5cdFx0XHRcdFx0Ly8gYXMgbG9uZyBhcyB3ZSdyZSBxdWVyeWluZywgbWlnaHQgYXMgd2VsbCBnZXQgYSB0b2tlblxuXHRcdFx0XHRcdGxpc3Q6ICdyZWNlbnRjaGFuZ2VzJyxcblx0XHRcdFx0XHQvLyBjaGVjayBpZiB0aGUgcGFnZSBpcyB1bnBhdHJvbGxlZFxuXHRcdFx0XHRcdHRpdGxlczogY3R4LnBhZ2VOYW1lLFxuXHRcdFx0XHRcdHJjcHJvcDogJ3BhdHJvbGxlZCcsXG5cdFx0XHRcdFx0cmN0aXRsZTogY3R4LnBhZ2VOYW1lLFxuXHRcdFx0XHRcdHJjbGltaXQ6IDEsXG5cdFx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdH07XG5cdFx0XHRcdGN0eC5wYXRyb2xBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkod2dVTFMoJ+iOt+WPluS7pOeJjOKApuKApicsICflj5blvpfmrIrmnZbigKbigKYnKSwgcGF0cm9sUXVlcnksIGZuUHJvY2Vzc1BhdHJvbCk7XG5cdFx0XHRcdGN0eC5wYXRyb2xBcGkuc2V0UGFyZW50KHRoaXMpO1xuXHRcdFx0XHRjdHgucGF0cm9sQXBpLnBvc3QoKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdC8vIHxkZWxldGV8IGlzIGEgcmVzZXJ2ZWQgd29yZCBpbiBzb21lIGZsYXZvdXJzIG9mIEpTXG5cdFx0LyoqXG5cdFx0ICogRGVsZXRlcyBhIHBhZ2UgKGZvciBhZG1pbnMgb25seSkuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25TdWNjZXNzXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHRvIHJ1biBvbiBzdWNjZXNzLlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvbkZhaWx1cmVdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gcnVuIG9uIGZhaWx1cmUuXG5cdFx0ICovXG5cdFx0dGhpcy5kZWxldGVQYWdlID0gZnVuY3Rpb24gKG9uU3VjY2Vzcywgb25GYWlsdXJlKSB7XG5cdFx0XHRjdHgub25EZWxldGVTdWNjZXNzID0gb25TdWNjZXNzO1xuXHRcdFx0Y3R4Lm9uRGVsZXRlRmFpbHVyZSA9IG9uRmFpbHVyZSB8fCBlbXB0eUZ1bmN0aW9uO1xuXHRcdFx0aWYgKCFmblByZWZsaWdodENoZWNrcy5jYWxsKHRoaXMsICdkZWxldGUnLCBjdHgub25EZWxldGVGYWlsdXJlKSkge1xuXHRcdFx0XHRyZXR1cm47IC8vIGFib3J0XG5cdFx0XHR9XG5cblx0XHRcdGlmIChmbkNhblVzZU13VXNlclRva2VuKCdkZWxldGUnKSkge1xuXHRcdFx0XHRmblByb2Nlc3NEZWxldGUuY2FsbCh0aGlzLCB0aGlzKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnN0IHF1ZXJ5ID0gZm5OZWVkVG9rZW5JbmZvUXVlcnkoJ2RlbGV0ZScpO1xuXHRcdFx0XHRjdHguZGVsZXRlQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0XHRcdHdnVUxTKCfojrflj5bku6TniYzigKbigKYnLCAn5Y+W5b6X5qyK5p2W4oCm4oCmJyksXG5cdFx0XHRcdFx0cXVlcnksXG5cdFx0XHRcdFx0Zm5Qcm9jZXNzRGVsZXRlLFxuXHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LFxuXHRcdFx0XHRcdGN0eC5vbkRlbGV0ZUZhaWx1cmVcblx0XHRcdFx0KTtcblx0XHRcdFx0Y3R4LmRlbGV0ZUFwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0XHRcdGN0eC5kZWxldGVBcGkucG9zdCgpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogVW5kZWxldGVzIGEgcGFnZSAoZm9yIGFkbWlucyBvbmx5KS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvblN1Y2Nlc3NdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gcnVuIG9uIHN1Y2Nlc3MuXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRmFpbHVyZV0gLSBDYWxsYmFjayBmdW5jdGlvbiB0byBydW4gb24gZmFpbHVyZS5cblx0XHQgKi9cblx0XHR0aGlzLnVuZGVsZXRlUGFnZSA9IGZ1bmN0aW9uIChvblN1Y2Nlc3MsIG9uRmFpbHVyZSkge1xuXHRcdFx0Y3R4Lm9uVW5kZWxldGVTdWNjZXNzID0gb25TdWNjZXNzO1xuXHRcdFx0Y3R4Lm9uVW5kZWxldGVGYWlsdXJlID0gb25GYWlsdXJlIHx8IGVtcHR5RnVuY3Rpb247XG5cdFx0XHRpZiAoIWZuUHJlZmxpZ2h0Q2hlY2tzLmNhbGwodGhpcywgJ3VuZGVsZXRlJywgY3R4Lm9uVW5kZWxldGVGYWlsdXJlKSkge1xuXHRcdFx0XHRyZXR1cm47IC8vIGFib3J0XG5cdFx0XHR9XG5cblx0XHRcdGlmIChmbkNhblVzZU13VXNlclRva2VuKCd1bmRlbGV0ZScpKSB7XG5cdFx0XHRcdGZuUHJvY2Vzc1VuZGVsZXRlLmNhbGwodGhpcywgdGhpcyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCBxdWVyeSA9IGZuTmVlZFRva2VuSW5mb1F1ZXJ5KCd1bmRlbGV0ZScpO1xuXHRcdFx0XHRjdHgudW5kZWxldGVBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdFx0d2dVTFMoJ+iOt+WPluS7pOeJjOKApuKApicsICflj5blvpfmrIrmnZbigKbigKYnKSxcblx0XHRcdFx0XHRxdWVyeSxcblx0XHRcdFx0XHRmblByb2Nlc3NVbmRlbGV0ZSxcblx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudCxcblx0XHRcdFx0XHRjdHgub25VbmRlbGV0ZUZhaWx1cmVcblx0XHRcdFx0KTtcblx0XHRcdFx0Y3R4LnVuZGVsZXRlQXBpLnNldFBhcmVudCh0aGlzKTtcblx0XHRcdFx0Y3R4LnVuZGVsZXRlQXBpLnBvc3QoKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIFByb3RlY3RzIGEgcGFnZSAoZm9yIGFkbWlucyBvbmx5KS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvblN1Y2Nlc3NdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gcnVuIG9uIHN1Y2Nlc3MuXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRmFpbHVyZV0gLSBDYWxsYmFjayBmdW5jdGlvbiB0byBydW4gb24gZmFpbHVyZS5cblx0XHQgKi9cblx0XHR0aGlzLnByb3RlY3QgPSBmdW5jdGlvbiAob25TdWNjZXNzLCBvbkZhaWx1cmUpIHtcblx0XHRcdGN0eC5vblByb3RlY3RTdWNjZXNzID0gb25TdWNjZXNzO1xuXHRcdFx0Y3R4Lm9uUHJvdGVjdEZhaWx1cmUgPSBvbkZhaWx1cmUgfHwgZW1wdHlGdW5jdGlvbjtcblx0XHRcdGlmICghZm5QcmVmbGlnaHRDaGVja3MuY2FsbCh0aGlzLCAncHJvdGVjdCcsIGN0eC5vblByb3RlY3RGYWlsdXJlKSkge1xuXHRcdFx0XHRyZXR1cm47IC8vIGFib3J0XG5cdFx0XHR9XG5cblx0XHRcdGlmICghY3R4LnByb3RlY3RFZGl0ICYmICFjdHgucHJvdGVjdE1vdmUgJiYgIWN0eC5wcm90ZWN0Q3JlYXRlKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdCdJbnRlcm5hbCBlcnJvcjogeW91IG11c3Qgc2V0IGVkaXQgYW5kL29yIG1vdmUgYW5kL29yIGNyZWF0ZSBwcm90ZWN0aW9uIGJlZm9yZSBjYWxsaW5nIHByb3RlY3QoKSEnXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGN0eC5vblByb3RlY3RGYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHQvLyBiZWNhdXNlIG9mIHRoZSB3YXkgTVcgQVBJIGludGVycHJldHMgcHJvdGVjdGlvbiBsZXZlbHNcblx0XHRcdC8vIChhYnNvbHV0ZSwgbm90IGRpZmZlcmVudGlhbCksIHdlIGFsd2F5cyBuZWVkIHRvIHJlcXVlc3Rcblx0XHRcdC8vIHByb3RlY3Rpb24gbGV2ZWxzIGZyb20gdGhlIHNlcnZlclxuXHRcdFx0Y29uc3QgcXVlcnkgPSBmbk5lZWRUb2tlbkluZm9RdWVyeSgncHJvdGVjdCcpO1xuXHRcdFx0Y3R4LnByb3RlY3RBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdHdnVUxTKCfojrflj5bku6TniYzigKbigKYnLCAn5Y+W5b6X5qyK5p2W4oCm4oCmJyksXG5cdFx0XHRcdHF1ZXJ5LFxuXHRcdFx0XHRmblByb2Nlc3NQcm90ZWN0LFxuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudCxcblx0XHRcdFx0Y3R4Lm9uUHJvdGVjdEZhaWx1cmVcblx0XHRcdCk7XG5cdFx0XHRjdHgucHJvdGVjdEFwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0XHRjdHgucHJvdGVjdEFwaS5wb3N0KCk7XG5cdFx0fTtcblx0XHQvKlxuXHRcdCAqIFByaXZhdGUgbWVtYmVyIGZ1bmN0aW9uc1xuXHRcdCAqIFRoZXNlIGFyZSBub3QgZXhwb3NlZCBvdXRzaWRlXG5cdFx0ICovXG5cdFx0LyoqXG5cdFx0ICogRGV0ZXJtaW5lcyB3aGV0aGVyIHdlIGNhbiBzYXZlIGFuIEFQSSBjYWxsIGJ5IHVzaW5nIHRoZSBjc3JmIHRva2VuXG5cdFx0ICogc2VudCB3aXRoIHRoZSBwYWdlIEhUTUwsIG9yIHdoZXRoZXIgd2UgbmVlZCB0byBhc2sgdGhlIHNlcnZlciBmb3Jcblx0XHQgKiBtb3JlIGluZm8gKGUuZy4gcHJvdGVjdGlvbiBvciB3YXRjaGxpc3QgZXhwaXJ5KS5cblx0XHQgKlxuXHRcdCAqIEN1cnJlbnRseSB1c2VkIGZvciBgYXBwZW5kYCwgYHByZXBlbmRgLCBgbmV3U2VjdGlvbmAsIGBtb3ZlYCxcblx0XHQgKiBgZGVsZXRlUGFnZWAsIGFuZCBgdW5kZWxldGVQYWdlYC4gTm90IHVzZWQgZm9yIGBwcm90ZWN0YFxuXHRcdCAqIHNpbmNlIGl0IGFsd2F5cyBuZWVkcyB0byByZXF1ZXN0IHByb3RlY3Rpb24gc3RhdHVzLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IFthY3Rpb249ZWRpdF0gLSBUaGUgYWN0aW9uIGJlaW5nIHVuZGVydGFrZW4sIGUuZy5cblx0XHQgKiBcImVkaXRcIiBvciBcImRlbGV0ZVwiLiBJbiBwcmFjdGljZSwgb25seSBcImVkaXRcIiBvciBcIm5vdGVkaXRcIiBtYXR0ZXJzLlxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHRcdCAqL1xuXHRcdGNvbnN0IGZuQ2FuVXNlTXdVc2VyVG9rZW4gPSAoYWN0aW9uKSA9PiB7XG5cdFx0XHRhY3Rpb24gfHw9ICdlZGl0Jztcblx0XHRcdC8vIElmIGEgd2F0Y2hsaXN0IGV4cGlyeSBpcyBzZXQsIHdlIG11c3QgYWx3YXlzIGxvYWQgdGhlIHBhZ2Vcblx0XHRcdC8vIHRvIGF2b2lkIG92ZXJ3cml0aW5nIGluZGVmaW5pdGUgcHJvdGVjdGlvbi4gIE9mIGNvdXJzZSwgbm90XG5cdFx0XHQvLyBuZWVkZWQgaWYgc2V0dGluZyBpbmRlZmluaXRlIHdhdGNoaW5nIVxuXHRcdFx0aWYgKGN0eC53YXRjaGxpc3RFeHBpcnkgJiYgIU1vcmViaXRzLnN0cmluZy5pc0luZmluaXR5KGN0eC53YXRjaGxpc3RFeHBpcnkpKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdC8vIEFQSS1iYXNlZCByZWRpcmVjdCByZXNvbHV0aW9uIG9ubHkgd29ya3MgZm9yIGFjdGlvbj1xdWVyeSBhbmRcblx0XHRcdC8vIGFjdGlvbj1lZGl0IGluIGFwcGVuZC9wcmVwZW5kL25ldyBtb2Rlc1xuXHRcdFx0aWYgKGN0eC5mb2xsb3dSZWRpcmVjdCkge1xuXHRcdFx0XHRpZiAoIWN0eC5mb2xsb3dDcm9zc05zUmVkaXJlY3QpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7IC8vIG11c3QgbG9hZCB0aGUgcGFnZSB0byBjaGVjayBmb3IgY3Jvc3MgbmFtZXNwYWNlIHJlZGlyZWN0c1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGFjdGlvbiAhPT0gJ2VkaXQnIHx8IGN0eC5lZGl0TW9kZSA9PT0gJ2FsbCcgfHwgY3R4LmVkaXRNb2RlID09PSAncmV2ZXJ0Jykge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ly8gZG8gd2UgbmVlZCB0byBmZXRjaCB0aGUgZWRpdCBwcm90ZWN0aW9uIGV4cGlyeT9cblx0XHRcdGlmIChNb3JlYml0cy51c2VySXNTeXNvcCAmJiAhY3R4LnN1cHByZXNzUHJvdGVjdFdhcm5pbmcpIHtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdG5ldyBtdy5UaXRsZShNb3JlYml0cy5wYWdlTmFtZU5vcm0pLmdldFByZWZpeGVkVGV4dCgpICE9PVxuXHRcdFx0XHRcdG5ldyBtdy5UaXRsZShjdHgucGFnZU5hbWUpLmdldFByZWZpeGVkVGV4dCgpXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyB3Z1Jlc3RyaWN0aW9uRWRpdCBpcyBudWxsIG9uIG5vbi1leGlzdGVudCBwYWdlcyxcblx0XHRcdFx0Ly8gc28gdGhpcyBuZWF0bHkgaGFuZGxlcyBub25leGlzdGVudCBwYWdlc1xuXHRcdFx0XHRjb25zdCBlZGl0UmVzdHJpY3Rpb24gPSBtdy5jb25maWcuZ2V0KCd3Z1Jlc3RyaWN0aW9uRWRpdCcpO1xuXHRcdFx0XHRpZiAoIWVkaXRSZXN0cmljdGlvbiB8fCBlZGl0UmVzdHJpY3Rpb24uaW5jbHVkZXMoJ3N5c29wJykpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiAhIW13LnVzZXIudG9rZW5zLmdldCgnY3NyZlRva2VuJyk7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBXaGVuIGZ1bmN0aW9ucyBjYW4ndCB1c2Vcblx0XHQgKiB7QGxpbmsgTW9yZWJpdHMud2lraS5wYWdlfmZuQ2FuVXNlTXdVc2VyVG9rZW58Zm5DYW5Vc2VNd1VzZXJUb2tlbn1cblx0XHQgKiBvciByZXF1aXJlIGNoZWNraW5nIHByb3RlY3Rpb24gb3Igd2F0Y2hlZCBzdGF0dXMsIG1haW50YWluIHRoZSBxdWVyeVxuXHRcdCAqIGluIG9uZSBwbGFjZS4gVXNlZCBmb3Ige0BsaW5rIE1vcmViaXRzLndpa2kucGFnZSNkZWxldGVQYWdlfGRlbGV0ZX0sXG5cdFx0ICoge0BsaW5rIE1vcmViaXRzLndpa2kucGFnZSN1bmRlbGV0ZVBhZ2V8dW5kZWxldGV9LFxuXHRcdCAqIHtAbGluayogTW9yZWJpdHMud2lraS5wYWdlI3Byb3RlY3R8cHJvdGVjdH0sXG5cdFx0ICogYW5kIHtAbGluayBNb3JlYml0cy53aWtpLnBhZ2UjbW92ZXxtb3ZlfVxuXHRcdCAqIChiYXNpY2FsbHksIGp1c3Qgbm90IHtAbGluayBNb3JlYml0cy53aWtpLnBhZ2UjbG9hZHxsb2FkfSkuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gYWN0aW9uIC0gVGhlIGFjdGlvbiBiZWluZyB1bmRlcnRha2VuLCBlLmcuIFwiZWRpdFwiIG9yXG5cdFx0ICogXCJkZWxldGVcIi5cblx0XHQgKiBAcmV0dXJucyB7T2JqZWN0fSBBcHByb3ByaWF0ZSBxdWVyeS5cblx0XHQgKi9cblx0XHRjb25zdCBmbk5lZWRUb2tlbkluZm9RdWVyeSA9IChhY3Rpb24pID0+IHtcblx0XHRcdGNvbnN0IHF1ZXJ5ID0ge1xuXHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdG1ldGE6ICd0b2tlbnMnLFxuXHRcdFx0XHR0eXBlOiAnY3NyZicsXG5cdFx0XHRcdHRpdGxlczogY3R4LnBhZ2VOYW1lLFxuXHRcdFx0XHRwcm9wOiAnaW5mbycsXG5cdFx0XHRcdGlucHJvcDogJ3dhdGNoZWQnLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdH07XG5cdFx0XHQvLyBQcm90ZWN0aW9uIG5vdCBjaGVja2VkIGZvciBub24tc3lzb3AgbW92ZXNcblx0XHRcdGlmIChhY3Rpb24gIT09ICdtb3ZlJyB8fCBNb3JlYml0cy51c2VySXNTeXNvcCkge1xuXHRcdFx0XHRxdWVyeS5pbnByb3AgKz0gJ3xwcm90ZWN0aW9uJztcblx0XHRcdH1cblx0XHRcdGlmIChjdHguZm9sbG93UmVkaXJlY3QgJiYgYWN0aW9uICE9PSAndW5kZWxldGUnKSB7XG5cdFx0XHRcdHF1ZXJ5LnJlZGlyZWN0cyA9ICcnOyAvLyBmb2xsb3cgYWxsIHJlZGlyZWN0c1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gcXVlcnk7XG5cdFx0fTtcblx0XHQvLyBjYWxsYmFjayBmcm9tIGxvYWRTdWNjZXNzKCkgZm9yIGFwcGVuZCgpLCBwcmVwZW5kKCksIGFuZCBuZXdTZWN0aW9uKCkgdGhyZWFkc1xuXHRcdGNvbnN0IGZuQXV0b1NhdmUgPSAocGFnZW9iaikgPT4ge1xuXHRcdFx0cGFnZW9iai5zYXZlKGN0eC5vblNhdmVTdWNjZXNzLCBjdHgub25TYXZlRmFpbHVyZSk7XG5cdFx0fTtcblx0XHQvLyBjYWxsYmFjayBmcm9tIGxvYWRBcGkucG9zdCgpXG5cdFx0Y29uc3QgZm5Mb2FkU3VjY2VzcyA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gY3R4LmxvYWRBcGkuZ2V0UmVzcG9uc2UoKS5xdWVyeTtcblx0XHRcdGlmICghZm5DaGVja1BhZ2VOYW1lKHJlc3BvbnNlLCBjdHgub25Mb2FkRmFpbHVyZSkpIHtcblx0XHRcdFx0cmV0dXJuOyAvLyBhYm9ydFxuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBbcGFnZV0gPSByZXNwb25zZS5wYWdlcztcblx0XHRcdGxldCByZXY7XG5cdFx0XHRjdHgucGFnZUV4aXN0cyA9ICFwYWdlLm1pc3Npbmc7XG5cdFx0XHRpZiAoY3R4LnBhZ2VFeGlzdHMpIHtcblx0XHRcdFx0W3Jldl0gPSBwYWdlLnJldmlzaW9ucztcblx0XHRcdFx0Y3R4Lmxhc3RFZGl0VGltZSA9IHJldi50aW1lc3RhbXA7XG5cdFx0XHRcdGN0eC5wYWdlVGV4dCA9IHJldi5jb250ZW50O1xuXHRcdFx0XHRjdHgucGFnZUlEID0gcGFnZS5wYWdlaWQ7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjdHgucGFnZVRleHQgPSAnJzsgLy8gYWxsb3cgZm9yIGNvbmNhdGVuYXRpb24sIGV0Yy5cblx0XHRcdFx0Y3R4LnBhZ2VJRCA9IDA7IC8vIG5vbmV4aXN0ZW50IGluIHJlc3BvbnNlLCBtYXRjaGVzIHdnQXJ0aWNsZUlkXG5cdFx0XHR9XG5cblx0XHRcdGN0eC5jc3JmVG9rZW4gPSByZXNwb25zZS50b2tlbnMuY3NyZnRva2VuO1xuXHRcdFx0aWYgKCFjdHguY3NyZlRva2VuKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdnVUxTKCfmnKrog73ojrflj5bnvJbovpHku6TniYzjgIInLCAn5pyq6IO95Y+W5b6X57eo6Lyv5qyK5p2W44CCJykpO1xuXHRcdFx0XHRjdHgub25Mb2FkRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y3R4LmxvYWRUaW1lID0gY3R4LmxvYWRBcGkuZ2V0UmVzcG9uc2UoKS5jdXJ0aW1lc3RhbXA7XG5cdFx0XHRpZiAoIWN0eC5sb2FkVGltZSkge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3Z1VMUygn5pyq6IO96I635Y+W5b2T5YmN5pe26Ze05oiz44CCJywgJ+acquiDveWPluW+l+eVtuWJjeaZgumWk+aIs+OAgicpKTtcblx0XHRcdFx0Y3R4Lm9uTG9hZEZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGN0eC5jb250ZW50TW9kZWwgPSBwYWdlLmNvbnRlbnRtb2RlbDtcblx0XHRcdGN0eC53YXRjaGVkID0gcGFnZS53YXRjaGxpc3RleHBpcnkgfHwgcGFnZS53YXRjaGVkO1xuXHRcdFx0Ly8gZXh0cmFjdCBwcm90ZWN0aW9uIGluZm8sIHRvIGFsZXJ0IGFkbWlucyB3aGVuIHRoZXkgYXJlIGFib3V0IHRvIGVkaXQgYSBwcm90ZWN0ZWQgcGFnZVxuXHRcdFx0Ly8gSW5jbHVkZXMgY2FzY2FkaW5nIHByb3RlY3Rpb25cblx0XHRcdGlmIChNb3JlYml0cy51c2VySXNTeXNvcCkge1xuXHRcdFx0XHRjb25zdCBlZGl0UHJvdCA9IHBhZ2UucHJvdGVjdGlvblxuXHRcdFx0XHRcdC5maWx0ZXIoKHByKSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gcHIudHlwZSA9PT0gJ2VkaXQnICYmIHByLmxldmVsID09PSAnc3lzb3AnO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LnBvcCgpO1xuXHRcdFx0XHRpZiAoZWRpdFByb3QpIHtcblx0XHRcdFx0XHRjdHguZnVsbHlQcm90ZWN0ZWQgPSBlZGl0UHJvdC5leHBpcnk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y3R4LmZ1bGx5UHJvdGVjdGVkID0gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGN0eC5yZXZlcnRDdXJJRCA9IHBhZ2UubGFzdHJldmlkO1xuXHRcdFx0Y29uc3QgdGVzdGFjdGlvbnMgPSBwYWdlLmFjdGlvbnM7XG5cdFx0XHRjdHgudGVzdEFjdGlvbnMgPSBbXTsgLy8gd2FzIG51bGxcblx0XHRcdGZvciAoY29uc3QgYWN0aW9uIG9mIE9iamVjdC5rZXlzKHRlc3RhY3Rpb25zKSkge1xuXHRcdFx0XHRpZiAodGVzdGFjdGlvbnNbYWN0aW9uXSkge1xuXHRcdFx0XHRcdGN0eC50ZXN0QWN0aW9ucy5wdXNoKGFjdGlvbik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChjdHguZWRpdE1vZGUgPT09ICdyZXZlcnQnKSB7XG5cdFx0XHRcdGN0eC5yZXZlcnRDdXJJRCA9IHJldiAmJiByZXYucmV2aWQ7XG5cdFx0XHRcdGlmICghY3R4LnJldmVydEN1cklEKSB7XG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2dVTFMoJ+acquiDveiOt+WPluW9k+WJjeS/ruiuoueJiOacrElE44CCJywgJ+acquiDveWPluW+l+ebruWJjeS/ruiogueJiOacrElE44CCJykpO1xuXHRcdFx0XHRcdGN0eC5vbkxvYWRGYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRjdHgucmV2ZXJ0VXNlciA9IHJldiAmJiByZXYudXNlcjtcblx0XHRcdFx0aWYgKCFjdHgucmV2ZXJ0VXNlcikge1xuXHRcdFx0XHRcdGlmIChyZXYgJiYgcmV2LnVzZXJoaWRkZW4pIHtcblx0XHRcdFx0XHRcdC8vIHVzZXJuYW1lIHdhcyBSZXZEZWwnZCBvciBvdmVyc2lnaHRlZFxuXHRcdFx0XHRcdFx0Y3R4LnJldmVydFVzZXIgPSB3Z1VMUygnPOeUqOaIt+WQjeW3sumakOiXjz4nLCAnPOS9v+eUqOiAheWQjeeoseW3sumaseiXjz4nKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2dVTFMoJ+acquiDveiOt+WPluatpOS/ruiuoueJiOacrOeahOe8lui+keiAheOAgicsICfmnKrog73lj5blvpfmraTkv67oqILniYjmnKznmoTnt6jovK/ogIXjgIInKSk7XG5cdFx0XHRcdFx0XHRjdHgub25Mb2FkRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gc2V0IHJldmVydCBlZGl0IHN1bW1hcnlcblx0XHRcdFx0Y3R4LmVkaXRTdW1tYXJ5ID0gYFtbUVc6VU5ET3zmkqTplIBdXeeUsSAke2N0eC5yZXZlcnRVc2VyfSDmiYDlgZrlh7rnmoQke3dnVUxTKCfkv67orqIgJywgJ+S/ruiogiAnKX0ke1xuXHRcdFx0XHRcdGN0eC5yZXZlcnRPbGRJRFxuXHRcdFx0XHR977yaJHtjdHguZWRpdFN1bW1hcnl9YDtcblx0XHRcdH1cblx0XHRcdGN0eC5wYWdlTG9hZGVkID0gdHJ1ZTtcblx0XHRcdC8vIG13Lm5vdGlmeShcIkdlbmVyYXRlIGVkaXQgY29uZmxpY3Qgbm93XCIsIHt0eXBlOiAnd2FybicsIHRhZzogJ21vcmViaXRzJ30pOyAgLy8gZm9yIHRlc3RpbmcgZWRpdCBjb25mbGljdCByZWNvdmVyeSBsb2dpY1xuXHRcdFx0Y3R4Lm9uTG9hZFN1Y2Nlc3ModGhpcyk7IC8vIGludm9rZSBjYWxsYmFja1xuXHRcdH07XG5cdFx0Ly8gaGVscGVyIGZ1bmN0aW9uIHRvIHBhcnNlIHRoZSBwYWdlIG5hbWUgcmV0dXJuZWQgZnJvbSB0aGUgQVBJXG5cdFx0Y29uc3QgZm5DaGVja1BhZ2VOYW1lID0gZnVuY3Rpb24gKHJlc3BvbnNlLCBvbkZhaWx1cmUpIHtcblx0XHRcdGlmICghb25GYWlsdXJlKSB7XG5cdFx0XHRcdG9uRmFpbHVyZSA9IGVtcHR5RnVuY3Rpb247XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBwYWdlID0gcmVzcG9uc2UucGFnZXMgJiYgcmVzcG9uc2UucGFnZXNbMF07XG5cdFx0XHRpZiAocGFnZSkge1xuXHRcdFx0XHQvLyBjaGVjayBmb3IgaW52YWxpZCB0aXRsZXNcblx0XHRcdFx0aWYgKHBhZ2UuaW52YWxpZCkge1xuXHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdnVUxTKCfmoIfpopjkuI3lkIjms5XvvJonLCBg5qiZ6aGM5LiN5ZCI5rOV77yaJHtjdHgucGFnZU5hbWV9YCkpO1xuXHRcdFx0XHRcdG9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7IC8vIGFib3J0XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gcmV0cmlldmUgYWN0dWFsIHRpdGxlIG9mIHRoZSBwYWdlIGFmdGVyIG5vcm1hbGl6YXRpb24gYW5kIHJlZGlyZWN0c1xuXHRcdFx0XHRjb25zdCByZXNvbHZlZE5hbWUgPSBwYWdlLnRpdGxlO1xuXHRcdFx0XHRpZiAocmVzcG9uc2UucmVkaXJlY3RzKSB7XG5cdFx0XHRcdFx0Ly8gY2hlY2sgZm9yIGNyb3NzLW5hbWVzcGFjZSByZWRpcmVjdDpcblx0XHRcdFx0XHRjb25zdCBvcmlnTnMgPSBuZXcgbXcuVGl0bGUoY3R4LnBhZ2VOYW1lKS5uYW1lc3BhY2U7XG5cdFx0XHRcdFx0Y29uc3QgbmV3TnMgPSBuZXcgbXcuVGl0bGUocmVzb2x2ZWROYW1lKS5uYW1lc3BhY2U7XG5cdFx0XHRcdFx0aWYgKG9yaWdOcyAhPT0gbmV3TnMgJiYgIWN0eC5mb2xsb3dDcm9zc05zUmVkaXJlY3QpIHtcblx0XHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdFx0XHRjdHgucGFnZU5hbWUgK1xuXHRcdFx0XHRcdFx0XHRcdHdnVUxTKCfmmK/ot6jlkb3lkI3nqbrpl7Tph43lrprlkJHliLAnLCAn5piv6Leo5ZG95ZCN56m66ZaT6YeN5paw5bCO5ZCR5YiwJykgK1xuXHRcdFx0XHRcdFx0XHRcdHJlc29sdmVkTmFtZSArXG5cdFx0XHRcdFx0XHRcdFx0d2dVTFMoJ++8jOeVpei/hycsICfvvIznlaXpgY4nKVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdG9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gb25seSBub3RpZnkgdXNlciBmb3IgcmVkaXJlY3RzLCBub3Qgbm9ybWFsaXphdGlvblxuXHRcdFx0XHRcdG5ldyBNb3JlYml0cy5zdGF0dXMoXG5cdFx0XHRcdFx0XHR3Z1VMUygn5L+h5oGvJywgJ+izh+ioiicpLFxuXHRcdFx0XHRcdFx0d2dVTFMoJ+S7jiAnLCAn5b6eICcpICsgY3R4LnBhZ2VOYW1lICsgd2dVTFMoJyDph43lrprlkJHliLAgJywgJyDph43mlrDlsI7lkJHliLAgJykgKyByZXNvbHZlZE5hbWVcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGN0eC5wYWdlTmFtZSA9IHJlc29sdmVkTmFtZTsgLy8gdXBkYXRlIHRvIHJlZGlyZWN0IHRhcmdldCBvciBub3JtYWxpemVkIG5hbWVcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIGNvdWxkIGJlIGEgY2lyY3VsYXIgcmVkaXJlY3Qgb3Igb3RoZXIgcHJvYmxlbVxuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3Z1VMUygn5LiN6IO96Kej5p6Q6aG16Z2i55qE6YeN5a6a5ZCR77yaJywgJ+S4jeiDveino+aekOmggemdoueahOmHjeaWsOWwjuWQke+8micpICsgY3R4LnBhZ2VOYW1lKTtcblx0XHRcdFx0b25GYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHQvLyBmb3JjZSBlcnJvciB0byBzdGF5IG9uIHRoZSBzY3JlZW5cblx0XHRcdFx0KytNb3JlYml0cy53aWtpLm51bWJlck9mQWN0aW9uc0xlZnQ7XG5cdFx0XHRcdHJldHVybiBmYWxzZTsgLy8gYWJvcnRcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRydWU7IC8vIGFsbCBPS1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogRGV0ZXJtaW5lIHdoZXRoZXIgd2Ugc2hvdWxkIHByb3ZpZGUgYSB3YXRjaGxpc3QgZXhwaXJ5LiAgV2lsbCBub3Rcblx0XHQgKiBkbyBzbyBpZiB0aGUgcGFnZSBpcyBjdXJyZW50bHkgcGVybWFuZW50bHkgd2F0Y2hlZCwgb3IgdGhlIGN1cnJlbnRcblx0XHQgKiBleHBpcnkgaXMgKmFmdGVyKiB0aGUgbmV3LCBwcm92aWRlZCBleHBpcnkuICBPbmx5IGhhbmRsZXMgc3RyaW5nc1xuXHRcdCAqIHJlY29nbml6ZWQgYnkge0BsaW5rIE1vcmViaXRzLmRhdGV9IG9yIHJlbGF0aXZlIHRpbWVmcmFtZXMgd2l0aFxuXHRcdCAqIHVuaXQgaXQgY2FuIHByb2Nlc3MuICBSZWxpZXMgb24gdGhlIGZhY3QgdGhhdCBmbkNhblVzZU13VXNlclRva2VuXG5cdFx0ICogcmVxdWlyZXMgcGFnZSBsb2FkaW5nIGlmIGEgd2F0Y2hsaXN0ZXhwaXJ5IGlzIHByb3ZpZGVkLCBzbyB3ZSBhcmVcblx0XHQgKiBlbnN1cmVkIG9mIGtub3dpbmcgdGhlIHdhdGNoIHN0YXR1cyBieSB0aGUgdXNlIG9mIHRoaXMuXG5cdFx0ICpcblx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0XHQgKi9cblx0XHRjb25zdCBmbkFwcGx5V2F0Y2hsaXN0RXhwaXJ5ID0gKCkgPT4ge1xuXHRcdFx0aWYgKGN0eC53YXRjaGxpc3RFeHBpcnkpIHtcblx0XHRcdFx0aWYgKCFjdHgud2F0Y2hlZCB8fCBNb3JlYml0cy5zdHJpbmcuaXNJbmZpbml0eShjdHgud2F0Y2hsaXN0RXhwaXJ5KSkge1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBjdHgud2F0Y2hlZCA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHRsZXQgbmV3RXhwaXJ5O1xuXHRcdFx0XHRcdC8vIEF0dGVtcHQgdG8gZGV0ZXJtaW5lIGlmIHRoZSBuZXcgZXhwaXJ5IGlzIGFcblx0XHRcdFx0XHQvLyByZWxhdGl2ZSAoZS5nLiBgMSBtb250aGApIG9yIGFic29sdXRlIGRhdGV0aW1lXG5cdFx0XHRcdFx0Y29uc3QgcmVsID0gY3R4LndhdGNobGlzdEV4cGlyeS5zcGxpdCgnICcpO1xuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRuZXdFeHBpcnkgPSBuZXcgTW9yZWJpdHMuZGF0ZSgpLmFkZChyZWxbMF0sIHJlbFsxXSk7XG5cdFx0XHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdFx0XHRuZXdFeHBpcnkgPSBuZXcgTW9yZWJpdHMuZGF0ZShjdHgud2F0Y2hsaXN0RXhwaXJ5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gSWYgdGhlIGRhdGUgaXMgdmFsaWQsIG9ubHkgdXNlIGl0IGlmIGl0IGV4dGVuZHMgdGhlIGN1cnJlbnQgZXhwaXJ5XG5cdFx0XHRcdFx0aWYgKG5ld0V4cGlyeS5pc1ZhbGlkKCkpIHtcblx0XHRcdFx0XHRcdGlmIChuZXdFeHBpcnkuaXNBZnRlcihuZXcgTW9yZWJpdHMuZGF0ZShjdHgud2F0Y2hlZCkpKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHQvLyBJZiBpdCdzIHN0aWxsIG5vdCB2YWxpZCwgaG9wZSBpdCdzIGEgdmFsaWQgTVcgZXhwaXJ5IGZvcm1hdCB0aGF0XG5cdFx0XHRcdFx0XHQvLyBNb3JlYml0cy5kYXRlIGRvZXNuJ3QgcmVjb2duaXplLCBzbyBqdXN0IGRlZmF1bHQgdG8gdXNpbmcgaXQuXG5cdFx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgYWxzbyBpbmNsdWRlIG1pbm9yIHR5cG9zLlxuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fTtcblx0XHQvLyBjYWxsYmFjayBmcm9tIHNhdmVBcGkucG9zdCgpXG5cdFx0Y29uc3QgZm5TYXZlU3VjY2VzcyA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGN0eC5lZGl0TW9kZSA9ICdhbGwnOyAvLyBjYW5jZWwgYXBwZW5kL3ByZXBlbmQvbmV3U2VjdGlvbi9yZXZlcnQgbW9kZXNcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gY3R4LnNhdmVBcGkuZ2V0UmVzcG9uc2UoKTtcblx0XHRcdC8vIHNlZSBpZiB0aGUgQVBJIHRoaW5rcyB3ZSB3ZXJlIHN1Y2Nlc3NmdWxcblx0XHRcdGlmIChyZXNwb25zZS5lZGl0LnJlc3VsdCA9PT0gJ1N1Y2Nlc3MnKSB7XG5cdFx0XHRcdC8vIHJlYWwgc3VjY2Vzc1xuXHRcdFx0XHQvLyBkZWZhdWx0IG9uIHN1Y2Nlc3MgYWN0aW9uIC0gZGlzcGxheSBsaW5rIGZvciBlZGl0ZWQgcGFnZVxuXHRcdFx0XHRjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXHRcdFx0XHRsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIG13LnV0aWwuZ2V0VXJsKGN0eC5wYWdlTmFtZSkpO1xuXHRcdFx0XHRsaW5rLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGN0eC5wYWdlTmFtZSkpO1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5pbmZvKFsn5a6M5oiQ77yIJywgbGluaywgJ++8iSddKTtcblx0XHRcdFx0aWYgKGN0eC5vblNhdmVTdWNjZXNzKSB7XG5cdFx0XHRcdFx0Y3R4Lm9uU2F2ZVN1Y2Nlc3ModGhpcyk7IC8vIGludm9rZSBjYWxsYmFja1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Ly8gZXJyb3JzIGhlcmUgYXJlIG9ubHkgZ2VuZXJhdGVkIGJ5IGV4dGVuc2lvbnMgd2hpY2ggaG9vayBBUElFZGl0QmVmb3JlU2F2ZSB3aXRoaW4gTWVkaWFXaWtpLFxuXHRcdFx0Ly8gd2hpY2ggYXMgb2YgMS4zNC4wLXdtZi4yMyAoU2VwdCAyMDE5KSBzaG91bGQgb25seSBlbmNvbXBhc3MgY2FwdGNoYSBtZXNzYWdlc1xuXHRcdFx0aWYgKHJlc3BvbnNlLmVkaXQuY2FwdGNoYSkge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0XHR3Z1VMUygn5LiN6IO95L+d5a2Y6aG16Z2i77yM5Zug5pyN5Yqh5Zmo6KaB5rGC5oKo6L6T5YWl6aqM6K+B56CB44CCJywgJ+S4jeiDveWEsuWtmOmggemdou+8jOWboOS8uuacjeWZqOimgeaxguaCqOi8uOWFpempl+itieeivOOAgicpXG5cdFx0XHRcdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3Z1VMUygn5L+d5a2Y6aG16Z2i5pe255SxQVBJ5b6X5Yiw5pyq55+l6ZSZ6K+vJywgJ+WEsuWtmOmggemdouaZgueUsUFQSeW+l+WIsOacquefpemMr+iqpCcpKTtcblx0XHRcdH1cblx0XHRcdC8vIGZvcmNlIGVycm9yIHRvIHN0YXkgb24gdGhlIHNjcmVlblxuXHRcdFx0KytNb3JlYml0cy53aWtpLm51bWJlck9mQWN0aW9uc0xlZnQ7XG5cdFx0XHRjdHgub25TYXZlRmFpbHVyZSh0aGlzKTtcblx0XHR9O1xuXHRcdC8vIGNhbGxiYWNrIGZyb20gc2F2ZUFwaS5wb3N0KClcblx0XHRjb25zdCBmblNhdmVFcnJvciA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IGVycm9yQ29kZSA9IGN0eC5zYXZlQXBpLmdldEVycm9yQ29kZSgpO1xuXHRcdFx0Ly8gY2hlY2sgZm9yIGVkaXQgY29uZmxpY3Rcblx0XHRcdGlmIChlcnJvckNvZGUgPT09ICdlZGl0Y29uZmxpY3QnICYmIGN0eC5jb25mbGljdFJldHJpZXMrKyA8IGN0eC5tYXhDb25mbGljdFJldHJpZXMpIHtcblx0XHRcdFx0Ly8gZWRpdCBjb25mbGljdHMgY2FuIG9jY3VyIHdoZW4gdGhlIHBhZ2UgbmVlZHMgdG8gYmUgcHVyZ2VkIGZyb20gdGhlIHNlcnZlciBjYWNoZVxuXHRcdFx0XHRjb25zdCBwdXJnZVF1ZXJ5ID0ge1xuXHRcdFx0XHRcdGFjdGlvbjogJ3B1cmdlJyxcblx0XHRcdFx0XHR0aXRsZXM6IGN0eC5wYWdlTmFtZSwgLy8gcmVkaXJlY3RzIGFyZSBhbHJlYWR5IHJlc29sdmVkXG5cdFx0XHRcdH07XG5cblx0XHRcdFx0Y29uc3QgcHVyZ2VBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdFx0d2dVTFMoJ+ajgOa1i+WIsOe8lui+keWGsueqge+8jOato+WcqOabtOaWsOacjeWKoeWZqOe8k+WtmCcsICfmqqLmuKzliLDnt6jovK/ooZ3nqoHvvIzmraPlnKjmm7TmlrDkvLrmnI3lmajlv6vlj5YnKSxcblx0XHRcdFx0XHRwdXJnZVF1ZXJ5LFxuXHRcdFx0XHRcdCgpID0+IHtcblx0XHRcdFx0XHRcdC0tTW9yZWJpdHMud2lraS5udW1iZXJPZkFjdGlvbnNMZWZ0OyAvLyBhbGxvdyBmb3Igbm9ybWFsIGNvbXBsZXRpb24gaWYgcmV0cnkgc3VjY2VlZHNcblx0XHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmluZm8od2dVTFMoJ+ajgOa1i+WIsOe8lui+keWGsueqge+8jOmHjeivleS/ruaUuScsICfmqqLmuKzliLDnt6jovK/ooZ3nqoHvvIzph43oqabkv67mlLknKSk7XG5cdFx0XHRcdFx0XHRpZiAoZm5DYW5Vc2VNd1VzZXJUb2tlbignZWRpdCcpKSB7XG5cdFx0XHRcdFx0XHRcdGN0eC5zYXZlQXBpLnBvc3QoKTsgLy8gbmVjZXNzYXJpbHkgYXBwZW5kLCBwcmVwZW5kLCBvciBuZXdTZWN0aW9uLCBzbyB0aGlzIHNob3VsZCB3b3JrIGFzIGRlc2lyZWRcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGN0eC5sb2FkQXBpLnBvc3QoKTsgLy8gcmVsb2FkIHRoZSBwYWdlIGFuZCByZWFwcGx5IHRoZSBlZGl0XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudFxuXHRcdFx0XHQpO1xuXHRcdFx0XHRwdXJnZUFwaS5wb3N0KCk7XG5cdFx0XHRcdC8vIGNoZWNrIGZvciBuZXR3b3JrIG9yIHNlcnZlciBlcnJvclxuXHRcdFx0fSBlbHNlIGlmICgoZXJyb3JDb2RlID09PSBudWxsIHx8IGVycm9yQ29kZSA9PT0gdW5kZWZpbmVkKSAmJiBjdHgucmV0cmllcysrIDwgY3R4Lm1heFJldHJpZXMpIHtcblx0XHRcdFx0Ly8gdGhlIGVycm9yIG1pZ2h0IGJlIHRyYW5zaWVudCwgc28gdHJ5IGFnYWluXG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmluZm8od2dVTFMoJ+S/neWtmOWksei0pe+8jOWcqDLnp5LlkI7ph43or5XigKbigKYnLCAn5YSy5a2Y5aSx5pWX77yM5ZyoMuenkuW+jOmHjeippuKApuKApicpKTtcblx0XHRcdFx0LS1Nb3JlYml0cy53aWtpLm51bWJlck9mQWN0aW9uc0xlZnQ7IC8vIGFsbG93IGZvciBub3JtYWwgY29tcGxldGlvbiBpZiByZXRyeSBzdWNjZWVkc1xuXHRcdFx0XHQvLyB3YWl0IGZvciBzb21ldGltZSBmb3IgY2xpZW50IHRvIHJlZ2FpbiBjb25uZWN0aXZpdHlcblx0XHRcdFx0c2xlZXAoMjAwMCkudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0Y3R4LnNhdmVBcGkucG9zdCgpOyAvLyBnaXZlIGl0IGFub3RoZXIgZ28hXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHQvLyBoYXJkIGVycm9yLCBnaXZlIHVwXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCByZXNwb25zZSA9IGN0eC5zYXZlQXBpLmdldFJlc3BvbnNlKCk7XG5cdFx0XHRcdGNvbnN0IGVycm9yRGF0YSA9XG5cdFx0XHRcdFx0cmVzcG9uc2UuZXJyb3IgfHxcblx0XHRcdFx0XHQvLyBiYyBlcnJvciBmb3JtYXRcblx0XHRcdFx0XHRyZXNwb25zZS5lcnJvcnNbMF0uZGF0YTsgLy8gaHRtbC93aWtpdGV4dC9wbGFpbnRleHQgZXJyb3IgZm9ybWF0XG5cdFx0XHRcdHN3aXRjaCAoZXJyb3JDb2RlKSB7XG5cdFx0XHRcdFx0Y2FzZSAncHJvdGVjdGVkcGFnZSc6XG5cdFx0XHRcdFx0XHQvLyBub24tYWRtaW4gYXR0ZW1wdGluZyB0byBlZGl0IGEgcHJvdGVjdGVkIHBhZ2UgLSB0aGlzIGdpdmVzIGEgZnJpZW5kbGllciBtZXNzYWdlIHRoYW4gdGhlIGRlZmF1bHRcblx0XHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdnVUxTKCfkuI3og73kv53lrZjkv67mlLnvvJrpobXpnaLooqvkv53miqQnLCAn5LiN6IO95YSy5a2Y5L+u5pS577ya6aCB6Z2i6KKr5L+d6K23JykpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnYWJ1c2VmaWx0ZXItZGlzYWxsb3dlZCc6XG5cdFx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0XHRcdFx0d2dVTFMoJ+e8lui+keiiq+mYsua7peeUqOi/h+a7pOWZqOinhOWImeKAnCcsICfnt6jovK/ooqvpmLLmv6vnlKjpgY7mv77lmajopo/liYfjgIwnKSArXG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3JEYXRhLmFidXNlZmlsdGVyLmRlc2NyaXB0aW9uICtcblx0XHRcdFx0XHRcdFx0XHR3Z1VMUyhcblx0XHRcdFx0XHRcdFx0XHRcdCfigJ3pmLvmraLjgILoi6XmgqjorqTkuLrmgqjnmoTor6XmrKHnvJbovpHmmK/mnInmhI/kuYnnmoTvvIzor7foh7MgV2lraXBlZGlhOumYsua7peeUqOi/h+a7pOWZqC/plJnor6/miqXlkYog5o+Q5oql44CCJyxcblx0XHRcdFx0XHRcdFx0XHRcdCfjgI3pmLvmraLjgILoi6Xmgqjoqo3ngrrmgqjnmoToqbLmrKHnt6jovK/mmK/mnInmhI/nvqnnmoTvvIzoq4voh7MgV2lraXBlZGlhOumYsua/q+eUqOmBjua/vuWZqC/pjK/oqqTloLHlkYog5o+Q5aCx44CCJ1xuXHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlICdhYnVzZWZpbHRlci13YXJuaW5nJzpcblx0XHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFtcblx0XHRcdFx0XHRcdFx0d2dVTFMoJ+e8lui+keiiq+mYsua7peeUqOi/h+a7pOWZqOinhOWImeKAnCcsICfnt6jovK/ooqvpmLLmv6vnlKjpgY7mv77lmajopo/liYfjgIwnKSxcblx0XHRcdFx0XHRcdFx0ZXJyb3JEYXRhLmFidXNlZmlsdGVyLmRlc2NyaXB0aW9uLFxuXHRcdFx0XHRcdFx0XHR3Z1VMUyhcblx0XHRcdFx0XHRcdFx0XHQn4oCd6K2m5ZGK77yM6Iul5oKo5LuN5biM5pyb5YGa5Ye66K+l57yW6L6R77yM6K+35bCd6K+V6YeN5paw5o+Q5Lqk77yM5qC55o2u6L+H5ruk5Zmo55qE6K6+572u5oKo5Y+v6IO95Y+v5Lul5L2c5Ye65q2k57yW6L6R44CCJyxcblx0XHRcdFx0XHRcdFx0XHQn44CN6K2m5ZGK77yM6Iul5oKo5LuN5biM5pyb5YGa5Ye66Kmy57eo6Lyv77yM6KuL5ZiX6Kmm6YeN5paw5o+Q5Lqk77yM5qC55pOa6YGO5r++5Zmo55qE6Kit5a6a5oKo5Y+v6IO95Y+v5Lul5L2c5Ye65q2k57eo6Lyv44CCJ1xuXHRcdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0XSk7XG5cdFx0XHRcdFx0XHQvLyBXZSBzaG91bGQgcHJvdmlkZSB0aGUgdXNlciB3aXRoIGEgd2F5IHRvIGF1dG9tYXRpY2FsbHkgcmV0cnkgdGhlIGFjdGlvbiBpZiB0aGV5IHNvIGNob29zZSAtXG5cdFx0XHRcdFx0XHQvLyBJIGNhbid0IHNlZSBob3cgdG8gZG8gdGhpcyB3aXRob3V0IGNyZWF0aW5nIGEgVUkgZGVwZW5kZW5jeSBvbiBNb3JlYml0cy53aWtpLnBhZ2UgdGhvdWdoIC0tIFRUT1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnc3BhbWJsYWNrbGlzdCc6IHtcblx0XHRcdFx0XHRcdC8vIElmIG11bHRpcGxlIGl0ZW1zIGFyZSBibGFja2xpc3RlZCwgd2Ugb25seSByZXR1cm4gdGhlIGZpcnN0XG5cdFx0XHRcdFx0XHRjb25zdCBbc3BhbV0gPSBlcnJvckRhdGEuc3BhbWJsYWNrbGlzdC5tYXRjaGVzO1xuXHRcdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdFx0XHRcdHdnVUxTKCfkuI3og73kv53lrZjpobXpnaLvvIzlm6BVUkwgJywgJ+S4jeiDveWEsuWtmOmggemdou+8jOWboFVSTCAnKSArXG5cdFx0XHRcdFx0XHRcdFx0c3BhbSArXG5cdFx0XHRcdFx0XHRcdFx0d2dVTFMoJyDlnKjlnoPlnL7pk77mjqXpu5HlkI3ljZXkuK3jgIInLCAnIOWcqOWeg+WcvumAo+e1kOm7keWQjeWWruS4reOAgicpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3Z1VMUygn5LiN6IO95L+d5a2Y5L+u5pS577yaJywgJ+S4jeiDveWEsuWtmOS/ruaUue+8micpICsgY3R4LnNhdmVBcGkuZ2V0RXJyb3JUZXh0KCkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGN0eC5lZGl0TW9kZSA9ICdhbGwnOyAvLyBjYW5jZWwgYXBwZW5kL3ByZXBlbmQvbmV3U2VjdGlvbi9yZXZlcnQgbW9kZXNcblx0XHRcdFx0aWYgKGN0eC5vblNhdmVGYWlsdXJlKSB7XG5cdFx0XHRcdFx0Y3R4Lm9uU2F2ZUZhaWx1cmUodGhpcyk7IC8vIGludm9rZSBjYWxsYmFja1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdGNvbnN0IGlzVGV4dFJlZGlyZWN0ID0gKHRleHQpID0+IHtcblx0XHRcdGlmICghdGV4dCkge1xuXHRcdFx0XHQvLyBubyB0ZXh0IC0gY29udGVudCBlbXB0eSBvciBpbmFjY2Vzc2libGUgKHJldmRlbGxlZCBvciBzdXBwcmVzc2VkKVxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gTW9yZWJpdHMubDEwbi5yZWRpcmVjdFRhZ0FsaWFzZXMuc29tZSgodGFnKSA9PiB7XG5cdFx0XHRcdHJldHVybiBuZXcgUmVnRXhwKGBeXFxcXHMqJHt0YWd9XFxcXFdgLCAnaScpLnRlc3QodGV4dCk7XG5cdFx0XHR9KTtcblx0XHR9O1xuXHRcdGNvbnN0IGZuTG9va3VwQ3JlYXRpb25TdWNjZXNzID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBjdHgubG9va3VwQ3JlYXRpb25BcGkuZ2V0UmVzcG9uc2UoKS5xdWVyeTtcblx0XHRcdGlmICghZm5DaGVja1BhZ2VOYW1lKHJlc3BvbnNlLCBjdHgub25Mb29rdXBDcmVhdGlvbkZhaWx1cmUpKSB7XG5cdFx0XHRcdHJldHVybjsgLy8gYWJvcnRcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgcmV2ID0gcmVzcG9uc2UucGFnZXNbMF0ucmV2aXNpb25zICYmIHJlc3BvbnNlLnBhZ2VzWzBdLnJldmlzaW9uc1swXTtcblx0XHRcdGlmICghcmV2KSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdHdnVUxTKCfml6Dms5Xmib7liLAnLCAn54Sh5rOV5om+5YiwJykgKyBjdHgucGFnZU5hbWUgKyB3Z1VMUygn55qE5Lu75L2V5L+u6K6i54mI5pysJywgJ+eahOS7u+S9leS/ruiogueJiOacrCcpXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGN0eC5vbkxvb2t1cENyZWF0aW9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFjdHgubG9va3VwTm9uUmVkaXJlY3RDcmVhdG9yIHx8ICFpc1RleHRSZWRpcmVjdChyZXYuY29udGVudCkpIHtcblx0XHRcdFx0Y3R4LmNyZWF0b3IgPSByZXYudXNlcjtcblx0XHRcdFx0aWYgKCFjdHguY3JlYXRvcikge1xuXHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdnVUxTKCfml6Dms5Xojrflj5bpobXpnaLliJvlu7rogIXnmoTlkI3lrZcnLCAn54Sh5rOV5Y+W5b6X6aCB6Z2i5bu656uL6ICF55qE5ZCN5a2XJykpO1xuXHRcdFx0XHRcdGN0eC5vbkxvb2t1cENyZWF0aW9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0Y3R4LnRpbWVzdGFtcCA9IHJldi50aW1lc3RhbXA7XG5cdFx0XHRcdGlmICghY3R4LnRpbWVzdGFtcCkge1xuXHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdnVUxTKCfml6Dms5Xojrflj5bpobXpnaLliJvlu7rml7bpl7QnLCAn54Sh5rOV5Y+W5b6X6aCB6Z2i5bu656uL5pmC6ZaTJykpO1xuXHRcdFx0XHRcdGN0eC5vbkxvb2t1cENyZWF0aW9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuaW5mbyh3Z1VMUygn5bey6I635Y+W6aG16Z2i5Yib5bu65L+h5oGvJywgJ+W3suWPluW+l+mggemdouW7uueri+izh+ioiicpKTtcblx0XHRcdFx0Y3R4Lm9uTG9va3VwQ3JlYXRpb25TdWNjZXNzKHRoaXMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3R4Lmxvb2t1cENyZWF0aW9uQXBpLnF1ZXJ5LnJ2bGltaXQgPSA1MDsgLy8gbW9kaWZ5IHByZXZpb3VzIHF1ZXJ5IHRvIGZldGNoIG1vcmUgcmV2aXNpb25zXG5cdFx0XHRcdGN0eC5sb29rdXBDcmVhdGlvbkFwaS5xdWVyeS50aXRsZXMgPSBjdHgucGFnZU5hbWU7IC8vIHVwZGF0ZSBwYWdlTmFtZSBpZiByZWRpcmVjdCByZXNvbHV0aW9uIHRvb2sgcGxhY2UgaW4gZWFybGllciBxdWVyeVxuXHRcdFx0XHRjdHgubG9va3VwQ3JlYXRpb25BcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdFx0d2dVTFMoJ+iOt+WPlumhtemdouWIm+W7uuS/oeaBrycsICflj5blvpfpoIHpnaLlu7rnq4vos4foqIonKSxcblx0XHRcdFx0XHRjdHgubG9va3VwQ3JlYXRpb25BcGkucXVlcnksXG5cdFx0XHRcdFx0Zm5Mb29rdXBOb25SZWRpcmVjdENyZWF0b3IsXG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQsXG5cdFx0XHRcdFx0Y3R4Lm9uTG9va3VwQ3JlYXRpb25GYWlsdXJlXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGN0eC5sb29rdXBDcmVhdGlvbkFwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0XHRcdGN0eC5sb29rdXBDcmVhdGlvbkFwaS5wb3N0KCk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRjb25zdCBmbkxvb2t1cE5vblJlZGlyZWN0Q3JlYXRvciA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gY3R4Lmxvb2t1cENyZWF0aW9uQXBpLmdldFJlc3BvbnNlKCkucXVlcnk7XG5cdFx0XHRjb25zdCByZXZzID0gcmVzcG9uc2UucGFnZXNbMF0ucmV2aXNpb25zO1xuXHRcdFx0Zm9yIChjb25zdCByZXYgb2YgcmV2cykge1xuXHRcdFx0XHRpZiAoIWlzVGV4dFJlZGlyZWN0KHJldi5jb250ZW50KSkge1xuXHRcdFx0XHRcdGN0eC5jcmVhdG9yID0gcmV2LnVzZXI7XG5cdFx0XHRcdFx0Y3R4LnRpbWVzdGFtcCA9IHJldi50aW1lc3RhbXA7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICghY3R4LmNyZWF0b3IpIHtcblx0XHRcdFx0Ly8gZmFsbGJhY2sgdG8gZ2l2ZSBmaXJzdCByZXZpc2lvbiBhdXRob3IgaWYgbm8gbm9uLXJlZGlyZWN0IHZlcnNpb24gaW4gdGhlIGZpcnN0IDUwXG5cdFx0XHRcdGN0eC5jcmVhdG9yID0gcmV2c1swXS51c2VyO1xuXHRcdFx0XHRjdHgudGltZXN0YW1wID0gcmV2c1swXS50aW1lc3RhbXA7XG5cdFx0XHRcdGlmICghY3R4LmNyZWF0b3IpIHtcblx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3Z1VMUygn5peg5rOV6I635Y+W6aG16Z2i5Yib5bu66ICF55qE5ZCN5a2XJywgJ+eEoeazleWPluW+l+mggemdouW7uueri+iAheeahOWQjeWtlycpKTtcblx0XHRcdFx0XHRjdHgub25Mb29rdXBDcmVhdGlvbkZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWN0eC50aW1lc3RhbXApIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2dVTFMoJ+aXoOazleiOt+WPlumhtemdouWIm+W7uuaXtumXtCcsICfnhKHms5Xlj5blvpfpoIHpnaLlu7rnq4vmmYLplpMnKSk7XG5cdFx0XHRcdGN0eC5vbkxvb2t1cENyZWF0aW9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuaW5mbyh3Z1VMUygn5bey6I635Y+W6aG16Z2i5Yib5bu65L+h5oGvJywgJ+W3suWPluW+l+mggemdouW7uueri+izh+ioiicpKTtcblx0XHRcdGN0eC5vbkxvb2t1cENyZWF0aW9uU3VjY2Vzcyh0aGlzKTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIENvbW1vbiBjaGVja3MgZm9yIGFjdGlvbiBtZXRob2RzLiBVc2VkIGZvciBtb3ZlLCB1bmRlbGV0ZSwgZGVsZXRlLFxuXHRcdCAqIHByb3RlY3QuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gYWN0aW9uIC0gVGhlIGFjdGlvbiBiZWluZyBjaGVja2VkLlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBvbkZhaWx1cmUgLSBGYWlsdXJlIGNhbGxiYWNrLlxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHRcdCAqL1xuXHRcdGNvbnN0IGZuUHJlZmxpZ2h0Q2hlY2tzID0gZnVuY3Rpb24gKGFjdGlvbiwgb25GYWlsdXJlKSB7XG5cdFx0XHQvLyBpZiBhIG5vbi1hZG1pbiB0cmllcyB0byBkbyB0aGlzLCBkb24ndCBib3RoZXJcblx0XHRcdGlmICghTW9yZWJpdHMudXNlcklzU3lzb3AgJiYgYWN0aW9uICE9PSAnbW92ZScpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdFx0d2dVTFMoJ+aXoOazleWvuemhtemdoui/m+ihjOKAnCcsICfnhKHms5XlsI3poIHpnaLpgLLooYzjgIwnKSArXG5cdFx0XHRcdFx0XHRhY3Rpb24gK1xuXHRcdFx0XHRcdFx0d2dVTFMoJ+KAneaTjeS9nO+8muWPquacieeuoeeQhuWRmOWPr+S7pei/m+ihjOatpOaTjeS9nCcsICfjgI3mk43kvZzvvJrlj6rmnInnrqHnkIblk6Hlj6/ku6XpgLLooYzmraTmk43kvZwnKVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRvbkZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGlmICghY3R4LmVkaXRTdW1tYXJ5KSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKGBJbnRlcm5hbCBlcnJvcjogJHthY3Rpb259IHJlYXNvbiBub3Qgc2V0ICh1c2Ugc2V0RWRpdFN1bW1hcnkgZnVuY3Rpb24pIWApO1xuXHRcdFx0XHRvbkZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0cnVlOyAvLyBhbGwgT0tcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIENvbW1vbiBjaGVja3MgZm9yIGZuUHJvY2VzcyBmdW5jdGlvbnMgKGBmblByb2Nlc3NEZWxldGVgLCBgZm5Qcm9jZXNzTW92ZWAsIGV0Yy5cblx0XHQgKiBVc2VkIGZvciBtb3ZlLCB1bmRlbGV0ZSwgZGVsZXRlLCBwcm90ZWN0LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbiAtIFRoZSBhY3Rpb24gYmVpbmcgY2hlY2tlZC5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gb25GYWlsdXJlIC0gRmFpbHVyZSBjYWxsYmFjay5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gcmVzcG9uc2UgLSBUaGUgcmVzcG9uc2UgZG9jdW1lbnQgZnJvbSB0aGUgQVBJIGNhbGwuXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdFx0ICovXG5cdFx0Y29uc3QgZm5Qcm9jZXNzQ2hlY2tzID0gZnVuY3Rpb24gKGFjdGlvbiwgb25GYWlsdXJlLCByZXNwb25zZSkge1xuXHRcdFx0Y29uc3QgW3ttaXNzaW5nfV0gPSByZXNwb25zZS5wYWdlcztcblx0XHRcdC8vIE5vIHVuZGVsZXRlIGFzIGFuIGV4aXN0aW5nIHBhZ2UgY291bGQgaGF2ZSBkZWxldGVkIHJldmlzaW9uc1xuXHRcdFx0Y29uc3QgYWN0aW9uTWlzc2luZyA9IG1pc3NpbmcgJiYgWydkZWxldGUnLCAnbW92ZSddLmluY2x1ZGVzKGFjdGlvbik7XG5cdFx0XHRjb25zdCBwcm90ZWN0TWlzc2luZyA9IGFjdGlvbiA9PT0gJ3Byb3RlY3QnICYmIG1pc3NpbmcgJiYgKGN0eC5wcm90ZWN0RWRpdCB8fCBjdHgucHJvdGVjdE1vdmUpO1xuXHRcdFx0Y29uc3Qgc2FsdE1pc3NpbmcgPSBhY3Rpb24gPT09ICdwcm90ZWN0JyAmJiAhbWlzc2luZyAmJiBjdHgucHJvdGVjdENyZWF0ZTtcblx0XHRcdGlmIChhY3Rpb25NaXNzaW5nIHx8IHByb3RlY3RNaXNzaW5nIHx8IHNhbHRNaXNzaW5nKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdGAke1xuXHRcdFx0XHRcdFx0d2dVTFMoJ+aXoOazleWvuemhtemdoui/m+ihjOKAnCcsICfnhKHms5XlsI3poIHpnaLpgLLooYzjgIwnKSArXG5cdFx0XHRcdFx0XHRhY3Rpb24gK1xuXHRcdFx0XHRcdFx0d2dVTFMoJ+KAneaTjeS9nO+8jOWboOS4uumhtemdoicsICfjgI3mk43kvZzvvIzlm6DngrrpoIHpnaInKSArXG5cdFx0XHRcdFx0XHQobWlzc2luZyA/ICflt7LkuI0nIDogd2dVTFMoJ+W3sue7jycsICflt7LntpMnKSlcblx0XHRcdFx0XHR95a2Y5ZyoYFxuXHRcdFx0XHQpO1xuXHRcdFx0XHRvbkZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdC8vIERlbGV0ZSwgdW5kZWxldGUsIG1vdmVcblx0XHRcdC8vIGV4dHJhY3QgcHJvdGVjdGlvbiBpbmZvXG5cdFx0XHRsZXQgZWRpdHByb3Q7XG5cdFx0XHRpZiAoYWN0aW9uID09PSAndW5kZWxldGUnKSB7XG5cdFx0XHRcdGVkaXRwcm90ID0gcmVzcG9uc2UucGFnZXNbMF0ucHJvdGVjdGlvblxuXHRcdFx0XHRcdC5maWx0ZXIoKHByKSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gcHIudHlwZSA9PT0gJ2NyZWF0ZScgJiYgcHIubGV2ZWwgPT09ICdzeXNvcCc7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQucG9wKCk7XG5cdFx0XHR9IGVsc2UgaWYgKGFjdGlvbiA9PT0gJ2RlbGV0ZScgfHwgYWN0aW9uID09PSAnbW92ZScpIHtcblx0XHRcdFx0ZWRpdHByb3QgPSByZXNwb25zZS5wYWdlc1swXS5wcm90ZWN0aW9uXG5cdFx0XHRcdFx0LmZpbHRlcigocHIpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBwci50eXBlID09PSAnZWRpdCcgJiYgcHIubGV2ZWwgPT09ICdzeXNvcCc7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQucG9wKCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoXG5cdFx0XHRcdGVkaXRwcm90ICYmXG5cdFx0XHRcdCFjdHguc3VwcHJlc3NQcm90ZWN0V2FybmluZyAmJlxuXHRcdFx0XHQhY29uZmlybShcblx0XHRcdFx0XHR3Z1VMUygn5oKo5Y2z5bCG5a+55YWo5L+d5oqk6aG16Z2i4oCcJywgJ+aCqOWNs+Wwh+WwjeWFqOS/neitt+mggemdouOAjCcpICtcblx0XHRcdFx0XHRcdGN0eC5wYWdlTmFtZSArXG5cdFx0XHRcdFx0XHQoZWRpdHByb3QuZXhwaXJ5ID09PSAnaW5maW5pdHknXG5cdFx0XHRcdFx0XHRcdD8gd2dVTFMoJ+KAne+8iOawuOS5he+8iScsICfjgI3vvIjmsLjkuYXvvIknKVxuXHRcdFx0XHRcdFx0XHQ6IGAke1xuXHRcdFx0XHRcdFx0XHRcdFx0d2dVTFMoJ+KAne+8iOWIsOacn++8micsICfjgI3vvIjliLDmnJ/vvJonKSArXG5cdFx0XHRcdFx0XHRcdFx0XHRuZXcgTW9yZWJpdHMuZGF0ZShlZGl0cHJvdC5leHBpcnkpLmNhbGVuZGFyKCd1dGMnKVxuXHRcdFx0XHRcdFx0XHRcdH0gKFVUQynvvIlgKSArXG5cdFx0XHRcdFx0XHR3Z1VMUygn4oCd6L+b6KGM4oCcJywgJ+OAjemAsuihjOOAjCcpICtcblx0XHRcdFx0XHRcdGFjdGlvbiArXG5cdFx0XHRcdFx0XHR3Z1VMUygn4oCd5pON5L2cJywgJ+OAjeaTjeS9nCcpICtcblx0XHRcdFx0XHRcdHdnVUxTKFxuXHRcdFx0XHRcdFx0XHQn44CCXFxuXFxu5Y2V5Ye756Gu5a6a5Lul57un57ut5pON5L2c77yM5oiW5Y2V5Ye75Y+W5raI5Lul5Y+W5raI5pON5L2c44CCJyxcblx0XHRcdFx0XHRcdFx0J+OAglxcblxcbum7nuaTiueiuuWumuS7pee5vOe6jOaTjeS9nO+8jOaIlum7nuaTiuWPlua2iOS7peWPlua2iOaTjeS9nOOAgidcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0KVxuXHRcdFx0KSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdnVUxTKCflt7Llj5bmtojlr7nlhajkv53miqTpobXpnaLnmoTmk43kvZzjgIInLCAn5bey5Y+W5raI5bCN5YWo5L+d6K236aCB6Z2i55qE5pON5L2c44CCJykpO1xuXHRcdFx0XHRvbkZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGlmICghcmVzcG9uc2UudG9rZW5zLmNzcmZ0b2tlbikge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3Z1VMUygn5peg5rOV6I635Y+W5Luk54mM44CCJywgJ+eEoeazleWPluW+l+asiuadluOAgicpKTtcblx0XHRcdFx0b25GYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJ1ZTsgLy8gYWxsIE9LXG5cdFx0fTtcblxuXHRcdGNvbnN0IGZuUHJvY2Vzc01vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRsZXQgcGFnZVRpdGxlO1xuXHRcdFx0bGV0IHRva2VuO1xuXHRcdFx0aWYgKGZuQ2FuVXNlTXdVc2VyVG9rZW4oJ21vdmUnKSkge1xuXHRcdFx0XHR0b2tlbiA9IG13LnVzZXIudG9rZW5zLmdldCgnY3NyZlRva2VuJyk7XG5cdFx0XHRcdHBhZ2VUaXRsZSA9IGN0eC5wYWdlTmFtZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gY3R4Lm1vdmVBcGkuZ2V0UmVzcG9uc2UoKS5xdWVyeTtcblx0XHRcdFx0aWYgKCFmblByb2Nlc3NDaGVja3MoJ21vdmUnLCBjdHgub25Nb3ZlRmFpbHVyZSwgcmVzcG9uc2UpKSB7XG5cdFx0XHRcdFx0cmV0dXJuOyAvLyBhYm9ydFxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dG9rZW4gPSByZXNwb25zZS50b2tlbnMuY3NyZnRva2VuO1xuXHRcdFx0XHRjb25zdCBbcGFnZV0gPSByZXNwb25zZS5wYWdlcztcblx0XHRcdFx0cGFnZVRpdGxlID0gcGFnZS50aXRsZTtcblx0XHRcdFx0Y3R4LndhdGNoZWQgPSBwYWdlLndhdGNobGlzdGV4cGlyeSB8fCBwYWdlLndhdGNoZWQ7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBxdWVyeSA9IHtcblx0XHRcdFx0YWN0aW9uOiAnbW92ZScsXG5cdFx0XHRcdGZyb206IHBhZ2VUaXRsZSxcblx0XHRcdFx0dG86IGN0eC5tb3ZlRGVzdGluYXRpb24sXG5cdFx0XHRcdHRva2VuLFxuXHRcdFx0XHRyZWFzb246IGN0eC5lZGl0U3VtbWFyeSxcblx0XHRcdFx0d2F0Y2hsaXN0OiBjdHgud2F0Y2hsaXN0T3B0aW9uLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdH07XG5cdFx0XHRpZiAoY3R4LmNoYW5nZVRhZ3MpIHtcblx0XHRcdFx0cXVlcnkudGFncyA9IGN0eC5jaGFuZ2VUYWdzO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGZuQXBwbHlXYXRjaGxpc3RFeHBpcnkoKSkge1xuXHRcdFx0XHRxdWVyeS53YXRjaGxpc3RleHBpcnkgPSBjdHgud2F0Y2hsaXN0RXhwaXJ5O1xuXHRcdFx0fVxuXHRcdFx0aWYgKGN0eC5tb3ZlVGFsa1BhZ2UpIHtcblx0XHRcdFx0cXVlcnkubW92ZXRhbGsgPSAndHJ1ZSc7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY3R4Lm1vdmVTdWJwYWdlcykge1xuXHRcdFx0XHRxdWVyeS5tb3Zlc3VicGFnZXMgPSAndHJ1ZSc7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY3R4Lm1vdmVTdXBwcmVzc1JlZGlyZWN0KSB7XG5cdFx0XHRcdHF1ZXJ5Lm5vcmVkaXJlY3QgPSAndHJ1ZSc7XG5cdFx0XHR9XG5cdFx0XHRjdHgubW92ZVByb2Nlc3NBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdHdnVUxTKCfnp7vliqjpobXpnaLigKbigKYnLCAn56e75YuV6aCB6Z2i4oCm4oCmJyksXG5cdFx0XHRcdHF1ZXJ5LFxuXHRcdFx0XHRjdHgub25Nb3ZlU3VjY2Vzcyxcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQsXG5cdFx0XHRcdGN0eC5vbk1vdmVGYWlsdXJlXG5cdFx0XHQpO1xuXHRcdFx0Y3R4Lm1vdmVQcm9jZXNzQXBpLnNldFBhcmVudCh0aGlzKTtcblx0XHRcdGN0eC5tb3ZlUHJvY2Vzc0FwaS5wb3N0KCk7XG5cdFx0fTtcblx0XHRjb25zdCBmblByb2Nlc3NQYXRyb2wgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zdCBxdWVyeSA9IHtcblx0XHRcdFx0YWN0aW9uOiAncGF0cm9sJyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHR9O1xuXHRcdFx0Ly8gRGlkbid0IG5lZWQgdG8gbG9hZCB0aGUgcGFnZVxuXHRcdFx0aWYgKGN0eC5yY2lkKSB7XG5cdFx0XHRcdHF1ZXJ5LnJjaWQgPSBjdHgucmNpZDtcblx0XHRcdFx0cXVlcnkudG9rZW4gPSBtdy51c2VyLnRva2Vucy5nZXQoJ3BhdHJvbFRva2VuJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCByZXNwb25zZSA9IGN0eC5wYXRyb2xBcGkuZ2V0UmVzcG9uc2UoKS5xdWVyeTtcblx0XHRcdFx0Ly8gRG9uJ3QgcGF0cm9sIGlmIG5vdCB1bnBhdHJvbGxlZFxuXHRcdFx0XHRpZiAoIXJlc3BvbnNlLnJlY2VudGNoYW5nZXNbMF0udW5wYXRyb2xsZWQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgW3tsYXN0cmV2aWR9XSA9IHJlc3BvbnNlLnBhZ2VzO1xuXHRcdFx0XHRpZiAoIWxhc3RyZXZpZCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRxdWVyeS5yZXZpZCA9IGxhc3RyZXZpZDtcblx0XHRcdFx0Y29uc3QgdG9rZW4gPSByZXNwb25zZS50b2tlbnMuY3NyZnRva2VuO1xuXHRcdFx0XHRpZiAoIXRva2VuKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHF1ZXJ5LnRva2VuID0gdG9rZW47XG5cdFx0XHR9XG5cdFx0XHRpZiAoY3R4LmNoYW5nZVRhZ3MpIHtcblx0XHRcdFx0cXVlcnkudGFncyA9IGN0eC5jaGFuZ2VUYWdzO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcGF0cm9sU3RhdCA9IG5ldyBNb3JlYml0cy5zdGF0dXMod2dVTFMoJ+agh+iusOmhtemdouS4uuW3suW3oeafpScsICfmqJnoqJjpoIHpnaLngrrlt7Llt6Hmn6UnKSk7XG5cdFx0XHRjdHgucGF0cm9sUHJvY2Vzc0FwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaSh3Z1VMUygn5beh5p+l6aG16Z2i4oCm4oCmJywgJ+W3oeafpemggemdouKApuKApicpLCBxdWVyeSwgbnVsbCwgcGF0cm9sU3RhdCk7XG5cdFx0XHRjdHgucGF0cm9sUHJvY2Vzc0FwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0XHRjdHgucGF0cm9sUHJvY2Vzc0FwaS5wb3N0KCk7XG5cdFx0fTtcblx0XHRjb25zdCBmblByb2Nlc3NEZWxldGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRsZXQgcGFnZVRpdGxlO1xuXHRcdFx0bGV0IHRva2VuO1xuXHRcdFx0aWYgKGZuQ2FuVXNlTXdVc2VyVG9rZW4oJ2RlbGV0ZScpKSB7XG5cdFx0XHRcdHRva2VuID0gbXcudXNlci50b2tlbnMuZ2V0KCdjc3JmVG9rZW4nKTtcblx0XHRcdFx0cGFnZVRpdGxlID0gY3R4LnBhZ2VOYW1lO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBjdHguZGVsZXRlQXBpLmdldFJlc3BvbnNlKCkucXVlcnk7XG5cdFx0XHRcdGlmICghZm5Qcm9jZXNzQ2hlY2tzKCdkZWxldGUnLCBjdHgub25EZWxldGVGYWlsdXJlLCByZXNwb25zZSkpIHtcblx0XHRcdFx0XHRyZXR1cm47IC8vIGFib3J0XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0b2tlbiA9IHJlc3BvbnNlLnRva2Vucy5jc3JmdG9rZW47XG5cdFx0XHRcdGNvbnN0IFtwYWdlXSA9IHJlc3BvbnNlLnBhZ2VzO1xuXHRcdFx0XHRwYWdlVGl0bGUgPSBwYWdlLnRpdGxlO1xuXHRcdFx0XHRjdHgud2F0Y2hlZCA9IHBhZ2Uud2F0Y2hsaXN0ZXhwaXJ5IHx8IHBhZ2Uud2F0Y2hlZDtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHF1ZXJ5ID0ge1xuXHRcdFx0XHRhY3Rpb246ICdkZWxldGUnLFxuXHRcdFx0XHR0aXRsZTogcGFnZVRpdGxlLFxuXHRcdFx0XHR0b2tlbixcblx0XHRcdFx0cmVhc29uOiBjdHguZWRpdFN1bW1hcnksXG5cdFx0XHRcdHdhdGNobGlzdDogY3R4LndhdGNobGlzdE9wdGlvbixcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHR9O1xuXHRcdFx0aWYgKGN0eC5jaGFuZ2VUYWdzKSB7XG5cdFx0XHRcdHF1ZXJ5LnRhZ3MgPSBjdHguY2hhbmdlVGFncztcblx0XHRcdH1cblx0XHRcdGlmIChmbkFwcGx5V2F0Y2hsaXN0RXhwaXJ5KCkpIHtcblx0XHRcdFx0cXVlcnkud2F0Y2hsaXN0ZXhwaXJ5ID0gY3R4LndhdGNobGlzdEV4cGlyeTtcblx0XHRcdH1cblx0XHRcdGN0eC5kZWxldGVQcm9jZXNzQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0XHR3Z1VMUygn5Yig6Zmk6aG16Z2i4oCm4oCmJywgJ+WIqumZpOmggemdouKApuKApicpLFxuXHRcdFx0XHRxdWVyeSxcblx0XHRcdFx0Y3R4Lm9uRGVsZXRlU3VjY2Vzcyxcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQsXG5cdFx0XHRcdGZuUHJvY2Vzc0RlbGV0ZUVycm9yXG5cdFx0XHQpO1xuXHRcdFx0Y3R4LmRlbGV0ZVByb2Nlc3NBcGkuc2V0UGFyZW50KHRoaXMpO1xuXHRcdFx0Y3R4LmRlbGV0ZVByb2Nlc3NBcGkucG9zdCgpO1xuXHRcdH07XG5cdFx0Ly8gY2FsbGJhY2sgZnJvbSBkZWxldGVQcm9jZXNzQXBpLnBvc3QoKVxuXHRcdGNvbnN0IGZuUHJvY2Vzc0RlbGV0ZUVycm9yID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc3QgZXJyb3JDb2RlID0gY3R4LmRlbGV0ZVByb2Nlc3NBcGkuZ2V0RXJyb3JDb2RlKCk7XG5cdFx0XHQvLyBjaGVjayBmb3IgXCJEYXRhYmFzZSBxdWVyeSBlcnJvclwiXG5cdFx0XHRpZiAoZXJyb3JDb2RlID09PSAnaW50ZXJuYWxfYXBpX2Vycm9yX0RCUXVlcnlFcnJvcicgJiYgY3R4LnJldHJpZXMrKyA8IGN0eC5tYXhSZXRyaWVzKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmluZm8od2dVTFMoJ+aVsOaNruW6k+afpeivoumUmeivr++8jOmHjeivlScsICfos4fmlpnluqvmn6XoqaLpjK/oqqTvvIzph43oqaYnKSk7XG5cdFx0XHRcdC0tTW9yZWJpdHMud2lraS5udW1iZXJPZkFjdGlvbnNMZWZ0OyAvLyBhbGxvdyBmb3Igbm9ybWFsIGNvbXBsZXRpb24gaWYgcmV0cnkgc3VjY2VlZHNcblx0XHRcdFx0Y3R4LmRlbGV0ZVByb2Nlc3NBcGkucG9zdCgpOyAvLyBnaXZlIGl0IGFub3RoZXIgZ28hXG5cdFx0XHR9IGVsc2UgaWYgKGVycm9yQ29kZSA9PT0gJ21pc3Npbmd0aXRsZScpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2dVTFMoJ+S4jeiDveWIoOmZpOmhtemdou+8jOWboOWFtuW3suS4jeWtmOWcqCcsICfkuI3og73liKrpmaTpoIHpnaLvvIzlm6Dlhbblt7LkuI3lrZjlnKgnKSk7XG5cdFx0XHRcdGlmIChjdHgub25EZWxldGVGYWlsdXJlKSB7XG5cdFx0XHRcdFx0Y3R4Lm9uRGVsZXRlRmFpbHVyZS5jYWxsKHRoaXMsIGN0eC5kZWxldGVQcm9jZXNzQXBpKTsgLy8gaW52b2tlIGNhbGxiYWNrXG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gaGFyZCBlcnJvciwgZ2l2ZSB1cFxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdFx0d2dVTFMoJ+aXoOazleWIoOmZpOmhtemdou+8micsICfnhKHms5XliKrpmaTpoIHpnaLvvJonKSArIGN0eC5kZWxldGVQcm9jZXNzQXBpLmdldEVycm9yVGV4dCgpXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGlmIChjdHgub25EZWxldGVGYWlsdXJlKSB7XG5cdFx0XHRcdFx0Y3R4Lm9uRGVsZXRlRmFpbHVyZS5jYWxsKHRoaXMsIGN0eC5kZWxldGVQcm9jZXNzQXBpKTsgLy8gaW52b2tlIGNhbGxiYWNrXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0Y29uc3QgZm5Qcm9jZXNzVW5kZWxldGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRsZXQgcGFnZVRpdGxlO1xuXHRcdFx0bGV0IHRva2VuO1xuXHRcdFx0aWYgKGZuQ2FuVXNlTXdVc2VyVG9rZW4oJ3VuZGVsZXRlJykpIHtcblx0XHRcdFx0dG9rZW4gPSBtdy51c2VyLnRva2Vucy5nZXQoJ2NzcmZUb2tlbicpO1xuXHRcdFx0XHRwYWdlVGl0bGUgPSBjdHgucGFnZU5hbWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCByZXNwb25zZSA9IGN0eC51bmRlbGV0ZUFwaS5nZXRSZXNwb25zZSgpLnF1ZXJ5O1xuXHRcdFx0XHRpZiAoIWZuUHJvY2Vzc0NoZWNrcygndW5kZWxldGUnLCBjdHgub25VbmRlbGV0ZUZhaWx1cmUsIHJlc3BvbnNlKSkge1xuXHRcdFx0XHRcdHJldHVybjsgLy8gYWJvcnRcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRva2VuID0gcmVzcG9uc2UudG9rZW5zLmNzcmZ0b2tlbjtcblx0XHRcdFx0Y29uc3QgW3BhZ2VdID0gcmVzcG9uc2UucGFnZXM7XG5cdFx0XHRcdHBhZ2VUaXRsZSA9IHBhZ2UudGl0bGU7XG5cdFx0XHRcdGN0eC53YXRjaGVkID0gcGFnZS53YXRjaGxpc3RleHBpcnkgfHwgcGFnZS53YXRjaGVkO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcXVlcnkgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3VuZGVsZXRlJyxcblx0XHRcdFx0dGl0bGU6IHBhZ2VUaXRsZSxcblx0XHRcdFx0dG9rZW4sXG5cdFx0XHRcdHJlYXNvbjogY3R4LmVkaXRTdW1tYXJ5LFxuXHRcdFx0XHR3YXRjaGxpc3Q6IGN0eC53YXRjaGxpc3RPcHRpb24sXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0fTtcblx0XHRcdGlmIChjdHguY2hhbmdlVGFncykge1xuXHRcdFx0XHRxdWVyeS50YWdzID0gY3R4LmNoYW5nZVRhZ3M7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZm5BcHBseVdhdGNobGlzdEV4cGlyeSgpKSB7XG5cdFx0XHRcdHF1ZXJ5LndhdGNobGlzdGV4cGlyeSA9IGN0eC53YXRjaGxpc3RFeHBpcnk7XG5cdFx0XHR9XG5cdFx0XHRjdHgudW5kZWxldGVQcm9jZXNzQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0XHR3Z1VMUygn6L+Y5Y6f6aG16Z2i4oCm4oCmJywgJ+mChOWOn+mggemdouKApuKApicpLFxuXHRcdFx0XHRxdWVyeSxcblx0XHRcdFx0Y3R4Lm9uVW5kZWxldGVTdWNjZXNzLFxuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudCxcblx0XHRcdFx0Zm5Qcm9jZXNzVW5kZWxldGVFcnJvclxuXHRcdFx0KTtcblx0XHRcdGN0eC51bmRlbGV0ZVByb2Nlc3NBcGkuc2V0UGFyZW50KHRoaXMpO1xuXHRcdFx0Y3R4LnVuZGVsZXRlUHJvY2Vzc0FwaS5wb3N0KCk7XG5cdFx0fTtcblx0XHQvLyBjYWxsYmFjayBmcm9tIHVuZGVsZXRlUHJvY2Vzc0FwaS5wb3N0KClcblx0XHRjb25zdCBmblByb2Nlc3NVbmRlbGV0ZUVycm9yID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc3QgZXJyb3JDb2RlID0gY3R4LnVuZGVsZXRlUHJvY2Vzc0FwaS5nZXRFcnJvckNvZGUoKTtcblx0XHRcdC8vIGNoZWNrIGZvciBcIkRhdGFiYXNlIHF1ZXJ5IGVycm9yXCJcblx0XHRcdGlmIChlcnJvckNvZGUgPT09ICdpbnRlcm5hbF9hcGlfZXJyb3JfREJRdWVyeUVycm9yJykge1xuXHRcdFx0XHRpZiAoY3R4LnJldHJpZXMrKyA8IGN0eC5tYXhSZXRyaWVzKSB7XG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuaW5mbyh3Z1VMUygn5pWw5o2u5bqT5p+l6K+i6ZSZ6K+v77yM6YeN6K+VJywgJ+izh+aWmeW6q+afpeipoumMr+iqpO+8jOmHjeippicpKTtcblx0XHRcdFx0XHQtLU1vcmViaXRzLndpa2kubnVtYmVyT2ZBY3Rpb25zTGVmdDsgLy8gYWxsb3cgZm9yIG5vcm1hbCBjb21wbGV0aW9uIGlmIHJldHJ5IHN1Y2NlZWRzXG5cdFx0XHRcdFx0Y3R4LnVuZGVsZXRlUHJvY2Vzc0FwaS5wb3N0KCk7IC8vIGdpdmUgaXQgYW5vdGhlciBnbyFcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0XHRcdHdnVUxTKCfmjIHnu63nmoTmlbDmja7lupPmn6Xor6LplJnor6/vvIzph43mlrDliqDovb3pobXpnaLlubbph43or5UnLCAn5oyB57qM55qE6LOH5paZ5bqr5p+l6Kmi6Yyv6Kqk77yM6YeN5paw6LyJ5YWl6aCB6Z2i5Lim6YeN6KmmJylcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGlmIChjdHgub25VbmRlbGV0ZUZhaWx1cmUpIHtcblx0XHRcdFx0XHRcdGN0eC5vblVuZGVsZXRlRmFpbHVyZS5jYWxsKHRoaXMsIGN0eC51bmRlbGV0ZVByb2Nlc3NBcGkpOyAvLyBpbnZva2UgY2FsbGJhY2tcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoZXJyb3JDb2RlID09PSAnY2FudHVuZGVsZXRlJykge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0XHR3Z1VMUyhcblx0XHRcdFx0XHRcdCfml6Dms5Xov5jljp/liKDpmaTpobXpnaLvvIzlm6DmsqHmnInniYjmnKzkvpvov5jljp/miJblt7Looqvov5jljp8nLFxuXHRcdFx0XHRcdFx0J+eEoeazlemChOWOn+WIqumZpOmggemdou+8jOWboOaykuacieeJiOacrOS+m+mChOWOn+aIluW3suiiq+mChOWOnydcblx0XHRcdFx0XHQpXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGlmIChjdHgub25VbmRlbGV0ZUZhaWx1cmUpIHtcblx0XHRcdFx0XHRjdHgub25VbmRlbGV0ZUZhaWx1cmUuY2FsbCh0aGlzLCBjdHgudW5kZWxldGVQcm9jZXNzQXBpKTsgLy8gaW52b2tlIGNhbGxiYWNrXG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gaGFyZCBlcnJvciwgZ2l2ZSB1cFxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdFx0d2dVTFMoJ+aXoOazlei/mOWOn+mhtemdou+8micsICfnhKHms5XpgoTljp/poIHpnaLvvJonKSArIGN0eC51bmRlbGV0ZVByb2Nlc3NBcGkuZ2V0RXJyb3JUZXh0KClcblx0XHRcdFx0KTtcblx0XHRcdFx0aWYgKGN0eC5vblVuZGVsZXRlRmFpbHVyZSkge1xuXHRcdFx0XHRcdGN0eC5vblVuZGVsZXRlRmFpbHVyZS5jYWxsKHRoaXMsIGN0eC51bmRlbGV0ZVByb2Nlc3NBcGkpOyAvLyBpbnZva2UgY2FsbGJhY2tcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRjb25zdCBmblByb2Nlc3NQcm90ZWN0ID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBjdHgucHJvdGVjdEFwaS5nZXRSZXNwb25zZSgpLnF1ZXJ5O1xuXHRcdFx0aWYgKCFmblByb2Nlc3NDaGVja3MoJ3Byb3RlY3QnLCBjdHgub25Qcm90ZWN0RmFpbHVyZSwgcmVzcG9uc2UpKSB7XG5cdFx0XHRcdHJldHVybjsgLy8gYWJvcnRcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgdG9rZW4gPSByZXNwb25zZS50b2tlbnMuY3NyZnRva2VuO1xuXHRcdFx0Y29uc3QgW3BhZ2VdID0gcmVzcG9uc2UucGFnZXM7XG5cdFx0XHRjb25zdCBwYWdlVGl0bGUgPSBwYWdlLnRpdGxlO1xuXHRcdFx0Y3R4LndhdGNoZWQgPSBwYWdlLndhdGNobGlzdGV4cGlyeSB8fCBwYWdlLndhdGNoZWQ7XG5cdFx0XHQvLyBGZXRjaCBleGlzdGluZyBwcm90ZWN0aW9uIGxldmVsc1xuXHRcdFx0Y29uc3QgcHJzID0gcmVzcG9uc2UucGFnZXNbMF0ucHJvdGVjdGlvbjtcblx0XHRcdGxldCBlZGl0cHJvdDtcblx0XHRcdGxldCBtb3ZlcHJvdDtcblx0XHRcdGxldCBjcmVhdGVwcm90O1xuXHRcdFx0Zm9yIChjb25zdCBwciBvZiBwcnMpIHtcblx0XHRcdFx0Ly8gRmlsdGVyIG91dCBwcm90ZWN0aW9uIGZyb20gY2FzY2FkaW5nXG5cdFx0XHRcdGlmIChwci50eXBlID09PSAnZWRpdCcgJiYgIXByLnNvdXJjZSkge1xuXHRcdFx0XHRcdGVkaXRwcm90ID0gcHI7XG5cdFx0XHRcdH0gZWxzZSBpZiAocHIudHlwZSA9PT0gJ21vdmUnKSB7XG5cdFx0XHRcdFx0bW92ZXByb3QgPSBwcjtcblx0XHRcdFx0fSBlbHNlIGlmIChwci50eXBlID09PSAnY3JlYXRlJykge1xuXHRcdFx0XHRcdGNyZWF0ZXByb3QgPSBwcjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ly8gRmFsbCBiYWNrIHRvIGN1cnJlbnQgbGV2ZWxzIGlmIG5vdCBleHBsaWNpdGx5IHNldFxuXHRcdFx0aWYgKCFjdHgucHJvdGVjdEVkaXQgJiYgZWRpdHByb3QpIHtcblx0XHRcdFx0Y3R4LnByb3RlY3RFZGl0ID0ge1xuXHRcdFx0XHRcdGxldmVsOiBlZGl0cHJvdC5sZXZlbCxcblx0XHRcdFx0XHRleHBpcnk6IGVkaXRwcm90LmV4cGlyeSxcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGlmICghY3R4LnByb3RlY3RNb3ZlICYmIG1vdmVwcm90KSB7XG5cdFx0XHRcdGN0eC5wcm90ZWN0TW92ZSA9IHtcblx0XHRcdFx0XHRsZXZlbDogbW92ZXByb3QubGV2ZWwsXG5cdFx0XHRcdFx0ZXhwaXJ5OiBtb3ZlcHJvdC5leHBpcnksXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWN0eC5wcm90ZWN0Q3JlYXRlICYmIGNyZWF0ZXByb3QpIHtcblx0XHRcdFx0Y3R4LnByb3RlY3RDcmVhdGUgPSB7XG5cdFx0XHRcdFx0bGV2ZWw6IGNyZWF0ZXByb3QubGV2ZWwsXG5cdFx0XHRcdFx0ZXhwaXJ5OiBjcmVhdGVwcm90LmV4cGlyeSxcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdC8vIERlZmF1bHQgdG8gcHJlLWV4aXN0aW5nIGNhc2NhZGluZyBwcm90ZWN0aW9uIGlmIHVuY2hhbmdlZCAoc2ltaWxhciB0byBhYm92ZSlcblx0XHRcdGlmIChjdHgucHJvdGVjdENhc2NhZGUgPT09IG51bGwpIHtcblx0XHRcdFx0Y3R4LnByb3RlY3RDYXNjYWRlID0gISFwcnMuZmlsdGVyKChwcikgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBwci5jYXNjYWRlO1xuXHRcdFx0XHR9KS5sZW5ndGg7XG5cdFx0XHR9XG5cdFx0XHQvLyBXYXJuIGlmIGNhc2NhZGluZyBwcm90ZWN0aW9uIGJlaW5nIGFwcGxpZWQgd2l0aCBhbiBpbnZhbGlkIHByb3RlY3Rpb24gbGV2ZWwsXG5cdFx0XHQvLyB3aGljaCBmb3IgZWRpdCBwcm90ZWN0aW9uIHdpbGwgY2F1c2UgY2FzY2FkaW5nIHRvIGJlIHNpbGVudGx5IHN0cmlwcGVkXG5cdFx0XHRpZiAoY3R4LnByb3RlY3RDYXNjYWRlKSB7XG5cdFx0XHRcdC8vIE9uIG1vdmUgcHJvdGVjdGlvbiwgdGhpcyBpcyB0ZWNobmljYWxseSBzdHJpY3RlciB0aGFuIHRoZSBNVyBBUEksXG5cdFx0XHRcdC8vIGJ1dCBzZWVtcyByZWFzb25hYmxlIHRvIGF2b2lkIGR1bWIgdmFsdWVzIGFuZCBtaXNsZWFkaW5nIGxvZyBlbnRyaWVzIChUMjY1NjI2KVxuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0KCFjdHgucHJvdGVjdEVkaXQgfHxcblx0XHRcdFx0XHRcdGN0eC5wcm90ZWN0RWRpdC5sZXZlbCAhPT0gJ3N5c29wJyB8fFxuXHRcdFx0XHRcdFx0IWN0eC5wcm90ZWN0TW92ZSB8fFxuXHRcdFx0XHRcdFx0Y3R4LnByb3RlY3RNb3ZlLmxldmVsICE9PSAnc3lzb3AnKSAmJlxuXHRcdFx0XHRcdCFjb25maXJtKFxuXHRcdFx0XHRcdFx0d2dVTFMoJ+aCqOW3suWvueKAnCcsICfmgqjlt7LlsI3jgIwnKSArXG5cdFx0XHRcdFx0XHRcdGN0eC5wYWdlTmFtZSArXG5cdFx0XHRcdFx0XHRcdHdnVUxTKCfigJ3lkK/nlKjkuobov57plIHkv53miqQnLCAn44CN5ZWf55So5LqG6YCj6Y6W5L+d6K23JykgK1xuXHRcdFx0XHRcdFx0XHR3Z1VMUygn77yM5L2G5rKh5pyJ6K6+572u5LuF566h55CG5ZGY55qE5L+d5oqk57qn5Yir44CCXFxuXFxuJywgJ++8jOS9huaykuacieioreWumuWDheeuoeeQhuWToeeahOS/neitt+e0muWIpeOAglxcblxcbicpICtcblx0XHRcdFx0XHRcdFx0d2dVTFMoXG5cdFx0XHRcdFx0XHRcdFx0J+WNleWHu+ehruiupOS7peiHquWKqOiwg+aVtOW5tue7p+e7rei/numUgeWFqOS/neaKpO+8jOWNleWHu+WPlua2iOS7pei3s+i/h+atpOaTjeS9nCcsXG5cdFx0XHRcdFx0XHRcdFx0J+m7nuaTiueiuuiqjeS7peiHquWLleiqv+aVtOS4pue5vOe6jOmAo+mOluWFqOS/neitt++8jOm7nuaTiuWPlua2iOS7pei3s+mBjuatpOaTjeS9nCdcblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdClcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2dVTFMoJ+i/numUgeS/neaKpOW3suWPlua2iOOAgicsICfpgKPpjpbkv53orbflt7Llj5bmtojjgIInKSk7XG5cdFx0XHRcdFx0Y3R4Lm9uUHJvdGVjdEZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGN0eC5wcm90ZWN0RWRpdC5sZXZlbCA9ICdzeXNvcCc7XG5cdFx0XHRcdGN0eC5wcm90ZWN0TW92ZS5sZXZlbCA9ICdzeXNvcCc7XG5cdFx0XHR9XG5cdFx0XHQvLyBCdWlsZCBwcm90ZWN0aW9uIGxldmVscyBhbmQgZXhwaXJ5cyAoZXhwaXJpZXM/KSBmb3IgcXVlcnlcblx0XHRcdGNvbnN0IHByb3RlY3Rpb25zID0gW107XG5cdFx0XHRjb25zdCBleHBpcnlzID0gW107XG5cdFx0XHRpZiAoY3R4LnByb3RlY3RFZGl0KSB7XG5cdFx0XHRcdHByb3RlY3Rpb25zLnB1c2goYGVkaXQ9JHtjdHgucHJvdGVjdEVkaXQubGV2ZWx9YCk7XG5cdFx0XHRcdGV4cGlyeXMucHVzaChjdHgucHJvdGVjdEVkaXQuZXhwaXJ5KTtcblx0XHRcdH1cblx0XHRcdGlmIChjdHgucHJvdGVjdE1vdmUpIHtcblx0XHRcdFx0cHJvdGVjdGlvbnMucHVzaChgbW92ZT0ke2N0eC5wcm90ZWN0TW92ZS5sZXZlbH1gKTtcblx0XHRcdFx0ZXhwaXJ5cy5wdXNoKGN0eC5wcm90ZWN0TW92ZS5leHBpcnkpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGN0eC5wcm90ZWN0Q3JlYXRlKSB7XG5cdFx0XHRcdHByb3RlY3Rpb25zLnB1c2goYGNyZWF0ZT0ke2N0eC5wcm90ZWN0Q3JlYXRlLmxldmVsfWApO1xuXHRcdFx0XHRleHBpcnlzLnB1c2goY3R4LnByb3RlY3RDcmVhdGUuZXhwaXJ5KTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHF1ZXJ5ID0ge1xuXHRcdFx0XHRhY3Rpb246ICdwcm90ZWN0Jyxcblx0XHRcdFx0dGl0bGU6IHBhZ2VUaXRsZSxcblx0XHRcdFx0dG9rZW4sXG5cdFx0XHRcdHByb3RlY3Rpb25zOiBwcm90ZWN0aW9ucy5qb2luKCd8JyksXG5cdFx0XHRcdGV4cGlyeTogZXhwaXJ5cy5qb2luKCd8JyksXG5cdFx0XHRcdHJlYXNvbjogY3R4LmVkaXRTdW1tYXJ5LFxuXHRcdFx0XHR3YXRjaGxpc3Q6IGN0eC53YXRjaGxpc3RPcHRpb24sXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0fTtcblx0XHRcdC8vIE9ubHkgc2hvd3MgdXAgaW4gbG9ncywgbm90IHBhZ2UgaGlzdG9yeVxuXHRcdFx0aWYgKGN0eC5jaGFuZ2VUYWdzKSB7XG5cdFx0XHRcdHF1ZXJ5LnRhZ3MgPSBjdHguY2hhbmdlVGFncztcblx0XHRcdH1cblx0XHRcdGlmIChmbkFwcGx5V2F0Y2hsaXN0RXhwaXJ5KCkpIHtcblx0XHRcdFx0cXVlcnkud2F0Y2hsaXN0ZXhwaXJ5ID0gY3R4LndhdGNobGlzdEV4cGlyeTtcblx0XHRcdH1cblx0XHRcdGlmIChjdHgucHJvdGVjdENhc2NhZGUpIHtcblx0XHRcdFx0cXVlcnkuY2FzY2FkZSA9ICd0cnVlJztcblx0XHRcdH1cblx0XHRcdGN0eC5wcm90ZWN0UHJvY2Vzc0FwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdFx0d2dVTFMoJ+S/neaKpOmhtemdouKApuKApicsICfkv53orbfpoIHpnaLigKbigKYnKSxcblx0XHRcdFx0cXVlcnksXG5cdFx0XHRcdGN0eC5vblByb3RlY3RTdWNjZXNzLFxuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudCxcblx0XHRcdFx0Y3R4Lm9uUHJvdGVjdEZhaWx1cmVcblx0XHRcdCk7XG5cdFx0XHRjdHgucHJvdGVjdFByb2Nlc3NBcGkuc2V0UGFyZW50KHRoaXMpO1xuXHRcdFx0Y3R4LnByb3RlY3RQcm9jZXNzQXBpLnBvc3QoKTtcblx0XHR9O1xuXHRcdGNvbnN0IHNsZWVwID0gKG1pbGxpc2Vjb25kcykgPT4ge1xuXHRcdFx0Y29uc3QgZGVmZXJyZWQgPSAkLkRlZmVycmVkKCk7XG5cdFx0XHRzZXRUaW1lb3V0KGRlZmVycmVkLnJlc29sdmUsIG1pbGxpc2Vjb25kcyk7XG5cdFx0XHRyZXR1cm4gZGVmZXJyZWQ7XG5cdFx0fTtcblx0fTsgLy8gZW5kIE1vcmViaXRzLndpa2kucGFnZVxuXHQvKiAqKioqKioqKioqKioqKioqIE1vcmViaXRzLndpa2kucHJldmlldyAqKioqKioqKioqKioqKioqICovXG5cdC8qKlxuXHQgKiBVc2UgdGhlIEFQSSB0byBwYXJzZSBhIGZyYWdtZW50IG9mIHdpa2l0ZXh0IGFuZCByZW5kZXIgaXQgYXMgSFRNTC5cblx0ICpcblx0ICogVGhlIHN1Z2dlc3RlZCBpbXBsZW1lbnRhdGlvbiBwYXR0ZXJuIChpbiB7QGxpbmsgTW9yZWJpdHMuc2ltcGxlV2luZG93fSBhbmRcblx0ICoge0BsaW5rIE1vcmViaXRzLnF1aWNrRm9ybX0gc2l0dWF0aW9ucykgaXMgdG8gY29uc3RydWN0IGFcblx0ICogYE1vcmViaXRzLndpa2kucHJldmlld2Agb2JqZWN0IGFmdGVyIHJlbmRlcmluZyBhIGBNb3JlYml0cy5xdWlja0Zvcm1gLCBhbmRcblx0ICogYmluZCB0aGUgb2JqZWN0IHRvIGFuIGFyYml0cmFyeSBwcm9wZXJ0eSBvZiB0aGUgZm9ybSAoZS5nLiB8cHJldmlld2VyfCkuXG5cdCAqIEZvciBhbiBleGFtcGxlLCBzZWUgdHdpbmtsZXdhcm4uanMuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpXG5cdCAqIEBjbGFzc1xuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwcmV2aWV3Ym94IC0gVGhlIGVsZW1lbnQgdGhhdCB3aWxsIGNvbnRhaW4gdGhlIHJlbmRlcmVkIEhUTUwsXG5cdCAqIHVzdWFsbHkgYSA8ZGl2PiBlbGVtZW50LlxuXHQgKi9cblx0TW9yZWJpdHMud2lraS5wcmV2aWV3ID0gZnVuY3Rpb24gKHByZXZpZXdib3gpIHtcblx0XHR0aGlzLnByZXZpZXdib3ggPSBwcmV2aWV3Ym94O1xuXHRcdCQocHJldmlld2JveCkuYWRkQ2xhc3MoJ21vcmViaXRzLXByZXZpZXdib3gnKS5oaWRlKCk7XG5cdFx0LyoqXG5cdFx0ICogRGlzcGxheXMgdGhlIHByZXZpZXcgYm94LCBhbmQgYmVnaW5zIGFuIGFzeW5jaHJvbm91cyBhdHRlbXB0XG5cdFx0ICogdG8gcmVuZGVyIHRoZSBzcGVjaWZpZWQgd2lraXRleHQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gd2lraXRleHQgLSBXaWtpdGV4dCB0byByZW5kZXI7IG1vc3QgdGhpbmdzIHNob3VsZCB3b3JrLCBpbmNsdWRpbmcgYHN1YnN0OmAgYW5kIGB+fn5+YC5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gW3BhZ2VUaXRsZV0gLSBPcHRpb25hbCBwYXJhbWV0ZXIgZm9yIHRoZSBwYWdlIHRoaXMgc2hvdWxkIGJlIHJlbmRlcmVkIGFzIGJlaW5nIG9uLCBpZiBvbWl0dGVkIGl0IGlzIHRha2VuIGFzIHRoZSBjdXJyZW50IHBhZ2UuXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IFtzZWN0aW9uVGl0bGVdIC0gSWYgcHJvdmlkZWQsIHJlbmRlciB0aGUgdGV4dCBhcyBhIG5ldyBzZWN0aW9uIHVzaW5nIHRoaXMgYXMgdGhlIHRpdGxlLlxuXHRcdCAqIEByZXR1cm5zIHtqUXVlcnkucHJvbWlzZX1cblx0XHQgKi9cblx0XHR0aGlzLmJlZ2luUmVuZGVyID0gKHdpa2l0ZXh0LCBwYWdlVGl0bGUsIHNlY3Rpb25UaXRsZSkgPT4ge1xuXHRcdFx0JChwcmV2aWV3Ym94KS5zaG93KCk7XG5cdFx0XHRjb25zdCBzdGF0dXNzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdFx0cHJldmlld2JveC5hcHBlbmRDaGlsZChzdGF0dXNzcGFuKTtcblx0XHRcdE1vcmViaXRzLnN0YXR1cy5pbml0KHN0YXR1c3NwYW4pO1xuXHRcdFx0Ly8g6Iul6aG16Z2i5LiN5pivd2lraXRleHTvvIjkvovlpoJKU+OAgUNTU+etie+8ie+8jOmCo+S5iOaJvuS4gOS4qndpa2l0ZXh06aG16Z2i5p2l6aKE6KeI44CCXG5cdFx0XHRsZXQgcGFnZU5hbWUgPSBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJyk7XG5cdFx0XHRpZiAobXcuY29uZmlnLmdldCgnd2dQYWdlQ29udGVudE1vZGVsJykgIT09ICd3aWtpdGV4dCcpIHtcblx0XHRcdFx0cGFnZU5hbWUgPSBgRHJhZnQ6JHtwYWdlTmFtZX1gO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcXVlcnkgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRcdFx0cHJvcDogWyd0ZXh0JywgJ21vZHVsZXMnXSxcblx0XHRcdFx0cHN0OiB0cnVlLFxuXHRcdFx0XHQvLyBQU1QgPSBwcmUtc2F2ZSB0cmFuc2Zvcm07IHRoaXMgbWFrZXMgc3Vic3RpdHV0aW9uIHdvcmsgcHJvcGVybHlcblx0XHRcdFx0cHJldmlldzogdHJ1ZSxcblx0XHRcdFx0dGV4dDogd2lraXRleHQsXG5cdFx0XHRcdHRpdGxlOiBwYWdlVGl0bGUgfHwgcGFnZU5hbWUsXG5cdFx0XHRcdGRpc2FibGVsaW1pdHJlcG9ydDogdHJ1ZSxcblx0XHRcdFx0ZGlzYWJsZWVkaXRzZWN0aW9uOiB0cnVlLFxuXHRcdFx0XHR1c2VsYW5nOiBtdy5jb25maWcuZ2V0KCd3Z1VzZXJMYW5ndWFnZScpLFxuXHRcdFx0XHQvLyBVc2Ugd2dVc2VyTGFuZ3VhZ2UgZm9yIHByZXZpZXdcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHR9O1xuXHRcdFx0aWYgKHNlY3Rpb25UaXRsZSkge1xuXHRcdFx0XHRxdWVyeS5zZWN0aW9uID0gJ25ldyc7XG5cdFx0XHRcdHF1ZXJ5LnNlY3Rpb250aXRsZSA9IHNlY3Rpb25UaXRsZTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHJlbmRlckFwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdFx0d2dVTFMoJ+WKoOi9veS4reKApuKApicsICfovInlhaXkuK3igKbigKYnKSxcblx0XHRcdFx0cXVlcnksXG5cdFx0XHRcdGZuUmVuZGVyU3VjY2Vzcyxcblx0XHRcdFx0bmV3IE1vcmViaXRzLnN0YXR1cyh3Z1VMUygn6aKE6KeIJywgJ+mgkOimvScpKVxuXHRcdFx0KTtcblx0XHRcdHJlbmRlckFwaS5wb3N0KCk7XG5cdFx0fTtcblx0XHRjb25zdCBmblJlbmRlclN1Y2Nlc3MgPSAoYXBpb2JqKSA9PiB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGFwaW9iai5nZXRSZXNwb25zZSgpO1xuXHRcdFx0Y29uc3QgaHRtbCA9IHJlc3BvbnNlLnBhcnNlLnRleHQ7XG5cdFx0XHRpZiAoIWh0bWwpIHtcblx0XHRcdFx0YXBpb2JqLnN0YXRlbGVtLmVycm9yKHdnVUxTKCfliqDovb3pooTop4jlpLHotKXvvIzmiJbmqKHmnb/kuLrnqbonLCAn6LyJ5YWl6aCQ6Ka95aSx5pWX77yM5oiW5qih5p2/54K656m6JykpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRwcmV2aWV3Ym94LmlubmVySFRNTCA9IGh0bWw7XG5cdFx0XHRtdy5sb2FkZXIubG9hZChyZXNwb25zZS5wYXJzZS5tb2R1bGVzdHlsZXMpO1xuXHRcdFx0bXcubG9hZGVyLmxvYWQocmVzcG9uc2UucGFyc2UubW9kdWxlcyk7XG5cdFx0XHQvLyB0aGlzIG1ha2VzIGxpbmtzIG9wZW4gaW4gbmV3IHRhYlxuXHRcdFx0JChwcmV2aWV3Ym94KS5maW5kKCdhJykuYXR0cigndGFyZ2V0JywgJ19ibGFuaycpLmF0dHIoJ3JlbCcsICdub29wZW5lciBub3JlZmVycmVyJyk7XG5cdFx0fTtcblx0XHQvKiogSGlkZXMgdGhlIHByZXZpZXcgYm94IGFuZCBjbGVhcnMgaXQuICovXG5cdFx0dGhpcy5jbG9zZVByZXZpZXcgPSAoKSA9PiB7XG5cdFx0XHQkKHByZXZpZXdib3gpLmVtcHR5KCkuaGlkZSgpO1xuXHRcdH07XG5cdH07XG5cdC8qICoqKioqKioqKioqKioqKiogTW9yZWJpdHMud2lraXRleHQgKioqKioqKioqKioqKioqKiAqL1xuXHQvKipcblx0ICogV2lraXRleHQgbWFuaXB1bGF0aW9uLlxuXHQgKlxuXHQgKiBAbmFtZXNwYWNlIE1vcmViaXRzLndpa2l0ZXh0XG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0c1xuXHQgKi9cblx0TW9yZWJpdHMud2lraXRleHQgPSB7fTtcblx0LyoqXG5cdCAqIEdldCB0aGUgdmFsdWUgb2YgZXZlcnkgcGFyYW1ldGVyIGZvdW5kIGluIHRoZSB3aWtpdGV4dCBvZiBhIGdpdmVuIHRlbXBsYXRlLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraXRleHRcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBXaWtpdGV4dCBjb250YWluaW5nIGEgdGVtcGxhdGUuXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9MF0gLSBJbmRleCBub3Rpbmcgd2hlcmUgaW4gdGhlIHRleHQgdGhlIHRlbXBsYXRlIGJlZ2lucy5cblx0ICogQHJldHVybnMge09iamVjdH0gYHtuYW1lOiB0ZW1wbGF0ZU5hbWUsIHBhcmFtZXRlcnM6IHtrZXk6IHZhbHVlfX1gLlxuXHQgKi9cblx0TW9yZWJpdHMud2lraXRleHQucGFyc2VUZW1wbGF0ZSA9ICh0ZXh0LCBzdGFydCkgPT4ge1xuXHRcdHN0YXJ0IHx8PSAwO1xuXHRcdGNvbnN0IGxldmVsID0gW107IC8vIFRyYWNrIG9mIGhvdyBkZWVwIHdlIGFyZSAoe3ssIHt7eywgb3IgW1spXG5cdFx0bGV0IGNvdW50ID0gLTE7IC8vIE51bWJlciBvZiBwYXJhbWV0ZXJzIGZvdW5kXG5cdFx0bGV0IHVubmFtZWQgPSAwOyAvLyBLZWVwIHRyYWNrIG9mIHdoYXQgbnVtYmVyIGFuIHVubmFtZWQgcGFyYW1ldGVyIHNob3VsZCByZWNlaXZlXG5cdFx0bGV0IGVxdWFscyA9IC0xOyAvLyBBZnRlciBmaW5kaW5nIFwiPVwiIGJlZm9yZSBhIHBhcmFtZXRlciwgdGhlIGluZGV4OyBvdGhlcndpc2UsIC0xXG5cdFx0bGV0IGN1cnJlbnQgPSAnJztcblx0XHRjb25zdCByZXN1bHQgPSB7XG5cdFx0XHRuYW1lOiAnJyxcblx0XHRcdHBhcmFtZXRlcnM6IHt9LFxuXHRcdH07XG5cdFx0bGV0IGtleTtcblx0XHRsZXQgdmFsdWU7XG5cdFx0LyoqXG5cdFx0ICogRnVuY3Rpb24gdG8gaGFuZGxlIGZpbmRpbmcgcGFyYW1ldGVyIHZhbHVlcy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZpbmFsPWZhbHNlXSAtIFdoZXRoZXIgdGhpcyBpcyB0aGUgZmluYWxcblx0XHQgKiBwYXJhbWV0ZXIgYW5kIHdlIG5lZWQgdG8gcmVtb3ZlIHRoZSB0cmFpbGluZyBgfX1gLlxuXHRcdCAqL1xuXHRcdGNvbnN0IGZpbmRQYXJhbSA9IChmaW5hbCkgPT4ge1xuXHRcdFx0Ly8gTm90aGluZyBmb3VuZCB5ZXQsIHRoaXMgbXVzdCBiZSB0aGUgdGVtcGxhdGUgbmFtZVxuXHRcdFx0aWYgKGNvdW50ID09PSAtMSkge1xuXHRcdFx0XHRyZXN1bHQubmFtZSA9IGN1cnJlbnQuc2xpY2UoMikudHJpbSgpO1xuXHRcdFx0XHQrK2NvdW50O1xuXHRcdFx0fSBlbHNlIGlmIChlcXVhbHMgPT09IC0xKSB7XG5cdFx0XHRcdC8vIEluIGEgcGFyYW1ldGVyXG5cdFx0XHRcdC8vIE5vIGVxdWFscywgc28gaXQgbXVzdCBiZSB1bm5hbWVkOyBubyB0cmltIHNpbmNlIHdoaXRlc3BhY2UgYWxsb3dlZFxuXHRcdFx0XHRjb25zdCBwYXJhbSA9IGZpbmFsID8gY3VycmVudC5zbGljZShlcXVhbHMgKyAxLCAtMikgOiBjdXJyZW50O1xuXHRcdFx0XHRpZiAocGFyYW0pIHtcblx0XHRcdFx0XHRyZXN1bHQucGFyYW1ldGVyc1srK3VubmFtZWRdID0gcGFyYW07XG5cdFx0XHRcdFx0Kytjb3VudDtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gV2UgZm91bmQgYW4gZXF1YWxzLCBzbyBzYXZlIHRoZSBwYXJhbWV0ZXIgYXMga2V5OiB2YWx1ZVxuXHRcdFx0XHRrZXkgPSBjdXJyZW50LnNsaWNlKDAsIE1hdGgubWF4KDAsIGVxdWFscykpLnRyaW0oKTtcblx0XHRcdFx0dmFsdWUgPSBmaW5hbCA/IGN1cnJlbnQuc2xpY2UoZXF1YWxzICsgMSwgLTIpLnRyaW0oKSA6IGN1cnJlbnQuc2xpY2UoTWF0aC5tYXgoMCwgZXF1YWxzICsgMSkpLnRyaW0oKTtcblx0XHRcdFx0cmVzdWx0LnBhcmFtZXRlcnNba2V5XSA9IHZhbHVlO1xuXHRcdFx0XHRlcXVhbHMgPSAtMTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdGZvciAobGV0IGkgPSBzdGFydDsgaSA8IHRleHQubGVuZ3RoOyArK2kpIHtcblx0XHRcdGNvbnN0IHRlc3QzID0gdGV4dC5zbGljZShpLCBpICsgMyk7XG5cdFx0XHRpZiAodGVzdDMgPT09ICd7e3snIHx8ICh0ZXN0MyA9PT0gJ319fScgJiYgbGV2ZWwuYXQoLTEpID09PSAzKSkge1xuXHRcdFx0XHRjdXJyZW50ICs9IHRlc3QzO1xuXHRcdFx0XHRpICs9IDI7XG5cdFx0XHRcdGlmICh0ZXN0MyA9PT0gJ3t7eycpIHtcblx0XHRcdFx0XHRsZXZlbC5wdXNoKDMpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGxldmVsLnBvcCgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgdGVzdDIgPSB0ZXh0LnNsaWNlKGksIGkgKyAyKTtcblx0XHRcdC8vIEVudGVyaW5nIGEgdGVtcGxhdGUgKG9yIGxpbmspXG5cdFx0XHRpZiAodGVzdDIgPT09ICd7eycgfHwgdGVzdDIgPT09ICdbWycpIHtcblx0XHRcdFx0Y3VycmVudCArPSB0ZXN0Mjtcblx0XHRcdFx0KytpO1xuXHRcdFx0XHRpZiAodGVzdDIgPT09ICd7eycpIHtcblx0XHRcdFx0XHRsZXZlbC5wdXNoKDIpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGxldmVsLnB1c2goJ3dsJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHQvLyBFaXRoZXIgbGVhdmluZyBhIGxpbmsgb3IgdGVtcGxhdGUvcGFyc2VyIGZ1bmN0aW9uXG5cdFx0XHRpZiAoKHRlc3QyID09PSAnfX0nICYmIGxldmVsLmF0KC0xKSA9PT0gMikgfHwgKHRlc3QyID09PSAnXV0nICYmIGxldmVsLmF0KC0xKSA9PT0gJ3dsJykpIHtcblx0XHRcdFx0Y3VycmVudCArPSB0ZXN0Mjtcblx0XHRcdFx0KytpO1xuXHRcdFx0XHRsZXZlbC5wb3AoKTtcblx0XHRcdFx0Ly8gRmluZCB0aGUgZmluYWwgcGFyYW1ldGVyIGlmIHRoaXMgcmVhbGx5IGlzIHRoZSBlbmRcblx0XHRcdFx0aWYgKHRlc3QyID09PSAnfX0nICYmIGxldmVsLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdGZpbmRQYXJhbSh0cnVlKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGlmICh0ZXh0LmNoYXJBdChpKSA9PT0gJ3wnICYmIGxldmVsLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHQvLyBBbm90aGVyIHBpcGUgZm91bmQsIHRvcGxldmVsLCBzbyBwYXJhbWV0ZXIgY29taW5nIHVwIVxuXHRcdFx0XHRmaW5kUGFyYW0oKTtcblx0XHRcdFx0Y3VycmVudCA9ICcnO1xuXHRcdFx0fSBlbHNlIGlmIChlcXVhbHMgPT09IC0xICYmIHRleHQuY2hhckF0KGkpID09PSAnPScgJiYgbGV2ZWwubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRcdC8vIEVxdWFscyBmb3VuZCwgdG9wbGV2ZWxcblx0XHRcdFx0ZXF1YWxzID0gY3VycmVudC5sZW5ndGg7XG5cdFx0XHRcdGN1cnJlbnQgKz0gdGV4dC5jaGFyQXQoaSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBKdXN0IGFkdmFuY2UgdGhlIHBvc2l0aW9uXG5cdFx0XHRcdGN1cnJlbnQgKz0gdGV4dC5jaGFyQXQoaSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH07XG5cdC8qKlxuXHQgKiBBZGp1c3QgYW5kIG1hbmlwdWxhdGUgdGhlIHdpa2l0ZXh0IG9mIGEgcGFnZS5cblx0ICpcblx0ICogQGNsYXNzXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpdGV4dFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIFdpa2l0ZXh0IHRvIGJlIG1hbmlwdWxhdGVkLlxuXHQgKi9cblx0TW9yZWJpdHMud2lraXRleHQucGFnZSA9IGZ1bmN0aW9uICh0ZXh0KSB7XG5cdFx0dGhpcy50ZXh0ID0gdGV4dDtcblx0fTtcblx0TW9yZWJpdHMud2lraXRleHQucGFnZS5wcm90b3R5cGUgPSB7XG5cdFx0dGV4dDogJycsXG5cdFx0LyoqXG5cdFx0ICogUmVtb3ZlcyBsaW5rcyB0byBgbGlua190YXJnZXRgIGZyb20gdGhlIHBhZ2UgdGV4dC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBsaW5rVGFyZ2V0XG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLndpa2l0ZXh0LnBhZ2V9XG5cdFx0ICovXG5cdFx0cmVtb3ZlTGluayhsaW5rVGFyZ2V0KSB7XG5cdFx0XHRjb25zdCBtd1RpdGxlID0gbXcuVGl0bGUubmV3RnJvbVRleHQobGlua1RhcmdldCk7XG5cdFx0XHRjb25zdCBuYW1lc3BhY2VJRCA9IG13VGl0bGUuZ2V0TmFtZXNwYWNlSWQoKTtcblx0XHRcdGNvbnN0IHRpdGxlID0gbXdUaXRsZS5nZXRNYWluVGV4dCgpO1xuXHRcdFx0bGV0IGxpbmtSZWdleFN0cmluZyA9ICcnO1xuXHRcdFx0aWYgKG5hbWVzcGFjZUlEICE9PSAwKSB7XG5cdFx0XHRcdGxpbmtSZWdleFN0cmluZyA9IGAke01vcmViaXRzLm5hbWVzcGFjZVJlZ2V4KG5hbWVzcGFjZUlEKX06YDtcblx0XHRcdH1cblx0XHRcdGxpbmtSZWdleFN0cmluZyArPSBNb3JlYml0cy5wYWdlTmFtZVJlZ2V4KHRpdGxlKTtcblx0XHRcdC8vIEZvciBtb3N0IG5hbWVzcGFjZXMsIHVubGluayBib3RoIFtbVXNlcjpUZXN0XV0gYW5kIFtbOlVzZXI6VGVzdF1dXG5cdFx0XHQvLyBGb3IgZmlsZXMgYW5kIGNhdGVnb3JpZXMsIG9ubHkgdW5saW5rIFtbOkNhdGVnb3J5OlRlc3RdXS4gRG8gbm90IHVubGluayBbW0NhdGVnb3J5OlRlc3RdXVxuXHRcdFx0Y29uc3QgaXNGaWxlT3JDYXRlZ29yeSA9IFs2LCAxNF0uaW5jbHVkZXMobmFtZXNwYWNlSUQpO1xuXHRcdFx0Y29uc3QgY29sb24gPSBpc0ZpbGVPckNhdGVnb3J5ID8gJzonIDogJzo/Jztcblx0XHRcdGNvbnN0IHNpbXBsZUxpbmtSZWdleCA9IG5ldyBSZWdFeHAoYFxcXFxbXFxcXFske2NvbG9ufSgke2xpbmtSZWdleFN0cmluZ30pXFxcXF1cXFxcXWAsICdnJyk7XG5cdFx0XHRjb25zdCBwaXBlZExpbmtSZWdleCA9IG5ldyBSZWdFeHAoYFxcXFxbXFxcXFske2NvbG9ufSR7bGlua1JlZ2V4U3RyaW5nfVxcXFx8KC4rPylcXFxcXVxcXFxdYCwgJ2cnKTtcblx0XHRcdHRoaXMudGV4dCA9IHRoaXMudGV4dC5yZXBsYWNlKHNpbXBsZUxpbmtSZWdleCwgJyQxJykucmVwbGFjZShwaXBlZExpbmtSZWdleCwgJyQxJyk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIENvbW1lbnRzIG91dCBpbWFnZXMgZnJvbSBwYWdlIHRleHQ7IGlmIHVzZWQgaW4gYSBnYWxsZXJ5LCBkZWxldGVzIHRoZSB3aG9sZSBsaW5lLlxuXHRcdCAqIElmIHVzZWQgYXMgYSB0ZW1wbGF0ZSBhcmd1bWVudCAobm90IG5lY2Vzc2FyaWx5IHdpdGggYEZpbGU6YCBwcmVmaXgpLCB0aGUgdGVtcGxhdGUgcGFyYW1ldGVyIGlzIGNvbW1lbnRlZCBvdXQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gaW1hZ2UgLSBJbWFnZSBuYW1lIHdpdGhvdXQgYEZpbGU6YCBwcmVmaXguXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IFtyZWFzb25dIC0gUmVhc29uIHRvIGJlIGluY2x1ZGVkIGluIGNvbW1lbnQsIGFsb25nc2lkZSB0aGUgY29tbWVudGVkLW91dCBpbWFnZS5cblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMud2lraXRleHQucGFnZX1cblx0XHQgKi9cblx0XHRjb21tZW50T3V0SW1hZ2UoaW1hZ2UsIHJlYXNvbikge1xuXHRcdFx0Y29uc3QgdW5iaW5kZXIgPSBuZXcgTW9yZWJpdHMudW5iaW5kZXIodGhpcy50ZXh0KTtcblx0XHRcdHVuYmluZGVyLnVuYmluZCgnPCEtLScsICctLT4nKTtcblx0XHRcdHJlYXNvbiA9IHJlYXNvbiA/IGAke3JlYXNvbn06IGAgOiAnJztcblx0XHRcdGNvbnN0IGltYWdlUmVnZXhTdHJpbmcgPSBNb3JlYml0cy5wYWdlTmFtZVJlZ2V4KGltYWdlKTtcblx0XHRcdC8vIENoZWNrIGZvciBub3JtYWwgaW1hZ2UgbGlua3MsIGkuZS4gW1tGaWxlOkZvb2Jhci5wbmd8Li4uXV1cblx0XHRcdC8vIFdpbGwgZWF0IHRoZSB3aG9sZSBsaW5rXG5cdFx0XHRjb25zdCBsaW5rc1JlZ2V4ID0gbmV3IFJlZ0V4cChcblx0XHRcdFx0YFxcXFxbXFxcXFske01vcmViaXRzLm5hbWVzcGFjZVJlZ2V4KDYpfTpcXFxccyoke2ltYWdlUmVnZXhTdHJpbmd9XFxcXHMqW1xcXFx8KD86XFxcXF1cXFxcXSldYFxuXHRcdFx0KTtcblx0XHRcdGNvbnN0IGFsbExpbmtzID0gTW9yZWJpdHMuc3RyaW5nLnNwbGl0V2VpZ2h0ZWRCeUtleXModW5iaW5kZXIuY29udGVudCwgJ1tbJywgJ11dJyk7XG5cdFx0XHRmb3IgKGNvbnN0IGFsbExpbmsgb2YgYWxsTGlua3MpIHtcblx0XHRcdFx0aWYgKGxpbmtzUmVnZXgudGVzdChhbGxMaW5rKSkge1xuXHRcdFx0XHRcdGNvbnN0IHJlcGxhY2VtZW50ID0gYDwhLS0gJHtyZWFzb259JHthbGxMaW5rfSAtLT5gO1xuXHRcdFx0XHRcdHVuYmluZGVyLmNvbnRlbnQgPSB1bmJpbmRlci5jb250ZW50LnJlcGxhY2UoYWxsTGluaywgcmVwbGFjZW1lbnQpO1xuXHRcdFx0XHRcdC8vIHVuYmluZCB0aGUgbmV3bHkgY3JlYXRlZCBjb21tZW50c1xuXHRcdFx0XHRcdHVuYmluZGVyLnVuYmluZCgnPCEtLScsICctLT4nKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ly8gQ2hlY2sgZm9yIGdhbGxlcnkgaW1hZ2VzLCBpLmUuIGluc3RhbmNlcyB0aGF0IG11c3Qgc3RhcnQgb24gYSBuZXcgbGluZSxcblx0XHRcdC8vIGV2ZW50dWFsbHkgcHJlY2VkZWQgd2l0aCBzb21lIHNwYWNlLCBhbmQgbXVzdCBpbmNsdWRlIEZpbGU6IHByZWZpeFxuXHRcdFx0Ly8gV2lsbCBlYXQgdGhlIHdob2xlIGxpbmUuXG5cdFx0XHRjb25zdCBnYWxsZXJ5SW1hZ2VSZWdleCA9IG5ldyBSZWdFeHAoXG5cdFx0XHRcdGAoXlxcXFxzKiR7TW9yZWJpdHMubmFtZXNwYWNlUmVnZXgoNil9OlxcXFxzKiR7aW1hZ2VSZWdleFN0cmluZ31cXFxccyooPzpcXFxcfC4qPyR8JCkpYCxcblx0XHRcdFx0J21nJ1xuXHRcdFx0KTtcblx0XHRcdHVuYmluZGVyLmNvbnRlbnQgPSB1bmJpbmRlci5jb250ZW50LnJlcGxhY2UoZ2FsbGVyeUltYWdlUmVnZXgsIGA8IS0tICR7cmVhc29ufSQxIC0tPmApO1xuXHRcdFx0Ly8gdW5iaW5kIHRoZSBuZXdseSBjcmVhdGVkIGNvbW1lbnRzXG5cdFx0XHR1bmJpbmRlci51bmJpbmQoJzwhLS0nLCAnLS0+Jyk7XG5cdFx0XHQvLyBDaGVjayBmcmVlIGltYWdlIHVzYWdlcywgZm9yIGV4YW1wbGUgYXMgdGVtcGxhdGUgYXJndW1lbnRzLCBtaWdodCBoYXZlIHRoZSBGaWxlOiBwcmVmaXggZXhjbHVkZWQsIGJ1dCBtdXN0IGJlIHByZWNlZGVkIGJ5IGFuIHxcblx0XHRcdC8vIFdpbGwgb25seSBlYXQgdGhlIGltYWdlIG5hbWUgYW5kIHRoZSBwcmVjZWRpbmcgYmFyIGFuZCBhbiBldmVudHVhbCBuYW1lZCBwYXJhbWV0ZXJcblx0XHRcdGNvbnN0IGZyZWVJbWFnZVJlZ2V4ID0gbmV3IFJlZ0V4cChcblx0XHRcdFx0YChcXFxcfFxcXFxzKig/OltcXFxcd1xcXFxzXStcXFxcPSk/XFxcXHMqKD86JHtNb3JlYml0cy5uYW1lc3BhY2VSZWdleCg2KX06XFxcXHMqKT8ke2ltYWdlUmVnZXhTdHJpbmd9KWAsXG5cdFx0XHRcdCdtZydcblx0XHRcdCk7XG5cdFx0XHR1bmJpbmRlci5jb250ZW50ID0gdW5iaW5kZXIuY29udGVudC5yZXBsYWNlKGZyZWVJbWFnZVJlZ2V4LCBgPCEtLSAke3JlYXNvbn0kMSAtLT5gKTtcblx0XHRcdC8vIFJlYmluZCB0aGUgY29udGVudCBub3csIHdlIGFyZSBkb25lIVxuXHRcdFx0dGhpcy50ZXh0ID0gdW5iaW5kZXIucmViaW5kKCk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIENvbnZlcnRzIHVzZXMgb2YgW1tGaWxlOmBpbWFnZWBdXSB0byBbW0ZpbGU6YGltYWdlYHxgZGF0YWBdXS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBpbWFnZSAtIEltYWdlIG5hbWUgd2l0aG91dCBGaWxlOiBwcmVmaXguXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGRhdGEgLSBUaGUgZGlzcGxheSBvcHRpb25zLlxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy53aWtpdGV4dC5wYWdlfVxuXHRcdCAqL1xuXHRcdGFkZFRvSW1hZ2VDb21tZW50KGltYWdlLCBkYXRhKSB7XG5cdFx0XHRjb25zdCBpbWFnZVJlZ2V4U3RyaW5nID0gTW9yZWJpdHMucGFnZU5hbWVSZWdleChpbWFnZSk7XG5cdFx0XHRjb25zdCBsaW5rc1JlZ2V4ID0gbmV3IFJlZ0V4cChcblx0XHRcdFx0YFxcXFxbXFxcXFske01vcmViaXRzLm5hbWVzcGFjZVJlZ2V4KDYpfTpcXFxccyoke2ltYWdlUmVnZXhTdHJpbmd9XFxcXHMqW1xcXFx8KD86XFxcXF1cXFxcXSldYFxuXHRcdFx0KTtcblx0XHRcdGNvbnN0IGFsbExpbmtzID0gTW9yZWJpdHMuc3RyaW5nLnNwbGl0V2VpZ2h0ZWRCeUtleXModGhpcy50ZXh0LCAnW1snLCAnXV0nKTtcblx0XHRcdGZvciAobGV0IHJlcGxhY2VtZW50IG9mIGFsbExpbmtzKSB7XG5cdFx0XHRcdGlmIChsaW5rc1JlZ2V4LnRlc3QocmVwbGFjZW1lbnQpKSB7XG5cdFx0XHRcdFx0Ly8ganVzdCBwdXQgaXQgYXQgdGhlIGVuZD9cblx0XHRcdFx0XHRyZXBsYWNlbWVudCA9IHJlcGxhY2VtZW50LnJlcGxhY2UoL1xcXVxcXSQvLCBgfCR7ZGF0YX1dXWApO1xuXHRcdFx0XHRcdHRoaXMudGV4dCA9IHRoaXMudGV4dC5yZXBsYWNlKHJlcGxhY2VtZW50LCByZXBsYWNlbWVudCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGNvbnN0IGdhbGxlcnlSZWdleCA9IG5ldyBSZWdFeHAoYF4oXFxcXHMqJHtpbWFnZVJlZ2V4U3RyaW5nfS4qPylcXFxcfD8oLio/KSRgLCAnbWcnKTtcblx0XHRcdGNvbnN0IG5ld3RleHQgPSBgJDF8JDIgJHtkYXRhfWA7XG5cdFx0XHR0aGlzLnRleHQgPSB0aGlzLnRleHQucmVwbGFjZShnYWxsZXJ5UmVnZXgsIG5ld3RleHQpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBSZW1vdmUgYWxsIHRyYW5zY2x1c2lvbnMgb2YgYSB0ZW1wbGF0ZSBmcm9tIHBhZ2UgdGV4dC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wbGF0ZSAtIFBhZ2UgbmFtZSB3aG9zZSB0cmFuc2NsdXNpb25zIGFyZSB0byBiZSByZW1vdmVkLFxuXHRcdCAqIGluY2x1ZGUgbmFtZXNwYWNlIHByZWZpeCBvbmx5IGlmIG5vdCBpbiB0ZW1wbGF0ZSBuYW1lc3BhY2UuXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLndpa2l0ZXh0LnBhZ2V9XG5cdFx0ICovXG5cdFx0cmVtb3ZlVGVtcGxhdGUodGVtcGxhdGUpIHtcblx0XHRcdGNvbnN0IHRlbXBsYXRlUmVnZXhTdHJpbmcgPSBNb3JlYml0cy5wYWdlTmFtZVJlZ2V4KHRlbXBsYXRlKTtcblx0XHRcdGNvbnN0IGxpbmtzUmVnZXggPSBuZXcgUmVnRXhwKFxuXHRcdFx0XHRgXFxcXHtcXFxceyg/OiR7TW9yZWJpdHMubmFtZXNwYWNlUmVnZXgoMTApfTopP1xcXFxzKiR7dGVtcGxhdGVSZWdleFN0cmluZ31cXFxccypbXFxcXHwoPzpcXFxcfVxcXFx9KV1gXG5cdFx0XHQpO1xuXHRcdFx0Y29uc3QgYWxsVGVtcGxhdGVzID0gTW9yZWJpdHMuc3RyaW5nLnNwbGl0V2VpZ2h0ZWRCeUtleXModGhpcy50ZXh0LCAne3snLCAnfX0nLCBbJ3t7eycsICd9fX0nXSk7XG5cdFx0XHRmb3IgKGNvbnN0IGFsbFRlbXBsYXRlIG9mIGFsbFRlbXBsYXRlcykge1xuXHRcdFx0XHRpZiAobGlua3NSZWdleC50ZXN0KGFsbFRlbXBsYXRlKSkge1xuXHRcdFx0XHRcdHRoaXMudGV4dCA9IHRoaXMudGV4dC5yZXBsYWNlKGFsbFRlbXBsYXRlLCAnJyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogU21hcnRseSBpbnNlcnQgYSB0YWcgYXRvcCBwYWdlIHRleHQgYnV0IGFmdGVyIHNwZWNpZmllZCB0ZW1wbGF0ZXMsXG5cdFx0ICogc3VjaCBhcyBoYXRub3Rlcywgc2hvcnQgZGVzY3JpcHRpb24sIG9yIGRlbGV0aW9uIGFuZCBwcm90ZWN0aW9uIHRlbXBsYXRlcy5cblx0XHQgKiBOb3RhYmx5LCBkb2VzICpub3QqIGluc2VydCBhIG5ld2xpbmUgYWZ0ZXIgdGhlIHRhZy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB0YWcgLSBUaGUgdGFnIHRvIGJlIGluc2VydGVkLlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSByZWdleCAtIFRlbXBsYXRlcyBhZnRlciB3aGljaCB0byBpbnNlcnQgdGFnLFxuXHRcdCAqIGdpdmVuIGFzIGVpdGhlciBhcyBhIChyZWdleC12YWxpZCkgc3RyaW5nIG9yIGFuIGFycmF5IHRvIGJlIGpvaW5lZCBieSBwaXBlcy5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gW2ZsYWdzPWldIC0gUmVnZXggZmxhZ3MgdG8gYXBwbHkuICBgJydgIHRvIHByb3ZpZGUgbm8gZmxhZ3M7XG5cdFx0ICogb3RoZXIgZmFsc2V5IHZhbHVlcyB3aWxsIGRlZmF1bHQgdG8gYGlgLlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBbcHJlUmVnZXhdIC0gT3B0aW9uYWwgcmVnZXggc3RyaW5nIG9yIGFycmF5IHRvIG1hdGNoXG5cdFx0ICogYmVmb3JlIGFueSB0ZW1wbGF0ZSBtYXRjaGVzIChpLmUuIGJlZm9yZSBge3tgKSwgc3VjaCBhcyBodG1sIGNvbW1lbnRzLlxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy53aWtpdGV4dC5wYWdlfVxuXHRcdCAqL1xuXHRcdGluc2VydEFmdGVyVGVtcGxhdGVzKHRhZywgcmVnZXgsIGZsYWdzLCBwcmVSZWdleCkge1xuXHRcdFx0aWYgKHRhZyA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ05vIHRhZyBwcm92aWRlZCcpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gLmxlbmd0aCBpcyBvbmx5IGEgcHJvcGVydHkgb2Ygc3RyaW5ncyBhbmQgYXJyYXlzIHNvIHdlXG5cdFx0XHQvLyBzaG91bGRuJ3QgbmVlZCB0byBjaGVjayB0eXBlXG5cdFx0XHRpZiAocmVnZXggPT09IHVuZGVmaW5lZCB8fCAhcmVnZXgubGVuZ3RoKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignTm8gcmVnZXggcHJvdmlkZWQnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShyZWdleCkpIHtcblx0XHRcdFx0cmVnZXggPSByZWdleC5qb2luKCd8Jyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodHlwZW9mIGZsYWdzICE9PSAnc3RyaW5nJykge1xuXHRcdFx0XHRmbGFncyA9ICdpJztcblx0XHRcdH1cblx0XHRcdGlmICghcHJlUmVnZXggfHwgIXByZVJlZ2V4Lmxlbmd0aCkge1xuXHRcdFx0XHRwcmVSZWdleCA9ICcnO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHByZVJlZ2V4KSkge1xuXHRcdFx0XHRwcmVSZWdleCA9IHByZVJlZ2V4LmpvaW4oJ3wnKTtcblx0XHRcdH1cblx0XHRcdC8vIFJlZ2V4IGlzIGV4dHJhIGNvbXBsaWNhdGVkIHRvIGFsbG93IGZvciB0ZW1wbGF0ZXMgd2l0aFxuXHRcdFx0Ly8gcGFyYW1ldGVycyBhbmQgdG8gaGFuZGxlIHdoaXRlc3BhY2UgcHJvcGVybHlcblx0XHRcdHRoaXMudGV4dCA9IHRoaXMudGV4dC5yZXBsYWNlKFxuXHRcdFx0XHRuZXcgUmVnRXhwKFxuXHRcdFx0XHRcdC8vIGxlYWRpbmcgd2hpdGVzcGFjZVxuXHRcdFx0XHRcdC8vIGNhcHR1cmUgdGVtcGxhdGUocylcblx0XHRcdFx0XHQvLyBQcmUtdGVtcGxhdGUgcmVnZXgsIHN1Y2ggYXMgbGVhZGluZyBodG1sIGNvbW1lbnRzXG5cdFx0XHRcdFx0Ly8gYmVnaW4gdGVtcGxhdGUgZm9ybWF0XG5cdFx0XHRcdFx0Ly8gVGVtcGxhdGUgcmVnZXhcblx0XHRcdFx0XHQvLyBlbmQgbWFpbiB0ZW1wbGF0ZSBuYW1lLCBvcHRpb25hbGx5IHdpdGggYSBudW1iZXJcblx0XHRcdFx0XHQvLyBQcm9iYWJseSByZW1vdmUgdGhlICg/OikgdGhvdWdoXG5cdFx0XHRcdFx0Ly8gdGVtcGxhdGUgcGFyYW1ldGVyc1xuXHRcdFx0XHRcdC8vIGVuZCB0ZW1wbGF0ZSBmb3JtYXRcblx0XHRcdFx0XHQvLyBlbmQgY2FwdHVyZVxuXHRcdFx0XHRcdC8vIHRyYWlsaW5nIHdoaXRlc3BhY2Vcblx0XHRcdFx0XHRgXlxcXFxzKig/OigoPzpcXFxccyoke1xuXHRcdFx0XHRcdFx0Ly8gUHJlLXRlbXBsYXRlIHJlZ2V4LCBzdWNoIGFzIGxlYWRpbmcgaHRtbCBjb21tZW50c1xuXHRcdFx0XHRcdFx0cHJlUmVnZXhcblx0XHRcdFx0XHR9fFxcXFx7XFxcXHtcXFxccyooPzoke1xuXHRcdFx0XHRcdFx0Ly8gVGVtcGxhdGUgcmVnZXhcblx0XHRcdFx0XHRcdHJlZ2V4XG5cdFx0XHRcdFx0fSlcXFxcZCpcXFxccyooXFxcXHwoPzpcXFxce1xcXFx7W157fV0qXFxcXH1cXFxcfXxbXnt9XSkqKT9cXFxcfVxcXFx9KSsoPzpcXFxccypcXFxcbik/KVxcXFxzKik/YCxcblx0XHRcdFx0XHRmbGFnc1xuXHRcdFx0XHQpLFxuXHRcdFx0XHRgJDEke3RhZ31gXG5cdFx0XHQpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBHZXQgdGhlIG1hbmlwdWxhdGVkIHdpa2l0ZXh0LlxuXHRcdCAqXG5cdFx0ICogQHJldHVybnMge3N0cmluZ31cblx0XHQgKi9cblx0XHRnZXRUZXh0KCkge1xuXHRcdFx0cmV0dXJuIHRoaXMudGV4dDtcblx0XHR9LFxuXHR9O1xuXHQvKiAqKioqKioqKioqKiBNb3JlYml0cy51c2Vyc3BhY2VMb2dnZXIgKioqKioqKioqKioqICovXG5cdC8qKlxuXHQgKiBIYW5kbGVzIGxvZ2dpbmcgYWN0aW9ucyB0byBhIHVzZXJzcGFjZSBsb2cuXG5cdCAqIFVzZWQgaW4gQ1NELCBQUk9ELCBhbmQgWEZELlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHNcblx0ICogQGNsYXNzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBsb2dQYWdlTmFtZSAtIFRpdGxlIG9mIHRoZSBzdWJwYWdlIG9mIHRoZSBjdXJyZW50IHVzZXIncyBsb2cuXG5cdCAqL1xuXHRNb3JlYml0cy51c2Vyc3BhY2VMb2dnZXIgPSBmdW5jdGlvbiAobG9nUGFnZU5hbWUpIHtcblx0XHRpZiAoIWxvZ1BhZ2VOYW1lKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ25vIGxvZyBwYWdlIG5hbWUgc3BlY2lmaWVkJyk7XG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIFRoZSB0ZXh0IHRvIHByZWZpeCB0aGUgbG9nIHdpdGggdXBvbiBjcmVhdGlvbiwgZGVmYXVsdHMgdG8gZW1wdHkuXG5cdFx0ICpcblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMuaW5pdGlhbFRleHQgPSAnJztcblx0XHQvKipcblx0XHQgKiBUaGUgaGVhZGVyIGxldmVsIHRvIHVzZSBmb3IgbW9udGhzLCBkZWZhdWx0cyB0byAzIChgPT09YCkuXG5cdFx0ICpcblx0XHQgKiBAdHlwZSB7bnVtYmVyfVxuXHRcdCAqL1xuXHRcdHRoaXMuaGVhZGVyTGV2ZWwgPSAzO1xuXHRcdHRoaXMuY2hhbmdlVGFncyA9ICcnO1xuXHRcdC8qKlxuXHRcdCAqIExvZyB0aGUgZW50cnkuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gbG9nVGV4dCAtIERvZXNuJ3QgaW5jbHVkZSBsZWFkaW5nIGAjYCBvciBgKmAuXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHN1bW1hcnlUZXh0IC0gRWRpdCBzdW1tYXJ5LlxuXHRcdCAqIEByZXR1cm5zIHtKUXVlcnkuUHJvbWlzZX1cblx0XHQgKi9cblx0XHR0aGlzLmxvZyA9IGZ1bmN0aW9uIChsb2dUZXh0LCBzdW1tYXJ5VGV4dCkge1xuXHRcdFx0Y29uc3QgZGVmID0gJC5EZWZlcnJlZCgpO1xuXHRcdFx0aWYgKCFsb2dUZXh0KSB7XG5cdFx0XHRcdHJldHVybiBkZWYucmVqZWN0KCk7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBwYWdlID0gbmV3IE1vcmViaXRzLndpa2kucGFnZShcblx0XHRcdFx0YFVzZXI6JHttdy5jb25maWcuZ2V0KCd3Z1VzZXJOYW1lJyl9LyR7bG9nUGFnZU5hbWV9YCxcblx0XHRcdFx0d2dVTFMoJ+WwhumhueebruWKoOWFpeWIsOeUqOaIt+epuumXtOaXpeW/lycsICflsIfpoIXnm67liqDlhaXliLDkvb/nlKjogIXnqbrplpPml6XoqownKVxuXHRcdFx0KTsgLy8gbWFrZSB0aGlzICcuLi4gdG8gJyArIGxvZ1BhZ2VOYW1lID9cblx0XHRcdHBhZ2UubG9hZCgocGFnZW9iaikgPT4ge1xuXHRcdFx0XHQvLyBhZGQgYmx1cmIgaWYgbG9nIHBhZ2UgZG9lc24ndCBleGlzdCBvciBpcyBibGFua1xuXHRcdFx0XHRsZXQgdGV4dCA9IHBhZ2VvYmouZ2V0UGFnZVRleHQoKSB8fCB0aGlzLmluaXRpYWxUZXh0O1xuXHRcdFx0XHQvLyBjcmVhdGUgbW9udGhseSBoZWFkZXIgaWYgaXQgZG9lc24ndCBleGlzdCBhbHJlYWR5XG5cdFx0XHRcdGNvbnN0IGRhdGUgPSBuZXcgTW9yZWJpdHMuZGF0ZShwYWdlb2JqLmdldExvYWRUaW1lKCkpO1xuXHRcdFx0XHRpZiAoIWRhdGUubW9udGhIZWFkZXJSZWdleCgpLmV4ZWModGV4dCkpIHtcblx0XHRcdFx0XHR0ZXh0ICs9IGBcXG5cXG4ke2RhdGUubW9udGhIZWFkZXIodGhpcy5oZWFkZXJMZXZlbCl9YDtcblx0XHRcdFx0fVxuXHRcdFx0XHRwYWdlb2JqLnNldFBhZ2VUZXh0KGAke3RleHR9XFxuJHtsb2dUZXh0fWApO1xuXHRcdFx0XHRwYWdlb2JqLnNldEVkaXRTdW1tYXJ5KHN1bW1hcnlUZXh0KTtcblx0XHRcdFx0cGFnZW9iai5zZXRDaGFuZ2VUYWdzKHRoaXMuY2hhbmdlVGFncyk7XG5cdFx0XHRcdHBhZ2VvYmouc2V0Q3JlYXRlT3B0aW9uKCdyZWNyZWF0ZScpO1xuXHRcdFx0XHRwYWdlb2JqLnNhdmUoZGVmLnJlc29sdmUsIGRlZi5yZWplY3QpO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gZGVmO1xuXHRcdH07XG5cdH07XG5cdC8qICoqKioqKioqKioqKioqKiogTW9yZWJpdHMuc3RhdHVzICoqKioqKioqKioqKioqKiogKi9cblx0LyoqXG5cdCAqIENyZWF0ZSBhbmQgc2hvdyBzdGF0dXMgbWVzc2FnZXMgb2YgdmFyeWluZyB1cmdlbmN5LlxuXHQgKiB7QGxpbmsgTW9yZWJpdHMuc3RhdHVzLmluaXR8TW9yZWJpdHMuc3RhdHVzLmluaXQoKX0gbXVzdCBiZSBjYWxsZWQgYmVmb3JlXG5cdCAqIGFueSBzdGF0dXMgb2JqZWN0IGlzIGNyZWF0ZWQsIG90aGVyd2lzZSB0aG9zZSBzdGF0dXNlcyB3b24ndCBiZSB2aXNpYmxlLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHNcblx0ICogQGNsYXNzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gVGV4dCBiZWZvcmUgdGhlIHRoZSBjb2xvbiBgOmAuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzdGF0IC0gVGV4dCBhZnRlciB0aGUgY29sb24gYDpgLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW3R5cGU9c3RhdHVzXSAtIERldGVybWluZSB0aGUgZm9udCBjb2xvciBvZiB0aGUgc3RhdHVzXG5cdCAqIGxpbmUsIGFsbG93YWJsZSB2YWx1ZXMgYXJlOiBgc3RhdHVzYCAoYmx1ZSksIGBpbmZvYCAoZ3JlZW4pLCBgd2FybmAgKHJlZCksXG5cdCAqIG9yIGBlcnJvcmAgKGJvbGQgcmVkKS5cblx0ICovXG5cdE1vcmViaXRzLnN0YXR1cyA9IGZ1bmN0aW9uICh0ZXh0LCBzdGF0LCB0eXBlKSB7XG5cdFx0dGhpcy50ZXh0UmF3ID0gdGV4dDtcblx0XHR0aGlzLnRleHQgPSBNb3JlYml0cy5jcmVhdGVIdG1sKHRleHQpO1xuXHRcdHRoaXMudHlwZSA9IHR5cGUgfHwgJ3N0YXR1cyc7XG5cdFx0dGhpcy5nZW5lcmF0ZSgpO1xuXHRcdGlmIChzdGF0KSB7XG5cdFx0XHR0aGlzLnVwZGF0ZShzdGF0LCB0eXBlKTtcblx0XHR9XG5cdH07XG5cdC8qKlxuXHQgKiBTcGVjaWZ5IGFuIGFyZWEgZm9yIHN0YXR1cyBtZXNzYWdlIGVsZW1lbnRzIHRvIGJlIGFkZGVkIHRvLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMuc3RhdHVzXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHJvb3QgLSBVc3VhbGx5IGEgZGl2IGVsZW1lbnQuXG5cdCAqIEB0aHJvd3MgSWYgYHJvb3RgIGlzIG5vdCBhbiBgSFRNTEVsZW1lbnRgLlxuXHQgKi9cblx0TW9yZWJpdHMuc3RhdHVzLmluaXQgPSAocm9vdCkgPT4ge1xuXHRcdGlmICghKHJvb3QgaW5zdGFuY2VvZiBFbGVtZW50KSkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignb2JqZWN0IG5vdCBhbiBpbnN0YW5jZSBvZiBFbGVtZW50Jyk7XG5cdFx0fVxuXHRcdHdoaWxlIChyb290Lmhhc0NoaWxkTm9kZXMoKSkge1xuXHRcdFx0cm9vdC5yZW1vdmVDaGlsZChyb290LmZpcnN0Q2hpbGQpO1xuXHRcdH1cblx0XHRNb3JlYml0cy5zdGF0dXMucm9vdCA9IHJvb3Q7XG5cdFx0TW9yZWJpdHMuc3RhdHVzLmVycm9yRXZlbnQgPSBudWxsO1xuXHR9O1xuXHRNb3JlYml0cy5zdGF0dXMucm9vdCA9IG51bGw7XG5cdC8qKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMuc3RhdHVzXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGhhbmRsZXIgLSBGdW5jdGlvbiB0byBleGVjdXRlIG9uIGVycm9yLlxuXHQgKiBAdGhyb3dzIFdoZW4gYGhhbmRsZXJgIGlzIG5vdCBhIGZ1bmN0aW9uLlxuXHQgKi9cblx0TW9yZWJpdHMuc3RhdHVzLm9uRXJyb3IgPSAoaGFuZGxlcikgPT4ge1xuXHRcdGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0TW9yZWJpdHMuc3RhdHVzLmVycm9yRXZlbnQgPSBoYW5kbGVyO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdNb3JlYml0cy5zdGF0dXMub25FcnJvcjogaGFuZGxlciBpcyBub3QgYSBmdW5jdGlvbicpO1xuXHRcdH1cblx0fTtcblx0TW9yZWJpdHMuc3RhdHVzLnByb3RvdHlwZSA9IHtcblx0XHRzdGF0OiBudWxsLFxuXHRcdHN0YXRSYXc6IG51bGwsXG5cdFx0dGV4dDogbnVsbCxcblx0XHR0ZXh0UmF3OiBudWxsLFxuXHRcdHR5cGU6ICdzdGF0dXMnLFxuXHRcdHRhcmdldDogbnVsbCxcblx0XHRub2RlOiBudWxsLFxuXHRcdGxpbmtlZDogZmFsc2UsXG5cdFx0LyoqIEFkZCB0aGUgc3RhdHVzIGVsZW1lbnQgbm9kZSB0byB0aGUgRE9NLiAqL1xuXHRcdGxpbmsoKSB7XG5cdFx0XHRpZiAoIXRoaXMubGlua2VkICYmIE1vcmViaXRzLnN0YXR1cy5yb290KSB7XG5cdFx0XHRcdE1vcmViaXRzLnN0YXR1cy5yb290LmFwcGVuZENoaWxkKHRoaXMubm9kZSk7XG5cdFx0XHRcdHRoaXMubGlua2VkID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdC8qKiBSZW1vdmUgdGhlIHN0YXR1cyBlbGVtZW50IG5vZGUgZnJvbSB0aGUgRE9NLiAqL1xuXHRcdHVubGluaygpIHtcblx0XHRcdGlmICh0aGlzLmxpbmtlZCkge1xuXHRcdFx0XHRNb3JlYml0cy5zdGF0dXMucm9vdC5yZW1vdmVDaGlsZCh0aGlzLm5vZGUpO1xuXHRcdFx0XHR0aGlzLmxpbmtlZCA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogVXBkYXRlIHRoZSBzdGF0dXMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gc3RhdHVzIC0gUGFydCBvZiBzdGF0dXMgbWVzc2FnZSBhZnRlciBjb2xvbi5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAtICdzdGF0dXMnIChibHVlKSwgJ2luZm8nIChncmVlbiksICd3YXJuJ1xuXHRcdCAqIChyZWQpLCBvciAnZXJyb3InIChib2xkIHJlZCkuXG5cdFx0ICovXG5cdFx0dXBkYXRlKHN0YXR1cywgdHlwZSkge1xuXHRcdFx0dGhpcy5zdGF0UmF3ID0gc3RhdHVzO1xuXHRcdFx0dGhpcy5zdGF0ID0gTW9yZWJpdHMuY3JlYXRlSHRtbChzdGF0dXMpO1xuXHRcdFx0aWYgKHR5cGUpIHtcblx0XHRcdFx0dGhpcy50eXBlID0gdHlwZTtcblx0XHRcdFx0aWYgKHR5cGUgPT09ICdlcnJvcicpIHtcblx0XHRcdFx0XHQvLyBoYWNrIHRvIGZvcmNlIHRoZSBwYWdlIG5vdCB0byByZWxvYWQgd2hlbiBhbiBlcnJvciBpcyBvdXRwdXQgLSBzZWUgYWxzbyBNb3JlYml0cy5zdGF0dXMoKSBhYm92ZVxuXHRcdFx0XHRcdE1vcmViaXRzLndpa2kubnVtYmVyT2ZBY3Rpb25zTGVmdCA9IDEwMDA7XG5cdFx0XHRcdFx0Ly8gY2FsbCBlcnJvciBjYWxsYmFja1xuXHRcdFx0XHRcdGlmIChNb3JlYml0cy5zdGF0dXMuZXJyb3JFdmVudCkge1xuXHRcdFx0XHRcdFx0TW9yZWJpdHMuc3RhdHVzLmVycm9yRXZlbnQoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gYWxzbyBsb2cgZXJyb3IgbWVzc2FnZXMgaW4gdGhlIGJyb3dzZXIgY29uc29sZVxuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoYFtNb3JlYml0c10gJHt0aGlzLnRleHRSYXd9OiAke3RoaXMuc3RhdFJhd31gKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5yZW5kZXIoKTtcblx0XHR9LFxuXHRcdC8qKiBQcm9kdWNlIHRoZSBodG1sIGZvciBmaXJzdCBwYXJ0IG9mIHRoZSBzdGF0dXMgbWVzc2FnZS4gKi9cblx0XHRnZW5lcmF0ZSgpIHtcblx0XHRcdHRoaXMubm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0dGhpcy5ub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSkuYXBwZW5kQ2hpbGQodGhpcy50ZXh0KTtcblx0XHRcdHRoaXMubm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJykpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCc6ICcpKTtcblx0XHRcdHRoaXMudGFyZ2V0ID0gdGhpcy5ub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSk7XG5cdFx0XHR0aGlzLnRhcmdldC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJykpOyAvLyBkdW1teSBub2RlXG5cdFx0fSxcblxuXHRcdC8qKiBDb21wbGV0ZSB0aGUgaHRtbCwgZm9yIHRoZSBzZWNvbmQgcGFydCBvZiB0aGUgc3RhdHVzIG1lc3NhZ2UuICovXG5cdFx0cmVuZGVyKCkge1xuXHRcdFx0dGhpcy5ub2RlLmNsYXNzTmFtZSA9IGBtb3JlYml0c19zdGF0dXNfJHt0aGlzLnR5cGV9YDtcblx0XHRcdHdoaWxlICh0aGlzLnRhcmdldC5oYXNDaGlsZE5vZGVzKCkpIHtcblx0XHRcdFx0dGhpcy50YXJnZXQucmVtb3ZlQ2hpbGQodGhpcy50YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnRhcmdldC5hcHBlbmRDaGlsZCh0aGlzLnN0YXQpO1xuXHRcdFx0dGhpcy5saW5rKCk7XG5cdFx0fSxcblx0XHRzdGF0dXMoc3RhdHVzKSB7XG5cdFx0XHR0aGlzLnVwZGF0ZShzdGF0dXMsICdzdGF0dXMnKTtcblx0XHR9LFxuXHRcdGluZm8oc3RhdHVzKSB7XG5cdFx0XHR0aGlzLnVwZGF0ZShzdGF0dXMsICdpbmZvJyk7XG5cdFx0fSxcblx0XHR3YXJuKHN0YXR1cykge1xuXHRcdFx0dGhpcy51cGRhdGUoc3RhdHVzLCAnd2FybicpO1xuXHRcdH0sXG5cdFx0ZXJyb3Ioc3RhdHVzKSB7XG5cdFx0XHR0aGlzLnVwZGF0ZShzdGF0dXMsICdlcnJvcicpO1xuXHRcdH0sXG5cdH07XG5cdC8qKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMuc3RhdHVzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gQmVmb3JlIGNvbG9uXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzdGF0dXMgLSBBZnRlciBjb2xvblxuXHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc3RhdHVzfSAtIGBzdGF0dXNgLXR5cGUgKGJsdWUpXG5cdCAqL1xuXHRNb3JlYml0cy5zdGF0dXMuc3RhdHVzID0gKHRleHQsIHN0YXR1cykgPT4ge1xuXHRcdHJldHVybiBuZXcgTW9yZWJpdHMuc3RhdHVzKHRleHQsIHN0YXR1cyk7XG5cdH07XG5cdC8qKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMuc3RhdHVzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gQmVmb3JlIGNvbG9uXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzdGF0dXMgLSBBZnRlciBjb2xvblxuXHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc3RhdHVzfSAtIGBpbmZvYC10eXBlIChncmVlbilcblx0ICovXG5cdE1vcmViaXRzLnN0YXR1cy5pbmZvID0gKHRleHQsIHN0YXR1cykgPT4ge1xuXHRcdHJldHVybiBuZXcgTW9yZWJpdHMuc3RhdHVzKHRleHQsIHN0YXR1cywgJ2luZm8nKTtcblx0fTtcblx0LyoqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5zdGF0dXNcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBCZWZvcmUgY29sb25cblx0ICogQHBhcmFtIHtzdHJpbmd9IHN0YXR1cyAtIEFmdGVyIGNvbG9uXG5cdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zdGF0dXN9IC0gYHdhcm5gLXR5cGUgKHJlZClcblx0ICovXG5cdE1vcmViaXRzLnN0YXR1cy53YXJuID0gKHRleHQsIHN0YXR1cykgPT4ge1xuXHRcdHJldHVybiBuZXcgTW9yZWJpdHMuc3RhdHVzKHRleHQsIHN0YXR1cywgJ3dhcm4nKTtcblx0fTtcblx0LyoqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5zdGF0dXNcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBCZWZvcmUgY29sb25cblx0ICogQHBhcmFtIHtzdHJpbmd9IHN0YXR1cyAtIEFmdGVyIGNvbG9uXG5cdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zdGF0dXN9IC0gYGVycm9yYC10eXBlIChib2xkIHJlZClcblx0ICovXG5cdE1vcmViaXRzLnN0YXR1cy5lcnJvciA9ICh0ZXh0LCBzdGF0dXMpID0+IHtcblx0XHRyZXR1cm4gbmV3IE1vcmViaXRzLnN0YXR1cyh0ZXh0LCBzdGF0dXMsICdlcnJvcicpO1xuXHR9O1xuXHQvKipcblx0ICogRm9yIHRoZSBhY3Rpb24gY29tcGxldGUgbWVzc2FnZSBhdCB0aGUgZW5kLCBjcmVhdGUgYSBzdGF0dXMgbGluZSB3aXRob3V0XG5cdCAqIGEgY29sb24gc2VwYXJhdG9yLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMuc3RhdHVzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0XG5cdCAqL1xuXHRNb3JlYml0cy5zdGF0dXMuYWN0aW9uQ29tcGxldGVkID0gKHRleHQpID0+IHtcblx0XHRjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0bm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdiJykpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpKTtcblx0XHRub2RlLmNsYXNzTmFtZSA9ICdtb3JlYml0c19zdGF0dXNfaW5mbyBtb3JlYml0c19hY3Rpb25fY29tcGxldGUnO1xuXHRcdGlmIChNb3JlYml0cy5zdGF0dXMucm9vdCkge1xuXHRcdFx0TW9yZWJpdHMuc3RhdHVzLnJvb3QuYXBwZW5kQ2hpbGQobm9kZSk7XG5cdFx0fVxuXHR9O1xuXHQvKipcblx0ICogRGlzcGxheSB0aGUgdXNlcidzIHJhdGlvbmFsZSwgY29tbWVudHMsIGV0Yy4gQmFjayB0byB0aGVtIGFmdGVyIGEgZmFpbHVyZSxcblx0ICogc28gdGhhdCB0aGV5IG1heSByZS11c2UgaXQuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5zdGF0dXNcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbW1lbnRzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlXG5cdCAqL1xuXHRNb3JlYml0cy5zdGF0dXMucHJpbnRVc2VyVGV4dCA9IChjb21tZW50cywgbWVzc2FnZSkgPT4ge1xuXHRcdGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdFx0cC5pbm5lckhUTUwgPSBtZXNzYWdlO1xuXHRcdGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdGRpdi5jbGFzc05hbWUgPSAnbW9yZWJpdHMtdXNlcnRleHQnO1xuXHRcdGRpdi5zdHlsZS5tYXJnaW5Ub3AgPSAnMCc7XG5cdFx0ZGl2LnN0eWxlLndoaXRlU3BhY2UgPSAncHJlLXdyYXAnO1xuXHRcdGRpdi50ZXh0Q29udGVudCA9IGNvbW1lbnRzO1xuXHRcdHAuYXBwZW5kQ2hpbGQoZGl2KTtcblx0XHRNb3JlYml0cy5zdGF0dXMucm9vdC5hcHBlbmRDaGlsZChwKTtcblx0fTtcblx0LyoqXG5cdCAqIFNpbXBsZSBoZWxwZXIgZnVuY3Rpb24gdG8gY3JlYXRlIGEgc2ltcGxlIG5vZGUuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gVHlwZSBvZiBIVE1MIGVsZW1lbnQuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50IC0gVGV4dCBjb250ZW50LlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW2NvbG9yXSAtIEZvbnQgY29sb3IuXG5cdCAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cblx0ICovXG5cdE1vcmViaXRzLmh0bWxOb2RlID0gKHR5cGUsIGNvbnRlbnQsIGNvbG9yKSA9PiB7XG5cdFx0Y29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG5cdFx0aWYgKGNvbG9yKSB7XG5cdFx0XHRub2RlLnN0eWxlLmNvbG9yID0gY29sb3I7XG5cdFx0fVxuXHRcdG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY29udGVudCkpO1xuXHRcdHJldHVybiBub2RlO1xuXHR9O1xuXHQvKipcblx0ICogQWRkIHNoaWZ0LWNsaWNrIHN1cHBvcnQgZm9yIGNoZWNrYm94ZXMuIFRoZSB3aWtpYml0cyB2ZXJzaW9uXG5cdCAqIChgd2luZG93LmFkZENoZWNrYm94Q2xpY2tIYW5kbGVyc2ApIGhhcyBzb21lIHJlc3RyaWN0aW9ucywgYW5kIGRvZXNuJ3Qgd29ya1xuXHQgKiB3aXRoIGNoZWNrYm94ZXMgaW5zaWRlIGEgc29ydGFibGUgdGFibGUsIHNvIGxldCdzIGJ1aWxkIG91ciBvd24uXG5cdCAqXG5cdCAqIEBwYXJhbSBqUXVlcnlTZWxlY3RvclxuXHQgKiBAcGFyYW0galF1ZXJ5Q29udGV4dFxuXHQgKi9cblx0TW9yZWJpdHMuY2hlY2tib3hTaGlmdENsaWNrU3VwcG9ydCA9IChqUXVlcnlTZWxlY3RvciwgalF1ZXJ5Q29udGV4dCkgPT4ge1xuXHRcdGxldCBsYXN0Q2hlY2tib3ggPSBudWxsO1xuXHRcdGNvbnN0IGNsaWNrSGFuZGxlciA9IGZ1bmN0aW9uIGNsaWNrSGFuZGxlcihldmVudCkge1xuXHRcdFx0Y29uc3QgdGhpc0NiID0gdGhpcztcblx0XHRcdGlmIChldmVudC5zaGlmdEtleSAmJiBsYXN0Q2hlY2tib3ggIT09IG51bGwpIHtcblx0XHRcdFx0Y29uc3QgY2JzID0gJChqUXVlcnlTZWxlY3RvciwgalF1ZXJ5Q29udGV4dCk7IC8vIGNhbid0IGNhY2hlIHRoZW0sIG9idmlvdXNseSwgaWYgd2Ugd2FudCB0byBzdXBwb3J0IHJlc29ydGluZ1xuXHRcdFx0XHRsZXQgaW5kZXggPSAtMTtcblx0XHRcdFx0bGV0IGxhc3RJbmRleCA9IC0xO1xuXHRcdFx0XHRsZXQgaTtcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGNicy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmIChjYnNbaV0gPT09IHRoaXNDYikge1xuXHRcdFx0XHRcdFx0aW5kZXggPSBpO1xuXHRcdFx0XHRcdFx0aWYgKGxhc3RJbmRleCA+IC0xKSB7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoY2JzW2ldID09PSBsYXN0Q2hlY2tib3gpIHtcblx0XHRcdFx0XHRcdGxhc3RJbmRleCA9IGk7XG5cdFx0XHRcdFx0XHRpZiAoaW5kZXggPiAtMSkge1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGluZGV4ID4gLTEgJiYgbGFzdEluZGV4ID4gLTEpIHtcblx0XHRcdFx0XHQvLyBpbnNwaXJlZCBieSB3aWtpYml0c1xuXHRcdFx0XHRcdGNvbnN0IGVuZFN0YXRlID0gdGhpc0NiLmNoZWNrZWQ7XG5cdFx0XHRcdFx0bGV0IHN0YXJ0O1xuXHRcdFx0XHRcdGxldCBmaW5pc2g7XG5cdFx0XHRcdFx0aWYgKGluZGV4IDwgbGFzdEluZGV4KSB7XG5cdFx0XHRcdFx0XHRzdGFydCA9IGluZGV4ICsgMTtcblx0XHRcdFx0XHRcdGZpbmlzaCA9IGxhc3RJbmRleDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0c3RhcnQgPSBsYXN0SW5kZXg7XG5cdFx0XHRcdFx0XHRmaW5pc2ggPSBpbmRleCAtIDE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGZvciAoaSA9IHN0YXJ0OyBpIDw9IGZpbmlzaDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRpZiAoY2JzW2ldLmNoZWNrZWQgIT09IGVuZFN0YXRlKSB7XG5cdFx0XHRcdFx0XHRcdGNic1tpXS5jbGljaygpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bGFzdENoZWNrYm94ID0gdGhpc0NiO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fTtcblx0XHQkKGpRdWVyeVNlbGVjdG9yLCBqUXVlcnlDb250ZXh0KS5vbignY2xpY2snLCBjbGlja0hhbmRsZXIpO1xuXHR9O1xuXHQvKiAqKioqKioqKioqKioqKioqIE1vcmViaXRzLmJhdGNoT3BlcmF0aW9uICoqKioqKioqKioqKioqKiogKi9cblx0LyoqXG5cdCAqIEl0ZXJhdGVzIG92ZXIgYSBncm91cCBvZiBwYWdlcyAob3IgYXJiaXRyYXJ5IG9iamVjdHMpIGFuZCBleGVjdXRlcyBhIHdvcmtlciBmdW5jdGlvblxuXHQgKiBmb3IgZWFjaC5cblx0ICpcblx0ICogYHNldFBhZ2VMaXN0KHBhZ2VMaXN0KWA6IFNldHMgdGhlIGxpc3Qgb2YgcGFnZXMgdG8gd29yayBvbi4gSXQgc2hvdWxkIGJlIGFuXG5cdCAqIGFycmF5IG9mIHBhZ2UgbmFtZXMgc3RyaW5ncy5cblx0ICpcblx0ICogYHNldE9wdGlvbihvcHRpb25OYW1lLCBvcHRpb25WYWx1ZSlgOiBTZXRzIGEga25vd24gb3B0aW9uOlxuXHQgKiAtIGBjaHVua1NpemVgIChpbnRlZ2VyKTogVGhlIHNpemUgb2YgY2h1bmtzIHRvIGJyZWFrIHRoZSBhcnJheSBpbnRvIChkZWZhdWx0XG5cdCAqIDUwKS4gU2V0dGluZyB0aGlzIHRvIGEgc21hbGwgdmFsdWUgKDw1KSBjYW4gY2F1c2UgcHJvYmxlbXMuXG5cdCAqIC0gYHByZXNlcnZlSW5kaXZpZHVhbFN0YXR1c0xpbmVzYCAoYm9vbGVhbik6IEtlZXAgZWFjaCBwYWdlJ3Mgc3RhdHVzIGVsZW1lbnRcblx0ICogdmlzaWJsZSB3aGVuIHdvcmtlciBpcyBjb21wbGV0ZT8gU2VlIG5vdGUgYmVsb3cuXG5cdCAqXG5cdCAqIGBydW4od29ya2VyLCBwb3N0RmluaXNoKWA6IFJ1bnMgdGhlIGNhbGxiYWNrIGB3b3JrZXJgIGZvciBlYWNoIHBhZ2UgaW4gdGhlXG5cdCAqIGxpc3QuICBUaGUgY2FsbGJhY2sgbXVzdCBjYWxsIGB3b3JrZXJTdWNjZXNzYCB3aGVuIHN1Y2NlZWRpbmcsIG9yXG5cdCAqIGB3b3JrZXJGYWlsdXJlYCB3aGVuIGZhaWxpbmcuICBJZiB1c2luZyB7QGxpbmsgTW9yZWJpdHMud2lraS5hcGl9IG9yXG5cdCAqIHtAbGluayBNb3JlYml0cy53aWtpLnBhZ2V9LCB0aGlzIGlzIGVhc2lseSBkb25lIGJ5IHBhc3NpbmcgdGhlc2UgdHdvXG5cdCAqIGZ1bmN0aW9ucyBhcyBwYXJhbWV0ZXJzIHRvIHRoZSBtZXRob2RzIG9uIHRob3NlIG9iamVjdHM6IGZvciBpbnN0YW5jZSxcblx0ICogYHBhZ2Uuc2F2ZShiYXRjaE9wLndvcmtlclN1Y2Nlc3MsIGJhdGNoT3Aud29ya2VyRmFpbHVyZSlgLiAgTWFrZSBzdXJlIHRoZVxuXHQgKiBtZXRob2RzIGFyZSBjYWxsZWQgZGlyZWN0bHkgaWYgc3BlY2lhbCBzdWNjZXNzL2ZhaWx1cmUgY2FzZXMgYXJpc2UuICBJZiB5b3Vcblx0ICogb21pdCB0byBjYWxsIHRoZXNlIG1ldGhvZHMsIHRoZSBiYXRjaCBvcGVyYXRpb24gd2lsbCBzdGFsbCBhZnRlciB0aGUgZmlyc3Rcblx0ICogY2h1bmshICBBbHNvIGVuc3VyZSB0aGF0IGVpdGhlciB3b3JrZXJTdWNjZXNzIG9yIHdvcmtlckZhaWx1cmUgaXMgY2FsbGVkIG5vXG5cdCAqIG1vcmUgdGhhbiBvbmNlLiAgVGhlIHNlY29uZCBjYWxsYmFjayBgcG9zdEZpbmlzaGAgaXMgZXhlY3V0ZWQgd2hlbiB0aGVcblx0ICogZW50aXJlIGJhdGNoIGhhcyBiZWVuIHByb2Nlc3NlZC5cblx0ICpcblx0ICogSWYgdXNpbmcgYHByZXNlcnZlSW5kaXZpZHVhbFN0YXR1c0xpbmVzYCwgeW91IHNob3VsZCB0cnkgdG8gZW5zdXJlIHRoYXQgdGhlXG5cdCAqIGB3b3JrZXJTdWNjZXNzYCBjYWxsYmFjayBoYXMgYWNjZXNzIHRvIHRoZSBwYWdlIHRpdGxlLiAgVGhpcyBpcyBubyBwcm9ibGVtIGZvclxuXHQgKiB7QGxpbmsgTW9yZWJpdHMud2lraS5wYWdlfSBvYmplY3RzLiAgQnV0IHdoZW4gdXNpbmcgdGhlIEFQSSwgcGxlYXNlIHNldCB0aGVcblx0ICogfHBhZ2VOYW1lfCBwcm9wZXJ0eSBvbiB0aGUge0BsaW5rIE1vcmViaXRzLndpa2kuYXBpfSBvYmplY3QuXG5cdCAqXG5cdCAqIFRoZXJlIGFyZSBzYW1wbGUgYmF0Y2hPcGVyYXRpb24gaW1wbGVtZW50YXRpb25zIHVzaW5nIE1vcmViaXRzLndpa2kucGFnZSBpblxuXHQgKiB0d2lua2xlYmF0Y2hkZWxldGUuanMsIHR3aW5rbGViYXRjaHVuZGVsZXRlLmpzLCBhbmQgdHdpbmtsZWJhdGNocHJvdGVjdC5qcy5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzXG5cdCAqIEBjbGFzc1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gW2N1cnJlbnRBY3Rpb25dXG5cdCAqL1xuXHRNb3JlYml0cy5iYXRjaE9wZXJhdGlvbiA9IGZ1bmN0aW9uIChjdXJyZW50QWN0aW9uKSB7XG5cdFx0Y29uc3QgY3R4ID0ge1xuXHRcdFx0Ly8gYmFja2luZyBmaWVsZHMgZm9yIHB1YmxpYyBwcm9wZXJ0aWVzXG5cdFx0XHRwYWdlTGlzdDogbnVsbCxcblx0XHRcdG9wdGlvbnM6IHtcblx0XHRcdFx0Y2h1bmtTaXplOiA1MCxcblx0XHRcdFx0cHJlc2VydmVJbmRpdmlkdWFsU3RhdHVzTGluZXM6IGZhbHNlLFxuXHRcdFx0fSxcblx0XHRcdC8vIGludGVybmFsIGNvdW50ZXJzLCBldGMuXG5cdFx0XHRzdGF0dXNFbGVtZW50OiBuZXcgTW9yZWJpdHMuc3RhdHVzKGN1cnJlbnRBY3Rpb24gfHwgd2dVTFMoJ+aJp+ihjOaJuemHj+aTjeS9nCcsICfln7fooYzmibnmrKHmk43kvZwnKSksXG5cdFx0XHR3b3JrZXI6IG51bGwsXG5cdFx0XHQvLyBmdW5jdGlvbiB0aGF0IGV4ZWN1dGVzIGZvciBlYWNoIGl0ZW0gaW4gcGFnZUxpc3Rcblx0XHRcdHBvc3RGaW5pc2g6IG51bGwsXG5cdFx0XHQvLyBmdW5jdGlvbiB0aGF0IGV4ZWN1dGVzIHdoZW4gdGhlIHdob2xlIGJhdGNoIGhhcyBiZWVuIHByb2Nlc3NlZFxuXHRcdFx0Y291bnRTdGFydGVkOiAwLFxuXHRcdFx0Y291bnRGaW5pc2hlZDogMCxcblx0XHRcdGNvdW50RmluaXNoZWRTdWNjZXNzOiAwLFxuXHRcdFx0Y3VycmVudENodW5rSW5kZXg6IC0xLFxuXHRcdFx0cGFnZUNodW5rczogW10sXG5cdFx0XHRydW5uaW5nOiBmYWxzZSxcblx0XHR9O1xuXHRcdC8vIHNob3VsZG4ndCBiZSBuZWVkZWQgYnkgZXh0ZXJuYWwgdXNlcnMsIGJ1dCBwcm92aWRlZCBhbnl3YXkgZm9yIG1heGltdW0gZmxleGliaWxpdHlcblx0XHR0aGlzLmdldFN0YXR1c0VsZW1lbnQgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gY3R4LnN0YXR1c0VsZW1lbnQ7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBTZXRzIHRoZSBsaXN0IG9mIHBhZ2VzIHRvIHdvcmsgb24uXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0FycmF5fSBwYWdlTGlzdCAtIEFycmF5IG9mIG9iamVjdHMgb3ZlciB3aGljaCB5b3Ugd2lzaCB0byBleGVjdXRlIHRoZSB3b3JrZXIgZnVuY3Rpb25cblx0XHQgKiBUaGlzIGlzIHVzdWFsbHkgdGhlIGxpc3Qgb2YgcGFnZSBuYW1lcyAoc3RyaW5ncykuXG5cdFx0ICovXG5cdFx0dGhpcy5zZXRQYWdlTGlzdCA9IChwYWdlTGlzdCkgPT4ge1xuXHRcdFx0Y3R4LnBhZ2VMaXN0ID0gcGFnZUxpc3Q7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBTZXRzIGEga25vd24gb3B0aW9uLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbk5hbWUgLSBOYW1lIG9mIHRoZSBvcHRpb246XG5cdFx0ICogLSBjaHVua1NpemUgKGludGVnZXIpOiBUaGUgc2l6ZSBvZiBjaHVua3MgdG8gYnJlYWsgdGhlIGFycmF5IGludG9cblx0XHQgKiAoZGVmYXVsdCA1MCkuIFNldHRpbmcgdGhpcyB0byBhIHNtYWxsIHZhbHVlICg8NSkgY2FuIGNhdXNlIHByb2JsZW1zLlxuXHRcdCAqIC0gcHJlc2VydmVJbmRpdmlkdWFsU3RhdHVzTGluZXMgKGJvb2xlYW4pOiBLZWVwIGVhY2ggcGFnZSdzIHN0YXR1c1xuXHRcdCAqIGVsZW1lbnQgdmlzaWJsZSB3aGVuIHdvcmtlciBpcyBjb21wbGV0ZT9cblx0XHQgKiBAcGFyYW0ge251bWJlcnxib29sZWFufSBvcHRpb25WYWx1ZSAtIFZhbHVlIHRvIHdoaWNoIHRoZSBvcHRpb24gaXNcblx0XHQgKiB0byBiZSBzZXQuIFNob3VsZCBiZSBhbiBpbnRlZ2VyIGZvciBjaHVua1NpemUgYW5kIGEgYm9vbGVhbiBmb3Jcblx0XHQgKiBwcmVzZXJ2ZUluZGl2aWR1YWxTdGF0dXNMaW5lcy5cblx0XHQgKi9cblx0XHR0aGlzLnNldE9wdGlvbiA9IChvcHRpb25OYW1lLCBvcHRpb25WYWx1ZSkgPT4ge1xuXHRcdFx0Y3R4Lm9wdGlvbnNbb3B0aW9uTmFtZV0gPSBvcHRpb25WYWx1ZTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIFJ1bnMgdGhlIGZpcnN0IGNhbGxiYWNrIGZvciBlYWNoIHBhZ2UgaW4gdGhlIGxpc3QuXG5cdFx0ICogVGhlIGNhbGxiYWNrIG11c3QgY2FsbCB3b3JrZXJTdWNjZXNzIHdoZW4gc3VjY2VlZGluZywgb3Igd29ya2VyRmFpbHVyZSB3aGVuIGZhaWxpbmcuXG5cdFx0ICogUnVucyB0aGUgb3B0aW9uYWwgc2Vjb25kIGNhbGxiYWNrIHdoZW4gdGhlIHdob2xlIGJhdGNoIGhhcyBiZWVuIHByb2Nlc3NlZC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IHdvcmtlclxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtwb3N0RmluaXNoXVxuXHRcdCAqL1xuXHRcdHRoaXMucnVuID0gKHdvcmtlciwgcG9zdEZpbmlzaCkgPT4ge1xuXHRcdFx0aWYgKGN0eC5ydW5uaW5nKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdnVUxTKCfmibnph4/mk43kvZzlt7LlnKjov5DooYwnLCAn5om55qyh5pON5L2c5bey5Zyo5Z+36KGMJykpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjdHgucnVubmluZyA9IHRydWU7XG5cdFx0XHRjdHgud29ya2VyID0gd29ya2VyO1xuXHRcdFx0Y3R4LnBvc3RGaW5pc2ggPSBwb3N0RmluaXNoO1xuXHRcdFx0Y3R4LmNvdW50U3RhcnRlZCA9IDA7XG5cdFx0XHRjdHguY291bnRGaW5pc2hlZCA9IDA7XG5cdFx0XHRjdHguY291bnRGaW5pc2hlZFN1Y2Nlc3MgPSAwO1xuXHRcdFx0Y3R4LmN1cnJlbnRDaHVua0luZGV4ID0gLTE7XG5cdFx0XHRjdHgucGFnZUNodW5rcyA9IFtdO1xuXHRcdFx0Y29uc3QgdG90YWwgPSBjdHgucGFnZUxpc3QubGVuZ3RoO1xuXHRcdFx0aWYgKCF0b3RhbCkge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5pbmZvKHdnVUxTKCfmsqHmnInmjIflrprpobXpnaInLCAn5rKS5pyJ5oyH5a6a6aCB6Z2iJykpO1xuXHRcdFx0XHRjdHgucnVubmluZyA9IGZhbHNlO1xuXHRcdFx0XHRpZiAoY3R4LnBvc3RGaW5pc2gpIHtcblx0XHRcdFx0XHRjdHgucG9zdEZpbmlzaCgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdC8vIGNodW5rIHBhZ2UgbGlzdCBpbnRvIG1vcmUgbWFuYWdlYWJsZSB1bml0c1xuXHRcdFx0Y3R4LnBhZ2VDaHVua3MgPSBNb3JlYml0cy5hcnJheS5jaHVuayhjdHgucGFnZUxpc3QsIGN0eC5vcHRpb25zLmNodW5rU2l6ZSk7XG5cdFx0XHQvLyBzdGFydCB0aGUgcHJvY2Vzc1xuXHRcdFx0TW9yZWJpdHMud2lraS5hZGRDaGVja3BvaW50KCk7XG5cdFx0XHRjdHguc3RhdHVzRWxlbWVudC5zdGF0dXMoJzAlJyk7XG5cdFx0XHRmblN0YXJ0TmV3Q2h1bmsoKTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIFRvIGJlIGNhbGxlZCBieSB3b3JrZXIgYmVmb3JlIGl0IHRlcm1pbmF0ZXMgc3VjY2Vzc2Z1bGx5LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHsoTW9yZWJpdHMud2lraS5wYWdlfE1vcmViaXRzLndpa2kuYXBpfHN0cmluZyl9IGFyZyAtXG5cdFx0ICogVGhpcyBzaG91bGQgYmUgdGhlIGBNb3JlYml0cy53aWtpLnBhZ2VgIG9yIGBNb3JlYml0cy53aWtpLmFwaWAgb2JqZWN0IHVzZWQgYnkgd29ya2VyXG5cdFx0ICogKGZvciB0aGUgYWRqdXN0bWVudCBvZiBzdGF0dXMgbGluZXMgZW1pdHRlZCBieSB0aGVtKS5cblx0XHQgKiBJZiBubyBNb3JlYml0cy53aWtpLiogb2JqZWN0IGlzIHVzZWQgKGUuZy4geW91J3JlIHVzaW5nIGBtdy5BcGkoKWAgb3Igc29tZXRoaW5nIGVsc2UpLCBhbmRcblx0XHQgKiBgcHJlc2VydmVJbmRpdmlkdWFsU3RhdHVzTGluZXNgIG9wdGlvbiBpcyBvbiwgZ2l2ZSB0aGUgcGFnZSBuYW1lIChzdHJpbmcpIGFzIGFyZ3VtZW50LlxuXHRcdCAqL1xuXHRcdHRoaXMud29ya2VyU3VjY2VzcyA9IChhcmcpID0+IHtcblx0XHRcdGlmIChhcmcgaW5zdGFuY2VvZiBNb3JlYml0cy53aWtpLmFwaSB8fCBhcmcgaW5zdGFuY2VvZiBNb3JlYml0cy53aWtpLnBhZ2UpIHtcblx0XHRcdFx0Ly8gdXBkYXRlIG9yIHJlbW92ZSBzdGF0dXMgbGluZVxuXHRcdFx0XHRjb25zdCBzdGF0ZWxlbSA9IGFyZy5nZXRTdGF0dXNFbGVtZW50KCk7XG5cdFx0XHRcdGlmIChjdHgub3B0aW9ucy5wcmVzZXJ2ZUluZGl2aWR1YWxTdGF0dXNMaW5lcykge1xuXHRcdFx0XHRcdGlmIChhcmcuZ2V0UGFnZU5hbWUgfHwgYXJnLnBhZ2VOYW1lIHx8IChhcmcucXVlcnkgJiYgYXJnLnF1ZXJ5LnRpdGxlKSkge1xuXHRcdFx0XHRcdFx0Ly8gd2Uga25vdyB0aGUgcGFnZSB0aXRsZSAtIGRpc3BsYXkgYSByZWxldmFudCBtZXNzYWdlXG5cdFx0XHRcdFx0XHRjb25zdCBwYWdlTmFtZSA9IGFyZy5nZXRQYWdlTmFtZSA/IGFyZy5nZXRQYWdlTmFtZSgpIDogYXJnLnBhZ2VOYW1lIHx8IGFyZy5xdWVyeS50aXRsZTtcblx0XHRcdFx0XHRcdHN0YXRlbGVtLmluZm8oYOWujOaIkO+8iFtbJHtwYWdlTmFtZX1dXe+8iWApO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHQvLyB3ZSBkb24ndCBrbm93IHRoZSBwYWdlIHRpdGxlIC0ganVzdCBkaXNwbGF5IGEgZ2VuZXJpYyBtZXNzYWdlXG5cdFx0XHRcdFx0XHRzdGF0ZWxlbS5pbmZvKCflrozmiJAnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gcmVtb3ZlIHRoZSBzdGF0dXMgbGluZSBhdXRvbWF0aWNhbGx5IHByb2R1Y2VkIGJ5IE1vcmViaXRzLndpa2kuKlxuXHRcdFx0XHRcdHN0YXRlbGVtLnVubGluaygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnICYmIGN0eC5vcHRpb25zLnByZXNlcnZlSW5kaXZpZHVhbFN0YXR1c0xpbmVzKSB7XG5cdFx0XHRcdG5ldyBNb3JlYml0cy5zdGF0dXMoYXJnLCBg5a6M5oiQ77yIW1ske2FyZ31dXe+8iWApO1xuXHRcdFx0fVxuXHRcdFx0Y3R4LmNvdW50RmluaXNoZWRTdWNjZXNzKys7XG5cdFx0XHRmbkRvbmVPbmUoKTtcblx0XHR9O1xuXHRcdHRoaXMud29ya2VyRmFpbHVyZSA9ICgpID0+IHtcblx0XHRcdGZuRG9uZU9uZSgpO1xuXHRcdH07XG5cdFx0Ly8gcHJpdmF0ZSBmdW5jdGlvbnNcblx0XHRjb25zdCB0aGlzUHJveHkgPSB0aGlzO1xuXHRcdGNvbnN0IGZuU3RhcnROZXdDaHVuayA9ICgpID0+IHtcblx0XHRcdGNvbnN0IGNodW5rID0gY3R4LnBhZ2VDaHVua3NbKytjdHguY3VycmVudENodW5rSW5kZXhdO1xuXHRcdFx0aWYgKCFjaHVuaykge1xuXHRcdFx0XHRyZXR1cm47IC8vIGRvbmUhIHlheVxuXHRcdFx0fVxuXHRcdFx0Ly8gc3RhcnQgd29ya2VycyBmb3IgdGhlIGN1cnJlbnQgY2h1bmtcblx0XHRcdGN0eC5jb3VudFN0YXJ0ZWQgKz0gY2h1bmsubGVuZ3RoO1xuXHRcdFx0Zm9yIChjb25zdCBwYWdlIG9mIGNodW5rKSB7XG5cdFx0XHRcdGN0eC53b3JrZXIocGFnZSwgdGhpc1Byb3h5KTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdGNvbnN0IGZuRG9uZU9uZSA9ICgpID0+IHtcblx0XHRcdGN0eC5jb3VudEZpbmlzaGVkKys7XG5cdFx0XHQvLyB1cGRhdGUgb3ZlcmFsbCBzdGF0dXMgbGluZVxuXHRcdFx0Y29uc3QgdG90YWwgPSBjdHgucGFnZUxpc3QubGVuZ3RoO1xuXHRcdFx0aWYgKGN0eC5jb3VudEZpbmlzaGVkIDwgdG90YWwpIHtcblx0XHRcdFx0Y29uc3QgcHJvZ3Jlc3MgPSBNYXRoLnJvdW5kKCgxMDAgKiBjdHguY291bnRGaW5pc2hlZCkgLyB0b3RhbCk7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LnN0YXR1cyhgJHtwcm9ncmVzc30lYCk7XG5cdFx0XHRcdC8vIHN0YXJ0IGEgbmV3IGNodW5rIGlmIHdlJ3JlIGNsb3NlIGVub3VnaCB0byB0aGUgZW5kIG9mIHRoZSBwcmV2aW91cyBjaHVuaywgYW5kXG5cdFx0XHRcdC8vIHdlIGhhdmVuJ3QgYWxyZWFkeSBzdGFydGVkIHRoZSBuZXh0IG9uZVxuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0Y3R4LmNvdW50RmluaXNoZWQgPj0gY3R4LmNvdW50U3RhcnRlZCAtIE1hdGgubWF4KGN0eC5vcHRpb25zLmNodW5rU2l6ZSAvIDEwLCAyKSAmJlxuXHRcdFx0XHRcdE1hdGguZmxvb3IoY3R4LmNvdW50RmluaXNoZWQgLyBjdHgub3B0aW9ucy5jaHVua1NpemUpID4gY3R4LmN1cnJlbnRDaHVua0luZGV4XG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdGZuU3RhcnROZXdDaHVuaygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGN0eC5jb3VudEZpbmlzaGVkID09PSB0b3RhbCkge1xuXHRcdFx0XHRjb25zdCBzdGF0dXNTdHJpbmcgPSBg5a6M5oiQ77yIJHtjdHguY291bnRGaW5pc2hlZFN1Y2Nlc3N9LyR7Y3R4LmNvdW50RmluaXNoZWR95pON5L2c5oiQ5Yqf5a6M5oiQ77yJYDtcblx0XHRcdFx0aWYgKGN0eC5jb3VudEZpbmlzaGVkU3VjY2VzcyA8IGN0eC5jb3VudEZpbmlzaGVkKSB7XG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQud2FybihzdGF0dXNTdHJpbmcpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmluZm8oc3RhdHVzU3RyaW5nKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoY3R4LnBvc3RGaW5pc2gpIHtcblx0XHRcdFx0XHRjdHgucG9zdEZpbmlzaCgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdE1vcmViaXRzLndpa2kucmVtb3ZlQ2hlY2twb2ludCgpO1xuXHRcdFx0XHRjdHgucnVubmluZyA9IGZhbHNlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gY3R4LmNvdW50RmluaXNoZWQgPiB0b3RhbFxuXHRcdFx0XHQvLyBqdXN0IGZvciBnaWdnbGVzISAod2VsbCwgc2VyaW91cyBkZWJ1Z2dpbmcsIGFjdHVhbGx5KVxuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC53YXJuKFxuXHRcdFx0XHRcdGAke3dnVUxTKCflrozmiJDvvIjlpJrmiafooYzkuoYnLCAn5a6M5oiQ77yI5aSa5Z+36KGM5LqGJykgKyAoY3R4LmNvdW50RmluaXNoZWQgLSB0b3RhbCl95qyh77yJYFxuXHRcdFx0XHQpO1xuXHRcdFx0XHRNb3JlYml0cy53aWtpLnJlbW92ZUNoZWNrcG9pbnQoKTtcblx0XHRcdFx0Y3R4LnJ1bm5pbmcgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9O1xuXHR9O1xuXHQvKipcblx0ICogQSBzaW1wbGUgZHJhZ2dhYmxlIHdpbmRvdywgbm93IGEgd3JhcHBlciBmb3IgalF1ZXJ5IFVJJ3MgZGlhbG9nIGZlYXR1cmUuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0c1xuXHQgKiBAY2xhc3Ncblx0ICogQHJlcXVpcmVzIGpxdWVyeS51aS5kaWFsb2dcblx0ICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgLSBUaGUgbWF4aW11bSBhbGxvd2FibGUgaGVpZ2h0IGZvciB0aGUgY29udGVudCBhcmVhLlxuXHQgKi9cblx0TW9yZWJpdHMuc2ltcGxlV2luZG93ID0gZnVuY3Rpb24gKHdpZHRoLCBoZWlnaHQpIHtcblx0XHRjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0dGhpcy5jb250ZW50ID0gY29udGVudDtcblx0XHRjb250ZW50LmNsYXNzTmFtZSA9ICdtb3JlYml0cy1kaWFsb2ctY29udGVudCc7XG5cdFx0Y29udGVudC5pZCA9IGBtb3JlYml0cy1kaWFsb2ctY29udGVudC0ke01hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDFlMTUpfWA7XG5cdFx0dGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG5cdFx0JCh0aGlzLmNvbnRlbnQpLmRpYWxvZyh7XG5cdFx0XHRhdXRvT3BlbjogZmFsc2UsXG5cdFx0XHRidXR0b25zOiB7XG5cdFx0XHRcdCdQbGFjZWhvbGRlciBidXR0b24nOiAoKSA9PiB7fSxcblx0XHRcdH0sXG5cdFx0XHRkaWFsb2dDbGFzczogJ21vcmViaXRzLWRpYWxvZycsXG5cdFx0XHR3aWR0aDogTWF0aC5taW4oTnVtYmVyLnBhcnNlSW50KHdpbmRvdy5pbm5lcldpZHRoLCAxMCksIE51bWJlci5wYXJzZUludCh3aWR0aCB8fCA4MDAsIDEwKSksXG5cdFx0XHQvLyBnaXZlIGpRdWVyeSB0aGUgZ2l2ZW4gaGVpZ2h0IHZhbHVlICh3aGljaCByZXByZXNlbnRzIHRoZSBhbnRpY2lwYXRlZCBoZWlnaHQgb2YgdGhlIGRpYWxvZykgaGVyZSwgc29cblx0XHRcdC8vIGl0IGNhbiBwb3NpdGlvbiB0aGUgZGlhbG9nIGFwcHJvcHJpYXRlbHlcblx0XHRcdC8vIHRoZSAyMCBwaXhlbHMgcmVwcmVzZW50cyBhZGp1c3RtZW50IGZvciB0aGUgZXh0cmEgaGVpZ2h0IG9mIHRoZSBqUXVlcnkgZGlhbG9nIFwiY2hyb21lXCIsIGNvbXBhcmVkXG5cdFx0XHQvLyB0byB0aGF0IG9mIHRoZSBvbGQgU2ltcGxlV2luZG93XG5cdFx0XHRoZWlnaHQ6IGhlaWdodCArIDIwLFxuXHRcdFx0Y2xvc2U6IChldmVudCkgPT4ge1xuXHRcdFx0XHQvLyBkaWFsb2dzIGFuZCB0aGVpciBjb250ZW50IGNhbiBiZSBkZXN0cm95ZWQgb25jZSBjbG9zZWRcblx0XHRcdFx0JChldmVudC50YXJnZXQpLmRpYWxvZygnZGVzdHJveScpLnJlbW92ZSgpO1xuXHRcdFx0fSxcblx0XHRcdHJlc2l6ZVN0YXJ0KCkge1xuXHRcdFx0XHRbdGhpcy5zY3JvbGxib3hdID0gJCh0aGlzKS5maW5kKCcubW9yZWJpdHMtc2Nyb2xsYm94Jyk7XG5cdFx0XHRcdGlmICh0aGlzLnNjcm9sbGJveCkge1xuXHRcdFx0XHRcdHRoaXMuc2Nyb2xsYm94LnN0eWxlLm1heEhlaWdodCA9ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHJlc2l6ZVN0b3AoKSB7XG5cdFx0XHRcdHRoaXMuc2Nyb2xsYm94ID0gbnVsbDtcblx0XHRcdH0sXG5cdFx0XHRyZXNpemUoKSB7XG5cdFx0XHRcdHRoaXMuc3R5bGUubWF4SGVpZ2h0ID0gJyc7XG5cdFx0XHRcdGlmICh0aGlzLnNjcm9sbGJveCkge1xuXHRcdFx0XHRcdHRoaXMuc2Nyb2xsYm94LnN0eWxlLndpZHRoID0gJyc7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0fSk7XG5cdFx0Y29uc3QgJHdpZGdldCA9ICQodGhpcy5jb250ZW50KS5kaWFsb2coJ3dpZGdldCcpO1xuXHRcdC8vIGRlbGV0ZSB0aGUgcGxhY2Vob2xkZXIgYnV0dG9uIChpdCdzIG9ubHkgdGhlcmUgc28gdGhlIGJ1dHRvbnBhbmUgZ2V0cyBjcmVhdGVkKVxuXHRcdCR3aWRnZXQuZmluZCgnYnV0dG9uJykuZWFjaCgoa2V5LCB2YWx1ZSkgPT4ge1xuXHRcdFx0dmFsdWUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh2YWx1ZSk7XG5cdFx0fSk7XG5cdFx0Ly8gYWRkIGNvbnRhaW5lciBmb3IgdGhlIGJ1dHRvbnMgd2UgYWRkLCBhbmQgdGhlIGZvb3RlciBsaW5rcyAoaWYgYW55KVxuXHRcdGNvbnN0IGJ1dHRvbnNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0YnV0dG9uc3Bhbi5jbGFzc05hbWUgPSAnbW9yZWJpdHMtZGlhbG9nLWJ1dHRvbnMnO1xuXHRcdGNvbnN0IGxpbmtzc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRsaW5rc3NwYW4uY2xhc3NOYW1lID0gJ21vcmViaXRzLWRpYWxvZy1mb290ZXJsaW5rcyc7XG5cdFx0JHdpZGdldC5maW5kKCcudWktZGlhbG9nLWJ1dHRvbnBhbmUnKS5hcHBlbmQoYnV0dG9uc3BhbiwgbGlua3NzcGFuKTtcblx0XHQvLyByZXNpemUgdGhlIHNjcm9sbGJveCB3aXRoIHRoZSBkaWFsb2csIGlmIG9uZSBpcyBwcmVzZW50XG5cdFx0JHdpZGdldC5yZXNpemFibGUoJ29wdGlvbicsICdhbHNvUmVzaXplJywgYCMke3RoaXMuY29udGVudC5pZH0gLm1vcmViaXRzLXNjcm9sbGJveCwgIyR7dGhpcy5jb250ZW50LmlkfWApO1xuXHR9O1xuXHRNb3JlYml0cy5zaW1wbGVXaW5kb3cucHJvdG90eXBlID0ge1xuXHRcdGJ1dHRvbnM6IFtdLFxuXHRcdGhlaWdodDogNjAwLFxuXHRcdGhhc0Zvb3RlckxpbmtzOiBmYWxzZSxcblx0XHRzY3JpcHROYW1lOiBudWxsLFxuXHRcdC8qKlxuXHRcdCAqIEZvY3VzZXMgdGhlIGRpYWxvZy4gVGhpcyBtaWdodCB3b3JrLCBvciBvbiB0aGUgY29udHJhcnksIGl0IG1pZ2h0IG5vdC5cblx0XHQgKlxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zaW1wbGVXaW5kb3d9XG5cdFx0ICovXG5cdFx0Zm9jdXMoKSB7XG5cdFx0XHQkKHRoaXMuY29udGVudCkuZGlhbG9nKCdtb3ZlVG9Ub3AnKTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogQ2xvc2VzIHRoZSBkaWFsb2cuIElmIHRoaXMgaXMgc2V0IGFzIGFuIGV2ZW50IGhhbmRsZXIsIGl0IHdpbGwgc3RvcCB0aGUgZXZlbnRcblx0XHQgKiBmcm9tIGRvaW5nIGFueXRoaW5nIG1vcmUuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge2V2ZW50fSBbZXZlbnRdXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLnNpbXBsZVdpbmRvd31cblx0XHQgKi9cblx0XHRjbG9zZShldmVudCkge1xuXHRcdFx0aWYgKGV2ZW50KSB7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR9XG5cdFx0XHQkKHRoaXMuY29udGVudCkuZGlhbG9nKCdjbG9zZScpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBTaG93cyB0aGUgZGlhbG9nLiBDYWxsaW5nIGRpc3BsYXkoKSBvbiBhIGRpYWxvZyB0aGF0IGhhcyBwcmV2aW91c2x5IGJlZW4gY2xvc2VkXG5cdFx0ICogbWlnaHQgd29yaywgYnV0IGl0IGlzIG5vdCBndWFyYW50ZWVkLlxuXHRcdCAqXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLnNpbXBsZVdpbmRvd31cblx0XHQgKi9cblx0XHRkaXNwbGF5KCkge1xuXHRcdFx0aWYgKHRoaXMuc2NyaXB0TmFtZSkge1xuXHRcdFx0XHRjb25zdCAkd2lkZ2V0ID0gJCh0aGlzLmNvbnRlbnQpLmRpYWxvZygnd2lkZ2V0Jyk7XG5cdFx0XHRcdCR3aWRnZXQuZmluZCgnLm1vcmViaXRzLWRpYWxvZy1zY3JpcHRuYW1lJykucmVtb3ZlKCk7XG5cdFx0XHRcdGNvbnN0IHNjcmlwdG5hbWVzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdFx0XHRzY3JpcHRuYW1lc3Bhbi5jbGFzc05hbWUgPSAnbW9yZWJpdHMtZGlhbG9nLXNjcmlwdG5hbWUnO1xuXHRcdFx0XHRzY3JpcHRuYW1lc3Bhbi50ZXh0Q29udGVudCA9IGAke3RoaXMuc2NyaXB0TmFtZX0gXFx1MDBCNyBgOyAvLyBVKzAwQjcgTUlERExFIERPVCA9ICZtaWRkb3Q7XG5cdFx0XHRcdCR3aWRnZXQuZmluZCgnLnVpLWRpYWxvZy10aXRsZScpLnByZXBlbmQoc2NyaXB0bmFtZXNwYW4pO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgZGlhbG9nID0gJCh0aGlzLmNvbnRlbnQpLmRpYWxvZygnb3BlbicpO1xuXHRcdFx0aWYgKHdpbmRvdy5zZXR1cFRvb2x0aXBzICYmIHdpbmRvdy5wZyAmJiB3aW5kb3cucGcucmUgJiYgd2luZG93LnBnLnJlLmRpZmYpIHtcblx0XHRcdFx0Ly8gdGllIGluIHdpdGggTkFWUE9QXG5cdFx0XHRcdGRpYWxvZy5wYXJlbnQoKVswXS5yYW5TZXR1cFRvb2x0aXBzQWxyZWFkeSA9IGZhbHNlO1xuXHRcdFx0XHR3aW5kb3cuc2V0dXBUb29sdGlwcyhkaWFsb2cucGFyZW50KClbMF0pO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zZXRIZWlnaHQodGhpcy5oZWlnaHQpOyAvLyBpbml0IGhlaWdodCBhbGdvcml0aG1cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogU2V0cyB0aGUgZGlhbG9nIHRpdGxlLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLnNpbXBsZVdpbmRvd31cblx0XHQgKi9cblx0XHRzZXRUaXRsZSh0aXRsZSkge1xuXHRcdFx0JCh0aGlzLmNvbnRlbnQpLmRpYWxvZygnb3B0aW9uJywgJ3RpdGxlJywgdGl0bGUpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBTZXRzIHRoZSBzY3JpcHQgbmFtZSwgYXBwZWFyaW5nIGFzIGEgcHJlZml4IHRvIHRoZSB0aXRsZSB0byBoZWxwIHVzZXJzIGRldGVybWluZSB3aGljaFxuXHRcdCAqIHVzZXIgc2NyaXB0IGlzIHByb2R1Y2luZyB3aGljaCBkaWFsb2cuIEZvciBpbnN0YW5jZSwgVHdpbmtsZSBtb2R1bGVzIHNldCB0aGlzIHRvIFwiVHdpbmtsZVwiLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc2ltcGxlV2luZG93fVxuXHRcdCAqL1xuXHRcdHNldFNjcmlwdE5hbWUobmFtZSkge1xuXHRcdFx0dGhpcy5zY3JpcHROYW1lID0gbmFtZTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogU2V0cyB0aGUgZGlhbG9nIHdpZHRoLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLnNpbXBsZVdpbmRvd31cblx0XHQgKi9cblx0XHRzZXRXaWR0aCh3aWR0aCkge1xuXHRcdFx0JCh0aGlzLmNvbnRlbnQpLmRpYWxvZygnb3B0aW9uJywgJ3dpZHRoJywgd2lkdGgpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBTZXRzIHRoZSBkaWFsb2cncyBtYXhpbXVtIGhlaWdodC4gVGhlIGRpYWxvZyB3aWxsIGF1dG8tc2l6ZSB0byBmaXQgaXRzIGNvbnRlbnRzLFxuXHRcdCAqIGJ1dCB0aGUgY29udGVudCBhcmVhIHdpbGwgZ3JvdyBubyBsYXJnZXIgdGhhbiB0aGUgaGVpZ2h0IGdpdmVuIGhlcmUuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0XG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLnNpbXBsZVdpbmRvd31cblx0XHQgKi9cblx0XHRzZXRIZWlnaHQoaGVpZ2h0KSB7XG5cdFx0XHR0aGlzLmhlaWdodCA9IGhlaWdodDtcblx0XHRcdC8vIGZyb20gZGlzcGxheSB0aW1lIG9ud2FyZHMsIGxldCB0aGUgYnJvd3NlciBkZXRlcm1pbmUgdGhlIG9wdGltdW0gaGVpZ2h0LFxuXHRcdFx0Ly8gYW5kIGluc3RlYWQgbGltaXQgdGhlIGhlaWdodCBhdCB0aGUgZ2l2ZW4gdmFsdWVcblx0XHRcdC8vIG5vdGUgdGhhdCB0aGUgZ2l2ZW4gaGVpZ2h0IHdpbGwgZXhjbHVkZSB0aGUgYXBwcm94LiAyMHB4IHRoYXQgdGhlIGpRdWVyeSBVSVxuXHRcdFx0Ly8gY2hyb21lIGhhcyBpbiBoZWlnaHQgaW4gYWRkaXRpb24gdG8gdGhlIGhlaWdodCBvZiBhbiBlcXVpdmFsZW50IFwiY2xhc3NpY1wiXG5cdFx0XHQvLyBNb3JlYml0cy5zaW1wbGVXaW5kb3dcblx0XHRcdGlmIChcblx0XHRcdFx0TnVtYmVyLnBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUoJCh0aGlzLmNvbnRlbnQpLmRpYWxvZygnd2lkZ2V0JylbMF0sIG51bGwpLmhlaWdodCwgMTApID5cblx0XHRcdFx0d2luZG93LmlubmVySGVpZ2h0XG5cdFx0XHQpIHtcblx0XHRcdFx0JCh0aGlzLmNvbnRlbnQpXG5cdFx0XHRcdFx0LmRpYWxvZygnb3B0aW9uJywgJ2hlaWdodCcsIHdpbmRvdy5pbm5lckhlaWdodCAtIDIpXG5cdFx0XHRcdFx0LmRpYWxvZygnb3B0aW9uJywgJ3Bvc2l0aW9uJywgJ3RvcCcpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JCh0aGlzLmNvbnRlbnQpLmRpYWxvZygnb3B0aW9uJywgJ2hlaWdodCcsICdhdXRvJyk7XG5cdFx0XHR9XG5cdFx0XHQkKHRoaXMuY29udGVudCkuZGlhbG9nKCd3aWRnZXQnKS5maW5kKCcubW9yZWJpdHMtZGlhbG9nLWNvbnRlbnQnKVswXS5zdHlsZS5tYXhIZWlnaHQgPSBgJHtOdW1iZXIucGFyc2VJbnQoXG5cdFx0XHRcdHRoaXMuaGVpZ2h0IC0gMzAsXG5cdFx0XHRcdDEwXG5cdFx0XHQpfXB4YDtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogU2V0cyB0aGUgY29udGVudCBvZiB0aGUgZGlhbG9nIHRvIHRoZSBnaXZlbiBlbGVtZW50IG5vZGUsIHVzdWFsbHkgZnJvbSByZW5kZXJpbmdcblx0XHQgKiBhIHtAbGluayBNb3JlYml0cy5xdWlja0Zvcm19LlxuXHRcdCAqIFJlLWVudW1lcmF0ZXMgdGhlIGZvb3RlciBidXR0b25zLCBidXQgbGVhdmVzIHRoZSBmb290ZXIgbGlua3MgYXMgdGhleSBhcmUuXG5cdFx0ICogQmUgc3VyZSB0byBjYWxsIHRoaXMgYXQgbGVhc3Qgb25jZSBiZWZvcmUgdGhlIGRpYWxvZyBpcyBkaXNwbGF5ZWQuLi5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRlbnRcblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc2ltcGxlV2luZG93fVxuXHRcdCAqL1xuXHRcdHNldENvbnRlbnQoY29udGVudCkge1xuXHRcdFx0dGhpcy5wdXJnZUNvbnRlbnQoKTtcblx0XHRcdHRoaXMuYWRkQ29udGVudChjb250ZW50KTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogQWRkcyB0aGUgZ2l2ZW4gZWxlbWVudCBub2RlIHRvIHRoZSBkaWFsb2cgY29udGVudC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRlbnRcblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc2ltcGxlV2luZG93fVxuXHRcdCAqL1xuXHRcdGFkZENvbnRlbnQoY29udGVudCkge1xuXHRcdFx0dGhpcy5jb250ZW50LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXHRcdFx0Ly8gbG9vayBmb3Igc3VibWl0IGJ1dHRvbnMgaW4gdGhlIGNvbnRlbnQsIGhpZGUgdGhlbSwgYW5kIGFkZCBhIHByb3h5IGJ1dHRvbiB0byB0aGUgYnV0dG9uIHBhbmVcblx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdFx0JCh0aGlzLmNvbnRlbnQpXG5cdFx0XHRcdC5maW5kKCdpbnB1dFt0eXBlPVwic3VibWl0XCJdLCBidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpXG5cdFx0XHRcdC5lYWNoKChrZXksIHZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0dmFsdWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0XHRjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0XHRcdFx0XHRpZiAodmFsdWUuaGFzQXR0cmlidXRlKCd2YWx1ZScpKSB7XG5cdFx0XHRcdFx0XHRidXR0b24udGV4dENvbnRlbnQgPSB2YWx1ZS5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmICh2YWx1ZS50ZXh0Q29udGVudCkge1xuXHRcdFx0XHRcdFx0YnV0dG9uLnRleHRDb250ZW50ID0gdmFsdWUudGV4dENvbnRlbnQ7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGJ1dHRvbi50ZXh0Q29udGVudCA9ICfmj5DkuqQnO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRidXR0b24uY2xhc3NOYW1lID0gdmFsdWUuY2xhc3NOYW1lIHx8ICdzdWJtaXRCdXR0b25Qcm94eSc7XG5cdFx0XHRcdFx0Ly8gaGVyZSBpcyBhbiBpbnN0YW5jZSBvZiBjaGVhcCBjb2RpbmcsIHByb2JhYmx5IGEgbWVtb3J5LXVzYWdlIGhpdCBpbiB1c2luZyBhIGNsb3N1cmUgaGVyZVxuXHRcdFx0XHRcdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFx0XHRcdFx0J2NsaWNrJyxcblx0XHRcdFx0XHRcdCgpID0+IHtcblx0XHRcdFx0XHRcdFx0dmFsdWUuY2xpY2soKTtcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRmYWxzZVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0c2VsZi5idXR0b25zLnB1c2goYnV0dG9uKTtcblx0XHRcdFx0fSk7XG5cdFx0XHQvLyByZW1vdmUgYWxsIGJ1dHRvbnMgZnJvbSB0aGUgYnV0dG9uIHBhbmUgYW5kIHJlLWFkZCB0aGVtXG5cdFx0XHRpZiAodGhpcy5idXR0b25zLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0JCh0aGlzLmNvbnRlbnQpXG5cdFx0XHRcdFx0LmRpYWxvZygnd2lkZ2V0Jylcblx0XHRcdFx0XHQuZmluZCgnLm1vcmViaXRzLWRpYWxvZy1idXR0b25zJylcblx0XHRcdFx0XHQuZW1wdHkoKVxuXHRcdFx0XHRcdC5hcHBlbmQodGhpcy5idXR0b25zKVswXVxuXHRcdFx0XHRcdC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtZW1wdHknKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCQodGhpcy5jb250ZW50KVxuXHRcdFx0XHRcdC5kaWFsb2coJ3dpZGdldCcpXG5cdFx0XHRcdFx0LmZpbmQoJy5tb3JlYml0cy1kaWFsb2ctYnV0dG9ucycpWzBdXG5cdFx0XHRcdFx0LnNldEF0dHJpYnV0ZSgnZGF0YS1lbXB0eScsICdkYXRhLWVtcHR5Jyk7IC8vIHVzZWQgYnkgQ1NTXG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogUmVtb3ZlcyBhbGwgY29udGVudHMgZnJvbSB0aGUgZGlhbG9nLCBiYXJyaW5nIGFueSBmb290ZXIgbGlua3MuXG5cdFx0ICpcblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc2ltcGxlV2luZG93fVxuXHRcdCAqL1xuXHRcdHB1cmdlQ29udGVudCgpIHtcblx0XHRcdHRoaXMuYnV0dG9ucyA9IFtdO1xuXHRcdFx0Ly8gZGVsZXRlIGFsbCBidXR0b25zIGluIHRoZSBidXR0b25wYW5lXG5cdFx0XHQkKHRoaXMuY29udGVudCkuZGlhbG9nKCd3aWRnZXQnKS5maW5kKCcubW9yZWJpdHMtZGlhbG9nLWJ1dHRvbnMnKS5lbXB0eSgpO1xuXHRcdFx0d2hpbGUgKHRoaXMuY29udGVudC5oYXNDaGlsZE5vZGVzKCkpIHtcblx0XHRcdFx0dGhpcy5jb250ZW50LnJlbW92ZUNoaWxkKHRoaXMuY29udGVudC5maXJzdENoaWxkKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogQWRkcyBhIGxpbmsgaW4gdGhlIGJvdHRvbS1yaWdodCBjb3JuZXIgb2YgdGhlIGRpYWxvZy5cblx0XHQgKiBUaGlzIGNhbiBiZSB1c2VkIHRvIHByb3ZpZGUgaGVscCBvciBwb2xpY3kgbGlua3MuXG5cdFx0ICogRm9yIGV4YW1wbGUsIFR3aW5rbGUncyBDU0QgbW9kdWxlIGFkZHMgYSBsaW5rIHRvIHRoZSBDU0QgcG9saWN5IHBhZ2UsXG5cdFx0ICogYXMgd2VsbCBhcyBhIGxpbmsgdG8gVHdpbmtsZSdzIGRvY3VtZW50YXRpb24uXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIERpc3BsYXkgdGV4dC5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gd2lraVBhZ2UgLSBMaW5rIHRhcmdldC5cblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtwcmVwPWZhbHNlXSAtIFNldCB0cnVlIHRvIHByZXBlbmQgcmF0aGVyIHRoYW4gYXBwZW5kLlxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zaW1wbGVXaW5kb3d9XG5cdFx0ICovXG5cdFx0YWRkRm9vdGVyTGluayh0ZXh0LCB3aWtpUGFnZSwgcHJlcCkge1xuXHRcdFx0Y29uc3QgJGZvb3RlcmxpbmtzID0gJCh0aGlzLmNvbnRlbnQpLmRpYWxvZygnd2lkZ2V0JykuZmluZCgnLm1vcmViaXRzLWRpYWxvZy1mb290ZXJsaW5rcycpO1xuXHRcdFx0aWYgKHRoaXMuaGFzRm9vdGVyTGlua3MpIHtcblx0XHRcdFx0Y29uc3QgYnVsbGV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdFx0XHRidWxsZXQudGV4dENvbnRlbnQgPSAnIFxcdTIwMjIgJzsgLy8gVSsyMDIyIEJVTExFVFxuXHRcdFx0XHRpZiAocHJlcCkge1xuXHRcdFx0XHRcdCRmb290ZXJsaW5rcy5wcmVwZW5kKGJ1bGxldCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0JGZvb3RlcmxpbmtzLmFwcGVuZChidWxsZXQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXHRcdFx0bGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBtdy51dGlsLmdldFVybCh3aWtpUGFnZSkpO1xuXHRcdFx0bGluay5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgd2lraVBhZ2UpO1xuXHRcdFx0bGluay5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcblx0XHRcdGxpbmsuc2V0QXR0cmlidXRlKCdyZWwnLCAnbm9vcGVuZXIgbm9yZWZlcnJlcicpO1xuXHRcdFx0bGluay50ZXh0Q29udGVudCA9IHRleHQ7XG5cdFx0XHRpZiAocHJlcCkge1xuXHRcdFx0XHQkZm9vdGVybGlua3MucHJlcGVuZChsaW5rKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCRmb290ZXJsaW5rcy5hcHBlbmQobGluayk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmhhc0Zvb3RlckxpbmtzID0gdHJ1ZTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogU2V0cyB3aGV0aGVyIHRoZSB3aW5kb3cgc2hvdWxkIGJlIG1vZGFsIG9yIG5vdC4gTW9kYWwgZGlhbG9ncyBjcmVhdGVcblx0XHQgKiBhbiBvdmVybGF5IGJlbG93IHRoZSBkaWFsb2cgYnV0IGFib3ZlIG90aGVyIHBhZ2UgZWxlbWVudHMuIFRoaXNcblx0XHQgKiBtdXN0IGJlIHVzZWQgKGlmIG5lY2Vzc2FyeSkgYmVmb3JlIGNhbGxpbmcgZGlzcGxheSgpLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBbbW9kYWw9ZmFsc2VdIC0gSWYgc2V0IHRvIHRydWUsIG90aGVyIGl0ZW1zIG9uIHRoZVxuXHRcdCAqIHBhZ2Ugd2lsbCBiZSBkaXNhYmxlZCwgaS5lLiwgY2Fubm90IGJlIGludGVyYWN0ZWQgd2l0aC5cblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc2ltcGxlV2luZG93fVxuXHRcdCAqL1xuXHRcdHNldE1vZGFsaXR5KG1vZGFsKSB7XG5cdFx0XHQkKHRoaXMuY29udGVudCkuZGlhbG9nKCdvcHRpb24nLCAnbW9kYWwnLCBtb2RhbCk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHR9O1xuXHQvKipcblx0ICogRW5hYmxlcyBvciBkaXNhYmxlcyBhbGwgZm9vdGVyIGJ1dHRvbnMgb24gYWxsIHtAbGluayBNb3JlYml0cy5zaW1wbGVXaW5kb3d9cyBpbiB0aGUgY3VycmVudCBwYWdlLlxuXHQgKiBUaGlzIHNob3VsZCBiZSBjYWxsZWQgd2l0aCBgZmFsc2VgIHdoZW4gdGhlIGJ1dHRvbihzKSBiZWNvbWUgaXJyZWxldmFudCAoZS5nLiBqdXN0IGJlZm9yZVxuXHQgKiB7QGxpbmsgTW9yZWJpdHMuc3RhdHVzLmluaXR9IGlzIGNhbGxlZCkuXG5cdCAqIFRoaXMgaXMgbm90IGFuIGluc3RhbmNlIG1ldGhvZCBzbyB0aGF0IGNvbnN1bWVycyBkb24ndCBoYXZlIHRvIGtlZXAgYSByZWZlcmVuY2UgdG8gdGhlXG5cdCAqIG9yaWdpbmFsIGBNb3JlYml0cy5zaW1wbGVXaW5kb3dgIG9iamVjdCBzaXR0aW5nIGFyb3VuZCBzb21ld2hlcmUuIEFueXdheSwgbW9zdCBvZiB0aGUgdGltZVxuXHQgKiB0aGVyZSB3aWxsIG9ubHkgYmUgb25lIGBNb3JlYml0cy5zaW1wbGVXaW5kb3dgIG9wZW4sIHNvIHRoaXMgc2hvdWxkbid0IG1hdHRlci5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnNpbXBsZVdpbmRvd1xuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IGVuYWJsZWRcblx0ICovXG5cdE1vcmViaXRzLnNpbXBsZVdpbmRvdy5zZXRCdXR0b25zRW5hYmxlZCA9IChlbmFibGVkKSA9PiB7XG5cdFx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdFx0JGJvZHkuZmluZCgnLm1vcmViaXRzLWRpYWxvZy1idXR0b25zIGJ1dHRvbicpLnByb3AoJ2Rpc2FibGVkJywgIWVuYWJsZWQpO1xuXHR9O1xufSkoalF1ZXJ5KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7QUFBQTtBQUFBLHdGQUFBQSxTQUFBO0FBQUE7QUFDQSxRQUFJLFFBQVEsU0FBVSxJQUFJO0FBQ3hCLGFBQU8sTUFBTSxHQUFHLFNBQVMsUUFBUTtBQUFBLElBQ25DO0FBR0EsSUFBQUEsUUFBTztBQUFBLElBRUwsTUFBTSxPQUFPLGNBQWMsWUFBWSxVQUFVLEtBQ2pELE1BQU0sT0FBTyxVQUFVLFlBQVksTUFBTTtBQUFBLElBRXpDLE1BQU0sT0FBTyxRQUFRLFlBQVksSUFBSSxLQUNyQyxNQUFNLE9BQU8sVUFBVSxZQUFZLE1BQU0sS0FDekMsTUFBTSxPQUFPLFdBQVEsWUFBWSxPQUFJO0FBQUEsSUFFcEMsMkJBQVk7QUFBRSxhQUFPO0FBQUEsSUFBTSxFQUFHLEtBQUssU0FBUyxhQUFhLEVBQUU7QUFBQTtBQUFBOzs7QUNmOUQ7QUFB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QUFLem1CLGFBQWEsUUFBUXhGLEdBQUdpRCxLQUFLQyxPQUFPZzNCLFFBQVEsQ0FBQztBQUNsRGpPLFdBQUt6bUIsYUFBYSxTQUFTMDBCLFFBQVE7QUFDbkNqTyxXQUFLem1CLGFBQWEsVUFBVSxRQUFRO0FBQ3BDeW1CLFdBQUt6bUIsYUFBYSxPQUFPLHFCQUFxQjtBQUM5Q3ltQixXQUFLamdCLGNBQWN2SjtBQUNuQixVQUFJMDNCLE1BQU07QUFDVEMscUJBQWFwVSxRQUFRaUcsSUFBSTtNQUMxQixPQUFPO0FBQ05tTyxxQkFBYTUxQixPQUFPeW5CLElBQUk7TUFDekI7QUFDQSxXQUFLNk0saUJBQWlCO0FBQ3RCLGFBQU87SUFDUjs7Ozs7Ozs7OztJQVVBd0IsWUFBWUMsT0FBTztBQUNsQjE3QixRQUFFLEtBQUtnRSxPQUFPLEVBQUVnMUIsT0FBTyxVQUFVLFNBQVMwQyxLQUFLO0FBQy9DLGFBQU87SUFDUjtFQUNEO0FBWUF6N0IsV0FBUzQ0QixhQUFhOEMsb0JBQXFCQyxhQUFZO0FBQ3RELFVBQU05NUIsUUFBUTlCLEVBQUUsTUFBTTtBQUN0QjhCLFVBQU1HLEtBQUssaUNBQWlDLEVBQUVnZCxLQUFLLFlBQVksQ0FBQzJjLE9BQU87RUFDeEU7QUFDRCxHQUFHQyxNQUFNOyIsCiAgIm5hbWVzIjogWyJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAibW9kdWxlIiwgImdsb2JhbCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbCIsICJTeW1ib2wiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgImRvY3VtZW50IiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIlR5cGVFcnJvciIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJyZXF1aXJlIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIm8iLCAiYWxsb3dBcnJheUxpa2UiLCAiaXQiLCAiU3ltYm9sIiwgIml0ZXJhdG9yIiwgIkFycmF5IiwgImlzQXJyYXkiLCAiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwgImxlbmd0aCIsICJpIiwgIkYiLCAicyIsICJuIiwgImRvbmUiLCAidmFsdWUiLCAiZSIsICJmIiwgIlR5cGVFcnJvciIsICJub3JtYWxDb21wbGV0aW9uIiwgImRpZEVyciIsICJlcnIiLCAiY2FsbCIsICJzdGVwIiwgIm5leHQiLCAicmV0dXJuIiwgIm1pbkxlbiIsICJfYXJyYXlMaWtlVG9BcnJheSIsICJPYmplY3QiLCAicHJvdG90eXBlIiwgInRvU3RyaW5nIiwgInNsaWNlIiwgImNvbnN0cnVjdG9yIiwgIm5hbWUiLCAiZnJvbSIsICJ0ZXN0IiwgImFyciIsICJsZW4iLCAiYXJyMiIsICJtb3JlYml0cyIsICIkIiwgIk1vcmViaXRzIiwgIndpbmRvdyIsICJsMTBuIiwgInJlZGlyZWN0VGFnQWxpYXNlcyIsICJzaWduYXR1cmVUaW1lc3RhbXBGb3JtYXQiLCAic3RyIiwgInJneFVUQyIsICJyZ3hDU1QiLCAibWF0Y2giLCAiZXhlYyIsICJtYXRjaENTVCIsICJtb250aCIsICJkYXRlIiwgImxvY2FsZURhdGEiLCAibW9udGhzIiwgImluZGV4T2YiLCAidXNlcklzSW5Hcm91cCIsICJncm91cCIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImluY2x1ZGVzIiwgInVzZXJJc1N5c29wIiwgInNhbml0aXplSVB2NiIsICJhZGRyZXNzIiwgImNvbnNvbGUiLCAid2FybiIsICJpcCIsICJpc1BhZ2VSZWRpcmVjdCIsICIkYm9keSIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgImZpbmQiLCAicGFnZU5hbWVOb3JtIiwgInJlcGxhY2UiLCAicGFnZU5hbWVSZWdleCIsICJwYWdlTmFtZSIsICJmaXJzdENoYXIiLCAicmVtYWluZGVyIiwgInN0cmluZyIsICJlc2NhcGVSZWdFeHAiLCAiVGl0bGUiLCAicGhwQ2hhclRvVXBwZXIiLCAidG9Mb3dlckNhc2UiLCAiY29uY2F0IiwgImNyZWF0ZUh0bWwiLCAiaW5wdXQiLCAiZnJhZ21lbnQiLCAiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsICJfaXRlcmF0b3IiLCAiX3N0ZXAiLCAiZWxlbWVudCIsICJOb2RlIiwgImFwcGVuZENoaWxkIiwgIl9pdGVyYXRvcjIiLCAicGFyc2VIVE1MIiwgInJlbmRlcldpa2lsaW5rcyIsICJfc3RlcDIiLCAibm9kZSIsICJ0ZXh0IiwgInViIiwgInVuYmluZGVyIiwgInVuYmluZCIsICJjb250ZW50IiwgIl8iLCAidGFyZ2V0IiwgInRleHRfIiwgInV0aWwiLCAiZ2V0VXJsIiwgInJlYmluZCIsICJuYW1lc3BhY2VSZWdleCIsICJuYW1lc3BhY2VzIiwgImFsaWFzZXMiLCAicmVnZXgiLCAiX2kiLCAiX09iamVjdCRlbnRyaWVzIiwgImVudHJpZXMiLCAibnVtYmVyIiwgInB1c2giLCAibWFwIiwgImNoYXIiLCAiam9pbiIsICJxdWlja0Zvcm0iLCAiZXZlbnQiLCAiZXZlbnRUeXBlIiwgInJvb3QiLCAidHlwZSIsICJyZW5kZXIiLCAicmV0IiwgIm5hbWVzIiwgImFwcGVuZCIsICJkYXRhIiwgImNoaWxkcyIsICJpZCIsICJjaGlsZCIsICJpbnRlcm5hbFN1Ymdyb3VwSWQiLCAiY3VycmVudE5vZGUiLCAiY29tcHV0ZSIsICJpbklkIiwgImNoaWxkQ29udGFpbmVyIiwgImxhYmVsIiwgImFkbWlub25seSIsICJjdXJyZW50IiwgInN1Ym5vZGUiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzc05hbWUiLCAic2V0QXR0cmlidXRlIiwgImFkZEV2ZW50TGlzdGVuZXIiLCAic2VsZWN0IiwgIm11bHRpcGxlIiwgInNpemUiLCAiZGlzYWJsZWQiLCAibGlzdCIsICJ2YWx1ZXMiLCAic2VsZWN0ZWQiLCAiaGlkZGVuIiwgImNyZWF0ZVRleHROb2RlIiwgImN1cklkIiwgImN1ckRpdiIsICJ0b29sdGlwIiwgImdlbmVyYXRlVG9vbHRpcCIsICJjaGVja2VkIiwgInN0eWxlIiwgInN1Ymdyb3VwIiwgInRtcGdyb3VwIiwgInN1Ymdyb3VwUmF3IiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgImVsIiwgIm5ld0VsIiwgInNob3duIiwgInBhcmVudE5vZGUiLCAiZm9ybSIsICJyZW1vdmVDaGlsZCIsICJzaGlmdENsaWNrU3VwcG9ydCIsICJjaGVja2JveFNoaWZ0Q2xpY2tTdXBwb3J0IiwgImdldEVsZW1lbnRzIiwgInBsYWNlaG9sZGVyIiwgIl9pMiIsICJfYXJyIiwgImF0dCIsICJfaTMiLCAiX2FycjIiLCAiX2k0IiwgIl9hcnIzIiwgIm1pbiIsICJtYXgiLCAiTnVtYmVyIiwgIlBPU0lUSVZFX0lORklOSVRZIiwgImxpc3ROb2RlIiwgIm1vcmUiLCAibmV3Tm9kZSIsICJzdWJsaXN0IiwgImFyZWEiLCAiY291bnRlciIsICJzdG9wUHJvcGFnYXRpb24iLCAibW9yZUJ1dHRvbiIsICJzdWJsYWJlbCIsICJyZW1vdmUiLCAibWF4bGVuZ3RoIiwgImVsZW0iLCAibW9yZWJ1dHRvbiIsICJsaXN0bm9kZSIsICJub2RlXyIsICJpbnB1dG5vZGUiLCAicmVtb3ZlQXR0cmlidXRlIiwgInJlbW92ZUJ1dHRvbiIsICJyZXN1bHQiLCAibGFiZWxFbGVtZW50IiwgImNvbHMiLCAicm93cyIsICJyZXF1aXJlZCIsICJyZWFkb25seSIsICJFcnJvciIsICJleHRyYSIsICIkZGF0YSIsICJ0b29sdGlwQnV0dG9uIiwgInRpdGxlIiwgInBvc2l0aW9uIiwgIm15IiwgImF0IiwgImNvbGxpc2lvbiIsICJ0b29sdGlwQ2xhc3MiLCAiZ2V0SW5wdXREYXRhIiwgIl9pdGVyYXRvcjQiLCAiZWxlbWVudHMiLCAiX3N0ZXA0IiwgImZpZWxkIiwgImZpZWxkTmFtZU5vcm0iLCAiZGF0YXNldCIsICJzaW5nbGUiLCAidmFsIiwgInRyaW0iLCAiZmllbGROYW1lIiwgIiRmb3JtIiwgImVzY2FwZVNlbGVjdG9yIiwgIiRlbGVtZW50cyIsICJ0b0FycmF5IiwgImdldENoZWNrYm94T3JSYWRpbyIsICJlbGVtZW50QXJyYXkiLCAiZm91bmQiLCAiZmlsdGVyIiwgImdldEVsZW1lbnRDb250YWluZXIiLCAiSFRNTEZpZWxkU2V0RWxlbWVudCIsICJIVE1MRGl2RWxlbWVudCIsICJIVE1MSGVhZGluZ0VsZW1lbnQiLCAiZ2V0RWxlbWVudExhYmVsT2JqZWN0IiwgIkhUTUxUZXh0QXJlYUVsZW1lbnQiLCAiZ2V0RWxlbWVudExhYmVsIiwgImZpcnN0Q2hpbGQiLCAidGV4dENvbnRlbnQiLCAic2V0RWxlbWVudExhYmVsIiwgImxhYmVsVGV4dCIsICJvdmVycmlkZUVsZW1lbnRMYWJlbCIsICJ0ZW1wb3JhcnlMYWJlbFRleHQiLCAiaGFzQXR0cmlidXRlIiwgInJlc2V0RWxlbWVudExhYmVsIiwgImdldEF0dHJpYnV0ZSIsICJzZXRFbGVtZW50VmlzaWJpbGl0eSIsICJ2aXNpYmlsaXR5IiwgInRvZ2dsZSIsICJzZXRFbGVtZW50VG9vbHRpcFZpc2liaWxpdHkiLCAiSFRNTEZvcm1FbGVtZW50IiwgImdldENoZWNrZWQiLCAicmV0dXJuQXJyYXkiLCAiSFRNTFNlbGVjdEVsZW1lbnQiLCAib3B0aW9ucyIsICJIVE1MSW5wdXRFbGVtZW50IiwgImdldFVuY2hlY2tlZCIsICJpc0lQdjZBZGRyZXNzIiwgInRvVXBwZXJDYXNlIiwgImFiYnJldlBvcyIsICJDSURSU3RhcnQiLCAiYWRkcmVzc0VuZCIsICJyZXBlYXQiLCAicGFkIiwgInJlcGxhY2VtZW50IiwgInNwbGl0IiwgImlzUmFuZ2UiLCAiaXNJUEFkZHJlc3MiLCAidmFsaWRDSURSIiwgInN1Ym5ldCIsICJwYXJzZUludCIsICJnZXQ2NCIsICJpcHY2IiwgInN1Ym5ldE1hdGNoIiwgImlwUmVnZXgiLCAidG9VcHBlckNhc2VGaXJzdENoYXIiLCAidG9Mb3dlckNhc2VGaXJzdENoYXIiLCAic3BsaXRXZWlnaHRlZEJ5S2V5cyIsICJzdGFydCIsICJlbmQiLCAic2tpcGxpc3QiLCAibGV2ZWwiLCAiaW5pdGlhbCIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJmb3JtYXRSZWFzb25UZXh0IiwgImFkZFNpZyIsICJyZWFzb24iLCAic2lnIiwgInNpZ0luZGV4IiwgImxhc3RJbmRleE9mIiwgImZvcm1hdFJlYXNvbkZvckxvZyIsICJzYWZlUmVwbGFjZSIsICJwYXR0ZXJuIiwgImlzSW5maW5pdHkiLCAiZXhwaXJ5IiwgImZvcm1hdFRpbWUiLCAidGltZSIsICJtIiwgIndnVUxTIiwgImFwcGVuZFB1bmN0dWF0aW9uIiwgInB1bmN0dWF0aW9uIiwgInNlYXJjaCIsICJhcnJheSIsICJ1bmlxIiwgIml0ZW0iLCAiaWR4IiwgImR1cHMiLCAiY2h1bmsiLCAibnVtQ2h1bmtzIiwgIk1hdGgiLCAiY2VpbCIsICJzZWxlY3QyIiwgIm1hdGNoZXJzIiwgIm9wdGdyb3VwRnVsbCIsICJwYXJhbXMiLCAib3JpZ2luYWxNYXRjaGVyIiwgImZuIiwgImRlZmF1bHRzIiwgIm1hdGNoZXIiLCAidGVybSIsICJjaGlsZHJlbiIsICJ3b3JkQmVnaW5uaW5nIiwgIlJlZ0V4cCIsICJoaWdobGlnaHRTZWFyY2hNYXRjaGVzIiwgInNlYXJjaFRlcm0iLCAic2VsZWN0MlNlYXJjaFF1ZXJ5IiwgImxvYWRpbmciLCAiY3NzIiwgInF1ZXJ5SW50ZXJjZXB0b3IiLCAiYXV0b1N0YXJ0IiwgImV2IiwgIndoaWNoIiwgImNsb3Nlc3QiLCAicHJldiIsICJkcm9wZG93biIsICIkc2VhcmNoIiwgInNlbGVjdGlvbiIsICJmb2N1cyIsICJoaXN0b3J5IiwgInByZWZpeCIsICJyYW5kb20iLCAicG9zdGZpeCIsICJyZSIsICJnZXRDYWxsYmFjayIsICJoYXNPd24iLCAic2VsZiIsICJhcmdzIiwgInBhcmFtIiwgImRpZ2l0TWF0Y2giLCAiX2QiLCAiRGF0ZSIsICJSZWZsZWN0IiwgImFwcGx5IiwgIlVUQyIsICJkYXRlUGFydHMiLCAiRnVuY3Rpb24iLCAiYmluZCIsICJpc1ZhbGlkIiwgImxvZyIsICJtb250aHNTaG9ydCIsICJkYXlzIiwgImRheXNTaG9ydCIsICJyZWxhdGl2ZVRpbWVzIiwgInRoaXNEYXkiLCAicHJldkRheSIsICJuZXh0RGF5IiwgInRoaXNXZWVrIiwgInBhc3RXZWVrIiwgIm90aGVyIiwgInVuaXRNYXAiLCAic2Vjb25kcyIsICJtaW51dGVzIiwgImhvdXJzIiwgIndlZWtzIiwgInllYXJzIiwgImlzTmFOIiwgImdldFRpbWUiLCAiaXNCZWZvcmUiLCAiaXNBZnRlciIsICJnZXRVVENNb250aE5hbWUiLCAiZ2V0VVRDTW9udGgiLCAiZ2V0VVRDTW9udGhOYW1lQWJicmV2IiwgImdldE1vbnRoTmFtZSIsICJnZXRNb250aCIsICJnZXRNb250aE5hbWVBYmJyZXYiLCAiZ2V0VVRDRGF5TmFtZSIsICJnZXRVVENEYXkiLCAiZ2V0VVRDRGF5TmFtZUFiYnJldiIsICJnZXREYXlOYW1lIiwgImdldERheSIsICJnZXREYXlOYW1lQWJicmV2IiwgImFkZCIsICJ1bml0IiwgIm51bSIsICJ1bml0Tm9ybSIsICJrZXlzIiwgInN1YnRyYWN0IiwgImZvcm1hdCIsICJmb3JtYXRzdHIiLCAiem9uZSIsICJ1ZGF0ZSIsICJnZXRUaW1lem9uZU9mZnNldCIsICJ0b0lTT1N0cmluZyIsICJoMjQiLCAiZ2V0SG91cnMiLCAiZ2V0TWludXRlcyIsICJnZXRTZWNvbmRzIiwgIm1zIiwgImdldE1pbGxpc2Vjb25kcyIsICJEIiwgImdldERhdGUiLCAiTSIsICJZIiwgImdldEZ1bGxZZWFyIiwgImgxMiIsICJhbU9yUG0iLCAicmVwbGFjZW1lbnRNYXAiLCAiSEgiLCAiSCIsICJoaCIsICJoIiwgIkEiLCAibW0iLCAic3MiLCAiU1NTIiwgImRkZGQiLCAiZGRkIiwgImQiLCAiREQiLCAiTU1NTSIsICJNTU0iLCAiTU0iLCAiWVlZWSIsICJZWSIsICJjYWxlbmRhciIsICJkYXRlRGlmZiIsICJzZXRIb3VycyIsICJtb250aEhlYWRlclJlZ2V4IiwgImdldFVUQ0Z1bGxZZWFyIiwgIm1vbnRoSGVhZGVyIiwgImhlYWRlciIsICJfaXRlcmF0b3I2IiwgImdldE93blByb3BlcnR5TmFtZXMiLCAiX3N0ZXA2IiwgImZ1bmMiLCAid2lraSIsICJudW1iZXJPZkFjdGlvbnNMZWZ0IiwgIm5ick9mQ2hlY2twb2ludHNMZWZ0IiwgImFjdGlvbkNvbXBsZXRlZCIsICJub3RpY2UiLCAic3RhdHVzIiwgInJlZGlyZWN0IiwgImZvbGxvd1JlZGlyZWN0IiwgInNldFRpbWVvdXQiLCAibG9jYXRpb24iLCAidGltZU91dCIsICJ3cEFjdGlvbkNvbXBsZXRlZFRpbWVPdXQiLCAiYWRkQ2hlY2twb2ludCIsICJyZW1vdmVDaGVja3BvaW50IiwgImFwaSIsICJjdXJyZW50QWN0aW9uIiwgInF1ZXJ5IiwgIm9uU3VjY2VzcyIsICJzdGF0dXNFbGVtZW50IiwgIm9uRXJyb3IiLCAiX3RoaXMkcXVlcnkiLCAiYXNzZXJ0IiwgImVycm9yZm9ybWF0IiwgInVzZWxhbmciLCAiZXJyb3JsYW5nIiwgImVycm9yc3VzZWxvY2FsIiwgInNldFN0YXR1c0VsZW1lbnQiLCAic3RhdGVsZW0iLCAiZm9ybWF0dmVyc2lvbiIsICJlcnJvciIsICJhY3Rpb24iLCAidGFncyIsICJtb3JlYml0c1dpa2lDaGFuZ2VUYWciLCAicGFyZW50IiwgInJlc3BvbnNlIiwgInJlc3BvbnNlWE1MIiwgInN0YXR1c1RleHQiLCAiZXJyb3JDb2RlIiwgImVycm9yVGV4dCIsICJiYWR0b2tlblJldHJ5IiwgInNldFBhcmVudCIsICJwb3N0IiwgImNhbGxlckFqYXhQYXJhbWV0ZXJzIiwgIl9xdWVyeVN0cmluZyIsICJfaTUiLCAiX09iamVjdCRlbnRyaWVzMiIsICJlbmNvZGVVUklDb21wb25lbnQiLCAicXVlcnlTdHJpbmciLCAiYWpheHBhcmFtcyIsICJjb250ZXh0IiwgInVybCIsICJ3aWtpU2NyaXB0IiwgImRhdGFUeXBlIiwgImhlYWRlcnMiLCAibW9yZWJpdHNXaWtpQXBpVXNlckFnZW50IiwgImFqYXgiLCAidGhlbiIsICJvbkFQSXN1Y2Nlc3MiLCAiZXJyb3JzIiwgImNvZGUiLCAiaHRtbCIsICJlcSIsICJhdHRyIiwgInJldHVybkVycm9yIiwgImluZm8iLCAiRGVmZXJyZWQiLCAicmVzb2x2ZVdpdGgiLCAib25BUElmYWlsdXJlIiwgImVycm9yVGhyb3duIiwgImdldFRva2VuIiwgInRva2VuIiwgInJlamVjdFdpdGgiLCAiZ2V0U3RhdHVzRWxlbWVudCIsICJnZXRFcnJvckNvZGUiLCAiZ2V0RXJyb3JUZXh0IiwgImdldFhNTCIsICJnZXRSZXNwb25zZSIsICJnZXRDYWNoZWRKc29uIiwgInByb3AiLCAidGl0bGVzIiwgInJ2c2xvdHMiLCAicnZwcm9wIiwgInNtYXhhZ2UiLCAibWF4YWdlIiwgImFwaW9iaiIsICJ1bmxpbmsiLCAid2lraXRleHQiLCAicGFnZXMiLCAicmV2aXNpb25zIiwgInNsb3RzIiwgIm1haW4iLCAiSlNPTiIsICJwYXJzZSIsICJzZXRBcGlVc2VyQWdlbnQiLCAidWEiLCAidG9rZW5BcGkiLCAibWV0YSIsICJ0b2tlbnMiLCAiY3NyZnRva2VuIiwgInBhZ2UiLCAiY3R4IiwgInBhZ2VFeGlzdHMiLCAiZWRpdFN1bW1hcnkiLCAiY2hhbmdlVGFncyIsICJ0ZXN0QWN0aW9ucyIsICJjYWxsYmFja1BhcmFtZXRlcnMiLCAicGFnZVRleHQiLCAiZWRpdE1vZGUiLCAiYXBwZW5kVGV4dCIsICJwcmVwZW5kVGV4dCIsICJuZXdTZWN0aW9uVGV4dCIsICJuZXdTZWN0aW9uVGl0bGUiLCAiY3JlYXRlT3B0aW9uIiwgIm1pbm9yRWRpdCIsICJib3RFZGl0IiwgInBhZ2VTZWN0aW9uIiwgIm1heENvbmZsaWN0UmV0cmllcyIsICJtYXhSZXRyaWVzIiwgImZvbGxvd0Nyb3NzTnNSZWRpcmVjdCIsICJ3YXRjaGxpc3RPcHRpb24iLCAid2F0Y2hsaXN0RXhwaXJ5IiwgImNyZWF0b3IiLCAidGltZXN0YW1wIiwgInJldmVydE9sZElEIiwgIm1vdmVEZXN0aW5hdGlvbiIsICJtb3ZlVGFsa1BhZ2UiLCAibW92ZVN1YnBhZ2VzIiwgIm1vdmVTdXBwcmVzc1JlZGlyZWN0IiwgInByb3RlY3RFZGl0IiwgInByb3RlY3RNb3ZlIiwgInByb3RlY3RDcmVhdGUiLCAicHJvdGVjdENhc2NhZGUiLCAibG9va3VwTm9uUmVkaXJlY3RDcmVhdG9yIiwgInBhZ2VMb2FkZWQiLCAiY3NyZlRva2VuIiwgImxvYWRUaW1lIiwgImxhc3RFZGl0VGltZSIsICJwYWdlSUQiLCAiY29udGVudE1vZGVsIiwgInJldmVydEN1cklEIiwgInJldmVydFVzZXIiLCAid2F0Y2hlZCIsICJmdWxseVByb3RlY3RlZCIsICJzdXBwcmVzc1Byb3RlY3RXYXJuaW5nIiwgImNvbmZsaWN0UmV0cmllcyIsICJyZXRyaWVzIiwgIm9uTG9hZFN1Y2Nlc3MiLCAib25Mb2FkRmFpbHVyZSIsICJvblNhdmVTdWNjZXNzIiwgIm9uU2F2ZUZhaWx1cmUiLCAib25Mb29rdXBDcmVhdGlvblN1Y2Nlc3MiLCAib25Mb29rdXBDcmVhdGlvbkZhaWx1cmUiLCAib25Nb3ZlU3VjY2VzcyIsICJvbk1vdmVGYWlsdXJlIiwgIm9uRGVsZXRlU3VjY2VzcyIsICJvbkRlbGV0ZUZhaWx1cmUiLCAib25VbmRlbGV0ZVN1Y2Nlc3MiLCAib25VbmRlbGV0ZUZhaWx1cmUiLCAib25Qcm90ZWN0U3VjY2VzcyIsICJvblByb3RlY3RGYWlsdXJlIiwgImxvYWRRdWVyeSIsICJsb2FkQXBpIiwgInNhdmVBcGkiLCAibG9va3VwQ3JlYXRpb25BcGkiLCAibW92ZUFwaSIsICJtb3ZlUHJvY2Vzc0FwaSIsICJwYXRyb2xBcGkiLCAicGF0cm9sUHJvY2Vzc0FwaSIsICJkZWxldGVBcGkiLCAiZGVsZXRlUHJvY2Vzc0FwaSIsICJ1bmRlbGV0ZUFwaSIsICJ1bmRlbGV0ZVByb2Nlc3NBcGkiLCAicHJvdGVjdEFwaSIsICJwcm90ZWN0UHJvY2Vzc0FwaSIsICJlbXB0eUZ1bmN0aW9uIiwgImxvYWQiLCAib25GYWlsdXJlIiwgImlucHJvcCIsICJpbnRlc3RhY3Rpb25zIiwgImN1cnRpbWVzdGFtcCIsICJydmxpbWl0IiwgInJ2c3RhcnRpZCIsICJyZWRpcmVjdHMiLCAicnZzZWN0aW9uIiwgImZuTG9hZFN1Y2Nlc3MiLCAic2F2ZSIsICJjYW5Vc2VNd1VzZXJUb2tlbiIsICJmbkNhblVzZU13VXNlclRva2VuIiwgImNvbmZpcm0iLCAic3VtbWFyeSIsICJ1c2VyIiwgIndhdGNobGlzdCIsICJmbkFwcGx5V2F0Y2hsaXN0RXhwaXJ5IiwgIndhdGNobGlzdGV4cGlyeSIsICJzZWN0aW9uIiwgIm1pbm9yIiwgIm5vdG1pbm9yIiwgImJvdCIsICJhcHBlbmR0ZXh0IiwgInByZXBlbmR0ZXh0IiwgInNlY3Rpb250aXRsZSIsICJ1bmRvIiwgInVuZG9hZnRlciIsICJiYXNldGltZXN0YW1wIiwgInN0YXJ0dGltZXN0YW1wIiwgImZuU2F2ZVN1Y2Nlc3MiLCAiZm5TYXZlRXJyb3IiLCAiZm5BdXRvU2F2ZSIsICJwcmVwZW5kIiwgIm5ld1NlY3Rpb24iLCAiZ2V0UGFnZU5hbWUiLCAiZ2V0UGFnZVRleHQiLCAic2V0UGFnZVRleHQiLCAic2V0QXBwZW5kVGV4dCIsICJzZXRQcmVwZW5kVGV4dCIsICJzZXROZXdTZWN0aW9uVGV4dCIsICJzZXROZXdTZWN0aW9uVGl0bGUiLCAic2V0RWRpdFN1bW1hcnkiLCAic2V0Q2hhbmdlVGFncyIsICJzZXRDcmVhdGVPcHRpb24iLCAic2V0TWlub3JFZGl0IiwgInNldEJvdEVkaXQiLCAic2V0UGFnZVNlY3Rpb24iLCAic2V0TWF4Q29uZmxpY3RSZXRyaWVzIiwgInNldE1heFJldHJpZXMiLCAic2V0V2F0Y2hsaXN0IiwgInNldFdhdGNobGlzdEV4cGlyeSIsICJzZXRXYXRjaGxpc3RGcm9tUHJlZmVyZW5jZXMiLCAic2V0Rm9sbG93UmVkaXJlY3QiLCAic2V0TG9va3VwTm9uUmVkaXJlY3RDcmVhdG9yIiwgImZsYWciLCAic2V0TW92ZURlc3RpbmF0aW9uIiwgImRlc3RpbmF0aW9uIiwgInNldE1vdmVUYWxrUGFnZSIsICJzZXRNb3ZlU3VicGFnZXMiLCAic2V0TW92ZVN1cHByZXNzUmVkaXJlY3QiLCAic2V0RWRpdFByb3RlY3Rpb24iLCAic2V0TW92ZVByb3RlY3Rpb24iLCAic2V0Q3JlYXRlUHJvdGVjdGlvbiIsICJzZXRDYXNjYWRpbmdQcm90ZWN0aW9uIiwgInNldE9sZElEIiwgIm9sZElEIiwgImdldEN1cnJlbnRJRCIsICJnZXRSZXZpc2lvblVzZXIiLCAiZ2V0TGFzdEVkaXRUaW1lIiwgInNldENhbGxiYWNrUGFyYW1ldGVycyIsICJnZXRDYWxsYmFja1BhcmFtZXRlcnMiLCAiZXhpc3RzIiwgImdldFBhZ2VJRCIsICJnZXRDb250ZW50TW9kZWwiLCAiZ2V0V2F0Y2hlZCIsICJnZXRMb2FkVGltZSIsICJnZXRDcmVhdG9yIiwgImdldENyZWF0aW9uVGltZXN0YW1wIiwgImNhbkVkaXQiLCAibG9va3VwQ3JlYXRpb24iLCAicnZkaXIiLCAiZm5Mb29rdXBDcmVhdGlvblN1Y2Nlc3MiLCAicmV2ZXJ0IiwgIm1vdmUiLCAiZm5QcmVmbGlnaHRDaGVja3MiLCAiZm5Qcm9jZXNzTW92ZSIsICJmbk5lZWRUb2tlbkluZm9RdWVyeSIsICJwYXRyb2wiLCAicGF0cm9saHJlZiIsICJyY2lkIiwgImdldFBhcmFtVmFsdWUiLCAiZm5Qcm9jZXNzUGF0cm9sIiwgInBhdHJvbFF1ZXJ5IiwgInJjcHJvcCIsICJyY3RpdGxlIiwgInJjbGltaXQiLCAiZGVsZXRlUGFnZSIsICJmblByb2Nlc3NEZWxldGUiLCAidW5kZWxldGVQYWdlIiwgImZuUHJvY2Vzc1VuZGVsZXRlIiwgInByb3RlY3QiLCAiZm5Qcm9jZXNzUHJvdGVjdCIsICJnZXRQcmVmaXhlZFRleHQiLCAiZWRpdFJlc3RyaWN0aW9uIiwgInBhZ2VvYmoiLCAiZm5DaGVja1BhZ2VOYW1lIiwgInJldiIsICJtaXNzaW5nIiwgInBhZ2VpZCIsICJjb250ZW50bW9kZWwiLCAiZWRpdFByb3QiLCAicHJvdGVjdGlvbiIsICJwciIsICJwb3AiLCAibGFzdHJldmlkIiwgInRlc3RhY3Rpb25zIiwgImFjdGlvbnMiLCAiX2k2IiwgIl9PYmplY3Qka2V5cyIsICJyZXZpZCIsICJ1c2VyaGlkZGVuIiwgImludmFsaWQiLCAicmVzb2x2ZWROYW1lIiwgIm9yaWdOcyIsICJuYW1lc3BhY2UiLCAibmV3TnMiLCAibmV3RXhwaXJ5IiwgInJlbCIsICJlZGl0IiwgImxpbmsiLCAiY2FwdGNoYSIsICJwdXJnZVF1ZXJ5IiwgInB1cmdlQXBpIiwgInNsZWVwIiwgImVycm9yRGF0YSIsICJhYnVzZWZpbHRlciIsICJkZXNjcmlwdGlvbiIsICJzcGFtIiwgInNwYW1ibGFja2xpc3QiLCAibWF0Y2hlcyIsICJpc1RleHRSZWRpcmVjdCIsICJzb21lIiwgInRhZyIsICJmbkxvb2t1cE5vblJlZGlyZWN0Q3JlYXRvciIsICJyZXZzIiwgIl9pdGVyYXRvcjciLCAiX3N0ZXA3IiwgImZuUHJvY2Vzc0NoZWNrcyIsICJhY3Rpb25NaXNzaW5nIiwgInByb3RlY3RNaXNzaW5nIiwgInNhbHRNaXNzaW5nIiwgImVkaXRwcm90IiwgInBhZ2VUaXRsZSIsICJ0byIsICJtb3ZldGFsayIsICJtb3Zlc3VicGFnZXMiLCAibm9yZWRpcmVjdCIsICJyZWNlbnRjaGFuZ2VzIiwgInVucGF0cm9sbGVkIiwgInBhdHJvbFN0YXQiLCAiZm5Qcm9jZXNzRGVsZXRlRXJyb3IiLCAiZm5Qcm9jZXNzVW5kZWxldGVFcnJvciIsICJwcnMiLCAibW92ZXByb3QiLCAiY3JlYXRlcHJvdCIsICJfaXRlcmF0b3I4IiwgIl9zdGVwOCIsICJzb3VyY2UiLCAiY2FzY2FkZSIsICJwcm90ZWN0aW9ucyIsICJleHBpcnlzIiwgIm1pbGxpc2Vjb25kcyIsICJkZWZlcnJlZCIsICJyZXNvbHZlIiwgInByZXZpZXciLCAicHJldmlld2JveCIsICJhZGRDbGFzcyIsICJoaWRlIiwgImJlZ2luUmVuZGVyIiwgInNlY3Rpb25UaXRsZSIsICJzaG93IiwgInN0YXR1c3NwYW4iLCAiaW5pdCIsICJwc3QiLCAiZGlzYWJsZWxpbWl0cmVwb3J0IiwgImRpc2FibGVlZGl0c2VjdGlvbiIsICJyZW5kZXJBcGkiLCAiZm5SZW5kZXJTdWNjZXNzIiwgImlubmVySFRNTCIsICJsb2FkZXIiLCAibW9kdWxlc3R5bGVzIiwgIm1vZHVsZXMiLCAiY2xvc2VQcmV2aWV3IiwgImVtcHR5IiwgInBhcnNlVGVtcGxhdGUiLCAiY291bnQiLCAidW5uYW1lZCIsICJlcXVhbHMiLCAicGFyYW1ldGVycyIsICJrZXkiLCAiZmluZFBhcmFtIiwgImZpbmFsIiwgInRlc3QzIiwgInRlc3QyIiwgImNoYXJBdCIsICJyZW1vdmVMaW5rIiwgImxpbmtUYXJnZXQiLCAibXdUaXRsZSIsICJuZXdGcm9tVGV4dCIsICJuYW1lc3BhY2VJRCIsICJnZXROYW1lc3BhY2VJZCIsICJnZXRNYWluVGV4dCIsICJsaW5rUmVnZXhTdHJpbmciLCAiaXNGaWxlT3JDYXRlZ29yeSIsICJjb2xvbiIsICJzaW1wbGVMaW5rUmVnZXgiLCAicGlwZWRMaW5rUmVnZXgiLCAiY29tbWVudE91dEltYWdlIiwgImltYWdlIiwgImltYWdlUmVnZXhTdHJpbmciLCAibGlua3NSZWdleCIsICJhbGxMaW5rcyIsICJfaXRlcmF0b3I5IiwgIl9zdGVwOSIsICJhbGxMaW5rIiwgImdhbGxlcnlJbWFnZVJlZ2V4IiwgImZyZWVJbWFnZVJlZ2V4IiwgImFkZFRvSW1hZ2VDb21tZW50IiwgIl9pdGVyYXRvcjEwIiwgIl9zdGVwMTAiLCAiZ2FsbGVyeVJlZ2V4IiwgIm5ld3RleHQiLCAicmVtb3ZlVGVtcGxhdGUiLCAidGVtcGxhdGUiLCAidGVtcGxhdGVSZWdleFN0cmluZyIsICJhbGxUZW1wbGF0ZXMiLCAiX2l0ZXJhdG9yMTEiLCAiX3N0ZXAxMSIsICJhbGxUZW1wbGF0ZSIsICJpbnNlcnRBZnRlclRlbXBsYXRlcyIsICJmbGFncyIsICJwcmVSZWdleCIsICJnZXRUZXh0IiwgInVzZXJzcGFjZUxvZ2dlciIsICJsb2dQYWdlTmFtZSIsICJpbml0aWFsVGV4dCIsICJoZWFkZXJMZXZlbCIsICJsb2dUZXh0IiwgInN1bW1hcnlUZXh0IiwgImRlZiIsICJyZWplY3QiLCAic3RhdCIsICJ0ZXh0UmF3IiwgImdlbmVyYXRlIiwgInVwZGF0ZSIsICJFbGVtZW50IiwgImhhc0NoaWxkTm9kZXMiLCAiZXJyb3JFdmVudCIsICJoYW5kbGVyIiwgInN0YXRSYXciLCAibGlua2VkIiwgInByaW50VXNlclRleHQiLCAiY29tbWVudHMiLCAibWVzc2FnZSIsICJwIiwgImRpdiIsICJtYXJnaW5Ub3AiLCAid2hpdGVTcGFjZSIsICJodG1sTm9kZSIsICJjb2xvciIsICJqUXVlcnlTZWxlY3RvciIsICJqUXVlcnlDb250ZXh0IiwgImxhc3RDaGVja2JveCIsICJjbGlja0hhbmRsZXIiLCAiY2xpY2tIYW5kbGVyMiIsICJ0aGlzQ2IiLCAic2hpZnRLZXkiLCAiY2JzIiwgImluZGV4IiwgImxhc3RJbmRleCIsICJlbmRTdGF0ZSIsICJmaW5pc2giLCAiY2xpY2siLCAib24iLCAiYmF0Y2hPcGVyYXRpb24iLCAicGFnZUxpc3QiLCAiY2h1bmtTaXplIiwgInByZXNlcnZlSW5kaXZpZHVhbFN0YXR1c0xpbmVzIiwgIndvcmtlciIsICJwb3N0RmluaXNoIiwgImNvdW50U3RhcnRlZCIsICJjb3VudEZpbmlzaGVkIiwgImNvdW50RmluaXNoZWRTdWNjZXNzIiwgImN1cnJlbnRDaHVua0luZGV4IiwgInBhZ2VDaHVua3MiLCAicnVubmluZyIsICJzZXRQYWdlTGlzdCIsICJzZXRPcHRpb24iLCAib3B0aW9uTmFtZSIsICJvcHRpb25WYWx1ZSIsICJydW4iLCAidG90YWwiLCAiZm5TdGFydE5ld0NodW5rIiwgIndvcmtlclN1Y2Nlc3MiLCAiYXJnIiwgImZuRG9uZU9uZSIsICJ3b3JrZXJGYWlsdXJlIiwgInRoaXNQcm94eSIsICJfaXRlcmF0b3IxMiIsICJfc3RlcDEyIiwgInByb2dyZXNzIiwgInJvdW5kIiwgImZsb29yIiwgInN0YXR1c1N0cmluZyIsICJzaW1wbGVXaW5kb3ciLCAid2lkdGgiLCAiaGVpZ2h0IiwgImRpYWxvZyIsICJhdXRvT3BlbiIsICJidXR0b25zIiwgIlBsYWNlaG9sZGVyIGJ1dHRvbiIsICJkaWFsb2dDbGFzcyIsICJpbm5lcldpZHRoIiwgImNsb3NlIiwgInJlc2l6ZVN0YXJ0IiwgInNjcm9sbGJveCIsICJtYXhIZWlnaHQiLCAicmVzaXplU3RvcCIsICJyZXNpemUiLCAiJHdpZGdldCIsICJlYWNoIiwgImJ1dHRvbnNwYW4iLCAibGlua3NzcGFuIiwgInJlc2l6YWJsZSIsICJoYXNGb290ZXJMaW5rcyIsICJzY3JpcHROYW1lIiwgInByZXZlbnREZWZhdWx0IiwgImRpc3BsYXkiLCAic2NyaXB0bmFtZXNwYW4iLCAic2V0dXBUb29sdGlwcyIsICJwZyIsICJkaWZmIiwgInJhblNldHVwVG9vbHRpcHNBbHJlYWR5IiwgInNldEhlaWdodCIsICJzZXRUaXRsZSIsICJzZXRTY3JpcHROYW1lIiwgInNldFdpZHRoIiwgImdldENvbXB1dGVkU3R5bGUiLCAiaW5uZXJIZWlnaHQiLCAic2V0Q29udGVudCIsICJwdXJnZUNvbnRlbnQiLCAiYWRkQ29udGVudCIsICJidXR0b24iLCAiYWRkRm9vdGVyTGluayIsICJ3aWtpUGFnZSIsICJwcmVwIiwgIiRmb290ZXJsaW5rcyIsICJidWxsZXQiLCAic2V0TW9kYWxpdHkiLCAibW9kYWwiLCAic2V0QnV0dG9uc0VuYWJsZWQiLCAiZW5hYmxlZCIsICJqUXVlcnkiXQp9Cg==

})();

/* </nowiki> */

/**
 * SPDX-License-Identifier: MIT
 * _addText: '{{Gadget Header|license=MIT}}'
 *
 * @base {@link https://github.com/atomiks/tippyjs}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Tippy}
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
      } catch (error) {
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
    module2.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn6) {
      return function() {
        return call.apply(fn6, arguments);
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
      } catch (error) {
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
      var fn6, val;
      if (pref === "string" && isCallable(fn6 = input.toString) && !isObject(val = call(fn6, input)))
        return val;
      if (isCallable(fn6 = input.valueOf) && !isObject(val = call(fn6, input)))
        return val;
      if (pref !== "string" && isCallable(fn6 = input.toString) && !isObject(val = call(fn6, input)))
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
      } catch (error) {
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
        } catch (error) {
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
    var max2 = Math.max;
    var min2 = Math.min;
    module2.exports = function(index, length) {
      var integer = toIntegerOrInfinity(index);
      return integer < 0 ? max2(integer + length, 0) : min2(integer, length);
    };
  }
});

// node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/to-length.js
var require_to_length = __commonJS({
  "node_modules/.pnpm/core-js@3.35.1/node_modules/core-js/internals/to-length.js"(exports2, module2) {
    "use strict";
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var min2 = Math.min;
    module2.exports = function(argument) {
      var len = toIntegerOrInfinity(argument);
      return len > 0 ? min2(len, 9007199254740991) : 0;
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

// dist/Tippy/Tippy.js
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
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames2 = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true
    });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    var _iterator = _createForOfIteratorHelper(__getOwnPropNames2(from)), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        let key = _step.value;
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, {
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);
//! src/Tippy/Tippy.ts
var Tippy_exports = {};
__export(Tippy_exports, {
  animateFill: () => animateFill,
  createSingleton: () => createSingleton,
  delegate: () => delegate,
  followCursor: () => followCursor,
  hideAll: () => hideAll,
  inlinePositioning: () => inlinePositioning,
  roundArrow: () => ROUND_ARROW,
  sticky: () => sticky,
  tippy: () => tippy_esm_default
});
module.exports = __toCommonJS(Tippy_exports);
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
var applyStyles_default = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect,
  requires: ["computeStyles"]
};
function getBasePlacement(placement) {
  return placement.split("-")[0];
}
var max = Math.max;
var min = Math.min;
var round = Math.round;
function getUAString() {
  var uaData = navigator.userAgentData;
  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function(item) {
      return item.brand + "/" + item.version;
    }).join(" ");
  }
  return navigator.userAgent;
}
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x,
    y
  };
}
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : (
    // $FlowFixMe[prop-missing]
    element.document
  )) || window.document).documentElement;
}
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element)
  );
}
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}
function within(min2, value, max2) {
  return max(min2, min(value, max2));
}
function withinMaxClamp(min2, value, max2) {
  var v = within(min2, value, max2);
  return v > max2 ? max2 : v;
}
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect2(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }
  state.elements.arrow = arrowElement;
}
var arrow_default = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect2,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function getVariation(placement) {
  return placement.split("-")[1];
}
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref, win) {
  var x = _ref.x, y = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        offsetParent[heightProp]
      );
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        offsetParent[widthProp]
      );
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x,
    y
  }, getWindow(popper2)) : {
    x,
    y
  };
  x = _ref4.x;
  y = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
var computeStyles_default = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};
var passive = {
  passive: true
};
function effect3(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
var eventListeners_default = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect: effect3,
  data: {}
};
var hash = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash[matched];
  });
}
var hash2 = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash2[matched];
  });
}
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x + getWindowScrollBarX(element),
    y
  };
}
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;
  if (getComputedStyle(body || html).direction === "rtl") {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)))
  );
}
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === "fixed");
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
      default:
    }
  }
  return offsets;
}
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements2 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements2.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements2;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b) {
    return overflows[a] - overflows[b];
  });
}
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i = 0; i < placements2.length; i++) {
    var placement = placements2[i];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break")
        break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
var flip_default = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
var hide_default = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }
  state.modifiersData[name] = data;
}
var offset_default = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
var popperOffsets_default = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min2 = offset2 + overflow[mainSide];
    var max2 = offset2 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min2, tetherMin) : min2, offset2, tether ? max(max2, tetherMax) : max2);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
var preventOverflow_default = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
function order(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
function debounce(fn6) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn6());
        });
      });
    }
    return pending;
  };
}
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper2(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m) {
          return m.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn6 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn6 === "function") {
            state = fn6({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref) {
        var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect5 = _ref.effect;
        if (typeof effect5 === "function") {
          var cleanupFn = effect5({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn6) {
        return fn6();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var defaultModifiers = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default, offset_default, flip_default, preventOverflow_default, arrow_default, hide_default];
var createPopper = /* @__PURE__ */ popperGenerator({
  defaultModifiers
});
var ROUND_ARROW = '<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>';
var BOX_CLASS = "tippy-box";
var CONTENT_CLASS = "tippy-content";
var BACKDROP_CLASS = "tippy-backdrop";
var ARROW_CLASS = "tippy-arrow";
var SVG_ARROW_CLASS = "tippy-svg-arrow";
var TOUCH_OPTIONS = {
  passive: true,
  capture: true
};
var TIPPY_DEFAULT_APPEND_TO = function TIPPY_DEFAULT_APPEND_TO2() {
  return document.body;
};
function getValueAtIndexOrReturn(value, index, defaultValue) {
  if (Array.isArray(value)) {
    var v = value[index];
    return v == null ? Array.isArray(defaultValue) ? defaultValue[index] : defaultValue : v;
  }
  return value;
}
function isType(value, type) {
  var str = {}.toString.call(value);
  return str.indexOf("[object") === 0 && str.indexOf(type + "]") > -1;
}
function invokeWithArgsOrReturn(value, args) {
  return typeof value === "function" ? value.apply(void 0, args) : value;
}
function debounce2(fn6, ms) {
  if (ms === 0) {
    return fn6;
  }
  var timeout;
  return function(arg) {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      fn6(arg);
    }, ms);
  };
}
function removeProperties(obj, keys) {
  var clone = Object.assign({}, obj);
  keys.forEach(function(key) {
    delete clone[key];
  });
  return clone;
}
function splitBySpaces(value) {
  return value.split(/\s+/).filter(Boolean);
}
function normalizeToArray(value) {
  return [].concat(value);
}
function pushIfUnique(arr, value) {
  if (arr.indexOf(value) === -1) {
    arr.push(value);
  }
}
function unique(arr) {
  return arr.filter(function(item, index) {
    return arr.indexOf(item) === index;
  });
}
function getBasePlacement2(placement) {
  return placement.split("-")[0];
}
function arrayFrom(value) {
  return [].slice.call(value);
}
function removeUndefinedProps(obj) {
  return Object.keys(obj).reduce(function(acc, key) {
    if (obj[key] !== void 0) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
}
function div() {
  return document.createElement("div");
}
function isElement2(value) {
  return ["Element", "Fragment"].some(function(type) {
    return isType(value, type);
  });
}
function isNodeList(value) {
  return isType(value, "NodeList");
}
function isMouseEvent(value) {
  return isType(value, "MouseEvent");
}
function isReferenceElement(value) {
  return !!(value && value._tippy && value._tippy.reference === value);
}
function getArrayOfElements(value) {
  if (isElement2(value)) {
    return [value];
  }
  if (isNodeList(value)) {
    return arrayFrom(value);
  }
  if (Array.isArray(value)) {
    return value;
  }
  return arrayFrom(document.querySelectorAll(value));
}
function setTransitionDuration(els, value) {
  els.forEach(function(el) {
    if (el) {
      el.style.transitionDuration = value + "ms";
    }
  });
}
function setVisibilityState(els, state) {
  els.forEach(function(el) {
    if (el) {
      el.setAttribute("data-state", state);
    }
  });
}
function getOwnerDocument(elementOrElements) {
  var _element$ownerDocumen;
  var _normalizeToArray = normalizeToArray(elementOrElements), element = _normalizeToArray[0];
  return element != null && (_element$ownerDocumen = element.ownerDocument) != null && _element$ownerDocumen.body ? element.ownerDocument : document;
}
function isCursorOutsideInteractiveBorder(popperTreeData, event) {
  var clientX = event.clientX, clientY = event.clientY;
  return popperTreeData.every(function(_ref) {
    var popperRect = _ref.popperRect, popperState = _ref.popperState, props = _ref.props;
    var interactiveBorder = props.interactiveBorder;
    var basePlacement = getBasePlacement2(popperState.placement);
    var offsetData = popperState.modifiersData.offset;
    if (!offsetData) {
      return true;
    }
    var topDistance = basePlacement === "bottom" ? offsetData.top.y : 0;
    var bottomDistance = basePlacement === "top" ? offsetData.bottom.y : 0;
    var leftDistance = basePlacement === "right" ? offsetData.left.x : 0;
    var rightDistance = basePlacement === "left" ? offsetData.right.x : 0;
    var exceedsTop = popperRect.top - clientY + topDistance > interactiveBorder;
    var exceedsBottom = clientY - popperRect.bottom - bottomDistance > interactiveBorder;
    var exceedsLeft = popperRect.left - clientX + leftDistance > interactiveBorder;
    var exceedsRight = clientX - popperRect.right - rightDistance > interactiveBorder;
    return exceedsTop || exceedsBottom || exceedsLeft || exceedsRight;
  });
}
function updateTransitionEndListener(box, action, listener) {
  var method = action + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function(event) {
    box[method](event, listener);
  });
}
function actualContains(parent, child) {
  var target = child;
  while (target) {
    var _target$getRootNode;
    if (parent.contains(target)) {
      return true;
    }
    target = target.getRootNode == null ? void 0 : (_target$getRootNode = target.getRootNode()) == null ? void 0 : _target$getRootNode.host;
  }
  return false;
}
var currentInput = {
  isTouch: false
};
var lastMouseMoveTime = 0;
function onDocumentTouchStart() {
  if (currentInput.isTouch) {
    return;
  }
  currentInput.isTouch = true;
  if (window.performance) {
    document.addEventListener("mousemove", onDocumentMouseMove);
  }
}
function onDocumentMouseMove() {
  var now = performance.now();
  if (now - lastMouseMoveTime < 20) {
    currentInput.isTouch = false;
    document.removeEventListener("mousemove", onDocumentMouseMove);
  }
  lastMouseMoveTime = now;
}
function onWindowBlur() {
  var activeElement = document.activeElement;
  if (isReferenceElement(activeElement)) {
    var instance = activeElement._tippy;
    if (activeElement.blur && !instance.state.isVisible) {
      activeElement.blur();
    }
  }
}
function bindGlobalEventListeners() {
  document.addEventListener("touchstart", onDocumentTouchStart, TOUCH_OPTIONS);
  window.addEventListener("blur", onWindowBlur);
}
var isBrowser = typeof window !== "undefined" && typeof document !== "undefined";
var isIE11 = isBrowser ? (
  // @ts-ignore
  !!window.msCrypto
) : false;
if (false) {
  resetVisitedMessages();
}
var pluginProps = {
  animateFill: false,
  followCursor: false,
  inlinePositioning: false,
  sticky: false
};
var renderProps = {
  allowHTML: false,
  animation: "fade",
  arrow: true,
  content: "",
  inertia: false,
  maxWidth: 350,
  role: "tooltip",
  theme: "",
  zIndex: 9999
};
var defaultProps = Object.assign({
  appendTo: TIPPY_DEFAULT_APPEND_TO,
  aria: {
    content: "auto",
    expanded: "auto"
  },
  delay: 0,
  duration: [300, 250],
  getReferenceClientRect: null,
  hideOnClick: true,
  ignoreAttributes: false,
  interactive: false,
  interactiveBorder: 2,
  interactiveDebounce: 0,
  moveTransition: "",
  offset: [0, 10],
  onAfterUpdate: function onAfterUpdate() {
  },
  onBeforeUpdate: function onBeforeUpdate() {
  },
  onCreate: function onCreate() {
  },
  onDestroy: function onDestroy() {
  },
  onHidden: function onHidden() {
  },
  onHide: function onHide() {
  },
  onMount: function onMount() {
  },
  onShow: function onShow() {
  },
  onShown: function onShown() {
  },
  onTrigger: function onTrigger() {
  },
  onUntrigger: function onUntrigger() {
  },
  onClickOutside: function onClickOutside() {
  },
  placement: "top",
  plugins: [],
  popperOptions: {},
  render: null,
  showOnCreate: false,
  touch: true,
  trigger: "mouseenter focus",
  triggerTarget: null
}, pluginProps, renderProps);
var defaultKeys = Object.keys(defaultProps);
var setDefaultProps = function setDefaultProps2(partialProps) {
  if (false) {
    validateProps(partialProps, []);
  }
  var keys = Object.keys(partialProps);
  keys.forEach(function(key) {
    defaultProps[key] = partialProps[key];
  });
};
function getExtendedPassedProps(passedProps) {
  var plugins = passedProps.plugins || [];
  var pluginProps2 = plugins.reduce(function(acc, plugin) {
    var name = plugin.name, defaultValue = plugin.defaultValue;
    if (name) {
      var _name;
      acc[name] = passedProps[name] !== void 0 ? passedProps[name] : (_name = defaultProps[name]) != null ? _name : defaultValue;
    }
    return acc;
  }, {});
  return Object.assign({}, passedProps, pluginProps2);
}
function getDataAttributeProps(reference2, plugins) {
  var propKeys = plugins ? Object.keys(getExtendedPassedProps(Object.assign({}, defaultProps, {
    plugins
  }))) : defaultKeys;
  var props = propKeys.reduce(function(acc, key) {
    var valueAsString = (reference2.getAttribute("data-tippy-" + key) || "").trim();
    if (!valueAsString) {
      return acc;
    }
    if (key === "content") {
      acc[key] = valueAsString;
    } else {
      try {
        acc[key] = JSON.parse(valueAsString);
      } catch (e) {
        acc[key] = valueAsString;
      }
    }
    return acc;
  }, {});
  return props;
}
function evaluateProps(reference2, props) {
  var out = Object.assign({}, props, {
    content: invokeWithArgsOrReturn(props.content, [reference2])
  }, props.ignoreAttributes ? {} : getDataAttributeProps(reference2, props.plugins));
  out.aria = Object.assign({}, defaultProps.aria, out.aria);
  out.aria = {
    expanded: out.aria.expanded === "auto" ? props.interactive : out.aria.expanded,
    content: out.aria.content === "auto" ? props.interactive ? null : "describedby" : out.aria.content
  };
  return out;
}
var innerHTML = function innerHTML2() {
  return "innerHTML";
};
function dangerouslySetInnerHTML(element, html) {
  element[innerHTML()] = html;
}
function createArrowElement(value) {
  var arrow2 = div();
  if (value === true) {
    arrow2.className = ARROW_CLASS;
  } else {
    arrow2.className = SVG_ARROW_CLASS;
    if (isElement2(value)) {
      arrow2.appendChild(value);
    } else {
      dangerouslySetInnerHTML(arrow2, value);
    }
  }
  return arrow2;
}
function setContent(content, props) {
  if (isElement2(props.content)) {
    dangerouslySetInnerHTML(content, "");
    content.appendChild(props.content);
  } else if (typeof props.content !== "function") {
    if (props.allowHTML) {
      dangerouslySetInnerHTML(content, props.content);
    } else {
      content.textContent = props.content;
    }
  }
}
function getChildren(popper2) {
  var box = popper2.firstElementChild;
  var boxChildren = arrayFrom(box.children);
  return {
    box,
    content: boxChildren.find(function(node) {
      return node.classList.contains(CONTENT_CLASS);
    }),
    arrow: boxChildren.find(function(node) {
      return node.classList.contains(ARROW_CLASS) || node.classList.contains(SVG_ARROW_CLASS);
    }),
    backdrop: boxChildren.find(function(node) {
      return node.classList.contains(BACKDROP_CLASS);
    })
  };
}
function render(instance) {
  var popper2 = div();
  var box = div();
  box.className = BOX_CLASS;
  box.setAttribute("data-state", "hidden");
  box.setAttribute("tabindex", "-1");
  var content = div();
  content.className = CONTENT_CLASS;
  content.setAttribute("data-state", "hidden");
  setContent(content, instance.props);
  popper2.appendChild(box);
  box.appendChild(content);
  onUpdate(instance.props, instance.props);
  function onUpdate(prevProps, nextProps) {
    var _getChildren = getChildren(popper2), box2 = _getChildren.box, content2 = _getChildren.content, arrow2 = _getChildren.arrow;
    if (nextProps.theme) {
      box2.setAttribute("data-theme", nextProps.theme);
    } else {
      box2.removeAttribute("data-theme");
    }
    if (typeof nextProps.animation === "string") {
      box2.setAttribute("data-animation", nextProps.animation);
    } else {
      box2.removeAttribute("data-animation");
    }
    if (nextProps.inertia) {
      box2.setAttribute("data-inertia", "");
    } else {
      box2.removeAttribute("data-inertia");
    }
    box2.style.maxWidth = typeof nextProps.maxWidth === "number" ? nextProps.maxWidth + "px" : nextProps.maxWidth;
    if (nextProps.role) {
      box2.setAttribute("role", nextProps.role);
    } else {
      box2.removeAttribute("role");
    }
    if (prevProps.content !== nextProps.content || prevProps.allowHTML !== nextProps.allowHTML) {
      setContent(content2, instance.props);
    }
    if (nextProps.arrow) {
      if (!arrow2) {
        box2.appendChild(createArrowElement(nextProps.arrow));
      } else if (prevProps.arrow !== nextProps.arrow) {
        box2.removeChild(arrow2);
        box2.appendChild(createArrowElement(nextProps.arrow));
      }
    } else if (arrow2) {
      box2.removeChild(arrow2);
    }
  }
  return {
    popper: popper2,
    onUpdate
  };
}
render.$$tippy = true;
var idCounter = 1;
var mouseMoveListeners = [];
var mountedInstances = [];
function createTippy(reference2, passedProps) {
  var props = evaluateProps(reference2, Object.assign({}, defaultProps, getExtendedPassedProps(removeUndefinedProps(passedProps))));
  var showTimeout;
  var hideTimeout;
  var scheduleHideAnimationFrame;
  var isVisibleFromClick = false;
  var didHideDueToDocumentMouseDown = false;
  var didTouchMove = false;
  var ignoreOnFirstUpdate = false;
  var lastTriggerEvent;
  var currentTransitionEndListener;
  var onFirstUpdate;
  var listeners = [];
  var debouncedOnMouseMove = debounce2(onMouseMove, props.interactiveDebounce);
  var currentTarget;
  var id = idCounter++;
  var popperInstance = null;
  var plugins = unique(props.plugins);
  var state = {
    // Is the instance currently enabled?
    isEnabled: true,
    // Is the tippy currently showing and not transitioning out?
    isVisible: false,
    // Has the instance been destroyed?
    isDestroyed: false,
    // Is the tippy currently mounted to the DOM?
    isMounted: false,
    // Has the tippy finished transitioning in?
    isShown: false
  };
  var instance = {
    // properties
    id,
    reference: reference2,
    popper: div(),
    popperInstance,
    props,
    state,
    plugins,
    // methods
    clearDelayTimeouts,
    setProps,
    setContent: setContent2,
    show,
    hide: hide2,
    hideWithInteractivity,
    enable,
    disable,
    unmount,
    destroy
  };
  if (!props.render) {
    if (false) {
      errorWhen(true, "render() function has not been supplied.");
    }
    return instance;
  }
  var _props$render = props.render(instance), popper2 = _props$render.popper, onUpdate = _props$render.onUpdate;
  popper2.setAttribute("data-tippy-root", "");
  popper2.id = "tippy-" + instance.id;
  instance.popper = popper2;
  reference2._tippy = instance;
  popper2._tippy = instance;
  var pluginsHooks = plugins.map(function(plugin) {
    return plugin.fn(instance);
  });
  var hasAriaExpanded = reference2.hasAttribute("aria-expanded");
  addListeners();
  handleAriaExpandedAttribute();
  handleStyles();
  invokeHook("onCreate", [instance]);
  if (props.showOnCreate) {
    scheduleShow();
  }
  popper2.addEventListener("mouseenter", function() {
    if (instance.props.interactive && instance.state.isVisible) {
      instance.clearDelayTimeouts();
    }
  });
  popper2.addEventListener("mouseleave", function() {
    if (instance.props.interactive && instance.props.trigger.indexOf("mouseenter") >= 0) {
      getDocument().addEventListener("mousemove", debouncedOnMouseMove);
    }
  });
  return instance;
  function getNormalizedTouchSettings() {
    var touch = instance.props.touch;
    return Array.isArray(touch) ? touch : [touch, 0];
  }
  function getIsCustomTouchBehavior() {
    return getNormalizedTouchSettings()[0] === "hold";
  }
  function getIsDefaultRenderFn() {
    var _instance$props$rende;
    return !!((_instance$props$rende = instance.props.render) != null && _instance$props$rende.$$tippy);
  }
  function getCurrentTarget() {
    return currentTarget || reference2;
  }
  function getDocument() {
    var parent = getCurrentTarget().parentNode;
    return parent ? getOwnerDocument(parent) : document;
  }
  function getDefaultTemplateChildren() {
    return getChildren(popper2);
  }
  function getDelay(isShow) {
    if (instance.state.isMounted && !instance.state.isVisible || currentInput.isTouch || lastTriggerEvent && lastTriggerEvent.type === "focus") {
      return 0;
    }
    return getValueAtIndexOrReturn(instance.props.delay, isShow ? 0 : 1, defaultProps.delay);
  }
  function handleStyles(fromHide) {
    if (fromHide === void 0) {
      fromHide = false;
    }
    popper2.style.pointerEvents = instance.props.interactive && !fromHide ? "" : "none";
    popper2.style.zIndex = "" + instance.props.zIndex;
  }
  function invokeHook(hook, args, shouldInvokePropsHook) {
    if (shouldInvokePropsHook === void 0) {
      shouldInvokePropsHook = true;
    }
    pluginsHooks.forEach(function(pluginHooks) {
      if (pluginHooks[hook]) {
        pluginHooks[hook].apply(pluginHooks, args);
      }
    });
    if (shouldInvokePropsHook) {
      var _instance$props;
      (_instance$props = instance.props)[hook].apply(_instance$props, args);
    }
  }
  function handleAriaContentAttribute() {
    var aria = instance.props.aria;
    if (!aria.content) {
      return;
    }
    var attr = "aria-" + aria.content;
    var id2 = popper2.id;
    var nodes = normalizeToArray(instance.props.triggerTarget || reference2);
    nodes.forEach(function(node) {
      var currentValue = node.getAttribute(attr);
      if (instance.state.isVisible) {
        node.setAttribute(attr, currentValue ? currentValue + " " + id2 : id2);
      } else {
        var nextValue = currentValue && currentValue.replace(id2, "").trim();
        if (nextValue) {
          node.setAttribute(attr, nextValue);
        } else {
          node.removeAttribute(attr);
        }
      }
    });
  }
  function handleAriaExpandedAttribute() {
    if (hasAriaExpanded || !instance.props.aria.expanded) {
      return;
    }
    var nodes = normalizeToArray(instance.props.triggerTarget || reference2);
    nodes.forEach(function(node) {
      if (instance.props.interactive) {
        node.setAttribute("aria-expanded", instance.state.isVisible && node === getCurrentTarget() ? "true" : "false");
      } else {
        node.removeAttribute("aria-expanded");
      }
    });
  }
  function cleanupInteractiveMouseListeners() {
    getDocument().removeEventListener("mousemove", debouncedOnMouseMove);
    mouseMoveListeners = mouseMoveListeners.filter(function(listener) {
      return listener !== debouncedOnMouseMove;
    });
  }
  function onDocumentPress(event) {
    if (currentInput.isTouch) {
      if (didTouchMove || event.type === "mousedown") {
        return;
      }
    }
    var actualTarget = event.composedPath && event.composedPath()[0] || event.target;
    if (instance.props.interactive && actualContains(popper2, actualTarget)) {
      return;
    }
    if (normalizeToArray(instance.props.triggerTarget || reference2).some(function(el) {
      return actualContains(el, actualTarget);
    })) {
      if (currentInput.isTouch) {
        return;
      }
      if (instance.state.isVisible && instance.props.trigger.indexOf("click") >= 0) {
        return;
      }
    } else {
      invokeHook("onClickOutside", [instance, event]);
    }
    if (instance.props.hideOnClick === true) {
      instance.clearDelayTimeouts();
      instance.hide();
      didHideDueToDocumentMouseDown = true;
      setTimeout(function() {
        didHideDueToDocumentMouseDown = false;
      });
      if (!instance.state.isMounted) {
        removeDocumentPress();
      }
    }
  }
  function onTouchMove() {
    didTouchMove = true;
  }
  function onTouchStart() {
    didTouchMove = false;
  }
  function addDocumentPress() {
    var doc = getDocument();
    doc.addEventListener("mousedown", onDocumentPress, true);
    doc.addEventListener("touchend", onDocumentPress, TOUCH_OPTIONS);
    doc.addEventListener("touchstart", onTouchStart, TOUCH_OPTIONS);
    doc.addEventListener("touchmove", onTouchMove, TOUCH_OPTIONS);
  }
  function removeDocumentPress() {
    var doc = getDocument();
    doc.removeEventListener("mousedown", onDocumentPress, true);
    doc.removeEventListener("touchend", onDocumentPress, TOUCH_OPTIONS);
    doc.removeEventListener("touchstart", onTouchStart, TOUCH_OPTIONS);
    doc.removeEventListener("touchmove", onTouchMove, TOUCH_OPTIONS);
  }
  function onTransitionedOut(duration, callback) {
    onTransitionEnd(duration, function() {
      if (!instance.state.isVisible && popper2.parentNode && popper2.parentNode.contains(popper2)) {
        callback();
      }
    });
  }
  function onTransitionedIn(duration, callback) {
    onTransitionEnd(duration, callback);
  }
  function onTransitionEnd(duration, callback) {
    var box = getDefaultTemplateChildren().box;
    function listener(event) {
      if (event.target === box) {
        updateTransitionEndListener(box, "remove", listener);
        callback();
      }
    }
    if (duration === 0) {
      return callback();
    }
    updateTransitionEndListener(box, "remove", currentTransitionEndListener);
    updateTransitionEndListener(box, "add", listener);
    currentTransitionEndListener = listener;
  }
  function on(eventType, handler, options) {
    if (options === void 0) {
      options = false;
    }
    var nodes = normalizeToArray(instance.props.triggerTarget || reference2);
    nodes.forEach(function(node) {
      node.addEventListener(eventType, handler, options);
      listeners.push({
        node,
        eventType,
        handler,
        options
      });
    });
  }
  function addListeners() {
    if (getIsCustomTouchBehavior()) {
      on("touchstart", onTrigger2, {
        passive: true
      });
      on("touchend", onMouseLeave, {
        passive: true
      });
    }
    splitBySpaces(instance.props.trigger).forEach(function(eventType) {
      if (eventType === "manual") {
        return;
      }
      on(eventType, onTrigger2);
      switch (eventType) {
        case "mouseenter":
          on("mouseleave", onMouseLeave);
          break;
        case "focus":
          on(isIE11 ? "focusout" : "blur", onBlurOrFocusOut);
          break;
        case "focusin":
          on("focusout", onBlurOrFocusOut);
          break;
      }
    });
  }
  function removeListeners() {
    listeners.forEach(function(_ref) {
      var node = _ref.node, eventType = _ref.eventType, handler = _ref.handler, options = _ref.options;
      node.removeEventListener(eventType, handler, options);
    });
    listeners = [];
  }
  function onTrigger2(event) {
    var _lastTriggerEvent;
    var shouldScheduleClickHide = false;
    if (!instance.state.isEnabled || isEventListenerStopped(event) || didHideDueToDocumentMouseDown) {
      return;
    }
    var wasFocused = ((_lastTriggerEvent = lastTriggerEvent) == null ? void 0 : _lastTriggerEvent.type) === "focus";
    lastTriggerEvent = event;
    currentTarget = event.currentTarget;
    handleAriaExpandedAttribute();
    if (!instance.state.isVisible && isMouseEvent(event)) {
      mouseMoveListeners.forEach(function(listener) {
        return listener(event);
      });
    }
    if (event.type === "click" && (instance.props.trigger.indexOf("mouseenter") < 0 || isVisibleFromClick) && instance.props.hideOnClick !== false && instance.state.isVisible) {
      shouldScheduleClickHide = true;
    } else {
      scheduleShow(event);
    }
    if (event.type === "click") {
      isVisibleFromClick = !shouldScheduleClickHide;
    }
    if (shouldScheduleClickHide && !wasFocused) {
      scheduleHide(event);
    }
  }
  function onMouseMove(event) {
    var target = event.target;
    var isCursorOverReferenceOrPopper = getCurrentTarget().contains(target) || popper2.contains(target);
    if (event.type === "mousemove" && isCursorOverReferenceOrPopper) {
      return;
    }
    var popperTreeData = getNestedPopperTree().concat(popper2).map(function(popper3) {
      var _instance$popperInsta;
      var instance2 = popper3._tippy;
      var state2 = (_instance$popperInsta = instance2.popperInstance) == null ? void 0 : _instance$popperInsta.state;
      if (state2) {
        return {
          popperRect: popper3.getBoundingClientRect(),
          popperState: state2,
          props
        };
      }
      return null;
    }).filter(Boolean);
    if (isCursorOutsideInteractiveBorder(popperTreeData, event)) {
      cleanupInteractiveMouseListeners();
      scheduleHide(event);
    }
  }
  function onMouseLeave(event) {
    var shouldBail = isEventListenerStopped(event) || instance.props.trigger.indexOf("click") >= 0 && isVisibleFromClick;
    if (shouldBail) {
      return;
    }
    if (instance.props.interactive) {
      instance.hideWithInteractivity(event);
      return;
    }
    scheduleHide(event);
  }
  function onBlurOrFocusOut(event) {
    if (instance.props.trigger.indexOf("focusin") < 0 && event.target !== getCurrentTarget()) {
      return;
    }
    if (instance.props.interactive && event.relatedTarget && popper2.contains(event.relatedTarget)) {
      return;
    }
    scheduleHide(event);
  }
  function isEventListenerStopped(event) {
    return currentInput.isTouch ? getIsCustomTouchBehavior() !== event.type.indexOf("touch") >= 0 : false;
  }
  function createPopperInstance() {
    destroyPopperInstance();
    var _instance$props2 = instance.props, popperOptions = _instance$props2.popperOptions, placement = _instance$props2.placement, offset2 = _instance$props2.offset, getReferenceClientRect = _instance$props2.getReferenceClientRect, moveTransition = _instance$props2.moveTransition;
    var arrow2 = getIsDefaultRenderFn() ? getChildren(popper2).arrow : null;
    var computedReference = getReferenceClientRect ? {
      getBoundingClientRect: getReferenceClientRect,
      contextElement: getReferenceClientRect.contextElement || getCurrentTarget()
    } : reference2;
    var tippyModifier = {
      name: "$$tippy",
      enabled: true,
      phase: "beforeWrite",
      requires: ["computeStyles"],
      fn: function fn6(_ref2) {
        var state2 = _ref2.state;
        if (getIsDefaultRenderFn()) {
          var _getDefaultTemplateCh = getDefaultTemplateChildren(), box = _getDefaultTemplateCh.box;
          ["placement", "reference-hidden", "escaped"].forEach(function(attr) {
            if (attr === "placement") {
              box.setAttribute("data-placement", state2.placement);
            } else {
              if (state2.attributes.popper["data-popper-" + attr]) {
                box.setAttribute("data-" + attr, "");
              } else {
                box.removeAttribute("data-" + attr);
              }
            }
          });
          state2.attributes.popper = {};
        }
      }
    };
    var modifiers = [{
      name: "offset",
      options: {
        offset: offset2
      }
    }, {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    }, {
      name: "flip",
      options: {
        padding: 5
      }
    }, {
      name: "computeStyles",
      options: {
        adaptive: !moveTransition
      }
    }, tippyModifier];
    if (getIsDefaultRenderFn() && arrow2) {
      modifiers.push({
        name: "arrow",
        options: {
          element: arrow2,
          padding: 3
        }
      });
    }
    modifiers.push.apply(modifiers, (popperOptions == null ? void 0 : popperOptions.modifiers) || []);
    instance.popperInstance = createPopper(computedReference, popper2, Object.assign({}, popperOptions, {
      placement,
      onFirstUpdate,
      modifiers
    }));
  }
  function destroyPopperInstance() {
    if (instance.popperInstance) {
      instance.popperInstance.destroy();
      instance.popperInstance = null;
    }
  }
  function mount() {
    var appendTo = instance.props.appendTo;
    var parentNode;
    var node = getCurrentTarget();
    if (instance.props.interactive && appendTo === TIPPY_DEFAULT_APPEND_TO || appendTo === "parent") {
      parentNode = node.parentNode;
    } else {
      parentNode = invokeWithArgsOrReturn(appendTo, [node]);
    }
    if (!parentNode.contains(popper2)) {
      parentNode.appendChild(popper2);
    }
    instance.state.isMounted = true;
    createPopperInstance();
    if (false) {
      warnWhen(instance.props.interactive && appendTo === defaultProps.appendTo && node.nextElementSibling !== popper2, ["Interactive tippy element may not be accessible via keyboard", "navigation because it is not directly after the reference element", "in the DOM source order.", "\n\n", "Using a wrapper <div> or <span> tag around the reference element", "solves this by creating a new parentNode context.", "\n\n", "Specifying `appendTo: document.body` silences this warning, but it", "assumes you are using a focus management solution to handle", "keyboard navigation.", "\n\n", "See: https://atomiks.github.io/tippyjs/v6/accessibility/#interactivity"].join(" "));
    }
  }
  function getNestedPopperTree() {
    return arrayFrom(popper2.querySelectorAll("[data-tippy-root]"));
  }
  function scheduleShow(event) {
    instance.clearDelayTimeouts();
    if (event) {
      invokeHook("onTrigger", [instance, event]);
    }
    addDocumentPress();
    var delay = getDelay(true);
    var _getNormalizedTouchSe = getNormalizedTouchSettings(), touchValue = _getNormalizedTouchSe[0], touchDelay = _getNormalizedTouchSe[1];
    if (currentInput.isTouch && touchValue === "hold" && touchDelay) {
      delay = touchDelay;
    }
    if (delay) {
      showTimeout = setTimeout(function() {
        instance.show();
      }, delay);
    } else {
      instance.show();
    }
  }
  function scheduleHide(event) {
    instance.clearDelayTimeouts();
    invokeHook("onUntrigger", [instance, event]);
    if (!instance.state.isVisible) {
      removeDocumentPress();
      return;
    }
    if (instance.props.trigger.indexOf("mouseenter") >= 0 && instance.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(event.type) >= 0 && isVisibleFromClick) {
      return;
    }
    var delay = getDelay(false);
    if (delay) {
      hideTimeout = setTimeout(function() {
        if (instance.state.isVisible) {
          instance.hide();
        }
      }, delay);
    } else {
      scheduleHideAnimationFrame = requestAnimationFrame(function() {
        instance.hide();
      });
    }
  }
  function enable() {
    instance.state.isEnabled = true;
  }
  function disable() {
    instance.hide();
    instance.state.isEnabled = false;
  }
  function clearDelayTimeouts() {
    clearTimeout(showTimeout);
    clearTimeout(hideTimeout);
    cancelAnimationFrame(scheduleHideAnimationFrame);
  }
  function setProps(partialProps) {
    if (false) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("setProps"));
    }
    if (instance.state.isDestroyed) {
      return;
    }
    invokeHook("onBeforeUpdate", [instance, partialProps]);
    removeListeners();
    var prevProps = instance.props;
    var nextProps = evaluateProps(reference2, Object.assign({}, prevProps, removeUndefinedProps(partialProps), {
      ignoreAttributes: true
    }));
    instance.props = nextProps;
    addListeners();
    if (prevProps.interactiveDebounce !== nextProps.interactiveDebounce) {
      cleanupInteractiveMouseListeners();
      debouncedOnMouseMove = debounce2(onMouseMove, nextProps.interactiveDebounce);
    }
    if (prevProps.triggerTarget && !nextProps.triggerTarget) {
      normalizeToArray(prevProps.triggerTarget).forEach(function(node) {
        node.removeAttribute("aria-expanded");
      });
    } else if (nextProps.triggerTarget) {
      reference2.removeAttribute("aria-expanded");
    }
    handleAriaExpandedAttribute();
    handleStyles();
    if (onUpdate) {
      onUpdate(prevProps, nextProps);
    }
    if (instance.popperInstance) {
      createPopperInstance();
      getNestedPopperTree().forEach(function(nestedPopper) {
        requestAnimationFrame(nestedPopper._tippy.popperInstance.forceUpdate);
      });
    }
    invokeHook("onAfterUpdate", [instance, partialProps]);
  }
  function setContent2(content) {
    instance.setProps({
      content
    });
  }
  function show() {
    if (false) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("show"));
    }
    var isAlreadyVisible = instance.state.isVisible;
    var isDestroyed = instance.state.isDestroyed;
    var isDisabled = !instance.state.isEnabled;
    var isTouchAndTouchDisabled = currentInput.isTouch && !instance.props.touch;
    var duration = getValueAtIndexOrReturn(instance.props.duration, 0, defaultProps.duration);
    if (isAlreadyVisible || isDestroyed || isDisabled || isTouchAndTouchDisabled) {
      return;
    }
    if (getCurrentTarget().hasAttribute("disabled")) {
      return;
    }
    invokeHook("onShow", [instance], false);
    if (instance.props.onShow(instance) === false) {
      return;
    }
    instance.state.isVisible = true;
    if (getIsDefaultRenderFn()) {
      popper2.style.visibility = "visible";
    }
    handleStyles();
    addDocumentPress();
    if (!instance.state.isMounted) {
      popper2.style.transition = "none";
    }
    if (getIsDefaultRenderFn()) {
      var _getDefaultTemplateCh2 = getDefaultTemplateChildren(), box = _getDefaultTemplateCh2.box, content = _getDefaultTemplateCh2.content;
      setTransitionDuration([box, content], 0);
    }
    onFirstUpdate = function onFirstUpdate2() {
      var _instance$popperInsta2;
      if (!instance.state.isVisible || ignoreOnFirstUpdate) {
        return;
      }
      ignoreOnFirstUpdate = true;
      void popper2.offsetHeight;
      popper2.style.transition = instance.props.moveTransition;
      if (getIsDefaultRenderFn() && instance.props.animation) {
        var _getDefaultTemplateCh3 = getDefaultTemplateChildren(), _box = _getDefaultTemplateCh3.box, _content = _getDefaultTemplateCh3.content;
        setTransitionDuration([_box, _content], duration);
        setVisibilityState([_box, _content], "visible");
      }
      handleAriaContentAttribute();
      handleAriaExpandedAttribute();
      pushIfUnique(mountedInstances, instance);
      (_instance$popperInsta2 = instance.popperInstance) == null ? void 0 : _instance$popperInsta2.forceUpdate();
      invokeHook("onMount", [instance]);
      if (instance.props.animation && getIsDefaultRenderFn()) {
        onTransitionedIn(duration, function() {
          instance.state.isShown = true;
          invokeHook("onShown", [instance]);
        });
      }
    };
    mount();
  }
  function hide2() {
    if (false) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("hide"));
    }
    var isAlreadyHidden = !instance.state.isVisible;
    var isDestroyed = instance.state.isDestroyed;
    var isDisabled = !instance.state.isEnabled;
    var duration = getValueAtIndexOrReturn(instance.props.duration, 1, defaultProps.duration);
    if (isAlreadyHidden || isDestroyed || isDisabled) {
      return;
    }
    invokeHook("onHide", [instance], false);
    if (instance.props.onHide(instance) === false) {
      return;
    }
    instance.state.isVisible = false;
    instance.state.isShown = false;
    ignoreOnFirstUpdate = false;
    isVisibleFromClick = false;
    if (getIsDefaultRenderFn()) {
      popper2.style.visibility = "hidden";
    }
    cleanupInteractiveMouseListeners();
    removeDocumentPress();
    handleStyles(true);
    if (getIsDefaultRenderFn()) {
      var _getDefaultTemplateCh4 = getDefaultTemplateChildren(), box = _getDefaultTemplateCh4.box, content = _getDefaultTemplateCh4.content;
      if (instance.props.animation) {
        setTransitionDuration([box, content], duration);
        setVisibilityState([box, content], "hidden");
      }
    }
    handleAriaContentAttribute();
    handleAriaExpandedAttribute();
    if (instance.props.animation) {
      if (getIsDefaultRenderFn()) {
        onTransitionedOut(duration, instance.unmount);
      }
    } else {
      instance.unmount();
    }
  }
  function hideWithInteractivity(event) {
    if (false) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("hideWithInteractivity"));
    }
    getDocument().addEventListener("mousemove", debouncedOnMouseMove);
    pushIfUnique(mouseMoveListeners, debouncedOnMouseMove);
    debouncedOnMouseMove(event);
  }
  function unmount() {
    if (false) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("unmount"));
    }
    if (instance.state.isVisible) {
      instance.hide();
    }
    if (!instance.state.isMounted) {
      return;
    }
    destroyPopperInstance();
    getNestedPopperTree().forEach(function(nestedPopper) {
      nestedPopper._tippy.unmount();
    });
    if (popper2.parentNode) {
      popper2.parentNode.removeChild(popper2);
    }
    mountedInstances = mountedInstances.filter(function(i) {
      return i !== instance;
    });
    instance.state.isMounted = false;
    invokeHook("onHidden", [instance]);
  }
  function destroy() {
    if (false) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning("destroy"));
    }
    if (instance.state.isDestroyed) {
      return;
    }
    instance.clearDelayTimeouts();
    instance.unmount();
    removeListeners();
    delete reference2._tippy;
    instance.state.isDestroyed = true;
    invokeHook("onDestroy", [instance]);
  }
}
function tippy(targets, optionalProps) {
  if (optionalProps === void 0) {
    optionalProps = {};
  }
  var plugins = defaultProps.plugins.concat(optionalProps.plugins || []);
  if (false) {
    validateTargets(targets);
    validateProps(optionalProps, plugins);
  }
  bindGlobalEventListeners();
  var passedProps = Object.assign({}, optionalProps, {
    plugins
  });
  var elements = getArrayOfElements(targets);
  if (false) {
    var isSingleContentElement = isElement2(passedProps.content);
    var isMoreThanOneReferenceElement = elements.length > 1;
    warnWhen(isSingleContentElement && isMoreThanOneReferenceElement, ["tippy() was passed an Element as the `content` prop, but more than", "one tippy instance was created by this invocation. This means the", "content element will only be appended to the last tippy instance.", "\n\n", "Instead, pass the .innerHTML of the element, or use a function that", "returns a cloned version of the element instead.", "\n\n", "1) content: element.innerHTML\n", "2) content: () => element.cloneNode(true)"].join(" "));
  }
  var instances = elements.reduce(function(acc, reference2) {
    var instance = reference2 && createTippy(reference2, passedProps);
    if (instance) {
      acc.push(instance);
    }
    return acc;
  }, []);
  return isElement2(targets) ? instances[0] : instances;
}
tippy.defaultProps = defaultProps;
tippy.setDefaultProps = setDefaultProps;
tippy.currentInput = currentInput;
var hideAll = function hideAll2(_temp) {
  var _ref = _temp === void 0 ? {} : _temp, excludedReferenceOrInstance = _ref.exclude, duration = _ref.duration;
  mountedInstances.forEach(function(instance) {
    var isExcluded = false;
    if (excludedReferenceOrInstance) {
      isExcluded = isReferenceElement(excludedReferenceOrInstance) ? instance.reference === excludedReferenceOrInstance : instance.popper === excludedReferenceOrInstance.popper;
    }
    if (!isExcluded) {
      var originalDuration = instance.props.duration;
      instance.setProps({
        duration
      });
      instance.hide();
      if (!instance.state.isDestroyed) {
        instance.setProps({
          duration: originalDuration
        });
      }
    }
  });
};
var applyStylesModifier = Object.assign({}, applyStyles_default, {
  effect: function effect4(_ref) {
    var state = _ref.state;
    var initialStyles = {
      popper: {
        position: state.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;
    if (state.elements.arrow) {
      Object.assign(state.elements.arrow.style, initialStyles.arrow);
    }
  }
});
var createSingleton = function createSingleton2(tippyInstances, optionalProps) {
  var _optionalProps$popper;
  if (optionalProps === void 0) {
    optionalProps = {};
  }
  if (false) {
    errorWhen(!Array.isArray(tippyInstances), ["The first argument passed to createSingleton() must be an array of", "tippy instances. The passed value was", String(tippyInstances)].join(" "));
  }
  var individualInstances = tippyInstances;
  var references = [];
  var triggerTargets = [];
  var currentTarget;
  var overrides = optionalProps.overrides;
  var interceptSetPropsCleanups = [];
  var shownOnCreate = false;
  function setTriggerTargets() {
    triggerTargets = individualInstances.map(function(instance) {
      return normalizeToArray(instance.props.triggerTarget || instance.reference);
    }).reduce(function(acc, item) {
      return acc.concat(item);
    }, []);
  }
  function setReferences() {
    references = individualInstances.map(function(instance) {
      return instance.reference;
    });
  }
  function enableInstances(isEnabled) {
    individualInstances.forEach(function(instance) {
      if (isEnabled) {
        instance.enable();
      } else {
        instance.disable();
      }
    });
  }
  function interceptSetProps(singleton2) {
    return individualInstances.map(function(instance) {
      var originalSetProps2 = instance.setProps;
      instance.setProps = function(props) {
        originalSetProps2(props);
        if (instance.reference === currentTarget) {
          singleton2.setProps(props);
        }
      };
      return function() {
        instance.setProps = originalSetProps2;
      };
    });
  }
  function prepareInstance(singleton2, target) {
    var index = triggerTargets.indexOf(target);
    if (target === currentTarget) {
      return;
    }
    currentTarget = target;
    var overrideProps = (overrides || []).concat("content").reduce(function(acc, prop) {
      acc[prop] = individualInstances[index].props[prop];
      return acc;
    }, {});
    singleton2.setProps(Object.assign({}, overrideProps, {
      getReferenceClientRect: typeof overrideProps.getReferenceClientRect === "function" ? overrideProps.getReferenceClientRect : function() {
        var _references$index;
        return (_references$index = references[index]) == null ? void 0 : _references$index.getBoundingClientRect();
      }
    }));
  }
  enableInstances(false);
  setReferences();
  setTriggerTargets();
  var plugin = {
    fn: function fn6() {
      return {
        onDestroy: function onDestroy2() {
          enableInstances(true);
        },
        onHidden: function onHidden2() {
          currentTarget = null;
        },
        onClickOutside: function onClickOutside2(instance) {
          if (instance.props.showOnCreate && !shownOnCreate) {
            shownOnCreate = true;
            currentTarget = null;
          }
        },
        onShow: function onShow2(instance) {
          if (instance.props.showOnCreate && !shownOnCreate) {
            shownOnCreate = true;
            prepareInstance(instance, references[0]);
          }
        },
        onTrigger: function onTrigger2(instance, event) {
          prepareInstance(instance, event.currentTarget);
        }
      };
    }
  };
  var singleton = tippy(div(), Object.assign({}, removeProperties(optionalProps, ["overrides"]), {
    plugins: [plugin].concat(optionalProps.plugins || []),
    triggerTarget: triggerTargets,
    popperOptions: Object.assign({}, optionalProps.popperOptions, {
      modifiers: [].concat(((_optionalProps$popper = optionalProps.popperOptions) == null ? void 0 : _optionalProps$popper.modifiers) || [], [applyStylesModifier])
    })
  }));
  var originalShow = singleton.show;
  singleton.show = function(target) {
    originalShow();
    if (!currentTarget && target == null) {
      return prepareInstance(singleton, references[0]);
    }
    if (currentTarget && target == null) {
      return;
    }
    if (typeof target === "number") {
      return references[target] && prepareInstance(singleton, references[target]);
    }
    if (individualInstances.indexOf(target) >= 0) {
      var ref = target.reference;
      return prepareInstance(singleton, ref);
    }
    if (references.indexOf(target) >= 0) {
      return prepareInstance(singleton, target);
    }
  };
  singleton.showNext = function() {
    var first = references[0];
    if (!currentTarget) {
      return singleton.show(0);
    }
    var index = references.indexOf(currentTarget);
    singleton.show(references[index + 1] || first);
  };
  singleton.showPrevious = function() {
    var last = references[references.length - 1];
    if (!currentTarget) {
      return singleton.show(last);
    }
    var index = references.indexOf(currentTarget);
    var target = references[index - 1] || last;
    singleton.show(target);
  };
  var originalSetProps = singleton.setProps;
  singleton.setProps = function(props) {
    overrides = props.overrides || overrides;
    originalSetProps(props);
  };
  singleton.setInstances = function(nextInstances) {
    enableInstances(true);
    interceptSetPropsCleanups.forEach(function(fn6) {
      return fn6();
    });
    individualInstances = nextInstances;
    enableInstances(false);
    setReferences();
    setTriggerTargets();
    interceptSetPropsCleanups = interceptSetProps(singleton);
    singleton.setProps({
      triggerTarget: triggerTargets
    });
  };
  interceptSetPropsCleanups = interceptSetProps(singleton);
  return singleton;
};
var BUBBLING_EVENTS_MAP = {
  mouseover: "mouseenter",
  focusin: "focus",
  click: "click"
};
function delegate(targets, props) {
  if (false) {
    errorWhen(!(props && props.target), ["You must specity a `target` prop indicating a CSS selector string matching", "the target elements that should receive a tippy."].join(" "));
  }
  var listeners = [];
  var childTippyInstances = [];
  var disabled = false;
  var target = props.target;
  var nativeProps = removeProperties(props, ["target"]);
  var parentProps = Object.assign({}, nativeProps, {
    trigger: "manual",
    touch: false
  });
  var childProps = Object.assign({
    touch: defaultProps.touch
  }, nativeProps, {
    showOnCreate: true
  });
  var returnValue = tippy(targets, parentProps);
  var normalizedReturnValue = normalizeToArray(returnValue);
  function onTrigger2(event) {
    if (!event.target || disabled) {
      return;
    }
    var targetNode = event.target.closest(target);
    if (!targetNode) {
      return;
    }
    var trigger = targetNode.getAttribute("data-tippy-trigger") || props.trigger || defaultProps.trigger;
    if (targetNode._tippy) {
      return;
    }
    if (event.type === "touchstart" && typeof childProps.touch === "boolean") {
      return;
    }
    if (event.type !== "touchstart" && trigger.indexOf(BUBBLING_EVENTS_MAP[event.type]) < 0) {
      return;
    }
    var instance = tippy(targetNode, childProps);
    if (instance) {
      childTippyInstances = childTippyInstances.concat(instance);
    }
  }
  function on(node, eventType, handler, options) {
    if (options === void 0) {
      options = false;
    }
    node.addEventListener(eventType, handler, options);
    listeners.push({
      node,
      eventType,
      handler,
      options
    });
  }
  function addEventListeners(instance) {
    var reference2 = instance.reference;
    on(reference2, "touchstart", onTrigger2, TOUCH_OPTIONS);
    on(reference2, "mouseover", onTrigger2);
    on(reference2, "focusin", onTrigger2);
    on(reference2, "click", onTrigger2);
  }
  function removeEventListeners() {
    listeners.forEach(function(_ref) {
      var node = _ref.node, eventType = _ref.eventType, handler = _ref.handler, options = _ref.options;
      node.removeEventListener(eventType, handler, options);
    });
    listeners = [];
  }
  function applyMutations(instance) {
    var originalDestroy = instance.destroy;
    var originalEnable = instance.enable;
    var originalDisable = instance.disable;
    instance.destroy = function(shouldDestroyChildInstances) {
      if (shouldDestroyChildInstances === void 0) {
        shouldDestroyChildInstances = true;
      }
      if (shouldDestroyChildInstances) {
        childTippyInstances.forEach(function(instance2) {
          instance2.destroy();
        });
      }
      childTippyInstances = [];
      removeEventListeners();
      originalDestroy();
    };
    instance.enable = function() {
      originalEnable();
      childTippyInstances.forEach(function(instance2) {
        return instance2.enable();
      });
      disabled = false;
    };
    instance.disable = function() {
      originalDisable();
      childTippyInstances.forEach(function(instance2) {
        return instance2.disable();
      });
      disabled = true;
    };
    addEventListeners(instance);
  }
  normalizedReturnValue.forEach(applyMutations);
  return returnValue;
}
var animateFill = {
  name: "animateFill",
  defaultValue: false,
  fn: function fn2(instance) {
    var _instance$props$rende;
    if (!((_instance$props$rende = instance.props.render) != null && _instance$props$rende.$$tippy)) {
      if (false) {
        errorWhen(instance.props.animateFill, "The `animateFill` plugin requires the default render function.");
      }
      return {};
    }
    var _getChildren = getChildren(instance.popper), box = _getChildren.box, content = _getChildren.content;
    var backdrop = instance.props.animateFill ? createBackdropElement() : null;
    return {
      onCreate: function onCreate2() {
        if (backdrop) {
          box.insertBefore(backdrop, box.firstElementChild);
          box.setAttribute("data-animatefill", "");
          box.style.overflow = "hidden";
          instance.setProps({
            arrow: false,
            animation: "shift-away"
          });
        }
      },
      onMount: function onMount2() {
        if (backdrop) {
          var transitionDuration = box.style.transitionDuration;
          var duration = Number(transitionDuration.replace("ms", ""));
          content.style.transitionDelay = Math.round(duration / 10) + "ms";
          backdrop.style.transitionDuration = transitionDuration;
          setVisibilityState([backdrop], "visible");
        }
      },
      onShow: function onShow2() {
        if (backdrop) {
          backdrop.style.transitionDuration = "0ms";
        }
      },
      onHide: function onHide2() {
        if (backdrop) {
          setVisibilityState([backdrop], "hidden");
        }
      }
    };
  }
};
function createBackdropElement() {
  var backdrop = div();
  backdrop.className = BACKDROP_CLASS;
  setVisibilityState([backdrop], "hidden");
  return backdrop;
}
var mouseCoords = {
  clientX: 0,
  clientY: 0
};
var activeInstances = [];
function storeMouseCoords(_ref) {
  var clientX = _ref.clientX, clientY = _ref.clientY;
  mouseCoords = {
    clientX,
    clientY
  };
}
function addMouseCoordsListener(doc) {
  doc.addEventListener("mousemove", storeMouseCoords);
}
function removeMouseCoordsListener(doc) {
  doc.removeEventListener("mousemove", storeMouseCoords);
}
var followCursor = {
  name: "followCursor",
  defaultValue: false,
  fn: function fn3(instance) {
    var reference2 = instance.reference;
    var doc = getOwnerDocument(instance.props.triggerTarget || reference2);
    var isInternalUpdate = false;
    var wasFocusEvent = false;
    var isUnmounted = true;
    var prevProps = instance.props;
    function getIsInitialBehavior() {
      return instance.props.followCursor === "initial" && instance.state.isVisible;
    }
    function addListener() {
      doc.addEventListener("mousemove", onMouseMove);
    }
    function removeListener() {
      doc.removeEventListener("mousemove", onMouseMove);
    }
    function unsetGetReferenceClientRect() {
      isInternalUpdate = true;
      instance.setProps({
        getReferenceClientRect: null
      });
      isInternalUpdate = false;
    }
    function onMouseMove(event) {
      var isCursorOverReference = event.target ? reference2.contains(event.target) : true;
      var followCursor2 = instance.props.followCursor;
      var clientX = event.clientX, clientY = event.clientY;
      var rect = reference2.getBoundingClientRect();
      var relativeX = clientX - rect.left;
      var relativeY = clientY - rect.top;
      if (isCursorOverReference || !instance.props.interactive) {
        instance.setProps({
          // @ts-ignore - unneeded DOMRect properties
          getReferenceClientRect: function getReferenceClientRect() {
            var rect2 = reference2.getBoundingClientRect();
            var x = clientX;
            var y = clientY;
            if (followCursor2 === "initial") {
              x = rect2.left + relativeX;
              y = rect2.top + relativeY;
            }
            var top2 = followCursor2 === "horizontal" ? rect2.top : y;
            var right2 = followCursor2 === "vertical" ? rect2.right : x;
            var bottom2 = followCursor2 === "horizontal" ? rect2.bottom : y;
            var left2 = followCursor2 === "vertical" ? rect2.left : x;
            return {
              width: right2 - left2,
              height: bottom2 - top2,
              top: top2,
              right: right2,
              bottom: bottom2,
              left: left2
            };
          }
        });
      }
    }
    function create() {
      if (instance.props.followCursor) {
        activeInstances.push({
          instance,
          doc
        });
        addMouseCoordsListener(doc);
      }
    }
    function destroy() {
      activeInstances = activeInstances.filter(function(data) {
        return data.instance !== instance;
      });
      if (activeInstances.filter(function(data) {
        return data.doc === doc;
      }).length === 0) {
        removeMouseCoordsListener(doc);
      }
    }
    return {
      onCreate: create,
      onDestroy: destroy,
      onBeforeUpdate: function onBeforeUpdate2() {
        prevProps = instance.props;
      },
      onAfterUpdate: function onAfterUpdate2(_, _ref2) {
        var followCursor2 = _ref2.followCursor;
        if (isInternalUpdate) {
          return;
        }
        if (followCursor2 !== void 0 && prevProps.followCursor !== followCursor2) {
          destroy();
          if (followCursor2) {
            create();
            if (instance.state.isMounted && !wasFocusEvent && !getIsInitialBehavior()) {
              addListener();
            }
          } else {
            removeListener();
            unsetGetReferenceClientRect();
          }
        }
      },
      onMount: function onMount2() {
        if (instance.props.followCursor && !wasFocusEvent) {
          if (isUnmounted) {
            onMouseMove(mouseCoords);
            isUnmounted = false;
          }
          if (!getIsInitialBehavior()) {
            addListener();
          }
        }
      },
      onTrigger: function onTrigger2(_, event) {
        if (isMouseEvent(event)) {
          mouseCoords = {
            clientX: event.clientX,
            clientY: event.clientY
          };
        }
        wasFocusEvent = event.type === "focus";
      },
      onHidden: function onHidden2() {
        if (instance.props.followCursor) {
          unsetGetReferenceClientRect();
          removeListener();
          isUnmounted = true;
        }
      }
    };
  }
};
function getProps(props, modifier) {
  var _props$popperOptions;
  return {
    popperOptions: Object.assign({}, props.popperOptions, {
      modifiers: [].concat((((_props$popperOptions = props.popperOptions) == null ? void 0 : _props$popperOptions.modifiers) || []).filter(function(_ref) {
        var name = _ref.name;
        return name !== modifier.name;
      }), [modifier])
    })
  };
}
var inlinePositioning = {
  name: "inlinePositioning",
  defaultValue: false,
  fn: function fn4(instance) {
    var reference2 = instance.reference;
    function isEnabled() {
      return !!instance.props.inlinePositioning;
    }
    var placement;
    var cursorRectIndex = -1;
    var isInternalUpdate = false;
    var triedPlacements = [];
    var modifier = {
      name: "tippyInlinePositioning",
      enabled: true,
      phase: "afterWrite",
      fn: function fn6(_ref2) {
        var state = _ref2.state;
        if (isEnabled()) {
          if (triedPlacements.indexOf(state.placement) !== -1) {
            triedPlacements = [];
          }
          if (placement !== state.placement && triedPlacements.indexOf(state.placement) === -1) {
            triedPlacements.push(state.placement);
            instance.setProps({
              // @ts-ignore - unneeded DOMRect properties
              getReferenceClientRect: function getReferenceClientRect() {
                return _getReferenceClientRect(state.placement);
              }
            });
          }
          placement = state.placement;
        }
      }
    };
    function _getReferenceClientRect(placement2) {
      return getInlineBoundingClientRect(getBasePlacement2(placement2), reference2.getBoundingClientRect(), arrayFrom(reference2.getClientRects()), cursorRectIndex);
    }
    function setInternalProps(partialProps) {
      isInternalUpdate = true;
      instance.setProps(partialProps);
      isInternalUpdate = false;
    }
    function addModifier() {
      if (!isInternalUpdate) {
        setInternalProps(getProps(instance.props, modifier));
      }
    }
    return {
      onCreate: addModifier,
      onAfterUpdate: addModifier,
      onTrigger: function onTrigger2(_, event) {
        if (isMouseEvent(event)) {
          var rects = arrayFrom(instance.reference.getClientRects());
          var cursorRect = rects.find(function(rect) {
            return rect.left - 2 <= event.clientX && rect.right + 2 >= event.clientX && rect.top - 2 <= event.clientY && rect.bottom + 2 >= event.clientY;
          });
          var index = rects.indexOf(cursorRect);
          cursorRectIndex = index > -1 ? index : cursorRectIndex;
        }
      },
      onHidden: function onHidden2() {
        cursorRectIndex = -1;
      }
    };
  }
};
function getInlineBoundingClientRect(currentBasePlacement, boundingRect, clientRects, cursorRectIndex) {
  if (clientRects.length < 2 || currentBasePlacement === null) {
    return boundingRect;
  }
  if (clientRects.length === 2 && cursorRectIndex >= 0 && clientRects[0].left > clientRects[1].right) {
    return clientRects[cursorRectIndex] || boundingRect;
  }
  switch (currentBasePlacement) {
    case "top":
    case "bottom": {
      var firstRect = clientRects[0];
      var lastRect = clientRects[clientRects.length - 1];
      var isTop = currentBasePlacement === "top";
      var top2 = firstRect.top;
      var bottom2 = lastRect.bottom;
      var left2 = isTop ? firstRect.left : lastRect.left;
      var right2 = isTop ? firstRect.right : lastRect.right;
      var width = right2 - left2;
      var height = bottom2 - top2;
      return {
        top: top2,
        bottom: bottom2,
        left: left2,
        right: right2,
        width,
        height
      };
    }
    case "left":
    case "right": {
      var minLeft = Math.min.apply(Math, clientRects.map(function(rects) {
        return rects.left;
      }));
      var maxRight = Math.max.apply(Math, clientRects.map(function(rects) {
        return rects.right;
      }));
      var measureRects = clientRects.filter(function(rect) {
        return currentBasePlacement === "left" ? rect.left === minLeft : rect.right === maxRight;
      });
      var _top = measureRects[0].top;
      var _bottom = measureRects[measureRects.length - 1].bottom;
      var _left = minLeft;
      var _right = maxRight;
      var _width = _right - _left;
      var _height = _bottom - _top;
      return {
        top: _top,
        bottom: _bottom,
        left: _left,
        right: _right,
        width: _width,
        height: _height
      };
    }
    default: {
      return boundingRect;
    }
  }
}
var sticky = {
  name: "sticky",
  defaultValue: false,
  fn: function fn5(instance) {
    var reference2 = instance.reference, popper2 = instance.popper;
    function getReference() {
      return instance.popperInstance ? instance.popperInstance.state.elements.reference : reference2;
    }
    function shouldCheck(value) {
      return instance.props.sticky === true || instance.props.sticky === value;
    }
    var prevRefRect = null;
    var prevPopRect = null;
    function updatePosition() {
      var currentRefRect = shouldCheck("reference") ? getReference().getBoundingClientRect() : null;
      var currentPopRect = shouldCheck("popper") ? popper2.getBoundingClientRect() : null;
      if (currentRefRect && areRectsDifferent(prevRefRect, currentRefRect) || currentPopRect && areRectsDifferent(prevPopRect, currentPopRect)) {
        if (instance.popperInstance) {
          instance.popperInstance.update();
        }
      }
      prevRefRect = currentRefRect;
      prevPopRect = currentPopRect;
      if (instance.state.isMounted) {
        requestAnimationFrame(updatePosition);
      }
    }
    return {
      onMount: function onMount2() {
        if (instance.props.sticky) {
          updatePosition();
        }
      }
    };
  }
};
function areRectsDifferent(rectA, rectB) {
  if (rectA && rectB) {
    return rectA.top !== rectB.top || rectA.right !== rectB.right || rectA.bottom !== rectB.bottom || rectA.left !== rectB.left;
  }
  return true;
}
tippy.setDefaultProps({
  render
});
var tippy_esm_default = tippy;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mYWlscy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Rlc2NyaXB0b3JzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1jYWxsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NsYXNzb2YtcmF3LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtY2FsbGFibGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nZXQtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXN5bWJvbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RyeS10by1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWNhbGxhYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1Zy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1uYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9tYXRoLXRydW5jLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtYXJyYXkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1zZXQtbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9lcy1ub3QtZXhjZWVkLXNhZmUtaW50ZWdlci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5wdXNoLmpzIiwgInNyYy9UaXBweS9UaXBweS50cyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZW51bXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXROb2RlTmFtZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFdpbmRvdy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2luc3RhbmNlT2YuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9hcHBseVN0eWxlcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvbWF0aC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvdXNlckFnZW50LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvaXNMYXlvdXRWaWV3cG9ydC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldEJvdW5kaW5nQ2xpZW50UmVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldExheW91dFJlY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9jb250YWlucy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldENvbXB1dGVkU3R5bGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9pc1RhYmxlRWxlbWVudC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldERvY3VtZW50RWxlbWVudC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFBhcmVudE5vZGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRPZmZzZXRQYXJlbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldE1haW5BeGlzRnJvbVBsYWNlbWVudC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvd2l0aGluLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9nZXRGcmVzaFNpZGVPYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL21lcmdlUGFkZGluZ09iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZXhwYW5kVG9IYXNoTWFwLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvYXJyb3cuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldFZhcmlhdGlvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL2NvbXB1dGVTdHlsZXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9ldmVudExpc3RlbmVycy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZ2V0T3Bwb3NpdGVQbGFjZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0V2luZG93U2Nyb2xsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0V2luZG93U2Nyb2xsQmFyWC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldFZpZXdwb3J0UmVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldERvY3VtZW50UmVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2lzU2Nyb2xsUGFyZW50LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvZ2V0U2Nyb2xsUGFyZW50LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9kb20tdXRpbHMvbGlzdFNjcm9sbFBhcmVudHMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL3JlY3RUb0NsaWVudFJlY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRDbGlwcGluZ1JlY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2NvbXB1dGVPZmZzZXRzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9kZXRlY3RPdmVyZmxvdy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvY29tcHV0ZUF1dG9QbGFjZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9mbGlwLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9tb2RpZmllcnMvaGlkZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL29mZnNldC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvbW9kaWZpZXJzL3BvcHBlck9mZnNldHMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL2dldEFsdEF4aXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL21vZGlmaWVycy9wcmV2ZW50T3ZlcmZsb3cuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRIVE1MRWxlbWVudFNjcm9sbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvZG9tLXV0aWxzL2dldE5vZGVTY3JvbGwuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL2RvbS11dGlscy9nZXRDb21wb3NpdGVSZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi91dGlscy9vcmRlck1vZGlmaWVycy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9saWIvdXRpbHMvZGVib3VuY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3V0aWxzL21lcmdlQnlOYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL2xpYi9jcmVhdGVQb3BwZXIuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvbGliL3BvcHBlci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vdGlwcHkuanNANi4zLjcvbm9kZV9tb2R1bGVzL3RpcHB5LmpzL3NyYy9jb25zdGFudHMudHMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL3RpcHB5LmpzQDYuMy43L25vZGVfbW9kdWxlcy90aXBweS5qcy9zcmMvdXRpbHMudHMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL3RpcHB5LmpzQDYuMy43L25vZGVfbW9kdWxlcy90aXBweS5qcy9zcmMvZG9tLXV0aWxzLnRzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS90aXBweS5qc0A2LjMuNy9ub2RlX21vZHVsZXMvdGlwcHkuanMvc3JjL2JpbmRHbG9iYWxFdmVudExpc3RlbmVycy50cyIsICJub2RlX21vZHVsZXMvLnBucG0vdGlwcHkuanNANi4zLjcvbm9kZV9tb2R1bGVzL3RpcHB5LmpzL3NyYy9icm93c2VyLnRzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS90aXBweS5qc0A2LjMuNy9ub2RlX21vZHVsZXMvdGlwcHkuanMvc3JjL3ZhbGlkYXRpb24udHMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL3RpcHB5LmpzQDYuMy43L25vZGVfbW9kdWxlcy90aXBweS5qcy9zcmMvcHJvcHMudHMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL3RpcHB5LmpzQDYuMy43L25vZGVfbW9kdWxlcy90aXBweS5qcy9zcmMvdGVtcGxhdGUudHMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL3RpcHB5LmpzQDYuMy43L25vZGVfbW9kdWxlcy90aXBweS5qcy9zcmMvY3JlYXRlVGlwcHkudHMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL3RpcHB5LmpzQDYuMy43L25vZGVfbW9kdWxlcy90aXBweS5qcy9zcmMvaW5kZXgudHMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL3RpcHB5LmpzQDYuMy43L25vZGVfbW9kdWxlcy90aXBweS5qcy9zcmMvYWRkb25zL2NyZWF0ZVNpbmdsZXRvbi50cyIsICJub2RlX21vZHVsZXMvLnBucG0vdGlwcHkuanNANi4zLjcvbm9kZV9tb2R1bGVzL3RpcHB5LmpzL3NyYy9hZGRvbnMvZGVsZWdhdGUudHMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL3RpcHB5LmpzQDYuMy43L25vZGVfbW9kdWxlcy90aXBweS5qcy9zcmMvcGx1Z2lucy9hbmltYXRlRmlsbC50cyIsICJub2RlX21vZHVsZXMvLnBucG0vdGlwcHkuanNANi4zLjcvbm9kZV9tb2R1bGVzL3RpcHB5LmpzL3NyYy9wbHVnaW5zL2ZvbGxvd0N1cnNvci50cyIsICJub2RlX21vZHVsZXMvLnBucG0vdGlwcHkuanNANi4zLjcvbm9kZV9tb2R1bGVzL3RpcHB5LmpzL3NyYy9wbHVnaW5zL2lubGluZVBvc2l0aW9uaW5nLnRzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS90aXBweS5qc0A2LjMuNy9ub2RlX21vZHVsZXMvdGlwcHkuanMvc3JjL3BsdWdpbnMvc3RpY2t5LnRzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS90aXBweS5qc0A2LjMuNy9ub2RlX21vZHVsZXMvdGlwcHkuanMvYnVpbGQvYmFzZS5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiJ3VzZSBzdHJpY3QnO1xudmFyIGNoZWNrID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAmJiBpdC5NYXRoID09PSBNYXRoICYmIGl0O1xufTtcblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbm1vZHVsZS5leHBvcnRzID1cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWdsb2JhbC10aGlzIC0tIHNhZmVcbiAgY2hlY2sodHlwZW9mIGdsb2JhbFRoaXMgPT0gJ29iamVjdCcgJiYgZ2xvYmFsVGhpcykgfHxcbiAgY2hlY2sodHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cpIHx8XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLWdsb2JhbHMgLS0gc2FmZVxuICBjaGVjayh0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmKSB8fFxuICBjaGVjayh0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCkgfHxcbiAgY2hlY2sodHlwZW9mIHRoaXMgPT0gJ29iamVjdCcgJiYgdGhpcykgfHxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jIC0tIGZhbGxiYWNrXG4gIChmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KSgpIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxuLy8gRGV0ZWN0IElFOCdzIGluY29tcGxldGUgZGVmaW5lUHJvcGVydHkgaW1wbGVtZW50YXRpb25cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAxLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KVsxXSAhPT0gNztcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1mdW5jdGlvbi1wcm90b3R5cGUtYmluZCAtLSBzYWZlXG4gIHZhciB0ZXN0ID0gKGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSkuYmluZCgpO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zIC0tIHNhZmVcbiAgcmV0dXJuIHR5cGVvZiB0ZXN0ICE9ICdmdW5jdGlvbicgfHwgdGVzdC5oYXNPd25Qcm9wZXJ0eSgncHJvdG90eXBlJyk7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgTkFUSVZFX0JJTkQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUnKTtcblxudmFyIGNhbGwgPSBGdW5jdGlvbi5wcm90b3R5cGUuY2FsbDtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfQklORCA/IGNhbGwuYmluZChjYWxsKSA6IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGNhbGwuYXBwbHkoY2FsbCwgYXJndW1lbnRzKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIE5hc2hvcm4gfiBKREs4IGJ1Z1xudmFyIE5BU0hPUk5fQlVHID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yICYmICEkcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh7IDE6IDIgfSwgMSk7XG5cbi8vIGBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eWlzZW51bWVyYWJsZVxuZXhwb3J0cy5mID0gTkFTSE9STl9CVUcgPyBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShWKSB7XG4gIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRoaXMsIFYpO1xuICByZXR1cm4gISFkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IuZW51bWVyYWJsZTtcbn0gOiAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgTkFUSVZFX0JJTkQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUnKTtcblxudmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xudmFyIGNhbGwgPSBGdW5jdGlvblByb3RvdHlwZS5jYWxsO1xudmFyIHVuY3VycnlUaGlzV2l0aEJpbmQgPSBOQVRJVkVfQklORCAmJiBGdW5jdGlvblByb3RvdHlwZS5iaW5kLmJpbmQoY2FsbCwgY2FsbCk7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX0JJTkQgPyB1bmN1cnJ5VGhpc1dpdGhCaW5kIDogZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGNhbGwuYXBwbHkoZm4sIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxudmFyIHRvU3RyaW5nID0gdW5jdXJyeVRoaXMoe30udG9TdHJpbmcpO1xudmFyIHN0cmluZ1NsaWNlID0gdW5jdXJyeVRoaXMoJycuc2xpY2UpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gc3RyaW5nU2xpY2UodG9TdHJpbmcoaXQpLCA4LCAtMSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG52YXIgc3BsaXQgPSB1bmN1cnJ5VGhpcygnJy5zcGxpdCk7XG5cbi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG5tb2R1bGUuZXhwb3J0cyA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gdGhyb3dzIGFuIGVycm9yIGluIHJoaW5vLCBzZWUgaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvcmhpbm8vaXNzdWVzLzM0NlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zIC0tIHNhZmVcbiAgcmV0dXJuICEkT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCk7XG59KSA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY2xhc3NvZihpdCkgPT09ICdTdHJpbmcnID8gc3BsaXQoaXQsICcnKSA6ICRPYmplY3QoaXQpO1xufSA6ICRPYmplY3Q7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gd2UgY2FuJ3QgdXNlIGp1c3QgYGl0ID09IG51bGxgIHNpbmNlIG9mIGBkb2N1bWVudC5hbGxgIHNwZWNpYWwgY2FzZVxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1Jc0hUTUxEREEtaW50ZXJuYWwtc2xvdC1hZWNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA9PT0gbnVsbCB8fCBpdCA9PT0gdW5kZWZpbmVkO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtbnVsbC1vci11bmRlZmluZWQnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcmVxdWlyZW9iamVjdGNvZXJjaWJsZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGlzTnVsbE9yVW5kZWZpbmVkKGl0KSkgdGhyb3cgbmV3ICRUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSW5kZXhlZE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGl0KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtSXNIVE1MRERBLWludGVybmFsLXNsb3RcbnZhciBkb2N1bWVudEFsbCA9IHR5cGVvZiBkb2N1bWVudCA9PSAnb2JqZWN0JyAmJiBkb2N1bWVudC5hbGw7XG5cbi8vIGBJc0NhbGxhYmxlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXNjYWxsYWJsZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vbm8tdHlwZW9mLXVuZGVmaW5lZCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xubW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgZG9jdW1lbnRBbGwgPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnRBbGwgIT09IHVuZGVmaW5lZCA/IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gdHlwZW9mIGFyZ3VtZW50ID09ICdmdW5jdGlvbicgfHwgYXJndW1lbnQgPT09IGRvY3VtZW50QWxsO1xufSA6IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gdHlwZW9mIGFyZ3VtZW50ID09ICdmdW5jdGlvbic7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IGlzQ2FsbGFibGUoaXQpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIGFGdW5jdGlvbiA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gaXNDYWxsYWJsZShhcmd1bWVudCkgPyBhcmd1bWVudCA6IHVuZGVmaW5lZDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWVzcGFjZSwgbWV0aG9kKSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IGFGdW5jdGlvbihnbG9iYWxbbmFtZXNwYWNlXSkgOiBnbG9iYWxbbmFtZXNwYWNlXSAmJiBnbG9iYWxbbmFtZXNwYWNlXVttZXRob2RdO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gdW5jdXJyeVRoaXMoe30uaXNQcm90b3R5cGVPZik7XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgbmF2aWdhdG9yICE9ICd1bmRlZmluZWQnICYmIFN0cmluZyhuYXZpZ2F0b3IudXNlckFnZW50KSB8fCAnJztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudCcpO1xuXG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIERlbm8gPSBnbG9iYWwuRGVubztcbnZhciB2ZXJzaW9ucyA9IHByb2Nlc3MgJiYgcHJvY2Vzcy52ZXJzaW9ucyB8fCBEZW5vICYmIERlbm8udmVyc2lvbjtcbnZhciB2OCA9IHZlcnNpb25zICYmIHZlcnNpb25zLnY4O1xudmFyIG1hdGNoLCB2ZXJzaW9uO1xuXG5pZiAodjgpIHtcbiAgbWF0Y2ggPSB2OC5zcGxpdCgnLicpO1xuICAvLyBpbiBvbGQgQ2hyb21lLCB2ZXJzaW9ucyBvZiBWOCBpc24ndCBWOCA9IENocm9tZSAvIDEwXG4gIC8vIGJ1dCB0aGVpciBjb3JyZWN0IHZlcnNpb25zIGFyZSBub3QgaW50ZXJlc3RpbmcgZm9yIHVzXG4gIHZlcnNpb24gPSBtYXRjaFswXSA+IDAgJiYgbWF0Y2hbMF0gPCA0ID8gMSA6ICsobWF0Y2hbMF0gKyBtYXRjaFsxXSk7XG59XG5cbi8vIEJyb3dzZXJGUyBOb2RlSlMgYHByb2Nlc3NgIHBvbHlmaWxsIGluY29ycmVjdGx5IHNldCBgLnY4YCB0byBgMC4wYFxuLy8gc28gY2hlY2sgYHVzZXJBZ2VudGAgZXZlbiBpZiBgLnY4YCBleGlzdHMsIGJ1dCAwXG5pZiAoIXZlcnNpb24gJiYgdXNlckFnZW50KSB7XG4gIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9FZGdlXFwvKFxcZCspLyk7XG4gIGlmICghbWF0Y2ggfHwgbWF0Y2hbMV0gPj0gNzQpIHtcbiAgICBtYXRjaCA9IHVzZXJBZ2VudC5tYXRjaCgvQ2hyb21lXFwvKFxcZCspLyk7XG4gICAgaWYgKG1hdGNoKSB2ZXJzaW9uID0gK21hdGNoWzFdO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdmVyc2lvbjtcbiIsICIndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBlcy9uby1zeW1ib2wgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmcgKi9cbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS12OC12ZXJzaW9uJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbnZhciAkU3RyaW5nID0gZ2xvYmFsLlN0cmluZztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eXN5bWJvbHMgLS0gcmVxdWlyZWQgZm9yIHRlc3Rpbmdcbm1vZHVsZS5leHBvcnRzID0gISFPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBzeW1ib2wgPSBTeW1ib2woJ3N5bWJvbCBkZXRlY3Rpb24nKTtcbiAgLy8gQ2hyb21lIDM4IFN5bWJvbCBoYXMgaW5jb3JyZWN0IHRvU3RyaW5nIGNvbnZlcnNpb25cbiAgLy8gYGdldC1vd24tcHJvcGVydHktc3ltYm9sc2AgcG9seWZpbGwgc3ltYm9scyBjb252ZXJ0ZWQgdG8gb2JqZWN0IGFyZSBub3QgU3ltYm9sIGluc3RhbmNlc1xuICAvLyBuYjogRG8gbm90IGNhbGwgYFN0cmluZ2AgZGlyZWN0bHkgdG8gYXZvaWQgdGhpcyBiZWluZyBvcHRpbWl6ZWQgb3V0IHRvIGBzeW1ib2wrJydgIHdoaWNoIHdpbGwsXG4gIC8vIG9mIGNvdXJzZSwgZmFpbC5cbiAgcmV0dXJuICEkU3RyaW5nKHN5bWJvbCkgfHwgIShPYmplY3Qoc3ltYm9sKSBpbnN0YW5jZW9mIFN5bWJvbCkgfHxcbiAgICAvLyBDaHJvbWUgMzgtNDAgc3ltYm9scyBhcmUgbm90IGluaGVyaXRlZCBmcm9tIERPTSBjb2xsZWN0aW9ucyBwcm90b3R5cGVzIHRvIGluc3RhbmNlc1xuICAgICFTeW1ib2wuc2hhbSAmJiBWOF9WRVJTSU9OICYmIFY4X1ZFUlNJT04gPCA0MTtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLXN5bWJvbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZyAqL1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3ltYm9sLWNvbnN0cnVjdG9yLWRldGVjdGlvbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9TWU1CT0xcbiAgJiYgIVN5bWJvbC5zaGFtXG4gICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCc7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGlzUHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWlzLXByb3RvdHlwZS1vZicpO1xudmFyIFVTRV9TWU1CT0xfQVNfVUlEID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkJyk7XG5cbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVTRV9TWU1CT0xfQVNfVUlEID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24gKGl0KSB7XG4gIHZhciAkU3ltYm9sID0gZ2V0QnVpbHRJbignU3ltYm9sJyk7XG4gIHJldHVybiBpc0NhbGxhYmxlKCRTeW1ib2wpICYmIGlzUHJvdG90eXBlT2YoJFN5bWJvbC5wcm90b3R5cGUsICRPYmplY3QoaXQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICRTdHJpbmcgPSBTdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICRTdHJpbmcoYXJndW1lbnQpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiAnT2JqZWN0JztcbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHRyeVRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RyeS10by1zdHJpbmcnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBBc3NlcnQ6IElzQ2FsbGFibGUoYXJndW1lbnQpIGlzIHRydWVgXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoaXNDYWxsYWJsZShhcmd1bWVudCkpIHJldHVybiBhcmd1bWVudDtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IodHJ5VG9TdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcbnZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZCcpO1xuXG4vLyBgR2V0TWV0aG9kYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtZ2V0bWV0aG9kXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChWLCBQKSB7XG4gIHZhciBmdW5jID0gVltQXTtcbiAgcmV0dXJuIGlzTnVsbE9yVW5kZWZpbmVkKGZ1bmMpID8gdW5kZWZpbmVkIDogYUNhbGxhYmxlKGZ1bmMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYE9yZGluYXJ5VG9QcmltaXRpdmVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vcmRpbmFyeXRvcHJpbWl0aXZlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnB1dCwgcHJlZikge1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKHByZWYgPT09ICdzdHJpbmcnICYmIGlzQ2FsbGFibGUoZm4gPSBpbnB1dC50b1N0cmluZykgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmIChpc0NhbGxhYmxlKGZuID0gaW5wdXQudmFsdWVPZikgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmIChwcmVmICE9PSAnc3RyaW5nJyAmJiBpc0NhbGxhYmxlKGZuID0gaW5wdXQudG9TdHJpbmcpICYmICFpc09iamVjdCh2YWwgPSBjYWxsKGZuLCBpbnB1dCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICB0cnkge1xuICAgIGRlZmluZVByb3BlcnR5KGdsb2JhbCwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBnbG9iYWxba2V5XSA9IHZhbHVlO1xuICB9IHJldHVybiB2YWx1ZTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBkZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5Jyk7XG5cbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IGRlZmluZUdsb2JhbFByb3BlcnR5KFNIQVJFRCwge30pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN0b3JlO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcbnZhciBzdG9yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB7fSk7XG59KSgndmVyc2lvbnMnLCBbXSkucHVzaCh7XG4gIHZlcnNpb246ICczLjM1LjEnLFxuICBtb2RlOiBJU19QVVJFID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMTQtMjAyNCBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KScsXG4gIGxpY2Vuc2U6ICdodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9ibG9iL3YzLjM1LjEvTElDRU5TRScsXG4gIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzJ1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xuXG4vLyBgVG9PYmplY3RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b29iamVjdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuICRPYmplY3QocmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudCkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IHVuY3VycnlUaGlzKHt9Lmhhc093blByb3BlcnR5KTtcblxuLy8gYEhhc093blByb3BlcnR5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaGFzb3ducHJvcGVydHlcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtaGFzb3duIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0Lmhhc093biB8fCBmdW5jdGlvbiBoYXNPd24oaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkodG9PYmplY3QoaXQpLCBrZXkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbnZhciBpZCA9IDA7XG52YXIgcG9zdGZpeCA9IE1hdGgucmFuZG9tKCk7XG52YXIgdG9TdHJpbmcgPSB1bmN1cnJ5VGhpcygxLjAudG9TdHJpbmcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJyArIChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5KSArICcpXycgKyB0b1N0cmluZygrK2lkICsgcG9zdGZpeCwgMzYpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcbnZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24nKTtcbnZhciBVU0VfU1lNQk9MX0FTX1VJRCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZCcpO1xuXG52YXIgU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcbnZhciBXZWxsS25vd25TeW1ib2xzU3RvcmUgPSBzaGFyZWQoJ3drcycpO1xudmFyIGNyZWF0ZVdlbGxLbm93blN5bWJvbCA9IFVTRV9TWU1CT0xfQVNfVUlEID8gU3ltYm9sWydmb3InXSB8fCBTeW1ib2wgOiBTeW1ib2wgJiYgU3ltYm9sLndpdGhvdXRTZXR0ZXIgfHwgdWlkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGlmICghaGFzT3duKFdlbGxLbm93blN5bWJvbHNTdG9yZSwgbmFtZSkpIHtcbiAgICBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV0gPSBOQVRJVkVfU1lNQk9MICYmIGhhc093bihTeW1ib2wsIG5hbWUpXG4gICAgICA/IFN5bWJvbFtuYW1lXVxuICAgICAgOiBjcmVhdGVXZWxsS25vd25TeW1ib2woJ1N5bWJvbC4nICsgbmFtZSk7XG4gIH0gcmV0dXJuIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXN5bWJvbCcpO1xudmFyIGdldE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtbWV0aG9kJyk7XG52YXIgb3JkaW5hcnlUb1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vcmRpbmFyeS10by1wcmltaXRpdmUnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG52YXIgVE9fUFJJTUlUSVZFID0gd2VsbEtub3duU3ltYm9sKCd0b1ByaW1pdGl2ZScpO1xuXG4vLyBgVG9QcmltaXRpdmVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b3ByaW1pdGl2ZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5wdXQsIHByZWYpIHtcbiAgaWYgKCFpc09iamVjdChpbnB1dCkgfHwgaXNTeW1ib2woaW5wdXQpKSByZXR1cm4gaW5wdXQ7XG4gIHZhciBleG90aWNUb1ByaW0gPSBnZXRNZXRob2QoaW5wdXQsIFRPX1BSSU1JVElWRSk7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChleG90aWNUb1ByaW0pIHtcbiAgICBpZiAocHJlZiA9PT0gdW5kZWZpbmVkKSBwcmVmID0gJ2RlZmF1bHQnO1xuICAgIHJlc3VsdCA9IGNhbGwoZXhvdGljVG9QcmltLCBpbnB1dCwgcHJlZik7XG4gICAgaWYgKCFpc09iamVjdChyZXN1bHQpIHx8IGlzU3ltYm9sKHJlc3VsdCkpIHJldHVybiByZXN1bHQ7XG4gICAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG4gIH1cbiAgaWYgKHByZWYgPT09IHVuZGVmaW5lZCkgcHJlZiA9ICdudW1iZXInO1xuICByZXR1cm4gb3JkaW5hcnlUb1ByaW1pdGl2ZShpbnB1dCwgcHJlZik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcmltaXRpdmUnKTtcbnZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1zeW1ib2wnKTtcblxuLy8gYFRvUHJvcGVydHlLZXlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b3Byb3BlcnR5a2V5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICB2YXIga2V5ID0gdG9QcmltaXRpdmUoYXJndW1lbnQsICdzdHJpbmcnKTtcbiAgcmV0dXJuIGlzU3ltYm9sKGtleSkgPyBrZXkgOiBrZXkgKyAnJztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyIGRvY3VtZW50ID0gZ2xvYmFsLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgRVhJU1RTID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gRVhJU1RTID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBjcmVhdGVFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50Jyk7XG5cbi8vIFRoYW5rcyB0byBJRTggZm9yIGl0cyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhREVTQ1JJUFRPUlMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGNyZWF0ZUVsZW1lbnQoJ2RpdicpLCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH1cbiAgfSkuYSAhPT0gNztcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1wcm9wZXJ0eS1pcy1lbnVtZXJhYmxlJyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcm9wZXJ0eS1rZXknKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yXG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyA/ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICBPID0gdG9JbmRleGVkT2JqZWN0KE8pO1xuICBQID0gdG9Qcm9wZXJ0eUtleShQKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIGlmIChoYXNPd24oTywgUCkpIHJldHVybiBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoIWNhbGwocHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUuZiwgTywgUCksIE9bUF0pO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBWOCB+IENocm9tZSAzNi1cbi8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMzMzRcbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9LCAncHJvdG90eXBlJywge1xuICAgIHZhbHVlOiA0MixcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSkucHJvdG90eXBlICE9PSA0Mjtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyICRTdHJpbmcgPSBTdHJpbmc7XG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYEFzc2VydDogVHlwZShhcmd1bWVudCkgaXMgT2JqZWN0YFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgaWYgKGlzT2JqZWN0KGFyZ3VtZW50KSkgcmV0dXJuIGFyZ3VtZW50O1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcigkU3RyaW5nKGFyZ3VtZW50KSArICcgaXMgbm90IGFuIG9iamVjdCcpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pZTgtZG9tLWRlZmluZScpO1xudmFyIFY4X1BST1RPVFlQRV9ERUZJTkVfQlVHID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Y4LXByb3RvdHlwZS1kZWZpbmUtYnVnJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcm9wZXJ0eS1rZXknKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbnZhciAkZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgRU5VTUVSQUJMRSA9ICdlbnVtZXJhYmxlJztcbnZhciBDT05GSUdVUkFCTEUgPSAnY29uZmlndXJhYmxlJztcbnZhciBXUklUQUJMRSA9ICd3cml0YWJsZSc7XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydHlgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydHlcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gVjhfUFJPVE9UWVBFX0RFRklORV9CVUcgPyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9Qcm9wZXJ0eUtleShQKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmICh0eXBlb2YgTyA9PT0gJ2Z1bmN0aW9uJyAmJiBQID09PSAncHJvdG90eXBlJyAmJiAndmFsdWUnIGluIEF0dHJpYnV0ZXMgJiYgV1JJVEFCTEUgaW4gQXR0cmlidXRlcyAmJiAhQXR0cmlidXRlc1tXUklUQUJMRV0pIHtcbiAgICB2YXIgY3VycmVudCA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG4gICAgaWYgKGN1cnJlbnQgJiYgY3VycmVudFtXUklUQUJMRV0pIHtcbiAgICAgIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICAgICAgQXR0cmlidXRlcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiBDT05GSUdVUkFCTEUgaW4gQXR0cmlidXRlcyA/IEF0dHJpYnV0ZXNbQ09ORklHVVJBQkxFXSA6IGN1cnJlbnRbQ09ORklHVVJBQkxFXSxcbiAgICAgICAgZW51bWVyYWJsZTogRU5VTUVSQUJMRSBpbiBBdHRyaWJ1dGVzID8gQXR0cmlidXRlc1tFTlVNRVJBQkxFXSA6IGN1cnJlbnRbRU5VTUVSQUJMRV0sXG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgICAgfTtcbiAgICB9XG4gIH0gcmV0dXJuICRkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKTtcbn0gOiAkZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9Qcm9wZXJ0eUtleShQKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gJGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IG5ldyAkVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCcpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5TW9kdWxlLmYob2JqZWN0LCBrZXksIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcblxudmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyIGdldERlc2NyaXB0b3IgPSBERVNDUklQVE9SUyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG52YXIgRVhJU1RTID0gaGFzT3duKEZ1bmN0aW9uUHJvdG90eXBlLCAnbmFtZScpO1xuLy8gYWRkaXRpb25hbCBwcm90ZWN0aW9uIGZyb20gbWluaWZpZWQgLyBtYW5nbGVkIC8gZHJvcHBlZCBmdW5jdGlvbiBuYW1lc1xudmFyIFBST1BFUiA9IEVYSVNUUyAmJiAoZnVuY3Rpb24gc29tZXRoaW5nKCkgeyAvKiBlbXB0eSAqLyB9KS5uYW1lID09PSAnc29tZXRoaW5nJztcbnZhciBDT05GSUdVUkFCTEUgPSBFWElTVFMgJiYgKCFERVNDUklQVE9SUyB8fCAoREVTQ1JJUFRPUlMgJiYgZ2V0RGVzY3JpcHRvcihGdW5jdGlvblByb3RvdHlwZSwgJ25hbWUnKS5jb25maWd1cmFibGUpKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEVYSVNUUzogRVhJU1RTLFxuICBQUk9QRVI6IFBST1BFUixcbiAgQ09ORklHVVJBQkxFOiBDT05GSUdVUkFCTEVcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBzdG9yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcblxudmFyIGZ1bmN0aW9uVG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyhGdW5jdGlvbi50b1N0cmluZyk7XG5cbi8vIHRoaXMgaGVscGVyIGJyb2tlbiBpbiBgY29yZS1qc0AzLjQuMS0zLjQuNGAsIHNvIHdlIGNhbid0IHVzZSBgc2hhcmVkYCBoZWxwZXJcbmlmICghaXNDYWxsYWJsZShzdG9yZS5pbnNwZWN0U291cmNlKSkge1xuICBzdG9yZS5pbnNwZWN0U291cmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uVG9TdHJpbmcoaXQpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0b3JlLmluc3BlY3RTb3VyY2U7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbnZhciBXZWFrTWFwID0gZ2xvYmFsLldlYWtNYXA7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNDYWxsYWJsZShXZWFrTWFwKSAmJiAvbmF0aXZlIGNvZGUvLnRlc3QoU3RyaW5nKFdlYWtNYXApKTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcblxudmFyIGtleXMgPSBzaGFyZWQoJ2tleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBrZXlzW2tleV0gfHwgKGtleXNba2V5XSA9IHVpZChrZXkpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgTkFUSVZFX1dFQUtfTUFQID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlYWstbWFwLWJhc2ljLWRldGVjdGlvbicpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG52YXIgc2hhcmVkS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG5cbnZhciBPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCA9ICdPYmplY3QgYWxyZWFkeSBpbml0aWFsaXplZCc7XG52YXIgVHlwZUVycm9yID0gZ2xvYmFsLlR5cGVFcnJvcjtcbnZhciBXZWFrTWFwID0gZ2xvYmFsLldlYWtNYXA7XG52YXIgc2V0LCBnZXQsIGhhcztcblxudmFyIGVuZm9yY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGhhcyhpdCkgPyBnZXQoaXQpIDogc2V0KGl0LCB7fSk7XG59O1xuXG52YXIgZ2V0dGVyRm9yID0gZnVuY3Rpb24gKFRZUEUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpdCkge1xuICAgIHZhciBzdGF0ZTtcbiAgICBpZiAoIWlzT2JqZWN0KGl0KSB8fCAoc3RhdGUgPSBnZXQoaXQpKS50eXBlICE9PSBUWVBFKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbmNvbXBhdGlibGUgcmVjZWl2ZXIsICcgKyBUWVBFICsgJyByZXF1aXJlZCcpO1xuICAgIH0gcmV0dXJuIHN0YXRlO1xuICB9O1xufTtcblxuaWYgKE5BVElWRV9XRUFLX01BUCB8fCBzaGFyZWQuc3RhdGUpIHtcbiAgdmFyIHN0b3JlID0gc2hhcmVkLnN0YXRlIHx8IChzaGFyZWQuc3RhdGUgPSBuZXcgV2Vha01hcCgpKTtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tc2VsZi1hc3NpZ24gLS0gcHJvdG90eXBlIG1ldGhvZHMgcHJvdGVjdGlvbiAqL1xuICBzdG9yZS5nZXQgPSBzdG9yZS5nZXQ7XG4gIHN0b3JlLmhhcyA9IHN0b3JlLmhhcztcbiAgc3RvcmUuc2V0ID0gc3RvcmUuc2V0O1xuICAvKiBlc2xpbnQtZW5hYmxlIG5vLXNlbGYtYXNzaWduIC0tIHByb3RvdHlwZSBtZXRob2RzIHByb3RlY3Rpb24gKi9cbiAgc2V0ID0gZnVuY3Rpb24gKGl0LCBtZXRhZGF0YSkge1xuICAgIGlmIChzdG9yZS5oYXMoaXQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKE9CSkVDVF9BTFJFQURZX0lOSVRJQUxJWkVEKTtcbiAgICBtZXRhZGF0YS5mYWNhZGUgPSBpdDtcbiAgICBzdG9yZS5zZXQoaXQsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBzdG9yZS5nZXQoaXQpIHx8IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gc3RvcmUuaGFzKGl0KTtcbiAgfTtcbn0gZWxzZSB7XG4gIHZhciBTVEFURSA9IHNoYXJlZEtleSgnc3RhdGUnKTtcbiAgaGlkZGVuS2V5c1tTVEFURV0gPSB0cnVlO1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgaWYgKGhhc093bihpdCwgU1RBVEUpKSB0aHJvdyBuZXcgVHlwZUVycm9yKE9CSkVDVF9BTFJFQURZX0lOSVRJQUxJWkVEKTtcbiAgICBtZXRhZGF0YS5mYWNhZGUgPSBpdDtcbiAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoaXQsIFNUQVRFLCBtZXRhZGF0YSk7XG4gICAgcmV0dXJuIG1ldGFkYXRhO1xuICB9O1xuICBnZXQgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaGFzT3duKGl0LCBTVEFURSkgPyBpdFtTVEFURV0gOiB7fTtcbiAgfTtcbiAgaGFzID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGhhc093bihpdCwgU1RBVEUpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBzZXQsXG4gIGdldDogZ2V0LFxuICBoYXM6IGhhcyxcbiAgZW5mb3JjZTogZW5mb3JjZSxcbiAgZ2V0dGVyRm9yOiBnZXR0ZXJGb3Jcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBDT05GSUdVUkFCTEVfRlVOQ1RJT05fTkFNRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1uYW1lJykuQ09ORklHVVJBQkxFO1xudmFyIGluc3BlY3RTb3VyY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UnKTtcbnZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJyk7XG5cbnZhciBlbmZvcmNlSW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZW5mb3JjZTtcbnZhciBnZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXQ7XG52YXIgJFN0cmluZyA9IFN0cmluZztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIHN0cmluZ1NsaWNlID0gdW5jdXJyeVRoaXMoJycuc2xpY2UpO1xudmFyIHJlcGxhY2UgPSB1bmN1cnJ5VGhpcygnJy5yZXBsYWNlKTtcbnZhciBqb2luID0gdW5jdXJyeVRoaXMoW10uam9pbik7XG5cbnZhciBDT05GSUdVUkFCTEVfTEVOR1RIID0gREVTQ1JJUFRPUlMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5KGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSwgJ2xlbmd0aCcsIHsgdmFsdWU6IDggfSkubGVuZ3RoICE9PSA4O1xufSk7XG5cbnZhciBURU1QTEFURSA9IFN0cmluZyhTdHJpbmcpLnNwbGl0KCdTdHJpbmcnKTtcblxudmFyIG1ha2VCdWlsdEluID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUsIG5hbWUsIG9wdGlvbnMpIHtcbiAgaWYgKHN0cmluZ1NsaWNlKCRTdHJpbmcobmFtZSksIDAsIDcpID09PSAnU3ltYm9sKCcpIHtcbiAgICBuYW1lID0gJ1snICsgcmVwbGFjZSgkU3RyaW5nKG5hbWUpLCAvXlN5bWJvbFxcKChbXildKilcXCkuKiQvLCAnJDEnKSArICddJztcbiAgfVxuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmdldHRlcikgbmFtZSA9ICdnZXQgJyArIG5hbWU7XG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuc2V0dGVyKSBuYW1lID0gJ3NldCAnICsgbmFtZTtcbiAgaWYgKCFoYXNPd24odmFsdWUsICduYW1lJykgfHwgKENPTkZJR1VSQUJMRV9GVU5DVElPTl9OQU1FICYmIHZhbHVlLm5hbWUgIT09IG5hbWUpKSB7XG4gICAgaWYgKERFU0NSSVBUT1JTKSBkZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgJ25hbWUnLCB7IHZhbHVlOiBuYW1lLCBjb25maWd1cmFibGU6IHRydWUgfSk7XG4gICAgZWxzZSB2YWx1ZS5uYW1lID0gbmFtZTtcbiAgfVxuICBpZiAoQ09ORklHVVJBQkxFX0xFTkdUSCAmJiBvcHRpb25zICYmIGhhc093bihvcHRpb25zLCAnYXJpdHknKSAmJiB2YWx1ZS5sZW5ndGggIT09IG9wdGlvbnMuYXJpdHkpIHtcbiAgICBkZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgJ2xlbmd0aCcsIHsgdmFsdWU6IG9wdGlvbnMuYXJpdHkgfSk7XG4gIH1cbiAgdHJ5IHtcbiAgICBpZiAob3B0aW9ucyAmJiBoYXNPd24ob3B0aW9ucywgJ2NvbnN0cnVjdG9yJykgJiYgb3B0aW9ucy5jb25zdHJ1Y3Rvcikge1xuICAgICAgaWYgKERFU0NSSVBUT1JTKSBkZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgJ3Byb3RvdHlwZScsIHsgd3JpdGFibGU6IGZhbHNlIH0pO1xuICAgIC8vIGluIFY4IH4gQ2hyb21lIDUzLCBwcm90b3R5cGVzIG9mIHNvbWUgbWV0aG9kcywgbGlrZSBgQXJyYXkucHJvdG90eXBlLnZhbHVlc2AsIGFyZSBub24td3JpdGFibGVcbiAgICB9IGVsc2UgaWYgKHZhbHVlLnByb3RvdHlwZSkgdmFsdWUucHJvdG90eXBlID0gdW5kZWZpbmVkO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIHZhciBzdGF0ZSA9IGVuZm9yY2VJbnRlcm5hbFN0YXRlKHZhbHVlKTtcbiAgaWYgKCFoYXNPd24oc3RhdGUsICdzb3VyY2UnKSkge1xuICAgIHN0YXRlLnNvdXJjZSA9IGpvaW4oVEVNUExBVEUsIHR5cGVvZiBuYW1lID09ICdzdHJpbmcnID8gbmFtZSA6ICcnKTtcbiAgfSByZXR1cm4gdmFsdWU7XG59O1xuXG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1leHRlbmQtbmF0aXZlIC0tIHJlcXVpcmVkXG5GdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmcgPSBtYWtlQnVpbHRJbihmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuIGlzQ2FsbGFibGUodGhpcykgJiYgZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKS5zb3VyY2UgfHwgaW5zcGVjdFNvdXJjZSh0aGlzKTtcbn0sICd0b1N0cmluZycpO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIG1ha2VCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4nKTtcbnZhciBkZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIGtleSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSBvcHRpb25zID0ge307XG4gIHZhciBzaW1wbGUgPSBvcHRpb25zLmVudW1lcmFibGU7XG4gIHZhciBuYW1lID0gb3B0aW9ucy5uYW1lICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm5hbWUgOiBrZXk7XG4gIGlmIChpc0NhbGxhYmxlKHZhbHVlKSkgbWFrZUJ1aWx0SW4odmFsdWUsIG5hbWUsIG9wdGlvbnMpO1xuICBpZiAob3B0aW9ucy5nbG9iYWwpIHtcbiAgICBpZiAoc2ltcGxlKSBPW2tleV0gPSB2YWx1ZTtcbiAgICBlbHNlIGRlZmluZUdsb2JhbFByb3BlcnR5KGtleSwgdmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIW9wdGlvbnMudW5zYWZlKSBkZWxldGUgT1trZXldO1xuICAgICAgZWxzZSBpZiAoT1trZXldKSBzaW1wbGUgPSB0cnVlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgICBpZiAoc2ltcGxlKSBPW2tleV0gPSB2YWx1ZTtcbiAgICBlbHNlIGRlZmluZVByb3BlcnR5TW9kdWxlLmYoTywga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogIW9wdGlvbnMubm9uQ29uZmlndXJhYmxlLFxuICAgICAgd3JpdGFibGU6ICFvcHRpb25zLm5vbldyaXRhYmxlXG4gICAgfSk7XG4gIH0gcmV0dXJuIE87XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcblxuLy8gYE1hdGgudHJ1bmNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1tYXRoLnRydW5jXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tbWF0aC10cnVuYyAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE1hdGgudHJ1bmMgfHwgZnVuY3Rpb24gdHJ1bmMoeCkge1xuICB2YXIgbiA9ICt4O1xuICByZXR1cm4gKG4gPiAwID8gZmxvb3IgOiBjZWlsKShuKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRydW5jID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL21hdGgtdHJ1bmMnKTtcblxuLy8gYFRvSW50ZWdlck9ySW5maW5pdHlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b2ludGVnZXJvcmluZmluaXR5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICB2YXIgbnVtYmVyID0gK2FyZ3VtZW50O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICByZXR1cm4gbnVtYmVyICE9PSBudW1iZXIgfHwgbnVtYmVyID09PSAwID8gMCA6IHRydW5jKG51bWJlcik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHknKTtcblxudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBIZWxwZXIgZm9yIGEgcG9wdWxhciByZXBlYXRpbmcgY2FzZSBvZiB0aGUgc3BlYzpcbi8vIExldCBpbnRlZ2VyIGJlID8gVG9JbnRlZ2VyKGluZGV4KS5cbi8vIElmIGludGVnZXIgPCAwLCBsZXQgcmVzdWx0IGJlIG1heCgobGVuZ3RoICsgaW50ZWdlciksIDApOyBlbHNlIGxldCByZXN1bHQgYmUgbWluKGludGVnZXIsIGxlbmd0aCkuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIHZhciBpbnRlZ2VyID0gdG9JbnRlZ2VyT3JJbmZpbml0eShpbmRleCk7XG4gIHJldHVybiBpbnRlZ2VyIDwgMCA/IG1heChpbnRlZ2VyICsgbGVuZ3RoLCAwKSA6IG1pbihpbnRlZ2VyLCBsZW5ndGgpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9JbnRlZ2VyT3JJbmZpbml0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyLW9yLWluZmluaXR5Jyk7XG5cbnZhciBtaW4gPSBNYXRoLm1pbjtcblxuLy8gYFRvTGVuZ3RoYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9sZW5ndGhcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBsZW4gPSB0b0ludGVnZXJPckluZmluaXR5KGFyZ3VtZW50KTtcbiAgcmV0dXJuIGxlbiA+IDAgPyBtaW4obGVuLCAweDFGRkZGRkZGRkZGRkZGKSA6IDA7IC8vIDIgKiogNTMgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xuXG4vLyBgTGVuZ3RoT2ZBcnJheUxpa2VgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1sZW5ndGhvZmFycmF5bGlrZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0b0xlbmd0aChvYmoubGVuZ3RoKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1hYnNvbHV0ZS1pbmRleCcpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUueyBpbmRleE9mLCBpbmNsdWRlcyB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IGxlbmd0aE9mQXJyYXlMaWtlKE8pO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgICAgIGlmICh2YWx1ZSAhPT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgIGlmICgoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykgJiYgT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5pbmNsdWRlc2AgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluY2x1ZGVzXG4gIGluY2x1ZGVzOiBjcmVhdGVNZXRob2QodHJ1ZSksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuaW5kZXhPZmAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluZGV4b2ZcbiAgaW5kZXhPZjogY3JlYXRlTWV0aG9kKGZhbHNlKVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBpbmRleE9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzJykuaW5kZXhPZjtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG5cbnZhciBwdXNoID0gdW5jdXJyeVRoaXMoW10ucHVzaCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pICFoYXNPd24oaGlkZGVuS2V5cywga2V5KSAmJiBoYXNPd24oTywga2V5KSAmJiBwdXNoKHJlc3VsdCwga2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhc093bihPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5pbmRleE9mKHJlc3VsdCwga2V5KSB8fCBwdXNoKHJlc3VsdCwga2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBJRTgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gW1xuICAnY29uc3RydWN0b3InLFxuICAnaGFzT3duUHJvcGVydHknLFxuICAnaXNQcm90b3R5cGVPZicsXG4gICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsXG4gICd0b0xvY2FsZVN0cmluZycsXG4gICd0b1N0cmluZycsXG4gICd2YWx1ZU9mJ1xuXTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaW50ZXJuYWxPYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xuXG52YXIgaGlkZGVuS2V5cyA9IGVudW1CdWdLZXlzLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHluYW1lc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eW5hbWVzIC0tIHNhZmVcbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICByZXR1cm4gaW50ZXJuYWxPYmplY3RLZXlzKE8sIGhpZGRlbktleXMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5c3ltYm9scyAtLSBzYWZlXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xuXG52YXIgY29uY2F0ID0gdW5jdXJyeVRoaXMoW10uY29uY2F0KTtcblxuLy8gYWxsIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBub24tZW51bWVyYWJsZSBhbmQgc3ltYm9sc1xubW9kdWxlLmV4cG9ydHMgPSBnZXRCdWlsdEluKCdSZWZsZWN0JywgJ293bktleXMnKSB8fCBmdW5jdGlvbiBvd25LZXlzKGl0KSB7XG4gIHZhciBrZXlzID0gZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZS5mKGFuT2JqZWN0KGl0KSk7XG4gIHZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUuZjtcbiAgcmV0dXJuIGdldE93blByb3BlcnR5U3ltYm9scyA/IGNvbmNhdChrZXlzLCBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpKSA6IGtleXM7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIG93bktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb3duLWtleXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UsIGV4Y2VwdGlvbnMpIHtcbiAgdmFyIGtleXMgPSBvd25LZXlzKHNvdXJjZSk7XG4gIHZhciBkZWZpbmVQcm9wZXJ0eSA9IGRlZmluZVByb3BlcnR5TW9kdWxlLmY7XG4gIHZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUuZjtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgaWYgKCFoYXNPd24odGFyZ2V0LCBrZXkpICYmICEoZXhjZXB0aW9ucyAmJiBoYXNPd24oZXhjZXB0aW9ucywga2V5KSkpIHtcbiAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICB9XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgcmVwbGFjZW1lbnQgPSAvI3xcXC5wcm90b3R5cGVcXC4vO1xuXG52YXIgaXNGb3JjZWQgPSBmdW5jdGlvbiAoZmVhdHVyZSwgZGV0ZWN0aW9uKSB7XG4gIHZhciB2YWx1ZSA9IGRhdGFbbm9ybWFsaXplKGZlYXR1cmUpXTtcbiAgcmV0dXJuIHZhbHVlID09PSBQT0xZRklMTCA/IHRydWVcbiAgICA6IHZhbHVlID09PSBOQVRJVkUgPyBmYWxzZVxuICAgIDogaXNDYWxsYWJsZShkZXRlY3Rpb24pID8gZmFpbHMoZGV0ZWN0aW9uKVxuICAgIDogISFkZXRlY3Rpb247XG59O1xuXG52YXIgbm9ybWFsaXplID0gaXNGb3JjZWQubm9ybWFsaXplID0gZnVuY3Rpb24gKHN0cmluZykge1xuICByZXR1cm4gU3RyaW5nKHN0cmluZykucmVwbGFjZShyZXBsYWNlbWVudCwgJy4nKS50b0xvd2VyQ2FzZSgpO1xufTtcblxudmFyIGRhdGEgPSBpc0ZvcmNlZC5kYXRhID0ge307XG52YXIgTkFUSVZFID0gaXNGb3JjZWQuTkFUSVZFID0gJ04nO1xudmFyIFBPTFlGSUxMID0gaXNGb3JjZWQuUE9MWUZJTEwgPSAnUCc7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGb3JjZWQ7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpLmY7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIGRlZmluZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluJyk7XG52YXIgZGVmaW5lR2xvYmFsUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWdsb2JhbC1wcm9wZXJ0eScpO1xudmFyIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzJyk7XG52YXIgaXNGb3JjZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtZm9yY2VkJyk7XG5cbi8qXG4gIG9wdGlvbnMudGFyZ2V0ICAgICAgICAgLSBuYW1lIG9mIHRoZSB0YXJnZXQgb2JqZWN0XG4gIG9wdGlvbnMuZ2xvYmFsICAgICAgICAgLSB0YXJnZXQgaXMgdGhlIGdsb2JhbCBvYmplY3RcbiAgb3B0aW9ucy5zdGF0ICAgICAgICAgICAtIGV4cG9ydCBhcyBzdGF0aWMgbWV0aG9kcyBvZiB0YXJnZXRcbiAgb3B0aW9ucy5wcm90byAgICAgICAgICAtIGV4cG9ydCBhcyBwcm90b3R5cGUgbWV0aG9kcyBvZiB0YXJnZXRcbiAgb3B0aW9ucy5yZWFsICAgICAgICAgICAtIHJlYWwgcHJvdG90eXBlIG1ldGhvZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMuZm9yY2VkICAgICAgICAgLSBleHBvcnQgZXZlbiBpZiB0aGUgbmF0aXZlIGZlYXR1cmUgaXMgYXZhaWxhYmxlXG4gIG9wdGlvbnMuYmluZCAgICAgICAgICAgLSBiaW5kIG1ldGhvZHMgdG8gdGhlIHRhcmdldCwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLndyYXAgICAgICAgICAgIC0gd3JhcCBjb25zdHJ1Y3RvcnMgdG8gcHJldmVudGluZyBnbG9iYWwgcG9sbHV0aW9uLCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMudW5zYWZlICAgICAgICAgLSB1c2UgdGhlIHNpbXBsZSBhc3NpZ25tZW50IG9mIHByb3BlcnR5IGluc3RlYWQgb2YgZGVsZXRlICsgZGVmaW5lUHJvcGVydHlcbiAgb3B0aW9ucy5zaGFtICAgICAgICAgICAtIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgb3B0aW9ucy5lbnVtZXJhYmxlICAgICAtIGV4cG9ydCBhcyBlbnVtZXJhYmxlIHByb3BlcnR5XG4gIG9wdGlvbnMuZG9udENhbGxHZXRTZXQgLSBwcmV2ZW50IGNhbGxpbmcgYSBnZXR0ZXIgb24gdGFyZ2V0XG4gIG9wdGlvbnMubmFtZSAgICAgICAgICAgLSB0aGUgLm5hbWUgb2YgdGhlIGZ1bmN0aW9uIGlmIGl0IGRvZXMgbm90IG1hdGNoIHRoZSBrZXlcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcHRpb25zLCBzb3VyY2UpIHtcbiAgdmFyIFRBUkdFVCA9IG9wdGlvbnMudGFyZ2V0O1xuICB2YXIgR0xPQkFMID0gb3B0aW9ucy5nbG9iYWw7XG4gIHZhciBTVEFUSUMgPSBvcHRpb25zLnN0YXQ7XG4gIHZhciBGT1JDRUQsIHRhcmdldCwga2V5LCB0YXJnZXRQcm9wZXJ0eSwgc291cmNlUHJvcGVydHksIGRlc2NyaXB0b3I7XG4gIGlmIChHTE9CQUwpIHtcbiAgICB0YXJnZXQgPSBnbG9iYWw7XG4gIH0gZWxzZSBpZiAoU1RBVElDKSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsW1RBUkdFVF0gfHwgZGVmaW5lR2xvYmFsUHJvcGVydHkoVEFSR0VULCB7fSk7XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsW1RBUkdFVF0gJiYgZ2xvYmFsW1RBUkdFVF0ucHJvdG90eXBlO1xuICB9XG4gIGlmICh0YXJnZXQpIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIHNvdXJjZVByb3BlcnR5ID0gc291cmNlW2tleV07XG4gICAgaWYgKG9wdGlvbnMuZG9udENhbGxHZXRTZXQpIHtcbiAgICAgIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpO1xuICAgICAgdGFyZ2V0UHJvcGVydHkgPSBkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IudmFsdWU7XG4gICAgfSBlbHNlIHRhcmdldFByb3BlcnR5ID0gdGFyZ2V0W2tleV07XG4gICAgRk9SQ0VEID0gaXNGb3JjZWQoR0xPQkFMID8ga2V5IDogVEFSR0VUICsgKFNUQVRJQyA/ICcuJyA6ICcjJykgKyBrZXksIG9wdGlvbnMuZm9yY2VkKTtcbiAgICAvLyBjb250YWluZWQgaW4gdGFyZ2V0XG4gICAgaWYgKCFGT1JDRUQgJiYgdGFyZ2V0UHJvcGVydHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHR5cGVvZiBzb3VyY2VQcm9wZXJ0eSA9PSB0eXBlb2YgdGFyZ2V0UHJvcGVydHkpIGNvbnRpbnVlO1xuICAgICAgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyhzb3VyY2VQcm9wZXJ0eSwgdGFyZ2V0UHJvcGVydHkpO1xuICAgIH1cbiAgICAvLyBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gICAgaWYgKG9wdGlvbnMuc2hhbSB8fCAodGFyZ2V0UHJvcGVydHkgJiYgdGFyZ2V0UHJvcGVydHkuc2hhbSkpIHtcbiAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShzb3VyY2VQcm9wZXJ0eSwgJ3NoYW0nLCB0cnVlKTtcbiAgICB9XG4gICAgZGVmaW5lQnVpbHRJbih0YXJnZXQsIGtleSwgc291cmNlUHJvcGVydHksIG9wdGlvbnMpO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG5cbi8vIGBJc0FycmF5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXNhcnJheVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LWlzYXJyYXkgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGNsYXNzb2YoYXJndW1lbnQpID09PSAnQXJyYXknO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIFNhZmFyaSA8IDEzIGRvZXMgbm90IHRocm93IGFuIGVycm9yIGluIHRoaXMgY2FzZVxudmFyIFNJTEVOVF9PTl9OT05fV1JJVEFCTEVfTEVOR1RIX1NFVCA9IERFU0NSSVBUT1JTICYmICFmdW5jdGlvbiAoKSB7XG4gIC8vIG1ha2VzIG5vIHNlbnNlIHdpdGhvdXQgcHJvcGVyIHN0cmljdCBtb2RlIHN1cHBvcnRcbiAgaWYgKHRoaXMgIT09IHVuZGVmaW5lZCkgcmV0dXJuIHRydWU7XG4gIHRyeSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFtdLCAnbGVuZ3RoJywgeyB3cml0YWJsZTogZmFsc2UgfSkubGVuZ3RoID0gMTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3IgaW5zdGFuY2VvZiBUeXBlRXJyb3I7XG4gIH1cbn0oKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTSUxFTlRfT05fTk9OX1dSSVRBQkxFX0xFTkdUSF9TRVQgPyBmdW5jdGlvbiAoTywgbGVuZ3RoKSB7XG4gIGlmIChpc0FycmF5KE8pICYmICFnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgJ2xlbmd0aCcpLndyaXRhYmxlKSB7XG4gICAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Nhbm5vdCBzZXQgcmVhZCBvbmx5IC5sZW5ndGgnKTtcbiAgfSByZXR1cm4gTy5sZW5ndGggPSBsZW5ndGg7XG59IDogZnVuY3Rpb24gKE8sIGxlbmd0aCkge1xuICByZXR1cm4gTy5sZW5ndGggPSBsZW5ndGg7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSAweDFGRkZGRkZGRkZGRkZGOyAvLyAyICoqIDUzIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA+IE1BWF9TQUZFX0lOVEVHRVIpIHRocm93ICRUeXBlRXJyb3IoJ01heGltdW0gYWxsb3dlZCBpbmRleCBleGNlZWRlZCcpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG52YXIgc2V0QXJyYXlMZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc2V0LWxlbmd0aCcpO1xudmFyIGRvZXNOb3RFeGNlZWRTYWZlSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2VzLW5vdC1leGNlZWQtc2FmZS1pbnRlZ2VyJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxudmFyIElOQ09SUkVDVF9UT19MRU5HVEggPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBbXS5wdXNoLmNhbGwoeyBsZW5ndGg6IDB4MTAwMDAwMDAwIH0sIDEpICE9PSA0Mjk0OTY3Mjk3O1xufSk7XG5cbi8vIFY4IDw9IDEyMSBhbmQgU2FmYXJpIDw9IDE1LjQ7IEZGIDwgMjMgdGhyb3dzIEludGVybmFsRXJyb3Jcbi8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTEyNjgxXG52YXIgcHJvcGVyRXJyb3JPbk5vbldyaXRhYmxlTGVuZ3RoID0gZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShbXSwgJ2xlbmd0aCcsIHsgd3JpdGFibGU6IGZhbHNlIH0pLnB1c2goKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3IgaW5zdGFuY2VvZiBUeXBlRXJyb3I7XG4gIH1cbn07XG5cbnZhciBGT1JDRUQgPSBJTkNPUlJFQ1RfVE9fTEVOR1RIIHx8ICFwcm9wZXJFcnJvck9uTm9uV3JpdGFibGVMZW5ndGgoKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5wdXNoYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnB1c2hcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBhcml0eTogMSwgZm9yY2VkOiBGT1JDRUQgfSwge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnMgLS0gcmVxdWlyZWQgZm9yIGAubGVuZ3RoYFxuICBwdXNoOiBmdW5jdGlvbiBwdXNoKGl0ZW0pIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpO1xuICAgIHZhciBsZW4gPSBsZW5ndGhPZkFycmF5TGlrZShPKTtcbiAgICB2YXIgYXJnQ291bnQgPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGRvZXNOb3RFeGNlZWRTYWZlSW50ZWdlcihsZW4gKyBhcmdDb3VudCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdDb3VudDsgaSsrKSB7XG4gICAgICBPW2xlbl0gPSBhcmd1bWVudHNbaV07XG4gICAgICBsZW4rKztcbiAgICB9XG4gICAgc2V0QXJyYXlMZW5ndGgoTywgbGVuKTtcbiAgICByZXR1cm4gbGVuO1xuICB9XG59KTtcbiIsICJpbXBvcnQgJ3RpcHB5LmpzL2Rpc3QvdGlwcHkuY3NzJztcblxuZXhwb3J0IHtkZWZhdWx0IGFzIHRpcHB5fSBmcm9tICd0aXBweS5qcyc7XG5leHBvcnQgKiBmcm9tICd0aXBweS5qcyc7XG4iLCAiZXhwb3J0IHZhciB0b3AgPSAndG9wJztcbmV4cG9ydCB2YXIgYm90dG9tID0gJ2JvdHRvbSc7XG5leHBvcnQgdmFyIHJpZ2h0ID0gJ3JpZ2h0JztcbmV4cG9ydCB2YXIgbGVmdCA9ICdsZWZ0JztcbmV4cG9ydCB2YXIgYXV0byA9ICdhdXRvJztcbmV4cG9ydCB2YXIgYmFzZVBsYWNlbWVudHMgPSBbdG9wLCBib3R0b20sIHJpZ2h0LCBsZWZ0XTtcbmV4cG9ydCB2YXIgc3RhcnQgPSAnc3RhcnQnO1xuZXhwb3J0IHZhciBlbmQgPSAnZW5kJztcbmV4cG9ydCB2YXIgY2xpcHBpbmdQYXJlbnRzID0gJ2NsaXBwaW5nUGFyZW50cyc7XG5leHBvcnQgdmFyIHZpZXdwb3J0ID0gJ3ZpZXdwb3J0JztcbmV4cG9ydCB2YXIgcG9wcGVyID0gJ3BvcHBlcic7XG5leHBvcnQgdmFyIHJlZmVyZW5jZSA9ICdyZWZlcmVuY2UnO1xuZXhwb3J0IHZhciB2YXJpYXRpb25QbGFjZW1lbnRzID0gLyojX19QVVJFX18qL2Jhc2VQbGFjZW1lbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIGFjYy5jb25jYXQoW3BsYWNlbWVudCArIFwiLVwiICsgc3RhcnQsIHBsYWNlbWVudCArIFwiLVwiICsgZW5kXSk7XG59LCBbXSk7XG5leHBvcnQgdmFyIHBsYWNlbWVudHMgPSAvKiNfX1BVUkVfXyovW10uY29uY2F0KGJhc2VQbGFjZW1lbnRzLCBbYXV0b10pLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIGFjYy5jb25jYXQoW3BsYWNlbWVudCwgcGxhY2VtZW50ICsgXCItXCIgKyBzdGFydCwgcGxhY2VtZW50ICsgXCItXCIgKyBlbmRdKTtcbn0sIFtdKTsgLy8gbW9kaWZpZXJzIHRoYXQgbmVlZCB0byByZWFkIHRoZSBET01cblxuZXhwb3J0IHZhciBiZWZvcmVSZWFkID0gJ2JlZm9yZVJlYWQnO1xuZXhwb3J0IHZhciByZWFkID0gJ3JlYWQnO1xuZXhwb3J0IHZhciBhZnRlclJlYWQgPSAnYWZ0ZXJSZWFkJzsgLy8gcHVyZS1sb2dpYyBtb2RpZmllcnNcblxuZXhwb3J0IHZhciBiZWZvcmVNYWluID0gJ2JlZm9yZU1haW4nO1xuZXhwb3J0IHZhciBtYWluID0gJ21haW4nO1xuZXhwb3J0IHZhciBhZnRlck1haW4gPSAnYWZ0ZXJNYWluJzsgLy8gbW9kaWZpZXIgd2l0aCB0aGUgcHVycG9zZSB0byB3cml0ZSB0byB0aGUgRE9NIChvciB3cml0ZSBpbnRvIGEgZnJhbWV3b3JrIHN0YXRlKVxuXG5leHBvcnQgdmFyIGJlZm9yZVdyaXRlID0gJ2JlZm9yZVdyaXRlJztcbmV4cG9ydCB2YXIgd3JpdGUgPSAnd3JpdGUnO1xuZXhwb3J0IHZhciBhZnRlcldyaXRlID0gJ2FmdGVyV3JpdGUnO1xuZXhwb3J0IHZhciBtb2RpZmllclBoYXNlcyA9IFtiZWZvcmVSZWFkLCByZWFkLCBhZnRlclJlYWQsIGJlZm9yZU1haW4sIG1haW4sIGFmdGVyTWFpbiwgYmVmb3JlV3JpdGUsIHdyaXRlLCBhZnRlcldyaXRlXTsiLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Tm9kZU5hbWUoZWxlbWVudCkge1xuICByZXR1cm4gZWxlbWVudCA/IChlbGVtZW50Lm5vZGVOYW1lIHx8ICcnKS50b0xvd2VyQ2FzZSgpIDogbnVsbDtcbn0iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0V2luZG93KG5vZGUpIHtcbiAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgIHJldHVybiB3aW5kb3c7XG4gIH1cblxuICBpZiAobm9kZS50b1N0cmluZygpICE9PSAnW29iamVjdCBXaW5kb3ddJykge1xuICAgIHZhciBvd25lckRvY3VtZW50ID0gbm9kZS5vd25lckRvY3VtZW50O1xuICAgIHJldHVybiBvd25lckRvY3VtZW50ID8gb3duZXJEb2N1bWVudC5kZWZhdWx0VmlldyB8fCB3aW5kb3cgOiB3aW5kb3c7XG4gIH1cblxuICByZXR1cm4gbm9kZTtcbn0iLCAiaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcblxuZnVuY3Rpb24gaXNFbGVtZW50KG5vZGUpIHtcbiAgdmFyIE93bkVsZW1lbnQgPSBnZXRXaW5kb3cobm9kZSkuRWxlbWVudDtcbiAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBPd25FbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBpc0hUTUxFbGVtZW50KG5vZGUpIHtcbiAgdmFyIE93bkVsZW1lbnQgPSBnZXRXaW5kb3cobm9kZSkuSFRNTEVsZW1lbnQ7XG4gIHJldHVybiBub2RlIGluc3RhbmNlb2YgT3duRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGlzU2hhZG93Um9vdChub2RlKSB7XG4gIC8vIElFIDExIGhhcyBubyBTaGFkb3dSb290XG4gIGlmICh0eXBlb2YgU2hhZG93Um9vdCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgT3duRWxlbWVudCA9IGdldFdpbmRvdyhub2RlKS5TaGFkb3dSb290O1xuICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIE93bkVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIFNoYWRvd1Jvb3Q7XG59XG5cbmV4cG9ydCB7IGlzRWxlbWVudCwgaXNIVE1MRWxlbWVudCwgaXNTaGFkb3dSb290IH07IiwgImltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldE5vZGVOYW1lLmpzXCI7XG5pbXBvcnQgeyBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4uL2RvbS11dGlscy9pbnN0YW5jZU9mLmpzXCI7IC8vIFRoaXMgbW9kaWZpZXIgdGFrZXMgdGhlIHN0eWxlcyBwcmVwYXJlZCBieSB0aGUgYGNvbXB1dGVTdHlsZXNgIG1vZGlmaWVyXG4vLyBhbmQgYXBwbGllcyB0aGVtIHRvIHRoZSBIVE1MRWxlbWVudHMgc3VjaCBhcyBwb3BwZXIgYW5kIGFycm93XG5cbmZ1bmN0aW9uIGFwcGx5U3R5bGVzKF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZTtcbiAgT2JqZWN0LmtleXMoc3RhdGUuZWxlbWVudHMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgc3R5bGUgPSBzdGF0ZS5zdHlsZXNbbmFtZV0gfHwge307XG4gICAgdmFyIGF0dHJpYnV0ZXMgPSBzdGF0ZS5hdHRyaWJ1dGVzW25hbWVdIHx8IHt9O1xuICAgIHZhciBlbGVtZW50ID0gc3RhdGUuZWxlbWVudHNbbmFtZV07IC8vIGFycm93IGlzIG9wdGlvbmFsICsgdmlydHVhbCBlbGVtZW50c1xuXG4gICAgaWYgKCFpc0hUTUxFbGVtZW50KGVsZW1lbnQpIHx8ICFnZXROb2RlTmFtZShlbGVtZW50KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gRmxvdyBkb2Vzbid0IHN1cHBvcnQgdG8gZXh0ZW5kIHRoaXMgcHJvcGVydHksIGJ1dCBpdCdzIHRoZSBtb3N0XG4gICAgLy8gZWZmZWN0aXZlIHdheSB0byBhcHBseSBzdHlsZXMgdG8gYW4gSFRNTEVsZW1lbnRcbiAgICAvLyAkRmxvd0ZpeE1lW2Nhbm5vdC13cml0ZV1cblxuXG4gICAgT2JqZWN0LmFzc2lnbihlbGVtZW50LnN0eWxlLCBzdHlsZSk7XG4gICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgdmFyIHZhbHVlID0gYXR0cmlidXRlc1tuYW1lXTtcblxuICAgICAgaWYgKHZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlID09PSB0cnVlID8gJycgOiB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBlZmZlY3QoX3JlZjIpIHtcbiAgdmFyIHN0YXRlID0gX3JlZjIuc3RhdGU7XG4gIHZhciBpbml0aWFsU3R5bGVzID0ge1xuICAgIHBvcHBlcjoge1xuICAgICAgcG9zaXRpb246IHN0YXRlLm9wdGlvbnMuc3RyYXRlZ3ksXG4gICAgICBsZWZ0OiAnMCcsXG4gICAgICB0b3A6ICcwJyxcbiAgICAgIG1hcmdpbjogJzAnXG4gICAgfSxcbiAgICBhcnJvdzoge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZSdcbiAgICB9LFxuICAgIHJlZmVyZW5jZToge31cbiAgfTtcbiAgT2JqZWN0LmFzc2lnbihzdGF0ZS5lbGVtZW50cy5wb3BwZXIuc3R5bGUsIGluaXRpYWxTdHlsZXMucG9wcGVyKTtcbiAgc3RhdGUuc3R5bGVzID0gaW5pdGlhbFN0eWxlcztcblxuICBpZiAoc3RhdGUuZWxlbWVudHMuYXJyb3cpIHtcbiAgICBPYmplY3QuYXNzaWduKHN0YXRlLmVsZW1lbnRzLmFycm93LnN0eWxlLCBpbml0aWFsU3R5bGVzLmFycm93KTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgT2JqZWN0LmtleXMoc3RhdGUuZWxlbWVudHMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIHZhciBlbGVtZW50ID0gc3RhdGUuZWxlbWVudHNbbmFtZV07XG4gICAgICB2YXIgYXR0cmlidXRlcyA9IHN0YXRlLmF0dHJpYnV0ZXNbbmFtZV0gfHwge307XG4gICAgICB2YXIgc3R5bGVQcm9wZXJ0aWVzID0gT2JqZWN0LmtleXMoc3RhdGUuc3R5bGVzLmhhc093blByb3BlcnR5KG5hbWUpID8gc3RhdGUuc3R5bGVzW25hbWVdIDogaW5pdGlhbFN0eWxlc1tuYW1lXSk7IC8vIFNldCBhbGwgdmFsdWVzIHRvIGFuIGVtcHR5IHN0cmluZyB0byB1bnNldCB0aGVtXG5cbiAgICAgIHZhciBzdHlsZSA9IHN0eWxlUHJvcGVydGllcy5yZWR1Y2UoZnVuY3Rpb24gKHN0eWxlLCBwcm9wZXJ0eSkge1xuICAgICAgICBzdHlsZVtwcm9wZXJ0eV0gPSAnJztcbiAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgfSwge30pOyAvLyBhcnJvdyBpcyBvcHRpb25hbCArIHZpcnR1YWwgZWxlbWVudHNcblxuICAgICAgaWYgKCFpc0hUTUxFbGVtZW50KGVsZW1lbnQpIHx8ICFnZXROb2RlTmFtZShlbGVtZW50KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIE9iamVjdC5hc3NpZ24oZWxlbWVudC5zdHlsZSwgc3R5bGUpO1xuICAgICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoYXR0cmlidXRlKSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2FwcGx5U3R5bGVzJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICd3cml0ZScsXG4gIGZuOiBhcHBseVN0eWxlcyxcbiAgZWZmZWN0OiBlZmZlY3QsXG4gIHJlcXVpcmVzOiBbJ2NvbXB1dGVTdHlsZXMnXVxufTsiLCAiaW1wb3J0IHsgYXV0byB9IGZyb20gXCIuLi9lbnVtcy5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xufSIsICJleHBvcnQgdmFyIG1heCA9IE1hdGgubWF4O1xuZXhwb3J0IHZhciBtaW4gPSBNYXRoLm1pbjtcbmV4cG9ydCB2YXIgcm91bmQgPSBNYXRoLnJvdW5kOyIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVQVN0cmluZygpIHtcbiAgdmFyIHVhRGF0YSA9IG5hdmlnYXRvci51c2VyQWdlbnREYXRhO1xuXG4gIGlmICh1YURhdGEgIT0gbnVsbCAmJiB1YURhdGEuYnJhbmRzICYmIEFycmF5LmlzQXJyYXkodWFEYXRhLmJyYW5kcykpIHtcbiAgICByZXR1cm4gdWFEYXRhLmJyYW5kcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBpdGVtLmJyYW5kICsgXCIvXCIgKyBpdGVtLnZlcnNpb247XG4gICAgfSkuam9pbignICcpO1xuICB9XG5cbiAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQ7XG59IiwgImltcG9ydCBnZXRVQVN0cmluZyBmcm9tIFwiLi4vdXRpbHMvdXNlckFnZW50LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0xheW91dFZpZXdwb3J0KCkge1xuICByZXR1cm4gIS9eKCg/IWNocm9tZXxhbmRyb2lkKS4pKnNhZmFyaS9pLnRlc3QoZ2V0VUFTdHJpbmcoKSk7XG59IiwgImltcG9ydCB7IGlzRWxlbWVudCwgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmltcG9ydCB7IHJvdW5kIH0gZnJvbSBcIi4uL3V0aWxzL21hdGguanNcIjtcbmltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5pbXBvcnQgaXNMYXlvdXRWaWV3cG9ydCBmcm9tIFwiLi9pc0xheW91dFZpZXdwb3J0LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCwgaW5jbHVkZVNjYWxlLCBpc0ZpeGVkU3RyYXRlZ3kpIHtcbiAgaWYgKGluY2x1ZGVTY2FsZSA9PT0gdm9pZCAwKSB7XG4gICAgaW5jbHVkZVNjYWxlID0gZmFsc2U7XG4gIH1cblxuICBpZiAoaXNGaXhlZFN0cmF0ZWd5ID09PSB2b2lkIDApIHtcbiAgICBpc0ZpeGVkU3RyYXRlZ3kgPSBmYWxzZTtcbiAgfVxuXG4gIHZhciBjbGllbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgdmFyIHNjYWxlWCA9IDE7XG4gIHZhciBzY2FsZVkgPSAxO1xuXG4gIGlmIChpbmNsdWRlU2NhbGUgJiYgaXNIVE1MRWxlbWVudChlbGVtZW50KSkge1xuICAgIHNjYWxlWCA9IGVsZW1lbnQub2Zmc2V0V2lkdGggPiAwID8gcm91bmQoY2xpZW50UmVjdC53aWR0aCkgLyBlbGVtZW50Lm9mZnNldFdpZHRoIHx8IDEgOiAxO1xuICAgIHNjYWxlWSA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0ID4gMCA/IHJvdW5kKGNsaWVudFJlY3QuaGVpZ2h0KSAvIGVsZW1lbnQub2Zmc2V0SGVpZ2h0IHx8IDEgOiAxO1xuICB9XG5cbiAgdmFyIF9yZWYgPSBpc0VsZW1lbnQoZWxlbWVudCkgPyBnZXRXaW5kb3coZWxlbWVudCkgOiB3aW5kb3csXG4gICAgICB2aXN1YWxWaWV3cG9ydCA9IF9yZWYudmlzdWFsVmlld3BvcnQ7XG5cbiAgdmFyIGFkZFZpc3VhbE9mZnNldHMgPSAhaXNMYXlvdXRWaWV3cG9ydCgpICYmIGlzRml4ZWRTdHJhdGVneTtcbiAgdmFyIHggPSAoY2xpZW50UmVjdC5sZWZ0ICsgKGFkZFZpc3VhbE9mZnNldHMgJiYgdmlzdWFsVmlld3BvcnQgPyB2aXN1YWxWaWV3cG9ydC5vZmZzZXRMZWZ0IDogMCkpIC8gc2NhbGVYO1xuICB2YXIgeSA9IChjbGllbnRSZWN0LnRvcCArIChhZGRWaXN1YWxPZmZzZXRzICYmIHZpc3VhbFZpZXdwb3J0ID8gdmlzdWFsVmlld3BvcnQub2Zmc2V0VG9wIDogMCkpIC8gc2NhbGVZO1xuICB2YXIgd2lkdGggPSBjbGllbnRSZWN0LndpZHRoIC8gc2NhbGVYO1xuICB2YXIgaGVpZ2h0ID0gY2xpZW50UmVjdC5oZWlnaHQgLyBzY2FsZVk7XG4gIHJldHVybiB7XG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIHRvcDogeSxcbiAgICByaWdodDogeCArIHdpZHRoLFxuICAgIGJvdHRvbTogeSArIGhlaWdodCxcbiAgICBsZWZ0OiB4LFxuICAgIHg6IHgsXG4gICAgeTogeVxuICB9O1xufSIsICJpbXBvcnQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGZyb20gXCIuL2dldEJvdW5kaW5nQ2xpZW50UmVjdC5qc1wiOyAvLyBSZXR1cm5zIHRoZSBsYXlvdXQgcmVjdCBvZiBhbiBlbGVtZW50IHJlbGF0aXZlIHRvIGl0cyBvZmZzZXRQYXJlbnQuIExheW91dFxuLy8gbWVhbnMgaXQgZG9lc24ndCB0YWtlIGludG8gYWNjb3VudCB0cmFuc2Zvcm1zLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRMYXlvdXRSZWN0KGVsZW1lbnQpIHtcbiAgdmFyIGNsaWVudFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCk7IC8vIFVzZSB0aGUgY2xpZW50UmVjdCBzaXplcyBpZiBpdCdzIG5vdCBiZWVuIHRyYW5zZm9ybWVkLlxuICAvLyBGaXhlcyBodHRwczovL2dpdGh1Yi5jb20vcG9wcGVyanMvcG9wcGVyLWNvcmUvaXNzdWVzLzEyMjNcblxuICB2YXIgd2lkdGggPSBlbGVtZW50Lm9mZnNldFdpZHRoO1xuICB2YXIgaGVpZ2h0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG5cbiAgaWYgKE1hdGguYWJzKGNsaWVudFJlY3Qud2lkdGggLSB3aWR0aCkgPD0gMSkge1xuICAgIHdpZHRoID0gY2xpZW50UmVjdC53aWR0aDtcbiAgfVxuXG4gIGlmIChNYXRoLmFicyhjbGllbnRSZWN0LmhlaWdodCAtIGhlaWdodCkgPD0gMSkge1xuICAgIGhlaWdodCA9IGNsaWVudFJlY3QuaGVpZ2h0O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB4OiBlbGVtZW50Lm9mZnNldExlZnQsXG4gICAgeTogZWxlbWVudC5vZmZzZXRUb3AsXG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0XG4gIH07XG59IiwgImltcG9ydCB7IGlzU2hhZG93Um9vdCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhaW5zKHBhcmVudCwgY2hpbGQpIHtcbiAgdmFyIHJvb3ROb2RlID0gY2hpbGQuZ2V0Um9vdE5vZGUgJiYgY2hpbGQuZ2V0Um9vdE5vZGUoKTsgLy8gRmlyc3QsIGF0dGVtcHQgd2l0aCBmYXN0ZXIgbmF0aXZlIG1ldGhvZFxuXG4gIGlmIChwYXJlbnQuY29udGFpbnMoY2hpbGQpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gdGhlbiBmYWxsYmFjayB0byBjdXN0b20gaW1wbGVtZW50YXRpb24gd2l0aCBTaGFkb3cgRE9NIHN1cHBvcnRcbiAgZWxzZSBpZiAocm9vdE5vZGUgJiYgaXNTaGFkb3dSb290KHJvb3ROb2RlKSkge1xuICAgICAgdmFyIG5leHQgPSBjaGlsZDtcblxuICAgICAgZG8ge1xuICAgICAgICBpZiAobmV4dCAmJiBwYXJlbnQuaXNTYW1lTm9kZShuZXh0KSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXTogbmVlZCBhIGJldHRlciB3YXkgdG8gaGFuZGxlIHRoaXMuLi5cblxuXG4gICAgICAgIG5leHQgPSBuZXh0LnBhcmVudE5vZGUgfHwgbmV4dC5ob3N0O1xuICAgICAgfSB3aGlsZSAobmV4dCk7XG4gICAgfSAvLyBHaXZlIHVwLCB0aGUgcmVzdWx0IGlzIGZhbHNlXG5cblxuICByZXR1cm4gZmFsc2U7XG59IiwgImltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGdldFdpbmRvdyhlbGVtZW50KS5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xufSIsICJpbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4vZ2V0Tm9kZU5hbWUuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVGFibGVFbGVtZW50KGVsZW1lbnQpIHtcbiAgcmV0dXJuIFsndGFibGUnLCAndGQnLCAndGgnXS5pbmRleE9mKGdldE5vZGVOYW1lKGVsZW1lbnQpKSA+PSAwO1xufSIsICJpbXBvcnQgeyBpc0VsZW1lbnQgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkge1xuICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dOiBhc3N1bWUgYm9keSBpcyBhbHdheXMgYXZhaWxhYmxlXG4gIHJldHVybiAoKGlzRWxlbWVudChlbGVtZW50KSA/IGVsZW1lbnQub3duZXJEb2N1bWVudCA6IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuICBlbGVtZW50LmRvY3VtZW50KSB8fCB3aW5kb3cuZG9jdW1lbnQpLmRvY3VtZW50RWxlbWVudDtcbn0iLCAiaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuL2dldE5vZGVOYW1lLmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IHsgaXNTaGFkb3dSb290IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0UGFyZW50Tm9kZShlbGVtZW50KSB7XG4gIGlmIChnZXROb2RlTmFtZShlbGVtZW50KSA9PT0gJ2h0bWwnKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICByZXR1cm4gKC8vIHRoaXMgaXMgYSBxdWlja2VyIChidXQgbGVzcyB0eXBlIHNhZmUpIHdheSB0byBzYXZlIHF1aXRlIHNvbWUgYnl0ZXMgZnJvbSB0aGUgYnVuZGxlXG4gICAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtcmV0dXJuXVxuICAgIC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuICAgIGVsZW1lbnQuYXNzaWduZWRTbG90IHx8IC8vIHN0ZXAgaW50byB0aGUgc2hhZG93IERPTSBvZiB0aGUgcGFyZW50IG9mIGEgc2xvdHRlZCBub2RlXG4gICAgZWxlbWVudC5wYXJlbnROb2RlIHx8ICggLy8gRE9NIEVsZW1lbnQgZGV0ZWN0ZWRcbiAgICBpc1NoYWRvd1Jvb3QoZWxlbWVudCkgPyBlbGVtZW50Lmhvc3QgOiBudWxsKSB8fCAvLyBTaGFkb3dSb290IGRldGVjdGVkXG4gICAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtY2FsbF06IEhUTUxFbGVtZW50IGlzIGEgTm9kZVxuICAgIGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSAvLyBmYWxsYmFja1xuXG4gICk7XG59IiwgImltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5pbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4vZ2V0Tm9kZU5hbWUuanNcIjtcbmltcG9ydCBnZXRDb21wdXRlZFN0eWxlIGZyb20gXCIuL2dldENvbXB1dGVkU3R5bGUuanNcIjtcbmltcG9ydCB7IGlzSFRNTEVsZW1lbnQsIGlzU2hhZG93Um9vdCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmltcG9ydCBpc1RhYmxlRWxlbWVudCBmcm9tIFwiLi9pc1RhYmxlRWxlbWVudC5qc1wiO1xuaW1wb3J0IGdldFBhcmVudE5vZGUgZnJvbSBcIi4vZ2V0UGFyZW50Tm9kZS5qc1wiO1xuaW1wb3J0IGdldFVBU3RyaW5nIGZyb20gXCIuLi91dGlscy91c2VyQWdlbnQuanNcIjtcblxuZnVuY3Rpb24gZ2V0VHJ1ZU9mZnNldFBhcmVudChlbGVtZW50KSB7XG4gIGlmICghaXNIVE1MRWxlbWVudChlbGVtZW50KSB8fCAvLyBodHRwczovL2dpdGh1Yi5jb20vcG9wcGVyanMvcG9wcGVyLWNvcmUvaXNzdWVzLzgzN1xuICBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLnBvc2l0aW9uID09PSAnZml4ZWQnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudC5vZmZzZXRQYXJlbnQ7XG59IC8vIGAub2Zmc2V0UGFyZW50YCByZXBvcnRzIGBudWxsYCBmb3IgZml4ZWQgZWxlbWVudHMsIHdoaWxlIGFic29sdXRlIGVsZW1lbnRzXG4vLyByZXR1cm4gdGhlIGNvbnRhaW5pbmcgYmxvY2tcblxuXG5mdW5jdGlvbiBnZXRDb250YWluaW5nQmxvY2soZWxlbWVudCkge1xuICB2YXIgaXNGaXJlZm94ID0gL2ZpcmVmb3gvaS50ZXN0KGdldFVBU3RyaW5nKCkpO1xuICB2YXIgaXNJRSA9IC9UcmlkZW50L2kudGVzdChnZXRVQVN0cmluZygpKTtcblxuICBpZiAoaXNJRSAmJiBpc0hUTUxFbGVtZW50KGVsZW1lbnQpKSB7XG4gICAgLy8gSW4gSUUgOSwgMTAgYW5kIDExIGZpeGVkIGVsZW1lbnRzIGNvbnRhaW5pbmcgYmxvY2sgaXMgYWx3YXlzIGVzdGFibGlzaGVkIGJ5IHRoZSB2aWV3cG9ydFxuICAgIHZhciBlbGVtZW50Q3NzID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcblxuICAgIGlmIChlbGVtZW50Q3NzLnBvc2l0aW9uID09PSAnZml4ZWQnKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICB2YXIgY3VycmVudE5vZGUgPSBnZXRQYXJlbnROb2RlKGVsZW1lbnQpO1xuXG4gIGlmIChpc1NoYWRvd1Jvb3QoY3VycmVudE5vZGUpKSB7XG4gICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5ob3N0O1xuICB9XG5cbiAgd2hpbGUgKGlzSFRNTEVsZW1lbnQoY3VycmVudE5vZGUpICYmIFsnaHRtbCcsICdib2R5J10uaW5kZXhPZihnZXROb2RlTmFtZShjdXJyZW50Tm9kZSkpIDwgMCkge1xuICAgIHZhciBjc3MgPSBnZXRDb21wdXRlZFN0eWxlKGN1cnJlbnROb2RlKTsgLy8gVGhpcyBpcyBub24tZXhoYXVzdGl2ZSBidXQgY292ZXJzIHRoZSBtb3N0IGNvbW1vbiBDU1MgcHJvcGVydGllcyB0aGF0XG4gICAgLy8gY3JlYXRlIGEgY29udGFpbmluZyBibG9jay5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvQ29udGFpbmluZ19ibG9jayNpZGVudGlmeWluZ190aGVfY29udGFpbmluZ19ibG9ja1xuXG4gICAgaWYgKGNzcy50cmFuc2Zvcm0gIT09ICdub25lJyB8fCBjc3MucGVyc3BlY3RpdmUgIT09ICdub25lJyB8fCBjc3MuY29udGFpbiA9PT0gJ3BhaW50JyB8fCBbJ3RyYW5zZm9ybScsICdwZXJzcGVjdGl2ZSddLmluZGV4T2YoY3NzLndpbGxDaGFuZ2UpICE9PSAtMSB8fCBpc0ZpcmVmb3ggJiYgY3NzLndpbGxDaGFuZ2UgPT09ICdmaWx0ZXInIHx8IGlzRmlyZWZveCAmJiBjc3MuZmlsdGVyICYmIGNzcy5maWx0ZXIgIT09ICdub25lJykge1xuICAgICAgcmV0dXJuIGN1cnJlbnROb2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59IC8vIEdldHMgdGhlIGNsb3Nlc3QgYW5jZXN0b3IgcG9zaXRpb25lZCBlbGVtZW50LiBIYW5kbGVzIHNvbWUgZWRnZSBjYXNlcyxcbi8vIHN1Y2ggYXMgdGFibGUgYW5jZXN0b3JzIGFuZCBjcm9zcyBicm93c2VyIGJ1Z3MuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQpIHtcbiAgdmFyIHdpbmRvdyA9IGdldFdpbmRvdyhlbGVtZW50KTtcbiAgdmFyIG9mZnNldFBhcmVudCA9IGdldFRydWVPZmZzZXRQYXJlbnQoZWxlbWVudCk7XG5cbiAgd2hpbGUgKG9mZnNldFBhcmVudCAmJiBpc1RhYmxlRWxlbWVudChvZmZzZXRQYXJlbnQpICYmIGdldENvbXB1dGVkU3R5bGUob2Zmc2V0UGFyZW50KS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpIHtcbiAgICBvZmZzZXRQYXJlbnQgPSBnZXRUcnVlT2Zmc2V0UGFyZW50KG9mZnNldFBhcmVudCk7XG4gIH1cblxuICBpZiAob2Zmc2V0UGFyZW50ICYmIChnZXROb2RlTmFtZShvZmZzZXRQYXJlbnQpID09PSAnaHRtbCcgfHwgZ2V0Tm9kZU5hbWUob2Zmc2V0UGFyZW50KSA9PT0gJ2JvZHknICYmIGdldENvbXB1dGVkU3R5bGUob2Zmc2V0UGFyZW50KS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpKSB7XG4gICAgcmV0dXJuIHdpbmRvdztcbiAgfVxuXG4gIHJldHVybiBvZmZzZXRQYXJlbnQgfHwgZ2V0Q29udGFpbmluZ0Jsb2NrKGVsZW1lbnQpIHx8IHdpbmRvdztcbn0iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gWyd0b3AnLCAnYm90dG9tJ10uaW5kZXhPZihwbGFjZW1lbnQpID49IDAgPyAneCcgOiAneSc7XG59IiwgImltcG9ydCB7IG1heCBhcyBtYXRoTWF4LCBtaW4gYXMgbWF0aE1pbiB9IGZyb20gXCIuL21hdGguanNcIjtcbmV4cG9ydCBmdW5jdGlvbiB3aXRoaW4obWluLCB2YWx1ZSwgbWF4KSB7XG4gIHJldHVybiBtYXRoTWF4KG1pbiwgbWF0aE1pbih2YWx1ZSwgbWF4KSk7XG59XG5leHBvcnQgZnVuY3Rpb24gd2l0aGluTWF4Q2xhbXAobWluLCB2YWx1ZSwgbWF4KSB7XG4gIHZhciB2ID0gd2l0aGluKG1pbiwgdmFsdWUsIG1heCk7XG4gIHJldHVybiB2ID4gbWF4ID8gbWF4IDogdjtcbn0iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RnJlc2hTaWRlT2JqZWN0KCkge1xuICByZXR1cm4ge1xuICAgIHRvcDogMCxcbiAgICByaWdodDogMCxcbiAgICBib3R0b206IDAsXG4gICAgbGVmdDogMFxuICB9O1xufSIsICJpbXBvcnQgZ2V0RnJlc2hTaWRlT2JqZWN0IGZyb20gXCIuL2dldEZyZXNoU2lkZU9iamVjdC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVyZ2VQYWRkaW5nT2JqZWN0KHBhZGRpbmdPYmplY3QpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGdldEZyZXNoU2lkZU9iamVjdCgpLCBwYWRkaW5nT2JqZWN0KTtcbn0iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXhwYW5kVG9IYXNoTWFwKHZhbHVlLCBrZXlzKSB7XG4gIHJldHVybiBrZXlzLnJlZHVjZShmdW5jdGlvbiAoaGFzaE1hcCwga2V5KSB7XG4gICAgaGFzaE1hcFtrZXldID0gdmFsdWU7XG4gICAgcmV0dXJuIGhhc2hNYXA7XG4gIH0sIHt9KTtcbn0iLCAiaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRMYXlvdXRSZWN0IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0TGF5b3V0UmVjdC5qc1wiO1xuaW1wb3J0IGNvbnRhaW5zIGZyb20gXCIuLi9kb20tdXRpbHMvY29udGFpbnMuanNcIjtcbmltcG9ydCBnZXRPZmZzZXRQYXJlbnQgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRPZmZzZXRQYXJlbnQuanNcIjtcbmltcG9ydCBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldE1haW5BeGlzRnJvbVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IHsgd2l0aGluIH0gZnJvbSBcIi4uL3V0aWxzL3dpdGhpbi5qc1wiO1xuaW1wb3J0IG1lcmdlUGFkZGluZ09iamVjdCBmcm9tIFwiLi4vdXRpbHMvbWVyZ2VQYWRkaW5nT2JqZWN0LmpzXCI7XG5pbXBvcnQgZXhwYW5kVG9IYXNoTWFwIGZyb20gXCIuLi91dGlscy9leHBhbmRUb0hhc2hNYXAuanNcIjtcbmltcG9ydCB7IGxlZnQsIHJpZ2h0LCBiYXNlUGxhY2VtZW50cywgdG9wLCBib3R0b20gfSBmcm9tIFwiLi4vZW51bXMuanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG52YXIgdG9QYWRkaW5nT2JqZWN0ID0gZnVuY3Rpb24gdG9QYWRkaW5nT2JqZWN0KHBhZGRpbmcsIHN0YXRlKSB7XG4gIHBhZGRpbmcgPSB0eXBlb2YgcGFkZGluZyA9PT0gJ2Z1bmN0aW9uJyA/IHBhZGRpbmcoT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUucmVjdHMsIHtcbiAgICBwbGFjZW1lbnQ6IHN0YXRlLnBsYWNlbWVudFxuICB9KSkgOiBwYWRkaW5nO1xuICByZXR1cm4gbWVyZ2VQYWRkaW5nT2JqZWN0KHR5cGVvZiBwYWRkaW5nICE9PSAnbnVtYmVyJyA/IHBhZGRpbmcgOiBleHBhbmRUb0hhc2hNYXAocGFkZGluZywgYmFzZVBsYWNlbWVudHMpKTtcbn07XG5cbmZ1bmN0aW9uIGFycm93KF9yZWYpIHtcbiAgdmFyIF9zdGF0ZSRtb2RpZmllcnNEYXRhJDtcblxuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnM7XG4gIHZhciBhcnJvd0VsZW1lbnQgPSBzdGF0ZS5lbGVtZW50cy5hcnJvdztcbiAgdmFyIHBvcHBlck9mZnNldHMgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHM7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChzdGF0ZS5wbGFjZW1lbnQpO1xuICB2YXIgYXhpcyA9IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChiYXNlUGxhY2VtZW50KTtcbiAgdmFyIGlzVmVydGljYWwgPSBbbGVmdCwgcmlnaHRdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgPj0gMDtcbiAgdmFyIGxlbiA9IGlzVmVydGljYWwgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG5cbiAgaWYgKCFhcnJvd0VsZW1lbnQgfHwgIXBvcHBlck9mZnNldHMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgcGFkZGluZ09iamVjdCA9IHRvUGFkZGluZ09iamVjdChvcHRpb25zLnBhZGRpbmcsIHN0YXRlKTtcbiAgdmFyIGFycm93UmVjdCA9IGdldExheW91dFJlY3QoYXJyb3dFbGVtZW50KTtcbiAgdmFyIG1pblByb3AgPSBheGlzID09PSAneScgPyB0b3AgOiBsZWZ0O1xuICB2YXIgbWF4UHJvcCA9IGF4aXMgPT09ICd5JyA/IGJvdHRvbSA6IHJpZ2h0O1xuICB2YXIgZW5kRGlmZiA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZVtsZW5dICsgc3RhdGUucmVjdHMucmVmZXJlbmNlW2F4aXNdIC0gcG9wcGVyT2Zmc2V0c1theGlzXSAtIHN0YXRlLnJlY3RzLnBvcHBlcltsZW5dO1xuICB2YXIgc3RhcnREaWZmID0gcG9wcGVyT2Zmc2V0c1theGlzXSAtIHN0YXRlLnJlY3RzLnJlZmVyZW5jZVtheGlzXTtcbiAgdmFyIGFycm93T2Zmc2V0UGFyZW50ID0gZ2V0T2Zmc2V0UGFyZW50KGFycm93RWxlbWVudCk7XG4gIHZhciBjbGllbnRTaXplID0gYXJyb3dPZmZzZXRQYXJlbnQgPyBheGlzID09PSAneScgPyBhcnJvd09mZnNldFBhcmVudC5jbGllbnRIZWlnaHQgfHwgMCA6IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudFdpZHRoIHx8IDAgOiAwO1xuICB2YXIgY2VudGVyVG9SZWZlcmVuY2UgPSBlbmREaWZmIC8gMiAtIHN0YXJ0RGlmZiAvIDI7IC8vIE1ha2Ugc3VyZSB0aGUgYXJyb3cgZG9lc24ndCBvdmVyZmxvdyB0aGUgcG9wcGVyIGlmIHRoZSBjZW50ZXIgcG9pbnQgaXNcbiAgLy8gb3V0c2lkZSBvZiB0aGUgcG9wcGVyIGJvdW5kc1xuXG4gIHZhciBtaW4gPSBwYWRkaW5nT2JqZWN0W21pblByb3BdO1xuICB2YXIgbWF4ID0gY2xpZW50U2l6ZSAtIGFycm93UmVjdFtsZW5dIC0gcGFkZGluZ09iamVjdFttYXhQcm9wXTtcbiAgdmFyIGNlbnRlciA9IGNsaWVudFNpemUgLyAyIC0gYXJyb3dSZWN0W2xlbl0gLyAyICsgY2VudGVyVG9SZWZlcmVuY2U7XG4gIHZhciBvZmZzZXQgPSB3aXRoaW4obWluLCBjZW50ZXIsIG1heCk7IC8vIFByZXZlbnRzIGJyZWFraW5nIHN5bnRheCBoaWdobGlnaHRpbmcuLi5cblxuICB2YXIgYXhpc1Byb3AgPSBheGlzO1xuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gKF9zdGF0ZSRtb2RpZmllcnNEYXRhJCA9IHt9LCBfc3RhdGUkbW9kaWZpZXJzRGF0YSRbYXhpc1Byb3BdID0gb2Zmc2V0LCBfc3RhdGUkbW9kaWZpZXJzRGF0YSQuY2VudGVyT2Zmc2V0ID0gb2Zmc2V0IC0gY2VudGVyLCBfc3RhdGUkbW9kaWZpZXJzRGF0YSQpO1xufVxuXG5mdW5jdGlvbiBlZmZlY3QoX3JlZjIpIHtcbiAgdmFyIHN0YXRlID0gX3JlZjIuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZjIub3B0aW9ucztcbiAgdmFyIF9vcHRpb25zJGVsZW1lbnQgPSBvcHRpb25zLmVsZW1lbnQsXG4gICAgICBhcnJvd0VsZW1lbnQgPSBfb3B0aW9ucyRlbGVtZW50ID09PSB2b2lkIDAgPyAnW2RhdGEtcG9wcGVyLWFycm93XScgOiBfb3B0aW9ucyRlbGVtZW50O1xuXG4gIGlmIChhcnJvd0VsZW1lbnQgPT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfSAvLyBDU1Mgc2VsZWN0b3JcblxuXG4gIGlmICh0eXBlb2YgYXJyb3dFbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgIGFycm93RWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzLnBvcHBlci5xdWVyeVNlbGVjdG9yKGFycm93RWxlbWVudCk7XG5cbiAgICBpZiAoIWFycm93RWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY29udGFpbnMoc3RhdGUuZWxlbWVudHMucG9wcGVyLCBhcnJvd0VsZW1lbnQpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgc3RhdGUuZWxlbWVudHMuYXJyb3cgPSBhcnJvd0VsZW1lbnQ7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdhcnJvdycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIGZuOiBhcnJvdyxcbiAgZWZmZWN0OiBlZmZlY3QsXG4gIHJlcXVpcmVzOiBbJ3BvcHBlck9mZnNldHMnXSxcbiAgcmVxdWlyZXNJZkV4aXN0czogWydwcmV2ZW50T3ZlcmZsb3cnXVxufTsiLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnNwbGl0KCctJylbMV07XG59IiwgImltcG9ydCB7IHRvcCwgbGVmdCwgcmlnaHQsIGJvdHRvbSwgZW5kIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0T2Zmc2V0UGFyZW50LmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0V2luZG93LmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0Q29tcHV0ZWRTdHlsZSBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldENvbXB1dGVkU3R5bGUuanNcIjtcbmltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZ2V0VmFyaWF0aW9uIGZyb20gXCIuLi91dGlscy9nZXRWYXJpYXRpb24uanNcIjtcbmltcG9ydCB7IHJvdW5kIH0gZnJvbSBcIi4uL3V0aWxzL21hdGguanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG52YXIgdW5zZXRTaWRlcyA9IHtcbiAgdG9wOiAnYXV0bycsXG4gIHJpZ2h0OiAnYXV0bycsXG4gIGJvdHRvbTogJ2F1dG8nLFxuICBsZWZ0OiAnYXV0bydcbn07IC8vIFJvdW5kIHRoZSBvZmZzZXRzIHRvIHRoZSBuZWFyZXN0IHN1aXRhYmxlIHN1YnBpeGVsIGJhc2VkIG9uIHRoZSBEUFIuXG4vLyBab29taW5nIGNhbiBjaGFuZ2UgdGhlIERQUiwgYnV0IGl0IHNlZW1zIHRvIHJlcG9ydCBhIHZhbHVlIHRoYXQgd2lsbFxuLy8gY2xlYW5seSBkaXZpZGUgdGhlIHZhbHVlcyBpbnRvIHRoZSBhcHByb3ByaWF0ZSBzdWJwaXhlbHMuXG5cbmZ1bmN0aW9uIHJvdW5kT2Zmc2V0c0J5RFBSKF9yZWYsIHdpbikge1xuICB2YXIgeCA9IF9yZWYueCxcbiAgICAgIHkgPSBfcmVmLnk7XG4gIHZhciBkcHIgPSB3aW4uZGV2aWNlUGl4ZWxSYXRpbyB8fCAxO1xuICByZXR1cm4ge1xuICAgIHg6IHJvdW5kKHggKiBkcHIpIC8gZHByIHx8IDAsXG4gICAgeTogcm91bmQoeSAqIGRwcikgLyBkcHIgfHwgMFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFwVG9TdHlsZXMoX3JlZjIpIHtcbiAgdmFyIF9PYmplY3QkYXNzaWduMjtcblxuICB2YXIgcG9wcGVyID0gX3JlZjIucG9wcGVyLFxuICAgICAgcG9wcGVyUmVjdCA9IF9yZWYyLnBvcHBlclJlY3QsXG4gICAgICBwbGFjZW1lbnQgPSBfcmVmMi5wbGFjZW1lbnQsXG4gICAgICB2YXJpYXRpb24gPSBfcmVmMi52YXJpYXRpb24sXG4gICAgICBvZmZzZXRzID0gX3JlZjIub2Zmc2V0cyxcbiAgICAgIHBvc2l0aW9uID0gX3JlZjIucG9zaXRpb24sXG4gICAgICBncHVBY2NlbGVyYXRpb24gPSBfcmVmMi5ncHVBY2NlbGVyYXRpb24sXG4gICAgICBhZGFwdGl2ZSA9IF9yZWYyLmFkYXB0aXZlLFxuICAgICAgcm91bmRPZmZzZXRzID0gX3JlZjIucm91bmRPZmZzZXRzLFxuICAgICAgaXNGaXhlZCA9IF9yZWYyLmlzRml4ZWQ7XG4gIHZhciBfb2Zmc2V0cyR4ID0gb2Zmc2V0cy54LFxuICAgICAgeCA9IF9vZmZzZXRzJHggPT09IHZvaWQgMCA/IDAgOiBfb2Zmc2V0cyR4LFxuICAgICAgX29mZnNldHMkeSA9IG9mZnNldHMueSxcbiAgICAgIHkgPSBfb2Zmc2V0cyR5ID09PSB2b2lkIDAgPyAwIDogX29mZnNldHMkeTtcblxuICB2YXIgX3JlZjMgPSB0eXBlb2Ygcm91bmRPZmZzZXRzID09PSAnZnVuY3Rpb24nID8gcm91bmRPZmZzZXRzKHtcbiAgICB4OiB4LFxuICAgIHk6IHlcbiAgfSkgOiB7XG4gICAgeDogeCxcbiAgICB5OiB5XG4gIH07XG5cbiAgeCA9IF9yZWYzLng7XG4gIHkgPSBfcmVmMy55O1xuICB2YXIgaGFzWCA9IG9mZnNldHMuaGFzT3duUHJvcGVydHkoJ3gnKTtcbiAgdmFyIGhhc1kgPSBvZmZzZXRzLmhhc093blByb3BlcnR5KCd5Jyk7XG4gIHZhciBzaWRlWCA9IGxlZnQ7XG4gIHZhciBzaWRlWSA9IHRvcDtcbiAgdmFyIHdpbiA9IHdpbmRvdztcblxuICBpZiAoYWRhcHRpdmUpIHtcbiAgICB2YXIgb2Zmc2V0UGFyZW50ID0gZ2V0T2Zmc2V0UGFyZW50KHBvcHBlcik7XG4gICAgdmFyIGhlaWdodFByb3AgPSAnY2xpZW50SGVpZ2h0JztcbiAgICB2YXIgd2lkdGhQcm9wID0gJ2NsaWVudFdpZHRoJztcblxuICAgIGlmIChvZmZzZXRQYXJlbnQgPT09IGdldFdpbmRvdyhwb3BwZXIpKSB7XG4gICAgICBvZmZzZXRQYXJlbnQgPSBnZXREb2N1bWVudEVsZW1lbnQocG9wcGVyKTtcblxuICAgICAgaWYgKGdldENvbXB1dGVkU3R5bGUob2Zmc2V0UGFyZW50KS5wb3NpdGlvbiAhPT0gJ3N0YXRpYycgJiYgcG9zaXRpb24gPT09ICdhYnNvbHV0ZScpIHtcbiAgICAgICAgaGVpZ2h0UHJvcCA9ICdzY3JvbGxIZWlnaHQnO1xuICAgICAgICB3aWR0aFByb3AgPSAnc2Nyb2xsV2lkdGgnO1xuICAgICAgfVxuICAgIH0gLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtY2FzdF06IGZvcmNlIHR5cGUgcmVmaW5lbWVudCwgd2UgY29tcGFyZSBvZmZzZXRQYXJlbnQgd2l0aCB3aW5kb3cgYWJvdmUsIGJ1dCBGbG93IGRvZXNuJ3QgZGV0ZWN0IGl0XG5cblxuICAgIG9mZnNldFBhcmVudCA9IG9mZnNldFBhcmVudDtcblxuICAgIGlmIChwbGFjZW1lbnQgPT09IHRvcCB8fCAocGxhY2VtZW50ID09PSBsZWZ0IHx8IHBsYWNlbWVudCA9PT0gcmlnaHQpICYmIHZhcmlhdGlvbiA9PT0gZW5kKSB7XG4gICAgICBzaWRlWSA9IGJvdHRvbTtcbiAgICAgIHZhciBvZmZzZXRZID0gaXNGaXhlZCAmJiBvZmZzZXRQYXJlbnQgPT09IHdpbiAmJiB3aW4udmlzdWFsVmlld3BvcnQgPyB3aW4udmlzdWFsVmlld3BvcnQuaGVpZ2h0IDogLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG4gICAgICBvZmZzZXRQYXJlbnRbaGVpZ2h0UHJvcF07XG4gICAgICB5IC09IG9mZnNldFkgLSBwb3BwZXJSZWN0LmhlaWdodDtcbiAgICAgIHkgKj0gZ3B1QWNjZWxlcmF0aW9uID8gMSA6IC0xO1xuICAgIH1cblxuICAgIGlmIChwbGFjZW1lbnQgPT09IGxlZnQgfHwgKHBsYWNlbWVudCA9PT0gdG9wIHx8IHBsYWNlbWVudCA9PT0gYm90dG9tKSAmJiB2YXJpYXRpb24gPT09IGVuZCkge1xuICAgICAgc2lkZVggPSByaWdodDtcbiAgICAgIHZhciBvZmZzZXRYID0gaXNGaXhlZCAmJiBvZmZzZXRQYXJlbnQgPT09IHdpbiAmJiB3aW4udmlzdWFsVmlld3BvcnQgPyB3aW4udmlzdWFsVmlld3BvcnQud2lkdGggOiAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cbiAgICAgIG9mZnNldFBhcmVudFt3aWR0aFByb3BdO1xuICAgICAgeCAtPSBvZmZzZXRYIC0gcG9wcGVyUmVjdC53aWR0aDtcbiAgICAgIHggKj0gZ3B1QWNjZWxlcmF0aW9uID8gMSA6IC0xO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb21tb25TdHlsZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICBwb3NpdGlvbjogcG9zaXRpb25cbiAgfSwgYWRhcHRpdmUgJiYgdW5zZXRTaWRlcyk7XG5cbiAgdmFyIF9yZWY0ID0gcm91bmRPZmZzZXRzID09PSB0cnVlID8gcm91bmRPZmZzZXRzQnlEUFIoe1xuICAgIHg6IHgsXG4gICAgeTogeVxuICB9LCBnZXRXaW5kb3cocG9wcGVyKSkgOiB7XG4gICAgeDogeCxcbiAgICB5OiB5XG4gIH07XG5cbiAgeCA9IF9yZWY0Lng7XG4gIHkgPSBfcmVmNC55O1xuXG4gIGlmIChncHVBY2NlbGVyYXRpb24pIHtcbiAgICB2YXIgX09iamVjdCRhc3NpZ247XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCAoX09iamVjdCRhc3NpZ24gPSB7fSwgX09iamVjdCRhc3NpZ25bc2lkZVldID0gaGFzWSA/ICcwJyA6ICcnLCBfT2JqZWN0JGFzc2lnbltzaWRlWF0gPSBoYXNYID8gJzAnIDogJycsIF9PYmplY3QkYXNzaWduLnRyYW5zZm9ybSA9ICh3aW4uZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKSA8PSAxID8gXCJ0cmFuc2xhdGUoXCIgKyB4ICsgXCJweCwgXCIgKyB5ICsgXCJweClcIiA6IFwidHJhbnNsYXRlM2QoXCIgKyB4ICsgXCJweCwgXCIgKyB5ICsgXCJweCwgMClcIiwgX09iamVjdCRhc3NpZ24pKTtcbiAgfVxuXG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMsIChfT2JqZWN0JGFzc2lnbjIgPSB7fSwgX09iamVjdCRhc3NpZ24yW3NpZGVZXSA9IGhhc1kgPyB5ICsgXCJweFwiIDogJycsIF9PYmplY3QkYXNzaWduMltzaWRlWF0gPSBoYXNYID8geCArIFwicHhcIiA6ICcnLCBfT2JqZWN0JGFzc2lnbjIudHJhbnNmb3JtID0gJycsIF9PYmplY3QkYXNzaWduMikpO1xufVxuXG5mdW5jdGlvbiBjb21wdXRlU3R5bGVzKF9yZWY1KSB7XG4gIHZhciBzdGF0ZSA9IF9yZWY1LnN0YXRlLFxuICAgICAgb3B0aW9ucyA9IF9yZWY1Lm9wdGlvbnM7XG4gIHZhciBfb3B0aW9ucyRncHVBY2NlbGVyYXQgPSBvcHRpb25zLmdwdUFjY2VsZXJhdGlvbixcbiAgICAgIGdwdUFjY2VsZXJhdGlvbiA9IF9vcHRpb25zJGdwdUFjY2VsZXJhdCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJGdwdUFjY2VsZXJhdCxcbiAgICAgIF9vcHRpb25zJGFkYXB0aXZlID0gb3B0aW9ucy5hZGFwdGl2ZSxcbiAgICAgIGFkYXB0aXZlID0gX29wdGlvbnMkYWRhcHRpdmUgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRhZGFwdGl2ZSxcbiAgICAgIF9vcHRpb25zJHJvdW5kT2Zmc2V0cyA9IG9wdGlvbnMucm91bmRPZmZzZXRzLFxuICAgICAgcm91bmRPZmZzZXRzID0gX29wdGlvbnMkcm91bmRPZmZzZXRzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkcm91bmRPZmZzZXRzO1xuICB2YXIgY29tbW9uU3R5bGVzID0ge1xuICAgIHBsYWNlbWVudDogZ2V0QmFzZVBsYWNlbWVudChzdGF0ZS5wbGFjZW1lbnQpLFxuICAgIHZhcmlhdGlvbjogZ2V0VmFyaWF0aW9uKHN0YXRlLnBsYWNlbWVudCksXG4gICAgcG9wcGVyOiBzdGF0ZS5lbGVtZW50cy5wb3BwZXIsXG4gICAgcG9wcGVyUmVjdDogc3RhdGUucmVjdHMucG9wcGVyLFxuICAgIGdwdUFjY2VsZXJhdGlvbjogZ3B1QWNjZWxlcmF0aW9uLFxuICAgIGlzRml4ZWQ6IHN0YXRlLm9wdGlvbnMuc3RyYXRlZ3kgPT09ICdmaXhlZCdcbiAgfTtcblxuICBpZiAoc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzICE9IG51bGwpIHtcbiAgICBzdGF0ZS5zdHlsZXMucG9wcGVyID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuc3R5bGVzLnBvcHBlciwgbWFwVG9TdHlsZXMoT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCB7XG4gICAgICBvZmZzZXRzOiBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMsXG4gICAgICBwb3NpdGlvbjogc3RhdGUub3B0aW9ucy5zdHJhdGVneSxcbiAgICAgIGFkYXB0aXZlOiBhZGFwdGl2ZSxcbiAgICAgIHJvdW5kT2Zmc2V0czogcm91bmRPZmZzZXRzXG4gICAgfSkpKTtcbiAgfVxuXG4gIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhLmFycm93ICE9IG51bGwpIHtcbiAgICBzdGF0ZS5zdHlsZXMuYXJyb3cgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5zdHlsZXMuYXJyb3csIG1hcFRvU3R5bGVzKE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcywge1xuICAgICAgb2Zmc2V0czogc3RhdGUubW9kaWZpZXJzRGF0YS5hcnJvdyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgYWRhcHRpdmU6IGZhbHNlLFxuICAgICAgcm91bmRPZmZzZXRzOiByb3VuZE9mZnNldHNcbiAgICB9KSkpO1xuICB9XG5cbiAgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciwge1xuICAgICdkYXRhLXBvcHBlci1wbGFjZW1lbnQnOiBzdGF0ZS5wbGFjZW1lbnRcbiAgfSk7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdjb21wdXRlU3R5bGVzJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdiZWZvcmVXcml0ZScsXG4gIGZuOiBjb21wdXRlU3R5bGVzLFxuICBkYXRhOiB7fVxufTsiLCAiaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldFdpbmRvdy5qc1wiOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbnZhciBwYXNzaXZlID0ge1xuICBwYXNzaXZlOiB0cnVlXG59O1xuXG5mdW5jdGlvbiBlZmZlY3QoX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgaW5zdGFuY2UgPSBfcmVmLmluc3RhbmNlLFxuICAgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucztcbiAgdmFyIF9vcHRpb25zJHNjcm9sbCA9IG9wdGlvbnMuc2Nyb2xsLFxuICAgICAgc2Nyb2xsID0gX29wdGlvbnMkc2Nyb2xsID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkc2Nyb2xsLFxuICAgICAgX29wdGlvbnMkcmVzaXplID0gb3B0aW9ucy5yZXNpemUsXG4gICAgICByZXNpemUgPSBfb3B0aW9ucyRyZXNpemUgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRyZXNpemU7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coc3RhdGUuZWxlbWVudHMucG9wcGVyKTtcbiAgdmFyIHNjcm9sbFBhcmVudHMgPSBbXS5jb25jYXQoc3RhdGUuc2Nyb2xsUGFyZW50cy5yZWZlcmVuY2UsIHN0YXRlLnNjcm9sbFBhcmVudHMucG9wcGVyKTtcblxuICBpZiAoc2Nyb2xsKSB7XG4gICAgc2Nyb2xsUGFyZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChzY3JvbGxQYXJlbnQpIHtcbiAgICAgIHNjcm9sbFBhcmVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBpbnN0YW5jZS51cGRhdGUsIHBhc3NpdmUpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKHJlc2l6ZSkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBpbnN0YW5jZS51cGRhdGUsIHBhc3NpdmUpO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICBzY3JvbGxQYXJlbnRzLmZvckVhY2goZnVuY3Rpb24gKHNjcm9sbFBhcmVudCkge1xuICAgICAgICBzY3JvbGxQYXJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChyZXNpemUpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBpbnN0YW5jZS51cGRhdGUsIHBhc3NpdmUpO1xuICAgIH1cbiAgfTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2V2ZW50TGlzdGVuZXJzJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICd3cml0ZScsXG4gIGZuOiBmdW5jdGlvbiBmbigpIHt9LFxuICBlZmZlY3Q6IGVmZmVjdCxcbiAgZGF0YToge31cbn07IiwgInZhciBoYXNoID0ge1xuICBsZWZ0OiAncmlnaHQnLFxuICByaWdodDogJ2xlZnQnLFxuICBib3R0b206ICd0b3AnLFxuICB0b3A6ICdib3R0b20nXG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQucmVwbGFjZSgvbGVmdHxyaWdodHxib3R0b218dG9wL2csIGZ1bmN0aW9uIChtYXRjaGVkKSB7XG4gICAgcmV0dXJuIGhhc2hbbWF0Y2hlZF07XG4gIH0pO1xufSIsICJ2YXIgaGFzaCA9IHtcbiAgc3RhcnQ6ICdlbmQnLFxuICBlbmQ6ICdzdGFydCdcbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5yZXBsYWNlKC9zdGFydHxlbmQvZywgZnVuY3Rpb24gKG1hdGNoZWQpIHtcbiAgICByZXR1cm4gaGFzaFttYXRjaGVkXTtcbiAgfSk7XG59IiwgImltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vZ2V0V2luZG93LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRXaW5kb3dTY3JvbGwobm9kZSkge1xuICB2YXIgd2luID0gZ2V0V2luZG93KG5vZGUpO1xuICB2YXIgc2Nyb2xsTGVmdCA9IHdpbi5wYWdlWE9mZnNldDtcbiAgdmFyIHNjcm9sbFRvcCA9IHdpbi5wYWdlWU9mZnNldDtcbiAgcmV0dXJuIHtcbiAgICBzY3JvbGxMZWZ0OiBzY3JvbGxMZWZ0LFxuICAgIHNjcm9sbFRvcDogc2Nyb2xsVG9wXG4gIH07XG59IiwgImltcG9ydCBnZXRCb3VuZGluZ0NsaWVudFJlY3QgZnJvbSBcIi4vZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGdldFdpbmRvd1Njcm9sbCBmcm9tIFwiLi9nZXRXaW5kb3dTY3JvbGwuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFdpbmRvd1Njcm9sbEJhclgoZWxlbWVudCkge1xuICAvLyBJZiA8aHRtbD4gaGFzIGEgQ1NTIHdpZHRoIGdyZWF0ZXIgdGhhbiB0aGUgdmlld3BvcnQsIHRoZW4gdGhpcyB3aWxsIGJlXG4gIC8vIGluY29ycmVjdCBmb3IgUlRMLlxuICAvLyBQb3BwZXIgMSBpcyBicm9rZW4gaW4gdGhpcyBjYXNlIGFuZCBuZXZlciBoYWQgYSBidWcgcmVwb3J0IHNvIGxldCdzIGFzc3VtZVxuICAvLyBpdCdzIG5vdCBhbiBpc3N1ZS4gSSBkb24ndCB0aGluayBhbnlvbmUgZXZlciBzcGVjaWZpZXMgd2lkdGggb24gPGh0bWw+XG4gIC8vIGFueXdheS5cbiAgLy8gQnJvd3NlcnMgd2hlcmUgdGhlIGxlZnQgc2Nyb2xsYmFyIGRvZXNuJ3QgY2F1c2UgYW4gaXNzdWUgcmVwb3J0IGAwYCBmb3JcbiAgLy8gdGhpcyAoZS5nLiBFZGdlIDIwMTksIElFMTEsIFNhZmFyaSlcbiAgcmV0dXJuIGdldEJvdW5kaW5nQ2xpZW50UmVjdChnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkpLmxlZnQgKyBnZXRXaW5kb3dTY3JvbGwoZWxlbWVudCkuc2Nyb2xsTGVmdDtcbn0iLCAiaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93U2Nyb2xsQmFyWCBmcm9tIFwiLi9nZXRXaW5kb3dTY3JvbGxCYXJYLmpzXCI7XG5pbXBvcnQgaXNMYXlvdXRWaWV3cG9ydCBmcm9tIFwiLi9pc0xheW91dFZpZXdwb3J0LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRWaWV3cG9ydFJlY3QoZWxlbWVudCwgc3RyYXRlZ3kpIHtcbiAgdmFyIHdpbiA9IGdldFdpbmRvdyhlbGVtZW50KTtcbiAgdmFyIGh0bWwgPSBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCk7XG4gIHZhciB2aXN1YWxWaWV3cG9ydCA9IHdpbi52aXN1YWxWaWV3cG9ydDtcbiAgdmFyIHdpZHRoID0gaHRtbC5jbGllbnRXaWR0aDtcbiAgdmFyIGhlaWdodCA9IGh0bWwuY2xpZW50SGVpZ2h0O1xuICB2YXIgeCA9IDA7XG4gIHZhciB5ID0gMDtcblxuICBpZiAodmlzdWFsVmlld3BvcnQpIHtcbiAgICB3aWR0aCA9IHZpc3VhbFZpZXdwb3J0LndpZHRoO1xuICAgIGhlaWdodCA9IHZpc3VhbFZpZXdwb3J0LmhlaWdodDtcbiAgICB2YXIgbGF5b3V0Vmlld3BvcnQgPSBpc0xheW91dFZpZXdwb3J0KCk7XG5cbiAgICBpZiAobGF5b3V0Vmlld3BvcnQgfHwgIWxheW91dFZpZXdwb3J0ICYmIHN0cmF0ZWd5ID09PSAnZml4ZWQnKSB7XG4gICAgICB4ID0gdmlzdWFsVmlld3BvcnQub2Zmc2V0TGVmdDtcbiAgICAgIHkgPSB2aXN1YWxWaWV3cG9ydC5vZmZzZXRUb3A7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgeDogeCArIGdldFdpbmRvd1Njcm9sbEJhclgoZWxlbWVudCksXG4gICAgeTogeVxuICB9O1xufSIsICJpbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gXCIuL2dldERvY3VtZW50RWxlbWVudC5qc1wiO1xuaW1wb3J0IGdldENvbXB1dGVkU3R5bGUgZnJvbSBcIi4vZ2V0Q29tcHV0ZWRTdHlsZS5qc1wiO1xuaW1wb3J0IGdldFdpbmRvd1Njcm9sbEJhclggZnJvbSBcIi4vZ2V0V2luZG93U2Nyb2xsQmFyWC5qc1wiO1xuaW1wb3J0IGdldFdpbmRvd1Njcm9sbCBmcm9tIFwiLi9nZXRXaW5kb3dTY3JvbGwuanNcIjtcbmltcG9ydCB7IG1heCB9IGZyb20gXCIuLi91dGlscy9tYXRoLmpzXCI7IC8vIEdldHMgdGhlIGVudGlyZSBzaXplIG9mIHRoZSBzY3JvbGxhYmxlIGRvY3VtZW50IGFyZWEsIGV2ZW4gZXh0ZW5kaW5nIG91dHNpZGVcbi8vIG9mIHRoZSBgPGh0bWw+YCBhbmQgYDxib2R5PmAgcmVjdCBib3VuZHMgaWYgaG9yaXpvbnRhbGx5IHNjcm9sbGFibGVcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RG9jdW1lbnRSZWN0KGVsZW1lbnQpIHtcbiAgdmFyIF9lbGVtZW50JG93bmVyRG9jdW1lbjtcblxuICB2YXIgaHRtbCA9IGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KTtcbiAgdmFyIHdpblNjcm9sbCA9IGdldFdpbmRvd1Njcm9sbChlbGVtZW50KTtcbiAgdmFyIGJvZHkgPSAoX2VsZW1lbnQkb3duZXJEb2N1bWVuID0gZWxlbWVudC5vd25lckRvY3VtZW50KSA9PSBudWxsID8gdm9pZCAwIDogX2VsZW1lbnQkb3duZXJEb2N1bWVuLmJvZHk7XG4gIHZhciB3aWR0aCA9IG1heChodG1sLnNjcm9sbFdpZHRoLCBodG1sLmNsaWVudFdpZHRoLCBib2R5ID8gYm9keS5zY3JvbGxXaWR0aCA6IDAsIGJvZHkgPyBib2R5LmNsaWVudFdpZHRoIDogMCk7XG4gIHZhciBoZWlnaHQgPSBtYXgoaHRtbC5zY3JvbGxIZWlnaHQsIGh0bWwuY2xpZW50SGVpZ2h0LCBib2R5ID8gYm9keS5zY3JvbGxIZWlnaHQgOiAwLCBib2R5ID8gYm9keS5jbGllbnRIZWlnaHQgOiAwKTtcbiAgdmFyIHggPSAtd2luU2Nyb2xsLnNjcm9sbExlZnQgKyBnZXRXaW5kb3dTY3JvbGxCYXJYKGVsZW1lbnQpO1xuICB2YXIgeSA9IC13aW5TY3JvbGwuc2Nyb2xsVG9wO1xuXG4gIGlmIChnZXRDb21wdXRlZFN0eWxlKGJvZHkgfHwgaHRtbCkuZGlyZWN0aW9uID09PSAncnRsJykge1xuICAgIHggKz0gbWF4KGh0bWwuY2xpZW50V2lkdGgsIGJvZHkgPyBib2R5LmNsaWVudFdpZHRoIDogMCkgLSB3aWR0aDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIHg6IHgsXG4gICAgeTogeVxuICB9O1xufSIsICJpbXBvcnQgZ2V0Q29tcHV0ZWRTdHlsZSBmcm9tIFwiLi9nZXRDb21wdXRlZFN0eWxlLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1Njcm9sbFBhcmVudChlbGVtZW50KSB7XG4gIC8vIEZpcmVmb3ggd2FudHMgdXMgdG8gY2hlY2sgYC14YCBhbmQgYC15YCB2YXJpYXRpb25zIGFzIHdlbGxcbiAgdmFyIF9nZXRDb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KSxcbiAgICAgIG92ZXJmbG93ID0gX2dldENvbXB1dGVkU3R5bGUub3ZlcmZsb3csXG4gICAgICBvdmVyZmxvd1ggPSBfZ2V0Q29tcHV0ZWRTdHlsZS5vdmVyZmxvd1gsXG4gICAgICBvdmVyZmxvd1kgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5vdmVyZmxvd1k7XG5cbiAgcmV0dXJuIC9hdXRvfHNjcm9sbHxvdmVybGF5fGhpZGRlbi8udGVzdChvdmVyZmxvdyArIG92ZXJmbG93WSArIG92ZXJmbG93WCk7XG59IiwgImltcG9ydCBnZXRQYXJlbnROb2RlIGZyb20gXCIuL2dldFBhcmVudE5vZGUuanNcIjtcbmltcG9ydCBpc1Njcm9sbFBhcmVudCBmcm9tIFwiLi9pc1Njcm9sbFBhcmVudC5qc1wiO1xuaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gXCIuL2dldE5vZGVOYW1lLmpzXCI7XG5pbXBvcnQgeyBpc0hUTUxFbGVtZW50IH0gZnJvbSBcIi4vaW5zdGFuY2VPZi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0U2Nyb2xsUGFyZW50KG5vZGUpIHtcbiAgaWYgKFsnaHRtbCcsICdib2R5JywgJyNkb2N1bWVudCddLmluZGV4T2YoZ2V0Tm9kZU5hbWUobm9kZSkpID49IDApIHtcbiAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dOiBhc3N1bWUgYm9keSBpcyBhbHdheXMgYXZhaWxhYmxlXG4gICAgcmV0dXJuIG5vZGUub3duZXJEb2N1bWVudC5ib2R5O1xuICB9XG5cbiAgaWYgKGlzSFRNTEVsZW1lbnQobm9kZSkgJiYgaXNTY3JvbGxQYXJlbnQobm9kZSkpIHtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHJldHVybiBnZXRTY3JvbGxQYXJlbnQoZ2V0UGFyZW50Tm9kZShub2RlKSk7XG59IiwgImltcG9ydCBnZXRTY3JvbGxQYXJlbnQgZnJvbSBcIi4vZ2V0U2Nyb2xsUGFyZW50LmpzXCI7XG5pbXBvcnQgZ2V0UGFyZW50Tm9kZSBmcm9tIFwiLi9nZXRQYXJlbnROb2RlLmpzXCI7XG5pbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL2dldFdpbmRvdy5qc1wiO1xuaW1wb3J0IGlzU2Nyb2xsUGFyZW50IGZyb20gXCIuL2lzU2Nyb2xsUGFyZW50LmpzXCI7XG4vKlxuZ2l2ZW4gYSBET00gZWxlbWVudCwgcmV0dXJuIHRoZSBsaXN0IG9mIGFsbCBzY3JvbGwgcGFyZW50cywgdXAgdGhlIGxpc3Qgb2YgYW5jZXNvcnNcbnVudGlsIHdlIGdldCB0byB0aGUgdG9wIHdpbmRvdyBvYmplY3QuIFRoaXMgbGlzdCBpcyB3aGF0IHdlIGF0dGFjaCBzY3JvbGwgbGlzdGVuZXJzXG50bywgYmVjYXVzZSBpZiBhbnkgb2YgdGhlc2UgcGFyZW50IGVsZW1lbnRzIHNjcm9sbCwgd2UnbGwgbmVlZCB0byByZS1jYWxjdWxhdGUgdGhlXG5yZWZlcmVuY2UgZWxlbWVudCdzIHBvc2l0aW9uLlxuKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGlzdFNjcm9sbFBhcmVudHMoZWxlbWVudCwgbGlzdCkge1xuICB2YXIgX2VsZW1lbnQkb3duZXJEb2N1bWVuO1xuXG4gIGlmIChsaXN0ID09PSB2b2lkIDApIHtcbiAgICBsaXN0ID0gW107XG4gIH1cblxuICB2YXIgc2Nyb2xsUGFyZW50ID0gZ2V0U2Nyb2xsUGFyZW50KGVsZW1lbnQpO1xuICB2YXIgaXNCb2R5ID0gc2Nyb2xsUGFyZW50ID09PSAoKF9lbGVtZW50JG93bmVyRG9jdW1lbiA9IGVsZW1lbnQub3duZXJEb2N1bWVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9lbGVtZW50JG93bmVyRG9jdW1lbi5ib2R5KTtcbiAgdmFyIHdpbiA9IGdldFdpbmRvdyhzY3JvbGxQYXJlbnQpO1xuICB2YXIgdGFyZ2V0ID0gaXNCb2R5ID8gW3dpbl0uY29uY2F0KHdpbi52aXN1YWxWaWV3cG9ydCB8fCBbXSwgaXNTY3JvbGxQYXJlbnQoc2Nyb2xsUGFyZW50KSA/IHNjcm9sbFBhcmVudCA6IFtdKSA6IHNjcm9sbFBhcmVudDtcbiAgdmFyIHVwZGF0ZWRMaXN0ID0gbGlzdC5jb25jYXQodGFyZ2V0KTtcbiAgcmV0dXJuIGlzQm9keSA/IHVwZGF0ZWRMaXN0IDogLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtY2FsbF06IGlzQm9keSB0ZWxscyB1cyB0YXJnZXQgd2lsbCBiZSBhbiBIVE1MRWxlbWVudCBoZXJlXG4gIHVwZGF0ZWRMaXN0LmNvbmNhdChsaXN0U2Nyb2xsUGFyZW50cyhnZXRQYXJlbnROb2RlKHRhcmdldCkpKTtcbn0iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVjdFRvQ2xpZW50UmVjdChyZWN0KSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCByZWN0LCB7XG4gICAgbGVmdDogcmVjdC54LFxuICAgIHRvcDogcmVjdC55LFxuICAgIHJpZ2h0OiByZWN0LnggKyByZWN0LndpZHRoLFxuICAgIGJvdHRvbTogcmVjdC55ICsgcmVjdC5oZWlnaHRcbiAgfSk7XG59IiwgImltcG9ydCB7IHZpZXdwb3J0IH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgZ2V0Vmlld3BvcnRSZWN0IGZyb20gXCIuL2dldFZpZXdwb3J0UmVjdC5qc1wiO1xuaW1wb3J0IGdldERvY3VtZW50UmVjdCBmcm9tIFwiLi9nZXREb2N1bWVudFJlY3QuanNcIjtcbmltcG9ydCBsaXN0U2Nyb2xsUGFyZW50cyBmcm9tIFwiLi9saXN0U2Nyb2xsUGFyZW50cy5qc1wiO1xuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tIFwiLi9nZXRPZmZzZXRQYXJlbnQuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgZ2V0Q29tcHV0ZWRTdHlsZSBmcm9tIFwiLi9nZXRDb21wdXRlZFN0eWxlLmpzXCI7XG5pbXBvcnQgeyBpc0VsZW1lbnQsIGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5pbXBvcnQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGZyb20gXCIuL2dldEJvdW5kaW5nQ2xpZW50UmVjdC5qc1wiO1xuaW1wb3J0IGdldFBhcmVudE5vZGUgZnJvbSBcIi4vZ2V0UGFyZW50Tm9kZS5qc1wiO1xuaW1wb3J0IGNvbnRhaW5zIGZyb20gXCIuL2NvbnRhaW5zLmpzXCI7XG5pbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSBcIi4vZ2V0Tm9kZU5hbWUuanNcIjtcbmltcG9ydCByZWN0VG9DbGllbnRSZWN0IGZyb20gXCIuLi91dGlscy9yZWN0VG9DbGllbnRSZWN0LmpzXCI7XG5pbXBvcnQgeyBtYXgsIG1pbiB9IGZyb20gXCIuLi91dGlscy9tYXRoLmpzXCI7XG5cbmZ1bmN0aW9uIGdldElubmVyQm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQsIHN0cmF0ZWd5KSB7XG4gIHZhciByZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQsIGZhbHNlLCBzdHJhdGVneSA9PT0gJ2ZpeGVkJyk7XG4gIHJlY3QudG9wID0gcmVjdC50b3AgKyBlbGVtZW50LmNsaWVudFRvcDtcbiAgcmVjdC5sZWZ0ID0gcmVjdC5sZWZ0ICsgZWxlbWVudC5jbGllbnRMZWZ0O1xuICByZWN0LmJvdHRvbSA9IHJlY3QudG9wICsgZWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gIHJlY3QucmlnaHQgPSByZWN0LmxlZnQgKyBlbGVtZW50LmNsaWVudFdpZHRoO1xuICByZWN0LndpZHRoID0gZWxlbWVudC5jbGllbnRXaWR0aDtcbiAgcmVjdC5oZWlnaHQgPSBlbGVtZW50LmNsaWVudEhlaWdodDtcbiAgcmVjdC54ID0gcmVjdC5sZWZ0O1xuICByZWN0LnkgPSByZWN0LnRvcDtcbiAgcmV0dXJuIHJlY3Q7XG59XG5cbmZ1bmN0aW9uIGdldENsaWVudFJlY3RGcm9tTWl4ZWRUeXBlKGVsZW1lbnQsIGNsaXBwaW5nUGFyZW50LCBzdHJhdGVneSkge1xuICByZXR1cm4gY2xpcHBpbmdQYXJlbnQgPT09IHZpZXdwb3J0ID8gcmVjdFRvQ2xpZW50UmVjdChnZXRWaWV3cG9ydFJlY3QoZWxlbWVudCwgc3RyYXRlZ3kpKSA6IGlzRWxlbWVudChjbGlwcGluZ1BhcmVudCkgPyBnZXRJbm5lckJvdW5kaW5nQ2xpZW50UmVjdChjbGlwcGluZ1BhcmVudCwgc3RyYXRlZ3kpIDogcmVjdFRvQ2xpZW50UmVjdChnZXREb2N1bWVudFJlY3QoZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpKSk7XG59IC8vIEEgXCJjbGlwcGluZyBwYXJlbnRcIiBpcyBhbiBvdmVyZmxvd2FibGUgY29udGFpbmVyIHdpdGggdGhlIGNoYXJhY3RlcmlzdGljIG9mXG4vLyBjbGlwcGluZyAob3IgaGlkaW5nKSBvdmVyZmxvd2luZyBlbGVtZW50cyB3aXRoIGEgcG9zaXRpb24gZGlmZmVyZW50IGZyb21cbi8vIGBpbml0aWFsYFxuXG5cbmZ1bmN0aW9uIGdldENsaXBwaW5nUGFyZW50cyhlbGVtZW50KSB7XG4gIHZhciBjbGlwcGluZ1BhcmVudHMgPSBsaXN0U2Nyb2xsUGFyZW50cyhnZXRQYXJlbnROb2RlKGVsZW1lbnQpKTtcbiAgdmFyIGNhbkVzY2FwZUNsaXBwaW5nID0gWydhYnNvbHV0ZScsICdmaXhlZCddLmluZGV4T2YoZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5wb3NpdGlvbikgPj0gMDtcbiAgdmFyIGNsaXBwZXJFbGVtZW50ID0gY2FuRXNjYXBlQ2xpcHBpbmcgJiYgaXNIVE1MRWxlbWVudChlbGVtZW50KSA/IGdldE9mZnNldFBhcmVudChlbGVtZW50KSA6IGVsZW1lbnQ7XG5cbiAgaWYgKCFpc0VsZW1lbnQoY2xpcHBlckVsZW1lbnQpKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl06IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9mbG93L2lzc3Vlcy8xNDE0XG5cblxuICByZXR1cm4gY2xpcHBpbmdQYXJlbnRzLmZpbHRlcihmdW5jdGlvbiAoY2xpcHBpbmdQYXJlbnQpIHtcbiAgICByZXR1cm4gaXNFbGVtZW50KGNsaXBwaW5nUGFyZW50KSAmJiBjb250YWlucyhjbGlwcGluZ1BhcmVudCwgY2xpcHBlckVsZW1lbnQpICYmIGdldE5vZGVOYW1lKGNsaXBwaW5nUGFyZW50KSAhPT0gJ2JvZHknO1xuICB9KTtcbn0gLy8gR2V0cyB0aGUgbWF4aW11bSBhcmVhIHRoYXQgdGhlIGVsZW1lbnQgaXMgdmlzaWJsZSBpbiBkdWUgdG8gYW55IG51bWJlciBvZlxuLy8gY2xpcHBpbmcgcGFyZW50c1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldENsaXBwaW5nUmVjdChlbGVtZW50LCBib3VuZGFyeSwgcm9vdEJvdW5kYXJ5LCBzdHJhdGVneSkge1xuICB2YXIgbWFpbkNsaXBwaW5nUGFyZW50cyA9IGJvdW5kYXJ5ID09PSAnY2xpcHBpbmdQYXJlbnRzJyA/IGdldENsaXBwaW5nUGFyZW50cyhlbGVtZW50KSA6IFtdLmNvbmNhdChib3VuZGFyeSk7XG4gIHZhciBjbGlwcGluZ1BhcmVudHMgPSBbXS5jb25jYXQobWFpbkNsaXBwaW5nUGFyZW50cywgW3Jvb3RCb3VuZGFyeV0pO1xuICB2YXIgZmlyc3RDbGlwcGluZ1BhcmVudCA9IGNsaXBwaW5nUGFyZW50c1swXTtcbiAgdmFyIGNsaXBwaW5nUmVjdCA9IGNsaXBwaW5nUGFyZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjY1JlY3QsIGNsaXBwaW5nUGFyZW50KSB7XG4gICAgdmFyIHJlY3QgPSBnZXRDbGllbnRSZWN0RnJvbU1peGVkVHlwZShlbGVtZW50LCBjbGlwcGluZ1BhcmVudCwgc3RyYXRlZ3kpO1xuICAgIGFjY1JlY3QudG9wID0gbWF4KHJlY3QudG9wLCBhY2NSZWN0LnRvcCk7XG4gICAgYWNjUmVjdC5yaWdodCA9IG1pbihyZWN0LnJpZ2h0LCBhY2NSZWN0LnJpZ2h0KTtcbiAgICBhY2NSZWN0LmJvdHRvbSA9IG1pbihyZWN0LmJvdHRvbSwgYWNjUmVjdC5ib3R0b20pO1xuICAgIGFjY1JlY3QubGVmdCA9IG1heChyZWN0LmxlZnQsIGFjY1JlY3QubGVmdCk7XG4gICAgcmV0dXJuIGFjY1JlY3Q7XG4gIH0sIGdldENsaWVudFJlY3RGcm9tTWl4ZWRUeXBlKGVsZW1lbnQsIGZpcnN0Q2xpcHBpbmdQYXJlbnQsIHN0cmF0ZWd5KSk7XG4gIGNsaXBwaW5nUmVjdC53aWR0aCA9IGNsaXBwaW5nUmVjdC5yaWdodCAtIGNsaXBwaW5nUmVjdC5sZWZ0O1xuICBjbGlwcGluZ1JlY3QuaGVpZ2h0ID0gY2xpcHBpbmdSZWN0LmJvdHRvbSAtIGNsaXBwaW5nUmVjdC50b3A7XG4gIGNsaXBwaW5nUmVjdC54ID0gY2xpcHBpbmdSZWN0LmxlZnQ7XG4gIGNsaXBwaW5nUmVjdC55ID0gY2xpcHBpbmdSZWN0LnRvcDtcbiAgcmV0dXJuIGNsaXBwaW5nUmVjdDtcbn0iLCAiaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4vZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldFZhcmlhdGlvbiBmcm9tIFwiLi9nZXRWYXJpYXRpb24uanNcIjtcbmltcG9ydCBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQgZnJvbSBcIi4vZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgeyB0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnQsIHN0YXJ0LCBlbmQgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXB1dGVPZmZzZXRzKF9yZWYpIHtcbiAgdmFyIHJlZmVyZW5jZSA9IF9yZWYucmVmZXJlbmNlLFxuICAgICAgZWxlbWVudCA9IF9yZWYuZWxlbWVudCxcbiAgICAgIHBsYWNlbWVudCA9IF9yZWYucGxhY2VtZW50O1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IHBsYWNlbWVudCA/IGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KSA6IG51bGw7XG4gIHZhciB2YXJpYXRpb24gPSBwbGFjZW1lbnQgPyBnZXRWYXJpYXRpb24ocGxhY2VtZW50KSA6IG51bGw7XG4gIHZhciBjb21tb25YID0gcmVmZXJlbmNlLnggKyByZWZlcmVuY2Uud2lkdGggLyAyIC0gZWxlbWVudC53aWR0aCAvIDI7XG4gIHZhciBjb21tb25ZID0gcmVmZXJlbmNlLnkgKyByZWZlcmVuY2UuaGVpZ2h0IC8gMiAtIGVsZW1lbnQuaGVpZ2h0IC8gMjtcbiAgdmFyIG9mZnNldHM7XG5cbiAgc3dpdGNoIChiYXNlUGxhY2VtZW50KSB7XG4gICAgY2FzZSB0b3A6XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiBjb21tb25YLFxuICAgICAgICB5OiByZWZlcmVuY2UueSAtIGVsZW1lbnQuaGVpZ2h0XG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIGJvdHRvbTpcbiAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgIHg6IGNvbW1vblgsXG4gICAgICAgIHk6IHJlZmVyZW5jZS55ICsgcmVmZXJlbmNlLmhlaWdodFxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSByaWdodDpcbiAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgIHg6IHJlZmVyZW5jZS54ICsgcmVmZXJlbmNlLndpZHRoLFxuICAgICAgICB5OiBjb21tb25ZXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIGxlZnQ6XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiByZWZlcmVuY2UueCAtIGVsZW1lbnQud2lkdGgsXG4gICAgICAgIHk6IGNvbW1vbllcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiByZWZlcmVuY2UueCxcbiAgICAgICAgeTogcmVmZXJlbmNlLnlcbiAgICAgIH07XG4gIH1cblxuICB2YXIgbWFpbkF4aXMgPSBiYXNlUGxhY2VtZW50ID8gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KGJhc2VQbGFjZW1lbnQpIDogbnVsbDtcblxuICBpZiAobWFpbkF4aXMgIT0gbnVsbCkge1xuICAgIHZhciBsZW4gPSBtYWluQXhpcyA9PT0gJ3knID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuXG4gICAgc3dpdGNoICh2YXJpYXRpb24pIHtcbiAgICAgIGNhc2Ugc3RhcnQ6XG4gICAgICAgIG9mZnNldHNbbWFpbkF4aXNdID0gb2Zmc2V0c1ttYWluQXhpc10gLSAocmVmZXJlbmNlW2xlbl0gLyAyIC0gZWxlbWVudFtsZW5dIC8gMik7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIGVuZDpcbiAgICAgICAgb2Zmc2V0c1ttYWluQXhpc10gPSBvZmZzZXRzW21haW5BeGlzXSArIChyZWZlcmVuY2VbbGVuXSAvIDIgLSBlbGVtZW50W2xlbl0gLyAyKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9mZnNldHM7XG59IiwgImltcG9ydCBnZXRDbGlwcGluZ1JlY3QgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRDbGlwcGluZ1JlY3QuanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4uL2RvbS11dGlscy9nZXREb2N1bWVudEVsZW1lbnQuanNcIjtcbmltcG9ydCBnZXRCb3VuZGluZ0NsaWVudFJlY3QgZnJvbSBcIi4uL2RvbS11dGlscy9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanNcIjtcbmltcG9ydCBjb21wdXRlT2Zmc2V0cyBmcm9tIFwiLi9jb21wdXRlT2Zmc2V0cy5qc1wiO1xuaW1wb3J0IHJlY3RUb0NsaWVudFJlY3QgZnJvbSBcIi4vcmVjdFRvQ2xpZW50UmVjdC5qc1wiO1xuaW1wb3J0IHsgY2xpcHBpbmdQYXJlbnRzLCByZWZlcmVuY2UsIHBvcHBlciwgYm90dG9tLCB0b3AsIHJpZ2h0LCBiYXNlUGxhY2VtZW50cywgdmlld3BvcnQgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCB7IGlzRWxlbWVudCB9IGZyb20gXCIuLi9kb20tdXRpbHMvaW5zdGFuY2VPZi5qc1wiO1xuaW1wb3J0IG1lcmdlUGFkZGluZ09iamVjdCBmcm9tIFwiLi9tZXJnZVBhZGRpbmdPYmplY3QuanNcIjtcbmltcG9ydCBleHBhbmRUb0hhc2hNYXAgZnJvbSBcIi4vZXhwYW5kVG9IYXNoTWFwLmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHZhciBfb3B0aW9ucyA9IG9wdGlvbnMsXG4gICAgICBfb3B0aW9ucyRwbGFjZW1lbnQgPSBfb3B0aW9ucy5wbGFjZW1lbnQsXG4gICAgICBwbGFjZW1lbnQgPSBfb3B0aW9ucyRwbGFjZW1lbnQgPT09IHZvaWQgMCA/IHN0YXRlLnBsYWNlbWVudCA6IF9vcHRpb25zJHBsYWNlbWVudCxcbiAgICAgIF9vcHRpb25zJHN0cmF0ZWd5ID0gX29wdGlvbnMuc3RyYXRlZ3ksXG4gICAgICBzdHJhdGVneSA9IF9vcHRpb25zJHN0cmF0ZWd5ID09PSB2b2lkIDAgPyBzdGF0ZS5zdHJhdGVneSA6IF9vcHRpb25zJHN0cmF0ZWd5LFxuICAgICAgX29wdGlvbnMkYm91bmRhcnkgPSBfb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgIGJvdW5kYXJ5ID0gX29wdGlvbnMkYm91bmRhcnkgPT09IHZvaWQgMCA/IGNsaXBwaW5nUGFyZW50cyA6IF9vcHRpb25zJGJvdW5kYXJ5LFxuICAgICAgX29wdGlvbnMkcm9vdEJvdW5kYXJ5ID0gX29wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5ID0gX29wdGlvbnMkcm9vdEJvdW5kYXJ5ID09PSB2b2lkIDAgPyB2aWV3cG9ydCA6IF9vcHRpb25zJHJvb3RCb3VuZGFyeSxcbiAgICAgIF9vcHRpb25zJGVsZW1lbnRDb250ZSA9IF9vcHRpb25zLmVsZW1lbnRDb250ZXh0LFxuICAgICAgZWxlbWVudENvbnRleHQgPSBfb3B0aW9ucyRlbGVtZW50Q29udGUgPT09IHZvaWQgMCA/IHBvcHBlciA6IF9vcHRpb25zJGVsZW1lbnRDb250ZSxcbiAgICAgIF9vcHRpb25zJGFsdEJvdW5kYXJ5ID0gX29wdGlvbnMuYWx0Qm91bmRhcnksXG4gICAgICBhbHRCb3VuZGFyeSA9IF9vcHRpb25zJGFsdEJvdW5kYXJ5ID09PSB2b2lkIDAgPyBmYWxzZSA6IF9vcHRpb25zJGFsdEJvdW5kYXJ5LFxuICAgICAgX29wdGlvbnMkcGFkZGluZyA9IF9vcHRpb25zLnBhZGRpbmcsXG4gICAgICBwYWRkaW5nID0gX29wdGlvbnMkcGFkZGluZyA9PT0gdm9pZCAwID8gMCA6IF9vcHRpb25zJHBhZGRpbmc7XG4gIHZhciBwYWRkaW5nT2JqZWN0ID0gbWVyZ2VQYWRkaW5nT2JqZWN0KHR5cGVvZiBwYWRkaW5nICE9PSAnbnVtYmVyJyA/IHBhZGRpbmcgOiBleHBhbmRUb0hhc2hNYXAocGFkZGluZywgYmFzZVBsYWNlbWVudHMpKTtcbiAgdmFyIGFsdENvbnRleHQgPSBlbGVtZW50Q29udGV4dCA9PT0gcG9wcGVyID8gcmVmZXJlbmNlIDogcG9wcGVyO1xuICB2YXIgcG9wcGVyUmVjdCA9IHN0YXRlLnJlY3RzLnBvcHBlcjtcbiAgdmFyIGVsZW1lbnQgPSBzdGF0ZS5lbGVtZW50c1thbHRCb3VuZGFyeSA/IGFsdENvbnRleHQgOiBlbGVtZW50Q29udGV4dF07XG4gIHZhciBjbGlwcGluZ0NsaWVudFJlY3QgPSBnZXRDbGlwcGluZ1JlY3QoaXNFbGVtZW50KGVsZW1lbnQpID8gZWxlbWVudCA6IGVsZW1lbnQuY29udGV4dEVsZW1lbnQgfHwgZ2V0RG9jdW1lbnRFbGVtZW50KHN0YXRlLmVsZW1lbnRzLnBvcHBlciksIGJvdW5kYXJ5LCByb290Qm91bmRhcnksIHN0cmF0ZWd5KTtcbiAgdmFyIHJlZmVyZW5jZUNsaWVudFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3Qoc3RhdGUuZWxlbWVudHMucmVmZXJlbmNlKTtcbiAgdmFyIHBvcHBlck9mZnNldHMgPSBjb21wdXRlT2Zmc2V0cyh7XG4gICAgcmVmZXJlbmNlOiByZWZlcmVuY2VDbGllbnRSZWN0LFxuICAgIGVsZW1lbnQ6IHBvcHBlclJlY3QsXG4gICAgc3RyYXRlZ3k6ICdhYnNvbHV0ZScsXG4gICAgcGxhY2VtZW50OiBwbGFjZW1lbnRcbiAgfSk7XG4gIHZhciBwb3BwZXJDbGllbnRSZWN0ID0gcmVjdFRvQ2xpZW50UmVjdChPYmplY3QuYXNzaWduKHt9LCBwb3BwZXJSZWN0LCBwb3BwZXJPZmZzZXRzKSk7XG4gIHZhciBlbGVtZW50Q2xpZW50UmVjdCA9IGVsZW1lbnRDb250ZXh0ID09PSBwb3BwZXIgPyBwb3BwZXJDbGllbnRSZWN0IDogcmVmZXJlbmNlQ2xpZW50UmVjdDsgLy8gcG9zaXRpdmUgPSBvdmVyZmxvd2luZyB0aGUgY2xpcHBpbmcgcmVjdFxuICAvLyAwIG9yIG5lZ2F0aXZlID0gd2l0aGluIHRoZSBjbGlwcGluZyByZWN0XG5cbiAgdmFyIG92ZXJmbG93T2Zmc2V0cyA9IHtcbiAgICB0b3A6IGNsaXBwaW5nQ2xpZW50UmVjdC50b3AgLSBlbGVtZW50Q2xpZW50UmVjdC50b3AgKyBwYWRkaW5nT2JqZWN0LnRvcCxcbiAgICBib3R0b206IGVsZW1lbnRDbGllbnRSZWN0LmJvdHRvbSAtIGNsaXBwaW5nQ2xpZW50UmVjdC5ib3R0b20gKyBwYWRkaW5nT2JqZWN0LmJvdHRvbSxcbiAgICBsZWZ0OiBjbGlwcGluZ0NsaWVudFJlY3QubGVmdCAtIGVsZW1lbnRDbGllbnRSZWN0LmxlZnQgKyBwYWRkaW5nT2JqZWN0LmxlZnQsXG4gICAgcmlnaHQ6IGVsZW1lbnRDbGllbnRSZWN0LnJpZ2h0IC0gY2xpcHBpbmdDbGllbnRSZWN0LnJpZ2h0ICsgcGFkZGluZ09iamVjdC5yaWdodFxuICB9O1xuICB2YXIgb2Zmc2V0RGF0YSA9IHN0YXRlLm1vZGlmaWVyc0RhdGEub2Zmc2V0OyAvLyBPZmZzZXRzIGNhbiBiZSBhcHBsaWVkIG9ubHkgdG8gdGhlIHBvcHBlciBlbGVtZW50XG5cbiAgaWYgKGVsZW1lbnRDb250ZXh0ID09PSBwb3BwZXIgJiYgb2Zmc2V0RGF0YSkge1xuICAgIHZhciBvZmZzZXQgPSBvZmZzZXREYXRhW3BsYWNlbWVudF07XG4gICAgT2JqZWN0LmtleXMob3ZlcmZsb3dPZmZzZXRzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBtdWx0aXBseSA9IFtyaWdodCwgYm90dG9tXS5pbmRleE9mKGtleSkgPj0gMCA/IDEgOiAtMTtcbiAgICAgIHZhciBheGlzID0gW3RvcCwgYm90dG9tXS5pbmRleE9mKGtleSkgPj0gMCA/ICd5JyA6ICd4JztcbiAgICAgIG92ZXJmbG93T2Zmc2V0c1trZXldICs9IG9mZnNldFtheGlzXSAqIG11bHRpcGx5O1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG92ZXJmbG93T2Zmc2V0cztcbn0iLCAiaW1wb3J0IGdldFZhcmlhdGlvbiBmcm9tIFwiLi9nZXRWYXJpYXRpb24uanNcIjtcbmltcG9ydCB7IHZhcmlhdGlvblBsYWNlbWVudHMsIGJhc2VQbGFjZW1lbnRzLCBwbGFjZW1lbnRzIGFzIGFsbFBsYWNlbWVudHMgfSBmcm9tIFwiLi4vZW51bXMuanNcIjtcbmltcG9ydCBkZXRlY3RPdmVyZmxvdyBmcm9tIFwiLi9kZXRlY3RPdmVyZmxvdy5qc1wiO1xuaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4vZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcHV0ZUF1dG9QbGFjZW1lbnQoc3RhdGUsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHZhciBfb3B0aW9ucyA9IG9wdGlvbnMsXG4gICAgICBwbGFjZW1lbnQgPSBfb3B0aW9ucy5wbGFjZW1lbnQsXG4gICAgICBib3VuZGFyeSA9IF9vcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5ID0gX29wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZyA9IF9vcHRpb25zLnBhZGRpbmcsXG4gICAgICBmbGlwVmFyaWF0aW9ucyA9IF9vcHRpb25zLmZsaXBWYXJpYXRpb25zLFxuICAgICAgX29wdGlvbnMkYWxsb3dlZEF1dG9QID0gX29wdGlvbnMuYWxsb3dlZEF1dG9QbGFjZW1lbnRzLFxuICAgICAgYWxsb3dlZEF1dG9QbGFjZW1lbnRzID0gX29wdGlvbnMkYWxsb3dlZEF1dG9QID09PSB2b2lkIDAgPyBhbGxQbGFjZW1lbnRzIDogX29wdGlvbnMkYWxsb3dlZEF1dG9QO1xuICB2YXIgdmFyaWF0aW9uID0gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCk7XG4gIHZhciBwbGFjZW1lbnRzID0gdmFyaWF0aW9uID8gZmxpcFZhcmlhdGlvbnMgPyB2YXJpYXRpb25QbGFjZW1lbnRzIDogdmFyaWF0aW9uUGxhY2VtZW50cy5maWx0ZXIoZnVuY3Rpb24gKHBsYWNlbWVudCkge1xuICAgIHJldHVybiBnZXRWYXJpYXRpb24ocGxhY2VtZW50KSA9PT0gdmFyaWF0aW9uO1xuICB9KSA6IGJhc2VQbGFjZW1lbnRzO1xuICB2YXIgYWxsb3dlZFBsYWNlbWVudHMgPSBwbGFjZW1lbnRzLmZpbHRlcihmdW5jdGlvbiAocGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIGFsbG93ZWRBdXRvUGxhY2VtZW50cy5pbmRleE9mKHBsYWNlbWVudCkgPj0gMDtcbiAgfSk7XG5cbiAgaWYgKGFsbG93ZWRQbGFjZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgIGFsbG93ZWRQbGFjZW1lbnRzID0gcGxhY2VtZW50cztcbiAgfSAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS10eXBlXTogRmxvdyBzZWVtcyB0byBoYXZlIHByb2JsZW1zIHdpdGggdHdvIGFycmF5IHVuaW9ucy4uLlxuXG5cbiAgdmFyIG92ZXJmbG93cyA9IGFsbG93ZWRQbGFjZW1lbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgICBhY2NbcGxhY2VtZW50XSA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICAgIGJvdW5kYXJ5OiBib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeTogcm9vdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZzogcGFkZGluZ1xuICAgIH0pW2dldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KV07XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuICByZXR1cm4gT2JqZWN0LmtleXMob3ZlcmZsb3dzKS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIG92ZXJmbG93c1thXSAtIG92ZXJmbG93c1tiXTtcbiAgfSk7XG59IiwgImltcG9ydCBnZXRPcHBvc2l0ZVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0T3Bwb3NpdGVQbGFjZW1lbnQuanNcIjtcbmltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gXCIuLi91dGlscy9nZXRCYXNlUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZGV0ZWN0T3ZlcmZsb3cgZnJvbSBcIi4uL3V0aWxzL2RldGVjdE92ZXJmbG93LmpzXCI7XG5pbXBvcnQgY29tcHV0ZUF1dG9QbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2NvbXB1dGVBdXRvUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgeyBib3R0b20sIHRvcCwgc3RhcnQsIHJpZ2h0LCBsZWZ0LCBhdXRvIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgZ2V0VmFyaWF0aW9uIGZyb20gXCIuLi91dGlscy9nZXRWYXJpYXRpb24uanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5mdW5jdGlvbiBnZXRFeHBhbmRlZEZhbGxiYWNrUGxhY2VtZW50cyhwbGFjZW1lbnQpIHtcbiAgaWYgKGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KSA9PT0gYXV0bykge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHZhciBvcHBvc2l0ZVBsYWNlbWVudCA9IGdldE9wcG9zaXRlUGxhY2VtZW50KHBsYWNlbWVudCk7XG4gIHJldHVybiBbZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQocGxhY2VtZW50KSwgb3Bwb3NpdGVQbGFjZW1lbnQsIGdldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50KG9wcG9zaXRlUGxhY2VtZW50KV07XG59XG5cbmZ1bmN0aW9uIGZsaXAoX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucyxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWU7XG5cbiAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0uX3NraXApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgX29wdGlvbnMkbWFpbkF4aXMgPSBvcHRpb25zLm1haW5BeGlzLFxuICAgICAgY2hlY2tNYWluQXhpcyA9IF9vcHRpb25zJG1haW5BeGlzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkbWFpbkF4aXMsXG4gICAgICBfb3B0aW9ucyRhbHRBeGlzID0gb3B0aW9ucy5hbHRBeGlzLFxuICAgICAgY2hlY2tBbHRBeGlzID0gX29wdGlvbnMkYWx0QXhpcyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJGFsdEF4aXMsXG4gICAgICBzcGVjaWZpZWRGYWxsYmFja1BsYWNlbWVudHMgPSBvcHRpb25zLmZhbGxiYWNrUGxhY2VtZW50cyxcbiAgICAgIHBhZGRpbmcgPSBvcHRpb25zLnBhZGRpbmcsXG4gICAgICBib3VuZGFyeSA9IG9wdGlvbnMuYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnkgPSBvcHRpb25zLnJvb3RCb3VuZGFyeSxcbiAgICAgIGFsdEJvdW5kYXJ5ID0gb3B0aW9ucy5hbHRCb3VuZGFyeSxcbiAgICAgIF9vcHRpb25zJGZsaXBWYXJpYXRpbyA9IG9wdGlvbnMuZmxpcFZhcmlhdGlvbnMsXG4gICAgICBmbGlwVmFyaWF0aW9ucyA9IF9vcHRpb25zJGZsaXBWYXJpYXRpbyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJGZsaXBWYXJpYXRpbyxcbiAgICAgIGFsbG93ZWRBdXRvUGxhY2VtZW50cyA9IG9wdGlvbnMuYWxsb3dlZEF1dG9QbGFjZW1lbnRzO1xuICB2YXIgcHJlZmVycmVkUGxhY2VtZW50ID0gc3RhdGUub3B0aW9ucy5wbGFjZW1lbnQ7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChwcmVmZXJyZWRQbGFjZW1lbnQpO1xuICB2YXIgaXNCYXNlUGxhY2VtZW50ID0gYmFzZVBsYWNlbWVudCA9PT0gcHJlZmVycmVkUGxhY2VtZW50O1xuICB2YXIgZmFsbGJhY2tQbGFjZW1lbnRzID0gc3BlY2lmaWVkRmFsbGJhY2tQbGFjZW1lbnRzIHx8IChpc0Jhc2VQbGFjZW1lbnQgfHwgIWZsaXBWYXJpYXRpb25zID8gW2dldE9wcG9zaXRlUGxhY2VtZW50KHByZWZlcnJlZFBsYWNlbWVudCldIDogZ2V0RXhwYW5kZWRGYWxsYmFja1BsYWNlbWVudHMocHJlZmVycmVkUGxhY2VtZW50KSk7XG4gIHZhciBwbGFjZW1lbnRzID0gW3ByZWZlcnJlZFBsYWNlbWVudF0uY29uY2F0KGZhbGxiYWNrUGxhY2VtZW50cykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICAgIHJldHVybiBhY2MuY29uY2F0KGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KSA9PT0gYXV0byA/IGNvbXB1dGVBdXRvUGxhY2VtZW50KHN0YXRlLCB7XG4gICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICAgIGJvdW5kYXJ5OiBib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeTogcm9vdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZzogcGFkZGluZyxcbiAgICAgIGZsaXBWYXJpYXRpb25zOiBmbGlwVmFyaWF0aW9ucyxcbiAgICAgIGFsbG93ZWRBdXRvUGxhY2VtZW50czogYWxsb3dlZEF1dG9QbGFjZW1lbnRzXG4gICAgfSkgOiBwbGFjZW1lbnQpO1xuICB9LCBbXSk7XG4gIHZhciByZWZlcmVuY2VSZWN0ID0gc3RhdGUucmVjdHMucmVmZXJlbmNlO1xuICB2YXIgcG9wcGVyUmVjdCA9IHN0YXRlLnJlY3RzLnBvcHBlcjtcbiAgdmFyIGNoZWNrc01hcCA9IG5ldyBNYXAoKTtcbiAgdmFyIG1ha2VGYWxsYmFja0NoZWNrcyA9IHRydWU7XG4gIHZhciBmaXJzdEZpdHRpbmdQbGFjZW1lbnQgPSBwbGFjZW1lbnRzWzBdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcGxhY2VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBwbGFjZW1lbnQgPSBwbGFjZW1lbnRzW2ldO1xuXG4gICAgdmFyIF9iYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuXG4gICAgdmFyIGlzU3RhcnRWYXJpYXRpb24gPSBnZXRWYXJpYXRpb24ocGxhY2VtZW50KSA9PT0gc3RhcnQ7XG4gICAgdmFyIGlzVmVydGljYWwgPSBbdG9wLCBib3R0b21dLmluZGV4T2YoX2Jhc2VQbGFjZW1lbnQpID49IDA7XG4gICAgdmFyIGxlbiA9IGlzVmVydGljYWwgPyAnd2lkdGgnIDogJ2hlaWdodCc7XG4gICAgdmFyIG92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG4gICAgICBhbHRCb3VuZGFyeTogYWx0Qm91bmRhcnksXG4gICAgICBwYWRkaW5nOiBwYWRkaW5nXG4gICAgfSk7XG4gICAgdmFyIG1haW5WYXJpYXRpb25TaWRlID0gaXNWZXJ0aWNhbCA/IGlzU3RhcnRWYXJpYXRpb24gPyByaWdodCA6IGxlZnQgOiBpc1N0YXJ0VmFyaWF0aW9uID8gYm90dG9tIDogdG9wO1xuXG4gICAgaWYgKHJlZmVyZW5jZVJlY3RbbGVuXSA+IHBvcHBlclJlY3RbbGVuXSkge1xuICAgICAgbWFpblZhcmlhdGlvblNpZGUgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChtYWluVmFyaWF0aW9uU2lkZSk7XG4gICAgfVxuXG4gICAgdmFyIGFsdFZhcmlhdGlvblNpZGUgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChtYWluVmFyaWF0aW9uU2lkZSk7XG4gICAgdmFyIGNoZWNrcyA9IFtdO1xuXG4gICAgaWYgKGNoZWNrTWFpbkF4aXMpIHtcbiAgICAgIGNoZWNrcy5wdXNoKG92ZXJmbG93W19iYXNlUGxhY2VtZW50XSA8PSAwKTtcbiAgICB9XG5cbiAgICBpZiAoY2hlY2tBbHRBeGlzKSB7XG4gICAgICBjaGVja3MucHVzaChvdmVyZmxvd1ttYWluVmFyaWF0aW9uU2lkZV0gPD0gMCwgb3ZlcmZsb3dbYWx0VmFyaWF0aW9uU2lkZV0gPD0gMCk7XG4gICAgfVxuXG4gICAgaWYgKGNoZWNrcy5ldmVyeShmdW5jdGlvbiAoY2hlY2spIHtcbiAgICAgIHJldHVybiBjaGVjaztcbiAgICB9KSkge1xuICAgICAgZmlyc3RGaXR0aW5nUGxhY2VtZW50ID0gcGxhY2VtZW50O1xuICAgICAgbWFrZUZhbGxiYWNrQ2hlY2tzID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjaGVja3NNYXAuc2V0KHBsYWNlbWVudCwgY2hlY2tzKTtcbiAgfVxuXG4gIGlmIChtYWtlRmFsbGJhY2tDaGVja3MpIHtcbiAgICAvLyBgMmAgbWF5IGJlIGRlc2lyZWQgaW4gc29tZSBjYXNlcyDigJMgcmVzZWFyY2ggbGF0ZXJcbiAgICB2YXIgbnVtYmVyT2ZDaGVja3MgPSBmbGlwVmFyaWF0aW9ucyA/IDMgOiAxO1xuXG4gICAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AoX2kpIHtcbiAgICAgIHZhciBmaXR0aW5nUGxhY2VtZW50ID0gcGxhY2VtZW50cy5maW5kKGZ1bmN0aW9uIChwbGFjZW1lbnQpIHtcbiAgICAgICAgdmFyIGNoZWNrcyA9IGNoZWNrc01hcC5nZXQocGxhY2VtZW50KTtcblxuICAgICAgICBpZiAoY2hlY2tzKSB7XG4gICAgICAgICAgcmV0dXJuIGNoZWNrcy5zbGljZSgwLCBfaSkuZXZlcnkoZnVuY3Rpb24gKGNoZWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gY2hlY2s7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZml0dGluZ1BsYWNlbWVudCkge1xuICAgICAgICBmaXJzdEZpdHRpbmdQbGFjZW1lbnQgPSBmaXR0aW5nUGxhY2VtZW50O1xuICAgICAgICByZXR1cm4gXCJicmVha1wiO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmb3IgKHZhciBfaSA9IG51bWJlck9mQ2hlY2tzOyBfaSA+IDA7IF9pLS0pIHtcbiAgICAgIHZhciBfcmV0ID0gX2xvb3AoX2kpO1xuXG4gICAgICBpZiAoX3JldCA9PT0gXCJicmVha1wiKSBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZiAoc3RhdGUucGxhY2VtZW50ICE9PSBmaXJzdEZpdHRpbmdQbGFjZW1lbnQpIHtcbiAgICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdLl9za2lwID0gdHJ1ZTtcbiAgICBzdGF0ZS5wbGFjZW1lbnQgPSBmaXJzdEZpdHRpbmdQbGFjZW1lbnQ7XG4gICAgc3RhdGUucmVzZXQgPSB0cnVlO1xuICB9XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdmbGlwJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgZm46IGZsaXAsXG4gIHJlcXVpcmVzSWZFeGlzdHM6IFsnb2Zmc2V0J10sXG4gIGRhdGE6IHtcbiAgICBfc2tpcDogZmFsc2VcbiAgfVxufTsiLCAiaW1wb3J0IHsgdG9wLCBib3R0b20sIGxlZnQsIHJpZ2h0IH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgZGV0ZWN0T3ZlcmZsb3cgZnJvbSBcIi4uL3V0aWxzL2RldGVjdE92ZXJmbG93LmpzXCI7XG5cbmZ1bmN0aW9uIGdldFNpZGVPZmZzZXRzKG92ZXJmbG93LCByZWN0LCBwcmV2ZW50ZWRPZmZzZXRzKSB7XG4gIGlmIChwcmV2ZW50ZWRPZmZzZXRzID09PSB2b2lkIDApIHtcbiAgICBwcmV2ZW50ZWRPZmZzZXRzID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0b3A6IG92ZXJmbG93LnRvcCAtIHJlY3QuaGVpZ2h0IC0gcHJldmVudGVkT2Zmc2V0cy55LFxuICAgIHJpZ2h0OiBvdmVyZmxvdy5yaWdodCAtIHJlY3Qud2lkdGggKyBwcmV2ZW50ZWRPZmZzZXRzLngsXG4gICAgYm90dG9tOiBvdmVyZmxvdy5ib3R0b20gLSByZWN0LmhlaWdodCArIHByZXZlbnRlZE9mZnNldHMueSxcbiAgICBsZWZ0OiBvdmVyZmxvdy5sZWZ0IC0gcmVjdC53aWR0aCAtIHByZXZlbnRlZE9mZnNldHMueFxuICB9O1xufVxuXG5mdW5jdGlvbiBpc0FueVNpZGVGdWxseUNsaXBwZWQob3ZlcmZsb3cpIHtcbiAgcmV0dXJuIFt0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnRdLnNvbWUoZnVuY3Rpb24gKHNpZGUpIHtcbiAgICByZXR1cm4gb3ZlcmZsb3dbc2lkZV0gPj0gMDtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhpZGUoX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZTtcbiAgdmFyIHJlZmVyZW5jZVJlY3QgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2U7XG4gIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICB2YXIgcHJldmVudGVkT2Zmc2V0cyA9IHN0YXRlLm1vZGlmaWVyc0RhdGEucHJldmVudE92ZXJmbG93O1xuICB2YXIgcmVmZXJlbmNlT3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgIGVsZW1lbnRDb250ZXh0OiAncmVmZXJlbmNlJ1xuICB9KTtcbiAgdmFyIHBvcHBlckFsdE92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICBhbHRCb3VuZGFyeTogdHJ1ZVxuICB9KTtcbiAgdmFyIHJlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0cyA9IGdldFNpZGVPZmZzZXRzKHJlZmVyZW5jZU92ZXJmbG93LCByZWZlcmVuY2VSZWN0KTtcbiAgdmFyIHBvcHBlckVzY2FwZU9mZnNldHMgPSBnZXRTaWRlT2Zmc2V0cyhwb3BwZXJBbHRPdmVyZmxvdywgcG9wcGVyUmVjdCwgcHJldmVudGVkT2Zmc2V0cyk7XG4gIHZhciBpc1JlZmVyZW5jZUhpZGRlbiA9IGlzQW55U2lkZUZ1bGx5Q2xpcHBlZChyZWZlcmVuY2VDbGlwcGluZ09mZnNldHMpO1xuICB2YXIgaGFzUG9wcGVyRXNjYXBlZCA9IGlzQW55U2lkZUZ1bGx5Q2xpcHBlZChwb3BwZXJFc2NhcGVPZmZzZXRzKTtcbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IHtcbiAgICByZWZlcmVuY2VDbGlwcGluZ09mZnNldHM6IHJlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0cyxcbiAgICBwb3BwZXJFc2NhcGVPZmZzZXRzOiBwb3BwZXJFc2NhcGVPZmZzZXRzLFxuICAgIGlzUmVmZXJlbmNlSGlkZGVuOiBpc1JlZmVyZW5jZUhpZGRlbixcbiAgICBoYXNQb3BwZXJFc2NhcGVkOiBoYXNQb3BwZXJFc2NhcGVkXG4gIH07XG4gIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIsIHtcbiAgICAnZGF0YS1wb3BwZXItcmVmZXJlbmNlLWhpZGRlbic6IGlzUmVmZXJlbmNlSGlkZGVuLFxuICAgICdkYXRhLXBvcHBlci1lc2NhcGVkJzogaGFzUG9wcGVyRXNjYXBlZFxuICB9KTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2hpZGUnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICByZXF1aXJlc0lmRXhpc3RzOiBbJ3ByZXZlbnRPdmVyZmxvdyddLFxuICBmbjogaGlkZVxufTsiLCAiaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSBcIi4uL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanNcIjtcbmltcG9ydCB7IHRvcCwgbGVmdCwgcmlnaHQsIHBsYWNlbWVudHMgfSBmcm9tIFwiLi4vZW51bXMuanNcIjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgZnVuY3Rpb24gZGlzdGFuY2VBbmRTa2lkZGluZ1RvWFkocGxhY2VtZW50LCByZWN0cywgb2Zmc2V0KSB7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuICB2YXIgaW52ZXJ0RGlzdGFuY2UgPSBbbGVmdCwgdG9wXS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpID49IDAgPyAtMSA6IDE7XG5cbiAgdmFyIF9yZWYgPSB0eXBlb2Ygb2Zmc2V0ID09PSAnZnVuY3Rpb24nID8gb2Zmc2V0KE9iamVjdC5hc3NpZ24oe30sIHJlY3RzLCB7XG4gICAgcGxhY2VtZW50OiBwbGFjZW1lbnRcbiAgfSkpIDogb2Zmc2V0LFxuICAgICAgc2tpZGRpbmcgPSBfcmVmWzBdLFxuICAgICAgZGlzdGFuY2UgPSBfcmVmWzFdO1xuXG4gIHNraWRkaW5nID0gc2tpZGRpbmcgfHwgMDtcbiAgZGlzdGFuY2UgPSAoZGlzdGFuY2UgfHwgMCkgKiBpbnZlcnREaXN0YW5jZTtcbiAgcmV0dXJuIFtsZWZ0LCByaWdodF0uaW5kZXhPZihiYXNlUGxhY2VtZW50KSA+PSAwID8ge1xuICAgIHg6IGRpc3RhbmNlLFxuICAgIHk6IHNraWRkaW5nXG4gIH0gOiB7XG4gICAgeDogc2tpZGRpbmcsXG4gICAgeTogZGlzdGFuY2VcbiAgfTtcbn1cblxuZnVuY3Rpb24gb2Zmc2V0KF9yZWYyKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYyLnN0YXRlLFxuICAgICAgb3B0aW9ucyA9IF9yZWYyLm9wdGlvbnMsXG4gICAgICBuYW1lID0gX3JlZjIubmFtZTtcbiAgdmFyIF9vcHRpb25zJG9mZnNldCA9IG9wdGlvbnMub2Zmc2V0LFxuICAgICAgb2Zmc2V0ID0gX29wdGlvbnMkb2Zmc2V0ID09PSB2b2lkIDAgPyBbMCwgMF0gOiBfb3B0aW9ucyRvZmZzZXQ7XG4gIHZhciBkYXRhID0gcGxhY2VtZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gICAgYWNjW3BsYWNlbWVudF0gPSBkaXN0YW5jZUFuZFNraWRkaW5nVG9YWShwbGFjZW1lbnQsIHN0YXRlLnJlY3RzLCBvZmZzZXQpO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbiAgdmFyIF9kYXRhJHN0YXRlJHBsYWNlbWVudCA9IGRhdGFbc3RhdGUucGxhY2VtZW50XSxcbiAgICAgIHggPSBfZGF0YSRzdGF0ZSRwbGFjZW1lbnQueCxcbiAgICAgIHkgPSBfZGF0YSRzdGF0ZSRwbGFjZW1lbnQueTtcblxuICBpZiAoc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzICE9IG51bGwpIHtcbiAgICBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMueCArPSB4O1xuICAgIHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cy55ICs9IHk7XG4gIH1cblxuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gZGF0YTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ29mZnNldCcsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIHJlcXVpcmVzOiBbJ3BvcHBlck9mZnNldHMnXSxcbiAgZm46IG9mZnNldFxufTsiLCAiaW1wb3J0IGNvbXB1dGVPZmZzZXRzIGZyb20gXCIuLi91dGlscy9jb21wdXRlT2Zmc2V0cy5qc1wiO1xuXG5mdW5jdGlvbiBwb3BwZXJPZmZzZXRzKF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWU7XG4gIC8vIE9mZnNldHMgYXJlIHRoZSBhY3R1YWwgcG9zaXRpb24gdGhlIHBvcHBlciBuZWVkcyB0byBoYXZlIHRvIGJlXG4gIC8vIHByb3Blcmx5IHBvc2l0aW9uZWQgbmVhciBpdHMgcmVmZXJlbmNlIGVsZW1lbnRcbiAgLy8gVGhpcyBpcyB0aGUgbW9zdCBiYXNpYyBwbGFjZW1lbnQsIGFuZCB3aWxsIGJlIGFkanVzdGVkIGJ5XG4gIC8vIHRoZSBtb2RpZmllcnMgaW4gdGhlIG5leHQgc3RlcFxuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gY29tcHV0ZU9mZnNldHMoe1xuICAgIHJlZmVyZW5jZTogc3RhdGUucmVjdHMucmVmZXJlbmNlLFxuICAgIGVsZW1lbnQ6IHN0YXRlLnJlY3RzLnBvcHBlcixcbiAgICBzdHJhdGVneTogJ2Fic29sdXRlJyxcbiAgICBwbGFjZW1lbnQ6IHN0YXRlLnBsYWNlbWVudFxuICB9KTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ3BvcHBlck9mZnNldHMnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ3JlYWQnLFxuICBmbjogcG9wcGVyT2Zmc2V0cyxcbiAgZGF0YToge31cbn07IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEFsdEF4aXMoYXhpcykge1xuICByZXR1cm4gYXhpcyA9PT0gJ3gnID8gJ3knIDogJ3gnO1xufSIsICJpbXBvcnQgeyB0b3AsIGxlZnQsIHJpZ2h0LCBib3R0b20sIHN0YXJ0IH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7XG5pbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0QmFzZVBsYWNlbWVudC5qc1wiO1xuaW1wb3J0IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudCBmcm9tIFwiLi4vdXRpbHMvZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50LmpzXCI7XG5pbXBvcnQgZ2V0QWx0QXhpcyBmcm9tIFwiLi4vdXRpbHMvZ2V0QWx0QXhpcy5qc1wiO1xuaW1wb3J0IHsgd2l0aGluLCB3aXRoaW5NYXhDbGFtcCB9IGZyb20gXCIuLi91dGlscy93aXRoaW4uanNcIjtcbmltcG9ydCBnZXRMYXlvdXRSZWN0IGZyb20gXCIuLi9kb20tdXRpbHMvZ2V0TGF5b3V0UmVjdC5qc1wiO1xuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tIFwiLi4vZG9tLXV0aWxzL2dldE9mZnNldFBhcmVudC5qc1wiO1xuaW1wb3J0IGRldGVjdE92ZXJmbG93IGZyb20gXCIuLi91dGlscy9kZXRlY3RPdmVyZmxvdy5qc1wiO1xuaW1wb3J0IGdldFZhcmlhdGlvbiBmcm9tIFwiLi4vdXRpbHMvZ2V0VmFyaWF0aW9uLmpzXCI7XG5pbXBvcnQgZ2V0RnJlc2hTaWRlT2JqZWN0IGZyb20gXCIuLi91dGlscy9nZXRGcmVzaFNpZGVPYmplY3QuanNcIjtcbmltcG9ydCB7IG1pbiBhcyBtYXRoTWluLCBtYXggYXMgbWF0aE1heCB9IGZyb20gXCIuLi91dGlscy9tYXRoLmpzXCI7XG5cbmZ1bmN0aW9uIHByZXZlbnRPdmVyZmxvdyhfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZTtcbiAgdmFyIF9vcHRpb25zJG1haW5BeGlzID0gb3B0aW9ucy5tYWluQXhpcyxcbiAgICAgIGNoZWNrTWFpbkF4aXMgPSBfb3B0aW9ucyRtYWluQXhpcyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJG1haW5BeGlzLFxuICAgICAgX29wdGlvbnMkYWx0QXhpcyA9IG9wdGlvbnMuYWx0QXhpcyxcbiAgICAgIGNoZWNrQWx0QXhpcyA9IF9vcHRpb25zJGFsdEF4aXMgPT09IHZvaWQgMCA/IGZhbHNlIDogX29wdGlvbnMkYWx0QXhpcyxcbiAgICAgIGJvdW5kYXJ5ID0gb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeSA9IG9wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgYWx0Qm91bmRhcnkgPSBvcHRpb25zLmFsdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZyA9IG9wdGlvbnMucGFkZGluZyxcbiAgICAgIF9vcHRpb25zJHRldGhlciA9IG9wdGlvbnMudGV0aGVyLFxuICAgICAgdGV0aGVyID0gX29wdGlvbnMkdGV0aGVyID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkdGV0aGVyLFxuICAgICAgX29wdGlvbnMkdGV0aGVyT2Zmc2V0ID0gb3B0aW9ucy50ZXRoZXJPZmZzZXQsXG4gICAgICB0ZXRoZXJPZmZzZXQgPSBfb3B0aW9ucyR0ZXRoZXJPZmZzZXQgPT09IHZvaWQgMCA/IDAgOiBfb3B0aW9ucyR0ZXRoZXJPZmZzZXQ7XG4gIHZhciBvdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgIHJvb3RCb3VuZGFyeTogcm9vdEJvdW5kYXJ5LFxuICAgIHBhZGRpbmc6IHBhZGRpbmcsXG4gICAgYWx0Qm91bmRhcnk6IGFsdEJvdW5kYXJ5XG4gIH0pO1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQoc3RhdGUucGxhY2VtZW50KTtcbiAgdmFyIHZhcmlhdGlvbiA9IGdldFZhcmlhdGlvbihzdGF0ZS5wbGFjZW1lbnQpO1xuICB2YXIgaXNCYXNlUGxhY2VtZW50ID0gIXZhcmlhdGlvbjtcbiAgdmFyIG1haW5BeGlzID0gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KGJhc2VQbGFjZW1lbnQpO1xuICB2YXIgYWx0QXhpcyA9IGdldEFsdEF4aXMobWFpbkF4aXMpO1xuICB2YXIgcG9wcGVyT2Zmc2V0cyA9IHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cztcbiAgdmFyIHJlZmVyZW5jZVJlY3QgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2U7XG4gIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICB2YXIgdGV0aGVyT2Zmc2V0VmFsdWUgPSB0eXBlb2YgdGV0aGVyT2Zmc2V0ID09PSAnZnVuY3Rpb24nID8gdGV0aGVyT2Zmc2V0KE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnJlY3RzLCB7XG4gICAgcGxhY2VtZW50OiBzdGF0ZS5wbGFjZW1lbnRcbiAgfSkpIDogdGV0aGVyT2Zmc2V0O1xuICB2YXIgbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlID0gdHlwZW9mIHRldGhlck9mZnNldFZhbHVlID09PSAnbnVtYmVyJyA/IHtcbiAgICBtYWluQXhpczogdGV0aGVyT2Zmc2V0VmFsdWUsXG4gICAgYWx0QXhpczogdGV0aGVyT2Zmc2V0VmFsdWVcbiAgfSA6IE9iamVjdC5hc3NpZ24oe1xuICAgIG1haW5BeGlzOiAwLFxuICAgIGFsdEF4aXM6IDBcbiAgfSwgdGV0aGVyT2Zmc2V0VmFsdWUpO1xuICB2YXIgb2Zmc2V0TW9kaWZpZXJTdGF0ZSA9IHN0YXRlLm1vZGlmaWVyc0RhdGEub2Zmc2V0ID8gc3RhdGUubW9kaWZpZXJzRGF0YS5vZmZzZXRbc3RhdGUucGxhY2VtZW50XSA6IG51bGw7XG4gIHZhciBkYXRhID0ge1xuICAgIHg6IDAsXG4gICAgeTogMFxuICB9O1xuXG4gIGlmICghcG9wcGVyT2Zmc2V0cykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChjaGVja01haW5BeGlzKSB7XG4gICAgdmFyIF9vZmZzZXRNb2RpZmllclN0YXRlJDtcblxuICAgIHZhciBtYWluU2lkZSA9IG1haW5BeGlzID09PSAneScgPyB0b3AgOiBsZWZ0O1xuICAgIHZhciBhbHRTaWRlID0gbWFpbkF4aXMgPT09ICd5JyA/IGJvdHRvbSA6IHJpZ2h0O1xuICAgIHZhciBsZW4gPSBtYWluQXhpcyA9PT0gJ3knID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuICAgIHZhciBvZmZzZXQgPSBwb3BwZXJPZmZzZXRzW21haW5BeGlzXTtcbiAgICB2YXIgbWluID0gb2Zmc2V0ICsgb3ZlcmZsb3dbbWFpblNpZGVdO1xuICAgIHZhciBtYXggPSBvZmZzZXQgLSBvdmVyZmxvd1thbHRTaWRlXTtcbiAgICB2YXIgYWRkaXRpdmUgPSB0ZXRoZXIgPyAtcG9wcGVyUmVjdFtsZW5dIC8gMiA6IDA7XG4gICAgdmFyIG1pbkxlbiA9IHZhcmlhdGlvbiA9PT0gc3RhcnQgPyByZWZlcmVuY2VSZWN0W2xlbl0gOiBwb3BwZXJSZWN0W2xlbl07XG4gICAgdmFyIG1heExlbiA9IHZhcmlhdGlvbiA9PT0gc3RhcnQgPyAtcG9wcGVyUmVjdFtsZW5dIDogLXJlZmVyZW5jZVJlY3RbbGVuXTsgLy8gV2UgbmVlZCB0byBpbmNsdWRlIHRoZSBhcnJvdyBpbiB0aGUgY2FsY3VsYXRpb24gc28gdGhlIGFycm93IGRvZXNuJ3QgZ29cbiAgICAvLyBvdXRzaWRlIHRoZSByZWZlcmVuY2UgYm91bmRzXG5cbiAgICB2YXIgYXJyb3dFbGVtZW50ID0gc3RhdGUuZWxlbWVudHMuYXJyb3c7XG4gICAgdmFyIGFycm93UmVjdCA9IHRldGhlciAmJiBhcnJvd0VsZW1lbnQgPyBnZXRMYXlvdXRSZWN0KGFycm93RWxlbWVudCkgOiB7XG4gICAgICB3aWR0aDogMCxcbiAgICAgIGhlaWdodDogMFxuICAgIH07XG4gICAgdmFyIGFycm93UGFkZGluZ09iamVjdCA9IHN0YXRlLm1vZGlmaWVyc0RhdGFbJ2Fycm93I3BlcnNpc3RlbnQnXSA/IHN0YXRlLm1vZGlmaWVyc0RhdGFbJ2Fycm93I3BlcnNpc3RlbnQnXS5wYWRkaW5nIDogZ2V0RnJlc2hTaWRlT2JqZWN0KCk7XG4gICAgdmFyIGFycm93UGFkZGluZ01pbiA9IGFycm93UGFkZGluZ09iamVjdFttYWluU2lkZV07XG4gICAgdmFyIGFycm93UGFkZGluZ01heCA9IGFycm93UGFkZGluZ09iamVjdFthbHRTaWRlXTsgLy8gSWYgdGhlIHJlZmVyZW5jZSBsZW5ndGggaXMgc21hbGxlciB0aGFuIHRoZSBhcnJvdyBsZW5ndGgsIHdlIGRvbid0IHdhbnRcbiAgICAvLyB0byBpbmNsdWRlIGl0cyBmdWxsIHNpemUgaW4gdGhlIGNhbGN1bGF0aW9uLiBJZiB0aGUgcmVmZXJlbmNlIGlzIHNtYWxsXG4gICAgLy8gYW5kIG5lYXIgdGhlIGVkZ2Ugb2YgYSBib3VuZGFyeSwgdGhlIHBvcHBlciBjYW4gb3ZlcmZsb3cgZXZlbiBpZiB0aGVcbiAgICAvLyByZWZlcmVuY2UgaXMgbm90IG92ZXJmbG93aW5nIGFzIHdlbGwgKGUuZy4gdmlydHVhbCBlbGVtZW50cyB3aXRoIG5vXG4gICAgLy8gd2lkdGggb3IgaGVpZ2h0KVxuXG4gICAgdmFyIGFycm93TGVuID0gd2l0aGluKDAsIHJlZmVyZW5jZVJlY3RbbGVuXSwgYXJyb3dSZWN0W2xlbl0pO1xuICAgIHZhciBtaW5PZmZzZXQgPSBpc0Jhc2VQbGFjZW1lbnQgPyByZWZlcmVuY2VSZWN0W2xlbl0gLyAyIC0gYWRkaXRpdmUgLSBhcnJvd0xlbiAtIGFycm93UGFkZGluZ01pbiAtIG5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZS5tYWluQXhpcyA6IG1pbkxlbiAtIGFycm93TGVuIC0gYXJyb3dQYWRkaW5nTWluIC0gbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlLm1haW5BeGlzO1xuICAgIHZhciBtYXhPZmZzZXQgPSBpc0Jhc2VQbGFjZW1lbnQgPyAtcmVmZXJlbmNlUmVjdFtsZW5dIC8gMiArIGFkZGl0aXZlICsgYXJyb3dMZW4gKyBhcnJvd1BhZGRpbmdNYXggKyBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUubWFpbkF4aXMgOiBtYXhMZW4gKyBhcnJvd0xlbiArIGFycm93UGFkZGluZ01heCArIG5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZS5tYWluQXhpcztcbiAgICB2YXIgYXJyb3dPZmZzZXRQYXJlbnQgPSBzdGF0ZS5lbGVtZW50cy5hcnJvdyAmJiBnZXRPZmZzZXRQYXJlbnQoc3RhdGUuZWxlbWVudHMuYXJyb3cpO1xuICAgIHZhciBjbGllbnRPZmZzZXQgPSBhcnJvd09mZnNldFBhcmVudCA/IG1haW5BeGlzID09PSAneScgPyBhcnJvd09mZnNldFBhcmVudC5jbGllbnRUb3AgfHwgMCA6IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudExlZnQgfHwgMCA6IDA7XG4gICAgdmFyIG9mZnNldE1vZGlmaWVyVmFsdWUgPSAoX29mZnNldE1vZGlmaWVyU3RhdGUkID0gb2Zmc2V0TW9kaWZpZXJTdGF0ZSA9PSBudWxsID8gdm9pZCAwIDogb2Zmc2V0TW9kaWZpZXJTdGF0ZVttYWluQXhpc10pICE9IG51bGwgPyBfb2Zmc2V0TW9kaWZpZXJTdGF0ZSQgOiAwO1xuICAgIHZhciB0ZXRoZXJNaW4gPSBvZmZzZXQgKyBtaW5PZmZzZXQgLSBvZmZzZXRNb2RpZmllclZhbHVlIC0gY2xpZW50T2Zmc2V0O1xuICAgIHZhciB0ZXRoZXJNYXggPSBvZmZzZXQgKyBtYXhPZmZzZXQgLSBvZmZzZXRNb2RpZmllclZhbHVlO1xuICAgIHZhciBwcmV2ZW50ZWRPZmZzZXQgPSB3aXRoaW4odGV0aGVyID8gbWF0aE1pbihtaW4sIHRldGhlck1pbikgOiBtaW4sIG9mZnNldCwgdGV0aGVyID8gbWF0aE1heChtYXgsIHRldGhlck1heCkgOiBtYXgpO1xuICAgIHBvcHBlck9mZnNldHNbbWFpbkF4aXNdID0gcHJldmVudGVkT2Zmc2V0O1xuICAgIGRhdGFbbWFpbkF4aXNdID0gcHJldmVudGVkT2Zmc2V0IC0gb2Zmc2V0O1xuICB9XG5cbiAgaWYgKGNoZWNrQWx0QXhpcykge1xuICAgIHZhciBfb2Zmc2V0TW9kaWZpZXJTdGF0ZSQyO1xuXG4gICAgdmFyIF9tYWluU2lkZSA9IG1haW5BeGlzID09PSAneCcgPyB0b3AgOiBsZWZ0O1xuXG4gICAgdmFyIF9hbHRTaWRlID0gbWFpbkF4aXMgPT09ICd4JyA/IGJvdHRvbSA6IHJpZ2h0O1xuXG4gICAgdmFyIF9vZmZzZXQgPSBwb3BwZXJPZmZzZXRzW2FsdEF4aXNdO1xuXG4gICAgdmFyIF9sZW4gPSBhbHRBeGlzID09PSAneScgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG5cbiAgICB2YXIgX21pbiA9IF9vZmZzZXQgKyBvdmVyZmxvd1tfbWFpblNpZGVdO1xuXG4gICAgdmFyIF9tYXggPSBfb2Zmc2V0IC0gb3ZlcmZsb3dbX2FsdFNpZGVdO1xuXG4gICAgdmFyIGlzT3JpZ2luU2lkZSA9IFt0b3AsIGxlZnRdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgIT09IC0xO1xuXG4gICAgdmFyIF9vZmZzZXRNb2RpZmllclZhbHVlID0gKF9vZmZzZXRNb2RpZmllclN0YXRlJDIgPSBvZmZzZXRNb2RpZmllclN0YXRlID09IG51bGwgPyB2b2lkIDAgOiBvZmZzZXRNb2RpZmllclN0YXRlW2FsdEF4aXNdKSAhPSBudWxsID8gX29mZnNldE1vZGlmaWVyU3RhdGUkMiA6IDA7XG5cbiAgICB2YXIgX3RldGhlck1pbiA9IGlzT3JpZ2luU2lkZSA/IF9taW4gOiBfb2Zmc2V0IC0gcmVmZXJlbmNlUmVjdFtfbGVuXSAtIHBvcHBlclJlY3RbX2xlbl0gLSBfb2Zmc2V0TW9kaWZpZXJWYWx1ZSArIG5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZS5hbHRBeGlzO1xuXG4gICAgdmFyIF90ZXRoZXJNYXggPSBpc09yaWdpblNpZGUgPyBfb2Zmc2V0ICsgcmVmZXJlbmNlUmVjdFtfbGVuXSArIHBvcHBlclJlY3RbX2xlbl0gLSBfb2Zmc2V0TW9kaWZpZXJWYWx1ZSAtIG5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZS5hbHRBeGlzIDogX21heDtcblxuICAgIHZhciBfcHJldmVudGVkT2Zmc2V0ID0gdGV0aGVyICYmIGlzT3JpZ2luU2lkZSA/IHdpdGhpbk1heENsYW1wKF90ZXRoZXJNaW4sIF9vZmZzZXQsIF90ZXRoZXJNYXgpIDogd2l0aGluKHRldGhlciA/IF90ZXRoZXJNaW4gOiBfbWluLCBfb2Zmc2V0LCB0ZXRoZXIgPyBfdGV0aGVyTWF4IDogX21heCk7XG5cbiAgICBwb3BwZXJPZmZzZXRzW2FsdEF4aXNdID0gX3ByZXZlbnRlZE9mZnNldDtcbiAgICBkYXRhW2FsdEF4aXNdID0gX3ByZXZlbnRlZE9mZnNldCAtIF9vZmZzZXQ7XG4gIH1cblxuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gZGF0YTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ3ByZXZlbnRPdmVyZmxvdycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIGZuOiBwcmV2ZW50T3ZlcmZsb3csXG4gIHJlcXVpcmVzSWZFeGlzdHM6IFsnb2Zmc2V0J11cbn07IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEhUTUxFbGVtZW50U2Nyb2xsKGVsZW1lbnQpIHtcbiAgcmV0dXJuIHtcbiAgICBzY3JvbGxMZWZ0OiBlbGVtZW50LnNjcm9sbExlZnQsXG4gICAgc2Nyb2xsVG9wOiBlbGVtZW50LnNjcm9sbFRvcFxuICB9O1xufSIsICJpbXBvcnQgZ2V0V2luZG93U2Nyb2xsIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbC5qc1wiO1xuaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9nZXRXaW5kb3cuanNcIjtcbmltcG9ydCB7IGlzSFRNTEVsZW1lbnQgfSBmcm9tIFwiLi9pbnN0YW5jZU9mLmpzXCI7XG5pbXBvcnQgZ2V0SFRNTEVsZW1lbnRTY3JvbGwgZnJvbSBcIi4vZ2V0SFRNTEVsZW1lbnRTY3JvbGwuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE5vZGVTY3JvbGwobm9kZSkge1xuICBpZiAobm9kZSA9PT0gZ2V0V2luZG93KG5vZGUpIHx8ICFpc0hUTUxFbGVtZW50KG5vZGUpKSB7XG4gICAgcmV0dXJuIGdldFdpbmRvd1Njcm9sbChub2RlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZ2V0SFRNTEVsZW1lbnRTY3JvbGwobm9kZSk7XG4gIH1cbn0iLCAiaW1wb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmcm9tIFwiLi9nZXRCb3VuZGluZ0NsaWVudFJlY3QuanNcIjtcbmltcG9ydCBnZXROb2RlU2Nyb2xsIGZyb20gXCIuL2dldE5vZGVTY3JvbGwuanNcIjtcbmltcG9ydCBnZXROb2RlTmFtZSBmcm9tIFwiLi9nZXROb2RlTmFtZS5qc1wiO1xuaW1wb3J0IHsgaXNIVE1MRWxlbWVudCB9IGZyb20gXCIuL2luc3RhbmNlT2YuanNcIjtcbmltcG9ydCBnZXRXaW5kb3dTY3JvbGxCYXJYIGZyb20gXCIuL2dldFdpbmRvd1Njcm9sbEJhclguanNcIjtcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRFbGVtZW50LmpzXCI7XG5pbXBvcnQgaXNTY3JvbGxQYXJlbnQgZnJvbSBcIi4vaXNTY3JvbGxQYXJlbnQuanNcIjtcbmltcG9ydCB7IHJvdW5kIH0gZnJvbSBcIi4uL3V0aWxzL21hdGguanNcIjtcblxuZnVuY3Rpb24gaXNFbGVtZW50U2NhbGVkKGVsZW1lbnQpIHtcbiAgdmFyIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB2YXIgc2NhbGVYID0gcm91bmQocmVjdC53aWR0aCkgLyBlbGVtZW50Lm9mZnNldFdpZHRoIHx8IDE7XG4gIHZhciBzY2FsZVkgPSByb3VuZChyZWN0LmhlaWdodCkgLyBlbGVtZW50Lm9mZnNldEhlaWdodCB8fCAxO1xuICByZXR1cm4gc2NhbGVYICE9PSAxIHx8IHNjYWxlWSAhPT0gMTtcbn0gLy8gUmV0dXJucyB0aGUgY29tcG9zaXRlIHJlY3Qgb2YgYW4gZWxlbWVudCByZWxhdGl2ZSB0byBpdHMgb2Zmc2V0UGFyZW50LlxuLy8gQ29tcG9zaXRlIG1lYW5zIGl0IHRha2VzIGludG8gYWNjb3VudCB0cmFuc2Zvcm1zIGFzIHdlbGwgYXMgbGF5b3V0LlxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldENvbXBvc2l0ZVJlY3QoZWxlbWVudE9yVmlydHVhbEVsZW1lbnQsIG9mZnNldFBhcmVudCwgaXNGaXhlZCkge1xuICBpZiAoaXNGaXhlZCA9PT0gdm9pZCAwKSB7XG4gICAgaXNGaXhlZCA9IGZhbHNlO1xuICB9XG5cbiAgdmFyIGlzT2Zmc2V0UGFyZW50QW5FbGVtZW50ID0gaXNIVE1MRWxlbWVudChvZmZzZXRQYXJlbnQpO1xuICB2YXIgb2Zmc2V0UGFyZW50SXNTY2FsZWQgPSBpc0hUTUxFbGVtZW50KG9mZnNldFBhcmVudCkgJiYgaXNFbGVtZW50U2NhbGVkKG9mZnNldFBhcmVudCk7XG4gIHZhciBkb2N1bWVudEVsZW1lbnQgPSBnZXREb2N1bWVudEVsZW1lbnQob2Zmc2V0UGFyZW50KTtcbiAgdmFyIHJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudE9yVmlydHVhbEVsZW1lbnQsIG9mZnNldFBhcmVudElzU2NhbGVkLCBpc0ZpeGVkKTtcbiAgdmFyIHNjcm9sbCA9IHtcbiAgICBzY3JvbGxMZWZ0OiAwLFxuICAgIHNjcm9sbFRvcDogMFxuICB9O1xuICB2YXIgb2Zmc2V0cyA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDBcbiAgfTtcblxuICBpZiAoaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgfHwgIWlzT2Zmc2V0UGFyZW50QW5FbGVtZW50ICYmICFpc0ZpeGVkKSB7XG4gICAgaWYgKGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgIT09ICdib2R5JyB8fCAvLyBodHRwczovL2dpdGh1Yi5jb20vcG9wcGVyanMvcG9wcGVyLWNvcmUvaXNzdWVzLzEwNzhcbiAgICBpc1Njcm9sbFBhcmVudChkb2N1bWVudEVsZW1lbnQpKSB7XG4gICAgICBzY3JvbGwgPSBnZXROb2RlU2Nyb2xsKG9mZnNldFBhcmVudCk7XG4gICAgfVxuXG4gICAgaWYgKGlzSFRNTEVsZW1lbnQob2Zmc2V0UGFyZW50KSkge1xuICAgICAgb2Zmc2V0cyA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChvZmZzZXRQYXJlbnQsIHRydWUpO1xuICAgICAgb2Zmc2V0cy54ICs9IG9mZnNldFBhcmVudC5jbGllbnRMZWZ0O1xuICAgICAgb2Zmc2V0cy55ICs9IG9mZnNldFBhcmVudC5jbGllbnRUb3A7XG4gICAgfSBlbHNlIGlmIChkb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIG9mZnNldHMueCA9IGdldFdpbmRvd1Njcm9sbEJhclgoZG9jdW1lbnRFbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHg6IHJlY3QubGVmdCArIHNjcm9sbC5zY3JvbGxMZWZ0IC0gb2Zmc2V0cy54LFxuICAgIHk6IHJlY3QudG9wICsgc2Nyb2xsLnNjcm9sbFRvcCAtIG9mZnNldHMueSxcbiAgICB3aWR0aDogcmVjdC53aWR0aCxcbiAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0XG4gIH07XG59IiwgImltcG9ydCB7IG1vZGlmaWVyUGhhc2VzIH0gZnJvbSBcIi4uL2VudW1zLmpzXCI7IC8vIHNvdXJjZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDk4NzUyNTVcblxuZnVuY3Rpb24gb3JkZXIobW9kaWZpZXJzKSB7XG4gIHZhciBtYXAgPSBuZXcgTWFwKCk7XG4gIHZhciB2aXNpdGVkID0gbmV3IFNldCgpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIG1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgIG1hcC5zZXQobW9kaWZpZXIubmFtZSwgbW9kaWZpZXIpO1xuICB9KTsgLy8gT24gdmlzaXRpbmcgb2JqZWN0LCBjaGVjayBmb3IgaXRzIGRlcGVuZGVuY2llcyBhbmQgdmlzaXQgdGhlbSByZWN1cnNpdmVseVxuXG4gIGZ1bmN0aW9uIHNvcnQobW9kaWZpZXIpIHtcbiAgICB2aXNpdGVkLmFkZChtb2RpZmllci5uYW1lKTtcbiAgICB2YXIgcmVxdWlyZXMgPSBbXS5jb25jYXQobW9kaWZpZXIucmVxdWlyZXMgfHwgW10sIG1vZGlmaWVyLnJlcXVpcmVzSWZFeGlzdHMgfHwgW10pO1xuICAgIHJlcXVpcmVzLmZvckVhY2goZnVuY3Rpb24gKGRlcCkge1xuICAgICAgaWYgKCF2aXNpdGVkLmhhcyhkZXApKSB7XG4gICAgICAgIHZhciBkZXBNb2RpZmllciA9IG1hcC5nZXQoZGVwKTtcblxuICAgICAgICBpZiAoZGVwTW9kaWZpZXIpIHtcbiAgICAgICAgICBzb3J0KGRlcE1vZGlmaWVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJlc3VsdC5wdXNoKG1vZGlmaWVyKTtcbiAgfVxuXG4gIG1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgIGlmICghdmlzaXRlZC5oYXMobW9kaWZpZXIubmFtZSkpIHtcbiAgICAgIC8vIGNoZWNrIGZvciB2aXNpdGVkIG9iamVjdFxuICAgICAgc29ydChtb2RpZmllcik7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb3JkZXJNb2RpZmllcnMobW9kaWZpZXJzKSB7XG4gIC8vIG9yZGVyIGJhc2VkIG9uIGRlcGVuZGVuY2llc1xuICB2YXIgb3JkZXJlZE1vZGlmaWVycyA9IG9yZGVyKG1vZGlmaWVycyk7IC8vIG9yZGVyIGJhc2VkIG9uIHBoYXNlXG5cbiAgcmV0dXJuIG1vZGlmaWVyUGhhc2VzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwaGFzZSkge1xuICAgIHJldHVybiBhY2MuY29uY2F0KG9yZGVyZWRNb2RpZmllcnMuZmlsdGVyKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgICAgcmV0dXJuIG1vZGlmaWVyLnBoYXNlID09PSBwaGFzZTtcbiAgICB9KSk7XG4gIH0sIFtdKTtcbn0iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVib3VuY2UoZm4pIHtcbiAgdmFyIHBlbmRpbmc7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFwZW5kaW5nKSB7XG4gICAgICBwZW5kaW5nID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcGVuZGluZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICByZXNvbHZlKGZuKCkpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBwZW5kaW5nO1xuICB9O1xufSIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZXJnZUJ5TmFtZShtb2RpZmllcnMpIHtcbiAgdmFyIG1lcmdlZCA9IG1vZGlmaWVycy5yZWR1Y2UoZnVuY3Rpb24gKG1lcmdlZCwgY3VycmVudCkge1xuICAgIHZhciBleGlzdGluZyA9IG1lcmdlZFtjdXJyZW50Lm5hbWVdO1xuICAgIG1lcmdlZFtjdXJyZW50Lm5hbWVdID0gZXhpc3RpbmcgPyBPYmplY3QuYXNzaWduKHt9LCBleGlzdGluZywgY3VycmVudCwge1xuICAgICAgb3B0aW9uczogT2JqZWN0LmFzc2lnbih7fSwgZXhpc3Rpbmcub3B0aW9ucywgY3VycmVudC5vcHRpb25zKSxcbiAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24oe30sIGV4aXN0aW5nLmRhdGEsIGN1cnJlbnQuZGF0YSlcbiAgICB9KSA6IGN1cnJlbnQ7XG4gICAgcmV0dXJuIG1lcmdlZDtcbiAgfSwge30pOyAvLyBJRTExIGRvZXMgbm90IHN1cHBvcnQgT2JqZWN0LnZhbHVlc1xuXG4gIHJldHVybiBPYmplY3Qua2V5cyhtZXJnZWQpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIG1lcmdlZFtrZXldO1xuICB9KTtcbn0iLCAiaW1wb3J0IGdldENvbXBvc2l0ZVJlY3QgZnJvbSBcIi4vZG9tLXV0aWxzL2dldENvbXBvc2l0ZVJlY3QuanNcIjtcbmltcG9ydCBnZXRMYXlvdXRSZWN0IGZyb20gXCIuL2RvbS11dGlscy9nZXRMYXlvdXRSZWN0LmpzXCI7XG5pbXBvcnQgbGlzdFNjcm9sbFBhcmVudHMgZnJvbSBcIi4vZG9tLXV0aWxzL2xpc3RTY3JvbGxQYXJlbnRzLmpzXCI7XG5pbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gXCIuL2RvbS11dGlscy9nZXRPZmZzZXRQYXJlbnQuanNcIjtcbmltcG9ydCBvcmRlck1vZGlmaWVycyBmcm9tIFwiLi91dGlscy9vcmRlck1vZGlmaWVycy5qc1wiO1xuaW1wb3J0IGRlYm91bmNlIGZyb20gXCIuL3V0aWxzL2RlYm91bmNlLmpzXCI7XG5pbXBvcnQgbWVyZ2VCeU5hbWUgZnJvbSBcIi4vdXRpbHMvbWVyZ2VCeU5hbWUuanNcIjtcbmltcG9ydCBkZXRlY3RPdmVyZmxvdyBmcm9tIFwiLi91dGlscy9kZXRlY3RPdmVyZmxvdy5qc1wiO1xuaW1wb3J0IHsgaXNFbGVtZW50IH0gZnJvbSBcIi4vZG9tLXV0aWxzL2luc3RhbmNlT2YuanNcIjtcbnZhciBERUZBVUxUX09QVElPTlMgPSB7XG4gIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gIG1vZGlmaWVyczogW10sXG4gIHN0cmF0ZWd5OiAnYWJzb2x1dGUnXG59O1xuXG5mdW5jdGlvbiBhcmVWYWxpZEVsZW1lbnRzKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuICFhcmdzLnNvbWUoZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gIShlbGVtZW50ICYmIHR5cGVvZiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCA9PT0gJ2Z1bmN0aW9uJyk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9wcGVyR2VuZXJhdG9yKGdlbmVyYXRvck9wdGlvbnMpIHtcbiAgaWYgKGdlbmVyYXRvck9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIGdlbmVyYXRvck9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHZhciBfZ2VuZXJhdG9yT3B0aW9ucyA9IGdlbmVyYXRvck9wdGlvbnMsXG4gICAgICBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYgPSBfZ2VuZXJhdG9yT3B0aW9ucy5kZWZhdWx0TW9kaWZpZXJzLFxuICAgICAgZGVmYXVsdE1vZGlmaWVycyA9IF9nZW5lcmF0b3JPcHRpb25zJGRlZiA9PT0gdm9pZCAwID8gW10gOiBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYsXG4gICAgICBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyID0gX2dlbmVyYXRvck9wdGlvbnMuZGVmYXVsdE9wdGlvbnMsXG4gICAgICBkZWZhdWx0T3B0aW9ucyA9IF9nZW5lcmF0b3JPcHRpb25zJGRlZjIgPT09IHZvaWQgMCA/IERFRkFVTFRfT1BUSU9OUyA6IF9nZW5lcmF0b3JPcHRpb25zJGRlZjI7XG4gIHJldHVybiBmdW5jdGlvbiBjcmVhdGVQb3BwZXIocmVmZXJlbmNlLCBwb3BwZXIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0gZGVmYXVsdE9wdGlvbnM7XG4gICAgfVxuXG4gICAgdmFyIHN0YXRlID0ge1xuICAgICAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgICAgIG9yZGVyZWRNb2RpZmllcnM6IFtdLFxuICAgICAgb3B0aW9uczogT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9PUFRJT05TLCBkZWZhdWx0T3B0aW9ucyksXG4gICAgICBtb2RpZmllcnNEYXRhOiB7fSxcbiAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgIHJlZmVyZW5jZTogcmVmZXJlbmNlLFxuICAgICAgICBwb3BwZXI6IHBvcHBlclxuICAgICAgfSxcbiAgICAgIGF0dHJpYnV0ZXM6IHt9LFxuICAgICAgc3R5bGVzOiB7fVxuICAgIH07XG4gICAgdmFyIGVmZmVjdENsZWFudXBGbnMgPSBbXTtcbiAgICB2YXIgaXNEZXN0cm95ZWQgPSBmYWxzZTtcbiAgICB2YXIgaW5zdGFuY2UgPSB7XG4gICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICBzZXRPcHRpb25zOiBmdW5jdGlvbiBzZXRPcHRpb25zKHNldE9wdGlvbnNBY3Rpb24pIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2V0T3B0aW9uc0FjdGlvbiA9PT0gJ2Z1bmN0aW9uJyA/IHNldE9wdGlvbnNBY3Rpb24oc3RhdGUub3B0aW9ucykgOiBzZXRPcHRpb25zQWN0aW9uO1xuICAgICAgICBjbGVhbnVwTW9kaWZpZXJFZmZlY3RzKCk7XG4gICAgICAgIHN0YXRlLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgc3RhdGUub3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgIHN0YXRlLnNjcm9sbFBhcmVudHMgPSB7XG4gICAgICAgICAgcmVmZXJlbmNlOiBpc0VsZW1lbnQocmVmZXJlbmNlKSA/IGxpc3RTY3JvbGxQYXJlbnRzKHJlZmVyZW5jZSkgOiByZWZlcmVuY2UuY29udGV4dEVsZW1lbnQgPyBsaXN0U2Nyb2xsUGFyZW50cyhyZWZlcmVuY2UuY29udGV4dEVsZW1lbnQpIDogW10sXG4gICAgICAgICAgcG9wcGVyOiBsaXN0U2Nyb2xsUGFyZW50cyhwb3BwZXIpXG4gICAgICAgIH07IC8vIE9yZGVycyB0aGUgbW9kaWZpZXJzIGJhc2VkIG9uIHRoZWlyIGRlcGVuZGVuY2llcyBhbmQgYHBoYXNlYFxuICAgICAgICAvLyBwcm9wZXJ0aWVzXG5cbiAgICAgICAgdmFyIG9yZGVyZWRNb2RpZmllcnMgPSBvcmRlck1vZGlmaWVycyhtZXJnZUJ5TmFtZShbXS5jb25jYXQoZGVmYXVsdE1vZGlmaWVycywgc3RhdGUub3B0aW9ucy5tb2RpZmllcnMpKSk7IC8vIFN0cmlwIG91dCBkaXNhYmxlZCBtb2RpZmllcnNcblxuICAgICAgICBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzID0gb3JkZXJlZE1vZGlmaWVycy5maWx0ZXIoZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICByZXR1cm4gbS5lbmFibGVkO1xuICAgICAgICB9KTtcbiAgICAgICAgcnVuTW9kaWZpZXJFZmZlY3RzKCk7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZS51cGRhdGUoKTtcbiAgICAgIH0sXG4gICAgICAvLyBTeW5jIHVwZGF0ZSDigJMgaXQgd2lsbCBhbHdheXMgYmUgZXhlY3V0ZWQsIGV2ZW4gaWYgbm90IG5lY2Vzc2FyeS4gVGhpc1xuICAgICAgLy8gaXMgdXNlZnVsIGZvciBsb3cgZnJlcXVlbmN5IHVwZGF0ZXMgd2hlcmUgc3luYyBiZWhhdmlvciBzaW1wbGlmaWVzIHRoZVxuICAgICAgLy8gbG9naWMuXG4gICAgICAvLyBGb3IgaGlnaCBmcmVxdWVuY3kgdXBkYXRlcyAoZS5nLiBgcmVzaXplYCBhbmQgYHNjcm9sbGAgZXZlbnRzKSwgYWx3YXlzXG4gICAgICAvLyBwcmVmZXIgdGhlIGFzeW5jIFBvcHBlciN1cGRhdGUgbWV0aG9kXG4gICAgICBmb3JjZVVwZGF0ZTogZnVuY3Rpb24gZm9yY2VVcGRhdGUoKSB7XG4gICAgICAgIGlmIChpc0Rlc3Ryb3llZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBfc3RhdGUkZWxlbWVudHMgPSBzdGF0ZS5lbGVtZW50cyxcbiAgICAgICAgICAgIHJlZmVyZW5jZSA9IF9zdGF0ZSRlbGVtZW50cy5yZWZlcmVuY2UsXG4gICAgICAgICAgICBwb3BwZXIgPSBfc3RhdGUkZWxlbWVudHMucG9wcGVyOyAvLyBEb24ndCBwcm9jZWVkIGlmIGByZWZlcmVuY2VgIG9yIGBwb3BwZXJgIGFyZSBub3QgdmFsaWQgZWxlbWVudHNcbiAgICAgICAgLy8gYW55bW9yZVxuXG4gICAgICAgIGlmICghYXJlVmFsaWRFbGVtZW50cyhyZWZlcmVuY2UsIHBvcHBlcikpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gLy8gU3RvcmUgdGhlIHJlZmVyZW5jZSBhbmQgcG9wcGVyIHJlY3RzIHRvIGJlIHJlYWQgYnkgbW9kaWZpZXJzXG5cblxuICAgICAgICBzdGF0ZS5yZWN0cyA9IHtcbiAgICAgICAgICByZWZlcmVuY2U6IGdldENvbXBvc2l0ZVJlY3QocmVmZXJlbmNlLCBnZXRPZmZzZXRQYXJlbnQocG9wcGVyKSwgc3RhdGUub3B0aW9ucy5zdHJhdGVneSA9PT0gJ2ZpeGVkJyksXG4gICAgICAgICAgcG9wcGVyOiBnZXRMYXlvdXRSZWN0KHBvcHBlcilcbiAgICAgICAgfTsgLy8gTW9kaWZpZXJzIGhhdmUgdGhlIGFiaWxpdHkgdG8gcmVzZXQgdGhlIGN1cnJlbnQgdXBkYXRlIGN5Y2xlLiBUaGVcbiAgICAgICAgLy8gbW9zdCBjb21tb24gdXNlIGNhc2UgZm9yIHRoaXMgaXMgdGhlIGBmbGlwYCBtb2RpZmllciBjaGFuZ2luZyB0aGVcbiAgICAgICAgLy8gcGxhY2VtZW50LCB3aGljaCB0aGVuIG5lZWRzIHRvIHJlLXJ1biBhbGwgdGhlIG1vZGlmaWVycywgYmVjYXVzZSB0aGVcbiAgICAgICAgLy8gbG9naWMgd2FzIHByZXZpb3VzbHkgcmFuIGZvciB0aGUgcHJldmlvdXMgcGxhY2VtZW50IGFuZCBpcyB0aGVyZWZvcmVcbiAgICAgICAgLy8gc3RhbGUvaW5jb3JyZWN0XG5cbiAgICAgICAgc3RhdGUucmVzZXQgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUucGxhY2VtZW50ID0gc3RhdGUub3B0aW9ucy5wbGFjZW1lbnQ7IC8vIE9uIGVhY2ggdXBkYXRlIGN5Y2xlLCB0aGUgYG1vZGlmaWVyc0RhdGFgIHByb3BlcnR5IGZvciBlYWNoIG1vZGlmaWVyXG4gICAgICAgIC8vIGlzIGZpbGxlZCB3aXRoIHRoZSBpbml0aWFsIGRhdGEgc3BlY2lmaWVkIGJ5IHRoZSBtb2RpZmllci4gVGhpcyBtZWFuc1xuICAgICAgICAvLyBpdCBkb2Vzbid0IHBlcnNpc3QgYW5kIGlzIGZyZXNoIG9uIGVhY2ggdXBkYXRlLlxuICAgICAgICAvLyBUbyBlbnN1cmUgcGVyc2lzdGVudCBkYXRhLCB1c2UgYCR7bmFtZX0jcGVyc2lzdGVudGBcblxuICAgICAgICBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgICAgICAgcmV0dXJuIHN0YXRlLm1vZGlmaWVyc0RhdGFbbW9kaWZpZXIubmFtZV0gPSBPYmplY3QuYXNzaWduKHt9LCBtb2RpZmllci5kYXRhKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHN0YXRlLm9yZGVyZWRNb2RpZmllcnMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgaWYgKHN0YXRlLnJlc2V0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBzdGF0ZS5yZXNldCA9IGZhbHNlO1xuICAgICAgICAgICAgaW5kZXggPSAtMTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBfc3RhdGUkb3JkZXJlZE1vZGlmaWUgPSBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzW2luZGV4XSxcbiAgICAgICAgICAgICAgZm4gPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUuZm4sXG4gICAgICAgICAgICAgIF9zdGF0ZSRvcmRlcmVkTW9kaWZpZTIgPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUub3B0aW9ucyxcbiAgICAgICAgICAgICAgX29wdGlvbnMgPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUyID09PSB2b2lkIDAgPyB7fSA6IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZTIsXG4gICAgICAgICAgICAgIG5hbWUgPSBfc3RhdGUkb3JkZXJlZE1vZGlmaWUubmFtZTtcblxuICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHN0YXRlID0gZm4oe1xuICAgICAgICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgICAgICAgIG9wdGlvbnM6IF9vcHRpb25zLFxuICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICBpbnN0YW5jZTogaW5zdGFuY2VcbiAgICAgICAgICAgIH0pIHx8IHN0YXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIEFzeW5jIGFuZCBvcHRpbWlzdGljYWxseSBvcHRpbWl6ZWQgdXBkYXRlIOKAkyBpdCB3aWxsIG5vdCBiZSBleGVjdXRlZCBpZlxuICAgICAgLy8gbm90IG5lY2Vzc2FyeSAoZGVib3VuY2VkIHRvIHJ1biBhdCBtb3N0IG9uY2UtcGVyLXRpY2spXG4gICAgICB1cGRhdGU6IGRlYm91bmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgaW5zdGFuY2UuZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgICByZXNvbHZlKHN0YXRlKTtcbiAgICAgICAgfSk7XG4gICAgICB9KSxcbiAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgIGNsZWFudXBNb2RpZmllckVmZmVjdHMoKTtcbiAgICAgICAgaXNEZXN0cm95ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoIWFyZVZhbGlkRWxlbWVudHMocmVmZXJlbmNlLCBwb3BwZXIpKSB7XG4gICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgaW5zdGFuY2Uuc2V0T3B0aW9ucyhvcHRpb25zKS50aGVuKGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgaWYgKCFpc0Rlc3Ryb3llZCAmJiBvcHRpb25zLm9uRmlyc3RVcGRhdGUpIHtcbiAgICAgICAgb3B0aW9ucy5vbkZpcnN0VXBkYXRlKHN0YXRlKTtcbiAgICAgIH1cbiAgICB9KTsgLy8gTW9kaWZpZXJzIGhhdmUgdGhlIGFiaWxpdHkgdG8gZXhlY3V0ZSBhcmJpdHJhcnkgY29kZSBiZWZvcmUgdGhlIGZpcnN0XG4gICAgLy8gdXBkYXRlIGN5Y2xlIHJ1bnMuIFRoZXkgd2lsbCBiZSBleGVjdXRlZCBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgdXBkYXRlXG4gICAgLy8gY3ljbGUuIFRoaXMgaXMgdXNlZnVsIHdoZW4gYSBtb2RpZmllciBhZGRzIHNvbWUgcGVyc2lzdGVudCBkYXRhIHRoYXRcbiAgICAvLyBvdGhlciBtb2RpZmllcnMgbmVlZCB0byB1c2UsIGJ1dCB0aGUgbW9kaWZpZXIgaXMgcnVuIGFmdGVyIHRoZSBkZXBlbmRlbnRcbiAgICAvLyBvbmUuXG5cbiAgICBmdW5jdGlvbiBydW5Nb2RpZmllckVmZmVjdHMoKSB7XG4gICAgICBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgdmFyIG5hbWUgPSBfcmVmLm5hbWUsXG4gICAgICAgICAgICBfcmVmJG9wdGlvbnMgPSBfcmVmLm9wdGlvbnMsXG4gICAgICAgICAgICBvcHRpb25zID0gX3JlZiRvcHRpb25zID09PSB2b2lkIDAgPyB7fSA6IF9yZWYkb3B0aW9ucyxcbiAgICAgICAgICAgIGVmZmVjdCA9IF9yZWYuZWZmZWN0O1xuXG4gICAgICAgIGlmICh0eXBlb2YgZWZmZWN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdmFyIGNsZWFudXBGbiA9IGVmZmVjdCh7XG4gICAgICAgICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgaW5zdGFuY2U6IGluc3RhbmNlLFxuICAgICAgICAgICAgb3B0aW9uczogb3B0aW9uc1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdmFyIG5vb3BGbiA9IGZ1bmN0aW9uIG5vb3BGbigpIHt9O1xuXG4gICAgICAgICAgZWZmZWN0Q2xlYW51cEZucy5wdXNoKGNsZWFudXBGbiB8fCBub29wRm4pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhbnVwTW9kaWZpZXJFZmZlY3RzKCkge1xuICAgICAgZWZmZWN0Q2xlYW51cEZucy5mb3JFYWNoKGZ1bmN0aW9uIChmbikge1xuICAgICAgICByZXR1cm4gZm4oKTtcbiAgICAgIH0pO1xuICAgICAgZWZmZWN0Q2xlYW51cEZucyA9IFtdO1xuICAgIH1cblxuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfTtcbn1cbmV4cG9ydCB2YXIgY3JlYXRlUG9wcGVyID0gLyojX19QVVJFX18qL3BvcHBlckdlbmVyYXRvcigpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmV4cG9ydCB7IGRldGVjdE92ZXJmbG93IH07IiwgImltcG9ydCB7IHBvcHBlckdlbmVyYXRvciwgZGV0ZWN0T3ZlcmZsb3cgfSBmcm9tIFwiLi9jcmVhdGVQb3BwZXIuanNcIjtcbmltcG9ydCBldmVudExpc3RlbmVycyBmcm9tIFwiLi9tb2RpZmllcnMvZXZlbnRMaXN0ZW5lcnMuanNcIjtcbmltcG9ydCBwb3BwZXJPZmZzZXRzIGZyb20gXCIuL21vZGlmaWVycy9wb3BwZXJPZmZzZXRzLmpzXCI7XG5pbXBvcnQgY29tcHV0ZVN0eWxlcyBmcm9tIFwiLi9tb2RpZmllcnMvY29tcHV0ZVN0eWxlcy5qc1wiO1xuaW1wb3J0IGFwcGx5U3R5bGVzIGZyb20gXCIuL21vZGlmaWVycy9hcHBseVN0eWxlcy5qc1wiO1xuaW1wb3J0IG9mZnNldCBmcm9tIFwiLi9tb2RpZmllcnMvb2Zmc2V0LmpzXCI7XG5pbXBvcnQgZmxpcCBmcm9tIFwiLi9tb2RpZmllcnMvZmxpcC5qc1wiO1xuaW1wb3J0IHByZXZlbnRPdmVyZmxvdyBmcm9tIFwiLi9tb2RpZmllcnMvcHJldmVudE92ZXJmbG93LmpzXCI7XG5pbXBvcnQgYXJyb3cgZnJvbSBcIi4vbW9kaWZpZXJzL2Fycm93LmpzXCI7XG5pbXBvcnQgaGlkZSBmcm9tIFwiLi9tb2RpZmllcnMvaGlkZS5qc1wiO1xudmFyIGRlZmF1bHRNb2RpZmllcnMgPSBbZXZlbnRMaXN0ZW5lcnMsIHBvcHBlck9mZnNldHMsIGNvbXB1dGVTdHlsZXMsIGFwcGx5U3R5bGVzLCBvZmZzZXQsIGZsaXAsIHByZXZlbnRPdmVyZmxvdywgYXJyb3csIGhpZGVdO1xudmFyIGNyZWF0ZVBvcHBlciA9IC8qI19fUFVSRV9fKi9wb3BwZXJHZW5lcmF0b3Ioe1xuICBkZWZhdWx0TW9kaWZpZXJzOiBkZWZhdWx0TW9kaWZpZXJzXG59KTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgeyBjcmVhdGVQb3BwZXIsIHBvcHBlckdlbmVyYXRvciwgZGVmYXVsdE1vZGlmaWVycywgZGV0ZWN0T3ZlcmZsb3cgfTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5leHBvcnQgeyBjcmVhdGVQb3BwZXIgYXMgY3JlYXRlUG9wcGVyTGl0ZSB9IGZyb20gXCIuL3BvcHBlci1saXRlLmpzXCI7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0ICogZnJvbSBcIi4vbW9kaWZpZXJzL2luZGV4LmpzXCI7IiwgImV4cG9ydCBjb25zdCBST1VORF9BUlJPVyA9XG4gICc8c3ZnIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCI2XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMCA2czEuNzk2LS4wMTMgNC42Ny0zLjYxNUM1Ljg1MS45IDYuOTMuMDA2IDggMGMxLjA3LS4wMDYgMi4xNDguODg3IDMuMzQzIDIuMzg1QzE0LjIzMyA2LjAwNSAxNiA2IDE2IDZIMHpcIj48L3N2Zz4nO1xuXG5leHBvcnQgY29uc3QgQk9YX0NMQVNTID0gYF9fTkFNRVNQQUNFX1BSRUZJWF9fLWJveGA7XG5leHBvcnQgY29uc3QgQ09OVEVOVF9DTEFTUyA9IGBfX05BTUVTUEFDRV9QUkVGSVhfXy1jb250ZW50YDtcbmV4cG9ydCBjb25zdCBCQUNLRFJPUF9DTEFTUyA9IGBfX05BTUVTUEFDRV9QUkVGSVhfXy1iYWNrZHJvcGA7XG5leHBvcnQgY29uc3QgQVJST1dfQ0xBU1MgPSBgX19OQU1FU1BBQ0VfUFJFRklYX18tYXJyb3dgO1xuZXhwb3J0IGNvbnN0IFNWR19BUlJPV19DTEFTUyA9IGBfX05BTUVTUEFDRV9QUkVGSVhfXy1zdmctYXJyb3dgO1xuXG5leHBvcnQgY29uc3QgVE9VQ0hfT1BUSU9OUyA9IHtwYXNzaXZlOiB0cnVlLCBjYXB0dXJlOiB0cnVlfTtcblxuZXhwb3J0IGNvbnN0IFRJUFBZX0RFRkFVTFRfQVBQRU5EX1RPID0gKCkgPT4gZG9jdW1lbnQuYm9keTtcbiIsICJpbXBvcnQge0Jhc2VQbGFjZW1lbnQsIFBsYWNlbWVudH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNPd25Qcm9wZXJ0eShcbiAgb2JqOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPixcbiAga2V5OiBzdHJpbmdcbik6IGJvb2xlYW4ge1xuICByZXR1cm4ge30uaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRWYWx1ZUF0SW5kZXhPclJldHVybjxUPihcbiAgdmFsdWU6IFQgfCBbVCB8IG51bGwsIFQgfCBudWxsXSxcbiAgaW5kZXg6IG51bWJlcixcbiAgZGVmYXVsdFZhbHVlOiBUIHwgW1QsIFRdXG4pOiBUIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgY29uc3QgdiA9IHZhbHVlW2luZGV4XTtcbiAgICByZXR1cm4gdiA9PSBudWxsXG4gICAgICA/IEFycmF5LmlzQXJyYXkoZGVmYXVsdFZhbHVlKVxuICAgICAgICA/IGRlZmF1bHRWYWx1ZVtpbmRleF1cbiAgICAgICAgOiBkZWZhdWx0VmFsdWVcbiAgICAgIDogdjtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVHlwZSh2YWx1ZTogYW55LCB0eXBlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgY29uc3Qgc3RyID0ge30udG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIHJldHVybiBzdHIuaW5kZXhPZignW29iamVjdCcpID09PSAwICYmIHN0ci5pbmRleE9mKGAke3R5cGV9XWApID4gLTE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZva2VXaXRoQXJnc09yUmV0dXJuKHZhbHVlOiBhbnksIGFyZ3M6IGFueVtdKTogYW55IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyA/IHZhbHVlKC4uLmFyZ3MpIDogdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWJvdW5jZTxUPihcbiAgZm46IChhcmc6IFQpID0+IHZvaWQsXG4gIG1zOiBudW1iZXJcbik6IChhcmc6IFQpID0+IHZvaWQge1xuICAvLyBBdm9pZCB3cmFwcGluZyBpbiBgc2V0VGltZW91dGAgaWYgbXMgaXMgMCBhbnl3YXlcbiAgaWYgKG1zID09PSAwKSB7XG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgbGV0IHRpbWVvdXQ6IGFueTtcblxuICByZXR1cm4gKGFyZyk6IHZvaWQgPT4ge1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBmbihhcmcpO1xuICAgIH0sIG1zKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVByb3BlcnRpZXM8VD4ob2JqOiBULCBrZXlzOiBzdHJpbmdbXSk6IFBhcnRpYWw8VD4ge1xuICBjb25zdCBjbG9uZSA9IHsuLi5vYmp9O1xuICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGRlbGV0ZSAoY2xvbmUgYXMgYW55KVtrZXldO1xuICB9KTtcbiAgcmV0dXJuIGNsb25lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3BsaXRCeVNwYWNlcyh2YWx1ZTogc3RyaW5nKTogc3RyaW5nW10ge1xuICByZXR1cm4gdmFsdWUuc3BsaXQoL1xccysvKS5maWx0ZXIoQm9vbGVhbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVUb0FycmF5PFQ+KHZhbHVlOiBUIHwgVFtdKTogVFtdIHtcbiAgcmV0dXJuIChbXSBhcyBUW10pLmNvbmNhdCh2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwdXNoSWZVbmlxdWU8VD4oYXJyOiBUW10sIHZhbHVlOiBUKTogdm9pZCB7XG4gIGlmIChhcnIuaW5kZXhPZih2YWx1ZSkgPT09IC0xKSB7XG4gICAgYXJyLnB1c2godmFsdWUpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRQeElmTnVtYmVyKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmcge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyA/IGAke3ZhbHVlfXB4YCA6IHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5pcXVlPFQ+KGFycjogVFtdKTogVFtdIHtcbiAgcmV0dXJuIGFyci5maWx0ZXIoKGl0ZW0sIGluZGV4KSA9PiBhcnIuaW5kZXhPZihpdGVtKSA9PT0gaW5kZXgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TnVtYmVyKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyA/IHZhbHVlIDogcGFyc2VGbG9hdCh2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudDogUGxhY2VtZW50KTogQmFzZVBsYWNlbWVudCB7XG4gIHJldHVybiBwbGFjZW1lbnQuc3BsaXQoJy0nKVswXSBhcyBCYXNlUGxhY2VtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlGcm9tKHZhbHVlOiBBcnJheUxpa2U8YW55Pik6IGFueVtdIHtcbiAgcmV0dXJuIFtdLnNsaWNlLmNhbGwodmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVW5kZWZpbmVkUHJvcHMoXG4gIG9iajogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbik6IFBhcnRpYWw8UmVjb3JkPHN0cmluZywgdW5rbm93bj4+IHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgIGlmIChvYmpba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAoYWNjIGFzIGFueSlba2V5XSA9IG9ialtrZXldO1xuICAgIH1cblxuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbn1cbiIsICJpbXBvcnQge1JlZmVyZW5jZUVsZW1lbnQsIFRhcmdldHN9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHtQb3BwZXJUcmVlRGF0YX0gZnJvbSAnLi90eXBlcy1pbnRlcm5hbCc7XG5pbXBvcnQge2FycmF5RnJvbSwgaXNUeXBlLCBub3JtYWxpemVUb0FycmF5LCBnZXRCYXNlUGxhY2VtZW50fSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGRpdigpOiBIVE1MRGl2RWxlbWVudCB7XG4gIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRWxlbWVudCh2YWx1ZTogdW5rbm93bik6IHZhbHVlIGlzIEVsZW1lbnQgfCBEb2N1bWVudEZyYWdtZW50IHtcbiAgcmV0dXJuIFsnRWxlbWVudCcsICdGcmFnbWVudCddLnNvbWUoKHR5cGUpID0+IGlzVHlwZSh2YWx1ZSwgdHlwZSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOb2RlTGlzdCh2YWx1ZTogdW5rbm93bik6IHZhbHVlIGlzIE5vZGVMaXN0IHtcbiAgcmV0dXJuIGlzVHlwZSh2YWx1ZSwgJ05vZGVMaXN0Jyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc01vdXNlRXZlbnQodmFsdWU6IHVua25vd24pOiB2YWx1ZSBpcyBNb3VzZUV2ZW50IHtcbiAgcmV0dXJuIGlzVHlwZSh2YWx1ZSwgJ01vdXNlRXZlbnQnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVmZXJlbmNlRWxlbWVudCh2YWx1ZTogYW55KTogdmFsdWUgaXMgUmVmZXJlbmNlRWxlbWVudCB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZS5fdGlwcHkgJiYgdmFsdWUuX3RpcHB5LnJlZmVyZW5jZSA9PT0gdmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXJyYXlPZkVsZW1lbnRzKHZhbHVlOiBUYXJnZXRzKTogRWxlbWVudFtdIHtcbiAgaWYgKGlzRWxlbWVudCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gW3ZhbHVlXTtcbiAgfVxuXG4gIGlmIChpc05vZGVMaXN0KHZhbHVlKSkge1xuICAgIHJldHVybiBhcnJheUZyb20odmFsdWUpO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIGFycmF5RnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHZhbHVlKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRUcmFuc2l0aW9uRHVyYXRpb24oXG4gIGVsczogKEhUTUxEaXZFbGVtZW50IHwgbnVsbClbXSxcbiAgdmFsdWU6IG51bWJlclxuKTogdm9pZCB7XG4gIGVscy5mb3JFYWNoKChlbCkgPT4ge1xuICAgIGlmIChlbCkge1xuICAgICAgZWwuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gYCR7dmFsdWV9bXNgO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRWaXNpYmlsaXR5U3RhdGUoXG4gIGVsczogKEhUTUxEaXZFbGVtZW50IHwgbnVsbClbXSxcbiAgc3RhdGU6ICd2aXNpYmxlJyB8ICdoaWRkZW4nXG4pOiB2b2lkIHtcbiAgZWxzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgaWYgKGVsKSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhdGUnLCBzdGF0ZSk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE93bmVyRG9jdW1lbnQoXG4gIGVsZW1lbnRPckVsZW1lbnRzOiBFbGVtZW50IHwgRWxlbWVudFtdXG4pOiBEb2N1bWVudCB7XG4gIGNvbnN0IFtlbGVtZW50XSA9IG5vcm1hbGl6ZVRvQXJyYXkoZWxlbWVudE9yRWxlbWVudHMpO1xuXG4gIC8vIEVsZW1lbnRzIGNyZWF0ZWQgdmlhIGEgPHRlbXBsYXRlPiBoYXZlIGFuIG93bmVyRG9jdW1lbnQgd2l0aCBubyByZWZlcmVuY2UgdG8gdGhlIGJvZHlcbiAgcmV0dXJuIGVsZW1lbnQ/Lm93bmVyRG9jdW1lbnQ/LmJvZHkgPyBlbGVtZW50Lm93bmVyRG9jdW1lbnQgOiBkb2N1bWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQ3Vyc29yT3V0c2lkZUludGVyYWN0aXZlQm9yZGVyKFxuICBwb3BwZXJUcmVlRGF0YTogUG9wcGVyVHJlZURhdGFbXSxcbiAgZXZlbnQ6IE1vdXNlRXZlbnRcbik6IGJvb2xlYW4ge1xuICBjb25zdCB7Y2xpZW50WCwgY2xpZW50WX0gPSBldmVudDtcblxuICByZXR1cm4gcG9wcGVyVHJlZURhdGEuZXZlcnkoKHtwb3BwZXJSZWN0LCBwb3BwZXJTdGF0ZSwgcHJvcHN9KSA9PiB7XG4gICAgY29uc3Qge2ludGVyYWN0aXZlQm9yZGVyfSA9IHByb3BzO1xuICAgIGNvbnN0IGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHBvcHBlclN0YXRlLnBsYWNlbWVudCk7XG4gICAgY29uc3Qgb2Zmc2V0RGF0YSA9IHBvcHBlclN0YXRlLm1vZGlmaWVyc0RhdGEub2Zmc2V0O1xuXG4gICAgaWYgKCFvZmZzZXREYXRhKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCB0b3BEaXN0YW5jZSA9IGJhc2VQbGFjZW1lbnQgPT09ICdib3R0b20nID8gb2Zmc2V0RGF0YS50b3AhLnkgOiAwO1xuICAgIGNvbnN0IGJvdHRvbURpc3RhbmNlID0gYmFzZVBsYWNlbWVudCA9PT0gJ3RvcCcgPyBvZmZzZXREYXRhLmJvdHRvbSEueSA6IDA7XG4gICAgY29uc3QgbGVmdERpc3RhbmNlID0gYmFzZVBsYWNlbWVudCA9PT0gJ3JpZ2h0JyA/IG9mZnNldERhdGEubGVmdCEueCA6IDA7XG4gICAgY29uc3QgcmlnaHREaXN0YW5jZSA9IGJhc2VQbGFjZW1lbnQgPT09ICdsZWZ0JyA/IG9mZnNldERhdGEucmlnaHQhLnggOiAwO1xuXG4gICAgY29uc3QgZXhjZWVkc1RvcCA9XG4gICAgICBwb3BwZXJSZWN0LnRvcCAtIGNsaWVudFkgKyB0b3BEaXN0YW5jZSA+IGludGVyYWN0aXZlQm9yZGVyO1xuICAgIGNvbnN0IGV4Y2VlZHNCb3R0b20gPVxuICAgICAgY2xpZW50WSAtIHBvcHBlclJlY3QuYm90dG9tIC0gYm90dG9tRGlzdGFuY2UgPiBpbnRlcmFjdGl2ZUJvcmRlcjtcbiAgICBjb25zdCBleGNlZWRzTGVmdCA9XG4gICAgICBwb3BwZXJSZWN0LmxlZnQgLSBjbGllbnRYICsgbGVmdERpc3RhbmNlID4gaW50ZXJhY3RpdmVCb3JkZXI7XG4gICAgY29uc3QgZXhjZWVkc1JpZ2h0ID1cbiAgICAgIGNsaWVudFggLSBwb3BwZXJSZWN0LnJpZ2h0IC0gcmlnaHREaXN0YW5jZSA+IGludGVyYWN0aXZlQm9yZGVyO1xuXG4gICAgcmV0dXJuIGV4Y2VlZHNUb3AgfHwgZXhjZWVkc0JvdHRvbSB8fCBleGNlZWRzTGVmdCB8fCBleGNlZWRzUmlnaHQ7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVHJhbnNpdGlvbkVuZExpc3RlbmVyKFxuICBib3g6IEhUTUxEaXZFbGVtZW50LFxuICBhY3Rpb246ICdhZGQnIHwgJ3JlbW92ZScsXG4gIGxpc3RlbmVyOiAoZXZlbnQ6IFRyYW5zaXRpb25FdmVudCkgPT4gdm9pZFxuKTogdm9pZCB7XG4gIGNvbnN0IG1ldGhvZCA9IGAke2FjdGlvbn1FdmVudExpc3RlbmVyYCBhc1xuICAgIHwgJ2FkZEV2ZW50TGlzdGVuZXInXG4gICAgfCAncmVtb3ZlRXZlbnRMaXN0ZW5lcic7XG5cbiAgLy8gc29tZSBicm93c2VycyBhcHBhcmVudGx5IHN1cHBvcnQgYHRyYW5zaXRpb25gICh1bnByZWZpeGVkKSBidXQgb25seSBmaXJlXG4gIC8vIGB3ZWJraXRUcmFuc2l0aW9uRW5kYC4uLlxuICBbJ3RyYW5zaXRpb25lbmQnLCAnd2Via2l0VHJhbnNpdGlvbkVuZCddLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gICAgYm94W21ldGhvZF0oZXZlbnQsIGxpc3RlbmVyIGFzIEV2ZW50TGlzdGVuZXIpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBDb21wYXJlZCB0byB4eHguY29udGFpbnMsIHRoaXMgZnVuY3Rpb24gd29ya3MgZm9yIGRvbSBzdHJ1Y3R1cmVzIHdpdGggc2hhZG93XG4gKiBkb21cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFjdHVhbENvbnRhaW5zKHBhcmVudDogRWxlbWVudCwgY2hpbGQ6IEVsZW1lbnQpOiBib29sZWFuIHtcbiAgbGV0IHRhcmdldCA9IGNoaWxkO1xuICB3aGlsZSAodGFyZ2V0KSB7XG4gICAgaWYgKHBhcmVudC5jb250YWlucyh0YXJnZXQpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgdGFyZ2V0ID0gKHRhcmdldC5nZXRSb290Tm9kZT8uKCkgYXMgYW55KT8uaG9zdDtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG4iLCAiaW1wb3J0IHtUT1VDSF9PUFRJT05TfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQge2lzUmVmZXJlbmNlRWxlbWVudH0gZnJvbSAnLi9kb20tdXRpbHMnO1xuXG5leHBvcnQgY29uc3QgY3VycmVudElucHV0ID0ge2lzVG91Y2g6IGZhbHNlfTtcbmxldCBsYXN0TW91c2VNb3ZlVGltZSA9IDA7XG5cbi8qKlxuICogV2hlbiBhIGB0b3VjaHN0YXJ0YCBldmVudCBpcyBmaXJlZCwgaXQncyBhc3N1bWVkIHRoZSB1c2VyIGlzIHVzaW5nIHRvdWNoXG4gKiBpbnB1dC4gV2UnbGwgYmluZCBhIGBtb3VzZW1vdmVgIGV2ZW50IGxpc3RlbmVyIHRvIGxpc3RlbiBmb3IgbW91c2UgaW5wdXQgaW5cbiAqIHRoZSBmdXR1cmUuIFRoaXMgd2F5LCB0aGUgYGlzVG91Y2hgIHByb3BlcnR5IGlzIGZ1bGx5IGR5bmFtaWMgYW5kIHdpbGwgaGFuZGxlXG4gKiBoeWJyaWQgZGV2aWNlcyB0aGF0IHVzZSBhIG1peCBvZiB0b3VjaCArIG1vdXNlIGlucHV0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gb25Eb2N1bWVudFRvdWNoU3RhcnQoKTogdm9pZCB7XG4gIGlmIChjdXJyZW50SW5wdXQuaXNUb3VjaCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGN1cnJlbnRJbnB1dC5pc1RvdWNoID0gdHJ1ZTtcblxuICBpZiAod2luZG93LnBlcmZvcm1hbmNlKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Eb2N1bWVudE1vdXNlTW92ZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBXaGVuIHR3byBgbW91c2Vtb3ZlYCBldmVudCBhcmUgZmlyZWQgY29uc2VjdXRpdmVseSB3aXRoaW4gMjBtcywgaXQncyBhc3N1bWVkXG4gKiB0aGUgdXNlciBpcyB1c2luZyBtb3VzZSBpbnB1dCBhZ2Fpbi4gYG1vdXNlbW92ZWAgY2FuIGZpcmUgb24gdG91Y2ggZGV2aWNlcyBhc1xuICogd2VsbCwgYnV0IHZlcnkgcmFyZWx5IHRoYXQgcXVpY2tseS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9uRG9jdW1lbnRNb3VzZU1vdmUoKTogdm9pZCB7XG4gIGNvbnN0IG5vdyA9IHBlcmZvcm1hbmNlLm5vdygpO1xuXG4gIGlmIChub3cgLSBsYXN0TW91c2VNb3ZlVGltZSA8IDIwKSB7XG4gICAgY3VycmVudElucHV0LmlzVG91Y2ggPSBmYWxzZTtcblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uRG9jdW1lbnRNb3VzZU1vdmUpO1xuICB9XG5cbiAgbGFzdE1vdXNlTW92ZVRpbWUgPSBub3c7XG59XG5cbi8qKlxuICogV2hlbiBhbiBlbGVtZW50IGlzIGluIGZvY3VzIGFuZCBoYXMgYSB0aXBweSwgbGVhdmluZyB0aGUgdGFiL3dpbmRvdyBhbmRcbiAqIHJldHVybmluZyBjYXVzZXMgaXQgdG8gc2hvdyBhZ2Fpbi4gRm9yIG1vdXNlIHVzZXJzIHRoaXMgaXMgdW5leHBlY3RlZCwgYnV0XG4gKiBmb3Iga2V5Ym9hcmQgdXNlIGl0IG1ha2VzIHNlbnNlLlxuICogVE9ETzogZmluZCBhIGJldHRlciB0ZWNobmlxdWUgdG8gc29sdmUgdGhpcyBwcm9ibGVtXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvbldpbmRvd0JsdXIoKTogdm9pZCB7XG4gIGNvbnN0IGFjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50IHwgbnVsbDtcblxuICBpZiAoaXNSZWZlcmVuY2VFbGVtZW50KGFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBhY3RpdmVFbGVtZW50Ll90aXBweSE7XG5cbiAgICBpZiAoYWN0aXZlRWxlbWVudC5ibHVyICYmICFpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGUpIHtcbiAgICAgIGFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBiaW5kR2xvYmFsRXZlbnRMaXN0ZW5lcnMoKTogdm9pZCB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBvbkRvY3VtZW50VG91Y2hTdGFydCwgVE9VQ0hfT1BUSU9OUyk7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgb25XaW5kb3dCbHVyKTtcbn1cbiIsICJleHBvcnQgY29uc3QgaXNCcm93c2VyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJztcblxuZXhwb3J0IGNvbnN0IGlzSUUxMSA9IGlzQnJvd3NlclxuICA/IC8vIEB0cy1pZ25vcmVcbiAgICAhIXdpbmRvdy5tc0NyeXB0b1xuICA6IGZhbHNlO1xuIiwgImltcG9ydCB7VGFyZ2V0c30gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNZW1vcnlMZWFrV2FybmluZyhtZXRob2Q6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IHR4dCA9IG1ldGhvZCA9PT0gJ2Rlc3Ryb3knID8gJ24gYWxyZWFkeS0nIDogJyAnO1xuXG4gIHJldHVybiBbXG4gICAgYCR7bWV0aG9kfSgpIHdhcyBjYWxsZWQgb24gYSR7dHh0fWRlc3Ryb3llZCBpbnN0YW5jZS4gVGhpcyBpcyBhIG5vLW9wIGJ1dGAsXG4gICAgJ2luZGljYXRlcyBhIHBvdGVudGlhbCBtZW1vcnkgbGVhay4nLFxuICBdLmpvaW4oJyAnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFuKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBzcGFjZXNBbmRUYWJzID0gL1sgXFx0XXsyLH0vZztcbiAgY29uc3QgbGluZVN0YXJ0V2l0aFNwYWNlcyA9IC9eWyBcXHRdKi9nbTtcblxuICByZXR1cm4gdmFsdWVcbiAgICAucmVwbGFjZShzcGFjZXNBbmRUYWJzLCAnICcpXG4gICAgLnJlcGxhY2UobGluZVN0YXJ0V2l0aFNwYWNlcywgJycpXG4gICAgLnRyaW0oKTtcbn1cblxuZnVuY3Rpb24gZ2V0RGV2TWVzc2FnZShtZXNzYWdlOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gY2xlYW4oYFxuICAlY3RpcHB5LmpzXG5cbiAgJWMke2NsZWFuKG1lc3NhZ2UpfVxuXG4gICVj8J+Rt+KAjSBUaGlzIGlzIGEgZGV2ZWxvcG1lbnQtb25seSBtZXNzYWdlLiBJdCB3aWxsIGJlIHJlbW92ZWQgaW4gcHJvZHVjdGlvbi5cbiAgYCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGb3JtYXR0ZWRNZXNzYWdlKG1lc3NhZ2U6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgcmV0dXJuIFtcbiAgICBnZXREZXZNZXNzYWdlKG1lc3NhZ2UpLFxuICAgIC8vIHRpdGxlXG4gICAgJ2NvbG9yOiAjMDBDNTg0OyBmb250LXNpemU6IDEuM2VtOyBmb250LXdlaWdodDogYm9sZDsnLFxuICAgIC8vIG1lc3NhZ2VcbiAgICAnbGluZS1oZWlnaHQ6IDEuNScsXG4gICAgLy8gZm9vdGVyXG4gICAgJ2NvbG9yOiAjYTZhMDk1OycsXG4gIF07XG59XG5cbi8vIEFzc3VtZSB3YXJuaW5ncyBhbmQgZXJyb3JzIG5ldmVyIGhhdmUgdGhlIHNhbWUgbWVzc2FnZVxubGV0IHZpc2l0ZWRNZXNzYWdlczogU2V0PHN0cmluZz47XG5pZiAoX19ERVZfXykge1xuICByZXNldFZpc2l0ZWRNZXNzYWdlcygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRWaXNpdGVkTWVzc2FnZXMoKTogdm9pZCB7XG4gIHZpc2l0ZWRNZXNzYWdlcyA9IG5ldyBTZXQoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdhcm5XaGVuKGNvbmRpdGlvbjogYm9vbGVhbiwgbWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gIGlmIChjb25kaXRpb24gJiYgIXZpc2l0ZWRNZXNzYWdlcy5oYXMobWVzc2FnZSkpIHtcbiAgICB2aXNpdGVkTWVzc2FnZXMuYWRkKG1lc3NhZ2UpO1xuICAgIGNvbnNvbGUud2FybiguLi5nZXRGb3JtYXR0ZWRNZXNzYWdlKG1lc3NhZ2UpKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXJyb3JXaGVuKGNvbmRpdGlvbjogYm9vbGVhbiwgbWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gIGlmIChjb25kaXRpb24gJiYgIXZpc2l0ZWRNZXNzYWdlcy5oYXMobWVzc2FnZSkpIHtcbiAgICB2aXNpdGVkTWVzc2FnZXMuYWRkKG1lc3NhZ2UpO1xuICAgIGNvbnNvbGUuZXJyb3IoLi4uZ2V0Rm9ybWF0dGVkTWVzc2FnZShtZXNzYWdlKSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlVGFyZ2V0cyh0YXJnZXRzOiBUYXJnZXRzKTogdm9pZCB7XG4gIGNvbnN0IGRpZFBhc3NGYWxzeVZhbHVlID0gIXRhcmdldHM7XG4gIGNvbnN0IGRpZFBhc3NQbGFpbk9iamVjdCA9XG4gICAgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHRhcmdldHMpID09PSAnW29iamVjdCBPYmplY3RdJyAmJlxuICAgICEodGFyZ2V0cyBhcyBhbnkpLmFkZEV2ZW50TGlzdGVuZXI7XG5cbiAgZXJyb3JXaGVuKFxuICAgIGRpZFBhc3NGYWxzeVZhbHVlLFxuICAgIFtcbiAgICAgICd0aXBweSgpIHdhcyBwYXNzZWQnLFxuICAgICAgJ2AnICsgU3RyaW5nKHRhcmdldHMpICsgJ2AnLFxuICAgICAgJ2FzIGl0cyB0YXJnZXRzIChmaXJzdCkgYXJndW1lbnQuIFZhbGlkIHR5cGVzIGFyZTogU3RyaW5nLCBFbGVtZW50LCcsXG4gICAgICAnRWxlbWVudFtdLCBvciBOb2RlTGlzdC4nLFxuICAgIF0uam9pbignICcpXG4gICk7XG5cbiAgZXJyb3JXaGVuKFxuICAgIGRpZFBhc3NQbGFpbk9iamVjdCxcbiAgICBbXG4gICAgICAndGlwcHkoKSB3YXMgcGFzc2VkIGEgcGxhaW4gb2JqZWN0IHdoaWNoIGlzIG5vdCBzdXBwb3J0ZWQgYXMgYW4gYXJndW1lbnQnLFxuICAgICAgJ2ZvciB2aXJ0dWFsIHBvc2l0aW9uaW5nLiBVc2UgcHJvcHMuZ2V0UmVmZXJlbmNlQ2xpZW50UmVjdCBpbnN0ZWFkLicsXG4gICAgXS5qb2luKCcgJylcbiAgKTtcbn1cbiIsICJpbXBvcnQge0RlZmF1bHRQcm9wcywgUGx1Z2luLCBQcm9wcywgUmVmZXJlbmNlRWxlbWVudCwgVGlwcHl9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHtcbiAgaGFzT3duUHJvcGVydHksXG4gIHJlbW92ZVByb3BlcnRpZXMsXG4gIGludm9rZVdpdGhBcmdzT3JSZXR1cm4sXG59IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHt3YXJuV2hlbn0gZnJvbSAnLi92YWxpZGF0aW9uJztcbmltcG9ydCB7VElQUFlfREVGQVVMVF9BUFBFTkRfVE99IGZyb20gJy4vY29uc3RhbnRzJztcblxuY29uc3QgcGx1Z2luUHJvcHMgPSB7XG4gIGFuaW1hdGVGaWxsOiBmYWxzZSxcbiAgZm9sbG93Q3Vyc29yOiBmYWxzZSxcbiAgaW5saW5lUG9zaXRpb25pbmc6IGZhbHNlLFxuICBzdGlja3k6IGZhbHNlLFxufTtcblxuY29uc3QgcmVuZGVyUHJvcHMgPSB7XG4gIGFsbG93SFRNTDogZmFsc2UsXG4gIGFuaW1hdGlvbjogJ2ZhZGUnLFxuICBhcnJvdzogdHJ1ZSxcbiAgY29udGVudDogJycsXG4gIGluZXJ0aWE6IGZhbHNlLFxuICBtYXhXaWR0aDogMzUwLFxuICByb2xlOiAndG9vbHRpcCcsXG4gIHRoZW1lOiAnJyxcbiAgekluZGV4OiA5OTk5LFxufTtcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRQcm9wczogRGVmYXVsdFByb3BzID0ge1xuICBhcHBlbmRUbzogVElQUFlfREVGQVVMVF9BUFBFTkRfVE8sXG4gIGFyaWE6IHtcbiAgICBjb250ZW50OiAnYXV0bycsXG4gICAgZXhwYW5kZWQ6ICdhdXRvJyxcbiAgfSxcbiAgZGVsYXk6IDAsXG4gIGR1cmF0aW9uOiBbMzAwLCAyNTBdLFxuICBnZXRSZWZlcmVuY2VDbGllbnRSZWN0OiBudWxsLFxuICBoaWRlT25DbGljazogdHJ1ZSxcbiAgaWdub3JlQXR0cmlidXRlczogZmFsc2UsXG4gIGludGVyYWN0aXZlOiBmYWxzZSxcbiAgaW50ZXJhY3RpdmVCb3JkZXI6IDIsXG4gIGludGVyYWN0aXZlRGVib3VuY2U6IDAsXG4gIG1vdmVUcmFuc2l0aW9uOiAnJyxcbiAgb2Zmc2V0OiBbMCwgMTBdLFxuICBvbkFmdGVyVXBkYXRlKCkge30sXG4gIG9uQmVmb3JlVXBkYXRlKCkge30sXG4gIG9uQ3JlYXRlKCkge30sXG4gIG9uRGVzdHJveSgpIHt9LFxuICBvbkhpZGRlbigpIHt9LFxuICBvbkhpZGUoKSB7fSxcbiAgb25Nb3VudCgpIHt9LFxuICBvblNob3coKSB7fSxcbiAgb25TaG93bigpIHt9LFxuICBvblRyaWdnZXIoKSB7fSxcbiAgb25VbnRyaWdnZXIoKSB7fSxcbiAgb25DbGlja091dHNpZGUoKSB7fSxcbiAgcGxhY2VtZW50OiAndG9wJyxcbiAgcGx1Z2luczogW10sXG4gIHBvcHBlck9wdGlvbnM6IHt9LFxuICByZW5kZXI6IG51bGwsXG4gIHNob3dPbkNyZWF0ZTogZmFsc2UsXG4gIHRvdWNoOiB0cnVlLFxuICB0cmlnZ2VyOiAnbW91c2VlbnRlciBmb2N1cycsXG4gIHRyaWdnZXJUYXJnZXQ6IG51bGwsXG4gIC4uLnBsdWdpblByb3BzLFxuICAuLi5yZW5kZXJQcm9wcyxcbn07XG5cbmNvbnN0IGRlZmF1bHRLZXlzID0gT2JqZWN0LmtleXMoZGVmYXVsdFByb3BzKTtcblxuZXhwb3J0IGNvbnN0IHNldERlZmF1bHRQcm9wczogVGlwcHlbJ3NldERlZmF1bHRQcm9wcyddID0gKHBhcnRpYWxQcm9wcykgPT4ge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAoX19ERVZfXykge1xuICAgIHZhbGlkYXRlUHJvcHMocGFydGlhbFByb3BzLCBbXSk7XG4gIH1cblxuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocGFydGlhbFByb3BzKSBhcyBBcnJheTxrZXlvZiBEZWZhdWx0UHJvcHM+O1xuICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgIChkZWZhdWx0UHJvcHMgYXMgYW55KVtrZXldID0gcGFydGlhbFByb3BzW2tleV07XG4gIH0pO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEV4dGVuZGVkUGFzc2VkUHJvcHMoXG4gIHBhc3NlZFByb3BzOiBQYXJ0aWFsPFByb3BzPiAmIFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4pOiBQYXJ0aWFsPFByb3BzPiB7XG4gIGNvbnN0IHBsdWdpbnMgPSBwYXNzZWRQcm9wcy5wbHVnaW5zIHx8IFtdO1xuICBjb25zdCBwbHVnaW5Qcm9wcyA9IHBsdWdpbnMucmVkdWNlPFJlY29yZDxzdHJpbmcsIHVua25vd24+PigoYWNjLCBwbHVnaW4pID0+IHtcbiAgICBjb25zdCB7bmFtZSwgZGVmYXVsdFZhbHVlfSA9IHBsdWdpbjtcblxuICAgIGlmIChuYW1lKSB7XG4gICAgICBhY2NbbmFtZV0gPVxuICAgICAgICBwYXNzZWRQcm9wc1tuYW1lXSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyBwYXNzZWRQcm9wc1tuYW1lXVxuICAgICAgICAgIDogKGRlZmF1bHRQcm9wcyBhcyBhbnkpW25hbWVdID8/IGRlZmF1bHRWYWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5wYXNzZWRQcm9wcyxcbiAgICAuLi5wbHVnaW5Qcm9wcyxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGFBdHRyaWJ1dGVQcm9wcyhcbiAgcmVmZXJlbmNlOiBSZWZlcmVuY2VFbGVtZW50LFxuICBwbHVnaW5zOiBQbHVnaW5bXVxuKTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4ge1xuICBjb25zdCBwcm9wS2V5cyA9IHBsdWdpbnNcbiAgICA/IE9iamVjdC5rZXlzKGdldEV4dGVuZGVkUGFzc2VkUHJvcHMoey4uLmRlZmF1bHRQcm9wcywgcGx1Z2luc30pKVxuICAgIDogZGVmYXVsdEtleXM7XG5cbiAgY29uc3QgcHJvcHMgPSBwcm9wS2V5cy5yZWR1Y2UoXG4gICAgKGFjYzogUGFydGlhbDxQcm9wcz4gJiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiwga2V5KSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZUFzU3RyaW5nID0gKFxuICAgICAgICByZWZlcmVuY2UuZ2V0QXR0cmlidXRlKGBkYXRhLXRpcHB5LSR7a2V5fWApIHx8ICcnXG4gICAgICApLnRyaW0oKTtcblxuICAgICAgaWYgKCF2YWx1ZUFzU3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9XG5cbiAgICAgIGlmIChrZXkgPT09ICdjb250ZW50Jykge1xuICAgICAgICBhY2Nba2V5XSA9IHZhbHVlQXNTdHJpbmc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGFjY1trZXldID0gSlNPTi5wYXJzZSh2YWx1ZUFzU3RyaW5nKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGFjY1trZXldID0gdmFsdWVBc1N0cmluZztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sXG4gICAge31cbiAgKTtcblxuICByZXR1cm4gcHJvcHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBldmFsdWF0ZVByb3BzKFxuICByZWZlcmVuY2U6IFJlZmVyZW5jZUVsZW1lbnQsXG4gIHByb3BzOiBQcm9wc1xuKTogUHJvcHMge1xuICBjb25zdCBvdXQgPSB7XG4gICAgLi4ucHJvcHMsXG4gICAgY29udGVudDogaW52b2tlV2l0aEFyZ3NPclJldHVybihwcm9wcy5jb250ZW50LCBbcmVmZXJlbmNlXSksXG4gICAgLi4uKHByb3BzLmlnbm9yZUF0dHJpYnV0ZXNcbiAgICAgID8ge31cbiAgICAgIDogZ2V0RGF0YUF0dHJpYnV0ZVByb3BzKHJlZmVyZW5jZSwgcHJvcHMucGx1Z2lucykpLFxuICB9O1xuXG4gIG91dC5hcmlhID0ge1xuICAgIC4uLmRlZmF1bHRQcm9wcy5hcmlhLFxuICAgIC4uLm91dC5hcmlhLFxuICB9O1xuXG4gIG91dC5hcmlhID0ge1xuICAgIGV4cGFuZGVkOlxuICAgICAgb3V0LmFyaWEuZXhwYW5kZWQgPT09ICdhdXRvJyA/IHByb3BzLmludGVyYWN0aXZlIDogb3V0LmFyaWEuZXhwYW5kZWQsXG4gICAgY29udGVudDpcbiAgICAgIG91dC5hcmlhLmNvbnRlbnQgPT09ICdhdXRvJ1xuICAgICAgICA/IHByb3BzLmludGVyYWN0aXZlXG4gICAgICAgICAgPyBudWxsXG4gICAgICAgICAgOiAnZGVzY3JpYmVkYnknXG4gICAgICAgIDogb3V0LmFyaWEuY29udGVudCxcbiAgfTtcblxuICByZXR1cm4gb3V0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVQcm9wcyhcbiAgcGFydGlhbFByb3BzOiBQYXJ0aWFsPFByb3BzPiA9IHt9LFxuICBwbHVnaW5zOiBQbHVnaW5bXSA9IFtdXG4pOiB2b2lkIHtcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHBhcnRpYWxQcm9wcykgYXMgQXJyYXk8a2V5b2YgUHJvcHM+O1xuICBrZXlzLmZvckVhY2goKHByb3ApID0+IHtcbiAgICBjb25zdCBub25QbHVnaW5Qcm9wcyA9IHJlbW92ZVByb3BlcnRpZXMoXG4gICAgICBkZWZhdWx0UHJvcHMsXG4gICAgICBPYmplY3Qua2V5cyhwbHVnaW5Qcm9wcylcbiAgICApO1xuXG4gICAgbGV0IGRpZFBhc3NVbmtub3duUHJvcCA9ICFoYXNPd25Qcm9wZXJ0eShub25QbHVnaW5Qcm9wcywgcHJvcCk7XG5cbiAgICAvLyBDaGVjayBpZiB0aGUgcHJvcCBleGlzdHMgaW4gYHBsdWdpbnNgXG4gICAgaWYgKGRpZFBhc3NVbmtub3duUHJvcCkge1xuICAgICAgZGlkUGFzc1Vua25vd25Qcm9wID1cbiAgICAgICAgcGx1Z2lucy5maWx0ZXIoKHBsdWdpbikgPT4gcGx1Z2luLm5hbWUgPT09IHByb3ApLmxlbmd0aCA9PT0gMDtcbiAgICB9XG5cbiAgICB3YXJuV2hlbihcbiAgICAgIGRpZFBhc3NVbmtub3duUHJvcCxcbiAgICAgIFtcbiAgICAgICAgYFxcYCR7cHJvcH1cXGBgLFxuICAgICAgICBcImlzIG5vdCBhIHZhbGlkIHByb3AuIFlvdSBtYXkgaGF2ZSBzcGVsbGVkIGl0IGluY29ycmVjdGx5LCBvciBpZiBpdCdzXCIsXG4gICAgICAgICdhIHBsdWdpbiwgZm9yZ290IHRvIHBhc3MgaXQgaW4gYW4gYXJyYXkgYXMgcHJvcHMucGx1Z2lucy4nLFxuICAgICAgICAnXFxuXFxuJyxcbiAgICAgICAgJ0FsbCBwcm9wczogaHR0cHM6Ly9hdG9taWtzLmdpdGh1Yi5pby90aXBweWpzL3Y2L2FsbC1wcm9wcy9cXG4nLFxuICAgICAgICAnUGx1Z2luczogaHR0cHM6Ly9hdG9taWtzLmdpdGh1Yi5pby90aXBweWpzL3Y2L3BsdWdpbnMvJyxcbiAgICAgIF0uam9pbignICcpXG4gICAgKTtcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHtcbiAgQVJST1dfQ0xBU1MsXG4gIEJBQ0tEUk9QX0NMQVNTLFxuICBCT1hfQ0xBU1MsXG4gIENPTlRFTlRfQ0xBU1MsXG4gIFNWR19BUlJPV19DTEFTUyxcbn0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHtkaXYsIGlzRWxlbWVudH0gZnJvbSAnLi9kb20tdXRpbHMnO1xuaW1wb3J0IHtJbnN0YW5jZSwgUG9wcGVyRWxlbWVudCwgUHJvcHN9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHtQb3BwZXJDaGlsZHJlbn0gZnJvbSAnLi90eXBlcy1pbnRlcm5hbCc7XG5pbXBvcnQge2FycmF5RnJvbX0gZnJvbSAnLi91dGlscyc7XG5cbi8vIEZpcmVmb3ggZXh0ZW5zaW9ucyBkb24ndCBhbGxvdyAuaW5uZXJIVE1MID0gXCIuLi5cIiBwcm9wZXJ0eS4gVGhpcyB0cmlja3MgaXQuXG5jb25zdCBpbm5lckhUTUwgPSAoKTogJ2lubmVySFRNTCcgPT4gJ2lubmVySFRNTCc7XG5cbmZ1bmN0aW9uIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKGVsZW1lbnQ6IEVsZW1lbnQsIGh0bWw6IHN0cmluZyk6IHZvaWQge1xuICBlbGVtZW50W2lubmVySFRNTCgpXSA9IGh0bWw7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFycm93RWxlbWVudCh2YWx1ZTogUHJvcHNbJ2Fycm93J10pOiBIVE1MRGl2RWxlbWVudCB7XG4gIGNvbnN0IGFycm93ID0gZGl2KCk7XG5cbiAgaWYgKHZhbHVlID09PSB0cnVlKSB7XG4gICAgYXJyb3cuY2xhc3NOYW1lID0gQVJST1dfQ0xBU1M7XG4gIH0gZWxzZSB7XG4gICAgYXJyb3cuY2xhc3NOYW1lID0gU1ZHX0FSUk9XX0NMQVNTO1xuXG4gICAgaWYgKGlzRWxlbWVudCh2YWx1ZSkpIHtcbiAgICAgIGFycm93LmFwcGVuZENoaWxkKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwoYXJyb3csIHZhbHVlIGFzIHN0cmluZyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFycm93O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0Q29udGVudChjb250ZW50OiBIVE1MRGl2RWxlbWVudCwgcHJvcHM6IFByb3BzKTogdm9pZCB7XG4gIGlmIChpc0VsZW1lbnQocHJvcHMuY29udGVudCkpIHtcbiAgICBkYW5nZXJvdXNseVNldElubmVySFRNTChjb250ZW50LCAnJyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwcm9wcy5jb250ZW50KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvcHMuY29udGVudCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmIChwcm9wcy5hbGxvd0hUTUwpIHtcbiAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKGNvbnRlbnQsIHByb3BzLmNvbnRlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZW50LnRleHRDb250ZW50ID0gcHJvcHMuY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENoaWxkcmVuKHBvcHBlcjogUG9wcGVyRWxlbWVudCk6IFBvcHBlckNoaWxkcmVuIHtcbiAgY29uc3QgYm94ID0gcG9wcGVyLmZpcnN0RWxlbWVudENoaWxkIGFzIEhUTUxEaXZFbGVtZW50O1xuICBjb25zdCBib3hDaGlsZHJlbiA9IGFycmF5RnJvbShib3guY2hpbGRyZW4pO1xuXG4gIHJldHVybiB7XG4gICAgYm94LFxuICAgIGNvbnRlbnQ6IGJveENoaWxkcmVuLmZpbmQoKG5vZGUpID0+IG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKENPTlRFTlRfQ0xBU1MpKSxcbiAgICBhcnJvdzogYm94Q2hpbGRyZW4uZmluZChcbiAgICAgIChub2RlKSA9PlxuICAgICAgICBub2RlLmNsYXNzTGlzdC5jb250YWlucyhBUlJPV19DTEFTUykgfHxcbiAgICAgICAgbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoU1ZHX0FSUk9XX0NMQVNTKVxuICAgICksXG4gICAgYmFja2Ryb3A6IGJveENoaWxkcmVuLmZpbmQoKG5vZGUpID0+XG4gICAgICBub2RlLmNsYXNzTGlzdC5jb250YWlucyhCQUNLRFJPUF9DTEFTUylcbiAgICApLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKFxuICBpbnN0YW5jZTogSW5zdGFuY2Vcbik6IHtcbiAgcG9wcGVyOiBQb3BwZXJFbGVtZW50O1xuICBvblVwZGF0ZT86IChwcmV2UHJvcHM6IFByb3BzLCBuZXh0UHJvcHM6IFByb3BzKSA9PiB2b2lkO1xufSB7XG4gIGNvbnN0IHBvcHBlciA9IGRpdigpO1xuXG4gIGNvbnN0IGJveCA9IGRpdigpO1xuICBib3guY2xhc3NOYW1lID0gQk9YX0NMQVNTO1xuICBib3guc2V0QXR0cmlidXRlKCdkYXRhLXN0YXRlJywgJ2hpZGRlbicpO1xuICBib3guc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuXG4gIGNvbnN0IGNvbnRlbnQgPSBkaXYoKTtcbiAgY29udGVudC5jbGFzc05hbWUgPSBDT05URU5UX0NMQVNTO1xuICBjb250ZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1zdGF0ZScsICdoaWRkZW4nKTtcblxuICBzZXRDb250ZW50KGNvbnRlbnQsIGluc3RhbmNlLnByb3BzKTtcblxuICBwb3BwZXIuYXBwZW5kQ2hpbGQoYm94KTtcbiAgYm94LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG4gIG9uVXBkYXRlKGluc3RhbmNlLnByb3BzLCBpbnN0YW5jZS5wcm9wcyk7XG5cbiAgZnVuY3Rpb24gb25VcGRhdGUocHJldlByb3BzOiBQcm9wcywgbmV4dFByb3BzOiBQcm9wcyk6IHZvaWQge1xuICAgIGNvbnN0IHtib3gsIGNvbnRlbnQsIGFycm93fSA9IGdldENoaWxkcmVuKHBvcHBlcik7XG5cbiAgICBpZiAobmV4dFByb3BzLnRoZW1lKSB7XG4gICAgICBib3guc2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJywgbmV4dFByb3BzLnRoZW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYm94LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10aGVtZScpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgbmV4dFByb3BzLmFuaW1hdGlvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGJveC5zZXRBdHRyaWJ1dGUoJ2RhdGEtYW5pbWF0aW9uJywgbmV4dFByb3BzLmFuaW1hdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJveC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtYW5pbWF0aW9uJyk7XG4gICAgfVxuXG4gICAgaWYgKG5leHRQcm9wcy5pbmVydGlhKSB7XG4gICAgICBib3guc2V0QXR0cmlidXRlKCdkYXRhLWluZXJ0aWEnLCAnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJveC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtaW5lcnRpYScpO1xuICAgIH1cblxuICAgIGJveC5zdHlsZS5tYXhXaWR0aCA9XG4gICAgICB0eXBlb2YgbmV4dFByb3BzLm1heFdpZHRoID09PSAnbnVtYmVyJ1xuICAgICAgICA/IGAke25leHRQcm9wcy5tYXhXaWR0aH1weGBcbiAgICAgICAgOiBuZXh0UHJvcHMubWF4V2lkdGg7XG5cbiAgICBpZiAobmV4dFByb3BzLnJvbGUpIHtcbiAgICAgIGJveC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCBuZXh0UHJvcHMucm9sZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJveC5yZW1vdmVBdHRyaWJ1dGUoJ3JvbGUnKTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBwcmV2UHJvcHMuY29udGVudCAhPT0gbmV4dFByb3BzLmNvbnRlbnQgfHxcbiAgICAgIHByZXZQcm9wcy5hbGxvd0hUTUwgIT09IG5leHRQcm9wcy5hbGxvd0hUTUxcbiAgICApIHtcbiAgICAgIHNldENvbnRlbnQoY29udGVudCwgaW5zdGFuY2UucHJvcHMpO1xuICAgIH1cblxuICAgIGlmIChuZXh0UHJvcHMuYXJyb3cpIHtcbiAgICAgIGlmICghYXJyb3cpIHtcbiAgICAgICAgYm94LmFwcGVuZENoaWxkKGNyZWF0ZUFycm93RWxlbWVudChuZXh0UHJvcHMuYXJyb3cpKTtcbiAgICAgIH0gZWxzZSBpZiAocHJldlByb3BzLmFycm93ICE9PSBuZXh0UHJvcHMuYXJyb3cpIHtcbiAgICAgICAgYm94LnJlbW92ZUNoaWxkKGFycm93KTtcbiAgICAgICAgYm94LmFwcGVuZENoaWxkKGNyZWF0ZUFycm93RWxlbWVudChuZXh0UHJvcHMuYXJyb3cpKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFycm93KSB7XG4gICAgICBib3gucmVtb3ZlQ2hpbGQoYXJyb3chKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBvcHBlcixcbiAgICBvblVwZGF0ZSxcbiAgfTtcbn1cblxuLy8gUnVudGltZSBjaGVjayB0byBpZGVudGlmeSBpZiB0aGUgcmVuZGVyIGZ1bmN0aW9uIGlzIHRoZSBkZWZhdWx0IG9uZTsgdGhpc1xuLy8gd2F5IHdlIGNhbiBhcHBseSBkZWZhdWx0IENTUyB0cmFuc2l0aW9ucyBsb2dpYyBhbmQgaXQgY2FuIGJlIHRyZWUtc2hha2VuIGF3YXlcbnJlbmRlci4kJHRpcHB5ID0gdHJ1ZTtcbiIsICJpbXBvcnQge2NyZWF0ZVBvcHBlciwgU3RyaWN0TW9kaWZpZXJzLCBNb2RpZmllcn0gZnJvbSAnQHBvcHBlcmpzL2NvcmUnO1xuaW1wb3J0IHtjdXJyZW50SW5wdXR9IGZyb20gJy4vYmluZEdsb2JhbEV2ZW50TGlzdGVuZXJzJztcbmltcG9ydCB7aXNJRTExfSBmcm9tICcuL2Jyb3dzZXInO1xuaW1wb3J0IHtUSVBQWV9ERUZBVUxUX0FQUEVORF9UTywgVE9VQ0hfT1BUSU9OU30gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHtcbiAgYWN0dWFsQ29udGFpbnMsXG4gIGRpdixcbiAgZ2V0T3duZXJEb2N1bWVudCxcbiAgaXNDdXJzb3JPdXRzaWRlSW50ZXJhY3RpdmVCb3JkZXIsXG4gIGlzTW91c2VFdmVudCxcbiAgc2V0VHJhbnNpdGlvbkR1cmF0aW9uLFxuICBzZXRWaXNpYmlsaXR5U3RhdGUsXG4gIHVwZGF0ZVRyYW5zaXRpb25FbmRMaXN0ZW5lcixcbn0gZnJvbSAnLi9kb20tdXRpbHMnO1xuaW1wb3J0IHtkZWZhdWx0UHJvcHMsIGV2YWx1YXRlUHJvcHMsIGdldEV4dGVuZGVkUGFzc2VkUHJvcHN9IGZyb20gJy4vcHJvcHMnO1xuaW1wb3J0IHtnZXRDaGlsZHJlbn0gZnJvbSAnLi90ZW1wbGF0ZSc7XG5pbXBvcnQge1xuICBDb250ZW50LFxuICBJbnN0YW5jZSxcbiAgTGlmZWN5Y2xlSG9va3MsXG4gIFBvcHBlckVsZW1lbnQsXG4gIFByb3BzLFxuICBSZWZlcmVuY2VFbGVtZW50LFxufSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7TGlzdGVuZXJPYmplY3QsIFBvcHBlclRyZWVEYXRhLCBQb3BwZXJDaGlsZHJlbn0gZnJvbSAnLi90eXBlcy1pbnRlcm5hbCc7XG5pbXBvcnQge1xuICBhcnJheUZyb20sXG4gIGRlYm91bmNlLFxuICBnZXRWYWx1ZUF0SW5kZXhPclJldHVybixcbiAgaW52b2tlV2l0aEFyZ3NPclJldHVybixcbiAgbm9ybWFsaXplVG9BcnJheSxcbiAgcHVzaElmVW5pcXVlLFxuICBzcGxpdEJ5U3BhY2VzLFxuICB1bmlxdWUsXG4gIHJlbW92ZVVuZGVmaW5lZFByb3BzLFxufSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7Y3JlYXRlTWVtb3J5TGVha1dhcm5pbmcsIGVycm9yV2hlbiwgd2FybldoZW59IGZyb20gJy4vdmFsaWRhdGlvbic7XG5cbmxldCBpZENvdW50ZXIgPSAxO1xubGV0IG1vdXNlTW92ZUxpc3RlbmVyczogKChldmVudDogTW91c2VFdmVudCkgPT4gdm9pZClbXSA9IFtdO1xuXG4vLyBVc2VkIGJ5IGBoaWRlQWxsKClgXG5leHBvcnQgbGV0IG1vdW50ZWRJbnN0YW5jZXM6IEluc3RhbmNlW10gPSBbXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVGlwcHkoXG4gIHJlZmVyZW5jZTogUmVmZXJlbmNlRWxlbWVudCxcbiAgcGFzc2VkUHJvcHM6IFBhcnRpYWw8UHJvcHM+XG4pOiBJbnN0YW5jZSB7XG4gIGNvbnN0IHByb3BzID0gZXZhbHVhdGVQcm9wcyhyZWZlcmVuY2UsIHtcbiAgICAuLi5kZWZhdWx0UHJvcHMsXG4gICAgLi4uZ2V0RXh0ZW5kZWRQYXNzZWRQcm9wcyhyZW1vdmVVbmRlZmluZWRQcm9wcyhwYXNzZWRQcm9wcykpLFxuICB9KTtcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8g8J+UkiBQcml2YXRlIG1lbWJlcnNcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIGxldCBzaG93VGltZW91dDogYW55O1xuICBsZXQgaGlkZVRpbWVvdXQ6IGFueTtcbiAgbGV0IHNjaGVkdWxlSGlkZUFuaW1hdGlvbkZyYW1lOiBudW1iZXI7XG4gIGxldCBpc1Zpc2libGVGcm9tQ2xpY2sgPSBmYWxzZTtcbiAgbGV0IGRpZEhpZGVEdWVUb0RvY3VtZW50TW91c2VEb3duID0gZmFsc2U7XG4gIGxldCBkaWRUb3VjaE1vdmUgPSBmYWxzZTtcbiAgbGV0IGlnbm9yZU9uRmlyc3RVcGRhdGUgPSBmYWxzZTtcbiAgbGV0IGxhc3RUcmlnZ2VyRXZlbnQ6IEV2ZW50IHwgdW5kZWZpbmVkO1xuICBsZXQgY3VycmVudFRyYW5zaXRpb25FbmRMaXN0ZW5lcjogKGV2ZW50OiBUcmFuc2l0aW9uRXZlbnQpID0+IHZvaWQ7XG4gIGxldCBvbkZpcnN0VXBkYXRlOiAoKSA9PiB2b2lkO1xuICBsZXQgbGlzdGVuZXJzOiBMaXN0ZW5lck9iamVjdFtdID0gW107XG4gIGxldCBkZWJvdW5jZWRPbk1vdXNlTW92ZSA9IGRlYm91bmNlKG9uTW91c2VNb3ZlLCBwcm9wcy5pbnRlcmFjdGl2ZURlYm91bmNlKTtcbiAgbGV0IGN1cnJlbnRUYXJnZXQ6IEVsZW1lbnQ7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIPCflJEgUHVibGljIG1lbWJlcnNcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIGNvbnN0IGlkID0gaWRDb3VudGVyKys7XG4gIGNvbnN0IHBvcHBlckluc3RhbmNlID0gbnVsbDtcbiAgY29uc3QgcGx1Z2lucyA9IHVuaXF1ZShwcm9wcy5wbHVnaW5zKTtcblxuICBjb25zdCBzdGF0ZSA9IHtcbiAgICAvLyBJcyB0aGUgaW5zdGFuY2UgY3VycmVudGx5IGVuYWJsZWQ/XG4gICAgaXNFbmFibGVkOiB0cnVlLFxuICAgIC8vIElzIHRoZSB0aXBweSBjdXJyZW50bHkgc2hvd2luZyBhbmQgbm90IHRyYW5zaXRpb25pbmcgb3V0P1xuICAgIGlzVmlzaWJsZTogZmFsc2UsXG4gICAgLy8gSGFzIHRoZSBpbnN0YW5jZSBiZWVuIGRlc3Ryb3llZD9cbiAgICBpc0Rlc3Ryb3llZDogZmFsc2UsXG4gICAgLy8gSXMgdGhlIHRpcHB5IGN1cnJlbnRseSBtb3VudGVkIHRvIHRoZSBET00/XG4gICAgaXNNb3VudGVkOiBmYWxzZSxcbiAgICAvLyBIYXMgdGhlIHRpcHB5IGZpbmlzaGVkIHRyYW5zaXRpb25pbmcgaW4/XG4gICAgaXNTaG93bjogZmFsc2UsXG4gIH07XG5cbiAgY29uc3QgaW5zdGFuY2U6IEluc3RhbmNlID0ge1xuICAgIC8vIHByb3BlcnRpZXNcbiAgICBpZCxcbiAgICByZWZlcmVuY2UsXG4gICAgcG9wcGVyOiBkaXYoKSxcbiAgICBwb3BwZXJJbnN0YW5jZSxcbiAgICBwcm9wcyxcbiAgICBzdGF0ZSxcbiAgICBwbHVnaW5zLFxuICAgIC8vIG1ldGhvZHNcbiAgICBjbGVhckRlbGF5VGltZW91dHMsXG4gICAgc2V0UHJvcHMsXG4gICAgc2V0Q29udGVudCxcbiAgICBzaG93LFxuICAgIGhpZGUsXG4gICAgaGlkZVdpdGhJbnRlcmFjdGl2aXR5LFxuICAgIGVuYWJsZSxcbiAgICBkaXNhYmxlLFxuICAgIHVubW91bnQsXG4gICAgZGVzdHJveSxcbiAgfTtcblxuICAvLyBUT0RPOiBJbnZlc3RpZ2F0ZSB3aHkgdGhpcyBlYXJseSByZXR1cm4gY2F1c2VzIGEgVERaIGVycm9yIGluIHRoZSB0ZXN0cyDigJRcbiAgLy8gaXQgZG9lc24ndCBzZWVtIHRvIGhhcHBlbiBpbiB0aGUgYnJvd3NlclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKCFwcm9wcy5yZW5kZXIpIHtcbiAgICBpZiAoX19ERVZfXykge1xuICAgICAgZXJyb3JXaGVuKHRydWUsICdyZW5kZXIoKSBmdW5jdGlvbiBoYXMgbm90IGJlZW4gc3VwcGxpZWQuJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIEluaXRpYWwgbXV0YXRpb25zXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBjb25zdCB7cG9wcGVyLCBvblVwZGF0ZX0gPSBwcm9wcy5yZW5kZXIoaW5zdGFuY2UpO1xuXG4gIHBvcHBlci5zZXRBdHRyaWJ1dGUoJ2RhdGEtX19OQU1FU1BBQ0VfUFJFRklYX18tcm9vdCcsICcnKTtcbiAgcG9wcGVyLmlkID0gYF9fTkFNRVNQQUNFX1BSRUZJWF9fLSR7aW5zdGFuY2UuaWR9YDtcblxuICBpbnN0YW5jZS5wb3BwZXIgPSBwb3BwZXI7XG4gIHJlZmVyZW5jZS5fdGlwcHkgPSBpbnN0YW5jZTtcbiAgcG9wcGVyLl90aXBweSA9IGluc3RhbmNlO1xuXG4gIGNvbnN0IHBsdWdpbnNIb29rcyA9IHBsdWdpbnMubWFwKChwbHVnaW4pID0+IHBsdWdpbi5mbihpbnN0YW5jZSkpO1xuICBjb25zdCBoYXNBcmlhRXhwYW5kZWQgPSByZWZlcmVuY2UuaGFzQXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJyk7XG5cbiAgYWRkTGlzdGVuZXJzKCk7XG4gIGhhbmRsZUFyaWFFeHBhbmRlZEF0dHJpYnV0ZSgpO1xuICBoYW5kbGVTdHlsZXMoKTtcblxuICBpbnZva2VIb29rKCdvbkNyZWF0ZScsIFtpbnN0YW5jZV0pO1xuXG4gIGlmIChwcm9wcy5zaG93T25DcmVhdGUpIHtcbiAgICBzY2hlZHVsZVNob3coKTtcbiAgfVxuXG4gIC8vIFByZXZlbnQgYSB0aXBweSB3aXRoIGEgZGVsYXkgZnJvbSBoaWRpbmcgaWYgdGhlIGN1cnNvciBsZWZ0IHRoZW4gcmV0dXJuZWRcbiAgLy8gYmVmb3JlIGl0IHN0YXJ0ZWQgaGlkaW5nXG4gIHBvcHBlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgIGlmIChpbnN0YW5jZS5wcm9wcy5pbnRlcmFjdGl2ZSAmJiBpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGUpIHtcbiAgICAgIGluc3RhbmNlLmNsZWFyRGVsYXlUaW1lb3V0cygpO1xuICAgIH1cbiAgfSk7XG5cbiAgcG9wcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgaW5zdGFuY2UucHJvcHMuaW50ZXJhY3RpdmUgJiZcbiAgICAgIGluc3RhbmNlLnByb3BzLnRyaWdnZXIuaW5kZXhPZignbW91c2VlbnRlcicpID49IDBcbiAgICApIHtcbiAgICAgIGdldERvY3VtZW50KCkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZGVib3VuY2VkT25Nb3VzZU1vdmUpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGluc3RhbmNlO1xuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyDwn5SSIFByaXZhdGUgbWV0aG9kc1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgZnVuY3Rpb24gZ2V0Tm9ybWFsaXplZFRvdWNoU2V0dGluZ3MoKTogW3N0cmluZyB8IGJvb2xlYW4sIG51bWJlcl0ge1xuICAgIGNvbnN0IHt0b3VjaH0gPSBpbnN0YW5jZS5wcm9wcztcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh0b3VjaCkgPyB0b3VjaCA6IFt0b3VjaCwgMF07XG4gIH1cblxuICBmdW5jdGlvbiBnZXRJc0N1c3RvbVRvdWNoQmVoYXZpb3IoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGdldE5vcm1hbGl6ZWRUb3VjaFNldHRpbmdzKClbMF0gPT09ICdob2xkJztcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldElzRGVmYXVsdFJlbmRlckZuKCk6IGJvb2xlYW4ge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICByZXR1cm4gISFpbnN0YW5jZS5wcm9wcy5yZW5kZXI/LiQkdGlwcHk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDdXJyZW50VGFyZ2V0KCk6IEVsZW1lbnQge1xuICAgIHJldHVybiBjdXJyZW50VGFyZ2V0IHx8IHJlZmVyZW5jZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERvY3VtZW50KCk6IERvY3VtZW50IHtcbiAgICBjb25zdCBwYXJlbnQgPSBnZXRDdXJyZW50VGFyZ2V0KCkucGFyZW50Tm9kZSBhcyBFbGVtZW50O1xuICAgIHJldHVybiBwYXJlbnQgPyBnZXRPd25lckRvY3VtZW50KHBhcmVudCkgOiBkb2N1bWVudDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERlZmF1bHRUZW1wbGF0ZUNoaWxkcmVuKCk6IFBvcHBlckNoaWxkcmVuIHtcbiAgICByZXR1cm4gZ2V0Q2hpbGRyZW4ocG9wcGVyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERlbGF5KGlzU2hvdzogYm9vbGVhbik6IG51bWJlciB7XG4gICAgLy8gRm9yIHRvdWNoIG9yIGtleWJvYXJkIGlucHV0LCBmb3JjZSBgMGAgZGVsYXkgZm9yIFVYIHJlYXNvbnNcbiAgICAvLyBBbHNvIGlmIHRoZSBpbnN0YW5jZSBpcyBtb3VudGVkIGJ1dCBub3QgdmlzaWJsZSAodHJhbnNpdGlvbmluZyBvdXQpLFxuICAgIC8vIGlnbm9yZSBkZWxheVxuICAgIGlmIChcbiAgICAgIChpbnN0YW5jZS5zdGF0ZS5pc01vdW50ZWQgJiYgIWluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZSkgfHxcbiAgICAgIGN1cnJlbnRJbnB1dC5pc1RvdWNoIHx8XG4gICAgICAobGFzdFRyaWdnZXJFdmVudCAmJiBsYXN0VHJpZ2dlckV2ZW50LnR5cGUgPT09ICdmb2N1cycpXG4gICAgKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2V0VmFsdWVBdEluZGV4T3JSZXR1cm4oXG4gICAgICBpbnN0YW5jZS5wcm9wcy5kZWxheSxcbiAgICAgIGlzU2hvdyA/IDAgOiAxLFxuICAgICAgZGVmYXVsdFByb3BzLmRlbGF5XG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVN0eWxlcyhmcm9tSGlkZSA9IGZhbHNlKTogdm9pZCB7XG4gICAgcG9wcGVyLnN0eWxlLnBvaW50ZXJFdmVudHMgPVxuICAgICAgaW5zdGFuY2UucHJvcHMuaW50ZXJhY3RpdmUgJiYgIWZyb21IaWRlID8gJycgOiAnbm9uZSc7XG4gICAgcG9wcGVyLnN0eWxlLnpJbmRleCA9IGAke2luc3RhbmNlLnByb3BzLnpJbmRleH1gO1xuICB9XG5cbiAgZnVuY3Rpb24gaW52b2tlSG9vayhcbiAgICBob29rOiBrZXlvZiBMaWZlY3ljbGVIb29rcyxcbiAgICBhcmdzOiBbSW5zdGFuY2UsIGFueT9dLFxuICAgIHNob3VsZEludm9rZVByb3BzSG9vayA9IHRydWVcbiAgKTogdm9pZCB7XG4gICAgcGx1Z2luc0hvb2tzLmZvckVhY2goKHBsdWdpbkhvb2tzKSA9PiB7XG4gICAgICBpZiAocGx1Z2luSG9va3NbaG9va10pIHtcbiAgICAgICAgcGx1Z2luSG9va3NbaG9va10hKC4uLmFyZ3MpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHNob3VsZEludm9rZVByb3BzSG9vaykge1xuICAgICAgaW5zdGFuY2UucHJvcHNbaG9va10oLi4uYXJncyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQXJpYUNvbnRlbnRBdHRyaWJ1dGUoKTogdm9pZCB7XG4gICAgY29uc3Qge2FyaWF9ID0gaW5zdGFuY2UucHJvcHM7XG5cbiAgICBpZiAoIWFyaWEuY29udGVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGF0dHIgPSBgYXJpYS0ke2FyaWEuY29udGVudH1gO1xuICAgIGNvbnN0IGlkID0gcG9wcGVyLmlkO1xuICAgIGNvbnN0IG5vZGVzID0gbm9ybWFsaXplVG9BcnJheShpbnN0YW5jZS5wcm9wcy50cmlnZ2VyVGFyZ2V0IHx8IHJlZmVyZW5jZSk7XG5cbiAgICBub2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50VmFsdWUgPSBub2RlLmdldEF0dHJpYnV0ZShhdHRyKTtcblxuICAgICAgaWYgKGluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZSkge1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShhdHRyLCBjdXJyZW50VmFsdWUgPyBgJHtjdXJyZW50VmFsdWV9ICR7aWR9YCA6IGlkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5leHRWYWx1ZSA9IGN1cnJlbnRWYWx1ZSAmJiBjdXJyZW50VmFsdWUucmVwbGFjZShpZCwgJycpLnRyaW0oKTtcblxuICAgICAgICBpZiAobmV4dFZhbHVlKSB7XG4gICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoYXR0ciwgbmV4dFZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQXJpYUV4cGFuZGVkQXR0cmlidXRlKCk6IHZvaWQge1xuICAgIGlmIChoYXNBcmlhRXhwYW5kZWQgfHwgIWluc3RhbmNlLnByb3BzLmFyaWEuZXhwYW5kZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlcyA9IG5vcm1hbGl6ZVRvQXJyYXkoaW5zdGFuY2UucHJvcHMudHJpZ2dlclRhcmdldCB8fCByZWZlcmVuY2UpO1xuXG4gICAgbm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgaWYgKGluc3RhbmNlLnByb3BzLmludGVyYWN0aXZlKSB7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICdhcmlhLWV4cGFuZGVkJyxcbiAgICAgICAgICBpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGUgJiYgbm9kZSA9PT0gZ2V0Q3VycmVudFRhcmdldCgpXG4gICAgICAgICAgICA/ICd0cnVlJ1xuICAgICAgICAgICAgOiAnZmFsc2UnXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYW51cEludGVyYWN0aXZlTW91c2VMaXN0ZW5lcnMoKTogdm9pZCB7XG4gICAgZ2V0RG9jdW1lbnQoKS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBkZWJvdW5jZWRPbk1vdXNlTW92ZSk7XG4gICAgbW91c2VNb3ZlTGlzdGVuZXJzID0gbW91c2VNb3ZlTGlzdGVuZXJzLmZpbHRlcihcbiAgICAgIChsaXN0ZW5lcikgPT4gbGlzdGVuZXIgIT09IGRlYm91bmNlZE9uTW91c2VNb3ZlXG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRG9jdW1lbnRQcmVzcyhldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpOiB2b2lkIHtcbiAgICAvLyBNb3ZlZCBmaW5nZXIgdG8gc2Nyb2xsIGluc3RlYWQgb2YgYW4gaW50ZW50aW9uYWwgdGFwIG91dHNpZGVcbiAgICBpZiAoY3VycmVudElucHV0LmlzVG91Y2gpIHtcbiAgICAgIGlmIChkaWRUb3VjaE1vdmUgfHwgZXZlbnQudHlwZSA9PT0gJ21vdXNlZG93bicpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFjdHVhbFRhcmdldCA9XG4gICAgICAoZXZlbnQuY29tcG9zZWRQYXRoICYmIGV2ZW50LmNvbXBvc2VkUGF0aCgpWzBdKSB8fCBldmVudC50YXJnZXQ7XG5cbiAgICAvLyBDbGlja2VkIG9uIGludGVyYWN0aXZlIHBvcHBlclxuICAgIGlmIChcbiAgICAgIGluc3RhbmNlLnByb3BzLmludGVyYWN0aXZlICYmXG4gICAgICBhY3R1YWxDb250YWlucyhwb3BwZXIsIGFjdHVhbFRhcmdldCBhcyBFbGVtZW50KVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIENsaWNrZWQgb24gdGhlIGV2ZW50IGxpc3RlbmVycyB0YXJnZXRcbiAgICBpZiAoXG4gICAgICBub3JtYWxpemVUb0FycmF5KGluc3RhbmNlLnByb3BzLnRyaWdnZXJUYXJnZXQgfHwgcmVmZXJlbmNlKS5zb21lKChlbCkgPT5cbiAgICAgICAgYWN0dWFsQ29udGFpbnMoZWwsIGFjdHVhbFRhcmdldCBhcyBFbGVtZW50KVxuICAgICAgKVxuICAgICkge1xuICAgICAgaWYgKGN1cnJlbnRJbnB1dC5pc1RvdWNoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGUgJiZcbiAgICAgICAgaW5zdGFuY2UucHJvcHMudHJpZ2dlci5pbmRleE9mKCdjbGljaycpID49IDBcbiAgICAgICkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGludm9rZUhvb2soJ29uQ2xpY2tPdXRzaWRlJywgW2luc3RhbmNlLCBldmVudF0pO1xuICAgIH1cblxuICAgIGlmIChpbnN0YW5jZS5wcm9wcy5oaWRlT25DbGljayA9PT0gdHJ1ZSkge1xuICAgICAgaW5zdGFuY2UuY2xlYXJEZWxheVRpbWVvdXRzKCk7XG4gICAgICBpbnN0YW5jZS5oaWRlKCk7XG5cbiAgICAgIC8vIGBtb3VzZWRvd25gIGV2ZW50IGlzIGZpcmVkIHJpZ2h0IGJlZm9yZSBgZm9jdXNgIGlmIHByZXNzaW5nIHRoZVxuICAgICAgLy8gY3VycmVudFRhcmdldC4gVGhpcyBsZXRzIGEgdGlwcHkgd2l0aCBgZm9jdXNgIHRyaWdnZXIga25vdyB0aGF0IGl0XG4gICAgICAvLyBzaG91bGQgbm90IHNob3dcbiAgICAgIGRpZEhpZGVEdWVUb0RvY3VtZW50TW91c2VEb3duID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBkaWRIaWRlRHVlVG9Eb2N1bWVudE1vdXNlRG93biA9IGZhbHNlO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIFRoZSBsaXN0ZW5lciBnZXRzIGFkZGVkIGluIGBzY2hlZHVsZVNob3coKWAsIGJ1dCB0aGlzIG1heSBiZSBoaWRpbmcgaXRcbiAgICAgIC8vIGJlZm9yZSBpdCBzaG93cywgYW5kIGhpZGUoKSdzIGVhcmx5IGJhaWwtb3V0IGJlaGF2aW9yIGNhbiBwcmV2ZW50IGl0XG4gICAgICAvLyBmcm9tIGJlaW5nIGNsZWFuZWQgdXBcbiAgICAgIGlmICghaW5zdGFuY2Uuc3RhdGUuaXNNb3VudGVkKSB7XG4gICAgICAgIHJlbW92ZURvY3VtZW50UHJlc3MoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvblRvdWNoTW92ZSgpOiB2b2lkIHtcbiAgICBkaWRUb3VjaE1vdmUgPSB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gb25Ub3VjaFN0YXJ0KCk6IHZvaWQge1xuICAgIGRpZFRvdWNoTW92ZSA9IGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkRG9jdW1lbnRQcmVzcygpOiB2b2lkIHtcbiAgICBjb25zdCBkb2MgPSBnZXREb2N1bWVudCgpO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBvbkRvY3VtZW50UHJlc3MsIHRydWUpO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uRG9jdW1lbnRQcmVzcywgVE9VQ0hfT1BUSU9OUyk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBvblRvdWNoU3RhcnQsIFRPVUNIX09QVElPTlMpO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZSwgVE9VQ0hfT1BUSU9OUyk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVEb2N1bWVudFByZXNzKCk6IHZvaWQge1xuICAgIGNvbnN0IGRvYyA9IGdldERvY3VtZW50KCk7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uRG9jdW1lbnRQcmVzcywgdHJ1ZSk7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25Eb2N1bWVudFByZXNzLCBUT1VDSF9PUFRJT05TKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIG9uVG91Y2hTdGFydCwgVE9VQ0hfT1BUSU9OUyk7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG9uVG91Y2hNb3ZlLCBUT1VDSF9PUFRJT05TKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uVHJhbnNpdGlvbmVkT3V0KGR1cmF0aW9uOiBudW1iZXIsIGNhbGxiYWNrOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgb25UcmFuc2l0aW9uRW5kKGR1cmF0aW9uLCAoKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgICFpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGUgJiZcbiAgICAgICAgcG9wcGVyLnBhcmVudE5vZGUgJiZcbiAgICAgICAgcG9wcGVyLnBhcmVudE5vZGUuY29udGFpbnMocG9wcGVyKVxuICAgICAgKSB7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBvblRyYW5zaXRpb25lZEluKGR1cmF0aW9uOiBudW1iZXIsIGNhbGxiYWNrOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgb25UcmFuc2l0aW9uRW5kKGR1cmF0aW9uLCBjYWxsYmFjayk7XG4gIH1cblxuICBmdW5jdGlvbiBvblRyYW5zaXRpb25FbmQoZHVyYXRpb246IG51bWJlciwgY2FsbGJhY2s6ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICBjb25zdCBib3ggPSBnZXREZWZhdWx0VGVtcGxhdGVDaGlsZHJlbigpLmJveDtcblxuICAgIGZ1bmN0aW9uIGxpc3RlbmVyKGV2ZW50OiBUcmFuc2l0aW9uRXZlbnQpOiB2b2lkIHtcbiAgICAgIGlmIChldmVudC50YXJnZXQgPT09IGJveCkge1xuICAgICAgICB1cGRhdGVUcmFuc2l0aW9uRW5kTGlzdGVuZXIoYm94LCAncmVtb3ZlJywgbGlzdGVuZXIpO1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE1ha2UgY2FsbGJhY2sgc3luY2hyb25vdXMgaWYgZHVyYXRpb24gaXMgMFxuICAgIC8vIGB0cmFuc2l0aW9uZW5kYCB3b24ndCBmaXJlIG90aGVyd2lzZVxuICAgIGlmIChkdXJhdGlvbiA9PT0gMCkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlVHJhbnNpdGlvbkVuZExpc3RlbmVyKGJveCwgJ3JlbW92ZScsIGN1cnJlbnRUcmFuc2l0aW9uRW5kTGlzdGVuZXIpO1xuICAgIHVwZGF0ZVRyYW5zaXRpb25FbmRMaXN0ZW5lcihib3gsICdhZGQnLCBsaXN0ZW5lcik7XG5cbiAgICBjdXJyZW50VHJhbnNpdGlvbkVuZExpc3RlbmVyID0gbGlzdGVuZXI7XG4gIH1cblxuICBmdW5jdGlvbiBvbihcbiAgICBldmVudFR5cGU6IHN0cmluZyxcbiAgICBoYW5kbGVyOiBFdmVudExpc3RlbmVyLFxuICAgIG9wdGlvbnM6IGJvb2xlYW4gfCBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IGZhbHNlXG4gICk6IHZvaWQge1xuICAgIGNvbnN0IG5vZGVzID0gbm9ybWFsaXplVG9BcnJheShpbnN0YW5jZS5wcm9wcy50cmlnZ2VyVGFyZ2V0IHx8IHJlZmVyZW5jZSk7XG4gICAgbm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgICBsaXN0ZW5lcnMucHVzaCh7bm9kZSwgZXZlbnRUeXBlLCBoYW5kbGVyLCBvcHRpb25zfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRMaXN0ZW5lcnMoKTogdm9pZCB7XG4gICAgaWYgKGdldElzQ3VzdG9tVG91Y2hCZWhhdmlvcigpKSB7XG4gICAgICBvbigndG91Y2hzdGFydCcsIG9uVHJpZ2dlciwge3Bhc3NpdmU6IHRydWV9KTtcbiAgICAgIG9uKCd0b3VjaGVuZCcsIG9uTW91c2VMZWF2ZSBhcyBFdmVudExpc3RlbmVyLCB7cGFzc2l2ZTogdHJ1ZX0pO1xuICAgIH1cblxuICAgIHNwbGl0QnlTcGFjZXMoaW5zdGFuY2UucHJvcHMudHJpZ2dlcikuZm9yRWFjaCgoZXZlbnRUeXBlKSA9PiB7XG4gICAgICBpZiAoZXZlbnRUeXBlID09PSAnbWFudWFsJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIG9uKGV2ZW50VHlwZSwgb25UcmlnZ2VyKTtcblxuICAgICAgc3dpdGNoIChldmVudFR5cGUpIHtcbiAgICAgICAgY2FzZSAnbW91c2VlbnRlcic6XG4gICAgICAgICAgb24oJ21vdXNlbGVhdmUnLCBvbk1vdXNlTGVhdmUgYXMgRXZlbnRMaXN0ZW5lcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2ZvY3VzJzpcbiAgICAgICAgICBvbihpc0lFMTEgPyAnZm9jdXNvdXQnIDogJ2JsdXInLCBvbkJsdXJPckZvY3VzT3V0IGFzIEV2ZW50TGlzdGVuZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdmb2N1c2luJzpcbiAgICAgICAgICBvbignZm9jdXNvdXQnLCBvbkJsdXJPckZvY3VzT3V0IGFzIEV2ZW50TGlzdGVuZXIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXJzKCk6IHZvaWQge1xuICAgIGxpc3RlbmVycy5mb3JFYWNoKCh7bm9kZSwgZXZlbnRUeXBlLCBoYW5kbGVyLCBvcHRpb25zfTogTGlzdGVuZXJPYmplY3QpID0+IHtcbiAgICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgIH0pO1xuICAgIGxpc3RlbmVycyA9IFtdO1xuICB9XG5cbiAgZnVuY3Rpb24gb25UcmlnZ2VyKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGxldCBzaG91bGRTY2hlZHVsZUNsaWNrSGlkZSA9IGZhbHNlO1xuXG4gICAgaWYgKFxuICAgICAgIWluc3RhbmNlLnN0YXRlLmlzRW5hYmxlZCB8fFxuICAgICAgaXNFdmVudExpc3RlbmVyU3RvcHBlZChldmVudCkgfHxcbiAgICAgIGRpZEhpZGVEdWVUb0RvY3VtZW50TW91c2VEb3duXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgd2FzRm9jdXNlZCA9IGxhc3RUcmlnZ2VyRXZlbnQ/LnR5cGUgPT09ICdmb2N1cyc7XG5cbiAgICBsYXN0VHJpZ2dlckV2ZW50ID0gZXZlbnQ7XG4gICAgY3VycmVudFRhcmdldCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgRWxlbWVudDtcblxuICAgIGhhbmRsZUFyaWFFeHBhbmRlZEF0dHJpYnV0ZSgpO1xuXG4gICAgaWYgKCFpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGUgJiYgaXNNb3VzZUV2ZW50KGV2ZW50KSkge1xuICAgICAgLy8gSWYgc2Nyb2xsaW5nLCBgbW91c2VlbnRlcmAgZXZlbnRzIGNhbiBiZSBmaXJlZCBpZiB0aGUgY3Vyc29yIGxhbmRzXG4gICAgICAvLyBvdmVyIGEgbmV3IHRhcmdldCwgYnV0IGBtb3VzZW1vdmVgIGV2ZW50cyBkb24ndCBnZXQgZmlyZWQuIFRoaXNcbiAgICAgIC8vIGNhdXNlcyBpbnRlcmFjdGl2ZSB0b29sdGlwcyB0byBnZXQgc3R1Y2sgb3BlbiB1bnRpbCB0aGUgY3Vyc29yIGlzXG4gICAgICAvLyBtb3ZlZFxuICAgICAgbW91c2VNb3ZlTGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiBsaXN0ZW5lcihldmVudCkpO1xuICAgIH1cblxuICAgIC8vIFRvZ2dsZSBzaG93L2hpZGUgd2hlbiBjbGlja2luZyBjbGljay10cmlnZ2VyZWQgdG9vbHRpcHNcbiAgICBpZiAoXG4gICAgICBldmVudC50eXBlID09PSAnY2xpY2snICYmXG4gICAgICAoaW5zdGFuY2UucHJvcHMudHJpZ2dlci5pbmRleE9mKCdtb3VzZWVudGVyJykgPCAwIHx8XG4gICAgICAgIGlzVmlzaWJsZUZyb21DbGljaykgJiZcbiAgICAgIGluc3RhbmNlLnByb3BzLmhpZGVPbkNsaWNrICE9PSBmYWxzZSAmJlxuICAgICAgaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlXG4gICAgKSB7XG4gICAgICBzaG91bGRTY2hlZHVsZUNsaWNrSGlkZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNjaGVkdWxlU2hvdyhldmVudCk7XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LnR5cGUgPT09ICdjbGljaycpIHtcbiAgICAgIGlzVmlzaWJsZUZyb21DbGljayA9ICFzaG91bGRTY2hlZHVsZUNsaWNrSGlkZTtcbiAgICB9XG5cbiAgICBpZiAoc2hvdWxkU2NoZWR1bGVDbGlja0hpZGUgJiYgIXdhc0ZvY3VzZWQpIHtcbiAgICAgIHNjaGVkdWxlSGlkZShldmVudCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25Nb3VzZU1vdmUoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgTm9kZTtcbiAgICBjb25zdCBpc0N1cnNvck92ZXJSZWZlcmVuY2VPclBvcHBlciA9XG4gICAgICBnZXRDdXJyZW50VGFyZ2V0KCkuY29udGFpbnModGFyZ2V0KSB8fCBwb3BwZXIuY29udGFpbnModGFyZ2V0KTtcblxuICAgIGlmIChldmVudC50eXBlID09PSAnbW91c2Vtb3ZlJyAmJiBpc0N1cnNvck92ZXJSZWZlcmVuY2VPclBvcHBlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHBvcHBlclRyZWVEYXRhID0gZ2V0TmVzdGVkUG9wcGVyVHJlZSgpXG4gICAgICAuY29uY2F0KHBvcHBlcilcbiAgICAgIC5tYXAoKHBvcHBlcikgPT4ge1xuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IHBvcHBlci5fdGlwcHkhO1xuICAgICAgICBjb25zdCBzdGF0ZSA9IGluc3RhbmNlLnBvcHBlckluc3RhbmNlPy5zdGF0ZTtcblxuICAgICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcG9wcGVyUmVjdDogcG9wcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgICAgcG9wcGVyU3RhdGU6IHN0YXRlLFxuICAgICAgICAgICAgcHJvcHMsXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSlcbiAgICAgIC5maWx0ZXIoQm9vbGVhbikgYXMgUG9wcGVyVHJlZURhdGFbXTtcblxuICAgIGlmIChpc0N1cnNvck91dHNpZGVJbnRlcmFjdGl2ZUJvcmRlcihwb3BwZXJUcmVlRGF0YSwgZXZlbnQpKSB7XG4gICAgICBjbGVhbnVwSW50ZXJhY3RpdmVNb3VzZUxpc3RlbmVycygpO1xuICAgICAgc2NoZWR1bGVIaWRlKGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbk1vdXNlTGVhdmUoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBzaG91bGRCYWlsID1cbiAgICAgIGlzRXZlbnRMaXN0ZW5lclN0b3BwZWQoZXZlbnQpIHx8XG4gICAgICAoaW5zdGFuY2UucHJvcHMudHJpZ2dlci5pbmRleE9mKCdjbGljaycpID49IDAgJiYgaXNWaXNpYmxlRnJvbUNsaWNrKTtcblxuICAgIGlmIChzaG91bGRCYWlsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGluc3RhbmNlLnByb3BzLmludGVyYWN0aXZlKSB7XG4gICAgICBpbnN0YW5jZS5oaWRlV2l0aEludGVyYWN0aXZpdHkoZXZlbnQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNjaGVkdWxlSGlkZShldmVudCk7XG4gIH1cblxuICBmdW5jdGlvbiBvbkJsdXJPckZvY3VzT3V0KGV2ZW50OiBGb2N1c0V2ZW50KTogdm9pZCB7XG4gICAgaWYgKFxuICAgICAgaW5zdGFuY2UucHJvcHMudHJpZ2dlci5pbmRleE9mKCdmb2N1c2luJykgPCAwICYmXG4gICAgICBldmVudC50YXJnZXQgIT09IGdldEN1cnJlbnRUYXJnZXQoKVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIElmIGZvY3VzIHdhcyBtb3ZlZCB0byB3aXRoaW4gdGhlIHBvcHBlclxuICAgIGlmIChcbiAgICAgIGluc3RhbmNlLnByb3BzLmludGVyYWN0aXZlICYmXG4gICAgICBldmVudC5yZWxhdGVkVGFyZ2V0ICYmXG4gICAgICBwb3BwZXIuY29udGFpbnMoZXZlbnQucmVsYXRlZFRhcmdldCBhcyBFbGVtZW50KVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNjaGVkdWxlSGlkZShldmVudCk7XG4gIH1cblxuICBmdW5jdGlvbiBpc0V2ZW50TGlzdGVuZXJTdG9wcGVkKGV2ZW50OiBFdmVudCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBjdXJyZW50SW5wdXQuaXNUb3VjaFxuICAgICAgPyBnZXRJc0N1c3RvbVRvdWNoQmVoYXZpb3IoKSAhPT0gZXZlbnQudHlwZS5pbmRleE9mKCd0b3VjaCcpID49IDBcbiAgICAgIDogZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQb3BwZXJJbnN0YW5jZSgpOiB2b2lkIHtcbiAgICBkZXN0cm95UG9wcGVySW5zdGFuY2UoKTtcblxuICAgIGNvbnN0IHtcbiAgICAgIHBvcHBlck9wdGlvbnMsXG4gICAgICBwbGFjZW1lbnQsXG4gICAgICBvZmZzZXQsXG4gICAgICBnZXRSZWZlcmVuY2VDbGllbnRSZWN0LFxuICAgICAgbW92ZVRyYW5zaXRpb24sXG4gICAgfSA9IGluc3RhbmNlLnByb3BzO1xuXG4gICAgY29uc3QgYXJyb3cgPSBnZXRJc0RlZmF1bHRSZW5kZXJGbigpID8gZ2V0Q2hpbGRyZW4ocG9wcGVyKS5hcnJvdyA6IG51bGw7XG5cbiAgICBjb25zdCBjb21wdXRlZFJlZmVyZW5jZSA9IGdldFJlZmVyZW5jZUNsaWVudFJlY3RcbiAgICAgID8ge1xuICAgICAgICAgIGdldEJvdW5kaW5nQ2xpZW50UmVjdDogZ2V0UmVmZXJlbmNlQ2xpZW50UmVjdCxcbiAgICAgICAgICBjb250ZXh0RWxlbWVudDpcbiAgICAgICAgICAgIGdldFJlZmVyZW5jZUNsaWVudFJlY3QuY29udGV4dEVsZW1lbnQgfHwgZ2V0Q3VycmVudFRhcmdldCgpLFxuICAgICAgICB9XG4gICAgICA6IHJlZmVyZW5jZTtcblxuICAgIGNvbnN0IHRpcHB5TW9kaWZpZXI6IE1vZGlmaWVyPCckJHRpcHB5JywgUmVjb3JkPHN0cmluZywgdW5rbm93bj4+ID0ge1xuICAgICAgbmFtZTogJyQkdGlwcHknLFxuICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgIHBoYXNlOiAnYmVmb3JlV3JpdGUnLFxuICAgICAgcmVxdWlyZXM6IFsnY29tcHV0ZVN0eWxlcyddLFxuICAgICAgZm4oe3N0YXRlfSkge1xuICAgICAgICBpZiAoZ2V0SXNEZWZhdWx0UmVuZGVyRm4oKSkge1xuICAgICAgICAgIGNvbnN0IHtib3h9ID0gZ2V0RGVmYXVsdFRlbXBsYXRlQ2hpbGRyZW4oKTtcblxuICAgICAgICAgIFsncGxhY2VtZW50JywgJ3JlZmVyZW5jZS1oaWRkZW4nLCAnZXNjYXBlZCddLmZvckVhY2goKGF0dHIpID0+IHtcbiAgICAgICAgICAgIGlmIChhdHRyID09PSAncGxhY2VtZW50Jykge1xuICAgICAgICAgICAgICBib3guc2V0QXR0cmlidXRlKCdkYXRhLXBsYWNlbWVudCcsIHN0YXRlLnBsYWNlbWVudCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZiAoc3RhdGUuYXR0cmlidXRlcy5wb3BwZXJbYGRhdGEtcG9wcGVyLSR7YXR0cn1gXSkge1xuICAgICAgICAgICAgICAgIGJveC5zZXRBdHRyaWJ1dGUoYGRhdGEtJHthdHRyfWAsICcnKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBib3gucmVtb3ZlQXR0cmlidXRlKGBkYXRhLSR7YXR0cn1gKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIgPSB7fTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgdHlwZSBUaXBweU1vZGlmaWVyID0gTW9kaWZpZXI8JyQkdGlwcHknLCBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPj47XG4gICAgdHlwZSBFeHRlbmRlZE1vZGlmaWVycyA9IFN0cmljdE1vZGlmaWVycyB8IFBhcnRpYWw8VGlwcHlNb2RpZmllcj47XG5cbiAgICBjb25zdCBtb2RpZmllcnM6IEFycmF5PEV4dGVuZGVkTW9kaWZpZXJzPiA9IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ29mZnNldCcsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICBvZmZzZXQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAncHJldmVudE92ZXJmbG93JyxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIHBhZGRpbmc6IHtcbiAgICAgICAgICAgIHRvcDogMixcbiAgICAgICAgICAgIGJvdHRvbTogMixcbiAgICAgICAgICAgIGxlZnQ6IDUsXG4gICAgICAgICAgICByaWdodDogNSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2ZsaXAnLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgcGFkZGluZzogNSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdjb21wdXRlU3R5bGVzJyxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIGFkYXB0aXZlOiAhbW92ZVRyYW5zaXRpb24sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgdGlwcHlNb2RpZmllcixcbiAgICBdO1xuXG4gICAgaWYgKGdldElzRGVmYXVsdFJlbmRlckZuKCkgJiYgYXJyb3cpIHtcbiAgICAgIG1vZGlmaWVycy5wdXNoKHtcbiAgICAgICAgbmFtZTogJ2Fycm93JyxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIGVsZW1lbnQ6IGFycm93LFxuICAgICAgICAgIHBhZGRpbmc6IDMsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBtb2RpZmllcnMucHVzaCguLi4ocG9wcGVyT3B0aW9ucz8ubW9kaWZpZXJzIHx8IFtdKSk7XG5cbiAgICBpbnN0YW5jZS5wb3BwZXJJbnN0YW5jZSA9IGNyZWF0ZVBvcHBlcjxFeHRlbmRlZE1vZGlmaWVycz4oXG4gICAgICBjb21wdXRlZFJlZmVyZW5jZSxcbiAgICAgIHBvcHBlcixcbiAgICAgIHtcbiAgICAgICAgLi4ucG9wcGVyT3B0aW9ucyxcbiAgICAgICAgcGxhY2VtZW50LFxuICAgICAgICBvbkZpcnN0VXBkYXRlLFxuICAgICAgICBtb2RpZmllcnMsXG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlc3Ryb3lQb3BwZXJJbnN0YW5jZSgpOiB2b2lkIHtcbiAgICBpZiAoaW5zdGFuY2UucG9wcGVySW5zdGFuY2UpIHtcbiAgICAgIGluc3RhbmNlLnBvcHBlckluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICAgIGluc3RhbmNlLnBvcHBlckluc3RhbmNlID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBtb3VudCgpOiB2b2lkIHtcbiAgICBjb25zdCB7YXBwZW5kVG99ID0gaW5zdGFuY2UucHJvcHM7XG5cbiAgICBsZXQgcGFyZW50Tm9kZTogYW55O1xuXG4gICAgLy8gQnkgZGVmYXVsdCwgd2UnbGwgYXBwZW5kIHRoZSBwb3BwZXIgdG8gdGhlIHRyaWdnZXJUYXJnZXRzJ3MgcGFyZW50Tm9kZSBzb1xuICAgIC8vIGl0J3MgZGlyZWN0bHkgYWZ0ZXIgdGhlIHJlZmVyZW5jZSBlbGVtZW50IHNvIHRoZSBlbGVtZW50cyBpbnNpZGUgdGhlXG4gICAgLy8gdGlwcHkgY2FuIGJlIHRhYmJlZCB0b1xuICAgIC8vIElmIHRoZXJlIGFyZSBjbGlwcGluZyBpc3N1ZXMsIHRoZSB1c2VyIGNhbiBzcGVjaWZ5IGEgZGlmZmVyZW50IGFwcGVuZFRvXG4gICAgLy8gYW5kIGVuc3VyZSBmb2N1cyBtYW5hZ2VtZW50IGlzIGhhbmRsZWQgY29ycmVjdGx5IG1hbnVhbGx5XG4gICAgY29uc3Qgbm9kZSA9IGdldEN1cnJlbnRUYXJnZXQoKTtcblxuICAgIGlmIChcbiAgICAgIChpbnN0YW5jZS5wcm9wcy5pbnRlcmFjdGl2ZSAmJiBhcHBlbmRUbyA9PT0gVElQUFlfREVGQVVMVF9BUFBFTkRfVE8pIHx8XG4gICAgICBhcHBlbmRUbyA9PT0gJ3BhcmVudCdcbiAgICApIHtcbiAgICAgIHBhcmVudE5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmVudE5vZGUgPSBpbnZva2VXaXRoQXJnc09yUmV0dXJuKGFwcGVuZFRvLCBbbm9kZV0pO1xuICAgIH1cblxuICAgIC8vIFRoZSBwb3BwZXIgZWxlbWVudCBuZWVkcyB0byBleGlzdCBvbiB0aGUgRE9NIGJlZm9yZSBpdHMgcG9zaXRpb24gY2FuIGJlXG4gICAgLy8gdXBkYXRlZCBhcyBQb3BwZXIgbmVlZHMgdG8gcmVhZCBpdHMgZGltZW5zaW9uc1xuICAgIGlmICghcGFyZW50Tm9kZS5jb250YWlucyhwb3BwZXIpKSB7XG4gICAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKHBvcHBlcik7XG4gICAgfVxuXG4gICAgaW5zdGFuY2Uuc3RhdGUuaXNNb3VudGVkID0gdHJ1ZTtcblxuICAgIGNyZWF0ZVBvcHBlckluc3RhbmNlKCk7XG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICAvLyBBY2Nlc3NpYmlsaXR5IGNoZWNrXG4gICAgICB3YXJuV2hlbihcbiAgICAgICAgaW5zdGFuY2UucHJvcHMuaW50ZXJhY3RpdmUgJiZcbiAgICAgICAgICBhcHBlbmRUbyA9PT0gZGVmYXVsdFByb3BzLmFwcGVuZFRvICYmXG4gICAgICAgICAgbm9kZS5uZXh0RWxlbWVudFNpYmxpbmcgIT09IHBvcHBlcixcbiAgICAgICAgW1xuICAgICAgICAgICdJbnRlcmFjdGl2ZSB0aXBweSBlbGVtZW50IG1heSBub3QgYmUgYWNjZXNzaWJsZSB2aWEga2V5Ym9hcmQnLFxuICAgICAgICAgICduYXZpZ2F0aW9uIGJlY2F1c2UgaXQgaXMgbm90IGRpcmVjdGx5IGFmdGVyIHRoZSByZWZlcmVuY2UgZWxlbWVudCcsXG4gICAgICAgICAgJ2luIHRoZSBET00gc291cmNlIG9yZGVyLicsXG4gICAgICAgICAgJ1xcblxcbicsXG4gICAgICAgICAgJ1VzaW5nIGEgd3JhcHBlciA8ZGl2PiBvciA8c3Bhbj4gdGFnIGFyb3VuZCB0aGUgcmVmZXJlbmNlIGVsZW1lbnQnLFxuICAgICAgICAgICdzb2x2ZXMgdGhpcyBieSBjcmVhdGluZyBhIG5ldyBwYXJlbnROb2RlIGNvbnRleHQuJyxcbiAgICAgICAgICAnXFxuXFxuJyxcbiAgICAgICAgICAnU3BlY2lmeWluZyBgYXBwZW5kVG86IGRvY3VtZW50LmJvZHlgIHNpbGVuY2VzIHRoaXMgd2FybmluZywgYnV0IGl0JyxcbiAgICAgICAgICAnYXNzdW1lcyB5b3UgYXJlIHVzaW5nIGEgZm9jdXMgbWFuYWdlbWVudCBzb2x1dGlvbiB0byBoYW5kbGUnLFxuICAgICAgICAgICdrZXlib2FyZCBuYXZpZ2F0aW9uLicsXG4gICAgICAgICAgJ1xcblxcbicsXG4gICAgICAgICAgJ1NlZTogaHR0cHM6Ly9hdG9taWtzLmdpdGh1Yi5pby90aXBweWpzL3Y2L2FjY2Vzc2liaWxpdHkvI2ludGVyYWN0aXZpdHknLFxuICAgICAgICBdLmpvaW4oJyAnKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXROZXN0ZWRQb3BwZXJUcmVlKCk6IFBvcHBlckVsZW1lbnRbXSB7XG4gICAgcmV0dXJuIGFycmF5RnJvbShcbiAgICAgIHBvcHBlci5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1fX05BTUVTUEFDRV9QUkVGSVhfXy1yb290XScpXG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNjaGVkdWxlU2hvdyhldmVudD86IEV2ZW50KTogdm9pZCB7XG4gICAgaW5zdGFuY2UuY2xlYXJEZWxheVRpbWVvdXRzKCk7XG5cbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGludm9rZUhvb2soJ29uVHJpZ2dlcicsIFtpbnN0YW5jZSwgZXZlbnRdKTtcbiAgICB9XG5cbiAgICBhZGREb2N1bWVudFByZXNzKCk7XG5cbiAgICBsZXQgZGVsYXkgPSBnZXREZWxheSh0cnVlKTtcbiAgICBjb25zdCBbdG91Y2hWYWx1ZSwgdG91Y2hEZWxheV0gPSBnZXROb3JtYWxpemVkVG91Y2hTZXR0aW5ncygpO1xuXG4gICAgaWYgKGN1cnJlbnRJbnB1dC5pc1RvdWNoICYmIHRvdWNoVmFsdWUgPT09ICdob2xkJyAmJiB0b3VjaERlbGF5KSB7XG4gICAgICBkZWxheSA9IHRvdWNoRGVsYXk7XG4gICAgfVxuXG4gICAgaWYgKGRlbGF5KSB7XG4gICAgICBzaG93VGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpbnN0YW5jZS5zaG93KCk7XG4gICAgICB9LCBkZWxheSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluc3RhbmNlLnNob3coKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzY2hlZHVsZUhpZGUoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgaW5zdGFuY2UuY2xlYXJEZWxheVRpbWVvdXRzKCk7XG5cbiAgICBpbnZva2VIb29rKCdvblVudHJpZ2dlcicsIFtpbnN0YW5jZSwgZXZlbnRdKTtcblxuICAgIGlmICghaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlKSB7XG4gICAgICByZW1vdmVEb2N1bWVudFByZXNzKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBGb3IgaW50ZXJhY3RpdmUgdGlwcGllcywgc2NoZWR1bGVIaWRlIGlzIGFkZGVkIHRvIGEgZG9jdW1lbnQuYm9keSBoYW5kbGVyXG4gICAgLy8gZnJvbSBvbk1vdXNlTGVhdmUgc28gbXVzdCBpbnRlcmNlcHQgc2NoZWR1bGVkIGhpZGVzIGZyb20gbW91c2Vtb3ZlL2xlYXZlXG4gICAgLy8gZXZlbnRzIHdoZW4gdHJpZ2dlciBjb250YWlucyBtb3VzZWVudGVyIGFuZCBjbGljaywgYW5kIHRoZSB0aXAgaXNcbiAgICAvLyBjdXJyZW50bHkgc2hvd24gYXMgYSByZXN1bHQgb2YgYSBjbGljay5cbiAgICBpZiAoXG4gICAgICBpbnN0YW5jZS5wcm9wcy50cmlnZ2VyLmluZGV4T2YoJ21vdXNlZW50ZXInKSA+PSAwICYmXG4gICAgICBpbnN0YW5jZS5wcm9wcy50cmlnZ2VyLmluZGV4T2YoJ2NsaWNrJykgPj0gMCAmJlxuICAgICAgWydtb3VzZWxlYXZlJywgJ21vdXNlbW92ZSddLmluZGV4T2YoZXZlbnQudHlwZSkgPj0gMCAmJlxuICAgICAgaXNWaXNpYmxlRnJvbUNsaWNrXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZGVsYXkgPSBnZXREZWxheShmYWxzZSk7XG5cbiAgICBpZiAoZGVsYXkpIHtcbiAgICAgIGhpZGVUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmIChpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGUpIHtcbiAgICAgICAgICBpbnN0YW5jZS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0sIGRlbGF5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRml4ZXMgYSBgdHJhbnNpdGlvbmVuZGAgcHJvYmxlbSB3aGVuIGl0IGZpcmVzIDEgZnJhbWUgdG9vXG4gICAgICAvLyBsYXRlIHNvbWV0aW1lcywgd2UgZG9uJ3Qgd2FudCBoaWRlKCkgdG8gYmUgY2FsbGVkLlxuICAgICAgc2NoZWR1bGVIaWRlQW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICBpbnN0YW5jZS5oaWRlKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8g8J+UkSBQdWJsaWMgbWV0aG9kc1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgZnVuY3Rpb24gZW5hYmxlKCk6IHZvaWQge1xuICAgIGluc3RhbmNlLnN0YXRlLmlzRW5hYmxlZCA9IHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBkaXNhYmxlKCk6IHZvaWQge1xuICAgIC8vIERpc2FibGluZyB0aGUgaW5zdGFuY2Ugc2hvdWxkIGFsc28gaGlkZSBpdFxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hdG9taWtzL3RpcHB5LmpzLXJlYWN0L2lzc3Vlcy8xMDZcbiAgICBpbnN0YW5jZS5oaWRlKCk7XG4gICAgaW5zdGFuY2Uuc3RhdGUuaXNFbmFibGVkID0gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhckRlbGF5VGltZW91dHMoKTogdm9pZCB7XG4gICAgY2xlYXJUaW1lb3V0KHNob3dUaW1lb3V0KTtcbiAgICBjbGVhclRpbWVvdXQoaGlkZVRpbWVvdXQpO1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHNjaGVkdWxlSGlkZUFuaW1hdGlvbkZyYW1lKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFByb3BzKHBhcnRpYWxQcm9wczogUGFydGlhbDxQcm9wcz4pOiB2b2lkIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICB3YXJuV2hlbihpbnN0YW5jZS5zdGF0ZS5pc0Rlc3Ryb3llZCwgY3JlYXRlTWVtb3J5TGVha1dhcm5pbmcoJ3NldFByb3BzJykpO1xuICAgIH1cblxuICAgIGlmIChpbnN0YW5jZS5zdGF0ZS5pc0Rlc3Ryb3llZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGludm9rZUhvb2soJ29uQmVmb3JlVXBkYXRlJywgW2luc3RhbmNlLCBwYXJ0aWFsUHJvcHNdKTtcblxuICAgIHJlbW92ZUxpc3RlbmVycygpO1xuXG4gICAgY29uc3QgcHJldlByb3BzID0gaW5zdGFuY2UucHJvcHM7XG4gICAgY29uc3QgbmV4dFByb3BzID0gZXZhbHVhdGVQcm9wcyhyZWZlcmVuY2UsIHtcbiAgICAgIC4uLnByZXZQcm9wcyxcbiAgICAgIC4uLnJlbW92ZVVuZGVmaW5lZFByb3BzKHBhcnRpYWxQcm9wcyksXG4gICAgICBpZ25vcmVBdHRyaWJ1dGVzOiB0cnVlLFxuICAgIH0pO1xuXG4gICAgaW5zdGFuY2UucHJvcHMgPSBuZXh0UHJvcHM7XG5cbiAgICBhZGRMaXN0ZW5lcnMoKTtcblxuICAgIGlmIChwcmV2UHJvcHMuaW50ZXJhY3RpdmVEZWJvdW5jZSAhPT0gbmV4dFByb3BzLmludGVyYWN0aXZlRGVib3VuY2UpIHtcbiAgICAgIGNsZWFudXBJbnRlcmFjdGl2ZU1vdXNlTGlzdGVuZXJzKCk7XG4gICAgICBkZWJvdW5jZWRPbk1vdXNlTW92ZSA9IGRlYm91bmNlKFxuICAgICAgICBvbk1vdXNlTW92ZSxcbiAgICAgICAgbmV4dFByb3BzLmludGVyYWN0aXZlRGVib3VuY2VcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gRW5zdXJlIHN0YWxlIGFyaWEtZXhwYW5kZWQgYXR0cmlidXRlcyBhcmUgcmVtb3ZlZFxuICAgIGlmIChwcmV2UHJvcHMudHJpZ2dlclRhcmdldCAmJiAhbmV4dFByb3BzLnRyaWdnZXJUYXJnZXQpIHtcbiAgICAgIG5vcm1hbGl6ZVRvQXJyYXkocHJldlByb3BzLnRyaWdnZXJUYXJnZXQpLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAobmV4dFByb3BzLnRyaWdnZXJUYXJnZXQpIHtcbiAgICAgIHJlZmVyZW5jZS5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKTtcbiAgICB9XG5cbiAgICBoYW5kbGVBcmlhRXhwYW5kZWRBdHRyaWJ1dGUoKTtcbiAgICBoYW5kbGVTdHlsZXMoKTtcblxuICAgIGlmIChvblVwZGF0ZSkge1xuICAgICAgb25VcGRhdGUocHJldlByb3BzLCBuZXh0UHJvcHMpO1xuICAgIH1cblxuICAgIGlmIChpbnN0YW5jZS5wb3BwZXJJbnN0YW5jZSkge1xuICAgICAgY3JlYXRlUG9wcGVySW5zdGFuY2UoKTtcblxuICAgICAgLy8gRml4ZXMgYW4gaXNzdWUgd2l0aCBuZXN0ZWQgdGlwcGllcyBpZiB0aGV5IGFyZSBhbGwgZ2V0dGluZyByZS1yZW5kZXJlZCxcbiAgICAgIC8vIGFuZCB0aGUgbmVzdGVkIG9uZXMgZ2V0IHJlLXJlbmRlcmVkIGZpcnN0LlxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2F0b21pa3MvdGlwcHlqcy1yZWFjdC9pc3N1ZXMvMTc3XG4gICAgICAvLyBUT0RPOiBmaW5kIGEgY2xlYW5lciAvIG1vcmUgZWZmaWNpZW50IHNvbHV0aW9uKCEpXG4gICAgICBnZXROZXN0ZWRQb3BwZXJUcmVlKCkuZm9yRWFjaCgobmVzdGVkUG9wcGVyKSA9PiB7XG4gICAgICAgIC8vIFJlYWN0IChhbmQgb3RoZXIgVUkgbGlicyBsaWtlbHkpIHJlcXVpcmVzIGEgckFGIHdyYXBwZXIgYXMgaXQgZmx1c2hlc1xuICAgICAgICAvLyBpdHMgd29yayBpbiBvbmVcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKG5lc3RlZFBvcHBlci5fdGlwcHkhLnBvcHBlckluc3RhbmNlIS5mb3JjZVVwZGF0ZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpbnZva2VIb29rKCdvbkFmdGVyVXBkYXRlJywgW2luc3RhbmNlLCBwYXJ0aWFsUHJvcHNdKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldENvbnRlbnQoY29udGVudDogQ29udGVudCk6IHZvaWQge1xuICAgIGluc3RhbmNlLnNldFByb3BzKHtjb250ZW50fSk7XG4gIH1cblxuICBmdW5jdGlvbiBzaG93KCk6IHZvaWQge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKF9fREVWX18pIHtcbiAgICAgIHdhcm5XaGVuKGluc3RhbmNlLnN0YXRlLmlzRGVzdHJveWVkLCBjcmVhdGVNZW1vcnlMZWFrV2FybmluZygnc2hvdycpKTtcbiAgICB9XG5cbiAgICAvLyBFYXJseSBiYWlsLW91dFxuICAgIGNvbnN0IGlzQWxyZWFkeVZpc2libGUgPSBpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGU7XG4gICAgY29uc3QgaXNEZXN0cm95ZWQgPSBpbnN0YW5jZS5zdGF0ZS5pc0Rlc3Ryb3llZDtcbiAgICBjb25zdCBpc0Rpc2FibGVkID0gIWluc3RhbmNlLnN0YXRlLmlzRW5hYmxlZDtcbiAgICBjb25zdCBpc1RvdWNoQW5kVG91Y2hEaXNhYmxlZCA9XG4gICAgICBjdXJyZW50SW5wdXQuaXNUb3VjaCAmJiAhaW5zdGFuY2UucHJvcHMudG91Y2g7XG4gICAgY29uc3QgZHVyYXRpb24gPSBnZXRWYWx1ZUF0SW5kZXhPclJldHVybihcbiAgICAgIGluc3RhbmNlLnByb3BzLmR1cmF0aW9uLFxuICAgICAgMCxcbiAgICAgIGRlZmF1bHRQcm9wcy5kdXJhdGlvblxuICAgICk7XG5cbiAgICBpZiAoXG4gICAgICBpc0FscmVhZHlWaXNpYmxlIHx8XG4gICAgICBpc0Rlc3Ryb3llZCB8fFxuICAgICAgaXNEaXNhYmxlZCB8fFxuICAgICAgaXNUb3VjaEFuZFRvdWNoRGlzYWJsZWRcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBOb3JtYWxpemUgYGRpc2FibGVkYCBiZWhhdmlvciBhY3Jvc3MgYnJvd3NlcnMuXG4gICAgLy8gRmlyZWZveCBhbGxvd3MgZXZlbnRzIG9uIGRpc2FibGVkIGVsZW1lbnRzLCBidXQgQ2hyb21lIGRvZXNuJ3QuXG4gICAgLy8gVXNpbmcgYSB3cmFwcGVyIGVsZW1lbnQgKGkuZS4gPHNwYW4+KSBpcyByZWNvbW1lbmRlZC5cbiAgICBpZiAoZ2V0Q3VycmVudFRhcmdldCgpLmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGludm9rZUhvb2soJ29uU2hvdycsIFtpbnN0YW5jZV0sIGZhbHNlKTtcbiAgICBpZiAoaW5zdGFuY2UucHJvcHMub25TaG93KGluc3RhbmNlKSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGUgPSB0cnVlO1xuXG4gICAgaWYgKGdldElzRGVmYXVsdFJlbmRlckZuKCkpIHtcbiAgICAgIHBvcHBlci5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgIH1cblxuICAgIGhhbmRsZVN0eWxlcygpO1xuICAgIGFkZERvY3VtZW50UHJlc3MoKTtcblxuICAgIGlmICghaW5zdGFuY2Uuc3RhdGUuaXNNb3VudGVkKSB7XG4gICAgICBwb3BwZXIuc3R5bGUudHJhbnNpdGlvbiA9ICdub25lJztcbiAgICB9XG5cbiAgICAvLyBJZiBmbGlwcGluZyB0byB0aGUgb3Bwb3NpdGUgc2lkZSBhZnRlciBoaWRpbmcgYXQgbGVhc3Qgb25jZSwgdGhlXG4gICAgLy8gYW5pbWF0aW9uIHdpbGwgdXNlIHRoZSB3cm9uZyBwbGFjZW1lbnQgd2l0aG91dCByZXNldHRpbmcgdGhlIGR1cmF0aW9uXG4gICAgaWYgKGdldElzRGVmYXVsdFJlbmRlckZuKCkpIHtcbiAgICAgIGNvbnN0IHtib3gsIGNvbnRlbnR9ID0gZ2V0RGVmYXVsdFRlbXBsYXRlQ2hpbGRyZW4oKTtcbiAgICAgIHNldFRyYW5zaXRpb25EdXJhdGlvbihbYm94LCBjb250ZW50XSwgMCk7XG4gICAgfVxuXG4gICAgb25GaXJzdFVwZGF0ZSA9ICgpOiB2b2lkID0+IHtcbiAgICAgIGlmICghaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlIHx8IGlnbm9yZU9uRmlyc3RVcGRhdGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZ25vcmVPbkZpcnN0VXBkYXRlID0gdHJ1ZTtcblxuICAgICAgLy8gcmVmbG93XG4gICAgICB2b2lkIHBvcHBlci5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgIHBvcHBlci5zdHlsZS50cmFuc2l0aW9uID0gaW5zdGFuY2UucHJvcHMubW92ZVRyYW5zaXRpb247XG5cbiAgICAgIGlmIChnZXRJc0RlZmF1bHRSZW5kZXJGbigpICYmIGluc3RhbmNlLnByb3BzLmFuaW1hdGlvbikge1xuICAgICAgICBjb25zdCB7Ym94LCBjb250ZW50fSA9IGdldERlZmF1bHRUZW1wbGF0ZUNoaWxkcmVuKCk7XG4gICAgICAgIHNldFRyYW5zaXRpb25EdXJhdGlvbihbYm94LCBjb250ZW50XSwgZHVyYXRpb24pO1xuICAgICAgICBzZXRWaXNpYmlsaXR5U3RhdGUoW2JveCwgY29udGVudF0sICd2aXNpYmxlJyk7XG4gICAgICB9XG5cbiAgICAgIGhhbmRsZUFyaWFDb250ZW50QXR0cmlidXRlKCk7XG4gICAgICBoYW5kbGVBcmlhRXhwYW5kZWRBdHRyaWJ1dGUoKTtcblxuICAgICAgcHVzaElmVW5pcXVlKG1vdW50ZWRJbnN0YW5jZXMsIGluc3RhbmNlKTtcblxuICAgICAgLy8gY2VydGFpbiBtb2RpZmllcnMgKGUuZy4gYG1heFNpemVgKSByZXF1aXJlIGEgc2Vjb25kIHVwZGF0ZSBhZnRlciB0aGVcbiAgICAgIC8vIHBvcHBlciBoYXMgYmVlbiBwb3NpdGlvbmVkIGZvciB0aGUgZmlyc3QgdGltZVxuICAgICAgaW5zdGFuY2UucG9wcGVySW5zdGFuY2U/LmZvcmNlVXBkYXRlKCk7XG5cbiAgICAgIGludm9rZUhvb2soJ29uTW91bnQnLCBbaW5zdGFuY2VdKTtcblxuICAgICAgaWYgKGluc3RhbmNlLnByb3BzLmFuaW1hdGlvbiAmJiBnZXRJc0RlZmF1bHRSZW5kZXJGbigpKSB7XG4gICAgICAgIG9uVHJhbnNpdGlvbmVkSW4oZHVyYXRpb24sICgpID0+IHtcbiAgICAgICAgICBpbnN0YW5jZS5zdGF0ZS5pc1Nob3duID0gdHJ1ZTtcbiAgICAgICAgICBpbnZva2VIb29rKCdvblNob3duJywgW2luc3RhbmNlXSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBtb3VudCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGlkZSgpOiB2b2lkIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICB3YXJuV2hlbihpbnN0YW5jZS5zdGF0ZS5pc0Rlc3Ryb3llZCwgY3JlYXRlTWVtb3J5TGVha1dhcm5pbmcoJ2hpZGUnKSk7XG4gICAgfVxuXG4gICAgLy8gRWFybHkgYmFpbC1vdXRcbiAgICBjb25zdCBpc0FscmVhZHlIaWRkZW4gPSAhaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlO1xuICAgIGNvbnN0IGlzRGVzdHJveWVkID0gaW5zdGFuY2Uuc3RhdGUuaXNEZXN0cm95ZWQ7XG4gICAgY29uc3QgaXNEaXNhYmxlZCA9ICFpbnN0YW5jZS5zdGF0ZS5pc0VuYWJsZWQ7XG4gICAgY29uc3QgZHVyYXRpb24gPSBnZXRWYWx1ZUF0SW5kZXhPclJldHVybihcbiAgICAgIGluc3RhbmNlLnByb3BzLmR1cmF0aW9uLFxuICAgICAgMSxcbiAgICAgIGRlZmF1bHRQcm9wcy5kdXJhdGlvblxuICAgICk7XG5cbiAgICBpZiAoaXNBbHJlYWR5SGlkZGVuIHx8IGlzRGVzdHJveWVkIHx8IGlzRGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpbnZva2VIb29rKCdvbkhpZGUnLCBbaW5zdGFuY2VdLCBmYWxzZSk7XG4gICAgaWYgKGluc3RhbmNlLnByb3BzLm9uSGlkZShpbnN0YW5jZSkgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlID0gZmFsc2U7XG4gICAgaW5zdGFuY2Uuc3RhdGUuaXNTaG93biA9IGZhbHNlO1xuICAgIGlnbm9yZU9uRmlyc3RVcGRhdGUgPSBmYWxzZTtcbiAgICBpc1Zpc2libGVGcm9tQ2xpY2sgPSBmYWxzZTtcblxuICAgIGlmIChnZXRJc0RlZmF1bHRSZW5kZXJGbigpKSB7XG4gICAgICBwb3BwZXIuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIH1cblxuICAgIGNsZWFudXBJbnRlcmFjdGl2ZU1vdXNlTGlzdGVuZXJzKCk7XG4gICAgcmVtb3ZlRG9jdW1lbnRQcmVzcygpO1xuICAgIGhhbmRsZVN0eWxlcyh0cnVlKTtcblxuICAgIGlmIChnZXRJc0RlZmF1bHRSZW5kZXJGbigpKSB7XG4gICAgICBjb25zdCB7Ym94LCBjb250ZW50fSA9IGdldERlZmF1bHRUZW1wbGF0ZUNoaWxkcmVuKCk7XG5cbiAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5hbmltYXRpb24pIHtcbiAgICAgICAgc2V0VHJhbnNpdGlvbkR1cmF0aW9uKFtib3gsIGNvbnRlbnRdLCBkdXJhdGlvbik7XG4gICAgICAgIHNldFZpc2liaWxpdHlTdGF0ZShbYm94LCBjb250ZW50XSwgJ2hpZGRlbicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUFyaWFDb250ZW50QXR0cmlidXRlKCk7XG4gICAgaGFuZGxlQXJpYUV4cGFuZGVkQXR0cmlidXRlKCk7XG5cbiAgICBpZiAoaW5zdGFuY2UucHJvcHMuYW5pbWF0aW9uKSB7XG4gICAgICBpZiAoZ2V0SXNEZWZhdWx0UmVuZGVyRm4oKSkge1xuICAgICAgICBvblRyYW5zaXRpb25lZE91dChkdXJhdGlvbiwgaW5zdGFuY2UudW5tb3VudCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGluc3RhbmNlLnVubW91bnQoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoaWRlV2l0aEludGVyYWN0aXZpdHkoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICB3YXJuV2hlbihcbiAgICAgICAgaW5zdGFuY2Uuc3RhdGUuaXNEZXN0cm95ZWQsXG4gICAgICAgIGNyZWF0ZU1lbW9yeUxlYWtXYXJuaW5nKCdoaWRlV2l0aEludGVyYWN0aXZpdHknKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBnZXREb2N1bWVudCgpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGRlYm91bmNlZE9uTW91c2VNb3ZlKTtcbiAgICBwdXNoSWZVbmlxdWUobW91c2VNb3ZlTGlzdGVuZXJzLCBkZWJvdW5jZWRPbk1vdXNlTW92ZSk7XG4gICAgZGVib3VuY2VkT25Nb3VzZU1vdmUoZXZlbnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gdW5tb3VudCgpOiB2b2lkIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICB3YXJuV2hlbihpbnN0YW5jZS5zdGF0ZS5pc0Rlc3Ryb3llZCwgY3JlYXRlTWVtb3J5TGVha1dhcm5pbmcoJ3VubW91bnQnKSk7XG4gICAgfVxuXG4gICAgaWYgKGluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZSkge1xuICAgICAgaW5zdGFuY2UuaGlkZSgpO1xuICAgIH1cblxuICAgIGlmICghaW5zdGFuY2Uuc3RhdGUuaXNNb3VudGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZGVzdHJveVBvcHBlckluc3RhbmNlKCk7XG5cbiAgICAvLyBJZiBhIHBvcHBlciBpcyBub3QgaW50ZXJhY3RpdmUsIGl0IHdpbGwgYmUgYXBwZW5kZWQgb3V0c2lkZSB0aGUgcG9wcGVyXG4gICAgLy8gdHJlZSBieSBkZWZhdWx0LiBUaGlzIHNlZW1zIG1haW5seSBmb3IgaW50ZXJhY3RpdmUgdGlwcGllcywgYnV0IHdlIHNob3VsZFxuICAgIC8vIGZpbmQgYSB3b3JrYXJvdW5kIGlmIHBvc3NpYmxlXG4gICAgZ2V0TmVzdGVkUG9wcGVyVHJlZSgpLmZvckVhY2goKG5lc3RlZFBvcHBlcikgPT4ge1xuICAgICAgbmVzdGVkUG9wcGVyLl90aXBweSEudW5tb3VudCgpO1xuICAgIH0pO1xuXG4gICAgaWYgKHBvcHBlci5wYXJlbnROb2RlKSB7XG4gICAgICBwb3BwZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChwb3BwZXIpO1xuICAgIH1cblxuICAgIG1vdW50ZWRJbnN0YW5jZXMgPSBtb3VudGVkSW5zdGFuY2VzLmZpbHRlcigoaSkgPT4gaSAhPT0gaW5zdGFuY2UpO1xuXG4gICAgaW5zdGFuY2Uuc3RhdGUuaXNNb3VudGVkID0gZmFsc2U7XG4gICAgaW52b2tlSG9vaygnb25IaWRkZW4nLCBbaW5zdGFuY2VdKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAoX19ERVZfXykge1xuICAgICAgd2FybldoZW4oaW5zdGFuY2Uuc3RhdGUuaXNEZXN0cm95ZWQsIGNyZWF0ZU1lbW9yeUxlYWtXYXJuaW5nKCdkZXN0cm95JykpO1xuICAgIH1cblxuICAgIGlmIChpbnN0YW5jZS5zdGF0ZS5pc0Rlc3Ryb3llZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGluc3RhbmNlLmNsZWFyRGVsYXlUaW1lb3V0cygpO1xuICAgIGluc3RhbmNlLnVubW91bnQoKTtcblxuICAgIHJlbW92ZUxpc3RlbmVycygpO1xuXG4gICAgZGVsZXRlIHJlZmVyZW5jZS5fdGlwcHk7XG5cbiAgICBpbnN0YW5jZS5zdGF0ZS5pc0Rlc3Ryb3llZCA9IHRydWU7XG5cbiAgICBpbnZva2VIb29rKCdvbkRlc3Ryb3knLCBbaW5zdGFuY2VdKTtcbiAgfVxufVxuIiwgImltcG9ydCBiaW5kR2xvYmFsRXZlbnRMaXN0ZW5lcnMsIHtcbiAgY3VycmVudElucHV0LFxufSBmcm9tICcuL2JpbmRHbG9iYWxFdmVudExpc3RlbmVycyc7XG5pbXBvcnQgY3JlYXRlVGlwcHksIHttb3VudGVkSW5zdGFuY2VzfSBmcm9tICcuL2NyZWF0ZVRpcHB5JztcbmltcG9ydCB7Z2V0QXJyYXlPZkVsZW1lbnRzLCBpc0VsZW1lbnQsIGlzUmVmZXJlbmNlRWxlbWVudH0gZnJvbSAnLi9kb20tdXRpbHMnO1xuaW1wb3J0IHtkZWZhdWx0UHJvcHMsIHNldERlZmF1bHRQcm9wcywgdmFsaWRhdGVQcm9wc30gZnJvbSAnLi9wcm9wcyc7XG5pbXBvcnQge0hpZGVBbGwsIEhpZGVBbGxPcHRpb25zLCBJbnN0YW5jZSwgUHJvcHMsIFRhcmdldHN9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHt2YWxpZGF0ZVRhcmdldHMsIHdhcm5XaGVufSBmcm9tICcuL3ZhbGlkYXRpb24nO1xuXG5mdW5jdGlvbiB0aXBweShcbiAgdGFyZ2V0czogVGFyZ2V0cyxcbiAgb3B0aW9uYWxQcm9wczogUGFydGlhbDxQcm9wcz4gPSB7fVxuKTogSW5zdGFuY2UgfCBJbnN0YW5jZVtdIHtcbiAgY29uc3QgcGx1Z2lucyA9IGRlZmF1bHRQcm9wcy5wbHVnaW5zLmNvbmNhdChvcHRpb25hbFByb3BzLnBsdWdpbnMgfHwgW10pO1xuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gIGlmIChfX0RFVl9fKSB7XG4gICAgdmFsaWRhdGVUYXJnZXRzKHRhcmdldHMpO1xuICAgIHZhbGlkYXRlUHJvcHMob3B0aW9uYWxQcm9wcywgcGx1Z2lucyk7XG4gIH1cblxuICBiaW5kR2xvYmFsRXZlbnRMaXN0ZW5lcnMoKTtcblxuICBjb25zdCBwYXNzZWRQcm9wczogUGFydGlhbDxQcm9wcz4gPSB7Li4ub3B0aW9uYWxQcm9wcywgcGx1Z2luc307XG5cbiAgY29uc3QgZWxlbWVudHMgPSBnZXRBcnJheU9mRWxlbWVudHModGFyZ2V0cyk7XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKF9fREVWX18pIHtcbiAgICBjb25zdCBpc1NpbmdsZUNvbnRlbnRFbGVtZW50ID0gaXNFbGVtZW50KHBhc3NlZFByb3BzLmNvbnRlbnQpO1xuICAgIGNvbnN0IGlzTW9yZVRoYW5PbmVSZWZlcmVuY2VFbGVtZW50ID0gZWxlbWVudHMubGVuZ3RoID4gMTtcbiAgICB3YXJuV2hlbihcbiAgICAgIGlzU2luZ2xlQ29udGVudEVsZW1lbnQgJiYgaXNNb3JlVGhhbk9uZVJlZmVyZW5jZUVsZW1lbnQsXG4gICAgICBbXG4gICAgICAgICd0aXBweSgpIHdhcyBwYXNzZWQgYW4gRWxlbWVudCBhcyB0aGUgYGNvbnRlbnRgIHByb3AsIGJ1dCBtb3JlIHRoYW4nLFxuICAgICAgICAnb25lIHRpcHB5IGluc3RhbmNlIHdhcyBjcmVhdGVkIGJ5IHRoaXMgaW52b2NhdGlvbi4gVGhpcyBtZWFucyB0aGUnLFxuICAgICAgICAnY29udGVudCBlbGVtZW50IHdpbGwgb25seSBiZSBhcHBlbmRlZCB0byB0aGUgbGFzdCB0aXBweSBpbnN0YW5jZS4nLFxuICAgICAgICAnXFxuXFxuJyxcbiAgICAgICAgJ0luc3RlYWQsIHBhc3MgdGhlIC5pbm5lckhUTUwgb2YgdGhlIGVsZW1lbnQsIG9yIHVzZSBhIGZ1bmN0aW9uIHRoYXQnLFxuICAgICAgICAncmV0dXJucyBhIGNsb25lZCB2ZXJzaW9uIG9mIHRoZSBlbGVtZW50IGluc3RlYWQuJyxcbiAgICAgICAgJ1xcblxcbicsXG4gICAgICAgICcxKSBjb250ZW50OiBlbGVtZW50LmlubmVySFRNTFxcbicsXG4gICAgICAgICcyKSBjb250ZW50OiAoKSA9PiBlbGVtZW50LmNsb25lTm9kZSh0cnVlKScsXG4gICAgICBdLmpvaW4oJyAnKVxuICAgICk7XG4gIH1cblxuICBjb25zdCBpbnN0YW5jZXMgPSBlbGVtZW50cy5yZWR1Y2U8SW5zdGFuY2VbXT4oXG4gICAgKGFjYywgcmVmZXJlbmNlKTogSW5zdGFuY2VbXSA9PiB7XG4gICAgICBjb25zdCBpbnN0YW5jZSA9IHJlZmVyZW5jZSAmJiBjcmVhdGVUaXBweShyZWZlcmVuY2UsIHBhc3NlZFByb3BzKTtcblxuICAgICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgIGFjYy5wdXNoKGluc3RhbmNlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LFxuICAgIFtdXG4gICk7XG5cbiAgcmV0dXJuIGlzRWxlbWVudCh0YXJnZXRzKSA/IGluc3RhbmNlc1swXSA6IGluc3RhbmNlcztcbn1cblxudGlwcHkuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xudGlwcHkuc2V0RGVmYXVsdFByb3BzID0gc2V0RGVmYXVsdFByb3BzO1xudGlwcHkuY3VycmVudElucHV0ID0gY3VycmVudElucHV0O1xuXG5leHBvcnQgZGVmYXVsdCB0aXBweTtcblxuZXhwb3J0IGNvbnN0IGhpZGVBbGw6IEhpZGVBbGwgPSAoe1xuICBleGNsdWRlOiBleGNsdWRlZFJlZmVyZW5jZU9ySW5zdGFuY2UsXG4gIGR1cmF0aW9uLFxufTogSGlkZUFsbE9wdGlvbnMgPSB7fSkgPT4ge1xuICBtb3VudGVkSW5zdGFuY2VzLmZvckVhY2goKGluc3RhbmNlKSA9PiB7XG4gICAgbGV0IGlzRXhjbHVkZWQgPSBmYWxzZTtcblxuICAgIGlmIChleGNsdWRlZFJlZmVyZW5jZU9ySW5zdGFuY2UpIHtcbiAgICAgIGlzRXhjbHVkZWQgPSBpc1JlZmVyZW5jZUVsZW1lbnQoZXhjbHVkZWRSZWZlcmVuY2VPckluc3RhbmNlKVxuICAgICAgICA/IGluc3RhbmNlLnJlZmVyZW5jZSA9PT0gZXhjbHVkZWRSZWZlcmVuY2VPckluc3RhbmNlXG4gICAgICAgIDogaW5zdGFuY2UucG9wcGVyID09PSAoZXhjbHVkZWRSZWZlcmVuY2VPckluc3RhbmNlIGFzIEluc3RhbmNlKS5wb3BwZXI7XG4gICAgfVxuXG4gICAgaWYgKCFpc0V4Y2x1ZGVkKSB7XG4gICAgICBjb25zdCBvcmlnaW5hbER1cmF0aW9uID0gaW5zdGFuY2UucHJvcHMuZHVyYXRpb247XG5cbiAgICAgIGluc3RhbmNlLnNldFByb3BzKHtkdXJhdGlvbn0pO1xuICAgICAgaW5zdGFuY2UuaGlkZSgpO1xuXG4gICAgICBpZiAoIWluc3RhbmNlLnN0YXRlLmlzRGVzdHJveWVkKSB7XG4gICAgICAgIGluc3RhbmNlLnNldFByb3BzKHtkdXJhdGlvbjogb3JpZ2luYWxEdXJhdGlvbn0pO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59O1xuIiwgImltcG9ydCB0aXBweSBmcm9tICcuLic7XG5pbXBvcnQge2Rpdn0gZnJvbSAnLi4vZG9tLXV0aWxzJztcbmltcG9ydCB7XG4gIENyZWF0ZVNpbmdsZXRvbixcbiAgUGx1Z2luLFxuICBDcmVhdGVTaW5nbGV0b25Qcm9wcyxcbiAgUmVmZXJlbmNlRWxlbWVudCxcbiAgQ3JlYXRlU2luZ2xldG9uSW5zdGFuY2UsXG4gIEluc3RhbmNlLFxuICBQcm9wcyxcbn0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHtub3JtYWxpemVUb0FycmF5LCByZW1vdmVQcm9wZXJ0aWVzfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQge2Vycm9yV2hlbn0gZnJvbSAnLi4vdmFsaWRhdGlvbic7XG5pbXBvcnQge2FwcGx5U3R5bGVzLCBNb2RpZmllcn0gZnJvbSAnQHBvcHBlcmpzL2NvcmUnO1xuXG4vLyBUaGUgZGVmYXVsdCBgYXBwbHlTdHlsZXNgIG1vZGlmaWVyIGhhcyBhIGNsZWFudXAgZnVuY3Rpb24gdGhhdCBnZXRzIGNhbGxlZFxuLy8gZXZlcnkgdGltZSB0aGUgcG9wcGVyIGlzIGRlc3Ryb3llZCAoaS5lLiBhIG5ldyB0YXJnZXQpLCByZW1vdmluZyB0aGUgc3R5bGVzXG4vLyBhbmQgY2F1c2luZyB0cmFuc2l0aW9ucyB0byBicmVhayBmb3Igc2luZ2xldG9ucyB3aGVuIHRoZSBjb25zb2xlIGlzIG9wZW4sIGJ1dFxuLy8gbW9zdCBub3RhYmx5IGZvciBub24tdHJhbnNmb3JtIHN0eWxlcyBiZWluZyB1c2VkLCBgZ3B1QWNjZWxlcmF0aW9uOiBmYWxzZWAuXG5jb25zdCBhcHBseVN0eWxlc01vZGlmaWVyOiBNb2RpZmllcjwnYXBwbHlTdHlsZXMnLCBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPj4gPSB7XG4gIC4uLmFwcGx5U3R5bGVzLFxuICBlZmZlY3Qoe3N0YXRlfSkge1xuICAgIGNvbnN0IGluaXRpYWxTdHlsZXMgPSB7XG4gICAgICBwb3BwZXI6IHtcbiAgICAgICAgcG9zaXRpb246IHN0YXRlLm9wdGlvbnMuc3RyYXRlZ3ksXG4gICAgICAgIGxlZnQ6ICcwJyxcbiAgICAgICAgdG9wOiAnMCcsXG4gICAgICAgIG1hcmdpbjogJzAnLFxuICAgICAgfSxcbiAgICAgIGFycm93OiB7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgfSxcbiAgICAgIHJlZmVyZW5jZToge30sXG4gICAgfTtcblxuICAgIE9iamVjdC5hc3NpZ24oc3RhdGUuZWxlbWVudHMucG9wcGVyLnN0eWxlLCBpbml0aWFsU3R5bGVzLnBvcHBlcik7XG4gICAgc3RhdGUuc3R5bGVzID0gaW5pdGlhbFN0eWxlcztcblxuICAgIGlmIChzdGF0ZS5lbGVtZW50cy5hcnJvdykge1xuICAgICAgT2JqZWN0LmFzc2lnbihzdGF0ZS5lbGVtZW50cy5hcnJvdy5zdHlsZSwgaW5pdGlhbFN0eWxlcy5hcnJvdyk7XG4gICAgfVxuXG4gICAgLy8gaW50ZW50aW9uYWxseSByZXR1cm4gbm8gY2xlYW51cCBmdW5jdGlvblxuICAgIC8vIHJldHVybiAoKSA9PiB7IC4uLiB9XG4gIH0sXG59O1xuXG5jb25zdCBjcmVhdGVTaW5nbGV0b246IENyZWF0ZVNpbmdsZXRvbiA9IChcbiAgdGlwcHlJbnN0YW5jZXMsXG4gIG9wdGlvbmFsUHJvcHMgPSB7fVxuKSA9PiB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gIGlmIChfX0RFVl9fKSB7XG4gICAgZXJyb3JXaGVuKFxuICAgICAgIUFycmF5LmlzQXJyYXkodGlwcHlJbnN0YW5jZXMpLFxuICAgICAgW1xuICAgICAgICAnVGhlIGZpcnN0IGFyZ3VtZW50IHBhc3NlZCB0byBjcmVhdGVTaW5nbGV0b24oKSBtdXN0IGJlIGFuIGFycmF5IG9mJyxcbiAgICAgICAgJ3RpcHB5IGluc3RhbmNlcy4gVGhlIHBhc3NlZCB2YWx1ZSB3YXMnLFxuICAgICAgICBTdHJpbmcodGlwcHlJbnN0YW5jZXMpLFxuICAgICAgXS5qb2luKCcgJylcbiAgICApO1xuICB9XG5cbiAgbGV0IGluZGl2aWR1YWxJbnN0YW5jZXMgPSB0aXBweUluc3RhbmNlcztcbiAgbGV0IHJlZmVyZW5jZXM6IEFycmF5PFJlZmVyZW5jZUVsZW1lbnQ+ID0gW107XG4gIGxldCB0cmlnZ2VyVGFyZ2V0czogQXJyYXk8RWxlbWVudD4gPSBbXTtcbiAgbGV0IGN1cnJlbnRUYXJnZXQ6IEVsZW1lbnQgfCBudWxsO1xuICBsZXQgb3ZlcnJpZGVzID0gb3B0aW9uYWxQcm9wcy5vdmVycmlkZXM7XG4gIGxldCBpbnRlcmNlcHRTZXRQcm9wc0NsZWFudXBzOiBBcnJheTwoKSA9PiB2b2lkPiA9IFtdO1xuICBsZXQgc2hvd25PbkNyZWF0ZSA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIHNldFRyaWdnZXJUYXJnZXRzKCk6IHZvaWQge1xuICAgIHRyaWdnZXJUYXJnZXRzID0gaW5kaXZpZHVhbEluc3RhbmNlc1xuICAgICAgLm1hcCgoaW5zdGFuY2UpID0+XG4gICAgICAgIG5vcm1hbGl6ZVRvQXJyYXkoaW5zdGFuY2UucHJvcHMudHJpZ2dlclRhcmdldCB8fCBpbnN0YW5jZS5yZWZlcmVuY2UpXG4gICAgICApXG4gICAgICAucmVkdWNlKChhY2MsIGl0ZW0pID0+IGFjYy5jb25jYXQoaXRlbSksIFtdKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFJlZmVyZW5jZXMoKTogdm9pZCB7XG4gICAgcmVmZXJlbmNlcyA9IGluZGl2aWR1YWxJbnN0YW5jZXMubWFwKChpbnN0YW5jZSkgPT4gaW5zdGFuY2UucmVmZXJlbmNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVuYWJsZUluc3RhbmNlcyhpc0VuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpbmRpdmlkdWFsSW5zdGFuY2VzLmZvckVhY2goKGluc3RhbmNlKSA9PiB7XG4gICAgICBpZiAoaXNFbmFibGVkKSB7XG4gICAgICAgIGluc3RhbmNlLmVuYWJsZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5zdGFuY2UuZGlzYWJsZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaW50ZXJjZXB0U2V0UHJvcHMoc2luZ2xldG9uOiBJbnN0YW5jZSk6IEFycmF5PCgpID0+IHZvaWQ+IHtcbiAgICByZXR1cm4gaW5kaXZpZHVhbEluc3RhbmNlcy5tYXAoKGluc3RhbmNlKSA9PiB7XG4gICAgICBjb25zdCBvcmlnaW5hbFNldFByb3BzID0gaW5zdGFuY2Uuc2V0UHJvcHM7XG5cbiAgICAgIGluc3RhbmNlLnNldFByb3BzID0gKHByb3BzKTogdm9pZCA9PiB7XG4gICAgICAgIG9yaWdpbmFsU2V0UHJvcHMocHJvcHMpO1xuXG4gICAgICAgIGlmIChpbnN0YW5jZS5yZWZlcmVuY2UgPT09IGN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgICBzaW5nbGV0b24uc2V0UHJvcHMocHJvcHMpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gKCk6IHZvaWQgPT4ge1xuICAgICAgICBpbnN0YW5jZS5zZXRQcm9wcyA9IG9yaWdpbmFsU2V0UHJvcHM7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgLy8gaGF2ZSB0byBwYXNzIHNpbmdsZXRvbiwgYXMgaXQgbWF5YmUgdW5kZWZpbmVkIG9uIGZpcnN0IGNhbGxcbiAgZnVuY3Rpb24gcHJlcGFyZUluc3RhbmNlKFxuICAgIHNpbmdsZXRvbjogSW5zdGFuY2UsXG4gICAgdGFyZ2V0OiBSZWZlcmVuY2VFbGVtZW50XG4gICk6IHZvaWQge1xuICAgIGNvbnN0IGluZGV4ID0gdHJpZ2dlclRhcmdldHMuaW5kZXhPZih0YXJnZXQpO1xuXG4gICAgLy8gYmFpbC1vdXRcbiAgICBpZiAodGFyZ2V0ID09PSBjdXJyZW50VGFyZ2V0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY3VycmVudFRhcmdldCA9IHRhcmdldDtcblxuICAgIGNvbnN0IG92ZXJyaWRlUHJvcHM6IFBhcnRpYWw8UHJvcHM+ID0gKG92ZXJyaWRlcyB8fCBbXSlcbiAgICAgIC5jb25jYXQoJ2NvbnRlbnQnKVxuICAgICAgLnJlZHVjZSgoYWNjLCBwcm9wKSA9PiB7XG4gICAgICAgIChhY2MgYXMgYW55KVtwcm9wXSA9IGluZGl2aWR1YWxJbnN0YW5jZXNbaW5kZXhdLnByb3BzW3Byb3BdO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSwge30pO1xuXG4gICAgc2luZ2xldG9uLnNldFByb3BzKHtcbiAgICAgIC4uLm92ZXJyaWRlUHJvcHMsXG4gICAgICBnZXRSZWZlcmVuY2VDbGllbnRSZWN0OlxuICAgICAgICB0eXBlb2Ygb3ZlcnJpZGVQcm9wcy5nZXRSZWZlcmVuY2VDbGllbnRSZWN0ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgPyBvdmVycmlkZVByb3BzLmdldFJlZmVyZW5jZUNsaWVudFJlY3RcbiAgICAgICAgICA6ICgpOiBDbGllbnRSZWN0ID0+IHJlZmVyZW5jZXNbaW5kZXhdPy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICB9KTtcbiAgfVxuXG4gIGVuYWJsZUluc3RhbmNlcyhmYWxzZSk7XG4gIHNldFJlZmVyZW5jZXMoKTtcbiAgc2V0VHJpZ2dlclRhcmdldHMoKTtcblxuICBjb25zdCBwbHVnaW46IFBsdWdpbiA9IHtcbiAgICBmbigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG9uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgICBlbmFibGVJbnN0YW5jZXModHJ1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uSGlkZGVuKCk6IHZvaWQge1xuICAgICAgICAgIGN1cnJlbnRUYXJnZXQgPSBudWxsO1xuICAgICAgICB9LFxuICAgICAgICBvbkNsaWNrT3V0c2lkZShpbnN0YW5jZSk6IHZvaWQge1xuICAgICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5zaG93T25DcmVhdGUgJiYgIXNob3duT25DcmVhdGUpIHtcbiAgICAgICAgICAgIHNob3duT25DcmVhdGUgPSB0cnVlO1xuICAgICAgICAgICAgY3VycmVudFRhcmdldCA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvblNob3coaW5zdGFuY2UpOiB2b2lkIHtcbiAgICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMuc2hvd09uQ3JlYXRlICYmICFzaG93bk9uQ3JlYXRlKSB7XG4gICAgICAgICAgICBzaG93bk9uQ3JlYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIHByZXBhcmVJbnN0YW5jZShpbnN0YW5jZSwgcmVmZXJlbmNlc1swXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvblRyaWdnZXIoaW5zdGFuY2UsIGV2ZW50KTogdm9pZCB7XG4gICAgICAgICAgcHJlcGFyZUluc3RhbmNlKGluc3RhbmNlLCBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEVsZW1lbnQpO1xuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IHNpbmdsZXRvbiA9IHRpcHB5KGRpdigpLCB7XG4gICAgLi4ucmVtb3ZlUHJvcGVydGllcyhvcHRpb25hbFByb3BzLCBbJ292ZXJyaWRlcyddKSxcbiAgICBwbHVnaW5zOiBbcGx1Z2luLCAuLi4ob3B0aW9uYWxQcm9wcy5wbHVnaW5zIHx8IFtdKV0sXG4gICAgdHJpZ2dlclRhcmdldDogdHJpZ2dlclRhcmdldHMsXG4gICAgcG9wcGVyT3B0aW9uczoge1xuICAgICAgLi4ub3B0aW9uYWxQcm9wcy5wb3BwZXJPcHRpb25zLFxuICAgICAgbW9kaWZpZXJzOiBbXG4gICAgICAgIC4uLihvcHRpb25hbFByb3BzLnBvcHBlck9wdGlvbnM/Lm1vZGlmaWVycyB8fCBbXSksXG4gICAgICAgIGFwcGx5U3R5bGVzTW9kaWZpZXIsXG4gICAgICBdLFxuICAgIH0sXG4gIH0pIGFzIENyZWF0ZVNpbmdsZXRvbkluc3RhbmNlPENyZWF0ZVNpbmdsZXRvblByb3BzPjtcblxuICBjb25zdCBvcmlnaW5hbFNob3cgPSBzaW5nbGV0b24uc2hvdztcblxuICBzaW5nbGV0b24uc2hvdyA9ICh0YXJnZXQ/OiBSZWZlcmVuY2VFbGVtZW50IHwgSW5zdGFuY2UgfCBudW1iZXIpOiB2b2lkID0+IHtcbiAgICBvcmlnaW5hbFNob3coKTtcblxuICAgIC8vIGZpcnN0IHRpbWUsIHNob3dPbkNyZWF0ZSBvciBwcm9ncmFtbWF0aWMgY2FsbCB3aXRoIG5vIHBhcmFtc1xuICAgIC8vIGRlZmF1bHQgdG8gc2hvd2luZyBmaXJzdCBpbnN0YW5jZVxuICAgIGlmICghY3VycmVudFRhcmdldCAmJiB0YXJnZXQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHByZXBhcmVJbnN0YW5jZShzaW5nbGV0b24sIHJlZmVyZW5jZXNbMF0pO1xuICAgIH1cblxuICAgIC8vIHRyaWdnZXJlZCBmcm9tIGV2ZW50IChkbyBub3RoaW5nIGFzIHByZXBhcmVJbnN0YW5jZSBhbHJlYWR5IGNhbGxlZCBieSBvblRyaWdnZXIpXG4gICAgLy8gcHJvZ3JhbW1hdGljIGNhbGwgd2l0aCBubyBwYXJhbXMgd2hlbiBhbHJlYWR5IHZpc2libGUgKGRvIG5vdGhpbmcgYWdhaW4pXG4gICAgaWYgKGN1cnJlbnRUYXJnZXQgJiYgdGFyZ2V0ID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyB0YXJnZXQgaXMgaW5kZXggb2YgaW5zdGFuY2VcbiAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ251bWJlcicpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHJlZmVyZW5jZXNbdGFyZ2V0XSAmJiBwcmVwYXJlSW5zdGFuY2Uoc2luZ2xldG9uLCByZWZlcmVuY2VzW3RhcmdldF0pXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIHRhcmdldCBpcyBhIGNoaWxkIHRpcHB5IGluc3RhbmNlXG4gICAgaWYgKGluZGl2aWR1YWxJbnN0YW5jZXMuaW5kZXhPZih0YXJnZXQgYXMgSW5zdGFuY2UpID49IDApIHtcbiAgICAgIGNvbnN0IHJlZiA9ICh0YXJnZXQgYXMgSW5zdGFuY2UpLnJlZmVyZW5jZTtcbiAgICAgIHJldHVybiBwcmVwYXJlSW5zdGFuY2Uoc2luZ2xldG9uLCByZWYpO1xuICAgIH1cblxuICAgIC8vIHRhcmdldCBpcyBhIFJlZmVyZW5jZUVsZW1lbnRcbiAgICBpZiAocmVmZXJlbmNlcy5pbmRleE9mKHRhcmdldCBhcyBSZWZlcmVuY2VFbGVtZW50KSA+PSAwKSB7XG4gICAgICByZXR1cm4gcHJlcGFyZUluc3RhbmNlKHNpbmdsZXRvbiwgdGFyZ2V0IGFzIFJlZmVyZW5jZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcblxuICBzaW5nbGV0b24uc2hvd05leHQgPSAoKTogdm9pZCA9PiB7XG4gICAgY29uc3QgZmlyc3QgPSByZWZlcmVuY2VzWzBdO1xuICAgIGlmICghY3VycmVudFRhcmdldCkge1xuICAgICAgcmV0dXJuIHNpbmdsZXRvbi5zaG93KDApO1xuICAgIH1cbiAgICBjb25zdCBpbmRleCA9IHJlZmVyZW5jZXMuaW5kZXhPZihjdXJyZW50VGFyZ2V0KTtcbiAgICBzaW5nbGV0b24uc2hvdyhyZWZlcmVuY2VzW2luZGV4ICsgMV0gfHwgZmlyc3QpO1xuICB9O1xuXG4gIHNpbmdsZXRvbi5zaG93UHJldmlvdXMgPSAoKTogdm9pZCA9PiB7XG4gICAgY29uc3QgbGFzdCA9IHJlZmVyZW5jZXNbcmVmZXJlbmNlcy5sZW5ndGggLSAxXTtcbiAgICBpZiAoIWN1cnJlbnRUYXJnZXQpIHtcbiAgICAgIHJldHVybiBzaW5nbGV0b24uc2hvdyhsYXN0KTtcbiAgICB9XG4gICAgY29uc3QgaW5kZXggPSByZWZlcmVuY2VzLmluZGV4T2YoY3VycmVudFRhcmdldCk7XG4gICAgY29uc3QgdGFyZ2V0ID0gcmVmZXJlbmNlc1tpbmRleCAtIDFdIHx8IGxhc3Q7XG4gICAgc2luZ2xldG9uLnNob3codGFyZ2V0KTtcbiAgfTtcblxuICBjb25zdCBvcmlnaW5hbFNldFByb3BzID0gc2luZ2xldG9uLnNldFByb3BzO1xuXG4gIHNpbmdsZXRvbi5zZXRQcm9wcyA9IChwcm9wcyk6IHZvaWQgPT4ge1xuICAgIG92ZXJyaWRlcyA9IHByb3BzLm92ZXJyaWRlcyB8fCBvdmVycmlkZXM7XG4gICAgb3JpZ2luYWxTZXRQcm9wcyhwcm9wcyk7XG4gIH07XG5cbiAgc2luZ2xldG9uLnNldEluc3RhbmNlcyA9IChuZXh0SW5zdGFuY2VzKTogdm9pZCA9PiB7XG4gICAgZW5hYmxlSW5zdGFuY2VzKHRydWUpO1xuICAgIGludGVyY2VwdFNldFByb3BzQ2xlYW51cHMuZm9yRWFjaCgoZm4pID0+IGZuKCkpO1xuXG4gICAgaW5kaXZpZHVhbEluc3RhbmNlcyA9IG5leHRJbnN0YW5jZXM7XG5cbiAgICBlbmFibGVJbnN0YW5jZXMoZmFsc2UpO1xuICAgIHNldFJlZmVyZW5jZXMoKTtcbiAgICBzZXRUcmlnZ2VyVGFyZ2V0cygpO1xuICAgIGludGVyY2VwdFNldFByb3BzQ2xlYW51cHMgPSBpbnRlcmNlcHRTZXRQcm9wcyhzaW5nbGV0b24pO1xuXG4gICAgc2luZ2xldG9uLnNldFByb3BzKHt0cmlnZ2VyVGFyZ2V0OiB0cmlnZ2VyVGFyZ2V0c30pO1xuICB9O1xuXG4gIGludGVyY2VwdFNldFByb3BzQ2xlYW51cHMgPSBpbnRlcmNlcHRTZXRQcm9wcyhzaW5nbGV0b24pO1xuXG4gIHJldHVybiBzaW5nbGV0b247XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTaW5nbGV0b247XG4iLCAiaW1wb3J0IHRpcHB5IGZyb20gJy4uJztcbmltcG9ydCB7VE9VQ0hfT1BUSU9OU30gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7ZGVmYXVsdFByb3BzfSBmcm9tICcuLi9wcm9wcyc7XG5pbXBvcnQge0luc3RhbmNlLCBQcm9wcywgVGFyZ2V0c30gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHtMaXN0ZW5lck9iamVjdH0gZnJvbSAnLi4vdHlwZXMtaW50ZXJuYWwnO1xuaW1wb3J0IHtub3JtYWxpemVUb0FycmF5LCByZW1vdmVQcm9wZXJ0aWVzfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQge2Vycm9yV2hlbn0gZnJvbSAnLi4vdmFsaWRhdGlvbic7XG5cbmNvbnN0IEJVQkJMSU5HX0VWRU5UU19NQVAgPSB7XG4gIG1vdXNlb3ZlcjogJ21vdXNlZW50ZXInLFxuICBmb2N1c2luOiAnZm9jdXMnLFxuICBjbGljazogJ2NsaWNrJyxcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIGRlbGVnYXRlIGluc3RhbmNlIHRoYXQgY29udHJvbHMgdGhlIGNyZWF0aW9uIG9mIHRpcHB5IGluc3RhbmNlc1xuICogZm9yIGNoaWxkIGVsZW1lbnRzIChgdGFyZ2V0YCBDU1Mgc2VsZWN0b3IpLlxuICovXG5mdW5jdGlvbiBkZWxlZ2F0ZShcbiAgdGFyZ2V0czogVGFyZ2V0cyxcbiAgcHJvcHM6IFBhcnRpYWw8UHJvcHM+ICYge3RhcmdldDogc3RyaW5nfVxuKTogSW5zdGFuY2UgfCBJbnN0YW5jZVtdIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKF9fREVWX18pIHtcbiAgICBlcnJvcldoZW4oXG4gICAgICAhKHByb3BzICYmIHByb3BzLnRhcmdldCksXG4gICAgICBbXG4gICAgICAgICdZb3UgbXVzdCBzcGVjaXR5IGEgYHRhcmdldGAgcHJvcCBpbmRpY2F0aW5nIGEgQ1NTIHNlbGVjdG9yIHN0cmluZyBtYXRjaGluZycsXG4gICAgICAgICd0aGUgdGFyZ2V0IGVsZW1lbnRzIHRoYXQgc2hvdWxkIHJlY2VpdmUgYSB0aXBweS4nLFxuICAgICAgXS5qb2luKCcgJylcbiAgICApO1xuICB9XG5cbiAgbGV0IGxpc3RlbmVyczogTGlzdGVuZXJPYmplY3RbXSA9IFtdO1xuICBsZXQgY2hpbGRUaXBweUluc3RhbmNlczogSW5zdGFuY2VbXSA9IFtdO1xuICBsZXQgZGlzYWJsZWQgPSBmYWxzZTtcblxuICBjb25zdCB7dGFyZ2V0fSA9IHByb3BzO1xuXG4gIGNvbnN0IG5hdGl2ZVByb3BzID0gcmVtb3ZlUHJvcGVydGllcyhwcm9wcywgWyd0YXJnZXQnXSk7XG4gIGNvbnN0IHBhcmVudFByb3BzID0gey4uLm5hdGl2ZVByb3BzLCB0cmlnZ2VyOiAnbWFudWFsJywgdG91Y2g6IGZhbHNlfTtcbiAgY29uc3QgY2hpbGRQcm9wcyA9IHtcbiAgICB0b3VjaDogZGVmYXVsdFByb3BzLnRvdWNoLFxuICAgIC4uLm5hdGl2ZVByb3BzLFxuICAgIHNob3dPbkNyZWF0ZTogdHJ1ZSxcbiAgfTtcblxuICBjb25zdCByZXR1cm5WYWx1ZSA9IHRpcHB5KHRhcmdldHMsIHBhcmVudFByb3BzKTtcbiAgY29uc3Qgbm9ybWFsaXplZFJldHVyblZhbHVlID0gbm9ybWFsaXplVG9BcnJheShyZXR1cm5WYWx1ZSk7XG5cbiAgZnVuY3Rpb24gb25UcmlnZ2VyKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGlmICghZXZlbnQudGFyZ2V0IHx8IGRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdGFyZ2V0Tm9kZSA9IChldmVudC50YXJnZXQgYXMgRWxlbWVudCkuY2xvc2VzdCh0YXJnZXQpO1xuXG4gICAgaWYgKCF0YXJnZXROb2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gR2V0IHJlbGV2YW50IHRyaWdnZXIgd2l0aCBmYWxsYmFja3M6XG4gICAgLy8gMS4gQ2hlY2sgYGRhdGEtdGlwcHktdHJpZ2dlcmAgYXR0cmlidXRlIG9uIHRhcmdldCBub2RlXG4gICAgLy8gMi4gRmFsbGJhY2sgdG8gYHRyaWdnZXJgIHBhc3NlZCB0byBgZGVsZWdhdGUoKWBcbiAgICAvLyAzLiBGYWxsYmFjayB0byBgZGVmYXVsdFByb3BzLnRyaWdnZXJgXG4gICAgY29uc3QgdHJpZ2dlciA9XG4gICAgICB0YXJnZXROb2RlLmdldEF0dHJpYnV0ZSgnZGF0YS10aXBweS10cmlnZ2VyJykgfHxcbiAgICAgIHByb3BzLnRyaWdnZXIgfHxcbiAgICAgIGRlZmF1bHRQcm9wcy50cmlnZ2VyO1xuXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGlmICh0YXJnZXROb2RlLl90aXBweSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChldmVudC50eXBlID09PSAndG91Y2hzdGFydCcgJiYgdHlwZW9mIGNoaWxkUHJvcHMudG91Y2ggPT09ICdib29sZWFuJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGV2ZW50LnR5cGUgIT09ICd0b3VjaHN0YXJ0JyAmJlxuICAgICAgdHJpZ2dlci5pbmRleE9mKChCVUJCTElOR19FVkVOVFNfTUFQIGFzIGFueSlbZXZlbnQudHlwZV0pIDwgMFxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGluc3RhbmNlID0gdGlwcHkodGFyZ2V0Tm9kZSwgY2hpbGRQcm9wcyk7XG5cbiAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgIGNoaWxkVGlwcHlJbnN0YW5jZXMgPSBjaGlsZFRpcHB5SW5zdGFuY2VzLmNvbmNhdChpbnN0YW5jZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb24oXG4gICAgbm9kZTogRWxlbWVudCxcbiAgICBldmVudFR5cGU6IHN0cmluZyxcbiAgICBoYW5kbGVyOiBFdmVudExpc3RlbmVyLFxuICAgIG9wdGlvbnM6IGJvb2xlYW4gfCBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IGZhbHNlXG4gICk6IHZvaWQge1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgIGxpc3RlbmVycy5wdXNoKHtub2RlLCBldmVudFR5cGUsIGhhbmRsZXIsIG9wdGlvbnN9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJzKGluc3RhbmNlOiBJbnN0YW5jZSk6IHZvaWQge1xuICAgIGNvbnN0IHtyZWZlcmVuY2V9ID0gaW5zdGFuY2U7XG5cbiAgICBvbihyZWZlcmVuY2UsICd0b3VjaHN0YXJ0Jywgb25UcmlnZ2VyLCBUT1VDSF9PUFRJT05TKTtcbiAgICBvbihyZWZlcmVuY2UsICdtb3VzZW92ZXInLCBvblRyaWdnZXIpO1xuICAgIG9uKHJlZmVyZW5jZSwgJ2ZvY3VzaW4nLCBvblRyaWdnZXIpO1xuICAgIG9uKHJlZmVyZW5jZSwgJ2NsaWNrJywgb25UcmlnZ2VyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCk6IHZvaWQge1xuICAgIGxpc3RlbmVycy5mb3JFYWNoKCh7bm9kZSwgZXZlbnRUeXBlLCBoYW5kbGVyLCBvcHRpb25zfTogTGlzdGVuZXJPYmplY3QpID0+IHtcbiAgICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgIH0pO1xuICAgIGxpc3RlbmVycyA9IFtdO1xuICB9XG5cbiAgZnVuY3Rpb24gYXBwbHlNdXRhdGlvbnMoaW5zdGFuY2U6IEluc3RhbmNlKTogdm9pZCB7XG4gICAgY29uc3Qgb3JpZ2luYWxEZXN0cm95ID0gaW5zdGFuY2UuZGVzdHJveTtcbiAgICBjb25zdCBvcmlnaW5hbEVuYWJsZSA9IGluc3RhbmNlLmVuYWJsZTtcbiAgICBjb25zdCBvcmlnaW5hbERpc2FibGUgPSBpbnN0YW5jZS5kaXNhYmxlO1xuXG4gICAgaW5zdGFuY2UuZGVzdHJveSA9IChzaG91bGREZXN0cm95Q2hpbGRJbnN0YW5jZXMgPSB0cnVlKTogdm9pZCA9PiB7XG4gICAgICBpZiAoc2hvdWxkRGVzdHJveUNoaWxkSW5zdGFuY2VzKSB7XG4gICAgICAgIGNoaWxkVGlwcHlJbnN0YW5jZXMuZm9yRWFjaCgoaW5zdGFuY2UpID0+IHtcbiAgICAgICAgICBpbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBjaGlsZFRpcHB5SW5zdGFuY2VzID0gW107XG5cbiAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICBvcmlnaW5hbERlc3Ryb3koKTtcbiAgICB9O1xuXG4gICAgaW5zdGFuY2UuZW5hYmxlID0gKCk6IHZvaWQgPT4ge1xuICAgICAgb3JpZ2luYWxFbmFibGUoKTtcbiAgICAgIGNoaWxkVGlwcHlJbnN0YW5jZXMuZm9yRWFjaCgoaW5zdGFuY2UpID0+IGluc3RhbmNlLmVuYWJsZSgpKTtcbiAgICAgIGRpc2FibGVkID0gZmFsc2U7XG4gICAgfTtcblxuICAgIGluc3RhbmNlLmRpc2FibGUgPSAoKTogdm9pZCA9PiB7XG4gICAgICBvcmlnaW5hbERpc2FibGUoKTtcbiAgICAgIGNoaWxkVGlwcHlJbnN0YW5jZXMuZm9yRWFjaCgoaW5zdGFuY2UpID0+IGluc3RhbmNlLmRpc2FibGUoKSk7XG4gICAgICBkaXNhYmxlZCA9IHRydWU7XG4gICAgfTtcblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKGluc3RhbmNlKTtcbiAgfVxuXG4gIG5vcm1hbGl6ZWRSZXR1cm5WYWx1ZS5mb3JFYWNoKGFwcGx5TXV0YXRpb25zKTtcblxuICByZXR1cm4gcmV0dXJuVmFsdWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlbGVnYXRlO1xuIiwgImltcG9ydCB7QkFDS0RST1BfQ0xBU1N9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQge2Rpdiwgc2V0VmlzaWJpbGl0eVN0YXRlfSBmcm9tICcuLi9kb20tdXRpbHMnO1xuaW1wb3J0IHtnZXRDaGlsZHJlbn0gZnJvbSAnLi4vdGVtcGxhdGUnO1xuaW1wb3J0IHtBbmltYXRlRmlsbH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHtlcnJvcldoZW59IGZyb20gJy4uL3ZhbGlkYXRpb24nO1xuXG5jb25zdCBhbmltYXRlRmlsbDogQW5pbWF0ZUZpbGwgPSB7XG4gIG5hbWU6ICdhbmltYXRlRmlsbCcsXG4gIGRlZmF1bHRWYWx1ZTogZmFsc2UsXG4gIGZuKGluc3RhbmNlKSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGlmICghaW5zdGFuY2UucHJvcHMucmVuZGVyPy4kJHRpcHB5KSB7XG4gICAgICBpZiAoX19ERVZfXykge1xuICAgICAgICBlcnJvcldoZW4oXG4gICAgICAgICAgaW5zdGFuY2UucHJvcHMuYW5pbWF0ZUZpbGwsXG4gICAgICAgICAgJ1RoZSBgYW5pbWF0ZUZpbGxgIHBsdWdpbiByZXF1aXJlcyB0aGUgZGVmYXVsdCByZW5kZXIgZnVuY3Rpb24uJ1xuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgY29uc3Qge2JveCwgY29udGVudH0gPSBnZXRDaGlsZHJlbihpbnN0YW5jZS5wb3BwZXIpO1xuXG4gICAgY29uc3QgYmFja2Ryb3AgPSBpbnN0YW5jZS5wcm9wcy5hbmltYXRlRmlsbFxuICAgICAgPyBjcmVhdGVCYWNrZHJvcEVsZW1lbnQoKVxuICAgICAgOiBudWxsO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIG9uQ3JlYXRlKCk6IHZvaWQge1xuICAgICAgICBpZiAoYmFja2Ryb3ApIHtcbiAgICAgICAgICBib3guaW5zZXJ0QmVmb3JlKGJhY2tkcm9wLCBib3guZmlyc3RFbGVtZW50Q2hpbGQhKTtcbiAgICAgICAgICBib3guc2V0QXR0cmlidXRlKCdkYXRhLWFuaW1hdGVmaWxsJywgJycpO1xuICAgICAgICAgIGJveC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuXG4gICAgICAgICAgaW5zdGFuY2Uuc2V0UHJvcHMoe2Fycm93OiBmYWxzZSwgYW5pbWF0aW9uOiAnc2hpZnQtYXdheSd9KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uTW91bnQoKTogdm9pZCB7XG4gICAgICAgIGlmIChiYWNrZHJvcCkge1xuICAgICAgICAgIGNvbnN0IHt0cmFuc2l0aW9uRHVyYXRpb259ID0gYm94LnN0eWxlO1xuICAgICAgICAgIGNvbnN0IGR1cmF0aW9uID0gTnVtYmVyKHRyYW5zaXRpb25EdXJhdGlvbi5yZXBsYWNlKCdtcycsICcnKSk7XG5cbiAgICAgICAgICAvLyBUaGUgY29udGVudCBzaG91bGQgZmFkZSBpbiBhZnRlciB0aGUgYmFja2Ryb3AgaGFzIG1vc3RseSBmaWxsZWQgdGhlXG4gICAgICAgICAgLy8gdG9vbHRpcCBlbGVtZW50LiBgY2xpcC1wYXRoYCBpcyB0aGUgb3RoZXIgYWx0ZXJuYXRpdmUgYnV0IGlzIG5vdFxuICAgICAgICAgIC8vIHdlbGwtc3VwcG9ydGVkIGFuZCBpcyBidWdneSBvbiBzb21lIGRldmljZXMuXG4gICAgICAgICAgY29udGVudC5zdHlsZS50cmFuc2l0aW9uRGVsYXkgPSBgJHtNYXRoLnJvdW5kKGR1cmF0aW9uIC8gMTApfW1zYDtcblxuICAgICAgICAgIGJhY2tkcm9wLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IHRyYW5zaXRpb25EdXJhdGlvbjtcbiAgICAgICAgICBzZXRWaXNpYmlsaXR5U3RhdGUoW2JhY2tkcm9wXSwgJ3Zpc2libGUnKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uU2hvdygpOiB2b2lkIHtcbiAgICAgICAgaWYgKGJhY2tkcm9wKSB7XG4gICAgICAgICAgYmFja2Ryb3Auc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gJzBtcyc7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbkhpZGUoKTogdm9pZCB7XG4gICAgICAgIGlmIChiYWNrZHJvcCkge1xuICAgICAgICAgIHNldFZpc2liaWxpdHlTdGF0ZShbYmFja2Ryb3BdLCAnaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFuaW1hdGVGaWxsO1xuXG5mdW5jdGlvbiBjcmVhdGVCYWNrZHJvcEVsZW1lbnQoKTogSFRNTERpdkVsZW1lbnQge1xuICBjb25zdCBiYWNrZHJvcCA9IGRpdigpO1xuICBiYWNrZHJvcC5jbGFzc05hbWUgPSBCQUNLRFJPUF9DTEFTUztcbiAgc2V0VmlzaWJpbGl0eVN0YXRlKFtiYWNrZHJvcF0sICdoaWRkZW4nKTtcbiAgcmV0dXJuIGJhY2tkcm9wO1xufVxuIiwgImltcG9ydCB7Z2V0T3duZXJEb2N1bWVudCwgaXNNb3VzZUV2ZW50fSBmcm9tICcuLi9kb20tdXRpbHMnO1xuaW1wb3J0IHtGb2xsb3dDdXJzb3IsIEluc3RhbmNlfSBmcm9tICcuLi90eXBlcyc7XG5cbmxldCBtb3VzZUNvb3JkcyA9IHtjbGllbnRYOiAwLCBjbGllbnRZOiAwfTtcbmxldCBhY3RpdmVJbnN0YW5jZXM6IEFycmF5PHtpbnN0YW5jZTogSW5zdGFuY2U7IGRvYzogRG9jdW1lbnR9PiA9IFtdO1xuXG5mdW5jdGlvbiBzdG9yZU1vdXNlQ29vcmRzKHtjbGllbnRYLCBjbGllbnRZfTogTW91c2VFdmVudCk6IHZvaWQge1xuICBtb3VzZUNvb3JkcyA9IHtjbGllbnRYLCBjbGllbnRZfTtcbn1cblxuZnVuY3Rpb24gYWRkTW91c2VDb29yZHNMaXN0ZW5lcihkb2M6IERvY3VtZW50KTogdm9pZCB7XG4gIGRvYy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBzdG9yZU1vdXNlQ29vcmRzKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlTW91c2VDb29yZHNMaXN0ZW5lcihkb2M6IERvY3VtZW50KTogdm9pZCB7XG4gIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBzdG9yZU1vdXNlQ29vcmRzKTtcbn1cblxuY29uc3QgZm9sbG93Q3Vyc29yOiBGb2xsb3dDdXJzb3IgPSB7XG4gIG5hbWU6ICdmb2xsb3dDdXJzb3InLFxuICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuICBmbihpbnN0YW5jZSkge1xuICAgIGNvbnN0IHJlZmVyZW5jZSA9IGluc3RhbmNlLnJlZmVyZW5jZTtcbiAgICBjb25zdCBkb2MgPSBnZXRPd25lckRvY3VtZW50KGluc3RhbmNlLnByb3BzLnRyaWdnZXJUYXJnZXQgfHwgcmVmZXJlbmNlKTtcblxuICAgIGxldCBpc0ludGVybmFsVXBkYXRlID0gZmFsc2U7XG4gICAgbGV0IHdhc0ZvY3VzRXZlbnQgPSBmYWxzZTtcbiAgICBsZXQgaXNVbm1vdW50ZWQgPSB0cnVlO1xuICAgIGxldCBwcmV2UHJvcHMgPSBpbnN0YW5jZS5wcm9wcztcblxuICAgIGZ1bmN0aW9uIGdldElzSW5pdGlhbEJlaGF2aW9yKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgaW5zdGFuY2UucHJvcHMuZm9sbG93Q3Vyc29yID09PSAnaW5pdGlhbCcgJiYgaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlXG4gICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZExpc3RlbmVyKCk6IHZvaWQge1xuICAgICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcigpOiB2b2lkIHtcbiAgICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdW5zZXRHZXRSZWZlcmVuY2VDbGllbnRSZWN0KCk6IHZvaWQge1xuICAgICAgaXNJbnRlcm5hbFVwZGF0ZSA9IHRydWU7XG4gICAgICBpbnN0YW5jZS5zZXRQcm9wcyh7Z2V0UmVmZXJlbmNlQ2xpZW50UmVjdDogbnVsbH0pO1xuICAgICAgaXNJbnRlcm5hbFVwZGF0ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uTW91c2VNb3ZlKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgICAvLyBJZiB0aGUgaW5zdGFuY2UgaXMgaW50ZXJhY3RpdmUsIGF2b2lkIHVwZGF0aW5nIHRoZSBwb3NpdGlvbiB1bmxlc3MgaXQnc1xuICAgICAgLy8gb3ZlciB0aGUgcmVmZXJlbmNlIGVsZW1lbnRcbiAgICAgIGNvbnN0IGlzQ3Vyc29yT3ZlclJlZmVyZW5jZSA9IGV2ZW50LnRhcmdldFxuICAgICAgICA/IHJlZmVyZW5jZS5jb250YWlucyhldmVudC50YXJnZXQgYXMgTm9kZSlcbiAgICAgICAgOiB0cnVlO1xuICAgICAgY29uc3Qge2ZvbGxvd0N1cnNvcn0gPSBpbnN0YW5jZS5wcm9wcztcbiAgICAgIGNvbnN0IHtjbGllbnRYLCBjbGllbnRZfSA9IGV2ZW50O1xuXG4gICAgICBjb25zdCByZWN0ID0gcmVmZXJlbmNlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3QgcmVsYXRpdmVYID0gY2xpZW50WCAtIHJlY3QubGVmdDtcbiAgICAgIGNvbnN0IHJlbGF0aXZlWSA9IGNsaWVudFkgLSByZWN0LnRvcDtcblxuICAgICAgaWYgKGlzQ3Vyc29yT3ZlclJlZmVyZW5jZSB8fCAhaW5zdGFuY2UucHJvcHMuaW50ZXJhY3RpdmUpIHtcbiAgICAgICAgaW5zdGFuY2Uuc2V0UHJvcHMoe1xuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgLSB1bm5lZWRlZCBET01SZWN0IHByb3BlcnRpZXNcbiAgICAgICAgICBnZXRSZWZlcmVuY2VDbGllbnRSZWN0KCkge1xuICAgICAgICAgICAgY29uc3QgcmVjdCA9IHJlZmVyZW5jZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICAgICAgbGV0IHggPSBjbGllbnRYO1xuICAgICAgICAgICAgbGV0IHkgPSBjbGllbnRZO1xuXG4gICAgICAgICAgICBpZiAoZm9sbG93Q3Vyc29yID09PSAnaW5pdGlhbCcpIHtcbiAgICAgICAgICAgICAgeCA9IHJlY3QubGVmdCArIHJlbGF0aXZlWDtcbiAgICAgICAgICAgICAgeSA9IHJlY3QudG9wICsgcmVsYXRpdmVZO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB0b3AgPSBmb2xsb3dDdXJzb3IgPT09ICdob3Jpem9udGFsJyA/IHJlY3QudG9wIDogeTtcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0ID0gZm9sbG93Q3Vyc29yID09PSAndmVydGljYWwnID8gcmVjdC5yaWdodCA6IHg7XG4gICAgICAgICAgICBjb25zdCBib3R0b20gPSBmb2xsb3dDdXJzb3IgPT09ICdob3Jpem9udGFsJyA/IHJlY3QuYm90dG9tIDogeTtcbiAgICAgICAgICAgIGNvbnN0IGxlZnQgPSBmb2xsb3dDdXJzb3IgPT09ICd2ZXJ0aWNhbCcgPyByZWN0LmxlZnQgOiB4O1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICB3aWR0aDogcmlnaHQgLSBsZWZ0LFxuICAgICAgICAgICAgICBoZWlnaHQ6IGJvdHRvbSAtIHRvcCxcbiAgICAgICAgICAgICAgdG9wLFxuICAgICAgICAgICAgICByaWdodCxcbiAgICAgICAgICAgICAgYm90dG9tLFxuICAgICAgICAgICAgICBsZWZ0LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGUoKTogdm9pZCB7XG4gICAgICBpZiAoaW5zdGFuY2UucHJvcHMuZm9sbG93Q3Vyc29yKSB7XG4gICAgICAgIGFjdGl2ZUluc3RhbmNlcy5wdXNoKHtpbnN0YW5jZSwgZG9jfSk7XG4gICAgICAgIGFkZE1vdXNlQ29vcmRzTGlzdGVuZXIoZG9jKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZXN0cm95KCk6IHZvaWQge1xuICAgICAgYWN0aXZlSW5zdGFuY2VzID0gYWN0aXZlSW5zdGFuY2VzLmZpbHRlcihcbiAgICAgICAgKGRhdGEpID0+IGRhdGEuaW5zdGFuY2UgIT09IGluc3RhbmNlXG4gICAgICApO1xuXG4gICAgICBpZiAoYWN0aXZlSW5zdGFuY2VzLmZpbHRlcigoZGF0YSkgPT4gZGF0YS5kb2MgPT09IGRvYykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJlbW92ZU1vdXNlQ29vcmRzTGlzdGVuZXIoZG9jKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgb25DcmVhdGU6IGNyZWF0ZSxcbiAgICAgIG9uRGVzdHJveTogZGVzdHJveSxcbiAgICAgIG9uQmVmb3JlVXBkYXRlKCk6IHZvaWQge1xuICAgICAgICBwcmV2UHJvcHMgPSBpbnN0YW5jZS5wcm9wcztcbiAgICAgIH0sXG4gICAgICBvbkFmdGVyVXBkYXRlKF8sIHtmb2xsb3dDdXJzb3J9KTogdm9pZCB7XG4gICAgICAgIGlmIChpc0ludGVybmFsVXBkYXRlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIGZvbGxvd0N1cnNvciAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgcHJldlByb3BzLmZvbGxvd0N1cnNvciAhPT0gZm9sbG93Q3Vyc29yXG4gICAgICAgICkge1xuICAgICAgICAgIGRlc3Ryb3koKTtcblxuICAgICAgICAgIGlmIChmb2xsb3dDdXJzb3IpIHtcbiAgICAgICAgICAgIGNyZWF0ZSgpO1xuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIGluc3RhbmNlLnN0YXRlLmlzTW91bnRlZCAmJlxuICAgICAgICAgICAgICAhd2FzRm9jdXNFdmVudCAmJlxuICAgICAgICAgICAgICAhZ2V0SXNJbml0aWFsQmVoYXZpb3IoKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGFkZExpc3RlbmVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbW92ZUxpc3RlbmVyKCk7XG4gICAgICAgICAgICB1bnNldEdldFJlZmVyZW5jZUNsaWVudFJlY3QoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbk1vdW50KCk6IHZvaWQge1xuICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMuZm9sbG93Q3Vyc29yICYmICF3YXNGb2N1c0V2ZW50KSB7XG4gICAgICAgICAgaWYgKGlzVW5tb3VudGVkKSB7XG4gICAgICAgICAgICBvbk1vdXNlTW92ZShtb3VzZUNvb3JkcyBhcyBNb3VzZUV2ZW50KTtcbiAgICAgICAgICAgIGlzVW5tb3VudGVkID0gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFnZXRJc0luaXRpYWxCZWhhdmlvcigpKSB7XG4gICAgICAgICAgICBhZGRMaXN0ZW5lcigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uVHJpZ2dlcihfLCBldmVudCk6IHZvaWQge1xuICAgICAgICBpZiAoaXNNb3VzZUV2ZW50KGV2ZW50KSkge1xuICAgICAgICAgIG1vdXNlQ29vcmRzID0ge2NsaWVudFg6IGV2ZW50LmNsaWVudFgsIGNsaWVudFk6IGV2ZW50LmNsaWVudFl9O1xuICAgICAgICB9XG4gICAgICAgIHdhc0ZvY3VzRXZlbnQgPSBldmVudC50eXBlID09PSAnZm9jdXMnO1xuICAgICAgfSxcbiAgICAgIG9uSGlkZGVuKCk6IHZvaWQge1xuICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMuZm9sbG93Q3Vyc29yKSB7XG4gICAgICAgICAgdW5zZXRHZXRSZWZlcmVuY2VDbGllbnRSZWN0KCk7XG4gICAgICAgICAgcmVtb3ZlTGlzdGVuZXIoKTtcbiAgICAgICAgICBpc1VubW91bnRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvbGxvd0N1cnNvcjtcbiIsICJpbXBvcnQge01vZGlmaWVyLCBQbGFjZW1lbnR9IGZyb20gJ0Bwb3BwZXJqcy9jb3JlJztcbmltcG9ydCB7aXNNb3VzZUV2ZW50fSBmcm9tICcuLi9kb20tdXRpbHMnO1xuaW1wb3J0IHtCYXNlUGxhY2VtZW50LCBJbmxpbmVQb3NpdGlvbmluZywgUHJvcHN9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7YXJyYXlGcm9tLCBnZXRCYXNlUGxhY2VtZW50fSBmcm9tICcuLi91dGlscyc7XG5cbmZ1bmN0aW9uIGdldFByb3BzKHByb3BzOiBQcm9wcywgbW9kaWZpZXI6IE1vZGlmaWVyPGFueSwgYW55Pik6IFBhcnRpYWw8UHJvcHM+IHtcbiAgcmV0dXJuIHtcbiAgICBwb3BwZXJPcHRpb25zOiB7XG4gICAgICAuLi5wcm9wcy5wb3BwZXJPcHRpb25zLFxuICAgICAgbW9kaWZpZXJzOiBbXG4gICAgICAgIC4uLihwcm9wcy5wb3BwZXJPcHRpb25zPy5tb2RpZmllcnMgfHwgW10pLmZpbHRlcihcbiAgICAgICAgICAoe25hbWV9KSA9PiBuYW1lICE9PSBtb2RpZmllci5uYW1lXG4gICAgICAgICksXG4gICAgICAgIG1vZGlmaWVyLFxuICAgICAgXSxcbiAgICB9LFxuICB9O1xufVxuXG5jb25zdCBpbmxpbmVQb3NpdGlvbmluZzogSW5saW5lUG9zaXRpb25pbmcgPSB7XG4gIG5hbWU6ICdpbmxpbmVQb3NpdGlvbmluZycsXG4gIGRlZmF1bHRWYWx1ZTogZmFsc2UsXG4gIGZuKGluc3RhbmNlKSB7XG4gICAgY29uc3Qge3JlZmVyZW5jZX0gPSBpbnN0YW5jZTtcblxuICAgIGZ1bmN0aW9uIGlzRW5hYmxlZCgpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiAhIWluc3RhbmNlLnByb3BzLmlubGluZVBvc2l0aW9uaW5nO1xuICAgIH1cblxuICAgIGxldCBwbGFjZW1lbnQ6IFBsYWNlbWVudDtcbiAgICBsZXQgY3Vyc29yUmVjdEluZGV4ID0gLTE7XG4gICAgbGV0IGlzSW50ZXJuYWxVcGRhdGUgPSBmYWxzZTtcbiAgICBsZXQgdHJpZWRQbGFjZW1lbnRzOiBBcnJheTxzdHJpbmc+ID0gW107XG5cbiAgICBjb25zdCBtb2RpZmllcjogTW9kaWZpZXI8XG4gICAgICAndGlwcHlJbmxpbmVQb3NpdGlvbmluZycsXG4gICAgICBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICAgID4gPSB7XG4gICAgICBuYW1lOiAndGlwcHlJbmxpbmVQb3NpdGlvbmluZycsXG4gICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgcGhhc2U6ICdhZnRlcldyaXRlJyxcbiAgICAgIGZuKHtzdGF0ZX0pIHtcbiAgICAgICAgaWYgKGlzRW5hYmxlZCgpKSB7XG4gICAgICAgICAgaWYgKHRyaWVkUGxhY2VtZW50cy5pbmRleE9mKHN0YXRlLnBsYWNlbWVudCkgIT09IC0xKSB7XG4gICAgICAgICAgICB0cmllZFBsYWNlbWVudHMgPSBbXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBwbGFjZW1lbnQgIT09IHN0YXRlLnBsYWNlbWVudCAmJlxuICAgICAgICAgICAgdHJpZWRQbGFjZW1lbnRzLmluZGV4T2Yoc3RhdGUucGxhY2VtZW50KSA9PT0gLTFcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHRyaWVkUGxhY2VtZW50cy5wdXNoKHN0YXRlLnBsYWNlbWVudCk7XG4gICAgICAgICAgICBpbnN0YW5jZS5zZXRQcm9wcyh7XG4gICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgLSB1bm5lZWRlZCBET01SZWN0IHByb3BlcnRpZXNcbiAgICAgICAgICAgICAgZ2V0UmVmZXJlbmNlQ2xpZW50UmVjdDogKCkgPT5cbiAgICAgICAgICAgICAgICBnZXRSZWZlcmVuY2VDbGllbnRSZWN0KHN0YXRlLnBsYWNlbWVudCksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwbGFjZW1lbnQgPSBzdGF0ZS5wbGFjZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGdldFJlZmVyZW5jZUNsaWVudFJlY3QocGxhY2VtZW50OiBQbGFjZW1lbnQpOiBQYXJ0aWFsPERPTVJlY3Q+IHtcbiAgICAgIHJldHVybiBnZXRJbmxpbmVCb3VuZGluZ0NsaWVudFJlY3QoXG4gICAgICAgIGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KSxcbiAgICAgICAgcmVmZXJlbmNlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICBhcnJheUZyb20ocmVmZXJlbmNlLmdldENsaWVudFJlY3RzKCkpLFxuICAgICAgICBjdXJzb3JSZWN0SW5kZXhcbiAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0SW50ZXJuYWxQcm9wcyhwYXJ0aWFsUHJvcHM6IFBhcnRpYWw8UHJvcHM+KTogdm9pZCB7XG4gICAgICBpc0ludGVybmFsVXBkYXRlID0gdHJ1ZTtcbiAgICAgIGluc3RhbmNlLnNldFByb3BzKHBhcnRpYWxQcm9wcyk7XG4gICAgICBpc0ludGVybmFsVXBkYXRlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkTW9kaWZpZXIoKTogdm9pZCB7XG4gICAgICBpZiAoIWlzSW50ZXJuYWxVcGRhdGUpIHtcbiAgICAgICAgc2V0SW50ZXJuYWxQcm9wcyhnZXRQcm9wcyhpbnN0YW5jZS5wcm9wcywgbW9kaWZpZXIpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgb25DcmVhdGU6IGFkZE1vZGlmaWVyLFxuICAgICAgb25BZnRlclVwZGF0ZTogYWRkTW9kaWZpZXIsXG4gICAgICBvblRyaWdnZXIoXywgZXZlbnQpOiB2b2lkIHtcbiAgICAgICAgaWYgKGlzTW91c2VFdmVudChldmVudCkpIHtcbiAgICAgICAgICBjb25zdCByZWN0cyA9IGFycmF5RnJvbShpbnN0YW5jZS5yZWZlcmVuY2UuZ2V0Q2xpZW50UmVjdHMoKSk7XG4gICAgICAgICAgY29uc3QgY3Vyc29yUmVjdCA9IHJlY3RzLmZpbmQoXG4gICAgICAgICAgICAocmVjdCkgPT5cbiAgICAgICAgICAgICAgcmVjdC5sZWZ0IC0gMiA8PSBldmVudC5jbGllbnRYICYmXG4gICAgICAgICAgICAgIHJlY3QucmlnaHQgKyAyID49IGV2ZW50LmNsaWVudFggJiZcbiAgICAgICAgICAgICAgcmVjdC50b3AgLSAyIDw9IGV2ZW50LmNsaWVudFkgJiZcbiAgICAgICAgICAgICAgcmVjdC5ib3R0b20gKyAyID49IGV2ZW50LmNsaWVudFlcbiAgICAgICAgICApO1xuICAgICAgICAgIGNvbnN0IGluZGV4ID0gcmVjdHMuaW5kZXhPZihjdXJzb3JSZWN0KTtcbiAgICAgICAgICBjdXJzb3JSZWN0SW5kZXggPSBpbmRleCA+IC0xID8gaW5kZXggOiBjdXJzb3JSZWN0SW5kZXg7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvbkhpZGRlbigpOiB2b2lkIHtcbiAgICAgICAgY3Vyc29yUmVjdEluZGV4ID0gLTE7XG4gICAgICB9LFxuICAgIH07XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbmxpbmVQb3NpdGlvbmluZztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldElubGluZUJvdW5kaW5nQ2xpZW50UmVjdChcbiAgY3VycmVudEJhc2VQbGFjZW1lbnQ6IEJhc2VQbGFjZW1lbnQgfCBudWxsLFxuICBib3VuZGluZ1JlY3Q6IERPTVJlY3QsXG4gIGNsaWVudFJlY3RzOiBET01SZWN0W10sXG4gIGN1cnNvclJlY3RJbmRleDogbnVtYmVyXG4pOiB7XG4gIHRvcDogbnVtYmVyO1xuICBib3R0b206IG51bWJlcjtcbiAgbGVmdDogbnVtYmVyO1xuICByaWdodDogbnVtYmVyO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbn0ge1xuICAvLyBOb3QgYW4gaW5saW5lIGVsZW1lbnQsIG9yIHBsYWNlbWVudCBpcyBub3QgeWV0IGtub3duXG4gIGlmIChjbGllbnRSZWN0cy5sZW5ndGggPCAyIHx8IGN1cnJlbnRCYXNlUGxhY2VtZW50ID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGJvdW5kaW5nUmVjdDtcbiAgfVxuXG4gIC8vIFRoZXJlIGFyZSB0d28gcmVjdHMgYW5kIHRoZXkgYXJlIGRpc2pvaW5lZFxuICBpZiAoXG4gICAgY2xpZW50UmVjdHMubGVuZ3RoID09PSAyICYmXG4gICAgY3Vyc29yUmVjdEluZGV4ID49IDAgJiZcbiAgICBjbGllbnRSZWN0c1swXS5sZWZ0ID4gY2xpZW50UmVjdHNbMV0ucmlnaHRcbiAgKSB7XG4gICAgcmV0dXJuIGNsaWVudFJlY3RzW2N1cnNvclJlY3RJbmRleF0gfHwgYm91bmRpbmdSZWN0O1xuICB9XG5cbiAgc3dpdGNoIChjdXJyZW50QmFzZVBsYWNlbWVudCkge1xuICAgIGNhc2UgJ3RvcCc6XG4gICAgY2FzZSAnYm90dG9tJzoge1xuICAgICAgY29uc3QgZmlyc3RSZWN0ID0gY2xpZW50UmVjdHNbMF07XG4gICAgICBjb25zdCBsYXN0UmVjdCA9IGNsaWVudFJlY3RzW2NsaWVudFJlY3RzLmxlbmd0aCAtIDFdO1xuICAgICAgY29uc3QgaXNUb3AgPSBjdXJyZW50QmFzZVBsYWNlbWVudCA9PT0gJ3RvcCc7XG5cbiAgICAgIGNvbnN0IHRvcCA9IGZpcnN0UmVjdC50b3A7XG4gICAgICBjb25zdCBib3R0b20gPSBsYXN0UmVjdC5ib3R0b207XG4gICAgICBjb25zdCBsZWZ0ID0gaXNUb3AgPyBmaXJzdFJlY3QubGVmdCA6IGxhc3RSZWN0LmxlZnQ7XG4gICAgICBjb25zdCByaWdodCA9IGlzVG9wID8gZmlyc3RSZWN0LnJpZ2h0IDogbGFzdFJlY3QucmlnaHQ7XG4gICAgICBjb25zdCB3aWR0aCA9IHJpZ2h0IC0gbGVmdDtcbiAgICAgIGNvbnN0IGhlaWdodCA9IGJvdHRvbSAtIHRvcDtcblxuICAgICAgcmV0dXJuIHt0b3AsIGJvdHRvbSwgbGVmdCwgcmlnaHQsIHdpZHRoLCBoZWlnaHR9O1xuICAgIH1cbiAgICBjYXNlICdsZWZ0JzpcbiAgICBjYXNlICdyaWdodCc6IHtcbiAgICAgIGNvbnN0IG1pbkxlZnQgPSBNYXRoLm1pbiguLi5jbGllbnRSZWN0cy5tYXAoKHJlY3RzKSA9PiByZWN0cy5sZWZ0KSk7XG4gICAgICBjb25zdCBtYXhSaWdodCA9IE1hdGgubWF4KC4uLmNsaWVudFJlY3RzLm1hcCgocmVjdHMpID0+IHJlY3RzLnJpZ2h0KSk7XG4gICAgICBjb25zdCBtZWFzdXJlUmVjdHMgPSBjbGllbnRSZWN0cy5maWx0ZXIoKHJlY3QpID0+XG4gICAgICAgIGN1cnJlbnRCYXNlUGxhY2VtZW50ID09PSAnbGVmdCdcbiAgICAgICAgICA/IHJlY3QubGVmdCA9PT0gbWluTGVmdFxuICAgICAgICAgIDogcmVjdC5yaWdodCA9PT0gbWF4UmlnaHRcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IHRvcCA9IG1lYXN1cmVSZWN0c1swXS50b3A7XG4gICAgICBjb25zdCBib3R0b20gPSBtZWFzdXJlUmVjdHNbbWVhc3VyZVJlY3RzLmxlbmd0aCAtIDFdLmJvdHRvbTtcbiAgICAgIGNvbnN0IGxlZnQgPSBtaW5MZWZ0O1xuICAgICAgY29uc3QgcmlnaHQgPSBtYXhSaWdodDtcbiAgICAgIGNvbnN0IHdpZHRoID0gcmlnaHQgLSBsZWZ0O1xuICAgICAgY29uc3QgaGVpZ2h0ID0gYm90dG9tIC0gdG9wO1xuXG4gICAgICByZXR1cm4ge3RvcCwgYm90dG9tLCBsZWZ0LCByaWdodCwgd2lkdGgsIGhlaWdodH07XG4gICAgfVxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHJldHVybiBib3VuZGluZ1JlY3Q7XG4gICAgfVxuICB9XG59XG4iLCAiaW1wb3J0IHtWaXJ0dWFsRWxlbWVudH0gZnJvbSAnQHBvcHBlcmpzL2NvcmUnO1xuaW1wb3J0IHtSZWZlcmVuY2VFbGVtZW50LCBTdGlja3l9IGZyb20gJy4uL3R5cGVzJztcblxuY29uc3Qgc3RpY2t5OiBTdGlja3kgPSB7XG4gIG5hbWU6ICdzdGlja3knLFxuICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuICBmbihpbnN0YW5jZSkge1xuICAgIGNvbnN0IHtyZWZlcmVuY2UsIHBvcHBlcn0gPSBpbnN0YW5jZTtcblxuICAgIGZ1bmN0aW9uIGdldFJlZmVyZW5jZSgpOiBSZWZlcmVuY2VFbGVtZW50IHwgVmlydHVhbEVsZW1lbnQge1xuICAgICAgcmV0dXJuIGluc3RhbmNlLnBvcHBlckluc3RhbmNlXG4gICAgICAgID8gaW5zdGFuY2UucG9wcGVySW5zdGFuY2Uuc3RhdGUuZWxlbWVudHMucmVmZXJlbmNlXG4gICAgICAgIDogcmVmZXJlbmNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3VsZENoZWNrKHZhbHVlOiAncmVmZXJlbmNlJyB8ICdwb3BwZXInKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gaW5zdGFuY2UucHJvcHMuc3RpY2t5ID09PSB0cnVlIHx8IGluc3RhbmNlLnByb3BzLnN0aWNreSA9PT0gdmFsdWU7XG4gICAgfVxuXG4gICAgbGV0IHByZXZSZWZSZWN0OiBDbGllbnRSZWN0IHwgbnVsbCA9IG51bGw7XG4gICAgbGV0IHByZXZQb3BSZWN0OiBDbGllbnRSZWN0IHwgbnVsbCA9IG51bGw7XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVQb3NpdGlvbigpOiB2b2lkIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRSZWZSZWN0ID0gc2hvdWxkQ2hlY2soJ3JlZmVyZW5jZScpXG4gICAgICAgID8gZ2V0UmVmZXJlbmNlKCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgOiBudWxsO1xuICAgICAgY29uc3QgY3VycmVudFBvcFJlY3QgPSBzaG91bGRDaGVjaygncG9wcGVyJylcbiAgICAgICAgPyBwb3BwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgOiBudWxsO1xuXG4gICAgICBpZiAoXG4gICAgICAgIChjdXJyZW50UmVmUmVjdCAmJiBhcmVSZWN0c0RpZmZlcmVudChwcmV2UmVmUmVjdCwgY3VycmVudFJlZlJlY3QpKSB8fFxuICAgICAgICAoY3VycmVudFBvcFJlY3QgJiYgYXJlUmVjdHNEaWZmZXJlbnQocHJldlBvcFJlY3QsIGN1cnJlbnRQb3BSZWN0KSlcbiAgICAgICkge1xuICAgICAgICBpZiAoaW5zdGFuY2UucG9wcGVySW5zdGFuY2UpIHtcbiAgICAgICAgICBpbnN0YW5jZS5wb3BwZXJJbnN0YW5jZS51cGRhdGUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBwcmV2UmVmUmVjdCA9IGN1cnJlbnRSZWZSZWN0O1xuICAgICAgcHJldlBvcFJlY3QgPSBjdXJyZW50UG9wUmVjdDtcblxuICAgICAgaWYgKGluc3RhbmNlLnN0YXRlLmlzTW91bnRlZCkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlUG9zaXRpb24pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBvbk1vdW50KCk6IHZvaWQge1xuICAgICAgICBpZiAoaW5zdGFuY2UucHJvcHMuc3RpY2t5KSB7XG4gICAgICAgICAgdXBkYXRlUG9zaXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9O1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgc3RpY2t5O1xuXG5mdW5jdGlvbiBhcmVSZWN0c0RpZmZlcmVudChcbiAgcmVjdEE6IENsaWVudFJlY3QgfCBudWxsLFxuICByZWN0QjogQ2xpZW50UmVjdCB8IG51bGxcbik6IGJvb2xlYW4ge1xuICBpZiAocmVjdEEgJiYgcmVjdEIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgcmVjdEEudG9wICE9PSByZWN0Qi50b3AgfHxcbiAgICAgIHJlY3RBLnJpZ2h0ICE9PSByZWN0Qi5yaWdodCB8fFxuICAgICAgcmVjdEEuYm90dG9tICE9PSByZWN0Qi5ib3R0b20gfHxcbiAgICAgIHJlY3RBLmxlZnQgIT09IHJlY3RCLmxlZnRcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG4iLCAiaW1wb3J0IHRpcHB5IGZyb20gJy4uL3NyYyc7XG5pbXBvcnQge3JlbmRlcn0gZnJvbSAnLi4vc3JjL3RlbXBsYXRlJztcblxudGlwcHkuc2V0RGVmYXVsdFByb3BzKHtyZW5kZXJ9KTtcblxuZXhwb3J0IHtkZWZhdWx0LCBoaWRlQWxsfSBmcm9tICcuLi9zcmMnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGNyZWF0ZVNpbmdsZXRvbn0gZnJvbSAnLi4vc3JjL2FkZG9ucy9jcmVhdGVTaW5nbGV0b24nO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGRlbGVnYXRlfSBmcm9tICcuLi9zcmMvYWRkb25zL2RlbGVnYXRlJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBhbmltYXRlRmlsbH0gZnJvbSAnLi4vc3JjL3BsdWdpbnMvYW5pbWF0ZUZpbGwnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGZvbGxvd0N1cnNvcn0gZnJvbSAnLi4vc3JjL3BsdWdpbnMvZm9sbG93Q3Vyc29yJztcbmV4cG9ydCB7ZGVmYXVsdCBhcyBpbmxpbmVQb3NpdGlvbmluZ30gZnJvbSAnLi4vc3JjL3BsdWdpbnMvaW5saW5lUG9zaXRpb25pbmcnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHN0aWNreX0gZnJvbSAnLi4vc3JjL3BsdWdpbnMvc3RpY2t5JztcbmV4cG9ydCB7Uk9VTkRfQVJST1cgYXMgcm91bmRBcnJvd30gZnJvbSAnLi4vc3JjL2NvbnN0YW50cyc7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7O0FBQUE7QUFBQSwrRUFBQUEsVUFBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxRQUFRLFNBQVUsSUFBSTtBQUN4QixhQUFPLE1BQU0sR0FBRyxTQUFTLFFBQVE7QUFBQSxJQUNuQztBQUdBLElBQUFBLFFBQU87QUFBQSxJQUVMLE1BQU0sT0FBTyxjQUFjLFlBQVksVUFBVSxLQUNqRCxNQUFNLE9BQU8sVUFBVSxZQUFZLE1BQU07QUFBQSxJQUV6QyxNQUFNLE9BQU8sUUFBUSxZQUFZLElBQUksS0FDckMsTUFBTSxPQUFPLFVBQVUsWUFBWSxNQUFNLEtBQ3pDLE1BQU0sT0FBT0QsWUFBUSxZQUFZQSxRQUFJO0FBQUEsSUFFcEMsMkJBQVk7QUFBRSxhQUFPO0FBQUEsSUFBTSxFQUFHLEtBQUssU0FBUyxhQUFhLEVBQUU7QUFBQTtBQUFBOzs7QUNmOUQ7QUFBQSw4RUFBQUUsVUFBQUMsU0FBQTtBQUFBO0FBQ0EsSUFBQUEsUUFBTyxVQUFVLFNBQVUsTUFBTTtBQUMvQixVQUFJO0FBQ0YsZUFBTyxDQUFDLENBQUMsS0FBSztBQUFBLE1BQ2hCLFNBQVMsT0FBTztBQUNkLGVBQU87QUFBQSxNQUNUO0FBQUEsSUFDRjtBQUFBO0FBQUE7OztBQ1BBO0FBQUEsb0ZBQUFDLFVBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksUUFBUTtBQUdaLElBQUFBLFFBQU8sVUFBVSxDQUFDLE1BQU0sV0FBWTtBQUVsQyxhQUFPLE9BQU8sZUFBZSxDQUFDLEdBQUcsR0FBRyxFQUFFLEtBQUssV0FBWTtBQUFFLGVBQU87QUFBQSxNQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTTtBQUFBLElBQ2pGLENBQUM7QUFBQTtBQUFBOzs7QUNQRDtBQUFBLDZGQUFBQyxVQUFBQyxTQUFB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YUFBYUcsY0FBZCxLQUNuQ0Msa0JBQWtCQyxrQkFBa0JKLGFBQWFHLGNBQWQsR0FDcEM7QUFDQSxZQUFJOXJCLFNBQVMrYyxnQkFBZ0I7QUFDM0IvYyxtQkFBUytjLGVBQWV2YyxPQUF4QjtRQUNEO01BQ0Y7QUFFRGtyQixvQkFBY0c7QUFDZEYsb0JBQWNHO0FBRWQsVUFBSTlyQixTQUFTMUwsTUFBTTJvQixXQUFXO0FBQzVCcUYsOEJBQXNCc0osY0FBRDtNQUN0QjtJQUNGO0FBRUQsV0FBTztNQUNMdlQsU0FESyxTQUFBMFAsV0FDVztBQUNkLFlBQUkvbkIsU0FBU3dVLE1BQU12akIsUUFBUTtBQUN6QjI2Qix5QkFBYztRQUNmO01BQ0Y7SUFMSTtFQU9SO0FBbkRvQjtBQXdEdkIsU0FBU0csa0JBQ1BDLE9BQ0FDLE9BQ1M7QUFDVCxNQUFJRCxTQUFTQyxPQUFPO0FBQ2xCLFdBQ0VELE1BQU16NkIsUUFBUTA2QixNQUFNMTZCLE9BQ3BCeTZCLE1BQU12NkIsVUFBVXc2QixNQUFNeDZCLFNBQ3RCdTZCLE1BQU14NkIsV0FBV3k2QixNQUFNejZCLFVBQ3ZCdzZCLE1BQU10NkIsU0FBU3U2QixNQUFNdjZCO0VBRXhCO0FBRUQsU0FBTztBQUNSO0FDdEVEUixNQUFNaW9CLGdCQUFnQjtFQUFDTjtBQUFELENBQXRCOzsiLAogICJuYW1lcyI6IFsiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJmbiIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbCIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJmbiIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbCIsICJTeW1ib2wiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgImRvY3VtZW50IiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIlR5cGVFcnJvciIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJtYXgiLCAibWluIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIm1pbiIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgImV4cG9ydHMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgIlRpcHB5X2V4cG9ydHMiLCAiX19leHBvcnQiLCAiYW5pbWF0ZUZpbGwiLCAiY3JlYXRlU2luZ2xldG9uIiwgImRlbGVnYXRlIiwgImZvbGxvd0N1cnNvciIsICJoaWRlQWxsIiwgImlubGluZVBvc2l0aW9uaW5nIiwgInJvdW5kQXJyb3ciLCAiUk9VTkRfQVJST1ciLCAic3RpY2t5IiwgInRpcHB5IiwgInRpcHB5X2VzbV9kZWZhdWx0IiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIl9fdG9Db21tb25KUyIsICJ0b3AiLCAiYm90dG9tIiwgInJpZ2h0IiwgImxlZnQiLCAiYXV0byIsICJiYXNlUGxhY2VtZW50cyIsICJzdGFydCIsICJlbmQiLCAiY2xpcHBpbmdQYXJlbnRzIiwgInZpZXdwb3J0IiwgInBvcHBlciIsICJyZWZlcmVuY2UiLCAidmFyaWF0aW9uUGxhY2VtZW50cyIsICJyZWR1Y2UiLCAiYWNjIiwgInBsYWNlbWVudCIsICJjb25jYXQiLCAicGxhY2VtZW50cyIsICJiZWZvcmVSZWFkIiwgInJlYWQiLCAiYWZ0ZXJSZWFkIiwgImJlZm9yZU1haW4iLCAibWFpbiIsICJhZnRlck1haW4iLCAiYmVmb3JlV3JpdGUiLCAid3JpdGUiLCAiYWZ0ZXJXcml0ZSIsICJtb2RpZmllclBoYXNlcyIsICJnZXROb2RlTmFtZSIsICJlbGVtZW50IiwgIm5vZGVOYW1lIiwgInRvTG93ZXJDYXNlIiwgImdldFdpbmRvdyIsICJub2RlIiwgIndpbmRvdyIsICJ0b1N0cmluZyIsICJvd25lckRvY3VtZW50IiwgImRlZmF1bHRWaWV3IiwgImlzRWxlbWVudCIsICJPd25FbGVtZW50IiwgIkVsZW1lbnQiLCAiaXNIVE1MRWxlbWVudCIsICJIVE1MRWxlbWVudCIsICJpc1NoYWRvd1Jvb3QiLCAiU2hhZG93Um9vdCIsICJhcHBseVN0eWxlcyIsICJfcmVmIiwgInN0YXRlIiwgIk9iamVjdCIsICJrZXlzIiwgImVsZW1lbnRzIiwgImZvckVhY2giLCAibmFtZSIsICJzdHlsZSIsICJzdHlsZXMiLCAiYXR0cmlidXRlcyIsICJhc3NpZ24iLCAibmFtZTIiLCAidmFsdWUiLCAicmVtb3ZlQXR0cmlidXRlIiwgInNldEF0dHJpYnV0ZSIsICJlZmZlY3QiLCAiX3JlZjIiLCAiaW5pdGlhbFN0eWxlcyIsICJwb3NpdGlvbiIsICJvcHRpb25zIiwgInN0cmF0ZWd5IiwgIm1hcmdpbiIsICJhcnJvdyIsICJzdHlsZVByb3BlcnRpZXMiLCAiaGFzT3duUHJvcGVydHkiLCAic3R5bGUyIiwgInByb3BlcnR5IiwgImF0dHJpYnV0ZSIsICJhcHBseVN0eWxlc19kZWZhdWx0IiwgImVuYWJsZWQiLCAicGhhc2UiLCAiZm4iLCAicmVxdWlyZXMiLCAiZ2V0QmFzZVBsYWNlbWVudCIsICJzcGxpdCIsICJtYXgiLCAiTWF0aCIsICJtaW4iLCAicm91bmQiLCAiZ2V0VUFTdHJpbmciLCAidWFEYXRhIiwgIm5hdmlnYXRvciIsICJ1c2VyQWdlbnREYXRhIiwgImJyYW5kcyIsICJBcnJheSIsICJpc0FycmF5IiwgIm1hcCIsICJpdGVtIiwgImJyYW5kIiwgInZlcnNpb24iLCAiam9pbiIsICJ1c2VyQWdlbnQiLCAiaXNMYXlvdXRWaWV3cG9ydCIsICJ0ZXN0IiwgImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsICJpbmNsdWRlU2NhbGUiLCAiaXNGaXhlZFN0cmF0ZWd5IiwgImNsaWVudFJlY3QiLCAic2NhbGVYIiwgInNjYWxlWSIsICJvZmZzZXRXaWR0aCIsICJ3aWR0aCIsICJvZmZzZXRIZWlnaHQiLCAiaGVpZ2h0IiwgInZpc3VhbFZpZXdwb3J0IiwgImFkZFZpc3VhbE9mZnNldHMiLCAieCIsICJvZmZzZXRMZWZ0IiwgInkiLCAib2Zmc2V0VG9wIiwgImdldExheW91dFJlY3QiLCAiYWJzIiwgImNvbnRhaW5zIiwgInBhcmVudCIsICJjaGlsZCIsICJyb290Tm9kZSIsICJnZXRSb290Tm9kZSIsICJuZXh0IiwgImlzU2FtZU5vZGUiLCAicGFyZW50Tm9kZSIsICJob3N0IiwgImdldENvbXB1dGVkU3R5bGUiLCAiaXNUYWJsZUVsZW1lbnQiLCAiaW5kZXhPZiIsICJnZXREb2N1bWVudEVsZW1lbnQiLCAiZG9jdW1lbnQiLCAiZG9jdW1lbnRFbGVtZW50IiwgImdldFBhcmVudE5vZGUiLCAiYXNzaWduZWRTbG90IiwgImdldFRydWVPZmZzZXRQYXJlbnQiLCAib2Zmc2V0UGFyZW50IiwgImdldENvbnRhaW5pbmdCbG9jayIsICJpc0ZpcmVmb3giLCAiaXNJRSIsICJlbGVtZW50Q3NzIiwgImN1cnJlbnROb2RlIiwgImNzcyIsICJ0cmFuc2Zvcm0iLCAicGVyc3BlY3RpdmUiLCAiY29udGFpbiIsICJ3aWxsQ2hhbmdlIiwgImZpbHRlciIsICJnZXRPZmZzZXRQYXJlbnQiLCAid2luZG93MiIsICJnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQiLCAid2l0aGluIiwgIm1pbjIiLCAibWF4MiIsICJ3aXRoaW5NYXhDbGFtcCIsICJ2IiwgImdldEZyZXNoU2lkZU9iamVjdCIsICJtZXJnZVBhZGRpbmdPYmplY3QiLCAicGFkZGluZ09iamVjdCIsICJleHBhbmRUb0hhc2hNYXAiLCAiaGFzaE1hcCIsICJrZXkiLCAidG9QYWRkaW5nT2JqZWN0IiwgInRvUGFkZGluZ09iamVjdDIiLCAicGFkZGluZyIsICJyZWN0cyIsICJfc3RhdGUkbW9kaWZpZXJzRGF0YSQiLCAiYXJyb3dFbGVtZW50IiwgInBvcHBlck9mZnNldHMyIiwgIm1vZGlmaWVyc0RhdGEiLCAicG9wcGVyT2Zmc2V0cyIsICJiYXNlUGxhY2VtZW50IiwgImF4aXMiLCAiaXNWZXJ0aWNhbCIsICJsZW4iLCAiYXJyb3dSZWN0IiwgIm1pblByb3AiLCAibWF4UHJvcCIsICJlbmREaWZmIiwgInN0YXJ0RGlmZiIsICJhcnJvd09mZnNldFBhcmVudCIsICJjbGllbnRTaXplIiwgImNsaWVudEhlaWdodCIsICJjbGllbnRXaWR0aCIsICJjZW50ZXJUb1JlZmVyZW5jZSIsICJjZW50ZXIiLCAib2Zmc2V0MiIsICJheGlzUHJvcCIsICJjZW50ZXJPZmZzZXQiLCAiZWZmZWN0MiIsICJfb3B0aW9ucyRlbGVtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiYXJyb3dfZGVmYXVsdCIsICJyZXF1aXJlc0lmRXhpc3RzIiwgImdldFZhcmlhdGlvbiIsICJ1bnNldFNpZGVzIiwgInJvdW5kT2Zmc2V0c0J5RFBSIiwgIndpbiIsICJkcHIiLCAiZGV2aWNlUGl4ZWxSYXRpbyIsICJtYXBUb1N0eWxlcyIsICJfT2JqZWN0JGFzc2lnbjIiLCAicG9wcGVyMiIsICJwb3BwZXJSZWN0IiwgInZhcmlhdGlvbiIsICJvZmZzZXRzIiwgImdwdUFjY2VsZXJhdGlvbiIsICJhZGFwdGl2ZSIsICJyb3VuZE9mZnNldHMiLCAiaXNGaXhlZCIsICJfb2Zmc2V0cyR4IiwgIl9vZmZzZXRzJHkiLCAiX3JlZjMiLCAiaGFzWCIsICJoYXNZIiwgInNpZGVYIiwgInNpZGVZIiwgImhlaWdodFByb3AiLCAid2lkdGhQcm9wIiwgIm9mZnNldFkiLCAib2Zmc2V0WCIsICJjb21tb25TdHlsZXMiLCAiX3JlZjQiLCAiX09iamVjdCRhc3NpZ24iLCAiY29tcHV0ZVN0eWxlcyIsICJfcmVmNSIsICJfb3B0aW9ucyRncHVBY2NlbGVyYXQiLCAiX29wdGlvbnMkYWRhcHRpdmUiLCAiX29wdGlvbnMkcm91bmRPZmZzZXRzIiwgImNvbXB1dGVTdHlsZXNfZGVmYXVsdCIsICJkYXRhIiwgInBhc3NpdmUiLCAiZWZmZWN0MyIsICJpbnN0YW5jZSIsICJfb3B0aW9ucyRzY3JvbGwiLCAic2Nyb2xsIiwgIl9vcHRpb25zJHJlc2l6ZSIsICJyZXNpemUiLCAic2Nyb2xsUGFyZW50cyIsICJzY3JvbGxQYXJlbnQiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJ1cGRhdGUiLCAicmVtb3ZlRXZlbnRMaXN0ZW5lciIsICJldmVudExpc3RlbmVyc19kZWZhdWx0IiwgImhhc2giLCAiZ2V0T3Bwb3NpdGVQbGFjZW1lbnQiLCAicmVwbGFjZSIsICJtYXRjaGVkIiwgImhhc2gyIiwgImdldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50IiwgImdldFdpbmRvd1Njcm9sbCIsICJzY3JvbGxMZWZ0IiwgInBhZ2VYT2Zmc2V0IiwgInNjcm9sbFRvcCIsICJwYWdlWU9mZnNldCIsICJnZXRXaW5kb3dTY3JvbGxCYXJYIiwgImdldFZpZXdwb3J0UmVjdCIsICJodG1sIiwgImxheW91dFZpZXdwb3J0IiwgImdldERvY3VtZW50UmVjdCIsICJfZWxlbWVudCRvd25lckRvY3VtZW4iLCAid2luU2Nyb2xsIiwgImJvZHkiLCAic2Nyb2xsV2lkdGgiLCAic2Nyb2xsSGVpZ2h0IiwgImRpcmVjdGlvbiIsICJpc1Njcm9sbFBhcmVudCIsICJfZ2V0Q29tcHV0ZWRTdHlsZSIsICJvdmVyZmxvdyIsICJvdmVyZmxvd1giLCAib3ZlcmZsb3dZIiwgImdldFNjcm9sbFBhcmVudCIsICJsaXN0U2Nyb2xsUGFyZW50cyIsICJsaXN0IiwgImlzQm9keSIsICJ0YXJnZXQiLCAidXBkYXRlZExpc3QiLCAicmVjdFRvQ2xpZW50UmVjdCIsICJyZWN0IiwgImdldElubmVyQm91bmRpbmdDbGllbnRSZWN0IiwgImNsaWVudFRvcCIsICJjbGllbnRMZWZ0IiwgImdldENsaWVudFJlY3RGcm9tTWl4ZWRUeXBlIiwgImNsaXBwaW5nUGFyZW50IiwgImdldENsaXBwaW5nUGFyZW50cyIsICJjbGlwcGluZ1BhcmVudHMyIiwgImNhbkVzY2FwZUNsaXBwaW5nIiwgImNsaXBwZXJFbGVtZW50IiwgImdldENsaXBwaW5nUmVjdCIsICJib3VuZGFyeSIsICJyb290Qm91bmRhcnkiLCAibWFpbkNsaXBwaW5nUGFyZW50cyIsICJmaXJzdENsaXBwaW5nUGFyZW50IiwgImNsaXBwaW5nUmVjdCIsICJhY2NSZWN0IiwgImNvbXB1dGVPZmZzZXRzIiwgInJlZmVyZW5jZTIiLCAiY29tbW9uWCIsICJjb21tb25ZIiwgIm1haW5BeGlzIiwgImRldGVjdE92ZXJmbG93IiwgIl9vcHRpb25zIiwgIl9vcHRpb25zJHBsYWNlbWVudCIsICJfb3B0aW9ucyRzdHJhdGVneSIsICJfb3B0aW9ucyRib3VuZGFyeSIsICJfb3B0aW9ucyRyb290Qm91bmRhcnkiLCAiX29wdGlvbnMkZWxlbWVudENvbnRlIiwgImVsZW1lbnRDb250ZXh0IiwgIl9vcHRpb25zJGFsdEJvdW5kYXJ5IiwgImFsdEJvdW5kYXJ5IiwgIl9vcHRpb25zJHBhZGRpbmciLCAiYWx0Q29udGV4dCIsICJjbGlwcGluZ0NsaWVudFJlY3QiLCAiY29udGV4dEVsZW1lbnQiLCAicmVmZXJlbmNlQ2xpZW50UmVjdCIsICJwb3BwZXJDbGllbnRSZWN0IiwgImVsZW1lbnRDbGllbnRSZWN0IiwgIm92ZXJmbG93T2Zmc2V0cyIsICJvZmZzZXREYXRhIiwgIm9mZnNldCIsICJtdWx0aXBseSIsICJjb21wdXRlQXV0b1BsYWNlbWVudCIsICJmbGlwVmFyaWF0aW9ucyIsICJfb3B0aW9ucyRhbGxvd2VkQXV0b1AiLCAiYWxsb3dlZEF1dG9QbGFjZW1lbnRzIiwgInBsYWNlbWVudHMyIiwgInBsYWNlbWVudDIiLCAiYWxsb3dlZFBsYWNlbWVudHMiLCAibGVuZ3RoIiwgIm92ZXJmbG93cyIsICJzb3J0IiwgImEiLCAiYiIsICJnZXRFeHBhbmRlZEZhbGxiYWNrUGxhY2VtZW50cyIsICJvcHBvc2l0ZVBsYWNlbWVudCIsICJmbGlwIiwgIl9za2lwIiwgIl9vcHRpb25zJG1haW5BeGlzIiwgImNoZWNrTWFpbkF4aXMiLCAiX29wdGlvbnMkYWx0QXhpcyIsICJhbHRBeGlzIiwgImNoZWNrQWx0QXhpcyIsICJzcGVjaWZpZWRGYWxsYmFja1BsYWNlbWVudHMiLCAiZmFsbGJhY2tQbGFjZW1lbnRzIiwgIl9vcHRpb25zJGZsaXBWYXJpYXRpbyIsICJwcmVmZXJyZWRQbGFjZW1lbnQiLCAiaXNCYXNlUGxhY2VtZW50IiwgInJlZmVyZW5jZVJlY3QiLCAiY2hlY2tzTWFwIiwgIk1hcCIsICJtYWtlRmFsbGJhY2tDaGVja3MiLCAiZmlyc3RGaXR0aW5nUGxhY2VtZW50IiwgImkiLCAiX2Jhc2VQbGFjZW1lbnQiLCAiaXNTdGFydFZhcmlhdGlvbiIsICJtYWluVmFyaWF0aW9uU2lkZSIsICJhbHRWYXJpYXRpb25TaWRlIiwgImNoZWNrcyIsICJwdXNoIiwgImV2ZXJ5IiwgImNoZWNrIiwgInNldCIsICJudW1iZXJPZkNoZWNrcyIsICJfbG9vcCIsICJfbG9vcDIiLCAiX2kyIiwgImZpdHRpbmdQbGFjZW1lbnQiLCAiZmluZCIsICJjaGVja3MyIiwgImdldCIsICJzbGljZSIsICJfaSIsICJfcmV0IiwgInJlc2V0IiwgImZsaXBfZGVmYXVsdCIsICJnZXRTaWRlT2Zmc2V0cyIsICJwcmV2ZW50ZWRPZmZzZXRzIiwgImlzQW55U2lkZUZ1bGx5Q2xpcHBlZCIsICJzb21lIiwgInNpZGUiLCAiaGlkZSIsICJwcmV2ZW50T3ZlcmZsb3ciLCAicmVmZXJlbmNlT3ZlcmZsb3ciLCAicG9wcGVyQWx0T3ZlcmZsb3ciLCAicmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzIiwgInBvcHBlckVzY2FwZU9mZnNldHMiLCAiaXNSZWZlcmVuY2VIaWRkZW4iLCAiaGFzUG9wcGVyRXNjYXBlZCIsICJoaWRlX2RlZmF1bHQiLCAiZGlzdGFuY2VBbmRTa2lkZGluZ1RvWFkiLCAiaW52ZXJ0RGlzdGFuY2UiLCAic2tpZGRpbmciLCAiZGlzdGFuY2UiLCAiX29wdGlvbnMkb2Zmc2V0IiwgIl9kYXRhJHN0YXRlJHBsYWNlbWVudCIsICJvZmZzZXRfZGVmYXVsdCIsICJwb3BwZXJPZmZzZXRzX2RlZmF1bHQiLCAiZ2V0QWx0QXhpcyIsICJfb3B0aW9ucyR0ZXRoZXIiLCAidGV0aGVyIiwgIl9vcHRpb25zJHRldGhlck9mZnNldCIsICJ0ZXRoZXJPZmZzZXQiLCAidGV0aGVyT2Zmc2V0VmFsdWUiLCAibm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlIiwgIm9mZnNldE1vZGlmaWVyU3RhdGUiLCAiX29mZnNldE1vZGlmaWVyU3RhdGUkIiwgIm1haW5TaWRlIiwgImFsdFNpZGUiLCAiYWRkaXRpdmUiLCAibWluTGVuIiwgIm1heExlbiIsICJhcnJvd1BhZGRpbmdPYmplY3QiLCAiYXJyb3dQYWRkaW5nTWluIiwgImFycm93UGFkZGluZ01heCIsICJhcnJvd0xlbiIsICJtaW5PZmZzZXQiLCAibWF4T2Zmc2V0IiwgImNsaWVudE9mZnNldCIsICJvZmZzZXRNb2RpZmllclZhbHVlIiwgInRldGhlck1pbiIsICJ0ZXRoZXJNYXgiLCAicHJldmVudGVkT2Zmc2V0IiwgIl9vZmZzZXRNb2RpZmllclN0YXRlJDIiLCAiX21haW5TaWRlIiwgIl9hbHRTaWRlIiwgIl9vZmZzZXQiLCAiX2xlbiIsICJfbWluIiwgIl9tYXgiLCAiaXNPcmlnaW5TaWRlIiwgIl9vZmZzZXRNb2RpZmllclZhbHVlIiwgIl90ZXRoZXJNaW4iLCAiX3RldGhlck1heCIsICJfcHJldmVudGVkT2Zmc2V0IiwgInByZXZlbnRPdmVyZmxvd19kZWZhdWx0IiwgImdldEhUTUxFbGVtZW50U2Nyb2xsIiwgImdldE5vZGVTY3JvbGwiLCAiaXNFbGVtZW50U2NhbGVkIiwgImdldENvbXBvc2l0ZVJlY3QiLCAiZWxlbWVudE9yVmlydHVhbEVsZW1lbnQiLCAiaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQiLCAib2Zmc2V0UGFyZW50SXNTY2FsZWQiLCAib3JkZXIiLCAibW9kaWZpZXJzIiwgInZpc2l0ZWQiLCAiU2V0IiwgInJlc3VsdCIsICJtb2RpZmllciIsICJhZGQiLCAiZGVwIiwgImhhcyIsICJkZXBNb2RpZmllciIsICJvcmRlck1vZGlmaWVycyIsICJvcmRlcmVkTW9kaWZpZXJzIiwgImRlYm91bmNlIiwgImZuNiIsICJwZW5kaW5nIiwgIlByb21pc2UiLCAicmVzb2x2ZSIsICJ0aGVuIiwgIm1lcmdlQnlOYW1lIiwgIm1lcmdlZCIsICJtZXJnZWQyIiwgImN1cnJlbnQiLCAiZXhpc3RpbmciLCAiREVGQVVMVF9PUFRJT05TIiwgImFyZVZhbGlkRWxlbWVudHMiLCAiYXJndW1lbnRzIiwgImFyZ3MiLCAiX2tleSIsICJwb3BwZXJHZW5lcmF0b3IiLCAiZ2VuZXJhdG9yT3B0aW9ucyIsICJfZ2VuZXJhdG9yT3B0aW9ucyIsICJfZ2VuZXJhdG9yT3B0aW9ucyRkZWYiLCAiZGVmYXVsdE1vZGlmaWVycyIsICJkZWZhdWx0TW9kaWZpZXJzMiIsICJfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyIiwgImRlZmF1bHRPcHRpb25zIiwgImNyZWF0ZVBvcHBlcjIiLCAiZWZmZWN0Q2xlYW51cEZucyIsICJpc0Rlc3Ryb3llZCIsICJzZXRPcHRpb25zIiwgInNldE9wdGlvbnNBY3Rpb24iLCAib3B0aW9uczIiLCAiY2xlYW51cE1vZGlmaWVyRWZmZWN0cyIsICJtIiwgInJ1bk1vZGlmaWVyRWZmZWN0cyIsICJmb3JjZVVwZGF0ZSIsICJfc3RhdGUkZWxlbWVudHMiLCAicmVmZXJlbmNlMyIsICJwb3BwZXIzIiwgImluZGV4IiwgIl9zdGF0ZSRvcmRlcmVkTW9kaWZpZSIsICJfc3RhdGUkb3JkZXJlZE1vZGlmaWUyIiwgImRlc3Ryb3kiLCAic3RhdGUyIiwgIm9uRmlyc3RVcGRhdGUiLCAiX3JlZiRvcHRpb25zIiwgImVmZmVjdDUiLCAiY2xlYW51cEZuIiwgIm5vb3BGbiIsICJub29wRm4yIiwgImNyZWF0ZVBvcHBlciIsICJCT1hfQ0xBU1MiLCAiQ09OVEVOVF9DTEFTUyIsICJCQUNLRFJPUF9DTEFTUyIsICJBUlJPV19DTEFTUyIsICJTVkdfQVJST1dfQ0xBU1MiLCAiVE9VQ0hfT1BUSU9OUyIsICJjYXB0dXJlIiwgIlRJUFBZX0RFRkFVTFRfQVBQRU5EX1RPIiwgIlRJUFBZX0RFRkFVTFRfQVBQRU5EX1RPMiIsICJnZXRWYWx1ZUF0SW5kZXhPclJldHVybiIsICJkZWZhdWx0VmFsdWUiLCAiaXNUeXBlIiwgInR5cGUiLCAic3RyIiwgImNhbGwiLCAiaW52b2tlV2l0aEFyZ3NPclJldHVybiIsICJhcHBseSIsICJkZWJvdW5jZTIiLCAibXMiLCAidGltZW91dCIsICJhcmciLCAiY2xlYXJUaW1lb3V0IiwgInNldFRpbWVvdXQiLCAicmVtb3ZlUHJvcGVydGllcyIsICJvYmoiLCAiY2xvbmUiLCAic3BsaXRCeVNwYWNlcyIsICJCb29sZWFuIiwgIm5vcm1hbGl6ZVRvQXJyYXkiLCAicHVzaElmVW5pcXVlIiwgImFyciIsICJ1bmlxdWUiLCAiZ2V0QmFzZVBsYWNlbWVudDIiLCAiYXJyYXlGcm9tIiwgInJlbW92ZVVuZGVmaW5lZFByb3BzIiwgImRpdiIsICJjcmVhdGVFbGVtZW50IiwgImlzRWxlbWVudDIiLCAiaXNOb2RlTGlzdCIsICJpc01vdXNlRXZlbnQiLCAiaXNSZWZlcmVuY2VFbGVtZW50IiwgIl90aXBweSIsICJnZXRBcnJheU9mRWxlbWVudHMiLCAicXVlcnlTZWxlY3RvckFsbCIsICJzZXRUcmFuc2l0aW9uRHVyYXRpb24iLCAiZWxzIiwgImVsIiwgInRyYW5zaXRpb25EdXJhdGlvbiIsICJzZXRWaXNpYmlsaXR5U3RhdGUiLCAiZ2V0T3duZXJEb2N1bWVudCIsICJlbGVtZW50T3JFbGVtZW50cyIsICJfbm9ybWFsaXplVG9BcnJheSIsICJpc0N1cnNvck91dHNpZGVJbnRlcmFjdGl2ZUJvcmRlciIsICJwb3BwZXJUcmVlRGF0YSIsICJldmVudCIsICJjbGllbnRYIiwgImNsaWVudFkiLCAicG9wcGVyU3RhdGUiLCAicHJvcHMiLCAiaW50ZXJhY3RpdmVCb3JkZXIiLCAidG9wRGlzdGFuY2UiLCAiYm90dG9tRGlzdGFuY2UiLCAibGVmdERpc3RhbmNlIiwgInJpZ2h0RGlzdGFuY2UiLCAiZXhjZWVkc1RvcCIsICJleGNlZWRzQm90dG9tIiwgImV4Y2VlZHNMZWZ0IiwgImV4Y2VlZHNSaWdodCIsICJ1cGRhdGVUcmFuc2l0aW9uRW5kTGlzdGVuZXIiLCAiYm94IiwgImFjdGlvbiIsICJsaXN0ZW5lciIsICJtZXRob2QiLCAiYWN0dWFsQ29udGFpbnMiLCAiX3RhcmdldCRnZXRSb290Tm9kZSIsICJjdXJyZW50SW5wdXQiLCAiaXNUb3VjaCIsICJsYXN0TW91c2VNb3ZlVGltZSIsICJvbkRvY3VtZW50VG91Y2hTdGFydCIsICJwZXJmb3JtYW5jZSIsICJvbkRvY3VtZW50TW91c2VNb3ZlIiwgIm5vdyIsICJvbldpbmRvd0JsdXIiLCAiYWN0aXZlRWxlbWVudCIsICJibHVyIiwgImlzVmlzaWJsZSIsICJiaW5kR2xvYmFsRXZlbnRMaXN0ZW5lcnMiLCAiaXNCcm93c2VyIiwgImlzSUUxMSIsICJtc0NyeXB0byIsICJyZXNldFZpc2l0ZWRNZXNzYWdlcyIsICJwbHVnaW5Qcm9wcyIsICJyZW5kZXJQcm9wcyIsICJhbGxvd0hUTUwiLCAiYW5pbWF0aW9uIiwgImNvbnRlbnQiLCAiaW5lcnRpYSIsICJtYXhXaWR0aCIsICJyb2xlIiwgInRoZW1lIiwgInpJbmRleCIsICJkZWZhdWx0UHJvcHMiLCAiYXBwZW5kVG8iLCAiYXJpYSIsICJleHBhbmRlZCIsICJkZWxheSIsICJkdXJhdGlvbiIsICJnZXRSZWZlcmVuY2VDbGllbnRSZWN0IiwgImhpZGVPbkNsaWNrIiwgImlnbm9yZUF0dHJpYnV0ZXMiLCAiaW50ZXJhY3RpdmUiLCAiaW50ZXJhY3RpdmVEZWJvdW5jZSIsICJtb3ZlVHJhbnNpdGlvbiIsICJvbkFmdGVyVXBkYXRlIiwgIm9uQmVmb3JlVXBkYXRlIiwgIm9uQ3JlYXRlIiwgIm9uRGVzdHJveSIsICJvbkhpZGRlbiIsICJvbkhpZGUiLCAib25Nb3VudCIsICJvblNob3ciLCAib25TaG93biIsICJvblRyaWdnZXIiLCAib25VbnRyaWdnZXIiLCAib25DbGlja091dHNpZGUiLCAicGx1Z2lucyIsICJwb3BwZXJPcHRpb25zIiwgInJlbmRlciIsICJzaG93T25DcmVhdGUiLCAidG91Y2giLCAidHJpZ2dlciIsICJ0cmlnZ2VyVGFyZ2V0IiwgImRlZmF1bHRLZXlzIiwgInNldERlZmF1bHRQcm9wcyIsICJzZXREZWZhdWx0UHJvcHMyIiwgInBhcnRpYWxQcm9wcyIsICJ2YWxpZGF0ZVByb3BzIiwgImdldEV4dGVuZGVkUGFzc2VkUHJvcHMiLCAicGFzc2VkUHJvcHMiLCAicGx1Z2luUHJvcHMyIiwgInBsdWdpbiIsICJfbmFtZSIsICJnZXREYXRhQXR0cmlidXRlUHJvcHMiLCAicHJvcEtleXMiLCAidmFsdWVBc1N0cmluZyIsICJnZXRBdHRyaWJ1dGUiLCAidHJpbSIsICJKU09OIiwgInBhcnNlIiwgImUiLCAiZXZhbHVhdGVQcm9wcyIsICJvdXQiLCAiaW5uZXJIVE1MIiwgImlubmVySFRNTDIiLCAiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCAiY3JlYXRlQXJyb3dFbGVtZW50IiwgImFycm93MiIsICJjbGFzc05hbWUiLCAiYXBwZW5kQ2hpbGQiLCAic2V0Q29udGVudCIsICJ0ZXh0Q29udGVudCIsICJnZXRDaGlsZHJlbiIsICJmaXJzdEVsZW1lbnRDaGlsZCIsICJib3hDaGlsZHJlbiIsICJjaGlsZHJlbiIsICJjbGFzc0xpc3QiLCAiYmFja2Ryb3AiLCAib25VcGRhdGUiLCAicHJldlByb3BzIiwgIm5leHRQcm9wcyIsICJfZ2V0Q2hpbGRyZW4iLCAiYm94MiIsICJjb250ZW50MiIsICJyZW1vdmVDaGlsZCIsICIkJHRpcHB5IiwgImlkQ291bnRlciIsICJtb3VzZU1vdmVMaXN0ZW5lcnMiLCAibW91bnRlZEluc3RhbmNlcyIsICJjcmVhdGVUaXBweSIsICJzaG93VGltZW91dCIsICJoaWRlVGltZW91dCIsICJzY2hlZHVsZUhpZGVBbmltYXRpb25GcmFtZSIsICJpc1Zpc2libGVGcm9tQ2xpY2siLCAiZGlkSGlkZUR1ZVRvRG9jdW1lbnRNb3VzZURvd24iLCAiZGlkVG91Y2hNb3ZlIiwgImlnbm9yZU9uRmlyc3RVcGRhdGUiLCAibGFzdFRyaWdnZXJFdmVudCIsICJjdXJyZW50VHJhbnNpdGlvbkVuZExpc3RlbmVyIiwgImxpc3RlbmVycyIsICJkZWJvdW5jZWRPbk1vdXNlTW92ZSIsICJvbk1vdXNlTW92ZSIsICJjdXJyZW50VGFyZ2V0IiwgImlkIiwgInBvcHBlckluc3RhbmNlIiwgImlzRW5hYmxlZCIsICJpc01vdW50ZWQiLCAiaXNTaG93biIsICJjbGVhckRlbGF5VGltZW91dHMiLCAic2V0UHJvcHMiLCAic2V0Q29udGVudDIiLCAic2hvdyIsICJoaWRlMiIsICJoaWRlV2l0aEludGVyYWN0aXZpdHkiLCAiZW5hYmxlIiwgImRpc2FibGUiLCAidW5tb3VudCIsICJlcnJvcldoZW4iLCAiX3Byb3BzJHJlbmRlciIsICJwbHVnaW5zSG9va3MiLCAiaGFzQXJpYUV4cGFuZGVkIiwgImhhc0F0dHJpYnV0ZSIsICJhZGRMaXN0ZW5lcnMiLCAiaGFuZGxlQXJpYUV4cGFuZGVkQXR0cmlidXRlIiwgImhhbmRsZVN0eWxlcyIsICJpbnZva2VIb29rIiwgInNjaGVkdWxlU2hvdyIsICJnZXREb2N1bWVudCIsICJnZXROb3JtYWxpemVkVG91Y2hTZXR0aW5ncyIsICJnZXRJc0N1c3RvbVRvdWNoQmVoYXZpb3IiLCAiZ2V0SXNEZWZhdWx0UmVuZGVyRm4iLCAiX2luc3RhbmNlJHByb3BzJHJlbmRlIiwgImdldEN1cnJlbnRUYXJnZXQiLCAiZ2V0RGVmYXVsdFRlbXBsYXRlQ2hpbGRyZW4iLCAiZ2V0RGVsYXkiLCAiaXNTaG93IiwgImZyb21IaWRlIiwgInBvaW50ZXJFdmVudHMiLCAiaG9vayIsICJzaG91bGRJbnZva2VQcm9wc0hvb2siLCAicGx1Z2luSG9va3MiLCAiX2luc3RhbmNlJHByb3BzIiwgImhhbmRsZUFyaWFDb250ZW50QXR0cmlidXRlIiwgImF0dHIiLCAiaWQyIiwgIm5vZGVzIiwgImN1cnJlbnRWYWx1ZSIsICJuZXh0VmFsdWUiLCAiY2xlYW51cEludGVyYWN0aXZlTW91c2VMaXN0ZW5lcnMiLCAib25Eb2N1bWVudFByZXNzIiwgImFjdHVhbFRhcmdldCIsICJjb21wb3NlZFBhdGgiLCAicmVtb3ZlRG9jdW1lbnRQcmVzcyIsICJvblRvdWNoTW92ZSIsICJvblRvdWNoU3RhcnQiLCAiYWRkRG9jdW1lbnRQcmVzcyIsICJkb2MiLCAib25UcmFuc2l0aW9uZWRPdXQiLCAiY2FsbGJhY2siLCAib25UcmFuc2l0aW9uRW5kIiwgIm9uVHJhbnNpdGlvbmVkSW4iLCAib24iLCAiZXZlbnRUeXBlIiwgImhhbmRsZXIiLCAib25UcmlnZ2VyMiIsICJvbk1vdXNlTGVhdmUiLCAib25CbHVyT3JGb2N1c091dCIsICJyZW1vdmVMaXN0ZW5lcnMiLCAiX2xhc3RUcmlnZ2VyRXZlbnQiLCAic2hvdWxkU2NoZWR1bGVDbGlja0hpZGUiLCAiaXNFdmVudExpc3RlbmVyU3RvcHBlZCIsICJ3YXNGb2N1c2VkIiwgInNjaGVkdWxlSGlkZSIsICJpc0N1cnNvck92ZXJSZWZlcmVuY2VPclBvcHBlciIsICJnZXROZXN0ZWRQb3BwZXJUcmVlIiwgIl9pbnN0YW5jZSRwb3BwZXJJbnN0YSIsICJpbnN0YW5jZTIiLCAic2hvdWxkQmFpbCIsICJyZWxhdGVkVGFyZ2V0IiwgImNyZWF0ZVBvcHBlckluc3RhbmNlIiwgImRlc3Ryb3lQb3BwZXJJbnN0YW5jZSIsICJfaW5zdGFuY2UkcHJvcHMyIiwgImNvbXB1dGVkUmVmZXJlbmNlIiwgInRpcHB5TW9kaWZpZXIiLCAiX2dldERlZmF1bHRUZW1wbGF0ZUNoIiwgIm1vdW50IiwgIndhcm5XaGVuIiwgIm5leHRFbGVtZW50U2libGluZyIsICJfZ2V0Tm9ybWFsaXplZFRvdWNoU2UiLCAidG91Y2hWYWx1ZSIsICJ0b3VjaERlbGF5IiwgInJlcXVlc3RBbmltYXRpb25GcmFtZSIsICJjYW5jZWxBbmltYXRpb25GcmFtZSIsICJjcmVhdGVNZW1vcnlMZWFrV2FybmluZyIsICJuZXN0ZWRQb3BwZXIiLCAiaXNBbHJlYWR5VmlzaWJsZSIsICJpc0Rpc2FibGVkIiwgImlzVG91Y2hBbmRUb3VjaERpc2FibGVkIiwgInZpc2liaWxpdHkiLCAidHJhbnNpdGlvbiIsICJfZ2V0RGVmYXVsdFRlbXBsYXRlQ2gyIiwgIm9uRmlyc3RVcGRhdGUyIiwgIl9pbnN0YW5jZSRwb3BwZXJJbnN0YTIiLCAiX2dldERlZmF1bHRUZW1wbGF0ZUNoMyIsICJfYm94IiwgIl9jb250ZW50IiwgImlzQWxyZWFkeUhpZGRlbiIsICJfZ2V0RGVmYXVsdFRlbXBsYXRlQ2g0IiwgInRhcmdldHMiLCAib3B0aW9uYWxQcm9wcyIsICJ2YWxpZGF0ZVRhcmdldHMiLCAiaXNTaW5nbGVDb250ZW50RWxlbWVudCIsICJpc01vcmVUaGFuT25lUmVmZXJlbmNlRWxlbWVudCIsICJpbnN0YW5jZXMiLCAiaGlkZUFsbDIiLCAiX3RlbXAiLCAiZXhjbHVkZWRSZWZlcmVuY2VPckluc3RhbmNlIiwgImV4Y2x1ZGUiLCAiaXNFeGNsdWRlZCIsICJvcmlnaW5hbER1cmF0aW9uIiwgImFwcGx5U3R5bGVzTW9kaWZpZXIiLCAiZWZmZWN0NCIsICJjcmVhdGVTaW5nbGV0b24yIiwgInRpcHB5SW5zdGFuY2VzIiwgIl9vcHRpb25hbFByb3BzJHBvcHBlciIsICJTdHJpbmciLCAiaW5kaXZpZHVhbEluc3RhbmNlcyIsICJyZWZlcmVuY2VzIiwgInRyaWdnZXJUYXJnZXRzIiwgIm92ZXJyaWRlcyIsICJpbnRlcmNlcHRTZXRQcm9wc0NsZWFudXBzIiwgInNob3duT25DcmVhdGUiLCAic2V0VHJpZ2dlclRhcmdldHMiLCAic2V0UmVmZXJlbmNlcyIsICJlbmFibGVJbnN0YW5jZXMiLCAiaW50ZXJjZXB0U2V0UHJvcHMiLCAic2luZ2xldG9uMiIsICJvcmlnaW5hbFNldFByb3BzMiIsICJwcmVwYXJlSW5zdGFuY2UiLCAib3ZlcnJpZGVQcm9wcyIsICJwcm9wIiwgIl9yZWZlcmVuY2VzJGluZGV4IiwgIm9uRGVzdHJveTIiLCAib25IaWRkZW4yIiwgIm9uQ2xpY2tPdXRzaWRlMiIsICJvblNob3cyIiwgInNpbmdsZXRvbiIsICJvcmlnaW5hbFNob3ciLCAicmVmIiwgInNob3dOZXh0IiwgImZpcnN0IiwgInNob3dQcmV2aW91cyIsICJsYXN0IiwgIm9yaWdpbmFsU2V0UHJvcHMiLCAic2V0SW5zdGFuY2VzIiwgIm5leHRJbnN0YW5jZXMiLCAiQlVCQkxJTkdfRVZFTlRTX01BUCIsICJtb3VzZW92ZXIiLCAiZm9jdXNpbiIsICJjbGljayIsICJjaGlsZFRpcHB5SW5zdGFuY2VzIiwgImRpc2FibGVkIiwgIm5hdGl2ZVByb3BzIiwgInBhcmVudFByb3BzIiwgImNoaWxkUHJvcHMiLCAicmV0dXJuVmFsdWUiLCAibm9ybWFsaXplZFJldHVyblZhbHVlIiwgInRhcmdldE5vZGUiLCAiY2xvc2VzdCIsICJhZGRFdmVudExpc3RlbmVycyIsICJyZW1vdmVFdmVudExpc3RlbmVycyIsICJhcHBseU11dGF0aW9ucyIsICJvcmlnaW5hbERlc3Ryb3kiLCAib3JpZ2luYWxFbmFibGUiLCAib3JpZ2luYWxEaXNhYmxlIiwgInNob3VsZERlc3Ryb3lDaGlsZEluc3RhbmNlcyIsICJmbjIiLCAiY3JlYXRlQmFja2Ryb3BFbGVtZW50IiwgIm9uQ3JlYXRlMiIsICJpbnNlcnRCZWZvcmUiLCAib25Nb3VudDIiLCAiTnVtYmVyIiwgInRyYW5zaXRpb25EZWxheSIsICJvbkhpZGUyIiwgIm1vdXNlQ29vcmRzIiwgImFjdGl2ZUluc3RhbmNlcyIsICJzdG9yZU1vdXNlQ29vcmRzIiwgImFkZE1vdXNlQ29vcmRzTGlzdGVuZXIiLCAicmVtb3ZlTW91c2VDb29yZHNMaXN0ZW5lciIsICJmbjMiLCAiaXNJbnRlcm5hbFVwZGF0ZSIsICJ3YXNGb2N1c0V2ZW50IiwgImlzVW5tb3VudGVkIiwgImdldElzSW5pdGlhbEJlaGF2aW9yIiwgImFkZExpc3RlbmVyIiwgInJlbW92ZUxpc3RlbmVyIiwgInVuc2V0R2V0UmVmZXJlbmNlQ2xpZW50UmVjdCIsICJpc0N1cnNvck92ZXJSZWZlcmVuY2UiLCAiZm9sbG93Q3Vyc29yMiIsICJyZWxhdGl2ZVgiLCAicmVsYXRpdmVZIiwgInJlY3QyIiwgInRvcDIiLCAicmlnaHQyIiwgImJvdHRvbTIiLCAibGVmdDIiLCAiY3JlYXRlIiwgIm9uQmVmb3JlVXBkYXRlMiIsICJvbkFmdGVyVXBkYXRlMiIsICJfIiwgImdldFByb3BzIiwgIl9wcm9wcyRwb3BwZXJPcHRpb25zIiwgImZuNCIsICJjdXJzb3JSZWN0SW5kZXgiLCAidHJpZWRQbGFjZW1lbnRzIiwgIl9nZXRSZWZlcmVuY2VDbGllbnRSZWN0IiwgImdldElubGluZUJvdW5kaW5nQ2xpZW50UmVjdCIsICJnZXRDbGllbnRSZWN0cyIsICJzZXRJbnRlcm5hbFByb3BzIiwgImFkZE1vZGlmaWVyIiwgImN1cnNvclJlY3QiLCAiY3VycmVudEJhc2VQbGFjZW1lbnQiLCAiYm91bmRpbmdSZWN0IiwgImNsaWVudFJlY3RzIiwgImZpcnN0UmVjdCIsICJsYXN0UmVjdCIsICJpc1RvcCIsICJtaW5MZWZ0IiwgIm1heFJpZ2h0IiwgIm1lYXN1cmVSZWN0cyIsICJfdG9wIiwgIl9ib3R0b20iLCAiX2xlZnQiLCAiX3JpZ2h0IiwgIl93aWR0aCIsICJfaGVpZ2h0IiwgImZuNSIsICJnZXRSZWZlcmVuY2UiLCAic2hvdWxkQ2hlY2siLCAicHJldlJlZlJlY3QiLCAicHJldlBvcFJlY3QiLCAidXBkYXRlUG9zaXRpb24iLCAiY3VycmVudFJlZlJlY3QiLCAiY3VycmVudFBvcFJlY3QiLCAiYXJlUmVjdHNEaWZmZXJlbnQiLCAicmVjdEEiLCAicmVjdEIiXQp9Cg==

})();

/* </nowiki> */

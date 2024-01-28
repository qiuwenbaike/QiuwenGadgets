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
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames2 = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS2 = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames2(cb)[0]])((mod = {
    exports: {}
  }).exports, mod), mod.exports;
};
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
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);
var require_popper = __commonJS2({
  "node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/dist/cjs/popper.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
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
    function getWindowScroll(node) {
      var win = getWindow(node);
      var scrollLeft = win.pageXOffset;
      var scrollTop = win.pageYOffset;
      return {
        scrollLeft,
        scrollTop
      };
    }
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
    function getNodeName(element) {
      return element ? (element.nodeName || "").toLowerCase() : null;
    }
    function getDocumentElement(element) {
      return ((isElement(element) ? element.ownerDocument : (
        // $FlowFixMe[prop-missing]
        element.document
      )) || window.document).documentElement;
    }
    function getWindowScrollBarX(element) {
      return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
    }
    function getComputedStyle(element) {
      return getWindow(element).getComputedStyle(element);
    }
    function isScrollParent(element) {
      var _getComputedStyle = getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
      return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
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
    function isTableElement(element) {
      return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
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
    function debounce(fn) {
      var pending;
      return function() {
        if (!pending) {
          pending = new Promise(function(resolve) {
            Promise.resolve().then(function() {
              pending = void 0;
              resolve(fn());
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
    function getBasePlacement(placement) {
      return placement.split("-")[0];
    }
    function getVariation(placement) {
      return placement.split("-")[1];
    }
    function getMainAxisFromPlacement(placement) {
      return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
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
        }
      }
      return offsets;
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
              var _state$orderedModifie = state.orderedModifiers[index], fn = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
              if (typeof fn === "function") {
                state = fn({
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
            var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect2 = _ref.effect;
            if (typeof effect2 === "function") {
              var cleanupFn = effect2({
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
          effectCleanupFns.forEach(function(fn) {
            return fn();
          });
          effectCleanupFns = [];
        }
        return instance;
      };
    }
    var passive = {
      passive: true
    };
    function effect$2(_ref) {
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
    var eventListeners = {
      name: "eventListeners",
      enabled: true,
      phase: "write",
      fn: function fn() {
      },
      effect: effect$2,
      data: {}
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
    var popperOffsets$1 = {
      name: "popperOffsets",
      enabled: true,
      phase: "read",
      fn: popperOffsets,
      data: {}
    };
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
    var computeStyles$1 = {
      name: "computeStyles",
      enabled: true,
      phase: "beforeWrite",
      fn: computeStyles,
      data: {}
    };
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
    function effect$1(_ref2) {
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
    var applyStyles$1 = {
      name: "applyStyles",
      enabled: true,
      phase: "write",
      fn: applyStyles,
      effect: effect$1,
      requires: ["computeStyles"]
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
    var offset$1 = {
      name: "offset",
      enabled: true,
      phase: "main",
      requires: ["popperOffsets"],
      fn: offset
    };
    var hash$1 = {
      left: "right",
      right: "left",
      bottom: "top",
      top: "bottom"
    };
    function getOppositePlacement(placement) {
      return placement.replace(/left|right|bottom|top/g, function(matched) {
        return hash$1[matched];
      });
    }
    var hash = {
      start: "end",
      end: "start"
    };
    function getOppositeVariationPlacement(placement) {
      return placement.replace(/start|end/g, function(matched) {
        return hash[matched];
      });
    }
    function computeAutoPlacement(state, options) {
      if (options === void 0) {
        options = {};
      }
      var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
      var variation = getVariation(placement);
      var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
        return getVariation(placement2) === variation;
      }) : basePlacements;
      var allowedPlacements = placements$1.filter(function(placement2) {
        return allowedAutoPlacements.indexOf(placement2) >= 0;
      });
      if (allowedPlacements.length === 0) {
        allowedPlacements = placements$1;
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
    var flip$1 = {
      name: "flip",
      enabled: true,
      phase: "main",
      fn: flip,
      requiresIfExists: ["offset"],
      data: {
        _skip: false
      }
    };
    function getAltAxis(axis) {
      return axis === "x" ? "y" : "x";
    }
    function within(min$1, value, max$1) {
      return max(min$1, min(value, max$1));
    }
    function withinMaxClamp(min2, value, max2) {
      var v = within(min2, value, max2);
      return v > max2 ? max2 : v;
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
        var min$1 = offset2 + overflow[mainSide];
        var max$1 = offset2 - overflow[altSide];
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
        var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset2, tether ? max(max$1, tetherMax) : max$1);
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
    var preventOverflow$1 = {
      name: "preventOverflow",
      enabled: true,
      phase: "main",
      fn: preventOverflow,
      requiresIfExists: ["offset"]
    };
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
    function effect(_ref2) {
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
    var arrow$1 = {
      name: "arrow",
      enabled: true,
      phase: "main",
      fn: arrow,
      effect,
      requires: ["popperOffsets"],
      requiresIfExists: ["preventOverflow"]
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
    var hide$1 = {
      name: "hide",
      enabled: true,
      phase: "main",
      requiresIfExists: ["preventOverflow"],
      fn: hide
    };
    var defaultModifiers$1 = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1];
    var createPopper$1 = /* @__PURE__ */ popperGenerator({
      defaultModifiers: defaultModifiers$1
    });
    var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
    var createPopper = /* @__PURE__ */ popperGenerator({
      defaultModifiers
    });
    exports2.applyStyles = applyStyles$1;
    exports2.arrow = arrow$1;
    exports2.computeStyles = computeStyles$1;
    exports2.createPopper = createPopper;
    exports2.createPopperLite = createPopper$1;
    exports2.defaultModifiers = defaultModifiers;
    exports2.detectOverflow = detectOverflow;
    exports2.eventListeners = eventListeners;
    exports2.flip = flip$1;
    exports2.hide = hide$1;
    exports2.offset = offset$1;
    exports2.popperGenerator = popperGenerator;
    exports2.popperOffsets = popperOffsets$1;
    exports2.preventOverflow = preventOverflow$1;
  }
});
var require_tippy_cjs = __commonJS2({
  "node_modules/.pnpm/tippy.js@6.3.7/node_modules/tippy.js/dist/tippy.cjs.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    var core = require_popper();
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
    function debounce(fn, ms) {
      if (ms === 0) {
        return fn;
      }
      var timeout;
      return function(arg) {
        clearTimeout(timeout);
        timeout = setTimeout(function() {
          fn(arg);
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
    function getBasePlacement(placement) {
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
    function isElement(value) {
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
      if (isElement(value)) {
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
        var basePlacement = getBasePlacement(popperState.placement);
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
    function getDataAttributeProps(reference, plugins) {
      var propKeys = plugins ? Object.keys(getExtendedPassedProps(Object.assign({}, defaultProps, {
        plugins
      }))) : defaultKeys;
      var props = propKeys.reduce(function(acc, key) {
        var valueAsString = (reference.getAttribute("data-tippy-" + key) || "").trim();
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
    function evaluateProps(reference, props) {
      var out = Object.assign({}, props, {
        content: invokeWithArgsOrReturn(props.content, [reference])
      }, props.ignoreAttributes ? {} : getDataAttributeProps(reference, props.plugins));
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
      var arrow = div();
      if (value === true) {
        arrow.className = ARROW_CLASS;
      } else {
        arrow.className = SVG_ARROW_CLASS;
        if (isElement(value)) {
          arrow.appendChild(value);
        } else {
          dangerouslySetInnerHTML(arrow, value);
        }
      }
      return arrow;
    }
    function setContent(content, props) {
      if (isElement(props.content)) {
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
    function getChildren(popper) {
      var box = popper.firstElementChild;
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
      var popper = div();
      var box = div();
      box.className = BOX_CLASS;
      box.setAttribute("data-state", "hidden");
      box.setAttribute("tabindex", "-1");
      var content = div();
      content.className = CONTENT_CLASS;
      content.setAttribute("data-state", "hidden");
      setContent(content, instance.props);
      popper.appendChild(box);
      box.appendChild(content);
      onUpdate(instance.props, instance.props);
      function onUpdate(prevProps, nextProps) {
        var _getChildren = getChildren(popper), box2 = _getChildren.box, content2 = _getChildren.content, arrow = _getChildren.arrow;
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
          if (!arrow) {
            box2.appendChild(createArrowElement(nextProps.arrow));
          } else if (prevProps.arrow !== nextProps.arrow) {
            box2.removeChild(arrow);
            box2.appendChild(createArrowElement(nextProps.arrow));
          }
        } else if (arrow) {
          box2.removeChild(arrow);
        }
      }
      return {
        popper,
        onUpdate
      };
    }
    render.$$tippy = true;
    var idCounter = 1;
    var mouseMoveListeners = [];
    var mountedInstances = [];
    function createTippy(reference, passedProps) {
      var props = evaluateProps(reference, Object.assign({}, defaultProps, getExtendedPassedProps(removeUndefinedProps(passedProps))));
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
      var debouncedOnMouseMove = debounce(onMouseMove, props.interactiveDebounce);
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
        reference,
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
        hide,
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
      var _props$render = props.render(instance), popper = _props$render.popper, onUpdate = _props$render.onUpdate;
      popper.setAttribute("data-tippy-root", "");
      popper.id = "tippy-" + instance.id;
      instance.popper = popper;
      reference._tippy = instance;
      popper._tippy = instance;
      var pluginsHooks = plugins.map(function(plugin) {
        return plugin.fn(instance);
      });
      var hasAriaExpanded = reference.hasAttribute("aria-expanded");
      addListeners();
      handleAriaExpandedAttribute();
      handleStyles();
      invokeHook("onCreate", [instance]);
      if (props.showOnCreate) {
        scheduleShow();
      }
      popper.addEventListener("mouseenter", function() {
        if (instance.props.interactive && instance.state.isVisible) {
          instance.clearDelayTimeouts();
        }
      });
      popper.addEventListener("mouseleave", function() {
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
        return currentTarget || reference;
      }
      function getDocument() {
        var parent = getCurrentTarget().parentNode;
        return parent ? getOwnerDocument(parent) : document;
      }
      function getDefaultTemplateChildren() {
        return getChildren(popper);
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
        popper.style.pointerEvents = instance.props.interactive && !fromHide ? "" : "none";
        popper.style.zIndex = "" + instance.props.zIndex;
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
        var id2 = popper.id;
        var nodes = normalizeToArray(instance.props.triggerTarget || reference);
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
        var nodes = normalizeToArray(instance.props.triggerTarget || reference);
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
        if (instance.props.interactive && actualContains(popper, actualTarget)) {
          return;
        }
        if (normalizeToArray(instance.props.triggerTarget || reference).some(function(el) {
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
          if (!instance.state.isVisible && popper.parentNode && popper.parentNode.contains(popper)) {
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
        var nodes = normalizeToArray(instance.props.triggerTarget || reference);
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
          on("touchstart", onTrigger, {
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
          on(eventType, onTrigger);
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
      function onTrigger(event) {
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
        var isCursorOverReferenceOrPopper = getCurrentTarget().contains(target) || popper.contains(target);
        if (event.type === "mousemove" && isCursorOverReferenceOrPopper) {
          return;
        }
        var popperTreeData = getNestedPopperTree().concat(popper).map(function(popper2) {
          var _instance$popperInsta;
          var instance2 = popper2._tippy;
          var state2 = (_instance$popperInsta = instance2.popperInstance) == null ? void 0 : _instance$popperInsta.state;
          if (state2) {
            return {
              popperRect: popper2.getBoundingClientRect(),
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
        if (instance.props.interactive && event.relatedTarget && popper.contains(event.relatedTarget)) {
          return;
        }
        scheduleHide(event);
      }
      function isEventListenerStopped(event) {
        return currentInput.isTouch ? getIsCustomTouchBehavior() !== event.type.indexOf("touch") >= 0 : false;
      }
      function createPopperInstance() {
        destroyPopperInstance();
        var _instance$props2 = instance.props, popperOptions = _instance$props2.popperOptions, placement = _instance$props2.placement, offset = _instance$props2.offset, getReferenceClientRect = _instance$props2.getReferenceClientRect, moveTransition = _instance$props2.moveTransition;
        var arrow = getIsDefaultRenderFn() ? getChildren(popper).arrow : null;
        var computedReference = getReferenceClientRect ? {
          getBoundingClientRect: getReferenceClientRect,
          contextElement: getReferenceClientRect.contextElement || getCurrentTarget()
        } : reference;
        var tippyModifier = {
          name: "$$tippy",
          enabled: true,
          phase: "beforeWrite",
          requires: ["computeStyles"],
          fn: function fn(_ref2) {
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
            offset
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
        if (getIsDefaultRenderFn() && arrow) {
          modifiers.push({
            name: "arrow",
            options: {
              element: arrow,
              padding: 3
            }
          });
        }
        modifiers.push.apply(modifiers, (popperOptions == null ? void 0 : popperOptions.modifiers) || []);
        instance.popperInstance = core.createPopper(computedReference, popper, Object.assign({}, popperOptions, {
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
        if (!parentNode.contains(popper)) {
          parentNode.appendChild(popper);
        }
        instance.state.isMounted = true;
        createPopperInstance();
        if (false) {
          warnWhen(instance.props.interactive && appendTo === defaultProps.appendTo && node.nextElementSibling !== popper, ["Interactive tippy element may not be accessible via keyboard", "navigation because it is not directly after the reference element", "in the DOM source order.", "\n\n", "Using a wrapper <div> or <span> tag around the reference element", "solves this by creating a new parentNode context.", "\n\n", "Specifying `appendTo: document.body` silences this warning, but it", "assumes you are using a focus management solution to handle", "keyboard navigation.", "\n\n", "See: https://atomiks.github.io/tippyjs/v6/accessibility/#interactivity"].join(" "));
        }
      }
      function getNestedPopperTree() {
        return arrayFrom(popper.querySelectorAll("[data-tippy-root]"));
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
        var nextProps = evaluateProps(reference, Object.assign({}, prevProps, removeUndefinedProps(partialProps), {
          ignoreAttributes: true
        }));
        instance.props = nextProps;
        addListeners();
        if (prevProps.interactiveDebounce !== nextProps.interactiveDebounce) {
          cleanupInteractiveMouseListeners();
          debouncedOnMouseMove = debounce(onMouseMove, nextProps.interactiveDebounce);
        }
        if (prevProps.triggerTarget && !nextProps.triggerTarget) {
          normalizeToArray(prevProps.triggerTarget).forEach(function(node) {
            node.removeAttribute("aria-expanded");
          });
        } else if (nextProps.triggerTarget) {
          reference.removeAttribute("aria-expanded");
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
          popper.style.visibility = "visible";
        }
        handleStyles();
        addDocumentPress();
        if (!instance.state.isMounted) {
          popper.style.transition = "none";
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
          void popper.offsetHeight;
          popper.style.transition = instance.props.moveTransition;
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
      function hide() {
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
          popper.style.visibility = "hidden";
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
        if (popper.parentNode) {
          popper.parentNode.removeChild(popper);
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
        delete reference._tippy;
        instance.state.isDestroyed = true;
        invokeHook("onDestroy", [instance]);
      }
    }
    function tippy2(targets, optionalProps) {
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
        var isSingleContentElement = isElement(passedProps.content);
        var isMoreThanOneReferenceElement = elements.length > 1;
        warnWhen(isSingleContentElement && isMoreThanOneReferenceElement, ["tippy() was passed an Element as the `content` prop, but more than", "one tippy instance was created by this invocation. This means the", "content element will only be appended to the last tippy instance.", "\n\n", "Instead, pass the .innerHTML of the element, or use a function that", "returns a cloned version of the element instead.", "\n\n", "1) content: element.innerHTML\n", "2) content: () => element.cloneNode(true)"].join(" "));
      }
      var instances = elements.reduce(function(acc, reference) {
        var instance = reference && createTippy(reference, passedProps);
        if (instance) {
          acc.push(instance);
        }
        return acc;
      }, []);
      return isElement(targets) ? instances[0] : instances;
    }
    tippy2.defaultProps = defaultProps;
    tippy2.setDefaultProps = setDefaultProps;
    tippy2.currentInput = currentInput;
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
    var applyStylesModifier = Object.assign({}, core.applyStyles, {
      effect: function effect(_ref) {
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
        fn: function fn() {
          return {
            onDestroy: function onDestroy() {
              enableInstances(true);
            },
            onHidden: function onHidden() {
              currentTarget = null;
            },
            onClickOutside: function onClickOutside(instance) {
              if (instance.props.showOnCreate && !shownOnCreate) {
                shownOnCreate = true;
                currentTarget = null;
              }
            },
            onShow: function onShow(instance) {
              if (instance.props.showOnCreate && !shownOnCreate) {
                shownOnCreate = true;
                prepareInstance(instance, references[0]);
              }
            },
            onTrigger: function onTrigger(instance, event) {
              prepareInstance(instance, event.currentTarget);
            }
          };
        }
      };
      var singleton = tippy2(div(), Object.assign({}, removeProperties(optionalProps, ["overrides"]), {
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
        interceptSetPropsCleanups.forEach(function(fn) {
          return fn();
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
      var returnValue = tippy2(targets, parentProps);
      var normalizedReturnValue = normalizeToArray(returnValue);
      function onTrigger(event) {
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
        var instance = tippy2(targetNode, childProps);
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
        var reference = instance.reference;
        on(reference, "touchstart", onTrigger, TOUCH_OPTIONS);
        on(reference, "mouseover", onTrigger);
        on(reference, "focusin", onTrigger);
        on(reference, "click", onTrigger);
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
      fn: function fn(instance) {
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
          onCreate: function onCreate() {
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
          onMount: function onMount() {
            if (backdrop) {
              var transitionDuration = box.style.transitionDuration;
              var duration = Number(transitionDuration.replace("ms", ""));
              content.style.transitionDelay = Math.round(duration / 10) + "ms";
              backdrop.style.transitionDuration = transitionDuration;
              setVisibilityState([backdrop], "visible");
            }
          },
          onShow: function onShow() {
            if (backdrop) {
              backdrop.style.transitionDuration = "0ms";
            }
          },
          onHide: function onHide() {
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
      fn: function fn(instance) {
        var reference = instance.reference;
        var doc = getOwnerDocument(instance.props.triggerTarget || reference);
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
          var isCursorOverReference = event.target ? reference.contains(event.target) : true;
          var followCursor2 = instance.props.followCursor;
          var clientX = event.clientX, clientY = event.clientY;
          var rect = reference.getBoundingClientRect();
          var relativeX = clientX - rect.left;
          var relativeY = clientY - rect.top;
          if (isCursorOverReference || !instance.props.interactive) {
            instance.setProps({
              // @ts-ignore - unneeded DOMRect properties
              getReferenceClientRect: function getReferenceClientRect() {
                var rect2 = reference.getBoundingClientRect();
                var x = clientX;
                var y = clientY;
                if (followCursor2 === "initial") {
                  x = rect2.left + relativeX;
                  y = rect2.top + relativeY;
                }
                var top = followCursor2 === "horizontal" ? rect2.top : y;
                var right = followCursor2 === "vertical" ? rect2.right : x;
                var bottom = followCursor2 === "horizontal" ? rect2.bottom : y;
                var left = followCursor2 === "vertical" ? rect2.left : x;
                return {
                  width: right - left,
                  height: bottom - top,
                  top,
                  right,
                  bottom,
                  left
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
          onBeforeUpdate: function onBeforeUpdate() {
            prevProps = instance.props;
          },
          onAfterUpdate: function onAfterUpdate(_, _ref2) {
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
          onMount: function onMount() {
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
          onTrigger: function onTrigger(_, event) {
            if (isMouseEvent(event)) {
              mouseCoords = {
                clientX: event.clientX,
                clientY: event.clientY
              };
            }
            wasFocusEvent = event.type === "focus";
          },
          onHidden: function onHidden() {
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
      fn: function fn(instance) {
        var reference = instance.reference;
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
          fn: function fn2(_ref2) {
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
          return getInlineBoundingClientRect(getBasePlacement(placement2), reference.getBoundingClientRect(), arrayFrom(reference.getClientRects()), cursorRectIndex);
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
          onTrigger: function onTrigger(_, event) {
            if (isMouseEvent(event)) {
              var rects = arrayFrom(instance.reference.getClientRects());
              var cursorRect = rects.find(function(rect) {
                return rect.left - 2 <= event.clientX && rect.right + 2 >= event.clientX && rect.top - 2 <= event.clientY && rect.bottom + 2 >= event.clientY;
              });
              var index = rects.indexOf(cursorRect);
              cursorRectIndex = index > -1 ? index : cursorRectIndex;
            }
          },
          onHidden: function onHidden() {
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
          var top = firstRect.top;
          var bottom = lastRect.bottom;
          var left = isTop ? firstRect.left : lastRect.left;
          var right = isTop ? firstRect.right : lastRect.right;
          var width = right - left;
          var height = bottom - top;
          return {
            top,
            bottom,
            left,
            right,
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
      fn: function fn(instance) {
        var reference = instance.reference, popper = instance.popper;
        function getReference() {
          return instance.popperInstance ? instance.popperInstance.state.elements.reference : reference;
        }
        function shouldCheck(value) {
          return instance.props.sticky === true || instance.props.sticky === value;
        }
        var prevRefRect = null;
        var prevPopRect = null;
        function updatePosition() {
          var currentRefRect = shouldCheck("reference") ? getReference().getBoundingClientRect() : null;
          var currentPopRect = shouldCheck("popper") ? popper.getBoundingClientRect() : null;
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
          onMount: function onMount() {
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
    tippy2.setDefaultProps({
      render
    });
    exports2.animateFill = animateFill;
    exports2.createSingleton = createSingleton;
    exports2.default = tippy2;
    exports2.delegate = delegate;
    exports2.followCursor = followCursor;
    exports2.hideAll = hideAll;
    exports2.inlinePositioning = inlinePositioning;
    exports2.roundArrow = ROUND_ARROW;
    exports2.sticky = sticky;
  }
});
//! src/Tippy/Tippy.ts
var Tippy_exports = {};
__export(Tippy_exports, {
  tippy: () => import_tippy2.default
});
module.exports = __toCommonJS(Tippy_exports);
var import_tippy2 = __toESM(require_tippy_cjs(), 1);
__reExport(Tippy_exports, __toESM(require_tippy_cjs(), 1), module.exports);
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mYWlscy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Rlc2NyaXB0b3JzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1jYWxsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NsYXNzb2YtcmF3LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtY2FsbGFibGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nZXQtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXN5bWJvbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RyeS10by1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWNhbGxhYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1Zy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1uYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9tYXRoLXRydW5jLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtYXJyYXkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1zZXQtbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9lcy1ub3QtZXhjZWVkLXNhZmUtaW50ZWdlci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5wdXNoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL3NyYy9kb20tdXRpbHMvZ2V0V2luZG93LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL3NyYy9kb20tdXRpbHMvaW5zdGFuY2VPZi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9zcmMvdXRpbHMvbWF0aC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9zcmMvdXRpbHMvdXNlckFnZW50LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL3NyYy9kb20tdXRpbHMvaXNMYXlvdXRWaWV3cG9ydC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9zcmMvZG9tLXV0aWxzL2dldEJvdW5kaW5nQ2xpZW50UmVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9zcmMvZG9tLXV0aWxzL2dldFdpbmRvd1Njcm9sbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9zcmMvZG9tLXV0aWxzL2dldEhUTUxFbGVtZW50U2Nyb2xsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL3NyYy9kb20tdXRpbHMvZ2V0Tm9kZVNjcm9sbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9zcmMvZG9tLXV0aWxzL2dldE5vZGVOYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL3NyYy9kb20tdXRpbHMvZ2V0RG9jdW1lbnRFbGVtZW50LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL3NyYy9kb20tdXRpbHMvZ2V0V2luZG93U2Nyb2xsQmFyWC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9zcmMvZG9tLXV0aWxzL2dldENvbXB1dGVkU3R5bGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvc3JjL2RvbS11dGlscy9pc1Njcm9sbFBhcmVudC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9zcmMvZG9tLXV0aWxzL2dldENvbXBvc2l0ZVJlY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvc3JjL2RvbS11dGlscy9nZXRMYXlvdXRSZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL3NyYy9kb20tdXRpbHMvZ2V0UGFyZW50Tm9kZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9zcmMvZG9tLXV0aWxzL2dldFNjcm9sbFBhcmVudC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9zcmMvZG9tLXV0aWxzL2xpc3RTY3JvbGxQYXJlbnRzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL3NyYy9kb20tdXRpbHMvaXNUYWJsZUVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvc3JjL2RvbS11dGlscy9nZXRPZmZzZXRQYXJlbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvc3JjL2VudW1zLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL3NyYy91dGlscy9vcmRlck1vZGlmaWVycy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9zcmMvdXRpbHMvZGVib3VuY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvc3JjL3V0aWxzL21lcmdlQnlOYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL3NyYy9kb20tdXRpbHMvZ2V0Vmlld3BvcnRSZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL3NyYy9kb20tdXRpbHMvZ2V0RG9jdW1lbnRSZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL3NyYy9kb20tdXRpbHMvY29udGFpbnMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvc3JjL3V0aWxzL3JlY3RUb0NsaWVudFJlY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvc3JjL2RvbS11dGlscy9nZXRDbGlwcGluZ1JlY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvc3JjL3V0aWxzL2dldEJhc2VQbGFjZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvc3JjL3V0aWxzL2dldFZhcmlhdGlvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9zcmMvdXRpbHMvZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL3NyYy91dGlscy9jb21wdXRlT2Zmc2V0cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9zcmMvdXRpbHMvZ2V0RnJlc2hTaWRlT2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL3NyYy91dGlscy9tZXJnZVBhZGRpbmdPYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvc3JjL3V0aWxzL2V4cGFuZFRvSGFzaE1hcC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9zcmMvdXRpbHMvZGV0ZWN0T3ZlcmZsb3cuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvc3JjL2NyZWF0ZVBvcHBlci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9zcmMvbW9kaWZpZXJzL2V2ZW50TGlzdGVuZXJzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL3NyYy9tb2RpZmllcnMvcG9wcGVyT2Zmc2V0cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9zcmMvbW9kaWZpZXJzL2NvbXB1dGVTdHlsZXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvc3JjL21vZGlmaWVycy9hcHBseVN0eWxlcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9zcmMvbW9kaWZpZXJzL29mZnNldC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9zcmMvdXRpbHMvZ2V0T3Bwb3NpdGVQbGFjZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvc3JjL3V0aWxzL2dldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL3NyYy91dGlscy9jb21wdXRlQXV0b1BsYWNlbWVudC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9zcmMvbW9kaWZpZXJzL2ZsaXAuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvc3JjL3V0aWxzL2dldEFsdEF4aXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvc3JjL3V0aWxzL3dpdGhpbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9zcmMvbW9kaWZpZXJzL3ByZXZlbnRPdmVyZmxvdy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9zcmMvbW9kaWZpZXJzL2Fycm93LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9AcG9wcGVyanMrY29yZUAyLjExLjgvbm9kZV9tb2R1bGVzL0Bwb3BwZXJqcy9jb3JlL3NyYy9tb2RpZmllcnMvaGlkZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vQHBvcHBlcmpzK2NvcmVAMi4xMS44L25vZGVfbW9kdWxlcy9AcG9wcGVyanMvY29yZS9zcmMvcG9wcGVyLWxpdGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL0Bwb3BwZXJqcytjb3JlQDIuMTEuOC9ub2RlX21vZHVsZXMvQHBvcHBlcmpzL2NvcmUvc3JjL3BvcHBlci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vdGlwcHkuanNANi4zLjcvbm9kZV9tb2R1bGVzL3RpcHB5LmpzL3NyYy9jb25zdGFudHMudHMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL3RpcHB5LmpzQDYuMy43L25vZGVfbW9kdWxlcy90aXBweS5qcy9zcmMvdXRpbHMudHMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL3RpcHB5LmpzQDYuMy43L25vZGVfbW9kdWxlcy90aXBweS5qcy9zcmMvZG9tLXV0aWxzLnRzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS90aXBweS5qc0A2LjMuNy9ub2RlX21vZHVsZXMvdGlwcHkuanMvc3JjL2JpbmRHbG9iYWxFdmVudExpc3RlbmVycy50cyIsICJub2RlX21vZHVsZXMvLnBucG0vdGlwcHkuanNANi4zLjcvbm9kZV9tb2R1bGVzL3RpcHB5LmpzL3NyYy9icm93c2VyLnRzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS90aXBweS5qc0A2LjMuNy9ub2RlX21vZHVsZXMvdGlwcHkuanMvc3JjL3ZhbGlkYXRpb24udHMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL3RpcHB5LmpzQDYuMy43L25vZGVfbW9kdWxlcy90aXBweS5qcy9zcmMvcHJvcHMudHMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL3RpcHB5LmpzQDYuMy43L25vZGVfbW9kdWxlcy90aXBweS5qcy9zcmMvdGVtcGxhdGUudHMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL3RpcHB5LmpzQDYuMy43L25vZGVfbW9kdWxlcy90aXBweS5qcy9zcmMvY3JlYXRlVGlwcHkudHMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL3RpcHB5LmpzQDYuMy43L25vZGVfbW9kdWxlcy90aXBweS5qcy9zcmMvaW5kZXgudHMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL3RpcHB5LmpzQDYuMy43L25vZGVfbW9kdWxlcy90aXBweS5qcy9zcmMvYWRkb25zL2NyZWF0ZVNpbmdsZXRvbi50cyIsICJub2RlX21vZHVsZXMvLnBucG0vdGlwcHkuanNANi4zLjcvbm9kZV9tb2R1bGVzL3RpcHB5LmpzL3NyYy9hZGRvbnMvZGVsZWdhdGUudHMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL3RpcHB5LmpzQDYuMy43L25vZGVfbW9kdWxlcy90aXBweS5qcy9zcmMvcGx1Z2lucy9hbmltYXRlRmlsbC50cyIsICJub2RlX21vZHVsZXMvLnBucG0vdGlwcHkuanNANi4zLjcvbm9kZV9tb2R1bGVzL3RpcHB5LmpzL3NyYy9wbHVnaW5zL2ZvbGxvd0N1cnNvci50cyIsICJub2RlX21vZHVsZXMvLnBucG0vdGlwcHkuanNANi4zLjcvbm9kZV9tb2R1bGVzL3RpcHB5LmpzL3NyYy9wbHVnaW5zL2lubGluZVBvc2l0aW9uaW5nLnRzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS90aXBweS5qc0A2LjMuNy9ub2RlX21vZHVsZXMvdGlwcHkuanMvc3JjL3BsdWdpbnMvc3RpY2t5LnRzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS90aXBweS5qc0A2LjMuNy9ub2RlX21vZHVsZXMvdGlwcHkuanMvYnVpbGQvYmFzZS5qcyIsICJzcmMvVGlwcHkvVGlwcHkudHMiXSwKICAic291cmNlUm9vdCI6ICIuLi9HYWRnZXRzIiwKICAic291cmNlc0NvbnRlbnQiOiBbIid1c2Ugc3RyaWN0JztcbnZhciBjaGVjayA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgJiYgaXQuTWF0aCA9PT0gTWF0aCAmJiBpdDtcbn07XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG5tb2R1bGUuZXhwb3J0cyA9XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1nbG9iYWwtdGhpcyAtLSBzYWZlXG4gIGNoZWNrKHR5cGVvZiBnbG9iYWxUaGlzID09ICdvYmplY3QnICYmIGdsb2JhbFRoaXMpIHx8XG4gIGNoZWNrKHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93KSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzIC0tIHNhZmVcbiAgY2hlY2sodHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZikgfHxcbiAgY2hlY2sodHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwpIHx8XG4gIGNoZWNrKHR5cGVvZiB0aGlzID09ICdvYmplY3QnICYmIHRoaXMpIHx8XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuYyAtLSBmYWxsYmFja1xuICAoZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSkoKSB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbi8vIERldGVjdCBJRTgncyBpbmNvbXBsZXRlIGRlZmluZVByb3BlcnR5IGltcGxlbWVudGF0aW9uXG5tb2R1bGUuZXhwb3J0cyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgMSwgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSlbMV0gIT09IDc7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZnVuY3Rpb24tcHJvdG90eXBlLWJpbmQgLS0gc2FmZVxuICB2YXIgdGVzdCA9IChmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0pLmJpbmQoKTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGlucyAtLSBzYWZlXG4gIHJldHVybiB0eXBlb2YgdGVzdCAhPSAnZnVuY3Rpb24nIHx8IHRlc3QuaGFzT3duUHJvcGVydHkoJ3Byb3RvdHlwZScpO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIE5BVElWRV9CSU5EID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtbmF0aXZlJyk7XG5cbnZhciBjYWxsID0gRnVuY3Rpb24ucHJvdG90eXBlLmNhbGw7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX0JJTkQgPyBjYWxsLmJpbmQoY2FsbCkgOiBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBjYWxsLmFwcGx5KGNhbGwsIGFyZ3VtZW50cyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBOYXNob3JuIH4gSkRLOCBidWdcbnZhciBOQVNIT1JOX0JVRyA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvciAmJiAhJHByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoeyAxOiAyIH0sIDEpO1xuXG4vLyBgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZWAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5wcm90b3R5cGUucHJvcGVydHlpc2VudW1lcmFibGVcbmV4cG9ydHMuZiA9IE5BU0hPUk5fQlVHID8gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoVikge1xuICB2YXIgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0aGlzLCBWKTtcbiAgcmV0dXJuICEhZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLmVudW1lcmFibGU7XG59IDogJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIE5BVElWRV9CSU5EID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtbmF0aXZlJyk7XG5cbnZhciBGdW5jdGlvblByb3RvdHlwZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbnZhciBjYWxsID0gRnVuY3Rpb25Qcm90b3R5cGUuY2FsbDtcbnZhciB1bmN1cnJ5VGhpc1dpdGhCaW5kID0gTkFUSVZFX0JJTkQgJiYgRnVuY3Rpb25Qcm90b3R5cGUuYmluZC5iaW5kKGNhbGwsIGNhbGwpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9CSU5EID8gdW5jdXJyeVRoaXNXaXRoQmluZCA6IGZ1bmN0aW9uIChmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBjYWxsLmFwcGx5KGZuLCBhcmd1bWVudHMpO1xuICB9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbnZhciB0b1N0cmluZyA9IHVuY3VycnlUaGlzKHt9LnRvU3RyaW5nKTtcbnZhciBzdHJpbmdTbGljZSA9IHVuY3VycnlUaGlzKCcnLnNsaWNlKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHN0cmluZ1NsaWNlKHRvU3RyaW5nKGl0KSwgOCwgLTEpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG5cbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xudmFyIHNwbGl0ID0gdW5jdXJyeVRoaXMoJycuc3BsaXQpO1xuXG4vLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xubW9kdWxlLmV4cG9ydHMgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIHRocm93cyBhbiBlcnJvciBpbiByaGlubywgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3JoaW5vL2lzc3Vlcy8zNDZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGlucyAtLSBzYWZlXG4gIHJldHVybiAhJE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApO1xufSkgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNsYXNzb2YoaXQpID09PSAnU3RyaW5nJyA/IHNwbGl0KGl0LCAnJykgOiAkT2JqZWN0KGl0KTtcbn0gOiAkT2JqZWN0O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIHdlIGNhbid0IHVzZSBqdXN0IGBpdCA9PSBudWxsYCBzaW5jZSBvZiBgZG9jdW1lbnQuYWxsYCBzcGVjaWFsIGNhc2Vcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtSXNIVE1MRERBLWludGVybmFsLXNsb3QtYWVjXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPT09IG51bGwgfHwgaXQgPT09IHVuZGVmaW5lZDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgUmVxdWlyZU9iamVjdENvZXJjaWJsZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXJlcXVpcmVvYmplY3Rjb2VyY2libGVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpc051bGxPclVuZGVmaW5lZChpdCkpIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0Jyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIEluZGV4ZWRPYmplY3QocmVxdWlyZU9iamVjdENvZXJjaWJsZShpdCkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLUlzSFRNTEREQS1pbnRlcm5hbC1zbG90XG52YXIgZG9jdW1lbnRBbGwgPSB0eXBlb2YgZG9jdW1lbnQgPT0gJ29iamVjdCcgJiYgZG9jdW1lbnQuYWxsO1xuXG4vLyBgSXNDYWxsYWJsZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWlzY2FsbGFibGVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL25vLXR5cGVvZi11bmRlZmluZWQgLS0gcmVxdWlyZWQgZm9yIHRlc3Rpbmdcbm1vZHVsZS5leHBvcnRzID0gdHlwZW9mIGRvY3VtZW50QWxsID09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50QWxsICE9PSB1bmRlZmluZWQgPyBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmd1bWVudCA9PSAnZnVuY3Rpb24nIHx8IGFyZ3VtZW50ID09PSBkb2N1bWVudEFsbDtcbn0gOiBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmd1bWVudCA9PSAnZnVuY3Rpb24nO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiBpc0NhbGxhYmxlKGl0KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbnZhciBhRnVuY3Rpb24gPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGlzQ2FsbGFibGUoYXJndW1lbnQpID8gYXJndW1lbnQgOiB1bmRlZmluZWQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lc3BhY2UsIG1ldGhvZCkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA8IDIgPyBhRnVuY3Rpb24oZ2xvYmFsW25hbWVzcGFjZV0pIDogZ2xvYmFsW25hbWVzcGFjZV0gJiYgZ2xvYmFsW25hbWVzcGFjZV1bbWV0aG9kXTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVuY3VycnlUaGlzKHt9LmlzUHJvdG90eXBlT2YpO1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gdHlwZW9mIG5hdmlnYXRvciAhPSAndW5kZWZpbmVkJyAmJiBTdHJpbmcobmF2aWdhdG9yLnVzZXJBZ2VudCkgfHwgJyc7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQnKTtcblxudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBEZW5vID0gZ2xvYmFsLkRlbm87XG52YXIgdmVyc2lvbnMgPSBwcm9jZXNzICYmIHByb2Nlc3MudmVyc2lvbnMgfHwgRGVubyAmJiBEZW5vLnZlcnNpb247XG52YXIgdjggPSB2ZXJzaW9ucyAmJiB2ZXJzaW9ucy52ODtcbnZhciBtYXRjaCwgdmVyc2lvbjtcblxuaWYgKHY4KSB7XG4gIG1hdGNoID0gdjguc3BsaXQoJy4nKTtcbiAgLy8gaW4gb2xkIENocm9tZSwgdmVyc2lvbnMgb2YgVjggaXNuJ3QgVjggPSBDaHJvbWUgLyAxMFxuICAvLyBidXQgdGhlaXIgY29ycmVjdCB2ZXJzaW9ucyBhcmUgbm90IGludGVyZXN0aW5nIGZvciB1c1xuICB2ZXJzaW9uID0gbWF0Y2hbMF0gPiAwICYmIG1hdGNoWzBdIDwgNCA/IDEgOiArKG1hdGNoWzBdICsgbWF0Y2hbMV0pO1xufVxuXG4vLyBCcm93c2VyRlMgTm9kZUpTIGBwcm9jZXNzYCBwb2x5ZmlsbCBpbmNvcnJlY3RseSBzZXQgYC52OGAgdG8gYDAuMGBcbi8vIHNvIGNoZWNrIGB1c2VyQWdlbnRgIGV2ZW4gaWYgYC52OGAgZXhpc3RzLCBidXQgMFxuaWYgKCF2ZXJzaW9uICYmIHVzZXJBZ2VudCkge1xuICBtYXRjaCA9IHVzZXJBZ2VudC5tYXRjaCgvRWRnZVxcLyhcXGQrKS8pO1xuICBpZiAoIW1hdGNoIHx8IG1hdGNoWzFdID49IDc0KSB7XG4gICAgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2goL0Nocm9tZVxcLyhcXGQrKS8pO1xuICAgIGlmIChtYXRjaCkgdmVyc2lvbiA9ICttYXRjaFsxXTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHZlcnNpb247XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tc3ltYm9sIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbicpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xuXG52YXIgJFN0cmluZyA9IGdsb2JhbC5TdHJpbmc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlzeW1ib2xzIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG5tb2R1bGUuZXhwb3J0cyA9ICEhT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgc3ltYm9sID0gU3ltYm9sKCdzeW1ib2wgZGV0ZWN0aW9uJyk7XG4gIC8vIENocm9tZSAzOCBTeW1ib2wgaGFzIGluY29ycmVjdCB0b1N0cmluZyBjb252ZXJzaW9uXG4gIC8vIGBnZXQtb3duLXByb3BlcnR5LXN5bWJvbHNgIHBvbHlmaWxsIHN5bWJvbHMgY29udmVydGVkIHRvIG9iamVjdCBhcmUgbm90IFN5bWJvbCBpbnN0YW5jZXNcbiAgLy8gbmI6IERvIG5vdCBjYWxsIGBTdHJpbmdgIGRpcmVjdGx5IHRvIGF2b2lkIHRoaXMgYmVpbmcgb3B0aW1pemVkIG91dCB0byBgc3ltYm9sKycnYCB3aGljaCB3aWxsLFxuICAvLyBvZiBjb3Vyc2UsIGZhaWwuXG4gIHJldHVybiAhJFN0cmluZyhzeW1ib2wpIHx8ICEoT2JqZWN0KHN5bWJvbCkgaW5zdGFuY2VvZiBTeW1ib2wpIHx8XG4gICAgLy8gQ2hyb21lIDM4LTQwIHN5bWJvbHMgYXJlIG5vdCBpbmhlcml0ZWQgZnJvbSBET00gY29sbGVjdGlvbnMgcHJvdG90eXBlcyB0byBpbnN0YW5jZXNcbiAgICAhU3ltYm9sLnNoYW0gJiYgVjhfVkVSU0lPTiAmJiBWOF9WRVJTSU9OIDwgNDE7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBlcy9uby1zeW1ib2wgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmcgKi9cbnZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfU1lNQk9MXG4gICYmICFTeW1ib2wuc2hhbVxuICAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBpc1Byb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YnKTtcbnZhciBVU0VfU1lNQk9MX0FTX1VJRCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZCcpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcblxubW9kdWxlLmV4cG9ydHMgPSBVU0VfU1lNQk9MX0FTX1VJRCA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgJFN5bWJvbCA9IGdldEJ1aWx0SW4oJ1N5bWJvbCcpO1xuICByZXR1cm4gaXNDYWxsYWJsZSgkU3ltYm9sKSAmJiBpc1Byb3RvdHlwZU9mKCRTeW1ib2wucHJvdG90eXBlLCAkT2JqZWN0KGl0KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkU3RyaW5nID0gU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICB0cnkge1xuICAgIHJldHVybiAkU3RyaW5nKGFyZ3VtZW50KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gJ09iamVjdCc7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciB0cnlUb1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90cnktdG8tc3RyaW5nJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgQXNzZXJ0OiBJc0NhbGxhYmxlKGFyZ3VtZW50KSBpcyB0cnVlYFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgaWYgKGlzQ2FsbGFibGUoYXJndW1lbnQpKSByZXR1cm4gYXJndW1lbnQ7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKHRyeVRvU3RyaW5nKGFyZ3VtZW50KSArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtbnVsbC1vci11bmRlZmluZWQnKTtcblxuLy8gYEdldE1ldGhvZGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWdldG1ldGhvZFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoViwgUCkge1xuICB2YXIgZnVuYyA9IFZbUF07XG4gIHJldHVybiBpc051bGxPclVuZGVmaW5lZChmdW5jKSA/IHVuZGVmaW5lZCA6IGFDYWxsYWJsZShmdW5jKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBPcmRpbmFyeVRvUHJpbWl0aXZlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb3JkaW5hcnl0b3ByaW1pdGl2ZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5wdXQsIHByZWYpIHtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChwcmVmID09PSAnc3RyaW5nJyAmJiBpc0NhbGxhYmxlKGZuID0gaW5wdXQudG9TdHJpbmcpICYmICFpc09iamVjdCh2YWwgPSBjYWxsKGZuLCBpbnB1dCkpKSByZXR1cm4gdmFsO1xuICBpZiAoaXNDYWxsYWJsZShmbiA9IGlucHV0LnZhbHVlT2YpICYmICFpc09iamVjdCh2YWwgPSBjYWxsKGZuLCBpbnB1dCkpKSByZXR1cm4gdmFsO1xuICBpZiAocHJlZiAhPT0gJ3N0cmluZycgJiYgaXNDYWxsYWJsZShmbiA9IGlucHV0LnRvU3RyaW5nKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgdHJ5IHtcbiAgICBkZWZpbmVQcm9wZXJ0eShnbG9iYWwsIGtleSwgeyB2YWx1ZTogdmFsdWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgZ2xvYmFsW2tleV0gPSB2YWx1ZTtcbiAgfSByZXR1cm4gdmFsdWU7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgZGVmaW5lR2xvYmFsUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWdsb2JhbC1wcm9wZXJ0eScpO1xuXG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBnbG9iYWxbU0hBUkVEXSB8fCBkZWZpbmVHbG9iYWxQcm9wZXJ0eShTSEFSRUQsIHt9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBzdG9yZTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG52YXIgc3RvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDoge30pO1xufSkoJ3ZlcnNpb25zJywgW10pLnB1c2goe1xuICB2ZXJzaW9uOiAnMy4zNS4xJyxcbiAgbW9kZTogSVNfUFVSRSA/ICdwdXJlJyA6ICdnbG9iYWwnLFxuICBjb3B5cmlnaHQ6ICfCqSAyMDE0LTIwMjQgRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSknLFxuICBsaWNlbnNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvYmxvYi92My4zNS4xL0xJQ0VOU0UnLFxuICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcydcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcblxuLy8gYFRvT2JqZWN0YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9vYmplY3Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiAkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xuXG52YXIgaGFzT3duUHJvcGVydHkgPSB1bmN1cnJ5VGhpcyh7fS5oYXNPd25Qcm9wZXJ0eSk7XG5cbi8vIGBIYXNPd25Qcm9wZXJ0eWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWhhc293bnByb3BlcnR5XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWhhc293biAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5oYXNPd24gfHwgZnVuY3Rpb24gaGFzT3duKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5KHRvT2JqZWN0KGl0KSwga2V5KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG52YXIgaWQgPSAwO1xudmFyIHBvc3RmaXggPSBNYXRoLnJhbmRvbSgpO1xudmFyIHRvU3RyaW5nID0gdW5jdXJyeVRoaXMoMS4wLnRvU3RyaW5nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcgKyAoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSkgKyAnKV8nICsgdG9TdHJpbmcoKytpZCArIHBvc3RmaXgsIDM2KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zeW1ib2wtY29uc3RydWN0b3ItZGV0ZWN0aW9uJyk7XG52YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQnKTtcblxudmFyIFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgV2VsbEtub3duU3ltYm9sc1N0b3JlID0gc2hhcmVkKCd3a3MnKTtcbnZhciBjcmVhdGVXZWxsS25vd25TeW1ib2wgPSBVU0VfU1lNQk9MX0FTX1VJRCA/IFN5bWJvbFsnZm9yJ10gfHwgU3ltYm9sIDogU3ltYm9sICYmIFN5bWJvbC53aXRob3V0U2V0dGVyIHx8IHVpZDtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICBpZiAoIWhhc093bihXZWxsS25vd25TeW1ib2xzU3RvcmUsIG5hbWUpKSB7XG4gICAgV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdID0gTkFUSVZFX1NZTUJPTCAmJiBoYXNPd24oU3ltYm9sLCBuYW1lKVxuICAgICAgPyBTeW1ib2xbbmFtZV1cbiAgICAgIDogY3JlYXRlV2VsbEtub3duU3ltYm9sKCdTeW1ib2wuJyArIG5hbWUpO1xuICB9IHJldHVybiBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1zeW1ib2wnKTtcbnZhciBnZXRNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LW1ldGhvZCcpO1xudmFyIG9yZGluYXJ5VG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb3JkaW5hcnktdG8tcHJpbWl0aXZlJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xudmFyIFRPX1BSSU1JVElWRSA9IHdlbGxLbm93blN5bWJvbCgndG9QcmltaXRpdmUnKTtcblxuLy8gYFRvUHJpbWl0aXZlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9wcmltaXRpdmVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBwcmVmKSB7XG4gIGlmICghaXNPYmplY3QoaW5wdXQpIHx8IGlzU3ltYm9sKGlucHV0KSkgcmV0dXJuIGlucHV0O1xuICB2YXIgZXhvdGljVG9QcmltID0gZ2V0TWV0aG9kKGlucHV0LCBUT19QUklNSVRJVkUpO1xuICB2YXIgcmVzdWx0O1xuICBpZiAoZXhvdGljVG9QcmltKSB7XG4gICAgaWYgKHByZWYgPT09IHVuZGVmaW5lZCkgcHJlZiA9ICdkZWZhdWx0JztcbiAgICByZXN1bHQgPSBjYWxsKGV4b3RpY1RvUHJpbSwgaW5wdXQsIHByZWYpO1xuICAgIGlmICghaXNPYmplY3QocmVzdWx0KSB8fCBpc1N5bWJvbChyZXN1bHQpKSByZXR1cm4gcmVzdWx0O1xuICAgIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xuICB9XG4gIGlmIChwcmVmID09PSB1bmRlZmluZWQpIHByZWYgPSAnbnVtYmVyJztcbiAgcmV0dXJuIG9yZGluYXJ5VG9QcmltaXRpdmUoaW5wdXQsIHByZWYpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG5cbi8vIGBUb1Byb3BlcnR5S2V5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9wcm9wZXJ0eWtleVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIGtleSA9IHRvUHJpbWl0aXZlKGFyZ3VtZW50LCAnc3RyaW5nJyk7XG4gIHJldHVybiBpc1N5bWJvbChrZXkpID8ga2V5IDoga2V5ICsgJyc7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciBkb2N1bWVudCA9IGdsb2JhbC5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIEVYSVNUUyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIEVYSVNUUyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCcpO1xuXG4vLyBUaGFua3MgdG8gSUU4IGZvciBpdHMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIURFU0NSSVBUT1JTICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjcmVhdGVFbGVtZW50KCdkaXYnKSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9XG4gIH0pLmEgIT09IDc7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5Jyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pZTgtZG9tLWRlZmluZScpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5ZGVzY3JpcHRvclxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgPyAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSW5kZXhlZE9iamVjdChPKTtcbiAgUCA9IHRvUHJvcGVydHlLZXkoUCk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzT3duKE8sIFApKSByZXR1cm4gY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKCFjYWxsKHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlLmYsIE8sIFApLCBPW1BdKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxuLy8gVjggfiBDaHJvbWUgMzYtXG4vLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMzM0XG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSwgJ3Byb3RvdHlwZScsIHtcbiAgICB2YWx1ZTogNDIsXG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pLnByb3RvdHlwZSAhPT0gNDI7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciAkU3RyaW5nID0gU3RyaW5nO1xudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBBc3NlcnQ6IFR5cGUoYXJndW1lbnQpIGlzIE9iamVjdGBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIGlmIChpc09iamVjdChhcmd1bWVudCkpIHJldHVybiBhcmd1bWVudDtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJFN0cmluZyhhcmd1bWVudCkgKyAnIGlzIG5vdCBhbiBvYmplY3QnKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcbnZhciBWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1ZycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5Jyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgJGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIEVOVU1FUkFCTEUgPSAnZW51bWVyYWJsZSc7XG52YXIgQ09ORklHVVJBQkxFID0gJ2NvbmZpZ3VyYWJsZSc7XG52YXIgV1JJVEFCTEUgPSAnd3JpdGFibGUnO1xuXG4vLyBgT2JqZWN0LmRlZmluZVByb3BlcnR5YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnR5XG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyA/IFY4X1BST1RPVFlQRV9ERUZJTkVfQlVHID8gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJvcGVydHlLZXkoUCk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAodHlwZW9mIE8gPT09ICdmdW5jdGlvbicgJiYgUCA9PT0gJ3Byb3RvdHlwZScgJiYgJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzICYmIFdSSVRBQkxFIGluIEF0dHJpYnV0ZXMgJiYgIUF0dHJpYnV0ZXNbV1JJVEFCTEVdKSB7XG4gICAgdmFyIGN1cnJlbnQgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApO1xuICAgIGlmIChjdXJyZW50ICYmIGN1cnJlbnRbV1JJVEFCTEVdKSB7XG4gICAgICBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgICAgIEF0dHJpYnV0ZXMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogQ09ORklHVVJBQkxFIGluIEF0dHJpYnV0ZXMgPyBBdHRyaWJ1dGVzW0NPTkZJR1VSQUJMRV0gOiBjdXJyZW50W0NPTkZJR1VSQUJMRV0sXG4gICAgICAgIGVudW1lcmFibGU6IEVOVU1FUkFCTEUgaW4gQXR0cmlidXRlcyA/IEF0dHJpYnV0ZXNbRU5VTUVSQUJMRV0gOiBjdXJyZW50W0VOVU1FUkFCTEVdLFxuICAgICAgICB3cml0YWJsZTogZmFsc2VcbiAgICAgIH07XG4gICAgfVxuICB9IHJldHVybiAkZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG59IDogJGRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJvcGVydHlLZXkoUCk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuICRkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBuZXcgJFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKG9iamVjdCwga2V5LCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG5cbnZhciBGdW5jdGlvblByb3RvdHlwZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciBnZXREZXNjcmlwdG9yID0gREVTQ1JJUFRPUlMgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxudmFyIEVYSVNUUyA9IGhhc093bihGdW5jdGlvblByb3RvdHlwZSwgJ25hbWUnKTtcbi8vIGFkZGl0aW9uYWwgcHJvdGVjdGlvbiBmcm9tIG1pbmlmaWVkIC8gbWFuZ2xlZCAvIGRyb3BwZWQgZnVuY3Rpb24gbmFtZXNcbnZhciBQUk9QRVIgPSBFWElTVFMgJiYgKGZ1bmN0aW9uIHNvbWV0aGluZygpIHsgLyogZW1wdHkgKi8gfSkubmFtZSA9PT0gJ3NvbWV0aGluZyc7XG52YXIgQ09ORklHVVJBQkxFID0gRVhJU1RTICYmICghREVTQ1JJUFRPUlMgfHwgKERFU0NSSVBUT1JTICYmIGdldERlc2NyaXB0b3IoRnVuY3Rpb25Qcm90b3R5cGUsICduYW1lJykuY29uZmlndXJhYmxlKSk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBFWElTVFM6IEVYSVNUUyxcbiAgUFJPUEVSOiBQUk9QRVIsXG4gIENPTkZJR1VSQUJMRTogQ09ORklHVVJBQkxFXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgc3RvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG5cbnZhciBmdW5jdGlvblRvU3RyaW5nID0gdW5jdXJyeVRoaXMoRnVuY3Rpb24udG9TdHJpbmcpO1xuXG4vLyB0aGlzIGhlbHBlciBicm9rZW4gaW4gYGNvcmUtanNAMy40LjEtMy40LjRgLCBzbyB3ZSBjYW4ndCB1c2UgYHNoYXJlZGAgaGVscGVyXG5pZiAoIWlzQ2FsbGFibGUoc3RvcmUuaW5zcGVjdFNvdXJjZSkpIHtcbiAgc3RvcmUuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBmdW5jdGlvblRvU3RyaW5nKGl0KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdG9yZS5pbnNwZWN0U291cmNlO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgV2Vha01hcCA9IGdsb2JhbC5XZWFrTWFwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQ2FsbGFibGUoV2Vha01hcCkgJiYgL25hdGl2ZSBjb2RlLy50ZXN0KFN0cmluZyhXZWFrTWFwKSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG5cbnZhciBrZXlzID0gc2hhcmVkKCdrZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4ga2V5c1trZXldIHx8IChrZXlzW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIE5BVElWRV9XRUFLX01BUCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24nKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xuXG52YXIgT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQgPSAnT2JqZWN0IGFscmVhZHkgaW5pdGlhbGl6ZWQnO1xudmFyIFR5cGVFcnJvciA9IGdsb2JhbC5UeXBlRXJyb3I7XG52YXIgV2Vha01hcCA9IGdsb2JhbC5XZWFrTWFwO1xudmFyIHNldCwgZ2V0LCBoYXM7XG5cbnZhciBlbmZvcmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBoYXMoaXQpID8gZ2V0KGl0KSA6IHNldChpdCwge30pO1xufTtcblxudmFyIGdldHRlckZvciA9IGZ1bmN0aW9uIChUWVBFKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaXQpIHtcbiAgICB2YXIgc3RhdGU7XG4gICAgaWYgKCFpc09iamVjdChpdCkgfHwgKHN0YXRlID0gZ2V0KGl0KSkudHlwZSAhPT0gVFlQRSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW5jb21wYXRpYmxlIHJlY2VpdmVyLCAnICsgVFlQRSArICcgcmVxdWlyZWQnKTtcbiAgICB9IHJldHVybiBzdGF0ZTtcbiAgfTtcbn07XG5cbmlmIChOQVRJVkVfV0VBS19NQVAgfHwgc2hhcmVkLnN0YXRlKSB7XG4gIHZhciBzdG9yZSA9IHNoYXJlZC5zdGF0ZSB8fCAoc2hhcmVkLnN0YXRlID0gbmV3IFdlYWtNYXAoKSk7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXNlbGYtYXNzaWduIC0tIHByb3RvdHlwZSBtZXRob2RzIHByb3RlY3Rpb24gKi9cbiAgc3RvcmUuZ2V0ID0gc3RvcmUuZ2V0O1xuICBzdG9yZS5oYXMgPSBzdG9yZS5oYXM7XG4gIHN0b3JlLnNldCA9IHN0b3JlLnNldDtcbiAgLyogZXNsaW50LWVuYWJsZSBuby1zZWxmLWFzc2lnbiAtLSBwcm90b3R5cGUgbWV0aG9kcyBwcm90ZWN0aW9uICovXG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICBpZiAoc3RvcmUuaGFzKGl0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcihPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCk7XG4gICAgbWV0YWRhdGEuZmFjYWRlID0gaXQ7XG4gICAgc3RvcmUuc2V0KGl0LCBtZXRhZGF0YSk7XG4gICAgcmV0dXJuIG1ldGFkYXRhO1xuICB9O1xuICBnZXQgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gc3RvcmUuZ2V0KGl0KSB8fCB7fTtcbiAgfTtcbiAgaGFzID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHN0b3JlLmhhcyhpdCk7XG4gIH07XG59IGVsc2Uge1xuICB2YXIgU1RBVEUgPSBzaGFyZWRLZXkoJ3N0YXRlJyk7XG4gIGhpZGRlbktleXNbU1RBVEVdID0gdHJ1ZTtcbiAgc2V0ID0gZnVuY3Rpb24gKGl0LCBtZXRhZGF0YSkge1xuICAgIGlmIChoYXNPd24oaXQsIFNUQVRFKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCk7XG4gICAgbWV0YWRhdGEuZmFjYWRlID0gaXQ7XG4gICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KGl0LCBTVEFURSwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGhhc093bihpdCwgU1RBVEUpID8gaXRbU1RBVEVdIDoge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBoYXNPd24oaXQsIFNUQVRFKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogc2V0LFxuICBnZXQ6IGdldCxcbiAgaGFzOiBoYXMsXG4gIGVuZm9yY2U6IGVuZm9yY2UsXG4gIGdldHRlckZvcjogZ2V0dGVyRm9yXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgQ09ORklHVVJBQkxFX0ZVTkNUSU9OX05BTUUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tbmFtZScpLkNPTkZJR1VSQUJMRTtcbnZhciBpbnNwZWN0U291cmNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luc3BlY3Qtc291cmNlJyk7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpO1xuXG52YXIgZW5mb3JjZUludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmVuZm9yY2U7XG52YXIgZ2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0O1xudmFyICRTdHJpbmcgPSBTdHJpbmc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBzdHJpbmdTbGljZSA9IHVuY3VycnlUaGlzKCcnLnNsaWNlKTtcbnZhciByZXBsYWNlID0gdW5jdXJyeVRoaXMoJycucmVwbGFjZSk7XG52YXIgam9pbiA9IHVuY3VycnlUaGlzKFtdLmpvaW4pO1xuXG52YXIgQ09ORklHVVJBQkxFX0xFTkdUSCA9IERFU0NSSVBUT1JTICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eShmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0sICdsZW5ndGgnLCB7IHZhbHVlOiA4IH0pLmxlbmd0aCAhPT0gODtcbn0pO1xuXG52YXIgVEVNUExBVEUgPSBTdHJpbmcoU3RyaW5nKS5zcGxpdCgnU3RyaW5nJyk7XG5cbnZhciBtYWtlQnVpbHRJbiA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlLCBuYW1lLCBvcHRpb25zKSB7XG4gIGlmIChzdHJpbmdTbGljZSgkU3RyaW5nKG5hbWUpLCAwLCA3KSA9PT0gJ1N5bWJvbCgnKSB7XG4gICAgbmFtZSA9ICdbJyArIHJlcGxhY2UoJFN0cmluZyhuYW1lKSwgL15TeW1ib2xcXCgoW14pXSopXFwpLiokLywgJyQxJykgKyAnXSc7XG4gIH1cbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5nZXR0ZXIpIG5hbWUgPSAnZ2V0ICcgKyBuYW1lO1xuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnNldHRlcikgbmFtZSA9ICdzZXQgJyArIG5hbWU7XG4gIGlmICghaGFzT3duKHZhbHVlLCAnbmFtZScpIHx8IChDT05GSUdVUkFCTEVfRlVOQ1RJT05fTkFNRSAmJiB2YWx1ZS5uYW1lICE9PSBuYW1lKSkge1xuICAgIGlmIChERVNDUklQVE9SUykgZGVmaW5lUHJvcGVydHkodmFsdWUsICduYW1lJywgeyB2YWx1ZTogbmFtZSwgY29uZmlndXJhYmxlOiB0cnVlIH0pO1xuICAgIGVsc2UgdmFsdWUubmFtZSA9IG5hbWU7XG4gIH1cbiAgaWYgKENPTkZJR1VSQUJMRV9MRU5HVEggJiYgb3B0aW9ucyAmJiBoYXNPd24ob3B0aW9ucywgJ2FyaXR5JykgJiYgdmFsdWUubGVuZ3RoICE9PSBvcHRpb25zLmFyaXR5KSB7XG4gICAgZGVmaW5lUHJvcGVydHkodmFsdWUsICdsZW5ndGgnLCB7IHZhbHVlOiBvcHRpb25zLmFyaXR5IH0pO1xuICB9XG4gIHRyeSB7XG4gICAgaWYgKG9wdGlvbnMgJiYgaGFzT3duKG9wdGlvbnMsICdjb25zdHJ1Y3RvcicpICYmIG9wdGlvbnMuY29uc3RydWN0b3IpIHtcbiAgICAgIGlmIChERVNDUklQVE9SUykgZGVmaW5lUHJvcGVydHkodmFsdWUsICdwcm90b3R5cGUnLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTtcbiAgICAvLyBpbiBWOCB+IENocm9tZSA1MywgcHJvdG90eXBlcyBvZiBzb21lIG1ldGhvZHMsIGxpa2UgYEFycmF5LnByb3RvdHlwZS52YWx1ZXNgLCBhcmUgbm9uLXdyaXRhYmxlXG4gICAgfSBlbHNlIGlmICh2YWx1ZS5wcm90b3R5cGUpIHZhbHVlLnByb3RvdHlwZSA9IHVuZGVmaW5lZDtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICB2YXIgc3RhdGUgPSBlbmZvcmNlSW50ZXJuYWxTdGF0ZSh2YWx1ZSk7XG4gIGlmICghaGFzT3duKHN0YXRlLCAnc291cmNlJykpIHtcbiAgICBzdGF0ZS5zb3VyY2UgPSBqb2luKFRFTVBMQVRFLCB0eXBlb2YgbmFtZSA9PSAnc3RyaW5nJyA/IG5hbWUgOiAnJyk7XG4gIH0gcmV0dXJuIHZhbHVlO1xufTtcblxuLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXh0ZW5kLW5hdGl2ZSAtLSByZXF1aXJlZFxuRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nID0gbWFrZUJ1aWx0SW4oZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiBpc0NhbGxhYmxlKHRoaXMpICYmIGdldEludGVybmFsU3RhdGUodGhpcykuc291cmNlIHx8IGluc3BlY3RTb3VyY2UodGhpcyk7XG59LCAndG9TdHJpbmcnKTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBtYWtlQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9tYWtlLWJ1aWx0LWluJyk7XG52YXIgZGVmaW5lR2xvYmFsUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWdsb2JhbC1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBrZXksIHZhbHVlLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykgb3B0aW9ucyA9IHt9O1xuICB2YXIgc2ltcGxlID0gb3B0aW9ucy5lbnVtZXJhYmxlO1xuICB2YXIgbmFtZSA9IG9wdGlvbnMubmFtZSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5uYW1lIDoga2V5O1xuICBpZiAoaXNDYWxsYWJsZSh2YWx1ZSkpIG1ha2VCdWlsdEluKHZhbHVlLCBuYW1lLCBvcHRpb25zKTtcbiAgaWYgKG9wdGlvbnMuZ2xvYmFsKSB7XG4gICAgaWYgKHNpbXBsZSkgT1trZXldID0gdmFsdWU7XG4gICAgZWxzZSBkZWZpbmVHbG9iYWxQcm9wZXJ0eShrZXksIHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFvcHRpb25zLnVuc2FmZSkgZGVsZXRlIE9ba2V5XTtcbiAgICAgIGVsc2UgaWYgKE9ba2V5XSkgc2ltcGxlID0gdHJ1ZTtcbiAgICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gICAgaWYgKHNpbXBsZSkgT1trZXldID0gdmFsdWU7XG4gICAgZWxzZSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKE8sIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6ICFvcHRpb25zLm5vbkNvbmZpZ3VyYWJsZSxcbiAgICAgIHdyaXRhYmxlOiAhb3B0aW9ucy5ub25Xcml0YWJsZVxuICAgIH0pO1xuICB9IHJldHVybiBPO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5cbi8vIGBNYXRoLnRydW5jYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbWF0aC50cnVuY1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW1hdGgtdHJ1bmMgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBNYXRoLnRydW5jIHx8IGZ1bmN0aW9uIHRydW5jKHgpIHtcbiAgdmFyIG4gPSAreDtcbiAgcmV0dXJuIChuID4gMCA/IGZsb29yIDogY2VpbCkobik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0cnVuYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9tYXRoLXRydW5jJyk7XG5cbi8vIGBUb0ludGVnZXJPckluZmluaXR5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9pbnRlZ2Vyb3JpbmZpbml0eVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIG51bWJlciA9ICthcmd1bWVudDtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgcmV0dXJuIG51bWJlciAhPT0gbnVtYmVyIHx8IG51bWJlciA9PT0gMCA/IDAgOiB0cnVuYyhudW1iZXIpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9JbnRlZ2VyT3JJbmZpbml0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyLW9yLWluZmluaXR5Jyk7XG5cbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcblxuLy8gSGVscGVyIGZvciBhIHBvcHVsYXIgcmVwZWF0aW5nIGNhc2Ugb2YgdGhlIHNwZWM6XG4vLyBMZXQgaW50ZWdlciBiZSA/IFRvSW50ZWdlcihpbmRleCkuXG4vLyBJZiBpbnRlZ2VyIDwgMCwgbGV0IHJlc3VsdCBiZSBtYXgoKGxlbmd0aCArIGludGVnZXIpLCAwKTsgZWxzZSBsZXQgcmVzdWx0IGJlIG1pbihpbnRlZ2VyLCBsZW5ndGgpLlxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICB2YXIgaW50ZWdlciA9IHRvSW50ZWdlck9ySW5maW5pdHkoaW5kZXgpO1xuICByZXR1cm4gaW50ZWdlciA8IDAgPyBtYXgoaW50ZWdlciArIGxlbmd0aCwgMCkgOiBtaW4oaW50ZWdlciwgbGVuZ3RoKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xuXG52YXIgbWluID0gTWF0aC5taW47XG5cbi8vIGBUb0xlbmd0aGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvbGVuZ3RoXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICB2YXIgbGVuID0gdG9JbnRlZ2VyT3JJbmZpbml0eShhcmd1bWVudCk7XG4gIHJldHVybiBsZW4gPiAwID8gbWluKGxlbiwgMHgxRkZGRkZGRkZGRkZGRikgOiAwOyAvLyAyICoqIDUzIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcblxuLy8gYExlbmd0aE9mQXJyYXlMaWtlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbGVuZ3Rob2ZhcnJheWxpa2Vcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdG9MZW5ndGgob2JqLmxlbmd0aCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tYWJzb2x1dGUtaW5kZXgnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnsgaW5kZXhPZiwgaW5jbHVkZXMgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSBsZW5ndGhPZkFycmF5TGlrZShPKTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT09IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gICAgICBpZiAodmFsdWUgIT09IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICBpZiAoKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pICYmIE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBBcnJheS5wcm90b3R5cGUuaW5jbHVkZXNgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmNsdWRlc1xuICBpbmNsdWRlczogY3JlYXRlTWV0aG9kKHRydWUpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmluZGV4T2ZgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmRleG9mXG4gIGluZGV4T2Y6IGNyZWF0ZU1ldGhvZChmYWxzZSlcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgaW5kZXhPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pbmNsdWRlcycpLmluZGV4T2Y7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xuXG52YXIgcHVzaCA9IHVuY3VycnlUaGlzKFtdLnB1c2gpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSAhaGFzT3duKGhpZGRlbktleXMsIGtleSkgJiYgaGFzT3duKE8sIGtleSkgJiYgcHVzaChyZXN1bHQsIGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXNPd24oTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+aW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcHVzaChyZXN1bHQsIGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gSUU4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IFtcbiAgJ2NvbnN0cnVjdG9yJyxcbiAgJ2hhc093blByb3BlcnR5JyxcbiAgJ2lzUHJvdG90eXBlT2YnLFxuICAncHJvcGVydHlJc0VudW1lcmFibGUnLFxuICAndG9Mb2NhbGVTdHJpbmcnLFxuICAndG9TdHJpbmcnLFxuICAndmFsdWVPZidcbl07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGludGVybmFsT2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcblxudmFyIGhpZGRlbktleXMgPSBlbnVtQnVnS2V5cy5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5bmFtZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHluYW1lcyAtLSBzYWZlXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuIGludGVybmFsT2JqZWN0S2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eXN5bWJvbHMgLS0gc2FmZVxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcblxudmFyIGNvbmNhdCA9IHVuY3VycnlUaGlzKFtdLmNvbmNhdCk7XG5cbi8vIGFsbCBvYmplY3Qga2V5cywgaW5jbHVkZXMgbm9uLWVudW1lcmFibGUgYW5kIHN5bWJvbHNcbm1vZHVsZS5leHBvcnRzID0gZ2V0QnVpbHRJbignUmVmbGVjdCcsICdvd25LZXlzJykgfHwgZnVuY3Rpb24gb3duS2V5cyhpdCkge1xuICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUuZihhbk9iamVjdChpdCkpO1xuICB2YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlLmY7XG4gIHJldHVybiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPyBjb25jYXQoa2V5cywgZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSkgOiBrZXlzO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBvd25LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL293bi1rZXlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc291cmNlLCBleGNlcHRpb25zKSB7XG4gIHZhciBrZXlzID0gb3duS2V5cyhzb3VyY2UpO1xuICB2YXIgZGVmaW5lUHJvcGVydHkgPSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mO1xuICB2YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlLmY7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIGlmICghaGFzT3duKHRhcmdldCwga2V5KSAmJiAhKGV4Y2VwdGlvbnMgJiYgaGFzT3duKGV4Y2VwdGlvbnMsIGtleSkpKSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgfVxuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIHJlcGxhY2VtZW50ID0gLyN8XFwucHJvdG90eXBlXFwuLztcblxudmFyIGlzRm9yY2VkID0gZnVuY3Rpb24gKGZlYXR1cmUsIGRldGVjdGlvbikge1xuICB2YXIgdmFsdWUgPSBkYXRhW25vcm1hbGl6ZShmZWF0dXJlKV07XG4gIHJldHVybiB2YWx1ZSA9PT0gUE9MWUZJTEwgPyB0cnVlXG4gICAgOiB2YWx1ZSA9PT0gTkFUSVZFID8gZmFsc2VcbiAgICA6IGlzQ2FsbGFibGUoZGV0ZWN0aW9uKSA/IGZhaWxzKGRldGVjdGlvbilcbiAgICA6ICEhZGV0ZWN0aW9uO1xufTtcblxudmFyIG5vcm1hbGl6ZSA9IGlzRm9yY2VkLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgcmV0dXJuIFN0cmluZyhzdHJpbmcpLnJlcGxhY2UocmVwbGFjZW1lbnQsICcuJykudG9Mb3dlckNhc2UoKTtcbn07XG5cbnZhciBkYXRhID0gaXNGb3JjZWQuZGF0YSA9IHt9O1xudmFyIE5BVElWRSA9IGlzRm9yY2VkLk5BVElWRSA9ICdOJztcbnZhciBQT0xZRklMTCA9IGlzRm9yY2VkLlBPTFlGSUxMID0gJ1AnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRm9yY2VkO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKS5mO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBkZWZpbmVCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbicpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcbnZhciBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcHktY29uc3RydWN0b3ItcHJvcGVydGllcycpO1xudmFyIGlzRm9yY2VkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWZvcmNlZCcpO1xuXG4vKlxuICBvcHRpb25zLnRhcmdldCAgICAgICAgIC0gbmFtZSBvZiB0aGUgdGFyZ2V0IG9iamVjdFxuICBvcHRpb25zLmdsb2JhbCAgICAgICAgIC0gdGFyZ2V0IGlzIHRoZSBnbG9iYWwgb2JqZWN0XG4gIG9wdGlvbnMuc3RhdCAgICAgICAgICAgLSBleHBvcnQgYXMgc3RhdGljIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucHJvdG8gICAgICAgICAgLSBleHBvcnQgYXMgcHJvdG90eXBlIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucmVhbCAgICAgICAgICAgLSByZWFsIHByb3RvdHlwZSBtZXRob2QgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLmZvcmNlZCAgICAgICAgIC0gZXhwb3J0IGV2ZW4gaWYgdGhlIG5hdGl2ZSBmZWF0dXJlIGlzIGF2YWlsYWJsZVxuICBvcHRpb25zLmJpbmQgICAgICAgICAgIC0gYmluZCBtZXRob2RzIHRvIHRoZSB0YXJnZXQsIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy53cmFwICAgICAgICAgICAtIHdyYXAgY29uc3RydWN0b3JzIHRvIHByZXZlbnRpbmcgZ2xvYmFsIHBvbGx1dGlvbiwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLnVuc2FmZSAgICAgICAgIC0gdXNlIHRoZSBzaW1wbGUgYXNzaWdubWVudCBvZiBwcm9wZXJ0eSBpbnN0ZWFkIG9mIGRlbGV0ZSArIGRlZmluZVByb3BlcnR5XG4gIG9wdGlvbnMuc2hhbSAgICAgICAgICAgLSBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gIG9wdGlvbnMuZW51bWVyYWJsZSAgICAgLSBleHBvcnQgYXMgZW51bWVyYWJsZSBwcm9wZXJ0eVxuICBvcHRpb25zLmRvbnRDYWxsR2V0U2V0IC0gcHJldmVudCBjYWxsaW5nIGEgZ2V0dGVyIG9uIHRhcmdldFxuICBvcHRpb25zLm5hbWUgICAgICAgICAgIC0gdGhlIC5uYW1lIG9mIHRoZSBmdW5jdGlvbiBpZiBpdCBkb2VzIG5vdCBtYXRjaCB0aGUga2V5XG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3B0aW9ucywgc291cmNlKSB7XG4gIHZhciBUQVJHRVQgPSBvcHRpb25zLnRhcmdldDtcbiAgdmFyIEdMT0JBTCA9IG9wdGlvbnMuZ2xvYmFsO1xuICB2YXIgU1RBVElDID0gb3B0aW9ucy5zdGF0O1xuICB2YXIgRk9SQ0VELCB0YXJnZXQsIGtleSwgdGFyZ2V0UHJvcGVydHksIHNvdXJjZVByb3BlcnR5LCBkZXNjcmlwdG9yO1xuICBpZiAoR0xPQkFMKSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsO1xuICB9IGVsc2UgaWYgKFNUQVRJQykge1xuICAgIHRhcmdldCA9IGdsb2JhbFtUQVJHRVRdIHx8IGRlZmluZUdsb2JhbFByb3BlcnR5KFRBUkdFVCwge30pO1xuICB9IGVsc2Uge1xuICAgIHRhcmdldCA9IGdsb2JhbFtUQVJHRVRdICYmIGdsb2JhbFtUQVJHRVRdLnByb3RvdHlwZTtcbiAgfVxuICBpZiAodGFyZ2V0KSBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICBzb3VyY2VQcm9wZXJ0eSA9IHNvdXJjZVtrZXldO1xuICAgIGlmIChvcHRpb25zLmRvbnRDYWxsR2V0U2V0KSB7XG4gICAgICBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KTtcbiAgICAgIHRhcmdldFByb3BlcnR5ID0gZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLnZhbHVlO1xuICAgIH0gZWxzZSB0YXJnZXRQcm9wZXJ0eSA9IHRhcmdldFtrZXldO1xuICAgIEZPUkNFRCA9IGlzRm9yY2VkKEdMT0JBTCA/IGtleSA6IFRBUkdFVCArIChTVEFUSUMgPyAnLicgOiAnIycpICsga2V5LCBvcHRpb25zLmZvcmNlZCk7XG4gICAgLy8gY29udGFpbmVkIGluIHRhcmdldFxuICAgIGlmICghRk9SQ0VEICYmIHRhcmdldFByb3BlcnR5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0eXBlb2Ygc291cmNlUHJvcGVydHkgPT0gdHlwZW9mIHRhcmdldFByb3BlcnR5KSBjb250aW51ZTtcbiAgICAgIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMoc291cmNlUHJvcGVydHksIHRhcmdldFByb3BlcnR5KTtcbiAgICB9XG4gICAgLy8gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuICAgIGlmIChvcHRpb25zLnNoYW0gfHwgKHRhcmdldFByb3BlcnR5ICYmIHRhcmdldFByb3BlcnR5LnNoYW0pKSB7XG4gICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoc291cmNlUHJvcGVydHksICdzaGFtJywgdHJ1ZSk7XG4gICAgfVxuICAgIGRlZmluZUJ1aWx0SW4odGFyZ2V0LCBrZXksIHNvdXJjZVByb3BlcnR5LCBvcHRpb25zKTtcbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG4vLyBgSXNBcnJheWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWlzYXJyYXlcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1pc2FycmF5IC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZ3VtZW50KSB7XG4gIHJldHVybiBjbGFzc29mKGFyZ3VtZW50KSA9PT0gJ0FycmF5Jztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBTYWZhcmkgPCAxMyBkb2VzIG5vdCB0aHJvdyBhbiBlcnJvciBpbiB0aGlzIGNhc2VcbnZhciBTSUxFTlRfT05fTk9OX1dSSVRBQkxFX0xFTkdUSF9TRVQgPSBERVNDUklQVE9SUyAmJiAhZnVuY3Rpb24gKCkge1xuICAvLyBtYWtlcyBubyBzZW5zZSB3aXRob3V0IHByb3BlciBzdHJpY3QgbW9kZSBzdXBwb3J0XG4gIGlmICh0aGlzICE9PSB1bmRlZmluZWQpIHJldHVybiB0cnVlO1xuICB0cnkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShbXSwgJ2xlbmd0aCcsIHsgd3JpdGFibGU6IGZhbHNlIH0pLmxlbmd0aCA9IDE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIGVycm9yIGluc3RhbmNlb2YgVHlwZUVycm9yO1xuICB9XG59KCk7XG5cbm1vZHVsZS5leHBvcnRzID0gU0lMRU5UX09OX05PTl9XUklUQUJMRV9MRU5HVEhfU0VUID8gZnVuY3Rpb24gKE8sIGxlbmd0aCkge1xuICBpZiAoaXNBcnJheShPKSAmJiAhZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sICdsZW5ndGgnKS53cml0YWJsZSkge1xuICAgIHRocm93IG5ldyAkVHlwZUVycm9yKCdDYW5ub3Qgc2V0IHJlYWQgb25seSAubGVuZ3RoJyk7XG4gIH0gcmV0dXJuIE8ubGVuZ3RoID0gbGVuZ3RoO1xufSA6IGZ1bmN0aW9uIChPLCBsZW5ndGgpIHtcbiAgcmV0dXJuIE8ubGVuZ3RoID0gbGVuZ3RoO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gMHgxRkZGRkZGRkZGRkZGRjsgLy8gMiAqKiA1MyAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPiBNQVhfU0FGRV9JTlRFR0VSKSB0aHJvdyAkVHlwZUVycm9yKCdNYXhpbXVtIGFsbG93ZWQgaW5kZXggZXhjZWVkZWQnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xudmFyIHNldEFycmF5TGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNldC1sZW5ndGgnKTtcbnZhciBkb2VzTm90RXhjZWVkU2FmZUludGVnZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9lcy1ub3QtZXhjZWVkLXNhZmUtaW50ZWdlcicpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbnZhciBJTkNPUlJFQ1RfVE9fTEVOR1RIID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gW10ucHVzaC5jYWxsKHsgbGVuZ3RoOiAweDEwMDAwMDAwMCB9LCAxKSAhPT0gNDI5NDk2NzI5Nztcbn0pO1xuXG4vLyBWOCA8PSAxMjEgYW5kIFNhZmFyaSA8PSAxNS40OyBGRiA8IDIzIHRocm93cyBJbnRlcm5hbEVycm9yXG4vLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0xMjY4MVxudmFyIHByb3BlckVycm9yT25Ob25Xcml0YWJsZUxlbmd0aCA9IGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoW10sICdsZW5ndGgnLCB7IHdyaXRhYmxlOiBmYWxzZSB9KS5wdXNoKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIGVycm9yIGluc3RhbmNlb2YgVHlwZUVycm9yO1xuICB9XG59O1xuXG52YXIgRk9SQ0VEID0gSU5DT1JSRUNUX1RPX0xFTkdUSCB8fCAhcHJvcGVyRXJyb3JPbk5vbldyaXRhYmxlTGVuZ3RoKCk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUucHVzaGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5wdXNoXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgYXJpdHk6IDEsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzIC0tIHJlcXVpcmVkIGZvciBgLmxlbmd0aGBcbiAgcHVzaDogZnVuY3Rpb24gcHVzaChpdGVtKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCh0aGlzKTtcbiAgICB2YXIgbGVuID0gbGVuZ3RoT2ZBcnJheUxpa2UoTyk7XG4gICAgdmFyIGFyZ0NvdW50ID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBkb2VzTm90RXhjZWVkU2FmZUludGVnZXIobGVuICsgYXJnQ291bnQpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJnQ291bnQ7IGkrKykge1xuICAgICAgT1tsZW5dID0gYXJndW1lbnRzW2ldO1xuICAgICAgbGVuKys7XG4gICAgfVxuICAgIHNldEFycmF5TGVuZ3RoKE8sIGxlbik7XG4gICAgcmV0dXJuIGxlbjtcbiAgfVxufSk7XG4iLCAiLy8gQGZsb3dcbmltcG9ydCB0eXBlIHsgV2luZG93IH0gZnJvbSAnLi4vdHlwZXMnO1xuZGVjbGFyZSBmdW5jdGlvbiBnZXRXaW5kb3cobm9kZTogTm9kZSB8IFdpbmRvdyk6IFdpbmRvdztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0V2luZG93KG5vZGUpIHtcbiAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgIHJldHVybiB3aW5kb3c7XG4gIH1cblxuICBpZiAobm9kZS50b1N0cmluZygpICE9PSAnW29iamVjdCBXaW5kb3ddJykge1xuICAgIGNvbnN0IG93bmVyRG9jdW1lbnQgPSBub2RlLm93bmVyRG9jdW1lbnQ7XG4gICAgcmV0dXJuIG93bmVyRG9jdW1lbnQgPyBvd25lckRvY3VtZW50LmRlZmF1bHRWaWV3IHx8IHdpbmRvdyA6IHdpbmRvdztcbiAgfVxuXG4gIHJldHVybiBub2RlO1xufVxuIiwgIi8vIEBmbG93XG5pbXBvcnQgZ2V0V2luZG93IGZyb20gJy4vZ2V0V2luZG93JztcblxuZGVjbGFyZSBmdW5jdGlvbiBpc0VsZW1lbnQobm9kZTogbWl4ZWQpOiBib29sZWFuICVjaGVja3Mobm9kZSBpbnN0YW5jZW9mXG4gIEVsZW1lbnQpO1xuZnVuY3Rpb24gaXNFbGVtZW50KG5vZGUpIHtcbiAgY29uc3QgT3duRWxlbWVudCA9IGdldFdpbmRvdyhub2RlKS5FbGVtZW50O1xuICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIE93bkVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQ7XG59XG5cbmRlY2xhcmUgZnVuY3Rpb24gaXNIVE1MRWxlbWVudChub2RlOiBtaXhlZCk6IGJvb2xlYW4gJWNoZWNrcyhub2RlIGluc3RhbmNlb2ZcbiAgSFRNTEVsZW1lbnQpO1xuZnVuY3Rpb24gaXNIVE1MRWxlbWVudChub2RlKSB7XG4gIGNvbnN0IE93bkVsZW1lbnQgPSBnZXRXaW5kb3cobm9kZSkuSFRNTEVsZW1lbnQ7XG4gIHJldHVybiBub2RlIGluc3RhbmNlb2YgT3duRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ7XG59XG5cbmRlY2xhcmUgZnVuY3Rpb24gaXNTaGFkb3dSb290KG5vZGU6IG1peGVkKTogYm9vbGVhbiAlY2hlY2tzKG5vZGUgaW5zdGFuY2VvZlxuICBTaGFkb3dSb290KTtcbmZ1bmN0aW9uIGlzU2hhZG93Um9vdChub2RlKSB7XG4gIC8vIElFIDExIGhhcyBubyBTaGFkb3dSb290XG4gIGlmICh0eXBlb2YgU2hhZG93Um9vdCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgT3duRWxlbWVudCA9IGdldFdpbmRvdyhub2RlKS5TaGFkb3dSb290O1xuICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIE93bkVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIFNoYWRvd1Jvb3Q7XG59XG5cbmV4cG9ydCB7IGlzRWxlbWVudCwgaXNIVE1MRWxlbWVudCwgaXNTaGFkb3dSb290IH07XG4iLCAiLy8gQGZsb3dcbmV4cG9ydCBjb25zdCBtYXggPSBNYXRoLm1heDtcbmV4cG9ydCBjb25zdCBtaW4gPSBNYXRoLm1pbjtcbmV4cG9ydCBjb25zdCByb3VuZCA9IE1hdGgucm91bmQ7XG4iLCAiLy8gQGZsb3dcbnR5cGUgTmF2aWdhdG9yID0gTmF2aWdhdG9yICYgeyB1c2VyQWdlbnREYXRhPzogTmF2aWdhdG9yVUFEYXRhIH07XG5cbmludGVyZmFjZSBOYXZpZ2F0b3JVQURhdGEge1xuICBicmFuZHM6IEFycmF5PHsgYnJhbmQ6IHN0cmluZywgdmVyc2lvbjogc3RyaW5nIH0+O1xuICBtb2JpbGU6IGJvb2xlYW47XG4gIHBsYXRmb3JtOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVBU3RyaW5nKCk6IHN0cmluZyB7XG4gIGNvbnN0IHVhRGF0YSA9IChuYXZpZ2F0b3I6IE5hdmlnYXRvcikudXNlckFnZW50RGF0YTtcblxuICBpZiAodWFEYXRhPy5icmFuZHMgJiYgQXJyYXkuaXNBcnJheSh1YURhdGEuYnJhbmRzKSkge1xuICAgIHJldHVybiB1YURhdGEuYnJhbmRzXG4gICAgICAubWFwKChpdGVtKSA9PiBgJHtpdGVtLmJyYW5kfS8ke2l0ZW0udmVyc2lvbn1gKVxuICAgICAgLmpvaW4oJyAnKTtcbiAgfVxuXG4gIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50O1xufVxuIiwgIi8vIEBmbG93XG5pbXBvcnQgZ2V0VUFTdHJpbmcgZnJvbSAnLi4vdXRpbHMvdXNlckFnZW50JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNMYXlvdXRWaWV3cG9ydCgpIHtcbiAgcmV0dXJuICEvXigoPyFjaHJvbWV8YW5kcm9pZCkuKSpzYWZhcmkvaS50ZXN0KGdldFVBU3RyaW5nKCkpO1xufVxuIiwgIi8vIEBmbG93XG5pbXBvcnQgdHlwZSB7IENsaWVudFJlY3RPYmplY3QsIFZpcnR1YWxFbGVtZW50IH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgaXNFbGVtZW50LCBpc0hUTUxFbGVtZW50IH0gZnJvbSAnLi9pbnN0YW5jZU9mJztcbmltcG9ydCB7IHJvdW5kIH0gZnJvbSAnLi4vdXRpbHMvbWF0aCc7XG5pbXBvcnQgZ2V0V2luZG93IGZyb20gJy4vZ2V0V2luZG93JztcbmltcG9ydCBpc0xheW91dFZpZXdwb3J0IGZyb20gJy4vaXNMYXlvdXRWaWV3cG9ydCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEJvdW5kaW5nQ2xpZW50UmVjdChcbiAgZWxlbWVudDogRWxlbWVudCB8IFZpcnR1YWxFbGVtZW50LFxuICBpbmNsdWRlU2NhbGU6IGJvb2xlYW4gPSBmYWxzZSxcbiAgaXNGaXhlZFN0cmF0ZWd5OiBib29sZWFuID0gZmFsc2Vcbik6IENsaWVudFJlY3RPYmplY3Qge1xuICBjb25zdCBjbGllbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgbGV0IHNjYWxlWCA9IDE7XG4gIGxldCBzY2FsZVkgPSAxO1xuXG4gIGlmIChpbmNsdWRlU2NhbGUgJiYgaXNIVE1MRWxlbWVudChlbGVtZW50KSkge1xuICAgIHNjYWxlWCA9XG4gICAgICAoZWxlbWVudDogSFRNTEVsZW1lbnQpLm9mZnNldFdpZHRoID4gMFxuICAgICAgICA/IHJvdW5kKGNsaWVudFJlY3Qud2lkdGgpIC8gKGVsZW1lbnQ6IEhUTUxFbGVtZW50KS5vZmZzZXRXaWR0aCB8fCAxXG4gICAgICAgIDogMTtcbiAgICBzY2FsZVkgPVxuICAgICAgKGVsZW1lbnQ6IEhUTUxFbGVtZW50KS5vZmZzZXRIZWlnaHQgPiAwXG4gICAgICAgID8gcm91bmQoY2xpZW50UmVjdC5oZWlnaHQpIC8gKGVsZW1lbnQ6IEhUTUxFbGVtZW50KS5vZmZzZXRIZWlnaHQgfHwgMVxuICAgICAgICA6IDE7XG4gIH1cblxuICBjb25zdCB7IHZpc3VhbFZpZXdwb3J0IH0gPSBpc0VsZW1lbnQoZWxlbWVudCkgPyBnZXRXaW5kb3coZWxlbWVudCkgOiB3aW5kb3c7XG4gIGNvbnN0IGFkZFZpc3VhbE9mZnNldHMgPSAhaXNMYXlvdXRWaWV3cG9ydCgpICYmIGlzRml4ZWRTdHJhdGVneTtcblxuICBjb25zdCB4ID1cbiAgICAoY2xpZW50UmVjdC5sZWZ0ICtcbiAgICAgIChhZGRWaXN1YWxPZmZzZXRzICYmIHZpc3VhbFZpZXdwb3J0ID8gdmlzdWFsVmlld3BvcnQub2Zmc2V0TGVmdCA6IDApKSAvXG4gICAgc2NhbGVYO1xuICBjb25zdCB5ID1cbiAgICAoY2xpZW50UmVjdC50b3AgK1xuICAgICAgKGFkZFZpc3VhbE9mZnNldHMgJiYgdmlzdWFsVmlld3BvcnQgPyB2aXN1YWxWaWV3cG9ydC5vZmZzZXRUb3AgOiAwKSkgL1xuICAgIHNjYWxlWTtcbiAgY29uc3Qgd2lkdGggPSBjbGllbnRSZWN0LndpZHRoIC8gc2NhbGVYO1xuICBjb25zdCBoZWlnaHQgPSBjbGllbnRSZWN0LmhlaWdodCAvIHNjYWxlWTtcblxuICByZXR1cm4ge1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICB0b3A6IHksXG4gICAgcmlnaHQ6IHggKyB3aWR0aCxcbiAgICBib3R0b206IHkgKyBoZWlnaHQsXG4gICAgbGVmdDogeCxcbiAgICB4LFxuICAgIHksXG4gIH07XG59XG4iLCAiLy8gQGZsb3dcbmltcG9ydCBnZXRXaW5kb3cgZnJvbSAnLi9nZXRXaW5kb3cnO1xuaW1wb3J0IHR5cGUgeyBXaW5kb3cgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFdpbmRvd1Njcm9sbChub2RlOiBOb2RlIHwgV2luZG93KSB7XG4gIGNvbnN0IHdpbiA9IGdldFdpbmRvdyhub2RlKTtcbiAgY29uc3Qgc2Nyb2xsTGVmdCA9IHdpbi5wYWdlWE9mZnNldDtcbiAgY29uc3Qgc2Nyb2xsVG9wID0gd2luLnBhZ2VZT2Zmc2V0O1xuXG4gIHJldHVybiB7XG4gICAgc2Nyb2xsTGVmdCxcbiAgICBzY3JvbGxUb3AsXG4gIH07XG59XG4iLCAiLy8gQGZsb3dcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0SFRNTEVsZW1lbnRTY3JvbGwoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgcmV0dXJuIHtcbiAgICBzY3JvbGxMZWZ0OiBlbGVtZW50LnNjcm9sbExlZnQsXG4gICAgc2Nyb2xsVG9wOiBlbGVtZW50LnNjcm9sbFRvcCxcbiAgfTtcbn1cbiIsICIvLyBAZmxvd1xuaW1wb3J0IGdldFdpbmRvd1Njcm9sbCBmcm9tICcuL2dldFdpbmRvd1Njcm9sbCc7XG5pbXBvcnQgZ2V0V2luZG93IGZyb20gJy4vZ2V0V2luZG93JztcbmltcG9ydCB7IGlzSFRNTEVsZW1lbnQgfSBmcm9tICcuL2luc3RhbmNlT2YnO1xuaW1wb3J0IGdldEhUTUxFbGVtZW50U2Nyb2xsIGZyb20gJy4vZ2V0SFRNTEVsZW1lbnRTY3JvbGwnO1xuaW1wb3J0IHR5cGUgeyBXaW5kb3cgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE5vZGVTY3JvbGwobm9kZTogTm9kZSB8IFdpbmRvdykge1xuICBpZiAobm9kZSA9PT0gZ2V0V2luZG93KG5vZGUpIHx8ICFpc0hUTUxFbGVtZW50KG5vZGUpKSB7XG4gICAgcmV0dXJuIGdldFdpbmRvd1Njcm9sbChub2RlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZ2V0SFRNTEVsZW1lbnRTY3JvbGwobm9kZSk7XG4gIH1cbn1cbiIsICIvLyBAZmxvd1xuaW1wb3J0IHR5cGUgeyBXaW5kb3cgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE5vZGVOYW1lKGVsZW1lbnQ6ID9Ob2RlIHwgV2luZG93KTogP3N0cmluZyB7XG4gIHJldHVybiBlbGVtZW50ID8gKGVsZW1lbnQubm9kZU5hbWUgfHwgJycpLnRvTG93ZXJDYXNlKCkgOiBudWxsO1xufVxuIiwgIi8vIEBmbG93XG5pbXBvcnQgeyBpc0VsZW1lbnQgfSBmcm9tICcuL2luc3RhbmNlT2YnO1xuaW1wb3J0IHR5cGUgeyBXaW5kb3cgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERvY3VtZW50RWxlbWVudChcbiAgZWxlbWVudDogRWxlbWVudCB8IFdpbmRvd1xuKTogSFRNTEVsZW1lbnQge1xuICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dOiBhc3N1bWUgYm9keSBpcyBhbHdheXMgYXZhaWxhYmxlXG4gIHJldHVybiAoXG4gICAgKGlzRWxlbWVudChlbGVtZW50KVxuICAgICAgPyBlbGVtZW50Lm93bmVyRG9jdW1lbnRcbiAgICAgIDogLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG4gICAgICAgIGVsZW1lbnQuZG9jdW1lbnQpIHx8IHdpbmRvdy5kb2N1bWVudFxuICApLmRvY3VtZW50RWxlbWVudDtcbn1cbiIsICIvLyBAZmxvd1xuaW1wb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmcm9tICcuL2dldEJvdW5kaW5nQ2xpZW50UmVjdCc7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gJy4vZ2V0RG9jdW1lbnRFbGVtZW50JztcbmltcG9ydCBnZXRXaW5kb3dTY3JvbGwgZnJvbSAnLi9nZXRXaW5kb3dTY3JvbGwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRXaW5kb3dTY3JvbGxCYXJYKGVsZW1lbnQ6IEVsZW1lbnQpOiBudW1iZXIge1xuICAvLyBJZiA8aHRtbD4gaGFzIGEgQ1NTIHdpZHRoIGdyZWF0ZXIgdGhhbiB0aGUgdmlld3BvcnQsIHRoZW4gdGhpcyB3aWxsIGJlXG4gIC8vIGluY29ycmVjdCBmb3IgUlRMLlxuICAvLyBQb3BwZXIgMSBpcyBicm9rZW4gaW4gdGhpcyBjYXNlIGFuZCBuZXZlciBoYWQgYSBidWcgcmVwb3J0IHNvIGxldCdzIGFzc3VtZVxuICAvLyBpdCdzIG5vdCBhbiBpc3N1ZS4gSSBkb24ndCB0aGluayBhbnlvbmUgZXZlciBzcGVjaWZpZXMgd2lkdGggb24gPGh0bWw+XG4gIC8vIGFueXdheS5cbiAgLy8gQnJvd3NlcnMgd2hlcmUgdGhlIGxlZnQgc2Nyb2xsYmFyIGRvZXNuJ3QgY2F1c2UgYW4gaXNzdWUgcmVwb3J0IGAwYCBmb3JcbiAgLy8gdGhpcyAoZS5nLiBFZGdlIDIwMTksIElFMTEsIFNhZmFyaSlcbiAgcmV0dXJuIChcbiAgICBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpKS5sZWZ0ICtcbiAgICBnZXRXaW5kb3dTY3JvbGwoZWxlbWVudCkuc2Nyb2xsTGVmdFxuICApO1xufVxuIiwgIi8vIEBmbG93XG5pbXBvcnQgZ2V0V2luZG93IGZyb20gJy4vZ2V0V2luZG93JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Q29tcHV0ZWRTdHlsZShcbiAgZWxlbWVudDogRWxlbWVudFxuKTogQ1NTU3R5bGVEZWNsYXJhdGlvbiB7XG4gIHJldHVybiBnZXRXaW5kb3coZWxlbWVudCkuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbn1cbiIsICIvLyBAZmxvd1xuaW1wb3J0IGdldENvbXB1dGVkU3R5bGUgZnJvbSAnLi9nZXRDb21wdXRlZFN0eWxlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTY3JvbGxQYXJlbnQoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcbiAgLy8gRmlyZWZveCB3YW50cyB1cyB0byBjaGVjayBgLXhgIGFuZCBgLXlgIHZhcmlhdGlvbnMgYXMgd2VsbFxuICBjb25zdCB7IG92ZXJmbG93LCBvdmVyZmxvd1gsIG92ZXJmbG93WSB9ID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbiAgcmV0dXJuIC9hdXRvfHNjcm9sbHxvdmVybGF5fGhpZGRlbi8udGVzdChvdmVyZmxvdyArIG92ZXJmbG93WSArIG92ZXJmbG93WCk7XG59XG4iLCAiLy8gQGZsb3dcbmltcG9ydCB0eXBlIHsgUmVjdCwgVmlydHVhbEVsZW1lbnQsIFdpbmRvdyB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCBnZXRCb3VuZGluZ0NsaWVudFJlY3QgZnJvbSAnLi9nZXRCb3VuZGluZ0NsaWVudFJlY3QnO1xuaW1wb3J0IGdldE5vZGVTY3JvbGwgZnJvbSAnLi9nZXROb2RlU2Nyb2xsJztcbmltcG9ydCBnZXROb2RlTmFtZSBmcm9tICcuL2dldE5vZGVOYW1lJztcbmltcG9ydCB7IGlzSFRNTEVsZW1lbnQgfSBmcm9tICcuL2luc3RhbmNlT2YnO1xuaW1wb3J0IGdldFdpbmRvd1Njcm9sbEJhclggZnJvbSAnLi9nZXRXaW5kb3dTY3JvbGxCYXJYJztcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSAnLi9nZXREb2N1bWVudEVsZW1lbnQnO1xuaW1wb3J0IGlzU2Nyb2xsUGFyZW50IGZyb20gJy4vaXNTY3JvbGxQYXJlbnQnO1xuaW1wb3J0IHsgcm91bmQgfSBmcm9tICcuLi91dGlscy9tYXRoJztcblxuZnVuY3Rpb24gaXNFbGVtZW50U2NhbGVkKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gIGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICBjb25zdCBzY2FsZVggPSByb3VuZChyZWN0LndpZHRoKSAvIGVsZW1lbnQub2Zmc2V0V2lkdGggfHwgMTtcbiAgY29uc3Qgc2NhbGVZID0gcm91bmQocmVjdC5oZWlnaHQpIC8gZWxlbWVudC5vZmZzZXRIZWlnaHQgfHwgMTtcblxuICByZXR1cm4gc2NhbGVYICE9PSAxIHx8IHNjYWxlWSAhPT0gMTtcbn1cblxuLy8gUmV0dXJucyB0aGUgY29tcG9zaXRlIHJlY3Qgb2YgYW4gZWxlbWVudCByZWxhdGl2ZSB0byBpdHMgb2Zmc2V0UGFyZW50LlxuLy8gQ29tcG9zaXRlIG1lYW5zIGl0IHRha2VzIGludG8gYWNjb3VudCB0cmFuc2Zvcm1zIGFzIHdlbGwgYXMgbGF5b3V0LlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Q29tcG9zaXRlUmVjdChcbiAgZWxlbWVudE9yVmlydHVhbEVsZW1lbnQ6IEVsZW1lbnQgfCBWaXJ0dWFsRWxlbWVudCxcbiAgb2Zmc2V0UGFyZW50OiBFbGVtZW50IHwgV2luZG93LFxuICBpc0ZpeGVkOiBib29sZWFuID0gZmFsc2Vcbik6IFJlY3Qge1xuICBjb25zdCBpc09mZnNldFBhcmVudEFuRWxlbWVudCA9IGlzSFRNTEVsZW1lbnQob2Zmc2V0UGFyZW50KTtcbiAgY29uc3Qgb2Zmc2V0UGFyZW50SXNTY2FsZWQgPVxuICAgIGlzSFRNTEVsZW1lbnQob2Zmc2V0UGFyZW50KSAmJiBpc0VsZW1lbnRTY2FsZWQob2Zmc2V0UGFyZW50KTtcbiAgY29uc3QgZG9jdW1lbnRFbGVtZW50ID0gZ2V0RG9jdW1lbnRFbGVtZW50KG9mZnNldFBhcmVudCk7XG4gIGNvbnN0IHJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoXG4gICAgZWxlbWVudE9yVmlydHVhbEVsZW1lbnQsXG4gICAgb2Zmc2V0UGFyZW50SXNTY2FsZWQsXG4gICAgaXNGaXhlZFxuICApO1xuXG4gIGxldCBzY3JvbGwgPSB7IHNjcm9sbExlZnQ6IDAsIHNjcm9sbFRvcDogMCB9O1xuICBsZXQgb2Zmc2V0cyA9IHsgeDogMCwgeTogMCB9O1xuXG4gIGlmIChpc09mZnNldFBhcmVudEFuRWxlbWVudCB8fCAoIWlzT2Zmc2V0UGFyZW50QW5FbGVtZW50ICYmICFpc0ZpeGVkKSkge1xuICAgIGlmIChcbiAgICAgIGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgIT09ICdib2R5JyB8fFxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3BvcHBlcmpzL3BvcHBlci1jb3JlL2lzc3Vlcy8xMDc4XG4gICAgICBpc1Njcm9sbFBhcmVudChkb2N1bWVudEVsZW1lbnQpXG4gICAgKSB7XG4gICAgICBzY3JvbGwgPSBnZXROb2RlU2Nyb2xsKG9mZnNldFBhcmVudCk7XG4gICAgfVxuXG4gICAgaWYgKGlzSFRNTEVsZW1lbnQob2Zmc2V0UGFyZW50KSkge1xuICAgICAgb2Zmc2V0cyA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChvZmZzZXRQYXJlbnQsIHRydWUpO1xuICAgICAgb2Zmc2V0cy54ICs9IG9mZnNldFBhcmVudC5jbGllbnRMZWZ0O1xuICAgICAgb2Zmc2V0cy55ICs9IG9mZnNldFBhcmVudC5jbGllbnRUb3A7XG4gICAgfSBlbHNlIGlmIChkb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIG9mZnNldHMueCA9IGdldFdpbmRvd1Njcm9sbEJhclgoZG9jdW1lbnRFbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHg6IHJlY3QubGVmdCArIHNjcm9sbC5zY3JvbGxMZWZ0IC0gb2Zmc2V0cy54LFxuICAgIHk6IHJlY3QudG9wICsgc2Nyb2xsLnNjcm9sbFRvcCAtIG9mZnNldHMueSxcbiAgICB3aWR0aDogcmVjdC53aWR0aCxcbiAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0LFxuICB9O1xufVxuIiwgIi8vIEBmbG93XG5pbXBvcnQgdHlwZSB7IFJlY3QgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGZyb20gJy4vZ2V0Qm91bmRpbmdDbGllbnRSZWN0JztcblxuLy8gUmV0dXJucyB0aGUgbGF5b3V0IHJlY3Qgb2YgYW4gZWxlbWVudCByZWxhdGl2ZSB0byBpdHMgb2Zmc2V0UGFyZW50LiBMYXlvdXRcbi8vIG1lYW5zIGl0IGRvZXNuJ3QgdGFrZSBpbnRvIGFjY291bnQgdHJhbnNmb3Jtcy5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldExheW91dFJlY3QoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBSZWN0IHtcbiAgY29uc3QgY2xpZW50UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50KTtcblxuICAvLyBVc2UgdGhlIGNsaWVudFJlY3Qgc2l6ZXMgaWYgaXQncyBub3QgYmVlbiB0cmFuc2Zvcm1lZC5cbiAgLy8gRml4ZXMgaHR0cHM6Ly9naXRodWIuY29tL3BvcHBlcmpzL3BvcHBlci1jb3JlL2lzc3Vlcy8xMjIzXG4gIGxldCB3aWR0aCA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gIGxldCBoZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcblxuICBpZiAoTWF0aC5hYnMoY2xpZW50UmVjdC53aWR0aCAtIHdpZHRoKSA8PSAxKSB7XG4gICAgd2lkdGggPSBjbGllbnRSZWN0LndpZHRoO1xuICB9XG5cbiAgaWYgKE1hdGguYWJzKGNsaWVudFJlY3QuaGVpZ2h0IC0gaGVpZ2h0KSA8PSAxKSB7XG4gICAgaGVpZ2h0ID0gY2xpZW50UmVjdC5oZWlnaHQ7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHg6IGVsZW1lbnQub2Zmc2V0TGVmdCxcbiAgICB5OiBlbGVtZW50Lm9mZnNldFRvcCxcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gIH07XG59XG4iLCAiLy8gQGZsb3dcbmltcG9ydCBnZXROb2RlTmFtZSBmcm9tICcuL2dldE5vZGVOYW1lJztcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSAnLi9nZXREb2N1bWVudEVsZW1lbnQnO1xuaW1wb3J0IHsgaXNTaGFkb3dSb290IH0gZnJvbSAnLi9pbnN0YW5jZU9mJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0UGFyZW50Tm9kZShlbGVtZW50OiBOb2RlIHwgU2hhZG93Um9vdCk6IE5vZGUge1xuICBpZiAoZ2V0Tm9kZU5hbWUoZWxlbWVudCkgPT09ICdodG1sJykge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICAvLyB0aGlzIGlzIGEgcXVpY2tlciAoYnV0IGxlc3MgdHlwZSBzYWZlKSB3YXkgdG8gc2F2ZSBxdWl0ZSBzb21lIGJ5dGVzIGZyb20gdGhlIGJ1bmRsZVxuICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl1cbiAgICAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cbiAgICBlbGVtZW50LmFzc2lnbmVkU2xvdCB8fCAvLyBzdGVwIGludG8gdGhlIHNoYWRvdyBET00gb2YgdGhlIHBhcmVudCBvZiBhIHNsb3R0ZWQgbm9kZVxuICAgIGVsZW1lbnQucGFyZW50Tm9kZSB8fCAvLyBET00gRWxlbWVudCBkZXRlY3RlZFxuICAgIChpc1NoYWRvd1Jvb3QoZWxlbWVudCkgPyBlbGVtZW50Lmhvc3QgOiBudWxsKSB8fCAvLyBTaGFkb3dSb290IGRldGVjdGVkXG4gICAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtY2FsbF06IEhUTUxFbGVtZW50IGlzIGEgTm9kZVxuICAgIGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSAvLyBmYWxsYmFja1xuICApO1xufVxuIiwgIi8vIEBmbG93XG5pbXBvcnQgZ2V0UGFyZW50Tm9kZSBmcm9tICcuL2dldFBhcmVudE5vZGUnO1xuaW1wb3J0IGlzU2Nyb2xsUGFyZW50IGZyb20gJy4vaXNTY3JvbGxQYXJlbnQnO1xuaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gJy4vZ2V0Tm9kZU5hbWUnO1xuaW1wb3J0IHsgaXNIVE1MRWxlbWVudCB9IGZyb20gJy4vaW5zdGFuY2VPZic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFNjcm9sbFBhcmVudChub2RlOiBOb2RlKTogSFRNTEVsZW1lbnQge1xuICBpZiAoWydodG1sJywgJ2JvZHknLCAnI2RvY3VtZW50J10uaW5kZXhPZihnZXROb2RlTmFtZShub2RlKSkgPj0gMCkge1xuICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl06IGFzc3VtZSBib2R5IGlzIGFsd2F5cyBhdmFpbGFibGVcbiAgICByZXR1cm4gbm9kZS5vd25lckRvY3VtZW50LmJvZHk7XG4gIH1cblxuICBpZiAoaXNIVE1MRWxlbWVudChub2RlKSAmJiBpc1Njcm9sbFBhcmVudChub2RlKSkge1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgcmV0dXJuIGdldFNjcm9sbFBhcmVudChnZXRQYXJlbnROb2RlKG5vZGUpKTtcbn1cbiIsICIvLyBAZmxvd1xuaW1wb3J0IGdldFNjcm9sbFBhcmVudCBmcm9tICcuL2dldFNjcm9sbFBhcmVudCc7XG5pbXBvcnQgZ2V0UGFyZW50Tm9kZSBmcm9tICcuL2dldFBhcmVudE5vZGUnO1xuaW1wb3J0IGdldFdpbmRvdyBmcm9tICcuL2dldFdpbmRvdyc7XG5pbXBvcnQgdHlwZSB7IFdpbmRvdywgVmlzdWFsVmlld3BvcnQgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgaXNTY3JvbGxQYXJlbnQgZnJvbSAnLi9pc1Njcm9sbFBhcmVudCc7XG5cbi8qXG5naXZlbiBhIERPTSBlbGVtZW50LCByZXR1cm4gdGhlIGxpc3Qgb2YgYWxsIHNjcm9sbCBwYXJlbnRzLCB1cCB0aGUgbGlzdCBvZiBhbmNlc29yc1xudW50aWwgd2UgZ2V0IHRvIHRoZSB0b3Agd2luZG93IG9iamVjdC4gVGhpcyBsaXN0IGlzIHdoYXQgd2UgYXR0YWNoIHNjcm9sbCBsaXN0ZW5lcnNcbnRvLCBiZWNhdXNlIGlmIGFueSBvZiB0aGVzZSBwYXJlbnQgZWxlbWVudHMgc2Nyb2xsLCB3ZSdsbCBuZWVkIHRvIHJlLWNhbGN1bGF0ZSB0aGVcbnJlZmVyZW5jZSBlbGVtZW50J3MgcG9zaXRpb24uXG4qL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGlzdFNjcm9sbFBhcmVudHMoXG4gIGVsZW1lbnQ6IE5vZGUsXG4gIGxpc3Q6IEFycmF5PEVsZW1lbnQgfCBXaW5kb3c+ID0gW11cbik6IEFycmF5PEVsZW1lbnQgfCBXaW5kb3cgfCBWaXN1YWxWaWV3cG9ydD4ge1xuICBjb25zdCBzY3JvbGxQYXJlbnQgPSBnZXRTY3JvbGxQYXJlbnQoZWxlbWVudCk7XG4gIGNvbnN0IGlzQm9keSA9IHNjcm9sbFBhcmVudCA9PT0gZWxlbWVudC5vd25lckRvY3VtZW50Py5ib2R5O1xuICBjb25zdCB3aW4gPSBnZXRXaW5kb3coc2Nyb2xsUGFyZW50KTtcbiAgY29uc3QgdGFyZ2V0ID0gaXNCb2R5XG4gICAgPyBbd2luXS5jb25jYXQoXG4gICAgICAgIHdpbi52aXN1YWxWaWV3cG9ydCB8fCBbXSxcbiAgICAgICAgaXNTY3JvbGxQYXJlbnQoc2Nyb2xsUGFyZW50KSA/IHNjcm9sbFBhcmVudCA6IFtdXG4gICAgICApXG4gICAgOiBzY3JvbGxQYXJlbnQ7XG4gIGNvbnN0IHVwZGF0ZWRMaXN0ID0gbGlzdC5jb25jYXQodGFyZ2V0KTtcblxuICByZXR1cm4gaXNCb2R5XG4gICAgPyB1cGRhdGVkTGlzdFxuICAgIDogLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtY2FsbF06IGlzQm9keSB0ZWxscyB1cyB0YXJnZXQgd2lsbCBiZSBhbiBIVE1MRWxlbWVudCBoZXJlXG4gICAgICB1cGRhdGVkTGlzdC5jb25jYXQobGlzdFNjcm9sbFBhcmVudHMoZ2V0UGFyZW50Tm9kZSh0YXJnZXQpKSk7XG59XG4iLCAiLy8gQGZsb3dcbmltcG9ydCBnZXROb2RlTmFtZSBmcm9tICcuL2dldE5vZGVOYW1lJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUYWJsZUVsZW1lbnQoZWxlbWVudDogRWxlbWVudCk6IGJvb2xlYW4ge1xuICByZXR1cm4gWyd0YWJsZScsICd0ZCcsICd0aCddLmluZGV4T2YoZ2V0Tm9kZU5hbWUoZWxlbWVudCkpID49IDA7XG59XG4iLCAiLy8gQGZsb3dcbmltcG9ydCBnZXRXaW5kb3cgZnJvbSAnLi9nZXRXaW5kb3cnO1xuaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gJy4vZ2V0Tm9kZU5hbWUnO1xuaW1wb3J0IGdldENvbXB1dGVkU3R5bGUgZnJvbSAnLi9nZXRDb21wdXRlZFN0eWxlJztcbmltcG9ydCB7IGlzSFRNTEVsZW1lbnQsIGlzU2hhZG93Um9vdCB9IGZyb20gJy4vaW5zdGFuY2VPZic7XG5pbXBvcnQgaXNUYWJsZUVsZW1lbnQgZnJvbSAnLi9pc1RhYmxlRWxlbWVudCc7XG5pbXBvcnQgZ2V0UGFyZW50Tm9kZSBmcm9tICcuL2dldFBhcmVudE5vZGUnO1xuaW1wb3J0IGdldFVBU3RyaW5nIGZyb20gJy4uL3V0aWxzL3VzZXJBZ2VudCc7XG5cbmZ1bmN0aW9uIGdldFRydWVPZmZzZXRQYXJlbnQoZWxlbWVudDogRWxlbWVudCk6ID9FbGVtZW50IHtcbiAgaWYgKFxuICAgICFpc0hUTUxFbGVtZW50KGVsZW1lbnQpIHx8XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3BvcHBlcmpzL3BvcHBlci1jb3JlL2lzc3Vlcy84MzdcbiAgICBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLnBvc2l0aW9uID09PSAnZml4ZWQnXG4gICkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0UGFyZW50O1xufVxuXG4vLyBgLm9mZnNldFBhcmVudGAgcmVwb3J0cyBgbnVsbGAgZm9yIGZpeGVkIGVsZW1lbnRzLCB3aGlsZSBhYnNvbHV0ZSBlbGVtZW50c1xuLy8gcmV0dXJuIHRoZSBjb250YWluaW5nIGJsb2NrXG5mdW5jdGlvbiBnZXRDb250YWluaW5nQmxvY2soZWxlbWVudDogRWxlbWVudCkge1xuICBjb25zdCBpc0ZpcmVmb3ggPSAvZmlyZWZveC9pLnRlc3QoZ2V0VUFTdHJpbmcoKSk7XG4gIGNvbnN0IGlzSUUgPSAvVHJpZGVudC9pLnRlc3QoZ2V0VUFTdHJpbmcoKSk7XG5cbiAgaWYgKGlzSUUgJiYgaXNIVE1MRWxlbWVudChlbGVtZW50KSkge1xuICAgIC8vIEluIElFIDksIDEwIGFuZCAxMSBmaXhlZCBlbGVtZW50cyBjb250YWluaW5nIGJsb2NrIGlzIGFsd2F5cyBlc3RhYmxpc2hlZCBieSB0aGUgdmlld3BvcnRcbiAgICBjb25zdCBlbGVtZW50Q3NzID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbiAgICBpZiAoZWxlbWVudENzcy5wb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgbGV0IGN1cnJlbnROb2RlID0gZ2V0UGFyZW50Tm9kZShlbGVtZW50KTtcblxuICBpZiAoaXNTaGFkb3dSb290KGN1cnJlbnROb2RlKSkge1xuICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUuaG9zdDtcbiAgfVxuXG4gIHdoaWxlIChcbiAgICBpc0hUTUxFbGVtZW50KGN1cnJlbnROb2RlKSAmJlxuICAgIFsnaHRtbCcsICdib2R5J10uaW5kZXhPZihnZXROb2RlTmFtZShjdXJyZW50Tm9kZSkpIDwgMFxuICApIHtcbiAgICBjb25zdCBjc3MgPSBnZXRDb21wdXRlZFN0eWxlKGN1cnJlbnROb2RlKTtcblxuICAgIC8vIFRoaXMgaXMgbm9uLWV4aGF1c3RpdmUgYnV0IGNvdmVycyB0aGUgbW9zdCBjb21tb24gQ1NTIHByb3BlcnRpZXMgdGhhdFxuICAgIC8vIGNyZWF0ZSBhIGNvbnRhaW5pbmcgYmxvY2suXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL0NvbnRhaW5pbmdfYmxvY2sjaWRlbnRpZnlpbmdfdGhlX2NvbnRhaW5pbmdfYmxvY2tcbiAgICBpZiAoXG4gICAgICBjc3MudHJhbnNmb3JtICE9PSAnbm9uZScgfHxcbiAgICAgIGNzcy5wZXJzcGVjdGl2ZSAhPT0gJ25vbmUnIHx8XG4gICAgICBjc3MuY29udGFpbiA9PT0gJ3BhaW50JyB8fFxuICAgICAgWyd0cmFuc2Zvcm0nLCAncGVyc3BlY3RpdmUnXS5pbmRleE9mKGNzcy53aWxsQ2hhbmdlKSAhPT0gLTEgfHxcbiAgICAgIChpc0ZpcmVmb3ggJiYgY3NzLndpbGxDaGFuZ2UgPT09ICdmaWx0ZXInKSB8fFxuICAgICAgKGlzRmlyZWZveCAmJiBjc3MuZmlsdGVyICYmIGNzcy5maWx0ZXIgIT09ICdub25lJylcbiAgICApIHtcbiAgICAgIHJldHVybiBjdXJyZW50Tm9kZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG4vLyBHZXRzIHRoZSBjbG9zZXN0IGFuY2VzdG9yIHBvc2l0aW9uZWQgZWxlbWVudC4gSGFuZGxlcyBzb21lIGVkZ2UgY2FzZXMsXG4vLyBzdWNoIGFzIHRhYmxlIGFuY2VzdG9ycyBhbmQgY3Jvc3MgYnJvd3NlciBidWdzLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgY29uc3Qgd2luZG93ID0gZ2V0V2luZG93KGVsZW1lbnQpO1xuXG4gIGxldCBvZmZzZXRQYXJlbnQgPSBnZXRUcnVlT2Zmc2V0UGFyZW50KGVsZW1lbnQpO1xuXG4gIHdoaWxlIChcbiAgICBvZmZzZXRQYXJlbnQgJiZcbiAgICBpc1RhYmxlRWxlbWVudChvZmZzZXRQYXJlbnQpICYmXG4gICAgZ2V0Q29tcHV0ZWRTdHlsZShvZmZzZXRQYXJlbnQpLnBvc2l0aW9uID09PSAnc3RhdGljJ1xuICApIHtcbiAgICBvZmZzZXRQYXJlbnQgPSBnZXRUcnVlT2Zmc2V0UGFyZW50KG9mZnNldFBhcmVudCk7XG4gIH1cblxuICBpZiAoXG4gICAgb2Zmc2V0UGFyZW50ICYmXG4gICAgKGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgPT09ICdodG1sJyB8fFxuICAgICAgKGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgPT09ICdib2R5JyAmJlxuICAgICAgICBnZXRDb21wdXRlZFN0eWxlKG9mZnNldFBhcmVudCkucG9zaXRpb24gPT09ICdzdGF0aWMnKSlcbiAgKSB7XG4gICAgcmV0dXJuIHdpbmRvdztcbiAgfVxuXG4gIHJldHVybiBvZmZzZXRQYXJlbnQgfHwgZ2V0Q29udGFpbmluZ0Jsb2NrKGVsZW1lbnQpIHx8IHdpbmRvdztcbn1cbiIsICIvLyBAZmxvd1xuZXhwb3J0IGNvbnN0IHRvcDogJ3RvcCcgPSAndG9wJztcbmV4cG9ydCBjb25zdCBib3R0b206ICdib3R0b20nID0gJ2JvdHRvbSc7XG5leHBvcnQgY29uc3QgcmlnaHQ6ICdyaWdodCcgPSAncmlnaHQnO1xuZXhwb3J0IGNvbnN0IGxlZnQ6ICdsZWZ0JyA9ICdsZWZ0JztcbmV4cG9ydCBjb25zdCBhdXRvOiAnYXV0bycgPSAnYXV0byc7XG5leHBvcnQgdHlwZSBCYXNlUGxhY2VtZW50ID1cbiAgfCB0eXBlb2YgdG9wXG4gIHwgdHlwZW9mIGJvdHRvbVxuICB8IHR5cGVvZiByaWdodFxuICB8IHR5cGVvZiBsZWZ0O1xuZXhwb3J0IGNvbnN0IGJhc2VQbGFjZW1lbnRzOiBBcnJheTxCYXNlUGxhY2VtZW50PiA9IFt0b3AsIGJvdHRvbSwgcmlnaHQsIGxlZnRdO1xuXG5leHBvcnQgY29uc3Qgc3RhcnQ6ICdzdGFydCcgPSAnc3RhcnQnO1xuZXhwb3J0IGNvbnN0IGVuZDogJ2VuZCcgPSAnZW5kJztcbmV4cG9ydCB0eXBlIFZhcmlhdGlvbiA9IHR5cGVvZiBzdGFydCB8IHR5cGVvZiBlbmQ7XG5cbmV4cG9ydCBjb25zdCBjbGlwcGluZ1BhcmVudHM6ICdjbGlwcGluZ1BhcmVudHMnID0gJ2NsaXBwaW5nUGFyZW50cyc7XG5leHBvcnQgY29uc3Qgdmlld3BvcnQ6ICd2aWV3cG9ydCcgPSAndmlld3BvcnQnO1xuZXhwb3J0IHR5cGUgQm91bmRhcnkgPSBFbGVtZW50IHwgQXJyYXk8RWxlbWVudD4gfCB0eXBlb2YgY2xpcHBpbmdQYXJlbnRzO1xuZXhwb3J0IHR5cGUgUm9vdEJvdW5kYXJ5ID0gdHlwZW9mIHZpZXdwb3J0IHwgJ2RvY3VtZW50JztcblxuZXhwb3J0IGNvbnN0IHBvcHBlcjogJ3BvcHBlcicgPSAncG9wcGVyJztcbmV4cG9ydCBjb25zdCByZWZlcmVuY2U6ICdyZWZlcmVuY2UnID0gJ3JlZmVyZW5jZSc7XG5leHBvcnQgdHlwZSBDb250ZXh0ID0gdHlwZW9mIHBvcHBlciB8IHR5cGVvZiByZWZlcmVuY2U7XG5cbmV4cG9ydCB0eXBlIFZhcmlhdGlvblBsYWNlbWVudCA9XG4gIHwgJ3RvcC1zdGFydCdcbiAgfCAndG9wLWVuZCdcbiAgfCAnYm90dG9tLXN0YXJ0J1xuICB8ICdib3R0b20tZW5kJ1xuICB8ICdyaWdodC1zdGFydCdcbiAgfCAncmlnaHQtZW5kJ1xuICB8ICdsZWZ0LXN0YXJ0J1xuICB8ICdsZWZ0LWVuZCc7XG5leHBvcnQgdHlwZSBBdXRvUGxhY2VtZW50ID0gJ2F1dG8nIHwgJ2F1dG8tc3RhcnQnIHwgJ2F1dG8tZW5kJztcbmV4cG9ydCB0eXBlIENvbXB1dGVkUGxhY2VtZW50ID0gVmFyaWF0aW9uUGxhY2VtZW50IHwgQmFzZVBsYWNlbWVudDtcbmV4cG9ydCB0eXBlIFBsYWNlbWVudCA9IEF1dG9QbGFjZW1lbnQgfCBCYXNlUGxhY2VtZW50IHwgVmFyaWF0aW9uUGxhY2VtZW50O1xuXG5leHBvcnQgY29uc3QgdmFyaWF0aW9uUGxhY2VtZW50czogQXJyYXk8VmFyaWF0aW9uUGxhY2VtZW50PiA9IGJhc2VQbGFjZW1lbnRzLnJlZHVjZShcbiAgKGFjYzogQXJyYXk8VmFyaWF0aW9uUGxhY2VtZW50PiwgcGxhY2VtZW50OiBCYXNlUGxhY2VtZW50KSA9PlxuICAgIGFjYy5jb25jYXQoWyhgJHtwbGFjZW1lbnR9LSR7c3RhcnR9YDogYW55KSwgKGAke3BsYWNlbWVudH0tJHtlbmR9YDogYW55KV0pLFxuICBbXVxuKTtcbmV4cG9ydCBjb25zdCBwbGFjZW1lbnRzOiBBcnJheTxQbGFjZW1lbnQ+ID0gWy4uLmJhc2VQbGFjZW1lbnRzLCBhdXRvXS5yZWR1Y2UoXG4gIChcbiAgICBhY2M6IEFycmF5PFBsYWNlbWVudD4sXG4gICAgcGxhY2VtZW50OiBCYXNlUGxhY2VtZW50IHwgdHlwZW9mIGF1dG9cbiAgKTogQXJyYXk8UGxhY2VtZW50PiA9PlxuICAgIGFjYy5jb25jYXQoW1xuICAgICAgcGxhY2VtZW50LFxuICAgICAgKGAke3BsYWNlbWVudH0tJHtzdGFydH1gOiBhbnkpLFxuICAgICAgKGAke3BsYWNlbWVudH0tJHtlbmR9YDogYW55KSxcbiAgICBdKSxcbiAgW11cbik7XG5cbi8vIG1vZGlmaWVycyB0aGF0IG5lZWQgdG8gcmVhZCB0aGUgRE9NXG5leHBvcnQgY29uc3QgYmVmb3JlUmVhZDogJ2JlZm9yZVJlYWQnID0gJ2JlZm9yZVJlYWQnO1xuZXhwb3J0IGNvbnN0IHJlYWQ6ICdyZWFkJyA9ICdyZWFkJztcbmV4cG9ydCBjb25zdCBhZnRlclJlYWQ6ICdhZnRlclJlYWQnID0gJ2FmdGVyUmVhZCc7XG4vLyBwdXJlLWxvZ2ljIG1vZGlmaWVyc1xuZXhwb3J0IGNvbnN0IGJlZm9yZU1haW46ICdiZWZvcmVNYWluJyA9ICdiZWZvcmVNYWluJztcbmV4cG9ydCBjb25zdCBtYWluOiAnbWFpbicgPSAnbWFpbic7XG5leHBvcnQgY29uc3QgYWZ0ZXJNYWluOiAnYWZ0ZXJNYWluJyA9ICdhZnRlck1haW4nO1xuLy8gbW9kaWZpZXIgd2l0aCB0aGUgcHVycG9zZSB0byB3cml0ZSB0byB0aGUgRE9NIChvciB3cml0ZSBpbnRvIGEgZnJhbWV3b3JrIHN0YXRlKVxuZXhwb3J0IGNvbnN0IGJlZm9yZVdyaXRlOiAnYmVmb3JlV3JpdGUnID0gJ2JlZm9yZVdyaXRlJztcbmV4cG9ydCBjb25zdCB3cml0ZTogJ3dyaXRlJyA9ICd3cml0ZSc7XG5leHBvcnQgY29uc3QgYWZ0ZXJXcml0ZTogJ2FmdGVyV3JpdGUnID0gJ2FmdGVyV3JpdGUnO1xuZXhwb3J0IGNvbnN0IG1vZGlmaWVyUGhhc2VzOiBBcnJheTxNb2RpZmllclBoYXNlcz4gPSBbXG4gIGJlZm9yZVJlYWQsXG4gIHJlYWQsXG4gIGFmdGVyUmVhZCxcbiAgYmVmb3JlTWFpbixcbiAgbWFpbixcbiAgYWZ0ZXJNYWluLFxuICBiZWZvcmVXcml0ZSxcbiAgd3JpdGUsXG4gIGFmdGVyV3JpdGUsXG5dO1xuXG5leHBvcnQgdHlwZSBNb2RpZmllclBoYXNlcyA9XG4gIHwgdHlwZW9mIGJlZm9yZVJlYWRcbiAgfCB0eXBlb2YgcmVhZFxuICB8IHR5cGVvZiBhZnRlclJlYWRcbiAgfCB0eXBlb2YgYmVmb3JlTWFpblxuICB8IHR5cGVvZiBtYWluXG4gIHwgdHlwZW9mIGFmdGVyTWFpblxuICB8IHR5cGVvZiBiZWZvcmVXcml0ZVxuICB8IHR5cGVvZiB3cml0ZVxuICB8IHR5cGVvZiBhZnRlcldyaXRlO1xuIiwgIi8vIEBmbG93XG5pbXBvcnQgdHlwZSB7IE1vZGlmaWVyIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgbW9kaWZpZXJQaGFzZXMgfSBmcm9tICcuLi9lbnVtcyc7XG5cbi8vIHNvdXJjZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDk4NzUyNTVcbmZ1bmN0aW9uIG9yZGVyKG1vZGlmaWVycykge1xuICBjb25zdCBtYXAgPSBuZXcgTWFwKCk7XG4gIGNvbnN0IHZpc2l0ZWQgPSBuZXcgU2V0KCk7XG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xuXG4gIG1vZGlmaWVycy5mb3JFYWNoKG1vZGlmaWVyID0+IHtcbiAgICBtYXAuc2V0KG1vZGlmaWVyLm5hbWUsIG1vZGlmaWVyKTtcbiAgfSk7XG5cbiAgLy8gT24gdmlzaXRpbmcgb2JqZWN0LCBjaGVjayBmb3IgaXRzIGRlcGVuZGVuY2llcyBhbmQgdmlzaXQgdGhlbSByZWN1cnNpdmVseVxuICBmdW5jdGlvbiBzb3J0KG1vZGlmaWVyOiBNb2RpZmllcjxhbnksIGFueT4pIHtcbiAgICB2aXNpdGVkLmFkZChtb2RpZmllci5uYW1lKTtcblxuICAgIGNvbnN0IHJlcXVpcmVzID0gW1xuICAgICAgLi4uKG1vZGlmaWVyLnJlcXVpcmVzIHx8IFtdKSxcbiAgICAgIC4uLihtb2RpZmllci5yZXF1aXJlc0lmRXhpc3RzIHx8IFtdKSxcbiAgICBdO1xuXG4gICAgcmVxdWlyZXMuZm9yRWFjaChkZXAgPT4ge1xuICAgICAgaWYgKCF2aXNpdGVkLmhhcyhkZXApKSB7XG4gICAgICAgIGNvbnN0IGRlcE1vZGlmaWVyID0gbWFwLmdldChkZXApO1xuXG4gICAgICAgIGlmIChkZXBNb2RpZmllcikge1xuICAgICAgICAgIHNvcnQoZGVwTW9kaWZpZXIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXN1bHQucHVzaChtb2RpZmllcik7XG4gIH1cblxuICBtb2RpZmllcnMuZm9yRWFjaChtb2RpZmllciA9PiB7XG4gICAgaWYgKCF2aXNpdGVkLmhhcyhtb2RpZmllci5uYW1lKSkge1xuICAgICAgLy8gY2hlY2sgZm9yIHZpc2l0ZWQgb2JqZWN0XG4gICAgICBzb3J0KG1vZGlmaWVyKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9yZGVyTW9kaWZpZXJzKFxuICBtb2RpZmllcnM6IEFycmF5PE1vZGlmaWVyPGFueSwgYW55Pj5cbik6IEFycmF5PE1vZGlmaWVyPGFueSwgYW55Pj4ge1xuICAvLyBvcmRlciBiYXNlZCBvbiBkZXBlbmRlbmNpZXNcbiAgY29uc3Qgb3JkZXJlZE1vZGlmaWVycyA9IG9yZGVyKG1vZGlmaWVycyk7XG5cbiAgLy8gb3JkZXIgYmFzZWQgb24gcGhhc2VcbiAgcmV0dXJuIG1vZGlmaWVyUGhhc2VzLnJlZHVjZSgoYWNjLCBwaGFzZSkgPT4ge1xuICAgIHJldHVybiBhY2MuY29uY2F0KFxuICAgICAgb3JkZXJlZE1vZGlmaWVycy5maWx0ZXIobW9kaWZpZXIgPT4gbW9kaWZpZXIucGhhc2UgPT09IHBoYXNlKVxuICAgICk7XG4gIH0sIFtdKTtcbn1cbiIsICIvLyBAZmxvd1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWJvdW5jZTxUPihmbjogRnVuY3Rpb24pOiAoKSA9PiBQcm9taXNlPFQ+IHtcbiAgbGV0IHBlbmRpbmc7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgaWYgKCFwZW5kaW5nKSB7XG4gICAgICBwZW5kaW5nID0gbmV3IFByb21pc2U8VD4ocmVzb2x2ZSA9PiB7XG4gICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHBlbmRpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgcmVzb2x2ZShmbigpKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGVuZGluZztcbiAgfTtcbn1cbiIsICIvLyBAZmxvd1xuaW1wb3J0IHR5cGUgeyBNb2RpZmllciB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVyZ2VCeU5hbWUoXG4gIG1vZGlmaWVyczogQXJyYXk8JFNoYXBlPE1vZGlmaWVyPGFueSwgYW55Pj4+XG4pOiBBcnJheTwkU2hhcGU8TW9kaWZpZXI8YW55LCBhbnk+Pj4ge1xuICBjb25zdCBtZXJnZWQgPSBtb2RpZmllcnMucmVkdWNlKChtZXJnZWQsIGN1cnJlbnQpID0+IHtcbiAgICBjb25zdCBleGlzdGluZyA9IG1lcmdlZFtjdXJyZW50Lm5hbWVdO1xuICAgIG1lcmdlZFtjdXJyZW50Lm5hbWVdID0gZXhpc3RpbmdcbiAgICAgID8ge1xuICAgICAgICAgIC4uLmV4aXN0aW5nLFxuICAgICAgICAgIC4uLmN1cnJlbnQsXG4gICAgICAgICAgb3B0aW9uczogeyAuLi5leGlzdGluZy5vcHRpb25zLCAuLi5jdXJyZW50Lm9wdGlvbnMgfSxcbiAgICAgICAgICBkYXRhOiB7IC4uLmV4aXN0aW5nLmRhdGEsIC4uLmN1cnJlbnQuZGF0YSB9LFxuICAgICAgICB9XG4gICAgICA6IGN1cnJlbnQ7XG4gICAgcmV0dXJuIG1lcmdlZDtcbiAgfSwge30pO1xuXG4gIC8vIElFMTEgZG9lcyBub3Qgc3VwcG9ydCBPYmplY3QudmFsdWVzXG4gIHJldHVybiBPYmplY3Qua2V5cyhtZXJnZWQpLm1hcChrZXkgPT4gbWVyZ2VkW2tleV0pO1xufVxuIiwgIi8vIEBmbG93XG5pbXBvcnQgZ2V0V2luZG93IGZyb20gJy4vZ2V0V2luZG93JztcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSAnLi9nZXREb2N1bWVudEVsZW1lbnQnO1xuaW1wb3J0IGdldFdpbmRvd1Njcm9sbEJhclggZnJvbSAnLi9nZXRXaW5kb3dTY3JvbGxCYXJYJztcbmltcG9ydCBpc0xheW91dFZpZXdwb3J0IGZyb20gJy4vaXNMYXlvdXRWaWV3cG9ydCc7XG5pbXBvcnQgdHlwZSB7IFBvc2l0aW9uaW5nU3RyYXRlZ3kgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFZpZXdwb3J0UmVjdChcbiAgZWxlbWVudDogRWxlbWVudCxcbiAgc3RyYXRlZ3k6IFBvc2l0aW9uaW5nU3RyYXRlZ3lcbikge1xuICBjb25zdCB3aW4gPSBnZXRXaW5kb3coZWxlbWVudCk7XG4gIGNvbnN0IGh0bWwgPSBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCk7XG4gIGNvbnN0IHZpc3VhbFZpZXdwb3J0ID0gd2luLnZpc3VhbFZpZXdwb3J0O1xuXG4gIGxldCB3aWR0aCA9IGh0bWwuY2xpZW50V2lkdGg7XG4gIGxldCBoZWlnaHQgPSBodG1sLmNsaWVudEhlaWdodDtcbiAgbGV0IHggPSAwO1xuICBsZXQgeSA9IDA7XG5cbiAgaWYgKHZpc3VhbFZpZXdwb3J0KSB7XG4gICAgd2lkdGggPSB2aXN1YWxWaWV3cG9ydC53aWR0aDtcbiAgICBoZWlnaHQgPSB2aXN1YWxWaWV3cG9ydC5oZWlnaHQ7XG5cbiAgICBjb25zdCBsYXlvdXRWaWV3cG9ydCA9IGlzTGF5b3V0Vmlld3BvcnQoKTtcblxuICAgIGlmIChsYXlvdXRWaWV3cG9ydCB8fCAoIWxheW91dFZpZXdwb3J0ICYmIHN0cmF0ZWd5ID09PSAnZml4ZWQnKSkge1xuICAgICAgeCA9IHZpc3VhbFZpZXdwb3J0Lm9mZnNldExlZnQ7XG4gICAgICB5ID0gdmlzdWFsVmlld3BvcnQub2Zmc2V0VG9wO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIHg6IHggKyBnZXRXaW5kb3dTY3JvbGxCYXJYKGVsZW1lbnQpLFxuICAgIHksXG4gIH07XG59XG4iLCAiLy8gQGZsb3dcbmltcG9ydCB0eXBlIHsgUmVjdCB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSAnLi9nZXREb2N1bWVudEVsZW1lbnQnO1xuaW1wb3J0IGdldENvbXB1dGVkU3R5bGUgZnJvbSAnLi9nZXRDb21wdXRlZFN0eWxlJztcbmltcG9ydCBnZXRXaW5kb3dTY3JvbGxCYXJYIGZyb20gJy4vZ2V0V2luZG93U2Nyb2xsQmFyWCc7XG5pbXBvcnQgZ2V0V2luZG93U2Nyb2xsIGZyb20gJy4vZ2V0V2luZG93U2Nyb2xsJztcbmltcG9ydCB7IG1heCB9IGZyb20gJy4uL3V0aWxzL21hdGgnO1xuXG4vLyBHZXRzIHRoZSBlbnRpcmUgc2l6ZSBvZiB0aGUgc2Nyb2xsYWJsZSBkb2N1bWVudCBhcmVhLCBldmVuIGV4dGVuZGluZyBvdXRzaWRlXG4vLyBvZiB0aGUgYDxodG1sPmAgYW5kIGA8Ym9keT5gIHJlY3QgYm91bmRzIGlmIGhvcml6b250YWxseSBzY3JvbGxhYmxlXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXREb2N1bWVudFJlY3QoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBSZWN0IHtcbiAgY29uc3QgaHRtbCA9IGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KTtcbiAgY29uc3Qgd2luU2Nyb2xsID0gZ2V0V2luZG93U2Nyb2xsKGVsZW1lbnQpO1xuICBjb25zdCBib2R5ID0gZWxlbWVudC5vd25lckRvY3VtZW50Py5ib2R5O1xuXG4gIGNvbnN0IHdpZHRoID0gbWF4KFxuICAgIGh0bWwuc2Nyb2xsV2lkdGgsXG4gICAgaHRtbC5jbGllbnRXaWR0aCxcbiAgICBib2R5ID8gYm9keS5zY3JvbGxXaWR0aCA6IDAsXG4gICAgYm9keSA/IGJvZHkuY2xpZW50V2lkdGggOiAwXG4gICk7XG4gIGNvbnN0IGhlaWdodCA9IG1heChcbiAgICBodG1sLnNjcm9sbEhlaWdodCxcbiAgICBodG1sLmNsaWVudEhlaWdodCxcbiAgICBib2R5ID8gYm9keS5zY3JvbGxIZWlnaHQgOiAwLFxuICAgIGJvZHkgPyBib2R5LmNsaWVudEhlaWdodCA6IDBcbiAgKTtcblxuICBsZXQgeCA9IC13aW5TY3JvbGwuc2Nyb2xsTGVmdCArIGdldFdpbmRvd1Njcm9sbEJhclgoZWxlbWVudCk7XG4gIGNvbnN0IHkgPSAtd2luU2Nyb2xsLnNjcm9sbFRvcDtcblxuICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShib2R5IHx8IGh0bWwpLmRpcmVjdGlvbiA9PT0gJ3J0bCcpIHtcbiAgICB4ICs9IG1heChodG1sLmNsaWVudFdpZHRoLCBib2R5ID8gYm9keS5jbGllbnRXaWR0aCA6IDApIC0gd2lkdGg7XG4gIH1cblxuICByZXR1cm4geyB3aWR0aCwgaGVpZ2h0LCB4LCB5IH07XG59XG4iLCAiLy8gQGZsb3dcbmltcG9ydCB7IGlzU2hhZG93Um9vdCB9IGZyb20gJy4vaW5zdGFuY2VPZic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhaW5zKHBhcmVudDogRWxlbWVudCwgY2hpbGQ6IEVsZW1lbnQpIHtcbiAgY29uc3Qgcm9vdE5vZGUgPSBjaGlsZC5nZXRSb290Tm9kZSAmJiBjaGlsZC5nZXRSb290Tm9kZSgpO1xuXG4gIC8vIEZpcnN0LCBhdHRlbXB0IHdpdGggZmFzdGVyIG5hdGl2ZSBtZXRob2RcbiAgaWYgKHBhcmVudC5jb250YWlucyhjaGlsZCkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICAvLyB0aGVuIGZhbGxiYWNrIHRvIGN1c3RvbSBpbXBsZW1lbnRhdGlvbiB3aXRoIFNoYWRvdyBET00gc3VwcG9ydFxuICBlbHNlIGlmIChyb290Tm9kZSAmJiBpc1NoYWRvd1Jvb3Qocm9vdE5vZGUpKSB7XG4gICAgbGV0IG5leHQgPSBjaGlsZDtcbiAgICBkbyB7XG4gICAgICBpZiAobmV4dCAmJiBwYXJlbnQuaXNTYW1lTm9kZShuZXh0KSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXTogbmVlZCBhIGJldHRlciB3YXkgdG8gaGFuZGxlIHRoaXMuLi5cbiAgICAgIG5leHQgPSBuZXh0LnBhcmVudE5vZGUgfHwgbmV4dC5ob3N0O1xuICAgIH0gd2hpbGUgKG5leHQpO1xuICB9XG5cbiAgLy8gR2l2ZSB1cCwgdGhlIHJlc3VsdCBpcyBmYWxzZVxuICByZXR1cm4gZmFsc2U7XG59XG4iLCAiLy8gQGZsb3dcbmltcG9ydCB0eXBlIHsgUmVjdCwgQ2xpZW50UmVjdE9iamVjdCB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVjdFRvQ2xpZW50UmVjdChyZWN0OiBSZWN0KTogQ2xpZW50UmVjdE9iamVjdCB7XG4gIHJldHVybiB7XG4gICAgLi4ucmVjdCxcbiAgICBsZWZ0OiByZWN0LngsXG4gICAgdG9wOiByZWN0LnksXG4gICAgcmlnaHQ6IHJlY3QueCArIHJlY3Qud2lkdGgsXG4gICAgYm90dG9tOiByZWN0LnkgKyByZWN0LmhlaWdodCxcbiAgfTtcbn1cbiIsICIvLyBAZmxvd1xuaW1wb3J0IHR5cGUgeyBDbGllbnRSZWN0T2JqZWN0LCBQb3NpdGlvbmluZ1N0cmF0ZWd5IH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHR5cGUgeyBCb3VuZGFyeSwgUm9vdEJvdW5kYXJ5IH0gZnJvbSAnLi4vZW51bXMnO1xuaW1wb3J0IHsgdmlld3BvcnQgfSBmcm9tICcuLi9lbnVtcyc7XG5pbXBvcnQgZ2V0Vmlld3BvcnRSZWN0IGZyb20gJy4vZ2V0Vmlld3BvcnRSZWN0JztcbmltcG9ydCBnZXREb2N1bWVudFJlY3QgZnJvbSAnLi9nZXREb2N1bWVudFJlY3QnO1xuaW1wb3J0IGxpc3RTY3JvbGxQYXJlbnRzIGZyb20gJy4vbGlzdFNjcm9sbFBhcmVudHMnO1xuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tICcuL2dldE9mZnNldFBhcmVudCc7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gJy4vZ2V0RG9jdW1lbnRFbGVtZW50JztcbmltcG9ydCBnZXRDb21wdXRlZFN0eWxlIGZyb20gJy4vZ2V0Q29tcHV0ZWRTdHlsZSc7XG5pbXBvcnQgeyBpc0VsZW1lbnQsIGlzSFRNTEVsZW1lbnQgfSBmcm9tICcuL2luc3RhbmNlT2YnO1xuaW1wb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmcm9tICcuL2dldEJvdW5kaW5nQ2xpZW50UmVjdCc7XG5pbXBvcnQgZ2V0UGFyZW50Tm9kZSBmcm9tICcuL2dldFBhcmVudE5vZGUnO1xuaW1wb3J0IGNvbnRhaW5zIGZyb20gJy4vY29udGFpbnMnO1xuaW1wb3J0IGdldE5vZGVOYW1lIGZyb20gJy4vZ2V0Tm9kZU5hbWUnO1xuaW1wb3J0IHJlY3RUb0NsaWVudFJlY3QgZnJvbSAnLi4vdXRpbHMvcmVjdFRvQ2xpZW50UmVjdCc7XG5pbXBvcnQgeyBtYXgsIG1pbiB9IGZyb20gJy4uL3V0aWxzL21hdGgnO1xuXG5mdW5jdGlvbiBnZXRJbm5lckJvdW5kaW5nQ2xpZW50UmVjdChcbiAgZWxlbWVudDogRWxlbWVudCxcbiAgc3RyYXRlZ3k6IFBvc2l0aW9uaW5nU3RyYXRlZ3lcbikge1xuICBjb25zdCByZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQsIGZhbHNlLCBzdHJhdGVneSA9PT0gJ2ZpeGVkJyk7XG5cbiAgcmVjdC50b3AgPSByZWN0LnRvcCArIGVsZW1lbnQuY2xpZW50VG9wO1xuICByZWN0LmxlZnQgPSByZWN0LmxlZnQgKyBlbGVtZW50LmNsaWVudExlZnQ7XG4gIHJlY3QuYm90dG9tID0gcmVjdC50b3AgKyBlbGVtZW50LmNsaWVudEhlaWdodDtcbiAgcmVjdC5yaWdodCA9IHJlY3QubGVmdCArIGVsZW1lbnQuY2xpZW50V2lkdGg7XG4gIHJlY3Qud2lkdGggPSBlbGVtZW50LmNsaWVudFdpZHRoO1xuICByZWN0LmhlaWdodCA9IGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICByZWN0LnggPSByZWN0LmxlZnQ7XG4gIHJlY3QueSA9IHJlY3QudG9wO1xuXG4gIHJldHVybiByZWN0O1xufVxuXG5mdW5jdGlvbiBnZXRDbGllbnRSZWN0RnJvbU1peGVkVHlwZShcbiAgZWxlbWVudDogRWxlbWVudCxcbiAgY2xpcHBpbmdQYXJlbnQ6IEVsZW1lbnQgfCBSb290Qm91bmRhcnksXG4gIHN0cmF0ZWd5OiBQb3NpdGlvbmluZ1N0cmF0ZWd5XG4pOiBDbGllbnRSZWN0T2JqZWN0IHtcbiAgcmV0dXJuIGNsaXBwaW5nUGFyZW50ID09PSB2aWV3cG9ydFxuICAgID8gcmVjdFRvQ2xpZW50UmVjdChnZXRWaWV3cG9ydFJlY3QoZWxlbWVudCwgc3RyYXRlZ3kpKVxuICAgIDogaXNFbGVtZW50KGNsaXBwaW5nUGFyZW50KVxuICAgID8gZ2V0SW5uZXJCb3VuZGluZ0NsaWVudFJlY3QoY2xpcHBpbmdQYXJlbnQsIHN0cmF0ZWd5KVxuICAgIDogcmVjdFRvQ2xpZW50UmVjdChnZXREb2N1bWVudFJlY3QoZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpKSk7XG59XG5cbi8vIEEgXCJjbGlwcGluZyBwYXJlbnRcIiBpcyBhbiBvdmVyZmxvd2FibGUgY29udGFpbmVyIHdpdGggdGhlIGNoYXJhY3RlcmlzdGljIG9mXG4vLyBjbGlwcGluZyAob3IgaGlkaW5nKSBvdmVyZmxvd2luZyBlbGVtZW50cyB3aXRoIGEgcG9zaXRpb24gZGlmZmVyZW50IGZyb21cbi8vIGBpbml0aWFsYFxuZnVuY3Rpb24gZ2V0Q2xpcHBpbmdQYXJlbnRzKGVsZW1lbnQ6IEVsZW1lbnQpOiBBcnJheTxFbGVtZW50PiB7XG4gIGNvbnN0IGNsaXBwaW5nUGFyZW50cyA9IGxpc3RTY3JvbGxQYXJlbnRzKGdldFBhcmVudE5vZGUoZWxlbWVudCkpO1xuICBjb25zdCBjYW5Fc2NhcGVDbGlwcGluZyA9XG4gICAgWydhYnNvbHV0ZScsICdmaXhlZCddLmluZGV4T2YoZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5wb3NpdGlvbikgPj0gMDtcbiAgY29uc3QgY2xpcHBlckVsZW1lbnQgPVxuICAgIGNhbkVzY2FwZUNsaXBwaW5nICYmIGlzSFRNTEVsZW1lbnQoZWxlbWVudClcbiAgICAgID8gZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQpXG4gICAgICA6IGVsZW1lbnQ7XG5cbiAgaWYgKCFpc0VsZW1lbnQoY2xpcHBlckVsZW1lbnQpKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtcmV0dXJuXTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2Zsb3cvaXNzdWVzLzE0MTRcbiAgcmV0dXJuIGNsaXBwaW5nUGFyZW50cy5maWx0ZXIoXG4gICAgKGNsaXBwaW5nUGFyZW50KSA9PlxuICAgICAgaXNFbGVtZW50KGNsaXBwaW5nUGFyZW50KSAmJlxuICAgICAgY29udGFpbnMoY2xpcHBpbmdQYXJlbnQsIGNsaXBwZXJFbGVtZW50KSAmJlxuICAgICAgZ2V0Tm9kZU5hbWUoY2xpcHBpbmdQYXJlbnQpICE9PSAnYm9keSdcbiAgKTtcbn1cblxuLy8gR2V0cyB0aGUgbWF4aW11bSBhcmVhIHRoYXQgdGhlIGVsZW1lbnQgaXMgdmlzaWJsZSBpbiBkdWUgdG8gYW55IG51bWJlciBvZlxuLy8gY2xpcHBpbmcgcGFyZW50c1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Q2xpcHBpbmdSZWN0KFxuICBlbGVtZW50OiBFbGVtZW50LFxuICBib3VuZGFyeTogQm91bmRhcnksXG4gIHJvb3RCb3VuZGFyeTogUm9vdEJvdW5kYXJ5LFxuICBzdHJhdGVneTogUG9zaXRpb25pbmdTdHJhdGVneVxuKTogQ2xpZW50UmVjdE9iamVjdCB7XG4gIGNvbnN0IG1haW5DbGlwcGluZ1BhcmVudHMgPVxuICAgIGJvdW5kYXJ5ID09PSAnY2xpcHBpbmdQYXJlbnRzJ1xuICAgICAgPyBnZXRDbGlwcGluZ1BhcmVudHMoZWxlbWVudClcbiAgICAgIDogW10uY29uY2F0KGJvdW5kYXJ5KTtcbiAgY29uc3QgY2xpcHBpbmdQYXJlbnRzID0gWy4uLm1haW5DbGlwcGluZ1BhcmVudHMsIHJvb3RCb3VuZGFyeV07XG4gIGNvbnN0IGZpcnN0Q2xpcHBpbmdQYXJlbnQgPSBjbGlwcGluZ1BhcmVudHNbMF07XG5cbiAgY29uc3QgY2xpcHBpbmdSZWN0ID0gY2xpcHBpbmdQYXJlbnRzLnJlZHVjZSgoYWNjUmVjdCwgY2xpcHBpbmdQYXJlbnQpID0+IHtcbiAgICBjb25zdCByZWN0ID0gZ2V0Q2xpZW50UmVjdEZyb21NaXhlZFR5cGUoZWxlbWVudCwgY2xpcHBpbmdQYXJlbnQsIHN0cmF0ZWd5KTtcblxuICAgIGFjY1JlY3QudG9wID0gbWF4KHJlY3QudG9wLCBhY2NSZWN0LnRvcCk7XG4gICAgYWNjUmVjdC5yaWdodCA9IG1pbihyZWN0LnJpZ2h0LCBhY2NSZWN0LnJpZ2h0KTtcbiAgICBhY2NSZWN0LmJvdHRvbSA9IG1pbihyZWN0LmJvdHRvbSwgYWNjUmVjdC5ib3R0b20pO1xuICAgIGFjY1JlY3QubGVmdCA9IG1heChyZWN0LmxlZnQsIGFjY1JlY3QubGVmdCk7XG5cbiAgICByZXR1cm4gYWNjUmVjdDtcbiAgfSwgZ2V0Q2xpZW50UmVjdEZyb21NaXhlZFR5cGUoZWxlbWVudCwgZmlyc3RDbGlwcGluZ1BhcmVudCwgc3RyYXRlZ3kpKTtcblxuICBjbGlwcGluZ1JlY3Qud2lkdGggPSBjbGlwcGluZ1JlY3QucmlnaHQgLSBjbGlwcGluZ1JlY3QubGVmdDtcbiAgY2xpcHBpbmdSZWN0LmhlaWdodCA9IGNsaXBwaW5nUmVjdC5ib3R0b20gLSBjbGlwcGluZ1JlY3QudG9wO1xuICBjbGlwcGluZ1JlY3QueCA9IGNsaXBwaW5nUmVjdC5sZWZ0O1xuICBjbGlwcGluZ1JlY3QueSA9IGNsaXBwaW5nUmVjdC50b3A7XG5cbiAgcmV0dXJuIGNsaXBwaW5nUmVjdDtcbn1cbiIsICIvLyBAZmxvd1xuaW1wb3J0IHsgdHlwZSBCYXNlUGxhY2VtZW50LCB0eXBlIFBsYWNlbWVudCwgYXV0byB9IGZyb20gJy4uL2VudW1zJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0QmFzZVBsYWNlbWVudChcbiAgcGxhY2VtZW50OiBQbGFjZW1lbnQgfCB0eXBlb2YgYXV0b1xuKTogQmFzZVBsYWNlbWVudCB7XG4gIHJldHVybiAocGxhY2VtZW50LnNwbGl0KCctJylbMF06IGFueSk7XG59XG4iLCAiLy8gQGZsb3dcbmltcG9ydCB7IHR5cGUgVmFyaWF0aW9uLCB0eXBlIFBsYWNlbWVudCB9IGZyb20gJy4uL2VudW1zJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudDogUGxhY2VtZW50KTogP1ZhcmlhdGlvbiB7XG4gIHJldHVybiAocGxhY2VtZW50LnNwbGl0KCctJylbMV06IGFueSk7XG59XG4iLCAiLy8gQGZsb3dcbmltcG9ydCB0eXBlIHsgUGxhY2VtZW50IH0gZnJvbSAnLi4vZW51bXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQoXG4gIHBsYWNlbWVudDogUGxhY2VtZW50XG4pOiAneCcgfCAneScge1xuICByZXR1cm4gWyd0b3AnLCAnYm90dG9tJ10uaW5kZXhPZihwbGFjZW1lbnQpID49IDAgPyAneCcgOiAneSc7XG59XG4iLCAiLy8gQGZsb3dcbmltcG9ydCBnZXRCYXNlUGxhY2VtZW50IGZyb20gJy4vZ2V0QmFzZVBsYWNlbWVudCc7XG5pbXBvcnQgZ2V0VmFyaWF0aW9uIGZyb20gJy4vZ2V0VmFyaWF0aW9uJztcbmltcG9ydCBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQgZnJvbSAnLi9nZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQnO1xuaW1wb3J0IHR5cGUge1xuICBSZWN0LFxuICBQb3NpdGlvbmluZ1N0cmF0ZWd5LFxuICBPZmZzZXRzLFxuICBDbGllbnRSZWN0T2JqZWN0LFxufSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyB0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnQsIHN0YXJ0LCBlbmQsIHR5cGUgUGxhY2VtZW50IH0gZnJvbSAnLi4vZW51bXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wdXRlT2Zmc2V0cyh7XG4gIHJlZmVyZW5jZSxcbiAgZWxlbWVudCxcbiAgcGxhY2VtZW50LFxufToge1xuICByZWZlcmVuY2U6IFJlY3QgfCBDbGllbnRSZWN0T2JqZWN0LFxuICBlbGVtZW50OiBSZWN0IHwgQ2xpZW50UmVjdE9iamVjdCxcbiAgc3RyYXRlZ3k6IFBvc2l0aW9uaW5nU3RyYXRlZ3ksXG4gIHBsYWNlbWVudD86IFBsYWNlbWVudCxcbn0pOiBPZmZzZXRzIHtcbiAgY29uc3QgYmFzZVBsYWNlbWVudCA9IHBsYWNlbWVudCA/IGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KSA6IG51bGw7XG4gIGNvbnN0IHZhcmlhdGlvbiA9IHBsYWNlbWVudCA/IGdldFZhcmlhdGlvbihwbGFjZW1lbnQpIDogbnVsbDtcbiAgY29uc3QgY29tbW9uWCA9IHJlZmVyZW5jZS54ICsgcmVmZXJlbmNlLndpZHRoIC8gMiAtIGVsZW1lbnQud2lkdGggLyAyO1xuICBjb25zdCBjb21tb25ZID0gcmVmZXJlbmNlLnkgKyByZWZlcmVuY2UuaGVpZ2h0IC8gMiAtIGVsZW1lbnQuaGVpZ2h0IC8gMjtcblxuICBsZXQgb2Zmc2V0cztcbiAgc3dpdGNoIChiYXNlUGxhY2VtZW50KSB7XG4gICAgY2FzZSB0b3A6XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiBjb21tb25YLFxuICAgICAgICB5OiByZWZlcmVuY2UueSAtIGVsZW1lbnQuaGVpZ2h0LFxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgYm90dG9tOlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogY29tbW9uWCxcbiAgICAgICAgeTogcmVmZXJlbmNlLnkgKyByZWZlcmVuY2UuaGVpZ2h0LFxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgcmlnaHQ6XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiByZWZlcmVuY2UueCArIHJlZmVyZW5jZS53aWR0aCxcbiAgICAgICAgeTogY29tbW9uWSxcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICBjYXNlIGxlZnQ6XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiByZWZlcmVuY2UueCAtIGVsZW1lbnQud2lkdGgsXG4gICAgICAgIHk6IGNvbW1vblksXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgIHg6IHJlZmVyZW5jZS54LFxuICAgICAgICB5OiByZWZlcmVuY2UueSxcbiAgICAgIH07XG4gIH1cblxuICBjb25zdCBtYWluQXhpcyA9IGJhc2VQbGFjZW1lbnRcbiAgICA/IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChiYXNlUGxhY2VtZW50KVxuICAgIDogbnVsbDtcblxuICBpZiAobWFpbkF4aXMgIT0gbnVsbCkge1xuICAgIGNvbnN0IGxlbiA9IG1haW5BeGlzID09PSAneScgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG5cbiAgICBzd2l0Y2ggKHZhcmlhdGlvbikge1xuICAgICAgY2FzZSBzdGFydDpcbiAgICAgICAgb2Zmc2V0c1ttYWluQXhpc10gPVxuICAgICAgICAgIG9mZnNldHNbbWFpbkF4aXNdIC0gKHJlZmVyZW5jZVtsZW5dIC8gMiAtIGVsZW1lbnRbbGVuXSAvIDIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgZW5kOlxuICAgICAgICBvZmZzZXRzW21haW5BeGlzXSA9XG4gICAgICAgICAgb2Zmc2V0c1ttYWluQXhpc10gKyAocmVmZXJlbmNlW2xlbl0gLyAyIC0gZWxlbWVudFtsZW5dIC8gMik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2Zmc2V0cztcbn1cbiIsICIvLyBAZmxvd1xuaW1wb3J0IHR5cGUgeyBTaWRlT2JqZWN0IH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRGcmVzaFNpZGVPYmplY3QoKTogU2lkZU9iamVjdCB7XG4gIHJldHVybiB7XG4gICAgdG9wOiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICBsZWZ0OiAwLFxuICB9O1xufVxuIiwgIi8vIEBmbG93XG5pbXBvcnQgdHlwZSB7IFNpZGVPYmplY3QgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgZ2V0RnJlc2hTaWRlT2JqZWN0IGZyb20gJy4vZ2V0RnJlc2hTaWRlT2JqZWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVyZ2VQYWRkaW5nT2JqZWN0KFxuICBwYWRkaW5nT2JqZWN0OiAkU2hhcGU8U2lkZU9iamVjdD5cbik6IFNpZGVPYmplY3Qge1xuICByZXR1cm4ge1xuICAgIC4uLmdldEZyZXNoU2lkZU9iamVjdCgpLFxuICAgIC4uLnBhZGRpbmdPYmplY3QsXG4gIH07XG59XG4iLCAiLy8gQGZsb3dcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXhwYW5kVG9IYXNoTWFwPFxuICBUOiBudW1iZXIgfCBzdHJpbmcgfCBib29sZWFuLFxuICBLOiBzdHJpbmdcbj4odmFsdWU6IFQsIGtleXM6IEFycmF5PEs+KTogeyBba2V5OiBzdHJpbmddOiBUIH0ge1xuICByZXR1cm4ga2V5cy5yZWR1Y2UoKGhhc2hNYXAsIGtleSkgPT4ge1xuICAgIGhhc2hNYXBba2V5XSA9IHZhbHVlO1xuICAgIHJldHVybiBoYXNoTWFwO1xuICB9LCB7fSk7XG59XG4iLCAiLy8gQGZsb3dcbmltcG9ydCB0eXBlIHsgU3RhdGUsIFNpZGVPYmplY3QsIFBhZGRpbmcsIFBvc2l0aW9uaW5nU3RyYXRlZ3kgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgdHlwZSB7IFBsYWNlbWVudCwgQm91bmRhcnksIFJvb3RCb3VuZGFyeSwgQ29udGV4dCB9IGZyb20gJy4uL2VudW1zJztcbmltcG9ydCBnZXRDbGlwcGluZ1JlY3QgZnJvbSAnLi4vZG9tLXV0aWxzL2dldENsaXBwaW5nUmVjdCc7XG5pbXBvcnQgZ2V0RG9jdW1lbnRFbGVtZW50IGZyb20gJy4uL2RvbS11dGlscy9nZXREb2N1bWVudEVsZW1lbnQnO1xuaW1wb3J0IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmcm9tICcuLi9kb20tdXRpbHMvZ2V0Qm91bmRpbmdDbGllbnRSZWN0JztcbmltcG9ydCBjb21wdXRlT2Zmc2V0cyBmcm9tICcuL2NvbXB1dGVPZmZzZXRzJztcbmltcG9ydCByZWN0VG9DbGllbnRSZWN0IGZyb20gJy4vcmVjdFRvQ2xpZW50UmVjdCc7XG5pbXBvcnQge1xuICBjbGlwcGluZ1BhcmVudHMsXG4gIHJlZmVyZW5jZSxcbiAgcG9wcGVyLFxuICBib3R0b20sXG4gIHRvcCxcbiAgcmlnaHQsXG4gIGJhc2VQbGFjZW1lbnRzLFxuICB2aWV3cG9ydCxcbn0gZnJvbSAnLi4vZW51bXMnO1xuaW1wb3J0IHsgaXNFbGVtZW50IH0gZnJvbSAnLi4vZG9tLXV0aWxzL2luc3RhbmNlT2YnO1xuaW1wb3J0IG1lcmdlUGFkZGluZ09iamVjdCBmcm9tICcuL21lcmdlUGFkZGluZ09iamVjdCc7XG5pbXBvcnQgZXhwYW5kVG9IYXNoTWFwIGZyb20gJy4vZXhwYW5kVG9IYXNoTWFwJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuZXhwb3J0IHR5cGUgT3B0aW9ucyA9IHtcbiAgcGxhY2VtZW50OiBQbGFjZW1lbnQsXG4gIHN0cmF0ZWd5OiBQb3NpdGlvbmluZ1N0cmF0ZWd5LFxuICBib3VuZGFyeTogQm91bmRhcnksXG4gIHJvb3RCb3VuZGFyeTogUm9vdEJvdW5kYXJ5LFxuICBlbGVtZW50Q29udGV4dDogQ29udGV4dCxcbiAgYWx0Qm91bmRhcnk6IGJvb2xlYW4sXG4gIHBhZGRpbmc6IFBhZGRpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZXRlY3RPdmVyZmxvdyhcbiAgc3RhdGU6IFN0YXRlLFxuICBvcHRpb25zOiAkU2hhcGU8T3B0aW9ucz4gPSB7fVxuKTogU2lkZU9iamVjdCB7XG4gIGNvbnN0IHtcbiAgICBwbGFjZW1lbnQgPSBzdGF0ZS5wbGFjZW1lbnQsXG4gICAgc3RyYXRlZ3kgPSBzdGF0ZS5zdHJhdGVneSxcbiAgICBib3VuZGFyeSA9IGNsaXBwaW5nUGFyZW50cyxcbiAgICByb290Qm91bmRhcnkgPSB2aWV3cG9ydCxcbiAgICBlbGVtZW50Q29udGV4dCA9IHBvcHBlcixcbiAgICBhbHRCb3VuZGFyeSA9IGZhbHNlLFxuICAgIHBhZGRpbmcgPSAwLFxuICB9ID0gb3B0aW9ucztcblxuICBjb25zdCBwYWRkaW5nT2JqZWN0ID0gbWVyZ2VQYWRkaW5nT2JqZWN0KFxuICAgIHR5cGVvZiBwYWRkaW5nICE9PSAnbnVtYmVyJ1xuICAgICAgPyBwYWRkaW5nXG4gICAgICA6IGV4cGFuZFRvSGFzaE1hcChwYWRkaW5nLCBiYXNlUGxhY2VtZW50cylcbiAgKTtcblxuICBjb25zdCBhbHRDb250ZXh0ID0gZWxlbWVudENvbnRleHQgPT09IHBvcHBlciA/IHJlZmVyZW5jZSA6IHBvcHBlcjtcblxuICBjb25zdCBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICBjb25zdCBlbGVtZW50ID0gc3RhdGUuZWxlbWVudHNbYWx0Qm91bmRhcnkgPyBhbHRDb250ZXh0IDogZWxlbWVudENvbnRleHRdO1xuXG4gIGNvbnN0IGNsaXBwaW5nQ2xpZW50UmVjdCA9IGdldENsaXBwaW5nUmVjdChcbiAgICBpc0VsZW1lbnQoZWxlbWVudClcbiAgICAgID8gZWxlbWVudFxuICAgICAgOiBlbGVtZW50LmNvbnRleHRFbGVtZW50IHx8IGdldERvY3VtZW50RWxlbWVudChzdGF0ZS5lbGVtZW50cy5wb3BwZXIpLFxuICAgIGJvdW5kYXJ5LFxuICAgIHJvb3RCb3VuZGFyeSxcbiAgICBzdHJhdGVneVxuICApO1xuXG4gIGNvbnN0IHJlZmVyZW5jZUNsaWVudFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3Qoc3RhdGUuZWxlbWVudHMucmVmZXJlbmNlKTtcblxuICBjb25zdCBwb3BwZXJPZmZzZXRzID0gY29tcHV0ZU9mZnNldHMoe1xuICAgIHJlZmVyZW5jZTogcmVmZXJlbmNlQ2xpZW50UmVjdCxcbiAgICBlbGVtZW50OiBwb3BwZXJSZWN0LFxuICAgIHN0cmF0ZWd5OiAnYWJzb2x1dGUnLFxuICAgIHBsYWNlbWVudCxcbiAgfSk7XG5cbiAgY29uc3QgcG9wcGVyQ2xpZW50UmVjdCA9IHJlY3RUb0NsaWVudFJlY3Qoe1xuICAgIC4uLnBvcHBlclJlY3QsXG4gICAgLi4ucG9wcGVyT2Zmc2V0cyxcbiAgfSk7XG5cbiAgY29uc3QgZWxlbWVudENsaWVudFJlY3QgPVxuICAgIGVsZW1lbnRDb250ZXh0ID09PSBwb3BwZXIgPyBwb3BwZXJDbGllbnRSZWN0IDogcmVmZXJlbmNlQ2xpZW50UmVjdDtcblxuICAvLyBwb3NpdGl2ZSA9IG92ZXJmbG93aW5nIHRoZSBjbGlwcGluZyByZWN0XG4gIC8vIDAgb3IgbmVnYXRpdmUgPSB3aXRoaW4gdGhlIGNsaXBwaW5nIHJlY3RcbiAgY29uc3Qgb3ZlcmZsb3dPZmZzZXRzID0ge1xuICAgIHRvcDogY2xpcHBpbmdDbGllbnRSZWN0LnRvcCAtIGVsZW1lbnRDbGllbnRSZWN0LnRvcCArIHBhZGRpbmdPYmplY3QudG9wLFxuICAgIGJvdHRvbTpcbiAgICAgIGVsZW1lbnRDbGllbnRSZWN0LmJvdHRvbSAtXG4gICAgICBjbGlwcGluZ0NsaWVudFJlY3QuYm90dG9tICtcbiAgICAgIHBhZGRpbmdPYmplY3QuYm90dG9tLFxuICAgIGxlZnQ6IGNsaXBwaW5nQ2xpZW50UmVjdC5sZWZ0IC0gZWxlbWVudENsaWVudFJlY3QubGVmdCArIHBhZGRpbmdPYmplY3QubGVmdCxcbiAgICByaWdodDpcbiAgICAgIGVsZW1lbnRDbGllbnRSZWN0LnJpZ2h0IC0gY2xpcHBpbmdDbGllbnRSZWN0LnJpZ2h0ICsgcGFkZGluZ09iamVjdC5yaWdodCxcbiAgfTtcblxuICBjb25zdCBvZmZzZXREYXRhID0gc3RhdGUubW9kaWZpZXJzRGF0YS5vZmZzZXQ7XG5cbiAgLy8gT2Zmc2V0cyBjYW4gYmUgYXBwbGllZCBvbmx5IHRvIHRoZSBwb3BwZXIgZWxlbWVudFxuICBpZiAoZWxlbWVudENvbnRleHQgPT09IHBvcHBlciAmJiBvZmZzZXREYXRhKSB7XG4gICAgY29uc3Qgb2Zmc2V0ID0gb2Zmc2V0RGF0YVtwbGFjZW1lbnRdO1xuXG4gICAgT2JqZWN0LmtleXMob3ZlcmZsb3dPZmZzZXRzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IG11bHRpcGx5ID0gW3JpZ2h0LCBib3R0b21dLmluZGV4T2Yoa2V5KSA+PSAwID8gMSA6IC0xO1xuICAgICAgY29uc3QgYXhpcyA9IFt0b3AsIGJvdHRvbV0uaW5kZXhPZihrZXkpID49IDAgPyAneScgOiAneCc7XG4gICAgICBvdmVyZmxvd09mZnNldHNba2V5XSArPSBvZmZzZXRbYXhpc10gKiBtdWx0aXBseTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBvdmVyZmxvd09mZnNldHM7XG59XG4iLCAiLy8gQGZsb3dcbmltcG9ydCB0eXBlIHtcbiAgU3RhdGUsXG4gIE9wdGlvbnNHZW5lcmljLFxuICBNb2RpZmllcixcbiAgSW5zdGFuY2UsXG4gIFZpcnR1YWxFbGVtZW50LFxufSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBnZXRDb21wb3NpdGVSZWN0IGZyb20gJy4vZG9tLXV0aWxzL2dldENvbXBvc2l0ZVJlY3QnO1xuaW1wb3J0IGdldExheW91dFJlY3QgZnJvbSAnLi9kb20tdXRpbHMvZ2V0TGF5b3V0UmVjdCc7XG5pbXBvcnQgbGlzdFNjcm9sbFBhcmVudHMgZnJvbSAnLi9kb20tdXRpbHMvbGlzdFNjcm9sbFBhcmVudHMnO1xuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tICcuL2RvbS11dGlscy9nZXRPZmZzZXRQYXJlbnQnO1xuaW1wb3J0IG9yZGVyTW9kaWZpZXJzIGZyb20gJy4vdXRpbHMvb3JkZXJNb2RpZmllcnMnO1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJy4vdXRpbHMvZGVib3VuY2UnO1xuaW1wb3J0IG1lcmdlQnlOYW1lIGZyb20gJy4vdXRpbHMvbWVyZ2VCeU5hbWUnO1xuaW1wb3J0IGRldGVjdE92ZXJmbG93IGZyb20gJy4vdXRpbHMvZGV0ZWN0T3ZlcmZsb3cnO1xuaW1wb3J0IHsgaXNFbGVtZW50IH0gZnJvbSAnLi9kb20tdXRpbHMvaW5zdGFuY2VPZic7XG5cbmNvbnN0IERFRkFVTFRfT1BUSU9OUzogT3B0aW9uc0dlbmVyaWM8YW55PiA9IHtcbiAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgbW9kaWZpZXJzOiBbXSxcbiAgc3RyYXRlZ3k6ICdhYnNvbHV0ZScsXG59O1xuXG50eXBlIFBvcHBlckdlbmVyYXRvckFyZ3MgPSB7XG4gIGRlZmF1bHRNb2RpZmllcnM/OiBBcnJheTxNb2RpZmllcjxhbnksIGFueT4+LFxuICBkZWZhdWx0T3B0aW9ucz86ICRTaGFwZTxPcHRpb25zR2VuZXJpYzxhbnk+Pixcbn07XG5cbmZ1bmN0aW9uIGFyZVZhbGlkRWxlbWVudHMoLi4uYXJnczogQXJyYXk8YW55Pik6IGJvb2xlYW4ge1xuICByZXR1cm4gIWFyZ3Muc29tZShcbiAgICAoZWxlbWVudCkgPT5cbiAgICAgICEoZWxlbWVudCAmJiB0eXBlb2YgZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QgPT09ICdmdW5jdGlvbicpXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3BwZXJHZW5lcmF0b3IoZ2VuZXJhdG9yT3B0aW9uczogUG9wcGVyR2VuZXJhdG9yQXJncyA9IHt9KSB7XG4gIGNvbnN0IHsgZGVmYXVsdE1vZGlmaWVycyA9IFtdLCBkZWZhdWx0T3B0aW9ucyA9IERFRkFVTFRfT1BUSU9OUyB9ID1cbiAgICBnZW5lcmF0b3JPcHRpb25zO1xuXG4gIHJldHVybiBmdW5jdGlvbiBjcmVhdGVQb3BwZXI8VE1vZGlmaWVyOiAkU2hhcGU8TW9kaWZpZXI8YW55LCBhbnk+Pj4oXG4gICAgcmVmZXJlbmNlOiBFbGVtZW50IHwgVmlydHVhbEVsZW1lbnQsXG4gICAgcG9wcGVyOiBIVE1MRWxlbWVudCxcbiAgICBvcHRpb25zOiAkU2hhcGU8T3B0aW9uc0dlbmVyaWM8VE1vZGlmaWVyPj4gPSBkZWZhdWx0T3B0aW9uc1xuICApOiBJbnN0YW5jZSB7XG4gICAgbGV0IHN0YXRlOiAkU2hhcGU8U3RhdGU+ID0ge1xuICAgICAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgICAgIG9yZGVyZWRNb2RpZmllcnM6IFtdLFxuICAgICAgb3B0aW9uczogeyAuLi5ERUZBVUxUX09QVElPTlMsIC4uLmRlZmF1bHRPcHRpb25zIH0sXG4gICAgICBtb2RpZmllcnNEYXRhOiB7fSxcbiAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgIHJlZmVyZW5jZSxcbiAgICAgICAgcG9wcGVyLFxuICAgICAgfSxcbiAgICAgIGF0dHJpYnV0ZXM6IHt9LFxuICAgICAgc3R5bGVzOiB7fSxcbiAgICB9O1xuXG4gICAgbGV0IGVmZmVjdENsZWFudXBGbnM6IEFycmF5PCgpID0+IHZvaWQ+ID0gW107XG4gICAgbGV0IGlzRGVzdHJveWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBpbnN0YW5jZSA9IHtcbiAgICAgIHN0YXRlLFxuICAgICAgc2V0T3B0aW9ucyhzZXRPcHRpb25zQWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPVxuICAgICAgICAgIHR5cGVvZiBzZXRPcHRpb25zQWN0aW9uID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICA/IHNldE9wdGlvbnNBY3Rpb24oc3RhdGUub3B0aW9ucylcbiAgICAgICAgICAgIDogc2V0T3B0aW9uc0FjdGlvbjtcblxuICAgICAgICBjbGVhbnVwTW9kaWZpZXJFZmZlY3RzKCk7XG5cbiAgICAgICAgc3RhdGUub3B0aW9ucyA9IHtcbiAgICAgICAgICAvLyAkRmxvd0ZpeE1lW2V4cG9uZW50aWFsLXNwcmVhZF1cbiAgICAgICAgICAuLi5kZWZhdWx0T3B0aW9ucyxcbiAgICAgICAgICAuLi5zdGF0ZS5vcHRpb25zLFxuICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIH07XG5cbiAgICAgICAgc3RhdGUuc2Nyb2xsUGFyZW50cyA9IHtcbiAgICAgICAgICByZWZlcmVuY2U6IGlzRWxlbWVudChyZWZlcmVuY2UpXG4gICAgICAgICAgICA/IGxpc3RTY3JvbGxQYXJlbnRzKHJlZmVyZW5jZSlcbiAgICAgICAgICAgIDogcmVmZXJlbmNlLmNvbnRleHRFbGVtZW50XG4gICAgICAgICAgICA/IGxpc3RTY3JvbGxQYXJlbnRzKHJlZmVyZW5jZS5jb250ZXh0RWxlbWVudClcbiAgICAgICAgICAgIDogW10sXG4gICAgICAgICAgcG9wcGVyOiBsaXN0U2Nyb2xsUGFyZW50cyhwb3BwZXIpLFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIE9yZGVycyB0aGUgbW9kaWZpZXJzIGJhc2VkIG9uIHRoZWlyIGRlcGVuZGVuY2llcyBhbmQgYHBoYXNlYFxuICAgICAgICAvLyBwcm9wZXJ0aWVzXG4gICAgICAgIGNvbnN0IG9yZGVyZWRNb2RpZmllcnMgPSBvcmRlck1vZGlmaWVycyhcbiAgICAgICAgICBtZXJnZUJ5TmFtZShbLi4uZGVmYXVsdE1vZGlmaWVycywgLi4uc3RhdGUub3B0aW9ucy5tb2RpZmllcnNdKVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIFN0cmlwIG91dCBkaXNhYmxlZCBtb2RpZmllcnNcbiAgICAgICAgc3RhdGUub3JkZXJlZE1vZGlmaWVycyA9IG9yZGVyZWRNb2RpZmllcnMuZmlsdGVyKChtKSA9PiBtLmVuYWJsZWQpO1xuXG4gICAgICAgIHJ1bk1vZGlmaWVyRWZmZWN0cygpO1xuXG4gICAgICAgIHJldHVybiBpbnN0YW5jZS51cGRhdGUoKTtcbiAgICAgIH0sXG5cbiAgICAgIC8vIFN5bmMgdXBkYXRlIOKAkyBpdCB3aWxsIGFsd2F5cyBiZSBleGVjdXRlZCwgZXZlbiBpZiBub3QgbmVjZXNzYXJ5LiBUaGlzXG4gICAgICAvLyBpcyB1c2VmdWwgZm9yIGxvdyBmcmVxdWVuY3kgdXBkYXRlcyB3aGVyZSBzeW5jIGJlaGF2aW9yIHNpbXBsaWZpZXMgdGhlXG4gICAgICAvLyBsb2dpYy5cbiAgICAgIC8vIEZvciBoaWdoIGZyZXF1ZW5jeSB1cGRhdGVzIChlLmcuIGByZXNpemVgIGFuZCBgc2Nyb2xsYCBldmVudHMpLCBhbHdheXNcbiAgICAgIC8vIHByZWZlciB0aGUgYXN5bmMgUG9wcGVyI3VwZGF0ZSBtZXRob2RcbiAgICAgIGZvcmNlVXBkYXRlKCkge1xuICAgICAgICBpZiAoaXNEZXN0cm95ZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB7IHJlZmVyZW5jZSwgcG9wcGVyIH0gPSBzdGF0ZS5lbGVtZW50cztcblxuICAgICAgICAvLyBEb24ndCBwcm9jZWVkIGlmIGByZWZlcmVuY2VgIG9yIGBwb3BwZXJgIGFyZSBub3QgdmFsaWQgZWxlbWVudHNcbiAgICAgICAgLy8gYW55bW9yZVxuICAgICAgICBpZiAoIWFyZVZhbGlkRWxlbWVudHMocmVmZXJlbmNlLCBwb3BwZXIpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU3RvcmUgdGhlIHJlZmVyZW5jZSBhbmQgcG9wcGVyIHJlY3RzIHRvIGJlIHJlYWQgYnkgbW9kaWZpZXJzXG4gICAgICAgIHN0YXRlLnJlY3RzID0ge1xuICAgICAgICAgIHJlZmVyZW5jZTogZ2V0Q29tcG9zaXRlUmVjdChcbiAgICAgICAgICAgIHJlZmVyZW5jZSxcbiAgICAgICAgICAgIGdldE9mZnNldFBhcmVudChwb3BwZXIpLFxuICAgICAgICAgICAgc3RhdGUub3B0aW9ucy5zdHJhdGVneSA9PT0gJ2ZpeGVkJ1xuICAgICAgICAgICksXG4gICAgICAgICAgcG9wcGVyOiBnZXRMYXlvdXRSZWN0KHBvcHBlciksXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gTW9kaWZpZXJzIGhhdmUgdGhlIGFiaWxpdHkgdG8gcmVzZXQgdGhlIGN1cnJlbnQgdXBkYXRlIGN5Y2xlLiBUaGVcbiAgICAgICAgLy8gbW9zdCBjb21tb24gdXNlIGNhc2UgZm9yIHRoaXMgaXMgdGhlIGBmbGlwYCBtb2RpZmllciBjaGFuZ2luZyB0aGVcbiAgICAgICAgLy8gcGxhY2VtZW50LCB3aGljaCB0aGVuIG5lZWRzIHRvIHJlLXJ1biBhbGwgdGhlIG1vZGlmaWVycywgYmVjYXVzZSB0aGVcbiAgICAgICAgLy8gbG9naWMgd2FzIHByZXZpb3VzbHkgcmFuIGZvciB0aGUgcHJldmlvdXMgcGxhY2VtZW50IGFuZCBpcyB0aGVyZWZvcmVcbiAgICAgICAgLy8gc3RhbGUvaW5jb3JyZWN0XG4gICAgICAgIHN0YXRlLnJlc2V0ID0gZmFsc2U7XG5cbiAgICAgICAgc3RhdGUucGxhY2VtZW50ID0gc3RhdGUub3B0aW9ucy5wbGFjZW1lbnQ7XG5cbiAgICAgICAgLy8gT24gZWFjaCB1cGRhdGUgY3ljbGUsIHRoZSBgbW9kaWZpZXJzRGF0YWAgcHJvcGVydHkgZm9yIGVhY2ggbW9kaWZpZXJcbiAgICAgICAgLy8gaXMgZmlsbGVkIHdpdGggdGhlIGluaXRpYWwgZGF0YSBzcGVjaWZpZWQgYnkgdGhlIG1vZGlmaWVyLiBUaGlzIG1lYW5zXG4gICAgICAgIC8vIGl0IGRvZXNuJ3QgcGVyc2lzdCBhbmQgaXMgZnJlc2ggb24gZWFjaCB1cGRhdGUuXG4gICAgICAgIC8vIFRvIGVuc3VyZSBwZXJzaXN0ZW50IGRhdGEsIHVzZSBgJHtuYW1lfSNwZXJzaXN0ZW50YFxuICAgICAgICBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzLmZvckVhY2goXG4gICAgICAgICAgKG1vZGlmaWVyKSA9PlxuICAgICAgICAgICAgKHN0YXRlLm1vZGlmaWVyc0RhdGFbbW9kaWZpZXIubmFtZV0gPSB7XG4gICAgICAgICAgICAgIC4uLm1vZGlmaWVyLmRhdGEsXG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgIGlmIChzdGF0ZS5yZXNldCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgc3RhdGUucmVzZXQgPSBmYWxzZTtcbiAgICAgICAgICAgIGluZGV4ID0gLTE7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCB7IGZuLCBvcHRpb25zID0ge30sIG5hbWUgfSA9IHN0YXRlLm9yZGVyZWRNb2RpZmllcnNbaW5kZXhdO1xuXG4gICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgc3RhdGUgPSBmbih7IHN0YXRlLCBvcHRpb25zLCBuYW1lLCBpbnN0YW5jZSB9KSB8fCBzdGF0ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIC8vIEFzeW5jIGFuZCBvcHRpbWlzdGljYWxseSBvcHRpbWl6ZWQgdXBkYXRlIOKAkyBpdCB3aWxsIG5vdCBiZSBleGVjdXRlZCBpZlxuICAgICAgLy8gbm90IG5lY2Vzc2FyeSAoZGVib3VuY2VkIHRvIHJ1biBhdCBtb3N0IG9uY2UtcGVyLXRpY2spXG4gICAgICB1cGRhdGU6IGRlYm91bmNlPCRTaGFwZTxTdGF0ZT4+KFxuICAgICAgICAoKSA9PlxuICAgICAgICAgIG5ldyBQcm9taXNlPCRTaGFwZTxTdGF0ZT4+KChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBpbnN0YW5jZS5mb3JjZVVwZGF0ZSgpO1xuICAgICAgICAgICAgcmVzb2x2ZShzdGF0ZSk7XG4gICAgICAgICAgfSlcbiAgICAgICksXG5cbiAgICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGNsZWFudXBNb2RpZmllckVmZmVjdHMoKTtcbiAgICAgICAgaXNEZXN0cm95ZWQgPSB0cnVlO1xuICAgICAgfSxcbiAgICB9O1xuXG4gICAgaWYgKCFhcmVWYWxpZEVsZW1lbnRzKHJlZmVyZW5jZSwgcG9wcGVyKSkge1xuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cblxuICAgIGluc3RhbmNlLnNldE9wdGlvbnMob3B0aW9ucykudGhlbigoc3RhdGUpID0+IHtcbiAgICAgIGlmICghaXNEZXN0cm95ZWQgJiYgb3B0aW9ucy5vbkZpcnN0VXBkYXRlKSB7XG4gICAgICAgIG9wdGlvbnMub25GaXJzdFVwZGF0ZShzdGF0ZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBNb2RpZmllcnMgaGF2ZSB0aGUgYWJpbGl0eSB0byBleGVjdXRlIGFyYml0cmFyeSBjb2RlIGJlZm9yZSB0aGUgZmlyc3RcbiAgICAvLyB1cGRhdGUgY3ljbGUgcnVucy4gVGhleSB3aWxsIGJlIGV4ZWN1dGVkIGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZSB1cGRhdGVcbiAgICAvLyBjeWNsZS4gVGhpcyBpcyB1c2VmdWwgd2hlbiBhIG1vZGlmaWVyIGFkZHMgc29tZSBwZXJzaXN0ZW50IGRhdGEgdGhhdFxuICAgIC8vIG90aGVyIG1vZGlmaWVycyBuZWVkIHRvIHVzZSwgYnV0IHRoZSBtb2RpZmllciBpcyBydW4gYWZ0ZXIgdGhlIGRlcGVuZGVudFxuICAgIC8vIG9uZS5cbiAgICBmdW5jdGlvbiBydW5Nb2RpZmllckVmZmVjdHMoKSB7XG4gICAgICBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzLmZvckVhY2goKHsgbmFtZSwgb3B0aW9ucyA9IHt9LCBlZmZlY3QgfSkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGVmZmVjdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNvbnN0IGNsZWFudXBGbiA9IGVmZmVjdCh7IHN0YXRlLCBuYW1lLCBpbnN0YW5jZSwgb3B0aW9ucyB9KTtcbiAgICAgICAgICBjb25zdCBub29wRm4gPSAoKSA9PiB7fTtcbiAgICAgICAgICBlZmZlY3RDbGVhbnVwRm5zLnB1c2goY2xlYW51cEZuIHx8IG5vb3BGbik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFudXBNb2RpZmllckVmZmVjdHMoKSB7XG4gICAgICBlZmZlY3RDbGVhbnVwRm5zLmZvckVhY2goKGZuKSA9PiBmbigpKTtcbiAgICAgIGVmZmVjdENsZWFudXBGbnMgPSBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVQb3BwZXIgPSBwb3BwZXJHZW5lcmF0b3IoKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuZXhwb3J0IHsgZGV0ZWN0T3ZlcmZsb3cgfTtcbiIsICIvLyBAZmxvd1xuaW1wb3J0IHR5cGUgeyBNb2RpZmllckFyZ3VtZW50cywgTW9kaWZpZXIgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgZ2V0V2luZG93IGZyb20gJy4uL2RvbS11dGlscy9nZXRXaW5kb3cnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5leHBvcnQgdHlwZSBPcHRpb25zID0ge1xuICBzY3JvbGw6IGJvb2xlYW4sXG4gIHJlc2l6ZTogYm9vbGVhbixcbn07XG5cbmNvbnN0IHBhc3NpdmUgPSB7IHBhc3NpdmU6IHRydWUgfTtcblxuZnVuY3Rpb24gZWZmZWN0KHsgc3RhdGUsIGluc3RhbmNlLCBvcHRpb25zIH06IE1vZGlmaWVyQXJndW1lbnRzPE9wdGlvbnM+KSB7XG4gIGNvbnN0IHsgc2Nyb2xsID0gdHJ1ZSwgcmVzaXplID0gdHJ1ZSB9ID0gb3B0aW9ucztcblxuICBjb25zdCB3aW5kb3cgPSBnZXRXaW5kb3coc3RhdGUuZWxlbWVudHMucG9wcGVyKTtcbiAgY29uc3Qgc2Nyb2xsUGFyZW50cyA9IFtcbiAgICAuLi5zdGF0ZS5zY3JvbGxQYXJlbnRzLnJlZmVyZW5jZSxcbiAgICAuLi5zdGF0ZS5zY3JvbGxQYXJlbnRzLnBvcHBlcixcbiAgXTtcblxuICBpZiAoc2Nyb2xsKSB7XG4gICAgc2Nyb2xsUGFyZW50cy5mb3JFYWNoKHNjcm9sbFBhcmVudCA9PiB7XG4gICAgICBzY3JvbGxQYXJlbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChyZXNpemUpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgfVxuXG4gIHJldHVybiAoKSA9PiB7XG4gICAgaWYgKHNjcm9sbCkge1xuICAgICAgc2Nyb2xsUGFyZW50cy5mb3JFYWNoKHNjcm9sbFBhcmVudCA9PiB7XG4gICAgICAgIHNjcm9sbFBhcmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBpbnN0YW5jZS51cGRhdGUsIHBhc3NpdmUpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHJlc2l6ZSkge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gICAgfVxuICB9O1xufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5leHBvcnQgdHlwZSBFdmVudExpc3RlbmVyc01vZGlmaWVyID0gTW9kaWZpZXI8J2V2ZW50TGlzdGVuZXJzJywgT3B0aW9ucz47XG5leHBvcnQgZGVmYXVsdCAoe1xuICBuYW1lOiAnZXZlbnRMaXN0ZW5lcnMnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ3dyaXRlJyxcbiAgZm46ICgpID0+IHt9LFxuICBlZmZlY3QsXG4gIGRhdGE6IHt9LFxufTogRXZlbnRMaXN0ZW5lcnNNb2RpZmllcik7XG4iLCAiLy8gQGZsb3dcbmltcG9ydCB0eXBlIHsgTW9kaWZpZXJBcmd1bWVudHMsIE1vZGlmaWVyIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IGNvbXB1dGVPZmZzZXRzIGZyb20gJy4uL3V0aWxzL2NvbXB1dGVPZmZzZXRzJztcblxuZnVuY3Rpb24gcG9wcGVyT2Zmc2V0cyh7IHN0YXRlLCBuYW1lIH06IE1vZGlmaWVyQXJndW1lbnRzPHt8fH0+KSB7XG4gIC8vIE9mZnNldHMgYXJlIHRoZSBhY3R1YWwgcG9zaXRpb24gdGhlIHBvcHBlciBuZWVkcyB0byBoYXZlIHRvIGJlXG4gIC8vIHByb3Blcmx5IHBvc2l0aW9uZWQgbmVhciBpdHMgcmVmZXJlbmNlIGVsZW1lbnRcbiAgLy8gVGhpcyBpcyB0aGUgbW9zdCBiYXNpYyBwbGFjZW1lbnQsIGFuZCB3aWxsIGJlIGFkanVzdGVkIGJ5XG4gIC8vIHRoZSBtb2RpZmllcnMgaW4gdGhlIG5leHQgc3RlcFxuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gY29tcHV0ZU9mZnNldHMoe1xuICAgIHJlZmVyZW5jZTogc3RhdGUucmVjdHMucmVmZXJlbmNlLFxuICAgIGVsZW1lbnQ6IHN0YXRlLnJlY3RzLnBvcHBlcixcbiAgICBzdHJhdGVneTogJ2Fic29sdXRlJyxcbiAgICBwbGFjZW1lbnQ6IHN0YXRlLnBsYWNlbWVudCxcbiAgfSk7XG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcbmV4cG9ydCB0eXBlIFBvcHBlck9mZnNldHNNb2RpZmllciA9IE1vZGlmaWVyPCdwb3BwZXJPZmZzZXRzJywge3x8fT47XG5leHBvcnQgZGVmYXVsdCAoe1xuICBuYW1lOiAncG9wcGVyT2Zmc2V0cycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAncmVhZCcsXG4gIGZuOiBwb3BwZXJPZmZzZXRzLFxuICBkYXRhOiB7fSxcbn06IFBvcHBlck9mZnNldHNNb2RpZmllcik7XG4iLCAiLy8gQGZsb3dcbmltcG9ydCB0eXBlIHtcbiAgUG9zaXRpb25pbmdTdHJhdGVneSxcbiAgT2Zmc2V0cyxcbiAgTW9kaWZpZXIsXG4gIE1vZGlmaWVyQXJndW1lbnRzLFxuICBSZWN0LFxuICBXaW5kb3csXG59IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7XG4gIHR5cGUgQmFzZVBsYWNlbWVudCxcbiAgdHlwZSBWYXJpYXRpb24sXG4gIHRvcCxcbiAgbGVmdCxcbiAgcmlnaHQsXG4gIGJvdHRvbSxcbiAgZW5kLFxufSBmcm9tICcuLi9lbnVtcyc7XG5pbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gJy4uL2RvbS11dGlscy9nZXRPZmZzZXRQYXJlbnQnO1xuaW1wb3J0IGdldFdpbmRvdyBmcm9tICcuLi9kb20tdXRpbHMvZ2V0V2luZG93JztcbmltcG9ydCBnZXREb2N1bWVudEVsZW1lbnQgZnJvbSAnLi4vZG9tLXV0aWxzL2dldERvY3VtZW50RWxlbWVudCc7XG5pbXBvcnQgZ2V0Q29tcHV0ZWRTdHlsZSBmcm9tICcuLi9kb20tdXRpbHMvZ2V0Q29tcHV0ZWRTdHlsZSc7XG5pbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tICcuLi91dGlscy9nZXRCYXNlUGxhY2VtZW50JztcbmltcG9ydCBnZXRWYXJpYXRpb24gZnJvbSAnLi4vdXRpbHMvZ2V0VmFyaWF0aW9uJztcbmltcG9ydCB7IHJvdW5kIH0gZnJvbSAnLi4vdXRpbHMvbWF0aCc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcbmV4cG9ydCB0eXBlIFJvdW5kT2Zmc2V0cyA9IChcbiAgb2Zmc2V0czogJFNoYXBlPHsgeDogbnVtYmVyLCB5OiBudW1iZXIsIGNlbnRlck9mZnNldDogbnVtYmVyIH0+XG4pID0+IE9mZnNldHM7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcbmV4cG9ydCB0eXBlIE9wdGlvbnMgPSB7XG4gIGdwdUFjY2VsZXJhdGlvbjogYm9vbGVhbixcbiAgYWRhcHRpdmU6IGJvb2xlYW4sXG4gIHJvdW5kT2Zmc2V0cz86IGJvb2xlYW4gfCBSb3VuZE9mZnNldHMsXG59O1xuXG5jb25zdCB1bnNldFNpZGVzID0ge1xuICB0b3A6ICdhdXRvJyxcbiAgcmlnaHQ6ICdhdXRvJyxcbiAgYm90dG9tOiAnYXV0bycsXG4gIGxlZnQ6ICdhdXRvJyxcbn07XG5cbi8vIFJvdW5kIHRoZSBvZmZzZXRzIHRvIHRoZSBuZWFyZXN0IHN1aXRhYmxlIHN1YnBpeGVsIGJhc2VkIG9uIHRoZSBEUFIuXG4vLyBab29taW5nIGNhbiBjaGFuZ2UgdGhlIERQUiwgYnV0IGl0IHNlZW1zIHRvIHJlcG9ydCBhIHZhbHVlIHRoYXQgd2lsbFxuLy8gY2xlYW5seSBkaXZpZGUgdGhlIHZhbHVlcyBpbnRvIHRoZSBhcHByb3ByaWF0ZSBzdWJwaXhlbHMuXG5mdW5jdGlvbiByb3VuZE9mZnNldHNCeURQUih7IHgsIHkgfSwgd2luOiBXaW5kb3cpOiBPZmZzZXRzIHtcbiAgY29uc3QgZHByID0gd2luLmRldmljZVBpeGVsUmF0aW8gfHwgMTtcblxuICByZXR1cm4ge1xuICAgIHg6IHJvdW5kKHggKiBkcHIpIC8gZHByIHx8IDAsXG4gICAgeTogcm91bmQoeSAqIGRwcikgLyBkcHIgfHwgMCxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcFRvU3R5bGVzKHtcbiAgcG9wcGVyLFxuICBwb3BwZXJSZWN0LFxuICBwbGFjZW1lbnQsXG4gIHZhcmlhdGlvbixcbiAgb2Zmc2V0cyxcbiAgcG9zaXRpb24sXG4gIGdwdUFjY2VsZXJhdGlvbixcbiAgYWRhcHRpdmUsXG4gIHJvdW5kT2Zmc2V0cyxcbiAgaXNGaXhlZCxcbn06IHtcbiAgcG9wcGVyOiBIVE1MRWxlbWVudCxcbiAgcG9wcGVyUmVjdDogUmVjdCxcbiAgcGxhY2VtZW50OiBCYXNlUGxhY2VtZW50LFxuICB2YXJpYXRpb246ID9WYXJpYXRpb24sXG4gIG9mZnNldHM6ICRTaGFwZTx7IHg6IG51bWJlciwgeTogbnVtYmVyLCBjZW50ZXJPZmZzZXQ6IG51bWJlciB9PixcbiAgcG9zaXRpb246IFBvc2l0aW9uaW5nU3RyYXRlZ3ksXG4gIGdwdUFjY2VsZXJhdGlvbjogYm9vbGVhbixcbiAgYWRhcHRpdmU6IGJvb2xlYW4sXG4gIHJvdW5kT2Zmc2V0czogYm9vbGVhbiB8IFJvdW5kT2Zmc2V0cyxcbiAgaXNGaXhlZDogYm9vbGVhbixcbn0pIHtcbiAgbGV0IHsgeCA9IDAsIHkgPSAwIH0gPSBvZmZzZXRzO1xuXG4gICh7IHgsIHkgfSA9XG4gICAgdHlwZW9mIHJvdW5kT2Zmc2V0cyA9PT0gJ2Z1bmN0aW9uJyA/IHJvdW5kT2Zmc2V0cyh7IHgsIHkgfSkgOiB7IHgsIHkgfSk7XG5cbiAgY29uc3QgaGFzWCA9IG9mZnNldHMuaGFzT3duUHJvcGVydHkoJ3gnKTtcbiAgY29uc3QgaGFzWSA9IG9mZnNldHMuaGFzT3duUHJvcGVydHkoJ3knKTtcblxuICBsZXQgc2lkZVg6IHN0cmluZyA9IGxlZnQ7XG4gIGxldCBzaWRlWTogc3RyaW5nID0gdG9wO1xuXG4gIGNvbnN0IHdpbjogV2luZG93ID0gd2luZG93O1xuXG4gIGlmIChhZGFwdGl2ZSkge1xuICAgIGxldCBvZmZzZXRQYXJlbnQgPSBnZXRPZmZzZXRQYXJlbnQocG9wcGVyKTtcbiAgICBsZXQgaGVpZ2h0UHJvcCA9ICdjbGllbnRIZWlnaHQnO1xuICAgIGxldCB3aWR0aFByb3AgPSAnY2xpZW50V2lkdGgnO1xuXG4gICAgaWYgKG9mZnNldFBhcmVudCA9PT0gZ2V0V2luZG93KHBvcHBlcikpIHtcbiAgICAgIG9mZnNldFBhcmVudCA9IGdldERvY3VtZW50RWxlbWVudChwb3BwZXIpO1xuXG4gICAgICBpZiAoXG4gICAgICAgIGdldENvbXB1dGVkU3R5bGUob2Zmc2V0UGFyZW50KS5wb3NpdGlvbiAhPT0gJ3N0YXRpYycgJiZcbiAgICAgICAgcG9zaXRpb24gPT09ICdhYnNvbHV0ZSdcbiAgICAgICkge1xuICAgICAgICBoZWlnaHRQcm9wID0gJ3Njcm9sbEhlaWdodCc7XG4gICAgICAgIHdpZHRoUHJvcCA9ICdzY3JvbGxXaWR0aCc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtY2FzdF06IGZvcmNlIHR5cGUgcmVmaW5lbWVudCwgd2UgY29tcGFyZSBvZmZzZXRQYXJlbnQgd2l0aCB3aW5kb3cgYWJvdmUsIGJ1dCBGbG93IGRvZXNuJ3QgZGV0ZWN0IGl0XG4gICAgb2Zmc2V0UGFyZW50ID0gKG9mZnNldFBhcmVudDogRWxlbWVudCk7XG5cbiAgICBpZiAoXG4gICAgICBwbGFjZW1lbnQgPT09IHRvcCB8fFxuICAgICAgKChwbGFjZW1lbnQgPT09IGxlZnQgfHwgcGxhY2VtZW50ID09PSByaWdodCkgJiYgdmFyaWF0aW9uID09PSBlbmQpXG4gICAgKSB7XG4gICAgICBzaWRlWSA9IGJvdHRvbTtcbiAgICAgIGNvbnN0IG9mZnNldFkgPVxuICAgICAgICBpc0ZpeGVkICYmIG9mZnNldFBhcmVudCA9PT0gd2luICYmIHdpbi52aXN1YWxWaWV3cG9ydFxuICAgICAgICAgID8gd2luLnZpc3VhbFZpZXdwb3J0LmhlaWdodFxuICAgICAgICAgIDogLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG4gICAgICAgICAgICBvZmZzZXRQYXJlbnRbaGVpZ2h0UHJvcF07XG4gICAgICB5IC09IG9mZnNldFkgLSBwb3BwZXJSZWN0LmhlaWdodDtcbiAgICAgIHkgKj0gZ3B1QWNjZWxlcmF0aW9uID8gMSA6IC0xO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHBsYWNlbWVudCA9PT0gbGVmdCB8fFxuICAgICAgKChwbGFjZW1lbnQgPT09IHRvcCB8fCBwbGFjZW1lbnQgPT09IGJvdHRvbSkgJiYgdmFyaWF0aW9uID09PSBlbmQpXG4gICAgKSB7XG4gICAgICBzaWRlWCA9IHJpZ2h0O1xuICAgICAgY29uc3Qgb2Zmc2V0WCA9XG4gICAgICAgIGlzRml4ZWQgJiYgb2Zmc2V0UGFyZW50ID09PSB3aW4gJiYgd2luLnZpc3VhbFZpZXdwb3J0XG4gICAgICAgICAgPyB3aW4udmlzdWFsVmlld3BvcnQud2lkdGhcbiAgICAgICAgICA6IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuICAgICAgICAgICAgb2Zmc2V0UGFyZW50W3dpZHRoUHJvcF07XG4gICAgICB4IC09IG9mZnNldFggLSBwb3BwZXJSZWN0LndpZHRoO1xuICAgICAgeCAqPSBncHVBY2NlbGVyYXRpb24gPyAxIDogLTE7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgY29tbW9uU3R5bGVzID0ge1xuICAgIHBvc2l0aW9uLFxuICAgIC4uLihhZGFwdGl2ZSAmJiB1bnNldFNpZGVzKSxcbiAgfTtcblxuICAoeyB4LCB5IH0gPVxuICAgIHJvdW5kT2Zmc2V0cyA9PT0gdHJ1ZVxuICAgICAgPyByb3VuZE9mZnNldHNCeURQUih7IHgsIHkgfSwgZ2V0V2luZG93KHBvcHBlcikpXG4gICAgICA6IHsgeCwgeSB9KTtcblxuICBpZiAoZ3B1QWNjZWxlcmF0aW9uKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmNvbW1vblN0eWxlcyxcbiAgICAgIFtzaWRlWV06IGhhc1kgPyAnMCcgOiAnJyxcbiAgICAgIFtzaWRlWF06IGhhc1ggPyAnMCcgOiAnJyxcbiAgICAgIC8vIExheWVyIGFjY2VsZXJhdGlvbiBjYW4gZGlzYWJsZSBzdWJwaXhlbCByZW5kZXJpbmcgd2hpY2ggY2F1c2VzIHNsaWdodGx5XG4gICAgICAvLyBibHVycnkgdGV4dCBvbiBsb3cgUFBJIGRpc3BsYXlzLCBzbyB3ZSB3YW50IHRvIHVzZSAyRCB0cmFuc2Zvcm1zXG4gICAgICAvLyBpbnN0ZWFkXG4gICAgICB0cmFuc2Zvcm06XG4gICAgICAgICh3aW4uZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKSA8PSAxXG4gICAgICAgICAgPyBgdHJhbnNsYXRlKCR7eH1weCwgJHt5fXB4KWBcbiAgICAgICAgICA6IGB0cmFuc2xhdGUzZCgke3h9cHgsICR7eX1weCwgMClgLFxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIC4uLmNvbW1vblN0eWxlcyxcbiAgICBbc2lkZVldOiBoYXNZID8gYCR7eX1weGAgOiAnJyxcbiAgICBbc2lkZVhdOiBoYXNYID8gYCR7eH1weGAgOiAnJyxcbiAgICB0cmFuc2Zvcm06ICcnLFxuICB9O1xufVxuXG5mdW5jdGlvbiBjb21wdXRlU3R5bGVzKHsgc3RhdGUsIG9wdGlvbnMgfTogTW9kaWZpZXJBcmd1bWVudHM8T3B0aW9ucz4pIHtcbiAgY29uc3Qge1xuICAgIGdwdUFjY2VsZXJhdGlvbiA9IHRydWUsXG4gICAgYWRhcHRpdmUgPSB0cnVlLFxuICAgIC8vIGRlZmF1bHRzIHRvIHVzZSBidWlsdGluIGByb3VuZE9mZnNldHNCeURQUmBcbiAgICByb3VuZE9mZnNldHMgPSB0cnVlLFxuICB9ID0gb3B0aW9ucztcblxuICBjb25zdCBjb21tb25TdHlsZXMgPSB7XG4gICAgcGxhY2VtZW50OiBnZXRCYXNlUGxhY2VtZW50KHN0YXRlLnBsYWNlbWVudCksXG4gICAgdmFyaWF0aW9uOiBnZXRWYXJpYXRpb24oc3RhdGUucGxhY2VtZW50KSxcbiAgICBwb3BwZXI6IHN0YXRlLmVsZW1lbnRzLnBvcHBlcixcbiAgICBwb3BwZXJSZWN0OiBzdGF0ZS5yZWN0cy5wb3BwZXIsXG4gICAgZ3B1QWNjZWxlcmF0aW9uLFxuICAgIGlzRml4ZWQ6IHN0YXRlLm9wdGlvbnMuc3RyYXRlZ3kgPT09ICdmaXhlZCcsXG4gIH07XG5cbiAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyAhPSBudWxsKSB7XG4gICAgc3RhdGUuc3R5bGVzLnBvcHBlciA9IHtcbiAgICAgIC4uLnN0YXRlLnN0eWxlcy5wb3BwZXIsXG4gICAgICAuLi5tYXBUb1N0eWxlcyh7XG4gICAgICAgIC4uLmNvbW1vblN0eWxlcyxcbiAgICAgICAgb2Zmc2V0czogc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzLFxuICAgICAgICBwb3NpdGlvbjogc3RhdGUub3B0aW9ucy5zdHJhdGVneSxcbiAgICAgICAgYWRhcHRpdmUsXG4gICAgICAgIHJvdW5kT2Zmc2V0cyxcbiAgICAgIH0pLFxuICAgIH07XG4gIH1cblxuICBpZiAoc3RhdGUubW9kaWZpZXJzRGF0YS5hcnJvdyAhPSBudWxsKSB7XG4gICAgc3RhdGUuc3R5bGVzLmFycm93ID0ge1xuICAgICAgLi4uc3RhdGUuc3R5bGVzLmFycm93LFxuICAgICAgLi4ubWFwVG9TdHlsZXMoe1xuICAgICAgICAuLi5jb21tb25TdHlsZXMsXG4gICAgICAgIG9mZnNldHM6IHN0YXRlLm1vZGlmaWVyc0RhdGEuYXJyb3csXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICBhZGFwdGl2ZTogZmFsc2UsXG4gICAgICAgIHJvdW5kT2Zmc2V0cyxcbiAgICAgIH0pLFxuICAgIH07XG4gIH1cblxuICBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciA9IHtcbiAgICAuLi5zdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlcixcbiAgICAnZGF0YS1wb3BwZXItcGxhY2VtZW50Jzogc3RhdGUucGxhY2VtZW50LFxuICB9O1xufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5leHBvcnQgdHlwZSBDb21wdXRlU3R5bGVzTW9kaWZpZXIgPSBNb2RpZmllcjwnY29tcHV0ZVN0eWxlcycsIE9wdGlvbnM+O1xuZXhwb3J0IGRlZmF1bHQgKHtcbiAgbmFtZTogJ2NvbXB1dGVTdHlsZXMnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ2JlZm9yZVdyaXRlJyxcbiAgZm46IGNvbXB1dGVTdHlsZXMsXG4gIGRhdGE6IHt9LFxufTogQ29tcHV0ZVN0eWxlc01vZGlmaWVyKTtcbiIsICIvLyBAZmxvd1xuaW1wb3J0IHR5cGUgeyBNb2RpZmllciwgTW9kaWZpZXJBcmd1bWVudHMgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgZ2V0Tm9kZU5hbWUgZnJvbSAnLi4vZG9tLXV0aWxzL2dldE5vZGVOYW1lJztcbmltcG9ydCB7IGlzSFRNTEVsZW1lbnQgfSBmcm9tICcuLi9kb20tdXRpbHMvaW5zdGFuY2VPZic7XG5cbi8vIFRoaXMgbW9kaWZpZXIgdGFrZXMgdGhlIHN0eWxlcyBwcmVwYXJlZCBieSB0aGUgYGNvbXB1dGVTdHlsZXNgIG1vZGlmaWVyXG4vLyBhbmQgYXBwbGllcyB0aGVtIHRvIHRoZSBIVE1MRWxlbWVudHMgc3VjaCBhcyBwb3BwZXIgYW5kIGFycm93XG5cbmZ1bmN0aW9uIGFwcGx5U3R5bGVzKHsgc3RhdGUgfTogTW9kaWZpZXJBcmd1bWVudHM8e3x8fT4pIHtcbiAgT2JqZWN0LmtleXMoc3RhdGUuZWxlbWVudHMpLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICBjb25zdCBzdHlsZSA9IHN0YXRlLnN0eWxlc1tuYW1lXSB8fCB7fTtcblxuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBzdGF0ZS5hdHRyaWJ1dGVzW25hbWVdIHx8IHt9O1xuICAgIGNvbnN0IGVsZW1lbnQgPSBzdGF0ZS5lbGVtZW50c1tuYW1lXTtcblxuICAgIC8vIGFycm93IGlzIG9wdGlvbmFsICsgdmlydHVhbCBlbGVtZW50c1xuICAgIGlmICghaXNIVE1MRWxlbWVudChlbGVtZW50KSB8fCAhZ2V0Tm9kZU5hbWUoZWxlbWVudCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBGbG93IGRvZXNuJ3Qgc3VwcG9ydCB0byBleHRlbmQgdGhpcyBwcm9wZXJ0eSwgYnV0IGl0J3MgdGhlIG1vc3RcbiAgICAvLyBlZmZlY3RpdmUgd2F5IHRvIGFwcGx5IHN0eWxlcyB0byBhbiBIVE1MRWxlbWVudFxuICAgIC8vICRGbG93Rml4TWVbY2Fubm90LXdyaXRlXVxuICAgIE9iamVjdC5hc3NpZ24oZWxlbWVudC5zdHlsZSwgc3R5bGUpO1xuXG4gICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBhdHRyaWJ1dGVzW25hbWVdO1xuICAgICAgaWYgKHZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlID09PSB0cnVlID8gJycgOiB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBlZmZlY3QoeyBzdGF0ZSB9OiBNb2RpZmllckFyZ3VtZW50czx7fHx9Pikge1xuICBjb25zdCBpbml0aWFsU3R5bGVzID0ge1xuICAgIHBvcHBlcjoge1xuICAgICAgcG9zaXRpb246IHN0YXRlLm9wdGlvbnMuc3RyYXRlZ3ksXG4gICAgICBsZWZ0OiAnMCcsXG4gICAgICB0b3A6ICcwJyxcbiAgICAgIG1hcmdpbjogJzAnLFxuICAgIH0sXG4gICAgYXJyb3c6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIH0sXG4gICAgcmVmZXJlbmNlOiB7fSxcbiAgfTtcblxuICBPYmplY3QuYXNzaWduKHN0YXRlLmVsZW1lbnRzLnBvcHBlci5zdHlsZSwgaW5pdGlhbFN0eWxlcy5wb3BwZXIpO1xuICBzdGF0ZS5zdHlsZXMgPSBpbml0aWFsU3R5bGVzO1xuXG4gIGlmIChzdGF0ZS5lbGVtZW50cy5hcnJvdykge1xuICAgIE9iamVjdC5hc3NpZ24oc3RhdGUuZWxlbWVudHMuYXJyb3cuc3R5bGUsIGluaXRpYWxTdHlsZXMuYXJyb3cpO1xuICB9XG5cbiAgcmV0dXJuICgpID0+IHtcbiAgICBPYmplY3Qua2V5cyhzdGF0ZS5lbGVtZW50cykuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzW25hbWVdO1xuICAgICAgY29uc3QgYXR0cmlidXRlcyA9IHN0YXRlLmF0dHJpYnV0ZXNbbmFtZV0gfHwge307XG5cbiAgICAgIGNvbnN0IHN0eWxlUHJvcGVydGllcyA9IE9iamVjdC5rZXlzKFxuICAgICAgICBzdGF0ZS5zdHlsZXMuaGFzT3duUHJvcGVydHkobmFtZSlcbiAgICAgICAgICA/IHN0YXRlLnN0eWxlc1tuYW1lXVxuICAgICAgICAgIDogaW5pdGlhbFN0eWxlc1tuYW1lXVxuICAgICAgKTtcblxuICAgICAgLy8gU2V0IGFsbCB2YWx1ZXMgdG8gYW4gZW1wdHkgc3RyaW5nIHRvIHVuc2V0IHRoZW1cbiAgICAgIGNvbnN0IHN0eWxlID0gc3R5bGVQcm9wZXJ0aWVzLnJlZHVjZSgoc3R5bGUsIHByb3BlcnR5KSA9PiB7XG4gICAgICAgIHN0eWxlW3Byb3BlcnR5XSA9ICcnO1xuICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgICB9LCB7fSk7XG5cbiAgICAgIC8vIGFycm93IGlzIG9wdGlvbmFsICsgdmlydHVhbCBlbGVtZW50c1xuICAgICAgaWYgKCFpc0hUTUxFbGVtZW50KGVsZW1lbnQpIHx8ICFnZXROb2RlTmFtZShlbGVtZW50KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIE9iamVjdC5hc3NpZ24oZWxlbWVudC5zdHlsZSwgc3R5bGUpO1xuXG4gICAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKChhdHRyaWJ1dGUpID0+IHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5leHBvcnQgdHlwZSBBcHBseVN0eWxlc01vZGlmaWVyID0gTW9kaWZpZXI8J2FwcGx5U3R5bGVzJywge3x8fT47XG5leHBvcnQgZGVmYXVsdCAoe1xuICBuYW1lOiAnYXBwbHlTdHlsZXMnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ3dyaXRlJyxcbiAgZm46IGFwcGx5U3R5bGVzLFxuICBlZmZlY3QsXG4gIHJlcXVpcmVzOiBbJ2NvbXB1dGVTdHlsZXMnXSxcbn06IEFwcGx5U3R5bGVzTW9kaWZpZXIpO1xuIiwgIi8vIEBmbG93XG5pbXBvcnQgdHlwZSB7IFBsYWNlbWVudCB9IGZyb20gJy4uL2VudW1zJztcbmltcG9ydCB0eXBlIHsgTW9kaWZpZXJBcmd1bWVudHMsIE1vZGlmaWVyLCBSZWN0LCBPZmZzZXRzIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSAnLi4vdXRpbHMvZ2V0QmFzZVBsYWNlbWVudCc7XG5pbXBvcnQgeyB0b3AsIGxlZnQsIHJpZ2h0LCBwbGFjZW1lbnRzIH0gZnJvbSAnLi4vZW51bXMnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5leHBvcnQgdHlwZSBPZmZzZXRzRnVuY3Rpb24gPSAoe1xuICBwb3BwZXI6IFJlY3QsXG4gIHJlZmVyZW5jZTogUmVjdCxcbiAgcGxhY2VtZW50OiBQbGFjZW1lbnQsXG59KSA9PiBbP251bWJlciwgP251bWJlcl07XG5cbnR5cGUgT2Zmc2V0ID0gT2Zmc2V0c0Z1bmN0aW9uIHwgWz9udW1iZXIsID9udW1iZXJdO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5leHBvcnQgdHlwZSBPcHRpb25zID0ge1xuICBvZmZzZXQ6IE9mZnNldCxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXN0YW5jZUFuZFNraWRkaW5nVG9YWShcbiAgcGxhY2VtZW50OiBQbGFjZW1lbnQsXG4gIHJlY3RzOiB7IHBvcHBlcjogUmVjdCwgcmVmZXJlbmNlOiBSZWN0IH0sXG4gIG9mZnNldDogT2Zmc2V0XG4pOiBPZmZzZXRzIHtcbiAgY29uc3QgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgY29uc3QgaW52ZXJ0RGlzdGFuY2UgPSBbbGVmdCwgdG9wXS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpID49IDAgPyAtMSA6IDE7XG5cbiAgbGV0IFtza2lkZGluZywgZGlzdGFuY2VdID1cbiAgICB0eXBlb2Ygb2Zmc2V0ID09PSAnZnVuY3Rpb24nXG4gICAgICA/IG9mZnNldCh7XG4gICAgICAgICAgLi4ucmVjdHMsXG4gICAgICAgICAgcGxhY2VtZW50LFxuICAgICAgICB9KVxuICAgICAgOiBvZmZzZXQ7XG5cbiAgc2tpZGRpbmcgPSBza2lkZGluZyB8fCAwO1xuICBkaXN0YW5jZSA9IChkaXN0YW5jZSB8fCAwKSAqIGludmVydERpc3RhbmNlO1xuXG4gIHJldHVybiBbbGVmdCwgcmlnaHRdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgPj0gMFxuICAgID8geyB4OiBkaXN0YW5jZSwgeTogc2tpZGRpbmcgfVxuICAgIDogeyB4OiBza2lkZGluZywgeTogZGlzdGFuY2UgfTtcbn1cblxuZnVuY3Rpb24gb2Zmc2V0KHsgc3RhdGUsIG9wdGlvbnMsIG5hbWUgfTogTW9kaWZpZXJBcmd1bWVudHM8T3B0aW9ucz4pIHtcbiAgY29uc3QgeyBvZmZzZXQgPSBbMCwgMF0gfSA9IG9wdGlvbnM7XG5cbiAgY29uc3QgZGF0YSA9IHBsYWNlbWVudHMucmVkdWNlKChhY2MsIHBsYWNlbWVudCkgPT4ge1xuICAgIGFjY1twbGFjZW1lbnRdID0gZGlzdGFuY2VBbmRTa2lkZGluZ1RvWFkocGxhY2VtZW50LCBzdGF0ZS5yZWN0cywgb2Zmc2V0KTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG5cbiAgY29uc3QgeyB4LCB5IH0gPSBkYXRhW3N0YXRlLnBsYWNlbWVudF07XG5cbiAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyAhPSBudWxsKSB7XG4gICAgc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzLnggKz0geDtcbiAgICBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMueSArPSB5O1xuICB9XG5cbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IGRhdGE7XG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcbmV4cG9ydCB0eXBlIE9mZnNldE1vZGlmaWVyID0gTW9kaWZpZXI8J29mZnNldCcsIE9wdGlvbnM+O1xuZXhwb3J0IGRlZmF1bHQgKHtcbiAgbmFtZTogJ29mZnNldCcsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIHJlcXVpcmVzOiBbJ3BvcHBlck9mZnNldHMnXSxcbiAgZm46IG9mZnNldCxcbn06IE9mZnNldE1vZGlmaWVyKTtcbiIsICIvLyBAZmxvd1xuaW1wb3J0IHR5cGUgeyBQbGFjZW1lbnQgfSBmcm9tICcuLi9lbnVtcyc7XG5cbmNvbnN0IGhhc2ggPSB7IGxlZnQ6ICdyaWdodCcsIHJpZ2h0OiAnbGVmdCcsIGJvdHRvbTogJ3RvcCcsIHRvcDogJ2JvdHRvbScgfTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50OiBQbGFjZW1lbnQpOiBQbGFjZW1lbnQge1xuICByZXR1cm4gKHBsYWNlbWVudC5yZXBsYWNlKFxuICAgIC9sZWZ0fHJpZ2h0fGJvdHRvbXx0b3AvZyxcbiAgICBtYXRjaGVkID0+IGhhc2hbbWF0Y2hlZF1cbiAgKTogYW55KTtcbn1cbiIsICIvLyBAZmxvd1xuaW1wb3J0IHR5cGUgeyBQbGFjZW1lbnQgfSBmcm9tICcuLi9lbnVtcyc7XG5cbmNvbnN0IGhhc2ggPSB7IHN0YXJ0OiAnZW5kJywgZW5kOiAnc3RhcnQnIH07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50KFxuICBwbGFjZW1lbnQ6IFBsYWNlbWVudFxuKTogUGxhY2VtZW50IHtcbiAgcmV0dXJuIChwbGFjZW1lbnQucmVwbGFjZSgvc3RhcnR8ZW5kL2csIG1hdGNoZWQgPT4gaGFzaFttYXRjaGVkXSk6IGFueSk7XG59XG4iLCAiLy8gQGZsb3dcbmltcG9ydCB0eXBlIHsgU3RhdGUsIFBhZGRpbmcgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgdHlwZSB7XG4gIFBsYWNlbWVudCxcbiAgQ29tcHV0ZWRQbGFjZW1lbnQsXG4gIEJvdW5kYXJ5LFxuICBSb290Qm91bmRhcnksXG59IGZyb20gJy4uL2VudW1zJztcbmltcG9ydCBnZXRWYXJpYXRpb24gZnJvbSAnLi9nZXRWYXJpYXRpb24nO1xuaW1wb3J0IHtcbiAgdmFyaWF0aW9uUGxhY2VtZW50cyxcbiAgYmFzZVBsYWNlbWVudHMsXG4gIHBsYWNlbWVudHMgYXMgYWxsUGxhY2VtZW50cyxcbn0gZnJvbSAnLi4vZW51bXMnO1xuaW1wb3J0IGRldGVjdE92ZXJmbG93IGZyb20gJy4vZGV0ZWN0T3ZlcmZsb3cnO1xuaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSAnLi9nZXRCYXNlUGxhY2VtZW50JztcblxudHlwZSBPcHRpb25zID0ge1xuICBwbGFjZW1lbnQ6IFBsYWNlbWVudCxcbiAgcGFkZGluZzogUGFkZGluZyxcbiAgYm91bmRhcnk6IEJvdW5kYXJ5LFxuICByb290Qm91bmRhcnk6IFJvb3RCb3VuZGFyeSxcbiAgZmxpcFZhcmlhdGlvbnM6IGJvb2xlYW4sXG4gIGFsbG93ZWRBdXRvUGxhY2VtZW50cz86IEFycmF5PFBsYWNlbWVudD4sXG59O1xuXG50eXBlIE92ZXJmbG93c01hcCA9IHsgW0NvbXB1dGVkUGxhY2VtZW50XTogbnVtYmVyIH07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXB1dGVBdXRvUGxhY2VtZW50KFxuICBzdGF0ZTogJFNoYXBlPFN0YXRlPixcbiAgb3B0aW9uczogT3B0aW9ucyA9IHt9XG4pOiBBcnJheTxDb21wdXRlZFBsYWNlbWVudD4ge1xuICBjb25zdCB7XG4gICAgcGxhY2VtZW50LFxuICAgIGJvdW5kYXJ5LFxuICAgIHJvb3RCb3VuZGFyeSxcbiAgICBwYWRkaW5nLFxuICAgIGZsaXBWYXJpYXRpb25zLFxuICAgIGFsbG93ZWRBdXRvUGxhY2VtZW50cyA9IGFsbFBsYWNlbWVudHMsXG4gIH0gPSBvcHRpb25zO1xuXG4gIGNvbnN0IHZhcmlhdGlvbiA9IGdldFZhcmlhdGlvbihwbGFjZW1lbnQpO1xuXG4gIGNvbnN0IHBsYWNlbWVudHMgPSB2YXJpYXRpb25cbiAgICA/IGZsaXBWYXJpYXRpb25zXG4gICAgICA/IHZhcmlhdGlvblBsYWNlbWVudHNcbiAgICAgIDogdmFyaWF0aW9uUGxhY2VtZW50cy5maWx0ZXIoXG4gICAgICAgICAgKHBsYWNlbWVudCkgPT4gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkgPT09IHZhcmlhdGlvblxuICAgICAgICApXG4gICAgOiBiYXNlUGxhY2VtZW50cztcblxuICBsZXQgYWxsb3dlZFBsYWNlbWVudHMgPSBwbGFjZW1lbnRzLmZpbHRlcihcbiAgICAocGxhY2VtZW50KSA9PiBhbGxvd2VkQXV0b1BsYWNlbWVudHMuaW5kZXhPZihwbGFjZW1lbnQpID49IDBcbiAgKTtcblxuICBpZiAoYWxsb3dlZFBsYWNlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgYWxsb3dlZFBsYWNlbWVudHMgPSBwbGFjZW1lbnRzO1xuICB9XG5cbiAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtdHlwZV06IEZsb3cgc2VlbXMgdG8gaGF2ZSBwcm9ibGVtcyB3aXRoIHR3byBhcnJheSB1bmlvbnMuLi5cbiAgY29uc3Qgb3ZlcmZsb3dzOiBPdmVyZmxvd3NNYXAgPSBhbGxvd2VkUGxhY2VtZW50cy5yZWR1Y2UoKGFjYywgcGxhY2VtZW50KSA9PiB7XG4gICAgYWNjW3BsYWNlbWVudF0gPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgICAgcGxhY2VtZW50LFxuICAgICAgYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnksXG4gICAgICBwYWRkaW5nLFxuICAgIH0pW2dldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KV07XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG5cbiAgcmV0dXJuIE9iamVjdC5rZXlzKG92ZXJmbG93cykuc29ydCgoYSwgYikgPT4gb3ZlcmZsb3dzW2FdIC0gb3ZlcmZsb3dzW2JdKTtcbn1cbiIsICIvLyBAZmxvd1xuaW1wb3J0IHR5cGUgeyBQbGFjZW1lbnQsIEJvdW5kYXJ5LCBSb290Qm91bmRhcnkgfSBmcm9tICcuLi9lbnVtcyc7XG5pbXBvcnQgdHlwZSB7IE1vZGlmaWVyQXJndW1lbnRzLCBNb2RpZmllciwgUGFkZGluZyB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCBnZXRPcHBvc2l0ZVBsYWNlbWVudCBmcm9tICcuLi91dGlscy9nZXRPcHBvc2l0ZVBsYWNlbWVudCc7XG5pbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tICcuLi91dGlscy9nZXRCYXNlUGxhY2VtZW50JztcbmltcG9ydCBnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudCBmcm9tICcuLi91dGlscy9nZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudCc7XG5pbXBvcnQgZGV0ZWN0T3ZlcmZsb3cgZnJvbSAnLi4vdXRpbHMvZGV0ZWN0T3ZlcmZsb3cnO1xuaW1wb3J0IGNvbXB1dGVBdXRvUGxhY2VtZW50IGZyb20gJy4uL3V0aWxzL2NvbXB1dGVBdXRvUGxhY2VtZW50JztcbmltcG9ydCB7IGJvdHRvbSwgdG9wLCBzdGFydCwgcmlnaHQsIGxlZnQsIGF1dG8gfSBmcm9tICcuLi9lbnVtcyc7XG5pbXBvcnQgZ2V0VmFyaWF0aW9uIGZyb20gJy4uL3V0aWxzL2dldFZhcmlhdGlvbic7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcbmV4cG9ydCB0eXBlIE9wdGlvbnMgPSB7XG4gIG1haW5BeGlzOiBib29sZWFuLFxuICBhbHRBeGlzOiBib29sZWFuLFxuICBmYWxsYmFja1BsYWNlbWVudHM6IEFycmF5PFBsYWNlbWVudD4sXG4gIHBhZGRpbmc6IFBhZGRpbmcsXG4gIGJvdW5kYXJ5OiBCb3VuZGFyeSxcbiAgcm9vdEJvdW5kYXJ5OiBSb290Qm91bmRhcnksXG4gIGFsdEJvdW5kYXJ5OiBib29sZWFuLFxuICBmbGlwVmFyaWF0aW9uczogYm9vbGVhbixcbiAgYWxsb3dlZEF1dG9QbGFjZW1lbnRzOiBBcnJheTxQbGFjZW1lbnQ+LFxufTtcblxuZnVuY3Rpb24gZ2V0RXhwYW5kZWRGYWxsYmFja1BsYWNlbWVudHMocGxhY2VtZW50OiBQbGFjZW1lbnQpOiBBcnJheTxQbGFjZW1lbnQ+IHtcbiAgaWYgKGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KSA9PT0gYXV0bykge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGNvbnN0IG9wcG9zaXRlUGxhY2VtZW50ID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KTtcblxuICByZXR1cm4gW1xuICAgIGdldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50KHBsYWNlbWVudCksXG4gICAgb3Bwb3NpdGVQbGFjZW1lbnQsXG4gICAgZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQob3Bwb3NpdGVQbGFjZW1lbnQpLFxuICBdO1xufVxuXG5mdW5jdGlvbiBmbGlwKHsgc3RhdGUsIG9wdGlvbnMsIG5hbWUgfTogTW9kaWZpZXJBcmd1bWVudHM8T3B0aW9ucz4pIHtcbiAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0uX3NraXApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCB7XG4gICAgbWFpbkF4aXM6IGNoZWNrTWFpbkF4aXMgPSB0cnVlLFxuICAgIGFsdEF4aXM6IGNoZWNrQWx0QXhpcyA9IHRydWUsXG4gICAgZmFsbGJhY2tQbGFjZW1lbnRzOiBzcGVjaWZpZWRGYWxsYmFja1BsYWNlbWVudHMsXG4gICAgcGFkZGluZyxcbiAgICBib3VuZGFyeSxcbiAgICByb290Qm91bmRhcnksXG4gICAgYWx0Qm91bmRhcnksXG4gICAgZmxpcFZhcmlhdGlvbnMgPSB0cnVlLFxuICAgIGFsbG93ZWRBdXRvUGxhY2VtZW50cyxcbiAgfSA9IG9wdGlvbnM7XG5cbiAgY29uc3QgcHJlZmVycmVkUGxhY2VtZW50ID0gc3RhdGUub3B0aW9ucy5wbGFjZW1lbnQ7XG4gIGNvbnN0IGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHByZWZlcnJlZFBsYWNlbWVudCk7XG4gIGNvbnN0IGlzQmFzZVBsYWNlbWVudCA9IGJhc2VQbGFjZW1lbnQgPT09IHByZWZlcnJlZFBsYWNlbWVudDtcblxuICBjb25zdCBmYWxsYmFja1BsYWNlbWVudHMgPVxuICAgIHNwZWNpZmllZEZhbGxiYWNrUGxhY2VtZW50cyB8fFxuICAgIChpc0Jhc2VQbGFjZW1lbnQgfHwgIWZsaXBWYXJpYXRpb25zXG4gICAgICA/IFtnZXRPcHBvc2l0ZVBsYWNlbWVudChwcmVmZXJyZWRQbGFjZW1lbnQpXVxuICAgICAgOiBnZXRFeHBhbmRlZEZhbGxiYWNrUGxhY2VtZW50cyhwcmVmZXJyZWRQbGFjZW1lbnQpKTtcblxuICBjb25zdCBwbGFjZW1lbnRzID0gW3ByZWZlcnJlZFBsYWNlbWVudCwgLi4uZmFsbGJhY2tQbGFjZW1lbnRzXS5yZWR1Y2UoXG4gICAgKGFjYywgcGxhY2VtZW50KSA9PiB7XG4gICAgICByZXR1cm4gYWNjLmNvbmNhdChcbiAgICAgICAgZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpID09PSBhdXRvXG4gICAgICAgICAgPyBjb21wdXRlQXV0b1BsYWNlbWVudChzdGF0ZSwge1xuICAgICAgICAgICAgICBwbGFjZW1lbnQsXG4gICAgICAgICAgICAgIGJvdW5kYXJ5LFxuICAgICAgICAgICAgICByb290Qm91bmRhcnksXG4gICAgICAgICAgICAgIHBhZGRpbmcsXG4gICAgICAgICAgICAgIGZsaXBWYXJpYXRpb25zLFxuICAgICAgICAgICAgICBhbGxvd2VkQXV0b1BsYWNlbWVudHMsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIDogcGxhY2VtZW50XG4gICAgICApO1xuICAgIH0sXG4gICAgW11cbiAgKTtcblxuICBjb25zdCByZWZlcmVuY2VSZWN0ID0gc3RhdGUucmVjdHMucmVmZXJlbmNlO1xuICBjb25zdCBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuXG4gIGNvbnN0IGNoZWNrc01hcCA9IG5ldyBNYXAoKTtcbiAgbGV0IG1ha2VGYWxsYmFja0NoZWNrcyA9IHRydWU7XG4gIGxldCBmaXJzdEZpdHRpbmdQbGFjZW1lbnQgPSBwbGFjZW1lbnRzWzBdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGxhY2VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHBsYWNlbWVudCA9IHBsYWNlbWVudHNbaV07XG4gICAgY29uc3QgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgICBjb25zdCBpc1N0YXJ0VmFyaWF0aW9uID0gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkgPT09IHN0YXJ0O1xuICAgIGNvbnN0IGlzVmVydGljYWwgPSBbdG9wLCBib3R0b21dLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgPj0gMDtcbiAgICBjb25zdCBsZW4gPSBpc1ZlcnRpY2FsID8gJ3dpZHRoJyA6ICdoZWlnaHQnO1xuXG4gICAgY29uc3Qgb3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgICAgcGxhY2VtZW50LFxuICAgICAgYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnksXG4gICAgICBhbHRCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmcsXG4gICAgfSk7XG5cbiAgICBsZXQgbWFpblZhcmlhdGlvblNpZGU6IGFueSA9IGlzVmVydGljYWxcbiAgICAgID8gaXNTdGFydFZhcmlhdGlvblxuICAgICAgICA/IHJpZ2h0XG4gICAgICAgIDogbGVmdFxuICAgICAgOiBpc1N0YXJ0VmFyaWF0aW9uXG4gICAgICA/IGJvdHRvbVxuICAgICAgOiB0b3A7XG5cbiAgICBpZiAocmVmZXJlbmNlUmVjdFtsZW5dID4gcG9wcGVyUmVjdFtsZW5dKSB7XG4gICAgICBtYWluVmFyaWF0aW9uU2lkZSA9IGdldE9wcG9zaXRlUGxhY2VtZW50KG1haW5WYXJpYXRpb25TaWRlKTtcbiAgICB9XG5cbiAgICBjb25zdCBhbHRWYXJpYXRpb25TaWRlOiBhbnkgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChtYWluVmFyaWF0aW9uU2lkZSk7XG5cbiAgICBjb25zdCBjaGVja3MgPSBbXTtcblxuICAgIGlmIChjaGVja01haW5BeGlzKSB7XG4gICAgICBjaGVja3MucHVzaChvdmVyZmxvd1tiYXNlUGxhY2VtZW50XSA8PSAwKTtcbiAgICB9XG5cbiAgICBpZiAoY2hlY2tBbHRBeGlzKSB7XG4gICAgICBjaGVja3MucHVzaChcbiAgICAgICAgb3ZlcmZsb3dbbWFpblZhcmlhdGlvblNpZGVdIDw9IDAsXG4gICAgICAgIG92ZXJmbG93W2FsdFZhcmlhdGlvblNpZGVdIDw9IDBcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKGNoZWNrcy5ldmVyeSgoY2hlY2spID0+IGNoZWNrKSkge1xuICAgICAgZmlyc3RGaXR0aW5nUGxhY2VtZW50ID0gcGxhY2VtZW50O1xuICAgICAgbWFrZUZhbGxiYWNrQ2hlY2tzID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjaGVja3NNYXAuc2V0KHBsYWNlbWVudCwgY2hlY2tzKTtcbiAgfVxuXG4gIGlmIChtYWtlRmFsbGJhY2tDaGVja3MpIHtcbiAgICAvLyBgMmAgbWF5IGJlIGRlc2lyZWQgaW4gc29tZSBjYXNlcyDigJMgcmVzZWFyY2ggbGF0ZXJcbiAgICBjb25zdCBudW1iZXJPZkNoZWNrcyA9IGZsaXBWYXJpYXRpb25zID8gMyA6IDE7XG5cbiAgICBmb3IgKGxldCBpID0gbnVtYmVyT2ZDaGVja3M7IGkgPiAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGZpdHRpbmdQbGFjZW1lbnQgPSBwbGFjZW1lbnRzLmZpbmQoKHBsYWNlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCBjaGVja3MgPSBjaGVja3NNYXAuZ2V0KHBsYWNlbWVudCk7XG4gICAgICAgIGlmIChjaGVja3MpIHtcbiAgICAgICAgICByZXR1cm4gY2hlY2tzLnNsaWNlKDAsIGkpLmV2ZXJ5KChjaGVjaykgPT4gY2hlY2spO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKGZpdHRpbmdQbGFjZW1lbnQpIHtcbiAgICAgICAgZmlyc3RGaXR0aW5nUGxhY2VtZW50ID0gZml0dGluZ1BsYWNlbWVudDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHN0YXRlLnBsYWNlbWVudCAhPT0gZmlyc3RGaXR0aW5nUGxhY2VtZW50KSB7XG4gICAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXS5fc2tpcCA9IHRydWU7XG4gICAgc3RhdGUucGxhY2VtZW50ID0gZmlyc3RGaXR0aW5nUGxhY2VtZW50O1xuICAgIHN0YXRlLnJlc2V0ID0gdHJ1ZTtcbiAgfVxufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5leHBvcnQgdHlwZSBGbGlwTW9kaWZpZXIgPSBNb2RpZmllcjwnZmxpcCcsIE9wdGlvbnM+O1xuZXhwb3J0IGRlZmF1bHQgKHtcbiAgbmFtZTogJ2ZsaXAnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICBmbjogZmxpcCxcbiAgcmVxdWlyZXNJZkV4aXN0czogWydvZmZzZXQnXSxcbiAgZGF0YTogeyBfc2tpcDogZmFsc2UgfSxcbn06IEZsaXBNb2RpZmllcik7XG4iLCAiLy8gQGZsb3dcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0QWx0QXhpcyhheGlzOiAneCcgfCAneScpOiAneCcgfCAneScge1xuICByZXR1cm4gYXhpcyA9PT0gJ3gnID8gJ3knIDogJ3gnO1xufVxuIiwgIi8vIEBmbG93XG5pbXBvcnQgeyBtYXggYXMgbWF0aE1heCwgbWluIGFzIG1hdGhNaW4gfSBmcm9tICcuL21hdGgnO1xuXG5leHBvcnQgZnVuY3Rpb24gd2l0aGluKG1pbjogbnVtYmVyLCB2YWx1ZTogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBtYXRoTWF4KG1pbiwgbWF0aE1pbih2YWx1ZSwgbWF4KSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3aXRoaW5NYXhDbGFtcChtaW46IG51bWJlciwgdmFsdWU6IG51bWJlciwgbWF4OiBudW1iZXIpIHtcbiAgY29uc3QgdiA9IHdpdGhpbihtaW4sIHZhbHVlLCBtYXgpO1xuICByZXR1cm4gdiA+IG1heCA/IG1heCA6IHY7XG59XG4iLCAiLy8gQGZsb3dcbmltcG9ydCB7IHRvcCwgbGVmdCwgcmlnaHQsIGJvdHRvbSwgc3RhcnQgfSBmcm9tICcuLi9lbnVtcyc7XG5pbXBvcnQgdHlwZSB7IFBsYWNlbWVudCwgQm91bmRhcnksIFJvb3RCb3VuZGFyeSB9IGZyb20gJy4uL2VudW1zJztcbmltcG9ydCB0eXBlIHsgUmVjdCwgTW9kaWZpZXJBcmd1bWVudHMsIE1vZGlmaWVyLCBQYWRkaW5nIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IGdldEJhc2VQbGFjZW1lbnQgZnJvbSAnLi4vdXRpbHMvZ2V0QmFzZVBsYWNlbWVudCc7XG5pbXBvcnQgZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50IGZyb20gJy4uL3V0aWxzL2dldE1haW5BeGlzRnJvbVBsYWNlbWVudCc7XG5pbXBvcnQgZ2V0QWx0QXhpcyBmcm9tICcuLi91dGlscy9nZXRBbHRBeGlzJztcbmltcG9ydCB7IHdpdGhpbiwgd2l0aGluTWF4Q2xhbXAgfSBmcm9tICcuLi91dGlscy93aXRoaW4nO1xuaW1wb3J0IGdldExheW91dFJlY3QgZnJvbSAnLi4vZG9tLXV0aWxzL2dldExheW91dFJlY3QnO1xuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tICcuLi9kb20tdXRpbHMvZ2V0T2Zmc2V0UGFyZW50JztcbmltcG9ydCBkZXRlY3RPdmVyZmxvdyBmcm9tICcuLi91dGlscy9kZXRlY3RPdmVyZmxvdyc7XG5pbXBvcnQgZ2V0VmFyaWF0aW9uIGZyb20gJy4uL3V0aWxzL2dldFZhcmlhdGlvbic7XG5pbXBvcnQgZ2V0RnJlc2hTaWRlT2JqZWN0IGZyb20gJy4uL3V0aWxzL2dldEZyZXNoU2lkZU9iamVjdCc7XG5pbXBvcnQgeyBtaW4gYXMgbWF0aE1pbiwgbWF4IGFzIG1hdGhNYXggfSBmcm9tICcuLi91dGlscy9tYXRoJztcblxudHlwZSBUZXRoZXJPZmZzZXQgPVxuICB8ICgoe1xuICAgICAgcG9wcGVyOiBSZWN0LFxuICAgICAgcmVmZXJlbmNlOiBSZWN0LFxuICAgICAgcGxhY2VtZW50OiBQbGFjZW1lbnQsXG4gICAgfSkgPT4gbnVtYmVyIHwgeyBtYWluQXhpczogbnVtYmVyLCBhbHRBeGlzOiBudW1iZXIgfSlcbiAgfCBudW1iZXJcbiAgfCB7IG1haW5BeGlzOiBudW1iZXIsIGFsdEF4aXM6IG51bWJlciB9O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5leHBvcnQgdHlwZSBPcHRpb25zID0ge1xuICAvKiBQcmV2ZW50cyBib3VuZGFyaWVzIG92ZXJmbG93IG9uIHRoZSBtYWluIGF4aXMgKi9cbiAgbWFpbkF4aXM6IGJvb2xlYW4sXG4gIC8qIFByZXZlbnRzIGJvdW5kYXJpZXMgb3ZlcmZsb3cgb24gdGhlIGFsdGVybmF0ZSBheGlzICovXG4gIGFsdEF4aXM6IGJvb2xlYW4sXG4gIC8qIFRoZSBhcmVhIHRvIGNoZWNrIHRoZSBwb3BwZXIgaXMgb3ZlcmZsb3dpbmcgaW4gKi9cbiAgYm91bmRhcnk6IEJvdW5kYXJ5LFxuICAvKiBJZiB0aGUgcG9wcGVyIGlzIG5vdCBvdmVyZmxvd2luZyB0aGUgbWFpbiBhcmVhLCBmYWxsYmFjayB0byB0aGlzIG9uZSAqL1xuICByb290Qm91bmRhcnk6IFJvb3RCb3VuZGFyeSxcbiAgLyogVXNlIHRoZSByZWZlcmVuY2UncyBcImNsaXBwaW5nUGFyZW50c1wiIGJvdW5kYXJ5IGNvbnRleHQgKi9cbiAgYWx0Qm91bmRhcnk6IGJvb2xlYW4sXG4gIC8qKlxuICAgKiBBbGxvd3MgdGhlIHBvcHBlciB0byBvdmVyZmxvdyBmcm9tIGl0cyBib3VuZGFyaWVzIHRvIGtlZXAgaXQgbmVhciBpdHNcbiAgICogcmVmZXJlbmNlIGVsZW1lbnRcbiAgICovXG4gIHRldGhlcjogYm9vbGVhbixcbiAgLyogT2Zmc2V0cyB3aGVuIHRoZSBgdGV0aGVyYCBvcHRpb24gc2hvdWxkIGFjdGl2YXRlICovXG4gIHRldGhlck9mZnNldDogVGV0aGVyT2Zmc2V0LFxuICAvKiBTZXRzIGEgcGFkZGluZyB0byB0aGUgcHJvdmlkZWQgYm91bmRhcnkgKi9cbiAgcGFkZGluZzogUGFkZGluZyxcbn07XG5cbmZ1bmN0aW9uIHByZXZlbnRPdmVyZmxvdyh7IHN0YXRlLCBvcHRpb25zLCBuYW1lIH06IE1vZGlmaWVyQXJndW1lbnRzPE9wdGlvbnM+KSB7XG4gIGNvbnN0IHtcbiAgICBtYWluQXhpczogY2hlY2tNYWluQXhpcyA9IHRydWUsXG4gICAgYWx0QXhpczogY2hlY2tBbHRBeGlzID0gZmFsc2UsXG4gICAgYm91bmRhcnksXG4gICAgcm9vdEJvdW5kYXJ5LFxuICAgIGFsdEJvdW5kYXJ5LFxuICAgIHBhZGRpbmcsXG4gICAgdGV0aGVyID0gdHJ1ZSxcbiAgICB0ZXRoZXJPZmZzZXQgPSAwLFxuICB9ID0gb3B0aW9ucztcblxuICBjb25zdCBvdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgYm91bmRhcnksXG4gICAgcm9vdEJvdW5kYXJ5LFxuICAgIHBhZGRpbmcsXG4gICAgYWx0Qm91bmRhcnksXG4gIH0pO1xuICBjb25zdCBiYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChzdGF0ZS5wbGFjZW1lbnQpO1xuICBjb25zdCB2YXJpYXRpb24gPSBnZXRWYXJpYXRpb24oc3RhdGUucGxhY2VtZW50KTtcbiAgY29uc3QgaXNCYXNlUGxhY2VtZW50ID0gIXZhcmlhdGlvbjtcbiAgY29uc3QgbWFpbkF4aXMgPSBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQoYmFzZVBsYWNlbWVudCk7XG4gIGNvbnN0IGFsdEF4aXMgPSBnZXRBbHRBeGlzKG1haW5BeGlzKTtcbiAgY29uc3QgcG9wcGVyT2Zmc2V0cyA9IHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cztcbiAgY29uc3QgcmVmZXJlbmNlUmVjdCA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZTtcbiAgY29uc3QgcG9wcGVyUmVjdCA9IHN0YXRlLnJlY3RzLnBvcHBlcjtcbiAgY29uc3QgdGV0aGVyT2Zmc2V0VmFsdWUgPVxuICAgIHR5cGVvZiB0ZXRoZXJPZmZzZXQgPT09ICdmdW5jdGlvbidcbiAgICAgID8gdGV0aGVyT2Zmc2V0KHtcbiAgICAgICAgICAuLi5zdGF0ZS5yZWN0cyxcbiAgICAgICAgICBwbGFjZW1lbnQ6IHN0YXRlLnBsYWNlbWVudCxcbiAgICAgICAgfSlcbiAgICAgIDogdGV0aGVyT2Zmc2V0O1xuICBjb25zdCBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUgPVxuICAgIHR5cGVvZiB0ZXRoZXJPZmZzZXRWYWx1ZSA9PT0gJ251bWJlcidcbiAgICAgID8geyBtYWluQXhpczogdGV0aGVyT2Zmc2V0VmFsdWUsIGFsdEF4aXM6IHRldGhlck9mZnNldFZhbHVlIH1cbiAgICAgIDogeyBtYWluQXhpczogMCwgYWx0QXhpczogMCwgLi4udGV0aGVyT2Zmc2V0VmFsdWUgfTtcbiAgY29uc3Qgb2Zmc2V0TW9kaWZpZXJTdGF0ZSA9IHN0YXRlLm1vZGlmaWVyc0RhdGEub2Zmc2V0XG4gICAgPyBzdGF0ZS5tb2RpZmllcnNEYXRhLm9mZnNldFtzdGF0ZS5wbGFjZW1lbnRdXG4gICAgOiBudWxsO1xuXG4gIGNvbnN0IGRhdGEgPSB7IHg6IDAsIHk6IDAgfTtcblxuICBpZiAoIXBvcHBlck9mZnNldHMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoY2hlY2tNYWluQXhpcykge1xuICAgIGNvbnN0IG1haW5TaWRlID0gbWFpbkF4aXMgPT09ICd5JyA/IHRvcCA6IGxlZnQ7XG4gICAgY29uc3QgYWx0U2lkZSA9IG1haW5BeGlzID09PSAneScgPyBib3R0b20gOiByaWdodDtcbiAgICBjb25zdCBsZW4gPSBtYWluQXhpcyA9PT0gJ3knID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuICAgIGNvbnN0IG9mZnNldCA9IHBvcHBlck9mZnNldHNbbWFpbkF4aXNdO1xuXG4gICAgY29uc3QgbWluID0gb2Zmc2V0ICsgb3ZlcmZsb3dbbWFpblNpZGVdO1xuICAgIGNvbnN0IG1heCA9IG9mZnNldCAtIG92ZXJmbG93W2FsdFNpZGVdO1xuXG4gICAgY29uc3QgYWRkaXRpdmUgPSB0ZXRoZXIgPyAtcG9wcGVyUmVjdFtsZW5dIC8gMiA6IDA7XG5cbiAgICBjb25zdCBtaW5MZW4gPSB2YXJpYXRpb24gPT09IHN0YXJ0ID8gcmVmZXJlbmNlUmVjdFtsZW5dIDogcG9wcGVyUmVjdFtsZW5dO1xuICAgIGNvbnN0IG1heExlbiA9IHZhcmlhdGlvbiA9PT0gc3RhcnQgPyAtcG9wcGVyUmVjdFtsZW5dIDogLXJlZmVyZW5jZVJlY3RbbGVuXTtcblxuICAgIC8vIFdlIG5lZWQgdG8gaW5jbHVkZSB0aGUgYXJyb3cgaW4gdGhlIGNhbGN1bGF0aW9uIHNvIHRoZSBhcnJvdyBkb2Vzbid0IGdvXG4gICAgLy8gb3V0c2lkZSB0aGUgcmVmZXJlbmNlIGJvdW5kc1xuICAgIGNvbnN0IGFycm93RWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzLmFycm93O1xuICAgIGNvbnN0IGFycm93UmVjdCA9XG4gICAgICB0ZXRoZXIgJiYgYXJyb3dFbGVtZW50XG4gICAgICAgID8gZ2V0TGF5b3V0UmVjdChhcnJvd0VsZW1lbnQpXG4gICAgICAgIDogeyB3aWR0aDogMCwgaGVpZ2h0OiAwIH07XG4gICAgY29uc3QgYXJyb3dQYWRkaW5nT2JqZWN0ID0gc3RhdGUubW9kaWZpZXJzRGF0YVsnYXJyb3cjcGVyc2lzdGVudCddXG4gICAgICA/IHN0YXRlLm1vZGlmaWVyc0RhdGFbJ2Fycm93I3BlcnNpc3RlbnQnXS5wYWRkaW5nXG4gICAgICA6IGdldEZyZXNoU2lkZU9iamVjdCgpO1xuICAgIGNvbnN0IGFycm93UGFkZGluZ01pbiA9IGFycm93UGFkZGluZ09iamVjdFttYWluU2lkZV07XG4gICAgY29uc3QgYXJyb3dQYWRkaW5nTWF4ID0gYXJyb3dQYWRkaW5nT2JqZWN0W2FsdFNpZGVdO1xuXG4gICAgLy8gSWYgdGhlIHJlZmVyZW5jZSBsZW5ndGggaXMgc21hbGxlciB0aGFuIHRoZSBhcnJvdyBsZW5ndGgsIHdlIGRvbid0IHdhbnRcbiAgICAvLyB0byBpbmNsdWRlIGl0cyBmdWxsIHNpemUgaW4gdGhlIGNhbGN1bGF0aW9uLiBJZiB0aGUgcmVmZXJlbmNlIGlzIHNtYWxsXG4gICAgLy8gYW5kIG5lYXIgdGhlIGVkZ2Ugb2YgYSBib3VuZGFyeSwgdGhlIHBvcHBlciBjYW4gb3ZlcmZsb3cgZXZlbiBpZiB0aGVcbiAgICAvLyByZWZlcmVuY2UgaXMgbm90IG92ZXJmbG93aW5nIGFzIHdlbGwgKGUuZy4gdmlydHVhbCBlbGVtZW50cyB3aXRoIG5vXG4gICAgLy8gd2lkdGggb3IgaGVpZ2h0KVxuICAgIGNvbnN0IGFycm93TGVuID0gd2l0aGluKDAsIHJlZmVyZW5jZVJlY3RbbGVuXSwgYXJyb3dSZWN0W2xlbl0pO1xuXG4gICAgY29uc3QgbWluT2Zmc2V0ID0gaXNCYXNlUGxhY2VtZW50XG4gICAgICA/IHJlZmVyZW5jZVJlY3RbbGVuXSAvIDIgLVxuICAgICAgICBhZGRpdGl2ZSAtXG4gICAgICAgIGFycm93TGVuIC1cbiAgICAgICAgYXJyb3dQYWRkaW5nTWluIC1cbiAgICAgICAgbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlLm1haW5BeGlzXG4gICAgICA6IG1pbkxlbiAtXG4gICAgICAgIGFycm93TGVuIC1cbiAgICAgICAgYXJyb3dQYWRkaW5nTWluIC1cbiAgICAgICAgbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlLm1haW5BeGlzO1xuICAgIGNvbnN0IG1heE9mZnNldCA9IGlzQmFzZVBsYWNlbWVudFxuICAgICAgPyAtcmVmZXJlbmNlUmVjdFtsZW5dIC8gMiArXG4gICAgICAgIGFkZGl0aXZlICtcbiAgICAgICAgYXJyb3dMZW4gK1xuICAgICAgICBhcnJvd1BhZGRpbmdNYXggK1xuICAgICAgICBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUubWFpbkF4aXNcbiAgICAgIDogbWF4TGVuICtcbiAgICAgICAgYXJyb3dMZW4gK1xuICAgICAgICBhcnJvd1BhZGRpbmdNYXggK1xuICAgICAgICBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUubWFpbkF4aXM7XG5cbiAgICBjb25zdCBhcnJvd09mZnNldFBhcmVudCA9XG4gICAgICBzdGF0ZS5lbGVtZW50cy5hcnJvdyAmJiBnZXRPZmZzZXRQYXJlbnQoc3RhdGUuZWxlbWVudHMuYXJyb3cpO1xuICAgIGNvbnN0IGNsaWVudE9mZnNldCA9IGFycm93T2Zmc2V0UGFyZW50XG4gICAgICA/IG1haW5BeGlzID09PSAneSdcbiAgICAgICAgPyBhcnJvd09mZnNldFBhcmVudC5jbGllbnRUb3AgfHwgMFxuICAgICAgICA6IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudExlZnQgfHwgMFxuICAgICAgOiAwO1xuXG4gICAgY29uc3Qgb2Zmc2V0TW9kaWZpZXJWYWx1ZSA9IG9mZnNldE1vZGlmaWVyU3RhdGU/LlttYWluQXhpc10gPz8gMDtcbiAgICBjb25zdCB0ZXRoZXJNaW4gPSBvZmZzZXQgKyBtaW5PZmZzZXQgLSBvZmZzZXRNb2RpZmllclZhbHVlIC0gY2xpZW50T2Zmc2V0O1xuICAgIGNvbnN0IHRldGhlck1heCA9IG9mZnNldCArIG1heE9mZnNldCAtIG9mZnNldE1vZGlmaWVyVmFsdWU7XG5cbiAgICBjb25zdCBwcmV2ZW50ZWRPZmZzZXQgPSB3aXRoaW4oXG4gICAgICB0ZXRoZXIgPyBtYXRoTWluKG1pbiwgdGV0aGVyTWluKSA6IG1pbixcbiAgICAgIG9mZnNldCxcbiAgICAgIHRldGhlciA/IG1hdGhNYXgobWF4LCB0ZXRoZXJNYXgpIDogbWF4XG4gICAgKTtcblxuICAgIHBvcHBlck9mZnNldHNbbWFpbkF4aXNdID0gcHJldmVudGVkT2Zmc2V0O1xuICAgIGRhdGFbbWFpbkF4aXNdID0gcHJldmVudGVkT2Zmc2V0IC0gb2Zmc2V0O1xuICB9XG5cbiAgaWYgKGNoZWNrQWx0QXhpcykge1xuICAgIGNvbnN0IG1haW5TaWRlID0gbWFpbkF4aXMgPT09ICd4JyA/IHRvcCA6IGxlZnQ7XG4gICAgY29uc3QgYWx0U2lkZSA9IG1haW5BeGlzID09PSAneCcgPyBib3R0b20gOiByaWdodDtcbiAgICBjb25zdCBvZmZzZXQgPSBwb3BwZXJPZmZzZXRzW2FsdEF4aXNdO1xuXG4gICAgY29uc3QgbGVuID0gYWx0QXhpcyA9PT0gJ3knID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuXG4gICAgY29uc3QgbWluID0gb2Zmc2V0ICsgb3ZlcmZsb3dbbWFpblNpZGVdO1xuICAgIGNvbnN0IG1heCA9IG9mZnNldCAtIG92ZXJmbG93W2FsdFNpZGVdO1xuXG4gICAgY29uc3QgaXNPcmlnaW5TaWRlID0gW3RvcCwgbGVmdF0uaW5kZXhPZihiYXNlUGxhY2VtZW50KSAhPT0gLTE7XG5cbiAgICBjb25zdCBvZmZzZXRNb2RpZmllclZhbHVlID0gb2Zmc2V0TW9kaWZpZXJTdGF0ZT8uW2FsdEF4aXNdID8/IDA7XG4gICAgY29uc3QgdGV0aGVyTWluID0gaXNPcmlnaW5TaWRlXG4gICAgICA/IG1pblxuICAgICAgOiBvZmZzZXQgLVxuICAgICAgICByZWZlcmVuY2VSZWN0W2xlbl0gLVxuICAgICAgICBwb3BwZXJSZWN0W2xlbl0gLVxuICAgICAgICBvZmZzZXRNb2RpZmllclZhbHVlICtcbiAgICAgICAgbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlLmFsdEF4aXM7XG4gICAgY29uc3QgdGV0aGVyTWF4ID0gaXNPcmlnaW5TaWRlXG4gICAgICA/IG9mZnNldCArXG4gICAgICAgIHJlZmVyZW5jZVJlY3RbbGVuXSArXG4gICAgICAgIHBvcHBlclJlY3RbbGVuXSAtXG4gICAgICAgIG9mZnNldE1vZGlmaWVyVmFsdWUgLVxuICAgICAgICBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUuYWx0QXhpc1xuICAgICAgOiBtYXg7XG5cbiAgICBjb25zdCBwcmV2ZW50ZWRPZmZzZXQgPVxuICAgICAgdGV0aGVyICYmIGlzT3JpZ2luU2lkZVxuICAgICAgICA/IHdpdGhpbk1heENsYW1wKHRldGhlck1pbiwgb2Zmc2V0LCB0ZXRoZXJNYXgpXG4gICAgICAgIDogd2l0aGluKHRldGhlciA/IHRldGhlck1pbiA6IG1pbiwgb2Zmc2V0LCB0ZXRoZXIgPyB0ZXRoZXJNYXggOiBtYXgpO1xuXG4gICAgcG9wcGVyT2Zmc2V0c1thbHRBeGlzXSA9IHByZXZlbnRlZE9mZnNldDtcbiAgICBkYXRhW2FsdEF4aXNdID0gcHJldmVudGVkT2Zmc2V0IC0gb2Zmc2V0O1xuICB9XG5cbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IGRhdGE7XG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcbmV4cG9ydCB0eXBlIFByZXZlbnRPdmVyZmxvd01vZGlmaWVyID0gTW9kaWZpZXI8J3ByZXZlbnRPdmVyZmxvdycsIE9wdGlvbnM+O1xuZXhwb3J0IGRlZmF1bHQgKHtcbiAgbmFtZTogJ3ByZXZlbnRPdmVyZmxvdycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIGZuOiBwcmV2ZW50T3ZlcmZsb3csXG4gIHJlcXVpcmVzSWZFeGlzdHM6IFsnb2Zmc2V0J10sXG59OiBQcmV2ZW50T3ZlcmZsb3dNb2RpZmllcik7XG4iLCAiLy8gQGZsb3dcbmltcG9ydCB0eXBlIHsgTW9kaWZpZXIsIE1vZGlmaWVyQXJndW1lbnRzLCBQYWRkaW5nLCBSZWN0IH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHR5cGUgeyBQbGFjZW1lbnQgfSBmcm9tICcuLi9lbnVtcyc7XG5pbXBvcnQgZ2V0QmFzZVBsYWNlbWVudCBmcm9tICcuLi91dGlscy9nZXRCYXNlUGxhY2VtZW50JztcbmltcG9ydCBnZXRMYXlvdXRSZWN0IGZyb20gJy4uL2RvbS11dGlscy9nZXRMYXlvdXRSZWN0JztcbmltcG9ydCBjb250YWlucyBmcm9tICcuLi9kb20tdXRpbHMvY29udGFpbnMnO1xuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tICcuLi9kb20tdXRpbHMvZ2V0T2Zmc2V0UGFyZW50JztcbmltcG9ydCBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQgZnJvbSAnLi4vdXRpbHMvZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50JztcbmltcG9ydCB7IHdpdGhpbiB9IGZyb20gJy4uL3V0aWxzL3dpdGhpbic7XG5pbXBvcnQgbWVyZ2VQYWRkaW5nT2JqZWN0IGZyb20gJy4uL3V0aWxzL21lcmdlUGFkZGluZ09iamVjdCc7XG5pbXBvcnQgZXhwYW5kVG9IYXNoTWFwIGZyb20gJy4uL3V0aWxzL2V4cGFuZFRvSGFzaE1hcCc7XG5pbXBvcnQgeyBsZWZ0LCByaWdodCwgYmFzZVBsYWNlbWVudHMsIHRvcCwgYm90dG9tIH0gZnJvbSAnLi4vZW51bXMnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5leHBvcnQgdHlwZSBPcHRpb25zID0ge1xuICBlbGVtZW50OiBIVE1MRWxlbWVudCB8IHN0cmluZyB8IG51bGwsXG4gIHBhZGRpbmc6XG4gICAgfCBQYWRkaW5nXG4gICAgfCAoKHt8XG4gICAgICAgIHBvcHBlcjogUmVjdCxcbiAgICAgICAgcmVmZXJlbmNlOiBSZWN0LFxuICAgICAgICBwbGFjZW1lbnQ6IFBsYWNlbWVudCxcbiAgICAgIHx9KSA9PiBQYWRkaW5nKSxcbn07XG5cbmNvbnN0IHRvUGFkZGluZ09iamVjdCA9IChwYWRkaW5nLCBzdGF0ZSkgPT4ge1xuICBwYWRkaW5nID1cbiAgICB0eXBlb2YgcGFkZGluZyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgPyBwYWRkaW5nKHsgLi4uc3RhdGUucmVjdHMsIHBsYWNlbWVudDogc3RhdGUucGxhY2VtZW50IH0pXG4gICAgICA6IHBhZGRpbmc7XG5cbiAgcmV0dXJuIG1lcmdlUGFkZGluZ09iamVjdChcbiAgICB0eXBlb2YgcGFkZGluZyAhPT0gJ251bWJlcidcbiAgICAgID8gcGFkZGluZ1xuICAgICAgOiBleHBhbmRUb0hhc2hNYXAocGFkZGluZywgYmFzZVBsYWNlbWVudHMpXG4gICk7XG59O1xuXG5mdW5jdGlvbiBhcnJvdyh7IHN0YXRlLCBuYW1lLCBvcHRpb25zIH06IE1vZGlmaWVyQXJndW1lbnRzPE9wdGlvbnM+KSB7XG4gIGNvbnN0IGFycm93RWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzLmFycm93O1xuICBjb25zdCBwb3BwZXJPZmZzZXRzID0gc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzO1xuICBjb25zdCBiYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChzdGF0ZS5wbGFjZW1lbnQpO1xuICBjb25zdCBheGlzID0gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KGJhc2VQbGFjZW1lbnQpO1xuICBjb25zdCBpc1ZlcnRpY2FsID0gW2xlZnQsIHJpZ2h0XS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpID49IDA7XG4gIGNvbnN0IGxlbiA9IGlzVmVydGljYWwgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG5cbiAgaWYgKCFhcnJvd0VsZW1lbnQgfHwgIXBvcHBlck9mZnNldHMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBwYWRkaW5nT2JqZWN0ID0gdG9QYWRkaW5nT2JqZWN0KG9wdGlvbnMucGFkZGluZywgc3RhdGUpO1xuICBjb25zdCBhcnJvd1JlY3QgPSBnZXRMYXlvdXRSZWN0KGFycm93RWxlbWVudCk7XG4gIGNvbnN0IG1pblByb3AgPSBheGlzID09PSAneScgPyB0b3AgOiBsZWZ0O1xuICBjb25zdCBtYXhQcm9wID0gYXhpcyA9PT0gJ3knID8gYm90dG9tIDogcmlnaHQ7XG5cbiAgY29uc3QgZW5kRGlmZiA9XG4gICAgc3RhdGUucmVjdHMucmVmZXJlbmNlW2xlbl0gK1xuICAgIHN0YXRlLnJlY3RzLnJlZmVyZW5jZVtheGlzXSAtXG4gICAgcG9wcGVyT2Zmc2V0c1theGlzXSAtXG4gICAgc3RhdGUucmVjdHMucG9wcGVyW2xlbl07XG4gIGNvbnN0IHN0YXJ0RGlmZiA9IHBvcHBlck9mZnNldHNbYXhpc10gLSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2VbYXhpc107XG5cbiAgY29uc3QgYXJyb3dPZmZzZXRQYXJlbnQgPSBnZXRPZmZzZXRQYXJlbnQoYXJyb3dFbGVtZW50KTtcbiAgY29uc3QgY2xpZW50U2l6ZSA9IGFycm93T2Zmc2V0UGFyZW50XG4gICAgPyBheGlzID09PSAneSdcbiAgICAgID8gYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50SGVpZ2h0IHx8IDBcbiAgICAgIDogYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50V2lkdGggfHwgMFxuICAgIDogMDtcblxuICBjb25zdCBjZW50ZXJUb1JlZmVyZW5jZSA9IGVuZERpZmYgLyAyIC0gc3RhcnREaWZmIC8gMjtcblxuICAvLyBNYWtlIHN1cmUgdGhlIGFycm93IGRvZXNuJ3Qgb3ZlcmZsb3cgdGhlIHBvcHBlciBpZiB0aGUgY2VudGVyIHBvaW50IGlzXG4gIC8vIG91dHNpZGUgb2YgdGhlIHBvcHBlciBib3VuZHNcbiAgY29uc3QgbWluID0gcGFkZGluZ09iamVjdFttaW5Qcm9wXTtcbiAgY29uc3QgbWF4ID0gY2xpZW50U2l6ZSAtIGFycm93UmVjdFtsZW5dIC0gcGFkZGluZ09iamVjdFttYXhQcm9wXTtcbiAgY29uc3QgY2VudGVyID0gY2xpZW50U2l6ZSAvIDIgLSBhcnJvd1JlY3RbbGVuXSAvIDIgKyBjZW50ZXJUb1JlZmVyZW5jZTtcbiAgY29uc3Qgb2Zmc2V0ID0gd2l0aGluKG1pbiwgY2VudGVyLCBtYXgpO1xuXG4gIC8vIFByZXZlbnRzIGJyZWFraW5nIHN5bnRheCBoaWdobGlnaHRpbmcuLi5cbiAgY29uc3QgYXhpc1Byb3A6IHN0cmluZyA9IGF4aXM7XG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSB7XG4gICAgW2F4aXNQcm9wXTogb2Zmc2V0LFxuICAgIGNlbnRlck9mZnNldDogb2Zmc2V0IC0gY2VudGVyLFxuICB9O1xufVxuXG5mdW5jdGlvbiBlZmZlY3QoeyBzdGF0ZSwgb3B0aW9ucyB9OiBNb2RpZmllckFyZ3VtZW50czxPcHRpb25zPikge1xuICBsZXQgeyBlbGVtZW50OiBhcnJvd0VsZW1lbnQgPSAnW2RhdGEtcG9wcGVyLWFycm93XScgfSA9IG9wdGlvbnM7XG5cbiAgaWYgKGFycm93RWxlbWVudCA9PSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gQ1NTIHNlbGVjdG9yXG4gIGlmICh0eXBlb2YgYXJyb3dFbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgIGFycm93RWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzLnBvcHBlci5xdWVyeVNlbGVjdG9yKGFycm93RWxlbWVudCk7XG5cbiAgICBpZiAoIWFycm93RWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY29udGFpbnMoc3RhdGUuZWxlbWVudHMucG9wcGVyLCBhcnJvd0VsZW1lbnQpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgc3RhdGUuZWxlbWVudHMuYXJyb3cgPSBhcnJvd0VsZW1lbnQ7XG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcbmV4cG9ydCB0eXBlIEFycm93TW9kaWZpZXIgPSBNb2RpZmllcjwnYXJyb3cnLCBPcHRpb25zPjtcbmV4cG9ydCBkZWZhdWx0ICh7XG4gIG5hbWU6ICdhcnJvdycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIGZuOiBhcnJvdyxcbiAgZWZmZWN0LFxuICByZXF1aXJlczogWydwb3BwZXJPZmZzZXRzJ10sXG4gIHJlcXVpcmVzSWZFeGlzdHM6IFsncHJldmVudE92ZXJmbG93J10sXG59OiBBcnJvd01vZGlmaWVyKTtcbiIsICIvLyBAZmxvd1xuaW1wb3J0IHR5cGUge1xuICBNb2RpZmllckFyZ3VtZW50cyxcbiAgTW9kaWZpZXIsXG4gIFJlY3QsXG4gIFNpZGVPYmplY3QsXG4gIE9mZnNldHMsXG59IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IHRvcCwgYm90dG9tLCBsZWZ0LCByaWdodCB9IGZyb20gJy4uL2VudW1zJztcbmltcG9ydCBkZXRlY3RPdmVyZmxvdyBmcm9tICcuLi91dGlscy9kZXRlY3RPdmVyZmxvdyc7XG5cbmZ1bmN0aW9uIGdldFNpZGVPZmZzZXRzKFxuICBvdmVyZmxvdzogU2lkZU9iamVjdCxcbiAgcmVjdDogUmVjdCxcbiAgcHJldmVudGVkT2Zmc2V0czogT2Zmc2V0cyA9IHsgeDogMCwgeTogMCB9XG4pOiBTaWRlT2JqZWN0IHtcbiAgcmV0dXJuIHtcbiAgICB0b3A6IG92ZXJmbG93LnRvcCAtIHJlY3QuaGVpZ2h0IC0gcHJldmVudGVkT2Zmc2V0cy55LFxuICAgIHJpZ2h0OiBvdmVyZmxvdy5yaWdodCAtIHJlY3Qud2lkdGggKyBwcmV2ZW50ZWRPZmZzZXRzLngsXG4gICAgYm90dG9tOiBvdmVyZmxvdy5ib3R0b20gLSByZWN0LmhlaWdodCArIHByZXZlbnRlZE9mZnNldHMueSxcbiAgICBsZWZ0OiBvdmVyZmxvdy5sZWZ0IC0gcmVjdC53aWR0aCAtIHByZXZlbnRlZE9mZnNldHMueCxcbiAgfTtcbn1cblxuZnVuY3Rpb24gaXNBbnlTaWRlRnVsbHlDbGlwcGVkKG92ZXJmbG93OiBTaWRlT2JqZWN0KTogYm9vbGVhbiB7XG4gIHJldHVybiBbdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0XS5zb21lKChzaWRlKSA9PiBvdmVyZmxvd1tzaWRlXSA+PSAwKTtcbn1cblxuZnVuY3Rpb24gaGlkZSh7IHN0YXRlLCBuYW1lIH06IE1vZGlmaWVyQXJndW1lbnRzPHt8fH0+KSB7XG4gIGNvbnN0IHJlZmVyZW5jZVJlY3QgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2U7XG4gIGNvbnN0IHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gIGNvbnN0IHByZXZlbnRlZE9mZnNldHMgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLnByZXZlbnRPdmVyZmxvdztcblxuICBjb25zdCByZWZlcmVuY2VPdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgZWxlbWVudENvbnRleHQ6ICdyZWZlcmVuY2UnLFxuICB9KTtcbiAgY29uc3QgcG9wcGVyQWx0T3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgIGFsdEJvdW5kYXJ5OiB0cnVlLFxuICB9KTtcblxuICBjb25zdCByZWZlcmVuY2VDbGlwcGluZ09mZnNldHMgPSBnZXRTaWRlT2Zmc2V0cyhcbiAgICByZWZlcmVuY2VPdmVyZmxvdyxcbiAgICByZWZlcmVuY2VSZWN0XG4gICk7XG4gIGNvbnN0IHBvcHBlckVzY2FwZU9mZnNldHMgPSBnZXRTaWRlT2Zmc2V0cyhcbiAgICBwb3BwZXJBbHRPdmVyZmxvdyxcbiAgICBwb3BwZXJSZWN0LFxuICAgIHByZXZlbnRlZE9mZnNldHNcbiAgKTtcblxuICBjb25zdCBpc1JlZmVyZW5jZUhpZGRlbiA9IGlzQW55U2lkZUZ1bGx5Q2xpcHBlZChyZWZlcmVuY2VDbGlwcGluZ09mZnNldHMpO1xuICBjb25zdCBoYXNQb3BwZXJFc2NhcGVkID0gaXNBbnlTaWRlRnVsbHlDbGlwcGVkKHBvcHBlckVzY2FwZU9mZnNldHMpO1xuXG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSB7XG4gICAgcmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzLFxuICAgIHBvcHBlckVzY2FwZU9mZnNldHMsXG4gICAgaXNSZWZlcmVuY2VIaWRkZW4sXG4gICAgaGFzUG9wcGVyRXNjYXBlZCxcbiAgfTtcblxuICBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciA9IHtcbiAgICAuLi5zdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlcixcbiAgICAnZGF0YS1wb3BwZXItcmVmZXJlbmNlLWhpZGRlbic6IGlzUmVmZXJlbmNlSGlkZGVuLFxuICAgICdkYXRhLXBvcHBlci1lc2NhcGVkJzogaGFzUG9wcGVyRXNjYXBlZCxcbiAgfTtcbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuZXhwb3J0IHR5cGUgSGlkZU1vZGlmaWVyID0gTW9kaWZpZXI8J2hpZGUnLCB7fHx9PjtcbmV4cG9ydCBkZWZhdWx0ICh7XG4gIG5hbWU6ICdoaWRlJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgcmVxdWlyZXNJZkV4aXN0czogWydwcmV2ZW50T3ZlcmZsb3cnXSxcbiAgZm46IGhpZGUsXG59OiBIaWRlTW9kaWZpZXIpO1xuIiwgIi8vIEBmbG93XG5pbXBvcnQgeyBwb3BwZXJHZW5lcmF0b3IsIGRldGVjdE92ZXJmbG93IH0gZnJvbSAnLi9jcmVhdGVQb3BwZXInO1xuXG5pbXBvcnQgZXZlbnRMaXN0ZW5lcnMgZnJvbSAnLi9tb2RpZmllcnMvZXZlbnRMaXN0ZW5lcnMnO1xuaW1wb3J0IHBvcHBlck9mZnNldHMgZnJvbSAnLi9tb2RpZmllcnMvcG9wcGVyT2Zmc2V0cyc7XG5pbXBvcnQgY29tcHV0ZVN0eWxlcyBmcm9tICcuL21vZGlmaWVycy9jb21wdXRlU3R5bGVzJztcbmltcG9ydCBhcHBseVN0eWxlcyBmcm9tICcuL21vZGlmaWVycy9hcHBseVN0eWxlcyc7XG5cbmV4cG9ydCB0eXBlICogZnJvbSAnLi90eXBlcyc7XG5cbmNvbnN0IGRlZmF1bHRNb2RpZmllcnMgPSBbXG4gIGV2ZW50TGlzdGVuZXJzLFxuICBwb3BwZXJPZmZzZXRzLFxuICBjb21wdXRlU3R5bGVzLFxuICBhcHBseVN0eWxlcyxcbl07XG5cbmNvbnN0IGNyZWF0ZVBvcHBlciA9IHBvcHBlckdlbmVyYXRvcih7IGRlZmF1bHRNb2RpZmllcnMgfSk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcbmV4cG9ydCB7IGNyZWF0ZVBvcHBlciwgcG9wcGVyR2VuZXJhdG9yLCBkZWZhdWx0TW9kaWZpZXJzLCBkZXRlY3RPdmVyZmxvdyB9O1xuIiwgIi8vIEBmbG93XG5pbXBvcnQgeyBwb3BwZXJHZW5lcmF0b3IsIGRldGVjdE92ZXJmbG93IH0gZnJvbSAnLi9jcmVhdGVQb3BwZXInO1xuXG5pbXBvcnQgZXZlbnRMaXN0ZW5lcnMgZnJvbSAnLi9tb2RpZmllcnMvZXZlbnRMaXN0ZW5lcnMnO1xuaW1wb3J0IHBvcHBlck9mZnNldHMgZnJvbSAnLi9tb2RpZmllcnMvcG9wcGVyT2Zmc2V0cyc7XG5pbXBvcnQgY29tcHV0ZVN0eWxlcyBmcm9tICcuL21vZGlmaWVycy9jb21wdXRlU3R5bGVzJztcbmltcG9ydCBhcHBseVN0eWxlcyBmcm9tICcuL21vZGlmaWVycy9hcHBseVN0eWxlcyc7XG5pbXBvcnQgb2Zmc2V0IGZyb20gJy4vbW9kaWZpZXJzL29mZnNldCc7XG5pbXBvcnQgZmxpcCBmcm9tICcuL21vZGlmaWVycy9mbGlwJztcbmltcG9ydCBwcmV2ZW50T3ZlcmZsb3cgZnJvbSAnLi9tb2RpZmllcnMvcHJldmVudE92ZXJmbG93JztcbmltcG9ydCBhcnJvdyBmcm9tICcuL21vZGlmaWVycy9hcnJvdyc7XG5pbXBvcnQgaGlkZSBmcm9tICcuL21vZGlmaWVycy9oaWRlJztcblxuZXhwb3J0IHR5cGUgKiBmcm9tICcuL3R5cGVzJztcblxuY29uc3QgZGVmYXVsdE1vZGlmaWVycyA9IFtcbiAgZXZlbnRMaXN0ZW5lcnMsXG4gIHBvcHBlck9mZnNldHMsXG4gIGNvbXB1dGVTdHlsZXMsXG4gIGFwcGx5U3R5bGVzLFxuICBvZmZzZXQsXG4gIGZsaXAsXG4gIHByZXZlbnRPdmVyZmxvdyxcbiAgYXJyb3csXG4gIGhpZGUsXG5dO1xuXG5jb25zdCBjcmVhdGVQb3BwZXIgPSBwb3BwZXJHZW5lcmF0b3IoeyBkZWZhdWx0TW9kaWZpZXJzIH0pO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5leHBvcnQgeyBjcmVhdGVQb3BwZXIsIHBvcHBlckdlbmVyYXRvciwgZGVmYXVsdE1vZGlmaWVycywgZGV0ZWN0T3ZlcmZsb3cgfTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcbmV4cG9ydCB7IGNyZWF0ZVBvcHBlciBhcyBjcmVhdGVQb3BwZXJMaXRlIH0gZnJvbSAnLi9wb3BwZXItbGl0ZSc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5leHBvcnQgKiBmcm9tICcuL21vZGlmaWVycyc7XG4iLCAiZXhwb3J0IGNvbnN0IFJPVU5EX0FSUk9XID1cbiAgJzxzdmcgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjZcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk0wIDZzMS43OTYtLjAxMyA0LjY3LTMuNjE1QzUuODUxLjkgNi45My4wMDYgOCAwYzEuMDctLjAwNiAyLjE0OC44ODcgMy4zNDMgMi4zODVDMTQuMjMzIDYuMDA1IDE2IDYgMTYgNkgwelwiPjwvc3ZnPic7XG5cbmV4cG9ydCBjb25zdCBCT1hfQ0xBU1MgPSBgX19OQU1FU1BBQ0VfUFJFRklYX18tYm94YDtcbmV4cG9ydCBjb25zdCBDT05URU5UX0NMQVNTID0gYF9fTkFNRVNQQUNFX1BSRUZJWF9fLWNvbnRlbnRgO1xuZXhwb3J0IGNvbnN0IEJBQ0tEUk9QX0NMQVNTID0gYF9fTkFNRVNQQUNFX1BSRUZJWF9fLWJhY2tkcm9wYDtcbmV4cG9ydCBjb25zdCBBUlJPV19DTEFTUyA9IGBfX05BTUVTUEFDRV9QUkVGSVhfXy1hcnJvd2A7XG5leHBvcnQgY29uc3QgU1ZHX0FSUk9XX0NMQVNTID0gYF9fTkFNRVNQQUNFX1BSRUZJWF9fLXN2Zy1hcnJvd2A7XG5cbmV4cG9ydCBjb25zdCBUT1VDSF9PUFRJT05TID0ge3Bhc3NpdmU6IHRydWUsIGNhcHR1cmU6IHRydWV9O1xuXG5leHBvcnQgY29uc3QgVElQUFlfREVGQVVMVF9BUFBFTkRfVE8gPSAoKSA9PiBkb2N1bWVudC5ib2R5O1xuIiwgImltcG9ydCB7QmFzZVBsYWNlbWVudCwgUGxhY2VtZW50fSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGhhc093blByb3BlcnR5KFxuICBvYmo6IFJlY29yZDxzdHJpbmcsIHVua25vd24+LFxuICBrZXk6IHN0cmluZ1xuKTogYm9vbGVhbiB7XG4gIHJldHVybiB7fS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFZhbHVlQXRJbmRleE9yUmV0dXJuPFQ+KFxuICB2YWx1ZTogVCB8IFtUIHwgbnVsbCwgVCB8IG51bGxdLFxuICBpbmRleDogbnVtYmVyLFxuICBkZWZhdWx0VmFsdWU6IFQgfCBbVCwgVF1cbik6IFQge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICBjb25zdCB2ID0gdmFsdWVbaW5kZXhdO1xuICAgIHJldHVybiB2ID09IG51bGxcbiAgICAgID8gQXJyYXkuaXNBcnJheShkZWZhdWx0VmFsdWUpXG4gICAgICAgID8gZGVmYXVsdFZhbHVlW2luZGV4XVxuICAgICAgICA6IGRlZmF1bHRWYWx1ZVxuICAgICAgOiB2O1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNUeXBlKHZhbHVlOiBhbnksIHR5cGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBjb25zdCBzdHIgPSB7fS50b1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgcmV0dXJuIHN0ci5pbmRleE9mKCdbb2JqZWN0JykgPT09IDAgJiYgc3RyLmluZGV4T2YoYCR7dHlwZX1dYCkgPiAtMTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGludm9rZVdpdGhBcmdzT3JSZXR1cm4odmFsdWU6IGFueSwgYXJnczogYW55W10pOiBhbnkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nID8gdmFsdWUoLi4uYXJncykgOiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlYm91bmNlPFQ+KFxuICBmbjogKGFyZzogVCkgPT4gdm9pZCxcbiAgbXM6IG51bWJlclxuKTogKGFyZzogVCkgPT4gdm9pZCB7XG4gIC8vIEF2b2lkIHdyYXBwaW5nIGluIGBzZXRUaW1lb3V0YCBpZiBtcyBpcyAwIGFueXdheVxuICBpZiAobXMgPT09IDApIHtcbiAgICByZXR1cm4gZm47XG4gIH1cblxuICBsZXQgdGltZW91dDogYW55O1xuXG4gIHJldHVybiAoYXJnKTogdm9pZCA9PiB7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGZuKGFyZyk7XG4gICAgfSwgbXMpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUHJvcGVydGllczxUPihvYmo6IFQsIGtleXM6IHN0cmluZ1tdKTogUGFydGlhbDxUPiB7XG4gIGNvbnN0IGNsb25lID0gey4uLm9ian07XG4gIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgZGVsZXRlIChjbG9uZSBhcyBhbnkpW2tleV07XG4gIH0pO1xuICByZXR1cm4gY2xvbmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzcGxpdEJ5U3BhY2VzKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gIHJldHVybiB2YWx1ZS5zcGxpdCgvXFxzKy8pLmZpbHRlcihCb29sZWFuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVRvQXJyYXk8VD4odmFsdWU6IFQgfCBUW10pOiBUW10ge1xuICByZXR1cm4gKFtdIGFzIFRbXSkuY29uY2F0KHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHB1c2hJZlVuaXF1ZTxUPihhcnI6IFRbXSwgdmFsdWU6IFQpOiB2b2lkIHtcbiAgaWYgKGFyci5pbmRleE9mKHZhbHVlKSA9PT0gLTEpIHtcbiAgICBhcnIucHVzaCh2YWx1ZSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZFB4SWZOdW1iZXIodmFsdWU6IHN0cmluZyB8IG51bWJlcik6IHN0cmluZyB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInID8gYCR7dmFsdWV9cHhgIDogdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmlxdWU8VD4oYXJyOiBUW10pOiBUW10ge1xuICByZXR1cm4gYXJyLmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IGFyci5pbmRleE9mKGl0ZW0pID09PSBpbmRleCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROdW1iZXIodmFsdWU6IHN0cmluZyB8IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInID8gdmFsdWUgOiBwYXJzZUZsb2F0KHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50OiBQbGFjZW1lbnQpOiBCYXNlUGxhY2VtZW50IHtcbiAgcmV0dXJuIHBsYWNlbWVudC5zcGxpdCgnLScpWzBdIGFzIEJhc2VQbGFjZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcnJheUZyb20odmFsdWU6IEFycmF5TGlrZTxhbnk+KTogYW55W10ge1xuICByZXR1cm4gW10uc2xpY2UuY2FsbCh2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVVbmRlZmluZWRQcm9wcyhcbiAgb2JqOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuKTogUGFydGlhbDxSZWNvcmQ8c3RyaW5nLCB1bmtub3duPj4ge1xuICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XG4gICAgaWYgKG9ialtrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIChhY2MgYXMgYW55KVtrZXldID0gb2JqW2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xufVxuIiwgImltcG9ydCB7UmVmZXJlbmNlRWxlbWVudCwgVGFyZ2V0c30gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge1BvcHBlclRyZWVEYXRhfSBmcm9tICcuL3R5cGVzLWludGVybmFsJztcbmltcG9ydCB7YXJyYXlGcm9tLCBpc1R5cGUsIG5vcm1hbGl6ZVRvQXJyYXksIGdldEJhc2VQbGFjZW1lbnR9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gZGl2KCk6IEhUTUxEaXZFbGVtZW50IHtcbiAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNFbGVtZW50KHZhbHVlOiB1bmtub3duKTogdmFsdWUgaXMgRWxlbWVudCB8IERvY3VtZW50RnJhZ21lbnQge1xuICByZXR1cm4gWydFbGVtZW50JywgJ0ZyYWdtZW50J10uc29tZSgodHlwZSkgPT4gaXNUeXBlKHZhbHVlLCB0eXBlKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc05vZGVMaXN0KHZhbHVlOiB1bmtub3duKTogdmFsdWUgaXMgTm9kZUxpc3Qge1xuICByZXR1cm4gaXNUeXBlKHZhbHVlLCAnTm9kZUxpc3QnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTW91c2VFdmVudCh2YWx1ZTogdW5rbm93bik6IHZhbHVlIGlzIE1vdXNlRXZlbnQge1xuICByZXR1cm4gaXNUeXBlKHZhbHVlLCAnTW91c2VFdmVudCcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZWZlcmVuY2VFbGVtZW50KHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBSZWZlcmVuY2VFbGVtZW50IHtcbiAgcmV0dXJuICEhKHZhbHVlICYmIHZhbHVlLl90aXBweSAmJiB2YWx1ZS5fdGlwcHkucmVmZXJlbmNlID09PSB2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBcnJheU9mRWxlbWVudHModmFsdWU6IFRhcmdldHMpOiBFbGVtZW50W10ge1xuICBpZiAoaXNFbGVtZW50KHZhbHVlKSkge1xuICAgIHJldHVybiBbdmFsdWVdO1xuICB9XG5cbiAgaWYgKGlzTm9kZUxpc3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIGFycmF5RnJvbSh2YWx1ZSk7XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gYXJyYXlGcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodmFsdWUpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFRyYW5zaXRpb25EdXJhdGlvbihcbiAgZWxzOiAoSFRNTERpdkVsZW1lbnQgfCBudWxsKVtdLFxuICB2YWx1ZTogbnVtYmVyXG4pOiB2b2lkIHtcbiAgZWxzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgaWYgKGVsKSB7XG4gICAgICBlbC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBgJHt2YWx1ZX1tc2A7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFZpc2liaWxpdHlTdGF0ZShcbiAgZWxzOiAoSFRNTERpdkVsZW1lbnQgfCBudWxsKVtdLFxuICBzdGF0ZTogJ3Zpc2libGUnIHwgJ2hpZGRlbidcbik6IHZvaWQge1xuICBlbHMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICBpZiAoZWwpIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS1zdGF0ZScsIHN0YXRlKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3duZXJEb2N1bWVudChcbiAgZWxlbWVudE9yRWxlbWVudHM6IEVsZW1lbnQgfCBFbGVtZW50W11cbik6IERvY3VtZW50IHtcbiAgY29uc3QgW2VsZW1lbnRdID0gbm9ybWFsaXplVG9BcnJheShlbGVtZW50T3JFbGVtZW50cyk7XG5cbiAgLy8gRWxlbWVudHMgY3JlYXRlZCB2aWEgYSA8dGVtcGxhdGU+IGhhdmUgYW4gb3duZXJEb2N1bWVudCB3aXRoIG5vIHJlZmVyZW5jZSB0byB0aGUgYm9keVxuICByZXR1cm4gZWxlbWVudD8ub3duZXJEb2N1bWVudD8uYm9keSA/IGVsZW1lbnQub3duZXJEb2N1bWVudCA6IGRvY3VtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNDdXJzb3JPdXRzaWRlSW50ZXJhY3RpdmVCb3JkZXIoXG4gIHBvcHBlclRyZWVEYXRhOiBQb3BwZXJUcmVlRGF0YVtdLFxuICBldmVudDogTW91c2VFdmVudFxuKTogYm9vbGVhbiB7XG4gIGNvbnN0IHtjbGllbnRYLCBjbGllbnRZfSA9IGV2ZW50O1xuXG4gIHJldHVybiBwb3BwZXJUcmVlRGF0YS5ldmVyeSgoe3BvcHBlclJlY3QsIHBvcHBlclN0YXRlLCBwcm9wc30pID0+IHtcbiAgICBjb25zdCB7aW50ZXJhY3RpdmVCb3JkZXJ9ID0gcHJvcHM7XG4gICAgY29uc3QgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQocG9wcGVyU3RhdGUucGxhY2VtZW50KTtcbiAgICBjb25zdCBvZmZzZXREYXRhID0gcG9wcGVyU3RhdGUubW9kaWZpZXJzRGF0YS5vZmZzZXQ7XG5cbiAgICBpZiAoIW9mZnNldERhdGEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IHRvcERpc3RhbmNlID0gYmFzZVBsYWNlbWVudCA9PT0gJ2JvdHRvbScgPyBvZmZzZXREYXRhLnRvcCEueSA6IDA7XG4gICAgY29uc3QgYm90dG9tRGlzdGFuY2UgPSBiYXNlUGxhY2VtZW50ID09PSAndG9wJyA/IG9mZnNldERhdGEuYm90dG9tIS55IDogMDtcbiAgICBjb25zdCBsZWZ0RGlzdGFuY2UgPSBiYXNlUGxhY2VtZW50ID09PSAncmlnaHQnID8gb2Zmc2V0RGF0YS5sZWZ0IS54IDogMDtcbiAgICBjb25zdCByaWdodERpc3RhbmNlID0gYmFzZVBsYWNlbWVudCA9PT0gJ2xlZnQnID8gb2Zmc2V0RGF0YS5yaWdodCEueCA6IDA7XG5cbiAgICBjb25zdCBleGNlZWRzVG9wID1cbiAgICAgIHBvcHBlclJlY3QudG9wIC0gY2xpZW50WSArIHRvcERpc3RhbmNlID4gaW50ZXJhY3RpdmVCb3JkZXI7XG4gICAgY29uc3QgZXhjZWVkc0JvdHRvbSA9XG4gICAgICBjbGllbnRZIC0gcG9wcGVyUmVjdC5ib3R0b20gLSBib3R0b21EaXN0YW5jZSA+IGludGVyYWN0aXZlQm9yZGVyO1xuICAgIGNvbnN0IGV4Y2VlZHNMZWZ0ID1cbiAgICAgIHBvcHBlclJlY3QubGVmdCAtIGNsaWVudFggKyBsZWZ0RGlzdGFuY2UgPiBpbnRlcmFjdGl2ZUJvcmRlcjtcbiAgICBjb25zdCBleGNlZWRzUmlnaHQgPVxuICAgICAgY2xpZW50WCAtIHBvcHBlclJlY3QucmlnaHQgLSByaWdodERpc3RhbmNlID4gaW50ZXJhY3RpdmVCb3JkZXI7XG5cbiAgICByZXR1cm4gZXhjZWVkc1RvcCB8fCBleGNlZWRzQm90dG9tIHx8IGV4Y2VlZHNMZWZ0IHx8IGV4Y2VlZHNSaWdodDtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVUcmFuc2l0aW9uRW5kTGlzdGVuZXIoXG4gIGJveDogSFRNTERpdkVsZW1lbnQsXG4gIGFjdGlvbjogJ2FkZCcgfCAncmVtb3ZlJyxcbiAgbGlzdGVuZXI6IChldmVudDogVHJhbnNpdGlvbkV2ZW50KSA9PiB2b2lkXG4pOiB2b2lkIHtcbiAgY29uc3QgbWV0aG9kID0gYCR7YWN0aW9ufUV2ZW50TGlzdGVuZXJgIGFzXG4gICAgfCAnYWRkRXZlbnRMaXN0ZW5lcidcbiAgICB8ICdyZW1vdmVFdmVudExpc3RlbmVyJztcblxuICAvLyBzb21lIGJyb3dzZXJzIGFwcGFyZW50bHkgc3VwcG9ydCBgdHJhbnNpdGlvbmAgKHVucHJlZml4ZWQpIGJ1dCBvbmx5IGZpcmVcbiAgLy8gYHdlYmtpdFRyYW5zaXRpb25FbmRgLi4uXG4gIFsndHJhbnNpdGlvbmVuZCcsICd3ZWJraXRUcmFuc2l0aW9uRW5kJ10uZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgICBib3hbbWV0aG9kXShldmVudCwgbGlzdGVuZXIgYXMgRXZlbnRMaXN0ZW5lcik7XG4gIH0pO1xufVxuXG4vKipcbiAqIENvbXBhcmVkIHRvIHh4eC5jb250YWlucywgdGhpcyBmdW5jdGlvbiB3b3JrcyBmb3IgZG9tIHN0cnVjdHVyZXMgd2l0aCBzaGFkb3dcbiAqIGRvbVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWN0dWFsQ29udGFpbnMocGFyZW50OiBFbGVtZW50LCBjaGlsZDogRWxlbWVudCk6IGJvb2xlYW4ge1xuICBsZXQgdGFyZ2V0ID0gY2hpbGQ7XG4gIHdoaWxlICh0YXJnZXQpIHtcbiAgICBpZiAocGFyZW50LmNvbnRhaW5zKHRhcmdldCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICB0YXJnZXQgPSAodGFyZ2V0LmdldFJvb3ROb2RlPy4oKSBhcyBhbnkpPy5ob3N0O1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cbiIsICJpbXBvcnQge1RPVUNIX09QVElPTlN9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7aXNSZWZlcmVuY2VFbGVtZW50fSBmcm9tICcuL2RvbS11dGlscyc7XG5cbmV4cG9ydCBjb25zdCBjdXJyZW50SW5wdXQgPSB7aXNUb3VjaDogZmFsc2V9O1xubGV0IGxhc3RNb3VzZU1vdmVUaW1lID0gMDtcblxuLyoqXG4gKiBXaGVuIGEgYHRvdWNoc3RhcnRgIGV2ZW50IGlzIGZpcmVkLCBpdCdzIGFzc3VtZWQgdGhlIHVzZXIgaXMgdXNpbmcgdG91Y2hcbiAqIGlucHV0LiBXZSdsbCBiaW5kIGEgYG1vdXNlbW92ZWAgZXZlbnQgbGlzdGVuZXIgdG8gbGlzdGVuIGZvciBtb3VzZSBpbnB1dCBpblxuICogdGhlIGZ1dHVyZS4gVGhpcyB3YXksIHRoZSBgaXNUb3VjaGAgcHJvcGVydHkgaXMgZnVsbHkgZHluYW1pYyBhbmQgd2lsbCBoYW5kbGVcbiAqIGh5YnJpZCBkZXZpY2VzIHRoYXQgdXNlIGEgbWl4IG9mIHRvdWNoICsgbW91c2UgaW5wdXQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvbkRvY3VtZW50VG91Y2hTdGFydCgpOiB2b2lkIHtcbiAgaWYgKGN1cnJlbnRJbnB1dC5pc1RvdWNoKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY3VycmVudElucHV0LmlzVG91Y2ggPSB0cnVlO1xuXG4gIGlmICh3aW5kb3cucGVyZm9ybWFuY2UpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbkRvY3VtZW50TW91c2VNb3ZlKTtcbiAgfVxufVxuXG4vKipcbiAqIFdoZW4gdHdvIGBtb3VzZW1vdmVgIGV2ZW50IGFyZSBmaXJlZCBjb25zZWN1dGl2ZWx5IHdpdGhpbiAyMG1zLCBpdCdzIGFzc3VtZWRcbiAqIHRoZSB1c2VyIGlzIHVzaW5nIG1vdXNlIGlucHV0IGFnYWluLiBgbW91c2Vtb3ZlYCBjYW4gZmlyZSBvbiB0b3VjaCBkZXZpY2VzIGFzXG4gKiB3ZWxsLCBidXQgdmVyeSByYXJlbHkgdGhhdCBxdWlja2x5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gb25Eb2N1bWVudE1vdXNlTW92ZSgpOiB2b2lkIHtcbiAgY29uc3Qgbm93ID0gcGVyZm9ybWFuY2Uubm93KCk7XG5cbiAgaWYgKG5vdyAtIGxhc3RNb3VzZU1vdmVUaW1lIDwgMjApIHtcbiAgICBjdXJyZW50SW5wdXQuaXNUb3VjaCA9IGZhbHNlO1xuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Eb2N1bWVudE1vdXNlTW92ZSk7XG4gIH1cblxuICBsYXN0TW91c2VNb3ZlVGltZSA9IG5vdztcbn1cblxuLyoqXG4gKiBXaGVuIGFuIGVsZW1lbnQgaXMgaW4gZm9jdXMgYW5kIGhhcyBhIHRpcHB5LCBsZWF2aW5nIHRoZSB0YWIvd2luZG93IGFuZFxuICogcmV0dXJuaW5nIGNhdXNlcyBpdCB0byBzaG93IGFnYWluLiBGb3IgbW91c2UgdXNlcnMgdGhpcyBpcyB1bmV4cGVjdGVkLCBidXRcbiAqIGZvciBrZXlib2FyZCB1c2UgaXQgbWFrZXMgc2Vuc2UuXG4gKiBUT0RPOiBmaW5kIGEgYmV0dGVyIHRlY2huaXF1ZSB0byBzb2x2ZSB0aGlzIHByb2JsZW1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9uV2luZG93Qmx1cigpOiB2b2lkIHtcbiAgY29uc3QgYWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQgfCBudWxsO1xuXG4gIGlmIChpc1JlZmVyZW5jZUVsZW1lbnQoYWN0aXZlRWxlbWVudCkpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IGFjdGl2ZUVsZW1lbnQuX3RpcHB5ITtcblxuICAgIGlmIChhY3RpdmVFbGVtZW50LmJsdXIgJiYgIWluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZSkge1xuICAgICAgYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJpbmRHbG9iYWxFdmVudExpc3RlbmVycygpOiB2b2lkIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIG9uRG9jdW1lbnRUb3VjaFN0YXJ0LCBUT1VDSF9PUFRJT05TKTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBvbldpbmRvd0JsdXIpO1xufVxuIiwgImV4cG9ydCBjb25zdCBpc0Jyb3dzZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnO1xuXG5leHBvcnQgY29uc3QgaXNJRTExID0gaXNCcm93c2VyXG4gID8gLy8gQHRzLWlnbm9yZVxuICAgICEhd2luZG93Lm1zQ3J5cHRvXG4gIDogZmFsc2U7XG4iLCAiaW1wb3J0IHtUYXJnZXRzfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1lbW9yeUxlYWtXYXJuaW5nKG1ldGhvZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgdHh0ID0gbWV0aG9kID09PSAnZGVzdHJveScgPyAnbiBhbHJlYWR5LScgOiAnICc7XG5cbiAgcmV0dXJuIFtcbiAgICBgJHttZXRob2R9KCkgd2FzIGNhbGxlZCBvbiBhJHt0eHR9ZGVzdHJveWVkIGluc3RhbmNlLiBUaGlzIGlzIGEgbm8tb3AgYnV0YCxcbiAgICAnaW5kaWNhdGVzIGEgcG90ZW50aWFsIG1lbW9yeSBsZWFrLicsXG4gIF0uam9pbignICcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYW4odmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IHNwYWNlc0FuZFRhYnMgPSAvWyBcXHRdezIsfS9nO1xuICBjb25zdCBsaW5lU3RhcnRXaXRoU3BhY2VzID0gL15bIFxcdF0qL2dtO1xuXG4gIHJldHVybiB2YWx1ZVxuICAgIC5yZXBsYWNlKHNwYWNlc0FuZFRhYnMsICcgJylcbiAgICAucmVwbGFjZShsaW5lU3RhcnRXaXRoU3BhY2VzLCAnJylcbiAgICAudHJpbSgpO1xufVxuXG5mdW5jdGlvbiBnZXREZXZNZXNzYWdlKG1lc3NhZ2U6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBjbGVhbihgXG4gICVjdGlwcHkuanNcblxuICAlYyR7Y2xlYW4obWVzc2FnZSl9XG5cbiAgJWPwn5G34oCNIFRoaXMgaXMgYSBkZXZlbG9wbWVudC1vbmx5IG1lc3NhZ2UuIEl0IHdpbGwgYmUgcmVtb3ZlZCBpbiBwcm9kdWN0aW9uLlxuICBgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZvcm1hdHRlZE1lc3NhZ2UobWVzc2FnZTogc3RyaW5nKTogc3RyaW5nW10ge1xuICByZXR1cm4gW1xuICAgIGdldERldk1lc3NhZ2UobWVzc2FnZSksXG4gICAgLy8gdGl0bGVcbiAgICAnY29sb3I6ICMwMEM1ODQ7IGZvbnQtc2l6ZTogMS4zZW07IGZvbnQtd2VpZ2h0OiBib2xkOycsXG4gICAgLy8gbWVzc2FnZVxuICAgICdsaW5lLWhlaWdodDogMS41JyxcbiAgICAvLyBmb290ZXJcbiAgICAnY29sb3I6ICNhNmEwOTU7JyxcbiAgXTtcbn1cblxuLy8gQXNzdW1lIHdhcm5pbmdzIGFuZCBlcnJvcnMgbmV2ZXIgaGF2ZSB0aGUgc2FtZSBtZXNzYWdlXG5sZXQgdmlzaXRlZE1lc3NhZ2VzOiBTZXQ8c3RyaW5nPjtcbmlmIChfX0RFVl9fKSB7XG4gIHJlc2V0VmlzaXRlZE1lc3NhZ2VzKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldFZpc2l0ZWRNZXNzYWdlcygpOiB2b2lkIHtcbiAgdmlzaXRlZE1lc3NhZ2VzID0gbmV3IFNldCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2FybldoZW4oY29uZGl0aW9uOiBib29sZWFuLCBtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgaWYgKGNvbmRpdGlvbiAmJiAhdmlzaXRlZE1lc3NhZ2VzLmhhcyhtZXNzYWdlKSkge1xuICAgIHZpc2l0ZWRNZXNzYWdlcy5hZGQobWVzc2FnZSk7XG4gICAgY29uc29sZS53YXJuKC4uLmdldEZvcm1hdHRlZE1lc3NhZ2UobWVzc2FnZSkpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlcnJvcldoZW4oY29uZGl0aW9uOiBib29sZWFuLCBtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgaWYgKGNvbmRpdGlvbiAmJiAhdmlzaXRlZE1lc3NhZ2VzLmhhcyhtZXNzYWdlKSkge1xuICAgIHZpc2l0ZWRNZXNzYWdlcy5hZGQobWVzc2FnZSk7XG4gICAgY29uc29sZS5lcnJvciguLi5nZXRGb3JtYXR0ZWRNZXNzYWdlKG1lc3NhZ2UpKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVUYXJnZXRzKHRhcmdldHM6IFRhcmdldHMpOiB2b2lkIHtcbiAgY29uc3QgZGlkUGFzc0ZhbHN5VmFsdWUgPSAhdGFyZ2V0cztcbiAgY29uc3QgZGlkUGFzc1BsYWluT2JqZWN0ID1cbiAgICBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodGFyZ2V0cykgPT09ICdbb2JqZWN0IE9iamVjdF0nICYmXG4gICAgISh0YXJnZXRzIGFzIGFueSkuYWRkRXZlbnRMaXN0ZW5lcjtcblxuICBlcnJvcldoZW4oXG4gICAgZGlkUGFzc0ZhbHN5VmFsdWUsXG4gICAgW1xuICAgICAgJ3RpcHB5KCkgd2FzIHBhc3NlZCcsXG4gICAgICAnYCcgKyBTdHJpbmcodGFyZ2V0cykgKyAnYCcsXG4gICAgICAnYXMgaXRzIHRhcmdldHMgKGZpcnN0KSBhcmd1bWVudC4gVmFsaWQgdHlwZXMgYXJlOiBTdHJpbmcsIEVsZW1lbnQsJyxcbiAgICAgICdFbGVtZW50W10sIG9yIE5vZGVMaXN0LicsXG4gICAgXS5qb2luKCcgJylcbiAgKTtcblxuICBlcnJvcldoZW4oXG4gICAgZGlkUGFzc1BsYWluT2JqZWN0LFxuICAgIFtcbiAgICAgICd0aXBweSgpIHdhcyBwYXNzZWQgYSBwbGFpbiBvYmplY3Qgd2hpY2ggaXMgbm90IHN1cHBvcnRlZCBhcyBhbiBhcmd1bWVudCcsXG4gICAgICAnZm9yIHZpcnR1YWwgcG9zaXRpb25pbmcuIFVzZSBwcm9wcy5nZXRSZWZlcmVuY2VDbGllbnRSZWN0IGluc3RlYWQuJyxcbiAgICBdLmpvaW4oJyAnKVxuICApO1xufVxuIiwgImltcG9ydCB7RGVmYXVsdFByb3BzLCBQbHVnaW4sIFByb3BzLCBSZWZlcmVuY2VFbGVtZW50LCBUaXBweX0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge1xuICBoYXNPd25Qcm9wZXJ0eSxcbiAgcmVtb3ZlUHJvcGVydGllcyxcbiAgaW52b2tlV2l0aEFyZ3NPclJldHVybixcbn0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQge3dhcm5XaGVufSBmcm9tICcuL3ZhbGlkYXRpb24nO1xuaW1wb3J0IHtUSVBQWV9ERUZBVUxUX0FQUEVORF9UT30gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5jb25zdCBwbHVnaW5Qcm9wcyA9IHtcbiAgYW5pbWF0ZUZpbGw6IGZhbHNlLFxuICBmb2xsb3dDdXJzb3I6IGZhbHNlLFxuICBpbmxpbmVQb3NpdGlvbmluZzogZmFsc2UsXG4gIHN0aWNreTogZmFsc2UsXG59O1xuXG5jb25zdCByZW5kZXJQcm9wcyA9IHtcbiAgYWxsb3dIVE1MOiBmYWxzZSxcbiAgYW5pbWF0aW9uOiAnZmFkZScsXG4gIGFycm93OiB0cnVlLFxuICBjb250ZW50OiAnJyxcbiAgaW5lcnRpYTogZmFsc2UsXG4gIG1heFdpZHRoOiAzNTAsXG4gIHJvbGU6ICd0b29sdGlwJyxcbiAgdGhlbWU6ICcnLFxuICB6SW5kZXg6IDk5OTksXG59O1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdFByb3BzOiBEZWZhdWx0UHJvcHMgPSB7XG4gIGFwcGVuZFRvOiBUSVBQWV9ERUZBVUxUX0FQUEVORF9UTyxcbiAgYXJpYToge1xuICAgIGNvbnRlbnQ6ICdhdXRvJyxcbiAgICBleHBhbmRlZDogJ2F1dG8nLFxuICB9LFxuICBkZWxheTogMCxcbiAgZHVyYXRpb246IFszMDAsIDI1MF0sXG4gIGdldFJlZmVyZW5jZUNsaWVudFJlY3Q6IG51bGwsXG4gIGhpZGVPbkNsaWNrOiB0cnVlLFxuICBpZ25vcmVBdHRyaWJ1dGVzOiBmYWxzZSxcbiAgaW50ZXJhY3RpdmU6IGZhbHNlLFxuICBpbnRlcmFjdGl2ZUJvcmRlcjogMixcbiAgaW50ZXJhY3RpdmVEZWJvdW5jZTogMCxcbiAgbW92ZVRyYW5zaXRpb246ICcnLFxuICBvZmZzZXQ6IFswLCAxMF0sXG4gIG9uQWZ0ZXJVcGRhdGUoKSB7fSxcbiAgb25CZWZvcmVVcGRhdGUoKSB7fSxcbiAgb25DcmVhdGUoKSB7fSxcbiAgb25EZXN0cm95KCkge30sXG4gIG9uSGlkZGVuKCkge30sXG4gIG9uSGlkZSgpIHt9LFxuICBvbk1vdW50KCkge30sXG4gIG9uU2hvdygpIHt9LFxuICBvblNob3duKCkge30sXG4gIG9uVHJpZ2dlcigpIHt9LFxuICBvblVudHJpZ2dlcigpIHt9LFxuICBvbkNsaWNrT3V0c2lkZSgpIHt9LFxuICBwbGFjZW1lbnQ6ICd0b3AnLFxuICBwbHVnaW5zOiBbXSxcbiAgcG9wcGVyT3B0aW9uczoge30sXG4gIHJlbmRlcjogbnVsbCxcbiAgc2hvd09uQ3JlYXRlOiBmYWxzZSxcbiAgdG91Y2g6IHRydWUsXG4gIHRyaWdnZXI6ICdtb3VzZWVudGVyIGZvY3VzJyxcbiAgdHJpZ2dlclRhcmdldDogbnVsbCxcbiAgLi4ucGx1Z2luUHJvcHMsXG4gIC4uLnJlbmRlclByb3BzLFxufTtcblxuY29uc3QgZGVmYXVsdEtleXMgPSBPYmplY3Qua2V5cyhkZWZhdWx0UHJvcHMpO1xuXG5leHBvcnQgY29uc3Qgc2V0RGVmYXVsdFByb3BzOiBUaXBweVsnc2V0RGVmYXVsdFByb3BzJ10gPSAocGFydGlhbFByb3BzKSA9PiB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gIGlmIChfX0RFVl9fKSB7XG4gICAgdmFsaWRhdGVQcm9wcyhwYXJ0aWFsUHJvcHMsIFtdKTtcbiAgfVxuXG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhwYXJ0aWFsUHJvcHMpIGFzIEFycmF5PGtleW9mIERlZmF1bHRQcm9wcz47XG4gIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgKGRlZmF1bHRQcm9wcyBhcyBhbnkpW2tleV0gPSBwYXJ0aWFsUHJvcHNba2V5XTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RXh0ZW5kZWRQYXNzZWRQcm9wcyhcbiAgcGFzc2VkUHJvcHM6IFBhcnRpYWw8UHJvcHM+ICYgUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbik6IFBhcnRpYWw8UHJvcHM+IHtcbiAgY29uc3QgcGx1Z2lucyA9IHBhc3NlZFByb3BzLnBsdWdpbnMgfHwgW107XG4gIGNvbnN0IHBsdWdpblByb3BzID0gcGx1Z2lucy5yZWR1Y2U8UmVjb3JkPHN0cmluZywgdW5rbm93bj4+KChhY2MsIHBsdWdpbikgPT4ge1xuICAgIGNvbnN0IHtuYW1lLCBkZWZhdWx0VmFsdWV9ID0gcGx1Z2luO1xuXG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIGFjY1tuYW1lXSA9XG4gICAgICAgIHBhc3NlZFByb3BzW25hbWVdICE9PSB1bmRlZmluZWRcbiAgICAgICAgICA/IHBhc3NlZFByb3BzW25hbWVdXG4gICAgICAgICAgOiAoZGVmYXVsdFByb3BzIGFzIGFueSlbbmFtZV0gPz8gZGVmYXVsdFZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcblxuICByZXR1cm4ge1xuICAgIC4uLnBhc3NlZFByb3BzLFxuICAgIC4uLnBsdWdpblByb3BzLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0YUF0dHJpYnV0ZVByb3BzKFxuICByZWZlcmVuY2U6IFJlZmVyZW5jZUVsZW1lbnQsXG4gIHBsdWdpbnM6IFBsdWdpbltdXG4pOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB7XG4gIGNvbnN0IHByb3BLZXlzID0gcGx1Z2luc1xuICAgID8gT2JqZWN0LmtleXMoZ2V0RXh0ZW5kZWRQYXNzZWRQcm9wcyh7Li4uZGVmYXVsdFByb3BzLCBwbHVnaW5zfSkpXG4gICAgOiBkZWZhdWx0S2V5cztcblxuICBjb25zdCBwcm9wcyA9IHByb3BLZXlzLnJlZHVjZShcbiAgICAoYWNjOiBQYXJ0aWFsPFByb3BzPiAmIFJlY29yZDxzdHJpbmcsIHVua25vd24+LCBrZXkpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlQXNTdHJpbmcgPSAoXG4gICAgICAgIHJlZmVyZW5jZS5nZXRBdHRyaWJ1dGUoYGRhdGEtdGlwcHktJHtrZXl9YCkgfHwgJydcbiAgICAgICkudHJpbSgpO1xuXG4gICAgICBpZiAoIXZhbHVlQXNTdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH1cblxuICAgICAgaWYgKGtleSA9PT0gJ2NvbnRlbnQnKSB7XG4gICAgICAgIGFjY1trZXldID0gdmFsdWVBc1N0cmluZztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgYWNjW2tleV0gPSBKU09OLnBhcnNlKHZhbHVlQXNTdHJpbmcpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgYWNjW2tleV0gPSB2YWx1ZUFzU3RyaW5nO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSxcbiAgICB7fVxuICApO1xuXG4gIHJldHVybiBwcm9wcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV2YWx1YXRlUHJvcHMoXG4gIHJlZmVyZW5jZTogUmVmZXJlbmNlRWxlbWVudCxcbiAgcHJvcHM6IFByb3BzXG4pOiBQcm9wcyB7XG4gIGNvbnN0IG91dCA9IHtcbiAgICAuLi5wcm9wcyxcbiAgICBjb250ZW50OiBpbnZva2VXaXRoQXJnc09yUmV0dXJuKHByb3BzLmNvbnRlbnQsIFtyZWZlcmVuY2VdKSxcbiAgICAuLi4ocHJvcHMuaWdub3JlQXR0cmlidXRlc1xuICAgICAgPyB7fVxuICAgICAgOiBnZXREYXRhQXR0cmlidXRlUHJvcHMocmVmZXJlbmNlLCBwcm9wcy5wbHVnaW5zKSksXG4gIH07XG5cbiAgb3V0LmFyaWEgPSB7XG4gICAgLi4uZGVmYXVsdFByb3BzLmFyaWEsXG4gICAgLi4ub3V0LmFyaWEsXG4gIH07XG5cbiAgb3V0LmFyaWEgPSB7XG4gICAgZXhwYW5kZWQ6XG4gICAgICBvdXQuYXJpYS5leHBhbmRlZCA9PT0gJ2F1dG8nID8gcHJvcHMuaW50ZXJhY3RpdmUgOiBvdXQuYXJpYS5leHBhbmRlZCxcbiAgICBjb250ZW50OlxuICAgICAgb3V0LmFyaWEuY29udGVudCA9PT0gJ2F1dG8nXG4gICAgICAgID8gcHJvcHMuaW50ZXJhY3RpdmVcbiAgICAgICAgICA/IG51bGxcbiAgICAgICAgICA6ICdkZXNjcmliZWRieSdcbiAgICAgICAgOiBvdXQuYXJpYS5jb250ZW50LFxuICB9O1xuXG4gIHJldHVybiBvdXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVByb3BzKFxuICBwYXJ0aWFsUHJvcHM6IFBhcnRpYWw8UHJvcHM+ID0ge30sXG4gIHBsdWdpbnM6IFBsdWdpbltdID0gW11cbik6IHZvaWQge1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocGFydGlhbFByb3BzKSBhcyBBcnJheTxrZXlvZiBQcm9wcz47XG4gIGtleXMuZm9yRWFjaCgocHJvcCkgPT4ge1xuICAgIGNvbnN0IG5vblBsdWdpblByb3BzID0gcmVtb3ZlUHJvcGVydGllcyhcbiAgICAgIGRlZmF1bHRQcm9wcyxcbiAgICAgIE9iamVjdC5rZXlzKHBsdWdpblByb3BzKVxuICAgICk7XG5cbiAgICBsZXQgZGlkUGFzc1Vua25vd25Qcm9wID0gIWhhc093blByb3BlcnR5KG5vblBsdWdpblByb3BzLCBwcm9wKTtcblxuICAgIC8vIENoZWNrIGlmIHRoZSBwcm9wIGV4aXN0cyBpbiBgcGx1Z2luc2BcbiAgICBpZiAoZGlkUGFzc1Vua25vd25Qcm9wKSB7XG4gICAgICBkaWRQYXNzVW5rbm93blByb3AgPVxuICAgICAgICBwbHVnaW5zLmZpbHRlcigocGx1Z2luKSA9PiBwbHVnaW4ubmFtZSA9PT0gcHJvcCkubGVuZ3RoID09PSAwO1xuICAgIH1cblxuICAgIHdhcm5XaGVuKFxuICAgICAgZGlkUGFzc1Vua25vd25Qcm9wLFxuICAgICAgW1xuICAgICAgICBgXFxgJHtwcm9wfVxcYGAsXG4gICAgICAgIFwiaXMgbm90IGEgdmFsaWQgcHJvcC4gWW91IG1heSBoYXZlIHNwZWxsZWQgaXQgaW5jb3JyZWN0bHksIG9yIGlmIGl0J3NcIixcbiAgICAgICAgJ2EgcGx1Z2luLCBmb3Jnb3QgdG8gcGFzcyBpdCBpbiBhbiBhcnJheSBhcyBwcm9wcy5wbHVnaW5zLicsXG4gICAgICAgICdcXG5cXG4nLFxuICAgICAgICAnQWxsIHByb3BzOiBodHRwczovL2F0b21pa3MuZ2l0aHViLmlvL3RpcHB5anMvdjYvYWxsLXByb3BzL1xcbicsXG4gICAgICAgICdQbHVnaW5zOiBodHRwczovL2F0b21pa3MuZ2l0aHViLmlvL3RpcHB5anMvdjYvcGx1Z2lucy8nLFxuICAgICAgXS5qb2luKCcgJylcbiAgICApO1xuICB9KTtcbn1cbiIsICJpbXBvcnQge1xuICBBUlJPV19DTEFTUyxcbiAgQkFDS0RST1BfQ0xBU1MsXG4gIEJPWF9DTEFTUyxcbiAgQ09OVEVOVF9DTEFTUyxcbiAgU1ZHX0FSUk9XX0NMQVNTLFxufSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQge2RpdiwgaXNFbGVtZW50fSBmcm9tICcuL2RvbS11dGlscyc7XG5pbXBvcnQge0luc3RhbmNlLCBQb3BwZXJFbGVtZW50LCBQcm9wc30gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge1BvcHBlckNoaWxkcmVufSBmcm9tICcuL3R5cGVzLWludGVybmFsJztcbmltcG9ydCB7YXJyYXlGcm9tfSBmcm9tICcuL3V0aWxzJztcblxuLy8gRmlyZWZveCBleHRlbnNpb25zIGRvbid0IGFsbG93IC5pbm5lckhUTUwgPSBcIi4uLlwiIHByb3BlcnR5LiBUaGlzIHRyaWNrcyBpdC5cbmNvbnN0IGlubmVySFRNTCA9ICgpOiAnaW5uZXJIVE1MJyA9PiAnaW5uZXJIVE1MJztcblxuZnVuY3Rpb24gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwoZWxlbWVudDogRWxlbWVudCwgaHRtbDogc3RyaW5nKTogdm9pZCB7XG4gIGVsZW1lbnRbaW5uZXJIVE1MKCldID0gaHRtbDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQXJyb3dFbGVtZW50KHZhbHVlOiBQcm9wc1snYXJyb3cnXSk6IEhUTUxEaXZFbGVtZW50IHtcbiAgY29uc3QgYXJyb3cgPSBkaXYoKTtcblxuICBpZiAodmFsdWUgPT09IHRydWUpIHtcbiAgICBhcnJvdy5jbGFzc05hbWUgPSBBUlJPV19DTEFTUztcbiAgfSBlbHNlIHtcbiAgICBhcnJvdy5jbGFzc05hbWUgPSBTVkdfQVJST1dfQ0xBU1M7XG5cbiAgICBpZiAoaXNFbGVtZW50KHZhbHVlKSkge1xuICAgICAgYXJyb3cuYXBwZW5kQ2hpbGQodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTChhcnJvdywgdmFsdWUgYXMgc3RyaW5nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXJyb3c7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRDb250ZW50KGNvbnRlbnQ6IEhUTUxEaXZFbGVtZW50LCBwcm9wczogUHJvcHMpOiB2b2lkIHtcbiAgaWYgKGlzRWxlbWVudChwcm9wcy5jb250ZW50KSkge1xuICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKGNvbnRlbnQsICcnKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHByb3BzLmNvbnRlbnQpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9wcy5jb250ZW50ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgaWYgKHByb3BzLmFsbG93SFRNTCkge1xuICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwoY29udGVudCwgcHJvcHMuY29udGVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSBwcm9wcy5jb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2hpbGRyZW4ocG9wcGVyOiBQb3BwZXJFbGVtZW50KTogUG9wcGVyQ2hpbGRyZW4ge1xuICBjb25zdCBib3ggPSBwb3BwZXIuZmlyc3RFbGVtZW50Q2hpbGQgYXMgSFRNTERpdkVsZW1lbnQ7XG4gIGNvbnN0IGJveENoaWxkcmVuID0gYXJyYXlGcm9tKGJveC5jaGlsZHJlbik7XG5cbiAgcmV0dXJuIHtcbiAgICBib3gsXG4gICAgY29udGVudDogYm94Q2hpbGRyZW4uZmluZCgobm9kZSkgPT4gbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoQ09OVEVOVF9DTEFTUykpLFxuICAgIGFycm93OiBib3hDaGlsZHJlbi5maW5kKFxuICAgICAgKG5vZGUpID0+XG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKEFSUk9XX0NMQVNTKSB8fFxuICAgICAgICBub2RlLmNsYXNzTGlzdC5jb250YWlucyhTVkdfQVJST1dfQ0xBU1MpXG4gICAgKSxcbiAgICBiYWNrZHJvcDogYm94Q2hpbGRyZW4uZmluZCgobm9kZSkgPT5cbiAgICAgIG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKEJBQ0tEUk9QX0NMQVNTKVxuICAgICksXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoXG4gIGluc3RhbmNlOiBJbnN0YW5jZVxuKToge1xuICBwb3BwZXI6IFBvcHBlckVsZW1lbnQ7XG4gIG9uVXBkYXRlPzogKHByZXZQcm9wczogUHJvcHMsIG5leHRQcm9wczogUHJvcHMpID0+IHZvaWQ7XG59IHtcbiAgY29uc3QgcG9wcGVyID0gZGl2KCk7XG5cbiAgY29uc3QgYm94ID0gZGl2KCk7XG4gIGJveC5jbGFzc05hbWUgPSBCT1hfQ0xBU1M7XG4gIGJveC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhdGUnLCAnaGlkZGVuJyk7XG4gIGJveC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG5cbiAgY29uc3QgY29udGVudCA9IGRpdigpO1xuICBjb250ZW50LmNsYXNzTmFtZSA9IENPTlRFTlRfQ0xBU1M7XG4gIGNvbnRlbnQuc2V0QXR0cmlidXRlKCdkYXRhLXN0YXRlJywgJ2hpZGRlbicpO1xuXG4gIHNldENvbnRlbnQoY29udGVudCwgaW5zdGFuY2UucHJvcHMpO1xuXG4gIHBvcHBlci5hcHBlbmRDaGlsZChib3gpO1xuICBib3guYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbiAgb25VcGRhdGUoaW5zdGFuY2UucHJvcHMsIGluc3RhbmNlLnByb3BzKTtcblxuICBmdW5jdGlvbiBvblVwZGF0ZShwcmV2UHJvcHM6IFByb3BzLCBuZXh0UHJvcHM6IFByb3BzKTogdm9pZCB7XG4gICAgY29uc3Qge2JveCwgY29udGVudCwgYXJyb3d9ID0gZ2V0Q2hpbGRyZW4ocG9wcGVyKTtcblxuICAgIGlmIChuZXh0UHJvcHMudGhlbWUpIHtcbiAgICAgIGJveC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnLCBuZXh0UHJvcHMudGhlbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBib3gucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRoZW1lJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBuZXh0UHJvcHMuYW5pbWF0aW9uID09PSAnc3RyaW5nJykge1xuICAgICAgYm94LnNldEF0dHJpYnV0ZSgnZGF0YS1hbmltYXRpb24nLCBuZXh0UHJvcHMuYW5pbWF0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYm94LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1hbmltYXRpb24nKTtcbiAgICB9XG5cbiAgICBpZiAobmV4dFByb3BzLmluZXJ0aWEpIHtcbiAgICAgIGJveC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5lcnRpYScsICcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYm94LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1pbmVydGlhJyk7XG4gICAgfVxuXG4gICAgYm94LnN0eWxlLm1heFdpZHRoID1cbiAgICAgIHR5cGVvZiBuZXh0UHJvcHMubWF4V2lkdGggPT09ICdudW1iZXInXG4gICAgICAgID8gYCR7bmV4dFByb3BzLm1heFdpZHRofXB4YFxuICAgICAgICA6IG5leHRQcm9wcy5tYXhXaWR0aDtcblxuICAgIGlmIChuZXh0UHJvcHMucm9sZSkge1xuICAgICAgYm94LnNldEF0dHJpYnV0ZSgncm9sZScsIG5leHRQcm9wcy5yb2xlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYm94LnJlbW92ZUF0dHJpYnV0ZSgncm9sZScpO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHByZXZQcm9wcy5jb250ZW50ICE9PSBuZXh0UHJvcHMuY29udGVudCB8fFxuICAgICAgcHJldlByb3BzLmFsbG93SFRNTCAhPT0gbmV4dFByb3BzLmFsbG93SFRNTFxuICAgICkge1xuICAgICAgc2V0Q29udGVudChjb250ZW50LCBpbnN0YW5jZS5wcm9wcyk7XG4gICAgfVxuXG4gICAgaWYgKG5leHRQcm9wcy5hcnJvdykge1xuICAgICAgaWYgKCFhcnJvdykge1xuICAgICAgICBib3guYXBwZW5kQ2hpbGQoY3JlYXRlQXJyb3dFbGVtZW50KG5leHRQcm9wcy5hcnJvdykpO1xuICAgICAgfSBlbHNlIGlmIChwcmV2UHJvcHMuYXJyb3cgIT09IG5leHRQcm9wcy5hcnJvdykge1xuICAgICAgICBib3gucmVtb3ZlQ2hpbGQoYXJyb3cpO1xuICAgICAgICBib3guYXBwZW5kQ2hpbGQoY3JlYXRlQXJyb3dFbGVtZW50KG5leHRQcm9wcy5hcnJvdykpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYXJyb3cpIHtcbiAgICAgIGJveC5yZW1vdmVDaGlsZChhcnJvdyEpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcG9wcGVyLFxuICAgIG9uVXBkYXRlLFxuICB9O1xufVxuXG4vLyBSdW50aW1lIGNoZWNrIHRvIGlkZW50aWZ5IGlmIHRoZSByZW5kZXIgZnVuY3Rpb24gaXMgdGhlIGRlZmF1bHQgb25lOyB0aGlzXG4vLyB3YXkgd2UgY2FuIGFwcGx5IGRlZmF1bHQgQ1NTIHRyYW5zaXRpb25zIGxvZ2ljIGFuZCBpdCBjYW4gYmUgdHJlZS1zaGFrZW4gYXdheVxucmVuZGVyLiQkdGlwcHkgPSB0cnVlO1xuIiwgImltcG9ydCB7Y3JlYXRlUG9wcGVyLCBTdHJpY3RNb2RpZmllcnMsIE1vZGlmaWVyfSBmcm9tICdAcG9wcGVyanMvY29yZSc7XG5pbXBvcnQge2N1cnJlbnRJbnB1dH0gZnJvbSAnLi9iaW5kR2xvYmFsRXZlbnRMaXN0ZW5lcnMnO1xuaW1wb3J0IHtpc0lFMTF9IGZyb20gJy4vYnJvd3Nlcic7XG5pbXBvcnQge1RJUFBZX0RFRkFVTFRfQVBQRU5EX1RPLCBUT1VDSF9PUFRJT05TfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQge1xuICBhY3R1YWxDb250YWlucyxcbiAgZGl2LFxuICBnZXRPd25lckRvY3VtZW50LFxuICBpc0N1cnNvck91dHNpZGVJbnRlcmFjdGl2ZUJvcmRlcixcbiAgaXNNb3VzZUV2ZW50LFxuICBzZXRUcmFuc2l0aW9uRHVyYXRpb24sXG4gIHNldFZpc2liaWxpdHlTdGF0ZSxcbiAgdXBkYXRlVHJhbnNpdGlvbkVuZExpc3RlbmVyLFxufSBmcm9tICcuL2RvbS11dGlscyc7XG5pbXBvcnQge2RlZmF1bHRQcm9wcywgZXZhbHVhdGVQcm9wcywgZ2V0RXh0ZW5kZWRQYXNzZWRQcm9wc30gZnJvbSAnLi9wcm9wcyc7XG5pbXBvcnQge2dldENoaWxkcmVufSBmcm9tICcuL3RlbXBsYXRlJztcbmltcG9ydCB7XG4gIENvbnRlbnQsXG4gIEluc3RhbmNlLFxuICBMaWZlY3ljbGVIb29rcyxcbiAgUG9wcGVyRWxlbWVudCxcbiAgUHJvcHMsXG4gIFJlZmVyZW5jZUVsZW1lbnQsXG59IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHtMaXN0ZW5lck9iamVjdCwgUG9wcGVyVHJlZURhdGEsIFBvcHBlckNoaWxkcmVufSBmcm9tICcuL3R5cGVzLWludGVybmFsJztcbmltcG9ydCB7XG4gIGFycmF5RnJvbSxcbiAgZGVib3VuY2UsXG4gIGdldFZhbHVlQXRJbmRleE9yUmV0dXJuLFxuICBpbnZva2VXaXRoQXJnc09yUmV0dXJuLFxuICBub3JtYWxpemVUb0FycmF5LFxuICBwdXNoSWZVbmlxdWUsXG4gIHNwbGl0QnlTcGFjZXMsXG4gIHVuaXF1ZSxcbiAgcmVtb3ZlVW5kZWZpbmVkUHJvcHMsXG59IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHtjcmVhdGVNZW1vcnlMZWFrV2FybmluZywgZXJyb3JXaGVuLCB3YXJuV2hlbn0gZnJvbSAnLi92YWxpZGF0aW9uJztcblxubGV0IGlkQ291bnRlciA9IDE7XG5sZXQgbW91c2VNb3ZlTGlzdGVuZXJzOiAoKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB2b2lkKVtdID0gW107XG5cbi8vIFVzZWQgYnkgYGhpZGVBbGwoKWBcbmV4cG9ydCBsZXQgbW91bnRlZEluc3RhbmNlczogSW5zdGFuY2VbXSA9IFtdO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUaXBweShcbiAgcmVmZXJlbmNlOiBSZWZlcmVuY2VFbGVtZW50LFxuICBwYXNzZWRQcm9wczogUGFydGlhbDxQcm9wcz5cbik6IEluc3RhbmNlIHtcbiAgY29uc3QgcHJvcHMgPSBldmFsdWF0ZVByb3BzKHJlZmVyZW5jZSwge1xuICAgIC4uLmRlZmF1bHRQcm9wcyxcbiAgICAuLi5nZXRFeHRlbmRlZFBhc3NlZFByb3BzKHJlbW92ZVVuZGVmaW5lZFByb3BzKHBhc3NlZFByb3BzKSksXG4gIH0pO1xuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyDwn5SSIFByaXZhdGUgbWVtYmVyc1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgbGV0IHNob3dUaW1lb3V0OiBhbnk7XG4gIGxldCBoaWRlVGltZW91dDogYW55O1xuICBsZXQgc2NoZWR1bGVIaWRlQW5pbWF0aW9uRnJhbWU6IG51bWJlcjtcbiAgbGV0IGlzVmlzaWJsZUZyb21DbGljayA9IGZhbHNlO1xuICBsZXQgZGlkSGlkZUR1ZVRvRG9jdW1lbnRNb3VzZURvd24gPSBmYWxzZTtcbiAgbGV0IGRpZFRvdWNoTW92ZSA9IGZhbHNlO1xuICBsZXQgaWdub3JlT25GaXJzdFVwZGF0ZSA9IGZhbHNlO1xuICBsZXQgbGFzdFRyaWdnZXJFdmVudDogRXZlbnQgfCB1bmRlZmluZWQ7XG4gIGxldCBjdXJyZW50VHJhbnNpdGlvbkVuZExpc3RlbmVyOiAoZXZlbnQ6IFRyYW5zaXRpb25FdmVudCkgPT4gdm9pZDtcbiAgbGV0IG9uRmlyc3RVcGRhdGU6ICgpID0+IHZvaWQ7XG4gIGxldCBsaXN0ZW5lcnM6IExpc3RlbmVyT2JqZWN0W10gPSBbXTtcbiAgbGV0IGRlYm91bmNlZE9uTW91c2VNb3ZlID0gZGVib3VuY2Uob25Nb3VzZU1vdmUsIHByb3BzLmludGVyYWN0aXZlRGVib3VuY2UpO1xuICBsZXQgY3VycmVudFRhcmdldDogRWxlbWVudDtcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8g8J+UkSBQdWJsaWMgbWVtYmVyc1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgY29uc3QgaWQgPSBpZENvdW50ZXIrKztcbiAgY29uc3QgcG9wcGVySW5zdGFuY2UgPSBudWxsO1xuICBjb25zdCBwbHVnaW5zID0gdW5pcXVlKHByb3BzLnBsdWdpbnMpO1xuXG4gIGNvbnN0IHN0YXRlID0ge1xuICAgIC8vIElzIHRoZSBpbnN0YW5jZSBjdXJyZW50bHkgZW5hYmxlZD9cbiAgICBpc0VuYWJsZWQ6IHRydWUsXG4gICAgLy8gSXMgdGhlIHRpcHB5IGN1cnJlbnRseSBzaG93aW5nIGFuZCBub3QgdHJhbnNpdGlvbmluZyBvdXQ/XG4gICAgaXNWaXNpYmxlOiBmYWxzZSxcbiAgICAvLyBIYXMgdGhlIGluc3RhbmNlIGJlZW4gZGVzdHJveWVkP1xuICAgIGlzRGVzdHJveWVkOiBmYWxzZSxcbiAgICAvLyBJcyB0aGUgdGlwcHkgY3VycmVudGx5IG1vdW50ZWQgdG8gdGhlIERPTT9cbiAgICBpc01vdW50ZWQ6IGZhbHNlLFxuICAgIC8vIEhhcyB0aGUgdGlwcHkgZmluaXNoZWQgdHJhbnNpdGlvbmluZyBpbj9cbiAgICBpc1Nob3duOiBmYWxzZSxcbiAgfTtcblxuICBjb25zdCBpbnN0YW5jZTogSW5zdGFuY2UgPSB7XG4gICAgLy8gcHJvcGVydGllc1xuICAgIGlkLFxuICAgIHJlZmVyZW5jZSxcbiAgICBwb3BwZXI6IGRpdigpLFxuICAgIHBvcHBlckluc3RhbmNlLFxuICAgIHByb3BzLFxuICAgIHN0YXRlLFxuICAgIHBsdWdpbnMsXG4gICAgLy8gbWV0aG9kc1xuICAgIGNsZWFyRGVsYXlUaW1lb3V0cyxcbiAgICBzZXRQcm9wcyxcbiAgICBzZXRDb250ZW50LFxuICAgIHNob3csXG4gICAgaGlkZSxcbiAgICBoaWRlV2l0aEludGVyYWN0aXZpdHksXG4gICAgZW5hYmxlLFxuICAgIGRpc2FibGUsXG4gICAgdW5tb3VudCxcbiAgICBkZXN0cm95LFxuICB9O1xuXG4gIC8vIFRPRE86IEludmVzdGlnYXRlIHdoeSB0aGlzIGVhcmx5IHJldHVybiBjYXVzZXMgYSBURFogZXJyb3IgaW4gdGhlIHRlc3RzIOKAlFxuICAvLyBpdCBkb2Vzbid0IHNlZW0gdG8gaGFwcGVuIGluIHRoZSBicm93c2VyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoIXByb3BzLnJlbmRlcikge1xuICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICBlcnJvcldoZW4odHJ1ZSwgJ3JlbmRlcigpIGZ1bmN0aW9uIGhhcyBub3QgYmVlbiBzdXBwbGllZC4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8gSW5pdGlhbCBtdXRhdGlvbnNcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIGNvbnN0IHtwb3BwZXIsIG9uVXBkYXRlfSA9IHByb3BzLnJlbmRlcihpbnN0YW5jZSk7XG5cbiAgcG9wcGVyLnNldEF0dHJpYnV0ZSgnZGF0YS1fX05BTUVTUEFDRV9QUkVGSVhfXy1yb290JywgJycpO1xuICBwb3BwZXIuaWQgPSBgX19OQU1FU1BBQ0VfUFJFRklYX18tJHtpbnN0YW5jZS5pZH1gO1xuXG4gIGluc3RhbmNlLnBvcHBlciA9IHBvcHBlcjtcbiAgcmVmZXJlbmNlLl90aXBweSA9IGluc3RhbmNlO1xuICBwb3BwZXIuX3RpcHB5ID0gaW5zdGFuY2U7XG5cbiAgY29uc3QgcGx1Z2luc0hvb2tzID0gcGx1Z2lucy5tYXAoKHBsdWdpbikgPT4gcGx1Z2luLmZuKGluc3RhbmNlKSk7XG4gIGNvbnN0IGhhc0FyaWFFeHBhbmRlZCA9IHJlZmVyZW5jZS5oYXNBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKTtcblxuICBhZGRMaXN0ZW5lcnMoKTtcbiAgaGFuZGxlQXJpYUV4cGFuZGVkQXR0cmlidXRlKCk7XG4gIGhhbmRsZVN0eWxlcygpO1xuXG4gIGludm9rZUhvb2soJ29uQ3JlYXRlJywgW2luc3RhbmNlXSk7XG5cbiAgaWYgKHByb3BzLnNob3dPbkNyZWF0ZSkge1xuICAgIHNjaGVkdWxlU2hvdygpO1xuICB9XG5cbiAgLy8gUHJldmVudCBhIHRpcHB5IHdpdGggYSBkZWxheSBmcm9tIGhpZGluZyBpZiB0aGUgY3Vyc29yIGxlZnQgdGhlbiByZXR1cm5lZFxuICAvLyBiZWZvcmUgaXQgc3RhcnRlZCBoaWRpbmdcbiAgcG9wcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XG4gICAgaWYgKGluc3RhbmNlLnByb3BzLmludGVyYWN0aXZlICYmIGluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZSkge1xuICAgICAgaW5zdGFuY2UuY2xlYXJEZWxheVRpbWVvdXRzKCk7XG4gICAgfVxuICB9KTtcblxuICBwb3BwZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICBpZiAoXG4gICAgICBpbnN0YW5jZS5wcm9wcy5pbnRlcmFjdGl2ZSAmJlxuICAgICAgaW5zdGFuY2UucHJvcHMudHJpZ2dlci5pbmRleE9mKCdtb3VzZWVudGVyJykgPj0gMFxuICAgICkge1xuICAgICAgZ2V0RG9jdW1lbnQoKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBkZWJvdW5jZWRPbk1vdXNlTW92ZSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gaW5zdGFuY2U7XG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIPCflJIgUHJpdmF0ZSBtZXRob2RzXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBmdW5jdGlvbiBnZXROb3JtYWxpemVkVG91Y2hTZXR0aW5ncygpOiBbc3RyaW5nIHwgYm9vbGVhbiwgbnVtYmVyXSB7XG4gICAgY29uc3Qge3RvdWNofSA9IGluc3RhbmNlLnByb3BzO1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHRvdWNoKSA/IHRvdWNoIDogW3RvdWNoLCAwXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldElzQ3VzdG9tVG91Y2hCZWhhdmlvcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gZ2V0Tm9ybWFsaXplZFRvdWNoU2V0dGluZ3MoKVswXSA9PT0gJ2hvbGQnO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0SXNEZWZhdWx0UmVuZGVyRm4oKTogYm9vbGVhbiB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHJldHVybiAhIWluc3RhbmNlLnByb3BzLnJlbmRlcj8uJCR0aXBweTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEN1cnJlbnRUYXJnZXQoKTogRWxlbWVudCB7XG4gICAgcmV0dXJuIGN1cnJlbnRUYXJnZXQgfHwgcmVmZXJlbmNlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RG9jdW1lbnQoKTogRG9jdW1lbnQge1xuICAgIGNvbnN0IHBhcmVudCA9IGdldEN1cnJlbnRUYXJnZXQoKS5wYXJlbnROb2RlIGFzIEVsZW1lbnQ7XG4gICAgcmV0dXJuIHBhcmVudCA/IGdldE93bmVyRG9jdW1lbnQocGFyZW50KSA6IGRvY3VtZW50O1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RGVmYXVsdFRlbXBsYXRlQ2hpbGRyZW4oKTogUG9wcGVyQ2hpbGRyZW4ge1xuICAgIHJldHVybiBnZXRDaGlsZHJlbihwb3BwZXIpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RGVsYXkoaXNTaG93OiBib29sZWFuKTogbnVtYmVyIHtcbiAgICAvLyBGb3IgdG91Y2ggb3Iga2V5Ym9hcmQgaW5wdXQsIGZvcmNlIGAwYCBkZWxheSBmb3IgVVggcmVhc29uc1xuICAgIC8vIEFsc28gaWYgdGhlIGluc3RhbmNlIGlzIG1vdW50ZWQgYnV0IG5vdCB2aXNpYmxlICh0cmFuc2l0aW9uaW5nIG91dCksXG4gICAgLy8gaWdub3JlIGRlbGF5XG4gICAgaWYgKFxuICAgICAgKGluc3RhbmNlLnN0YXRlLmlzTW91bnRlZCAmJiAhaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlKSB8fFxuICAgICAgY3VycmVudElucHV0LmlzVG91Y2ggfHxcbiAgICAgIChsYXN0VHJpZ2dlckV2ZW50ICYmIGxhc3RUcmlnZ2VyRXZlbnQudHlwZSA9PT0gJ2ZvY3VzJylcbiAgICApIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIHJldHVybiBnZXRWYWx1ZUF0SW5kZXhPclJldHVybihcbiAgICAgIGluc3RhbmNlLnByb3BzLmRlbGF5LFxuICAgICAgaXNTaG93ID8gMCA6IDEsXG4gICAgICBkZWZhdWx0UHJvcHMuZGVsYXlcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlU3R5bGVzKGZyb21IaWRlID0gZmFsc2UpOiB2b2lkIHtcbiAgICBwb3BwZXIuc3R5bGUucG9pbnRlckV2ZW50cyA9XG4gICAgICBpbnN0YW5jZS5wcm9wcy5pbnRlcmFjdGl2ZSAmJiAhZnJvbUhpZGUgPyAnJyA6ICdub25lJztcbiAgICBwb3BwZXIuc3R5bGUuekluZGV4ID0gYCR7aW5zdGFuY2UucHJvcHMuekluZGV4fWA7XG4gIH1cblxuICBmdW5jdGlvbiBpbnZva2VIb29rKFxuICAgIGhvb2s6IGtleW9mIExpZmVjeWNsZUhvb2tzLFxuICAgIGFyZ3M6IFtJbnN0YW5jZSwgYW55P10sXG4gICAgc2hvdWxkSW52b2tlUHJvcHNIb29rID0gdHJ1ZVxuICApOiB2b2lkIHtcbiAgICBwbHVnaW5zSG9va3MuZm9yRWFjaCgocGx1Z2luSG9va3MpID0+IHtcbiAgICAgIGlmIChwbHVnaW5Ib29rc1tob29rXSkge1xuICAgICAgICBwbHVnaW5Ib29rc1tob29rXSEoLi4uYXJncyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoc2hvdWxkSW52b2tlUHJvcHNIb29rKSB7XG4gICAgICBpbnN0YW5jZS5wcm9wc1tob29rXSguLi5hcmdzKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVBcmlhQ29udGVudEF0dHJpYnV0ZSgpOiB2b2lkIHtcbiAgICBjb25zdCB7YXJpYX0gPSBpbnN0YW5jZS5wcm9wcztcblxuICAgIGlmICghYXJpYS5jb250ZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYXR0ciA9IGBhcmlhLSR7YXJpYS5jb250ZW50fWA7XG4gICAgY29uc3QgaWQgPSBwb3BwZXIuaWQ7XG4gICAgY29uc3Qgbm9kZXMgPSBub3JtYWxpemVUb0FycmF5KGluc3RhbmNlLnByb3BzLnRyaWdnZXJUYXJnZXQgfHwgcmVmZXJlbmNlKTtcblxuICAgIG5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IG5vZGUuZ2V0QXR0cmlidXRlKGF0dHIpO1xuXG4gICAgICBpZiAoaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlKSB7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKGF0dHIsIGN1cnJlbnRWYWx1ZSA/IGAke2N1cnJlbnRWYWx1ZX0gJHtpZH1gIDogaWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbmV4dFZhbHVlID0gY3VycmVudFZhbHVlICYmIGN1cnJlbnRWYWx1ZS5yZXBsYWNlKGlkLCAnJykudHJpbSgpO1xuXG4gICAgICAgIGlmIChuZXh0VmFsdWUpIHtcbiAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShhdHRyLCBuZXh0VmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKGF0dHIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVBcmlhRXhwYW5kZWRBdHRyaWJ1dGUoKTogdm9pZCB7XG4gICAgaWYgKGhhc0FyaWFFeHBhbmRlZCB8fCAhaW5zdGFuY2UucHJvcHMuYXJpYS5leHBhbmRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGVzID0gbm9ybWFsaXplVG9BcnJheShpbnN0YW5jZS5wcm9wcy50cmlnZ2VyVGFyZ2V0IHx8IHJlZmVyZW5jZSk7XG5cbiAgICBub2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICBpZiAoaW5zdGFuY2UucHJvcHMuaW50ZXJhY3RpdmUpIHtcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgJ2FyaWEtZXhwYW5kZWQnLFxuICAgICAgICAgIGluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZSAmJiBub2RlID09PSBnZXRDdXJyZW50VGFyZ2V0KClcbiAgICAgICAgICAgID8gJ3RydWUnXG4gICAgICAgICAgICA6ICdmYWxzZSdcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhbnVwSW50ZXJhY3RpdmVNb3VzZUxpc3RlbmVycygpOiB2b2lkIHtcbiAgICBnZXREb2N1bWVudCgpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGRlYm91bmNlZE9uTW91c2VNb3ZlKTtcbiAgICBtb3VzZU1vdmVMaXN0ZW5lcnMgPSBtb3VzZU1vdmVMaXN0ZW5lcnMuZmlsdGVyKFxuICAgICAgKGxpc3RlbmVyKSA9PiBsaXN0ZW5lciAhPT0gZGVib3VuY2VkT25Nb3VzZU1vdmVcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gb25Eb2N1bWVudFByZXNzKGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCk6IHZvaWQge1xuICAgIC8vIE1vdmVkIGZpbmdlciB0byBzY3JvbGwgaW5zdGVhZCBvZiBhbiBpbnRlbnRpb25hbCB0YXAgb3V0c2lkZVxuICAgIGlmIChjdXJyZW50SW5wdXQuaXNUb3VjaCkge1xuICAgICAgaWYgKGRpZFRvdWNoTW92ZSB8fCBldmVudC50eXBlID09PSAnbW91c2Vkb3duJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYWN0dWFsVGFyZ2V0ID1cbiAgICAgIChldmVudC5jb21wb3NlZFBhdGggJiYgZXZlbnQuY29tcG9zZWRQYXRoKClbMF0pIHx8IGV2ZW50LnRhcmdldDtcblxuICAgIC8vIENsaWNrZWQgb24gaW50ZXJhY3RpdmUgcG9wcGVyXG4gICAgaWYgKFxuICAgICAgaW5zdGFuY2UucHJvcHMuaW50ZXJhY3RpdmUgJiZcbiAgICAgIGFjdHVhbENvbnRhaW5zKHBvcHBlciwgYWN0dWFsVGFyZ2V0IGFzIEVsZW1lbnQpXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQ2xpY2tlZCBvbiB0aGUgZXZlbnQgbGlzdGVuZXJzIHRhcmdldFxuICAgIGlmIChcbiAgICAgIG5vcm1hbGl6ZVRvQXJyYXkoaW5zdGFuY2UucHJvcHMudHJpZ2dlclRhcmdldCB8fCByZWZlcmVuY2UpLnNvbWUoKGVsKSA9PlxuICAgICAgICBhY3R1YWxDb250YWlucyhlbCwgYWN0dWFsVGFyZ2V0IGFzIEVsZW1lbnQpXG4gICAgICApXG4gICAgKSB7XG4gICAgICBpZiAoY3VycmVudElucHV0LmlzVG91Y2gpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIGluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZSAmJlxuICAgICAgICBpbnN0YW5jZS5wcm9wcy50cmlnZ2VyLmluZGV4T2YoJ2NsaWNrJykgPj0gMFxuICAgICAgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaW52b2tlSG9vaygnb25DbGlja091dHNpZGUnLCBbaW5zdGFuY2UsIGV2ZW50XSk7XG4gICAgfVxuXG4gICAgaWYgKGluc3RhbmNlLnByb3BzLmhpZGVPbkNsaWNrID09PSB0cnVlKSB7XG4gICAgICBpbnN0YW5jZS5jbGVhckRlbGF5VGltZW91dHMoKTtcbiAgICAgIGluc3RhbmNlLmhpZGUoKTtcblxuICAgICAgLy8gYG1vdXNlZG93bmAgZXZlbnQgaXMgZmlyZWQgcmlnaHQgYmVmb3JlIGBmb2N1c2AgaWYgcHJlc3NpbmcgdGhlXG4gICAgICAvLyBjdXJyZW50VGFyZ2V0LiBUaGlzIGxldHMgYSB0aXBweSB3aXRoIGBmb2N1c2AgdHJpZ2dlciBrbm93IHRoYXQgaXRcbiAgICAgIC8vIHNob3VsZCBub3Qgc2hvd1xuICAgICAgZGlkSGlkZUR1ZVRvRG9jdW1lbnRNb3VzZURvd24gPSB0cnVlO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGRpZEhpZGVEdWVUb0RvY3VtZW50TW91c2VEb3duID0gZmFsc2U7XG4gICAgICB9KTtcblxuICAgICAgLy8gVGhlIGxpc3RlbmVyIGdldHMgYWRkZWQgaW4gYHNjaGVkdWxlU2hvdygpYCwgYnV0IHRoaXMgbWF5IGJlIGhpZGluZyBpdFxuICAgICAgLy8gYmVmb3JlIGl0IHNob3dzLCBhbmQgaGlkZSgpJ3MgZWFybHkgYmFpbC1vdXQgYmVoYXZpb3IgY2FuIHByZXZlbnQgaXRcbiAgICAgIC8vIGZyb20gYmVpbmcgY2xlYW5lZCB1cFxuICAgICAgaWYgKCFpbnN0YW5jZS5zdGF0ZS5pc01vdW50ZWQpIHtcbiAgICAgICAgcmVtb3ZlRG9jdW1lbnRQcmVzcygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uVG91Y2hNb3ZlKCk6IHZvaWQge1xuICAgIGRpZFRvdWNoTW92ZSA9IHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBvblRvdWNoU3RhcnQoKTogdm9pZCB7XG4gICAgZGlkVG91Y2hNb3ZlID0gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBhZGREb2N1bWVudFByZXNzKCk6IHZvaWQge1xuICAgIGNvbnN0IGRvYyA9IGdldERvY3VtZW50KCk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uRG9jdW1lbnRQcmVzcywgdHJ1ZSk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25Eb2N1bWVudFByZXNzLCBUT1VDSF9PUFRJT05TKTtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIG9uVG91Y2hTdGFydCwgVE9VQ0hfT1BUSU9OUyk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG9uVG91Y2hNb3ZlLCBUT1VDSF9PUFRJT05TKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZURvY3VtZW50UHJlc3MoKTogdm9pZCB7XG4gICAgY29uc3QgZG9jID0gZ2V0RG9jdW1lbnQoKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgb25Eb2N1bWVudFByZXNzLCB0cnVlKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBvbkRvY3VtZW50UHJlc3MsIFRPVUNIX09QVElPTlMpO1xuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0LCBUT1VDSF9PUFRJT05TKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgb25Ub3VjaE1vdmUsIFRPVUNIX09QVElPTlMpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25UcmFuc2l0aW9uZWRPdXQoZHVyYXRpb246IG51bWJlciwgY2FsbGJhY2s6ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICBvblRyYW5zaXRpb25FbmQoZHVyYXRpb24sICgpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgIWluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZSAmJlxuICAgICAgICBwb3BwZXIucGFyZW50Tm9kZSAmJlxuICAgICAgICBwb3BwZXIucGFyZW50Tm9kZS5jb250YWlucyhwb3BwZXIpXG4gICAgICApIHtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uVHJhbnNpdGlvbmVkSW4oZHVyYXRpb246IG51bWJlciwgY2FsbGJhY2s6ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICBvblRyYW5zaXRpb25FbmQoZHVyYXRpb24sIGNhbGxiYWNrKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uVHJhbnNpdGlvbkVuZChkdXJhdGlvbjogbnVtYmVyLCBjYWxsYmFjazogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIGNvbnN0IGJveCA9IGdldERlZmF1bHRUZW1wbGF0ZUNoaWxkcmVuKCkuYm94O1xuXG4gICAgZnVuY3Rpb24gbGlzdGVuZXIoZXZlbnQ6IFRyYW5zaXRpb25FdmVudCk6IHZvaWQge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gYm94KSB7XG4gICAgICAgIHVwZGF0ZVRyYW5zaXRpb25FbmRMaXN0ZW5lcihib3gsICdyZW1vdmUnLCBsaXN0ZW5lcik7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTWFrZSBjYWxsYmFjayBzeW5jaHJvbm91cyBpZiBkdXJhdGlvbiBpcyAwXG4gICAgLy8gYHRyYW5zaXRpb25lbmRgIHdvbid0IGZpcmUgb3RoZXJ3aXNlXG4gICAgaWYgKGR1cmF0aW9uID09PSAwKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICB9XG5cbiAgICB1cGRhdGVUcmFuc2l0aW9uRW5kTGlzdGVuZXIoYm94LCAncmVtb3ZlJywgY3VycmVudFRyYW5zaXRpb25FbmRMaXN0ZW5lcik7XG4gICAgdXBkYXRlVHJhbnNpdGlvbkVuZExpc3RlbmVyKGJveCwgJ2FkZCcsIGxpc3RlbmVyKTtcblxuICAgIGN1cnJlbnRUcmFuc2l0aW9uRW5kTGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uKFxuICAgIGV2ZW50VHlwZTogc3RyaW5nLFxuICAgIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIsXG4gICAgb3B0aW9uczogYm9vbGVhbiB8IFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0gZmFsc2VcbiAgKTogdm9pZCB7XG4gICAgY29uc3Qgbm9kZXMgPSBub3JtYWxpemVUb0FycmF5KGluc3RhbmNlLnByb3BzLnRyaWdnZXJUYXJnZXQgfHwgcmVmZXJlbmNlKTtcbiAgICBub2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICAgIGxpc3RlbmVycy5wdXNoKHtub2RlLCBldmVudFR5cGUsIGhhbmRsZXIsIG9wdGlvbnN9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZExpc3RlbmVycygpOiB2b2lkIHtcbiAgICBpZiAoZ2V0SXNDdXN0b21Ub3VjaEJlaGF2aW9yKCkpIHtcbiAgICAgIG9uKCd0b3VjaHN0YXJ0Jywgb25UcmlnZ2VyLCB7cGFzc2l2ZTogdHJ1ZX0pO1xuICAgICAgb24oJ3RvdWNoZW5kJywgb25Nb3VzZUxlYXZlIGFzIEV2ZW50TGlzdGVuZXIsIHtwYXNzaXZlOiB0cnVlfSk7XG4gICAgfVxuXG4gICAgc3BsaXRCeVNwYWNlcyhpbnN0YW5jZS5wcm9wcy50cmlnZ2VyKS5mb3JFYWNoKChldmVudFR5cGUpID0+IHtcbiAgICAgIGlmIChldmVudFR5cGUgPT09ICdtYW51YWwnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgb24oZXZlbnRUeXBlLCBvblRyaWdnZXIpO1xuXG4gICAgICBzd2l0Y2ggKGV2ZW50VHlwZSkge1xuICAgICAgICBjYXNlICdtb3VzZWVudGVyJzpcbiAgICAgICAgICBvbignbW91c2VsZWF2ZScsIG9uTW91c2VMZWF2ZSBhcyBFdmVudExpc3RlbmVyKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZm9jdXMnOlxuICAgICAgICAgIG9uKGlzSUUxMSA/ICdmb2N1c291dCcgOiAnYmx1cicsIG9uQmx1ck9yRm9jdXNPdXQgYXMgRXZlbnRMaXN0ZW5lcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2ZvY3VzaW4nOlxuICAgICAgICAgIG9uKCdmb2N1c291dCcsIG9uQmx1ck9yRm9jdXNPdXQgYXMgRXZlbnRMaXN0ZW5lcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcnMoKTogdm9pZCB7XG4gICAgbGlzdGVuZXJzLmZvckVhY2goKHtub2RlLCBldmVudFR5cGUsIGhhbmRsZXIsIG9wdGlvbnN9OiBMaXN0ZW5lck9iamVjdCkgPT4ge1xuICAgICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgfSk7XG4gICAgbGlzdGVuZXJzID0gW107XG4gIH1cblxuICBmdW5jdGlvbiBvblRyaWdnZXIoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgbGV0IHNob3VsZFNjaGVkdWxlQ2xpY2tIaWRlID0gZmFsc2U7XG5cbiAgICBpZiAoXG4gICAgICAhaW5zdGFuY2Uuc3RhdGUuaXNFbmFibGVkIHx8XG4gICAgICBpc0V2ZW50TGlzdGVuZXJTdG9wcGVkKGV2ZW50KSB8fFxuICAgICAgZGlkSGlkZUR1ZVRvRG9jdW1lbnRNb3VzZURvd25cbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB3YXNGb2N1c2VkID0gbGFzdFRyaWdnZXJFdmVudD8udHlwZSA9PT0gJ2ZvY3VzJztcblxuICAgIGxhc3RUcmlnZ2VyRXZlbnQgPSBldmVudDtcbiAgICBjdXJyZW50VGFyZ2V0ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBFbGVtZW50O1xuXG4gICAgaGFuZGxlQXJpYUV4cGFuZGVkQXR0cmlidXRlKCk7XG5cbiAgICBpZiAoIWluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZSAmJiBpc01vdXNlRXZlbnQoZXZlbnQpKSB7XG4gICAgICAvLyBJZiBzY3JvbGxpbmcsIGBtb3VzZWVudGVyYCBldmVudHMgY2FuIGJlIGZpcmVkIGlmIHRoZSBjdXJzb3IgbGFuZHNcbiAgICAgIC8vIG92ZXIgYSBuZXcgdGFyZ2V0LCBidXQgYG1vdXNlbW92ZWAgZXZlbnRzIGRvbid0IGdldCBmaXJlZC4gVGhpc1xuICAgICAgLy8gY2F1c2VzIGludGVyYWN0aXZlIHRvb2x0aXBzIHRvIGdldCBzdHVjayBvcGVuIHVudGlsIHRoZSBjdXJzb3IgaXNcbiAgICAgIC8vIG1vdmVkXG4gICAgICBtb3VzZU1vdmVMaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IGxpc3RlbmVyKGV2ZW50KSk7XG4gICAgfVxuXG4gICAgLy8gVG9nZ2xlIHNob3cvaGlkZSB3aGVuIGNsaWNraW5nIGNsaWNrLXRyaWdnZXJlZCB0b29sdGlwc1xuICAgIGlmIChcbiAgICAgIGV2ZW50LnR5cGUgPT09ICdjbGljaycgJiZcbiAgICAgIChpbnN0YW5jZS5wcm9wcy50cmlnZ2VyLmluZGV4T2YoJ21vdXNlZW50ZXInKSA8IDAgfHxcbiAgICAgICAgaXNWaXNpYmxlRnJvbUNsaWNrKSAmJlxuICAgICAgaW5zdGFuY2UucHJvcHMuaGlkZU9uQ2xpY2sgIT09IGZhbHNlICYmXG4gICAgICBpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGVcbiAgICApIHtcbiAgICAgIHNob3VsZFNjaGVkdWxlQ2xpY2tIaWRlID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2NoZWR1bGVTaG93KGV2ZW50KTtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ2NsaWNrJykge1xuICAgICAgaXNWaXNpYmxlRnJvbUNsaWNrID0gIXNob3VsZFNjaGVkdWxlQ2xpY2tIaWRlO1xuICAgIH1cblxuICAgIGlmIChzaG91bGRTY2hlZHVsZUNsaWNrSGlkZSAmJiAhd2FzRm9jdXNlZCkge1xuICAgICAgc2NoZWR1bGVIaWRlKGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbk1vdXNlTW92ZShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBOb2RlO1xuICAgIGNvbnN0IGlzQ3Vyc29yT3ZlclJlZmVyZW5jZU9yUG9wcGVyID1cbiAgICAgIGdldEN1cnJlbnRUYXJnZXQoKS5jb250YWlucyh0YXJnZXQpIHx8IHBvcHBlci5jb250YWlucyh0YXJnZXQpO1xuXG4gICAgaWYgKGV2ZW50LnR5cGUgPT09ICdtb3VzZW1vdmUnICYmIGlzQ3Vyc29yT3ZlclJlZmVyZW5jZU9yUG9wcGVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcG9wcGVyVHJlZURhdGEgPSBnZXROZXN0ZWRQb3BwZXJUcmVlKClcbiAgICAgIC5jb25jYXQocG9wcGVyKVxuICAgICAgLm1hcCgocG9wcGVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gcG9wcGVyLl90aXBweSE7XG4gICAgICAgIGNvbnN0IHN0YXRlID0gaW5zdGFuY2UucG9wcGVySW5zdGFuY2U/LnN0YXRlO1xuXG4gICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwb3BwZXJSZWN0OiBwb3BwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgICBwb3BwZXJTdGF0ZTogc3RhdGUsXG4gICAgICAgICAgICBwcm9wcyxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9KVxuICAgICAgLmZpbHRlcihCb29sZWFuKSBhcyBQb3BwZXJUcmVlRGF0YVtdO1xuXG4gICAgaWYgKGlzQ3Vyc29yT3V0c2lkZUludGVyYWN0aXZlQm9yZGVyKHBvcHBlclRyZWVEYXRhLCBldmVudCkpIHtcbiAgICAgIGNsZWFudXBJbnRlcmFjdGl2ZU1vdXNlTGlzdGVuZXJzKCk7XG4gICAgICBzY2hlZHVsZUhpZGUoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uTW91c2VMZWF2ZShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IHNob3VsZEJhaWwgPVxuICAgICAgaXNFdmVudExpc3RlbmVyU3RvcHBlZChldmVudCkgfHxcbiAgICAgIChpbnN0YW5jZS5wcm9wcy50cmlnZ2VyLmluZGV4T2YoJ2NsaWNrJykgPj0gMCAmJiBpc1Zpc2libGVGcm9tQ2xpY2spO1xuXG4gICAgaWYgKHNob3VsZEJhaWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoaW5zdGFuY2UucHJvcHMuaW50ZXJhY3RpdmUpIHtcbiAgICAgIGluc3RhbmNlLmhpZGVXaXRoSW50ZXJhY3Rpdml0eShldmVudCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2NoZWR1bGVIaWRlKGV2ZW50KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQmx1ck9yRm9jdXNPdXQoZXZlbnQ6IEZvY3VzRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoXG4gICAgICBpbnN0YW5jZS5wcm9wcy50cmlnZ2VyLmluZGV4T2YoJ2ZvY3VzaW4nKSA8IDAgJiZcbiAgICAgIGV2ZW50LnRhcmdldCAhPT0gZ2V0Q3VycmVudFRhcmdldCgpXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSWYgZm9jdXMgd2FzIG1vdmVkIHRvIHdpdGhpbiB0aGUgcG9wcGVyXG4gICAgaWYgKFxuICAgICAgaW5zdGFuY2UucHJvcHMuaW50ZXJhY3RpdmUgJiZcbiAgICAgIGV2ZW50LnJlbGF0ZWRUYXJnZXQgJiZcbiAgICAgIHBvcHBlci5jb250YWlucyhldmVudC5yZWxhdGVkVGFyZ2V0IGFzIEVsZW1lbnQpXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2NoZWR1bGVIaWRlKGV2ZW50KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzRXZlbnRMaXN0ZW5lclN0b3BwZWQoZXZlbnQ6IEV2ZW50KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGN1cnJlbnRJbnB1dC5pc1RvdWNoXG4gICAgICA/IGdldElzQ3VzdG9tVG91Y2hCZWhhdmlvcigpICE9PSBldmVudC50eXBlLmluZGV4T2YoJ3RvdWNoJykgPj0gMFxuICAgICAgOiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVBvcHBlckluc3RhbmNlKCk6IHZvaWQge1xuICAgIGRlc3Ryb3lQb3BwZXJJbnN0YW5jZSgpO1xuXG4gICAgY29uc3Qge1xuICAgICAgcG9wcGVyT3B0aW9ucyxcbiAgICAgIHBsYWNlbWVudCxcbiAgICAgIG9mZnNldCxcbiAgICAgIGdldFJlZmVyZW5jZUNsaWVudFJlY3QsXG4gICAgICBtb3ZlVHJhbnNpdGlvbixcbiAgICB9ID0gaW5zdGFuY2UucHJvcHM7XG5cbiAgICBjb25zdCBhcnJvdyA9IGdldElzRGVmYXVsdFJlbmRlckZuKCkgPyBnZXRDaGlsZHJlbihwb3BwZXIpLmFycm93IDogbnVsbDtcblxuICAgIGNvbnN0IGNvbXB1dGVkUmVmZXJlbmNlID0gZ2V0UmVmZXJlbmNlQ2xpZW50UmVjdFxuICAgICAgPyB7XG4gICAgICAgICAgZ2V0Qm91bmRpbmdDbGllbnRSZWN0OiBnZXRSZWZlcmVuY2VDbGllbnRSZWN0LFxuICAgICAgICAgIGNvbnRleHRFbGVtZW50OlxuICAgICAgICAgICAgZ2V0UmVmZXJlbmNlQ2xpZW50UmVjdC5jb250ZXh0RWxlbWVudCB8fCBnZXRDdXJyZW50VGFyZ2V0KCksXG4gICAgICAgIH1cbiAgICAgIDogcmVmZXJlbmNlO1xuXG4gICAgY29uc3QgdGlwcHlNb2RpZmllcjogTW9kaWZpZXI8JyQkdGlwcHknLCBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPj4gPSB7XG4gICAgICBuYW1lOiAnJCR0aXBweScsXG4gICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgcGhhc2U6ICdiZWZvcmVXcml0ZScsXG4gICAgICByZXF1aXJlczogWydjb21wdXRlU3R5bGVzJ10sXG4gICAgICBmbih7c3RhdGV9KSB7XG4gICAgICAgIGlmIChnZXRJc0RlZmF1bHRSZW5kZXJGbigpKSB7XG4gICAgICAgICAgY29uc3Qge2JveH0gPSBnZXREZWZhdWx0VGVtcGxhdGVDaGlsZHJlbigpO1xuXG4gICAgICAgICAgWydwbGFjZW1lbnQnLCAncmVmZXJlbmNlLWhpZGRlbicsICdlc2NhcGVkJ10uZm9yRWFjaCgoYXR0cikgPT4ge1xuICAgICAgICAgICAgaWYgKGF0dHIgPT09ICdwbGFjZW1lbnQnKSB7XG4gICAgICAgICAgICAgIGJveC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGxhY2VtZW50Jywgc3RhdGUucGxhY2VtZW50KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmIChzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlcltgZGF0YS1wb3BwZXItJHthdHRyfWBdKSB7XG4gICAgICAgICAgICAgICAgYm94LnNldEF0dHJpYnV0ZShgZGF0YS0ke2F0dHJ9YCwgJycpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJveC5yZW1vdmVBdHRyaWJ1dGUoYGRhdGEtJHthdHRyfWApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciA9IHt9O1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH07XG5cbiAgICB0eXBlIFRpcHB5TW9kaWZpZXIgPSBNb2RpZmllcjwnJCR0aXBweScsIFJlY29yZDxzdHJpbmcsIHVua25vd24+PjtcbiAgICB0eXBlIEV4dGVuZGVkTW9kaWZpZXJzID0gU3RyaWN0TW9kaWZpZXJzIHwgUGFydGlhbDxUaXBweU1vZGlmaWVyPjtcblxuICAgIGNvbnN0IG1vZGlmaWVyczogQXJyYXk8RXh0ZW5kZWRNb2RpZmllcnM+ID0gW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnb2Zmc2V0JyxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIG9mZnNldCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdwcmV2ZW50T3ZlcmZsb3cnLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgcGFkZGluZzoge1xuICAgICAgICAgICAgdG9wOiAyLFxuICAgICAgICAgICAgYm90dG9tOiAyLFxuICAgICAgICAgICAgbGVmdDogNSxcbiAgICAgICAgICAgIHJpZ2h0OiA1LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnZmxpcCcsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICBwYWRkaW5nOiA1LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ2NvbXB1dGVTdHlsZXMnLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgYWRhcHRpdmU6ICFtb3ZlVHJhbnNpdGlvbixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB0aXBweU1vZGlmaWVyLFxuICAgIF07XG5cbiAgICBpZiAoZ2V0SXNEZWZhdWx0UmVuZGVyRm4oKSAmJiBhcnJvdykge1xuICAgICAgbW9kaWZpZXJzLnB1c2goe1xuICAgICAgICBuYW1lOiAnYXJyb3cnLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgZWxlbWVudDogYXJyb3csXG4gICAgICAgICAgcGFkZGluZzogMyxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIG1vZGlmaWVycy5wdXNoKC4uLihwb3BwZXJPcHRpb25zPy5tb2RpZmllcnMgfHwgW10pKTtcblxuICAgIGluc3RhbmNlLnBvcHBlckluc3RhbmNlID0gY3JlYXRlUG9wcGVyPEV4dGVuZGVkTW9kaWZpZXJzPihcbiAgICAgIGNvbXB1dGVkUmVmZXJlbmNlLFxuICAgICAgcG9wcGVyLFxuICAgICAge1xuICAgICAgICAuLi5wb3BwZXJPcHRpb25zLFxuICAgICAgICBwbGFjZW1lbnQsXG4gICAgICAgIG9uRmlyc3RVcGRhdGUsXG4gICAgICAgIG1vZGlmaWVycyxcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVzdHJveVBvcHBlckluc3RhbmNlKCk6IHZvaWQge1xuICAgIGlmIChpbnN0YW5jZS5wb3BwZXJJbnN0YW5jZSkge1xuICAgICAgaW5zdGFuY2UucG9wcGVySW5zdGFuY2UuZGVzdHJveSgpO1xuICAgICAgaW5zdGFuY2UucG9wcGVySW5zdGFuY2UgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG1vdW50KCk6IHZvaWQge1xuICAgIGNvbnN0IHthcHBlbmRUb30gPSBpbnN0YW5jZS5wcm9wcztcblxuICAgIGxldCBwYXJlbnROb2RlOiBhbnk7XG5cbiAgICAvLyBCeSBkZWZhdWx0LCB3ZSdsbCBhcHBlbmQgdGhlIHBvcHBlciB0byB0aGUgdHJpZ2dlclRhcmdldHMncyBwYXJlbnROb2RlIHNvXG4gICAgLy8gaXQncyBkaXJlY3RseSBhZnRlciB0aGUgcmVmZXJlbmNlIGVsZW1lbnQgc28gdGhlIGVsZW1lbnRzIGluc2lkZSB0aGVcbiAgICAvLyB0aXBweSBjYW4gYmUgdGFiYmVkIHRvXG4gICAgLy8gSWYgdGhlcmUgYXJlIGNsaXBwaW5nIGlzc3VlcywgdGhlIHVzZXIgY2FuIHNwZWNpZnkgYSBkaWZmZXJlbnQgYXBwZW5kVG9cbiAgICAvLyBhbmQgZW5zdXJlIGZvY3VzIG1hbmFnZW1lbnQgaXMgaGFuZGxlZCBjb3JyZWN0bHkgbWFudWFsbHlcbiAgICBjb25zdCBub2RlID0gZ2V0Q3VycmVudFRhcmdldCgpO1xuXG4gICAgaWYgKFxuICAgICAgKGluc3RhbmNlLnByb3BzLmludGVyYWN0aXZlICYmIGFwcGVuZFRvID09PSBUSVBQWV9ERUZBVUxUX0FQUEVORF9UTykgfHxcbiAgICAgIGFwcGVuZFRvID09PSAncGFyZW50J1xuICAgICkge1xuICAgICAgcGFyZW50Tm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyZW50Tm9kZSA9IGludm9rZVdpdGhBcmdzT3JSZXR1cm4oYXBwZW5kVG8sIFtub2RlXSk7XG4gICAgfVxuXG4gICAgLy8gVGhlIHBvcHBlciBlbGVtZW50IG5lZWRzIHRvIGV4aXN0IG9uIHRoZSBET00gYmVmb3JlIGl0cyBwb3NpdGlvbiBjYW4gYmVcbiAgICAvLyB1cGRhdGVkIGFzIFBvcHBlciBuZWVkcyB0byByZWFkIGl0cyBkaW1lbnNpb25zXG4gICAgaWYgKCFwYXJlbnROb2RlLmNvbnRhaW5zKHBvcHBlcikpIHtcbiAgICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQocG9wcGVyKTtcbiAgICB9XG5cbiAgICBpbnN0YW5jZS5zdGF0ZS5pc01vdW50ZWQgPSB0cnVlO1xuXG4gICAgY3JlYXRlUG9wcGVySW5zdGFuY2UoKTtcblxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKF9fREVWX18pIHtcbiAgICAgIC8vIEFjY2Vzc2liaWxpdHkgY2hlY2tcbiAgICAgIHdhcm5XaGVuKFxuICAgICAgICBpbnN0YW5jZS5wcm9wcy5pbnRlcmFjdGl2ZSAmJlxuICAgICAgICAgIGFwcGVuZFRvID09PSBkZWZhdWx0UHJvcHMuYXBwZW5kVG8gJiZcbiAgICAgICAgICBub2RlLm5leHRFbGVtZW50U2libGluZyAhPT0gcG9wcGVyLFxuICAgICAgICBbXG4gICAgICAgICAgJ0ludGVyYWN0aXZlIHRpcHB5IGVsZW1lbnQgbWF5IG5vdCBiZSBhY2Nlc3NpYmxlIHZpYSBrZXlib2FyZCcsXG4gICAgICAgICAgJ25hdmlnYXRpb24gYmVjYXVzZSBpdCBpcyBub3QgZGlyZWN0bHkgYWZ0ZXIgdGhlIHJlZmVyZW5jZSBlbGVtZW50JyxcbiAgICAgICAgICAnaW4gdGhlIERPTSBzb3VyY2Ugb3JkZXIuJyxcbiAgICAgICAgICAnXFxuXFxuJyxcbiAgICAgICAgICAnVXNpbmcgYSB3cmFwcGVyIDxkaXY+IG9yIDxzcGFuPiB0YWcgYXJvdW5kIHRoZSByZWZlcmVuY2UgZWxlbWVudCcsXG4gICAgICAgICAgJ3NvbHZlcyB0aGlzIGJ5IGNyZWF0aW5nIGEgbmV3IHBhcmVudE5vZGUgY29udGV4dC4nLFxuICAgICAgICAgICdcXG5cXG4nLFxuICAgICAgICAgICdTcGVjaWZ5aW5nIGBhcHBlbmRUbzogZG9jdW1lbnQuYm9keWAgc2lsZW5jZXMgdGhpcyB3YXJuaW5nLCBidXQgaXQnLFxuICAgICAgICAgICdhc3N1bWVzIHlvdSBhcmUgdXNpbmcgYSBmb2N1cyBtYW5hZ2VtZW50IHNvbHV0aW9uIHRvIGhhbmRsZScsXG4gICAgICAgICAgJ2tleWJvYXJkIG5hdmlnYXRpb24uJyxcbiAgICAgICAgICAnXFxuXFxuJyxcbiAgICAgICAgICAnU2VlOiBodHRwczovL2F0b21pa3MuZ2l0aHViLmlvL3RpcHB5anMvdjYvYWNjZXNzaWJpbGl0eS8jaW50ZXJhY3Rpdml0eScsXG4gICAgICAgIF0uam9pbignICcpXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE5lc3RlZFBvcHBlclRyZWUoKTogUG9wcGVyRWxlbWVudFtdIHtcbiAgICByZXR1cm4gYXJyYXlGcm9tKFxuICAgICAgcG9wcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLV9fTkFNRVNQQUNFX1BSRUZJWF9fLXJvb3RdJylcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gc2NoZWR1bGVTaG93KGV2ZW50PzogRXZlbnQpOiB2b2lkIHtcbiAgICBpbnN0YW5jZS5jbGVhckRlbGF5VGltZW91dHMoKTtcblxuICAgIGlmIChldmVudCkge1xuICAgICAgaW52b2tlSG9vaygnb25UcmlnZ2VyJywgW2luc3RhbmNlLCBldmVudF0pO1xuICAgIH1cblxuICAgIGFkZERvY3VtZW50UHJlc3MoKTtcblxuICAgIGxldCBkZWxheSA9IGdldERlbGF5KHRydWUpO1xuICAgIGNvbnN0IFt0b3VjaFZhbHVlLCB0b3VjaERlbGF5XSA9IGdldE5vcm1hbGl6ZWRUb3VjaFNldHRpbmdzKCk7XG5cbiAgICBpZiAoY3VycmVudElucHV0LmlzVG91Y2ggJiYgdG91Y2hWYWx1ZSA9PT0gJ2hvbGQnICYmIHRvdWNoRGVsYXkpIHtcbiAgICAgIGRlbGF5ID0gdG91Y2hEZWxheTtcbiAgICB9XG5cbiAgICBpZiAoZGVsYXkpIHtcbiAgICAgIHNob3dUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGluc3RhbmNlLnNob3coKTtcbiAgICAgIH0sIGRlbGF5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5zdGFuY2Uuc2hvdygpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNjaGVkdWxlSGlkZShldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBpbnN0YW5jZS5jbGVhckRlbGF5VGltZW91dHMoKTtcblxuICAgIGludm9rZUhvb2soJ29uVW50cmlnZ2VyJywgW2luc3RhbmNlLCBldmVudF0pO1xuXG4gICAgaWYgKCFpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGUpIHtcbiAgICAgIHJlbW92ZURvY3VtZW50UHJlc3MoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEZvciBpbnRlcmFjdGl2ZSB0aXBwaWVzLCBzY2hlZHVsZUhpZGUgaXMgYWRkZWQgdG8gYSBkb2N1bWVudC5ib2R5IGhhbmRsZXJcbiAgICAvLyBmcm9tIG9uTW91c2VMZWF2ZSBzbyBtdXN0IGludGVyY2VwdCBzY2hlZHVsZWQgaGlkZXMgZnJvbSBtb3VzZW1vdmUvbGVhdmVcbiAgICAvLyBldmVudHMgd2hlbiB0cmlnZ2VyIGNvbnRhaW5zIG1vdXNlZW50ZXIgYW5kIGNsaWNrLCBhbmQgdGhlIHRpcCBpc1xuICAgIC8vIGN1cnJlbnRseSBzaG93biBhcyBhIHJlc3VsdCBvZiBhIGNsaWNrLlxuICAgIGlmIChcbiAgICAgIGluc3RhbmNlLnByb3BzLnRyaWdnZXIuaW5kZXhPZignbW91c2VlbnRlcicpID49IDAgJiZcbiAgICAgIGluc3RhbmNlLnByb3BzLnRyaWdnZXIuaW5kZXhPZignY2xpY2snKSA+PSAwICYmXG4gICAgICBbJ21vdXNlbGVhdmUnLCAnbW91c2Vtb3ZlJ10uaW5kZXhPZihldmVudC50eXBlKSA+PSAwICYmXG4gICAgICBpc1Zpc2libGVGcm9tQ2xpY2tcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkZWxheSA9IGdldERlbGF5KGZhbHNlKTtcblxuICAgIGlmIChkZWxheSkge1xuICAgICAgaGlkZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKGluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZSkge1xuICAgICAgICAgIGluc3RhbmNlLmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgfSwgZGVsYXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBGaXhlcyBhIGB0cmFuc2l0aW9uZW5kYCBwcm9ibGVtIHdoZW4gaXQgZmlyZXMgMSBmcmFtZSB0b29cbiAgICAgIC8vIGxhdGUgc29tZXRpbWVzLCB3ZSBkb24ndCB3YW50IGhpZGUoKSB0byBiZSBjYWxsZWQuXG4gICAgICBzY2hlZHVsZUhpZGVBbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIGluc3RhbmNlLmhpZGUoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyDwn5SRIFB1YmxpYyBtZXRob2RzXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBmdW5jdGlvbiBlbmFibGUoKTogdm9pZCB7XG4gICAgaW5zdGFuY2Uuc3RhdGUuaXNFbmFibGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRpc2FibGUoKTogdm9pZCB7XG4gICAgLy8gRGlzYWJsaW5nIHRoZSBpbnN0YW5jZSBzaG91bGQgYWxzbyBoaWRlIGl0XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2F0b21pa3MvdGlwcHkuanMtcmVhY3QvaXNzdWVzLzEwNlxuICAgIGluc3RhbmNlLmhpZGUoKTtcbiAgICBpbnN0YW5jZS5zdGF0ZS5pc0VuYWJsZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyRGVsYXlUaW1lb3V0cygpOiB2b2lkIHtcbiAgICBjbGVhclRpbWVvdXQoc2hvd1RpbWVvdXQpO1xuICAgIGNsZWFyVGltZW91dChoaWRlVGltZW91dCk7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoc2NoZWR1bGVIaWRlQW5pbWF0aW9uRnJhbWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0UHJvcHMocGFydGlhbFByb3BzOiBQYXJ0aWFsPFByb3BzPik6IHZvaWQge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKF9fREVWX18pIHtcbiAgICAgIHdhcm5XaGVuKGluc3RhbmNlLnN0YXRlLmlzRGVzdHJveWVkLCBjcmVhdGVNZW1vcnlMZWFrV2FybmluZygnc2V0UHJvcHMnKSk7XG4gICAgfVxuXG4gICAgaWYgKGluc3RhbmNlLnN0YXRlLmlzRGVzdHJveWVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaW52b2tlSG9vaygnb25CZWZvcmVVcGRhdGUnLCBbaW5zdGFuY2UsIHBhcnRpYWxQcm9wc10pO1xuXG4gICAgcmVtb3ZlTGlzdGVuZXJzKCk7XG5cbiAgICBjb25zdCBwcmV2UHJvcHMgPSBpbnN0YW5jZS5wcm9wcztcbiAgICBjb25zdCBuZXh0UHJvcHMgPSBldmFsdWF0ZVByb3BzKHJlZmVyZW5jZSwge1xuICAgICAgLi4ucHJldlByb3BzLFxuICAgICAgLi4ucmVtb3ZlVW5kZWZpbmVkUHJvcHMocGFydGlhbFByb3BzKSxcbiAgICAgIGlnbm9yZUF0dHJpYnV0ZXM6IHRydWUsXG4gICAgfSk7XG5cbiAgICBpbnN0YW5jZS5wcm9wcyA9IG5leHRQcm9wcztcblxuICAgIGFkZExpc3RlbmVycygpO1xuXG4gICAgaWYgKHByZXZQcm9wcy5pbnRlcmFjdGl2ZURlYm91bmNlICE9PSBuZXh0UHJvcHMuaW50ZXJhY3RpdmVEZWJvdW5jZSkge1xuICAgICAgY2xlYW51cEludGVyYWN0aXZlTW91c2VMaXN0ZW5lcnMoKTtcbiAgICAgIGRlYm91bmNlZE9uTW91c2VNb3ZlID0gZGVib3VuY2UoXG4gICAgICAgIG9uTW91c2VNb3ZlLFxuICAgICAgICBuZXh0UHJvcHMuaW50ZXJhY3RpdmVEZWJvdW5jZVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBFbnN1cmUgc3RhbGUgYXJpYS1leHBhbmRlZCBhdHRyaWJ1dGVzIGFyZSByZW1vdmVkXG4gICAgaWYgKHByZXZQcm9wcy50cmlnZ2VyVGFyZ2V0ICYmICFuZXh0UHJvcHMudHJpZ2dlclRhcmdldCkge1xuICAgICAgbm9ybWFsaXplVG9BcnJheShwcmV2UHJvcHMudHJpZ2dlclRhcmdldCkuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChuZXh0UHJvcHMudHJpZ2dlclRhcmdldCkge1xuICAgICAgcmVmZXJlbmNlLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpO1xuICAgIH1cblxuICAgIGhhbmRsZUFyaWFFeHBhbmRlZEF0dHJpYnV0ZSgpO1xuICAgIGhhbmRsZVN0eWxlcygpO1xuXG4gICAgaWYgKG9uVXBkYXRlKSB7XG4gICAgICBvblVwZGF0ZShwcmV2UHJvcHMsIG5leHRQcm9wcyk7XG4gICAgfVxuXG4gICAgaWYgKGluc3RhbmNlLnBvcHBlckluc3RhbmNlKSB7XG4gICAgICBjcmVhdGVQb3BwZXJJbnN0YW5jZSgpO1xuXG4gICAgICAvLyBGaXhlcyBhbiBpc3N1ZSB3aXRoIG5lc3RlZCB0aXBwaWVzIGlmIHRoZXkgYXJlIGFsbCBnZXR0aW5nIHJlLXJlbmRlcmVkLFxuICAgICAgLy8gYW5kIHRoZSBuZXN0ZWQgb25lcyBnZXQgcmUtcmVuZGVyZWQgZmlyc3QuXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYXRvbWlrcy90aXBweWpzLXJlYWN0L2lzc3Vlcy8xNzdcbiAgICAgIC8vIFRPRE86IGZpbmQgYSBjbGVhbmVyIC8gbW9yZSBlZmZpY2llbnQgc29sdXRpb24oISlcbiAgICAgIGdldE5lc3RlZFBvcHBlclRyZWUoKS5mb3JFYWNoKChuZXN0ZWRQb3BwZXIpID0+IHtcbiAgICAgICAgLy8gUmVhY3QgKGFuZCBvdGhlciBVSSBsaWJzIGxpa2VseSkgcmVxdWlyZXMgYSByQUYgd3JhcHBlciBhcyBpdCBmbHVzaGVzXG4gICAgICAgIC8vIGl0cyB3b3JrIGluIG9uZVxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobmVzdGVkUG9wcGVyLl90aXBweSEucG9wcGVySW5zdGFuY2UhLmZvcmNlVXBkYXRlKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGludm9rZUhvb2soJ29uQWZ0ZXJVcGRhdGUnLCBbaW5zdGFuY2UsIHBhcnRpYWxQcm9wc10pO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0Q29udGVudChjb250ZW50OiBDb250ZW50KTogdm9pZCB7XG4gICAgaW5zdGFuY2Uuc2V0UHJvcHMoe2NvbnRlbnR9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3coKTogdm9pZCB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAoX19ERVZfXykge1xuICAgICAgd2FybldoZW4oaW5zdGFuY2Uuc3RhdGUuaXNEZXN0cm95ZWQsIGNyZWF0ZU1lbW9yeUxlYWtXYXJuaW5nKCdzaG93JykpO1xuICAgIH1cblxuICAgIC8vIEVhcmx5IGJhaWwtb3V0XG4gICAgY29uc3QgaXNBbHJlYWR5VmlzaWJsZSA9IGluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZTtcbiAgICBjb25zdCBpc0Rlc3Ryb3llZCA9IGluc3RhbmNlLnN0YXRlLmlzRGVzdHJveWVkO1xuICAgIGNvbnN0IGlzRGlzYWJsZWQgPSAhaW5zdGFuY2Uuc3RhdGUuaXNFbmFibGVkO1xuICAgIGNvbnN0IGlzVG91Y2hBbmRUb3VjaERpc2FibGVkID1cbiAgICAgIGN1cnJlbnRJbnB1dC5pc1RvdWNoICYmICFpbnN0YW5jZS5wcm9wcy50b3VjaDtcbiAgICBjb25zdCBkdXJhdGlvbiA9IGdldFZhbHVlQXRJbmRleE9yUmV0dXJuKFxuICAgICAgaW5zdGFuY2UucHJvcHMuZHVyYXRpb24sXG4gICAgICAwLFxuICAgICAgZGVmYXVsdFByb3BzLmR1cmF0aW9uXG4gICAgKTtcblxuICAgIGlmIChcbiAgICAgIGlzQWxyZWFkeVZpc2libGUgfHxcbiAgICAgIGlzRGVzdHJveWVkIHx8XG4gICAgICBpc0Rpc2FibGVkIHx8XG4gICAgICBpc1RvdWNoQW5kVG91Y2hEaXNhYmxlZFxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIE5vcm1hbGl6ZSBgZGlzYWJsZWRgIGJlaGF2aW9yIGFjcm9zcyBicm93c2Vycy5cbiAgICAvLyBGaXJlZm94IGFsbG93cyBldmVudHMgb24gZGlzYWJsZWQgZWxlbWVudHMsIGJ1dCBDaHJvbWUgZG9lc24ndC5cbiAgICAvLyBVc2luZyBhIHdyYXBwZXIgZWxlbWVudCAoaS5lLiA8c3Bhbj4pIGlzIHJlY29tbWVuZGVkLlxuICAgIGlmIChnZXRDdXJyZW50VGFyZ2V0KCkuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaW52b2tlSG9vaygnb25TaG93JywgW2luc3RhbmNlXSwgZmFsc2UpO1xuICAgIGlmIChpbnN0YW5jZS5wcm9wcy5vblNob3coaW5zdGFuY2UpID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGluc3RhbmNlLnN0YXRlLmlzVmlzaWJsZSA9IHRydWU7XG5cbiAgICBpZiAoZ2V0SXNEZWZhdWx0UmVuZGVyRm4oKSkge1xuICAgICAgcG9wcGVyLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgfVxuXG4gICAgaGFuZGxlU3R5bGVzKCk7XG4gICAgYWRkRG9jdW1lbnRQcmVzcygpO1xuXG4gICAgaWYgKCFpbnN0YW5jZS5zdGF0ZS5pc01vdW50ZWQpIHtcbiAgICAgIHBvcHBlci5zdHlsZS50cmFuc2l0aW9uID0gJ25vbmUnO1xuICAgIH1cblxuICAgIC8vIElmIGZsaXBwaW5nIHRvIHRoZSBvcHBvc2l0ZSBzaWRlIGFmdGVyIGhpZGluZyBhdCBsZWFzdCBvbmNlLCB0aGVcbiAgICAvLyBhbmltYXRpb24gd2lsbCB1c2UgdGhlIHdyb25nIHBsYWNlbWVudCB3aXRob3V0IHJlc2V0dGluZyB0aGUgZHVyYXRpb25cbiAgICBpZiAoZ2V0SXNEZWZhdWx0UmVuZGVyRm4oKSkge1xuICAgICAgY29uc3Qge2JveCwgY29udGVudH0gPSBnZXREZWZhdWx0VGVtcGxhdGVDaGlsZHJlbigpO1xuICAgICAgc2V0VHJhbnNpdGlvbkR1cmF0aW9uKFtib3gsIGNvbnRlbnRdLCAwKTtcbiAgICB9XG5cbiAgICBvbkZpcnN0VXBkYXRlID0gKCk6IHZvaWQgPT4ge1xuICAgICAgaWYgKCFpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGUgfHwgaWdub3JlT25GaXJzdFVwZGF0ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlnbm9yZU9uRmlyc3RVcGRhdGUgPSB0cnVlO1xuXG4gICAgICAvLyByZWZsb3dcbiAgICAgIHZvaWQgcG9wcGVyLm9mZnNldEhlaWdodDtcblxuICAgICAgcG9wcGVyLnN0eWxlLnRyYW5zaXRpb24gPSBpbnN0YW5jZS5wcm9wcy5tb3ZlVHJhbnNpdGlvbjtcblxuICAgICAgaWYgKGdldElzRGVmYXVsdFJlbmRlckZuKCkgJiYgaW5zdGFuY2UucHJvcHMuYW5pbWF0aW9uKSB7XG4gICAgICAgIGNvbnN0IHtib3gsIGNvbnRlbnR9ID0gZ2V0RGVmYXVsdFRlbXBsYXRlQ2hpbGRyZW4oKTtcbiAgICAgICAgc2V0VHJhbnNpdGlvbkR1cmF0aW9uKFtib3gsIGNvbnRlbnRdLCBkdXJhdGlvbik7XG4gICAgICAgIHNldFZpc2liaWxpdHlTdGF0ZShbYm94LCBjb250ZW50XSwgJ3Zpc2libGUnKTtcbiAgICAgIH1cblxuICAgICAgaGFuZGxlQXJpYUNvbnRlbnRBdHRyaWJ1dGUoKTtcbiAgICAgIGhhbmRsZUFyaWFFeHBhbmRlZEF0dHJpYnV0ZSgpO1xuXG4gICAgICBwdXNoSWZVbmlxdWUobW91bnRlZEluc3RhbmNlcywgaW5zdGFuY2UpO1xuXG4gICAgICAvLyBjZXJ0YWluIG1vZGlmaWVycyAoZS5nLiBgbWF4U2l6ZWApIHJlcXVpcmUgYSBzZWNvbmQgdXBkYXRlIGFmdGVyIHRoZVxuICAgICAgLy8gcG9wcGVyIGhhcyBiZWVuIHBvc2l0aW9uZWQgZm9yIHRoZSBmaXJzdCB0aW1lXG4gICAgICBpbnN0YW5jZS5wb3BwZXJJbnN0YW5jZT8uZm9yY2VVcGRhdGUoKTtcblxuICAgICAgaW52b2tlSG9vaygnb25Nb3VudCcsIFtpbnN0YW5jZV0pO1xuXG4gICAgICBpZiAoaW5zdGFuY2UucHJvcHMuYW5pbWF0aW9uICYmIGdldElzRGVmYXVsdFJlbmRlckZuKCkpIHtcbiAgICAgICAgb25UcmFuc2l0aW9uZWRJbihkdXJhdGlvbiwgKCkgPT4ge1xuICAgICAgICAgIGluc3RhbmNlLnN0YXRlLmlzU2hvd24gPSB0cnVlO1xuICAgICAgICAgIGludm9rZUhvb2soJ29uU2hvd24nLCBbaW5zdGFuY2VdKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIG1vdW50KCk7XG4gIH1cblxuICBmdW5jdGlvbiBoaWRlKCk6IHZvaWQge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKF9fREVWX18pIHtcbiAgICAgIHdhcm5XaGVuKGluc3RhbmNlLnN0YXRlLmlzRGVzdHJveWVkLCBjcmVhdGVNZW1vcnlMZWFrV2FybmluZygnaGlkZScpKTtcbiAgICB9XG5cbiAgICAvLyBFYXJseSBiYWlsLW91dFxuICAgIGNvbnN0IGlzQWxyZWFkeUhpZGRlbiA9ICFpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGU7XG4gICAgY29uc3QgaXNEZXN0cm95ZWQgPSBpbnN0YW5jZS5zdGF0ZS5pc0Rlc3Ryb3llZDtcbiAgICBjb25zdCBpc0Rpc2FibGVkID0gIWluc3RhbmNlLnN0YXRlLmlzRW5hYmxlZDtcbiAgICBjb25zdCBkdXJhdGlvbiA9IGdldFZhbHVlQXRJbmRleE9yUmV0dXJuKFxuICAgICAgaW5zdGFuY2UucHJvcHMuZHVyYXRpb24sXG4gICAgICAxLFxuICAgICAgZGVmYXVsdFByb3BzLmR1cmF0aW9uXG4gICAgKTtcblxuICAgIGlmIChpc0FscmVhZHlIaWRkZW4gfHwgaXNEZXN0cm95ZWQgfHwgaXNEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGludm9rZUhvb2soJ29uSGlkZScsIFtpbnN0YW5jZV0sIGZhbHNlKTtcbiAgICBpZiAoaW5zdGFuY2UucHJvcHMub25IaWRlKGluc3RhbmNlKSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGUgPSBmYWxzZTtcbiAgICBpbnN0YW5jZS5zdGF0ZS5pc1Nob3duID0gZmFsc2U7XG4gICAgaWdub3JlT25GaXJzdFVwZGF0ZSA9IGZhbHNlO1xuICAgIGlzVmlzaWJsZUZyb21DbGljayA9IGZhbHNlO1xuXG4gICAgaWYgKGdldElzRGVmYXVsdFJlbmRlckZuKCkpIHtcbiAgICAgIHBvcHBlci5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgfVxuXG4gICAgY2xlYW51cEludGVyYWN0aXZlTW91c2VMaXN0ZW5lcnMoKTtcbiAgICByZW1vdmVEb2N1bWVudFByZXNzKCk7XG4gICAgaGFuZGxlU3R5bGVzKHRydWUpO1xuXG4gICAgaWYgKGdldElzRGVmYXVsdFJlbmRlckZuKCkpIHtcbiAgICAgIGNvbnN0IHtib3gsIGNvbnRlbnR9ID0gZ2V0RGVmYXVsdFRlbXBsYXRlQ2hpbGRyZW4oKTtcblxuICAgICAgaWYgKGluc3RhbmNlLnByb3BzLmFuaW1hdGlvbikge1xuICAgICAgICBzZXRUcmFuc2l0aW9uRHVyYXRpb24oW2JveCwgY29udGVudF0sIGR1cmF0aW9uKTtcbiAgICAgICAgc2V0VmlzaWJpbGl0eVN0YXRlKFtib3gsIGNvbnRlbnRdLCAnaGlkZGVuJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlQXJpYUNvbnRlbnRBdHRyaWJ1dGUoKTtcbiAgICBoYW5kbGVBcmlhRXhwYW5kZWRBdHRyaWJ1dGUoKTtcblxuICAgIGlmIChpbnN0YW5jZS5wcm9wcy5hbmltYXRpb24pIHtcbiAgICAgIGlmIChnZXRJc0RlZmF1bHRSZW5kZXJGbigpKSB7XG4gICAgICAgIG9uVHJhbnNpdGlvbmVkT3V0KGR1cmF0aW9uLCBpbnN0YW5jZS51bm1vdW50KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaW5zdGFuY2UudW5tb3VudCgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGVXaXRoSW50ZXJhY3Rpdml0eShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKF9fREVWX18pIHtcbiAgICAgIHdhcm5XaGVuKFxuICAgICAgICBpbnN0YW5jZS5zdGF0ZS5pc0Rlc3Ryb3llZCxcbiAgICAgICAgY3JlYXRlTWVtb3J5TGVha1dhcm5pbmcoJ2hpZGVXaXRoSW50ZXJhY3Rpdml0eScpXG4gICAgICApO1xuICAgIH1cblxuICAgIGdldERvY3VtZW50KCkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZGVib3VuY2VkT25Nb3VzZU1vdmUpO1xuICAgIHB1c2hJZlVuaXF1ZShtb3VzZU1vdmVMaXN0ZW5lcnMsIGRlYm91bmNlZE9uTW91c2VNb3ZlKTtcbiAgICBkZWJvdW5jZWRPbk1vdXNlTW92ZShldmVudCk7XG4gIH1cblxuICBmdW5jdGlvbiB1bm1vdW50KCk6IHZvaWQge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKF9fREVWX18pIHtcbiAgICAgIHdhcm5XaGVuKGluc3RhbmNlLnN0YXRlLmlzRGVzdHJveWVkLCBjcmVhdGVNZW1vcnlMZWFrV2FybmluZygndW5tb3VudCcpKTtcbiAgICB9XG5cbiAgICBpZiAoaW5zdGFuY2Uuc3RhdGUuaXNWaXNpYmxlKSB7XG4gICAgICBpbnN0YW5jZS5oaWRlKCk7XG4gICAgfVxuXG4gICAgaWYgKCFpbnN0YW5jZS5zdGF0ZS5pc01vdW50ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBkZXN0cm95UG9wcGVySW5zdGFuY2UoKTtcblxuICAgIC8vIElmIGEgcG9wcGVyIGlzIG5vdCBpbnRlcmFjdGl2ZSwgaXQgd2lsbCBiZSBhcHBlbmRlZCBvdXRzaWRlIHRoZSBwb3BwZXJcbiAgICAvLyB0cmVlIGJ5IGRlZmF1bHQuIFRoaXMgc2VlbXMgbWFpbmx5IGZvciBpbnRlcmFjdGl2ZSB0aXBwaWVzLCBidXQgd2Ugc2hvdWxkXG4gICAgLy8gZmluZCBhIHdvcmthcm91bmQgaWYgcG9zc2libGVcbiAgICBnZXROZXN0ZWRQb3BwZXJUcmVlKCkuZm9yRWFjaCgobmVzdGVkUG9wcGVyKSA9PiB7XG4gICAgICBuZXN0ZWRQb3BwZXIuX3RpcHB5IS51bm1vdW50KCk7XG4gICAgfSk7XG5cbiAgICBpZiAocG9wcGVyLnBhcmVudE5vZGUpIHtcbiAgICAgIHBvcHBlci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHBvcHBlcik7XG4gICAgfVxuXG4gICAgbW91bnRlZEluc3RhbmNlcyA9IG1vdW50ZWRJbnN0YW5jZXMuZmlsdGVyKChpKSA9PiBpICE9PSBpbnN0YW5jZSk7XG5cbiAgICBpbnN0YW5jZS5zdGF0ZS5pc01vdW50ZWQgPSBmYWxzZTtcbiAgICBpbnZva2VIb29rKCdvbkhpZGRlbicsIFtpbnN0YW5jZV0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVzdHJveSgpOiB2b2lkIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICB3YXJuV2hlbihpbnN0YW5jZS5zdGF0ZS5pc0Rlc3Ryb3llZCwgY3JlYXRlTWVtb3J5TGVha1dhcm5pbmcoJ2Rlc3Ryb3knKSk7XG4gICAgfVxuXG4gICAgaWYgKGluc3RhbmNlLnN0YXRlLmlzRGVzdHJveWVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaW5zdGFuY2UuY2xlYXJEZWxheVRpbWVvdXRzKCk7XG4gICAgaW5zdGFuY2UudW5tb3VudCgpO1xuXG4gICAgcmVtb3ZlTGlzdGVuZXJzKCk7XG5cbiAgICBkZWxldGUgcmVmZXJlbmNlLl90aXBweTtcblxuICAgIGluc3RhbmNlLnN0YXRlLmlzRGVzdHJveWVkID0gdHJ1ZTtcblxuICAgIGludm9rZUhvb2soJ29uRGVzdHJveScsIFtpbnN0YW5jZV0pO1xuICB9XG59XG4iLCAiaW1wb3J0IGJpbmRHbG9iYWxFdmVudExpc3RlbmVycywge1xuICBjdXJyZW50SW5wdXQsXG59IGZyb20gJy4vYmluZEdsb2JhbEV2ZW50TGlzdGVuZXJzJztcbmltcG9ydCBjcmVhdGVUaXBweSwge21vdW50ZWRJbnN0YW5jZXN9IGZyb20gJy4vY3JlYXRlVGlwcHknO1xuaW1wb3J0IHtnZXRBcnJheU9mRWxlbWVudHMsIGlzRWxlbWVudCwgaXNSZWZlcmVuY2VFbGVtZW50fSBmcm9tICcuL2RvbS11dGlscyc7XG5pbXBvcnQge2RlZmF1bHRQcm9wcywgc2V0RGVmYXVsdFByb3BzLCB2YWxpZGF0ZVByb3BzfSBmcm9tICcuL3Byb3BzJztcbmltcG9ydCB7SGlkZUFsbCwgSGlkZUFsbE9wdGlvbnMsIEluc3RhbmNlLCBQcm9wcywgVGFyZ2V0c30gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge3ZhbGlkYXRlVGFyZ2V0cywgd2FybldoZW59IGZyb20gJy4vdmFsaWRhdGlvbic7XG5cbmZ1bmN0aW9uIHRpcHB5KFxuICB0YXJnZXRzOiBUYXJnZXRzLFxuICBvcHRpb25hbFByb3BzOiBQYXJ0aWFsPFByb3BzPiA9IHt9XG4pOiBJbnN0YW5jZSB8IEluc3RhbmNlW10ge1xuICBjb25zdCBwbHVnaW5zID0gZGVmYXVsdFByb3BzLnBsdWdpbnMuY29uY2F0KG9wdGlvbmFsUHJvcHMucGx1Z2lucyB8fCBbXSk7XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKF9fREVWX18pIHtcbiAgICB2YWxpZGF0ZVRhcmdldHModGFyZ2V0cyk7XG4gICAgdmFsaWRhdGVQcm9wcyhvcHRpb25hbFByb3BzLCBwbHVnaW5zKTtcbiAgfVxuXG4gIGJpbmRHbG9iYWxFdmVudExpc3RlbmVycygpO1xuXG4gIGNvbnN0IHBhc3NlZFByb3BzOiBQYXJ0aWFsPFByb3BzPiA9IHsuLi5vcHRpb25hbFByb3BzLCBwbHVnaW5zfTtcblxuICBjb25zdCBlbGVtZW50cyA9IGdldEFycmF5T2ZFbGVtZW50cyh0YXJnZXRzKTtcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAoX19ERVZfXykge1xuICAgIGNvbnN0IGlzU2luZ2xlQ29udGVudEVsZW1lbnQgPSBpc0VsZW1lbnQocGFzc2VkUHJvcHMuY29udGVudCk7XG4gICAgY29uc3QgaXNNb3JlVGhhbk9uZVJlZmVyZW5jZUVsZW1lbnQgPSBlbGVtZW50cy5sZW5ndGggPiAxO1xuICAgIHdhcm5XaGVuKFxuICAgICAgaXNTaW5nbGVDb250ZW50RWxlbWVudCAmJiBpc01vcmVUaGFuT25lUmVmZXJlbmNlRWxlbWVudCxcbiAgICAgIFtcbiAgICAgICAgJ3RpcHB5KCkgd2FzIHBhc3NlZCBhbiBFbGVtZW50IGFzIHRoZSBgY29udGVudGAgcHJvcCwgYnV0IG1vcmUgdGhhbicsXG4gICAgICAgICdvbmUgdGlwcHkgaW5zdGFuY2Ugd2FzIGNyZWF0ZWQgYnkgdGhpcyBpbnZvY2F0aW9uLiBUaGlzIG1lYW5zIHRoZScsXG4gICAgICAgICdjb250ZW50IGVsZW1lbnQgd2lsbCBvbmx5IGJlIGFwcGVuZGVkIHRvIHRoZSBsYXN0IHRpcHB5IGluc3RhbmNlLicsXG4gICAgICAgICdcXG5cXG4nLFxuICAgICAgICAnSW5zdGVhZCwgcGFzcyB0aGUgLmlubmVySFRNTCBvZiB0aGUgZWxlbWVudCwgb3IgdXNlIGEgZnVuY3Rpb24gdGhhdCcsXG4gICAgICAgICdyZXR1cm5zIGEgY2xvbmVkIHZlcnNpb24gb2YgdGhlIGVsZW1lbnQgaW5zdGVhZC4nLFxuICAgICAgICAnXFxuXFxuJyxcbiAgICAgICAgJzEpIGNvbnRlbnQ6IGVsZW1lbnQuaW5uZXJIVE1MXFxuJyxcbiAgICAgICAgJzIpIGNvbnRlbnQ6ICgpID0+IGVsZW1lbnQuY2xvbmVOb2RlKHRydWUpJyxcbiAgICAgIF0uam9pbignICcpXG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IGluc3RhbmNlcyA9IGVsZW1lbnRzLnJlZHVjZTxJbnN0YW5jZVtdPihcbiAgICAoYWNjLCByZWZlcmVuY2UpOiBJbnN0YW5jZVtdID0+IHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gcmVmZXJlbmNlICYmIGNyZWF0ZVRpcHB5KHJlZmVyZW5jZSwgcGFzc2VkUHJvcHMpO1xuXG4gICAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgYWNjLnB1c2goaW5zdGFuY2UpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sXG4gICAgW11cbiAgKTtcblxuICByZXR1cm4gaXNFbGVtZW50KHRhcmdldHMpID8gaW5zdGFuY2VzWzBdIDogaW5zdGFuY2VzO1xufVxuXG50aXBweS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG50aXBweS5zZXREZWZhdWx0UHJvcHMgPSBzZXREZWZhdWx0UHJvcHM7XG50aXBweS5jdXJyZW50SW5wdXQgPSBjdXJyZW50SW5wdXQ7XG5cbmV4cG9ydCBkZWZhdWx0IHRpcHB5O1xuXG5leHBvcnQgY29uc3QgaGlkZUFsbDogSGlkZUFsbCA9ICh7XG4gIGV4Y2x1ZGU6IGV4Y2x1ZGVkUmVmZXJlbmNlT3JJbnN0YW5jZSxcbiAgZHVyYXRpb24sXG59OiBIaWRlQWxsT3B0aW9ucyA9IHt9KSA9PiB7XG4gIG1vdW50ZWRJbnN0YW5jZXMuZm9yRWFjaCgoaW5zdGFuY2UpID0+IHtcbiAgICBsZXQgaXNFeGNsdWRlZCA9IGZhbHNlO1xuXG4gICAgaWYgKGV4Y2x1ZGVkUmVmZXJlbmNlT3JJbnN0YW5jZSkge1xuICAgICAgaXNFeGNsdWRlZCA9IGlzUmVmZXJlbmNlRWxlbWVudChleGNsdWRlZFJlZmVyZW5jZU9ySW5zdGFuY2UpXG4gICAgICAgID8gaW5zdGFuY2UucmVmZXJlbmNlID09PSBleGNsdWRlZFJlZmVyZW5jZU9ySW5zdGFuY2VcbiAgICAgICAgOiBpbnN0YW5jZS5wb3BwZXIgPT09IChleGNsdWRlZFJlZmVyZW5jZU9ySW5zdGFuY2UgYXMgSW5zdGFuY2UpLnBvcHBlcjtcbiAgICB9XG5cbiAgICBpZiAoIWlzRXhjbHVkZWQpIHtcbiAgICAgIGNvbnN0IG9yaWdpbmFsRHVyYXRpb24gPSBpbnN0YW5jZS5wcm9wcy5kdXJhdGlvbjtcblxuICAgICAgaW5zdGFuY2Uuc2V0UHJvcHMoe2R1cmF0aW9ufSk7XG4gICAgICBpbnN0YW5jZS5oaWRlKCk7XG5cbiAgICAgIGlmICghaW5zdGFuY2Uuc3RhdGUuaXNEZXN0cm95ZWQpIHtcbiAgICAgICAgaW5zdGFuY2Uuc2V0UHJvcHMoe2R1cmF0aW9uOiBvcmlnaW5hbER1cmF0aW9ufSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG4iLCAiaW1wb3J0IHRpcHB5IGZyb20gJy4uJztcbmltcG9ydCB7ZGl2fSBmcm9tICcuLi9kb20tdXRpbHMnO1xuaW1wb3J0IHtcbiAgQ3JlYXRlU2luZ2xldG9uLFxuICBQbHVnaW4sXG4gIENyZWF0ZVNpbmdsZXRvblByb3BzLFxuICBSZWZlcmVuY2VFbGVtZW50LFxuICBDcmVhdGVTaW5nbGV0b25JbnN0YW5jZSxcbiAgSW5zdGFuY2UsXG4gIFByb3BzLFxufSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQge25vcm1hbGl6ZVRvQXJyYXksIHJlbW92ZVByb3BlcnRpZXN9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7ZXJyb3JXaGVufSBmcm9tICcuLi92YWxpZGF0aW9uJztcbmltcG9ydCB7YXBwbHlTdHlsZXMsIE1vZGlmaWVyfSBmcm9tICdAcG9wcGVyanMvY29yZSc7XG5cbi8vIFRoZSBkZWZhdWx0IGBhcHBseVN0eWxlc2AgbW9kaWZpZXIgaGFzIGEgY2xlYW51cCBmdW5jdGlvbiB0aGF0IGdldHMgY2FsbGVkXG4vLyBldmVyeSB0aW1lIHRoZSBwb3BwZXIgaXMgZGVzdHJveWVkIChpLmUuIGEgbmV3IHRhcmdldCksIHJlbW92aW5nIHRoZSBzdHlsZXNcbi8vIGFuZCBjYXVzaW5nIHRyYW5zaXRpb25zIHRvIGJyZWFrIGZvciBzaW5nbGV0b25zIHdoZW4gdGhlIGNvbnNvbGUgaXMgb3BlbiwgYnV0XG4vLyBtb3N0IG5vdGFibHkgZm9yIG5vbi10cmFuc2Zvcm0gc3R5bGVzIGJlaW5nIHVzZWQsIGBncHVBY2NlbGVyYXRpb246IGZhbHNlYC5cbmNvbnN0IGFwcGx5U3R5bGVzTW9kaWZpZXI6IE1vZGlmaWVyPCdhcHBseVN0eWxlcycsIFJlY29yZDxzdHJpbmcsIHVua25vd24+PiA9IHtcbiAgLi4uYXBwbHlTdHlsZXMsXG4gIGVmZmVjdCh7c3RhdGV9KSB7XG4gICAgY29uc3QgaW5pdGlhbFN0eWxlcyA9IHtcbiAgICAgIHBvcHBlcjoge1xuICAgICAgICBwb3NpdGlvbjogc3RhdGUub3B0aW9ucy5zdHJhdGVneSxcbiAgICAgICAgbGVmdDogJzAnLFxuICAgICAgICB0b3A6ICcwJyxcbiAgICAgICAgbWFyZ2luOiAnMCcsXG4gICAgICB9LFxuICAgICAgYXJyb3c6IHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB9LFxuICAgICAgcmVmZXJlbmNlOiB7fSxcbiAgICB9O1xuXG4gICAgT2JqZWN0LmFzc2lnbihzdGF0ZS5lbGVtZW50cy5wb3BwZXIuc3R5bGUsIGluaXRpYWxTdHlsZXMucG9wcGVyKTtcbiAgICBzdGF0ZS5zdHlsZXMgPSBpbml0aWFsU3R5bGVzO1xuXG4gICAgaWYgKHN0YXRlLmVsZW1lbnRzLmFycm93KSB7XG4gICAgICBPYmplY3QuYXNzaWduKHN0YXRlLmVsZW1lbnRzLmFycm93LnN0eWxlLCBpbml0aWFsU3R5bGVzLmFycm93KTtcbiAgICB9XG5cbiAgICAvLyBpbnRlbnRpb25hbGx5IHJldHVybiBubyBjbGVhbnVwIGZ1bmN0aW9uXG4gICAgLy8gcmV0dXJuICgpID0+IHsgLi4uIH1cbiAgfSxcbn07XG5cbmNvbnN0IGNyZWF0ZVNpbmdsZXRvbjogQ3JlYXRlU2luZ2xldG9uID0gKFxuICB0aXBweUluc3RhbmNlcyxcbiAgb3B0aW9uYWxQcm9wcyA9IHt9XG4pID0+IHtcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKF9fREVWX18pIHtcbiAgICBlcnJvcldoZW4oXG4gICAgICAhQXJyYXkuaXNBcnJheSh0aXBweUluc3RhbmNlcyksXG4gICAgICBbXG4gICAgICAgICdUaGUgZmlyc3QgYXJndW1lbnQgcGFzc2VkIHRvIGNyZWF0ZVNpbmdsZXRvbigpIG11c3QgYmUgYW4gYXJyYXkgb2YnLFxuICAgICAgICAndGlwcHkgaW5zdGFuY2VzLiBUaGUgcGFzc2VkIHZhbHVlIHdhcycsXG4gICAgICAgIFN0cmluZyh0aXBweUluc3RhbmNlcyksXG4gICAgICBdLmpvaW4oJyAnKVxuICAgICk7XG4gIH1cblxuICBsZXQgaW5kaXZpZHVhbEluc3RhbmNlcyA9IHRpcHB5SW5zdGFuY2VzO1xuICBsZXQgcmVmZXJlbmNlczogQXJyYXk8UmVmZXJlbmNlRWxlbWVudD4gPSBbXTtcbiAgbGV0IHRyaWdnZXJUYXJnZXRzOiBBcnJheTxFbGVtZW50PiA9IFtdO1xuICBsZXQgY3VycmVudFRhcmdldDogRWxlbWVudCB8IG51bGw7XG4gIGxldCBvdmVycmlkZXMgPSBvcHRpb25hbFByb3BzLm92ZXJyaWRlcztcbiAgbGV0IGludGVyY2VwdFNldFByb3BzQ2xlYW51cHM6IEFycmF5PCgpID0+IHZvaWQ+ID0gW107XG4gIGxldCBzaG93bk9uQ3JlYXRlID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gc2V0VHJpZ2dlclRhcmdldHMoKTogdm9pZCB7XG4gICAgdHJpZ2dlclRhcmdldHMgPSBpbmRpdmlkdWFsSW5zdGFuY2VzXG4gICAgICAubWFwKChpbnN0YW5jZSkgPT5cbiAgICAgICAgbm9ybWFsaXplVG9BcnJheShpbnN0YW5jZS5wcm9wcy50cmlnZ2VyVGFyZ2V0IHx8IGluc3RhbmNlLnJlZmVyZW5jZSlcbiAgICAgIClcbiAgICAgIC5yZWR1Y2UoKGFjYywgaXRlbSkgPT4gYWNjLmNvbmNhdChpdGVtKSwgW10pO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0UmVmZXJlbmNlcygpOiB2b2lkIHtcbiAgICByZWZlcmVuY2VzID0gaW5kaXZpZHVhbEluc3RhbmNlcy5tYXAoKGluc3RhbmNlKSA9PiBpbnN0YW5jZS5yZWZlcmVuY2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gZW5hYmxlSW5zdGFuY2VzKGlzRW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGluZGl2aWR1YWxJbnN0YW5jZXMuZm9yRWFjaCgoaW5zdGFuY2UpID0+IHtcbiAgICAgIGlmIChpc0VuYWJsZWQpIHtcbiAgICAgICAgaW5zdGFuY2UuZW5hYmxlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnN0YW5jZS5kaXNhYmxlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBpbnRlcmNlcHRTZXRQcm9wcyhzaW5nbGV0b246IEluc3RhbmNlKTogQXJyYXk8KCkgPT4gdm9pZD4ge1xuICAgIHJldHVybiBpbmRpdmlkdWFsSW5zdGFuY2VzLm1hcCgoaW5zdGFuY2UpID0+IHtcbiAgICAgIGNvbnN0IG9yaWdpbmFsU2V0UHJvcHMgPSBpbnN0YW5jZS5zZXRQcm9wcztcblxuICAgICAgaW5zdGFuY2Uuc2V0UHJvcHMgPSAocHJvcHMpOiB2b2lkID0+IHtcbiAgICAgICAgb3JpZ2luYWxTZXRQcm9wcyhwcm9wcyk7XG5cbiAgICAgICAgaWYgKGluc3RhbmNlLnJlZmVyZW5jZSA9PT0gY3VycmVudFRhcmdldCkge1xuICAgICAgICAgIHNpbmdsZXRvbi5zZXRQcm9wcyhwcm9wcyk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHJldHVybiAoKTogdm9pZCA9PiB7XG4gICAgICAgIGluc3RhbmNlLnNldFByb3BzID0gb3JpZ2luYWxTZXRQcm9wcztcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICAvLyBoYXZlIHRvIHBhc3Mgc2luZ2xldG9uLCBhcyBpdCBtYXliZSB1bmRlZmluZWQgb24gZmlyc3QgY2FsbFxuICBmdW5jdGlvbiBwcmVwYXJlSW5zdGFuY2UoXG4gICAgc2luZ2xldG9uOiBJbnN0YW5jZSxcbiAgICB0YXJnZXQ6IFJlZmVyZW5jZUVsZW1lbnRcbiAgKTogdm9pZCB7XG4gICAgY29uc3QgaW5kZXggPSB0cmlnZ2VyVGFyZ2V0cy5pbmRleE9mKHRhcmdldCk7XG5cbiAgICAvLyBiYWlsLW91dFxuICAgIGlmICh0YXJnZXQgPT09IGN1cnJlbnRUYXJnZXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjdXJyZW50VGFyZ2V0ID0gdGFyZ2V0O1xuXG4gICAgY29uc3Qgb3ZlcnJpZGVQcm9wczogUGFydGlhbDxQcm9wcz4gPSAob3ZlcnJpZGVzIHx8IFtdKVxuICAgICAgLmNvbmNhdCgnY29udGVudCcpXG4gICAgICAucmVkdWNlKChhY2MsIHByb3ApID0+IHtcbiAgICAgICAgKGFjYyBhcyBhbnkpW3Byb3BdID0gaW5kaXZpZHVhbEluc3RhbmNlc1tpbmRleF0ucHJvcHNbcHJvcF07XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9LCB7fSk7XG5cbiAgICBzaW5nbGV0b24uc2V0UHJvcHMoe1xuICAgICAgLi4ub3ZlcnJpZGVQcm9wcyxcbiAgICAgIGdldFJlZmVyZW5jZUNsaWVudFJlY3Q6XG4gICAgICAgIHR5cGVvZiBvdmVycmlkZVByb3BzLmdldFJlZmVyZW5jZUNsaWVudFJlY3QgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICA/IG92ZXJyaWRlUHJvcHMuZ2V0UmVmZXJlbmNlQ2xpZW50UmVjdFxuICAgICAgICAgIDogKCk6IENsaWVudFJlY3QgPT4gcmVmZXJlbmNlc1tpbmRleF0/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgIH0pO1xuICB9XG5cbiAgZW5hYmxlSW5zdGFuY2VzKGZhbHNlKTtcbiAgc2V0UmVmZXJlbmNlcygpO1xuICBzZXRUcmlnZ2VyVGFyZ2V0cygpO1xuXG4gIGNvbnN0IHBsdWdpbjogUGx1Z2luID0ge1xuICAgIGZuKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgb25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICAgIGVuYWJsZUluc3RhbmNlcyh0cnVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25IaWRkZW4oKTogdm9pZCB7XG4gICAgICAgICAgY3VycmVudFRhcmdldCA9IG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2xpY2tPdXRzaWRlKGluc3RhbmNlKTogdm9pZCB7XG4gICAgICAgICAgaWYgKGluc3RhbmNlLnByb3BzLnNob3dPbkNyZWF0ZSAmJiAhc2hvd25PbkNyZWF0ZSkge1xuICAgICAgICAgICAgc2hvd25PbkNyZWF0ZSA9IHRydWU7XG4gICAgICAgICAgICBjdXJyZW50VGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9uU2hvdyhpbnN0YW5jZSk6IHZvaWQge1xuICAgICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5zaG93T25DcmVhdGUgJiYgIXNob3duT25DcmVhdGUpIHtcbiAgICAgICAgICAgIHNob3duT25DcmVhdGUgPSB0cnVlO1xuICAgICAgICAgICAgcHJlcGFyZUluc3RhbmNlKGluc3RhbmNlLCByZWZlcmVuY2VzWzBdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9uVHJpZ2dlcihpbnN0YW5jZSwgZXZlbnQpOiB2b2lkIHtcbiAgICAgICAgICBwcmVwYXJlSW5zdGFuY2UoaW5zdGFuY2UsIGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgRWxlbWVudCk7XG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH0sXG4gIH07XG5cbiAgY29uc3Qgc2luZ2xldG9uID0gdGlwcHkoZGl2KCksIHtcbiAgICAuLi5yZW1vdmVQcm9wZXJ0aWVzKG9wdGlvbmFsUHJvcHMsIFsnb3ZlcnJpZGVzJ10pLFxuICAgIHBsdWdpbnM6IFtwbHVnaW4sIC4uLihvcHRpb25hbFByb3BzLnBsdWdpbnMgfHwgW10pXSxcbiAgICB0cmlnZ2VyVGFyZ2V0OiB0cmlnZ2VyVGFyZ2V0cyxcbiAgICBwb3BwZXJPcHRpb25zOiB7XG4gICAgICAuLi5vcHRpb25hbFByb3BzLnBvcHBlck9wdGlvbnMsXG4gICAgICBtb2RpZmllcnM6IFtcbiAgICAgICAgLi4uKG9wdGlvbmFsUHJvcHMucG9wcGVyT3B0aW9ucz8ubW9kaWZpZXJzIHx8IFtdKSxcbiAgICAgICAgYXBwbHlTdHlsZXNNb2RpZmllcixcbiAgICAgIF0sXG4gICAgfSxcbiAgfSkgYXMgQ3JlYXRlU2luZ2xldG9uSW5zdGFuY2U8Q3JlYXRlU2luZ2xldG9uUHJvcHM+O1xuXG4gIGNvbnN0IG9yaWdpbmFsU2hvdyA9IHNpbmdsZXRvbi5zaG93O1xuXG4gIHNpbmdsZXRvbi5zaG93ID0gKHRhcmdldD86IFJlZmVyZW5jZUVsZW1lbnQgfCBJbnN0YW5jZSB8IG51bWJlcik6IHZvaWQgPT4ge1xuICAgIG9yaWdpbmFsU2hvdygpO1xuXG4gICAgLy8gZmlyc3QgdGltZSwgc2hvd09uQ3JlYXRlIG9yIHByb2dyYW1tYXRpYyBjYWxsIHdpdGggbm8gcGFyYW1zXG4gICAgLy8gZGVmYXVsdCB0byBzaG93aW5nIGZpcnN0IGluc3RhbmNlXG4gICAgaWYgKCFjdXJyZW50VGFyZ2V0ICYmIHRhcmdldCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gcHJlcGFyZUluc3RhbmNlKHNpbmdsZXRvbiwgcmVmZXJlbmNlc1swXSk7XG4gICAgfVxuXG4gICAgLy8gdHJpZ2dlcmVkIGZyb20gZXZlbnQgKGRvIG5vdGhpbmcgYXMgcHJlcGFyZUluc3RhbmNlIGFscmVhZHkgY2FsbGVkIGJ5IG9uVHJpZ2dlcilcbiAgICAvLyBwcm9ncmFtbWF0aWMgY2FsbCB3aXRoIG5vIHBhcmFtcyB3aGVuIGFscmVhZHkgdmlzaWJsZSAoZG8gbm90aGluZyBhZ2FpbilcbiAgICBpZiAoY3VycmVudFRhcmdldCAmJiB0YXJnZXQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIHRhcmdldCBpcyBpbmRleCBvZiBpbnN0YW5jZVxuICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgcmVmZXJlbmNlc1t0YXJnZXRdICYmIHByZXBhcmVJbnN0YW5jZShzaW5nbGV0b24sIHJlZmVyZW5jZXNbdGFyZ2V0XSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gdGFyZ2V0IGlzIGEgY2hpbGQgdGlwcHkgaW5zdGFuY2VcbiAgICBpZiAoaW5kaXZpZHVhbEluc3RhbmNlcy5pbmRleE9mKHRhcmdldCBhcyBJbnN0YW5jZSkgPj0gMCkge1xuICAgICAgY29uc3QgcmVmID0gKHRhcmdldCBhcyBJbnN0YW5jZSkucmVmZXJlbmNlO1xuICAgICAgcmV0dXJuIHByZXBhcmVJbnN0YW5jZShzaW5nbGV0b24sIHJlZik7XG4gICAgfVxuXG4gICAgLy8gdGFyZ2V0IGlzIGEgUmVmZXJlbmNlRWxlbWVudFxuICAgIGlmIChyZWZlcmVuY2VzLmluZGV4T2YodGFyZ2V0IGFzIFJlZmVyZW5jZUVsZW1lbnQpID49IDApIHtcbiAgICAgIHJldHVybiBwcmVwYXJlSW5zdGFuY2Uoc2luZ2xldG9uLCB0YXJnZXQgYXMgUmVmZXJlbmNlRWxlbWVudCk7XG4gICAgfVxuICB9O1xuXG4gIHNpbmdsZXRvbi5zaG93TmV4dCA9ICgpOiB2b2lkID0+IHtcbiAgICBjb25zdCBmaXJzdCA9IHJlZmVyZW5jZXNbMF07XG4gICAgaWYgKCFjdXJyZW50VGFyZ2V0KSB7XG4gICAgICByZXR1cm4gc2luZ2xldG9uLnNob3coMCk7XG4gICAgfVxuICAgIGNvbnN0IGluZGV4ID0gcmVmZXJlbmNlcy5pbmRleE9mKGN1cnJlbnRUYXJnZXQpO1xuICAgIHNpbmdsZXRvbi5zaG93KHJlZmVyZW5jZXNbaW5kZXggKyAxXSB8fCBmaXJzdCk7XG4gIH07XG5cbiAgc2luZ2xldG9uLnNob3dQcmV2aW91cyA9ICgpOiB2b2lkID0+IHtcbiAgICBjb25zdCBsYXN0ID0gcmVmZXJlbmNlc1tyZWZlcmVuY2VzLmxlbmd0aCAtIDFdO1xuICAgIGlmICghY3VycmVudFRhcmdldCkge1xuICAgICAgcmV0dXJuIHNpbmdsZXRvbi5zaG93KGxhc3QpO1xuICAgIH1cbiAgICBjb25zdCBpbmRleCA9IHJlZmVyZW5jZXMuaW5kZXhPZihjdXJyZW50VGFyZ2V0KTtcbiAgICBjb25zdCB0YXJnZXQgPSByZWZlcmVuY2VzW2luZGV4IC0gMV0gfHwgbGFzdDtcbiAgICBzaW5nbGV0b24uc2hvdyh0YXJnZXQpO1xuICB9O1xuXG4gIGNvbnN0IG9yaWdpbmFsU2V0UHJvcHMgPSBzaW5nbGV0b24uc2V0UHJvcHM7XG5cbiAgc2luZ2xldG9uLnNldFByb3BzID0gKHByb3BzKTogdm9pZCA9PiB7XG4gICAgb3ZlcnJpZGVzID0gcHJvcHMub3ZlcnJpZGVzIHx8IG92ZXJyaWRlcztcbiAgICBvcmlnaW5hbFNldFByb3BzKHByb3BzKTtcbiAgfTtcblxuICBzaW5nbGV0b24uc2V0SW5zdGFuY2VzID0gKG5leHRJbnN0YW5jZXMpOiB2b2lkID0+IHtcbiAgICBlbmFibGVJbnN0YW5jZXModHJ1ZSk7XG4gICAgaW50ZXJjZXB0U2V0UHJvcHNDbGVhbnVwcy5mb3JFYWNoKChmbikgPT4gZm4oKSk7XG5cbiAgICBpbmRpdmlkdWFsSW5zdGFuY2VzID0gbmV4dEluc3RhbmNlcztcblxuICAgIGVuYWJsZUluc3RhbmNlcyhmYWxzZSk7XG4gICAgc2V0UmVmZXJlbmNlcygpO1xuICAgIHNldFRyaWdnZXJUYXJnZXRzKCk7XG4gICAgaW50ZXJjZXB0U2V0UHJvcHNDbGVhbnVwcyA9IGludGVyY2VwdFNldFByb3BzKHNpbmdsZXRvbik7XG5cbiAgICBzaW5nbGV0b24uc2V0UHJvcHMoe3RyaWdnZXJUYXJnZXQ6IHRyaWdnZXJUYXJnZXRzfSk7XG4gIH07XG5cbiAgaW50ZXJjZXB0U2V0UHJvcHNDbGVhbnVwcyA9IGludGVyY2VwdFNldFByb3BzKHNpbmdsZXRvbik7XG5cbiAgcmV0dXJuIHNpbmdsZXRvbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVNpbmdsZXRvbjtcbiIsICJpbXBvcnQgdGlwcHkgZnJvbSAnLi4nO1xuaW1wb3J0IHtUT1VDSF9PUFRJT05TfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHtkZWZhdWx0UHJvcHN9IGZyb20gJy4uL3Byb3BzJztcbmltcG9ydCB7SW5zdGFuY2UsIFByb3BzLCBUYXJnZXRzfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQge0xpc3RlbmVyT2JqZWN0fSBmcm9tICcuLi90eXBlcy1pbnRlcm5hbCc7XG5pbXBvcnQge25vcm1hbGl6ZVRvQXJyYXksIHJlbW92ZVByb3BlcnRpZXN9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7ZXJyb3JXaGVufSBmcm9tICcuLi92YWxpZGF0aW9uJztcblxuY29uc3QgQlVCQkxJTkdfRVZFTlRTX01BUCA9IHtcbiAgbW91c2VvdmVyOiAnbW91c2VlbnRlcicsXG4gIGZvY3VzaW46ICdmb2N1cycsXG4gIGNsaWNrOiAnY2xpY2snLFxufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZGVsZWdhdGUgaW5zdGFuY2UgdGhhdCBjb250cm9scyB0aGUgY3JlYXRpb24gb2YgdGlwcHkgaW5zdGFuY2VzXG4gKiBmb3IgY2hpbGQgZWxlbWVudHMgKGB0YXJnZXRgIENTUyBzZWxlY3RvcikuXG4gKi9cbmZ1bmN0aW9uIGRlbGVnYXRlKFxuICB0YXJnZXRzOiBUYXJnZXRzLFxuICBwcm9wczogUGFydGlhbDxQcm9wcz4gJiB7dGFyZ2V0OiBzdHJpbmd9XG4pOiBJbnN0YW5jZSB8IEluc3RhbmNlW10ge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAoX19ERVZfXykge1xuICAgIGVycm9yV2hlbihcbiAgICAgICEocHJvcHMgJiYgcHJvcHMudGFyZ2V0KSxcbiAgICAgIFtcbiAgICAgICAgJ1lvdSBtdXN0IHNwZWNpdHkgYSBgdGFyZ2V0YCBwcm9wIGluZGljYXRpbmcgYSBDU1Mgc2VsZWN0b3Igc3RyaW5nIG1hdGNoaW5nJyxcbiAgICAgICAgJ3RoZSB0YXJnZXQgZWxlbWVudHMgdGhhdCBzaG91bGQgcmVjZWl2ZSBhIHRpcHB5LicsXG4gICAgICBdLmpvaW4oJyAnKVxuICAgICk7XG4gIH1cblxuICBsZXQgbGlzdGVuZXJzOiBMaXN0ZW5lck9iamVjdFtdID0gW107XG4gIGxldCBjaGlsZFRpcHB5SW5zdGFuY2VzOiBJbnN0YW5jZVtdID0gW107XG4gIGxldCBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHt0YXJnZXR9ID0gcHJvcHM7XG5cbiAgY29uc3QgbmF0aXZlUHJvcHMgPSByZW1vdmVQcm9wZXJ0aWVzKHByb3BzLCBbJ3RhcmdldCddKTtcbiAgY29uc3QgcGFyZW50UHJvcHMgPSB7Li4ubmF0aXZlUHJvcHMsIHRyaWdnZXI6ICdtYW51YWwnLCB0b3VjaDogZmFsc2V9O1xuICBjb25zdCBjaGlsZFByb3BzID0ge1xuICAgIHRvdWNoOiBkZWZhdWx0UHJvcHMudG91Y2gsXG4gICAgLi4ubmF0aXZlUHJvcHMsXG4gICAgc2hvd09uQ3JlYXRlOiB0cnVlLFxuICB9O1xuXG4gIGNvbnN0IHJldHVyblZhbHVlID0gdGlwcHkodGFyZ2V0cywgcGFyZW50UHJvcHMpO1xuICBjb25zdCBub3JtYWxpemVkUmV0dXJuVmFsdWUgPSBub3JtYWxpemVUb0FycmF5KHJldHVyblZhbHVlKTtcblxuICBmdW5jdGlvbiBvblRyaWdnZXIoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCFldmVudC50YXJnZXQgfHwgZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB0YXJnZXROb2RlID0gKGV2ZW50LnRhcmdldCBhcyBFbGVtZW50KS5jbG9zZXN0KHRhcmdldCk7XG5cbiAgICBpZiAoIXRhcmdldE5vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBHZXQgcmVsZXZhbnQgdHJpZ2dlciB3aXRoIGZhbGxiYWNrczpcbiAgICAvLyAxLiBDaGVjayBgZGF0YS10aXBweS10cmlnZ2VyYCBhdHRyaWJ1dGUgb24gdGFyZ2V0IG5vZGVcbiAgICAvLyAyLiBGYWxsYmFjayB0byBgdHJpZ2dlcmAgcGFzc2VkIHRvIGBkZWxlZ2F0ZSgpYFxuICAgIC8vIDMuIEZhbGxiYWNrIHRvIGBkZWZhdWx0UHJvcHMudHJpZ2dlcmBcbiAgICBjb25zdCB0cmlnZ2VyID1cbiAgICAgIHRhcmdldE5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLXRpcHB5LXRyaWdnZXInKSB8fFxuICAgICAgcHJvcHMudHJpZ2dlciB8fFxuICAgICAgZGVmYXVsdFByb3BzLnRyaWdnZXI7XG5cbiAgICAvLyBAdHMtaWdub3JlXG4gICAgaWYgKHRhcmdldE5vZGUuX3RpcHB5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LnR5cGUgPT09ICd0b3VjaHN0YXJ0JyAmJiB0eXBlb2YgY2hpbGRQcm9wcy50b3VjaCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgZXZlbnQudHlwZSAhPT0gJ3RvdWNoc3RhcnQnICYmXG4gICAgICB0cmlnZ2VyLmluZGV4T2YoKEJVQkJMSU5HX0VWRU5UU19NQVAgYXMgYW55KVtldmVudC50eXBlXSkgPCAwXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaW5zdGFuY2UgPSB0aXBweSh0YXJnZXROb2RlLCBjaGlsZFByb3BzKTtcblxuICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgY2hpbGRUaXBweUluc3RhbmNlcyA9IGNoaWxkVGlwcHlJbnN0YW5jZXMuY29uY2F0KGluc3RhbmNlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbihcbiAgICBub2RlOiBFbGVtZW50LFxuICAgIGV2ZW50VHlwZTogc3RyaW5nLFxuICAgIGhhbmRsZXI6IEV2ZW50TGlzdGVuZXIsXG4gICAgb3B0aW9uczogYm9vbGVhbiB8IFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0gZmFsc2VcbiAgKTogdm9pZCB7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgbGlzdGVuZXJzLnB1c2goe25vZGUsIGV2ZW50VHlwZSwgaGFuZGxlciwgb3B0aW9uc30pO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcnMoaW5zdGFuY2U6IEluc3RhbmNlKTogdm9pZCB7XG4gICAgY29uc3Qge3JlZmVyZW5jZX0gPSBpbnN0YW5jZTtcblxuICAgIG9uKHJlZmVyZW5jZSwgJ3RvdWNoc3RhcnQnLCBvblRyaWdnZXIsIFRPVUNIX09QVElPTlMpO1xuICAgIG9uKHJlZmVyZW5jZSwgJ21vdXNlb3ZlcicsIG9uVHJpZ2dlcik7XG4gICAgb24ocmVmZXJlbmNlLCAnZm9jdXNpbicsIG9uVHJpZ2dlcik7XG4gICAgb24ocmVmZXJlbmNlLCAnY2xpY2snLCBvblRyaWdnZXIpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTogdm9pZCB7XG4gICAgbGlzdGVuZXJzLmZvckVhY2goKHtub2RlLCBldmVudFR5cGUsIGhhbmRsZXIsIG9wdGlvbnN9OiBMaXN0ZW5lck9iamVjdCkgPT4ge1xuICAgICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgfSk7XG4gICAgbGlzdGVuZXJzID0gW107XG4gIH1cblxuICBmdW5jdGlvbiBhcHBseU11dGF0aW9ucyhpbnN0YW5jZTogSW5zdGFuY2UpOiB2b2lkIHtcbiAgICBjb25zdCBvcmlnaW5hbERlc3Ryb3kgPSBpbnN0YW5jZS5kZXN0cm95O1xuICAgIGNvbnN0IG9yaWdpbmFsRW5hYmxlID0gaW5zdGFuY2UuZW5hYmxlO1xuICAgIGNvbnN0IG9yaWdpbmFsRGlzYWJsZSA9IGluc3RhbmNlLmRpc2FibGU7XG5cbiAgICBpbnN0YW5jZS5kZXN0cm95ID0gKHNob3VsZERlc3Ryb3lDaGlsZEluc3RhbmNlcyA9IHRydWUpOiB2b2lkID0+IHtcbiAgICAgIGlmIChzaG91bGREZXN0cm95Q2hpbGRJbnN0YW5jZXMpIHtcbiAgICAgICAgY2hpbGRUaXBweUluc3RhbmNlcy5mb3JFYWNoKChpbnN0YW5jZSkgPT4ge1xuICAgICAgICAgIGluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGNoaWxkVGlwcHlJbnN0YW5jZXMgPSBbXTtcblxuICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgIG9yaWdpbmFsRGVzdHJveSgpO1xuICAgIH07XG5cbiAgICBpbnN0YW5jZS5lbmFibGUgPSAoKTogdm9pZCA9PiB7XG4gICAgICBvcmlnaW5hbEVuYWJsZSgpO1xuICAgICAgY2hpbGRUaXBweUluc3RhbmNlcy5mb3JFYWNoKChpbnN0YW5jZSkgPT4gaW5zdGFuY2UuZW5hYmxlKCkpO1xuICAgICAgZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgaW5zdGFuY2UuZGlzYWJsZSA9ICgpOiB2b2lkID0+IHtcbiAgICAgIG9yaWdpbmFsRGlzYWJsZSgpO1xuICAgICAgY2hpbGRUaXBweUluc3RhbmNlcy5mb3JFYWNoKChpbnN0YW5jZSkgPT4gaW5zdGFuY2UuZGlzYWJsZSgpKTtcbiAgICAgIGRpc2FibGVkID0gdHJ1ZTtcbiAgICB9O1xuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoaW5zdGFuY2UpO1xuICB9XG5cbiAgbm9ybWFsaXplZFJldHVyblZhbHVlLmZvckVhY2goYXBwbHlNdXRhdGlvbnMpO1xuXG4gIHJldHVybiByZXR1cm5WYWx1ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVsZWdhdGU7XG4iLCAiaW1wb3J0IHtCQUNLRFJPUF9DTEFTU30gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7ZGl2LCBzZXRWaXNpYmlsaXR5U3RhdGV9IGZyb20gJy4uL2RvbS11dGlscyc7XG5pbXBvcnQge2dldENoaWxkcmVufSBmcm9tICcuLi90ZW1wbGF0ZSc7XG5pbXBvcnQge0FuaW1hdGVGaWxsfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQge2Vycm9yV2hlbn0gZnJvbSAnLi4vdmFsaWRhdGlvbic7XG5cbmNvbnN0IGFuaW1hdGVGaWxsOiBBbmltYXRlRmlsbCA9IHtcbiAgbmFtZTogJ2FuaW1hdGVGaWxsJyxcbiAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgZm4oaW5zdGFuY2UpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgaWYgKCFpbnN0YW5jZS5wcm9wcy5yZW5kZXI/LiQkdGlwcHkpIHtcbiAgICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICAgIGVycm9yV2hlbihcbiAgICAgICAgICBpbnN0YW5jZS5wcm9wcy5hbmltYXRlRmlsbCxcbiAgICAgICAgICAnVGhlIGBhbmltYXRlRmlsbGAgcGx1Z2luIHJlcXVpcmVzIHRoZSBkZWZhdWx0IHJlbmRlciBmdW5jdGlvbi4nXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBjb25zdCB7Ym94LCBjb250ZW50fSA9IGdldENoaWxkcmVuKGluc3RhbmNlLnBvcHBlcik7XG5cbiAgICBjb25zdCBiYWNrZHJvcCA9IGluc3RhbmNlLnByb3BzLmFuaW1hdGVGaWxsXG4gICAgICA/IGNyZWF0ZUJhY2tkcm9wRWxlbWVudCgpXG4gICAgICA6IG51bGw7XG5cbiAgICByZXR1cm4ge1xuICAgICAgb25DcmVhdGUoKTogdm9pZCB7XG4gICAgICAgIGlmIChiYWNrZHJvcCkge1xuICAgICAgICAgIGJveC5pbnNlcnRCZWZvcmUoYmFja2Ryb3AsIGJveC5maXJzdEVsZW1lbnRDaGlsZCEpO1xuICAgICAgICAgIGJveC5zZXRBdHRyaWJ1dGUoJ2RhdGEtYW5pbWF0ZWZpbGwnLCAnJyk7XG4gICAgICAgICAgYm94LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG5cbiAgICAgICAgICBpbnN0YW5jZS5zZXRQcm9wcyh7YXJyb3c6IGZhbHNlLCBhbmltYXRpb246ICdzaGlmdC1hd2F5J30pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25Nb3VudCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKGJhY2tkcm9wKSB7XG4gICAgICAgICAgY29uc3Qge3RyYW5zaXRpb25EdXJhdGlvbn0gPSBib3guc3R5bGU7XG4gICAgICAgICAgY29uc3QgZHVyYXRpb24gPSBOdW1iZXIodHJhbnNpdGlvbkR1cmF0aW9uLnJlcGxhY2UoJ21zJywgJycpKTtcblxuICAgICAgICAgIC8vIFRoZSBjb250ZW50IHNob3VsZCBmYWRlIGluIGFmdGVyIHRoZSBiYWNrZHJvcCBoYXMgbW9zdGx5IGZpbGxlZCB0aGVcbiAgICAgICAgICAvLyB0b29sdGlwIGVsZW1lbnQuIGBjbGlwLXBhdGhgIGlzIHRoZSBvdGhlciBhbHRlcm5hdGl2ZSBidXQgaXMgbm90XG4gICAgICAgICAgLy8gd2VsbC1zdXBwb3J0ZWQgYW5kIGlzIGJ1Z2d5IG9uIHNvbWUgZGV2aWNlcy5cbiAgICAgICAgICBjb250ZW50LnN0eWxlLnRyYW5zaXRpb25EZWxheSA9IGAke01hdGgucm91bmQoZHVyYXRpb24gLyAxMCl9bXNgO1xuXG4gICAgICAgICAgYmFja2Ryb3Auc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gdHJhbnNpdGlvbkR1cmF0aW9uO1xuICAgICAgICAgIHNldFZpc2liaWxpdHlTdGF0ZShbYmFja2Ryb3BdLCAndmlzaWJsZScpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25TaG93KCk6IHZvaWQge1xuICAgICAgICBpZiAoYmFja2Ryb3ApIHtcbiAgICAgICAgICBiYWNrZHJvcC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSAnMG1zJztcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uSGlkZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKGJhY2tkcm9wKSB7XG4gICAgICAgICAgc2V0VmlzaWJpbGl0eVN0YXRlKFtiYWNrZHJvcF0sICdoaWRkZW4nKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9O1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgYW5pbWF0ZUZpbGw7XG5cbmZ1bmN0aW9uIGNyZWF0ZUJhY2tkcm9wRWxlbWVudCgpOiBIVE1MRGl2RWxlbWVudCB7XG4gIGNvbnN0IGJhY2tkcm9wID0gZGl2KCk7XG4gIGJhY2tkcm9wLmNsYXNzTmFtZSA9IEJBQ0tEUk9QX0NMQVNTO1xuICBzZXRWaXNpYmlsaXR5U3RhdGUoW2JhY2tkcm9wXSwgJ2hpZGRlbicpO1xuICByZXR1cm4gYmFja2Ryb3A7XG59XG4iLCAiaW1wb3J0IHtnZXRPd25lckRvY3VtZW50LCBpc01vdXNlRXZlbnR9IGZyb20gJy4uL2RvbS11dGlscyc7XG5pbXBvcnQge0ZvbGxvd0N1cnNvciwgSW5zdGFuY2V9IGZyb20gJy4uL3R5cGVzJztcblxubGV0IG1vdXNlQ29vcmRzID0ge2NsaWVudFg6IDAsIGNsaWVudFk6IDB9O1xubGV0IGFjdGl2ZUluc3RhbmNlczogQXJyYXk8e2luc3RhbmNlOiBJbnN0YW5jZTsgZG9jOiBEb2N1bWVudH0+ID0gW107XG5cbmZ1bmN0aW9uIHN0b3JlTW91c2VDb29yZHMoe2NsaWVudFgsIGNsaWVudFl9OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gIG1vdXNlQ29vcmRzID0ge2NsaWVudFgsIGNsaWVudFl9O1xufVxuXG5mdW5jdGlvbiBhZGRNb3VzZUNvb3Jkc0xpc3RlbmVyKGRvYzogRG9jdW1lbnQpOiB2b2lkIHtcbiAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHN0b3JlTW91c2VDb29yZHMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVNb3VzZUNvb3Jkc0xpc3RlbmVyKGRvYzogRG9jdW1lbnQpOiB2b2lkIHtcbiAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHN0b3JlTW91c2VDb29yZHMpO1xufVxuXG5jb25zdCBmb2xsb3dDdXJzb3I6IEZvbGxvd0N1cnNvciA9IHtcbiAgbmFtZTogJ2ZvbGxvd0N1cnNvcicsXG4gIGRlZmF1bHRWYWx1ZTogZmFsc2UsXG4gIGZuKGluc3RhbmNlKSB7XG4gICAgY29uc3QgcmVmZXJlbmNlID0gaW5zdGFuY2UucmVmZXJlbmNlO1xuICAgIGNvbnN0IGRvYyA9IGdldE93bmVyRG9jdW1lbnQoaW5zdGFuY2UucHJvcHMudHJpZ2dlclRhcmdldCB8fCByZWZlcmVuY2UpO1xuXG4gICAgbGV0IGlzSW50ZXJuYWxVcGRhdGUgPSBmYWxzZTtcbiAgICBsZXQgd2FzRm9jdXNFdmVudCA9IGZhbHNlO1xuICAgIGxldCBpc1VubW91bnRlZCA9IHRydWU7XG4gICAgbGV0IHByZXZQcm9wcyA9IGluc3RhbmNlLnByb3BzO1xuXG4gICAgZnVuY3Rpb24gZ2V0SXNJbml0aWFsQmVoYXZpb3IoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBpbnN0YW5jZS5wcm9wcy5mb2xsb3dDdXJzb3IgPT09ICdpbml0aWFsJyAmJiBpbnN0YW5jZS5zdGF0ZS5pc1Zpc2libGVcbiAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkTGlzdGVuZXIoKTogdm9pZCB7XG4gICAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKCk6IHZvaWQge1xuICAgICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1bnNldEdldFJlZmVyZW5jZUNsaWVudFJlY3QoKTogdm9pZCB7XG4gICAgICBpc0ludGVybmFsVXBkYXRlID0gdHJ1ZTtcbiAgICAgIGluc3RhbmNlLnNldFByb3BzKHtnZXRSZWZlcmVuY2VDbGllbnRSZWN0OiBudWxsfSk7XG4gICAgICBpc0ludGVybmFsVXBkYXRlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Nb3VzZU1vdmUoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICAgIC8vIElmIHRoZSBpbnN0YW5jZSBpcyBpbnRlcmFjdGl2ZSwgYXZvaWQgdXBkYXRpbmcgdGhlIHBvc2l0aW9uIHVubGVzcyBpdCdzXG4gICAgICAvLyBvdmVyIHRoZSByZWZlcmVuY2UgZWxlbWVudFxuICAgICAgY29uc3QgaXNDdXJzb3JPdmVyUmVmZXJlbmNlID0gZXZlbnQudGFyZ2V0XG4gICAgICAgID8gcmVmZXJlbmNlLmNvbnRhaW5zKGV2ZW50LnRhcmdldCBhcyBOb2RlKVxuICAgICAgICA6IHRydWU7XG4gICAgICBjb25zdCB7Zm9sbG93Q3Vyc29yfSA9IGluc3RhbmNlLnByb3BzO1xuICAgICAgY29uc3Qge2NsaWVudFgsIGNsaWVudFl9ID0gZXZlbnQ7XG5cbiAgICAgIGNvbnN0IHJlY3QgPSByZWZlcmVuY2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCByZWxhdGl2ZVggPSBjbGllbnRYIC0gcmVjdC5sZWZ0O1xuICAgICAgY29uc3QgcmVsYXRpdmVZID0gY2xpZW50WSAtIHJlY3QudG9wO1xuXG4gICAgICBpZiAoaXNDdXJzb3JPdmVyUmVmZXJlbmNlIHx8ICFpbnN0YW5jZS5wcm9wcy5pbnRlcmFjdGl2ZSkge1xuICAgICAgICBpbnN0YW5jZS5zZXRQcm9wcyh7XG4gICAgICAgICAgLy8gQHRzLWlnbm9yZSAtIHVubmVlZGVkIERPTVJlY3QgcHJvcGVydGllc1xuICAgICAgICAgIGdldFJlZmVyZW5jZUNsaWVudFJlY3QoKSB7XG4gICAgICAgICAgICBjb25zdCByZWN0ID0gcmVmZXJlbmNlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgICAgICBsZXQgeCA9IGNsaWVudFg7XG4gICAgICAgICAgICBsZXQgeSA9IGNsaWVudFk7XG5cbiAgICAgICAgICAgIGlmIChmb2xsb3dDdXJzb3IgPT09ICdpbml0aWFsJykge1xuICAgICAgICAgICAgICB4ID0gcmVjdC5sZWZ0ICsgcmVsYXRpdmVYO1xuICAgICAgICAgICAgICB5ID0gcmVjdC50b3AgKyByZWxhdGl2ZVk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHRvcCA9IGZvbGxvd0N1cnNvciA9PT0gJ2hvcml6b250YWwnID8gcmVjdC50b3AgOiB5O1xuICAgICAgICAgICAgY29uc3QgcmlnaHQgPSBmb2xsb3dDdXJzb3IgPT09ICd2ZXJ0aWNhbCcgPyByZWN0LnJpZ2h0IDogeDtcbiAgICAgICAgICAgIGNvbnN0IGJvdHRvbSA9IGZvbGxvd0N1cnNvciA9PT0gJ2hvcml6b250YWwnID8gcmVjdC5ib3R0b20gOiB5O1xuICAgICAgICAgICAgY29uc3QgbGVmdCA9IGZvbGxvd0N1cnNvciA9PT0gJ3ZlcnRpY2FsJyA/IHJlY3QubGVmdCA6IHg7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHdpZHRoOiByaWdodCAtIGxlZnQsXG4gICAgICAgICAgICAgIGhlaWdodDogYm90dG9tIC0gdG9wLFxuICAgICAgICAgICAgICB0b3AsXG4gICAgICAgICAgICAgIHJpZ2h0LFxuICAgICAgICAgICAgICBib3R0b20sXG4gICAgICAgICAgICAgIGxlZnQsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZSgpOiB2b2lkIHtcbiAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5mb2xsb3dDdXJzb3IpIHtcbiAgICAgICAgYWN0aXZlSW5zdGFuY2VzLnB1c2goe2luc3RhbmNlLCBkb2N9KTtcbiAgICAgICAgYWRkTW91c2VDb29yZHNMaXN0ZW5lcihkb2MpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgICBhY3RpdmVJbnN0YW5jZXMgPSBhY3RpdmVJbnN0YW5jZXMuZmlsdGVyKFxuICAgICAgICAoZGF0YSkgPT4gZGF0YS5pbnN0YW5jZSAhPT0gaW5zdGFuY2VcbiAgICAgICk7XG5cbiAgICAgIGlmIChhY3RpdmVJbnN0YW5jZXMuZmlsdGVyKChkYXRhKSA9PiBkYXRhLmRvYyA9PT0gZG9jKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmVtb3ZlTW91c2VDb29yZHNMaXN0ZW5lcihkb2MpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBvbkNyZWF0ZTogY3JlYXRlLFxuICAgICAgb25EZXN0cm95OiBkZXN0cm95LFxuICAgICAgb25CZWZvcmVVcGRhdGUoKTogdm9pZCB7XG4gICAgICAgIHByZXZQcm9wcyA9IGluc3RhbmNlLnByb3BzO1xuICAgICAgfSxcbiAgICAgIG9uQWZ0ZXJVcGRhdGUoXywge2ZvbGxvd0N1cnNvcn0pOiB2b2lkIHtcbiAgICAgICAgaWYgKGlzSW50ZXJuYWxVcGRhdGUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgZm9sbG93Q3Vyc29yICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICBwcmV2UHJvcHMuZm9sbG93Q3Vyc29yICE9PSBmb2xsb3dDdXJzb3JcbiAgICAgICAgKSB7XG4gICAgICAgICAgZGVzdHJveSgpO1xuXG4gICAgICAgICAgaWYgKGZvbGxvd0N1cnNvcikge1xuICAgICAgICAgICAgY3JlYXRlKCk7XG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgaW5zdGFuY2Uuc3RhdGUuaXNNb3VudGVkICYmXG4gICAgICAgICAgICAgICF3YXNGb2N1c0V2ZW50ICYmXG4gICAgICAgICAgICAgICFnZXRJc0luaXRpYWxCZWhhdmlvcigpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgYWRkTGlzdGVuZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVtb3ZlTGlzdGVuZXIoKTtcbiAgICAgICAgICAgIHVuc2V0R2V0UmVmZXJlbmNlQ2xpZW50UmVjdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uTW91bnQoKTogdm9pZCB7XG4gICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5mb2xsb3dDdXJzb3IgJiYgIXdhc0ZvY3VzRXZlbnQpIHtcbiAgICAgICAgICBpZiAoaXNVbm1vdW50ZWQpIHtcbiAgICAgICAgICAgIG9uTW91c2VNb3ZlKG1vdXNlQ29vcmRzIGFzIE1vdXNlRXZlbnQpO1xuICAgICAgICAgICAgaXNVbm1vdW50ZWQgPSBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIWdldElzSW5pdGlhbEJlaGF2aW9yKCkpIHtcbiAgICAgICAgICAgIGFkZExpc3RlbmVyKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25UcmlnZ2VyKF8sIGV2ZW50KTogdm9pZCB7XG4gICAgICAgIGlmIChpc01vdXNlRXZlbnQoZXZlbnQpKSB7XG4gICAgICAgICAgbW91c2VDb29yZHMgPSB7Y2xpZW50WDogZXZlbnQuY2xpZW50WCwgY2xpZW50WTogZXZlbnQuY2xpZW50WX07XG4gICAgICAgIH1cbiAgICAgICAgd2FzRm9jdXNFdmVudCA9IGV2ZW50LnR5cGUgPT09ICdmb2N1cyc7XG4gICAgICB9LFxuICAgICAgb25IaWRkZW4oKTogdm9pZCB7XG4gICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5mb2xsb3dDdXJzb3IpIHtcbiAgICAgICAgICB1bnNldEdldFJlZmVyZW5jZUNsaWVudFJlY3QoKTtcbiAgICAgICAgICByZW1vdmVMaXN0ZW5lcigpO1xuICAgICAgICAgIGlzVW5tb3VudGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9O1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9sbG93Q3Vyc29yO1xuIiwgImltcG9ydCB7TW9kaWZpZXIsIFBsYWNlbWVudH0gZnJvbSAnQHBvcHBlcmpzL2NvcmUnO1xuaW1wb3J0IHtpc01vdXNlRXZlbnR9IGZyb20gJy4uL2RvbS11dGlscyc7XG5pbXBvcnQge0Jhc2VQbGFjZW1lbnQsIElubGluZVBvc2l0aW9uaW5nLCBQcm9wc30gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHthcnJheUZyb20sIGdldEJhc2VQbGFjZW1lbnR9IGZyb20gJy4uL3V0aWxzJztcblxuZnVuY3Rpb24gZ2V0UHJvcHMocHJvcHM6IFByb3BzLCBtb2RpZmllcjogTW9kaWZpZXI8YW55LCBhbnk+KTogUGFydGlhbDxQcm9wcz4ge1xuICByZXR1cm4ge1xuICAgIHBvcHBlck9wdGlvbnM6IHtcbiAgICAgIC4uLnByb3BzLnBvcHBlck9wdGlvbnMsXG4gICAgICBtb2RpZmllcnM6IFtcbiAgICAgICAgLi4uKHByb3BzLnBvcHBlck9wdGlvbnM/Lm1vZGlmaWVycyB8fCBbXSkuZmlsdGVyKFxuICAgICAgICAgICh7bmFtZX0pID0+IG5hbWUgIT09IG1vZGlmaWVyLm5hbWVcbiAgICAgICAgKSxcbiAgICAgICAgbW9kaWZpZXIsXG4gICAgICBdLFxuICAgIH0sXG4gIH07XG59XG5cbmNvbnN0IGlubGluZVBvc2l0aW9uaW5nOiBJbmxpbmVQb3NpdGlvbmluZyA9IHtcbiAgbmFtZTogJ2lubGluZVBvc2l0aW9uaW5nJyxcbiAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgZm4oaW5zdGFuY2UpIHtcbiAgICBjb25zdCB7cmVmZXJlbmNlfSA9IGluc3RhbmNlO1xuXG4gICAgZnVuY3Rpb24gaXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuICEhaW5zdGFuY2UucHJvcHMuaW5saW5lUG9zaXRpb25pbmc7XG4gICAgfVxuXG4gICAgbGV0IHBsYWNlbWVudDogUGxhY2VtZW50O1xuICAgIGxldCBjdXJzb3JSZWN0SW5kZXggPSAtMTtcbiAgICBsZXQgaXNJbnRlcm5hbFVwZGF0ZSA9IGZhbHNlO1xuICAgIGxldCB0cmllZFBsYWNlbWVudHM6IEFycmF5PHN0cmluZz4gPSBbXTtcblxuICAgIGNvbnN0IG1vZGlmaWVyOiBNb2RpZmllcjxcbiAgICAgICd0aXBweUlubGluZVBvc2l0aW9uaW5nJyxcbiAgICAgIFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gICAgPiA9IHtcbiAgICAgIG5hbWU6ICd0aXBweUlubGluZVBvc2l0aW9uaW5nJyxcbiAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICBwaGFzZTogJ2FmdGVyV3JpdGUnLFxuICAgICAgZm4oe3N0YXRlfSkge1xuICAgICAgICBpZiAoaXNFbmFibGVkKCkpIHtcbiAgICAgICAgICBpZiAodHJpZWRQbGFjZW1lbnRzLmluZGV4T2Yoc3RhdGUucGxhY2VtZW50KSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRyaWVkUGxhY2VtZW50cyA9IFtdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHBsYWNlbWVudCAhPT0gc3RhdGUucGxhY2VtZW50ICYmXG4gICAgICAgICAgICB0cmllZFBsYWNlbWVudHMuaW5kZXhPZihzdGF0ZS5wbGFjZW1lbnQpID09PSAtMVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdHJpZWRQbGFjZW1lbnRzLnB1c2goc3RhdGUucGxhY2VtZW50KTtcbiAgICAgICAgICAgIGluc3RhbmNlLnNldFByb3BzKHtcbiAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSAtIHVubmVlZGVkIERPTVJlY3QgcHJvcGVydGllc1xuICAgICAgICAgICAgICBnZXRSZWZlcmVuY2VDbGllbnRSZWN0OiAoKSA9PlxuICAgICAgICAgICAgICAgIGdldFJlZmVyZW5jZUNsaWVudFJlY3Qoc3RhdGUucGxhY2VtZW50KSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHBsYWNlbWVudCA9IHN0YXRlLnBsYWNlbWVudDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gZ2V0UmVmZXJlbmNlQ2xpZW50UmVjdChwbGFjZW1lbnQ6IFBsYWNlbWVudCk6IFBhcnRpYWw8RE9NUmVjdD4ge1xuICAgICAgcmV0dXJuIGdldElubGluZUJvdW5kaW5nQ2xpZW50UmVjdChcbiAgICAgICAgZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpLFxuICAgICAgICByZWZlcmVuY2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgIGFycmF5RnJvbShyZWZlcmVuY2UuZ2V0Q2xpZW50UmVjdHMoKSksXG4gICAgICAgIGN1cnNvclJlY3RJbmRleFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRJbnRlcm5hbFByb3BzKHBhcnRpYWxQcm9wczogUGFydGlhbDxQcm9wcz4pOiB2b2lkIHtcbiAgICAgIGlzSW50ZXJuYWxVcGRhdGUgPSB0cnVlO1xuICAgICAgaW5zdGFuY2Uuc2V0UHJvcHMocGFydGlhbFByb3BzKTtcbiAgICAgIGlzSW50ZXJuYWxVcGRhdGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRNb2RpZmllcigpOiB2b2lkIHtcbiAgICAgIGlmICghaXNJbnRlcm5hbFVwZGF0ZSkge1xuICAgICAgICBzZXRJbnRlcm5hbFByb3BzKGdldFByb3BzKGluc3RhbmNlLnByb3BzLCBtb2RpZmllcikpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBvbkNyZWF0ZTogYWRkTW9kaWZpZXIsXG4gICAgICBvbkFmdGVyVXBkYXRlOiBhZGRNb2RpZmllcixcbiAgICAgIG9uVHJpZ2dlcihfLCBldmVudCk6IHZvaWQge1xuICAgICAgICBpZiAoaXNNb3VzZUV2ZW50KGV2ZW50KSkge1xuICAgICAgICAgIGNvbnN0IHJlY3RzID0gYXJyYXlGcm9tKGluc3RhbmNlLnJlZmVyZW5jZS5nZXRDbGllbnRSZWN0cygpKTtcbiAgICAgICAgICBjb25zdCBjdXJzb3JSZWN0ID0gcmVjdHMuZmluZChcbiAgICAgICAgICAgIChyZWN0KSA9PlxuICAgICAgICAgICAgICByZWN0LmxlZnQgLSAyIDw9IGV2ZW50LmNsaWVudFggJiZcbiAgICAgICAgICAgICAgcmVjdC5yaWdodCArIDIgPj0gZXZlbnQuY2xpZW50WCAmJlxuICAgICAgICAgICAgICByZWN0LnRvcCAtIDIgPD0gZXZlbnQuY2xpZW50WSAmJlxuICAgICAgICAgICAgICByZWN0LmJvdHRvbSArIDIgPj0gZXZlbnQuY2xpZW50WVxuICAgICAgICAgICk7XG4gICAgICAgICAgY29uc3QgaW5kZXggPSByZWN0cy5pbmRleE9mKGN1cnNvclJlY3QpO1xuICAgICAgICAgIGN1cnNvclJlY3RJbmRleCA9IGluZGV4ID4gLTEgPyBpbmRleCA6IGN1cnNvclJlY3RJbmRleDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uSGlkZGVuKCk6IHZvaWQge1xuICAgICAgICBjdXJzb3JSZWN0SW5kZXggPSAtMTtcbiAgICAgIH0sXG4gICAgfTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGlubGluZVBvc2l0aW9uaW5nO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5saW5lQm91bmRpbmdDbGllbnRSZWN0KFxuICBjdXJyZW50QmFzZVBsYWNlbWVudDogQmFzZVBsYWNlbWVudCB8IG51bGwsXG4gIGJvdW5kaW5nUmVjdDogRE9NUmVjdCxcbiAgY2xpZW50UmVjdHM6IERPTVJlY3RbXSxcbiAgY3Vyc29yUmVjdEluZGV4OiBudW1iZXJcbik6IHtcbiAgdG9wOiBudW1iZXI7XG4gIGJvdHRvbTogbnVtYmVyO1xuICBsZWZ0OiBudW1iZXI7XG4gIHJpZ2h0OiBudW1iZXI7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xufSB7XG4gIC8vIE5vdCBhbiBpbmxpbmUgZWxlbWVudCwgb3IgcGxhY2VtZW50IGlzIG5vdCB5ZXQga25vd25cbiAgaWYgKGNsaWVudFJlY3RzLmxlbmd0aCA8IDIgfHwgY3VycmVudEJhc2VQbGFjZW1lbnQgPT09IG51bGwpIHtcbiAgICByZXR1cm4gYm91bmRpbmdSZWN0O1xuICB9XG5cbiAgLy8gVGhlcmUgYXJlIHR3byByZWN0cyBhbmQgdGhleSBhcmUgZGlzam9pbmVkXG4gIGlmIChcbiAgICBjbGllbnRSZWN0cy5sZW5ndGggPT09IDIgJiZcbiAgICBjdXJzb3JSZWN0SW5kZXggPj0gMCAmJlxuICAgIGNsaWVudFJlY3RzWzBdLmxlZnQgPiBjbGllbnRSZWN0c1sxXS5yaWdodFxuICApIHtcbiAgICByZXR1cm4gY2xpZW50UmVjdHNbY3Vyc29yUmVjdEluZGV4XSB8fCBib3VuZGluZ1JlY3Q7XG4gIH1cblxuICBzd2l0Y2ggKGN1cnJlbnRCYXNlUGxhY2VtZW50KSB7XG4gICAgY2FzZSAndG9wJzpcbiAgICBjYXNlICdib3R0b20nOiB7XG4gICAgICBjb25zdCBmaXJzdFJlY3QgPSBjbGllbnRSZWN0c1swXTtcbiAgICAgIGNvbnN0IGxhc3RSZWN0ID0gY2xpZW50UmVjdHNbY2xpZW50UmVjdHMubGVuZ3RoIC0gMV07XG4gICAgICBjb25zdCBpc1RvcCA9IGN1cnJlbnRCYXNlUGxhY2VtZW50ID09PSAndG9wJztcblxuICAgICAgY29uc3QgdG9wID0gZmlyc3RSZWN0LnRvcDtcbiAgICAgIGNvbnN0IGJvdHRvbSA9IGxhc3RSZWN0LmJvdHRvbTtcbiAgICAgIGNvbnN0IGxlZnQgPSBpc1RvcCA/IGZpcnN0UmVjdC5sZWZ0IDogbGFzdFJlY3QubGVmdDtcbiAgICAgIGNvbnN0IHJpZ2h0ID0gaXNUb3AgPyBmaXJzdFJlY3QucmlnaHQgOiBsYXN0UmVjdC5yaWdodDtcbiAgICAgIGNvbnN0IHdpZHRoID0gcmlnaHQgLSBsZWZ0O1xuICAgICAgY29uc3QgaGVpZ2h0ID0gYm90dG9tIC0gdG9wO1xuXG4gICAgICByZXR1cm4ge3RvcCwgYm90dG9tLCBsZWZ0LCByaWdodCwgd2lkdGgsIGhlaWdodH07XG4gICAgfVxuICAgIGNhc2UgJ2xlZnQnOlxuICAgIGNhc2UgJ3JpZ2h0Jzoge1xuICAgICAgY29uc3QgbWluTGVmdCA9IE1hdGgubWluKC4uLmNsaWVudFJlY3RzLm1hcCgocmVjdHMpID0+IHJlY3RzLmxlZnQpKTtcbiAgICAgIGNvbnN0IG1heFJpZ2h0ID0gTWF0aC5tYXgoLi4uY2xpZW50UmVjdHMubWFwKChyZWN0cykgPT4gcmVjdHMucmlnaHQpKTtcbiAgICAgIGNvbnN0IG1lYXN1cmVSZWN0cyA9IGNsaWVudFJlY3RzLmZpbHRlcigocmVjdCkgPT5cbiAgICAgICAgY3VycmVudEJhc2VQbGFjZW1lbnQgPT09ICdsZWZ0J1xuICAgICAgICAgID8gcmVjdC5sZWZ0ID09PSBtaW5MZWZ0XG4gICAgICAgICAgOiByZWN0LnJpZ2h0ID09PSBtYXhSaWdodFxuICAgICAgKTtcblxuICAgICAgY29uc3QgdG9wID0gbWVhc3VyZVJlY3RzWzBdLnRvcDtcbiAgICAgIGNvbnN0IGJvdHRvbSA9IG1lYXN1cmVSZWN0c1ttZWFzdXJlUmVjdHMubGVuZ3RoIC0gMV0uYm90dG9tO1xuICAgICAgY29uc3QgbGVmdCA9IG1pbkxlZnQ7XG4gICAgICBjb25zdCByaWdodCA9IG1heFJpZ2h0O1xuICAgICAgY29uc3Qgd2lkdGggPSByaWdodCAtIGxlZnQ7XG4gICAgICBjb25zdCBoZWlnaHQgPSBib3R0b20gLSB0b3A7XG5cbiAgICAgIHJldHVybiB7dG9wLCBib3R0b20sIGxlZnQsIHJpZ2h0LCB3aWR0aCwgaGVpZ2h0fTtcbiAgICB9XG4gICAgZGVmYXVsdDoge1xuICAgICAgcmV0dXJuIGJvdW5kaW5nUmVjdDtcbiAgICB9XG4gIH1cbn1cbiIsICJpbXBvcnQge1ZpcnR1YWxFbGVtZW50fSBmcm9tICdAcG9wcGVyanMvY29yZSc7XG5pbXBvcnQge1JlZmVyZW5jZUVsZW1lbnQsIFN0aWNreX0gZnJvbSAnLi4vdHlwZXMnO1xuXG5jb25zdCBzdGlja3k6IFN0aWNreSA9IHtcbiAgbmFtZTogJ3N0aWNreScsXG4gIGRlZmF1bHRWYWx1ZTogZmFsc2UsXG4gIGZuKGluc3RhbmNlKSB7XG4gICAgY29uc3Qge3JlZmVyZW5jZSwgcG9wcGVyfSA9IGluc3RhbmNlO1xuXG4gICAgZnVuY3Rpb24gZ2V0UmVmZXJlbmNlKCk6IFJlZmVyZW5jZUVsZW1lbnQgfCBWaXJ0dWFsRWxlbWVudCB7XG4gICAgICByZXR1cm4gaW5zdGFuY2UucG9wcGVySW5zdGFuY2VcbiAgICAgICAgPyBpbnN0YW5jZS5wb3BwZXJJbnN0YW5jZS5zdGF0ZS5lbGVtZW50cy5yZWZlcmVuY2VcbiAgICAgICAgOiByZWZlcmVuY2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvdWxkQ2hlY2sodmFsdWU6ICdyZWZlcmVuY2UnIHwgJ3BvcHBlcicpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiBpbnN0YW5jZS5wcm9wcy5zdGlja3kgPT09IHRydWUgfHwgaW5zdGFuY2UucHJvcHMuc3RpY2t5ID09PSB2YWx1ZTtcbiAgICB9XG5cbiAgICBsZXQgcHJldlJlZlJlY3Q6IENsaWVudFJlY3QgfCBudWxsID0gbnVsbDtcbiAgICBsZXQgcHJldlBvcFJlY3Q6IENsaWVudFJlY3QgfCBudWxsID0gbnVsbDtcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVBvc2l0aW9uKCk6IHZvaWQge1xuICAgICAgY29uc3QgY3VycmVudFJlZlJlY3QgPSBzaG91bGRDaGVjaygncmVmZXJlbmNlJylcbiAgICAgICAgPyBnZXRSZWZlcmVuY2UoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICA6IG51bGw7XG4gICAgICBjb25zdCBjdXJyZW50UG9wUmVjdCA9IHNob3VsZENoZWNrKCdwb3BwZXInKVxuICAgICAgICA/IHBvcHBlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICA6IG51bGw7XG5cbiAgICAgIGlmIChcbiAgICAgICAgKGN1cnJlbnRSZWZSZWN0ICYmIGFyZVJlY3RzRGlmZmVyZW50KHByZXZSZWZSZWN0LCBjdXJyZW50UmVmUmVjdCkpIHx8XG4gICAgICAgIChjdXJyZW50UG9wUmVjdCAmJiBhcmVSZWN0c0RpZmZlcmVudChwcmV2UG9wUmVjdCwgY3VycmVudFBvcFJlY3QpKVxuICAgICAgKSB7XG4gICAgICAgIGlmIChpbnN0YW5jZS5wb3BwZXJJbnN0YW5jZSkge1xuICAgICAgICAgIGluc3RhbmNlLnBvcHBlckluc3RhbmNlLnVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHByZXZSZWZSZWN0ID0gY3VycmVudFJlZlJlY3Q7XG4gICAgICBwcmV2UG9wUmVjdCA9IGN1cnJlbnRQb3BSZWN0O1xuXG4gICAgICBpZiAoaW5zdGFuY2Uuc3RhdGUuaXNNb3VudGVkKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGVQb3NpdGlvbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIG9uTW91bnQoKTogdm9pZCB7XG4gICAgICAgIGlmIChpbnN0YW5jZS5wcm9wcy5zdGlja3kpIHtcbiAgICAgICAgICB1cGRhdGVQb3NpdGlvbigpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH07XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdGlja3k7XG5cbmZ1bmN0aW9uIGFyZVJlY3RzRGlmZmVyZW50KFxuICByZWN0QTogQ2xpZW50UmVjdCB8IG51bGwsXG4gIHJlY3RCOiBDbGllbnRSZWN0IHwgbnVsbFxuKTogYm9vbGVhbiB7XG4gIGlmIChyZWN0QSAmJiByZWN0Qikge1xuICAgIHJldHVybiAoXG4gICAgICByZWN0QS50b3AgIT09IHJlY3RCLnRvcCB8fFxuICAgICAgcmVjdEEucmlnaHQgIT09IHJlY3RCLnJpZ2h0IHx8XG4gICAgICByZWN0QS5ib3R0b20gIT09IHJlY3RCLmJvdHRvbSB8fFxuICAgICAgcmVjdEEubGVmdCAhPT0gcmVjdEIubGVmdFxuICAgICk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cbiIsICJpbXBvcnQgdGlwcHkgZnJvbSAnLi4vc3JjJztcbmltcG9ydCB7cmVuZGVyfSBmcm9tICcuLi9zcmMvdGVtcGxhdGUnO1xuXG50aXBweS5zZXREZWZhdWx0UHJvcHMoe3JlbmRlcn0pO1xuXG5leHBvcnQge2RlZmF1bHQsIGhpZGVBbGx9IGZyb20gJy4uL3NyYyc7XG5leHBvcnQge2RlZmF1bHQgYXMgY3JlYXRlU2luZ2xldG9ufSBmcm9tICcuLi9zcmMvYWRkb25zL2NyZWF0ZVNpbmdsZXRvbic7XG5leHBvcnQge2RlZmF1bHQgYXMgZGVsZWdhdGV9IGZyb20gJy4uL3NyYy9hZGRvbnMvZGVsZWdhdGUnO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGFuaW1hdGVGaWxsfSBmcm9tICcuLi9zcmMvcGx1Z2lucy9hbmltYXRlRmlsbCc7XG5leHBvcnQge2RlZmF1bHQgYXMgZm9sbG93Q3Vyc29yfSBmcm9tICcuLi9zcmMvcGx1Z2lucy9mb2xsb3dDdXJzb3InO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGlubGluZVBvc2l0aW9uaW5nfSBmcm9tICcuLi9zcmMvcGx1Z2lucy9pbmxpbmVQb3NpdGlvbmluZyc7XG5leHBvcnQge2RlZmF1bHQgYXMgc3RpY2t5fSBmcm9tICcuLi9zcmMvcGx1Z2lucy9zdGlja3knO1xuZXhwb3J0IHtST1VORF9BUlJPVyBhcyByb3VuZEFycm93fSBmcm9tICcuLi9zcmMvY29uc3RhbnRzJztcbiIsICJpbXBvcnQgJ3RpcHB5LmpzL2Rpc3QvdGlwcHkuY3NzJztcblxuZXhwb3J0IHtkZWZhdWx0IGFzIHRpcHB5fSBmcm9tICd0aXBweS5qcyc7XG5leHBvcnQgKiBmcm9tICd0aXBweS5qcyc7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7O0FBQUE7QUFBQSwrRUFBQUEsVUFBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxRQUFRLFNBQVUsSUFBSTtBQUN4QixhQUFPLE1BQU0sR0FBRyxTQUFTLFFBQVE7QUFBQSxJQUNuQztBQUdBLElBQUFBLFFBQU87QUFBQSxJQUVMLE1BQU0sT0FBTyxjQUFjLFlBQVksVUFBVSxLQUNqRCxNQUFNLE9BQU8sVUFBVSxZQUFZLE1BQU07QUFBQSxJQUV6QyxNQUFNLE9BQU8sUUFBUSxZQUFZLElBQUksS0FDckMsTUFBTSxPQUFPLFVBQVUsWUFBWSxNQUFNLEtBQ3pDLE1BQU0sT0FBT0QsWUFBUSxZQUFZQSxRQUFJO0FBQUEsSUFFcEMsMkJBQVk7QUFBRSxhQUFPO0FBQUEsSUFBTSxFQUFHLEtBQUssU0FBUyxhQUFhLEVBQUU7QUFBQTtBQUFBOzs7QUNmOUQ7QUFBQSw4RUFBQUUsVUFBQUMsU0FBQTtBQUFBO0FBQ0EsSUFBQUEsUUFBTyxVQUFVLFNBQVUsTUFBTTtBQUMvQixVQUFJO0FBQ0YsZUFBTyxDQUFDLENBQUMsS0FBSztBQUFBLE1BQ2hCLFNBQVMsT0FBTztBQUNkLGVBQU87QUFBQSxNQUNUO0FBQUEsSUFDRjtBQUFBO0FBQUE7OztBQ1BBO0FBQUEsb0ZBQUFDLFVBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksUUFBUTtBQUdaLElBQUFBLFFBQU8sVUFBVSxDQUFDLE1BQU0sV0FBWTtBQUVsQyxhQUFPLE9BQU8sZUFBZSxDQUFDLEdBQUcsR0FBRyxFQUFFLEtBQUssV0FBWTtBQUFFLGVBQU87QUFBQSxNQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTTtBQUFBLElBQ2pGLENBQUM7QUFBQTtBQUFBOzs7QUNQRDtBQUFBLDZGQUFBQyxVQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLFFBQVE7QUFFWixJQUFBQSxRQUFPLFVBQVUsQ0FBQyxNQUFNLFdBQVk7QUFFbEMsVUFBSSxPQUFRLFdBQVk7QUFBQSxNQUFjLEVBQUcsS0FBSztBQUU5QyxhQUFPLE9BQU8sUUFBUSxjQUFjLEtBQUssZUFBZSxXQUFXO0FBQUEsSUFDckUsQ0FBQztBQUFBO0FBQUE7OztBQ1JEO0FBQUEsc0ZBQUFDLFVBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksY0FBYztBQUVsQixRQUFJLE9BQU8sU0FBUyxVQUFVO0FBRTlCLElBQUFBLFFBQU8sVUFBVSxjQUFjLEtBQUssS0FBSyxJQUFJLElBQUksV0FBWTtBQUMzRCxhQUFPLEtBQUssTUFBTSxNQUFNLFNBQVM7QUFBQSxJQUNuQztBQUFBO0FBQUE7OztBQ1BBO0FBQUEsc0dBQUFDLFVBQUE7QUFBQTtBQUNBLFFBQUksd0JBQXdCLENBQUMsRUFBRTtBQUUvQixRQUFJLDJCQUEyQixPQUFPO0FBR3RDLFFBQUksY0FBYyw0QkFBNEIsQ0FBQyxzQkFBc0IsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7QUFJckYsSUFBQUEsU0FBUSxJQUFJLGNBQWMsU0FBUyxxQkFBcUIsR0FBRztBQUN6RCxVQUFJLGFBQWEseUJBQXlCLE1BQU0sQ0FBQztBQUNqRCxhQUFPLENBQUMsQ0FBQyxjQUFjLFdBQVc7QUFBQSxJQUNwQyxJQUFJO0FBQUE7QUFBQTs7O0FDYko7QUFBQSxtR0FBQUMsVUFBQUMsU0FBQTtBQUFBO0FBQ0EsSUFBQUEsUUFBTyxVQUFVLFNBQVUsUUFBUSxPQUFPO0FBQ3hDLGFBQU87QUFBQSxRQUNMLFlBQVksRUFBRSxTQUFTO0FBQUEsUUFDdkIsY0FBYyxFQUFFLFNBQVM7QUFBQSxRQUN6QixVQUFVLEVBQUUsU0FBUztBQUFBLFFBQ3JCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQTtBQUFBOzs7QUNSQTtBQUFBLDhGQUFBQyxVQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLGNBQWM7QUFFbEIsUUFBSSxvQkFBb0IsU0FBUztBQUNqQyxRQUFJLE9BQU8sa0JBQWtCO0FBQzdCLFFBQUksc0JBQXNCLGVBQWUsa0JBQWtCLEtBQUssS0FBSyxNQUFNLElBQUk7QUFFL0UsSUFBQUEsUUFBTyxVQUFVLGNBQWMsc0JBQXNCLFNBQVUsSUFBSTtBQUNqRSxhQUFPLFdBQVk7QUFDakIsZUFBTyxLQUFLLE1BQU0sSUFBSSxTQUFTO0FBQUEsTUFDakM7QUFBQSxJQUNGO0FBQUE7QUFBQTs7O0FDWEE7QUFBQSxvRkFBQUMsVUFBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxjQUFjO0FBRWxCLFFBQUksV0FBVyxZQUFZLENBQUMsRUFBRSxRQUFRO0FBQ3RDLFFBQUksY0FBYyxZQUFZLEdBQUcsS0FBSztBQUV0QyxJQUFBQSxRQUFPLFVBQVUsU0FBVSxJQUFJO0FBQzdCLGFBQU8sWUFBWSxTQUFTLEVBQUUsR0FBRyxHQUFHLEVBQUU7QUFBQSxJQUN4QztBQUFBO0FBQUE7OztBQ1JBO0FBQUEsdUZBQUFDLFVBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksY0FBYztBQUNsQixRQUFJLFFBQVE7QUFDWixRQUFJLFVBQVU7QUFFZCxRQUFJLFVBQVU7QUFDZCxRQUFJLFFBQVEsWUFBWSxHQUFHLEtBQUs7QUFHaEMsSUFBQUEsUUFBTyxVQUFVLE1BQU0sV0FBWTtBQUdqQyxhQUFPLENBQUMsUUFBUSxHQUFHLEVBQUUscUJBQXFCLENBQUM7QUFBQSxJQUM3QyxDQUFDLElBQUksU0FBVSxJQUFJO0FBQ2pCLGFBQU8sUUFBUSxFQUFFLE1BQU0sV0FBVyxNQUFNLElBQUksRUFBRSxJQUFJLFFBQVEsRUFBRTtBQUFBLElBQzlELElBQUk7QUFBQTtBQUFBOzs7QUNmSjtBQUFBLDZGQUFBQyxVQUFBQyxTQUFBO0FBQUE7QUFHQSxJQUFBQSxRQUFPLFVBQVUsU0FBVSxJQUFJO0FBQzdCLGFBQU8sT0FBTyxRQUFRLE9BQU87QUFBQSxJQUMvQjtBQUFBO0FBQUE7OztBQ0xBO0FBQUEsaUdBQUFDLFVBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksb0JBQW9CO0FBRXhCLFFBQUksYUFBYTtBQUlqQixJQUFBQSxRQUFPLFVBQVUsU0FBVSxJQUFJO0FBQzdCLFVBQUksa0JBQWtCLEVBQUU7QUFBRyxjQUFNLElBQUksV0FBVywwQkFBMEIsRUFBRTtBQUM1RSxhQUFPO0FBQUEsSUFDVDtBQUFBO0FBQUE7OztBQ1ZBO0FBQUEsMEZBQUFDLFVBQUFDLFNBQUE7QUFBQTtBQUVBLFFBQUksZ0JBQWdCO0FBQ3BCLFFBQUkseUJBQXlCO0FBRTdCLElBQUFBLFFBQU8sVUFBVSxTQUFVLElBQUk7QUFDN0IsYUFBTyxjQUFjLHVCQUF1QixFQUFFLENBQUM7QUFBQSxJQUNqRDtBQUFBO0FBQUE7OztBQ1BBO0FBQUEsb0ZBQUFDLFVBQUFDLFNBQUE7QUFBQTtBQUVBLFFBQUksY0FBYyxPQUFPLFlBQVksWUFBWSxTQUFTO0FBSzFELElBQUFBLFFBQU8sVUFBVSxPQUFPLGVBQWUsZUFBZSxnQkFBZ0IsU0FBWSxTQUFVLFVBQVU7QUFDcEcsYUFBTyxPQUFPLFlBQVksY0FBYyxhQUFhO0FBQUEsSUFDdkQsSUFBSSxTQUFVLFVBQVU7QUFDdEIsYUFBTyxPQUFPLFlBQVk7QUFBQSxJQUM1QjtBQUFBO0FBQUE7OztBQ1hBO0FBQUEsa0ZBQUFDLFVBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksYUFBYTtBQUVqQixJQUFBQSxRQUFPLFVBQVUsU0FBVSxJQUFJO0FBQzdCLGFBQU8sT0FBTyxNQUFNLFdBQVcsT0FBTyxPQUFPLFdBQVcsRUFBRTtBQUFBLElBQzVEO0FBQUE7QUFBQTs7O0FDTEE7QUFBQSxxRkFBQUMsVUFBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSUMsVUFBUztBQUNiLFFBQUksYUFBYTtBQUVqQixRQUFJLFlBQVksU0FBVSxVQUFVO0FBQ2xDLGFBQU8sV0FBVyxRQUFRLElBQUksV0FBVztBQUFBLElBQzNDO0FBRUEsSUFBQUQsUUFBTyxVQUFVLFNBQVUsV0FBVyxRQUFRO0FBQzVDLGFBQU8sVUFBVSxTQUFTLElBQUksVUFBVUMsUUFBTyxTQUFTLENBQUMsSUFBSUEsUUFBTyxTQUFTLEtBQUtBLFFBQU8sU0FBUyxFQUFFLE1BQU07QUFBQSxJQUM1RztBQUFBO0FBQUE7OztBQ1ZBO0FBQUEsK0ZBQUFDLFVBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksY0FBYztBQUVsQixJQUFBQSxRQUFPLFVBQVUsWUFBWSxDQUFDLEVBQUUsYUFBYTtBQUFBO0FBQUE7OztBQ0g3QztBQUFBLDBGQUFBQyxVQUFBQyxTQUFBO0FBQUE7QUFDQSxJQUFBQSxRQUFPLFVBQVUsT0FBTyxhQUFhLGVBQWUsT0FBTyxVQUFVLFNBQVMsS0FBSztBQUFBO0FBQUE7OztBQ0RuRjtBQUFBLDBGQUFBQyxVQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJQyxVQUFTO0FBQ2IsUUFBSSxZQUFZO0FBRWhCLFFBQUksVUFBVUEsUUFBTztBQUNyQixRQUFJLE9BQU9BLFFBQU87QUFDbEIsUUFBSSxXQUFXLFdBQVcsUUFBUSxZQUFZLFFBQVEsS0FBSztBQUMzRCxRQUFJLEtBQUssWUFBWSxTQUFTO0FBQzlCLFFBQUk7QUFBSixRQUFXO0FBRVgsUUFBSSxJQUFJO0FBQ04sY0FBUSxHQUFHLE1BQU0sR0FBRztBQUdwQixnQkFBVSxNQUFNLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLE1BQU0sQ0FBQztBQUFBLElBQ25FO0FBSUEsUUFBSSxDQUFDLFdBQVcsV0FBVztBQUN6QixjQUFRLFVBQVUsTUFBTSxhQUFhO0FBQ3JDLFVBQUksQ0FBQyxTQUFTLE1BQU0sQ0FBQyxLQUFLLElBQUk7QUFDNUIsZ0JBQVEsVUFBVSxNQUFNLGVBQWU7QUFDdkMsWUFBSTtBQUFPLG9CQUFVLENBQUMsTUFBTSxDQUFDO0FBQUEsTUFDL0I7QUFBQSxJQUNGO0FBRUEsSUFBQUQsUUFBTyxVQUFVO0FBQUE7QUFBQTs7O0FDM0JqQjtBQUFBLHFHQUFBRSxVQUFBQyxTQUFBO0FBQUE7QUFFQSxRQUFJLGFBQWE7QUFDakIsUUFBSSxRQUFRO0FBQ1osUUFBSUMsVUFBUztBQUViLFFBQUksVUFBVUEsUUFBTztBQUdyQixJQUFBRCxRQUFPLFVBQVUsQ0FBQyxDQUFDLE9BQU8seUJBQXlCLENBQUMsTUFBTSxXQUFZO0FBQ3BFLFVBQUksU0FBUyxPQUFPLGtCQUFrQjtBQUt0QyxhQUFPLENBQUMsUUFBUSxNQUFNLEtBQUssRUFBRSxPQUFPLE1BQU0sYUFBYTtBQUFBLE1BRXJELENBQUMsT0FBTyxRQUFRLGNBQWMsYUFBYTtBQUFBLElBQy9DLENBQUM7QUFBQTtBQUFBOzs7QUNsQkQ7QUFBQSwwRkFBQUUsVUFBQUMsU0FBQTtBQUFBO0FBRUEsUUFBSSxnQkFBZ0I7QUFFcEIsSUFBQUEsUUFBTyxVQUFVLGlCQUNaLENBQUMsT0FBTyxRQUNSLE9BQU8sT0FBTyxZQUFZO0FBQUE7QUFBQTs7O0FDTi9CO0FBQUEsa0ZBQUFDLFVBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksYUFBYTtBQUNqQixRQUFJLGFBQWE7QUFDakIsUUFBSSxnQkFBZ0I7QUFDcEIsUUFBSSxvQkFBb0I7QUFFeEIsUUFBSSxVQUFVO0FBRWQsSUFBQUEsUUFBTyxVQUFVLG9CQUFvQixTQUFVLElBQUk7QUFDakQsYUFBTyxPQUFPLE1BQU07QUFBQSxJQUN0QixJQUFJLFNBQVUsSUFBSTtBQUNoQixVQUFJLFVBQVUsV0FBVyxRQUFRO0FBQ2pDLGFBQU8sV0FBVyxPQUFPLEtBQUssY0FBYyxRQUFRLFdBQVcsUUFBUSxFQUFFLENBQUM7QUFBQSxJQUM1RTtBQUFBO0FBQUE7OztBQ2JBO0FBQUEsc0ZBQUFDLFVBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksVUFBVTtBQUVkLElBQUFBLFFBQU8sVUFBVSxTQUFVLFVBQVU7QUFDbkMsVUFBSTtBQUNGLGVBQU8sUUFBUSxRQUFRO0FBQUEsTUFDekIsU0FBUyxPQUFPO0FBQ2QsZUFBTztBQUFBLE1BQ1Q7QUFBQSxJQUNGO0FBQUE7QUFBQTs7O0FDVEE7QUFBQSxtRkFBQUMsVUFBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxhQUFhO0FBQ2pCLFFBQUksY0FBYztBQUVsQixRQUFJLGFBQWE7QUFHakIsSUFBQUEsUUFBTyxVQUFVLFNBQVUsVUFBVTtBQUNuQyxVQUFJLFdBQVcsUUFBUTtBQUFHLGVBQU87QUFDakMsWUFBTSxJQUFJLFdBQVcsWUFBWSxRQUFRLElBQUksb0JBQW9CO0FBQUEsSUFDbkU7QUFBQTtBQUFBOzs7QUNWQTtBQUFBLG1GQUFBQyxVQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLFlBQVk7QUFDaEIsUUFBSSxvQkFBb0I7QUFJeEIsSUFBQUEsUUFBTyxVQUFVLFNBQVUsR0FBRyxHQUFHO0FBQy9CLFVBQUksT0FBTyxFQUFFLENBQUM7QUFDZCxhQUFPLGtCQUFrQixJQUFJLElBQUksU0FBWSxVQUFVLElBQUk7QUFBQSxJQUM3RDtBQUFBO0FBQUE7OztBQ1RBO0FBQUEsOEZBQUFDLFVBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksT0FBTztBQUNYLFFBQUksYUFBYTtBQUNqQixRQUFJLFdBQVc7QUFFZixRQUFJLGFBQWE7QUFJakIsSUFBQUEsUUFBTyxVQUFVLFNBQVUsT0FBTyxNQUFNO0FBQ3RDLFVBQUksSUFBSTtBQUNSLFVBQUksU0FBUyxZQUFZLFdBQVcsS0FBSyxNQUFNLFFBQVEsS0FBSyxDQUFDLFNBQVMsTUFBTSxLQUFLLElBQUksS0FBSyxDQUFDO0FBQUcsZUFBTztBQUNyRyxVQUFJLFdBQVcsS0FBSyxNQUFNLE9BQU8sS0FBSyxDQUFDLFNBQVMsTUFBTSxLQUFLLElBQUksS0FBSyxDQUFDO0FBQUcsZUFBTztBQUMvRSxVQUFJLFNBQVMsWUFBWSxXQUFXLEtBQUssTUFBTSxRQUFRLEtBQUssQ0FBQyxTQUFTLE1BQU0sS0FBSyxJQUFJLEtBQUssQ0FBQztBQUFHLGVBQU87QUFDckcsWUFBTSxJQUFJLFdBQVcseUNBQXlDO0FBQUEsSUFDaEU7QUFBQTtBQUFBOzs7QUNmQTtBQUFBLGdGQUFBQyxVQUFBQyxTQUFBO0FBQUE7QUFDQSxJQUFBQSxRQUFPLFVBQVU7QUFBQTtBQUFBOzs7QUNEakI7QUFBQSwrRkFBQUMsVUFBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSUMsVUFBUztBQUdiLFFBQUksaUJBQWlCLE9BQU87QUFFNUIsSUFBQUQsUUFBTyxVQUFVLFNBQVUsS0FBSyxPQUFPO0FBQ3JDLFVBQUk7QUFDRix1QkFBZUMsU0FBUSxLQUFLLEVBQUUsT0FBYyxjQUFjLE1BQU0sVUFBVSxLQUFLLENBQUM7QUFBQSxNQUNsRixTQUFTLE9BQU87QUFDZCxRQUFBQSxRQUFPLEdBQUcsSUFBSTtBQUFBLE1BQ2hCO0FBQUUsYUFBTztBQUFBLElBQ1g7QUFBQTtBQUFBOzs7QUNaQTtBQUFBLHFGQUFBQyxVQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJQyxVQUFTO0FBQ2IsUUFBSSx1QkFBdUI7QUFFM0IsUUFBSSxTQUFTO0FBQ2IsUUFBSSxRQUFRQSxRQUFPLE1BQU0sS0FBSyxxQkFBcUIsUUFBUSxDQUFDLENBQUM7QUFFN0QsSUFBQUQsUUFBTyxVQUFVO0FBQUE7QUFBQTs7O0FDUGpCO0FBQUEsK0VBQUFFLFVBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksVUFBVTtBQUNkLFFBQUksUUFBUTtBQUVaLEtBQUNBLFFBQU8sVUFBVSxTQUFVLEtBQUssT0FBTztBQUN0QyxhQUFPLE1BQU0sR0FBRyxNQUFNLE1BQU0sR0FBRyxJQUFJLFVBQVUsU0FBWSxRQUFRLENBQUM7QUFBQSxJQUNwRSxHQUFHLFlBQVksQ0FBQyxDQUFDLEVBQUUsS0FBSztBQUFBLE1BQ3RCLFNBQVM7QUFBQSxNQUNULE1BQU0sVUFBVSxTQUFTO0FBQUEsTUFDekIsV0FBVztBQUFBLE1BQ1gsU0FBUztBQUFBLE1BQ1QsUUFBUTtBQUFBLElBQ1YsQ0FBQztBQUFBO0FBQUE7OztBQ1pEO0FBQUEsa0ZBQUFDLFVBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUkseUJBQXlCO0FBRTdCLFFBQUksVUFBVTtBQUlkLElBQUFBLFFBQU8sVUFBVSxTQUFVLFVBQVU7QUFDbkMsYUFBTyxRQUFRLHVCQUF1QixRQUFRLENBQUM7QUFBQSxJQUNqRDtBQUFBO0FBQUE7OztBQ1RBO0FBQUEseUZBQUFDLFVBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksY0FBYztBQUNsQixRQUFJLFdBQVc7QUFFZixRQUFJLGlCQUFpQixZQUFZLENBQUMsRUFBRSxjQUFjO0FBS2xELElBQUFBLFFBQU8sVUFBVSxPQUFPLFVBQVUsU0FBUyxPQUFPLElBQUksS0FBSztBQUN6RCxhQUFPLGVBQWUsU0FBUyxFQUFFLEdBQUcsR0FBRztBQUFBLElBQ3pDO0FBQUE7QUFBQTs7O0FDWEE7QUFBQSw0RUFBQUMsVUFBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxjQUFjO0FBRWxCLFFBQUksS0FBSztBQUNULFFBQUksVUFBVSxLQUFLLE9BQU87QUFDMUIsUUFBSSxXQUFXLFlBQVksR0FBSSxRQUFRO0FBRXZDLElBQUFBLFFBQU8sVUFBVSxTQUFVLEtBQUs7QUFDOUIsYUFBTyxhQUFhLFFBQVEsU0FBWSxLQUFLLE9BQU8sT0FBTyxTQUFTLEVBQUUsS0FBSyxTQUFTLEVBQUU7QUFBQSxJQUN4RjtBQUFBO0FBQUE7OztBQ1RBO0FBQUEsMEZBQUFDLFVBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUlDLFVBQVM7QUFDYixRQUFJLFNBQVM7QUFDYixRQUFJLFNBQVM7QUFDYixRQUFJLE1BQU07QUFDVixRQUFJLGdCQUFnQjtBQUNwQixRQUFJLG9CQUFvQjtBQUV4QixRQUFJQyxVQUFTRCxRQUFPO0FBQ3BCLFFBQUksd0JBQXdCLE9BQU8sS0FBSztBQUN4QyxRQUFJLHdCQUF3QixvQkFBb0JDLFFBQU8sS0FBSyxLQUFLQSxVQUFTQSxXQUFVQSxRQUFPLGlCQUFpQjtBQUU1RyxJQUFBRixRQUFPLFVBQVUsU0FBVSxNQUFNO0FBQy9CLFVBQUksQ0FBQyxPQUFPLHVCQUF1QixJQUFJLEdBQUc7QUFDeEMsOEJBQXNCLElBQUksSUFBSSxpQkFBaUIsT0FBT0UsU0FBUSxJQUFJLElBQzlEQSxRQUFPLElBQUksSUFDWCxzQkFBc0IsWUFBWSxJQUFJO0FBQUEsTUFDNUM7QUFBRSxhQUFPLHNCQUFzQixJQUFJO0FBQUEsSUFDckM7QUFBQTtBQUFBOzs7QUNsQkE7QUFBQSxxRkFBQUMsVUFBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxPQUFPO0FBQ1gsUUFBSSxXQUFXO0FBQ2YsUUFBSSxXQUFXO0FBQ2YsUUFBSSxZQUFZO0FBQ2hCLFFBQUksc0JBQXNCO0FBQzFCLFFBQUksa0JBQWtCO0FBRXRCLFFBQUksYUFBYTtBQUNqQixRQUFJLGVBQWUsZ0JBQWdCLGFBQWE7QUFJaEQsSUFBQUEsUUFBTyxVQUFVLFNBQVUsT0FBTyxNQUFNO0FBQ3RDLFVBQUksQ0FBQyxTQUFTLEtBQUssS0FBSyxTQUFTLEtBQUs7QUFBRyxlQUFPO0FBQ2hELFVBQUksZUFBZSxVQUFVLE9BQU8sWUFBWTtBQUNoRCxVQUFJO0FBQ0osVUFBSSxjQUFjO0FBQ2hCLFlBQUksU0FBUztBQUFXLGlCQUFPO0FBQy9CLGlCQUFTLEtBQUssY0FBYyxPQUFPLElBQUk7QUFDdkMsWUFBSSxDQUFDLFNBQVMsTUFBTSxLQUFLLFNBQVMsTUFBTTtBQUFHLGlCQUFPO0FBQ2xELGNBQU0sSUFBSSxXQUFXLHlDQUF5QztBQUFBLE1BQ2hFO0FBQ0EsVUFBSSxTQUFTO0FBQVcsZUFBTztBQUMvQixhQUFPLG9CQUFvQixPQUFPLElBQUk7QUFBQSxJQUN4QztBQUFBO0FBQUE7OztBQ3pCQTtBQUFBLHdGQUFBQyxVQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLGNBQWM7QUFDbEIsUUFBSSxXQUFXO0FBSWYsSUFBQUEsUUFBTyxVQUFVLFNBQVUsVUFBVTtBQUNuQyxVQUFJLE1BQU0sWUFBWSxVQUFVLFFBQVE7QUFDeEMsYUFBTyxTQUFTLEdBQUcsSUFBSSxNQUFNLE1BQU07QUFBQSxJQUNyQztBQUFBO0FBQUE7OztBQ1RBO0FBQUEsZ0dBQUFDLFVBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUlDLFVBQVM7QUFDYixRQUFJLFdBQVc7QUFFZixRQUFJQyxZQUFXRCxRQUFPO0FBRXRCLFFBQUksU0FBUyxTQUFTQyxTQUFRLEtBQUssU0FBU0EsVUFBUyxhQUFhO0FBRWxFLElBQUFGLFFBQU8sVUFBVSxTQUFVLElBQUk7QUFDN0IsYUFBTyxTQUFTRSxVQUFTLGNBQWMsRUFBRSxJQUFJLENBQUM7QUFBQSxJQUNoRDtBQUFBO0FBQUE7OztBQ1ZBO0FBQUEsdUZBQUFDLFVBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksY0FBYztBQUNsQixRQUFJLFFBQVE7QUFDWixRQUFJLGdCQUFnQjtBQUdwQixJQUFBQSxRQUFPLFVBQVUsQ0FBQyxlQUFlLENBQUMsTUFBTSxXQUFZO0FBRWxELGFBQU8sT0FBTyxlQUFlLGNBQWMsS0FBSyxHQUFHLEtBQUs7QUFBQSxRQUN0RCxLQUFLLFdBQVk7QUFBRSxpQkFBTztBQUFBLFFBQUc7QUFBQSxNQUMvQixDQUFDLEVBQUUsTUFBTTtBQUFBLElBQ1gsQ0FBQztBQUFBO0FBQUE7OztBQ1hEO0FBQUEsMkdBQUFDLFVBQUE7QUFBQTtBQUNBLFFBQUksY0FBYztBQUNsQixRQUFJLE9BQU87QUFDWCxRQUFJLDZCQUE2QjtBQUNqQyxRQUFJLDJCQUEyQjtBQUMvQixRQUFJLGtCQUFrQjtBQUN0QixRQUFJLGdCQUFnQjtBQUNwQixRQUFJLFNBQVM7QUFDYixRQUFJLGlCQUFpQjtBQUdyQixRQUFJLDRCQUE0QixPQUFPO0FBSXZDLElBQUFBLFNBQVEsSUFBSSxjQUFjLDRCQUE0QixTQUFTLHlCQUF5QixHQUFHLEdBQUc7QUFDNUYsVUFBSSxnQkFBZ0IsQ0FBQztBQUNyQixVQUFJLGNBQWMsQ0FBQztBQUNuQixVQUFJO0FBQWdCLFlBQUk7QUFDdEIsaUJBQU8sMEJBQTBCLEdBQUcsQ0FBQztBQUFBLFFBQ3ZDLFNBQVMsT0FBTztBQUFBLFFBQWM7QUFDOUIsVUFBSSxPQUFPLEdBQUcsQ0FBQztBQUFHLGVBQU8seUJBQXlCLENBQUMsS0FBSywyQkFBMkIsR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUFBLElBQ25HO0FBQUE7QUFBQTs7O0FDdEJBO0FBQUEsZ0dBQUFDLFVBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksY0FBYztBQUNsQixRQUFJLFFBQVE7QUFJWixJQUFBQSxRQUFPLFVBQVUsZUFBZSxNQUFNLFdBQVk7QUFFaEQsYUFBTyxPQUFPLGVBQWUsV0FBWTtBQUFBLE1BQWMsR0FBRyxhQUFhO0FBQUEsUUFDckUsT0FBTztBQUFBLFFBQ1AsVUFBVTtBQUFBLE1BQ1osQ0FBQyxFQUFFLGNBQWM7QUFBQSxJQUNuQixDQUFDO0FBQUE7QUFBQTs7O0FDWkQ7QUFBQSxrRkFBQUMsVUFBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxXQUFXO0FBRWYsUUFBSSxVQUFVO0FBQ2QsUUFBSSxhQUFhO0FBR2pCLElBQUFBLFFBQU8sVUFBVSxTQUFVLFVBQVU7QUFDbkMsVUFBSSxTQUFTLFFBQVE7QUFBRyxlQUFPO0FBQy9CLFlBQU0sSUFBSSxXQUFXLFFBQVEsUUFBUSxJQUFJLG1CQUFtQjtBQUFBLElBQzlEO0FBQUE7QUFBQTs7O0FDVkE7QUFBQSwrRkFBQUMsVUFBQTtBQUFBO0FBQ0EsUUFBSSxjQUFjO0FBQ2xCLFFBQUksaUJBQWlCO0FBQ3JCLFFBQUksMEJBQTBCO0FBQzlCLFFBQUksV0FBVztBQUNmLFFBQUksZ0JBQWdCO0FBRXBCLFFBQUksYUFBYTtBQUVqQixRQUFJLGtCQUFrQixPQUFPO0FBRTdCLFFBQUksNEJBQTRCLE9BQU87QUFDdkMsUUFBSSxhQUFhO0FBQ2pCLFFBQUksZUFBZTtBQUNuQixRQUFJLFdBQVc7QUFJZixJQUFBQSxTQUFRLElBQUksY0FBYywwQkFBMEIsU0FBUyxlQUFlLEdBQUcsR0FBRyxZQUFZO0FBQzVGLGVBQVMsQ0FBQztBQUNWLFVBQUksY0FBYyxDQUFDO0FBQ25CLGVBQVMsVUFBVTtBQUNuQixVQUFJLE9BQU8sTUFBTSxjQUFjLE1BQU0sZUFBZSxXQUFXLGNBQWMsWUFBWSxjQUFjLENBQUMsV0FBVyxRQUFRLEdBQUc7QUFDNUgsWUFBSSxVQUFVLDBCQUEwQixHQUFHLENBQUM7QUFDNUMsWUFBSSxXQUFXLFFBQVEsUUFBUSxHQUFHO0FBQ2hDLFlBQUUsQ0FBQyxJQUFJLFdBQVc7QUFDbEIsdUJBQWE7QUFBQSxZQUNYLGNBQWMsZ0JBQWdCLGFBQWEsV0FBVyxZQUFZLElBQUksUUFBUSxZQUFZO0FBQUEsWUFDMUYsWUFBWSxjQUFjLGFBQWEsV0FBVyxVQUFVLElBQUksUUFBUSxVQUFVO0FBQUEsWUFDbEYsVUFBVTtBQUFBLFVBQ1o7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFFLGFBQU8sZ0JBQWdCLEdBQUcsR0FBRyxVQUFVO0FBQUEsSUFDM0MsSUFBSSxrQkFBa0IsU0FBUyxlQUFlLEdBQUcsR0FBRyxZQUFZO0FBQzlELGVBQVMsQ0FBQztBQUNWLFVBQUksY0FBYyxDQUFDO0FBQ25CLGVBQVMsVUFBVTtBQUNuQixVQUFJO0FBQWdCLFlBQUk7QUFDdEIsaUJBQU8sZ0JBQWdCLEdBQUcsR0FBRyxVQUFVO0FBQUEsUUFDekMsU0FBUyxPQUFPO0FBQUEsUUFBYztBQUM5QixVQUFJLFNBQVMsY0FBYyxTQUFTO0FBQVksY0FBTSxJQUFJLFdBQVcseUJBQXlCO0FBQzlGLFVBQUksV0FBVztBQUFZLFVBQUUsQ0FBQyxJQUFJLFdBQVc7QUFDN0MsYUFBTztBQUFBLElBQ1Q7QUFBQTtBQUFBOzs7QUMzQ0E7QUFBQSx1R0FBQUMsVUFBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxjQUFjO0FBQ2xCLFFBQUksdUJBQXVCO0FBQzNCLFFBQUksMkJBQTJCO0FBRS9CLElBQUFBLFFBQU8sVUFBVSxjQUFjLFNBQVUsUUFBUSxLQUFLLE9BQU87QUFDM0QsYUFBTyxxQkFBcUIsRUFBRSxRQUFRLEtBQUsseUJBQXlCLEdBQUcsS0FBSyxDQUFDO0FBQUEsSUFDL0UsSUFBSSxTQUFVLFFBQVEsS0FBSyxPQUFPO0FBQ2hDLGFBQU8sR0FBRyxJQUFJO0FBQ2QsYUFBTztBQUFBLElBQ1Q7QUFBQTtBQUFBOzs7QUNWQTtBQUFBLHNGQUFBQyxVQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLGNBQWM7QUFDbEIsUUFBSSxTQUFTO0FBRWIsUUFBSSxvQkFBb0IsU0FBUztBQUVqQyxRQUFJLGdCQUFnQixlQUFlLE9BQU87QUFFMUMsUUFBSSxTQUFTLE9BQU8sbUJBQW1CLE1BQU07QUFFN0MsUUFBSSxTQUFTLFVBQVcsU0FBUyxZQUFZO0FBQUEsSUFBYyxFQUFHLFNBQVM7QUFDdkUsUUFBSSxlQUFlLFdBQVcsQ0FBQyxlQUFnQixlQUFlLGNBQWMsbUJBQW1CLE1BQU0sRUFBRTtBQUV2RyxJQUFBQSxRQUFPLFVBQVU7QUFBQSxNQUNmO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUE7QUFBQTs7O0FDakJBO0FBQUEsdUZBQUFDLFVBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksY0FBYztBQUNsQixRQUFJLGFBQWE7QUFDakIsUUFBSSxRQUFRO0FBRVosUUFBSSxtQkFBbUIsWUFBWSxTQUFTLFFBQVE7QUFHcEQsUUFBSSxDQUFDLFdBQVcsTUFBTSxhQUFhLEdBQUc7QUFDcEMsWUFBTSxnQkFBZ0IsU0FBVSxJQUFJO0FBQ2xDLGVBQU8saUJBQWlCLEVBQUU7QUFBQSxNQUM1QjtBQUFBLElBQ0Y7QUFFQSxJQUFBQSxRQUFPLFVBQVUsTUFBTTtBQUFBO0FBQUE7OztBQ2R2QjtBQUFBLGlHQUFBQyxVQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJQyxVQUFTO0FBQ2IsUUFBSSxhQUFhO0FBRWpCLFFBQUksVUFBVUEsUUFBTztBQUVyQixJQUFBRCxRQUFPLFVBQVUsV0FBVyxPQUFPLEtBQUssY0FBYyxLQUFLLE9BQU8sT0FBTyxDQUFDO0FBQUE7QUFBQTs7O0FDTjFFO0FBQUEsbUZBQUFFLFVBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksU0FBUztBQUNiLFFBQUksTUFBTTtBQUVWLFFBQUksT0FBTyxPQUFPLE1BQU07QUFFeEIsSUFBQUEsUUFBTyxVQUFVLFNBQVUsS0FBSztBQUM5QixhQUFPLEtBQUssR0FBRyxNQUFNLEtBQUssR0FBRyxJQUFJLElBQUksR0FBRztBQUFBLElBQzFDO0FBQUE7QUFBQTs7O0FDUkE7QUFBQSxvRkFBQUMsVUFBQUMsU0FBQTtBQUFBO0FBQ0EsSUFBQUEsUUFBTyxVQUFVLENBQUM7QUFBQTtBQUFBOzs7QUNEbEI7QUFBQSx1RkFBQUMsVUFBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxrQkFBa0I7QUFDdEIsUUFBSUMsVUFBUztBQUNiLFFBQUksV0FBVztBQUNmLFFBQUksOEJBQThCO0FBQ2xDLFFBQUksU0FBUztBQUNiLFFBQUksU0FBUztBQUNiLFFBQUksWUFBWTtBQUNoQixRQUFJLGFBQWE7QUFFakIsUUFBSSw2QkFBNkI7QUFDakMsUUFBSUMsYUFBWUQsUUFBTztBQUN2QixRQUFJLFVBQVVBLFFBQU87QUFDckIsUUFBSTtBQUFKLFFBQVM7QUFBVCxRQUFjO0FBRWQsUUFBSSxVQUFVLFNBQVUsSUFBSTtBQUMxQixhQUFPLElBQUksRUFBRSxJQUFJLElBQUksRUFBRSxJQUFJLElBQUksSUFBSSxDQUFDLENBQUM7QUFBQSxJQUN2QztBQUVBLFFBQUksWUFBWSxTQUFVLE1BQU07QUFDOUIsYUFBTyxTQUFVLElBQUk7QUFDbkIsWUFBSTtBQUNKLFlBQUksQ0FBQyxTQUFTLEVBQUUsTUFBTSxRQUFRLElBQUksRUFBRSxHQUFHLFNBQVMsTUFBTTtBQUNwRCxnQkFBTSxJQUFJQyxXQUFVLDRCQUE0QixPQUFPLFdBQVc7QUFBQSxRQUNwRTtBQUFFLGVBQU87QUFBQSxNQUNYO0FBQUEsSUFDRjtBQUVBLFFBQUksbUJBQW1CLE9BQU8sT0FBTztBQUMvQixjQUFRLE9BQU8sVUFBVSxPQUFPLFFBQVEsSUFBSSxRQUFRO0FBRXhELFlBQU0sTUFBTSxNQUFNO0FBQ2xCLFlBQU0sTUFBTSxNQUFNO0FBQ2xCLFlBQU0sTUFBTSxNQUFNO0FBRWxCLFlBQU0sU0FBVSxJQUFJLFVBQVU7QUFDNUIsWUFBSSxNQUFNLElBQUksRUFBRTtBQUFHLGdCQUFNLElBQUlBLFdBQVUsMEJBQTBCO0FBQ2pFLGlCQUFTLFNBQVM7QUFDbEIsY0FBTSxJQUFJLElBQUksUUFBUTtBQUN0QixlQUFPO0FBQUEsTUFDVDtBQUNBLFlBQU0sU0FBVSxJQUFJO0FBQ2xCLGVBQU8sTUFBTSxJQUFJLEVBQUUsS0FBSyxDQUFDO0FBQUEsTUFDM0I7QUFDQSxZQUFNLFNBQVUsSUFBSTtBQUNsQixlQUFPLE1BQU0sSUFBSSxFQUFFO0FBQUEsTUFDckI7QUFBQSxJQUNGLE9BQU87QUFDRCxjQUFRLFVBQVUsT0FBTztBQUM3QixpQkFBVyxLQUFLLElBQUk7QUFDcEIsWUFBTSxTQUFVLElBQUksVUFBVTtBQUM1QixZQUFJLE9BQU8sSUFBSSxLQUFLO0FBQUcsZ0JBQU0sSUFBSUEsV0FBVSwwQkFBMEI7QUFDckUsaUJBQVMsU0FBUztBQUNsQixvQ0FBNEIsSUFBSSxPQUFPLFFBQVE7QUFDL0MsZUFBTztBQUFBLE1BQ1Q7QUFDQSxZQUFNLFNBQVUsSUFBSTtBQUNsQixlQUFPLE9BQU8sSUFBSSxLQUFLLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQztBQUFBLE1BQzFDO0FBQ0EsWUFBTSxTQUFVLElBQUk7QUFDbEIsZUFBTyxPQUFPLElBQUksS0FBSztBQUFBLE1BQ3pCO0FBQUEsSUFDRjtBQWpDTTtBQW1CQTtBQWdCTixJQUFBRixRQUFPLFVBQVU7QUFBQSxNQUNmO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQTtBQUFBOzs7QUN0RUE7QUFBQSxzRkFBQUcsVUFBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxjQUFjO0FBQ2xCLFFBQUksUUFBUTtBQUNaLFFBQUksYUFBYTtBQUNqQixRQUFJLFNBQVM7QUFDYixRQUFJLGNBQWM7QUFDbEIsUUFBSSw2QkFBNkIsd0JBQXNDO0FBQ3ZFLFFBQUksZ0JBQWdCO0FBQ3BCLFFBQUksc0JBQXNCO0FBRTFCLFFBQUksdUJBQXVCLG9CQUFvQjtBQUMvQyxRQUFJLG1CQUFtQixvQkFBb0I7QUFDM0MsUUFBSSxVQUFVO0FBRWQsUUFBSSxpQkFBaUIsT0FBTztBQUM1QixRQUFJLGNBQWMsWUFBWSxHQUFHLEtBQUs7QUFDdEMsUUFBSSxVQUFVLFlBQVksR0FBRyxPQUFPO0FBQ3BDLFFBQUksT0FBTyxZQUFZLENBQUMsRUFBRSxJQUFJO0FBRTlCLFFBQUksc0JBQXNCLGVBQWUsQ0FBQyxNQUFNLFdBQVk7QUFDMUQsYUFBTyxlQUFlLFdBQVk7QUFBQSxNQUFjLEdBQUcsVUFBVSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsV0FBVztBQUFBLElBQ3hGLENBQUM7QUFFRCxRQUFJLFdBQVcsT0FBTyxNQUFNLEVBQUUsTUFBTSxRQUFRO0FBRTVDLFFBQUksY0FBY0EsUUFBTyxVQUFVLFNBQVUsT0FBTyxNQUFNLFNBQVM7QUFDakUsVUFBSSxZQUFZLFFBQVEsSUFBSSxHQUFHLEdBQUcsQ0FBQyxNQUFNLFdBQVc7QUFDbEQsZUFBTyxNQUFNLFFBQVEsUUFBUSxJQUFJLEdBQUcseUJBQXlCLElBQUksSUFBSTtBQUFBLE1BQ3ZFO0FBQ0EsVUFBSSxXQUFXLFFBQVE7QUFBUSxlQUFPLFNBQVM7QUFDL0MsVUFBSSxXQUFXLFFBQVE7QUFBUSxlQUFPLFNBQVM7QUFDL0MsVUFBSSxDQUFDLE9BQU8sT0FBTyxNQUFNLEtBQU0sOEJBQThCLE1BQU0sU0FBUyxNQUFPO0FBQ2pGLFlBQUk7QUFBYSx5QkFBZSxPQUFPLFFBQVEsRUFBRSxPQUFPLE1BQU0sY0FBYyxLQUFLLENBQUM7QUFBQTtBQUM3RSxnQkFBTSxPQUFPO0FBQUEsTUFDcEI7QUFDQSxVQUFJLHVCQUF1QixXQUFXLE9BQU8sU0FBUyxPQUFPLEtBQUssTUFBTSxXQUFXLFFBQVEsT0FBTztBQUNoRyx1QkFBZSxPQUFPLFVBQVUsRUFBRSxPQUFPLFFBQVEsTUFBTSxDQUFDO0FBQUEsTUFDMUQ7QUFDQSxVQUFJO0FBQ0YsWUFBSSxXQUFXLE9BQU8sU0FBUyxhQUFhLEtBQUssUUFBUSxhQUFhO0FBQ3BFLGNBQUk7QUFBYSwyQkFBZSxPQUFPLGFBQWEsRUFBRSxVQUFVLE1BQU0sQ0FBQztBQUFBLFFBRXpFLFdBQVcsTUFBTTtBQUFXLGdCQUFNLFlBQVk7QUFBQSxNQUNoRCxTQUFTLE9BQU87QUFBQSxNQUFjO0FBQzlCLFVBQUksUUFBUSxxQkFBcUIsS0FBSztBQUN0QyxVQUFJLENBQUMsT0FBTyxPQUFPLFFBQVEsR0FBRztBQUM1QixjQUFNLFNBQVMsS0FBSyxVQUFVLE9BQU8sUUFBUSxXQUFXLE9BQU8sRUFBRTtBQUFBLE1BQ25FO0FBQUUsYUFBTztBQUFBLElBQ1g7QUFJQSxhQUFTLFVBQVUsV0FBVyxZQUFZLFNBQVMsV0FBVztBQUM1RCxhQUFPLFdBQVcsSUFBSSxLQUFLLGlCQUFpQixJQUFJLEVBQUUsVUFBVSxjQUFjLElBQUk7QUFBQSxJQUNoRixHQUFHLFVBQVU7QUFBQTtBQUFBOzs7QUN0RGI7QUFBQSx3RkFBQUMsVUFBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxhQUFhO0FBQ2pCLFFBQUksdUJBQXVCO0FBQzNCLFFBQUksY0FBYztBQUNsQixRQUFJLHVCQUF1QjtBQUUzQixJQUFBQSxRQUFPLFVBQVUsU0FBVSxHQUFHLEtBQUssT0FBTyxTQUFTO0FBQ2pELFVBQUksQ0FBQztBQUFTLGtCQUFVLENBQUM7QUFDekIsVUFBSSxTQUFTLFFBQVE7QUFDckIsVUFBSSxPQUFPLFFBQVEsU0FBUyxTQUFZLFFBQVEsT0FBTztBQUN2RCxVQUFJLFdBQVcsS0FBSztBQUFHLG9CQUFZLE9BQU8sTUFBTSxPQUFPO0FBQ3ZELFVBQUksUUFBUSxRQUFRO0FBQ2xCLFlBQUk7QUFBUSxZQUFFLEdBQUcsSUFBSTtBQUFBO0FBQ2hCLCtCQUFxQixLQUFLLEtBQUs7QUFBQSxNQUN0QyxPQUFPO0FBQ0wsWUFBSTtBQUNGLGNBQUksQ0FBQyxRQUFRO0FBQVEsbUJBQU8sRUFBRSxHQUFHO0FBQUEsbUJBQ3hCLEVBQUUsR0FBRztBQUFHLHFCQUFTO0FBQUEsUUFDNUIsU0FBUyxPQUFPO0FBQUEsUUFBYztBQUM5QixZQUFJO0FBQVEsWUFBRSxHQUFHLElBQUk7QUFBQTtBQUNoQiwrQkFBcUIsRUFBRSxHQUFHLEtBQUs7QUFBQSxZQUNsQztBQUFBLFlBQ0EsWUFBWTtBQUFBLFlBQ1osY0FBYyxDQUFDLFFBQVE7QUFBQSxZQUN2QixVQUFVLENBQUMsUUFBUTtBQUFBLFVBQ3JCLENBQUM7QUFBQSxNQUNIO0FBQUUsYUFBTztBQUFBLElBQ1g7QUFBQTtBQUFBOzs7QUMzQkE7QUFBQSxtRkFBQUMsVUFBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxPQUFPLEtBQUs7QUFDaEIsUUFBSSxRQUFRLEtBQUs7QUFLakIsSUFBQUEsUUFBTyxVQUFVLEtBQUssU0FBUyxTQUFTLE1BQU0sR0FBRztBQUMvQyxVQUFJLElBQUksQ0FBQztBQUNULGNBQVEsSUFBSSxJQUFJLFFBQVEsTUFBTSxDQUFDO0FBQUEsSUFDakM7QUFBQTtBQUFBOzs7QUNWQTtBQUFBLCtGQUFBQyxVQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLFFBQVE7QUFJWixJQUFBQSxRQUFPLFVBQVUsU0FBVSxVQUFVO0FBQ25DLFVBQUksU0FBUyxDQUFDO0FBRWQsYUFBTyxXQUFXLFVBQVUsV0FBVyxJQUFJLElBQUksTUFBTSxNQUFNO0FBQUEsSUFDN0Q7QUFBQTtBQUFBOzs7QUNUQTtBQUFBLDBGQUFBQyxVQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLHNCQUFzQjtBQUUxQixRQUFJLE1BQU0sS0FBSztBQUNmLFFBQUksTUFBTSxLQUFLO0FBS2YsSUFBQUEsUUFBTyxVQUFVLFNBQVUsT0FBTyxRQUFRO0FBQ3hDLFVBQUksVUFBVSxvQkFBb0IsS0FBSztBQUN2QyxhQUFPLFVBQVUsSUFBSSxJQUFJLFVBQVUsUUFBUSxDQUFDLElBQUksSUFBSSxTQUFTLE1BQU07QUFBQSxJQUNyRTtBQUFBO0FBQUE7OztBQ1pBO0FBQUEsa0ZBQUFDLFVBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksc0JBQXNCO0FBRTFCLFFBQUksTUFBTSxLQUFLO0FBSWYsSUFBQUEsUUFBTyxVQUFVLFNBQVUsVUFBVTtBQUNuQyxVQUFJLE1BQU0sb0JBQW9CLFFBQVE7QUFDdEMsYUFBTyxNQUFNLElBQUksSUFBSSxLQUFLLGdCQUFnQixJQUFJO0FBQUEsSUFDaEQ7QUFBQTtBQUFBOzs7QUNWQTtBQUFBLDZGQUFBQyxVQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLFdBQVc7QUFJZixJQUFBQSxRQUFPLFVBQVUsU0FBVSxLQUFLO0FBQzlCLGFBQU8sU0FBUyxJQUFJLE1BQU07QUFBQSxJQUM1QjtBQUFBO0FBQUE7OztBQ1BBO0FBQUEsdUZBQUFDLFVBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksa0JBQWtCO0FBQ3RCLFFBQUksa0JBQWtCO0FBQ3RCLFFBQUksb0JBQW9CO0FBR3hCLFFBQUksZUFBZSxTQUFVLGFBQWE7QUFDeEMsYUFBTyxTQUFVLE9BQU8sSUFBSSxXQUFXO0FBQ3JDLFlBQUksSUFBSSxnQkFBZ0IsS0FBSztBQUM3QixZQUFJLFNBQVMsa0JBQWtCLENBQUM7QUFDaEMsWUFBSSxRQUFRLGdCQUFnQixXQUFXLE1BQU07QUFDN0MsWUFBSTtBQUdKLFlBQUksZUFBZSxPQUFPO0FBQUksaUJBQU8sU0FBUyxPQUFPO0FBQ25ELG9CQUFRLEVBQUUsT0FBTztBQUVqQixnQkFBSSxVQUFVO0FBQU8scUJBQU87QUFBQSxVQUU5QjtBQUFBO0FBQU8saUJBQU0sU0FBUyxPQUFPLFNBQVM7QUFDcEMsaUJBQUssZUFBZSxTQUFTLE1BQU0sRUFBRSxLQUFLLE1BQU07QUFBSSxxQkFBTyxlQUFlLFNBQVM7QUFBQSxVQUNyRjtBQUFFLGVBQU8sQ0FBQyxlQUFlO0FBQUEsTUFDM0I7QUFBQSxJQUNGO0FBRUEsSUFBQUEsUUFBTyxVQUFVO0FBQUE7QUFBQTtBQUFBLE1BR2YsVUFBVSxhQUFhLElBQUk7QUFBQTtBQUFBO0FBQUEsTUFHM0IsU0FBUyxhQUFhLEtBQUs7QUFBQSxJQUM3QjtBQUFBO0FBQUE7OztBQ2hDQTtBQUFBLDZGQUFBQyxVQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLGNBQWM7QUFDbEIsUUFBSSxTQUFTO0FBQ2IsUUFBSSxrQkFBa0I7QUFDdEIsUUFBSSxVQUFVLHlCQUF1QztBQUNyRCxRQUFJLGFBQWE7QUFFakIsUUFBSSxPQUFPLFlBQVksQ0FBQyxFQUFFLElBQUk7QUFFOUIsSUFBQUEsUUFBTyxVQUFVLFNBQVUsUUFBUSxPQUFPO0FBQ3hDLFVBQUksSUFBSSxnQkFBZ0IsTUFBTTtBQUM5QixVQUFJLElBQUk7QUFDUixVQUFJLFNBQVMsQ0FBQztBQUNkLFVBQUk7QUFDSixXQUFLLE9BQU87QUFBRyxTQUFDLE9BQU8sWUFBWSxHQUFHLEtBQUssT0FBTyxHQUFHLEdBQUcsS0FBSyxLQUFLLFFBQVEsR0FBRztBQUU3RSxhQUFPLE1BQU0sU0FBUztBQUFHLFlBQUksT0FBTyxHQUFHLE1BQU0sTUFBTSxHQUFHLENBQUMsR0FBRztBQUN4RCxXQUFDLFFBQVEsUUFBUSxHQUFHLEtBQUssS0FBSyxRQUFRLEdBQUc7QUFBQSxRQUMzQztBQUNBLGFBQU87QUFBQSxJQUNUO0FBQUE7QUFBQTs7O0FDcEJBO0FBQUEsc0ZBQUFDLFVBQUFDLFNBQUE7QUFBQTtBQUVBLElBQUFBLFFBQU8sVUFBVTtBQUFBLE1BQ2Y7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUE7QUFBQTs7O0FDVkE7QUFBQSxzR0FBQUMsVUFBQTtBQUFBO0FBQ0EsUUFBSSxxQkFBcUI7QUFDekIsUUFBSSxjQUFjO0FBRWxCLFFBQUksYUFBYSxZQUFZLE9BQU8sVUFBVSxXQUFXO0FBS3pELElBQUFBLFNBQVEsSUFBSSxPQUFPLHVCQUF1QixTQUFTLG9CQUFvQixHQUFHO0FBQ3hFLGFBQU8sbUJBQW1CLEdBQUcsVUFBVTtBQUFBLElBQ3pDO0FBQUE7QUFBQTs7O0FDWEE7QUFBQSx3R0FBQUMsVUFBQTtBQUFBO0FBRUEsSUFBQUEsU0FBUSxJQUFJLE9BQU87QUFBQTtBQUFBOzs7QUNGbkI7QUFBQSxpRkFBQUMsVUFBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxhQUFhO0FBQ2pCLFFBQUksY0FBYztBQUNsQixRQUFJLDRCQUE0QjtBQUNoQyxRQUFJLDhCQUE4QjtBQUNsQyxRQUFJLFdBQVc7QUFFZixRQUFJLFNBQVMsWUFBWSxDQUFDLEVBQUUsTUFBTTtBQUdsQyxJQUFBQSxRQUFPLFVBQVUsV0FBVyxXQUFXLFNBQVMsS0FBSyxTQUFTLFFBQVEsSUFBSTtBQUN4RSxVQUFJLE9BQU8sMEJBQTBCLEVBQUUsU0FBUyxFQUFFLENBQUM7QUFDbkQsVUFBSSx3QkFBd0IsNEJBQTRCO0FBQ3hELGFBQU8sd0JBQXdCLE9BQU8sTUFBTSxzQkFBc0IsRUFBRSxDQUFDLElBQUk7QUFBQSxJQUMzRTtBQUFBO0FBQUE7OztBQ2RBO0FBQUEsb0dBQUFDLFVBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksU0FBUztBQUNiLFFBQUksVUFBVTtBQUNkLFFBQUksaUNBQWlDO0FBQ3JDLFFBQUksdUJBQXVCO0FBRTNCLElBQUFBLFFBQU8sVUFBVSxTQUFVLFFBQVEsUUFBUSxZQUFZO0FBQ3JELFVBQUksT0FBTyxRQUFRLE1BQU07QUFDekIsVUFBSSxpQkFBaUIscUJBQXFCO0FBQzFDLFVBQUksMkJBQTJCLCtCQUErQjtBQUM5RCxlQUFTLElBQUksR0FBRyxJQUFJLEtBQUssUUFBUSxLQUFLO0FBQ3BDLFlBQUksTUFBTSxLQUFLLENBQUM7QUFDaEIsWUFBSSxDQUFDLE9BQU8sUUFBUSxHQUFHLEtBQUssRUFBRSxjQUFjLE9BQU8sWUFBWSxHQUFHLElBQUk7QUFDcEUseUJBQWUsUUFBUSxLQUFLLHlCQUF5QixRQUFRLEdBQUcsQ0FBQztBQUFBLFFBQ25FO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQTtBQUFBOzs7QUNoQkE7QUFBQSxrRkFBQUMsVUFBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxRQUFRO0FBQ1osUUFBSSxhQUFhO0FBRWpCLFFBQUksY0FBYztBQUVsQixRQUFJLFdBQVcsU0FBVSxTQUFTLFdBQVc7QUFDM0MsVUFBSSxRQUFRLEtBQUssVUFBVSxPQUFPLENBQUM7QUFDbkMsYUFBTyxVQUFVLFdBQVcsT0FDeEIsVUFBVSxTQUFTLFFBQ25CLFdBQVcsU0FBUyxJQUFJLE1BQU0sU0FBUyxJQUN2QyxDQUFDLENBQUM7QUFBQSxJQUNSO0FBRUEsUUFBSSxZQUFZLFNBQVMsWUFBWSxTQUFVLFFBQVE7QUFDckQsYUFBTyxPQUFPLE1BQU0sRUFBRSxRQUFRLGFBQWEsR0FBRyxFQUFFLFlBQVk7QUFBQSxJQUM5RDtBQUVBLFFBQUksT0FBTyxTQUFTLE9BQU8sQ0FBQztBQUM1QixRQUFJLFNBQVMsU0FBUyxTQUFTO0FBQy9CLFFBQUksV0FBVyxTQUFTLFdBQVc7QUFFbkMsSUFBQUEsUUFBTyxVQUFVO0FBQUE7QUFBQTs7O0FDdEJqQjtBQUFBLCtFQUFBQyxVQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJQyxVQUFTO0FBQ2IsUUFBSSwyQkFBMkIsNkNBQTJEO0FBQzFGLFFBQUksOEJBQThCO0FBQ2xDLFFBQUksZ0JBQWdCO0FBQ3BCLFFBQUksdUJBQXVCO0FBQzNCLFFBQUksNEJBQTRCO0FBQ2hDLFFBQUksV0FBVztBQWlCZixJQUFBRCxRQUFPLFVBQVUsU0FBVSxTQUFTLFFBQVE7QUFDMUMsVUFBSSxTQUFTLFFBQVE7QUFDckIsVUFBSSxTQUFTLFFBQVE7QUFDckIsVUFBSSxTQUFTLFFBQVE7QUFDckIsVUFBSSxRQUFRLFFBQVEsS0FBSyxnQkFBZ0IsZ0JBQWdCO0FBQ3pELFVBQUksUUFBUTtBQUNWLGlCQUFTQztBQUFBLE1BQ1gsV0FBVyxRQUFRO0FBQ2pCLGlCQUFTQSxRQUFPLE1BQU0sS0FBSyxxQkFBcUIsUUFBUSxDQUFDLENBQUM7QUFBQSxNQUM1RCxPQUFPO0FBQ0wsaUJBQVNBLFFBQU8sTUFBTSxLQUFLQSxRQUFPLE1BQU0sRUFBRTtBQUFBLE1BQzVDO0FBQ0EsVUFBSTtBQUFRLGFBQUssT0FBTyxRQUFRO0FBQzlCLDJCQUFpQixPQUFPLEdBQUc7QUFDM0IsY0FBSSxRQUFRLGdCQUFnQjtBQUMxQix5QkFBYSx5QkFBeUIsUUFBUSxHQUFHO0FBQ2pELDZCQUFpQixjQUFjLFdBQVc7QUFBQSxVQUM1QztBQUFPLDZCQUFpQixPQUFPLEdBQUc7QUFDbEMsbUJBQVMsU0FBUyxTQUFTLE1BQU0sVUFBVSxTQUFTLE1BQU0sT0FBTyxLQUFLLFFBQVEsTUFBTTtBQUVwRixjQUFJLENBQUMsVUFBVSxtQkFBbUIsUUFBVztBQUMzQyxnQkFBSSxPQUFPLGtCQUFrQixPQUFPO0FBQWdCO0FBQ3BELHNDQUEwQixnQkFBZ0IsY0FBYztBQUFBLFVBQzFEO0FBRUEsY0FBSSxRQUFRLFFBQVMsa0JBQWtCLGVBQWUsTUFBTztBQUMzRCx3Q0FBNEIsZ0JBQWdCLFFBQVEsSUFBSTtBQUFBLFVBQzFEO0FBQ0Esd0JBQWMsUUFBUSxLQUFLLGdCQUFnQixPQUFPO0FBQUEsUUFDcEQ7QUFBQSxJQUNGO0FBQUE7QUFBQTs7O0FDdERBO0FBQUEsaUZBQUFDLFVBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksVUFBVTtBQUtkLElBQUFBLFFBQU8sVUFBVSxNQUFNLFdBQVcsU0FBUyxRQUFRLFVBQVU7QUFDM0QsYUFBTyxRQUFRLFFBQVEsTUFBTTtBQUFBLElBQy9CO0FBQUE7QUFBQTs7O0FDUkE7QUFBQSx5RkFBQUMsVUFBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxjQUFjO0FBQ2xCLFFBQUksVUFBVTtBQUVkLFFBQUksYUFBYTtBQUVqQixRQUFJLDJCQUEyQixPQUFPO0FBR3RDLFFBQUksb0NBQW9DLGVBQWUsQ0FBQyxXQUFZO0FBRWxFLFVBQUksU0FBUztBQUFXLGVBQU87QUFDL0IsVUFBSTtBQUVGLGVBQU8sZUFBZSxDQUFDLEdBQUcsVUFBVSxFQUFFLFVBQVUsTUFBTSxDQUFDLEVBQUUsU0FBUztBQUFBLE1BQ3BFLFNBQVMsT0FBTztBQUNkLGVBQU8saUJBQWlCO0FBQUEsTUFDMUI7QUFBQSxJQUNGLEVBQUU7QUFFRixJQUFBQSxRQUFPLFVBQVUsb0NBQW9DLFNBQVUsR0FBRyxRQUFRO0FBQ3hFLFVBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsR0FBRyxRQUFRLEVBQUUsVUFBVTtBQUNqRSxjQUFNLElBQUksV0FBVyw4QkFBOEI7QUFBQSxNQUNyRDtBQUFFLGFBQU8sRUFBRSxTQUFTO0FBQUEsSUFDdEIsSUFBSSxTQUFVLEdBQUcsUUFBUTtBQUN2QixhQUFPLEVBQUUsU0FBUztBQUFBLElBQ3BCO0FBQUE7QUFBQTs7O0FDMUJBO0FBQUEscUdBQUFDLFVBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksYUFBYTtBQUNqQixRQUFJLG1CQUFtQjtBQUV2QixJQUFBQSxRQUFPLFVBQVUsU0FBVSxJQUFJO0FBQzdCLFVBQUksS0FBSztBQUFrQixjQUFNLFdBQVcsZ0NBQWdDO0FBQzVFLGFBQU87QUFBQSxJQUNUO0FBQUE7QUFBQTs7O0FDUEE7QUFBQTtBQUFBO0FBQ0EsUUFBSSxJQUFJO0FBQ1IsUUFBSSxXQUFXO0FBQ2YsUUFBSSxvQkFBb0I7QUFDeEIsUUFBSSxpQkFBaUI7QUFDckIsUUFBSSwyQkFBMkI7QUFDL0IsUUFBSSxRQUFRO0FBRVosUUFBSSxzQkFBc0IsTUFBTSxXQUFZO0FBQzFDLGFBQU8sQ0FBQyxFQUFFLEtBQUssS0FBSyxFQUFFLFFBQVEsV0FBWSxHQUFHLENBQUMsTUFBTTtBQUFBLElBQ3RELENBQUM7QUFJRCxRQUFJLGlDQUFpQyxXQUFZO0FBQy9DLFVBQUk7QUFFRixlQUFPLGVBQWUsQ0FBQyxHQUFHLFVBQVUsRUFBRSxVQUFVLE1BQU0sQ0FBQyxFQUFFLEtBQUs7QUFBQSxNQUNoRSxTQUFTLE9BQU87QUFDZCxlQUFPLGlCQUFpQjtBQUFBLE1BQzFCO0FBQUEsSUFDRjtBQUVBLFFBQUksU0FBUyx1QkFBdUIsQ0FBQywrQkFBK0I7QUFJcEUsTUFBRSxFQUFFLFFBQVEsU0FBUyxPQUFPLE1BQU0sT0FBTyxHQUFHLFFBQVEsT0FBTyxHQUFHO0FBQUE7QUFBQSxNQUU1RCxNQUFNLFNBQVMsS0FBSyxNQUFNO0FBQ3hCLFlBQUksSUFBSSxTQUFTLElBQUk7QUFDckIsWUFBSSxNQUFNLGtCQUFrQixDQUFDO0FBQzdCLFlBQUksV0FBVyxVQUFVO0FBQ3pCLGlDQUF5QixNQUFNLFFBQVE7QUFDdkMsaUJBQVMsSUFBSSxHQUFHLElBQUksVUFBVSxLQUFLO0FBQ2pDLFlBQUUsR0FBRyxJQUFJLFVBQVUsQ0FBQztBQUNwQjtBQUFBLFFBQ0Y7QUFDQSx1QkFBZSxHQUFHLEdBQUc7QUFDckIsZUFBTztBQUFBLE1BQ1Q7QUFBQSxJQUNGLENBQUM7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDYyxhQUFTQyxVQUFVQyxNQUFNO0FBQ3RDLFVBQUlBLFFBQVEsTUFBTTtBQUNoQixlQUFPQztNQUNSO0FBRUQsVUFBSUQsS0FBS0UsU0FBTCxNQUFvQixtQkFBbUI7QUFDekMsWUFBTUMsZ0JBQWdCSCxLQUFLRztBQUMzQixlQUFPQSxnQkFBZ0JBLGNBQWNDLGVBQWVILFNBQVNBO01BQzlEO0FBRUQsYUFBT0Q7SUFDUjtBQ1ZELGFBQVNLLFVBQVVMLE1BQU07QUFDdkIsVUFBTU0sYUFBYVAsVUFBVUMsSUFBRCxFQUFPTztBQUNuQyxhQUFPUCxnQkFBZ0JNLGNBQWNOLGdCQUFnQk87SUFDdEQ7QUFJRCxhQUFTQyxjQUFjUixNQUFNO0FBQzNCLFVBQU1NLGFBQWFQLFVBQVVDLElBQUQsRUFBT1M7QUFDbkMsYUFBT1QsZ0JBQWdCTSxjQUFjTixnQkFBZ0JTO0lBQ3REO0FBSUQsYUFBU0MsYUFBYVYsTUFBTTtBQUUxQixVQUFJLE9BQU9XLGVBQWUsYUFBYTtBQUNyQyxlQUFPO01BQ1I7QUFDRCxVQUFNTCxhQUFhUCxVQUFVQyxJQUFELEVBQU9XO0FBQ25DLGFBQU9YLGdCQUFnQk0sY0FBY04sZ0JBQWdCVztJQUN0RDtBQ3pCTSxRQUFNQyxNQUFNQyxLQUFLRDtBQUNqQixRQUFNRSxNQUFNRCxLQUFLQztBQUNqQixRQUFNQyxRQUFRRixLQUFLRTtBQ01YLGFBQVNDLGNBQXNCO0FBQzVDLFVBQU1DLFNBQVVDLFVBQXNCQztBQUV0QyxVQUFJRixVQUFNLFFBQU5BLE9BQVFHLFVBQVVDLE1BQU1DLFFBQVFMLE9BQU9HLE1BQXJCLEdBQThCO0FBQ2xELGVBQU9ILE9BQU9HLE9BQ1hHLElBQUksU0FBQ0MsTUFBRDtBQUFBLGlCQUFhQSxLQUFLQyxRQUFsQixNQUEyQkQsS0FBS0U7UUFBaEMsQ0FEQSxFQUVKQyxLQUFLLEdBRkQ7TUFHUjtBQUVELGFBQU9ULFVBQVVVO0lBQ2xCO0FDaEJjLGFBQVNDLG1CQUFtQjtBQUN6QyxhQUFPLENBQUMsaUNBQWlDQyxLQUFLZCxZQUFXLENBQWpEO0lBQ1Q7QUNFYyxhQUFTZSxzQkFDdEJDLFNBQ0FDLGNBQ0FDLGlCQUNrQjtBQUFBLFVBRmxCRCxpQkFFa0IsUUFBQTtBQUZsQkEsdUJBQXdCO01BRU47QUFBQSxVQURsQkMsb0JBQ2tCLFFBQUE7QUFEbEJBLDBCQUEyQjtNQUNUO0FBQ2xCLFVBQU1DLGFBQWFILFFBQVFELHNCQUFSO0FBQ25CLFVBQUlLLFNBQVM7QUFDYixVQUFJQyxTQUFTO0FBRWIsVUFBSUosZ0JBQWdCekIsY0FBY3dCLE9BQUQsR0FBVztBQUMxQ0ksaUJBQ0dKLFFBQXNCTSxjQUFjLElBQ2pDdkIsTUFBTW9CLFdBQVdJLEtBQVosSUFBc0JQLFFBQXNCTSxlQUFlLElBQ2hFO0FBQ05ELGlCQUNHTCxRQUFzQlEsZUFBZSxJQUNsQ3pCLE1BQU1vQixXQUFXTSxNQUFaLElBQXVCVCxRQUFzQlEsZ0JBQWdCLElBQ2xFO01BQ1A7QUFkaUIsVUFBQUUsT0FnQlNyQyxVQUFVMkIsT0FBRCxJQUFZakMsVUFBVWlDLE9BQUQsSUFBWS9CLFFBQTdEMEMsaUJBaEJVRCxLQWdCVkM7QUFDUixVQUFNQyxtQkFBbUIsQ0FBQ2YsaUJBQWdCLEtBQU1LO0FBRWhELFVBQU1XLEtBQ0hWLFdBQVdXLFFBQ1RGLG9CQUFvQkQsaUJBQWlCQSxlQUFlSSxhQUFhLE1BQ3BFWDtBQUNGLFVBQU1ZLEtBQ0hiLFdBQVdjLE9BQ1RMLG9CQUFvQkQsaUJBQWlCQSxlQUFlTyxZQUFZLE1BQ25FYjtBQUNGLFVBQU1FLFFBQVFKLFdBQVdJLFFBQVFIO0FBQ2pDLFVBQU1LLFNBQVNOLFdBQVdNLFNBQVNKO0FBRW5DLGFBQU87UUFDTEU7UUFDQUU7UUFDQVEsS0FBS0Q7UUFDTEcsT0FBT04sSUFBSU47UUFDWGEsUUFBUUosSUFBSVA7UUFDWkssTUFBTUQ7UUFDTkE7UUFDQUc7TUFSSztJQVVSO0FDL0NjLGFBQVNLLGdCQUFnQnJELE1BQXFCO0FBQzNELFVBQU1zRCxNQUFNdkQsVUFBVUMsSUFBRDtBQUNyQixVQUFNdUQsYUFBYUQsSUFBSUU7QUFDdkIsVUFBTUMsWUFBWUgsSUFBSUk7QUFFdEIsYUFBTztRQUNMSDtRQUNBRTtNQUZLO0lBSVI7QUNYYyxhQUFTRSxxQkFBcUIzQixTQUFzQjtBQUNqRSxhQUFPO1FBQ0x1QixZQUFZdkIsUUFBUXVCO1FBQ3BCRSxXQUFXekIsUUFBUXlCO01BRmQ7SUFJUjtBQ0FjLGFBQVNHLGNBQWM1RCxNQUFxQjtBQUN6RCxVQUFJQSxTQUFTRCxVQUFVQyxJQUFELEtBQVUsQ0FBQ1EsY0FBY1IsSUFBRCxHQUFRO0FBQ3BELGVBQU9xRCxnQkFBZ0JyRCxJQUFEO01BQ3ZCLE9BQU07QUFDTCxlQUFPMkQscUJBQXFCM0QsSUFBRDtNQUM1QjtJQUNGO0FDVmMsYUFBUzZELFlBQVk3QixTQUFrQztBQUNwRSxhQUFPQSxXQUFXQSxRQUFROEIsWUFBWSxJQUFJQyxZQUF6QixJQUF5QztJQUMzRDtBQ0RjLGFBQVNDLG1CQUN0QmhDLFNBQ2E7QUFFYixlQUNHM0IsVUFBVTJCLE9BQUQsSUFDTkEsUUFBUTdCOztRQUVSNkIsUUFBUWlDO1lBQWFoRSxPQUFPZ0UsVUFDaENDO0lBQ0g7QUNUYyxhQUFTQyxvQkFBb0JuQyxTQUEwQjtBQVFwRSxhQUNFRCxzQkFBc0JpQyxtQkFBbUJoQyxPQUFELENBQW5CLEVBQThCYyxPQUNuRE8sZ0JBQWdCckIsT0FBRCxFQUFVdUI7SUFFNUI7QUNkYyxhQUFTYSxpQkFDdEJwQyxTQUNxQjtBQUNyQixhQUFPakMsVUFBVWlDLE9BQUQsRUFBVW9DLGlCQUFpQnBDLE9BQXBDO0lBQ1I7QUNKYyxhQUFTcUMsZUFBZXJDLFNBQStCO0FBQUEsVUFBQXNDLG9CQUV6QkYsaUJBQWlCcEMsT0FBRCxHQUFuRHVDLFdBRjRERCxrQkFFNURDLFVBQVVDLFlBRmtERixrQkFFbERFLFdBQVdDLFlBRnVDSCxrQkFFdkNHO0FBQzdCLGFBQU8sNkJBQTZCM0MsS0FBS3lDLFdBQVdFLFlBQVlELFNBQXpEO0lBQ1I7QUNJRCxhQUFTRSxnQkFBZ0IxQyxTQUFzQjtBQUM3QyxVQUFNMkMsT0FBTzNDLFFBQVFELHNCQUFSO0FBQ2IsVUFBTUssU0FBU3JCLE1BQU00RCxLQUFLcEMsS0FBTixJQUFlUCxRQUFRTSxlQUFlO0FBQzFELFVBQU1ELFNBQVN0QixNQUFNNEQsS0FBS2xDLE1BQU4sSUFBZ0JULFFBQVFRLGdCQUFnQjtBQUU1RCxhQUFPSixXQUFXLEtBQUtDLFdBQVc7SUFDbkM7QUFJYyxhQUFTdUMsaUJBQ3RCQyx5QkFDQUMsY0FDQUMsU0FDTTtBQUFBLFVBRE5BLFlBQ00sUUFBQTtBQUROQSxrQkFBbUI7TUFDYjtBQUNOLFVBQU1DLDBCQUEwQnhFLGNBQWNzRSxZQUFEO0FBQzdDLFVBQU1HLHVCQUNKekUsY0FBY3NFLFlBQUQsS0FBa0JKLGdCQUFnQkksWUFBRDtBQUNoRCxVQUFNWixrQkFBa0JGLG1CQUFtQmMsWUFBRDtBQUMxQyxVQUFNSCxPQUFPNUMsc0JBQ1g4Qyx5QkFDQUksc0JBQ0FGLE9BSGdDO0FBTWxDLFVBQUlHLFNBQVM7UUFBRTNCLFlBQVk7UUFBR0UsV0FBVztNQUE1QjtBQUNiLFVBQUkwQixVQUFVO1FBQUV0QyxHQUFHO1FBQUdHLEdBQUc7TUFBWDtBQUVkLFVBQUlnQywyQkFBNEIsQ0FBQ0EsMkJBQTJCLENBQUNELFNBQVU7QUFDckUsWUFDRWxCLFlBQVlpQixZQUFELE1BQW1CO1FBRTlCVCxlQUFlSCxlQUFELEdBQ2Q7QUFDQWdCLG1CQUFTdEIsY0FBY2tCLFlBQUQ7UUFDdkI7QUFFRCxZQUFJdEUsY0FBY3NFLFlBQUQsR0FBZ0I7QUFDL0JLLG9CQUFVcEQsc0JBQXNCK0MsY0FBYyxJQUFmO0FBQy9CSyxrQkFBUXRDLEtBQUtpQyxhQUFhTTtBQUMxQkQsa0JBQVFuQyxLQUFLOEIsYUFBYU87UUFDM0IsV0FBVW5CLGlCQUFpQjtBQUMxQmlCLGtCQUFRdEMsSUFBSXNCLG9CQUFvQkQsZUFBRDtRQUNoQztNQUNGO0FBRUQsYUFBTztRQUNMckIsR0FBRzhCLEtBQUs3QixPQUFPb0MsT0FBTzNCLGFBQWE0QixRQUFRdEM7UUFDM0NHLEdBQUcyQixLQUFLMUIsTUFBTWlDLE9BQU96QixZQUFZMEIsUUFBUW5DO1FBQ3pDVCxPQUFPb0MsS0FBS3BDO1FBQ1pFLFFBQVFrQyxLQUFLbEM7TUFKUjtJQU1SO0FDekRjLGFBQVM2QyxjQUFjdEQsU0FBNEI7QUFDaEUsVUFBTUcsYUFBYUosc0JBQXNCQyxPQUFEO0FBSXhDLFVBQUlPLFFBQVFQLFFBQVFNO0FBQ3BCLFVBQUlHLFNBQVNULFFBQVFRO0FBRXJCLFVBQUkzQixLQUFLMEUsSUFBSXBELFdBQVdJLFFBQVFBLEtBQTVCLEtBQXNDLEdBQUc7QUFDM0NBLGdCQUFRSixXQUFXSTtNQUNwQjtBQUVELFVBQUkxQixLQUFLMEUsSUFBSXBELFdBQVdNLFNBQVNBLE1BQTdCLEtBQXdDLEdBQUc7QUFDN0NBLGlCQUFTTixXQUFXTTtNQUNyQjtBQUVELGFBQU87UUFDTEksR0FBR2IsUUFBUWU7UUFDWEMsR0FBR2hCLFFBQVFrQjtRQUNYWDtRQUNBRTtNQUpLO0lBTVI7QUN2QmMsYUFBUytDLGNBQWN4RCxTQUFrQztBQUN0RSxVQUFJNkIsWUFBWTdCLE9BQUQsTUFBYyxRQUFRO0FBQ25DLGVBQU9BO01BQ1I7QUFFRDs7OztRQUlFQSxRQUFReUQ7UUFDUnpELFFBQVEwRDtTQUNQaEYsYUFBYXNCLE9BQUQsSUFBWUEsUUFBUTJELE9BQU87O1FBRXhDM0IsbUJBQW1CaEMsT0FBRDs7SUFFckI7QUNkYyxhQUFTNEQsZ0JBQWdCNUYsTUFBeUI7QUFDL0QsVUFBSSxDQUFDLFFBQVEsUUFBUSxXQUFqQixFQUE4QjZGLFFBQVFoQyxZQUFZN0QsSUFBRCxDQUFqRCxLQUE0RCxHQUFHO0FBRWpFLGVBQU9BLEtBQUtHLGNBQWMyRjtNQUMzQjtBQUVELFVBQUl0RixjQUFjUixJQUFELEtBQVVxRSxlQUFlckUsSUFBRCxHQUFRO0FBQy9DLGVBQU9BO01BQ1I7QUFFRCxhQUFPNEYsZ0JBQWdCSixjQUFjeEYsSUFBRCxDQUFkO0lBQ3ZCO0FDSmMsYUFBUytGLGtCQUN0Qi9ELFNBQ0FnRSxNQUMwQztBQUFBLFVBQUFDO0FBQUEsVUFEMUNELFNBQzBDLFFBQUE7QUFEMUNBLGVBQWdDLENBQUE7TUFDVTtBQUMxQyxVQUFNRSxlQUFlTixnQkFBZ0I1RCxPQUFEO0FBQ3BDLFVBQU1tRSxTQUFTRCxtQkFBWUQsd0JBQUtqRSxRQUFRN0Isa0JBQWIsT0FBQSxTQUFLOEYsc0JBQXVCSDtBQUN2RCxVQUFNeEMsTUFBTXZELFVBQVVtRyxZQUFEO0FBQ3JCLFVBQU1FLFNBQVNELFNBQ1gsQ0FBQzdDLEdBQUQsRUFBTStDLE9BQ0ovQyxJQUFJWCxrQkFBa0IsQ0FBQSxHQUN0QjBCLGVBQWU2QixZQUFELElBQWlCQSxlQUFlLENBQUEsQ0FGaEQsSUFJQUE7QUFDSixVQUFNSSxjQUFjTixLQUFLSyxPQUFPRCxNQUFaO0FBRXBCLGFBQU9ELFNBQ0hHOztRQUVBQSxZQUFZRCxPQUFPTixrQkFBa0JQLGNBQWNZLE1BQUQsQ0FBZCxDQUFwQzs7SUFDTDtBQzdCYyxhQUFTRyxlQUFldkUsU0FBMkI7QUFDaEUsYUFBTyxDQUFDLFNBQVMsTUFBTSxJQUFoQixFQUFzQjZELFFBQVFoQyxZQUFZN0IsT0FBRCxDQUF6QyxLQUF1RDtJQUMvRDtBQ0lELGFBQVN3RSxvQkFBb0J4RSxTQUE0QjtBQUN2RCxVQUNFLENBQUN4QixjQUFjd0IsT0FBRDtNQUVkb0MsaUJBQWlCcEMsT0FBRCxFQUFVeUUsYUFBYSxTQUN2QztBQUNBLGVBQU87TUFDUjtBQUVELGFBQU96RSxRQUFROEM7SUFDaEI7QUFJRCxhQUFTNEIsbUJBQW1CMUUsU0FBa0I7QUFDNUMsVUFBTTJFLFlBQVksV0FBVzdFLEtBQUtkLFlBQVcsQ0FBM0I7QUFDbEIsVUFBTTRGLE9BQU8sV0FBVzlFLEtBQUtkLFlBQVcsQ0FBM0I7QUFFYixVQUFJNEYsUUFBUXBHLGNBQWN3QixPQUFELEdBQVc7QUFFbEMsWUFBTTZFLGFBQWF6QyxpQkFBaUJwQyxPQUFEO0FBQ25DLFlBQUk2RSxXQUFXSixhQUFhLFNBQVM7QUFDbkMsaUJBQU87UUFDUjtNQUNGO0FBRUQsVUFBSUssY0FBY3RCLGNBQWN4RCxPQUFEO0FBRS9CLFVBQUl0QixhQUFhb0csV0FBRCxHQUFlO0FBQzdCQSxzQkFBY0EsWUFBWW5CO01BQzNCO0FBRUQsYUFDRW5GLGNBQWNzRyxXQUFELEtBQ2IsQ0FBQyxRQUFRLE1BQVQsRUFBaUJqQixRQUFRaEMsWUFBWWlELFdBQUQsQ0FBcEMsSUFBcUQsR0FDckQ7QUFDQSxZQUFNQyxNQUFNM0MsaUJBQWlCMEMsV0FBRDtBQUs1QixZQUNFQyxJQUFJQyxjQUFjLFVBQ2xCRCxJQUFJRSxnQkFBZ0IsVUFDcEJGLElBQUlHLFlBQVksV0FDaEIsQ0FBQyxhQUFhLGFBQWQsRUFBNkJyQixRQUFRa0IsSUFBSUksVUFBekMsTUFBeUQsTUFDeERSLGFBQWFJLElBQUlJLGVBQWUsWUFDaENSLGFBQWFJLElBQUlLLFVBQVVMLElBQUlLLFdBQVcsUUFDM0M7QUFDQSxpQkFBT047UUFDUixPQUFNO0FBQ0xBLHdCQUFjQSxZQUFZcEI7UUFDM0I7TUFDRjtBQUVELGFBQU87SUFDUjtBQUljLGFBQVMyQixnQkFBZ0JyRixTQUFrQjtBQUN4RCxVQUFNc0YsVUFBU3ZILFVBQVVpQyxPQUFEO0FBRXhCLFVBQUk4QyxlQUFlMEIsb0JBQW9CeEUsT0FBRDtBQUV0QyxhQUNFOEMsZ0JBQ0F5QixlQUFlekIsWUFBRCxLQUNkVixpQkFBaUJVLFlBQUQsRUFBZTJCLGFBQWEsVUFDNUM7QUFDQTNCLHVCQUFlMEIsb0JBQW9CMUIsWUFBRDtNQUNuQztBQUVELFVBQ0VBLGlCQUNDakIsWUFBWWlCLFlBQUQsTUFBbUIsVUFDNUJqQixZQUFZaUIsWUFBRCxNQUFtQixVQUM3QlYsaUJBQWlCVSxZQUFELEVBQWUyQixhQUFhLFdBQ2hEO0FBQ0EsZUFBT2E7TUFDUjtBQUVELGFBQU94QyxnQkFBZ0I0QixtQkFBbUIxRSxPQUFELEtBQWFzRjtJQUN2RDtBQzNGTSxRQUFNckUsTUFBYTtBQUNuQixRQUFNRyxTQUFtQjtBQUN6QixRQUFNRCxRQUFpQjtBQUN2QixRQUFNTCxPQUFlO0FBQ3JCLFFBQU15RSxPQUFlO0FBTXJCLFFBQU1DLGlCQUF1QyxDQUFDdkUsS0FBS0csUUFBUUQsT0FBT0wsSUFBckI7QUFFN0MsUUFBTTJFLFFBQWlCO0FBQ3ZCLFFBQU1DLE1BQWE7QUFHbkIsUUFBTUMsa0JBQXFDO0FBQzNDLFFBQU1DLFdBQXVCO0FBSTdCLFFBQU1DLFNBQW1CO0FBQ3pCLFFBQU1DLFlBQXlCO0FBZ0IvQixRQUFNQyxzQkFBaURQLCtCQUFlUSxPQUMzRSxTQUFDQyxLQUFnQ0MsV0FBakM7QUFBQSxhQUNFRCxJQUFJNUIsT0FBTyxDQUFLNkIsWUFBTCxNQUFrQlQsT0FBbUJTLFlBQXJDLE1BQWtEUixHQUFsRCxDQUFYO0lBREYsR0FFQSxDQUFBLENBSDREO0FBS3ZELFFBQU1TLGFBQStCLGlCQUFBLEVBQUE5QixPQUFJbUIsZ0JBQUosQ0FBb0JELElBQXBCLENBQUEsRUFBMEJTLE9BQ3BFLFNBQ0VDLEtBQ0FDLFdBRkY7QUFBQSxhQUlFRCxJQUFJNUIsT0FBTyxDQUNUNkIsV0FDSUEsWUFGSyxNQUVRVCxPQUNiUyxZQUhLLE1BR1FSLEdBSFIsQ0FBWDtJQUpGLEdBU0EsQ0FBQSxDQVYwQztBQWNyQyxRQUFNVSxhQUEyQjtBQUNqQyxRQUFNQyxPQUFlO0FBQ3JCLFFBQU1DLFlBQXlCO0FBRS9CLFFBQU1DLGFBQTJCO0FBQ2pDLFFBQU1DLE9BQWU7QUFDckIsUUFBTUMsWUFBeUI7QUFFL0IsUUFBTUMsY0FBNkI7QUFDbkMsUUFBTUMsUUFBaUI7QUFDdkIsUUFBTUMsYUFBMkI7QUFDakMsUUFBTUMsaUJBQXdDLENBQ25EVCxZQUNBQyxNQUNBQyxXQUNBQyxZQUNBQyxNQUNBQyxXQUNBQyxhQUNBQyxPQUNBQyxVQVRtRDtBQ2hFckQsYUFBU0UsTUFBTUMsV0FBVztBQUN4QixVQUFNeEgsTUFBTSxvQkFBSXlILElBQUo7QUFDWixVQUFNQyxVQUFVLG9CQUFJQyxJQUFKO0FBQ2hCLFVBQU1DLFNBQVMsQ0FBQTtBQUVmSixnQkFBVUssUUFBUSxTQUFBQyxVQUFZO0FBQzVCOUgsWUFBSStILElBQUlELFNBQVNFLE1BQU1GLFFBQXZCO01BQ0QsQ0FGRDtBQUtBLGVBQVNHLEtBQUtILFVBQThCO0FBQzFDSixnQkFBUVEsSUFBSUosU0FBU0UsSUFBckI7QUFFQSxZQUFNRyxXQUFRLENBQUEsRUFBQXJELE9BQ1JnRCxTQUFTSyxZQUFZLENBQUEsR0FDckJMLFNBQVNNLG9CQUFvQixDQUFBLENBRnJCO0FBS2RELGlCQUFTTixRQUFRLFNBQUFRLEtBQU87QUFDdEIsY0FBSSxDQUFDWCxRQUFRWSxJQUFJRCxHQUFaLEdBQWtCO0FBQ3JCLGdCQUFNRSxjQUFjdkksSUFBSXdJLElBQUlILEdBQVI7QUFFcEIsZ0JBQUlFLGFBQWE7QUFDZk4sbUJBQUtNLFdBQUQ7WUFDTDtVQUNGO1FBQ0YsQ0FSRDtBQVVBWCxlQUFPYSxLQUFLWCxRQUFaO01BQ0Q7QUFFRE4sZ0JBQVVLLFFBQVEsU0FBQUMsVUFBWTtBQUM1QixZQUFJLENBQUNKLFFBQVFZLElBQUlSLFNBQVNFLElBQXJCLEdBQTRCO0FBRS9CQyxlQUFLSCxRQUFEO1FBQ0w7TUFDRixDQUxEO0FBT0EsYUFBT0Y7SUFDUjtBQUVjLGFBQVNjLGVBQ3RCbEIsV0FDMkI7QUFFM0IsVUFBTW1CLG1CQUFtQnBCLE1BQU1DLFNBQUQ7QUFHOUIsYUFBT0YsZUFBZWIsT0FBTyxTQUFDQyxLQUFLa0MsT0FBVTtBQUMzQyxlQUFPbEMsSUFBSTVCLE9BQ1Q2RCxpQkFBaUI5QyxPQUFPLFNBQUFpQyxVQUFRO0FBQUEsaUJBQUlBLFNBQVNjLFVBQVVBO1FBQXZCLENBQWhDLENBREs7TUFHUixHQUFFLENBQUEsQ0FKSTtJQUtSO0FDeERjLGFBQVNDLFNBQVlDLElBQWdDO0FBQ2xFLFVBQUlDO0FBQ0osYUFBTyxXQUFNO0FBQ1gsWUFBSSxDQUFDQSxTQUFTO0FBQ1pBLG9CQUFVLElBQUlDLFFBQVcsU0FBQUMsU0FBVztBQUNsQ0Qsb0JBQVFDLFFBQVIsRUFBa0JDLEtBQUssV0FBTTtBQUMzQkgsd0JBQVU7QUFDVkUsc0JBQVFILEdBQUUsQ0FBSDtZQUNSLENBSEQ7VUFJRCxDQUxTO1FBTVg7QUFFRCxlQUFPQztNQUNSO0lBQ0Y7QUNiYyxhQUFTSSxZQUN0QjNCLFdBQ21DO0FBQ25DLFVBQU00QixTQUFTNUIsVUFBVWYsT0FBTyxTQUFDNEMsU0FBUUMsU0FBWTtBQUNuRCxZQUFNQyxXQUFXRixRQUFPQyxRQUFRdEIsSUFBVDtBQUN2QnFCLGdCQUFPQyxRQUFRdEIsSUFBVCxJQUFpQnVCLFdBQVFDLE9BQUFDLE9BQUEsQ0FBQSxHQUV0QkYsVUFDQUQsU0FIc0I7VUFJekJJLFNBQU9GLE9BQUFDLE9BQUEsQ0FBQSxHQUFPRixTQUFTRyxTQUFZSixRQUFRSSxPQUFwQztVQUNQQyxNQUFJSCxPQUFBQyxPQUFBLENBQUEsR0FBT0YsU0FBU0ksTUFBU0wsUUFBUUssSUFBakM7UUFMcUIsQ0FBQSxJQU8zQkw7QUFDSixlQUFPRDtNQUNSLEdBQUUsQ0FBQSxDQVhZO0FBY2YsYUFBT0csT0FBT0ksS0FBS1IsTUFBWixFQUFvQnBKLElBQUksU0FBQTZKLEtBQUc7QUFBQSxlQUFJVCxPQUFPUyxHQUFEO01BQVYsQ0FBM0I7SUFDUjtBQ2RjLGFBQVNDLGdCQUN0QnJKLFNBQ0FzSixVQUNBO0FBQ0EsVUFBTWhJLE1BQU12RCxVQUFVaUMsT0FBRDtBQUNyQixVQUFNdUosT0FBT3ZILG1CQUFtQmhDLE9BQUQ7QUFDL0IsVUFBTVcsaUJBQWlCVyxJQUFJWDtBQUUzQixVQUFJSixRQUFRZ0osS0FBS0M7QUFDakIsVUFBSS9JLFNBQVM4SSxLQUFLRTtBQUNsQixVQUFJNUksSUFBSTtBQUNSLFVBQUlHLElBQUk7QUFFUixVQUFJTCxnQkFBZ0I7QUFDbEJKLGdCQUFRSSxlQUFlSjtBQUN2QkUsaUJBQVNFLGVBQWVGO0FBRXhCLFlBQU1pSixpQkFBaUI3SixpQkFBZ0I7QUFFdkMsWUFBSTZKLGtCQUFtQixDQUFDQSxrQkFBa0JKLGFBQWEsU0FBVTtBQUMvRHpJLGNBQUlGLGVBQWVJO0FBQ25CQyxjQUFJTCxlQUFlTztRQUNwQjtNQUNGO0FBRUQsYUFBTztRQUNMWDtRQUNBRTtRQUNBSSxHQUFHQSxJQUFJc0Isb0JBQW9CbkMsT0FBRDtRQUMxQmdCO01BSks7SUFNUjtBQzVCYyxhQUFTMkksZ0JBQWdCM0osU0FBNEI7QUFBQSxVQUFBaUU7QUFDbEUsVUFBTXNGLE9BQU92SCxtQkFBbUJoQyxPQUFEO0FBQy9CLFVBQU00SixZQUFZdkksZ0JBQWdCckIsT0FBRDtBQUNqQyxVQUFNOEQsUUFBSUcsd0JBQUdqRSxRQUFRN0Isa0JBQVgsT0FBQSxTQUFHOEYsc0JBQXVCSDtBQUVwQyxVQUFNdkQsUUFBUTNCLElBQ1oySyxLQUFLTSxhQUNMTixLQUFLQyxhQUNMMUYsT0FBT0EsS0FBSytGLGNBQWMsR0FDMUIvRixPQUFPQSxLQUFLMEYsY0FBYyxDQUpYO0FBTWpCLFVBQU0vSSxTQUFTN0IsSUFDYjJLLEtBQUtPLGNBQ0xQLEtBQUtFLGNBQ0wzRixPQUFPQSxLQUFLZ0csZUFBZSxHQUMzQmhHLE9BQU9BLEtBQUsyRixlQUFlLENBSlg7QUFPbEIsVUFBSTVJLElBQUksQ0FBQytJLFVBQVVySSxhQUFhWSxvQkFBb0JuQyxPQUFEO0FBQ25ELFVBQU1nQixJQUFJLENBQUM0SSxVQUFVbkk7QUFFckIsVUFBSVcsaUJBQWlCMEIsUUFBUXlGLElBQVQsRUFBZVEsY0FBYyxPQUFPO0FBQ3REbEosYUFBS2pDLElBQUkySyxLQUFLQyxhQUFhMUYsT0FBT0EsS0FBSzBGLGNBQWMsQ0FBN0MsSUFBa0RqSjtNQUMzRDtBQUVELGFBQU87UUFBRUE7UUFBT0U7UUFBUUk7UUFBR0c7TUFBcEI7SUFDUjtBQ2pDYyxhQUFTZ0osU0FBU0MsUUFBaUJDLE9BQWdCO0FBQ2hFLFVBQU1DLFdBQVdELE1BQU1FLGVBQWVGLE1BQU1FLFlBQU47QUFHdEMsVUFBSUgsT0FBT0QsU0FBU0UsS0FBaEIsR0FBd0I7QUFDMUIsZUFBTztNQUNSLFdBRVFDLFlBQVl6TCxhQUFheUwsUUFBRCxHQUFZO0FBQzNDLFlBQUlFLE9BQU9IO0FBQ1gsV0FBRztBQUNELGNBQUlHLFFBQVFKLE9BQU9LLFdBQVdELElBQWxCLEdBQXlCO0FBQ25DLG1CQUFPO1VBQ1I7QUFFREEsaUJBQU9BLEtBQUszRyxjQUFjMkcsS0FBSzFHO1FBQ2hDLFNBQVEwRztNQUNWO0FBR0QsYUFBTztJQUNSO0FDckJjLGFBQVNFLGlCQUFpQjVILE1BQThCO0FBQ3JFLGFBQUFvRyxPQUFBQyxPQUFBLENBQUEsR0FDS3JHLE1BREw7UUFFRTdCLE1BQU02QixLQUFLOUI7UUFDWEksS0FBSzBCLEtBQUszQjtRQUNWRyxPQUFPd0IsS0FBSzlCLElBQUk4QixLQUFLcEM7UUFDckJhLFFBQVF1QixLQUFLM0IsSUFBSTJCLEtBQUtsQztNQUx4QixDQUFBO0lBT0Q7QUNPRCxhQUFTK0osMkJBQ1B4SyxTQUNBc0osVUFDQTtBQUNBLFVBQU0zRyxPQUFPNUMsc0JBQXNCQyxTQUFTLE9BQU9zSixhQUFhLE9BQTlCO0FBRWxDM0csV0FBSzFCLE1BQU0wQixLQUFLMUIsTUFBTWpCLFFBQVFxRDtBQUM5QlYsV0FBSzdCLE9BQU82QixLQUFLN0IsT0FBT2QsUUFBUW9EO0FBQ2hDVCxXQUFLdkIsU0FBU3VCLEtBQUsxQixNQUFNakIsUUFBUXlKO0FBQ2pDOUcsV0FBS3hCLFFBQVF3QixLQUFLN0IsT0FBT2QsUUFBUXdKO0FBQ2pDN0csV0FBS3BDLFFBQVFQLFFBQVF3SjtBQUNyQjdHLFdBQUtsQyxTQUFTVCxRQUFReUo7QUFDdEI5RyxXQUFLOUIsSUFBSThCLEtBQUs3QjtBQUNkNkIsV0FBSzNCLElBQUkyQixLQUFLMUI7QUFFZCxhQUFPMEI7SUFDUjtBQUVELGFBQVM4SCwyQkFDUHpLLFNBQ0EwSyxnQkFDQXBCLFVBQ2tCO0FBQ2xCLGFBQU9vQixtQkFBbUI5RSxXQUN0QjJFLGlCQUFpQmxCLGdCQUFnQnJKLFNBQVNzSixRQUFWLENBQWhCLElBQ2hCakwsVUFBVXFNLGNBQUQsSUFDVEYsMkJBQTJCRSxnQkFBZ0JwQixRQUFqQixJQUMxQmlCLGlCQUFpQlosZ0JBQWdCM0gsbUJBQW1CaEMsT0FBRCxDQUFuQixDQUFoQjtJQUNyQjtBQUtELGFBQVMySyxtQkFBbUIzSyxTQUFrQztBQUM1RCxVQUFNNEssbUJBQWtCN0csa0JBQWtCUCxjQUFjeEQsT0FBRCxDQUFkO0FBQ3pDLFVBQU02SyxvQkFDSixDQUFDLFlBQVksT0FBYixFQUFzQmhILFFBQVF6QixpQkFBaUJwQyxPQUFELEVBQVV5RSxRQUF4RCxLQUFxRTtBQUN2RSxVQUFNcUcsaUJBQ0pELHFCQUFxQnJNLGNBQWN3QixPQUFELElBQzlCcUYsZ0JBQWdCckYsT0FBRCxJQUNmQTtBQUVOLFVBQUksQ0FBQzNCLFVBQVV5TSxjQUFELEdBQWtCO0FBQzlCLGVBQU8sQ0FBQTtNQUNSO0FBR0QsYUFBT0YsaUJBQWdCeEYsT0FDckIsU0FBQ3NGLGdCQUFEO0FBQUEsZUFDRXJNLFVBQVVxTSxjQUFELEtBQ1RWLFNBQVNVLGdCQUFnQkksY0FBakIsS0FDUmpKLFlBQVk2SSxjQUFELE1BQXFCO01BSGxDLENBREs7SUFNUjtBQUljLGFBQVNLLGdCQUN0Qi9LLFNBQ0FnTCxVQUNBQyxjQUNBM0IsVUFDa0I7QUFDbEIsVUFBTTRCLHNCQUNKRixhQUFhLG9CQUNUTCxtQkFBbUIzSyxPQUFELElBQ2xCLENBQUEsRUFBR3FFLE9BQU8yRyxRQUFWO0FBQ04sVUFBTUosbUJBQWUsQ0FBQSxFQUFBdkcsT0FBTzZHLHFCQUFQLENBQTRCRCxZQUE1QixDQUFBO0FBQ3JCLFVBQU1FLHNCQUFzQlAsaUJBQWdCLENBQUQ7QUFFM0MsVUFBTVEsZUFBZVIsaUJBQWdCNUUsT0FBTyxTQUFDcUYsU0FBU1gsZ0JBQW1CO0FBQ3ZFLFlBQU0vSCxPQUFPOEgsMkJBQTJCekssU0FBUzBLLGdCQUFnQnBCLFFBQTFCO0FBRXZDK0IsZ0JBQVFwSyxNQUFNckMsSUFBSStELEtBQUsxQixLQUFLb0ssUUFBUXBLLEdBQW5CO0FBQ2pCb0ssZ0JBQVFsSyxRQUFRckMsSUFBSTZELEtBQUt4QixPQUFPa0ssUUFBUWxLLEtBQXJCO0FBQ25Ca0ssZ0JBQVFqSyxTQUFTdEMsSUFBSTZELEtBQUt2QixRQUFRaUssUUFBUWpLLE1BQXRCO0FBQ3BCaUssZ0JBQVF2SyxPQUFPbEMsSUFBSStELEtBQUs3QixNQUFNdUssUUFBUXZLLElBQXBCO0FBRWxCLGVBQU91SztNQUNSLEdBQUVaLDJCQUEyQnpLLFNBQVNtTCxxQkFBcUI3QixRQUEvQixDQVRSO0FBV3JCOEIsbUJBQWE3SyxRQUFRNkssYUFBYWpLLFFBQVFpSyxhQUFhdEs7QUFDdkRzSyxtQkFBYTNLLFNBQVMySyxhQUFhaEssU0FBU2dLLGFBQWFuSztBQUN6RG1LLG1CQUFhdkssSUFBSXVLLGFBQWF0SztBQUM5QnNLLG1CQUFhcEssSUFBSW9LLGFBQWFuSztBQUU5QixhQUFPbUs7SUFDUjtBQ3RHYyxhQUFTRSxpQkFDdEJwRixXQUNlO0FBQ2YsYUFBUUEsVUFBVXFGLE1BQU0sR0FBaEIsRUFBcUIsQ0FBckI7SUFDVDtBQ0pjLGFBQVNDLGFBQWF0RixXQUFrQztBQUNyRSxhQUFRQSxVQUFVcUYsTUFBTSxHQUFoQixFQUFxQixDQUFyQjtJQUNUO0FDRmMsYUFBU0UseUJBQ3RCdkYsV0FDVztBQUNYLGFBQU8sQ0FBQyxPQUFPLFFBQVIsRUFBa0JyQyxRQUFRcUMsU0FBMUIsS0FBd0MsSUFBSSxNQUFNO0lBQzFEO0FDS2MsYUFBU3dGLGVBQVRoTCxNQVNIO0FBQUEsVUFSVmlMLGFBUVVqTCxLQVJWb0YsV0FDQTlGLFVBT1VVLEtBUFZWLFNBQ0FrRyxZQU1VeEYsS0FOVndGO0FBT0EsVUFBTTBGLGdCQUFnQjFGLFlBQVlvRixpQkFBaUJwRixTQUFELElBQWM7QUFDaEUsVUFBTTJGLFlBQVkzRixZQUFZc0YsYUFBYXRGLFNBQUQsSUFBYztBQUN4RCxVQUFNNEYsVUFBVUgsV0FBVTlLLElBQUk4SyxXQUFVcEwsUUFBUSxJQUFJUCxRQUFRTyxRQUFRO0FBQ3BFLFVBQU13TCxVQUFVSixXQUFVM0ssSUFBSTJLLFdBQVVsTCxTQUFTLElBQUlULFFBQVFTLFNBQVM7QUFFdEUsVUFBSTBDO0FBQ0osY0FBUXlJLGVBQUE7UUFDTixLQUFLM0s7QUFDSGtDLG9CQUFVO1lBQ1J0QyxHQUFHaUw7WUFDSDlLLEdBQUcySyxXQUFVM0ssSUFBSWhCLFFBQVFTO1VBRmpCO0FBSVY7UUFDRixLQUFLVztBQUNIK0Isb0JBQVU7WUFDUnRDLEdBQUdpTDtZQUNIOUssR0FBRzJLLFdBQVUzSyxJQUFJMkssV0FBVWxMO1VBRm5CO0FBSVY7UUFDRixLQUFLVTtBQUNIZ0Msb0JBQVU7WUFDUnRDLEdBQUc4SyxXQUFVOUssSUFBSThLLFdBQVVwTDtZQUMzQlMsR0FBRytLO1VBRks7QUFJVjtRQUNGLEtBQUtqTDtBQUNIcUMsb0JBQVU7WUFDUnRDLEdBQUc4SyxXQUFVOUssSUFBSWIsUUFBUU87WUFDekJTLEdBQUcrSztVQUZLO0FBSVY7UUFDRjtBQUNFNUksb0JBQVU7WUFDUnRDLEdBQUc4SyxXQUFVOUs7WUFDYkcsR0FBRzJLLFdBQVUzSztVQUZMO01BMUJkO0FBZ0NBLFVBQU1nTCxXQUFXSixnQkFDYkgseUJBQXlCRyxhQUFELElBQ3hCO0FBRUosVUFBSUksWUFBWSxNQUFNO0FBQ3BCLFlBQU1DLE1BQU1ELGFBQWEsTUFBTSxXQUFXO0FBRTFDLGdCQUFRSCxXQUFBO1VBQ04sS0FBS3BHO0FBQ0h0QyxvQkFBUTZJLFFBQUQsSUFDTDdJLFFBQVE2SSxRQUFELEtBQWNMLFdBQVVNLEdBQUQsSUFBUSxJQUFJak0sUUFBUWlNLEdBQUQsSUFBUTtBQUMzRDtVQUNGLEtBQUt2RztBQUNIdkMsb0JBQVE2SSxRQUFELElBQ0w3SSxRQUFRNkksUUFBRCxLQUFjTCxXQUFVTSxHQUFELElBQVEsSUFBSWpNLFFBQVFpTSxHQUFELElBQVE7QUFDM0Q7UUFSSjtNQVdEO0FBRUQsYUFBTzlJO0lBQ1I7QUM5RWMsYUFBUytJLHFCQUFpQztBQUN2RCxhQUFPO1FBQ0xqTCxLQUFLO1FBQ0xFLE9BQU87UUFDUEMsUUFBUTtRQUNSTixNQUFNO01BSkQ7SUFNUjtBQ05jLGFBQVNxTCxtQkFDdEJDLGVBQ1k7QUFDWixhQUFBckQsT0FBQUMsT0FBQSxDQUFBLEdBQ0trRCxtQkFBa0IsR0FDbEJFLGFBRkw7SUFJRDtBQ1RjLGFBQVNDLGdCQUd0QkMsT0FBVW5ELE1BQXNDO0FBQ2hELGFBQU9BLEtBQUtuRCxPQUFPLFNBQUN1RyxTQUFTbkQsS0FBUTtBQUNuQ21ELGdCQUFRbkQsR0FBRCxJQUFRa0Q7QUFDZixlQUFPQztNQUNSLEdBQUUsQ0FBQSxDQUhJO0lBSVI7QUN1QmMsYUFBU0MsZUFDdEJDLE9BQ0F4RCxTQUNZO0FBQUEsVUFEWkEsWUFDWSxRQUFBO0FBRFpBLGtCQUEyQixDQUFBO01BQ2Y7QUFBQSxVQUFBeUQsV0FTUnpELFNBVFEwRCxxQkFBQUQsU0FFVnhHLFdBQUFBLFlBRlV5Ryx1QkFBQSxTQUVFRixNQUFNdkcsWUFGUnlHLG9CQUFBQyxvQkFBQUYsU0FHVnBELFVBQUFBLFdBSFVzRCxzQkFBQSxTQUdDSCxNQUFNbkQsV0FIUHNELG1CQUFBQyxvQkFBQUgsU0FJVjFCLFVBQUFBLFdBSlU2QixzQkFBQSxTQUlDbEgsa0JBSkRrSCxtQkFBQUMsd0JBQUFKLFNBS1Z6QixjQUFBQSxlQUxVNkIsMEJBQUEsU0FLS2xILFdBTExrSCx1QkFBQUMsd0JBQUFMLFNBTVZNLGdCQUFBQSxpQkFOVUQsMEJBQUEsU0FNT2xILFNBTlBrSCx1QkFBQUUsdUJBQUFQLFNBT1ZRLGFBQUFBLGNBUFVELHlCQUFBLFNBT0ksUUFQSkEsc0JBQUFFLG1CQUFBVCxTQVFWVSxTQUFBQSxVQVJVRCxxQkFBQSxTQVFBLElBUkFBO0FBV1osVUFBTWYsZ0JBQWdCRCxtQkFDcEIsT0FBT2lCLFlBQVksV0FDZkEsVUFDQWYsZ0JBQWdCZSxTQUFTNUgsY0FBVixDQUhtQjtBQU14QyxVQUFNNkgsYUFBYUwsbUJBQW1CbkgsU0FBU0MsWUFBWUQ7QUFFM0QsVUFBTXlILGFBQWFiLE1BQU1jLE1BQU0xSDtBQUMvQixVQUFNN0YsVUFBVXlNLE1BQU1lLFNBQVNOLGNBQWNHLGFBQWFMLGNBQTFDO0FBRWhCLFVBQU1TLHFCQUFxQjFDLGdCQUN6QjFNLFVBQVUyQixPQUFELElBQ0xBLFVBQ0FBLFFBQVEwTixrQkFBa0IxTCxtQkFBbUJ5SyxNQUFNZSxTQUFTM0gsTUFBaEIsR0FDaERtRixVQUNBQyxjQUNBM0IsUUFOd0M7QUFTMUMsVUFBTXFFLHNCQUFzQjVOLHNCQUFzQjBNLE1BQU1lLFNBQVMxSCxTQUFoQjtBQUVqRCxVQUFNOEgsaUJBQWdCbEMsZUFBZTtRQUNuQzVGLFdBQVc2SDtRQUNYM04sU0FBU3NOO1FBQ1RoRSxVQUFVO1FBQ1ZwRDtNQUptQyxDQUFEO0FBT3BDLFVBQU0ySCxtQkFBbUJ0RCxpQkFBZ0J4QixPQUFBQyxPQUFBLENBQUEsR0FDcENzRSxZQUNBTSxjQUZvQyxDQUFBO0FBS3pDLFVBQU1FLG9CQUNKZCxtQkFBbUJuSCxTQUFTZ0ksbUJBQW1CRjtBQUlqRCxVQUFNSSxrQkFBa0I7UUFDdEI5TSxLQUFLd00sbUJBQW1CeE0sTUFBTTZNLGtCQUFrQjdNLE1BQU1tTCxjQUFjbkw7UUFDcEVHLFFBQ0UwTSxrQkFBa0IxTSxTQUNsQnFNLG1CQUFtQnJNLFNBQ25CZ0wsY0FBY2hMO1FBQ2hCTixNQUFNMk0sbUJBQW1CM00sT0FBT2dOLGtCQUFrQmhOLE9BQU9zTCxjQUFjdEw7UUFDdkVLLE9BQ0UyTSxrQkFBa0IzTSxRQUFRc00sbUJBQW1CdE0sUUFBUWlMLGNBQWNqTDtNQVIvQztBQVd4QixVQUFNNk0sYUFBYXZCLE1BQU13QixjQUFjQztBQUd2QyxVQUFJbEIsbUJBQW1CbkgsVUFBVW1JLFlBQVk7QUFDM0MsWUFBTUcsVUFBU0gsV0FBVzlILFNBQUQ7QUFFekI2QyxlQUFPSSxLQUFLNEUsZUFBWixFQUE2QjNHLFFBQVEsU0FBQ2dDLEtBQVE7QUFDNUMsY0FBTWdGLFdBQVcsQ0FBQ2pOLE9BQU9DLE1BQVIsRUFBZ0J5QyxRQUFRdUYsR0FBeEIsS0FBZ0MsSUFBSSxJQUFJO0FBQ3pELGNBQU1pRixPQUFPLENBQUNwTixLQUFLRyxNQUFOLEVBQWN5QyxRQUFRdUYsR0FBdEIsS0FBOEIsSUFBSSxNQUFNO0FBQ3JEMkUsMEJBQWdCM0UsR0FBRCxLQUFTK0UsUUFBT0UsSUFBRCxJQUFTRDtRQUN4QyxDQUpEO01BS0Q7QUFFRCxhQUFPTDtJQUNSO0FDN0ZELFFBQU1PLGtCQUF1QztNQUMzQ3BJLFdBQVc7TUFDWGEsV0FBVyxDQUFBO01BQ1h1QyxVQUFVO0lBSGlDO0FBVzdDLGFBQVNpRixtQkFBK0M7QUFBQSxlQUFBQyxPQUFBQyxVQUFBQyxRQUEzQkMsT0FBMkIsSUFBQXRQLE1BQUFtUCxJQUFBLEdBQUFJLE9BQUEsR0FBQUEsT0FBQUosTUFBQUksUUFBQTtBQUEzQkQsYUFBMkJDLElBQUEsSUFBQUgsVUFBQUcsSUFBQTtNQUFBO0FBQ3RELGFBQU8sQ0FBQ0QsS0FBS0UsS0FDWCxTQUFDN08sU0FBRDtBQUFBLGVBQ0UsRUFBRUEsV0FBVyxPQUFPQSxRQUFRRCwwQkFBMEI7TUFEeEQsQ0FETTtJQUlUO0FBRU0sYUFBUytPLGdCQUFnQkMsa0JBQTRDO0FBQUEsVUFBNUNBLHFCQUE0QyxRQUFBO0FBQTVDQSwyQkFBd0MsQ0FBQTtNQUFJO0FBQUEsVUFBQUMsb0JBRXhFRCxrQkFGd0VFLHdCQUFBRCxrQkFDbEVFLGtCQUFBQyxvQkFEa0VGLDBCQUFBLFNBQy9DLENBQUEsSUFEK0NBLHVCQUFBRyx5QkFBQUosa0JBQzNDSyxnQkFBQUEsaUJBRDJDRCwyQkFBQSxTQUMxQmQsa0JBRDBCYztBQUkxRSxhQUFPLFNBQVNFLGNBQ2QzRCxZQUNBNEQsU0FDQXRHLFNBQ1U7QUFBQSxZQURWQSxZQUNVLFFBQUE7QUFEVkEsb0JBQTZDb0c7UUFDbkM7QUFDVixZQUFJNUMsUUFBdUI7VUFDekJ2RyxXQUFXO1VBQ1hnQyxrQkFBa0IsQ0FBQTtVQUNsQmUsU0FBT0YsT0FBQUMsT0FBQSxDQUFBLEdBQU9zRixpQkFBb0JlLGNBQTNCO1VBQ1BwQixlQUFlLENBQUE7VUFDZlQsVUFBVTtZQUNSMUgsV0FBQTZGO1lBQ0E5RixRQUFBMEo7VUFGUTtVQUlWQyxZQUFZLENBQUE7VUFDWkMsUUFBUSxDQUFBO1FBVmlCO0FBYTNCLFlBQUlDLG1CQUFzQyxDQUFBO0FBQzFDLFlBQUlDLGNBQWM7QUFFbEIsWUFBTUMsV0FBVztVQUNmbkQ7VUFDQW9ELFlBRmUsU0FBQUEsV0FFSkMsa0JBQWtCO0FBQzNCLGdCQUFNQyxXQUNKLE9BQU9ELHFCQUFxQixhQUN4QkEsaUJBQWlCckQsTUFBTXhELE9BQVAsSUFDaEI2RztBQUVORSxtQ0FBc0I7QUFFdEJ2RCxrQkFBTXhELFVBQU5GLE9BQUFDLE9BQUEsQ0FBQSxHQUVLcUcsZ0JBQ0E1QyxNQUFNeEQsU0FDTjhHLFFBSkw7QUFPQXRELGtCQUFNd0QsZ0JBQWdCO2NBQ3BCbkssV0FBV3pILFVBQVVzTixVQUFELElBQ2hCNUgsa0JBQWtCNEgsVUFBRCxJQUNqQkEsV0FBVStCLGlCQUNWM0osa0JBQWtCNEgsV0FBVStCLGNBQVgsSUFDakIsQ0FBQTtjQUNKN0gsUUFBUTlCLGtCQUFrQndMLE9BQUQ7WUFOTDtBQVd0QixnQkFBTXJILG1CQUFtQkQsZUFDdkJTLFlBQVcsQ0FBQSxFQUFBckUsT0FBSzhLLG1CQUFxQjFDLE1BQU14RCxRQUFRbEMsU0FBeEMsQ0FBQSxDQUQwQjtBQUt2QzBGLGtCQUFNdkUsbUJBQW1CQSxpQkFBaUI5QyxPQUFPLFNBQUM4SyxHQUFEO0FBQUEscUJBQU9BLEVBQUVDO1lBQVQsQ0FBeEI7QUFFekJDLCtCQUFrQjtBQUVsQixtQkFBT1IsU0FBU1MsT0FBVDtVQUNSOzs7Ozs7VUFPREMsYUE3Q2UsU0FBQUEsY0E2Q0Q7QUFDWixnQkFBSVgsYUFBYTtBQUNmO1lBQ0Q7QUFIVyxnQkFBQVksa0JBS2tCOUQsTUFBTWUsVUFBNUJnRCxhQUxJRCxnQkFLSnpLLFdBQVcySyxVQUxQRixnQkFLTzFLO0FBSW5CLGdCQUFJLENBQUMwSSxpQkFBaUJpQyxZQUFXQyxPQUFaLEdBQXFCO0FBQ3hDO1lBQ0Q7QUFHRGhFLGtCQUFNYyxRQUFRO2NBQ1p6SCxXQUFXbEQsaUJBQ1Q0TixZQUNBbkwsZ0JBQWdCb0wsT0FBRCxHQUNmaEUsTUFBTXhELFFBQVFLLGFBQWEsT0FIRjtjQUszQnpELFFBQVF2QyxjQUFjbU4sT0FBRDtZQU5UO0FBY2RoRSxrQkFBTWlFLFFBQVE7QUFFZGpFLGtCQUFNdkcsWUFBWXVHLE1BQU14RCxRQUFRL0M7QUFNaEN1RyxrQkFBTXZFLGlCQUFpQmQsUUFDckIsU0FBQ0MsVUFBRDtBQUFBLHFCQUNHb0YsTUFBTXdCLGNBQWM1RyxTQUFTRSxJQUE3QixJQUFBd0IsT0FBQUMsT0FBQSxDQUFBLEdBQ0kzQixTQUFTNkIsSUFEYjtZQURILENBREY7QUFPQSxxQkFBU3lILFFBQVEsR0FBR0EsUUFBUWxFLE1BQU12RSxpQkFBaUJ3RyxRQUFRaUMsU0FBUztBQUNsRSxrQkFBSWxFLE1BQU1pRSxVQUFVLE1BQU07QUFDeEJqRSxzQkFBTWlFLFFBQVE7QUFDZEMsd0JBQVE7QUFDUjtjQUNEO0FBTGlFLGtCQUFBQyx3QkFPL0JuRSxNQUFNdkUsaUJBQWlCeUksS0FBdkIsR0FBM0J0SSxLQVAwRHVJLHNCQU8xRHZJLElBUDBEd0kseUJBQUFELHNCQU90RDNILFNBQUF5RCxXQVBzRG1FLDJCQUFBLFNBTzVDLENBQUEsSUFQNENBLHdCQU94Q3RKLE9BUHdDcUosc0JBT3hDcko7QUFFMUIsa0JBQUksT0FBT2MsT0FBTyxZQUFZO0FBQzVCb0Usd0JBQVFwRSxHQUFHO2tCQUFFb0U7a0JBQU94RCxTQUFBeUQ7a0JBQVNuRjtrQkFBTXFJO2dCQUF4QixDQUFELEtBQXdDbkQ7Y0FDbkQ7WUFDRjtVQUNGOzs7VUFJRDRELFFBQVFqSSxTQUNOLFdBQUE7QUFBQSxtQkFDRSxJQUFJRyxRQUF1QixTQUFDQyxTQUFZO0FBQ3RDb0gsdUJBQVNVLFlBQVQ7QUFDQTlILHNCQUFRaUUsS0FBRDtZQUNSLENBSEQ7VUFERixDQURjO1VBUWhCcUUsU0FqSGUsU0FBQUEsVUFpSEw7QUFDUmQsbUNBQXNCO0FBQ3RCTCwwQkFBYztVQUNmO1FBcEhjO0FBdUhqQixZQUFJLENBQUNwQixpQkFBaUI1QyxZQUFXNEQsT0FBWixHQUFxQjtBQUN4QyxpQkFBT0s7UUFDUjtBQUVEQSxpQkFBU0MsV0FBVzVHLE9BQXBCLEVBQTZCUixLQUFLLFNBQUNzSSxRQUFVO0FBQzNDLGNBQUksQ0FBQ3BCLGVBQWUxRyxRQUFRK0gsZUFBZTtBQUN6Qy9ILG9CQUFRK0gsY0FBY0QsTUFBdEI7VUFDRDtRQUNGLENBSkQ7QUFXQSxpQkFBU1gscUJBQXFCO0FBQzVCM0QsZ0JBQU12RSxpQkFBaUJkLFFBQVEsU0FBQTFHLE1BQW9DO0FBQUEsZ0JBQWpDNkcsT0FBaUM3RyxLQUFqQzZHLE1BQWlDMEosZUFBQXZRLEtBQTNCdUksU0FBQThHLFdBQTJCa0IsaUJBQUEsU0FBakIsQ0FBQSxJQUFpQkEsY0FBYkMsVUFBYXhRLEtBQWJ5UTtBQUNwRCxnQkFBSSxPQUFPRCxZQUFXLFlBQVk7QUFDaEMsa0JBQU1FLFlBQVlGLFFBQU87Z0JBQUV6RTtnQkFBT2xGO2dCQUFNcUk7Z0JBQVUzRyxTQUFBOEc7Y0FBekIsQ0FBRDtBQUN4QixrQkFBTXNCLFNBQVMsU0FBVEMsVUFBZTtjQUFBO0FBQ3JCNUIsK0JBQWlCMUgsS0FBS29KLGFBQWFDLE1BQW5DO1lBQ0Q7VUFDRixDQU5EO1FBT0Q7QUFFRCxpQkFBU3JCLHlCQUF5QjtBQUNoQ04sMkJBQWlCdEksUUFBUSxTQUFDaUIsSUFBRDtBQUFBLG1CQUFRQSxHQUFFO1VBQVYsQ0FBekI7QUFDQXFILDZCQUFtQixDQUFBO1FBQ3BCO0FBRUQsZUFBT0U7TUFDUjtJQUNGO0FDMU1ELFFBQU0yQixVQUFVO01BQUVBLFNBQVM7SUFBWDtBQUVoQixhQUFTQyxTQUFUOVEsTUFBMEU7QUFBQSxVQUF4RCtMLFFBQXdEL0wsS0FBeEQrTCxPQUFPbUQsV0FBaURsUCxLQUFqRGtQLFVBQVUzRyxVQUF1Q3ZJLEtBQXZDdUk7QUFBdUMsVUFBQXdJLGtCQUMvQnhJLFFBQWpDL0YsUUFBQUEsU0FEZ0V1TyxvQkFBQSxTQUN2RCxPQUR1REEsaUJBQUFDLGtCQUMvQnpJLFFBQWxCMEksUUFBQUEsU0FEaURELG9CQUFBLFNBQ3hDLE9BRHdDQTtBQUd4RSxVQUFNcE0sVUFBU3ZILFVBQVUwTyxNQUFNZSxTQUFTM0gsTUFBaEI7QUFDeEIsVUFBTW9LLGdCQUFhLENBQUEsRUFBQTVMLE9BQ2RvSSxNQUFNd0QsY0FBY25LLFdBQ3BCMkcsTUFBTXdELGNBQWNwSyxNQUZOO0FBS25CLFVBQUkzQyxRQUFRO0FBQ1YrTSxzQkFBYzdJLFFBQVEsU0FBQWxELGNBQWdCO0FBQ3BDQSx1QkFBYTBOLGlCQUFpQixVQUFVaEMsU0FBU1MsUUFBUWtCLE9BQXpEO1FBQ0QsQ0FGRDtNQUdEO0FBRUQsVUFBSUksUUFBUTtBQUNWck0sZ0JBQU9zTSxpQkFBaUIsVUFBVWhDLFNBQVNTLFFBQVFrQixPQUFuRDtNQUNEO0FBRUQsYUFBTyxXQUFNO0FBQ1gsWUFBSXJPLFFBQVE7QUFDVitNLHdCQUFjN0ksUUFBUSxTQUFBbEQsY0FBZ0I7QUFDcENBLHlCQUFhMk4sb0JBQW9CLFVBQVVqQyxTQUFTUyxRQUFRa0IsT0FBNUQ7VUFDRCxDQUZEO1FBR0Q7QUFFRCxZQUFJSSxRQUFRO0FBQ1ZyTSxrQkFBT3VNLG9CQUFvQixVQUFVakMsU0FBU1MsUUFBUWtCLE9BQXREO1FBQ0Q7TUFDRjtJQUNGO0FBSUQsUUFBQU8saUJBQWdCO01BQ2R2SyxNQUFNO01BQ040SSxTQUFTO01BQ1RoSSxPQUFPO01BQ1BFLElBQUksU0FBQUEsS0FBTTtNQUFBO01BQ1Y4SSxRQUFBSztNQUNBdEksTUFBTSxDQUFBO0lBTlE7QUMxQ2hCLGFBQVM2SSxjQUFUclIsTUFBaUU7QUFBQSxVQUF4QytMLFFBQXdDL0wsS0FBeEMrTCxPQUFPbEYsT0FBaUM3RyxLQUFqQzZHO0FBSzlCa0YsWUFBTXdCLGNBQWMxRyxJQUFwQixJQUE0Qm1FLGVBQWU7UUFDekM1RixXQUFXMkcsTUFBTWMsTUFBTXpIO1FBQ3ZCOUYsU0FBU3lNLE1BQU1jLE1BQU0xSDtRQUNyQnlELFVBQVU7UUFDVnBELFdBQVd1RyxNQUFNdkc7TUFKd0IsQ0FBRDtJQU0zQztBQUlELFFBQUE4TCxrQkFBZ0I7TUFDZHpLLE1BQU07TUFDTjRJLFNBQVM7TUFDVGhJLE9BQU87TUFDUEUsSUFBSTBKO01BQ0o3SSxNQUFNLENBQUE7SUFMUTtBQ21CaEIsUUFBTStJLGFBQWE7TUFDakJoUixLQUFLO01BQ0xFLE9BQU87TUFDUEMsUUFBUTtNQUNSTixNQUFNO0lBSlc7QUFVbkIsYUFBU29SLGtCQUFUeFIsTUFBcUNZLEtBQXNCO0FBQUEsVUFBOUJULElBQThCSCxLQUE5QkcsR0FBR0csSUFBMkJOLEtBQTNCTTtBQUM5QixVQUFNbVIsTUFBTTdRLElBQUk4USxvQkFBb0I7QUFFcEMsYUFBTztRQUNMdlIsR0FBRzlCLE1BQU04QixJQUFJc1IsR0FBTCxJQUFZQSxPQUFPO1FBQzNCblIsR0FBR2pDLE1BQU1pQyxJQUFJbVIsR0FBTCxJQUFZQSxPQUFPO01BRnRCO0lBSVI7QUFFTSxhQUFTRSxZQUFUQyxPQXNCSjtBQUFBLFVBQUFDO0FBQUEsVUFyQkRoRCxVQXFCQytDLE1BckJEek0sUUFDQXlILGFBb0JDZ0YsTUFwQkRoRixZQUNBcEgsWUFtQkNvTSxNQW5CRHBNLFdBQ0EyRixZQWtCQ3lHLE1BbEJEekcsV0FDQTFJLFVBaUJDbVAsTUFqQkRuUCxTQUNBc0IsV0FnQkM2TixNQWhCRDdOLFVBQ0ErTixrQkFlQ0YsTUFmREUsaUJBQ0FDLFdBY0NILE1BZERHLFVBQ0FDLGVBYUNKLE1BYkRJLGNBQ0EzUCxVQVlDdVAsTUFaRHZQO0FBWUMsVUFBQTRQLGFBQ3NCeFAsUUFBakJ0QyxHQUFBQSxJQURMOFIsZUFBQSxTQUNTLElBRFRBLFlBQUFDLGFBQ3NCelAsUUFBVm5DLEdBQUFBLElBRFo0UixlQUFBLFNBQ2dCLElBRGhCQTtBQUFBLFVBQUFDLFFBSUMsT0FBT0gsaUJBQWlCLGFBQWFBLGFBQWE7UUFBRTdSO1FBQUdHO01BQUwsQ0FBRCxJQUFhO1FBQUVIO1FBQUdHO01BQUw7QUFEN0RILFVBSEZnUyxNQUdFaFM7QUFBR0csVUFITDZSLE1BR0s3UjtBQUdOLFVBQU04UixPQUFPM1AsUUFBUTRQLGVBQWUsR0FBdkI7QUFDYixVQUFNQyxPQUFPN1AsUUFBUTRQLGVBQWUsR0FBdkI7QUFFYixVQUFJRSxRQUFnQm5TO0FBQ3BCLFVBQUlvUyxRQUFnQmpTO0FBRXBCLFVBQU1LLE1BQWNyRDtBQUVwQixVQUFJd1UsVUFBVTtBQUNaLFlBQUkzUCxlQUFldUMsZ0JBQWdCa0ssT0FBRDtBQUNsQyxZQUFJNEQsYUFBYTtBQUNqQixZQUFJQyxZQUFZO0FBRWhCLFlBQUl0USxpQkFBaUIvRSxVQUFVd1IsT0FBRCxHQUFVO0FBQ3RDek0seUJBQWVkLG1CQUFtQnVOLE9BQUQ7QUFFakMsY0FDRW5OLGlCQUFpQlUsWUFBRCxFQUFlMkIsYUFBYSxZQUM1Q0EsYUFBYSxZQUNiO0FBQ0EwTyx5QkFBYTtBQUNiQyx3QkFBWTtVQUNiO1FBQ0Y7QUFHRHRRLHVCQUFnQkE7QUFFaEIsWUFDRW9ELGNBQWNqRixRQUNaaUYsY0FBY3BGLFFBQVFvRixjQUFjL0UsVUFBVTBLLGNBQWNuRyxLQUM5RDtBQUNBd04sa0JBQVE5UjtBQUNSLGNBQU1pUyxVQUNKdFEsV0FBV0QsaUJBQWlCeEIsT0FBT0EsSUFBSVgsaUJBQ25DVyxJQUFJWCxlQUFlRjs7WUFFbkJxQyxhQUFhcVEsVUFBRDs7QUFDbEJuUyxlQUFLcVMsVUFBVS9GLFdBQVc3TTtBQUMxQk8sZUFBS3dSLGtCQUFrQixJQUFJO1FBQzVCO0FBRUQsWUFDRXRNLGNBQWNwRixTQUNab0YsY0FBY2pGLE9BQU9pRixjQUFjOUUsV0FBV3lLLGNBQWNuRyxLQUM5RDtBQUNBdU4sa0JBQVE5UjtBQUNSLGNBQU1tUyxVQUNKdlEsV0FBV0QsaUJBQWlCeEIsT0FBT0EsSUFBSVgsaUJBQ25DVyxJQUFJWCxlQUFlSjs7WUFFbkJ1QyxhQUFhc1EsU0FBRDs7QUFDbEJ2UyxlQUFLeVMsVUFBVWhHLFdBQVcvTTtBQUMxQk0sZUFBSzJSLGtCQUFrQixJQUFJO1FBQzVCO01BQ0Y7QUFFRCxVQUFNZSxlQUFZeEssT0FBQUMsT0FBQTtRQUNoQnZFO01BRGdCLEdBRVpnTyxZQUFZUixVQUZBO0FBL0RqQixVQUFBdUIsUUFxRUNkLGlCQUFpQixPQUNiUixrQkFBa0I7UUFBRXJSO1FBQUdHO01BQUwsR0FBVWpELFVBQVV3UixPQUFELENBQXBCLElBQ2pCO1FBQUUxTztRQUFHRztNQUFMO0FBSEhILFVBcEVGMlMsTUFvRUUzUztBQUFHRyxVQXBFTHdTLE1Bb0VLeFM7QUFLTixVQUFJd1IsaUJBQWlCO0FBQUEsWUFBQWlCO0FBQ25CLGVBQUExSyxPQUFBQyxPQUFBLENBQUEsR0FDS3VLLGVBRExFLGlCQUFBLENBQUEsR0FBQUEsZUFFR1AsS0FGSCxJQUVXRixPQUFPLE1BQU0sSUFGeEJTLGVBR0dSLEtBSEgsSUFHV0gsT0FBTyxNQUFNLElBSHhCVyxlQU9Fek8sYUFDRzFELElBQUk4USxvQkFBb0IsTUFBTSxJQUEvQixlQUNpQnZSLElBRGpCLFNBQ3lCRyxJQUR6QixRQUFBLGlCQUVtQkgsSUFGbkIsU0FFMkJHLElBRjNCLFVBUkp5UyxlQUFBO01BWUQ7QUFFRCxhQUFBMUssT0FBQUMsT0FBQSxDQUFBLEdBQ0t1SyxlQURMaEIsa0JBQUEsQ0FBQSxHQUFBQSxnQkFFR1csS0FGSCxJQUVXRixPQUFVaFMsSUFBTixPQUFjLElBRjdCdVIsZ0JBR0dVLEtBSEgsSUFHV0gsT0FBVWpTLElBQU4sT0FBYyxJQUg3QjBSLGdCQUlFdk4sWUFBVyxJQUpidU4sZ0JBQUE7SUFNRDtBQUVELGFBQVNtQixjQUFUQyxPQUF1RTtBQUFBLFVBQTlDbEgsUUFBOENrSCxNQUE5Q2xILE9BQU94RCxVQUF1QzBLLE1BQXZDMUs7QUFBdUMsVUFBQTJLLHdCQU1qRTNLLFFBSkZ1SixpQkFBQUEsa0JBRm1Fb0IsMEJBQUEsU0FFakQsT0FGaURBLHVCQUFBQyxvQkFNakU1SyxRQUhGd0osVUFBQUEsV0FIbUVvQixzQkFBQSxTQUd4RCxPQUh3REEsbUJBQUFDLHdCQU1qRTdLLFFBREZ5SixjQUFBQSxlQUxtRW9CLDBCQUFBLFNBS3BELE9BTG9EQTtBQVFyRSxVQUFNUCxlQUFlO1FBQ25Cck4sV0FBV29GLGlCQUFpQm1CLE1BQU12RyxTQUFQO1FBQzNCMkYsV0FBV0wsYUFBYWlCLE1BQU12RyxTQUFQO1FBQ3ZCTCxRQUFRNEcsTUFBTWUsU0FBUzNIO1FBQ3ZCeUgsWUFBWWIsTUFBTWMsTUFBTTFIO1FBQ3hCMk07UUFDQXpQLFNBQVMwSixNQUFNeEQsUUFBUUssYUFBYTtNQU5qQjtBQVNyQixVQUFJbUQsTUFBTXdCLGNBQWM4RCxpQkFBaUIsTUFBTTtBQUM3Q3RGLGNBQU1nRCxPQUFPNUosU0FBYmtELE9BQUFDLE9BQUEsQ0FBQSxHQUNLeUQsTUFBTWdELE9BQU81SixRQUNid00sWUFBV3RKLE9BQUFDLE9BQUEsQ0FBQSxHQUNUdUssY0FEUztVQUVacFEsU0FBU3NKLE1BQU13QixjQUFjOEQ7VUFDN0J0TixVQUFVZ0ksTUFBTXhELFFBQVFLO1VBQ3hCbUo7VUFDQUM7UUFMWSxDQUFBLENBQUEsQ0FGaEI7TUFVRDtBQUVELFVBQUlqRyxNQUFNd0IsY0FBYzhGLFNBQVMsTUFBTTtBQUNyQ3RILGNBQU1nRCxPQUFPc0UsUUFBYmhMLE9BQUFDLE9BQUEsQ0FBQSxHQUNLeUQsTUFBTWdELE9BQU9zRSxPQUNiMUIsWUFBV3RKLE9BQUFDLE9BQUEsQ0FBQSxHQUNUdUssY0FEUztVQUVacFEsU0FBU3NKLE1BQU13QixjQUFjOEY7VUFDN0J0UCxVQUFVO1VBQ1ZnTyxVQUFVO1VBQ1ZDO1FBTFksQ0FBQSxDQUFBLENBRmhCO01BVUQ7QUFFRGpHLFlBQU0rQyxXQUFXM0osU0FBakJrRCxPQUFBQyxPQUFBLENBQUEsR0FDS3lELE1BQU0rQyxXQUFXM0osUUFEdEI7UUFFRSx5QkFBeUI0RyxNQUFNdkc7TUFGakMsQ0FBQTtJQUlEO0FBSUQsUUFBQThOLGtCQUFnQjtNQUNkek0sTUFBTTtNQUNONEksU0FBUztNQUNUaEksT0FBTztNQUNQRSxJQUFJcUw7TUFDSnhLLE1BQU0sQ0FBQTtJQUxRO0FDMU5oQixhQUFTK0ssWUFBVHZULE1BQXlEO0FBQUEsVUFBbEMrTCxRQUFrQy9MLEtBQWxDK0w7QUFDckIxRCxhQUFPSSxLQUFLc0QsTUFBTWUsUUFBbEIsRUFBNEJwRyxRQUFRLFNBQUNHLE1BQVM7QUFDNUMsWUFBTTJNLFFBQVF6SCxNQUFNZ0QsT0FBT2xJLElBQWIsS0FBc0IsQ0FBQTtBQUVwQyxZQUFNaUksYUFBYS9DLE1BQU0rQyxXQUFXakksSUFBakIsS0FBMEIsQ0FBQTtBQUM3QyxZQUFNdkgsVUFBVXlNLE1BQU1lLFNBQVNqRyxJQUFmO0FBR2hCLFlBQUksQ0FBQy9JLGNBQWN3QixPQUFELEtBQWEsQ0FBQzZCLFlBQVk3QixPQUFELEdBQVc7QUFDcEQ7UUFDRDtBQUtEK0ksZUFBT0MsT0FBT2hKLFFBQVFrVSxPQUFPQSxLQUE3QjtBQUVBbkwsZUFBT0ksS0FBS3FHLFVBQVosRUFBd0JwSSxRQUFRLFNBQUMrTSxPQUFTO0FBQ3hDLGNBQU03SCxRQUFRa0QsV0FBVzJFLEtBQUQ7QUFDeEIsY0FBSTdILFVBQVUsT0FBTztBQUNuQnRNLG9CQUFRb1UsZ0JBQWdCRCxLQUF4QjtVQUNELE9BQU07QUFDTG5VLG9CQUFRcVUsYUFBYUYsT0FBTTdILFVBQVUsT0FBTyxLQUFLQSxLQUFqRDtVQUNEO1FBQ0YsQ0FQRDtNQVFELENBeEJEO0lBeUJEO0FBRUQsYUFBU2dJLFNBQVRoQyxPQUFvRDtBQUFBLFVBQWxDN0YsUUFBa0M2RixNQUFsQzdGO0FBQ2hCLFVBQU04SCxnQkFBZ0I7UUFDcEIxTyxRQUFRO1VBQ05wQixVQUFVZ0ksTUFBTXhELFFBQVFLO1VBQ3hCeEksTUFBTTtVQUNORyxLQUFLO1VBQ0x1VCxRQUFRO1FBSkY7UUFNUlQsT0FBTztVQUNMdFAsVUFBVTtRQURMO1FBR1BxQixXQUFXLENBQUE7TUFWUztBQWF0QmlELGFBQU9DLE9BQU95RCxNQUFNZSxTQUFTM0gsT0FBT3FPLE9BQU9LLGNBQWMxTyxNQUF6RDtBQUNBNEcsWUFBTWdELFNBQVM4RTtBQUVmLFVBQUk5SCxNQUFNZSxTQUFTdUcsT0FBTztBQUN4QmhMLGVBQU9DLE9BQU95RCxNQUFNZSxTQUFTdUcsTUFBTUcsT0FBT0ssY0FBY1IsS0FBeEQ7TUFDRDtBQUVELGFBQU8sV0FBTTtBQUNYaEwsZUFBT0ksS0FBS3NELE1BQU1lLFFBQWxCLEVBQTRCcEcsUUFBUSxTQUFDRyxNQUFTO0FBQzVDLGNBQU12SCxVQUFVeU0sTUFBTWUsU0FBU2pHLElBQWY7QUFDaEIsY0FBTWlJLGFBQWEvQyxNQUFNK0MsV0FBV2pJLElBQWpCLEtBQTBCLENBQUE7QUFFN0MsY0FBTWtOLGtCQUFrQjFMLE9BQU9JLEtBQzdCc0QsTUFBTWdELE9BQU9zRCxlQUFleEwsSUFBNUIsSUFDSWtGLE1BQU1nRCxPQUFPbEksSUFBYixJQUNBZ04sY0FBY2hOLElBQUQsQ0FISztBQU94QixjQUFNMk0sUUFBUU8sZ0JBQWdCek8sT0FBTyxTQUFDME8sUUFBT0MsVUFBYTtBQUN4REQsbUJBQU1DLFFBQUQsSUFBYTtBQUNsQixtQkFBT0Q7VUFDUixHQUFFLENBQUEsQ0FIVztBQU1kLGNBQUksQ0FBQ2xXLGNBQWN3QixPQUFELEtBQWEsQ0FBQzZCLFlBQVk3QixPQUFELEdBQVc7QUFDcEQ7VUFDRDtBQUVEK0ksaUJBQU9DLE9BQU9oSixRQUFRa1UsT0FBT0EsS0FBN0I7QUFFQW5MLGlCQUFPSSxLQUFLcUcsVUFBWixFQUF3QnBJLFFBQVEsU0FBQ3dOLFdBQWM7QUFDN0M1VSxvQkFBUW9VLGdCQUFnQlEsU0FBeEI7VUFDRCxDQUZEO1FBR0QsQ0ExQkQ7TUEyQkQ7SUFDRjtBQUlELFFBQUFDLGdCQUFnQjtNQUNkdE4sTUFBTTtNQUNONEksU0FBUztNQUNUaEksT0FBTztNQUNQRSxJQUFJNEw7TUFDSjlDLFFBQUFtRDtNQUNBNU0sVUFBVSxDQUFDLGVBQUQ7SUFOSTtBQ3RFVCxhQUFTb04sd0JBQ2Q1TyxXQUNBcUgsT0FDQVksU0FDUztBQUNULFVBQU12QyxnQkFBZ0JOLGlCQUFpQnBGLFNBQUQ7QUFDdEMsVUFBTTZPLGlCQUFpQixDQUFDalUsTUFBTUcsR0FBUCxFQUFZNEMsUUFBUStILGFBQXBCLEtBQXNDLElBQUksS0FBSztBQUY3RCxVQUFBbEwsT0FLUCxPQUFPeU4sWUFBVyxhQUNkQSxRQUFNcEYsT0FBQUMsT0FBQSxDQUFBLEdBQ0R1RSxPQURDO1FBRUpySDtNQUZJLENBQUEsQ0FBQSxJQUlOaUksU0FORDZHLFdBSkl0VSxLQUFBLENBQUEsR0FJTXVVLFdBSk52VSxLQUFBLENBQUE7QUFZVHNVLGlCQUFXQSxZQUFZO0FBQ3ZCQyxrQkFBWUEsWUFBWSxLQUFLRjtBQUU3QixhQUFPLENBQUNqVSxNQUFNSyxLQUFQLEVBQWMwQyxRQUFRK0gsYUFBdEIsS0FBd0MsSUFDM0M7UUFBRS9LLEdBQUdvVTtRQUFValUsR0FBR2dVO01BQWxCLElBQ0E7UUFBRW5VLEdBQUdtVTtRQUFVaFUsR0FBR2lVO01BQWxCO0lBQ0w7QUFFRCxhQUFTL0csT0FBVG9FLE9BQXNFO0FBQUEsVUFBcEQ3RixRQUFvRDZGLE1BQXBEN0YsT0FBT3hELFVBQTZDcUosTUFBN0NySixTQUFTMUIsT0FBb0MrSyxNQUFwQy9LO0FBQW9DLFVBQUEyTixrQkFDeENqTSxRQUFwQmlGLFFBQUFDLFVBRDREK0csb0JBQUEsU0FDbkQsQ0FBQyxHQUFHLENBQUosSUFEbURBO0FBR3BFLFVBQU1oTSxPQUFPL0MsV0FBV0gsT0FBTyxTQUFDQyxLQUFLQyxXQUFjO0FBQ2pERCxZQUFJQyxTQUFELElBQWM0Tyx3QkFBd0I1TyxXQUFXdUcsTUFBTWMsT0FBT1ksT0FBekI7QUFDeEMsZUFBT2xJO01BQ1IsR0FBRSxDQUFBLENBSFU7QUFIdUQsVUFBQWtQLHdCQVFuRGpNLEtBQUt1RCxNQUFNdkcsU0FBUCxHQUFickYsSUFSNERzVSxzQkFRNUR0VSxHQUFHRyxJQVJ5RG1VLHNCQVF6RG5VO0FBRVgsVUFBSXlMLE1BQU13QixjQUFjOEQsaUJBQWlCLE1BQU07QUFDN0N0RixjQUFNd0IsY0FBYzhELGNBQWNsUixLQUFLQTtBQUN2QzRMLGNBQU13QixjQUFjOEQsY0FBYy9RLEtBQUtBO01BQ3hDO0FBRUR5TCxZQUFNd0IsY0FBYzFHLElBQXBCLElBQTRCMkI7SUFDN0I7QUFJRCxRQUFBa00sV0FBZ0I7TUFDZDdOLE1BQU07TUFDTjRJLFNBQVM7TUFDVGhJLE9BQU87TUFDUFQsVUFBVSxDQUFDLGVBQUQ7TUFDVlcsSUFBSTZGO0lBTFU7QUM3RGhCLFFBQU1tSCxTQUFPO01BQUV2VSxNQUFNO01BQVNLLE9BQU87TUFBUUMsUUFBUTtNQUFPSCxLQUFLO0lBQXBEO0FBRUUsYUFBU3FVLHFCQUFxQnBQLFdBQWlDO0FBQzVFLGFBQVFBLFVBQVVxUCxRQUNoQiwwQkFDQSxTQUFBQyxTQUFPO0FBQUEsZUFBSUgsT0FBS0csT0FBRDtNQUFSLENBRkQ7SUFJVDtBQ1BELFFBQU1DLE9BQU87TUFBRWhRLE9BQU87TUFBT0MsS0FBSztJQUFyQjtBQUVFLGFBQVNnUSw4QkFDdEJ4UCxXQUNXO0FBQ1gsYUFBUUEsVUFBVXFQLFFBQVEsY0FBYyxTQUFBQyxTQUFPO0FBQUEsZUFBSUMsS0FBS0QsT0FBRDtNQUFSLENBQXZDO0lBQ1Q7QUNtQmMsYUFBU0cscUJBQ3RCbEosT0FDQXhELFNBQzBCO0FBQUEsVUFEMUJBLFlBQzBCLFFBQUE7QUFEMUJBLGtCQUFtQixDQUFBO01BQ087QUFBQSxVQUFBeUQsV0FRdEJ6RCxTQU5GL0MsWUFGd0J3RyxTQUV4QnhHLFdBQ0E4RSxXQUh3QjBCLFNBR3hCMUIsVUFDQUMsZUFKd0J5QixTQUl4QnpCLGNBQ0FtQyxVQUx3QlYsU0FLeEJVLFNBQ0F3SSxpQkFOd0JsSixTQU14QmtKLGdCQU53QkMsd0JBQUFuSixTQU94Qm9KLHVCQUFBQSx3QkFQd0JELDBCQUFBLFNBT0ExUCxhQVBBMFA7QUFVMUIsVUFBTWhLLFlBQVlMLGFBQWF0RixTQUFEO0FBRTlCLFVBQU02UCxlQUFhbEssWUFDZitKLGlCQUNFN1Asc0JBQ0FBLG9CQUFvQlgsT0FDbEIsU0FBQzRRLFlBQUQ7QUFBQSxlQUFleEssYUFBYXdLLFVBQUQsTUFBZ0JuSztNQUEzQyxDQURGLElBR0ZyRztBQUVKLFVBQUl5USxvQkFBb0JGLGFBQVczUSxPQUNqQyxTQUFDNFEsWUFBRDtBQUFBLGVBQWVGLHNCQUFzQmpTLFFBQVFtUyxVQUE5QixLQUE0QztNQUEzRCxDQURzQjtBQUl4QixVQUFJQyxrQkFBa0J2SCxXQUFXLEdBQUc7QUFDbEN1SCw0QkFBb0JGO01BQ3JCO0FBR0QsVUFBTUcsWUFBMEJELGtCQUFrQmpRLE9BQU8sU0FBQ0MsS0FBSytQLFlBQWM7QUFDM0UvUCxZQUFJK1AsVUFBRCxJQUFjeEosZUFBZUMsT0FBTztVQUNyQ3ZHLFdBQUE4UDtVQUNBaEw7VUFDQUM7VUFDQW1DO1FBSnFDLENBQVIsRUFLNUI5QixpQkFBaUIwSyxVQUFELENBTEY7QUFPakIsZUFBTy9QO01BQ1IsR0FBRSxDQUFBLENBVDZCO0FBV2hDLGFBQU84QyxPQUFPSSxLQUFLK00sU0FBWixFQUF1QjFPLEtBQUssU0FBQzJPLEdBQUdDLEdBQUo7QUFBQSxlQUFVRixVQUFVQyxDQUFELElBQU1ELFVBQVVFLENBQUQ7TUFBbEMsQ0FBNUI7SUFDUjtBQ2hERCxhQUFTQyw4QkFBOEJuUSxXQUF3QztBQUM3RSxVQUFJb0YsaUJBQWlCcEYsU0FBRCxNQUFnQlgsTUFBTTtBQUN4QyxlQUFPLENBQUE7TUFDUjtBQUVELFVBQU0rUSxvQkFBb0JoQixxQkFBcUJwUCxTQUFEO0FBRTlDLGFBQU8sQ0FDTHdQLDhCQUE4QnhQLFNBQUQsR0FDN0JvUSxtQkFDQVosOEJBQThCWSxpQkFBRCxDQUh4QjtJQUtSO0FBRUQsYUFBU0MsS0FBVDdWLE1BQW9FO0FBQUEsVUFBcEQrTCxRQUFvRC9MLEtBQXBEK0wsT0FBT3hELFVBQTZDdkksS0FBN0N1SSxTQUFTMUIsT0FBb0M3RyxLQUFwQzZHO0FBQzlCLFVBQUlrRixNQUFNd0IsY0FBYzFHLElBQXBCLEVBQTBCaVAsT0FBTztBQUNuQztNQUNEO0FBSGlFLFVBQUFDLG9CQWU5RHhOLFFBVEYrQyxVQUFVMEssZ0JBTnNERCxzQkFBQSxTQU10QyxPQU5zQ0EsbUJBQUFFLG1CQWU5RDFOLFFBUkYyTixTQUFTQyxlQVB1REYscUJBQUEsU0FPeEMsT0FQd0NBLGtCQVE1Q0csOEJBT2xCN04sUUFQRjhOLG9CQUNBM0osVUFNRW5FLFFBTkZtRSxTQUNBcEMsV0FLRS9CLFFBTEYrQixVQUNBQyxlQUlFaEMsUUFKRmdDLGNBQ0FpQyxjQUdFakUsUUFIRmlFLGFBWmdFOEosd0JBZTlEL04sUUFGRjJNLGdCQUFBQSxpQkFiZ0VvQiwwQkFBQSxTQWEvQyxPQWIrQ0EsdUJBY2hFbEIsd0JBQ0U3TSxRQURGNk07QUFHRixVQUFNbUIscUJBQXFCeEssTUFBTXhELFFBQVEvQztBQUN6QyxVQUFNMEYsZ0JBQWdCTixpQkFBaUIyTCxrQkFBRDtBQUN0QyxVQUFNQyxrQkFBa0J0TCxrQkFBa0JxTDtBQUUxQyxVQUFNRixxQkFDSkQsZ0NBQ0NJLG1CQUFtQixDQUFDdEIsaUJBQ2pCLENBQUNOLHFCQUFxQjJCLGtCQUFELENBQXJCLElBQ0FaLDhCQUE4Qlksa0JBQUQ7QUFFbkMsVUFBTUUsY0FBYSxDQUFDRixrQkFBRCxFQUFBNVMsT0FBd0IwUyxrQkFBeEIsRUFBNEMvUSxPQUM3RCxTQUFDQyxLQUFLK1AsWUFBYztBQUNsQixlQUFPL1AsSUFBSTVCLE9BQ1RpSCxpQkFBaUIwSyxVQUFELE1BQWdCelEsT0FDNUJvUSxxQkFBcUJsSixPQUFPO1VBQzFCdkcsV0FBQThQO1VBQ0FoTDtVQUNBQztVQUNBbUM7VUFDQXdJO1VBQ0FFO1FBTjBCLENBQVIsSUFRcEJFLFVBVkM7TUFZUixHQUNELENBQUEsQ0FmaUI7QUFrQm5CLFVBQU1vQixnQkFBZ0IzSyxNQUFNYyxNQUFNekg7QUFDbEMsVUFBTXdILGFBQWFiLE1BQU1jLE1BQU0xSDtBQUUvQixVQUFNd1IsWUFBWSxvQkFBSXJRLElBQUo7QUFDbEIsVUFBSXNRLHFCQUFxQjtBQUN6QixVQUFJQyx3QkFBd0JKLFlBQVcsQ0FBRDtBQUV0QyxlQUFTSyxJQUFJLEdBQUdBLElBQUlMLFlBQVd6SSxRQUFROEksS0FBSztBQUMxQyxZQUFNdFIsWUFBWWlSLFlBQVdLLENBQUQ7QUFDNUIsWUFBTUMsaUJBQWdCbk0saUJBQWlCcEYsU0FBRDtBQUN0QyxZQUFNd1IsbUJBQW1CbE0sYUFBYXRGLFNBQUQsTUFBZ0JUO0FBQ3JELFlBQU1rUyxhQUFhLENBQUMxVyxLQUFLRyxNQUFOLEVBQWN5QyxRQUFRNFQsY0FBdEIsS0FBd0M7QUFDM0QsWUFBTXhMLE1BQU0wTCxhQUFhLFVBQVU7QUFFbkMsWUFBTXBWLFdBQVdpSyxlQUFlQyxPQUFPO1VBQ3JDdkc7VUFDQThFO1VBQ0FDO1VBQ0FpQztVQUNBRTtRQUxxQyxDQUFSO0FBUS9CLFlBQUl3SyxvQkFBeUJELGFBQ3pCRCxtQkFDRXZXLFFBQ0FMLE9BQ0Y0VyxtQkFDQXRXLFNBQ0FIO0FBRUosWUFBSW1XLGNBQWNuTCxHQUFELElBQVFxQixXQUFXckIsR0FBRCxHQUFPO0FBQ3hDMkwsOEJBQW9CdEMscUJBQXFCc0MsaUJBQUQ7UUFDekM7QUFFRCxZQUFNQyxtQkFBd0J2QyxxQkFBcUJzQyxpQkFBRDtBQUVsRCxZQUFNRSxTQUFTLENBQUE7QUFFZixZQUFJcEIsZUFBZTtBQUNqQm9CLGlCQUFPOVAsS0FBS3pGLFNBQVNrVixjQUFELEtBQW1CLENBQXZDO1FBQ0Q7QUFFRCxZQUFJWixjQUFjO0FBQ2hCaUIsaUJBQU85UCxLQUNMekYsU0FBU3FWLGlCQUFELEtBQXVCLEdBQy9CclYsU0FBU3NWLGdCQUFELEtBQXNCLENBRmhDO1FBSUQ7QUFFRCxZQUFJQyxPQUFPQyxNQUFNLFNBQUNDLE9BQUQ7QUFBQSxpQkFBV0E7UUFBWCxDQUFiLEdBQWdDO0FBQ2xDVCxrQ0FBd0JyUjtBQUN4Qm9SLCtCQUFxQjtBQUNyQjtRQUNEO0FBRURELGtCQUFVL1AsSUFBSXBCLFdBQVc0UixNQUF6QjtNQUNEO0FBRUQsVUFBSVIsb0JBQW9CO0FBRXRCLFlBQU1XLGlCQUFpQnJDLGlCQUFpQixJQUFJO0FBRnRCLFlBQUFzQyxRQUFBLFNBQUFDLE9BSWJDLEtBSmE7QUFLcEIsY0FBTUMsbUJBQW1CbEIsWUFBV21CLEtBQUssU0FBQ3RDLFlBQWM7QUFDdEQsZ0JBQU11QyxVQUFTbEIsVUFBVXRQLElBQUlpTyxVQUFkO0FBQ2YsZ0JBQUl1QyxTQUFRO0FBQ1YscUJBQU9BLFFBQU9DLE1BQU0sR0FBR0osR0FBaEIsRUFBbUJMLE1BQU0sU0FBQ0MsT0FBRDtBQUFBLHVCQUFXQTtjQUFYLENBQXpCO1lBQ1I7VUFDRixDQUx3QjtBQU96QixjQUFJSyxrQkFBa0I7QUFDcEJkLG9DQUF3QmM7QUFDeEIsbUJBQUE7VUFDRDtRQWZtQjtBQUl0QixpQkFBU0ksS0FBSVIsZ0JBQWdCUSxLQUFJLEdBQUdBLE1BQUs7QUFBQSxjQUFBQyxPQUFBUixNQUFoQ08sRUFBZ0M7QUFBQSxjQUFBQyxTQUFBO0FBVXJDO1FBRUg7TUFDRjtBQUVELFVBQUlqTSxNQUFNdkcsY0FBY3FSLHVCQUF1QjtBQUM3QzlLLGNBQU13QixjQUFjMUcsSUFBcEIsRUFBMEJpUCxRQUFRO0FBQ2xDL0osY0FBTXZHLFlBQVlxUjtBQUNsQjlLLGNBQU1pRSxRQUFRO01BQ2Y7SUFDRjtBQUlELFFBQUFpSSxTQUFnQjtNQUNkcFIsTUFBTTtNQUNONEksU0FBUztNQUNUaEksT0FBTztNQUNQRSxJQUFJa087TUFDSjVPLGtCQUFrQixDQUFDLFFBQUQ7TUFDbEJ1QixNQUFNO1FBQUVzTixPQUFPO01BQVQ7SUFOUTtBQ3ZLRCxhQUFTb0MsV0FBV3ZLLE1BQTRCO0FBQzdELGFBQU9BLFNBQVMsTUFBTSxNQUFNO0lBQzdCO0FDRE0sYUFBU3dLLE9BQU9DLE9BQWF4TSxPQUFleU0sT0FBcUI7QUFDdEUsYUFBT25hLElBQVFrYSxPQUFLaGEsSUFBUXdOLE9BQU95TSxLQUFSLENBQWI7SUFDZjtBQUVNLGFBQVNDLGVBQWVDLE1BQWEzTSxPQUFlNE0sTUFBYTtBQUN0RSxVQUFNQyxJQUFJTixPQUFPSSxNQUFLM00sT0FBTzRNLElBQWI7QUFDaEIsYUFBT0MsSUFBSUQsT0FBTUEsT0FBTUM7SUFDeEI7QUNxQ0QsYUFBU0MsZ0JBQVQxWSxNQUErRTtBQUFBLFVBQXBEK0wsUUFBb0QvTCxLQUFwRCtMLE9BQU94RCxVQUE2Q3ZJLEtBQTdDdUksU0FBUzFCLE9BQW9DN0csS0FBcEM2RztBQUFvQyxVQUFBa1Asb0JBVXpFeE4sUUFSRitDLFVBQVUwSyxnQkFGaUVELHNCQUFBLFNBRWpELE9BRmlEQSxtQkFBQUUsbUJBVXpFMU4sUUFQRjJOLFNBQVNDLGVBSGtFRixxQkFBQSxTQUduRCxRQUhtREEsa0JBSTNFM0wsV0FNRS9CLFFBTkYrQixVQUNBQyxlQUtFaEMsUUFMRmdDLGNBQ0FpQyxjQUlFakUsUUFKRmlFLGFBQ0FFLFVBR0VuRSxRQUhGbUUsU0FQMkVpTSxrQkFVekVwUSxRQUZGcVEsUUFBQUEsU0FSMkVELG9CQUFBLFNBUWxFLE9BUmtFQSxpQkFBQUUsd0JBVXpFdFEsUUFERnVRLGNBQUFBLGVBVDJFRCwwQkFBQSxTQVM1RCxJQVQ0REE7QUFZN0UsVUFBTWhYLFdBQVdpSyxlQUFlQyxPQUFPO1FBQ3JDekI7UUFDQUM7UUFDQW1DO1FBQ0FGO01BSnFDLENBQVI7QUFNL0IsVUFBTXRCLGdCQUFnQk4saUJBQWlCbUIsTUFBTXZHLFNBQVA7QUFDdEMsVUFBTTJGLFlBQVlMLGFBQWFpQixNQUFNdkcsU0FBUDtBQUM5QixVQUFNZ1Isa0JBQWtCLENBQUNyTDtBQUN6QixVQUFNRyxXQUFXUCx5QkFBeUJHLGFBQUQ7QUFDekMsVUFBTWdMLFVBQVVnQyxXQUFXNU0sUUFBRDtBQUMxQixVQUFNNEIsaUJBQWdCbkIsTUFBTXdCLGNBQWM4RDtBQUMxQyxVQUFNcUYsZ0JBQWdCM0ssTUFBTWMsTUFBTXpIO0FBQ2xDLFVBQU13SCxhQUFhYixNQUFNYyxNQUFNMUg7QUFDL0IsVUFBTTRULG9CQUNKLE9BQU9ELGlCQUFpQixhQUNwQkEsYUFBWXpRLE9BQUFDLE9BQUEsQ0FBQSxHQUNQeUQsTUFBTWMsT0FEQztRQUVWckgsV0FBV3VHLE1BQU12RztNQUZQLENBQUEsQ0FBQSxJQUlac1Q7QUFDTixVQUFNRSw4QkFDSixPQUFPRCxzQkFBc0IsV0FDekI7UUFBRXpOLFVBQVV5TjtRQUFtQjdDLFNBQVM2QztNQUF4QyxJQURKMVEsT0FBQUMsT0FBQTtRQUVNZ0QsVUFBVTtRQUFHNEssU0FBUztNQUY1QixHQUVrQzZDLGlCQUZsQztBQUdGLFVBQU1FLHNCQUFzQmxOLE1BQU13QixjQUFjQyxTQUM1Q3pCLE1BQU13QixjQUFjQyxPQUFPekIsTUFBTXZHLFNBQWpDLElBQ0E7QUFFSixVQUFNZ0QsT0FBTztRQUFFckksR0FBRztRQUFHRyxHQUFHO01BQVg7QUFFYixVQUFJLENBQUM0TSxnQkFBZTtBQUNsQjtNQUNEO0FBRUQsVUFBSThJLGVBQWU7QUFBQSxZQUFBa0Q7QUFDakIsWUFBTUMsV0FBVzdOLGFBQWEsTUFBTS9LLE1BQU1IO0FBQzFDLFlBQU1nWixVQUFVOU4sYUFBYSxNQUFNNUssU0FBU0Q7QUFDNUMsWUFBTThLLE1BQU1ELGFBQWEsTUFBTSxXQUFXO0FBQzFDLFlBQU1tQyxVQUFTUCxlQUFjNUIsUUFBRDtBQUU1QixZQUFNOE0sUUFBTTNLLFVBQVM1TCxTQUFTc1gsUUFBRDtBQUM3QixZQUFNZCxRQUFNNUssVUFBUzVMLFNBQVN1WCxPQUFEO0FBRTdCLFlBQU1DLFdBQVdULFNBQVMsQ0FBQ2hNLFdBQVdyQixHQUFELElBQVEsSUFBSTtBQUVqRCxZQUFNK04sU0FBU25PLGNBQWNwRyxRQUFRMlIsY0FBY25MLEdBQUQsSUFBUXFCLFdBQVdyQixHQUFEO0FBQ3BFLFlBQU1nTyxTQUFTcE8sY0FBY3BHLFFBQVEsQ0FBQzZILFdBQVdyQixHQUFELElBQVEsQ0FBQ21MLGNBQWNuTCxHQUFEO0FBSXRFLFlBQU1pTyxlQUFlek4sTUFBTWUsU0FBU3VHO0FBQ3BDLFlBQU1vRyxZQUNKYixVQUFVWSxlQUNONVcsY0FBYzRXLFlBQUQsSUFDYjtVQUFFM1osT0FBTztVQUFHRSxRQUFRO1FBQXBCO0FBQ04sWUFBTTJaLHFCQUFxQjNOLE1BQU13QixjQUFjLGtCQUFwQixJQUN2QnhCLE1BQU13QixjQUFjLGtCQUFwQixFQUF3Q2IsVUFDeENsQixtQkFBa0I7QUFDdEIsWUFBTW1PLGtCQUFrQkQsbUJBQW1CUCxRQUFEO0FBQzFDLFlBQU1TLGtCQUFrQkYsbUJBQW1CTixPQUFEO0FBTzFDLFlBQU1TLFdBQVcxQixPQUFPLEdBQUd6QixjQUFjbkwsR0FBRCxHQUFPa08sVUFBVWxPLEdBQUQsQ0FBakM7QUFFdkIsWUFBTXVPLFlBQVl0RCxrQkFDZEUsY0FBY25MLEdBQUQsSUFBUSxJQUNyQjhOLFdBQ0FRLFdBQ0FGLGtCQUNBWCw0QkFBNEIxTixXQUM1QmdPLFNBQ0FPLFdBQ0FGLGtCQUNBWCw0QkFBNEIxTjtBQUNoQyxZQUFNeU8sWUFBWXZELGtCQUNkLENBQUNFLGNBQWNuTCxHQUFELElBQVEsSUFDdEI4TixXQUNBUSxXQUNBRCxrQkFDQVosNEJBQTRCMU4sV0FDNUJpTyxTQUNBTSxXQUNBRCxrQkFDQVosNEJBQTRCMU47QUFFaEMsWUFBTTBPLG9CQUNKak8sTUFBTWUsU0FBU3VHLFNBQVMxTyxnQkFBZ0JvSCxNQUFNZSxTQUFTdUcsS0FBaEI7QUFDekMsWUFBTTRHLGVBQWVELG9CQUNqQjFPLGFBQWEsTUFDWDBPLGtCQUFrQnJYLGFBQWEsSUFDL0JxWCxrQkFBa0J0WCxjQUFjLElBQ2xDO0FBRUosWUFBTXdYLHVCQUFtQmhCLHdCQUFHRCx1QkFBSCxPQUFBLFNBQUdBLG9CQUFzQjNOLFFBQUgsTUFBdEIsT0FBQTROLHdCQUFzQztBQUMvRCxZQUFNaUIsWUFBWTFNLFVBQVNxTSxZQUFZSSxzQkFBc0JEO0FBQzdELFlBQU1HLFlBQVkzTSxVQUFTc00sWUFBWUc7QUFFdkMsWUFBTUcsa0JBQWtCbEMsT0FDdEJTLFNBQVN4YSxJQUFRZ2EsT0FBSytCLFNBQU4sSUFBbUIvQixPQUNuQzNLLFNBQ0FtTCxTQUFTMWEsSUFBUW1hLE9BQUsrQixTQUFOLElBQW1CL0IsS0FIUDtBQU05Qm5MLHVCQUFjNUIsUUFBRCxJQUFhK087QUFDMUI3UixhQUFLOEMsUUFBRCxJQUFhK08sa0JBQWtCNU07TUFDcEM7QUFFRCxVQUFJMEksY0FBYztBQUFBLFlBQUFtRTtBQUNoQixZQUFNQyxZQUFXalAsYUFBYSxNQUFNL0ssTUFBTUg7QUFDMUMsWUFBTW9hLFdBQVVsUCxhQUFhLE1BQU01SyxTQUFTRDtBQUM1QyxZQUFNZ2EsVUFBU3ZOLGVBQWNnSixPQUFEO0FBRTVCLFlBQU1wSSxPQUFNb0ksWUFBWSxNQUFNLFdBQVc7QUFFekMsWUFBTXdFLE9BQU1ELFVBQVM1WSxTQUFTMFksU0FBRDtBQUM3QixZQUFNSSxPQUFNRixVQUFTNVksU0FBUzJZLFFBQUQ7QUFFN0IsWUFBTUksZUFBZSxDQUFDcmEsS0FBS0gsSUFBTixFQUFZK0MsUUFBUStILGFBQXBCLE1BQXVDO0FBRTVELFlBQU0yUCx3QkFBbUJQLHlCQUFHckIsdUJBQUgsT0FBQSxTQUFHQSxvQkFBc0IvQyxPQUFILE1BQXRCLE9BQUFvRSx5QkFBcUM7QUFDOUQsWUFBTVEsYUFBWUYsZUFDZEYsT0FDQUQsVUFDQS9ELGNBQWM1SSxJQUFELElBQ2JsQixXQUFXa0IsSUFBRCxJQUNWK00sdUJBQ0E3Qiw0QkFBNEI5QztBQUNoQyxZQUFNNkUsYUFBWUgsZUFDZEgsVUFDQS9ELGNBQWM1SSxJQUFELElBQ2JsQixXQUFXa0IsSUFBRCxJQUNWK00sdUJBQ0E3Qiw0QkFBNEI5QyxVQUM1QnlFO0FBRUosWUFBTUssbUJBQ0pwQyxVQUFVZ0MsZUFDTnRDLGVBQWV3QyxZQUFXTCxTQUFRTSxVQUFwQixJQUNkNUMsT0FBT1MsU0FBU2tDLGFBQVlKLE1BQUtELFNBQVE3QixTQUFTbUMsYUFBWUosSUFBeEQ7QUFFWnpOLHVCQUFjZ0osT0FBRCxJQUFZOEU7QUFDekJ4UyxhQUFLME4sT0FBRCxJQUFZOEUsbUJBQWtCUDtNQUNuQztBQUVEMU8sWUFBTXdCLGNBQWMxRyxJQUFwQixJQUE0QjJCO0lBQzdCO0FBSUQsUUFBQXlTLG9CQUFnQjtNQUNkcFUsTUFBTTtNQUNONEksU0FBUztNQUNUaEksT0FBTztNQUNQRSxJQUFJK1E7TUFDSnpSLGtCQUFrQixDQUFDLFFBQUQ7SUFMSjtBQzVMaEIsUUFBTWlVLGtCQUFrQixTQUFsQkMsaUJBQW1Cek8sU0FBU1gsT0FBVTtBQUMxQ1csZ0JBQ0UsT0FBT0EsWUFBWSxhQUNmQSxRQUFPckUsT0FBQUMsT0FBQSxDQUFBLEdBQU15RCxNQUFNYyxPQUFaO1FBQW1CckgsV0FBV3VHLE1BQU12RztNQUFwQyxDQUFBLENBQUEsSUFDUGtIO0FBRU4sYUFBT2pCLG1CQUNMLE9BQU9pQixZQUFZLFdBQ2ZBLFVBQ0FmLGdCQUFnQmUsU0FBUzVILGNBQVYsQ0FISTtJQUsxQjtBQUVELGFBQVN1TyxNQUFUclQsTUFBcUU7QUFBQSxVQUFBb2I7QUFBQSxVQUFwRHJQLFFBQW9EL0wsS0FBcEQrTCxPQUFPbEYsT0FBNkM3RyxLQUE3QzZHLE1BQU0wQixVQUF1Q3ZJLEtBQXZDdUk7QUFDNUIsVUFBTWlSLGVBQWV6TixNQUFNZSxTQUFTdUc7QUFDcEMsVUFBTW5HLGlCQUFnQm5CLE1BQU13QixjQUFjOEQ7QUFDMUMsVUFBTW5HLGdCQUFnQk4saUJBQWlCbUIsTUFBTXZHLFNBQVA7QUFDdEMsVUFBTW1JLE9BQU81Qyx5QkFBeUJHLGFBQUQ7QUFDckMsVUFBTStMLGFBQWEsQ0FBQzdXLE1BQU1LLEtBQVAsRUFBYzBDLFFBQVErSCxhQUF0QixLQUF3QztBQUMzRCxVQUFNSyxNQUFNMEwsYUFBYSxXQUFXO0FBRXBDLFVBQUksQ0FBQ3VDLGdCQUFnQixDQUFDdE0sZ0JBQWU7QUFDbkM7TUFDRDtBQUVELFVBQU14QixnQkFBZ0J3UCxnQkFBZ0IzUyxRQUFRbUUsU0FBU1gsS0FBbEI7QUFDckMsVUFBTTBOLFlBQVk3VyxjQUFjNFcsWUFBRDtBQUMvQixVQUFNNkIsVUFBVTFOLFNBQVMsTUFBTXBOLE1BQU1IO0FBQ3JDLFVBQU1rYixVQUFVM04sU0FBUyxNQUFNak4sU0FBU0Q7QUFFeEMsVUFBTThhLFVBQ0p4UCxNQUFNYyxNQUFNekgsVUFBVW1HLEdBQXRCLElBQ0FRLE1BQU1jLE1BQU16SCxVQUFVdUksSUFBdEIsSUFDQVQsZUFBY1MsSUFBRCxJQUNiNUIsTUFBTWMsTUFBTTFILE9BQU9vRyxHQUFuQjtBQUNGLFVBQU1pUSxZQUFZdE8sZUFBY1MsSUFBRCxJQUFTNUIsTUFBTWMsTUFBTXpILFVBQVV1SSxJQUF0QjtBQUV4QyxVQUFNcU0sb0JBQW9CclYsZ0JBQWdCNlUsWUFBRDtBQUN6QyxVQUFNaUMsYUFBYXpCLG9CQUNmck0sU0FBUyxNQUNQcU0sa0JBQWtCalIsZ0JBQWdCLElBQ2xDaVIsa0JBQWtCbFIsZUFBZSxJQUNuQztBQUVKLFVBQU00UyxvQkFBb0JILFVBQVUsSUFBSUMsWUFBWTtBQUlwRCxVQUFNakQsT0FBTTdNLGNBQWMyUCxPQUFEO0FBQ3pCLFVBQU03QyxPQUFNaUQsYUFBYWhDLFVBQVVsTyxHQUFELElBQVFHLGNBQWM0UCxPQUFEO0FBQ3ZELFVBQU1LLFNBQVNGLGFBQWEsSUFBSWhDLFVBQVVsTyxHQUFELElBQVEsSUFBSW1RO0FBQ3JELFVBQU1qTyxVQUFTMEssT0FBT0ksTUFBS29ELFFBQVFuRCxJQUFkO0FBR3JCLFVBQU1vRCxXQUFtQmpPO0FBQ3pCNUIsWUFBTXdCLGNBQWMxRyxJQUFwQixLQUFBdVUsd0JBQUEsQ0FBQSxHQUFBQSxzQkFDR1EsUUFESCxJQUNjbk8sU0FEZDJOLHNCQUVFUyxlQUFjcE8sVUFBU2tPLFFBRnpCUDtJQUlEO0FBRUQsYUFBUzNLLE9BQVRtQixPQUFnRTtBQUFBLFVBQTlDN0YsUUFBOEM2RixNQUE5QzdGLE9BQU94RCxVQUF1Q3FKLE1BQXZDcko7QUFBdUMsVUFBQXVULG1CQUNOdlQsUUFBbERqSixTQUFTa2EsZUFEK0NzQyxxQkFBQSxTQUNoQyx3QkFEZ0NBO0FBRzlELFVBQUl0QyxnQkFBZ0IsTUFBTTtBQUN4QjtNQUNEO0FBR0QsVUFBSSxPQUFPQSxpQkFBaUIsVUFBVTtBQUNwQ0EsdUJBQWV6TixNQUFNZSxTQUFTM0gsT0FBTzRXLGNBQWN2QyxZQUFwQztBQUVmLFlBQUksQ0FBQ0EsY0FBYztBQUNqQjtRQUNEO01BQ0Y7QUFFRCxVQUFJLENBQUNsUSxTQUFTeUMsTUFBTWUsU0FBUzNILFFBQVFxVSxZQUF4QixHQUF1QztBQUNsRDtNQUNEO0FBRUR6TixZQUFNZSxTQUFTdUcsUUFBUW1HO0lBQ3hCO0FBSUQsUUFBQXdDLFVBQWdCO01BQ2RuVixNQUFNO01BQ040SSxTQUFTO01BQ1RoSSxPQUFPO01BQ1BFLElBQUkwTDtNQUNKNUM7TUFDQXpKLFVBQVUsQ0FBQyxlQUFEO01BQ1ZDLGtCQUFrQixDQUFDLGlCQUFEO0lBUEo7QUNwR2hCLGFBQVNnVixlQUNQcGEsVUFDQUksTUFDQWlhLGtCQUNZO0FBQUEsVUFEWkEscUJBQ1ksUUFBQTtBQURaQSwyQkFBNEI7VUFBRS9iLEdBQUc7VUFBR0csR0FBRztRQUFYO01BQ2hCO0FBQ1osYUFBTztRQUNMQyxLQUFLc0IsU0FBU3RCLE1BQU0wQixLQUFLbEMsU0FBU21jLGlCQUFpQjViO1FBQ25ERyxPQUFPb0IsU0FBU3BCLFFBQVF3QixLQUFLcEMsUUFBUXFjLGlCQUFpQi9iO1FBQ3RETyxRQUFRbUIsU0FBU25CLFNBQVN1QixLQUFLbEMsU0FBU21jLGlCQUFpQjViO1FBQ3pERixNQUFNeUIsU0FBU3pCLE9BQU82QixLQUFLcEMsUUFBUXFjLGlCQUFpQi9iO01BSi9DO0lBTVI7QUFFRCxhQUFTZ2Msc0JBQXNCdGEsVUFBK0I7QUFDNUQsYUFBTyxDQUFDdEIsS0FBS0UsT0FBT0MsUUFBUU4sSUFBckIsRUFBMkIrTixLQUFLLFNBQUNpTyxNQUFEO0FBQUEsZUFBVXZhLFNBQVN1YSxJQUFELEtBQVU7TUFBNUIsQ0FBaEM7SUFDUjtBQUVELGFBQVNDLEtBQVRyYyxNQUF3RDtBQUFBLFVBQXhDK0wsUUFBd0MvTCxLQUF4QytMLE9BQU9sRixPQUFpQzdHLEtBQWpDNkc7QUFDckIsVUFBTTZQLGdCQUFnQjNLLE1BQU1jLE1BQU16SDtBQUNsQyxVQUFNd0gsYUFBYWIsTUFBTWMsTUFBTTFIO0FBQy9CLFVBQU0rVyxtQkFBbUJuUSxNQUFNd0IsY0FBY21MO0FBRTdDLFVBQU00RCxvQkFBb0J4USxlQUFlQyxPQUFPO1FBQzlDTyxnQkFBZ0I7TUFEOEIsQ0FBUjtBQUd4QyxVQUFNaVEsb0JBQW9CelEsZUFBZUMsT0FBTztRQUM5Q1MsYUFBYTtNQURpQyxDQUFSO0FBSXhDLFVBQU1nUSwyQkFBMkJQLGVBQy9CSyxtQkFDQTVGLGFBRjZDO0FBSS9DLFVBQU0rRixzQkFBc0JSLGVBQzFCTSxtQkFDQTNQLFlBQ0FzUCxnQkFId0M7QUFNMUMsVUFBTVEsb0JBQW9CUCxzQkFBc0JLLHdCQUFEO0FBQy9DLFVBQU1HLG1CQUFtQlIsc0JBQXNCTSxtQkFBRDtBQUU5QzFRLFlBQU13QixjQUFjMUcsSUFBcEIsSUFBNEI7UUFDMUIyVjtRQUNBQztRQUNBQztRQUNBQztNQUowQjtBQU81QjVRLFlBQU0rQyxXQUFXM0osU0FBakJrRCxPQUFBQyxPQUFBLENBQUEsR0FDS3lELE1BQU0rQyxXQUFXM0osUUFEdEI7UUFFRSxnQ0FBZ0N1WDtRQUNoQyx1QkFBdUJDO01BSHpCLENBQUE7SUFLRDtBQUlELFFBQUFDLFNBQWdCO01BQ2QvVixNQUFNO01BQ040SSxTQUFTO01BQ1RoSSxPQUFPO01BQ1BSLGtCQUFrQixDQUFDLGlCQUFEO01BQ2xCVSxJQUFJMFU7SUFMVTtBQzNEaEIsUUFBTVEscUJBQW1CLENBQ3ZCekwsZ0JBQ0FFLGlCQUNBZ0MsaUJBQ0FhLGFBSnVCO1FBT25CMkksaUJBQWUxTyxnQ0FBZ0I7TUFBRUksa0JBQUFxTztJQUFGLENBQUQ7UUNGOUJyTyxtQkFBbUIsQ0FDdkI0QyxnQkFDQUUsaUJBQ0FnQyxpQkFDQWEsZUFDQU8sVUFDQXVELFFBQ0FnRCxtQkFDQWUsU0FDQVksTUFUdUI7UUFZbkJHLGVBQWUzTyxnQ0FBZ0I7TUFBRUk7SUFBRixDQUFEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUMzQnZCd08sY0FDWDtBQUVLLFFBQU1DLFlBQVM7QUFDZixRQUFNQyxnQkFBYTtBQUNuQixRQUFNQyxpQkFBYztBQUNwQixRQUFNQyxjQUFXO0FBQ2pCLFFBQU1DLGtCQUFlO0FBRXJCLFFBQU1DLGdCQUFnQjtNQUFDek0sU0FBUztNQUFNME0sU0FBUztJQUF6QjtBQUV0QixRQUFNQywwQkFBMEIsU0FBMUJDLDJCQUEwQjtBQUFBLGFBQU1sYyxTQUFTNkI7SUFBZjtBQ0ZoQyxhQUFTc2Esd0JBQ2Q5UixPQUNBcUUsT0FDQTBOLGNBQ0c7QUFDSCxVQUFJaGYsTUFBTUMsUUFBUWdOLEtBQWQsR0FBc0I7QUFDeEIsWUFBTTZNLElBQUk3TSxNQUFNcUUsS0FBRDtBQUNmLGVBQU93SSxLQUFLLE9BQ1I5WixNQUFNQyxRQUFRK2UsWUFBZCxJQUNFQSxhQUFhMU4sS0FBRCxJQUNaME4sZUFDRmxGO01BQ0w7QUFFRCxhQUFPN007SUFDUjtBQUVNLGFBQVNnUyxPQUFPaFMsT0FBWWlTLE1BQXVCO0FBQ3hELFVBQU1DLE1BQU0sQ0FBQSxFQUFHdGdCLFNBQVN1Z0IsS0FBS25TLEtBQWpCO0FBQ1osYUFBT2tTLElBQUkzYSxRQUFRLFNBQVosTUFBMkIsS0FBSzJhLElBQUkzYSxRQUFXMGEsT0FBZixHQUFBLElBQTBCO0lBQ2xFO0FBRU0sYUFBU0csdUJBQXVCcFMsT0FBWXFDLE1BQWtCO0FBQ25FLGFBQU8sT0FBT3JDLFVBQVUsYUFBYUEsTUFBS3FTLE1BQUwsUUFBU2hRLElBQVQsSUFBaUJyQztJQUN2RDtBQUVNLGFBQVNsRSxTQUNkQyxJQUNBdVcsSUFDa0I7QUFFbEIsVUFBSUEsT0FBTyxHQUFHO0FBQ1osZUFBT3ZXO01BQ1I7QUFFRCxVQUFJd1c7QUFFSixhQUFPLFNBQUNDLEtBQWM7QUFDcEJDLHFCQUFhRixPQUFEO0FBQ1pBLGtCQUFVRyxXQUFXLFdBQU07QUFDekIzVyxhQUFHeVcsR0FBRDtRQUNILEdBQUVGLEVBRmlCO01BR3JCO0lBQ0Y7QUFFTSxhQUFTSyxpQkFBb0JDLEtBQVEvVixNQUE0QjtBQUN0RSxVQUFNZ1csUUFBS3BXLE9BQUFDLE9BQUEsQ0FBQSxHQUFPa1csR0FBUDtBQUNYL1YsV0FBSy9CLFFBQVEsU0FBQ2dDLEtBQVE7QUFDcEIsZUFBUStWLE1BQWMvVixHQUFmO01BQ1IsQ0FGRDtBQUdBLGFBQU8rVjtJQUNSO0FBRU0sYUFBU0MsY0FBYzlTLE9BQXlCO0FBQ3JELGFBQU9BLE1BQU1mLE1BQU0sS0FBWixFQUFtQm5HLE9BQU9pYSxPQUExQjtJQUNSO0FBRU0sYUFBU0MsaUJBQW9CaFQsT0FBcUI7QUFDdkQsYUFBUSxDQUFBLEVBQVdqSSxPQUFPaUksS0FBbkI7SUFDUjtBQUVNLGFBQVNpVCxhQUFnQkMsS0FBVWxULE9BQWdCO0FBQ3hELFVBQUlrVCxJQUFJM2IsUUFBUXlJLEtBQVosTUFBdUIsSUFBSTtBQUM3QmtULFlBQUl4WCxLQUFLc0UsS0FBVDtNQUNEO0lBQ0Y7QUFNTSxhQUFTbVQsT0FBVUQsS0FBZTtBQUN2QyxhQUFPQSxJQUFJcGEsT0FBTyxTQUFDNUYsTUFBTW1SLE9BQVA7QUFBQSxlQUFpQjZPLElBQUkzYixRQUFRckUsSUFBWixNQUFzQm1SO01BQXZDLENBQVg7SUFDUjtBQU1NLGFBQVNyRixpQkFBaUJwRixXQUFxQztBQUNwRSxhQUFPQSxVQUFVcUYsTUFBTSxHQUFoQixFQUFxQixDQUFyQjtJQUNSO0FBRU0sYUFBU21VLFVBQVVwVCxPQUE4QjtBQUN0RCxhQUFPLENBQUEsRUFBR2tNLE1BQU1pRyxLQUFLblMsS0FBZDtJQUNSO0FBRU0sYUFBU3FULHFCQUNkVCxLQUNrQztBQUNsQyxhQUFPblcsT0FBT0ksS0FBSytWLEdBQVosRUFBaUJsWixPQUFPLFNBQUNDLEtBQUttRCxLQUFRO0FBQzNDLFlBQUk4VixJQUFJOVYsR0FBRCxNQUFVLFFBQVc7QUFDekJuRCxjQUFZbUQsR0FBYixJQUFvQjhWLElBQUk5VixHQUFEO1FBQ3hCO0FBRUQsZUFBT25EO01BQ1IsR0FBRSxDQUFBLENBTkk7SUFPUjtBQ3RHTSxhQUFTMlosTUFBc0I7QUFDcEMsYUFBTzNkLFNBQVM0ZCxjQUFjLEtBQXZCO0lBQ1I7QUFFTSxhQUFTeGhCLFVBQVVpTyxPQUFxRDtBQUM3RSxhQUFPLENBQUMsV0FBVyxVQUFaLEVBQXdCdUMsS0FBSyxTQUFDMFAsTUFBRDtBQUFBLGVBQVVELE9BQU9oUyxPQUFPaVMsSUFBUjtNQUFoQixDQUE3QjtJQUNSO0FBRU0sYUFBU3VCLFdBQVd4VCxPQUFtQztBQUM1RCxhQUFPZ1MsT0FBT2hTLE9BQU8sVUFBUjtJQUNkO0FBRU0sYUFBU3lULGFBQWF6VCxPQUFxQztBQUNoRSxhQUFPZ1MsT0FBT2hTLE9BQU8sWUFBUjtJQUNkO0FBRU0sYUFBUzBULG1CQUFtQjFULE9BQXVDO0FBQ3hFLGFBQU8sQ0FBQyxFQUFFQSxTQUFTQSxNQUFNMlQsVUFBVTNULE1BQU0yVCxPQUFPbmEsY0FBY3dHO0lBQy9EO0FBRU0sYUFBUzRULG1CQUFtQjVULE9BQTJCO0FBQzVELFVBQUlqTyxVQUFVaU8sS0FBRCxHQUFTO0FBQ3BCLGVBQU8sQ0FBQ0EsS0FBRDtNQUNSO0FBRUQsVUFBSXdULFdBQVd4VCxLQUFELEdBQVM7QUFDckIsZUFBT29ULFVBQVVwVCxLQUFEO01BQ2pCO0FBRUQsVUFBSWpOLE1BQU1DLFFBQVFnTixLQUFkLEdBQXNCO0FBQ3hCLGVBQU9BO01BQ1I7QUFFRCxhQUFPb1QsVUFBVXpkLFNBQVNrZSxpQkFBaUI3VCxLQUExQixDQUFEO0lBQ2pCO0FBRU0sYUFBUzhULHNCQUNkQyxLQUNBL1QsT0FDTTtBQUNOK1QsVUFBSWpaLFFBQVEsU0FBQ2taLElBQU87QUFDbEIsWUFBSUEsSUFBSTtBQUNOQSxhQUFHcE0sTUFBTXFNLHFCQUF3QmpVLFFBQWpDO1FBQ0Q7TUFDRixDQUpEO0lBS0Q7QUFFTSxhQUFTa1UsbUJBQ2RILEtBQ0E1VCxPQUNNO0FBQ040VCxVQUFJalosUUFBUSxTQUFDa1osSUFBTztBQUNsQixZQUFJQSxJQUFJO0FBQ05BLGFBQUdqTSxhQUFhLGNBQWM1SCxLQUE5QjtRQUNEO01BQ0YsQ0FKRDtJQUtEO0FBRU0sYUFBU2dVLGlCQUNkQyxtQkFDVTtBQUFBLFVBQUF6YztBQUNWLFVBQUEwYyxvQkFBa0JyQixpQkFBaUJvQixpQkFBRCxHQUEzQjFnQixVQUFQMmdCLGtCQUFBLENBQUE7QUFHQSxhQUFPM2dCLFdBQU8sU0FBUGlFLHdCQUFBakUsUUFBUzdCLGtCQUFULFFBQUE4RixzQkFBd0JILE9BQU85RCxRQUFRN0IsZ0JBQWdCOEQ7SUFDL0Q7QUFFTSxhQUFTMmUsaUNBQ2RDLGdCQUNBQyxPQUNTO0FBQ1QsVUFBT0MsVUFBb0JELE1BQXBCQyxTQUFTQyxVQUFXRixNQUFYRTtBQUVoQixhQUFPSCxlQUFlOUksTUFBTSxTQUFBclgsTUFBc0M7QUFBQSxZQUFwQzRNLGFBQW9DNU0sS0FBcEM0TSxZQUFZMlQsY0FBd0J2Z0IsS0FBeEJ1Z0IsYUFBYUMsUUFBV3hnQixLQUFYd2dCO0FBQ3JELFlBQU9DLG9CQUFxQkQsTUFBckJDO0FBQ1AsWUFBTXZWLGdCQUFnQk4saUJBQWlCMlYsWUFBWS9hLFNBQWI7QUFDdEMsWUFBTThILGFBQWFpVCxZQUFZaFQsY0FBY0M7QUFFN0MsWUFBSSxDQUFDRixZQUFZO0FBQ2YsaUJBQU87UUFDUjtBQUVELFlBQU1vVCxjQUFjeFYsa0JBQWtCLFdBQVdvQyxXQUFXL00sSUFBS0QsSUFBSTtBQUNyRSxZQUFNcWdCLGlCQUFpQnpWLGtCQUFrQixRQUFRb0MsV0FBVzVNLE9BQVFKLElBQUk7QUFDeEUsWUFBTXNnQixlQUFlMVYsa0JBQWtCLFVBQVVvQyxXQUFXbE4sS0FBTUQsSUFBSTtBQUN0RSxZQUFNMGdCLGdCQUFnQjNWLGtCQUFrQixTQUFTb0MsV0FBVzdNLE1BQU9OLElBQUk7QUFFdkUsWUFBTTJnQixhQUNKbFUsV0FBV3JNLE1BQU0rZixVQUFVSSxjQUFjRDtBQUMzQyxZQUFNTSxnQkFDSlQsVUFBVTFULFdBQVdsTSxTQUFTaWdCLGlCQUFpQkY7QUFDakQsWUFBTU8sY0FDSnBVLFdBQVd4TSxPQUFPaWdCLFVBQVVPLGVBQWVIO0FBQzdDLFlBQU1RLGVBQ0paLFVBQVV6VCxXQUFXbk0sUUFBUW9nQixnQkFBZ0JKO0FBRS9DLGVBQU9LLGNBQWNDLGlCQUFpQkMsZUFBZUM7TUFDdEQsQ0F4Qk07SUF5QlI7QUFFTSxhQUFTQyw0QkFDZEMsS0FDQUMsUUFDQUMsVUFDTTtBQUNOLFVBQU1DLFNBQVlGLFNBQU47QUFNWixPQUFDLGlCQUFpQixxQkFBbEIsRUFBeUMxYSxRQUFRLFNBQUMwWixPQUFVO0FBQzFEZSxZQUFJRyxNQUFELEVBQVNsQixPQUFPaUIsUUFBbkI7TUFDRCxDQUZEO0lBR0Q7QUFNTSxhQUFTRSxlQUFlaFksUUFBaUJDLE9BQXlCO0FBQ3ZFLFVBQUk5RixTQUFTOEY7QUFDYixhQUFPOUYsUUFBUTtBQUFBLFlBQUE4ZDtBQUNiLFlBQUlqWSxPQUFPRCxTQUFTNUYsTUFBaEIsR0FBeUI7QUFDM0IsaUJBQU87UUFDUjtBQUNEQSxpQkFBVUEsT0FBT2dHLGVBQVgsT0FBQSxVQUFBOFgsc0JBQUk5ZCxPQUFPZ0csWUFBUCxNQUFKLE9BQUEsU0FBRzhYLG9CQUFpQ3ZlO01BQzNDO0FBQ0QsYUFBTztJQUNSO0FDbElNLFFBQU13ZSxlQUFlO01BQUNDLFNBQVM7SUFBVjtBQUM1QixRQUFJQyxvQkFBb0I7QUFRakIsYUFBU0MsdUJBQTZCO0FBQzNDLFVBQUlILGFBQWFDLFNBQVM7QUFDeEI7TUFDRDtBQUVERCxtQkFBYUMsVUFBVTtBQUV2QixVQUFJbmtCLE9BQU9za0IsYUFBYTtBQUN0QnRnQixpQkFBUzJQLGlCQUFpQixhQUFhNFEsbUJBQXZDO01BQ0Q7SUFDRjtBQU9NLGFBQVNBLHNCQUE0QjtBQUMxQyxVQUFNQyxNQUFNRixZQUFZRSxJQUFaO0FBRVosVUFBSUEsTUFBTUosb0JBQW9CLElBQUk7QUFDaENGLHFCQUFhQyxVQUFVO0FBRXZCbmdCLGlCQUFTNFAsb0JBQW9CLGFBQWEyUSxtQkFBMUM7TUFDRDtBQUVESCwwQkFBb0JJO0lBQ3JCO0FBUU0sYUFBU0MsZUFBcUI7QUFDbkMsVUFBTUMsZ0JBQWdCMWdCLFNBQVMwZ0I7QUFFL0IsVUFBSTNDLG1CQUFtQjJDLGFBQUQsR0FBaUI7QUFDckMsWUFBTS9TLFdBQVcrUyxjQUFjMUM7QUFFL0IsWUFBSTBDLGNBQWNDLFFBQVEsQ0FBQ2hULFNBQVNuRCxNQUFNb1csV0FBVztBQUNuREYsd0JBQWNDLEtBQWQ7UUFDRDtNQUNGO0lBQ0Y7QUFFYyxhQUFTRSwyQkFBaUM7QUFDdkQ3Z0IsZUFBUzJQLGlCQUFpQixjQUFjMFEsc0JBQXNCdEUsYUFBOUQ7QUFDQS9mLGFBQU8yVCxpQkFBaUIsUUFBUThRLFlBQWhDO0lBQ0Q7QUM5RE0sUUFBTUssWUFDWCxPQUFPOWtCLFdBQVcsZUFBZSxPQUFPZ0UsYUFBYTtBQUVoRCxRQUFNK2dCLFNBQVNEOztNQUVsQixDQUFDLENBQUM5a0IsT0FBT2dsQjtRQUNUO0FDdUNKLFFBQUEsT0FBYTtBQUNYQywyQkFBb0I7SUFDckI7QUN0Q0QsUUFBTUMsY0FBYztNQUNsQkMsYUFBYTtNQUNiQyxjQUFjO01BQ2RDLG1CQUFtQjtNQUNuQkMsUUFBUTtJQUpVO0FBT3BCLFFBQU1DLGNBQWM7TUFDbEJDLFdBQVc7TUFDWEMsV0FBVztNQUNYM1AsT0FBTztNQUNQNFAsU0FBUztNQUNUQyxTQUFTO01BQ1RDLFVBQVU7TUFDVkMsTUFBTTtNQUNOQyxPQUFPO01BQ1BDLFFBQVE7SUFUVTtBQVliLFFBQU1DLGVBQTBCbGIsT0FBQUMsT0FBQTtNQUNyQ2tiLFVBQVVoRztNQUNWaUcsTUFBTTtRQUNKUixTQUFTO1FBQ1RTLFVBQVU7TUFGTjtNQUlOQyxPQUFPO01BQ1BDLFVBQVUsQ0FBQyxLQUFLLEdBQU47TUFDVkMsd0JBQXdCO01BQ3hCQyxhQUFhO01BQ2JDLGtCQUFrQjtNQUNsQkMsYUFBYTtNQUNidkQsbUJBQW1CO01BQ25Cd0QscUJBQXFCO01BQ3JCQyxnQkFBZ0I7TUFDaEIxVyxRQUFRLENBQUMsR0FBRyxFQUFKO01BQ1IyVyxlQWhCcUMsU0FBQUEsZ0JBZ0JyQjtNQUFBO01BQ2hCQyxnQkFqQnFDLFNBQUFBLGlCQWlCcEI7TUFBQTtNQUNqQkMsVUFsQnFDLFNBQUFBLFdBa0IxQjtNQUFBO01BQ1hDLFdBbkJxQyxTQUFBQSxZQW1CekI7TUFBQTtNQUNaQyxVQXBCcUMsU0FBQUEsV0FvQjFCO01BQUE7TUFDWEMsUUFyQnFDLFNBQUFBLFNBcUI1QjtNQUFBO01BQ1RDLFNBdEJxQyxTQUFBQSxVQXNCM0I7TUFBQTtNQUNWQyxRQXZCcUMsU0FBQUEsU0F1QjVCO01BQUE7TUFDVEMsU0F4QnFDLFNBQUFBLFVBd0IzQjtNQUFBO01BQ1ZDLFdBekJxQyxTQUFBQSxZQXlCekI7TUFBQTtNQUNaQyxhQTFCcUMsU0FBQUEsY0EwQnZCO01BQUE7TUFDZEMsZ0JBM0JxQyxTQUFBQSxpQkEyQnBCO01BQUE7TUFDakJ0ZixXQUFXO01BQ1h1ZixTQUFTLENBQUE7TUFDVEMsZUFBZSxDQUFBO01BQ2ZDLFFBQVE7TUFDUkMsY0FBYztNQUNkQyxPQUFPO01BQ1BDLFNBQVM7TUFDVEMsZUFBZTtJQW5Dc0IsR0FvQ2xDNUMsYUFDQUssV0FyQ2tDO0FBd0N2QyxRQUFNd0MsY0FBY2pkLE9BQU9JLEtBQUs4YSxZQUFaO0FBRWIsUUFBTWdDLGtCQUE0QyxTQUE1Q0MsaUJBQTZDQyxjQUFpQjtBQUV6RSxVQUFBLE9BQWE7QUFDWEMsc0JBQWNELGNBQWMsQ0FBQSxDQUFmO01BQ2Q7QUFFRCxVQUFNaGQsT0FBT0osT0FBT0ksS0FBS2dkLFlBQVo7QUFDYmhkLFdBQUsvQixRQUFRLFNBQUNnQyxLQUFRO0FBQ25CNmEscUJBQXFCN2EsR0FBdEIsSUFBNkIrYyxhQUFhL2MsR0FBRDtNQUMxQyxDQUZEO0lBR0Q7QUFFTSxhQUFTaWQsdUJBQ2RDLGFBQ2dCO0FBQ2hCLFVBQU1iLFVBQVVhLFlBQVliLFdBQVcsQ0FBQTtBQUN2QyxVQUFNYyxlQUFjZCxRQUFRemYsT0FBZ0MsU0FBQ0MsS0FBS3VnQixRQUFXO0FBQzNFLFlBQU9qZixPQUFzQmlmLE9BQXRCamYsTUFBTThXLGVBQWdCbUksT0FBaEJuSTtBQUViLFlBQUk5VyxNQUFNO0FBQUEsY0FBQWtmO0FBQ1J4Z0IsY0FBSXNCLElBQUQsSUFDRCtlLFlBQVkvZSxJQUFELE1BQVcsU0FDbEIrZSxZQUFZL2UsSUFBRCxLQURma2YsUUFFS3hDLGFBQXFCMWMsSUFBdEIsTUFGSixPQUFBa2YsUUFFbUNwSTtRQUN0QztBQUVELGVBQU9wWTtNQUNSLEdBQUUsQ0FBQSxDQVhpQjtBQWFwQixhQUFBOEMsT0FBQUMsT0FBQSxDQUFBLEdBQ0tzZCxhQUNBQyxZQUZMO0lBSUQ7QUFFTSxhQUFTRyxzQkFDZDVnQixXQUNBMmYsU0FDeUI7QUFDekIsVUFBTWtCLFdBQVdsQixVQUNiMWMsT0FBT0ksS0FBS2tkLHVCQUFzQnRkLE9BQUFDLE9BQUEsQ0FBQSxHQUFLaWIsY0FBTDtRQUFtQndCO01BQW5CLENBQUEsQ0FBQSxDQUFsQyxJQUNBTztBQUVKLFVBQU05RSxRQUFReUYsU0FBUzNnQixPQUNyQixTQUFDQyxLQUErQ21ELEtBQVE7QUFDdEQsWUFBTXdkLGlCQUNKOWdCLFVBQVUrZ0IsYUFBVixnQkFBcUN6ZCxHQUFyQyxLQUErQyxJQUMvQzBkLEtBRm9CO0FBSXRCLFlBQUksQ0FBQ0YsZUFBZTtBQUNsQixpQkFBTzNnQjtRQUNSO0FBRUQsWUFBSW1ELFFBQVEsV0FBVztBQUNyQm5ELGNBQUltRCxHQUFELElBQVF3ZDtRQUNaLE9BQU07QUFDTCxjQUFJO0FBQ0YzZ0IsZ0JBQUltRCxHQUFELElBQVEyZCxLQUFLQyxNQUFNSixhQUFYO1VBQ1osU0FBUUssR0FBRztBQUNWaGhCLGdCQUFJbUQsR0FBRCxJQUFRd2Q7VUFDWjtRQUNGO0FBRUQsZUFBTzNnQjtNQUNSLEdBQ0QsQ0FBQSxDQXRCWTtBQXlCZCxhQUFPaWI7SUFDUjtBQUVNLGFBQVNnRyxjQUNkcGhCLFdBQ0FvYixPQUNPO0FBQ1AsVUFBTWlHLE1BQUdwZSxPQUFBQyxPQUFBLENBQUEsR0FDSmtZLE9BREk7UUFFUHlDLFNBQVNqRix1QkFBdUJ3QyxNQUFNeUMsU0FBUyxDQUFDN2QsU0FBRCxDQUFoQjtNQUZ4QixHQUdIb2IsTUFBTXVELG1CQUNOLENBQUEsSUFDQWlDLHNCQUFzQjVnQixXQUFXb2IsTUFBTXVFLE9BQWxCLENBTGxCO0FBUVQwQixVQUFJaEQsT0FBSnBiLE9BQUFDLE9BQUEsQ0FBQSxHQUNLaWIsYUFBYUUsTUFDYmdELElBQUloRCxJQUZUO0FBS0FnRCxVQUFJaEQsT0FBTztRQUNUQyxVQUNFK0MsSUFBSWhELEtBQUtDLGFBQWEsU0FBU2xELE1BQU13RCxjQUFjeUMsSUFBSWhELEtBQUtDO1FBQzlEVCxTQUNFd0QsSUFBSWhELEtBQUtSLFlBQVksU0FDakJ6QyxNQUFNd0QsY0FDSixPQUNBLGdCQUNGeUMsSUFBSWhELEtBQUtSO01BUk47QUFXWCxhQUFPd0Q7SUFDUjtBQzdKRCxRQUFNQyxZQUFZLFNBQVpDLGFBQVk7QUFBQSxhQUFtQjtJQUFuQjtBQUVsQixhQUFTQyx3QkFBd0J0bkIsU0FBa0J1SixNQUFvQjtBQUNyRXZKLGNBQVFvbkIsVUFBUyxDQUFWLElBQWdCN2Q7SUFDeEI7QUFFRCxhQUFTZ2UsbUJBQW1CamIsT0FBdUM7QUFDakUsVUFBTXlILFFBQVE2TCxJQUFHO0FBRWpCLFVBQUl0VCxVQUFVLE1BQU07QUFDbEJ5SCxjQUFNeVQsWUFBWTFKO01BQ25CLE9BQU07QUFDTC9KLGNBQU15VCxZQUFZeko7QUFFbEIsWUFBSTFmLFVBQVVpTyxLQUFELEdBQVM7QUFDcEJ5SCxnQkFBTTBULFlBQVluYixLQUFsQjtRQUNELE9BQU07QUFDTGdiLGtDQUF3QnZULE9BQU96SCxLQUFSO1FBQ3hCO01BQ0Y7QUFFRCxhQUFPeUg7SUFDUjtBQUVNLGFBQVMyVCxXQUFXL0QsU0FBeUJ6QyxPQUFvQjtBQUN0RSxVQUFJN2lCLFVBQVU2aUIsTUFBTXlDLE9BQVAsR0FBaUI7QUFDNUIyRCxnQ0FBd0IzRCxTQUFTLEVBQVY7QUFDdkJBLGdCQUFROEQsWUFBWXZHLE1BQU15QyxPQUExQjtNQUNELFdBQVUsT0FBT3pDLE1BQU15QyxZQUFZLFlBQVk7QUFDOUMsWUFBSXpDLE1BQU11QyxXQUFXO0FBQ25CNkQsa0NBQXdCM0QsU0FBU3pDLE1BQU15QyxPQUFoQjtRQUN4QixPQUFNO0FBQ0xBLGtCQUFRZ0UsY0FBY3pHLE1BQU15QztRQUM3QjtNQUNGO0lBQ0Y7QUFFTSxhQUFTaUUsWUFBWS9oQixRQUF1QztBQUNqRSxVQUFNZ2MsTUFBTWhjLE9BQU9naUI7QUFDbkIsVUFBTUMsY0FBY3BJLFVBQVVtQyxJQUFJa0csUUFBTDtBQUU3QixhQUFPO1FBQ0xsRztRQUNBOEIsU0FBU21FLFlBQVl4UCxLQUFLLFNBQUN0YSxNQUFEO0FBQUEsaUJBQVVBLEtBQUtncUIsVUFBVWhlLFNBQVM0VCxhQUF4QjtRQUFWLENBQWpCO1FBQ1Q3SixPQUFPK1QsWUFBWXhQLEtBQ2pCLFNBQUN0YSxNQUFEO0FBQUEsaUJBQ0VBLEtBQUtncUIsVUFBVWhlLFNBQVM4VCxXQUF4QixLQUNBOWYsS0FBS2dxQixVQUFVaGUsU0FBUytULGVBQXhCO1FBRkYsQ0FESztRQUtQa0ssVUFBVUgsWUFBWXhQLEtBQUssU0FBQ3RhLE1BQUQ7QUFBQSxpQkFDekJBLEtBQUtncUIsVUFBVWhlLFNBQVM2VCxjQUF4QjtRQUR5QixDQUFqQjtNQVJMO0lBWVI7QUFFTSxhQUFTOEgsT0FDZC9WLFVBSUE7QUFDQSxVQUFNL0osU0FBUytaLElBQUc7QUFFbEIsVUFBTWlDLE1BQU1qQyxJQUFHO0FBQ2ZpQyxVQUFJMkYsWUFBWTdKO0FBQ2hCa0UsVUFBSXhOLGFBQWEsY0FBYyxRQUEvQjtBQUNBd04sVUFBSXhOLGFBQWEsWUFBWSxJQUE3QjtBQUVBLFVBQU1zUCxVQUFVL0QsSUFBRztBQUNuQitELGNBQVE2RCxZQUFZNUo7QUFDcEIrRixjQUFRdFAsYUFBYSxjQUFjLFFBQW5DO0FBRUFxVCxpQkFBVy9ELFNBQVMvVCxTQUFTc1IsS0FBbkI7QUFFVnJiLGFBQU80aEIsWUFBWTVGLEdBQW5CO0FBQ0FBLFVBQUk0RixZQUFZOUQsT0FBaEI7QUFFQXVFLGVBQVN0WSxTQUFTc1IsT0FBT3RSLFNBQVNzUixLQUExQjtBQUVSLGVBQVNnSCxTQUFTQyxXQUFrQkMsV0FBd0I7QUFDMUQsWUFBQUMsZUFBOEJULFlBQVkvaEIsTUFBRCxHQUFsQ3lpQixPQUFQRCxhQUFPeEcsS0FBSzBHLFdBQVpGLGFBQVkxRSxTQUFTNVAsUUFBckJzVSxhQUFxQnRVO0FBRXJCLFlBQUlxVSxVQUFVckUsT0FBTztBQUNuQnVFLGVBQUlqVSxhQUFhLGNBQWMrVCxVQUFVckUsS0FBekM7UUFDRCxPQUFNO0FBQ0x1RSxlQUFJbFUsZ0JBQWdCLFlBQXBCO1FBQ0Q7QUFFRCxZQUFJLE9BQU9nVSxVQUFVMUUsY0FBYyxVQUFVO0FBQzNDNEUsZUFBSWpVLGFBQWEsa0JBQWtCK1QsVUFBVTFFLFNBQTdDO1FBQ0QsT0FBTTtBQUNMNEUsZUFBSWxVLGdCQUFnQixnQkFBcEI7UUFDRDtBQUVELFlBQUlnVSxVQUFVeEUsU0FBUztBQUNyQjBFLGVBQUlqVSxhQUFhLGdCQUFnQixFQUFqQztRQUNELE9BQU07QUFDTGlVLGVBQUlsVSxnQkFBZ0IsY0FBcEI7UUFDRDtBQUVEa1UsYUFBSXBVLE1BQU0yUCxXQUNSLE9BQU91RSxVQUFVdkUsYUFBYSxXQUN2QnVFLFVBQVV2RSxXQURqQixPQUVJdUUsVUFBVXZFO0FBRWhCLFlBQUl1RSxVQUFVdEUsTUFBTTtBQUNsQndFLGVBQUlqVSxhQUFhLFFBQVErVCxVQUFVdEUsSUFBbkM7UUFDRCxPQUFNO0FBQ0x3RSxlQUFJbFUsZ0JBQWdCLE1BQXBCO1FBQ0Q7QUFFRCxZQUNFK1QsVUFBVXhFLFlBQVl5RSxVQUFVekUsV0FDaEN3RSxVQUFVMUUsY0FBYzJFLFVBQVUzRSxXQUNsQztBQUNBaUUscUJBQVdhLFVBQVMzWSxTQUFTc1IsS0FBbkI7UUFDWDtBQUVELFlBQUlrSCxVQUFVclUsT0FBTztBQUNuQixjQUFJLENBQUNBLE9BQU87QUFDVnVVLGlCQUFJYixZQUFZRixtQkFBbUJhLFVBQVVyVSxLQUFYLENBQWxDO1VBQ0QsV0FBVW9VLFVBQVVwVSxVQUFVcVUsVUFBVXJVLE9BQU87QUFDOUN1VSxpQkFBSUUsWUFBWXpVLEtBQWhCO0FBQ0F1VSxpQkFBSWIsWUFBWUYsbUJBQW1CYSxVQUFVclUsS0FBWCxDQUFsQztVQUNEO1FBQ0YsV0FBVUEsT0FBTztBQUNoQnVVLGVBQUlFLFlBQVl6VSxLQUFoQjtRQUNEO01BQ0Y7QUFFRCxhQUFPO1FBQ0xsTztRQUNBcWlCO01BRks7SUFJUjtBQUlEdkMsV0FBTzhDLFVBQVU7QUNqSGpCLFFBQUlDLFlBQVk7QUFDaEIsUUFBSUMscUJBQXNELENBQUE7QUFHbkQsUUFBSUMsbUJBQStCLENBQUE7QUFFM0IsYUFBU0MsWUFDdEIvaUIsV0FDQXdnQixhQUNVO0FBQ1YsVUFBTXBGLFFBQVFnRyxjQUFjcGhCLFdBQURpRCxPQUFBQyxPQUFBLENBQUEsR0FDdEJpYixjQUNBb0MsdUJBQXVCMUcscUJBQXFCMkcsV0FBRCxDQUFyQixDQUZBLENBQUE7QUFRM0IsVUFBSXdDO0FBQ0osVUFBSUM7QUFDSixVQUFJQztBQUNKLFVBQUlDLHFCQUFxQjtBQUN6QixVQUFJQyxnQ0FBZ0M7QUFDcEMsVUFBSUMsZUFBZTtBQUNuQixVQUFJQyxzQkFBc0I7QUFDMUIsVUFBSUM7QUFDSixVQUFJQztBQUNKLFVBQUl0WTtBQUNKLFVBQUl1WSxZQUE4QixDQUFBO0FBQ2xDLFVBQUlDLHVCQUF1QnBoQixTQUFTcWhCLGFBQWF2SSxNQUFNeUQsbUJBQXBCO0FBQ25DLFVBQUkrRTtBQUtKLFVBQU1DLEtBQUtqQjtBQUNYLFVBQU1rQixpQkFBaUI7QUFDdkIsVUFBTW5FLFVBQVVoRyxPQUFPeUIsTUFBTXVFLE9BQVA7QUFFdEIsVUFBTWhaLFFBQVE7O1FBRVpvZCxXQUFXOztRQUVYaEgsV0FBVzs7UUFFWGxULGFBQWE7O1FBRWJtYSxXQUFXOztRQUVYQyxTQUFTO01BVkc7QUFhZCxVQUFNbmEsV0FBcUI7O1FBRXpCK1o7UUFDQTdqQjtRQUNBRCxRQUFRK1osSUFBRztRQUNYZ0s7UUFDQTFJO1FBQ0F6VTtRQUNBZ1o7O1FBRUF1RTtRQUNBQztRQUNBdkMsWUFBQXdDO1FBQ0FDO1FBQ0FwTjtRQUNBcU47UUFDQUM7UUFDQUM7UUFDQUM7UUFDQXpaO01BbkJ5QjtBQXlCM0IsVUFBSSxDQUFDb1EsTUFBTXlFLFFBQVE7QUFDakIsWUFBQSxPQUFhO0FBQ1g2RSxvQkFBVSxNQUFNLDBDQUFQO1FBQ1Y7QUFFRCxlQUFPNWE7TUFDUjtBQUtELFVBQUE2YSxnQkFBMkJ2SixNQUFNeUUsT0FBTy9WLFFBQWIsR0FBcEIvSixTQUFQNGtCLGNBQU81a0IsUUFBUXFpQixXQUFmdUMsY0FBZXZDO0FBRWZyaUIsYUFBT3dPLGFBQWEsbUJBQWtDLEVBQXREO0FBQ0F4TyxhQUFPOGpCLEtBQVAsV0FBb0MvWixTQUFTK1o7QUFFN0MvWixlQUFTL0osU0FBU0E7QUFDbEJDLGdCQUFVbWEsU0FBU3JRO0FBQ25CL0osYUFBT29hLFNBQVNyUTtBQUVoQixVQUFNOGEsZUFBZWpGLFFBQVFsbUIsSUFBSSxTQUFDaW5CLFFBQUQ7QUFBQSxlQUFZQSxPQUFPbmUsR0FBR3VILFFBQVY7TUFBWixDQUFaO0FBQ3JCLFVBQU0rYSxrQkFBa0I3a0IsVUFBVThrQixhQUFhLGVBQXZCO0FBRXhCQyxtQkFBWTtBQUNaQyxrQ0FBMkI7QUFDM0JDLG1CQUFZO0FBRVpDLGlCQUFXLFlBQVksQ0FBQ3BiLFFBQUQsQ0FBYjtBQUVWLFVBQUlzUixNQUFNMEUsY0FBYztBQUN0QnFGLHFCQUFZO01BQ2I7QUFJRHBsQixhQUFPK0wsaUJBQWlCLGNBQWMsV0FBTTtBQUMxQyxZQUFJaEMsU0FBU3NSLE1BQU13RCxlQUFlOVUsU0FBU25ELE1BQU1vVyxXQUFXO0FBQzFEalQsbUJBQVNvYSxtQkFBVDtRQUNEO01BQ0YsQ0FKRDtBQU1BbmtCLGFBQU8rTCxpQkFBaUIsY0FBYyxXQUFNO0FBQzFDLFlBQ0VoQyxTQUFTc1IsTUFBTXdELGVBQ2Y5VSxTQUFTc1IsTUFBTTRFLFFBQVFqaUIsUUFBUSxZQUEvQixLQUFnRCxHQUNoRDtBQUNBcW5CLHNCQUFXLEVBQUd0WixpQkFBaUIsYUFBYTRYLG9CQUE1QztRQUNEO01BQ0YsQ0FQRDtBQVNBLGFBQU81WjtBQUtQLGVBQVN1Yiw2QkFBeUQ7QUFDaEUsWUFBT3RGLFFBQVNqVyxTQUFTc1IsTUFBbEIyRTtBQUNQLGVBQU94bUIsTUFBTUMsUUFBUXVtQixLQUFkLElBQXVCQSxRQUFRLENBQUNBLE9BQU8sQ0FBUjtNQUN2QztBQUVELGVBQVN1RiwyQkFBb0M7QUFDM0MsZUFBT0QsMkJBQTBCLEVBQUcsQ0FBSCxNQUFVO01BQzVDO0FBRUQsZUFBU0UsdUJBQWdDO0FBQUEsWUFBQUM7QUFFdkMsZUFBTyxDQUFDLEdBQUFBLHdCQUFDMWIsU0FBU3NSLE1BQU15RSxXQUFoQixRQUFDMkYsc0JBQXVCN0M7TUFDakM7QUFFRCxlQUFTOEMsbUJBQTRCO0FBQ25DLGVBQU83QixpQkFBaUI1akI7TUFDekI7QUFFRCxlQUFTb2xCLGNBQXdCO0FBQy9CLFlBQU1qaEIsU0FBU3NoQixpQkFBZ0IsRUFBRzduQjtBQUNsQyxlQUFPdUcsU0FBU3dXLGlCQUFpQnhXLE1BQUQsSUFBV2hJO01BQzVDO0FBRUQsZUFBU3VwQiw2QkFBNkM7QUFDcEQsZUFBTzVELFlBQVkvaEIsTUFBRDtNQUNuQjtBQUVELGVBQVM0bEIsU0FBU0MsUUFBeUI7QUFJekMsWUFDRzliLFNBQVNuRCxNQUFNcWQsYUFBYSxDQUFDbGEsU0FBU25ELE1BQU1vVyxhQUM3Q1YsYUFBYUMsV0FDWmlILG9CQUFvQkEsaUJBQWlCOUssU0FBUyxTQUMvQztBQUNBLGlCQUFPO1FBQ1I7QUFFRCxlQUFPSCx3QkFDTHhPLFNBQVNzUixNQUFNbUQsT0FDZnFILFNBQVMsSUFBSSxHQUNiekgsYUFBYUksS0FIZTtNQUsvQjtBQUVELGVBQVMwRyxhQUFhWSxVQUF3QjtBQUFBLFlBQXhCQSxhQUF3QixRQUFBO0FBQXhCQSxxQkFBVztRQUFhO0FBQzVDOWxCLGVBQU9xTyxNQUFNMFgsZ0JBQ1hoYyxTQUFTc1IsTUFBTXdELGVBQWUsQ0FBQ2lILFdBQVcsS0FBSztBQUNqRDlsQixlQUFPcU8sTUFBTThQLFNBQWIsS0FBeUJwVSxTQUFTc1IsTUFBTThDO01BQ3pDO0FBRUQsZUFBU2dILFdBQ1BhLE1BQ0FsZCxNQUNBbWQsdUJBQ007QUFBQSxZQUROQSwwQkFDTSxRQUFBO0FBRE5BLGtDQUF3QjtRQUNsQjtBQUNOcEIscUJBQWF0akIsUUFBUSxTQUFDMmtCLGFBQWdCO0FBQ3BDLGNBQUlBLFlBQVlGLElBQUQsR0FBUTtBQUNyQkUsd0JBQVlGLElBQUQsRUFBWGxOLE1BQUFvTixhQUFzQnBkLElBQVg7VUFDWjtRQUNGLENBSkQ7QUFNQSxZQUFJbWQsdUJBQXVCO0FBQUEsY0FBQUU7QUFDekIsV0FBQUEsa0JBQUFwYyxTQUFTc1IsT0FBTTJLLElBQWYsRUFBQWxOLE1BQUFxTixpQkFBd0JyZCxJQUF4QjtRQUNEO01BQ0Y7QUFFRCxlQUFTc2QsNkJBQW1DO0FBQzFDLFlBQU85SCxPQUFRdlUsU0FBU3NSLE1BQWpCaUQ7QUFFUCxZQUFJLENBQUNBLEtBQUtSLFNBQVM7QUFDakI7UUFDRDtBQUVELFlBQU11SSxPQUFJLFVBQVcvSCxLQUFLUjtBQUMxQixZQUFNd0ksTUFBS3RtQixPQUFPOGpCO0FBQ2xCLFlBQU15QyxRQUFROU0saUJBQWlCMVAsU0FBU3NSLE1BQU02RSxpQkFBaUJqZ0IsU0FBakM7QUFFOUJzbUIsY0FBTWhsQixRQUFRLFNBQUNwSixNQUFTO0FBQ3RCLGNBQU1xdUIsZUFBZXJ1QixLQUFLNm9CLGFBQWFxRixJQUFsQjtBQUVyQixjQUFJdGMsU0FBU25ELE1BQU1vVyxXQUFXO0FBQzVCN2tCLGlCQUFLcVcsYUFBYTZYLE1BQU1HLGVBQWtCQSxlQUFOLE1BQXNCRixNQUFPQSxHQUFqRTtVQUNELE9BQU07QUFDTCxnQkFBTUcsWUFBWUQsZ0JBQWdCQSxhQUFhOVcsUUFBUTRXLEtBQUksRUFBekIsRUFBNkJyRixLQUE3QjtBQUVsQyxnQkFBSXdGLFdBQVc7QUFDYnR1QixtQkFBS3FXLGFBQWE2WCxNQUFNSSxTQUF4QjtZQUNELE9BQU07QUFDTHR1QixtQkFBS29XLGdCQUFnQjhYLElBQXJCO1lBQ0Q7VUFDRjtRQUNGLENBZEQ7TUFlRDtBQUVELGVBQVNwQiw4QkFBb0M7QUFDM0MsWUFBSUgsbUJBQW1CLENBQUMvYSxTQUFTc1IsTUFBTWlELEtBQUtDLFVBQVU7QUFDcEQ7UUFDRDtBQUVELFlBQU1nSSxRQUFROU0saUJBQWlCMVAsU0FBU3NSLE1BQU02RSxpQkFBaUJqZ0IsU0FBakM7QUFFOUJzbUIsY0FBTWhsQixRQUFRLFNBQUNwSixNQUFTO0FBQ3RCLGNBQUk0UixTQUFTc1IsTUFBTXdELGFBQWE7QUFDOUIxbUIsaUJBQUtxVyxhQUNILGlCQUNBekUsU0FBU25ELE1BQU1vVyxhQUFhN2tCLFNBQVN1dEIsaUJBQWdCLElBQ2pELFNBQ0EsT0FKTjtVQU1ELE9BQU07QUFDTHZ0QixpQkFBS29XLGdCQUFnQixlQUFyQjtVQUNEO1FBQ0YsQ0FYRDtNQVlEO0FBRUQsZUFBU21ZLG1DQUF5QztBQUNoRHJCLG9CQUFXLEVBQUdyWixvQkFBb0IsYUFBYTJYLG9CQUEvQztBQUNBYiw2QkFBcUJBLG1CQUFtQnZqQixPQUN0QyxTQUFDMmMsVUFBRDtBQUFBLGlCQUFjQSxhQUFheUg7UUFBM0IsQ0FEbUI7TUFHdEI7QUFFRCxlQUFTZ0QsZ0JBQWdCMUwsT0FBc0M7QUFFN0QsWUFBSXFCLGFBQWFDLFNBQVM7QUFDeEIsY0FBSStHLGdCQUFnQnJJLE1BQU12QyxTQUFTLGFBQWE7QUFDOUM7VUFDRDtRQUNGO0FBRUQsWUFBTWtPLGVBQ0gzTCxNQUFNNEwsZ0JBQWdCNUwsTUFBTTRMLGFBQU4sRUFBcUIsQ0FBckIsS0FBNEI1TCxNQUFNMWM7QUFHM0QsWUFDRXdMLFNBQVNzUixNQUFNd0QsZUFDZnpDLGVBQWVwYyxRQUFRNG1CLFlBQVQsR0FDZDtBQUNBO1FBQ0Q7QUFHRCxZQUNFbk4saUJBQWlCMVAsU0FBU3NSLE1BQU02RSxpQkFBaUJqZ0IsU0FBakMsRUFBNEMrSSxLQUFLLFNBQUN5UixJQUFEO0FBQUEsaUJBQy9EMkIsZUFBZTNCLElBQUltTSxZQUFMO1FBRGlELENBQWpFLEdBR0E7QUFDQSxjQUFJdEssYUFBYUMsU0FBUztBQUN4QjtVQUNEO0FBRUQsY0FDRXhTLFNBQVNuRCxNQUFNb1csYUFDZmpULFNBQVNzUixNQUFNNEUsUUFBUWppQixRQUFRLE9BQS9CLEtBQTJDLEdBQzNDO0FBQ0E7VUFDRDtRQUNGLE9BQU07QUFDTG1uQixxQkFBVyxrQkFBa0IsQ0FBQ3BiLFVBQVVrUixLQUFYLENBQW5CO1FBQ1g7QUFFRCxZQUFJbFIsU0FBU3NSLE1BQU1zRCxnQkFBZ0IsTUFBTTtBQUN2QzVVLG1CQUFTb2EsbUJBQVQ7QUFDQXBhLG1CQUFTbU4sS0FBVDtBQUtBbU0sMENBQWdDO0FBQ2hDbEsscUJBQVcsV0FBTTtBQUNma0ssNENBQWdDO1VBQ2pDLENBRlM7QUFPVixjQUFJLENBQUN0WixTQUFTbkQsTUFBTXFkLFdBQVc7QUFDN0I2QyxnQ0FBbUI7VUFDcEI7UUFDRjtNQUNGO0FBRUQsZUFBU0MsY0FBb0I7QUFDM0J6RCx1QkFBZTtNQUNoQjtBQUVELGVBQVMwRCxlQUFxQjtBQUM1QjFELHVCQUFlO01BQ2hCO0FBRUQsZUFBUzJELG1CQUF5QjtBQUNoQyxZQUFNQyxNQUFNN0IsWUFBVztBQUN2QjZCLFlBQUluYixpQkFBaUIsYUFBYTRhLGlCQUFpQixJQUFuRDtBQUNBTyxZQUFJbmIsaUJBQWlCLFlBQVk0YSxpQkFBaUJ4TyxhQUFsRDtBQUNBK08sWUFBSW5iLGlCQUFpQixjQUFjaWIsY0FBYzdPLGFBQWpEO0FBQ0ErTyxZQUFJbmIsaUJBQWlCLGFBQWFnYixhQUFhNU8sYUFBL0M7TUFDRDtBQUVELGVBQVMyTyxzQkFBNEI7QUFDbkMsWUFBTUksTUFBTTdCLFlBQVc7QUFDdkI2QixZQUFJbGIsb0JBQW9CLGFBQWEyYSxpQkFBaUIsSUFBdEQ7QUFDQU8sWUFBSWxiLG9CQUFvQixZQUFZMmEsaUJBQWlCeE8sYUFBckQ7QUFDQStPLFlBQUlsYixvQkFBb0IsY0FBY2diLGNBQWM3TyxhQUFwRDtBQUNBK08sWUFBSWxiLG9CQUFvQixhQUFhK2EsYUFBYTVPLGFBQWxEO01BQ0Q7QUFFRCxlQUFTZ1Asa0JBQWtCMUksVUFBa0IySSxVQUE0QjtBQUN2RUMsd0JBQWdCNUksVUFBVSxXQUFNO0FBQzlCLGNBQ0UsQ0FBQzFVLFNBQVNuRCxNQUFNb1csYUFDaEJoZCxPQUFPbkMsY0FDUG1DLE9BQU9uQyxXQUFXc0csU0FBU25FLE1BQTNCLEdBQ0E7QUFDQW9uQixxQkFBUTtVQUNUO1FBQ0YsQ0FSYztNQVNoQjtBQUVELGVBQVNFLGlCQUFpQjdJLFVBQWtCMkksVUFBNEI7QUFDdEVDLHdCQUFnQjVJLFVBQVUySSxRQUFYO01BQ2hCO0FBRUQsZUFBU0MsZ0JBQWdCNUksVUFBa0IySSxVQUE0QjtBQUNyRSxZQUFNcEwsTUFBTTJKLDJCQUEwQixFQUFHM0o7QUFFekMsaUJBQVNFLFNBQVNqQixPQUE4QjtBQUM5QyxjQUFJQSxNQUFNMWMsV0FBV3lkLEtBQUs7QUFDeEJELHdDQUE0QkMsS0FBSyxVQUFVRSxRQUFoQjtBQUMzQmtMLHFCQUFRO1VBQ1Q7UUFDRjtBQUlELFlBQUkzSSxhQUFhLEdBQUc7QUFDbEIsaUJBQU8ySSxTQUFRO1FBQ2hCO0FBRURyTCxvQ0FBNEJDLEtBQUssVUFBVXlILDRCQUFoQjtBQUMzQjFILG9DQUE0QkMsS0FBSyxPQUFPRSxRQUFiO0FBRTNCdUgsdUNBQStCdkg7TUFDaEM7QUFFRCxlQUFTcUwsR0FDUEMsV0FDQUMsU0FDQXJrQixTQUNNO0FBQUEsWUFETkEsWUFDTSxRQUFBO0FBRE5BLG9CQUE2QztRQUN2QztBQUNOLFlBQU1takIsUUFBUTlNLGlCQUFpQjFQLFNBQVNzUixNQUFNNkUsaUJBQWlCamdCLFNBQWpDO0FBQzlCc21CLGNBQU1obEIsUUFBUSxTQUFDcEosTUFBUztBQUN0QkEsZUFBSzRULGlCQUFpQnliLFdBQVdDLFNBQVNya0IsT0FBMUM7QUFDQXNnQixvQkFBVXZoQixLQUFLO1lBQUNoSztZQUFNcXZCO1lBQVdDO1lBQVNya0I7VUFBM0IsQ0FBZjtRQUNELENBSEQ7TUFJRDtBQUVELGVBQVM0aEIsZUFBcUI7QUFDNUIsWUFBSU8seUJBQXdCLEdBQUk7QUFDOUJnQyxhQUFHLGNBQWM5SCxXQUFXO1lBQUMvVCxTQUFTO1VBQVYsQ0FBMUI7QUFDRjZiLGFBQUcsWUFBWUcsY0FBK0I7WUFBQ2hjLFNBQVM7VUFBVixDQUE1QztRQUNIO0FBRUQ2TixzQkFBY3hQLFNBQVNzUixNQUFNNEUsT0FBaEIsRUFBeUIxZSxRQUFRLFNBQUNpbUIsV0FBYztBQUMzRCxjQUFJQSxjQUFjLFVBQVU7QUFDMUI7VUFDRDtBQUVERCxhQUFHQyxXQUFXL0gsU0FBWjtBQUVGLGtCQUFRK0gsV0FBQTtZQUNOLEtBQUs7QUFDSEQsaUJBQUcsY0FBY0csWUFBZjtBQUNGO1lBQ0YsS0FBSztBQUNISCxpQkFBR3BLLFNBQVMsYUFBYSxRQUFRd0ssZ0JBQS9CO0FBQ0Y7WUFDRixLQUFLO0FBQ0hKLGlCQUFHLFlBQVlJLGdCQUFiO0FBQ0Y7VUFUSjtRQVdELENBbEJEO01BbUJEO0FBRUQsZUFBU0Msa0JBQXdCO0FBQy9CbEUsa0JBQVVuaUIsUUFBUSxTQUFBMUcsTUFBeUQ7QUFBQSxjQUF2RDFDLE9BQXVEMEMsS0FBdkQxQyxNQUFNcXZCLFlBQWlEM3NCLEtBQWpEMnNCLFdBQVdDLFVBQXNDNXNCLEtBQXRDNHNCLFNBQVNya0IsVUFBNkJ2SSxLQUE3QnVJO0FBQzVDakwsZUFBSzZULG9CQUFvQndiLFdBQVdDLFNBQVNya0IsT0FBN0M7UUFDRCxDQUZEO0FBR0FzZ0Isb0JBQVksQ0FBQTtNQUNiO0FBRUQsZUFBU2pFLFVBQVV4RSxPQUFvQjtBQUFBLFlBQUE0TTtBQUNyQyxZQUFJQywwQkFBMEI7QUFFOUIsWUFDRSxDQUFDL2QsU0FBU25ELE1BQU1vZCxhQUNoQitELHVCQUF1QjlNLEtBQUQsS0FDdEJvSSwrQkFDQTtBQUNBO1FBQ0Q7QUFFRCxZQUFNMkUsZUFBYUgsb0JBQUFyRSxxQkFBZ0IsT0FBaEIsU0FBQXFFLGtCQUFrQm5QLFVBQVM7QUFFOUM4SywyQkFBbUJ2STtBQUNuQjRJLHdCQUFnQjVJLE1BQU00STtBQUV0Qm9CLG9DQUEyQjtBQUUzQixZQUFJLENBQUNsYixTQUFTbkQsTUFBTW9XLGFBQWE5QyxhQUFhZSxLQUFELEdBQVM7QUFLcEQ2SCw2QkFBbUJ2aEIsUUFBUSxTQUFDMmEsVUFBRDtBQUFBLG1CQUFjQSxTQUFTakIsS0FBRDtVQUF0QixDQUEzQjtRQUNEO0FBR0QsWUFDRUEsTUFBTXZDLFNBQVMsWUFDZDNPLFNBQVNzUixNQUFNNEUsUUFBUWppQixRQUFRLFlBQS9CLElBQStDLEtBQzlDb2xCLHVCQUNGclosU0FBU3NSLE1BQU1zRCxnQkFBZ0IsU0FDL0I1VSxTQUFTbkQsTUFBTW9XLFdBQ2Y7QUFDQThLLG9DQUEwQjtRQUMzQixPQUFNO0FBQ0wxQyx1QkFBYW5LLEtBQUQ7UUFDYjtBQUVELFlBQUlBLE1BQU12QyxTQUFTLFNBQVM7QUFDMUIwSywrQkFBcUIsQ0FBQzBFO1FBQ3ZCO0FBRUQsWUFBSUEsMkJBQTJCLENBQUNFLFlBQVk7QUFDMUNDLHVCQUFhaE4sS0FBRDtRQUNiO01BQ0Y7QUFFRCxlQUFTMkksWUFBWTNJLE9BQXlCO0FBQzVDLFlBQU0xYyxTQUFTMGMsTUFBTTFjO0FBQ3JCLFlBQU0ycEIsZ0NBQ0p4QyxpQkFBZ0IsRUFBR3ZoQixTQUFTNUYsTUFBNUIsS0FBdUN5QixPQUFPbUUsU0FBUzVGLE1BQWhCO0FBRXpDLFlBQUkwYyxNQUFNdkMsU0FBUyxlQUFld1AsK0JBQStCO0FBQy9EO1FBQ0Q7QUFFRCxZQUFNbE4saUJBQWlCbU4sb0JBQW1CLEVBQ3ZDM3BCLE9BQU93QixNQURhLEVBRXBCdEcsSUFBSSxTQUFDZ1EsU0FBVztBQUFBLGNBQUEwZTtBQUNmLGNBQU1DLFlBQVczZSxRQUFPMFE7QUFDeEIsY0FBTWxQLFVBQUtrZCx3QkFBR0MsVUFBU3RFLG1CQUFaLE9BQUEsU0FBR3FFLHNCQUF5QnhoQjtBQUV2QyxjQUFJc0UsUUFBTztBQUNULG1CQUFPO2NBQ0x6RCxZQUFZaUMsUUFBT3hQLHNCQUFQO2NBQ1praEIsYUFBYWxRO2NBQ2JtUTtZQUhLO1VBS1I7QUFFRCxpQkFBTztRQUNSLENBZm9CLEVBZ0JwQjliLE9BQU9pYSxPQWhCYTtBQWtCdkIsWUFBSXVCLGlDQUFpQ0MsZ0JBQWdCQyxLQUFqQixHQUF5QjtBQUMzRHlMLDJDQUFnQztBQUNoQ3VCLHVCQUFhaE4sS0FBRDtRQUNiO01BQ0Y7QUFFRCxlQUFTeU0sYUFBYXpNLE9BQXlCO0FBQzdDLFlBQU1xTixhQUNKUCx1QkFBdUI5TSxLQUFELEtBQ3JCbFIsU0FBU3NSLE1BQU00RSxRQUFRamlCLFFBQVEsT0FBL0IsS0FBMkMsS0FBS29sQjtBQUVuRCxZQUFJa0YsWUFBWTtBQUNkO1FBQ0Q7QUFFRCxZQUFJdmUsU0FBU3NSLE1BQU13RCxhQUFhO0FBQzlCOVUsbUJBQVN3YSxzQkFBc0J0SixLQUEvQjtBQUNBO1FBQ0Q7QUFFRGdOLHFCQUFhaE4sS0FBRDtNQUNiO0FBRUQsZUFBUzBNLGlCQUFpQjFNLE9BQXlCO0FBQ2pELFlBQ0VsUixTQUFTc1IsTUFBTTRFLFFBQVFqaUIsUUFBUSxTQUEvQixJQUE0QyxLQUM1Q2lkLE1BQU0xYyxXQUFXbW5CLGlCQUFnQixHQUNqQztBQUNBO1FBQ0Q7QUFHRCxZQUNFM2IsU0FBU3NSLE1BQU13RCxlQUNmNUQsTUFBTXNOLGlCQUNOdm9CLE9BQU9tRSxTQUFTOFcsTUFBTXNOLGFBQXRCLEdBQ0E7QUFDQTtRQUNEO0FBRUROLHFCQUFhaE4sS0FBRDtNQUNiO0FBRUQsZUFBUzhNLHVCQUF1QjlNLE9BQXVCO0FBQ3JELGVBQU9xQixhQUFhQyxVQUNoQmdKLHlCQUF3QixNQUFPdEssTUFBTXZDLEtBQUsxYSxRQUFRLE9BQW5CLEtBQStCLElBQzlEO01BQ0w7QUFFRCxlQUFTd3FCLHVCQUE2QjtBQUNwQ0MsOEJBQXFCO0FBRXJCLFlBQUFDLG1CQU1JM2UsU0FBU3NSLE9BTFh3RSxnQkFERjZJLGlCQUNFN0ksZUFDQXhmLFlBRkZxb0IsaUJBRUVyb0IsV0FDQWdJLFNBSEZxZ0IsaUJBR0VyZ0IsUUFDQXFXLHlCQUpGZ0ssaUJBSUVoSyx3QkFDQUssaUJBTEYySixpQkFLRTNKO0FBR0YsWUFBTTdRLFFBQVFzWCxxQkFBb0IsSUFBS3pELFlBQVkvaEIsTUFBRCxFQUFTa08sUUFBUTtBQUVuRSxZQUFNeWEsb0JBQW9CaksseUJBQ3RCO1VBQ0V4a0IsdUJBQXVCd2tCO1VBQ3ZCN1csZ0JBQ0U2Vyx1QkFBdUI3VyxrQkFBa0I2ZCxpQkFBZ0I7UUFIN0QsSUFLQXpsQjtBQUVKLFlBQU0yb0IsZ0JBQThEO1VBQ2xFbG5CLE1BQU07VUFDTjRJLFNBQVM7VUFDVGhJLE9BQU87VUFDUFQsVUFBVSxDQUFDLGVBQUQ7VUFDVlcsSUFMa0UsU0FBQUEsR0FBQWlLLE9BS3REO0FBQUEsZ0JBQVJ2QixTQUFRdUIsTUFBUjdGO0FBQ0YsZ0JBQUk0ZSxxQkFBb0IsR0FBSTtBQUMxQixrQkFBQXFELHdCQUFjbEQsMkJBQTBCLEdBQWpDM0osTUFBUDZNLHNCQUFPN007QUFFUCxlQUFDLGFBQWEsb0JBQW9CLFNBQWxDLEVBQTZDemEsUUFBUSxTQUFDOGtCLE1BQVM7QUFDN0Qsb0JBQUlBLFNBQVMsYUFBYTtBQUN4QnJLLHNCQUFJeE4sYUFBYSxrQkFBa0J0RCxPQUFNN0ssU0FBekM7Z0JBQ0QsT0FBTTtBQUNMLHNCQUFJNkssT0FBTXZCLFdBQVczSixPQUFqQixpQkFBdUNxbUIsSUFBdkMsR0FBZ0Q7QUFDbERySyx3QkFBSXhOLGFBQUosVUFBeUI2WCxNQUFRLEVBQWpDO2tCQUNELE9BQU07QUFDTHJLLHdCQUFJek4sZ0JBQUosVUFBNEI4WCxJQUE1QjtrQkFDRDtnQkFDRjtjQUNGLENBVkQ7QUFZQW5iLHFCQUFNdkIsV0FBVzNKLFNBQVMsQ0FBQTtZQUMzQjtVQUNGO1FBdkJpRTtBQTZCcEUsWUFBTWtCLFlBQXNDLENBQzFDO1VBQ0VRLE1BQU07VUFDTjBCLFNBQVM7WUFDUGlGO1VBRE87UUFGWCxHQU1BO1VBQ0UzRyxNQUFNO1VBQ04wQixTQUFTO1lBQ1BtRSxTQUFTO2NBQ1BuTSxLQUFLO2NBQ0xHLFFBQVE7Y0FDUk4sTUFBTTtjQUNOSyxPQUFPO1lBSkE7VUFERjtRQUZYLEdBV0E7VUFDRW9HLE1BQU07VUFDTjBCLFNBQVM7WUFDUG1FLFNBQVM7VUFERjtRQUZYLEdBTUE7VUFDRTdGLE1BQU07VUFDTjBCLFNBQVM7WUFDUHdKLFVBQVUsQ0FBQ21TO1VBREo7UUFGWCxHQU1BNkosYUE5QjBDO0FBaUM1QyxZQUFJcEQscUJBQW9CLEtBQU10WCxPQUFPO0FBQ25DaE4sb0JBQVVpQixLQUFLO1lBQ2JULE1BQU07WUFDTjBCLFNBQVM7Y0FDUGpKLFNBQVMrVDtjQUNUM0csU0FBUztZQUZGO1VBRkksQ0FBZjtRQU9EO0FBRURyRyxrQkFBVWlCLEtBQVYyVyxNQUFBNVgsWUFBbUIyZSxpQkFBYSxPQUFiLFNBQUFBLGNBQWUzZSxjQUFhLENBQUEsQ0FBdEM7QUFFVDZJLGlCQUFTZ2EsaUJBQWlCK0UsS0FBQWxSLGFBQ3hCK1EsbUJBQ0Ezb0IsUUFGb0NrRCxPQUFBQyxPQUFBLENBQUEsR0FJL0IwYyxlQUorQjtVQUtsQ3hmO1VBQ0E4SztVQUNBaks7UUFQa0MsQ0FBQSxDQUFBO01BVXZDO0FBRUQsZUFBU3VuQix3QkFBOEI7QUFDckMsWUFBSTFlLFNBQVNnYSxnQkFBZ0I7QUFDM0JoYSxtQkFBU2dhLGVBQWU5WSxRQUF4QjtBQUNBbEIsbUJBQVNnYSxpQkFBaUI7UUFDM0I7TUFDRjtBQUVELGVBQVNnRixRQUFjO0FBQ3JCLFlBQU8xSyxXQUFZdFUsU0FBU3NSLE1BQXJCZ0Q7QUFFUCxZQUFJeGdCO0FBT0osWUFBTTFGLE9BQU91dEIsaUJBQWdCO0FBRTdCLFlBQ0czYixTQUFTc1IsTUFBTXdELGVBQWVSLGFBQWFoRywyQkFDNUNnRyxhQUFhLFVBQ2I7QUFDQXhnQix1QkFBYTFGLEtBQUswRjtRQUNuQixPQUFNO0FBQ0xBLHVCQUFhZ2IsdUJBQXVCd0YsVUFBVSxDQUFDbG1CLElBQUQsQ0FBWDtRQUNwQztBQUlELFlBQUksQ0FBQzBGLFdBQVdzRyxTQUFTbkUsTUFBcEIsR0FBNkI7QUFDaENuQyxxQkFBVytqQixZQUFZNWhCLE1BQXZCO1FBQ0Q7QUFFRCtKLGlCQUFTbkQsTUFBTXFkLFlBQVk7QUFFM0J1RSw2QkFBb0I7QUFHcEIsWUFBQSxPQUFhO0FBRVhRLG1CQUNFamYsU0FBU3NSLE1BQU13RCxlQUNiUixhQUFhRCxhQUFhQyxZQUMxQmxtQixLQUFLOHdCLHVCQUF1QmpwQixRQUM5QixDQUNFLGdFQUNBLHFFQUNBLDRCQUNBLFFBQ0Esb0VBQ0EscURBQ0EsUUFDQSxzRUFDQSwrREFDQSx3QkFDQSxRQUNBLHdFQVpGLEVBYUVsRyxLQUFLLEdBYlAsQ0FKTTtRQW1CVDtNQUNGO0FBRUQsZUFBU3F1QixzQkFBdUM7QUFDOUMsZUFBT3RPLFVBQ0w3WixPQUFPc2EsaUJBQWlCLG1CQUF4QixDQURjO01BR2pCO0FBRUQsZUFBUzhLLGFBQWFuSyxPQUFxQjtBQUN6Q2xSLGlCQUFTb2EsbUJBQVQ7QUFFQSxZQUFJbEosT0FBTztBQUNUa0sscUJBQVcsYUFBYSxDQUFDcGIsVUFBVWtSLEtBQVgsQ0FBZDtRQUNYO0FBRURnTSx5QkFBZ0I7QUFFaEIsWUFBSXpJLFFBQVFvSCxTQUFTLElBQUQ7QUFDcEIsWUFBQXNELHdCQUFpQzVELDJCQUEwQixHQUFwRDZELGFBQVBELHNCQUFBLENBQUEsR0FBbUJFLGFBQW5CRixzQkFBQSxDQUFBO0FBRUEsWUFBSTVNLGFBQWFDLFdBQVc0TSxlQUFlLFVBQVVDLFlBQVk7QUFDL0Q1SyxrQkFBUTRLO1FBQ1Q7QUFFRCxZQUFJNUssT0FBTztBQUNUeUUsd0JBQWM5SixXQUFXLFdBQU07QUFDN0JwUCxxQkFBU3VhLEtBQVQ7VUFDRCxHQUFFOUYsS0FGcUI7UUFHekIsT0FBTTtBQUNMelUsbUJBQVN1YSxLQUFUO1FBQ0Q7TUFDRjtBQUVELGVBQVMyRCxhQUFhaE4sT0FBb0I7QUFDeENsUixpQkFBU29hLG1CQUFUO0FBRUFnQixtQkFBVyxlQUFlLENBQUNwYixVQUFVa1IsS0FBWCxDQUFoQjtBQUVWLFlBQUksQ0FBQ2xSLFNBQVNuRCxNQUFNb1csV0FBVztBQUM3QjhKLDhCQUFtQjtBQUVuQjtRQUNEO0FBTUQsWUFDRS9jLFNBQVNzUixNQUFNNEUsUUFBUWppQixRQUFRLFlBQS9CLEtBQWdELEtBQ2hEK0wsU0FBU3NSLE1BQU00RSxRQUFRamlCLFFBQVEsT0FBL0IsS0FBMkMsS0FDM0MsQ0FBQyxjQUFjLFdBQWYsRUFBNEJBLFFBQVFpZCxNQUFNdkMsSUFBMUMsS0FBbUQsS0FDbkQwSyxvQkFDQTtBQUNBO1FBQ0Q7QUFFRCxZQUFNNUUsUUFBUW9ILFNBQVMsS0FBRDtBQUV0QixZQUFJcEgsT0FBTztBQUNUMEUsd0JBQWMvSixXQUFXLFdBQU07QUFDN0IsZ0JBQUlwUCxTQUFTbkQsTUFBTW9XLFdBQVc7QUFDNUJqVCx1QkFBU21OLEtBQVQ7WUFDRDtVQUNGLEdBQUVzSCxLQUpxQjtRQUt6QixPQUFNO0FBR0wyRSx1Q0FBNkJrRyxzQkFBc0IsV0FBTTtBQUN2RHRmLHFCQUFTbU4sS0FBVDtVQUNELENBRmlEO1FBR25EO01BQ0Y7QUFLRCxlQUFTc04sU0FBZTtBQUN0QnphLGlCQUFTbkQsTUFBTW9kLFlBQVk7TUFDNUI7QUFFRCxlQUFTUyxVQUFnQjtBQUd2QjFhLGlCQUFTbU4sS0FBVDtBQUNBbk4saUJBQVNuRCxNQUFNb2QsWUFBWTtNQUM1QjtBQUVELGVBQVNHLHFCQUEyQjtBQUNsQ2pMLHFCQUFhK0osV0FBRDtBQUNaL0oscUJBQWFnSyxXQUFEO0FBQ1pvRyw2QkFBcUJuRywwQkFBRDtNQUNyQjtBQUVELGVBQVNpQixTQUFTOUQsY0FBb0M7QUFFcEQsWUFBQSxPQUFhO0FBQ1gwSSxtQkFBU2pmLFNBQVNuRCxNQUFNa0QsYUFBYXlmLHdCQUF3QixVQUFELENBQXBEO1FBQ1Q7QUFFRCxZQUFJeGYsU0FBU25ELE1BQU1rRCxhQUFhO0FBQzlCO1FBQ0Q7QUFFRHFiLG1CQUFXLGtCQUFrQixDQUFDcGIsVUFBVXVXLFlBQVgsQ0FBbkI7QUFFVnNILHdCQUFlO0FBRWYsWUFBTXRGLFlBQVl2WSxTQUFTc1I7QUFDM0IsWUFBTWtILFlBQVlsQixjQUFjcGhCLFdBQURpRCxPQUFBQyxPQUFBLENBQUEsR0FDMUJtZixXQUNBeEkscUJBQXFCd0csWUFBRCxHQUZNO1VBRzdCMUIsa0JBQWtCO1FBSFcsQ0FBQSxDQUFBO0FBTS9CN1UsaUJBQVNzUixRQUFRa0g7QUFFakJ5QyxxQkFBWTtBQUVaLFlBQUkxQyxVQUFVeEQsd0JBQXdCeUQsVUFBVXpELHFCQUFxQjtBQUNuRTRILDJDQUFnQztBQUNoQy9DLGlDQUF1QnBoQixTQUNyQnFoQixhQUNBckIsVUFBVXpELG1CQUZtQjtRQUloQztBQUdELFlBQUl3RCxVQUFVcEMsaUJBQWlCLENBQUNxQyxVQUFVckMsZUFBZTtBQUN2RHpHLDJCQUFpQjZJLFVBQVVwQyxhQUFYLEVBQTBCM2UsUUFBUSxTQUFDcEosTUFBUztBQUMxREEsaUJBQUtvVyxnQkFBZ0IsZUFBckI7VUFDRCxDQUZEO1FBR0QsV0FBVWdVLFVBQVVyQyxlQUFlO0FBQ2xDamdCLG9CQUFVc08sZ0JBQWdCLGVBQTFCO1FBQ0Q7QUFFRDBXLG9DQUEyQjtBQUMzQkMscUJBQVk7QUFFWixZQUFJN0MsVUFBVTtBQUNaQSxtQkFBU0MsV0FBV0MsU0FBWjtRQUNUO0FBRUQsWUFBSXhZLFNBQVNnYSxnQkFBZ0I7QUFDM0J5RSwrQkFBb0I7QUFNcEJMLDhCQUFtQixFQUFHNW1CLFFBQVEsU0FBQ2lvQixjQUFpQjtBQUc5Q0gsa0NBQXNCRyxhQUFhcFAsT0FBUTJKLGVBQWdCdFosV0FBdEM7VUFDdEIsQ0FKRDtRQUtEO0FBRUQwYSxtQkFBVyxpQkFBaUIsQ0FBQ3BiLFVBQVV1VyxZQUFYLENBQWxCO01BQ1g7QUFFRCxlQUFTK0QsWUFBV3ZHLFNBQXdCO0FBQzFDL1QsaUJBQVNxYSxTQUFTO1VBQUN0RztRQUFELENBQWxCO01BQ0Q7QUFFRCxlQUFTd0csT0FBYTtBQUVwQixZQUFBLE9BQWE7QUFDWDBFLG1CQUFTamYsU0FBU25ELE1BQU1rRCxhQUFheWYsd0JBQXdCLE1BQUQsQ0FBcEQ7UUFDVDtBQUdELFlBQU1FLG1CQUFtQjFmLFNBQVNuRCxNQUFNb1c7QUFDeEMsWUFBTWxULGNBQWNDLFNBQVNuRCxNQUFNa0Q7QUFDbkMsWUFBTTRmLGFBQWEsQ0FBQzNmLFNBQVNuRCxNQUFNb2Q7QUFDbkMsWUFBTTJGLDBCQUNKck4sYUFBYUMsV0FBVyxDQUFDeFMsU0FBU3NSLE1BQU0yRTtBQUMxQyxZQUFNdkIsV0FBV2xHLHdCQUNmeE8sU0FBU3NSLE1BQU1vRCxVQUNmLEdBQ0FMLGFBQWFLLFFBSHlCO0FBTXhDLFlBQ0VnTCxvQkFDQTNmLGVBQ0E0ZixjQUNBQyx5QkFDQTtBQUNBO1FBQ0Q7QUFLRCxZQUFJakUsaUJBQWdCLEVBQUdYLGFBQWEsVUFBaEMsR0FBNkM7QUFDL0M7UUFDRDtBQUVESSxtQkFBVyxVQUFVLENBQUNwYixRQUFELEdBQVksS0FBdkI7QUFDVixZQUFJQSxTQUFTc1IsTUFBTWtFLE9BQU94VixRQUF0QixNQUFvQyxPQUFPO0FBQzdDO1FBQ0Q7QUFFREEsaUJBQVNuRCxNQUFNb1csWUFBWTtBQUUzQixZQUFJd0kscUJBQW9CLEdBQUk7QUFDMUJ4bEIsaUJBQU9xTyxNQUFNdWIsYUFBYTtRQUMzQjtBQUVEMUUscUJBQVk7QUFDWitCLHlCQUFnQjtBQUVoQixZQUFJLENBQUNsZCxTQUFTbkQsTUFBTXFkLFdBQVc7QUFDN0Jqa0IsaUJBQU9xTyxNQUFNd2IsYUFBYTtRQUMzQjtBQUlELFlBQUlyRSxxQkFBb0IsR0FBSTtBQUMxQixjQUFBc0UseUJBQXVCbkUsMkJBQTBCLEdBQTFDM0osTUFBUDhOLHVCQUFPOU4sS0FBSzhCLFVBQVpnTSx1QkFBWWhNO0FBQ1p2RCxnQ0FBc0IsQ0FBQ3lCLEtBQUs4QixPQUFOLEdBQWdCLENBQWpCO1FBQ3RCO0FBRUQzUyx3QkFBZ0IsU0FBQTRlLGlCQUFZO0FBQUEsY0FBQUM7QUFDMUIsY0FBSSxDQUFDamdCLFNBQVNuRCxNQUFNb1csYUFBYXVHLHFCQUFxQjtBQUNwRDtVQUNEO0FBRURBLGdDQUFzQjtBQUd0QixlQUFLdmpCLE9BQU9yRjtBQUVacUYsaUJBQU9xTyxNQUFNd2IsYUFBYTlmLFNBQVNzUixNQUFNMEQ7QUFFekMsY0FBSXlHLHFCQUFvQixLQUFNemIsU0FBU3NSLE1BQU13QyxXQUFXO0FBQ3RELGdCQUFBb00seUJBQXVCdEUsMkJBQTBCLEdBQTFDdUUsT0FBUEQsdUJBQU9qTyxLQUFLbU8sV0FBWkYsdUJBQVluTTtBQUNadkQsa0NBQXNCLENBQUMyUCxNQUFLQyxRQUFOLEdBQWdCMUwsUUFBakI7QUFDckI5RCwrQkFBbUIsQ0FBQ3VQLE1BQUtDLFFBQU4sR0FBZ0IsU0FBakI7VUFDbkI7QUFFRC9ELHFDQUEwQjtBQUMxQm5CLHNDQUEyQjtBQUUzQnZMLHVCQUFhcUosa0JBQWtCaFosUUFBbkI7QUFJWixXQUFBaWdCLHlCQUFBamdCLFNBQVNnYSxtQkFBVCxPQUFBLFNBQUFpRyx1QkFBeUJ2ZixZQUF6QjtBQUVBMGEscUJBQVcsV0FBVyxDQUFDcGIsUUFBRCxDQUFaO0FBRVYsY0FBSUEsU0FBU3NSLE1BQU13QyxhQUFhMkgscUJBQW9CLEdBQUk7QUFDdEQ4Qiw2QkFBaUI3SSxVQUFVLFdBQU07QUFDL0IxVSx1QkFBU25ELE1BQU1zZCxVQUFVO0FBQ3pCaUIseUJBQVcsV0FBVyxDQUFDcGIsUUFBRCxDQUFaO1lBQ1gsQ0FIZTtVQUlqQjtRQUNGO0FBRURnZixjQUFLO01BQ047QUFFRCxlQUFTN1IsT0FBYTtBQUVwQixZQUFBLE9BQWE7QUFDWDhSLG1CQUFTamYsU0FBU25ELE1BQU1rRCxhQUFheWYsd0JBQXdCLE1BQUQsQ0FBcEQ7UUFDVDtBQUdELFlBQU1hLGtCQUFrQixDQUFDcmdCLFNBQVNuRCxNQUFNb1c7QUFDeEMsWUFBTWxULGNBQWNDLFNBQVNuRCxNQUFNa0Q7QUFDbkMsWUFBTTRmLGFBQWEsQ0FBQzNmLFNBQVNuRCxNQUFNb2Q7QUFDbkMsWUFBTXZGLFdBQVdsRyx3QkFDZnhPLFNBQVNzUixNQUFNb0QsVUFDZixHQUNBTCxhQUFhSyxRQUh5QjtBQU14QyxZQUFJMkwsbUJBQW1CdGdCLGVBQWU0ZixZQUFZO0FBQ2hEO1FBQ0Q7QUFFRHZFLG1CQUFXLFVBQVUsQ0FBQ3BiLFFBQUQsR0FBWSxLQUF2QjtBQUNWLFlBQUlBLFNBQVNzUixNQUFNZ0UsT0FBT3RWLFFBQXRCLE1BQW9DLE9BQU87QUFDN0M7UUFDRDtBQUVEQSxpQkFBU25ELE1BQU1vVyxZQUFZO0FBQzNCalQsaUJBQVNuRCxNQUFNc2QsVUFBVTtBQUN6QlgsOEJBQXNCO0FBQ3RCSCw2QkFBcUI7QUFFckIsWUFBSW9DLHFCQUFvQixHQUFJO0FBQzFCeGxCLGlCQUFPcU8sTUFBTXViLGFBQWE7UUFDM0I7QUFFRGxELHlDQUFnQztBQUNoQ0ksNEJBQW1CO0FBQ25CNUIscUJBQWEsSUFBRDtBQUVaLFlBQUlNLHFCQUFvQixHQUFJO0FBQzFCLGNBQUE2RSx5QkFBdUIxRSwyQkFBMEIsR0FBMUMzSixNQUFQcU8sdUJBQU9yTyxLQUFLOEIsVUFBWnVNLHVCQUFZdk07QUFFWixjQUFJL1QsU0FBU3NSLE1BQU13QyxXQUFXO0FBQzVCdEQsa0NBQXNCLENBQUN5QixLQUFLOEIsT0FBTixHQUFnQlcsUUFBakI7QUFDckI5RCwrQkFBbUIsQ0FBQ3FCLEtBQUs4QixPQUFOLEdBQWdCLFFBQWpCO1VBQ25CO1FBQ0Y7QUFFRHNJLG1DQUEwQjtBQUMxQm5CLG9DQUEyQjtBQUUzQixZQUFJbGIsU0FBU3NSLE1BQU13QyxXQUFXO0FBQzVCLGNBQUkySCxxQkFBb0IsR0FBSTtBQUMxQjJCLDhCQUFrQjFJLFVBQVUxVSxTQUFTMmEsT0FBcEI7VUFDbEI7UUFDRixPQUFNO0FBQ0wzYSxtQkFBUzJhLFFBQVQ7UUFDRDtNQUNGO0FBRUQsZUFBU0gsc0JBQXNCdEosT0FBeUI7QUFFdEQsWUFBQSxPQUFhO0FBQ1grTixtQkFDRWpmLFNBQVNuRCxNQUFNa0QsYUFDZnlmLHdCQUF3Qix1QkFBRCxDQUZqQjtRQUlUO0FBRURsRSxvQkFBVyxFQUFHdFosaUJBQWlCLGFBQWE0WCxvQkFBNUM7QUFDQWpLLHFCQUFhb0osb0JBQW9CYSxvQkFBckI7QUFDWkEsNkJBQXFCMUksS0FBRDtNQUNyQjtBQUVELGVBQVN5SixVQUFnQjtBQUV2QixZQUFBLE9BQWE7QUFDWHNFLG1CQUFTamYsU0FBU25ELE1BQU1rRCxhQUFheWYsd0JBQXdCLFNBQUQsQ0FBcEQ7UUFDVDtBQUVELFlBQUl4ZixTQUFTbkQsTUFBTW9XLFdBQVc7QUFDNUJqVCxtQkFBU21OLEtBQVQ7UUFDRDtBQUVELFlBQUksQ0FBQ25OLFNBQVNuRCxNQUFNcWQsV0FBVztBQUM3QjtRQUNEO0FBRUR3RSw4QkFBcUI7QUFLckJOLDRCQUFtQixFQUFHNW1CLFFBQVEsU0FBQ2lvQixjQUFpQjtBQUM5Q0EsdUJBQWFwUCxPQUFRc0ssUUFBckI7UUFDRCxDQUZEO0FBSUEsWUFBSTFrQixPQUFPbkMsWUFBWTtBQUNyQm1DLGlCQUFPbkMsV0FBVzhrQixZQUFZM2lCLE1BQTlCO1FBQ0Q7QUFFRCtpQiwyQkFBbUJBLGlCQUFpQnhqQixPQUFPLFNBQUNvUyxHQUFEO0FBQUEsaUJBQU9BLE1BQU01SDtRQUFiLENBQXhCO0FBRW5CQSxpQkFBU25ELE1BQU1xZCxZQUFZO0FBQzNCa0IsbUJBQVcsWUFBWSxDQUFDcGIsUUFBRCxDQUFiO01BQ1g7QUFFRCxlQUFTa0IsVUFBZ0I7QUFFdkIsWUFBQSxPQUFhO0FBQ1grZCxtQkFBU2pmLFNBQVNuRCxNQUFNa0QsYUFBYXlmLHdCQUF3QixTQUFELENBQXBEO1FBQ1Q7QUFFRCxZQUFJeGYsU0FBU25ELE1BQU1rRCxhQUFhO0FBQzlCO1FBQ0Q7QUFFREMsaUJBQVNvYSxtQkFBVDtBQUNBcGEsaUJBQVMyYSxRQUFUO0FBRUFrRCx3QkFBZTtBQUVmLGVBQU8zbkIsVUFBVW1hO0FBRWpCclEsaUJBQVNuRCxNQUFNa0QsY0FBYztBQUU3QnFiLG1CQUFXLGFBQWEsQ0FBQ3BiLFFBQUQsQ0FBZDtNQUNYO0lBQ0Y7QUMvbUNELGFBQVN1Z0IsT0FDUEMsU0FDQUMsZUFDdUI7QUFBQSxVQUR2QkEsa0JBQ3VCLFFBQUE7QUFEdkJBLHdCQUFnQyxDQUFBO01BQ1Q7QUFDdkIsVUFBTTVLLFVBQVV4QixhQUFhd0IsUUFBUXBoQixPQUFPZ3NCLGNBQWM1SyxXQUFXLENBQUEsQ0FBckQ7QUFHaEIsVUFBQSxPQUFhO0FBQ1g2Syx3QkFBZ0JGLE9BQUQ7QUFDZmhLLHNCQUFjaUssZUFBZTVLLE9BQWhCO01BQ2Q7QUFFRDNDLCtCQUF3QjtBQUV4QixVQUFNd0QsY0FBMkJ2ZCxPQUFBQyxPQUFBLENBQUEsR0FBT3FuQixlQUFQO1FBQXNCNUs7TUFBdEIsQ0FBQTtBQUVqQyxVQUFNalksV0FBVzBTLG1CQUFtQmtRLE9BQUQ7QUFHbkMsVUFBQSxPQUFhO0FBQ1gsWUFBTUcseUJBQXlCbHlCLFVBQVVpb0IsWUFBWTNDLE9BQWI7QUFDeEMsWUFBTTZNLGdDQUFnQ2hqQixTQUFTa0IsU0FBUztBQUN4RG1nQixpQkFDRTBCLDBCQUEwQkMsK0JBQzFCLENBQ0Usc0VBQ0EscUVBQ0EscUVBQ0EsUUFDQSx1RUFDQSxvREFDQSxRQUNBLG1DQUNBLDJDQVRGLEVBVUU3d0IsS0FBSyxHQVZQLENBRk07TUFjVDtBQUVELFVBQU04d0IsWUFBWWpqQixTQUFTeEgsT0FDekIsU0FBQ0MsS0FBS0gsV0FBMEI7QUFDOUIsWUFBTThKLFdBQVc5SixhQUFhK2lCLFlBQVkvaUIsV0FBV3dnQixXQUFaO0FBRXpDLFlBQUkxVyxVQUFVO0FBQ1ozSixjQUFJK0IsS0FBSzRILFFBQVQ7UUFDRDtBQUVELGVBQU8zSjtNQUNSLEdBQ0QsQ0FBQSxDQVZnQjtBQWFsQixhQUFPNUgsVUFBVSt4QixPQUFELElBQVlLLFVBQVUsQ0FBRCxJQUFNQTtJQUM1QztBQUVETixJQUFBQSxPQUFNbE0sZUFBZUE7QUFDckJrTSxJQUFBQSxPQUFNbEssa0JBQWtCQTtBQUN4QmtLLElBQUFBLE9BQU1oTyxlQUFlQTtBQUVyQixRQUVhdU8sVUFBbUIsU0FBbkJDLFNBQW1CQyxPQUdMO0FBQUEsVUFBQWx3QixPQUFBa3dCLFVBQUEsU0FBUCxDQUFBLElBQU9BLE9BRmhCQyw4QkFFZ0Jud0IsS0FGekJvd0IsU0FDQXhNLFdBQ3lCNWpCLEtBRHpCNGpCO0FBRUFzRSx1QkFBaUJ4aEIsUUFBUSxTQUFDd0ksVUFBYTtBQUNyQyxZQUFJbWhCLGFBQWE7QUFFakIsWUFBSUYsNkJBQTZCO0FBQy9CRSx1QkFBYS9RLG1CQUFtQjZRLDJCQUFELElBQzNCamhCLFNBQVM5SixjQUFjK3FCLDhCQUN2QmpoQixTQUFTL0osV0FBWWdyQiw0QkFBeUNockI7UUFDbkU7QUFFRCxZQUFJLENBQUNrckIsWUFBWTtBQUNmLGNBQU1DLG1CQUFtQnBoQixTQUFTc1IsTUFBTW9EO0FBRXhDMVUsbUJBQVNxYSxTQUFTO1lBQUMzRjtVQUFELENBQWxCO0FBQ0ExVSxtQkFBU21OLEtBQVQ7QUFFQSxjQUFJLENBQUNuTixTQUFTbkQsTUFBTWtELGFBQWE7QUFDL0JDLHFCQUFTcWEsU0FBUztjQUFDM0YsVUFBVTBNO1lBQVgsQ0FBbEI7VUFDRDtRQUNGO01BQ0YsQ0FuQkQ7SUFvQkQ7QUMxRUQsUUFBTUMsc0JBQXFFbG9CLE9BQUFDLE9BQUEsQ0FBQSxHQUN0RTJsQixLQUFBMWEsYUFEc0U7TUFFekU5QyxRQUZ5RSxTQUFBQSxPQUFBelEsTUFFekQ7QUFBQSxZQUFSK0wsUUFBUS9MLEtBQVIrTDtBQUNOLFlBQU04SCxnQkFBZ0I7VUFDcEIxTyxRQUFRO1lBQ05wQixVQUFVZ0ksTUFBTXhELFFBQVFLO1lBQ3hCeEksTUFBTTtZQUNORyxLQUFLO1lBQ0x1VCxRQUFRO1VBSkY7VUFNUlQsT0FBTztZQUNMdFAsVUFBVTtVQURMO1VBR1BxQixXQUFXLENBQUE7UUFWUztBQWF0QmlELGVBQU9DLE9BQU95RCxNQUFNZSxTQUFTM0gsT0FBT3FPLE9BQU9LLGNBQWMxTyxNQUF6RDtBQUNBNEcsY0FBTWdELFNBQVM4RTtBQUVmLFlBQUk5SCxNQUFNZSxTQUFTdUcsT0FBTztBQUN4QmhMLGlCQUFPQyxPQUFPeUQsTUFBTWUsU0FBU3VHLE1BQU1HLE9BQU9LLGNBQWNSLEtBQXhEO1FBQ0Q7TUFJRjtJQXpCd0UsQ0FBQTtBQTRCM0UsUUFBTW1kLGtCQUFtQyxTQUFuQ0MsaUJBQ0pDLGdCQUNBZixlQUNHO0FBQUEsVUFBQWdCO0FBQUEsVUFESGhCLGtCQUNHLFFBQUE7QUFESEEsd0JBQWdCLENBQUE7TUFDYjtBQUVILFVBQUEsT0FBYTtBQUNYN0Ysa0JBQ0UsQ0FBQ25yQixNQUFNQyxRQUFROHhCLGNBQWQsR0FDRCxDQUNFLHNFQUNBLHlDQUNBRSxPQUFPRixjQUFELENBSFIsRUFJRXp4QixLQUFLLEdBSlAsQ0FGTztNQVFWO0FBRUQsVUFBSTR4QixzQkFBc0JIO0FBQzFCLFVBQUlJLGFBQXNDLENBQUE7QUFDMUMsVUFBSUMsaUJBQWlDLENBQUE7QUFDckMsVUFBSS9IO0FBQ0osVUFBSWdJLFlBQVlyQixjQUFjcUI7QUFDOUIsVUFBSUMsNEJBQStDLENBQUE7QUFDbkQsVUFBSUMsZ0JBQWdCO0FBRXBCLGVBQVNDLG9CQUEwQjtBQUNqQ0oseUJBQWlCRixvQkFDZGh5QixJQUFJLFNBQUNxUSxVQUFEO0FBQUEsaUJBQ0gwUCxpQkFBaUIxUCxTQUFTc1IsTUFBTTZFLGlCQUFpQm5XLFNBQVM5SixTQUExQztRQURiLENBRFUsRUFJZEUsT0FBTyxTQUFDQyxLQUFLekcsTUFBTjtBQUFBLGlCQUFleUcsSUFBSTVCLE9BQU83RSxJQUFYO1FBQWYsR0FBaUMsQ0FBQSxDQUoxQjtNQUtsQjtBQUVELGVBQVNzeUIsZ0JBQXNCO0FBQzdCTixxQkFBYUQsb0JBQW9CaHlCLElBQUksU0FBQ3FRLFVBQUQ7QUFBQSxpQkFBY0EsU0FBUzlKO1FBQXZCLENBQXhCO01BQ2Q7QUFFRCxlQUFTaXNCLGdCQUFnQmxJLFdBQTBCO0FBQ2pEMEgsNEJBQW9CbnFCLFFBQVEsU0FBQ3dJLFVBQWE7QUFDeEMsY0FBSWlhLFdBQVc7QUFDYmphLHFCQUFTeWEsT0FBVDtVQUNELE9BQU07QUFDTHphLHFCQUFTMGEsUUFBVDtVQUNEO1FBQ0YsQ0FORDtNQU9EO0FBRUQsZUFBUzBILGtCQUFrQkMsWUFBd0M7QUFDakUsZUFBT1Ysb0JBQW9CaHlCLElBQUksU0FBQ3FRLFVBQWE7QUFDM0MsY0FBTXNpQixvQkFBbUJ0aUIsU0FBU3FhO0FBRWxDcmEsbUJBQVNxYSxXQUFXLFNBQUMvSSxPQUFnQjtBQUNuQ2dSLDhCQUFpQmhSLEtBQUQ7QUFFaEIsZ0JBQUl0UixTQUFTOUosY0FBYzRqQixlQUFlO0FBQ3hDdUkseUJBQVVoSSxTQUFTL0ksS0FBbkI7WUFDRDtVQUNGO0FBRUQsaUJBQU8sV0FBWTtBQUNqQnRSLHFCQUFTcWEsV0FBV2lJO1VBQ3JCO1FBQ0YsQ0FkTTtNQWVSO0FBR0QsZUFBU0MsZ0JBQ1BGLFlBQ0E3dEIsUUFDTTtBQUNOLFlBQU11TSxRQUFROGdCLGVBQWU1dEIsUUFBUU8sTUFBdkI7QUFHZCxZQUFJQSxXQUFXc2xCLGVBQWU7QUFDNUI7UUFDRDtBQUVEQSx3QkFBZ0J0bEI7QUFFaEIsWUFBTWd1QixpQkFBaUNWLGFBQWEsQ0FBQSxHQUNqRHJ0QixPQUFPLFNBRDRCLEVBRW5DMkIsT0FBTyxTQUFDQyxLQUFLb3NCLE1BQVM7QUFDcEJwc0IsY0FBWW9zQixJQUFiLElBQXFCZCxvQkFBb0I1Z0IsS0FBRCxFQUFRdVEsTUFBTW1SLElBQWpDO0FBQ3JCLGlCQUFPcHNCO1FBQ1IsR0FBRSxDQUFBLENBTGlDO0FBT3RDZ3NCLG1CQUFVaEksU0FBVmxoQixPQUFBQyxPQUFBLENBQUEsR0FDS29wQixlQURMO1VBRUU3Tix3QkFDRSxPQUFPNk4sY0FBYzdOLDJCQUEyQixhQUM1QzZOLGNBQWM3Tix5QkFDZCxXQUFBO0FBQUEsZ0JBQUErTjtBQUFBLG9CQUFBQSxvQkFBa0JkLFdBQVc3Z0IsS0FBRCxNQUE1QixPQUFBLFNBQWtCMmhCLGtCQUFtQnZ5QixzQkFBbkI7VUFBbEI7UUFMUixDQUFBLENBQUE7TUFPRDtBQUVEZ3lCLHNCQUFnQixLQUFEO0FBQ2ZELG9CQUFhO0FBQ2JELHdCQUFpQjtBQUVqQixVQUFNckwsU0FBaUI7UUFDckJuZSxJQURxQixTQUFBQSxLQUNoQjtBQUNILGlCQUFPO1lBQ0wyYyxXQURLLFNBQUFBLFlBQ2E7QUFDaEIrTSw4QkFBZ0IsSUFBRDtZQUNoQjtZQUNEOU0sVUFKSyxTQUFBQSxXQUlZO0FBQ2Z5RSw4QkFBZ0I7WUFDakI7WUFDRGxFLGdCQVBLLFNBQUFBLGVBT1U1VixVQUFnQjtBQUM3QixrQkFBSUEsU0FBU3NSLE1BQU0wRSxnQkFBZ0IsQ0FBQ2dNLGVBQWU7QUFDakRBLGdDQUFnQjtBQUNoQmxJLGdDQUFnQjtjQUNqQjtZQUNGO1lBQ0R0RSxRQWJLLFNBQUFBLE9BYUV4VixVQUFnQjtBQUNyQixrQkFBSUEsU0FBU3NSLE1BQU0wRSxnQkFBZ0IsQ0FBQ2dNLGVBQWU7QUFDakRBLGdDQUFnQjtBQUNoQk8sZ0NBQWdCdmlCLFVBQVU0aEIsV0FBVyxDQUFELENBQXJCO2NBQ2hCO1lBQ0Y7WUFDRGxNLFdBbkJLLFNBQUFBLFVBbUJLMVYsVUFBVWtSLE9BQWE7QUFDL0JxUiw4QkFBZ0J2aUIsVUFBVWtSLE1BQU00SSxhQUFqQjtZQUNoQjtVQXJCSTtRQXVCUjtNQXpCb0I7QUE0QnZCLFVBQU02SSxZQUFZcEMsT0FBTXZRLElBQUcsR0FBSjdXLE9BQUFDLE9BQUEsQ0FBQSxHQUNsQmlXLGlCQUFpQm9SLGVBQWUsQ0FBQyxXQUFELENBQWhCLEdBREU7UUFFckI1SyxTQUFPLENBQUdlLE1BQUgsRUFBQW5pQixPQUFlZ3NCLGNBQWM1SyxXQUFXLENBQUEsQ0FBeEM7UUFDUE0sZUFBZTBMO1FBQ2YvTCxlQUFhM2MsT0FBQUMsT0FBQSxDQUFBLEdBQ1JxbkIsY0FBYzNLLGVBRE47VUFFWDNlLFdBQVMsQ0FBQSxFQUFBMUMsU0FDSGd0Qix3QkFBQWhCLGNBQWMzSyxrQkFBZCxPQUFBLFNBQUEyTCxzQkFBNkJ0cUIsY0FBYSxDQUFBLEdBRHZDLENBRVBrcUIsbUJBRk8sQ0FBQTtRQUZFLENBQUE7TUFKUSxDQUFBLENBQUE7QUFhdkIsVUFBTXVCLGVBQWVELFVBQVVwSTtBQUUvQm9JLGdCQUFVcEksT0FBTyxTQUFDL2xCLFFBQXdEO0FBQ3hFb3VCLHFCQUFZO0FBSVosWUFBSSxDQUFDOUksaUJBQWlCdGxCLFVBQVUsTUFBTTtBQUNwQyxpQkFBTyt0QixnQkFBZ0JJLFdBQVdmLFdBQVcsQ0FBRCxDQUF0QjtRQUN2QjtBQUlELFlBQUk5SCxpQkFBaUJ0bEIsVUFBVSxNQUFNO0FBQ25DO1FBQ0Q7QUFHRCxZQUFJLE9BQU9BLFdBQVcsVUFBVTtBQUM5QixpQkFDRW90QixXQUFXcHRCLE1BQUQsS0FBWSt0QixnQkFBZ0JJLFdBQVdmLFdBQVdwdEIsTUFBRCxDQUF0QjtRQUV4QztBQUdELFlBQUltdEIsb0JBQW9CMXRCLFFBQVFPLE1BQTVCLEtBQW1ELEdBQUc7QUFDeEQsY0FBTXF1QixNQUFPcnVCLE9BQW9CMEI7QUFDakMsaUJBQU9xc0IsZ0JBQWdCSSxXQUFXRSxHQUFaO1FBQ3ZCO0FBR0QsWUFBSWpCLFdBQVczdEIsUUFBUU8sTUFBbkIsS0FBa0QsR0FBRztBQUN2RCxpQkFBTyt0QixnQkFBZ0JJLFdBQVdudUIsTUFBWjtRQUN2QjtNQUNGO0FBRURtdUIsZ0JBQVVHLFdBQVcsV0FBWTtBQUMvQixZQUFNQyxRQUFRbkIsV0FBVyxDQUFEO0FBQ3hCLFlBQUksQ0FBQzlILGVBQWU7QUFDbEIsaUJBQU82SSxVQUFVcEksS0FBSyxDQUFmO1FBQ1I7QUFDRCxZQUFNeFosUUFBUTZnQixXQUFXM3RCLFFBQVE2bEIsYUFBbkI7QUFDZDZJLGtCQUFVcEksS0FBS3FILFdBQVc3Z0IsUUFBUSxDQUFULEtBQWVnaUIsS0FBeEM7TUFDRDtBQUVESixnQkFBVUssZUFBZSxXQUFZO0FBQ25DLFlBQU1DLE9BQU9yQixXQUFXQSxXQUFXOWlCLFNBQVMsQ0FBckI7QUFDdkIsWUFBSSxDQUFDZ2IsZUFBZTtBQUNsQixpQkFBTzZJLFVBQVVwSSxLQUFLMEksSUFBZjtRQUNSO0FBQ0QsWUFBTWxpQixRQUFRNmdCLFdBQVczdEIsUUFBUTZsQixhQUFuQjtBQUNkLFlBQU10bEIsU0FBU290QixXQUFXN2dCLFFBQVEsQ0FBVCxLQUFla2lCO0FBQ3hDTixrQkFBVXBJLEtBQUsvbEIsTUFBZjtNQUNEO0FBRUQsVUFBTTB1QixtQkFBbUJQLFVBQVV0STtBQUVuQ3NJLGdCQUFVdEksV0FBVyxTQUFDL0ksT0FBZ0I7QUFDcEN3USxvQkFBWXhRLE1BQU13USxhQUFhQTtBQUMvQm9CLHlCQUFpQjVSLEtBQUQ7TUFDakI7QUFFRHFSLGdCQUFVUSxlQUFlLFNBQUNDLGVBQXdCO0FBQ2hEakIsd0JBQWdCLElBQUQ7QUFDZkosa0NBQTBCdnFCLFFBQVEsU0FBQ2lCLElBQUQ7QUFBQSxpQkFBUUEsR0FBRTtRQUFWLENBQWxDO0FBRUFrcEIsOEJBQXNCeUI7QUFFdEJqQix3QkFBZ0IsS0FBRDtBQUNmRCxzQkFBYTtBQUNiRCwwQkFBaUI7QUFDakJGLG9DQUE0Qkssa0JBQWtCTyxTQUFEO0FBRTdDQSxrQkFBVXRJLFNBQVM7VUFBQ2xFLGVBQWUwTDtRQUFoQixDQUFuQjtNQUNEO0FBRURFLGtDQUE0Qkssa0JBQWtCTyxTQUFEO0FBRTdDLGFBQU9BO0lBQ1I7QUNqUUQsUUFBTVUsc0JBQXNCO01BQzFCQyxXQUFXO01BQ1hDLFNBQVM7TUFDVEMsT0FBTztJQUhtQjtBQVU1QixhQUFTQyxTQUNQakQsU0FDQWxQLE9BQ3VCO0FBRXZCLFVBQUEsT0FBYTtBQUNYc0osa0JBQ0UsRUFBRXRKLFNBQVNBLE1BQU05YyxTQUNqQixDQUNFLDhFQUNBLGtEQUZGLEVBR0V6RSxLQUFLLEdBSFAsQ0FGTztNQU9WO0FBRUQsVUFBSTRwQixZQUE4QixDQUFBO0FBQ2xDLFVBQUkrSixzQkFBa0MsQ0FBQTtBQUN0QyxVQUFJQyxXQUFXO0FBRWYsVUFBT252QixTQUFVOGMsTUFBVjljO0FBRVAsVUFBTW92QixjQUFjdlUsaUJBQWlCaUMsT0FBTyxDQUFDLFFBQUQsQ0FBUjtBQUNwQyxVQUFNdVMsY0FBVzFxQixPQUFBQyxPQUFBLENBQUEsR0FBT3dxQixhQUFQO1FBQW9CMU4sU0FBUztRQUFVRCxPQUFPO01BQTlDLENBQUE7QUFDakIsVUFBTTZOLGFBQVUzcUIsT0FBQUMsT0FBQTtRQUNkNmMsT0FBTzVCLGFBQWE0QjtNQUROLEdBRVgyTixhQUZXO1FBR2Q1TixjQUFjO01BSEEsQ0FBQTtBQU1oQixVQUFNK04sY0FBY3hELE9BQU1DLFNBQVNxRCxXQUFWO0FBQ3pCLFVBQU1HLHdCQUF3QnRVLGlCQUFpQnFVLFdBQUQ7QUFFOUMsZUFBU3JPLFVBQVV4RSxPQUFvQjtBQUNyQyxZQUFJLENBQUNBLE1BQU0xYyxVQUFVbXZCLFVBQVU7QUFDN0I7UUFDRDtBQUVELFlBQU1NLGFBQWMvUyxNQUFNMWMsT0FBbUIwdkIsUUFBUTF2QixNQUFsQztBQUVuQixZQUFJLENBQUN5dkIsWUFBWTtBQUNmO1FBQ0Q7QUFNRCxZQUFNL04sVUFDSitOLFdBQVdoTixhQUFhLG9CQUF4QixLQUNBM0YsTUFBTTRFLFdBQ043QixhQUFhNkI7QUFHZixZQUFJK04sV0FBVzVULFFBQVE7QUFDckI7UUFDRDtBQUVELFlBQUlhLE1BQU12QyxTQUFTLGdCQUFnQixPQUFPbVYsV0FBVzdOLFVBQVUsV0FBVztBQUN4RTtRQUNEO0FBRUQsWUFDRS9FLE1BQU12QyxTQUFTLGdCQUNmdUgsUUFBUWppQixRQUFTb3ZCLG9CQUE0Qm5TLE1BQU12QyxJQUFuQyxDQUFoQixJQUE0RCxHQUM1RDtBQUNBO1FBQ0Q7QUFFRCxZQUFNM08sV0FBV3VnQixPQUFNMEQsWUFBWUgsVUFBYjtBQUV0QixZQUFJOWpCLFVBQVU7QUFDWjBqQixnQ0FBc0JBLG9CQUFvQmp2QixPQUFPdUwsUUFBM0I7UUFDdkI7TUFDRjtBQUVELGVBQVN3ZCxHQUNQcHZCLE1BQ0FxdkIsV0FDQUMsU0FDQXJrQixTQUNNO0FBQUEsWUFETkEsWUFDTSxRQUFBO0FBRE5BLG9CQUE2QztRQUN2QztBQUNOakwsYUFBSzRULGlCQUFpQnliLFdBQVdDLFNBQVNya0IsT0FBMUM7QUFDQXNnQixrQkFBVXZoQixLQUFLO1VBQUNoSztVQUFNcXZCO1VBQVdDO1VBQVNya0I7UUFBM0IsQ0FBZjtNQUNEO0FBRUQsZUFBUzhxQixrQkFBa0Jua0IsVUFBMEI7QUFDbkQsWUFBTzlKLFlBQWE4SixTQUFiOUo7QUFFUHNuQixXQUFHdG5CLFdBQVcsY0FBY3dmLFdBQVd0SCxhQUFyQztBQUNGb1AsV0FBR3RuQixXQUFXLGFBQWF3ZixTQUF6QjtBQUNGOEgsV0FBR3RuQixXQUFXLFdBQVd3ZixTQUF2QjtBQUNGOEgsV0FBR3RuQixXQUFXLFNBQVN3ZixTQUFyQjtNQUNIO0FBRUQsZUFBUzBPLHVCQUE2QjtBQUNwQ3pLLGtCQUFVbmlCLFFBQVEsU0FBQTFHLE1BQXlEO0FBQUEsY0FBdkQxQyxPQUF1RDBDLEtBQXZEMUMsTUFBTXF2QixZQUFpRDNzQixLQUFqRDJzQixXQUFXQyxVQUFzQzVzQixLQUF0QzRzQixTQUFTcmtCLFVBQTZCdkksS0FBN0J1STtBQUM1Q2pMLGVBQUs2VCxvQkFBb0J3YixXQUFXQyxTQUFTcmtCLE9BQTdDO1FBQ0QsQ0FGRDtBQUdBc2dCLG9CQUFZLENBQUE7TUFDYjtBQUVELGVBQVMwSyxlQUFlcmtCLFVBQTBCO0FBQ2hELFlBQU1za0Isa0JBQWtCdGtCLFNBQVNrQjtBQUNqQyxZQUFNcWpCLGlCQUFpQnZrQixTQUFTeWE7QUFDaEMsWUFBTStKLGtCQUFrQnhrQixTQUFTMGE7QUFFakMxYSxpQkFBU2tCLFVBQVUsU0FBQ3VqQiw2QkFBNkM7QUFBQSxjQUE3Q0EsZ0NBQTZDLFFBQUE7QUFBN0NBLDBDQUE4QjtVQUFlO0FBQy9ELGNBQUlBLDZCQUE2QjtBQUMvQmYsZ0NBQW9CbHNCLFFBQVEsU0FBQzhtQixXQUFhO0FBQ3hDQSx3QkFBU3BkLFFBQVQ7WUFDRCxDQUZEO1VBR0Q7QUFFRHdpQixnQ0FBc0IsQ0FBQTtBQUV0QlUsK0JBQW9CO0FBQ3BCRSwwQkFBZTtRQUNoQjtBQUVEdGtCLGlCQUFTeWEsU0FBUyxXQUFZO0FBQzVCOEoseUJBQWM7QUFDZGIsOEJBQW9CbHNCLFFBQVEsU0FBQzhtQixXQUFEO0FBQUEsbUJBQWNBLFVBQVM3RCxPQUFUO1VBQWQsQ0FBNUI7QUFDQWtKLHFCQUFXO1FBQ1o7QUFFRDNqQixpQkFBUzBhLFVBQVUsV0FBWTtBQUM3QjhKLDBCQUFlO0FBQ2ZkLDhCQUFvQmxzQixRQUFRLFNBQUM4bUIsV0FBRDtBQUFBLG1CQUFjQSxVQUFTNUQsUUFBVDtVQUFkLENBQTVCO0FBQ0FpSixxQkFBVztRQUNaO0FBRURRLDBCQUFrQm5rQixRQUFEO01BQ2xCO0FBRURna0IsNEJBQXNCeHNCLFFBQVE2c0IsY0FBOUI7QUFFQSxhQUFPTjtJQUNSO0FDckpELFFBQU12USxjQUEyQjtNQUMvQjdiLE1BQU07TUFDTjhXLGNBQWM7TUFDZGhXLElBSCtCLFNBQUFBLEdBRzVCdUgsVUFBVTtBQUFBLFlBQUEwYjtBQUVYLFlBQUksR0FBQUEsd0JBQUMxYixTQUFTc1IsTUFBTXlFLFdBQWhCLFFBQUMyRixzQkFBdUI3QyxVQUFTO0FBQ25DLGNBQUEsT0FBYTtBQUNYK0Isc0JBQ0U1YSxTQUFTc1IsTUFBTWtDLGFBQ2YsZ0VBRk87VUFJVjtBQUVELGlCQUFPLENBQUE7UUFDUjtBQUVELFlBQUFpRixlQUF1QlQsWUFBWWhZLFNBQVMvSixNQUFWLEdBQTNCZ2MsTUFBUHdHLGFBQU94RyxLQUFLOEIsVUFBWjBFLGFBQVkxRTtBQUVaLFlBQU1zRSxXQUFXclksU0FBU3NSLE1BQU1rQyxjQUM1QmtSLHNCQUFxQixJQUNyQjtBQUVKLGVBQU87VUFDTHZQLFVBREssU0FBQUEsV0FDWTtBQUNmLGdCQUFJa0QsVUFBVTtBQUNacEcsa0JBQUkwUyxhQUFhdE0sVUFBVXBHLElBQUlnRyxpQkFBL0I7QUFDQWhHLGtCQUFJeE4sYUFBYSxvQkFBb0IsRUFBckM7QUFDQXdOLGtCQUFJM04sTUFBTTNSLFdBQVc7QUFFckJxTix1QkFBU3FhLFNBQVM7Z0JBQUNsVyxPQUFPO2dCQUFPMlAsV0FBVztjQUExQixDQUFsQjtZQUNEO1VBQ0Y7VUFDRHlCLFNBVkssU0FBQUEsVUFVVztBQUNkLGdCQUFJOEMsVUFBVTtBQUNaLGtCQUFPMUgscUJBQXNCc0IsSUFBSTNOLE1BQTFCcU07QUFDUCxrQkFBTStELFdBQVdrUSxPQUFPalUsbUJBQW1CaEwsUUFBUSxNQUFNLEVBQWpDLENBQUQ7QUFLdkJvTyxzQkFBUXpQLE1BQU11Z0Isa0JBQXFCNTFCLEtBQUtFLE1BQU11bEIsV0FBVyxFQUF0QixJQUFuQztBQUVBMkQsdUJBQVMvVCxNQUFNcU0scUJBQXFCQTtBQUNwQ0MsaUNBQW1CLENBQUN5SCxRQUFELEdBQVksU0FBYjtZQUNuQjtVQUNGO1VBQ0Q3QyxRQXhCSyxTQUFBQSxTQXdCVTtBQUNiLGdCQUFJNkMsVUFBVTtBQUNaQSx1QkFBUy9ULE1BQU1xTSxxQkFBcUI7WUFDckM7VUFDRjtVQUNEMkUsUUE3QkssU0FBQUEsU0E2QlU7QUFDYixnQkFBSStDLFVBQVU7QUFDWnpILGlDQUFtQixDQUFDeUgsUUFBRCxHQUFZLFFBQWI7WUFDbkI7VUFDRjtRQWpDSTtNQW1DUjtJQXpEOEI7QUE4RGpDLGFBQVNxTSx3QkFBd0M7QUFDL0MsVUFBTXJNLFdBQVdySSxJQUFHO0FBQ3BCcUksZUFBU1QsWUFBWTNKO0FBQ3JCMkMseUJBQW1CLENBQUN5SCxRQUFELEdBQVksUUFBYjtBQUNsQixhQUFPQTtJQUNSO0FDdEVELFFBQUl5TSxjQUFjO01BQUMzVCxTQUFTO01BQUdDLFNBQVM7SUFBdEI7QUFDbEIsUUFBSTJULGtCQUE4RCxDQUFBO0FBRWxFLGFBQVNDLGlCQUFUbDBCLE1BQWdFO0FBQUEsVUFBckNxZ0IsVUFBcUNyZ0IsS0FBckNxZ0IsU0FBU0MsVUFBNEJ0Z0IsS0FBNUJzZ0I7QUFDbEMwVCxvQkFBYztRQUFDM1Q7UUFBU0M7TUFBVjtJQUNmO0FBRUQsYUFBUzZULHVCQUF1QjlILEtBQXFCO0FBQ25EQSxVQUFJbmIsaUJBQWlCLGFBQWFnakIsZ0JBQWxDO0lBQ0Q7QUFFRCxhQUFTRSwwQkFBMEIvSCxLQUFxQjtBQUN0REEsVUFBSWxiLG9CQUFvQixhQUFhK2lCLGdCQUFyQztJQUNEO0FBRUQsUUFBTXZSLGVBQTZCO01BQ2pDOWIsTUFBTTtNQUNOOFcsY0FBYztNQUNkaFcsSUFIaUMsU0FBQUEsR0FHOUJ1SCxVQUFVO0FBQ1gsWUFBTTlKLFlBQVk4SixTQUFTOUo7QUFDM0IsWUFBTWluQixNQUFNdE0saUJBQWlCN1EsU0FBU3NSLE1BQU02RSxpQkFBaUJqZ0IsU0FBakM7QUFFNUIsWUFBSWl2QixtQkFBbUI7QUFDdkIsWUFBSUMsZ0JBQWdCO0FBQ3BCLFlBQUlDLGNBQWM7QUFDbEIsWUFBSTlNLFlBQVl2WSxTQUFTc1I7QUFFekIsaUJBQVNnVSx1QkFBZ0M7QUFDdkMsaUJBQ0V0bEIsU0FBU3NSLE1BQU1tQyxpQkFBaUIsYUFBYXpULFNBQVNuRCxNQUFNb1c7UUFFL0Q7QUFFRCxpQkFBU3NTLGNBQW9CO0FBQzNCcEksY0FBSW5iLGlCQUFpQixhQUFhNlgsV0FBbEM7UUFDRDtBQUVELGlCQUFTMkwsaUJBQXVCO0FBQzlCckksY0FBSWxiLG9CQUFvQixhQUFhNFgsV0FBckM7UUFDRDtBQUVELGlCQUFTNEwsOEJBQW9DO0FBQzNDTiw2QkFBbUI7QUFDbkJubEIsbUJBQVNxYSxTQUFTO1lBQUMxRix3QkFBd0I7VUFBekIsQ0FBbEI7QUFDQXdRLDZCQUFtQjtRQUNwQjtBQUVELGlCQUFTdEwsWUFBWTNJLE9BQXlCO0FBRzVDLGNBQU13VSx3QkFBd0J4VSxNQUFNMWMsU0FDaEMwQixVQUFVa0UsU0FBUzhXLE1BQU0xYyxNQUF6QixJQUNBO0FBQ0osY0FBT214QixnQkFBZ0IzbEIsU0FBU3NSLE1BQXpCbUM7QUFDUCxjQUFPdEMsVUFBb0JELE1BQXBCQyxTQUFTQyxVQUFXRixNQUFYRTtBQUVoQixjQUFNcmUsT0FBT21ELFVBQVUvRixzQkFBVjtBQUNiLGNBQU15MUIsWUFBWXpVLFVBQVVwZSxLQUFLN0I7QUFDakMsY0FBTTIwQixZQUFZelUsVUFBVXJlLEtBQUsxQjtBQUVqQyxjQUFJcTBCLHlCQUF5QixDQUFDMWxCLFNBQVNzUixNQUFNd0QsYUFBYTtBQUN4RDlVLHFCQUFTcWEsU0FBUzs7Y0FFaEIxRix3QkFGZ0IsU0FBQUEseUJBRVM7QUFDdkIsb0JBQU1tUixRQUFPNXZCLFVBQVUvRixzQkFBVjtBQUViLG9CQUFJYyxJQUFJa2dCO0FBQ1Isb0JBQUkvZixJQUFJZ2dCO0FBRVIsb0JBQUl1VSxrQkFBaUIsV0FBVztBQUM5QjEwQixzQkFBSTYwQixNQUFLNTBCLE9BQU8wMEI7QUFDaEJ4MEIsc0JBQUkwMEIsTUFBS3owQixNQUFNdzBCO2dCQUNoQjtBQUVELG9CQUFNeDBCLE1BQU1zMEIsa0JBQWlCLGVBQWVHLE1BQUt6MEIsTUFBTUQ7QUFDdkQsb0JBQU1HLFFBQVFvMEIsa0JBQWlCLGFBQWFHLE1BQUt2MEIsUUFBUU47QUFDekQsb0JBQU1PLFNBQVNtMEIsa0JBQWlCLGVBQWVHLE1BQUt0MEIsU0FBU0o7QUFDN0Qsb0JBQU1GLE9BQU95MEIsa0JBQWlCLGFBQWFHLE1BQUs1MEIsT0FBT0Q7QUFFdkQsdUJBQU87a0JBQ0xOLE9BQU9ZLFFBQVFMO2tCQUNmTCxRQUFRVyxTQUFTSDtrQkFDakJBO2tCQUNBRTtrQkFDQUM7a0JBQ0FOO2dCQU5LO2NBUVI7WUExQmUsQ0FBbEI7VUE0QkQ7UUFDRjtBQUVELGlCQUFTNjBCLFNBQWU7QUFDdEIsY0FBSS9sQixTQUFTc1IsTUFBTW1DLGNBQWM7QUFDL0JzUiw0QkFBZ0Izc0IsS0FBSztjQUFDNEg7Y0FBVW1kO1lBQVgsQ0FBckI7QUFDQThILG1DQUF1QjlILEdBQUQ7VUFDdkI7UUFDRjtBQUVELGlCQUFTamMsVUFBZ0I7QUFDdkI2akIsNEJBQWtCQSxnQkFBZ0J2dkIsT0FDaEMsU0FBQzhELE1BQUQ7QUFBQSxtQkFBVUEsS0FBSzBHLGFBQWFBO1VBQTVCLENBRGdCO0FBSWxCLGNBQUkra0IsZ0JBQWdCdnZCLE9BQU8sU0FBQzhELE1BQUQ7QUFBQSxtQkFBVUEsS0FBSzZqQixRQUFRQTtVQUF2QixDQUF2QixFQUFtRHJlLFdBQVcsR0FBRztBQUNuRW9tQixzQ0FBMEIvSCxHQUFEO1VBQzFCO1FBQ0Y7QUFFRCxlQUFPO1VBQ0xoSSxVQUFVNFE7VUFDVjNRLFdBQVdsVTtVQUNYZ1UsZ0JBSEssU0FBQUEsaUJBR2tCO0FBQ3JCcUQsd0JBQVl2WSxTQUFTc1I7VUFDdEI7VUFDRDJELGVBTkssU0FBQUEsY0FNUytRLEdBTlR0akIsT0FNa0M7QUFBQSxnQkFBckJpakIsZ0JBQXFCampCLE1BQXJCK1E7QUFDaEIsZ0JBQUkwUixrQkFBa0I7QUFDcEI7WUFDRDtBQUVELGdCQUNFUSxrQkFBaUIsVUFDakJwTixVQUFVOUUsaUJBQWlCa1MsZUFDM0I7QUFDQXprQixzQkFBTztBQUVQLGtCQUFJeWtCLGVBQWM7QUFDaEJJLHVCQUFNO0FBRU4sb0JBQ0UvbEIsU0FBU25ELE1BQU1xZCxhQUNmLENBQUNrTCxpQkFDRCxDQUFDRSxxQkFBb0IsR0FDckI7QUFDQUMsOEJBQVc7Z0JBQ1o7Y0FDRixPQUFNO0FBQ0xDLCtCQUFjO0FBQ2RDLDRDQUEyQjtjQUM1QjtZQUNGO1VBQ0Y7VUFDRGxRLFNBakNLLFNBQUFBLFVBaUNXO0FBQ2QsZ0JBQUl2VixTQUFTc1IsTUFBTW1DLGdCQUFnQixDQUFDMlIsZUFBZTtBQUNqRCxrQkFBSUMsYUFBYTtBQUNmeEwsNEJBQVlpTCxXQUFEO0FBQ1hPLDhCQUFjO2NBQ2Y7QUFFRCxrQkFBSSxDQUFDQyxxQkFBb0IsR0FBSTtBQUMzQkMsNEJBQVc7Y0FDWjtZQUNGO1VBQ0Y7VUFDRDdQLFdBN0NLLFNBQUFBLFVBNkNLc1EsR0FBRzlVLE9BQWE7QUFDeEIsZ0JBQUlmLGFBQWFlLEtBQUQsR0FBUztBQUN2QjRULDRCQUFjO2dCQUFDM1QsU0FBU0QsTUFBTUM7Z0JBQVNDLFNBQVNGLE1BQU1FO2NBQXhDO1lBQ2Y7QUFDRGdVLDRCQUFnQmxVLE1BQU12QyxTQUFTO1VBQ2hDO1VBQ0QwRyxVQW5ESyxTQUFBQSxXQW1EWTtBQUNmLGdCQUFJclYsU0FBU3NSLE1BQU1tQyxjQUFjO0FBQy9CZ1MsMENBQTJCO0FBQzNCRCw2QkFBYztBQUNkSCw0QkFBYztZQUNmO1VBQ0Y7UUF6REk7TUEyRFI7SUF6SmdDO0FDYm5DLGFBQVNZLFNBQVMzVSxPQUFjN1osVUFBOEM7QUFBQSxVQUFBeXVCO0FBQzVFLGFBQU87UUFDTHBRLGVBQWEzYyxPQUFBQyxPQUFBLENBQUEsR0FDUmtZLE1BQU13RSxlQURFO1VBRVgzZSxXQUFTLENBQUEsRUFBQTFDLFVBQ0h5eEIsdUJBQUE1VSxNQUFNd0Usa0JBQU4sT0FBQSxTQUFBb1EscUJBQXFCL3VCLGNBQWEsQ0FBQSxHQUFJM0IsT0FDeEMsU0FBQTFFLE1BQUE7QUFBQSxnQkFBRTZHLE9BQUY3RyxLQUFFNkc7QUFBRixtQkFBWUEsU0FBU0YsU0FBU0U7VUFBOUIsQ0FEQyxHQURJLENBSVBGLFFBSk8sQ0FBQTtRQUZFLENBQUE7TUFEUjtJQVdSO0FBRUQsUUFBTWljLG9CQUF1QztNQUMzQy9iLE1BQU07TUFDTjhXLGNBQWM7TUFDZGhXLElBSDJDLFNBQUFBLEdBR3hDdUgsVUFBVTtBQUNYLFlBQU85SixZQUFhOEosU0FBYjlKO0FBRVAsaUJBQVMrakIsWUFBcUI7QUFDNUIsaUJBQU8sQ0FBQyxDQUFDamEsU0FBU3NSLE1BQU1vQztRQUN6QjtBQUVELFlBQUlwZDtBQUNKLFlBQUk2dkIsa0JBQWtCO0FBQ3RCLFlBQUloQixtQkFBbUI7QUFDdkIsWUFBSWlCLGtCQUFpQyxDQUFBO0FBRXJDLFlBQU0zdUIsV0FHRjtVQUNGRSxNQUFNO1VBQ040SSxTQUFTO1VBQ1RoSSxPQUFPO1VBQ1BFLElBSkUsU0FBQTR0QixJQUFBM2pCLE9BSVU7QUFBQSxnQkFBUjdGLFFBQVE2RixNQUFSN0Y7QUFDRixnQkFBSW9kLFVBQVMsR0FBSTtBQUNmLGtCQUFJbU0sZ0JBQWdCbnlCLFFBQVE0SSxNQUFNdkcsU0FBOUIsTUFBNkMsSUFBSTtBQUNuRDh2QixrQ0FBa0IsQ0FBQTtjQUNuQjtBQUVELGtCQUNFOXZCLGNBQWN1RyxNQUFNdkcsYUFDcEI4dkIsZ0JBQWdCbnlCLFFBQVE0SSxNQUFNdkcsU0FBOUIsTUFBNkMsSUFDN0M7QUFDQTh2QixnQ0FBZ0JodUIsS0FBS3lFLE1BQU12RyxTQUEzQjtBQUNBMEoseUJBQVNxYSxTQUFTOztrQkFFaEIxRix3QkFBd0IsU0FBQUEseUJBQUE7QUFBQSwyQkFDdEIyUix3QkFBdUJ6cEIsTUFBTXZHLFNBQVA7a0JBREE7Z0JBRlIsQ0FBbEI7Y0FLRDtBQUVEQSwwQkFBWXVHLE1BQU12RztZQUNuQjtVQUNGO1FBeEJDO0FBMkJKLGlCQUFTZ3dCLHdCQUF1QmxnQixZQUF3QztBQUN0RSxpQkFBT21nQiw0QkFDTDdxQixpQkFBaUIwSyxVQUFELEdBQ2hCbFEsVUFBVS9GLHNCQUFWLEdBQ0EyZixVQUFVNVosVUFBVXN3QixlQUFWLENBQUQsR0FDVEwsZUFKZ0M7UUFNbkM7QUFFRCxpQkFBU00saUJBQWlCbFEsY0FBb0M7QUFDNUQ0Tyw2QkFBbUI7QUFDbkJubEIsbUJBQVNxYSxTQUFTOUQsWUFBbEI7QUFDQTRPLDZCQUFtQjtRQUNwQjtBQUVELGlCQUFTdUIsY0FBb0I7QUFDM0IsY0FBSSxDQUFDdkIsa0JBQWtCO0FBQ3JCc0IsNkJBQWlCUixTQUFTam1CLFNBQVNzUixPQUFPN1osUUFBakIsQ0FBVDtVQUNqQjtRQUNGO0FBRUQsZUFBTztVQUNMMGQsVUFBVXVSO1VBQ1Z6UixlQUFleVI7VUFDZmhSLFdBSEssU0FBQUEsVUFHS3NRLEdBQUc5VSxPQUFhO0FBQ3hCLGdCQUFJZixhQUFhZSxLQUFELEdBQVM7QUFDdkIsa0JBQU12VCxRQUFRbVMsVUFBVTlQLFNBQVM5SixVQUFVc3dCLGVBQW5CLENBQUQ7QUFDdkIsa0JBQU1HLGFBQWFocEIsTUFBTStLLEtBQ3ZCLFNBQUMzVixNQUFEO0FBQUEsdUJBQ0VBLEtBQUs3QixPQUFPLEtBQUtnZ0IsTUFBTUMsV0FDdkJwZSxLQUFLeEIsUUFBUSxLQUFLMmYsTUFBTUMsV0FDeEJwZSxLQUFLMUIsTUFBTSxLQUFLNmYsTUFBTUUsV0FDdEJyZSxLQUFLdkIsU0FBUyxLQUFLMGYsTUFBTUU7Y0FKM0IsQ0FEaUI7QUFPbkIsa0JBQU1yUSxRQUFRcEQsTUFBTTFKLFFBQVEweUIsVUFBZDtBQUNkUixnQ0FBa0JwbEIsUUFBUSxLQUFLQSxRQUFRb2xCO1lBQ3hDO1VBQ0Y7VUFDRDlRLFVBakJLLFNBQUFBLFdBaUJZO0FBQ2Y4USw4QkFBa0I7VUFDbkI7UUFuQkk7TUFxQlI7SUF2RjBDO0FBNEZ0QyxhQUFTSSw0QkFDZEssc0JBQ0FDLGNBQ0FDLGFBQ0FYLGlCQVFBO0FBRUEsVUFBSVcsWUFBWWhvQixTQUFTLEtBQUs4bkIseUJBQXlCLE1BQU07QUFDM0QsZUFBT0M7TUFDUjtBQUdELFVBQ0VDLFlBQVlob0IsV0FBVyxLQUN2QnFuQixtQkFBbUIsS0FDbkJXLFlBQVksQ0FBRCxFQUFJNTFCLE9BQU80MUIsWUFBWSxDQUFELEVBQUl2MUIsT0FDckM7QUFDQSxlQUFPdTFCLFlBQVlYLGVBQUQsS0FBcUJVO01BQ3hDO0FBRUQsY0FBUUQsc0JBQUE7UUFDTixLQUFLO1FBQ0wsS0FBSyxVQUFVO0FBQ2IsY0FBTUcsWUFBWUQsWUFBWSxDQUFEO0FBQzdCLGNBQU1FLFdBQVdGLFlBQVlBLFlBQVlob0IsU0FBUyxDQUF0QjtBQUM1QixjQUFNbW9CLFFBQVFMLHlCQUF5QjtBQUV2QyxjQUFNdjFCLE1BQU0wMUIsVUFBVTExQjtBQUN0QixjQUFNRyxTQUFTdzFCLFNBQVN4MUI7QUFDeEIsY0FBTU4sT0FBTysxQixRQUFRRixVQUFVNzFCLE9BQU84MUIsU0FBUzkxQjtBQUMvQyxjQUFNSyxRQUFRMDFCLFFBQVFGLFVBQVV4MUIsUUFBUXkxQixTQUFTejFCO0FBQ2pELGNBQU1aLFFBQVFZLFFBQVFMO0FBQ3RCLGNBQU1MLFNBQVNXLFNBQVNIO0FBRXhCLGlCQUFPO1lBQUNBO1lBQUtHO1lBQVFOO1lBQU1LO1lBQU9aO1lBQU9FO1VBQWxDO1FBQ1I7UUFDRCxLQUFLO1FBQ0wsS0FBSyxTQUFTO0FBQ1osY0FBTXEyQixVQUFVajRCLEtBQUtDLElBQUw2ZixNQUFBOWYsTUFBWTYzQixZQUFZbjNCLElBQUksU0FBQ2dPLE9BQUQ7QUFBQSxtQkFBV0EsTUFBTXpNO1VBQWpCLENBQWhCLENBQVI7QUFDcEIsY0FBTWkyQixXQUFXbDRCLEtBQUtELElBQUwrZixNQUFBOWYsTUFBWTYzQixZQUFZbjNCLElBQUksU0FBQ2dPLE9BQUQ7QUFBQSxtQkFBV0EsTUFBTXBNO1VBQWpCLENBQWhCLENBQVI7QUFDckIsY0FBTTYxQixlQUFlTixZQUFZdHhCLE9BQU8sU0FBQ3pDLE1BQUQ7QUFBQSxtQkFDdEM2ekIseUJBQXlCLFNBQ3JCN3pCLEtBQUs3QixTQUFTZzJCLFVBQ2RuMEIsS0FBS3hCLFVBQVU0MUI7VUFIbUIsQ0FBbkI7QUFNckIsY0FBTUUsT0FBTUQsYUFBYSxDQUFELEVBQUkvMUI7QUFDNUIsY0FBTWkyQixVQUFTRixhQUFhQSxhQUFhdG9CLFNBQVMsQ0FBdkIsRUFBMEJ0TjtBQUNyRCxjQUFNKzFCLFFBQU9MO0FBQ2IsY0FBTU0sU0FBUUw7QUFDZCxjQUFNTSxTQUFRRCxTQUFRRDtBQUN0QixjQUFNRyxVQUFTSixVQUFTRDtBQUV4QixpQkFBTztZQUFDaDJCLEtBQUFnMkI7WUFBSzcxQixRQUFBODFCO1lBQVFwMkIsTUFBQXEyQjtZQUFNaDJCLE9BQUFpMkI7WUFBTzcyQixPQUFBODJCO1lBQU81MkIsUUFBQTYyQjtVQUFsQztRQUNSO1FBQ0QsU0FBUztBQUNQLGlCQUFPYjtRQUNSO01BckNIO0lBdUNEO0FDOUtELFFBQU1sVCxTQUFpQjtNQUNyQmhjLE1BQU07TUFDTjhXLGNBQWM7TUFDZGhXLElBSHFCLFNBQUFBLEdBR2xCdUgsVUFBVTtBQUNYLFlBQU85SixZQUFxQjhKLFNBQXJCOUosV0FBV0QsU0FBVStKLFNBQVYvSjtBQUVsQixpQkFBUzB4QixlQUFrRDtBQUN6RCxpQkFBTzNuQixTQUFTZ2EsaUJBQ1poYSxTQUFTZ2EsZUFBZW5kLE1BQU1lLFNBQVMxSCxZQUN2Q0E7UUFDTDtBQUVELGlCQUFTMHhCLFlBQVlsckIsT0FBd0M7QUFDM0QsaUJBQU9zRCxTQUFTc1IsTUFBTXFDLFdBQVcsUUFBUTNULFNBQVNzUixNQUFNcUMsV0FBV2pYO1FBQ3BFO0FBRUQsWUFBSW1yQixjQUFpQztBQUNyQyxZQUFJQyxjQUFpQztBQUVyQyxpQkFBU0MsaUJBQXVCO0FBQzlCLGNBQU1DLGlCQUFpQkosWUFBWSxXQUFELElBQzlCRCxhQUFZLEVBQUd4M0Isc0JBQWYsSUFDQTtBQUNKLGNBQU04M0IsaUJBQWlCTCxZQUFZLFFBQUQsSUFDOUIzeEIsT0FBTzlGLHNCQUFQLElBQ0E7QUFFSixjQUNHNjNCLGtCQUFrQkUsa0JBQWtCTCxhQUFhRyxjQUFkLEtBQ25DQyxrQkFBa0JDLGtCQUFrQkosYUFBYUcsY0FBZCxHQUNwQztBQUNBLGdCQUFJam9CLFNBQVNnYSxnQkFBZ0I7QUFDM0JoYSx1QkFBU2dhLGVBQWV2WixPQUF4QjtZQUNEO1VBQ0Y7QUFFRG9uQix3QkFBY0c7QUFDZEYsd0JBQWNHO0FBRWQsY0FBSWpvQixTQUFTbkQsTUFBTXFkLFdBQVc7QUFDNUJvRixrQ0FBc0J5SSxjQUFEO1VBQ3RCO1FBQ0Y7QUFFRCxlQUFPO1VBQ0x4UyxTQURLLFNBQUFBLFVBQ1c7QUFDZCxnQkFBSXZWLFNBQVNzUixNQUFNcUMsUUFBUTtBQUN6Qm9VLDZCQUFjO1lBQ2Y7VUFDRjtRQUxJO01BT1I7SUFuRG9CO0FBd0R2QixhQUFTRyxrQkFDUEMsT0FDQUMsT0FDUztBQUNULFVBQUlELFNBQVNDLE9BQU87QUFDbEIsZUFDRUQsTUFBTTkyQixRQUFRKzJCLE1BQU0vMkIsT0FDcEI4MkIsTUFBTTUyQixVQUFVNjJCLE1BQU03MkIsU0FDdEI0MkIsTUFBTTMyQixXQUFXNDJCLE1BQU01MkIsVUFDdkIyMkIsTUFBTWozQixTQUFTazNCLE1BQU1sM0I7TUFFeEI7QUFFRCxhQUFPO0lBQ1I7QUN0RURxdkIsSUFBQUEsT0FBTWxLLGdCQUFnQjtNQUFDTjtJQUFELENBQXRCOzs7Ozs7Ozs7Ozs7O0FDSEEsSUFBQXNTLGdCQUFBLENBQUE7QUFBQUMsU0FBQUQsZUFBQTtFQUFBOUgsT0FBQUEsTUFBQWdJLGNBQUFDO0FBQUEsQ0FBQTtBQUFBQyxPQUFBQyxVQUFBQyxhQUFBTixhQUFBO0FBRUEsSUFBQUUsZ0JBQStCSyxRQUFBQyxrQkFBQSxHQUFBLENBQUE7QUFDL0JDLFdBQUFULGVBQWNPLFFBQUFDLGtCQUFBLEdBQUEsQ0FBQSxHQUhkSixPQUFBQyxPQUFBOyIsCiAgIm5hbWVzIjogWyJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbCIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbCIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIlN5bWJvbCIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAiZG9jdW1lbnQiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbCIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAiVHlwZUVycm9yIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAiZXhwb3J0cyIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZ2V0V2luZG93IiwgIm5vZGUiLCAid2luZG93IiwgInRvU3RyaW5nIiwgIm93bmVyRG9jdW1lbnQiLCAiZGVmYXVsdFZpZXciLCAiaXNFbGVtZW50IiwgIk93bkVsZW1lbnQiLCAiRWxlbWVudCIsICJpc0hUTUxFbGVtZW50IiwgIkhUTUxFbGVtZW50IiwgImlzU2hhZG93Um9vdCIsICJTaGFkb3dSb290IiwgIm1heCIsICJNYXRoIiwgIm1pbiIsICJyb3VuZCIsICJnZXRVQVN0cmluZyIsICJ1YURhdGEiLCAibmF2aWdhdG9yIiwgInVzZXJBZ2VudERhdGEiLCAiYnJhbmRzIiwgIkFycmF5IiwgImlzQXJyYXkiLCAibWFwIiwgIml0ZW0iLCAiYnJhbmQiLCAidmVyc2lvbiIsICJqb2luIiwgInVzZXJBZ2VudCIsICJpc0xheW91dFZpZXdwb3J0IiwgInRlc3QiLCAiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwgImVsZW1lbnQiLCAiaW5jbHVkZVNjYWxlIiwgImlzRml4ZWRTdHJhdGVneSIsICJjbGllbnRSZWN0IiwgInNjYWxlWCIsICJzY2FsZVkiLCAib2Zmc2V0V2lkdGgiLCAid2lkdGgiLCAib2Zmc2V0SGVpZ2h0IiwgImhlaWdodCIsICJfcmVmIiwgInZpc3VhbFZpZXdwb3J0IiwgImFkZFZpc3VhbE9mZnNldHMiLCAieCIsICJsZWZ0IiwgIm9mZnNldExlZnQiLCAieSIsICJ0b3AiLCAib2Zmc2V0VG9wIiwgInJpZ2h0IiwgImJvdHRvbSIsICJnZXRXaW5kb3dTY3JvbGwiLCAid2luIiwgInNjcm9sbExlZnQiLCAicGFnZVhPZmZzZXQiLCAic2Nyb2xsVG9wIiwgInBhZ2VZT2Zmc2V0IiwgImdldEhUTUxFbGVtZW50U2Nyb2xsIiwgImdldE5vZGVTY3JvbGwiLCAiZ2V0Tm9kZU5hbWUiLCAibm9kZU5hbWUiLCAidG9Mb3dlckNhc2UiLCAiZ2V0RG9jdW1lbnRFbGVtZW50IiwgImRvY3VtZW50IiwgImRvY3VtZW50RWxlbWVudCIsICJnZXRXaW5kb3dTY3JvbGxCYXJYIiwgImdldENvbXB1dGVkU3R5bGUiLCAiaXNTY3JvbGxQYXJlbnQiLCAiX2dldENvbXB1dGVkU3R5bGUiLCAib3ZlcmZsb3ciLCAib3ZlcmZsb3dYIiwgIm92ZXJmbG93WSIsICJpc0VsZW1lbnRTY2FsZWQiLCAicmVjdCIsICJnZXRDb21wb3NpdGVSZWN0IiwgImVsZW1lbnRPclZpcnR1YWxFbGVtZW50IiwgIm9mZnNldFBhcmVudCIsICJpc0ZpeGVkIiwgImlzT2Zmc2V0UGFyZW50QW5FbGVtZW50IiwgIm9mZnNldFBhcmVudElzU2NhbGVkIiwgInNjcm9sbCIsICJvZmZzZXRzIiwgImNsaWVudExlZnQiLCAiY2xpZW50VG9wIiwgImdldExheW91dFJlY3QiLCAiYWJzIiwgImdldFBhcmVudE5vZGUiLCAiYXNzaWduZWRTbG90IiwgInBhcmVudE5vZGUiLCAiaG9zdCIsICJnZXRTY3JvbGxQYXJlbnQiLCAiaW5kZXhPZiIsICJib2R5IiwgImxpc3RTY3JvbGxQYXJlbnRzIiwgImxpc3QiLCAiX2VsZW1lbnQkb3duZXJEb2N1bWVuIiwgInNjcm9sbFBhcmVudCIsICJpc0JvZHkiLCAidGFyZ2V0IiwgImNvbmNhdCIsICJ1cGRhdGVkTGlzdCIsICJpc1RhYmxlRWxlbWVudCIsICJnZXRUcnVlT2Zmc2V0UGFyZW50IiwgInBvc2l0aW9uIiwgImdldENvbnRhaW5pbmdCbG9jayIsICJpc0ZpcmVmb3giLCAiaXNJRSIsICJlbGVtZW50Q3NzIiwgImN1cnJlbnROb2RlIiwgImNzcyIsICJ0cmFuc2Zvcm0iLCAicGVyc3BlY3RpdmUiLCAiY29udGFpbiIsICJ3aWxsQ2hhbmdlIiwgImZpbHRlciIsICJnZXRPZmZzZXRQYXJlbnQiLCAid2luZG93MiIsICJhdXRvIiwgImJhc2VQbGFjZW1lbnRzIiwgInN0YXJ0IiwgImVuZCIsICJjbGlwcGluZ1BhcmVudHMiLCAidmlld3BvcnQiLCAicG9wcGVyIiwgInJlZmVyZW5jZSIsICJ2YXJpYXRpb25QbGFjZW1lbnRzIiwgInJlZHVjZSIsICJhY2MiLCAicGxhY2VtZW50IiwgInBsYWNlbWVudHMiLCAiYmVmb3JlUmVhZCIsICJyZWFkIiwgImFmdGVyUmVhZCIsICJiZWZvcmVNYWluIiwgIm1haW4iLCAiYWZ0ZXJNYWluIiwgImJlZm9yZVdyaXRlIiwgIndyaXRlIiwgImFmdGVyV3JpdGUiLCAibW9kaWZpZXJQaGFzZXMiLCAib3JkZXIiLCAibW9kaWZpZXJzIiwgIk1hcCIsICJ2aXNpdGVkIiwgIlNldCIsICJyZXN1bHQiLCAiZm9yRWFjaCIsICJtb2RpZmllciIsICJzZXQiLCAibmFtZSIsICJzb3J0IiwgImFkZCIsICJyZXF1aXJlcyIsICJyZXF1aXJlc0lmRXhpc3RzIiwgImRlcCIsICJoYXMiLCAiZGVwTW9kaWZpZXIiLCAiZ2V0IiwgInB1c2giLCAib3JkZXJNb2RpZmllcnMiLCAib3JkZXJlZE1vZGlmaWVycyIsICJwaGFzZSIsICJkZWJvdW5jZSIsICJmbiIsICJwZW5kaW5nIiwgIlByb21pc2UiLCAicmVzb2x2ZSIsICJ0aGVuIiwgIm1lcmdlQnlOYW1lIiwgIm1lcmdlZCIsICJtZXJnZWQyIiwgImN1cnJlbnQiLCAiZXhpc3RpbmciLCAiT2JqZWN0IiwgImFzc2lnbiIsICJvcHRpb25zIiwgImRhdGEiLCAia2V5cyIsICJrZXkiLCAiZ2V0Vmlld3BvcnRSZWN0IiwgInN0cmF0ZWd5IiwgImh0bWwiLCAiY2xpZW50V2lkdGgiLCAiY2xpZW50SGVpZ2h0IiwgImxheW91dFZpZXdwb3J0IiwgImdldERvY3VtZW50UmVjdCIsICJ3aW5TY3JvbGwiLCAic2Nyb2xsV2lkdGgiLCAic2Nyb2xsSGVpZ2h0IiwgImRpcmVjdGlvbiIsICJjb250YWlucyIsICJwYXJlbnQiLCAiY2hpbGQiLCAicm9vdE5vZGUiLCAiZ2V0Um9vdE5vZGUiLCAibmV4dCIsICJpc1NhbWVOb2RlIiwgInJlY3RUb0NsaWVudFJlY3QiLCAiZ2V0SW5uZXJCb3VuZGluZ0NsaWVudFJlY3QiLCAiZ2V0Q2xpZW50UmVjdEZyb21NaXhlZFR5cGUiLCAiY2xpcHBpbmdQYXJlbnQiLCAiZ2V0Q2xpcHBpbmdQYXJlbnRzIiwgImNsaXBwaW5nUGFyZW50czIiLCAiY2FuRXNjYXBlQ2xpcHBpbmciLCAiY2xpcHBlckVsZW1lbnQiLCAiZ2V0Q2xpcHBpbmdSZWN0IiwgImJvdW5kYXJ5IiwgInJvb3RCb3VuZGFyeSIsICJtYWluQ2xpcHBpbmdQYXJlbnRzIiwgImZpcnN0Q2xpcHBpbmdQYXJlbnQiLCAiY2xpcHBpbmdSZWN0IiwgImFjY1JlY3QiLCAiZ2V0QmFzZVBsYWNlbWVudCIsICJzcGxpdCIsICJnZXRWYXJpYXRpb24iLCAiZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50IiwgImNvbXB1dGVPZmZzZXRzIiwgInJlZmVyZW5jZTIiLCAiYmFzZVBsYWNlbWVudCIsICJ2YXJpYXRpb24iLCAiY29tbW9uWCIsICJjb21tb25ZIiwgIm1haW5BeGlzIiwgImxlbiIsICJnZXRGcmVzaFNpZGVPYmplY3QiLCAibWVyZ2VQYWRkaW5nT2JqZWN0IiwgInBhZGRpbmdPYmplY3QiLCAiZXhwYW5kVG9IYXNoTWFwIiwgInZhbHVlIiwgImhhc2hNYXAiLCAiZGV0ZWN0T3ZlcmZsb3ciLCAic3RhdGUiLCAiX29wdGlvbnMiLCAiX29wdGlvbnMkcGxhY2VtZW50IiwgIl9vcHRpb25zJHN0cmF0ZWd5IiwgIl9vcHRpb25zJGJvdW5kYXJ5IiwgIl9vcHRpb25zJHJvb3RCb3VuZGFyeSIsICJfb3B0aW9ucyRlbGVtZW50Q29udGUiLCAiZWxlbWVudENvbnRleHQiLCAiX29wdGlvbnMkYWx0Qm91bmRhcnkiLCAiYWx0Qm91bmRhcnkiLCAiX29wdGlvbnMkcGFkZGluZyIsICJwYWRkaW5nIiwgImFsdENvbnRleHQiLCAicG9wcGVyUmVjdCIsICJyZWN0cyIsICJlbGVtZW50cyIsICJjbGlwcGluZ0NsaWVudFJlY3QiLCAiY29udGV4dEVsZW1lbnQiLCAicmVmZXJlbmNlQ2xpZW50UmVjdCIsICJwb3BwZXJPZmZzZXRzMiIsICJwb3BwZXJDbGllbnRSZWN0IiwgImVsZW1lbnRDbGllbnRSZWN0IiwgIm92ZXJmbG93T2Zmc2V0cyIsICJvZmZzZXREYXRhIiwgIm1vZGlmaWVyc0RhdGEiLCAib2Zmc2V0IiwgIm9mZnNldDIiLCAibXVsdGlwbHkiLCAiYXhpcyIsICJERUZBVUxUX09QVElPTlMiLCAiYXJlVmFsaWRFbGVtZW50cyIsICJfbGVuIiwgImFyZ3VtZW50cyIsICJsZW5ndGgiLCAiYXJncyIsICJfa2V5IiwgInNvbWUiLCAicG9wcGVyR2VuZXJhdG9yIiwgImdlbmVyYXRvck9wdGlvbnMiLCAiX2dlbmVyYXRvck9wdGlvbnMiLCAiX2dlbmVyYXRvck9wdGlvbnMkZGVmIiwgImRlZmF1bHRNb2RpZmllcnMiLCAiZGVmYXVsdE1vZGlmaWVyczIiLCAiX2dlbmVyYXRvck9wdGlvbnMkZGVmMiIsICJkZWZhdWx0T3B0aW9ucyIsICJjcmVhdGVQb3BwZXIyIiwgInBvcHBlcjIiLCAiYXR0cmlidXRlcyIsICJzdHlsZXMiLCAiZWZmZWN0Q2xlYW51cEZucyIsICJpc0Rlc3Ryb3llZCIsICJpbnN0YW5jZSIsICJzZXRPcHRpb25zIiwgInNldE9wdGlvbnNBY3Rpb24iLCAib3B0aW9uczIiLCAiY2xlYW51cE1vZGlmaWVyRWZmZWN0cyIsICJzY3JvbGxQYXJlbnRzIiwgIm0iLCAiZW5hYmxlZCIsICJydW5Nb2RpZmllckVmZmVjdHMiLCAidXBkYXRlIiwgImZvcmNlVXBkYXRlIiwgIl9zdGF0ZSRlbGVtZW50cyIsICJyZWZlcmVuY2UzIiwgInBvcHBlcjMiLCAicmVzZXQiLCAiaW5kZXgiLCAiX3N0YXRlJG9yZGVyZWRNb2RpZmllIiwgIl9zdGF0ZSRvcmRlcmVkTW9kaWZpZTIiLCAiZGVzdHJveSIsICJzdGF0ZTIiLCAib25GaXJzdFVwZGF0ZSIsICJfcmVmJG9wdGlvbnMiLCAiZWZmZWN0MiIsICJlZmZlY3QiLCAiY2xlYW51cEZuIiwgIm5vb3BGbiIsICJub29wRm4yIiwgInBhc3NpdmUiLCAiZWZmZWN0JDIiLCAiX29wdGlvbnMkc2Nyb2xsIiwgIl9vcHRpb25zJHJlc2l6ZSIsICJyZXNpemUiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJyZW1vdmVFdmVudExpc3RlbmVyIiwgImV2ZW50TGlzdGVuZXJzIiwgInBvcHBlck9mZnNldHMiLCAicG9wcGVyT2Zmc2V0cyQxIiwgInVuc2V0U2lkZXMiLCAicm91bmRPZmZzZXRzQnlEUFIiLCAiZHByIiwgImRldmljZVBpeGVsUmF0aW8iLCAibWFwVG9TdHlsZXMiLCAiX3JlZjIiLCAiX09iamVjdCRhc3NpZ24yIiwgImdwdUFjY2VsZXJhdGlvbiIsICJhZGFwdGl2ZSIsICJyb3VuZE9mZnNldHMiLCAiX29mZnNldHMkeCIsICJfb2Zmc2V0cyR5IiwgIl9yZWYzIiwgImhhc1giLCAiaGFzT3duUHJvcGVydHkiLCAiaGFzWSIsICJzaWRlWCIsICJzaWRlWSIsICJoZWlnaHRQcm9wIiwgIndpZHRoUHJvcCIsICJvZmZzZXRZIiwgIm9mZnNldFgiLCAiY29tbW9uU3R5bGVzIiwgIl9yZWY0IiwgIl9PYmplY3QkYXNzaWduIiwgImNvbXB1dGVTdHlsZXMiLCAiX3JlZjUiLCAiX29wdGlvbnMkZ3B1QWNjZWxlcmF0IiwgIl9vcHRpb25zJGFkYXB0aXZlIiwgIl9vcHRpb25zJHJvdW5kT2Zmc2V0cyIsICJhcnJvdyIsICJjb21wdXRlU3R5bGVzJDEiLCAiYXBwbHlTdHlsZXMiLCAic3R5bGUiLCAibmFtZTIiLCAicmVtb3ZlQXR0cmlidXRlIiwgInNldEF0dHJpYnV0ZSIsICJlZmZlY3QkMSIsICJpbml0aWFsU3R5bGVzIiwgIm1hcmdpbiIsICJzdHlsZVByb3BlcnRpZXMiLCAic3R5bGUyIiwgInByb3BlcnR5IiwgImF0dHJpYnV0ZSIsICJhcHBseVN0eWxlcyQxIiwgImRpc3RhbmNlQW5kU2tpZGRpbmdUb1hZIiwgImludmVydERpc3RhbmNlIiwgInNraWRkaW5nIiwgImRpc3RhbmNlIiwgIl9vcHRpb25zJG9mZnNldCIsICJfZGF0YSRzdGF0ZSRwbGFjZW1lbnQiLCAib2Zmc2V0JDEiLCAiaGFzaCQxIiwgImdldE9wcG9zaXRlUGxhY2VtZW50IiwgInJlcGxhY2UiLCAibWF0Y2hlZCIsICJoYXNoIiwgImdldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50IiwgImNvbXB1dGVBdXRvUGxhY2VtZW50IiwgImZsaXBWYXJpYXRpb25zIiwgIl9vcHRpb25zJGFsbG93ZWRBdXRvUCIsICJhbGxvd2VkQXV0b1BsYWNlbWVudHMiLCAicGxhY2VtZW50cyQxIiwgInBsYWNlbWVudDIiLCAiYWxsb3dlZFBsYWNlbWVudHMiLCAib3ZlcmZsb3dzIiwgImEiLCAiYiIsICJnZXRFeHBhbmRlZEZhbGxiYWNrUGxhY2VtZW50cyIsICJvcHBvc2l0ZVBsYWNlbWVudCIsICJmbGlwIiwgIl9za2lwIiwgIl9vcHRpb25zJG1haW5BeGlzIiwgImNoZWNrTWFpbkF4aXMiLCAiX29wdGlvbnMkYWx0QXhpcyIsICJhbHRBeGlzIiwgImNoZWNrQWx0QXhpcyIsICJzcGVjaWZpZWRGYWxsYmFja1BsYWNlbWVudHMiLCAiZmFsbGJhY2tQbGFjZW1lbnRzIiwgIl9vcHRpb25zJGZsaXBWYXJpYXRpbyIsICJwcmVmZXJyZWRQbGFjZW1lbnQiLCAiaXNCYXNlUGxhY2VtZW50IiwgInBsYWNlbWVudHMyIiwgInJlZmVyZW5jZVJlY3QiLCAiY2hlY2tzTWFwIiwgIm1ha2VGYWxsYmFja0NoZWNrcyIsICJmaXJzdEZpdHRpbmdQbGFjZW1lbnQiLCAiaSIsICJfYmFzZVBsYWNlbWVudCIsICJpc1N0YXJ0VmFyaWF0aW9uIiwgImlzVmVydGljYWwiLCAibWFpblZhcmlhdGlvblNpZGUiLCAiYWx0VmFyaWF0aW9uU2lkZSIsICJjaGVja3MiLCAiZXZlcnkiLCAiY2hlY2siLCAibnVtYmVyT2ZDaGVja3MiLCAiX2xvb3AiLCAiX2xvb3AyIiwgIl9pMiIsICJmaXR0aW5nUGxhY2VtZW50IiwgImZpbmQiLCAiY2hlY2tzMiIsICJzbGljZSIsICJfaSIsICJfcmV0IiwgImZsaXAkMSIsICJnZXRBbHRBeGlzIiwgIndpdGhpbiIsICJtaW4kMSIsICJtYXgkMSIsICJ3aXRoaW5NYXhDbGFtcCIsICJtaW4yIiwgIm1heDIiLCAidiIsICJwcmV2ZW50T3ZlcmZsb3ciLCAiX29wdGlvbnMkdGV0aGVyIiwgInRldGhlciIsICJfb3B0aW9ucyR0ZXRoZXJPZmZzZXQiLCAidGV0aGVyT2Zmc2V0IiwgInRldGhlck9mZnNldFZhbHVlIiwgIm5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZSIsICJvZmZzZXRNb2RpZmllclN0YXRlIiwgIl9vZmZzZXRNb2RpZmllclN0YXRlJCIsICJtYWluU2lkZSIsICJhbHRTaWRlIiwgImFkZGl0aXZlIiwgIm1pbkxlbiIsICJtYXhMZW4iLCAiYXJyb3dFbGVtZW50IiwgImFycm93UmVjdCIsICJhcnJvd1BhZGRpbmdPYmplY3QiLCAiYXJyb3dQYWRkaW5nTWluIiwgImFycm93UGFkZGluZ01heCIsICJhcnJvd0xlbiIsICJtaW5PZmZzZXQiLCAibWF4T2Zmc2V0IiwgImFycm93T2Zmc2V0UGFyZW50IiwgImNsaWVudE9mZnNldCIsICJvZmZzZXRNb2RpZmllclZhbHVlIiwgInRldGhlck1pbiIsICJ0ZXRoZXJNYXgiLCAicHJldmVudGVkT2Zmc2V0IiwgIl9vZmZzZXRNb2RpZmllclN0YXRlJDIiLCAiX21haW5TaWRlIiwgIl9hbHRTaWRlIiwgIl9vZmZzZXQiLCAiX21pbiIsICJfbWF4IiwgImlzT3JpZ2luU2lkZSIsICJfb2Zmc2V0TW9kaWZpZXJWYWx1ZSIsICJfdGV0aGVyTWluIiwgIl90ZXRoZXJNYXgiLCAiX3ByZXZlbnRlZE9mZnNldCIsICJwcmV2ZW50T3ZlcmZsb3ckMSIsICJ0b1BhZGRpbmdPYmplY3QiLCAidG9QYWRkaW5nT2JqZWN0MiIsICJfc3RhdGUkbW9kaWZpZXJzRGF0YSQiLCAibWluUHJvcCIsICJtYXhQcm9wIiwgImVuZERpZmYiLCAic3RhcnREaWZmIiwgImNsaWVudFNpemUiLCAiY2VudGVyVG9SZWZlcmVuY2UiLCAiY2VudGVyIiwgImF4aXNQcm9wIiwgImNlbnRlck9mZnNldCIsICJfb3B0aW9ucyRlbGVtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAiYXJyb3ckMSIsICJnZXRTaWRlT2Zmc2V0cyIsICJwcmV2ZW50ZWRPZmZzZXRzIiwgImlzQW55U2lkZUZ1bGx5Q2xpcHBlZCIsICJzaWRlIiwgImhpZGUiLCAicmVmZXJlbmNlT3ZlcmZsb3ciLCAicG9wcGVyQWx0T3ZlcmZsb3ciLCAicmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzIiwgInBvcHBlckVzY2FwZU9mZnNldHMiLCAiaXNSZWZlcmVuY2VIaWRkZW4iLCAiaGFzUG9wcGVyRXNjYXBlZCIsICJoaWRlJDEiLCAiZGVmYXVsdE1vZGlmaWVycyQxIiwgImNyZWF0ZVBvcHBlciQxIiwgImNyZWF0ZVBvcHBlciIsICJST1VORF9BUlJPVyIsICJCT1hfQ0xBU1MiLCAiQ09OVEVOVF9DTEFTUyIsICJCQUNLRFJPUF9DTEFTUyIsICJBUlJPV19DTEFTUyIsICJTVkdfQVJST1dfQ0xBU1MiLCAiVE9VQ0hfT1BUSU9OUyIsICJjYXB0dXJlIiwgIlRJUFBZX0RFRkFVTFRfQVBQRU5EX1RPIiwgIlRJUFBZX0RFRkFVTFRfQVBQRU5EX1RPMiIsICJnZXRWYWx1ZUF0SW5kZXhPclJldHVybiIsICJkZWZhdWx0VmFsdWUiLCAiaXNUeXBlIiwgInR5cGUiLCAic3RyIiwgImNhbGwiLCAiaW52b2tlV2l0aEFyZ3NPclJldHVybiIsICJhcHBseSIsICJtcyIsICJ0aW1lb3V0IiwgImFyZyIsICJjbGVhclRpbWVvdXQiLCAic2V0VGltZW91dCIsICJyZW1vdmVQcm9wZXJ0aWVzIiwgIm9iaiIsICJjbG9uZSIsICJzcGxpdEJ5U3BhY2VzIiwgIkJvb2xlYW4iLCAibm9ybWFsaXplVG9BcnJheSIsICJwdXNoSWZVbmlxdWUiLCAiYXJyIiwgInVuaXF1ZSIsICJhcnJheUZyb20iLCAicmVtb3ZlVW5kZWZpbmVkUHJvcHMiLCAiZGl2IiwgImNyZWF0ZUVsZW1lbnQiLCAiaXNOb2RlTGlzdCIsICJpc01vdXNlRXZlbnQiLCAiaXNSZWZlcmVuY2VFbGVtZW50IiwgIl90aXBweSIsICJnZXRBcnJheU9mRWxlbWVudHMiLCAicXVlcnlTZWxlY3RvckFsbCIsICJzZXRUcmFuc2l0aW9uRHVyYXRpb24iLCAiZWxzIiwgImVsIiwgInRyYW5zaXRpb25EdXJhdGlvbiIsICJzZXRWaXNpYmlsaXR5U3RhdGUiLCAiZ2V0T3duZXJEb2N1bWVudCIsICJlbGVtZW50T3JFbGVtZW50cyIsICJfbm9ybWFsaXplVG9BcnJheSIsICJpc0N1cnNvck91dHNpZGVJbnRlcmFjdGl2ZUJvcmRlciIsICJwb3BwZXJUcmVlRGF0YSIsICJldmVudCIsICJjbGllbnRYIiwgImNsaWVudFkiLCAicG9wcGVyU3RhdGUiLCAicHJvcHMiLCAiaW50ZXJhY3RpdmVCb3JkZXIiLCAidG9wRGlzdGFuY2UiLCAiYm90dG9tRGlzdGFuY2UiLCAibGVmdERpc3RhbmNlIiwgInJpZ2h0RGlzdGFuY2UiLCAiZXhjZWVkc1RvcCIsICJleGNlZWRzQm90dG9tIiwgImV4Y2VlZHNMZWZ0IiwgImV4Y2VlZHNSaWdodCIsICJ1cGRhdGVUcmFuc2l0aW9uRW5kTGlzdGVuZXIiLCAiYm94IiwgImFjdGlvbiIsICJsaXN0ZW5lciIsICJtZXRob2QiLCAiYWN0dWFsQ29udGFpbnMiLCAiX3RhcmdldCRnZXRSb290Tm9kZSIsICJjdXJyZW50SW5wdXQiLCAiaXNUb3VjaCIsICJsYXN0TW91c2VNb3ZlVGltZSIsICJvbkRvY3VtZW50VG91Y2hTdGFydCIsICJwZXJmb3JtYW5jZSIsICJvbkRvY3VtZW50TW91c2VNb3ZlIiwgIm5vdyIsICJvbldpbmRvd0JsdXIiLCAiYWN0aXZlRWxlbWVudCIsICJibHVyIiwgImlzVmlzaWJsZSIsICJiaW5kR2xvYmFsRXZlbnRMaXN0ZW5lcnMiLCAiaXNCcm93c2VyIiwgImlzSUUxMSIsICJtc0NyeXB0byIsICJyZXNldFZpc2l0ZWRNZXNzYWdlcyIsICJwbHVnaW5Qcm9wcyIsICJhbmltYXRlRmlsbCIsICJmb2xsb3dDdXJzb3IiLCAiaW5saW5lUG9zaXRpb25pbmciLCAic3RpY2t5IiwgInJlbmRlclByb3BzIiwgImFsbG93SFRNTCIsICJhbmltYXRpb24iLCAiY29udGVudCIsICJpbmVydGlhIiwgIm1heFdpZHRoIiwgInJvbGUiLCAidGhlbWUiLCAiekluZGV4IiwgImRlZmF1bHRQcm9wcyIsICJhcHBlbmRUbyIsICJhcmlhIiwgImV4cGFuZGVkIiwgImRlbGF5IiwgImR1cmF0aW9uIiwgImdldFJlZmVyZW5jZUNsaWVudFJlY3QiLCAiaGlkZU9uQ2xpY2siLCAiaWdub3JlQXR0cmlidXRlcyIsICJpbnRlcmFjdGl2ZSIsICJpbnRlcmFjdGl2ZURlYm91bmNlIiwgIm1vdmVUcmFuc2l0aW9uIiwgIm9uQWZ0ZXJVcGRhdGUiLCAib25CZWZvcmVVcGRhdGUiLCAib25DcmVhdGUiLCAib25EZXN0cm95IiwgIm9uSGlkZGVuIiwgIm9uSGlkZSIsICJvbk1vdW50IiwgIm9uU2hvdyIsICJvblNob3duIiwgIm9uVHJpZ2dlciIsICJvblVudHJpZ2dlciIsICJvbkNsaWNrT3V0c2lkZSIsICJwbHVnaW5zIiwgInBvcHBlck9wdGlvbnMiLCAicmVuZGVyIiwgInNob3dPbkNyZWF0ZSIsICJ0b3VjaCIsICJ0cmlnZ2VyIiwgInRyaWdnZXJUYXJnZXQiLCAiZGVmYXVsdEtleXMiLCAic2V0RGVmYXVsdFByb3BzIiwgInNldERlZmF1bHRQcm9wczIiLCAicGFydGlhbFByb3BzIiwgInZhbGlkYXRlUHJvcHMiLCAiZ2V0RXh0ZW5kZWRQYXNzZWRQcm9wcyIsICJwYXNzZWRQcm9wcyIsICJwbHVnaW5Qcm9wczIiLCAicGx1Z2luIiwgIl9uYW1lIiwgImdldERhdGFBdHRyaWJ1dGVQcm9wcyIsICJwcm9wS2V5cyIsICJ2YWx1ZUFzU3RyaW5nIiwgImdldEF0dHJpYnV0ZSIsICJ0cmltIiwgIkpTT04iLCAicGFyc2UiLCAiZSIsICJldmFsdWF0ZVByb3BzIiwgIm91dCIsICJpbm5lckhUTUwiLCAiaW5uZXJIVE1MMiIsICJkYW5nZXJvdXNseVNldElubmVySFRNTCIsICJjcmVhdGVBcnJvd0VsZW1lbnQiLCAiY2xhc3NOYW1lIiwgImFwcGVuZENoaWxkIiwgInNldENvbnRlbnQiLCAidGV4dENvbnRlbnQiLCAiZ2V0Q2hpbGRyZW4iLCAiZmlyc3RFbGVtZW50Q2hpbGQiLCAiYm94Q2hpbGRyZW4iLCAiY2hpbGRyZW4iLCAiY2xhc3NMaXN0IiwgImJhY2tkcm9wIiwgIm9uVXBkYXRlIiwgInByZXZQcm9wcyIsICJuZXh0UHJvcHMiLCAiX2dldENoaWxkcmVuIiwgImJveDIiLCAiY29udGVudDIiLCAicmVtb3ZlQ2hpbGQiLCAiJCR0aXBweSIsICJpZENvdW50ZXIiLCAibW91c2VNb3ZlTGlzdGVuZXJzIiwgIm1vdW50ZWRJbnN0YW5jZXMiLCAiY3JlYXRlVGlwcHkiLCAic2hvd1RpbWVvdXQiLCAiaGlkZVRpbWVvdXQiLCAic2NoZWR1bGVIaWRlQW5pbWF0aW9uRnJhbWUiLCAiaXNWaXNpYmxlRnJvbUNsaWNrIiwgImRpZEhpZGVEdWVUb0RvY3VtZW50TW91c2VEb3duIiwgImRpZFRvdWNoTW92ZSIsICJpZ25vcmVPbkZpcnN0VXBkYXRlIiwgImxhc3RUcmlnZ2VyRXZlbnQiLCAiY3VycmVudFRyYW5zaXRpb25FbmRMaXN0ZW5lciIsICJsaXN0ZW5lcnMiLCAiZGVib3VuY2VkT25Nb3VzZU1vdmUiLCAib25Nb3VzZU1vdmUiLCAiY3VycmVudFRhcmdldCIsICJpZCIsICJwb3BwZXJJbnN0YW5jZSIsICJpc0VuYWJsZWQiLCAiaXNNb3VudGVkIiwgImlzU2hvd24iLCAiY2xlYXJEZWxheVRpbWVvdXRzIiwgInNldFByb3BzIiwgInNldENvbnRlbnQyIiwgInNob3ciLCAiaGlkZVdpdGhJbnRlcmFjdGl2aXR5IiwgImVuYWJsZSIsICJkaXNhYmxlIiwgInVubW91bnQiLCAiZXJyb3JXaGVuIiwgIl9wcm9wcyRyZW5kZXIiLCAicGx1Z2luc0hvb2tzIiwgImhhc0FyaWFFeHBhbmRlZCIsICJoYXNBdHRyaWJ1dGUiLCAiYWRkTGlzdGVuZXJzIiwgImhhbmRsZUFyaWFFeHBhbmRlZEF0dHJpYnV0ZSIsICJoYW5kbGVTdHlsZXMiLCAiaW52b2tlSG9vayIsICJzY2hlZHVsZVNob3ciLCAiZ2V0RG9jdW1lbnQiLCAiZ2V0Tm9ybWFsaXplZFRvdWNoU2V0dGluZ3MiLCAiZ2V0SXNDdXN0b21Ub3VjaEJlaGF2aW9yIiwgImdldElzRGVmYXVsdFJlbmRlckZuIiwgIl9pbnN0YW5jZSRwcm9wcyRyZW5kZSIsICJnZXRDdXJyZW50VGFyZ2V0IiwgImdldERlZmF1bHRUZW1wbGF0ZUNoaWxkcmVuIiwgImdldERlbGF5IiwgImlzU2hvdyIsICJmcm9tSGlkZSIsICJwb2ludGVyRXZlbnRzIiwgImhvb2siLCAic2hvdWxkSW52b2tlUHJvcHNIb29rIiwgInBsdWdpbkhvb2tzIiwgIl9pbnN0YW5jZSRwcm9wcyIsICJoYW5kbGVBcmlhQ29udGVudEF0dHJpYnV0ZSIsICJhdHRyIiwgImlkMiIsICJub2RlcyIsICJjdXJyZW50VmFsdWUiLCAibmV4dFZhbHVlIiwgImNsZWFudXBJbnRlcmFjdGl2ZU1vdXNlTGlzdGVuZXJzIiwgIm9uRG9jdW1lbnRQcmVzcyIsICJhY3R1YWxUYXJnZXQiLCAiY29tcG9zZWRQYXRoIiwgInJlbW92ZURvY3VtZW50UHJlc3MiLCAib25Ub3VjaE1vdmUiLCAib25Ub3VjaFN0YXJ0IiwgImFkZERvY3VtZW50UHJlc3MiLCAiZG9jIiwgIm9uVHJhbnNpdGlvbmVkT3V0IiwgImNhbGxiYWNrIiwgIm9uVHJhbnNpdGlvbkVuZCIsICJvblRyYW5zaXRpb25lZEluIiwgIm9uIiwgImV2ZW50VHlwZSIsICJoYW5kbGVyIiwgIm9uTW91c2VMZWF2ZSIsICJvbkJsdXJPckZvY3VzT3V0IiwgInJlbW92ZUxpc3RlbmVycyIsICJfbGFzdFRyaWdnZXJFdmVudCIsICJzaG91bGRTY2hlZHVsZUNsaWNrSGlkZSIsICJpc0V2ZW50TGlzdGVuZXJTdG9wcGVkIiwgIndhc0ZvY3VzZWQiLCAic2NoZWR1bGVIaWRlIiwgImlzQ3Vyc29yT3ZlclJlZmVyZW5jZU9yUG9wcGVyIiwgImdldE5lc3RlZFBvcHBlclRyZWUiLCAiX2luc3RhbmNlJHBvcHBlckluc3RhIiwgImluc3RhbmNlMiIsICJzaG91bGRCYWlsIiwgInJlbGF0ZWRUYXJnZXQiLCAiY3JlYXRlUG9wcGVySW5zdGFuY2UiLCAiZGVzdHJveVBvcHBlckluc3RhbmNlIiwgIl9pbnN0YW5jZSRwcm9wczIiLCAiY29tcHV0ZWRSZWZlcmVuY2UiLCAidGlwcHlNb2RpZmllciIsICJfZ2V0RGVmYXVsdFRlbXBsYXRlQ2giLCAiY29yZSIsICJtb3VudCIsICJ3YXJuV2hlbiIsICJuZXh0RWxlbWVudFNpYmxpbmciLCAiX2dldE5vcm1hbGl6ZWRUb3VjaFNlIiwgInRvdWNoVmFsdWUiLCAidG91Y2hEZWxheSIsICJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCAiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCAiY3JlYXRlTWVtb3J5TGVha1dhcm5pbmciLCAibmVzdGVkUG9wcGVyIiwgImlzQWxyZWFkeVZpc2libGUiLCAiaXNEaXNhYmxlZCIsICJpc1RvdWNoQW5kVG91Y2hEaXNhYmxlZCIsICJ2aXNpYmlsaXR5IiwgInRyYW5zaXRpb24iLCAiX2dldERlZmF1bHRUZW1wbGF0ZUNoMiIsICJvbkZpcnN0VXBkYXRlMiIsICJfaW5zdGFuY2UkcG9wcGVySW5zdGEyIiwgIl9nZXREZWZhdWx0VGVtcGxhdGVDaDMiLCAiX2JveCIsICJfY29udGVudCIsICJpc0FscmVhZHlIaWRkZW4iLCAiX2dldERlZmF1bHRUZW1wbGF0ZUNoNCIsICJ0aXBweSIsICJ0YXJnZXRzIiwgIm9wdGlvbmFsUHJvcHMiLCAidmFsaWRhdGVUYXJnZXRzIiwgImlzU2luZ2xlQ29udGVudEVsZW1lbnQiLCAiaXNNb3JlVGhhbk9uZVJlZmVyZW5jZUVsZW1lbnQiLCAiaW5zdGFuY2VzIiwgImhpZGVBbGwiLCAiaGlkZUFsbDIiLCAiX3RlbXAiLCAiZXhjbHVkZWRSZWZlcmVuY2VPckluc3RhbmNlIiwgImV4Y2x1ZGUiLCAiaXNFeGNsdWRlZCIsICJvcmlnaW5hbER1cmF0aW9uIiwgImFwcGx5U3R5bGVzTW9kaWZpZXIiLCAiY3JlYXRlU2luZ2xldG9uIiwgImNyZWF0ZVNpbmdsZXRvbjIiLCAidGlwcHlJbnN0YW5jZXMiLCAiX29wdGlvbmFsUHJvcHMkcG9wcGVyIiwgIlN0cmluZyIsICJpbmRpdmlkdWFsSW5zdGFuY2VzIiwgInJlZmVyZW5jZXMiLCAidHJpZ2dlclRhcmdldHMiLCAib3ZlcnJpZGVzIiwgImludGVyY2VwdFNldFByb3BzQ2xlYW51cHMiLCAic2hvd25PbkNyZWF0ZSIsICJzZXRUcmlnZ2VyVGFyZ2V0cyIsICJzZXRSZWZlcmVuY2VzIiwgImVuYWJsZUluc3RhbmNlcyIsICJpbnRlcmNlcHRTZXRQcm9wcyIsICJzaW5nbGV0b24yIiwgIm9yaWdpbmFsU2V0UHJvcHMyIiwgInByZXBhcmVJbnN0YW5jZSIsICJvdmVycmlkZVByb3BzIiwgInByb3AiLCAiX3JlZmVyZW5jZXMkaW5kZXgiLCAic2luZ2xldG9uIiwgIm9yaWdpbmFsU2hvdyIsICJyZWYiLCAic2hvd05leHQiLCAiZmlyc3QiLCAic2hvd1ByZXZpb3VzIiwgImxhc3QiLCAib3JpZ2luYWxTZXRQcm9wcyIsICJzZXRJbnN0YW5jZXMiLCAibmV4dEluc3RhbmNlcyIsICJCVUJCTElOR19FVkVOVFNfTUFQIiwgIm1vdXNlb3ZlciIsICJmb2N1c2luIiwgImNsaWNrIiwgImRlbGVnYXRlIiwgImNoaWxkVGlwcHlJbnN0YW5jZXMiLCAiZGlzYWJsZWQiLCAibmF0aXZlUHJvcHMiLCAicGFyZW50UHJvcHMiLCAiY2hpbGRQcm9wcyIsICJyZXR1cm5WYWx1ZSIsICJub3JtYWxpemVkUmV0dXJuVmFsdWUiLCAidGFyZ2V0Tm9kZSIsICJjbG9zZXN0IiwgImFkZEV2ZW50TGlzdGVuZXJzIiwgInJlbW92ZUV2ZW50TGlzdGVuZXJzIiwgImFwcGx5TXV0YXRpb25zIiwgIm9yaWdpbmFsRGVzdHJveSIsICJvcmlnaW5hbEVuYWJsZSIsICJvcmlnaW5hbERpc2FibGUiLCAic2hvdWxkRGVzdHJveUNoaWxkSW5zdGFuY2VzIiwgImNyZWF0ZUJhY2tkcm9wRWxlbWVudCIsICJpbnNlcnRCZWZvcmUiLCAiTnVtYmVyIiwgInRyYW5zaXRpb25EZWxheSIsICJtb3VzZUNvb3JkcyIsICJhY3RpdmVJbnN0YW5jZXMiLCAic3RvcmVNb3VzZUNvb3JkcyIsICJhZGRNb3VzZUNvb3Jkc0xpc3RlbmVyIiwgInJlbW92ZU1vdXNlQ29vcmRzTGlzdGVuZXIiLCAiaXNJbnRlcm5hbFVwZGF0ZSIsICJ3YXNGb2N1c0V2ZW50IiwgImlzVW5tb3VudGVkIiwgImdldElzSW5pdGlhbEJlaGF2aW9yIiwgImFkZExpc3RlbmVyIiwgInJlbW92ZUxpc3RlbmVyIiwgInVuc2V0R2V0UmVmZXJlbmNlQ2xpZW50UmVjdCIsICJpc0N1cnNvck92ZXJSZWZlcmVuY2UiLCAiZm9sbG93Q3Vyc29yMiIsICJyZWxhdGl2ZVgiLCAicmVsYXRpdmVZIiwgInJlY3QyIiwgImNyZWF0ZSIsICJfIiwgImdldFByb3BzIiwgIl9wcm9wcyRwb3BwZXJPcHRpb25zIiwgImN1cnNvclJlY3RJbmRleCIsICJ0cmllZFBsYWNlbWVudHMiLCAiZm4yIiwgIl9nZXRSZWZlcmVuY2VDbGllbnRSZWN0IiwgImdldElubGluZUJvdW5kaW5nQ2xpZW50UmVjdCIsICJnZXRDbGllbnRSZWN0cyIsICJzZXRJbnRlcm5hbFByb3BzIiwgImFkZE1vZGlmaWVyIiwgImN1cnNvclJlY3QiLCAiY3VycmVudEJhc2VQbGFjZW1lbnQiLCAiYm91bmRpbmdSZWN0IiwgImNsaWVudFJlY3RzIiwgImZpcnN0UmVjdCIsICJsYXN0UmVjdCIsICJpc1RvcCIsICJtaW5MZWZ0IiwgIm1heFJpZ2h0IiwgIm1lYXN1cmVSZWN0cyIsICJfdG9wIiwgIl9ib3R0b20iLCAiX2xlZnQiLCAiX3JpZ2h0IiwgIl93aWR0aCIsICJfaGVpZ2h0IiwgImdldFJlZmVyZW5jZSIsICJzaG91bGRDaGVjayIsICJwcmV2UmVmUmVjdCIsICJwcmV2UG9wUmVjdCIsICJ1cGRhdGVQb3NpdGlvbiIsICJjdXJyZW50UmVmUmVjdCIsICJjdXJyZW50UG9wUmVjdCIsICJhcmVSZWN0c0RpZmZlcmVudCIsICJyZWN0QSIsICJyZWN0QiIsICJUaXBweV9leHBvcnRzIiwgIl9fZXhwb3J0IiwgImltcG9ydF90aXBweTIiLCAiZGVmYXVsdCIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJfX3RvQ29tbW9uSlMiLCAiX190b0VTTSIsICJyZXF1aXJlX3RpcHB5X2NqcyIsICJfX3JlRXhwb3J0Il0KfQo=

})();

/* </nowiki> */

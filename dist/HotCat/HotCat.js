/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|title=HotCat|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://commons.wikimedia.org/wiki/MediaWiki:Gadget-HotCat.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/HotCat-pagestyles}
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
      } catch (error) {
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
      } catch (error) {
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
      } catch (error) {
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
        } catch (error) {
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
      } catch (error) {
        return error instanceof TypeError;
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

// dist/HotCat/HotCat.js
//! src/HotCat/modules/check.js
require_es_array_push();
var _mw$config$get;
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
var import_ext_gadget = require("ext.gadget.Util");
(function hotCatCheck() {
  if (mw.config.get("wgNamespaceNumber") !== 6 || window.HotCatAutoRemoveCheckCatOptOut || !document.querySelectorAll(".checkcategories")[0]) {
    return;
  }
  const api = (0, import_ext_gadget.initMwApi)("hotCatCheck/2.0");
  const checkCategoriesRegExp = /{{[Cc]heck[ _]categories[^{}]*}}/g;
  const selfName = "([[MediaWiki:Gadget-HotCat-check.js|Script]]): ";
  const storageItemName = "checkCat";
  const storageItem = mw.storage.get(storageItemName);
  const createjIcon = (iconClass) => {
    return $("<span>").attr("class", "ui-icon ".concat(iconClass, " catcheck-inline-icon")).text(" ");
  };
  const createNotifyArea = (textNode, icon, state) => {
    return $("<div>").addClass("ui-widget").append($("<div>").attr("class", "".concat(state, " ui-corner-all")).css({
      "margin-top": "20px",
      padding: "0.7em"
    }).append($("<p>").append(createjIcon(icon).css("marginRight", "0.3em"), textNode)));
  };
  $("body").one("submit.checkCatListener", "#hotcatCommitForm", function(e) {
    if (storageItem === "disabled") {
      return true;
    }
    const self2 = this;
    const newVal = self2.wpTextbox1.value.replace(checkCategoriesRegExp, "");
    const dlgButtons = {};
    let $dialogCheckStorage;
    let $permaSaveHint;
    let $textHintNode;
    let $dialog;
    const doRemove = () => {
      self2.wpSummary.value = "Removing [[Template:Check categories|{".concat("{Check categories}}]] ".concat(self2.wpSummary.value));
      self2.wpTextbox1.value = newVal;
    };
    const writeStorage = (val) => {
      mw.storage.set(storageItemName, val, 604800);
    };
    dlgButtons["Yes, Remove"] = function() {
      doRemove();
      if ($dialogCheckStorage[0].checked) {
        writeStorage("auto");
      }
      $(this).dialog("close");
    };
    dlgButtons["No, keep it"] = function() {
      if ($dialogCheckStorage[0].checked) {
        writeStorage("disabled");
      }
      $(this).dialog("close");
    };
    const _addToJS = function(_e) {
      _e.preventDefault();
      if ($permaSaveHint.hasClass("ui-state-disabled")) {
        return;
      }
      const $el = $(this);
      $el.off("click").text("Please wait.");
      $permaSaveHint.addClass("ui-state-disabled");
      const params = {
        action: "edit",
        title: "User:".concat(mw.config.get("wgUserName"), "/common.js"),
        summary: "".concat(selfName, "Saving HotCat configuration."),
        appendtext: $el.data("addText")
      };
      const editDone = (editStat) => {
        if (!editStat) {
          return;
        }
        if (editStat.error) {
          mw.notify("Unable to save to your common.js using the API\n".concat(editStat.error.code, "\n").concat(editStat.error.info), {
            tag: "hotCatCheck",
            type: "error"
          });
          $el.text("Edit-Error!");
        } else {
          $el.text("Done.");
          $permaSaveHint.fadeOut();
        }
      };
      api.postWithToken("csrf", params).then(editDone);
    };
    const prompt = () => {
      $dialogCheckStorage = $("<input>").attr({
        type: "checkbox",
        id: "hotCatAutoRemoveCheckCatStorage"
      }).on("change", function() {
        if (this.checked) {
          $permaSaveHint.fadeIn();
        } else {
          $permaSaveHint.fadeOut();
        }
      });
      $textHintNode = $("<ul>");
      $("<li>").append($("<a>").attr("href", "#").text("Disable this feature.").data("addText", "\nwindow.HotCatAutoRemoveCheckCatOptOut = true;").on("click", _addToJS)).appendTo($textHintNode);
      $("<li>").append($("<a>").attr("href", "#").text("Remove {{check categories}} when editing using HotCat without prompting.").data("addText", "\nwindow.HotCatAutoRemoveCheckCat = true;").on("click", _addToJS)).appendTo($textHintNode);
      $permaSaveHint = createNotifyArea($("<span>").text("Save these setting in your common.js: ").append($textHintNode), "ui-icon-info", "ui-state-highlight");
      $dialog = $("<div>").append($("<span>").css({
        "font-size": "2em",
        "line-height": "1.8em"
      }).append($("<span>").text(" {{check categories}} ").css({
        "background-color": "#F8CCB0",
        "text-decoration": "line-through !important",
        display: "inline-block"
      }), $("<span>").text(" ?"))).append("<br>", $dialogCheckStorage, $("<label>").attr("for", "hotCatAutoRemoveCheckCatStorage").text("Don't ask again"), "<br>").append(mw.user.isAnon() ? "" : $permaSaveHint.hide());
      $dialog.dialog({
        modal: true,
        closeOnEscape: true,
        title: "{{check categories}} (−)?",
        width: 450,
        buttons: dlgButtons,
        close: () => {
          const $body = $("body");
          $body.find("#hotcatCommitForm").trigger("submit");
        },
        open() {
          const $buttons = $(this).parent().find(".ui-dialog-buttonpane button");
          $buttons.eq(0).button({
            icons: {
              primary: "ui-icon-circle-check"
            }
          });
          $buttons.eq(1).button({
            icons: {
              primary: "ui-icon-cancel"
            }
          });
        }
      });
    };
    if (newVal !== self2.wpTextbox1.value) {
      if (window.HotCatAutoRemoveCheckCat || storageItem === "auto") {
        doRemove();
        return true;
      }
      e.preventDefault();
      prompt();
    }
    return true;
  });
  const $okLink = $("<a>").attr({
    href: "#",
    title: "Categories are OK! Immediately remove the template."
  }).append("<s>").text("{{Check categories}}");
  $okLink.on("click", function(e) {
    e.preventDefault();
    const $el = $(this);
    $el.off("click");
    const doEdit = (result) => {
      if (!result) {
        return;
      }
      $el.text("Doing.");
      const text = result.replace(checkCategoriesRegExp, "");
      if (text === result) {
        $el.text("Template not found!");
        return;
      }
      const params = {
        action: "edit",
        title: mw.config.get("wgPageName"),
        summary: "".concat(selfName, "Categories are checked and OK. You can help [[Category:Media needing category review|reviewing]]!"),
        nocreate: true,
        text
      };
      const editDone = (editStat) => {
        if (!editStat) {
          return;
        }
        if (editStat.error) {
          mw.notify('Unable to remove "Check categories" with the API\n'.concat(editStat.error.code, "\n").concat(editStat.error.info), {
            tag: "hotCatCheck",
            type: "error"
          });
          $el.text("Edit-Error!");
        } else {
          $el.text("Edit Done.");
        }
        const $body = $("body");
        $body.find(".checkcategories").fadeOut();
      };
      $el.text("Doing..");
      api.postWithToken("csrf", params).then(editDone);
    };
    $el.text("Doing");
    $.ajax({
      url: mw.config.get("wgScript"),
      data: {
        action: "raw",
        title: mw.config.get("wgPageName").replace(/ /g, "_")
      },
      dataType: "text",
      error: () => {
        $el.text("Error!");
      },
      success: doEdit,
      type: "GET",
      cache: false
    });
  });
  $(function loadHotCatCheck() {
    const $body = $("body");
    $body.find("#catlinks").find("ul:first").append($("<li>").append($okLink));
  });
})();
//! src/HotCat/modules/getMessage.ts
var getMessage = (key, ...args) => {
  key = "hotcat-".concat(key);
  return mw.message(key, ...args).plain();
};
//! src/HotCat/modules/constant.ts
var WG_USER_GROUPS = (_mw$config$get = mw.config.get("wgUserGroups")) !== null && _mw$config$get !== void 0 ? _mw$config$get : [];
var WG_USER_LANGUAGE = mw.config.get("wgUserLanguage");
//! src/HotCat/modules/messages.ts
var hotCatMessages = () => {
  if (["zh-hant", "zh-hk", "zh-mo", "zh-tw"].includes(WG_USER_LANGUAGE)) {
    mw.messages.set({
      "hotcat-messages-cat_removed": "已移除[[Category:$1]]",
      "hotcat-messages-template_removed": "已移除{{[[Category:$1]]}}",
      "hotcat-messages-cat_added": "已添加[[Category:$1]]",
      // $2 is the new key
      "hotcat-messages-cat_keychange": '已設置[[Category:$1]]的新排序字："$2"',
      "hotcat-messages-cat_notFound": "分類“$1”沒有找到",
      "hotcat-messages-cat_exists": "分類“$1”已經存在，沒有添加。",
      "hotcat-messages-cat_resolved": "（重定向[[Category:$1]]已處理）",
      "hotcat-messages-uncat_removed": "已移除{{uncategorized}}",
      // Some text to prefix to the edit summary.
      "hotcat-messages-prefix": "使用[[H:HOTCAT|HotCat]]",
      // Some text to append to the edit summary. Named 'using' for historical reasons. If you prefer
      // to have a marker at the front, use prefix and set this to the empty string.
      "hotcat-messages-using": "",
      "hotcat-messages-multi_change": "$1個分類",
      // Any category in this category is deemed a disambiguation category; i.e., a category that should not contain
      // any items, but that contains links to other categories where stuff should be categorized. If you don't have
      // that concept on your wiki, set it to blank string. Use blanks, not underscores.
      "hotcat-disambig_category": "",
      // Any category in this category is deemed a (soft) redirect to some other category defined by a link
      // to another non-blacklisted category. If your wiki doesn't have soft category redirects, set this to null.
      // If a soft-redirected category contains more than one link to another non-blacklisted category, it's considered
      // a disambiguation category instead.
      "hotcat-redir_category": "已重定向的分类",
      "hotcat-messages-separator": "; ",
      // $1 is replaced by a number. If your language has several plural forms (c.f. [[:enwiki:Dual (grammatical form)]]),
      // you can set this to an array of strings suitable for passing to mw.language.configPlural().
      // If that function doesn't exist, HotCat will simply fall back to using the last
      // entry in the array.
      // Defaults to '[[' + category_canonical + ':$1]]'. Can be overridden if in the short edit summaries
      // not the standard category name should be used but, say, a shorter namespace alias. $1 is replaced
      // by a category name.
      "hotcat-messages-short_catchange": "$1",
      // Button text. Localize to wgContentLanguage here; localize to wgUserLanguage in a subpage,
      // see localization hook below.
      "hotcat-messages-commit": "儲存",
      // Button text. Localize to wgContentLanguage here; localize to wgUserLanguage in a subpage,
      // see localization hook below.
      "hotcat-messages-ok": "確定",
      // Button text. Localize to wgContentLanguage here; localize to wgUserLanguage in a subpage,
      // see localization hook below.
      "hotcat-messages-cancel": "取消",
      // Localize to wgContentLanguage here; localize to wgUserLanguage in a subpage,
      // see localization hook below.
      "hotcat-messages-multi_error": "無法從伺服器取得頁面文字。因此，您的分類變更無法儲存。我們為此不便表示抱歉。",
      // Plural of category_canonical.
      "hotcat-categories": "分類",
      // Names for the search engines
      "hotcat-engine_names-searchindex": "搜尋索引",
      "hotcat-engine_names-pagelist": "頁面列表",
      "hotcat-engine_names-combined": "合併搜尋",
      "hotcat-engine_names-subcat": "子分類",
      "hotcat-engine_names-parentcat": "上層分類",
      // The tooltips for the above links
      "hotcat-tooltips-change": "修改",
      "hotcat-tooltips-remove": "移除",
      "hotcat-tooltips-add": "增加一個新分類",
      "hotcat-tooltips-restore": "復原變更",
      "hotcat-tooltips-undo": "復原變更",
      "hotcat-tooltips-down": "打開以修改並顯示子分類",
      "hotcat-tooltips-up": "打開以修改並顯示上層分類",
      // Tooltip for the "enter multi-mode" link
      "hotcat-multi_tooltip": "修改多個分類"
    });
  } else {
    mw.messages.set({
      "hotcat-messages-cat_removed": "已移除[[Category:$1]]",
      "hotcat-messages-template_removed": "已移除{{[[Category:$1]]}}",
      "hotcat-messages-cat_added": "已添加[[Category:$1]]",
      // $2 is the new key
      "hotcat-messages-cat_keychange": '已设置[[Category:$1]]的新排序字："$2"',
      "hotcat-messages-cat_notFound": "分类“$1”没有找到",
      "hotcat-messages-cat_exists": "分类“$1”已经存在，没有添加。",
      "hotcat-messages-cat_resolved": "（重定向[[Category:$1]]已处理）",
      "hotcat-messages-uncat_removed": "已移除{{uncategorized}}",
      // Some text to prefix to the edit summary.
      "hotcat-messages-prefix": "使用[[H:HOTCAT|HotCat]]",
      // Some text to append to the edit summary. Named 'using' for historical reasons. If you prefer
      // to have a marker at the front, use prefix and set this to the empty string.
      "hotcat-messages-using": "",
      "hotcat-messages-multi_change": "$1个分类",
      // Any category in this category is deemed a disambiguation category; i.e., a category that should not contain
      // any items, but that contains links to other categories where stuff should be categorized. If you don't have
      // that concept on your wiki, set it to blank string. Use blanks, not underscores.
      "hotcat-disambig_category": "",
      // Any category in this category is deemed a (soft) redirect to some other category defined by a link
      // to another non-blacklisted category. If your wiki doesn't have soft category redirects, set this to null.
      // If a soft-redirected category contains more than one link to another non-blacklisted category, it's considered
      // a disambiguation category instead.			'hotcat-redir_category': '已重定向的分类',
      "hotcat-messages-separator": "; ",
      // $1 is replaced by a number. If your language has several plural forms (c.f. [[:enwiki:Dual (grammatical form)]]),
      // you can set this to an array of strings suitable for passing to mw.language.configPlural().
      // If that function doesn't exist, HotCat will simply fall back to using the last
      // entry in the array.
      // Defaults to '[[' + category_canonical + ':$1]]'. Can be overridden if in the short edit summaries
      // not the standard category name should be used but, say, a shorter namespace alias. $1 is replaced
      // by a category name.
      "hotcat-messages-short_catchange": "$1",
      // Button text. Localize to wgContentLanguage here; localize to wgUserLanguage in a subpage,
      // see localization hook below.
      "hotcat-messages-commit": "保存",
      // Button text. Localize to wgContentLanguage here; localize to wgUserLanguage in a subpage,
      // see localization hook below.
      "hotcat-messages-ok": "确定",
      // Button text. Localize to wgContentLanguage here; localize to wgUserLanguage in a subpage,
      // see localization hook below.
      "hotcat-messages-cancel": "取消",
      // Localize to wgContentLanguage here; localize to wgUserLanguage in a subpage,
      // see localization hook below.
      "hotcat-messages-multi_error": "无法从服务器取得页面文字。因此，您的分类更改无法保存。我们为此不便表示抱歉。",
      // Plural of category_canonical.
      "hotcat-categories": "分类",
      // Names for the search engines
      "hotcat-engine_names-searchindex": "搜索索引",
      "hotcat-engine_names-pagelist": "页面列表",
      "hotcat-engine_names-combined": "合并搜索",
      "hotcat-engine_names-subcat": "子分类",
      "hotcat-engine_names-parentcat": "上层分类",
      // The tooltips for the above links
      "hotcat-tooltips-change": "修改",
      "hotcat-tooltips-remove": "移除",
      "hotcat-tooltips-add": "增加一个新分类",
      "hotcat-tooltips-restore": "撤销更改",
      "hotcat-tooltips-undo": "撤销更改",
      "hotcat-tooltips-down": "打开以修改并显示子分类",
      "hotcat-tooltips-up": "打开以修改并显示上层分类",
      // Tooltip for the "enter multi-mode" link
      "hotcat-multi_tooltip": "修改多个分类"
    });
  }
};
//! src/HotCat/HotCat.js
var import_ext_gadget2 = require("ext.gadget.Util");
hotCatMessages();
(function hotCat() {
  const conf = mw.config.values;
  if (window.HotCat && !window.HotCat.nodeName || conf.wgAction === "edit") {
    return;
  }
  const api = (0, import_ext_gadget2.initMwApi)("HotCat/3.0");
  window.HotCat = {
    // The little modification links displayed after category names. U+2212 is a minus sign; U+2193 and U+2191 are
    // downward and upward pointing arrows. Do not use ↓ and ↑ in the code!
    links: {
      change: "(±)",
      remove: "(−)",
      add: "(+)",
      restore: "(×)",
      undo: "(×)",
      down: "(↓)",
      up: "(↑)"
    },
    changeTag: "HotCat",
    // The HTML content of the "enter multi-mode" link at the front.
    addmulti: "<span>+<sup>+</sup></span>",
    // Return true to disable HotCat.
    disable: () => {
      const ns = conf.wgNamespaceNumber;
      const nsIds = conf.wgNamespaceIds;
      return ns < 0 || // Special pages; Special:Upload is handled differently
      ns === 10 || // Templates
      ns === 828 || // Module (Lua)
      ns === 8 || // MediaWiki
      ns === 6 && !conf.wgArticleId || // Non-existing file pages
      ns === 2 && /\.(js|css)$/.test(conf.wgTitle) || // User scripts
      nsIds && (ns === nsIds.creator || ns === nsIds.timedtext || ns === nsIds.institution);
    },
    // A regexp matching a templates used to mark uncategorized pages, if your wiki does have that.
    // If not, set it to null.
    uncat_regexp: /{{\s*[Uu]ncategorized\s*[^}]*}}\s*(<!--.*?-->\s*)?/g,
    // The images used for the little indication icon. Should not need changing.
    existsYes: "https://tu.zhongwen.wiki/images/qiuwenbaike/zh/thumb/b/be/P_yes.svg/20px-P_yes.svg.png",
    existsNo: "https://tu.zhongwen.wiki/images/qiuwenbaike/zh/thumb/4/42/P_no.svg/20px-P_no.svg.png",
    // a list of categories which can be removed by removing a template
    // key: the category without namespace
    // value: A regexp matching the template name, again without namespace
    // If you don't have this at your wiki, or don't want this, set it to an empty object {}.
    template_categories: {},
    // Override the decision of whether HotCat should help users by automatically
    // capitalising the title in the user input text if the wiki has case-sensitive page names.
    // Basically, this will make an API query to check the MediaWiki configuration and HotCat then sets
    // this to true for most wikis, and to false on Wiktionary.
    //
    // You can set this directly if there is a problem with it. For example, Georgian Wikipedia (kawiki),
    // is known to have different capitalisation logic between MediaWiki PHP and JavaScript. As such, automatic
    // case changes in JavaScript by HotCat would be wrong.
    capitalizePageNames: null,
    // If upload_disabled is true, HotCat will not be used on the Upload form.
    upload_disabled: false,
    // Single regular expression matching blacklisted categories that cannot be changed or
    // added using HotCat. For instance /\bstubs?$/ (any category ending with the word "stub"
    // or "stubs"), or /(\bstubs?$)|\bmaintenance\b/ (stub categories and any category with the
    // word "maintenance" in its title.
    blacklist: null,
    // Stuff changeable by users:
    // Background for changed categories in multi-edit mode. Default is a very light salmon pink.
    bg_changed: "#FCA",
    // If true, HotCat will never automatically submit changes. HotCat will only open an edit page with
    // the changes; users must always save explicitly.
    no_autocommit: false,
    // If true, the "category deletion" link "(-)" will never save automatically but always show an
    // edit page where the user has to save the edit manually. Is false by default because that's the
    // traditional behavior. This setting overrides no_autocommit for "(-)" links.
    del_needs_diff: false,
    // Time, in milliseconds, that HotCat waits after a keystroke before making a request to the
    // server to get suggestions.
    suggest_delay: 1e3,
    // Default width, in characters, of the text input field.
    editbox_width: 40,
    // One of the engine_names above, to be used as the default suggestion engine.
    suggestions: "combined",
    // If true, always use the default engine, and never display a selector.
    fixed_search: false,
    // If false, do not display the "up" and "down" links
    use_up_down: true,
    // Default list size
    listSize: 10,
    // If true, single category changes are marked as minor edits. If false, they're not.
    single_minor: true,
    // If true, never add a page to the user's watchlist. If false, pages get added to the watchlist if
    // the user has the "Add pages I edit to my watchlist" or the "Add pages I create to my watchlist"
    // options in his or her preferences set.
    dont_add_to_watchlist: false,
    shortcuts: null,
    addShortcuts: (map) => {
      let _a;
      if (!map) {
        return;
      }
      (_a = window.HotCat).shortcuts || (_a.shortcuts = {});
      for (let k in map) {
        if (!Object.hasOwn(map, k) || typeof k !== "string") {
          continue;
        }
        let v = map[k];
        if (typeof v !== "string") {
          continue;
        }
        k = k.trim();
        v = v.trim();
        if (k.length === 0 || v.length === 0) {
          continue;
        }
        window.HotCat.shortcuts[k] = v;
      }
    }
  };
  const HC = window.HotCat;
  const ua = navigator.userAgent.toLowerCase();
  const is_webkit = /applewebkit\/\d+/.test(ua) && !ua.includes("spoofer");
  let cat_prefix = null;
  let noSuggestions = false;
  const wikiTextBlank = "[\\t _\\xA0\\u1680\\u180E\\u2000-\\u200A\\u2028\\u2029\\u202F\\u205F\\u3000]+";
  const wikiTextBlankRE = new RegExp(wikiTextBlank, "g");
  const wikiTextBlankOrBidi = "[\\t _\\xA0\\u1680\\u180E\\u2000-\\u200B\\u200E\\u200F\\u2028-\\u202F\\u205F\\u3000]*";
  const formattedNamespaces = conf.wgFormattedNamespaces;
  const namespaceIds = conf.wgNamespaceIds;
  const autoLocalize = (namespaceNumber, fallback) => {
    const createRegexpStr = (name) => {
      if (!name || name.length === 0) {
        return;
      }
      let regex_name = "";
      for (let i = 0; i < name.length; i++) {
        const initial = name.charAt(i);
        const ll = initial.toLowerCase();
        const ul = initial.toUpperCase();
        regex_name += ll === ul ? initial : "[".concat(ll).concat(ul, "]");
      }
      return regex_name.replace(/([$()*+.?\\^])/g, "\\$1").replace(wikiTextBlankRE, wikiTextBlank);
    };
    fallback = fallback.toLowerCase();
    const canonical = formattedNamespaces[String(namespaceNumber)].toLowerCase();
    let regexp = createRegexpStr(canonical);
    if (fallback && canonical !== fallback) {
      regexp += "|".concat(createRegexpStr(fallback));
    }
    if (namespaceIds) {
      for (const cat_name in namespaceIds) {
        if (typeof cat_name === "string" && cat_name.toLowerCase() !== canonical && cat_name.toLowerCase() !== fallback && namespaceIds[cat_name] === namespaceNumber) {
          regexp += "|".concat(createRegexpStr(cat_name));
        }
      }
    }
    return regexp;
  };
  HC.category_canonical = formattedNamespaces["14"];
  HC.category_regexp = autoLocalize(14, "category");
  if (formattedNamespaces["10"]) {
    HC.template_regexp = autoLocalize(10, "template");
  }
  const make = (arg, literal) => {
    if (!arg) {
      return null;
    }
    return literal ? document.createTextNode(arg) : document.createElement(arg);
  };
  const param = (name, uri) => {
    uri || (uri = document.location.href);
    const re = new RegExp("[&?]".concat(name, "=([^&#]*)"));
    const m = re.exec(uri);
    if (m && m.length > 1) {
      return decodeURIComponent(m[1]);
    }
    return null;
  };
  const title = (href) => {
    if (!href) {
      return null;
    }
    const script = "".concat(conf.wgScript, "?");
    if (href.indexOf(script) === 0 || href.indexOf(conf.wgServer + script) === 0 || conf.wgServer.slice(0, 2) === "//" && href.indexOf(document.location.protocol + conf.wgServer + script) === 0) {
      return param("title", href);
    }
    let prefix = conf.wgArticlePath.replace("$1", "");
    if (href.indexOf(prefix)) {
      prefix = conf.wgServer + prefix;
    }
    if (href.indexOf(prefix) && prefix.slice(0, 2) === "//") {
      prefix = document.location.protocol + prefix;
    }
    if (href.indexOf(prefix) === 0) {
      return decodeURIComponent(href.slice(prefix.length));
    }
    return null;
  };
  const hasClass = ({
    className
  }, name) => {
    return " ".concat(className, " ").includes(" ".concat(name, " "));
  };
  const capitalize = (str) => {
    if (!str || str.length === 0) {
      return str;
    }
    return str.slice(0, 1).toUpperCase() + str.slice(1);
  };
  const wikiPagePath = (pageName) => {
    return conf.wgArticlePath.replace("$1", encodeURIComponent(pageName).replace(/%3A/g, ":").replace(/%2F/g, "/"));
  };
  const escapeRE = (str) => {
    return str.replace(/([$()*+.?[\\\]^])/g, "\\$1");
  };
  const substituteFactory = (options) => {
    options || (options = {});
    const lead = options.indicator || "$";
    const indicator = escapeRE(lead);
    const lbrace = escapeRE(options.lbrace || "{");
    const rbrace = escapeRE(options.rbrace || "}");
    const re = new RegExp(
      // $$
      "(?:".concat(indicator, "(").concat(indicator, "))|(?:").concat(indicator, "(\\d+))|(?:").concat(indicator, "(?:").concat(lbrace, "([^").concat(lbrace).concat(rbrace, "]+)").concat(rbrace, "))|(?:").concat(indicator, "(?!(?:[").concat(indicator).concat(lbrace, "]|\\d))(\\S+?)\\b)"),
      "g"
    );
    return (str, map) => {
      if (!map) {
        return str;
      }
      return str.replace(re, (match, prefix, idx, key, alpha) => {
        if (prefix === lead) {
          return lead;
        }
        const k = alpha || key || idx;
        const replacement = typeof map[k] === "function" ? map[k](match, k) : map[k];
        return typeof replacement === "string" ? replacement : replacement || match;
      });
    };
  };
  const replaceShortcuts = (() => {
    const replaceHash = substituteFactory({
      indicator: "#",
      lbrace: "[",
      rbrace: "]"
    });
    return (str, map) => {
      const s = replaceHash(str, map);
      return HC.capitalizePageNames ? capitalize(s) : s;
    };
  })();
  const findCatsRE = new RegExp("\\[\\[".concat(wikiTextBlankOrBidi, "(?:").concat(HC.category_regexp, ")").concat(wikiTextBlankOrBidi, ":[^\\]]+\\]\\]"), "g");
  const replaceByBlanks = (match) => {
    return match.replace(/(\s|\S)/g, " ");
  };
  const find_category = (wikitext, category, once) => {
    let cat_regex = null;
    if (HC.template_categories[category]) {
      cat_regex = new RegExp("\\{\\{".concat(wikiTextBlankOrBidi, "(").concat(HC.template_regexp, "(?=").concat(wikiTextBlankOrBidi, ":))?").concat(wikiTextBlankOrBidi, "(?:").concat(HC.template_categories[category], ")").concat(wikiTextBlankOrBidi, "(\\|.*?)?\\}\\}"), "g");
    } else {
      const cat_name = escapeRE(category);
      const initial = cat_name.slice(0, 1);
      cat_regex = new RegExp("\\[\\[".concat(wikiTextBlankOrBidi, "(").concat(HC.category_regexp, ")").concat(wikiTextBlankOrBidi, ":").concat(wikiTextBlankOrBidi).concat(initial === "\\" || !HC.capitalizePageNames ? initial : "[".concat(initial.toUpperCase()).concat(initial.toLowerCase(), "]")).concat(cat_name.slice(1).replace(wikiTextBlankRE, wikiTextBlank)).concat(wikiTextBlankOrBidi, "(\\|.*?)?\\]\\]"), "g");
    }
    if (once) {
      return cat_regex.exec(wikitext);
    }
    const nowikiRegex = new RegExp("<no".concat("wiki>", "(\\s|\\S)*?</no", "wiki", ">"), "g");
    const copiedtext = wikitext.replace(/<!--(\s|\S)*?-->/g, replaceByBlanks).replace(nowikiRegex, replaceByBlanks);
    const result = [];
    let curr_match = null;
    while ((curr_match = cat_regex.exec(copiedtext)) !== null) {
      result.push({
        match: curr_match
      });
    }
    result.re = cat_regex;
    return result;
  };
  let interlanguageRE = null;
  const change_category = (wikitext, toRemove, toAdd, key, is_hidden) => {
    const find_insertionpoint = (_wikitext) => {
      const nowikiRegex = new RegExp("<no".concat("wiki>", "(\\s|\\S)*?</no", "wiki", ">"), "g");
      const copiedtext = _wikitext.replace(/<!--(\s|\S)*?-->/g, replaceByBlanks).replace(nowikiRegex, replaceByBlanks);
      let index = -1;
      findCatsRE.lastIndex = 0;
      while (findCatsRE.exec(copiedtext) !== null) {
        index = findCatsRE.lastIndex;
      }
      if (index < 0) {
        let match = null;
        interlanguageRE ? match = interlanguageRE.exec(copiedtext) : (
          // Approximation without API: interlanguage links start with 2 to 3 lower case letters, optionally followed by
          // a sequence of groups consisting of a dash followed by one or more lower case letters. Exceptions are "simple"
          // and "tokipona".
          match = /((^|\n\r?)(\[\[\s*(([a-z]{2,3}(-[a-z]+)*)|simple|tokipona)\s*:[^\]]+]]\s*))+$/.exec(copiedtext)
        );
        if (match) {
          ({
            index
          } = match);
        }
        return {
          idx: index,
          onCat: false
        };
      }
      return {
        idx: index,
        onCat: index >= 0
      };
    };
    const summary = [];
    const nameSpace = HC.category_canonical;
    const keyChange = toRemove && toAdd && toRemove === toAdd && toAdd.length > 0;
    let matches;
    let cat_point = -1;
    if (key) {
      key = "|".concat(key);
    }
    if (toRemove && toRemove.length > 0) {
      matches = find_category(wikitext, toRemove);
      if (!matches || matches.length === 0) {
        return {
          text: wikitext,
          summary,
          error: getMessage("messages-cat_notFound", toRemove)
        };
      }
      let before = wikitext.slice(0, Math.max(0, matches[0].match.index));
      let after = wikitext.slice(Math.max(0, matches[0].match.index + matches[0].match[0].length));
      if (matches.length > 1) {
        matches.re.lastIndex = 0;
        after = after.replace(matches.re, "");
      }
      if (toAdd && // nameSpace = matches[ 0 ].match[ 1 ] || nameSpace; Canonical namespace should be always preferred
      key === null) {
        [, , key] = matches[0].match;
      }
      let i = before.length - 1;
      while (i >= 0 && before.charAt(i) !== "\n" && before.slice(i, i + 1).search(/\s/) >= 0) {
        i--;
      }
      let j = 0;
      while (j < after.length && after.charAt(j) !== "\n" && after.slice(j, j + 1).search(/\s/) >= 0) {
        j++;
      }
      if (i >= 0 && before.charAt(i) === "\n" && (after.length === 0 || j < after.length && after.charAt(j) === "\n")) {
        i--;
      }
      before = i >= 0 ? before.slice(0, Math.max(0, i + 1)) : "";
      after = j < after.length ? after.slice(Math.max(0, j)) : "";
      if (before.length > 0 && before.slice(Math.max(0, before.length - 1)).search(/\S/) >= 0 && after.length > 0 && after.slice(0, 1).search(/\S/) >= 0) {
        before += " ";
      }
      cat_point = before.length;
      if (cat_point === 0 && after.length > 0 && after.slice(0, 1) === "\n") {
        after = after.slice(1);
      }
      wikitext = before + after;
      if (!keyChange) {
        if (HC.template_categories[toRemove]) {
          summary.push(getMessage("messages-template_removed", toRemove));
        } else {
          summary.push(getMessage("messages-cat_removed", toRemove));
        }
      }
    }
    if (toAdd && toAdd.length > 0) {
      matches = find_category(wikitext, toAdd);
      if (matches && matches.length > 0) {
        return {
          text: wikitext,
          summary,
          error: getMessage("messages-cat_exists", toAdd)
        };
      }
      let onCat = false;
      if (cat_point < 0) {
        const point = find_insertionpoint(wikitext);
        cat_point = point.idx;
        ({
          onCat
        } = point);
      } else {
        onCat = true;
      }
      const newcatstring = "[[".concat(nameSpace, ":").concat(toAdd).concat(key || "", "]]");
      if (cat_point >= 0) {
        const suffix = wikitext.slice(Math.max(0, cat_point));
        wikitext = wikitext.slice(0, Math.max(0, cat_point)) + (cat_point > 0 ? "\n" : "") + newcatstring + (onCat ? "" : "\n");
        wikitext += suffix.length > 0 && suffix.slice(0, 1) !== "\n" ? "\n".concat(suffix) : suffix;
      } else {
        if (wikitext.length > 0 && wikitext.slice(-1, wikitext.length - 1 + 1) !== "\n") {
          wikitext += "\n";
        }
        wikitext += (wikitext.length > 0 ? "\n" : "") + newcatstring;
      }
      if (keyChange) {
        let k = key || "";
        if (k.length > 0) {
          k = k.slice(1);
        }
        summary.push(getMessage("messages-cat_keychange", toAdd, k));
      } else {
        summary.push(getMessage("messages-cat_added", toAdd));
      }
      if (HC.uncat_regexp && !is_hidden) {
        const txt = wikitext.replace(HC.uncat_regexp, "");
        if (txt.length !== wikitext.length) {
          wikitext = txt;
          summary.push(getMessage("messages-uncat_removed"));
        }
      }
    }
    return {
      text: wikitext,
      summary,
      error: null
    };
  };
  const evtKeys = ({
    ctrlKey,
    metaKey,
    shiftKey
  }) => {
    let code = 0;
    if (ctrlKey) {
      if (ctrlKey || metaKey) {
        code || (code = 1);
      }
      if (shiftKey) {
        code || (code = 2);
      }
    }
    return code;
  };
  const evtKill = (e) => {
    if (e.preventDefault) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.cancelBubble = true;
    }
    return false;
  };
  let catLine = null;
  let onUpload = false;
  let editors = [];
  let commitButton = null;
  let commitForm = null;
  let multiSpan = null;
  let pageText = null;
  let pageTime = null;
  let pageWatched = false;
  let watchCreate = false;
  let watchEdit = false;
  let minorEdits = false;
  let editToken = null;
  let is_rtl = false;
  let serverTime = null;
  let lastRevId = null;
  let pageTextRevId = null;
  let conflictingUser = null;
  let newDOM = false;
  const UNCHANGED = 0;
  const OPEN = 1;
  const CHANGE_PENDING = 2;
  const CHANGED = 3;
  const DELETED = 4;
  const setPage = (data) => {
    let startTime = null;
    if (data && data.query) {
      if (data.query.pages) {
        const [page] = data.query.pages;
        if (page) {
          if (page.revisions && page.revisions.length > 0) {
            pageText = page.revisions[0].slots["main"].content;
            if (page.revisions[0].timestamp) {
              pageTime = page.revisions[0].timestamp.replace(/\D/g, "");
            }
            if (page.revisions[0].revid) {
              pageTextRevId = page.revisions[0].revid;
            }
            if (page.revisions.length > 1) {
              conflictingUser = page.revisions[1].user;
            }
          }
          if (page.lastrevid) {
            lastRevId = page.lastrevid;
          }
          if (page.starttimestamp) {
            startTime = page.starttimestamp.replace(/\D/g, "");
          }
          pageWatched = typeof page.watched === "string";
          if (data.query.tokens) {
            editToken = data.query.tokens.csrftoken;
          }
          if (page.langlinks && (!data["query-continue"] || !data["query-continue"].langlinks)) {
            let re = "";
            for (let i = 0; i < page.langlinks.length; i++) {
              re += (i > 0 ? "|" : "") + page.langlinks[i].lang.replace(/([$()*+.?\\^])/g, "\\$1");
            }
            if (re.length > 0) {
              interlanguageRE = new RegExp("((^|\\n\\r?)(\\[\\[\\s*(".concat(re, ")\\s*:[^\\]]+\\]\\]\\s*))+$"));
            }
          }
        }
      }
      if (data.query.general) {
        if (data.query.general.time && !startTime) {
          startTime = data.query.general.time.replace(/\D/g, "");
        }
        if (HC.capitalizePageNames === null) {
          HC.capitalizePageNames = data.query.general.case === "first-letter";
        }
      }
      serverTime = startTime;
      if (data.query.userinfo && data.query.userinfo.options) {
        watchCreate = !HC.dont_add_to_watchlist && data.query.userinfo.options.watchcreations === "1";
        watchEdit = !HC.dont_add_to_watchlist && data.query.userinfo.options.watchdefault === "1";
        minorEdits = data.query.userinfo.options.minordefault === 1;
        if (minorEdits) {
          HC.single_minor = true;
        }
      }
    }
  };
  let saveInProgress = false;
  const initiateEdit = (doEdit, failure) => {
    if (saveInProgress) {
      return;
    }
    saveInProgress = true;
    let oldButtonState;
    if (commitButton) {
      oldButtonState = commitButton.disabled;
      commitButton.disabled = true;
    }
    const fail = function(...args) {
      saveInProgress = false;
      if (commitButton) {
        commitButton.disabled = oldButtonState;
      }
      failure.apply(this, args);
    };
    const params = {
      action: "query",
      format: "json",
      formatversion: "2",
      rawcontinue: "",
      titles: conf.wgPageName,
      prop: ["info", "revisions", "langlinks"],
      inprop: "watched",
      rvprop: ["content", "timestamp", "ids", "user"],
      rvslots: "*",
      rvlimit: "2",
      rvdir: "newer",
      rvstartid: conf.wgCurRevisionId,
      lllimit: "500",
      meta: ["siteinfo", "userinfo", "tokens"],
      type: "csrf",
      uiprop: ["options"]
    };
    api.get(params).done((data) => {
      setPage(data);
      doEdit(fail);
    }).fail(({
      status,
      statusText
    }) => {
      fail("".concat(status, " ").concat(statusText));
    });
  };
  const multiChangeMsg = (count) => {
    return getMessage("messages-multi_change", String(count));
  };
  const currentTimestamp = () => {
    const now = /* @__PURE__ */ new Date();
    let ts = String(now.getUTCFullYear());
    const two = (s) => {
      return s.slice(-2);
    };
    ts += two("0".concat(now.getUTCMonth() + 1)) + two("0".concat(now.getUTCDate())) + two("00".concat(now.getUTCHours())) + two("00".concat(now.getUTCMinutes())) + two("00".concat(now.getUTCSeconds()));
    return ts;
  };
  const performChanges = (failure, singleEditor) => {
    if (pageText === null) {
      failure(getMessage("messages-multi_error"));
      return;
    }
    let action;
    const selfEditConflict = (lastRevId !== null && lastRevId !== conf.wgCurRevisionId || pageTextRevId !== null && pageTextRevId !== conf.wgCurRevisionId) && conflictingUser && conflictingUser === conf.wgUserName;
    if (singleEditor && !singleEditor.noCommit && !HC.no_autocommit && editToken && !selfEditConflict) {
      commitForm.wpEditToken.value = editToken;
      action = commitForm.wpDiff;
      if (action) {
        action.value = "wpSave";
        action.name = action.value;
      }
    } else {
      action = commitForm.wpSave;
      if (action) {
        action.value = "wpDiff";
        action.name = action.value;
      }
    }
    let result = {
      text: pageText
    };
    const changed = [];
    const added = [];
    const deleted = [];
    const toEdit = singleEditor ? [singleEditor] : editors;
    let edit;
    let i;
    let error = null;
    let changes = 0;
    for (i = 0; i < toEdit.length; i++) {
      edit = toEdit[i];
      if (edit.state === CHANGED) {
        result = change_category(result.text, edit.originalCategory, edit.currentCategory, edit.currentKey, edit.currentHidden);
        if (!result.error) {
          changes++;
          if (!edit.originalCategory || edit.originalCategory.length === 0) {
            added.push(edit.currentCategory);
          } else {
            changed.push({
              from: edit.originalCategory,
              to: edit.currentCategory
            });
          }
        } else if (error === null) {
          ({
            error
          } = result);
        }
      } else if (edit.state === DELETED && edit.originalCategory && edit.originalCategory.length > 0) {
        result = change_category(result.text, edit.originalCategory, null, null, false);
        if (!result.error) {
          changes++;
          deleted.push(edit.originalCategory);
        } else if (error === null) {
          ({
            error
          } = result);
        }
      }
    }
    if (error !== null) {
      action = commitForm.wpSave;
      if (action) {
        action.value = "wpDiff";
        action.name = action.value;
      }
    }
    commitForm.wpMinoredit.checked = minorEdits;
    commitForm.wpWatchthis.checked = !conf.wgArticleId && watchCreate || watchEdit || pageWatched;
    if (conf.wgArticleId || !!singleEditor) {
      if (action && action.value === "wpSave") {
        if (HC.changeTag) {
          commitForm.wpChangeTags.value = HC.changeTag;
        }
      } else {
        commitForm.wpAutoSummary.value = HC.changeTag;
      }
      if (changes === 1) {
        if (result.summary && result.summary.length > 0) {
          commitForm.wpSummary.value = (HC.changeTag ? "" : getMessage("messages-prefix")) + result.summary.join(getMessage("messages-separator")) + (HC.changeTag ? "" : getMessage("messages-using"));
        }
        commitForm.wpMinoredit.checked = HC.single_minor || minorEdits;
      } else if (changes) {
        let summary = [];
        const shortSummary = [];
        for (i = 0; i < deleted.length; i++) {
          summary.push("−".concat(getMessage("messages-short_catchange", deleted[i])));
        }
        if (deleted.length === 1) {
          shortSummary.push("−".concat(getMessage("messages-short_catchange", deleted[0])));
        } else if (deleted.length > 0) {
          shortSummary.push("− ".concat(multiChangeMsg(deleted.length)));
        }
        for (i = 0; i < added.length; i++) {
          summary.push("+".concat(getMessage("messages-short_catchange", added[i])));
        }
        if (added.length === 1) {
          shortSummary.push("+".concat(getMessage("messages-short_catchange", added[0])));
        } else if (added.length > 0) {
          shortSummary.push("+ ".concat(multiChangeMsg(added.length)));
        }
        const arrow = is_rtl ? "←" : "→";
        for (i = 0; i < changed.length; i++) {
          if (changed[i].from === changed[i].to) {
            summary.push("±".concat(getMessage("messages-short_catchange", changed[i].from)));
          } else {
            summary.push("±".concat(getMessage("messages-short_catchange", changed[i].from)).concat(arrow).concat(getMessage("messages-short_catchange", changed[i].to)));
          }
        }
        if (changed.length === 1) {
          if (changed[0].from === changed[0].to) {
            shortSummary.push("±".concat(getMessage("messages-short_catchange", changed[0].from)));
          } else {
            shortSummary.push("±".concat(getMessage("messages-short_catchange", changed[0].from)).concat(arrow).concat(getMessage("messages-short_catchange", changed[0].to)));
          }
        } else if (changed.length > 0) {
          shortSummary.push("± ".concat(multiChangeMsg(changed.length)));
        }
        if (summary.length > 0) {
          summary = summary.join(getMessage("messages-separator"));
          if (summary.length > 200 - (HC.changeTag ? "" : getMessage("messages-prefix")).length - (HC.changeTag ? "" : getMessage("messages-using")).length) {
            summary = shortSummary.join(getMessage("messages-separator"));
          }
          commitForm.wpSummary.value = (HC.changeTag ? "" : getMessage("messages-prefix")) + summary + (HC.changeTag ? "" : getMessage("messages-using"));
        }
      }
    }
    commitForm.wpTextbox1.value = result.text;
    commitForm.wpStarttime.value = serverTime || currentTimestamp();
    commitForm.wpEdittime.value = pageTime || commitForm.wpStarttime.value;
    if (selfEditConflict) {
      commitForm.oldid.value = String(pageTextRevId || conf.wgCurRevisionId);
    }
    commitForm.hcCommit.click();
  };
  const resolveOne = (page, toResolve) => {
    const cats = page.categories;
    const {
      links
    } = page;
    let is_dab = false;
    let is_redir = typeof page.redirect === "string";
    let i;
    const is_hidden = page.categoryinfo && typeof page.categoryinfo.hidden === "string";
    const is_missing = typeof page.missing === "string";
    for (i = 0; i < toResolve.length; i++) {
      if (i && toResolve[i].dabInputCleaned !== page.title.slice(Math.max(0, page.title.indexOf(":") + 1))) {
        continue;
      }
      toResolve[i].currentHidden = is_hidden;
      toResolve[i].inputExists = !is_missing;
      toResolve[i].icon.src = is_missing ? HC.existsNo : HC.existsYes;
    }
    if (is_missing) {
      return;
    }
    if (!is_redir && cats && (getMessage("disambig_category") || getMessage("redir_category"))) {
      var _iterator = _createForOfIteratorHelper(cats), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          const cat_ = _step.value;
          let cat = cat_.title;
          if (cat) {
            cat = cat.slice(Math.max(0, cat.indexOf(":") + 1)).replace(/_/g, " ");
            if (cat === getMessage("disambig_category")) {
              is_dab = true;
              break;
            } else if (cat === getMessage("redir_category")) {
              is_redir = true;
              break;
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    if (!is_redir && !is_dab) {
      return;
    }
    if (!links || links.length === 0) {
      return;
    }
    const titles = [];
    for (i = 0; i < links.length; i++) {
      if (
        // Category namespace -- always true since we ask only for the category links
        links[i].ns === 14 && // Name not empty
        links[i].title && links[i].title.length > 0
      ) {
        let match = links[i].title;
        match = match.slice(Math.max(0, match.indexOf(":") + 1));
        if (!HC.blacklist || !HC.blacklist.test(match)) {
          titles.push(match);
        }
      }
    }
    if (titles.length === 0) {
      return;
    }
    for (i = 0; i < toResolve.length; i++) {
      if (i && toResolve[i].dabInputCleaned !== page.title.slice(Math.max(0, page.title.indexOf(":") + 1))) {
        continue;
      }
      toResolve[i].inputExists = true;
      toResolve[i].icon.src = HC.existsYes;
      if (titles.length > 1) {
        toResolve[i].dab = titles;
      } else {
        toResolve[i].text.value = titles[0] + (toResolve[i].currentKey === null ? "" : "|".concat(toResolve[i].currentKey));
      }
    }
  };
  const resolveRedirects = (toResolve, params) => {
    if (!params || !params.query || !params.query.pages) {
      return;
    }
    for (const p in params.query.pages) {
      if (!Object.hasOwn(params.query.pages, p)) {
        continue;
      }
      resolveOne(params.query.pages[p], toResolve);
    }
  };
  const resolveMulti = (toResolve, callback) => {
    let i;
    for (i = 0; i < toResolve.length; i++) {
      toResolve[i].dab = null;
      toResolve[i].dabInput = toResolve[i].lastInput;
    }
    if (noSuggestions) {
      callback(toResolve);
      return;
    }
    const params = {
      action: "query",
      format: "json",
      prop: "info|links|categories|categoryinfo",
      plnamespace: "14",
      pllimit: toResolve.length * 10,
      cllimit: toResolve.length * 10
    };
    const titles = [];
    for (i = 0; i < toResolve.length; i++) {
      let v = toResolve[i].dabInput;
      v = replaceShortcuts(v, HC.shortcuts);
      toResolve[i].dabInputCleaned = v;
      titles.push("Category:".concat(v));
    }
    params.titles = titles.join("|");
    api.get(params).done((json) => {
      resolveRedirects(toResolve, json);
      callback(toResolve);
    }).fail((req) => {
      if (!req) {
        noSuggestions = true;
      }
      callback(toResolve);
    });
  };
  const makeActive = (which) => {
    if (which.is_active) {
      return;
    }
    for (var _i = 0, _editors = editors; _i < _editors.length; _i++) {
      const editor = _editors[_i];
      if (editor !== which) {
        editor.inactivate();
      }
    }
    which.is_active = true;
    if (which.dab) {
      showDab(which);
    } else {
      const expectedInput = which.lastRealInput || which.lastInput || "";
      const actualValue = which.text.value || "";
      if (expectedInput.length === 0 && actualValue.length > 0 || expectedInput.length > 0 && actualValue.indexOf(expectedInput)) {
        which.showsList = false;
        const v = actualValue.split("|");
        [which.lastInput] = v;
        which.lastRealInput = which.lastInput;
        if (v.length > 1) {
          [, which.currentKey] = v;
        }
        if (which.lastSelection) {
          which.lastSelection = {
            start: v[0].length,
            end: v[0].length
          };
        }
      }
      if (which.showsList) {
        which.displayList();
      }
      if (which.lastSelection) {
        setTimeout(() => {
          which.setSelection(which.lastSelection.start, which.lastSelection.end);
        }, 0);
      }
    }
  };
  const showDab = (which) => {
    if (which.is_active) {
      which.showSuggestions(which.dab, false, null, null);
      which.dab = null;
    } else {
      makeActive(which);
    }
  };
  const multiSubmit = () => {
    const toResolve = [];
    for (var _i2 = 0, _editors2 = editors; _i2 < _editors2.length; _i2++) {
      const editor = _editors2[_i2];
      if (editor.state === CHANGE_PENDING || editor.state === OPEN) {
        toResolve.push(editor);
      }
    }
    if (toResolve.length === 0) {
      initiateEdit((failure) => {
        performChanges(failure);
      }, (msg) => {
        mw.notify(msg, {
          tag: "hotCat"
        });
      });
      return;
    }
    resolveMulti(toResolve, (resolved) => {
      let firstDab = null;
      let dontChange = false;
      var _iterator2 = _createForOfIteratorHelper(resolved), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          const element = _step2.value;
          if (element.lastInput === element.dabInput) {
            if (element.dab) {
              if (!firstDab) {
                firstDab = element;
              }
            } else if (element.acceptCheck(true)) {
              element.commit();
            }
          } else {
            dontChange = true;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      if (firstDab) {
        showDab(firstDab);
      } else if (!dontChange) {
        initiateEdit((failure) => {
          performChanges(failure);
        }, (msg) => {
          mw.notify(msg, {
            tag: "hotCat"
          });
        });
      }
    });
  };
  const setMultiInput = () => {
    if (commitButton || onUpload) {
      return;
    }
    commitButton = make("input");
    commitButton.type = "button";
    commitButton.value = getMessage("messages-commit");
    commitButton.addEventListener("click", multiSubmit);
    if (multiSpan) {
      multiSpan.parentNode.replaceChild(commitButton, multiSpan);
    } else {
      catLine.append(commitButton);
    }
  };
  const checkMultiInput = () => {
    if (!commitButton) {
      return;
    }
    let hasChanges = false;
    for (var _i3 = 0, _editors3 = editors; _i3 < _editors3.length; _i3++) {
      const editor = _editors3[_i3];
      if (editor.state !== UNCHANGED) {
        hasChanges = true;
        break;
      }
    }
    commitButton.disabled = !hasChanges;
  };
  const suggestionEngines = {
    opensearch: {
      uri: "".concat(mw.config.get("wgScriptPath"), "/api.php?format=json&action=opensearch&namespace=14&limit=30&search=Category:$1"),
      // $1 = search term
      // Function to convert result of uri into an array of category names
      handler: (queryResult, queryKey) => {
        if (queryResult && queryResult.length >= 2) {
          const key = queryResult[0].slice(Math.max(0, queryResult[0].indexOf(":") + 1));
          const [, titles] = queryResult;
          let exists = false;
          if (!cat_prefix) {
            cat_prefix = new RegExp("^(".concat(HC.category_regexp, "):"));
          }
          for (let i = 0; i < titles.length; i++) {
            cat_prefix.lastIndex = 0;
            const m = cat_prefix.exec(titles[i]);
            if (m && m.length > 1) {
              titles[i] = titles[i].slice(Math.max(0, titles[i].indexOf(":") + 1));
              if (key === titles[i]) {
                exists = true;
              }
            } else {
              titles.splice(i, 1);
              i--;
            }
          }
          titles.exists = exists;
          if (queryKey !== key) {
            titles.normalized = key;
          }
          return titles;
        }
        return null;
      }
    },
    internalsearch: {
      uri: "".concat(mw.config.get("wgScriptPath"), "/api.php?format=json&action=query&list=allpages&apnamespace=14&aplimit=30&apfrom=$1&apprefix=$1"),
      handler: (queryResult) => {
        if (queryResult && queryResult.query && queryResult.query.allpages) {
          const titles = queryResult.query.allpages;
          for (let i = 0; i < titles.length; i++) {
            titles[i] = titles[i].title.slice(Math.max(0, titles[i].title.indexOf(":") + 1));
          }
          return titles;
        }
        return null;
      }
    },
    exists: {
      uri: "".concat(mw.config.get("wgScriptPath"), "/api.php?format=json&action=query&prop=info&titles=Category:$1"),
      handler: (queryResult, queryKey) => {
        if (queryResult && queryResult.query && queryResult.query.pages && !queryResult.query.pages[-1]) {
          for (const p in queryResult.query.pages) {
            if (!Object.hasOwn(queryResult.query.pages, p)) {
              continue;
            }
            let _title = queryResult.query.pages[p].title;
            _title = _title.slice(Math.max(0, _title.indexOf(":") + 1));
            const titles = [_title];
            titles.exists = true;
            if (queryKey !== _title) {
              titles.normalized = _title;
            }
            return titles;
          }
        }
        return null;
      }
    },
    subcategories: {
      uri: "".concat(mw.config.get("wgScriptPath"), "/api.php?format=json&action=query&list=categorymembers&cmtype=subcat&cmlimit=max&cmtitle=Category:$1"),
      handler: (queryResult) => {
        if (queryResult && queryResult.query && queryResult.query.categorymembers) {
          const titles = queryResult.query.categorymembers;
          for (let i = 0; i < titles.length; i++) {
            titles[i] = titles[i].title.slice(Math.max(0, titles[i].title.indexOf(":") + 1));
          }
          return titles;
        }
        return null;
      }
    },
    parentcategories: {
      uri: "".concat(mw.config.get("wgScriptPath"), "/api.php?format=json&action=query&prop=categories&titles=Category:$1&cllimit=max"),
      handler: (queryResult) => {
        if (queryResult && queryResult.query && queryResult.query.pages) {
          for (const p in queryResult.query.pages) {
            if (queryResult.query.pages[p].categories) {
              const titles = queryResult.query.pages[p].categories;
              for (let i = 0; i < titles.length; i++) {
                titles[i] = titles[i].title.slice(Math.max(0, titles[i].title.indexOf(":") + 1));
              }
              return titles;
            }
          }
        }
        return null;
      }
    }
  };
  const suggestionConfigs = {
    searchindex: {
      name: "Search index",
      engines: ["opensearch"],
      cache: {},
      show: true,
      temp: false,
      noCompletion: false
    },
    pagelist: {
      name: "Page list",
      engines: ["internalsearch", "exists"],
      cache: {},
      show: true,
      temp: false,
      noCompletion: false
    },
    combined: {
      name: "Combined search",
      engines: ["opensearch", "internalsearch"],
      cache: {},
      show: true,
      temp: false,
      noCompletion: false
    },
    subcat: {
      name: "Subcategories",
      engines: ["subcategories"],
      cache: {},
      show: true,
      temp: true,
      noCompletion: true
    },
    parentcat: {
      name: "Parent categories",
      engines: ["parentcategories"],
      cache: {},
      show: true,
      temp: true,
      noCompletion: true
    }
  };
  const BS = 8;
  const TAB = 9;
  const RET = 13;
  const ESC = 27;
  const SPACE = 32;
  const PGUP = 33;
  const PGDOWN = 34;
  const UP = 38;
  const DOWN = 40;
  const DEL = 46;
  const IME = 229;
  class CategoryEditor {
    constructor(...args) {
      this.initialize(...args);
    }
    initialize(line, span, after, key, is_hidden) {
      if (span) {
        if (is_rtl) {
          span.dir = "rtl";
        }
        this.isAddCategory = false;
        this.catLink = span.firstChild;
        this.originalCategory = after;
        this.originalKey = key && key.length > 1 ? key.slice(1) : null;
        this.originalExists = !hasClass(this.catLink, "new");
        this.makeLinkSpan();
        if (!this.originalExists && this.upDownLinks) {
          this.upDownLinks.style.display = "none";
        }
        span.append(this.linkSpan);
      } else {
        this.isAddCategory = true;
        this.originalCategory = "";
        this.originalKey = null;
        this.originalExists = false;
        if (!newDOM) {
          span = make("span");
          span.className = "noprint";
          if (key) {
            span.append(make(" | ", true));
            if (after) {
              after.parentNode.insertBefore(span, after.nextSibling);
              after = after.nextSibling;
            } else if (line) {
              line.append(span);
            }
          } else if (line && line.firstChild) {
            span.append(make(" ", true));
            line.append(span);
          }
        }
        this.linkSpan = make("span");
        this.linkSpan.className = "noprint nopopups hotcatlink";
        const link = make("a");
        link.href = "#catlinks";
        link.addEventListener("click", this.open.bind(this));
        link.append(make(HC.links.add, true));
        link.title = getMessage("tooltips-add");
        this.linkSpan.append(link);
        span = make(newDOM ? "li" : "span");
        span.className = "noprint";
        if (is_rtl) {
          span.dir = "rtl";
        }
        span.append(this.linkSpan);
        if (after) {
          after.parentNode.insertBefore(span, after.nextSibling);
        } else if (line) {
          line.append(span);
        }
        this.normalLinks = null;
        this.undelLink = null;
        this.catLink = null;
      }
      this.originalHidden = is_hidden;
      this.line = line;
      this.engine = HC.suggestions;
      this.span = span;
      this.currentCategory = this.originalCategory;
      this.currentExists = this.originalExists;
      this.currentHidden = this.originalHidden;
      this.currentKey = this.originalKey;
      this.state = UNCHANGED;
      this.lastSavedState = UNCHANGED;
      this.lastSavedCategory = this.originalCategory;
      this.lastSavedKey = this.originalKey;
      this.lastSavedExists = this.originalExists;
      this.lastSavedHidden = this.originalHidden;
      if (this.catLink && this.currentKey) {
        this.catLink.title = this.currentKey;
      }
      editors[editors.length] = this;
    }
    makeLinkSpan() {
      this.normalLinks = make("span");
      let link = null;
      if (this.originalCategory && this.originalCategory.length > 0) {
        link = make("a");
        link.href = "#catlinks";
        link.addEventListener("click", this.remove.bind(this));
        link.append(make(HC.links.remove, true));
        link.title = getMessage("tooltips-remove");
        this.normalLinks.append(make(" ", true));
        this.normalLinks.append(link);
      }
      if (!HC.template_categories[this.originalCategory]) {
        link = make("a");
        link.href = "#catlinks";
        link.addEventListener("click", this.open.bind(this));
        link.append(make(HC.links.change, true));
        link.title = getMessage("tooltips-change");
        this.normalLinks.append(make(" ", true));
        this.normalLinks.append(link);
        if (!noSuggestions && HC.use_up_down) {
          this.upDownLinks = make("span");
          link = make("a");
          link.href = "#catlinks";
          link.addEventListener("click", this.down.bind(this));
          link.append(make(HC.links.down, true));
          link.title = getMessage("tooltips-down");
          this.upDownLinks.append(make(" ", true));
          this.upDownLinks.append(link);
          link = make("a");
          link.href = "#catlinks";
          link.addEventListener("click", this.up.bind(this));
          link.append(make(HC.links.up, true));
          link.title = getMessage("tooltips-up");
          this.upDownLinks.append(make(" ", true));
          this.upDownLinks.append(link);
          this.normalLinks.append(this.upDownLinks);
        }
      }
      this.linkSpan = make("span");
      this.linkSpan.className = "noprint nopopups hotcatlink";
      this.linkSpan.append(this.normalLinks);
      this.undelLink = make("span");
      this.undelLink.className = "nopopups hotcatlink";
      this.undelLink.style.display = "none";
      link = make("a");
      link.href = "#catlinks";
      link.addEventListener("click", this.restore.bind(this));
      link.append(make(HC.links.restore, true));
      link.title = getMessage("tooltips-restore");
      this.undelLink.append(make(" ", true));
      this.undelLink.append(link);
      this.linkSpan.append(this.undelLink);
    }
    invokeSuggestions(dont_autocomplete) {
      if (this.engine && suggestionConfigs[this.engine] && suggestionConfigs[this.engine].temp && !dont_autocomplete) {
        this.engine = HC.suggestions;
      }
      this.state = CHANGE_PENDING;
      const self2 = this;
      setTimeout(() => {
        self2.textchange(dont_autocomplete);
      }, HC.suggest_delay);
    }
    makeForm() {
      const form = make("form");
      form.method = "POST";
      form.addEventListener("submit", this.accept.bind(this));
      this.form = form;
      const self2 = this;
      const text = make("input");
      text.type = "text";
      text.size = HC.editbox_width;
      if (!noSuggestions) {
        text.addEventListener("keyup", (event) => {
          const key = event.key || 0;
          if (self2.ime && self2.lastKey === IME && !self2.usesComposition && (key === TAB || key === RET || key === ESC || key === SPACE)) {
            self2.ime = false;
          }
          if (self2.ime) {
            return true;
          }
          if (key === UP || key === DOWN || key === PGUP || key === PGDOWN) {
            if (self2.keyCount === 0) {
              return self2.processKey(event);
            }
          } else {
            if (key === ESC && self2.lastKey !== IME && !self2.resetKeySelection()) {
              self2.cancel();
              return;
            }
            self2.invokeSuggestions(key === BS || key === DEL || key === ESC);
          }
          return true;
        });
        text.addEventListener("keydown", (event) => {
          const key = event.key || 0;
          self2.lastKey = key;
          self2.keyCount = 0;
          if (!self2.ime && key === IME && !self2.usesComposition) {
            self2.ime = true;
          } else if (self2.ime && key !== IME && !(key >= 16 && key <= 20 || key >= 91 && key <= 93 || key === 144)) {
            self2.ime = false;
          }
          if (self2.ime) {
            return true;
          }
          if (key === RET) {
            return self2.accept(event);
          }
          return key === ESC ? evtKill(event) : true;
        });
        text.addEventListener("keypress", (event) => {
          self2.keyCount++;
          return self2.processKey(event);
        });
        $(text).on("focus", () => {
          makeActive(self2);
        });
        $(text).on(text.onbeforedeactivate !== void 0 && text.createTextRange ? "beforedeactivate" : "blur", this.saveView.bind(this));
        try {
          $(text).on("compositionstart", () => {
            self2.lastKey = IME;
            self2.usesComposition = true;
            self2.ime = true;
          });
          $(text).on("compositionend", () => {
            self2.lastKey = IME;
            self2.usesComposition = true;
            self2.ime = false;
          });
          $(text).on("textInput", () => {
            self2.ime = false;
            self2.invokeSuggestions(false);
          });
        } catch {
        }
        $(text).on("blur", () => {
          self2.usesComposition = false;
          self2.ime = false;
        });
      }
      this.text = text;
      this.icon = make("img");
      let list = null;
      if (!noSuggestions) {
        list = make("select");
        list.addEventListener("click", () => {
          if (self2.highlightSuggestion(0)) {
            self2.textchange(false, true);
          }
        });
        list.addEventListener("dblclick", (e) => {
          if (self2.highlightSuggestion(0)) {
            self2.accept(e);
          }
        });
        list.addEventListener("change", () => {
          self2.highlightSuggestion(0);
          self2.text.focus();
        });
        list.addEventListener("keyup", (event) => {
          if (event.key === ESC) {
            self2.resetKeySelection();
            self2.text.focus();
            setTimeout(() => {
              self2.textchange(true);
            }, HC.suggest_delay);
          } else if (event.key === RET) {
            self2.accept(event);
          }
        });
        if (!HC.fixed_search) {
          const engineSelector = make("select");
          for (const key in suggestionConfigs) {
            if (suggestionConfigs[key].show) {
              const opt = make("option");
              opt.value = key;
              if (key === this.engine) {
                opt.selected = true;
              }
              opt.append(make(suggestionConfigs[key].name, true));
              engineSelector.append(opt);
            }
          }
          engineSelector.addEventListener("change", () => {
            self2.engine = self2.engineSelector.options[self2.engineSelector.selectedIndex].value;
            self2.text.focus();
            self2.textchange(true, true);
          });
          this.engineSelector = engineSelector;
        }
      }
      this.list = list;
      const button_label = (_id, defaultText) => {
        const label = null;
        if (!label || !label.data) {
          return defaultText;
        }
        return label.data;
      };
      const OK = make("input");
      OK.type = "button";
      OK.value = button_label("wpOkUploadLbl", getMessage("messages-ok"));
      OK.addEventListener("click", this.accept.bind(this));
      this.ok = OK;
      const cancel = make("input");
      cancel.type = "button";
      cancel.value = button_label("wpCancelUploadLbl", getMessage("messages-cancel"));
      cancel.addEventListener("click", this.cancel.bind(this));
      this.cancelButton = cancel;
      const span = make("span");
      span.className = "hotcatinput";
      span.style.position = "relative";
      span.append(text);
      span.append(make(" ", true));
      span.style.whiteSpace = "nowrap";
      if (list) {
        span.append(list);
      }
      if (this.engineSelector) {
        span.append(this.engineSelector);
      }
      if (!noSuggestions) {
        span.append(this.icon);
      }
      span.append(OK);
      span.append(cancel);
      form.append(span);
      form.style.display = "none";
      this.span.append(form);
    }
    display(event) {
      if (this.isAddCategory && !onUpload && this.line) {
        new CategoryEditor(this.line, null, this.span, true);
      }
      if (!commitButton && !onUpload) {
        for (var _i4 = 0, _editors4 = editors; _i4 < _editors4.length; _i4++) {
          const editor = _editors4[_i4];
          if (editor.state !== UNCHANGED) {
            setMultiInput();
            break;
          }
        }
      }
      if (!this.form) {
        this.makeForm();
      }
      if (this.list) {
        this.list.style.display = "none";
      }
      if (this.engineSelector) {
        this.engineSelector.style.display = "none";
      }
      this.currentCategory = this.lastSavedCategory;
      this.currentExists = this.lastSavedExists;
      this.currentHidden = this.lastSavedHidden;
      this.currentKey = this.lastSavedKey;
      this.icon.src = this.currentExists ? HC.existsYes : HC.existsNo;
      this.text.value = this.currentCategory + (this.currentKey === null ? "" : "|".concat(this.currentKey));
      this.originalState = this.state;
      this.lastInput = this.currentCategory;
      this.inputExists = this.currentExists;
      this.state = this.state === UNCHANGED ? OPEN : CHANGE_PENDING;
      this.lastSelection = {
        start: this.currentCategory.length,
        end: this.currentCategory.length
      };
      this.showsList = false;
      if (this.catLink) {
        this.catLink.style.display = "none";
      }
      this.linkSpan.style.display = "none";
      this.form.style.display = "inline";
      this.ok.disabled = false;
      const result = evtKill(event);
      this.text.focus();
      this.text.readOnly = false;
      checkMultiInput();
      return result;
    }
    show(event, engine, readOnly) {
      const result = this.display(event);
      const v = this.lastSavedCategory;
      if (v.length === 0) {
        return result;
      }
      this.text.readOnly = !!readOnly;
      this.engine = engine;
      this.textchange(false, true);
      return result;
    }
    open(event) {
      return this.show(event, this.engine && suggestionConfigs[this.engine].temp ? HC.suggestions : this.engine);
    }
    down(event) {
      return this.show(event, "subcat", true);
    }
    up(event) {
      return this.show(event, "parentcat");
    }
    cancel() {
      if (this.isAddCategory && !onUpload) {
        this.removeEditor();
        return;
      }
      this.inactivate();
      this.form.style.display = "none";
      if (this.catLink) {
        this.catLink.style.display = "";
      }
      this.linkSpan.style.display = "";
      this.state = this.originalState;
      this.currentCategory = this.lastSavedCategory;
      this.currentKey = this.lastSavedKey;
      this.currentExists = this.lastSavedExists;
      this.currentHidden = this.lastSavedHidden;
      if (this.catLink) {
        this.catLink.title = this.currentKey && this.currentKey.length > 0 ? this.currentKey : "";
      }
      if (this.state === UNCHANGED) {
        if (this.catLink) {
          this.catLink.style.backgroundColor = "transparent";
        }
      } else if (!onUpload) {
        try {
          this.catLink.style.backgroundColor = HC.bg_changed;
        } catch {
        }
      }
      checkMultiInput();
    }
    removeEditor() {
      if (!newDOM) {
        const next = this.span.nextSibling;
        if (next) {
          next.remove();
        }
      }
      if (this.span && this.span.parentNode) {
        this.span.remove();
      }
      for (let i = 0; i < editors.length; i++) {
        if (editors[i] === this) {
          editors.splice(i, 1);
          break;
        }
      }
      checkMultiInput();
    }
    rollback(event) {
      this.undoLink.remove();
      this.undoLink = null;
      this.currentCategory = this.originalCategory;
      this.currentKey = this.originalKey;
      this.currentExists = this.originalExists;
      this.currentHidden = this.originalHidden;
      this.lastSavedCategory = this.originalCategory;
      this.lastSavedKey = this.originalKey;
      this.lastSavedExists = this.originalExists;
      this.lastSavedHidden = this.originalHidden;
      this.state = UNCHANGED;
      if (!this.currentCategory || this.currentCategory.length === 0) {
        this.removeEditor();
      } else {
        this.catLink.firstChild.remove();
        this.catLink.append(make(this.currentCategory, true));
        this.catLink.href = wikiPagePath("".concat(HC.category_canonical, ":").concat(this.currentCategory));
        this.catLink.title = this.currentKey || "";
        this.catLink.className = this.currentExists ? "" : "new";
        this.catLink.style.backgroundColor = "transparent";
        if (this.upDownLinks) {
          this.upDownLinks.style.display = this.currentExists ? "" : "none";
        }
        checkMultiInput();
      }
      return evtKill(event);
    }
    inactivate() {
      if (this.list) {
        this.list.style.display = "none";
      }
      if (this.engineSelector) {
        this.engineSelector.style.display = "none";
      }
      this.is_active = false;
    }
    acceptCheck(dontCheck) {
      this.sanitizeInput();
      const value = this.text.value.split("|");
      let key = null;
      if (value.length > 1) {
        [, key] = value;
      }
      let v = value[0].replace(/_/g, " ").trim();
      if (HC.capitalizePageNames) {
        v = capitalize(v);
      }
      this.lastInput = v;
      v = replaceShortcuts(v, HC.shortcuts);
      if (v.length === 0) {
        this.cancel();
        return false;
      }
      if (!dontCheck && (conf.wgNamespaceNumber === 14 && v === conf.wgTitle || HC.blacklist && HC.blacklist.test(v))) {
        this.cancel();
        return false;
      }
      this.currentCategory = v;
      this.currentKey = key;
      this.currentExists = this.inputExists;
      return true;
    }
    accept(event) {
      this.noCommit = evtKeys(event) === 1;
      const result = evtKill(event);
      if (this.acceptCheck()) {
        const toResolve = [this];
        const original = this.currentCategory;
        resolveMulti(toResolve, (resolved) => {
          if (resolved[0].dab) {
            showDab(resolved[0]);
          } else if (resolved[0].acceptCheck(true)) {
            resolved[0].commit(resolved[0].currentCategory === original ? null : getMessage("messages-cat_resolved", original));
          }
        });
      }
      return result;
    }
    close() {
      if (!this.catLink) {
        this.catLink = make("a");
        this.catLink.append(make("foo", true));
        this.catLink.style.display = "none";
        this.span.insertBefore(this.catLink, this.span.firstChild.nextSibling);
      }
      this.catLink.firstChild.remove();
      this.catLink.append(make(this.currentCategory, true));
      this.catLink.href = wikiPagePath("".concat(HC.category_canonical, ":").concat(this.currentCategory));
      this.catLink.className = this.currentExists ? "" : "new";
      this.lastSavedCategory = this.currentCategory;
      this.lastSavedKey = this.currentKey;
      this.lastSavedExists = this.currentExists;
      this.lastSavedHidden = this.currentHidden;
      this.inactivate();
      this.form.style.display = "none";
      this.catLink.title = this.currentKey || "";
      this.catLink.style.display = "";
      if (this.isAddCategory) {
        if (onUpload && this.line) {
          new CategoryEditor(this.line, null, this.span, true);
        }
        this.isAddCategory = false;
        this.linkSpan.remove();
        this.makeLinkSpan();
        this.span.append(this.linkSpan);
      }
      if (!this.undoLink) {
        const span = make("span");
        const link = make("a");
        link.href = "#catlinks";
        link.addEventListener("click", this.rollback.bind(this));
        link.append(make(HC.links.undo, true));
        link.title = getMessage("tooltips-undo");
        span.append(make(" ", true));
        span.append(link);
        this.normalLinks.append(span);
        this.undoLink = span;
        if (!onUpload) {
          try {
            this.catLink.style.backgroundColor = HC.bg_changed;
          } catch {
          }
        }
      }
      if (this.upDownLinks) {
        this.upDownLinks.style.display = this.lastSavedExists ? "" : "none";
      }
      this.linkSpan.style.display = "";
      this.state = CHANGED;
      checkMultiInput();
    }
    commit() {
      if (this.currentCategory === this.originalCategory && (this.currentKey === this.originalKey || this.currentKey === null && this.originalKey.length === 0) || conf.wgNamespaceNumber === 14 && this.currentCategory === conf.wgTitle || HC.blacklist && HC.blacklist.test(this.currentCategory)) {
        this.cancel();
        return;
      }
      this.close();
      if (!commitButton && !onUpload) {
        const self2 = this;
        initiateEdit((failure) => {
          performChanges(failure, self2);
        }, (msg) => {
          mw.notify(msg, {
            tag: "hotCat"
          });
        });
      }
    }
    remove(event) {
      this.doRemove(evtKeys(event) === 1);
      return evtKill(event);
    }
    doRemove(noCommit) {
      if (this.isAddCategory) {
        this.cancel();
        return;
      }
      if (!commitButton && !onUpload) {
        for (var _i5 = 0, _editors5 = editors; _i5 < _editors5.length; _i5++) {
          const editor = _editors5[_i5];
          if (editor.state !== UNCHANGED) {
            setMultiInput();
            break;
          }
        }
      }
      if (commitButton) {
        this.catLink.title = "";
        this.catLink.style.cssText += "; text-decoration : line-through !important;";
        try {
          this.catLink.style.backgroundColor = HC.bg_changed;
        } catch {
        }
        this.originalState = this.state;
        this.state = DELETED;
        this.normalLinks.style.display = "none";
        this.undelLink.style.display = "";
        checkMultiInput();
      } else if (onUpload) {
        this.removeEditor();
      } else {
        this.originalState = this.state;
        this.state = DELETED;
        this.noCommit = noCommit || HC.del_needs_diff;
        const self2 = this;
        initiateEdit((failure) => {
          performChanges(failure, self2);
        }, (msg) => {
          self2.state = self2.originalState;
          mw.notify(msg, {
            tag: "hotCat"
          });
        });
      }
    }
    restore(event) {
      this.catLink.title = this.currentKey || "";
      this.catLink.style.textDecoration = "";
      this.state = this.originalState;
      if (this.state === UNCHANGED) {
        this.catLink.style.backgroundColor = "transparent";
      } else {
        try {
          this.catLink.style.backgroundColor = HC.bg_changed;
        } catch {
        }
      }
      this.normalLinks.style.display = "";
      this.undelLink.style.display = "none";
      checkMultiInput();
      return evtKill(event);
    }
    // Internal operations
    selectEngine(engineName) {
      if (!this.engineSelector) {
        return;
      }
      for (let i = 0; i < this.engineSelector.options.length; i++) {
        this.engineSelector.options[i].selected = this.engineSelector.options[i].value === engineName;
      }
    }
    sanitizeInput() {
      let v = this.text.value || "";
      v = v.replace(/^(\s|_)+/, "");
      const re = new RegExp("^(".concat(HC.category_regexp, "):"));
      if (re.test(v)) {
        v = v.slice(Math.max(0, v.indexOf(":") + 1)).replace(/^(\s|_)+/, "");
      }
      v = v.replace(/\u200E$/, "");
      if (HC.capitalizePageNames) {
        v = capitalize(v);
      }
      if (this.text.value !== null && this.text.value !== v) {
        this.text.value = v;
      }
    }
    makeCall(url, callbackObj, engine, queryKey, cleanKey) {
      let cb = callbackObj;
      const e = engine;
      const v = queryKey;
      const z = cleanKey;
      const self2 = this;
      const done = () => {
        cb.callsMade++;
        if (cb.callsMade === cb.nofCalls) {
          if (cb.exists) {
            cb.allTitles.exists = true;
          }
          if (cb.normalized) {
            cb.allTitles.normalized = cb.normalized;
          }
          if (!cb.dontCache && !suggestionConfigs[cb.engineName].cache[z]) {
            suggestionConfigs[cb.engineName].cache[z] = cb.allTitles;
          }
          self2.text.readOnly = false;
          if (!cb.cancelled) {
            self2.showSuggestions(cb.allTitles, cb.noCompletion, v, cb.engineName);
          }
          if (cb === self2.callbackObj) {
            self2.callbackObj = null;
          }
          cb = void 0;
        }
      };
      $.getJSON(url, (json) => {
        const titles = e.handler(json, z);
        if (titles && titles.length > 0) {
          cb.allTitles = cb.allTitles === null ? titles : [...cb.allTitles, ...Array.isArray(titles) ? titles : [titles]];
          if (titles.exists) {
            cb.exists = true;
          }
          if (titles.normalized) {
            cb.normalized = titles.normalized;
          }
        }
        done();
      }).fail((req) => {
        if (!req) {
          noSuggestions = true;
        }
        cb.dontCache = true;
        done();
      });
    }
    callbackObj = null;
    textchange(dont_autocomplete, force) {
      makeActive(this);
      this.sanitizeInput();
      let v = this.text.value;
      const pipe = v.indexOf("|");
      if (pipe >= 0) {
        this.currentKey = v.slice(Math.max(0, pipe + 1));
        v = v.slice(0, Math.max(0, pipe));
      } else {
        this.currentKey = null;
      }
      if (this.lastInput === v && !force) {
        return;
      }
      if (this.lastInput !== v) {
        checkMultiInput();
      }
      this.lastInput = v;
      this.lastRealInput = v;
      this.ok.disabled = v.length > 0 && HC.blacklist && HC.blacklist.test(v);
      if (noSuggestions) {
        if (this.list) {
          this.list.style.display = "none";
        }
        if (this.engineSelector) {
          this.engineSelector.style.display = "none";
        }
        if (this.icon) {
          this.icon.style.display = "none";
        }
        return;
      }
      if (v.length === 0) {
        this.showSuggestions([]);
        return;
      }
      let cleanKey = v.replace(/[\u200E\u200F\u202A-\u202E]/g, "").replace(wikiTextBlankRE, " ");
      cleanKey = replaceShortcuts(cleanKey, HC.shortcuts);
      cleanKey = cleanKey.trim();
      if (cleanKey.length === 0) {
        this.showSuggestions([]);
        return;
      }
      if (this.callbackObj) {
        this.callbackObj.cancelled = true;
      }
      const engineName = suggestionConfigs[this.engine] ? this.engine : "combined";
      dont_autocomplete || (dont_autocomplete = suggestionConfigs[engineName].noCompletion);
      if (suggestionConfigs[engineName].cache[cleanKey]) {
        this.showSuggestions(suggestionConfigs[engineName].cache[cleanKey], dont_autocomplete, v, engineName);
        return;
      }
      const {
        engines
      } = suggestionConfigs[engineName];
      this.callbackObj = {
        allTitles: null,
        callsMade: 0,
        nofCalls: engines.length,
        noCompletion: dont_autocomplete,
        engineName
      };
      this.makeCalls(engines, this.callbackObj, v, cleanKey);
    }
    makeCalls(engines, cb, v, cleanKey) {
      var _iterator3 = _createForOfIteratorHelper(engines), _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
          const engine_ = _step3.value;
          const engine = suggestionEngines[engine_];
          const url = conf.wgScriptPath + engine.uri.replace(/\$1/g, encodeURIComponent(cleanKey));
          this.makeCall(url, cb, engine, v, cleanKey);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
    showSuggestions(titles, dontAutocomplete, queryKey, engineName) {
      this.text.readOnly = false;
      this.dab = null;
      this.showsList = false;
      if (!this.list) {
        return;
      }
      if (noSuggestions) {
        if (this.list) {
          this.list.style.display = "none";
        }
        if (this.engineSelector) {
          this.engineSelector.style.display = "none";
        }
        if (this.icon) {
          this.icon.style.display = "none";
        }
        this.inputExists = true;
        return;
      }
      this.engineName = engineName;
      if (engineName) {
        if (!this.engineSelector) {
          this.engineName = null;
        }
      } else if (this.engineSelector) {
        this.engineSelector.style.display = "none";
      }
      if (queryKey) {
        if (this.lastInput.indexOf(queryKey)) {
          return;
        }
        if (this.lastQuery && this.lastInput.indexOf(this.lastQuery) === 0 && this.lastQuery.length > queryKey.length) {
          return;
        }
      }
      this.lastQuery = queryKey;
      let v = this.text.value.split("|");
      const key = v.length > 1 ? "|".concat(v[1]) : "";
      v = HC.capitalizePageNames ? capitalize(v[0]) : v[0];
      let vNormalized = v;
      const knownToExist = titles && titles.exists;
      let i;
      if (titles) {
        if (titles.normalized && v.indexOf(queryKey) === 0) {
          vNormalized = titles.normalized + v.slice(queryKey.length);
        }
        const vLow = vNormalized.toLowerCase();
        if (HC.blacklist) {
          for (i = 0; i < titles.length; i++) {
            if (HC.blacklist.test(titles[i])) {
              titles.splice(i, 1);
              i--;
            }
          }
        }
        titles.sort((a, b) => {
          if (a === b) {
            return 0;
          }
          if (a.indexOf(b) === 0) {
            return 1;
          }
          if (b.indexOf(a) === 0) {
            return -1;
          }
          let prefixMatchA = a.indexOf(vNormalized) === 0 ? 1 : 0;
          let prefixMatchB = b.indexOf(vNormalized) === 0 ? 1 : 0;
          if (prefixMatchA !== prefixMatchB) {
            return prefixMatchB - prefixMatchA;
          }
          const aLow = a.toLowerCase();
          const bLow = b.toLowerCase();
          prefixMatchA = aLow.indexOf(vLow) === 0 ? 1 : 0;
          prefixMatchB = bLow.indexOf(vLow) === 0 ? 1 : 0;
          if (prefixMatchA !== prefixMatchB) {
            return prefixMatchB - prefixMatchA;
          }
          if (a < b) {
            return -1;
          }
          if (b < a) {
            return 1;
          }
          return 0;
        });
        for (i = 0; i < titles.length; i++) {
          if (i + 1 < titles.length && titles[i] === titles[i + 1] || conf.wgNamespaceNumber === 14 && titles[i] === conf.wgTitle) {
            titles.splice(i, 1);
            i--;
          }
        }
      }
      if (!titles || titles.length === 0) {
        if (this.list) {
          this.list.style.display = "none";
        }
        if (this.engineSelector) {
          this.engineSelector.style.display = "none";
        }
        if (engineName && suggestionConfigs[engineName] && !suggestionConfigs[engineName].temp) {
          if (this.icon) {
            this.icon.src = HC.existsNo;
          }
          this.inputExists = false;
        }
        return;
      }
      const [firstTitle] = titles;
      const completed = this.autoComplete(firstTitle, v, vNormalized, key, dontAutocomplete);
      const existing = completed || knownToExist || firstTitle === replaceShortcuts(v, HC.shortcuts);
      if (engineName && suggestionConfigs[engineName] && !suggestionConfigs[engineName].temp) {
        this.icon.src = existing ? HC.existsYes : HC.existsNo;
        this.inputExists = existing;
      }
      if (completed) {
        this.lastInput = firstTitle;
        if (titles.length === 1) {
          this.list.style.display = "none";
          if (this.engineSelector) {
            this.engineSelector.style.display = "none";
          }
          return;
        }
      }
      while (this.list.firstChild) {
        this.list.firstChild.remove();
      }
      for (i = 0; i < titles.length; i++) {
        const opt = make("option");
        opt.append(make(titles[i], true));
        opt.selected = completed && i === 0;
        this.list.append(opt);
      }
      this.displayList();
    }
    displayList() {
      this.showsList = true;
      if (!this.is_active) {
        this.list.style.display = "none";
        if (this.engineSelector) {
          this.engineSelector.style.display = "none";
        }
        return;
      }
      let nofItems = this.list.options.length > HC.listSize ? HC.listSize : this.list.options.length;
      if (nofItems <= 1) {
        nofItems = 2;
      }
      this.list.size = nofItems;
      this.list.style.align = is_rtl ? "right" : "left";
      this.list.style.zIndex = 5;
      this.list.style.position = "absolute";
      const anchor = is_rtl ? "right" : "left";
      let listh = 0;
      if (this.list.style.display === "none") {
        this.list.style.top = "".concat(this.text.offsetTop, "px");
        this.list.style[anchor] = "-10000px";
        this.list.style.display = "";
        listh = this.list.offsetHeight;
        this.list.style.display = "none";
      } else {
        listh = this.list.offsetHeight;
      }
      let maxListHeight = listh;
      if (nofItems < HC.listSize) {
        maxListHeight = listh / nofItems * HC.listSize;
      }
      const viewport = (what) => {
        if (is_webkit && !document.evaluate) {
          return window["inner".concat(what)];
        }
        const s = "client".concat(what);
        if (window.opera) {
          return $("body")[0][s];
        }
        return (document.documentElement ? document.documentElement[s] : 0) || $("body")[0][s] || 0;
      };
      const scroll_offset = (what) => {
        const s = "scroll".concat(what);
        let result = (document.documentElement ? document.documentElement[s] : 0) || $("body")[0][s] || 0;
        if (is_rtl && what === "Left") {
          if (result < 0) {
            result = -result;
          }
          if (!is_webkit) {
            result = scroll_offset("Width") - viewport("Width") - result;
          }
        }
        return result;
      };
      const position = (node) => {
        if (node.getBoundingClientRect) {
          const box = node.getBoundingClientRect();
          return {
            x: Math.round(box.left + scroll_offset("Left")),
            y: Math.round(box.top + scroll_offset("Top"))
          };
        }
        let t = 0;
        let l = 0;
        do {
          t += node.offsetTop || 0;
          l += node.offsetLeft || 0;
          node = node.offsetParent;
        } while (node);
        return {
          x: l,
          y: t
        };
      };
      const textPos = position(this.text);
      const nl = 0;
      let nt = 0;
      let offset = 0;
      const textBoxWidth = this.text.offsetWidth || this.text.clientWidth;
      if (this.engineName) {
        this.engineSelector.style.zIndex = 5;
        this.engineSelector.style.position = "absolute";
        this.engineSelector.style.width = "".concat(textBoxWidth, "px");
        if (this.engineSelector.style.display === "none") {
          this.engineSelector.style[anchor] = "-10000px";
          this.engineSelector.style.top = "0";
          this.engineSelector.style.display = "";
          offset = this.engineSelector.offsetHeight;
          this.engineSelector.style.display = "none";
        } else {
          offset = this.engineSelector.offsetHeight;
        }
        this.engineSelector.style[anchor] = "".concat(nl, "px");
      }
      if (textPos.y < maxListHeight + offset + 1) {
        nt = this.text.offsetHeight + offset + 1;
        if (this.engineName) {
          this.engineSelector.style.top = "".concat(this.text.offsetHeight, "px");
        }
      } else {
        nt = -listh - offset - 1;
        if (this.engineName) {
          this.engineSelector.style.top = "".concat(-(offset + 1), "px");
        }
      }
      this.list.style.top = "".concat(nt, "px");
      this.list.style.width = "";
      this.list.style[anchor] = "".concat(nl, "px");
      if (this.engineName) {
        this.selectEngine(this.engineName);
        this.engineSelector.style.display = "";
      }
      this.list.style.display = "block";
      if (this.list.offsetWidth < textBoxWidth) {
        this.list.style.width = "".concat(textBoxWidth, "px");
        return;
      }
      const scroll = scroll_offset("Left");
      const view_w = viewport("Width");
      let w = this.list.offsetWidth;
      const l_pos = position(this.list);
      let left = l_pos.x;
      let right = left + w;
      if (left < scroll || right > scroll + view_w) {
        if (w > view_w) {
          w = view_w;
          this.list.style.width = "".concat(w, "px");
          if (is_rtl) {
            left = right - w;
          } else {
            right = left + w;
          }
        }
        let relative_offset = 0;
        if (left < scroll) {
          relative_offset = scroll - left;
        } else if (right > scroll + view_w) {
          relative_offset = -(right - scroll - view_w);
        }
        if (is_rtl) {
          relative_offset = -relative_offset;
        }
        if (relative_offset) {
          this.list.style[anchor] = "".concat(nl + relative_offset, "px");
        }
      }
    }
    autoComplete(newVal, actVal, normalizedActVal, key, dontModify) {
      if (newVal === actVal) {
        return true;
      }
      if (dontModify || this.ime || !this.canSelect()) {
        return false;
      }
      if (newVal.indexOf(actVal)) {
        if (normalizedActVal && newVal.indexOf(normalizedActVal) === 0) {
          if (this.lastRealInput === actVal) {
            this.lastRealInput = normalizedActVal;
          }
          actVal = normalizedActVal;
        } else {
          return false;
        }
      }
      this.text.focus();
      this.text.value = newVal + key;
      this.setSelection(actVal.length, newVal.length);
      return true;
    }
    canSelect() {
      return this.text.setSelectionRange || this.text.createTextRange || this.text.selectionStart !== void 0 && this.text.selectionEnd !== void 0;
    }
    setSelection(from, to) {
      if (!this.text.value) {
        return;
      }
      if (this.text.setSelectionRange) {
        this.text.setSelectionRange(from, to);
      } else if (this.text.selectionStart !== void 0) {
        if (from > this.text.selectionStart) {
          this.text.selectionEnd = to;
          this.text.selectionStart = from;
        } else {
          this.text.selectionStart = from;
          this.text.selectionEnd = to;
        }
      } else if (this.text.createTextRange) {
        const new_selection = this.text.createTextRange();
        new_selection.move("character", from);
        new_selection.moveEnd("character", to - from);
        new_selection.select();
      }
    }
    getSelection() {
      let from = 0;
      let to = 0;
      if (!this.text.value) {
      } else if (this.text.selectionStart !== void 0) {
        from = this.text.selectionStart;
        to = this.text.selectionEnd;
      } else if (document.selection && document.selection.createRange) {
        const rng = document.selection.createRange().duplicate();
        if (rng.parentNode() === this.text) {
          try {
            const textRng = this.text.createTextRange();
            textRng.move("character", 0);
            textRng.setEndPoint("EndToEnd", rng);
            to = textRng.text.length;
            textRng.setEndPoint("EndToStart", rng);
            from = textRng.text.length;
          } catch {
            from = this.text.value.length;
            to = from;
          }
        }
      }
      return {
        start: from,
        end: to
      };
    }
    saveView() {
      this.lastSelection = this.getSelection();
    }
    processKey(event) {
      let dir = 0;
      switch (this.lastKey) {
        case UP:
          dir = -1;
          break;
        case DOWN:
          dir = 1;
          break;
        case PGUP:
          dir = -HC.listSize;
          break;
        case PGDOWN:
          dir = HC.listSize;
          break;
        case ESC:
          return evtKill(event);
      }
      if (dir) {
        if (this.list.style.display !== "none") {
          this.highlightSuggestion(dir);
          return evtKill(event);
        } else if (this.keyCount <= 1 && (!this.callbackObj || this.callbackObj.callsMade === this.callbackObj.nofCalls)) {
          this.textchange();
        }
      }
      return true;
    }
    highlightSuggestion(dir) {
      if (noSuggestions || !this.list || this.list.style.display === "none") {
        return false;
      }
      const curr = this.list.selectedIndex;
      let tgt = -1;
      if (dir === 0) {
        if (curr < 0 || curr >= this.list.options.length) {
          return false;
        }
        tgt = curr;
      } else {
        tgt = curr < 0 ? 0 : curr + dir;
        tgt = tgt < 0 ? 0 : tgt;
        if (tgt >= this.list.options.length) {
          tgt = this.list.options.length - 1;
        }
      }
      if (tgt !== curr || dir === 0) {
        if (curr >= 0 && curr < this.list.options.length && dir !== 0) {
          this.list.options[curr].selected = false;
        }
        this.list.options[tgt].selected = true;
        const v = this.text.value.split("|");
        const key = v.length > 1 ? "|".concat(v[1]) : "";
        const completed = this.autoComplete(this.list.options[tgt].text, this.lastRealInput, null, key, false);
        if (!completed || this.list.options[tgt].text === this.lastRealInput) {
          this.text.value = this.list.options[tgt].text + key;
          if (this.canSelect()) {
            this.setSelection(this.list.options[tgt].text.length, this.list.options[tgt].text.length);
          }
        }
        this.lastInput = this.list.options[tgt].text;
        this.inputExists = true;
        if (this.icon) {
          this.icon.src = HC.existsYes;
        }
        this.state = CHANGE_PENDING;
      }
      return true;
    }
    resetKeySelection() {
      if (noSuggestions || !this.list || this.list.style.display === "none") {
        return false;
      }
      const curr = this.list.selectedIndex;
      if (curr >= 0 && curr < this.list.options.length) {
        this.list.options[curr].selected = false;
        const v = this.text.value.split("|");
        const key = v.length > 1 ? "|".concat(v[1]) : "";
        let result = v[0] !== this.lastInput;
        if (v[0] !== this.lastRealInput) {
          this.text.value = this.lastRealInput + key;
          result = true;
        }
        this.lastInput = this.lastRealInput;
        return result;
      }
      return false;
    }
  }
  const initialize = () => {
    const config = {};
    HC.dont_add_to_watchlist = window.hotcat_dont_add_to_watchlist === void 0 ? config.HotCatDontAddToWatchlist === void 0 ? HC.dont_add_to_watchlist : config.HotCatDontAddToWatchlist : !!window.hotcat_dont_add_to_watchlist;
    HC.no_autocommit = window.hotcat_no_autocommit === void 0 ? config.HotCatNoAutoCommit === void 0 ? conf.wgNamespaceNumber % 2 ? true : HC.no_autocommit : config.HotCatNoAutoCommit : !!window.hotcat_no_autocommit;
    HC.del_needs_diff = window.hotcat_del_needs_diff === void 0 ? config.HotCatDelNeedsDiff === void 0 ? HC.del_needs_diff : config.HotCatDelNeedsDiff : !!window.hotcat_del_needs_diff;
    HC.suggest_delay = window.hotcat_suggestion_delay || config.HotCatSuggestionDelay || HC.suggest_delay;
    HC.editbox_width = window.hotcat_editbox_width || config.HotCatEditBoxWidth || HC.editbox_width;
    HC.suggestions = window.hotcat_suggestions || config.HotCatSuggestions || HC.suggestions;
    if (typeof HC.suggestions !== "string" || !suggestionConfigs[HC.suggestions]) {
      HC.suggestions = "combined";
    }
    HC.fixed_search = window.hotcat_suggestions_fixed === void 0 ? config.HotCatFixedSuggestions === void 0 ? HC.fixed_search : config.HotCatFixedSuggestions : !!window.hotcat_suggestions_fixed;
    HC.single_minor = window.hotcat_single_changes_are_minor === void 0 ? config.HotCatMinorSingleChanges === void 0 ? HC.single_minor : config.HotCatMinorSingleChanges : !!window.hotcat_single_changes_are_minor;
    HC.bg_changed = window.hotcat_changed_background || config.HotCatChangedBackground || HC.bg_changed;
    HC.use_up_down = window.hotcat_use_category_links === void 0 ? config.HotCatUseCategoryLinks === void 0 ? HC.use_up_down : config.HotCatUseCategoryLinks : !!window.hotcat_use_category_links;
    HC.listSize = window.hotcat_list_size || config.HotCatListSize || HC.listSize;
    HC.changeTag = config.HotCatChangeTag || "";
    if (HC.changeTag) {
      const eForm = document.editform;
      const catRegExp = new RegExp("^\\[\\[(".concat(HC.category_regexp, "):"));
      let oldTxt;
      const isMinorChange = () => {
        let newTxt = eForm.wpTextbox1;
        if (!newTxt) {
          return;
        }
        newTxt = newTxt.value;
        const oldLines = oldTxt.match(/^.*$/gm);
        const newLines = newTxt.match(/^.*$/gm);
        let cArr;
        const except = (aArr, bArr) => {
          const result = [];
          let lArr;
          let sArr;
          if (aArr.length < bArr.length) {
            lArr = bArr;
            sArr = aArr;
          } else {
            lArr = aArr;
            sArr = bArr;
          }
          var _iterator4 = _createForOfIteratorHelper(lArr), _step4;
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
              const item = _step4.value;
              const ind = sArr.indexOf(item);
              if (ind === -1) {
                result.push(item);
              } else {
                sArr.splice(ind, 1);
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
          return [...result, ...sArr];
        };
        cArr = except(oldLines, newLines);
        if (cArr.length > 0) {
          cArr = cArr.filter((c) => {
            c = c.trim();
            return c && !catRegExp.test(c);
          });
        }
        if (cArr.length === 0) {
          oldTxt = newTxt;
          return true;
        }
      };
      if (conf.wgAction === "submit" && conf.wgArticleId && eForm && eForm.wpSummary && document.querySelector("#wikiDiff")) {
        const sum = eForm.wpSummary;
        const sumA = eForm.wpAutoSummary;
        if (sum.value && sumA.value === HC.changeTag) {
          sumA.value = sumA.value.replace(HC.changeTag, "d41d8cd98f00b204e9800998ecf8427e");
          const $ct = $("<input>").attr({
            type: "hidden",
            name: "wpChangeTags"
          }).val(HC.changeTag);
          $(eForm).append($ct);
          oldTxt = eForm.wpTextbox1.value;
          const $body = $("body");
          $body.find("#wpSave").one("click", () => {
            if ($ct.val()) {
              sum.value = sum.value.replace(getMessage("messages-using") || getMessage("messages-prefix"), "");
            }
          });
          const removeChangeTag = () => {
            $(eForm.wpTextbox1).add(sum).one("input", () => {
              setTimeout(() => {
                if (isMinorChange()) {
                  removeChangeTag();
                } else {
                  $ct.val("");
                }
              }, 500);
            });
          };
          removeChangeTag();
        }
      }
    }
    HC.listSize = Number.parseInt(HC.listSize, 10);
    if (Number.isNaN(HC.listSize) || HC.listSize < 5) {
      HC.listSize = 5;
    }
    HC.listSize = Math.min(HC.listSize, 30);
    for (var _i6 = 0, _Object$entries = Object.entries(suggestionConfigs); _i6 < _Object$entries.length; _i6++) {
      const [key, suggestionConfig] = _Object$entries[_i6];
      try {
        if (key && getMessage("engine_names-".concat(key))) {
          suggestionConfig.name = getMessage("engine_names-".concat(key));
        }
      } catch {
        continue;
      }
    }
    is_rtl = hasClass(document.querySelector("body"), "rtl");
    if (!is_rtl) {
      if (document.defaultView && document.defaultView.getComputedStyle) {
        is_rtl = document.defaultView.getComputedStyle(document.querySelector("body"), null).getPropertyValue("direction");
      } else if ($("body")[0].currentStyle) {
        is_rtl = $("body")[0].currentStyle.direction;
      } else {
        is_rtl = $("body")[0].style.direction;
      }
      is_rtl = is_rtl === "rtl";
    }
  };
  const can_edit = () => {
    return document.querySelector("#ca-edit") !== null;
  };
  const closeForm = function() {
    for (var _i7 = 0, _editors6 = editors; _i7 < _editors6.length; _i7++) {
      const edit = _editors6[_i7];
      if (edit.state === OPEN) {
        edit.cancel();
      } else if (edit.state === CHANGE_PENDING) {
        edit.sanitizeInput();
        const value = edit.text.value.split("|");
        let key = null;
        if (value.length > 1) {
          [, key] = value;
        }
        const v = value[0].replace(/_/g, " ").trim();
        if (v.length === 0) {
          edit.cancel();
        } else {
          edit.currentCategory = v;
          edit.currentKey = key;
          edit.currentExists = this.inputExists;
          edit.close();
        }
      }
    }
  };
  const setup_upload = () => {
    onUpload = true;
    let ip = document.querySelector("#mw-htmlform-description") || document.querySelector("#wpDestFile");
    if (!ip) {
      ip = document.querySelector("#wpDestFile");
      while (ip && ip.nodeName.toLowerCase() !== "table") {
        ip = ip.parentNode;
      }
    }
    if (!ip) {
      return;
    }
    const reupload = document.querySelector("#wpForReUpload");
    const destFile = document.querySelector("#wpDestFile");
    if (reupload && !!reupload.value || destFile && (destFile.disabled || destFile.readOnly)) {
      return;
    }
    const labelCell = make("td");
    const lineCell = make("td");
    catLine = make("div");
    catLine.className = "catlinks";
    catLine.id = "catlinks";
    catLine.style.textAlign = is_rtl ? "right" : "left";
    catLine.style.margin = "0";
    catLine.style.border = "none";
    lineCell.append(catLine);
    const label = null;
    if (label) {
      labelCell.id = "hotcatLabelTranslated";
      labelCell.append(label);
    } else {
      labelCell.id = "hotcatLabel";
      labelCell.append(make(getMessage("categories"), true));
    }
    labelCell.className = "mw-label";
    labelCell.style.textAlign = "right";
    labelCell.style.verticalAlign = "middle";
    const form = document.querySelector("#upload") || document.querySelector("#mw-upload-form");
    if (form) {
      const newRow = ip.insertRow(-1);
      newRow.append(labelCell);
      newRow.append(lineCell);
      form.addEventListener("submit", (oldSubmit, ...args) => {
        return (() => {
          let do_submit = true;
          if (oldSubmit) {
            if (typeof oldSubmit === "string") {
              do_submit = window.eval(oldSubmit);
            } else if (oldSubmit instanceof Function) {
              do_submit = oldSubmit.apply(form, [oldSubmit, ...args]);
            }
          }
          if (!do_submit) {
            return false;
          }
          closeForm();
          const eb = document.querySelector("#wpUploadDescription") || document.querySelector("#wpDesc");
          let addedOne = false;
          for (var _i8 = 0, _editors7 = editors; _i8 < _editors7.length; _i8++) {
            const editor = _editors7[_i8];
            const t = editor.currentCategory;
            if (!t) {
              continue;
            }
            const key = editor.currentKey;
            const new_cat = "[[".concat(HC.category_canonical, ":").concat(t).concat(key ? "|".concat(key) : "", "]]");
            const nowikiRegex = new RegExp("<no".concat("wiki>", "(\\s|\\S)*?</no", "wiki", ">"), "g");
            const _cleanedText = eb.value.replace(/<!--(\s|\S)*?-->/g, "").replace(nowikiRegex);
            if (!find_category(_cleanedText, t, true)) {
              eb.value += "\n".concat(new_cat);
              addedOne = true;
            }
          }
          if (addedOne) {
            const regex = new RegExp("{{$".concat("subst:").concat("unc}}"), "g");
            eb.value = eb.value.replace(regex, "");
          }
          return true;
        })(form.onsubmit);
      });
    }
  };
  let cleanedText = null;
  const isOnPage = ({
    firstChild
  }) => {
    if (firstChild.nodeType !== Node.ELEMENT_NODE) {
      return null;
    }
    let catTitle = title(firstChild.getAttribute("href"));
    if (!catTitle) {
      return null;
    }
    catTitle = catTitle.slice(catTitle.indexOf(":") + 1).replace(/_/g, " ");
    if (HC.blacklist && HC.blacklist.test(catTitle)) {
      return null;
    }
    const result = {
      title: catTitle,
      match: ["", "", ""]
    };
    if (pageText === null) {
      return result;
    }
    if (cleanedText === null) {
      const nowikiRegex = new RegExp("<no".concat("wiki>", "(\\s|\\S)*?</no", "wiki", ">"), "g");
      cleanedText = pageText.replace(/<!--(\s|\S)*?-->/g, "").replace(nowikiRegex, "");
    }
    result.match = find_category(cleanedText, catTitle, true);
    return result;
  };
  let initialized = false;
  let setupTimeout = null;
  const findByClass = (scope, tag, className) => {
    const result = $(scope).find("".concat(tag, ".").concat(className));
    return result && result.length > 0 ? result[0] : null;
  };
  const setup = (additionalWork) => {
    if (initialized) {
      return;
    }
    initialized = true;
    if (setupTimeout) {
      window.clearTimeout(setupTimeout);
      setupTimeout = null;
    }
    catLine || (catLine = document.querySelector("#mw-normal-catlinks"));
    const hiddenCats = document.querySelector("#mw-hidden-catlinks");
    if (!catLine) {
      let footer = null;
      if (!hiddenCats) {
        footer = findByClass(document, "div", "printfooter");
        if (!footer) {
          return;
        }
      }
      catLine = make("div");
      catLine.id = "mw-normal-catlinks";
      catLine.style.textAlign = is_rtl ? "right" : "left";
      const label = make("a");
      label.href = conf.wgArticlePath.replace("$1", "Special:Categories");
      label.title = getMessage("categories");
      label.append(make(getMessage("categories"), true));
      catLine.append(label);
      catLine.append(make(":", true));
      let container = hiddenCats ? hiddenCats.parentNode : document.querySelector("#catlinks");
      if (!container) {
        container = make("div");
        container.id = "catlinks";
        footer.parentNode.insertBefore(container, footer.nextSibling);
      }
      container.className = "catlinks noprint";
      container.style.display = "";
      if (hiddenCats) {
        hiddenCats.before(catLine);
      } else {
        container.append(catLine);
      }
    }
    if (is_rtl) {
      catLine.dir = "rtl";
    }
    const createEditors = (line, is_hidden) => {
      let i;
      let cats = line.querySelectorAll("li");
      if (cats.length > 0) {
        newDOM = true;
        line = cats[0].parentNode;
      } else {
        cats = line.querySelectorAll("span");
      }
      const copyCats = Array.from({
        length: cats.length
      });
      for (i = 0; i < cats.length; i++) {
        copyCats[i] = cats[i];
      }
      for (i = 0; i < copyCats.length; i++) {
        const test = isOnPage(copyCats[i]);
        if (test !== null && test.match !== null && line) {
          new CategoryEditor(line, copyCats[i], test.title, test.match[2], is_hidden);
        }
      }
      return copyCats.length > 0 ? copyCats.at(-1) : null;
    };
    const lastSpan = createEditors(catLine, false);
    new CategoryEditor(newDOM ? catLine.querySelectorAll("ul")[0] : catLine, null, null, lastSpan !== null, false);
    if (!onUpload) {
      if (pageText !== null && hiddenCats) {
        if (is_rtl) {
          hiddenCats.dir = "rtl";
        }
        createEditors(hiddenCats, true);
      }
      const enableMulti = make("span");
      enableMulti.className = "noprint";
      if (is_rtl) {
        enableMulti.dir = "rtl";
      }
      catLine.insertBefore(enableMulti, catLine.firstChild.nextSibling);
      enableMulti.append(make(" ", true));
      multiSpan = make("span");
      enableMulti.append(multiSpan);
      multiSpan.innerHTML = "(<a>".concat(HC.addmulti, "</a>)");
      const [link] = multiSpan.querySelectorAll("a");
      link.addEventListener("click", (event) => {
        setMultiInput();
        checkMultiInput();
        return evtKill(event);
      });
      link.title = getMessage("multi_tooltip");
      link.style.cursor = "pointer";
    }
    cleanedText = null;
    if (additionalWork instanceof Function) {
      additionalWork();
    }
    mw.hook("hotcat.ready").fire();
    $("body").trigger("hotcatSetupCompleted");
  };
  const createCommitForm = () => {
    if (commitForm) {
      return;
    }
    const formContainer = make("div");
    formContainer.style.display = "none";
    document.querySelector("body").append(formContainer);
    formContainer.innerHTML = '<form id="hotcatCommitForm" method="post" enctype="multipart/form-data" action="'.concat(conf.wgScript, "?title=").concat(encodeURIComponent(conf.wgPageName), '&action=submit"><input type="hidden" name="wpTextbox1">', '<input type="hidden" name="model" value="'.concat(conf.wgPageContentModel, '">'), '<input type="hidden" name="format" value="text/x-wiki"><input type="hidden" name="wpSummary" value=""><input type="checkbox" name="wpMinoredit" value="1"><input type="checkbox" name="wpWatchthis" value="1"><input type="hidden" name="wpAutoSummary" value="d41d8cd98f00b204e9800998ecf8427e"><input type="hidden" name="wpEdittime"><input type="hidden" name="wpStarttime"><input type="hidden" name="wpDiff" value="wpDiff"><input type="hidden" name="oldid" value="0"><input type="submit" name="hcCommit" value="hcCommit"><input type="hidden" name="wpEditToken"><input type="hidden" name="wpUltimateParam" value="1"><input type="hidden" name="wpChangeTags"><input type="hidden" value="ℳ𝒲♥𝓊𝓃𝒾𝒸ℴ𝒹ℯ" name="wpUnicodeCheck"></form>');
    commitForm = document.querySelector("#hotcatCommitForm");
  };
  const getPage = () => {
    if (conf.wgArticleId) {
      const params = {
        action: "query",
        format: "json",
        formatversion: "2",
        rawcontinue: "",
        titles: conf.wgPageName,
        prop: ["info", "revisions"],
        rvprop: ["content", "timestamp", "ids"],
        rvlimit: "1",
        rvstartid: conf.wgCurRevisionId,
        rvslots: "*",
        meta: ["siteinfo"]
      };
      HC.start = (data) => {
        setPage(data);
        setup(createCommitForm);
      };
      api.get(params).then((data) => {
        HC.start(data);
      });
      setupTimeout = setTimeout(() => {
        setup(createCommitForm);
      }, 4e3);
    } else {
      if (conf.wgNamespaceNumber === 2) {
        return;
      }
      pageText = "";
      pageTime = null;
      setup(createCommitForm);
    }
  };
  const setState = (state) => {
    const cats = state.split("\n");
    if (cats.length === 0) {
      return null;
    }
    if (initialized && editors.length === 1 && editors[0].isAddCategory) {
      const newSpans = [];
      const before = editors.length === 1 ? editors[0].span : null;
      let i;
      for (i = 0; i < cats.length; i++) {
        if (cats[i].length === 0) {
          continue;
        }
        let cat = cats[i].split("|");
        const key = cat.length > 1 ? cat[1] : null;
        [cat] = cat;
        const link = make("a");
        link.href = wikiPagePath("".concat(HC.category_canonical, ":").concat(cat));
        link.append(make(cat, true));
        link.title = cat;
        const span = make("span");
        span.append(link);
        if (!i) {
          catLine.insertBefore(make(" ", true), before);
        }
        before.before(span);
        if (before && i + 1 < cats.length) {
          parent.insertBefore(make(" | ", true), before);
        }
        newSpans.push({
          element: span,
          title: cat,
          key
        });
      }
      if (before) {
        before.parentNode.insertBefore(make(" | ", true), before);
      }
      for (i = 0; i < newSpans.length; i++) {
        new CategoryEditor(catLine, newSpans[i].element, newSpans[i].title, newSpans[i].key);
      }
    }
    return null;
  };
  const getState = () => {
    let result = null;
    for (var _i9 = 0, _editors8 = editors; _i9 < _editors8.length; _i9++) {
      const editor = _editors8[_i9];
      let text = editor.currentCategory;
      const key = editor.currentKey;
      if (text && text.length > 0) {
        if (key !== null) {
          text += "|".concat(key);
        }
        if (result === null) {
          result = text;
        } else {
          result += "\n".concat(text);
        }
      }
    }
    return result;
  };
  const really_run = () => {
    initialize();
    if (!HC.upload_disabled && conf.wgNamespaceNumber === -1 && conf.wgCanonicalSpecialPageName === "Upload" && conf.wgUserName) {
      setup_upload();
      setup(() => {
        if (window.UploadForm && UploadForm.previous_hotcat_state) {
          UploadForm.previous_hotcat_state = setState(UploadForm.previous_hotcat_state);
        }
      });
    } else {
      if (!conf.wgIsArticle || conf.wgAction !== "view" || param("diff") !== null || param("oldid") !== null || !can_edit() || HC.disable()) {
        return;
      }
      getPage();
    }
  };
  const run = () => {
    if (HC.started) {
      return;
    }
    HC.started = true;
    really_run();
  };
  window.hotcat_get_state = () => {
    return getState();
  };
  window.hotcat_set_state = (state) => {
    return setState(state);
  };
  window.hotcat_close_form = () => {
    closeForm();
  };
  HC.runWhenReady = (callback) => {
    mw.hook("hotcat.ready").add(callback);
  };
  mw.config.set("disableAJAXCategories", true);
  if (conf.wgCanonicalSpecialPageName !== "Upload") {
    mw.hook("postEdit").add(() => {
      if (document.querySelector("#catlinks .hotcatlink")) {
        return;
      }
      catLine = null;
      editors = [];
      initialized = false;
      HC.started = false;
      run();
    });
  }
  $(run);
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mYWlscy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Rlc2NyaXB0b3JzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1jYWxsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NsYXNzb2YtcmF3LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtY2FsbGFibGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nZXQtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXN5bWJvbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RyeS10by1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWNhbGxhYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1Zy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1uYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9tYXRoLXRydW5jLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtYXJyYXkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1zZXQtbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9lcy1ub3QtZXhjZWVkLXNhZmUtaW50ZWdlci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5wdXNoLmpzIiwgInNyYy9Ib3RDYXQvbW9kdWxlcy9jaGVjay5qcyIsICJzcmMvSG90Q2F0L21vZHVsZXMvZ2V0TWVzc2FnZS50cyIsICJzcmMvSG90Q2F0L21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0hvdENhdC9tb2R1bGVzL21lc3NhZ2VzLnRzIiwgInNyYy9Ib3RDYXQvSG90Q2F0LmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIndXNlIHN0cmljdCc7XG52YXIgY2hlY2sgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICYmIGl0Lk1hdGggPT09IE1hdGggJiYgaXQ7XG59O1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxubW9kdWxlLmV4cG9ydHMgPVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZ2xvYmFsLXRoaXMgLS0gc2FmZVxuICBjaGVjayh0eXBlb2YgZ2xvYmFsVGhpcyA9PSAnb2JqZWN0JyAmJiBnbG9iYWxUaGlzKSB8fFxuICBjaGVjayh0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdykgfHxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAtLSBzYWZlXG4gIGNoZWNrKHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYpIHx8XG4gIGNoZWNrKHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsKSB8fFxuICBjaGVjayh0eXBlb2YgdGhpcyA9PSAnb2JqZWN0JyAmJiB0aGlzKSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmMgLS0gZmFsbGJhY2tcbiAgKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pKCkgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBEZXRlY3QgSUU4J3MgaW5jb21wbGV0ZSBkZWZpbmVQcm9wZXJ0eSBpbXBsZW1lbnRhdGlvblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sIDEsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pWzFdICE9PSA3O1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWZ1bmN0aW9uLXByb3RvdHlwZS1iaW5kIC0tIHNhZmVcbiAgdmFyIHRlc3QgPSAoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9KS5iaW5kKCk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gdHlwZW9mIHRlc3QgIT0gJ2Z1bmN0aW9uJyB8fCB0ZXN0Lmhhc093blByb3BlcnR5KCdwcm90b3R5cGUnKTtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgY2FsbCA9IEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9CSU5EID8gY2FsbC5iaW5kKGNhbGwpIDogZnVuY3Rpb24gKCkge1xuICByZXR1cm4gY2FsbC5hcHBseShjYWxsLCBhcmd1bWVudHMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gTmFzaG9ybiB+IEpESzggYnVnXG52YXIgTkFTSE9STl9CVUcgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgJiYgISRwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHsgMTogMiB9LCAxKTtcblxuLy8gYE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGVgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QucHJvdG90eXBlLnByb3BlcnR5aXNlbnVtZXJhYmxlXG5leHBvcnRzLmYgPSBOQVNIT1JOX0JVRyA/IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKFYpIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGhpcywgVik7XG4gIHJldHVybiAhIWRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci5lbnVtZXJhYmxlO1xufSA6ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgY2FsbCA9IEZ1bmN0aW9uUHJvdG90eXBlLmNhbGw7XG52YXIgdW5jdXJyeVRoaXNXaXRoQmluZCA9IE5BVElWRV9CSU5EICYmIEZ1bmN0aW9uUHJvdG90eXBlLmJpbmQuYmluZChjYWxsLCBjYWxsKTtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfQklORCA/IHVuY3VycnlUaGlzV2l0aEJpbmQgOiBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY2FsbC5hcHBseShmbiwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG52YXIgdG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyh7fS50b1N0cmluZyk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBzdHJpbmdTbGljZSh0b1N0cmluZyhpdCksIDgsIC0xKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcbnZhciBzcGxpdCA9IHVuY3VycnlUaGlzKCcnLnNwbGl0KTtcblxuLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3Ncbm1vZHVsZS5leHBvcnRzID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyB0aHJvd3MgYW4gZXJyb3IgaW4gcmhpbm8sIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9yaGluby9pc3N1ZXMvMzQ2XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gISRPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKTtcbn0pID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjbGFzc29mKGl0KSA9PT0gJ1N0cmluZycgPyBzcGxpdChpdCwgJycpIDogJE9iamVjdChpdCk7XG59IDogJE9iamVjdDtcbiIsICIndXNlIHN0cmljdCc7XG4vLyB3ZSBjYW4ndCB1c2UganVzdCBgaXQgPT0gbnVsbGAgc2luY2Ugb2YgYGRvY3VtZW50LmFsbGAgc3BlY2lhbCBjYXNlXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLUlzSFRNTEREQS1pbnRlcm5hbC1zbG90LWFlY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID09PSBudWxsIHx8IGl0ID09PSB1bmRlZmluZWQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYFJlcXVpcmVPYmplY3RDb2VyY2libGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZXF1aXJlb2JqZWN0Y29lcmNpYmxlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXNOdWxsT3JVbmRlZmluZWQoaXQpKSB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJbmRleGVkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoaXQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1Jc0hUTUxEREEtaW50ZXJuYWwtc2xvdFxudmFyIGRvY3VtZW50QWxsID0gdHlwZW9mIGRvY3VtZW50ID09ICdvYmplY3QnICYmIGRvY3VtZW50LmFsbDtcblxuLy8gYElzQ2FsbGFibGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc2NhbGxhYmxlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9uby10eXBlb2YtdW5kZWZpbmVkIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBkb2N1bWVudEFsbCA9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudEFsbCAhPT0gdW5kZWZpbmVkID8gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJyB8fCBhcmd1bWVudCA9PT0gZG9jdW1lbnRBbGw7XG59IDogZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogaXNDYWxsYWJsZShpdCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgYUZ1bmN0aW9uID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBpc0NhbGxhYmxlKGFyZ3VtZW50KSA/IGFyZ3VtZW50IDogdW5kZWZpbmVkO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZXNwYWNlLCBtZXRob2QpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPCAyID8gYUZ1bmN0aW9uKGdsb2JhbFtuYW1lc3BhY2VdKSA6IGdsb2JhbFtuYW1lc3BhY2VdICYmIGdsb2JhbFtuYW1lc3BhY2VdW21ldGhvZF07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB1bmN1cnJ5VGhpcyh7fS5pc1Byb3RvdHlwZU9mKTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBuYXZpZ2F0b3IgIT0gJ3VuZGVmaW5lZCcgJiYgU3RyaW5nKG5hdmlnYXRvci51c2VyQWdlbnQpIHx8ICcnO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50Jyk7XG5cbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgRGVubyA9IGdsb2JhbC5EZW5vO1xudmFyIHZlcnNpb25zID0gcHJvY2VzcyAmJiBwcm9jZXNzLnZlcnNpb25zIHx8IERlbm8gJiYgRGVuby52ZXJzaW9uO1xudmFyIHY4ID0gdmVyc2lvbnMgJiYgdmVyc2lvbnMudjg7XG52YXIgbWF0Y2gsIHZlcnNpb247XG5cbmlmICh2OCkge1xuICBtYXRjaCA9IHY4LnNwbGl0KCcuJyk7XG4gIC8vIGluIG9sZCBDaHJvbWUsIHZlcnNpb25zIG9mIFY4IGlzbid0IFY4ID0gQ2hyb21lIC8gMTBcbiAgLy8gYnV0IHRoZWlyIGNvcnJlY3QgdmVyc2lvbnMgYXJlIG5vdCBpbnRlcmVzdGluZyBmb3IgdXNcbiAgdmVyc2lvbiA9IG1hdGNoWzBdID4gMCAmJiBtYXRjaFswXSA8IDQgPyAxIDogKyhtYXRjaFswXSArIG1hdGNoWzFdKTtcbn1cblxuLy8gQnJvd3NlckZTIE5vZGVKUyBgcHJvY2Vzc2AgcG9seWZpbGwgaW5jb3JyZWN0bHkgc2V0IGAudjhgIHRvIGAwLjBgXG4vLyBzbyBjaGVjayBgdXNlckFnZW50YCBldmVuIGlmIGAudjhgIGV4aXN0cywgYnV0IDBcbmlmICghdmVyc2lvbiAmJiB1c2VyQWdlbnQpIHtcbiAgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2goL0VkZ2VcXC8oXFxkKykvKTtcbiAgaWYgKCFtYXRjaCB8fCBtYXRjaFsxXSA+PSA3NCkge1xuICAgIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9DaHJvbWVcXC8oXFxkKykvKTtcbiAgICBpZiAobWF0Y2gpIHZlcnNpb24gPSArbWF0Y2hbMV07XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2ZXJzaW9uO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLXN5bWJvbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZyAqL1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24nKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcblxudmFyICRTdHJpbmcgPSBnbG9iYWwuU3RyaW5nO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5c3ltYm9scyAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xubW9kdWxlLmV4cG9ydHMgPSAhIU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN5bWJvbCA9IFN5bWJvbCgnc3ltYm9sIGRldGVjdGlvbicpO1xuICAvLyBDaHJvbWUgMzggU3ltYm9sIGhhcyBpbmNvcnJlY3QgdG9TdHJpbmcgY29udmVyc2lvblxuICAvLyBgZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzYCBwb2x5ZmlsbCBzeW1ib2xzIGNvbnZlcnRlZCB0byBvYmplY3QgYXJlIG5vdCBTeW1ib2wgaW5zdGFuY2VzXG4gIC8vIG5iOiBEbyBub3QgY2FsbCBgU3RyaW5nYCBkaXJlY3RseSB0byBhdm9pZCB0aGlzIGJlaW5nIG9wdGltaXplZCBvdXQgdG8gYHN5bWJvbCsnJ2Agd2hpY2ggd2lsbCxcbiAgLy8gb2YgY291cnNlLCBmYWlsLlxuICByZXR1cm4gISRTdHJpbmcoc3ltYm9sKSB8fCAhKE9iamVjdChzeW1ib2wpIGluc3RhbmNlb2YgU3ltYm9sKSB8fFxuICAgIC8vIENocm9tZSAzOC00MCBzeW1ib2xzIGFyZSBub3QgaW5oZXJpdGVkIGZyb20gRE9NIGNvbGxlY3Rpb25zIHByb3RvdHlwZXMgdG8gaW5zdGFuY2VzXG4gICAgIVN5bWJvbC5zaGFtICYmIFY4X1ZFUlNJT04gJiYgVjhfVkVSU0lPTiA8IDQxO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tc3ltYm9sIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zeW1ib2wtY29uc3RydWN0b3ItZGV0ZWN0aW9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX1NZTUJPTFxuICAmJiAhU3ltYm9sLnNoYW1cbiAgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mJyk7XG52YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbm1vZHVsZS5leHBvcnRzID0gVVNFX1NZTUJPTF9BU19VSUQgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyICRTeW1ib2wgPSBnZXRCdWlsdEluKCdTeW1ib2wnKTtcbiAgcmV0dXJuIGlzQ2FsbGFibGUoJFN5bWJvbCkgJiYgaXNQcm90b3R5cGVPZigkU3ltYm9sLnByb3RvdHlwZSwgJE9iamVjdChpdCkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJFN0cmluZyA9IFN0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gJFN0cmluZyhhcmd1bWVudCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuICdPYmplY3QnO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgdHJ5VG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdHJ5LXRvLXN0cmluZycpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYEFzc2VydDogSXNDYWxsYWJsZShhcmd1bWVudCkgaXMgdHJ1ZWBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIGlmIChpc0NhbGxhYmxlKGFyZ3VtZW50KSkgcmV0dXJuIGFyZ3VtZW50O1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcih0cnlUb1N0cmluZyhhcmd1bWVudCkgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkJyk7XG5cbi8vIGBHZXRNZXRob2RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1nZXRtZXRob2Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFYsIFApIHtcbiAgdmFyIGZ1bmMgPSBWW1BdO1xuICByZXR1cm4gaXNOdWxsT3JVbmRlZmluZWQoZnVuYykgPyB1bmRlZmluZWQgOiBhQ2FsbGFibGUoZnVuYyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgT3JkaW5hcnlUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9yZGluYXJ5dG9wcmltaXRpdmVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBwcmVmKSB7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAocHJlZiA9PT0gJ3N0cmluZycgJiYgaXNDYWxsYWJsZShmbiA9IGlucHV0LnRvU3RyaW5nKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKGlzQ2FsbGFibGUoZm4gPSBpbnB1dC52YWx1ZU9mKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHByZWYgIT09ICdzdHJpbmcnICYmIGlzQ2FsbGFibGUoZm4gPSBpbnB1dC50b1N0cmluZykgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHRyeSB7XG4gICAgZGVmaW5lUHJvcGVydHkoZ2xvYmFsLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGdsb2JhbFtrZXldID0gdmFsdWU7XG4gIH0gcmV0dXJuIHZhbHVlO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcblxudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgZGVmaW5lR2xvYmFsUHJvcGVydHkoU0hBUkVELCB7fSk7XG5cbm1vZHVsZS5leHBvcnRzID0gc3RvcmU7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xudmFyIHN0b3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHt9KTtcbn0pKCd2ZXJzaW9ucycsIFtdKS5wdXNoKHtcbiAgdmVyc2lvbjogJzMuMzUuMScsXG4gIG1vZGU6IElTX1BVUkUgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAxNC0yMDI0IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJyxcbiAgbGljZW5zZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2Jsb2IvdjMuMzUuMS9MSUNFTlNFJyxcbiAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMnXG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbi8vIGBUb09iamVjdGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvb2JqZWN0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gJE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcblxudmFyIGhhc093blByb3BlcnR5ID0gdW5jdXJyeVRoaXMoe30uaGFzT3duUHJvcGVydHkpO1xuXG4vLyBgSGFzT3duUHJvcGVydHlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1oYXNvd25wcm9wZXJ0eVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1oYXNvd24gLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuaGFzT3duIHx8IGZ1bmN0aW9uIGhhc093bihpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eSh0b09iamVjdChpdCksIGtleSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxudmFyIGlkID0gMDtcbnZhciBwb3N0Zml4ID0gTWF0aC5yYW5kb20oKTtcbnZhciB0b1N0cmluZyA9IHVuY3VycnlUaGlzKDEuMC50b1N0cmluZyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnICsgKGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXkpICsgJylfJyArIHRvU3RyaW5nKCsraWQgKyBwb3N0Zml4LCAzNik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3ltYm9sLWNvbnN0cnVjdG9yLWRldGVjdGlvbicpO1xudmFyIFVTRV9TWU1CT0xfQVNfVUlEID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkJyk7XG5cbnZhciBTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyIFdlbGxLbm93blN5bWJvbHNTdG9yZSA9IHNoYXJlZCgnd2tzJyk7XG52YXIgY3JlYXRlV2VsbEtub3duU3ltYm9sID0gVVNFX1NZTUJPTF9BU19VSUQgPyBTeW1ib2xbJ2ZvciddIHx8IFN5bWJvbCA6IFN5bWJvbCAmJiBTeW1ib2wud2l0aG91dFNldHRlciB8fCB1aWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgaWYgKCFoYXNPd24oV2VsbEtub3duU3ltYm9sc1N0b3JlLCBuYW1lKSkge1xuICAgIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXSA9IE5BVElWRV9TWU1CT0wgJiYgaGFzT3duKFN5bWJvbCwgbmFtZSlcbiAgICAgID8gU3ltYm9sW25hbWVdXG4gICAgICA6IGNyZWF0ZVdlbGxLbm93blN5bWJvbCgnU3ltYm9sLicgKyBuYW1lKTtcbiAgfSByZXR1cm4gV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciBvcmRpbmFyeVRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZScpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbnZhciBUT19QUklNSVRJVkUgPSB3ZWxsS25vd25TeW1ib2woJ3RvUHJpbWl0aXZlJyk7XG5cbi8vIGBUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJpbWl0aXZlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnB1dCwgcHJlZikge1xuICBpZiAoIWlzT2JqZWN0KGlucHV0KSB8fCBpc1N5bWJvbChpbnB1dCkpIHJldHVybiBpbnB1dDtcbiAgdmFyIGV4b3RpY1RvUHJpbSA9IGdldE1ldGhvZChpbnB1dCwgVE9fUFJJTUlUSVZFKTtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKGV4b3RpY1RvUHJpbSkge1xuICAgIGlmIChwcmVmID09PSB1bmRlZmluZWQpIHByZWYgPSAnZGVmYXVsdCc7XG4gICAgcmVzdWx0ID0gY2FsbChleG90aWNUb1ByaW0sIGlucHV0LCBwcmVmKTtcbiAgICBpZiAoIWlzT2JqZWN0KHJlc3VsdCkgfHwgaXNTeW1ib2wocmVzdWx0KSkgcmV0dXJuIHJlc3VsdDtcbiAgICB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbiAgfVxuICBpZiAocHJlZiA9PT0gdW5kZWZpbmVkKSBwcmVmID0gJ251bWJlcic7XG4gIHJldHVybiBvcmRpbmFyeVRvUHJpbWl0aXZlKGlucHV0LCBwcmVmKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xudmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXN5bWJvbCcpO1xuXG4vLyBgVG9Qcm9wZXJ0eUtleWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJvcGVydHlrZXlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBrZXkgPSB0b1ByaW1pdGl2ZShhcmd1bWVudCwgJ3N0cmluZycpO1xuICByZXR1cm4gaXNTeW1ib2woa2V5KSA/IGtleSA6IGtleSArICcnO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgZG9jdW1lbnQgPSBnbG9iYWwuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBFWElTVFMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBFWElTVFMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcblxuLy8gVGhhbmtzIHRvIElFOCBmb3IgaXRzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3JlYXRlRWxlbWVudCgnZGl2JyksICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfVxuICB9KS5hICE9PSA3O1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0luZGV4ZWRPYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhc093bihPLCBQKSkgcmV0dXJuIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcighY2FsbChwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZS5mLCBPLCBQKSwgT1tQXSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbi8vIFY4IH4gQ2hyb21lIDM2LVxuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzMzNFxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0sICdwcm90b3R5cGUnLCB7XG4gICAgdmFsdWU6IDQyLFxuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KS5wcm90b3R5cGUgIT09IDQyO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgJFN0cmluZyA9IFN0cmluZztcbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgQXNzZXJ0OiBUeXBlKGFyZ3VtZW50KSBpcyBPYmplY3RgXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoaXNPYmplY3QoYXJndW1lbnQpKSByZXR1cm4gYXJndW1lbnQ7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKCRTdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgYW4gb2JqZWN0Jyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG52YXIgVjhfUFJPVE9UWVBFX0RFRklORV9CVUcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdjgtcHJvdG90eXBlLWRlZmluZS1idWcnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleScpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBFTlVNRVJBQkxFID0gJ2VudW1lcmFibGUnO1xudmFyIENPTkZJR1VSQUJMRSA9ICdjb25maWd1cmFibGUnO1xudmFyIFdSSVRBQkxFID0gJ3dyaXRhYmxlJztcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0eWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0eVxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgPyBWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA/IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKHR5cGVvZiBPID09PSAnZnVuY3Rpb24nICYmIFAgPT09ICdwcm90b3R5cGUnICYmICd2YWx1ZScgaW4gQXR0cmlidXRlcyAmJiBXUklUQUJMRSBpbiBBdHRyaWJ1dGVzICYmICFBdHRyaWJ1dGVzW1dSSVRBQkxFXSkge1xuICAgIHZhciBjdXJyZW50ID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKTtcbiAgICBpZiAoY3VycmVudCAmJiBjdXJyZW50W1dSSVRBQkxFXSkge1xuICAgICAgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gICAgICBBdHRyaWJ1dGVzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IENPTkZJR1VSQUJMRSBpbiBBdHRyaWJ1dGVzID8gQXR0cmlidXRlc1tDT05GSUdVUkFCTEVdIDogY3VycmVudFtDT05GSUdVUkFCTEVdLFxuICAgICAgICBlbnVtZXJhYmxlOiBFTlVNRVJBQkxFIGluIEF0dHJpYnV0ZXMgPyBBdHRyaWJ1dGVzW0VOVU1FUkFCTEVdIDogY3VycmVudFtFTlVNRVJBQkxFXSxcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlXG4gICAgICB9O1xuICAgIH1cbiAgfSByZXR1cm4gJGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xufSA6ICRkZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiAkZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIGtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0RGVzY3JpcHRvciA9IERFU0NSSVBUT1JTICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbnZhciBFWElTVFMgPSBoYXNPd24oRnVuY3Rpb25Qcm90b3R5cGUsICduYW1lJyk7XG4vLyBhZGRpdGlvbmFsIHByb3RlY3Rpb24gZnJvbSBtaW5pZmllZCAvIG1hbmdsZWQgLyBkcm9wcGVkIGZ1bmN0aW9uIG5hbWVzXG52YXIgUFJPUEVSID0gRVhJU1RTICYmIChmdW5jdGlvbiBzb21ldGhpbmcoKSB7IC8qIGVtcHR5ICovIH0pLm5hbWUgPT09ICdzb21ldGhpbmcnO1xudmFyIENPTkZJR1VSQUJMRSA9IEVYSVNUUyAmJiAoIURFU0NSSVBUT1JTIHx8IChERVNDUklQVE9SUyAmJiBnZXREZXNjcmlwdG9yKEZ1bmN0aW9uUHJvdG90eXBlLCAnbmFtZScpLmNvbmZpZ3VyYWJsZSkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgRVhJU1RTOiBFWElTVFMsXG4gIFBST1BFUjogUFJPUEVSLFxuICBDT05GSUdVUkFCTEU6IENPTkZJR1VSQUJMRVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHN0b3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xuXG52YXIgZnVuY3Rpb25Ub1N0cmluZyA9IHVuY3VycnlUaGlzKEZ1bmN0aW9uLnRvU3RyaW5nKTtcblxuLy8gdGhpcyBoZWxwZXIgYnJva2VuIGluIGBjb3JlLWpzQDMuNC4xLTMuNC40YCwgc28gd2UgY2FuJ3QgdXNlIGBzaGFyZWRgIGhlbHBlclxuaWYgKCFpc0NhbGxhYmxlKHN0b3JlLmluc3BlY3RTb3VyY2UpKSB7XG4gIHN0b3JlLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb25Ub1N0cmluZyhpdCk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RvcmUuaW5zcGVjdFNvdXJjZTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIFdlYWtNYXAgPSBnbG9iYWwuV2Vha01hcDtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0NhbGxhYmxlKFdlYWtNYXApICYmIC9uYXRpdmUgY29kZS8udGVzdChTdHJpbmcoV2Vha01hcCkpO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xuXG52YXIga2V5cyA9IHNoYXJlZCgna2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIGtleXNba2V5XSB8fCAoa2V5c1trZXldID0gdWlkKGtleSkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfV0VBS19NQVAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2Vhay1tYXAtYmFzaWMtZGV0ZWN0aW9uJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcbnZhciBzaGFyZWRLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLWtleScpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcblxudmFyIE9CSkVDVF9BTFJFQURZX0lOSVRJQUxJWkVEID0gJ09iamVjdCBhbHJlYWR5IGluaXRpYWxpemVkJztcbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xudmFyIFdlYWtNYXAgPSBnbG9iYWwuV2Vha01hcDtcbnZhciBzZXQsIGdldCwgaGFzO1xuXG52YXIgZW5mb3JjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaGFzKGl0KSA/IGdldChpdCkgOiBzZXQoaXQsIHt9KTtcbn07XG5cbnZhciBnZXR0ZXJGb3IgPSBmdW5jdGlvbiAoVFlQRSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGl0KSB7XG4gICAgdmFyIHN0YXRlO1xuICAgIGlmICghaXNPYmplY3QoaXQpIHx8IChzdGF0ZSA9IGdldChpdCkpLnR5cGUgIT09IFRZUEUpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0luY29tcGF0aWJsZSByZWNlaXZlciwgJyArIFRZUEUgKyAnIHJlcXVpcmVkJyk7XG4gICAgfSByZXR1cm4gc3RhdGU7XG4gIH07XG59O1xuXG5pZiAoTkFUSVZFX1dFQUtfTUFQIHx8IHNoYXJlZC5zdGF0ZSkge1xuICB2YXIgc3RvcmUgPSBzaGFyZWQuc3RhdGUgfHwgKHNoYXJlZC5zdGF0ZSA9IG5ldyBXZWFrTWFwKCkpO1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1zZWxmLWFzc2lnbiAtLSBwcm90b3R5cGUgbWV0aG9kcyBwcm90ZWN0aW9uICovXG4gIHN0b3JlLmdldCA9IHN0b3JlLmdldDtcbiAgc3RvcmUuaGFzID0gc3RvcmUuaGFzO1xuICBzdG9yZS5zZXQgPSBzdG9yZS5zZXQ7XG4gIC8qIGVzbGludC1lbmFibGUgbm8tc2VsZi1hc3NpZ24gLS0gcHJvdG90eXBlIG1ldGhvZHMgcHJvdGVjdGlvbiAqL1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgaWYgKHN0b3JlLmhhcyhpdCkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIHN0b3JlLnNldChpdCwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHN0b3JlLmdldChpdCkgfHwge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBzdG9yZS5oYXMoaXQpO1xuICB9O1xufSBlbHNlIHtcbiAgdmFyIFNUQVRFID0gc2hhcmVkS2V5KCdzdGF0ZScpO1xuICBoaWRkZW5LZXlzW1NUQVRFXSA9IHRydWU7XG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICBpZiAoaGFzT3duKGl0LCBTVEFURSkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShpdCwgU1RBVEUsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBoYXNPd24oaXQsIFNUQVRFKSA/IGl0W1NUQVRFXSA6IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaGFzT3duKGl0LCBTVEFURSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldCxcbiAgZ2V0OiBnZXQsXG4gIGhhczogaGFzLFxuICBlbmZvcmNlOiBlbmZvcmNlLFxuICBnZXR0ZXJGb3I6IGdldHRlckZvclxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIENPTkZJR1VSQUJMRV9GVU5DVElPTl9OQU1FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLW5hbWUnKS5DT05GSUdVUkFCTEU7XG52YXIgaW5zcGVjdFNvdXJjZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnNwZWN0LXNvdXJjZScpO1xudmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUnKTtcblxudmFyIGVuZm9yY2VJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5lbmZvcmNlO1xudmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldDtcbnZhciAkU3RyaW5nID0gU3RyaW5nO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG52YXIgcmVwbGFjZSA9IHVuY3VycnlUaGlzKCcnLnJlcGxhY2UpO1xudmFyIGpvaW4gPSB1bmN1cnJ5VGhpcyhbXS5qb2luKTtcblxudmFyIENPTkZJR1VSQUJMRV9MRU5HVEggPSBERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHkoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9LCAnbGVuZ3RoJywgeyB2YWx1ZTogOCB9KS5sZW5ndGggIT09IDg7XG59KTtcblxudmFyIFRFTVBMQVRFID0gU3RyaW5nKFN0cmluZykuc3BsaXQoJ1N0cmluZycpO1xuXG52YXIgbWFrZUJ1aWx0SW4gPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSwgbmFtZSwgb3B0aW9ucykge1xuICBpZiAoc3RyaW5nU2xpY2UoJFN0cmluZyhuYW1lKSwgMCwgNykgPT09ICdTeW1ib2woJykge1xuICAgIG5hbWUgPSAnWycgKyByZXBsYWNlKCRTdHJpbmcobmFtZSksIC9eU3ltYm9sXFwoKFteKV0qKVxcKS4qJC8sICckMScpICsgJ10nO1xuICB9XG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZ2V0dGVyKSBuYW1lID0gJ2dldCAnICsgbmFtZTtcbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5zZXR0ZXIpIG5hbWUgPSAnc2V0ICcgKyBuYW1lO1xuICBpZiAoIWhhc093bih2YWx1ZSwgJ25hbWUnKSB8fCAoQ09ORklHVVJBQkxFX0ZVTkNUSU9OX05BTUUgJiYgdmFsdWUubmFtZSAhPT0gbmFtZSkpIHtcbiAgICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5KHZhbHVlLCAnbmFtZScsIHsgdmFsdWU6IG5hbWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KTtcbiAgICBlbHNlIHZhbHVlLm5hbWUgPSBuYW1lO1xuICB9XG4gIGlmIChDT05GSUdVUkFCTEVfTEVOR1RIICYmIG9wdGlvbnMgJiYgaGFzT3duKG9wdGlvbnMsICdhcml0eScpICYmIHZhbHVlLmxlbmd0aCAhPT0gb3B0aW9ucy5hcml0eSkge1xuICAgIGRlZmluZVByb3BlcnR5KHZhbHVlLCAnbGVuZ3RoJywgeyB2YWx1ZTogb3B0aW9ucy5hcml0eSB9KTtcbiAgfVxuICB0cnkge1xuICAgIGlmIChvcHRpb25zICYmIGhhc093bihvcHRpb25zLCAnY29uc3RydWN0b3InKSAmJiBvcHRpb25zLmNvbnN0cnVjdG9yKSB7XG4gICAgICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5KHZhbHVlLCAncHJvdG90eXBlJywgeyB3cml0YWJsZTogZmFsc2UgfSk7XG4gICAgLy8gaW4gVjggfiBDaHJvbWUgNTMsIHByb3RvdHlwZXMgb2Ygc29tZSBtZXRob2RzLCBsaWtlIGBBcnJheS5wcm90b3R5cGUudmFsdWVzYCwgYXJlIG5vbi13cml0YWJsZVxuICAgIH0gZWxzZSBpZiAodmFsdWUucHJvdG90eXBlKSB2YWx1ZS5wcm90b3R5cGUgPSB1bmRlZmluZWQ7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgdmFyIHN0YXRlID0gZW5mb3JjZUludGVybmFsU3RhdGUodmFsdWUpO1xuICBpZiAoIWhhc093bihzdGF0ZSwgJ3NvdXJjZScpKSB7XG4gICAgc3RhdGUuc291cmNlID0gam9pbihURU1QTEFURSwgdHlwZW9mIG5hbWUgPT0gJ3N0cmluZycgPyBuYW1lIDogJycpO1xuICB9IHJldHVybiB2YWx1ZTtcbn07XG5cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWV4dGVuZC1uYXRpdmUgLS0gcmVxdWlyZWRcbkZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZyA9IG1ha2VCdWlsdEluKGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gaXNDYWxsYWJsZSh0aGlzKSAmJiBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpLnNvdXJjZSB8fCBpbnNwZWN0U291cmNlKHRoaXMpO1xufSwgJ3RvU3RyaW5nJyk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgbWFrZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWFrZS1idWlsdC1pbicpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywga2V5LCB2YWx1ZSwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcbiAgdmFyIHNpbXBsZSA9IG9wdGlvbnMuZW51bWVyYWJsZTtcbiAgdmFyIG5hbWUgPSBvcHRpb25zLm5hbWUgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubmFtZSA6IGtleTtcbiAgaWYgKGlzQ2FsbGFibGUodmFsdWUpKSBtYWtlQnVpbHRJbih2YWx1ZSwgbmFtZSwgb3B0aW9ucyk7XG4gIGlmIChvcHRpb25zLmdsb2JhbCkge1xuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2UgZGVmaW5lR2xvYmFsUHJvcGVydHkoa2V5LCB2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghb3B0aW9ucy51bnNhZmUpIGRlbGV0ZSBPW2tleV07XG4gICAgICBlbHNlIGlmIChPW2tleV0pIHNpbXBsZSA9IHRydWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2UgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihPLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiAhb3B0aW9ucy5ub25Db25maWd1cmFibGUsXG4gICAgICB3cml0YWJsZTogIW9wdGlvbnMubm9uV3JpdGFibGVcbiAgICB9KTtcbiAgfSByZXR1cm4gTztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuXG4vLyBgTWF0aC50cnVuY2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW1hdGgudHJ1bmNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1tYXRoLXRydW5jIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gTWF0aC50cnVuYyB8fCBmdW5jdGlvbiB0cnVuYyh4KSB7XG4gIHZhciBuID0gK3g7XG4gIHJldHVybiAobiA+IDAgPyBmbG9vciA6IGNlaWwpKG4pO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdHJ1bmMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWF0aC10cnVuYycpO1xuXG4vLyBgVG9JbnRlZ2VyT3JJbmZpbml0eWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvaW50ZWdlcm9yaW5maW5pdHlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBudW1iZXIgPSArYXJndW1lbnQ7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gIHJldHVybiBudW1iZXIgIT09IG51bWJlciB8fCBudW1iZXIgPT09IDAgPyAwIDogdHJ1bmMobnVtYmVyKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xuXG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5cbi8vIEhlbHBlciBmb3IgYSBwb3B1bGFyIHJlcGVhdGluZyBjYXNlIG9mIHRoZSBzcGVjOlxuLy8gTGV0IGludGVnZXIgYmUgPyBUb0ludGVnZXIoaW5kZXgpLlxuLy8gSWYgaW50ZWdlciA8IDAsIGxldCByZXN1bHQgYmUgbWF4KChsZW5ndGggKyBpbnRlZ2VyKSwgMCk7IGVsc2UgbGV0IHJlc3VsdCBiZSBtaW4oaW50ZWdlciwgbGVuZ3RoKS5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgdmFyIGludGVnZXIgPSB0b0ludGVnZXJPckluZmluaXR5KGluZGV4KTtcbiAgcmV0dXJuIGludGVnZXIgPCAwID8gbWF4KGludGVnZXIgKyBsZW5ndGgsIDApIDogbWluKGludGVnZXIsIGxlbmd0aCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHknKTtcblxudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBgVG9MZW5ndGhgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b2xlbmd0aFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIGxlbiA9IHRvSW50ZWdlck9ySW5maW5pdHkoYXJndW1lbnQpO1xuICByZXR1cm4gbGVuID4gMCA/IG1pbihsZW4sIDB4MUZGRkZGRkZGRkZGRkYpIDogMDsgLy8gMiAqKiA1MyAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG5cbi8vIGBMZW5ndGhPZkFycmF5TGlrZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWxlbmd0aG9mYXJyYXlsaWtlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHRvTGVuZ3RoKG9iai5sZW5ndGgpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS57IGluZGV4T2YsIGluY2x1ZGVzIH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gbGVuZ3RoT2ZBcnJheUxpa2UoTyk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9PSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICAgICAgaWYgKHZhbHVlICE9PSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgaWYgKChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSAmJiBPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcbiAgaW5jbHVkZXM6IGNyZWF0ZU1ldGhvZCh0cnVlKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5pbmRleE9mYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5kZXhvZlxuICBpbmRleE9mOiBjcmVhdGVNZXRob2QoZmFsc2UpXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIGluZGV4T2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMnKS5pbmRleE9mO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcblxudmFyIHB1c2ggPSB1bmN1cnJ5VGhpcyhbXS5wdXNoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgIWhhc093bihoaWRkZW5LZXlzLCBrZXkpICYmIGhhc093bihPLCBrZXkpICYmIHB1c2gocmVzdWx0LCBrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzT3duKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHB1c2gocmVzdWx0LCBrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIElFOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSBbXG4gICdjb25zdHJ1Y3RvcicsXG4gICdoYXNPd25Qcm9wZXJ0eScsXG4gICdpc1Byb3RvdHlwZU9mJyxcbiAgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJyxcbiAgJ3RvTG9jYWxlU3RyaW5nJyxcbiAgJ3RvU3RyaW5nJyxcbiAgJ3ZhbHVlT2YnXG5dO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpbnRlcm5hbE9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG5cbnZhciBoaWRkZW5LZXlzID0gZW51bUJ1Z0tleXMuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eW5hbWVzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5bmFtZXMgLS0gc2FmZVxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHJldHVybiBpbnRlcm5hbE9iamVjdEtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlzeW1ib2xzIC0tIHNhZmVcbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcycpO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG5cbnZhciBjb25jYXQgPSB1bmN1cnJ5VGhpcyhbXS5jb25jYXQpO1xuXG4vLyBhbGwgb2JqZWN0IGtleXMsIGluY2x1ZGVzIG5vbi1lbnVtZXJhYmxlIGFuZCBzeW1ib2xzXG5tb2R1bGUuZXhwb3J0cyA9IGdldEJ1aWx0SW4oJ1JlZmxlY3QnLCAnb3duS2V5cycpIHx8IGZ1bmN0aW9uIG93bktleXMoaXQpIHtcbiAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlLmYoYW5PYmplY3QoaXQpKTtcbiAgdmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZS5mO1xuICByZXR1cm4gZ2V0T3duUHJvcGVydHlTeW1ib2xzID8gY29uY2F0KGtleXMsIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkpIDoga2V5cztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgb3duS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vd24ta2V5cycpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSwgZXhjZXB0aW9ucykge1xuICB2YXIga2V5cyA9IG93bktleXMoc291cmNlKTtcbiAgdmFyIGRlZmluZVByb3BlcnR5ID0gZGVmaW5lUHJvcGVydHlNb2R1bGUuZjtcbiAgdmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZS5mO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICBpZiAoIWhhc093bih0YXJnZXQsIGtleSkgJiYgIShleGNlcHRpb25zICYmIGhhc093bihleGNlcHRpb25zLCBrZXkpKSkge1xuICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgIH1cbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbnZhciByZXBsYWNlbWVudCA9IC8jfFxcLnByb3RvdHlwZVxcLi87XG5cbnZhciBpc0ZvcmNlZCA9IGZ1bmN0aW9uIChmZWF0dXJlLCBkZXRlY3Rpb24pIHtcbiAgdmFyIHZhbHVlID0gZGF0YVtub3JtYWxpemUoZmVhdHVyZSldO1xuICByZXR1cm4gdmFsdWUgPT09IFBPTFlGSUxMID8gdHJ1ZVxuICAgIDogdmFsdWUgPT09IE5BVElWRSA/IGZhbHNlXG4gICAgOiBpc0NhbGxhYmxlKGRldGVjdGlvbikgPyBmYWlscyhkZXRlY3Rpb24pXG4gICAgOiAhIWRldGVjdGlvbjtcbn07XG5cbnZhciBub3JtYWxpemUgPSBpc0ZvcmNlZC5ub3JtYWxpemUgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gIHJldHVybiBTdHJpbmcoc3RyaW5nKS5yZXBsYWNlKHJlcGxhY2VtZW50LCAnLicpLnRvTG93ZXJDYXNlKCk7XG59O1xuXG52YXIgZGF0YSA9IGlzRm9yY2VkLmRhdGEgPSB7fTtcbnZhciBOQVRJVkUgPSBpc0ZvcmNlZC5OQVRJVkUgPSAnTic7XG52YXIgUE9MWUZJTEwgPSBpc0ZvcmNlZC5QT0xZRklMTCA9ICdQJztcblxubW9kdWxlLmV4cG9ydHMgPSBpc0ZvcmNlZDtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJykuZjtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgZGVmaW5lQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4nKTtcbnZhciBkZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5Jyk7XG52YXIgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jb3B5LWNvbnN0cnVjdG9yLXByb3BlcnRpZXMnKTtcbnZhciBpc0ZvcmNlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1mb3JjZWQnKTtcblxuLypcbiAgb3B0aW9ucy50YXJnZXQgICAgICAgICAtIG5hbWUgb2YgdGhlIHRhcmdldCBvYmplY3RcbiAgb3B0aW9ucy5nbG9iYWwgICAgICAgICAtIHRhcmdldCBpcyB0aGUgZ2xvYmFsIG9iamVjdFxuICBvcHRpb25zLnN0YXQgICAgICAgICAgIC0gZXhwb3J0IGFzIHN0YXRpYyBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnByb3RvICAgICAgICAgIC0gZXhwb3J0IGFzIHByb3RvdHlwZSBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnJlYWwgICAgICAgICAgIC0gcmVhbCBwcm90b3R5cGUgbWV0aG9kIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy5mb3JjZWQgICAgICAgICAtIGV4cG9ydCBldmVuIGlmIHRoZSBuYXRpdmUgZmVhdHVyZSBpcyBhdmFpbGFibGVcbiAgb3B0aW9ucy5iaW5kICAgICAgICAgICAtIGJpbmQgbWV0aG9kcyB0byB0aGUgdGFyZ2V0LCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMud3JhcCAgICAgICAgICAgLSB3cmFwIGNvbnN0cnVjdG9ycyB0byBwcmV2ZW50aW5nIGdsb2JhbCBwb2xsdXRpb24sIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy51bnNhZmUgICAgICAgICAtIHVzZSB0aGUgc2ltcGxlIGFzc2lnbm1lbnQgb2YgcHJvcGVydHkgaW5zdGVhZCBvZiBkZWxldGUgKyBkZWZpbmVQcm9wZXJ0eVxuICBvcHRpb25zLnNoYW0gICAgICAgICAgIC0gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuICBvcHRpb25zLmVudW1lcmFibGUgICAgIC0gZXhwb3J0IGFzIGVudW1lcmFibGUgcHJvcGVydHlcbiAgb3B0aW9ucy5kb250Q2FsbEdldFNldCAtIHByZXZlbnQgY2FsbGluZyBhIGdldHRlciBvbiB0YXJnZXRcbiAgb3B0aW9ucy5uYW1lICAgICAgICAgICAtIHRoZSAubmFtZSBvZiB0aGUgZnVuY3Rpb24gaWYgaXQgZG9lcyBub3QgbWF0Y2ggdGhlIGtleVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9wdGlvbnMsIHNvdXJjZSkge1xuICB2YXIgVEFSR0VUID0gb3B0aW9ucy50YXJnZXQ7XG4gIHZhciBHTE9CQUwgPSBvcHRpb25zLmdsb2JhbDtcbiAgdmFyIFNUQVRJQyA9IG9wdGlvbnMuc3RhdDtcbiAgdmFyIEZPUkNFRCwgdGFyZ2V0LCBrZXksIHRhcmdldFByb3BlcnR5LCBzb3VyY2VQcm9wZXJ0eSwgZGVzY3JpcHRvcjtcbiAgaWYgKEdMT0JBTCkge1xuICAgIHRhcmdldCA9IGdsb2JhbDtcbiAgfSBlbHNlIGlmIChTVEFUSUMpIHtcbiAgICB0YXJnZXQgPSBnbG9iYWxbVEFSR0VUXSB8fCBkZWZpbmVHbG9iYWxQcm9wZXJ0eShUQVJHRVQsIHt9KTtcbiAgfSBlbHNlIHtcbiAgICB0YXJnZXQgPSBnbG9iYWxbVEFSR0VUXSAmJiBnbG9iYWxbVEFSR0VUXS5wcm90b3R5cGU7XG4gIH1cbiAgaWYgKHRhcmdldCkgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgc291cmNlUHJvcGVydHkgPSBzb3VyY2Vba2V5XTtcbiAgICBpZiAob3B0aW9ucy5kb250Q2FsbEdldFNldCkge1xuICAgICAgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSk7XG4gICAgICB0YXJnZXRQcm9wZXJ0eSA9IGRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci52YWx1ZTtcbiAgICB9IGVsc2UgdGFyZ2V0UHJvcGVydHkgPSB0YXJnZXRba2V5XTtcbiAgICBGT1JDRUQgPSBpc0ZvcmNlZChHTE9CQUwgPyBrZXkgOiBUQVJHRVQgKyAoU1RBVElDID8gJy4nIDogJyMnKSArIGtleSwgb3B0aW9ucy5mb3JjZWQpO1xuICAgIC8vIGNvbnRhaW5lZCBpbiB0YXJnZXRcbiAgICBpZiAoIUZPUkNFRCAmJiB0YXJnZXRQcm9wZXJ0eSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodHlwZW9mIHNvdXJjZVByb3BlcnR5ID09IHR5cGVvZiB0YXJnZXRQcm9wZXJ0eSkgY29udGludWU7XG4gICAgICBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzKHNvdXJjZVByb3BlcnR5LCB0YXJnZXRQcm9wZXJ0eSk7XG4gICAgfVxuICAgIC8vIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgICBpZiAob3B0aW9ucy5zaGFtIHx8ICh0YXJnZXRQcm9wZXJ0eSAmJiB0YXJnZXRQcm9wZXJ0eS5zaGFtKSkge1xuICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KHNvdXJjZVByb3BlcnR5LCAnc2hhbScsIHRydWUpO1xuICAgIH1cbiAgICBkZWZpbmVCdWlsdEluKHRhcmdldCwga2V5LCBzb3VyY2VQcm9wZXJ0eSwgb3B0aW9ucyk7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcblxuLy8gYElzQXJyYXlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc2FycmF5XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktaXNhcnJheSAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmd1bWVudCkge1xuICByZXR1cm4gY2xhc3NvZihhcmd1bWVudCkgPT09ICdBcnJheSc7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gU2FmYXJpIDwgMTMgZG9lcyBub3QgdGhyb3cgYW4gZXJyb3IgaW4gdGhpcyBjYXNlXG52YXIgU0lMRU5UX09OX05PTl9XUklUQUJMRV9MRU5HVEhfU0VUID0gREVTQ1JJUFRPUlMgJiYgIWZ1bmN0aW9uICgpIHtcbiAgLy8gbWFrZXMgbm8gc2Vuc2Ugd2l0aG91dCBwcm9wZXIgc3RyaWN0IG1vZGUgc3VwcG9ydFxuICBpZiAodGhpcyAhPT0gdW5kZWZpbmVkKSByZXR1cm4gdHJ1ZTtcbiAgdHJ5IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoW10sICdsZW5ndGgnLCB7IHdyaXRhYmxlOiBmYWxzZSB9KS5sZW5ndGggPSAxO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBlcnJvciBpbnN0YW5jZW9mIFR5cGVFcnJvcjtcbiAgfVxufSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNJTEVOVF9PTl9OT05fV1JJVEFCTEVfTEVOR1RIX1NFVCA/IGZ1bmN0aW9uIChPLCBsZW5ndGgpIHtcbiAgaWYgKGlzQXJyYXkoTykgJiYgIWdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCAnbGVuZ3RoJykud3JpdGFibGUpIHtcbiAgICB0aHJvdyBuZXcgJFR5cGVFcnJvcignQ2Fubm90IHNldCByZWFkIG9ubHkgLmxlbmd0aCcpO1xuICB9IHJldHVybiBPLmxlbmd0aCA9IGxlbmd0aDtcbn0gOiBmdW5jdGlvbiAoTywgbGVuZ3RoKSB7XG4gIHJldHVybiBPLmxlbmd0aCA9IGxlbmd0aDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDB4MUZGRkZGRkZGRkZGRkY7IC8vIDIgKiogNTMgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID4gTUFYX1NBRkVfSU5URUdFUikgdGhyb3cgJFR5cGVFcnJvcignTWF4aW11bSBhbGxvd2VkIGluZGV4IGV4Y2VlZGVkJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcbnZhciBzZXRBcnJheUxlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zZXQtbGVuZ3RoJyk7XG52YXIgZG9lc05vdEV4Y2VlZFNhZmVJbnRlZ2VyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvZXMtbm90LWV4Y2VlZC1zYWZlLWludGVnZXInKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG52YXIgSU5DT1JSRUNUX1RPX0xFTkdUSCA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIFtdLnB1c2guY2FsbCh7IGxlbmd0aDogMHgxMDAwMDAwMDAgfSwgMSkgIT09IDQyOTQ5NjcyOTc7XG59KTtcblxuLy8gVjggPD0gMTIxIGFuZCBTYWZhcmkgPD0gMTUuNDsgRkYgPCAyMyB0aHJvd3MgSW50ZXJuYWxFcnJvclxuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MTI2ODFcbnZhciBwcm9wZXJFcnJvck9uTm9uV3JpdGFibGVMZW5ndGggPSBmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFtdLCAnbGVuZ3RoJywgeyB3cml0YWJsZTogZmFsc2UgfSkucHVzaCgpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBlcnJvciBpbnN0YW5jZW9mIFR5cGVFcnJvcjtcbiAgfVxufTtcblxudmFyIEZPUkNFRCA9IElOQ09SUkVDVF9UT19MRU5HVEggfHwgIXByb3BlckVycm9yT25Ob25Xcml0YWJsZUxlbmd0aCgpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnB1c2hgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUucHVzaFxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGFyaXR5OiAxLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFycyAtLSByZXF1aXJlZCBmb3IgYC5sZW5ndGhgXG4gIHB1c2g6IGZ1bmN0aW9uIHB1c2goaXRlbSkge1xuICAgIHZhciBPID0gdG9PYmplY3QodGhpcyk7XG4gICAgdmFyIGxlbiA9IGxlbmd0aE9mQXJyYXlMaWtlKE8pO1xuICAgIHZhciBhcmdDb3VudCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgZG9lc05vdEV4Y2VlZFNhZmVJbnRlZ2VyKGxlbiArIGFyZ0NvdW50KTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ0NvdW50OyBpKyspIHtcbiAgICAgIE9bbGVuXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgIGxlbisrO1xuICAgIH1cbiAgICBzZXRBcnJheUxlbmd0aChPLCBsZW4pO1xuICAgIHJldHVybiBsZW47XG4gIH1cbn0pO1xuIiwgIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuLyoqXG4gKiBDaGVja0NhdGVnb3JpZXMgSG90Q2F0IEV4dGVuc2lvbiDigJNcbiAqIHJlbW92ZXMgdGhlIHRlbXBsYXRlIHdoZW4gY2F0ZWdvcml6aW5nIChwcm9tcHRzIGJlZm9yZSkgd2l0aCBIb3RDYXQgYW5kXG4gKiBhZGRzIGEgbGluayBcIkNhdGVnb3JpZXMgYXJlIE9LXCIgdG8gdGhlIGNhdGVnb3J5LXNlY3Rpb25cbiAqXG4gKiBAcmV2IDIgKDIwMTQtMDMtMjApXG4gKiBAYXV0aG9yIFJpbGxrZSwgMjAxMlxuICovXG4oZnVuY3Rpb24gaG90Q2F0Q2hlY2soKSB7XG5cdGlmIChcblx0XHRtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZU51bWJlcicpICE9PSA2IHx8XG5cdFx0d2luZG93LkhvdENhdEF1dG9SZW1vdmVDaGVja0NhdE9wdE91dCB8fFxuXHRcdCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tjYXRlZ29yaWVzJylbMF1cblx0KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGNvbnN0IGFwaSA9IGluaXRNd0FwaSgnaG90Q2F0Q2hlY2svMi4wJyk7XG5cdGNvbnN0IGNoZWNrQ2F0ZWdvcmllc1JlZ0V4cCA9IC97e1tDY11oZWNrWyBfXWNhdGVnb3JpZXNbXnt9XSp9fS9nO1xuXHRjb25zdCBzZWxmTmFtZSA9ICcoW1tNZWRpYVdpa2k6R2FkZ2V0LUhvdENhdC1jaGVjay5qc3xTY3JpcHRdXSk6ICc7XG5cdGNvbnN0IHN0b3JhZ2VJdGVtTmFtZSA9ICdjaGVja0NhdCc7XG5cdGNvbnN0IHN0b3JhZ2VJdGVtID0gbXcuc3RvcmFnZS5nZXQoc3RvcmFnZUl0ZW1OYW1lKTtcblx0LyoqXG5cdCAqIEEgZmV3IHN0eWxpbmcgaGVscGVyIGZ1bmN0aW9uc1xuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gaWNvbkNsYXNzXG5cdCAqIEByZXR1cm4ge0pRdWVyeX1cblx0ICovXG5cdGNvbnN0IGNyZWF0ZWpJY29uID0gKGljb25DbGFzcykgPT4ge1xuXHRcdHJldHVybiAkKCc8c3Bhbj4nKS5hdHRyKCdjbGFzcycsIGB1aS1pY29uICR7aWNvbkNsYXNzfSBjYXRjaGVjay1pbmxpbmUtaWNvbmApLnRleHQoJyAnKTtcblx0fTtcblx0Y29uc3QgY3JlYXRlTm90aWZ5QXJlYSA9ICh0ZXh0Tm9kZSwgaWNvbiwgc3RhdGUpID0+IHtcblx0XHRyZXR1cm4gJCgnPGRpdj4nKVxuXHRcdFx0LmFkZENsYXNzKCd1aS13aWRnZXQnKVxuXHRcdFx0LmFwcGVuZChcblx0XHRcdFx0JCgnPGRpdj4nKVxuXHRcdFx0XHRcdC5hdHRyKCdjbGFzcycsIGAke3N0YXRlfSB1aS1jb3JuZXItYWxsYClcblx0XHRcdFx0XHQuY3NzKHtcblx0XHRcdFx0XHRcdCdtYXJnaW4tdG9wJzogJzIwcHgnLFxuXHRcdFx0XHRcdFx0cGFkZGluZzogJzAuN2VtJyxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5hcHBlbmQoJCgnPHA+JykuYXBwZW5kKGNyZWF0ZWpJY29uKGljb24pLmNzcygnbWFyZ2luUmlnaHQnLCAnMC4zZW0nKSwgdGV4dE5vZGUpKVxuXHRcdFx0KTtcblx0fTtcblx0Ly8gUmVtb3ZlIFwiY2hlY2sgY2F0ZWdvcmllc1wiIHdoZW4gdXNpbmcgSG90Q2F0XG5cdC8vIE9ubHkgZXhlY3V0ZWQgb24gZmlyc3Qgc3VibWl0XG5cdCQoJ2JvZHknKS5vbmUoJ3N1Ym1pdC5jaGVja0NhdExpc3RlbmVyJywgJyNob3RjYXRDb21taXRGb3JtJywgZnVuY3Rpb24gKGUpIHtcblx0XHRpZiAoc3RvcmFnZUl0ZW0gPT09ICdkaXNhYmxlZCcpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRjb25zdCBuZXdWYWwgPSBzZWxmLndwVGV4dGJveDEudmFsdWUucmVwbGFjZShjaGVja0NhdGVnb3JpZXNSZWdFeHAsICcnKTtcblx0XHRjb25zdCBkbGdCdXR0b25zID0ge307XG5cdFx0bGV0ICRkaWFsb2dDaGVja1N0b3JhZ2U7XG5cdFx0bGV0ICRwZXJtYVNhdmVIaW50O1xuXHRcdGxldCAkdGV4dEhpbnROb2RlO1xuXHRcdGxldCAkZGlhbG9nO1xuXHRcdGNvbnN0IGRvUmVtb3ZlID0gKCkgPT4ge1xuXHRcdFx0c2VsZi53cFN1bW1hcnkudmFsdWUgPSBgUmVtb3ZpbmcgW1tUZW1wbGF0ZTpDaGVjayBjYXRlZ29yaWVzfHske2B7Q2hlY2sgY2F0ZWdvcmllc319XV0gJHtzZWxmLndwU3VtbWFyeS52YWx1ZX1gfWA7XG5cdFx0XHRzZWxmLndwVGV4dGJveDEudmFsdWUgPSBuZXdWYWw7XG5cdFx0fTtcblx0XHRjb25zdCB3cml0ZVN0b3JhZ2UgPSAodmFsKSA9PiB7XG5cdFx0XHRtdy5zdG9yYWdlLnNldChzdG9yYWdlSXRlbU5hbWUsIHZhbCwgNjA0OGUyKTsgLy8gNyBkYXlzXG5cdFx0fTtcblx0XHRkbGdCdXR0b25zWydZZXMsIFJlbW92ZSddID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0ZG9SZW1vdmUoKTtcblx0XHRcdGlmICgkZGlhbG9nQ2hlY2tTdG9yYWdlWzBdLmNoZWNrZWQpIHtcblx0XHRcdFx0d3JpdGVTdG9yYWdlKCdhdXRvJyk7XG5cdFx0XHR9XG5cdFx0XHQkKHRoaXMpLmRpYWxvZygnY2xvc2UnKTtcblx0XHR9O1xuXHRcdGRsZ0J1dHRvbnNbJ05vLCBrZWVwIGl0J10gPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAoJGRpYWxvZ0NoZWNrU3RvcmFnZVswXS5jaGVja2VkKSB7XG5cdFx0XHRcdHdyaXRlU3RvcmFnZSgnZGlzYWJsZWQnKTtcblx0XHRcdH1cblx0XHRcdCQodGhpcykuZGlhbG9nKCdjbG9zZScpO1xuXHRcdH07XG5cdFx0Y29uc3QgX2FkZFRvSlMgPSBmdW5jdGlvbiAoX2UpIHtcblx0XHRcdF9lLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRpZiAoJHBlcm1hU2F2ZUhpbnQuaGFzQ2xhc3MoJ3VpLXN0YXRlLWRpc2FibGVkJykpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgJGVsID0gJCh0aGlzKTtcblx0XHRcdCRlbC5vZmYoJ2NsaWNrJykudGV4dCgnUGxlYXNlIHdhaXQuJyk7XG5cdFx0XHQkcGVybWFTYXZlSGludC5hZGRDbGFzcygndWktc3RhdGUtZGlzYWJsZWQnKTtcblx0XHRcdGNvbnN0IHBhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0XHRcdHRpdGxlOiBgVXNlcjoke213LmNvbmZpZy5nZXQoJ3dnVXNlck5hbWUnKX0vY29tbW9uLmpzYCxcblx0XHRcdFx0c3VtbWFyeTogYCR7c2VsZk5hbWV9U2F2aW5nIEhvdENhdCBjb25maWd1cmF0aW9uLmAsXG5cdFx0XHRcdGFwcGVuZHRleHQ6ICRlbC5kYXRhKCdhZGRUZXh0JyksXG5cdFx0XHR9O1xuXHRcdFx0Y29uc3QgZWRpdERvbmUgPSAoZWRpdFN0YXQpID0+IHtcblx0XHRcdFx0aWYgKCFlZGl0U3RhdCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZWRpdFN0YXQuZXJyb3IpIHtcblx0XHRcdFx0XHRtdy5ub3RpZnkoXG5cdFx0XHRcdFx0XHRgVW5hYmxlIHRvIHNhdmUgdG8geW91ciBjb21tb24uanMgdXNpbmcgdGhlIEFQSVxcbiR7ZWRpdFN0YXQuZXJyb3IuY29kZX1cXG4ke2VkaXRTdGF0LmVycm9yLmluZm99YCxcblx0XHRcdFx0XHRcdHt0YWc6ICdob3RDYXRDaGVjaycsIHR5cGU6ICdlcnJvcid9XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHQkZWwudGV4dCgnRWRpdC1FcnJvciEnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkZWwudGV4dCgnRG9uZS4nKTtcblx0XHRcdFx0XHQkcGVybWFTYXZlSGludC5mYWRlT3V0KCk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHRhcGkucG9zdFdpdGhUb2tlbignY3NyZicsIHBhcmFtcykudGhlbihlZGl0RG9uZSk7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBPbiBXaWtpbWVkaWEgQ29tbW9ucyB0aGVyZSB3ZXJlIHBlb3BsZSB3aG8gc2FpZDpcblx0XHQgKiBcIkNhdGVnb3JpemluZyB3aXRoIEhvdENhdCBkb2VzIGxlZ2l0IGF1dG9tYXRlZCByZW1vdmFsIG9mIHRoZSBjaGVjay1jYXQtbWVzc2FnZVwiXG5cdFx0ICogU28gd2UgaW52ZW50ZWQgYSBkaWFsb2cgdGhhdCBzaG91bGQgYmUgcmVhZGFibGUgYnkgdXNlcnMgZXZlbiB3aXRoIHZlcnkgZmV3IEVuZ2xpc2ggc2tpbGxzLlxuXHRcdCAqL1xuXHRcdGNvbnN0IHByb21wdCA9ICgpID0+IHtcblx0XHRcdCRkaWFsb2dDaGVja1N0b3JhZ2UgPSAkKCc8aW5wdXQ+Jylcblx0XHRcdFx0LmF0dHIoe1xuXHRcdFx0XHRcdHR5cGU6ICdjaGVja2JveCcsXG5cdFx0XHRcdFx0aWQ6ICdob3RDYXRBdXRvUmVtb3ZlQ2hlY2tDYXRTdG9yYWdlJyxcblx0XHRcdFx0fSlcblx0XHRcdFx0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0aWYgKHRoaXMuY2hlY2tlZCkge1xuXHRcdFx0XHRcdFx0JHBlcm1hU2F2ZUhpbnQuZmFkZUluKCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdCRwZXJtYVNhdmVIaW50LmZhZGVPdXQoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0JHRleHRIaW50Tm9kZSA9ICQoJzx1bD4nKTtcblx0XHRcdCQoJzxsaT4nKVxuXHRcdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHRcdCQoJzxhPicpXG5cdFx0XHRcdFx0XHQuYXR0cignaHJlZicsICcjJylcblx0XHRcdFx0XHRcdC50ZXh0KCdEaXNhYmxlIHRoaXMgZmVhdHVyZS4nKVxuXHRcdFx0XHRcdFx0LmRhdGEoJ2FkZFRleHQnLCAnXFxud2luZG93LkhvdENhdEF1dG9SZW1vdmVDaGVja0NhdE9wdE91dCA9IHRydWU7Jylcblx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBfYWRkVG9KUylcblx0XHRcdFx0KVxuXHRcdFx0XHQuYXBwZW5kVG8oJHRleHRIaW50Tm9kZSk7XG5cdFx0XHQkKCc8bGk+Jylcblx0XHRcdFx0LmFwcGVuZChcblx0XHRcdFx0XHQkKCc8YT4nKVxuXHRcdFx0XHRcdFx0LmF0dHIoJ2hyZWYnLCAnIycpXG5cdFx0XHRcdFx0XHQudGV4dCgnUmVtb3ZlIHt7Y2hlY2sgY2F0ZWdvcmllc319IHdoZW4gZWRpdGluZyB1c2luZyBIb3RDYXQgd2l0aG91dCBwcm9tcHRpbmcuJylcblx0XHRcdFx0XHRcdC5kYXRhKCdhZGRUZXh0JywgJ1xcbndpbmRvdy5Ib3RDYXRBdXRvUmVtb3ZlQ2hlY2tDYXQgPSB0cnVlOycpXG5cdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgX2FkZFRvSlMpXG5cdFx0XHRcdClcblx0XHRcdFx0LmFwcGVuZFRvKCR0ZXh0SGludE5vZGUpO1xuXHRcdFx0JHBlcm1hU2F2ZUhpbnQgPSBjcmVhdGVOb3RpZnlBcmVhKFxuXHRcdFx0XHQkKCc8c3Bhbj4nKS50ZXh0KCdTYXZlIHRoZXNlIHNldHRpbmcgaW4geW91ciBjb21tb24uanM6ICcpLmFwcGVuZCgkdGV4dEhpbnROb2RlKSxcblx0XHRcdFx0J3VpLWljb24taW5mbycsXG5cdFx0XHRcdCd1aS1zdGF0ZS1oaWdobGlnaHQnXG5cdFx0XHQpO1xuXHRcdFx0JGRpYWxvZyA9ICQoJzxkaXY+Jylcblx0XHRcdFx0LmFwcGVuZChcblx0XHRcdFx0XHQkKCc8c3Bhbj4nKVxuXHRcdFx0XHRcdFx0LmNzcyh7XG5cdFx0XHRcdFx0XHRcdCdmb250LXNpemUnOiAnMmVtJyxcblx0XHRcdFx0XHRcdFx0J2xpbmUtaGVpZ2h0JzogJzEuOGVtJyxcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHRcdFx0XHQkKCc8c3Bhbj4nKS50ZXh0KCcge3tjaGVjayBjYXRlZ29yaWVzfX0gJykuY3NzKHtcblx0XHRcdFx0XHRcdFx0XHQnYmFja2dyb3VuZC1jb2xvcic6ICcjRjhDQ0IwJyxcblx0XHRcdFx0XHRcdFx0XHQndGV4dC1kZWNvcmF0aW9uJzogJ2xpbmUtdGhyb3VnaCAhaW1wb3J0YW50Jyxcblx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcblx0XHRcdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0XHRcdCQoJzxzcGFuPicpLnRleHQoJyA/Jylcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0KVxuXHRcdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHRcdCc8YnI+Jyxcblx0XHRcdFx0XHQkZGlhbG9nQ2hlY2tTdG9yYWdlLFxuXHRcdFx0XHRcdCQoJzxsYWJlbD4nKS5hdHRyKCdmb3InLCAnaG90Q2F0QXV0b1JlbW92ZUNoZWNrQ2F0U3RvcmFnZScpLnRleHQoXCJEb24ndCBhc2sgYWdhaW5cIiksXG5cdFx0XHRcdFx0Jzxicj4nXG5cdFx0XHRcdClcblx0XHRcdFx0LmFwcGVuZChtdy51c2VyLmlzQW5vbigpID8gJycgOiAkcGVybWFTYXZlSGludC5oaWRlKCkpO1xuXHRcdFx0JGRpYWxvZy5kaWFsb2coe1xuXHRcdFx0XHRtb2RhbDogdHJ1ZSxcblx0XHRcdFx0Y2xvc2VPbkVzY2FwZTogdHJ1ZSxcblx0XHRcdFx0dGl0bGU6ICd7e2NoZWNrIGNhdGVnb3JpZXN9fSAo4oiSKT8nLFxuXHRcdFx0XHR3aWR0aDogNDUwLFxuXHRcdFx0XHRidXR0b25zOiBkbGdCdXR0b25zLFxuXHRcdFx0XHRjbG9zZTogKCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRcdFx0XHRcdCRib2R5LmZpbmQoJyNob3RjYXRDb21taXRGb3JtJykudHJpZ2dlcignc3VibWl0Jyk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdG9wZW4oKSB7XG5cdFx0XHRcdFx0Y29uc3QgJGJ1dHRvbnMgPSAkKHRoaXMpLnBhcmVudCgpLmZpbmQoJy51aS1kaWFsb2ctYnV0dG9ucGFuZSBidXR0b24nKTtcblx0XHRcdFx0XHQkYnV0dG9ucy5lcSgwKS5idXR0b24oe1xuXHRcdFx0XHRcdFx0aWNvbnM6IHtcblx0XHRcdFx0XHRcdFx0cHJpbWFyeTogJ3VpLWljb24tY2lyY2xlLWNoZWNrJyxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0JGJ1dHRvbnMuZXEoMSkuYnV0dG9uKHtcblx0XHRcdFx0XHRcdGljb25zOiB7XG5cdFx0XHRcdFx0XHRcdHByaW1hcnk6ICd1aS1pY29uLWNhbmNlbCcsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9LFxuXHRcdFx0fSk7XG5cdFx0fTtcblx0XHRpZiAobmV3VmFsICE9PSBzZWxmLndwVGV4dGJveDEudmFsdWUpIHtcblx0XHRcdGlmICh3aW5kb3cuSG90Q2F0QXV0b1JlbW92ZUNoZWNrQ2F0IHx8IHN0b3JhZ2VJdGVtID09PSAnYXV0bycpIHtcblx0XHRcdFx0ZG9SZW1vdmUoKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRwcm9tcHQoKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0pO1xuXHQvLyBBZGQgT0stTGluayB0byB0aGUgY2F0cyBwYW5lbFxuXHRjb25zdCAkb2tMaW5rID0gJCgnPGE+Jylcblx0XHQuYXR0cih7XG5cdFx0XHRocmVmOiAnIycsXG5cdFx0XHR0aXRsZTogJ0NhdGVnb3JpZXMgYXJlIE9LISBJbW1lZGlhdGVseSByZW1vdmUgdGhlIHRlbXBsYXRlLicsXG5cdFx0fSlcblx0XHQuYXBwZW5kKCc8cz4nKVxuXHRcdC50ZXh0KCd7e0NoZWNrIGNhdGVnb3JpZXN9fScpO1xuXHQkb2tMaW5rLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGNvbnN0ICRlbCA9ICQodGhpcyk7XG5cdFx0JGVsLm9mZignY2xpY2snKTtcblx0XHRjb25zdCBkb0VkaXQgPSAocmVzdWx0KSA9PiB7XG5cdFx0XHRpZiAoIXJlc3VsdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHQkZWwudGV4dCgnRG9pbmcuJyk7XG5cdFx0XHRjb25zdCB0ZXh0ID0gcmVzdWx0LnJlcGxhY2UoY2hlY2tDYXRlZ29yaWVzUmVnRXhwLCAnJyk7XG5cdFx0XHRpZiAodGV4dCA9PT0gcmVzdWx0KSB7XG5cdFx0XHRcdCRlbC50ZXh0KCdUZW1wbGF0ZSBub3QgZm91bmQhJyk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHBhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0XHRcdHRpdGxlOiBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJyksXG5cdFx0XHRcdHN1bW1hcnk6IGAke3NlbGZOYW1lfUNhdGVnb3JpZXMgYXJlIGNoZWNrZWQgYW5kIE9LLiBZb3UgY2FuIGhlbHAgW1tDYXRlZ29yeTpNZWRpYSBuZWVkaW5nIGNhdGVnb3J5IHJldmlld3xyZXZpZXdpbmddXSFgLFxuXHRcdFx0XHRub2NyZWF0ZTogdHJ1ZSxcblx0XHRcdFx0dGV4dCxcblx0XHRcdH07XG5cdFx0XHRjb25zdCBlZGl0RG9uZSA9IChlZGl0U3RhdCkgPT4ge1xuXHRcdFx0XHRpZiAoIWVkaXRTdGF0KSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChlZGl0U3RhdC5lcnJvcikge1xuXHRcdFx0XHRcdG13Lm5vdGlmeShcblx0XHRcdFx0XHRcdGBVbmFibGUgdG8gcmVtb3ZlIFwiQ2hlY2sgY2F0ZWdvcmllc1wiIHdpdGggdGhlIEFQSVxcbiR7ZWRpdFN0YXQuZXJyb3IuY29kZX1cXG4ke2VkaXRTdGF0LmVycm9yLmluZm99YCxcblx0XHRcdFx0XHRcdHt0YWc6ICdob3RDYXRDaGVjaycsIHR5cGU6ICdlcnJvcid9XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHQkZWwudGV4dCgnRWRpdC1FcnJvciEnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkZWwudGV4dCgnRWRpdCBEb25lLicpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRcdFx0XHQkYm9keS5maW5kKCcuY2hlY2tjYXRlZ29yaWVzJykuZmFkZU91dCgpO1xuXHRcdFx0fTtcblx0XHRcdCRlbC50ZXh0KCdEb2luZy4uJyk7XG5cdFx0XHRhcGkucG9zdFdpdGhUb2tlbignY3NyZicsIHBhcmFtcykudGhlbihlZGl0RG9uZSk7XG5cdFx0fTtcblx0XHQkZWwudGV4dCgnRG9pbmcnKTtcblx0XHQkLmFqYXgoe1xuXHRcdFx0dXJsOiBtdy5jb25maWcuZ2V0KCd3Z1NjcmlwdCcpLFxuXHRcdFx0ZGF0YToge1xuXHRcdFx0XHRhY3Rpb246ICdyYXcnLFxuXHRcdFx0XHR0aXRsZTogbXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpLnJlcGxhY2UoLyAvZywgJ18nKSxcblx0XHRcdH0sXG5cdFx0XHRkYXRhVHlwZTogJ3RleHQnLFxuXHRcdFx0ZXJyb3I6ICgpID0+IHtcblx0XHRcdFx0JGVsLnRleHQoJ0Vycm9yIScpO1xuXHRcdFx0fSxcblx0XHRcdHN1Y2Nlc3M6IGRvRWRpdCxcblx0XHRcdHR5cGU6ICdHRVQnLFxuXHRcdFx0Y2FjaGU6IGZhbHNlLFxuXHRcdH0pO1xuXHR9KTtcblx0JChmdW5jdGlvbiBsb2FkSG90Q2F0Q2hlY2soKSB7XG5cdFx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdFx0JGJvZHkuZmluZCgnI2NhdGxpbmtzJykuZmluZCgndWw6Zmlyc3QnKS5hcHBlbmQoJCgnPGxpPicpLmFwcGVuZCgkb2tMaW5rKSk7XG5cdH0pO1xufSkoKTtcbiIsICJjb25zdCBnZXRNZXNzYWdlID0gKGtleTogc3RyaW5nLCAuLi5hcmdzOiBzdHJpbmdbXSk6IHN0cmluZyA9PiB7XG5cdGtleSA9IGBob3RjYXQtJHtrZXl9YDtcblx0Ly8gTWVzc2FnZXMgdGhhdCBjYW4gYmUgdXNlZCBoZXJlOlxuXHQvLyAqIHNlZSBtZXNzYWdlcy50c1xuXHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdHJldHVybiBtdy5tZXNzYWdlKGtleSwgLi4uYXJncykucGxhaW4oKTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiY29uc3QgV0dfVVNFUl9HUk9VUFM6IHN0cmluZ1tdID0gbXcuY29uZmlnLmdldCgnd2dVc2VyR3JvdXBzJykgPz8gW107XG5jb25zdCBXR19VU0VSX0xBTkdVQUdFOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCd3Z1VzZXJMYW5ndWFnZScpO1xuXG5leHBvcnQge1dHX1VTRVJfR1JPVVBTLCBXR19VU0VSX0xBTkdVQUdFfTtcbiIsICJpbXBvcnQge1dHX1VTRVJfTEFOR1VBR0V9IGZyb20gJy4vY29uc3RhbnQnO1xuXG5leHBvcnQgY29uc3QgaG90Q2F0TWVzc2FnZXMgPSAoKTogdm9pZCA9PiB7XG5cdGlmIChbJ3poLWhhbnQnLCAnemgtaGsnLCAnemgtbW8nLCAnemgtdHcnXS5pbmNsdWRlcyhXR19VU0VSX0xBTkdVQUdFKSkge1xuXHRcdG13Lm1lc3NhZ2VzLnNldCh7XG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhdF9yZW1vdmVkJzogJ+W3suenu+mZpFtbQ2F0ZWdvcnk6JDFdXScsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLXRlbXBsYXRlX3JlbW92ZWQnOiAn5bey56e76Zmke3tbW0NhdGVnb3J5OiQxXV19fScsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhdF9hZGRlZCc6ICflt7Lmt7vliqBbW0NhdGVnb3J5OiQxXV0nLFxuXHRcdFx0Ly8gJDIgaXMgdGhlIG5ldyBrZXlcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2F0X2tleWNoYW5nZSc6ICflt7LoqK3nva5bW0NhdGVnb3J5OiQxXV3nmoTmlrDmjpLluo/lrZfvvJpcIiQyXCInLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYXRfbm90Rm91bmQnOiAn5YiG6aGe4oCcJDHigJ3mspLmnInmib7liLAnLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYXRfZXhpc3RzJzogJ+WIhumhnuKAnCQx4oCd5bey57aT5a2Y5Zyo77yM5rKS5pyJ5re75Yqg44CCJyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2F0X3Jlc29sdmVkJzogJ++8iOmHjeWumuWQkVtbQ2F0ZWdvcnk6JDFdXeW3suiZleeQhu+8iScsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLXVuY2F0X3JlbW92ZWQnOiAn5bey56e76Zmke3t1bmNhdGVnb3JpemVkfX0nLFxuXHRcdFx0Ly8gU29tZSB0ZXh0IHRvIHByZWZpeCB0byB0aGUgZWRpdCBzdW1tYXJ5LlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1wcmVmaXgnOiAn5L2/55SoW1tIOkhPVENBVHxIb3RDYXRdXScsXG5cdFx0XHQvLyBTb21lIHRleHQgdG8gYXBwZW5kIHRvIHRoZSBlZGl0IHN1bW1hcnkuIE5hbWVkICd1c2luZycgZm9yIGhpc3RvcmljYWwgcmVhc29ucy4gSWYgeW91IHByZWZlclxuXHRcdFx0Ly8gdG8gaGF2ZSBhIG1hcmtlciBhdCB0aGUgZnJvbnQsIHVzZSBwcmVmaXggYW5kIHNldCB0aGlzIHRvIHRoZSBlbXB0eSBzdHJpbmcuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLXVzaW5nJzogJycsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLW11bHRpX2NoYW5nZSc6ICckMeWAi+WIhumhnicsXG5cdFx0XHQvLyBBbnkgY2F0ZWdvcnkgaW4gdGhpcyBjYXRlZ29yeSBpcyBkZWVtZWQgYSBkaXNhbWJpZ3VhdGlvbiBjYXRlZ29yeTsgaS5lLiwgYSBjYXRlZ29yeSB0aGF0IHNob3VsZCBub3QgY29udGFpblxuXHRcdFx0Ly8gYW55IGl0ZW1zLCBidXQgdGhhdCBjb250YWlucyBsaW5rcyB0byBvdGhlciBjYXRlZ29yaWVzIHdoZXJlIHN0dWZmIHNob3VsZCBiZSBjYXRlZ29yaXplZC4gSWYgeW91IGRvbid0IGhhdmVcblx0XHRcdC8vIHRoYXQgY29uY2VwdCBvbiB5b3VyIHdpa2ksIHNldCBpdCB0byBibGFuayBzdHJpbmcuIFVzZSBibGFua3MsIG5vdCB1bmRlcnNjb3Jlcy5cblx0XHRcdCdob3RjYXQtZGlzYW1iaWdfY2F0ZWdvcnknOiAnJyxcblx0XHRcdC8vIEFueSBjYXRlZ29yeSBpbiB0aGlzIGNhdGVnb3J5IGlzIGRlZW1lZCBhIChzb2Z0KSByZWRpcmVjdCB0byBzb21lIG90aGVyIGNhdGVnb3J5IGRlZmluZWQgYnkgYSBsaW5rXG5cdFx0XHQvLyB0byBhbm90aGVyIG5vbi1ibGFja2xpc3RlZCBjYXRlZ29yeS4gSWYgeW91ciB3aWtpIGRvZXNuJ3QgaGF2ZSBzb2Z0IGNhdGVnb3J5IHJlZGlyZWN0cywgc2V0IHRoaXMgdG8gbnVsbC5cblx0XHRcdC8vIElmIGEgc29mdC1yZWRpcmVjdGVkIGNhdGVnb3J5IGNvbnRhaW5zIG1vcmUgdGhhbiBvbmUgbGluayB0byBhbm90aGVyIG5vbi1ibGFja2xpc3RlZCBjYXRlZ29yeSwgaXQncyBjb25zaWRlcmVkXG5cdFx0XHQvLyBhIGRpc2FtYmlndWF0aW9uIGNhdGVnb3J5IGluc3RlYWQuXG5cdFx0XHQnaG90Y2F0LXJlZGlyX2NhdGVnb3J5JzogJ+W3sumHjeWumuWQkeeahOWIhuexuycsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLXNlcGFyYXRvcic6ICc7ICcsXG5cdFx0XHQvLyAkMSBpcyByZXBsYWNlZCBieSBhIG51bWJlci4gSWYgeW91ciBsYW5ndWFnZSBoYXMgc2V2ZXJhbCBwbHVyYWwgZm9ybXMgKGMuZi4gW1s6ZW53aWtpOkR1YWwgKGdyYW1tYXRpY2FsIGZvcm0pXV0pLFxuXHRcdFx0Ly8geW91IGNhbiBzZXQgdGhpcyB0byBhbiBhcnJheSBvZiBzdHJpbmdzIHN1aXRhYmxlIGZvciBwYXNzaW5nIHRvIG13Lmxhbmd1YWdlLmNvbmZpZ1BsdXJhbCgpLlxuXHRcdFx0Ly8gSWYgdGhhdCBmdW5jdGlvbiBkb2Vzbid0IGV4aXN0LCBIb3RDYXQgd2lsbCBzaW1wbHkgZmFsbCBiYWNrIHRvIHVzaW5nIHRoZSBsYXN0XG5cdFx0XHQvLyBlbnRyeSBpbiB0aGUgYXJyYXkuXG5cdFx0XHQvLyBEZWZhdWx0cyB0byAnW1snICsgY2F0ZWdvcnlfY2Fub25pY2FsICsgJzokMV1dJy4gQ2FuIGJlIG92ZXJyaWRkZW4gaWYgaW4gdGhlIHNob3J0IGVkaXQgc3VtbWFyaWVzXG5cdFx0XHQvLyBub3QgdGhlIHN0YW5kYXJkIGNhdGVnb3J5IG5hbWUgc2hvdWxkIGJlIHVzZWQgYnV0LCBzYXksIGEgc2hvcnRlciBuYW1lc3BhY2UgYWxpYXMuICQxIGlzIHJlcGxhY2VkXG5cdFx0XHQvLyBieSBhIGNhdGVnb3J5IG5hbWUuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLXNob3J0X2NhdGNoYW5nZSc6ICckMScsXG5cdFx0XHQvLyBCdXR0b24gdGV4dC4gTG9jYWxpemUgdG8gd2dDb250ZW50TGFuZ3VhZ2UgaGVyZTsgbG9jYWxpemUgdG8gd2dVc2VyTGFuZ3VhZ2UgaW4gYSBzdWJwYWdlLFxuXHRcdFx0Ly8gc2VlIGxvY2FsaXphdGlvbiBob29rIGJlbG93LlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jb21taXQnOiAn5YSy5a2YJyxcblx0XHRcdC8vIEJ1dHRvbiB0ZXh0LiBMb2NhbGl6ZSB0byB3Z0NvbnRlbnRMYW5ndWFnZSBoZXJlOyBsb2NhbGl6ZSB0byB3Z1VzZXJMYW5ndWFnZSBpbiBhIHN1YnBhZ2UsXG5cdFx0XHQvLyBzZWUgbG9jYWxpemF0aW9uIGhvb2sgYmVsb3cuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLW9rJzogJ+eiuuWumicsXG5cdFx0XHQvLyBCdXR0b24gdGV4dC4gTG9jYWxpemUgdG8gd2dDb250ZW50TGFuZ3VhZ2UgaGVyZTsgbG9jYWxpemUgdG8gd2dVc2VyTGFuZ3VhZ2UgaW4gYSBzdWJwYWdlLFxuXHRcdFx0Ly8gc2VlIGxvY2FsaXphdGlvbiBob29rIGJlbG93LlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYW5jZWwnOiAn5Y+W5raIJyxcblx0XHRcdC8vIExvY2FsaXplIHRvIHdnQ29udGVudExhbmd1YWdlIGhlcmU7IGxvY2FsaXplIHRvIHdnVXNlckxhbmd1YWdlIGluIGEgc3VicGFnZSxcblx0XHRcdC8vIHNlZSBsb2NhbGl6YXRpb24gaG9vayBiZWxvdy5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtbXVsdGlfZXJyb3InOlxuXHRcdFx0XHQn54Sh5rOV5b6e5Ly65pyN5Zmo5Y+W5b6X6aCB6Z2i5paH5a2X44CC5Zug5q2k77yM5oKo55qE5YiG6aGe6K6K5pu054Sh5rOV5YSy5a2Y44CC5oiR5YCR54K65q2k5LiN5L6/6KGo56S65oqx5q2J44CCJyxcblx0XHRcdC8vIFBsdXJhbCBvZiBjYXRlZ29yeV9jYW5vbmljYWwuXG5cdFx0XHQnaG90Y2F0LWNhdGVnb3JpZXMnOiAn5YiG6aGeJyxcblx0XHRcdC8vIE5hbWVzIGZvciB0aGUgc2VhcmNoIGVuZ2luZXNcblx0XHRcdCdob3RjYXQtZW5naW5lX25hbWVzLXNlYXJjaGluZGV4JzogJ+aQnOWwi+e0ouW8lScsXG5cdFx0XHQnaG90Y2F0LWVuZ2luZV9uYW1lcy1wYWdlbGlzdCc6ICfpoIHpnaLliJfooagnLFxuXHRcdFx0J2hvdGNhdC1lbmdpbmVfbmFtZXMtY29tYmluZWQnOiAn5ZCI5L215pCc5bCLJyxcblx0XHRcdCdob3RjYXQtZW5naW5lX25hbWVzLXN1YmNhdCc6ICflrZDliIbpoZ4nLFxuXHRcdFx0J2hvdGNhdC1lbmdpbmVfbmFtZXMtcGFyZW50Y2F0JzogJ+S4iuWxpOWIhumhnicsXG5cdFx0XHQvLyBUaGUgdG9vbHRpcHMgZm9yIHRoZSBhYm92ZSBsaW5rc1xuXHRcdFx0J2hvdGNhdC10b29sdGlwcy1jaGFuZ2UnOiAn5L+u5pS5Jyxcblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtcmVtb3ZlJzogJ+enu+mZpCcsXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLWFkZCc6ICflop7liqDkuIDlgIvmlrDliIbpoZ4nLFxuXHRcdFx0J2hvdGNhdC10b29sdGlwcy1yZXN0b3JlJzogJ+W+qeWOn+iuiuabtCcsXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLXVuZG8nOiAn5b6p5Y6f6K6K5pu0Jyxcblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtZG93bic6ICfmiZPplovku6Xkv67mlLnkuKbpoa/npLrlrZDliIbpoZ4nLFxuXHRcdFx0J2hvdGNhdC10b29sdGlwcy11cCc6ICfmiZPplovku6Xkv67mlLnkuKbpoa/npLrkuIrlsaTliIbpoZ4nLFxuXHRcdFx0Ly8gVG9vbHRpcCBmb3IgdGhlIFwiZW50ZXIgbXVsdGktbW9kZVwiIGxpbmtcblx0XHRcdCdob3RjYXQtbXVsdGlfdG9vbHRpcCc6ICfkv67mlLnlpJrlgIvliIbpoZ4nLFxuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdG13Lm1lc3NhZ2VzLnNldCh7XG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhdF9yZW1vdmVkJzogJ+W3suenu+mZpFtbQ2F0ZWdvcnk6JDFdXScsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLXRlbXBsYXRlX3JlbW92ZWQnOiAn5bey56e76Zmke3tbW0NhdGVnb3J5OiQxXV19fScsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhdF9hZGRlZCc6ICflt7Lmt7vliqBbW0NhdGVnb3J5OiQxXV0nLFxuXHRcdFx0Ly8gJDIgaXMgdGhlIG5ldyBrZXlcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2F0X2tleWNoYW5nZSc6ICflt7Lorr7nva5bW0NhdGVnb3J5OiQxXV3nmoTmlrDmjpLluo/lrZfvvJpcIiQyXCInLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYXRfbm90Rm91bmQnOiAn5YiG57G74oCcJDHigJ3msqHmnInmib7liLAnLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYXRfZXhpc3RzJzogJ+WIhuexu+KAnCQx4oCd5bey57uP5a2Y5Zyo77yM5rKh5pyJ5re75Yqg44CCJyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2F0X3Jlc29sdmVkJzogJ++8iOmHjeWumuWQkVtbQ2F0ZWdvcnk6JDFdXeW3suWkhOeQhu+8iScsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLXVuY2F0X3JlbW92ZWQnOiAn5bey56e76Zmke3t1bmNhdGVnb3JpemVkfX0nLFxuXHRcdFx0Ly8gU29tZSB0ZXh0IHRvIHByZWZpeCB0byB0aGUgZWRpdCBzdW1tYXJ5LlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1wcmVmaXgnOiAn5L2/55SoW1tIOkhPVENBVHxIb3RDYXRdXScsXG5cdFx0XHQvLyBTb21lIHRleHQgdG8gYXBwZW5kIHRvIHRoZSBlZGl0IHN1bW1hcnkuIE5hbWVkICd1c2luZycgZm9yIGhpc3RvcmljYWwgcmVhc29ucy4gSWYgeW91IHByZWZlclxuXHRcdFx0Ly8gdG8gaGF2ZSBhIG1hcmtlciBhdCB0aGUgZnJvbnQsIHVzZSBwcmVmaXggYW5kIHNldCB0aGlzIHRvIHRoZSBlbXB0eSBzdHJpbmcuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLXVzaW5nJzogJycsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLW11bHRpX2NoYW5nZSc6ICckMeS4quWIhuexuycsXG5cdFx0XHQvLyBBbnkgY2F0ZWdvcnkgaW4gdGhpcyBjYXRlZ29yeSBpcyBkZWVtZWQgYSBkaXNhbWJpZ3VhdGlvbiBjYXRlZ29yeTsgaS5lLiwgYSBjYXRlZ29yeSB0aGF0IHNob3VsZCBub3QgY29udGFpblxuXHRcdFx0Ly8gYW55IGl0ZW1zLCBidXQgdGhhdCBjb250YWlucyBsaW5rcyB0byBvdGhlciBjYXRlZ29yaWVzIHdoZXJlIHN0dWZmIHNob3VsZCBiZSBjYXRlZ29yaXplZC4gSWYgeW91IGRvbid0IGhhdmVcblx0XHRcdC8vIHRoYXQgY29uY2VwdCBvbiB5b3VyIHdpa2ksIHNldCBpdCB0byBibGFuayBzdHJpbmcuIFVzZSBibGFua3MsIG5vdCB1bmRlcnNjb3Jlcy5cblx0XHRcdCdob3RjYXQtZGlzYW1iaWdfY2F0ZWdvcnknOiAnJyxcblx0XHRcdC8vIEFueSBjYXRlZ29yeSBpbiB0aGlzIGNhdGVnb3J5IGlzIGRlZW1lZCBhIChzb2Z0KSByZWRpcmVjdCB0byBzb21lIG90aGVyIGNhdGVnb3J5IGRlZmluZWQgYnkgYSBsaW5rXG5cdFx0XHQvLyB0byBhbm90aGVyIG5vbi1ibGFja2xpc3RlZCBjYXRlZ29yeS4gSWYgeW91ciB3aWtpIGRvZXNuJ3QgaGF2ZSBzb2Z0IGNhdGVnb3J5IHJlZGlyZWN0cywgc2V0IHRoaXMgdG8gbnVsbC5cblx0XHRcdC8vIElmIGEgc29mdC1yZWRpcmVjdGVkIGNhdGVnb3J5IGNvbnRhaW5zIG1vcmUgdGhhbiBvbmUgbGluayB0byBhbm90aGVyIG5vbi1ibGFja2xpc3RlZCBjYXRlZ29yeSwgaXQncyBjb25zaWRlcmVkXG5cdFx0XHQvLyBhIGRpc2FtYmlndWF0aW9uIGNhdGVnb3J5IGluc3RlYWQuXHRcdFx0J2hvdGNhdC1yZWRpcl9jYXRlZ29yeSc6ICflt7Lph43lrprlkJHnmoTliIbnsbsnLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1zZXBhcmF0b3InOiAnOyAnLFxuXHRcdFx0Ly8gJDEgaXMgcmVwbGFjZWQgYnkgYSBudW1iZXIuIElmIHlvdXIgbGFuZ3VhZ2UgaGFzIHNldmVyYWwgcGx1cmFsIGZvcm1zIChjLmYuIFtbOmVud2lraTpEdWFsIChncmFtbWF0aWNhbCBmb3JtKV1dKSxcblx0XHRcdC8vIHlvdSBjYW4gc2V0IHRoaXMgdG8gYW4gYXJyYXkgb2Ygc3RyaW5ncyBzdWl0YWJsZSBmb3IgcGFzc2luZyB0byBtdy5sYW5ndWFnZS5jb25maWdQbHVyYWwoKS5cblx0XHRcdC8vIElmIHRoYXQgZnVuY3Rpb24gZG9lc24ndCBleGlzdCwgSG90Q2F0IHdpbGwgc2ltcGx5IGZhbGwgYmFjayB0byB1c2luZyB0aGUgbGFzdFxuXHRcdFx0Ly8gZW50cnkgaW4gdGhlIGFycmF5LlxuXHRcdFx0Ly8gRGVmYXVsdHMgdG8gJ1tbJyArIGNhdGVnb3J5X2Nhbm9uaWNhbCArICc6JDFdXScuIENhbiBiZSBvdmVycmlkZGVuIGlmIGluIHRoZSBzaG9ydCBlZGl0IHN1bW1hcmllc1xuXHRcdFx0Ly8gbm90IHRoZSBzdGFuZGFyZCBjYXRlZ29yeSBuYW1lIHNob3VsZCBiZSB1c2VkIGJ1dCwgc2F5LCBhIHNob3J0ZXIgbmFtZXNwYWNlIGFsaWFzLiAkMSBpcyByZXBsYWNlZFxuXHRcdFx0Ly8gYnkgYSBjYXRlZ29yeSBuYW1lLlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnOiAnJDEnLFxuXHRcdFx0Ly8gQnV0dG9uIHRleHQuIExvY2FsaXplIHRvIHdnQ29udGVudExhbmd1YWdlIGhlcmU7IGxvY2FsaXplIHRvIHdnVXNlckxhbmd1YWdlIGluIGEgc3VicGFnZSxcblx0XHRcdC8vIHNlZSBsb2NhbGl6YXRpb24gaG9vayBiZWxvdy5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY29tbWl0JzogJ+S/neWtmCcsXG5cdFx0XHQvLyBCdXR0b24gdGV4dC4gTG9jYWxpemUgdG8gd2dDb250ZW50TGFuZ3VhZ2UgaGVyZTsgbG9jYWxpemUgdG8gd2dVc2VyTGFuZ3VhZ2UgaW4gYSBzdWJwYWdlLFxuXHRcdFx0Ly8gc2VlIGxvY2FsaXphdGlvbiBob29rIGJlbG93LlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1vayc6ICfnoa7lrponLFxuXHRcdFx0Ly8gQnV0dG9uIHRleHQuIExvY2FsaXplIHRvIHdnQ29udGVudExhbmd1YWdlIGhlcmU7IGxvY2FsaXplIHRvIHdnVXNlckxhbmd1YWdlIGluIGEgc3VicGFnZSxcblx0XHRcdC8vIHNlZSBsb2NhbGl6YXRpb24gaG9vayBiZWxvdy5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2FuY2VsJzogJ+WPlua2iCcsXG5cdFx0XHQvLyBMb2NhbGl6ZSB0byB3Z0NvbnRlbnRMYW5ndWFnZSBoZXJlOyBsb2NhbGl6ZSB0byB3Z1VzZXJMYW5ndWFnZSBpbiBhIHN1YnBhZ2UsXG5cdFx0XHQvLyBzZWUgbG9jYWxpemF0aW9uIGhvb2sgYmVsb3cuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLW11bHRpX2Vycm9yJzpcblx0XHRcdFx0J+aXoOazleS7juacjeWKoeWZqOWPluW+l+mhtemdouaWh+Wtl+OAguWboOatpO+8jOaCqOeahOWIhuexu+abtOaUueaXoOazleS/neWtmOOAguaIkeS7rOS4uuatpOS4jeS+v+ihqOekuuaKseatieOAgicsXG5cdFx0XHQvLyBQbHVyYWwgb2YgY2F0ZWdvcnlfY2Fub25pY2FsLlxuXHRcdFx0J2hvdGNhdC1jYXRlZ29yaWVzJzogJ+WIhuexuycsXG5cdFx0XHQvLyBOYW1lcyBmb3IgdGhlIHNlYXJjaCBlbmdpbmVzXG5cdFx0XHQnaG90Y2F0LWVuZ2luZV9uYW1lcy1zZWFyY2hpbmRleCc6ICfmkJzntKLntKLlvJUnLFxuXHRcdFx0J2hvdGNhdC1lbmdpbmVfbmFtZXMtcGFnZWxpc3QnOiAn6aG16Z2i5YiX6KGoJyxcblx0XHRcdCdob3RjYXQtZW5naW5lX25hbWVzLWNvbWJpbmVkJzogJ+WQiOW5tuaQnOe0oicsXG5cdFx0XHQnaG90Y2F0LWVuZ2luZV9uYW1lcy1zdWJjYXQnOiAn5a2Q5YiG57G7Jyxcblx0XHRcdCdob3RjYXQtZW5naW5lX25hbWVzLXBhcmVudGNhdCc6ICfkuIrlsYLliIbnsbsnLFxuXHRcdFx0Ly8gVGhlIHRvb2x0aXBzIGZvciB0aGUgYWJvdmUgbGlua3Ncblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtY2hhbmdlJzogJ+S/ruaUuScsXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLXJlbW92ZSc6ICfnp7vpmaQnLFxuXHRcdFx0J2hvdGNhdC10b29sdGlwcy1hZGQnOiAn5aKe5Yqg5LiA5Liq5paw5YiG57G7Jyxcblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtcmVzdG9yZSc6ICfmkqTplIDmm7TmlLknLFxuXHRcdFx0J2hvdGNhdC10b29sdGlwcy11bmRvJzogJ+aSpOmUgOabtOaUuScsXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLWRvd24nOiAn5omT5byA5Lul5L+u5pS55bm25pi+56S65a2Q5YiG57G7Jyxcblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtdXAnOiAn5omT5byA5Lul5L+u5pS55bm25pi+56S65LiK5bGC5YiG57G7Jyxcblx0XHRcdC8vIFRvb2x0aXAgZm9yIHRoZSBcImVudGVyIG11bHRpLW1vZGVcIiBsaW5rXG5cdFx0XHQnaG90Y2F0LW11bHRpX3Rvb2x0aXAnOiAn5L+u5pS55aSa5Liq5YiG57G7Jyxcblx0XHR9KTtcblx0fVxufTtcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuaW1wb3J0ICcuL21vZHVsZXMvY2hlY2snO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL21vZHVsZXMvZ2V0TWVzc2FnZSc7XG5pbXBvcnQge2hvdENhdE1lc3NhZ2VzfSBmcm9tICcuL21vZHVsZXMvbWVzc2FnZXMnO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIEFqYXgtYmFzZWQgc2ltcGxlIENhdGVnb3J5IG1hbmFnZXIuIEFsbG93cyBhZGRpbmcvcmVtb3ZpbmcvY2hhbmdpbmcgY2F0ZWdvcmllcyBvbiBhIHBhZ2Ugdmlldy5cbiAqIFN1cHBvcnRzIG11bHRpcGxlIGNhdGVnb3J5IGNoYW5nZXMsIGFzIHdlbGwgYXMgcmVkaXJlY3QgYW5kIGRpc2FtYmlndWF0aW9uIHJlc29sdXRpb24uIEFsc29cbiAqIHBsdWdzIGludG8gdGhlIHVwbG9hZCBmb3JtLiBTZWFyY2ggZW5naW5lcyB0byB1c2UgZm9yIHRoZSBzdWdnZXN0aW9uIGxpc3QgYXJlIGNvbmZpZ3VyYWJsZSwgYW5kXG4gKiBjYW4gYmUgc2VsZWN0ZWQgaW50ZXJhY3RpdmVseS5cbiAqXG4gKiBAc2VlIHtAbGluayBodHRwczovL2NvbW1vbnMud2lraW1lZGlhLm9yZy93aWtpL0hlbHA6R2FkZ2V0LUhvdENhdH1cbiAqIEBhdXRob3IgYXV0aG9ycyA8aHR0cHM6Ly9jb21tb25zLndpa2ltZWRpYS5vcmcvd2lraS9IZWxwOkdhZGdldC1Ib3RDYXQvVmVyc2lvbl9oaXN0b3J5PlxuICovXG4vLyBMb2FkIHRyYW5zbGF0aW9ucyBsb2NhbGx5XG5ob3RDYXRNZXNzYWdlcygpO1xuXG4vLyBNYWluIGJvZHlcbihmdW5jdGlvbiBob3RDYXQoKSB7XG5cdC8vIERvbid0IHVzZSBtdy5jb25maWcuZ2V0KCkgYXMgdGhhdCB0YWtlcyBhIGNvcHkgb2YgdGhlIGNvbmZpZywgYW5kIHNvIGRvZXNuJ3Rcblx0Ly8gYWNjb3VudCBmb3IgdmFsdWVzIGNoYW5naW5nLCBlLmcuIHdnQ3VyUmV2aXNpb25JZCBhZnRlciBhIFZFIGVkaXRcblx0Y29uc3QgY29uZiA9IG13LmNvbmZpZy52YWx1ZXM7XG5cdC8vIEd1YXJkIGFnYWluc3QgZG91YmxlIGluY2x1c2lvbnMgKGluIG9sZCBJRS9PcGVyYSBlbGVtZW50IGlkcyBiZWNvbWUgd2luZG93IHByb3BlcnRpZXMpXG5cdGlmICgod2luZG93LkhvdENhdCAmJiAhd2luZG93LkhvdENhdC5ub2RlTmFtZSkgfHwgY29uZi53Z0FjdGlvbiA9PT0gJ2VkaXQnKSB7XG5cdFx0cmV0dXJuOyAvLyBOb3Qgb24gZWRpdCBtb2RlXG5cdH1cblx0Ly8gSW5pdGlhbGl6ZSBNZWRpYVdpa2kgQVBJXG5cdGNvbnN0IGFwaSA9IGluaXRNd0FwaSgnSG90Q2F0LzMuMCcpO1xuXHQvLyBDb25maWd1cmF0aW9uIHN0dWZmLlxuXHR3aW5kb3cuSG90Q2F0ID0ge1xuXHRcdC8vIFRoZSBsaXR0bGUgbW9kaWZpY2F0aW9uIGxpbmtzIGRpc3BsYXllZCBhZnRlciBjYXRlZ29yeSBuYW1lcy4gVSsyMjEyIGlzIGEgbWludXMgc2lnbjsgVSsyMTkzIGFuZCBVKzIxOTEgYXJlXG5cdFx0Ly8gZG93bndhcmQgYW5kIHVwd2FyZCBwb2ludGluZyBhcnJvd3MuIERvIG5vdCB1c2Ug4oaTIGFuZCDihpEgaW4gdGhlIGNvZGUhXG5cdFx0bGlua3M6IHtcblx0XHRcdGNoYW5nZTogJyjCsSknLFxuXHRcdFx0cmVtb3ZlOiAnKFxcdTIyMTIpJyxcblx0XHRcdGFkZDogJygrKScsXG5cdFx0XHRyZXN0b3JlOiAnKMOXKScsXG5cdFx0XHR1bmRvOiAnKMOXKScsXG5cdFx0XHRkb3duOiAnKFxcdTIxOTMpJyxcblx0XHRcdHVwOiAnKFxcdTIxOTEpJyxcblx0XHR9LFxuXHRcdGNoYW5nZVRhZzogJ0hvdENhdCcsXG5cdFx0Ly8gVGhlIEhUTUwgY29udGVudCBvZiB0aGUgXCJlbnRlciBtdWx0aS1tb2RlXCIgbGluayBhdCB0aGUgZnJvbnQuXG5cdFx0YWRkbXVsdGk6ICc8c3Bhbj4rPHN1cD4rPC9zdXA+PC9zcGFuPicsXG5cdFx0Ly8gUmV0dXJuIHRydWUgdG8gZGlzYWJsZSBIb3RDYXQuXG5cdFx0ZGlzYWJsZTogKCkgPT4ge1xuXHRcdFx0Y29uc3QgbnMgPSBjb25mLndnTmFtZXNwYWNlTnVtYmVyO1xuXHRcdFx0Y29uc3QgbnNJZHMgPSBjb25mLndnTmFtZXNwYWNlSWRzO1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0bnMgPCAwIHx8XG5cdFx0XHRcdC8vIFNwZWNpYWwgcGFnZXM7IFNwZWNpYWw6VXBsb2FkIGlzIGhhbmRsZWQgZGlmZmVyZW50bHlcblx0XHRcdFx0bnMgPT09IDEwIHx8XG5cdFx0XHRcdC8vIFRlbXBsYXRlc1xuXHRcdFx0XHRucyA9PT0gODI4IHx8XG5cdFx0XHRcdC8vIE1vZHVsZSAoTHVhKVxuXHRcdFx0XHRucyA9PT0gOCB8fFxuXHRcdFx0XHQvLyBNZWRpYVdpa2lcblx0XHRcdFx0KG5zID09PSA2ICYmICFjb25mLndnQXJ0aWNsZUlkKSB8fFxuXHRcdFx0XHQvLyBOb24tZXhpc3RpbmcgZmlsZSBwYWdlc1xuXHRcdFx0XHQobnMgPT09IDIgJiYgL1xcLihqc3xjc3MpJC8udGVzdChjb25mLndnVGl0bGUpKSB8fFxuXHRcdFx0XHQvLyBVc2VyIHNjcmlwdHNcblx0XHRcdFx0KG5zSWRzICYmIChucyA9PT0gbnNJZHMuY3JlYXRvciB8fCBucyA9PT0gbnNJZHMudGltZWR0ZXh0IHx8IG5zID09PSBuc0lkcy5pbnN0aXR1dGlvbikpXG5cdFx0XHQpO1xuXHRcdH0sXG5cdFx0Ly8gQSByZWdleHAgbWF0Y2hpbmcgYSB0ZW1wbGF0ZXMgdXNlZCB0byBtYXJrIHVuY2F0ZWdvcml6ZWQgcGFnZXMsIGlmIHlvdXIgd2lraSBkb2VzIGhhdmUgdGhhdC5cblx0XHQvLyBJZiBub3QsIHNldCBpdCB0byBudWxsLlxuXHRcdHVuY2F0X3JlZ2V4cDogL3t7XFxzKltVdV1uY2F0ZWdvcml6ZWRcXHMqW159XSp9fVxccyooPCEtLS4qPy0tPlxccyopPy9nLFxuXHRcdC8vIFRoZSBpbWFnZXMgdXNlZCBmb3IgdGhlIGxpdHRsZSBpbmRpY2F0aW9uIGljb24uIFNob3VsZCBub3QgbmVlZCBjaGFuZ2luZy5cblx0XHRleGlzdHNZZXM6ICdodHRwczovL3R1Lnpob25nd2VuLndpa2kvaW1hZ2VzL3FpdXdlbmJhaWtlL3poL3RodW1iL2IvYmUvUF95ZXMuc3ZnLzIwcHgtUF95ZXMuc3ZnLnBuZycsXG5cdFx0ZXhpc3RzTm86ICdodHRwczovL3R1Lnpob25nd2VuLndpa2kvaW1hZ2VzL3FpdXdlbmJhaWtlL3poL3RodW1iLzQvNDIvUF9uby5zdmcvMjBweC1QX25vLnN2Zy5wbmcnLFxuXHRcdC8vIGEgbGlzdCBvZiBjYXRlZ29yaWVzIHdoaWNoIGNhbiBiZSByZW1vdmVkIGJ5IHJlbW92aW5nIGEgdGVtcGxhdGVcblx0XHQvLyBrZXk6IHRoZSBjYXRlZ29yeSB3aXRob3V0IG5hbWVzcGFjZVxuXHRcdC8vIHZhbHVlOiBBIHJlZ2V4cCBtYXRjaGluZyB0aGUgdGVtcGxhdGUgbmFtZSwgYWdhaW4gd2l0aG91dCBuYW1lc3BhY2Vcblx0XHQvLyBJZiB5b3UgZG9uJ3QgaGF2ZSB0aGlzIGF0IHlvdXIgd2lraSwgb3IgZG9uJ3Qgd2FudCB0aGlzLCBzZXQgaXQgdG8gYW4gZW1wdHkgb2JqZWN0IHt9LlxuXHRcdHRlbXBsYXRlX2NhdGVnb3JpZXM6IHt9LFxuXHRcdC8vIE92ZXJyaWRlIHRoZSBkZWNpc2lvbiBvZiB3aGV0aGVyIEhvdENhdCBzaG91bGQgaGVscCB1c2VycyBieSBhdXRvbWF0aWNhbGx5XG5cdFx0Ly8gY2FwaXRhbGlzaW5nIHRoZSB0aXRsZSBpbiB0aGUgdXNlciBpbnB1dCB0ZXh0IGlmIHRoZSB3aWtpIGhhcyBjYXNlLXNlbnNpdGl2ZSBwYWdlIG5hbWVzLlxuXHRcdC8vIEJhc2ljYWxseSwgdGhpcyB3aWxsIG1ha2UgYW4gQVBJIHF1ZXJ5IHRvIGNoZWNrIHRoZSBNZWRpYVdpa2kgY29uZmlndXJhdGlvbiBhbmQgSG90Q2F0IHRoZW4gc2V0c1xuXHRcdC8vIHRoaXMgdG8gdHJ1ZSBmb3IgbW9zdCB3aWtpcywgYW5kIHRvIGZhbHNlIG9uIFdpa3Rpb25hcnkuXG5cdFx0Ly9cblx0XHQvLyBZb3UgY2FuIHNldCB0aGlzIGRpcmVjdGx5IGlmIHRoZXJlIGlzIGEgcHJvYmxlbSB3aXRoIGl0LiBGb3IgZXhhbXBsZSwgR2VvcmdpYW4gV2lraXBlZGlhIChrYXdpa2kpLFxuXHRcdC8vIGlzIGtub3duIHRvIGhhdmUgZGlmZmVyZW50IGNhcGl0YWxpc2F0aW9uIGxvZ2ljIGJldHdlZW4gTWVkaWFXaWtpIFBIUCBhbmQgSmF2YVNjcmlwdC4gQXMgc3VjaCwgYXV0b21hdGljXG5cdFx0Ly8gY2FzZSBjaGFuZ2VzIGluIEphdmFTY3JpcHQgYnkgSG90Q2F0IHdvdWxkIGJlIHdyb25nLlxuXHRcdGNhcGl0YWxpemVQYWdlTmFtZXM6IG51bGwsXG5cdFx0Ly8gSWYgdXBsb2FkX2Rpc2FibGVkIGlzIHRydWUsIEhvdENhdCB3aWxsIG5vdCBiZSB1c2VkIG9uIHRoZSBVcGxvYWQgZm9ybS5cblx0XHR1cGxvYWRfZGlzYWJsZWQ6IGZhbHNlLFxuXHRcdC8vIFNpbmdsZSByZWd1bGFyIGV4cHJlc3Npb24gbWF0Y2hpbmcgYmxhY2tsaXN0ZWQgY2F0ZWdvcmllcyB0aGF0IGNhbm5vdCBiZSBjaGFuZ2VkIG9yXG5cdFx0Ly8gYWRkZWQgdXNpbmcgSG90Q2F0LiBGb3IgaW5zdGFuY2UgL1xcYnN0dWJzPyQvIChhbnkgY2F0ZWdvcnkgZW5kaW5nIHdpdGggdGhlIHdvcmQgXCJzdHViXCJcblx0XHQvLyBvciBcInN0dWJzXCIpLCBvciAvKFxcYnN0dWJzPyQpfFxcYm1haW50ZW5hbmNlXFxiLyAoc3R1YiBjYXRlZ29yaWVzIGFuZCBhbnkgY2F0ZWdvcnkgd2l0aCB0aGVcblx0XHQvLyB3b3JkIFwibWFpbnRlbmFuY2VcIiBpbiBpdHMgdGl0bGUuXG5cdFx0YmxhY2tsaXN0OiBudWxsLFxuXHRcdC8vIFN0dWZmIGNoYW5nZWFibGUgYnkgdXNlcnM6XG5cdFx0Ly8gQmFja2dyb3VuZCBmb3IgY2hhbmdlZCBjYXRlZ29yaWVzIGluIG11bHRpLWVkaXQgbW9kZS4gRGVmYXVsdCBpcyBhIHZlcnkgbGlnaHQgc2FsbW9uIHBpbmsuXG5cdFx0YmdfY2hhbmdlZDogJyNGQ0EnLFxuXHRcdC8vIElmIHRydWUsIEhvdENhdCB3aWxsIG5ldmVyIGF1dG9tYXRpY2FsbHkgc3VibWl0IGNoYW5nZXMuIEhvdENhdCB3aWxsIG9ubHkgb3BlbiBhbiBlZGl0IHBhZ2Ugd2l0aFxuXHRcdC8vIHRoZSBjaGFuZ2VzOyB1c2VycyBtdXN0IGFsd2F5cyBzYXZlIGV4cGxpY2l0bHkuXG5cdFx0bm9fYXV0b2NvbW1pdDogZmFsc2UsXG5cdFx0Ly8gSWYgdHJ1ZSwgdGhlIFwiY2F0ZWdvcnkgZGVsZXRpb25cIiBsaW5rIFwiKC0pXCIgd2lsbCBuZXZlciBzYXZlIGF1dG9tYXRpY2FsbHkgYnV0IGFsd2F5cyBzaG93IGFuXG5cdFx0Ly8gZWRpdCBwYWdlIHdoZXJlIHRoZSB1c2VyIGhhcyB0byBzYXZlIHRoZSBlZGl0IG1hbnVhbGx5LiBJcyBmYWxzZSBieSBkZWZhdWx0IGJlY2F1c2UgdGhhdCdzIHRoZVxuXHRcdC8vIHRyYWRpdGlvbmFsIGJlaGF2aW9yLiBUaGlzIHNldHRpbmcgb3ZlcnJpZGVzIG5vX2F1dG9jb21taXQgZm9yIFwiKC0pXCIgbGlua3MuXG5cdFx0ZGVsX25lZWRzX2RpZmY6IGZhbHNlLFxuXHRcdC8vIFRpbWUsIGluIG1pbGxpc2Vjb25kcywgdGhhdCBIb3RDYXQgd2FpdHMgYWZ0ZXIgYSBrZXlzdHJva2UgYmVmb3JlIG1ha2luZyBhIHJlcXVlc3QgdG8gdGhlXG5cdFx0Ly8gc2VydmVyIHRvIGdldCBzdWdnZXN0aW9ucy5cblx0XHRzdWdnZXN0X2RlbGF5OiAxMDAwLFxuXHRcdC8vIERlZmF1bHQgd2lkdGgsIGluIGNoYXJhY3RlcnMsIG9mIHRoZSB0ZXh0IGlucHV0IGZpZWxkLlxuXHRcdGVkaXRib3hfd2lkdGg6IDQwLFxuXHRcdC8vIE9uZSBvZiB0aGUgZW5naW5lX25hbWVzIGFib3ZlLCB0byBiZSB1c2VkIGFzIHRoZSBkZWZhdWx0IHN1Z2dlc3Rpb24gZW5naW5lLlxuXHRcdHN1Z2dlc3Rpb25zOiAnY29tYmluZWQnLFxuXHRcdC8vIElmIHRydWUsIGFsd2F5cyB1c2UgdGhlIGRlZmF1bHQgZW5naW5lLCBhbmQgbmV2ZXIgZGlzcGxheSBhIHNlbGVjdG9yLlxuXHRcdGZpeGVkX3NlYXJjaDogZmFsc2UsXG5cdFx0Ly8gSWYgZmFsc2UsIGRvIG5vdCBkaXNwbGF5IHRoZSBcInVwXCIgYW5kIFwiZG93blwiIGxpbmtzXG5cdFx0dXNlX3VwX2Rvd246IHRydWUsXG5cdFx0Ly8gRGVmYXVsdCBsaXN0IHNpemVcblx0XHRsaXN0U2l6ZTogMTAsXG5cdFx0Ly8gSWYgdHJ1ZSwgc2luZ2xlIGNhdGVnb3J5IGNoYW5nZXMgYXJlIG1hcmtlZCBhcyBtaW5vciBlZGl0cy4gSWYgZmFsc2UsIHRoZXkncmUgbm90LlxuXHRcdHNpbmdsZV9taW5vcjogdHJ1ZSxcblx0XHQvLyBJZiB0cnVlLCBuZXZlciBhZGQgYSBwYWdlIHRvIHRoZSB1c2VyJ3Mgd2F0Y2hsaXN0LiBJZiBmYWxzZSwgcGFnZXMgZ2V0IGFkZGVkIHRvIHRoZSB3YXRjaGxpc3QgaWZcblx0XHQvLyB0aGUgdXNlciBoYXMgdGhlIFwiQWRkIHBhZ2VzIEkgZWRpdCB0byBteSB3YXRjaGxpc3RcIiBvciB0aGUgXCJBZGQgcGFnZXMgSSBjcmVhdGUgdG8gbXkgd2F0Y2hsaXN0XCJcblx0XHQvLyBvcHRpb25zIGluIGhpcyBvciBoZXIgcHJlZmVyZW5jZXMgc2V0LlxuXHRcdGRvbnRfYWRkX3RvX3dhdGNobGlzdDogZmFsc2UsXG5cdFx0c2hvcnRjdXRzOiBudWxsLFxuXHRcdGFkZFNob3J0Y3V0czogKG1hcCkgPT4ge1xuXHRcdFx0bGV0IF9hO1xuXHRcdFx0aWYgKCFtYXApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0KF9hID0gd2luZG93LkhvdENhdCkuc2hvcnRjdXRzIHx8IChfYS5zaG9ydGN1dHMgPSB7fSk7XG5cdFx0XHRmb3IgKGxldCBrIGluIG1hcCkge1xuXHRcdFx0XHRpZiAoIU9iamVjdC5oYXNPd24obWFwLCBrKSB8fCB0eXBlb2YgayAhPT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRsZXQgdiA9IG1hcFtrXTtcblx0XHRcdFx0aWYgKHR5cGVvZiB2ICE9PSAnc3RyaW5nJykge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGsgPSBrLnRyaW0oKTtcblx0XHRcdFx0diA9IHYudHJpbSgpO1xuXHRcdFx0XHRpZiAoay5sZW5ndGggPT09IDAgfHwgdi5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHR3aW5kb3cuSG90Q2F0LnNob3J0Y3V0c1trXSA9IHY7XG5cdFx0XHR9XG5cdFx0fSxcblx0fTtcblx0Y29uc3QgSEMgPSB3aW5kb3cuSG90Q2F0O1xuXHQvLyBNb3JlIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LiBXZSBoYXZlIGEgZmV3IHBsYWNlcyB3aGVyZSB3ZSB0ZXN0IGZvciB0aGUgYnJvd3Nlcjogb25jZSBmb3Jcblx0Ly8gU2FmYXJpIDwgMy4wLCBhbmQgdHdpY2UgZm9yIFdlYktpdCAoQ2hyb21lIG9yIFNhZmFyaSwgYW55IHZlcnNpb25zKVxuXHRjb25zdCB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcblx0Y29uc3QgaXNfd2Via2l0ID0gL2FwcGxld2Via2l0XFwvXFxkKy8udGVzdCh1YSkgJiYgIXVhLmluY2x1ZGVzKCdzcG9vZmVyJyk7XG5cdGxldCBjYXRfcHJlZml4ID0gbnVsbDtcblx0bGV0IG5vU3VnZ2VzdGlvbnMgPSBmYWxzZTtcblx0Ly8gTm8gZnVydGhlciBjaGFuZ2VzIHNob3VsZCBiZSBuZWNlc3NhcnkgaGVyZS5cblx0Ly8gVGhlIGZvbGxvd2luZyByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5ncyBhcmUgdXNlZCB3aGVuIHNlYXJjaGluZyBmb3IgY2F0ZWdvcmllcyBpbiB3aWtpdGV4dC5cblx0Y29uc3Qgd2lraVRleHRCbGFuayA9ICdbXFxcXHQgX1xcXFx4QTBcXFxcdTE2ODBcXFxcdTE4MEVcXFxcdTIwMDAtXFxcXHUyMDBBXFxcXHUyMDI4XFxcXHUyMDI5XFxcXHUyMDJGXFxcXHUyMDVGXFxcXHUzMDAwXSsnO1xuXHRjb25zdCB3aWtpVGV4dEJsYW5rUkUgPSBuZXcgUmVnRXhwKHdpa2lUZXh0QmxhbmssICdnJyk7XG5cdC8vIFJlZ2V4cCBmb3IgaGFuZGxpbmcgYmxhbmtzIGluc2lkZSBhIGNhdGVnb3J5IHRpdGxlIG9yIG5hbWVzcGFjZSBuYW1lLlxuXHQvLyBTZWUge0BsaW5rIGh0dHA6Ly9zdm4ud2lraW1lZGlhLm9yZy92aWV3dmMvbWVkaWF3aWtpL3RydW5rL3BoYXNlMy9pbmNsdWRlcy9UaXRsZS5waHA/cmV2aXNpb249MTA0MDUxJnZpZXc9bWFya3VwI2wyNzIyfVxuXHQvLyBTZWUgYWxzbyB7QGxpbmsgaHR0cDovL3d3dy5maWxlZm9ybWF0LmluZm8vaW5mby91bmljb2RlL2NhdGVnb3J5L1pzL2xpc3QuaHRtfVxuXHQvLyAgIE1lZGlhV2lraSBjb2xsYXBzZXMgc2V2ZXJhbCBjb250aWd1b3VzIGJsYW5rcyBpbnNpZGUgYSBwYWdlIHRpdGxlIHRvIG9uZSBzaW5nbGUgYmxhbmsuIEl0IGFsc28gcmVwbGFjZSBhXG5cdC8vIG51bWJlciBvZiBzcGVjaWFsIHdoaXRlc3BhY2UgY2hhcmFjdGVycyBieSBzaW1wbGUgYmxhbmtzLiBBbmQgZmluYWxseSwgYmxhbmtzIGFyZSB0cmVhdGVkIGFzIHVuZGVyc2NvcmVzLlxuXHQvLyBUaGVyZWZvcmUsIHdoZW4gbG9va2luZyBmb3IgcGFnZSB0aXRsZXMgaW4gd2lraXRleHQsIHdlIG11c3QgaGFuZGxlIGFsbCB0aGVzZSBjYXNlcy5cblx0Ly8gICBOb3RlOiB3ZSBfZG9fIGluY2x1ZGUgdGhlIGhvcml6b250YWwgdGFiIGluIHRoZSBhYm92ZSBsaXN0LCBldmVuIHRob3VnaCB0aGUgTWVkaWFXaWtpIHNvZnR3YXJlIGZvciBzb21lIHJlYXNvblxuXHQvLyBhcHBlYXJzIHRvIG5vdCBoYW5kbGUgaXQuIFRoZSB6ZXJvLXdpZHRoIHNwYWNlIFxcdTIwMEIgaXMgX25vdF8gaGFuZGxlZCBhcyBhIHNwYWNlIGluc2lkZSB0aXRsZXMgYnkgTVcuXG5cdGNvbnN0IHdpa2lUZXh0QmxhbmtPckJpZGkgPSAnW1xcXFx0IF9cXFxceEEwXFxcXHUxNjgwXFxcXHUxODBFXFxcXHUyMDAwLVxcXFx1MjAwQlxcXFx1MjAwRVxcXFx1MjAwRlxcXFx1MjAyOC1cXFxcdTIwMkZcXFxcdTIwNUZcXFxcdTMwMDBdKic7XG5cdC8vIFdoaXRlc3BhY2UgcmVnZXhwIGZvciBoYW5kbGluZyB3aGl0ZXNwYWNlIGJldHdlZW4gbGluayBjb21wb25lbnRzLiBJbmNsdWRpbmcgdGhlIGhvcml6b250YWwgdGFiLCBidXQgbm90IFxcblxcclxcZlxcdjpcblx0Ly8gYSBsaW5rIG11c3QgYmUgb24gb25lIHNpbmdsZSBsaW5lLlxuXHQvLyAgIE1lZGlhV2lraSBhbHNvIHJlbW92ZXMgVW5pY29kZSBiaWRpIG92ZXJyaWRlIGNoYXJhY3RlcnMgaW4gcGFnZSB0aXRsZXMgKGFuZCBuYW1lc3BhY2UgbmFtZXMpIGNvbXBsZXRlbHkuXG5cdC8vIFRoaXMgaXMgKm5vdCogaGFuZGxlZCwgYXMgaXQgd291bGQgcmVxdWlyZSB1cyB0byBhbGxvdyBhbnkgb2YgW1xcdTIwMEVcXHUyMDBGXFx1MjAyQS1cXHUyMDJFXSBiZXR3ZWVuIGFueSB0d29cblx0Ly8gY2hhcmFjdGVycyBpbnNpZGUgYSBjYXRlZ29yeSBsaW5rLiBJdCBfY291bGRfIGJlIGRvbmUgdGhvdWdoLi4uIFdlIF9kb18gaGFuZGxlIHN0cmFuZ2Ugc3BhY2VzLCBpbmNsdWRpbmcgdGhlXG5cdC8vIHplcm8td2lkdGggc3BhY2UgXFx1MjAwQiwgYW5kIGJpZGkgb3ZlcnJpZGVzIGJldHdlZW4gdGhlIGNvbXBvbmVudHMgb2YgYSBjYXRlZ29yeSBsaW5rIChhZGphY2VudCB0byB0aGUgY29sb24sXG5cdC8vIG9yIGFkamFjZW50IHRvIGFuZCBpbnNpZGUgb2YgXCJbW1wiIGFuZCBcIl1dXCIpLlxuXHQvLyBGaXJzdCBhdXRvLWxvY2FsaXplIHRoZSByZWdleHBzIGZvciB0aGUgY2F0ZWdvcnkgYW5kIHRoZSB0ZW1wbGF0ZSBuYW1lc3BhY2VzLlxuXHRjb25zdCBmb3JtYXR0ZWROYW1lc3BhY2VzID0gY29uZi53Z0Zvcm1hdHRlZE5hbWVzcGFjZXM7XG5cdGNvbnN0IG5hbWVzcGFjZUlkcyA9IGNvbmYud2dOYW1lc3BhY2VJZHM7XG5cdGNvbnN0IGF1dG9Mb2NhbGl6ZSA9IChuYW1lc3BhY2VOdW1iZXIsIGZhbGxiYWNrKSA9PiB7XG5cdFx0Y29uc3QgY3JlYXRlUmVnZXhwU3RyID0gKG5hbWUpID0+IHtcblx0XHRcdGlmICghbmFtZSB8fCBuYW1lLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRsZXQgcmVnZXhfbmFtZSA9ICcnO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBuYW1lLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGNvbnN0IGluaXRpYWwgPSBuYW1lLmNoYXJBdChpKTtcblx0XHRcdFx0Y29uc3QgbGwgPSBpbml0aWFsLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdGNvbnN0IHVsID0gaW5pdGlhbC50b1VwcGVyQ2FzZSgpO1xuXHRcdFx0XHRyZWdleF9uYW1lICs9IGxsID09PSB1bCA/IGluaXRpYWwgOiBgWyR7bGx9JHt1bH1dYDtcblx0XHRcdH1cblx0XHRcdHJldHVybiByZWdleF9uYW1lLnJlcGxhY2UoLyhbJCgpKisuP1xcXFxeXSkvZywgJ1xcXFwkMScpLnJlcGxhY2Uod2lraVRleHRCbGFua1JFLCB3aWtpVGV4dEJsYW5rKTtcblx0XHR9O1xuXHRcdGZhbGxiYWNrID0gZmFsbGJhY2sudG9Mb3dlckNhc2UoKTtcblx0XHRjb25zdCBjYW5vbmljYWwgPSBmb3JtYXR0ZWROYW1lc3BhY2VzW1N0cmluZyhuYW1lc3BhY2VOdW1iZXIpXS50b0xvd2VyQ2FzZSgpO1xuXHRcdGxldCByZWdleHAgPSBjcmVhdGVSZWdleHBTdHIoY2Fub25pY2FsKTtcblx0XHRpZiAoZmFsbGJhY2sgJiYgY2Fub25pY2FsICE9PSBmYWxsYmFjaykge1xuXHRcdFx0cmVnZXhwICs9IGB8JHtjcmVhdGVSZWdleHBTdHIoZmFsbGJhY2spfWA7XG5cdFx0fVxuXHRcdGlmIChuYW1lc3BhY2VJZHMpIHtcblx0XHRcdGZvciAoY29uc3QgY2F0X25hbWUgaW4gbmFtZXNwYWNlSWRzKSB7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHR0eXBlb2YgY2F0X25hbWUgPT09ICdzdHJpbmcnICYmXG5cdFx0XHRcdFx0Y2F0X25hbWUudG9Mb3dlckNhc2UoKSAhPT0gY2Fub25pY2FsICYmXG5cdFx0XHRcdFx0Y2F0X25hbWUudG9Mb3dlckNhc2UoKSAhPT0gZmFsbGJhY2sgJiZcblx0XHRcdFx0XHRuYW1lc3BhY2VJZHNbY2F0X25hbWVdID09PSBuYW1lc3BhY2VOdW1iZXJcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0cmVnZXhwICs9IGB8JHtjcmVhdGVSZWdleHBTdHIoY2F0X25hbWUpfWA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJlZ2V4cDtcblx0fTtcblx0SEMuY2F0ZWdvcnlfY2Fub25pY2FsID0gZm9ybWF0dGVkTmFtZXNwYWNlc1snMTQnXTtcblx0SEMuY2F0ZWdvcnlfcmVnZXhwID0gYXV0b0xvY2FsaXplKDE0LCAnY2F0ZWdvcnknKTtcblx0aWYgKGZvcm1hdHRlZE5hbWVzcGFjZXNbJzEwJ10pIHtcblx0XHRIQy50ZW1wbGF0ZV9yZWdleHAgPSBhdXRvTG9jYWxpemUoMTAsICd0ZW1wbGF0ZScpO1xuXHR9XG5cdC8vIFV0aWxpdHkgZnVuY3Rpb25zLiBZZXMsIHRoaXMgZHVwbGljYXRlcyBzb21lIGZ1bmN0aW9uYWxpdHkgdGhhdCBhbHNvIGV4aXN0cyBpbiBvdGhlciBwbGFjZXMsIGJ1dFxuXHQvLyB0byBrZWVwIHRoaXMgd2hvbGUgc3R1ZmYgaW4gYSBzaW5nbGUgZmlsZSBub3QgZGVwZW5kaW5nIG9uIGFueSBvdGhlciBvbi13aWtpIEphdmFTY3JpcHRzLCB3ZSByZS1kb1xuXHQvLyB0aGVzZSBmZXcgb3BlcmF0aW9ucyBoZXJlLlxuXHRjb25zdCBtYWtlID0gKGFyZywgbGl0ZXJhbCkgPT4ge1xuXHRcdGlmICghYXJnKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0cmV0dXJuIGxpdGVyYWwgPyBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShhcmcpIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudChhcmcpO1xuXHR9O1xuXHRjb25zdCBwYXJhbSA9IChuYW1lLCB1cmkpID0+IHtcblx0XHR1cmkgfHw9IGRvY3VtZW50LmxvY2F0aW9uLmhyZWY7XG5cdFx0Y29uc3QgcmUgPSBuZXcgUmVnRXhwKGBbJj9dJHtuYW1lfT0oW14mI10qKWApO1xuXHRcdGNvbnN0IG0gPSByZS5leGVjKHVyaSk7XG5cdFx0aWYgKG0gJiYgbS5sZW5ndGggPiAxKSB7XG5cdFx0XHRyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KG1bMV0pO1xuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fTtcblx0Y29uc3QgdGl0bGUgPSAoaHJlZikgPT4ge1xuXHRcdGlmICghaHJlZikge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGNvbnN0IHNjcmlwdCA9IGAke2NvbmYud2dTY3JpcHR9P2A7XG5cdFx0aWYgKFxuXHRcdFx0aHJlZi5pbmRleE9mKHNjcmlwdCkgPT09IDAgfHxcblx0XHRcdGhyZWYuaW5kZXhPZihjb25mLndnU2VydmVyICsgc2NyaXB0KSA9PT0gMCB8fFxuXHRcdFx0KGNvbmYud2dTZXJ2ZXIuc2xpY2UoMCwgMikgPT09ICcvLycgJiZcblx0XHRcdFx0aHJlZi5pbmRleE9mKGRvY3VtZW50LmxvY2F0aW9uLnByb3RvY29sICsgY29uZi53Z1NlcnZlciArIHNjcmlwdCkgPT09IDApXG5cdFx0KSB7XG5cdFx0XHQvLyBocmVmPVwiL2luZGV4LnBocD90aXRsZT0uLi5cIlxuXHRcdFx0cmV0dXJuIHBhcmFtKCd0aXRsZScsIGhyZWYpO1xuXHRcdH1cblx0XHQvLyBocmVmPVwiL3dpa2kvLi4uXCJcblx0XHRsZXQgcHJlZml4ID0gY29uZi53Z0FydGljbGVQYXRoLnJlcGxhY2UoJyQxJywgJycpO1xuXHRcdGlmIChocmVmLmluZGV4T2YocHJlZml4KSkge1xuXHRcdFx0cHJlZml4ID0gY29uZi53Z1NlcnZlciArIHByZWZpeDtcblx0XHR9IC8vIEZ1bGx5IGV4cGFuZGVkIFVSTD9cblx0XHRpZiAoaHJlZi5pbmRleE9mKHByZWZpeCkgJiYgcHJlZml4LnNsaWNlKDAsIDIpID09PSAnLy8nKSB7XG5cdFx0XHRwcmVmaXggPSBkb2N1bWVudC5sb2NhdGlvbi5wcm90b2NvbCArIHByZWZpeDtcblx0XHR9IC8vIFByb3RvY29sLXJlbGF0aXZlIHdnU2VydmVyP1xuXHRcdGlmIChocmVmLmluZGV4T2YocHJlZml4KSA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChocmVmLnNsaWNlKHByZWZpeC5sZW5ndGgpKTtcblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH07XG5cdGNvbnN0IGhhc0NsYXNzID0gKHtjbGFzc05hbWV9LCBuYW1lKSA9PiB7XG5cdFx0cmV0dXJuIGAgJHtjbGFzc05hbWV9IGAuaW5jbHVkZXMoYCAke25hbWV9IGApO1xuXHR9O1xuXHRjb25zdCBjYXBpdGFsaXplID0gKHN0cikgPT4ge1xuXHRcdGlmICghc3RyIHx8IHN0ci5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiBzdHI7XG5cdFx0fVxuXHRcdHJldHVybiBzdHIuc2xpY2UoMCwgMSkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcblx0fTtcblx0Y29uc3Qgd2lraVBhZ2VQYXRoID0gKHBhZ2VOYW1lKSA9PiB7XG5cdFx0cmV0dXJuIGNvbmYud2dBcnRpY2xlUGF0aC5yZXBsYWNlKCckMScsIGVuY29kZVVSSUNvbXBvbmVudChwYWdlTmFtZSkucmVwbGFjZSgvJTNBL2csICc6JykucmVwbGFjZSgvJTJGL2csICcvJykpO1xuXHR9O1xuXHRjb25zdCBlc2NhcGVSRSA9IChzdHIpID0+IHtcblx0XHRyZXR1cm4gc3RyLnJlcGxhY2UoLyhbJCgpKisuP1tcXFxcXFxdXl0pL2csICdcXFxcJDEnKTtcblx0fTtcblx0Y29uc3Qgc3Vic3RpdHV0ZUZhY3RvcnkgPSAob3B0aW9ucykgPT4ge1xuXHRcdG9wdGlvbnMgfHw9IHt9O1xuXHRcdGNvbnN0IGxlYWQgPSBvcHRpb25zLmluZGljYXRvciB8fCAnJCc7XG5cdFx0Y29uc3QgaW5kaWNhdG9yID0gZXNjYXBlUkUobGVhZCk7XG5cdFx0Y29uc3QgbGJyYWNlID0gZXNjYXBlUkUob3B0aW9ucy5sYnJhY2UgfHwgJ3snKTtcblx0XHRjb25zdCByYnJhY2UgPSBlc2NhcGVSRShvcHRpb25zLnJicmFjZSB8fCAnfScpO1xuXHRcdGNvbnN0IHJlID0gbmV3IFJlZ0V4cChcblx0XHRcdC8vICQkXG5cdFx0XHRgKD86JHtpbmRpY2F0b3J9KCR7aW5kaWNhdG9yfSkpfGAgK1xuXHRcdFx0XHQvLyAkMCwgJDFcblx0XHRcdFx0YCg/OiR7aW5kaWNhdG9yfShcXFxcZCspKXxgICtcblx0XHRcdFx0Ly8gJHtrZXl9XG5cdFx0XHRcdGAoPzoke2luZGljYXRvcn0oPzoke2xicmFjZX0oW14ke2xicmFjZX0ke3JicmFjZX1dKykke3JicmFjZX0pKXxgICtcblx0XHRcdFx0Ly8gJGtleSAob25seSBpZiBmaXJzdCBjaGFyIGFmdGVyICQgaXMgbm90ICQsIGRpZ2l0LCBvciB7IClcblx0XHRcdFx0YCg/OiR7aW5kaWNhdG9yfSg/ISg/Olske2luZGljYXRvcn0ke2xicmFjZX1dfFxcXFxkKSkoXFxcXFMrPylcXFxcYilgLFxuXHRcdFx0J2cnXG5cdFx0KTtcblx0XHQvLyBSZXBsYWNlICQxLCAkMiwgb3IgJHtrZXkxfSwgJHtrZXkyfSwgb3IgJGtleTEsICRrZXkyIGJ5IHZhbHVlcyBmcm9tIG1hcC4gJCQgaXMgcmVwbGFjZWQgYnkgYSBzaW5nbGUgJC5cblx0XHRyZXR1cm4gKHN0ciwgbWFwKSA9PiB7XG5cdFx0XHRpZiAoIW1hcCkge1xuXHRcdFx0XHRyZXR1cm4gc3RyO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHN0ci5yZXBsYWNlKHJlLCAobWF0Y2gsIHByZWZpeCwgaWR4LCBrZXksIGFscGhhKSA9PiB7XG5cdFx0XHRcdGlmIChwcmVmaXggPT09IGxlYWQpIHtcblx0XHRcdFx0XHRyZXR1cm4gbGVhZDtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBrID0gYWxwaGEgfHwga2V5IHx8IGlkeDtcblx0XHRcdFx0Y29uc3QgcmVwbGFjZW1lbnQgPSB0eXBlb2YgbWFwW2tdID09PSAnZnVuY3Rpb24nID8gbWFwW2tdKG1hdGNoLCBrKSA6IG1hcFtrXTtcblx0XHRcdFx0cmV0dXJuIHR5cGVvZiByZXBsYWNlbWVudCA9PT0gJ3N0cmluZycgPyByZXBsYWNlbWVudCA6IHJlcGxhY2VtZW50IHx8IG1hdGNoO1xuXHRcdFx0fSk7XG5cdFx0fTtcblx0fTtcblx0Y29uc3QgcmVwbGFjZVNob3J0Y3V0cyA9ICgoKSA9PiB7XG5cdFx0Y29uc3QgcmVwbGFjZUhhc2ggPSBzdWJzdGl0dXRlRmFjdG9yeSh7XG5cdFx0XHRpbmRpY2F0b3I6ICcjJyxcblx0XHRcdGxicmFjZTogJ1snLFxuXHRcdFx0cmJyYWNlOiAnXScsXG5cdFx0fSk7XG5cdFx0cmV0dXJuIChzdHIsIG1hcCkgPT4ge1xuXHRcdFx0Y29uc3QgcyA9IHJlcGxhY2VIYXNoKHN0ciwgbWFwKTtcblx0XHRcdHJldHVybiBIQy5jYXBpdGFsaXplUGFnZU5hbWVzID8gY2FwaXRhbGl6ZShzKSA6IHM7XG5cdFx0fTtcblx0fSkoKTtcblx0Ly8gVGV4dCBtb2RpZmljYXRpb25cblx0Y29uc3QgZmluZENhdHNSRSA9IG5ldyBSZWdFeHAoXG5cdFx0YFxcXFxbXFxcXFske3dpa2lUZXh0QmxhbmtPckJpZGl9KD86JHtIQy5jYXRlZ29yeV9yZWdleHB9KSR7d2lraVRleHRCbGFua09yQmlkaX06W15cXFxcXV0rXFxcXF1cXFxcXWAsXG5cdFx0J2cnXG5cdCk7XG5cdGNvbnN0IHJlcGxhY2VCeUJsYW5rcyA9IChtYXRjaCkgPT4ge1xuXHRcdHJldHVybiBtYXRjaC5yZXBsYWNlKC8oXFxzfFxcUykvZywgJyAnKTtcblx0fTsgLy8gLy4vIGRvZXNuJ3QgbWF0Y2ggbGluZWJyZWFrcy4gLyhcXHN8XFxTKS8gZG9lcy5cblx0Y29uc3QgZmluZF9jYXRlZ29yeSA9ICh3aWtpdGV4dCwgY2F0ZWdvcnksIG9uY2UpID0+IHtcblx0XHRsZXQgY2F0X3JlZ2V4ID0gbnVsbDtcblx0XHRpZiAoSEMudGVtcGxhdGVfY2F0ZWdvcmllc1tjYXRlZ29yeV0pIHtcblx0XHRcdGNhdF9yZWdleCA9IG5ldyBSZWdFeHAoXG5cdFx0XHRcdGBcXFxce1xcXFx7JHt3aWtpVGV4dEJsYW5rT3JCaWRpfSgke0hDLnRlbXBsYXRlX3JlZ2V4cH0oPz0ke3dpa2lUZXh0QmxhbmtPckJpZGl9OikpPyR7d2lraVRleHRCbGFua09yQmlkaX0oPzoke0hDLnRlbXBsYXRlX2NhdGVnb3JpZXNbY2F0ZWdvcnldfSkke3dpa2lUZXh0QmxhbmtPckJpZGl9KFxcXFx8Lio/KT9cXFxcfVxcXFx9YCxcblx0XHRcdFx0J2cnXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCBjYXRfbmFtZSA9IGVzY2FwZVJFKGNhdGVnb3J5KTtcblx0XHRcdGNvbnN0IGluaXRpYWwgPSBjYXRfbmFtZS5zbGljZSgwLCAxKTtcblx0XHRcdGNhdF9yZWdleCA9IG5ldyBSZWdFeHAoXG5cdFx0XHRcdGBcXFxcW1xcXFxbJHt3aWtpVGV4dEJsYW5rT3JCaWRpfSgke0hDLmNhdGVnb3J5X3JlZ2V4cH0pJHt3aWtpVGV4dEJsYW5rT3JCaWRpfToke3dpa2lUZXh0QmxhbmtPckJpZGl9JHtcblx0XHRcdFx0XHRpbml0aWFsID09PSAnXFxcXCcgfHwgIUhDLmNhcGl0YWxpemVQYWdlTmFtZXNcblx0XHRcdFx0XHRcdD8gaW5pdGlhbFxuXHRcdFx0XHRcdFx0OiBgWyR7aW5pdGlhbC50b1VwcGVyQ2FzZSgpfSR7aW5pdGlhbC50b0xvd2VyQ2FzZSgpfV1gXG5cdFx0XHRcdH0ke2NhdF9uYW1lLnNsaWNlKDEpLnJlcGxhY2Uod2lraVRleHRCbGFua1JFLCB3aWtpVGV4dEJsYW5rKX0ke3dpa2lUZXh0QmxhbmtPckJpZGl9KFxcXFx8Lio/KT9cXFxcXVxcXFxdYCxcblx0XHRcdFx0J2cnXG5cdFx0XHQpO1xuXHRcdH1cblx0XHRpZiAob25jZSkge1xuXHRcdFx0cmV0dXJuIGNhdF9yZWdleC5leGVjKHdpa2l0ZXh0KTtcblx0XHR9XG5cdFx0Y29uc3Qgbm93aWtpUmVnZXggPSBuZXcgUmVnRXhwKCc8bm8nLmNvbmNhdCgnd2lraT4nLCAnKFxcXFxzfFxcXFxTKSo/PC9ubycsICd3aWtpJywgJz4nKSwgJ2cnKTtcblx0XHRjb25zdCBjb3BpZWR0ZXh0ID0gd2lraXRleHQucmVwbGFjZSgvPCEtLShcXHN8XFxTKSo/LS0+L2csIHJlcGxhY2VCeUJsYW5rcykucmVwbGFjZShub3dpa2lSZWdleCwgcmVwbGFjZUJ5QmxhbmtzKTtcblx0XHRjb25zdCByZXN1bHQgPSBbXTtcblx0XHRsZXQgY3Vycl9tYXRjaCA9IG51bGw7XG5cdFx0d2hpbGUgKChjdXJyX21hdGNoID0gY2F0X3JlZ2V4LmV4ZWMoY29waWVkdGV4dCkpICE9PSBudWxsKSB7XG5cdFx0XHRyZXN1bHQucHVzaCh7XG5cdFx0XHRcdG1hdGNoOiBjdXJyX21hdGNoLFxuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdHJlc3VsdC5yZSA9IGNhdF9yZWdleDtcblx0XHRyZXR1cm4gcmVzdWx0OyAvLyBBbiBhcnJheSBjb250YWluaW5nIGFsbCBtYXRjaGVzLCB3aXRoIHBvc2l0aW9ucywgaW4gcmVzdWx0WyBpIF0ubWF0Y2hcblx0fTtcblx0bGV0IGludGVybGFuZ3VhZ2VSRSA9IG51bGw7XG5cdGNvbnN0IGNoYW5nZV9jYXRlZ29yeSA9ICh3aWtpdGV4dCwgdG9SZW1vdmUsIHRvQWRkLCBrZXksIGlzX2hpZGRlbikgPT4ge1xuXHRcdGNvbnN0IGZpbmRfaW5zZXJ0aW9ucG9pbnQgPSAoX3dpa2l0ZXh0KSA9PiB7XG5cdFx0XHRjb25zdCBub3dpa2lSZWdleCA9IG5ldyBSZWdFeHAoJzxubycuY29uY2F0KCd3aWtpPicsICcoXFxcXHN8XFxcXFMpKj88L25vJywgJ3dpa2knLCAnPicpLCAnZycpO1xuXHRcdFx0Y29uc3QgY29waWVkdGV4dCA9IF93aWtpdGV4dFxuXHRcdFx0XHQucmVwbGFjZSgvPCEtLShcXHN8XFxTKSo/LS0+L2csIHJlcGxhY2VCeUJsYW5rcylcblx0XHRcdFx0LnJlcGxhY2Uobm93aWtpUmVnZXgsIHJlcGxhY2VCeUJsYW5rcyk7XG5cdFx0XHQvLyBTZWFyY2ggaW4gY29waWVkdGV4dCB0byBhdm9pZCB0aGF0IHdlIGluc2VydCBpbnNpZGUgYW4gSFRNTCBjb21tZW50IG9yIGEgbm93aWtpIFwiZWxlbWVudFwiLlxuXHRcdFx0bGV0IGluZGV4ID0gLTE7XG5cdFx0XHRmaW5kQ2F0c1JFLmxhc3RJbmRleCA9IDA7XG5cdFx0XHR3aGlsZSAoZmluZENhdHNSRS5leGVjKGNvcGllZHRleHQpICE9PSBudWxsKSB7XG5cdFx0XHRcdGluZGV4ID0gZmluZENhdHNSRS5sYXN0SW5kZXg7XG5cdFx0XHR9XG5cdFx0XHRpZiAoaW5kZXggPCAwKSB7XG5cdFx0XHRcdC8vIEZpbmQgdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBpbnRlcmxhbmd1YWdlIGxpbmsuLi5cblx0XHRcdFx0bGV0IG1hdGNoID0gbnVsbDtcblx0XHRcdFx0aW50ZXJsYW5ndWFnZVJFXG5cdFx0XHRcdFx0PyAobWF0Y2ggPSBpbnRlcmxhbmd1YWdlUkUuZXhlYyhjb3BpZWR0ZXh0KSlcblx0XHRcdFx0XHQ6IC8vIEFwcHJveGltYXRpb24gd2l0aG91dCBBUEk6IGludGVybGFuZ3VhZ2UgbGlua3Mgc3RhcnQgd2l0aCAyIHRvIDMgbG93ZXIgY2FzZSBsZXR0ZXJzLCBvcHRpb25hbGx5IGZvbGxvd2VkIGJ5XG5cdFx0XHRcdFx0XHQvLyBhIHNlcXVlbmNlIG9mIGdyb3VwcyBjb25zaXN0aW5nIG9mIGEgZGFzaCBmb2xsb3dlZCBieSBvbmUgb3IgbW9yZSBsb3dlciBjYXNlIGxldHRlcnMuIEV4Y2VwdGlvbnMgYXJlIFwic2ltcGxlXCJcblx0XHRcdFx0XHRcdC8vIGFuZCBcInRva2lwb25hXCIuXG5cdFx0XHRcdFx0XHQobWF0Y2ggPSAvKChefFxcblxccj8pKFxcW1xcW1xccyooKFthLXpdezIsM30oLVthLXpdKykqKXxzaW1wbGV8dG9raXBvbmEpXFxzKjpbXlxcXV0rXV1cXHMqKSkrJC8uZXhlYyhcblx0XHRcdFx0XHRcdFx0Y29waWVkdGV4dFxuXHRcdFx0XHRcdFx0KSk7XG5cdFx0XHRcdGlmIChtYXRjaCkge1xuXHRcdFx0XHRcdCh7aW5kZXh9ID0gbWF0Y2gpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0aWR4OiBpbmRleCxcblx0XHRcdFx0XHRvbkNhdDogZmFsc2UsXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRpZHg6IGluZGV4LFxuXHRcdFx0XHRvbkNhdDogaW5kZXggPj0gMCxcblx0XHRcdH07XG5cdFx0fTtcblx0XHRjb25zdCBzdW1tYXJ5ID0gW107XG5cdFx0Y29uc3QgbmFtZVNwYWNlID0gSEMuY2F0ZWdvcnlfY2Fub25pY2FsO1xuXHRcdGNvbnN0IC8vIFBvc2l0aW9uIG9mIHJlbW92ZWQgY2F0ZWdvcnk7XG5cdFx0XHRrZXlDaGFuZ2UgPSB0b1JlbW92ZSAmJiB0b0FkZCAmJiB0b1JlbW92ZSA9PT0gdG9BZGQgJiYgdG9BZGQubGVuZ3RoID4gMDtcblx0XHRsZXQgbWF0Y2hlcztcblx0XHRsZXQgY2F0X3BvaW50ID0gLTE7XG5cdFx0aWYgKGtleSkge1xuXHRcdFx0a2V5ID0gYHwke2tleX1gO1xuXHRcdH1cblx0XHQvLyBSZW1vdmVcblx0XHRpZiAodG9SZW1vdmUgJiYgdG9SZW1vdmUubGVuZ3RoID4gMCkge1xuXHRcdFx0bWF0Y2hlcyA9IGZpbmRfY2F0ZWdvcnkod2lraXRleHQsIHRvUmVtb3ZlKTtcblx0XHRcdGlmICghbWF0Y2hlcyB8fCBtYXRjaGVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHRleHQ6IHdpa2l0ZXh0LFxuXHRcdFx0XHRcdHN1bW1hcnksXG5cdFx0XHRcdFx0ZXJyb3I6IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLWNhdF9ub3RGb3VuZCcsIHRvUmVtb3ZlKSxcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGxldCBiZWZvcmUgPSB3aWtpdGV4dC5zbGljZSgwLCBNYXRoLm1heCgwLCBtYXRjaGVzWzBdLm1hdGNoLmluZGV4KSk7XG5cdFx0XHRsZXQgYWZ0ZXIgPSB3aWtpdGV4dC5zbGljZShNYXRoLm1heCgwLCBtYXRjaGVzWzBdLm1hdGNoLmluZGV4ICsgbWF0Y2hlc1swXS5tYXRjaFswXS5sZW5ndGgpKTtcblx0XHRcdGlmIChtYXRjaGVzLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0Ly8gUmVtb3ZlIGFsbCBvY2N1cnJlbmNlcyBpbiBhZnRlclxuXHRcdFx0XHRtYXRjaGVzLnJlLmxhc3RJbmRleCA9IDA7XG5cdFx0XHRcdGFmdGVyID0gYWZ0ZXIucmVwbGFjZShtYXRjaGVzLnJlLCAnJyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoXG5cdFx0XHRcdHRvQWRkICYmIC8vIG5hbWVTcGFjZSA9IG1hdGNoZXNbIDAgXS5tYXRjaFsgMSBdIHx8IG5hbWVTcGFjZTsgQ2Fub25pY2FsIG5hbWVzcGFjZSBzaG91bGQgYmUgYWx3YXlzIHByZWZlcnJlZFxuXHRcdFx0XHRrZXkgPT09IG51bGxcblx0XHRcdCkge1xuXHRcdFx0XHRbLCAsIGtleV0gPSBtYXRjaGVzWzBdLm1hdGNoO1xuXHRcdFx0fVxuXHRcdFx0Ly8gUmVtZW1iZXIgdGhlIGNhdGVnb3J5IGtleSwgaWYgYW55LlxuXHRcdFx0Ly8gUmVtb3ZlIHdoaXRlc3BhY2UgKHByb3Blcmx5KTogc3RyaXAgd2hpdGVzcGFjZSwgYnV0IG9ubHkgdXAgdG8gdGhlIG5leHQgbGluZSBmZWVkLlxuXHRcdFx0Ly8gSWYgd2UgdGhlbiBoYXZlIHR3byBsaW5lZmVlZHMgaW4gYSByb3csIHJlbW92ZSBvbmUuIE90aGVyd2lzZSwgaWYgd2UgaGF2ZSB0d28gbm9uLVxuXHRcdFx0Ly8gd2hpdGVzcGFjZSBjaGFyYWN0ZXJzLCBpbnNlcnQgYSBibGFuay5cblx0XHRcdGxldCBpID0gYmVmb3JlLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+PSAwICYmIGJlZm9yZS5jaGFyQXQoaSkgIT09ICdcXG4nICYmIGJlZm9yZS5zbGljZShpLCBpICsgMSkuc2VhcmNoKC9cXHMvKSA+PSAwKSB7XG5cdFx0XHRcdGktLTtcblx0XHRcdH1cblx0XHRcdGxldCBqID0gMDtcblx0XHRcdHdoaWxlIChqIDwgYWZ0ZXIubGVuZ3RoICYmIGFmdGVyLmNoYXJBdChqKSAhPT0gJ1xcbicgJiYgYWZ0ZXIuc2xpY2UoaiwgaiArIDEpLnNlYXJjaCgvXFxzLykgPj0gMCkge1xuXHRcdFx0XHRqKys7XG5cdFx0XHR9XG5cdFx0XHRpZiAoXG5cdFx0XHRcdGkgPj0gMCAmJlxuXHRcdFx0XHRiZWZvcmUuY2hhckF0KGkpID09PSAnXFxuJyAmJlxuXHRcdFx0XHQoYWZ0ZXIubGVuZ3RoID09PSAwIHx8IChqIDwgYWZ0ZXIubGVuZ3RoICYmIGFmdGVyLmNoYXJBdChqKSA9PT0gJ1xcbicpKVxuXHRcdFx0KSB7XG5cdFx0XHRcdGktLTtcblx0XHRcdH1cblx0XHRcdGJlZm9yZSA9IGkgPj0gMCA/IGJlZm9yZS5zbGljZSgwLCBNYXRoLm1heCgwLCBpICsgMSkpIDogJyc7XG5cdFx0XHRhZnRlciA9IGogPCBhZnRlci5sZW5ndGggPyBhZnRlci5zbGljZShNYXRoLm1heCgwLCBqKSkgOiAnJztcblx0XHRcdGlmIChcblx0XHRcdFx0YmVmb3JlLmxlbmd0aCA+IDAgJiZcblx0XHRcdFx0YmVmb3JlLnNsaWNlKE1hdGgubWF4KDAsIGJlZm9yZS5sZW5ndGggLSAxKSkuc2VhcmNoKC9cXFMvKSA+PSAwICYmXG5cdFx0XHRcdGFmdGVyLmxlbmd0aCA+IDAgJiZcblx0XHRcdFx0YWZ0ZXIuc2xpY2UoMCwgMSkuc2VhcmNoKC9cXFMvKSA+PSAwXG5cdFx0XHQpIHtcblx0XHRcdFx0YmVmb3JlICs9ICcgJztcblx0XHRcdH1cblx0XHRcdGNhdF9wb2ludCA9IGJlZm9yZS5sZW5ndGg7XG5cdFx0XHRpZiAoY2F0X3BvaW50ID09PSAwICYmIGFmdGVyLmxlbmd0aCA+IDAgJiYgYWZ0ZXIuc2xpY2UoMCwgMSkgPT09ICdcXG4nKSB7XG5cdFx0XHRcdGFmdGVyID0gYWZ0ZXIuc2xpY2UoMSk7XG5cdFx0XHR9XG5cdFx0XHR3aWtpdGV4dCA9IGJlZm9yZSArIGFmdGVyO1xuXHRcdFx0aWYgKCFrZXlDaGFuZ2UpIHtcblx0XHRcdFx0aWYgKEhDLnRlbXBsYXRlX2NhdGVnb3JpZXNbdG9SZW1vdmVdKSB7XG5cdFx0XHRcdFx0c3VtbWFyeS5wdXNoKGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXRlbXBsYXRlX3JlbW92ZWQnLCB0b1JlbW92ZSkpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHN1bW1hcnkucHVzaChnZXRNZXNzYWdlKCdtZXNzYWdlcy1jYXRfcmVtb3ZlZCcsIHRvUmVtb3ZlKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gQWRkXG5cdFx0aWYgKHRvQWRkICYmIHRvQWRkLmxlbmd0aCA+IDApIHtcblx0XHRcdG1hdGNoZXMgPSBmaW5kX2NhdGVnb3J5KHdpa2l0ZXh0LCB0b0FkZCk7XG5cdFx0XHRpZiAobWF0Y2hlcyAmJiBtYXRjaGVzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0Ly8gQWxyZWFkeSBleGlzdHNcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR0ZXh0OiB3aWtpdGV4dCxcblx0XHRcdFx0XHRzdW1tYXJ5LFxuXHRcdFx0XHRcdGVycm9yOiBnZXRNZXNzYWdlKCdtZXNzYWdlcy1jYXRfZXhpc3RzJywgdG9BZGQpLFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0bGV0IG9uQ2F0ID0gZmFsc2U7XG5cdFx0XHRpZiAoY2F0X3BvaW50IDwgMCkge1xuXHRcdFx0XHRjb25zdCBwb2ludCA9IGZpbmRfaW5zZXJ0aW9ucG9pbnQod2lraXRleHQpO1xuXHRcdFx0XHRjYXRfcG9pbnQgPSBwb2ludC5pZHg7XG5cdFx0XHRcdCh7b25DYXR9ID0gcG9pbnQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0b25DYXQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgbmV3Y2F0c3RyaW5nID0gYFtbJHtuYW1lU3BhY2V9OiR7dG9BZGR9JHtrZXkgfHwgJyd9XV1gO1xuXHRcdFx0aWYgKGNhdF9wb2ludCA+PSAwKSB7XG5cdFx0XHRcdGNvbnN0IHN1ZmZpeCA9IHdpa2l0ZXh0LnNsaWNlKE1hdGgubWF4KDAsIGNhdF9wb2ludCkpO1xuXHRcdFx0XHR3aWtpdGV4dCA9XG5cdFx0XHRcdFx0d2lraXRleHQuc2xpY2UoMCwgTWF0aC5tYXgoMCwgY2F0X3BvaW50KSkgK1xuXHRcdFx0XHRcdChjYXRfcG9pbnQgPiAwID8gJ1xcbicgOiAnJykgK1xuXHRcdFx0XHRcdG5ld2NhdHN0cmluZyArXG5cdFx0XHRcdFx0KG9uQ2F0ID8gJycgOiAnXFxuJyk7XG5cdFx0XHRcdHdpa2l0ZXh0ICs9IHN1ZmZpeC5sZW5ndGggPiAwICYmIHN1ZmZpeC5zbGljZSgwLCAxKSAhPT0gJ1xcbicgPyBgXFxuJHtzdWZmaXh9YCA6IHN1ZmZpeDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmICh3aWtpdGV4dC5sZW5ndGggPiAwICYmIHdpa2l0ZXh0LnNsaWNlKC0xLCB3aWtpdGV4dC5sZW5ndGggLSAxICsgMSkgIT09ICdcXG4nKSB7XG5cdFx0XHRcdFx0d2lraXRleHQgKz0gJ1xcbic7XG5cdFx0XHRcdH1cblx0XHRcdFx0d2lraXRleHQgKz0gKHdpa2l0ZXh0Lmxlbmd0aCA+IDAgPyAnXFxuJyA6ICcnKSArIG5ld2NhdHN0cmluZztcblx0XHRcdH1cblx0XHRcdGlmIChrZXlDaGFuZ2UpIHtcblx0XHRcdFx0bGV0IGsgPSBrZXkgfHwgJyc7XG5cdFx0XHRcdGlmIChrLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRrID0gay5zbGljZSgxKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzdW1tYXJ5LnB1c2goZ2V0TWVzc2FnZSgnbWVzc2FnZXMtY2F0X2tleWNoYW5nZScsIHRvQWRkLCBrKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzdW1tYXJ5LnB1c2goZ2V0TWVzc2FnZSgnbWVzc2FnZXMtY2F0X2FkZGVkJywgdG9BZGQpKTtcblx0XHRcdH1cblx0XHRcdGlmIChIQy51bmNhdF9yZWdleHAgJiYgIWlzX2hpZGRlbikge1xuXHRcdFx0XHRjb25zdCB0eHQgPSB3aWtpdGV4dC5yZXBsYWNlKEhDLnVuY2F0X3JlZ2V4cCwgJycpOyAvLyBSZW1vdmUgXCJ1bmNhdFwiIHRlbXBsYXRlc1xuXHRcdFx0XHRpZiAodHh0Lmxlbmd0aCAhPT0gd2lraXRleHQubGVuZ3RoKSB7XG5cdFx0XHRcdFx0d2lraXRleHQgPSB0eHQ7XG5cdFx0XHRcdFx0c3VtbWFyeS5wdXNoKGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXVuY2F0X3JlbW92ZWQnKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHtcblx0XHRcdHRleHQ6IHdpa2l0ZXh0LFxuXHRcdFx0c3VtbWFyeSxcblx0XHRcdGVycm9yOiBudWxsLFxuXHRcdH07XG5cdH07XG5cdC8vIFRoZSByZWFsIEhvdENhdCBVSVxuXHRjb25zdCBldnRLZXlzID0gKHtjdHJsS2V5LCBtZXRhS2V5LCBzaGlmdEtleX0pID0+IHtcblx0XHRsZXQgY29kZSA9IDA7XG5cdFx0aWYgKGN0cmxLZXkpIHtcblx0XHRcdC8vIEFsbCBtb2Rlcm4gYnJvd3NlcnNcblx0XHRcdC8vIEN0cmwtY2xpY2sgc2VlbXMgdG8gYmUgb3ZlcmxvYWRlZCBpbiBGRi9NYWMgKGl0IG9wZW5zIGEgcG9wLXVwIG1lbnUpLCBzbyB0cmVhdCBjbWQtY2xpY2tcblx0XHRcdC8vIGFzIGEgY3RybC1jbGljaywgdG9vLlxuXHRcdFx0aWYgKGN0cmxLZXkgfHwgbWV0YUtleSkge1xuXHRcdFx0XHRjb2RlIHx8PSAxO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHNoaWZ0S2V5KSB7XG5cdFx0XHRcdGNvZGUgfHw9IDI7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBjb2RlO1xuXHR9O1xuXHRjb25zdCBldnRLaWxsID0gKGUpID0+IHtcblx0XHRpZiAoZS5wcmV2ZW50RGVmYXVsdCkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZS5jYW5jZWxCdWJibGUgPSB0cnVlO1xuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH07XG5cdGxldCBjYXRMaW5lID0gbnVsbDsgLy8gdHJ1ZSBpZiBNZWRpYVdpa2kgc2VydmVzIHRoZSBuZXcgVUwtTEkgRE9NIGZvciBjYXRlZ29yaWVzXG5cdGxldCBvblVwbG9hZCA9IGZhbHNlO1xuXHRsZXQgZWRpdG9ycyA9IFtdO1xuXHRsZXQgY29tbWl0QnV0dG9uID0gbnVsbDtcblx0bGV0IGNvbW1pdEZvcm0gPSBudWxsO1xuXHRsZXQgbXVsdGlTcGFuID0gbnVsbDtcblx0bGV0IHBhZ2VUZXh0ID0gbnVsbDtcblx0bGV0IHBhZ2VUaW1lID0gbnVsbDtcblx0bGV0IHBhZ2VXYXRjaGVkID0gZmFsc2U7XG5cdGxldCB3YXRjaENyZWF0ZSA9IGZhbHNlO1xuXHRsZXQgd2F0Y2hFZGl0ID0gZmFsc2U7XG5cdGxldCBtaW5vckVkaXRzID0gZmFsc2U7XG5cdGxldCBlZGl0VG9rZW4gPSBudWxsO1xuXHRsZXQgaXNfcnRsID0gZmFsc2U7XG5cdGxldCBzZXJ2ZXJUaW1lID0gbnVsbDtcblx0bGV0IGxhc3RSZXZJZCA9IG51bGw7XG5cdGxldCBwYWdlVGV4dFJldklkID0gbnVsbDtcblx0bGV0IGNvbmZsaWN0aW5nVXNlciA9IG51bGw7XG5cdGxldCBuZXdET00gPSBmYWxzZTtcblx0Y29uc3QgVU5DSEFOR0VEID0gMDtcblx0Y29uc3QgT1BFTiA9IDE7IC8vIE9wZW4sIGJ1dCBubyBpbnB1dCB5ZXRcblx0Y29uc3QgQ0hBTkdFX1BFTkRJTkcgPSAyOyAvLyBPcGVuLCBzb21lIGlucHV0IG1hZGVcblx0Y29uc3QgQ0hBTkdFRCA9IDM7XG5cdGNvbnN0IERFTEVURUQgPSA0O1xuXHRjb25zdCBzZXRQYWdlID0gKGRhdGEpID0+IHtcblx0XHRsZXQgc3RhcnRUaW1lID0gbnVsbDtcblx0XHRpZiAoZGF0YSAmJiBkYXRhLnF1ZXJ5KSB7XG5cdFx0XHRpZiAoZGF0YS5xdWVyeS5wYWdlcykge1xuXHRcdFx0XHRjb25zdCBbcGFnZV0gPSBkYXRhLnF1ZXJ5LnBhZ2VzO1xuXHRcdFx0XHRpZiAocGFnZSkge1xuXHRcdFx0XHRcdGlmIChwYWdlLnJldmlzaW9ucyAmJiBwYWdlLnJldmlzaW9ucy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHQvLyBSZXZpc2lvbnMgYXJlIHNvcnRlZCBieSByZXZpc2lvbiBJRCwgaGVuY2UgWzBdIGlzIHRoZSBvbmUgd2UgYXNrZWQgZm9yLCBhbmQgcG9zc2libHkgdGhlcmUncyBhIFsxXSBpZiB3ZSdyZVxuXHRcdFx0XHRcdFx0Ly8gbm90IG9uIHRoZSBsYXRlc3QgcmV2aXNpb24gKGVkaXQgY29uZmxpY3RzIGFuZCBzdWNoKS5cblx0XHRcdFx0XHRcdHBhZ2VUZXh0ID0gcGFnZS5yZXZpc2lvbnNbMF0uc2xvdHNbJ21haW4nXS5jb250ZW50O1xuXHRcdFx0XHRcdFx0aWYgKHBhZ2UucmV2aXNpb25zWzBdLnRpbWVzdGFtcCkge1xuXHRcdFx0XHRcdFx0XHRwYWdlVGltZSA9IHBhZ2UucmV2aXNpb25zWzBdLnRpbWVzdGFtcC5yZXBsYWNlKC9cXEQvZywgJycpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKHBhZ2UucmV2aXNpb25zWzBdLnJldmlkKSB7XG5cdFx0XHRcdFx0XHRcdHBhZ2VUZXh0UmV2SWQgPSBwYWdlLnJldmlzaW9uc1swXS5yZXZpZDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmIChwYWdlLnJldmlzaW9ucy5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdFx0XHRcdGNvbmZsaWN0aW5nVXNlciA9IHBhZ2UucmV2aXNpb25zWzFdLnVzZXI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChwYWdlLmxhc3RyZXZpZCkge1xuXHRcdFx0XHRcdFx0bGFzdFJldklkID0gcGFnZS5sYXN0cmV2aWQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChwYWdlLnN0YXJ0dGltZXN0YW1wKSB7XG5cdFx0XHRcdFx0XHRzdGFydFRpbWUgPSBwYWdlLnN0YXJ0dGltZXN0YW1wLnJlcGxhY2UoL1xcRC9nLCAnJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHBhZ2VXYXRjaGVkID0gdHlwZW9mIHBhZ2Uud2F0Y2hlZCA9PT0gJ3N0cmluZyc7XG5cdFx0XHRcdFx0aWYgKGRhdGEucXVlcnkudG9rZW5zKSB7XG5cdFx0XHRcdFx0XHRlZGl0VG9rZW4gPSBkYXRhLnF1ZXJ5LnRva2Vucy5jc3JmdG9rZW47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChwYWdlLmxhbmdsaW5rcyAmJiAoIWRhdGFbJ3F1ZXJ5LWNvbnRpbnVlJ10gfHwgIWRhdGFbJ3F1ZXJ5LWNvbnRpbnVlJ10ubGFuZ2xpbmtzKSkge1xuXHRcdFx0XHRcdFx0Ly8gV2UgaGF2ZSBpbnRlcmxhbmd1YWdlIGxpbmtzLCBhbmQgd2UgZ290IHRoZW0gYWxsLlxuXHRcdFx0XHRcdFx0bGV0IHJlID0gJyc7XG5cdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHBhZ2UubGFuZ2xpbmtzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRcdHJlICs9IChpID4gMCA/ICd8JyA6ICcnKSArIHBhZ2UubGFuZ2xpbmtzW2ldLmxhbmcucmVwbGFjZSgvKFskKCkqKy4/XFxcXF5dKS9nLCAnXFxcXCQxJyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAocmUubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdFx0XHRpbnRlcmxhbmd1YWdlUkUgPSBuZXcgUmVnRXhwKGAoKF58XFxcXG5cXFxccj8pKFxcXFxbXFxcXFtcXFxccyooJHtyZX0pXFxcXHMqOlteXFxcXF1dK1xcXFxdXFxcXF1cXFxccyopKSskYCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyBTaXRlaW5mb1xuXHRcdFx0aWYgKGRhdGEucXVlcnkuZ2VuZXJhbCkge1xuXHRcdFx0XHRpZiAoZGF0YS5xdWVyeS5nZW5lcmFsLnRpbWUgJiYgIXN0YXJ0VGltZSkge1xuXHRcdFx0XHRcdHN0YXJ0VGltZSA9IGRhdGEucXVlcnkuZ2VuZXJhbC50aW1lLnJlcGxhY2UoL1xcRC9nLCAnJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKEhDLmNhcGl0YWxpemVQYWdlTmFtZXMgPT09IG51bGwpIHtcblx0XHRcdFx0XHQvLyBSZXNvdXJjZUxvYWRlcidzIEpTUGFyc2VyIGRvZXNuJ3QgbGlrZSAuY2FzZSwgc28gb3ZlcnJpZGUgZXNsaW50LlxuXHRcdFx0XHRcdEhDLmNhcGl0YWxpemVQYWdlTmFtZXMgPSBkYXRhLnF1ZXJ5LmdlbmVyYWwuY2FzZSA9PT0gJ2ZpcnN0LWxldHRlcic7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHNlcnZlclRpbWUgPSBzdGFydFRpbWU7XG5cdFx0XHQvLyBVc2VyaW5mb1xuXHRcdFx0aWYgKGRhdGEucXVlcnkudXNlcmluZm8gJiYgZGF0YS5xdWVyeS51c2VyaW5mby5vcHRpb25zKSB7XG5cdFx0XHRcdHdhdGNoQ3JlYXRlID0gIUhDLmRvbnRfYWRkX3RvX3dhdGNobGlzdCAmJiBkYXRhLnF1ZXJ5LnVzZXJpbmZvLm9wdGlvbnMud2F0Y2hjcmVhdGlvbnMgPT09ICcxJztcblx0XHRcdFx0d2F0Y2hFZGl0ID0gIUhDLmRvbnRfYWRkX3RvX3dhdGNobGlzdCAmJiBkYXRhLnF1ZXJ5LnVzZXJpbmZvLm9wdGlvbnMud2F0Y2hkZWZhdWx0ID09PSAnMSc7XG5cdFx0XHRcdG1pbm9yRWRpdHMgPSBkYXRhLnF1ZXJ5LnVzZXJpbmZvLm9wdGlvbnMubWlub3JkZWZhdWx0ID09PSAxO1xuXHRcdFx0XHQvLyBJZiB0aGUgdXNlciBoYXMgdGhlIFwiQWxsIGVkaXRzIGFyZSBtaW5vclwiIHByZWZlcmVuY2UgZW5hYmxlZCwgd2Ugc2hvdWxkIGhvbm9yIHRoYXRcblx0XHRcdFx0Ly8gZm9yIHNpbmdsZSBjYXRlZ29yeSBjaGFuZ2VzLCBubyBtYXR0ZXIgd2hhdCB0aGUgc2l0ZSBjb25maWd1cmF0aW9uIGlzLlxuXHRcdFx0XHRpZiAobWlub3JFZGl0cykge1xuXHRcdFx0XHRcdEhDLnNpbmdsZV9taW5vciA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdGxldCBzYXZlSW5Qcm9ncmVzcyA9IGZhbHNlO1xuXHRjb25zdCBpbml0aWF0ZUVkaXQgPSAoZG9FZGl0LCBmYWlsdXJlKSA9PiB7XG5cdFx0aWYgKHNhdmVJblByb2dyZXNzKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHNhdmVJblByb2dyZXNzID0gdHJ1ZTtcblx0XHRsZXQgb2xkQnV0dG9uU3RhdGU7XG5cdFx0aWYgKGNvbW1pdEJ1dHRvbikge1xuXHRcdFx0b2xkQnV0dG9uU3RhdGUgPSBjb21taXRCdXR0b24uZGlzYWJsZWQ7XG5cdFx0XHRjb21taXRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuXHRcdH1cblx0XHRjb25zdCBmYWlsID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcblx0XHRcdHNhdmVJblByb2dyZXNzID0gZmFsc2U7XG5cdFx0XHRpZiAoY29tbWl0QnV0dG9uKSB7XG5cdFx0XHRcdGNvbW1pdEJ1dHRvbi5kaXNhYmxlZCA9IG9sZEJ1dHRvblN0YXRlO1xuXHRcdFx0fVxuXHRcdFx0ZmFpbHVyZS5hcHBseSh0aGlzLCBhcmdzKTtcblx0XHR9O1xuXHRcdC8vIE11c3QgdXNlIEFqYXggaGVyZSB0byBnZXQgdGhlIHVzZXIgb3B0aW9ucyBhbmQgdGhlIGVkaXQgdG9rZW4uXG5cdFx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRyYXdjb250aW51ZTogJycsXG5cdFx0XHR0aXRsZXM6IGNvbmYud2dQYWdlTmFtZSxcblx0XHRcdHByb3A6IFsnaW5mbycsICdyZXZpc2lvbnMnLCAnbGFuZ2xpbmtzJ10sXG5cdFx0XHRpbnByb3A6ICd3YXRjaGVkJyxcblx0XHRcdHJ2cHJvcDogWydjb250ZW50JywgJ3RpbWVzdGFtcCcsICdpZHMnLCAndXNlciddLFxuXHRcdFx0cnZzbG90czogJyonLFxuXHRcdFx0cnZsaW1pdDogJzInLFxuXHRcdFx0cnZkaXI6ICduZXdlcicsXG5cdFx0XHRydnN0YXJ0aWQ6IGNvbmYud2dDdXJSZXZpc2lvbklkLFxuXHRcdFx0bGxsaW1pdDogJzUwMCcsXG5cdFx0XHRtZXRhOiBbJ3NpdGVpbmZvJywgJ3VzZXJpbmZvJywgJ3Rva2VucyddLFxuXHRcdFx0dHlwZTogJ2NzcmYnLFxuXHRcdFx0dWlwcm9wOiBbJ29wdGlvbnMnXSxcblx0XHR9O1xuXHRcdGFwaS5nZXQocGFyYW1zKVxuXHRcdFx0LmRvbmUoKGRhdGEpID0+IHtcblx0XHRcdFx0c2V0UGFnZShkYXRhKTtcblx0XHRcdFx0ZG9FZGl0KGZhaWwpO1xuXHRcdFx0fSlcblx0XHRcdC5mYWlsKCh7c3RhdHVzLCBzdGF0dXNUZXh0fSkgPT4ge1xuXHRcdFx0XHRmYWlsKGAke3N0YXR1c30gJHtzdGF0dXNUZXh0fWApO1xuXHRcdFx0fSk7XG5cdH07XG5cdGNvbnN0IG11bHRpQ2hhbmdlTXNnID0gKGNvdW50KSA9PiB7XG5cdFx0cmV0dXJuIGdldE1lc3NhZ2UoJ21lc3NhZ2VzLW11bHRpX2NoYW5nZScsIFN0cmluZyhjb3VudCkpO1xuXHR9O1xuXHRjb25zdCBjdXJyZW50VGltZXN0YW1wID0gKCkgPT4ge1xuXHRcdGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG5cdFx0bGV0IHRzID0gU3RyaW5nKG5vdy5nZXRVVENGdWxsWWVhcigpKTtcblx0XHRjb25zdCB0d28gPSAocykgPT4ge1xuXHRcdFx0cmV0dXJuIHMuc2xpY2UoLTIpO1xuXHRcdH07XG5cdFx0dHMgKz1cblx0XHRcdHR3byhgMCR7bm93LmdldFVUQ01vbnRoKCkgKyAxfWApICtcblx0XHRcdHR3byhgMCR7bm93LmdldFVUQ0RhdGUoKX1gKSArXG5cdFx0XHR0d28oYDAwJHtub3cuZ2V0VVRDSG91cnMoKX1gKSArXG5cdFx0XHR0d28oYDAwJHtub3cuZ2V0VVRDTWludXRlcygpfWApICtcblx0XHRcdHR3byhgMDAke25vdy5nZXRVVENTZWNvbmRzKCl9YCk7XG5cdFx0cmV0dXJuIHRzO1xuXHR9O1xuXHRjb25zdCBwZXJmb3JtQ2hhbmdlcyA9IChmYWlsdXJlLCBzaW5nbGVFZGl0b3IpID0+IHtcblx0XHRpZiAocGFnZVRleHQgPT09IG51bGwpIHtcblx0XHRcdGZhaWx1cmUoZ2V0TWVzc2FnZSgnbWVzc2FnZXMtbXVsdGlfZXJyb3InKSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdC8vIENyZWF0ZSBhIGZvcm0gYW5kIHN1Ym1pdCBpdC4gV2UgZG9uJ3QgdXNlIHRoZSBlZGl0IEFQSSAoYXBpLnBocD9hY3Rpb249ZWRpdCkgYmVjYXVzZVxuXHRcdC8vIChhKSBzZW5zaWJseSByZXBvcnRpbmcgYmFjayBlcnJvcnMgbGlrZSBlZGl0IGNvbmZsaWN0cyBpcyBhbHdheXMgYSBoYXNzbGUsIGFuZFxuXHRcdC8vIChiKSB3ZSB3YW50IHRvIHNob3cgYSBkaWZmIGZvciBtdWx0aS1lZGl0cyBhbnl3YXksIGFuZFxuXHRcdC8vIChjKSB3ZSB3YW50IHRvIHRyaWdnZXIgb25zdWJtaXQgZXZlbnRzLCBhbGxvd2luZyB1c2VyIGNvZGUgdG8gaW50ZXJjZXB0IHRoZSBlZGl0LlxuXHRcdC8vIFVzaW5nIHRoZSBmb3JtLCB3ZSBjYW4gZG8gKGIpIGFuZCAoYyksIGFuZCB3ZSBnZXQgKGEpIGZvciBmcmVlLiBBbmQsIG9mIGNvdXJzZSwgdXNpbmcgdGhlIGZvcm1cblx0XHQvLyBhdXRvbWF0aWNhbGx5IHJlbG9hZHMgdGhlIHBhZ2Ugd2l0aCB0aGUgdXBkYXRlZCBjYXRlZ29yaWVzIG9uIGEgc3VjY2Vzc2Z1bCBzdWJtaXQsIHdoaWNoXG5cdFx0Ly8gd2Ugd291bGQgaGF2ZSB0byBkbyBleHBsaWNpdGx5IGlmIHdlIHVzZWQgdGhlIGVkaXQgQVBJLlxuXHRcdGxldCBhY3Rpb247XG5cdFx0Ly8gTm9ybWFsbHksIHdlIGRvbid0IGhhdmUgdG8gY2FyZSBhYm91dCBlZGl0IGNvbmZsaWN0cy4gSWYgc29tZSBvdGhlciB1c2VyIGVkaXRlZCB0aGUgcGFnZSBpbiB0aGUgbWVhbnRpbWUsIHRoZVxuXHRcdC8vIHNlcnZlciB3aWxsIHRha2UgY2FyZSBvZiBpdCBhbmQgbWVyZ2UgdGhlIGVkaXQgYXV0b21hdGljYWxseSBvciBwcmVzZW50IGFuIGVkaXQgY29uZmxpY3Qgc2NyZWVuLiBIb3dldmVyLCB0aGVcblx0XHQvLyBzZXJ2ZXIgc3VwcHJlc3NlcyBlZGl0IGNvbmZsaWN0cyB3aXRoIG9uZXNlbGYuIEhlbmNlLCBpZiB3ZSBoYXZlIGEgY29uZmxpY3QsIGFuZCB0aGUgY29uZmxpY3RpbmcgdXNlciBpcyB0aGVcblx0XHQvLyBjdXJyZW50IHVzZXIsIHRoZW4gd2Ugc2V0IHRoZSBcIm9sZGlkXCIgdmFsdWUgYW5kIHN3aXRjaCB0byBkaWZmLCB3aGljaCBnaXZlcyB0aGUgXCJ5b3UgYXJlIGVkaXRpbmcgYW4gb2xkIHZlcnNpb247XG5cdFx0Ly8gaWYgeW91IHNhdmUsIGFueSBtb3JlIHJlY2VudCBjaGFuZ2VzIHdpbGwgYmUgbG9zdFwiIHNjcmVlbi5cblx0XHRjb25zdCBzZWxmRWRpdENvbmZsaWN0ID1cblx0XHRcdCgobGFzdFJldklkICE9PSBudWxsICYmIGxhc3RSZXZJZCAhPT0gY29uZi53Z0N1clJldmlzaW9uSWQpIHx8XG5cdFx0XHRcdChwYWdlVGV4dFJldklkICE9PSBudWxsICYmIHBhZ2VUZXh0UmV2SWQgIT09IGNvbmYud2dDdXJSZXZpc2lvbklkKSkgJiZcblx0XHRcdGNvbmZsaWN0aW5nVXNlciAmJlxuXHRcdFx0Y29uZmxpY3RpbmdVc2VyID09PSBjb25mLndnVXNlck5hbWU7XG5cdFx0aWYgKHNpbmdsZUVkaXRvciAmJiAhc2luZ2xlRWRpdG9yLm5vQ29tbWl0ICYmICFIQy5ub19hdXRvY29tbWl0ICYmIGVkaXRUb2tlbiAmJiAhc2VsZkVkaXRDb25mbGljdCkge1xuXHRcdFx0Ly8gSWYgd2UgZG8gaGF2ZSBhbiBlZGl0IGNvbmZsaWN0LCBidXQgbm90IHdpdGggb3Vyc2VsZiwgdGhhdCdzIG5vIHJlYXNvbiBub3QgdG8gYXR0ZW1wdCB0byBzYXZlOiB0aGUgc2VydmVyIHNpZGUgbWF5IGFjdHVhbGx5IGJlIGFibGUgdG9cblx0XHRcdC8vIG1lcmdlIHRoZSBjaGFuZ2VzLiBXZSBqdXN0IG5lZWQgdG8gbWFrZSBzdXJlIHRoYXQgd2UgZG8gcHJlc2VudCBhIGRpZmYgdmlldyBpZiBpdCdzIGEgc2VsZiBlZGl0IGNvbmZsaWN0LlxuXHRcdFx0Y29tbWl0Rm9ybS53cEVkaXRUb2tlbi52YWx1ZSA9IGVkaXRUb2tlbjtcblx0XHRcdGFjdGlvbiA9IGNvbW1pdEZvcm0ud3BEaWZmO1xuXHRcdFx0aWYgKGFjdGlvbikge1xuXHRcdFx0XHRhY3Rpb24udmFsdWUgPSAnd3BTYXZlJztcblx0XHRcdFx0YWN0aW9uLm5hbWUgPSBhY3Rpb24udmFsdWU7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGFjdGlvbiA9IGNvbW1pdEZvcm0ud3BTYXZlO1xuXHRcdFx0aWYgKGFjdGlvbikge1xuXHRcdFx0XHRhY3Rpb24udmFsdWUgPSAnd3BEaWZmJztcblx0XHRcdFx0YWN0aW9uLm5hbWUgPSBhY3Rpb24udmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGxldCByZXN1bHQgPSB7XG5cdFx0XHR0ZXh0OiBwYWdlVGV4dCxcblx0XHR9O1xuXHRcdGNvbnN0IGNoYW5nZWQgPSBbXTtcblx0XHRjb25zdCBhZGRlZCA9IFtdO1xuXHRcdGNvbnN0IGRlbGV0ZWQgPSBbXTtcblx0XHRjb25zdCB0b0VkaXQgPSBzaW5nbGVFZGl0b3IgPyBbc2luZ2xlRWRpdG9yXSA6IGVkaXRvcnM7XG5cdFx0bGV0IGVkaXQ7XG5cdFx0bGV0IGk7XG5cdFx0bGV0IGVycm9yID0gbnVsbDtcblx0XHRsZXQgY2hhbmdlcyA9IDA7XG5cdFx0Zm9yIChpID0gMDsgaSA8IHRvRWRpdC5sZW5ndGg7IGkrKykge1xuXHRcdFx0ZWRpdCA9IHRvRWRpdFtpXTtcblx0XHRcdGlmIChlZGl0LnN0YXRlID09PSBDSEFOR0VEKSB7XG5cdFx0XHRcdHJlc3VsdCA9IGNoYW5nZV9jYXRlZ29yeShcblx0XHRcdFx0XHRyZXN1bHQudGV4dCxcblx0XHRcdFx0XHRlZGl0Lm9yaWdpbmFsQ2F0ZWdvcnksXG5cdFx0XHRcdFx0ZWRpdC5jdXJyZW50Q2F0ZWdvcnksXG5cdFx0XHRcdFx0ZWRpdC5jdXJyZW50S2V5LFxuXHRcdFx0XHRcdGVkaXQuY3VycmVudEhpZGRlblxuXHRcdFx0XHQpO1xuXHRcdFx0XHRpZiAoIXJlc3VsdC5lcnJvcikge1xuXHRcdFx0XHRcdGNoYW5nZXMrKztcblx0XHRcdFx0XHRpZiAoIWVkaXQub3JpZ2luYWxDYXRlZ29yeSB8fCBlZGl0Lm9yaWdpbmFsQ2F0ZWdvcnkubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0XHRhZGRlZC5wdXNoKGVkaXQuY3VycmVudENhdGVnb3J5KTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Y2hhbmdlZC5wdXNoKHtcblx0XHRcdFx0XHRcdFx0ZnJvbTogZWRpdC5vcmlnaW5hbENhdGVnb3J5LFxuXHRcdFx0XHRcdFx0XHR0bzogZWRpdC5jdXJyZW50Q2F0ZWdvcnksXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSBpZiAoZXJyb3IgPT09IG51bGwpIHtcblx0XHRcdFx0XHQoe2Vycm9yfSA9IHJlc3VsdCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoZWRpdC5zdGF0ZSA9PT0gREVMRVRFRCAmJiBlZGl0Lm9yaWdpbmFsQ2F0ZWdvcnkgJiYgZWRpdC5vcmlnaW5hbENhdGVnb3J5Lmxlbmd0aCA+IDApIHtcblx0XHRcdFx0cmVzdWx0ID0gY2hhbmdlX2NhdGVnb3J5KHJlc3VsdC50ZXh0LCBlZGl0Lm9yaWdpbmFsQ2F0ZWdvcnksIG51bGwsIG51bGwsIGZhbHNlKTtcblx0XHRcdFx0aWYgKCFyZXN1bHQuZXJyb3IpIHtcblx0XHRcdFx0XHRjaGFuZ2VzKys7XG5cdFx0XHRcdFx0ZGVsZXRlZC5wdXNoKGVkaXQub3JpZ2luYWxDYXRlZ29yeSk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoZXJyb3IgPT09IG51bGwpIHtcblx0XHRcdFx0XHQoe2Vycm9yfSA9IHJlc3VsdCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKGVycm9yICE9PSBudWxsKSB7XG5cdFx0XHQvLyBEbyBub3QgY29tbWl0IGlmIHRoZXJlIHdlcmUgZXJyb3JzXG5cdFx0XHRhY3Rpb24gPSBjb21taXRGb3JtLndwU2F2ZTtcblx0XHRcdGlmIChhY3Rpb24pIHtcblx0XHRcdFx0YWN0aW9uLnZhbHVlID0gJ3dwRGlmZic7XG5cdFx0XHRcdGFjdGlvbi5uYW1lID0gYWN0aW9uLnZhbHVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBGaWxsIGluIHRoZSBmb3JtIGFuZCBzdWJtaXQgaXRcblx0XHRjb21taXRGb3JtLndwTWlub3JlZGl0LmNoZWNrZWQgPSBtaW5vckVkaXRzO1xuXHRcdGNvbW1pdEZvcm0ud3BXYXRjaHRoaXMuY2hlY2tlZCA9ICghY29uZi53Z0FydGljbGVJZCAmJiB3YXRjaENyZWF0ZSkgfHwgd2F0Y2hFZGl0IHx8IHBhZ2VXYXRjaGVkO1xuXHRcdGlmIChjb25mLndnQXJ0aWNsZUlkIHx8ICEhc2luZ2xlRWRpdG9yKSB7XG5cdFx0XHQvLyBQcmVwYXJlIGNoYW5nZS10YWcgc2F2ZVxuXHRcdFx0aWYgKGFjdGlvbiAmJiBhY3Rpb24udmFsdWUgPT09ICd3cFNhdmUnKSB7XG5cdFx0XHRcdGlmIChIQy5jaGFuZ2VUYWcpIHtcblx0XHRcdFx0XHRjb21taXRGb3JtLndwQ2hhbmdlVGFncy52YWx1ZSA9IEhDLmNoYW5nZVRhZztcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29tbWl0Rm9ybS53cEF1dG9TdW1tYXJ5LnZhbHVlID0gSEMuY2hhbmdlVGFnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGNoYW5nZXMgPT09IDEpIHtcblx0XHRcdFx0aWYgKHJlc3VsdC5zdW1tYXJ5ICYmIHJlc3VsdC5zdW1tYXJ5Lmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRjb21taXRGb3JtLndwU3VtbWFyeS52YWx1ZSA9XG5cdFx0XHRcdFx0XHQoSEMuY2hhbmdlVGFnID8gJycgOiBnZXRNZXNzYWdlKCdtZXNzYWdlcy1wcmVmaXgnKSkgK1xuXHRcdFx0XHRcdFx0cmVzdWx0LnN1bW1hcnkuam9pbihnZXRNZXNzYWdlKCdtZXNzYWdlcy1zZXBhcmF0b3InKSkgK1xuXHRcdFx0XHRcdFx0KEhDLmNoYW5nZVRhZyA/ICcnIDogZ2V0TWVzc2FnZSgnbWVzc2FnZXMtdXNpbmcnKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29tbWl0Rm9ybS53cE1pbm9yZWRpdC5jaGVja2VkID0gSEMuc2luZ2xlX21pbm9yIHx8IG1pbm9yRWRpdHM7XG5cdFx0XHR9IGVsc2UgaWYgKGNoYW5nZXMpIHtcblx0XHRcdFx0bGV0IHN1bW1hcnkgPSBbXTtcblx0XHRcdFx0Y29uc3Qgc2hvcnRTdW1tYXJ5ID0gW107XG5cdFx0XHRcdC8vIERlbGV0ZWRcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGRlbGV0ZWQubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRzdW1tYXJ5LnB1c2goYOKIkiR7Z2V0TWVzc2FnZSgnbWVzc2FnZXMtc2hvcnRfY2F0Y2hhbmdlJywgZGVsZXRlZFtpXSl9YCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRlbGV0ZWQubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRcdFx0c2hvcnRTdW1tYXJ5LnB1c2goYOKIkiR7Z2V0TWVzc2FnZSgnbWVzc2FnZXMtc2hvcnRfY2F0Y2hhbmdlJywgZGVsZXRlZFswXSl9YCk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoZGVsZXRlZC5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0c2hvcnRTdW1tYXJ5LnB1c2goYOKIkiAke211bHRpQ2hhbmdlTXNnKGRlbGV0ZWQubGVuZ3RoKX1gKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBBZGRlZFxuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgYWRkZWQubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRzdW1tYXJ5LnB1c2goYCske2dldE1lc3NhZ2UoJ21lc3NhZ2VzLXNob3J0X2NhdGNoYW5nZScsIGFkZGVkW2ldKX1gKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoYWRkZWQubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRcdFx0c2hvcnRTdW1tYXJ5LnB1c2goYCske2dldE1lc3NhZ2UoJ21lc3NhZ2VzLXNob3J0X2NhdGNoYW5nZScsIGFkZGVkWzBdKX1gKTtcblx0XHRcdFx0fSBlbHNlIGlmIChhZGRlZC5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0c2hvcnRTdW1tYXJ5LnB1c2goYCsgJHttdWx0aUNoYW5nZU1zZyhhZGRlZC5sZW5ndGgpfWApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIENoYW5nZWRcblx0XHRcdFx0Y29uc3QgYXJyb3cgPSBpc19ydGwgPyAnXFx1MjE5MCcgOiAnXFx1MjE5Mic7IC8vIGxlZnQgYW5kIHJpZ2h0IGFycm93cy4gRG9uJ3QgdXNlIOKGkCBhbmQg4oaSIGluIHRoZSBjb2RlLlxuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgY2hhbmdlZC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmIChjaGFuZ2VkW2ldLmZyb20gPT09IGNoYW5nZWRbaV0udG8pIHtcblx0XHRcdFx0XHRcdHN1bW1hcnkucHVzaChgwrEke2dldE1lc3NhZ2UoJ21lc3NhZ2VzLXNob3J0X2NhdGNoYW5nZScsIGNoYW5nZWRbaV0uZnJvbSl9YCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHN1bW1hcnkucHVzaChcblx0XHRcdFx0XHRcdFx0YMKxJHtnZXRNZXNzYWdlKCdtZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnLCBjaGFuZ2VkW2ldLmZyb20pfSR7YXJyb3d9JHtnZXRNZXNzYWdlKFxuXHRcdFx0XHRcdFx0XHRcdCdtZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnLFxuXHRcdFx0XHRcdFx0XHRcdGNoYW5nZWRbaV0udG9cblx0XHRcdFx0XHRcdFx0KX1gXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoY2hhbmdlZC5sZW5ndGggPT09IDEpIHtcblx0XHRcdFx0XHRpZiAoY2hhbmdlZFswXS5mcm9tID09PSBjaGFuZ2VkWzBdLnRvKSB7XG5cdFx0XHRcdFx0XHRzaG9ydFN1bW1hcnkucHVzaChgwrEke2dldE1lc3NhZ2UoJ21lc3NhZ2VzLXNob3J0X2NhdGNoYW5nZScsIGNoYW5nZWRbMF0uZnJvbSl9YCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHNob3J0U3VtbWFyeS5wdXNoKFxuXHRcdFx0XHRcdFx0XHRgwrEke2dldE1lc3NhZ2UoJ21lc3NhZ2VzLXNob3J0X2NhdGNoYW5nZScsIGNoYW5nZWRbMF0uZnJvbSl9JHthcnJvd30ke2dldE1lc3NhZ2UoXG5cdFx0XHRcdFx0XHRcdFx0J21lc3NhZ2VzLXNob3J0X2NhdGNoYW5nZScsXG5cdFx0XHRcdFx0XHRcdFx0Y2hhbmdlZFswXS50b1xuXHRcdFx0XHRcdFx0XHQpfWBcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2UgaWYgKGNoYW5nZWQubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdHNob3J0U3VtbWFyeS5wdXNoKGDCsSAke211bHRpQ2hhbmdlTXNnKGNoYW5nZWQubGVuZ3RoKX1gKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoc3VtbWFyeS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0c3VtbWFyeSA9IHN1bW1hcnkuam9pbihnZXRNZXNzYWdlKCdtZXNzYWdlcy1zZXBhcmF0b3InKSk7XG5cdFx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdFx0c3VtbWFyeS5sZW5ndGggPlxuXHRcdFx0XHRcdFx0MjAwIC1cblx0XHRcdFx0XHRcdFx0KEhDLmNoYW5nZVRhZyA/ICcnIDogZ2V0TWVzc2FnZSgnbWVzc2FnZXMtcHJlZml4JykpLmxlbmd0aCAtXG5cdFx0XHRcdFx0XHRcdChIQy5jaGFuZ2VUYWcgPyAnJyA6IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXVzaW5nJykpLmxlbmd0aFxuXHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0c3VtbWFyeSA9IHNob3J0U3VtbWFyeS5qb2luKGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXNlcGFyYXRvcicpKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29tbWl0Rm9ybS53cFN1bW1hcnkudmFsdWUgPVxuXHRcdFx0XHRcdFx0KEhDLmNoYW5nZVRhZyA/ICcnIDogZ2V0TWVzc2FnZSgnbWVzc2FnZXMtcHJlZml4JykpICtcblx0XHRcdFx0XHRcdHN1bW1hcnkgK1xuXHRcdFx0XHRcdFx0KEhDLmNoYW5nZVRhZyA/ICcnIDogZ2V0TWVzc2FnZSgnbWVzc2FnZXMtdXNpbmcnKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Y29tbWl0Rm9ybS53cFRleHRib3gxLnZhbHVlID0gcmVzdWx0LnRleHQ7XG5cdFx0Y29tbWl0Rm9ybS53cFN0YXJ0dGltZS52YWx1ZSA9IHNlcnZlclRpbWUgfHwgY3VycmVudFRpbWVzdGFtcCgpO1xuXHRcdGNvbW1pdEZvcm0ud3BFZGl0dGltZS52YWx1ZSA9IHBhZ2VUaW1lIHx8IGNvbW1pdEZvcm0ud3BTdGFydHRpbWUudmFsdWU7XG5cdFx0aWYgKHNlbGZFZGl0Q29uZmxpY3QpIHtcblx0XHRcdGNvbW1pdEZvcm0ub2xkaWQudmFsdWUgPSBTdHJpbmcocGFnZVRleHRSZXZJZCB8fCBjb25mLndnQ3VyUmV2aXNpb25JZCk7XG5cdFx0fVxuXHRcdC8vIFN1Ym1pdCB0aGUgZm9ybSBpbiBhIHdheSB0aGF0IHRyaWdnZXJzIG9uc3VibWl0IGV2ZW50czogY29tbWl0Rm9ybS5zdWJtaXQoKSBkb2Vzbid0LlxuXHRcdGNvbW1pdEZvcm0uaGNDb21taXQuY2xpY2soKTtcblx0fTtcblx0Y29uc3QgcmVzb2x2ZU9uZSA9IChwYWdlLCB0b1Jlc29sdmUpID0+IHtcblx0XHRjb25zdCBjYXRzID0gcGFnZS5jYXRlZ29yaWVzO1xuXHRcdGNvbnN0IHtsaW5rc30gPSBwYWdlO1xuXHRcdGxldCBpc19kYWIgPSBmYWxzZTsgLy8gSGFyZCByZWRpcmVjdD9cblx0XHRsZXQgaXNfcmVkaXIgPSB0eXBlb2YgcGFnZS5yZWRpcmVjdCA9PT0gJ3N0cmluZyc7XG5cdFx0bGV0IGk7XG5cdFx0Y29uc3QgaXNfaGlkZGVuID0gcGFnZS5jYXRlZ29yeWluZm8gJiYgdHlwZW9mIHBhZ2UuY2F0ZWdvcnlpbmZvLmhpZGRlbiA9PT0gJ3N0cmluZyc7XG5cdFx0Y29uc3QgaXNfbWlzc2luZyA9IHR5cGVvZiBwYWdlLm1pc3NpbmcgPT09ICdzdHJpbmcnO1xuXHRcdGZvciAoaSA9IDA7IGkgPCB0b1Jlc29sdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChpICYmIHRvUmVzb2x2ZVtpXS5kYWJJbnB1dENsZWFuZWQgIT09IHBhZ2UudGl0bGUuc2xpY2UoTWF0aC5tYXgoMCwgcGFnZS50aXRsZS5pbmRleE9mKCc6JykgKyAxKSkpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHQvLyBOb3RlOiB0aGUgc2VydmVyIHJldHVybnMgaW4gcGFnZSBhbiBORkMgbm9ybWFsaXplZCBVbmljb2RlIHRpdGxlLiBJZiBvdXIgaW5wdXQgd2FzIG5vdCBORkMgbm9ybWFsaXplZCwgd2UgbWF5IG5vdCBmaW5kXG5cdFx0XHQvLyBhbnkgZW50cnkgaGVyZS4gSWYgd2UgaGF2ZSBvbmx5IG9uZSBlZGl0b3IgdG8gcmVzb2x2ZSAodGhlIG1vc3QgY29tbW9uIGNhc2UsIEkgcHJlc3VtZSksIHdlIG1heSBzaW1wbHkgc2tpcCB0aGUgY2hlY2suXG5cdFx0XHR0b1Jlc29sdmVbaV0uY3VycmVudEhpZGRlbiA9IGlzX2hpZGRlbjtcblx0XHRcdHRvUmVzb2x2ZVtpXS5pbnB1dEV4aXN0cyA9ICFpc19taXNzaW5nO1xuXHRcdFx0dG9SZXNvbHZlW2ldLmljb24uc3JjID0gaXNfbWlzc2luZyA/IEhDLmV4aXN0c05vIDogSEMuZXhpc3RzWWVzO1xuXHRcdH1cblx0XHRpZiAoaXNfbWlzc2luZykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoIWlzX3JlZGlyICYmIGNhdHMgJiYgKGdldE1lc3NhZ2UoJ2Rpc2FtYmlnX2NhdGVnb3J5JykgfHwgZ2V0TWVzc2FnZSgncmVkaXJfY2F0ZWdvcnknKSkpIHtcblx0XHRcdGZvciAoY29uc3QgY2F0XyBvZiBjYXRzKSB7XG5cdFx0XHRcdGxldCBjYXQgPSBjYXRfLnRpdGxlO1xuXHRcdFx0XHQvLyBTdHJpcCBuYW1lc3BhY2UgcHJlZml4XG5cdFx0XHRcdGlmIChjYXQpIHtcblx0XHRcdFx0XHRjYXQgPSBjYXQuc2xpY2UoTWF0aC5tYXgoMCwgY2F0LmluZGV4T2YoJzonKSArIDEpKS5yZXBsYWNlKC9fL2csICcgJyk7XG5cdFx0XHRcdFx0aWYgKGNhdCA9PT0gZ2V0TWVzc2FnZSgnZGlzYW1iaWdfY2F0ZWdvcnknKSkge1xuXHRcdFx0XHRcdFx0aXNfZGFiID0gdHJ1ZTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoY2F0ID09PSBnZXRNZXNzYWdlKCdyZWRpcl9jYXRlZ29yeScpKSB7XG5cdFx0XHRcdFx0XHRpc19yZWRpciA9IHRydWU7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKCFpc19yZWRpciAmJiAhaXNfZGFiKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmICghbGlua3MgfHwgbGlua3MubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IHRpdGxlcyA9IFtdO1xuXHRcdGZvciAoaSA9IDA7IGkgPCBsaW5rcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHQvLyBDYXRlZ29yeSBuYW1lc3BhY2UgLS0gYWx3YXlzIHRydWUgc2luY2Ugd2UgYXNrIG9ubHkgZm9yIHRoZSBjYXRlZ29yeSBsaW5rc1xuXHRcdFx0XHRsaW5rc1tpXS5ucyA9PT0gMTQgJiZcblx0XHRcdFx0Ly8gTmFtZSBub3QgZW1wdHlcblx0XHRcdFx0bGlua3NbaV0udGl0bGUgJiZcblx0XHRcdFx0bGlua3NbaV0udGl0bGUubGVuZ3RoID4gMFxuXHRcdFx0KSB7XG5cdFx0XHRcdC8vIEludGVybmFsIGxpbmsgdG8gZXhpc3RpbmcgdGhpbmd5LiBFeHRyYWN0IHRoZSBwYWdlIG5hbWUgYW5kIHJlbW92ZSB0aGUgbmFtZXNwYWNlLlxuXHRcdFx0XHRsZXQgbWF0Y2ggPSBsaW5rc1tpXS50aXRsZTtcblx0XHRcdFx0bWF0Y2ggPSBtYXRjaC5zbGljZShNYXRoLm1heCgwLCBtYXRjaC5pbmRleE9mKCc6JykgKyAxKSk7XG5cdFx0XHRcdC8vIEV4Y2x1ZGUgYmxhY2tsaXN0ZWQgY2F0ZWdvcmllcy5cblx0XHRcdFx0aWYgKCFIQy5ibGFja2xpc3QgfHwgIUhDLmJsYWNrbGlzdC50ZXN0KG1hdGNoKSkge1xuXHRcdFx0XHRcdHRpdGxlcy5wdXNoKG1hdGNoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAodGl0bGVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRmb3IgKGkgPSAwOyBpIDwgdG9SZXNvbHZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoaSAmJiB0b1Jlc29sdmVbaV0uZGFiSW5wdXRDbGVhbmVkICE9PSBwYWdlLnRpdGxlLnNsaWNlKE1hdGgubWF4KDAsIHBhZ2UudGl0bGUuaW5kZXhPZignOicpICsgMSkpKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0dG9SZXNvbHZlW2ldLmlucHV0RXhpc3RzID0gdHJ1ZTsgLy8gTWlnaHQgYWN0dWFsbHkgYmUgd3JvbmcgaWYgaXQncyBhIHJlZGlyZWN0IHBvaW50aW5nIHRvIGEgbm9uLWV4aXN0aW5nIGNhdGVnb3J5XG5cdFx0XHR0b1Jlc29sdmVbaV0uaWNvbi5zcmMgPSBIQy5leGlzdHNZZXM7XG5cdFx0XHRpZiAodGl0bGVzLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0dG9SZXNvbHZlW2ldLmRhYiA9IHRpdGxlcztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRvUmVzb2x2ZVtpXS50ZXh0LnZhbHVlID1cblx0XHRcdFx0XHR0aXRsZXNbMF0gKyAodG9SZXNvbHZlW2ldLmN1cnJlbnRLZXkgPT09IG51bGwgPyAnJyA6IGB8JHt0b1Jlc29sdmVbaV0uY3VycmVudEtleX1gKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdGNvbnN0IHJlc29sdmVSZWRpcmVjdHMgPSAodG9SZXNvbHZlLCBwYXJhbXMpID0+IHtcblx0XHRpZiAoIXBhcmFtcyB8fCAhcGFyYW1zLnF1ZXJ5IHx8ICFwYXJhbXMucXVlcnkucGFnZXMpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Zm9yIChjb25zdCBwIGluIHBhcmFtcy5xdWVyeS5wYWdlcykge1xuXHRcdFx0aWYgKCFPYmplY3QuaGFzT3duKHBhcmFtcy5xdWVyeS5wYWdlcywgcCkpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRyZXNvbHZlT25lKHBhcmFtcy5xdWVyeS5wYWdlc1twXSwgdG9SZXNvbHZlKTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IHJlc29sdmVNdWx0aSA9ICh0b1Jlc29sdmUsIGNhbGxiYWNrKSA9PiB7XG5cdFx0bGV0IGk7XG5cdFx0Zm9yIChpID0gMDsgaSA8IHRvUmVzb2x2ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dG9SZXNvbHZlW2ldLmRhYiA9IG51bGw7XG5cdFx0XHR0b1Jlc29sdmVbaV0uZGFiSW5wdXQgPSB0b1Jlc29sdmVbaV0ubGFzdElucHV0O1xuXHRcdH1cblx0XHRpZiAobm9TdWdnZXN0aW9ucykge1xuXHRcdFx0Y2FsbGJhY2sodG9SZXNvbHZlKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRwcm9wOiAnaW5mb3xsaW5rc3xjYXRlZ29yaWVzfGNhdGVnb3J5aW5mbycsXG5cdFx0XHRwbG5hbWVzcGFjZTogJzE0Jyxcblx0XHRcdHBsbGltaXQ6IHRvUmVzb2x2ZS5sZW5ndGggKiAxMCxcblx0XHRcdGNsbGltaXQ6IHRvUmVzb2x2ZS5sZW5ndGggKiAxMCxcblx0XHR9O1xuXHRcdGNvbnN0IHRpdGxlcyA9IFtdO1xuXHRcdGZvciAoaSA9IDA7IGkgPCB0b1Jlc29sdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxldCB2ID0gdG9SZXNvbHZlW2ldLmRhYklucHV0O1xuXHRcdFx0diA9IHJlcGxhY2VTaG9ydGN1dHModiwgSEMuc2hvcnRjdXRzKTtcblx0XHRcdHRvUmVzb2x2ZVtpXS5kYWJJbnB1dENsZWFuZWQgPSB2O1xuXHRcdFx0dGl0bGVzLnB1c2goYENhdGVnb3J5OiR7dn1gKTtcblx0XHR9XG5cdFx0cGFyYW1zLnRpdGxlcyA9IHRpdGxlcy5qb2luKCd8Jyk7XG5cdFx0YXBpLmdldChwYXJhbXMpXG5cdFx0XHQuZG9uZSgoanNvbikgPT4ge1xuXHRcdFx0XHRyZXNvbHZlUmVkaXJlY3RzKHRvUmVzb2x2ZSwganNvbik7XG5cdFx0XHRcdGNhbGxiYWNrKHRvUmVzb2x2ZSk7XG5cdFx0XHR9KVxuXHRcdFx0LmZhaWwoKHJlcSkgPT4ge1xuXHRcdFx0XHRpZiAoIXJlcSkge1xuXHRcdFx0XHRcdG5vU3VnZ2VzdGlvbnMgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNhbGxiYWNrKHRvUmVzb2x2ZSk7XG5cdFx0XHR9KTtcblx0fTtcblx0Y29uc3QgbWFrZUFjdGl2ZSA9ICh3aGljaCkgPT4ge1xuXHRcdGlmICh3aGljaC5pc19hY3RpdmUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Zm9yIChjb25zdCBlZGl0b3Igb2YgZWRpdG9ycykge1xuXHRcdFx0aWYgKGVkaXRvciAhPT0gd2hpY2gpIHtcblx0XHRcdFx0ZWRpdG9yLmluYWN0aXZhdGUoKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0d2hpY2guaXNfYWN0aXZlID0gdHJ1ZTtcblx0XHRpZiAod2hpY2guZGFiKSB7XG5cdFx0XHRzaG93RGFiKHdoaWNoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gQ2hlY2sgZm9yIHByb2dyYW1tYXRpYyB2YWx1ZSBjaGFuZ2VzLlxuXHRcdFx0Y29uc3QgZXhwZWN0ZWRJbnB1dCA9IHdoaWNoLmxhc3RSZWFsSW5wdXQgfHwgd2hpY2gubGFzdElucHV0IHx8ICcnO1xuXHRcdFx0Y29uc3QgYWN0dWFsVmFsdWUgPSB3aGljaC50ZXh0LnZhbHVlIHx8ICcnO1xuXHRcdFx0aWYgKFxuXHRcdFx0XHQoZXhwZWN0ZWRJbnB1dC5sZW5ndGggPT09IDAgJiYgYWN0dWFsVmFsdWUubGVuZ3RoID4gMCkgfHxcblx0XHRcdFx0KGV4cGVjdGVkSW5wdXQubGVuZ3RoID4gMCAmJiBhY3R1YWxWYWx1ZS5pbmRleE9mKGV4cGVjdGVkSW5wdXQpKVxuXHRcdFx0KSB7XG5cdFx0XHRcdC8vIFNvbWVob3cgdGhlIGZpZWxkJ3MgdmFsdWUgYXBwZWFycyB0byBoYXZlIGNoYW5nZWQsIGFuZCB3aGljaC5sYXN0U2VsZWN0aW9uIHRoZXJlZm9yZSBpcyBubyBsb25nZXIgdmFsaWQuIFRyeSB0byBzZXQgdGhlXG5cdFx0XHRcdC8vIGN1cnNvciBhdCB0aGUgZW5kIG9mIHRoZSBjYXRlZ29yeSwgYW5kIGRvIG5vdCBkaXNwbGF5IHRoZSBvbGQgc3VnZ2VzdGlvbiBsaXN0LlxuXHRcdFx0XHR3aGljaC5zaG93c0xpc3QgPSBmYWxzZTtcblx0XHRcdFx0Y29uc3QgdiA9IGFjdHVhbFZhbHVlLnNwbGl0KCd8Jyk7XG5cdFx0XHRcdFt3aGljaC5sYXN0SW5wdXRdID0gdjtcblx0XHRcdFx0d2hpY2gubGFzdFJlYWxJbnB1dCA9IHdoaWNoLmxhc3RJbnB1dDtcblx0XHRcdFx0aWYgKHYubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRcdFssIHdoaWNoLmN1cnJlbnRLZXldID0gdjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAod2hpY2gubGFzdFNlbGVjdGlvbikge1xuXHRcdFx0XHRcdHdoaWNoLmxhc3RTZWxlY3Rpb24gPSB7XG5cdFx0XHRcdFx0XHRzdGFydDogdlswXS5sZW5ndGgsXG5cdFx0XHRcdFx0XHRlbmQ6IHZbMF0ubGVuZ3RoLFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICh3aGljaC5zaG93c0xpc3QpIHtcblx0XHRcdFx0d2hpY2guZGlzcGxheUxpc3QoKTtcblx0XHRcdH1cblx0XHRcdGlmICh3aGljaC5sYXN0U2VsZWN0aW9uKSB7XG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdHdoaWNoLnNldFNlbGVjdGlvbih3aGljaC5sYXN0U2VsZWN0aW9uLnN0YXJ0LCB3aGljaC5sYXN0U2VsZWN0aW9uLmVuZCk7XG5cdFx0XHRcdH0sIDApO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0Y29uc3Qgc2hvd0RhYiA9ICh3aGljaCkgPT4ge1xuXHRcdGlmICh3aGljaC5pc19hY3RpdmUpIHtcblx0XHRcdHdoaWNoLnNob3dTdWdnZXN0aW9ucyh3aGljaC5kYWIsIGZhbHNlLCBudWxsLCBudWxsKTsgLy8gZG8gYXV0b2NvbXBsZXRpb24sIG5vIGtleSwgbm8gZW5naW5lIHNlbGVjdG9yXG5cdFx0XHR3aGljaC5kYWIgPSBudWxsO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRtYWtlQWN0aXZlKHdoaWNoKTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IG11bHRpU3VibWl0ID0gKCkgPT4ge1xuXHRcdGNvbnN0IHRvUmVzb2x2ZSA9IFtdO1xuXHRcdGZvciAoY29uc3QgZWRpdG9yIG9mIGVkaXRvcnMpIHtcblx0XHRcdGlmIChlZGl0b3Iuc3RhdGUgPT09IENIQU5HRV9QRU5ESU5HIHx8IGVkaXRvci5zdGF0ZSA9PT0gT1BFTikge1xuXHRcdFx0XHR0b1Jlc29sdmUucHVzaChlZGl0b3IpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAodG9SZXNvbHZlLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0aW5pdGlhdGVFZGl0KFxuXHRcdFx0XHQoZmFpbHVyZSkgPT4ge1xuXHRcdFx0XHRcdHBlcmZvcm1DaGFuZ2VzKGZhaWx1cmUpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHQobXNnKSA9PiB7XG5cdFx0XHRcdFx0bXcubm90aWZ5KG1zZywge3RhZzogJ2hvdENhdCd9KTtcblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0cmVzb2x2ZU11bHRpKHRvUmVzb2x2ZSwgKHJlc29sdmVkKSA9PiB7XG5cdFx0XHRsZXQgZmlyc3REYWIgPSBudWxsO1xuXHRcdFx0bGV0IGRvbnRDaGFuZ2UgPSBmYWxzZTtcblx0XHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiByZXNvbHZlZCkge1xuXHRcdFx0XHRpZiAoZWxlbWVudC5sYXN0SW5wdXQgPT09IGVsZW1lbnQuZGFiSW5wdXQpIHtcblx0XHRcdFx0XHRpZiAoZWxlbWVudC5kYWIpIHtcblx0XHRcdFx0XHRcdGlmICghZmlyc3REYWIpIHtcblx0XHRcdFx0XHRcdFx0Zmlyc3REYWIgPSBlbGVtZW50O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoZWxlbWVudC5hY2NlcHRDaGVjayh0cnVlKSkge1xuXHRcdFx0XHRcdFx0ZWxlbWVudC5jb21taXQoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gV2UgZGlkbid0IGRpc2FibGUgYWxsIHRoZSBvcGVuIGVkaXRvcnMsIGJ1dCB3ZSBkaWQgYXN5bmNocm9ub3VzIGNhbGxzLiBJdCBpc1xuXHRcdFx0XHRcdC8vIHRoZW9yZXRpY2FsbHkgcG9zc2libGUgdGhhdCB0aGUgdXNlciBjaGFuZ2VkIHNvbWV0aGluZy4uLlxuXHRcdFx0XHRcdGRvbnRDaGFuZ2UgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoZmlyc3REYWIpIHtcblx0XHRcdFx0c2hvd0RhYihmaXJzdERhYik7XG5cdFx0XHR9IGVsc2UgaWYgKCFkb250Q2hhbmdlKSB7XG5cdFx0XHRcdGluaXRpYXRlRWRpdChcblx0XHRcdFx0XHQoZmFpbHVyZSkgPT4ge1xuXHRcdFx0XHRcdFx0cGVyZm9ybUNoYW5nZXMoZmFpbHVyZSk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHQobXNnKSA9PiB7XG5cdFx0XHRcdFx0XHRtdy5ub3RpZnkobXNnLCB7dGFnOiAnaG90Q2F0J30pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fTtcblx0Y29uc3Qgc2V0TXVsdGlJbnB1dCA9ICgpID0+IHtcblx0XHRpZiAoY29tbWl0QnV0dG9uIHx8IG9uVXBsb2FkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbW1pdEJ1dHRvbiA9IG1ha2UoJ2lucHV0Jyk7XG5cdFx0Y29tbWl0QnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcblx0XHRjb21taXRCdXR0b24udmFsdWUgPSBnZXRNZXNzYWdlKCdtZXNzYWdlcy1jb21taXQnKTtcblx0XHRjb21taXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtdWx0aVN1Ym1pdCk7XG5cdFx0aWYgKG11bHRpU3Bhbikge1xuXHRcdFx0bXVsdGlTcGFuLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGNvbW1pdEJ1dHRvbiwgbXVsdGlTcGFuKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2F0TGluZS5hcHBlbmQoY29tbWl0QnV0dG9uKTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IGNoZWNrTXVsdGlJbnB1dCA9ICgpID0+IHtcblx0XHRpZiAoIWNvbW1pdEJ1dHRvbikge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRsZXQgaGFzQ2hhbmdlcyA9IGZhbHNlO1xuXHRcdGZvciAoY29uc3QgZWRpdG9yIG9mIGVkaXRvcnMpIHtcblx0XHRcdGlmIChlZGl0b3Iuc3RhdGUgIT09IFVOQ0hBTkdFRCkge1xuXHRcdFx0XHRoYXNDaGFuZ2VzID0gdHJ1ZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNvbW1pdEJ1dHRvbi5kaXNhYmxlZCA9ICFoYXNDaGFuZ2VzO1xuXHR9O1xuXHRjb25zdCBzdWdnZXN0aW9uRW5naW5lcyA9IHtcblx0XHRvcGVuc2VhcmNoOiB7XG5cdFx0XHR1cmk6IGAke213LmNvbmZpZy5nZXQoXG5cdFx0XHRcdCd3Z1NjcmlwdFBhdGgnXG5cdFx0XHQpfS9hcGkucGhwP2Zvcm1hdD1qc29uJmFjdGlvbj1vcGVuc2VhcmNoJm5hbWVzcGFjZT0xNCZsaW1pdD0zMCZzZWFyY2g9Q2F0ZWdvcnk6JDFgLFxuXHRcdFx0Ly8gJDEgPSBzZWFyY2ggdGVybVxuXHRcdFx0Ly8gRnVuY3Rpb24gdG8gY29udmVydCByZXN1bHQgb2YgdXJpIGludG8gYW4gYXJyYXkgb2YgY2F0ZWdvcnkgbmFtZXNcblx0XHRcdGhhbmRsZXI6IChxdWVyeVJlc3VsdCwgcXVlcnlLZXkpID0+IHtcblx0XHRcdFx0aWYgKHF1ZXJ5UmVzdWx0ICYmIHF1ZXJ5UmVzdWx0Lmxlbmd0aCA+PSAyKSB7XG5cdFx0XHRcdFx0Y29uc3Qga2V5ID0gcXVlcnlSZXN1bHRbMF0uc2xpY2UoTWF0aC5tYXgoMCwgcXVlcnlSZXN1bHRbMF0uaW5kZXhPZignOicpICsgMSkpO1xuXHRcdFx0XHRcdGNvbnN0IFssIHRpdGxlc10gPSBxdWVyeVJlc3VsdDtcblx0XHRcdFx0XHRsZXQgZXhpc3RzID0gZmFsc2U7XG5cdFx0XHRcdFx0aWYgKCFjYXRfcHJlZml4KSB7XG5cdFx0XHRcdFx0XHRjYXRfcHJlZml4ID0gbmV3IFJlZ0V4cChgXigke0hDLmNhdGVnb3J5X3JlZ2V4cH0pOmApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRpdGxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0Y2F0X3ByZWZpeC5sYXN0SW5kZXggPSAwO1xuXHRcdFx0XHRcdFx0Y29uc3QgbSA9IGNhdF9wcmVmaXguZXhlYyh0aXRsZXNbaV0pO1xuXHRcdFx0XHRcdFx0aWYgKG0gJiYgbS5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdFx0XHRcdHRpdGxlc1tpXSA9IHRpdGxlc1tpXS5zbGljZShNYXRoLm1heCgwLCB0aXRsZXNbaV0uaW5kZXhPZignOicpICsgMSkpOyAvLyBybSBuYW1lc3BhY2Vcblx0XHRcdFx0XHRcdFx0aWYgKGtleSA9PT0gdGl0bGVzW2ldKSB7XG5cdFx0XHRcdFx0XHRcdFx0ZXhpc3RzID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dGl0bGVzLnNwbGljZShpLCAxKTsgLy8gTm9wZSwgaXQncyBub3QgYSBjYXRlZ29yeSBhZnRlciBhbGwuXG5cdFx0XHRcdFx0XHRcdGktLTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGl0bGVzLmV4aXN0cyA9IGV4aXN0cztcblx0XHRcdFx0XHRpZiAocXVlcnlLZXkgIT09IGtleSkge1xuXHRcdFx0XHRcdFx0dGl0bGVzLm5vcm1hbGl6ZWQgPSBrZXk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIFJlbWVtYmVyIHRoZSBORkMgbm9ybWFsaXplZCBrZXkgd2UgZ290IGJhY2sgZnJvbSB0aGUgc2VydmVyXG5cdFx0XHRcdFx0cmV0dXJuIHRpdGxlcztcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRpbnRlcm5hbHNlYXJjaDoge1xuXHRcdFx0dXJpOiBgJHttdy5jb25maWcuZ2V0KFxuXHRcdFx0XHQnd2dTY3JpcHRQYXRoJ1xuXHRcdFx0KX0vYXBpLnBocD9mb3JtYXQ9anNvbiZhY3Rpb249cXVlcnkmbGlzdD1hbGxwYWdlcyZhcG5hbWVzcGFjZT0xNCZhcGxpbWl0PTMwJmFwZnJvbT0kMSZhcHByZWZpeD0kMWAsXG5cdFx0XHRoYW5kbGVyOiAocXVlcnlSZXN1bHQpID0+IHtcblx0XHRcdFx0aWYgKHF1ZXJ5UmVzdWx0ICYmIHF1ZXJ5UmVzdWx0LnF1ZXJ5ICYmIHF1ZXJ5UmVzdWx0LnF1ZXJ5LmFsbHBhZ2VzKSB7XG5cdFx0XHRcdFx0Y29uc3QgdGl0bGVzID0gcXVlcnlSZXN1bHQucXVlcnkuYWxscGFnZXM7XG5cdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aXRsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdHRpdGxlc1tpXSA9IHRpdGxlc1tpXS50aXRsZS5zbGljZShNYXRoLm1heCgwLCB0aXRsZXNbaV0udGl0bGUuaW5kZXhPZignOicpICsgMSkpO1xuXHRcdFx0XHRcdH0gLy8gcm0gbmFtZXNwYWNlXG5cdFx0XHRcdFx0cmV0dXJuIHRpdGxlcztcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRleGlzdHM6IHtcblx0XHRcdHVyaTogYCR7bXcuY29uZmlnLmdldCgnd2dTY3JpcHRQYXRoJyl9L2FwaS5waHA/Zm9ybWF0PWpzb24mYWN0aW9uPXF1ZXJ5JnByb3A9aW5mbyZ0aXRsZXM9Q2F0ZWdvcnk6JDFgLFxuXHRcdFx0aGFuZGxlcjogKHF1ZXJ5UmVzdWx0LCBxdWVyeUtleSkgPT4ge1xuXHRcdFx0XHRpZiAocXVlcnlSZXN1bHQgJiYgcXVlcnlSZXN1bHQucXVlcnkgJiYgcXVlcnlSZXN1bHQucXVlcnkucGFnZXMgJiYgIXF1ZXJ5UmVzdWx0LnF1ZXJ5LnBhZ2VzWy0xXSkge1xuXHRcdFx0XHRcdC8vIFNob3VsZCBoYXZlIGV4YWN0bHkgMVxuXHRcdFx0XHRcdGZvciAoY29uc3QgcCBpbiBxdWVyeVJlc3VsdC5xdWVyeS5wYWdlcykge1xuXHRcdFx0XHRcdFx0aWYgKCFPYmplY3QuaGFzT3duKHF1ZXJ5UmVzdWx0LnF1ZXJ5LnBhZ2VzLCBwKSkge1xuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGxldCBfdGl0bGUgPSBxdWVyeVJlc3VsdC5xdWVyeS5wYWdlc1twXS50aXRsZTtcblx0XHRcdFx0XHRcdF90aXRsZSA9IF90aXRsZS5zbGljZShNYXRoLm1heCgwLCBfdGl0bGUuaW5kZXhPZignOicpICsgMSkpO1xuXHRcdFx0XHRcdFx0Y29uc3QgdGl0bGVzID0gW190aXRsZV07XG5cdFx0XHRcdFx0XHR0aXRsZXMuZXhpc3RzID0gdHJ1ZTtcblx0XHRcdFx0XHRcdGlmIChxdWVyeUtleSAhPT0gX3RpdGxlKSB7XG5cdFx0XHRcdFx0XHRcdHRpdGxlcy5ub3JtYWxpemVkID0gX3RpdGxlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Ly8gTkZDXG5cdFx0XHRcdFx0XHRyZXR1cm4gdGl0bGVzO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRzdWJjYXRlZ29yaWVzOiB7XG5cdFx0XHR1cmk6IGAke213LmNvbmZpZy5nZXQoXG5cdFx0XHRcdCd3Z1NjcmlwdFBhdGgnXG5cdFx0XHQpfS9hcGkucGhwP2Zvcm1hdD1qc29uJmFjdGlvbj1xdWVyeSZsaXN0PWNhdGVnb3J5bWVtYmVycyZjbXR5cGU9c3ViY2F0JmNtbGltaXQ9bWF4JmNtdGl0bGU9Q2F0ZWdvcnk6JDFgLFxuXHRcdFx0aGFuZGxlcjogKHF1ZXJ5UmVzdWx0KSA9PiB7XG5cdFx0XHRcdGlmIChxdWVyeVJlc3VsdCAmJiBxdWVyeVJlc3VsdC5xdWVyeSAmJiBxdWVyeVJlc3VsdC5xdWVyeS5jYXRlZ29yeW1lbWJlcnMpIHtcblx0XHRcdFx0XHRjb25zdCB0aXRsZXMgPSBxdWVyeVJlc3VsdC5xdWVyeS5jYXRlZ29yeW1lbWJlcnM7XG5cdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aXRsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdHRpdGxlc1tpXSA9IHRpdGxlc1tpXS50aXRsZS5zbGljZShNYXRoLm1heCgwLCB0aXRsZXNbaV0udGl0bGUuaW5kZXhPZignOicpICsgMSkpO1xuXHRcdFx0XHRcdH0gLy8gcm0gbmFtZXNwYWNlXG5cdFx0XHRcdFx0cmV0dXJuIHRpdGxlcztcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRwYXJlbnRjYXRlZ29yaWVzOiB7XG5cdFx0XHR1cmk6IGAke213LmNvbmZpZy5nZXQoXG5cdFx0XHRcdCd3Z1NjcmlwdFBhdGgnXG5cdFx0XHQpfS9hcGkucGhwP2Zvcm1hdD1qc29uJmFjdGlvbj1xdWVyeSZwcm9wPWNhdGVnb3JpZXMmdGl0bGVzPUNhdGVnb3J5OiQxJmNsbGltaXQ9bWF4YCxcblx0XHRcdGhhbmRsZXI6IChxdWVyeVJlc3VsdCkgPT4ge1xuXHRcdFx0XHRpZiAocXVlcnlSZXN1bHQgJiYgcXVlcnlSZXN1bHQucXVlcnkgJiYgcXVlcnlSZXN1bHQucXVlcnkucGFnZXMpIHtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IHAgaW4gcXVlcnlSZXN1bHQucXVlcnkucGFnZXMpIHtcblx0XHRcdFx0XHRcdGlmIChxdWVyeVJlc3VsdC5xdWVyeS5wYWdlc1twXS5jYXRlZ29yaWVzKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHRpdGxlcyA9IHF1ZXJ5UmVzdWx0LnF1ZXJ5LnBhZ2VzW3BdLmNhdGVnb3JpZXM7XG5cdFx0XHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGl0bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGl0bGVzW2ldID0gdGl0bGVzW2ldLnRpdGxlLnNsaWNlKE1hdGgubWF4KDAsIHRpdGxlc1tpXS50aXRsZS5pbmRleE9mKCc6JykgKyAxKSk7XG5cdFx0XHRcdFx0XHRcdH0gLy8gcm0gbmFtZXNwYWNlXG5cdFx0XHRcdFx0XHRcdHJldHVybiB0aXRsZXM7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fSxcblx0XHR9LFxuXHR9O1xuXHRjb25zdCBzdWdnZXN0aW9uQ29uZmlncyA9IHtcblx0XHRzZWFyY2hpbmRleDoge1xuXHRcdFx0bmFtZTogJ1NlYXJjaCBpbmRleCcsXG5cdFx0XHRlbmdpbmVzOiBbJ29wZW5zZWFyY2gnXSxcblx0XHRcdGNhY2hlOiB7fSxcblx0XHRcdHNob3c6IHRydWUsXG5cdFx0XHR0ZW1wOiBmYWxzZSxcblx0XHRcdG5vQ29tcGxldGlvbjogZmFsc2UsXG5cdFx0fSxcblx0XHRwYWdlbGlzdDoge1xuXHRcdFx0bmFtZTogJ1BhZ2UgbGlzdCcsXG5cdFx0XHRlbmdpbmVzOiBbJ2ludGVybmFsc2VhcmNoJywgJ2V4aXN0cyddLFxuXHRcdFx0Y2FjaGU6IHt9LFxuXHRcdFx0c2hvdzogdHJ1ZSxcblx0XHRcdHRlbXA6IGZhbHNlLFxuXHRcdFx0bm9Db21wbGV0aW9uOiBmYWxzZSxcblx0XHR9LFxuXHRcdGNvbWJpbmVkOiB7XG5cdFx0XHRuYW1lOiAnQ29tYmluZWQgc2VhcmNoJyxcblx0XHRcdGVuZ2luZXM6IFsnb3BlbnNlYXJjaCcsICdpbnRlcm5hbHNlYXJjaCddLFxuXHRcdFx0Y2FjaGU6IHt9LFxuXHRcdFx0c2hvdzogdHJ1ZSxcblx0XHRcdHRlbXA6IGZhbHNlLFxuXHRcdFx0bm9Db21wbGV0aW9uOiBmYWxzZSxcblx0XHR9LFxuXHRcdHN1YmNhdDoge1xuXHRcdFx0bmFtZTogJ1N1YmNhdGVnb3JpZXMnLFxuXHRcdFx0ZW5naW5lczogWydzdWJjYXRlZ29yaWVzJ10sXG5cdFx0XHRjYWNoZToge30sXG5cdFx0XHRzaG93OiB0cnVlLFxuXHRcdFx0dGVtcDogdHJ1ZSxcblx0XHRcdG5vQ29tcGxldGlvbjogdHJ1ZSxcblx0XHR9LFxuXHRcdHBhcmVudGNhdDoge1xuXHRcdFx0bmFtZTogJ1BhcmVudCBjYXRlZ29yaWVzJyxcblx0XHRcdGVuZ2luZXM6IFsncGFyZW50Y2F0ZWdvcmllcyddLFxuXHRcdFx0Y2FjaGU6IHt9LFxuXHRcdFx0c2hvdzogdHJ1ZSxcblx0XHRcdHRlbXA6IHRydWUsXG5cdFx0XHRub0NvbXBsZXRpb246IHRydWUsXG5cdFx0fSxcblx0fTtcblx0Ly8gRXZlbnQga2V5Q29kZXMgdGhhdCB3ZSBoYW5kbGUgaW4gdGhlIHRleHQgaW5wdXQgZmllbGQvc3VnZ2VzdGlvbiBsaXN0LlxuXHRjb25zdCBCUyA9IDg7XG5cdGNvbnN0IFRBQiA9IDk7XG5cdGNvbnN0IFJFVCA9IDEzO1xuXHRjb25zdCBFU0MgPSAyNztcblx0Y29uc3QgU1BBQ0UgPSAzMjtcblx0Y29uc3QgUEdVUCA9IDMzO1xuXHRjb25zdCBQR0RPV04gPSAzNDtcblx0Y29uc3QgVVAgPSAzODtcblx0Y29uc3QgRE9XTiA9IDQwO1xuXHRjb25zdCBERUwgPSA0Njtcblx0Y29uc3QgSU1FID0gMjI5O1xuXHRjbGFzcyBDYXRlZ29yeUVkaXRvciB7XG5cdFx0Y29uc3RydWN0b3IoLi4uYXJncykge1xuXHRcdFx0dGhpcy5pbml0aWFsaXplKC4uLmFyZ3MpO1xuXHRcdH1cblx0XHRpbml0aWFsaXplKGxpbmUsIHNwYW4sIGFmdGVyLCBrZXksIGlzX2hpZGRlbikge1xuXHRcdFx0Ly8gSWYgYSBzcGFuIGlzIGdpdmVuLCAnYWZ0ZXInIGlzIHRoZSBjYXRlZ29yeSB0aXRsZSwgb3RoZXJ3aXNlIGl0IG1heSBiZSBhbiBlbGVtZW50IGFmdGVyIHdoaWNoIHRvXG5cdFx0XHQvLyBpbnNlcnQgdGhlIG5ldyBzcGFuLiAna2V5JyBpcyBsaWtld2lzZSBvdmVybG9hZGVkOyBpZiBhIHNwYW4gaXMgZ2l2ZW4sIGl0IGlzIHRoZSBjYXRlZ29yeSBrZXkgKGlmXG5cdFx0XHQvLyBrbm93biksIG90aGVyd2lzZSBpdCBpcyBhIGJvb2xlYW4gaW5kaWNhdGluZyB3aGV0aGVyIGEgYmFyIHNoYWxsIGJlIHByZXBlbmRlZC5cblx0XHRcdGlmIChzcGFuKSB7XG5cdFx0XHRcdGlmIChpc19ydGwpIHtcblx0XHRcdFx0XHRzcGFuLmRpciA9ICdydGwnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuaXNBZGRDYXRlZ29yeSA9IGZhbHNlO1xuXHRcdFx0XHR0aGlzLmNhdExpbmsgPSBzcGFuLmZpcnN0Q2hpbGQ7XG5cdFx0XHRcdHRoaXMub3JpZ2luYWxDYXRlZ29yeSA9IGFmdGVyO1xuXHRcdFx0XHR0aGlzLm9yaWdpbmFsS2V5ID0ga2V5ICYmIGtleS5sZW5ndGggPiAxID8ga2V5LnNsaWNlKDEpIDogbnVsbDsgLy8gPiAxIGJlY2F1c2UgaXQgaW5jbHVkZXMgdGhlIGxlYWRpbmcgYmFyXG5cdFx0XHRcdHRoaXMub3JpZ2luYWxFeGlzdHMgPSAhaGFzQ2xhc3ModGhpcy5jYXRMaW5rLCAnbmV3Jyk7XG5cdFx0XHRcdC8vIENyZWF0ZSBjaGFuZ2UgYW5kIGRlbCBsaW5rc1xuXHRcdFx0XHR0aGlzLm1ha2VMaW5rU3BhbigpO1xuXHRcdFx0XHRpZiAoIXRoaXMub3JpZ2luYWxFeGlzdHMgJiYgdGhpcy51cERvd25MaW5rcykge1xuXHRcdFx0XHRcdHRoaXMudXBEb3duTGlua3Muc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0XHRzcGFuLmFwcGVuZCh0aGlzLmxpbmtTcGFuKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuaXNBZGRDYXRlZ29yeSA9IHRydWU7XG5cdFx0XHRcdC8vIENyZWF0ZSBhZGQgc3BhbiBhbmQgYXBwZW5kIHRvIGNhdExpbmtzXG5cdFx0XHRcdHRoaXMub3JpZ2luYWxDYXRlZ29yeSA9ICcnO1xuXHRcdFx0XHR0aGlzLm9yaWdpbmFsS2V5ID0gbnVsbDtcblx0XHRcdFx0dGhpcy5vcmlnaW5hbEV4aXN0cyA9IGZhbHNlO1xuXHRcdFx0XHRpZiAoIW5ld0RPTSkge1xuXHRcdFx0XHRcdHNwYW4gPSBtYWtlKCdzcGFuJyk7XG5cdFx0XHRcdFx0c3Bhbi5jbGFzc05hbWUgPSAnbm9wcmludCc7XG5cdFx0XHRcdFx0aWYgKGtleSkge1xuXHRcdFx0XHRcdFx0c3Bhbi5hcHBlbmQobWFrZSgnIHwgJywgdHJ1ZSkpO1xuXHRcdFx0XHRcdFx0aWYgKGFmdGVyKSB7XG5cdFx0XHRcdFx0XHRcdGFmdGVyLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNwYW4sIGFmdGVyLm5leHRTaWJsaW5nKTtcblx0XHRcdFx0XHRcdFx0YWZ0ZXIgPSBhZnRlci5uZXh0U2libGluZztcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobGluZSkge1xuXHRcdFx0XHRcdFx0XHRsaW5lLmFwcGVuZChzcGFuKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2UgaWYgKGxpbmUgJiYgbGluZS5maXJzdENoaWxkKSB7XG5cdFx0XHRcdFx0XHRzcGFuLmFwcGVuZChtYWtlKCcgJywgdHJ1ZSkpO1xuXHRcdFx0XHRcdFx0bGluZS5hcHBlbmQoc3Bhbik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMubGlua1NwYW4gPSBtYWtlKCdzcGFuJyk7XG5cdFx0XHRcdHRoaXMubGlua1NwYW4uY2xhc3NOYW1lID0gJ25vcHJpbnQgbm9wb3B1cHMgaG90Y2F0bGluayc7XG5cdFx0XHRcdGNvbnN0IGxpbmsgPSBtYWtlKCdhJyk7XG5cdFx0XHRcdGxpbmsuaHJlZiA9ICcjY2F0bGlua3MnO1xuXHRcdFx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vcGVuLmJpbmQodGhpcykpO1xuXHRcdFx0XHRsaW5rLmFwcGVuZChtYWtlKEhDLmxpbmtzLmFkZCwgdHJ1ZSkpO1xuXHRcdFx0XHRsaW5rLnRpdGxlID0gZ2V0TWVzc2FnZSgndG9vbHRpcHMtYWRkJyk7XG5cdFx0XHRcdHRoaXMubGlua1NwYW4uYXBwZW5kKGxpbmspO1xuXHRcdFx0XHRzcGFuID0gbWFrZShuZXdET00gPyAnbGknIDogJ3NwYW4nKTtcblx0XHRcdFx0c3Bhbi5jbGFzc05hbWUgPSAnbm9wcmludCc7XG5cdFx0XHRcdGlmIChpc19ydGwpIHtcblx0XHRcdFx0XHRzcGFuLmRpciA9ICdydGwnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHNwYW4uYXBwZW5kKHRoaXMubGlua1NwYW4pO1xuXHRcdFx0XHRpZiAoYWZ0ZXIpIHtcblx0XHRcdFx0XHRhZnRlci5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzcGFuLCBhZnRlci5uZXh0U2libGluZyk7XG5cdFx0XHRcdH0gZWxzZSBpZiAobGluZSkge1xuXHRcdFx0XHRcdGxpbmUuYXBwZW5kKHNwYW4pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMubm9ybWFsTGlua3MgPSBudWxsO1xuXHRcdFx0XHR0aGlzLnVuZGVsTGluayA9IG51bGw7XG5cdFx0XHRcdHRoaXMuY2F0TGluayA9IG51bGw7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLm9yaWdpbmFsSGlkZGVuID0gaXNfaGlkZGVuO1xuXHRcdFx0dGhpcy5saW5lID0gbGluZTtcblx0XHRcdHRoaXMuZW5naW5lID0gSEMuc3VnZ2VzdGlvbnM7XG5cdFx0XHR0aGlzLnNwYW4gPSBzcGFuO1xuXHRcdFx0dGhpcy5jdXJyZW50Q2F0ZWdvcnkgPSB0aGlzLm9yaWdpbmFsQ2F0ZWdvcnk7XG5cdFx0XHR0aGlzLmN1cnJlbnRFeGlzdHMgPSB0aGlzLm9yaWdpbmFsRXhpc3RzO1xuXHRcdFx0dGhpcy5jdXJyZW50SGlkZGVuID0gdGhpcy5vcmlnaW5hbEhpZGRlbjtcblx0XHRcdHRoaXMuY3VycmVudEtleSA9IHRoaXMub3JpZ2luYWxLZXk7XG5cdFx0XHR0aGlzLnN0YXRlID0gVU5DSEFOR0VEO1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRTdGF0ZSA9IFVOQ0hBTkdFRDtcblx0XHRcdHRoaXMubGFzdFNhdmVkQ2F0ZWdvcnkgPSB0aGlzLm9yaWdpbmFsQ2F0ZWdvcnk7XG5cdFx0XHR0aGlzLmxhc3RTYXZlZEtleSA9IHRoaXMub3JpZ2luYWxLZXk7XG5cdFx0XHR0aGlzLmxhc3RTYXZlZEV4aXN0cyA9IHRoaXMub3JpZ2luYWxFeGlzdHM7XG5cdFx0XHR0aGlzLmxhc3RTYXZlZEhpZGRlbiA9IHRoaXMub3JpZ2luYWxIaWRkZW47XG5cdFx0XHRpZiAodGhpcy5jYXRMaW5rICYmIHRoaXMuY3VycmVudEtleSkge1xuXHRcdFx0XHR0aGlzLmNhdExpbmsudGl0bGUgPSB0aGlzLmN1cnJlbnRLZXk7XG5cdFx0XHR9XG5cdFx0XHRlZGl0b3JzW2VkaXRvcnMubGVuZ3RoXSA9IHRoaXM7XG5cdFx0fVxuXHRcdG1ha2VMaW5rU3BhbigpIHtcblx0XHRcdHRoaXMubm9ybWFsTGlua3MgPSBtYWtlKCdzcGFuJyk7XG5cdFx0XHRsZXQgbGluayA9IG51bGw7XG5cdFx0XHRpZiAodGhpcy5vcmlnaW5hbENhdGVnb3J5ICYmIHRoaXMub3JpZ2luYWxDYXRlZ29yeS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdGxpbmsgPSBtYWtlKCdhJyk7XG5cdFx0XHRcdGxpbmsuaHJlZiA9ICcjY2F0bGlua3MnO1xuXHRcdFx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5yZW1vdmUuYmluZCh0aGlzKSk7XG5cdFx0XHRcdGxpbmsuYXBwZW5kKG1ha2UoSEMubGlua3MucmVtb3ZlLCB0cnVlKSk7XG5cdFx0XHRcdGxpbmsudGl0bGUgPSBnZXRNZXNzYWdlKCd0b29sdGlwcy1yZW1vdmUnKTtcblx0XHRcdFx0dGhpcy5ub3JtYWxMaW5rcy5hcHBlbmQobWFrZSgnICcsIHRydWUpKTtcblx0XHRcdFx0dGhpcy5ub3JtYWxMaW5rcy5hcHBlbmQobGluayk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIUhDLnRlbXBsYXRlX2NhdGVnb3JpZXNbdGhpcy5vcmlnaW5hbENhdGVnb3J5XSkge1xuXHRcdFx0XHRsaW5rID0gbWFrZSgnYScpO1xuXHRcdFx0XHRsaW5rLmhyZWYgPSAnI2NhdGxpbmtzJztcblx0XHRcdFx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3Blbi5iaW5kKHRoaXMpKTtcblx0XHRcdFx0bGluay5hcHBlbmQobWFrZShIQy5saW5rcy5jaGFuZ2UsIHRydWUpKTtcblx0XHRcdFx0bGluay50aXRsZSA9IGdldE1lc3NhZ2UoJ3Rvb2x0aXBzLWNoYW5nZScpO1xuXHRcdFx0XHR0aGlzLm5vcm1hbExpbmtzLmFwcGVuZChtYWtlKCcgJywgdHJ1ZSkpO1xuXHRcdFx0XHR0aGlzLm5vcm1hbExpbmtzLmFwcGVuZChsaW5rKTtcblx0XHRcdFx0aWYgKCFub1N1Z2dlc3Rpb25zICYmIEhDLnVzZV91cF9kb3duKSB7XG5cdFx0XHRcdFx0dGhpcy51cERvd25MaW5rcyA9IG1ha2UoJ3NwYW4nKTtcblx0XHRcdFx0XHRsaW5rID0gbWFrZSgnYScpO1xuXHRcdFx0XHRcdGxpbmsuaHJlZiA9ICcjY2F0bGlua3MnO1xuXHRcdFx0XHRcdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmRvd24uYmluZCh0aGlzKSk7XG5cdFx0XHRcdFx0bGluay5hcHBlbmQobWFrZShIQy5saW5rcy5kb3duLCB0cnVlKSk7XG5cdFx0XHRcdFx0bGluay50aXRsZSA9IGdldE1lc3NhZ2UoJ3Rvb2x0aXBzLWRvd24nKTtcblx0XHRcdFx0XHR0aGlzLnVwRG93bkxpbmtzLmFwcGVuZChtYWtlKCcgJywgdHJ1ZSkpO1xuXHRcdFx0XHRcdHRoaXMudXBEb3duTGlua3MuYXBwZW5kKGxpbmspO1xuXHRcdFx0XHRcdGxpbmsgPSBtYWtlKCdhJyk7XG5cdFx0XHRcdFx0bGluay5ocmVmID0gJyNjYXRsaW5rcyc7XG5cdFx0XHRcdFx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudXAuYmluZCh0aGlzKSk7XG5cdFx0XHRcdFx0bGluay5hcHBlbmQobWFrZShIQy5saW5rcy51cCwgdHJ1ZSkpO1xuXHRcdFx0XHRcdGxpbmsudGl0bGUgPSBnZXRNZXNzYWdlKCd0b29sdGlwcy11cCcpO1xuXHRcdFx0XHRcdHRoaXMudXBEb3duTGlua3MuYXBwZW5kKG1ha2UoJyAnLCB0cnVlKSk7XG5cdFx0XHRcdFx0dGhpcy51cERvd25MaW5rcy5hcHBlbmQobGluayk7XG5cdFx0XHRcdFx0dGhpcy5ub3JtYWxMaW5rcy5hcHBlbmQodGhpcy51cERvd25MaW5rcyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMubGlua1NwYW4gPSBtYWtlKCdzcGFuJyk7XG5cdFx0XHR0aGlzLmxpbmtTcGFuLmNsYXNzTmFtZSA9ICdub3ByaW50IG5vcG9wdXBzIGhvdGNhdGxpbmsnO1xuXHRcdFx0dGhpcy5saW5rU3Bhbi5hcHBlbmQodGhpcy5ub3JtYWxMaW5rcyk7XG5cdFx0XHR0aGlzLnVuZGVsTGluayA9IG1ha2UoJ3NwYW4nKTtcblx0XHRcdHRoaXMudW5kZWxMaW5rLmNsYXNzTmFtZSA9ICdub3BvcHVwcyBob3RjYXRsaW5rJztcblx0XHRcdHRoaXMudW5kZWxMaW5rLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRsaW5rID0gbWFrZSgnYScpO1xuXHRcdFx0bGluay5ocmVmID0gJyNjYXRsaW5rcyc7XG5cdFx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5yZXN0b3JlLmJpbmQodGhpcykpO1xuXHRcdFx0bGluay5hcHBlbmQobWFrZShIQy5saW5rcy5yZXN0b3JlLCB0cnVlKSk7XG5cdFx0XHRsaW5rLnRpdGxlID0gZ2V0TWVzc2FnZSgndG9vbHRpcHMtcmVzdG9yZScpO1xuXHRcdFx0dGhpcy51bmRlbExpbmsuYXBwZW5kKG1ha2UoJyAnLCB0cnVlKSk7XG5cdFx0XHR0aGlzLnVuZGVsTGluay5hcHBlbmQobGluayk7XG5cdFx0XHR0aGlzLmxpbmtTcGFuLmFwcGVuZCh0aGlzLnVuZGVsTGluayk7XG5cdFx0fVxuXHRcdGludm9rZVN1Z2dlc3Rpb25zKGRvbnRfYXV0b2NvbXBsZXRlKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdHRoaXMuZW5naW5lICYmXG5cdFx0XHRcdHN1Z2dlc3Rpb25Db25maWdzW3RoaXMuZW5naW5lXSAmJlxuXHRcdFx0XHRzdWdnZXN0aW9uQ29uZmlnc1t0aGlzLmVuZ2luZV0udGVtcCAmJlxuXHRcdFx0XHQhZG9udF9hdXRvY29tcGxldGVcblx0XHRcdCkge1xuXHRcdFx0XHR0aGlzLmVuZ2luZSA9IEhDLnN1Z2dlc3Rpb25zO1xuXHRcdFx0fSAvLyBSZXNldCB0byBhIHNlYXJjaCB1cG9uIGlucHV0XG5cdFx0XHR0aGlzLnN0YXRlID0gQ0hBTkdFX1BFTkRJTkc7XG5cdFx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRzZWxmLnRleHRjaGFuZ2UoZG9udF9hdXRvY29tcGxldGUpO1xuXHRcdFx0fSwgSEMuc3VnZ2VzdF9kZWxheSk7XG5cdFx0fVxuXHRcdG1ha2VGb3JtKCkge1xuXHRcdFx0Y29uc3QgZm9ybSA9IG1ha2UoJ2Zvcm0nKTtcblx0XHRcdGZvcm0ubWV0aG9kID0gJ1BPU1QnO1xuXHRcdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLmFjY2VwdC5iaW5kKHRoaXMpKTtcblx0XHRcdHRoaXMuZm9ybSA9IGZvcm07XG5cdFx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRcdGNvbnN0IHRleHQgPSBtYWtlKCdpbnB1dCcpO1xuXHRcdFx0dGV4dC50eXBlID0gJ3RleHQnO1xuXHRcdFx0dGV4dC5zaXplID0gSEMuZWRpdGJveF93aWR0aDtcblx0XHRcdGlmICghbm9TdWdnZXN0aW9ucykge1xuXHRcdFx0XHQvLyBCZSBjYXJlZnVsIGhlcmUgdG8gaGFuZGxlIElNRSBpbnB1dC4gVGhpcyBpcyBicm93c2VyL09TL0lNRSBkZXBlbmRlbnQsIGJ1dCBiYXNpY2FsbHkgdGhlcmUgYXJlIHR3byBtZWNoYW5pc21zOlxuXHRcdFx0XHQvLyAtIE1vZGVybiAoRE9NIExldmVsIDMpIGJyb3dzZXJzIHVzZSBjb21wb3NpdGlvbnN0YXJ0L2NvbXBvc2l0aW9uZW5kIGV2ZW50cyB0byBzaWduYWwgY29tcG9zaXRpb247IGlmIHRoZVxuXHRcdFx0XHQvLyAgIGNvbXBvc2l0aW9uIGlzIG5vdCBjYW5jZWxlZCwgdGhlcmUnbGwgYmUgYSB0ZXh0SW5wdXQgZXZlbnQgZm9sbG93aW5nLiBEdXJpbmcgYSBjb21wb3NpdGlvbiBrZXkgZXZlbnRzIGFyZVxuXHRcdFx0XHQvLyAgIGVpdGhlciBhbGwgc3VwcHJlc3NlZCAoRkYvR2Vja28pLCBvciBvdGhlcndpc2UgaGF2ZSBrZXlEb3duID09PSBJTUUgZm9yIGFsbCBrZXlzIChXZWJraXQpLlxuXHRcdFx0XHQvLyAgIC0gV2Via2l0IHNlbmRzIGEgdGV4dElucHV0IGZvbGxvd2VkIGJ5IGtleURvd24gPT09IElNRSBhbmQgYSBrZXlVcCB3aXRoIHRoZSBrZXkgdGhhdCBlbmRlZCBjb21wb3NpdGlvbi5cblx0XHRcdFx0Ly8gICAtIEdlY2tvIGRvZXNuJ3Qgc2VuZCB0ZXh0SW5wdXQgYnV0IGp1c3QgYSBrZXlVcCB3aXRoIHRoZSBrZXkgdGhhdCBlbmRlZCBjb21wb3NpdGlvbiwgd2l0aG91dCBzZW5kaW5nIGtleURvd25cblx0XHRcdFx0Ly9cdCBmaXJzdC4gR2Vja28gZG9lc24ndCBzZW5kIGFueSBrZXlkb3duIHdoaWxlIElNRSBpcyBhY3RpdmUuXG5cdFx0XHRcdC8vIC0gT2xkZXIgYnJvd3NlcnMgc2lnbmFsIGNvbXBvc2l0aW9uIGJ5IGtleURvd24gPT09IElNRSBmb3IgdGhlIGZpcnN0IGFuZCBzdWJzZXF1ZW50IGtleXMgZm9yIGEgY29tcG9zaXRpb24uIFRoZVxuXHRcdFx0XHQvLyAgIGZpcnN0IGtleURvd24gIT09IElNRSBpcyBjZXJ0YWlubHkgYWZ0ZXIgdGhlIGVuZCBvZiB0aGUgY29tcG9zaXRpb24uIFR5cGljYWxseSwgY29tcG9zaXRpb24gZW5kIGNhbiBhbHNvIGJlXG5cdFx0XHRcdC8vICAgZGV0ZWN0ZWQgYnkgYSBrZXlEb3duIElNRSB3aXRoIGEga2V5VXAgb2Ygc3BhY2UsIHRhYiwgZXNjYXBlLCBvciByZXR1cm4uXG5cdFx0XHRcdHRleHQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRjb25zdCBrZXkgPSBldmVudC5rZXkgfHwgMDtcblx0XHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0XHRzZWxmLmltZSAmJlxuXHRcdFx0XHRcdFx0c2VsZi5sYXN0S2V5ID09PSBJTUUgJiZcblx0XHRcdFx0XHRcdCFzZWxmLnVzZXNDb21wb3NpdGlvbiAmJlxuXHRcdFx0XHRcdFx0KGtleSA9PT0gVEFCIHx8IGtleSA9PT0gUkVUIHx8IGtleSA9PT0gRVNDIHx8IGtleSA9PT0gU1BBQ0UpXG5cdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHRzZWxmLmltZSA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoc2VsZi5pbWUpIHtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoa2V5ID09PSBVUCB8fCBrZXkgPT09IERPV04gfHwga2V5ID09PSBQR1VQIHx8IGtleSA9PT0gUEdET1dOKSB7XG5cdFx0XHRcdFx0XHQvLyBJbiBjYXNlIGEgYnJvd3NlciBkb2Vzbid0IGdlbmVyYXRlIGtleXByZXNzIGV2ZW50cyBmb3IgYXJyb3cga2V5cy4uLlxuXHRcdFx0XHRcdFx0aWYgKHNlbGYua2V5Q291bnQgPT09IDApIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHNlbGYucHJvY2Vzc0tleShldmVudCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGlmIChrZXkgPT09IEVTQyAmJiBzZWxmLmxhc3RLZXkgIT09IElNRSAmJiAhc2VsZi5yZXNldEtleVNlbGVjdGlvbigpKSB7XG5cdFx0XHRcdFx0XHRcdC8vIE5vIHVuZG8gb2Yga2V5IHNlbGVjdGlvbjogdHJlYXQgRVNDIGFzIFwiY2FuY2VsXCIuXG5cdFx0XHRcdFx0XHRcdHNlbGYuY2FuY2VsKCk7XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC8vIEFsc28gZG8gdGhpcyBmb3IgRVNDIGFzIGEgd29ya2Fyb3VuZCBmb3IgRmlyZWZveCBidWcgNTI0MzYwXG5cdFx0XHRcdFx0XHQvLyB7QGxpbmsgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NTI0MzYwfVxuXHRcdFx0XHRcdFx0c2VsZi5pbnZva2VTdWdnZXN0aW9ucyhrZXkgPT09IEJTIHx8IGtleSA9PT0gREVMIHx8IGtleSA9PT0gRVNDKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHR0ZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRjb25zdCBrZXkgPSBldmVudC5rZXkgfHwgMDtcblx0XHRcdFx0XHRzZWxmLmxhc3RLZXkgPSBrZXk7XG5cdFx0XHRcdFx0c2VsZi5rZXlDb3VudCA9IDA7XG5cdFx0XHRcdFx0Ly8gRE9NIExldmVsIDwgMyBJTUUgaW5wdXRcblx0XHRcdFx0XHRpZiAoIXNlbGYuaW1lICYmIGtleSA9PT0gSU1FICYmICFzZWxmLnVzZXNDb21wb3NpdGlvbikge1xuXHRcdFx0XHRcdFx0Ly8gc2VsZi51c2VzQ29tcG9zaXRpb24gY2F0Y2hlcyBicm93c2VycyB0aGF0IG1heSBlbWl0IHNwdXJpb3VzIGtleWRvd24gSU1FIGFmdGVyIGEgY29tcG9zaXRpb24gaGFzIGVuZGVkXG5cdFx0XHRcdFx0XHRzZWxmLmltZSA9IHRydWU7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChcblx0XHRcdFx0XHRcdHNlbGYuaW1lICYmXG5cdFx0XHRcdFx0XHRrZXkgIT09IElNRSAmJlxuXHRcdFx0XHRcdFx0ISgoa2V5ID49IDE2ICYmIGtleSA8PSAyMCkgfHwgKGtleSA+PSA5MSAmJiBrZXkgPD0gOTMpIHx8IGtleSA9PT0gMTQ0KVxuXHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0Ly8gSWdub3JlIGNvbnRyb2wga2V5czogY3RybCwgc2hpZnQsIGFsdCwgYWx0IGdyLCBjYXBzIGxvY2ssIHdpbmRvd3MvYXBwbGUgY21kIGtleXMsIG51bSBsb2NrLiBPbmx5IHRoZSB3aW5kb3dzIGtleXNcblx0XHRcdFx0XHRcdC8vIHRlcm1pbmF0ZSBJTUUgKGFwcGxlIGNtZCBkb2Vzbid0KSwgYnV0IHRoZXkgYWxzbyBjYXVzZSBhIGJsdXIsIHNvIGl0J3MgT0sgdG8gaWdub3JlIHRoZW0gaGVyZS5cblx0XHRcdFx0XHRcdC8vIE5vdGU6IFNhZmFyaSA0ICg1MzAuMTcpIHByb3BhZ2F0ZXMgRVNDIG91dCBvZiBhbiBJTUUgY29tcG9zaXRpb24gKG9ic2VydmVkIGF0IGxlYXN0IG9uIFdpbiBYUCkuXG5cdFx0XHRcdFx0XHRzZWxmLmltZSA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoc2VsZi5pbWUpIHtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBIYW5kbGUgcmV0dXJuIGV4cGxpY2l0bHksIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IGZvcm0gc3VibWlzc2lvbiB0byBiZSBhYmxlIHRvIGNoZWNrIGZvciBjdHJsXG5cdFx0XHRcdFx0aWYgKGtleSA9PT0gUkVUKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gc2VsZi5hY2NlcHQoZXZlbnQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBJbmhpYml0IGRlZmF1bHQgYmVoYXZpb3Igb2YgRVNDIChyZXZlcnQgdG8gbGFzdCByZWFsIGlucHV0IGluIEZGOiB3ZSBkbyB0aGF0IG91cnNlbHZlcylcblx0XHRcdFx0XHRyZXR1cm4ga2V5ID09PSBFU0MgPyBldnRLaWxsKGV2ZW50KSA6IHRydWU7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHQvLyBBbmQgaGFuZGxlIGNvbnRpbnVlZCBwcmVzc2luZyBvZiBhcnJvdyBrZXlzXG5cdFx0XHRcdHRleHQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRzZWxmLmtleUNvdW50Kys7XG5cdFx0XHRcdFx0cmV0dXJuIHNlbGYucHJvY2Vzc0tleShldmVudCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHQkKHRleHQpLm9uKCdmb2N1cycsICgpID0+IHtcblx0XHRcdFx0XHRtYWtlQWN0aXZlKHNlbGYpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0Ly8gT24gSUUsIGJsdXIgZXZlbnRzIGFyZSBhc3luY2hyb25vdXMsIGFuZCBtYXkgdGh1cyBhcnJpdmUgYWZ0ZXIgdGhlIGVsZW1lbnQgaGFzIGxvc3QgdGhlIGZvY3VzLiBTaW5jZSBJRVxuXHRcdFx0XHQvLyBjYW4gZ2V0IHRoZSBzZWxlY3Rpb24gb25seSB3aGlsZSB0aGUgZWxlbWVudCBpcyBhY3RpdmUgKGhhcyB0aGUgZm9jdXMpLCB3ZSBtYXkgbm90IGFsd2F5cyBnZXQgdGhlIHNlbGVjdGlvbi5cblx0XHRcdFx0Ly8gVGhlcmVmb3JlLCB1c2UgYW4gSUUtc3BlY2lmaWMgc3luY2hyb25vdXMgZXZlbnQgb24gSUUuLi5cblx0XHRcdFx0Ly8gRG9uJ3QgdGVzdCBmb3IgdGV4dC5zZWxlY3Rpb25TdGFydCBiZWluZyBkZWZpbmVkO1xuXHRcdFx0XHQkKHRleHQpLm9uKFxuXHRcdFx0XHRcdHRleHQub25iZWZvcmVkZWFjdGl2YXRlICE9PSB1bmRlZmluZWQgJiYgdGV4dC5jcmVhdGVUZXh0UmFuZ2UgPyAnYmVmb3JlZGVhY3RpdmF0ZScgOiAnYmx1cicsXG5cdFx0XHRcdFx0dGhpcy5zYXZlVmlldy5iaW5kKHRoaXMpXG5cdFx0XHRcdCk7XG5cdFx0XHRcdC8vIERPTSBMZXZlbCAzIElNRSBoYW5kbGluZ1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFNldHRpbmcgbGFzdEtleSA9IElNRSBwcm92aWRlcyBhIGZha2Uga2V5RG93biBmb3IgR2Vja28ncyBzaW5nbGUga2V5VXAgYWZ0ZXIgYSBjbXBvc2l0aW9uLiBJZiB3ZSBkaWRuJ3QgZG8gdGhpcyxcblx0XHRcdFx0XHQvLyBjYW5jZWxsaW5nIGEgY29tcG9zaXRpb24gdmlhIEVTQyB3b3VsZCBhbHNvIGNhbmNlbCBhbmQgY2xvc2UgdGhlIHdob2xlIGNhdGVnb3J5IGlucHV0IGVkaXRvci5cblx0XHRcdFx0XHQkKHRleHQpLm9uKCdjb21wb3NpdGlvbnN0YXJ0JywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0c2VsZi5sYXN0S2V5ID0gSU1FO1xuXHRcdFx0XHRcdFx0c2VsZi51c2VzQ29tcG9zaXRpb24gPSB0cnVlO1xuXHRcdFx0XHRcdFx0c2VsZi5pbWUgPSB0cnVlO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdCQodGV4dCkub24oJ2NvbXBvc2l0aW9uZW5kJywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0c2VsZi5sYXN0S2V5ID0gSU1FO1xuXHRcdFx0XHRcdFx0c2VsZi51c2VzQ29tcG9zaXRpb24gPSB0cnVlO1xuXHRcdFx0XHRcdFx0c2VsZi5pbWUgPSBmYWxzZTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHQkKHRleHQpLm9uKCd0ZXh0SW5wdXQnLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRzZWxmLmltZSA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0c2VsZi5pbnZva2VTdWdnZXN0aW9ucyhmYWxzZSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdC8vIEp1c3QgaW4gY2FzZSBzb21lIGJyb3dzZXJzIG1pZ2h0IHByb2R1Y2UgZXhjZXB0aW9ucyB3aXRoIHRoZXNlIERPTSBMZXZlbCAzIGV2ZW50c1xuXHRcdFx0XHR9XG5cdFx0XHRcdCQodGV4dCkub24oJ2JsdXInLCAoKSA9PiB7XG5cdFx0XHRcdFx0c2VsZi51c2VzQ29tcG9zaXRpb24gPSBmYWxzZTtcblx0XHRcdFx0XHRzZWxmLmltZSA9IGZhbHNlO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdHRoaXMudGV4dCA9IHRleHQ7XG5cdFx0XHR0aGlzLmljb24gPSBtYWtlKCdpbWcnKTtcblx0XHRcdGxldCBsaXN0ID0gbnVsbDtcblx0XHRcdGlmICghbm9TdWdnZXN0aW9ucykge1xuXHRcdFx0XHRsaXN0ID0gbWFrZSgnc2VsZWN0Jyk7XG5cdFx0XHRcdGxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHNlbGYuaGlnaGxpZ2h0U3VnZ2VzdGlvbigwKSkge1xuXHRcdFx0XHRcdFx0c2VsZi50ZXh0Y2hhbmdlKGZhbHNlLCB0cnVlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2RibGNsaWNrJywgKGUpID0+IHtcblx0XHRcdFx0XHRpZiAoc2VsZi5oaWdobGlnaHRTdWdnZXN0aW9uKDApKSB7XG5cdFx0XHRcdFx0XHRzZWxmLmFjY2VwdChlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcblx0XHRcdFx0XHRzZWxmLmhpZ2hsaWdodFN1Z2dlc3Rpb24oMCk7XG5cdFx0XHRcdFx0c2VsZi50ZXh0LmZvY3VzKCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0aWYgKGV2ZW50LmtleSA9PT0gRVNDKSB7XG5cdFx0XHRcdFx0XHRzZWxmLnJlc2V0S2V5U2VsZWN0aW9uKCk7XG5cdFx0XHRcdFx0XHRzZWxmLnRleHQuZm9jdXMoKTtcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRzZWxmLnRleHRjaGFuZ2UodHJ1ZSk7XG5cdFx0XHRcdFx0XHR9LCBIQy5zdWdnZXN0X2RlbGF5KTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gUkVUKSB7XG5cdFx0XHRcdFx0XHRzZWxmLmFjY2VwdChldmVudCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0aWYgKCFIQy5maXhlZF9zZWFyY2gpIHtcblx0XHRcdFx0XHRjb25zdCBlbmdpbmVTZWxlY3RvciA9IG1ha2UoJ3NlbGVjdCcpO1xuXHRcdFx0XHRcdGZvciAoY29uc3Qga2V5IGluIHN1Z2dlc3Rpb25Db25maWdzKSB7XG5cdFx0XHRcdFx0XHRpZiAoc3VnZ2VzdGlvbkNvbmZpZ3Nba2V5XS5zaG93KSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IG9wdCA9IG1ha2UoJ29wdGlvbicpO1xuXHRcdFx0XHRcdFx0XHRvcHQudmFsdWUgPSBrZXk7XG5cdFx0XHRcdFx0XHRcdGlmIChrZXkgPT09IHRoaXMuZW5naW5lKSB7XG5cdFx0XHRcdFx0XHRcdFx0b3B0LnNlbGVjdGVkID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRvcHQuYXBwZW5kKG1ha2Uoc3VnZ2VzdGlvbkNvbmZpZ3Nba2V5XS5uYW1lLCB0cnVlKSk7XG5cdFx0XHRcdFx0XHRcdGVuZ2luZVNlbGVjdG9yLmFwcGVuZChvcHQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbmdpbmVTZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRzZWxmLmVuZ2luZSA9IHNlbGYuZW5naW5lU2VsZWN0b3Iub3B0aW9uc1tzZWxmLmVuZ2luZVNlbGVjdG9yLnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xuXHRcdFx0XHRcdFx0c2VsZi50ZXh0LmZvY3VzKCk7XG5cdFx0XHRcdFx0XHRzZWxmLnRleHRjaGFuZ2UodHJ1ZSwgdHJ1ZSk7IC8vIERvbid0IGF1dG9jb21wbGV0ZSwgZm9yY2UgcmUtZGlzcGxheSBvZiBsaXN0XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3RvciA9IGVuZ2luZVNlbGVjdG9yO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmxpc3QgPSBsaXN0O1xuXHRcdFx0Y29uc3QgYnV0dG9uX2xhYmVsID0gKF9pZCwgZGVmYXVsdFRleHQpID0+IHtcblx0XHRcdFx0Y29uc3QgbGFiZWwgPSBudWxsO1xuXHRcdFx0XHRpZiAoIWxhYmVsIHx8ICFsYWJlbC5kYXRhKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGRlZmF1bHRUZXh0O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBsYWJlbC5kYXRhO1xuXHRcdFx0fTtcblx0XHRcdC8vIERvIG5vdCB1c2UgdHlwZSAnc3VibWl0Jzsgd2UgY2Fubm90IGRldGVjdCBtb2RpZmllciBrZXlzIGlmIHdlIGRvXG5cdFx0XHRjb25zdCBPSyA9IG1ha2UoJ2lucHV0Jyk7XG5cdFx0XHRPSy50eXBlID0gJ2J1dHRvbic7XG5cdFx0XHRPSy52YWx1ZSA9IGJ1dHRvbl9sYWJlbCgnd3BPa1VwbG9hZExibCcsIGdldE1lc3NhZ2UoJ21lc3NhZ2VzLW9rJykpO1xuXHRcdFx0T0suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmFjY2VwdC5iaW5kKHRoaXMpKTtcblx0XHRcdHRoaXMub2sgPSBPSztcblx0XHRcdGNvbnN0IGNhbmNlbCA9IG1ha2UoJ2lucHV0Jyk7XG5cdFx0XHRjYW5jZWwudHlwZSA9ICdidXR0b24nO1xuXHRcdFx0Y2FuY2VsLnZhbHVlID0gYnV0dG9uX2xhYmVsKCd3cENhbmNlbFVwbG9hZExibCcsIGdldE1lc3NhZ2UoJ21lc3NhZ2VzLWNhbmNlbCcpKTtcblx0XHRcdGNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2FuY2VsLmJpbmQodGhpcykpO1xuXHRcdFx0dGhpcy5jYW5jZWxCdXR0b24gPSBjYW5jZWw7XG5cdFx0XHRjb25zdCBzcGFuID0gbWFrZSgnc3BhbicpO1xuXHRcdFx0c3Bhbi5jbGFzc05hbWUgPSAnaG90Y2F0aW5wdXQnO1xuXHRcdFx0c3Bhbi5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG5cdFx0XHRzcGFuLmFwcGVuZCh0ZXh0KTtcblx0XHRcdC8vIFB1dCBzb21lIHRleHQgaW50byB0aGlzIHNwYW4gKGEwIGlzIG5ic3ApIGFuZCBtYWtlIHN1cmUgaXQgYWx3YXlzIHN0YXlzIG9uIHRoZSBzYW1lXG5cdFx0XHQvLyBsaW5lIGFzIHRoZSBpbnB1dCBmaWVsZCwgb3RoZXJ3aXNlLCBJRTgvOSBtaXNjYWxjdWxhdGVzIHRoZSBoZWlnaHQgb2YgdGhlIHNwYW4gYW5kXG5cdFx0XHQvLyB0aGVuIHRoZSBlbmdpbmUgc2VsZWN0b3IgbWF5IG92ZXJsYXAgdGhlIGlucHV0IGZpZWxkLlxuXHRcdFx0c3Bhbi5hcHBlbmQobWFrZSgnXFx1MDBBMCcsIHRydWUpKTtcblx0XHRcdHNwYW4uc3R5bGUud2hpdGVTcGFjZSA9ICdub3dyYXAnO1xuXHRcdFx0aWYgKGxpc3QpIHtcblx0XHRcdFx0c3Bhbi5hcHBlbmQobGlzdCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5lbmdpbmVTZWxlY3Rvcikge1xuXHRcdFx0XHRzcGFuLmFwcGVuZCh0aGlzLmVuZ2luZVNlbGVjdG9yKTtcblx0XHRcdH1cblx0XHRcdGlmICghbm9TdWdnZXN0aW9ucykge1xuXHRcdFx0XHRzcGFuLmFwcGVuZCh0aGlzLmljb24pO1xuXHRcdFx0fVxuXHRcdFx0c3Bhbi5hcHBlbmQoT0spO1xuXHRcdFx0c3Bhbi5hcHBlbmQoY2FuY2VsKTtcblx0XHRcdGZvcm0uYXBwZW5kKHNwYW4pO1xuXHRcdFx0Zm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0dGhpcy5zcGFuLmFwcGVuZChmb3JtKTtcblx0XHR9XG5cdFx0ZGlzcGxheShldmVudCkge1xuXHRcdFx0aWYgKHRoaXMuaXNBZGRDYXRlZ29yeSAmJiAhb25VcGxvYWQgJiYgdGhpcy5saW5lKSB7XG5cdFx0XHRcdG5ldyBDYXRlZ29yeUVkaXRvcih0aGlzLmxpbmUsIG51bGwsIHRoaXMuc3BhbiwgdHJ1ZSk7IC8vIENyZWF0ZSBhIG5ldyBvbmVcblx0XHRcdH1cblx0XHRcdGlmICghY29tbWl0QnV0dG9uICYmICFvblVwbG9hZCkge1xuXHRcdFx0XHRmb3IgKGNvbnN0IGVkaXRvciBvZiBlZGl0b3JzKSB7XG5cdFx0XHRcdFx0aWYgKGVkaXRvci5zdGF0ZSAhPT0gVU5DSEFOR0VEKSB7XG5cdFx0XHRcdFx0XHRzZXRNdWx0aUlucHV0KCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICghdGhpcy5mb3JtKSB7XG5cdFx0XHRcdHRoaXMubWFrZUZvcm0oKTtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLmxpc3QpIHtcblx0XHRcdFx0dGhpcy5saXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5lbmdpbmVTZWxlY3Rvcikge1xuXHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmN1cnJlbnRDYXRlZ29yeSA9IHRoaXMubGFzdFNhdmVkQ2F0ZWdvcnk7XG5cdFx0XHR0aGlzLmN1cnJlbnRFeGlzdHMgPSB0aGlzLmxhc3RTYXZlZEV4aXN0cztcblx0XHRcdHRoaXMuY3VycmVudEhpZGRlbiA9IHRoaXMubGFzdFNhdmVkSGlkZGVuO1xuXHRcdFx0dGhpcy5jdXJyZW50S2V5ID0gdGhpcy5sYXN0U2F2ZWRLZXk7XG5cdFx0XHR0aGlzLmljb24uc3JjID0gdGhpcy5jdXJyZW50RXhpc3RzID8gSEMuZXhpc3RzWWVzIDogSEMuZXhpc3RzTm87XG5cdFx0XHR0aGlzLnRleHQudmFsdWUgPSB0aGlzLmN1cnJlbnRDYXRlZ29yeSArICh0aGlzLmN1cnJlbnRLZXkgPT09IG51bGwgPyAnJyA6IGB8JHt0aGlzLmN1cnJlbnRLZXl9YCk7XG5cdFx0XHR0aGlzLm9yaWdpbmFsU3RhdGUgPSB0aGlzLnN0YXRlO1xuXHRcdFx0dGhpcy5sYXN0SW5wdXQgPSB0aGlzLmN1cnJlbnRDYXRlZ29yeTtcblx0XHRcdHRoaXMuaW5wdXRFeGlzdHMgPSB0aGlzLmN1cnJlbnRFeGlzdHM7XG5cdFx0XHR0aGlzLnN0YXRlID0gdGhpcy5zdGF0ZSA9PT0gVU5DSEFOR0VEID8gT1BFTiA6IENIQU5HRV9QRU5ESU5HO1xuXHRcdFx0dGhpcy5sYXN0U2VsZWN0aW9uID0ge1xuXHRcdFx0XHRzdGFydDogdGhpcy5jdXJyZW50Q2F0ZWdvcnkubGVuZ3RoLFxuXHRcdFx0XHRlbmQ6IHRoaXMuY3VycmVudENhdGVnb3J5Lmxlbmd0aCxcblx0XHRcdH07XG5cdFx0XHR0aGlzLnNob3dzTGlzdCA9IGZhbHNlO1xuXHRcdFx0Ly8gRGlzcGxheSB0aGUgZm9ybVxuXHRcdFx0aWYgKHRoaXMuY2F0TGluaykge1xuXHRcdFx0XHR0aGlzLmNhdExpbmsuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdH1cblx0XHRcdHRoaXMubGlua1NwYW4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdHRoaXMuZm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XG5cdFx0XHR0aGlzLm9rLmRpc2FibGVkID0gZmFsc2U7XG5cdFx0XHQvLyBLaWxsIHRoZSBldmVudCBiZWZvcmUgZm9jdXNzaW5nLCBvdGhlcndpc2UgSUUgd2lsbCBraWxsIHRoZSBvbmZvY3VzIGV2ZW50IVxuXHRcdFx0Y29uc3QgcmVzdWx0ID0gZXZ0S2lsbChldmVudCk7XG5cdFx0XHR0aGlzLnRleHQuZm9jdXMoKTtcblx0XHRcdHRoaXMudGV4dC5yZWFkT25seSA9IGZhbHNlO1xuXHRcdFx0Y2hlY2tNdWx0aUlucHV0KCk7XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblx0XHRzaG93KGV2ZW50LCBlbmdpbmUsIHJlYWRPbmx5KSB7XG5cdFx0XHRjb25zdCByZXN1bHQgPSB0aGlzLmRpc3BsYXkoZXZlbnQpO1xuXHRcdFx0Y29uc3QgdiA9IHRoaXMubGFzdFNhdmVkQ2F0ZWdvcnk7XG5cdFx0XHRpZiAodi5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdH1cblx0XHRcdHRoaXMudGV4dC5yZWFkT25seSA9ICEhcmVhZE9ubHk7XG5cdFx0XHR0aGlzLmVuZ2luZSA9IGVuZ2luZTtcblx0XHRcdHRoaXMudGV4dGNoYW5nZShmYWxzZSwgdHJ1ZSk7IC8vIGRvIGF1dG9jb21wbGV0aW9uLCBmb3JjZSBkaXNwbGF5IG9mIHN1Z2dlc3Rpb25zXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblx0XHRvcGVuKGV2ZW50KSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5zaG93KGV2ZW50LCB0aGlzLmVuZ2luZSAmJiBzdWdnZXN0aW9uQ29uZmlnc1t0aGlzLmVuZ2luZV0udGVtcCA/IEhDLnN1Z2dlc3Rpb25zIDogdGhpcy5lbmdpbmUpO1xuXHRcdH1cblx0XHRkb3duKGV2ZW50KSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5zaG93KGV2ZW50LCAnc3ViY2F0JywgdHJ1ZSk7XG5cdFx0fVxuXHRcdHVwKGV2ZW50KSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5zaG93KGV2ZW50LCAncGFyZW50Y2F0Jyk7XG5cdFx0fVxuXHRcdGNhbmNlbCgpIHtcblx0XHRcdGlmICh0aGlzLmlzQWRkQ2F0ZWdvcnkgJiYgIW9uVXBsb2FkKSB7XG5cdFx0XHRcdHRoaXMucmVtb3ZlRWRpdG9yKCk7IC8vIFdlIGFkZGVkIGEgbmV3IGFkZGVyIHdoZW4gb3BlbmluZ1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHQvLyBDbG9zZSwgcmUtZGlzcGxheSBsaW5rXG5cdFx0XHR0aGlzLmluYWN0aXZhdGUoKTtcblx0XHRcdHRoaXMuZm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0aWYgKHRoaXMuY2F0TGluaykge1xuXHRcdFx0XHR0aGlzLmNhdExpbmsuc3R5bGUuZGlzcGxheSA9ICcnO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5saW5rU3Bhbi5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cdFx0XHR0aGlzLnN0YXRlID0gdGhpcy5vcmlnaW5hbFN0YXRlO1xuXHRcdFx0dGhpcy5jdXJyZW50Q2F0ZWdvcnkgPSB0aGlzLmxhc3RTYXZlZENhdGVnb3J5O1xuXHRcdFx0dGhpcy5jdXJyZW50S2V5ID0gdGhpcy5sYXN0U2F2ZWRLZXk7XG5cdFx0XHR0aGlzLmN1cnJlbnRFeGlzdHMgPSB0aGlzLmxhc3RTYXZlZEV4aXN0cztcblx0XHRcdHRoaXMuY3VycmVudEhpZGRlbiA9IHRoaXMubGFzdFNhdmVkSGlkZGVuO1xuXHRcdFx0aWYgKHRoaXMuY2F0TGluaykge1xuXHRcdFx0XHR0aGlzLmNhdExpbmsudGl0bGUgPSB0aGlzLmN1cnJlbnRLZXkgJiYgdGhpcy5jdXJyZW50S2V5Lmxlbmd0aCA+IDAgPyB0aGlzLmN1cnJlbnRLZXkgOiAnJztcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLnN0YXRlID09PSBVTkNIQU5HRUQpIHtcblx0XHRcdFx0aWYgKHRoaXMuY2F0TGluaykge1xuXHRcdFx0XHRcdHRoaXMuY2F0TGluay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKCFvblVwbG9hZCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHRoaXMuY2F0TGluay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBIQy5iZ19jaGFuZ2VkO1xuXHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHQvKiBlbXB0eSAqL1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRjaGVja011bHRpSW5wdXQoKTtcblx0XHR9XG5cdFx0cmVtb3ZlRWRpdG9yKCkge1xuXHRcdFx0aWYgKCFuZXdET00pIHtcblx0XHRcdFx0Y29uc3QgbmV4dCA9IHRoaXMuc3Bhbi5uZXh0U2libGluZztcblx0XHRcdFx0aWYgKG5leHQpIHtcblx0XHRcdFx0XHRuZXh0LnJlbW92ZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5zcGFuICYmIHRoaXMuc3Bhbi5wYXJlbnROb2RlKSB7XG5cdFx0XHRcdHRoaXMuc3Bhbi5yZW1vdmUoKTtcblx0XHRcdH1cblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZWRpdG9ycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAoZWRpdG9yc1tpXSA9PT0gdGhpcykge1xuXHRcdFx0XHRcdGVkaXRvcnMuc3BsaWNlKGksIDEpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRjaGVja011bHRpSW5wdXQoKTtcblx0XHR9XG5cdFx0cm9sbGJhY2soZXZlbnQpIHtcblx0XHRcdHRoaXMudW5kb0xpbmsucmVtb3ZlKCk7XG5cdFx0XHR0aGlzLnVuZG9MaW5rID0gbnVsbDtcblx0XHRcdHRoaXMuY3VycmVudENhdGVnb3J5ID0gdGhpcy5vcmlnaW5hbENhdGVnb3J5O1xuXHRcdFx0dGhpcy5jdXJyZW50S2V5ID0gdGhpcy5vcmlnaW5hbEtleTtcblx0XHRcdHRoaXMuY3VycmVudEV4aXN0cyA9IHRoaXMub3JpZ2luYWxFeGlzdHM7XG5cdFx0XHR0aGlzLmN1cnJlbnRIaWRkZW4gPSB0aGlzLm9yaWdpbmFsSGlkZGVuO1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRDYXRlZ29yeSA9IHRoaXMub3JpZ2luYWxDYXRlZ29yeTtcblx0XHRcdHRoaXMubGFzdFNhdmVkS2V5ID0gdGhpcy5vcmlnaW5hbEtleTtcblx0XHRcdHRoaXMubGFzdFNhdmVkRXhpc3RzID0gdGhpcy5vcmlnaW5hbEV4aXN0cztcblx0XHRcdHRoaXMubGFzdFNhdmVkSGlkZGVuID0gdGhpcy5vcmlnaW5hbEhpZGRlbjtcblx0XHRcdHRoaXMuc3RhdGUgPSBVTkNIQU5HRUQ7XG5cdFx0XHRpZiAoIXRoaXMuY3VycmVudENhdGVnb3J5IHx8IHRoaXMuY3VycmVudENhdGVnb3J5Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHQvLyBJdCB3YXMgYSBuZXdseSBhZGRlZCBjYXRlZ29yeS4gUmVtb3ZlIHRoZSB3aG9sZSBlZGl0b3IuXG5cdFx0XHRcdHRoaXMucmVtb3ZlRWRpdG9yKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBSZWRpc3BsYXkgdGhlIGxpbmsuLi5cblx0XHRcdFx0dGhpcy5jYXRMaW5rLmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG5cdFx0XHRcdHRoaXMuY2F0TGluay5hcHBlbmQobWFrZSh0aGlzLmN1cnJlbnRDYXRlZ29yeSwgdHJ1ZSkpO1xuXHRcdFx0XHR0aGlzLmNhdExpbmsuaHJlZiA9IHdpa2lQYWdlUGF0aChgJHtIQy5jYXRlZ29yeV9jYW5vbmljYWx9OiR7dGhpcy5jdXJyZW50Q2F0ZWdvcnl9YCk7XG5cdFx0XHRcdHRoaXMuY2F0TGluay50aXRsZSA9IHRoaXMuY3VycmVudEtleSB8fCAnJztcblx0XHRcdFx0dGhpcy5jYXRMaW5rLmNsYXNzTmFtZSA9IHRoaXMuY3VycmVudEV4aXN0cyA/ICcnIDogJ25ldyc7XG5cdFx0XHRcdHRoaXMuY2F0TGluay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xuXHRcdFx0XHRpZiAodGhpcy51cERvd25MaW5rcykge1xuXHRcdFx0XHRcdHRoaXMudXBEb3duTGlua3Muc3R5bGUuZGlzcGxheSA9IHRoaXMuY3VycmVudEV4aXN0cyA/ICcnIDogJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNoZWNrTXVsdGlJbnB1dCgpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGV2dEtpbGwoZXZlbnQpO1xuXHRcdH1cblx0XHRpbmFjdGl2YXRlKCkge1xuXHRcdFx0aWYgKHRoaXMubGlzdCkge1xuXHRcdFx0XHR0aGlzLmxpc3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLmVuZ2luZVNlbGVjdG9yKSB7XG5cdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdH1cblx0XHRcdHRoaXMuaXNfYWN0aXZlID0gZmFsc2U7XG5cdFx0fVxuXHRcdGFjY2VwdENoZWNrKGRvbnRDaGVjaykge1xuXHRcdFx0dGhpcy5zYW5pdGl6ZUlucHV0KCk7XG5cdFx0XHRjb25zdCB2YWx1ZSA9IHRoaXMudGV4dC52YWx1ZS5zcGxpdCgnfCcpO1xuXHRcdFx0bGV0IGtleSA9IG51bGw7XG5cdFx0XHRpZiAodmFsdWUubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRbLCBrZXldID0gdmFsdWU7XG5cdFx0XHR9XG5cdFx0XHRsZXQgdiA9IHZhbHVlWzBdLnJlcGxhY2UoL18vZywgJyAnKS50cmltKCk7XG5cdFx0XHRpZiAoSEMuY2FwaXRhbGl6ZVBhZ2VOYW1lcykge1xuXHRcdFx0XHR2ID0gY2FwaXRhbGl6ZSh2KTtcblx0XHRcdH1cblx0XHRcdHRoaXMubGFzdElucHV0ID0gdjtcblx0XHRcdHYgPSByZXBsYWNlU2hvcnRjdXRzKHYsIEhDLnNob3J0Y3V0cyk7XG5cdFx0XHRpZiAodi5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0dGhpcy5jYW5jZWwoKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKFxuXHRcdFx0XHQhZG9udENoZWNrICYmXG5cdFx0XHRcdCgoY29uZi53Z05hbWVzcGFjZU51bWJlciA9PT0gMTQgJiYgdiA9PT0gY29uZi53Z1RpdGxlKSB8fCAoSEMuYmxhY2tsaXN0ICYmIEhDLmJsYWNrbGlzdC50ZXN0KHYpKSlcblx0XHRcdCkge1xuXHRcdFx0XHR0aGlzLmNhbmNlbCgpO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmN1cnJlbnRDYXRlZ29yeSA9IHY7XG5cdFx0XHR0aGlzLmN1cnJlbnRLZXkgPSBrZXk7XG5cdFx0XHR0aGlzLmN1cnJlbnRFeGlzdHMgPSB0aGlzLmlucHV0RXhpc3RzO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdGFjY2VwdChldmVudCkge1xuXHRcdFx0Ly8gKGV2dEtleXMoZXZlbnQpICYgMSkgIT09IDBcblx0XHRcdC8vIOW9k+S4lOS7heW9k2V2dEtleXMoZXZlbnQp5Li6MeaXtu+8jOaVtOS4quWIpOWIq+W8j+aJjeS4unRydWVcblx0XHRcdHRoaXMubm9Db21taXQgPSBldnRLZXlzKGV2ZW50KSA9PT0gMTtcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGV2dEtpbGwoZXZlbnQpO1xuXHRcdFx0aWYgKHRoaXMuYWNjZXB0Q2hlY2soKSkge1xuXHRcdFx0XHRjb25zdCB0b1Jlc29sdmUgPSBbdGhpc107XG5cdFx0XHRcdGNvbnN0IG9yaWdpbmFsID0gdGhpcy5jdXJyZW50Q2F0ZWdvcnk7XG5cdFx0XHRcdHJlc29sdmVNdWx0aSh0b1Jlc29sdmUsIChyZXNvbHZlZCkgPT4ge1xuXHRcdFx0XHRcdGlmIChyZXNvbHZlZFswXS5kYWIpIHtcblx0XHRcdFx0XHRcdHNob3dEYWIocmVzb2x2ZWRbMF0pO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAocmVzb2x2ZWRbMF0uYWNjZXB0Q2hlY2sodHJ1ZSkpIHtcblx0XHRcdFx0XHRcdHJlc29sdmVkWzBdLmNvbW1pdChcblx0XHRcdFx0XHRcdFx0cmVzb2x2ZWRbMF0uY3VycmVudENhdGVnb3J5ID09PSBvcmlnaW5hbFxuXHRcdFx0XHRcdFx0XHRcdD8gbnVsbFxuXHRcdFx0XHRcdFx0XHRcdDogZ2V0TWVzc2FnZSgnbWVzc2FnZXMtY2F0X3Jlc29sdmVkJywgb3JpZ2luYWwpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblx0XHRjbG9zZSgpIHtcblx0XHRcdGlmICghdGhpcy5jYXRMaW5rKSB7XG5cdFx0XHRcdC8vIENyZWF0ZSBhIGNhdExpbmtcblx0XHRcdFx0dGhpcy5jYXRMaW5rID0gbWFrZSgnYScpO1xuXHRcdFx0XHR0aGlzLmNhdExpbmsuYXBwZW5kKG1ha2UoJ2ZvbycsIHRydWUpKTtcblx0XHRcdFx0dGhpcy5jYXRMaW5rLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdHRoaXMuc3Bhbi5pbnNlcnRCZWZvcmUodGhpcy5jYXRMaW5rLCB0aGlzLnNwYW4uZmlyc3RDaGlsZC5uZXh0U2libGluZyk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmNhdExpbmsuZmlyc3RDaGlsZC5yZW1vdmUoKTtcblx0XHRcdHRoaXMuY2F0TGluay5hcHBlbmQobWFrZSh0aGlzLmN1cnJlbnRDYXRlZ29yeSwgdHJ1ZSkpO1xuXHRcdFx0dGhpcy5jYXRMaW5rLmhyZWYgPSB3aWtpUGFnZVBhdGgoYCR7SEMuY2F0ZWdvcnlfY2Fub25pY2FsfToke3RoaXMuY3VycmVudENhdGVnb3J5fWApO1xuXHRcdFx0dGhpcy5jYXRMaW5rLmNsYXNzTmFtZSA9IHRoaXMuY3VycmVudEV4aXN0cyA/ICcnIDogJ25ldyc7XG5cdFx0XHR0aGlzLmxhc3RTYXZlZENhdGVnb3J5ID0gdGhpcy5jdXJyZW50Q2F0ZWdvcnk7XG5cdFx0XHR0aGlzLmxhc3RTYXZlZEtleSA9IHRoaXMuY3VycmVudEtleTtcblx0XHRcdHRoaXMubGFzdFNhdmVkRXhpc3RzID0gdGhpcy5jdXJyZW50RXhpc3RzO1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRIaWRkZW4gPSB0aGlzLmN1cnJlbnRIaWRkZW47XG5cdFx0XHQvLyBDbG9zZSBmb3JtIGFuZCByZWRpc3BsYXkgY2F0ZWdvcnlcblx0XHRcdHRoaXMuaW5hY3RpdmF0ZSgpO1xuXHRcdFx0dGhpcy5mb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHR0aGlzLmNhdExpbmsudGl0bGUgPSB0aGlzLmN1cnJlbnRLZXkgfHwgJyc7XG5cdFx0XHR0aGlzLmNhdExpbmsuc3R5bGUuZGlzcGxheSA9ICcnO1xuXHRcdFx0aWYgKHRoaXMuaXNBZGRDYXRlZ29yeSkge1xuXHRcdFx0XHRpZiAob25VcGxvYWQgJiYgdGhpcy5saW5lKSB7XG5cdFx0XHRcdFx0bmV3IENhdGVnb3J5RWRpdG9yKHRoaXMubGluZSwgbnVsbCwgdGhpcy5zcGFuLCB0cnVlKTsgLy8gQ3JlYXRlIGEgbmV3IG9uZVxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuaXNBZGRDYXRlZ29yeSA9IGZhbHNlO1xuXHRcdFx0XHR0aGlzLmxpbmtTcGFuLnJlbW92ZSgpO1xuXHRcdFx0XHR0aGlzLm1ha2VMaW5rU3BhbigpO1xuXHRcdFx0XHR0aGlzLnNwYW4uYXBwZW5kKHRoaXMubGlua1NwYW4pO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCF0aGlzLnVuZG9MaW5rKSB7XG5cdFx0XHRcdC8vIEFwcGVuZCBhbiB1bmRvIGxpbmsuXG5cdFx0XHRcdGNvbnN0IHNwYW4gPSBtYWtlKCdzcGFuJyk7XG5cdFx0XHRcdGNvbnN0IGxpbmsgPSBtYWtlKCdhJyk7XG5cdFx0XHRcdGxpbmsuaHJlZiA9ICcjY2F0bGlua3MnO1xuXHRcdFx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5yb2xsYmFjay5iaW5kKHRoaXMpKTtcblx0XHRcdFx0bGluay5hcHBlbmQobWFrZShIQy5saW5rcy51bmRvLCB0cnVlKSk7XG5cdFx0XHRcdGxpbmsudGl0bGUgPSBnZXRNZXNzYWdlKCd0b29sdGlwcy11bmRvJyk7XG5cdFx0XHRcdHNwYW4uYXBwZW5kKG1ha2UoJyAnLCB0cnVlKSk7XG5cdFx0XHRcdHNwYW4uYXBwZW5kKGxpbmspO1xuXHRcdFx0XHR0aGlzLm5vcm1hbExpbmtzLmFwcGVuZChzcGFuKTtcblx0XHRcdFx0dGhpcy51bmRvTGluayA9IHNwYW47XG5cdFx0XHRcdGlmICghb25VcGxvYWQpIHtcblx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0dGhpcy5jYXRMaW5rLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IEhDLmJnX2NoYW5nZWQ7XG5cdFx0XHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdFx0XHQvKiBlbXB0eSAqL1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMudXBEb3duTGlua3MpIHtcblx0XHRcdFx0dGhpcy51cERvd25MaW5rcy5zdHlsZS5kaXNwbGF5ID0gdGhpcy5sYXN0U2F2ZWRFeGlzdHMgPyAnJyA6ICdub25lJztcblx0XHRcdH1cblx0XHRcdHRoaXMubGlua1NwYW4uc3R5bGUuZGlzcGxheSA9ICcnO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IENIQU5HRUQ7XG5cdFx0XHRjaGVja011bHRpSW5wdXQoKTtcblx0XHR9XG5cdFx0Y29tbWl0KCkge1xuXHRcdFx0Ly8gQ2hlY2sgYWdhaW4gdG8gY2F0Y2ggcHJvYmxlbSBjYXNlcyBhZnRlciByZWRpcmVjdCByZXNvbHV0aW9uXG5cdFx0XHRpZiAoXG5cdFx0XHRcdCh0aGlzLmN1cnJlbnRDYXRlZ29yeSA9PT0gdGhpcy5vcmlnaW5hbENhdGVnb3J5ICYmXG5cdFx0XHRcdFx0KHRoaXMuY3VycmVudEtleSA9PT0gdGhpcy5vcmlnaW5hbEtleSB8fFxuXHRcdFx0XHRcdFx0KHRoaXMuY3VycmVudEtleSA9PT0gbnVsbCAmJiB0aGlzLm9yaWdpbmFsS2V5Lmxlbmd0aCA9PT0gMCkpKSB8fFxuXHRcdFx0XHQoY29uZi53Z05hbWVzcGFjZU51bWJlciA9PT0gMTQgJiYgdGhpcy5jdXJyZW50Q2F0ZWdvcnkgPT09IGNvbmYud2dUaXRsZSkgfHxcblx0XHRcdFx0KEhDLmJsYWNrbGlzdCAmJiBIQy5ibGFja2xpc3QudGVzdCh0aGlzLmN1cnJlbnRDYXRlZ29yeSkpXG5cdFx0XHQpIHtcblx0XHRcdFx0dGhpcy5jYW5jZWwoKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5jbG9zZSgpO1xuXHRcdFx0aWYgKCFjb21taXRCdXR0b24gJiYgIW9uVXBsb2FkKSB7XG5cdFx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdFx0XHRpbml0aWF0ZUVkaXQoXG5cdFx0XHRcdFx0KGZhaWx1cmUpID0+IHtcblx0XHRcdFx0XHRcdHBlcmZvcm1DaGFuZ2VzKGZhaWx1cmUsIHNlbGYpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0KG1zZykgPT4ge1xuXHRcdFx0XHRcdFx0bXcubm90aWZ5KG1zZywge3RhZzogJ2hvdENhdCd9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJlbW92ZShldmVudCkge1xuXHRcdFx0Ly8gKGV2dEtleXMoZXZlbnQpICYgMSlcblx0XHRcdC8vIOW9k+S4lOS7heW9k2V2dEtleXMoZXZlbnQp5Li6MeaXtu+8jOaVtOS4quWIpOWIq+W8j+aJjeS4ujHvvIzlkKbliJnpg73mmK8wXG5cdFx0XHR0aGlzLmRvUmVtb3ZlKGV2dEtleXMoZXZlbnQpID09PSAxKTtcblx0XHRcdHJldHVybiBldnRLaWxsKGV2ZW50KTtcblx0XHR9XG5cdFx0ZG9SZW1vdmUobm9Db21taXQpIHtcblx0XHRcdGlmICh0aGlzLmlzQWRkQ2F0ZWdvcnkpIHtcblx0XHRcdFx0Ly8gRW1wdHkgaW5wdXQgb24gYWRkaW5nIGEgbmV3IGNhdGVnb3J5XG5cdFx0XHRcdHRoaXMuY2FuY2VsKCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmICghY29tbWl0QnV0dG9uICYmICFvblVwbG9hZCkge1xuXHRcdFx0XHRmb3IgKGNvbnN0IGVkaXRvciBvZiBlZGl0b3JzKSB7XG5cdFx0XHRcdFx0aWYgKGVkaXRvci5zdGF0ZSAhPT0gVU5DSEFOR0VEKSB7XG5cdFx0XHRcdFx0XHRzZXRNdWx0aUlucHV0KCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChjb21taXRCdXR0b24pIHtcblx0XHRcdFx0dGhpcy5jYXRMaW5rLnRpdGxlID0gJyc7XG5cdFx0XHRcdHRoaXMuY2F0TGluay5zdHlsZS5jc3NUZXh0ICs9ICc7IHRleHQtZGVjb3JhdGlvbiA6IGxpbmUtdGhyb3VnaCAhaW1wb3J0YW50Oyc7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0dGhpcy5jYXRMaW5rLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IEhDLmJnX2NoYW5nZWQ7XG5cdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdC8qIGVtcHR5ICovXG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5vcmlnaW5hbFN0YXRlID0gdGhpcy5zdGF0ZTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IERFTEVURUQ7XG5cdFx0XHRcdHRoaXMubm9ybWFsTGlua3Muc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0dGhpcy51bmRlbExpbmsuc3R5bGUuZGlzcGxheSA9ICcnO1xuXHRcdFx0XHRjaGVja011bHRpSW5wdXQoKTtcblx0XHRcdH0gZWxzZSBpZiAob25VcGxvYWQpIHtcblx0XHRcdFx0Ly8gUmVtb3ZlIHRoaXMgZWRpdG9yIGNvbXBsZXRlbHlcblx0XHRcdFx0dGhpcy5yZW1vdmVFZGl0b3IoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMub3JpZ2luYWxTdGF0ZSA9IHRoaXMuc3RhdGU7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSBERUxFVEVEO1xuXHRcdFx0XHR0aGlzLm5vQ29tbWl0ID0gbm9Db21taXQgfHwgSEMuZGVsX25lZWRzX2RpZmY7XG5cdFx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdFx0XHRpbml0aWF0ZUVkaXQoXG5cdFx0XHRcdFx0KGZhaWx1cmUpID0+IHtcblx0XHRcdFx0XHRcdHBlcmZvcm1DaGFuZ2VzKGZhaWx1cmUsIHNlbGYpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0KG1zZykgPT4ge1xuXHRcdFx0XHRcdFx0c2VsZi5zdGF0ZSA9IHNlbGYub3JpZ2luYWxTdGF0ZTtcblx0XHRcdFx0XHRcdG13Lm5vdGlmeShtc2csIHt0YWc6ICdob3RDYXQnfSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXN0b3JlKGV2ZW50KSB7XG5cdFx0XHQvLyBDYW4gb2NjdXIgb25seSBpZiB3ZSBkbyBoYXZlIGEgY29tbWl0IGJ1dHRvbiBhbmQgYXJlIG5vdCBvbiB0aGUgdXBsb2FkIGZvcm1cblx0XHRcdHRoaXMuY2F0TGluay50aXRsZSA9IHRoaXMuY3VycmVudEtleSB8fCAnJztcblx0XHRcdHRoaXMuY2F0TGluay5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICcnO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IHRoaXMub3JpZ2luYWxTdGF0ZTtcblx0XHRcdGlmICh0aGlzLnN0YXRlID09PSBVTkNIQU5HRUQpIHtcblx0XHRcdFx0dGhpcy5jYXRMaW5rLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHRoaXMuY2F0TGluay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBIQy5iZ19jaGFuZ2VkO1xuXHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHQvKiBlbXB0eSAqL1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLm5vcm1hbExpbmtzLnN0eWxlLmRpc3BsYXkgPSAnJztcblx0XHRcdHRoaXMudW5kZWxMaW5rLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRjaGVja011bHRpSW5wdXQoKTtcblx0XHRcdHJldHVybiBldnRLaWxsKGV2ZW50KTtcblx0XHR9XG5cdFx0Ly8gSW50ZXJuYWwgb3BlcmF0aW9uc1xuXHRcdHNlbGVjdEVuZ2luZShlbmdpbmVOYW1lKSB7XG5cdFx0XHRpZiAoIXRoaXMuZW5naW5lU2VsZWN0b3IpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmVuZ2luZVNlbGVjdG9yLm9wdGlvbnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5vcHRpb25zW2ldLnNlbGVjdGVkID0gdGhpcy5lbmdpbmVTZWxlY3Rvci5vcHRpb25zW2ldLnZhbHVlID09PSBlbmdpbmVOYW1lO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRzYW5pdGl6ZUlucHV0KCkge1xuXHRcdFx0bGV0IHYgPSB0aGlzLnRleHQudmFsdWUgfHwgJyc7XG5cdFx0XHR2ID0gdi5yZXBsYWNlKC9eKFxcc3xfKSsvLCAnJyk7IC8vIFRyaW0gbGVhZGluZyBibGFua3MgYW5kIHVuZGVyc2NvcmVzXG5cdFx0XHRjb25zdCByZSA9IG5ldyBSZWdFeHAoYF4oJHtIQy5jYXRlZ29yeV9yZWdleHB9KTpgKTtcblx0XHRcdGlmIChyZS50ZXN0KHYpKSB7XG5cdFx0XHRcdHYgPSB2LnNsaWNlKE1hdGgubWF4KDAsIHYuaW5kZXhPZignOicpICsgMSkpLnJlcGxhY2UoL14oXFxzfF8pKy8sICcnKTtcblx0XHRcdH1cblx0XHRcdHYgPSB2LnJlcGxhY2UoL1xcdTIwMEUkLywgJycpOyAvLyBUcmltIGVuZGluZyBsZWZ0LXRvLXJpZ2h0IG1hcmtcblx0XHRcdGlmIChIQy5jYXBpdGFsaXplUGFnZU5hbWVzKSB7XG5cdFx0XHRcdHYgPSBjYXBpdGFsaXplKHYpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gT25seSB1cGRhdGUgdGhlIGlucHV0IGZpZWxkIGlmIHRoZXJlIGlzIGEgZGlmZmVyZW5jZS4gVmFyaW91cyBicm93c2VycyBvdGhlcndpc2Vcblx0XHRcdC8vIHJlc2V0IHRoZSBzZWxlY3Rpb24gYW5kIGN1cnNvciBwb3NpdGlvbiBhZnRlciBlYWNoIHZhbHVlIHJlLWFzc2lnbm1lbnQuXG5cdFx0XHRpZiAodGhpcy50ZXh0LnZhbHVlICE9PSBudWxsICYmIHRoaXMudGV4dC52YWx1ZSAhPT0gdikge1xuXHRcdFx0XHR0aGlzLnRleHQudmFsdWUgPSB2O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRtYWtlQ2FsbCh1cmwsIGNhbGxiYWNrT2JqLCBlbmdpbmUsIHF1ZXJ5S2V5LCBjbGVhbktleSkge1xuXHRcdFx0bGV0IGNiID0gY2FsbGJhY2tPYmo7XG5cdFx0XHRjb25zdCBlID0gZW5naW5lO1xuXHRcdFx0Y29uc3QgdiA9IHF1ZXJ5S2V5O1xuXHRcdFx0Y29uc3QgeiA9IGNsZWFuS2V5O1xuXHRcdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0XHRjb25zdCBkb25lID0gKCkgPT4ge1xuXHRcdFx0XHRjYi5jYWxsc01hZGUrKztcblx0XHRcdFx0aWYgKGNiLmNhbGxzTWFkZSA9PT0gY2Iubm9mQ2FsbHMpIHtcblx0XHRcdFx0XHRpZiAoY2IuZXhpc3RzKSB7XG5cdFx0XHRcdFx0XHRjYi5hbGxUaXRsZXMuZXhpc3RzID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGNiLm5vcm1hbGl6ZWQpIHtcblx0XHRcdFx0XHRcdGNiLmFsbFRpdGxlcy5ub3JtYWxpemVkID0gY2Iubm9ybWFsaXplZDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKCFjYi5kb250Q2FjaGUgJiYgIXN1Z2dlc3Rpb25Db25maWdzW2NiLmVuZ2luZU5hbWVdLmNhY2hlW3pdKSB7XG5cdFx0XHRcdFx0XHRzdWdnZXN0aW9uQ29uZmlnc1tjYi5lbmdpbmVOYW1lXS5jYWNoZVt6XSA9IGNiLmFsbFRpdGxlcztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0c2VsZi50ZXh0LnJlYWRPbmx5ID0gZmFsc2U7XG5cdFx0XHRcdFx0aWYgKCFjYi5jYW5jZWxsZWQpIHtcblx0XHRcdFx0XHRcdHNlbGYuc2hvd1N1Z2dlc3Rpb25zKGNiLmFsbFRpdGxlcywgY2Iubm9Db21wbGV0aW9uLCB2LCBjYi5lbmdpbmVOYW1lKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGNiID09PSBzZWxmLmNhbGxiYWNrT2JqKSB7XG5cdFx0XHRcdFx0XHRzZWxmLmNhbGxiYWNrT2JqID0gbnVsbDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y2IgPSB1bmRlZmluZWQ7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHQkLmdldEpTT04odXJsLCAoanNvbikgPT4ge1xuXHRcdFx0XHRjb25zdCB0aXRsZXMgPSBlLmhhbmRsZXIoanNvbiwgeik7XG5cdFx0XHRcdGlmICh0aXRsZXMgJiYgdGl0bGVzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRjYi5hbGxUaXRsZXMgPVxuXHRcdFx0XHRcdFx0Y2IuYWxsVGl0bGVzID09PSBudWxsXG5cdFx0XHRcdFx0XHRcdD8gdGl0bGVzXG5cdFx0XHRcdFx0XHRcdDogWy4uLmNiLmFsbFRpdGxlcywgLi4uKEFycmF5LmlzQXJyYXkodGl0bGVzKSA/IHRpdGxlcyA6IFt0aXRsZXNdKV07XG5cdFx0XHRcdFx0aWYgKHRpdGxlcy5leGlzdHMpIHtcblx0XHRcdFx0XHRcdGNiLmV4aXN0cyA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICh0aXRsZXMubm9ybWFsaXplZCkge1xuXHRcdFx0XHRcdFx0Y2Iubm9ybWFsaXplZCA9IHRpdGxlcy5ub3JtYWxpemVkO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRkb25lKCk7XG5cdFx0XHR9KS5mYWlsKChyZXEpID0+IHtcblx0XHRcdFx0aWYgKCFyZXEpIHtcblx0XHRcdFx0XHRub1N1Z2dlc3Rpb25zID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjYi5kb250Q2FjaGUgPSB0cnVlO1xuXHRcdFx0XHRkb25lKCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0Y2FsbGJhY2tPYmogPSBudWxsO1xuXHRcdHRleHRjaGFuZ2UoZG9udF9hdXRvY29tcGxldGUsIGZvcmNlKSB7XG5cdFx0XHQvLyBIaWRlIGFsbCBvdGhlciBsaXN0c1xuXHRcdFx0bWFrZUFjdGl2ZSh0aGlzKTtcblx0XHRcdC8vIEdldCBpbnB1dCB2YWx1ZSwgb21pdCBzb3J0IGtleSwgaWYgYW55XG5cdFx0XHR0aGlzLnNhbml0aXplSW5wdXQoKTtcblx0XHRcdGxldCB2ID0gdGhpcy50ZXh0LnZhbHVlO1xuXHRcdFx0Ly8gRGlzcmVnYXJkIGFueXRoaW5nIGFmdGVyIGEgcGlwZS5cblx0XHRcdGNvbnN0IHBpcGUgPSB2LmluZGV4T2YoJ3wnKTtcblx0XHRcdGlmIChwaXBlID49IDApIHtcblx0XHRcdFx0dGhpcy5jdXJyZW50S2V5ID0gdi5zbGljZShNYXRoLm1heCgwLCBwaXBlICsgMSkpO1xuXHRcdFx0XHR2ID0gdi5zbGljZSgwLCBNYXRoLm1heCgwLCBwaXBlKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmN1cnJlbnRLZXkgPSBudWxsO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMubGFzdElucHV0ID09PSB2ICYmICFmb3JjZSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9IC8vIE5vIGNoYW5nZVxuXHRcdFx0aWYgKHRoaXMubGFzdElucHV0ICE9PSB2KSB7XG5cdFx0XHRcdGNoZWNrTXVsdGlJbnB1dCgpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5sYXN0SW5wdXQgPSB2O1xuXHRcdFx0dGhpcy5sYXN0UmVhbElucHV0ID0gdjtcblx0XHRcdC8vIE1hcmsgYmxhY2tsaXN0ZWQgaW5wdXRzLlxuXHRcdFx0dGhpcy5vay5kaXNhYmxlZCA9IHYubGVuZ3RoID4gMCAmJiBIQy5ibGFja2xpc3QgJiYgSEMuYmxhY2tsaXN0LnRlc3Qodik7XG5cdFx0XHRpZiAobm9TdWdnZXN0aW9ucykge1xuXHRcdFx0XHQvLyBObyBBamF4OiBqdXN0IG1ha2Ugc3VyZSB0aGUgbGlzdCBpcyBoaWRkZW5cblx0XHRcdFx0aWYgKHRoaXMubGlzdCkge1xuXHRcdFx0XHRcdHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0aGlzLmVuZ2luZVNlbGVjdG9yKSB7XG5cdFx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0aGlzLmljb24pIHtcblx0XHRcdFx0XHR0aGlzLmljb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAodi5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0dGhpcy5zaG93U3VnZ2VzdGlvbnMoW10pO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRsZXQgY2xlYW5LZXkgPSB2LnJlcGxhY2UoL1tcXHUyMDBFXFx1MjAwRlxcdTIwMkEtXFx1MjAyRV0vZywgJycpLnJlcGxhY2Uod2lraVRleHRCbGFua1JFLCAnICcpO1xuXHRcdFx0Y2xlYW5LZXkgPSByZXBsYWNlU2hvcnRjdXRzKGNsZWFuS2V5LCBIQy5zaG9ydGN1dHMpO1xuXHRcdFx0Y2xlYW5LZXkgPSBjbGVhbktleS50cmltKCk7XG5cdFx0XHRpZiAoY2xlYW5LZXkubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHRoaXMuc2hvd1N1Z2dlc3Rpb25zKFtdKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuY2FsbGJhY2tPYmopIHtcblx0XHRcdFx0dGhpcy5jYWxsYmFja09iai5jYW5jZWxsZWQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgZW5naW5lTmFtZSA9IHN1Z2dlc3Rpb25Db25maWdzW3RoaXMuZW5naW5lXSA/IHRoaXMuZW5naW5lIDogJ2NvbWJpbmVkJztcblx0XHRcdGRvbnRfYXV0b2NvbXBsZXRlIHx8PSBzdWdnZXN0aW9uQ29uZmlnc1tlbmdpbmVOYW1lXS5ub0NvbXBsZXRpb247XG5cdFx0XHRpZiAoc3VnZ2VzdGlvbkNvbmZpZ3NbZW5naW5lTmFtZV0uY2FjaGVbY2xlYW5LZXldKSB7XG5cdFx0XHRcdHRoaXMuc2hvd1N1Z2dlc3Rpb25zKHN1Z2dlc3Rpb25Db25maWdzW2VuZ2luZU5hbWVdLmNhY2hlW2NsZWFuS2V5XSwgZG9udF9hdXRvY29tcGxldGUsIHYsIGVuZ2luZU5hbWUpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb25zdCB7ZW5naW5lc30gPSBzdWdnZXN0aW9uQ29uZmlnc1tlbmdpbmVOYW1lXTtcblx0XHRcdHRoaXMuY2FsbGJhY2tPYmogPSB7XG5cdFx0XHRcdGFsbFRpdGxlczogbnVsbCxcblx0XHRcdFx0Y2FsbHNNYWRlOiAwLFxuXHRcdFx0XHRub2ZDYWxsczogZW5naW5lcy5sZW5ndGgsXG5cdFx0XHRcdG5vQ29tcGxldGlvbjogZG9udF9hdXRvY29tcGxldGUsXG5cdFx0XHRcdGVuZ2luZU5hbWUsXG5cdFx0XHR9O1xuXHRcdFx0dGhpcy5tYWtlQ2FsbHMoZW5naW5lcywgdGhpcy5jYWxsYmFja09iaiwgdiwgY2xlYW5LZXkpO1xuXHRcdH1cblx0XHRtYWtlQ2FsbHMoZW5naW5lcywgY2IsIHYsIGNsZWFuS2V5KSB7XG5cdFx0XHRmb3IgKGNvbnN0IGVuZ2luZV8gb2YgZW5naW5lcykge1xuXHRcdFx0XHRjb25zdCBlbmdpbmUgPSBzdWdnZXN0aW9uRW5naW5lc1tlbmdpbmVfXTtcblx0XHRcdFx0Y29uc3QgdXJsID0gY29uZi53Z1NjcmlwdFBhdGggKyBlbmdpbmUudXJpLnJlcGxhY2UoL1xcJDEvZywgZW5jb2RlVVJJQ29tcG9uZW50KGNsZWFuS2V5KSk7XG5cdFx0XHRcdHRoaXMubWFrZUNhbGwodXJsLCBjYiwgZW5naW5lLCB2LCBjbGVhbktleSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHNob3dTdWdnZXN0aW9ucyh0aXRsZXMsIGRvbnRBdXRvY29tcGxldGUsIHF1ZXJ5S2V5LCBlbmdpbmVOYW1lKSB7XG5cdFx0XHR0aGlzLnRleHQucmVhZE9ubHkgPSBmYWxzZTtcblx0XHRcdHRoaXMuZGFiID0gbnVsbDtcblx0XHRcdHRoaXMuc2hvd3NMaXN0ID0gZmFsc2U7XG5cdFx0XHRpZiAoIXRoaXMubGlzdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAobm9TdWdnZXN0aW9ucykge1xuXHRcdFx0XHRpZiAodGhpcy5saXN0KSB7XG5cdFx0XHRcdFx0dGhpcy5saXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRoaXMuZW5naW5lU2VsZWN0b3IpIHtcblx0XHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRoaXMuaWNvbikge1xuXHRcdFx0XHRcdHRoaXMuaWNvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuaW5wdXRFeGlzdHMgPSB0cnVlOyAvLyBEZWZhdWx0Li4uXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHRoaXMuZW5naW5lTmFtZSA9IGVuZ2luZU5hbWU7XG5cdFx0XHRpZiAoZW5naW5lTmFtZSkge1xuXHRcdFx0XHRpZiAoIXRoaXMuZW5naW5lU2VsZWN0b3IpIHtcblx0XHRcdFx0XHR0aGlzLmVuZ2luZU5hbWUgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMuZW5naW5lU2VsZWN0b3IpIHtcblx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHF1ZXJ5S2V5KSB7XG5cdFx0XHRcdGlmICh0aGlzLmxhc3RJbnB1dC5pbmRleE9mKHF1ZXJ5S2V5KSkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0dGhpcy5sYXN0UXVlcnkgJiZcblx0XHRcdFx0XHR0aGlzLmxhc3RJbnB1dC5pbmRleE9mKHRoaXMubGFzdFF1ZXJ5KSA9PT0gMCAmJlxuXHRcdFx0XHRcdHRoaXMubGFzdFF1ZXJ5Lmxlbmd0aCA+IHF1ZXJ5S2V5Lmxlbmd0aFxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMubGFzdFF1ZXJ5ID0gcXVlcnlLZXk7XG5cdFx0XHQvLyBHZXQgY3VycmVudCBpbnB1dCB0ZXh0XG5cdFx0XHRsZXQgdiA9IHRoaXMudGV4dC52YWx1ZS5zcGxpdCgnfCcpO1xuXHRcdFx0Y29uc3Qga2V5ID0gdi5sZW5ndGggPiAxID8gYHwke3ZbMV19YCA6ICcnO1xuXHRcdFx0diA9IEhDLmNhcGl0YWxpemVQYWdlTmFtZXMgPyBjYXBpdGFsaXplKHZbMF0pIDogdlswXTtcblx0XHRcdGxldCB2Tm9ybWFsaXplZCA9IHY7XG5cdFx0XHRjb25zdCBrbm93blRvRXhpc3QgPSB0aXRsZXMgJiYgdGl0bGVzLmV4aXN0cztcblx0XHRcdGxldCBpO1xuXHRcdFx0aWYgKHRpdGxlcykge1xuXHRcdFx0XHRpZiAodGl0bGVzLm5vcm1hbGl6ZWQgJiYgdi5pbmRleE9mKHF1ZXJ5S2V5KSA9PT0gMCkge1xuXHRcdFx0XHRcdC8vIFdlIGdvdCBiYWNrIGEgZGlmZmVyZW50IG5vcm1hbGl6YXRpb24gdGhhbiB3aGF0IGlzIGluIHRoZSBpbnB1dCBmaWVsZFxuXHRcdFx0XHRcdHZOb3JtYWxpemVkID0gdGl0bGVzLm5vcm1hbGl6ZWQgKyB2LnNsaWNlKHF1ZXJ5S2V5Lmxlbmd0aCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgdkxvdyA9IHZOb3JtYWxpemVkLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdC8vIFN0cmlwIGJsYWNrbGlzdGVkIGNhdGVnb3JpZXNcblx0XHRcdFx0aWYgKEhDLmJsYWNrbGlzdCkge1xuXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCB0aXRsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdGlmIChIQy5ibGFja2xpc3QudGVzdCh0aXRsZXNbaV0pKSB7XG5cdFx0XHRcdFx0XHRcdHRpdGxlcy5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdFx0XHRcdGktLTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0dGl0bGVzLnNvcnQoKGEsIGIpID0+IHtcblx0XHRcdFx0XHRpZiAoYSA9PT0gYikge1xuXHRcdFx0XHRcdFx0cmV0dXJuIDA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChhLmluZGV4T2YoYikgPT09IDApIHtcblx0XHRcdFx0XHRcdHJldHVybiAxO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBhIGJlZ2lucyB3aXRoIGI6IGEgPiBiXG5cdFx0XHRcdFx0aWYgKGIuaW5kZXhPZihhKSA9PT0gMCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIC0xO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBiIGJlZ2lucyB3aXRoIGE6IGEgPCBiXG5cdFx0XHRcdFx0Ly8gT3BlbnNlYXJjaCBtYXkgcmV0dXJuIHN0dWZmIG5vdCBiZWdpbm5pbmcgd2l0aCB0aGUgc2VhcmNoIHByZWZpeCFcblx0XHRcdFx0XHRsZXQgcHJlZml4TWF0Y2hBID0gYS5pbmRleE9mKHZOb3JtYWxpemVkKSA9PT0gMCA/IDEgOiAwO1xuXHRcdFx0XHRcdGxldCBwcmVmaXhNYXRjaEIgPSBiLmluZGV4T2Yodk5vcm1hbGl6ZWQpID09PSAwID8gMSA6IDA7XG5cdFx0XHRcdFx0aWYgKHByZWZpeE1hdGNoQSAhPT0gcHJlZml4TWF0Y2hCKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gcHJlZml4TWF0Y2hCIC0gcHJlZml4TWF0Y2hBO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBDYXNlLWluc2Vuc2l0aXZlIHByZWZpeCBtYXRjaCFcblx0XHRcdFx0XHRjb25zdCBhTG93ID0gYS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0XHRcdGNvbnN0IGJMb3cgPSBiLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdFx0cHJlZml4TWF0Y2hBID0gYUxvdy5pbmRleE9mKHZMb3cpID09PSAwID8gMSA6IDA7XG5cdFx0XHRcdFx0cHJlZml4TWF0Y2hCID0gYkxvdy5pbmRleE9mKHZMb3cpID09PSAwID8gMSA6IDA7XG5cdFx0XHRcdFx0aWYgKHByZWZpeE1hdGNoQSAhPT0gcHJlZml4TWF0Y2hCKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gcHJlZml4TWF0Y2hCIC0gcHJlZml4TWF0Y2hBO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoYSA8IGIpIHtcblx0XHRcdFx0XHRcdHJldHVybiAtMTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGIgPCBhKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gMTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIDA7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHQvLyBSZW1vdmUgZHVwbGljYXRlcyBhbmQgc2VsZi1yZWZlcmVuY2VzXG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCB0aXRsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0XHQoaSArIDEgPCB0aXRsZXMubGVuZ3RoICYmIHRpdGxlc1tpXSA9PT0gdGl0bGVzW2kgKyAxXSkgfHxcblx0XHRcdFx0XHRcdChjb25mLndnTmFtZXNwYWNlTnVtYmVyID09PSAxNCAmJiB0aXRsZXNbaV0gPT09IGNvbmYud2dUaXRsZSlcblx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdHRpdGxlcy5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdFx0XHRpLS07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoIXRpdGxlcyB8fCB0aXRsZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdGlmICh0aGlzLmxpc3QpIHtcblx0XHRcdFx0XHR0aGlzLmxpc3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodGhpcy5lbmdpbmVTZWxlY3Rvcikge1xuXHRcdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZW5naW5lTmFtZSAmJiBzdWdnZXN0aW9uQ29uZmlnc1tlbmdpbmVOYW1lXSAmJiAhc3VnZ2VzdGlvbkNvbmZpZ3NbZW5naW5lTmFtZV0udGVtcCkge1xuXHRcdFx0XHRcdGlmICh0aGlzLmljb24pIHtcblx0XHRcdFx0XHRcdHRoaXMuaWNvbi5zcmMgPSBIQy5leGlzdHNObztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5pbnB1dEV4aXN0cyA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNvbnN0IFtmaXJzdFRpdGxlXSA9IHRpdGxlcztcblx0XHRcdGNvbnN0IGNvbXBsZXRlZCA9IHRoaXMuYXV0b0NvbXBsZXRlKGZpcnN0VGl0bGUsIHYsIHZOb3JtYWxpemVkLCBrZXksIGRvbnRBdXRvY29tcGxldGUpO1xuXHRcdFx0Y29uc3QgZXhpc3RpbmcgPSBjb21wbGV0ZWQgfHwga25vd25Ub0V4aXN0IHx8IGZpcnN0VGl0bGUgPT09IHJlcGxhY2VTaG9ydGN1dHModiwgSEMuc2hvcnRjdXRzKTtcblx0XHRcdGlmIChlbmdpbmVOYW1lICYmIHN1Z2dlc3Rpb25Db25maWdzW2VuZ2luZU5hbWVdICYmICFzdWdnZXN0aW9uQ29uZmlnc1tlbmdpbmVOYW1lXS50ZW1wKSB7XG5cdFx0XHRcdHRoaXMuaWNvbi5zcmMgPSBleGlzdGluZyA/IEhDLmV4aXN0c1llcyA6IEhDLmV4aXN0c05vO1xuXHRcdFx0XHR0aGlzLmlucHV0RXhpc3RzID0gZXhpc3Rpbmc7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY29tcGxldGVkKSB7XG5cdFx0XHRcdHRoaXMubGFzdElucHV0ID0gZmlyc3RUaXRsZTtcblx0XHRcdFx0aWYgKHRpdGxlcy5sZW5ndGggPT09IDEpIHtcblx0XHRcdFx0XHR0aGlzLmxpc3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0XHRpZiAodGhpcy5lbmdpbmVTZWxlY3Rvcikge1xuXHRcdFx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vIChSZS0pZmlsbCB0aGUgbGlzdFxuXHRcdFx0d2hpbGUgKHRoaXMubGlzdC5maXJzdENoaWxkKSB7XG5cdFx0XHRcdHRoaXMubGlzdC5maXJzdENoaWxkLnJlbW92ZSgpO1xuXHRcdFx0fVxuXHRcdFx0Zm9yIChpID0gMDsgaSA8IHRpdGxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjb25zdCBvcHQgPSBtYWtlKCdvcHRpb24nKTtcblx0XHRcdFx0b3B0LmFwcGVuZChtYWtlKHRpdGxlc1tpXSwgdHJ1ZSkpO1xuXHRcdFx0XHRvcHQuc2VsZWN0ZWQgPSBjb21wbGV0ZWQgJiYgaSA9PT0gMDtcblx0XHRcdFx0dGhpcy5saXN0LmFwcGVuZChvcHQpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5kaXNwbGF5TGlzdCgpO1xuXHRcdH1cblx0XHRkaXNwbGF5TGlzdCgpIHtcblx0XHRcdHRoaXMuc2hvd3NMaXN0ID0gdHJ1ZTtcblx0XHRcdGlmICghdGhpcy5pc19hY3RpdmUpIHtcblx0XHRcdFx0dGhpcy5saXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdGlmICh0aGlzLmVuZ2luZVNlbGVjdG9yKSB7XG5cdFx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGxldCBub2ZJdGVtcyA9IHRoaXMubGlzdC5vcHRpb25zLmxlbmd0aCA+IEhDLmxpc3RTaXplID8gSEMubGlzdFNpemUgOiB0aGlzLmxpc3Qub3B0aW9ucy5sZW5ndGg7XG5cdFx0XHRpZiAobm9mSXRlbXMgPD0gMSkge1xuXHRcdFx0XHRub2ZJdGVtcyA9IDI7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmxpc3Quc2l6ZSA9IG5vZkl0ZW1zO1xuXHRcdFx0dGhpcy5saXN0LnN0eWxlLmFsaWduID0gaXNfcnRsID8gJ3JpZ2h0JyA6ICdsZWZ0Jztcblx0XHRcdHRoaXMubGlzdC5zdHlsZS56SW5kZXggPSA1O1xuXHRcdFx0dGhpcy5saXN0LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcblx0XHRcdC8vIENvbXB1dGUgaW5pdGlhbCBsaXN0IHBvc2l0aW9uLiBGaXJzdCB0aGUgaGVpZ2h0LlxuXHRcdFx0Y29uc3QgYW5jaG9yID0gaXNfcnRsID8gJ3JpZ2h0JyA6ICdsZWZ0Jztcblx0XHRcdGxldCBsaXN0aCA9IDA7XG5cdFx0XHRpZiAodGhpcy5saXN0LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuXHRcdFx0XHQvLyBPZmYtc2NyZWVuIGRpc3BsYXkgdG8gZ2V0IHRoZSBoZWlnaHRcblx0XHRcdFx0dGhpcy5saXN0LnN0eWxlLnRvcCA9IGAke3RoaXMudGV4dC5vZmZzZXRUb3B9cHhgO1xuXHRcdFx0XHR0aGlzLmxpc3Quc3R5bGVbYW5jaG9yXSA9ICctMTAwMDBweCc7XG5cdFx0XHRcdHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cdFx0XHRcdGxpc3RoID0gdGhpcy5saXN0Lm9mZnNldEhlaWdodDtcblx0XHRcdFx0dGhpcy5saXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsaXN0aCA9IHRoaXMubGlzdC5vZmZzZXRIZWlnaHQ7XG5cdFx0XHR9XG5cdFx0XHQvLyBBcHByb3hpbWF0ZSBjYWxjdWxhdGlvbiBvZiBtYXhpbXVtIGxpc3Qgc2l6ZVxuXHRcdFx0bGV0IG1heExpc3RIZWlnaHQgPSBsaXN0aDtcblx0XHRcdGlmIChub2ZJdGVtcyA8IEhDLmxpc3RTaXplKSB7XG5cdFx0XHRcdG1heExpc3RIZWlnaHQgPSAobGlzdGggLyBub2ZJdGVtcykgKiBIQy5saXN0U2l6ZTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHZpZXdwb3J0ID0gKHdoYXQpID0+IHtcblx0XHRcdFx0aWYgKGlzX3dlYmtpdCAmJiAhZG9jdW1lbnQuZXZhbHVhdGUpIHtcblx0XHRcdFx0XHQvLyBTYWZhcmkgPCAzLjBcblx0XHRcdFx0XHRyZXR1cm4gd2luZG93W2Bpbm5lciR7d2hhdH1gXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBzID0gYGNsaWVudCR7d2hhdH1gO1xuXHRcdFx0XHRpZiAod2luZG93Lm9wZXJhKSB7XG5cdFx0XHRcdFx0cmV0dXJuICQoJ2JvZHknKVswXVtzXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudFtzXSA6IDApIHx8ICQoJ2JvZHknKVswXVtzXSB8fCAwO1xuXHRcdFx0fTtcblx0XHRcdGNvbnN0IHNjcm9sbF9vZmZzZXQgPSAod2hhdCkgPT4ge1xuXHRcdFx0XHRjb25zdCBzID0gYHNjcm9sbCR7d2hhdH1gO1xuXHRcdFx0XHRsZXQgcmVzdWx0ID0gKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudFtzXSA6IDApIHx8ICQoJ2JvZHknKVswXVtzXSB8fCAwO1xuXHRcdFx0XHRpZiAoaXNfcnRsICYmIHdoYXQgPT09ICdMZWZ0Jykge1xuXHRcdFx0XHRcdC8vIFJUTCBpbmNvbnNpc3RlbmNpZXMuXG5cdFx0XHRcdFx0Ly8gRkY6IDAgYXQgdGhlIGZhciByaWdodCwgdGhlbiBpbmNyZWFzaW5nbHkgbmVnYXRpdmUgdmFsdWVzLlxuXHRcdFx0XHRcdC8vIElFID49IDg6IDAgYXQgdGhlIGZhciByaWdodCwgdGhlbiBpbmNyZWFzaW5nbHkgcG9zaXRpdmUgdmFsdWVzLlxuXHRcdFx0XHRcdC8vIFdlYmtpdDogc2Nyb2xsV2lkdGggLSBjbGllbnRXaWR0aCBhdCB0aGUgZmFyIHJpZ2h0LCB0aGVuIGRvd24gdG8gemVyby5cblx0XHRcdFx0XHQvLyBPcGVyYTogZG9uJ3Qga25vdy4uLlxuXHRcdFx0XHRcdGlmIChyZXN1bHQgPCAwKSB7XG5cdFx0XHRcdFx0XHRyZXN1bHQgPSAtcmVzdWx0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoIWlzX3dlYmtpdCkge1xuXHRcdFx0XHRcdFx0cmVzdWx0ID0gc2Nyb2xsX29mZnNldCgnV2lkdGgnKSAtIHZpZXdwb3J0KCdXaWR0aCcpIC0gcmVzdWx0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBOb3cgYWxsIGhhdmUgd2Via2l0IGJlaGF2aW9yLCBpLmUuIHplcm8gaWYgYXQgdGhlIGxlZnRtb3N0IGVkZ2UuXG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdH07XG5cdFx0XHRjb25zdCBwb3NpdGlvbiA9IChub2RlKSA9PiB7XG5cdFx0XHRcdC8vIFN0cmlwcGVkLWRvd24gc2ltcGxpZmllZCBwb3NpdGlvbiBmdW5jdGlvbi4gSXQncyBnb29kIGVub3VnaCBmb3Igb3VyIHB1cnBvc2VzLlxuXHRcdFx0XHRpZiAobm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QpIHtcblx0XHRcdFx0XHRjb25zdCBib3ggPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHR4OiBNYXRoLnJvdW5kKGJveC5sZWZ0ICsgc2Nyb2xsX29mZnNldCgnTGVmdCcpKSxcblx0XHRcdFx0XHRcdHk6IE1hdGgucm91bmQoYm94LnRvcCArIHNjcm9sbF9vZmZzZXQoJ1RvcCcpKSxcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxldCB0ID0gMDtcblx0XHRcdFx0bGV0IGwgPSAwO1xuXHRcdFx0XHRkbyB7XG5cdFx0XHRcdFx0dCArPSBub2RlLm9mZnNldFRvcCB8fCAwO1xuXHRcdFx0XHRcdGwgKz0gbm9kZS5vZmZzZXRMZWZ0IHx8IDA7XG5cdFx0XHRcdFx0bm9kZSA9IG5vZGUub2Zmc2V0UGFyZW50O1xuXHRcdFx0XHR9IHdoaWxlIChub2RlKTtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR4OiBsLFxuXHRcdFx0XHRcdHk6IHQsXG5cdFx0XHRcdH07XG5cdFx0XHR9O1xuXHRcdFx0Y29uc3QgdGV4dFBvcyA9IHBvc2l0aW9uKHRoaXMudGV4dCk7XG5cdFx0XHRjb25zdCBubCA9IDA7XG5cdFx0XHRsZXQgbnQgPSAwO1xuXHRcdFx0Ly8gT3BlcmEgOS41IHNvbWVob3cgaGFzIG9mZnNldFdpZHRoID0gMCBoZXJlPz8gVXNlIHRoZSBuZXh0IGJlc3QgdmFsdWUuLi5cblx0XHRcdGxldCBvZmZzZXQgPSAwO1xuXHRcdFx0Y29uc3QgdGV4dEJveFdpZHRoID0gdGhpcy50ZXh0Lm9mZnNldFdpZHRoIHx8IHRoaXMudGV4dC5jbGllbnRXaWR0aDtcblx0XHRcdGlmICh0aGlzLmVuZ2luZU5hbWUpIHtcblx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS56SW5kZXggPSA1O1xuXHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcblx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS53aWR0aCA9IGAke3RleHRCb3hXaWR0aH1weGA7XG5cdFx0XHRcdC8vIEZpZ3VyZSBvdXQgdGhlIGhlaWdodCBvZiB0aGlzIHNlbGVjdG9yOiBkaXNwbGF5IGl0IG9mZi1zY3JlZW4sIHRoZW4gaGlkZSBpdCBhZ2Fpbi5cblx0XHRcdFx0aWYgKHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG5cdFx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZVthbmNob3JdID0gJy0xMDAwMHB4Jztcblx0XHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLnRvcCA9ICcwJztcblx0XHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnJztcblx0XHRcdFx0XHRvZmZzZXQgPSB0aGlzLmVuZ2luZVNlbGVjdG9yLm9mZnNldEhlaWdodDtcblx0XHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0b2Zmc2V0ID0gdGhpcy5lbmdpbmVTZWxlY3Rvci5vZmZzZXRIZWlnaHQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZVthbmNob3JdID0gYCR7bmx9cHhgO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRleHRQb3MueSA8IG1heExpc3RIZWlnaHQgKyBvZmZzZXQgKyAxKSB7XG5cdFx0XHRcdC8vIFRoZSBsaXN0IG1pZ2h0IGV4dGVuZCBiZXlvbmQgdGhlIHVwcGVyIGJvcmRlciBvZiB0aGUgcGFnZS4gTGV0J3MgYXZvaWQgdGhhdCBieSBwbGFjaW5nIGl0XG5cdFx0XHRcdC8vIGJlbG93IHRoZSBpbnB1dCB0ZXh0IGZpZWxkLlxuXHRcdFx0XHRudCA9IHRoaXMudGV4dC5vZmZzZXRIZWlnaHQgKyBvZmZzZXQgKyAxO1xuXHRcdFx0XHRpZiAodGhpcy5lbmdpbmVOYW1lKSB7XG5cdFx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS50b3AgPSBgJHt0aGlzLnRleHQub2Zmc2V0SGVpZ2h0fXB4YDtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bnQgPSAtbGlzdGggLSBvZmZzZXQgLSAxO1xuXHRcdFx0XHRpZiAodGhpcy5lbmdpbmVOYW1lKSB7XG5cdFx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS50b3AgPSBgJHstKG9mZnNldCArIDEpfXB4YDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5saXN0LnN0eWxlLnRvcCA9IGAke250fXB4YDtcblx0XHRcdHRoaXMubGlzdC5zdHlsZS53aWR0aCA9ICcnOyAvLyBObyBmaXhlZCB3aWR0aCAoeWV0KVxuXHRcdFx0dGhpcy5saXN0LnN0eWxlW2FuY2hvcl0gPSBgJHtubH1weGA7XG5cdFx0XHRpZiAodGhpcy5lbmdpbmVOYW1lKSB7XG5cdFx0XHRcdHRoaXMuc2VsZWN0RW5naW5lKHRoaXMuZW5naW5lTmFtZSk7XG5cdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICcnO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5saXN0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRcdFx0Ly8gU2V0IHRoZSB3aWR0aCBvZiB0aGUgbGlzdFxuXHRcdFx0aWYgKHRoaXMubGlzdC5vZmZzZXRXaWR0aCA8IHRleHRCb3hXaWR0aCkge1xuXHRcdFx0XHR0aGlzLmxpc3Quc3R5bGUud2lkdGggPSBgJHt0ZXh0Qm94V2lkdGh9cHhgO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHQvLyBJZiB0aGUgbGlzdCBpcyB3aWRlciB0aGFuIHRoZSB0ZXh0Ym94OiBtYWtlIHN1cmUgaXQgZml0cyBob3Jpem9udGFsbHkgaW50byB0aGUgYnJvd3NlciB3aW5kb3dcblx0XHRcdGNvbnN0IHNjcm9sbCA9IHNjcm9sbF9vZmZzZXQoJ0xlZnQnKTtcblx0XHRcdGNvbnN0IHZpZXdfdyA9IHZpZXdwb3J0KCdXaWR0aCcpO1xuXHRcdFx0bGV0IHcgPSB0aGlzLmxpc3Qub2Zmc2V0V2lkdGg7XG5cdFx0XHRjb25zdCBsX3BvcyA9IHBvc2l0aW9uKHRoaXMubGlzdCk7XG5cdFx0XHRsZXQgbGVmdCA9IGxfcG9zLng7XG5cdFx0XHRsZXQgcmlnaHQgPSBsZWZ0ICsgdztcblx0XHRcdGlmIChsZWZ0IDwgc2Nyb2xsIHx8IHJpZ2h0ID4gc2Nyb2xsICsgdmlld193KSB7XG5cdFx0XHRcdGlmICh3ID4gdmlld193KSB7XG5cdFx0XHRcdFx0dyA9IHZpZXdfdztcblx0XHRcdFx0XHR0aGlzLmxpc3Quc3R5bGUud2lkdGggPSBgJHt3fXB4YDtcblx0XHRcdFx0XHRpZiAoaXNfcnRsKSB7XG5cdFx0XHRcdFx0XHRsZWZ0ID0gcmlnaHQgLSB3O1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyaWdodCA9IGxlZnQgKyB3O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRsZXQgcmVsYXRpdmVfb2Zmc2V0ID0gMDtcblx0XHRcdFx0aWYgKGxlZnQgPCBzY3JvbGwpIHtcblx0XHRcdFx0XHRyZWxhdGl2ZV9vZmZzZXQgPSBzY3JvbGwgLSBsZWZ0O1xuXHRcdFx0XHR9IGVsc2UgaWYgKHJpZ2h0ID4gc2Nyb2xsICsgdmlld193KSB7XG5cdFx0XHRcdFx0cmVsYXRpdmVfb2Zmc2V0ID0gLShyaWdodCAtIHNjcm9sbCAtIHZpZXdfdyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGlzX3J0bCkge1xuXHRcdFx0XHRcdHJlbGF0aXZlX29mZnNldCA9IC1yZWxhdGl2ZV9vZmZzZXQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHJlbGF0aXZlX29mZnNldCkge1xuXHRcdFx0XHRcdHRoaXMubGlzdC5zdHlsZVthbmNob3JdID0gYCR7bmwgKyByZWxhdGl2ZV9vZmZzZXR9cHhgO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGF1dG9Db21wbGV0ZShuZXdWYWwsIGFjdFZhbCwgbm9ybWFsaXplZEFjdFZhbCwga2V5LCBkb250TW9kaWZ5KSB7XG5cdFx0XHRpZiAobmV3VmFsID09PSBhY3RWYWwpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZG9udE1vZGlmeSB8fCB0aGlzLmltZSB8fCAhdGhpcy5jYW5TZWxlY3QoKSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHQvLyBJZiB3ZSBjYW4ndCBzZWxlY3QgcHJvcGVybHkgb3IgYW4gSU1FIGNvbXBvc2l0aW9uIGlzIG9uZ29pbmcsIGF1dG9jb21wbGV0aW9uIHdvdWxkIGJlIGEgbWFqb3IgYW5ub3lhbmNlIHRvIHRoZSB1c2VyLlxuXHRcdFx0aWYgKG5ld1ZhbC5pbmRleE9mKGFjdFZhbCkpIHtcblx0XHRcdFx0Ly8gTWF5YmUgaXQnbGwgd29yayB3aXRoIHRoZSBub3JtYWxpemVkIHZhbHVlIChORkMpP1xuXHRcdFx0XHRpZiAobm9ybWFsaXplZEFjdFZhbCAmJiBuZXdWYWwuaW5kZXhPZihub3JtYWxpemVkQWN0VmFsKSA9PT0gMCkge1xuXHRcdFx0XHRcdGlmICh0aGlzLmxhc3RSZWFsSW5wdXQgPT09IGFjdFZhbCkge1xuXHRcdFx0XHRcdFx0dGhpcy5sYXN0UmVhbElucHV0ID0gbm9ybWFsaXplZEFjdFZhbDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YWN0VmFsID0gbm9ybWFsaXplZEFjdFZhbDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vIEFjdHVhbCBpbnB1dCBpcyBhIHByZWZpeCBvZiB0aGUgbmV3IHRleHQuIEZpbGwgaW4gbmV3IHRleHQsIHNlbGVjdGluZyB0aGUgbmV3bHkgYWRkZWQgc3VmZml4XG5cdFx0XHQvLyBzdWNoIHRoYXQgaXQgY2FuIGJlIGVhc2lseSByZW1vdmVkIGJ5IHR5cGluZyBiYWNrc3BhY2UgaWYgdGhlIHN1Z2dlc3Rpb24gaXMgdW53YW50ZWQuXG5cdFx0XHR0aGlzLnRleHQuZm9jdXMoKTtcblx0XHRcdHRoaXMudGV4dC52YWx1ZSA9IG5ld1ZhbCArIGtleTtcblx0XHRcdHRoaXMuc2V0U2VsZWN0aW9uKGFjdFZhbC5sZW5ndGgsIG5ld1ZhbC5sZW5ndGgpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdGNhblNlbGVjdCgpIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdHRoaXMudGV4dC5zZXRTZWxlY3Rpb25SYW5nZSB8fFxuXHRcdFx0XHR0aGlzLnRleHQuY3JlYXRlVGV4dFJhbmdlIHx8XG5cdFx0XHRcdCh0aGlzLnRleHQuc2VsZWN0aW9uU3RhcnQgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnRleHQuc2VsZWN0aW9uRW5kICE9PSB1bmRlZmluZWQpXG5cdFx0XHQpO1xuXHRcdH1cblx0XHRzZXRTZWxlY3Rpb24oZnJvbSwgdG8pIHtcblx0XHRcdC8vIHRoaXMudGV4dCBtdXN0IGJlIGZvY3VzZWQgKGF0IGxlYXN0IG9uIElFKVxuXHRcdFx0aWYgKCF0aGlzLnRleHQudmFsdWUpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMudGV4dC5zZXRTZWxlY3Rpb25SYW5nZSkge1xuXHRcdFx0XHQvLyBlLmcuIGtodG1sXG5cdFx0XHRcdHRoaXMudGV4dC5zZXRTZWxlY3Rpb25SYW5nZShmcm9tLCB0byk7XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMudGV4dC5zZWxlY3Rpb25TdGFydCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGlmIChmcm9tID4gdGhpcy50ZXh0LnNlbGVjdGlvblN0YXJ0KSB7XG5cdFx0XHRcdFx0dGhpcy50ZXh0LnNlbGVjdGlvbkVuZCA9IHRvO1xuXHRcdFx0XHRcdHRoaXMudGV4dC5zZWxlY3Rpb25TdGFydCA9IGZyb207XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy50ZXh0LnNlbGVjdGlvblN0YXJ0ID0gZnJvbTtcblx0XHRcdFx0XHR0aGlzLnRleHQuc2VsZWN0aW9uRW5kID0gdG87XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAodGhpcy50ZXh0LmNyZWF0ZVRleHRSYW5nZSkge1xuXHRcdFx0XHQvLyBJRVxuXHRcdFx0XHRjb25zdCBuZXdfc2VsZWN0aW9uID0gdGhpcy50ZXh0LmNyZWF0ZVRleHRSYW5nZSgpO1xuXHRcdFx0XHRuZXdfc2VsZWN0aW9uLm1vdmUoJ2NoYXJhY3RlcicsIGZyb20pO1xuXHRcdFx0XHRuZXdfc2VsZWN0aW9uLm1vdmVFbmQoJ2NoYXJhY3RlcicsIHRvIC0gZnJvbSk7XG5cdFx0XHRcdG5ld19zZWxlY3Rpb24uc2VsZWN0KCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGdldFNlbGVjdGlvbigpIHtcblx0XHRcdGxldCBmcm9tID0gMDtcblx0XHRcdC8vIHRoaXMudGV4dCBtdXN0IGJlIGZvY3VzZWQgKGF0IGxlYXN0IG9uIElFKVxuXHRcdFx0bGV0IHRvID0gMDtcblx0XHRcdGlmICghdGhpcy50ZXh0LnZhbHVlKSB7XG5cdFx0XHRcdC8vIE5vIHRleHQuXG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMudGV4dC5zZWxlY3Rpb25TdGFydCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGZyb20gPSB0aGlzLnRleHQuc2VsZWN0aW9uU3RhcnQ7XG5cdFx0XHRcdHRvID0gdGhpcy50ZXh0LnNlbGVjdGlvbkVuZDtcblx0XHRcdH0gZWxzZSBpZiAoZG9jdW1lbnQuc2VsZWN0aW9uICYmIGRvY3VtZW50LnNlbGVjdGlvbi5jcmVhdGVSYW5nZSkge1xuXHRcdFx0XHQvLyBJRVxuXHRcdFx0XHRjb25zdCBybmcgPSBkb2N1bWVudC5zZWxlY3Rpb24uY3JlYXRlUmFuZ2UoKS5kdXBsaWNhdGUoKTtcblx0XHRcdFx0aWYgKHJuZy5wYXJlbnROb2RlKCkgPT09IHRoaXMudGV4dCkge1xuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRjb25zdCB0ZXh0Um5nID0gdGhpcy50ZXh0LmNyZWF0ZVRleHRSYW5nZSgpO1xuXHRcdFx0XHRcdFx0dGV4dFJuZy5tb3ZlKCdjaGFyYWN0ZXInLCAwKTtcblx0XHRcdFx0XHRcdHRleHRSbmcuc2V0RW5kUG9pbnQoJ0VuZFRvRW5kJywgcm5nKTtcblx0XHRcdFx0XHRcdC8vIFdlJ3JlIGluIGEgc2luZ2xlLWxpbmUgaW5wdXQgYm94OiBubyBuZWVkIHRvIGNhcmUgYWJvdXQgSUUncyBzdHJhbmdlXG5cdFx0XHRcdFx0XHQvLyBoYW5kbGluZyBvZiBsaW5lIGVuZHNcblx0XHRcdFx0XHRcdHRvID0gdGV4dFJuZy50ZXh0Lmxlbmd0aDtcblx0XHRcdFx0XHRcdHRleHRSbmcuc2V0RW5kUG9pbnQoJ0VuZFRvU3RhcnQnLCBybmcpO1xuXHRcdFx0XHRcdFx0ZnJvbSA9IHRleHRSbmcudGV4dC5sZW5ndGg7XG5cdFx0XHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdFx0XHRmcm9tID0gdGhpcy50ZXh0LnZhbHVlLmxlbmd0aDtcblx0XHRcdFx0XHRcdHRvID0gZnJvbTsgLy8gQXQgZW5kIG9mIHRleHRcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHN0YXJ0OiBmcm9tLFxuXHRcdFx0XHRlbmQ6IHRvLFxuXHRcdFx0fTtcblx0XHR9XG5cdFx0c2F2ZVZpZXcoKSB7XG5cdFx0XHR0aGlzLmxhc3RTZWxlY3Rpb24gPSB0aGlzLmdldFNlbGVjdGlvbigpO1xuXHRcdH1cblx0XHRwcm9jZXNzS2V5KGV2ZW50KSB7XG5cdFx0XHRsZXQgZGlyID0gMDtcblx0XHRcdHN3aXRjaCAodGhpcy5sYXN0S2V5KSB7XG5cdFx0XHRcdGNhc2UgVVA6XG5cdFx0XHRcdFx0ZGlyID0gLTE7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgRE9XTjpcblx0XHRcdFx0XHRkaXIgPSAxO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFBHVVA6XG5cdFx0XHRcdFx0ZGlyID0gLUhDLmxpc3RTaXplO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFBHRE9XTjpcblx0XHRcdFx0XHRkaXIgPSBIQy5saXN0U2l6ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBFU0M6XG5cdFx0XHRcdFx0Ly8gSW5oaWJpdCBkZWZhdWx0IGJlaGF2aW9yIChyZXZlcnQgdG8gbGFzdCByZWFsIGlucHV0IGluIEZGOiB3ZSBkbyB0aGF0IG91cnNlbHZlcylcblx0XHRcdFx0XHRyZXR1cm4gZXZ0S2lsbChldmVudCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZGlyKSB7XG5cdFx0XHRcdGlmICh0aGlzLmxpc3Quc3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnKSB7XG5cdFx0XHRcdFx0Ly8gTGlzdCBpcyB2aXNpYmxlLCBzbyB0aGVyZSBhcmUgc3VnZ2VzdGlvbnNcblx0XHRcdFx0XHR0aGlzLmhpZ2hsaWdodFN1Z2dlc3Rpb24oZGlyKTtcblx0XHRcdFx0XHQvLyBLaWxsIHRoZSBldmVudCwgb3RoZXJ3aXNlIHNvbWUgYnJvd3NlcnMgKGUuZy4sIEZpcmVmb3gpIG1heSBhZGRpdGlvbmFsbHkgdHJlYXQgYW4gdXAtYXJyb3dcblx0XHRcdFx0XHQvLyBhcyBcInBsYWNlIHRoZSB0ZXh0IGN1cnNvciBhdCB0aGUgZnJvbnRcIiwgd2hpY2ggd2UgZG9uJ3Qgd2FudCBoZXJlLlxuXHRcdFx0XHRcdHJldHVybiBldnRLaWxsKGV2ZW50KTtcblx0XHRcdFx0fSBlbHNlIGlmIChcblx0XHRcdFx0XHR0aGlzLmtleUNvdW50IDw9IDEgJiZcblx0XHRcdFx0XHQoIXRoaXMuY2FsbGJhY2tPYmogfHwgdGhpcy5jYWxsYmFja09iai5jYWxsc01hZGUgPT09IHRoaXMuY2FsbGJhY2tPYmoubm9mQ2FsbHMpXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdC8vIElmIG5vIHN1Z2dlc3Rpb25zIGRpc3BsYXllZCwgZ2V0IHRoZW0sIHVubGVzcyB3ZSdyZSBhbHJlYWR5IGdldHRpbmcgdGhlbS5cblx0XHRcdFx0XHR0aGlzLnRleHRjaGFuZ2UoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdGhpZ2hsaWdodFN1Z2dlc3Rpb24oZGlyKSB7XG5cdFx0XHRpZiAobm9TdWdnZXN0aW9ucyB8fCAhdGhpcy5saXN0IHx8IHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgY3VyciA9IHRoaXMubGlzdC5zZWxlY3RlZEluZGV4O1xuXHRcdFx0bGV0IHRndCA9IC0xO1xuXHRcdFx0aWYgKGRpciA9PT0gMCkge1xuXHRcdFx0XHRpZiAoY3VyciA8IDAgfHwgY3VyciA+PSB0aGlzLmxpc3Qub3B0aW9ucy5sZW5ndGgpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGd0ID0gY3Vycjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRndCA9IGN1cnIgPCAwID8gMCA6IGN1cnIgKyBkaXI7XG5cdFx0XHRcdHRndCA9IHRndCA8IDAgPyAwIDogdGd0O1xuXHRcdFx0XHRpZiAodGd0ID49IHRoaXMubGlzdC5vcHRpb25zLmxlbmd0aCkge1xuXHRcdFx0XHRcdHRndCA9IHRoaXMubGlzdC5vcHRpb25zLmxlbmd0aCAtIDE7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICh0Z3QgIT09IGN1cnIgfHwgZGlyID09PSAwKSB7XG5cdFx0XHRcdGlmIChjdXJyID49IDAgJiYgY3VyciA8IHRoaXMubGlzdC5vcHRpb25zLmxlbmd0aCAmJiBkaXIgIT09IDApIHtcblx0XHRcdFx0XHR0aGlzLmxpc3Qub3B0aW9uc1tjdXJyXS5zZWxlY3RlZCA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMubGlzdC5vcHRpb25zW3RndF0uc2VsZWN0ZWQgPSB0cnVlO1xuXHRcdFx0XHQvLyBHZXQgY3VycmVudCBpbnB1dCB0ZXh0XG5cdFx0XHRcdGNvbnN0IHYgPSB0aGlzLnRleHQudmFsdWUuc3BsaXQoJ3wnKTtcblx0XHRcdFx0Y29uc3Qga2V5ID0gdi5sZW5ndGggPiAxID8gYHwke3ZbMV19YCA6ICcnO1xuXHRcdFx0XHRjb25zdCBjb21wbGV0ZWQgPSB0aGlzLmF1dG9Db21wbGV0ZSh0aGlzLmxpc3Qub3B0aW9uc1t0Z3RdLnRleHQsIHRoaXMubGFzdFJlYWxJbnB1dCwgbnVsbCwga2V5LCBmYWxzZSk7XG5cdFx0XHRcdGlmICghY29tcGxldGVkIHx8IHRoaXMubGlzdC5vcHRpb25zW3RndF0udGV4dCA9PT0gdGhpcy5sYXN0UmVhbElucHV0KSB7XG5cdFx0XHRcdFx0dGhpcy50ZXh0LnZhbHVlID0gdGhpcy5saXN0Lm9wdGlvbnNbdGd0XS50ZXh0ICsga2V5O1xuXHRcdFx0XHRcdGlmICh0aGlzLmNhblNlbGVjdCgpKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnNldFNlbGVjdGlvbih0aGlzLmxpc3Qub3B0aW9uc1t0Z3RdLnRleHQubGVuZ3RoLCB0aGlzLmxpc3Qub3B0aW9uc1t0Z3RdLnRleHQubGVuZ3RoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5sYXN0SW5wdXQgPSB0aGlzLmxpc3Qub3B0aW9uc1t0Z3RdLnRleHQ7XG5cdFx0XHRcdHRoaXMuaW5wdXRFeGlzdHMgPSB0cnVlOyAvLyBNaWdodCBiZSB3cm9uZyBpZiBmcm9tIGEgZGFiIGxpc3QuLi5cblx0XHRcdFx0aWYgKHRoaXMuaWNvbikge1xuXHRcdFx0XHRcdHRoaXMuaWNvbi5zcmMgPSBIQy5leGlzdHNZZXM7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5zdGF0ZSA9IENIQU5HRV9QRU5ESU5HO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdHJlc2V0S2V5U2VsZWN0aW9uKCkge1xuXHRcdFx0aWYgKG5vU3VnZ2VzdGlvbnMgfHwgIXRoaXMubGlzdCB8fCB0aGlzLmxpc3Quc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IGN1cnIgPSB0aGlzLmxpc3Quc2VsZWN0ZWRJbmRleDtcblx0XHRcdGlmIChjdXJyID49IDAgJiYgY3VyciA8IHRoaXMubGlzdC5vcHRpb25zLmxlbmd0aCkge1xuXHRcdFx0XHR0aGlzLmxpc3Qub3B0aW9uc1tjdXJyXS5zZWxlY3RlZCA9IGZhbHNlO1xuXHRcdFx0XHQvLyBHZXQgY3VycmVudCBpbnB1dCB0ZXh0XG5cdFx0XHRcdGNvbnN0IHYgPSB0aGlzLnRleHQudmFsdWUuc3BsaXQoJ3wnKTtcblx0XHRcdFx0Y29uc3Qga2V5ID0gdi5sZW5ndGggPiAxID8gYHwke3ZbMV19YCA6ICcnO1xuXHRcdFx0XHQvLyBFU0MgaXMgaGFuZGxlZCBzdHJhbmdlbHkgYnkgc29tZSBicm93c2VycyAoZS5nLiwgRkYpOyBzb21laG93IGl0IHJlc2V0cyB0aGUgaW5wdXQgdmFsdWUgYmVmb3JlXG5cdFx0XHRcdC8vIG91ciBldmVudCBoYW5kbGVycyBldmVyIGdldCBhIGNoYW5jZSB0byBydW4uXG5cdFx0XHRcdGxldCByZXN1bHQgPSB2WzBdICE9PSB0aGlzLmxhc3RJbnB1dDtcblx0XHRcdFx0aWYgKHZbMF0gIT09IHRoaXMubGFzdFJlYWxJbnB1dCkge1xuXHRcdFx0XHRcdHRoaXMudGV4dC52YWx1ZSA9IHRoaXMubGFzdFJlYWxJbnB1dCArIGtleTtcblx0XHRcdFx0XHRyZXN1bHQgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMubGFzdElucHV0ID0gdGhpcy5sYXN0UmVhbElucHV0O1xuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXHRjb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xuXHRcdC8vIFVzZXIgY29uZmlndXJhdGlvbnM6IERvIHRoaXMgaGVyZSwgY2FsbGVkIGZyb20gdGhlIG9ubG9hZCBoYW5kbGVyLCBzbyB0aGF0IHVzZXJzIGNhblxuXHRcdC8vIG92ZXJyaWRlIGl0IGVhc2lseSBpbiB0aGVpciBvd24gdXNlciBzY3JpcHQgZmlsZXMgYnkganVzdCBkZWNsYXJpbmcgdmFyaWFibGVzLlxuXHRcdGNvbnN0IGNvbmZpZyA9IHt9O1xuXHRcdEhDLmRvbnRfYWRkX3RvX3dhdGNobGlzdCA9XG5cdFx0XHR3aW5kb3cuaG90Y2F0X2RvbnRfYWRkX3RvX3dhdGNobGlzdCA9PT0gdW5kZWZpbmVkXG5cdFx0XHRcdD8gY29uZmlnLkhvdENhdERvbnRBZGRUb1dhdGNobGlzdCA9PT0gdW5kZWZpbmVkXG5cdFx0XHRcdFx0PyBIQy5kb250X2FkZF90b193YXRjaGxpc3Rcblx0XHRcdFx0XHQ6IGNvbmZpZy5Ib3RDYXREb250QWRkVG9XYXRjaGxpc3Rcblx0XHRcdFx0OiAhIXdpbmRvdy5ob3RjYXRfZG9udF9hZGRfdG9fd2F0Y2hsaXN0O1xuXHRcdEhDLm5vX2F1dG9jb21taXQgPVxuXHRcdFx0d2luZG93LmhvdGNhdF9ub19hdXRvY29tbWl0ID09PSB1bmRlZmluZWRcblx0XHRcdFx0PyBjb25maWcuSG90Q2F0Tm9BdXRvQ29tbWl0ID09PSB1bmRlZmluZWRcblx0XHRcdFx0XHQ/IGNvbmYud2dOYW1lc3BhY2VOdW1iZXIgJSAyXG5cdFx0XHRcdFx0XHQ/IHRydWVcblx0XHRcdFx0XHRcdDogSEMubm9fYXV0b2NvbW1pdCAvLyBPbiB0YWxrIG5hbWVzcGFjZSBkZWZhdWx0IGF1dG9jb21taXQgb2ZmXG5cdFx0XHRcdFx0OiBjb25maWcuSG90Q2F0Tm9BdXRvQ29tbWl0XG5cdFx0XHRcdDogISF3aW5kb3cuaG90Y2F0X25vX2F1dG9jb21taXQ7XG5cdFx0SEMuZGVsX25lZWRzX2RpZmYgPVxuXHRcdFx0d2luZG93LmhvdGNhdF9kZWxfbmVlZHNfZGlmZiA9PT0gdW5kZWZpbmVkXG5cdFx0XHRcdD8gY29uZmlnLkhvdENhdERlbE5lZWRzRGlmZiA9PT0gdW5kZWZpbmVkXG5cdFx0XHRcdFx0PyBIQy5kZWxfbmVlZHNfZGlmZlxuXHRcdFx0XHRcdDogY29uZmlnLkhvdENhdERlbE5lZWRzRGlmZlxuXHRcdFx0XHQ6ICEhd2luZG93LmhvdGNhdF9kZWxfbmVlZHNfZGlmZjtcblx0XHRIQy5zdWdnZXN0X2RlbGF5ID0gd2luZG93LmhvdGNhdF9zdWdnZXN0aW9uX2RlbGF5IHx8IGNvbmZpZy5Ib3RDYXRTdWdnZXN0aW9uRGVsYXkgfHwgSEMuc3VnZ2VzdF9kZWxheTtcblx0XHRIQy5lZGl0Ym94X3dpZHRoID0gd2luZG93LmhvdGNhdF9lZGl0Ym94X3dpZHRoIHx8IGNvbmZpZy5Ib3RDYXRFZGl0Qm94V2lkdGggfHwgSEMuZWRpdGJveF93aWR0aDtcblx0XHRIQy5zdWdnZXN0aW9ucyA9IHdpbmRvdy5ob3RjYXRfc3VnZ2VzdGlvbnMgfHwgY29uZmlnLkhvdENhdFN1Z2dlc3Rpb25zIHx8IEhDLnN1Z2dlc3Rpb25zO1xuXHRcdGlmICh0eXBlb2YgSEMuc3VnZ2VzdGlvbnMgIT09ICdzdHJpbmcnIHx8ICFzdWdnZXN0aW9uQ29uZmlnc1tIQy5zdWdnZXN0aW9uc10pIHtcblx0XHRcdEhDLnN1Z2dlc3Rpb25zID0gJ2NvbWJpbmVkJztcblx0XHR9XG5cdFx0SEMuZml4ZWRfc2VhcmNoID1cblx0XHRcdHdpbmRvdy5ob3RjYXRfc3VnZ2VzdGlvbnNfZml4ZWQgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHQ/IGNvbmZpZy5Ib3RDYXRGaXhlZFN1Z2dlc3Rpb25zID09PSB1bmRlZmluZWRcblx0XHRcdFx0XHQ/IEhDLmZpeGVkX3NlYXJjaFxuXHRcdFx0XHRcdDogY29uZmlnLkhvdENhdEZpeGVkU3VnZ2VzdGlvbnNcblx0XHRcdFx0OiAhIXdpbmRvdy5ob3RjYXRfc3VnZ2VzdGlvbnNfZml4ZWQ7XG5cdFx0SEMuc2luZ2xlX21pbm9yID1cblx0XHRcdHdpbmRvdy5ob3RjYXRfc2luZ2xlX2NoYW5nZXNfYXJlX21pbm9yID09PSB1bmRlZmluZWRcblx0XHRcdFx0PyBjb25maWcuSG90Q2F0TWlub3JTaW5nbGVDaGFuZ2VzID09PSB1bmRlZmluZWRcblx0XHRcdFx0XHQ/IEhDLnNpbmdsZV9taW5vclxuXHRcdFx0XHRcdDogY29uZmlnLkhvdENhdE1pbm9yU2luZ2xlQ2hhbmdlc1xuXHRcdFx0XHQ6ICEhd2luZG93LmhvdGNhdF9zaW5nbGVfY2hhbmdlc19hcmVfbWlub3I7XG5cdFx0SEMuYmdfY2hhbmdlZCA9IHdpbmRvdy5ob3RjYXRfY2hhbmdlZF9iYWNrZ3JvdW5kIHx8IGNvbmZpZy5Ib3RDYXRDaGFuZ2VkQmFja2dyb3VuZCB8fCBIQy5iZ19jaGFuZ2VkO1xuXHRcdEhDLnVzZV91cF9kb3duID1cblx0XHRcdHdpbmRvdy5ob3RjYXRfdXNlX2NhdGVnb3J5X2xpbmtzID09PSB1bmRlZmluZWRcblx0XHRcdFx0PyBjb25maWcuSG90Q2F0VXNlQ2F0ZWdvcnlMaW5rcyA9PT0gdW5kZWZpbmVkXG5cdFx0XHRcdFx0PyBIQy51c2VfdXBfZG93blxuXHRcdFx0XHRcdDogY29uZmlnLkhvdENhdFVzZUNhdGVnb3J5TGlua3Ncblx0XHRcdFx0OiAhIXdpbmRvdy5ob3RjYXRfdXNlX2NhdGVnb3J5X2xpbmtzO1xuXHRcdEhDLmxpc3RTaXplID0gd2luZG93LmhvdGNhdF9saXN0X3NpemUgfHwgY29uZmlnLkhvdENhdExpc3RTaXplIHx8IEhDLmxpc3RTaXplO1xuXHRcdEhDLmNoYW5nZVRhZyA9IGNvbmZpZy5Ib3RDYXRDaGFuZ2VUYWcgfHwgJyc7XG5cdFx0Ly8gVGhlIG5leHQgd2hvbGUgc2hlYmFuZyBpcyBuZWVkZWQsIGJlY2F1c2UgbWFudWFsIHRhZ3MgZ2V0IG5vdCBzdWJtaXR0ZWQgZXhjZXB0IG9mIHNhdmVcblx0XHRpZiAoSEMuY2hhbmdlVGFnKSB7XG5cdFx0XHRjb25zdCBlRm9ybSA9IGRvY3VtZW50LmVkaXRmb3JtO1xuXHRcdFx0Y29uc3QgY2F0UmVnRXhwID0gbmV3IFJlZ0V4cChgXlxcXFxbXFxcXFsoJHtIQy5jYXRlZ29yeV9yZWdleHB9KTpgKTtcblx0XHRcdGxldCBvbGRUeHQ7XG5cdFx0XHQvLyBSZXR1cm5zIHRydWUgaWYgbWlub3IgY2hhbmdlXG5cdFx0XHRjb25zdCBpc01pbm9yQ2hhbmdlID0gKCkgPT4ge1xuXHRcdFx0XHRsZXQgbmV3VHh0ID0gZUZvcm0ud3BUZXh0Ym94MTtcblx0XHRcdFx0aWYgKCFuZXdUeHQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0bmV3VHh0ID0gbmV3VHh0LnZhbHVlO1xuXHRcdFx0XHRjb25zdCBvbGRMaW5lcyA9IG9sZFR4dC5tYXRjaCgvXi4qJC9nbSk7XG5cdFx0XHRcdGNvbnN0IG5ld0xpbmVzID0gbmV3VHh0Lm1hdGNoKC9eLiokL2dtKTtcblx0XHRcdFx0bGV0IGNBcnI7IC8vIGNoYW5nZXNcblx0XHRcdFx0Y29uc3QgZXhjZXB0ID0gKGFBcnIsIGJBcnIpID0+IHtcblx0XHRcdFx0XHRjb25zdCByZXN1bHQgPSBbXTtcblx0XHRcdFx0XHRsZXQgbEFycjsgLy8gc21hbGxlclxuXHRcdFx0XHRcdGxldCAvLyBsYXJnZXJcblx0XHRcdFx0XHRcdHNBcnI7XG5cdFx0XHRcdFx0aWYgKGFBcnIubGVuZ3RoIDwgYkFyci5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdGxBcnIgPSBiQXJyO1xuXHRcdFx0XHRcdFx0c0FyciA9IGFBcnI7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGxBcnIgPSBhQXJyO1xuXHRcdFx0XHRcdFx0c0FyciA9IGJBcnI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGZvciAoY29uc3QgaXRlbSBvZiBsQXJyKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBpbmQgPSBzQXJyLmluZGV4T2YoaXRlbSk7XG5cdFx0XHRcdFx0XHRpZiAoaW5kID09PSAtMSkge1xuXHRcdFx0XHRcdFx0XHRyZXN1bHQucHVzaChpdGVtKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHNBcnIuc3BsaWNlKGluZCwgMSk7IC8vIGRvbid0IGNoZWNrIHRoaXMgaXRlbSBhZ2FpblxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gWy4uLnJlc3VsdCwgLi4uc0Fycl07XG5cdFx0XHRcdH07XG5cdFx0XHRcdGNBcnIgPSBleGNlcHQob2xkTGluZXMsIG5ld0xpbmVzKTtcblx0XHRcdFx0aWYgKGNBcnIubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdGNBcnIgPSBjQXJyLmZpbHRlcigoYykgPT4ge1xuXHRcdFx0XHRcdFx0YyA9IGMudHJpbSgpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGMgJiYgIWNhdFJlZ0V4cC50ZXN0KGMpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChjQXJyLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdG9sZFR4dCA9IG5ld1R4dDtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdGlmIChcblx0XHRcdFx0Y29uZi53Z0FjdGlvbiA9PT0gJ3N1Ym1pdCcgJiZcblx0XHRcdFx0Y29uZi53Z0FydGljbGVJZCAmJlxuXHRcdFx0XHRlRm9ybSAmJlxuXHRcdFx0XHRlRm9ybS53cFN1bW1hcnkgJiZcblx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dpa2lEaWZmJylcblx0XHRcdCkge1xuXHRcdFx0XHRjb25zdCBzdW0gPSBlRm9ybS53cFN1bW1hcnk7XG5cdFx0XHRcdGNvbnN0IHN1bUEgPSBlRm9ybS53cEF1dG9TdW1tYXJ5O1xuXHRcdFx0XHRpZiAoc3VtLnZhbHVlICYmIHN1bUEudmFsdWUgPT09IEhDLmNoYW5nZVRhZykge1xuXHRcdFx0XHRcdC8vIEhvdENhdCBkaWZmXG5cdFx0XHRcdFx0Ly8gTUQ1IGhhc2ggb2YgdGhlIGVtcHR5IHN0cmluZywgYXMgSG90Q2F0IGVkaXQgaXMgYmFzZWQgb24gZW1wdHkgc3VtXG5cdFx0XHRcdFx0c3VtQS52YWx1ZSA9IHN1bUEudmFsdWUucmVwbGFjZShIQy5jaGFuZ2VUYWcsICdkNDFkOGNkOThmMDBiMjA0ZTk4MDA5OThlY2Y4NDI3ZScpO1xuXHRcdFx0XHRcdC8vIEF0dHIgY3JlYXRpb24gYW5kIGV2ZW50IGhhbmRsaW5nIGlzIG5vdCBzYW1lIGluIGFsbCAob2xkKSBicm93c2VycyBzbyB1c2UgJFxuXHRcdFx0XHRcdGNvbnN0ICRjdCA9ICQoJzxpbnB1dD4nKVxuXHRcdFx0XHRcdFx0LmF0dHIoe1xuXHRcdFx0XHRcdFx0XHR0eXBlOiAnaGlkZGVuJyxcblx0XHRcdFx0XHRcdFx0bmFtZTogJ3dwQ2hhbmdlVGFncycsXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0LnZhbChIQy5jaGFuZ2VUYWcpO1xuXHRcdFx0XHRcdCQoZUZvcm0pLmFwcGVuZCgkY3QpO1xuXHRcdFx0XHRcdG9sZFR4dCA9IGVGb3JtLndwVGV4dGJveDEudmFsdWU7XG5cdFx0XHRcdFx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdFx0XHRcdFx0JGJvZHkuZmluZCgnI3dwU2F2ZScpLm9uZSgnY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoJGN0LnZhbCgpKSB7XG5cdFx0XHRcdFx0XHRcdHN1bS52YWx1ZSA9IHN1bS52YWx1ZS5yZXBsYWNlKFxuXHRcdFx0XHRcdFx0XHRcdGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXVzaW5nJykgfHwgZ2V0TWVzc2FnZSgnbWVzc2FnZXMtcHJlZml4JyksXG5cdFx0XHRcdFx0XHRcdFx0Jydcblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRjb25zdCByZW1vdmVDaGFuZ2VUYWcgPSAoKSA9PiB7XG5cdFx0XHRcdFx0XHQkKGVGb3JtLndwVGV4dGJveDEpXG5cdFx0XHRcdFx0XHRcdC5hZGQoc3VtKVxuXHRcdFx0XHRcdFx0XHQub25lKCdpbnB1dCcsICgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChpc01pbm9yQ2hhbmdlKCkpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmVtb3ZlQ2hhbmdlVGFnKCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQkY3QudmFsKCcnKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9LCA1MDApO1xuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdHJlbW92ZUNoYW5nZVRhZygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIE51bWVyaWMgaW5wdXQsIG1ha2Ugc3VyZSB3ZSBoYXZlIGEgbnVtZXJpYyB2YWx1ZVxuXHRcdEhDLmxpc3RTaXplID0gTnVtYmVyLnBhcnNlSW50KEhDLmxpc3RTaXplLCAxMCk7XG5cdFx0aWYgKE51bWJlci5pc05hTihIQy5saXN0U2l6ZSkgfHwgSEMubGlzdFNpemUgPCA1KSB7XG5cdFx0XHRIQy5saXN0U2l6ZSA9IDU7XG5cdFx0fVxuXHRcdEhDLmxpc3RTaXplID0gTWF0aC5taW4oSEMubGlzdFNpemUsIDMwKTsgLy8gTWF4IHNpemVcblx0XHQvLyBMb2NhbGl6ZSBzZWFyY2ggZW5naW5lIG5hbWVzXG5cdFx0Zm9yIChjb25zdCBba2V5LCBzdWdnZXN0aW9uQ29uZmlnXSBvZiBPYmplY3QuZW50cmllcyhzdWdnZXN0aW9uQ29uZmlncykpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGlmIChrZXkgJiYgZ2V0TWVzc2FnZShgZW5naW5lX25hbWVzLSR7a2V5fWApKSB7XG5cdFx0XHRcdFx0c3VnZ2VzdGlvbkNvbmZpZy5uYW1lID0gZ2V0TWVzc2FnZShgZW5naW5lX25hbWVzLSR7a2V5fWApO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIENhdGNoIGJvdGggbmF0aXZlIFJUTCBhbmQgXCJmYWtlZFwiIFJUTCB0aHJvdWdoIFtbTWVkaWFXaWtpOlJ0bC5qc11dXG5cdFx0aXNfcnRsID0gaGFzQ2xhc3MoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLCAncnRsJyk7XG5cdFx0aWYgKCFpc19ydGwpIHtcblx0XHRcdGlmIChkb2N1bWVudC5kZWZhdWx0VmlldyAmJiBkb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKSB7XG5cdFx0XHRcdC8vIEdlY2tvIGV0Yy5cblx0XHRcdFx0aXNfcnRsID0gZG9jdW1lbnQuZGVmYXVsdFZpZXdcblx0XHRcdFx0XHQuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JyksIG51bGwpXG5cdFx0XHRcdFx0LmdldFByb3BlcnR5VmFsdWUoJ2RpcmVjdGlvbicpO1xuXHRcdFx0fSBlbHNlIGlmICgkKCdib2R5JylbMF0uY3VycmVudFN0eWxlKSB7XG5cdFx0XHRcdC8vIElFLCBoYXMgc3VidGxlIGRpZmZlcmVuY2VzIHRvIGdldENvbXB1dGVkU3R5bGVcblx0XHRcdFx0aXNfcnRsID0gJCgnYm9keScpWzBdLmN1cnJlbnRTdHlsZS5kaXJlY3Rpb247XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBOb3QgZXhhY3RseSByaWdodCwgYnV0IGJlc3QgZWZmb3J0XG5cdFx0XHRcdGlzX3J0bCA9ICQoJ2JvZHknKVswXS5zdHlsZS5kaXJlY3Rpb247XG5cdFx0XHR9XG5cdFx0XHRpc19ydGwgPSBpc19ydGwgPT09ICdydGwnO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgY2FuX2VkaXQgPSAoKSA9PiB7XG5cdFx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYS1lZGl0JykgIT09IG51bGw7XG5cdH07XG5cdC8vIExlZ2FjeSBzdHVmZlxuXHRjb25zdCBjbG9zZUZvcm0gPSBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gQ2xvc2UgYWxsIG9wZW4gZWRpdG9ycyB3aXRob3V0IHJlZGlyZWN0IHJlc29sdXRpb24gYW5kIG90aGVyIGFzeW5jaHJvbm91cyBzdHVmZi5cblx0XHRmb3IgKGNvbnN0IGVkaXQgb2YgZWRpdG9ycykge1xuXHRcdFx0aWYgKGVkaXQuc3RhdGUgPT09IE9QRU4pIHtcblx0XHRcdFx0ZWRpdC5jYW5jZWwoKTtcblx0XHRcdH0gZWxzZSBpZiAoZWRpdC5zdGF0ZSA9PT0gQ0hBTkdFX1BFTkRJTkcpIHtcblx0XHRcdFx0ZWRpdC5zYW5pdGl6ZUlucHV0KCk7XG5cdFx0XHRcdGNvbnN0IHZhbHVlID0gZWRpdC50ZXh0LnZhbHVlLnNwbGl0KCd8Jyk7XG5cdFx0XHRcdGxldCBrZXkgPSBudWxsO1xuXHRcdFx0XHRpZiAodmFsdWUubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRcdFssIGtleV0gPSB2YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCB2ID0gdmFsdWVbMF0ucmVwbGFjZSgvXy9nLCAnICcpLnRyaW0oKTtcblx0XHRcdFx0aWYgKHYubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0ZWRpdC5jYW5jZWwoKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRlZGl0LmN1cnJlbnRDYXRlZ29yeSA9IHY7XG5cdFx0XHRcdFx0ZWRpdC5jdXJyZW50S2V5ID0ga2V5O1xuXHRcdFx0XHRcdGVkaXQuY3VycmVudEV4aXN0cyA9IHRoaXMuaW5wdXRFeGlzdHM7XG5cdFx0XHRcdFx0ZWRpdC5jbG9zZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBzZXR1cF91cGxvYWQgPSAoKSA9PiB7XG5cdFx0b25VcGxvYWQgPSB0cnVlO1xuXHRcdC8vIEFkZCBhbiBlbXB0eSBjYXRlZ29yeSBiYXIgYXQgdGhlIGVuZCBvZiB0aGUgdGFibGUgY29udGFpbmluZyB0aGUgZGVzY3JpcHRpb24sIGFuZCBjaGFuZ2UgdGhlIG9uc3VibWl0IGhhbmRsZXIuXG5cdFx0bGV0IGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI213LWh0bWxmb3JtLWRlc2NyaXB0aW9uJykgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dwRGVzdEZpbGUnKTtcblx0XHRpZiAoIWlwKSB7XG5cdFx0XHRpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3cERlc3RGaWxlJyk7XG5cdFx0XHR3aGlsZSAoaXAgJiYgaXAubm9kZU5hbWUudG9Mb3dlckNhc2UoKSAhPT0gJ3RhYmxlJykge1xuXHRcdFx0XHRpcCA9IGlwLnBhcmVudE5vZGU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICghaXApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgcmV1cGxvYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd3BGb3JSZVVwbG9hZCcpO1xuXHRcdGNvbnN0IGRlc3RGaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dwRGVzdEZpbGUnKTtcblx0XHRpZiAoKHJldXBsb2FkICYmICEhcmV1cGxvYWQudmFsdWUpIHx8IChkZXN0RmlsZSAmJiAoZGVzdEZpbGUuZGlzYWJsZWQgfHwgZGVzdEZpbGUucmVhZE9ubHkpKSkge1xuXHRcdFx0cmV0dXJuOyAvLyByZS11cGxvYWQgZm9ybS4uLlxuXHRcdH1cblx0XHQvLyBJbnNlcnQgYSB0YWJsZSByb3cgd2l0aCB0d28gZmllbGRzIChsYWJlbCBhbmQgZW1wdHkgY2F0ZWdvcnkgYmFyKVxuXHRcdGNvbnN0IGxhYmVsQ2VsbCA9IG1ha2UoJ3RkJyk7XG5cdFx0Y29uc3QgbGluZUNlbGwgPSBtYWtlKCd0ZCcpO1xuXHRcdC8vIENyZWF0ZSB0aGUgY2F0ZWdvcnkgbGluZVxuXHRcdGNhdExpbmUgPSBtYWtlKCdkaXYnKTtcblx0XHRjYXRMaW5lLmNsYXNzTmFtZSA9ICdjYXRsaW5rcyc7XG5cdFx0Y2F0TGluZS5pZCA9ICdjYXRsaW5rcyc7XG5cdFx0Y2F0TGluZS5zdHlsZS50ZXh0QWxpZ24gPSBpc19ydGwgPyAncmlnaHQnIDogJ2xlZnQnO1xuXHRcdC8vIFdlJ2xsIGJlIGluc2lkZSBhIHRhYmxlIHJvdy4gTWFrZSBzdXJlIHRoYXQgd2UgZG9uJ3QgaGF2ZSBtYXJnaW5zIG9yIHN0cmFuZ2UgYm9yZGVycy5cblx0XHRjYXRMaW5lLnN0eWxlLm1hcmdpbiA9ICcwJztcblx0XHRjYXRMaW5lLnN0eWxlLmJvcmRlciA9ICdub25lJztcblx0XHRsaW5lQ2VsbC5hcHBlbmQoY2F0TGluZSk7XG5cdFx0Ly8gQ3JlYXRlIHRoZSBsYWJlbFxuXHRcdGNvbnN0IGxhYmVsID0gbnVsbDtcblx0XHRpZiAobGFiZWwpIHtcblx0XHRcdGxhYmVsQ2VsbC5pZCA9ICdob3RjYXRMYWJlbFRyYW5zbGF0ZWQnO1xuXHRcdFx0bGFiZWxDZWxsLmFwcGVuZChsYWJlbCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxhYmVsQ2VsbC5pZCA9ICdob3RjYXRMYWJlbCc7XG5cdFx0XHRsYWJlbENlbGwuYXBwZW5kKG1ha2UoZ2V0TWVzc2FnZSgnY2F0ZWdvcmllcycpLCB0cnVlKSk7XG5cdFx0fVxuXHRcdGxhYmVsQ2VsbC5jbGFzc05hbWUgPSAnbXctbGFiZWwnO1xuXHRcdGxhYmVsQ2VsbC5zdHlsZS50ZXh0QWxpZ24gPSAncmlnaHQnO1xuXHRcdGxhYmVsQ2VsbC5zdHlsZS52ZXJ0aWNhbEFsaWduID0gJ21pZGRsZSc7XG5cdFx0Ly8gQ2hhbmdlIHRoZSBvbnN1Ym1pdCBoYW5kbGVyXG5cdFx0Y29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1cGxvYWQnKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXctdXBsb2FkLWZvcm0nKTtcblx0XHRpZiAoZm9ybSkge1xuXHRcdFx0Y29uc3QgbmV3Um93ID0gaXAuaW5zZXJ0Um93KC0xKTtcblx0XHRcdG5ld1Jvdy5hcHBlbmQobGFiZWxDZWxsKTtcblx0XHRcdG5ld1Jvdy5hcHBlbmQobGluZUNlbGwpO1xuXHRcdFx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAob2xkU3VibWl0LCAuLi5hcmdzKSA9PiB7XG5cdFx0XHRcdHJldHVybiAoKCkgPT4ge1xuXHRcdFx0XHRcdGxldCBkb19zdWJtaXQgPSB0cnVlO1xuXHRcdFx0XHRcdGlmIChvbGRTdWJtaXQpIHtcblx0XHRcdFx0XHRcdGlmICh0eXBlb2Ygb2xkU3VibWl0ID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXZhbFxuXHRcdFx0XHRcdFx0XHRkb19zdWJtaXQgPSB3aW5kb3cuZXZhbChvbGRTdWJtaXQpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChvbGRTdWJtaXQgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuXHRcdFx0XHRcdFx0XHRkb19zdWJtaXQgPSBvbGRTdWJtaXQuYXBwbHkoZm9ybSwgW29sZFN1Ym1pdCwgLi4uYXJnc10pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoIWRvX3N1Ym1pdCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjbG9zZUZvcm0oKTtcblx0XHRcdFx0XHQvLyBDb3B5IHRoZSBjYXRlZ29yaWVzXG5cdFx0XHRcdFx0Y29uc3QgZWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd3BVcGxvYWREZXNjcmlwdGlvbicpIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3cERlc2MnKTtcblx0XHRcdFx0XHRsZXQgYWRkZWRPbmUgPSBmYWxzZTtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IGVkaXRvciBvZiBlZGl0b3JzKSB7XG5cdFx0XHRcdFx0XHRjb25zdCB0ID0gZWRpdG9yLmN1cnJlbnRDYXRlZ29yeTtcblx0XHRcdFx0XHRcdGlmICghdCkge1xuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGNvbnN0IGtleSA9IGVkaXRvci5jdXJyZW50S2V5O1xuXHRcdFx0XHRcdFx0Y29uc3QgbmV3X2NhdCA9IGBbWyR7SEMuY2F0ZWdvcnlfY2Fub25pY2FsfToke3R9JHtrZXkgPyBgfCR7a2V5fWAgOiAnJ31dXWA7XG5cdFx0XHRcdFx0XHQvLyBPbmx5IGFkZCBpZiBub3QgYWxyZWFkeSBwcmVzZW50XG5cdFx0XHRcdFx0XHRjb25zdCBub3dpa2lSZWdleCA9IG5ldyBSZWdFeHAoJzxubycuY29uY2F0KCd3aWtpPicsICcoXFxcXHN8XFxcXFMpKj88L25vJywgJ3dpa2knLCAnPicpLCAnZycpO1xuXHRcdFx0XHRcdFx0Y29uc3QgX2NsZWFuZWRUZXh0ID0gZWIudmFsdWUucmVwbGFjZSgvPCEtLShcXHN8XFxTKSo/LS0+L2csICcnKS5yZXBsYWNlKG5vd2lraVJlZ2V4KTtcblx0XHRcdFx0XHRcdGlmICghZmluZF9jYXRlZ29yeShfY2xlYW5lZFRleHQsIHQsIHRydWUpKSB7XG5cdFx0XHRcdFx0XHRcdGViLnZhbHVlICs9IGBcXG4ke25ld19jYXR9YDtcblx0XHRcdFx0XHRcdFx0YWRkZWRPbmUgPSB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoYWRkZWRPbmUpIHtcblx0XHRcdFx0XHRcdC8vIFJlbW92ZSBcInN1YnN0OnVuY1wiIGFkZGVkIGJ5IEZsaW5mbyBpZiBpdCBkaWRuJ3QgZmluZCBjYXRlZ29yaWVzXG5cdFx0XHRcdFx0XHRjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoJ3t7JCcuY29uY2F0KCdzdWJzdDonKS5jb25jYXQoJ3VuY319JyksICdnJyk7XG5cdFx0XHRcdFx0XHRlYi52YWx1ZSA9IGViLnZhbHVlLnJlcGxhY2UocmVnZXgsICcnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH0pKGZvcm0ub25zdWJtaXQpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xuXHRsZXQgY2xlYW5lZFRleHQgPSBudWxsO1xuXHRjb25zdCBpc09uUGFnZSA9ICh7Zmlyc3RDaGlsZH0pID0+IHtcblx0XHRpZiAoZmlyc3RDaGlsZC5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRsZXQgY2F0VGl0bGUgPSB0aXRsZShmaXJzdENoaWxkLmdldEF0dHJpYnV0ZSgnaHJlZicpKTtcblx0XHRpZiAoIWNhdFRpdGxlKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0Y2F0VGl0bGUgPSBjYXRUaXRsZS5zbGljZShjYXRUaXRsZS5pbmRleE9mKCc6JykgKyAxKS5yZXBsYWNlKC9fL2csICcgJyk7XG5cdFx0aWYgKEhDLmJsYWNrbGlzdCAmJiBIQy5ibGFja2xpc3QudGVzdChjYXRUaXRsZSkpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRjb25zdCByZXN1bHQgPSB7XG5cdFx0XHR0aXRsZTogY2F0VGl0bGUsXG5cdFx0XHRtYXRjaDogWycnLCAnJywgJyddLFxuXHRcdH07XG5cdFx0aWYgKHBhZ2VUZXh0ID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblx0XHRpZiAoY2xlYW5lZFRleHQgPT09IG51bGwpIHtcblx0XHRcdGNvbnN0IG5vd2lraVJlZ2V4ID0gbmV3IFJlZ0V4cCgnPG5vJy5jb25jYXQoJ3dpa2k+JywgJyhcXFxcc3xcXFxcUykqPzwvbm8nLCAnd2lraScsICc+JyksICdnJyk7XG5cdFx0XHRjbGVhbmVkVGV4dCA9IHBhZ2VUZXh0LnJlcGxhY2UoLzwhLS0oXFxzfFxcUykqPy0tPi9nLCAnJykucmVwbGFjZShub3dpa2lSZWdleCwgJycpO1xuXHRcdH1cblx0XHRyZXN1bHQubWF0Y2ggPSBmaW5kX2NhdGVnb3J5KGNsZWFuZWRUZXh0LCBjYXRUaXRsZSwgdHJ1ZSk7XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fTtcblx0bGV0IGluaXRpYWxpemVkID0gZmFsc2U7XG5cdGxldCBzZXR1cFRpbWVvdXQgPSBudWxsO1xuXHRjb25zdCBmaW5kQnlDbGFzcyA9IChzY29wZSwgdGFnLCBjbGFzc05hbWUpID0+IHtcblx0XHRjb25zdCByZXN1bHQgPSAkKHNjb3BlKS5maW5kKGAke3RhZ30uJHtjbGFzc05hbWV9YCk7XG5cdFx0cmV0dXJuIHJlc3VsdCAmJiByZXN1bHQubGVuZ3RoID4gMCA/IHJlc3VsdFswXSA6IG51bGw7XG5cdH07XG5cdGNvbnN0IHNldHVwID0gKGFkZGl0aW9uYWxXb3JrKSA9PiB7XG5cdFx0aWYgKGluaXRpYWxpemVkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGluaXRpYWxpemVkID0gdHJ1ZTtcblx0XHRpZiAoc2V0dXBUaW1lb3V0KSB7XG5cdFx0XHR3aW5kb3cuY2xlYXJUaW1lb3V0KHNldHVwVGltZW91dCk7XG5cdFx0XHRzZXR1cFRpbWVvdXQgPSBudWxsO1xuXHRcdH1cblx0XHQvLyBGaW5kIHRoZSBjYXRlZ29yeSBiYXIsIG9yIGNyZWF0ZSBhbiBlbXB0eSBvbmUgaWYgdGhlcmUgaXNuJ3Qgb25lLiBUaGVuIGFkZCAtLystIGxpbmtzIGFmdGVyXG5cdFx0Ly8gZWFjaCBjYXRlZ29yeSwgYW5kIGFkZCB0aGUgKyBsaW5rLlxuXHRcdGNhdExpbmUgfHw9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtdy1ub3JtYWwtY2F0bGlua3MnKTsgLy8gU3BlY2lhbDpVcGxvYWRcblx0XHRjb25zdCBoaWRkZW5DYXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI213LWhpZGRlbi1jYXRsaW5rcycpO1xuXHRcdGlmICghY2F0TGluZSkge1xuXHRcdFx0bGV0IGZvb3RlciA9IG51bGw7XG5cdFx0XHRpZiAoIWhpZGRlbkNhdHMpIHtcblx0XHRcdFx0Zm9vdGVyID0gZmluZEJ5Q2xhc3MoZG9jdW1lbnQsICdkaXYnLCAncHJpbnRmb290ZXInKTtcblx0XHRcdFx0aWYgKCFmb290ZXIpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH0gLy8gRG9uJ3Qga25vdyB3aGVyZSB0byBpbnNlcnQgdGhlIGNhdGVnb3J5IGxpbmVcblx0XHRcdH1cblx0XHRcdGNhdExpbmUgPSBtYWtlKCdkaXYnKTtcblx0XHRcdGNhdExpbmUuaWQgPSAnbXctbm9ybWFsLWNhdGxpbmtzJztcblx0XHRcdGNhdExpbmUuc3R5bGUudGV4dEFsaWduID0gaXNfcnRsID8gJ3JpZ2h0JyA6ICdsZWZ0Jztcblx0XHRcdC8vIEFkZCBhIGxhYmVsXG5cdFx0XHRjb25zdCBsYWJlbCA9IG1ha2UoJ2EnKTtcblx0XHRcdGxhYmVsLmhyZWYgPSBjb25mLndnQXJ0aWNsZVBhdGgucmVwbGFjZSgnJDEnLCAnU3BlY2lhbDpDYXRlZ29yaWVzJyk7XG5cdFx0XHRsYWJlbC50aXRsZSA9IGdldE1lc3NhZ2UoJ2NhdGVnb3JpZXMnKTtcblx0XHRcdGxhYmVsLmFwcGVuZChtYWtlKGdldE1lc3NhZ2UoJ2NhdGVnb3JpZXMnKSwgdHJ1ZSkpO1xuXHRcdFx0Y2F0TGluZS5hcHBlbmQobGFiZWwpO1xuXHRcdFx0Y2F0TGluZS5hcHBlbmQobWFrZSgnOicsIHRydWUpKTtcblx0XHRcdC8vIEluc2VydCB0aGUgbmV3IGNhdGVnb3J5IGxpbmVcblx0XHRcdGxldCBjb250YWluZXIgPSBoaWRkZW5DYXRzID8gaGlkZGVuQ2F0cy5wYXJlbnROb2RlIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhdGxpbmtzJyk7XG5cdFx0XHRpZiAoIWNvbnRhaW5lcikge1xuXHRcdFx0XHRjb250YWluZXIgPSBtYWtlKCdkaXYnKTtcblx0XHRcdFx0Y29udGFpbmVyLmlkID0gJ2NhdGxpbmtzJztcblx0XHRcdFx0Zm9vdGVyLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGNvbnRhaW5lciwgZm9vdGVyLm5leHRTaWJsaW5nKTtcblx0XHRcdH1cblx0XHRcdGNvbnRhaW5lci5jbGFzc05hbWUgPSAnY2F0bGlua3Mgbm9wcmludCc7XG5cdFx0XHRjb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICcnO1xuXHRcdFx0aWYgKGhpZGRlbkNhdHMpIHtcblx0XHRcdFx0aGlkZGVuQ2F0cy5iZWZvcmUoY2F0TGluZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb250YWluZXIuYXBwZW5kKGNhdExpbmUpO1xuXHRcdFx0fVxuXHRcdH0gLy8gZW5kIGlmIGNhdExpbmUgZXhpc3RzXG5cdFx0aWYgKGlzX3J0bCkge1xuXHRcdFx0Y2F0TGluZS5kaXIgPSAncnRsJztcblx0XHR9XG5cdFx0Ly8gQ3JlYXRlIGVkaXRvcnMgZm9yIGFsbCBleGlzdGluZyBjYXRlZ29yaWVzXG5cdFx0Y29uc3QgY3JlYXRlRWRpdG9ycyA9IChsaW5lLCBpc19oaWRkZW4pID0+IHtcblx0XHRcdGxldCBpO1xuXHRcdFx0bGV0IGNhdHMgPSBsaW5lLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyk7XG5cdFx0XHRpZiAoY2F0cy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdG5ld0RPTSA9IHRydWU7XG5cdFx0XHRcdGxpbmUgPSBjYXRzWzBdLnBhcmVudE5vZGU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjYXRzID0gbGluZS5xdWVyeVNlbGVjdG9yQWxsKCdzcGFuJyk7XG5cdFx0XHR9XG5cdFx0XHQvLyBDb3B5IGNhdHMsIG90aGVyd2lzZSBpdCdsbCBhbHNvIG1hZ2ljYWxseSBjb250YWluIG91ciBhZGRlZCBzcGFucyBhcyBpdCBpcyBhIGxpdmUgY29sbGVjdGlvbiFcblx0XHRcdGNvbnN0IGNvcHlDYXRzID0gQXJyYXkuZnJvbSh7XG5cdFx0XHRcdGxlbmd0aDogY2F0cy5sZW5ndGgsXG5cdFx0XHR9KTtcblx0XHRcdGZvciAoaSA9IDA7IGkgPCBjYXRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGNvcHlDYXRzW2ldID0gY2F0c1tpXTtcblx0XHRcdH1cblx0XHRcdGZvciAoaSA9IDA7IGkgPCBjb3B5Q2F0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjb25zdCB0ZXN0ID0gaXNPblBhZ2UoY29weUNhdHNbaV0pO1xuXHRcdFx0XHRpZiAodGVzdCAhPT0gbnVsbCAmJiB0ZXN0Lm1hdGNoICE9PSBudWxsICYmIGxpbmUpIHtcblx0XHRcdFx0XHRuZXcgQ2F0ZWdvcnlFZGl0b3IobGluZSwgY29weUNhdHNbaV0sIHRlc3QudGl0bGUsIHRlc3QubWF0Y2hbMl0sIGlzX2hpZGRlbik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBjb3B5Q2F0cy5sZW5ndGggPiAwID8gY29weUNhdHMuYXQoLTEpIDogbnVsbDtcblx0XHR9O1xuXHRcdGNvbnN0IGxhc3RTcGFuID0gY3JlYXRlRWRpdG9ycyhjYXRMaW5lLCBmYWxzZSk7XG5cdFx0Ly8gQ3JlYXRlIG9uZSB0byBhZGQgYSBuZXcgY2F0ZWdvcnlcblx0XHRuZXcgQ2F0ZWdvcnlFZGl0b3IobmV3RE9NID8gY2F0TGluZS5xdWVyeVNlbGVjdG9yQWxsKCd1bCcpWzBdIDogY2F0TGluZSwgbnVsbCwgbnVsbCwgbGFzdFNwYW4gIT09IG51bGwsIGZhbHNlKTtcblx0XHRpZiAoIW9uVXBsb2FkKSB7XG5cdFx0XHRpZiAocGFnZVRleHQgIT09IG51bGwgJiYgaGlkZGVuQ2F0cykge1xuXHRcdFx0XHRpZiAoaXNfcnRsKSB7XG5cdFx0XHRcdFx0aGlkZGVuQ2F0cy5kaXIgPSAncnRsJztcblx0XHRcdFx0fVxuXHRcdFx0XHRjcmVhdGVFZGl0b3JzKGhpZGRlbkNhdHMsIHRydWUpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gQW5kIGZpbmFsbHkgYWRkIHRoZSBcIm11bHRpLW1vZGVcIiBzcGFuLiAoRG8gdGhpcyBhdCB0aGUgZW5kLCBvdGhlcndpc2UgaXQgZW5kcyB1cCBpbiB0aGUgbGlzdCBhYm92ZS4pXG5cdFx0XHRjb25zdCBlbmFibGVNdWx0aSA9IG1ha2UoJ3NwYW4nKTtcblx0XHRcdGVuYWJsZU11bHRpLmNsYXNzTmFtZSA9ICdub3ByaW50Jztcblx0XHRcdGlmIChpc19ydGwpIHtcblx0XHRcdFx0ZW5hYmxlTXVsdGkuZGlyID0gJ3J0bCc7XG5cdFx0XHR9XG5cdFx0XHRjYXRMaW5lLmluc2VydEJlZm9yZShlbmFibGVNdWx0aSwgY2F0TGluZS5maXJzdENoaWxkLm5leHRTaWJsaW5nKTtcblx0XHRcdGVuYWJsZU11bHRpLmFwcGVuZChtYWtlKCdcXHUwMEEwJywgdHJ1ZSkpOyAvLyBuYnNwXG5cdFx0XHRtdWx0aVNwYW4gPSBtYWtlKCdzcGFuJyk7XG5cdFx0XHRlbmFibGVNdWx0aS5hcHBlbmQobXVsdGlTcGFuKTtcblx0XHRcdG11bHRpU3Bhbi5pbm5lckhUTUwgPSBgKDxhPiR7SEMuYWRkbXVsdGl9PC9hPilgO1xuXHRcdFx0Y29uc3QgW2xpbmtdID0gbXVsdGlTcGFuLnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKTtcblx0XHRcdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0c2V0TXVsdGlJbnB1dCgpO1xuXHRcdFx0XHRjaGVja011bHRpSW5wdXQoKTtcblx0XHRcdFx0cmV0dXJuIGV2dEtpbGwoZXZlbnQpO1xuXHRcdFx0fSk7XG5cdFx0XHRsaW5rLnRpdGxlID0gZ2V0TWVzc2FnZSgnbXVsdGlfdG9vbHRpcCcpO1xuXHRcdFx0bGluay5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG5cdFx0fVxuXHRcdGNsZWFuZWRUZXh0ID0gbnVsbDtcblx0XHRpZiAoYWRkaXRpb25hbFdvcmsgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuXHRcdFx0YWRkaXRpb25hbFdvcmsoKTtcblx0XHR9XG5cdFx0bXcuaG9vaygnaG90Y2F0LnJlYWR5JykuZmlyZSgpOyAvLyBFeGVjdXRlIHJlZ2lzdGVyZWQgY2FsbGJhY2sgZnVuY3Rpb25zXG5cdFx0JCgnYm9keScpLnRyaWdnZXIoJ2hvdGNhdFNldHVwQ29tcGxldGVkJyk7XG5cdH07XG5cdGNvbnN0IGNyZWF0ZUNvbW1pdEZvcm0gPSAoKSA9PiB7XG5cdFx0aWYgKGNvbW1pdEZvcm0pIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgZm9ybUNvbnRhaW5lciA9IG1ha2UoJ2RpdicpO1xuXHRcdGZvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYXBwZW5kKGZvcm1Db250YWluZXIpO1xuXHRcdGZvcm1Db250YWluZXIuaW5uZXJIVE1MID0gYDxmb3JtIGlkPVwiaG90Y2F0Q29tbWl0Rm9ybVwiIG1ldGhvZD1cInBvc3RcIiBlbmN0eXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIGFjdGlvbj1cIiR7XG5cdFx0XHRjb25mLndnU2NyaXB0XG5cdFx0fT90aXRsZT0ke2VuY29kZVVSSUNvbXBvbmVudChcblx0XHRcdGNvbmYud2dQYWdlTmFtZVxuXHRcdCl9JmFjdGlvbj1zdWJtaXRcIj48aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJ3cFRleHRib3gxXCI+JHtgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwibW9kZWxcIiB2YWx1ZT1cIiR7Y29uZi53Z1BhZ2VDb250ZW50TW9kZWx9XCI+YH08aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJmb3JtYXRcIiB2YWx1ZT1cInRleHQveC13aWtpXCI+PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwid3BTdW1tYXJ5XCIgdmFsdWU9XCJcIj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cIndwTWlub3JlZGl0XCIgdmFsdWU9XCIxXCI+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJ3cFdhdGNodGhpc1wiIHZhbHVlPVwiMVwiPjxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIndwQXV0b1N1bW1hcnlcIiB2YWx1ZT1cImQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0MjdlXCI+PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwid3BFZGl0dGltZVwiPjxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIndwU3RhcnR0aW1lXCI+PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwid3BEaWZmXCIgdmFsdWU9XCJ3cERpZmZcIj48aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJvbGRpZFwiIHZhbHVlPVwiMFwiPjxpbnB1dCB0eXBlPVwic3VibWl0XCIgbmFtZT1cImhjQ29tbWl0XCIgdmFsdWU9XCJoY0NvbW1pdFwiPjxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIndwRWRpdFRva2VuXCI+PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwid3BVbHRpbWF0ZVBhcmFtXCIgdmFsdWU9XCIxXCI+PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwid3BDaGFuZ2VUYWdzXCI+PGlucHV0IHR5cGU9XCJoaWRkZW5cIiB2YWx1ZT1cIuKEs/CdkrLimaXwnZOK8J2Tg/Cdkr7wnZK44oS08J2SueKEr1wiIG5hbWU9XCJ3cFVuaWNvZGVDaGVja1wiPjwvZm9ybT5gO1xuXHRcdGNvbW1pdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG90Y2F0Q29tbWl0Rm9ybScpO1xuXHR9O1xuXHRjb25zdCBnZXRQYWdlID0gKCkgPT4ge1xuXHRcdC8vIFdlIGtub3cgd2UgaGF2ZSBhbiBhcnRpY2xlIGhlcmUuXG5cdFx0aWYgKGNvbmYud2dBcnRpY2xlSWQpIHtcblx0XHRcdGNvbnN0IHBhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHRyYXdjb250aW51ZTogJycsXG5cdFx0XHRcdHRpdGxlczogY29uZi53Z1BhZ2VOYW1lLFxuXHRcdFx0XHRwcm9wOiBbJ2luZm8nLCAncmV2aXNpb25zJ10sXG5cdFx0XHRcdHJ2cHJvcDogWydjb250ZW50JywgJ3RpbWVzdGFtcCcsICdpZHMnXSxcblx0XHRcdFx0cnZsaW1pdDogJzEnLFxuXHRcdFx0XHRydnN0YXJ0aWQ6IGNvbmYud2dDdXJSZXZpc2lvbklkLFxuXHRcdFx0XHRydnNsb3RzOiAnKicsXG5cdFx0XHRcdG1ldGE6IFsnc2l0ZWluZm8nXSxcblx0XHRcdH07XG5cdFx0XHRIQy5zdGFydCA9IChkYXRhKSA9PiB7XG5cdFx0XHRcdHNldFBhZ2UoZGF0YSk7XG5cdFx0XHRcdHNldHVwKGNyZWF0ZUNvbW1pdEZvcm0pO1xuXHRcdFx0fTtcblx0XHRcdGFwaS5nZXQocGFyYW1zKS50aGVuKChkYXRhKSA9PiB7XG5cdFx0XHRcdEhDLnN0YXJ0KGRhdGEpO1xuXHRcdFx0fSk7XG5cdFx0XHRzZXR1cFRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0c2V0dXAoY3JlYXRlQ29tbWl0Rm9ybSk7XG5cdFx0XHR9LCA0MDAwKTsgLy8gNCBzZWMsIGp1c3QgaW4gY2FzZSBnZXR0aW5nIHRoZSB3aWtpdGV4dCB0YWtlcyBsb25nZXIuXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIERvZXNuJ3QgZXhpc3QgeWV0LiBEaXNhYmxlIG9uIG5vbi1leGlzdGluZyBVc2VyIHBhZ2VzLlxuXHRcdFx0aWYgKGNvbmYud2dOYW1lc3BhY2VOdW1iZXIgPT09IDIpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0cGFnZVRleHQgPSAnJztcblx0XHRcdHBhZ2VUaW1lID0gbnVsbDtcblx0XHRcdHNldHVwKGNyZWF0ZUNvbW1pdEZvcm0pO1xuXHRcdH1cblx0fTtcblx0Y29uc3Qgc2V0U3RhdGUgPSAoc3RhdGUpID0+IHtcblx0XHRjb25zdCBjYXRzID0gc3RhdGUuc3BsaXQoJ1xcbicpO1xuXHRcdGlmIChjYXRzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGlmIChpbml0aWFsaXplZCAmJiBlZGl0b3JzLmxlbmd0aCA9PT0gMSAmJiBlZGl0b3JzWzBdLmlzQWRkQ2F0ZWdvcnkpIHtcblx0XHRcdC8vIEluc2VydCBuZXcgc3BhbnMgYW5kIGNyZWF0ZSBuZXcgZWRpdG9ycyBmb3IgdGhlbS5cblx0XHRcdGNvbnN0IG5ld1NwYW5zID0gW107XG5cdFx0XHRjb25zdCBiZWZvcmUgPSBlZGl0b3JzLmxlbmd0aCA9PT0gMSA/IGVkaXRvcnNbMF0uc3BhbiA6IG51bGw7XG5cdFx0XHRsZXQgaTtcblx0XHRcdGZvciAoaSA9IDA7IGkgPCBjYXRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChjYXRzW2ldLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxldCBjYXQgPSBjYXRzW2ldLnNwbGl0KCd8Jyk7XG5cdFx0XHRcdGNvbnN0IGtleSA9IGNhdC5sZW5ndGggPiAxID8gY2F0WzFdIDogbnVsbDtcblx0XHRcdFx0W2NhdF0gPSBjYXQ7XG5cdFx0XHRcdGNvbnN0IGxpbmsgPSBtYWtlKCdhJyk7XG5cdFx0XHRcdGxpbmsuaHJlZiA9IHdpa2lQYWdlUGF0aChgJHtIQy5jYXRlZ29yeV9jYW5vbmljYWx9OiR7Y2F0fWApO1xuXHRcdFx0XHRsaW5rLmFwcGVuZChtYWtlKGNhdCwgdHJ1ZSkpO1xuXHRcdFx0XHRsaW5rLnRpdGxlID0gY2F0O1xuXHRcdFx0XHRjb25zdCBzcGFuID0gbWFrZSgnc3BhbicpO1xuXHRcdFx0XHRzcGFuLmFwcGVuZChsaW5rKTtcblx0XHRcdFx0aWYgKCFpKSB7XG5cdFx0XHRcdFx0Y2F0TGluZS5pbnNlcnRCZWZvcmUobWFrZSgnICcsIHRydWUpLCBiZWZvcmUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJlZm9yZS5iZWZvcmUoc3Bhbik7XG5cdFx0XHRcdGlmIChiZWZvcmUgJiYgaSArIDEgPCBjYXRzLmxlbmd0aCkge1xuXHRcdFx0XHRcdHBhcmVudC5pbnNlcnRCZWZvcmUobWFrZSgnIHwgJywgdHJ1ZSksIGJlZm9yZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0bmV3U3BhbnMucHVzaCh7XG5cdFx0XHRcdFx0ZWxlbWVudDogc3Bhbixcblx0XHRcdFx0XHR0aXRsZTogY2F0LFxuXHRcdFx0XHRcdGtleSxcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHQvLyBBbmQgY2hhbmdlIHRoZSBsYXN0IG9uZS4uLlxuXHRcdFx0aWYgKGJlZm9yZSkge1xuXHRcdFx0XHRiZWZvcmUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobWFrZSgnIHwgJywgdHJ1ZSksIGJlZm9yZSk7XG5cdFx0XHR9XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgbmV3U3BhbnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0bmV3IENhdGVnb3J5RWRpdG9yKGNhdExpbmUsIG5ld1NwYW5zW2ldLmVsZW1lbnQsIG5ld1NwYW5zW2ldLnRpdGxlLCBuZXdTcGFuc1tpXS5rZXkpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fTtcblx0Y29uc3QgZ2V0U3RhdGUgPSAoKSA9PiB7XG5cdFx0bGV0IHJlc3VsdCA9IG51bGw7XG5cdFx0Zm9yIChjb25zdCBlZGl0b3Igb2YgZWRpdG9ycykge1xuXHRcdFx0bGV0IHRleHQgPSBlZGl0b3IuY3VycmVudENhdGVnb3J5O1xuXHRcdFx0Y29uc3Qga2V5ID0gZWRpdG9yLmN1cnJlbnRLZXk7XG5cdFx0XHRpZiAodGV4dCAmJiB0ZXh0Lmxlbmd0aCA+IDApIHtcblx0XHRcdFx0aWYgKGtleSAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdHRleHQgKz0gYHwke2tleX1gO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChyZXN1bHQgPT09IG51bGwpIHtcblx0XHRcdFx0XHRyZXN1bHQgPSB0ZXh0O1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJlc3VsdCArPSBgXFxuJHt0ZXh0fWA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fTtcblx0Y29uc3QgcmVhbGx5X3J1biA9ICgpID0+IHtcblx0XHRpbml0aWFsaXplKCk7XG5cdFx0aWYgKFxuXHRcdFx0IUhDLnVwbG9hZF9kaXNhYmxlZCAmJlxuXHRcdFx0Y29uZi53Z05hbWVzcGFjZU51bWJlciA9PT0gLTEgJiZcblx0XHRcdGNvbmYud2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUgPT09ICdVcGxvYWQnICYmXG5cdFx0XHRjb25mLndnVXNlck5hbWVcblx0XHQpIHtcblx0XHRcdHNldHVwX3VwbG9hZCgpO1xuXHRcdFx0c2V0dXAoKCkgPT4ge1xuXHRcdFx0XHQvLyBDaGVjayBmb3Igc3RhdGUgcmVzdG9yYXRpb24gb25jZSB0aGUgc2V0dXAgaXMgZG9uZSBvdGhlcndpc2UsIGJ1dCBiZWZvcmUgc2lnbmFsbGluZyBzZXR1cCBjb21wbGV0aW9uXG5cdFx0XHRcdGlmICh3aW5kb3cuVXBsb2FkRm9ybSAmJiBVcGxvYWRGb3JtLnByZXZpb3VzX2hvdGNhdF9zdGF0ZSkge1xuXHRcdFx0XHRcdFVwbG9hZEZvcm0ucHJldmlvdXNfaG90Y2F0X3N0YXRlID0gc2V0U3RhdGUoVXBsb2FkRm9ybS5wcmV2aW91c19ob3RjYXRfc3RhdGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHQhY29uZi53Z0lzQXJ0aWNsZSB8fFxuXHRcdFx0XHRjb25mLndnQWN0aW9uICE9PSAndmlldycgfHxcblx0XHRcdFx0cGFyYW0oJ2RpZmYnKSAhPT0gbnVsbCB8fFxuXHRcdFx0XHRwYXJhbSgnb2xkaWQnKSAhPT0gbnVsbCB8fFxuXHRcdFx0XHQhY2FuX2VkaXQoKSB8fFxuXHRcdFx0XHRIQy5kaXNhYmxlKClcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRnZXRQYWdlKCk7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBydW4gPSAoKSA9PiB7XG5cdFx0aWYgKEhDLnN0YXJ0ZWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0SEMuc3RhcnRlZCA9IHRydWU7XG5cdFx0cmVhbGx5X3J1bigpO1xuXHR9O1xuXHQvLyBFeHBvcnQgbGVnYWN5IGZ1bmN0aW9uc1xuXHR3aW5kb3cuaG90Y2F0X2dldF9zdGF0ZSA9ICgpID0+IHtcblx0XHRyZXR1cm4gZ2V0U3RhdGUoKTtcblx0fTtcblx0d2luZG93LmhvdGNhdF9zZXRfc3RhdGUgPSAoc3RhdGUpID0+IHtcblx0XHRyZXR1cm4gc2V0U3RhdGUoc3RhdGUpO1xuXHR9O1xuXHR3aW5kb3cuaG90Y2F0X2Nsb3NlX2Zvcm0gPSAoKSA9PiB7XG5cdFx0Y2xvc2VGb3JtKCk7XG5cdH07XG5cdEhDLnJ1bldoZW5SZWFkeSA9IChjYWxsYmFjaykgPT4ge1xuXHRcdC8vIHJ1biB1c2VyLXJlZ2lzdGVyZWQgY29kZSBvbmNlIEhvdENhdCBpcyBmdWxseSBzZXQgdXAgYW5kIHJlYWR5LlxuXHRcdG13Lmhvb2soJ2hvdGNhdC5yZWFkeScpLmFkZChjYWxsYmFjayk7XG5cdH07XG5cdC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCBnZXQgY29uZmxpY3RzIHdpdGggQWpheENhdGVnb3JpZXMgKGNvcmUgZGV2ZWxvcG1lbnQgdGhhdCBzaG91bGQgb25lIGRheVxuXHQvLyByZXBsYWNlIEhvdENhdCkuXG5cdG13LmNvbmZpZy5zZXQoJ2Rpc2FibGVBSkFYQ2F0ZWdvcmllcycsIHRydWUpO1xuXHQvLyBSdW4gYXMgc29vbiBhcyBwb3NzaWJsZS4gVGhpcyB2YXJpZXMgZGVwZW5kaW5nIG9uIE1lZGlhV2lraSB2ZXJzaW9uO1xuXHQvLyB3aW5kb3cncyAnbG9hZCcgZXZlbnQgaXMgYWx3YXlzIHNhZmUsIGJ1dCB1c3VhbGx5IHdlIGNhbiBkbyBiZXR0ZXIgdGhhbiB0aGF0LlxuXHRpZiAoY29uZi53Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSAhPT0gJ1VwbG9hZCcpIHtcblx0XHQvLyBSZWxvYWQgSG90Q2F0IGFmdGVyIChWRSkgZWRpdHMgKGJ1ZyBUMTAzMjg1KVxuXHRcdG13Lmhvb2soJ3Bvc3RFZGl0JykuYWRkKCgpID0+IHtcblx0XHRcdC8vIFJlc2V0IEhvdENhdCBpbiBjYXNlIHRoaXMgaXMgYSBzb2Z0IHJlbG9hZCAoZS5nLiBWaXN1YWxFZGl0b3IgZWRpdCksIHVubGVzcyB0aGUgY2F0ZWdvcmllc1xuXHRcdFx0Ly8gd2VyZSBub3QgcmUtcmVuZGVyZWQgYW5kIG91ciBpbnRlcmZhY2UgaXMgc3RpbGwgdGhlcmUgKGUuZy4gRGlzY3Vzc2lvblRvb2xzIGVkaXQpXG5cdFx0XHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhdGxpbmtzIC5ob3RjYXRsaW5rJykpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y2F0TGluZSA9IG51bGw7XG5cdFx0XHRlZGl0b3JzID0gW107XG5cdFx0XHRpbml0aWFsaXplZCA9IGZhbHNlO1xuXHRcdFx0SEMuc3RhcnRlZCA9IGZhbHNlO1xuXHRcdFx0cnVuKCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2UgY2FuIHNhZmVseSB0cmlnZ2VyIGp1c3QgYWZ0ZXIgdXNlciBjb25maWd1cmF0aW9uIGlzIGxvYWRlZC5cblx0Ly8gVXNlIGFsd2F5cygpIGluc3RlYWQgb2YgdGhlbigpIHRvIGFsc28gc3RhcnQgSG90Q2F0IGlmIHRoZSB1c2VyIG1vZHVsZSBoYXMgcHJvYmxlbXMuXG5cdCQocnVuKTtcbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUEsd0ZBQUFBLFNBQUE7QUFBQTtBQUNBLFFBQUksUUFBUSxTQUFVLElBQUk7QUFDeEIsYUFBTyxNQUFNLEdBQUcsU0FBUyxRQUFRO0FBQUEsSUFDbkM7QUFHQSxJQUFBQSxRQUFPO0FBQUEsSUFFTCxNQUFNLE9BQU8sY0FBYyxZQUFZLFVBQVUsS0FDakQsTUFBTSxPQUFPLFVBQVUsWUFBWSxNQUFNO0FBQUEsSUFFekMsTUFBTSxPQUFPLFFBQVEsWUFBWSxJQUFJLEtBQ3JDLE1BQU0sT0FBTyxVQUFVLFlBQVksTUFBTSxLQUN6QyxNQUFNLE9BQU8sV0FBUSxZQUFZLE9BQUk7QUFBQSxJQUVwQywyQkFBWTtBQUFFLGFBQU87QUFBQSxJQUFNLEVBQUcsS0FBSyxTQUFTLGFBQWEsRUFBRTtBQUFBO0FBQUE7OztBQ2Y5RDtB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QkFBYztBQUNkem1CLFNBQUcyb0IsVUFBVTtBQUNiRCxVQUFJO0lBQ0wsQ0FBQztFQUNGO0FBR0F2eUIsSUFBRXV5QixHQUFHO0FBQ04sR0FBRzsiLAogICJuYW1lcyI6IFsibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbCIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAiU3ltYm9sIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbCIsICJkb2N1bWVudCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbCIsICJUeXBlRXJyb3IiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiJCIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImhvdENhdENoZWNrIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAid2luZG93IiwgIkhvdENhdEF1dG9SZW1vdmVDaGVja0NhdE9wdE91dCIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yQWxsIiwgImFwaSIsICJpbml0TXdBcGkiLCAiY2hlY2tDYXRlZ29yaWVzUmVnRXhwIiwgInNlbGZOYW1lIiwgInN0b3JhZ2VJdGVtTmFtZSIsICJzdG9yYWdlSXRlbSIsICJzdG9yYWdlIiwgImNyZWF0ZWpJY29uIiwgImljb25DbGFzcyIsICIkIiwgImF0dHIiLCAiY29uY2F0IiwgInRleHQiLCAiY3JlYXRlTm90aWZ5QXJlYSIsICJ0ZXh0Tm9kZSIsICJpY29uIiwgInN0YXRlIiwgImFkZENsYXNzIiwgImFwcGVuZCIsICJjc3MiLCAicGFkZGluZyIsICJvbmUiLCAiZSIsICJzZWxmIiwgIm5ld1ZhbCIsICJ3cFRleHRib3gxIiwgInZhbHVlIiwgInJlcGxhY2UiLCAiZGxnQnV0dG9ucyIsICIkZGlhbG9nQ2hlY2tTdG9yYWdlIiwgIiRwZXJtYVNhdmVIaW50IiwgIiR0ZXh0SGludE5vZGUiLCAiJGRpYWxvZyIsICJkb1JlbW92ZSIsICJ3cFN1bW1hcnkiLCAid3JpdGVTdG9yYWdlIiwgInZhbCIsICJzZXQiLCAiY2hlY2tlZCIsICJkaWFsb2ciLCAiX2FkZFRvSlMiLCAiX2UiLCAicHJldmVudERlZmF1bHQiLCAiaGFzQ2xhc3MiLCAiJGVsIiwgIm9mZiIsICJwYXJhbXMiLCAiYWN0aW9uIiwgInRpdGxlIiwgInN1bW1hcnkiLCAiYXBwZW5kdGV4dCIsICJkYXRhIiwgImVkaXREb25lIiwgImVkaXRTdGF0IiwgImVycm9yIiwgIm5vdGlmeSIsICJjb2RlIiwgImluZm8iLCAidGFnIiwgInR5cGUiLCAiZmFkZU91dCIsICJwb3N0V2l0aFRva2VuIiwgInRoZW4iLCAicHJvbXB0IiwgImlkIiwgIm9uIiwgImZhZGVJbiIsICJhcHBlbmRUbyIsICJkaXNwbGF5IiwgInVzZXIiLCAiaXNBbm9uIiwgImhpZGUiLCAibW9kYWwiLCAiY2xvc2VPbkVzY2FwZSIsICJ3aWR0aCIsICJidXR0b25zIiwgImNsb3NlIiwgIiRib2R5IiwgImZpbmQiLCAidHJpZ2dlciIsICJvcGVuIiwgIiRidXR0b25zIiwgInBhcmVudCIsICJlcSIsICJidXR0b24iLCAiaWNvbnMiLCAicHJpbWFyeSIsICJIb3RDYXRBdXRvUmVtb3ZlQ2hlY2tDYXQiLCAiJG9rTGluayIsICJocmVmIiwgImRvRWRpdCIsICJyZXN1bHQiLCAibm9jcmVhdGUiLCAiYWpheCIsICJ1cmwiLCAiZGF0YVR5cGUiLCAic3VjY2VzcyIsICJjYWNoZSIsICJsb2FkSG90Q2F0Q2hlY2siLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiYXJncyIsICJtZXNzYWdlIiwgInBsYWluIiwgIldHX1VTRVJfR1JPVVBTIiwgIl9tdyRjb25maWckZ2V0IiwgIldHX1VTRVJfTEFOR1VBR0UiLCAiaG90Q2F0TWVzc2FnZXMiLCAiaW5jbHVkZXMiLCAibWVzc2FnZXMiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImhvdENhdCIsICJjb25mIiwgInZhbHVlcyIsICJIb3RDYXQiLCAibm9kZU5hbWUiLCAid2dBY3Rpb24iLCAibGlua3MiLCAiY2hhbmdlIiwgInJlbW92ZSIsICJhZGQiLCAicmVzdG9yZSIsICJ1bmRvIiwgImRvd24iLCAidXAiLCAiY2hhbmdlVGFnIiwgImFkZG11bHRpIiwgImRpc2FibGUiLCAibnMiLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAibnNJZHMiLCAid2dOYW1lc3BhY2VJZHMiLCAid2dBcnRpY2xlSWQiLCAidGVzdCIsICJ3Z1RpdGxlIiwgImNyZWF0b3IiLCAidGltZWR0ZXh0IiwgImluc3RpdHV0aW9uIiwgInVuY2F0X3JlZ2V4cCIsICJleGlzdHNZZXMiLCAiZXhpc3RzTm8iLCAidGVtcGxhdGVfY2F0ZWdvcmllcyIsICJjYXBpdGFsaXplUGFnZU5hbWVzIiwgInVwbG9hZF9kaXNhYmxlZCIsICJibGFja2xpc3QiLCAiYmdfY2hhbmdlZCIsICJub19hdXRvY29tbWl0IiwgImRlbF9uZWVkc19kaWZmIiwgInN1Z2dlc3RfZGVsYXkiLCAiZWRpdGJveF93aWR0aCIsICJzdWdnZXN0aW9ucyIsICJmaXhlZF9zZWFyY2giLCAidXNlX3VwX2Rvd24iLCAibGlzdFNpemUiLCAic2luZ2xlX21pbm9yIiwgImRvbnRfYWRkX3RvX3dhdGNobGlzdCIsICJzaG9ydGN1dHMiLCAiYWRkU2hvcnRjdXRzIiwgIm1hcCIsICJfYSIsICJrIiwgIk9iamVjdCIsICJoYXNPd24iLCAidiIsICJ0cmltIiwgImxlbmd0aCIsICJIQyIsICJ1YSIsICJuYXZpZ2F0b3IiLCAidXNlckFnZW50IiwgInRvTG93ZXJDYXNlIiwgImlzX3dlYmtpdCIsICJjYXRfcHJlZml4IiwgIm5vU3VnZ2VzdGlvbnMiLCAid2lraVRleHRCbGFuayIsICJ3aWtpVGV4dEJsYW5rUkUiLCAiUmVnRXhwIiwgIndpa2lUZXh0QmxhbmtPckJpZGkiLCAiZm9ybWF0dGVkTmFtZXNwYWNlcyIsICJ3Z0Zvcm1hdHRlZE5hbWVzcGFjZXMiLCAibmFtZXNwYWNlSWRzIiwgImF1dG9Mb2NhbGl6ZSIsICJuYW1lc3BhY2VOdW1iZXIiLCAiZmFsbGJhY2siLCAiY3JlYXRlUmVnZXhwU3RyIiwgIm5hbWUiLCAicmVnZXhfbmFtZSIsICJpIiwgImluaXRpYWwiLCAiY2hhckF0IiwgImxsIiwgInVsIiwgInRvVXBwZXJDYXNlIiwgImNhbm9uaWNhbCIsICJTdHJpbmciLCAicmVnZXhwIiwgImNhdF9uYW1lIiwgImNhdGVnb3J5X2Nhbm9uaWNhbCIsICJjYXRlZ29yeV9yZWdleHAiLCAidGVtcGxhdGVfcmVnZXhwIiwgIm1ha2UiLCAiYXJnIiwgImxpdGVyYWwiLCAiY3JlYXRlVGV4dE5vZGUiLCAiY3JlYXRlRWxlbWVudCIsICJwYXJhbSIsICJ1cmkiLCAibG9jYXRpb24iLCAicmUiLCAibSIsICJleGVjIiwgImRlY29kZVVSSUNvbXBvbmVudCIsICJzY3JpcHQiLCAid2dTY3JpcHQiLCAiaW5kZXhPZiIsICJ3Z1NlcnZlciIsICJzbGljZSIsICJwcm90b2NvbCIsICJwcmVmaXgiLCAid2dBcnRpY2xlUGF0aCIsICJjbGFzc05hbWUiLCAiY2FwaXRhbGl6ZSIsICJzdHIiLCAid2lraVBhZ2VQYXRoIiwgInBhZ2VOYW1lIiwgImVuY29kZVVSSUNvbXBvbmVudCIsICJlc2NhcGVSRSIsICJzdWJzdGl0dXRlRmFjdG9yeSIsICJvcHRpb25zIiwgImxlYWQiLCAiaW5kaWNhdG9yIiwgImxicmFjZSIsICJyYnJhY2UiLCAibWF0Y2giLCAiaWR4IiwgImFscGhhIiwgInJlcGxhY2VtZW50IiwgInJlcGxhY2VTaG9ydGN1dHMiLCAicmVwbGFjZUhhc2giLCAicyIsICJmaW5kQ2F0c1JFIiwgInJlcGxhY2VCeUJsYW5rcyIsICJmaW5kX2NhdGVnb3J5IiwgIndpa2l0ZXh0IiwgImNhdGVnb3J5IiwgIm9uY2UiLCAiY2F0X3JlZ2V4IiwgIm5vd2lraVJlZ2V4IiwgImNvcGllZHRleHQiLCAiY3Vycl9tYXRjaCIsICJwdXNoIiwgImludGVybGFuZ3VhZ2VSRSIsICJjaGFuZ2VfY2F0ZWdvcnkiLCAidG9SZW1vdmUiLCAidG9BZGQiLCAiaXNfaGlkZGVuIiwgImZpbmRfaW5zZXJ0aW9ucG9pbnQiLCAiX3dpa2l0ZXh0IiwgImluZGV4IiwgImxhc3RJbmRleCIsICJvbkNhdCIsICJuYW1lU3BhY2UiLCAia2V5Q2hhbmdlIiwgIm1hdGNoZXMiLCAiY2F0X3BvaW50IiwgImJlZm9yZSIsICJNYXRoIiwgIm1heCIsICJhZnRlciIsICJzZWFyY2giLCAiaiIsICJwb2ludCIsICJuZXdjYXRzdHJpbmciLCAic3VmZml4IiwgInR4dCIsICJldnRLZXlzIiwgImN0cmxLZXkiLCAibWV0YUtleSIsICJzaGlmdEtleSIsICJldnRLaWxsIiwgInN0b3BQcm9wYWdhdGlvbiIsICJjYW5jZWxCdWJibGUiLCAiY2F0TGluZSIsICJvblVwbG9hZCIsICJlZGl0b3JzIiwgImNvbW1pdEJ1dHRvbiIsICJjb21taXRGb3JtIiwgIm11bHRpU3BhbiIsICJwYWdlVGV4dCIsICJwYWdlVGltZSIsICJwYWdlV2F0Y2hlZCIsICJ3YXRjaENyZWF0ZSIsICJ3YXRjaEVkaXQiLCAibWlub3JFZGl0cyIsICJlZGl0VG9rZW4iLCAiaXNfcnRsIiwgInNlcnZlclRpbWUiLCAibGFzdFJldklkIiwgInBhZ2VUZXh0UmV2SWQiLCAiY29uZmxpY3RpbmdVc2VyIiwgIm5ld0RPTSIsICJVTkNIQU5HRUQiLCAiT1BFTiIsICJDSEFOR0VfUEVORElORyIsICJDSEFOR0VEIiwgIkRFTEVURUQiLCAic2V0UGFnZSIsICJzdGFydFRpbWUiLCAicXVlcnkiLCAicGFnZXMiLCAicGFnZSIsICJyZXZpc2lvbnMiLCAic2xvdHMiLCAiY29udGVudCIsICJ0aW1lc3RhbXAiLCAicmV2aWQiLCAibGFzdHJldmlkIiwgInN0YXJ0dGltZXN0YW1wIiwgIndhdGNoZWQiLCAidG9rZW5zIiwgImNzcmZ0b2tlbiIsICJsYW5nbGlua3MiLCAibGFuZyIsICJnZW5lcmFsIiwgInRpbWUiLCAiY2FzZSIsICJ1c2VyaW5mbyIsICJ3YXRjaGNyZWF0aW9ucyIsICJ3YXRjaGRlZmF1bHQiLCAibWlub3JkZWZhdWx0IiwgInNhdmVJblByb2dyZXNzIiwgImluaXRpYXRlRWRpdCIsICJmYWlsdXJlIiwgIm9sZEJ1dHRvblN0YXRlIiwgImRpc2FibGVkIiwgImZhaWwiLCAiYXBwbHkiLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicmF3Y29udGludWUiLCAidGl0bGVzIiwgIndnUGFnZU5hbWUiLCAicHJvcCIsICJpbnByb3AiLCAicnZwcm9wIiwgInJ2c2xvdHMiLCAicnZsaW1pdCIsICJydmRpciIsICJydnN0YXJ0aWQiLCAid2dDdXJSZXZpc2lvbklkIiwgImxsbGltaXQiLCAibWV0YSIsICJ1aXByb3AiLCAiZG9uZSIsICJzdGF0dXMiLCAic3RhdHVzVGV4dCIsICJtdWx0aUNoYW5nZU1zZyIsICJjb3VudCIsICJjdXJyZW50VGltZXN0YW1wIiwgIm5vdyIsICJEYXRlIiwgInRzIiwgImdldFVUQ0Z1bGxZZWFyIiwgInR3byIsICJnZXRVVENNb250aCIsICJnZXRVVENEYXRlIiwgImdldFVUQ0hvdXJzIiwgImdldFVUQ01pbnV0ZXMiLCAiZ2V0VVRDU2Vjb25kcyIsICJwZXJmb3JtQ2hhbmdlcyIsICJzaW5nbGVFZGl0b3IiLCAic2VsZkVkaXRDb25mbGljdCIsICJ3Z1VzZXJOYW1lIiwgIm5vQ29tbWl0IiwgIndwRWRpdFRva2VuIiwgIndwRGlmZiIsICJ3cFNhdmUiLCAiY2hhbmdlZCIsICJhZGRlZCIsICJkZWxldGVkIiwgInRvRWRpdCIsICJlZGl0IiwgImNoYW5nZXMiLCAib3JpZ2luYWxDYXRlZ29yeSIsICJjdXJyZW50Q2F0ZWdvcnkiLCAiY3VycmVudEtleSIsICJjdXJyZW50SGlkZGVuIiwgImZyb20iLCAidG8iLCAid3BNaW5vcmVkaXQiLCAid3BXYXRjaHRoaXMiLCAid3BDaGFuZ2VUYWdzIiwgIndwQXV0b1N1bW1hcnkiLCAiam9pbiIsICJzaG9ydFN1bW1hcnkiLCAiYXJyb3ciLCAid3BTdGFydHRpbWUiLCAid3BFZGl0dGltZSIsICJvbGRpZCIsICJoY0NvbW1pdCIsICJjbGljayIsICJyZXNvbHZlT25lIiwgInRvUmVzb2x2ZSIsICJjYXRzIiwgImNhdGVnb3JpZXMiLCAiaXNfZGFiIiwgImlzX3JlZGlyIiwgInJlZGlyZWN0IiwgImNhdGVnb3J5aW5mbyIsICJoaWRkZW4iLCAiaXNfbWlzc2luZyIsICJtaXNzaW5nIiwgImRhYklucHV0Q2xlYW5lZCIsICJpbnB1dEV4aXN0cyIsICJzcmMiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgIm4iLCAiY2F0XyIsICJjYXQiLCAiZXJyIiwgImYiLCAiZGFiIiwgInJlc29sdmVSZWRpcmVjdHMiLCAicCIsICJyZXNvbHZlTXVsdGkiLCAiY2FsbGJhY2siLCAiZGFiSW5wdXQiLCAibGFzdElucHV0IiwgInBsbmFtZXNwYWNlIiwgInBsbGltaXQiLCAiY2xsaW1pdCIsICJqc29uIiwgInJlcSIsICJtYWtlQWN0aXZlIiwgIndoaWNoIiwgImlzX2FjdGl2ZSIsICJfaSIsICJfZWRpdG9ycyIsICJlZGl0b3IiLCAiaW5hY3RpdmF0ZSIsICJzaG93RGFiIiwgImV4cGVjdGVkSW5wdXQiLCAibGFzdFJlYWxJbnB1dCIsICJhY3R1YWxWYWx1ZSIsICJzaG93c0xpc3QiLCAic3BsaXQiLCAibGFzdFNlbGVjdGlvbiIsICJzdGFydCIsICJlbmQiLCAiZGlzcGxheUxpc3QiLCAic2V0VGltZW91dCIsICJzZXRTZWxlY3Rpb24iLCAic2hvd1N1Z2dlc3Rpb25zIiwgIm11bHRpU3VibWl0IiwgIl9pMiIsICJfZWRpdG9yczIiLCAibXNnIiwgInJlc29sdmVkIiwgImZpcnN0RGFiIiwgImRvbnRDaGFuZ2UiLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAiZWxlbWVudCIsICJhY2NlcHRDaGVjayIsICJjb21taXQiLCAic2V0TXVsdGlJbnB1dCIsICJhZGRFdmVudExpc3RlbmVyIiwgInBhcmVudE5vZGUiLCAicmVwbGFjZUNoaWxkIiwgImNoZWNrTXVsdGlJbnB1dCIsICJoYXNDaGFuZ2VzIiwgIl9pMyIsICJfZWRpdG9yczMiLCAic3VnZ2VzdGlvbkVuZ2luZXMiLCAib3BlbnNlYXJjaCIsICJoYW5kbGVyIiwgInF1ZXJ5UmVzdWx0IiwgInF1ZXJ5S2V5IiwgImV4aXN0cyIsICJzcGxpY2UiLCAibm9ybWFsaXplZCIsICJpbnRlcm5hbHNlYXJjaCIsICJhbGxwYWdlcyIsICJfdGl0bGUiLCAic3ViY2F0ZWdvcmllcyIsICJjYXRlZ29yeW1lbWJlcnMiLCAicGFyZW50Y2F0ZWdvcmllcyIsICJzdWdnZXN0aW9uQ29uZmlncyIsICJzZWFyY2hpbmRleCIsICJlbmdpbmVzIiwgInNob3ciLCAidGVtcCIsICJub0NvbXBsZXRpb24iLCAicGFnZWxpc3QiLCAiY29tYmluZWQiLCAic3ViY2F0IiwgInBhcmVudGNhdCIsICJCUyIsICJUQUIiLCAiUkVUIiwgIkVTQyIsICJTUEFDRSIsICJQR1VQIiwgIlBHRE9XTiIsICJVUCIsICJET1dOIiwgIkRFTCIsICJJTUUiLCAiQ2F0ZWdvcnlFZGl0b3IiLCAiY29uc3RydWN0b3IiLCAiaW5pdGlhbGl6ZSIsICJsaW5lIiwgInNwYW4iLCAiZGlyIiwgImlzQWRkQ2F0ZWdvcnkiLCAiY2F0TGluayIsICJmaXJzdENoaWxkIiwgIm9yaWdpbmFsS2V5IiwgIm9yaWdpbmFsRXhpc3RzIiwgIm1ha2VMaW5rU3BhbiIsICJ1cERvd25MaW5rcyIsICJzdHlsZSIsICJsaW5rU3BhbiIsICJpbnNlcnRCZWZvcmUiLCAibmV4dFNpYmxpbmciLCAibGluayIsICJiaW5kIiwgIm5vcm1hbExpbmtzIiwgInVuZGVsTGluayIsICJvcmlnaW5hbEhpZGRlbiIsICJlbmdpbmUiLCAiY3VycmVudEV4aXN0cyIsICJsYXN0U2F2ZWRTdGF0ZSIsICJsYXN0U2F2ZWRDYXRlZ29yeSIsICJsYXN0U2F2ZWRLZXkiLCAibGFzdFNhdmVkRXhpc3RzIiwgImxhc3RTYXZlZEhpZGRlbiIsICJpbnZva2VTdWdnZXN0aW9ucyIsICJkb250X2F1dG9jb21wbGV0ZSIsICJ0ZXh0Y2hhbmdlIiwgIm1ha2VGb3JtIiwgImZvcm0iLCAibWV0aG9kIiwgImFjY2VwdCIsICJzaXplIiwgImV2ZW50IiwgImltZSIsICJsYXN0S2V5IiwgInVzZXNDb21wb3NpdGlvbiIsICJrZXlDb3VudCIsICJwcm9jZXNzS2V5IiwgInJlc2V0S2V5U2VsZWN0aW9uIiwgImNhbmNlbCIsICJvbmJlZm9yZWRlYWN0aXZhdGUiLCAiY3JlYXRlVGV4dFJhbmdlIiwgInNhdmVWaWV3IiwgImxpc3QiLCAiaGlnaGxpZ2h0U3VnZ2VzdGlvbiIsICJmb2N1cyIsICJlbmdpbmVTZWxlY3RvciIsICJvcHQiLCAic2VsZWN0ZWQiLCAic2VsZWN0ZWRJbmRleCIsICJidXR0b25fbGFiZWwiLCAiX2lkIiwgImRlZmF1bHRUZXh0IiwgImxhYmVsIiwgIk9LIiwgIm9rIiwgImNhbmNlbEJ1dHRvbiIsICJwb3NpdGlvbiIsICJ3aGl0ZVNwYWNlIiwgIl9pNCIsICJfZWRpdG9yczQiLCAib3JpZ2luYWxTdGF0ZSIsICJyZWFkT25seSIsICJyZW1vdmVFZGl0b3IiLCAiYmFja2dyb3VuZENvbG9yIiwgIm5leHQiLCAicm9sbGJhY2siLCAidW5kb0xpbmsiLCAiZG9udENoZWNrIiwgInNhbml0aXplSW5wdXQiLCAib3JpZ2luYWwiLCAiX2k1IiwgIl9lZGl0b3JzNSIsICJjc3NUZXh0IiwgInRleHREZWNvcmF0aW9uIiwgInNlbGVjdEVuZ2luZSIsICJlbmdpbmVOYW1lIiwgIm1ha2VDYWxsIiwgImNhbGxiYWNrT2JqIiwgImNsZWFuS2V5IiwgImNiIiwgInoiLCAiY2FsbHNNYWRlIiwgIm5vZkNhbGxzIiwgImFsbFRpdGxlcyIsICJkb250Q2FjaGUiLCAiY2FuY2VsbGVkIiwgImdldEpTT04iLCAiQXJyYXkiLCAiaXNBcnJheSIsICJmb3JjZSIsICJwaXBlIiwgIm1ha2VDYWxscyIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJlbmdpbmVfIiwgIndnU2NyaXB0UGF0aCIsICJkb250QXV0b2NvbXBsZXRlIiwgImxhc3RRdWVyeSIsICJ2Tm9ybWFsaXplZCIsICJrbm93blRvRXhpc3QiLCAidkxvdyIsICJzb3J0IiwgImEiLCAiYiIsICJwcmVmaXhNYXRjaEEiLCAicHJlZml4TWF0Y2hCIiwgImFMb3ciLCAiYkxvdyIsICJmaXJzdFRpdGxlIiwgImNvbXBsZXRlZCIsICJhdXRvQ29tcGxldGUiLCAiZXhpc3RpbmciLCAibm9mSXRlbXMiLCAiYWxpZ24iLCAiekluZGV4IiwgImFuY2hvciIsICJsaXN0aCIsICJ0b3AiLCAib2Zmc2V0VG9wIiwgIm9mZnNldEhlaWdodCIsICJtYXhMaXN0SGVpZ2h0IiwgInZpZXdwb3J0IiwgIndoYXQiLCAiZXZhbHVhdGUiLCAib3BlcmEiLCAiZG9jdW1lbnRFbGVtZW50IiwgInNjcm9sbF9vZmZzZXQiLCAibm9kZSIsICJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCAiYm94IiwgIngiLCAicm91bmQiLCAibGVmdCIsICJ5IiwgInQiLCAibCIsICJvZmZzZXRMZWZ0IiwgIm9mZnNldFBhcmVudCIsICJ0ZXh0UG9zIiwgIm5sIiwgIm50IiwgIm9mZnNldCIsICJ0ZXh0Qm94V2lkdGgiLCAib2Zmc2V0V2lkdGgiLCAiY2xpZW50V2lkdGgiLCAic2Nyb2xsIiwgInZpZXdfdyIsICJ3IiwgImxfcG9zIiwgInJpZ2h0IiwgInJlbGF0aXZlX29mZnNldCIsICJhY3RWYWwiLCAibm9ybWFsaXplZEFjdFZhbCIsICJkb250TW9kaWZ5IiwgImNhblNlbGVjdCIsICJzZXRTZWxlY3Rpb25SYW5nZSIsICJzZWxlY3Rpb25TdGFydCIsICJzZWxlY3Rpb25FbmQiLCAibmV3X3NlbGVjdGlvbiIsICJtb3ZlIiwgIm1vdmVFbmQiLCAic2VsZWN0IiwgImdldFNlbGVjdGlvbiIsICJzZWxlY3Rpb24iLCAiY3JlYXRlUmFuZ2UiLCAicm5nIiwgImR1cGxpY2F0ZSIsICJ0ZXh0Um5nIiwgInNldEVuZFBvaW50IiwgImN1cnIiLCAidGd0IiwgImhvdGNhdF9kb250X2FkZF90b193YXRjaGxpc3QiLCAiSG90Q2F0RG9udEFkZFRvV2F0Y2hsaXN0IiwgImhvdGNhdF9ub19hdXRvY29tbWl0IiwgIkhvdENhdE5vQXV0b0NvbW1pdCIsICJob3RjYXRfZGVsX25lZWRzX2RpZmYiLCAiSG90Q2F0RGVsTmVlZHNEaWZmIiwgImhvdGNhdF9zdWdnZXN0aW9uX2RlbGF5IiwgIkhvdENhdFN1Z2dlc3Rpb25EZWxheSIsICJob3RjYXRfZWRpdGJveF93aWR0aCIsICJIb3RDYXRFZGl0Qm94V2lkdGgiLCAiaG90Y2F0X3N1Z2dlc3Rpb25zIiwgIkhvdENhdFN1Z2dlc3Rpb25zIiwgImhvdGNhdF9zdWdnZXN0aW9uc19maXhlZCIsICJIb3RDYXRGaXhlZFN1Z2dlc3Rpb25zIiwgImhvdGNhdF9zaW5nbGVfY2hhbmdlc19hcmVfbWlub3IiLCAiSG90Q2F0TWlub3JTaW5nbGVDaGFuZ2VzIiwgImhvdGNhdF9jaGFuZ2VkX2JhY2tncm91bmQiLCAiSG90Q2F0Q2hhbmdlZEJhY2tncm91bmQiLCAiaG90Y2F0X3VzZV9jYXRlZ29yeV9saW5rcyIsICJIb3RDYXRVc2VDYXRlZ29yeUxpbmtzIiwgImhvdGNhdF9saXN0X3NpemUiLCAiSG90Q2F0TGlzdFNpemUiLCAiSG90Q2F0Q2hhbmdlVGFnIiwgImVGb3JtIiwgImVkaXRmb3JtIiwgImNhdFJlZ0V4cCIsICJvbGRUeHQiLCAiaXNNaW5vckNoYW5nZSIsICJuZXdUeHQiLCAib2xkTGluZXMiLCAibmV3TGluZXMiLCAiY0FyciIsICJleGNlcHQiLCAiYUFyciIsICJiQXJyIiwgImxBcnIiLCAic0FyciIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJpdGVtIiwgImluZCIsICJmaWx0ZXIiLCAiYyIsICJxdWVyeVNlbGVjdG9yIiwgInN1bSIsICJzdW1BIiwgIiRjdCIsICJyZW1vdmVDaGFuZ2VUYWciLCAiTnVtYmVyIiwgInBhcnNlSW50IiwgImlzTmFOIiwgIm1pbiIsICJfaTYiLCAiX09iamVjdCRlbnRyaWVzIiwgImVudHJpZXMiLCAic3VnZ2VzdGlvbkNvbmZpZyIsICJkZWZhdWx0VmlldyIsICJnZXRDb21wdXRlZFN0eWxlIiwgImdldFByb3BlcnR5VmFsdWUiLCAiY3VycmVudFN0eWxlIiwgImRpcmVjdGlvbiIsICJjYW5fZWRpdCIsICJjbG9zZUZvcm0iLCAiX2k3IiwgIl9lZGl0b3JzNiIsICJzZXR1cF91cGxvYWQiLCAiaXAiLCAicmV1cGxvYWQiLCAiZGVzdEZpbGUiLCAibGFiZWxDZWxsIiwgImxpbmVDZWxsIiwgInRleHRBbGlnbiIsICJtYXJnaW4iLCAiYm9yZGVyIiwgInZlcnRpY2FsQWxpZ24iLCAibmV3Um93IiwgImluc2VydFJvdyIsICJvbGRTdWJtaXQiLCAiZG9fc3VibWl0IiwgImV2YWwiLCAiRnVuY3Rpb24iLCAiZWIiLCAiYWRkZWRPbmUiLCAiX2k4IiwgIl9lZGl0b3JzNyIsICJuZXdfY2F0IiwgIl9jbGVhbmVkVGV4dCIsICJyZWdleCIsICJvbnN1Ym1pdCIsICJjbGVhbmVkVGV4dCIsICJpc09uUGFnZSIsICJub2RlVHlwZSIsICJOb2RlIiwgIkVMRU1FTlRfTk9ERSIsICJjYXRUaXRsZSIsICJnZXRBdHRyaWJ1dGUiLCAiaW5pdGlhbGl6ZWQiLCAic2V0dXBUaW1lb3V0IiwgImZpbmRCeUNsYXNzIiwgInNjb3BlIiwgInNldHVwIiwgImFkZGl0aW9uYWxXb3JrIiwgImNsZWFyVGltZW91dCIsICJoaWRkZW5DYXRzIiwgImZvb3RlciIsICJjb250YWluZXIiLCAiY3JlYXRlRWRpdG9ycyIsICJjb3B5Q2F0cyIsICJhdCIsICJsYXN0U3BhbiIsICJlbmFibGVNdWx0aSIsICJpbm5lckhUTUwiLCAiY3Vyc29yIiwgImhvb2siLCAiZmlyZSIsICJjcmVhdGVDb21taXRGb3JtIiwgImZvcm1Db250YWluZXIiLCAid2dQYWdlQ29udGVudE1vZGVsIiwgImdldFBhZ2UiLCAic2V0U3RhdGUiLCAibmV3U3BhbnMiLCAiZ2V0U3RhdGUiLCAiX2k5IiwgIl9lZGl0b3JzOCIsICJyZWFsbHlfcnVuIiwgIndnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIiwgIlVwbG9hZEZvcm0iLCAicHJldmlvdXNfaG90Y2F0X3N0YXRlIiwgIndnSXNBcnRpY2xlIiwgInJ1biIsICJzdGFydGVkIiwgImhvdGNhdF9nZXRfc3RhdGUiLCAiaG90Y2F0X3NldF9zdGF0ZSIsICJob3RjYXRfY2xvc2VfZm9ybSIsICJydW5XaGVuUmVhZHkiXQp9Cg==

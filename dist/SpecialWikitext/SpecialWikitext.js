/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-SpecialWikitext.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/SpecialWikitext}
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

// dist/SpecialWikitext/SpecialWikitext.js
//! src/SpecialWikitext/SpecialWikitext.ts
require_es_array_push();
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function() {
    var self2 = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self2, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}
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
var wikiTextKey = "_addText";
var luaAddText = (inputStr, newStr, _escape) => {
  let inputString = inputStr;
  if (newStr) {
    if (inputString !== "") {
      inputString += "\n";
    }
    let text = newStr;
    if (_escape) {
      const [escapeStr] = JSON.parse("[".concat(JSON.stringify(
        // Lua不支持\u、\x的跳脱符号；排除相关转换
        newStr.toString().replace(/\\([ux])/gi, "$1")
      ).replace(/\\\\/g, "\\"), "]"));
      text = escapeStr;
    }
    inputString += text;
  }
  return inputString;
};
var luaGetString = (str) => {
  const testStrArray = /[^\n]*\*\//.exec(str);
  let testStr;
  if (testStrArray) {
    testStr = testStrArray[0] || "";
    testStr = testStr.slice(0, Math.max(0, testStr.length - 2));
  } else {
    testStr = str;
  }
  const trimCheck = testStr.trim();
  const firstChar = trimCheck.charAt(0);
  if (firstChar === trimCheck.at(-1) && (firstChar === "'" || firstChar === '"')) {
    return trimCheck.slice(1, 1 + trimCheck.length - 2);
  }
  return testStr;
};
var luaGetContentText = (str) => {
  let wikitext = "";
  try {
    str.replace(new RegExp("".concat(wikiTextKey, "\\s*\\{[^c\\}]*content\\s*:\\s*[^\n]*"), "g"), (text) => {
      const tempText = (/content\s*:\s*[^\n]*/.exec(text) || ["content:"])[0].replace(/^[\s;}]+|[\s;}]+$/g, "").replace(/\s*content\s*:\s*/, "");
      if (wikitext !== "") {
        wikitext += "\n";
      }
      wikitext += luaGetString(tempText);
      return text;
    });
  } catch {
    return "";
  }
  return wikitext;
};
var luaGetObjText = (str) => {
  let wikitext = "";
  try {
    str.replace(new RegExp("".concat(wikiTextKey, "\\s*[\\=:]\\s*[^\n]*"), "g"), (text) => {
      const tempText = text.replace(/^[\s;}]+|[\s;}]+$/g, "").replace(new RegExp("".concat(wikiTextKey, "\\s*[\\=:]\\s*")), "");
      if (wikitext !== "") {
        wikitext += "\n";
      }
      wikitext += luaGetString(tempText);
      return text;
    });
  } catch {
    return "";
  }
  return wikitext;
};
var luaGetCSSwikitext = (inputStr) => {
  var _$body$find$val;
  let wikitext = "";
  const $body = $("body");
  const cssText = inputStr || ((_$body$find$val = $body.find("#wpTextbox1").val()) === null || _$body$find$val === void 0 ? void 0 : _$body$find$val.toString()) || "";
  if (!cssText.trim()) {
    return "";
  }
  wikitext = luaAddText(wikitext, luaGetContentText(cssText.toString()), true);
  wikitext = luaAddText(wikitext, luaGetObjText(cssText.toString()), true);
  return wikitext;
};
var luaGetJSwikitext = (inputStr) => {
  var _document$querySelect;
  let wikitext = "";
  const jsText = inputStr || ((_document$querySelect = document.querySelector("#wpTextbox1")) === null || _document$querySelect === void 0 || (_document$querySelect = _document$querySelect.value) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.toString()) || "";
  if (!jsText.trim()) {
    return "";
  }
  wikitext = luaAddText(wikitext, luaGetObjText(jsText), true);
  return wikitext;
};
var luaGetJSONwikitext = (inputStr) => {
  var _$body$find$val2;
  let wikitext = "";
  const $body = $("body");
  const JSONText = inputStr || ((_$body$find$val2 = $body.find("#wpTextbox1").val()) === null || _$body$find$val2 === void 0 ? void 0 : _$body$find$val2.toString()) || "";
  if (!JSONText.trim()) {
    return "";
  }
  try {
    const jsonData = JSON.parse(JSONText.toString());
    for (var _i = 0, _Object$keys = Object.keys(jsonData); _i < _Object$keys.length; _i++) {
      const key = _Object$keys[_i];
      const v = jsonData[key];
      if (new RegExp(wikiTextKey).test(key) && typeof v === "string") {
        wikitext = luaAddText(wikitext, v);
      }
      if (typeof v !== "string") {
        for (const prop in v) {
          if (!Object.hasOwn(v, prop)) {
            continue;
          }
          const testArrV = v[prop];
          if (new RegExp(wikiTextKey).test(prop) && typeof testArrV === "string") {
            wikitext = luaAddText(wikitext, testArrV);
          }
        }
      }
    }
  } catch {
    return "";
  }
  return wikitext;
};
var luaCheck = (inputStr, contentModel) => {
  const contentModelToLowerCase = (contentModel || mw.config.get("wgPageContentModel")).toString().toLowerCase();
  const inputStr_ = inputStr || "";
  switch (contentModelToLowerCase) {
    case "json":
      return luaGetJSONwikitext(inputStr_);
    case "js":
    case "javascript":
    case "text":
      return luaGetJSwikitext(inputStr_);
    case "css":
    case "sanitized-css":
      return luaGetCSSwikitext(inputStr_);
    default:
      return "";
  }
};
var previewTool = () => {
  const api = (0, import_ext_gadget.initMwApi)("SpecialWikitext/1.1");
  const $noticeAddText = "{{Special_wikitext/notice}}";
  const $noticeLoading = '<div id="mw-_addText-preview-loading"><div class="quotebox" style="margin:auto;padding:6px;width:50%;border:1px solid #aaa;background:#f9f9f9;font-size:88%"><div id="mw-_addText-preview-loading-content" style="background:#f9f9f9;color:#000;text-align:center;font-size:larger"><img src="https://tu.zhongwen.wiki/images/qiuwenbaike/zh/d/de/Ajax-loader.gif" decoding="async" data-file-width="32" data-file-height="32" width="32" height="32"> '.concat(window.wgULS("预览加载中", "預覽載入中"), "...</div></div></div>");
  const $noticeFail = '<img src="https://tu.zhongwen.wiki/images/qiuwenbaike/zh/thumb/8/8f/Alert_Mark_%28Orange%29.svg/48px-Alert_Mark_%28Orange%29.svg.png" decoding="async" data-file-width="48" data-file-height="48" width="32" height="32">'.concat(window.wgULS("预览加载失败", "預覽載入失败"));
  const $elementExist = (selectors) => {
    const selectorArray = Array.isArray(selectors) ? selectors : selectors ? [selectors] : [];
    let eleCount = 0;
    var _iterator = _createForOfIteratorHelper(selectorArray), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        const selector = _step.value;
        const $selector = $(selector);
        eleCount += $selector.length;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return eleCount > 0;
  };
  const checkMwConfig = (checkTarget, mwConfigs) => {
    let mwConfigData = mw.config.get(checkTarget);
    if (!mwConfigData || String(mwConfigData).trim() === "") {
      return false;
    }
    mwConfigData = String(mwConfigData).toLowerCase();
    const mwConfigArray = Array.isArray(mwConfigs) ? mwConfigs : mwConfigs ? [mwConfigs] : [];
    return mwConfigArray.includes(mwConfigData);
  };
  const getLanguage = () => {
    const lang = mw.config.get("wgUserLanguage");
    if (lang.includes("zh")) {
      return mw.config.get("wgUserVariant");
    }
    return lang;
  };
  const addParsedWikitext = (parsedWikitext) => {
    const $htmlObj = $(parsedWikitext);
    if ($elementExist("#mw-_addText-preview-loading")) {
      const $body = $("body");
      const $element = $body.find("#mw-_addText-preview-loading");
      $element.html(parsedWikitext);
      mw.hook("wikipage.content").fire($element);
    } else if ($elementExist(".diff-currentversion-title")) {
      $htmlObj.insertAfter(".diff-currentversion-title");
    } else if ($elementExist(".previewnote")) {
      $htmlObj.insertAfter(".previewnote");
    } else if ($elementExist(".mw-undelete-revision")) {
      $htmlObj.insertAfter(".mw-undelete-revision");
    } else if ($elementExist("#mw-content-text")) {
      $htmlObj.insertBefore("#mw-content-text");
    }
    mw.hook("wikipage.content").fire($htmlObj);
  };
  const setHtml = (selector, $htmlContent) => {
    if ($elementExist(selector)) {
      $(selector).html($htmlContent);
    }
  };
  const addLoadingNotice = () => {
    if ($noticeAddText && $noticeLoading) {
      addParsedWikitext($noticeLoading);
    }
  };
  const loadingFailNotice = () => {
    setHtml("#mw-_addText-preview-loading-content", $noticeFail);
  };
  const removeLoadingNotice = () => {
    setHtml("#mw-_addText-preview-loading", "");
  };
  const needPreview = () => {
    return document.documentElement.innerHTML.search("_addText") > -1;
  };
  const mwAddWikiText = /* @__PURE__ */ function() {
    var _ref = _asyncToGenerator(function* (wikiText, pagename, isPreview) {
      if (wikiText.toString().trim() === "") {
        removeLoadingNotice();
      } else {
        const params = {
          action: "parse",
          prop: "text",
          format: "json",
          formatversion: "2",
          // 避免内容重复
          title: pagename,
          contentmodel: "wikitext",
          text: wikiText,
          uselang: getLanguage(),
          useskin: mw.config.get("skin")
        };
        if (isPreview) {
          params.preview = true;
          params.disableeditsection = true;
        }
        try {
          const data = yield api.post(params);
          if (!data || !data["parse"] || !data["parse"].text) {
            return;
          }
          const parsedWiki = (data["parse"].text || "").toString().trim();
          if (parsedWiki === "") {
            removeLoadingNotice();
          } else {
            addParsedWikitext(parsedWiki);
          }
        } catch {
          loadingFailNotice();
        }
      }
    });
    return function mwAddWikiText2(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
  const mwAddLuaText = /* @__PURE__ */ function() {
    var _ref2 = _asyncToGenerator(function* (wikiText, pagename, isPreview, callBack) {
      const tempModuleName = "AddText/Temp/Module/Data.lua";
      const moduleCall = {
        wikitext: "#invoke:",
        // 分开来，避免被分到[[:Category:有脚本错误的页面]]
        pagename: "Module:"
      };
      if (wikiText.toString().trim() === "") {
        removeLoadingNotice();
      } else {
        try {
          const params = {
            action: "parse",
            prop: "text",
            format: "json",
            formatversion: "2",
            title: pagename,
            contentmodel: "wikitext",
            templatesandboxtitle: moduleCall.pagename + tempModuleName,
            // 产生临时Lua Module
            templatesandboxtext: "return{\n	main=function()\n		xpcall(function()\n			".concat(wikiText, `
		end,function()end)
		local moduleWikitext=package.loaded["Module:Module wikitext"]
		if moduleWikitext then
			local wikitext=moduleWikitext.main()
			if mw.text.trim(wikitext)~=''then
				return mw.getCurrentFrame():preprocess(moduleWikitext.main())
			end
		end
		return''
	end
}`),
            templatesandboxcontentmodel: "Scribunto",
            templatesandboxcontentformat: "text/plain",
            text: "{{".concat(moduleCall.wikitext).concat(tempModuleName, "|main}}"),
            uselang: getLanguage(),
            useskin: mw.config.get("skin")
          };
          if (isPreview) {
            params.preview = true;
            params.disableeditsection = true;
          }
          const data = yield api.post(params);
          if (!data || !data["parse"] || !data["parse"].text) {
            return;
          }
          const parsedWiki = (data["parse"].text || "").toString().trim();
          if (parsedWiki === "") {
            removeLoadingNotice();
          } else if ($(parsedWiki).find(".scribunto-error").text().search(tempModuleName) < 0) {
            if (callBack && typeof callBack === "function") {
              callBack(parsedWiki);
            } else {
              addParsedWikitext(parsedWiki);
            }
          } else {
            removeLoadingNotice();
          }
        } catch {
          loadingFailNotice();
        }
      }
    });
    return function mwAddLuaText2(_x4, _x5, _x6, _x7) {
      return _ref2.apply(this, arguments);
    };
  }();
  const mwApplyRevision = /* @__PURE__ */ function() {
    var _ref3 = _asyncToGenerator(function* (_revisionId, currentPageName) {
      try {
        const params = {
          // 本请求URL不太可能有长度超长的风险
          action: "parse",
          prop: "wikitext",
          format: "json",
          formatversion: "2",
          // get the original wikitext content of a page
          oldid: mw.config.get("wgRevisionId")
        };
        const data = yield api.get(params);
        if (!data || !data["parse"] || !data["parse"].wikitext) {
          return;
        }
        let pageContent = luaCheck((data["parse"].wikitext || "").toString().trim()) || "";
        pageContent = ($elementExist("#mw-clearyourcache") ? "{{#invoke:Special wikitext/Template|int|clearyourcache}}" : "") + pageContent.toString();
        if (pageContent.toString().trim() === "") {
          removeLoadingNotice();
        } else {
          void mwAddWikiText(pageContent, currentPageName, true);
        }
      } catch {
        removeLoadingNotice();
      }
    });
    return function mwApplyRevision2(_x8, _x9) {
      return _ref3.apply(this, arguments);
    };
  }();
  const mwApplyNotice = /* @__PURE__ */ function() {
    var _ref4 = _asyncToGenerator(function* (currentPageName, pageSubName) {
      try {
        const params = {
          action: "parse",
          prop: "text",
          format: "json",
          formatversion: "2",
          // get the original wikitext content of a page
          title: currentPageName + pageSubName,
          text: "{{#invoke:Special wikitext/Template|getNotices|".concat(currentPageName, "|").concat(pageSubName, "}}"),
          uselang: getLanguage(),
          useskin: mw.config.get("skin")
        };
        const data = yield api.post(params);
        if (!data || !data["parse"] || !data["parse"].text) {
          return;
        }
        const html = data["parse"].text;
        if ($(html.toString()).text().trim() !== "") {
          addParsedWikitext(html);
        }
      } catch {
      }
    });
    return function mwApplyNotice2(_x10, _x11) {
      return _ref4.apply(this, arguments);
    };
  }();
  const wikitextPreviewTestcase = /* @__PURE__ */ function() {
    var _ref5 = _asyncToGenerator(function* (isPreview) {
      if (!needPreview()) {
        return;
      }
      const $body = $("body");
      const $testcaseList = $body.find(".special-wikitext-preview-testcase");
      if ($testcaseList.length <= 0) {
        return;
      }
      const testcaseDataList = [];
      let i;
      for (i = 0; i < $testcaseList.length; ++i) {
        const testcaseItem = $testcaseList[i];
        if (!testcaseItem) {
          continue;
        }
        const codeIt = $(testcaseItem).find(".mw-highlight");
        if (!codeIt.length) {
          continue;
        }
        const [codeIt0] = codeIt;
        if (!codeIt0) {
          continue;
        }
        const codeItClass = $(codeIt0).attr("class");
        if (!codeItClass) {
          continue;
        }
        const [, codeId] = /mw-highlight-lang-(\S+)/.exec(codeItClass) || [];
        const loadIndex = testcaseDataList.length;
        $(testcaseItem).attr("preview-id", loadIndex);
        testcaseDataList.push({
          element: testcaseItem,
          lang: codeId || "",
          code: codeIt.text().toString()
        });
      }
      let packageWikitext = "";
      for (var _i2 = 0, _Object$entries = Object.entries(testcaseDataList); _i2 < _Object$entries.length; _i2++) {
        const [_key, testcaseItem] = _Object$entries[_i2];
        if (testcaseItem.code.trim() === "") {
          continue;
        }
        const itemElement = testcaseItem.element;
        if (["javascript", "js", "css", "json", "text"].includes(testcaseItem.lang.toLowerCase())) {
          const addWiki = luaCheck(testcaseItem.code, testcaseItem.lang);
          if (addWiki.toString().trim() !== "" && itemElement) {
            $(itemElement).prepend($noticeLoading);
            packageWikitext += '<div class="special-wikitext-preview-testcase-'.concat(i, '">\n').concat(addWiki, "\n</div>");
          }
        } else if (["lua", "scribunto"].includes(testcaseItem.lang.toLowerCase())) {
          void mwAddLuaText(testcaseItem.code, mw.config.get("wgPageName"), isPreview, /* @__PURE__ */ (() => {
            return (wikitext) => {
              if (itemElement) {
                $(itemElement).prepend(wikitext);
              }
            };
          })());
        }
      }
      if (packageWikitext.trim() !== "") {
        packageWikitext = '<div class="special-wikitext-preview-testcase-undefined">'.concat(packageWikitext, "</div>");
        try {
          const params = {
            action: "parse",
            prop: "text",
            contentmodel: "wikitext",
            text: packageWikitext,
            format: "json",
            formatversion: "2"
          };
          if (isPreview) {
            params.preview = true;
            params.disableeditsection = true;
          }
          const data = yield api.post(params);
          if (!data || !data["parse"] || !data["parse"].text) {
            return;
          }
          const parsedWiki = (data["parse"].text || "").toString().trim();
          if (parsedWiki !== "") {
            const $parsedElement = $(parsedWiki);
            for (var _i3 = 0, _Object$entries2 = Object.entries(testcaseDataList); _i3 < _Object$entries2.length; _i3++) {
              const [key, testcaseItem] = _Object$entries2[_i3];
              if (testcaseItem && ["javascript", "js", "text", "css", "json"].includes(testcaseItem.lang.toLowerCase())) {
                const checkParseElement = $parsedElement.find(".special-wikitext-preview-testcase-undefined > .special-wikitext-preview-testcase-".concat(key));
                if (checkParseElement.length) {
                  const $addTarget = $(testcaseItem.element).find("#mw-_addText-preview-loading");
                  $addTarget.html(checkParseElement.html());
                  mw.hook("wikipage.content").fire($addTarget);
                }
              }
            }
          }
        } catch {
        }
      }
    });
    return function wikitextPreviewTestcase2(_x12) {
      return _ref5.apply(this, arguments);
    };
  }();
  const mwAddPreview = () => {
    const currentPageName = mw.config.get("wgPageName");
    const $body = $("body");
    if (checkMwConfig("wgPageContentModel", ["javascript", "js", "json", "text", "css", "sanitized-css"])) {
      if ($elementExist(".previewnote")) {
        const $previewSelector = $body.find(".previewnote .warningbox > p > b a");
        if ($previewSelector.length > 0) {
          var _mw$util$getUrl$match, _mw$util$getUrl$match2;
          const pathPath = decodeURI($previewSelector.attr("href") || mw.util.getUrl(currentPageName)).replace(new RegExp("^\\/?".concat((_mw$util$getUrl$match = (_mw$util$getUrl$match2 = mw.util.getUrl("").match(/[a-z]+/)) === null || _mw$util$getUrl$match2 === void 0 ? void 0 : _mw$util$getUrl$match2[0]) !== null && _mw$util$getUrl$match !== void 0 ? _mw$util$getUrl$match : "", "\\/")), "");
          if (pathPath !== currentPageName) {
            return;
          }
        }
        const addWiki = luaCheck();
        if (addWiki.trim()) {
          addLoadingNotice();
          void mwAddWikiText(addWiki, currentPageName, true);
        }
      } else if (!$elementExist(".mw-_addText-content") && checkMwConfig("wgAction", "view")) {
        if (!needPreview()) {
          return;
        }
        if ($elementExist("#mw-clearyourcache")) {
          $body.find("#mw-clearyourcache").html("");
        }
        if (!$elementExist("#wpTextbox1")) {
          addLoadingNotice();
          void mwApplyRevision(mw.config.get("wgRevisionId"), currentPageName);
        }
      } else if ($elementExist("#mw-revision-info") && checkMwConfig("wgAction", "view")) {
        if (!$elementExist("#wpTextbox1")) {
          $body.find("#mw-clearyourcache").html($noticeLoading);
          void mwApplyRevision(mw.config.get("wgRevisionId"), currentPageName);
        }
      } else {
        removeLoadingNotice();
      }
    } else if (checkMwConfig("wgPageContentModel", ["scribunto", "lua"])) {
      if (!needPreview()) {
        return;
      }
      if ($elementExist("#wpTextbox1") && $elementExist("table.diff") && !$elementExist(".previewnote") && !checkMwConfig("wgAction", "view")) {
        $($noticeLoading).insertAfter("#wikiDiff");
        void mwAddLuaText(($body.find("#wpTextbox1").val() || "").toString(), currentPageName, true);
      }
    } else if ($elementExist(".mw-undelete-revision")) {
      if (!needPreview()) {
        return;
      }
      if ($elementExist([".mw-highlight", "pre", ".mw-json"])) {
        const $tryGetWiki = ($body.find("textarea").val() || "").toString();
        let tryAddWiki = luaGetJSONwikitext($tryGetWiki);
        if (tryAddWiki.trim() === "") {
          tryAddWiki = luaGetCSSwikitext($tryGetWiki);
        }
        if (tryAddWiki.trim() !== "") {
          addLoadingNotice();
          void mwAddWikiText(tryAddWiki, mw.config.get("wgRelevantPageName"), true);
        } else if (/module[ _]wikitext.*_addtext/i.test($body.find(".mw-parser-output").text())) {
        }
      }
    } else if (!$elementExist(".mw-editnotice") && checkMwConfig("wgCanonicalNamespace", "special")) {
      const pagename = mw.config.get("wgCanonicalSpecialPageName");
      const pageSubName = mw.config.get("wgPageName").replace(/special:[^/]+/i, "");
      if (pagename !== false && pagename !== null && pagename.toString().trim() !== "") {
        const fullpagename = "".concat(mw.config.get("wgCanonicalNamespace"), ":").concat(pagename);
        void mwApplyNotice(fullpagename, pageSubName);
      }
    } else {
      removeLoadingNotice();
    }
  };
  if (mw.config.get("wgIsSpecialWikitextPreview") !== true) {
    mw.config.set("wgIsSpecialWikitextPreview", true);
    mwAddPreview();
    void wikitextPreviewTestcase(true);
  }
};
$(previewTool);
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mYWlscy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Rlc2NyaXB0b3JzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1jYWxsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NsYXNzb2YtcmF3LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtY2FsbGFibGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nZXQtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXN5bWJvbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RyeS10by1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWNhbGxhYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1Zy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1uYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9tYXRoLXRydW5jLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtYXJyYXkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1zZXQtbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9lcy1ub3QtZXhjZWVkLXNhZmUtaW50ZWdlci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5wdXNoLmpzIiwgInNyYy9TcGVjaWFsV2lraXRleHQvU3BlY2lhbFdpa2l0ZXh0LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIndXNlIHN0cmljdCc7XG52YXIgY2hlY2sgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICYmIGl0Lk1hdGggPT09IE1hdGggJiYgaXQ7XG59O1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxubW9kdWxlLmV4cG9ydHMgPVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZ2xvYmFsLXRoaXMgLS0gc2FmZVxuICBjaGVjayh0eXBlb2YgZ2xvYmFsVGhpcyA9PSAnb2JqZWN0JyAmJiBnbG9iYWxUaGlzKSB8fFxuICBjaGVjayh0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdykgfHxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAtLSBzYWZlXG4gIGNoZWNrKHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYpIHx8XG4gIGNoZWNrKHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsKSB8fFxuICBjaGVjayh0eXBlb2YgdGhpcyA9PSAnb2JqZWN0JyAmJiB0aGlzKSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmMgLS0gZmFsbGJhY2tcbiAgKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pKCkgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBEZXRlY3QgSUU4J3MgaW5jb21wbGV0ZSBkZWZpbmVQcm9wZXJ0eSBpbXBsZW1lbnRhdGlvblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sIDEsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pWzFdICE9PSA3O1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWZ1bmN0aW9uLXByb3RvdHlwZS1iaW5kIC0tIHNhZmVcbiAgdmFyIHRlc3QgPSAoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9KS5iaW5kKCk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gdHlwZW9mIHRlc3QgIT0gJ2Z1bmN0aW9uJyB8fCB0ZXN0Lmhhc093blByb3BlcnR5KCdwcm90b3R5cGUnKTtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgY2FsbCA9IEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9CSU5EID8gY2FsbC5iaW5kKGNhbGwpIDogZnVuY3Rpb24gKCkge1xuICByZXR1cm4gY2FsbC5hcHBseShjYWxsLCBhcmd1bWVudHMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gTmFzaG9ybiB+IEpESzggYnVnXG52YXIgTkFTSE9STl9CVUcgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgJiYgISRwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHsgMTogMiB9LCAxKTtcblxuLy8gYE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGVgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QucHJvdG90eXBlLnByb3BlcnR5aXNlbnVtZXJhYmxlXG5leHBvcnRzLmYgPSBOQVNIT1JOX0JVRyA/IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKFYpIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGhpcywgVik7XG4gIHJldHVybiAhIWRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci5lbnVtZXJhYmxlO1xufSA6ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgY2FsbCA9IEZ1bmN0aW9uUHJvdG90eXBlLmNhbGw7XG52YXIgdW5jdXJyeVRoaXNXaXRoQmluZCA9IE5BVElWRV9CSU5EICYmIEZ1bmN0aW9uUHJvdG90eXBlLmJpbmQuYmluZChjYWxsLCBjYWxsKTtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfQklORCA/IHVuY3VycnlUaGlzV2l0aEJpbmQgOiBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY2FsbC5hcHBseShmbiwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG52YXIgdG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyh7fS50b1N0cmluZyk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBzdHJpbmdTbGljZSh0b1N0cmluZyhpdCksIDgsIC0xKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcbnZhciBzcGxpdCA9IHVuY3VycnlUaGlzKCcnLnNwbGl0KTtcblxuLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3Ncbm1vZHVsZS5leHBvcnRzID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyB0aHJvd3MgYW4gZXJyb3IgaW4gcmhpbm8sIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9yaGluby9pc3N1ZXMvMzQ2XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gISRPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKTtcbn0pID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjbGFzc29mKGl0KSA9PT0gJ1N0cmluZycgPyBzcGxpdChpdCwgJycpIDogJE9iamVjdChpdCk7XG59IDogJE9iamVjdDtcbiIsICIndXNlIHN0cmljdCc7XG4vLyB3ZSBjYW4ndCB1c2UganVzdCBgaXQgPT0gbnVsbGAgc2luY2Ugb2YgYGRvY3VtZW50LmFsbGAgc3BlY2lhbCBjYXNlXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLUlzSFRNTEREQS1pbnRlcm5hbC1zbG90LWFlY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID09PSBudWxsIHx8IGl0ID09PSB1bmRlZmluZWQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYFJlcXVpcmVPYmplY3RDb2VyY2libGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZXF1aXJlb2JqZWN0Y29lcmNpYmxlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXNOdWxsT3JVbmRlZmluZWQoaXQpKSB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJbmRleGVkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoaXQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1Jc0hUTUxEREEtaW50ZXJuYWwtc2xvdFxudmFyIGRvY3VtZW50QWxsID0gdHlwZW9mIGRvY3VtZW50ID09ICdvYmplY3QnICYmIGRvY3VtZW50LmFsbDtcblxuLy8gYElzQ2FsbGFibGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc2NhbGxhYmxlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9uby10eXBlb2YtdW5kZWZpbmVkIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBkb2N1bWVudEFsbCA9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudEFsbCAhPT0gdW5kZWZpbmVkID8gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJyB8fCBhcmd1bWVudCA9PT0gZG9jdW1lbnRBbGw7XG59IDogZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogaXNDYWxsYWJsZShpdCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgYUZ1bmN0aW9uID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBpc0NhbGxhYmxlKGFyZ3VtZW50KSA/IGFyZ3VtZW50IDogdW5kZWZpbmVkO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZXNwYWNlLCBtZXRob2QpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPCAyID8gYUZ1bmN0aW9uKGdsb2JhbFtuYW1lc3BhY2VdKSA6IGdsb2JhbFtuYW1lc3BhY2VdICYmIGdsb2JhbFtuYW1lc3BhY2VdW21ldGhvZF07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB1bmN1cnJ5VGhpcyh7fS5pc1Byb3RvdHlwZU9mKTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBuYXZpZ2F0b3IgIT0gJ3VuZGVmaW5lZCcgJiYgU3RyaW5nKG5hdmlnYXRvci51c2VyQWdlbnQpIHx8ICcnO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50Jyk7XG5cbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgRGVubyA9IGdsb2JhbC5EZW5vO1xudmFyIHZlcnNpb25zID0gcHJvY2VzcyAmJiBwcm9jZXNzLnZlcnNpb25zIHx8IERlbm8gJiYgRGVuby52ZXJzaW9uO1xudmFyIHY4ID0gdmVyc2lvbnMgJiYgdmVyc2lvbnMudjg7XG52YXIgbWF0Y2gsIHZlcnNpb247XG5cbmlmICh2OCkge1xuICBtYXRjaCA9IHY4LnNwbGl0KCcuJyk7XG4gIC8vIGluIG9sZCBDaHJvbWUsIHZlcnNpb25zIG9mIFY4IGlzbid0IFY4ID0gQ2hyb21lIC8gMTBcbiAgLy8gYnV0IHRoZWlyIGNvcnJlY3QgdmVyc2lvbnMgYXJlIG5vdCBpbnRlcmVzdGluZyBmb3IgdXNcbiAgdmVyc2lvbiA9IG1hdGNoWzBdID4gMCAmJiBtYXRjaFswXSA8IDQgPyAxIDogKyhtYXRjaFswXSArIG1hdGNoWzFdKTtcbn1cblxuLy8gQnJvd3NlckZTIE5vZGVKUyBgcHJvY2Vzc2AgcG9seWZpbGwgaW5jb3JyZWN0bHkgc2V0IGAudjhgIHRvIGAwLjBgXG4vLyBzbyBjaGVjayBgdXNlckFnZW50YCBldmVuIGlmIGAudjhgIGV4aXN0cywgYnV0IDBcbmlmICghdmVyc2lvbiAmJiB1c2VyQWdlbnQpIHtcbiAgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2goL0VkZ2VcXC8oXFxkKykvKTtcbiAgaWYgKCFtYXRjaCB8fCBtYXRjaFsxXSA+PSA3NCkge1xuICAgIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9DaHJvbWVcXC8oXFxkKykvKTtcbiAgICBpZiAobWF0Y2gpIHZlcnNpb24gPSArbWF0Y2hbMV07XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2ZXJzaW9uO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLXN5bWJvbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZyAqL1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24nKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcblxudmFyICRTdHJpbmcgPSBnbG9iYWwuU3RyaW5nO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5c3ltYm9scyAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xubW9kdWxlLmV4cG9ydHMgPSAhIU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN5bWJvbCA9IFN5bWJvbCgnc3ltYm9sIGRldGVjdGlvbicpO1xuICAvLyBDaHJvbWUgMzggU3ltYm9sIGhhcyBpbmNvcnJlY3QgdG9TdHJpbmcgY29udmVyc2lvblxuICAvLyBgZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzYCBwb2x5ZmlsbCBzeW1ib2xzIGNvbnZlcnRlZCB0byBvYmplY3QgYXJlIG5vdCBTeW1ib2wgaW5zdGFuY2VzXG4gIC8vIG5iOiBEbyBub3QgY2FsbCBgU3RyaW5nYCBkaXJlY3RseSB0byBhdm9pZCB0aGlzIGJlaW5nIG9wdGltaXplZCBvdXQgdG8gYHN5bWJvbCsnJ2Agd2hpY2ggd2lsbCxcbiAgLy8gb2YgY291cnNlLCBmYWlsLlxuICByZXR1cm4gISRTdHJpbmcoc3ltYm9sKSB8fCAhKE9iamVjdChzeW1ib2wpIGluc3RhbmNlb2YgU3ltYm9sKSB8fFxuICAgIC8vIENocm9tZSAzOC00MCBzeW1ib2xzIGFyZSBub3QgaW5oZXJpdGVkIGZyb20gRE9NIGNvbGxlY3Rpb25zIHByb3RvdHlwZXMgdG8gaW5zdGFuY2VzXG4gICAgIVN5bWJvbC5zaGFtICYmIFY4X1ZFUlNJT04gJiYgVjhfVkVSU0lPTiA8IDQxO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tc3ltYm9sIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zeW1ib2wtY29uc3RydWN0b3ItZGV0ZWN0aW9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX1NZTUJPTFxuICAmJiAhU3ltYm9sLnNoYW1cbiAgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mJyk7XG52YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbm1vZHVsZS5leHBvcnRzID0gVVNFX1NZTUJPTF9BU19VSUQgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyICRTeW1ib2wgPSBnZXRCdWlsdEluKCdTeW1ib2wnKTtcbiAgcmV0dXJuIGlzQ2FsbGFibGUoJFN5bWJvbCkgJiYgaXNQcm90b3R5cGVPZigkU3ltYm9sLnByb3RvdHlwZSwgJE9iamVjdChpdCkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJFN0cmluZyA9IFN0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gJFN0cmluZyhhcmd1bWVudCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuICdPYmplY3QnO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgdHJ5VG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdHJ5LXRvLXN0cmluZycpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYEFzc2VydDogSXNDYWxsYWJsZShhcmd1bWVudCkgaXMgdHJ1ZWBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIGlmIChpc0NhbGxhYmxlKGFyZ3VtZW50KSkgcmV0dXJuIGFyZ3VtZW50O1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcih0cnlUb1N0cmluZyhhcmd1bWVudCkgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkJyk7XG5cbi8vIGBHZXRNZXRob2RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1nZXRtZXRob2Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFYsIFApIHtcbiAgdmFyIGZ1bmMgPSBWW1BdO1xuICByZXR1cm4gaXNOdWxsT3JVbmRlZmluZWQoZnVuYykgPyB1bmRlZmluZWQgOiBhQ2FsbGFibGUoZnVuYyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgT3JkaW5hcnlUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9yZGluYXJ5dG9wcmltaXRpdmVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBwcmVmKSB7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAocHJlZiA9PT0gJ3N0cmluZycgJiYgaXNDYWxsYWJsZShmbiA9IGlucHV0LnRvU3RyaW5nKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKGlzQ2FsbGFibGUoZm4gPSBpbnB1dC52YWx1ZU9mKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHByZWYgIT09ICdzdHJpbmcnICYmIGlzQ2FsbGFibGUoZm4gPSBpbnB1dC50b1N0cmluZykgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHRyeSB7XG4gICAgZGVmaW5lUHJvcGVydHkoZ2xvYmFsLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGdsb2JhbFtrZXldID0gdmFsdWU7XG4gIH0gcmV0dXJuIHZhbHVlO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcblxudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgZGVmaW5lR2xvYmFsUHJvcGVydHkoU0hBUkVELCB7fSk7XG5cbm1vZHVsZS5leHBvcnRzID0gc3RvcmU7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xudmFyIHN0b3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHt9KTtcbn0pKCd2ZXJzaW9ucycsIFtdKS5wdXNoKHtcbiAgdmVyc2lvbjogJzMuMzUuMScsXG4gIG1vZGU6IElTX1BVUkUgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAxNC0yMDI0IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJyxcbiAgbGljZW5zZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2Jsb2IvdjMuMzUuMS9MSUNFTlNFJyxcbiAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMnXG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbi8vIGBUb09iamVjdGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvb2JqZWN0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gJE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcblxudmFyIGhhc093blByb3BlcnR5ID0gdW5jdXJyeVRoaXMoe30uaGFzT3duUHJvcGVydHkpO1xuXG4vLyBgSGFzT3duUHJvcGVydHlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1oYXNvd25wcm9wZXJ0eVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1oYXNvd24gLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuaGFzT3duIHx8IGZ1bmN0aW9uIGhhc093bihpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eSh0b09iamVjdChpdCksIGtleSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxudmFyIGlkID0gMDtcbnZhciBwb3N0Zml4ID0gTWF0aC5yYW5kb20oKTtcbnZhciB0b1N0cmluZyA9IHVuY3VycnlUaGlzKDEuMC50b1N0cmluZyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnICsgKGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXkpICsgJylfJyArIHRvU3RyaW5nKCsraWQgKyBwb3N0Zml4LCAzNik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3ltYm9sLWNvbnN0cnVjdG9yLWRldGVjdGlvbicpO1xudmFyIFVTRV9TWU1CT0xfQVNfVUlEID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkJyk7XG5cbnZhciBTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyIFdlbGxLbm93blN5bWJvbHNTdG9yZSA9IHNoYXJlZCgnd2tzJyk7XG52YXIgY3JlYXRlV2VsbEtub3duU3ltYm9sID0gVVNFX1NZTUJPTF9BU19VSUQgPyBTeW1ib2xbJ2ZvciddIHx8IFN5bWJvbCA6IFN5bWJvbCAmJiBTeW1ib2wud2l0aG91dFNldHRlciB8fCB1aWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgaWYgKCFoYXNPd24oV2VsbEtub3duU3ltYm9sc1N0b3JlLCBuYW1lKSkge1xuICAgIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXSA9IE5BVElWRV9TWU1CT0wgJiYgaGFzT3duKFN5bWJvbCwgbmFtZSlcbiAgICAgID8gU3ltYm9sW25hbWVdXG4gICAgICA6IGNyZWF0ZVdlbGxLbm93blN5bWJvbCgnU3ltYm9sLicgKyBuYW1lKTtcbiAgfSByZXR1cm4gV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciBvcmRpbmFyeVRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZScpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbnZhciBUT19QUklNSVRJVkUgPSB3ZWxsS25vd25TeW1ib2woJ3RvUHJpbWl0aXZlJyk7XG5cbi8vIGBUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJpbWl0aXZlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnB1dCwgcHJlZikge1xuICBpZiAoIWlzT2JqZWN0KGlucHV0KSB8fCBpc1N5bWJvbChpbnB1dCkpIHJldHVybiBpbnB1dDtcbiAgdmFyIGV4b3RpY1RvUHJpbSA9IGdldE1ldGhvZChpbnB1dCwgVE9fUFJJTUlUSVZFKTtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKGV4b3RpY1RvUHJpbSkge1xuICAgIGlmIChwcmVmID09PSB1bmRlZmluZWQpIHByZWYgPSAnZGVmYXVsdCc7XG4gICAgcmVzdWx0ID0gY2FsbChleG90aWNUb1ByaW0sIGlucHV0LCBwcmVmKTtcbiAgICBpZiAoIWlzT2JqZWN0KHJlc3VsdCkgfHwgaXNTeW1ib2wocmVzdWx0KSkgcmV0dXJuIHJlc3VsdDtcbiAgICB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbiAgfVxuICBpZiAocHJlZiA9PT0gdW5kZWZpbmVkKSBwcmVmID0gJ251bWJlcic7XG4gIHJldHVybiBvcmRpbmFyeVRvUHJpbWl0aXZlKGlucHV0LCBwcmVmKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xudmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXN5bWJvbCcpO1xuXG4vLyBgVG9Qcm9wZXJ0eUtleWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJvcGVydHlrZXlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBrZXkgPSB0b1ByaW1pdGl2ZShhcmd1bWVudCwgJ3N0cmluZycpO1xuICByZXR1cm4gaXNTeW1ib2woa2V5KSA/IGtleSA6IGtleSArICcnO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgZG9jdW1lbnQgPSBnbG9iYWwuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBFWElTVFMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBFWElTVFMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcblxuLy8gVGhhbmtzIHRvIElFOCBmb3IgaXRzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3JlYXRlRWxlbWVudCgnZGl2JyksICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfVxuICB9KS5hICE9PSA3O1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0luZGV4ZWRPYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhc093bihPLCBQKSkgcmV0dXJuIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcighY2FsbChwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZS5mLCBPLCBQKSwgT1tQXSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbi8vIFY4IH4gQ2hyb21lIDM2LVxuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzMzNFxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0sICdwcm90b3R5cGUnLCB7XG4gICAgdmFsdWU6IDQyLFxuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KS5wcm90b3R5cGUgIT09IDQyO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgJFN0cmluZyA9IFN0cmluZztcbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgQXNzZXJ0OiBUeXBlKGFyZ3VtZW50KSBpcyBPYmplY3RgXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoaXNPYmplY3QoYXJndW1lbnQpKSByZXR1cm4gYXJndW1lbnQ7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKCRTdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgYW4gb2JqZWN0Jyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG52YXIgVjhfUFJPVE9UWVBFX0RFRklORV9CVUcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdjgtcHJvdG90eXBlLWRlZmluZS1idWcnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleScpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBFTlVNRVJBQkxFID0gJ2VudW1lcmFibGUnO1xudmFyIENPTkZJR1VSQUJMRSA9ICdjb25maWd1cmFibGUnO1xudmFyIFdSSVRBQkxFID0gJ3dyaXRhYmxlJztcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0eWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0eVxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgPyBWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA/IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKHR5cGVvZiBPID09PSAnZnVuY3Rpb24nICYmIFAgPT09ICdwcm90b3R5cGUnICYmICd2YWx1ZScgaW4gQXR0cmlidXRlcyAmJiBXUklUQUJMRSBpbiBBdHRyaWJ1dGVzICYmICFBdHRyaWJ1dGVzW1dSSVRBQkxFXSkge1xuICAgIHZhciBjdXJyZW50ID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKTtcbiAgICBpZiAoY3VycmVudCAmJiBjdXJyZW50W1dSSVRBQkxFXSkge1xuICAgICAgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gICAgICBBdHRyaWJ1dGVzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IENPTkZJR1VSQUJMRSBpbiBBdHRyaWJ1dGVzID8gQXR0cmlidXRlc1tDT05GSUdVUkFCTEVdIDogY3VycmVudFtDT05GSUdVUkFCTEVdLFxuICAgICAgICBlbnVtZXJhYmxlOiBFTlVNRVJBQkxFIGluIEF0dHJpYnV0ZXMgPyBBdHRyaWJ1dGVzW0VOVU1FUkFCTEVdIDogY3VycmVudFtFTlVNRVJBQkxFXSxcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlXG4gICAgICB9O1xuICAgIH1cbiAgfSByZXR1cm4gJGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xufSA6ICRkZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiAkZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIGtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0RGVzY3JpcHRvciA9IERFU0NSSVBUT1JTICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbnZhciBFWElTVFMgPSBoYXNPd24oRnVuY3Rpb25Qcm90b3R5cGUsICduYW1lJyk7XG4vLyBhZGRpdGlvbmFsIHByb3RlY3Rpb24gZnJvbSBtaW5pZmllZCAvIG1hbmdsZWQgLyBkcm9wcGVkIGZ1bmN0aW9uIG5hbWVzXG52YXIgUFJPUEVSID0gRVhJU1RTICYmIChmdW5jdGlvbiBzb21ldGhpbmcoKSB7IC8qIGVtcHR5ICovIH0pLm5hbWUgPT09ICdzb21ldGhpbmcnO1xudmFyIENPTkZJR1VSQUJMRSA9IEVYSVNUUyAmJiAoIURFU0NSSVBUT1JTIHx8IChERVNDUklQVE9SUyAmJiBnZXREZXNjcmlwdG9yKEZ1bmN0aW9uUHJvdG90eXBlLCAnbmFtZScpLmNvbmZpZ3VyYWJsZSkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgRVhJU1RTOiBFWElTVFMsXG4gIFBST1BFUjogUFJPUEVSLFxuICBDT05GSUdVUkFCTEU6IENPTkZJR1VSQUJMRVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHN0b3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xuXG52YXIgZnVuY3Rpb25Ub1N0cmluZyA9IHVuY3VycnlUaGlzKEZ1bmN0aW9uLnRvU3RyaW5nKTtcblxuLy8gdGhpcyBoZWxwZXIgYnJva2VuIGluIGBjb3JlLWpzQDMuNC4xLTMuNC40YCwgc28gd2UgY2FuJ3QgdXNlIGBzaGFyZWRgIGhlbHBlclxuaWYgKCFpc0NhbGxhYmxlKHN0b3JlLmluc3BlY3RTb3VyY2UpKSB7XG4gIHN0b3JlLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb25Ub1N0cmluZyhpdCk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RvcmUuaW5zcGVjdFNvdXJjZTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIFdlYWtNYXAgPSBnbG9iYWwuV2Vha01hcDtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0NhbGxhYmxlKFdlYWtNYXApICYmIC9uYXRpdmUgY29kZS8udGVzdChTdHJpbmcoV2Vha01hcCkpO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xuXG52YXIga2V5cyA9IHNoYXJlZCgna2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIGtleXNba2V5XSB8fCAoa2V5c1trZXldID0gdWlkKGtleSkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfV0VBS19NQVAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2Vhay1tYXAtYmFzaWMtZGV0ZWN0aW9uJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcbnZhciBzaGFyZWRLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLWtleScpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcblxudmFyIE9CSkVDVF9BTFJFQURZX0lOSVRJQUxJWkVEID0gJ09iamVjdCBhbHJlYWR5IGluaXRpYWxpemVkJztcbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xudmFyIFdlYWtNYXAgPSBnbG9iYWwuV2Vha01hcDtcbnZhciBzZXQsIGdldCwgaGFzO1xuXG52YXIgZW5mb3JjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaGFzKGl0KSA/IGdldChpdCkgOiBzZXQoaXQsIHt9KTtcbn07XG5cbnZhciBnZXR0ZXJGb3IgPSBmdW5jdGlvbiAoVFlQRSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGl0KSB7XG4gICAgdmFyIHN0YXRlO1xuICAgIGlmICghaXNPYmplY3QoaXQpIHx8IChzdGF0ZSA9IGdldChpdCkpLnR5cGUgIT09IFRZUEUpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0luY29tcGF0aWJsZSByZWNlaXZlciwgJyArIFRZUEUgKyAnIHJlcXVpcmVkJyk7XG4gICAgfSByZXR1cm4gc3RhdGU7XG4gIH07XG59O1xuXG5pZiAoTkFUSVZFX1dFQUtfTUFQIHx8IHNoYXJlZC5zdGF0ZSkge1xuICB2YXIgc3RvcmUgPSBzaGFyZWQuc3RhdGUgfHwgKHNoYXJlZC5zdGF0ZSA9IG5ldyBXZWFrTWFwKCkpO1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1zZWxmLWFzc2lnbiAtLSBwcm90b3R5cGUgbWV0aG9kcyBwcm90ZWN0aW9uICovXG4gIHN0b3JlLmdldCA9IHN0b3JlLmdldDtcbiAgc3RvcmUuaGFzID0gc3RvcmUuaGFzO1xuICBzdG9yZS5zZXQgPSBzdG9yZS5zZXQ7XG4gIC8qIGVzbGludC1lbmFibGUgbm8tc2VsZi1hc3NpZ24gLS0gcHJvdG90eXBlIG1ldGhvZHMgcHJvdGVjdGlvbiAqL1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgaWYgKHN0b3JlLmhhcyhpdCkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIHN0b3JlLnNldChpdCwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHN0b3JlLmdldChpdCkgfHwge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBzdG9yZS5oYXMoaXQpO1xuICB9O1xufSBlbHNlIHtcbiAgdmFyIFNUQVRFID0gc2hhcmVkS2V5KCdzdGF0ZScpO1xuICBoaWRkZW5LZXlzW1NUQVRFXSA9IHRydWU7XG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICBpZiAoaGFzT3duKGl0LCBTVEFURSkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShpdCwgU1RBVEUsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBoYXNPd24oaXQsIFNUQVRFKSA/IGl0W1NUQVRFXSA6IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaGFzT3duKGl0LCBTVEFURSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldCxcbiAgZ2V0OiBnZXQsXG4gIGhhczogaGFzLFxuICBlbmZvcmNlOiBlbmZvcmNlLFxuICBnZXR0ZXJGb3I6IGdldHRlckZvclxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIENPTkZJR1VSQUJMRV9GVU5DVElPTl9OQU1FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLW5hbWUnKS5DT05GSUdVUkFCTEU7XG52YXIgaW5zcGVjdFNvdXJjZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnNwZWN0LXNvdXJjZScpO1xudmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUnKTtcblxudmFyIGVuZm9yY2VJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5lbmZvcmNlO1xudmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldDtcbnZhciAkU3RyaW5nID0gU3RyaW5nO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG52YXIgcmVwbGFjZSA9IHVuY3VycnlUaGlzKCcnLnJlcGxhY2UpO1xudmFyIGpvaW4gPSB1bmN1cnJ5VGhpcyhbXS5qb2luKTtcblxudmFyIENPTkZJR1VSQUJMRV9MRU5HVEggPSBERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHkoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9LCAnbGVuZ3RoJywgeyB2YWx1ZTogOCB9KS5sZW5ndGggIT09IDg7XG59KTtcblxudmFyIFRFTVBMQVRFID0gU3RyaW5nKFN0cmluZykuc3BsaXQoJ1N0cmluZycpO1xuXG52YXIgbWFrZUJ1aWx0SW4gPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSwgbmFtZSwgb3B0aW9ucykge1xuICBpZiAoc3RyaW5nU2xpY2UoJFN0cmluZyhuYW1lKSwgMCwgNykgPT09ICdTeW1ib2woJykge1xuICAgIG5hbWUgPSAnWycgKyByZXBsYWNlKCRTdHJpbmcobmFtZSksIC9eU3ltYm9sXFwoKFteKV0qKVxcKS4qJC8sICckMScpICsgJ10nO1xuICB9XG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZ2V0dGVyKSBuYW1lID0gJ2dldCAnICsgbmFtZTtcbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5zZXR0ZXIpIG5hbWUgPSAnc2V0ICcgKyBuYW1lO1xuICBpZiAoIWhhc093bih2YWx1ZSwgJ25hbWUnKSB8fCAoQ09ORklHVVJBQkxFX0ZVTkNUSU9OX05BTUUgJiYgdmFsdWUubmFtZSAhPT0gbmFtZSkpIHtcbiAgICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5KHZhbHVlLCAnbmFtZScsIHsgdmFsdWU6IG5hbWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KTtcbiAgICBlbHNlIHZhbHVlLm5hbWUgPSBuYW1lO1xuICB9XG4gIGlmIChDT05GSUdVUkFCTEVfTEVOR1RIICYmIG9wdGlvbnMgJiYgaGFzT3duKG9wdGlvbnMsICdhcml0eScpICYmIHZhbHVlLmxlbmd0aCAhPT0gb3B0aW9ucy5hcml0eSkge1xuICAgIGRlZmluZVByb3BlcnR5KHZhbHVlLCAnbGVuZ3RoJywgeyB2YWx1ZTogb3B0aW9ucy5hcml0eSB9KTtcbiAgfVxuICB0cnkge1xuICAgIGlmIChvcHRpb25zICYmIGhhc093bihvcHRpb25zLCAnY29uc3RydWN0b3InKSAmJiBvcHRpb25zLmNvbnN0cnVjdG9yKSB7XG4gICAgICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5KHZhbHVlLCAncHJvdG90eXBlJywgeyB3cml0YWJsZTogZmFsc2UgfSk7XG4gICAgLy8gaW4gVjggfiBDaHJvbWUgNTMsIHByb3RvdHlwZXMgb2Ygc29tZSBtZXRob2RzLCBsaWtlIGBBcnJheS5wcm90b3R5cGUudmFsdWVzYCwgYXJlIG5vbi13cml0YWJsZVxuICAgIH0gZWxzZSBpZiAodmFsdWUucHJvdG90eXBlKSB2YWx1ZS5wcm90b3R5cGUgPSB1bmRlZmluZWQ7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgdmFyIHN0YXRlID0gZW5mb3JjZUludGVybmFsU3RhdGUodmFsdWUpO1xuICBpZiAoIWhhc093bihzdGF0ZSwgJ3NvdXJjZScpKSB7XG4gICAgc3RhdGUuc291cmNlID0gam9pbihURU1QTEFURSwgdHlwZW9mIG5hbWUgPT0gJ3N0cmluZycgPyBuYW1lIDogJycpO1xuICB9IHJldHVybiB2YWx1ZTtcbn07XG5cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWV4dGVuZC1uYXRpdmUgLS0gcmVxdWlyZWRcbkZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZyA9IG1ha2VCdWlsdEluKGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gaXNDYWxsYWJsZSh0aGlzKSAmJiBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpLnNvdXJjZSB8fCBpbnNwZWN0U291cmNlKHRoaXMpO1xufSwgJ3RvU3RyaW5nJyk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgbWFrZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWFrZS1idWlsdC1pbicpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywga2V5LCB2YWx1ZSwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcbiAgdmFyIHNpbXBsZSA9IG9wdGlvbnMuZW51bWVyYWJsZTtcbiAgdmFyIG5hbWUgPSBvcHRpb25zLm5hbWUgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubmFtZSA6IGtleTtcbiAgaWYgKGlzQ2FsbGFibGUodmFsdWUpKSBtYWtlQnVpbHRJbih2YWx1ZSwgbmFtZSwgb3B0aW9ucyk7XG4gIGlmIChvcHRpb25zLmdsb2JhbCkge1xuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2UgZGVmaW5lR2xvYmFsUHJvcGVydHkoa2V5LCB2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghb3B0aW9ucy51bnNhZmUpIGRlbGV0ZSBPW2tleV07XG4gICAgICBlbHNlIGlmIChPW2tleV0pIHNpbXBsZSA9IHRydWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2UgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihPLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiAhb3B0aW9ucy5ub25Db25maWd1cmFibGUsXG4gICAgICB3cml0YWJsZTogIW9wdGlvbnMubm9uV3JpdGFibGVcbiAgICB9KTtcbiAgfSByZXR1cm4gTztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuXG4vLyBgTWF0aC50cnVuY2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW1hdGgudHJ1bmNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1tYXRoLXRydW5jIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gTWF0aC50cnVuYyB8fCBmdW5jdGlvbiB0cnVuYyh4KSB7XG4gIHZhciBuID0gK3g7XG4gIHJldHVybiAobiA+IDAgPyBmbG9vciA6IGNlaWwpKG4pO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdHJ1bmMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWF0aC10cnVuYycpO1xuXG4vLyBgVG9JbnRlZ2VyT3JJbmZpbml0eWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvaW50ZWdlcm9yaW5maW5pdHlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBudW1iZXIgPSArYXJndW1lbnQ7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gIHJldHVybiBudW1iZXIgIT09IG51bWJlciB8fCBudW1iZXIgPT09IDAgPyAwIDogdHJ1bmMobnVtYmVyKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xuXG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5cbi8vIEhlbHBlciBmb3IgYSBwb3B1bGFyIHJlcGVhdGluZyBjYXNlIG9mIHRoZSBzcGVjOlxuLy8gTGV0IGludGVnZXIgYmUgPyBUb0ludGVnZXIoaW5kZXgpLlxuLy8gSWYgaW50ZWdlciA8IDAsIGxldCByZXN1bHQgYmUgbWF4KChsZW5ndGggKyBpbnRlZ2VyKSwgMCk7IGVsc2UgbGV0IHJlc3VsdCBiZSBtaW4oaW50ZWdlciwgbGVuZ3RoKS5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgdmFyIGludGVnZXIgPSB0b0ludGVnZXJPckluZmluaXR5KGluZGV4KTtcbiAgcmV0dXJuIGludGVnZXIgPCAwID8gbWF4KGludGVnZXIgKyBsZW5ndGgsIDApIDogbWluKGludGVnZXIsIGxlbmd0aCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHknKTtcblxudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBgVG9MZW5ndGhgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b2xlbmd0aFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIGxlbiA9IHRvSW50ZWdlck9ySW5maW5pdHkoYXJndW1lbnQpO1xuICByZXR1cm4gbGVuID4gMCA/IG1pbihsZW4sIDB4MUZGRkZGRkZGRkZGRkYpIDogMDsgLy8gMiAqKiA1MyAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG5cbi8vIGBMZW5ndGhPZkFycmF5TGlrZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWxlbmd0aG9mYXJyYXlsaWtlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHRvTGVuZ3RoKG9iai5sZW5ndGgpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS57IGluZGV4T2YsIGluY2x1ZGVzIH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gbGVuZ3RoT2ZBcnJheUxpa2UoTyk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9PSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICAgICAgaWYgKHZhbHVlICE9PSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgaWYgKChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSAmJiBPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcbiAgaW5jbHVkZXM6IGNyZWF0ZU1ldGhvZCh0cnVlKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5pbmRleE9mYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5kZXhvZlxuICBpbmRleE9mOiBjcmVhdGVNZXRob2QoZmFsc2UpXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIGluZGV4T2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMnKS5pbmRleE9mO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcblxudmFyIHB1c2ggPSB1bmN1cnJ5VGhpcyhbXS5wdXNoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgIWhhc093bihoaWRkZW5LZXlzLCBrZXkpICYmIGhhc093bihPLCBrZXkpICYmIHB1c2gocmVzdWx0LCBrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzT3duKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHB1c2gocmVzdWx0LCBrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIElFOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSBbXG4gICdjb25zdHJ1Y3RvcicsXG4gICdoYXNPd25Qcm9wZXJ0eScsXG4gICdpc1Byb3RvdHlwZU9mJyxcbiAgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJyxcbiAgJ3RvTG9jYWxlU3RyaW5nJyxcbiAgJ3RvU3RyaW5nJyxcbiAgJ3ZhbHVlT2YnXG5dO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpbnRlcm5hbE9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG5cbnZhciBoaWRkZW5LZXlzID0gZW51bUJ1Z0tleXMuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eW5hbWVzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5bmFtZXMgLS0gc2FmZVxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHJldHVybiBpbnRlcm5hbE9iamVjdEtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlzeW1ib2xzIC0tIHNhZmVcbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcycpO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG5cbnZhciBjb25jYXQgPSB1bmN1cnJ5VGhpcyhbXS5jb25jYXQpO1xuXG4vLyBhbGwgb2JqZWN0IGtleXMsIGluY2x1ZGVzIG5vbi1lbnVtZXJhYmxlIGFuZCBzeW1ib2xzXG5tb2R1bGUuZXhwb3J0cyA9IGdldEJ1aWx0SW4oJ1JlZmxlY3QnLCAnb3duS2V5cycpIHx8IGZ1bmN0aW9uIG93bktleXMoaXQpIHtcbiAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlLmYoYW5PYmplY3QoaXQpKTtcbiAgdmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZS5mO1xuICByZXR1cm4gZ2V0T3duUHJvcGVydHlTeW1ib2xzID8gY29uY2F0KGtleXMsIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkpIDoga2V5cztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgb3duS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vd24ta2V5cycpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSwgZXhjZXB0aW9ucykge1xuICB2YXIga2V5cyA9IG93bktleXMoc291cmNlKTtcbiAgdmFyIGRlZmluZVByb3BlcnR5ID0gZGVmaW5lUHJvcGVydHlNb2R1bGUuZjtcbiAgdmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZS5mO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICBpZiAoIWhhc093bih0YXJnZXQsIGtleSkgJiYgIShleGNlcHRpb25zICYmIGhhc093bihleGNlcHRpb25zLCBrZXkpKSkge1xuICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgIH1cbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbnZhciByZXBsYWNlbWVudCA9IC8jfFxcLnByb3RvdHlwZVxcLi87XG5cbnZhciBpc0ZvcmNlZCA9IGZ1bmN0aW9uIChmZWF0dXJlLCBkZXRlY3Rpb24pIHtcbiAgdmFyIHZhbHVlID0gZGF0YVtub3JtYWxpemUoZmVhdHVyZSldO1xuICByZXR1cm4gdmFsdWUgPT09IFBPTFlGSUxMID8gdHJ1ZVxuICAgIDogdmFsdWUgPT09IE5BVElWRSA/IGZhbHNlXG4gICAgOiBpc0NhbGxhYmxlKGRldGVjdGlvbikgPyBmYWlscyhkZXRlY3Rpb24pXG4gICAgOiAhIWRldGVjdGlvbjtcbn07XG5cbnZhciBub3JtYWxpemUgPSBpc0ZvcmNlZC5ub3JtYWxpemUgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gIHJldHVybiBTdHJpbmcoc3RyaW5nKS5yZXBsYWNlKHJlcGxhY2VtZW50LCAnLicpLnRvTG93ZXJDYXNlKCk7XG59O1xuXG52YXIgZGF0YSA9IGlzRm9yY2VkLmRhdGEgPSB7fTtcbnZhciBOQVRJVkUgPSBpc0ZvcmNlZC5OQVRJVkUgPSAnTic7XG52YXIgUE9MWUZJTEwgPSBpc0ZvcmNlZC5QT0xZRklMTCA9ICdQJztcblxubW9kdWxlLmV4cG9ydHMgPSBpc0ZvcmNlZDtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJykuZjtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgZGVmaW5lQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4nKTtcbnZhciBkZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5Jyk7XG52YXIgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jb3B5LWNvbnN0cnVjdG9yLXByb3BlcnRpZXMnKTtcbnZhciBpc0ZvcmNlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1mb3JjZWQnKTtcblxuLypcbiAgb3B0aW9ucy50YXJnZXQgICAgICAgICAtIG5hbWUgb2YgdGhlIHRhcmdldCBvYmplY3RcbiAgb3B0aW9ucy5nbG9iYWwgICAgICAgICAtIHRhcmdldCBpcyB0aGUgZ2xvYmFsIG9iamVjdFxuICBvcHRpb25zLnN0YXQgICAgICAgICAgIC0gZXhwb3J0IGFzIHN0YXRpYyBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnByb3RvICAgICAgICAgIC0gZXhwb3J0IGFzIHByb3RvdHlwZSBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnJlYWwgICAgICAgICAgIC0gcmVhbCBwcm90b3R5cGUgbWV0aG9kIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy5mb3JjZWQgICAgICAgICAtIGV4cG9ydCBldmVuIGlmIHRoZSBuYXRpdmUgZmVhdHVyZSBpcyBhdmFpbGFibGVcbiAgb3B0aW9ucy5iaW5kICAgICAgICAgICAtIGJpbmQgbWV0aG9kcyB0byB0aGUgdGFyZ2V0LCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMud3JhcCAgICAgICAgICAgLSB3cmFwIGNvbnN0cnVjdG9ycyB0byBwcmV2ZW50aW5nIGdsb2JhbCBwb2xsdXRpb24sIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy51bnNhZmUgICAgICAgICAtIHVzZSB0aGUgc2ltcGxlIGFzc2lnbm1lbnQgb2YgcHJvcGVydHkgaW5zdGVhZCBvZiBkZWxldGUgKyBkZWZpbmVQcm9wZXJ0eVxuICBvcHRpb25zLnNoYW0gICAgICAgICAgIC0gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuICBvcHRpb25zLmVudW1lcmFibGUgICAgIC0gZXhwb3J0IGFzIGVudW1lcmFibGUgcHJvcGVydHlcbiAgb3B0aW9ucy5kb250Q2FsbEdldFNldCAtIHByZXZlbnQgY2FsbGluZyBhIGdldHRlciBvbiB0YXJnZXRcbiAgb3B0aW9ucy5uYW1lICAgICAgICAgICAtIHRoZSAubmFtZSBvZiB0aGUgZnVuY3Rpb24gaWYgaXQgZG9lcyBub3QgbWF0Y2ggdGhlIGtleVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9wdGlvbnMsIHNvdXJjZSkge1xuICB2YXIgVEFSR0VUID0gb3B0aW9ucy50YXJnZXQ7XG4gIHZhciBHTE9CQUwgPSBvcHRpb25zLmdsb2JhbDtcbiAgdmFyIFNUQVRJQyA9IG9wdGlvbnMuc3RhdDtcbiAgdmFyIEZPUkNFRCwgdGFyZ2V0LCBrZXksIHRhcmdldFByb3BlcnR5LCBzb3VyY2VQcm9wZXJ0eSwgZGVzY3JpcHRvcjtcbiAgaWYgKEdMT0JBTCkge1xuICAgIHRhcmdldCA9IGdsb2JhbDtcbiAgfSBlbHNlIGlmIChTVEFUSUMpIHtcbiAgICB0YXJnZXQgPSBnbG9iYWxbVEFSR0VUXSB8fCBkZWZpbmVHbG9iYWxQcm9wZXJ0eShUQVJHRVQsIHt9KTtcbiAgfSBlbHNlIHtcbiAgICB0YXJnZXQgPSBnbG9iYWxbVEFSR0VUXSAmJiBnbG9iYWxbVEFSR0VUXS5wcm90b3R5cGU7XG4gIH1cbiAgaWYgKHRhcmdldCkgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgc291cmNlUHJvcGVydHkgPSBzb3VyY2Vba2V5XTtcbiAgICBpZiAob3B0aW9ucy5kb250Q2FsbEdldFNldCkge1xuICAgICAgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSk7XG4gICAgICB0YXJnZXRQcm9wZXJ0eSA9IGRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci52YWx1ZTtcbiAgICB9IGVsc2UgdGFyZ2V0UHJvcGVydHkgPSB0YXJnZXRba2V5XTtcbiAgICBGT1JDRUQgPSBpc0ZvcmNlZChHTE9CQUwgPyBrZXkgOiBUQVJHRVQgKyAoU1RBVElDID8gJy4nIDogJyMnKSArIGtleSwgb3B0aW9ucy5mb3JjZWQpO1xuICAgIC8vIGNvbnRhaW5lZCBpbiB0YXJnZXRcbiAgICBpZiAoIUZPUkNFRCAmJiB0YXJnZXRQcm9wZXJ0eSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodHlwZW9mIHNvdXJjZVByb3BlcnR5ID09IHR5cGVvZiB0YXJnZXRQcm9wZXJ0eSkgY29udGludWU7XG4gICAgICBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzKHNvdXJjZVByb3BlcnR5LCB0YXJnZXRQcm9wZXJ0eSk7XG4gICAgfVxuICAgIC8vIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgICBpZiAob3B0aW9ucy5zaGFtIHx8ICh0YXJnZXRQcm9wZXJ0eSAmJiB0YXJnZXRQcm9wZXJ0eS5zaGFtKSkge1xuICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KHNvdXJjZVByb3BlcnR5LCAnc2hhbScsIHRydWUpO1xuICAgIH1cbiAgICBkZWZpbmVCdWlsdEluKHRhcmdldCwga2V5LCBzb3VyY2VQcm9wZXJ0eSwgb3B0aW9ucyk7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcblxuLy8gYElzQXJyYXlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc2FycmF5XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktaXNhcnJheSAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmd1bWVudCkge1xuICByZXR1cm4gY2xhc3NvZihhcmd1bWVudCkgPT09ICdBcnJheSc7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gU2FmYXJpIDwgMTMgZG9lcyBub3QgdGhyb3cgYW4gZXJyb3IgaW4gdGhpcyBjYXNlXG52YXIgU0lMRU5UX09OX05PTl9XUklUQUJMRV9MRU5HVEhfU0VUID0gREVTQ1JJUFRPUlMgJiYgIWZ1bmN0aW9uICgpIHtcbiAgLy8gbWFrZXMgbm8gc2Vuc2Ugd2l0aG91dCBwcm9wZXIgc3RyaWN0IG1vZGUgc3VwcG9ydFxuICBpZiAodGhpcyAhPT0gdW5kZWZpbmVkKSByZXR1cm4gdHJ1ZTtcbiAgdHJ5IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoW10sICdsZW5ndGgnLCB7IHdyaXRhYmxlOiBmYWxzZSB9KS5sZW5ndGggPSAxO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBlcnJvciBpbnN0YW5jZW9mIFR5cGVFcnJvcjtcbiAgfVxufSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNJTEVOVF9PTl9OT05fV1JJVEFCTEVfTEVOR1RIX1NFVCA/IGZ1bmN0aW9uIChPLCBsZW5ndGgpIHtcbiAgaWYgKGlzQXJyYXkoTykgJiYgIWdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCAnbGVuZ3RoJykud3JpdGFibGUpIHtcbiAgICB0aHJvdyBuZXcgJFR5cGVFcnJvcignQ2Fubm90IHNldCByZWFkIG9ubHkgLmxlbmd0aCcpO1xuICB9IHJldHVybiBPLmxlbmd0aCA9IGxlbmd0aDtcbn0gOiBmdW5jdGlvbiAoTywgbGVuZ3RoKSB7XG4gIHJldHVybiBPLmxlbmd0aCA9IGxlbmd0aDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDB4MUZGRkZGRkZGRkZGRkY7IC8vIDIgKiogNTMgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID4gTUFYX1NBRkVfSU5URUdFUikgdGhyb3cgJFR5cGVFcnJvcignTWF4aW11bSBhbGxvd2VkIGluZGV4IGV4Y2VlZGVkJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcbnZhciBzZXRBcnJheUxlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zZXQtbGVuZ3RoJyk7XG52YXIgZG9lc05vdEV4Y2VlZFNhZmVJbnRlZ2VyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvZXMtbm90LWV4Y2VlZC1zYWZlLWludGVnZXInKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG52YXIgSU5DT1JSRUNUX1RPX0xFTkdUSCA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIFtdLnB1c2guY2FsbCh7IGxlbmd0aDogMHgxMDAwMDAwMDAgfSwgMSkgIT09IDQyOTQ5NjcyOTc7XG59KTtcblxuLy8gVjggPD0gMTIxIGFuZCBTYWZhcmkgPD0gMTUuNDsgRkYgPCAyMyB0aHJvd3MgSW50ZXJuYWxFcnJvclxuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MTI2ODFcbnZhciBwcm9wZXJFcnJvck9uTm9uV3JpdGFibGVMZW5ndGggPSBmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFtdLCAnbGVuZ3RoJywgeyB3cml0YWJsZTogZmFsc2UgfSkucHVzaCgpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBlcnJvciBpbnN0YW5jZW9mIFR5cGVFcnJvcjtcbiAgfVxufTtcblxudmFyIEZPUkNFRCA9IElOQ09SUkVDVF9UT19MRU5HVEggfHwgIXByb3BlckVycm9yT25Ob25Xcml0YWJsZUxlbmd0aCgpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnB1c2hgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUucHVzaFxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGFyaXR5OiAxLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFycyAtLSByZXF1aXJlZCBmb3IgYC5sZW5ndGhgXG4gIHB1c2g6IGZ1bmN0aW9uIHB1c2goaXRlbSkge1xuICAgIHZhciBPID0gdG9PYmplY3QodGhpcyk7XG4gICAgdmFyIGxlbiA9IGxlbmd0aE9mQXJyYXlMaWtlKE8pO1xuICAgIHZhciBhcmdDb3VudCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgZG9lc05vdEV4Y2VlZFNhZmVJbnRlZ2VyKGxlbiArIGFyZ0NvdW50KTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ0NvdW50OyBpKyspIHtcbiAgICAgIE9bbGVuXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgIGxlbisrO1xuICAgIH1cbiAgICBzZXRBcnJheUxlbmd0aChPLCBsZW4pO1xuICAgIHJldHVybiBsZW47XG4gIH1cbn0pO1xuIiwgImltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG4vKiDot59bW01vZHVsZTpTcGVjaWFsIHdpa2l0ZXh0XV3kv53mjIHkuIDoh7TnmoTmrrXokL3jgIIgKi9cbmNvbnN0IHdpa2lUZXh0S2V5OiBzdHJpbmcgPSAnX2FkZFRleHQnO1xuXG4vLyDlkIjlubblpJrkuKp3aWtpdGV4dOWtl+espuS4su+8jOW5tuS7peaNouihjOWIhumalFxuY29uc3QgbHVhQWRkVGV4dCA9IChpbnB1dFN0cjogc3RyaW5nLCBuZXdTdHI6IHN0cmluZywgX2VzY2FwZT86IGJvb2xlYW4pOiBzdHJpbmcgPT4ge1xuXHRsZXQgaW5wdXRTdHJpbmc6IHN0cmluZyA9IGlucHV0U3RyO1xuXHRpZiAobmV3U3RyKSB7XG5cdFx0aWYgKGlucHV0U3RyaW5nICE9PSAnJykge1xuXHRcdFx0aW5wdXRTdHJpbmcgKz0gJ1xcbic7XG5cdFx0fVxuXHRcdGxldCB0ZXh0OiBzdHJpbmcgPSBuZXdTdHI7XG5cdFx0aWYgKF9lc2NhcGUpIHtcblx0XHRcdGNvbnN0IFtlc2NhcGVTdHJdID0gSlNPTi5wYXJzZShcblx0XHRcdFx0YFske0pTT04uc3RyaW5naWZ5KFxuXHRcdFx0XHRcdC8vIEx1YeS4jeaUr+aMgVxcdeOAgVxceOeahOi3s+iEseespuWPt++8m+aOkumZpOebuOWFs+i9rOaNolxuXHRcdFx0XHRcdG5ld1N0ci50b1N0cmluZygpLnJlcGxhY2UoL1xcXFwoW3V4XSkvZ2ksICckMScpXG5cdFx0XHRcdCkucmVwbGFjZSgvXFxcXFxcXFwvZywgJ1xcXFwnKX1dYFxuXHRcdFx0KTtcblx0XHRcdHRleHQgPSBlc2NhcGVTdHI7XG5cdFx0fVxuXHRcdGlucHV0U3RyaW5nICs9IHRleHQ7XG5cdH1cblx0cmV0dXJuIGlucHV0U3RyaW5nO1xufTtcblxuLy8g6K+75Y+Wd2lraXRleHTlrZfnrKbkuLLvvIzlubblv73nlaXms6jph4rlsL7pg6hcbmNvbnN0IGx1YUdldFN0cmluZyA9IChzdHI6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdGNvbnN0IHRlc3RTdHJBcnJheTogUmVnRXhwRXhlY0FycmF5IHwgbnVsbCA9IC9bXlxcbl0qXFwqXFwvLy5leGVjKHN0cik7XG5cdGxldCB0ZXN0U3RyOiBzdHJpbmc7XG5cdGlmICh0ZXN0U3RyQXJyYXkpIHtcblx0XHR0ZXN0U3RyID0gdGVzdFN0ckFycmF5WzBdIHx8ICcnO1xuXHRcdHRlc3RTdHIgPSB0ZXN0U3RyLnNsaWNlKDAsIE1hdGgubWF4KDAsIHRlc3RTdHIubGVuZ3RoIC0gMikpO1xuXHR9IGVsc2Uge1xuXHRcdHRlc3RTdHIgPSBzdHI7XG5cdH1cblx0Y29uc3QgdHJpbUNoZWNrOiBzdHJpbmcgPSB0ZXN0U3RyLnRyaW0oKTtcblx0Y29uc3QgZmlyc3RDaGFyOiBzdHJpbmcgPSB0cmltQ2hlY2suY2hhckF0KDApO1xuXHRpZiAoZmlyc3RDaGFyID09PSB0cmltQ2hlY2suYXQoLTEpICYmIChmaXJzdENoYXIgPT09IFwiJ1wiIHx8IGZpcnN0Q2hhciA9PT0gJ1wiJykpIHtcblx0XHRyZXR1cm4gdHJpbUNoZWNrLnNsaWNlKDEsIDEgKyB0cmltQ2hlY2subGVuZ3RoIC0gMik7XG5cdH1cblx0cmV0dXJuIHRlc3RTdHI7XG59O1xuXG4vLyDor7vlj5ZDU1PkuYtg77y/YWRkVGV4dCAgeyBjb250ZW5077yaXCJYWFhcIiB9YOaooeW8j+eahOWtl+espuS4slxuY29uc3QgbHVhR2V0Q29udGVudFRleHQgPSAoc3RyOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRsZXQgd2lraXRleHQ6IHN0cmluZyA9ICcnO1xuXHR0cnkge1xuXHRcdHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoYCR7d2lraVRleHRLZXl9XFxcXHMqXFxcXHtbXmNcXFxcfV0qY29udGVudFxcXFxzKjpcXFxccypbXlxcbl0qYCwgJ2cnKSwgKHRleHQ6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdFx0XHRjb25zdCB0ZW1wVGV4dCA9ICgvY29udGVudFxccyo6XFxzKlteXFxuXSovLmV4ZWModGV4dCkgfHwgWydjb250ZW50OiddKVswXVxuXHRcdFx0XHQucmVwbGFjZSgvXltcXHM7fV0rfFtcXHM7fV0rJC9nLCAnJylcblx0XHRcdFx0LnJlcGxhY2UoL1xccypjb250ZW50XFxzKjpcXHMqLywgJycpO1xuXHRcdFx0aWYgKHdpa2l0ZXh0ICE9PSAnJykge1xuXHRcdFx0XHR3aWtpdGV4dCArPSAnXFxuJztcblx0XHRcdH1cblx0XHRcdHdpa2l0ZXh0ICs9IGx1YUdldFN0cmluZyh0ZW1wVGV4dCk7XG5cdFx0XHRyZXR1cm4gdGV4dDtcblx0XHR9KTtcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cdHJldHVybiB3aWtpdGV4dDtcbn07XG5cbi8vIOivu+WPluWvueixoeWumuS5ieaooeW8j+S4umDvvL9hZGRUZXh077ydWFhYYOaIlmDvvL9hZGRUZXh077yaWFhYYOaooeW8j+eahOWtl+espuS4siAo5rOo6YeK5Lul5YWo6KeS5a2X56ym5Luj5pu/77yM6YG/5YWN6KKr5oqT5Y+WKVxuY29uc3QgbHVhR2V0T2JqVGV4dCA9IChzdHI6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdGxldCB3aWtpdGV4dDogc3RyaW5nID0gJyc7XG5cdHRyeSB7XG5cdFx0c3RyLnJlcGxhY2UobmV3IFJlZ0V4cChgJHt3aWtpVGV4dEtleX1cXFxccypbXFxcXD06XVxcXFxzKlteXFxuXSpgLCAnZycpLCAodGV4dDogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRcdGNvbnN0IHRlbXBUZXh0OiBzdHJpbmcgPSB0ZXh0XG5cdFx0XHRcdC5yZXBsYWNlKC9eW1xcczt9XSt8W1xcczt9XSskL2csICcnKVxuXHRcdFx0XHQucmVwbGFjZShuZXcgUmVnRXhwKGAke3dpa2lUZXh0S2V5fVxcXFxzKltcXFxcPTpdXFxcXHMqYCksICcnKTtcblx0XHRcdGlmICh3aWtpdGV4dCAhPT0gJycpIHtcblx0XHRcdFx0d2lraXRleHQgKz0gJ1xcbic7XG5cdFx0XHR9XG5cdFx0XHR3aWtpdGV4dCArPSBsdWFHZXRTdHJpbmcodGVtcFRleHQpO1xuXHRcdFx0cmV0dXJuIHRleHQ7XG5cdFx0fSk7XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiAnJztcblx0fVxuXHRyZXR1cm4gd2lraXRleHQ7XG59O1xuXG4vLyDliIbmnpBDU1PkuK3nrKblkIjmnaHku7bnmoR3aWtpdGV4dFxuY29uc3QgbHVhR2V0Q1NTd2lraXRleHQgPSAoaW5wdXRTdHI6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdGxldCB3aWtpdGV4dDogc3RyaW5nID0gJyc7XG5cdGNvbnN0ICRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PiA9ICQoJ2JvZHknKTtcblx0Y29uc3QgY3NzVGV4dDogc3RyaW5nID0gaW5wdXRTdHIgfHwgJGJvZHkuZmluZCgnI3dwVGV4dGJveDEnKS52YWwoKT8udG9TdHJpbmcoKSB8fCAnJztcblx0aWYgKCFjc3NUZXh0LnRyaW0oKSkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXHQvLyDljLnphY0g77y/YWRkVGV4dCB7IGNvbnRlbnTvvJpcIlhYWFwiIH0g5qih5byPXG5cdHdpa2l0ZXh0ID0gbHVhQWRkVGV4dCh3aWtpdGV4dCwgbHVhR2V0Q29udGVudFRleHQoY3NzVGV4dC50b1N0cmluZygpKSwgdHJ1ZSk7XG5cdC8vIOWQjOaXtuS6puWMuemFjSAvKiDvvL9hZGRUZXh077yaWFhYICovIOaooeW8j1xuXHR3aWtpdGV4dCA9IGx1YUFkZFRleHQod2lraXRleHQsIGx1YUdldE9ialRleHQoY3NzVGV4dC50b1N0cmluZygpKSwgdHJ1ZSk7XG5cdHJldHVybiB3aWtpdGV4dDtcbn07XG5cbi8vIOWIhuaekEphdmFTY3JpcHTkuK3nrKblkIjmnaHku7bnmoR3aWtpdGV4dFxuY29uc3QgbHVhR2V0SlN3aWtpdGV4dCA9IChpbnB1dFN0cjogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0bGV0IHdpa2l0ZXh0OiBzdHJpbmcgPSAnJztcblx0Y29uc3QganNUZXh0OiBzdHJpbmcgPVxuXHRcdGlucHV0U3RyIHx8IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd3BUZXh0Ym94MScpIGFzIEhUTUxJbnB1dEVsZW1lbnQpPy52YWx1ZT8udG9TdHJpbmcoKSB8fCAnJztcblx0aWYgKCFqc1RleHQudHJpbSgpKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cdHdpa2l0ZXh0ID0gbHVhQWRkVGV4dCh3aWtpdGV4dCwgbHVhR2V0T2JqVGV4dChqc1RleHQpLCB0cnVlKTtcblx0cmV0dXJuIHdpa2l0ZXh0O1xufTtcblxuLy8g5YiG5p6QSlNPTuS4reespuWQiOadoeS7tueahHdpa2l0ZXh0XG5jb25zdCBsdWFHZXRKU09Od2lraXRleHQgPSAoaW5wdXRTdHI6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdGxldCB3aWtpdGV4dDogc3RyaW5nID0gJyc7XG5cdGNvbnN0ICRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PiA9ICQoJ2JvZHknKTtcblx0Y29uc3QgSlNPTlRleHQ6IHN0cmluZyA9IGlucHV0U3RyIHx8ICRib2R5LmZpbmQoJyN3cFRleHRib3gxJykudmFsKCk/LnRvU3RyaW5nKCkgfHwgJyc7XG5cdGlmICghSlNPTlRleHQudHJpbSgpKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cdHRyeSB7XG5cdFx0Y29uc3QganNvbkRhdGEgPSBKU09OLnBhcnNlKEpTT05UZXh0LnRvU3RyaW5nKCkpO1xuXHRcdGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGpzb25EYXRhKSkge1xuXHRcdFx0Y29uc3QgdiA9IGpzb25EYXRhW2tleV07XG5cdFx0XHRpZiAobmV3IFJlZ0V4cCh3aWtpVGV4dEtleSkudGVzdChrZXkpICYmIHR5cGVvZiB2ID09PSB0eXBlb2YgJycpIHtcblx0XHRcdFx0d2lraXRleHQgPSBsdWFBZGRUZXh0KHdpa2l0ZXh0LCB2KTtcblx0XHRcdH1cblx0XHRcdC8vIOiLpeaYr+aVsOe7hOWvueixoeS8muWkmuWMheS4gOWxglxuXHRcdFx0aWYgKHR5cGVvZiB2ICE9PSB0eXBlb2YgJycpIHtcblx0XHRcdFx0Zm9yIChjb25zdCBwcm9wIGluIHYpIHtcblx0XHRcdFx0XHRpZiAoIU9iamVjdC5oYXNPd24odiwgcHJvcCkpIHtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjb25zdCB0ZXN0QXJyViA9IHZbcHJvcF07XG5cdFx0XHRcdFx0aWYgKG5ldyBSZWdFeHAod2lraVRleHRLZXkpLnRlc3QocHJvcCkgJiYgdHlwZW9mIHRlc3RBcnJWID09PSB0eXBlb2YgJycpIHtcblx0XHRcdFx0XHRcdHdpa2l0ZXh0ID0gbHVhQWRkVGV4dCh3aWtpdGV4dCwgdGVzdEFyclYpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cdHJldHVybiB3aWtpdGV4dDtcbn07XG5cbi8vIOWIpOaWreaYr+WQpuS4ukx1YVxuY29uc3QgbHVhQ2hlY2sgPSAoaW5wdXRTdHI/OiBzdHJpbmcsIGNvbnRlbnRNb2RlbD86IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdC8vIOS9v+eUqOmhtemdouWGheWuueaooeWei+adpeWIpOaWreagvOW8j1xuXHRjb25zdCBjb250ZW50TW9kZWxUb0xvd2VyQ2FzZSA9IChjb250ZW50TW9kZWwgfHwgbXcuY29uZmlnLmdldCgnd2dQYWdlQ29udGVudE1vZGVsJykpLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKTtcblx0Y29uc3QgaW5wdXRTdHJfOiBzdHJpbmcgPSBpbnB1dFN0ciB8fCAnJztcblx0Ly8g5qC55o2u5paH5qGj5qC85byP6YCJ55So6YCC5b2T55qE6Kej5p6Q5qih5byPXG5cdHN3aXRjaCAoY29udGVudE1vZGVsVG9Mb3dlckNhc2UpIHtcblx0XHRjYXNlICdqc29uJzpcblx0XHRcdHJldHVybiBsdWFHZXRKU09Od2lraXRleHQoaW5wdXRTdHJfKTtcblx0XHRjYXNlICdqcyc6XG5cdFx0Y2FzZSAnamF2YXNjcmlwdCc6XG5cdFx0Y2FzZSAndGV4dCc6XG5cdFx0XHRyZXR1cm4gbHVhR2V0SlN3aWtpdGV4dChpbnB1dFN0cl8pO1xuXHRcdGNhc2UgJ2Nzcyc6XG5cdFx0Y2FzZSAnc2FuaXRpemVkLWNzcyc6XG5cdFx0XHRyZXR1cm4gbHVhR2V0Q1NTd2lraXRleHQoaW5wdXRTdHJfKTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuICcnO1xuXHRcdC8vIOiLpeS4jeaYr2pzb27jgIFqc+OAgWNzc+WImei/lOWbnuepuuWtl+espuS4slxuXHR9XG59O1xuLy8g5pys6KGM5Lul5LiK55qE566X5rOV6K+36LefW1tNb2R1bGU6U3BlY2lhbCB3aWtpdGV4dF1d5L+d5oyB5LiA6Ie044CCXG5cbi8qIOeoi+W6j+S4u+imgemDqOWIhiAqL1xuY29uc3QgcHJldmlld1Rvb2wgPSAoKTogdm9pZCA9PiB7XG5cdC8vIOWQhOexu+aPkOekuuaWh+Wtl1xuXHRjb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaSgnU3BlY2lhbFdpa2l0ZXh0LzEuMScpO1xuXHRjb25zdCAkbm90aWNlQWRkVGV4dDogc3RyaW5nID0gJ3t7U3BlY2lhbF93aWtpdGV4dC9ub3RpY2V9fSc7XG5cdC8vIHt7UXVvdGUgYm94IHxxdW90ZSAgPSAte3poLWhhbnM66aKE6KeI5Yqg6L295LitO3poLWhhbnQ66aCQ6Ka96LyJ5YWl5LitO30tLi4uIHx3aWR0aCAgPSA1MCUgfGFsaWduICA9IGNlbnRlcn19XG5cdGNvbnN0ICRub3RpY2VMb2FkaW5nOiBzdHJpbmcgPSBgPGRpdiBpZD1cIm13LV9hZGRUZXh0LXByZXZpZXctbG9hZGluZ1wiPjxkaXYgY2xhc3M9XCJxdW90ZWJveFwiIHN0eWxlPVwibWFyZ2luOmF1dG87cGFkZGluZzo2cHg7d2lkdGg6NTAlO2JvcmRlcjoxcHggc29saWQgI2FhYTtiYWNrZ3JvdW5kOiNmOWY5Zjk7Zm9udC1zaXplOjg4JVwiPjxkaXYgaWQ9XCJtdy1fYWRkVGV4dC1wcmV2aWV3LWxvYWRpbmctY29udGVudFwiIHN0eWxlPVwiYmFja2dyb3VuZDojZjlmOWY5O2NvbG9yOiMwMDA7dGV4dC1hbGlnbjpjZW50ZXI7Zm9udC1zaXplOmxhcmdlclwiPjxpbWcgc3JjPVwiaHR0cHM6Ly90dS56aG9uZ3dlbi53aWtpL2ltYWdlcy9xaXV3ZW5iYWlrZS96aC9kL2RlL0FqYXgtbG9hZGVyLmdpZlwiIGRlY29kaW5nPVwiYXN5bmNcIiBkYXRhLWZpbGUtd2lkdGg9XCIzMlwiIGRhdGEtZmlsZS1oZWlnaHQ9XCIzMlwiIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiPiAke3dpbmRvdy53Z1VMUyhcblx0XHQn6aKE6KeI5Yqg6L295LitJyxcblx0XHQn6aCQ6Ka96LyJ5YWl5LitJ1xuXHQpfS4uLjwvZGl2PjwvZGl2PjwvZGl2PmA7XG5cdC8vIFtbRmlsZTpHbm9tZS1kaWFsb2ctd2FybmluZzIuc3ZnfDMycHhdXVxuXHQvLyAte3poLWhhbnM66aKE6KeI5Yqg6L295aSx6LSlO3poLWhhbnQ66aCQ6Ka96LyJ5YWl5aSx6LSlO30tXG5cdGNvbnN0ICRub3RpY2VGYWlsOiBzdHJpbmcgPSBgPGltZyBzcmM9XCJodHRwczovL3R1Lnpob25nd2VuLndpa2kvaW1hZ2VzL3FpdXdlbmJhaWtlL3poL3RodW1iLzgvOGYvQWxlcnRfTWFya18lMjhPcmFuZ2UlMjkuc3ZnLzQ4cHgtQWxlcnRfTWFya18lMjhPcmFuZ2UlMjkuc3ZnLnBuZ1wiIGRlY29kaW5nPVwiYXN5bmNcIiBkYXRhLWZpbGUtd2lkdGg9XCI0OFwiIGRhdGEtZmlsZS1oZWlnaHQ9XCI0OFwiIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiPiR7d2luZG93LndnVUxTKFxuXHRcdCfpooTop4jliqDovb3lpLHotKUnLFxuXHRcdCfpoJDopr3ovInlhaXlpLHotKUnXG5cdCl9YDtcblxuXHQvLyDmo4Dmn6Xlr7nlupRzZWxlY3RvcueahOe9kemhteWvueixoeaYr+WQpuWtmOWcqFxuXHRjb25zdCAkZWxlbWVudEV4aXN0ID0gKHNlbGVjdG9yczogc3RyaW5nIHwgc3RyaW5nW10pID0+IHtcblx0XHRjb25zdCBzZWxlY3RvckFycmF5OiBzdHJpbmdbXSA9IEFycmF5LmlzQXJyYXkoc2VsZWN0b3JzKSA/IHNlbGVjdG9ycyA6IHNlbGVjdG9ycyA/IFtzZWxlY3RvcnNdIDogW107XG5cdFx0bGV0IGVsZUNvdW50OiBudW1iZXIgPSAwO1xuXHRcdGZvciAoY29uc3Qgc2VsZWN0b3Igb2Ygc2VsZWN0b3JBcnJheSkge1xuXHRcdFx0Y29uc3QgJHNlbGVjdG9yOiBKUXVlcnkgPSAkKHNlbGVjdG9yKTtcblx0XHRcdGVsZUNvdW50ICs9ICRzZWxlY3Rvci5sZW5ndGg7XG5cdFx0fVxuXHRcdHJldHVybiBlbGVDb3VudCA+IDA7XG5cdH07XG5cblx0Ly8g5qOA5p+lTWVkaWFXaWtp55qE6K6+572uXG5cdGNvbnN0IGNoZWNrTXdDb25maWcgPSAoY2hlY2tUYXJnZXQ6IHN0cmluZywgbXdDb25maWdzOiBzdHJpbmcgfCBzdHJpbmdbXSkgPT4ge1xuXHRcdGxldCBtd0NvbmZpZ0RhdGEgPSBtdy5jb25maWcuZ2V0KGNoZWNrVGFyZ2V0KTtcblx0XHRpZiAoIW13Q29uZmlnRGF0YSB8fCBTdHJpbmcobXdDb25maWdEYXRhKS50cmltKCkgPT09ICcnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdG13Q29uZmlnRGF0YSA9IFN0cmluZyhtd0NvbmZpZ0RhdGEpLnRvTG93ZXJDYXNlKCk7XG5cdFx0Y29uc3QgbXdDb25maWdBcnJheTogc3RyaW5nW10gPSBBcnJheS5pc0FycmF5KG13Q29uZmlncykgPyBtd0NvbmZpZ3MgOiBtd0NvbmZpZ3MgPyBbbXdDb25maWdzXSA6IFtdO1xuXHRcdHJldHVybiBtd0NvbmZpZ0FycmF5LmluY2x1ZGVzKG13Q29uZmlnRGF0YSBhcyBzdHJpbmcpO1xuXHR9O1xuXG5cdGNvbnN0IGdldExhbmd1YWdlID0gKCk6IHN0cmluZyA9PiB7XG5cdFx0Y29uc3QgbGFuZzogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dVc2VyTGFuZ3VhZ2UnKTtcblx0XHRpZiAobGFuZy5pbmNsdWRlcygnemgnKSkge1xuXHRcdFx0cmV0dXJuIG13LmNvbmZpZy5nZXQoJ3dnVXNlclZhcmlhbnQnKSBhcyBzdHJpbmc7XG5cdFx0fVxuXHRcdHJldHVybiBsYW5nO1xuXHR9O1xuXG5cdC8vIOWwhuino+aekOWQjueahHdpa2l0ZXh05Yqg5YWl6aG16Z2i5LitXG5cdGNvbnN0IGFkZFBhcnNlZFdpa2l0ZXh0ID0gKHBhcnNlZFdpa2l0ZXh0OiBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRjb25zdCAkaHRtbE9iajogSlF1ZXJ5ID0gJChwYXJzZWRXaWtpdGV4dCk7XG5cdFx0aWYgKCRlbGVtZW50RXhpc3QoJyNtdy1fYWRkVGV4dC1wcmV2aWV3LWxvYWRpbmcnKSkge1xuXHRcdFx0Y29uc3QgJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+ID0gJCgnYm9keScpO1xuXHRcdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICRib2R5LmZpbmQoJyNtdy1fYWRkVGV4dC1wcmV2aWV3LWxvYWRpbmcnKTtcblx0XHRcdCRlbGVtZW50Lmh0bWwocGFyc2VkV2lraXRleHQpO1xuXHRcdFx0bXcuaG9vaygnd2lraXBhZ2UuY29udGVudCcpLmZpcmUoJGVsZW1lbnQpO1xuXHRcdH0gZWxzZSBpZiAoJGVsZW1lbnRFeGlzdCgnLmRpZmYtY3VycmVudHZlcnNpb24tdGl0bGUnKSkge1xuXHRcdFx0JGh0bWxPYmouaW5zZXJ0QWZ0ZXIoJy5kaWZmLWN1cnJlbnR2ZXJzaW9uLXRpdGxlJyk7XG5cdFx0fSBlbHNlIGlmICgkZWxlbWVudEV4aXN0KCcucHJldmlld25vdGUnKSkge1xuXHRcdFx0JGh0bWxPYmouaW5zZXJ0QWZ0ZXIoJy5wcmV2aWV3bm90ZScpO1xuXHRcdH0gZWxzZSBpZiAoJGVsZW1lbnRFeGlzdCgnLm13LXVuZGVsZXRlLXJldmlzaW9uJykpIHtcblx0XHRcdCRodG1sT2JqLmluc2VydEFmdGVyKCcubXctdW5kZWxldGUtcmV2aXNpb24nKTtcblx0XHR9IGVsc2UgaWYgKCRlbGVtZW50RXhpc3QoJyNtdy1jb250ZW50LXRleHQnKSkge1xuXHRcdFx0JGh0bWxPYmouaW5zZXJ0QmVmb3JlKCcjbXctY29udGVudC10ZXh0Jyk7XG5cdFx0fVxuXHRcdG13Lmhvb2soJ3dpa2lwYWdlLmNvbnRlbnQnKS5maXJlKCRodG1sT2JqKTtcblx0fTtcblxuXHQvLyDoi6XnvZHpobXlr7nosaHlrZjlnKjvvIzliJnmlLnliqjlhbZodG1s5YaF5a65XG5cdGNvbnN0IHNldEh0bWwgPSAoc2VsZWN0b3I6IHN0cmluZywgJGh0bWxDb250ZW50OiBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRpZiAoJGVsZW1lbnRFeGlzdChzZWxlY3RvcikpIHtcblx0XHRcdCQoc2VsZWN0b3IpLmh0bWwoJGh0bWxDb250ZW50KTtcblx0XHR9XG5cdH07XG5cblx0Ly8g5Yqg5YWl4oCcW+i9veWFpeS4rV3igJ3nmoTmj5DnpLpcblx0Y29uc3QgYWRkTG9hZGluZ05vdGljZSA9ICgpOiB2b2lkID0+IHtcblx0XHRpZiAoJG5vdGljZUFkZFRleHQgJiYgJG5vdGljZUxvYWRpbmcpIHtcblx0XHRcdGFkZFBhcnNlZFdpa2l0ZXh0KCRub3RpY2VMb2FkaW5nKTtcblx0XHR9XG5cdH07XG5cblx0Ly8g6L295YWl6ZSZ6K+v55qE5o+Q56S6XG5cdGNvbnN0IGxvYWRpbmdGYWlsTm90aWNlID0gKCk6IHZvaWQgPT4ge1xuXHRcdHNldEh0bWwoJyNtdy1fYWRkVGV4dC1wcmV2aWV3LWxvYWRpbmctY29udGVudCcsICRub3RpY2VGYWlsKTtcblx0fTtcblxuXHQvLyDnp7vpmaTigJxb6L295YWl5LitXeKAneeahOaPkOekulxuXHRjb25zdCByZW1vdmVMb2FkaW5nTm90aWNlID0gKCk6IHZvaWQgPT4ge1xuXHRcdHNldEh0bWwoJyNtdy1fYWRkVGV4dC1wcmV2aWV3LWxvYWRpbmcnLCAnJyk7XG5cdH07XG5cblx0Ly8g5qOA5p+l5piv5ZCm5pyJ6aKE6KeI55qE5b+F6KaB5oCnXG5cdGNvbnN0IG5lZWRQcmV2aWV3ID0gKCk6IGJvb2xlYW4gPT4ge1xuXHRcdHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuaW5uZXJIVE1MLnNlYXJjaCgnX2FkZFRleHQnKSA+IC0xO1xuXHR9O1xuXG5cdC8vIOWKoOWFpemihOiniOWGheWuuVxuXHRjb25zdCBtd0FkZFdpa2lUZXh0ID0gYXN5bmMgKHdpa2lUZXh0OiBzdHJpbmcsIHBhZ2VuYW1lOiBzdHJpbmcsIGlzUHJldmlldzogYm9vbGVhbikgPT4ge1xuXHRcdGlmICh3aWtpVGV4dC50b1N0cmluZygpLnRyaW0oKSA9PT0gJycpIHtcblx0XHRcdHJlbW92ZUxvYWRpbmdOb3RpY2UoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgcGFyYW1zOiBBcGlQYXJzZVBhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdFx0XHRwcm9wOiAndGV4dCcsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdC8vIOmBv+WFjeWGheWuuemHjeWkjVxuXHRcdFx0XHR0aXRsZTogcGFnZW5hbWUsXG5cdFx0XHRcdGNvbnRlbnRtb2RlbDogJ3dpa2l0ZXh0Jyxcblx0XHRcdFx0dGV4dDogd2lraVRleHQsXG5cdFx0XHRcdHVzZWxhbmc6IGdldExhbmd1YWdlKCksXG5cdFx0XHRcdHVzZXNraW46IG13LmNvbmZpZy5nZXQoJ3NraW4nKSxcblx0XHRcdH07XG5cdFx0XHRpZiAoaXNQcmV2aWV3KSB7XG5cdFx0XHRcdHBhcmFtcy5wcmV2aWV3ID0gdHJ1ZTtcblx0XHRcdFx0cGFyYW1zLmRpc2FibGVlZGl0c2VjdGlvbiA9IHRydWU7XG5cdFx0XHR9XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjb25zdCBkYXRhID0gYXdhaXQgYXBpLnBvc3QocGFyYW1zKTtcblx0XHRcdFx0aWYgKCFkYXRhIHx8ICFkYXRhWydwYXJzZSddIHx8ICFkYXRhWydwYXJzZSddLnRleHQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgcGFyc2VkV2lraSA9ICgoZGF0YVsncGFyc2UnXS50ZXh0IGFzIHN0cmluZyB8IG51bGwpIHx8ICcnKS50b1N0cmluZygpLnRyaW0oKTtcblx0XHRcdFx0aWYgKHBhcnNlZFdpa2kgPT09ICcnKSB7XG5cdFx0XHRcdFx0cmVtb3ZlTG9hZGluZ05vdGljZSgpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGFkZFBhcnNlZFdpa2l0ZXh0KHBhcnNlZFdpa2kpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0bG9hZGluZ0ZhaWxOb3RpY2UoKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0Ly8g5Yqg5YWl6aKE6KeI55qETHVh5YaF5a65XG5cdGNvbnN0IG13QWRkTHVhVGV4dCA9IGFzeW5jIChcblx0XHR3aWtpVGV4dDogc3RyaW5nLFxuXHRcdHBhZ2VuYW1lOiBzdHJpbmcsXG5cdFx0aXNQcmV2aWV3OiBib29sZWFuLFxuXHRcdGNhbGxCYWNrPzogKGFyZzA6IHN0cmluZykgPT4gSlF1ZXJ5IHwgSFRNTEVsZW1lbnQgfCB2b2lkXG5cdCkgPT4ge1xuXHRcdGNvbnN0IHRlbXBNb2R1bGVOYW1lOiBzdHJpbmcgPSAnQWRkVGV4dC9UZW1wL01vZHVsZS9EYXRhLmx1YSc7XG5cdFx0Y29uc3QgbW9kdWxlQ2FsbDoge1xuXHRcdFx0d2lraXRleHQ6IHN0cmluZztcblx0XHRcdHBhZ2VuYW1lOiBzdHJpbmc7XG5cdFx0fSA9IHtcblx0XHRcdHdpa2l0ZXh0OiAnI2ludm9rZTonLFxuXHRcdFx0Ly8g5YiG5byA5p2l77yM6YG/5YWN6KKr5YiG5YiwW1s6Q2F0ZWdvcnk65pyJ6ISa5pys6ZSZ6K+v55qE6aG16Z2iXV1cblx0XHRcdHBhZ2VuYW1lOiAnTW9kdWxlOicsXG5cdFx0fTtcblx0XHRpZiAod2lraVRleHQudG9TdHJpbmcoKS50cmltKCkgPT09ICcnKSB7XG5cdFx0XHRyZW1vdmVMb2FkaW5nTm90aWNlKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IHBhcmFtczogQXBpUGFyc2VQYXJhbXMgPSB7XG5cdFx0XHRcdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdFx0XHRcdHByb3A6ICd0ZXh0Jyxcblx0XHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdFx0dGl0bGU6IHBhZ2VuYW1lLFxuXHRcdFx0XHRcdGNvbnRlbnRtb2RlbDogJ3dpa2l0ZXh0Jyxcblx0XHRcdFx0XHR0ZW1wbGF0ZXNhbmRib3h0aXRsZTogbW9kdWxlQ2FsbC5wYWdlbmFtZSArIHRlbXBNb2R1bGVOYW1lLFxuXHRcdFx0XHRcdC8vIOS6p+eUn+S4tOaXtkx1YSBNb2R1bGVcblx0XHRcdFx0XHR0ZW1wbGF0ZXNhbmRib3h0ZXh0OiBgcmV0dXJue1xcblxcdG1haW49ZnVuY3Rpb24oKVxcblxcdFxcdHhwY2FsbChmdW5jdGlvbigpXFxuXFx0XFx0XFx0JHt3aWtpVGV4dH1cXG5cXHRcXHRlbmQsZnVuY3Rpb24oKWVuZClcXG5cXHRcXHRsb2NhbCBtb2R1bGVXaWtpdGV4dD1wYWNrYWdlLmxvYWRlZFtcIk1vZHVsZTpNb2R1bGUgd2lraXRleHRcIl1cXG5cXHRcXHRpZiBtb2R1bGVXaWtpdGV4dCB0aGVuXFxuXFx0XFx0XFx0bG9jYWwgd2lraXRleHQ9bW9kdWxlV2lraXRleHQubWFpbigpXFxuXFx0XFx0XFx0aWYgbXcudGV4dC50cmltKHdpa2l0ZXh0KX49Jyd0aGVuXFxuXFx0XFx0XFx0XFx0cmV0dXJuIG13LmdldEN1cnJlbnRGcmFtZSgpOnByZXByb2Nlc3MobW9kdWxlV2lraXRleHQubWFpbigpKVxcblxcdFxcdFxcdGVuZFxcblxcdFxcdGVuZFxcblxcdFxcdHJldHVybicnXFxuXFx0ZW5kXFxufWAsXG5cdFx0XHRcdFx0dGVtcGxhdGVzYW5kYm94Y29udGVudG1vZGVsOiAnU2NyaWJ1bnRvJyxcblx0XHRcdFx0XHR0ZW1wbGF0ZXNhbmRib3hjb250ZW50Zm9ybWF0OiAndGV4dC9wbGFpbicsXG5cdFx0XHRcdFx0dGV4dDogYHt7JHttb2R1bGVDYWxsLndpa2l0ZXh0fSR7dGVtcE1vZHVsZU5hbWV9fG1haW59fWAsXG5cdFx0XHRcdFx0dXNlbGFuZzogZ2V0TGFuZ3VhZ2UoKSxcblx0XHRcdFx0XHR1c2Vza2luOiBtdy5jb25maWcuZ2V0KCdza2luJyksXG5cdFx0XHRcdH07XG5cdFx0XHRcdGlmIChpc1ByZXZpZXcpIHtcblx0XHRcdFx0XHRwYXJhbXMucHJldmlldyA9IHRydWU7XG5cdFx0XHRcdFx0cGFyYW1zLmRpc2FibGVlZGl0c2VjdGlvbiA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgZGF0YSA9IGF3YWl0IGFwaS5wb3N0KHBhcmFtcyk7XG5cdFx0XHRcdGlmICghZGF0YSB8fCAhZGF0YVsncGFyc2UnXSB8fCAhZGF0YVsncGFyc2UnXS50ZXh0KSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IHBhcnNlZFdpa2kgPSAoKGRhdGFbJ3BhcnNlJ10udGV4dCBhcyBzdHJpbmcgfCBudWxsKSB8fCAnJykudG9TdHJpbmcoKS50cmltKCk7XG5cdFx0XHRcdGlmIChwYXJzZWRXaWtpID09PSAnJykge1xuXHRcdFx0XHRcdHJlbW92ZUxvYWRpbmdOb3RpY2UoKTtcblx0XHRcdFx0XHQvLyDoi6Xlh7rplJnlnKjov5nkuKrkuLTml7bmqKHlnZfkuK3liJnlj5bmtohcblx0XHRcdFx0fSBlbHNlIGlmICgkKHBhcnNlZFdpa2kpLmZpbmQoJy5zY3JpYnVudG8tZXJyb3InKS50ZXh0KCkuc2VhcmNoKHRlbXBNb2R1bGVOYW1lKSA8IDApIHtcblx0XHRcdFx0XHRpZiAoY2FsbEJhY2sgJiYgdHlwZW9mIGNhbGxCYWNrID09PSB0eXBlb2YgKCgpOiB2b2lkID0+IHt9KSkge1xuXHRcdFx0XHRcdFx0Y2FsbEJhY2socGFyc2VkV2lraSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGFkZFBhcnNlZFdpa2l0ZXh0KHBhcnNlZFdpa2kpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZW1vdmVMb2FkaW5nTm90aWNlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRsb2FkaW5nRmFpbE5vdGljZSgpO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHQvLyDku47pobXpnaLlvZPliY3ljoblj7LniYjmnKzlj5blh7ogX2FkZFRleHRcblx0Y29uc3QgbXdBcHBseVJldmlzaW9uID0gYXN5bmMgKF9yZXZpc2lvbklkOiBudW1iZXIsIGN1cnJlbnRQYWdlTmFtZTogc3RyaW5nKSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHBhcmFtczogQXBpUGFyc2VQYXJhbXMgPSB7XG5cdFx0XHRcdC8vIOacrOivt+axglVSTOS4jeWkquWPr+iDveaciemVv+W6pui2hemVv+eahOmjjumZqVxuXHRcdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRcdHByb3A6ICd3aWtpdGV4dCcsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdC8vIGdldCB0aGUgb3JpZ2luYWwgd2lraXRleHQgY29udGVudCBvZiBhIHBhZ2Vcblx0XHRcdFx0b2xkaWQ6IG13LmNvbmZpZy5nZXQoJ3dnUmV2aXNpb25JZCcpLFxuXHRcdFx0fTtcblx0XHRcdGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7IC8vIOiLpeWPluW+lyBfYWRkVGV4dCDliJnmmL7npLrpooTop4hcblx0XHRcdGlmICghZGF0YSB8fCAhZGF0YVsncGFyc2UnXSB8fCAhZGF0YVsncGFyc2UnXS53aWtpdGV4dCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRsZXQgcGFnZUNvbnRlbnQ6IHN0cmluZyA9XG5cdFx0XHRcdGx1YUNoZWNrKCgoZGF0YVsncGFyc2UnXS53aWtpdGV4dCBhcyBzdHJpbmcgfCBudWxsKSB8fCAnJykudG9TdHJpbmcoKS50cmltKCkpIHx8ICcnO1xuXHRcdFx0cGFnZUNvbnRlbnQgPVxuXHRcdFx0XHQoJGVsZW1lbnRFeGlzdCgnI213LWNsZWFyeW91cmNhY2hlJylcblx0XHRcdFx0XHQ/ICd7eyNpbnZva2U6U3BlY2lhbCB3aWtpdGV4dC9UZW1wbGF0ZXxpbnR8Y2xlYXJ5b3VyY2FjaGV9fSdcblx0XHRcdFx0XHQ6ICcnKSArIHBhZ2VDb250ZW50LnRvU3RyaW5nKCk7XG5cdFx0XHRpZiAocGFnZUNvbnRlbnQudG9TdHJpbmcoKS50cmltKCkgPT09ICcnKSB7XG5cdFx0XHRcdHJlbW92ZUxvYWRpbmdOb3RpY2UoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZvaWQgbXdBZGRXaWtpVGV4dChwYWdlQ29udGVudCwgY3VycmVudFBhZ2VOYW1lLCB0cnVlKTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdHJlbW92ZUxvYWRpbmdOb3RpY2UoKTtcblx0XHR9XG5cdH07XG5cblx0Ly8g5Yqg5YWl57yW6L6R5o+Q56S677yI6Iul5a2Y5Zyo77yJXG5cdGNvbnN0IG13QXBwbHlOb3RpY2UgPSBhc3luYyAoY3VycmVudFBhZ2VOYW1lOiBzdHJpbmcsIHBhZ2VTdWJOYW1lOiBzdHJpbmcpID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcGFyYW1zOiBBcGlQYXJzZVBhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdFx0XHRwcm9wOiAndGV4dCcsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdC8vIGdldCB0aGUgb3JpZ2luYWwgd2lraXRleHQgY29udGVudCBvZiBhIHBhZ2Vcblx0XHRcdFx0dGl0bGU6IGN1cnJlbnRQYWdlTmFtZSArIHBhZ2VTdWJOYW1lLFxuXHRcdFx0XHR0ZXh0OiBge3sjaW52b2tlOlNwZWNpYWwgd2lraXRleHQvVGVtcGxhdGV8Z2V0Tm90aWNlc3wke2N1cnJlbnRQYWdlTmFtZX18JHtwYWdlU3ViTmFtZX19fWAsXG5cdFx0XHRcdHVzZWxhbmc6IGdldExhbmd1YWdlKCksXG5cdFx0XHRcdHVzZXNraW46IG13LmNvbmZpZy5nZXQoJ3NraW4nKSxcblx0XHRcdH07XG5cdFx0XHRjb25zdCBkYXRhID0gYXdhaXQgYXBpLnBvc3QocGFyYW1zKTtcblx0XHRcdGlmICghZGF0YSB8fCAhZGF0YVsncGFyc2UnXSB8fCAhZGF0YVsncGFyc2UnXS50ZXh0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNvbnN0IGh0bWw6IHN0cmluZyA9IGRhdGFbJ3BhcnNlJ10udGV4dDtcblx0XHRcdGlmICgkKGh0bWwudG9TdHJpbmcoKSkudGV4dCgpLnRyaW0oKSAhPT0gJycpIHtcblx0XHRcdFx0YWRkUGFyc2VkV2lraXRleHQoaHRtbCk7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7fVxuXHR9O1xuXG5cdC8qIOa1i+ivleagt+S+iyAqL1xuXHQvLyDmnKzohJrmnKznmoRUZXN0Y2FzZeaooeW8j1xuXHRjb25zdCB3aWtpdGV4dFByZXZpZXdUZXN0Y2FzZSA9IGFzeW5jIChpc1ByZXZpZXc6IGJvb2xlYW4pID0+IHtcblx0XHQvLyDmsqHmnInlj6/pooTop4jlhYPntKDvvIzpgIDlh7rjgIJcblx0XHRpZiAoIW5lZWRQcmV2aWV3KCkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+ID0gJCgnYm9keScpO1xuXHRcdGNvbnN0ICR0ZXN0Y2FzZUxpc3Q6IEpRdWVyeSA9ICRib2R5LmZpbmQoJy5zcGVjaWFsLXdpa2l0ZXh0LXByZXZpZXctdGVzdGNhc2UnKTtcblx0XHQvLyDoi6XpobXpnaLkuK3msqHmnIlUZXN0Y2FzZe+8jOmAgOWHuuOAglxuXHRcdGlmICgkdGVzdGNhc2VMaXN0Lmxlbmd0aCA8PSAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdC8vIOaUtumbhuS9jeS6jumhtemdouS4reeahFRlc3RjYXNl6aKE6KeI5YWD57SgXG5cdFx0Y29uc3QgdGVzdGNhc2VEYXRhTGlzdDoge1xuXHRcdFx0ZWxlbWVudDogSFRNTEVsZW1lbnQgfCB1bmRlZmluZWQ7XG5cdFx0XHRsYW5nOiBzdHJpbmc7XG5cdFx0XHRjb2RlOiBzdHJpbmc7XG5cdFx0fVtdID0gW107XG5cdFx0bGV0IGk7XG5cdFx0Zm9yIChpID0gMDsgaSA8ICR0ZXN0Y2FzZUxpc3QubGVuZ3RoOyArK2kpIHtcblx0XHRcdGNvbnN0IHRlc3RjYXNlSXRlbTogSFRNTEVsZW1lbnQgfCB1bmRlZmluZWQgPSAkdGVzdGNhc2VMaXN0W2ldO1xuXHRcdFx0aWYgKCF0ZXN0Y2FzZUl0ZW0pIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBjb2RlSXQ6IEpRdWVyeSA9ICQodGVzdGNhc2VJdGVtKS5maW5kKCcubXctaGlnaGxpZ2h0Jyk7XG5cdFx0XHRpZiAoIWNvZGVJdC5sZW5ndGgpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBbY29kZUl0MF0gPSBjb2RlSXQ7XG5cdFx0XHRpZiAoIWNvZGVJdDApIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBjb2RlSXRDbGFzczogc3RyaW5nIHwgdW5kZWZpbmVkID0gJChjb2RlSXQwKS5hdHRyKCdjbGFzcycpO1xuXHRcdFx0aWYgKCFjb2RlSXRDbGFzcykge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgWywgY29kZUlkXSA9IC9tdy1oaWdobGlnaHQtbGFuZy0oXFxTKykvLmV4ZWMoY29kZUl0Q2xhc3MpIHx8IFtdO1xuXHRcdFx0Y29uc3QgbG9hZEluZGV4OiBudW1iZXIgPSB0ZXN0Y2FzZURhdGFMaXN0Lmxlbmd0aDtcblx0XHRcdCQodGVzdGNhc2VJdGVtKS5hdHRyKCdwcmV2aWV3LWlkJywgbG9hZEluZGV4KTtcblx0XHRcdHRlc3RjYXNlRGF0YUxpc3QucHVzaCh7XG5cdFx0XHRcdGVsZW1lbnQ6IHRlc3RjYXNlSXRlbSxcblx0XHRcdFx0bGFuZzogY29kZUlkIHx8ICcnLFxuXHRcdFx0XHRjb2RlOiBjb2RlSXQudGV4dCgpLnRvU3RyaW5nKCksXG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHQvLyDmlbTnkIbpobXpnaLkuK3nmoRUZXN0Y2FzZemihOiniOWFg+e0oO+8jOW5tuaUvue9ruKAnFvovb3lhaXkuK1d4oCd5raI5oGvXG5cdFx0bGV0IHBhY2thZ2VXaWtpdGV4dDogc3RyaW5nID0gJyc7XG5cdFx0Zm9yIChjb25zdCBbX2tleSwgdGVzdGNhc2VJdGVtXSBvZiBPYmplY3QuZW50cmllcyh0ZXN0Y2FzZURhdGFMaXN0KSkge1xuXHRcdFx0aWYgKHRlc3RjYXNlSXRlbS5jb2RlLnRyaW0oKSA9PT0gJycpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBpdGVtRWxlbWVudDogSFRNTEVsZW1lbnQgfCB1bmRlZmluZWQgPSB0ZXN0Y2FzZUl0ZW0uZWxlbWVudDtcblx0XHRcdGlmIChbJ2phdmFzY3JpcHQnLCAnanMnLCAnY3NzJywgJ2pzb24nLCAndGV4dCddLmluY2x1ZGVzKHRlc3RjYXNlSXRlbS5sYW5nLnRvTG93ZXJDYXNlKCkpKSB7XG5cdFx0XHRcdGNvbnN0IGFkZFdpa2k6IHN0cmluZyA9IGx1YUNoZWNrKHRlc3RjYXNlSXRlbS5jb2RlLCB0ZXN0Y2FzZUl0ZW0ubGFuZyk7XG5cdFx0XHRcdGlmIChhZGRXaWtpLnRvU3RyaW5nKCkudHJpbSgpICE9PSAnJyAmJiBpdGVtRWxlbWVudCkge1xuXHRcdFx0XHRcdC8vIOiLpeino+aekOe7k+aenOmdnuepuuaJjeaUvue9rumihOiniFxuXHRcdFx0XHRcdCQoaXRlbUVsZW1lbnQpLnByZXBlbmQoJG5vdGljZUxvYWRpbmcpO1xuXHRcdFx0XHRcdHBhY2thZ2VXaWtpdGV4dCArPSBgPGRpdiBjbGFzcz1cInNwZWNpYWwtd2lraXRleHQtcHJldmlldy10ZXN0Y2FzZS0ke2l9XCI+XFxuJHthZGRXaWtpfVxcbjwvZGl2PmA7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoWydsdWEnLCAnc2NyaWJ1bnRvJ10uaW5jbHVkZXModGVzdGNhc2VJdGVtLmxhbmcudG9Mb3dlckNhc2UoKSkpIHtcblx0XHRcdFx0dm9pZCBtd0FkZEx1YVRleHQoXG5cdFx0XHRcdFx0dGVzdGNhc2VJdGVtLmNvZGUsXG5cdFx0XHRcdFx0bXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpLFxuXHRcdFx0XHRcdGlzUHJldmlldyxcblx0XHRcdFx0XHQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuICh3aWtpdGV4dDogc3RyaW5nKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRcdGlmIChpdGVtRWxlbWVudCkge1xuXHRcdFx0XHRcdFx0XHRcdCQoaXRlbUVsZW1lbnQpLnByZXBlbmQod2lraXRleHQpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdH0pKClcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyDlsIbmlbTnkIblroznmoRUZXN0Y2FzZemihOiniOWFg+e0oOe7n+S4gOWPkemAgUFQSeivt+axgu+8jOW5tuWwhui/lOWbnue7k+aenOWIhuWPkeWIsOWQhFRlc3RjYXNlXG5cdFx0aWYgKHBhY2thZ2VXaWtpdGV4dC50cmltKCkgIT09ICcnKSB7XG5cdFx0XHRwYWNrYWdlV2lraXRleHQgPSBgPGRpdiBjbGFzcz1cInNwZWNpYWwtd2lraXRleHQtcHJldmlldy10ZXN0Y2FzZS11bmRlZmluZWRcIj4ke3BhY2thZ2VXaWtpdGV4dH08L2Rpdj5gO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29uc3QgcGFyYW1zOiBBcGlQYXJzZVBhcmFtcyA9IHtcblx0XHRcdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRcdFx0cHJvcDogJ3RleHQnLFxuXHRcdFx0XHRcdGNvbnRlbnRtb2RlbDogJ3dpa2l0ZXh0Jyxcblx0XHRcdFx0XHR0ZXh0OiBwYWNrYWdlV2lraXRleHQsXG5cdFx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHR9O1xuXHRcdFx0XHRpZiAoaXNQcmV2aWV3KSB7XG5cdFx0XHRcdFx0cGFyYW1zLnByZXZpZXcgPSB0cnVlO1xuXHRcdFx0XHRcdHBhcmFtcy5kaXNhYmxlZWRpdHNlY3Rpb24gPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkucG9zdChwYXJhbXMpO1xuXHRcdFx0XHRpZiAoIWRhdGEgfHwgIWRhdGFbJ3BhcnNlJ10gfHwgIWRhdGFbJ3BhcnNlJ10udGV4dCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBwYXJzZWRXaWtpID0gKChkYXRhWydwYXJzZSddLnRleHQgYXMgc3RyaW5nIHwgbnVsbCkgfHwgJycpLnRvU3RyaW5nKCkudHJpbSgpO1xuXHRcdFx0XHRpZiAocGFyc2VkV2lraSAhPT0gJycpIHtcblx0XHRcdFx0XHRjb25zdCAkcGFyc2VkRWxlbWVudDogSlF1ZXJ5ID0gJChwYXJzZWRXaWtpKTtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IFtrZXksIHRlc3RjYXNlSXRlbV0gb2YgT2JqZWN0LmVudHJpZXModGVzdGNhc2VEYXRhTGlzdCkpIHtcblx0XHRcdFx0XHRcdGlmIChcblx0XHRcdFx0XHRcdFx0dGVzdGNhc2VJdGVtICYmXG5cdFx0XHRcdFx0XHRcdFsnamF2YXNjcmlwdCcsICdqcycsICd0ZXh0JywgJ2NzcycsICdqc29uJ10uaW5jbHVkZXModGVzdGNhc2VJdGVtLmxhbmcudG9Mb3dlckNhc2UoKSlcblx0XHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0XHRjb25zdCBjaGVja1BhcnNlRWxlbWVudDogSlF1ZXJ5PEhUTUxFbGVtZW50PiA9ICRwYXJzZWRFbGVtZW50LmZpbmQoXG5cdFx0XHRcdFx0XHRcdFx0YC5zcGVjaWFsLXdpa2l0ZXh0LXByZXZpZXctdGVzdGNhc2UtdW5kZWZpbmVkID4gLnNwZWNpYWwtd2lraXRleHQtcHJldmlldy10ZXN0Y2FzZS0ke2tleX1gXG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdGlmIChjaGVja1BhcnNlRWxlbWVudC5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCAkYWRkVGFyZ2V0OiBKUXVlcnkgPSAkKFxuXHRcdFx0XHRcdFx0XHRcdFx0dGVzdGNhc2VJdGVtLmVsZW1lbnQgYXMgTm9uTnVsbGFibGU8dHlwZW9mIHRlc3RjYXNlSXRlbS5lbGVtZW50PlxuXHRcdFx0XHRcdFx0XHRcdCkuZmluZCgnI213LV9hZGRUZXh0LXByZXZpZXctbG9hZGluZycpO1xuXHRcdFx0XHRcdFx0XHRcdCRhZGRUYXJnZXQuaHRtbChjaGVja1BhcnNlRWxlbWVudC5odG1sKCkpO1xuXHRcdFx0XHRcdFx0XHRcdG13Lmhvb2soJ3dpa2lwYWdlLmNvbnRlbnQnKS5maXJlKCRhZGRUYXJnZXQpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIHt9XG5cdFx0fVxuXHR9O1xuXG5cdC8qIOeoi+W6j+i/m+WFpeeCuSAqL1xuXHQvLyDnu5npobXpnaLmt7vliqDpooTop4hcblx0Y29uc3QgbXdBZGRQcmV2aWV3ID0gKCk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0IGN1cnJlbnRQYWdlTmFtZTogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpO1xuXHRcdGNvbnN0ICRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PiA9ICQoJ2JvZHknKTtcblx0XHQvLyDpooTop4jmqKHlvI/lj6rpgILnlKjkuo7ku6XkuIvpobXpnaLlhoXlrrnmqKHlnotcblx0XHRpZiAoY2hlY2tNd0NvbmZpZygnd2dQYWdlQ29udGVudE1vZGVsJywgWydqYXZhc2NyaXB0JywgJ2pzJywgJ2pzb24nLCAndGV4dCcsICdjc3MnLCAnc2FuaXRpemVkLWNzcyddKSkge1xuXHRcdFx0Ly8g5qih5byPMe+8mumhtemdoumihOiniFxuXHRcdFx0aWYgKCRlbGVtZW50RXhpc3QoJy5wcmV2aWV3bm90ZScpKSB7XG5cdFx0XHRcdC8vIOajgOafpeaYr+WQpuS4uumihOiniOaooeW8j1xuXHRcdFx0XHQvLyDpooTop4jmnInlj6/og73mmK/lnKjpooTop4jlhbbku5bmnaHnm65cblx0XHRcdFx0Y29uc3QgJHByZXZpZXdTZWxlY3RvcjogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnLnByZXZpZXdub3RlIC53YXJuaW5nYm94ID4gcCA+IGIgYScpO1xuXHRcdFx0XHRpZiAoJHByZXZpZXdTZWxlY3Rvci5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0Y29uc3QgcGF0aFBhdGg6IHN0cmluZyA9IGRlY29kZVVSSShcblx0XHRcdFx0XHRcdCRwcmV2aWV3U2VsZWN0b3IuYXR0cignaHJlZicpIHx8IG13LnV0aWwuZ2V0VXJsKGN1cnJlbnRQYWdlTmFtZSlcblx0XHRcdFx0XHQpLnJlcGxhY2UobmV3IFJlZ0V4cChgXlxcXFwvPyR7bXcudXRpbC5nZXRVcmwoJycpLm1hdGNoKC9bYS16XSsvKT8uWzBdID8/ICcnfVxcXFwvYCksICcnKTtcblxuXHRcdFx0XHRcdC8vIOiLpemihOiniOeahOmhtemdouW5tumdnuacrOi6q++8jOWImeS4jeaYvuekuumihOiniFxuXHRcdFx0XHRcdGlmIChwYXRoUGF0aCAhPT0gY3VycmVudFBhZ2VOYW1lKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3QgYWRkV2lraTogc3RyaW5nID0gbHVhQ2hlY2soKTtcblx0XHRcdFx0aWYgKGFkZFdpa2kudHJpbSgpKSB7XG5cdFx0XHRcdFx0Ly8g6Iul6Kej5p6Q57uT5p6c6Z2e56m65omN5pS+572u6aKE6KeIXG5cdFx0XHRcdFx0YWRkTG9hZGluZ05vdGljZSgpOyAvLyDmlL7nva7mj5DnpLrvvIzmj5DnpLrkvb/nlKjogIXnrYnlvoVBSkFYXG5cdFx0XHRcdFx0dm9pZCBtd0FkZFdpa2lUZXh0KGFkZFdpa2ksIGN1cnJlbnRQYWdlTmFtZSwgdHJ1ZSk7IC8vIOiLpeWPluW+lyBfYWRkVGV4dCDliJnmmL7npLrpooTop4hcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICghJGVsZW1lbnRFeGlzdCgnLm13LV9hZGRUZXh0LWNvbnRlbnQnKSAmJiBjaGVja013Q29uZmlnKCd3Z0FjdGlvbicsICd2aWV3JykpIHtcblx0XHRcdFx0Ly8g5qih5byPMu+8muS4jeaUr+aMgeaYvuekuueahOeJueauiumhtemdolxuXHRcdFx0XHQvLyDnu4/mn6XvvIzkuI3mraLmmK/mqKHmnb/moLflvI/vvIzmiYDmnInmnKrltYzlhaUnI213LWNsZWFyeW91cmNhY2hlJ+eahOmhtemdoueahuaXoOazleato+W4uOaYvuekulxuXHRcdFx0XHRpZiAoIW5lZWRQcmV2aWV3KCkpIHtcblx0XHRcdFx0XHRyZXR1cm47IC8vIOayoeaciemihOiniOW/heimgeaXtu+8jOebtOaOpeWBnOatoueoi+W6j++8jOS4jee7p+e7reWIpOaWre+8jOS7peaPkOmrmOaViOeOh1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICgkZWxlbWVudEV4aXN0KCcjbXctY2xlYXJ5b3VyY2FjaGUnKSkge1xuXHRcdFx0XHRcdC8vIOiLpeW3suaciSNtdy1jbGVhcnlvdXJjYWNoZeWImeWFiOa4heaOie+8jOWQpuWImeS8muWHuueOsOS4pOS4qk1lZGlhV2lraTpDbGVhcnlvdXJjYWNoZVxuXHRcdFx0XHRcdCRib2R5LmZpbmQoJyNtdy1jbGVhcnlvdXJjYWNoZScpLmh0bWwoJycpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghJGVsZW1lbnRFeGlzdCgnI3dwVGV4dGJveDEnKSkge1xuXHRcdFx0XHRcdC8vIOmdnue8lui+keaooeW8j+aJjeaJp+ihjCAo6aKE6KeI5L2/55So5LiK5pa555qEaWbljLrlnZcpXG5cdFx0XHRcdFx0YWRkTG9hZGluZ05vdGljZSgpOyAvLyDmlL7nva7mj5DnpLrvvIzmj5DnpLrkvb/nlKjogIXnrYnlvoVBSkFYXG5cdFx0XHRcdFx0dm9pZCBtd0FwcGx5UmV2aXNpb24obXcuY29uZmlnLmdldCgnd2dSZXZpc2lvbklkJyksIGN1cnJlbnRQYWdlTmFtZSk7IC8vIOS4uuS6huiuqeWOhuWPsueJiOacrOato+W4uOaYvuekuu+8jOS9v+eUqHdnUmV2aXNpb25JZOWPluW+l+WGheWuuVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKCRlbGVtZW50RXhpc3QoJyNtdy1yZXZpc2lvbi1pbmZvJykgJiYgY2hlY2tNd0NvbmZpZygnd2dBY3Rpb24nLCAndmlldycpKSB7XG5cdFx0XHRcdC8vIOaooeW8jzPvvJrpobXpnaLljoblj7LniYjmnKzmo4Dop4bvvJrlpoLpnIDlpI3mn6XnmoTpobnnm67kuLrpobXpnaLljoblj7LniYjmnKzvvIzmnKzlt6Xlhbfmj5DkvpvpobXpnaLljoblj7LniYjmnKzlhoXlrrnmmL7npLrmlK/mjIFcblx0XHRcdFx0Ly8g5pyJ5bWM5YWlJyNtdy1jbGVhcnlvdXJjYWNoZSfnmoTpobXpnaLnmoTljoblj7LniYjmnKzkvJrlj6rog73mmL7npLrmnIDmlrDniYjnmoQgX2FkZFRleHQg5Zug5q2k5omn6KGM5L+u5q2jXG5cdFx0XHRcdGlmICghJGVsZW1lbnRFeGlzdCgnI3dwVGV4dGJveDEnKSkge1xuXHRcdFx0XHRcdC8vIOmdnue8lui+keaooeW8j+aJjeaJp+ihjCAo6aKE6KeI5L2/55So5LiK5pa555qEaWbljLrlnZcpXG5cdFx0XHRcdFx0JGJvZHkuZmluZCgnI213LWNsZWFyeW91cmNhY2hlJykuaHRtbCgkbm90aWNlTG9hZGluZyk7IC8vIOW3ruW8guaooeW8jyjlkKvmo4DpmIXkv67orqLniYjmnKzliKDpmaQp55qE5o+S5YWl54K55LiN5ZCMXG5cdFx0XHRcdFx0dm9pZCBtd0FwcGx5UmV2aXNpb24obXcuY29uZmlnLmdldCgnd2dSZXZpc2lvbklkJyksIGN1cnJlbnRQYWdlTmFtZSk7IC8vIOS4uuS6huiuqeeJueWumueJiOacrOato+W4uOaYvuekuu+8jOS9v+eUqHdnUmV2aXNpb25JZOWPluW+l+WGheWuuVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZW1vdmVMb2FkaW5nTm90aWNlKCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChjaGVja013Q29uZmlnKCd3Z1BhZ2VDb250ZW50TW9kZWwnLCBbJ3NjcmlidW50bycsICdsdWEnXSkpIHtcblx0XHRcdC8vIOaooeWdl+mihOiniOWKn+iDvVxuXHRcdFx0aWYgKCFuZWVkUHJldmlldygpKSB7XG5cdFx0XHRcdHJldHVybjsgLy8g5rKh5pyJ6aKE6KeI5b+F6KaB5pe277yM55u05o6l5YGc5q2i56iL5bqP77yM5LiN57un57ut5Yik5pat77yM5Lul5o+Q6auY5pWI546HXG5cdFx0XHR9XG5cdFx0XHRpZiAoXG5cdFx0XHRcdCRlbGVtZW50RXhpc3QoJyN3cFRleHRib3gxJykgJiZcblx0XHRcdFx0JGVsZW1lbnRFeGlzdCgndGFibGUuZGlmZicpICYmXG5cdFx0XHRcdCEkZWxlbWVudEV4aXN0KCcucHJldmlld25vdGUnKSAmJlxuXHRcdFx0XHQhY2hlY2tNd0NvbmZpZygnd2dBY3Rpb24nLCAndmlldycpXG5cdFx0XHQpIHtcblx0XHRcdFx0JCgkbm90aWNlTG9hZGluZykuaW5zZXJ0QWZ0ZXIoJyN3aWtpRGlmZicpO1xuXHRcdFx0XHR2b2lkIG13QWRkTHVhVGV4dCgoJGJvZHkuZmluZCgnI3dwVGV4dGJveDEnKS52YWwoKSB8fCAnJykudG9TdHJpbmcoKSwgY3VycmVudFBhZ2VOYW1lLCB0cnVlKTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKCRlbGVtZW50RXhpc3QoJy5tdy11bmRlbGV0ZS1yZXZpc2lvbicpKSB7XG5cdFx0XHQvLyDmqKHlvI8077ya5bey5Yig6aG16Z2i6aKE6KeIXG5cdFx0XHQvLyDlt7LliKDlhoXlrrnpobXpnaLmmK/nibnmrorpobXpnaLvvIzml6Dms5XnlKjluLjop4TmlrnlvI/liKTmlq3pobXpnaLlhoXlrrnmqKHlnotcblx0XHRcdGlmICghbmVlZFByZXZpZXcoKSkge1xuXHRcdFx0XHRyZXR1cm47IC8vIOayoeaciemihOiniOW/heimgeaXtu+8jOebtOaOpeWBnOatoueoi+W6j++8jOS4jee7p+e7reWIpOaWre+8jOS7peaPkOmrmOaViOeOh1xuXHRcdFx0fVxuXHRcdFx0aWYgKCRlbGVtZW50RXhpc3QoWycubXctaGlnaGxpZ2h0JywgJ3ByZScsICcubXctanNvbiddKSkge1xuXHRcdFx0XHQvLyDnoa7orqTmraPlnKjpooTop4jlt7LliKDlhoXlrrlcblx0XHRcdFx0Y29uc3QgJHRyeUdldFdpa2kgPSAoJGJvZHkuZmluZCgndGV4dGFyZWEnKS52YWwoKSB8fCAnJykudG9TdHJpbmcoKTsgLy8g5bCd6K+V5Y+W5b6X5bey5Yig5YaF5a655rqQ5Luj56CBXG5cdFx0XHRcdGxldCB0cnlBZGRXaWtpOiBzdHJpbmcgPSBsdWFHZXRKU09Od2lraXRleHQoJHRyeUdldFdpa2kpO1xuXHRcdFx0XHRpZiAodHJ5QWRkV2lraS50cmltKCkgPT09ICcnKSB7XG5cdFx0XHRcdFx0dHJ5QWRkV2lraSA9IGx1YUdldENTU3dpa2l0ZXh0KCR0cnlHZXRXaWtpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodHJ5QWRkV2lraS50cmltKCkgIT09ICcnKSB7XG5cdFx0XHRcdFx0Ly8g6Iul5Y+W5b6XIF9hZGRUZXh0IOWImeaYvuekuumihOiniFxuXHRcdFx0XHRcdGFkZExvYWRpbmdOb3RpY2UoKTtcblx0XHRcdFx0XHR2b2lkIG13QWRkV2lraVRleHQodHJ5QWRkV2lraSwgbXcuY29uZmlnLmdldCgnd2dSZWxldmFudFBhZ2VOYW1lJyksIHRydWUpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKC9tb2R1bGVbIF9dd2lraXRleHQuKl9hZGR0ZXh0L2kudGVzdCgkYm9keS5maW5kKCcubXctcGFyc2VyLW91dHB1dCcpLnRleHQoKSkpIHtcblx0XHRcdFx0XHQvLyDlsJ3or5VMdWHop6PmnpBcblx0XHRcdFx0XHQvLyDmnKzlip/og73nm67liY3mtYvor5XmraPluLjov5DkvZxcblx0XHRcdFx0XHQvLyDoi6Xlk6rlpKnpooTop4jlj4jlpLHmlYjvvIzor7flj5bmtojms6jph4rkuIvmlrnpgqPooYxcblx0XHRcdFx0XHQvLyBtd0FkZEx1YVRleHQoJHRyeUdldFdpa2ksIG13LmNvbmZpZy5nZXQoXCJ3Z1JlbGV2YW50UGFnZU5hbWVcIiksIHRydWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmICghJGVsZW1lbnRFeGlzdCgnLm13LWVkaXRub3RpY2UnKSAmJiBjaGVja013Q29uZmlnKCd3Z0Nhbm9uaWNhbE5hbWVzcGFjZScsICdzcGVjaWFsJykpIHtcblx0XHRcdC8vIOiLpeeJueauiumhtemdoue8uuS5j+e8lui+keaPkOekuu+8jOWImeihpeS4iue8lui+keaPkOekuiAo6Iul5a2Y5ZyoKVxuXHRcdFx0Y29uc3QgcGFnZW5hbWU6IHN0cmluZyB8IGZhbHNlID0gbXcuY29uZmlnLmdldCgnd2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUnKTtcblx0XHRcdGNvbnN0IHBhZ2VTdWJOYW1lOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJykucmVwbGFjZSgvc3BlY2lhbDpbXi9dKy9pLCAnJyk7XG5cdFx0XHRpZiAocGFnZW5hbWUgIT09IGZhbHNlICYmIHBhZ2VuYW1lICE9PSBudWxsICYmIHBhZ2VuYW1lLnRvU3RyaW5nKCkudHJpbSgpICE9PSAnJykge1xuXHRcdFx0XHRjb25zdCBmdWxscGFnZW5hbWU6IHN0cmluZyA9IGAke213LmNvbmZpZy5nZXQoJ3dnQ2Fub25pY2FsTmFtZXNwYWNlJyl9OiR7cGFnZW5hbWV9YDtcblx0XHRcdFx0dm9pZCBtd0FwcGx5Tm90aWNlKGZ1bGxwYWdlbmFtZSwgcGFnZVN1Yk5hbWUpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmVMb2FkaW5nTm90aWNlKCk7IC8vIOmDveS4jeaYr+eahOaDheWGteWImeS4jeaYvuekuumihOiniFxuXHRcdH1cblx0fTtcblxuXHRpZiAobXcuY29uZmlnLmdldCgnd2dJc1NwZWNpYWxXaWtpdGV4dFByZXZpZXcnKSAhPT0gdHJ1ZSkge1xuXHRcdC8vIOS4gOmhteWPqui3keS4gOasoemihOiniFxuXHRcdC8vIOmBv+WFjeWwj+W3peWFt+mHjeWkjeWuieijheWGkuWHuuS4gOWkp+WghumihOiniFxuXHRcdC8vIOagh+iusOmihOiniOW3sui3kei/h1xuXHRcdG13LmNvbmZpZy5zZXQoJ3dnSXNTcGVjaWFsV2lraXRleHRQcmV2aWV3JywgdHJ1ZSk7XG5cdFx0Ly8g5omn6KGM6aKE6KeIXG5cdFx0bXdBZGRQcmV2aWV3KCk7XG5cdFx0Ly8g5qOA5p+l5rWL6K+V5qC35L6LXG5cdFx0dm9pZCB3aWtpdGV4dFByZXZpZXdUZXN0Y2FzZSh0cnVlKTtcblx0fVxufTtcblxuJChwcmV2aWV3VG9vbCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7O0FBQUE7QUFBQSx3RkFBQUEsU0FBQTtBQUFBO0FBQ0EsUUFBSSxRQUFRLFNBQVUsSUFBSTtBQUN4QixhQUFPLE1BQU0sR0FBRyxTQUFTLFFBQVE7QUFBQSxJQUNuQztBQUdBLElBQUFBLFFBQU87QUFBQSxJQUVMLE1BQU0sT0FBTyxjQUFjLFlBQVksVUFBVSxLQUNqRCxNQUFNLE9BQU8sVUFBVSxZQUFZLE1BQU07QUFBQSxJQUV6QyxNQUFNLE9BQU8sUUFBUSxZQUFZLElBQUksS0FDckMsTUFBTSxPQUFPLFVBQVUsWUFBWSxNQUFNLEtBQ3pDLE1BQU0sT0FBTyxXQUFRLFlBQVksT0FBSTtBQUFBLElBRXBDLDJCQUFZO0FBQUUsYUFBTztBQUFBLElBQU0sRUFBRyxLQUFLLFNBQVMsYUFBYSxFQUFFO0FBQUE7QUFBQTs7O0FDZjlEO0FBQUEsdUZBQUFDLFNBQUE7QUFBQTtBQUNBLElBQUFBLFFBQU8sVUFBVSxTQUFVLE1BQU07QUFDL0IsVUFBSTtBQUNGLGVBQU8sQ0FBQyxDQUFDLEtBQUs7QUFBQSxNQUNoQixTQUFTLE9BQU87QUFDZCxlQUFPO0FBQUEsTUFDVDtBQUFBLElBQ0Y7QUFBQTtBQUFBOzs7QUNQQTtBQUFBLDZGQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLFFBQVE7QUFHWixJQUFBQSxRQUFPLFVBQVUsQ0FBQyxNQUFNLFdBQVk7QUFFbEMsYUFBTyxPQUFPLGVBQWUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxLQUFLLFdBQVk7QUFBRSxlQUFP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dWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAibW9kdWxlIiwgImdsb2JhbCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbCIsICJTeW1ib2wiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgImRvY3VtZW50IiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIlR5cGVFcnJvciIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICIkIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAid2lraVRleHRLZXkiLCAibHVhQWRkVGV4dCIsICJpbnB1dFN0ciIsICJuZXdTdHIiLCAiX2VzY2FwZSIsICJpbnB1dFN0cmluZyIsICJ0ZXh0IiwgImVzY2FwZVN0ciIsICJKU09OIiwgInBhcnNlIiwgImNvbmNhdCIsICJzdHJpbmdpZnkiLCAidG9TdHJpbmciLCAicmVwbGFjZSIsICJsdWFHZXRTdHJpbmciLCAic3RyIiwgInRlc3RTdHJBcnJheSIsICJleGVjIiwgInRlc3RTdHIiLCAic2xpY2UiLCAiTWF0aCIsICJtYXgiLCAibGVuZ3RoIiwgInRyaW1DaGVjayIsICJ0cmltIiwgImZpcnN0Q2hhciIsICJjaGFyQXQiLCAiYXQiLCAibHVhR2V0Q29udGVudFRleHQiLCAid2lraXRleHQiLCAiUmVnRXhwIiwgInRlbXBUZXh0IiwgImx1YUdldE9ialRleHQiLCAibHVhR2V0Q1NTd2lraXRleHQiLCAiXyRib2R5JGZpbmQkdmFsIiwgIiRib2R5IiwgIiQiLCAiY3NzVGV4dCIsICJmaW5kIiwgInZhbCIsICJsdWFHZXRKU3dpa2l0ZXh0IiwgIl9kb2N1bWVudCRxdWVyeVNlbGVjdCIsICJqc1RleHQiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJ2YWx1ZSIsICJsdWFHZXRKU09Od2lraXRleHQiLCAiXyRib2R5JGZpbmQkdmFsMiIsICJKU09OVGV4dCIsICJqc29uRGF0YSIsICJfaSIsICJfT2JqZWN0JGtleXMiLCAiT2JqZWN0IiwgImtleXMiLCAia2V5IiwgInYiLCAidGVzdCIsICJwcm9wIiwgImhhc093biIsICJ0ZXN0QXJyViIsICJsdWFDaGVjayIsICJjb250ZW50TW9kZWwiLCAiY29udGVudE1vZGVsVG9Mb3dlckNhc2UiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJ0b0xvd2VyQ2FzZSIsICJpbnB1dFN0cl8iLCAicHJldmlld1Rvb2wiLCAiYXBpIiwgImluaXRNd0FwaSIsICIkbm90aWNlQWRkVGV4dCIsICIkbm90aWNlTG9hZGluZyIsICJ3aW5kb3ciLCAid2dVTFMiLCAiJG5vdGljZUZhaWwiLCAiJGVsZW1lbnRFeGlzdCIsICJzZWxlY3RvcnMiLCAic2VsZWN0b3JBcnJheSIsICJBcnJheSIsICJpc0FycmF5IiwgImVsZUNvdW50IiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJzZWxlY3RvciIsICIkc2VsZWN0b3IiLCAiZXJyIiwgImUiLCAiZiIsICJjaGVja013Q29uZmlnIiwgImNoZWNrVGFyZ2V0IiwgIm13Q29uZmlncyIsICJtd0NvbmZpZ0RhdGEiLCAiU3RyaW5nIiwgIm13Q29uZmlnQXJyYXkiLCAiaW5jbHVkZXMiLCAiZ2V0TGFuZ3VhZ2UiLCAibGFuZyIsICJhZGRQYXJzZWRXaWtpdGV4dCIsICJwYXJzZWRXaWtpdGV4dCIsICIkaHRtbE9iaiIsICIkZWxlbWVudCIsICJodG1sIiwgImhvb2siLCAiZmlyZSIsICJpbnNlcnRBZnRlciIsICJpbnNlcnRCZWZvcmUiLCAic2V0SHRtbCIsICIkaHRtbENvbnRlbnQiLCAiYWRkTG9hZGluZ05vdGljZSIsICJsb2FkaW5nRmFpbE5vdGljZSIsICJyZW1vdmVMb2FkaW5nTm90aWNlIiwgIm5lZWRQcmV2aWV3IiwgImRvY3VtZW50RWxlbWVudCIsICJpbm5lckhUTUwiLCAic2VhcmNoIiwgIm13QWRkV2lraVRleHQiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJ3aWtpVGV4dCIsICJwYWdlbmFtZSIsICJpc1ByZXZpZXciLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJ0aXRsZSIsICJjb250ZW50bW9kZWwiLCAidXNlbGFuZyIsICJ1c2Vza2luIiwgInByZXZpZXciLCAiZGlzYWJsZWVkaXRzZWN0aW9uIiwgImRhdGEiLCAicG9zdCIsICJwYXJzZWRXaWtpIiwgIl94IiwgIl94MiIsICJfeDMiLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgIm13QWRkTHVhVGV4dCIsICJfcmVmMiIsICJjYWxsQmFjayIsICJ0ZW1wTW9kdWxlTmFtZSIsICJtb2R1bGVDYWxsIiwgInRlbXBsYXRlc2FuZGJveHRpdGxlIiwgInRlbXBsYXRlc2FuZGJveHRleHQiLCAidGVtcGxhdGVzYW5kYm94Y29udGVudG1vZGVsIiwgInRlbXBsYXRlc2FuZGJveGNvbnRlbnRmb3JtYXQiLCAiX3g0IiwgIl94NSIsICJfeDYiLCAiX3g3IiwgIm13QXBwbHlSZXZpc2lvbiIsICJfcmVmMyIsICJfcmV2aXNpb25JZCIsICJjdXJyZW50UGFnZU5hbWUiLCAib2xkaWQiLCAicGFnZUNvbnRlbnQiLCAiX3g4IiwgIl94OSIsICJtd0FwcGx5Tm90aWNlIiwgIl9yZWY0IiwgInBhZ2VTdWJOYW1lIiwgIl94MTAiLCAiX3gxMSIsICJ3aWtpdGV4dFByZXZpZXdUZXN0Y2FzZSIsICJfcmVmNSIsICIkdGVzdGNhc2VMaXN0IiwgInRlc3RjYXNlRGF0YUxpc3QiLCAiaSIsICJ0ZXN0Y2FzZUl0ZW0iLCAiY29kZUl0IiwgImNvZGVJdDAiLCAiY29kZUl0Q2xhc3MiLCAiYXR0ciIsICJjb2RlSWQiLCAibG9hZEluZGV4IiwgInB1c2giLCAiZWxlbWVudCIsICJjb2RlIiwgInBhY2thZ2VXaWtpdGV4dCIsICJfaTIiLCAiX09iamVjdCRlbnRyaWVzIiwgImVudHJpZXMiLCAiX2tleSIsICJpdGVtRWxlbWVudCIsICJhZGRXaWtpIiwgInByZXBlbmQiLCAiJHBhcnNlZEVsZW1lbnQiLCAiX2kzIiwgIl9PYmplY3QkZW50cmllczIiLCAiY2hlY2tQYXJzZUVsZW1lbnQiLCAiJGFkZFRhcmdldCIsICJfeDEyIiwgIm13QWRkUHJldmlldyIsICIkcHJldmlld1NlbGVjdG9yIiwgIl9tdyR1dGlsJGdldFVybCRtYXRjaCIsICJfbXckdXRpbCRnZXRVcmwkbWF0Y2gyIiwgInBhdGhQYXRoIiwgImRlY29kZVVSSSIsICJ1dGlsIiwgImdldFVybCIsICJtYXRjaCIsICIkdHJ5R2V0V2lraSIsICJ0cnlBZGRXaWtpIiwgImZ1bGxwYWdlbmFtZSIsICJzZXQiXQp9Cg==

})();

/* </nowiki> */

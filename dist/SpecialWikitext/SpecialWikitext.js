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
  var _$body$find$val2;
  let wikitext = "";
  const $body = $("body");
  const jsText = inputStr || ((_$body$find$val2 = $body.find("#wpTextbox1").val()) === null || _$body$find$val2 === void 0 ? void 0 : _$body$find$val2.toString()) || "";
  if (!jsText.trim()) {
    return "";
  }
  wikitext = luaAddText(wikitext, luaGetObjText(jsText), true);
  return wikitext;
};
var luaGetJSONwikitext = (inputStr) => {
  var _$body$find$val3;
  let wikitext = "";
  const $body = $("body");
  const JSONText = inputStr || ((_$body$find$val3 = $body.find("#wpTextbox1").val()) === null || _$body$find$val3 === void 0 ? void 0 : _$body$find$val3.toString()) || "";
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
  const api = (0, import_ext_gadget.initMwApi)("Qiuwen/1.1 (SpecialWikitext/1.1; ".concat(mw.config.get("wgWikiID"), ")"));
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mYWlscy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Rlc2NyaXB0b3JzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1jYWxsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NsYXNzb2YtcmF3LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtY2FsbGFibGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nZXQtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXN5bWJvbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RyeS10by1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWNhbGxhYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1Zy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1uYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9tYXRoLXRydW5jLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtYXJyYXkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1zZXQtbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9lcy1ub3QtZXhjZWVkLXNhZmUtaW50ZWdlci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5wdXNoLmpzIiwgInNyYy9TcGVjaWFsV2lraXRleHQvU3BlY2lhbFdpa2l0ZXh0LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIndXNlIHN0cmljdCc7XG52YXIgY2hlY2sgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICYmIGl0Lk1hdGggPT09IE1hdGggJiYgaXQ7XG59O1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxubW9kdWxlLmV4cG9ydHMgPVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZ2xvYmFsLXRoaXMgLS0gc2FmZVxuICBjaGVjayh0eXBlb2YgZ2xvYmFsVGhpcyA9PSAnb2JqZWN0JyAmJiBnbG9iYWxUaGlzKSB8fFxuICBjaGVjayh0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdykgfHxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAtLSBzYWZlXG4gIGNoZWNrKHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYpIHx8XG4gIGNoZWNrKHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsKSB8fFxuICBjaGVjayh0eXBlb2YgdGhpcyA9PSAnb2JqZWN0JyAmJiB0aGlzKSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmMgLS0gZmFsbGJhY2tcbiAgKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pKCkgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBEZXRlY3QgSUU4J3MgaW5jb21wbGV0ZSBkZWZpbmVQcm9wZXJ0eSBpbXBsZW1lbnRhdGlvblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sIDEsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pWzFdICE9PSA3O1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWZ1bmN0aW9uLXByb3RvdHlwZS1iaW5kIC0tIHNhZmVcbiAgdmFyIHRlc3QgPSAoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9KS5iaW5kKCk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gdHlwZW9mIHRlc3QgIT0gJ2Z1bmN0aW9uJyB8fCB0ZXN0Lmhhc093blByb3BlcnR5KCdwcm90b3R5cGUnKTtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgY2FsbCA9IEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9CSU5EID8gY2FsbC5iaW5kKGNhbGwpIDogZnVuY3Rpb24gKCkge1xuICByZXR1cm4gY2FsbC5hcHBseShjYWxsLCBhcmd1bWVudHMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gTmFzaG9ybiB+IEpESzggYnVnXG52YXIgTkFTSE9STl9CVUcgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgJiYgISRwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHsgMTogMiB9LCAxKTtcblxuLy8gYE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGVgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QucHJvdG90eXBlLnByb3BlcnR5aXNlbnVtZXJhYmxlXG5leHBvcnRzLmYgPSBOQVNIT1JOX0JVRyA/IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKFYpIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGhpcywgVik7XG4gIHJldHVybiAhIWRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci5lbnVtZXJhYmxlO1xufSA6ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgY2FsbCA9IEZ1bmN0aW9uUHJvdG90eXBlLmNhbGw7XG52YXIgdW5jdXJyeVRoaXNXaXRoQmluZCA9IE5BVElWRV9CSU5EICYmIEZ1bmN0aW9uUHJvdG90eXBlLmJpbmQuYmluZChjYWxsLCBjYWxsKTtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfQklORCA/IHVuY3VycnlUaGlzV2l0aEJpbmQgOiBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY2FsbC5hcHBseShmbiwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG52YXIgdG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyh7fS50b1N0cmluZyk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBzdHJpbmdTbGljZSh0b1N0cmluZyhpdCksIDgsIC0xKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcbnZhciBzcGxpdCA9IHVuY3VycnlUaGlzKCcnLnNwbGl0KTtcblxuLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3Ncbm1vZHVsZS5leHBvcnRzID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyB0aHJvd3MgYW4gZXJyb3IgaW4gcmhpbm8sIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9yaGluby9pc3N1ZXMvMzQ2XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gISRPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKTtcbn0pID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjbGFzc29mKGl0KSA9PT0gJ1N0cmluZycgPyBzcGxpdChpdCwgJycpIDogJE9iamVjdChpdCk7XG59IDogJE9iamVjdDtcbiIsICIndXNlIHN0cmljdCc7XG4vLyB3ZSBjYW4ndCB1c2UganVzdCBgaXQgPT0gbnVsbGAgc2luY2Ugb2YgYGRvY3VtZW50LmFsbGAgc3BlY2lhbCBjYXNlXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLUlzSFRNTEREQS1pbnRlcm5hbC1zbG90LWFlY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID09PSBudWxsIHx8IGl0ID09PSB1bmRlZmluZWQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYFJlcXVpcmVPYmplY3RDb2VyY2libGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZXF1aXJlb2JqZWN0Y29lcmNpYmxlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXNOdWxsT3JVbmRlZmluZWQoaXQpKSB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJbmRleGVkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoaXQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1Jc0hUTUxEREEtaW50ZXJuYWwtc2xvdFxudmFyIGRvY3VtZW50QWxsID0gdHlwZW9mIGRvY3VtZW50ID09ICdvYmplY3QnICYmIGRvY3VtZW50LmFsbDtcblxuLy8gYElzQ2FsbGFibGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc2NhbGxhYmxlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9uby10eXBlb2YtdW5kZWZpbmVkIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBkb2N1bWVudEFsbCA9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudEFsbCAhPT0gdW5kZWZpbmVkID8gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJyB8fCBhcmd1bWVudCA9PT0gZG9jdW1lbnRBbGw7XG59IDogZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogaXNDYWxsYWJsZShpdCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgYUZ1bmN0aW9uID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBpc0NhbGxhYmxlKGFyZ3VtZW50KSA/IGFyZ3VtZW50IDogdW5kZWZpbmVkO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZXNwYWNlLCBtZXRob2QpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPCAyID8gYUZ1bmN0aW9uKGdsb2JhbFtuYW1lc3BhY2VdKSA6IGdsb2JhbFtuYW1lc3BhY2VdICYmIGdsb2JhbFtuYW1lc3BhY2VdW21ldGhvZF07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB1bmN1cnJ5VGhpcyh7fS5pc1Byb3RvdHlwZU9mKTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBuYXZpZ2F0b3IgIT0gJ3VuZGVmaW5lZCcgJiYgU3RyaW5nKG5hdmlnYXRvci51c2VyQWdlbnQpIHx8ICcnO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50Jyk7XG5cbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgRGVubyA9IGdsb2JhbC5EZW5vO1xudmFyIHZlcnNpb25zID0gcHJvY2VzcyAmJiBwcm9jZXNzLnZlcnNpb25zIHx8IERlbm8gJiYgRGVuby52ZXJzaW9uO1xudmFyIHY4ID0gdmVyc2lvbnMgJiYgdmVyc2lvbnMudjg7XG52YXIgbWF0Y2gsIHZlcnNpb247XG5cbmlmICh2OCkge1xuICBtYXRjaCA9IHY4LnNwbGl0KCcuJyk7XG4gIC8vIGluIG9sZCBDaHJvbWUsIHZlcnNpb25zIG9mIFY4IGlzbid0IFY4ID0gQ2hyb21lIC8gMTBcbiAgLy8gYnV0IHRoZWlyIGNvcnJlY3QgdmVyc2lvbnMgYXJlIG5vdCBpbnRlcmVzdGluZyBmb3IgdXNcbiAgdmVyc2lvbiA9IG1hdGNoWzBdID4gMCAmJiBtYXRjaFswXSA8IDQgPyAxIDogKyhtYXRjaFswXSArIG1hdGNoWzFdKTtcbn1cblxuLy8gQnJvd3NlckZTIE5vZGVKUyBgcHJvY2Vzc2AgcG9seWZpbGwgaW5jb3JyZWN0bHkgc2V0IGAudjhgIHRvIGAwLjBgXG4vLyBzbyBjaGVjayBgdXNlckFnZW50YCBldmVuIGlmIGAudjhgIGV4aXN0cywgYnV0IDBcbmlmICghdmVyc2lvbiAmJiB1c2VyQWdlbnQpIHtcbiAgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2goL0VkZ2VcXC8oXFxkKykvKTtcbiAgaWYgKCFtYXRjaCB8fCBtYXRjaFsxXSA+PSA3NCkge1xuICAgIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9DaHJvbWVcXC8oXFxkKykvKTtcbiAgICBpZiAobWF0Y2gpIHZlcnNpb24gPSArbWF0Y2hbMV07XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2ZXJzaW9uO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLXN5bWJvbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZyAqL1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24nKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcblxudmFyICRTdHJpbmcgPSBnbG9iYWwuU3RyaW5nO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5c3ltYm9scyAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xubW9kdWxlLmV4cG9ydHMgPSAhIU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN5bWJvbCA9IFN5bWJvbCgnc3ltYm9sIGRldGVjdGlvbicpO1xuICAvLyBDaHJvbWUgMzggU3ltYm9sIGhhcyBpbmNvcnJlY3QgdG9TdHJpbmcgY29udmVyc2lvblxuICAvLyBgZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzYCBwb2x5ZmlsbCBzeW1ib2xzIGNvbnZlcnRlZCB0byBvYmplY3QgYXJlIG5vdCBTeW1ib2wgaW5zdGFuY2VzXG4gIC8vIG5iOiBEbyBub3QgY2FsbCBgU3RyaW5nYCBkaXJlY3RseSB0byBhdm9pZCB0aGlzIGJlaW5nIG9wdGltaXplZCBvdXQgdG8gYHN5bWJvbCsnJ2Agd2hpY2ggd2lsbCxcbiAgLy8gb2YgY291cnNlLCBmYWlsLlxuICByZXR1cm4gISRTdHJpbmcoc3ltYm9sKSB8fCAhKE9iamVjdChzeW1ib2wpIGluc3RhbmNlb2YgU3ltYm9sKSB8fFxuICAgIC8vIENocm9tZSAzOC00MCBzeW1ib2xzIGFyZSBub3QgaW5oZXJpdGVkIGZyb20gRE9NIGNvbGxlY3Rpb25zIHByb3RvdHlwZXMgdG8gaW5zdGFuY2VzXG4gICAgIVN5bWJvbC5zaGFtICYmIFY4X1ZFUlNJT04gJiYgVjhfVkVSU0lPTiA8IDQxO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tc3ltYm9sIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zeW1ib2wtY29uc3RydWN0b3ItZGV0ZWN0aW9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX1NZTUJPTFxuICAmJiAhU3ltYm9sLnNoYW1cbiAgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mJyk7XG52YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbm1vZHVsZS5leHBvcnRzID0gVVNFX1NZTUJPTF9BU19VSUQgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyICRTeW1ib2wgPSBnZXRCdWlsdEluKCdTeW1ib2wnKTtcbiAgcmV0dXJuIGlzQ2FsbGFibGUoJFN5bWJvbCkgJiYgaXNQcm90b3R5cGVPZigkU3ltYm9sLnByb3RvdHlwZSwgJE9iamVjdChpdCkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJFN0cmluZyA9IFN0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gJFN0cmluZyhhcmd1bWVudCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuICdPYmplY3QnO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgdHJ5VG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdHJ5LXRvLXN0cmluZycpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYEFzc2VydDogSXNDYWxsYWJsZShhcmd1bWVudCkgaXMgdHJ1ZWBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIGlmIChpc0NhbGxhYmxlKGFyZ3VtZW50KSkgcmV0dXJuIGFyZ3VtZW50O1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcih0cnlUb1N0cmluZyhhcmd1bWVudCkgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkJyk7XG5cbi8vIGBHZXRNZXRob2RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1nZXRtZXRob2Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFYsIFApIHtcbiAgdmFyIGZ1bmMgPSBWW1BdO1xuICByZXR1cm4gaXNOdWxsT3JVbmRlZmluZWQoZnVuYykgPyB1bmRlZmluZWQgOiBhQ2FsbGFibGUoZnVuYyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgT3JkaW5hcnlUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9yZGluYXJ5dG9wcmltaXRpdmVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBwcmVmKSB7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAocHJlZiA9PT0gJ3N0cmluZycgJiYgaXNDYWxsYWJsZShmbiA9IGlucHV0LnRvU3RyaW5nKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKGlzQ2FsbGFibGUoZm4gPSBpbnB1dC52YWx1ZU9mKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHByZWYgIT09ICdzdHJpbmcnICYmIGlzQ2FsbGFibGUoZm4gPSBpbnB1dC50b1N0cmluZykgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHRyeSB7XG4gICAgZGVmaW5lUHJvcGVydHkoZ2xvYmFsLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGdsb2JhbFtrZXldID0gdmFsdWU7XG4gIH0gcmV0dXJuIHZhbHVlO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcblxudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgZGVmaW5lR2xvYmFsUHJvcGVydHkoU0hBUkVELCB7fSk7XG5cbm1vZHVsZS5leHBvcnRzID0gc3RvcmU7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xudmFyIHN0b3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHt9KTtcbn0pKCd2ZXJzaW9ucycsIFtdKS5wdXNoKHtcbiAgdmVyc2lvbjogJzMuMzUuMCcsXG4gIG1vZGU6IElTX1BVUkUgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAxNC0yMDIzIERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJyxcbiAgbGljZW5zZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2Jsb2IvdjMuMzUuMC9MSUNFTlNFJyxcbiAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMnXG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbi8vIGBUb09iamVjdGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvb2JqZWN0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gJE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcblxudmFyIGhhc093blByb3BlcnR5ID0gdW5jdXJyeVRoaXMoe30uaGFzT3duUHJvcGVydHkpO1xuXG4vLyBgSGFzT3duUHJvcGVydHlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1oYXNvd25wcm9wZXJ0eVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1oYXNvd24gLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuaGFzT3duIHx8IGZ1bmN0aW9uIGhhc093bihpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eSh0b09iamVjdChpdCksIGtleSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxudmFyIGlkID0gMDtcbnZhciBwb3N0Zml4ID0gTWF0aC5yYW5kb20oKTtcbnZhciB0b1N0cmluZyA9IHVuY3VycnlUaGlzKDEuMC50b1N0cmluZyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnICsgKGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXkpICsgJylfJyArIHRvU3RyaW5nKCsraWQgKyBwb3N0Zml4LCAzNik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3ltYm9sLWNvbnN0cnVjdG9yLWRldGVjdGlvbicpO1xudmFyIFVTRV9TWU1CT0xfQVNfVUlEID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkJyk7XG5cbnZhciBTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyIFdlbGxLbm93blN5bWJvbHNTdG9yZSA9IHNoYXJlZCgnd2tzJyk7XG52YXIgY3JlYXRlV2VsbEtub3duU3ltYm9sID0gVVNFX1NZTUJPTF9BU19VSUQgPyBTeW1ib2xbJ2ZvciddIHx8IFN5bWJvbCA6IFN5bWJvbCAmJiBTeW1ib2wud2l0aG91dFNldHRlciB8fCB1aWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgaWYgKCFoYXNPd24oV2VsbEtub3duU3ltYm9sc1N0b3JlLCBuYW1lKSkge1xuICAgIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXSA9IE5BVElWRV9TWU1CT0wgJiYgaGFzT3duKFN5bWJvbCwgbmFtZSlcbiAgICAgID8gU3ltYm9sW25hbWVdXG4gICAgICA6IGNyZWF0ZVdlbGxLbm93blN5bWJvbCgnU3ltYm9sLicgKyBuYW1lKTtcbiAgfSByZXR1cm4gV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciBvcmRpbmFyeVRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZScpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbnZhciBUT19QUklNSVRJVkUgPSB3ZWxsS25vd25TeW1ib2woJ3RvUHJpbWl0aXZlJyk7XG5cbi8vIGBUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJpbWl0aXZlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnB1dCwgcHJlZikge1xuICBpZiAoIWlzT2JqZWN0KGlucHV0KSB8fCBpc1N5bWJvbChpbnB1dCkpIHJldHVybiBpbnB1dDtcbiAgdmFyIGV4b3RpY1RvUHJpbSA9IGdldE1ldGhvZChpbnB1dCwgVE9fUFJJTUlUSVZFKTtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKGV4b3RpY1RvUHJpbSkge1xuICAgIGlmIChwcmVmID09PSB1bmRlZmluZWQpIHByZWYgPSAnZGVmYXVsdCc7XG4gICAgcmVzdWx0ID0gY2FsbChleG90aWNUb1ByaW0sIGlucHV0LCBwcmVmKTtcbiAgICBpZiAoIWlzT2JqZWN0KHJlc3VsdCkgfHwgaXNTeW1ib2wocmVzdWx0KSkgcmV0dXJuIHJlc3VsdDtcbiAgICB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbiAgfVxuICBpZiAocHJlZiA9PT0gdW5kZWZpbmVkKSBwcmVmID0gJ251bWJlcic7XG4gIHJldHVybiBvcmRpbmFyeVRvUHJpbWl0aXZlKGlucHV0LCBwcmVmKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xudmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXN5bWJvbCcpO1xuXG4vLyBgVG9Qcm9wZXJ0eUtleWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJvcGVydHlrZXlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBrZXkgPSB0b1ByaW1pdGl2ZShhcmd1bWVudCwgJ3N0cmluZycpO1xuICByZXR1cm4gaXNTeW1ib2woa2V5KSA/IGtleSA6IGtleSArICcnO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgZG9jdW1lbnQgPSBnbG9iYWwuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBFWElTVFMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBFWElTVFMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcblxuLy8gVGhhbmtzIHRvIElFOCBmb3IgaXRzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3JlYXRlRWxlbWVudCgnZGl2JyksICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfVxuICB9KS5hICE9PSA3O1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0luZGV4ZWRPYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhc093bihPLCBQKSkgcmV0dXJuIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcighY2FsbChwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZS5mLCBPLCBQKSwgT1tQXSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbi8vIFY4IH4gQ2hyb21lIDM2LVxuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzMzNFxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0sICdwcm90b3R5cGUnLCB7XG4gICAgdmFsdWU6IDQyLFxuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KS5wcm90b3R5cGUgIT09IDQyO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgJFN0cmluZyA9IFN0cmluZztcbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgQXNzZXJ0OiBUeXBlKGFyZ3VtZW50KSBpcyBPYmplY3RgXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoaXNPYmplY3QoYXJndW1lbnQpKSByZXR1cm4gYXJndW1lbnQ7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKCRTdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgYW4gb2JqZWN0Jyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG52YXIgVjhfUFJPVE9UWVBFX0RFRklORV9CVUcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdjgtcHJvdG90eXBlLWRlZmluZS1idWcnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleScpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBFTlVNRVJBQkxFID0gJ2VudW1lcmFibGUnO1xudmFyIENPTkZJR1VSQUJMRSA9ICdjb25maWd1cmFibGUnO1xudmFyIFdSSVRBQkxFID0gJ3dyaXRhYmxlJztcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0eWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0eVxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgPyBWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA/IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKHR5cGVvZiBPID09PSAnZnVuY3Rpb24nICYmIFAgPT09ICdwcm90b3R5cGUnICYmICd2YWx1ZScgaW4gQXR0cmlidXRlcyAmJiBXUklUQUJMRSBpbiBBdHRyaWJ1dGVzICYmICFBdHRyaWJ1dGVzW1dSSVRBQkxFXSkge1xuICAgIHZhciBjdXJyZW50ID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKTtcbiAgICBpZiAoY3VycmVudCAmJiBjdXJyZW50W1dSSVRBQkxFXSkge1xuICAgICAgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gICAgICBBdHRyaWJ1dGVzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IENPTkZJR1VSQUJMRSBpbiBBdHRyaWJ1dGVzID8gQXR0cmlidXRlc1tDT05GSUdVUkFCTEVdIDogY3VycmVudFtDT05GSUdVUkFCTEVdLFxuICAgICAgICBlbnVtZXJhYmxlOiBFTlVNRVJBQkxFIGluIEF0dHJpYnV0ZXMgPyBBdHRyaWJ1dGVzW0VOVU1FUkFCTEVdIDogY3VycmVudFtFTlVNRVJBQkxFXSxcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlXG4gICAgICB9O1xuICAgIH1cbiAgfSByZXR1cm4gJGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xufSA6ICRkZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiAkZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIGtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0RGVzY3JpcHRvciA9IERFU0NSSVBUT1JTICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbnZhciBFWElTVFMgPSBoYXNPd24oRnVuY3Rpb25Qcm90b3R5cGUsICduYW1lJyk7XG4vLyBhZGRpdGlvbmFsIHByb3RlY3Rpb24gZnJvbSBtaW5pZmllZCAvIG1hbmdsZWQgLyBkcm9wcGVkIGZ1bmN0aW9uIG5hbWVzXG52YXIgUFJPUEVSID0gRVhJU1RTICYmIChmdW5jdGlvbiBzb21ldGhpbmcoKSB7IC8qIGVtcHR5ICovIH0pLm5hbWUgPT09ICdzb21ldGhpbmcnO1xudmFyIENPTkZJR1VSQUJMRSA9IEVYSVNUUyAmJiAoIURFU0NSSVBUT1JTIHx8IChERVNDUklQVE9SUyAmJiBnZXREZXNjcmlwdG9yKEZ1bmN0aW9uUHJvdG90eXBlLCAnbmFtZScpLmNvbmZpZ3VyYWJsZSkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgRVhJU1RTOiBFWElTVFMsXG4gIFBST1BFUjogUFJPUEVSLFxuICBDT05GSUdVUkFCTEU6IENPTkZJR1VSQUJMRVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHN0b3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xuXG52YXIgZnVuY3Rpb25Ub1N0cmluZyA9IHVuY3VycnlUaGlzKEZ1bmN0aW9uLnRvU3RyaW5nKTtcblxuLy8gdGhpcyBoZWxwZXIgYnJva2VuIGluIGBjb3JlLWpzQDMuNC4xLTMuNC40YCwgc28gd2UgY2FuJ3QgdXNlIGBzaGFyZWRgIGhlbHBlclxuaWYgKCFpc0NhbGxhYmxlKHN0b3JlLmluc3BlY3RTb3VyY2UpKSB7XG4gIHN0b3JlLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb25Ub1N0cmluZyhpdCk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RvcmUuaW5zcGVjdFNvdXJjZTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIFdlYWtNYXAgPSBnbG9iYWwuV2Vha01hcDtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0NhbGxhYmxlKFdlYWtNYXApICYmIC9uYXRpdmUgY29kZS8udGVzdChTdHJpbmcoV2Vha01hcCkpO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xuXG52YXIga2V5cyA9IHNoYXJlZCgna2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIGtleXNba2V5XSB8fCAoa2V5c1trZXldID0gdWlkKGtleSkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfV0VBS19NQVAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2Vhay1tYXAtYmFzaWMtZGV0ZWN0aW9uJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcbnZhciBzaGFyZWRLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLWtleScpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcblxudmFyIE9CSkVDVF9BTFJFQURZX0lOSVRJQUxJWkVEID0gJ09iamVjdCBhbHJlYWR5IGluaXRpYWxpemVkJztcbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xudmFyIFdlYWtNYXAgPSBnbG9iYWwuV2Vha01hcDtcbnZhciBzZXQsIGdldCwgaGFzO1xuXG52YXIgZW5mb3JjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaGFzKGl0KSA/IGdldChpdCkgOiBzZXQoaXQsIHt9KTtcbn07XG5cbnZhciBnZXR0ZXJGb3IgPSBmdW5jdGlvbiAoVFlQRSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGl0KSB7XG4gICAgdmFyIHN0YXRlO1xuICAgIGlmICghaXNPYmplY3QoaXQpIHx8IChzdGF0ZSA9IGdldChpdCkpLnR5cGUgIT09IFRZUEUpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0luY29tcGF0aWJsZSByZWNlaXZlciwgJyArIFRZUEUgKyAnIHJlcXVpcmVkJyk7XG4gICAgfSByZXR1cm4gc3RhdGU7XG4gIH07XG59O1xuXG5pZiAoTkFUSVZFX1dFQUtfTUFQIHx8IHNoYXJlZC5zdGF0ZSkge1xuICB2YXIgc3RvcmUgPSBzaGFyZWQuc3RhdGUgfHwgKHNoYXJlZC5zdGF0ZSA9IG5ldyBXZWFrTWFwKCkpO1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1zZWxmLWFzc2lnbiAtLSBwcm90b3R5cGUgbWV0aG9kcyBwcm90ZWN0aW9uICovXG4gIHN0b3JlLmdldCA9IHN0b3JlLmdldDtcbiAgc3RvcmUuaGFzID0gc3RvcmUuaGFzO1xuICBzdG9yZS5zZXQgPSBzdG9yZS5zZXQ7XG4gIC8qIGVzbGludC1lbmFibGUgbm8tc2VsZi1hc3NpZ24gLS0gcHJvdG90eXBlIG1ldGhvZHMgcHJvdGVjdGlvbiAqL1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgaWYgKHN0b3JlLmhhcyhpdCkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIHN0b3JlLnNldChpdCwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHN0b3JlLmdldChpdCkgfHwge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBzdG9yZS5oYXMoaXQpO1xuICB9O1xufSBlbHNlIHtcbiAgdmFyIFNUQVRFID0gc2hhcmVkS2V5KCdzdGF0ZScpO1xuICBoaWRkZW5LZXlzW1NUQVRFXSA9IHRydWU7XG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICBpZiAoaGFzT3duKGl0LCBTVEFURSkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShpdCwgU1RBVEUsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBoYXNPd24oaXQsIFNUQVRFKSA/IGl0W1NUQVRFXSA6IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaGFzT3duKGl0LCBTVEFURSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldCxcbiAgZ2V0OiBnZXQsXG4gIGhhczogaGFzLFxuICBlbmZvcmNlOiBlbmZvcmNlLFxuICBnZXR0ZXJGb3I6IGdldHRlckZvclxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIENPTkZJR1VSQUJMRV9GVU5DVElPTl9OQU1FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLW5hbWUnKS5DT05GSUdVUkFCTEU7XG52YXIgaW5zcGVjdFNvdXJjZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnNwZWN0LXNvdXJjZScpO1xudmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUnKTtcblxudmFyIGVuZm9yY2VJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5lbmZvcmNlO1xudmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldDtcbnZhciAkU3RyaW5nID0gU3RyaW5nO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG52YXIgcmVwbGFjZSA9IHVuY3VycnlUaGlzKCcnLnJlcGxhY2UpO1xudmFyIGpvaW4gPSB1bmN1cnJ5VGhpcyhbXS5qb2luKTtcblxudmFyIENPTkZJR1VSQUJMRV9MRU5HVEggPSBERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHkoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9LCAnbGVuZ3RoJywgeyB2YWx1ZTogOCB9KS5sZW5ndGggIT09IDg7XG59KTtcblxudmFyIFRFTVBMQVRFID0gU3RyaW5nKFN0cmluZykuc3BsaXQoJ1N0cmluZycpO1xuXG52YXIgbWFrZUJ1aWx0SW4gPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSwgbmFtZSwgb3B0aW9ucykge1xuICBpZiAoc3RyaW5nU2xpY2UoJFN0cmluZyhuYW1lKSwgMCwgNykgPT09ICdTeW1ib2woJykge1xuICAgIG5hbWUgPSAnWycgKyByZXBsYWNlKCRTdHJpbmcobmFtZSksIC9eU3ltYm9sXFwoKFteKV0qKVxcKS8sICckMScpICsgJ10nO1xuICB9XG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZ2V0dGVyKSBuYW1lID0gJ2dldCAnICsgbmFtZTtcbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5zZXR0ZXIpIG5hbWUgPSAnc2V0ICcgKyBuYW1lO1xuICBpZiAoIWhhc093bih2YWx1ZSwgJ25hbWUnKSB8fCAoQ09ORklHVVJBQkxFX0ZVTkNUSU9OX05BTUUgJiYgdmFsdWUubmFtZSAhPT0gbmFtZSkpIHtcbiAgICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5KHZhbHVlLCAnbmFtZScsIHsgdmFsdWU6IG5hbWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KTtcbiAgICBlbHNlIHZhbHVlLm5hbWUgPSBuYW1lO1xuICB9XG4gIGlmIChDT05GSUdVUkFCTEVfTEVOR1RIICYmIG9wdGlvbnMgJiYgaGFzT3duKG9wdGlvbnMsICdhcml0eScpICYmIHZhbHVlLmxlbmd0aCAhPT0gb3B0aW9ucy5hcml0eSkge1xuICAgIGRlZmluZVByb3BlcnR5KHZhbHVlLCAnbGVuZ3RoJywgeyB2YWx1ZTogb3B0aW9ucy5hcml0eSB9KTtcbiAgfVxuICB0cnkge1xuICAgIGlmIChvcHRpb25zICYmIGhhc093bihvcHRpb25zLCAnY29uc3RydWN0b3InKSAmJiBvcHRpb25zLmNvbnN0cnVjdG9yKSB7XG4gICAgICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5KHZhbHVlLCAncHJvdG90eXBlJywgeyB3cml0YWJsZTogZmFsc2UgfSk7XG4gICAgLy8gaW4gVjggfiBDaHJvbWUgNTMsIHByb3RvdHlwZXMgb2Ygc29tZSBtZXRob2RzLCBsaWtlIGBBcnJheS5wcm90b3R5cGUudmFsdWVzYCwgYXJlIG5vbi13cml0YWJsZVxuICAgIH0gZWxzZSBpZiAodmFsdWUucHJvdG90eXBlKSB2YWx1ZS5wcm90b3R5cGUgPSB1bmRlZmluZWQ7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgdmFyIHN0YXRlID0gZW5mb3JjZUludGVybmFsU3RhdGUodmFsdWUpO1xuICBpZiAoIWhhc093bihzdGF0ZSwgJ3NvdXJjZScpKSB7XG4gICAgc3RhdGUuc291cmNlID0gam9pbihURU1QTEFURSwgdHlwZW9mIG5hbWUgPT0gJ3N0cmluZycgPyBuYW1lIDogJycpO1xuICB9IHJldHVybiB2YWx1ZTtcbn07XG5cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWV4dGVuZC1uYXRpdmUgLS0gcmVxdWlyZWRcbkZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZyA9IG1ha2VCdWlsdEluKGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gaXNDYWxsYWJsZSh0aGlzKSAmJiBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpLnNvdXJjZSB8fCBpbnNwZWN0U291cmNlKHRoaXMpO1xufSwgJ3RvU3RyaW5nJyk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgbWFrZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWFrZS1idWlsdC1pbicpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywga2V5LCB2YWx1ZSwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcbiAgdmFyIHNpbXBsZSA9IG9wdGlvbnMuZW51bWVyYWJsZTtcbiAgdmFyIG5hbWUgPSBvcHRpb25zLm5hbWUgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubmFtZSA6IGtleTtcbiAgaWYgKGlzQ2FsbGFibGUodmFsdWUpKSBtYWtlQnVpbHRJbih2YWx1ZSwgbmFtZSwgb3B0aW9ucyk7XG4gIGlmIChvcHRpb25zLmdsb2JhbCkge1xuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2UgZGVmaW5lR2xvYmFsUHJvcGVydHkoa2V5LCB2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghb3B0aW9ucy51bnNhZmUpIGRlbGV0ZSBPW2tleV07XG4gICAgICBlbHNlIGlmIChPW2tleV0pIHNpbXBsZSA9IHRydWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2UgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihPLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiAhb3B0aW9ucy5ub25Db25maWd1cmFibGUsXG4gICAgICB3cml0YWJsZTogIW9wdGlvbnMubm9uV3JpdGFibGVcbiAgICB9KTtcbiAgfSByZXR1cm4gTztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuXG4vLyBgTWF0aC50cnVuY2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW1hdGgudHJ1bmNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1tYXRoLXRydW5jIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gTWF0aC50cnVuYyB8fCBmdW5jdGlvbiB0cnVuYyh4KSB7XG4gIHZhciBuID0gK3g7XG4gIHJldHVybiAobiA+IDAgPyBmbG9vciA6IGNlaWwpKG4pO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdHJ1bmMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWF0aC10cnVuYycpO1xuXG4vLyBgVG9JbnRlZ2VyT3JJbmZpbml0eWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvaW50ZWdlcm9yaW5maW5pdHlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBudW1iZXIgPSArYXJndW1lbnQ7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gIHJldHVybiBudW1iZXIgIT09IG51bWJlciB8fCBudW1iZXIgPT09IDAgPyAwIDogdHJ1bmMobnVtYmVyKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xuXG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5cbi8vIEhlbHBlciBmb3IgYSBwb3B1bGFyIHJlcGVhdGluZyBjYXNlIG9mIHRoZSBzcGVjOlxuLy8gTGV0IGludGVnZXIgYmUgPyBUb0ludGVnZXIoaW5kZXgpLlxuLy8gSWYgaW50ZWdlciA8IDAsIGxldCByZXN1bHQgYmUgbWF4KChsZW5ndGggKyBpbnRlZ2VyKSwgMCk7IGVsc2UgbGV0IHJlc3VsdCBiZSBtaW4oaW50ZWdlciwgbGVuZ3RoKS5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgdmFyIGludGVnZXIgPSB0b0ludGVnZXJPckluZmluaXR5KGluZGV4KTtcbiAgcmV0dXJuIGludGVnZXIgPCAwID8gbWF4KGludGVnZXIgKyBsZW5ndGgsIDApIDogbWluKGludGVnZXIsIGxlbmd0aCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHknKTtcblxudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBgVG9MZW5ndGhgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b2xlbmd0aFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGFyZ3VtZW50ID4gMCA/IG1pbih0b0ludGVnZXJPckluZmluaXR5KGFyZ3VtZW50KSwgMHgxRkZGRkZGRkZGRkZGRikgOiAwOyAvLyAyICoqIDUzIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcblxuLy8gYExlbmd0aE9mQXJyYXlMaWtlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbGVuZ3Rob2ZhcnJheWxpa2Vcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdG9MZW5ndGgob2JqLmxlbmd0aCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tYWJzb2x1dGUtaW5kZXgnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnsgaW5kZXhPZiwgaW5jbHVkZXMgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSBsZW5ndGhPZkFycmF5TGlrZShPKTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT09IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gICAgICBpZiAodmFsdWUgIT09IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICBpZiAoKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pICYmIE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBBcnJheS5wcm90b3R5cGUuaW5jbHVkZXNgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmNsdWRlc1xuICBpbmNsdWRlczogY3JlYXRlTWV0aG9kKHRydWUpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmluZGV4T2ZgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmRleG9mXG4gIGluZGV4T2Y6IGNyZWF0ZU1ldGhvZChmYWxzZSlcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgaW5kZXhPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pbmNsdWRlcycpLmluZGV4T2Y7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xuXG52YXIgcHVzaCA9IHVuY3VycnlUaGlzKFtdLnB1c2gpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSAhaGFzT3duKGhpZGRlbktleXMsIGtleSkgJiYgaGFzT3duKE8sIGtleSkgJiYgcHVzaChyZXN1bHQsIGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXNPd24oTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+aW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcHVzaChyZXN1bHQsIGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gSUU4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IFtcbiAgJ2NvbnN0cnVjdG9yJyxcbiAgJ2hhc093blByb3BlcnR5JyxcbiAgJ2lzUHJvdG90eXBlT2YnLFxuICAncHJvcGVydHlJc0VudW1lcmFibGUnLFxuICAndG9Mb2NhbGVTdHJpbmcnLFxuICAndG9TdHJpbmcnLFxuICAndmFsdWVPZidcbl07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGludGVybmFsT2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcblxudmFyIGhpZGRlbktleXMgPSBlbnVtQnVnS2V5cy5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5bmFtZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHluYW1lcyAtLSBzYWZlXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuIGludGVybmFsT2JqZWN0S2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eXN5bWJvbHMgLS0gc2FmZVxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcblxudmFyIGNvbmNhdCA9IHVuY3VycnlUaGlzKFtdLmNvbmNhdCk7XG5cbi8vIGFsbCBvYmplY3Qga2V5cywgaW5jbHVkZXMgbm9uLWVudW1lcmFibGUgYW5kIHN5bWJvbHNcbm1vZHVsZS5leHBvcnRzID0gZ2V0QnVpbHRJbignUmVmbGVjdCcsICdvd25LZXlzJykgfHwgZnVuY3Rpb24gb3duS2V5cyhpdCkge1xuICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUuZihhbk9iamVjdChpdCkpO1xuICB2YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlLmY7XG4gIHJldHVybiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPyBjb25jYXQoa2V5cywgZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSkgOiBrZXlzO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBvd25LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL293bi1rZXlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc291cmNlLCBleGNlcHRpb25zKSB7XG4gIHZhciBrZXlzID0gb3duS2V5cyhzb3VyY2UpO1xuICB2YXIgZGVmaW5lUHJvcGVydHkgPSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mO1xuICB2YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlLmY7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIGlmICghaGFzT3duKHRhcmdldCwga2V5KSAmJiAhKGV4Y2VwdGlvbnMgJiYgaGFzT3duKGV4Y2VwdGlvbnMsIGtleSkpKSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgfVxuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIHJlcGxhY2VtZW50ID0gLyN8XFwucHJvdG90eXBlXFwuLztcblxudmFyIGlzRm9yY2VkID0gZnVuY3Rpb24gKGZlYXR1cmUsIGRldGVjdGlvbikge1xuICB2YXIgdmFsdWUgPSBkYXRhW25vcm1hbGl6ZShmZWF0dXJlKV07XG4gIHJldHVybiB2YWx1ZSA9PT0gUE9MWUZJTEwgPyB0cnVlXG4gICAgOiB2YWx1ZSA9PT0gTkFUSVZFID8gZmFsc2VcbiAgICA6IGlzQ2FsbGFibGUoZGV0ZWN0aW9uKSA/IGZhaWxzKGRldGVjdGlvbilcbiAgICA6ICEhZGV0ZWN0aW9uO1xufTtcblxudmFyIG5vcm1hbGl6ZSA9IGlzRm9yY2VkLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgcmV0dXJuIFN0cmluZyhzdHJpbmcpLnJlcGxhY2UocmVwbGFjZW1lbnQsICcuJykudG9Mb3dlckNhc2UoKTtcbn07XG5cbnZhciBkYXRhID0gaXNGb3JjZWQuZGF0YSA9IHt9O1xudmFyIE5BVElWRSA9IGlzRm9yY2VkLk5BVElWRSA9ICdOJztcbnZhciBQT0xZRklMTCA9IGlzRm9yY2VkLlBPTFlGSUxMID0gJ1AnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRm9yY2VkO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKS5mO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBkZWZpbmVCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbicpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcbnZhciBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcHktY29uc3RydWN0b3ItcHJvcGVydGllcycpO1xudmFyIGlzRm9yY2VkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWZvcmNlZCcpO1xuXG4vKlxuICBvcHRpb25zLnRhcmdldCAgICAgICAgIC0gbmFtZSBvZiB0aGUgdGFyZ2V0IG9iamVjdFxuICBvcHRpb25zLmdsb2JhbCAgICAgICAgIC0gdGFyZ2V0IGlzIHRoZSBnbG9iYWwgb2JqZWN0XG4gIG9wdGlvbnMuc3RhdCAgICAgICAgICAgLSBleHBvcnQgYXMgc3RhdGljIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucHJvdG8gICAgICAgICAgLSBleHBvcnQgYXMgcHJvdG90eXBlIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucmVhbCAgICAgICAgICAgLSByZWFsIHByb3RvdHlwZSBtZXRob2QgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLmZvcmNlZCAgICAgICAgIC0gZXhwb3J0IGV2ZW4gaWYgdGhlIG5hdGl2ZSBmZWF0dXJlIGlzIGF2YWlsYWJsZVxuICBvcHRpb25zLmJpbmQgICAgICAgICAgIC0gYmluZCBtZXRob2RzIHRvIHRoZSB0YXJnZXQsIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy53cmFwICAgICAgICAgICAtIHdyYXAgY29uc3RydWN0b3JzIHRvIHByZXZlbnRpbmcgZ2xvYmFsIHBvbGx1dGlvbiwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLnVuc2FmZSAgICAgICAgIC0gdXNlIHRoZSBzaW1wbGUgYXNzaWdubWVudCBvZiBwcm9wZXJ0eSBpbnN0ZWFkIG9mIGRlbGV0ZSArIGRlZmluZVByb3BlcnR5XG4gIG9wdGlvbnMuc2hhbSAgICAgICAgICAgLSBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gIG9wdGlvbnMuZW51bWVyYWJsZSAgICAgLSBleHBvcnQgYXMgZW51bWVyYWJsZSBwcm9wZXJ0eVxuICBvcHRpb25zLmRvbnRDYWxsR2V0U2V0IC0gcHJldmVudCBjYWxsaW5nIGEgZ2V0dGVyIG9uIHRhcmdldFxuICBvcHRpb25zLm5hbWUgICAgICAgICAgIC0gdGhlIC5uYW1lIG9mIHRoZSBmdW5jdGlvbiBpZiBpdCBkb2VzIG5vdCBtYXRjaCB0aGUga2V5XG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3B0aW9ucywgc291cmNlKSB7XG4gIHZhciBUQVJHRVQgPSBvcHRpb25zLnRhcmdldDtcbiAgdmFyIEdMT0JBTCA9IG9wdGlvbnMuZ2xvYmFsO1xuICB2YXIgU1RBVElDID0gb3B0aW9ucy5zdGF0O1xuICB2YXIgRk9SQ0VELCB0YXJnZXQsIGtleSwgdGFyZ2V0UHJvcGVydHksIHNvdXJjZVByb3BlcnR5LCBkZXNjcmlwdG9yO1xuICBpZiAoR0xPQkFMKSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsO1xuICB9IGVsc2UgaWYgKFNUQVRJQykge1xuICAgIHRhcmdldCA9IGdsb2JhbFtUQVJHRVRdIHx8IGRlZmluZUdsb2JhbFByb3BlcnR5KFRBUkdFVCwge30pO1xuICB9IGVsc2Uge1xuICAgIHRhcmdldCA9IChnbG9iYWxbVEFSR0VUXSB8fCB7fSkucHJvdG90eXBlO1xuICB9XG4gIGlmICh0YXJnZXQpIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIHNvdXJjZVByb3BlcnR5ID0gc291cmNlW2tleV07XG4gICAgaWYgKG9wdGlvbnMuZG9udENhbGxHZXRTZXQpIHtcbiAgICAgIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpO1xuICAgICAgdGFyZ2V0UHJvcGVydHkgPSBkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IudmFsdWU7XG4gICAgfSBlbHNlIHRhcmdldFByb3BlcnR5ID0gdGFyZ2V0W2tleV07XG4gICAgRk9SQ0VEID0gaXNGb3JjZWQoR0xPQkFMID8ga2V5IDogVEFSR0VUICsgKFNUQVRJQyA/ICcuJyA6ICcjJykgKyBrZXksIG9wdGlvbnMuZm9yY2VkKTtcbiAgICAvLyBjb250YWluZWQgaW4gdGFyZ2V0XG4gICAgaWYgKCFGT1JDRUQgJiYgdGFyZ2V0UHJvcGVydHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHR5cGVvZiBzb3VyY2VQcm9wZXJ0eSA9PSB0eXBlb2YgdGFyZ2V0UHJvcGVydHkpIGNvbnRpbnVlO1xuICAgICAgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyhzb3VyY2VQcm9wZXJ0eSwgdGFyZ2V0UHJvcGVydHkpO1xuICAgIH1cbiAgICAvLyBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gICAgaWYgKG9wdGlvbnMuc2hhbSB8fCAodGFyZ2V0UHJvcGVydHkgJiYgdGFyZ2V0UHJvcGVydHkuc2hhbSkpIHtcbiAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShzb3VyY2VQcm9wZXJ0eSwgJ3NoYW0nLCB0cnVlKTtcbiAgICB9XG4gICAgZGVmaW5lQnVpbHRJbih0YXJnZXQsIGtleSwgc291cmNlUHJvcGVydHksIG9wdGlvbnMpO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG5cbi8vIGBJc0FycmF5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXNhcnJheVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LWlzYXJyYXkgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGNsYXNzb2YoYXJndW1lbnQpID09PSAnQXJyYXknO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIFNhZmFyaSA8IDEzIGRvZXMgbm90IHRocm93IGFuIGVycm9yIGluIHRoaXMgY2FzZVxudmFyIFNJTEVOVF9PTl9OT05fV1JJVEFCTEVfTEVOR1RIX1NFVCA9IERFU0NSSVBUT1JTICYmICFmdW5jdGlvbiAoKSB7XG4gIC8vIG1ha2VzIG5vIHNlbnNlIHdpdGhvdXQgcHJvcGVyIHN0cmljdCBtb2RlIHN1cHBvcnRcbiAgaWYgKHRoaXMgIT09IHVuZGVmaW5lZCkgcmV0dXJuIHRydWU7XG4gIHRyeSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFtdLCAnbGVuZ3RoJywgeyB3cml0YWJsZTogZmFsc2UgfSkubGVuZ3RoID0gMTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3IgaW5zdGFuY2VvZiBUeXBlRXJyb3I7XG4gIH1cbn0oKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTSUxFTlRfT05fTk9OX1dSSVRBQkxFX0xFTkdUSF9TRVQgPyBmdW5jdGlvbiAoTywgbGVuZ3RoKSB7XG4gIGlmIChpc0FycmF5KE8pICYmICFnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgJ2xlbmd0aCcpLndyaXRhYmxlKSB7XG4gICAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Nhbm5vdCBzZXQgcmVhZCBvbmx5IC5sZW5ndGgnKTtcbiAgfSByZXR1cm4gTy5sZW5ndGggPSBsZW5ndGg7XG59IDogZnVuY3Rpb24gKE8sIGxlbmd0aCkge1xuICByZXR1cm4gTy5sZW5ndGggPSBsZW5ndGg7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSAweDFGRkZGRkZGRkZGRkZGOyAvLyAyICoqIDUzIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA+IE1BWF9TQUZFX0lOVEVHRVIpIHRocm93ICRUeXBlRXJyb3IoJ01heGltdW0gYWxsb3dlZCBpbmRleCBleGNlZWRlZCcpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG52YXIgc2V0QXJyYXlMZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc2V0LWxlbmd0aCcpO1xudmFyIGRvZXNOb3RFeGNlZWRTYWZlSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2VzLW5vdC1leGNlZWQtc2FmZS1pbnRlZ2VyJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxudmFyIElOQ09SUkVDVF9UT19MRU5HVEggPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBbXS5wdXNoLmNhbGwoeyBsZW5ndGg6IDB4MTAwMDAwMDAwIH0sIDEpICE9PSA0Mjk0OTY3Mjk3O1xufSk7XG5cbi8vIFY4IDw9IDEyMSBhbmQgU2FmYXJpIDw9IDE1LjQ7IEZGIDwgMjMgdGhyb3dzIEludGVybmFsRXJyb3Jcbi8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTEyNjgxXG52YXIgcHJvcGVyRXJyb3JPbk5vbldyaXRhYmxlTGVuZ3RoID0gZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShbXSwgJ2xlbmd0aCcsIHsgd3JpdGFibGU6IGZhbHNlIH0pLnB1c2goKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3IgaW5zdGFuY2VvZiBUeXBlRXJyb3I7XG4gIH1cbn07XG5cbnZhciBGT1JDRUQgPSBJTkNPUlJFQ1RfVE9fTEVOR1RIIHx8ICFwcm9wZXJFcnJvck9uTm9uV3JpdGFibGVMZW5ndGgoKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5wdXNoYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnB1c2hcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBhcml0eTogMSwgZm9yY2VkOiBGT1JDRUQgfSwge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnMgLS0gcmVxdWlyZWQgZm9yIGAubGVuZ3RoYFxuICBwdXNoOiBmdW5jdGlvbiBwdXNoKGl0ZW0pIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpO1xuICAgIHZhciBsZW4gPSBsZW5ndGhPZkFycmF5TGlrZShPKTtcbiAgICB2YXIgYXJnQ291bnQgPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGRvZXNOb3RFeGNlZWRTYWZlSW50ZWdlcihsZW4gKyBhcmdDb3VudCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdDb3VudDsgaSsrKSB7XG4gICAgICBPW2xlbl0gPSBhcmd1bWVudHNbaV07XG4gICAgICBsZW4rKztcbiAgICB9XG4gICAgc2V0QXJyYXlMZW5ndGgoTywgbGVuKTtcbiAgICByZXR1cm4gbGVuO1xuICB9XG59KTtcbiIsICJpbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuLyog6LefW1tNb2R1bGU6U3BlY2lhbCB3aWtpdGV4dF1d5L+d5oyB5LiA6Ie055qE5q616JC944CCICovXG5jb25zdCB3aWtpVGV4dEtleTogc3RyaW5nID0gJ19hZGRUZXh0JztcblxuLy8g5ZCI5bm25aSa5Liqd2lraXRleHTlrZfnrKbkuLLvvIzlubbku6XmjaLooYzliIbpmpRcbmNvbnN0IGx1YUFkZFRleHQgPSAoaW5wdXRTdHI6IHN0cmluZywgbmV3U3RyOiBzdHJpbmcsIF9lc2NhcGU/OiBib29sZWFuKTogc3RyaW5nID0+IHtcblx0bGV0IGlucHV0U3RyaW5nOiBzdHJpbmcgPSBpbnB1dFN0cjtcblx0aWYgKG5ld1N0cikge1xuXHRcdGlmIChpbnB1dFN0cmluZyAhPT0gJycpIHtcblx0XHRcdGlucHV0U3RyaW5nICs9ICdcXG4nO1xuXHRcdH1cblx0XHRsZXQgdGV4dDogc3RyaW5nID0gbmV3U3RyO1xuXHRcdGlmIChfZXNjYXBlKSB7XG5cdFx0XHRjb25zdCBbZXNjYXBlU3RyXSA9IEpTT04ucGFyc2UoXG5cdFx0XHRcdGBbJHtKU09OLnN0cmluZ2lmeShcblx0XHRcdFx0XHQvLyBMdWHkuI3mlK/mjIFcXHXjgIFcXHjnmoTot7PohLHnrKblj7fvvJvmjpLpmaTnm7jlhbPovazmjaJcblx0XHRcdFx0XHRuZXdTdHIudG9TdHJpbmcoKS5yZXBsYWNlKC9cXFxcKFt1eF0pL2dpLCAnJDEnKVxuXHRcdFx0XHQpLnJlcGxhY2UoL1xcXFxcXFxcL2csICdcXFxcJyl9XWBcblx0XHRcdCk7XG5cdFx0XHR0ZXh0ID0gZXNjYXBlU3RyO1xuXHRcdH1cblx0XHRpbnB1dFN0cmluZyArPSB0ZXh0O1xuXHR9XG5cdHJldHVybiBpbnB1dFN0cmluZztcbn07XG5cbi8vIOivu+WPlndpa2l0ZXh05a2X56ym5Liy77yM5bm25b+955Wl5rOo6YeK5bC+6YOoXG5jb25zdCBsdWFHZXRTdHJpbmcgPSAoc3RyOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRjb25zdCB0ZXN0U3RyQXJyYXk6IFJlZ0V4cEV4ZWNBcnJheSB8IG51bGwgPSAvW15cXG5dKlxcKlxcLy8uZXhlYyhzdHIpO1xuXHRsZXQgdGVzdFN0cjogc3RyaW5nO1xuXHRpZiAodGVzdFN0ckFycmF5KSB7XG5cdFx0dGVzdFN0ciA9IHRlc3RTdHJBcnJheVswXSB8fCAnJztcblx0XHR0ZXN0U3RyID0gdGVzdFN0ci5zbGljZSgwLCBNYXRoLm1heCgwLCB0ZXN0U3RyLmxlbmd0aCAtIDIpKTtcblx0fSBlbHNlIHtcblx0XHR0ZXN0U3RyID0gc3RyO1xuXHR9XG5cdGNvbnN0IHRyaW1DaGVjazogc3RyaW5nID0gdGVzdFN0ci50cmltKCk7XG5cdGNvbnN0IGZpcnN0Q2hhcjogc3RyaW5nID0gdHJpbUNoZWNrLmNoYXJBdCgwKTtcblx0aWYgKGZpcnN0Q2hhciA9PT0gdHJpbUNoZWNrLmF0KC0xKSAmJiAoZmlyc3RDaGFyID09PSBcIidcIiB8fCBmaXJzdENoYXIgPT09ICdcIicpKSB7XG5cdFx0cmV0dXJuIHRyaW1DaGVjay5zbGljZSgxLCAxICsgdHJpbUNoZWNrLmxlbmd0aCAtIDIpO1xuXHR9XG5cdHJldHVybiB0ZXN0U3RyO1xufTtcblxuLy8g6K+75Y+WQ1NT5LmLYO+8v2FkZFRleHQgIHsgY29udGVudO+8mlwiWFhYXCIgfWDmqKHlvI/nmoTlrZfnrKbkuLJcbmNvbnN0IGx1YUdldENvbnRlbnRUZXh0ID0gKHN0cjogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0bGV0IHdpa2l0ZXh0OiBzdHJpbmcgPSAnJztcblx0dHJ5IHtcblx0XHRzdHIucmVwbGFjZShuZXcgUmVnRXhwKGAke3dpa2lUZXh0S2V5fVxcXFxzKlxcXFx7W15jXFxcXH1dKmNvbnRlbnRcXFxccyo6XFxcXHMqW15cXG5dKmAsICdnJyksICh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRcdFx0Y29uc3QgdGVtcFRleHQgPSAoL2NvbnRlbnRcXHMqOlxccypbXlxcbl0qLy5leGVjKHRleHQpIHx8IFsnY29udGVudDonXSlbMF1cblx0XHRcdFx0LnJlcGxhY2UoL15bXFxzO31dK3xbXFxzO31dKyQvZywgJycpXG5cdFx0XHRcdC5yZXBsYWNlKC9cXHMqY29udGVudFxccyo6XFxzKi8sICcnKTtcblx0XHRcdGlmICh3aWtpdGV4dCAhPT0gJycpIHtcblx0XHRcdFx0d2lraXRleHQgKz0gJ1xcbic7XG5cdFx0XHR9XG5cdFx0XHR3aWtpdGV4dCArPSBsdWFHZXRTdHJpbmcodGVtcFRleHQpO1xuXHRcdFx0cmV0dXJuIHRleHQ7XG5cdFx0fSk7XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiAnJztcblx0fVxuXHRyZXR1cm4gd2lraXRleHQ7XG59O1xuXG4vLyDor7vlj5blr7nosaHlrprkuYnmqKHlvI/kuLpg77y/YWRkVGV4dO+8nVhYWGDmiJZg77y/YWRkVGV4dO+8mlhYWGDmqKHlvI/nmoTlrZfnrKbkuLIgKOazqOmHiuS7peWFqOinkuWtl+espuS7o+abv++8jOmBv+WFjeiiq+aKk+WPlilcbmNvbnN0IGx1YUdldE9ialRleHQgPSAoc3RyOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRsZXQgd2lraXRleHQ6IHN0cmluZyA9ICcnO1xuXHR0cnkge1xuXHRcdHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoYCR7d2lraVRleHRLZXl9XFxcXHMqW1xcXFw9Ol1cXFxccypbXlxcbl0qYCwgJ2cnKSwgKHRleHQ6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdFx0XHRjb25zdCB0ZW1wVGV4dDogc3RyaW5nID0gdGV4dFxuXHRcdFx0XHQucmVwbGFjZSgvXltcXHM7fV0rfFtcXHM7fV0rJC9nLCAnJylcblx0XHRcdFx0LnJlcGxhY2UobmV3IFJlZ0V4cChgJHt3aWtpVGV4dEtleX1cXFxccypbXFxcXD06XVxcXFxzKmApLCAnJyk7XG5cdFx0XHRpZiAod2lraXRleHQgIT09ICcnKSB7XG5cdFx0XHRcdHdpa2l0ZXh0ICs9ICdcXG4nO1xuXHRcdFx0fVxuXHRcdFx0d2lraXRleHQgKz0gbHVhR2V0U3RyaW5nKHRlbXBUZXh0KTtcblx0XHRcdHJldHVybiB0ZXh0O1xuXHRcdH0pO1xuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblx0cmV0dXJuIHdpa2l0ZXh0O1xufTtcblxuLy8g5YiG5p6QQ1NT5Lit56ym5ZCI5p2h5Lu255qEd2lraXRleHRcbmNvbnN0IGx1YUdldENTU3dpa2l0ZXh0ID0gKGlucHV0U3RyOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRsZXQgd2lraXRleHQ6IHN0cmluZyA9ICcnO1xuXHRjb25zdCAkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4gPSAkKCdib2R5Jyk7XG5cdGNvbnN0IGNzc1RleHQ6IHN0cmluZyA9IGlucHV0U3RyIHx8ICRib2R5LmZpbmQoJyN3cFRleHRib3gxJykudmFsKCk/LnRvU3RyaW5nKCkgfHwgJyc7XG5cdGlmICghY3NzVGV4dC50cmltKCkpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblx0Ly8g5Yy56YWNIO+8v2FkZFRleHQgeyBjb250ZW5077yaXCJYWFhcIiB9IOaooeW8j1xuXHR3aWtpdGV4dCA9IGx1YUFkZFRleHQod2lraXRleHQsIGx1YUdldENvbnRlbnRUZXh0KGNzc1RleHQudG9TdHJpbmcoKSksIHRydWUpO1xuXHQvLyDlkIzml7bkuqbljLnphY0gLyog77y/YWRkVGV4dO+8mlhYWCAqLyDmqKHlvI9cblx0d2lraXRleHQgPSBsdWFBZGRUZXh0KHdpa2l0ZXh0LCBsdWFHZXRPYmpUZXh0KGNzc1RleHQudG9TdHJpbmcoKSksIHRydWUpO1xuXHRyZXR1cm4gd2lraXRleHQ7XG59O1xuXG4vLyDliIbmnpBKYXZhU2NyaXB05Lit56ym5ZCI5p2h5Lu255qEd2lraXRleHRcbmNvbnN0IGx1YUdldEpTd2lraXRleHQgPSAoaW5wdXRTdHI6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdGxldCB3aWtpdGV4dDogc3RyaW5nID0gJyc7XG5cdGNvbnN0ICRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PiA9ICQoJ2JvZHknKTtcblx0Y29uc3QganNUZXh0OiBzdHJpbmcgPSBpbnB1dFN0ciB8fCAkYm9keS5maW5kKCcjd3BUZXh0Ym94MScpLnZhbCgpPy50b1N0cmluZygpIHx8ICcnO1xuXHRpZiAoIWpzVGV4dC50cmltKCkpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblx0d2lraXRleHQgPSBsdWFBZGRUZXh0KHdpa2l0ZXh0LCBsdWFHZXRPYmpUZXh0KGpzVGV4dCksIHRydWUpO1xuXHRyZXR1cm4gd2lraXRleHQ7XG59O1xuXG4vLyDliIbmnpBKU09O5Lit56ym5ZCI5p2h5Lu255qEd2lraXRleHRcbmNvbnN0IGx1YUdldEpTT053aWtpdGV4dCA9IChpbnB1dFN0cjogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0bGV0IHdpa2l0ZXh0OiBzdHJpbmcgPSAnJztcblx0Y29uc3QgJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+ID0gJCgnYm9keScpO1xuXHRjb25zdCBKU09OVGV4dDogc3RyaW5nID0gaW5wdXRTdHIgfHwgJGJvZHkuZmluZCgnI3dwVGV4dGJveDEnKS52YWwoKT8udG9TdHJpbmcoKSB8fCAnJztcblx0aWYgKCFKU09OVGV4dC50cmltKCkpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblx0dHJ5IHtcblx0XHRjb25zdCBqc29uRGF0YSA9IEpTT04ucGFyc2UoSlNPTlRleHQudG9TdHJpbmcoKSk7XG5cdFx0Zm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoanNvbkRhdGEpKSB7XG5cdFx0XHRjb25zdCB2ID0ganNvbkRhdGFba2V5XTtcblx0XHRcdGlmIChuZXcgUmVnRXhwKHdpa2lUZXh0S2V5KS50ZXN0KGtleSkgJiYgdHlwZW9mIHYgPT09IHR5cGVvZiAnJykge1xuXHRcdFx0XHR3aWtpdGV4dCA9IGx1YUFkZFRleHQod2lraXRleHQsIHYpO1xuXHRcdFx0fVxuXHRcdFx0Ly8g6Iul5piv5pWw57uE5a+56LGh5Lya5aSa5YyF5LiA5bGCXG5cdFx0XHRpZiAodHlwZW9mIHYgIT09IHR5cGVvZiAnJykge1xuXHRcdFx0XHRmb3IgKGNvbnN0IHByb3AgaW4gdikge1xuXHRcdFx0XHRcdGlmICghT2JqZWN0Lmhhc093bih2LCBwcm9wKSkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvbnN0IHRlc3RBcnJWID0gdltwcm9wXTtcblx0XHRcdFx0XHRpZiAobmV3IFJlZ0V4cCh3aWtpVGV4dEtleSkudGVzdChwcm9wKSAmJiB0eXBlb2YgdGVzdEFyclYgPT09IHR5cGVvZiAnJykge1xuXHRcdFx0XHRcdFx0d2lraXRleHQgPSBsdWFBZGRUZXh0KHdpa2l0ZXh0LCB0ZXN0QXJyVik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9IGNhdGNoIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblx0cmV0dXJuIHdpa2l0ZXh0O1xufTtcblxuLy8g5Yik5pat5piv5ZCm5Li6THVhXG5jb25zdCBsdWFDaGVjayA9IChpbnB1dFN0cj86IHN0cmluZywgY29udGVudE1vZGVsPzogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0Ly8g5L2/55So6aG16Z2i5YaF5a655qih5Z6L5p2l5Yik5pat5qC85byPXG5cdGNvbnN0IGNvbnRlbnRNb2RlbFRvTG93ZXJDYXNlID0gKGNvbnRlbnRNb2RlbCB8fCBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VDb250ZW50TW9kZWwnKSkudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO1xuXHRjb25zdCBpbnB1dFN0cl86IHN0cmluZyA9IGlucHV0U3RyIHx8ICcnO1xuXHQvLyDmoLnmja7mlofmoaPmoLzlvI/pgInnlKjpgILlvZPnmoTop6PmnpDmqKHlvI9cblx0c3dpdGNoIChjb250ZW50TW9kZWxUb0xvd2VyQ2FzZSkge1xuXHRcdGNhc2UgJ2pzb24nOlxuXHRcdFx0cmV0dXJuIGx1YUdldEpTT053aWtpdGV4dChpbnB1dFN0cl8pO1xuXHRcdGNhc2UgJ2pzJzpcblx0XHRjYXNlICdqYXZhc2NyaXB0Jzpcblx0XHRjYXNlICd0ZXh0Jzpcblx0XHRcdHJldHVybiBsdWFHZXRKU3dpa2l0ZXh0KGlucHV0U3RyXyk7XG5cdFx0Y2FzZSAnY3NzJzpcblx0XHRjYXNlICdzYW5pdGl6ZWQtY3NzJzpcblx0XHRcdHJldHVybiBsdWFHZXRDU1N3aWtpdGV4dChpbnB1dFN0cl8pO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gJyc7XG5cdFx0Ly8g6Iul5LiN5pivanNvbuOAgWpz44CBY3Nz5YiZ6L+U5Zue56m65a2X56ym5LiyXG5cdH1cbn07XG4vLyDmnKzooYzku6XkuIrnmoTnrpfms5Xor7fot59bW01vZHVsZTpTcGVjaWFsIHdpa2l0ZXh0XV3kv53mjIHkuIDoh7TjgIJcblxuLyog56iL5bqP5Li76KaB6YOo5YiGICovXG5jb25zdCBwcmV2aWV3VG9vbCA9ICgpOiB2b2lkID0+IHtcblx0Ly8g5ZCE57G75o+Q56S65paH5a2XXG5cdGNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBRaXV3ZW4vMS4xIChTcGVjaWFsV2lraXRleHQvMS4xOyAke213LmNvbmZpZy5nZXQoJ3dnV2lraUlEJyl9KWApO1xuXHRjb25zdCAkbm90aWNlQWRkVGV4dDogc3RyaW5nID0gJ3t7U3BlY2lhbF93aWtpdGV4dC9ub3RpY2V9fSc7XG5cdC8vIHt7UXVvdGUgYm94IHxxdW90ZSAgPSAte3poLWhhbnM66aKE6KeI5Yqg6L295LitO3poLWhhbnQ66aCQ6Ka96LyJ5YWl5LitO30tLi4uIHx3aWR0aCAgPSA1MCUgfGFsaWduICA9IGNlbnRlcn19XG5cdGNvbnN0ICRub3RpY2VMb2FkaW5nOiBzdHJpbmcgPSBgPGRpdiBpZD1cIm13LV9hZGRUZXh0LXByZXZpZXctbG9hZGluZ1wiPjxkaXYgY2xhc3M9XCJxdW90ZWJveFwiIHN0eWxlPVwibWFyZ2luOmF1dG87cGFkZGluZzo2cHg7d2lkdGg6NTAlO2JvcmRlcjoxcHggc29saWQgI2FhYTtiYWNrZ3JvdW5kOiNmOWY5Zjk7Zm9udC1zaXplOjg4JVwiPjxkaXYgaWQ9XCJtdy1fYWRkVGV4dC1wcmV2aWV3LWxvYWRpbmctY29udGVudFwiIHN0eWxlPVwiYmFja2dyb3VuZDojZjlmOWY5O2NvbG9yOiMwMDA7dGV4dC1hbGlnbjpjZW50ZXI7Zm9udC1zaXplOmxhcmdlclwiPjxpbWcgc3JjPVwiaHR0cHM6Ly90dS56aG9uZ3dlbi53aWtpL2ltYWdlcy9xaXV3ZW5iYWlrZS96aC9kL2RlL0FqYXgtbG9hZGVyLmdpZlwiIGRlY29kaW5nPVwiYXN5bmNcIiBkYXRhLWZpbGUtd2lkdGg9XCIzMlwiIGRhdGEtZmlsZS1oZWlnaHQ9XCIzMlwiIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiPiAke3dpbmRvdy53Z1VMUyhcblx0XHQn6aKE6KeI5Yqg6L295LitJyxcblx0XHQn6aCQ6Ka96LyJ5YWl5LitJ1xuXHQpfS4uLjwvZGl2PjwvZGl2PjwvZGl2PmA7XG5cdC8vIFtbRmlsZTpHbm9tZS1kaWFsb2ctd2FybmluZzIuc3ZnfDMycHhdXVxuXHQvLyAte3poLWhhbnM66aKE6KeI5Yqg6L295aSx6LSlO3poLWhhbnQ66aCQ6Ka96LyJ5YWl5aSx6LSlO30tXG5cdGNvbnN0ICRub3RpY2VGYWlsOiBzdHJpbmcgPSBgPGltZyBzcmM9XCJodHRwczovL3R1Lnpob25nd2VuLndpa2kvaW1hZ2VzL3FpdXdlbmJhaWtlL3poL3RodW1iLzgvOGYvQWxlcnRfTWFya18lMjhPcmFuZ2UlMjkuc3ZnLzQ4cHgtQWxlcnRfTWFya18lMjhPcmFuZ2UlMjkuc3ZnLnBuZ1wiIGRlY29kaW5nPVwiYXN5bmNcIiBkYXRhLWZpbGUtd2lkdGg9XCI0OFwiIGRhdGEtZmlsZS1oZWlnaHQ9XCI0OFwiIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiPiR7d2luZG93LndnVUxTKFxuXHRcdCfpooTop4jliqDovb3lpLHotKUnLFxuXHRcdCfpoJDopr3ovInlhaXlpLHotKUnXG5cdCl9YDtcblxuXHQvLyDmo4Dmn6Xlr7nlupRzZWxlY3RvcueahOe9kemhteWvueixoeaYr+WQpuWtmOWcqFxuXHRjb25zdCAkZWxlbWVudEV4aXN0ID0gKHNlbGVjdG9yczogc3RyaW5nIHwgc3RyaW5nW10pID0+IHtcblx0XHRjb25zdCBzZWxlY3RvckFycmF5OiBzdHJpbmdbXSA9IEFycmF5LmlzQXJyYXkoc2VsZWN0b3JzKSA/IHNlbGVjdG9ycyA6IHNlbGVjdG9ycyA/IFtzZWxlY3RvcnNdIDogW107XG5cdFx0bGV0IGVsZUNvdW50OiBudW1iZXIgPSAwO1xuXHRcdGZvciAoY29uc3Qgc2VsZWN0b3Igb2Ygc2VsZWN0b3JBcnJheSkge1xuXHRcdFx0Y29uc3QgJHNlbGVjdG9yOiBKUXVlcnkgPSAkKHNlbGVjdG9yKTtcblx0XHRcdGVsZUNvdW50ICs9ICRzZWxlY3Rvci5sZW5ndGg7XG5cdFx0fVxuXHRcdHJldHVybiBlbGVDb3VudCA+IDA7XG5cdH07XG5cblx0Ly8g5qOA5p+lTWVkaWFXaWtp55qE6K6+572uXG5cdGNvbnN0IGNoZWNrTXdDb25maWcgPSAoY2hlY2tUYXJnZXQ6IHN0cmluZywgbXdDb25maWdzOiBzdHJpbmcgfCBzdHJpbmdbXSkgPT4ge1xuXHRcdGxldCBtd0NvbmZpZ0RhdGEgPSBtdy5jb25maWcuZ2V0KGNoZWNrVGFyZ2V0KTtcblx0XHRpZiAoIW13Q29uZmlnRGF0YSB8fCBTdHJpbmcobXdDb25maWdEYXRhKS50cmltKCkgPT09ICcnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdG13Q29uZmlnRGF0YSA9IFN0cmluZyhtd0NvbmZpZ0RhdGEpLnRvTG93ZXJDYXNlKCk7XG5cdFx0Y29uc3QgbXdDb25maWdBcnJheTogc3RyaW5nW10gPSBBcnJheS5pc0FycmF5KG13Q29uZmlncykgPyBtd0NvbmZpZ3MgOiBtd0NvbmZpZ3MgPyBbbXdDb25maWdzXSA6IFtdO1xuXHRcdHJldHVybiBtd0NvbmZpZ0FycmF5LmluY2x1ZGVzKG13Q29uZmlnRGF0YSBhcyBzdHJpbmcpO1xuXHR9O1xuXG5cdGNvbnN0IGdldExhbmd1YWdlID0gKCk6IHN0cmluZyA9PiB7XG5cdFx0Y29uc3QgbGFuZzogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dVc2VyTGFuZ3VhZ2UnKTtcblx0XHRpZiAobGFuZy5pbmNsdWRlcygnemgnKSkge1xuXHRcdFx0cmV0dXJuIG13LmNvbmZpZy5nZXQoJ3dnVXNlclZhcmlhbnQnKSBhcyBzdHJpbmc7XG5cdFx0fVxuXHRcdHJldHVybiBsYW5nO1xuXHR9O1xuXG5cdC8vIOWwhuino+aekOWQjueahHdpa2l0ZXh05Yqg5YWl6aG16Z2i5LitXG5cdGNvbnN0IGFkZFBhcnNlZFdpa2l0ZXh0ID0gKHBhcnNlZFdpa2l0ZXh0OiBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRjb25zdCAkaHRtbE9iajogSlF1ZXJ5ID0gJChwYXJzZWRXaWtpdGV4dCk7XG5cdFx0aWYgKCRlbGVtZW50RXhpc3QoJyNtdy1fYWRkVGV4dC1wcmV2aWV3LWxvYWRpbmcnKSkge1xuXHRcdFx0Y29uc3QgJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+ID0gJCgnYm9keScpO1xuXHRcdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICRib2R5LmZpbmQoJyNtdy1fYWRkVGV4dC1wcmV2aWV3LWxvYWRpbmcnKTtcblx0XHRcdCRlbGVtZW50Lmh0bWwocGFyc2VkV2lraXRleHQpO1xuXHRcdFx0bXcuaG9vaygnd2lraXBhZ2UuY29udGVudCcpLmZpcmUoJGVsZW1lbnQpO1xuXHRcdH0gZWxzZSBpZiAoJGVsZW1lbnRFeGlzdCgnLmRpZmYtY3VycmVudHZlcnNpb24tdGl0bGUnKSkge1xuXHRcdFx0JGh0bWxPYmouaW5zZXJ0QWZ0ZXIoJy5kaWZmLWN1cnJlbnR2ZXJzaW9uLXRpdGxlJyk7XG5cdFx0fSBlbHNlIGlmICgkZWxlbWVudEV4aXN0KCcucHJldmlld25vdGUnKSkge1xuXHRcdFx0JGh0bWxPYmouaW5zZXJ0QWZ0ZXIoJy5wcmV2aWV3bm90ZScpO1xuXHRcdH0gZWxzZSBpZiAoJGVsZW1lbnRFeGlzdCgnLm13LXVuZGVsZXRlLXJldmlzaW9uJykpIHtcblx0XHRcdCRodG1sT2JqLmluc2VydEFmdGVyKCcubXctdW5kZWxldGUtcmV2aXNpb24nKTtcblx0XHR9IGVsc2UgaWYgKCRlbGVtZW50RXhpc3QoJyNtdy1jb250ZW50LXRleHQnKSkge1xuXHRcdFx0JGh0bWxPYmouaW5zZXJ0QmVmb3JlKCcjbXctY29udGVudC10ZXh0Jyk7XG5cdFx0fVxuXHRcdG13Lmhvb2soJ3dpa2lwYWdlLmNvbnRlbnQnKS5maXJlKCRodG1sT2JqKTtcblx0fTtcblxuXHQvLyDoi6XnvZHpobXlr7nosaHlrZjlnKjvvIzliJnmlLnliqjlhbZodG1s5YaF5a65XG5cdGNvbnN0IHNldEh0bWwgPSAoc2VsZWN0b3I6IHN0cmluZywgJGh0bWxDb250ZW50OiBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRpZiAoJGVsZW1lbnRFeGlzdChzZWxlY3RvcikpIHtcblx0XHRcdCQoc2VsZWN0b3IpLmh0bWwoJGh0bWxDb250ZW50KTtcblx0XHR9XG5cdH07XG5cblx0Ly8g5Yqg5YWl4oCcW+i9veWFpeS4rV3igJ3nmoTmj5DnpLpcblx0Y29uc3QgYWRkTG9hZGluZ05vdGljZSA9ICgpOiB2b2lkID0+IHtcblx0XHRpZiAoJG5vdGljZUFkZFRleHQgJiYgJG5vdGljZUxvYWRpbmcpIHtcblx0XHRcdGFkZFBhcnNlZFdpa2l0ZXh0KCRub3RpY2VMb2FkaW5nKTtcblx0XHR9XG5cdH07XG5cblx0Ly8g6L295YWl6ZSZ6K+v55qE5o+Q56S6XG5cdGNvbnN0IGxvYWRpbmdGYWlsTm90aWNlID0gKCk6IHZvaWQgPT4ge1xuXHRcdHNldEh0bWwoJyNtdy1fYWRkVGV4dC1wcmV2aWV3LWxvYWRpbmctY29udGVudCcsICRub3RpY2VGYWlsKTtcblx0fTtcblxuXHQvLyDnp7vpmaTigJxb6L295YWl5LitXeKAneeahOaPkOekulxuXHRjb25zdCByZW1vdmVMb2FkaW5nTm90aWNlID0gKCk6IHZvaWQgPT4ge1xuXHRcdHNldEh0bWwoJyNtdy1fYWRkVGV4dC1wcmV2aWV3LWxvYWRpbmcnLCAnJyk7XG5cdH07XG5cblx0Ly8g5qOA5p+l5piv5ZCm5pyJ6aKE6KeI55qE5b+F6KaB5oCnXG5cdGNvbnN0IG5lZWRQcmV2aWV3ID0gKCk6IGJvb2xlYW4gPT4ge1xuXHRcdHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuaW5uZXJIVE1MLnNlYXJjaCgnX2FkZFRleHQnKSA+IC0xO1xuXHR9O1xuXG5cdC8vIOWKoOWFpemihOiniOWGheWuuVxuXHRjb25zdCBtd0FkZFdpa2lUZXh0ID0gYXN5bmMgKHdpa2lUZXh0OiBzdHJpbmcsIHBhZ2VuYW1lOiBzdHJpbmcsIGlzUHJldmlldzogYm9vbGVhbikgPT4ge1xuXHRcdGlmICh3aWtpVGV4dC50b1N0cmluZygpLnRyaW0oKSA9PT0gJycpIHtcblx0XHRcdHJlbW92ZUxvYWRpbmdOb3RpY2UoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgcGFyYW1zOiBBcGlQYXJzZVBhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdFx0XHRwcm9wOiAndGV4dCcsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdC8vIOmBv+WFjeWGheWuuemHjeWkjVxuXHRcdFx0XHR0aXRsZTogcGFnZW5hbWUsXG5cdFx0XHRcdGNvbnRlbnRtb2RlbDogJ3dpa2l0ZXh0Jyxcblx0XHRcdFx0dGV4dDogd2lraVRleHQsXG5cdFx0XHRcdHVzZWxhbmc6IGdldExhbmd1YWdlKCksXG5cdFx0XHRcdHVzZXNraW46IG13LmNvbmZpZy5nZXQoJ3NraW4nKSxcblx0XHRcdH07XG5cdFx0XHRpZiAoaXNQcmV2aWV3KSB7XG5cdFx0XHRcdHBhcmFtcy5wcmV2aWV3ID0gdHJ1ZTtcblx0XHRcdFx0cGFyYW1zLmRpc2FibGVlZGl0c2VjdGlvbiA9IHRydWU7XG5cdFx0XHR9XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjb25zdCBkYXRhID0gYXdhaXQgYXBpLnBvc3QocGFyYW1zKTtcblx0XHRcdFx0aWYgKCFkYXRhIHx8ICFkYXRhWydwYXJzZSddIHx8ICFkYXRhWydwYXJzZSddLnRleHQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgcGFyc2VkV2lraSA9IChkYXRhWydwYXJzZSddLnRleHQgfHwgJycpLnRvU3RyaW5nKCkudHJpbSgpO1xuXHRcdFx0XHRpZiAocGFyc2VkV2lraSA9PT0gJycpIHtcblx0XHRcdFx0XHRyZW1vdmVMb2FkaW5nTm90aWNlKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0YWRkUGFyc2VkV2lraXRleHQocGFyc2VkV2lraSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRsb2FkaW5nRmFpbE5vdGljZSgpO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHQvLyDliqDlhaXpooTop4jnmoRMdWHlhoXlrrlcblx0Y29uc3QgbXdBZGRMdWFUZXh0ID0gYXN5bmMgKFxuXHRcdHdpa2lUZXh0OiBzdHJpbmcsXG5cdFx0cGFnZW5hbWU6IHN0cmluZyxcblx0XHRpc1ByZXZpZXc6IGJvb2xlYW4sXG5cdFx0Y2FsbEJhY2s/OiAoYXJnMDogc3RyaW5nKSA9PiBKUXVlcnkgfCBIVE1MRWxlbWVudCB8IHZvaWRcblx0KSA9PiB7XG5cdFx0Y29uc3QgdGVtcE1vZHVsZU5hbWU6IHN0cmluZyA9ICdBZGRUZXh0L1RlbXAvTW9kdWxlL0RhdGEubHVhJztcblx0XHRjb25zdCBtb2R1bGVDYWxsOiB7XG5cdFx0XHR3aWtpdGV4dDogc3RyaW5nO1xuXHRcdFx0cGFnZW5hbWU6IHN0cmluZztcblx0XHR9ID0ge1xuXHRcdFx0d2lraXRleHQ6ICcjaW52b2tlOicsXG5cdFx0XHQvLyDliIblvIDmnaXvvIzpgb/lhY3ooqvliIbliLBbWzpDYXRlZ29yeTrmnInohJrmnKzplJnor6/nmoTpobXpnaJdXVxuXHRcdFx0cGFnZW5hbWU6ICdNb2R1bGU6Jyxcblx0XHR9O1xuXHRcdGlmICh3aWtpVGV4dC50b1N0cmluZygpLnRyaW0oKSA9PT0gJycpIHtcblx0XHRcdHJlbW92ZUxvYWRpbmdOb3RpY2UoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29uc3QgcGFyYW1zOiBBcGlQYXJzZVBhcmFtcyA9IHtcblx0XHRcdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRcdFx0cHJvcDogJ3RleHQnLFxuXHRcdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0XHR0aXRsZTogcGFnZW5hbWUsXG5cdFx0XHRcdFx0Y29udGVudG1vZGVsOiAnd2lraXRleHQnLFxuXHRcdFx0XHRcdHRlbXBsYXRlc2FuZGJveHRpdGxlOiBtb2R1bGVDYWxsLnBhZ2VuYW1lICsgdGVtcE1vZHVsZU5hbWUsXG5cdFx0XHRcdFx0Ly8g5Lqn55Sf5Li05pe2THVhIE1vZHVsZVxuXHRcdFx0XHRcdHRlbXBsYXRlc2FuZGJveHRleHQ6IGByZXR1cm57XFxuXFx0bWFpbj1mdW5jdGlvbigpXFxuXFx0XFx0eHBjYWxsKGZ1bmN0aW9uKClcXG5cXHRcXHRcXHQke3dpa2lUZXh0fVxcblxcdFxcdGVuZCxmdW5jdGlvbigpZW5kKVxcblxcdFxcdGxvY2FsIG1vZHVsZVdpa2l0ZXh0PXBhY2thZ2UubG9hZGVkW1wiTW9kdWxlOk1vZHVsZSB3aWtpdGV4dFwiXVxcblxcdFxcdGlmIG1vZHVsZVdpa2l0ZXh0IHRoZW5cXG5cXHRcXHRcXHRsb2NhbCB3aWtpdGV4dD1tb2R1bGVXaWtpdGV4dC5tYWluKClcXG5cXHRcXHRcXHRpZiBtdy50ZXh0LnRyaW0od2lraXRleHQpfj0nJ3RoZW5cXG5cXHRcXHRcXHRcXHRyZXR1cm4gbXcuZ2V0Q3VycmVudEZyYW1lKCk6cHJlcHJvY2Vzcyhtb2R1bGVXaWtpdGV4dC5tYWluKCkpXFxuXFx0XFx0XFx0ZW5kXFxuXFx0XFx0ZW5kXFxuXFx0XFx0cmV0dXJuJydcXG5cXHRlbmRcXG59YCxcblx0XHRcdFx0XHR0ZW1wbGF0ZXNhbmRib3hjb250ZW50bW9kZWw6ICdTY3JpYnVudG8nLFxuXHRcdFx0XHRcdHRlbXBsYXRlc2FuZGJveGNvbnRlbnRmb3JtYXQ6ICd0ZXh0L3BsYWluJyxcblx0XHRcdFx0XHR0ZXh0OiBge3ske21vZHVsZUNhbGwud2lraXRleHR9JHt0ZW1wTW9kdWxlTmFtZX18bWFpbn19YCxcblx0XHRcdFx0XHR1c2VsYW5nOiBnZXRMYW5ndWFnZSgpLFxuXHRcdFx0XHRcdHVzZXNraW46IG13LmNvbmZpZy5nZXQoJ3NraW4nKSxcblx0XHRcdFx0fTtcblx0XHRcdFx0aWYgKGlzUHJldmlldykge1xuXHRcdFx0XHRcdHBhcmFtcy5wcmV2aWV3ID0gdHJ1ZTtcblx0XHRcdFx0XHRwYXJhbXMuZGlzYWJsZWVkaXRzZWN0aW9uID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBkYXRhID0gYXdhaXQgYXBpLnBvc3QocGFyYW1zKTtcblx0XHRcdFx0aWYgKCFkYXRhIHx8ICFkYXRhWydwYXJzZSddIHx8ICFkYXRhWydwYXJzZSddLnRleHQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgcGFyc2VkV2lraSA9IChkYXRhWydwYXJzZSddLnRleHQgfHwgJycpLnRvU3RyaW5nKCkudHJpbSgpO1xuXHRcdFx0XHRpZiAocGFyc2VkV2lraSA9PT0gJycpIHtcblx0XHRcdFx0XHRyZW1vdmVMb2FkaW5nTm90aWNlKCk7XG5cdFx0XHRcdFx0Ly8g6Iul5Ye66ZSZ5Zyo6L+Z5Liq5Li05pe25qih5Z2X5Lit5YiZ5Y+W5raIXG5cdFx0XHRcdH0gZWxzZSBpZiAoJChwYXJzZWRXaWtpKS5maW5kKCcuc2NyaWJ1bnRvLWVycm9yJykudGV4dCgpLnNlYXJjaCh0ZW1wTW9kdWxlTmFtZSkgPCAwKSB7XG5cdFx0XHRcdFx0aWYgKGNhbGxCYWNrICYmIHR5cGVvZiBjYWxsQmFjayA9PT0gdHlwZW9mICgoKTogdm9pZCA9PiB7fSkpIHtcblx0XHRcdFx0XHRcdGNhbGxCYWNrKHBhcnNlZFdpa2kpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRhZGRQYXJzZWRXaWtpdGV4dChwYXJzZWRXaWtpKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmVtb3ZlTG9hZGluZ05vdGljZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0bG9hZGluZ0ZhaWxOb3RpY2UoKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0Ly8g5LuO6aG16Z2i5b2T5YmN5Y6G5Y+y54mI5pys5Y+W5Ye6IF9hZGRUZXh0XG5cdGNvbnN0IG13QXBwbHlSZXZpc2lvbiA9IGFzeW5jIChfcmV2aXNpb25JZDogbnVtYmVyLCBjdXJyZW50UGFnZU5hbWU6IHN0cmluZykgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBwYXJhbXM6IEFwaVBhcnNlUGFyYW1zID0ge1xuXHRcdFx0XHQvLyDmnKzor7fmsYJVUkzkuI3lpKrlj6/og73mnInplb/luqbotoXplb/nmoTpo47pmalcblx0XHRcdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdFx0XHRwcm9wOiAnd2lraXRleHQnLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHQvLyBnZXQgdGhlIG9yaWdpbmFsIHdpa2l0ZXh0IGNvbnRlbnQgb2YgYSBwYWdlXG5cdFx0XHRcdG9sZGlkOiBtdy5jb25maWcuZ2V0KCd3Z1JldmlzaW9uSWQnKSxcblx0XHRcdH07XG5cdFx0XHRjb25zdCBkYXRhID0gYXdhaXQgYXBpLmdldChwYXJhbXMpOyAvLyDoi6Xlj5blvpcgX2FkZFRleHQg5YiZ5pi+56S66aKE6KeIXG5cdFx0XHRpZiAoIWRhdGEgfHwgIWRhdGFbJ3BhcnNlJ10gfHwgIWRhdGFbJ3BhcnNlJ10ud2lraXRleHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0bGV0IHBhZ2VDb250ZW50OiBzdHJpbmcgPSBsdWFDaGVjaygoZGF0YVsncGFyc2UnXS53aWtpdGV4dCB8fCAnJykudG9TdHJpbmcoKS50cmltKCkpIHx8ICcnO1xuXHRcdFx0cGFnZUNvbnRlbnQgPVxuXHRcdFx0XHQoJGVsZW1lbnRFeGlzdCgnI213LWNsZWFyeW91cmNhY2hlJylcblx0XHRcdFx0XHQ/ICd7eyNpbnZva2U6U3BlY2lhbCB3aWtpdGV4dC9UZW1wbGF0ZXxpbnR8Y2xlYXJ5b3VyY2FjaGV9fSdcblx0XHRcdFx0XHQ6ICcnKSArIHBhZ2VDb250ZW50LnRvU3RyaW5nKCk7XG5cdFx0XHRpZiAocGFnZUNvbnRlbnQudG9TdHJpbmcoKS50cmltKCkgPT09ICcnKSB7XG5cdFx0XHRcdHJlbW92ZUxvYWRpbmdOb3RpY2UoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZvaWQgbXdBZGRXaWtpVGV4dChwYWdlQ29udGVudCwgY3VycmVudFBhZ2VOYW1lLCB0cnVlKTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdHJlbW92ZUxvYWRpbmdOb3RpY2UoKTtcblx0XHR9XG5cdH07XG5cblx0Ly8g5Yqg5YWl57yW6L6R5o+Q56S677yI6Iul5a2Y5Zyo77yJXG5cdGNvbnN0IG13QXBwbHlOb3RpY2UgPSBhc3luYyAoY3VycmVudFBhZ2VOYW1lOiBzdHJpbmcsIHBhZ2VTdWJOYW1lOiBzdHJpbmcpID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcGFyYW1zOiBBcGlQYXJzZVBhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdFx0XHRwcm9wOiAndGV4dCcsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdC8vIGdldCB0aGUgb3JpZ2luYWwgd2lraXRleHQgY29udGVudCBvZiBhIHBhZ2Vcblx0XHRcdFx0dGl0bGU6IGN1cnJlbnRQYWdlTmFtZSArIHBhZ2VTdWJOYW1lLFxuXHRcdFx0XHR0ZXh0OiBge3sjaW52b2tlOlNwZWNpYWwgd2lraXRleHQvVGVtcGxhdGV8Z2V0Tm90aWNlc3wke2N1cnJlbnRQYWdlTmFtZX18JHtwYWdlU3ViTmFtZX19fWAsXG5cdFx0XHRcdHVzZWxhbmc6IGdldExhbmd1YWdlKCksXG5cdFx0XHRcdHVzZXNraW46IG13LmNvbmZpZy5nZXQoJ3NraW4nKSxcblx0XHRcdH07XG5cdFx0XHRjb25zdCBkYXRhID0gYXdhaXQgYXBpLnBvc3QocGFyYW1zKTtcblx0XHRcdGlmICghZGF0YSB8fCAhZGF0YVsncGFyc2UnXSB8fCAhZGF0YVsncGFyc2UnXS50ZXh0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNvbnN0IGh0bWw6IHN0cmluZyA9IGRhdGFbJ3BhcnNlJ10udGV4dDtcblx0XHRcdGlmICgkKGh0bWwudG9TdHJpbmcoKSkudGV4dCgpLnRyaW0oKSAhPT0gJycpIHtcblx0XHRcdFx0YWRkUGFyc2VkV2lraXRleHQoaHRtbCk7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7fVxuXHR9O1xuXG5cdC8qIOa1i+ivleagt+S+iyAqL1xuXHQvLyDmnKzohJrmnKznmoRUZXN0Y2FzZeaooeW8j1xuXHRjb25zdCB3aWtpdGV4dFByZXZpZXdUZXN0Y2FzZSA9IGFzeW5jIChpc1ByZXZpZXc6IGJvb2xlYW4pID0+IHtcblx0XHQvLyDmsqHmnInlj6/pooTop4jlhYPntKDvvIzpgIDlh7rjgIJcblx0XHRpZiAoIW5lZWRQcmV2aWV3KCkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+ID0gJCgnYm9keScpO1xuXHRcdGNvbnN0ICR0ZXN0Y2FzZUxpc3Q6IEpRdWVyeSA9ICRib2R5LmZpbmQoJy5zcGVjaWFsLXdpa2l0ZXh0LXByZXZpZXctdGVzdGNhc2UnKTtcblx0XHQvLyDoi6XpobXpnaLkuK3msqHmnIlUZXN0Y2FzZe+8jOmAgOWHuuOAglxuXHRcdGlmICgkdGVzdGNhc2VMaXN0Lmxlbmd0aCA8PSAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdC8vIOaUtumbhuS9jeS6jumhtemdouS4reeahFRlc3RjYXNl6aKE6KeI5YWD57SgXG5cdFx0Y29uc3QgdGVzdGNhc2VEYXRhTGlzdDoge1xuXHRcdFx0ZWxlbWVudDogSFRNTEVsZW1lbnQgfCB1bmRlZmluZWQ7XG5cdFx0XHRsYW5nOiBzdHJpbmc7XG5cdFx0XHRjb2RlOiBzdHJpbmc7XG5cdFx0fVtdID0gW107XG5cdFx0bGV0IGk7XG5cdFx0Zm9yIChpID0gMDsgaSA8ICR0ZXN0Y2FzZUxpc3QubGVuZ3RoOyArK2kpIHtcblx0XHRcdGNvbnN0IHRlc3RjYXNlSXRlbTogSFRNTEVsZW1lbnQgfCB1bmRlZmluZWQgPSAkdGVzdGNhc2VMaXN0W2ldO1xuXHRcdFx0aWYgKCF0ZXN0Y2FzZUl0ZW0pIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBjb2RlSXQ6IEpRdWVyeSA9ICQodGVzdGNhc2VJdGVtKS5maW5kKCcubXctaGlnaGxpZ2h0Jyk7XG5cdFx0XHRpZiAoIWNvZGVJdC5sZW5ndGgpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBbY29kZUl0MF0gPSBjb2RlSXQ7XG5cdFx0XHRpZiAoIWNvZGVJdDApIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBjb2RlSXRDbGFzczogc3RyaW5nIHwgdW5kZWZpbmVkID0gJChjb2RlSXQwKS5hdHRyKCdjbGFzcycpO1xuXHRcdFx0aWYgKCFjb2RlSXRDbGFzcykge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgWywgY29kZUlkXSA9IC9tdy1oaWdobGlnaHQtbGFuZy0oXFxTKykvLmV4ZWMoY29kZUl0Q2xhc3MpIHx8IFtdO1xuXHRcdFx0Y29uc3QgbG9hZEluZGV4OiBudW1iZXIgPSB0ZXN0Y2FzZURhdGFMaXN0Lmxlbmd0aDtcblx0XHRcdCQodGVzdGNhc2VJdGVtKS5hdHRyKCdwcmV2aWV3LWlkJywgbG9hZEluZGV4KTtcblx0XHRcdHRlc3RjYXNlRGF0YUxpc3QucHVzaCh7XG5cdFx0XHRcdGVsZW1lbnQ6IHRlc3RjYXNlSXRlbSxcblx0XHRcdFx0bGFuZzogY29kZUlkIHx8ICcnLFxuXHRcdFx0XHRjb2RlOiBjb2RlSXQudGV4dCgpLnRvU3RyaW5nKCksXG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHQvLyDmlbTnkIbpobXpnaLkuK3nmoRUZXN0Y2FzZemihOiniOWFg+e0oO+8jOW5tuaUvue9ruKAnFvovb3lhaXkuK1d4oCd5raI5oGvXG5cdFx0bGV0IHBhY2thZ2VXaWtpdGV4dDogc3RyaW5nID0gJyc7XG5cdFx0Zm9yIChjb25zdCBbX2tleSwgdGVzdGNhc2VJdGVtXSBvZiBPYmplY3QuZW50cmllcyh0ZXN0Y2FzZURhdGFMaXN0KSkge1xuXHRcdFx0aWYgKHRlc3RjYXNlSXRlbS5jb2RlLnRyaW0oKSA9PT0gJycpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBpdGVtRWxlbWVudDogSFRNTEVsZW1lbnQgfCB1bmRlZmluZWQgPSB0ZXN0Y2FzZUl0ZW0uZWxlbWVudDtcblx0XHRcdGlmIChbJ2phdmFzY3JpcHQnLCAnanMnLCAnY3NzJywgJ2pzb24nLCAndGV4dCddLmluY2x1ZGVzKHRlc3RjYXNlSXRlbS5sYW5nLnRvTG93ZXJDYXNlKCkpKSB7XG5cdFx0XHRcdGNvbnN0IGFkZFdpa2k6IHN0cmluZyA9IGx1YUNoZWNrKHRlc3RjYXNlSXRlbS5jb2RlLCB0ZXN0Y2FzZUl0ZW0ubGFuZyk7XG5cdFx0XHRcdGlmIChhZGRXaWtpLnRvU3RyaW5nKCkudHJpbSgpICE9PSAnJyAmJiBpdGVtRWxlbWVudCkge1xuXHRcdFx0XHRcdC8vIOiLpeino+aekOe7k+aenOmdnuepuuaJjeaUvue9rumihOiniFxuXHRcdFx0XHRcdCQoaXRlbUVsZW1lbnQpLnByZXBlbmQoJG5vdGljZUxvYWRpbmcpO1xuXHRcdFx0XHRcdHBhY2thZ2VXaWtpdGV4dCArPSBgPGRpdiBjbGFzcz1cInNwZWNpYWwtd2lraXRleHQtcHJldmlldy10ZXN0Y2FzZS0ke2l9XCI+XFxuJHthZGRXaWtpfVxcbjwvZGl2PmA7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoWydsdWEnLCAnc2NyaWJ1bnRvJ10uaW5jbHVkZXModGVzdGNhc2VJdGVtLmxhbmcudG9Mb3dlckNhc2UoKSkpIHtcblx0XHRcdFx0dm9pZCBtd0FkZEx1YVRleHQoXG5cdFx0XHRcdFx0dGVzdGNhc2VJdGVtLmNvZGUsXG5cdFx0XHRcdFx0bXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpLFxuXHRcdFx0XHRcdGlzUHJldmlldyxcblx0XHRcdFx0XHQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuICh3aWtpdGV4dDogc3RyaW5nKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRcdGlmIChpdGVtRWxlbWVudCkge1xuXHRcdFx0XHRcdFx0XHRcdCQoaXRlbUVsZW1lbnQpLnByZXBlbmQod2lraXRleHQpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdH0pKClcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyDlsIbmlbTnkIblroznmoRUZXN0Y2FzZemihOiniOWFg+e0oOe7n+S4gOWPkemAgUFQSeivt+axgu+8jOW5tuWwhui/lOWbnue7k+aenOWIhuWPkeWIsOWQhFRlc3RjYXNlXG5cdFx0aWYgKHBhY2thZ2VXaWtpdGV4dC50cmltKCkgIT09ICcnKSB7XG5cdFx0XHRwYWNrYWdlV2lraXRleHQgPSBgPGRpdiBjbGFzcz1cInNwZWNpYWwtd2lraXRleHQtcHJldmlldy10ZXN0Y2FzZS11bmRlZmluZWRcIj4ke3BhY2thZ2VXaWtpdGV4dH08L2Rpdj5gO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29uc3QgcGFyYW1zOiBBcGlQYXJzZVBhcmFtcyA9IHtcblx0XHRcdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRcdFx0cHJvcDogJ3RleHQnLFxuXHRcdFx0XHRcdGNvbnRlbnRtb2RlbDogJ3dpa2l0ZXh0Jyxcblx0XHRcdFx0XHR0ZXh0OiBwYWNrYWdlV2lraXRleHQsXG5cdFx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHR9O1xuXHRcdFx0XHRpZiAoaXNQcmV2aWV3KSB7XG5cdFx0XHRcdFx0cGFyYW1zLnByZXZpZXcgPSB0cnVlO1xuXHRcdFx0XHRcdHBhcmFtcy5kaXNhYmxlZWRpdHNlY3Rpb24gPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkucG9zdChwYXJhbXMpO1xuXHRcdFx0XHRpZiAoIWRhdGEgfHwgIWRhdGFbJ3BhcnNlJ10gfHwgIWRhdGFbJ3BhcnNlJ10udGV4dCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBwYXJzZWRXaWtpID0gKGRhdGFbJ3BhcnNlJ10udGV4dCB8fCAnJykudG9TdHJpbmcoKS50cmltKCk7XG5cdFx0XHRcdGlmIChwYXJzZWRXaWtpICE9PSAnJykge1xuXHRcdFx0XHRcdGNvbnN0ICRwYXJzZWRFbGVtZW50OiBKUXVlcnkgPSAkKHBhcnNlZFdpa2kpO1xuXHRcdFx0XHRcdGZvciAoY29uc3QgW2tleSwgdGVzdGNhc2VJdGVtXSBvZiBPYmplY3QuZW50cmllcyh0ZXN0Y2FzZURhdGFMaXN0KSkge1xuXHRcdFx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdFx0XHR0ZXN0Y2FzZUl0ZW0gJiZcblx0XHRcdFx0XHRcdFx0WydqYXZhc2NyaXB0JywgJ2pzJywgJ3RleHQnLCAnY3NzJywgJ2pzb24nXS5pbmNsdWRlcyh0ZXN0Y2FzZUl0ZW0ubGFuZy50b0xvd2VyQ2FzZSgpKVxuXHRcdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IGNoZWNrUGFyc2VFbGVtZW50OiBKUXVlcnk8SFRNTEVsZW1lbnQ+ID0gJHBhcnNlZEVsZW1lbnQuZmluZChcblx0XHRcdFx0XHRcdFx0XHRgLnNwZWNpYWwtd2lraXRleHQtcHJldmlldy10ZXN0Y2FzZS11bmRlZmluZWQgPiAuc3BlY2lhbC13aWtpdGV4dC1wcmV2aWV3LXRlc3RjYXNlLSR7a2V5fWBcblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0aWYgKGNoZWNrUGFyc2VFbGVtZW50Lmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0ICRhZGRUYXJnZXQ6IEpRdWVyeSA9ICQoXG5cdFx0XHRcdFx0XHRcdFx0XHR0ZXN0Y2FzZUl0ZW0uZWxlbWVudCBhcyBOb25OdWxsYWJsZTx0eXBlb2YgdGVzdGNhc2VJdGVtLmVsZW1lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0KS5maW5kKCcjbXctX2FkZFRleHQtcHJldmlldy1sb2FkaW5nJyk7XG5cdFx0XHRcdFx0XHRcdFx0JGFkZFRhcmdldC5odG1sKGNoZWNrUGFyc2VFbGVtZW50Lmh0bWwoKSk7XG5cdFx0XHRcdFx0XHRcdFx0bXcuaG9vaygnd2lraXBhZ2UuY29udGVudCcpLmZpcmUoJGFkZFRhcmdldCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2gge31cblx0XHR9XG5cdH07XG5cblx0Lyog56iL5bqP6L+b5YWl54K5ICovXG5cdC8vIOe7memhtemdoua3u+WKoOmihOiniFxuXHRjb25zdCBtd0FkZFByZXZpZXcgPSAoKTogdm9pZCA9PiB7XG5cdFx0Y29uc3QgY3VycmVudFBhZ2VOYW1lOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJyk7XG5cdFx0Y29uc3QgJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+ID0gJCgnYm9keScpO1xuXHRcdC8vIOmihOiniOaooeW8j+WPqumAgueUqOS6juS7peS4i+mhtemdouWGheWuueaooeWei1xuXHRcdGlmIChjaGVja013Q29uZmlnKCd3Z1BhZ2VDb250ZW50TW9kZWwnLCBbJ2phdmFzY3JpcHQnLCAnanMnLCAnanNvbicsICd0ZXh0JywgJ2NzcycsICdzYW5pdGl6ZWQtY3NzJ10pKSB7XG5cdFx0XHQvLyDmqKHlvI8x77ya6aG16Z2i6aKE6KeIXG5cdFx0XHRpZiAoJGVsZW1lbnRFeGlzdCgnLnByZXZpZXdub3RlJykpIHtcblx0XHRcdFx0Ly8g5qOA5p+l5piv5ZCm5Li66aKE6KeI5qih5byPXG5cdFx0XHRcdC8vIOmihOiniOacieWPr+iDveaYr+WcqOmihOiniOWFtuS7luadoeebrlxuXHRcdFx0XHRjb25zdCAkcHJldmlld1NlbGVjdG9yOiBKUXVlcnkgPSAkYm9keS5maW5kKCcucHJldmlld25vdGUgLndhcm5pbmdib3ggPiBwID4gYiBhJyk7XG5cdFx0XHRcdGlmICgkcHJldmlld1NlbGVjdG9yLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRjb25zdCBwYXRoUGF0aDogc3RyaW5nID0gZGVjb2RlVVJJKFxuXHRcdFx0XHRcdFx0JHByZXZpZXdTZWxlY3Rvci5hdHRyKCdocmVmJykgfHwgbXcudXRpbC5nZXRVcmwoY3VycmVudFBhZ2VOYW1lKVxuXHRcdFx0XHRcdCkucmVwbGFjZShuZXcgUmVnRXhwKGBeXFxcXC8/JHttdy51dGlsLmdldFVybCgnJykubWF0Y2goL1thLXpdKy8pPy5bMF0gPz8gJyd9XFxcXC9gKSwgJycpO1xuXG5cdFx0XHRcdFx0Ly8g6Iul6aKE6KeI55qE6aG16Z2i5bm26Z2e5pys6Lqr77yM5YiZ5LiN5pi+56S66aKE6KeIXG5cdFx0XHRcdFx0aWYgKHBhdGhQYXRoICE9PSBjdXJyZW50UGFnZU5hbWUpIHtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zdCBhZGRXaWtpOiBzdHJpbmcgPSBsdWFDaGVjaygpO1xuXHRcdFx0XHRpZiAoYWRkV2lraS50cmltKCkpIHtcblx0XHRcdFx0XHQvLyDoi6Xop6PmnpDnu5PmnpzpnZ7nqbrmiY3mlL7nva7pooTop4hcblx0XHRcdFx0XHRhZGRMb2FkaW5nTm90aWNlKCk7IC8vIOaUvue9ruaPkOekuu+8jOaPkOekuuS9v+eUqOiAheetieW+hUFKQVhcblx0XHRcdFx0XHR2b2lkIG13QWRkV2lraVRleHQoYWRkV2lraSwgY3VycmVudFBhZ2VOYW1lLCB0cnVlKTsgLy8g6Iul5Y+W5b6XIF9hZGRUZXh0IOWImeaYvuekuumihOiniFxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKCEkZWxlbWVudEV4aXN0KCcubXctX2FkZFRleHQtY29udGVudCcpICYmIGNoZWNrTXdDb25maWcoJ3dnQWN0aW9uJywgJ3ZpZXcnKSkge1xuXHRcdFx0XHQvLyDmqKHlvI8y77ya5LiN5pSv5oyB5pi+56S655qE54m55q6K6aG16Z2iXG5cdFx0XHRcdC8vIOe7j+afpe+8jOS4jeatouaYr+aooeadv+agt+W8j++8jOaJgOacieacquW1jOWFpScjbXctY2xlYXJ5b3VyY2FjaGUn55qE6aG16Z2i55qG5peg5rOV5q2j5bi45pi+56S6XG5cdFx0XHRcdGlmICghbmVlZFByZXZpZXcoKSkge1xuXHRcdFx0XHRcdHJldHVybjsgLy8g5rKh5pyJ6aKE6KeI5b+F6KaB5pe277yM55u05o6l5YGc5q2i56iL5bqP77yM5LiN57un57ut5Yik5pat77yM5Lul5o+Q6auY5pWI546HXG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCRlbGVtZW50RXhpc3QoJyNtdy1jbGVhcnlvdXJjYWNoZScpKSB7XG5cdFx0XHRcdFx0Ly8g6Iul5bey5pyJI213LWNsZWFyeW91cmNhY2hl5YiZ5YWI5riF5o6J77yM5ZCm5YiZ5Lya5Ye6546w5Lik5LiqTWVkaWFXaWtpOkNsZWFyeW91cmNhY2hlXG5cdFx0XHRcdFx0JGJvZHkuZmluZCgnI213LWNsZWFyeW91cmNhY2hlJykuaHRtbCgnJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCEkZWxlbWVudEV4aXN0KCcjd3BUZXh0Ym94MScpKSB7XG5cdFx0XHRcdFx0Ly8g6Z2e57yW6L6R5qih5byP5omN5omn6KGMICjpooTop4jkvb/nlKjkuIrmlrnnmoRpZuWMuuWdlylcblx0XHRcdFx0XHRhZGRMb2FkaW5nTm90aWNlKCk7IC8vIOaUvue9ruaPkOekuu+8jOaPkOekuuS9v+eUqOiAheetieW+hUFKQVhcblx0XHRcdFx0XHR2b2lkIG13QXBwbHlSZXZpc2lvbihtdy5jb25maWcuZ2V0KCd3Z1JldmlzaW9uSWQnKSwgY3VycmVudFBhZ2VOYW1lKTsgLy8g5Li65LqG6K6p5Y6G5Y+y54mI5pys5q2j5bi45pi+56S677yM5L2/55Sod2dSZXZpc2lvbklk5Y+W5b6X5YaF5a65XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoJGVsZW1lbnRFeGlzdCgnI213LXJldmlzaW9uLWluZm8nKSAmJiBjaGVja013Q29uZmlnKCd3Z0FjdGlvbicsICd2aWV3JykpIHtcblx0XHRcdFx0Ly8g5qih5byPM++8mumhtemdouWOhuWPsueJiOacrOajgOinhu+8muWmgumcgOWkjeafpeeahOmhueebruS4uumhtemdouWOhuWPsueJiOacrO+8jOacrOW3peWFt+aPkOS+m+mhtemdouWOhuWPsueJiOacrOWGheWuueaYvuekuuaUr+aMgVxuXHRcdFx0XHQvLyDmnInltYzlhaUnI213LWNsZWFyeW91cmNhY2hlJ+eahOmhtemdoueahOWOhuWPsueJiOacrOS8muWPquiDveaYvuekuuacgOaWsOeJiOeahCBfYWRkVGV4dCDlm6DmraTmiafooYzkv67mraNcblx0XHRcdFx0aWYgKCEkZWxlbWVudEV4aXN0KCcjd3BUZXh0Ym94MScpKSB7XG5cdFx0XHRcdFx0Ly8g6Z2e57yW6L6R5qih5byP5omN5omn6KGMICjpooTop4jkvb/nlKjkuIrmlrnnmoRpZuWMuuWdlylcblx0XHRcdFx0XHQkYm9keS5maW5kKCcjbXctY2xlYXJ5b3VyY2FjaGUnKS5odG1sKCRub3RpY2VMb2FkaW5nKTsgLy8g5beu5byC5qih5byPKOWQq+ajgOmYheS/ruiuoueJiOacrOWIoOmZpCnnmoTmj5LlhaXngrnkuI3lkIxcblx0XHRcdFx0XHR2b2lkIG13QXBwbHlSZXZpc2lvbihtdy5jb25maWcuZ2V0KCd3Z1JldmlzaW9uSWQnKSwgY3VycmVudFBhZ2VOYW1lKTsgLy8g5Li65LqG6K6p54m55a6a54mI5pys5q2j5bi45pi+56S677yM5L2/55Sod2dSZXZpc2lvbklk5Y+W5b6X5YaF5a65XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlbW92ZUxvYWRpbmdOb3RpY2UoKTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKGNoZWNrTXdDb25maWcoJ3dnUGFnZUNvbnRlbnRNb2RlbCcsIFsnc2NyaWJ1bnRvJywgJ2x1YSddKSkge1xuXHRcdFx0Ly8g5qih5Z2X6aKE6KeI5Yqf6IO9XG5cdFx0XHRpZiAoIW5lZWRQcmV2aWV3KCkpIHtcblx0XHRcdFx0cmV0dXJuOyAvLyDmsqHmnInpooTop4jlv4XopoHml7bvvIznm7TmjqXlgZzmraLnqIvluo/vvIzkuI3nu6fnu63liKTmlq3vvIzku6Xmj5Dpq5jmlYjnjodcblx0XHRcdH1cblx0XHRcdGlmIChcblx0XHRcdFx0JGVsZW1lbnRFeGlzdCgnI3dwVGV4dGJveDEnKSAmJlxuXHRcdFx0XHQkZWxlbWVudEV4aXN0KCd0YWJsZS5kaWZmJykgJiZcblx0XHRcdFx0ISRlbGVtZW50RXhpc3QoJy5wcmV2aWV3bm90ZScpICYmXG5cdFx0XHRcdCFjaGVja013Q29uZmlnKCd3Z0FjdGlvbicsICd2aWV3Jylcblx0XHRcdCkge1xuXHRcdFx0XHQkKCRub3RpY2VMb2FkaW5nKS5pbnNlcnRBZnRlcignI3dpa2lEaWZmJyk7XG5cdFx0XHRcdHZvaWQgbXdBZGRMdWFUZXh0KCgkYm9keS5maW5kKCcjd3BUZXh0Ym94MScpLnZhbCgpIHx8ICcnKS50b1N0cmluZygpLCBjdXJyZW50UGFnZU5hbWUsIHRydWUpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoJGVsZW1lbnRFeGlzdCgnLm13LXVuZGVsZXRlLXJldmlzaW9uJykpIHtcblx0XHRcdC8vIOaooeW8jzTvvJrlt7LliKDpobXpnaLpooTop4hcblx0XHRcdC8vIOW3suWIoOWGheWuuemhtemdouaYr+eJueauiumhtemdou+8jOaXoOazleeUqOW4uOinhOaWueW8j+WIpOaWremhtemdouWGheWuueaooeWei1xuXHRcdFx0aWYgKCFuZWVkUHJldmlldygpKSB7XG5cdFx0XHRcdHJldHVybjsgLy8g5rKh5pyJ6aKE6KeI5b+F6KaB5pe277yM55u05o6l5YGc5q2i56iL5bqP77yM5LiN57un57ut5Yik5pat77yM5Lul5o+Q6auY5pWI546HXG5cdFx0XHR9XG5cdFx0XHRpZiAoJGVsZW1lbnRFeGlzdChbJy5tdy1oaWdobGlnaHQnLCAncHJlJywgJy5tdy1qc29uJ10pKSB7XG5cdFx0XHRcdC8vIOehruiupOato+WcqOmihOiniOW3suWIoOWGheWuuVxuXHRcdFx0XHRjb25zdCAkdHJ5R2V0V2lraSA9ICgkYm9keS5maW5kKCd0ZXh0YXJlYScpLnZhbCgpIHx8ICcnKS50b1N0cmluZygpOyAvLyDlsJ3or5Xlj5blvpflt7LliKDlhoXlrrnmupDku6PnoIFcblx0XHRcdFx0bGV0IHRyeUFkZFdpa2k6IHN0cmluZyA9IGx1YUdldEpTT053aWtpdGV4dCgkdHJ5R2V0V2lraSk7XG5cdFx0XHRcdGlmICh0cnlBZGRXaWtpLnRyaW0oKSA9PT0gJycpIHtcblx0XHRcdFx0XHR0cnlBZGRXaWtpID0gbHVhR2V0Q1NTd2lraXRleHQoJHRyeUdldFdpa2kpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0cnlBZGRXaWtpLnRyaW0oKSAhPT0gJycpIHtcblx0XHRcdFx0XHQvLyDoi6Xlj5blvpcgX2FkZFRleHQg5YiZ5pi+56S66aKE6KeIXG5cdFx0XHRcdFx0YWRkTG9hZGluZ05vdGljZSgpO1xuXHRcdFx0XHRcdHZvaWQgbXdBZGRXaWtpVGV4dCh0cnlBZGRXaWtpLCBtdy5jb25maWcuZ2V0KCd3Z1JlbGV2YW50UGFnZU5hbWUnKSwgdHJ1ZSk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoL21vZHVsZVsgX113aWtpdGV4dC4qX2FkZHRleHQvaS50ZXN0KCRib2R5LmZpbmQoJy5tdy1wYXJzZXItb3V0cHV0JykudGV4dCgpKSkge1xuXHRcdFx0XHRcdC8vIOWwneivlUx1Yeino+aekFxuXHRcdFx0XHRcdC8vIOacrOWKn+iDveebruWJjea1i+ivleato+W4uOi/kOS9nFxuXHRcdFx0XHRcdC8vIOiLpeWTquWkqemihOiniOWPiOWkseaViO+8jOivt+WPlua2iOazqOmHiuS4i+aWuemCo+ihjFxuXHRcdFx0XHRcdC8vIG13QWRkTHVhVGV4dCgkdHJ5R2V0V2lraSwgbXcuY29uZmlnLmdldChcIndnUmVsZXZhbnRQYWdlTmFtZVwiKSwgdHJ1ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKCEkZWxlbWVudEV4aXN0KCcubXctZWRpdG5vdGljZScpICYmIGNoZWNrTXdDb25maWcoJ3dnQ2Fub25pY2FsTmFtZXNwYWNlJywgJ3NwZWNpYWwnKSkge1xuXHRcdFx0Ly8g6Iul54m55q6K6aG16Z2i57y65LmP57yW6L6R5o+Q56S677yM5YiZ6KGl5LiK57yW6L6R5o+Q56S6ICjoi6XlrZjlnKgpXG5cdFx0XHRjb25zdCBwYWdlbmFtZTogc3RyaW5nIHwgZmFsc2UgPSBtdy5jb25maWcuZ2V0KCd3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZScpO1xuXHRcdFx0Y29uc3QgcGFnZVN1Yk5hbWU6IHN0cmluZyA9IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKS5yZXBsYWNlKC9zcGVjaWFsOlteL10rL2ksICcnKTtcblx0XHRcdGlmIChwYWdlbmFtZSAhPT0gZmFsc2UgJiYgcGFnZW5hbWUgIT09IG51bGwgJiYgcGFnZW5hbWUudG9TdHJpbmcoKS50cmltKCkgIT09ICcnKSB7XG5cdFx0XHRcdGNvbnN0IGZ1bGxwYWdlbmFtZTogc3RyaW5nID0gYCR7bXcuY29uZmlnLmdldCgnd2dDYW5vbmljYWxOYW1lc3BhY2UnKX06JHtwYWdlbmFtZX1gO1xuXHRcdFx0XHR2b2lkIG13QXBwbHlOb3RpY2UoZnVsbHBhZ2VuYW1lLCBwYWdlU3ViTmFtZSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZUxvYWRpbmdOb3RpY2UoKTsgLy8g6YO95LiN5piv55qE5oOF5Ya15YiZ5LiN5pi+56S66aKE6KeIXG5cdFx0fVxuXHR9O1xuXG5cdGlmIChtdy5jb25maWcuZ2V0KCd3Z0lzU3BlY2lhbFdpa2l0ZXh0UHJldmlldycpICE9PSB0cnVlKSB7XG5cdFx0Ly8g5LiA6aG15Y+q6LeR5LiA5qyh6aKE6KeIXG5cdFx0Ly8g6YG/5YWN5bCP5bel5YW36YeN5aSN5a6J6KOF5YaS5Ye65LiA5aSn5aCG6aKE6KeIXG5cdFx0Ly8g5qCH6K6w6aKE6KeI5bey6LeR6L+HXG5cdFx0bXcuY29uZmlnLnNldCgnd2dJc1NwZWNpYWxXaWtpdGV4dFByZXZpZXcnLCB0cnVlKTtcblx0XHQvLyDmiafooYzpooTop4hcblx0XHRtd0FkZFByZXZpZXcoKTtcblx0XHQvLyDmo4Dmn6XmtYvor5XmoLfkvotcblx0XHR2b2lkIHdpa2l0ZXh0UHJldmlld1Rlc3RjYXNlKHRydWUpO1xuXHR9XG59O1xuXG4kKHByZXZpZXdUb29sKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7QUFBQTtBQUFBLHdGQUFBQSxTQUFBO0FBQUE7QUFDQSxRQUFJLFFBQVEsU0FBVSxJQUFJO0FBQ3hCLGFBQU8sTUFBTSxHQUFHLFNBQVMsUUFBUTtBQUFBLElBQ25DO0FBR0EsSUFBQUEsUUFBTztBQUFBLElBRUwsTUFBTSxPQUFPLGNBQWMsWUFBWSxVQUFVLEtBQ2pELE1BQU0sT0FBTyxVQUFVLFlBQVksTUFBTTtBQUFBLElBRXpDLE1BQU0sT0FBTyxRQUFRLFlBQVksSUFBSSxLQUNyQyxNQUFNLE9BQU8sVUFBVSxZQUFZLE1BQU0sS0FDekMsTUFBTSxPQUFPLFdBQVEsWUFBWSxPQUFJO0FBQUEsSUFFcEMsMkJBQVk7QUFBRSxhQUFPO0FBQUEsSUFBTSxFQUFHLEtBQUssU0FBUyxhQUFhLEVBQUU7QUFBQTtBQUFBOzs7QUNmOUQ7QUFBQSx1RkFBQUMsU0FBQTtBQUFBO0FBQ0EsSUFBQUEsUUFBTyxVQUFVLFNBQVUsTUFBTTtBQUMvQixVQUFJO0FBQ0YsZUFBTyxDQUFDLENBQUMsS0FBSztBQUFBLE1BQ2hCLFNBQVMsT0FBTztBQUNkLGVBQU87QUFBQSxNQUNUO0FBQUEsSUFDRjtBQUFBO0FBQUE7OztBQ1BBO0FBQUEsNkZBQUFDLFNBQUE7QUFBQTtBQUNBLFFBQUksUUFBUTtBQUdaLElBQUFBLFFBQU8sVUFBVSxDQUFDLE1BQU0sV0FBWTtBQUVsQyxhQUFPLE9BQU8sZUFBZSxDQUFDLEdBQUcsR0FBRyxFQUFFLEtBQUssV0FBWTtBQUFFLGVBQU87QUFBQSxNQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTTtBQUFBLElBQ2pGLENBQUM7QUFB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bW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAibW9kdWxlIiwgImdsb2JhbCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbCIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIlN5bWJvbCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAiZG9jdW1lbnQiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAiVHlwZUVycm9yIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIiQiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJ3aWtpVGV4dEtleSIsICJsdWFBZGRUZXh0IiwgImlucHV0U3RyIiwgIm5ld1N0ciIsICJfZXNjYXBlIiwgImlucHV0U3RyaW5nIiwgInRleHQiLCAiZXNjYXBlU3RyIiwgIkpTT04iLCAicGFyc2UiLCAiY29uY2F0IiwgInN0cmluZ2lmeSIsICJ0b1N0cmluZyIsICJyZXBsYWNlIiwgImx1YUdldFN0cmluZyIsICJzdHIiLCAidGVzdFN0ckFycmF5IiwgImV4ZWMiLCAidGVzdFN0ciIsICJzbGljZSIsICJNYXRoIiwgIm1heCIsICJsZW5ndGgiLCAidHJpbUNoZWNrIiwgInRyaW0iLCAiZmlyc3RDaGFyIiwgImNoYXJBdCIsICJhdCIsICJsdWFHZXRDb250ZW50VGV4dCIsICJ3aWtpdGV4dCIsICJSZWdFeHAiLCAidGVtcFRleHQiLCAibHVhR2V0T2JqVGV4dCIsICJsdWFHZXRDU1N3aWtpdGV4dCIsICJfJGJvZHkkZmluZCR2YWwiLCAiJGJvZHkiLCAiJCIsICJjc3NUZXh0IiwgImZpbmQiLCAidmFsIiwgImx1YUdldEpTd2lraXRleHQiLCAiXyRib2R5JGZpbmQkdmFsMiIsICJqc1RleHQiLCAibHVhR2V0SlNPTndpa2l0ZXh0IiwgIl8kYm9keSRmaW5kJHZhbDMiLCAiSlNPTlRleHQiLCAianNvbkRhdGEiLCAiX2kiLCAiX09iamVjdCRrZXlzIiwgIk9iamVjdCIsICJrZXlzIiwgImtleSIsICJ2IiwgInRlc3QiLCAicHJvcCIsICJoYXNPd24iLCAidGVzdEFyclYiLCAibHVhQ2hlY2siLCAiY29udGVudE1vZGVsIiwgImNvbnRlbnRNb2RlbFRvTG93ZXJDYXNlIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAidG9Mb3dlckNhc2UiLCAiaW5wdXRTdHJfIiwgInByZXZpZXdUb29sIiwgImFwaSIsICJpbml0TXdBcGkiLCAiJG5vdGljZUFkZFRleHQiLCAiJG5vdGljZUxvYWRpbmciLCAid2luZG93IiwgIndnVUxTIiwgIiRub3RpY2VGYWlsIiwgIiRlbGVtZW50RXhpc3QiLCAic2VsZWN0b3JzIiwgInNlbGVjdG9yQXJyYXkiLCAiQXJyYXkiLCAiaXNBcnJheSIsICJlbGVDb3VudCIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAic2VsZWN0b3IiLCAidmFsdWUiLCAiJHNlbGVjdG9yIiwgImVyciIsICJlIiwgImYiLCAiY2hlY2tNd0NvbmZpZyIsICJjaGVja1RhcmdldCIsICJtd0NvbmZpZ3MiLCAibXdDb25maWdEYXRhIiwgIlN0cmluZyIsICJtd0NvbmZpZ0FycmF5IiwgImluY2x1ZGVzIiwgImdldExhbmd1YWdlIiwgImxhbmciLCAiYWRkUGFyc2VkV2lraXRleHQiLCAicGFyc2VkV2lraXRleHQiLCAiJGh0bWxPYmoiLCAiJGVsZW1lbnQiLCAiaHRtbCIsICJob29rIiwgImZpcmUiLCAiaW5zZXJ0QWZ0ZXIiLCAiaW5zZXJ0QmVmb3JlIiwgInNldEh0bWwiLCAiJGh0bWxDb250ZW50IiwgImFkZExvYWRpbmdOb3RpY2UiLCAibG9hZGluZ0ZhaWxOb3RpY2UiLCAicmVtb3ZlTG9hZGluZ05vdGljZSIsICJuZWVkUHJldmlldyIsICJkb2N1bWVudCIsICJkb2N1bWVudEVsZW1lbnQiLCAiaW5uZXJIVE1MIiwgInNlYXJjaCIsICJtd0FkZFdpa2lUZXh0IiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAid2lraVRleHQiLCAicGFnZW5hbWUiLCAiaXNQcmV2aWV3IiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAidGl0bGUiLCAiY29udGVudG1vZGVsIiwgInVzZWxhbmciLCAidXNlc2tpbiIsICJwcmV2aWV3IiwgImRpc2FibGVlZGl0c2VjdGlvbiIsICJkYXRhIiwgInBvc3QiLCAicGFyc2VkV2lraSIsICJfeCIsICJfeDIiLCAiX3gzIiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJtd0FkZEx1YVRleHQiLCAiX3JlZjIiLCAiY2FsbEJhY2siLCAidGVtcE1vZHVsZU5hbWUiLCAibW9kdWxlQ2FsbCIsICJ0ZW1wbGF0ZXNhbmRib3h0aXRsZSIsICJ0ZW1wbGF0ZXNhbmRib3h0ZXh0IiwgInRlbXBsYXRlc2FuZGJveGNvbnRlbnRtb2RlbCIsICJ0ZW1wbGF0ZXNhbmRib3hjb250ZW50Zm9ybWF0IiwgIl94NCIsICJfeDUiLCAiX3g2IiwgIl94NyIsICJtd0FwcGx5UmV2aXNpb24iLCAiX3JlZjMiLCAiX3JldmlzaW9uSWQiLCAiY3VycmVudFBhZ2VOYW1lIiwgIm9sZGlkIiwgInBhZ2VDb250ZW50IiwgIl94OCIsICJfeDkiLCAibXdBcHBseU5vdGljZSIsICJfcmVmNCIsICJwYWdlU3ViTmFtZSIsICJfeDEwIiwgIl94MTEiLCAid2lraXRleHRQcmV2aWV3VGVzdGNhc2UiLCAiX3JlZjUiLCAiJHRlc3RjYXNlTGlzdCIsICJ0ZXN0Y2FzZURhdGFMaXN0IiwgImkiLCAidGVzdGNhc2VJdGVtIiwgImNvZGVJdCIsICJjb2RlSXQwIiwgImNvZGVJdENsYXNzIiwgImF0dHIiLCAiY29kZUlkIiwgImxvYWRJbmRleCIsICJwdXNoIiwgImVsZW1lbnQiLCAiY29kZSIsICJwYWNrYWdlV2lraXRleHQiLCAiX2kyIiwgIl9PYmplY3QkZW50cmllcyIsICJlbnRyaWVzIiwgIl9rZXkiLCAiaXRlbUVsZW1lbnQiLCAiYWRkV2lraSIsICJwcmVwZW5kIiwgIiRwYXJzZWRFbGVtZW50IiwgIl9pMyIsICJfT2JqZWN0JGVudHJpZXMyIiwgImNoZWNrUGFyc2VFbGVtZW50IiwgIiRhZGRUYXJnZXQiLCAiX3gxMiIsICJtd0FkZFByZXZpZXciLCAiJHByZXZpZXdTZWxlY3RvciIsICJfbXckdXRpbCRnZXRVcmwkbWF0Y2giLCAiX213JHV0aWwkZ2V0VXJsJG1hdGNoMiIsICJwYXRoUGF0aCIsICJkZWNvZGVVUkkiLCAidXRpbCIsICJnZXRVcmwiLCAibWF0Y2giLCAiJHRyeUdldFdpa2kiLCAidHJ5QWRkV2lraSIsICJmdWxscGFnZW5hbWUiLCAic2V0Il0KfQo=

})();

/* </nowiki> */

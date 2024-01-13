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

// dist/HotCat/HotCat.js
//! src/HotCat/modules/constant.ts
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
var WG_USER_GROUPS = (_mw$config$get = mw.config.get("wgUserGroups")) !== null && _mw$config$get !== void 0 ? _mw$config$get : [];
var WG_USER_LANGUAGE = mw.config.get("wgUserLanguage");
var WG_WIKI_ID = mw.config.get("wgWikiID");
//! src/HotCat/modules/check.js
var import_ext_gadget = require("ext.gadget.Util");
(function hotCatCheck() {
  if (mw.config.get("wgNamespaceNumber") !== 6 || window.HotCatAutoRemoveCheckCatOptOut || !document.querySelectorAll(".checkcategories")[0]) {
    return;
  }
  const api = (0, import_ext_gadget.initMwApi)("Qiuwen/1.1 (hotCatCheck/2.0; ".concat(WG_WIKI_ID, ")"));
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
  const api = (0, import_ext_gadget2.initMwApi)("Qiuwen/1.1 (HotCat/3.0; ".concat(WG_WIKI_ID, ")"));
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
        k = k.replace(/^\s+|\s+$/g, "");
        v = v.replace(/^\s+|\s+$/g, "");
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
      let v = value[0].replace(/_/g, " ").replace(/^\s+|\s+$/g, "");
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
      cleanKey = cleanKey.replace(/^\s+|\s+$/g, "");
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
        const v = value[0].replace(/_/g, " ").replace(/^\s+|\s+$/g, "");
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mYWlscy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Rlc2NyaXB0b3JzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1jYWxsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NsYXNzb2YtcmF3LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtY2FsbGFibGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nZXQtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXN5bWJvbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RyeS10by1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWNhbGxhYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1Zy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1uYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9tYXRoLXRydW5jLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtYXJyYXkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1zZXQtbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9lcy1ub3QtZXhjZWVkLXNhZmUtaW50ZWdlci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5wdXNoLmpzIiwgInNyYy9Ib3RDYXQvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvSG90Q2F0L21vZHVsZXMvY2hlY2suanMiLCAic3JjL0hvdENhdC9tb2R1bGVzL2dldE1lc3NhZ2UudHMiLCAic3JjL0hvdENhdC9tb2R1bGVzL21lc3NhZ2VzLnRzIiwgInNyYy9Ib3RDYXQvSG90Q2F0LmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIndXNlIHN0cmljdCc7XG52YXIgY2hlY2sgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICYmIGl0Lk1hdGggPT09IE1hdGggJiYgaXQ7XG59O1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxubW9kdWxlLmV4cG9ydHMgPVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZ2xvYmFsLXRoaXMgLS0gc2FmZVxuICBjaGVjayh0eXBlb2YgZ2xvYmFsVGhpcyA9PSAnb2JqZWN0JyAmJiBnbG9iYWxUaGlzKSB8fFxuICBjaGVjayh0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdykgfHxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAtLSBzYWZlXG4gIGNoZWNrKHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYpIHx8XG4gIGNoZWNrKHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsKSB8fFxuICBjaGVjayh0eXBlb2YgdGhpcyA9PSAnb2JqZWN0JyAmJiB0aGlzKSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmMgLS0gZmFsbGJhY2tcbiAgKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pKCkgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBEZXRlY3QgSUU4J3MgaW5jb21wbGV0ZSBkZWZpbmVQcm9wZXJ0eSBpbXBsZW1lbnRhdGlvblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sIDEsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pWzFdICE9PSA3O1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWZ1bmN0aW9uLXByb3RvdHlwZS1iaW5kIC0tIHNhZmVcbiAgdmFyIHRlc3QgPSAoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9KS5iaW5kKCk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gdHlwZW9mIHRlc3QgIT0gJ2Z1bmN0aW9uJyB8fCB0ZXN0Lmhhc093blByb3BlcnR5KCdwcm90b3R5cGUnKTtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgY2FsbCA9IEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9CSU5EID8gY2FsbC5iaW5kKGNhbGwpIDogZnVuY3Rpb24gKCkge1xuICByZXR1cm4gY2FsbC5hcHBseShjYWxsLCBhcmd1bWVudHMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gTmFzaG9ybiB+IEpESzggYnVnXG52YXIgTkFTSE9STl9CVUcgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgJiYgISRwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHsgMTogMiB9LCAxKTtcblxuLy8gYE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGVgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QucHJvdG90eXBlLnByb3BlcnR5aXNlbnVtZXJhYmxlXG5leHBvcnRzLmYgPSBOQVNIT1JOX0JVRyA/IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKFYpIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGhpcywgVik7XG4gIHJldHVybiAhIWRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci5lbnVtZXJhYmxlO1xufSA6ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgY2FsbCA9IEZ1bmN0aW9uUHJvdG90eXBlLmNhbGw7XG52YXIgdW5jdXJyeVRoaXNXaXRoQmluZCA9IE5BVElWRV9CSU5EICYmIEZ1bmN0aW9uUHJvdG90eXBlLmJpbmQuYmluZChjYWxsLCBjYWxsKTtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfQklORCA/IHVuY3VycnlUaGlzV2l0aEJpbmQgOiBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY2FsbC5hcHBseShmbiwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG52YXIgdG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyh7fS50b1N0cmluZyk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBzdHJpbmdTbGljZSh0b1N0cmluZyhpdCksIDgsIC0xKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcbnZhciBzcGxpdCA9IHVuY3VycnlUaGlzKCcnLnNwbGl0KTtcblxuLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3Ncbm1vZHVsZS5leHBvcnRzID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyB0aHJvd3MgYW4gZXJyb3IgaW4gcmhpbm8sIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9yaGluby9pc3N1ZXMvMzQ2XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gISRPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKTtcbn0pID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjbGFzc29mKGl0KSA9PT0gJ1N0cmluZycgPyBzcGxpdChpdCwgJycpIDogJE9iamVjdChpdCk7XG59IDogJE9iamVjdDtcbiIsICIndXNlIHN0cmljdCc7XG4vLyB3ZSBjYW4ndCB1c2UganVzdCBgaXQgPT0gbnVsbGAgc2luY2Ugb2YgYGRvY3VtZW50LmFsbGAgc3BlY2lhbCBjYXNlXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLUlzSFRNTEREQS1pbnRlcm5hbC1zbG90LWFlY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID09PSBudWxsIHx8IGl0ID09PSB1bmRlZmluZWQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYFJlcXVpcmVPYmplY3RDb2VyY2libGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZXF1aXJlb2JqZWN0Y29lcmNpYmxlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXNOdWxsT3JVbmRlZmluZWQoaXQpKSB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJbmRleGVkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoaXQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1Jc0hUTUxEREEtaW50ZXJuYWwtc2xvdFxudmFyIGRvY3VtZW50QWxsID0gdHlwZW9mIGRvY3VtZW50ID09ICdvYmplY3QnICYmIGRvY3VtZW50LmFsbDtcblxuLy8gYElzQ2FsbGFibGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc2NhbGxhYmxlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9uby10eXBlb2YtdW5kZWZpbmVkIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBkb2N1bWVudEFsbCA9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudEFsbCAhPT0gdW5kZWZpbmVkID8gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJyB8fCBhcmd1bWVudCA9PT0gZG9jdW1lbnRBbGw7XG59IDogZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogaXNDYWxsYWJsZShpdCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgYUZ1bmN0aW9uID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBpc0NhbGxhYmxlKGFyZ3VtZW50KSA/IGFyZ3VtZW50IDogdW5kZWZpbmVkO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZXNwYWNlLCBtZXRob2QpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPCAyID8gYUZ1bmN0aW9uKGdsb2JhbFtuYW1lc3BhY2VdKSA6IGdsb2JhbFtuYW1lc3BhY2VdICYmIGdsb2JhbFtuYW1lc3BhY2VdW21ldGhvZF07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB1bmN1cnJ5VGhpcyh7fS5pc1Byb3RvdHlwZU9mKTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBuYXZpZ2F0b3IgIT0gJ3VuZGVmaW5lZCcgJiYgU3RyaW5nKG5hdmlnYXRvci51c2VyQWdlbnQpIHx8ICcnO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50Jyk7XG5cbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgRGVubyA9IGdsb2JhbC5EZW5vO1xudmFyIHZlcnNpb25zID0gcHJvY2VzcyAmJiBwcm9jZXNzLnZlcnNpb25zIHx8IERlbm8gJiYgRGVuby52ZXJzaW9uO1xudmFyIHY4ID0gdmVyc2lvbnMgJiYgdmVyc2lvbnMudjg7XG52YXIgbWF0Y2gsIHZlcnNpb247XG5cbmlmICh2OCkge1xuICBtYXRjaCA9IHY4LnNwbGl0KCcuJyk7XG4gIC8vIGluIG9sZCBDaHJvbWUsIHZlcnNpb25zIG9mIFY4IGlzbid0IFY4ID0gQ2hyb21lIC8gMTBcbiAgLy8gYnV0IHRoZWlyIGNvcnJlY3QgdmVyc2lvbnMgYXJlIG5vdCBpbnRlcmVzdGluZyBmb3IgdXNcbiAgdmVyc2lvbiA9IG1hdGNoWzBdID4gMCAmJiBtYXRjaFswXSA8IDQgPyAxIDogKyhtYXRjaFswXSArIG1hdGNoWzFdKTtcbn1cblxuLy8gQnJvd3NlckZTIE5vZGVKUyBgcHJvY2Vzc2AgcG9seWZpbGwgaW5jb3JyZWN0bHkgc2V0IGAudjhgIHRvIGAwLjBgXG4vLyBzbyBjaGVjayBgdXNlckFnZW50YCBldmVuIGlmIGAudjhgIGV4aXN0cywgYnV0IDBcbmlmICghdmVyc2lvbiAmJiB1c2VyQWdlbnQpIHtcbiAgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2goL0VkZ2VcXC8oXFxkKykvKTtcbiAgaWYgKCFtYXRjaCB8fCBtYXRjaFsxXSA+PSA3NCkge1xuICAgIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9DaHJvbWVcXC8oXFxkKykvKTtcbiAgICBpZiAobWF0Y2gpIHZlcnNpb24gPSArbWF0Y2hbMV07XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2ZXJzaW9uO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLXN5bWJvbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZyAqL1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24nKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcblxudmFyICRTdHJpbmcgPSBnbG9iYWwuU3RyaW5nO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5c3ltYm9scyAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xubW9kdWxlLmV4cG9ydHMgPSAhIU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN5bWJvbCA9IFN5bWJvbCgnc3ltYm9sIGRldGVjdGlvbicpO1xuICAvLyBDaHJvbWUgMzggU3ltYm9sIGhhcyBpbmNvcnJlY3QgdG9TdHJpbmcgY29udmVyc2lvblxuICAvLyBgZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzYCBwb2x5ZmlsbCBzeW1ib2xzIGNvbnZlcnRlZCB0byBvYmplY3QgYXJlIG5vdCBTeW1ib2wgaW5zdGFuY2VzXG4gIC8vIG5iOiBEbyBub3QgY2FsbCBgU3RyaW5nYCBkaXJlY3RseSB0byBhdm9pZCB0aGlzIGJlaW5nIG9wdGltaXplZCBvdXQgdG8gYHN5bWJvbCsnJ2Agd2hpY2ggd2lsbCxcbiAgLy8gb2YgY291cnNlLCBmYWlsLlxuICByZXR1cm4gISRTdHJpbmcoc3ltYm9sKSB8fCAhKE9iamVjdChzeW1ib2wpIGluc3RhbmNlb2YgU3ltYm9sKSB8fFxuICAgIC8vIENocm9tZSAzOC00MCBzeW1ib2xzIGFyZSBub3QgaW5oZXJpdGVkIGZyb20gRE9NIGNvbGxlY3Rpb25zIHByb3RvdHlwZXMgdG8gaW5zdGFuY2VzXG4gICAgIVN5bWJvbC5zaGFtICYmIFY4X1ZFUlNJT04gJiYgVjhfVkVSU0lPTiA8IDQxO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tc3ltYm9sIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zeW1ib2wtY29uc3RydWN0b3ItZGV0ZWN0aW9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX1NZTUJPTFxuICAmJiAhU3ltYm9sLnNoYW1cbiAgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mJyk7XG52YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbm1vZHVsZS5leHBvcnRzID0gVVNFX1NZTUJPTF9BU19VSUQgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyICRTeW1ib2wgPSBnZXRCdWlsdEluKCdTeW1ib2wnKTtcbiAgcmV0dXJuIGlzQ2FsbGFibGUoJFN5bWJvbCkgJiYgaXNQcm90b3R5cGVPZigkU3ltYm9sLnByb3RvdHlwZSwgJE9iamVjdChpdCkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJFN0cmluZyA9IFN0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gJFN0cmluZyhhcmd1bWVudCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuICdPYmplY3QnO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgdHJ5VG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdHJ5LXRvLXN0cmluZycpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYEFzc2VydDogSXNDYWxsYWJsZShhcmd1bWVudCkgaXMgdHJ1ZWBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIGlmIChpc0NhbGxhYmxlKGFyZ3VtZW50KSkgcmV0dXJuIGFyZ3VtZW50O1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcih0cnlUb1N0cmluZyhhcmd1bWVudCkgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkJyk7XG5cbi8vIGBHZXRNZXRob2RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1nZXRtZXRob2Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFYsIFApIHtcbiAgdmFyIGZ1bmMgPSBWW1BdO1xuICByZXR1cm4gaXNOdWxsT3JVbmRlZmluZWQoZnVuYykgPyB1bmRlZmluZWQgOiBhQ2FsbGFibGUoZnVuYyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgT3JkaW5hcnlUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9yZGluYXJ5dG9wcmltaXRpdmVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBwcmVmKSB7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAocHJlZiA9PT0gJ3N0cmluZycgJiYgaXNDYWxsYWJsZShmbiA9IGlucHV0LnRvU3RyaW5nKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKGlzQ2FsbGFibGUoZm4gPSBpbnB1dC52YWx1ZU9mKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHByZWYgIT09ICdzdHJpbmcnICYmIGlzQ2FsbGFibGUoZm4gPSBpbnB1dC50b1N0cmluZykgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHRyeSB7XG4gICAgZGVmaW5lUHJvcGVydHkoZ2xvYmFsLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGdsb2JhbFtrZXldID0gdmFsdWU7XG4gIH0gcmV0dXJuIHZhbHVlO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcblxudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgZGVmaW5lR2xvYmFsUHJvcGVydHkoU0hBUkVELCB7fSk7XG5cbm1vZHVsZS5leHBvcnRzID0gc3RvcmU7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xudmFyIHN0b3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHt9KTtcbn0pKCd2ZXJzaW9ucycsIFtdKS5wdXNoKHtcbiAgdmVyc2lvbjogJzMuMzUuMCcsXG4gIG1vZGU6IElTX1BVUkUgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAxNC0yMDIzIERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJyxcbiAgbGljZW5zZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2Jsb2IvdjMuMzUuMC9MSUNFTlNFJyxcbiAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMnXG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbi8vIGBUb09iamVjdGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvb2JqZWN0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gJE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcblxudmFyIGhhc093blByb3BlcnR5ID0gdW5jdXJyeVRoaXMoe30uaGFzT3duUHJvcGVydHkpO1xuXG4vLyBgSGFzT3duUHJvcGVydHlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1oYXNvd25wcm9wZXJ0eVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1oYXNvd24gLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuaGFzT3duIHx8IGZ1bmN0aW9uIGhhc093bihpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eSh0b09iamVjdChpdCksIGtleSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxudmFyIGlkID0gMDtcbnZhciBwb3N0Zml4ID0gTWF0aC5yYW5kb20oKTtcbnZhciB0b1N0cmluZyA9IHVuY3VycnlUaGlzKDEuMC50b1N0cmluZyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnICsgKGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXkpICsgJylfJyArIHRvU3RyaW5nKCsraWQgKyBwb3N0Zml4LCAzNik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3ltYm9sLWNvbnN0cnVjdG9yLWRldGVjdGlvbicpO1xudmFyIFVTRV9TWU1CT0xfQVNfVUlEID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkJyk7XG5cbnZhciBTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyIFdlbGxLbm93blN5bWJvbHNTdG9yZSA9IHNoYXJlZCgnd2tzJyk7XG52YXIgY3JlYXRlV2VsbEtub3duU3ltYm9sID0gVVNFX1NZTUJPTF9BU19VSUQgPyBTeW1ib2xbJ2ZvciddIHx8IFN5bWJvbCA6IFN5bWJvbCAmJiBTeW1ib2wud2l0aG91dFNldHRlciB8fCB1aWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgaWYgKCFoYXNPd24oV2VsbEtub3duU3ltYm9sc1N0b3JlLCBuYW1lKSkge1xuICAgIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXSA9IE5BVElWRV9TWU1CT0wgJiYgaGFzT3duKFN5bWJvbCwgbmFtZSlcbiAgICAgID8gU3ltYm9sW25hbWVdXG4gICAgICA6IGNyZWF0ZVdlbGxLbm93blN5bWJvbCgnU3ltYm9sLicgKyBuYW1lKTtcbiAgfSByZXR1cm4gV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciBvcmRpbmFyeVRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZScpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbnZhciBUT19QUklNSVRJVkUgPSB3ZWxsS25vd25TeW1ib2woJ3RvUHJpbWl0aXZlJyk7XG5cbi8vIGBUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJpbWl0aXZlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnB1dCwgcHJlZikge1xuICBpZiAoIWlzT2JqZWN0KGlucHV0KSB8fCBpc1N5bWJvbChpbnB1dCkpIHJldHVybiBpbnB1dDtcbiAgdmFyIGV4b3RpY1RvUHJpbSA9IGdldE1ldGhvZChpbnB1dCwgVE9fUFJJTUlUSVZFKTtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKGV4b3RpY1RvUHJpbSkge1xuICAgIGlmIChwcmVmID09PSB1bmRlZmluZWQpIHByZWYgPSAnZGVmYXVsdCc7XG4gICAgcmVzdWx0ID0gY2FsbChleG90aWNUb1ByaW0sIGlucHV0LCBwcmVmKTtcbiAgICBpZiAoIWlzT2JqZWN0KHJlc3VsdCkgfHwgaXNTeW1ib2wocmVzdWx0KSkgcmV0dXJuIHJlc3VsdDtcbiAgICB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbiAgfVxuICBpZiAocHJlZiA9PT0gdW5kZWZpbmVkKSBwcmVmID0gJ251bWJlcic7XG4gIHJldHVybiBvcmRpbmFyeVRvUHJpbWl0aXZlKGlucHV0LCBwcmVmKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xudmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXN5bWJvbCcpO1xuXG4vLyBgVG9Qcm9wZXJ0eUtleWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJvcGVydHlrZXlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBrZXkgPSB0b1ByaW1pdGl2ZShhcmd1bWVudCwgJ3N0cmluZycpO1xuICByZXR1cm4gaXNTeW1ib2woa2V5KSA/IGtleSA6IGtleSArICcnO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgZG9jdW1lbnQgPSBnbG9iYWwuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBFWElTVFMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBFWElTVFMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcblxuLy8gVGhhbmtzIHRvIElFOCBmb3IgaXRzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3JlYXRlRWxlbWVudCgnZGl2JyksICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfVxuICB9KS5hICE9PSA3O1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0luZGV4ZWRPYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhc093bihPLCBQKSkgcmV0dXJuIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcighY2FsbChwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZS5mLCBPLCBQKSwgT1tQXSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbi8vIFY4IH4gQ2hyb21lIDM2LVxuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzMzNFxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0sICdwcm90b3R5cGUnLCB7XG4gICAgdmFsdWU6IDQyLFxuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KS5wcm90b3R5cGUgIT09IDQyO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgJFN0cmluZyA9IFN0cmluZztcbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgQXNzZXJ0OiBUeXBlKGFyZ3VtZW50KSBpcyBPYmplY3RgXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoaXNPYmplY3QoYXJndW1lbnQpKSByZXR1cm4gYXJndW1lbnQ7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKCRTdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgYW4gb2JqZWN0Jyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG52YXIgVjhfUFJPVE9UWVBFX0RFRklORV9CVUcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdjgtcHJvdG90eXBlLWRlZmluZS1idWcnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleScpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBFTlVNRVJBQkxFID0gJ2VudW1lcmFibGUnO1xudmFyIENPTkZJR1VSQUJMRSA9ICdjb25maWd1cmFibGUnO1xudmFyIFdSSVRBQkxFID0gJ3dyaXRhYmxlJztcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0eWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0eVxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgPyBWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA/IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKHR5cGVvZiBPID09PSAnZnVuY3Rpb24nICYmIFAgPT09ICdwcm90b3R5cGUnICYmICd2YWx1ZScgaW4gQXR0cmlidXRlcyAmJiBXUklUQUJMRSBpbiBBdHRyaWJ1dGVzICYmICFBdHRyaWJ1dGVzW1dSSVRBQkxFXSkge1xuICAgIHZhciBjdXJyZW50ID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKTtcbiAgICBpZiAoY3VycmVudCAmJiBjdXJyZW50W1dSSVRBQkxFXSkge1xuICAgICAgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gICAgICBBdHRyaWJ1dGVzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IENPTkZJR1VSQUJMRSBpbiBBdHRyaWJ1dGVzID8gQXR0cmlidXRlc1tDT05GSUdVUkFCTEVdIDogY3VycmVudFtDT05GSUdVUkFCTEVdLFxuICAgICAgICBlbnVtZXJhYmxlOiBFTlVNRVJBQkxFIGluIEF0dHJpYnV0ZXMgPyBBdHRyaWJ1dGVzW0VOVU1FUkFCTEVdIDogY3VycmVudFtFTlVNRVJBQkxFXSxcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlXG4gICAgICB9O1xuICAgIH1cbiAgfSByZXR1cm4gJGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xufSA6ICRkZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiAkZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIGtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0RGVzY3JpcHRvciA9IERFU0NSSVBUT1JTICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbnZhciBFWElTVFMgPSBoYXNPd24oRnVuY3Rpb25Qcm90b3R5cGUsICduYW1lJyk7XG4vLyBhZGRpdGlvbmFsIHByb3RlY3Rpb24gZnJvbSBtaW5pZmllZCAvIG1hbmdsZWQgLyBkcm9wcGVkIGZ1bmN0aW9uIG5hbWVzXG52YXIgUFJPUEVSID0gRVhJU1RTICYmIChmdW5jdGlvbiBzb21ldGhpbmcoKSB7IC8qIGVtcHR5ICovIH0pLm5hbWUgPT09ICdzb21ldGhpbmcnO1xudmFyIENPTkZJR1VSQUJMRSA9IEVYSVNUUyAmJiAoIURFU0NSSVBUT1JTIHx8IChERVNDUklQVE9SUyAmJiBnZXREZXNjcmlwdG9yKEZ1bmN0aW9uUHJvdG90eXBlLCAnbmFtZScpLmNvbmZpZ3VyYWJsZSkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgRVhJU1RTOiBFWElTVFMsXG4gIFBST1BFUjogUFJPUEVSLFxuICBDT05GSUdVUkFCTEU6IENPTkZJR1VSQUJMRVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHN0b3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xuXG52YXIgZnVuY3Rpb25Ub1N0cmluZyA9IHVuY3VycnlUaGlzKEZ1bmN0aW9uLnRvU3RyaW5nKTtcblxuLy8gdGhpcyBoZWxwZXIgYnJva2VuIGluIGBjb3JlLWpzQDMuNC4xLTMuNC40YCwgc28gd2UgY2FuJ3QgdXNlIGBzaGFyZWRgIGhlbHBlclxuaWYgKCFpc0NhbGxhYmxlKHN0b3JlLmluc3BlY3RTb3VyY2UpKSB7XG4gIHN0b3JlLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb25Ub1N0cmluZyhpdCk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RvcmUuaW5zcGVjdFNvdXJjZTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIFdlYWtNYXAgPSBnbG9iYWwuV2Vha01hcDtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0NhbGxhYmxlKFdlYWtNYXApICYmIC9uYXRpdmUgY29kZS8udGVzdChTdHJpbmcoV2Vha01hcCkpO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xuXG52YXIga2V5cyA9IHNoYXJlZCgna2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIGtleXNba2V5XSB8fCAoa2V5c1trZXldID0gdWlkKGtleSkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfV0VBS19NQVAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2Vhay1tYXAtYmFzaWMtZGV0ZWN0aW9uJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcbnZhciBzaGFyZWRLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLWtleScpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcblxudmFyIE9CSkVDVF9BTFJFQURZX0lOSVRJQUxJWkVEID0gJ09iamVjdCBhbHJlYWR5IGluaXRpYWxpemVkJztcbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xudmFyIFdlYWtNYXAgPSBnbG9iYWwuV2Vha01hcDtcbnZhciBzZXQsIGdldCwgaGFzO1xuXG52YXIgZW5mb3JjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaGFzKGl0KSA/IGdldChpdCkgOiBzZXQoaXQsIHt9KTtcbn07XG5cbnZhciBnZXR0ZXJGb3IgPSBmdW5jdGlvbiAoVFlQRSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGl0KSB7XG4gICAgdmFyIHN0YXRlO1xuICAgIGlmICghaXNPYmplY3QoaXQpIHx8IChzdGF0ZSA9IGdldChpdCkpLnR5cGUgIT09IFRZUEUpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0luY29tcGF0aWJsZSByZWNlaXZlciwgJyArIFRZUEUgKyAnIHJlcXVpcmVkJyk7XG4gICAgfSByZXR1cm4gc3RhdGU7XG4gIH07XG59O1xuXG5pZiAoTkFUSVZFX1dFQUtfTUFQIHx8IHNoYXJlZC5zdGF0ZSkge1xuICB2YXIgc3RvcmUgPSBzaGFyZWQuc3RhdGUgfHwgKHNoYXJlZC5zdGF0ZSA9IG5ldyBXZWFrTWFwKCkpO1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1zZWxmLWFzc2lnbiAtLSBwcm90b3R5cGUgbWV0aG9kcyBwcm90ZWN0aW9uICovXG4gIHN0b3JlLmdldCA9IHN0b3JlLmdldDtcbiAgc3RvcmUuaGFzID0gc3RvcmUuaGFzO1xuICBzdG9yZS5zZXQgPSBzdG9yZS5zZXQ7XG4gIC8qIGVzbGludC1lbmFibGUgbm8tc2VsZi1hc3NpZ24gLS0gcHJvdG90eXBlIG1ldGhvZHMgcHJvdGVjdGlvbiAqL1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgaWYgKHN0b3JlLmhhcyhpdCkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIHN0b3JlLnNldChpdCwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHN0b3JlLmdldChpdCkgfHwge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBzdG9yZS5oYXMoaXQpO1xuICB9O1xufSBlbHNlIHtcbiAgdmFyIFNUQVRFID0gc2hhcmVkS2V5KCdzdGF0ZScpO1xuICBoaWRkZW5LZXlzW1NUQVRFXSA9IHRydWU7XG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICBpZiAoaGFzT3duKGl0LCBTVEFURSkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShpdCwgU1RBVEUsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBoYXNPd24oaXQsIFNUQVRFKSA/IGl0W1NUQVRFXSA6IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaGFzT3duKGl0LCBTVEFURSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldCxcbiAgZ2V0OiBnZXQsXG4gIGhhczogaGFzLFxuICBlbmZvcmNlOiBlbmZvcmNlLFxuICBnZXR0ZXJGb3I6IGdldHRlckZvclxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIENPTkZJR1VSQUJMRV9GVU5DVElPTl9OQU1FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLW5hbWUnKS5DT05GSUdVUkFCTEU7XG52YXIgaW5zcGVjdFNvdXJjZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnNwZWN0LXNvdXJjZScpO1xudmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUnKTtcblxudmFyIGVuZm9yY2VJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5lbmZvcmNlO1xudmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldDtcbnZhciAkU3RyaW5nID0gU3RyaW5nO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG52YXIgcmVwbGFjZSA9IHVuY3VycnlUaGlzKCcnLnJlcGxhY2UpO1xudmFyIGpvaW4gPSB1bmN1cnJ5VGhpcyhbXS5qb2luKTtcblxudmFyIENPTkZJR1VSQUJMRV9MRU5HVEggPSBERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHkoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9LCAnbGVuZ3RoJywgeyB2YWx1ZTogOCB9KS5sZW5ndGggIT09IDg7XG59KTtcblxudmFyIFRFTVBMQVRFID0gU3RyaW5nKFN0cmluZykuc3BsaXQoJ1N0cmluZycpO1xuXG52YXIgbWFrZUJ1aWx0SW4gPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSwgbmFtZSwgb3B0aW9ucykge1xuICBpZiAoc3RyaW5nU2xpY2UoJFN0cmluZyhuYW1lKSwgMCwgNykgPT09ICdTeW1ib2woJykge1xuICAgIG5hbWUgPSAnWycgKyByZXBsYWNlKCRTdHJpbmcobmFtZSksIC9eU3ltYm9sXFwoKFteKV0qKVxcKS8sICckMScpICsgJ10nO1xuICB9XG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZ2V0dGVyKSBuYW1lID0gJ2dldCAnICsgbmFtZTtcbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5zZXR0ZXIpIG5hbWUgPSAnc2V0ICcgKyBuYW1lO1xuICBpZiAoIWhhc093bih2YWx1ZSwgJ25hbWUnKSB8fCAoQ09ORklHVVJBQkxFX0ZVTkNUSU9OX05BTUUgJiYgdmFsdWUubmFtZSAhPT0gbmFtZSkpIHtcbiAgICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5KHZhbHVlLCAnbmFtZScsIHsgdmFsdWU6IG5hbWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KTtcbiAgICBlbHNlIHZhbHVlLm5hbWUgPSBuYW1lO1xuICB9XG4gIGlmIChDT05GSUdVUkFCTEVfTEVOR1RIICYmIG9wdGlvbnMgJiYgaGFzT3duKG9wdGlvbnMsICdhcml0eScpICYmIHZhbHVlLmxlbmd0aCAhPT0gb3B0aW9ucy5hcml0eSkge1xuICAgIGRlZmluZVByb3BlcnR5KHZhbHVlLCAnbGVuZ3RoJywgeyB2YWx1ZTogb3B0aW9ucy5hcml0eSB9KTtcbiAgfVxuICB0cnkge1xuICAgIGlmIChvcHRpb25zICYmIGhhc093bihvcHRpb25zLCAnY29uc3RydWN0b3InKSAmJiBvcHRpb25zLmNvbnN0cnVjdG9yKSB7XG4gICAgICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5KHZhbHVlLCAncHJvdG90eXBlJywgeyB3cml0YWJsZTogZmFsc2UgfSk7XG4gICAgLy8gaW4gVjggfiBDaHJvbWUgNTMsIHByb3RvdHlwZXMgb2Ygc29tZSBtZXRob2RzLCBsaWtlIGBBcnJheS5wcm90b3R5cGUudmFsdWVzYCwgYXJlIG5vbi13cml0YWJsZVxuICAgIH0gZWxzZSBpZiAodmFsdWUucHJvdG90eXBlKSB2YWx1ZS5wcm90b3R5cGUgPSB1bmRlZmluZWQ7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgdmFyIHN0YXRlID0gZW5mb3JjZUludGVybmFsU3RhdGUodmFsdWUpO1xuICBpZiAoIWhhc093bihzdGF0ZSwgJ3NvdXJjZScpKSB7XG4gICAgc3RhdGUuc291cmNlID0gam9pbihURU1QTEFURSwgdHlwZW9mIG5hbWUgPT0gJ3N0cmluZycgPyBuYW1lIDogJycpO1xuICB9IHJldHVybiB2YWx1ZTtcbn07XG5cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWV4dGVuZC1uYXRpdmUgLS0gcmVxdWlyZWRcbkZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZyA9IG1ha2VCdWlsdEluKGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gaXNDYWxsYWJsZSh0aGlzKSAmJiBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpLnNvdXJjZSB8fCBpbnNwZWN0U291cmNlKHRoaXMpO1xufSwgJ3RvU3RyaW5nJyk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgbWFrZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWFrZS1idWlsdC1pbicpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywga2V5LCB2YWx1ZSwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcbiAgdmFyIHNpbXBsZSA9IG9wdGlvbnMuZW51bWVyYWJsZTtcbiAgdmFyIG5hbWUgPSBvcHRpb25zLm5hbWUgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubmFtZSA6IGtleTtcbiAgaWYgKGlzQ2FsbGFibGUodmFsdWUpKSBtYWtlQnVpbHRJbih2YWx1ZSwgbmFtZSwgb3B0aW9ucyk7XG4gIGlmIChvcHRpb25zLmdsb2JhbCkge1xuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2UgZGVmaW5lR2xvYmFsUHJvcGVydHkoa2V5LCB2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghb3B0aW9ucy51bnNhZmUpIGRlbGV0ZSBPW2tleV07XG4gICAgICBlbHNlIGlmIChPW2tleV0pIHNpbXBsZSA9IHRydWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2UgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihPLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiAhb3B0aW9ucy5ub25Db25maWd1cmFibGUsXG4gICAgICB3cml0YWJsZTogIW9wdGlvbnMubm9uV3JpdGFibGVcbiAgICB9KTtcbiAgfSByZXR1cm4gTztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuXG4vLyBgTWF0aC50cnVuY2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW1hdGgudHJ1bmNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1tYXRoLXRydW5jIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gTWF0aC50cnVuYyB8fCBmdW5jdGlvbiB0cnVuYyh4KSB7XG4gIHZhciBuID0gK3g7XG4gIHJldHVybiAobiA+IDAgPyBmbG9vciA6IGNlaWwpKG4pO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdHJ1bmMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWF0aC10cnVuYycpO1xuXG4vLyBgVG9JbnRlZ2VyT3JJbmZpbml0eWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvaW50ZWdlcm9yaW5maW5pdHlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBudW1iZXIgPSArYXJndW1lbnQ7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gIHJldHVybiBudW1iZXIgIT09IG51bWJlciB8fCBudW1iZXIgPT09IDAgPyAwIDogdHJ1bmMobnVtYmVyKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xuXG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5cbi8vIEhlbHBlciBmb3IgYSBwb3B1bGFyIHJlcGVhdGluZyBjYXNlIG9mIHRoZSBzcGVjOlxuLy8gTGV0IGludGVnZXIgYmUgPyBUb0ludGVnZXIoaW5kZXgpLlxuLy8gSWYgaW50ZWdlciA8IDAsIGxldCByZXN1bHQgYmUgbWF4KChsZW5ndGggKyBpbnRlZ2VyKSwgMCk7IGVsc2UgbGV0IHJlc3VsdCBiZSBtaW4oaW50ZWdlciwgbGVuZ3RoKS5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgdmFyIGludGVnZXIgPSB0b0ludGVnZXJPckluZmluaXR5KGluZGV4KTtcbiAgcmV0dXJuIGludGVnZXIgPCAwID8gbWF4KGludGVnZXIgKyBsZW5ndGgsIDApIDogbWluKGludGVnZXIsIGxlbmd0aCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHknKTtcblxudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBgVG9MZW5ndGhgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b2xlbmd0aFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGFyZ3VtZW50ID4gMCA/IG1pbih0b0ludGVnZXJPckluZmluaXR5KGFyZ3VtZW50KSwgMHgxRkZGRkZGRkZGRkZGRikgOiAwOyAvLyAyICoqIDUzIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcblxuLy8gYExlbmd0aE9mQXJyYXlMaWtlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbGVuZ3Rob2ZhcnJheWxpa2Vcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdG9MZW5ndGgob2JqLmxlbmd0aCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tYWJzb2x1dGUtaW5kZXgnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnsgaW5kZXhPZiwgaW5jbHVkZXMgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSBsZW5ndGhPZkFycmF5TGlrZShPKTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT09IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gICAgICBpZiAodmFsdWUgIT09IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICBpZiAoKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pICYmIE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBBcnJheS5wcm90b3R5cGUuaW5jbHVkZXNgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmNsdWRlc1xuICBpbmNsdWRlczogY3JlYXRlTWV0aG9kKHRydWUpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmluZGV4T2ZgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmRleG9mXG4gIGluZGV4T2Y6IGNyZWF0ZU1ldGhvZChmYWxzZSlcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgaW5kZXhPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pbmNsdWRlcycpLmluZGV4T2Y7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xuXG52YXIgcHVzaCA9IHVuY3VycnlUaGlzKFtdLnB1c2gpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSAhaGFzT3duKGhpZGRlbktleXMsIGtleSkgJiYgaGFzT3duKE8sIGtleSkgJiYgcHVzaChyZXN1bHQsIGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXNPd24oTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+aW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcHVzaChyZXN1bHQsIGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gSUU4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IFtcbiAgJ2NvbnN0cnVjdG9yJyxcbiAgJ2hhc093blByb3BlcnR5JyxcbiAgJ2lzUHJvdG90eXBlT2YnLFxuICAncHJvcGVydHlJc0VudW1lcmFibGUnLFxuICAndG9Mb2NhbGVTdHJpbmcnLFxuICAndG9TdHJpbmcnLFxuICAndmFsdWVPZidcbl07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGludGVybmFsT2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcblxudmFyIGhpZGRlbktleXMgPSBlbnVtQnVnS2V5cy5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5bmFtZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHluYW1lcyAtLSBzYWZlXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuIGludGVybmFsT2JqZWN0S2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eXN5bWJvbHMgLS0gc2FmZVxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcblxudmFyIGNvbmNhdCA9IHVuY3VycnlUaGlzKFtdLmNvbmNhdCk7XG5cbi8vIGFsbCBvYmplY3Qga2V5cywgaW5jbHVkZXMgbm9uLWVudW1lcmFibGUgYW5kIHN5bWJvbHNcbm1vZHVsZS5leHBvcnRzID0gZ2V0QnVpbHRJbignUmVmbGVjdCcsICdvd25LZXlzJykgfHwgZnVuY3Rpb24gb3duS2V5cyhpdCkge1xuICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUuZihhbk9iamVjdChpdCkpO1xuICB2YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlLmY7XG4gIHJldHVybiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPyBjb25jYXQoa2V5cywgZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSkgOiBrZXlzO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBvd25LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL293bi1rZXlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc291cmNlLCBleGNlcHRpb25zKSB7XG4gIHZhciBrZXlzID0gb3duS2V5cyhzb3VyY2UpO1xuICB2YXIgZGVmaW5lUHJvcGVydHkgPSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mO1xuICB2YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlLmY7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIGlmICghaGFzT3duKHRhcmdldCwga2V5KSAmJiAhKGV4Y2VwdGlvbnMgJiYgaGFzT3duKGV4Y2VwdGlvbnMsIGtleSkpKSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgfVxuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIHJlcGxhY2VtZW50ID0gLyN8XFwucHJvdG90eXBlXFwuLztcblxudmFyIGlzRm9yY2VkID0gZnVuY3Rpb24gKGZlYXR1cmUsIGRldGVjdGlvbikge1xuICB2YXIgdmFsdWUgPSBkYXRhW25vcm1hbGl6ZShmZWF0dXJlKV07XG4gIHJldHVybiB2YWx1ZSA9PT0gUE9MWUZJTEwgPyB0cnVlXG4gICAgOiB2YWx1ZSA9PT0gTkFUSVZFID8gZmFsc2VcbiAgICA6IGlzQ2FsbGFibGUoZGV0ZWN0aW9uKSA/IGZhaWxzKGRldGVjdGlvbilcbiAgICA6ICEhZGV0ZWN0aW9uO1xufTtcblxudmFyIG5vcm1hbGl6ZSA9IGlzRm9yY2VkLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgcmV0dXJuIFN0cmluZyhzdHJpbmcpLnJlcGxhY2UocmVwbGFjZW1lbnQsICcuJykudG9Mb3dlckNhc2UoKTtcbn07XG5cbnZhciBkYXRhID0gaXNGb3JjZWQuZGF0YSA9IHt9O1xudmFyIE5BVElWRSA9IGlzRm9yY2VkLk5BVElWRSA9ICdOJztcbnZhciBQT0xZRklMTCA9IGlzRm9yY2VkLlBPTFlGSUxMID0gJ1AnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRm9yY2VkO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKS5mO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBkZWZpbmVCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbicpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcbnZhciBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcHktY29uc3RydWN0b3ItcHJvcGVydGllcycpO1xudmFyIGlzRm9yY2VkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWZvcmNlZCcpO1xuXG4vKlxuICBvcHRpb25zLnRhcmdldCAgICAgICAgIC0gbmFtZSBvZiB0aGUgdGFyZ2V0IG9iamVjdFxuICBvcHRpb25zLmdsb2JhbCAgICAgICAgIC0gdGFyZ2V0IGlzIHRoZSBnbG9iYWwgb2JqZWN0XG4gIG9wdGlvbnMuc3RhdCAgICAgICAgICAgLSBleHBvcnQgYXMgc3RhdGljIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucHJvdG8gICAgICAgICAgLSBleHBvcnQgYXMgcHJvdG90eXBlIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucmVhbCAgICAgICAgICAgLSByZWFsIHByb3RvdHlwZSBtZXRob2QgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLmZvcmNlZCAgICAgICAgIC0gZXhwb3J0IGV2ZW4gaWYgdGhlIG5hdGl2ZSBmZWF0dXJlIGlzIGF2YWlsYWJsZVxuICBvcHRpb25zLmJpbmQgICAgICAgICAgIC0gYmluZCBtZXRob2RzIHRvIHRoZSB0YXJnZXQsIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy53cmFwICAgICAgICAgICAtIHdyYXAgY29uc3RydWN0b3JzIHRvIHByZXZlbnRpbmcgZ2xvYmFsIHBvbGx1dGlvbiwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLnVuc2FmZSAgICAgICAgIC0gdXNlIHRoZSBzaW1wbGUgYXNzaWdubWVudCBvZiBwcm9wZXJ0eSBpbnN0ZWFkIG9mIGRlbGV0ZSArIGRlZmluZVByb3BlcnR5XG4gIG9wdGlvbnMuc2hhbSAgICAgICAgICAgLSBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gIG9wdGlvbnMuZW51bWVyYWJsZSAgICAgLSBleHBvcnQgYXMgZW51bWVyYWJsZSBwcm9wZXJ0eVxuICBvcHRpb25zLmRvbnRDYWxsR2V0U2V0IC0gcHJldmVudCBjYWxsaW5nIGEgZ2V0dGVyIG9uIHRhcmdldFxuICBvcHRpb25zLm5hbWUgICAgICAgICAgIC0gdGhlIC5uYW1lIG9mIHRoZSBmdW5jdGlvbiBpZiBpdCBkb2VzIG5vdCBtYXRjaCB0aGUga2V5XG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3B0aW9ucywgc291cmNlKSB7XG4gIHZhciBUQVJHRVQgPSBvcHRpb25zLnRhcmdldDtcbiAgdmFyIEdMT0JBTCA9IG9wdGlvbnMuZ2xvYmFsO1xuICB2YXIgU1RBVElDID0gb3B0aW9ucy5zdGF0O1xuICB2YXIgRk9SQ0VELCB0YXJnZXQsIGtleSwgdGFyZ2V0UHJvcGVydHksIHNvdXJjZVByb3BlcnR5LCBkZXNjcmlwdG9yO1xuICBpZiAoR0xPQkFMKSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsO1xuICB9IGVsc2UgaWYgKFNUQVRJQykge1xuICAgIHRhcmdldCA9IGdsb2JhbFtUQVJHRVRdIHx8IGRlZmluZUdsb2JhbFByb3BlcnR5KFRBUkdFVCwge30pO1xuICB9IGVsc2Uge1xuICAgIHRhcmdldCA9IChnbG9iYWxbVEFSR0VUXSB8fCB7fSkucHJvdG90eXBlO1xuICB9XG4gIGlmICh0YXJnZXQpIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIHNvdXJjZVByb3BlcnR5ID0gc291cmNlW2tleV07XG4gICAgaWYgKG9wdGlvbnMuZG9udENhbGxHZXRTZXQpIHtcbiAgICAgIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpO1xuICAgICAgdGFyZ2V0UHJvcGVydHkgPSBkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IudmFsdWU7XG4gICAgfSBlbHNlIHRhcmdldFByb3BlcnR5ID0gdGFyZ2V0W2tleV07XG4gICAgRk9SQ0VEID0gaXNGb3JjZWQoR0xPQkFMID8ga2V5IDogVEFSR0VUICsgKFNUQVRJQyA/ICcuJyA6ICcjJykgKyBrZXksIG9wdGlvbnMuZm9yY2VkKTtcbiAgICAvLyBjb250YWluZWQgaW4gdGFyZ2V0XG4gICAgaWYgKCFGT1JDRUQgJiYgdGFyZ2V0UHJvcGVydHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHR5cGVvZiBzb3VyY2VQcm9wZXJ0eSA9PSB0eXBlb2YgdGFyZ2V0UHJvcGVydHkpIGNvbnRpbnVlO1xuICAgICAgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyhzb3VyY2VQcm9wZXJ0eSwgdGFyZ2V0UHJvcGVydHkpO1xuICAgIH1cbiAgICAvLyBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gICAgaWYgKG9wdGlvbnMuc2hhbSB8fCAodGFyZ2V0UHJvcGVydHkgJiYgdGFyZ2V0UHJvcGVydHkuc2hhbSkpIHtcbiAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShzb3VyY2VQcm9wZXJ0eSwgJ3NoYW0nLCB0cnVlKTtcbiAgICB9XG4gICAgZGVmaW5lQnVpbHRJbih0YXJnZXQsIGtleSwgc291cmNlUHJvcGVydHksIG9wdGlvbnMpO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG5cbi8vIGBJc0FycmF5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXNhcnJheVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LWlzYXJyYXkgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGNsYXNzb2YoYXJndW1lbnQpID09PSAnQXJyYXknO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIFNhZmFyaSA8IDEzIGRvZXMgbm90IHRocm93IGFuIGVycm9yIGluIHRoaXMgY2FzZVxudmFyIFNJTEVOVF9PTl9OT05fV1JJVEFCTEVfTEVOR1RIX1NFVCA9IERFU0NSSVBUT1JTICYmICFmdW5jdGlvbiAoKSB7XG4gIC8vIG1ha2VzIG5vIHNlbnNlIHdpdGhvdXQgcHJvcGVyIHN0cmljdCBtb2RlIHN1cHBvcnRcbiAgaWYgKHRoaXMgIT09IHVuZGVmaW5lZCkgcmV0dXJuIHRydWU7XG4gIHRyeSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFtdLCAnbGVuZ3RoJywgeyB3cml0YWJsZTogZmFsc2UgfSkubGVuZ3RoID0gMTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3IgaW5zdGFuY2VvZiBUeXBlRXJyb3I7XG4gIH1cbn0oKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTSUxFTlRfT05fTk9OX1dSSVRBQkxFX0xFTkdUSF9TRVQgPyBmdW5jdGlvbiAoTywgbGVuZ3RoKSB7XG4gIGlmIChpc0FycmF5KE8pICYmICFnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgJ2xlbmd0aCcpLndyaXRhYmxlKSB7XG4gICAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Nhbm5vdCBzZXQgcmVhZCBvbmx5IC5sZW5ndGgnKTtcbiAgfSByZXR1cm4gTy5sZW5ndGggPSBsZW5ndGg7XG59IDogZnVuY3Rpb24gKE8sIGxlbmd0aCkge1xuICByZXR1cm4gTy5sZW5ndGggPSBsZW5ndGg7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSAweDFGRkZGRkZGRkZGRkZGOyAvLyAyICoqIDUzIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA+IE1BWF9TQUZFX0lOVEVHRVIpIHRocm93ICRUeXBlRXJyb3IoJ01heGltdW0gYWxsb3dlZCBpbmRleCBleGNlZWRlZCcpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG52YXIgc2V0QXJyYXlMZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc2V0LWxlbmd0aCcpO1xudmFyIGRvZXNOb3RFeGNlZWRTYWZlSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2VzLW5vdC1leGNlZWQtc2FmZS1pbnRlZ2VyJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxudmFyIElOQ09SUkVDVF9UT19MRU5HVEggPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBbXS5wdXNoLmNhbGwoeyBsZW5ndGg6IDB4MTAwMDAwMDAwIH0sIDEpICE9PSA0Mjk0OTY3Mjk3O1xufSk7XG5cbi8vIFY4IDw9IDEyMSBhbmQgU2FmYXJpIDw9IDE1LjQ7IEZGIDwgMjMgdGhyb3dzIEludGVybmFsRXJyb3Jcbi8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTEyNjgxXG52YXIgcHJvcGVyRXJyb3JPbk5vbldyaXRhYmxlTGVuZ3RoID0gZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShbXSwgJ2xlbmd0aCcsIHsgd3JpdGFibGU6IGZhbHNlIH0pLnB1c2goKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3IgaW5zdGFuY2VvZiBUeXBlRXJyb3I7XG4gIH1cbn07XG5cbnZhciBGT1JDRUQgPSBJTkNPUlJFQ1RfVE9fTEVOR1RIIHx8ICFwcm9wZXJFcnJvck9uTm9uV3JpdGFibGVMZW5ndGgoKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5wdXNoYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnB1c2hcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBhcml0eTogMSwgZm9yY2VkOiBGT1JDRUQgfSwge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnMgLS0gcmVxdWlyZWQgZm9yIGAubGVuZ3RoYFxuICBwdXNoOiBmdW5jdGlvbiBwdXNoKGl0ZW0pIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpO1xuICAgIHZhciBsZW4gPSBsZW5ndGhPZkFycmF5TGlrZShPKTtcbiAgICB2YXIgYXJnQ291bnQgPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGRvZXNOb3RFeGNlZWRTYWZlSW50ZWdlcihsZW4gKyBhcmdDb3VudCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdDb3VudDsgaSsrKSB7XG4gICAgICBPW2xlbl0gPSBhcmd1bWVudHNbaV07XG4gICAgICBsZW4rKztcbiAgICB9XG4gICAgc2V0QXJyYXlMZW5ndGgoTywgbGVuKTtcbiAgICByZXR1cm4gbGVuO1xuICB9XG59KTtcbiIsICJjb25zdCBXR19VU0VSX0dST1VQUzogc3RyaW5nW10gPSBtdy5jb25maWcuZ2V0KCd3Z1VzZXJHcm91cHMnKSA/PyBbXTtcbmNvbnN0IFdHX1VTRVJfTEFOR1VBR0U6IHN0cmluZyA9IG13LmNvbmZpZy5nZXQoJ3dnVXNlckxhbmd1YWdlJyk7XG5jb25zdCBXR19XSUtJX0lEOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCd3Z1dpa2lJRCcpO1xuXG5leHBvcnQge1dHX1VTRVJfR1JPVVBTLCBXR19VU0VSX0xBTkdVQUdFLCBXR19XSUtJX0lEfTtcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuaW1wb3J0IHtXR19XSUtJX0lEfSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG4vKipcbiAqIENoZWNrQ2F0ZWdvcmllcyBIb3RDYXQgRXh0ZW5zaW9uIOKAk1xuICogcmVtb3ZlcyB0aGUgdGVtcGxhdGUgd2hlbiBjYXRlZ29yaXppbmcgKHByb21wdHMgYmVmb3JlKSB3aXRoIEhvdENhdCBhbmRcbiAqIGFkZHMgYSBsaW5rIFwiQ2F0ZWdvcmllcyBhcmUgT0tcIiB0byB0aGUgY2F0ZWdvcnktc2VjdGlvblxuICpcbiAqIEByZXYgMiAoMjAxNC0wMy0yMClcbiAqIEBhdXRob3IgUmlsbGtlLCAyMDEyXG4gKi9cbihmdW5jdGlvbiBob3RDYXRDaGVjaygpIHtcblx0aWYgKFxuXHRcdG13LmNvbmZpZy5nZXQoJ3dnTmFtZXNwYWNlTnVtYmVyJykgIT09IDYgfHxcblx0XHR3aW5kb3cuSG90Q2F0QXV0b1JlbW92ZUNoZWNrQ2F0T3B0T3V0IHx8XG5cdFx0IWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja2NhdGVnb3JpZXMnKVswXVxuXHQpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Y29uc3QgYXBpID0gaW5pdE13QXBpKGBRaXV3ZW4vMS4xIChob3RDYXRDaGVjay8yLjA7ICR7V0dfV0lLSV9JRH0pYCk7XG5cdGNvbnN0IGNoZWNrQ2F0ZWdvcmllc1JlZ0V4cCA9IC97e1tDY11oZWNrWyBfXWNhdGVnb3JpZXNbXnt9XSp9fS9nO1xuXHRjb25zdCBzZWxmTmFtZSA9ICcoW1tNZWRpYVdpa2k6R2FkZ2V0LUhvdENhdC1jaGVjay5qc3xTY3JpcHRdXSk6ICc7XG5cdGNvbnN0IHN0b3JhZ2VJdGVtTmFtZSA9ICdjaGVja0NhdCc7XG5cdGNvbnN0IHN0b3JhZ2VJdGVtID0gbXcuc3RvcmFnZS5nZXQoc3RvcmFnZUl0ZW1OYW1lKTtcblx0LyoqXG5cdCAqIEEgZmV3IHN0eWxpbmcgaGVscGVyIGZ1bmN0aW9uc1xuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gaWNvbkNsYXNzXG5cdCAqIEByZXR1cm4ge0pRdWVyeX1cblx0ICovXG5cdGNvbnN0IGNyZWF0ZWpJY29uID0gKGljb25DbGFzcykgPT4ge1xuXHRcdHJldHVybiAkKCc8c3Bhbj4nKS5hdHRyKCdjbGFzcycsIGB1aS1pY29uICR7aWNvbkNsYXNzfSBjYXRjaGVjay1pbmxpbmUtaWNvbmApLnRleHQoJyAnKTtcblx0fTtcblx0Y29uc3QgY3JlYXRlTm90aWZ5QXJlYSA9ICh0ZXh0Tm9kZSwgaWNvbiwgc3RhdGUpID0+IHtcblx0XHRyZXR1cm4gJCgnPGRpdj4nKVxuXHRcdFx0LmFkZENsYXNzKCd1aS13aWRnZXQnKVxuXHRcdFx0LmFwcGVuZChcblx0XHRcdFx0JCgnPGRpdj4nKVxuXHRcdFx0XHRcdC5hdHRyKCdjbGFzcycsIGAke3N0YXRlfSB1aS1jb3JuZXItYWxsYClcblx0XHRcdFx0XHQuY3NzKHtcblx0XHRcdFx0XHRcdCdtYXJnaW4tdG9wJzogJzIwcHgnLFxuXHRcdFx0XHRcdFx0cGFkZGluZzogJzAuN2VtJyxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5hcHBlbmQoJCgnPHA+JykuYXBwZW5kKGNyZWF0ZWpJY29uKGljb24pLmNzcygnbWFyZ2luUmlnaHQnLCAnMC4zZW0nKSwgdGV4dE5vZGUpKVxuXHRcdFx0KTtcblx0fTtcblx0Ly8gUmVtb3ZlIFwiY2hlY2sgY2F0ZWdvcmllc1wiIHdoZW4gdXNpbmcgSG90Q2F0XG5cdC8vIE9ubHkgZXhlY3V0ZWQgb24gZmlyc3Qgc3VibWl0XG5cdCQoJ2JvZHknKS5vbmUoJ3N1Ym1pdC5jaGVja0NhdExpc3RlbmVyJywgJyNob3RjYXRDb21taXRGb3JtJywgZnVuY3Rpb24gKGUpIHtcblx0XHRpZiAoc3RvcmFnZUl0ZW0gPT09ICdkaXNhYmxlZCcpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRjb25zdCBuZXdWYWwgPSBzZWxmLndwVGV4dGJveDEudmFsdWUucmVwbGFjZShjaGVja0NhdGVnb3JpZXNSZWdFeHAsICcnKTtcblx0XHRjb25zdCBkbGdCdXR0b25zID0ge307XG5cdFx0bGV0ICRkaWFsb2dDaGVja1N0b3JhZ2U7XG5cdFx0bGV0ICRwZXJtYVNhdmVIaW50O1xuXHRcdGxldCAkdGV4dEhpbnROb2RlO1xuXHRcdGxldCAkZGlhbG9nO1xuXHRcdGNvbnN0IGRvUmVtb3ZlID0gKCkgPT4ge1xuXHRcdFx0c2VsZi53cFN1bW1hcnkudmFsdWUgPSBgUmVtb3ZpbmcgW1tUZW1wbGF0ZTpDaGVjayBjYXRlZ29yaWVzfHske2B7Q2hlY2sgY2F0ZWdvcmllc319XV0gJHtzZWxmLndwU3VtbWFyeS52YWx1ZX1gfWA7XG5cdFx0XHRzZWxmLndwVGV4dGJveDEudmFsdWUgPSBuZXdWYWw7XG5cdFx0fTtcblx0XHRjb25zdCB3cml0ZVN0b3JhZ2UgPSAodmFsKSA9PiB7XG5cdFx0XHRtdy5zdG9yYWdlLnNldChzdG9yYWdlSXRlbU5hbWUsIHZhbCwgNjA0OGUyKTsgLy8gNyBkYXlzXG5cdFx0fTtcblx0XHRkbGdCdXR0b25zWydZZXMsIFJlbW92ZSddID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0ZG9SZW1vdmUoKTtcblx0XHRcdGlmICgkZGlhbG9nQ2hlY2tTdG9yYWdlWzBdLmNoZWNrZWQpIHtcblx0XHRcdFx0d3JpdGVTdG9yYWdlKCdhdXRvJyk7XG5cdFx0XHR9XG5cdFx0XHQkKHRoaXMpLmRpYWxvZygnY2xvc2UnKTtcblx0XHR9O1xuXHRcdGRsZ0J1dHRvbnNbJ05vLCBrZWVwIGl0J10gPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAoJGRpYWxvZ0NoZWNrU3RvcmFnZVswXS5jaGVja2VkKSB7XG5cdFx0XHRcdHdyaXRlU3RvcmFnZSgnZGlzYWJsZWQnKTtcblx0XHRcdH1cblx0XHRcdCQodGhpcykuZGlhbG9nKCdjbG9zZScpO1xuXHRcdH07XG5cdFx0Y29uc3QgX2FkZFRvSlMgPSBmdW5jdGlvbiAoX2UpIHtcblx0XHRcdF9lLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRpZiAoJHBlcm1hU2F2ZUhpbnQuaGFzQ2xhc3MoJ3VpLXN0YXRlLWRpc2FibGVkJykpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgJGVsID0gJCh0aGlzKTtcblx0XHRcdCRlbC5vZmYoJ2NsaWNrJykudGV4dCgnUGxlYXNlIHdhaXQuJyk7XG5cdFx0XHQkcGVybWFTYXZlSGludC5hZGRDbGFzcygndWktc3RhdGUtZGlzYWJsZWQnKTtcblx0XHRcdGNvbnN0IHBhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0XHRcdHRpdGxlOiBgVXNlcjoke213LmNvbmZpZy5nZXQoJ3dnVXNlck5hbWUnKX0vY29tbW9uLmpzYCxcblx0XHRcdFx0c3VtbWFyeTogYCR7c2VsZk5hbWV9U2F2aW5nIEhvdENhdCBjb25maWd1cmF0aW9uLmAsXG5cdFx0XHRcdGFwcGVuZHRleHQ6ICRlbC5kYXRhKCdhZGRUZXh0JyksXG5cdFx0XHR9O1xuXHRcdFx0Y29uc3QgZWRpdERvbmUgPSAoZWRpdFN0YXQpID0+IHtcblx0XHRcdFx0aWYgKCFlZGl0U3RhdCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZWRpdFN0YXQuZXJyb3IpIHtcblx0XHRcdFx0XHRtdy5ub3RpZnkoXG5cdFx0XHRcdFx0XHRgVW5hYmxlIHRvIHNhdmUgdG8geW91ciBjb21tb24uanMgdXNpbmcgdGhlIEFQSVxcbiR7ZWRpdFN0YXQuZXJyb3IuY29kZX1cXG4ke2VkaXRTdGF0LmVycm9yLmluZm99YCxcblx0XHRcdFx0XHRcdHt0YWc6ICdob3RDYXRDaGVjaycsIHR5cGU6ICdlcnJvcid9XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHQkZWwudGV4dCgnRWRpdC1FcnJvciEnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkZWwudGV4dCgnRG9uZS4nKTtcblx0XHRcdFx0XHQkcGVybWFTYXZlSGludC5mYWRlT3V0KCk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHRhcGkucG9zdFdpdGhUb2tlbignY3NyZicsIHBhcmFtcykudGhlbihlZGl0RG9uZSk7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBPbiBXaWtpbWVkaWEgQ29tbW9ucyB0aGVyZSB3ZXJlIHBlb3BsZSB3aG8gc2FpZDpcblx0XHQgKiBcIkNhdGVnb3JpemluZyB3aXRoIEhvdENhdCBkb2VzIGxlZ2l0IGF1dG9tYXRlZCByZW1vdmFsIG9mIHRoZSBjaGVjay1jYXQtbWVzc2FnZVwiXG5cdFx0ICogU28gd2UgaW52ZW50ZWQgYSBkaWFsb2cgdGhhdCBzaG91bGQgYmUgcmVhZGFibGUgYnkgdXNlcnMgZXZlbiB3aXRoIHZlcnkgZmV3IEVuZ2xpc2ggc2tpbGxzLlxuXHRcdCAqL1xuXHRcdGNvbnN0IHByb21wdCA9ICgpID0+IHtcblx0XHRcdCRkaWFsb2dDaGVja1N0b3JhZ2UgPSAkKCc8aW5wdXQ+Jylcblx0XHRcdFx0LmF0dHIoe1xuXHRcdFx0XHRcdHR5cGU6ICdjaGVja2JveCcsXG5cdFx0XHRcdFx0aWQ6ICdob3RDYXRBdXRvUmVtb3ZlQ2hlY2tDYXRTdG9yYWdlJyxcblx0XHRcdFx0fSlcblx0XHRcdFx0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0aWYgKHRoaXMuY2hlY2tlZCkge1xuXHRcdFx0XHRcdFx0JHBlcm1hU2F2ZUhpbnQuZmFkZUluKCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdCRwZXJtYVNhdmVIaW50LmZhZGVPdXQoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0JHRleHRIaW50Tm9kZSA9ICQoJzx1bD4nKTtcblx0XHRcdCQoJzxsaT4nKVxuXHRcdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHRcdCQoJzxhPicpXG5cdFx0XHRcdFx0XHQuYXR0cignaHJlZicsICcjJylcblx0XHRcdFx0XHRcdC50ZXh0KCdEaXNhYmxlIHRoaXMgZmVhdHVyZS4nKVxuXHRcdFx0XHRcdFx0LmRhdGEoJ2FkZFRleHQnLCAnXFxud2luZG93LkhvdENhdEF1dG9SZW1vdmVDaGVja0NhdE9wdE91dCA9IHRydWU7Jylcblx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBfYWRkVG9KUylcblx0XHRcdFx0KVxuXHRcdFx0XHQuYXBwZW5kVG8oJHRleHRIaW50Tm9kZSk7XG5cdFx0XHQkKCc8bGk+Jylcblx0XHRcdFx0LmFwcGVuZChcblx0XHRcdFx0XHQkKCc8YT4nKVxuXHRcdFx0XHRcdFx0LmF0dHIoJ2hyZWYnLCAnIycpXG5cdFx0XHRcdFx0XHQudGV4dCgnUmVtb3ZlIHt7Y2hlY2sgY2F0ZWdvcmllc319IHdoZW4gZWRpdGluZyB1c2luZyBIb3RDYXQgd2l0aG91dCBwcm9tcHRpbmcuJylcblx0XHRcdFx0XHRcdC5kYXRhKCdhZGRUZXh0JywgJ1xcbndpbmRvdy5Ib3RDYXRBdXRvUmVtb3ZlQ2hlY2tDYXQgPSB0cnVlOycpXG5cdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgX2FkZFRvSlMpXG5cdFx0XHRcdClcblx0XHRcdFx0LmFwcGVuZFRvKCR0ZXh0SGludE5vZGUpO1xuXHRcdFx0JHBlcm1hU2F2ZUhpbnQgPSBjcmVhdGVOb3RpZnlBcmVhKFxuXHRcdFx0XHQkKCc8c3Bhbj4nKS50ZXh0KCdTYXZlIHRoZXNlIHNldHRpbmcgaW4geW91ciBjb21tb24uanM6ICcpLmFwcGVuZCgkdGV4dEhpbnROb2RlKSxcblx0XHRcdFx0J3VpLWljb24taW5mbycsXG5cdFx0XHRcdCd1aS1zdGF0ZS1oaWdobGlnaHQnXG5cdFx0XHQpO1xuXHRcdFx0JGRpYWxvZyA9ICQoJzxkaXY+Jylcblx0XHRcdFx0LmFwcGVuZChcblx0XHRcdFx0XHQkKCc8c3Bhbj4nKVxuXHRcdFx0XHRcdFx0LmNzcyh7XG5cdFx0XHRcdFx0XHRcdCdmb250LXNpemUnOiAnMmVtJyxcblx0XHRcdFx0XHRcdFx0J2xpbmUtaGVpZ2h0JzogJzEuOGVtJyxcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHRcdFx0XHQkKCc8c3Bhbj4nKS50ZXh0KCcge3tjaGVjayBjYXRlZ29yaWVzfX0gJykuY3NzKHtcblx0XHRcdFx0XHRcdFx0XHQnYmFja2dyb3VuZC1jb2xvcic6ICcjRjhDQ0IwJyxcblx0XHRcdFx0XHRcdFx0XHQndGV4dC1kZWNvcmF0aW9uJzogJ2xpbmUtdGhyb3VnaCAhaW1wb3J0YW50Jyxcblx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcblx0XHRcdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0XHRcdCQoJzxzcGFuPicpLnRleHQoJyA/Jylcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0KVxuXHRcdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHRcdCc8YnI+Jyxcblx0XHRcdFx0XHQkZGlhbG9nQ2hlY2tTdG9yYWdlLFxuXHRcdFx0XHRcdCQoJzxsYWJlbD4nKS5hdHRyKCdmb3InLCAnaG90Q2F0QXV0b1JlbW92ZUNoZWNrQ2F0U3RvcmFnZScpLnRleHQoXCJEb24ndCBhc2sgYWdhaW5cIiksXG5cdFx0XHRcdFx0Jzxicj4nXG5cdFx0XHRcdClcblx0XHRcdFx0LmFwcGVuZChtdy51c2VyLmlzQW5vbigpID8gJycgOiAkcGVybWFTYXZlSGludC5oaWRlKCkpO1xuXHRcdFx0JGRpYWxvZy5kaWFsb2coe1xuXHRcdFx0XHRtb2RhbDogdHJ1ZSxcblx0XHRcdFx0Y2xvc2VPbkVzY2FwZTogdHJ1ZSxcblx0XHRcdFx0dGl0bGU6ICd7e2NoZWNrIGNhdGVnb3JpZXN9fSAo4oiSKT8nLFxuXHRcdFx0XHR3aWR0aDogNDUwLFxuXHRcdFx0XHRidXR0b25zOiBkbGdCdXR0b25zLFxuXHRcdFx0XHRjbG9zZTogKCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRcdFx0XHRcdCRib2R5LmZpbmQoJyNob3RjYXRDb21taXRGb3JtJykudHJpZ2dlcignc3VibWl0Jyk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdG9wZW4oKSB7XG5cdFx0XHRcdFx0Y29uc3QgJGJ1dHRvbnMgPSAkKHRoaXMpLnBhcmVudCgpLmZpbmQoJy51aS1kaWFsb2ctYnV0dG9ucGFuZSBidXR0b24nKTtcblx0XHRcdFx0XHQkYnV0dG9ucy5lcSgwKS5idXR0b24oe1xuXHRcdFx0XHRcdFx0aWNvbnM6IHtcblx0XHRcdFx0XHRcdFx0cHJpbWFyeTogJ3VpLWljb24tY2lyY2xlLWNoZWNrJyxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0JGJ1dHRvbnMuZXEoMSkuYnV0dG9uKHtcblx0XHRcdFx0XHRcdGljb25zOiB7XG5cdFx0XHRcdFx0XHRcdHByaW1hcnk6ICd1aS1pY29uLWNhbmNlbCcsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9LFxuXHRcdFx0fSk7XG5cdFx0fTtcblx0XHRpZiAobmV3VmFsICE9PSBzZWxmLndwVGV4dGJveDEudmFsdWUpIHtcblx0XHRcdGlmICh3aW5kb3cuSG90Q2F0QXV0b1JlbW92ZUNoZWNrQ2F0IHx8IHN0b3JhZ2VJdGVtID09PSAnYXV0bycpIHtcblx0XHRcdFx0ZG9SZW1vdmUoKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRwcm9tcHQoKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0pO1xuXHQvLyBBZGQgT0stTGluayB0byB0aGUgY2F0cyBwYW5lbFxuXHRjb25zdCAkb2tMaW5rID0gJCgnPGE+Jylcblx0XHQuYXR0cih7XG5cdFx0XHRocmVmOiAnIycsXG5cdFx0XHR0aXRsZTogJ0NhdGVnb3JpZXMgYXJlIE9LISBJbW1lZGlhdGVseSByZW1vdmUgdGhlIHRlbXBsYXRlLicsXG5cdFx0fSlcblx0XHQuYXBwZW5kKCc8cz4nKVxuXHRcdC50ZXh0KCd7e0NoZWNrIGNhdGVnb3JpZXN9fScpO1xuXHQkb2tMaW5rLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGNvbnN0ICRlbCA9ICQodGhpcyk7XG5cdFx0JGVsLm9mZignY2xpY2snKTtcblx0XHRjb25zdCBkb0VkaXQgPSAocmVzdWx0KSA9PiB7XG5cdFx0XHRpZiAoIXJlc3VsdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHQkZWwudGV4dCgnRG9pbmcuJyk7XG5cdFx0XHRjb25zdCB0ZXh0ID0gcmVzdWx0LnJlcGxhY2UoY2hlY2tDYXRlZ29yaWVzUmVnRXhwLCAnJyk7XG5cdFx0XHRpZiAodGV4dCA9PT0gcmVzdWx0KSB7XG5cdFx0XHRcdCRlbC50ZXh0KCdUZW1wbGF0ZSBub3QgZm91bmQhJyk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHBhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0XHRcdHRpdGxlOiBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJyksXG5cdFx0XHRcdHN1bW1hcnk6IGAke3NlbGZOYW1lfUNhdGVnb3JpZXMgYXJlIGNoZWNrZWQgYW5kIE9LLiBZb3UgY2FuIGhlbHAgW1tDYXRlZ29yeTpNZWRpYSBuZWVkaW5nIGNhdGVnb3J5IHJldmlld3xyZXZpZXdpbmddXSFgLFxuXHRcdFx0XHRub2NyZWF0ZTogdHJ1ZSxcblx0XHRcdFx0dGV4dCxcblx0XHRcdH07XG5cdFx0XHRjb25zdCBlZGl0RG9uZSA9IChlZGl0U3RhdCkgPT4ge1xuXHRcdFx0XHRpZiAoIWVkaXRTdGF0KSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChlZGl0U3RhdC5lcnJvcikge1xuXHRcdFx0XHRcdG13Lm5vdGlmeShcblx0XHRcdFx0XHRcdGBVbmFibGUgdG8gcmVtb3ZlIFwiQ2hlY2sgY2F0ZWdvcmllc1wiIHdpdGggdGhlIEFQSVxcbiR7ZWRpdFN0YXQuZXJyb3IuY29kZX1cXG4ke2VkaXRTdGF0LmVycm9yLmluZm99YCxcblx0XHRcdFx0XHRcdHt0YWc6ICdob3RDYXRDaGVjaycsIHR5cGU6ICdlcnJvcid9XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHQkZWwudGV4dCgnRWRpdC1FcnJvciEnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkZWwudGV4dCgnRWRpdCBEb25lLicpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRcdFx0XHQkYm9keS5maW5kKCcuY2hlY2tjYXRlZ29yaWVzJykuZmFkZU91dCgpO1xuXHRcdFx0fTtcblx0XHRcdCRlbC50ZXh0KCdEb2luZy4uJyk7XG5cdFx0XHRhcGkucG9zdFdpdGhUb2tlbignY3NyZicsIHBhcmFtcykudGhlbihlZGl0RG9uZSk7XG5cdFx0fTtcblx0XHQkZWwudGV4dCgnRG9pbmcnKTtcblx0XHQkLmFqYXgoe1xuXHRcdFx0dXJsOiBtdy5jb25maWcuZ2V0KCd3Z1NjcmlwdCcpLFxuXHRcdFx0ZGF0YToge1xuXHRcdFx0XHRhY3Rpb246ICdyYXcnLFxuXHRcdFx0XHR0aXRsZTogbXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpLnJlcGxhY2UoLyAvZywgJ18nKSxcblx0XHRcdH0sXG5cdFx0XHRkYXRhVHlwZTogJ3RleHQnLFxuXHRcdFx0ZXJyb3I6ICgpID0+IHtcblx0XHRcdFx0JGVsLnRleHQoJ0Vycm9yIScpO1xuXHRcdFx0fSxcblx0XHRcdHN1Y2Nlc3M6IGRvRWRpdCxcblx0XHRcdHR5cGU6ICdHRVQnLFxuXHRcdFx0Y2FjaGU6IGZhbHNlLFxuXHRcdH0pO1xuXHR9KTtcblx0JChmdW5jdGlvbiBsb2FkSG90Q2F0Q2hlY2soKSB7XG5cdFx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdFx0JGJvZHkuZmluZCgnI2NhdGxpbmtzJykuZmluZCgndWw6Zmlyc3QnKS5hcHBlbmQoJCgnPGxpPicpLmFwcGVuZCgkb2tMaW5rKSk7XG5cdH0pO1xufSkoKTtcbiIsICJjb25zdCBnZXRNZXNzYWdlID0gKGtleTogc3RyaW5nLCAuLi5hcmdzOiBzdHJpbmdbXSk6IHN0cmluZyA9PiB7XG5cdGtleSA9IGBob3RjYXQtJHtrZXl9YDtcblx0Ly8gTWVzc2FnZXMgdGhhdCBjYW4gYmUgdXNlZCBoZXJlOlxuXHQvLyAqIHNlZSBtZXNzYWdlcy50c1xuXHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdHJldHVybiBtdy5tZXNzYWdlKGtleSwgLi4uYXJncykucGxhaW4oKTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtXR19VU0VSX0xBTkdVQUdFfSBmcm9tICcuL2NvbnN0YW50JztcblxuZXhwb3J0IGNvbnN0IGhvdENhdE1lc3NhZ2VzID0gKCk6IHZvaWQgPT4ge1xuXHRpZiAoWyd6aC1oYW50JywgJ3poLWhrJywgJ3poLW1vJywgJ3poLXR3J10uaW5jbHVkZXMoV0dfVVNFUl9MQU5HVUFHRSkpIHtcblx0XHRtdy5tZXNzYWdlcy5zZXQoe1xuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYXRfcmVtb3ZlZCc6ICflt7Lnp7vpmaRbW0NhdGVnb3J5OiQxXV0nLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy10ZW1wbGF0ZV9yZW1vdmVkJzogJ+W3suenu+mZpHt7W1tDYXRlZ29yeTokMV1dfX0nLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYXRfYWRkZWQnOiAn5bey5re75YqgW1tDYXRlZ29yeTokMV1dJyxcblx0XHRcdC8vICQyIGlzIHRoZSBuZXcga2V5XG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhdF9rZXljaGFuZ2UnOiAn5bey6Kit572uW1tDYXRlZ29yeTokMV1d55qE5paw5o6S5bqP5a2X77yaXCIkMlwiJyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2F0X25vdEZvdW5kJzogJ+WIhumhnuKAnCQx4oCd5rKS5pyJ5om+5YiwJyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2F0X2V4aXN0cyc6ICfliIbpoZ7igJwkMeKAneW3sue2k+WtmOWcqO+8jOaykuaciea3u+WKoOOAgicsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhdF9yZXNvbHZlZCc6ICfvvIjph43lrprlkJFbW0NhdGVnb3J5OiQxXV3lt7LomZXnkIbvvIknLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy11bmNhdF9yZW1vdmVkJzogJ+W3suenu+mZpHt7dW5jYXRlZ29yaXplZH19Jyxcblx0XHRcdC8vIFNvbWUgdGV4dCB0byBwcmVmaXggdG8gdGhlIGVkaXQgc3VtbWFyeS5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtcHJlZml4JzogJ+S9v+eUqFtbSDpIT1RDQVR8SG90Q2F0XV0nLFxuXHRcdFx0Ly8gU29tZSB0ZXh0IHRvIGFwcGVuZCB0byB0aGUgZWRpdCBzdW1tYXJ5LiBOYW1lZCAndXNpbmcnIGZvciBoaXN0b3JpY2FsIHJlYXNvbnMuIElmIHlvdSBwcmVmZXJcblx0XHRcdC8vIHRvIGhhdmUgYSBtYXJrZXIgYXQgdGhlIGZyb250LCB1c2UgcHJlZml4IGFuZCBzZXQgdGhpcyB0byB0aGUgZW1wdHkgc3RyaW5nLlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy11c2luZyc6ICcnLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1tdWx0aV9jaGFuZ2UnOiAnJDHlgIvliIbpoZ4nLFxuXHRcdFx0Ly8gQW55IGNhdGVnb3J5IGluIHRoaXMgY2F0ZWdvcnkgaXMgZGVlbWVkIGEgZGlzYW1iaWd1YXRpb24gY2F0ZWdvcnk7IGkuZS4sIGEgY2F0ZWdvcnkgdGhhdCBzaG91bGQgbm90IGNvbnRhaW5cblx0XHRcdC8vIGFueSBpdGVtcywgYnV0IHRoYXQgY29udGFpbnMgbGlua3MgdG8gb3RoZXIgY2F0ZWdvcmllcyB3aGVyZSBzdHVmZiBzaG91bGQgYmUgY2F0ZWdvcml6ZWQuIElmIHlvdSBkb24ndCBoYXZlXG5cdFx0XHQvLyB0aGF0IGNvbmNlcHQgb24geW91ciB3aWtpLCBzZXQgaXQgdG8gYmxhbmsgc3RyaW5nLiBVc2UgYmxhbmtzLCBub3QgdW5kZXJzY29yZXMuXG5cdFx0XHQnaG90Y2F0LWRpc2FtYmlnX2NhdGVnb3J5JzogJycsXG5cdFx0XHQvLyBBbnkgY2F0ZWdvcnkgaW4gdGhpcyBjYXRlZ29yeSBpcyBkZWVtZWQgYSAoc29mdCkgcmVkaXJlY3QgdG8gc29tZSBvdGhlciBjYXRlZ29yeSBkZWZpbmVkIGJ5IGEgbGlua1xuXHRcdFx0Ly8gdG8gYW5vdGhlciBub24tYmxhY2tsaXN0ZWQgY2F0ZWdvcnkuIElmIHlvdXIgd2lraSBkb2Vzbid0IGhhdmUgc29mdCBjYXRlZ29yeSByZWRpcmVjdHMsIHNldCB0aGlzIHRvIG51bGwuXG5cdFx0XHQvLyBJZiBhIHNvZnQtcmVkaXJlY3RlZCBjYXRlZ29yeSBjb250YWlucyBtb3JlIHRoYW4gb25lIGxpbmsgdG8gYW5vdGhlciBub24tYmxhY2tsaXN0ZWQgY2F0ZWdvcnksIGl0J3MgY29uc2lkZXJlZFxuXHRcdFx0Ly8gYSBkaXNhbWJpZ3VhdGlvbiBjYXRlZ29yeSBpbnN0ZWFkLlxuXHRcdFx0J2hvdGNhdC1yZWRpcl9jYXRlZ29yeSc6ICflt7Lph43lrprlkJHnmoTliIbnsbsnLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1zZXBhcmF0b3InOiAnOyAnLFxuXHRcdFx0Ly8gJDEgaXMgcmVwbGFjZWQgYnkgYSBudW1iZXIuIElmIHlvdXIgbGFuZ3VhZ2UgaGFzIHNldmVyYWwgcGx1cmFsIGZvcm1zIChjLmYuIFtbOmVud2lraTpEdWFsIChncmFtbWF0aWNhbCBmb3JtKV1dKSxcblx0XHRcdC8vIHlvdSBjYW4gc2V0IHRoaXMgdG8gYW4gYXJyYXkgb2Ygc3RyaW5ncyBzdWl0YWJsZSBmb3IgcGFzc2luZyB0byBtdy5sYW5ndWFnZS5jb25maWdQbHVyYWwoKS5cblx0XHRcdC8vIElmIHRoYXQgZnVuY3Rpb24gZG9lc24ndCBleGlzdCwgSG90Q2F0IHdpbGwgc2ltcGx5IGZhbGwgYmFjayB0byB1c2luZyB0aGUgbGFzdFxuXHRcdFx0Ly8gZW50cnkgaW4gdGhlIGFycmF5LlxuXHRcdFx0Ly8gRGVmYXVsdHMgdG8gJ1tbJyArIGNhdGVnb3J5X2Nhbm9uaWNhbCArICc6JDFdXScuIENhbiBiZSBvdmVycmlkZGVuIGlmIGluIHRoZSBzaG9ydCBlZGl0IHN1bW1hcmllc1xuXHRcdFx0Ly8gbm90IHRoZSBzdGFuZGFyZCBjYXRlZ29yeSBuYW1lIHNob3VsZCBiZSB1c2VkIGJ1dCwgc2F5LCBhIHNob3J0ZXIgbmFtZXNwYWNlIGFsaWFzLiAkMSBpcyByZXBsYWNlZFxuXHRcdFx0Ly8gYnkgYSBjYXRlZ29yeSBuYW1lLlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnOiAnJDEnLFxuXHRcdFx0Ly8gQnV0dG9uIHRleHQuIExvY2FsaXplIHRvIHdnQ29udGVudExhbmd1YWdlIGhlcmU7IGxvY2FsaXplIHRvIHdnVXNlckxhbmd1YWdlIGluIGEgc3VicGFnZSxcblx0XHRcdC8vIHNlZSBsb2NhbGl6YXRpb24gaG9vayBiZWxvdy5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY29tbWl0JzogJ+WEsuWtmCcsXG5cdFx0XHQvLyBCdXR0b24gdGV4dC4gTG9jYWxpemUgdG8gd2dDb250ZW50TGFuZ3VhZ2UgaGVyZTsgbG9jYWxpemUgdG8gd2dVc2VyTGFuZ3VhZ2UgaW4gYSBzdWJwYWdlLFxuXHRcdFx0Ly8gc2VlIGxvY2FsaXphdGlvbiBob29rIGJlbG93LlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1vayc6ICfnorrlrponLFxuXHRcdFx0Ly8gQnV0dG9uIHRleHQuIExvY2FsaXplIHRvIHdnQ29udGVudExhbmd1YWdlIGhlcmU7IGxvY2FsaXplIHRvIHdnVXNlckxhbmd1YWdlIGluIGEgc3VicGFnZSxcblx0XHRcdC8vIHNlZSBsb2NhbGl6YXRpb24gaG9vayBiZWxvdy5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2FuY2VsJzogJ+WPlua2iCcsXG5cdFx0XHQvLyBMb2NhbGl6ZSB0byB3Z0NvbnRlbnRMYW5ndWFnZSBoZXJlOyBsb2NhbGl6ZSB0byB3Z1VzZXJMYW5ndWFnZSBpbiBhIHN1YnBhZ2UsXG5cdFx0XHQvLyBzZWUgbG9jYWxpemF0aW9uIGhvb2sgYmVsb3cuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLW11bHRpX2Vycm9yJzpcblx0XHRcdFx0J+eEoeazleW+nuS8uuacjeWZqOWPluW+l+mggemdouaWh+Wtl+OAguWboOatpO+8jOaCqOeahOWIhumhnuiuiuabtOeEoeazleWEsuWtmOOAguaIkeWAkeeCuuatpOS4jeS+v+ihqOekuuaKseatieOAgicsXG5cdFx0XHQvLyBQbHVyYWwgb2YgY2F0ZWdvcnlfY2Fub25pY2FsLlxuXHRcdFx0J2hvdGNhdC1jYXRlZ29yaWVzJzogJ+WIhumhnicsXG5cdFx0XHQvLyBOYW1lcyBmb3IgdGhlIHNlYXJjaCBlbmdpbmVzXG5cdFx0XHQnaG90Y2F0LWVuZ2luZV9uYW1lcy1zZWFyY2hpbmRleCc6ICfmkJzlsIvntKLlvJUnLFxuXHRcdFx0J2hvdGNhdC1lbmdpbmVfbmFtZXMtcGFnZWxpc3QnOiAn6aCB6Z2i5YiX6KGoJyxcblx0XHRcdCdob3RjYXQtZW5naW5lX25hbWVzLWNvbWJpbmVkJzogJ+WQiOS9teaQnOWwiycsXG5cdFx0XHQnaG90Y2F0LWVuZ2luZV9uYW1lcy1zdWJjYXQnOiAn5a2Q5YiG6aGeJyxcblx0XHRcdCdob3RjYXQtZW5naW5lX25hbWVzLXBhcmVudGNhdCc6ICfkuIrlsaTliIbpoZ4nLFxuXHRcdFx0Ly8gVGhlIHRvb2x0aXBzIGZvciB0aGUgYWJvdmUgbGlua3Ncblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtY2hhbmdlJzogJ+S/ruaUuScsXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLXJlbW92ZSc6ICfnp7vpmaQnLFxuXHRcdFx0J2hvdGNhdC10b29sdGlwcy1hZGQnOiAn5aKe5Yqg5LiA5YCL5paw5YiG6aGeJyxcblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtcmVzdG9yZSc6ICflvqnljp/orormm7QnLFxuXHRcdFx0J2hvdGNhdC10b29sdGlwcy11bmRvJzogJ+W+qeWOn+iuiuabtCcsXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLWRvd24nOiAn5omT6ZaL5Lul5L+u5pS55Lim6aGv56S65a2Q5YiG6aGeJyxcblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtdXAnOiAn5omT6ZaL5Lul5L+u5pS55Lim6aGv56S65LiK5bGk5YiG6aGeJyxcblx0XHRcdC8vIFRvb2x0aXAgZm9yIHRoZSBcImVudGVyIG11bHRpLW1vZGVcIiBsaW5rXG5cdFx0XHQnaG90Y2F0LW11bHRpX3Rvb2x0aXAnOiAn5L+u5pS55aSa5YCL5YiG6aGeJyxcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHRtdy5tZXNzYWdlcy5zZXQoe1xuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYXRfcmVtb3ZlZCc6ICflt7Lnp7vpmaRbW0NhdGVnb3J5OiQxXV0nLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy10ZW1wbGF0ZV9yZW1vdmVkJzogJ+W3suenu+mZpHt7W1tDYXRlZ29yeTokMV1dfX0nLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYXRfYWRkZWQnOiAn5bey5re75YqgW1tDYXRlZ29yeTokMV1dJyxcblx0XHRcdC8vICQyIGlzIHRoZSBuZXcga2V5XG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhdF9rZXljaGFuZ2UnOiAn5bey6K6+572uW1tDYXRlZ29yeTokMV1d55qE5paw5o6S5bqP5a2X77yaXCIkMlwiJyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2F0X25vdEZvdW5kJzogJ+WIhuexu+KAnCQx4oCd5rKh5pyJ5om+5YiwJyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2F0X2V4aXN0cyc6ICfliIbnsbvigJwkMeKAneW3sue7j+WtmOWcqO+8jOayoeaciea3u+WKoOOAgicsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhdF9yZXNvbHZlZCc6ICfvvIjph43lrprlkJFbW0NhdGVnb3J5OiQxXV3lt7LlpITnkIbvvIknLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy11bmNhdF9yZW1vdmVkJzogJ+W3suenu+mZpHt7dW5jYXRlZ29yaXplZH19Jyxcblx0XHRcdC8vIFNvbWUgdGV4dCB0byBwcmVmaXggdG8gdGhlIGVkaXQgc3VtbWFyeS5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtcHJlZml4JzogJ+S9v+eUqFtbSDpIT1RDQVR8SG90Q2F0XV0nLFxuXHRcdFx0Ly8gU29tZSB0ZXh0IHRvIGFwcGVuZCB0byB0aGUgZWRpdCBzdW1tYXJ5LiBOYW1lZCAndXNpbmcnIGZvciBoaXN0b3JpY2FsIHJlYXNvbnMuIElmIHlvdSBwcmVmZXJcblx0XHRcdC8vIHRvIGhhdmUgYSBtYXJrZXIgYXQgdGhlIGZyb250LCB1c2UgcHJlZml4IGFuZCBzZXQgdGhpcyB0byB0aGUgZW1wdHkgc3RyaW5nLlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy11c2luZyc6ICcnLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1tdWx0aV9jaGFuZ2UnOiAnJDHkuKrliIbnsbsnLFxuXHRcdFx0Ly8gQW55IGNhdGVnb3J5IGluIHRoaXMgY2F0ZWdvcnkgaXMgZGVlbWVkIGEgZGlzYW1iaWd1YXRpb24gY2F0ZWdvcnk7IGkuZS4sIGEgY2F0ZWdvcnkgdGhhdCBzaG91bGQgbm90IGNvbnRhaW5cblx0XHRcdC8vIGFueSBpdGVtcywgYnV0IHRoYXQgY29udGFpbnMgbGlua3MgdG8gb3RoZXIgY2F0ZWdvcmllcyB3aGVyZSBzdHVmZiBzaG91bGQgYmUgY2F0ZWdvcml6ZWQuIElmIHlvdSBkb24ndCBoYXZlXG5cdFx0XHQvLyB0aGF0IGNvbmNlcHQgb24geW91ciB3aWtpLCBzZXQgaXQgdG8gYmxhbmsgc3RyaW5nLiBVc2UgYmxhbmtzLCBub3QgdW5kZXJzY29yZXMuXG5cdFx0XHQnaG90Y2F0LWRpc2FtYmlnX2NhdGVnb3J5JzogJycsXG5cdFx0XHQvLyBBbnkgY2F0ZWdvcnkgaW4gdGhpcyBjYXRlZ29yeSBpcyBkZWVtZWQgYSAoc29mdCkgcmVkaXJlY3QgdG8gc29tZSBvdGhlciBjYXRlZ29yeSBkZWZpbmVkIGJ5IGEgbGlua1xuXHRcdFx0Ly8gdG8gYW5vdGhlciBub24tYmxhY2tsaXN0ZWQgY2F0ZWdvcnkuIElmIHlvdXIgd2lraSBkb2Vzbid0IGhhdmUgc29mdCBjYXRlZ29yeSByZWRpcmVjdHMsIHNldCB0aGlzIHRvIG51bGwuXG5cdFx0XHQvLyBJZiBhIHNvZnQtcmVkaXJlY3RlZCBjYXRlZ29yeSBjb250YWlucyBtb3JlIHRoYW4gb25lIGxpbmsgdG8gYW5vdGhlciBub24tYmxhY2tsaXN0ZWQgY2F0ZWdvcnksIGl0J3MgY29uc2lkZXJlZFxuXHRcdFx0Ly8gYSBkaXNhbWJpZ3VhdGlvbiBjYXRlZ29yeSBpbnN0ZWFkLlx0XHRcdCdob3RjYXQtcmVkaXJfY2F0ZWdvcnknOiAn5bey6YeN5a6a5ZCR55qE5YiG57G7Jyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtc2VwYXJhdG9yJzogJzsgJyxcblx0XHRcdC8vICQxIGlzIHJlcGxhY2VkIGJ5IGEgbnVtYmVyLiBJZiB5b3VyIGxhbmd1YWdlIGhhcyBzZXZlcmFsIHBsdXJhbCBmb3JtcyAoYy5mLiBbWzplbndpa2k6RHVhbCAoZ3JhbW1hdGljYWwgZm9ybSldXSksXG5cdFx0XHQvLyB5b3UgY2FuIHNldCB0aGlzIHRvIGFuIGFycmF5IG9mIHN0cmluZ3Mgc3VpdGFibGUgZm9yIHBhc3NpbmcgdG8gbXcubGFuZ3VhZ2UuY29uZmlnUGx1cmFsKCkuXG5cdFx0XHQvLyBJZiB0aGF0IGZ1bmN0aW9uIGRvZXNuJ3QgZXhpc3QsIEhvdENhdCB3aWxsIHNpbXBseSBmYWxsIGJhY2sgdG8gdXNpbmcgdGhlIGxhc3Rcblx0XHRcdC8vIGVudHJ5IGluIHRoZSBhcnJheS5cblx0XHRcdC8vIERlZmF1bHRzIHRvICdbWycgKyBjYXRlZ29yeV9jYW5vbmljYWwgKyAnOiQxXV0nLiBDYW4gYmUgb3ZlcnJpZGRlbiBpZiBpbiB0aGUgc2hvcnQgZWRpdCBzdW1tYXJpZXNcblx0XHRcdC8vIG5vdCB0aGUgc3RhbmRhcmQgY2F0ZWdvcnkgbmFtZSBzaG91bGQgYmUgdXNlZCBidXQsIHNheSwgYSBzaG9ydGVyIG5hbWVzcGFjZSBhbGlhcy4gJDEgaXMgcmVwbGFjZWRcblx0XHRcdC8vIGJ5IGEgY2F0ZWdvcnkgbmFtZS5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtc2hvcnRfY2F0Y2hhbmdlJzogJyQxJyxcblx0XHRcdC8vIEJ1dHRvbiB0ZXh0LiBMb2NhbGl6ZSB0byB3Z0NvbnRlbnRMYW5ndWFnZSBoZXJlOyBsb2NhbGl6ZSB0byB3Z1VzZXJMYW5ndWFnZSBpbiBhIHN1YnBhZ2UsXG5cdFx0XHQvLyBzZWUgbG9jYWxpemF0aW9uIGhvb2sgYmVsb3cuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNvbW1pdCc6ICfkv53lrZgnLFxuXHRcdFx0Ly8gQnV0dG9uIHRleHQuIExvY2FsaXplIHRvIHdnQ29udGVudExhbmd1YWdlIGhlcmU7IGxvY2FsaXplIHRvIHdnVXNlckxhbmd1YWdlIGluIGEgc3VicGFnZSxcblx0XHRcdC8vIHNlZSBsb2NhbGl6YXRpb24gaG9vayBiZWxvdy5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtb2snOiAn56Gu5a6aJyxcblx0XHRcdC8vIEJ1dHRvbiB0ZXh0LiBMb2NhbGl6ZSB0byB3Z0NvbnRlbnRMYW5ndWFnZSBoZXJlOyBsb2NhbGl6ZSB0byB3Z1VzZXJMYW5ndWFnZSBpbiBhIHN1YnBhZ2UsXG5cdFx0XHQvLyBzZWUgbG9jYWxpemF0aW9uIGhvb2sgYmVsb3cuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhbmNlbCc6ICflj5bmtognLFxuXHRcdFx0Ly8gTG9jYWxpemUgdG8gd2dDb250ZW50TGFuZ3VhZ2UgaGVyZTsgbG9jYWxpemUgdG8gd2dVc2VyTGFuZ3VhZ2UgaW4gYSBzdWJwYWdlLFxuXHRcdFx0Ly8gc2VlIGxvY2FsaXphdGlvbiBob29rIGJlbG93LlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1tdWx0aV9lcnJvcic6XG5cdFx0XHRcdCfml6Dms5Xku47mnI3liqHlmajlj5blvpfpobXpnaLmloflrZfjgILlm6DmraTvvIzmgqjnmoTliIbnsbvmm7TmlLnml6Dms5Xkv53lrZjjgILmiJHku6zkuLrmraTkuI3kvr/ooajnpLrmirHmrYnjgIInLFxuXHRcdFx0Ly8gUGx1cmFsIG9mIGNhdGVnb3J5X2Nhbm9uaWNhbC5cblx0XHRcdCdob3RjYXQtY2F0ZWdvcmllcyc6ICfliIbnsbsnLFxuXHRcdFx0Ly8gTmFtZXMgZm9yIHRoZSBzZWFyY2ggZW5naW5lc1xuXHRcdFx0J2hvdGNhdC1lbmdpbmVfbmFtZXMtc2VhcmNoaW5kZXgnOiAn5pCc57Si57Si5byVJyxcblx0XHRcdCdob3RjYXQtZW5naW5lX25hbWVzLXBhZ2VsaXN0JzogJ+mhtemdouWIl+ihqCcsXG5cdFx0XHQnaG90Y2F0LWVuZ2luZV9uYW1lcy1jb21iaW5lZCc6ICflkIjlubbmkJzntKInLFxuXHRcdFx0J2hvdGNhdC1lbmdpbmVfbmFtZXMtc3ViY2F0JzogJ+WtkOWIhuexuycsXG5cdFx0XHQnaG90Y2F0LWVuZ2luZV9uYW1lcy1wYXJlbnRjYXQnOiAn5LiK5bGC5YiG57G7Jyxcblx0XHRcdC8vIFRoZSB0b29sdGlwcyBmb3IgdGhlIGFib3ZlIGxpbmtzXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLWNoYW5nZSc6ICfkv67mlLknLFxuXHRcdFx0J2hvdGNhdC10b29sdGlwcy1yZW1vdmUnOiAn56e76ZmkJyxcblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtYWRkJzogJ+WinuWKoOS4gOS4quaWsOWIhuexuycsXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLXJlc3RvcmUnOiAn5pKk6ZSA5pu05pS5Jyxcblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtdW5kbyc6ICfmkqTplIDmm7TmlLknLFxuXHRcdFx0J2hvdGNhdC10b29sdGlwcy1kb3duJzogJ+aJk+W8gOS7peS/ruaUueW5tuaYvuekuuWtkOWIhuexuycsXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLXVwJzogJ+aJk+W8gOS7peS/ruaUueW5tuaYvuekuuS4iuWxguWIhuexuycsXG5cdFx0XHQvLyBUb29sdGlwIGZvciB0aGUgXCJlbnRlciBtdWx0aS1tb2RlXCIgbGlua1xuXHRcdFx0J2hvdGNhdC1tdWx0aV90b29sdGlwJzogJ+S/ruaUueWkmuS4quWIhuexuycsXG5cdFx0fSk7XG5cdH1cbn07XG4iLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCAnLi9tb2R1bGVzL2NoZWNrJztcbmltcG9ydCB7V0dfV0lLSV9JRH0gZnJvbSAnLi9tb2R1bGVzL2NvbnN0YW50JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9tb2R1bGVzL2dldE1lc3NhZ2UnO1xuaW1wb3J0IHtob3RDYXRNZXNzYWdlc30gZnJvbSAnLi9tb2R1bGVzL21lc3NhZ2VzJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBBamF4LWJhc2VkIHNpbXBsZSBDYXRlZ29yeSBtYW5hZ2VyLiBBbGxvd3MgYWRkaW5nL3JlbW92aW5nL2NoYW5naW5nIGNhdGVnb3JpZXMgb24gYSBwYWdlIHZpZXcuXG4gKiBTdXBwb3J0cyBtdWx0aXBsZSBjYXRlZ29yeSBjaGFuZ2VzLCBhcyB3ZWxsIGFzIHJlZGlyZWN0IGFuZCBkaXNhbWJpZ3VhdGlvbiByZXNvbHV0aW9uLiBBbHNvXG4gKiBwbHVncyBpbnRvIHRoZSB1cGxvYWQgZm9ybS4gU2VhcmNoIGVuZ2luZXMgdG8gdXNlIGZvciB0aGUgc3VnZ2VzdGlvbiBsaXN0IGFyZSBjb25maWd1cmFibGUsIGFuZFxuICogY2FuIGJlIHNlbGVjdGVkIGludGVyYWN0aXZlbHkuXG4gKlxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9jb21tb25zLndpa2ltZWRpYS5vcmcvd2lraS9IZWxwOkdhZGdldC1Ib3RDYXR9XG4gKiBAYXV0aG9yIGF1dGhvcnMgPGh0dHBzOi8vY29tbW9ucy53aWtpbWVkaWEub3JnL3dpa2kvSGVscDpHYWRnZXQtSG90Q2F0L1ZlcnNpb25faGlzdG9yeT5cbiAqL1xuLy8gTG9hZCB0cmFuc2xhdGlvbnMgbG9jYWxseVxuaG90Q2F0TWVzc2FnZXMoKTtcblxuLy8gTWFpbiBib2R5XG4oZnVuY3Rpb24gaG90Q2F0KCkge1xuXHQvLyBEb24ndCB1c2UgbXcuY29uZmlnLmdldCgpIGFzIHRoYXQgdGFrZXMgYSBjb3B5IG9mIHRoZSBjb25maWcsIGFuZCBzbyBkb2Vzbid0XG5cdC8vIGFjY291bnQgZm9yIHZhbHVlcyBjaGFuZ2luZywgZS5nLiB3Z0N1clJldmlzaW9uSWQgYWZ0ZXIgYSBWRSBlZGl0XG5cdGNvbnN0IGNvbmYgPSBtdy5jb25maWcudmFsdWVzO1xuXHQvLyBHdWFyZCBhZ2FpbnN0IGRvdWJsZSBpbmNsdXNpb25zIChpbiBvbGQgSUUvT3BlcmEgZWxlbWVudCBpZHMgYmVjb21lIHdpbmRvdyBwcm9wZXJ0aWVzKVxuXHRpZiAoKHdpbmRvdy5Ib3RDYXQgJiYgIXdpbmRvdy5Ib3RDYXQubm9kZU5hbWUpIHx8IGNvbmYud2dBY3Rpb24gPT09ICdlZGl0Jykge1xuXHRcdHJldHVybjsgLy8gTm90IG9uIGVkaXQgbW9kZVxuXHR9XG5cdC8vIEluaXRpYWxpemUgTWVkaWFXaWtpIEFQSVxuXHRjb25zdCBhcGkgPSBpbml0TXdBcGkoYFFpdXdlbi8xLjEgKEhvdENhdC8zLjA7ICR7V0dfV0lLSV9JRH0pYCk7XG5cdC8vIENvbmZpZ3VyYXRpb24gc3R1ZmYuXG5cdHdpbmRvdy5Ib3RDYXQgPSB7XG5cdFx0Ly8gVGhlIGxpdHRsZSBtb2RpZmljYXRpb24gbGlua3MgZGlzcGxheWVkIGFmdGVyIGNhdGVnb3J5IG5hbWVzLiBVKzIyMTIgaXMgYSBtaW51cyBzaWduOyBVKzIxOTMgYW5kIFUrMjE5MSBhcmVcblx0XHQvLyBkb3dud2FyZCBhbmQgdXB3YXJkIHBvaW50aW5nIGFycm93cy4gRG8gbm90IHVzZSDihpMgYW5kIOKGkSBpbiB0aGUgY29kZSFcblx0XHRsaW5rczoge1xuXHRcdFx0Y2hhbmdlOiAnKMKxKScsXG5cdFx0XHRyZW1vdmU6ICcoXFx1MjIxMiknLFxuXHRcdFx0YWRkOiAnKCspJyxcblx0XHRcdHJlc3RvcmU6ICcow5cpJyxcblx0XHRcdHVuZG86ICcow5cpJyxcblx0XHRcdGRvd246ICcoXFx1MjE5MyknLFxuXHRcdFx0dXA6ICcoXFx1MjE5MSknLFxuXHRcdH0sXG5cdFx0Y2hhbmdlVGFnOiAnSG90Q2F0Jyxcblx0XHQvLyBUaGUgSFRNTCBjb250ZW50IG9mIHRoZSBcImVudGVyIG11bHRpLW1vZGVcIiBsaW5rIGF0IHRoZSBmcm9udC5cblx0XHRhZGRtdWx0aTogJzxzcGFuPis8c3VwPis8L3N1cD48L3NwYW4+Jyxcblx0XHQvLyBSZXR1cm4gdHJ1ZSB0byBkaXNhYmxlIEhvdENhdC5cblx0XHRkaXNhYmxlOiAoKSA9PiB7XG5cdFx0XHRjb25zdCBucyA9IGNvbmYud2dOYW1lc3BhY2VOdW1iZXI7XG5cdFx0XHRjb25zdCBuc0lkcyA9IGNvbmYud2dOYW1lc3BhY2VJZHM7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRucyA8IDAgfHxcblx0XHRcdFx0Ly8gU3BlY2lhbCBwYWdlczsgU3BlY2lhbDpVcGxvYWQgaXMgaGFuZGxlZCBkaWZmZXJlbnRseVxuXHRcdFx0XHRucyA9PT0gMTAgfHxcblx0XHRcdFx0Ly8gVGVtcGxhdGVzXG5cdFx0XHRcdG5zID09PSA4MjggfHxcblx0XHRcdFx0Ly8gTW9kdWxlIChMdWEpXG5cdFx0XHRcdG5zID09PSA4IHx8XG5cdFx0XHRcdC8vIE1lZGlhV2lraVxuXHRcdFx0XHQobnMgPT09IDYgJiYgIWNvbmYud2dBcnRpY2xlSWQpIHx8XG5cdFx0XHRcdC8vIE5vbi1leGlzdGluZyBmaWxlIHBhZ2VzXG5cdFx0XHRcdChucyA9PT0gMiAmJiAvXFwuKGpzfGNzcykkLy50ZXN0KGNvbmYud2dUaXRsZSkpIHx8XG5cdFx0XHRcdC8vIFVzZXIgc2NyaXB0c1xuXHRcdFx0XHQobnNJZHMgJiYgKG5zID09PSBuc0lkcy5jcmVhdG9yIHx8IG5zID09PSBuc0lkcy50aW1lZHRleHQgfHwgbnMgPT09IG5zSWRzLmluc3RpdHV0aW9uKSlcblx0XHRcdCk7XG5cdFx0fSxcblx0XHQvLyBBIHJlZ2V4cCBtYXRjaGluZyBhIHRlbXBsYXRlcyB1c2VkIHRvIG1hcmsgdW5jYXRlZ29yaXplZCBwYWdlcywgaWYgeW91ciB3aWtpIGRvZXMgaGF2ZSB0aGF0LlxuXHRcdC8vIElmIG5vdCwgc2V0IGl0IHRvIG51bGwuXG5cdFx0dW5jYXRfcmVnZXhwOiAve3tcXHMqW1V1XW5jYXRlZ29yaXplZFxccypbXn1dKn19XFxzKig8IS0tLio/LS0+XFxzKik/L2csXG5cdFx0Ly8gVGhlIGltYWdlcyB1c2VkIGZvciB0aGUgbGl0dGxlIGluZGljYXRpb24gaWNvbi4gU2hvdWxkIG5vdCBuZWVkIGNoYW5naW5nLlxuXHRcdGV4aXN0c1llczogJ2h0dHBzOi8vdHUuemhvbmd3ZW4ud2lraS9pbWFnZXMvcWl1d2VuYmFpa2UvemgvdGh1bWIvYi9iZS9QX3llcy5zdmcvMjBweC1QX3llcy5zdmcucG5nJyxcblx0XHRleGlzdHNObzogJ2h0dHBzOi8vdHUuemhvbmd3ZW4ud2lraS9pbWFnZXMvcWl1d2VuYmFpa2UvemgvdGh1bWIvNC80Mi9QX25vLnN2Zy8yMHB4LVBfbm8uc3ZnLnBuZycsXG5cdFx0Ly8gYSBsaXN0IG9mIGNhdGVnb3JpZXMgd2hpY2ggY2FuIGJlIHJlbW92ZWQgYnkgcmVtb3ZpbmcgYSB0ZW1wbGF0ZVxuXHRcdC8vIGtleTogdGhlIGNhdGVnb3J5IHdpdGhvdXQgbmFtZXNwYWNlXG5cdFx0Ly8gdmFsdWU6IEEgcmVnZXhwIG1hdGNoaW5nIHRoZSB0ZW1wbGF0ZSBuYW1lLCBhZ2FpbiB3aXRob3V0IG5hbWVzcGFjZVxuXHRcdC8vIElmIHlvdSBkb24ndCBoYXZlIHRoaXMgYXQgeW91ciB3aWtpLCBvciBkb24ndCB3YW50IHRoaXMsIHNldCBpdCB0byBhbiBlbXB0eSBvYmplY3Qge30uXG5cdFx0dGVtcGxhdGVfY2F0ZWdvcmllczoge30sXG5cdFx0Ly8gT3ZlcnJpZGUgdGhlIGRlY2lzaW9uIG9mIHdoZXRoZXIgSG90Q2F0IHNob3VsZCBoZWxwIHVzZXJzIGJ5IGF1dG9tYXRpY2FsbHlcblx0XHQvLyBjYXBpdGFsaXNpbmcgdGhlIHRpdGxlIGluIHRoZSB1c2VyIGlucHV0IHRleHQgaWYgdGhlIHdpa2kgaGFzIGNhc2Utc2Vuc2l0aXZlIHBhZ2UgbmFtZXMuXG5cdFx0Ly8gQmFzaWNhbGx5LCB0aGlzIHdpbGwgbWFrZSBhbiBBUEkgcXVlcnkgdG8gY2hlY2sgdGhlIE1lZGlhV2lraSBjb25maWd1cmF0aW9uIGFuZCBIb3RDYXQgdGhlbiBzZXRzXG5cdFx0Ly8gdGhpcyB0byB0cnVlIGZvciBtb3N0IHdpa2lzLCBhbmQgdG8gZmFsc2Ugb24gV2lrdGlvbmFyeS5cblx0XHQvL1xuXHRcdC8vIFlvdSBjYW4gc2V0IHRoaXMgZGlyZWN0bHkgaWYgdGhlcmUgaXMgYSBwcm9ibGVtIHdpdGggaXQuIEZvciBleGFtcGxlLCBHZW9yZ2lhbiBXaWtpcGVkaWEgKGthd2lraSksXG5cdFx0Ly8gaXMga25vd24gdG8gaGF2ZSBkaWZmZXJlbnQgY2FwaXRhbGlzYXRpb24gbG9naWMgYmV0d2VlbiBNZWRpYVdpa2kgUEhQIGFuZCBKYXZhU2NyaXB0LiBBcyBzdWNoLCBhdXRvbWF0aWNcblx0XHQvLyBjYXNlIGNoYW5nZXMgaW4gSmF2YVNjcmlwdCBieSBIb3RDYXQgd291bGQgYmUgd3JvbmcuXG5cdFx0Y2FwaXRhbGl6ZVBhZ2VOYW1lczogbnVsbCxcblx0XHQvLyBJZiB1cGxvYWRfZGlzYWJsZWQgaXMgdHJ1ZSwgSG90Q2F0IHdpbGwgbm90IGJlIHVzZWQgb24gdGhlIFVwbG9hZCBmb3JtLlxuXHRcdHVwbG9hZF9kaXNhYmxlZDogZmFsc2UsXG5cdFx0Ly8gU2luZ2xlIHJlZ3VsYXIgZXhwcmVzc2lvbiBtYXRjaGluZyBibGFja2xpc3RlZCBjYXRlZ29yaWVzIHRoYXQgY2Fubm90IGJlIGNoYW5nZWQgb3Jcblx0XHQvLyBhZGRlZCB1c2luZyBIb3RDYXQuIEZvciBpbnN0YW5jZSAvXFxic3R1YnM/JC8gKGFueSBjYXRlZ29yeSBlbmRpbmcgd2l0aCB0aGUgd29yZCBcInN0dWJcIlxuXHRcdC8vIG9yIFwic3R1YnNcIiksIG9yIC8oXFxic3R1YnM/JCl8XFxibWFpbnRlbmFuY2VcXGIvIChzdHViIGNhdGVnb3JpZXMgYW5kIGFueSBjYXRlZ29yeSB3aXRoIHRoZVxuXHRcdC8vIHdvcmQgXCJtYWludGVuYW5jZVwiIGluIGl0cyB0aXRsZS5cblx0XHRibGFja2xpc3Q6IG51bGwsXG5cdFx0Ly8gU3R1ZmYgY2hhbmdlYWJsZSBieSB1c2Vyczpcblx0XHQvLyBCYWNrZ3JvdW5kIGZvciBjaGFuZ2VkIGNhdGVnb3JpZXMgaW4gbXVsdGktZWRpdCBtb2RlLiBEZWZhdWx0IGlzIGEgdmVyeSBsaWdodCBzYWxtb24gcGluay5cblx0XHRiZ19jaGFuZ2VkOiAnI0ZDQScsXG5cdFx0Ly8gSWYgdHJ1ZSwgSG90Q2F0IHdpbGwgbmV2ZXIgYXV0b21hdGljYWxseSBzdWJtaXQgY2hhbmdlcy4gSG90Q2F0IHdpbGwgb25seSBvcGVuIGFuIGVkaXQgcGFnZSB3aXRoXG5cdFx0Ly8gdGhlIGNoYW5nZXM7IHVzZXJzIG11c3QgYWx3YXlzIHNhdmUgZXhwbGljaXRseS5cblx0XHRub19hdXRvY29tbWl0OiBmYWxzZSxcblx0XHQvLyBJZiB0cnVlLCB0aGUgXCJjYXRlZ29yeSBkZWxldGlvblwiIGxpbmsgXCIoLSlcIiB3aWxsIG5ldmVyIHNhdmUgYXV0b21hdGljYWxseSBidXQgYWx3YXlzIHNob3cgYW5cblx0XHQvLyBlZGl0IHBhZ2Ugd2hlcmUgdGhlIHVzZXIgaGFzIHRvIHNhdmUgdGhlIGVkaXQgbWFudWFsbHkuIElzIGZhbHNlIGJ5IGRlZmF1bHQgYmVjYXVzZSB0aGF0J3MgdGhlXG5cdFx0Ly8gdHJhZGl0aW9uYWwgYmVoYXZpb3IuIFRoaXMgc2V0dGluZyBvdmVycmlkZXMgbm9fYXV0b2NvbW1pdCBmb3IgXCIoLSlcIiBsaW5rcy5cblx0XHRkZWxfbmVlZHNfZGlmZjogZmFsc2UsXG5cdFx0Ly8gVGltZSwgaW4gbWlsbGlzZWNvbmRzLCB0aGF0IEhvdENhdCB3YWl0cyBhZnRlciBhIGtleXN0cm9rZSBiZWZvcmUgbWFraW5nIGEgcmVxdWVzdCB0byB0aGVcblx0XHQvLyBzZXJ2ZXIgdG8gZ2V0IHN1Z2dlc3Rpb25zLlxuXHRcdHN1Z2dlc3RfZGVsYXk6IDEwMDAsXG5cdFx0Ly8gRGVmYXVsdCB3aWR0aCwgaW4gY2hhcmFjdGVycywgb2YgdGhlIHRleHQgaW5wdXQgZmllbGQuXG5cdFx0ZWRpdGJveF93aWR0aDogNDAsXG5cdFx0Ly8gT25lIG9mIHRoZSBlbmdpbmVfbmFtZXMgYWJvdmUsIHRvIGJlIHVzZWQgYXMgdGhlIGRlZmF1bHQgc3VnZ2VzdGlvbiBlbmdpbmUuXG5cdFx0c3VnZ2VzdGlvbnM6ICdjb21iaW5lZCcsXG5cdFx0Ly8gSWYgdHJ1ZSwgYWx3YXlzIHVzZSB0aGUgZGVmYXVsdCBlbmdpbmUsIGFuZCBuZXZlciBkaXNwbGF5IGEgc2VsZWN0b3IuXG5cdFx0Zml4ZWRfc2VhcmNoOiBmYWxzZSxcblx0XHQvLyBJZiBmYWxzZSwgZG8gbm90IGRpc3BsYXkgdGhlIFwidXBcIiBhbmQgXCJkb3duXCIgbGlua3Ncblx0XHR1c2VfdXBfZG93bjogdHJ1ZSxcblx0XHQvLyBEZWZhdWx0IGxpc3Qgc2l6ZVxuXHRcdGxpc3RTaXplOiAxMCxcblx0XHQvLyBJZiB0cnVlLCBzaW5nbGUgY2F0ZWdvcnkgY2hhbmdlcyBhcmUgbWFya2VkIGFzIG1pbm9yIGVkaXRzLiBJZiBmYWxzZSwgdGhleSdyZSBub3QuXG5cdFx0c2luZ2xlX21pbm9yOiB0cnVlLFxuXHRcdC8vIElmIHRydWUsIG5ldmVyIGFkZCBhIHBhZ2UgdG8gdGhlIHVzZXIncyB3YXRjaGxpc3QuIElmIGZhbHNlLCBwYWdlcyBnZXQgYWRkZWQgdG8gdGhlIHdhdGNobGlzdCBpZlxuXHRcdC8vIHRoZSB1c2VyIGhhcyB0aGUgXCJBZGQgcGFnZXMgSSBlZGl0IHRvIG15IHdhdGNobGlzdFwiIG9yIHRoZSBcIkFkZCBwYWdlcyBJIGNyZWF0ZSB0byBteSB3YXRjaGxpc3RcIlxuXHRcdC8vIG9wdGlvbnMgaW4gaGlzIG9yIGhlciBwcmVmZXJlbmNlcyBzZXQuXG5cdFx0ZG9udF9hZGRfdG9fd2F0Y2hsaXN0OiBmYWxzZSxcblx0XHRzaG9ydGN1dHM6IG51bGwsXG5cdFx0YWRkU2hvcnRjdXRzOiAobWFwKSA9PiB7XG5cdFx0XHRsZXQgX2E7XG5cdFx0XHRpZiAoIW1hcCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHQoX2EgPSB3aW5kb3cuSG90Q2F0KS5zaG9ydGN1dHMgfHwgKF9hLnNob3J0Y3V0cyA9IHt9KTtcblx0XHRcdGZvciAobGV0IGsgaW4gbWFwKSB7XG5cdFx0XHRcdGlmICghT2JqZWN0Lmhhc093bihtYXAsIGspIHx8IHR5cGVvZiBrICE9PSAnc3RyaW5nJykge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxldCB2ID0gbWFwW2tdO1xuXHRcdFx0XHRpZiAodHlwZW9mIHYgIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0ayA9IGsucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpO1xuXHRcdFx0XHR2ID0gdi5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJyk7XG5cdFx0XHRcdGlmIChrLmxlbmd0aCA9PT0gMCB8fCB2Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHdpbmRvdy5Ib3RDYXQuc2hvcnRjdXRzW2tdID0gdjtcblx0XHRcdH1cblx0XHR9LFxuXHR9O1xuXHRjb25zdCBIQyA9IHdpbmRvdy5Ib3RDYXQ7XG5cdC8vIE1vcmUgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuIFdlIGhhdmUgYSBmZXcgcGxhY2VzIHdoZXJlIHdlIHRlc3QgZm9yIHRoZSBicm93c2VyOiBvbmNlIGZvclxuXHQvLyBTYWZhcmkgPCAzLjAsIGFuZCB0d2ljZSBmb3IgV2ViS2l0IChDaHJvbWUgb3IgU2FmYXJpLCBhbnkgdmVyc2lvbnMpXG5cdGNvbnN0IHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xuXHRjb25zdCBpc193ZWJraXQgPSAvYXBwbGV3ZWJraXRcXC9cXGQrLy50ZXN0KHVhKSAmJiAhdWEuaW5jbHVkZXMoJ3Nwb29mZXInKTtcblx0bGV0IGNhdF9wcmVmaXggPSBudWxsO1xuXHRsZXQgbm9TdWdnZXN0aW9ucyA9IGZhbHNlO1xuXHQvLyBObyBmdXJ0aGVyIGNoYW5nZXMgc2hvdWxkIGJlIG5lY2Vzc2FyeSBoZXJlLlxuXHQvLyBUaGUgZm9sbG93aW5nIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmdzIGFyZSB1c2VkIHdoZW4gc2VhcmNoaW5nIGZvciBjYXRlZ29yaWVzIGluIHdpa2l0ZXh0LlxuXHRjb25zdCB3aWtpVGV4dEJsYW5rID0gJ1tcXFxcdCBfXFxcXHhBMFxcXFx1MTY4MFxcXFx1MTgwRVxcXFx1MjAwMC1cXFxcdTIwMEFcXFxcdTIwMjhcXFxcdTIwMjlcXFxcdTIwMkZcXFxcdTIwNUZcXFxcdTMwMDBdKyc7XG5cdGNvbnN0IHdpa2lUZXh0QmxhbmtSRSA9IG5ldyBSZWdFeHAod2lraVRleHRCbGFuaywgJ2cnKTtcblx0Ly8gUmVnZXhwIGZvciBoYW5kbGluZyBibGFua3MgaW5zaWRlIGEgY2F0ZWdvcnkgdGl0bGUgb3IgbmFtZXNwYWNlIG5hbWUuXG5cdC8vIFNlZSB7QGxpbmsgaHR0cDovL3N2bi53aWtpbWVkaWEub3JnL3ZpZXd2Yy9tZWRpYXdpa2kvdHJ1bmsvcGhhc2UzL2luY2x1ZGVzL1RpdGxlLnBocD9yZXZpc2lvbj0xMDQwNTEmdmlldz1tYXJrdXAjbDI3MjJ9XG5cdC8vIFNlZSBhbHNvIHtAbGluayBodHRwOi8vd3d3LmZpbGVmb3JtYXQuaW5mby9pbmZvL3VuaWNvZGUvY2F0ZWdvcnkvWnMvbGlzdC5odG19XG5cdC8vICAgTWVkaWFXaWtpIGNvbGxhcHNlcyBzZXZlcmFsIGNvbnRpZ3VvdXMgYmxhbmtzIGluc2lkZSBhIHBhZ2UgdGl0bGUgdG8gb25lIHNpbmdsZSBibGFuay4gSXQgYWxzbyByZXBsYWNlIGFcblx0Ly8gbnVtYmVyIG9mIHNwZWNpYWwgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzIGJ5IHNpbXBsZSBibGFua3MuIEFuZCBmaW5hbGx5LCBibGFua3MgYXJlIHRyZWF0ZWQgYXMgdW5kZXJzY29yZXMuXG5cdC8vIFRoZXJlZm9yZSwgd2hlbiBsb29raW5nIGZvciBwYWdlIHRpdGxlcyBpbiB3aWtpdGV4dCwgd2UgbXVzdCBoYW5kbGUgYWxsIHRoZXNlIGNhc2VzLlxuXHQvLyAgIE5vdGU6IHdlIF9kb18gaW5jbHVkZSB0aGUgaG9yaXpvbnRhbCB0YWIgaW4gdGhlIGFib3ZlIGxpc3QsIGV2ZW4gdGhvdWdoIHRoZSBNZWRpYVdpa2kgc29mdHdhcmUgZm9yIHNvbWUgcmVhc29uXG5cdC8vIGFwcGVhcnMgdG8gbm90IGhhbmRsZSBpdC4gVGhlIHplcm8td2lkdGggc3BhY2UgXFx1MjAwQiBpcyBfbm90XyBoYW5kbGVkIGFzIGEgc3BhY2UgaW5zaWRlIHRpdGxlcyBieSBNVy5cblx0Y29uc3Qgd2lraVRleHRCbGFua09yQmlkaSA9ICdbXFxcXHQgX1xcXFx4QTBcXFxcdTE2ODBcXFxcdTE4MEVcXFxcdTIwMDAtXFxcXHUyMDBCXFxcXHUyMDBFXFxcXHUyMDBGXFxcXHUyMDI4LVxcXFx1MjAyRlxcXFx1MjA1RlxcXFx1MzAwMF0qJztcblx0Ly8gV2hpdGVzcGFjZSByZWdleHAgZm9yIGhhbmRsaW5nIHdoaXRlc3BhY2UgYmV0d2VlbiBsaW5rIGNvbXBvbmVudHMuIEluY2x1ZGluZyB0aGUgaG9yaXpvbnRhbCB0YWIsIGJ1dCBub3QgXFxuXFxyXFxmXFx2OlxuXHQvLyBhIGxpbmsgbXVzdCBiZSBvbiBvbmUgc2luZ2xlIGxpbmUuXG5cdC8vICAgTWVkaWFXaWtpIGFsc28gcmVtb3ZlcyBVbmljb2RlIGJpZGkgb3ZlcnJpZGUgY2hhcmFjdGVycyBpbiBwYWdlIHRpdGxlcyAoYW5kIG5hbWVzcGFjZSBuYW1lcykgY29tcGxldGVseS5cblx0Ly8gVGhpcyBpcyAqbm90KiBoYW5kbGVkLCBhcyBpdCB3b3VsZCByZXF1aXJlIHVzIHRvIGFsbG93IGFueSBvZiBbXFx1MjAwRVxcdTIwMEZcXHUyMDJBLVxcdTIwMkVdIGJldHdlZW4gYW55IHR3b1xuXHQvLyBjaGFyYWN0ZXJzIGluc2lkZSBhIGNhdGVnb3J5IGxpbmsuIEl0IF9jb3VsZF8gYmUgZG9uZSB0aG91Z2guLi4gV2UgX2RvXyBoYW5kbGUgc3RyYW5nZSBzcGFjZXMsIGluY2x1ZGluZyB0aGVcblx0Ly8gemVyby13aWR0aCBzcGFjZSBcXHUyMDBCLCBhbmQgYmlkaSBvdmVycmlkZXMgYmV0d2VlbiB0aGUgY29tcG9uZW50cyBvZiBhIGNhdGVnb3J5IGxpbmsgKGFkamFjZW50IHRvIHRoZSBjb2xvbixcblx0Ly8gb3IgYWRqYWNlbnQgdG8gYW5kIGluc2lkZSBvZiBcIltbXCIgYW5kIFwiXV1cIikuXG5cdC8vIEZpcnN0IGF1dG8tbG9jYWxpemUgdGhlIHJlZ2V4cHMgZm9yIHRoZSBjYXRlZ29yeSBhbmQgdGhlIHRlbXBsYXRlIG5hbWVzcGFjZXMuXG5cdGNvbnN0IGZvcm1hdHRlZE5hbWVzcGFjZXMgPSBjb25mLndnRm9ybWF0dGVkTmFtZXNwYWNlcztcblx0Y29uc3QgbmFtZXNwYWNlSWRzID0gY29uZi53Z05hbWVzcGFjZUlkcztcblx0Y29uc3QgYXV0b0xvY2FsaXplID0gKG5hbWVzcGFjZU51bWJlciwgZmFsbGJhY2spID0+IHtcblx0XHRjb25zdCBjcmVhdGVSZWdleHBTdHIgPSAobmFtZSkgPT4ge1xuXHRcdFx0aWYgKCFuYW1lIHx8IG5hbWUubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGxldCByZWdleF9uYW1lID0gJyc7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG5hbWUubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y29uc3QgaW5pdGlhbCA9IG5hbWUuY2hhckF0KGkpO1xuXHRcdFx0XHRjb25zdCBsbCA9IGluaXRpYWwudG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0Y29uc3QgdWwgPSBpbml0aWFsLnRvVXBwZXJDYXNlKCk7XG5cdFx0XHRcdHJlZ2V4X25hbWUgKz0gbGwgPT09IHVsID8gaW5pdGlhbCA6IGBbJHtsbH0ke3VsfV1gO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlZ2V4X25hbWUucmVwbGFjZSgvKFskKCkqKy4/XFxcXF5dKS9nLCAnXFxcXCQxJykucmVwbGFjZSh3aWtpVGV4dEJsYW5rUkUsIHdpa2lUZXh0QmxhbmspO1xuXHRcdH07XG5cdFx0ZmFsbGJhY2sgPSBmYWxsYmFjay50b0xvd2VyQ2FzZSgpO1xuXHRcdGNvbnN0IGNhbm9uaWNhbCA9IGZvcm1hdHRlZE5hbWVzcGFjZXNbU3RyaW5nKG5hbWVzcGFjZU51bWJlcildLnRvTG93ZXJDYXNlKCk7XG5cdFx0bGV0IHJlZ2V4cCA9IGNyZWF0ZVJlZ2V4cFN0cihjYW5vbmljYWwpO1xuXHRcdGlmIChmYWxsYmFjayAmJiBjYW5vbmljYWwgIT09IGZhbGxiYWNrKSB7XG5cdFx0XHRyZWdleHAgKz0gYHwke2NyZWF0ZVJlZ2V4cFN0cihmYWxsYmFjayl9YDtcblx0XHR9XG5cdFx0aWYgKG5hbWVzcGFjZUlkcykge1xuXHRcdFx0Zm9yIChjb25zdCBjYXRfbmFtZSBpbiBuYW1lc3BhY2VJZHMpIHtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdHR5cGVvZiBjYXRfbmFtZSA9PT0gJ3N0cmluZycgJiZcblx0XHRcdFx0XHRjYXRfbmFtZS50b0xvd2VyQ2FzZSgpICE9PSBjYW5vbmljYWwgJiZcblx0XHRcdFx0XHRjYXRfbmFtZS50b0xvd2VyQ2FzZSgpICE9PSBmYWxsYmFjayAmJlxuXHRcdFx0XHRcdG5hbWVzcGFjZUlkc1tjYXRfbmFtZV0gPT09IG5hbWVzcGFjZU51bWJlclxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRyZWdleHAgKz0gYHwke2NyZWF0ZVJlZ2V4cFN0cihjYXRfbmFtZSl9YDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmVnZXhwO1xuXHR9O1xuXHRIQy5jYXRlZ29yeV9jYW5vbmljYWwgPSBmb3JtYXR0ZWROYW1lc3BhY2VzWycxNCddO1xuXHRIQy5jYXRlZ29yeV9yZWdleHAgPSBhdXRvTG9jYWxpemUoMTQsICdjYXRlZ29yeScpO1xuXHRpZiAoZm9ybWF0dGVkTmFtZXNwYWNlc1snMTAnXSkge1xuXHRcdEhDLnRlbXBsYXRlX3JlZ2V4cCA9IGF1dG9Mb2NhbGl6ZSgxMCwgJ3RlbXBsYXRlJyk7XG5cdH1cblx0Ly8gVXRpbGl0eSBmdW5jdGlvbnMuIFllcywgdGhpcyBkdXBsaWNhdGVzIHNvbWUgZnVuY3Rpb25hbGl0eSB0aGF0IGFsc28gZXhpc3RzIGluIG90aGVyIHBsYWNlcywgYnV0XG5cdC8vIHRvIGtlZXAgdGhpcyB3aG9sZSBzdHVmZiBpbiBhIHNpbmdsZSBmaWxlIG5vdCBkZXBlbmRpbmcgb24gYW55IG90aGVyIG9uLXdpa2kgSmF2YVNjcmlwdHMsIHdlIHJlLWRvXG5cdC8vIHRoZXNlIGZldyBvcGVyYXRpb25zIGhlcmUuXG5cdGNvbnN0IG1ha2UgPSAoYXJnLCBsaXRlcmFsKSA9PiB7XG5cdFx0aWYgKCFhcmcpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRyZXR1cm4gbGl0ZXJhbCA/IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGFyZykgOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGFyZyk7XG5cdH07XG5cdGNvbnN0IHBhcmFtID0gKG5hbWUsIHVyaSkgPT4ge1xuXHRcdHVyaSB8fD0gZG9jdW1lbnQubG9jYXRpb24uaHJlZjtcblx0XHRjb25zdCByZSA9IG5ldyBSZWdFeHAoYFsmP10ke25hbWV9PShbXiYjXSopYCk7XG5cdFx0Y29uc3QgbSA9IHJlLmV4ZWModXJpKTtcblx0XHRpZiAobSAmJiBtLmxlbmd0aCA+IDEpIHtcblx0XHRcdHJldHVybiBkZWNvZGVVUklDb21wb25lbnQobVsxXSk7XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9O1xuXHRjb25zdCB0aXRsZSA9IChocmVmKSA9PiB7XG5cdFx0aWYgKCFocmVmKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0Y29uc3Qgc2NyaXB0ID0gYCR7Y29uZi53Z1NjcmlwdH0/YDtcblx0XHRpZiAoXG5cdFx0XHRocmVmLmluZGV4T2Yoc2NyaXB0KSA9PT0gMCB8fFxuXHRcdFx0aHJlZi5pbmRleE9mKGNvbmYud2dTZXJ2ZXIgKyBzY3JpcHQpID09PSAwIHx8XG5cdFx0XHQoY29uZi53Z1NlcnZlci5zbGljZSgwLCAyKSA9PT0gJy8vJyAmJlxuXHRcdFx0XHRocmVmLmluZGV4T2YoZG9jdW1lbnQubG9jYXRpb24ucHJvdG9jb2wgKyBjb25mLndnU2VydmVyICsgc2NyaXB0KSA9PT0gMClcblx0XHQpIHtcblx0XHRcdC8vIGhyZWY9XCIvaW5kZXgucGhwP3RpdGxlPS4uLlwiXG5cdFx0XHRyZXR1cm4gcGFyYW0oJ3RpdGxlJywgaHJlZik7XG5cdFx0fVxuXHRcdC8vIGhyZWY9XCIvd2lraS8uLi5cIlxuXHRcdGxldCBwcmVmaXggPSBjb25mLndnQXJ0aWNsZVBhdGgucmVwbGFjZSgnJDEnLCAnJyk7XG5cdFx0aWYgKGhyZWYuaW5kZXhPZihwcmVmaXgpKSB7XG5cdFx0XHRwcmVmaXggPSBjb25mLndnU2VydmVyICsgcHJlZml4O1xuXHRcdH0gLy8gRnVsbHkgZXhwYW5kZWQgVVJMP1xuXHRcdGlmIChocmVmLmluZGV4T2YocHJlZml4KSAmJiBwcmVmaXguc2xpY2UoMCwgMikgPT09ICcvLycpIHtcblx0XHRcdHByZWZpeCA9IGRvY3VtZW50LmxvY2F0aW9uLnByb3RvY29sICsgcHJlZml4O1xuXHRcdH0gLy8gUHJvdG9jb2wtcmVsYXRpdmUgd2dTZXJ2ZXI/XG5cdFx0aWYgKGhyZWYuaW5kZXhPZihwcmVmaXgpID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGhyZWYuc2xpY2UocHJlZml4Lmxlbmd0aCkpO1xuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fTtcblx0Y29uc3QgaGFzQ2xhc3MgPSAoe2NsYXNzTmFtZX0sIG5hbWUpID0+IHtcblx0XHRyZXR1cm4gYCAke2NsYXNzTmFtZX0gYC5pbmNsdWRlcyhgICR7bmFtZX0gYCk7XG5cdH07XG5cdGNvbnN0IGNhcGl0YWxpemUgPSAoc3RyKSA9PiB7XG5cdFx0aWYgKCFzdHIgfHwgc3RyLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIHN0cjtcblx0XHR9XG5cdFx0cmV0dXJuIHN0ci5zbGljZSgwLCAxKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xuXHR9O1xuXHRjb25zdCB3aWtpUGFnZVBhdGggPSAocGFnZU5hbWUpID0+IHtcblx0XHRyZXR1cm4gY29uZi53Z0FydGljbGVQYXRoLnJlcGxhY2UoJyQxJywgZW5jb2RlVVJJQ29tcG9uZW50KHBhZ2VOYW1lKS5yZXBsYWNlKC8lM0EvZywgJzonKS5yZXBsYWNlKC8lMkYvZywgJy8nKSk7XG5cdH07XG5cdGNvbnN0IGVzY2FwZVJFID0gKHN0cikgPT4ge1xuXHRcdHJldHVybiBzdHIucmVwbGFjZSgvKFskKCkqKy4/W1xcXFxcXF1eXSkvZywgJ1xcXFwkMScpO1xuXHR9O1xuXHRjb25zdCBzdWJzdGl0dXRlRmFjdG9yeSA9IChvcHRpb25zKSA9PiB7XG5cdFx0b3B0aW9ucyB8fD0ge307XG5cdFx0Y29uc3QgbGVhZCA9IG9wdGlvbnMuaW5kaWNhdG9yIHx8ICckJztcblx0XHRjb25zdCBpbmRpY2F0b3IgPSBlc2NhcGVSRShsZWFkKTtcblx0XHRjb25zdCBsYnJhY2UgPSBlc2NhcGVSRShvcHRpb25zLmxicmFjZSB8fCAneycpO1xuXHRcdGNvbnN0IHJicmFjZSA9IGVzY2FwZVJFKG9wdGlvbnMucmJyYWNlIHx8ICd9Jyk7XG5cdFx0Y29uc3QgcmUgPSBuZXcgUmVnRXhwKFxuXHRcdFx0Ly8gJCRcblx0XHRcdGAoPzoke2luZGljYXRvcn0oJHtpbmRpY2F0b3J9KSl8YCArXG5cdFx0XHRcdC8vICQwLCAkMVxuXHRcdFx0XHRgKD86JHtpbmRpY2F0b3J9KFxcXFxkKykpfGAgK1xuXHRcdFx0XHQvLyAke2tleX1cblx0XHRcdFx0YCg/OiR7aW5kaWNhdG9yfSg/OiR7bGJyYWNlfShbXiR7bGJyYWNlfSR7cmJyYWNlfV0rKSR7cmJyYWNlfSkpfGAgK1xuXHRcdFx0XHQvLyAka2V5IChvbmx5IGlmIGZpcnN0IGNoYXIgYWZ0ZXIgJCBpcyBub3QgJCwgZGlnaXQsIG9yIHsgKVxuXHRcdFx0XHRgKD86JHtpbmRpY2F0b3J9KD8hKD86WyR7aW5kaWNhdG9yfSR7bGJyYWNlfV18XFxcXGQpKShcXFxcUys/KVxcXFxiKWAsXG5cdFx0XHQnZydcblx0XHQpO1xuXHRcdC8vIFJlcGxhY2UgJDEsICQyLCBvciAke2tleTF9LCAke2tleTJ9LCBvciAka2V5MSwgJGtleTIgYnkgdmFsdWVzIGZyb20gbWFwLiAkJCBpcyByZXBsYWNlZCBieSBhIHNpbmdsZSAkLlxuXHRcdHJldHVybiAoc3RyLCBtYXApID0+IHtcblx0XHRcdGlmICghbWFwKSB7XG5cdFx0XHRcdHJldHVybiBzdHI7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gc3RyLnJlcGxhY2UocmUsIChtYXRjaCwgcHJlZml4LCBpZHgsIGtleSwgYWxwaGEpID0+IHtcblx0XHRcdFx0aWYgKHByZWZpeCA9PT0gbGVhZCkge1xuXHRcdFx0XHRcdHJldHVybiBsZWFkO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IGsgPSBhbHBoYSB8fCBrZXkgfHwgaWR4O1xuXHRcdFx0XHRjb25zdCByZXBsYWNlbWVudCA9IHR5cGVvZiBtYXBba10gPT09ICdmdW5jdGlvbicgPyBtYXBba10obWF0Y2gsIGspIDogbWFwW2tdO1xuXHRcdFx0XHRyZXR1cm4gdHlwZW9mIHJlcGxhY2VtZW50ID09PSAnc3RyaW5nJyA/IHJlcGxhY2VtZW50IDogcmVwbGFjZW1lbnQgfHwgbWF0Y2g7XG5cdFx0XHR9KTtcblx0XHR9O1xuXHR9O1xuXHRjb25zdCByZXBsYWNlU2hvcnRjdXRzID0gKCgpID0+IHtcblx0XHRjb25zdCByZXBsYWNlSGFzaCA9IHN1YnN0aXR1dGVGYWN0b3J5KHtcblx0XHRcdGluZGljYXRvcjogJyMnLFxuXHRcdFx0bGJyYWNlOiAnWycsXG5cdFx0XHRyYnJhY2U6ICddJyxcblx0XHR9KTtcblx0XHRyZXR1cm4gKHN0ciwgbWFwKSA9PiB7XG5cdFx0XHRjb25zdCBzID0gcmVwbGFjZUhhc2goc3RyLCBtYXApO1xuXHRcdFx0cmV0dXJuIEhDLmNhcGl0YWxpemVQYWdlTmFtZXMgPyBjYXBpdGFsaXplKHMpIDogcztcblx0XHR9O1xuXHR9KSgpO1xuXHQvLyBUZXh0IG1vZGlmaWNhdGlvblxuXHRjb25zdCBmaW5kQ2F0c1JFID0gbmV3IFJlZ0V4cChcblx0XHRgXFxcXFtcXFxcWyR7d2lraVRleHRCbGFua09yQmlkaX0oPzoke0hDLmNhdGVnb3J5X3JlZ2V4cH0pJHt3aWtpVGV4dEJsYW5rT3JCaWRpfTpbXlxcXFxdXStcXFxcXVxcXFxdYCxcblx0XHQnZydcblx0KTtcblx0Y29uc3QgcmVwbGFjZUJ5QmxhbmtzID0gKG1hdGNoKSA9PiB7XG5cdFx0cmV0dXJuIG1hdGNoLnJlcGxhY2UoLyhcXHN8XFxTKS9nLCAnICcpO1xuXHR9OyAvLyAvLi8gZG9lc24ndCBtYXRjaCBsaW5lYnJlYWtzLiAvKFxcc3xcXFMpLyBkb2VzLlxuXHRjb25zdCBmaW5kX2NhdGVnb3J5ID0gKHdpa2l0ZXh0LCBjYXRlZ29yeSwgb25jZSkgPT4ge1xuXHRcdGxldCBjYXRfcmVnZXggPSBudWxsO1xuXHRcdGlmIChIQy50ZW1wbGF0ZV9jYXRlZ29yaWVzW2NhdGVnb3J5XSkge1xuXHRcdFx0Y2F0X3JlZ2V4ID0gbmV3IFJlZ0V4cChcblx0XHRcdFx0YFxcXFx7XFxcXHske3dpa2lUZXh0QmxhbmtPckJpZGl9KCR7SEMudGVtcGxhdGVfcmVnZXhwfSg/PSR7d2lraVRleHRCbGFua09yQmlkaX06KSk/JHt3aWtpVGV4dEJsYW5rT3JCaWRpfSg/OiR7SEMudGVtcGxhdGVfY2F0ZWdvcmllc1tjYXRlZ29yeV19KSR7d2lraVRleHRCbGFua09yQmlkaX0oXFxcXHwuKj8pP1xcXFx9XFxcXH1gLFxuXHRcdFx0XHQnZydcblx0XHRcdCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IGNhdF9uYW1lID0gZXNjYXBlUkUoY2F0ZWdvcnkpO1xuXHRcdFx0Y29uc3QgaW5pdGlhbCA9IGNhdF9uYW1lLnNsaWNlKDAsIDEpO1xuXHRcdFx0Y2F0X3JlZ2V4ID0gbmV3IFJlZ0V4cChcblx0XHRcdFx0YFxcXFxbXFxcXFske3dpa2lUZXh0QmxhbmtPckJpZGl9KCR7SEMuY2F0ZWdvcnlfcmVnZXhwfSkke3dpa2lUZXh0QmxhbmtPckJpZGl9OiR7d2lraVRleHRCbGFua09yQmlkaX0ke1xuXHRcdFx0XHRcdGluaXRpYWwgPT09ICdcXFxcJyB8fCAhSEMuY2FwaXRhbGl6ZVBhZ2VOYW1lc1xuXHRcdFx0XHRcdFx0PyBpbml0aWFsXG5cdFx0XHRcdFx0XHQ6IGBbJHtpbml0aWFsLnRvVXBwZXJDYXNlKCl9JHtpbml0aWFsLnRvTG93ZXJDYXNlKCl9XWBcblx0XHRcdFx0fSR7Y2F0X25hbWUuc2xpY2UoMSkucmVwbGFjZSh3aWtpVGV4dEJsYW5rUkUsIHdpa2lUZXh0QmxhbmspfSR7d2lraVRleHRCbGFua09yQmlkaX0oXFxcXHwuKj8pP1xcXFxdXFxcXF1gLFxuXHRcdFx0XHQnZydcblx0XHRcdCk7XG5cdFx0fVxuXHRcdGlmIChvbmNlKSB7XG5cdFx0XHRyZXR1cm4gY2F0X3JlZ2V4LmV4ZWMod2lraXRleHQpO1xuXHRcdH1cblx0XHRjb25zdCBub3dpa2lSZWdleCA9IG5ldyBSZWdFeHAoJzxubycuY29uY2F0KCd3aWtpPicsICcoXFxcXHN8XFxcXFMpKj88L25vJywgJ3dpa2knLCAnPicpLCAnZycpO1xuXHRcdGNvbnN0IGNvcGllZHRleHQgPSB3aWtpdGV4dC5yZXBsYWNlKC88IS0tKFxcc3xcXFMpKj8tLT4vZywgcmVwbGFjZUJ5QmxhbmtzKS5yZXBsYWNlKG5vd2lraVJlZ2V4LCByZXBsYWNlQnlCbGFua3MpO1xuXHRcdGNvbnN0IHJlc3VsdCA9IFtdO1xuXHRcdGxldCBjdXJyX21hdGNoID0gbnVsbDtcblx0XHR3aGlsZSAoKGN1cnJfbWF0Y2ggPSBjYXRfcmVnZXguZXhlYyhjb3BpZWR0ZXh0KSkgIT09IG51bGwpIHtcblx0XHRcdHJlc3VsdC5wdXNoKHtcblx0XHRcdFx0bWF0Y2g6IGN1cnJfbWF0Y2gsXG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0cmVzdWx0LnJlID0gY2F0X3JlZ2V4O1xuXHRcdHJldHVybiByZXN1bHQ7IC8vIEFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIG1hdGNoZXMsIHdpdGggcG9zaXRpb25zLCBpbiByZXN1bHRbIGkgXS5tYXRjaFxuXHR9O1xuXHRsZXQgaW50ZXJsYW5ndWFnZVJFID0gbnVsbDtcblx0Y29uc3QgY2hhbmdlX2NhdGVnb3J5ID0gKHdpa2l0ZXh0LCB0b1JlbW92ZSwgdG9BZGQsIGtleSwgaXNfaGlkZGVuKSA9PiB7XG5cdFx0Y29uc3QgZmluZF9pbnNlcnRpb25wb2ludCA9IChfd2lraXRleHQpID0+IHtcblx0XHRcdGNvbnN0IG5vd2lraVJlZ2V4ID0gbmV3IFJlZ0V4cCgnPG5vJy5jb25jYXQoJ3dpa2k+JywgJyhcXFxcc3xcXFxcUykqPzwvbm8nLCAnd2lraScsICc+JyksICdnJyk7XG5cdFx0XHRjb25zdCBjb3BpZWR0ZXh0ID0gX3dpa2l0ZXh0XG5cdFx0XHRcdC5yZXBsYWNlKC88IS0tKFxcc3xcXFMpKj8tLT4vZywgcmVwbGFjZUJ5QmxhbmtzKVxuXHRcdFx0XHQucmVwbGFjZShub3dpa2lSZWdleCwgcmVwbGFjZUJ5QmxhbmtzKTtcblx0XHRcdC8vIFNlYXJjaCBpbiBjb3BpZWR0ZXh0IHRvIGF2b2lkIHRoYXQgd2UgaW5zZXJ0IGluc2lkZSBhbiBIVE1MIGNvbW1lbnQgb3IgYSBub3dpa2kgXCJlbGVtZW50XCIuXG5cdFx0XHRsZXQgaW5kZXggPSAtMTtcblx0XHRcdGZpbmRDYXRzUkUubGFzdEluZGV4ID0gMDtcblx0XHRcdHdoaWxlIChmaW5kQ2F0c1JFLmV4ZWMoY29waWVkdGV4dCkgIT09IG51bGwpIHtcblx0XHRcdFx0aW5kZXggPSBmaW5kQ2F0c1JFLmxhc3RJbmRleDtcblx0XHRcdH1cblx0XHRcdGlmIChpbmRleCA8IDApIHtcblx0XHRcdFx0Ly8gRmluZCB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGludGVybGFuZ3VhZ2UgbGluay4uLlxuXHRcdFx0XHRsZXQgbWF0Y2ggPSBudWxsO1xuXHRcdFx0XHRpbnRlcmxhbmd1YWdlUkVcblx0XHRcdFx0XHQ/IChtYXRjaCA9IGludGVybGFuZ3VhZ2VSRS5leGVjKGNvcGllZHRleHQpKVxuXHRcdFx0XHRcdDogLy8gQXBwcm94aW1hdGlvbiB3aXRob3V0IEFQSTogaW50ZXJsYW5ndWFnZSBsaW5rcyBzdGFydCB3aXRoIDIgdG8gMyBsb3dlciBjYXNlIGxldHRlcnMsIG9wdGlvbmFsbHkgZm9sbG93ZWQgYnlcblx0XHRcdFx0XHRcdC8vIGEgc2VxdWVuY2Ugb2YgZ3JvdXBzIGNvbnNpc3Rpbmcgb2YgYSBkYXNoIGZvbGxvd2VkIGJ5IG9uZSBvciBtb3JlIGxvd2VyIGNhc2UgbGV0dGVycy4gRXhjZXB0aW9ucyBhcmUgXCJzaW1wbGVcIlxuXHRcdFx0XHRcdFx0Ly8gYW5kIFwidG9raXBvbmFcIi5cblx0XHRcdFx0XHRcdChtYXRjaCA9IC8oKF58XFxuXFxyPykoXFxbXFxbXFxzKigoW2Etel17MiwzfSgtW2Etel0rKSopfHNpbXBsZXx0b2tpcG9uYSlcXHMqOlteXFxdXStdXVxccyopKSskLy5leGVjKFxuXHRcdFx0XHRcdFx0XHRjb3BpZWR0ZXh0XG5cdFx0XHRcdFx0XHQpKTtcblx0XHRcdFx0aWYgKG1hdGNoKSB7XG5cdFx0XHRcdFx0KHtpbmRleH0gPSBtYXRjaCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRpZHg6IGluZGV4LFxuXHRcdFx0XHRcdG9uQ2F0OiBmYWxzZSxcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGlkeDogaW5kZXgsXG5cdFx0XHRcdG9uQ2F0OiBpbmRleCA+PSAwLFxuXHRcdFx0fTtcblx0XHR9O1xuXHRcdGNvbnN0IHN1bW1hcnkgPSBbXTtcblx0XHRjb25zdCBuYW1lU3BhY2UgPSBIQy5jYXRlZ29yeV9jYW5vbmljYWw7XG5cdFx0Y29uc3QgLy8gUG9zaXRpb24gb2YgcmVtb3ZlZCBjYXRlZ29yeTtcblx0XHRcdGtleUNoYW5nZSA9IHRvUmVtb3ZlICYmIHRvQWRkICYmIHRvUmVtb3ZlID09PSB0b0FkZCAmJiB0b0FkZC5sZW5ndGggPiAwO1xuXHRcdGxldCBtYXRjaGVzO1xuXHRcdGxldCBjYXRfcG9pbnQgPSAtMTtcblx0XHRpZiAoa2V5KSB7XG5cdFx0XHRrZXkgPSBgfCR7a2V5fWA7XG5cdFx0fVxuXHRcdC8vIFJlbW92ZVxuXHRcdGlmICh0b1JlbW92ZSAmJiB0b1JlbW92ZS5sZW5ndGggPiAwKSB7XG5cdFx0XHRtYXRjaGVzID0gZmluZF9jYXRlZ29yeSh3aWtpdGV4dCwgdG9SZW1vdmUpO1xuXHRcdFx0aWYgKCFtYXRjaGVzIHx8IG1hdGNoZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0dGV4dDogd2lraXRleHQsXG5cdFx0XHRcdFx0c3VtbWFyeSxcblx0XHRcdFx0XHRlcnJvcjogZ2V0TWVzc2FnZSgnbWVzc2FnZXMtY2F0X25vdEZvdW5kJywgdG9SZW1vdmUpLFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0bGV0IGJlZm9yZSA9IHdpa2l0ZXh0LnNsaWNlKDAsIE1hdGgubWF4KDAsIG1hdGNoZXNbMF0ubWF0Y2guaW5kZXgpKTtcblx0XHRcdGxldCBhZnRlciA9IHdpa2l0ZXh0LnNsaWNlKE1hdGgubWF4KDAsIG1hdGNoZXNbMF0ubWF0Y2guaW5kZXggKyBtYXRjaGVzWzBdLm1hdGNoWzBdLmxlbmd0aCkpO1xuXHRcdFx0aWYgKG1hdGNoZXMubGVuZ3RoID4gMSkge1xuXHRcdFx0XHQvLyBSZW1vdmUgYWxsIG9jY3VycmVuY2VzIGluIGFmdGVyXG5cdFx0XHRcdG1hdGNoZXMucmUubGFzdEluZGV4ID0gMDtcblx0XHRcdFx0YWZ0ZXIgPSBhZnRlci5yZXBsYWNlKG1hdGNoZXMucmUsICcnKTtcblx0XHRcdH1cblx0XHRcdGlmIChcblx0XHRcdFx0dG9BZGQgJiYgLy8gbmFtZVNwYWNlID0gbWF0Y2hlc1sgMCBdLm1hdGNoWyAxIF0gfHwgbmFtZVNwYWNlOyBDYW5vbmljYWwgbmFtZXNwYWNlIHNob3VsZCBiZSBhbHdheXMgcHJlZmVycmVkXG5cdFx0XHRcdGtleSA9PT0gbnVsbFxuXHRcdFx0KSB7XG5cdFx0XHRcdFssICwga2V5XSA9IG1hdGNoZXNbMF0ubWF0Y2g7XG5cdFx0XHR9XG5cdFx0XHQvLyBSZW1lbWJlciB0aGUgY2F0ZWdvcnkga2V5LCBpZiBhbnkuXG5cdFx0XHQvLyBSZW1vdmUgd2hpdGVzcGFjZSAocHJvcGVybHkpOiBzdHJpcCB3aGl0ZXNwYWNlLCBidXQgb25seSB1cCB0byB0aGUgbmV4dCBsaW5lIGZlZWQuXG5cdFx0XHQvLyBJZiB3ZSB0aGVuIGhhdmUgdHdvIGxpbmVmZWVkcyBpbiBhIHJvdywgcmVtb3ZlIG9uZS4gT3RoZXJ3aXNlLCBpZiB3ZSBoYXZlIHR3byBub24tXG5cdFx0XHQvLyB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMsIGluc2VydCBhIGJsYW5rLlxuXHRcdFx0bGV0IGkgPSBiZWZvcmUubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID49IDAgJiYgYmVmb3JlLmNoYXJBdChpKSAhPT0gJ1xcbicgJiYgYmVmb3JlLnNsaWNlKGksIGkgKyAxKS5zZWFyY2goL1xccy8pID49IDApIHtcblx0XHRcdFx0aS0tO1xuXHRcdFx0fVxuXHRcdFx0bGV0IGogPSAwO1xuXHRcdFx0d2hpbGUgKGogPCBhZnRlci5sZW5ndGggJiYgYWZ0ZXIuY2hhckF0KGopICE9PSAnXFxuJyAmJiBhZnRlci5zbGljZShqLCBqICsgMSkuc2VhcmNoKC9cXHMvKSA+PSAwKSB7XG5cdFx0XHRcdGorKztcblx0XHRcdH1cblx0XHRcdGlmIChcblx0XHRcdFx0aSA+PSAwICYmXG5cdFx0XHRcdGJlZm9yZS5jaGFyQXQoaSkgPT09ICdcXG4nICYmXG5cdFx0XHRcdChhZnRlci5sZW5ndGggPT09IDAgfHwgKGogPCBhZnRlci5sZW5ndGggJiYgYWZ0ZXIuY2hhckF0KGopID09PSAnXFxuJykpXG5cdFx0XHQpIHtcblx0XHRcdFx0aS0tO1xuXHRcdFx0fVxuXHRcdFx0YmVmb3JlID0gaSA+PSAwID8gYmVmb3JlLnNsaWNlKDAsIE1hdGgubWF4KDAsIGkgKyAxKSkgOiAnJztcblx0XHRcdGFmdGVyID0gaiA8IGFmdGVyLmxlbmd0aCA/IGFmdGVyLnNsaWNlKE1hdGgubWF4KDAsIGopKSA6ICcnO1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRiZWZvcmUubGVuZ3RoID4gMCAmJlxuXHRcdFx0XHRiZWZvcmUuc2xpY2UoTWF0aC5tYXgoMCwgYmVmb3JlLmxlbmd0aCAtIDEpKS5zZWFyY2goL1xcUy8pID49IDAgJiZcblx0XHRcdFx0YWZ0ZXIubGVuZ3RoID4gMCAmJlxuXHRcdFx0XHRhZnRlci5zbGljZSgwLCAxKS5zZWFyY2goL1xcUy8pID49IDBcblx0XHRcdCkge1xuXHRcdFx0XHRiZWZvcmUgKz0gJyAnO1xuXHRcdFx0fVxuXHRcdFx0Y2F0X3BvaW50ID0gYmVmb3JlLmxlbmd0aDtcblx0XHRcdGlmIChjYXRfcG9pbnQgPT09IDAgJiYgYWZ0ZXIubGVuZ3RoID4gMCAmJiBhZnRlci5zbGljZSgwLCAxKSA9PT0gJ1xcbicpIHtcblx0XHRcdFx0YWZ0ZXIgPSBhZnRlci5zbGljZSgxKTtcblx0XHRcdH1cblx0XHRcdHdpa2l0ZXh0ID0gYmVmb3JlICsgYWZ0ZXI7XG5cdFx0XHRpZiAoIWtleUNoYW5nZSkge1xuXHRcdFx0XHRpZiAoSEMudGVtcGxhdGVfY2F0ZWdvcmllc1t0b1JlbW92ZV0pIHtcblx0XHRcdFx0XHRzdW1tYXJ5LnB1c2goZ2V0TWVzc2FnZSgnbWVzc2FnZXMtdGVtcGxhdGVfcmVtb3ZlZCcsIHRvUmVtb3ZlKSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0c3VtbWFyeS5wdXNoKGdldE1lc3NhZ2UoJ21lc3NhZ2VzLWNhdF9yZW1vdmVkJywgdG9SZW1vdmUpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBBZGRcblx0XHRpZiAodG9BZGQgJiYgdG9BZGQubGVuZ3RoID4gMCkge1xuXHRcdFx0bWF0Y2hlcyA9IGZpbmRfY2F0ZWdvcnkod2lraXRleHQsIHRvQWRkKTtcblx0XHRcdGlmIChtYXRjaGVzICYmIG1hdGNoZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHQvLyBBbHJlYWR5IGV4aXN0c1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHRleHQ6IHdpa2l0ZXh0LFxuXHRcdFx0XHRcdHN1bW1hcnksXG5cdFx0XHRcdFx0ZXJyb3I6IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLWNhdF9leGlzdHMnLCB0b0FkZCksXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRsZXQgb25DYXQgPSBmYWxzZTtcblx0XHRcdGlmIChjYXRfcG9pbnQgPCAwKSB7XG5cdFx0XHRcdGNvbnN0IHBvaW50ID0gZmluZF9pbnNlcnRpb25wb2ludCh3aWtpdGV4dCk7XG5cdFx0XHRcdGNhdF9wb2ludCA9IHBvaW50LmlkeDtcblx0XHRcdFx0KHtvbkNhdH0gPSBwb2ludCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRvbkNhdCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBuZXdjYXRzdHJpbmcgPSBgW1ske25hbWVTcGFjZX06JHt0b0FkZH0ke2tleSB8fCAnJ31dXWA7XG5cdFx0XHRpZiAoY2F0X3BvaW50ID49IDApIHtcblx0XHRcdFx0Y29uc3Qgc3VmZml4ID0gd2lraXRleHQuc2xpY2UoTWF0aC5tYXgoMCwgY2F0X3BvaW50KSk7XG5cdFx0XHRcdHdpa2l0ZXh0ID1cblx0XHRcdFx0XHR3aWtpdGV4dC5zbGljZSgwLCBNYXRoLm1heCgwLCBjYXRfcG9pbnQpKSArXG5cdFx0XHRcdFx0KGNhdF9wb2ludCA+IDAgPyAnXFxuJyA6ICcnKSArXG5cdFx0XHRcdFx0bmV3Y2F0c3RyaW5nICtcblx0XHRcdFx0XHQob25DYXQgPyAnJyA6ICdcXG4nKTtcblx0XHRcdFx0d2lraXRleHQgKz0gc3VmZml4Lmxlbmd0aCA+IDAgJiYgc3VmZml4LnNsaWNlKDAsIDEpICE9PSAnXFxuJyA/IGBcXG4ke3N1ZmZpeH1gIDogc3VmZml4O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKHdpa2l0ZXh0Lmxlbmd0aCA+IDAgJiYgd2lraXRleHQuc2xpY2UoLTEsIHdpa2l0ZXh0Lmxlbmd0aCAtIDEgKyAxKSAhPT0gJ1xcbicpIHtcblx0XHRcdFx0XHR3aWtpdGV4dCArPSAnXFxuJztcblx0XHRcdFx0fVxuXHRcdFx0XHR3aWtpdGV4dCArPSAod2lraXRleHQubGVuZ3RoID4gMCA/ICdcXG4nIDogJycpICsgbmV3Y2F0c3RyaW5nO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGtleUNoYW5nZSkge1xuXHRcdFx0XHRsZXQgayA9IGtleSB8fCAnJztcblx0XHRcdFx0aWYgKGsubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdGsgPSBrLnNsaWNlKDEpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHN1bW1hcnkucHVzaChnZXRNZXNzYWdlKCdtZXNzYWdlcy1jYXRfa2V5Y2hhbmdlJywgdG9BZGQsIGspKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHN1bW1hcnkucHVzaChnZXRNZXNzYWdlKCdtZXNzYWdlcy1jYXRfYWRkZWQnLCB0b0FkZCkpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKEhDLnVuY2F0X3JlZ2V4cCAmJiAhaXNfaGlkZGVuKSB7XG5cdFx0XHRcdGNvbnN0IHR4dCA9IHdpa2l0ZXh0LnJlcGxhY2UoSEMudW5jYXRfcmVnZXhwLCAnJyk7IC8vIFJlbW92ZSBcInVuY2F0XCIgdGVtcGxhdGVzXG5cdFx0XHRcdGlmICh0eHQubGVuZ3RoICE9PSB3aWtpdGV4dC5sZW5ndGgpIHtcblx0XHRcdFx0XHR3aWtpdGV4dCA9IHR4dDtcblx0XHRcdFx0XHRzdW1tYXJ5LnB1c2goZ2V0TWVzc2FnZSgnbWVzc2FnZXMtdW5jYXRfcmVtb3ZlZCcpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4ge1xuXHRcdFx0dGV4dDogd2lraXRleHQsXG5cdFx0XHRzdW1tYXJ5LFxuXHRcdFx0ZXJyb3I6IG51bGwsXG5cdFx0fTtcblx0fTtcblx0Ly8gVGhlIHJlYWwgSG90Q2F0IFVJXG5cdGNvbnN0IGV2dEtleXMgPSAoe2N0cmxLZXksIG1ldGFLZXksIHNoaWZ0S2V5fSkgPT4ge1xuXHRcdGxldCBjb2RlID0gMDtcblx0XHRpZiAoY3RybEtleSkge1xuXHRcdFx0Ly8gQWxsIG1vZGVybiBicm93c2Vyc1xuXHRcdFx0Ly8gQ3RybC1jbGljayBzZWVtcyB0byBiZSBvdmVybG9hZGVkIGluIEZGL01hYyAoaXQgb3BlbnMgYSBwb3AtdXAgbWVudSksIHNvIHRyZWF0IGNtZC1jbGlja1xuXHRcdFx0Ly8gYXMgYSBjdHJsLWNsaWNrLCB0b28uXG5cdFx0XHRpZiAoY3RybEtleSB8fCBtZXRhS2V5KSB7XG5cdFx0XHRcdGNvZGUgfHw9IDE7XG5cdFx0XHR9XG5cdFx0XHRpZiAoc2hpZnRLZXkpIHtcblx0XHRcdFx0Y29kZSB8fD0gMjtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGNvZGU7XG5cdH07XG5cdGNvbnN0IGV2dEtpbGwgPSAoZSkgPT4ge1xuXHRcdGlmIChlLnByZXZlbnREZWZhdWx0KSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRlLmNhbmNlbEJ1YmJsZSA9IHRydWU7XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fTtcblx0bGV0IGNhdExpbmUgPSBudWxsOyAvLyB0cnVlIGlmIE1lZGlhV2lraSBzZXJ2ZXMgdGhlIG5ldyBVTC1MSSBET00gZm9yIGNhdGVnb3JpZXNcblx0bGV0IG9uVXBsb2FkID0gZmFsc2U7XG5cdGxldCBlZGl0b3JzID0gW107XG5cdGxldCBjb21taXRCdXR0b24gPSBudWxsO1xuXHRsZXQgY29tbWl0Rm9ybSA9IG51bGw7XG5cdGxldCBtdWx0aVNwYW4gPSBudWxsO1xuXHRsZXQgcGFnZVRleHQgPSBudWxsO1xuXHRsZXQgcGFnZVRpbWUgPSBudWxsO1xuXHRsZXQgcGFnZVdhdGNoZWQgPSBmYWxzZTtcblx0bGV0IHdhdGNoQ3JlYXRlID0gZmFsc2U7XG5cdGxldCB3YXRjaEVkaXQgPSBmYWxzZTtcblx0bGV0IG1pbm9yRWRpdHMgPSBmYWxzZTtcblx0bGV0IGVkaXRUb2tlbiA9IG51bGw7XG5cdGxldCBpc19ydGwgPSBmYWxzZTtcblx0bGV0IHNlcnZlclRpbWUgPSBudWxsO1xuXHRsZXQgbGFzdFJldklkID0gbnVsbDtcblx0bGV0IHBhZ2VUZXh0UmV2SWQgPSBudWxsO1xuXHRsZXQgY29uZmxpY3RpbmdVc2VyID0gbnVsbDtcblx0bGV0IG5ld0RPTSA9IGZhbHNlO1xuXHRjb25zdCBVTkNIQU5HRUQgPSAwO1xuXHRjb25zdCBPUEVOID0gMTsgLy8gT3BlbiwgYnV0IG5vIGlucHV0IHlldFxuXHRjb25zdCBDSEFOR0VfUEVORElORyA9IDI7IC8vIE9wZW4sIHNvbWUgaW5wdXQgbWFkZVxuXHRjb25zdCBDSEFOR0VEID0gMztcblx0Y29uc3QgREVMRVRFRCA9IDQ7XG5cdGNvbnN0IHNldFBhZ2UgPSAoZGF0YSkgPT4ge1xuXHRcdGxldCBzdGFydFRpbWUgPSBudWxsO1xuXHRcdGlmIChkYXRhICYmIGRhdGEucXVlcnkpIHtcblx0XHRcdGlmIChkYXRhLnF1ZXJ5LnBhZ2VzKSB7XG5cdFx0XHRcdGNvbnN0IFtwYWdlXSA9IGRhdGEucXVlcnkucGFnZXM7XG5cdFx0XHRcdGlmIChwYWdlKSB7XG5cdFx0XHRcdFx0aWYgKHBhZ2UucmV2aXNpb25zICYmIHBhZ2UucmV2aXNpb25zLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRcdC8vIFJldmlzaW9ucyBhcmUgc29ydGVkIGJ5IHJldmlzaW9uIElELCBoZW5jZSBbMF0gaXMgdGhlIG9uZSB3ZSBhc2tlZCBmb3IsIGFuZCBwb3NzaWJseSB0aGVyZSdzIGEgWzFdIGlmIHdlJ3JlXG5cdFx0XHRcdFx0XHQvLyBub3Qgb24gdGhlIGxhdGVzdCByZXZpc2lvbiAoZWRpdCBjb25mbGljdHMgYW5kIHN1Y2gpLlxuXHRcdFx0XHRcdFx0cGFnZVRleHQgPSBwYWdlLnJldmlzaW9uc1swXS5zbG90c1snbWFpbiddLmNvbnRlbnQ7XG5cdFx0XHRcdFx0XHRpZiAocGFnZS5yZXZpc2lvbnNbMF0udGltZXN0YW1wKSB7XG5cdFx0XHRcdFx0XHRcdHBhZ2VUaW1lID0gcGFnZS5yZXZpc2lvbnNbMF0udGltZXN0YW1wLnJlcGxhY2UoL1xcRC9nLCAnJyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAocGFnZS5yZXZpc2lvbnNbMF0ucmV2aWQpIHtcblx0XHRcdFx0XHRcdFx0cGFnZVRleHRSZXZJZCA9IHBhZ2UucmV2aXNpb25zWzBdLnJldmlkO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKHBhZ2UucmV2aXNpb25zLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0XHRcdFx0Y29uZmxpY3RpbmdVc2VyID0gcGFnZS5yZXZpc2lvbnNbMV0udXNlcjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHBhZ2UubGFzdHJldmlkKSB7XG5cdFx0XHRcdFx0XHRsYXN0UmV2SWQgPSBwYWdlLmxhc3RyZXZpZDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHBhZ2Uuc3RhcnR0aW1lc3RhbXApIHtcblx0XHRcdFx0XHRcdHN0YXJ0VGltZSA9IHBhZ2Uuc3RhcnR0aW1lc3RhbXAucmVwbGFjZSgvXFxEL2csICcnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cGFnZVdhdGNoZWQgPSB0eXBlb2YgcGFnZS53YXRjaGVkID09PSAnc3RyaW5nJztcblx0XHRcdFx0XHRpZiAoZGF0YS5xdWVyeS50b2tlbnMpIHtcblx0XHRcdFx0XHRcdGVkaXRUb2tlbiA9IGRhdGEucXVlcnkudG9rZW5zLmNzcmZ0b2tlbjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHBhZ2UubGFuZ2xpbmtzICYmICghZGF0YVsncXVlcnktY29udGludWUnXSB8fCAhZGF0YVsncXVlcnktY29udGludWUnXS5sYW5nbGlua3MpKSB7XG5cdFx0XHRcdFx0XHQvLyBXZSBoYXZlIGludGVybGFuZ3VhZ2UgbGlua3MsIGFuZCB3ZSBnb3QgdGhlbSBhbGwuXG5cdFx0XHRcdFx0XHRsZXQgcmUgPSAnJztcblx0XHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcGFnZS5sYW5nbGlua3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdFx0cmUgKz0gKGkgPiAwID8gJ3wnIDogJycpICsgcGFnZS5sYW5nbGlua3NbaV0ubGFuZy5yZXBsYWNlKC8oWyQoKSorLj9cXFxcXl0pL2csICdcXFxcJDEnKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmIChyZS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHRcdGludGVybGFuZ3VhZ2VSRSA9IG5ldyBSZWdFeHAoYCgoXnxcXFxcblxcXFxyPykoXFxcXFtcXFxcW1xcXFxzKigke3JlfSlcXFxccyo6W15cXFxcXV0rXFxcXF1cXFxcXVxcXFxzKikpKyRgKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vIFNpdGVpbmZvXG5cdFx0XHRpZiAoZGF0YS5xdWVyeS5nZW5lcmFsKSB7XG5cdFx0XHRcdGlmIChkYXRhLnF1ZXJ5LmdlbmVyYWwudGltZSAmJiAhc3RhcnRUaW1lKSB7XG5cdFx0XHRcdFx0c3RhcnRUaW1lID0gZGF0YS5xdWVyeS5nZW5lcmFsLnRpbWUucmVwbGFjZSgvXFxEL2csICcnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoSEMuY2FwaXRhbGl6ZVBhZ2VOYW1lcyA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdC8vIFJlc291cmNlTG9hZGVyJ3MgSlNQYXJzZXIgZG9lc24ndCBsaWtlIC5jYXNlLCBzbyBvdmVycmlkZSBlc2xpbnQuXG5cdFx0XHRcdFx0SEMuY2FwaXRhbGl6ZVBhZ2VOYW1lcyA9IGRhdGEucXVlcnkuZ2VuZXJhbC5jYXNlID09PSAnZmlyc3QtbGV0dGVyJztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0c2VydmVyVGltZSA9IHN0YXJ0VGltZTtcblx0XHRcdC8vIFVzZXJpbmZvXG5cdFx0XHRpZiAoZGF0YS5xdWVyeS51c2VyaW5mbyAmJiBkYXRhLnF1ZXJ5LnVzZXJpbmZvLm9wdGlvbnMpIHtcblx0XHRcdFx0d2F0Y2hDcmVhdGUgPSAhSEMuZG9udF9hZGRfdG9fd2F0Y2hsaXN0ICYmIGRhdGEucXVlcnkudXNlcmluZm8ub3B0aW9ucy53YXRjaGNyZWF0aW9ucyA9PT0gJzEnO1xuXHRcdFx0XHR3YXRjaEVkaXQgPSAhSEMuZG9udF9hZGRfdG9fd2F0Y2hsaXN0ICYmIGRhdGEucXVlcnkudXNlcmluZm8ub3B0aW9ucy53YXRjaGRlZmF1bHQgPT09ICcxJztcblx0XHRcdFx0bWlub3JFZGl0cyA9IGRhdGEucXVlcnkudXNlcmluZm8ub3B0aW9ucy5taW5vcmRlZmF1bHQgPT09IDE7XG5cdFx0XHRcdC8vIElmIHRoZSB1c2VyIGhhcyB0aGUgXCJBbGwgZWRpdHMgYXJlIG1pbm9yXCIgcHJlZmVyZW5jZSBlbmFibGVkLCB3ZSBzaG91bGQgaG9ub3IgdGhhdFxuXHRcdFx0XHQvLyBmb3Igc2luZ2xlIGNhdGVnb3J5IGNoYW5nZXMsIG5vIG1hdHRlciB3aGF0IHRoZSBzaXRlIGNvbmZpZ3VyYXRpb24gaXMuXG5cdFx0XHRcdGlmIChtaW5vckVkaXRzKSB7XG5cdFx0XHRcdFx0SEMuc2luZ2xlX21pbm9yID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0bGV0IHNhdmVJblByb2dyZXNzID0gZmFsc2U7XG5cdGNvbnN0IGluaXRpYXRlRWRpdCA9IChkb0VkaXQsIGZhaWx1cmUpID0+IHtcblx0XHRpZiAoc2F2ZUluUHJvZ3Jlc3MpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0c2F2ZUluUHJvZ3Jlc3MgPSB0cnVlO1xuXHRcdGxldCBvbGRCdXR0b25TdGF0ZTtcblx0XHRpZiAoY29tbWl0QnV0dG9uKSB7XG5cdFx0XHRvbGRCdXR0b25TdGF0ZSA9IGNvbW1pdEJ1dHRvbi5kaXNhYmxlZDtcblx0XHRcdGNvbW1pdEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG5cdFx0fVxuXHRcdGNvbnN0IGZhaWwgPSBmdW5jdGlvbiAoLi4uYXJncykge1xuXHRcdFx0c2F2ZUluUHJvZ3Jlc3MgPSBmYWxzZTtcblx0XHRcdGlmIChjb21taXRCdXR0b24pIHtcblx0XHRcdFx0Y29tbWl0QnV0dG9uLmRpc2FibGVkID0gb2xkQnV0dG9uU3RhdGU7XG5cdFx0XHR9XG5cdFx0XHRmYWlsdXJlLmFwcGx5KHRoaXMsIGFyZ3MpO1xuXHRcdH07XG5cdFx0Ly8gTXVzdCB1c2UgQWpheCBoZXJlIHRvIGdldCB0aGUgdXNlciBvcHRpb25zIGFuZCB0aGUgZWRpdCB0b2tlbi5cblx0XHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdHJhd2NvbnRpbnVlOiAnJyxcblx0XHRcdHRpdGxlczogY29uZi53Z1BhZ2VOYW1lLFxuXHRcdFx0cHJvcDogWydpbmZvJywgJ3JldmlzaW9ucycsICdsYW5nbGlua3MnXSxcblx0XHRcdGlucHJvcDogJ3dhdGNoZWQnLFxuXHRcdFx0cnZwcm9wOiBbJ2NvbnRlbnQnLCAndGltZXN0YW1wJywgJ2lkcycsICd1c2VyJ10sXG5cdFx0XHRydnNsb3RzOiAnKicsXG5cdFx0XHRydmxpbWl0OiAnMicsXG5cdFx0XHRydmRpcjogJ25ld2VyJyxcblx0XHRcdHJ2c3RhcnRpZDogY29uZi53Z0N1clJldmlzaW9uSWQsXG5cdFx0XHRsbGxpbWl0OiAnNTAwJyxcblx0XHRcdG1ldGE6IFsnc2l0ZWluZm8nLCAndXNlcmluZm8nLCAndG9rZW5zJ10sXG5cdFx0XHR0eXBlOiAnY3NyZicsXG5cdFx0XHR1aXByb3A6IFsnb3B0aW9ucyddLFxuXHRcdH07XG5cdFx0YXBpLmdldChwYXJhbXMpXG5cdFx0XHQuZG9uZSgoZGF0YSkgPT4ge1xuXHRcdFx0XHRzZXRQYWdlKGRhdGEpO1xuXHRcdFx0XHRkb0VkaXQoZmFpbCk7XG5cdFx0XHR9KVxuXHRcdFx0LmZhaWwoKHtzdGF0dXMsIHN0YXR1c1RleHR9KSA9PiB7XG5cdFx0XHRcdGZhaWwoYCR7c3RhdHVzfSAke3N0YXR1c1RleHR9YCk7XG5cdFx0XHR9KTtcblx0fTtcblx0Y29uc3QgbXVsdGlDaGFuZ2VNc2cgPSAoY291bnQpID0+IHtcblx0XHRyZXR1cm4gZ2V0TWVzc2FnZSgnbWVzc2FnZXMtbXVsdGlfY2hhbmdlJywgU3RyaW5nKGNvdW50KSk7XG5cdH07XG5cdGNvbnN0IGN1cnJlbnRUaW1lc3RhbXAgPSAoKSA9PiB7XG5cdFx0Y29uc3Qgbm93ID0gbmV3IERhdGUoKTtcblx0XHRsZXQgdHMgPSBTdHJpbmcobm93LmdldFVUQ0Z1bGxZZWFyKCkpO1xuXHRcdGNvbnN0IHR3byA9IChzKSA9PiB7XG5cdFx0XHRyZXR1cm4gcy5zbGljZSgtMik7XG5cdFx0fTtcblx0XHR0cyArPVxuXHRcdFx0dHdvKGAwJHtub3cuZ2V0VVRDTW9udGgoKSArIDF9YCkgK1xuXHRcdFx0dHdvKGAwJHtub3cuZ2V0VVRDRGF0ZSgpfWApICtcblx0XHRcdHR3byhgMDAke25vdy5nZXRVVENIb3VycygpfWApICtcblx0XHRcdHR3byhgMDAke25vdy5nZXRVVENNaW51dGVzKCl9YCkgK1xuXHRcdFx0dHdvKGAwMCR7bm93LmdldFVUQ1NlY29uZHMoKX1gKTtcblx0XHRyZXR1cm4gdHM7XG5cdH07XG5cdGNvbnN0IHBlcmZvcm1DaGFuZ2VzID0gKGZhaWx1cmUsIHNpbmdsZUVkaXRvcikgPT4ge1xuXHRcdGlmIChwYWdlVGV4dCA9PT0gbnVsbCkge1xuXHRcdFx0ZmFpbHVyZShnZXRNZXNzYWdlKCdtZXNzYWdlcy1tdWx0aV9lcnJvcicpKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Ly8gQ3JlYXRlIGEgZm9ybSBhbmQgc3VibWl0IGl0LiBXZSBkb24ndCB1c2UgdGhlIGVkaXQgQVBJIChhcGkucGhwP2FjdGlvbj1lZGl0KSBiZWNhdXNlXG5cdFx0Ly8gKGEpIHNlbnNpYmx5IHJlcG9ydGluZyBiYWNrIGVycm9ycyBsaWtlIGVkaXQgY29uZmxpY3RzIGlzIGFsd2F5cyBhIGhhc3NsZSwgYW5kXG5cdFx0Ly8gKGIpIHdlIHdhbnQgdG8gc2hvdyBhIGRpZmYgZm9yIG11bHRpLWVkaXRzIGFueXdheSwgYW5kXG5cdFx0Ly8gKGMpIHdlIHdhbnQgdG8gdHJpZ2dlciBvbnN1Ym1pdCBldmVudHMsIGFsbG93aW5nIHVzZXIgY29kZSB0byBpbnRlcmNlcHQgdGhlIGVkaXQuXG5cdFx0Ly8gVXNpbmcgdGhlIGZvcm0sIHdlIGNhbiBkbyAoYikgYW5kIChjKSwgYW5kIHdlIGdldCAoYSkgZm9yIGZyZWUuIEFuZCwgb2YgY291cnNlLCB1c2luZyB0aGUgZm9ybVxuXHRcdC8vIGF1dG9tYXRpY2FsbHkgcmVsb2FkcyB0aGUgcGFnZSB3aXRoIHRoZSB1cGRhdGVkIGNhdGVnb3JpZXMgb24gYSBzdWNjZXNzZnVsIHN1Ym1pdCwgd2hpY2hcblx0XHQvLyB3ZSB3b3VsZCBoYXZlIHRvIGRvIGV4cGxpY2l0bHkgaWYgd2UgdXNlZCB0aGUgZWRpdCBBUEkuXG5cdFx0bGV0IGFjdGlvbjtcblx0XHQvLyBOb3JtYWxseSwgd2UgZG9uJ3QgaGF2ZSB0byBjYXJlIGFib3V0IGVkaXQgY29uZmxpY3RzLiBJZiBzb21lIG90aGVyIHVzZXIgZWRpdGVkIHRoZSBwYWdlIGluIHRoZSBtZWFudGltZSwgdGhlXG5cdFx0Ly8gc2VydmVyIHdpbGwgdGFrZSBjYXJlIG9mIGl0IGFuZCBtZXJnZSB0aGUgZWRpdCBhdXRvbWF0aWNhbGx5IG9yIHByZXNlbnQgYW4gZWRpdCBjb25mbGljdCBzY3JlZW4uIEhvd2V2ZXIsIHRoZVxuXHRcdC8vIHNlcnZlciBzdXBwcmVzc2VzIGVkaXQgY29uZmxpY3RzIHdpdGggb25lc2VsZi4gSGVuY2UsIGlmIHdlIGhhdmUgYSBjb25mbGljdCwgYW5kIHRoZSBjb25mbGljdGluZyB1c2VyIGlzIHRoZVxuXHRcdC8vIGN1cnJlbnQgdXNlciwgdGhlbiB3ZSBzZXQgdGhlIFwib2xkaWRcIiB2YWx1ZSBhbmQgc3dpdGNoIHRvIGRpZmYsIHdoaWNoIGdpdmVzIHRoZSBcInlvdSBhcmUgZWRpdGluZyBhbiBvbGQgdmVyc2lvbjtcblx0XHQvLyBpZiB5b3Ugc2F2ZSwgYW55IG1vcmUgcmVjZW50IGNoYW5nZXMgd2lsbCBiZSBsb3N0XCIgc2NyZWVuLlxuXHRcdGNvbnN0IHNlbGZFZGl0Q29uZmxpY3QgPVxuXHRcdFx0KChsYXN0UmV2SWQgIT09IG51bGwgJiYgbGFzdFJldklkICE9PSBjb25mLndnQ3VyUmV2aXNpb25JZCkgfHxcblx0XHRcdFx0KHBhZ2VUZXh0UmV2SWQgIT09IG51bGwgJiYgcGFnZVRleHRSZXZJZCAhPT0gY29uZi53Z0N1clJldmlzaW9uSWQpKSAmJlxuXHRcdFx0Y29uZmxpY3RpbmdVc2VyICYmXG5cdFx0XHRjb25mbGljdGluZ1VzZXIgPT09IGNvbmYud2dVc2VyTmFtZTtcblx0XHRpZiAoc2luZ2xlRWRpdG9yICYmICFzaW5nbGVFZGl0b3Iubm9Db21taXQgJiYgIUhDLm5vX2F1dG9jb21taXQgJiYgZWRpdFRva2VuICYmICFzZWxmRWRpdENvbmZsaWN0KSB7XG5cdFx0XHQvLyBJZiB3ZSBkbyBoYXZlIGFuIGVkaXQgY29uZmxpY3QsIGJ1dCBub3Qgd2l0aCBvdXJzZWxmLCB0aGF0J3Mgbm8gcmVhc29uIG5vdCB0byBhdHRlbXB0IHRvIHNhdmU6IHRoZSBzZXJ2ZXIgc2lkZSBtYXkgYWN0dWFsbHkgYmUgYWJsZSB0b1xuXHRcdFx0Ly8gbWVyZ2UgdGhlIGNoYW5nZXMuIFdlIGp1c3QgbmVlZCB0byBtYWtlIHN1cmUgdGhhdCB3ZSBkbyBwcmVzZW50IGEgZGlmZiB2aWV3IGlmIGl0J3MgYSBzZWxmIGVkaXQgY29uZmxpY3QuXG5cdFx0XHRjb21taXRGb3JtLndwRWRpdFRva2VuLnZhbHVlID0gZWRpdFRva2VuO1xuXHRcdFx0YWN0aW9uID0gY29tbWl0Rm9ybS53cERpZmY7XG5cdFx0XHRpZiAoYWN0aW9uKSB7XG5cdFx0XHRcdGFjdGlvbi52YWx1ZSA9ICd3cFNhdmUnO1xuXHRcdFx0XHRhY3Rpb24ubmFtZSA9IGFjdGlvbi52YWx1ZTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0YWN0aW9uID0gY29tbWl0Rm9ybS53cFNhdmU7XG5cdFx0XHRpZiAoYWN0aW9uKSB7XG5cdFx0XHRcdGFjdGlvbi52YWx1ZSA9ICd3cERpZmYnO1xuXHRcdFx0XHRhY3Rpb24ubmFtZSA9IGFjdGlvbi52YWx1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0bGV0IHJlc3VsdCA9IHtcblx0XHRcdHRleHQ6IHBhZ2VUZXh0LFxuXHRcdH07XG5cdFx0Y29uc3QgY2hhbmdlZCA9IFtdO1xuXHRcdGNvbnN0IGFkZGVkID0gW107XG5cdFx0Y29uc3QgZGVsZXRlZCA9IFtdO1xuXHRcdGNvbnN0IHRvRWRpdCA9IHNpbmdsZUVkaXRvciA/IFtzaW5nbGVFZGl0b3JdIDogZWRpdG9ycztcblx0XHRsZXQgZWRpdDtcblx0XHRsZXQgaTtcblx0XHRsZXQgZXJyb3IgPSBudWxsO1xuXHRcdGxldCBjaGFuZ2VzID0gMDtcblx0XHRmb3IgKGkgPSAwOyBpIDwgdG9FZGl0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRlZGl0ID0gdG9FZGl0W2ldO1xuXHRcdFx0aWYgKGVkaXQuc3RhdGUgPT09IENIQU5HRUQpIHtcblx0XHRcdFx0cmVzdWx0ID0gY2hhbmdlX2NhdGVnb3J5KFxuXHRcdFx0XHRcdHJlc3VsdC50ZXh0LFxuXHRcdFx0XHRcdGVkaXQub3JpZ2luYWxDYXRlZ29yeSxcblx0XHRcdFx0XHRlZGl0LmN1cnJlbnRDYXRlZ29yeSxcblx0XHRcdFx0XHRlZGl0LmN1cnJlbnRLZXksXG5cdFx0XHRcdFx0ZWRpdC5jdXJyZW50SGlkZGVuXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGlmICghcmVzdWx0LmVycm9yKSB7XG5cdFx0XHRcdFx0Y2hhbmdlcysrO1xuXHRcdFx0XHRcdGlmICghZWRpdC5vcmlnaW5hbENhdGVnb3J5IHx8IGVkaXQub3JpZ2luYWxDYXRlZ29yeS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRcdGFkZGVkLnB1c2goZWRpdC5jdXJyZW50Q2F0ZWdvcnkpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRjaGFuZ2VkLnB1c2goe1xuXHRcdFx0XHRcdFx0XHRmcm9tOiBlZGl0Lm9yaWdpbmFsQ2F0ZWdvcnksXG5cdFx0XHRcdFx0XHRcdHRvOiBlZGl0LmN1cnJlbnRDYXRlZ29yeSxcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIGlmIChlcnJvciA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdCh7ZXJyb3J9ID0gcmVzdWx0KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChlZGl0LnN0YXRlID09PSBERUxFVEVEICYmIGVkaXQub3JpZ2luYWxDYXRlZ29yeSAmJiBlZGl0Lm9yaWdpbmFsQ2F0ZWdvcnkubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRyZXN1bHQgPSBjaGFuZ2VfY2F0ZWdvcnkocmVzdWx0LnRleHQsIGVkaXQub3JpZ2luYWxDYXRlZ29yeSwgbnVsbCwgbnVsbCwgZmFsc2UpO1xuXHRcdFx0XHRpZiAoIXJlc3VsdC5lcnJvcikge1xuXHRcdFx0XHRcdGNoYW5nZXMrKztcblx0XHRcdFx0XHRkZWxldGVkLnB1c2goZWRpdC5vcmlnaW5hbENhdGVnb3J5KTtcblx0XHRcdFx0fSBlbHNlIGlmIChlcnJvciA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdCh7ZXJyb3J9ID0gcmVzdWx0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoZXJyb3IgIT09IG51bGwpIHtcblx0XHRcdC8vIERvIG5vdCBjb21taXQgaWYgdGhlcmUgd2VyZSBlcnJvcnNcblx0XHRcdGFjdGlvbiA9IGNvbW1pdEZvcm0ud3BTYXZlO1xuXHRcdFx0aWYgKGFjdGlvbikge1xuXHRcdFx0XHRhY3Rpb24udmFsdWUgPSAnd3BEaWZmJztcblx0XHRcdFx0YWN0aW9uLm5hbWUgPSBhY3Rpb24udmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIEZpbGwgaW4gdGhlIGZvcm0gYW5kIHN1Ym1pdCBpdFxuXHRcdGNvbW1pdEZvcm0ud3BNaW5vcmVkaXQuY2hlY2tlZCA9IG1pbm9yRWRpdHM7XG5cdFx0Y29tbWl0Rm9ybS53cFdhdGNodGhpcy5jaGVja2VkID0gKCFjb25mLndnQXJ0aWNsZUlkICYmIHdhdGNoQ3JlYXRlKSB8fCB3YXRjaEVkaXQgfHwgcGFnZVdhdGNoZWQ7XG5cdFx0aWYgKGNvbmYud2dBcnRpY2xlSWQgfHwgISFzaW5nbGVFZGl0b3IpIHtcblx0XHRcdC8vIFByZXBhcmUgY2hhbmdlLXRhZyBzYXZlXG5cdFx0XHRpZiAoYWN0aW9uICYmIGFjdGlvbi52YWx1ZSA9PT0gJ3dwU2F2ZScpIHtcblx0XHRcdFx0aWYgKEhDLmNoYW5nZVRhZykge1xuXHRcdFx0XHRcdGNvbW1pdEZvcm0ud3BDaGFuZ2VUYWdzLnZhbHVlID0gSEMuY2hhbmdlVGFnO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb21taXRGb3JtLndwQXV0b1N1bW1hcnkudmFsdWUgPSBIQy5jaGFuZ2VUYWc7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY2hhbmdlcyA9PT0gMSkge1xuXHRcdFx0XHRpZiAocmVzdWx0LnN1bW1hcnkgJiYgcmVzdWx0LnN1bW1hcnkubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdGNvbW1pdEZvcm0ud3BTdW1tYXJ5LnZhbHVlID1cblx0XHRcdFx0XHRcdChIQy5jaGFuZ2VUYWcgPyAnJyA6IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXByZWZpeCcpKSArXG5cdFx0XHRcdFx0XHRyZXN1bHQuc3VtbWFyeS5qb2luKGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXNlcGFyYXRvcicpKSArXG5cdFx0XHRcdFx0XHQoSEMuY2hhbmdlVGFnID8gJycgOiBnZXRNZXNzYWdlKCdtZXNzYWdlcy11c2luZycpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb21taXRGb3JtLndwTWlub3JlZGl0LmNoZWNrZWQgPSBIQy5zaW5nbGVfbWlub3IgfHwgbWlub3JFZGl0cztcblx0XHRcdH0gZWxzZSBpZiAoY2hhbmdlcykge1xuXHRcdFx0XHRsZXQgc3VtbWFyeSA9IFtdO1xuXHRcdFx0XHRjb25zdCBzaG9ydFN1bW1hcnkgPSBbXTtcblx0XHRcdFx0Ly8gRGVsZXRlZFxuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgZGVsZXRlZC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdHN1bW1hcnkucHVzaChg4oiSJHtnZXRNZXNzYWdlKCdtZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnLCBkZWxldGVkW2ldKX1gKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGVsZXRlZC5sZW5ndGggPT09IDEpIHtcblx0XHRcdFx0XHRzaG9ydFN1bW1hcnkucHVzaChg4oiSJHtnZXRNZXNzYWdlKCdtZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnLCBkZWxldGVkWzBdKX1gKTtcblx0XHRcdFx0fSBlbHNlIGlmIChkZWxldGVkLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRzaG9ydFN1bW1hcnkucHVzaChg4oiSICR7bXVsdGlDaGFuZ2VNc2coZGVsZXRlZC5sZW5ndGgpfWApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIEFkZGVkXG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBhZGRlZC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdHN1bW1hcnkucHVzaChgKyR7Z2V0TWVzc2FnZSgnbWVzc2FnZXMtc2hvcnRfY2F0Y2hhbmdlJywgYWRkZWRbaV0pfWApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChhZGRlZC5sZW5ndGggPT09IDEpIHtcblx0XHRcdFx0XHRzaG9ydFN1bW1hcnkucHVzaChgKyR7Z2V0TWVzc2FnZSgnbWVzc2FnZXMtc2hvcnRfY2F0Y2hhbmdlJywgYWRkZWRbMF0pfWApO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGFkZGVkLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRzaG9ydFN1bW1hcnkucHVzaChgKyAke211bHRpQ2hhbmdlTXNnKGFkZGVkLmxlbmd0aCl9YCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gQ2hhbmdlZFxuXHRcdFx0XHRjb25zdCBhcnJvdyA9IGlzX3J0bCA/ICdcXHUyMTkwJyA6ICdcXHUyMTkyJzsgLy8gbGVmdCBhbmQgcmlnaHQgYXJyb3dzLiBEb24ndCB1c2Ug4oaQIGFuZCDihpIgaW4gdGhlIGNvZGUuXG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBjaGFuZ2VkLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKGNoYW5nZWRbaV0uZnJvbSA9PT0gY2hhbmdlZFtpXS50bykge1xuXHRcdFx0XHRcdFx0c3VtbWFyeS5wdXNoKGDCsSR7Z2V0TWVzc2FnZSgnbWVzc2FnZXMtc2hvcnRfY2F0Y2hhbmdlJywgY2hhbmdlZFtpXS5mcm9tKX1gKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0c3VtbWFyeS5wdXNoKFxuXHRcdFx0XHRcdFx0XHRgwrEke2dldE1lc3NhZ2UoJ21lc3NhZ2VzLXNob3J0X2NhdGNoYW5nZScsIGNoYW5nZWRbaV0uZnJvbSl9JHthcnJvd30ke2dldE1lc3NhZ2UoXG5cdFx0XHRcdFx0XHRcdFx0J21lc3NhZ2VzLXNob3J0X2NhdGNoYW5nZScsXG5cdFx0XHRcdFx0XHRcdFx0Y2hhbmdlZFtpXS50b1xuXHRcdFx0XHRcdFx0XHQpfWBcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChjaGFuZ2VkLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHRcdGlmIChjaGFuZ2VkWzBdLmZyb20gPT09IGNoYW5nZWRbMF0udG8pIHtcblx0XHRcdFx0XHRcdHNob3J0U3VtbWFyeS5wdXNoKGDCsSR7Z2V0TWVzc2FnZSgnbWVzc2FnZXMtc2hvcnRfY2F0Y2hhbmdlJywgY2hhbmdlZFswXS5mcm9tKX1gKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0c2hvcnRTdW1tYXJ5LnB1c2goXG5cdFx0XHRcdFx0XHRcdGDCsSR7Z2V0TWVzc2FnZSgnbWVzc2FnZXMtc2hvcnRfY2F0Y2hhbmdlJywgY2hhbmdlZFswXS5mcm9tKX0ke2Fycm93fSR7Z2V0TWVzc2FnZShcblx0XHRcdFx0XHRcdFx0XHQnbWVzc2FnZXMtc2hvcnRfY2F0Y2hhbmdlJyxcblx0XHRcdFx0XHRcdFx0XHRjaGFuZ2VkWzBdLnRvXG5cdFx0XHRcdFx0XHRcdCl9YFxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSBpZiAoY2hhbmdlZC5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0c2hvcnRTdW1tYXJ5LnB1c2goYMKxICR7bXVsdGlDaGFuZ2VNc2coY2hhbmdlZC5sZW5ndGgpfWApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChzdW1tYXJ5Lmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRzdW1tYXJ5ID0gc3VtbWFyeS5qb2luKGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXNlcGFyYXRvcicpKTtcblx0XHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0XHRzdW1tYXJ5Lmxlbmd0aCA+XG5cdFx0XHRcdFx0XHQyMDAgLVxuXHRcdFx0XHRcdFx0XHQoSEMuY2hhbmdlVGFnID8gJycgOiBnZXRNZXNzYWdlKCdtZXNzYWdlcy1wcmVmaXgnKSkubGVuZ3RoIC1cblx0XHRcdFx0XHRcdFx0KEhDLmNoYW5nZVRhZyA/ICcnIDogZ2V0TWVzc2FnZSgnbWVzc2FnZXMtdXNpbmcnKSkubGVuZ3RoXG5cdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHRzdW1tYXJ5ID0gc2hvcnRTdW1tYXJ5LmpvaW4oZ2V0TWVzc2FnZSgnbWVzc2FnZXMtc2VwYXJhdG9yJykpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjb21taXRGb3JtLndwU3VtbWFyeS52YWx1ZSA9XG5cdFx0XHRcdFx0XHQoSEMuY2hhbmdlVGFnID8gJycgOiBnZXRNZXNzYWdlKCdtZXNzYWdlcy1wcmVmaXgnKSkgK1xuXHRcdFx0XHRcdFx0c3VtbWFyeSArXG5cdFx0XHRcdFx0XHQoSEMuY2hhbmdlVGFnID8gJycgOiBnZXRNZXNzYWdlKCdtZXNzYWdlcy11c2luZycpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRjb21taXRGb3JtLndwVGV4dGJveDEudmFsdWUgPSByZXN1bHQudGV4dDtcblx0XHRjb21taXRGb3JtLndwU3RhcnR0aW1lLnZhbHVlID0gc2VydmVyVGltZSB8fCBjdXJyZW50VGltZXN0YW1wKCk7XG5cdFx0Y29tbWl0Rm9ybS53cEVkaXR0aW1lLnZhbHVlID0gcGFnZVRpbWUgfHwgY29tbWl0Rm9ybS53cFN0YXJ0dGltZS52YWx1ZTtcblx0XHRpZiAoc2VsZkVkaXRDb25mbGljdCkge1xuXHRcdFx0Y29tbWl0Rm9ybS5vbGRpZC52YWx1ZSA9IFN0cmluZyhwYWdlVGV4dFJldklkIHx8IGNvbmYud2dDdXJSZXZpc2lvbklkKTtcblx0XHR9XG5cdFx0Ly8gU3VibWl0IHRoZSBmb3JtIGluIGEgd2F5IHRoYXQgdHJpZ2dlcnMgb25zdWJtaXQgZXZlbnRzOiBjb21taXRGb3JtLnN1Ym1pdCgpIGRvZXNuJ3QuXG5cdFx0Y29tbWl0Rm9ybS5oY0NvbW1pdC5jbGljaygpO1xuXHR9O1xuXHRjb25zdCByZXNvbHZlT25lID0gKHBhZ2UsIHRvUmVzb2x2ZSkgPT4ge1xuXHRcdGNvbnN0IGNhdHMgPSBwYWdlLmNhdGVnb3JpZXM7XG5cdFx0Y29uc3Qge2xpbmtzfSA9IHBhZ2U7XG5cdFx0bGV0IGlzX2RhYiA9IGZhbHNlOyAvLyBIYXJkIHJlZGlyZWN0P1xuXHRcdGxldCBpc19yZWRpciA9IHR5cGVvZiBwYWdlLnJlZGlyZWN0ID09PSAnc3RyaW5nJztcblx0XHRsZXQgaTtcblx0XHRjb25zdCBpc19oaWRkZW4gPSBwYWdlLmNhdGVnb3J5aW5mbyAmJiB0eXBlb2YgcGFnZS5jYXRlZ29yeWluZm8uaGlkZGVuID09PSAnc3RyaW5nJztcblx0XHRjb25zdCBpc19taXNzaW5nID0gdHlwZW9mIHBhZ2UubWlzc2luZyA9PT0gJ3N0cmluZyc7XG5cdFx0Zm9yIChpID0gMDsgaSA8IHRvUmVzb2x2ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKGkgJiYgdG9SZXNvbHZlW2ldLmRhYklucHV0Q2xlYW5lZCAhPT0gcGFnZS50aXRsZS5zbGljZShNYXRoLm1heCgwLCBwYWdlLnRpdGxlLmluZGV4T2YoJzonKSArIDEpKSkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdC8vIE5vdGU6IHRoZSBzZXJ2ZXIgcmV0dXJucyBpbiBwYWdlIGFuIE5GQyBub3JtYWxpemVkIFVuaWNvZGUgdGl0bGUuIElmIG91ciBpbnB1dCB3YXMgbm90IE5GQyBub3JtYWxpemVkLCB3ZSBtYXkgbm90IGZpbmRcblx0XHRcdC8vIGFueSBlbnRyeSBoZXJlLiBJZiB3ZSBoYXZlIG9ubHkgb25lIGVkaXRvciB0byByZXNvbHZlICh0aGUgbW9zdCBjb21tb24gY2FzZSwgSSBwcmVzdW1lKSwgd2UgbWF5IHNpbXBseSBza2lwIHRoZSBjaGVjay5cblx0XHRcdHRvUmVzb2x2ZVtpXS5jdXJyZW50SGlkZGVuID0gaXNfaGlkZGVuO1xuXHRcdFx0dG9SZXNvbHZlW2ldLmlucHV0RXhpc3RzID0gIWlzX21pc3Npbmc7XG5cdFx0XHR0b1Jlc29sdmVbaV0uaWNvbi5zcmMgPSBpc19taXNzaW5nID8gSEMuZXhpc3RzTm8gOiBIQy5leGlzdHNZZXM7XG5cdFx0fVxuXHRcdGlmIChpc19taXNzaW5nKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmICghaXNfcmVkaXIgJiYgY2F0cyAmJiAoZ2V0TWVzc2FnZSgnZGlzYW1iaWdfY2F0ZWdvcnknKSB8fCBnZXRNZXNzYWdlKCdyZWRpcl9jYXRlZ29yeScpKSkge1xuXHRcdFx0Zm9yIChjb25zdCBjYXRfIG9mIGNhdHMpIHtcblx0XHRcdFx0bGV0IGNhdCA9IGNhdF8udGl0bGU7XG5cdFx0XHRcdC8vIFN0cmlwIG5hbWVzcGFjZSBwcmVmaXhcblx0XHRcdFx0aWYgKGNhdCkge1xuXHRcdFx0XHRcdGNhdCA9IGNhdC5zbGljZShNYXRoLm1heCgwLCBjYXQuaW5kZXhPZignOicpICsgMSkpLnJlcGxhY2UoL18vZywgJyAnKTtcblx0XHRcdFx0XHRpZiAoY2F0ID09PSBnZXRNZXNzYWdlKCdkaXNhbWJpZ19jYXRlZ29yeScpKSB7XG5cdFx0XHRcdFx0XHRpc19kYWIgPSB0cnVlO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChjYXQgPT09IGdldE1lc3NhZ2UoJ3JlZGlyX2NhdGVnb3J5JykpIHtcblx0XHRcdFx0XHRcdGlzX3JlZGlyID0gdHJ1ZTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoIWlzX3JlZGlyICYmICFpc19kYWIpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKCFsaW5rcyB8fCBsaW5rcy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgdGl0bGVzID0gW107XG5cdFx0Zm9yIChpID0gMDsgaSA8IGxpbmtzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdC8vIENhdGVnb3J5IG5hbWVzcGFjZSAtLSBhbHdheXMgdHJ1ZSBzaW5jZSB3ZSBhc2sgb25seSBmb3IgdGhlIGNhdGVnb3J5IGxpbmtzXG5cdFx0XHRcdGxpbmtzW2ldLm5zID09PSAxNCAmJlxuXHRcdFx0XHQvLyBOYW1lIG5vdCBlbXB0eVxuXHRcdFx0XHRsaW5rc1tpXS50aXRsZSAmJlxuXHRcdFx0XHRsaW5rc1tpXS50aXRsZS5sZW5ndGggPiAwXG5cdFx0XHQpIHtcblx0XHRcdFx0Ly8gSW50ZXJuYWwgbGluayB0byBleGlzdGluZyB0aGluZ3kuIEV4dHJhY3QgdGhlIHBhZ2UgbmFtZSBhbmQgcmVtb3ZlIHRoZSBuYW1lc3BhY2UuXG5cdFx0XHRcdGxldCBtYXRjaCA9IGxpbmtzW2ldLnRpdGxlO1xuXHRcdFx0XHRtYXRjaCA9IG1hdGNoLnNsaWNlKE1hdGgubWF4KDAsIG1hdGNoLmluZGV4T2YoJzonKSArIDEpKTtcblx0XHRcdFx0Ly8gRXhjbHVkZSBibGFja2xpc3RlZCBjYXRlZ29yaWVzLlxuXHRcdFx0XHRpZiAoIUhDLmJsYWNrbGlzdCB8fCAhSEMuYmxhY2tsaXN0LnRlc3QobWF0Y2gpKSB7XG5cdFx0XHRcdFx0dGl0bGVzLnB1c2gobWF0Y2gpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICh0aXRsZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGZvciAoaSA9IDA7IGkgPCB0b1Jlc29sdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChpICYmIHRvUmVzb2x2ZVtpXS5kYWJJbnB1dENsZWFuZWQgIT09IHBhZ2UudGl0bGUuc2xpY2UoTWF0aC5tYXgoMCwgcGFnZS50aXRsZS5pbmRleE9mKCc6JykgKyAxKSkpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHR0b1Jlc29sdmVbaV0uaW5wdXRFeGlzdHMgPSB0cnVlOyAvLyBNaWdodCBhY3R1YWxseSBiZSB3cm9uZyBpZiBpdCdzIGEgcmVkaXJlY3QgcG9pbnRpbmcgdG8gYSBub24tZXhpc3RpbmcgY2F0ZWdvcnlcblx0XHRcdHRvUmVzb2x2ZVtpXS5pY29uLnNyYyA9IEhDLmV4aXN0c1llcztcblx0XHRcdGlmICh0aXRsZXMubGVuZ3RoID4gMSkge1xuXHRcdFx0XHR0b1Jlc29sdmVbaV0uZGFiID0gdGl0bGVzO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dG9SZXNvbHZlW2ldLnRleHQudmFsdWUgPVxuXHRcdFx0XHRcdHRpdGxlc1swXSArICh0b1Jlc29sdmVbaV0uY3VycmVudEtleSA9PT0gbnVsbCA/ICcnIDogYHwke3RvUmVzb2x2ZVtpXS5jdXJyZW50S2V5fWApO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0Y29uc3QgcmVzb2x2ZVJlZGlyZWN0cyA9ICh0b1Jlc29sdmUsIHBhcmFtcykgPT4ge1xuXHRcdGlmICghcGFyYW1zIHx8ICFwYXJhbXMucXVlcnkgfHwgIXBhcmFtcy5xdWVyeS5wYWdlcykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRmb3IgKGNvbnN0IHAgaW4gcGFyYW1zLnF1ZXJ5LnBhZ2VzKSB7XG5cdFx0XHRpZiAoIU9iamVjdC5oYXNPd24ocGFyYW1zLnF1ZXJ5LnBhZ2VzLCBwKSkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdHJlc29sdmVPbmUocGFyYW1zLnF1ZXJ5LnBhZ2VzW3BdLCB0b1Jlc29sdmUpO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgcmVzb2x2ZU11bHRpID0gKHRvUmVzb2x2ZSwgY2FsbGJhY2spID0+IHtcblx0XHRsZXQgaTtcblx0XHRmb3IgKGkgPSAwOyBpIDwgdG9SZXNvbHZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR0b1Jlc29sdmVbaV0uZGFiID0gbnVsbDtcblx0XHRcdHRvUmVzb2x2ZVtpXS5kYWJJbnB1dCA9IHRvUmVzb2x2ZVtpXS5sYXN0SW5wdXQ7XG5cdFx0fVxuXHRcdGlmIChub1N1Z2dlc3Rpb25zKSB7XG5cdFx0XHRjYWxsYmFjayh0b1Jlc29sdmUpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdHByb3A6ICdpbmZvfGxpbmtzfGNhdGVnb3JpZXN8Y2F0ZWdvcnlpbmZvJyxcblx0XHRcdHBsbmFtZXNwYWNlOiAnMTQnLFxuXHRcdFx0cGxsaW1pdDogdG9SZXNvbHZlLmxlbmd0aCAqIDEwLFxuXHRcdFx0Y2xsaW1pdDogdG9SZXNvbHZlLmxlbmd0aCAqIDEwLFxuXHRcdH07XG5cdFx0Y29uc3QgdGl0bGVzID0gW107XG5cdFx0Zm9yIChpID0gMDsgaSA8IHRvUmVzb2x2ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGV0IHYgPSB0b1Jlc29sdmVbaV0uZGFiSW5wdXQ7XG5cdFx0XHR2ID0gcmVwbGFjZVNob3J0Y3V0cyh2LCBIQy5zaG9ydGN1dHMpO1xuXHRcdFx0dG9SZXNvbHZlW2ldLmRhYklucHV0Q2xlYW5lZCA9IHY7XG5cdFx0XHR0aXRsZXMucHVzaChgQ2F0ZWdvcnk6JHt2fWApO1xuXHRcdH1cblx0XHRwYXJhbXMudGl0bGVzID0gdGl0bGVzLmpvaW4oJ3wnKTtcblx0XHRhcGkuZ2V0KHBhcmFtcylcblx0XHRcdC5kb25lKChqc29uKSA9PiB7XG5cdFx0XHRcdHJlc29sdmVSZWRpcmVjdHModG9SZXNvbHZlLCBqc29uKTtcblx0XHRcdFx0Y2FsbGJhY2sodG9SZXNvbHZlKTtcblx0XHRcdH0pXG5cdFx0XHQuZmFpbCgocmVxKSA9PiB7XG5cdFx0XHRcdGlmICghcmVxKSB7XG5cdFx0XHRcdFx0bm9TdWdnZXN0aW9ucyA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2FsbGJhY2sodG9SZXNvbHZlKTtcblx0XHRcdH0pO1xuXHR9O1xuXHRjb25zdCBtYWtlQWN0aXZlID0gKHdoaWNoKSA9PiB7XG5cdFx0aWYgKHdoaWNoLmlzX2FjdGl2ZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRmb3IgKGNvbnN0IGVkaXRvciBvZiBlZGl0b3JzKSB7XG5cdFx0XHRpZiAoZWRpdG9yICE9PSB3aGljaCkge1xuXHRcdFx0XHRlZGl0b3IuaW5hY3RpdmF0ZSgpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHR3aGljaC5pc19hY3RpdmUgPSB0cnVlO1xuXHRcdGlmICh3aGljaC5kYWIpIHtcblx0XHRcdHNob3dEYWIod2hpY2gpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBDaGVjayBmb3IgcHJvZ3JhbW1hdGljIHZhbHVlIGNoYW5nZXMuXG5cdFx0XHRjb25zdCBleHBlY3RlZElucHV0ID0gd2hpY2gubGFzdFJlYWxJbnB1dCB8fCB3aGljaC5sYXN0SW5wdXQgfHwgJyc7XG5cdFx0XHRjb25zdCBhY3R1YWxWYWx1ZSA9IHdoaWNoLnRleHQudmFsdWUgfHwgJyc7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdChleHBlY3RlZElucHV0Lmxlbmd0aCA9PT0gMCAmJiBhY3R1YWxWYWx1ZS5sZW5ndGggPiAwKSB8fFxuXHRcdFx0XHQoZXhwZWN0ZWRJbnB1dC5sZW5ndGggPiAwICYmIGFjdHVhbFZhbHVlLmluZGV4T2YoZXhwZWN0ZWRJbnB1dCkpXG5cdFx0XHQpIHtcblx0XHRcdFx0Ly8gU29tZWhvdyB0aGUgZmllbGQncyB2YWx1ZSBhcHBlYXJzIHRvIGhhdmUgY2hhbmdlZCwgYW5kIHdoaWNoLmxhc3RTZWxlY3Rpb24gdGhlcmVmb3JlIGlzIG5vIGxvbmdlciB2YWxpZC4gVHJ5IHRvIHNldCB0aGVcblx0XHRcdFx0Ly8gY3Vyc29yIGF0IHRoZSBlbmQgb2YgdGhlIGNhdGVnb3J5LCBhbmQgZG8gbm90IGRpc3BsYXkgdGhlIG9sZCBzdWdnZXN0aW9uIGxpc3QuXG5cdFx0XHRcdHdoaWNoLnNob3dzTGlzdCA9IGZhbHNlO1xuXHRcdFx0XHRjb25zdCB2ID0gYWN0dWFsVmFsdWUuc3BsaXQoJ3wnKTtcblx0XHRcdFx0W3doaWNoLmxhc3RJbnB1dF0gPSB2O1xuXHRcdFx0XHR3aGljaC5sYXN0UmVhbElucHV0ID0gd2hpY2gubGFzdElucHV0O1xuXHRcdFx0XHRpZiAodi5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdFx0Wywgd2hpY2guY3VycmVudEtleV0gPSB2O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh3aGljaC5sYXN0U2VsZWN0aW9uKSB7XG5cdFx0XHRcdFx0d2hpY2gubGFzdFNlbGVjdGlvbiA9IHtcblx0XHRcdFx0XHRcdHN0YXJ0OiB2WzBdLmxlbmd0aCxcblx0XHRcdFx0XHRcdGVuZDogdlswXS5sZW5ndGgsXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKHdoaWNoLnNob3dzTGlzdCkge1xuXHRcdFx0XHR3aGljaC5kaXNwbGF5TGlzdCgpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHdoaWNoLmxhc3RTZWxlY3Rpb24pIHtcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0d2hpY2guc2V0U2VsZWN0aW9uKHdoaWNoLmxhc3RTZWxlY3Rpb24uc3RhcnQsIHdoaWNoLmxhc3RTZWxlY3Rpb24uZW5kKTtcblx0XHRcdFx0fSwgMCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBzaG93RGFiID0gKHdoaWNoKSA9PiB7XG5cdFx0aWYgKHdoaWNoLmlzX2FjdGl2ZSkge1xuXHRcdFx0d2hpY2guc2hvd1N1Z2dlc3Rpb25zKHdoaWNoLmRhYiwgZmFsc2UsIG51bGwsIG51bGwpOyAvLyBkbyBhdXRvY29tcGxldGlvbiwgbm8ga2V5LCBubyBlbmdpbmUgc2VsZWN0b3Jcblx0XHRcdHdoaWNoLmRhYiA9IG51bGw7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG1ha2VBY3RpdmUod2hpY2gpO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgbXVsdGlTdWJtaXQgPSAoKSA9PiB7XG5cdFx0Y29uc3QgdG9SZXNvbHZlID0gW107XG5cdFx0Zm9yIChjb25zdCBlZGl0b3Igb2YgZWRpdG9ycykge1xuXHRcdFx0aWYgKGVkaXRvci5zdGF0ZSA9PT0gQ0hBTkdFX1BFTkRJTkcgfHwgZWRpdG9yLnN0YXRlID09PSBPUEVOKSB7XG5cdFx0XHRcdHRvUmVzb2x2ZS5wdXNoKGVkaXRvcik7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICh0b1Jlc29sdmUubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRpbml0aWF0ZUVkaXQoXG5cdFx0XHRcdChmYWlsdXJlKSA9PiB7XG5cdFx0XHRcdFx0cGVyZm9ybUNoYW5nZXMoZmFpbHVyZSk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdChtc2cpID0+IHtcblx0XHRcdFx0XHRtdy5ub3RpZnkobXNnLCB7dGFnOiAnaG90Q2F0J30pO1xuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRyZXNvbHZlTXVsdGkodG9SZXNvbHZlLCAocmVzb2x2ZWQpID0+IHtcblx0XHRcdGxldCBmaXJzdERhYiA9IG51bGw7XG5cdFx0XHRsZXQgZG9udENoYW5nZSA9IGZhbHNlO1xuXHRcdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mIHJlc29sdmVkKSB7XG5cdFx0XHRcdGlmIChlbGVtZW50Lmxhc3RJbnB1dCA9PT0gZWxlbWVudC5kYWJJbnB1dCkge1xuXHRcdFx0XHRcdGlmIChlbGVtZW50LmRhYikge1xuXHRcdFx0XHRcdFx0aWYgKCFmaXJzdERhYikge1xuXHRcdFx0XHRcdFx0XHRmaXJzdERhYiA9IGVsZW1lbnQ7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChlbGVtZW50LmFjY2VwdENoZWNrKHRydWUpKSB7XG5cdFx0XHRcdFx0XHRlbGVtZW50LmNvbW1pdCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBXZSBkaWRuJ3QgZGlzYWJsZSBhbGwgdGhlIG9wZW4gZWRpdG9ycywgYnV0IHdlIGRpZCBhc3luY2hyb25vdXMgY2FsbHMuIEl0IGlzXG5cdFx0XHRcdFx0Ly8gdGhlb3JldGljYWxseSBwb3NzaWJsZSB0aGF0IHRoZSB1c2VyIGNoYW5nZWQgc29tZXRoaW5nLi4uXG5cdFx0XHRcdFx0ZG9udENoYW5nZSA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChmaXJzdERhYikge1xuXHRcdFx0XHRzaG93RGFiKGZpcnN0RGFiKTtcblx0XHRcdH0gZWxzZSBpZiAoIWRvbnRDaGFuZ2UpIHtcblx0XHRcdFx0aW5pdGlhdGVFZGl0KFxuXHRcdFx0XHRcdChmYWlsdXJlKSA9PiB7XG5cdFx0XHRcdFx0XHRwZXJmb3JtQ2hhbmdlcyhmYWlsdXJlKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdChtc2cpID0+IHtcblx0XHRcdFx0XHRcdG13Lm5vdGlmeShtc2csIHt0YWc6ICdob3RDYXQnfSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9O1xuXHRjb25zdCBzZXRNdWx0aUlucHV0ID0gKCkgPT4ge1xuXHRcdGlmIChjb21taXRCdXR0b24gfHwgb25VcGxvYWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29tbWl0QnV0dG9uID0gbWFrZSgnaW5wdXQnKTtcblx0XHRjb21taXRCdXR0b24udHlwZSA9ICdidXR0b24nO1xuXHRcdGNvbW1pdEJ1dHRvbi52YWx1ZSA9IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLWNvbW1pdCcpO1xuXHRcdGNvbW1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG11bHRpU3VibWl0KTtcblx0XHRpZiAobXVsdGlTcGFuKSB7XG5cdFx0XHRtdWx0aVNwYW4ucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoY29tbWl0QnV0dG9uLCBtdWx0aVNwYW4pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjYXRMaW5lLmFwcGVuZChjb21taXRCdXR0b24pO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgY2hlY2tNdWx0aUlucHV0ID0gKCkgPT4ge1xuXHRcdGlmICghY29tbWl0QnV0dG9uKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGxldCBoYXNDaGFuZ2VzID0gZmFsc2U7XG5cdFx0Zm9yIChjb25zdCBlZGl0b3Igb2YgZWRpdG9ycykge1xuXHRcdFx0aWYgKGVkaXRvci5zdGF0ZSAhPT0gVU5DSEFOR0VEKSB7XG5cdFx0XHRcdGhhc0NoYW5nZXMgPSB0cnVlO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0Y29tbWl0QnV0dG9uLmRpc2FibGVkID0gIWhhc0NoYW5nZXM7XG5cdH07XG5cdGNvbnN0IHN1Z2dlc3Rpb25FbmdpbmVzID0ge1xuXHRcdG9wZW5zZWFyY2g6IHtcblx0XHRcdHVyaTogYCR7bXcuY29uZmlnLmdldChcblx0XHRcdFx0J3dnU2NyaXB0UGF0aCdcblx0XHRcdCl9L2FwaS5waHA/Zm9ybWF0PWpzb24mYWN0aW9uPW9wZW5zZWFyY2gmbmFtZXNwYWNlPTE0JmxpbWl0PTMwJnNlYXJjaD1DYXRlZ29yeTokMWAsXG5cdFx0XHQvLyAkMSA9IHNlYXJjaCB0ZXJtXG5cdFx0XHQvLyBGdW5jdGlvbiB0byBjb252ZXJ0IHJlc3VsdCBvZiB1cmkgaW50byBhbiBhcnJheSBvZiBjYXRlZ29yeSBuYW1lc1xuXHRcdFx0aGFuZGxlcjogKHF1ZXJ5UmVzdWx0LCBxdWVyeUtleSkgPT4ge1xuXHRcdFx0XHRpZiAocXVlcnlSZXN1bHQgJiYgcXVlcnlSZXN1bHQubGVuZ3RoID49IDIpIHtcblx0XHRcdFx0XHRjb25zdCBrZXkgPSBxdWVyeVJlc3VsdFswXS5zbGljZShNYXRoLm1heCgwLCBxdWVyeVJlc3VsdFswXS5pbmRleE9mKCc6JykgKyAxKSk7XG5cdFx0XHRcdFx0Y29uc3QgWywgdGl0bGVzXSA9IHF1ZXJ5UmVzdWx0O1xuXHRcdFx0XHRcdGxldCBleGlzdHMgPSBmYWxzZTtcblx0XHRcdFx0XHRpZiAoIWNhdF9wcmVmaXgpIHtcblx0XHRcdFx0XHRcdGNhdF9wcmVmaXggPSBuZXcgUmVnRXhwKGBeKCR7SEMuY2F0ZWdvcnlfcmVnZXhwfSk6YCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGl0bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRjYXRfcHJlZml4Lmxhc3RJbmRleCA9IDA7XG5cdFx0XHRcdFx0XHRjb25zdCBtID0gY2F0X3ByZWZpeC5leGVjKHRpdGxlc1tpXSk7XG5cdFx0XHRcdFx0XHRpZiAobSAmJiBtLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0XHRcdFx0dGl0bGVzW2ldID0gdGl0bGVzW2ldLnNsaWNlKE1hdGgubWF4KDAsIHRpdGxlc1tpXS5pbmRleE9mKCc6JykgKyAxKSk7IC8vIHJtIG5hbWVzcGFjZVxuXHRcdFx0XHRcdFx0XHRpZiAoa2V5ID09PSB0aXRsZXNbaV0pIHtcblx0XHRcdFx0XHRcdFx0XHRleGlzdHMgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR0aXRsZXMuc3BsaWNlKGksIDEpOyAvLyBOb3BlLCBpdCdzIG5vdCBhIGNhdGVnb3J5IGFmdGVyIGFsbC5cblx0XHRcdFx0XHRcdFx0aS0tO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aXRsZXMuZXhpc3RzID0gZXhpc3RzO1xuXHRcdFx0XHRcdGlmIChxdWVyeUtleSAhPT0ga2V5KSB7XG5cdFx0XHRcdFx0XHR0aXRsZXMubm9ybWFsaXplZCA9IGtleTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gUmVtZW1iZXIgdGhlIE5GQyBub3JtYWxpemVkIGtleSB3ZSBnb3QgYmFjayBmcm9tIHRoZSBzZXJ2ZXJcblx0XHRcdFx0XHRyZXR1cm4gdGl0bGVzO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fSxcblx0XHR9LFxuXHRcdGludGVybmFsc2VhcmNoOiB7XG5cdFx0XHR1cmk6IGAke213LmNvbmZpZy5nZXQoXG5cdFx0XHRcdCd3Z1NjcmlwdFBhdGgnXG5cdFx0XHQpfS9hcGkucGhwP2Zvcm1hdD1qc29uJmFjdGlvbj1xdWVyeSZsaXN0PWFsbHBhZ2VzJmFwbmFtZXNwYWNlPTE0JmFwbGltaXQ9MzAmYXBmcm9tPSQxJmFwcHJlZml4PSQxYCxcblx0XHRcdGhhbmRsZXI6IChxdWVyeVJlc3VsdCkgPT4ge1xuXHRcdFx0XHRpZiAocXVlcnlSZXN1bHQgJiYgcXVlcnlSZXN1bHQucXVlcnkgJiYgcXVlcnlSZXN1bHQucXVlcnkuYWxscGFnZXMpIHtcblx0XHRcdFx0XHRjb25zdCB0aXRsZXMgPSBxdWVyeVJlc3VsdC5xdWVyeS5hbGxwYWdlcztcblx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRpdGxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0dGl0bGVzW2ldID0gdGl0bGVzW2ldLnRpdGxlLnNsaWNlKE1hdGgubWF4KDAsIHRpdGxlc1tpXS50aXRsZS5pbmRleE9mKCc6JykgKyAxKSk7XG5cdFx0XHRcdFx0fSAvLyBybSBuYW1lc3BhY2Vcblx0XHRcdFx0XHRyZXR1cm4gdGl0bGVzO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fSxcblx0XHR9LFxuXHRcdGV4aXN0czoge1xuXHRcdFx0dXJpOiBgJHttdy5jb25maWcuZ2V0KCd3Z1NjcmlwdFBhdGgnKX0vYXBpLnBocD9mb3JtYXQ9anNvbiZhY3Rpb249cXVlcnkmcHJvcD1pbmZvJnRpdGxlcz1DYXRlZ29yeTokMWAsXG5cdFx0XHRoYW5kbGVyOiAocXVlcnlSZXN1bHQsIHF1ZXJ5S2V5KSA9PiB7XG5cdFx0XHRcdGlmIChxdWVyeVJlc3VsdCAmJiBxdWVyeVJlc3VsdC5xdWVyeSAmJiBxdWVyeVJlc3VsdC5xdWVyeS5wYWdlcyAmJiAhcXVlcnlSZXN1bHQucXVlcnkucGFnZXNbLTFdKSB7XG5cdFx0XHRcdFx0Ly8gU2hvdWxkIGhhdmUgZXhhY3RseSAxXG5cdFx0XHRcdFx0Zm9yIChjb25zdCBwIGluIHF1ZXJ5UmVzdWx0LnF1ZXJ5LnBhZ2VzKSB7XG5cdFx0XHRcdFx0XHRpZiAoIU9iamVjdC5oYXNPd24ocXVlcnlSZXN1bHQucXVlcnkucGFnZXMsIHApKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0bGV0IF90aXRsZSA9IHF1ZXJ5UmVzdWx0LnF1ZXJ5LnBhZ2VzW3BdLnRpdGxlO1xuXHRcdFx0XHRcdFx0X3RpdGxlID0gX3RpdGxlLnNsaWNlKE1hdGgubWF4KDAsIF90aXRsZS5pbmRleE9mKCc6JykgKyAxKSk7XG5cdFx0XHRcdFx0XHRjb25zdCB0aXRsZXMgPSBbX3RpdGxlXTtcblx0XHRcdFx0XHRcdHRpdGxlcy5leGlzdHMgPSB0cnVlO1xuXHRcdFx0XHRcdFx0aWYgKHF1ZXJ5S2V5ICE9PSBfdGl0bGUpIHtcblx0XHRcdFx0XHRcdFx0dGl0bGVzLm5vcm1hbGl6ZWQgPSBfdGl0bGU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvLyBORkNcblx0XHRcdFx0XHRcdHJldHVybiB0aXRsZXM7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fSxcblx0XHR9LFxuXHRcdHN1YmNhdGVnb3JpZXM6IHtcblx0XHRcdHVyaTogYCR7bXcuY29uZmlnLmdldChcblx0XHRcdFx0J3dnU2NyaXB0UGF0aCdcblx0XHRcdCl9L2FwaS5waHA/Zm9ybWF0PWpzb24mYWN0aW9uPXF1ZXJ5Jmxpc3Q9Y2F0ZWdvcnltZW1iZXJzJmNtdHlwZT1zdWJjYXQmY21saW1pdD1tYXgmY210aXRsZT1DYXRlZ29yeTokMWAsXG5cdFx0XHRoYW5kbGVyOiAocXVlcnlSZXN1bHQpID0+IHtcblx0XHRcdFx0aWYgKHF1ZXJ5UmVzdWx0ICYmIHF1ZXJ5UmVzdWx0LnF1ZXJ5ICYmIHF1ZXJ5UmVzdWx0LnF1ZXJ5LmNhdGVnb3J5bWVtYmVycykge1xuXHRcdFx0XHRcdGNvbnN0IHRpdGxlcyA9IHF1ZXJ5UmVzdWx0LnF1ZXJ5LmNhdGVnb3J5bWVtYmVycztcblx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRpdGxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0dGl0bGVzW2ldID0gdGl0bGVzW2ldLnRpdGxlLnNsaWNlKE1hdGgubWF4KDAsIHRpdGxlc1tpXS50aXRsZS5pbmRleE9mKCc6JykgKyAxKSk7XG5cdFx0XHRcdFx0fSAvLyBybSBuYW1lc3BhY2Vcblx0XHRcdFx0XHRyZXR1cm4gdGl0bGVzO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fSxcblx0XHR9LFxuXHRcdHBhcmVudGNhdGVnb3JpZXM6IHtcblx0XHRcdHVyaTogYCR7bXcuY29uZmlnLmdldChcblx0XHRcdFx0J3dnU2NyaXB0UGF0aCdcblx0XHRcdCl9L2FwaS5waHA/Zm9ybWF0PWpzb24mYWN0aW9uPXF1ZXJ5JnByb3A9Y2F0ZWdvcmllcyZ0aXRsZXM9Q2F0ZWdvcnk6JDEmY2xsaW1pdD1tYXhgLFxuXHRcdFx0aGFuZGxlcjogKHF1ZXJ5UmVzdWx0KSA9PiB7XG5cdFx0XHRcdGlmIChxdWVyeVJlc3VsdCAmJiBxdWVyeVJlc3VsdC5xdWVyeSAmJiBxdWVyeVJlc3VsdC5xdWVyeS5wYWdlcykge1xuXHRcdFx0XHRcdGZvciAoY29uc3QgcCBpbiBxdWVyeVJlc3VsdC5xdWVyeS5wYWdlcykge1xuXHRcdFx0XHRcdFx0aWYgKHF1ZXJ5UmVzdWx0LnF1ZXJ5LnBhZ2VzW3BdLmNhdGVnb3JpZXMpIHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgdGl0bGVzID0gcXVlcnlSZXN1bHQucXVlcnkucGFnZXNbcF0uY2F0ZWdvcmllcztcblx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aXRsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdFx0XHR0aXRsZXNbaV0gPSB0aXRsZXNbaV0udGl0bGUuc2xpY2UoTWF0aC5tYXgoMCwgdGl0bGVzW2ldLnRpdGxlLmluZGV4T2YoJzonKSArIDEpKTtcblx0XHRcdFx0XHRcdFx0fSAvLyBybSBuYW1lc3BhY2Vcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRpdGxlcztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9LFxuXHRcdH0sXG5cdH07XG5cdGNvbnN0IHN1Z2dlc3Rpb25Db25maWdzID0ge1xuXHRcdHNlYXJjaGluZGV4OiB7XG5cdFx0XHRuYW1lOiAnU2VhcmNoIGluZGV4Jyxcblx0XHRcdGVuZ2luZXM6IFsnb3BlbnNlYXJjaCddLFxuXHRcdFx0Y2FjaGU6IHt9LFxuXHRcdFx0c2hvdzogdHJ1ZSxcblx0XHRcdHRlbXA6IGZhbHNlLFxuXHRcdFx0bm9Db21wbGV0aW9uOiBmYWxzZSxcblx0XHR9LFxuXHRcdHBhZ2VsaXN0OiB7XG5cdFx0XHRuYW1lOiAnUGFnZSBsaXN0Jyxcblx0XHRcdGVuZ2luZXM6IFsnaW50ZXJuYWxzZWFyY2gnLCAnZXhpc3RzJ10sXG5cdFx0XHRjYWNoZToge30sXG5cdFx0XHRzaG93OiB0cnVlLFxuXHRcdFx0dGVtcDogZmFsc2UsXG5cdFx0XHRub0NvbXBsZXRpb246IGZhbHNlLFxuXHRcdH0sXG5cdFx0Y29tYmluZWQ6IHtcblx0XHRcdG5hbWU6ICdDb21iaW5lZCBzZWFyY2gnLFxuXHRcdFx0ZW5naW5lczogWydvcGVuc2VhcmNoJywgJ2ludGVybmFsc2VhcmNoJ10sXG5cdFx0XHRjYWNoZToge30sXG5cdFx0XHRzaG93OiB0cnVlLFxuXHRcdFx0dGVtcDogZmFsc2UsXG5cdFx0XHRub0NvbXBsZXRpb246IGZhbHNlLFxuXHRcdH0sXG5cdFx0c3ViY2F0OiB7XG5cdFx0XHRuYW1lOiAnU3ViY2F0ZWdvcmllcycsXG5cdFx0XHRlbmdpbmVzOiBbJ3N1YmNhdGVnb3JpZXMnXSxcblx0XHRcdGNhY2hlOiB7fSxcblx0XHRcdHNob3c6IHRydWUsXG5cdFx0XHR0ZW1wOiB0cnVlLFxuXHRcdFx0bm9Db21wbGV0aW9uOiB0cnVlLFxuXHRcdH0sXG5cdFx0cGFyZW50Y2F0OiB7XG5cdFx0XHRuYW1lOiAnUGFyZW50IGNhdGVnb3JpZXMnLFxuXHRcdFx0ZW5naW5lczogWydwYXJlbnRjYXRlZ29yaWVzJ10sXG5cdFx0XHRjYWNoZToge30sXG5cdFx0XHRzaG93OiB0cnVlLFxuXHRcdFx0dGVtcDogdHJ1ZSxcblx0XHRcdG5vQ29tcGxldGlvbjogdHJ1ZSxcblx0XHR9LFxuXHR9O1xuXHQvLyBFdmVudCBrZXlDb2RlcyB0aGF0IHdlIGhhbmRsZSBpbiB0aGUgdGV4dCBpbnB1dCBmaWVsZC9zdWdnZXN0aW9uIGxpc3QuXG5cdGNvbnN0IEJTID0gODtcblx0Y29uc3QgVEFCID0gOTtcblx0Y29uc3QgUkVUID0gMTM7XG5cdGNvbnN0IEVTQyA9IDI3O1xuXHRjb25zdCBTUEFDRSA9IDMyO1xuXHRjb25zdCBQR1VQID0gMzM7XG5cdGNvbnN0IFBHRE9XTiA9IDM0O1xuXHRjb25zdCBVUCA9IDM4O1xuXHRjb25zdCBET1dOID0gNDA7XG5cdGNvbnN0IERFTCA9IDQ2O1xuXHRjb25zdCBJTUUgPSAyMjk7XG5cdGNsYXNzIENhdGVnb3J5RWRpdG9yIHtcblx0XHRjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG5cdFx0XHR0aGlzLmluaXRpYWxpemUoLi4uYXJncyk7XG5cdFx0fVxuXHRcdGluaXRpYWxpemUobGluZSwgc3BhbiwgYWZ0ZXIsIGtleSwgaXNfaGlkZGVuKSB7XG5cdFx0XHQvLyBJZiBhIHNwYW4gaXMgZ2l2ZW4sICdhZnRlcicgaXMgdGhlIGNhdGVnb3J5IHRpdGxlLCBvdGhlcndpc2UgaXQgbWF5IGJlIGFuIGVsZW1lbnQgYWZ0ZXIgd2hpY2ggdG9cblx0XHRcdC8vIGluc2VydCB0aGUgbmV3IHNwYW4uICdrZXknIGlzIGxpa2V3aXNlIG92ZXJsb2FkZWQ7IGlmIGEgc3BhbiBpcyBnaXZlbiwgaXQgaXMgdGhlIGNhdGVnb3J5IGtleSAoaWZcblx0XHRcdC8vIGtub3duKSwgb3RoZXJ3aXNlIGl0IGlzIGEgYm9vbGVhbiBpbmRpY2F0aW5nIHdoZXRoZXIgYSBiYXIgc2hhbGwgYmUgcHJlcGVuZGVkLlxuXHRcdFx0aWYgKHNwYW4pIHtcblx0XHRcdFx0aWYgKGlzX3J0bCkge1xuXHRcdFx0XHRcdHNwYW4uZGlyID0gJ3J0bCc7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5pc0FkZENhdGVnb3J5ID0gZmFsc2U7XG5cdFx0XHRcdHRoaXMuY2F0TGluayA9IHNwYW4uZmlyc3RDaGlsZDtcblx0XHRcdFx0dGhpcy5vcmlnaW5hbENhdGVnb3J5ID0gYWZ0ZXI7XG5cdFx0XHRcdHRoaXMub3JpZ2luYWxLZXkgPSBrZXkgJiYga2V5Lmxlbmd0aCA+IDEgPyBrZXkuc2xpY2UoMSkgOiBudWxsOyAvLyA+IDEgYmVjYXVzZSBpdCBpbmNsdWRlcyB0aGUgbGVhZGluZyBiYXJcblx0XHRcdFx0dGhpcy5vcmlnaW5hbEV4aXN0cyA9ICFoYXNDbGFzcyh0aGlzLmNhdExpbmssICduZXcnKTtcblx0XHRcdFx0Ly8gQ3JlYXRlIGNoYW5nZSBhbmQgZGVsIGxpbmtzXG5cdFx0XHRcdHRoaXMubWFrZUxpbmtTcGFuKCk7XG5cdFx0XHRcdGlmICghdGhpcy5vcmlnaW5hbEV4aXN0cyAmJiB0aGlzLnVwRG93bkxpbmtzKSB7XG5cdFx0XHRcdFx0dGhpcy51cERvd25MaW5rcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHNwYW4uYXBwZW5kKHRoaXMubGlua1NwYW4pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5pc0FkZENhdGVnb3J5ID0gdHJ1ZTtcblx0XHRcdFx0Ly8gQ3JlYXRlIGFkZCBzcGFuIGFuZCBhcHBlbmQgdG8gY2F0TGlua3Ncblx0XHRcdFx0dGhpcy5vcmlnaW5hbENhdGVnb3J5ID0gJyc7XG5cdFx0XHRcdHRoaXMub3JpZ2luYWxLZXkgPSBudWxsO1xuXHRcdFx0XHR0aGlzLm9yaWdpbmFsRXhpc3RzID0gZmFsc2U7XG5cdFx0XHRcdGlmICghbmV3RE9NKSB7XG5cdFx0XHRcdFx0c3BhbiA9IG1ha2UoJ3NwYW4nKTtcblx0XHRcdFx0XHRzcGFuLmNsYXNzTmFtZSA9ICdub3ByaW50Jztcblx0XHRcdFx0XHRpZiAoa2V5KSB7XG5cdFx0XHRcdFx0XHRzcGFuLmFwcGVuZChtYWtlKCcgfCAnLCB0cnVlKSk7XG5cdFx0XHRcdFx0XHRpZiAoYWZ0ZXIpIHtcblx0XHRcdFx0XHRcdFx0YWZ0ZXIucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc3BhbiwgYWZ0ZXIubmV4dFNpYmxpbmcpO1xuXHRcdFx0XHRcdFx0XHRhZnRlciA9IGFmdGVyLm5leHRTaWJsaW5nO1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChsaW5lKSB7XG5cdFx0XHRcdFx0XHRcdGxpbmUuYXBwZW5kKHNwYW4pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSBpZiAobGluZSAmJiBsaW5lLmZpcnN0Q2hpbGQpIHtcblx0XHRcdFx0XHRcdHNwYW4uYXBwZW5kKG1ha2UoJyAnLCB0cnVlKSk7XG5cdFx0XHRcdFx0XHRsaW5lLmFwcGVuZChzcGFuKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5saW5rU3BhbiA9IG1ha2UoJ3NwYW4nKTtcblx0XHRcdFx0dGhpcy5saW5rU3Bhbi5jbGFzc05hbWUgPSAnbm9wcmludCBub3BvcHVwcyBob3RjYXRsaW5rJztcblx0XHRcdFx0Y29uc3QgbGluayA9IG1ha2UoJ2EnKTtcblx0XHRcdFx0bGluay5ocmVmID0gJyNjYXRsaW5rcyc7XG5cdFx0XHRcdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9wZW4uYmluZCh0aGlzKSk7XG5cdFx0XHRcdGxpbmsuYXBwZW5kKG1ha2UoSEMubGlua3MuYWRkLCB0cnVlKSk7XG5cdFx0XHRcdGxpbmsudGl0bGUgPSBnZXRNZXNzYWdlKCd0b29sdGlwcy1hZGQnKTtcblx0XHRcdFx0dGhpcy5saW5rU3Bhbi5hcHBlbmQobGluayk7XG5cdFx0XHRcdHNwYW4gPSBtYWtlKG5ld0RPTSA/ICdsaScgOiAnc3BhbicpO1xuXHRcdFx0XHRzcGFuLmNsYXNzTmFtZSA9ICdub3ByaW50Jztcblx0XHRcdFx0aWYgKGlzX3J0bCkge1xuXHRcdFx0XHRcdHNwYW4uZGlyID0gJ3J0bCc7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3Bhbi5hcHBlbmQodGhpcy5saW5rU3Bhbik7XG5cdFx0XHRcdGlmIChhZnRlcikge1xuXHRcdFx0XHRcdGFmdGVyLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNwYW4sIGFmdGVyLm5leHRTaWJsaW5nKTtcblx0XHRcdFx0fSBlbHNlIGlmIChsaW5lKSB7XG5cdFx0XHRcdFx0bGluZS5hcHBlbmQoc3Bhbik7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5ub3JtYWxMaW5rcyA9IG51bGw7XG5cdFx0XHRcdHRoaXMudW5kZWxMaW5rID0gbnVsbDtcblx0XHRcdFx0dGhpcy5jYXRMaW5rID0gbnVsbDtcblx0XHRcdH1cblx0XHRcdHRoaXMub3JpZ2luYWxIaWRkZW4gPSBpc19oaWRkZW47XG5cdFx0XHR0aGlzLmxpbmUgPSBsaW5lO1xuXHRcdFx0dGhpcy5lbmdpbmUgPSBIQy5zdWdnZXN0aW9ucztcblx0XHRcdHRoaXMuc3BhbiA9IHNwYW47XG5cdFx0XHR0aGlzLmN1cnJlbnRDYXRlZ29yeSA9IHRoaXMub3JpZ2luYWxDYXRlZ29yeTtcblx0XHRcdHRoaXMuY3VycmVudEV4aXN0cyA9IHRoaXMub3JpZ2luYWxFeGlzdHM7XG5cdFx0XHR0aGlzLmN1cnJlbnRIaWRkZW4gPSB0aGlzLm9yaWdpbmFsSGlkZGVuO1xuXHRcdFx0dGhpcy5jdXJyZW50S2V5ID0gdGhpcy5vcmlnaW5hbEtleTtcblx0XHRcdHRoaXMuc3RhdGUgPSBVTkNIQU5HRUQ7XG5cdFx0XHR0aGlzLmxhc3RTYXZlZFN0YXRlID0gVU5DSEFOR0VEO1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRDYXRlZ29yeSA9IHRoaXMub3JpZ2luYWxDYXRlZ29yeTtcblx0XHRcdHRoaXMubGFzdFNhdmVkS2V5ID0gdGhpcy5vcmlnaW5hbEtleTtcblx0XHRcdHRoaXMubGFzdFNhdmVkRXhpc3RzID0gdGhpcy5vcmlnaW5hbEV4aXN0cztcblx0XHRcdHRoaXMubGFzdFNhdmVkSGlkZGVuID0gdGhpcy5vcmlnaW5hbEhpZGRlbjtcblx0XHRcdGlmICh0aGlzLmNhdExpbmsgJiYgdGhpcy5jdXJyZW50S2V5KSB7XG5cdFx0XHRcdHRoaXMuY2F0TGluay50aXRsZSA9IHRoaXMuY3VycmVudEtleTtcblx0XHRcdH1cblx0XHRcdGVkaXRvcnNbZWRpdG9ycy5sZW5ndGhdID0gdGhpcztcblx0XHR9XG5cdFx0bWFrZUxpbmtTcGFuKCkge1xuXHRcdFx0dGhpcy5ub3JtYWxMaW5rcyA9IG1ha2UoJ3NwYW4nKTtcblx0XHRcdGxldCBsaW5rID0gbnVsbDtcblx0XHRcdGlmICh0aGlzLm9yaWdpbmFsQ2F0ZWdvcnkgJiYgdGhpcy5vcmlnaW5hbENhdGVnb3J5Lmxlbmd0aCA+IDApIHtcblx0XHRcdFx0bGluayA9IG1ha2UoJ2EnKTtcblx0XHRcdFx0bGluay5ocmVmID0gJyNjYXRsaW5rcyc7XG5cdFx0XHRcdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnJlbW92ZS5iaW5kKHRoaXMpKTtcblx0XHRcdFx0bGluay5hcHBlbmQobWFrZShIQy5saW5rcy5yZW1vdmUsIHRydWUpKTtcblx0XHRcdFx0bGluay50aXRsZSA9IGdldE1lc3NhZ2UoJ3Rvb2x0aXBzLXJlbW92ZScpO1xuXHRcdFx0XHR0aGlzLm5vcm1hbExpbmtzLmFwcGVuZChtYWtlKCcgJywgdHJ1ZSkpO1xuXHRcdFx0XHR0aGlzLm5vcm1hbExpbmtzLmFwcGVuZChsaW5rKTtcblx0XHRcdH1cblx0XHRcdGlmICghSEMudGVtcGxhdGVfY2F0ZWdvcmllc1t0aGlzLm9yaWdpbmFsQ2F0ZWdvcnldKSB7XG5cdFx0XHRcdGxpbmsgPSBtYWtlKCdhJyk7XG5cdFx0XHRcdGxpbmsuaHJlZiA9ICcjY2F0bGlua3MnO1xuXHRcdFx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vcGVuLmJpbmQodGhpcykpO1xuXHRcdFx0XHRsaW5rLmFwcGVuZChtYWtlKEhDLmxpbmtzLmNoYW5nZSwgdHJ1ZSkpO1xuXHRcdFx0XHRsaW5rLnRpdGxlID0gZ2V0TWVzc2FnZSgndG9vbHRpcHMtY2hhbmdlJyk7XG5cdFx0XHRcdHRoaXMubm9ybWFsTGlua3MuYXBwZW5kKG1ha2UoJyAnLCB0cnVlKSk7XG5cdFx0XHRcdHRoaXMubm9ybWFsTGlua3MuYXBwZW5kKGxpbmspO1xuXHRcdFx0XHRpZiAoIW5vU3VnZ2VzdGlvbnMgJiYgSEMudXNlX3VwX2Rvd24pIHtcblx0XHRcdFx0XHR0aGlzLnVwRG93bkxpbmtzID0gbWFrZSgnc3BhbicpO1xuXHRcdFx0XHRcdGxpbmsgPSBtYWtlKCdhJyk7XG5cdFx0XHRcdFx0bGluay5ocmVmID0gJyNjYXRsaW5rcyc7XG5cdFx0XHRcdFx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZG93bi5iaW5kKHRoaXMpKTtcblx0XHRcdFx0XHRsaW5rLmFwcGVuZChtYWtlKEhDLmxpbmtzLmRvd24sIHRydWUpKTtcblx0XHRcdFx0XHRsaW5rLnRpdGxlID0gZ2V0TWVzc2FnZSgndG9vbHRpcHMtZG93bicpO1xuXHRcdFx0XHRcdHRoaXMudXBEb3duTGlua3MuYXBwZW5kKG1ha2UoJyAnLCB0cnVlKSk7XG5cdFx0XHRcdFx0dGhpcy51cERvd25MaW5rcy5hcHBlbmQobGluayk7XG5cdFx0XHRcdFx0bGluayA9IG1ha2UoJ2EnKTtcblx0XHRcdFx0XHRsaW5rLmhyZWYgPSAnI2NhdGxpbmtzJztcblx0XHRcdFx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy51cC5iaW5kKHRoaXMpKTtcblx0XHRcdFx0XHRsaW5rLmFwcGVuZChtYWtlKEhDLmxpbmtzLnVwLCB0cnVlKSk7XG5cdFx0XHRcdFx0bGluay50aXRsZSA9IGdldE1lc3NhZ2UoJ3Rvb2x0aXBzLXVwJyk7XG5cdFx0XHRcdFx0dGhpcy51cERvd25MaW5rcy5hcHBlbmQobWFrZSgnICcsIHRydWUpKTtcblx0XHRcdFx0XHR0aGlzLnVwRG93bkxpbmtzLmFwcGVuZChsaW5rKTtcblx0XHRcdFx0XHR0aGlzLm5vcm1hbExpbmtzLmFwcGVuZCh0aGlzLnVwRG93bkxpbmtzKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5saW5rU3BhbiA9IG1ha2UoJ3NwYW4nKTtcblx0XHRcdHRoaXMubGlua1NwYW4uY2xhc3NOYW1lID0gJ25vcHJpbnQgbm9wb3B1cHMgaG90Y2F0bGluayc7XG5cdFx0XHR0aGlzLmxpbmtTcGFuLmFwcGVuZCh0aGlzLm5vcm1hbExpbmtzKTtcblx0XHRcdHRoaXMudW5kZWxMaW5rID0gbWFrZSgnc3BhbicpO1xuXHRcdFx0dGhpcy51bmRlbExpbmsuY2xhc3NOYW1lID0gJ25vcG9wdXBzIGhvdGNhdGxpbmsnO1xuXHRcdFx0dGhpcy51bmRlbExpbmsuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdGxpbmsgPSBtYWtlKCdhJyk7XG5cdFx0XHRsaW5rLmhyZWYgPSAnI2NhdGxpbmtzJztcblx0XHRcdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnJlc3RvcmUuYmluZCh0aGlzKSk7XG5cdFx0XHRsaW5rLmFwcGVuZChtYWtlKEhDLmxpbmtzLnJlc3RvcmUsIHRydWUpKTtcblx0XHRcdGxpbmsudGl0bGUgPSBnZXRNZXNzYWdlKCd0b29sdGlwcy1yZXN0b3JlJyk7XG5cdFx0XHR0aGlzLnVuZGVsTGluay5hcHBlbmQobWFrZSgnICcsIHRydWUpKTtcblx0XHRcdHRoaXMudW5kZWxMaW5rLmFwcGVuZChsaW5rKTtcblx0XHRcdHRoaXMubGlua1NwYW4uYXBwZW5kKHRoaXMudW5kZWxMaW5rKTtcblx0XHR9XG5cdFx0aW52b2tlU3VnZ2VzdGlvbnMoZG9udF9hdXRvY29tcGxldGUpIHtcblx0XHRcdGlmIChcblx0XHRcdFx0dGhpcy5lbmdpbmUgJiZcblx0XHRcdFx0c3VnZ2VzdGlvbkNvbmZpZ3NbdGhpcy5lbmdpbmVdICYmXG5cdFx0XHRcdHN1Z2dlc3Rpb25Db25maWdzW3RoaXMuZW5naW5lXS50ZW1wICYmXG5cdFx0XHRcdCFkb250X2F1dG9jb21wbGV0ZVxuXHRcdFx0KSB7XG5cdFx0XHRcdHRoaXMuZW5naW5lID0gSEMuc3VnZ2VzdGlvbnM7XG5cdFx0XHR9IC8vIFJlc2V0IHRvIGEgc2VhcmNoIHVwb24gaW5wdXRcblx0XHRcdHRoaXMuc3RhdGUgPSBDSEFOR0VfUEVORElORztcblx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHNlbGYudGV4dGNoYW5nZShkb250X2F1dG9jb21wbGV0ZSk7XG5cdFx0XHR9LCBIQy5zdWdnZXN0X2RlbGF5KTtcblx0XHR9XG5cdFx0bWFrZUZvcm0oKSB7XG5cdFx0XHRjb25zdCBmb3JtID0gbWFrZSgnZm9ybScpO1xuXHRcdFx0Zm9ybS5tZXRob2QgPSAnUE9TVCc7XG5cdFx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHRoaXMuYWNjZXB0LmJpbmQodGhpcykpO1xuXHRcdFx0dGhpcy5mb3JtID0gZm9ybTtcblx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdFx0Y29uc3QgdGV4dCA9IG1ha2UoJ2lucHV0Jyk7XG5cdFx0XHR0ZXh0LnR5cGUgPSAndGV4dCc7XG5cdFx0XHR0ZXh0LnNpemUgPSBIQy5lZGl0Ym94X3dpZHRoO1xuXHRcdFx0aWYgKCFub1N1Z2dlc3Rpb25zKSB7XG5cdFx0XHRcdC8vIEJlIGNhcmVmdWwgaGVyZSB0byBoYW5kbGUgSU1FIGlucHV0LiBUaGlzIGlzIGJyb3dzZXIvT1MvSU1FIGRlcGVuZGVudCwgYnV0IGJhc2ljYWxseSB0aGVyZSBhcmUgdHdvIG1lY2hhbmlzbXM6XG5cdFx0XHRcdC8vIC0gTW9kZXJuIChET00gTGV2ZWwgMykgYnJvd3NlcnMgdXNlIGNvbXBvc2l0aW9uc3RhcnQvY29tcG9zaXRpb25lbmQgZXZlbnRzIHRvIHNpZ25hbCBjb21wb3NpdGlvbjsgaWYgdGhlXG5cdFx0XHRcdC8vICAgY29tcG9zaXRpb24gaXMgbm90IGNhbmNlbGVkLCB0aGVyZSdsbCBiZSBhIHRleHRJbnB1dCBldmVudCBmb2xsb3dpbmcuIER1cmluZyBhIGNvbXBvc2l0aW9uIGtleSBldmVudHMgYXJlXG5cdFx0XHRcdC8vICAgZWl0aGVyIGFsbCBzdXBwcmVzc2VkIChGRi9HZWNrbyksIG9yIG90aGVyd2lzZSBoYXZlIGtleURvd24gPT09IElNRSBmb3IgYWxsIGtleXMgKFdlYmtpdCkuXG5cdFx0XHRcdC8vICAgLSBXZWJraXQgc2VuZHMgYSB0ZXh0SW5wdXQgZm9sbG93ZWQgYnkga2V5RG93biA9PT0gSU1FIGFuZCBhIGtleVVwIHdpdGggdGhlIGtleSB0aGF0IGVuZGVkIGNvbXBvc2l0aW9uLlxuXHRcdFx0XHQvLyAgIC0gR2Vja28gZG9lc24ndCBzZW5kIHRleHRJbnB1dCBidXQganVzdCBhIGtleVVwIHdpdGggdGhlIGtleSB0aGF0IGVuZGVkIGNvbXBvc2l0aW9uLCB3aXRob3V0IHNlbmRpbmcga2V5RG93blxuXHRcdFx0XHQvL1x0IGZpcnN0LiBHZWNrbyBkb2Vzbid0IHNlbmQgYW55IGtleWRvd24gd2hpbGUgSU1FIGlzIGFjdGl2ZS5cblx0XHRcdFx0Ly8gLSBPbGRlciBicm93c2VycyBzaWduYWwgY29tcG9zaXRpb24gYnkga2V5RG93biA9PT0gSU1FIGZvciB0aGUgZmlyc3QgYW5kIHN1YnNlcXVlbnQga2V5cyBmb3IgYSBjb21wb3NpdGlvbi4gVGhlXG5cdFx0XHRcdC8vICAgZmlyc3Qga2V5RG93biAhPT0gSU1FIGlzIGNlcnRhaW5seSBhZnRlciB0aGUgZW5kIG9mIHRoZSBjb21wb3NpdGlvbi4gVHlwaWNhbGx5LCBjb21wb3NpdGlvbiBlbmQgY2FuIGFsc28gYmVcblx0XHRcdFx0Ly8gICBkZXRlY3RlZCBieSBhIGtleURvd24gSU1FIHdpdGggYSBrZXlVcCBvZiBzcGFjZSwgdGFiLCBlc2NhcGUsIG9yIHJldHVybi5cblx0XHRcdFx0dGV4dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGtleSA9IGV2ZW50LmtleSB8fCAwO1xuXHRcdFx0XHRcdGlmIChcblx0XHRcdFx0XHRcdHNlbGYuaW1lICYmXG5cdFx0XHRcdFx0XHRzZWxmLmxhc3RLZXkgPT09IElNRSAmJlxuXHRcdFx0XHRcdFx0IXNlbGYudXNlc0NvbXBvc2l0aW9uICYmXG5cdFx0XHRcdFx0XHQoa2V5ID09PSBUQUIgfHwga2V5ID09PSBSRVQgfHwga2V5ID09PSBFU0MgfHwga2V5ID09PSBTUEFDRSlcblx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdHNlbGYuaW1lID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChzZWxmLmltZSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChrZXkgPT09IFVQIHx8IGtleSA9PT0gRE9XTiB8fCBrZXkgPT09IFBHVVAgfHwga2V5ID09PSBQR0RPV04pIHtcblx0XHRcdFx0XHRcdC8vIEluIGNhc2UgYSBicm93c2VyIGRvZXNuJ3QgZ2VuZXJhdGUga2V5cHJlc3MgZXZlbnRzIGZvciBhcnJvdyBrZXlzLi4uXG5cdFx0XHRcdFx0XHRpZiAoc2VsZi5rZXlDb3VudCA9PT0gMCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gc2VsZi5wcm9jZXNzS2V5KGV2ZW50KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0aWYgKGtleSA9PT0gRVNDICYmIHNlbGYubGFzdEtleSAhPT0gSU1FICYmICFzZWxmLnJlc2V0S2V5U2VsZWN0aW9uKCkpIHtcblx0XHRcdFx0XHRcdFx0Ly8gTm8gdW5kbyBvZiBrZXkgc2VsZWN0aW9uOiB0cmVhdCBFU0MgYXMgXCJjYW5jZWxcIi5cblx0XHRcdFx0XHRcdFx0c2VsZi5jYW5jZWwoKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Ly8gQWxzbyBkbyB0aGlzIGZvciBFU0MgYXMgYSB3b3JrYXJvdW5kIGZvciBGaXJlZm94IGJ1ZyA1MjQzNjBcblx0XHRcdFx0XHRcdC8vIHtAbGluayBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD01MjQzNjB9XG5cdFx0XHRcdFx0XHRzZWxmLmludm9rZVN1Z2dlc3Rpb25zKGtleSA9PT0gQlMgfHwga2V5ID09PSBERUwgfHwga2V5ID09PSBFU0MpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHRleHQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGtleSA9IGV2ZW50LmtleSB8fCAwO1xuXHRcdFx0XHRcdHNlbGYubGFzdEtleSA9IGtleTtcblx0XHRcdFx0XHRzZWxmLmtleUNvdW50ID0gMDtcblx0XHRcdFx0XHQvLyBET00gTGV2ZWwgPCAzIElNRSBpbnB1dFxuXHRcdFx0XHRcdGlmICghc2VsZi5pbWUgJiYga2V5ID09PSBJTUUgJiYgIXNlbGYudXNlc0NvbXBvc2l0aW9uKSB7XG5cdFx0XHRcdFx0XHQvLyBzZWxmLnVzZXNDb21wb3NpdGlvbiBjYXRjaGVzIGJyb3dzZXJzIHRoYXQgbWF5IGVtaXQgc3B1cmlvdXMga2V5ZG93biBJTUUgYWZ0ZXIgYSBjb21wb3NpdGlvbiBoYXMgZW5kZWRcblx0XHRcdFx0XHRcdHNlbGYuaW1lID0gdHJ1ZTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0XHRcdFx0c2VsZi5pbWUgJiZcblx0XHRcdFx0XHRcdGtleSAhPT0gSU1FICYmXG5cdFx0XHRcdFx0XHQhKChrZXkgPj0gMTYgJiYga2V5IDw9IDIwKSB8fCAoa2V5ID49IDkxICYmIGtleSA8PSA5MykgfHwga2V5ID09PSAxNDQpXG5cdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHQvLyBJZ25vcmUgY29udHJvbCBrZXlzOiBjdHJsLCBzaGlmdCwgYWx0LCBhbHQgZ3IsIGNhcHMgbG9jaywgd2luZG93cy9hcHBsZSBjbWQga2V5cywgbnVtIGxvY2suIE9ubHkgdGhlIHdpbmRvd3Mga2V5c1xuXHRcdFx0XHRcdFx0Ly8gdGVybWluYXRlIElNRSAoYXBwbGUgY21kIGRvZXNuJ3QpLCBidXQgdGhleSBhbHNvIGNhdXNlIGEgYmx1ciwgc28gaXQncyBPSyB0byBpZ25vcmUgdGhlbSBoZXJlLlxuXHRcdFx0XHRcdFx0Ly8gTm90ZTogU2FmYXJpIDQgKDUzMC4xNykgcHJvcGFnYXRlcyBFU0Mgb3V0IG9mIGFuIElNRSBjb21wb3NpdGlvbiAob2JzZXJ2ZWQgYXQgbGVhc3Qgb24gV2luIFhQKS5cblx0XHRcdFx0XHRcdHNlbGYuaW1lID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChzZWxmLmltZSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIEhhbmRsZSByZXR1cm4gZXhwbGljaXRseSwgdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgZm9ybSBzdWJtaXNzaW9uIHRvIGJlIGFibGUgdG8gY2hlY2sgZm9yIGN0cmxcblx0XHRcdFx0XHRpZiAoa2V5ID09PSBSRVQpIHtcblx0XHRcdFx0XHRcdHJldHVybiBzZWxmLmFjY2VwdChldmVudCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIEluaGliaXQgZGVmYXVsdCBiZWhhdmlvciBvZiBFU0MgKHJldmVydCB0byBsYXN0IHJlYWwgaW5wdXQgaW4gRkY6IHdlIGRvIHRoYXQgb3Vyc2VsdmVzKVxuXHRcdFx0XHRcdHJldHVybiBrZXkgPT09IEVTQyA/IGV2dEtpbGwoZXZlbnQpIDogdHJ1ZTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdC8vIEFuZCBoYW5kbGUgY29udGludWVkIHByZXNzaW5nIG9mIGFycm93IGtleXNcblx0XHRcdFx0dGV4dC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChldmVudCkgPT4ge1xuXHRcdFx0XHRcdHNlbGYua2V5Q291bnQrKztcblx0XHRcdFx0XHRyZXR1cm4gc2VsZi5wcm9jZXNzS2V5KGV2ZW50KTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdCQodGV4dCkub24oJ2ZvY3VzJywgKCkgPT4ge1xuXHRcdFx0XHRcdG1ha2VBY3RpdmUoc2VsZik7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHQvLyBPbiBJRSwgYmx1ciBldmVudHMgYXJlIGFzeW5jaHJvbm91cywgYW5kIG1heSB0aHVzIGFycml2ZSBhZnRlciB0aGUgZWxlbWVudCBoYXMgbG9zdCB0aGUgZm9jdXMuIFNpbmNlIElFXG5cdFx0XHRcdC8vIGNhbiBnZXQgdGhlIHNlbGVjdGlvbiBvbmx5IHdoaWxlIHRoZSBlbGVtZW50IGlzIGFjdGl2ZSAoaGFzIHRoZSBmb2N1cyksIHdlIG1heSBub3QgYWx3YXlzIGdldCB0aGUgc2VsZWN0aW9uLlxuXHRcdFx0XHQvLyBUaGVyZWZvcmUsIHVzZSBhbiBJRS1zcGVjaWZpYyBzeW5jaHJvbm91cyBldmVudCBvbiBJRS4uLlxuXHRcdFx0XHQvLyBEb24ndCB0ZXN0IGZvciB0ZXh0LnNlbGVjdGlvblN0YXJ0IGJlaW5nIGRlZmluZWQ7XG5cdFx0XHRcdCQodGV4dCkub24oXG5cdFx0XHRcdFx0dGV4dC5vbmJlZm9yZWRlYWN0aXZhdGUgIT09IHVuZGVmaW5lZCAmJiB0ZXh0LmNyZWF0ZVRleHRSYW5nZSA/ICdiZWZvcmVkZWFjdGl2YXRlJyA6ICdibHVyJyxcblx0XHRcdFx0XHR0aGlzLnNhdmVWaWV3LmJpbmQodGhpcylcblx0XHRcdFx0KTtcblx0XHRcdFx0Ly8gRE9NIExldmVsIDMgSU1FIGhhbmRsaW5nXG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gU2V0dGluZyBsYXN0S2V5ID0gSU1FIHByb3ZpZGVzIGEgZmFrZSBrZXlEb3duIGZvciBHZWNrbydzIHNpbmdsZSBrZXlVcCBhZnRlciBhIGNtcG9zaXRpb24uIElmIHdlIGRpZG4ndCBkbyB0aGlzLFxuXHRcdFx0XHRcdC8vIGNhbmNlbGxpbmcgYSBjb21wb3NpdGlvbiB2aWEgRVNDIHdvdWxkIGFsc28gY2FuY2VsIGFuZCBjbG9zZSB0aGUgd2hvbGUgY2F0ZWdvcnkgaW5wdXQgZWRpdG9yLlxuXHRcdFx0XHRcdCQodGV4dCkub24oJ2NvbXBvc2l0aW9uc3RhcnQnLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRzZWxmLmxhc3RLZXkgPSBJTUU7XG5cdFx0XHRcdFx0XHRzZWxmLnVzZXNDb21wb3NpdGlvbiA9IHRydWU7XG5cdFx0XHRcdFx0XHRzZWxmLmltZSA9IHRydWU7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0JCh0ZXh0KS5vbignY29tcG9zaXRpb25lbmQnLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRzZWxmLmxhc3RLZXkgPSBJTUU7XG5cdFx0XHRcdFx0XHRzZWxmLnVzZXNDb21wb3NpdGlvbiA9IHRydWU7XG5cdFx0XHRcdFx0XHRzZWxmLmltZSA9IGZhbHNlO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdCQodGV4dCkub24oJ3RleHRJbnB1dCcsICgpID0+IHtcblx0XHRcdFx0XHRcdHNlbGYuaW1lID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRzZWxmLmludm9rZVN1Z2dlc3Rpb25zKGZhbHNlKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdFx0Ly8gSnVzdCBpbiBjYXNlIHNvbWUgYnJvd3NlcnMgbWlnaHQgcHJvZHVjZSBleGNlcHRpb25zIHdpdGggdGhlc2UgRE9NIExldmVsIDMgZXZlbnRzXG5cdFx0XHRcdH1cblx0XHRcdFx0JCh0ZXh0KS5vbignYmx1cicsICgpID0+IHtcblx0XHRcdFx0XHRzZWxmLnVzZXNDb21wb3NpdGlvbiA9IGZhbHNlO1xuXHRcdFx0XHRcdHNlbGYuaW1lID0gZmFsc2U7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy50ZXh0ID0gdGV4dDtcblx0XHRcdHRoaXMuaWNvbiA9IG1ha2UoJ2ltZycpO1xuXHRcdFx0bGV0IGxpc3QgPSBudWxsO1xuXHRcdFx0aWYgKCFub1N1Z2dlc3Rpb25zKSB7XG5cdFx0XHRcdGxpc3QgPSBtYWtlKCdzZWxlY3QnKTtcblx0XHRcdFx0bGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdFx0XHRpZiAoc2VsZi5oaWdobGlnaHRTdWdnZXN0aW9uKDApKSB7XG5cdFx0XHRcdFx0XHRzZWxmLnRleHRjaGFuZ2UoZmFsc2UsIHRydWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHRcdGxpc3QuYWRkRXZlbnRMaXN0ZW5lcignZGJsY2xpY2snLCAoZSkgPT4ge1xuXHRcdFx0XHRcdGlmIChzZWxmLmhpZ2hsaWdodFN1Z2dlc3Rpb24oMCkpIHtcblx0XHRcdFx0XHRcdHNlbGYuYWNjZXB0KGUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHRcdGxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuXHRcdFx0XHRcdHNlbGYuaGlnaGxpZ2h0U3VnZ2VzdGlvbigwKTtcblx0XHRcdFx0XHRzZWxmLnRleHQuZm9jdXMoKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGxpc3QuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRpZiAoZXZlbnQua2V5ID09PSBFU0MpIHtcblx0XHRcdFx0XHRcdHNlbGYucmVzZXRLZXlTZWxlY3Rpb24oKTtcblx0XHRcdFx0XHRcdHNlbGYudGV4dC5mb2N1cygpO1xuXHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHNlbGYudGV4dGNoYW5nZSh0cnVlKTtcblx0XHRcdFx0XHRcdH0sIEhDLnN1Z2dlc3RfZGVsYXkpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoZXZlbnQua2V5ID09PSBSRVQpIHtcblx0XHRcdFx0XHRcdHNlbGYuYWNjZXB0KGV2ZW50KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRpZiAoIUhDLmZpeGVkX3NlYXJjaCkge1xuXHRcdFx0XHRcdGNvbnN0IGVuZ2luZVNlbGVjdG9yID0gbWFrZSgnc2VsZWN0Jyk7XG5cdFx0XHRcdFx0Zm9yIChjb25zdCBrZXkgaW4gc3VnZ2VzdGlvbkNvbmZpZ3MpIHtcblx0XHRcdFx0XHRcdGlmIChzdWdnZXN0aW9uQ29uZmlnc1trZXldLnNob3cpIHtcblx0XHRcdFx0XHRcdFx0Y29uc3Qgb3B0ID0gbWFrZSgnb3B0aW9uJyk7XG5cdFx0XHRcdFx0XHRcdG9wdC52YWx1ZSA9IGtleTtcblx0XHRcdFx0XHRcdFx0aWYgKGtleSA9PT0gdGhpcy5lbmdpbmUpIHtcblx0XHRcdFx0XHRcdFx0XHRvcHQuc2VsZWN0ZWQgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdG9wdC5hcHBlbmQobWFrZShzdWdnZXN0aW9uQ29uZmlnc1trZXldLm5hbWUsIHRydWUpKTtcblx0XHRcdFx0XHRcdFx0ZW5naW5lU2VsZWN0b3IuYXBwZW5kKG9wdCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVuZ2luZVNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcblx0XHRcdFx0XHRcdHNlbGYuZW5naW5lID0gc2VsZi5lbmdpbmVTZWxlY3Rvci5vcHRpb25zW3NlbGYuZW5naW5lU2VsZWN0b3Iuc2VsZWN0ZWRJbmRleF0udmFsdWU7XG5cdFx0XHRcdFx0XHRzZWxmLnRleHQuZm9jdXMoKTtcblx0XHRcdFx0XHRcdHNlbGYudGV4dGNoYW5nZSh0cnVlLCB0cnVlKTsgLy8gRG9uJ3QgYXV0b2NvbXBsZXRlLCBmb3JjZSByZS1kaXNwbGF5IG9mIGxpc3Rcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yID0gZW5naW5lU2VsZWN0b3I7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMubGlzdCA9IGxpc3Q7XG5cdFx0XHRjb25zdCBidXR0b25fbGFiZWwgPSAoX2lkLCBkZWZhdWx0VGV4dCkgPT4ge1xuXHRcdFx0XHRjb25zdCBsYWJlbCA9IG51bGw7XG5cdFx0XHRcdGlmICghbGFiZWwgfHwgIWxhYmVsLmRhdGEpIHtcblx0XHRcdFx0XHRyZXR1cm4gZGVmYXVsdFRleHQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGxhYmVsLmRhdGE7XG5cdFx0XHR9O1xuXHRcdFx0Ly8gRG8gbm90IHVzZSB0eXBlICdzdWJtaXQnOyB3ZSBjYW5ub3QgZGV0ZWN0IG1vZGlmaWVyIGtleXMgaWYgd2UgZG9cblx0XHRcdGNvbnN0IE9LID0gbWFrZSgnaW5wdXQnKTtcblx0XHRcdE9LLnR5cGUgPSAnYnV0dG9uJztcblx0XHRcdE9LLnZhbHVlID0gYnV0dG9uX2xhYmVsKCd3cE9rVXBsb2FkTGJsJywgZ2V0TWVzc2FnZSgnbWVzc2FnZXMtb2snKSk7XG5cdFx0XHRPSy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYWNjZXB0LmJpbmQodGhpcykpO1xuXHRcdFx0dGhpcy5vayA9IE9LO1xuXHRcdFx0Y29uc3QgY2FuY2VsID0gbWFrZSgnaW5wdXQnKTtcblx0XHRcdGNhbmNlbC50eXBlID0gJ2J1dHRvbic7XG5cdFx0XHRjYW5jZWwudmFsdWUgPSBidXR0b25fbGFiZWwoJ3dwQ2FuY2VsVXBsb2FkTGJsJywgZ2V0TWVzc2FnZSgnbWVzc2FnZXMtY2FuY2VsJykpO1xuXHRcdFx0Y2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jYW5jZWwuYmluZCh0aGlzKSk7XG5cdFx0XHR0aGlzLmNhbmNlbEJ1dHRvbiA9IGNhbmNlbDtcblx0XHRcdGNvbnN0IHNwYW4gPSBtYWtlKCdzcGFuJyk7XG5cdFx0XHRzcGFuLmNsYXNzTmFtZSA9ICdob3RjYXRpbnB1dCc7XG5cdFx0XHRzcGFuLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcblx0XHRcdHNwYW4uYXBwZW5kKHRleHQpO1xuXHRcdFx0Ly8gUHV0IHNvbWUgdGV4dCBpbnRvIHRoaXMgc3BhbiAoYTAgaXMgbmJzcCkgYW5kIG1ha2Ugc3VyZSBpdCBhbHdheXMgc3RheXMgb24gdGhlIHNhbWVcblx0XHRcdC8vIGxpbmUgYXMgdGhlIGlucHV0IGZpZWxkLCBvdGhlcndpc2UsIElFOC85IG1pc2NhbGN1bGF0ZXMgdGhlIGhlaWdodCBvZiB0aGUgc3BhbiBhbmRcblx0XHRcdC8vIHRoZW4gdGhlIGVuZ2luZSBzZWxlY3RvciBtYXkgb3ZlcmxhcCB0aGUgaW5wdXQgZmllbGQuXG5cdFx0XHRzcGFuLmFwcGVuZChtYWtlKCdcXHUwMEEwJywgdHJ1ZSkpO1xuXHRcdFx0c3Bhbi5zdHlsZS53aGl0ZVNwYWNlID0gJ25vd3JhcCc7XG5cdFx0XHRpZiAobGlzdCkge1xuXHRcdFx0XHRzcGFuLmFwcGVuZChsaXN0KTtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLmVuZ2luZVNlbGVjdG9yKSB7XG5cdFx0XHRcdHNwYW4uYXBwZW5kKHRoaXMuZW5naW5lU2VsZWN0b3IpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFub1N1Z2dlc3Rpb25zKSB7XG5cdFx0XHRcdHNwYW4uYXBwZW5kKHRoaXMuaWNvbik7XG5cdFx0XHR9XG5cdFx0XHRzcGFuLmFwcGVuZChPSyk7XG5cdFx0XHRzcGFuLmFwcGVuZChjYW5jZWwpO1xuXHRcdFx0Zm9ybS5hcHBlbmQoc3Bhbik7XG5cdFx0XHRmb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHR0aGlzLnNwYW4uYXBwZW5kKGZvcm0pO1xuXHRcdH1cblx0XHRkaXNwbGF5KGV2ZW50KSB7XG5cdFx0XHRpZiAodGhpcy5pc0FkZENhdGVnb3J5ICYmICFvblVwbG9hZCAmJiB0aGlzLmxpbmUpIHtcblx0XHRcdFx0bmV3IENhdGVnb3J5RWRpdG9yKHRoaXMubGluZSwgbnVsbCwgdGhpcy5zcGFuLCB0cnVlKTsgLy8gQ3JlYXRlIGEgbmV3IG9uZVxuXHRcdFx0fVxuXHRcdFx0aWYgKCFjb21taXRCdXR0b24gJiYgIW9uVXBsb2FkKSB7XG5cdFx0XHRcdGZvciAoY29uc3QgZWRpdG9yIG9mIGVkaXRvcnMpIHtcblx0XHRcdFx0XHRpZiAoZWRpdG9yLnN0YXRlICE9PSBVTkNIQU5HRUQpIHtcblx0XHRcdFx0XHRcdHNldE11bHRpSW5wdXQoKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKCF0aGlzLmZvcm0pIHtcblx0XHRcdFx0dGhpcy5tYWtlRm9ybSgpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMubGlzdCkge1xuXHRcdFx0XHR0aGlzLmxpc3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLmVuZ2luZVNlbGVjdG9yKSB7XG5cdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdH1cblx0XHRcdHRoaXMuY3VycmVudENhdGVnb3J5ID0gdGhpcy5sYXN0U2F2ZWRDYXRlZ29yeTtcblx0XHRcdHRoaXMuY3VycmVudEV4aXN0cyA9IHRoaXMubGFzdFNhdmVkRXhpc3RzO1xuXHRcdFx0dGhpcy5jdXJyZW50SGlkZGVuID0gdGhpcy5sYXN0U2F2ZWRIaWRkZW47XG5cdFx0XHR0aGlzLmN1cnJlbnRLZXkgPSB0aGlzLmxhc3RTYXZlZEtleTtcblx0XHRcdHRoaXMuaWNvbi5zcmMgPSB0aGlzLmN1cnJlbnRFeGlzdHMgPyBIQy5leGlzdHNZZXMgOiBIQy5leGlzdHNObztcblx0XHRcdHRoaXMudGV4dC52YWx1ZSA9IHRoaXMuY3VycmVudENhdGVnb3J5ICsgKHRoaXMuY3VycmVudEtleSA9PT0gbnVsbCA/ICcnIDogYHwke3RoaXMuY3VycmVudEtleX1gKTtcblx0XHRcdHRoaXMub3JpZ2luYWxTdGF0ZSA9IHRoaXMuc3RhdGU7XG5cdFx0XHR0aGlzLmxhc3RJbnB1dCA9IHRoaXMuY3VycmVudENhdGVnb3J5O1xuXHRcdFx0dGhpcy5pbnB1dEV4aXN0cyA9IHRoaXMuY3VycmVudEV4aXN0cztcblx0XHRcdHRoaXMuc3RhdGUgPSB0aGlzLnN0YXRlID09PSBVTkNIQU5HRUQgPyBPUEVOIDogQ0hBTkdFX1BFTkRJTkc7XG5cdFx0XHR0aGlzLmxhc3RTZWxlY3Rpb24gPSB7XG5cdFx0XHRcdHN0YXJ0OiB0aGlzLmN1cnJlbnRDYXRlZ29yeS5sZW5ndGgsXG5cdFx0XHRcdGVuZDogdGhpcy5jdXJyZW50Q2F0ZWdvcnkubGVuZ3RoLFxuXHRcdFx0fTtcblx0XHRcdHRoaXMuc2hvd3NMaXN0ID0gZmFsc2U7XG5cdFx0XHQvLyBEaXNwbGF5IHRoZSBmb3JtXG5cdFx0XHRpZiAodGhpcy5jYXRMaW5rKSB7XG5cdFx0XHRcdHRoaXMuY2F0TGluay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5saW5rU3Bhbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0dGhpcy5mb3JtLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJztcblx0XHRcdHRoaXMub2suZGlzYWJsZWQgPSBmYWxzZTtcblx0XHRcdC8vIEtpbGwgdGhlIGV2ZW50IGJlZm9yZSBmb2N1c3NpbmcsIG90aGVyd2lzZSBJRSB3aWxsIGtpbGwgdGhlIG9uZm9jdXMgZXZlbnQhXG5cdFx0XHRjb25zdCByZXN1bHQgPSBldnRLaWxsKGV2ZW50KTtcblx0XHRcdHRoaXMudGV4dC5mb2N1cygpO1xuXHRcdFx0dGhpcy50ZXh0LnJlYWRPbmx5ID0gZmFsc2U7XG5cdFx0XHRjaGVja011bHRpSW5wdXQoKTtcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXHRcdHNob3coZXZlbnQsIGVuZ2luZSwgcmVhZE9ubHkpIHtcblx0XHRcdGNvbnN0IHJlc3VsdCA9IHRoaXMuZGlzcGxheShldmVudCk7XG5cdFx0XHRjb25zdCB2ID0gdGhpcy5sYXN0U2F2ZWRDYXRlZ29yeTtcblx0XHRcdGlmICh2Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fVxuXHRcdFx0dGhpcy50ZXh0LnJlYWRPbmx5ID0gISFyZWFkT25seTtcblx0XHRcdHRoaXMuZW5naW5lID0gZW5naW5lO1xuXHRcdFx0dGhpcy50ZXh0Y2hhbmdlKGZhbHNlLCB0cnVlKTsgLy8gZG8gYXV0b2NvbXBsZXRpb24sIGZvcmNlIGRpc3BsYXkgb2Ygc3VnZ2VzdGlvbnNcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXHRcdG9wZW4oZXZlbnQpIHtcblx0XHRcdHJldHVybiB0aGlzLnNob3coZXZlbnQsIHRoaXMuZW5naW5lICYmIHN1Z2dlc3Rpb25Db25maWdzW3RoaXMuZW5naW5lXS50ZW1wID8gSEMuc3VnZ2VzdGlvbnMgOiB0aGlzLmVuZ2luZSk7XG5cdFx0fVxuXHRcdGRvd24oZXZlbnQpIHtcblx0XHRcdHJldHVybiB0aGlzLnNob3coZXZlbnQsICdzdWJjYXQnLCB0cnVlKTtcblx0XHR9XG5cdFx0dXAoZXZlbnQpIHtcblx0XHRcdHJldHVybiB0aGlzLnNob3coZXZlbnQsICdwYXJlbnRjYXQnKTtcblx0XHR9XG5cdFx0Y2FuY2VsKCkge1xuXHRcdFx0aWYgKHRoaXMuaXNBZGRDYXRlZ29yeSAmJiAhb25VcGxvYWQpIHtcblx0XHRcdFx0dGhpcy5yZW1vdmVFZGl0b3IoKTsgLy8gV2UgYWRkZWQgYSBuZXcgYWRkZXIgd2hlbiBvcGVuaW5nXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdC8vIENsb3NlLCByZS1kaXNwbGF5IGxpbmtcblx0XHRcdHRoaXMuaW5hY3RpdmF0ZSgpO1xuXHRcdFx0dGhpcy5mb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRpZiAodGhpcy5jYXRMaW5rKSB7XG5cdFx0XHRcdHRoaXMuY2F0TGluay5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmxpbmtTcGFuLnN0eWxlLmRpc3BsYXkgPSAnJztcblx0XHRcdHRoaXMuc3RhdGUgPSB0aGlzLm9yaWdpbmFsU3RhdGU7XG5cdFx0XHR0aGlzLmN1cnJlbnRDYXRlZ29yeSA9IHRoaXMubGFzdFNhdmVkQ2F0ZWdvcnk7XG5cdFx0XHR0aGlzLmN1cnJlbnRLZXkgPSB0aGlzLmxhc3RTYXZlZEtleTtcblx0XHRcdHRoaXMuY3VycmVudEV4aXN0cyA9IHRoaXMubGFzdFNhdmVkRXhpc3RzO1xuXHRcdFx0dGhpcy5jdXJyZW50SGlkZGVuID0gdGhpcy5sYXN0U2F2ZWRIaWRkZW47XG5cdFx0XHRpZiAodGhpcy5jYXRMaW5rKSB7XG5cdFx0XHRcdHRoaXMuY2F0TGluay50aXRsZSA9IHRoaXMuY3VycmVudEtleSAmJiB0aGlzLmN1cnJlbnRLZXkubGVuZ3RoID4gMCA/IHRoaXMuY3VycmVudEtleSA6ICcnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuc3RhdGUgPT09IFVOQ0hBTkdFRCkge1xuXHRcdFx0XHRpZiAodGhpcy5jYXRMaW5rKSB7XG5cdFx0XHRcdFx0dGhpcy5jYXRMaW5rLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoIW9uVXBsb2FkKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0dGhpcy5jYXRMaW5rLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IEhDLmJnX2NoYW5nZWQ7XG5cdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdC8qIGVtcHR5ICovXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGNoZWNrTXVsdGlJbnB1dCgpO1xuXHRcdH1cblx0XHRyZW1vdmVFZGl0b3IoKSB7XG5cdFx0XHRpZiAoIW5ld0RPTSkge1xuXHRcdFx0XHRjb25zdCBuZXh0ID0gdGhpcy5zcGFuLm5leHRTaWJsaW5nO1xuXHRcdFx0XHRpZiAobmV4dCkge1xuXHRcdFx0XHRcdG5leHQucmVtb3ZlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLnNwYW4gJiYgdGhpcy5zcGFuLnBhcmVudE5vZGUpIHtcblx0XHRcdFx0dGhpcy5zcGFuLnJlbW92ZSgpO1xuXHRcdFx0fVxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBlZGl0b3JzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChlZGl0b3JzW2ldID09PSB0aGlzKSB7XG5cdFx0XHRcdFx0ZWRpdG9ycy5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGNoZWNrTXVsdGlJbnB1dCgpO1xuXHRcdH1cblx0XHRyb2xsYmFjayhldmVudCkge1xuXHRcdFx0dGhpcy51bmRvTGluay5yZW1vdmUoKTtcblx0XHRcdHRoaXMudW5kb0xpbmsgPSBudWxsO1xuXHRcdFx0dGhpcy5jdXJyZW50Q2F0ZWdvcnkgPSB0aGlzLm9yaWdpbmFsQ2F0ZWdvcnk7XG5cdFx0XHR0aGlzLmN1cnJlbnRLZXkgPSB0aGlzLm9yaWdpbmFsS2V5O1xuXHRcdFx0dGhpcy5jdXJyZW50RXhpc3RzID0gdGhpcy5vcmlnaW5hbEV4aXN0cztcblx0XHRcdHRoaXMuY3VycmVudEhpZGRlbiA9IHRoaXMub3JpZ2luYWxIaWRkZW47XG5cdFx0XHR0aGlzLmxhc3RTYXZlZENhdGVnb3J5ID0gdGhpcy5vcmlnaW5hbENhdGVnb3J5O1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRLZXkgPSB0aGlzLm9yaWdpbmFsS2V5O1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRFeGlzdHMgPSB0aGlzLm9yaWdpbmFsRXhpc3RzO1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRIaWRkZW4gPSB0aGlzLm9yaWdpbmFsSGlkZGVuO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IFVOQ0hBTkdFRDtcblx0XHRcdGlmICghdGhpcy5jdXJyZW50Q2F0ZWdvcnkgfHwgdGhpcy5jdXJyZW50Q2F0ZWdvcnkubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdC8vIEl0IHdhcyBhIG5ld2x5IGFkZGVkIGNhdGVnb3J5LiBSZW1vdmUgdGhlIHdob2xlIGVkaXRvci5cblx0XHRcdFx0dGhpcy5yZW1vdmVFZGl0b3IoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIFJlZGlzcGxheSB0aGUgbGluay4uLlxuXHRcdFx0XHR0aGlzLmNhdExpbmsuZmlyc3RDaGlsZC5yZW1vdmUoKTtcblx0XHRcdFx0dGhpcy5jYXRMaW5rLmFwcGVuZChtYWtlKHRoaXMuY3VycmVudENhdGVnb3J5LCB0cnVlKSk7XG5cdFx0XHRcdHRoaXMuY2F0TGluay5ocmVmID0gd2lraVBhZ2VQYXRoKGAke0hDLmNhdGVnb3J5X2Nhbm9uaWNhbH06JHt0aGlzLmN1cnJlbnRDYXRlZ29yeX1gKTtcblx0XHRcdFx0dGhpcy5jYXRMaW5rLnRpdGxlID0gdGhpcy5jdXJyZW50S2V5IHx8ICcnO1xuXHRcdFx0XHR0aGlzLmNhdExpbmsuY2xhc3NOYW1lID0gdGhpcy5jdXJyZW50RXhpc3RzID8gJycgOiAnbmV3Jztcblx0XHRcdFx0dGhpcy5jYXRMaW5rLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG5cdFx0XHRcdGlmICh0aGlzLnVwRG93bkxpbmtzKSB7XG5cdFx0XHRcdFx0dGhpcy51cERvd25MaW5rcy5zdHlsZS5kaXNwbGF5ID0gdGhpcy5jdXJyZW50RXhpc3RzID8gJycgOiAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2hlY2tNdWx0aUlucHV0KCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZXZ0S2lsbChldmVudCk7XG5cdFx0fVxuXHRcdGluYWN0aXZhdGUoKSB7XG5cdFx0XHRpZiAodGhpcy5saXN0KSB7XG5cdFx0XHRcdHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuZW5naW5lU2VsZWN0b3IpIHtcblx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5pc19hY3RpdmUgPSBmYWxzZTtcblx0XHR9XG5cdFx0YWNjZXB0Q2hlY2soZG9udENoZWNrKSB7XG5cdFx0XHR0aGlzLnNhbml0aXplSW5wdXQoKTtcblx0XHRcdGNvbnN0IHZhbHVlID0gdGhpcy50ZXh0LnZhbHVlLnNwbGl0KCd8Jyk7XG5cdFx0XHRsZXQga2V5ID0gbnVsbDtcblx0XHRcdGlmICh2YWx1ZS5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdFssIGtleV0gPSB2YWx1ZTtcblx0XHRcdH1cblx0XHRcdGxldCB2ID0gdmFsdWVbMF0ucmVwbGFjZSgvXy9nLCAnICcpLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKTtcblx0XHRcdGlmIChIQy5jYXBpdGFsaXplUGFnZU5hbWVzKSB7XG5cdFx0XHRcdHYgPSBjYXBpdGFsaXplKHYpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5sYXN0SW5wdXQgPSB2O1xuXHRcdFx0diA9IHJlcGxhY2VTaG9ydGN1dHModiwgSEMuc2hvcnRjdXRzKTtcblx0XHRcdGlmICh2Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHR0aGlzLmNhbmNlbCgpO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRpZiAoXG5cdFx0XHRcdCFkb250Q2hlY2sgJiZcblx0XHRcdFx0KChjb25mLndnTmFtZXNwYWNlTnVtYmVyID09PSAxNCAmJiB2ID09PSBjb25mLndnVGl0bGUpIHx8IChIQy5ibGFja2xpc3QgJiYgSEMuYmxhY2tsaXN0LnRlc3QodikpKVxuXHRcdFx0KSB7XG5cdFx0XHRcdHRoaXMuY2FuY2VsKCk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHRoaXMuY3VycmVudENhdGVnb3J5ID0gdjtcblx0XHRcdHRoaXMuY3VycmVudEtleSA9IGtleTtcblx0XHRcdHRoaXMuY3VycmVudEV4aXN0cyA9IHRoaXMuaW5wdXRFeGlzdHM7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0YWNjZXB0KGV2ZW50KSB7XG5cdFx0XHQvLyAoZXZ0S2V5cyhldmVudCkgJiAxKSAhPT0gMFxuXHRcdFx0Ly8g5b2T5LiU5LuF5b2TZXZ0S2V5cyhldmVudCnkuLox5pe277yM5pW05Liq5Yik5Yir5byP5omN5Li6dHJ1ZVxuXHRcdFx0dGhpcy5ub0NvbW1pdCA9IGV2dEtleXMoZXZlbnQpID09PSAxO1xuXHRcdFx0Y29uc3QgcmVzdWx0ID0gZXZ0S2lsbChldmVudCk7XG5cdFx0XHRpZiAodGhpcy5hY2NlcHRDaGVjaygpKSB7XG5cdFx0XHRcdGNvbnN0IHRvUmVzb2x2ZSA9IFt0aGlzXTtcblx0XHRcdFx0Y29uc3Qgb3JpZ2luYWwgPSB0aGlzLmN1cnJlbnRDYXRlZ29yeTtcblx0XHRcdFx0cmVzb2x2ZU11bHRpKHRvUmVzb2x2ZSwgKHJlc29sdmVkKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHJlc29sdmVkWzBdLmRhYikge1xuXHRcdFx0XHRcdFx0c2hvd0RhYihyZXNvbHZlZFswXSk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChyZXNvbHZlZFswXS5hY2NlcHRDaGVjayh0cnVlKSkge1xuXHRcdFx0XHRcdFx0cmVzb2x2ZWRbMF0uY29tbWl0KFxuXHRcdFx0XHRcdFx0XHRyZXNvbHZlZFswXS5jdXJyZW50Q2F0ZWdvcnkgPT09IG9yaWdpbmFsXG5cdFx0XHRcdFx0XHRcdFx0PyBudWxsXG5cdFx0XHRcdFx0XHRcdFx0OiBnZXRNZXNzYWdlKCdtZXNzYWdlcy1jYXRfcmVzb2x2ZWQnLCBvcmlnaW5hbClcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXHRcdGNsb3NlKCkge1xuXHRcdFx0aWYgKCF0aGlzLmNhdExpbmspIHtcblx0XHRcdFx0Ly8gQ3JlYXRlIGEgY2F0TGlua1xuXHRcdFx0XHR0aGlzLmNhdExpbmsgPSBtYWtlKCdhJyk7XG5cdFx0XHRcdHRoaXMuY2F0TGluay5hcHBlbmQobWFrZSgnZm9vJywgdHJ1ZSkpO1xuXHRcdFx0XHR0aGlzLmNhdExpbmsuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0dGhpcy5zcGFuLmluc2VydEJlZm9yZSh0aGlzLmNhdExpbmssIHRoaXMuc3Bhbi5maXJzdENoaWxkLm5leHRTaWJsaW5nKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuY2F0TGluay5maXJzdENoaWxkLnJlbW92ZSgpO1xuXHRcdFx0dGhpcy5jYXRMaW5rLmFwcGVuZChtYWtlKHRoaXMuY3VycmVudENhdGVnb3J5LCB0cnVlKSk7XG5cdFx0XHR0aGlzLmNhdExpbmsuaHJlZiA9IHdpa2lQYWdlUGF0aChgJHtIQy5jYXRlZ29yeV9jYW5vbmljYWx9OiR7dGhpcy5jdXJyZW50Q2F0ZWdvcnl9YCk7XG5cdFx0XHR0aGlzLmNhdExpbmsuY2xhc3NOYW1lID0gdGhpcy5jdXJyZW50RXhpc3RzID8gJycgOiAnbmV3Jztcblx0XHRcdHRoaXMubGFzdFNhdmVkQ2F0ZWdvcnkgPSB0aGlzLmN1cnJlbnRDYXRlZ29yeTtcblx0XHRcdHRoaXMubGFzdFNhdmVkS2V5ID0gdGhpcy5jdXJyZW50S2V5O1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRFeGlzdHMgPSB0aGlzLmN1cnJlbnRFeGlzdHM7XG5cdFx0XHR0aGlzLmxhc3RTYXZlZEhpZGRlbiA9IHRoaXMuY3VycmVudEhpZGRlbjtcblx0XHRcdC8vIENsb3NlIGZvcm0gYW5kIHJlZGlzcGxheSBjYXRlZ29yeVxuXHRcdFx0dGhpcy5pbmFjdGl2YXRlKCk7XG5cdFx0XHR0aGlzLmZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdHRoaXMuY2F0TGluay50aXRsZSA9IHRoaXMuY3VycmVudEtleSB8fCAnJztcblx0XHRcdHRoaXMuY2F0TGluay5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cdFx0XHRpZiAodGhpcy5pc0FkZENhdGVnb3J5KSB7XG5cdFx0XHRcdGlmIChvblVwbG9hZCAmJiB0aGlzLmxpbmUpIHtcblx0XHRcdFx0XHRuZXcgQ2F0ZWdvcnlFZGl0b3IodGhpcy5saW5lLCBudWxsLCB0aGlzLnNwYW4sIHRydWUpOyAvLyBDcmVhdGUgYSBuZXcgb25lXG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5pc0FkZENhdGVnb3J5ID0gZmFsc2U7XG5cdFx0XHRcdHRoaXMubGlua1NwYW4ucmVtb3ZlKCk7XG5cdFx0XHRcdHRoaXMubWFrZUxpbmtTcGFuKCk7XG5cdFx0XHRcdHRoaXMuc3Bhbi5hcHBlbmQodGhpcy5saW5rU3Bhbik7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIXRoaXMudW5kb0xpbmspIHtcblx0XHRcdFx0Ly8gQXBwZW5kIGFuIHVuZG8gbGluay5cblx0XHRcdFx0Y29uc3Qgc3BhbiA9IG1ha2UoJ3NwYW4nKTtcblx0XHRcdFx0Y29uc3QgbGluayA9IG1ha2UoJ2EnKTtcblx0XHRcdFx0bGluay5ocmVmID0gJyNjYXRsaW5rcyc7XG5cdFx0XHRcdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnJvbGxiYWNrLmJpbmQodGhpcykpO1xuXHRcdFx0XHRsaW5rLmFwcGVuZChtYWtlKEhDLmxpbmtzLnVuZG8sIHRydWUpKTtcblx0XHRcdFx0bGluay50aXRsZSA9IGdldE1lc3NhZ2UoJ3Rvb2x0aXBzLXVuZG8nKTtcblx0XHRcdFx0c3Bhbi5hcHBlbmQobWFrZSgnICcsIHRydWUpKTtcblx0XHRcdFx0c3Bhbi5hcHBlbmQobGluayk7XG5cdFx0XHRcdHRoaXMubm9ybWFsTGlua3MuYXBwZW5kKHNwYW4pO1xuXHRcdFx0XHR0aGlzLnVuZG9MaW5rID0gc3Bhbjtcblx0XHRcdFx0aWYgKCFvblVwbG9hZCkge1xuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHR0aGlzLmNhdExpbmsuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gSEMuYmdfY2hhbmdlZDtcblx0XHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHRcdC8qIGVtcHR5ICovXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy51cERvd25MaW5rcykge1xuXHRcdFx0XHR0aGlzLnVwRG93bkxpbmtzLnN0eWxlLmRpc3BsYXkgPSB0aGlzLmxhc3RTYXZlZEV4aXN0cyA/ICcnIDogJ25vbmUnO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5saW5rU3Bhbi5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cdFx0XHR0aGlzLnN0YXRlID0gQ0hBTkdFRDtcblx0XHRcdGNoZWNrTXVsdGlJbnB1dCgpO1xuXHRcdH1cblx0XHRjb21taXQoKSB7XG5cdFx0XHQvLyBDaGVjayBhZ2FpbiB0byBjYXRjaCBwcm9ibGVtIGNhc2VzIGFmdGVyIHJlZGlyZWN0IHJlc29sdXRpb25cblx0XHRcdGlmIChcblx0XHRcdFx0KHRoaXMuY3VycmVudENhdGVnb3J5ID09PSB0aGlzLm9yaWdpbmFsQ2F0ZWdvcnkgJiZcblx0XHRcdFx0XHQodGhpcy5jdXJyZW50S2V5ID09PSB0aGlzLm9yaWdpbmFsS2V5IHx8XG5cdFx0XHRcdFx0XHQodGhpcy5jdXJyZW50S2V5ID09PSBudWxsICYmIHRoaXMub3JpZ2luYWxLZXkubGVuZ3RoID09PSAwKSkpIHx8XG5cdFx0XHRcdChjb25mLndnTmFtZXNwYWNlTnVtYmVyID09PSAxNCAmJiB0aGlzLmN1cnJlbnRDYXRlZ29yeSA9PT0gY29uZi53Z1RpdGxlKSB8fFxuXHRcdFx0XHQoSEMuYmxhY2tsaXN0ICYmIEhDLmJsYWNrbGlzdC50ZXN0KHRoaXMuY3VycmVudENhdGVnb3J5KSlcblx0XHRcdCkge1xuXHRcdFx0XHR0aGlzLmNhbmNlbCgpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmNsb3NlKCk7XG5cdFx0XHRpZiAoIWNvbW1pdEJ1dHRvbiAmJiAhb25VcGxvYWQpIHtcblx0XHRcdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0XHRcdGluaXRpYXRlRWRpdChcblx0XHRcdFx0XHQoZmFpbHVyZSkgPT4ge1xuXHRcdFx0XHRcdFx0cGVyZm9ybUNoYW5nZXMoZmFpbHVyZSwgc2VsZik7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHQobXNnKSA9PiB7XG5cdFx0XHRcdFx0XHRtdy5ub3RpZnkobXNnLCB7dGFnOiAnaG90Q2F0J30pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmVtb3ZlKGV2ZW50KSB7XG5cdFx0XHQvLyAoZXZ0S2V5cyhldmVudCkgJiAxKVxuXHRcdFx0Ly8g5b2T5LiU5LuF5b2TZXZ0S2V5cyhldmVudCnkuLox5pe277yM5pW05Liq5Yik5Yir5byP5omN5Li6Me+8jOWQpuWImemDveaYrzBcblx0XHRcdHRoaXMuZG9SZW1vdmUoZXZ0S2V5cyhldmVudCkgPT09IDEpO1xuXHRcdFx0cmV0dXJuIGV2dEtpbGwoZXZlbnQpO1xuXHRcdH1cblx0XHRkb1JlbW92ZShub0NvbW1pdCkge1xuXHRcdFx0aWYgKHRoaXMuaXNBZGRDYXRlZ29yeSkge1xuXHRcdFx0XHQvLyBFbXB0eSBpbnB1dCBvbiBhZGRpbmcgYSBuZXcgY2F0ZWdvcnlcblx0XHRcdFx0dGhpcy5jYW5jZWwoKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFjb21taXRCdXR0b24gJiYgIW9uVXBsb2FkKSB7XG5cdFx0XHRcdGZvciAoY29uc3QgZWRpdG9yIG9mIGVkaXRvcnMpIHtcblx0XHRcdFx0XHRpZiAoZWRpdG9yLnN0YXRlICE9PSBVTkNIQU5HRUQpIHtcblx0XHRcdFx0XHRcdHNldE11bHRpSW5wdXQoKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGNvbW1pdEJ1dHRvbikge1xuXHRcdFx0XHR0aGlzLmNhdExpbmsudGl0bGUgPSAnJztcblx0XHRcdFx0dGhpcy5jYXRMaW5rLnN0eWxlLmNzc1RleHQgKz0gJzsgdGV4dC1kZWNvcmF0aW9uIDogbGluZS10aHJvdWdoICFpbXBvcnRhbnQ7Jztcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHR0aGlzLmNhdExpbmsuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gSEMuYmdfY2hhbmdlZDtcblx0XHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdFx0LyogZW1wdHkgKi9cblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLm9yaWdpbmFsU3RhdGUgPSB0aGlzLnN0YXRlO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gREVMRVRFRDtcblx0XHRcdFx0dGhpcy5ub3JtYWxMaW5rcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR0aGlzLnVuZGVsTGluay5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cdFx0XHRcdGNoZWNrTXVsdGlJbnB1dCgpO1xuXHRcdFx0fSBlbHNlIGlmIChvblVwbG9hZCkge1xuXHRcdFx0XHQvLyBSZW1vdmUgdGhpcyBlZGl0b3IgY29tcGxldGVseVxuXHRcdFx0XHR0aGlzLnJlbW92ZUVkaXRvcigpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5vcmlnaW5hbFN0YXRlID0gdGhpcy5zdGF0ZTtcblx0XHRcdFx0dGhpcy5zdGF0ZSA9IERFTEVURUQ7XG5cdFx0XHRcdHRoaXMubm9Db21taXQgPSBub0NvbW1pdCB8fCBIQy5kZWxfbmVlZHNfZGlmZjtcblx0XHRcdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0XHRcdGluaXRpYXRlRWRpdChcblx0XHRcdFx0XHQoZmFpbHVyZSkgPT4ge1xuXHRcdFx0XHRcdFx0cGVyZm9ybUNoYW5nZXMoZmFpbHVyZSwgc2VsZik7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHQobXNnKSA9PiB7XG5cdFx0XHRcdFx0XHRzZWxmLnN0YXRlID0gc2VsZi5vcmlnaW5hbFN0YXRlO1xuXHRcdFx0XHRcdFx0bXcubm90aWZ5KG1zZywge3RhZzogJ2hvdENhdCd9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJlc3RvcmUoZXZlbnQpIHtcblx0XHRcdC8vIENhbiBvY2N1ciBvbmx5IGlmIHdlIGRvIGhhdmUgYSBjb21taXQgYnV0dG9uIGFuZCBhcmUgbm90IG9uIHRoZSB1cGxvYWQgZm9ybVxuXHRcdFx0dGhpcy5jYXRMaW5rLnRpdGxlID0gdGhpcy5jdXJyZW50S2V5IHx8ICcnO1xuXHRcdFx0dGhpcy5jYXRMaW5rLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJyc7XG5cdFx0XHR0aGlzLnN0YXRlID0gdGhpcy5vcmlnaW5hbFN0YXRlO1xuXHRcdFx0aWYgKHRoaXMuc3RhdGUgPT09IFVOQ0hBTkdFRCkge1xuXHRcdFx0XHR0aGlzLmNhdExpbmsuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50Jztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0dGhpcy5jYXRMaW5rLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IEhDLmJnX2NoYW5nZWQ7XG5cdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdC8qIGVtcHR5ICovXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMubm9ybWFsTGlua3Muc3R5bGUuZGlzcGxheSA9ICcnO1xuXHRcdFx0dGhpcy51bmRlbExpbmsuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdGNoZWNrTXVsdGlJbnB1dCgpO1xuXHRcdFx0cmV0dXJuIGV2dEtpbGwoZXZlbnQpO1xuXHRcdH1cblx0XHQvLyBJbnRlcm5hbCBvcGVyYXRpb25zXG5cdFx0c2VsZWN0RW5naW5lKGVuZ2luZU5hbWUpIHtcblx0XHRcdGlmICghdGhpcy5lbmdpbmVTZWxlY3Rvcikge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZW5naW5lU2VsZWN0b3Iub3B0aW9ucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLm9wdGlvbnNbaV0uc2VsZWN0ZWQgPSB0aGlzLmVuZ2luZVNlbGVjdG9yLm9wdGlvbnNbaV0udmFsdWUgPT09IGVuZ2luZU5hbWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHNhbml0aXplSW5wdXQoKSB7XG5cdFx0XHRsZXQgdiA9IHRoaXMudGV4dC52YWx1ZSB8fCAnJztcblx0XHRcdHYgPSB2LnJlcGxhY2UoL14oXFxzfF8pKy8sICcnKTsgLy8gVHJpbSBsZWFkaW5nIGJsYW5rcyBhbmQgdW5kZXJzY29yZXNcblx0XHRcdGNvbnN0IHJlID0gbmV3IFJlZ0V4cChgXigke0hDLmNhdGVnb3J5X3JlZ2V4cH0pOmApO1xuXHRcdFx0aWYgKHJlLnRlc3QodikpIHtcblx0XHRcdFx0diA9IHYuc2xpY2UoTWF0aC5tYXgoMCwgdi5pbmRleE9mKCc6JykgKyAxKSkucmVwbGFjZSgvXihcXHN8XykrLywgJycpO1xuXHRcdFx0fVxuXHRcdFx0diA9IHYucmVwbGFjZSgvXFx1MjAwRSQvLCAnJyk7IC8vIFRyaW0gZW5kaW5nIGxlZnQtdG8tcmlnaHQgbWFya1xuXHRcdFx0aWYgKEhDLmNhcGl0YWxpemVQYWdlTmFtZXMpIHtcblx0XHRcdFx0diA9IGNhcGl0YWxpemUodik7XG5cdFx0XHR9XG5cdFx0XHQvLyBPbmx5IHVwZGF0ZSB0aGUgaW5wdXQgZmllbGQgaWYgdGhlcmUgaXMgYSBkaWZmZXJlbmNlLiBWYXJpb3VzIGJyb3dzZXJzIG90aGVyd2lzZVxuXHRcdFx0Ly8gcmVzZXQgdGhlIHNlbGVjdGlvbiBhbmQgY3Vyc29yIHBvc2l0aW9uIGFmdGVyIGVhY2ggdmFsdWUgcmUtYXNzaWdubWVudC5cblx0XHRcdGlmICh0aGlzLnRleHQudmFsdWUgIT09IG51bGwgJiYgdGhpcy50ZXh0LnZhbHVlICE9PSB2KSB7XG5cdFx0XHRcdHRoaXMudGV4dC52YWx1ZSA9IHY7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdG1ha2VDYWxsKHVybCwgY2FsbGJhY2tPYmosIGVuZ2luZSwgcXVlcnlLZXksIGNsZWFuS2V5KSB7XG5cdFx0XHRsZXQgY2IgPSBjYWxsYmFja09iajtcblx0XHRcdGNvbnN0IGUgPSBlbmdpbmU7XG5cdFx0XHRjb25zdCB2ID0gcXVlcnlLZXk7XG5cdFx0XHRjb25zdCB6ID0gY2xlYW5LZXk7XG5cdFx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRcdGNvbnN0IGRvbmUgPSAoKSA9PiB7XG5cdFx0XHRcdGNiLmNhbGxzTWFkZSsrO1xuXHRcdFx0XHRpZiAoY2IuY2FsbHNNYWRlID09PSBjYi5ub2ZDYWxscykge1xuXHRcdFx0XHRcdGlmIChjYi5leGlzdHMpIHtcblx0XHRcdFx0XHRcdGNiLmFsbFRpdGxlcy5leGlzdHMgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoY2Iubm9ybWFsaXplZCkge1xuXHRcdFx0XHRcdFx0Y2IuYWxsVGl0bGVzLm5vcm1hbGl6ZWQgPSBjYi5ub3JtYWxpemVkO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoIWNiLmRvbnRDYWNoZSAmJiAhc3VnZ2VzdGlvbkNvbmZpZ3NbY2IuZW5naW5lTmFtZV0uY2FjaGVbel0pIHtcblx0XHRcdFx0XHRcdHN1Z2dlc3Rpb25Db25maWdzW2NiLmVuZ2luZU5hbWVdLmNhY2hlW3pdID0gY2IuYWxsVGl0bGVzO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRzZWxmLnRleHQucmVhZE9ubHkgPSBmYWxzZTtcblx0XHRcdFx0XHRpZiAoIWNiLmNhbmNlbGxlZCkge1xuXHRcdFx0XHRcdFx0c2VsZi5zaG93U3VnZ2VzdGlvbnMoY2IuYWxsVGl0bGVzLCBjYi5ub0NvbXBsZXRpb24sIHYsIGNiLmVuZ2luZU5hbWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoY2IgPT09IHNlbGYuY2FsbGJhY2tPYmopIHtcblx0XHRcdFx0XHRcdHNlbGYuY2FsbGJhY2tPYmogPSBudWxsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjYiA9IHVuZGVmaW5lZDtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdCQuZ2V0SlNPTih1cmwsIChqc29uKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHRpdGxlcyA9IGUuaGFuZGxlcihqc29uLCB6KTtcblx0XHRcdFx0aWYgKHRpdGxlcyAmJiB0aXRsZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdGNiLmFsbFRpdGxlcyA9XG5cdFx0XHRcdFx0XHRjYi5hbGxUaXRsZXMgPT09IG51bGxcblx0XHRcdFx0XHRcdFx0PyB0aXRsZXNcblx0XHRcdFx0XHRcdFx0OiBbLi4uY2IuYWxsVGl0bGVzLCAuLi4oQXJyYXkuaXNBcnJheSh0aXRsZXMpID8gdGl0bGVzIDogW3RpdGxlc10pXTtcblx0XHRcdFx0XHRpZiAodGl0bGVzLmV4aXN0cykge1xuXHRcdFx0XHRcdFx0Y2IuZXhpc3RzID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHRpdGxlcy5ub3JtYWxpemVkKSB7XG5cdFx0XHRcdFx0XHRjYi5ub3JtYWxpemVkID0gdGl0bGVzLm5vcm1hbGl6ZWQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGRvbmUoKTtcblx0XHRcdH0pLmZhaWwoKHJlcSkgPT4ge1xuXHRcdFx0XHRpZiAoIXJlcSkge1xuXHRcdFx0XHRcdG5vU3VnZ2VzdGlvbnMgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNiLmRvbnRDYWNoZSA9IHRydWU7XG5cdFx0XHRcdGRvbmUoKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRjYWxsYmFja09iaiA9IG51bGw7XG5cdFx0dGV4dGNoYW5nZShkb250X2F1dG9jb21wbGV0ZSwgZm9yY2UpIHtcblx0XHRcdC8vIEhpZGUgYWxsIG90aGVyIGxpc3RzXG5cdFx0XHRtYWtlQWN0aXZlKHRoaXMpO1xuXHRcdFx0Ly8gR2V0IGlucHV0IHZhbHVlLCBvbWl0IHNvcnQga2V5LCBpZiBhbnlcblx0XHRcdHRoaXMuc2FuaXRpemVJbnB1dCgpO1xuXHRcdFx0bGV0IHYgPSB0aGlzLnRleHQudmFsdWU7XG5cdFx0XHQvLyBEaXNyZWdhcmQgYW55dGhpbmcgYWZ0ZXIgYSBwaXBlLlxuXHRcdFx0Y29uc3QgcGlwZSA9IHYuaW5kZXhPZignfCcpO1xuXHRcdFx0aWYgKHBpcGUgPj0gMCkge1xuXHRcdFx0XHR0aGlzLmN1cnJlbnRLZXkgPSB2LnNsaWNlKE1hdGgubWF4KDAsIHBpcGUgKyAxKSk7XG5cdFx0XHRcdHYgPSB2LnNsaWNlKDAsIE1hdGgubWF4KDAsIHBpcGUpKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuY3VycmVudEtleSA9IG51bGw7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5sYXN0SW5wdXQgPT09IHYgJiYgIWZvcmNlKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH0gLy8gTm8gY2hhbmdlXG5cdFx0XHRpZiAodGhpcy5sYXN0SW5wdXQgIT09IHYpIHtcblx0XHRcdFx0Y2hlY2tNdWx0aUlucHV0KCk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmxhc3RJbnB1dCA9IHY7XG5cdFx0XHR0aGlzLmxhc3RSZWFsSW5wdXQgPSB2O1xuXHRcdFx0Ly8gTWFyayBibGFja2xpc3RlZCBpbnB1dHMuXG5cdFx0XHR0aGlzLm9rLmRpc2FibGVkID0gdi5sZW5ndGggPiAwICYmIEhDLmJsYWNrbGlzdCAmJiBIQy5ibGFja2xpc3QudGVzdCh2KTtcblx0XHRcdGlmIChub1N1Z2dlc3Rpb25zKSB7XG5cdFx0XHRcdC8vIE5vIEFqYXg6IGp1c3QgbWFrZSBzdXJlIHRoZSBsaXN0IGlzIGhpZGRlblxuXHRcdFx0XHRpZiAodGhpcy5saXN0KSB7XG5cdFx0XHRcdFx0dGhpcy5saXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRoaXMuZW5naW5lU2VsZWN0b3IpIHtcblx0XHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRoaXMuaWNvbikge1xuXHRcdFx0XHRcdHRoaXMuaWNvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmICh2Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHR0aGlzLnNob3dTdWdnZXN0aW9ucyhbXSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGxldCBjbGVhbktleSA9IHYucmVwbGFjZSgvW1xcdTIwMEVcXHUyMDBGXFx1MjAyQS1cXHUyMDJFXS9nLCAnJykucmVwbGFjZSh3aWtpVGV4dEJsYW5rUkUsICcgJyk7XG5cdFx0XHRjbGVhbktleSA9IHJlcGxhY2VTaG9ydGN1dHMoY2xlYW5LZXksIEhDLnNob3J0Y3V0cyk7XG5cdFx0XHRjbGVhbktleSA9IGNsZWFuS2V5LnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKTtcblx0XHRcdGlmIChjbGVhbktleS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0dGhpcy5zaG93U3VnZ2VzdGlvbnMoW10pO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5jYWxsYmFja09iaikge1xuXHRcdFx0XHR0aGlzLmNhbGxiYWNrT2JqLmNhbmNlbGxlZCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBlbmdpbmVOYW1lID0gc3VnZ2VzdGlvbkNvbmZpZ3NbdGhpcy5lbmdpbmVdID8gdGhpcy5lbmdpbmUgOiAnY29tYmluZWQnO1xuXHRcdFx0ZG9udF9hdXRvY29tcGxldGUgfHw9IHN1Z2dlc3Rpb25Db25maWdzW2VuZ2luZU5hbWVdLm5vQ29tcGxldGlvbjtcblx0XHRcdGlmIChzdWdnZXN0aW9uQ29uZmlnc1tlbmdpbmVOYW1lXS5jYWNoZVtjbGVhbktleV0pIHtcblx0XHRcdFx0dGhpcy5zaG93U3VnZ2VzdGlvbnMoc3VnZ2VzdGlvbkNvbmZpZ3NbZW5naW5lTmFtZV0uY2FjaGVbY2xlYW5LZXldLCBkb250X2F1dG9jb21wbGV0ZSwgdiwgZW5naW5lTmFtZSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHtlbmdpbmVzfSA9IHN1Z2dlc3Rpb25Db25maWdzW2VuZ2luZU5hbWVdO1xuXHRcdFx0dGhpcy5jYWxsYmFja09iaiA9IHtcblx0XHRcdFx0YWxsVGl0bGVzOiBudWxsLFxuXHRcdFx0XHRjYWxsc01hZGU6IDAsXG5cdFx0XHRcdG5vZkNhbGxzOiBlbmdpbmVzLmxlbmd0aCxcblx0XHRcdFx0bm9Db21wbGV0aW9uOiBkb250X2F1dG9jb21wbGV0ZSxcblx0XHRcdFx0ZW5naW5lTmFtZSxcblx0XHRcdH07XG5cdFx0XHR0aGlzLm1ha2VDYWxscyhlbmdpbmVzLCB0aGlzLmNhbGxiYWNrT2JqLCB2LCBjbGVhbktleSk7XG5cdFx0fVxuXHRcdG1ha2VDYWxscyhlbmdpbmVzLCBjYiwgdiwgY2xlYW5LZXkpIHtcblx0XHRcdGZvciAoY29uc3QgZW5naW5lXyBvZiBlbmdpbmVzKSB7XG5cdFx0XHRcdGNvbnN0IGVuZ2luZSA9IHN1Z2dlc3Rpb25FbmdpbmVzW2VuZ2luZV9dO1xuXHRcdFx0XHRjb25zdCB1cmwgPSBjb25mLndnU2NyaXB0UGF0aCArIGVuZ2luZS51cmkucmVwbGFjZSgvXFwkMS9nLCBlbmNvZGVVUklDb21wb25lbnQoY2xlYW5LZXkpKTtcblx0XHRcdFx0dGhpcy5tYWtlQ2FsbCh1cmwsIGNiLCBlbmdpbmUsIHYsIGNsZWFuS2V5KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0c2hvd1N1Z2dlc3Rpb25zKHRpdGxlcywgZG9udEF1dG9jb21wbGV0ZSwgcXVlcnlLZXksIGVuZ2luZU5hbWUpIHtcblx0XHRcdHRoaXMudGV4dC5yZWFkT25seSA9IGZhbHNlO1xuXHRcdFx0dGhpcy5kYWIgPSBudWxsO1xuXHRcdFx0dGhpcy5zaG93c0xpc3QgPSBmYWxzZTtcblx0XHRcdGlmICghdGhpcy5saXN0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmIChub1N1Z2dlc3Rpb25zKSB7XG5cdFx0XHRcdGlmICh0aGlzLmxpc3QpIHtcblx0XHRcdFx0XHR0aGlzLmxpc3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodGhpcy5lbmdpbmVTZWxlY3Rvcikge1xuXHRcdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodGhpcy5pY29uKSB7XG5cdFx0XHRcdFx0dGhpcy5pY29uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5pbnB1dEV4aXN0cyA9IHRydWU7IC8vIERlZmF1bHQuLi5cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5lbmdpbmVOYW1lID0gZW5naW5lTmFtZTtcblx0XHRcdGlmIChlbmdpbmVOYW1lKSB7XG5cdFx0XHRcdGlmICghdGhpcy5lbmdpbmVTZWxlY3Rvcikge1xuXHRcdFx0XHRcdHRoaXMuZW5naW5lTmFtZSA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAodGhpcy5lbmdpbmVTZWxlY3Rvcikge1xuXHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHR9XG5cdFx0XHRpZiAocXVlcnlLZXkpIHtcblx0XHRcdFx0aWYgKHRoaXMubGFzdElucHV0LmluZGV4T2YocXVlcnlLZXkpKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHR0aGlzLmxhc3RRdWVyeSAmJlxuXHRcdFx0XHRcdHRoaXMubGFzdElucHV0LmluZGV4T2YodGhpcy5sYXN0UXVlcnkpID09PSAwICYmXG5cdFx0XHRcdFx0dGhpcy5sYXN0UXVlcnkubGVuZ3RoID4gcXVlcnlLZXkubGVuZ3RoXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5sYXN0UXVlcnkgPSBxdWVyeUtleTtcblx0XHRcdC8vIEdldCBjdXJyZW50IGlucHV0IHRleHRcblx0XHRcdGxldCB2ID0gdGhpcy50ZXh0LnZhbHVlLnNwbGl0KCd8Jyk7XG5cdFx0XHRjb25zdCBrZXkgPSB2Lmxlbmd0aCA+IDEgPyBgfCR7dlsxXX1gIDogJyc7XG5cdFx0XHR2ID0gSEMuY2FwaXRhbGl6ZVBhZ2VOYW1lcyA/IGNhcGl0YWxpemUodlswXSkgOiB2WzBdO1xuXHRcdFx0bGV0IHZOb3JtYWxpemVkID0gdjtcblx0XHRcdGNvbnN0IGtub3duVG9FeGlzdCA9IHRpdGxlcyAmJiB0aXRsZXMuZXhpc3RzO1xuXHRcdFx0bGV0IGk7XG5cdFx0XHRpZiAodGl0bGVzKSB7XG5cdFx0XHRcdGlmICh0aXRsZXMubm9ybWFsaXplZCAmJiB2LmluZGV4T2YocXVlcnlLZXkpID09PSAwKSB7XG5cdFx0XHRcdFx0Ly8gV2UgZ290IGJhY2sgYSBkaWZmZXJlbnQgbm9ybWFsaXphdGlvbiB0aGFuIHdoYXQgaXMgaW4gdGhlIGlucHV0IGZpZWxkXG5cdFx0XHRcdFx0dk5vcm1hbGl6ZWQgPSB0aXRsZXMubm9ybWFsaXplZCArIHYuc2xpY2UocXVlcnlLZXkubGVuZ3RoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCB2TG93ID0gdk5vcm1hbGl6ZWQudG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0Ly8gU3RyaXAgYmxhY2tsaXN0ZWQgY2F0ZWdvcmllc1xuXHRcdFx0XHRpZiAoSEMuYmxhY2tsaXN0KSB7XG5cdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IHRpdGxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0aWYgKEhDLmJsYWNrbGlzdC50ZXN0KHRpdGxlc1tpXSkpIHtcblx0XHRcdFx0XHRcdFx0dGl0bGVzLnNwbGljZShpLCAxKTtcblx0XHRcdFx0XHRcdFx0aS0tO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR0aXRsZXMuc29ydCgoYSwgYikgPT4ge1xuXHRcdFx0XHRcdGlmIChhID09PSBiKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGEuaW5kZXhPZihiKSA9PT0gMCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIDE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIGEgYmVnaW5zIHdpdGggYjogYSA+IGJcblx0XHRcdFx0XHRpZiAoYi5pbmRleE9mKGEpID09PSAwKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gLTE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIGIgYmVnaW5zIHdpdGggYTogYSA8IGJcblx0XHRcdFx0XHQvLyBPcGVuc2VhcmNoIG1heSByZXR1cm4gc3R1ZmYgbm90IGJlZ2lubmluZyB3aXRoIHRoZSBzZWFyY2ggcHJlZml4IVxuXHRcdFx0XHRcdGxldCBwcmVmaXhNYXRjaEEgPSBhLmluZGV4T2Yodk5vcm1hbGl6ZWQpID09PSAwID8gMSA6IDA7XG5cdFx0XHRcdFx0bGV0IHByZWZpeE1hdGNoQiA9IGIuaW5kZXhPZih2Tm9ybWFsaXplZCkgPT09IDAgPyAxIDogMDtcblx0XHRcdFx0XHRpZiAocHJlZml4TWF0Y2hBICE9PSBwcmVmaXhNYXRjaEIpIHtcblx0XHRcdFx0XHRcdHJldHVybiBwcmVmaXhNYXRjaEIgLSBwcmVmaXhNYXRjaEE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIENhc2UtaW5zZW5zaXRpdmUgcHJlZml4IG1hdGNoIVxuXHRcdFx0XHRcdGNvbnN0IGFMb3cgPSBhLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdFx0Y29uc3QgYkxvdyA9IGIudG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0XHRwcmVmaXhNYXRjaEEgPSBhTG93LmluZGV4T2YodkxvdykgPT09IDAgPyAxIDogMDtcblx0XHRcdFx0XHRwcmVmaXhNYXRjaEIgPSBiTG93LmluZGV4T2YodkxvdykgPT09IDAgPyAxIDogMDtcblx0XHRcdFx0XHRpZiAocHJlZml4TWF0Y2hBICE9PSBwcmVmaXhNYXRjaEIpIHtcblx0XHRcdFx0XHRcdHJldHVybiBwcmVmaXhNYXRjaEIgLSBwcmVmaXhNYXRjaEE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChhIDwgYikge1xuXHRcdFx0XHRcdFx0cmV0dXJuIC0xO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoYiA8IGEpIHtcblx0XHRcdFx0XHRcdHJldHVybiAxO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdC8vIFJlbW92ZSBkdXBsaWNhdGVzIGFuZCBzZWxmLXJlZmVyZW5jZXNcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IHRpdGxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmIChcblx0XHRcdFx0XHRcdChpICsgMSA8IHRpdGxlcy5sZW5ndGggJiYgdGl0bGVzW2ldID09PSB0aXRsZXNbaSArIDFdKSB8fFxuXHRcdFx0XHRcdFx0KGNvbmYud2dOYW1lc3BhY2VOdW1iZXIgPT09IDE0ICYmIHRpdGxlc1tpXSA9PT0gY29uZi53Z1RpdGxlKVxuXHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0dGl0bGVzLnNwbGljZShpLCAxKTtcblx0XHRcdFx0XHRcdGktLTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICghdGl0bGVzIHx8IHRpdGxlcy5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0aWYgKHRoaXMubGlzdCkge1xuXHRcdFx0XHRcdHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0aGlzLmVuZ2luZVNlbGVjdG9yKSB7XG5cdFx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChlbmdpbmVOYW1lICYmIHN1Z2dlc3Rpb25Db25maWdzW2VuZ2luZU5hbWVdICYmICFzdWdnZXN0aW9uQ29uZmlnc1tlbmdpbmVOYW1lXS50ZW1wKSB7XG5cdFx0XHRcdFx0aWYgKHRoaXMuaWNvbikge1xuXHRcdFx0XHRcdFx0dGhpcy5pY29uLnNyYyA9IEhDLmV4aXN0c05vO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLmlucHV0RXhpc3RzID0gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgW2ZpcnN0VGl0bGVdID0gdGl0bGVzO1xuXHRcdFx0Y29uc3QgY29tcGxldGVkID0gdGhpcy5hdXRvQ29tcGxldGUoZmlyc3RUaXRsZSwgdiwgdk5vcm1hbGl6ZWQsIGtleSwgZG9udEF1dG9jb21wbGV0ZSk7XG5cdFx0XHRjb25zdCBleGlzdGluZyA9IGNvbXBsZXRlZCB8fCBrbm93blRvRXhpc3QgfHwgZmlyc3RUaXRsZSA9PT0gcmVwbGFjZVNob3J0Y3V0cyh2LCBIQy5zaG9ydGN1dHMpO1xuXHRcdFx0aWYgKGVuZ2luZU5hbWUgJiYgc3VnZ2VzdGlvbkNvbmZpZ3NbZW5naW5lTmFtZV0gJiYgIXN1Z2dlc3Rpb25Db25maWdzW2VuZ2luZU5hbWVdLnRlbXApIHtcblx0XHRcdFx0dGhpcy5pY29uLnNyYyA9IGV4aXN0aW5nID8gSEMuZXhpc3RzWWVzIDogSEMuZXhpc3RzTm87XG5cdFx0XHRcdHRoaXMuaW5wdXRFeGlzdHMgPSBleGlzdGluZztcblx0XHRcdH1cblx0XHRcdGlmIChjb21wbGV0ZWQpIHtcblx0XHRcdFx0dGhpcy5sYXN0SW5wdXQgPSBmaXJzdFRpdGxlO1xuXHRcdFx0XHRpZiAodGl0bGVzLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHRcdHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHRcdGlmICh0aGlzLmVuZ2luZVNlbGVjdG9yKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ly8gKFJlLSlmaWxsIHRoZSBsaXN0XG5cdFx0XHR3aGlsZSAodGhpcy5saXN0LmZpcnN0Q2hpbGQpIHtcblx0XHRcdFx0dGhpcy5saXN0LmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG5cdFx0XHR9XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgdGl0bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGNvbnN0IG9wdCA9IG1ha2UoJ29wdGlvbicpO1xuXHRcdFx0XHRvcHQuYXBwZW5kKG1ha2UodGl0bGVzW2ldLCB0cnVlKSk7XG5cdFx0XHRcdG9wdC5zZWxlY3RlZCA9IGNvbXBsZXRlZCAmJiBpID09PSAwO1xuXHRcdFx0XHR0aGlzLmxpc3QuYXBwZW5kKG9wdCk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmRpc3BsYXlMaXN0KCk7XG5cdFx0fVxuXHRcdGRpc3BsYXlMaXN0KCkge1xuXHRcdFx0dGhpcy5zaG93c0xpc3QgPSB0cnVlO1xuXHRcdFx0aWYgKCF0aGlzLmlzX2FjdGl2ZSkge1xuXHRcdFx0XHR0aGlzLmxpc3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0aWYgKHRoaXMuZW5naW5lU2VsZWN0b3IpIHtcblx0XHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0bGV0IG5vZkl0ZW1zID0gdGhpcy5saXN0Lm9wdGlvbnMubGVuZ3RoID4gSEMubGlzdFNpemUgPyBIQy5saXN0U2l6ZSA6IHRoaXMubGlzdC5vcHRpb25zLmxlbmd0aDtcblx0XHRcdGlmIChub2ZJdGVtcyA8PSAxKSB7XG5cdFx0XHRcdG5vZkl0ZW1zID0gMjtcblx0XHRcdH1cblx0XHRcdHRoaXMubGlzdC5zaXplID0gbm9mSXRlbXM7XG5cdFx0XHR0aGlzLmxpc3Quc3R5bGUuYWxpZ24gPSBpc19ydGwgPyAncmlnaHQnIDogJ2xlZnQnO1xuXHRcdFx0dGhpcy5saXN0LnN0eWxlLnpJbmRleCA9IDU7XG5cdFx0XHR0aGlzLmxpc3Quc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuXHRcdFx0Ly8gQ29tcHV0ZSBpbml0aWFsIGxpc3QgcG9zaXRpb24uIEZpcnN0IHRoZSBoZWlnaHQuXG5cdFx0XHRjb25zdCBhbmNob3IgPSBpc19ydGwgPyAncmlnaHQnIDogJ2xlZnQnO1xuXHRcdFx0bGV0IGxpc3RoID0gMDtcblx0XHRcdGlmICh0aGlzLmxpc3Quc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG5cdFx0XHRcdC8vIE9mZi1zY3JlZW4gZGlzcGxheSB0byBnZXQgdGhlIGhlaWdodFxuXHRcdFx0XHR0aGlzLmxpc3Quc3R5bGUudG9wID0gYCR7dGhpcy50ZXh0Lm9mZnNldFRvcH1weGA7XG5cdFx0XHRcdHRoaXMubGlzdC5zdHlsZVthbmNob3JdID0gJy0xMDAwMHB4Jztcblx0XHRcdFx0dGhpcy5saXN0LnN0eWxlLmRpc3BsYXkgPSAnJztcblx0XHRcdFx0bGlzdGggPSB0aGlzLmxpc3Qub2Zmc2V0SGVpZ2h0O1xuXHRcdFx0XHR0aGlzLmxpc3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGxpc3RoID0gdGhpcy5saXN0Lm9mZnNldEhlaWdodDtcblx0XHRcdH1cblx0XHRcdC8vIEFwcHJveGltYXRlIGNhbGN1bGF0aW9uIG9mIG1heGltdW0gbGlzdCBzaXplXG5cdFx0XHRsZXQgbWF4TGlzdEhlaWdodCA9IGxpc3RoO1xuXHRcdFx0aWYgKG5vZkl0ZW1zIDwgSEMubGlzdFNpemUpIHtcblx0XHRcdFx0bWF4TGlzdEhlaWdodCA9IChsaXN0aCAvIG5vZkl0ZW1zKSAqIEhDLmxpc3RTaXplO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3Qgdmlld3BvcnQgPSAod2hhdCkgPT4ge1xuXHRcdFx0XHRpZiAoaXNfd2Via2l0ICYmICFkb2N1bWVudC5ldmFsdWF0ZSkge1xuXHRcdFx0XHRcdC8vIFNhZmFyaSA8IDMuMFxuXHRcdFx0XHRcdHJldHVybiB3aW5kb3dbYGlubmVyJHt3aGF0fWBdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IHMgPSBgY2xpZW50JHt3aGF0fWA7XG5cdFx0XHRcdGlmICh3aW5kb3cub3BlcmEpIHtcblx0XHRcdFx0XHRyZXR1cm4gJCgnYm9keScpWzBdW3NdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50W3NdIDogMCkgfHwgJCgnYm9keScpWzBdW3NdIHx8IDA7XG5cdFx0XHR9O1xuXHRcdFx0Y29uc3Qgc2Nyb2xsX29mZnNldCA9ICh3aGF0KSA9PiB7XG5cdFx0XHRcdGNvbnN0IHMgPSBgc2Nyb2xsJHt3aGF0fWA7XG5cdFx0XHRcdGxldCByZXN1bHQgPSAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50W3NdIDogMCkgfHwgJCgnYm9keScpWzBdW3NdIHx8IDA7XG5cdFx0XHRcdGlmIChpc19ydGwgJiYgd2hhdCA9PT0gJ0xlZnQnKSB7XG5cdFx0XHRcdFx0Ly8gUlRMIGluY29uc2lzdGVuY2llcy5cblx0XHRcdFx0XHQvLyBGRjogMCBhdCB0aGUgZmFyIHJpZ2h0LCB0aGVuIGluY3JlYXNpbmdseSBuZWdhdGl2ZSB2YWx1ZXMuXG5cdFx0XHRcdFx0Ly8gSUUgPj0gODogMCBhdCB0aGUgZmFyIHJpZ2h0LCB0aGVuIGluY3JlYXNpbmdseSBwb3NpdGl2ZSB2YWx1ZXMuXG5cdFx0XHRcdFx0Ly8gV2Via2l0OiBzY3JvbGxXaWR0aCAtIGNsaWVudFdpZHRoIGF0IHRoZSBmYXIgcmlnaHQsIHRoZW4gZG93biB0byB6ZXJvLlxuXHRcdFx0XHRcdC8vIE9wZXJhOiBkb24ndCBrbm93Li4uXG5cdFx0XHRcdFx0aWYgKHJlc3VsdCA8IDApIHtcblx0XHRcdFx0XHRcdHJlc3VsdCA9IC1yZXN1bHQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICghaXNfd2Via2l0KSB7XG5cdFx0XHRcdFx0XHRyZXN1bHQgPSBzY3JvbGxfb2Zmc2V0KCdXaWR0aCcpIC0gdmlld3BvcnQoJ1dpZHRoJykgLSByZXN1bHQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIE5vdyBhbGwgaGF2ZSB3ZWJraXQgYmVoYXZpb3IsIGkuZS4gemVybyBpZiBhdCB0aGUgbGVmdG1vc3QgZWRnZS5cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fTtcblx0XHRcdGNvbnN0IHBvc2l0aW9uID0gKG5vZGUpID0+IHtcblx0XHRcdFx0Ly8gU3RyaXBwZWQtZG93biBzaW1wbGlmaWVkIHBvc2l0aW9uIGZ1bmN0aW9uLiBJdCdzIGdvb2QgZW5vdWdoIGZvciBvdXIgcHVycG9zZXMuXG5cdFx0XHRcdGlmIChub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCkge1xuXHRcdFx0XHRcdGNvbnN0IGJveCA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdHg6IE1hdGgucm91bmQoYm94LmxlZnQgKyBzY3JvbGxfb2Zmc2V0KCdMZWZ0JykpLFxuXHRcdFx0XHRcdFx0eTogTWF0aC5yb3VuZChib3gudG9wICsgc2Nyb2xsX29mZnNldCgnVG9wJykpLFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblx0XHRcdFx0bGV0IHQgPSAwO1xuXHRcdFx0XHRsZXQgbCA9IDA7XG5cdFx0XHRcdGRvIHtcblx0XHRcdFx0XHR0ICs9IG5vZGUub2Zmc2V0VG9wIHx8IDA7XG5cdFx0XHRcdFx0bCArPSBub2RlLm9mZnNldExlZnQgfHwgMDtcblx0XHRcdFx0XHRub2RlID0gbm9kZS5vZmZzZXRQYXJlbnQ7XG5cdFx0XHRcdH0gd2hpbGUgKG5vZGUpO1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHg6IGwsXG5cdFx0XHRcdFx0eTogdCxcblx0XHRcdFx0fTtcblx0XHRcdH07XG5cdFx0XHRjb25zdCB0ZXh0UG9zID0gcG9zaXRpb24odGhpcy50ZXh0KTtcblx0XHRcdGNvbnN0IG5sID0gMDtcblx0XHRcdGxldCBudCA9IDA7XG5cdFx0XHQvLyBPcGVyYSA5LjUgc29tZWhvdyBoYXMgb2Zmc2V0V2lkdGggPSAwIGhlcmU/PyBVc2UgdGhlIG5leHQgYmVzdCB2YWx1ZS4uLlxuXHRcdFx0bGV0IG9mZnNldCA9IDA7XG5cdFx0XHRjb25zdCB0ZXh0Qm94V2lkdGggPSB0aGlzLnRleHQub2Zmc2V0V2lkdGggfHwgdGhpcy50ZXh0LmNsaWVudFdpZHRoO1xuXHRcdFx0aWYgKHRoaXMuZW5naW5lTmFtZSkge1xuXHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLnpJbmRleCA9IDU7XG5cdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuXHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLndpZHRoID0gYCR7dGV4dEJveFdpZHRofXB4YDtcblx0XHRcdFx0Ly8gRmlndXJlIG91dCB0aGUgaGVpZ2h0IG9mIHRoaXMgc2VsZWN0b3I6IGRpc3BsYXkgaXQgb2ZmLXNjcmVlbiwgdGhlbiBoaWRlIGl0IGFnYWluLlxuXHRcdFx0XHRpZiAodGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcblx0XHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlW2FuY2hvcl0gPSAnLTEwMDAwcHgnO1xuXHRcdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUudG9wID0gJzAnO1xuXHRcdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICcnO1xuXHRcdFx0XHRcdG9mZnNldCA9IHRoaXMuZW5naW5lU2VsZWN0b3Iub2Zmc2V0SGVpZ2h0O1xuXHRcdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRvZmZzZXQgPSB0aGlzLmVuZ2luZVNlbGVjdG9yLm9mZnNldEhlaWdodDtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlW2FuY2hvcl0gPSBgJHtubH1weGA7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGV4dFBvcy55IDwgbWF4TGlzdEhlaWdodCArIG9mZnNldCArIDEpIHtcblx0XHRcdFx0Ly8gVGhlIGxpc3QgbWlnaHQgZXh0ZW5kIGJleW9uZCB0aGUgdXBwZXIgYm9yZGVyIG9mIHRoZSBwYWdlLiBMZXQncyBhdm9pZCB0aGF0IGJ5IHBsYWNpbmcgaXRcblx0XHRcdFx0Ly8gYmVsb3cgdGhlIGlucHV0IHRleHQgZmllbGQuXG5cdFx0XHRcdG50ID0gdGhpcy50ZXh0Lm9mZnNldEhlaWdodCArIG9mZnNldCArIDE7XG5cdFx0XHRcdGlmICh0aGlzLmVuZ2luZU5hbWUpIHtcblx0XHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLnRvcCA9IGAke3RoaXMudGV4dC5vZmZzZXRIZWlnaHR9cHhgO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRudCA9IC1saXN0aCAtIG9mZnNldCAtIDE7XG5cdFx0XHRcdGlmICh0aGlzLmVuZ2luZU5hbWUpIHtcblx0XHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLnRvcCA9IGAkey0ob2Zmc2V0ICsgMSl9cHhgO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmxpc3Quc3R5bGUudG9wID0gYCR7bnR9cHhgO1xuXHRcdFx0dGhpcy5saXN0LnN0eWxlLndpZHRoID0gJyc7IC8vIE5vIGZpeGVkIHdpZHRoICh5ZXQpXG5cdFx0XHR0aGlzLmxpc3Quc3R5bGVbYW5jaG9yXSA9IGAke25sfXB4YDtcblx0XHRcdGlmICh0aGlzLmVuZ2luZU5hbWUpIHtcblx0XHRcdFx0dGhpcy5zZWxlY3RFbmdpbmUodGhpcy5lbmdpbmVOYW1lKTtcblx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmxpc3Quc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdFx0XHQvLyBTZXQgdGhlIHdpZHRoIG9mIHRoZSBsaXN0XG5cdFx0XHRpZiAodGhpcy5saXN0Lm9mZnNldFdpZHRoIDwgdGV4dEJveFdpZHRoKSB7XG5cdFx0XHRcdHRoaXMubGlzdC5zdHlsZS53aWR0aCA9IGAke3RleHRCb3hXaWR0aH1weGA7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdC8vIElmIHRoZSBsaXN0IGlzIHdpZGVyIHRoYW4gdGhlIHRleHRib3g6IG1ha2Ugc3VyZSBpdCBmaXRzIGhvcml6b250YWxseSBpbnRvIHRoZSBicm93c2VyIHdpbmRvd1xuXHRcdFx0Y29uc3Qgc2Nyb2xsID0gc2Nyb2xsX29mZnNldCgnTGVmdCcpO1xuXHRcdFx0Y29uc3Qgdmlld193ID0gdmlld3BvcnQoJ1dpZHRoJyk7XG5cdFx0XHRsZXQgdyA9IHRoaXMubGlzdC5vZmZzZXRXaWR0aDtcblx0XHRcdGNvbnN0IGxfcG9zID0gcG9zaXRpb24odGhpcy5saXN0KTtcblx0XHRcdGxldCBsZWZ0ID0gbF9wb3MueDtcblx0XHRcdGxldCByaWdodCA9IGxlZnQgKyB3O1xuXHRcdFx0aWYgKGxlZnQgPCBzY3JvbGwgfHwgcmlnaHQgPiBzY3JvbGwgKyB2aWV3X3cpIHtcblx0XHRcdFx0aWYgKHcgPiB2aWV3X3cpIHtcblx0XHRcdFx0XHR3ID0gdmlld193O1xuXHRcdFx0XHRcdHRoaXMubGlzdC5zdHlsZS53aWR0aCA9IGAke3d9cHhgO1xuXHRcdFx0XHRcdGlmIChpc19ydGwpIHtcblx0XHRcdFx0XHRcdGxlZnQgPSByaWdodCAtIHc7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJpZ2h0ID0gbGVmdCArIHc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGxldCByZWxhdGl2ZV9vZmZzZXQgPSAwO1xuXHRcdFx0XHRpZiAobGVmdCA8IHNjcm9sbCkge1xuXHRcdFx0XHRcdHJlbGF0aXZlX29mZnNldCA9IHNjcm9sbCAtIGxlZnQ7XG5cdFx0XHRcdH0gZWxzZSBpZiAocmlnaHQgPiBzY3JvbGwgKyB2aWV3X3cpIHtcblx0XHRcdFx0XHRyZWxhdGl2ZV9vZmZzZXQgPSAtKHJpZ2h0IC0gc2Nyb2xsIC0gdmlld193KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoaXNfcnRsKSB7XG5cdFx0XHRcdFx0cmVsYXRpdmVfb2Zmc2V0ID0gLXJlbGF0aXZlX29mZnNldDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAocmVsYXRpdmVfb2Zmc2V0KSB7XG5cdFx0XHRcdFx0dGhpcy5saXN0LnN0eWxlW2FuY2hvcl0gPSBgJHtubCArIHJlbGF0aXZlX29mZnNldH1weGA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0YXV0b0NvbXBsZXRlKG5ld1ZhbCwgYWN0VmFsLCBub3JtYWxpemVkQWN0VmFsLCBrZXksIGRvbnRNb2RpZnkpIHtcblx0XHRcdGlmIChuZXdWYWwgPT09IGFjdFZhbCkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGlmIChkb250TW9kaWZ5IHx8IHRoaXMuaW1lIHx8ICF0aGlzLmNhblNlbGVjdCgpKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdC8vIElmIHdlIGNhbid0IHNlbGVjdCBwcm9wZXJseSBvciBhbiBJTUUgY29tcG9zaXRpb24gaXMgb25nb2luZywgYXV0b2NvbXBsZXRpb24gd291bGQgYmUgYSBtYWpvciBhbm5veWFuY2UgdG8gdGhlIHVzZXIuXG5cdFx0XHRpZiAobmV3VmFsLmluZGV4T2YoYWN0VmFsKSkge1xuXHRcdFx0XHQvLyBNYXliZSBpdCdsbCB3b3JrIHdpdGggdGhlIG5vcm1hbGl6ZWQgdmFsdWUgKE5GQyk/XG5cdFx0XHRcdGlmIChub3JtYWxpemVkQWN0VmFsICYmIG5ld1ZhbC5pbmRleE9mKG5vcm1hbGl6ZWRBY3RWYWwpID09PSAwKSB7XG5cdFx0XHRcdFx0aWYgKHRoaXMubGFzdFJlYWxJbnB1dCA9PT0gYWN0VmFsKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmxhc3RSZWFsSW5wdXQgPSBub3JtYWxpemVkQWN0VmFsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRhY3RWYWwgPSBub3JtYWxpemVkQWN0VmFsO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ly8gQWN0dWFsIGlucHV0IGlzIGEgcHJlZml4IG9mIHRoZSBuZXcgdGV4dC4gRmlsbCBpbiBuZXcgdGV4dCwgc2VsZWN0aW5nIHRoZSBuZXdseSBhZGRlZCBzdWZmaXhcblx0XHRcdC8vIHN1Y2ggdGhhdCBpdCBjYW4gYmUgZWFzaWx5IHJlbW92ZWQgYnkgdHlwaW5nIGJhY2tzcGFjZSBpZiB0aGUgc3VnZ2VzdGlvbiBpcyB1bndhbnRlZC5cblx0XHRcdHRoaXMudGV4dC5mb2N1cygpO1xuXHRcdFx0dGhpcy50ZXh0LnZhbHVlID0gbmV3VmFsICsga2V5O1xuXHRcdFx0dGhpcy5zZXRTZWxlY3Rpb24oYWN0VmFsLmxlbmd0aCwgbmV3VmFsLmxlbmd0aCk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0Y2FuU2VsZWN0KCkge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0dGhpcy50ZXh0LnNldFNlbGVjdGlvblJhbmdlIHx8XG5cdFx0XHRcdHRoaXMudGV4dC5jcmVhdGVUZXh0UmFuZ2UgfHxcblx0XHRcdFx0KHRoaXMudGV4dC5zZWxlY3Rpb25TdGFydCAhPT0gdW5kZWZpbmVkICYmIHRoaXMudGV4dC5zZWxlY3Rpb25FbmQgIT09IHVuZGVmaW5lZClcblx0XHRcdCk7XG5cdFx0fVxuXHRcdHNldFNlbGVjdGlvbihmcm9tLCB0bykge1xuXHRcdFx0Ly8gdGhpcy50ZXh0IG11c3QgYmUgZm9jdXNlZCAoYXQgbGVhc3Qgb24gSUUpXG5cdFx0XHRpZiAoIXRoaXMudGV4dC52YWx1ZSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy50ZXh0LnNldFNlbGVjdGlvblJhbmdlKSB7XG5cdFx0XHRcdC8vIGUuZy4ga2h0bWxcblx0XHRcdFx0dGhpcy50ZXh0LnNldFNlbGVjdGlvblJhbmdlKGZyb20sIHRvKTtcblx0XHRcdH0gZWxzZSBpZiAodGhpcy50ZXh0LnNlbGVjdGlvblN0YXJ0ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0aWYgKGZyb20gPiB0aGlzLnRleHQuc2VsZWN0aW9uU3RhcnQpIHtcblx0XHRcdFx0XHR0aGlzLnRleHQuc2VsZWN0aW9uRW5kID0gdG87XG5cdFx0XHRcdFx0dGhpcy50ZXh0LnNlbGVjdGlvblN0YXJ0ID0gZnJvbTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnRleHQuc2VsZWN0aW9uU3RhcnQgPSBmcm9tO1xuXHRcdFx0XHRcdHRoaXMudGV4dC5zZWxlY3Rpb25FbmQgPSB0bztcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICh0aGlzLnRleHQuY3JlYXRlVGV4dFJhbmdlKSB7XG5cdFx0XHRcdC8vIElFXG5cdFx0XHRcdGNvbnN0IG5ld19zZWxlY3Rpb24gPSB0aGlzLnRleHQuY3JlYXRlVGV4dFJhbmdlKCk7XG5cdFx0XHRcdG5ld19zZWxlY3Rpb24ubW92ZSgnY2hhcmFjdGVyJywgZnJvbSk7XG5cdFx0XHRcdG5ld19zZWxlY3Rpb24ubW92ZUVuZCgnY2hhcmFjdGVyJywgdG8gLSBmcm9tKTtcblx0XHRcdFx0bmV3X3NlbGVjdGlvbi5zZWxlY3QoKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Z2V0U2VsZWN0aW9uKCkge1xuXHRcdFx0bGV0IGZyb20gPSAwO1xuXHRcdFx0Ly8gdGhpcy50ZXh0IG11c3QgYmUgZm9jdXNlZCAoYXQgbGVhc3Qgb24gSUUpXG5cdFx0XHRsZXQgdG8gPSAwO1xuXHRcdFx0aWYgKCF0aGlzLnRleHQudmFsdWUpIHtcblx0XHRcdFx0Ly8gTm8gdGV4dC5cblx0XHRcdH0gZWxzZSBpZiAodGhpcy50ZXh0LnNlbGVjdGlvblN0YXJ0ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0ZnJvbSA9IHRoaXMudGV4dC5zZWxlY3Rpb25TdGFydDtcblx0XHRcdFx0dG8gPSB0aGlzLnRleHQuc2VsZWN0aW9uRW5kO1xuXHRcdFx0fSBlbHNlIGlmIChkb2N1bWVudC5zZWxlY3Rpb24gJiYgZG9jdW1lbnQuc2VsZWN0aW9uLmNyZWF0ZVJhbmdlKSB7XG5cdFx0XHRcdC8vIElFXG5cdFx0XHRcdGNvbnN0IHJuZyA9IGRvY3VtZW50LnNlbGVjdGlvbi5jcmVhdGVSYW5nZSgpLmR1cGxpY2F0ZSgpO1xuXHRcdFx0XHRpZiAocm5nLnBhcmVudE5vZGUoKSA9PT0gdGhpcy50ZXh0KSB7XG5cdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdGNvbnN0IHRleHRSbmcgPSB0aGlzLnRleHQuY3JlYXRlVGV4dFJhbmdlKCk7XG5cdFx0XHRcdFx0XHR0ZXh0Um5nLm1vdmUoJ2NoYXJhY3RlcicsIDApO1xuXHRcdFx0XHRcdFx0dGV4dFJuZy5zZXRFbmRQb2ludCgnRW5kVG9FbmQnLCBybmcpO1xuXHRcdFx0XHRcdFx0Ly8gV2UncmUgaW4gYSBzaW5nbGUtbGluZSBpbnB1dCBib3g6IG5vIG5lZWQgdG8gY2FyZSBhYm91dCBJRSdzIHN0cmFuZ2Vcblx0XHRcdFx0XHRcdC8vIGhhbmRsaW5nIG9mIGxpbmUgZW5kc1xuXHRcdFx0XHRcdFx0dG8gPSB0ZXh0Um5nLnRleHQubGVuZ3RoO1xuXHRcdFx0XHRcdFx0dGV4dFJuZy5zZXRFbmRQb2ludCgnRW5kVG9TdGFydCcsIHJuZyk7XG5cdFx0XHRcdFx0XHRmcm9tID0gdGV4dFJuZy50ZXh0Lmxlbmd0aDtcblx0XHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHRcdGZyb20gPSB0aGlzLnRleHQudmFsdWUubGVuZ3RoO1xuXHRcdFx0XHRcdFx0dG8gPSBmcm9tOyAvLyBBdCBlbmQgb2YgdGV4dFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0c3RhcnQ6IGZyb20sXG5cdFx0XHRcdGVuZDogdG8sXG5cdFx0XHR9O1xuXHRcdH1cblx0XHRzYXZlVmlldygpIHtcblx0XHRcdHRoaXMubGFzdFNlbGVjdGlvbiA9IHRoaXMuZ2V0U2VsZWN0aW9uKCk7XG5cdFx0fVxuXHRcdHByb2Nlc3NLZXkoZXZlbnQpIHtcblx0XHRcdGxldCBkaXIgPSAwO1xuXHRcdFx0c3dpdGNoICh0aGlzLmxhc3RLZXkpIHtcblx0XHRcdFx0Y2FzZSBVUDpcblx0XHRcdFx0XHRkaXIgPSAtMTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBET1dOOlxuXHRcdFx0XHRcdGRpciA9IDE7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgUEdVUDpcblx0XHRcdFx0XHRkaXIgPSAtSEMubGlzdFNpemU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgUEdET1dOOlxuXHRcdFx0XHRcdGRpciA9IEhDLmxpc3RTaXplO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIEVTQzpcblx0XHRcdFx0XHQvLyBJbmhpYml0IGRlZmF1bHQgYmVoYXZpb3IgKHJldmVydCB0byBsYXN0IHJlYWwgaW5wdXQgaW4gRkY6IHdlIGRvIHRoYXQgb3Vyc2VsdmVzKVxuXHRcdFx0XHRcdHJldHVybiBldnRLaWxsKGV2ZW50KTtcblx0XHRcdH1cblx0XHRcdGlmIChkaXIpIHtcblx0XHRcdFx0aWYgKHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScpIHtcblx0XHRcdFx0XHQvLyBMaXN0IGlzIHZpc2libGUsIHNvIHRoZXJlIGFyZSBzdWdnZXN0aW9uc1xuXHRcdFx0XHRcdHRoaXMuaGlnaGxpZ2h0U3VnZ2VzdGlvbihkaXIpO1xuXHRcdFx0XHRcdC8vIEtpbGwgdGhlIGV2ZW50LCBvdGhlcndpc2Ugc29tZSBicm93c2VycyAoZS5nLiwgRmlyZWZveCkgbWF5IGFkZGl0aW9uYWxseSB0cmVhdCBhbiB1cC1hcnJvd1xuXHRcdFx0XHRcdC8vIGFzIFwicGxhY2UgdGhlIHRleHQgY3Vyc29yIGF0IHRoZSBmcm9udFwiLCB3aGljaCB3ZSBkb24ndCB3YW50IGhlcmUuXG5cdFx0XHRcdFx0cmV0dXJuIGV2dEtpbGwoZXZlbnQpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0XHRcdHRoaXMua2V5Q291bnQgPD0gMSAmJlxuXHRcdFx0XHRcdCghdGhpcy5jYWxsYmFja09iaiB8fCB0aGlzLmNhbGxiYWNrT2JqLmNhbGxzTWFkZSA9PT0gdGhpcy5jYWxsYmFja09iai5ub2ZDYWxscylcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0Ly8gSWYgbm8gc3VnZ2VzdGlvbnMgZGlzcGxheWVkLCBnZXQgdGhlbSwgdW5sZXNzIHdlJ3JlIGFscmVhZHkgZ2V0dGluZyB0aGVtLlxuXHRcdFx0XHRcdHRoaXMudGV4dGNoYW5nZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0aGlnaGxpZ2h0U3VnZ2VzdGlvbihkaXIpIHtcblx0XHRcdGlmIChub1N1Z2dlc3Rpb25zIHx8ICF0aGlzLmxpc3QgfHwgdGhpcy5saXN0LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBjdXJyID0gdGhpcy5saXN0LnNlbGVjdGVkSW5kZXg7XG5cdFx0XHRsZXQgdGd0ID0gLTE7XG5cdFx0XHRpZiAoZGlyID09PSAwKSB7XG5cdFx0XHRcdGlmIChjdXJyIDwgMCB8fCBjdXJyID49IHRoaXMubGlzdC5vcHRpb25zLmxlbmd0aCkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0Z3QgPSBjdXJyO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGd0ID0gY3VyciA8IDAgPyAwIDogY3VyciArIGRpcjtcblx0XHRcdFx0dGd0ID0gdGd0IDwgMCA/IDAgOiB0Z3Q7XG5cdFx0XHRcdGlmICh0Z3QgPj0gdGhpcy5saXN0Lm9wdGlvbnMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0dGd0ID0gdGhpcy5saXN0Lm9wdGlvbnMubGVuZ3RoIC0gMTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKHRndCAhPT0gY3VyciB8fCBkaXIgPT09IDApIHtcblx0XHRcdFx0aWYgKGN1cnIgPj0gMCAmJiBjdXJyIDwgdGhpcy5saXN0Lm9wdGlvbnMubGVuZ3RoICYmIGRpciAhPT0gMCkge1xuXHRcdFx0XHRcdHRoaXMubGlzdC5vcHRpb25zW2N1cnJdLnNlbGVjdGVkID0gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5saXN0Lm9wdGlvbnNbdGd0XS5zZWxlY3RlZCA9IHRydWU7XG5cdFx0XHRcdC8vIEdldCBjdXJyZW50IGlucHV0IHRleHRcblx0XHRcdFx0Y29uc3QgdiA9IHRoaXMudGV4dC52YWx1ZS5zcGxpdCgnfCcpO1xuXHRcdFx0XHRjb25zdCBrZXkgPSB2Lmxlbmd0aCA+IDEgPyBgfCR7dlsxXX1gIDogJyc7XG5cdFx0XHRcdGNvbnN0IGNvbXBsZXRlZCA9IHRoaXMuYXV0b0NvbXBsZXRlKHRoaXMubGlzdC5vcHRpb25zW3RndF0udGV4dCwgdGhpcy5sYXN0UmVhbElucHV0LCBudWxsLCBrZXksIGZhbHNlKTtcblx0XHRcdFx0aWYgKCFjb21wbGV0ZWQgfHwgdGhpcy5saXN0Lm9wdGlvbnNbdGd0XS50ZXh0ID09PSB0aGlzLmxhc3RSZWFsSW5wdXQpIHtcblx0XHRcdFx0XHR0aGlzLnRleHQudmFsdWUgPSB0aGlzLmxpc3Qub3B0aW9uc1t0Z3RdLnRleHQgKyBrZXk7XG5cdFx0XHRcdFx0aWYgKHRoaXMuY2FuU2VsZWN0KCkpIHtcblx0XHRcdFx0XHRcdHRoaXMuc2V0U2VsZWN0aW9uKHRoaXMubGlzdC5vcHRpb25zW3RndF0udGV4dC5sZW5ndGgsIHRoaXMubGlzdC5vcHRpb25zW3RndF0udGV4dC5sZW5ndGgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmxhc3RJbnB1dCA9IHRoaXMubGlzdC5vcHRpb25zW3RndF0udGV4dDtcblx0XHRcdFx0dGhpcy5pbnB1dEV4aXN0cyA9IHRydWU7IC8vIE1pZ2h0IGJlIHdyb25nIGlmIGZyb20gYSBkYWIgbGlzdC4uLlxuXHRcdFx0XHRpZiAodGhpcy5pY29uKSB7XG5cdFx0XHRcdFx0dGhpcy5pY29uLnNyYyA9IEhDLmV4aXN0c1llcztcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gQ0hBTkdFX1BFTkRJTkc7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0cmVzZXRLZXlTZWxlY3Rpb24oKSB7XG5cdFx0XHRpZiAobm9TdWdnZXN0aW9ucyB8fCAhdGhpcy5saXN0IHx8IHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgY3VyciA9IHRoaXMubGlzdC5zZWxlY3RlZEluZGV4O1xuXHRcdFx0aWYgKGN1cnIgPj0gMCAmJiBjdXJyIDwgdGhpcy5saXN0Lm9wdGlvbnMubGVuZ3RoKSB7XG5cdFx0XHRcdHRoaXMubGlzdC5vcHRpb25zW2N1cnJdLnNlbGVjdGVkID0gZmFsc2U7XG5cdFx0XHRcdC8vIEdldCBjdXJyZW50IGlucHV0IHRleHRcblx0XHRcdFx0Y29uc3QgdiA9IHRoaXMudGV4dC52YWx1ZS5zcGxpdCgnfCcpO1xuXHRcdFx0XHRjb25zdCBrZXkgPSB2Lmxlbmd0aCA+IDEgPyBgfCR7dlsxXX1gIDogJyc7XG5cdFx0XHRcdC8vIEVTQyBpcyBoYW5kbGVkIHN0cmFuZ2VseSBieSBzb21lIGJyb3dzZXJzIChlLmcuLCBGRik7IHNvbWVob3cgaXQgcmVzZXRzIHRoZSBpbnB1dCB2YWx1ZSBiZWZvcmVcblx0XHRcdFx0Ly8gb3VyIGV2ZW50IGhhbmRsZXJzIGV2ZXIgZ2V0IGEgY2hhbmNlIHRvIHJ1bi5cblx0XHRcdFx0bGV0IHJlc3VsdCA9IHZbMF0gIT09IHRoaXMubGFzdElucHV0O1xuXHRcdFx0XHRpZiAodlswXSAhPT0gdGhpcy5sYXN0UmVhbElucHV0KSB7XG5cdFx0XHRcdFx0dGhpcy50ZXh0LnZhbHVlID0gdGhpcy5sYXN0UmVhbElucHV0ICsga2V5O1xuXHRcdFx0XHRcdHJlc3VsdCA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5sYXN0SW5wdXQgPSB0aGlzLmxhc3RSZWFsSW5wdXQ7XG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cdGNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiB7XG5cdFx0Ly8gVXNlciBjb25maWd1cmF0aW9uczogRG8gdGhpcyBoZXJlLCBjYWxsZWQgZnJvbSB0aGUgb25sb2FkIGhhbmRsZXIsIHNvIHRoYXQgdXNlcnMgY2FuXG5cdFx0Ly8gb3ZlcnJpZGUgaXQgZWFzaWx5IGluIHRoZWlyIG93biB1c2VyIHNjcmlwdCBmaWxlcyBieSBqdXN0IGRlY2xhcmluZyB2YXJpYWJsZXMuXG5cdFx0Y29uc3QgY29uZmlnID0ge307XG5cdFx0SEMuZG9udF9hZGRfdG9fd2F0Y2hsaXN0ID1cblx0XHRcdHdpbmRvdy5ob3RjYXRfZG9udF9hZGRfdG9fd2F0Y2hsaXN0ID09PSB1bmRlZmluZWRcblx0XHRcdFx0PyBjb25maWcuSG90Q2F0RG9udEFkZFRvV2F0Y2hsaXN0ID09PSB1bmRlZmluZWRcblx0XHRcdFx0XHQ/IEhDLmRvbnRfYWRkX3RvX3dhdGNobGlzdFxuXHRcdFx0XHRcdDogY29uZmlnLkhvdENhdERvbnRBZGRUb1dhdGNobGlzdFxuXHRcdFx0XHQ6ICEhd2luZG93LmhvdGNhdF9kb250X2FkZF90b193YXRjaGxpc3Q7XG5cdFx0SEMubm9fYXV0b2NvbW1pdCA9XG5cdFx0XHR3aW5kb3cuaG90Y2F0X25vX2F1dG9jb21taXQgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHQ/IGNvbmZpZy5Ib3RDYXROb0F1dG9Db21taXQgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdD8gY29uZi53Z05hbWVzcGFjZU51bWJlciAlIDJcblx0XHRcdFx0XHRcdD8gdHJ1ZVxuXHRcdFx0XHRcdFx0OiBIQy5ub19hdXRvY29tbWl0IC8vIE9uIHRhbGsgbmFtZXNwYWNlIGRlZmF1bHQgYXV0b2NvbW1pdCBvZmZcblx0XHRcdFx0XHQ6IGNvbmZpZy5Ib3RDYXROb0F1dG9Db21taXRcblx0XHRcdFx0OiAhIXdpbmRvdy5ob3RjYXRfbm9fYXV0b2NvbW1pdDtcblx0XHRIQy5kZWxfbmVlZHNfZGlmZiA9XG5cdFx0XHR3aW5kb3cuaG90Y2F0X2RlbF9uZWVkc19kaWZmID09PSB1bmRlZmluZWRcblx0XHRcdFx0PyBjb25maWcuSG90Q2F0RGVsTmVlZHNEaWZmID09PSB1bmRlZmluZWRcblx0XHRcdFx0XHQ/IEhDLmRlbF9uZWVkc19kaWZmXG5cdFx0XHRcdFx0OiBjb25maWcuSG90Q2F0RGVsTmVlZHNEaWZmXG5cdFx0XHRcdDogISF3aW5kb3cuaG90Y2F0X2RlbF9uZWVkc19kaWZmO1xuXHRcdEhDLnN1Z2dlc3RfZGVsYXkgPSB3aW5kb3cuaG90Y2F0X3N1Z2dlc3Rpb25fZGVsYXkgfHwgY29uZmlnLkhvdENhdFN1Z2dlc3Rpb25EZWxheSB8fCBIQy5zdWdnZXN0X2RlbGF5O1xuXHRcdEhDLmVkaXRib3hfd2lkdGggPSB3aW5kb3cuaG90Y2F0X2VkaXRib3hfd2lkdGggfHwgY29uZmlnLkhvdENhdEVkaXRCb3hXaWR0aCB8fCBIQy5lZGl0Ym94X3dpZHRoO1xuXHRcdEhDLnN1Z2dlc3Rpb25zID0gd2luZG93LmhvdGNhdF9zdWdnZXN0aW9ucyB8fCBjb25maWcuSG90Q2F0U3VnZ2VzdGlvbnMgfHwgSEMuc3VnZ2VzdGlvbnM7XG5cdFx0aWYgKHR5cGVvZiBIQy5zdWdnZXN0aW9ucyAhPT0gJ3N0cmluZycgfHwgIXN1Z2dlc3Rpb25Db25maWdzW0hDLnN1Z2dlc3Rpb25zXSkge1xuXHRcdFx0SEMuc3VnZ2VzdGlvbnMgPSAnY29tYmluZWQnO1xuXHRcdH1cblx0XHRIQy5maXhlZF9zZWFyY2ggPVxuXHRcdFx0d2luZG93LmhvdGNhdF9zdWdnZXN0aW9uc19maXhlZCA9PT0gdW5kZWZpbmVkXG5cdFx0XHRcdD8gY29uZmlnLkhvdENhdEZpeGVkU3VnZ2VzdGlvbnMgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdD8gSEMuZml4ZWRfc2VhcmNoXG5cdFx0XHRcdFx0OiBjb25maWcuSG90Q2F0Rml4ZWRTdWdnZXN0aW9uc1xuXHRcdFx0XHQ6ICEhd2luZG93LmhvdGNhdF9zdWdnZXN0aW9uc19maXhlZDtcblx0XHRIQy5zaW5nbGVfbWlub3IgPVxuXHRcdFx0d2luZG93LmhvdGNhdF9zaW5nbGVfY2hhbmdlc19hcmVfbWlub3IgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHQ/IGNvbmZpZy5Ib3RDYXRNaW5vclNpbmdsZUNoYW5nZXMgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdD8gSEMuc2luZ2xlX21pbm9yXG5cdFx0XHRcdFx0OiBjb25maWcuSG90Q2F0TWlub3JTaW5nbGVDaGFuZ2VzXG5cdFx0XHRcdDogISF3aW5kb3cuaG90Y2F0X3NpbmdsZV9jaGFuZ2VzX2FyZV9taW5vcjtcblx0XHRIQy5iZ19jaGFuZ2VkID0gd2luZG93LmhvdGNhdF9jaGFuZ2VkX2JhY2tncm91bmQgfHwgY29uZmlnLkhvdENhdENoYW5nZWRCYWNrZ3JvdW5kIHx8IEhDLmJnX2NoYW5nZWQ7XG5cdFx0SEMudXNlX3VwX2Rvd24gPVxuXHRcdFx0d2luZG93LmhvdGNhdF91c2VfY2F0ZWdvcnlfbGlua3MgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHQ/IGNvbmZpZy5Ib3RDYXRVc2VDYXRlZ29yeUxpbmtzID09PSB1bmRlZmluZWRcblx0XHRcdFx0XHQ/IEhDLnVzZV91cF9kb3duXG5cdFx0XHRcdFx0OiBjb25maWcuSG90Q2F0VXNlQ2F0ZWdvcnlMaW5rc1xuXHRcdFx0XHQ6ICEhd2luZG93LmhvdGNhdF91c2VfY2F0ZWdvcnlfbGlua3M7XG5cdFx0SEMubGlzdFNpemUgPSB3aW5kb3cuaG90Y2F0X2xpc3Rfc2l6ZSB8fCBjb25maWcuSG90Q2F0TGlzdFNpemUgfHwgSEMubGlzdFNpemU7XG5cdFx0SEMuY2hhbmdlVGFnID0gY29uZmlnLkhvdENhdENoYW5nZVRhZyB8fCAnJztcblx0XHQvLyBUaGUgbmV4dCB3aG9sZSBzaGViYW5nIGlzIG5lZWRlZCwgYmVjYXVzZSBtYW51YWwgdGFncyBnZXQgbm90IHN1Ym1pdHRlZCBleGNlcHQgb2Ygc2F2ZVxuXHRcdGlmIChIQy5jaGFuZ2VUYWcpIHtcblx0XHRcdGNvbnN0IGVGb3JtID0gZG9jdW1lbnQuZWRpdGZvcm07XG5cdFx0XHRjb25zdCBjYXRSZWdFeHAgPSBuZXcgUmVnRXhwKGBeXFxcXFtcXFxcWygke0hDLmNhdGVnb3J5X3JlZ2V4cH0pOmApO1xuXHRcdFx0bGV0IG9sZFR4dDtcblx0XHRcdC8vIFJldHVybnMgdHJ1ZSBpZiBtaW5vciBjaGFuZ2Vcblx0XHRcdGNvbnN0IGlzTWlub3JDaGFuZ2UgPSAoKSA9PiB7XG5cdFx0XHRcdGxldCBuZXdUeHQgPSBlRm9ybS53cFRleHRib3gxO1xuXHRcdFx0XHRpZiAoIW5ld1R4dCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRuZXdUeHQgPSBuZXdUeHQudmFsdWU7XG5cdFx0XHRcdGNvbnN0IG9sZExpbmVzID0gb2xkVHh0Lm1hdGNoKC9eLiokL2dtKTtcblx0XHRcdFx0Y29uc3QgbmV3TGluZXMgPSBuZXdUeHQubWF0Y2goL14uKiQvZ20pO1xuXHRcdFx0XHRsZXQgY0FycjsgLy8gY2hhbmdlc1xuXHRcdFx0XHRjb25zdCBleGNlcHQgPSAoYUFyciwgYkFycikgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IHJlc3VsdCA9IFtdO1xuXHRcdFx0XHRcdGxldCBsQXJyOyAvLyBzbWFsbGVyXG5cdFx0XHRcdFx0bGV0IC8vIGxhcmdlclxuXHRcdFx0XHRcdFx0c0Fycjtcblx0XHRcdFx0XHRpZiAoYUFyci5sZW5ndGggPCBiQXJyLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0bEFyciA9IGJBcnI7XG5cdFx0XHRcdFx0XHRzQXJyID0gYUFycjtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0bEFyciA9IGFBcnI7XG5cdFx0XHRcdFx0XHRzQXJyID0gYkFycjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Zm9yIChjb25zdCBpdGVtIG9mIGxBcnIpIHtcblx0XHRcdFx0XHRcdGNvbnN0IGluZCA9IHNBcnIuaW5kZXhPZihpdGVtKTtcblx0XHRcdFx0XHRcdGlmIChpbmQgPT09IC0xKSB7XG5cdFx0XHRcdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW0pO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0c0Fyci5zcGxpY2UoaW5kLCAxKTsgLy8gZG9uJ3QgY2hlY2sgdGhpcyBpdGVtIGFnYWluXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBbLi4ucmVzdWx0LCAuLi5zQXJyXTtcblx0XHRcdFx0fTtcblx0XHRcdFx0Y0FyciA9IGV4Y2VwdChvbGRMaW5lcywgbmV3TGluZXMpO1xuXHRcdFx0XHRpZiAoY0Fyci5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0Y0FyciA9IGNBcnIuZmlsdGVyKChjKSA9PiB7XG5cdFx0XHRcdFx0XHRjID0gYy50cmltKCk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gYyAmJiAhY2F0UmVnRXhwLnRlc3QoYyk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGNBcnIubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0b2xkVHh0ID0gbmV3VHh0O1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRjb25mLndnQWN0aW9uID09PSAnc3VibWl0JyAmJlxuXHRcdFx0XHRjb25mLndnQXJ0aWNsZUlkICYmXG5cdFx0XHRcdGVGb3JtICYmXG5cdFx0XHRcdGVGb3JtLndwU3VtbWFyeSAmJlxuXHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2lraURpZmYnKVxuXHRcdFx0KSB7XG5cdFx0XHRcdGNvbnN0IHN1bSA9IGVGb3JtLndwU3VtbWFyeTtcblx0XHRcdFx0Y29uc3Qgc3VtQSA9IGVGb3JtLndwQXV0b1N1bW1hcnk7XG5cdFx0XHRcdGlmIChzdW0udmFsdWUgJiYgc3VtQS52YWx1ZSA9PT0gSEMuY2hhbmdlVGFnKSB7XG5cdFx0XHRcdFx0Ly8gSG90Q2F0IGRpZmZcblx0XHRcdFx0XHQvLyBNRDUgaGFzaCBvZiB0aGUgZW1wdHkgc3RyaW5nLCBhcyBIb3RDYXQgZWRpdCBpcyBiYXNlZCBvbiBlbXB0eSBzdW1cblx0XHRcdFx0XHRzdW1BLnZhbHVlID0gc3VtQS52YWx1ZS5yZXBsYWNlKEhDLmNoYW5nZVRhZywgJ2Q0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0MjdlJyk7XG5cdFx0XHRcdFx0Ly8gQXR0ciBjcmVhdGlvbiBhbmQgZXZlbnQgaGFuZGxpbmcgaXMgbm90IHNhbWUgaW4gYWxsIChvbGQpIGJyb3dzZXJzIHNvIHVzZSAkXG5cdFx0XHRcdFx0Y29uc3QgJGN0ID0gJCgnPGlucHV0PicpXG5cdFx0XHRcdFx0XHQuYXR0cih7XG5cdFx0XHRcdFx0XHRcdHR5cGU6ICdoaWRkZW4nLFxuXHRcdFx0XHRcdFx0XHRuYW1lOiAnd3BDaGFuZ2VUYWdzJyxcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQudmFsKEhDLmNoYW5nZVRhZyk7XG5cdFx0XHRcdFx0JChlRm9ybSkuYXBwZW5kKCRjdCk7XG5cdFx0XHRcdFx0b2xkVHh0ID0gZUZvcm0ud3BUZXh0Ym94MS52YWx1ZTtcblx0XHRcdFx0XHRjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblx0XHRcdFx0XHQkYm9keS5maW5kKCcjd3BTYXZlJykub25lKCdjbGljaycsICgpID0+IHtcblx0XHRcdFx0XHRcdGlmICgkY3QudmFsKCkpIHtcblx0XHRcdFx0XHRcdFx0c3VtLnZhbHVlID0gc3VtLnZhbHVlLnJlcGxhY2UoXG5cdFx0XHRcdFx0XHRcdFx0Z2V0TWVzc2FnZSgnbWVzc2FnZXMtdXNpbmcnKSB8fCBnZXRNZXNzYWdlKCdtZXNzYWdlcy1wcmVmaXgnKSxcblx0XHRcdFx0XHRcdFx0XHQnJ1xuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGNvbnN0IHJlbW92ZUNoYW5nZVRhZyA9ICgpID0+IHtcblx0XHRcdFx0XHRcdCQoZUZvcm0ud3BUZXh0Ym94MSlcblx0XHRcdFx0XHRcdFx0LmFkZChzdW0pXG5cdFx0XHRcdFx0XHRcdC5vbmUoJ2lucHV0JywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGlzTWlub3JDaGFuZ2UoKSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZW1vdmVDaGFuZ2VUYWcoKTtcblx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCRjdC52YWwoJycpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH0sIDUwMCk7XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0cmVtb3ZlQ2hhbmdlVGFnKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gTnVtZXJpYyBpbnB1dCwgbWFrZSBzdXJlIHdlIGhhdmUgYSBudW1lcmljIHZhbHVlXG5cdFx0SEMubGlzdFNpemUgPSBOdW1iZXIucGFyc2VJbnQoSEMubGlzdFNpemUsIDEwKTtcblx0XHRpZiAoTnVtYmVyLmlzTmFOKEhDLmxpc3RTaXplKSB8fCBIQy5saXN0U2l6ZSA8IDUpIHtcblx0XHRcdEhDLmxpc3RTaXplID0gNTtcblx0XHR9XG5cdFx0SEMubGlzdFNpemUgPSBNYXRoLm1pbihIQy5saXN0U2l6ZSwgMzApOyAvLyBNYXggc2l6ZVxuXHRcdC8vIExvY2FsaXplIHNlYXJjaCBlbmdpbmUgbmFtZXNcblx0XHRmb3IgKGNvbnN0IFtrZXksIHN1Z2dlc3Rpb25Db25maWddIG9mIE9iamVjdC5lbnRyaWVzKHN1Z2dlc3Rpb25Db25maWdzKSkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aWYgKGtleSAmJiBnZXRNZXNzYWdlKGBlbmdpbmVfbmFtZXMtJHtrZXl9YCkpIHtcblx0XHRcdFx0XHRzdWdnZXN0aW9uQ29uZmlnLm5hbWUgPSBnZXRNZXNzYWdlKGBlbmdpbmVfbmFtZXMtJHtrZXl9YCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gQ2F0Y2ggYm90aCBuYXRpdmUgUlRMIGFuZCBcImZha2VkXCIgUlRMIHRocm91Z2ggW1tNZWRpYVdpa2k6UnRsLmpzXV1cblx0XHRpc19ydGwgPSBoYXNDbGFzcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JyksICdydGwnKTtcblx0XHRpZiAoIWlzX3J0bCkge1xuXHRcdFx0aWYgKGRvY3VtZW50LmRlZmF1bHRWaWV3ICYmIGRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUpIHtcblx0XHRcdFx0Ly8gR2Vja28gZXRjLlxuXHRcdFx0XHRpc19ydGwgPSBkb2N1bWVudC5kZWZhdWx0Vmlld1xuXHRcdFx0XHRcdC5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSwgbnVsbClcblx0XHRcdFx0XHQuZ2V0UHJvcGVydHlWYWx1ZSgnZGlyZWN0aW9uJyk7XG5cdFx0XHR9IGVsc2UgaWYgKCQoJ2JvZHknKVswXS5jdXJyZW50U3R5bGUpIHtcblx0XHRcdFx0Ly8gSUUsIGhhcyBzdWJ0bGUgZGlmZmVyZW5jZXMgdG8gZ2V0Q29tcHV0ZWRTdHlsZVxuXHRcdFx0XHRpc19ydGwgPSAkKCdib2R5JylbMF0uY3VycmVudFN0eWxlLmRpcmVjdGlvbjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIE5vdCBleGFjdGx5IHJpZ2h0LCBidXQgYmVzdCBlZmZvcnRcblx0XHRcdFx0aXNfcnRsID0gJCgnYm9keScpWzBdLnN0eWxlLmRpcmVjdGlvbjtcblx0XHRcdH1cblx0XHRcdGlzX3J0bCA9IGlzX3J0bCA9PT0gJ3J0bCc7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBjYW5fZWRpdCA9ICgpID0+IHtcblx0XHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhLWVkaXQnKSAhPT0gbnVsbDtcblx0fTtcblx0Ly8gTGVnYWN5IHN0dWZmXG5cdGNvbnN0IGNsb3NlRm9ybSA9IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBDbG9zZSBhbGwgb3BlbiBlZGl0b3JzIHdpdGhvdXQgcmVkaXJlY3QgcmVzb2x1dGlvbiBhbmQgb3RoZXIgYXN5bmNocm9ub3VzIHN0dWZmLlxuXHRcdGZvciAoY29uc3QgZWRpdCBvZiBlZGl0b3JzKSB7XG5cdFx0XHRpZiAoZWRpdC5zdGF0ZSA9PT0gT1BFTikge1xuXHRcdFx0XHRlZGl0LmNhbmNlbCgpO1xuXHRcdFx0fSBlbHNlIGlmIChlZGl0LnN0YXRlID09PSBDSEFOR0VfUEVORElORykge1xuXHRcdFx0XHRlZGl0LnNhbml0aXplSW5wdXQoKTtcblx0XHRcdFx0Y29uc3QgdmFsdWUgPSBlZGl0LnRleHQudmFsdWUuc3BsaXQoJ3wnKTtcblx0XHRcdFx0bGV0IGtleSA9IG51bGw7XG5cdFx0XHRcdGlmICh2YWx1ZS5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdFx0Wywga2V5XSA9IHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IHYgPSB2YWx1ZVswXS5yZXBsYWNlKC9fL2csICcgJykucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpO1xuXHRcdFx0XHRpZiAodi5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRlZGl0LmNhbmNlbCgpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGVkaXQuY3VycmVudENhdGVnb3J5ID0gdjtcblx0XHRcdFx0XHRlZGl0LmN1cnJlbnRLZXkgPSBrZXk7XG5cdFx0XHRcdFx0ZWRpdC5jdXJyZW50RXhpc3RzID0gdGhpcy5pbnB1dEV4aXN0cztcblx0XHRcdFx0XHRlZGl0LmNsb3NlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdGNvbnN0IHNldHVwX3VwbG9hZCA9ICgpID0+IHtcblx0XHRvblVwbG9hZCA9IHRydWU7XG5cdFx0Ly8gQWRkIGFuIGVtcHR5IGNhdGVnb3J5IGJhciBhdCB0aGUgZW5kIG9mIHRoZSB0YWJsZSBjb250YWluaW5nIHRoZSBkZXNjcmlwdGlvbiwgYW5kIGNoYW5nZSB0aGUgb25zdWJtaXQgaGFuZGxlci5cblx0XHRsZXQgaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXctaHRtbGZvcm0tZGVzY3JpcHRpb24nKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd3BEZXN0RmlsZScpO1xuXHRcdGlmICghaXApIHtcblx0XHRcdGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dwRGVzdEZpbGUnKTtcblx0XHRcdHdoaWxlIChpcCAmJiBpcC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpICE9PSAndGFibGUnKSB7XG5cdFx0XHRcdGlwID0gaXAucGFyZW50Tm9kZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKCFpcCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCByZXVwbG9hZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3cEZvclJlVXBsb2FkJyk7XG5cdFx0Y29uc3QgZGVzdEZpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd3BEZXN0RmlsZScpO1xuXHRcdGlmICgocmV1cGxvYWQgJiYgISFyZXVwbG9hZC52YWx1ZSkgfHwgKGRlc3RGaWxlICYmIChkZXN0RmlsZS5kaXNhYmxlZCB8fCBkZXN0RmlsZS5yZWFkT25seSkpKSB7XG5cdFx0XHRyZXR1cm47IC8vIHJlLXVwbG9hZCBmb3JtLi4uXG5cdFx0fVxuXHRcdC8vIEluc2VydCBhIHRhYmxlIHJvdyB3aXRoIHR3byBmaWVsZHMgKGxhYmVsIGFuZCBlbXB0eSBjYXRlZ29yeSBiYXIpXG5cdFx0Y29uc3QgbGFiZWxDZWxsID0gbWFrZSgndGQnKTtcblx0XHRjb25zdCBsaW5lQ2VsbCA9IG1ha2UoJ3RkJyk7XG5cdFx0Ly8gQ3JlYXRlIHRoZSBjYXRlZ29yeSBsaW5lXG5cdFx0Y2F0TGluZSA9IG1ha2UoJ2RpdicpO1xuXHRcdGNhdExpbmUuY2xhc3NOYW1lID0gJ2NhdGxpbmtzJztcblx0XHRjYXRMaW5lLmlkID0gJ2NhdGxpbmtzJztcblx0XHRjYXRMaW5lLnN0eWxlLnRleHRBbGlnbiA9IGlzX3J0bCA/ICdyaWdodCcgOiAnbGVmdCc7XG5cdFx0Ly8gV2UnbGwgYmUgaW5zaWRlIGEgdGFibGUgcm93LiBNYWtlIHN1cmUgdGhhdCB3ZSBkb24ndCBoYXZlIG1hcmdpbnMgb3Igc3RyYW5nZSBib3JkZXJzLlxuXHRcdGNhdExpbmUuc3R5bGUubWFyZ2luID0gJzAnO1xuXHRcdGNhdExpbmUuc3R5bGUuYm9yZGVyID0gJ25vbmUnO1xuXHRcdGxpbmVDZWxsLmFwcGVuZChjYXRMaW5lKTtcblx0XHQvLyBDcmVhdGUgdGhlIGxhYmVsXG5cdFx0Y29uc3QgbGFiZWwgPSBudWxsO1xuXHRcdGlmIChsYWJlbCkge1xuXHRcdFx0bGFiZWxDZWxsLmlkID0gJ2hvdGNhdExhYmVsVHJhbnNsYXRlZCc7XG5cdFx0XHRsYWJlbENlbGwuYXBwZW5kKGxhYmVsKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bGFiZWxDZWxsLmlkID0gJ2hvdGNhdExhYmVsJztcblx0XHRcdGxhYmVsQ2VsbC5hcHBlbmQobWFrZShnZXRNZXNzYWdlKCdjYXRlZ29yaWVzJyksIHRydWUpKTtcblx0XHR9XG5cdFx0bGFiZWxDZWxsLmNsYXNzTmFtZSA9ICdtdy1sYWJlbCc7XG5cdFx0bGFiZWxDZWxsLnN0eWxlLnRleHRBbGlnbiA9ICdyaWdodCc7XG5cdFx0bGFiZWxDZWxsLnN0eWxlLnZlcnRpY2FsQWxpZ24gPSAnbWlkZGxlJztcblx0XHQvLyBDaGFuZ2UgdGhlIG9uc3VibWl0IGhhbmRsZXJcblx0XHRjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VwbG9hZCcpIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtdy11cGxvYWQtZm9ybScpO1xuXHRcdGlmIChmb3JtKSB7XG5cdFx0XHRjb25zdCBuZXdSb3cgPSBpcC5pbnNlcnRSb3coLTEpO1xuXHRcdFx0bmV3Um93LmFwcGVuZChsYWJlbENlbGwpO1xuXHRcdFx0bmV3Um93LmFwcGVuZChsaW5lQ2VsbCk7XG5cdFx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChvbGRTdWJtaXQsIC4uLmFyZ3MpID0+IHtcblx0XHRcdFx0cmV0dXJuICgoKSA9PiB7XG5cdFx0XHRcdFx0bGV0IGRvX3N1Ym1pdCA9IHRydWU7XG5cdFx0XHRcdFx0aWYgKG9sZFN1Ym1pdCkge1xuXHRcdFx0XHRcdFx0aWYgKHR5cGVvZiBvbGRTdWJtaXQgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1ldmFsXG5cdFx0XHRcdFx0XHRcdGRvX3N1Ym1pdCA9IHdpbmRvdy5ldmFsKG9sZFN1Ym1pdCk7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKG9sZFN1Ym1pdCBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG5cdFx0XHRcdFx0XHRcdGRvX3N1Ym1pdCA9IG9sZFN1Ym1pdC5hcHBseShmb3JtLCBbb2xkU3VibWl0LCAuLi5hcmdzXSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICghZG9fc3VibWl0KSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNsb3NlRm9ybSgpO1xuXHRcdFx0XHRcdC8vIENvcHkgdGhlIGNhdGVnb3JpZXNcblx0XHRcdFx0XHRjb25zdCBlYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3cFVwbG9hZERlc2NyaXB0aW9uJykgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dwRGVzYycpO1xuXHRcdFx0XHRcdGxldCBhZGRlZE9uZSA9IGZhbHNlO1xuXHRcdFx0XHRcdGZvciAoY29uc3QgZWRpdG9yIG9mIGVkaXRvcnMpIHtcblx0XHRcdFx0XHRcdGNvbnN0IHQgPSBlZGl0b3IuY3VycmVudENhdGVnb3J5O1xuXHRcdFx0XHRcdFx0aWYgKCF0KSB7XG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Y29uc3Qga2V5ID0gZWRpdG9yLmN1cnJlbnRLZXk7XG5cdFx0XHRcdFx0XHRjb25zdCBuZXdfY2F0ID0gYFtbJHtIQy5jYXRlZ29yeV9jYW5vbmljYWx9OiR7dH0ke2tleSA/IGB8JHtrZXl9YCA6ICcnfV1dYDtcblx0XHRcdFx0XHRcdC8vIE9ubHkgYWRkIGlmIG5vdCBhbHJlYWR5IHByZXNlbnRcblx0XHRcdFx0XHRcdGNvbnN0IG5vd2lraVJlZ2V4ID0gbmV3IFJlZ0V4cCgnPG5vJy5jb25jYXQoJ3dpa2k+JywgJyhcXFxcc3xcXFxcUykqPzwvbm8nLCAnd2lraScsICc+JyksICdnJyk7XG5cdFx0XHRcdFx0XHRjb25zdCBfY2xlYW5lZFRleHQgPSBlYi52YWx1ZS5yZXBsYWNlKC88IS0tKFxcc3xcXFMpKj8tLT4vZywgJycpLnJlcGxhY2Uobm93aWtpUmVnZXgpO1xuXHRcdFx0XHRcdFx0aWYgKCFmaW5kX2NhdGVnb3J5KF9jbGVhbmVkVGV4dCwgdCwgdHJ1ZSkpIHtcblx0XHRcdFx0XHRcdFx0ZWIudmFsdWUgKz0gYFxcbiR7bmV3X2NhdH1gO1xuXHRcdFx0XHRcdFx0XHRhZGRlZE9uZSA9IHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChhZGRlZE9uZSkge1xuXHRcdFx0XHRcdFx0Ly8gUmVtb3ZlIFwic3Vic3Q6dW5jXCIgYWRkZWQgYnkgRmxpbmZvIGlmIGl0IGRpZG4ndCBmaW5kIGNhdGVnb3JpZXNcblx0XHRcdFx0XHRcdGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cCgne3skJy5jb25jYXQoJ3N1YnN0OicpLmNvbmNhdCgndW5jfX0nKSwgJ2cnKTtcblx0XHRcdFx0XHRcdGViLnZhbHVlID0gZWIudmFsdWUucmVwbGFjZShyZWdleCwgJycpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fSkoZm9ybS5vbnN1Ym1pdCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH07XG5cdGxldCBjbGVhbmVkVGV4dCA9IG51bGw7XG5cdGNvbnN0IGlzT25QYWdlID0gKHtmaXJzdENoaWxkfSkgPT4ge1xuXHRcdGlmIChmaXJzdENoaWxkLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGxldCBjYXRUaXRsZSA9IHRpdGxlKGZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKCdocmVmJykpO1xuXHRcdGlmICghY2F0VGl0bGUpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRjYXRUaXRsZSA9IGNhdFRpdGxlLnNsaWNlKGNhdFRpdGxlLmluZGV4T2YoJzonKSArIDEpLnJlcGxhY2UoL18vZywgJyAnKTtcblx0XHRpZiAoSEMuYmxhY2tsaXN0ICYmIEhDLmJsYWNrbGlzdC50ZXN0KGNhdFRpdGxlKSkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGNvbnN0IHJlc3VsdCA9IHtcblx0XHRcdHRpdGxlOiBjYXRUaXRsZSxcblx0XHRcdG1hdGNoOiBbJycsICcnLCAnJ10sXG5cdFx0fTtcblx0XHRpZiAocGFnZVRleHQgPT09IG51bGwpIHtcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXHRcdGlmIChjbGVhbmVkVGV4dCA9PT0gbnVsbCkge1xuXHRcdFx0Y29uc3Qgbm93aWtpUmVnZXggPSBuZXcgUmVnRXhwKCc8bm8nLmNvbmNhdCgnd2lraT4nLCAnKFxcXFxzfFxcXFxTKSo/PC9ubycsICd3aWtpJywgJz4nKSwgJ2cnKTtcblx0XHRcdGNsZWFuZWRUZXh0ID0gcGFnZVRleHQucmVwbGFjZSgvPCEtLShcXHN8XFxTKSo/LS0+L2csICcnKS5yZXBsYWNlKG5vd2lraVJlZ2V4LCAnJyk7XG5cdFx0fVxuXHRcdHJlc3VsdC5tYXRjaCA9IGZpbmRfY2F0ZWdvcnkoY2xlYW5lZFRleHQsIGNhdFRpdGxlLCB0cnVlKTtcblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9O1xuXHRsZXQgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcblx0bGV0IHNldHVwVGltZW91dCA9IG51bGw7XG5cdGNvbnN0IGZpbmRCeUNsYXNzID0gKHNjb3BlLCB0YWcsIGNsYXNzTmFtZSkgPT4ge1xuXHRcdGNvbnN0IHJlc3VsdCA9ICQoc2NvcGUpLmZpbmQoYCR7dGFnfS4ke2NsYXNzTmFtZX1gKTtcblx0XHRyZXR1cm4gcmVzdWx0ICYmIHJlc3VsdC5sZW5ndGggPiAwID8gcmVzdWx0WzBdIDogbnVsbDtcblx0fTtcblx0Y29uc3Qgc2V0dXAgPSAoYWRkaXRpb25hbFdvcmspID0+IHtcblx0XHRpZiAoaW5pdGlhbGl6ZWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aW5pdGlhbGl6ZWQgPSB0cnVlO1xuXHRcdGlmIChzZXR1cFRpbWVvdXQpIHtcblx0XHRcdHdpbmRvdy5jbGVhclRpbWVvdXQoc2V0dXBUaW1lb3V0KTtcblx0XHRcdHNldHVwVGltZW91dCA9IG51bGw7XG5cdFx0fVxuXHRcdC8vIEZpbmQgdGhlIGNhdGVnb3J5IGJhciwgb3IgY3JlYXRlIGFuIGVtcHR5IG9uZSBpZiB0aGVyZSBpc24ndCBvbmUuIFRoZW4gYWRkIC0vKy0gbGlua3MgYWZ0ZXJcblx0XHQvLyBlYWNoIGNhdGVnb3J5LCBhbmQgYWRkIHRoZSArIGxpbmsuXG5cdFx0Y2F0TGluZSB8fD0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI213LW5vcm1hbC1jYXRsaW5rcycpOyAvLyBTcGVjaWFsOlVwbG9hZFxuXHRcdGNvbnN0IGhpZGRlbkNhdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXctaGlkZGVuLWNhdGxpbmtzJyk7XG5cdFx0aWYgKCFjYXRMaW5lKSB7XG5cdFx0XHRsZXQgZm9vdGVyID0gbnVsbDtcblx0XHRcdGlmICghaGlkZGVuQ2F0cykge1xuXHRcdFx0XHRmb290ZXIgPSBmaW5kQnlDbGFzcyhkb2N1bWVudCwgJ2RpdicsICdwcmludGZvb3RlcicpO1xuXHRcdFx0XHRpZiAoIWZvb3Rlcikge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fSAvLyBEb24ndCBrbm93IHdoZXJlIHRvIGluc2VydCB0aGUgY2F0ZWdvcnkgbGluZVxuXHRcdFx0fVxuXHRcdFx0Y2F0TGluZSA9IG1ha2UoJ2RpdicpO1xuXHRcdFx0Y2F0TGluZS5pZCA9ICdtdy1ub3JtYWwtY2F0bGlua3MnO1xuXHRcdFx0Y2F0TGluZS5zdHlsZS50ZXh0QWxpZ24gPSBpc19ydGwgPyAncmlnaHQnIDogJ2xlZnQnO1xuXHRcdFx0Ly8gQWRkIGEgbGFiZWxcblx0XHRcdGNvbnN0IGxhYmVsID0gbWFrZSgnYScpO1xuXHRcdFx0bGFiZWwuaHJlZiA9IGNvbmYud2dBcnRpY2xlUGF0aC5yZXBsYWNlKCckMScsICdTcGVjaWFsOkNhdGVnb3JpZXMnKTtcblx0XHRcdGxhYmVsLnRpdGxlID0gZ2V0TWVzc2FnZSgnY2F0ZWdvcmllcycpO1xuXHRcdFx0bGFiZWwuYXBwZW5kKG1ha2UoZ2V0TWVzc2FnZSgnY2F0ZWdvcmllcycpLCB0cnVlKSk7XG5cdFx0XHRjYXRMaW5lLmFwcGVuZChsYWJlbCk7XG5cdFx0XHRjYXRMaW5lLmFwcGVuZChtYWtlKCc6JywgdHJ1ZSkpO1xuXHRcdFx0Ly8gSW5zZXJ0IHRoZSBuZXcgY2F0ZWdvcnkgbGluZVxuXHRcdFx0bGV0IGNvbnRhaW5lciA9IGhpZGRlbkNhdHMgPyBoaWRkZW5DYXRzLnBhcmVudE5vZGUgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2F0bGlua3MnKTtcblx0XHRcdGlmICghY29udGFpbmVyKSB7XG5cdFx0XHRcdGNvbnRhaW5lciA9IG1ha2UoJ2RpdicpO1xuXHRcdFx0XHRjb250YWluZXIuaWQgPSAnY2F0bGlua3MnO1xuXHRcdFx0XHRmb290ZXIucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoY29udGFpbmVyLCBmb290ZXIubmV4dFNpYmxpbmcpO1xuXHRcdFx0fVxuXHRcdFx0Y29udGFpbmVyLmNsYXNzTmFtZSA9ICdjYXRsaW5rcyBub3ByaW50Jztcblx0XHRcdGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cdFx0XHRpZiAoaGlkZGVuQ2F0cykge1xuXHRcdFx0XHRoaWRkZW5DYXRzLmJlZm9yZShjYXRMaW5lKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnRhaW5lci5hcHBlbmQoY2F0TGluZSk7XG5cdFx0XHR9XG5cdFx0fSAvLyBlbmQgaWYgY2F0TGluZSBleGlzdHNcblx0XHRpZiAoaXNfcnRsKSB7XG5cdFx0XHRjYXRMaW5lLmRpciA9ICdydGwnO1xuXHRcdH1cblx0XHQvLyBDcmVhdGUgZWRpdG9ycyBmb3IgYWxsIGV4aXN0aW5nIGNhdGVnb3JpZXNcblx0XHRjb25zdCBjcmVhdGVFZGl0b3JzID0gKGxpbmUsIGlzX2hpZGRlbikgPT4ge1xuXHRcdFx0bGV0IGk7XG5cdFx0XHRsZXQgY2F0cyA9IGxpbmUucXVlcnlTZWxlY3RvckFsbCgnbGknKTtcblx0XHRcdGlmIChjYXRzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0bmV3RE9NID0gdHJ1ZTtcblx0XHRcdFx0bGluZSA9IGNhdHNbMF0ucGFyZW50Tm9kZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNhdHMgPSBsaW5lLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NwYW4nKTtcblx0XHRcdH1cblx0XHRcdC8vIENvcHkgY2F0cywgb3RoZXJ3aXNlIGl0J2xsIGFsc28gbWFnaWNhbGx5IGNvbnRhaW4gb3VyIGFkZGVkIHNwYW5zIGFzIGl0IGlzIGEgbGl2ZSBjb2xsZWN0aW9uIVxuXHRcdFx0Y29uc3QgY29weUNhdHMgPSBBcnJheS5mcm9tKHtcblx0XHRcdFx0bGVuZ3RoOiBjYXRzLmxlbmd0aCxcblx0XHRcdH0pO1xuXHRcdFx0Zm9yIChpID0gMDsgaSA8IGNhdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y29weUNhdHNbaV0gPSBjYXRzW2ldO1xuXHRcdFx0fVxuXHRcdFx0Zm9yIChpID0gMDsgaSA8IGNvcHlDYXRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGNvbnN0IHRlc3QgPSBpc09uUGFnZShjb3B5Q2F0c1tpXSk7XG5cdFx0XHRcdGlmICh0ZXN0ICE9PSBudWxsICYmIHRlc3QubWF0Y2ggIT09IG51bGwgJiYgbGluZSkge1xuXHRcdFx0XHRcdG5ldyBDYXRlZ29yeUVkaXRvcihsaW5lLCBjb3B5Q2F0c1tpXSwgdGVzdC50aXRsZSwgdGVzdC5tYXRjaFsyXSwgaXNfaGlkZGVuKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGNvcHlDYXRzLmxlbmd0aCA+IDAgPyBjb3B5Q2F0cy5hdCgtMSkgOiBudWxsO1xuXHRcdH07XG5cdFx0Y29uc3QgbGFzdFNwYW4gPSBjcmVhdGVFZGl0b3JzKGNhdExpbmUsIGZhbHNlKTtcblx0XHQvLyBDcmVhdGUgb25lIHRvIGFkZCBhIG5ldyBjYXRlZ29yeVxuXHRcdG5ldyBDYXRlZ29yeUVkaXRvcihuZXdET00gPyBjYXRMaW5lLnF1ZXJ5U2VsZWN0b3JBbGwoJ3VsJylbMF0gOiBjYXRMaW5lLCBudWxsLCBudWxsLCBsYXN0U3BhbiAhPT0gbnVsbCwgZmFsc2UpO1xuXHRcdGlmICghb25VcGxvYWQpIHtcblx0XHRcdGlmIChwYWdlVGV4dCAhPT0gbnVsbCAmJiBoaWRkZW5DYXRzKSB7XG5cdFx0XHRcdGlmIChpc19ydGwpIHtcblx0XHRcdFx0XHRoaWRkZW5DYXRzLmRpciA9ICdydGwnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNyZWF0ZUVkaXRvcnMoaGlkZGVuQ2F0cywgdHJ1ZSk7XG5cdFx0XHR9XG5cdFx0XHQvLyBBbmQgZmluYWxseSBhZGQgdGhlIFwibXVsdGktbW9kZVwiIHNwYW4uIChEbyB0aGlzIGF0IHRoZSBlbmQsIG90aGVyd2lzZSBpdCBlbmRzIHVwIGluIHRoZSBsaXN0IGFib3ZlLilcblx0XHRcdGNvbnN0IGVuYWJsZU11bHRpID0gbWFrZSgnc3BhbicpO1xuXHRcdFx0ZW5hYmxlTXVsdGkuY2xhc3NOYW1lID0gJ25vcHJpbnQnO1xuXHRcdFx0aWYgKGlzX3J0bCkge1xuXHRcdFx0XHRlbmFibGVNdWx0aS5kaXIgPSAncnRsJztcblx0XHRcdH1cblx0XHRcdGNhdExpbmUuaW5zZXJ0QmVmb3JlKGVuYWJsZU11bHRpLCBjYXRMaW5lLmZpcnN0Q2hpbGQubmV4dFNpYmxpbmcpO1xuXHRcdFx0ZW5hYmxlTXVsdGkuYXBwZW5kKG1ha2UoJ1xcdTAwQTAnLCB0cnVlKSk7IC8vIG5ic3Bcblx0XHRcdG11bHRpU3BhbiA9IG1ha2UoJ3NwYW4nKTtcblx0XHRcdGVuYWJsZU11bHRpLmFwcGVuZChtdWx0aVNwYW4pO1xuXHRcdFx0bXVsdGlTcGFuLmlubmVySFRNTCA9IGAoPGE+JHtIQy5hZGRtdWx0aX08L2E+KWA7XG5cdFx0XHRjb25zdCBbbGlua10gPSBtdWx0aVNwYW4ucXVlcnlTZWxlY3RvckFsbCgnYScpO1xuXHRcdFx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuXHRcdFx0XHRzZXRNdWx0aUlucHV0KCk7XG5cdFx0XHRcdGNoZWNrTXVsdGlJbnB1dCgpO1xuXHRcdFx0XHRyZXR1cm4gZXZ0S2lsbChldmVudCk7XG5cdFx0XHR9KTtcblx0XHRcdGxpbmsudGl0bGUgPSBnZXRNZXNzYWdlKCdtdWx0aV90b29sdGlwJyk7XG5cdFx0XHRsaW5rLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcblx0XHR9XG5cdFx0Y2xlYW5lZFRleHQgPSBudWxsO1xuXHRcdGlmIChhZGRpdGlvbmFsV29yayBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG5cdFx0XHRhZGRpdGlvbmFsV29yaygpO1xuXHRcdH1cblx0XHRtdy5ob29rKCdob3RjYXQucmVhZHknKS5maXJlKCk7IC8vIEV4ZWN1dGUgcmVnaXN0ZXJlZCBjYWxsYmFjayBmdW5jdGlvbnNcblx0XHQkKCdib2R5JykudHJpZ2dlcignaG90Y2F0U2V0dXBDb21wbGV0ZWQnKTtcblx0fTtcblx0Y29uc3QgY3JlYXRlQ29tbWl0Rm9ybSA9ICgpID0+IHtcblx0XHRpZiAoY29tbWl0Rm9ybSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBmb3JtQ29udGFpbmVyID0gbWFrZSgnZGl2Jyk7XG5cdFx0Zm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hcHBlbmQoZm9ybUNvbnRhaW5lcik7XG5cdFx0Zm9ybUNvbnRhaW5lci5pbm5lckhUTUwgPSBgPGZvcm0gaWQ9XCJob3RjYXRDb21taXRGb3JtXCIgbWV0aG9kPVwicG9zdFwiIGVuY3R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIgYWN0aW9uPVwiJHtcblx0XHRcdGNvbmYud2dTY3JpcHRcblx0XHR9P3RpdGxlPSR7ZW5jb2RlVVJJQ29tcG9uZW50KFxuXHRcdFx0Y29uZi53Z1BhZ2VOYW1lXG5cdFx0KX0mYWN0aW9uPXN1Ym1pdFwiPjxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIndwVGV4dGJveDFcIj4ke2A8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJtb2RlbFwiIHZhbHVlPVwiJHtjb25mLndnUGFnZUNvbnRlbnRNb2RlbH1cIj5gfTxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImZvcm1hdFwiIHZhbHVlPVwidGV4dC94LXdpa2lcIj48aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJ3cFN1bW1hcnlcIiB2YWx1ZT1cIlwiPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwid3BNaW5vcmVkaXRcIiB2YWx1ZT1cIjFcIj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cIndwV2F0Y2h0aGlzXCIgdmFsdWU9XCIxXCI+PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwid3BBdXRvU3VtbWFyeVwiIHZhbHVlPVwiZDQxZDhjZDk4ZjAwYjIwNGU5ODAwOTk4ZWNmODQyN2VcIj48aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJ3cEVkaXR0aW1lXCI+PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwid3BTdGFydHRpbWVcIj48aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJ3cERpZmZcIiB2YWx1ZT1cIndwRGlmZlwiPjxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIm9sZGlkXCIgdmFsdWU9XCIwXCI+PGlucHV0IHR5cGU9XCJzdWJtaXRcIiBuYW1lPVwiaGNDb21taXRcIiB2YWx1ZT1cImhjQ29tbWl0XCI+PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwid3BFZGl0VG9rZW5cIj48aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJ3cFVsdGltYXRlUGFyYW1cIiB2YWx1ZT1cIjFcIj48aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJ3cENoYW5nZVRhZ3NcIj48aW5wdXQgdHlwZT1cImhpZGRlblwiIHZhbHVlPVwi4oSz8J2SsuKZpfCdk4rwnZOD8J2SvvCdkrjihLTwnZK54oSvXCIgbmFtZT1cIndwVW5pY29kZUNoZWNrXCI+PC9mb3JtPmA7XG5cdFx0Y29tbWl0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob3RjYXRDb21taXRGb3JtJyk7XG5cdH07XG5cdGNvbnN0IGdldFBhZ2UgPSAoKSA9PiB7XG5cdFx0Ly8gV2Uga25vdyB3ZSBoYXZlIGFuIGFydGljbGUgaGVyZS5cblx0XHRpZiAoY29uZi53Z0FydGljbGVJZCkge1xuXHRcdFx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHJhd2NvbnRpbnVlOiAnJyxcblx0XHRcdFx0dGl0bGVzOiBjb25mLndnUGFnZU5hbWUsXG5cdFx0XHRcdHByb3A6IFsnaW5mbycsICdyZXZpc2lvbnMnXSxcblx0XHRcdFx0cnZwcm9wOiBbJ2NvbnRlbnQnLCAndGltZXN0YW1wJywgJ2lkcyddLFxuXHRcdFx0XHRydmxpbWl0OiAnMScsXG5cdFx0XHRcdHJ2c3RhcnRpZDogY29uZi53Z0N1clJldmlzaW9uSWQsXG5cdFx0XHRcdHJ2c2xvdHM6ICcqJyxcblx0XHRcdFx0bWV0YTogWydzaXRlaW5mbyddLFxuXHRcdFx0fTtcblx0XHRcdEhDLnN0YXJ0ID0gKGRhdGEpID0+IHtcblx0XHRcdFx0c2V0UGFnZShkYXRhKTtcblx0XHRcdFx0c2V0dXAoY3JlYXRlQ29tbWl0Rm9ybSk7XG5cdFx0XHR9O1xuXHRcdFx0YXBpLmdldChwYXJhbXMpLnRoZW4oKGRhdGEpID0+IHtcblx0XHRcdFx0SEMuc3RhcnQoZGF0YSk7XG5cdFx0XHR9KTtcblx0XHRcdHNldHVwVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRzZXR1cChjcmVhdGVDb21taXRGb3JtKTtcblx0XHRcdH0sIDQwMDApOyAvLyA0IHNlYywganVzdCBpbiBjYXNlIGdldHRpbmcgdGhlIHdpa2l0ZXh0IHRha2VzIGxvbmdlci5cblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gRG9lc24ndCBleGlzdCB5ZXQuIERpc2FibGUgb24gbm9uLWV4aXN0aW5nIFVzZXIgcGFnZXMuXG5cdFx0XHRpZiAoY29uZi53Z05hbWVzcGFjZU51bWJlciA9PT0gMikge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRwYWdlVGV4dCA9ICcnO1xuXHRcdFx0cGFnZVRpbWUgPSBudWxsO1xuXHRcdFx0c2V0dXAoY3JlYXRlQ29tbWl0Rm9ybSk7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBzZXRTdGF0ZSA9IChzdGF0ZSkgPT4ge1xuXHRcdGNvbnN0IGNhdHMgPSBzdGF0ZS5zcGxpdCgnXFxuJyk7XG5cdFx0aWYgKGNhdHMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0aWYgKGluaXRpYWxpemVkICYmIGVkaXRvcnMubGVuZ3RoID09PSAxICYmIGVkaXRvcnNbMF0uaXNBZGRDYXRlZ29yeSkge1xuXHRcdFx0Ly8gSW5zZXJ0IG5ldyBzcGFucyBhbmQgY3JlYXRlIG5ldyBlZGl0b3JzIGZvciB0aGVtLlxuXHRcdFx0Y29uc3QgbmV3U3BhbnMgPSBbXTtcblx0XHRcdGNvbnN0IGJlZm9yZSA9IGVkaXRvcnMubGVuZ3RoID09PSAxID8gZWRpdG9yc1swXS5zcGFuIDogbnVsbDtcblx0XHRcdGxldCBpO1xuXHRcdFx0Zm9yIChpID0gMDsgaSA8IGNhdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKGNhdHNbaV0ubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGV0IGNhdCA9IGNhdHNbaV0uc3BsaXQoJ3wnKTtcblx0XHRcdFx0Y29uc3Qga2V5ID0gY2F0Lmxlbmd0aCA+IDEgPyBjYXRbMV0gOiBudWxsO1xuXHRcdFx0XHRbY2F0XSA9IGNhdDtcblx0XHRcdFx0Y29uc3QgbGluayA9IG1ha2UoJ2EnKTtcblx0XHRcdFx0bGluay5ocmVmID0gd2lraVBhZ2VQYXRoKGAke0hDLmNhdGVnb3J5X2Nhbm9uaWNhbH06JHtjYXR9YCk7XG5cdFx0XHRcdGxpbmsuYXBwZW5kKG1ha2UoY2F0LCB0cnVlKSk7XG5cdFx0XHRcdGxpbmsudGl0bGUgPSBjYXQ7XG5cdFx0XHRcdGNvbnN0IHNwYW4gPSBtYWtlKCdzcGFuJyk7XG5cdFx0XHRcdHNwYW4uYXBwZW5kKGxpbmspO1xuXHRcdFx0XHRpZiAoIWkpIHtcblx0XHRcdFx0XHRjYXRMaW5lLmluc2VydEJlZm9yZShtYWtlKCcgJywgdHJ1ZSksIGJlZm9yZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YmVmb3JlLmJlZm9yZShzcGFuKTtcblx0XHRcdFx0aWYgKGJlZm9yZSAmJiBpICsgMSA8IGNhdHMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0cGFyZW50Lmluc2VydEJlZm9yZShtYWtlKCcgfCAnLCB0cnVlKSwgYmVmb3JlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRuZXdTcGFucy5wdXNoKHtcblx0XHRcdFx0XHRlbGVtZW50OiBzcGFuLFxuXHRcdFx0XHRcdHRpdGxlOiBjYXQsXG5cdFx0XHRcdFx0a2V5LFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdC8vIEFuZCBjaGFuZ2UgdGhlIGxhc3Qgb25lLi4uXG5cdFx0XHRpZiAoYmVmb3JlKSB7XG5cdFx0XHRcdGJlZm9yZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShtYWtlKCcgfCAnLCB0cnVlKSwgYmVmb3JlKTtcblx0XHRcdH1cblx0XHRcdGZvciAoaSA9IDA7IGkgPCBuZXdTcGFucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRuZXcgQ2F0ZWdvcnlFZGl0b3IoY2F0TGluZSwgbmV3U3BhbnNbaV0uZWxlbWVudCwgbmV3U3BhbnNbaV0udGl0bGUsIG5ld1NwYW5zW2ldLmtleSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9O1xuXHRjb25zdCBnZXRTdGF0ZSA9ICgpID0+IHtcblx0XHRsZXQgcmVzdWx0ID0gbnVsbDtcblx0XHRmb3IgKGNvbnN0IGVkaXRvciBvZiBlZGl0b3JzKSB7XG5cdFx0XHRsZXQgdGV4dCA9IGVkaXRvci5jdXJyZW50Q2F0ZWdvcnk7XG5cdFx0XHRjb25zdCBrZXkgPSBlZGl0b3IuY3VycmVudEtleTtcblx0XHRcdGlmICh0ZXh0ICYmIHRleHQubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRpZiAoa2V5ICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0dGV4dCArPSBgfCR7a2V5fWA7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHJlc3VsdCA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdHJlc3VsdCA9IHRleHQ7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmVzdWx0ICs9IGBcXG4ke3RleHR9YDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9O1xuXHRjb25zdCByZWFsbHlfcnVuID0gKCkgPT4ge1xuXHRcdGluaXRpYWxpemUoKTtcblx0XHRpZiAoXG5cdFx0XHQhSEMudXBsb2FkX2Rpc2FibGVkICYmXG5cdFx0XHRjb25mLndnTmFtZXNwYWNlTnVtYmVyID09PSAtMSAmJlxuXHRcdFx0Y29uZi53Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSA9PT0gJ1VwbG9hZCcgJiZcblx0XHRcdGNvbmYud2dVc2VyTmFtZVxuXHRcdCkge1xuXHRcdFx0c2V0dXBfdXBsb2FkKCk7XG5cdFx0XHRzZXR1cCgoKSA9PiB7XG5cdFx0XHRcdC8vIENoZWNrIGZvciBzdGF0ZSByZXN0b3JhdGlvbiBvbmNlIHRoZSBzZXR1cCBpcyBkb25lIG90aGVyd2lzZSwgYnV0IGJlZm9yZSBzaWduYWxsaW5nIHNldHVwIGNvbXBsZXRpb25cblx0XHRcdFx0aWYgKHdpbmRvdy5VcGxvYWRGb3JtICYmIFVwbG9hZEZvcm0ucHJldmlvdXNfaG90Y2F0X3N0YXRlKSB7XG5cdFx0XHRcdFx0VXBsb2FkRm9ybS5wcmV2aW91c19ob3RjYXRfc3RhdGUgPSBzZXRTdGF0ZShVcGxvYWRGb3JtLnByZXZpb3VzX2hvdGNhdF9zdGF0ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdCFjb25mLndnSXNBcnRpY2xlIHx8XG5cdFx0XHRcdGNvbmYud2dBY3Rpb24gIT09ICd2aWV3JyB8fFxuXHRcdFx0XHRwYXJhbSgnZGlmZicpICE9PSBudWxsIHx8XG5cdFx0XHRcdHBhcmFtKCdvbGRpZCcpICE9PSBudWxsIHx8XG5cdFx0XHRcdCFjYW5fZWRpdCgpIHx8XG5cdFx0XHRcdEhDLmRpc2FibGUoKVxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGdldFBhZ2UoKTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IHJ1biA9ICgpID0+IHtcblx0XHRpZiAoSEMuc3RhcnRlZCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRIQy5zdGFydGVkID0gdHJ1ZTtcblx0XHRyZWFsbHlfcnVuKCk7XG5cdH07XG5cdC8vIEV4cG9ydCBsZWdhY3kgZnVuY3Rpb25zXG5cdHdpbmRvdy5ob3RjYXRfZ2V0X3N0YXRlID0gKCkgPT4ge1xuXHRcdHJldHVybiBnZXRTdGF0ZSgpO1xuXHR9O1xuXHR3aW5kb3cuaG90Y2F0X3NldF9zdGF0ZSA9IChzdGF0ZSkgPT4ge1xuXHRcdHJldHVybiBzZXRTdGF0ZShzdGF0ZSk7XG5cdH07XG5cdHdpbmRvdy5ob3RjYXRfY2xvc2VfZm9ybSA9ICgpID0+IHtcblx0XHRjbG9zZUZvcm0oKTtcblx0fTtcblx0SEMucnVuV2hlblJlYWR5ID0gKGNhbGxiYWNrKSA9PiB7XG5cdFx0Ly8gcnVuIHVzZXItcmVnaXN0ZXJlZCBjb2RlIG9uY2UgSG90Q2F0IGlzIGZ1bGx5IHNldCB1cCBhbmQgcmVhZHkuXG5cdFx0bXcuaG9vaygnaG90Y2F0LnJlYWR5JykuYWRkKGNhbGxiYWNrKTtcblx0fTtcblx0Ly8gTWFrZSBzdXJlIHdlIGRvbid0IGdldCBjb25mbGljdHMgd2l0aCBBamF4Q2F0ZWdvcmllcyAoY29yZSBkZXZlbG9wbWVudCB0aGF0IHNob3VsZCBvbmUgZGF5XG5cdC8vIHJlcGxhY2UgSG90Q2F0KS5cblx0bXcuY29uZmlnLnNldCgnZGlzYWJsZUFKQVhDYXRlZ29yaWVzJywgdHJ1ZSk7XG5cdC8vIFJ1biBhcyBzb29uIGFzIHBvc3NpYmxlLiBUaGlzIHZhcmllcyBkZXBlbmRpbmcgb24gTWVkaWFXaWtpIHZlcnNpb247XG5cdC8vIHdpbmRvdydzICdsb2FkJyBldmVudCBpcyBhbHdheXMgc2FmZSwgYnV0IHVzdWFsbHkgd2UgY2FuIGRvIGJldHRlciB0aGFuIHRoYXQuXG5cdGlmIChjb25mLndnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lICE9PSAnVXBsb2FkJykge1xuXHRcdC8vIFJlbG9hZCBIb3RDYXQgYWZ0ZXIgKFZFKSBlZGl0cyAoYnVnIFQxMDMyODUpXG5cdFx0bXcuaG9vaygncG9zdEVkaXQnKS5hZGQoKCkgPT4ge1xuXHRcdFx0Ly8gUmVzZXQgSG90Q2F0IGluIGNhc2UgdGhpcyBpcyBhIHNvZnQgcmVsb2FkIChlLmcuIFZpc3VhbEVkaXRvciBlZGl0KSwgdW5sZXNzIHRoZSBjYXRlZ29yaWVzXG5cdFx0XHQvLyB3ZXJlIG5vdCByZS1yZW5kZXJlZCBhbmQgb3VyIGludGVyZmFjZSBpcyBzdGlsbCB0aGVyZSAoZS5nLiBEaXNjdXNzaW9uVG9vbHMgZWRpdClcblx0XHRcdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2F0bGlua3MgLmhvdGNhdGxpbmsnKSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjYXRMaW5lID0gbnVsbDtcblx0XHRcdGVkaXRvcnMgPSBbXTtcblx0XHRcdGluaXRpYWxpemVkID0gZmFsc2U7XG5cdFx0XHRIQy5zdGFydGVkID0gZmFsc2U7XG5cdFx0XHRydW4oKTtcblx0XHR9KTtcblx0fVxuXHQvLyBXZSBjYW4gc2FmZWx5IHRyaWdnZXIganVzdCBhZnRlciB1c2VyIGNvbmZpZ3VyYXRpb24gaXMgbG9hZGVkLlxuXHQvLyBVc2UgYWx3YXlzKCkgaW5zdGVhZCBvZiB0aGVuKCkgdG8gYWxzbyBzdGFydCBIb3RDYXQgaWYgdGhlIHVzZXIgbW9kdWxlIGhhcyBwcm9ibGVtcy5cblx0JChydW4pO1xufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7QUFBQTtBQUFBLHdGQUFBQSxTQUFBO0FBQUE7QUFDQSxRQUFJLFFBQVEsU0FBVSxJQUFJO0FBQ3hCLGFBQU8sTUFBTSxHQUFHLFNBQVMsUUFBUTtBQUFBLElB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QUNwQyxXQUFPbXhCLFNBQVNueEIsS0FBSztFQUN0QjtBQUNBcEIsU0FBT3F6QixvQkFBb0IsTUFBTTtBQUNoQ3ZFLGNBQVU7RUFDWDtBQUNBeGtCLEtBQUdncEIsZUFBZ0IzWSxjQUFhO0FBRS9CbmIsT0FBR3l5QixLQUFLLGNBQWMsRUFBRXhxQixJQUFJa1QsUUFBUTtFQUNyQztBQUdBbmIsS0FBR0MsT0FBT2dELElBQUkseUJBQXlCLElBQUk7QUFHM0MsTUFBSXdFLEtBQUs0ckIsK0JBQStCLFVBQVU7QUFFakRyekIsT0FBR3l5QixLQUFLLFVBQVUsRUFBRXhxQixJQUFJLE1BQU07QUFHN0IsVUFBSXZILFNBQVN5dEIsY0FBYyx1QkFBdUIsR0FBRztBQUNwRDtNQUNEO0FBQ0FqYyxnQkFBVTtBQUNWRSxnQkFBVSxDQUFBO0FBQ1ZvZixvQkFBYztBQUNkMW1CLFNBQUc0b0IsVUFBVTtBQUNiRCxVQUFJO0lBQ0wsQ0FBQztFQUNGO0FBR0FueUIsSUFBRW15QixHQUFHO0FBQ04sR0FBRzsiLAogICJuYW1lcyI6IFsibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbCIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAiU3ltYm9sIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbCIsICJkb2N1bWVudCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbCIsICJUeXBlRXJyb3IiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiJCIsICJXR19VU0VSX0dST1VQUyIsICJfbXckY29uZmlnJGdldCIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIldHX1VTRVJfTEFOR1VBR0UiLCAiV0dfV0lLSV9JRCIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImhvdENhdENoZWNrIiwgIndpbmRvdyIsICJIb3RDYXRBdXRvUmVtb3ZlQ2hlY2tDYXRPcHRPdXQiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvckFsbCIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNvbmNhdCIsICJjaGVja0NhdGVnb3JpZXNSZWdFeHAiLCAic2VsZk5hbWUiLCAic3RvcmFnZUl0ZW1OYW1lIiwgInN0b3JhZ2VJdGVtIiwgInN0b3JhZ2UiLCAiY3JlYXRlakljb24iLCAiaWNvbkNsYXNzIiwgIiQiLCAiYXR0ciIsICJ0ZXh0IiwgImNyZWF0ZU5vdGlmeUFyZWEiLCAidGV4dE5vZGUiLCAiaWNvbiIsICJzdGF0ZSIsICJhZGRDbGFzcyIsICJhcHBlbmQiLCAiY3NzIiwgInBhZGRpbmciLCAib25lIiwgImUiLCAic2VsZiIsICJuZXdWYWwiLCAid3BUZXh0Ym94MSIsICJ2YWx1ZSIsICJyZXBsYWNlIiwgImRsZ0J1dHRvbnMiLCAiJGRpYWxvZ0NoZWNrU3RvcmFnZSIsICIkcGVybWFTYXZlSGludCIsICIkdGV4dEhpbnROb2RlIiwgIiRkaWFsb2ciLCAiZG9SZW1vdmUiLCAid3BTdW1tYXJ5IiwgIndyaXRlU3RvcmFnZSIsICJ2YWwiLCAic2V0IiwgImNoZWNrZWQiLCAiZGlhbG9nIiwgIl9hZGRUb0pTIiwgIl9lIiwgInByZXZlbnREZWZhdWx0IiwgImhhc0NsYXNzIiwgIiRlbCIsICJvZmYiLCAicGFyYW1zIiwgImFjdGlvbiIsICJ0aXRsZSIsICJzdW1tYXJ5IiwgImFwcGVuZHRleHQiLCAiZGF0YSIsICJlZGl0RG9uZSIsICJlZGl0U3RhdCIsICJlcnJvciIsICJub3RpZnkiLCAiY29kZSIsICJpbmZvIiwgInRhZyIsICJ0eXBlIiwgImZhZGVPdXQiLCAicG9zdFdpdGhUb2tlbiIsICJ0aGVuIiwgInByb21wdCIsICJpZCIsICJvbiIsICJmYWRlSW4iLCAiYXBwZW5kVG8iLCAiZGlzcGxheSIsICJ1c2VyIiwgImlzQW5vbiIsICJoaWRlIiwgIm1vZGFsIiwgImNsb3NlT25Fc2NhcGUiLCAid2lkdGgiLCAiYnV0dG9ucyIsICJjbG9zZSIsICIkYm9keSIsICJmaW5kIiwgInRyaWdnZXIiLCAib3BlbiIsICIkYnV0dG9ucyIsICJwYXJlbnQiLCAiZXEiLCAiYnV0dG9uIiwgImljb25zIiwgInByaW1hcnkiLCAiSG90Q2F0QXV0b1JlbW92ZUNoZWNrQ2F0IiwgIiRva0xpbmsiLCAiaHJlZiIsICJkb0VkaXQiLCAicmVzdWx0IiwgIm5vY3JlYXRlIiwgImFqYXgiLCAidXJsIiwgImRhdGFUeXBlIiwgInN1Y2Nlc3MiLCAiY2FjaGUiLCAibG9hZEhvdENhdENoZWNrIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImFyZ3MiLCAibWVzc2FnZSIsICJwbGFpbiIsICJob3RDYXRNZXNzYWdlcyIsICJpbmNsdWRlcyIsICJtZXNzYWdlcyIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiaG90Q2F0IiwgImNvbmYiLCAidmFsdWVzIiwgIkhvdENhdCIsICJub2RlTmFtZSIsICJ3Z0FjdGlvbiIsICJsaW5rcyIsICJjaGFuZ2UiLCAicmVtb3ZlIiwgImFkZCIsICJyZXN0b3JlIiwgInVuZG8iLCAiZG93biIsICJ1cCIsICJjaGFuZ2VUYWciLCAiYWRkbXVsdGkiLCAiZGlzYWJsZSIsICJucyIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJuc0lkcyIsICJ3Z05hbWVzcGFjZUlkcyIsICJ3Z0FydGljbGVJZCIsICJ0ZXN0IiwgIndnVGl0bGUiLCAiY3JlYXRvciIsICJ0aW1lZHRleHQiLCAiaW5zdGl0dXRpb24iLCAidW5jYXRfcmVnZXhwIiwgImV4aXN0c1llcyIsICJleGlzdHNObyIsICJ0ZW1wbGF0ZV9jYXRlZ29yaWVzIiwgImNhcGl0YWxpemVQYWdlTmFtZXMiLCAidXBsb2FkX2Rpc2FibGVkIiwgImJsYWNrbGlzdCIsICJiZ19jaGFuZ2VkIiwgIm5vX2F1dG9jb21taXQiLCAiZGVsX25lZWRzX2RpZmYiLCAic3VnZ2VzdF9kZWxheSIsICJlZGl0Ym94X3dpZHRoIiwgInN1Z2dlc3Rpb25zIiwgImZpeGVkX3NlYXJjaCIsICJ1c2VfdXBfZG93biIsICJsaXN0U2l6ZSIsICJzaW5nbGVfbWlub3IiLCAiZG9udF9hZGRfdG9fd2F0Y2hsaXN0IiwgInNob3J0Y3V0cyIsICJhZGRTaG9ydGN1dHMiLCAibWFwIiwgIl9hIiwgImsiLCAiT2JqZWN0IiwgImhhc093biIsICJ2IiwgImxlbmd0aCIsICJIQyIsICJ1YSIsICJuYXZpZ2F0b3IiLCAidXNlckFnZW50IiwgInRvTG93ZXJDYXNlIiwgImlzX3dlYmtpdCIsICJjYXRfcHJlZml4IiwgIm5vU3VnZ2VzdGlvbnMiLCAid2lraVRleHRCbGFuayIsICJ3aWtpVGV4dEJsYW5rUkUiLCAiUmVnRXhwIiwgIndpa2lUZXh0QmxhbmtPckJpZGkiLCAiZm9ybWF0dGVkTmFtZXNwYWNlcyIsICJ3Z0Zvcm1hdHRlZE5hbWVzcGFjZXMiLCAibmFtZXNwYWNlSWRzIiwgImF1dG9Mb2NhbGl6ZSIsICJuYW1lc3BhY2VOdW1iZXIiLCAiZmFsbGJhY2siLCAiY3JlYXRlUmVnZXhwU3RyIiwgIm5hbWUiLCAicmVnZXhfbmFtZSIsICJpIiwgImluaXRpYWwiLCAiY2hhckF0IiwgImxsIiwgInVsIiwgInRvVXBwZXJDYXNlIiwgImNhbm9uaWNhbCIsICJTdHJpbmciLCAicmVnZXhwIiwgImNhdF9uYW1lIiwgImNhdGVnb3J5X2Nhbm9uaWNhbCIsICJjYXRlZ29yeV9yZWdleHAiLCAidGVtcGxhdGVfcmVnZXhwIiwgIm1ha2UiLCAiYXJnIiwgImxpdGVyYWwiLCAiY3JlYXRlVGV4dE5vZGUiLCAiY3JlYXRlRWxlbWVudCIsICJwYXJhbSIsICJ1cmkiLCAibG9jYXRpb24iLCAicmUiLCAibSIsICJleGVjIiwgImRlY29kZVVSSUNvbXBvbmVudCIsICJzY3JpcHQiLCAid2dTY3JpcHQiLCAiaW5kZXhPZiIsICJ3Z1NlcnZlciIsICJzbGljZSIsICJwcm90b2NvbCIsICJwcmVmaXgiLCAid2dBcnRpY2xlUGF0aCIsICJjbGFzc05hbWUiLCAiY2FwaXRhbGl6ZSIsICJzdHIiLCAid2lraVBhZ2VQYXRoIiwgInBhZ2VOYW1lIiwgImVuY29kZVVSSUNvbXBvbmVudCIsICJlc2NhcGVSRSIsICJzdWJzdGl0dXRlRmFjdG9yeSIsICJvcHRpb25zIiwgImxlYWQiLCAiaW5kaWNhdG9yIiwgImxicmFjZSIsICJyYnJhY2UiLCAibWF0Y2giLCAiaWR4IiwgImFscGhhIiwgInJlcGxhY2VtZW50IiwgInJlcGxhY2VTaG9ydGN1dHMiLCAicmVwbGFjZUhhc2giLCAicyIsICJmaW5kQ2F0c1JFIiwgInJlcGxhY2VCeUJsYW5rcyIsICJmaW5kX2NhdGVnb3J5IiwgIndpa2l0ZXh0IiwgImNhdGVnb3J5IiwgIm9uY2UiLCAiY2F0X3JlZ2V4IiwgIm5vd2lraVJlZ2V4IiwgImNvcGllZHRleHQiLCAiY3Vycl9tYXRjaCIsICJwdXNoIiwgImludGVybGFuZ3VhZ2VSRSIsICJjaGFuZ2VfY2F0ZWdvcnkiLCAidG9SZW1vdmUiLCAidG9BZGQiLCAiaXNfaGlkZGVuIiwgImZpbmRfaW5zZXJ0aW9ucG9pbnQiLCAiX3dpa2l0ZXh0IiwgImluZGV4IiwgImxhc3RJbmRleCIsICJvbkNhdCIsICJuYW1lU3BhY2UiLCAia2V5Q2hhbmdlIiwgIm1hdGNoZXMiLCAiY2F0X3BvaW50IiwgImJlZm9yZSIsICJNYXRoIiwgIm1heCIsICJhZnRlciIsICJzZWFyY2giLCAiaiIsICJwb2ludCIsICJuZXdjYXRzdHJpbmciLCAic3VmZml4IiwgInR4dCIsICJldnRLZXlzIiwgImN0cmxLZXkiLCAibWV0YUtleSIsICJzaGlmdEtleSIsICJldnRLaWxsIiwgInN0b3BQcm9wYWdhdGlvbiIsICJjYW5jZWxCdWJibGUiLCAiY2F0TGluZSIsICJvblVwbG9hZCIsICJlZGl0b3JzIiwgImNvbW1pdEJ1dHRvbiIsICJjb21taXRGb3JtIiwgIm11bHRpU3BhbiIsICJwYWdlVGV4dCIsICJwYWdlVGltZSIsICJwYWdlV2F0Y2hlZCIsICJ3YXRjaENyZWF0ZSIsICJ3YXRjaEVkaXQiLCAibWlub3JFZGl0cyIsICJlZGl0VG9rZW4iLCAiaXNfcnRsIiwgInNlcnZlclRpbWUiLCAibGFzdFJldklkIiwgInBhZ2VUZXh0UmV2SWQiLCAiY29uZmxpY3RpbmdVc2VyIiwgIm5ld0RPTSIsICJVTkNIQU5HRUQiLCAiT1BFTiIsICJDSEFOR0VfUEVORElORyIsICJDSEFOR0VEIiwgIkRFTEVURUQiLCAic2V0UGFnZSIsICJzdGFydFRpbWUiLCAicXVlcnkiLCAicGFnZXMiLCAicGFnZSIsICJyZXZpc2lvbnMiLCAic2xvdHMiLCAiY29udGVudCIsICJ0aW1lc3RhbXAiLCAicmV2aWQiLCAibGFzdHJldmlkIiwgInN0YXJ0dGltZXN0YW1wIiwgIndhdGNoZWQiLCAidG9rZW5zIiwgImNzcmZ0b2tlbiIsICJsYW5nbGlua3MiLCAibGFuZyIsICJnZW5lcmFsIiwgInRpbWUiLCAiY2FzZSIsICJ1c2VyaW5mbyIsICJ3YXRjaGNyZWF0aW9ucyIsICJ3YXRjaGRlZmF1bHQiLCAibWlub3JkZWZhdWx0IiwgInNhdmVJblByb2dyZXNzIiwgImluaXRpYXRlRWRpdCIsICJmYWlsdXJlIiwgIm9sZEJ1dHRvblN0YXRlIiwgImRpc2FibGVkIiwgImZhaWwiLCAiYXBwbHkiLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicmF3Y29udGludWUiLCAidGl0bGVzIiwgIndnUGFnZU5hbWUiLCAicHJvcCIsICJpbnByb3AiLCAicnZwcm9wIiwgInJ2c2xvdHMiLCAicnZsaW1pdCIsICJydmRpciIsICJydnN0YXJ0aWQiLCAid2dDdXJSZXZpc2lvbklkIiwgImxsbGltaXQiLCAibWV0YSIsICJ1aXByb3AiLCAiZG9uZSIsICJzdGF0dXMiLCAic3RhdHVzVGV4dCIsICJtdWx0aUNoYW5nZU1zZyIsICJjb3VudCIsICJjdXJyZW50VGltZXN0YW1wIiwgIm5vdyIsICJEYXRlIiwgInRzIiwgImdldFVUQ0Z1bGxZZWFyIiwgInR3byIsICJnZXRVVENNb250aCIsICJnZXRVVENEYXRlIiwgImdldFVUQ0hvdXJzIiwgImdldFVUQ01pbnV0ZXMiLCAiZ2V0VVRDU2Vjb25kcyIsICJwZXJmb3JtQ2hhbmdlcyIsICJzaW5nbGVFZGl0b3IiLCAic2VsZkVkaXRDb25mbGljdCIsICJ3Z1VzZXJOYW1lIiwgIm5vQ29tbWl0IiwgIndwRWRpdFRva2VuIiwgIndwRGlmZiIsICJ3cFNhdmUiLCAiY2hhbmdlZCIsICJhZGRlZCIsICJkZWxldGVkIiwgInRvRWRpdCIsICJlZGl0IiwgImNoYW5nZXMiLCAib3JpZ2luYWxDYXRlZ29yeSIsICJjdXJyZW50Q2F0ZWdvcnkiLCAiY3VycmVudEtleSIsICJjdXJyZW50SGlkZGVuIiwgImZyb20iLCAidG8iLCAid3BNaW5vcmVkaXQiLCAid3BXYXRjaHRoaXMiLCAid3BDaGFuZ2VUYWdzIiwgIndwQXV0b1N1bW1hcnkiLCAiam9pbiIsICJzaG9ydFN1bW1hcnkiLCAiYXJyb3ciLCAid3BTdGFydHRpbWUiLCAid3BFZGl0dGltZSIsICJvbGRpZCIsICJoY0NvbW1pdCIsICJjbGljayIsICJyZXNvbHZlT25lIiwgInRvUmVzb2x2ZSIsICJjYXRzIiwgImNhdGVnb3JpZXMiLCAiaXNfZGFiIiwgImlzX3JlZGlyIiwgInJlZGlyZWN0IiwgImNhdGVnb3J5aW5mbyIsICJoaWRkZW4iLCAiaXNfbWlzc2luZyIsICJtaXNzaW5nIiwgImRhYklucHV0Q2xlYW5lZCIsICJpbnB1dEV4aXN0cyIsICJzcmMiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgIm4iLCAiY2F0XyIsICJjYXQiLCAiZXJyIiwgImYiLCAiZGFiIiwgInJlc29sdmVSZWRpcmVjdHMiLCAicCIsICJyZXNvbHZlTXVsdGkiLCAiY2FsbGJhY2siLCAiZGFiSW5wdXQiLCAibGFzdElucHV0IiwgInBsbmFtZXNwYWNlIiwgInBsbGltaXQiLCAiY2xsaW1pdCIsICJqc29uIiwgInJlcSIsICJtYWtlQWN0aXZlIiwgIndoaWNoIiwgImlzX2FjdGl2ZSIsICJfaSIsICJfZWRpdG9ycyIsICJlZGl0b3IiLCAiaW5hY3RpdmF0ZSIsICJzaG93RGFiIiwgImV4cGVjdGVkSW5wdXQiLCAibGFzdFJlYWxJbnB1dCIsICJhY3R1YWxWYWx1ZSIsICJzaG93c0xpc3QiLCAic3BsaXQiLCAibGFzdFNlbGVjdGlvbiIsICJzdGFydCIsICJlbmQiLCAiZGlzcGxheUxpc3QiLCAic2V0VGltZW91dCIsICJzZXRTZWxlY3Rpb24iLCAic2hvd1N1Z2dlc3Rpb25zIiwgIm11bHRpU3VibWl0IiwgIl9pMiIsICJfZWRpdG9yczIiLCAibXNnIiwgInJlc29sdmVkIiwgImZpcnN0RGFiIiwgImRvbnRDaGFuZ2UiLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAiZWxlbWVudCIsICJhY2NlcHRDaGVjayIsICJjb21taXQiLCAic2V0TXVsdGlJbnB1dCIsICJhZGRFdmVudExpc3RlbmVyIiwgInBhcmVudE5vZGUiLCAicmVwbGFjZUNoaWxkIiwgImNoZWNrTXVsdGlJbnB1dCIsICJoYXNDaGFuZ2VzIiwgIl9pMyIsICJfZWRpdG9yczMiLCAic3VnZ2VzdGlvbkVuZ2luZXMiLCAib3BlbnNlYXJjaCIsICJoYW5kbGVyIiwgInF1ZXJ5UmVzdWx0IiwgInF1ZXJ5S2V5IiwgImV4aXN0cyIsICJzcGxpY2UiLCAibm9ybWFsaXplZCIsICJpbnRlcm5hbHNlYXJjaCIsICJhbGxwYWdlcyIsICJfdGl0bGUiLCAic3ViY2F0ZWdvcmllcyIsICJjYXRlZ29yeW1lbWJlcnMiLCAicGFyZW50Y2F0ZWdvcmllcyIsICJzdWdnZXN0aW9uQ29uZmlncyIsICJzZWFyY2hpbmRleCIsICJlbmdpbmVzIiwgInNob3ciLCAidGVtcCIsICJub0NvbXBsZXRpb24iLCAicGFnZWxpc3QiLCAiY29tYmluZWQiLCAic3ViY2F0IiwgInBhcmVudGNhdCIsICJCUyIsICJUQUIiLCAiUkVUIiwgIkVTQyIsICJTUEFDRSIsICJQR1VQIiwgIlBHRE9XTiIsICJVUCIsICJET1dOIiwgIkRFTCIsICJJTUUiLCAiQ2F0ZWdvcnlFZGl0b3IiLCAiY29uc3RydWN0b3IiLCAiaW5pdGlhbGl6ZSIsICJsaW5lIiwgInNwYW4iLCAiZGlyIiwgImlzQWRkQ2F0ZWdvcnkiLCAiY2F0TGluayIsICJmaXJzdENoaWxkIiwgIm9yaWdpbmFsS2V5IiwgIm9yaWdpbmFsRXhpc3RzIiwgIm1ha2VMaW5rU3BhbiIsICJ1cERvd25MaW5rcyIsICJzdHlsZSIsICJsaW5rU3BhbiIsICJpbnNlcnRCZWZvcmUiLCAibmV4dFNpYmxpbmciLCAibGluayIsICJiaW5kIiwgIm5vcm1hbExpbmtzIiwgInVuZGVsTGluayIsICJvcmlnaW5hbEhpZGRlbiIsICJlbmdpbmUiLCAiY3VycmVudEV4aXN0cyIsICJsYXN0U2F2ZWRTdGF0ZSIsICJsYXN0U2F2ZWRDYXRlZ29yeSIsICJsYXN0U2F2ZWRLZXkiLCAibGFzdFNhdmVkRXhpc3RzIiwgImxhc3RTYXZlZEhpZGRlbiIsICJpbnZva2VTdWdnZXN0aW9ucyIsICJkb250X2F1dG9jb21wbGV0ZSIsICJ0ZXh0Y2hhbmdlIiwgIm1ha2VGb3JtIiwgImZvcm0iLCAibWV0aG9kIiwgImFjY2VwdCIsICJzaXplIiwgImV2ZW50IiwgImltZSIsICJsYXN0S2V5IiwgInVzZXNDb21wb3NpdGlvbiIsICJrZXlDb3VudCIsICJwcm9jZXNzS2V5IiwgInJlc2V0S2V5U2VsZWN0aW9uIiwgImNhbmNlbCIsICJvbmJlZm9yZWRlYWN0aXZhdGUiLCAiY3JlYXRlVGV4dFJhbmdlIiwgInNhdmVWaWV3IiwgImxpc3QiLCAiaGlnaGxpZ2h0U3VnZ2VzdGlvbiIsICJmb2N1cyIsICJlbmdpbmVTZWxlY3RvciIsICJvcHQiLCAic2VsZWN0ZWQiLCAic2VsZWN0ZWRJbmRleCIsICJidXR0b25fbGFiZWwiLCAiX2lkIiwgImRlZmF1bHRUZXh0IiwgImxhYmVsIiwgIk9LIiwgIm9rIiwgImNhbmNlbEJ1dHRvbiIsICJwb3NpdGlvbiIsICJ3aGl0ZVNwYWNlIiwgIl9pNCIsICJfZWRpdG9yczQiLCAib3JpZ2luYWxTdGF0ZSIsICJyZWFkT25seSIsICJyZW1vdmVFZGl0b3IiLCAiYmFja2dyb3VuZENvbG9yIiwgIm5leHQiLCAicm9sbGJhY2siLCAidW5kb0xpbmsiLCAiZG9udENoZWNrIiwgInNhbml0aXplSW5wdXQiLCAib3JpZ2luYWwiLCAiX2k1IiwgIl9lZGl0b3JzNSIsICJjc3NUZXh0IiwgInRleHREZWNvcmF0aW9uIiwgInNlbGVjdEVuZ2luZSIsICJlbmdpbmVOYW1lIiwgIm1ha2VDYWxsIiwgImNhbGxiYWNrT2JqIiwgImNsZWFuS2V5IiwgImNiIiwgInoiLCAiY2FsbHNNYWRlIiwgIm5vZkNhbGxzIiwgImFsbFRpdGxlcyIsICJkb250Q2FjaGUiLCAiY2FuY2VsbGVkIiwgImdldEpTT04iLCAiQXJyYXkiLCAiaXNBcnJheSIsICJmb3JjZSIsICJwaXBlIiwgIm1ha2VDYWxscyIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJlbmdpbmVfIiwgIndnU2NyaXB0UGF0aCIsICJkb250QXV0b2NvbXBsZXRlIiwgImxhc3RRdWVyeSIsICJ2Tm9ybWFsaXplZCIsICJrbm93blRvRXhpc3QiLCAidkxvdyIsICJzb3J0IiwgImEiLCAiYiIsICJwcmVmaXhNYXRjaEEiLCAicHJlZml4TWF0Y2hCIiwgImFMb3ciLCAiYkxvdyIsICJmaXJzdFRpdGxlIiwgImNvbXBsZXRlZCIsICJhdXRvQ29tcGxldGUiLCAiZXhpc3RpbmciLCAibm9mSXRlbXMiLCAiYWxpZ24iLCAiekluZGV4IiwgImFuY2hvciIsICJsaXN0aCIsICJ0b3AiLCAib2Zmc2V0VG9wIiwgIm9mZnNldEhlaWdodCIsICJtYXhMaXN0SGVpZ2h0IiwgInZpZXdwb3J0IiwgIndoYXQiLCAiZXZhbHVhdGUiLCAib3BlcmEiLCAiZG9jdW1lbnRFbGVtZW50IiwgInNjcm9sbF9vZmZzZXQiLCAibm9kZSIsICJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCAiYm94IiwgIngiLCAicm91bmQiLCAibGVmdCIsICJ5IiwgInQiLCAibCIsICJvZmZzZXRMZWZ0IiwgIm9mZnNldFBhcmVudCIsICJ0ZXh0UG9zIiwgIm5sIiwgIm50IiwgIm9mZnNldCIsICJ0ZXh0Qm94V2lkdGgiLCAib2Zmc2V0V2lkdGgiLCAiY2xpZW50V2lkdGgiLCAic2Nyb2xsIiwgInZpZXdfdyIsICJ3IiwgImxfcG9zIiwgInJpZ2h0IiwgInJlbGF0aXZlX29mZnNldCIsICJhY3RWYWwiLCAibm9ybWFsaXplZEFjdFZhbCIsICJkb250TW9kaWZ5IiwgImNhblNlbGVjdCIsICJzZXRTZWxlY3Rpb25SYW5nZSIsICJzZWxlY3Rpb25TdGFydCIsICJzZWxlY3Rpb25FbmQiLCAibmV3X3NlbGVjdGlvbiIsICJtb3ZlIiwgIm1vdmVFbmQiLCAic2VsZWN0IiwgImdldFNlbGVjdGlvbiIsICJzZWxlY3Rpb24iLCAiY3JlYXRlUmFuZ2UiLCAicm5nIiwgImR1cGxpY2F0ZSIsICJ0ZXh0Um5nIiwgInNldEVuZFBvaW50IiwgImN1cnIiLCAidGd0IiwgImhvdGNhdF9kb250X2FkZF90b193YXRjaGxpc3QiLCAiSG90Q2F0RG9udEFkZFRvV2F0Y2hsaXN0IiwgImhvdGNhdF9ub19hdXRvY29tbWl0IiwgIkhvdENhdE5vQXV0b0NvbW1pdCIsICJob3RjYXRfZGVsX25lZWRzX2RpZmYiLCAiSG90Q2F0RGVsTmVlZHNEaWZmIiwgImhvdGNhdF9zdWdnZXN0aW9uX2RlbGF5IiwgIkhvdENhdFN1Z2dlc3Rpb25EZWxheSIsICJob3RjYXRfZWRpdGJveF93aWR0aCIsICJIb3RDYXRFZGl0Qm94V2lkdGgiLCAiaG90Y2F0X3N1Z2dlc3Rpb25zIiwgIkhvdENhdFN1Z2dlc3Rpb25zIiwgImhvdGNhdF9zdWdnZXN0aW9uc19maXhlZCIsICJIb3RDYXRGaXhlZFN1Z2dlc3Rpb25zIiwgImhvdGNhdF9zaW5nbGVfY2hhbmdlc19hcmVfbWlub3IiLCAiSG90Q2F0TWlub3JTaW5nbGVDaGFuZ2VzIiwgImhvdGNhdF9jaGFuZ2VkX2JhY2tncm91bmQiLCAiSG90Q2F0Q2hhbmdlZEJhY2tncm91bmQiLCAiaG90Y2F0X3VzZV9jYXRlZ29yeV9saW5rcyIsICJIb3RDYXRVc2VDYXRlZ29yeUxpbmtzIiwgImhvdGNhdF9saXN0X3NpemUiLCAiSG90Q2F0TGlzdFNpemUiLCAiSG90Q2F0Q2hhbmdlVGFnIiwgImVGb3JtIiwgImVkaXRmb3JtIiwgImNhdFJlZ0V4cCIsICJvbGRUeHQiLCAiaXNNaW5vckNoYW5nZSIsICJuZXdUeHQiLCAib2xkTGluZXMiLCAibmV3TGluZXMiLCAiY0FyciIsICJleGNlcHQiLCAiYUFyciIsICJiQXJyIiwgImxBcnIiLCAic0FyciIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJpdGVtIiwgImluZCIsICJmaWx0ZXIiLCAiYyIsICJ0cmltIiwgInF1ZXJ5U2VsZWN0b3IiLCAic3VtIiwgInN1bUEiLCAiJGN0IiwgInJlbW92ZUNoYW5nZVRhZyIsICJOdW1iZXIiLCAicGFyc2VJbnQiLCAiaXNOYU4iLCAibWluIiwgIl9pNiIsICJfT2JqZWN0JGVudHJpZXMiLCAiZW50cmllcyIsICJzdWdnZXN0aW9uQ29uZmlnIiwgImRlZmF1bHRWaWV3IiwgImdldENvbXB1dGVkU3R5bGUiLCAiZ2V0UHJvcGVydHlWYWx1ZSIsICJjdXJyZW50U3R5bGUiLCAiZGlyZWN0aW9uIiwgImNhbl9lZGl0IiwgImNsb3NlRm9ybSIsICJfaTciLCAiX2VkaXRvcnM2IiwgInNldHVwX3VwbG9hZCIsICJpcCIsICJyZXVwbG9hZCIsICJkZXN0RmlsZSIsICJsYWJlbENlbGwiLCAibGluZUNlbGwiLCAidGV4dEFsaWduIiwgIm1hcmdpbiIsICJib3JkZXIiLCAidmVydGljYWxBbGlnbiIsICJuZXdSb3ciLCAiaW5zZXJ0Um93IiwgIm9sZFN1Ym1pdCIsICJkb19zdWJtaXQiLCAiZXZhbCIsICJGdW5jdGlvbiIsICJlYiIsICJhZGRlZE9uZSIsICJfaTgiLCAiX2VkaXRvcnM3IiwgIm5ld19jYXQiLCAiX2NsZWFuZWRUZXh0IiwgInJlZ2V4IiwgIm9uc3VibWl0IiwgImNsZWFuZWRUZXh0IiwgImlzT25QYWdlIiwgIm5vZGVUeXBlIiwgIk5vZGUiLCAiRUxFTUVOVF9OT0RFIiwgImNhdFRpdGxlIiwgImdldEF0dHJpYnV0ZSIsICJpbml0aWFsaXplZCIsICJzZXR1cFRpbWVvdXQiLCAiZmluZEJ5Q2xhc3MiLCAic2NvcGUiLCAic2V0dXAiLCAiYWRkaXRpb25hbFdvcmsiLCAiY2xlYXJUaW1lb3V0IiwgImhpZGRlbkNhdHMiLCAiZm9vdGVyIiwgImNvbnRhaW5lciIsICJjcmVhdGVFZGl0b3JzIiwgImNvcHlDYXRzIiwgImF0IiwgImxhc3RTcGFuIiwgImVuYWJsZU11bHRpIiwgImlubmVySFRNTCIsICJjdXJzb3IiLCAiaG9vayIsICJmaXJlIiwgImNyZWF0ZUNvbW1pdEZvcm0iLCAiZm9ybUNvbnRhaW5lciIsICJ3Z1BhZ2VDb250ZW50TW9kZWwiLCAiZ2V0UGFnZSIsICJzZXRTdGF0ZSIsICJuZXdTcGFucyIsICJnZXRTdGF0ZSIsICJfaTkiLCAiX2VkaXRvcnM4IiwgInJlYWxseV9ydW4iLCAid2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUiLCAiVXBsb2FkRm9ybSIsICJwcmV2aW91c19ob3RjYXRfc3RhdGUiLCAid2dJc0FydGljbGUiLCAicnVuIiwgInN0YXJ0ZWQiLCAiaG90Y2F0X2dldF9zdGF0ZSIsICJob3RjYXRfc2V0X3N0YXRlIiwgImhvdGNhdF9jbG9zZV9mb3JtIiwgInJ1bldoZW5SZWFkeSJdCn0K

})();

/* </nowiki> */

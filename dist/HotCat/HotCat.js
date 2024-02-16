/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|title=HotCat|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://commons.wikimedia.org/wiki/MediaWiki:Gadget-HotCat.js}
 * @base {@link https://commons.wikimedia.org/wiki/MediaWiki:Gadget-HotCat.js/zh-hans}
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-HotCat.js/local_defaults}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/HotCat}
 */

/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|title=CheckCategories HotCat Extension|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://commons.wikimedia.org/wiki/MediaWiki:Gadget-Hotcatcheck.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/HotCat/HotCat-check.js}
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
//! src/HotCat/modules/check.ts
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
    var _self$wpTextbox1$valu;
    if (storageItem === "disabled") {
      return true;
    }
    const self2 = this;
    const newVal = (_self$wpTextbox1$valu = self2.wpTextbox1.value) === null || _self$wpTextbox1$valu === void 0 ? void 0 : _self$wpTextbox1$valu.replace(checkCategoriesRegExp, "");
    const dlgButtons = {};
    let $dialogCheckStorage;
    let $permaSaveHint;
    let $textHintNode;
    let $dialog;
    const doRemove = () => {
      self2.wpSummary.value = // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      "Removing [[Template:Check categories|{".concat("{Check categories}}]] ".concat(self2.wpSummary.value));
      self2.wpTextbox1.value = newVal;
    };
    const writeStorage = (val) => {
      mw.storage.set(storageItemName, val, 604800);
    };
    dlgButtons["Yes, Remove"] = function() {
      var _$dialogCheckStorage$;
      doRemove();
      if ((_$dialogCheckStorage$ = $dialogCheckStorage[0]) !== null && _$dialogCheckStorage$ !== void 0 && _$dialogCheckStorage$.checked) {
        writeStorage("auto");
      }
      $(this).dialog("close");
    };
    dlgButtons["No, keep it"] = function() {
      var _$dialogCheckStorage$2;
      if ((_$dialogCheckStorage$2 = $dialogCheckStorage[0]) !== null && _$dialogCheckStorage$2 !== void 0 && _$dialogCheckStorage$2.checked) {
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
          void mw.notify("Unable to save to your common.js using the API\n".concat(editStat.error.code, "\n").concat(editStat.error.info), {
            tag: "hotCatCheck",
            type: "error"
          });
          $el.text("Edit-Error!");
        } else {
          $el.text("Done.");
          $permaSaveHint.fadeOut();
        }
      };
      void api.postWithToken("csrf", params).then(editDone);
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
          void mw.notify('Unable to remove "Check categories" with the API\n'.concat(editStat.error.code, "\n").concat(editStat.error.info), {
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
      void api.postWithToken("csrf", params).then(editDone);
    };
    $el.text("Doing");
    void $.ajax({
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
      rvslots: "main",
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
        rvslots: "main",
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mYWlscy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Rlc2NyaXB0b3JzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1jYWxsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NsYXNzb2YtcmF3LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtY2FsbGFibGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nZXQtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXN5bWJvbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RyeS10by1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWNhbGxhYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1Zy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1uYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9tYXRoLXRydW5jLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtYXJyYXkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1zZXQtbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9lcy1ub3QtZXhjZWVkLXNhZmUtaW50ZWdlci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5wdXNoLmpzIiwgInNyYy9Ib3RDYXQvbW9kdWxlcy9jaGVjay50cyIsICJzcmMvSG90Q2F0L21vZHVsZXMvZ2V0TWVzc2FnZS50cyIsICJzcmMvSG90Q2F0L21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0hvdENhdC9tb2R1bGVzL21lc3NhZ2VzLnRzIiwgInNyYy9Ib3RDYXQvSG90Q2F0LmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIndXNlIHN0cmljdCc7XG52YXIgY2hlY2sgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICYmIGl0Lk1hdGggPT09IE1hdGggJiYgaXQ7XG59O1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxubW9kdWxlLmV4cG9ydHMgPVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZ2xvYmFsLXRoaXMgLS0gc2FmZVxuICBjaGVjayh0eXBlb2YgZ2xvYmFsVGhpcyA9PSAnb2JqZWN0JyAmJiBnbG9iYWxUaGlzKSB8fFxuICBjaGVjayh0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdykgfHxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAtLSBzYWZlXG4gIGNoZWNrKHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYpIHx8XG4gIGNoZWNrKHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsKSB8fFxuICBjaGVjayh0eXBlb2YgdGhpcyA9PSAnb2JqZWN0JyAmJiB0aGlzKSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmMgLS0gZmFsbGJhY2tcbiAgKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pKCkgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBEZXRlY3QgSUU4J3MgaW5jb21wbGV0ZSBkZWZpbmVQcm9wZXJ0eSBpbXBsZW1lbnRhdGlvblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sIDEsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pWzFdICE9PSA3O1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWZ1bmN0aW9uLXByb3RvdHlwZS1iaW5kIC0tIHNhZmVcbiAgdmFyIHRlc3QgPSAoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9KS5iaW5kKCk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gdHlwZW9mIHRlc3QgIT0gJ2Z1bmN0aW9uJyB8fCB0ZXN0Lmhhc093blByb3BlcnR5KCdwcm90b3R5cGUnKTtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgY2FsbCA9IEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9CSU5EID8gY2FsbC5iaW5kKGNhbGwpIDogZnVuY3Rpb24gKCkge1xuICByZXR1cm4gY2FsbC5hcHBseShjYWxsLCBhcmd1bWVudHMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gTmFzaG9ybiB+IEpESzggYnVnXG52YXIgTkFTSE9STl9CVUcgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgJiYgISRwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHsgMTogMiB9LCAxKTtcblxuLy8gYE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGVgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QucHJvdG90eXBlLnByb3BlcnR5aXNlbnVtZXJhYmxlXG5leHBvcnRzLmYgPSBOQVNIT1JOX0JVRyA/IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKFYpIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGhpcywgVik7XG4gIHJldHVybiAhIWRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci5lbnVtZXJhYmxlO1xufSA6ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgY2FsbCA9IEZ1bmN0aW9uUHJvdG90eXBlLmNhbGw7XG52YXIgdW5jdXJyeVRoaXNXaXRoQmluZCA9IE5BVElWRV9CSU5EICYmIEZ1bmN0aW9uUHJvdG90eXBlLmJpbmQuYmluZChjYWxsLCBjYWxsKTtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfQklORCA/IHVuY3VycnlUaGlzV2l0aEJpbmQgOiBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY2FsbC5hcHBseShmbiwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG52YXIgdG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyh7fS50b1N0cmluZyk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBzdHJpbmdTbGljZSh0b1N0cmluZyhpdCksIDgsIC0xKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcbnZhciBzcGxpdCA9IHVuY3VycnlUaGlzKCcnLnNwbGl0KTtcblxuLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3Ncbm1vZHVsZS5leHBvcnRzID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyB0aHJvd3MgYW4gZXJyb3IgaW4gcmhpbm8sIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9yaGluby9pc3N1ZXMvMzQ2XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gISRPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKTtcbn0pID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjbGFzc29mKGl0KSA9PT0gJ1N0cmluZycgPyBzcGxpdChpdCwgJycpIDogJE9iamVjdChpdCk7XG59IDogJE9iamVjdDtcbiIsICIndXNlIHN0cmljdCc7XG4vLyB3ZSBjYW4ndCB1c2UganVzdCBgaXQgPT0gbnVsbGAgc2luY2Ugb2YgYGRvY3VtZW50LmFsbGAgc3BlY2lhbCBjYXNlXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLUlzSFRNTEREQS1pbnRlcm5hbC1zbG90LWFlY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID09PSBudWxsIHx8IGl0ID09PSB1bmRlZmluZWQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYFJlcXVpcmVPYmplY3RDb2VyY2libGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZXF1aXJlb2JqZWN0Y29lcmNpYmxlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXNOdWxsT3JVbmRlZmluZWQoaXQpKSB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJbmRleGVkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoaXQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1Jc0hUTUxEREEtaW50ZXJuYWwtc2xvdFxudmFyIGRvY3VtZW50QWxsID0gdHlwZW9mIGRvY3VtZW50ID09ICdvYmplY3QnICYmIGRvY3VtZW50LmFsbDtcblxuLy8gYElzQ2FsbGFibGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc2NhbGxhYmxlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9uby10eXBlb2YtdW5kZWZpbmVkIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBkb2N1bWVudEFsbCA9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudEFsbCAhPT0gdW5kZWZpbmVkID8gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJyB8fCBhcmd1bWVudCA9PT0gZG9jdW1lbnRBbGw7XG59IDogZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogaXNDYWxsYWJsZShpdCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgYUZ1bmN0aW9uID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBpc0NhbGxhYmxlKGFyZ3VtZW50KSA/IGFyZ3VtZW50IDogdW5kZWZpbmVkO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZXNwYWNlLCBtZXRob2QpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPCAyID8gYUZ1bmN0aW9uKGdsb2JhbFtuYW1lc3BhY2VdKSA6IGdsb2JhbFtuYW1lc3BhY2VdICYmIGdsb2JhbFtuYW1lc3BhY2VdW21ldGhvZF07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB1bmN1cnJ5VGhpcyh7fS5pc1Byb3RvdHlwZU9mKTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBuYXZpZ2F0b3IgIT0gJ3VuZGVmaW5lZCcgJiYgU3RyaW5nKG5hdmlnYXRvci51c2VyQWdlbnQpIHx8ICcnO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50Jyk7XG5cbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgRGVubyA9IGdsb2JhbC5EZW5vO1xudmFyIHZlcnNpb25zID0gcHJvY2VzcyAmJiBwcm9jZXNzLnZlcnNpb25zIHx8IERlbm8gJiYgRGVuby52ZXJzaW9uO1xudmFyIHY4ID0gdmVyc2lvbnMgJiYgdmVyc2lvbnMudjg7XG52YXIgbWF0Y2gsIHZlcnNpb247XG5cbmlmICh2OCkge1xuICBtYXRjaCA9IHY4LnNwbGl0KCcuJyk7XG4gIC8vIGluIG9sZCBDaHJvbWUsIHZlcnNpb25zIG9mIFY4IGlzbid0IFY4ID0gQ2hyb21lIC8gMTBcbiAgLy8gYnV0IHRoZWlyIGNvcnJlY3QgdmVyc2lvbnMgYXJlIG5vdCBpbnRlcmVzdGluZyBmb3IgdXNcbiAgdmVyc2lvbiA9IG1hdGNoWzBdID4gMCAmJiBtYXRjaFswXSA8IDQgPyAxIDogKyhtYXRjaFswXSArIG1hdGNoWzFdKTtcbn1cblxuLy8gQnJvd3NlckZTIE5vZGVKUyBgcHJvY2Vzc2AgcG9seWZpbGwgaW5jb3JyZWN0bHkgc2V0IGAudjhgIHRvIGAwLjBgXG4vLyBzbyBjaGVjayBgdXNlckFnZW50YCBldmVuIGlmIGAudjhgIGV4aXN0cywgYnV0IDBcbmlmICghdmVyc2lvbiAmJiB1c2VyQWdlbnQpIHtcbiAgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2goL0VkZ2VcXC8oXFxkKykvKTtcbiAgaWYgKCFtYXRjaCB8fCBtYXRjaFsxXSA+PSA3NCkge1xuICAgIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9DaHJvbWVcXC8oXFxkKykvKTtcbiAgICBpZiAobWF0Y2gpIHZlcnNpb24gPSArbWF0Y2hbMV07XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2ZXJzaW9uO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLXN5bWJvbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZyAqL1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24nKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcblxudmFyICRTdHJpbmcgPSBnbG9iYWwuU3RyaW5nO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5c3ltYm9scyAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xubW9kdWxlLmV4cG9ydHMgPSAhIU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN5bWJvbCA9IFN5bWJvbCgnc3ltYm9sIGRldGVjdGlvbicpO1xuICAvLyBDaHJvbWUgMzggU3ltYm9sIGhhcyBpbmNvcnJlY3QgdG9TdHJpbmcgY29udmVyc2lvblxuICAvLyBgZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzYCBwb2x5ZmlsbCBzeW1ib2xzIGNvbnZlcnRlZCB0byBvYmplY3QgYXJlIG5vdCBTeW1ib2wgaW5zdGFuY2VzXG4gIC8vIG5iOiBEbyBub3QgY2FsbCBgU3RyaW5nYCBkaXJlY3RseSB0byBhdm9pZCB0aGlzIGJlaW5nIG9wdGltaXplZCBvdXQgdG8gYHN5bWJvbCsnJ2Agd2hpY2ggd2lsbCxcbiAgLy8gb2YgY291cnNlLCBmYWlsLlxuICByZXR1cm4gISRTdHJpbmcoc3ltYm9sKSB8fCAhKE9iamVjdChzeW1ib2wpIGluc3RhbmNlb2YgU3ltYm9sKSB8fFxuICAgIC8vIENocm9tZSAzOC00MCBzeW1ib2xzIGFyZSBub3QgaW5oZXJpdGVkIGZyb20gRE9NIGNvbGxlY3Rpb25zIHByb3RvdHlwZXMgdG8gaW5zdGFuY2VzXG4gICAgIVN5bWJvbC5zaGFtICYmIFY4X1ZFUlNJT04gJiYgVjhfVkVSU0lPTiA8IDQxO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tc3ltYm9sIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zeW1ib2wtY29uc3RydWN0b3ItZGV0ZWN0aW9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX1NZTUJPTFxuICAmJiAhU3ltYm9sLnNoYW1cbiAgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mJyk7XG52YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbm1vZHVsZS5leHBvcnRzID0gVVNFX1NZTUJPTF9BU19VSUQgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyICRTeW1ib2wgPSBnZXRCdWlsdEluKCdTeW1ib2wnKTtcbiAgcmV0dXJuIGlzQ2FsbGFibGUoJFN5bWJvbCkgJiYgaXNQcm90b3R5cGVPZigkU3ltYm9sLnByb3RvdHlwZSwgJE9iamVjdChpdCkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJFN0cmluZyA9IFN0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gJFN0cmluZyhhcmd1bWVudCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuICdPYmplY3QnO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgdHJ5VG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdHJ5LXRvLXN0cmluZycpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYEFzc2VydDogSXNDYWxsYWJsZShhcmd1bWVudCkgaXMgdHJ1ZWBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIGlmIChpc0NhbGxhYmxlKGFyZ3VtZW50KSkgcmV0dXJuIGFyZ3VtZW50O1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcih0cnlUb1N0cmluZyhhcmd1bWVudCkgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkJyk7XG5cbi8vIGBHZXRNZXRob2RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1nZXRtZXRob2Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFYsIFApIHtcbiAgdmFyIGZ1bmMgPSBWW1BdO1xuICByZXR1cm4gaXNOdWxsT3JVbmRlZmluZWQoZnVuYykgPyB1bmRlZmluZWQgOiBhQ2FsbGFibGUoZnVuYyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgT3JkaW5hcnlUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9yZGluYXJ5dG9wcmltaXRpdmVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBwcmVmKSB7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAocHJlZiA9PT0gJ3N0cmluZycgJiYgaXNDYWxsYWJsZShmbiA9IGlucHV0LnRvU3RyaW5nKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKGlzQ2FsbGFibGUoZm4gPSBpbnB1dC52YWx1ZU9mKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHByZWYgIT09ICdzdHJpbmcnICYmIGlzQ2FsbGFibGUoZm4gPSBpbnB1dC50b1N0cmluZykgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHRyeSB7XG4gICAgZGVmaW5lUHJvcGVydHkoZ2xvYmFsLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGdsb2JhbFtrZXldID0gdmFsdWU7XG4gIH0gcmV0dXJuIHZhbHVlO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcblxudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgZGVmaW5lR2xvYmFsUHJvcGVydHkoU0hBUkVELCB7fSk7XG5cbm1vZHVsZS5leHBvcnRzID0gc3RvcmU7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xudmFyIHN0b3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHt9KTtcbn0pKCd2ZXJzaW9ucycsIFtdKS5wdXNoKHtcbiAgdmVyc2lvbjogJzMuMzUuMScsXG4gIG1vZGU6IElTX1BVUkUgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAxNC0yMDI0IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJyxcbiAgbGljZW5zZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2Jsb2IvdjMuMzUuMS9MSUNFTlNFJyxcbiAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMnXG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbi8vIGBUb09iamVjdGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvb2JqZWN0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gJE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcblxudmFyIGhhc093blByb3BlcnR5ID0gdW5jdXJyeVRoaXMoe30uaGFzT3duUHJvcGVydHkpO1xuXG4vLyBgSGFzT3duUHJvcGVydHlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1oYXNvd25wcm9wZXJ0eVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1oYXNvd24gLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuaGFzT3duIHx8IGZ1bmN0aW9uIGhhc093bihpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eSh0b09iamVjdChpdCksIGtleSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxudmFyIGlkID0gMDtcbnZhciBwb3N0Zml4ID0gTWF0aC5yYW5kb20oKTtcbnZhciB0b1N0cmluZyA9IHVuY3VycnlUaGlzKDEuMC50b1N0cmluZyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnICsgKGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXkpICsgJylfJyArIHRvU3RyaW5nKCsraWQgKyBwb3N0Zml4LCAzNik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3ltYm9sLWNvbnN0cnVjdG9yLWRldGVjdGlvbicpO1xudmFyIFVTRV9TWU1CT0xfQVNfVUlEID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkJyk7XG5cbnZhciBTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyIFdlbGxLbm93blN5bWJvbHNTdG9yZSA9IHNoYXJlZCgnd2tzJyk7XG52YXIgY3JlYXRlV2VsbEtub3duU3ltYm9sID0gVVNFX1NZTUJPTF9BU19VSUQgPyBTeW1ib2xbJ2ZvciddIHx8IFN5bWJvbCA6IFN5bWJvbCAmJiBTeW1ib2wud2l0aG91dFNldHRlciB8fCB1aWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgaWYgKCFoYXNPd24oV2VsbEtub3duU3ltYm9sc1N0b3JlLCBuYW1lKSkge1xuICAgIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXSA9IE5BVElWRV9TWU1CT0wgJiYgaGFzT3duKFN5bWJvbCwgbmFtZSlcbiAgICAgID8gU3ltYm9sW25hbWVdXG4gICAgICA6IGNyZWF0ZVdlbGxLbm93blN5bWJvbCgnU3ltYm9sLicgKyBuYW1lKTtcbiAgfSByZXR1cm4gV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciBvcmRpbmFyeVRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZScpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbnZhciBUT19QUklNSVRJVkUgPSB3ZWxsS25vd25TeW1ib2woJ3RvUHJpbWl0aXZlJyk7XG5cbi8vIGBUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJpbWl0aXZlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnB1dCwgcHJlZikge1xuICBpZiAoIWlzT2JqZWN0KGlucHV0KSB8fCBpc1N5bWJvbChpbnB1dCkpIHJldHVybiBpbnB1dDtcbiAgdmFyIGV4b3RpY1RvUHJpbSA9IGdldE1ldGhvZChpbnB1dCwgVE9fUFJJTUlUSVZFKTtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKGV4b3RpY1RvUHJpbSkge1xuICAgIGlmIChwcmVmID09PSB1bmRlZmluZWQpIHByZWYgPSAnZGVmYXVsdCc7XG4gICAgcmVzdWx0ID0gY2FsbChleG90aWNUb1ByaW0sIGlucHV0LCBwcmVmKTtcbiAgICBpZiAoIWlzT2JqZWN0KHJlc3VsdCkgfHwgaXNTeW1ib2wocmVzdWx0KSkgcmV0dXJuIHJlc3VsdDtcbiAgICB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbiAgfVxuICBpZiAocHJlZiA9PT0gdW5kZWZpbmVkKSBwcmVmID0gJ251bWJlcic7XG4gIHJldHVybiBvcmRpbmFyeVRvUHJpbWl0aXZlKGlucHV0LCBwcmVmKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xudmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXN5bWJvbCcpO1xuXG4vLyBgVG9Qcm9wZXJ0eUtleWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJvcGVydHlrZXlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBrZXkgPSB0b1ByaW1pdGl2ZShhcmd1bWVudCwgJ3N0cmluZycpO1xuICByZXR1cm4gaXNTeW1ib2woa2V5KSA/IGtleSA6IGtleSArICcnO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgZG9jdW1lbnQgPSBnbG9iYWwuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBFWElTVFMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBFWElTVFMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcblxuLy8gVGhhbmtzIHRvIElFOCBmb3IgaXRzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3JlYXRlRWxlbWVudCgnZGl2JyksICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfVxuICB9KS5hICE9PSA3O1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0luZGV4ZWRPYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhc093bihPLCBQKSkgcmV0dXJuIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcighY2FsbChwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZS5mLCBPLCBQKSwgT1tQXSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbi8vIFY4IH4gQ2hyb21lIDM2LVxuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzMzNFxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0sICdwcm90b3R5cGUnLCB7XG4gICAgdmFsdWU6IDQyLFxuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KS5wcm90b3R5cGUgIT09IDQyO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgJFN0cmluZyA9IFN0cmluZztcbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgQXNzZXJ0OiBUeXBlKGFyZ3VtZW50KSBpcyBPYmplY3RgXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoaXNPYmplY3QoYXJndW1lbnQpKSByZXR1cm4gYXJndW1lbnQ7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKCRTdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgYW4gb2JqZWN0Jyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG52YXIgVjhfUFJPVE9UWVBFX0RFRklORV9CVUcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdjgtcHJvdG90eXBlLWRlZmluZS1idWcnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleScpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBFTlVNRVJBQkxFID0gJ2VudW1lcmFibGUnO1xudmFyIENPTkZJR1VSQUJMRSA9ICdjb25maWd1cmFibGUnO1xudmFyIFdSSVRBQkxFID0gJ3dyaXRhYmxlJztcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0eWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0eVxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgPyBWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA/IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKHR5cGVvZiBPID09PSAnZnVuY3Rpb24nICYmIFAgPT09ICdwcm90b3R5cGUnICYmICd2YWx1ZScgaW4gQXR0cmlidXRlcyAmJiBXUklUQUJMRSBpbiBBdHRyaWJ1dGVzICYmICFBdHRyaWJ1dGVzW1dSSVRBQkxFXSkge1xuICAgIHZhciBjdXJyZW50ID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKTtcbiAgICBpZiAoY3VycmVudCAmJiBjdXJyZW50W1dSSVRBQkxFXSkge1xuICAgICAgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gICAgICBBdHRyaWJ1dGVzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IENPTkZJR1VSQUJMRSBpbiBBdHRyaWJ1dGVzID8gQXR0cmlidXRlc1tDT05GSUdVUkFCTEVdIDogY3VycmVudFtDT05GSUdVUkFCTEVdLFxuICAgICAgICBlbnVtZXJhYmxlOiBFTlVNRVJBQkxFIGluIEF0dHJpYnV0ZXMgPyBBdHRyaWJ1dGVzW0VOVU1FUkFCTEVdIDogY3VycmVudFtFTlVNRVJBQkxFXSxcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlXG4gICAgICB9O1xuICAgIH1cbiAgfSByZXR1cm4gJGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xufSA6ICRkZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiAkZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIGtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0RGVzY3JpcHRvciA9IERFU0NSSVBUT1JTICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbnZhciBFWElTVFMgPSBoYXNPd24oRnVuY3Rpb25Qcm90b3R5cGUsICduYW1lJyk7XG4vLyBhZGRpdGlvbmFsIHByb3RlY3Rpb24gZnJvbSBtaW5pZmllZCAvIG1hbmdsZWQgLyBkcm9wcGVkIGZ1bmN0aW9uIG5hbWVzXG52YXIgUFJPUEVSID0gRVhJU1RTICYmIChmdW5jdGlvbiBzb21ldGhpbmcoKSB7IC8qIGVtcHR5ICovIH0pLm5hbWUgPT09ICdzb21ldGhpbmcnO1xudmFyIENPTkZJR1VSQUJMRSA9IEVYSVNUUyAmJiAoIURFU0NSSVBUT1JTIHx8IChERVNDUklQVE9SUyAmJiBnZXREZXNjcmlwdG9yKEZ1bmN0aW9uUHJvdG90eXBlLCAnbmFtZScpLmNvbmZpZ3VyYWJsZSkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgRVhJU1RTOiBFWElTVFMsXG4gIFBST1BFUjogUFJPUEVSLFxuICBDT05GSUdVUkFCTEU6IENPTkZJR1VSQUJMRVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHN0b3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xuXG52YXIgZnVuY3Rpb25Ub1N0cmluZyA9IHVuY3VycnlUaGlzKEZ1bmN0aW9uLnRvU3RyaW5nKTtcblxuLy8gdGhpcyBoZWxwZXIgYnJva2VuIGluIGBjb3JlLWpzQDMuNC4xLTMuNC40YCwgc28gd2UgY2FuJ3QgdXNlIGBzaGFyZWRgIGhlbHBlclxuaWYgKCFpc0NhbGxhYmxlKHN0b3JlLmluc3BlY3RTb3VyY2UpKSB7XG4gIHN0b3JlLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb25Ub1N0cmluZyhpdCk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RvcmUuaW5zcGVjdFNvdXJjZTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIFdlYWtNYXAgPSBnbG9iYWwuV2Vha01hcDtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0NhbGxhYmxlKFdlYWtNYXApICYmIC9uYXRpdmUgY29kZS8udGVzdChTdHJpbmcoV2Vha01hcCkpO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xuXG52YXIga2V5cyA9IHNoYXJlZCgna2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIGtleXNba2V5XSB8fCAoa2V5c1trZXldID0gdWlkKGtleSkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfV0VBS19NQVAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2Vhay1tYXAtYmFzaWMtZGV0ZWN0aW9uJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcbnZhciBzaGFyZWRLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLWtleScpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcblxudmFyIE9CSkVDVF9BTFJFQURZX0lOSVRJQUxJWkVEID0gJ09iamVjdCBhbHJlYWR5IGluaXRpYWxpemVkJztcbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xudmFyIFdlYWtNYXAgPSBnbG9iYWwuV2Vha01hcDtcbnZhciBzZXQsIGdldCwgaGFzO1xuXG52YXIgZW5mb3JjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaGFzKGl0KSA/IGdldChpdCkgOiBzZXQoaXQsIHt9KTtcbn07XG5cbnZhciBnZXR0ZXJGb3IgPSBmdW5jdGlvbiAoVFlQRSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGl0KSB7XG4gICAgdmFyIHN0YXRlO1xuICAgIGlmICghaXNPYmplY3QoaXQpIHx8IChzdGF0ZSA9IGdldChpdCkpLnR5cGUgIT09IFRZUEUpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0luY29tcGF0aWJsZSByZWNlaXZlciwgJyArIFRZUEUgKyAnIHJlcXVpcmVkJyk7XG4gICAgfSByZXR1cm4gc3RhdGU7XG4gIH07XG59O1xuXG5pZiAoTkFUSVZFX1dFQUtfTUFQIHx8IHNoYXJlZC5zdGF0ZSkge1xuICB2YXIgc3RvcmUgPSBzaGFyZWQuc3RhdGUgfHwgKHNoYXJlZC5zdGF0ZSA9IG5ldyBXZWFrTWFwKCkpO1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1zZWxmLWFzc2lnbiAtLSBwcm90b3R5cGUgbWV0aG9kcyBwcm90ZWN0aW9uICovXG4gIHN0b3JlLmdldCA9IHN0b3JlLmdldDtcbiAgc3RvcmUuaGFzID0gc3RvcmUuaGFzO1xuICBzdG9yZS5zZXQgPSBzdG9yZS5zZXQ7XG4gIC8qIGVzbGludC1lbmFibGUgbm8tc2VsZi1hc3NpZ24gLS0gcHJvdG90eXBlIG1ldGhvZHMgcHJvdGVjdGlvbiAqL1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgaWYgKHN0b3JlLmhhcyhpdCkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIHN0b3JlLnNldChpdCwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHN0b3JlLmdldChpdCkgfHwge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBzdG9yZS5oYXMoaXQpO1xuICB9O1xufSBlbHNlIHtcbiAgdmFyIFNUQVRFID0gc2hhcmVkS2V5KCdzdGF0ZScpO1xuICBoaWRkZW5LZXlzW1NUQVRFXSA9IHRydWU7XG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICBpZiAoaGFzT3duKGl0LCBTVEFURSkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShpdCwgU1RBVEUsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBoYXNPd24oaXQsIFNUQVRFKSA/IGl0W1NUQVRFXSA6IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaGFzT3duKGl0LCBTVEFURSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldCxcbiAgZ2V0OiBnZXQsXG4gIGhhczogaGFzLFxuICBlbmZvcmNlOiBlbmZvcmNlLFxuICBnZXR0ZXJGb3I6IGdldHRlckZvclxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIENPTkZJR1VSQUJMRV9GVU5DVElPTl9OQU1FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLW5hbWUnKS5DT05GSUdVUkFCTEU7XG52YXIgaW5zcGVjdFNvdXJjZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnNwZWN0LXNvdXJjZScpO1xudmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUnKTtcblxudmFyIGVuZm9yY2VJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5lbmZvcmNlO1xudmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldDtcbnZhciAkU3RyaW5nID0gU3RyaW5nO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG52YXIgcmVwbGFjZSA9IHVuY3VycnlUaGlzKCcnLnJlcGxhY2UpO1xudmFyIGpvaW4gPSB1bmN1cnJ5VGhpcyhbXS5qb2luKTtcblxudmFyIENPTkZJR1VSQUJMRV9MRU5HVEggPSBERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHkoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9LCAnbGVuZ3RoJywgeyB2YWx1ZTogOCB9KS5sZW5ndGggIT09IDg7XG59KTtcblxudmFyIFRFTVBMQVRFID0gU3RyaW5nKFN0cmluZykuc3BsaXQoJ1N0cmluZycpO1xuXG52YXIgbWFrZUJ1aWx0SW4gPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSwgbmFtZSwgb3B0aW9ucykge1xuICBpZiAoc3RyaW5nU2xpY2UoJFN0cmluZyhuYW1lKSwgMCwgNykgPT09ICdTeW1ib2woJykge1xuICAgIG5hbWUgPSAnWycgKyByZXBsYWNlKCRTdHJpbmcobmFtZSksIC9eU3ltYm9sXFwoKFteKV0qKVxcKS4qJC8sICckMScpICsgJ10nO1xuICB9XG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZ2V0dGVyKSBuYW1lID0gJ2dldCAnICsgbmFtZTtcbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5zZXR0ZXIpIG5hbWUgPSAnc2V0ICcgKyBuYW1lO1xuICBpZiAoIWhhc093bih2YWx1ZSwgJ25hbWUnKSB8fCAoQ09ORklHVVJBQkxFX0ZVTkNUSU9OX05BTUUgJiYgdmFsdWUubmFtZSAhPT0gbmFtZSkpIHtcbiAgICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5KHZhbHVlLCAnbmFtZScsIHsgdmFsdWU6IG5hbWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KTtcbiAgICBlbHNlIHZhbHVlLm5hbWUgPSBuYW1lO1xuICB9XG4gIGlmIChDT05GSUdVUkFCTEVfTEVOR1RIICYmIG9wdGlvbnMgJiYgaGFzT3duKG9wdGlvbnMsICdhcml0eScpICYmIHZhbHVlLmxlbmd0aCAhPT0gb3B0aW9ucy5hcml0eSkge1xuICAgIGRlZmluZVByb3BlcnR5KHZhbHVlLCAnbGVuZ3RoJywgeyB2YWx1ZTogb3B0aW9ucy5hcml0eSB9KTtcbiAgfVxuICB0cnkge1xuICAgIGlmIChvcHRpb25zICYmIGhhc093bihvcHRpb25zLCAnY29uc3RydWN0b3InKSAmJiBvcHRpb25zLmNvbnN0cnVjdG9yKSB7XG4gICAgICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5KHZhbHVlLCAncHJvdG90eXBlJywgeyB3cml0YWJsZTogZmFsc2UgfSk7XG4gICAgLy8gaW4gVjggfiBDaHJvbWUgNTMsIHByb3RvdHlwZXMgb2Ygc29tZSBtZXRob2RzLCBsaWtlIGBBcnJheS5wcm90b3R5cGUudmFsdWVzYCwgYXJlIG5vbi13cml0YWJsZVxuICAgIH0gZWxzZSBpZiAodmFsdWUucHJvdG90eXBlKSB2YWx1ZS5wcm90b3R5cGUgPSB1bmRlZmluZWQ7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgdmFyIHN0YXRlID0gZW5mb3JjZUludGVybmFsU3RhdGUodmFsdWUpO1xuICBpZiAoIWhhc093bihzdGF0ZSwgJ3NvdXJjZScpKSB7XG4gICAgc3RhdGUuc291cmNlID0gam9pbihURU1QTEFURSwgdHlwZW9mIG5hbWUgPT0gJ3N0cmluZycgPyBuYW1lIDogJycpO1xuICB9IHJldHVybiB2YWx1ZTtcbn07XG5cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWV4dGVuZC1uYXRpdmUgLS0gcmVxdWlyZWRcbkZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZyA9IG1ha2VCdWlsdEluKGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gaXNDYWxsYWJsZSh0aGlzKSAmJiBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpLnNvdXJjZSB8fCBpbnNwZWN0U291cmNlKHRoaXMpO1xufSwgJ3RvU3RyaW5nJyk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgbWFrZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWFrZS1idWlsdC1pbicpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywga2V5LCB2YWx1ZSwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcbiAgdmFyIHNpbXBsZSA9IG9wdGlvbnMuZW51bWVyYWJsZTtcbiAgdmFyIG5hbWUgPSBvcHRpb25zLm5hbWUgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubmFtZSA6IGtleTtcbiAgaWYgKGlzQ2FsbGFibGUodmFsdWUpKSBtYWtlQnVpbHRJbih2YWx1ZSwgbmFtZSwgb3B0aW9ucyk7XG4gIGlmIChvcHRpb25zLmdsb2JhbCkge1xuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2UgZGVmaW5lR2xvYmFsUHJvcGVydHkoa2V5LCB2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghb3B0aW9ucy51bnNhZmUpIGRlbGV0ZSBPW2tleV07XG4gICAgICBlbHNlIGlmIChPW2tleV0pIHNpbXBsZSA9IHRydWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2UgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihPLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiAhb3B0aW9ucy5ub25Db25maWd1cmFibGUsXG4gICAgICB3cml0YWJsZTogIW9wdGlvbnMubm9uV3JpdGFibGVcbiAgICB9KTtcbiAgfSByZXR1cm4gTztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuXG4vLyBgTWF0aC50cnVuY2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW1hdGgudHJ1bmNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1tYXRoLXRydW5jIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gTWF0aC50cnVuYyB8fCBmdW5jdGlvbiB0cnVuYyh4KSB7XG4gIHZhciBuID0gK3g7XG4gIHJldHVybiAobiA+IDAgPyBmbG9vciA6IGNlaWwpKG4pO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdHJ1bmMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWF0aC10cnVuYycpO1xuXG4vLyBgVG9JbnRlZ2VyT3JJbmZpbml0eWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvaW50ZWdlcm9yaW5maW5pdHlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBudW1iZXIgPSArYXJndW1lbnQ7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gIHJldHVybiBudW1iZXIgIT09IG51bWJlciB8fCBudW1iZXIgPT09IDAgPyAwIDogdHJ1bmMobnVtYmVyKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xuXG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5cbi8vIEhlbHBlciBmb3IgYSBwb3B1bGFyIHJlcGVhdGluZyBjYXNlIG9mIHRoZSBzcGVjOlxuLy8gTGV0IGludGVnZXIgYmUgPyBUb0ludGVnZXIoaW5kZXgpLlxuLy8gSWYgaW50ZWdlciA8IDAsIGxldCByZXN1bHQgYmUgbWF4KChsZW5ndGggKyBpbnRlZ2VyKSwgMCk7IGVsc2UgbGV0IHJlc3VsdCBiZSBtaW4oaW50ZWdlciwgbGVuZ3RoKS5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgdmFyIGludGVnZXIgPSB0b0ludGVnZXJPckluZmluaXR5KGluZGV4KTtcbiAgcmV0dXJuIGludGVnZXIgPCAwID8gbWF4KGludGVnZXIgKyBsZW5ndGgsIDApIDogbWluKGludGVnZXIsIGxlbmd0aCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHknKTtcblxudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBgVG9MZW5ndGhgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b2xlbmd0aFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIGxlbiA9IHRvSW50ZWdlck9ySW5maW5pdHkoYXJndW1lbnQpO1xuICByZXR1cm4gbGVuID4gMCA/IG1pbihsZW4sIDB4MUZGRkZGRkZGRkZGRkYpIDogMDsgLy8gMiAqKiA1MyAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG5cbi8vIGBMZW5ndGhPZkFycmF5TGlrZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWxlbmd0aG9mYXJyYXlsaWtlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHRvTGVuZ3RoKG9iai5sZW5ndGgpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS57IGluZGV4T2YsIGluY2x1ZGVzIH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gbGVuZ3RoT2ZBcnJheUxpa2UoTyk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9PSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICAgICAgaWYgKHZhbHVlICE9PSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgaWYgKChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSAmJiBPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcbiAgaW5jbHVkZXM6IGNyZWF0ZU1ldGhvZCh0cnVlKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5pbmRleE9mYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5kZXhvZlxuICBpbmRleE9mOiBjcmVhdGVNZXRob2QoZmFsc2UpXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIGluZGV4T2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMnKS5pbmRleE9mO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcblxudmFyIHB1c2ggPSB1bmN1cnJ5VGhpcyhbXS5wdXNoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgIWhhc093bihoaWRkZW5LZXlzLCBrZXkpICYmIGhhc093bihPLCBrZXkpICYmIHB1c2gocmVzdWx0LCBrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzT3duKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHB1c2gocmVzdWx0LCBrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIElFOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSBbXG4gICdjb25zdHJ1Y3RvcicsXG4gICdoYXNPd25Qcm9wZXJ0eScsXG4gICdpc1Byb3RvdHlwZU9mJyxcbiAgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJyxcbiAgJ3RvTG9jYWxlU3RyaW5nJyxcbiAgJ3RvU3RyaW5nJyxcbiAgJ3ZhbHVlT2YnXG5dO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpbnRlcm5hbE9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG5cbnZhciBoaWRkZW5LZXlzID0gZW51bUJ1Z0tleXMuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eW5hbWVzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5bmFtZXMgLS0gc2FmZVxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHJldHVybiBpbnRlcm5hbE9iamVjdEtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlzeW1ib2xzIC0tIHNhZmVcbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcycpO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG5cbnZhciBjb25jYXQgPSB1bmN1cnJ5VGhpcyhbXS5jb25jYXQpO1xuXG4vLyBhbGwgb2JqZWN0IGtleXMsIGluY2x1ZGVzIG5vbi1lbnVtZXJhYmxlIGFuZCBzeW1ib2xzXG5tb2R1bGUuZXhwb3J0cyA9IGdldEJ1aWx0SW4oJ1JlZmxlY3QnLCAnb3duS2V5cycpIHx8IGZ1bmN0aW9uIG93bktleXMoaXQpIHtcbiAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlLmYoYW5PYmplY3QoaXQpKTtcbiAgdmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZS5mO1xuICByZXR1cm4gZ2V0T3duUHJvcGVydHlTeW1ib2xzID8gY29uY2F0KGtleXMsIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkpIDoga2V5cztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgb3duS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vd24ta2V5cycpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSwgZXhjZXB0aW9ucykge1xuICB2YXIga2V5cyA9IG93bktleXMoc291cmNlKTtcbiAgdmFyIGRlZmluZVByb3BlcnR5ID0gZGVmaW5lUHJvcGVydHlNb2R1bGUuZjtcbiAgdmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZS5mO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICBpZiAoIWhhc093bih0YXJnZXQsIGtleSkgJiYgIShleGNlcHRpb25zICYmIGhhc093bihleGNlcHRpb25zLCBrZXkpKSkge1xuICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgIH1cbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbnZhciByZXBsYWNlbWVudCA9IC8jfFxcLnByb3RvdHlwZVxcLi87XG5cbnZhciBpc0ZvcmNlZCA9IGZ1bmN0aW9uIChmZWF0dXJlLCBkZXRlY3Rpb24pIHtcbiAgdmFyIHZhbHVlID0gZGF0YVtub3JtYWxpemUoZmVhdHVyZSldO1xuICByZXR1cm4gdmFsdWUgPT09IFBPTFlGSUxMID8gdHJ1ZVxuICAgIDogdmFsdWUgPT09IE5BVElWRSA/IGZhbHNlXG4gICAgOiBpc0NhbGxhYmxlKGRldGVjdGlvbikgPyBmYWlscyhkZXRlY3Rpb24pXG4gICAgOiAhIWRldGVjdGlvbjtcbn07XG5cbnZhciBub3JtYWxpemUgPSBpc0ZvcmNlZC5ub3JtYWxpemUgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gIHJldHVybiBTdHJpbmcoc3RyaW5nKS5yZXBsYWNlKHJlcGxhY2VtZW50LCAnLicpLnRvTG93ZXJDYXNlKCk7XG59O1xuXG52YXIgZGF0YSA9IGlzRm9yY2VkLmRhdGEgPSB7fTtcbnZhciBOQVRJVkUgPSBpc0ZvcmNlZC5OQVRJVkUgPSAnTic7XG52YXIgUE9MWUZJTEwgPSBpc0ZvcmNlZC5QT0xZRklMTCA9ICdQJztcblxubW9kdWxlLmV4cG9ydHMgPSBpc0ZvcmNlZDtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJykuZjtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgZGVmaW5lQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4nKTtcbnZhciBkZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5Jyk7XG52YXIgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jb3B5LWNvbnN0cnVjdG9yLXByb3BlcnRpZXMnKTtcbnZhciBpc0ZvcmNlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1mb3JjZWQnKTtcblxuLypcbiAgb3B0aW9ucy50YXJnZXQgICAgICAgICAtIG5hbWUgb2YgdGhlIHRhcmdldCBvYmplY3RcbiAgb3B0aW9ucy5nbG9iYWwgICAgICAgICAtIHRhcmdldCBpcyB0aGUgZ2xvYmFsIG9iamVjdFxuICBvcHRpb25zLnN0YXQgICAgICAgICAgIC0gZXhwb3J0IGFzIHN0YXRpYyBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnByb3RvICAgICAgICAgIC0gZXhwb3J0IGFzIHByb3RvdHlwZSBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnJlYWwgICAgICAgICAgIC0gcmVhbCBwcm90b3R5cGUgbWV0aG9kIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy5mb3JjZWQgICAgICAgICAtIGV4cG9ydCBldmVuIGlmIHRoZSBuYXRpdmUgZmVhdHVyZSBpcyBhdmFpbGFibGVcbiAgb3B0aW9ucy5iaW5kICAgICAgICAgICAtIGJpbmQgbWV0aG9kcyB0byB0aGUgdGFyZ2V0LCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMud3JhcCAgICAgICAgICAgLSB3cmFwIGNvbnN0cnVjdG9ycyB0byBwcmV2ZW50aW5nIGdsb2JhbCBwb2xsdXRpb24sIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy51bnNhZmUgICAgICAgICAtIHVzZSB0aGUgc2ltcGxlIGFzc2lnbm1lbnQgb2YgcHJvcGVydHkgaW5zdGVhZCBvZiBkZWxldGUgKyBkZWZpbmVQcm9wZXJ0eVxuICBvcHRpb25zLnNoYW0gICAgICAgICAgIC0gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuICBvcHRpb25zLmVudW1lcmFibGUgICAgIC0gZXhwb3J0IGFzIGVudW1lcmFibGUgcHJvcGVydHlcbiAgb3B0aW9ucy5kb250Q2FsbEdldFNldCAtIHByZXZlbnQgY2FsbGluZyBhIGdldHRlciBvbiB0YXJnZXRcbiAgb3B0aW9ucy5uYW1lICAgICAgICAgICAtIHRoZSAubmFtZSBvZiB0aGUgZnVuY3Rpb24gaWYgaXQgZG9lcyBub3QgbWF0Y2ggdGhlIGtleVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9wdGlvbnMsIHNvdXJjZSkge1xuICB2YXIgVEFSR0VUID0gb3B0aW9ucy50YXJnZXQ7XG4gIHZhciBHTE9CQUwgPSBvcHRpb25zLmdsb2JhbDtcbiAgdmFyIFNUQVRJQyA9IG9wdGlvbnMuc3RhdDtcbiAgdmFyIEZPUkNFRCwgdGFyZ2V0LCBrZXksIHRhcmdldFByb3BlcnR5LCBzb3VyY2VQcm9wZXJ0eSwgZGVzY3JpcHRvcjtcbiAgaWYgKEdMT0JBTCkge1xuICAgIHRhcmdldCA9IGdsb2JhbDtcbiAgfSBlbHNlIGlmIChTVEFUSUMpIHtcbiAgICB0YXJnZXQgPSBnbG9iYWxbVEFSR0VUXSB8fCBkZWZpbmVHbG9iYWxQcm9wZXJ0eShUQVJHRVQsIHt9KTtcbiAgfSBlbHNlIHtcbiAgICB0YXJnZXQgPSBnbG9iYWxbVEFSR0VUXSAmJiBnbG9iYWxbVEFSR0VUXS5wcm90b3R5cGU7XG4gIH1cbiAgaWYgKHRhcmdldCkgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgc291cmNlUHJvcGVydHkgPSBzb3VyY2Vba2V5XTtcbiAgICBpZiAob3B0aW9ucy5kb250Q2FsbEdldFNldCkge1xuICAgICAgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSk7XG4gICAgICB0YXJnZXRQcm9wZXJ0eSA9IGRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci52YWx1ZTtcbiAgICB9IGVsc2UgdGFyZ2V0UHJvcGVydHkgPSB0YXJnZXRba2V5XTtcbiAgICBGT1JDRUQgPSBpc0ZvcmNlZChHTE9CQUwgPyBrZXkgOiBUQVJHRVQgKyAoU1RBVElDID8gJy4nIDogJyMnKSArIGtleSwgb3B0aW9ucy5mb3JjZWQpO1xuICAgIC8vIGNvbnRhaW5lZCBpbiB0YXJnZXRcbiAgICBpZiAoIUZPUkNFRCAmJiB0YXJnZXRQcm9wZXJ0eSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodHlwZW9mIHNvdXJjZVByb3BlcnR5ID09IHR5cGVvZiB0YXJnZXRQcm9wZXJ0eSkgY29udGludWU7XG4gICAgICBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzKHNvdXJjZVByb3BlcnR5LCB0YXJnZXRQcm9wZXJ0eSk7XG4gICAgfVxuICAgIC8vIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgICBpZiAob3B0aW9ucy5zaGFtIHx8ICh0YXJnZXRQcm9wZXJ0eSAmJiB0YXJnZXRQcm9wZXJ0eS5zaGFtKSkge1xuICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KHNvdXJjZVByb3BlcnR5LCAnc2hhbScsIHRydWUpO1xuICAgIH1cbiAgICBkZWZpbmVCdWlsdEluKHRhcmdldCwga2V5LCBzb3VyY2VQcm9wZXJ0eSwgb3B0aW9ucyk7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcblxuLy8gYElzQXJyYXlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc2FycmF5XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktaXNhcnJheSAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmd1bWVudCkge1xuICByZXR1cm4gY2xhc3NvZihhcmd1bWVudCkgPT09ICdBcnJheSc7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gU2FmYXJpIDwgMTMgZG9lcyBub3QgdGhyb3cgYW4gZXJyb3IgaW4gdGhpcyBjYXNlXG52YXIgU0lMRU5UX09OX05PTl9XUklUQUJMRV9MRU5HVEhfU0VUID0gREVTQ1JJUFRPUlMgJiYgIWZ1bmN0aW9uICgpIHtcbiAgLy8gbWFrZXMgbm8gc2Vuc2Ugd2l0aG91dCBwcm9wZXIgc3RyaWN0IG1vZGUgc3VwcG9ydFxuICBpZiAodGhpcyAhPT0gdW5kZWZpbmVkKSByZXR1cm4gdHJ1ZTtcbiAgdHJ5IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoW10sICdsZW5ndGgnLCB7IHdyaXRhYmxlOiBmYWxzZSB9KS5sZW5ndGggPSAxO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBlcnJvciBpbnN0YW5jZW9mIFR5cGVFcnJvcjtcbiAgfVxufSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNJTEVOVF9PTl9OT05fV1JJVEFCTEVfTEVOR1RIX1NFVCA/IGZ1bmN0aW9uIChPLCBsZW5ndGgpIHtcbiAgaWYgKGlzQXJyYXkoTykgJiYgIWdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCAnbGVuZ3RoJykud3JpdGFibGUpIHtcbiAgICB0aHJvdyBuZXcgJFR5cGVFcnJvcignQ2Fubm90IHNldCByZWFkIG9ubHkgLmxlbmd0aCcpO1xuICB9IHJldHVybiBPLmxlbmd0aCA9IGxlbmd0aDtcbn0gOiBmdW5jdGlvbiAoTywgbGVuZ3RoKSB7XG4gIHJldHVybiBPLmxlbmd0aCA9IGxlbmd0aDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDB4MUZGRkZGRkZGRkZGRkY7IC8vIDIgKiogNTMgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID4gTUFYX1NBRkVfSU5URUdFUikgdGhyb3cgJFR5cGVFcnJvcignTWF4aW11bSBhbGxvd2VkIGluZGV4IGV4Y2VlZGVkJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcbnZhciBzZXRBcnJheUxlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zZXQtbGVuZ3RoJyk7XG52YXIgZG9lc05vdEV4Y2VlZFNhZmVJbnRlZ2VyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvZXMtbm90LWV4Y2VlZC1zYWZlLWludGVnZXInKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG52YXIgSU5DT1JSRUNUX1RPX0xFTkdUSCA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIFtdLnB1c2guY2FsbCh7IGxlbmd0aDogMHgxMDAwMDAwMDAgfSwgMSkgIT09IDQyOTQ5NjcyOTc7XG59KTtcblxuLy8gVjggPD0gMTIxIGFuZCBTYWZhcmkgPD0gMTUuNDsgRkYgPCAyMyB0aHJvd3MgSW50ZXJuYWxFcnJvclxuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MTI2ODFcbnZhciBwcm9wZXJFcnJvck9uTm9uV3JpdGFibGVMZW5ndGggPSBmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFtdLCAnbGVuZ3RoJywgeyB3cml0YWJsZTogZmFsc2UgfSkucHVzaCgpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBlcnJvciBpbnN0YW5jZW9mIFR5cGVFcnJvcjtcbiAgfVxufTtcblxudmFyIEZPUkNFRCA9IElOQ09SUkVDVF9UT19MRU5HVEggfHwgIXByb3BlckVycm9yT25Ob25Xcml0YWJsZUxlbmd0aCgpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnB1c2hgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUucHVzaFxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGFyaXR5OiAxLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFycyAtLSByZXF1aXJlZCBmb3IgYC5sZW5ndGhgXG4gIHB1c2g6IGZ1bmN0aW9uIHB1c2goaXRlbSkge1xuICAgIHZhciBPID0gdG9PYmplY3QodGhpcyk7XG4gICAgdmFyIGxlbiA9IGxlbmd0aE9mQXJyYXlMaWtlKE8pO1xuICAgIHZhciBhcmdDb3VudCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgZG9lc05vdEV4Y2VlZFNhZmVJbnRlZ2VyKGxlbiArIGFyZ0NvdW50KTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ0NvdW50OyBpKyspIHtcbiAgICAgIE9bbGVuXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgIGxlbisrO1xuICAgIH1cbiAgICBzZXRBcnJheUxlbmd0aChPLCBsZW4pO1xuICAgIHJldHVybiBsZW47XG4gIH1cbn0pO1xuIiwgImltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG4vKipcbiAqIENoZWNrQ2F0ZWdvcmllcyBIb3RDYXQgRXh0ZW5zaW9uIOKAk1xuICogcmVtb3ZlcyB0aGUgdGVtcGxhdGUgd2hlbiBjYXRlZ29yaXppbmcgKHByb21wdHMgYmVmb3JlKSB3aXRoIEhvdENhdCBhbmRcbiAqIGFkZHMgYSBsaW5rIFwiQ2F0ZWdvcmllcyBhcmUgT0tcIiB0byB0aGUgY2F0ZWdvcnktc2VjdGlvblxuICpcbiAqIEByZXYgMiAoMjAxNC0wMy0yMClcbiAqIEBhdXRob3IgUmlsbGtlLCAyMDEyXG4gKi9cbihmdW5jdGlvbiBob3RDYXRDaGVjaygpIHtcblx0aWYgKFxuXHRcdG13LmNvbmZpZy5nZXQoJ3dnTmFtZXNwYWNlTnVtYmVyJykgIT09IDYgfHxcblx0XHR3aW5kb3cuSG90Q2F0QXV0b1JlbW92ZUNoZWNrQ2F0T3B0T3V0IHx8XG5cdFx0IWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja2NhdGVnb3JpZXMnKVswXVxuXHQpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Y29uc3QgYXBpID0gaW5pdE13QXBpKCdob3RDYXRDaGVjay8yLjAnKTtcblx0Y29uc3QgY2hlY2tDYXRlZ29yaWVzUmVnRXhwID0gL3t7W0NjXWhlY2tbIF9dY2F0ZWdvcmllc1tee31dKn19L2c7XG5cdGNvbnN0IHNlbGZOYW1lID0gJyhbW01lZGlhV2lraTpHYWRnZXQtSG90Q2F0LWNoZWNrLmpzfFNjcmlwdF1dKTogJztcblx0Y29uc3Qgc3RvcmFnZUl0ZW1OYW1lID0gJ2NoZWNrQ2F0Jztcblx0Y29uc3Qgc3RvcmFnZUl0ZW0gPSBtdy5zdG9yYWdlLmdldChzdG9yYWdlSXRlbU5hbWUpO1xuXHQvKipcblx0ICogQSBmZXcgc3R5bGluZyBoZWxwZXIgZnVuY3Rpb25zXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBpY29uQ2xhc3Ncblx0ICogQHJldHVybiB7SlF1ZXJ5fVxuXHQgKi9cblx0Y29uc3QgY3JlYXRlakljb24gPSAoaWNvbkNsYXNzOiBzdHJpbmcpOiBKUXVlcnkgPT4ge1xuXHRcdHJldHVybiAkKCc8c3Bhbj4nKS5hdHRyKCdjbGFzcycsIGB1aS1pY29uICR7aWNvbkNsYXNzfSBjYXRjaGVjay1pbmxpbmUtaWNvbmApLnRleHQoJyAnKTtcblx0fTtcblx0Y29uc3QgY3JlYXRlTm90aWZ5QXJlYSA9ICh0ZXh0Tm9kZTogSlF1ZXJ5PEpRdWVyeS5Ob2RlPiwgaWNvbjogc3RyaW5nLCBzdGF0ZTogc3RyaW5nKTogSlF1ZXJ5PEhUTUxFbGVtZW50PiA9PiB7XG5cdFx0cmV0dXJuICQoJzxkaXY+Jylcblx0XHRcdC5hZGRDbGFzcygndWktd2lkZ2V0Jylcblx0XHRcdC5hcHBlbmQoXG5cdFx0XHRcdCQoJzxkaXY+Jylcblx0XHRcdFx0XHQuYXR0cignY2xhc3MnLCBgJHtzdGF0ZX0gdWktY29ybmVyLWFsbGApXG5cdFx0XHRcdFx0LmNzcyh7XG5cdFx0XHRcdFx0XHQnbWFyZ2luLXRvcCc6ICcyMHB4Jyxcblx0XHRcdFx0XHRcdHBhZGRpbmc6ICcwLjdlbScsXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuYXBwZW5kKCQoJzxwPicpLmFwcGVuZChjcmVhdGVqSWNvbihpY29uKS5jc3MoJ21hcmdpblJpZ2h0JywgJzAuM2VtJyksIHRleHROb2RlKSlcblx0XHRcdCk7XG5cdH07XG5cdC8vIFJlbW92ZSBcImNoZWNrIGNhdGVnb3JpZXNcIiB3aGVuIHVzaW5nIEhvdENhdFxuXHQvLyBPbmx5IGV4ZWN1dGVkIG9uIGZpcnN0IHN1Ym1pdFxuXHQkKCdib2R5Jykub25lKCdzdWJtaXQuY2hlY2tDYXRMaXN0ZW5lcicsICcjaG90Y2F0Q29tbWl0Rm9ybScsIGZ1bmN0aW9uIChlKSB7XG5cdFx0aWYgKHN0b3JhZ2VJdGVtID09PSAnZGlzYWJsZWQnKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtYXNzaWdubWVudFxuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLW1lbWJlci1hY2Nlc3Ncblx0XHRjb25zdCBuZXdWYWwgPSAoc2VsZi53cFRleHRib3gxIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQpLnZhbHVlPy5yZXBsYWNlKGNoZWNrQ2F0ZWdvcmllc1JlZ0V4cCwgJycpO1xuXHRcdGNvbnN0IGRsZ0J1dHRvbnM6IHtcblx0XHRcdCdZZXMsIFJlbW92ZSc/OiAoKSA9PiB2b2lkO1xuXHRcdFx0J05vLCBrZWVwIGl0Jz86ICgpID0+IHZvaWQ7XG5cdFx0fSA9IHt9O1xuXHRcdGxldCAkZGlhbG9nQ2hlY2tTdG9yYWdlOiBKUXVlcnk8SFRNTEVsZW1lbnQ+O1xuXHRcdGxldCAkcGVybWFTYXZlSGludDogSlF1ZXJ5PEhUTUxFbGVtZW50Pjtcblx0XHRsZXQgJHRleHRIaW50Tm9kZTtcblx0XHRsZXQgJGRpYWxvZztcblx0XHRjb25zdCBkb1JlbW92ZSA9ICgpID0+IHtcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLW1lbWJlci1hY2Nlc3Ncblx0XHRcdChzZWxmLndwU3VtbWFyeSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSA9XG5cdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLW1lbWJlci1hY2Nlc3Ncblx0XHRcdFx0YFJlbW92aW5nIFtbVGVtcGxhdGU6Q2hlY2sgY2F0ZWdvcmllc3x7JHtge0NoZWNrIGNhdGVnb3JpZXN9fV1dICR7KHNlbGYud3BTdW1tYXJ5IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlfWB9YDtcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLW1lbWJlci1hY2Nlc3Ncblx0XHRcdChzZWxmLndwVGV4dGJveDEgYXMgSFRNTFRleHRBcmVhRWxlbWVudCkudmFsdWUgPSBuZXdWYWw7XG5cdFx0fTtcblx0XHRjb25zdCB3cml0ZVN0b3JhZ2UgPSAodmFsOiBzdHJpbmcpID0+IHtcblx0XHRcdG13LnN0b3JhZ2Uuc2V0KHN0b3JhZ2VJdGVtTmFtZSwgdmFsLCA2MDQ4ZTIpOyAvLyA3IGRheXNcblx0XHR9O1xuXHRcdGRsZ0J1dHRvbnNbJ1llcywgUmVtb3ZlJ10gPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRkb1JlbW92ZSgpO1xuXHRcdFx0aWYgKCgkZGlhbG9nQ2hlY2tTdG9yYWdlWzBdIGFzIEhUTUxJbnB1dEVsZW1lbnQpPy5jaGVja2VkKSB7XG5cdFx0XHRcdHdyaXRlU3RvcmFnZSgnYXV0bycpO1xuXHRcdFx0fVxuXHRcdFx0JCh0aGlzKS5kaWFsb2coJ2Nsb3NlJyk7XG5cdFx0fTtcblx0XHRkbGdCdXR0b25zWydObywga2VlcCBpdCddID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKCgkZGlhbG9nQ2hlY2tTdG9yYWdlWzBdIGFzIEhUTUxJbnB1dEVsZW1lbnQpPy5jaGVja2VkKSB7XG5cdFx0XHRcdHdyaXRlU3RvcmFnZSgnZGlzYWJsZWQnKTtcblx0XHRcdH1cblx0XHRcdCQodGhpcykuZGlhbG9nKCdjbG9zZScpO1xuXHRcdH07XG5cdFx0Y29uc3QgX2FkZFRvSlMgPSBmdW5jdGlvbiAodGhpczogSFRNTEVsZW1lbnQsIF9lOiBKUXVlcnkuRXZlbnQpIHtcblx0XHRcdF9lLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRpZiAoJHBlcm1hU2F2ZUhpbnQuaGFzQ2xhc3MoJ3VpLXN0YXRlLWRpc2FibGVkJykpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgJGVsOiBKUXVlcnk8SFRNTEVsZW1lbnQ+ID0gJCh0aGlzKTtcblx0XHRcdCRlbC5vZmYoJ2NsaWNrJykudGV4dCgnUGxlYXNlIHdhaXQuJyk7XG5cdFx0XHQkcGVybWFTYXZlSGludC5hZGRDbGFzcygndWktc3RhdGUtZGlzYWJsZWQnKTtcblx0XHRcdGNvbnN0IHBhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0XHRcdHRpdGxlOiBgVXNlcjoke213LmNvbmZpZy5nZXQoJ3dnVXNlck5hbWUnKX0vY29tbW9uLmpzYCxcblx0XHRcdFx0c3VtbWFyeTogYCR7c2VsZk5hbWV9U2F2aW5nIEhvdENhdCBjb25maWd1cmF0aW9uLmAsXG5cdFx0XHRcdGFwcGVuZHRleHQ6ICRlbC5kYXRhKCdhZGRUZXh0JykgYXMgc3RyaW5nLFxuXHRcdFx0fTtcblx0XHRcdGNvbnN0IGVkaXREb25lID0gKGVkaXRTdGF0Pzoge2Vycm9yPzoge2NvZGU/OiBzdHJpbmc7IGluZm8/OiBzdHJpbmd9fSkgPT4ge1xuXHRcdFx0XHRpZiAoIWVkaXRTdGF0KSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChlZGl0U3RhdC5lcnJvcikge1xuXHRcdFx0XHRcdHZvaWQgbXcubm90aWZ5KFxuXHRcdFx0XHRcdFx0YFVuYWJsZSB0byBzYXZlIHRvIHlvdXIgY29tbW9uLmpzIHVzaW5nIHRoZSBBUElcXG4ke2VkaXRTdGF0LmVycm9yLmNvZGV9XFxuJHtlZGl0U3RhdC5lcnJvci5pbmZvfWAsXG5cdFx0XHRcdFx0XHR7dGFnOiAnaG90Q2F0Q2hlY2snLCB0eXBlOiAnZXJyb3InfVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0JGVsLnRleHQoJ0VkaXQtRXJyb3IhJyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0JGVsLnRleHQoJ0RvbmUuJyk7XG5cdFx0XHRcdFx0JHBlcm1hU2F2ZUhpbnQuZmFkZU91dCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0dm9pZCBhcGkucG9zdFdpdGhUb2tlbignY3NyZicsIHBhcmFtcykudGhlbihlZGl0RG9uZSk7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBPbiBXaWtpbWVkaWEgQ29tbW9ucyB0aGVyZSB3ZXJlIHBlb3BsZSB3aG8gc2FpZDpcblx0XHQgKiBcIkNhdGVnb3JpemluZyB3aXRoIEhvdENhdCBkb2VzIGxlZ2l0IGF1dG9tYXRlZCByZW1vdmFsIG9mIHRoZSBjaGVjay1jYXQtbWVzc2FnZVwiXG5cdFx0ICogU28gd2UgaW52ZW50ZWQgYSBkaWFsb2cgdGhhdCBzaG91bGQgYmUgcmVhZGFibGUgYnkgdXNlcnMgZXZlbiB3aXRoIHZlcnkgZmV3IEVuZ2xpc2ggc2tpbGxzLlxuXHRcdCAqL1xuXHRcdGNvbnN0IHByb21wdCA9ICgpID0+IHtcblx0XHRcdCRkaWFsb2dDaGVja1N0b3JhZ2UgPSAkKCc8aW5wdXQ+Jylcblx0XHRcdFx0LmF0dHIoe1xuXHRcdFx0XHRcdHR5cGU6ICdjaGVja2JveCcsXG5cdFx0XHRcdFx0aWQ6ICdob3RDYXRBdXRvUmVtb3ZlQ2hlY2tDYXRTdG9yYWdlJyxcblx0XHRcdFx0fSlcblx0XHRcdFx0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0aWYgKCh0aGlzIGFzIEhUTUxJbnB1dEVsZW1lbnQpLmNoZWNrZWQpIHtcblx0XHRcdFx0XHRcdCRwZXJtYVNhdmVIaW50LmZhZGVJbigpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHQkcGVybWFTYXZlSGludC5mYWRlT3V0KCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdCR0ZXh0SGludE5vZGUgPSAkKCc8dWw+Jyk7XG5cdFx0XHQkKCc8bGk+Jylcblx0XHRcdFx0LmFwcGVuZChcblx0XHRcdFx0XHQkKCc8YT4nKVxuXHRcdFx0XHRcdFx0LmF0dHIoJ2hyZWYnLCAnIycpXG5cdFx0XHRcdFx0XHQudGV4dCgnRGlzYWJsZSB0aGlzIGZlYXR1cmUuJylcblx0XHRcdFx0XHRcdC5kYXRhKCdhZGRUZXh0JywgJ1xcbndpbmRvdy5Ib3RDYXRBdXRvUmVtb3ZlQ2hlY2tDYXRPcHRPdXQgPSB0cnVlOycpXG5cdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgX2FkZFRvSlMpXG5cdFx0XHRcdClcblx0XHRcdFx0LmFwcGVuZFRvKCR0ZXh0SGludE5vZGUpO1xuXHRcdFx0JCgnPGxpPicpXG5cdFx0XHRcdC5hcHBlbmQoXG5cdFx0XHRcdFx0JCgnPGE+Jylcblx0XHRcdFx0XHRcdC5hdHRyKCdocmVmJywgJyMnKVxuXHRcdFx0XHRcdFx0LnRleHQoJ1JlbW92ZSB7e2NoZWNrIGNhdGVnb3JpZXN9fSB3aGVuIGVkaXRpbmcgdXNpbmcgSG90Q2F0IHdpdGhvdXQgcHJvbXB0aW5nLicpXG5cdFx0XHRcdFx0XHQuZGF0YSgnYWRkVGV4dCcsICdcXG53aW5kb3cuSG90Q2F0QXV0b1JlbW92ZUNoZWNrQ2F0ID0gdHJ1ZTsnKVxuXHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIF9hZGRUb0pTKVxuXHRcdFx0XHQpXG5cdFx0XHRcdC5hcHBlbmRUbygkdGV4dEhpbnROb2RlKTtcblx0XHRcdCRwZXJtYVNhdmVIaW50ID0gY3JlYXRlTm90aWZ5QXJlYShcblx0XHRcdFx0JCgnPHNwYW4+JykudGV4dCgnU2F2ZSB0aGVzZSBzZXR0aW5nIGluIHlvdXIgY29tbW9uLmpzOiAnKS5hcHBlbmQoJHRleHRIaW50Tm9kZSksXG5cdFx0XHRcdCd1aS1pY29uLWluZm8nLFxuXHRcdFx0XHQndWktc3RhdGUtaGlnaGxpZ2h0J1xuXHRcdFx0KTtcblx0XHRcdCRkaWFsb2cgPSAkKCc8ZGl2PicpXG5cdFx0XHRcdC5hcHBlbmQoXG5cdFx0XHRcdFx0JCgnPHNwYW4+Jylcblx0XHRcdFx0XHRcdC5jc3Moe1xuXHRcdFx0XHRcdFx0XHQnZm9udC1zaXplJzogJzJlbScsXG5cdFx0XHRcdFx0XHRcdCdsaW5lLWhlaWdodCc6ICcxLjhlbScsXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0LmFwcGVuZChcblx0XHRcdFx0XHRcdFx0JCgnPHNwYW4+JykudGV4dCgnIHt7Y2hlY2sgY2F0ZWdvcmllc319ICcpLmNzcyh7XG5cdFx0XHRcdFx0XHRcdFx0J2JhY2tncm91bmQtY29sb3InOiAnI0Y4Q0NCMCcsXG5cdFx0XHRcdFx0XHRcdFx0J3RleHQtZGVjb3JhdGlvbic6ICdsaW5lLXRocm91Z2ggIWltcG9ydGFudCcsXG5cdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG5cdFx0XHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdFx0XHQkKCc8c3Bhbj4nKS50ZXh0KCcgPycpXG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdClcblx0XHRcdFx0LmFwcGVuZChcblx0XHRcdFx0XHQnPGJyPicsXG5cdFx0XHRcdFx0JGRpYWxvZ0NoZWNrU3RvcmFnZSxcblx0XHRcdFx0XHQkKCc8bGFiZWw+JykuYXR0cignZm9yJywgJ2hvdENhdEF1dG9SZW1vdmVDaGVja0NhdFN0b3JhZ2UnKS50ZXh0KFwiRG9uJ3QgYXNrIGFnYWluXCIpLFxuXHRcdFx0XHRcdCc8YnI+J1xuXHRcdFx0XHQpXG5cdFx0XHRcdC5hcHBlbmQobXcudXNlci5pc0Fub24oKSA/ICcnIDogJHBlcm1hU2F2ZUhpbnQuaGlkZSgpKTtcblx0XHRcdCRkaWFsb2cuZGlhbG9nKHtcblx0XHRcdFx0bW9kYWw6IHRydWUsXG5cdFx0XHRcdGNsb3NlT25Fc2NhcGU6IHRydWUsXG5cdFx0XHRcdHRpdGxlOiAne3tjaGVjayBjYXRlZ29yaWVzfX0gKOKIkik/Jyxcblx0XHRcdFx0d2lkdGg6IDQ1MCxcblx0XHRcdFx0YnV0dG9uczogZGxnQnV0dG9ucyxcblx0XHRcdFx0Y2xvc2U6ICgpID0+IHtcblx0XHRcdFx0XHRjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblx0XHRcdFx0XHQkYm9keS5maW5kKCcjaG90Y2F0Q29tbWl0Rm9ybScpLnRyaWdnZXIoJ3N1Ym1pdCcpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRvcGVuKCkge1xuXHRcdFx0XHRcdGNvbnN0ICRidXR0b25zID0gJCh0aGlzKS5wYXJlbnQoKS5maW5kKCcudWktZGlhbG9nLWJ1dHRvbnBhbmUgYnV0dG9uJyk7XG5cdFx0XHRcdFx0JGJ1dHRvbnMuZXEoMCkuYnV0dG9uKHtcblx0XHRcdFx0XHRcdGljb25zOiB7XG5cdFx0XHRcdFx0XHRcdHByaW1hcnk6ICd1aS1pY29uLWNpcmNsZS1jaGVjaycsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdCRidXR0b25zLmVxKDEpLmJ1dHRvbih7XG5cdFx0XHRcdFx0XHRpY29uczoge1xuXHRcdFx0XHRcdFx0XHRwcmltYXJ5OiAndWktaWNvbi1jYW5jZWwnLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSxcblx0XHRcdH0pO1xuXHRcdH07XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtbWVtYmVyLWFjY2Vzc1xuXHRcdGlmIChuZXdWYWwgIT09IChzZWxmLndwVGV4dGJveDEgYXMgSFRNTFRleHRBcmVhRWxlbWVudCkudmFsdWUpIHtcblx0XHRcdGlmICh3aW5kb3cuSG90Q2F0QXV0b1JlbW92ZUNoZWNrQ2F0IHx8IHN0b3JhZ2VJdGVtID09PSAnYXV0bycpIHtcblx0XHRcdFx0ZG9SZW1vdmUoKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRwcm9tcHQoKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0pO1xuXHQvLyBBZGQgT0stTGluayB0byB0aGUgY2F0cyBwYW5lbFxuXHRjb25zdCAkb2tMaW5rID0gJCgnPGE+Jylcblx0XHQuYXR0cih7XG5cdFx0XHRocmVmOiAnIycsXG5cdFx0XHR0aXRsZTogJ0NhdGVnb3JpZXMgYXJlIE9LISBJbW1lZGlhdGVseSByZW1vdmUgdGhlIHRlbXBsYXRlLicsXG5cdFx0fSlcblx0XHQuYXBwZW5kKCc8cz4nKVxuXHRcdC50ZXh0KCd7e0NoZWNrIGNhdGVnb3JpZXN9fScpO1xuXHQkb2tMaW5rLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGNvbnN0ICRlbCA9ICQodGhpcyk7XG5cdFx0JGVsLm9mZignY2xpY2snKTtcblx0XHRjb25zdCBkb0VkaXQgPSAocmVzdWx0OiBzdHJpbmcpID0+IHtcblx0XHRcdGlmICghcmVzdWx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdCRlbC50ZXh0KCdEb2luZy4nKTtcblx0XHRcdGNvbnN0IHRleHQgPSByZXN1bHQucmVwbGFjZShjaGVja0NhdGVnb3JpZXNSZWdFeHAsICcnKTtcblx0XHRcdGlmICh0ZXh0ID09PSByZXN1bHQpIHtcblx0XHRcdFx0JGVsLnRleHQoJ1RlbXBsYXRlIG5vdCBmb3VuZCEnKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdFx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRcdFx0dGl0bGU6IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKSxcblx0XHRcdFx0c3VtbWFyeTogYCR7c2VsZk5hbWV9Q2F0ZWdvcmllcyBhcmUgY2hlY2tlZCBhbmQgT0suIFlvdSBjYW4gaGVscCBbW0NhdGVnb3J5Ok1lZGlhIG5lZWRpbmcgY2F0ZWdvcnkgcmV2aWV3fHJldmlld2luZ11dIWAsXG5cdFx0XHRcdG5vY3JlYXRlOiB0cnVlLFxuXHRcdFx0XHR0ZXh0LFxuXHRcdFx0fTtcblx0XHRcdGNvbnN0IGVkaXREb25lID0gKGVkaXRTdGF0Pzoge2Vycm9yPzoge2NvZGU/OiBzdHJpbmc7IGluZm8/OiBzdHJpbmd9fSkgPT4ge1xuXHRcdFx0XHRpZiAoIWVkaXRTdGF0KSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChlZGl0U3RhdC5lcnJvcikge1xuXHRcdFx0XHRcdHZvaWQgbXcubm90aWZ5KFxuXHRcdFx0XHRcdFx0YFVuYWJsZSB0byByZW1vdmUgXCJDaGVjayBjYXRlZ29yaWVzXCIgd2l0aCB0aGUgQVBJXFxuJHtlZGl0U3RhdC5lcnJvci5jb2RlfVxcbiR7ZWRpdFN0YXQuZXJyb3IuaW5mb31gLFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0YWc6ICdob3RDYXRDaGVjaycsXG5cdFx0XHRcdFx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHQkZWwudGV4dCgnRWRpdC1FcnJvciEnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkZWwudGV4dCgnRWRpdCBEb25lLicpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRcdFx0XHQkYm9keS5maW5kKCcuY2hlY2tjYXRlZ29yaWVzJykuZmFkZU91dCgpO1xuXHRcdFx0fTtcblx0XHRcdCRlbC50ZXh0KCdEb2luZy4uJyk7XG5cdFx0XHR2b2lkIGFwaS5wb3N0V2l0aFRva2VuKCdjc3JmJywgcGFyYW1zKS50aGVuKGVkaXREb25lKTtcblx0XHR9O1xuXHRcdCRlbC50ZXh0KCdEb2luZycpO1xuXHRcdHZvaWQgJC5hamF4KHtcblx0XHRcdHVybDogbXcuY29uZmlnLmdldCgnd2dTY3JpcHQnKSxcblx0XHRcdGRhdGE6IHtcblx0XHRcdFx0YWN0aW9uOiAncmF3Jyxcblx0XHRcdFx0dGl0bGU6IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKS5yZXBsYWNlKC8gL2csICdfJyksXG5cdFx0XHR9LFxuXHRcdFx0ZGF0YVR5cGU6ICd0ZXh0Jyxcblx0XHRcdGVycm9yOiAoKSA9PiB7XG5cdFx0XHRcdCRlbC50ZXh0KCdFcnJvciEnKTtcblx0XHRcdH0sXG5cdFx0XHRzdWNjZXNzOiBkb0VkaXQsXG5cdFx0XHR0eXBlOiAnR0VUJyxcblx0XHRcdGNhY2hlOiBmYWxzZSxcblx0XHR9KTtcblx0fSk7XG5cdCQoZnVuY3Rpb24gbG9hZEhvdENhdENoZWNrKCkge1xuXHRcdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRcdCRib2R5LmZpbmQoJyNjYXRsaW5rcycpLmZpbmQoJ3VsOmZpcnN0JykuYXBwZW5kKCQoJzxsaT4nKS5hcHBlbmQoJG9rTGluaykpO1xuXHR9KTtcbn0pKCk7XG4iLCAiY29uc3QgZ2V0TWVzc2FnZSA9IChrZXk6IHN0cmluZywgLi4uYXJnczogc3RyaW5nW10pOiBzdHJpbmcgPT4ge1xuXHRrZXkgPSBgaG90Y2F0LSR7a2V5fWA7XG5cdC8vIE1lc3NhZ2VzIHRoYXQgY2FuIGJlIHVzZWQgaGVyZTpcblx0Ly8gKiBzZWUgbWVzc2FnZXMudHNcblx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRyZXR1cm4gbXcubWVzc2FnZShrZXksIC4uLmFyZ3MpLnBsYWluKCk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImNvbnN0IFdHX1VTRVJfR1JPVVBTOiBzdHJpbmdbXSA9IG13LmNvbmZpZy5nZXQoJ3dnVXNlckdyb3VwcycpID8/IFtdO1xuY29uc3QgV0dfVVNFUl9MQU5HVUFHRTogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dVc2VyTGFuZ3VhZ2UnKTtcblxuZXhwb3J0IHtXR19VU0VSX0dST1VQUywgV0dfVVNFUl9MQU5HVUFHRX07XG4iLCAiaW1wb3J0IHtXR19VU0VSX0xBTkdVQUdFfSBmcm9tICcuL2NvbnN0YW50JztcblxuZXhwb3J0IGNvbnN0IGhvdENhdE1lc3NhZ2VzID0gKCk6IHZvaWQgPT4ge1xuXHRpZiAoWyd6aC1oYW50JywgJ3poLWhrJywgJ3poLW1vJywgJ3poLXR3J10uaW5jbHVkZXMoV0dfVVNFUl9MQU5HVUFHRSkpIHtcblx0XHRtdy5tZXNzYWdlcy5zZXQoe1xuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYXRfcmVtb3ZlZCc6ICflt7Lnp7vpmaRbW0NhdGVnb3J5OiQxXV0nLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy10ZW1wbGF0ZV9yZW1vdmVkJzogJ+W3suenu+mZpHt7W1tDYXRlZ29yeTokMV1dfX0nLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYXRfYWRkZWQnOiAn5bey5re75YqgW1tDYXRlZ29yeTokMV1dJyxcblx0XHRcdC8vICQyIGlzIHRoZSBuZXcga2V5XG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhdF9rZXljaGFuZ2UnOiAn5bey6Kit572uW1tDYXRlZ29yeTokMV1d55qE5paw5o6S5bqP5a2X77yaXCIkMlwiJyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2F0X25vdEZvdW5kJzogJ+WIhumhnuKAnCQx4oCd5rKS5pyJ5om+5YiwJyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2F0X2V4aXN0cyc6ICfliIbpoZ7igJwkMeKAneW3sue2k+WtmOWcqO+8jOaykuaciea3u+WKoOOAgicsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhdF9yZXNvbHZlZCc6ICfvvIjph43lrprlkJFbW0NhdGVnb3J5OiQxXV3lt7LomZXnkIbvvIknLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy11bmNhdF9yZW1vdmVkJzogJ+W3suenu+mZpHt7dW5jYXRlZ29yaXplZH19Jyxcblx0XHRcdC8vIFNvbWUgdGV4dCB0byBwcmVmaXggdG8gdGhlIGVkaXQgc3VtbWFyeS5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtcHJlZml4JzogJ+S9v+eUqFtbSDpIT1RDQVR8SG90Q2F0XV0nLFxuXHRcdFx0Ly8gU29tZSB0ZXh0IHRvIGFwcGVuZCB0byB0aGUgZWRpdCBzdW1tYXJ5LiBOYW1lZCAndXNpbmcnIGZvciBoaXN0b3JpY2FsIHJlYXNvbnMuIElmIHlvdSBwcmVmZXJcblx0XHRcdC8vIHRvIGhhdmUgYSBtYXJrZXIgYXQgdGhlIGZyb250LCB1c2UgcHJlZml4IGFuZCBzZXQgdGhpcyB0byB0aGUgZW1wdHkgc3RyaW5nLlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy11c2luZyc6ICcnLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1tdWx0aV9jaGFuZ2UnOiAnJDHlgIvliIbpoZ4nLFxuXHRcdFx0Ly8gQW55IGNhdGVnb3J5IGluIHRoaXMgY2F0ZWdvcnkgaXMgZGVlbWVkIGEgZGlzYW1iaWd1YXRpb24gY2F0ZWdvcnk7IGkuZS4sIGEgY2F0ZWdvcnkgdGhhdCBzaG91bGQgbm90IGNvbnRhaW5cblx0XHRcdC8vIGFueSBpdGVtcywgYnV0IHRoYXQgY29udGFpbnMgbGlua3MgdG8gb3RoZXIgY2F0ZWdvcmllcyB3aGVyZSBzdHVmZiBzaG91bGQgYmUgY2F0ZWdvcml6ZWQuIElmIHlvdSBkb24ndCBoYXZlXG5cdFx0XHQvLyB0aGF0IGNvbmNlcHQgb24geW91ciB3aWtpLCBzZXQgaXQgdG8gYmxhbmsgc3RyaW5nLiBVc2UgYmxhbmtzLCBub3QgdW5kZXJzY29yZXMuXG5cdFx0XHQnaG90Y2F0LWRpc2FtYmlnX2NhdGVnb3J5JzogJycsXG5cdFx0XHQvLyBBbnkgY2F0ZWdvcnkgaW4gdGhpcyBjYXRlZ29yeSBpcyBkZWVtZWQgYSAoc29mdCkgcmVkaXJlY3QgdG8gc29tZSBvdGhlciBjYXRlZ29yeSBkZWZpbmVkIGJ5IGEgbGlua1xuXHRcdFx0Ly8gdG8gYW5vdGhlciBub24tYmxhY2tsaXN0ZWQgY2F0ZWdvcnkuIElmIHlvdXIgd2lraSBkb2Vzbid0IGhhdmUgc29mdCBjYXRlZ29yeSByZWRpcmVjdHMsIHNldCB0aGlzIHRvIG51bGwuXG5cdFx0XHQvLyBJZiBhIHNvZnQtcmVkaXJlY3RlZCBjYXRlZ29yeSBjb250YWlucyBtb3JlIHRoYW4gb25lIGxpbmsgdG8gYW5vdGhlciBub24tYmxhY2tsaXN0ZWQgY2F0ZWdvcnksIGl0J3MgY29uc2lkZXJlZFxuXHRcdFx0Ly8gYSBkaXNhbWJpZ3VhdGlvbiBjYXRlZ29yeSBpbnN0ZWFkLlxuXHRcdFx0J2hvdGNhdC1yZWRpcl9jYXRlZ29yeSc6ICflt7Lph43lrprlkJHnmoTliIbnsbsnLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1zZXBhcmF0b3InOiAnOyAnLFxuXHRcdFx0Ly8gJDEgaXMgcmVwbGFjZWQgYnkgYSBudW1iZXIuIElmIHlvdXIgbGFuZ3VhZ2UgaGFzIHNldmVyYWwgcGx1cmFsIGZvcm1zIChjLmYuIFtbOmVud2lraTpEdWFsIChncmFtbWF0aWNhbCBmb3JtKV1dKSxcblx0XHRcdC8vIHlvdSBjYW4gc2V0IHRoaXMgdG8gYW4gYXJyYXkgb2Ygc3RyaW5ncyBzdWl0YWJsZSBmb3IgcGFzc2luZyB0byBtdy5sYW5ndWFnZS5jb25maWdQbHVyYWwoKS5cblx0XHRcdC8vIElmIHRoYXQgZnVuY3Rpb24gZG9lc24ndCBleGlzdCwgSG90Q2F0IHdpbGwgc2ltcGx5IGZhbGwgYmFjayB0byB1c2luZyB0aGUgbGFzdFxuXHRcdFx0Ly8gZW50cnkgaW4gdGhlIGFycmF5LlxuXHRcdFx0Ly8gRGVmYXVsdHMgdG8gJ1tbJyArIGNhdGVnb3J5X2Nhbm9uaWNhbCArICc6JDFdXScuIENhbiBiZSBvdmVycmlkZGVuIGlmIGluIHRoZSBzaG9ydCBlZGl0IHN1bW1hcmllc1xuXHRcdFx0Ly8gbm90IHRoZSBzdGFuZGFyZCBjYXRlZ29yeSBuYW1lIHNob3VsZCBiZSB1c2VkIGJ1dCwgc2F5LCBhIHNob3J0ZXIgbmFtZXNwYWNlIGFsaWFzLiAkMSBpcyByZXBsYWNlZFxuXHRcdFx0Ly8gYnkgYSBjYXRlZ29yeSBuYW1lLlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnOiAnJDEnLFxuXHRcdFx0Ly8gQnV0dG9uIHRleHQuIExvY2FsaXplIHRvIHdnQ29udGVudExhbmd1YWdlIGhlcmU7IGxvY2FsaXplIHRvIHdnVXNlckxhbmd1YWdlIGluIGEgc3VicGFnZSxcblx0XHRcdC8vIHNlZSBsb2NhbGl6YXRpb24gaG9vayBiZWxvdy5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY29tbWl0JzogJ+WEsuWtmCcsXG5cdFx0XHQvLyBCdXR0b24gdGV4dC4gTG9jYWxpemUgdG8gd2dDb250ZW50TGFuZ3VhZ2UgaGVyZTsgbG9jYWxpemUgdG8gd2dVc2VyTGFuZ3VhZ2UgaW4gYSBzdWJwYWdlLFxuXHRcdFx0Ly8gc2VlIGxvY2FsaXphdGlvbiBob29rIGJlbG93LlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1vayc6ICfnorrlrponLFxuXHRcdFx0Ly8gQnV0dG9uIHRleHQuIExvY2FsaXplIHRvIHdnQ29udGVudExhbmd1YWdlIGhlcmU7IGxvY2FsaXplIHRvIHdnVXNlckxhbmd1YWdlIGluIGEgc3VicGFnZSxcblx0XHRcdC8vIHNlZSBsb2NhbGl6YXRpb24gaG9vayBiZWxvdy5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2FuY2VsJzogJ+WPlua2iCcsXG5cdFx0XHQvLyBMb2NhbGl6ZSB0byB3Z0NvbnRlbnRMYW5ndWFnZSBoZXJlOyBsb2NhbGl6ZSB0byB3Z1VzZXJMYW5ndWFnZSBpbiBhIHN1YnBhZ2UsXG5cdFx0XHQvLyBzZWUgbG9jYWxpemF0aW9uIGhvb2sgYmVsb3cuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLW11bHRpX2Vycm9yJzpcblx0XHRcdFx0J+eEoeazleW+nuS8uuacjeWZqOWPluW+l+mggemdouaWh+Wtl+OAguWboOatpO+8jOaCqOeahOWIhumhnuiuiuabtOeEoeazleWEsuWtmOOAguaIkeWAkeeCuuatpOS4jeS+v+ihqOekuuaKseatieOAgicsXG5cdFx0XHQvLyBQbHVyYWwgb2YgY2F0ZWdvcnlfY2Fub25pY2FsLlxuXHRcdFx0J2hvdGNhdC1jYXRlZ29yaWVzJzogJ+WIhumhnicsXG5cdFx0XHQvLyBOYW1lcyBmb3IgdGhlIHNlYXJjaCBlbmdpbmVzXG5cdFx0XHQnaG90Y2F0LWVuZ2luZV9uYW1lcy1zZWFyY2hpbmRleCc6ICfmkJzlsIvntKLlvJUnLFxuXHRcdFx0J2hvdGNhdC1lbmdpbmVfbmFtZXMtcGFnZWxpc3QnOiAn6aCB6Z2i5YiX6KGoJyxcblx0XHRcdCdob3RjYXQtZW5naW5lX25hbWVzLWNvbWJpbmVkJzogJ+WQiOS9teaQnOWwiycsXG5cdFx0XHQnaG90Y2F0LWVuZ2luZV9uYW1lcy1zdWJjYXQnOiAn5a2Q5YiG6aGeJyxcblx0XHRcdCdob3RjYXQtZW5naW5lX25hbWVzLXBhcmVudGNhdCc6ICfkuIrlsaTliIbpoZ4nLFxuXHRcdFx0Ly8gVGhlIHRvb2x0aXBzIGZvciB0aGUgYWJvdmUgbGlua3Ncblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtY2hhbmdlJzogJ+S/ruaUuScsXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLXJlbW92ZSc6ICfnp7vpmaQnLFxuXHRcdFx0J2hvdGNhdC10b29sdGlwcy1hZGQnOiAn5aKe5Yqg5LiA5YCL5paw5YiG6aGeJyxcblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtcmVzdG9yZSc6ICflvqnljp/orormm7QnLFxuXHRcdFx0J2hvdGNhdC10b29sdGlwcy11bmRvJzogJ+W+qeWOn+iuiuabtCcsXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLWRvd24nOiAn5omT6ZaL5Lul5L+u5pS55Lim6aGv56S65a2Q5YiG6aGeJyxcblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtdXAnOiAn5omT6ZaL5Lul5L+u5pS55Lim6aGv56S65LiK5bGk5YiG6aGeJyxcblx0XHRcdC8vIFRvb2x0aXAgZm9yIHRoZSBcImVudGVyIG11bHRpLW1vZGVcIiBsaW5rXG5cdFx0XHQnaG90Y2F0LW11bHRpX3Rvb2x0aXAnOiAn5L+u5pS55aSa5YCL5YiG6aGeJyxcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHRtdy5tZXNzYWdlcy5zZXQoe1xuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYXRfcmVtb3ZlZCc6ICflt7Lnp7vpmaRbW0NhdGVnb3J5OiQxXV0nLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy10ZW1wbGF0ZV9yZW1vdmVkJzogJ+W3suenu+mZpHt7W1tDYXRlZ29yeTokMV1dfX0nLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYXRfYWRkZWQnOiAn5bey5re75YqgW1tDYXRlZ29yeTokMV1dJyxcblx0XHRcdC8vICQyIGlzIHRoZSBuZXcga2V5XG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhdF9rZXljaGFuZ2UnOiAn5bey6K6+572uW1tDYXRlZ29yeTokMV1d55qE5paw5o6S5bqP5a2X77yaXCIkMlwiJyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2F0X25vdEZvdW5kJzogJ+WIhuexu+KAnCQx4oCd5rKh5pyJ5om+5YiwJyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2F0X2V4aXN0cyc6ICfliIbnsbvigJwkMeKAneW3sue7j+WtmOWcqO+8jOayoeaciea3u+WKoOOAgicsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhdF9yZXNvbHZlZCc6ICfvvIjph43lrprlkJFbW0NhdGVnb3J5OiQxXV3lt7LlpITnkIbvvIknLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy11bmNhdF9yZW1vdmVkJzogJ+W3suenu+mZpHt7dW5jYXRlZ29yaXplZH19Jyxcblx0XHRcdC8vIFNvbWUgdGV4dCB0byBwcmVmaXggdG8gdGhlIGVkaXQgc3VtbWFyeS5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtcHJlZml4JzogJ+S9v+eUqFtbSDpIT1RDQVR8SG90Q2F0XV0nLFxuXHRcdFx0Ly8gU29tZSB0ZXh0IHRvIGFwcGVuZCB0byB0aGUgZWRpdCBzdW1tYXJ5LiBOYW1lZCAndXNpbmcnIGZvciBoaXN0b3JpY2FsIHJlYXNvbnMuIElmIHlvdSBwcmVmZXJcblx0XHRcdC8vIHRvIGhhdmUgYSBtYXJrZXIgYXQgdGhlIGZyb250LCB1c2UgcHJlZml4IGFuZCBzZXQgdGhpcyB0byB0aGUgZW1wdHkgc3RyaW5nLlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy11c2luZyc6ICcnLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1tdWx0aV9jaGFuZ2UnOiAnJDHkuKrliIbnsbsnLFxuXHRcdFx0Ly8gQW55IGNhdGVnb3J5IGluIHRoaXMgY2F0ZWdvcnkgaXMgZGVlbWVkIGEgZGlzYW1iaWd1YXRpb24gY2F0ZWdvcnk7IGkuZS4sIGEgY2F0ZWdvcnkgdGhhdCBzaG91bGQgbm90IGNvbnRhaW5cblx0XHRcdC8vIGFueSBpdGVtcywgYnV0IHRoYXQgY29udGFpbnMgbGlua3MgdG8gb3RoZXIgY2F0ZWdvcmllcyB3aGVyZSBzdHVmZiBzaG91bGQgYmUgY2F0ZWdvcml6ZWQuIElmIHlvdSBkb24ndCBoYXZlXG5cdFx0XHQvLyB0aGF0IGNvbmNlcHQgb24geW91ciB3aWtpLCBzZXQgaXQgdG8gYmxhbmsgc3RyaW5nLiBVc2UgYmxhbmtzLCBub3QgdW5kZXJzY29yZXMuXG5cdFx0XHQnaG90Y2F0LWRpc2FtYmlnX2NhdGVnb3J5JzogJycsXG5cdFx0XHQvLyBBbnkgY2F0ZWdvcnkgaW4gdGhpcyBjYXRlZ29yeSBpcyBkZWVtZWQgYSAoc29mdCkgcmVkaXJlY3QgdG8gc29tZSBvdGhlciBjYXRlZ29yeSBkZWZpbmVkIGJ5IGEgbGlua1xuXHRcdFx0Ly8gdG8gYW5vdGhlciBub24tYmxhY2tsaXN0ZWQgY2F0ZWdvcnkuIElmIHlvdXIgd2lraSBkb2Vzbid0IGhhdmUgc29mdCBjYXRlZ29yeSByZWRpcmVjdHMsIHNldCB0aGlzIHRvIG51bGwuXG5cdFx0XHQvLyBJZiBhIHNvZnQtcmVkaXJlY3RlZCBjYXRlZ29yeSBjb250YWlucyBtb3JlIHRoYW4gb25lIGxpbmsgdG8gYW5vdGhlciBub24tYmxhY2tsaXN0ZWQgY2F0ZWdvcnksIGl0J3MgY29uc2lkZXJlZFxuXHRcdFx0Ly8gYSBkaXNhbWJpZ3VhdGlvbiBjYXRlZ29yeSBpbnN0ZWFkLlx0XHRcdCdob3RjYXQtcmVkaXJfY2F0ZWdvcnknOiAn5bey6YeN5a6a5ZCR55qE5YiG57G7Jyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtc2VwYXJhdG9yJzogJzsgJyxcblx0XHRcdC8vICQxIGlzIHJlcGxhY2VkIGJ5IGEgbnVtYmVyLiBJZiB5b3VyIGxhbmd1YWdlIGhhcyBzZXZlcmFsIHBsdXJhbCBmb3JtcyAoYy5mLiBbWzplbndpa2k6RHVhbCAoZ3JhbW1hdGljYWwgZm9ybSldXSksXG5cdFx0XHQvLyB5b3UgY2FuIHNldCB0aGlzIHRvIGFuIGFycmF5IG9mIHN0cmluZ3Mgc3VpdGFibGUgZm9yIHBhc3NpbmcgdG8gbXcubGFuZ3VhZ2UuY29uZmlnUGx1cmFsKCkuXG5cdFx0XHQvLyBJZiB0aGF0IGZ1bmN0aW9uIGRvZXNuJ3QgZXhpc3QsIEhvdENhdCB3aWxsIHNpbXBseSBmYWxsIGJhY2sgdG8gdXNpbmcgdGhlIGxhc3Rcblx0XHRcdC8vIGVudHJ5IGluIHRoZSBhcnJheS5cblx0XHRcdC8vIERlZmF1bHRzIHRvICdbWycgKyBjYXRlZ29yeV9jYW5vbmljYWwgKyAnOiQxXV0nLiBDYW4gYmUgb3ZlcnJpZGRlbiBpZiBpbiB0aGUgc2hvcnQgZWRpdCBzdW1tYXJpZXNcblx0XHRcdC8vIG5vdCB0aGUgc3RhbmRhcmQgY2F0ZWdvcnkgbmFtZSBzaG91bGQgYmUgdXNlZCBidXQsIHNheSwgYSBzaG9ydGVyIG5hbWVzcGFjZSBhbGlhcy4gJDEgaXMgcmVwbGFjZWRcblx0XHRcdC8vIGJ5IGEgY2F0ZWdvcnkgbmFtZS5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtc2hvcnRfY2F0Y2hhbmdlJzogJyQxJyxcblx0XHRcdC8vIEJ1dHRvbiB0ZXh0LiBMb2NhbGl6ZSB0byB3Z0NvbnRlbnRMYW5ndWFnZSBoZXJlOyBsb2NhbGl6ZSB0byB3Z1VzZXJMYW5ndWFnZSBpbiBhIHN1YnBhZ2UsXG5cdFx0XHQvLyBzZWUgbG9jYWxpemF0aW9uIGhvb2sgYmVsb3cuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNvbW1pdCc6ICfkv53lrZgnLFxuXHRcdFx0Ly8gQnV0dG9uIHRleHQuIExvY2FsaXplIHRvIHdnQ29udGVudExhbmd1YWdlIGhlcmU7IGxvY2FsaXplIHRvIHdnVXNlckxhbmd1YWdlIGluIGEgc3VicGFnZSxcblx0XHRcdC8vIHNlZSBsb2NhbGl6YXRpb24gaG9vayBiZWxvdy5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtb2snOiAn56Gu5a6aJyxcblx0XHRcdC8vIEJ1dHRvbiB0ZXh0LiBMb2NhbGl6ZSB0byB3Z0NvbnRlbnRMYW5ndWFnZSBoZXJlOyBsb2NhbGl6ZSB0byB3Z1VzZXJMYW5ndWFnZSBpbiBhIHN1YnBhZ2UsXG5cdFx0XHQvLyBzZWUgbG9jYWxpemF0aW9uIGhvb2sgYmVsb3cuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhbmNlbCc6ICflj5bmtognLFxuXHRcdFx0Ly8gTG9jYWxpemUgdG8gd2dDb250ZW50TGFuZ3VhZ2UgaGVyZTsgbG9jYWxpemUgdG8gd2dVc2VyTGFuZ3VhZ2UgaW4gYSBzdWJwYWdlLFxuXHRcdFx0Ly8gc2VlIGxvY2FsaXphdGlvbiBob29rIGJlbG93LlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1tdWx0aV9lcnJvcic6XG5cdFx0XHRcdCfml6Dms5Xku47mnI3liqHlmajlj5blvpfpobXpnaLmloflrZfjgILlm6DmraTvvIzmgqjnmoTliIbnsbvmm7TmlLnml6Dms5Xkv53lrZjjgILmiJHku6zkuLrmraTkuI3kvr/ooajnpLrmirHmrYnjgIInLFxuXHRcdFx0Ly8gUGx1cmFsIG9mIGNhdGVnb3J5X2Nhbm9uaWNhbC5cblx0XHRcdCdob3RjYXQtY2F0ZWdvcmllcyc6ICfliIbnsbsnLFxuXHRcdFx0Ly8gTmFtZXMgZm9yIHRoZSBzZWFyY2ggZW5naW5lc1xuXHRcdFx0J2hvdGNhdC1lbmdpbmVfbmFtZXMtc2VhcmNoaW5kZXgnOiAn5pCc57Si57Si5byVJyxcblx0XHRcdCdob3RjYXQtZW5naW5lX25hbWVzLXBhZ2VsaXN0JzogJ+mhtemdouWIl+ihqCcsXG5cdFx0XHQnaG90Y2F0LWVuZ2luZV9uYW1lcy1jb21iaW5lZCc6ICflkIjlubbmkJzntKInLFxuXHRcdFx0J2hvdGNhdC1lbmdpbmVfbmFtZXMtc3ViY2F0JzogJ+WtkOWIhuexuycsXG5cdFx0XHQnaG90Y2F0LWVuZ2luZV9uYW1lcy1wYXJlbnRjYXQnOiAn5LiK5bGC5YiG57G7Jyxcblx0XHRcdC8vIFRoZSB0b29sdGlwcyBmb3IgdGhlIGFib3ZlIGxpbmtzXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLWNoYW5nZSc6ICfkv67mlLknLFxuXHRcdFx0J2hvdGNhdC10b29sdGlwcy1yZW1vdmUnOiAn56e76ZmkJyxcblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtYWRkJzogJ+WinuWKoOS4gOS4quaWsOWIhuexuycsXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLXJlc3RvcmUnOiAn5pKk6ZSA5pu05pS5Jyxcblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtdW5kbyc6ICfmkqTplIDmm7TmlLknLFxuXHRcdFx0J2hvdGNhdC10b29sdGlwcy1kb3duJzogJ+aJk+W8gOS7peS/ruaUueW5tuaYvuekuuWtkOWIhuexuycsXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLXVwJzogJ+aJk+W8gOS7peS/ruaUueW5tuaYvuekuuS4iuWxguWIhuexuycsXG5cdFx0XHQvLyBUb29sdGlwIGZvciB0aGUgXCJlbnRlciBtdWx0aS1tb2RlXCIgbGlua1xuXHRcdFx0J2hvdGNhdC1tdWx0aV90b29sdGlwJzogJ+S/ruaUueWkmuS4quWIhuexuycsXG5cdFx0fSk7XG5cdH1cbn07XG4iLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCAnLi9tb2R1bGVzL2NoZWNrJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9tb2R1bGVzL2dldE1lc3NhZ2UnO1xuaW1wb3J0IHtob3RDYXRNZXNzYWdlc30gZnJvbSAnLi9tb2R1bGVzL21lc3NhZ2VzJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBBamF4LWJhc2VkIHNpbXBsZSBDYXRlZ29yeSBtYW5hZ2VyLiBBbGxvd3MgYWRkaW5nL3JlbW92aW5nL2NoYW5naW5nIGNhdGVnb3JpZXMgb24gYSBwYWdlIHZpZXcuXG4gKiBTdXBwb3J0cyBtdWx0aXBsZSBjYXRlZ29yeSBjaGFuZ2VzLCBhcyB3ZWxsIGFzIHJlZGlyZWN0IGFuZCBkaXNhbWJpZ3VhdGlvbiByZXNvbHV0aW9uLiBBbHNvXG4gKiBwbHVncyBpbnRvIHRoZSB1cGxvYWQgZm9ybS4gU2VhcmNoIGVuZ2luZXMgdG8gdXNlIGZvciB0aGUgc3VnZ2VzdGlvbiBsaXN0IGFyZSBjb25maWd1cmFibGUsIGFuZFxuICogY2FuIGJlIHNlbGVjdGVkIGludGVyYWN0aXZlbHkuXG4gKlxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9jb21tb25zLndpa2ltZWRpYS5vcmcvd2lraS9IZWxwOkdhZGdldC1Ib3RDYXR9XG4gKiBAYXV0aG9yIGF1dGhvcnMgPGh0dHBzOi8vY29tbW9ucy53aWtpbWVkaWEub3JnL3dpa2kvSGVscDpHYWRnZXQtSG90Q2F0L1ZlcnNpb25faGlzdG9yeT5cbiAqL1xuLy8gTG9hZCB0cmFuc2xhdGlvbnMgbG9jYWxseVxuaG90Q2F0TWVzc2FnZXMoKTtcblxuLy8gTWFpbiBib2R5XG4oZnVuY3Rpb24gaG90Q2F0KCkge1xuXHQvLyBEb24ndCB1c2UgbXcuY29uZmlnLmdldCgpIGFzIHRoYXQgdGFrZXMgYSBjb3B5IG9mIHRoZSBjb25maWcsIGFuZCBzbyBkb2Vzbid0XG5cdC8vIGFjY291bnQgZm9yIHZhbHVlcyBjaGFuZ2luZywgZS5nLiB3Z0N1clJldmlzaW9uSWQgYWZ0ZXIgYSBWRSBlZGl0XG5cdGNvbnN0IGNvbmYgPSBtdy5jb25maWcudmFsdWVzO1xuXHQvLyBHdWFyZCBhZ2FpbnN0IGRvdWJsZSBpbmNsdXNpb25zIChpbiBvbGQgSUUvT3BlcmEgZWxlbWVudCBpZHMgYmVjb21lIHdpbmRvdyBwcm9wZXJ0aWVzKVxuXHRpZiAoKHdpbmRvdy5Ib3RDYXQgJiYgIXdpbmRvdy5Ib3RDYXQubm9kZU5hbWUpIHx8IGNvbmYud2dBY3Rpb24gPT09ICdlZGl0Jykge1xuXHRcdHJldHVybjsgLy8gTm90IG9uIGVkaXQgbW9kZVxuXHR9XG5cdC8vIEluaXRpYWxpemUgTWVkaWFXaWtpIEFQSVxuXHRjb25zdCBhcGkgPSBpbml0TXdBcGkoJ0hvdENhdC8zLjAnKTtcblx0Ly8gQ29uZmlndXJhdGlvbiBzdHVmZi5cblx0d2luZG93LkhvdENhdCA9IHtcblx0XHQvLyBUaGUgbGl0dGxlIG1vZGlmaWNhdGlvbiBsaW5rcyBkaXNwbGF5ZWQgYWZ0ZXIgY2F0ZWdvcnkgbmFtZXMuIFUrMjIxMiBpcyBhIG1pbnVzIHNpZ247IFUrMjE5MyBhbmQgVSsyMTkxIGFyZVxuXHRcdC8vIGRvd253YXJkIGFuZCB1cHdhcmQgcG9pbnRpbmcgYXJyb3dzLiBEbyBub3QgdXNlIOKGkyBhbmQg4oaRIGluIHRoZSBjb2RlIVxuXHRcdGxpbmtzOiB7XG5cdFx0XHRjaGFuZ2U6ICcowrEpJyxcblx0XHRcdHJlbW92ZTogJyhcXHUyMjEyKScsXG5cdFx0XHRhZGQ6ICcoKyknLFxuXHRcdFx0cmVzdG9yZTogJyjDlyknLFxuXHRcdFx0dW5kbzogJyjDlyknLFxuXHRcdFx0ZG93bjogJyhcXHUyMTkzKScsXG5cdFx0XHR1cDogJyhcXHUyMTkxKScsXG5cdFx0fSxcblx0XHRjaGFuZ2VUYWc6ICdIb3RDYXQnLFxuXHRcdC8vIFRoZSBIVE1MIGNvbnRlbnQgb2YgdGhlIFwiZW50ZXIgbXVsdGktbW9kZVwiIGxpbmsgYXQgdGhlIGZyb250LlxuXHRcdGFkZG11bHRpOiAnPHNwYW4+KzxzdXA+Kzwvc3VwPjwvc3Bhbj4nLFxuXHRcdC8vIFJldHVybiB0cnVlIHRvIGRpc2FibGUgSG90Q2F0LlxuXHRcdGRpc2FibGU6ICgpID0+IHtcblx0XHRcdGNvbnN0IG5zID0gY29uZi53Z05hbWVzcGFjZU51bWJlcjtcblx0XHRcdGNvbnN0IG5zSWRzID0gY29uZi53Z05hbWVzcGFjZUlkcztcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdG5zIDwgMCB8fFxuXHRcdFx0XHQvLyBTcGVjaWFsIHBhZ2VzOyBTcGVjaWFsOlVwbG9hZCBpcyBoYW5kbGVkIGRpZmZlcmVudGx5XG5cdFx0XHRcdG5zID09PSAxMCB8fFxuXHRcdFx0XHQvLyBUZW1wbGF0ZXNcblx0XHRcdFx0bnMgPT09IDgyOCB8fFxuXHRcdFx0XHQvLyBNb2R1bGUgKEx1YSlcblx0XHRcdFx0bnMgPT09IDggfHxcblx0XHRcdFx0Ly8gTWVkaWFXaWtpXG5cdFx0XHRcdChucyA9PT0gNiAmJiAhY29uZi53Z0FydGljbGVJZCkgfHxcblx0XHRcdFx0Ly8gTm9uLWV4aXN0aW5nIGZpbGUgcGFnZXNcblx0XHRcdFx0KG5zID09PSAyICYmIC9cXC4oanN8Y3NzKSQvLnRlc3QoY29uZi53Z1RpdGxlKSkgfHxcblx0XHRcdFx0Ly8gVXNlciBzY3JpcHRzXG5cdFx0XHRcdChuc0lkcyAmJiAobnMgPT09IG5zSWRzLmNyZWF0b3IgfHwgbnMgPT09IG5zSWRzLnRpbWVkdGV4dCB8fCBucyA9PT0gbnNJZHMuaW5zdGl0dXRpb24pKVxuXHRcdFx0KTtcblx0XHR9LFxuXHRcdC8vIEEgcmVnZXhwIG1hdGNoaW5nIGEgdGVtcGxhdGVzIHVzZWQgdG8gbWFyayB1bmNhdGVnb3JpemVkIHBhZ2VzLCBpZiB5b3VyIHdpa2kgZG9lcyBoYXZlIHRoYXQuXG5cdFx0Ly8gSWYgbm90LCBzZXQgaXQgdG8gbnVsbC5cblx0XHR1bmNhdF9yZWdleHA6IC97e1xccypbVXVdbmNhdGVnb3JpemVkXFxzKltefV0qfX1cXHMqKDwhLS0uKj8tLT5cXHMqKT8vZyxcblx0XHQvLyBUaGUgaW1hZ2VzIHVzZWQgZm9yIHRoZSBsaXR0bGUgaW5kaWNhdGlvbiBpY29uLiBTaG91bGQgbm90IG5lZWQgY2hhbmdpbmcuXG5cdFx0ZXhpc3RzWWVzOiAnaHR0cHM6Ly90dS56aG9uZ3dlbi53aWtpL2ltYWdlcy9xaXV3ZW5iYWlrZS96aC90aHVtYi9iL2JlL1BfeWVzLnN2Zy8yMHB4LVBfeWVzLnN2Zy5wbmcnLFxuXHRcdGV4aXN0c05vOiAnaHR0cHM6Ly90dS56aG9uZ3dlbi53aWtpL2ltYWdlcy9xaXV3ZW5iYWlrZS96aC90aHVtYi80LzQyL1Bfbm8uc3ZnLzIwcHgtUF9uby5zdmcucG5nJyxcblx0XHQvLyBhIGxpc3Qgb2YgY2F0ZWdvcmllcyB3aGljaCBjYW4gYmUgcmVtb3ZlZCBieSByZW1vdmluZyBhIHRlbXBsYXRlXG5cdFx0Ly8ga2V5OiB0aGUgY2F0ZWdvcnkgd2l0aG91dCBuYW1lc3BhY2Vcblx0XHQvLyB2YWx1ZTogQSByZWdleHAgbWF0Y2hpbmcgdGhlIHRlbXBsYXRlIG5hbWUsIGFnYWluIHdpdGhvdXQgbmFtZXNwYWNlXG5cdFx0Ly8gSWYgeW91IGRvbid0IGhhdmUgdGhpcyBhdCB5b3VyIHdpa2ksIG9yIGRvbid0IHdhbnQgdGhpcywgc2V0IGl0IHRvIGFuIGVtcHR5IG9iamVjdCB7fS5cblx0XHR0ZW1wbGF0ZV9jYXRlZ29yaWVzOiB7fSxcblx0XHQvLyBPdmVycmlkZSB0aGUgZGVjaXNpb24gb2Ygd2hldGhlciBIb3RDYXQgc2hvdWxkIGhlbHAgdXNlcnMgYnkgYXV0b21hdGljYWxseVxuXHRcdC8vIGNhcGl0YWxpc2luZyB0aGUgdGl0bGUgaW4gdGhlIHVzZXIgaW5wdXQgdGV4dCBpZiB0aGUgd2lraSBoYXMgY2FzZS1zZW5zaXRpdmUgcGFnZSBuYW1lcy5cblx0XHQvLyBCYXNpY2FsbHksIHRoaXMgd2lsbCBtYWtlIGFuIEFQSSBxdWVyeSB0byBjaGVjayB0aGUgTWVkaWFXaWtpIGNvbmZpZ3VyYXRpb24gYW5kIEhvdENhdCB0aGVuIHNldHNcblx0XHQvLyB0aGlzIHRvIHRydWUgZm9yIG1vc3Qgd2lraXMsIGFuZCB0byBmYWxzZSBvbiBXaWt0aW9uYXJ5LlxuXHRcdC8vXG5cdFx0Ly8gWW91IGNhbiBzZXQgdGhpcyBkaXJlY3RseSBpZiB0aGVyZSBpcyBhIHByb2JsZW0gd2l0aCBpdC4gRm9yIGV4YW1wbGUsIEdlb3JnaWFuIFdpa2lwZWRpYSAoa2F3aWtpKSxcblx0XHQvLyBpcyBrbm93biB0byBoYXZlIGRpZmZlcmVudCBjYXBpdGFsaXNhdGlvbiBsb2dpYyBiZXR3ZWVuIE1lZGlhV2lraSBQSFAgYW5kIEphdmFTY3JpcHQuIEFzIHN1Y2gsIGF1dG9tYXRpY1xuXHRcdC8vIGNhc2UgY2hhbmdlcyBpbiBKYXZhU2NyaXB0IGJ5IEhvdENhdCB3b3VsZCBiZSB3cm9uZy5cblx0XHRjYXBpdGFsaXplUGFnZU5hbWVzOiBudWxsLFxuXHRcdC8vIElmIHVwbG9hZF9kaXNhYmxlZCBpcyB0cnVlLCBIb3RDYXQgd2lsbCBub3QgYmUgdXNlZCBvbiB0aGUgVXBsb2FkIGZvcm0uXG5cdFx0dXBsb2FkX2Rpc2FibGVkOiBmYWxzZSxcblx0XHQvLyBTaW5nbGUgcmVndWxhciBleHByZXNzaW9uIG1hdGNoaW5nIGJsYWNrbGlzdGVkIGNhdGVnb3JpZXMgdGhhdCBjYW5ub3QgYmUgY2hhbmdlZCBvclxuXHRcdC8vIGFkZGVkIHVzaW5nIEhvdENhdC4gRm9yIGluc3RhbmNlIC9cXGJzdHVicz8kLyAoYW55IGNhdGVnb3J5IGVuZGluZyB3aXRoIHRoZSB3b3JkIFwic3R1YlwiXG5cdFx0Ly8gb3IgXCJzdHVic1wiKSwgb3IgLyhcXGJzdHVicz8kKXxcXGJtYWludGVuYW5jZVxcYi8gKHN0dWIgY2F0ZWdvcmllcyBhbmQgYW55IGNhdGVnb3J5IHdpdGggdGhlXG5cdFx0Ly8gd29yZCBcIm1haW50ZW5hbmNlXCIgaW4gaXRzIHRpdGxlLlxuXHRcdGJsYWNrbGlzdDogbnVsbCxcblx0XHQvLyBTdHVmZiBjaGFuZ2VhYmxlIGJ5IHVzZXJzOlxuXHRcdC8vIEJhY2tncm91bmQgZm9yIGNoYW5nZWQgY2F0ZWdvcmllcyBpbiBtdWx0aS1lZGl0IG1vZGUuIERlZmF1bHQgaXMgYSB2ZXJ5IGxpZ2h0IHNhbG1vbiBwaW5rLlxuXHRcdGJnX2NoYW5nZWQ6ICcjRkNBJyxcblx0XHQvLyBJZiB0cnVlLCBIb3RDYXQgd2lsbCBuZXZlciBhdXRvbWF0aWNhbGx5IHN1Ym1pdCBjaGFuZ2VzLiBIb3RDYXQgd2lsbCBvbmx5IG9wZW4gYW4gZWRpdCBwYWdlIHdpdGhcblx0XHQvLyB0aGUgY2hhbmdlczsgdXNlcnMgbXVzdCBhbHdheXMgc2F2ZSBleHBsaWNpdGx5LlxuXHRcdG5vX2F1dG9jb21taXQ6IGZhbHNlLFxuXHRcdC8vIElmIHRydWUsIHRoZSBcImNhdGVnb3J5IGRlbGV0aW9uXCIgbGluayBcIigtKVwiIHdpbGwgbmV2ZXIgc2F2ZSBhdXRvbWF0aWNhbGx5IGJ1dCBhbHdheXMgc2hvdyBhblxuXHRcdC8vIGVkaXQgcGFnZSB3aGVyZSB0aGUgdXNlciBoYXMgdG8gc2F2ZSB0aGUgZWRpdCBtYW51YWxseS4gSXMgZmFsc2UgYnkgZGVmYXVsdCBiZWNhdXNlIHRoYXQncyB0aGVcblx0XHQvLyB0cmFkaXRpb25hbCBiZWhhdmlvci4gVGhpcyBzZXR0aW5nIG92ZXJyaWRlcyBub19hdXRvY29tbWl0IGZvciBcIigtKVwiIGxpbmtzLlxuXHRcdGRlbF9uZWVkc19kaWZmOiBmYWxzZSxcblx0XHQvLyBUaW1lLCBpbiBtaWxsaXNlY29uZHMsIHRoYXQgSG90Q2F0IHdhaXRzIGFmdGVyIGEga2V5c3Ryb2tlIGJlZm9yZSBtYWtpbmcgYSByZXF1ZXN0IHRvIHRoZVxuXHRcdC8vIHNlcnZlciB0byBnZXQgc3VnZ2VzdGlvbnMuXG5cdFx0c3VnZ2VzdF9kZWxheTogMTAwMCxcblx0XHQvLyBEZWZhdWx0IHdpZHRoLCBpbiBjaGFyYWN0ZXJzLCBvZiB0aGUgdGV4dCBpbnB1dCBmaWVsZC5cblx0XHRlZGl0Ym94X3dpZHRoOiA0MCxcblx0XHQvLyBPbmUgb2YgdGhlIGVuZ2luZV9uYW1lcyBhYm92ZSwgdG8gYmUgdXNlZCBhcyB0aGUgZGVmYXVsdCBzdWdnZXN0aW9uIGVuZ2luZS5cblx0XHRzdWdnZXN0aW9uczogJ2NvbWJpbmVkJyxcblx0XHQvLyBJZiB0cnVlLCBhbHdheXMgdXNlIHRoZSBkZWZhdWx0IGVuZ2luZSwgYW5kIG5ldmVyIGRpc3BsYXkgYSBzZWxlY3Rvci5cblx0XHRmaXhlZF9zZWFyY2g6IGZhbHNlLFxuXHRcdC8vIElmIGZhbHNlLCBkbyBub3QgZGlzcGxheSB0aGUgXCJ1cFwiIGFuZCBcImRvd25cIiBsaW5rc1xuXHRcdHVzZV91cF9kb3duOiB0cnVlLFxuXHRcdC8vIERlZmF1bHQgbGlzdCBzaXplXG5cdFx0bGlzdFNpemU6IDEwLFxuXHRcdC8vIElmIHRydWUsIHNpbmdsZSBjYXRlZ29yeSBjaGFuZ2VzIGFyZSBtYXJrZWQgYXMgbWlub3IgZWRpdHMuIElmIGZhbHNlLCB0aGV5J3JlIG5vdC5cblx0XHRzaW5nbGVfbWlub3I6IHRydWUsXG5cdFx0Ly8gSWYgdHJ1ZSwgbmV2ZXIgYWRkIGEgcGFnZSB0byB0aGUgdXNlcidzIHdhdGNobGlzdC4gSWYgZmFsc2UsIHBhZ2VzIGdldCBhZGRlZCB0byB0aGUgd2F0Y2hsaXN0IGlmXG5cdFx0Ly8gdGhlIHVzZXIgaGFzIHRoZSBcIkFkZCBwYWdlcyBJIGVkaXQgdG8gbXkgd2F0Y2hsaXN0XCIgb3IgdGhlIFwiQWRkIHBhZ2VzIEkgY3JlYXRlIHRvIG15IHdhdGNobGlzdFwiXG5cdFx0Ly8gb3B0aW9ucyBpbiBoaXMgb3IgaGVyIHByZWZlcmVuY2VzIHNldC5cblx0XHRkb250X2FkZF90b193YXRjaGxpc3Q6IGZhbHNlLFxuXHRcdHNob3J0Y3V0czogbnVsbCxcblx0XHRhZGRTaG9ydGN1dHM6IChtYXApID0+IHtcblx0XHRcdGxldCBfYTtcblx0XHRcdGlmICghbWFwKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdChfYSA9IHdpbmRvdy5Ib3RDYXQpLnNob3J0Y3V0cyB8fCAoX2Euc2hvcnRjdXRzID0ge30pO1xuXHRcdFx0Zm9yIChsZXQgayBpbiBtYXApIHtcblx0XHRcdFx0aWYgKCFPYmplY3QuaGFzT3duKG1hcCwgaykgfHwgdHlwZW9mIGsgIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGV0IHYgPSBtYXBba107XG5cdFx0XHRcdGlmICh0eXBlb2YgdiAhPT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRrID0gay50cmltKCk7XG5cdFx0XHRcdHYgPSB2LnRyaW0oKTtcblx0XHRcdFx0aWYgKGsubGVuZ3RoID09PSAwIHx8IHYubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0d2luZG93LkhvdENhdC5zaG9ydGN1dHNba10gPSB2O1xuXHRcdFx0fVxuXHRcdH0sXG5cdH07XG5cdGNvbnN0IEhDID0gd2luZG93LkhvdENhdDtcblx0Ly8gTW9yZSBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS4gV2UgaGF2ZSBhIGZldyBwbGFjZXMgd2hlcmUgd2UgdGVzdCBmb3IgdGhlIGJyb3dzZXI6IG9uY2UgZm9yXG5cdC8vIFNhZmFyaSA8IDMuMCwgYW5kIHR3aWNlIGZvciBXZWJLaXQgKENocm9tZSBvciBTYWZhcmksIGFueSB2ZXJzaW9ucylcblx0Y29uc3QgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG5cdGNvbnN0IGlzX3dlYmtpdCA9IC9hcHBsZXdlYmtpdFxcL1xcZCsvLnRlc3QodWEpICYmICF1YS5pbmNsdWRlcygnc3Bvb2ZlcicpO1xuXHRsZXQgY2F0X3ByZWZpeCA9IG51bGw7XG5cdGxldCBub1N1Z2dlc3Rpb25zID0gZmFsc2U7XG5cdC8vIE5vIGZ1cnRoZXIgY2hhbmdlcyBzaG91bGQgYmUgbmVjZXNzYXJ5IGhlcmUuXG5cdC8vIFRoZSBmb2xsb3dpbmcgcmVndWxhciBleHByZXNzaW9uIHN0cmluZ3MgYXJlIHVzZWQgd2hlbiBzZWFyY2hpbmcgZm9yIGNhdGVnb3JpZXMgaW4gd2lraXRleHQuXG5cdGNvbnN0IHdpa2lUZXh0QmxhbmsgPSAnW1xcXFx0IF9cXFxceEEwXFxcXHUxNjgwXFxcXHUxODBFXFxcXHUyMDAwLVxcXFx1MjAwQVxcXFx1MjAyOFxcXFx1MjAyOVxcXFx1MjAyRlxcXFx1MjA1RlxcXFx1MzAwMF0rJztcblx0Y29uc3Qgd2lraVRleHRCbGFua1JFID0gbmV3IFJlZ0V4cCh3aWtpVGV4dEJsYW5rLCAnZycpO1xuXHQvLyBSZWdleHAgZm9yIGhhbmRsaW5nIGJsYW5rcyBpbnNpZGUgYSBjYXRlZ29yeSB0aXRsZSBvciBuYW1lc3BhY2UgbmFtZS5cblx0Ly8gU2VlIHtAbGluayBodHRwOi8vc3ZuLndpa2ltZWRpYS5vcmcvdmlld3ZjL21lZGlhd2lraS90cnVuay9waGFzZTMvaW5jbHVkZXMvVGl0bGUucGhwP3JldmlzaW9uPTEwNDA1MSZ2aWV3PW1hcmt1cCNsMjcyMn1cblx0Ly8gU2VlIGFsc28ge0BsaW5rIGh0dHA6Ly93d3cuZmlsZWZvcm1hdC5pbmZvL2luZm8vdW5pY29kZS9jYXRlZ29yeS9acy9saXN0Lmh0bX1cblx0Ly8gICBNZWRpYVdpa2kgY29sbGFwc2VzIHNldmVyYWwgY29udGlndW91cyBibGFua3MgaW5zaWRlIGEgcGFnZSB0aXRsZSB0byBvbmUgc2luZ2xlIGJsYW5rLiBJdCBhbHNvIHJlcGxhY2UgYVxuXHQvLyBudW1iZXIgb2Ygc3BlY2lhbCB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMgYnkgc2ltcGxlIGJsYW5rcy4gQW5kIGZpbmFsbHksIGJsYW5rcyBhcmUgdHJlYXRlZCBhcyB1bmRlcnNjb3Jlcy5cblx0Ly8gVGhlcmVmb3JlLCB3aGVuIGxvb2tpbmcgZm9yIHBhZ2UgdGl0bGVzIGluIHdpa2l0ZXh0LCB3ZSBtdXN0IGhhbmRsZSBhbGwgdGhlc2UgY2FzZXMuXG5cdC8vICAgTm90ZTogd2UgX2RvXyBpbmNsdWRlIHRoZSBob3Jpem9udGFsIHRhYiBpbiB0aGUgYWJvdmUgbGlzdCwgZXZlbiB0aG91Z2ggdGhlIE1lZGlhV2lraSBzb2Z0d2FyZSBmb3Igc29tZSByZWFzb25cblx0Ly8gYXBwZWFycyB0byBub3QgaGFuZGxlIGl0LiBUaGUgemVyby13aWR0aCBzcGFjZSBcXHUyMDBCIGlzIF9ub3RfIGhhbmRsZWQgYXMgYSBzcGFjZSBpbnNpZGUgdGl0bGVzIGJ5IE1XLlxuXHRjb25zdCB3aWtpVGV4dEJsYW5rT3JCaWRpID0gJ1tcXFxcdCBfXFxcXHhBMFxcXFx1MTY4MFxcXFx1MTgwRVxcXFx1MjAwMC1cXFxcdTIwMEJcXFxcdTIwMEVcXFxcdTIwMEZcXFxcdTIwMjgtXFxcXHUyMDJGXFxcXHUyMDVGXFxcXHUzMDAwXSonO1xuXHQvLyBXaGl0ZXNwYWNlIHJlZ2V4cCBmb3IgaGFuZGxpbmcgd2hpdGVzcGFjZSBiZXR3ZWVuIGxpbmsgY29tcG9uZW50cy4gSW5jbHVkaW5nIHRoZSBob3Jpem9udGFsIHRhYiwgYnV0IG5vdCBcXG5cXHJcXGZcXHY6XG5cdC8vIGEgbGluayBtdXN0IGJlIG9uIG9uZSBzaW5nbGUgbGluZS5cblx0Ly8gICBNZWRpYVdpa2kgYWxzbyByZW1vdmVzIFVuaWNvZGUgYmlkaSBvdmVycmlkZSBjaGFyYWN0ZXJzIGluIHBhZ2UgdGl0bGVzIChhbmQgbmFtZXNwYWNlIG5hbWVzKSBjb21wbGV0ZWx5LlxuXHQvLyBUaGlzIGlzICpub3QqIGhhbmRsZWQsIGFzIGl0IHdvdWxkIHJlcXVpcmUgdXMgdG8gYWxsb3cgYW55IG9mIFtcXHUyMDBFXFx1MjAwRlxcdTIwMkEtXFx1MjAyRV0gYmV0d2VlbiBhbnkgdHdvXG5cdC8vIGNoYXJhY3RlcnMgaW5zaWRlIGEgY2F0ZWdvcnkgbGluay4gSXQgX2NvdWxkXyBiZSBkb25lIHRob3VnaC4uLiBXZSBfZG9fIGhhbmRsZSBzdHJhbmdlIHNwYWNlcywgaW5jbHVkaW5nIHRoZVxuXHQvLyB6ZXJvLXdpZHRoIHNwYWNlIFxcdTIwMEIsIGFuZCBiaWRpIG92ZXJyaWRlcyBiZXR3ZWVuIHRoZSBjb21wb25lbnRzIG9mIGEgY2F0ZWdvcnkgbGluayAoYWRqYWNlbnQgdG8gdGhlIGNvbG9uLFxuXHQvLyBvciBhZGphY2VudCB0byBhbmQgaW5zaWRlIG9mIFwiW1tcIiBhbmQgXCJdXVwiKS5cblx0Ly8gRmlyc3QgYXV0by1sb2NhbGl6ZSB0aGUgcmVnZXhwcyBmb3IgdGhlIGNhdGVnb3J5IGFuZCB0aGUgdGVtcGxhdGUgbmFtZXNwYWNlcy5cblx0Y29uc3QgZm9ybWF0dGVkTmFtZXNwYWNlcyA9IGNvbmYud2dGb3JtYXR0ZWROYW1lc3BhY2VzO1xuXHRjb25zdCBuYW1lc3BhY2VJZHMgPSBjb25mLndnTmFtZXNwYWNlSWRzO1xuXHRjb25zdCBhdXRvTG9jYWxpemUgPSAobmFtZXNwYWNlTnVtYmVyLCBmYWxsYmFjaykgPT4ge1xuXHRcdGNvbnN0IGNyZWF0ZVJlZ2V4cFN0ciA9IChuYW1lKSA9PiB7XG5cdFx0XHRpZiAoIW5hbWUgfHwgbmFtZS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0bGV0IHJlZ2V4X25hbWUgPSAnJztcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbmFtZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjb25zdCBpbml0aWFsID0gbmFtZS5jaGFyQXQoaSk7XG5cdFx0XHRcdGNvbnN0IGxsID0gaW5pdGlhbC50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0XHRjb25zdCB1bCA9IGluaXRpYWwudG9VcHBlckNhc2UoKTtcblx0XHRcdFx0cmVnZXhfbmFtZSArPSBsbCA9PT0gdWwgPyBpbml0aWFsIDogYFske2xsfSR7dWx9XWA7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmVnZXhfbmFtZS5yZXBsYWNlKC8oWyQoKSorLj9cXFxcXl0pL2csICdcXFxcJDEnKS5yZXBsYWNlKHdpa2lUZXh0QmxhbmtSRSwgd2lraVRleHRCbGFuayk7XG5cdFx0fTtcblx0XHRmYWxsYmFjayA9IGZhbGxiYWNrLnRvTG93ZXJDYXNlKCk7XG5cdFx0Y29uc3QgY2Fub25pY2FsID0gZm9ybWF0dGVkTmFtZXNwYWNlc1tTdHJpbmcobmFtZXNwYWNlTnVtYmVyKV0udG9Mb3dlckNhc2UoKTtcblx0XHRsZXQgcmVnZXhwID0gY3JlYXRlUmVnZXhwU3RyKGNhbm9uaWNhbCk7XG5cdFx0aWYgKGZhbGxiYWNrICYmIGNhbm9uaWNhbCAhPT0gZmFsbGJhY2spIHtcblx0XHRcdHJlZ2V4cCArPSBgfCR7Y3JlYXRlUmVnZXhwU3RyKGZhbGxiYWNrKX1gO1xuXHRcdH1cblx0XHRpZiAobmFtZXNwYWNlSWRzKSB7XG5cdFx0XHRmb3IgKGNvbnN0IGNhdF9uYW1lIGluIG5hbWVzcGFjZUlkcykge1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0dHlwZW9mIGNhdF9uYW1lID09PSAnc3RyaW5nJyAmJlxuXHRcdFx0XHRcdGNhdF9uYW1lLnRvTG93ZXJDYXNlKCkgIT09IGNhbm9uaWNhbCAmJlxuXHRcdFx0XHRcdGNhdF9uYW1lLnRvTG93ZXJDYXNlKCkgIT09IGZhbGxiYWNrICYmXG5cdFx0XHRcdFx0bmFtZXNwYWNlSWRzW2NhdF9uYW1lXSA9PT0gbmFtZXNwYWNlTnVtYmVyXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHJlZ2V4cCArPSBgfCR7Y3JlYXRlUmVnZXhwU3RyKGNhdF9uYW1lKX1gO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByZWdleHA7XG5cdH07XG5cdEhDLmNhdGVnb3J5X2Nhbm9uaWNhbCA9IGZvcm1hdHRlZE5hbWVzcGFjZXNbJzE0J107XG5cdEhDLmNhdGVnb3J5X3JlZ2V4cCA9IGF1dG9Mb2NhbGl6ZSgxNCwgJ2NhdGVnb3J5Jyk7XG5cdGlmIChmb3JtYXR0ZWROYW1lc3BhY2VzWycxMCddKSB7XG5cdFx0SEMudGVtcGxhdGVfcmVnZXhwID0gYXV0b0xvY2FsaXplKDEwLCAndGVtcGxhdGUnKTtcblx0fVxuXHQvLyBVdGlsaXR5IGZ1bmN0aW9ucy4gWWVzLCB0aGlzIGR1cGxpY2F0ZXMgc29tZSBmdW5jdGlvbmFsaXR5IHRoYXQgYWxzbyBleGlzdHMgaW4gb3RoZXIgcGxhY2VzLCBidXRcblx0Ly8gdG8ga2VlcCB0aGlzIHdob2xlIHN0dWZmIGluIGEgc2luZ2xlIGZpbGUgbm90IGRlcGVuZGluZyBvbiBhbnkgb3RoZXIgb24td2lraSBKYXZhU2NyaXB0cywgd2UgcmUtZG9cblx0Ly8gdGhlc2UgZmV3IG9wZXJhdGlvbnMgaGVyZS5cblx0Y29uc3QgbWFrZSA9IChhcmcsIGxpdGVyYWwpID0+IHtcblx0XHRpZiAoIWFyZykge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdHJldHVybiBsaXRlcmFsID8gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYXJnKSA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYXJnKTtcblx0fTtcblx0Y29uc3QgcGFyYW0gPSAobmFtZSwgdXJpKSA9PiB7XG5cdFx0dXJpIHx8PSBkb2N1bWVudC5sb2NhdGlvbi5ocmVmO1xuXHRcdGNvbnN0IHJlID0gbmV3IFJlZ0V4cChgWyY/XSR7bmFtZX09KFteJiNdKilgKTtcblx0XHRjb25zdCBtID0gcmUuZXhlYyh1cmkpO1xuXHRcdGlmIChtICYmIG0ubGVuZ3RoID4gMSkge1xuXHRcdFx0cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChtWzFdKTtcblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH07XG5cdGNvbnN0IHRpdGxlID0gKGhyZWYpID0+IHtcblx0XHRpZiAoIWhyZWYpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRjb25zdCBzY3JpcHQgPSBgJHtjb25mLndnU2NyaXB0fT9gO1xuXHRcdGlmIChcblx0XHRcdGhyZWYuaW5kZXhPZihzY3JpcHQpID09PSAwIHx8XG5cdFx0XHRocmVmLmluZGV4T2YoY29uZi53Z1NlcnZlciArIHNjcmlwdCkgPT09IDAgfHxcblx0XHRcdChjb25mLndnU2VydmVyLnNsaWNlKDAsIDIpID09PSAnLy8nICYmXG5cdFx0XHRcdGhyZWYuaW5kZXhPZihkb2N1bWVudC5sb2NhdGlvbi5wcm90b2NvbCArIGNvbmYud2dTZXJ2ZXIgKyBzY3JpcHQpID09PSAwKVxuXHRcdCkge1xuXHRcdFx0Ly8gaHJlZj1cIi9pbmRleC5waHA/dGl0bGU9Li4uXCJcblx0XHRcdHJldHVybiBwYXJhbSgndGl0bGUnLCBocmVmKTtcblx0XHR9XG5cdFx0Ly8gaHJlZj1cIi93aWtpLy4uLlwiXG5cdFx0bGV0IHByZWZpeCA9IGNvbmYud2dBcnRpY2xlUGF0aC5yZXBsYWNlKCckMScsICcnKTtcblx0XHRpZiAoaHJlZi5pbmRleE9mKHByZWZpeCkpIHtcblx0XHRcdHByZWZpeCA9IGNvbmYud2dTZXJ2ZXIgKyBwcmVmaXg7XG5cdFx0fSAvLyBGdWxseSBleHBhbmRlZCBVUkw/XG5cdFx0aWYgKGhyZWYuaW5kZXhPZihwcmVmaXgpICYmIHByZWZpeC5zbGljZSgwLCAyKSA9PT0gJy8vJykge1xuXHRcdFx0cHJlZml4ID0gZG9jdW1lbnQubG9jYXRpb24ucHJvdG9jb2wgKyBwcmVmaXg7XG5cdFx0fSAvLyBQcm90b2NvbC1yZWxhdGl2ZSB3Z1NlcnZlcj9cblx0XHRpZiAoaHJlZi5pbmRleE9mKHByZWZpeCkgPT09IDApIHtcblx0XHRcdHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoaHJlZi5zbGljZShwcmVmaXgubGVuZ3RoKSk7XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9O1xuXHRjb25zdCBoYXNDbGFzcyA9ICh7Y2xhc3NOYW1lfSwgbmFtZSkgPT4ge1xuXHRcdHJldHVybiBgICR7Y2xhc3NOYW1lfSBgLmluY2x1ZGVzKGAgJHtuYW1lfSBgKTtcblx0fTtcblx0Y29uc3QgY2FwaXRhbGl6ZSA9IChzdHIpID0+IHtcblx0XHRpZiAoIXN0ciB8fCBzdHIubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gc3RyO1xuXHRcdH1cblx0XHRyZXR1cm4gc3RyLnNsaWNlKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG5cdH07XG5cdGNvbnN0IHdpa2lQYWdlUGF0aCA9IChwYWdlTmFtZSkgPT4ge1xuXHRcdHJldHVybiBjb25mLndnQXJ0aWNsZVBhdGgucmVwbGFjZSgnJDEnLCBlbmNvZGVVUklDb21wb25lbnQocGFnZU5hbWUpLnJlcGxhY2UoLyUzQS9nLCAnOicpLnJlcGxhY2UoLyUyRi9nLCAnLycpKTtcblx0fTtcblx0Y29uc3QgZXNjYXBlUkUgPSAoc3RyKSA9PiB7XG5cdFx0cmV0dXJuIHN0ci5yZXBsYWNlKC8oWyQoKSorLj9bXFxcXFxcXV5dKS9nLCAnXFxcXCQxJyk7XG5cdH07XG5cdGNvbnN0IHN1YnN0aXR1dGVGYWN0b3J5ID0gKG9wdGlvbnMpID0+IHtcblx0XHRvcHRpb25zIHx8PSB7fTtcblx0XHRjb25zdCBsZWFkID0gb3B0aW9ucy5pbmRpY2F0b3IgfHwgJyQnO1xuXHRcdGNvbnN0IGluZGljYXRvciA9IGVzY2FwZVJFKGxlYWQpO1xuXHRcdGNvbnN0IGxicmFjZSA9IGVzY2FwZVJFKG9wdGlvbnMubGJyYWNlIHx8ICd7Jyk7XG5cdFx0Y29uc3QgcmJyYWNlID0gZXNjYXBlUkUob3B0aW9ucy5yYnJhY2UgfHwgJ30nKTtcblx0XHRjb25zdCByZSA9IG5ldyBSZWdFeHAoXG5cdFx0XHQvLyAkJFxuXHRcdFx0YCg/OiR7aW5kaWNhdG9yfSgke2luZGljYXRvcn0pKXxgICtcblx0XHRcdFx0Ly8gJDAsICQxXG5cdFx0XHRcdGAoPzoke2luZGljYXRvcn0oXFxcXGQrKSl8YCArXG5cdFx0XHRcdC8vICR7a2V5fVxuXHRcdFx0XHRgKD86JHtpbmRpY2F0b3J9KD86JHtsYnJhY2V9KFteJHtsYnJhY2V9JHtyYnJhY2V9XSspJHtyYnJhY2V9KSl8YCArXG5cdFx0XHRcdC8vICRrZXkgKG9ubHkgaWYgZmlyc3QgY2hhciBhZnRlciAkIGlzIG5vdCAkLCBkaWdpdCwgb3IgeyApXG5cdFx0XHRcdGAoPzoke2luZGljYXRvcn0oPyEoPzpbJHtpbmRpY2F0b3J9JHtsYnJhY2V9XXxcXFxcZCkpKFxcXFxTKz8pXFxcXGIpYCxcblx0XHRcdCdnJ1xuXHRcdCk7XG5cdFx0Ly8gUmVwbGFjZSAkMSwgJDIsIG9yICR7a2V5MX0sICR7a2V5Mn0sIG9yICRrZXkxLCAka2V5MiBieSB2YWx1ZXMgZnJvbSBtYXAuICQkIGlzIHJlcGxhY2VkIGJ5IGEgc2luZ2xlICQuXG5cdFx0cmV0dXJuIChzdHIsIG1hcCkgPT4ge1xuXHRcdFx0aWYgKCFtYXApIHtcblx0XHRcdFx0cmV0dXJuIHN0cjtcblx0XHRcdH1cblx0XHRcdHJldHVybiBzdHIucmVwbGFjZShyZSwgKG1hdGNoLCBwcmVmaXgsIGlkeCwga2V5LCBhbHBoYSkgPT4ge1xuXHRcdFx0XHRpZiAocHJlZml4ID09PSBsZWFkKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGxlYWQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgayA9IGFscGhhIHx8IGtleSB8fCBpZHg7XG5cdFx0XHRcdGNvbnN0IHJlcGxhY2VtZW50ID0gdHlwZW9mIG1hcFtrXSA9PT0gJ2Z1bmN0aW9uJyA/IG1hcFtrXShtYXRjaCwgaykgOiBtYXBba107XG5cdFx0XHRcdHJldHVybiB0eXBlb2YgcmVwbGFjZW1lbnQgPT09ICdzdHJpbmcnID8gcmVwbGFjZW1lbnQgOiByZXBsYWNlbWVudCB8fCBtYXRjaDtcblx0XHRcdH0pO1xuXHRcdH07XG5cdH07XG5cdGNvbnN0IHJlcGxhY2VTaG9ydGN1dHMgPSAoKCkgPT4ge1xuXHRcdGNvbnN0IHJlcGxhY2VIYXNoID0gc3Vic3RpdHV0ZUZhY3Rvcnkoe1xuXHRcdFx0aW5kaWNhdG9yOiAnIycsXG5cdFx0XHRsYnJhY2U6ICdbJyxcblx0XHRcdHJicmFjZTogJ10nLFxuXHRcdH0pO1xuXHRcdHJldHVybiAoc3RyLCBtYXApID0+IHtcblx0XHRcdGNvbnN0IHMgPSByZXBsYWNlSGFzaChzdHIsIG1hcCk7XG5cdFx0XHRyZXR1cm4gSEMuY2FwaXRhbGl6ZVBhZ2VOYW1lcyA/IGNhcGl0YWxpemUocykgOiBzO1xuXHRcdH07XG5cdH0pKCk7XG5cdC8vIFRleHQgbW9kaWZpY2F0aW9uXG5cdGNvbnN0IGZpbmRDYXRzUkUgPSBuZXcgUmVnRXhwKFxuXHRcdGBcXFxcW1xcXFxbJHt3aWtpVGV4dEJsYW5rT3JCaWRpfSg/OiR7SEMuY2F0ZWdvcnlfcmVnZXhwfSkke3dpa2lUZXh0QmxhbmtPckJpZGl9OlteXFxcXF1dK1xcXFxdXFxcXF1gLFxuXHRcdCdnJ1xuXHQpO1xuXHRjb25zdCByZXBsYWNlQnlCbGFua3MgPSAobWF0Y2gpID0+IHtcblx0XHRyZXR1cm4gbWF0Y2gucmVwbGFjZSgvKFxcc3xcXFMpL2csICcgJyk7XG5cdH07IC8vIC8uLyBkb2Vzbid0IG1hdGNoIGxpbmVicmVha3MuIC8oXFxzfFxcUykvIGRvZXMuXG5cdGNvbnN0IGZpbmRfY2F0ZWdvcnkgPSAod2lraXRleHQsIGNhdGVnb3J5LCBvbmNlKSA9PiB7XG5cdFx0bGV0IGNhdF9yZWdleCA9IG51bGw7XG5cdFx0aWYgKEhDLnRlbXBsYXRlX2NhdGVnb3JpZXNbY2F0ZWdvcnldKSB7XG5cdFx0XHRjYXRfcmVnZXggPSBuZXcgUmVnRXhwKFxuXHRcdFx0XHRgXFxcXHtcXFxceyR7d2lraVRleHRCbGFua09yQmlkaX0oJHtIQy50ZW1wbGF0ZV9yZWdleHB9KD89JHt3aWtpVGV4dEJsYW5rT3JCaWRpfTopKT8ke3dpa2lUZXh0QmxhbmtPckJpZGl9KD86JHtIQy50ZW1wbGF0ZV9jYXRlZ29yaWVzW2NhdGVnb3J5XX0pJHt3aWtpVGV4dEJsYW5rT3JCaWRpfShcXFxcfC4qPyk/XFxcXH1cXFxcfWAsXG5cdFx0XHRcdCdnJ1xuXHRcdFx0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgY2F0X25hbWUgPSBlc2NhcGVSRShjYXRlZ29yeSk7XG5cdFx0XHRjb25zdCBpbml0aWFsID0gY2F0X25hbWUuc2xpY2UoMCwgMSk7XG5cdFx0XHRjYXRfcmVnZXggPSBuZXcgUmVnRXhwKFxuXHRcdFx0XHRgXFxcXFtcXFxcWyR7d2lraVRleHRCbGFua09yQmlkaX0oJHtIQy5jYXRlZ29yeV9yZWdleHB9KSR7d2lraVRleHRCbGFua09yQmlkaX06JHt3aWtpVGV4dEJsYW5rT3JCaWRpfSR7XG5cdFx0XHRcdFx0aW5pdGlhbCA9PT0gJ1xcXFwnIHx8ICFIQy5jYXBpdGFsaXplUGFnZU5hbWVzXG5cdFx0XHRcdFx0XHQ/IGluaXRpYWxcblx0XHRcdFx0XHRcdDogYFske2luaXRpYWwudG9VcHBlckNhc2UoKX0ke2luaXRpYWwudG9Mb3dlckNhc2UoKX1dYFxuXHRcdFx0XHR9JHtjYXRfbmFtZS5zbGljZSgxKS5yZXBsYWNlKHdpa2lUZXh0QmxhbmtSRSwgd2lraVRleHRCbGFuayl9JHt3aWtpVGV4dEJsYW5rT3JCaWRpfShcXFxcfC4qPyk/XFxcXF1cXFxcXWAsXG5cdFx0XHRcdCdnJ1xuXHRcdFx0KTtcblx0XHR9XG5cdFx0aWYgKG9uY2UpIHtcblx0XHRcdHJldHVybiBjYXRfcmVnZXguZXhlYyh3aWtpdGV4dCk7XG5cdFx0fVxuXHRcdGNvbnN0IG5vd2lraVJlZ2V4ID0gbmV3IFJlZ0V4cCgnPG5vJy5jb25jYXQoJ3dpa2k+JywgJyhcXFxcc3xcXFxcUykqPzwvbm8nLCAnd2lraScsICc+JyksICdnJyk7XG5cdFx0Y29uc3QgY29waWVkdGV4dCA9IHdpa2l0ZXh0LnJlcGxhY2UoLzwhLS0oXFxzfFxcUykqPy0tPi9nLCByZXBsYWNlQnlCbGFua3MpLnJlcGxhY2Uobm93aWtpUmVnZXgsIHJlcGxhY2VCeUJsYW5rcyk7XG5cdFx0Y29uc3QgcmVzdWx0ID0gW107XG5cdFx0bGV0IGN1cnJfbWF0Y2ggPSBudWxsO1xuXHRcdHdoaWxlICgoY3Vycl9tYXRjaCA9IGNhdF9yZWdleC5leGVjKGNvcGllZHRleHQpKSAhPT0gbnVsbCkge1xuXHRcdFx0cmVzdWx0LnB1c2goe1xuXHRcdFx0XHRtYXRjaDogY3Vycl9tYXRjaCxcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRyZXN1bHQucmUgPSBjYXRfcmVnZXg7XG5cdFx0cmV0dXJuIHJlc3VsdDsgLy8gQW4gYXJyYXkgY29udGFpbmluZyBhbGwgbWF0Y2hlcywgd2l0aCBwb3NpdGlvbnMsIGluIHJlc3VsdFsgaSBdLm1hdGNoXG5cdH07XG5cdGxldCBpbnRlcmxhbmd1YWdlUkUgPSBudWxsO1xuXHRjb25zdCBjaGFuZ2VfY2F0ZWdvcnkgPSAod2lraXRleHQsIHRvUmVtb3ZlLCB0b0FkZCwga2V5LCBpc19oaWRkZW4pID0+IHtcblx0XHRjb25zdCBmaW5kX2luc2VydGlvbnBvaW50ID0gKF93aWtpdGV4dCkgPT4ge1xuXHRcdFx0Y29uc3Qgbm93aWtpUmVnZXggPSBuZXcgUmVnRXhwKCc8bm8nLmNvbmNhdCgnd2lraT4nLCAnKFxcXFxzfFxcXFxTKSo/PC9ubycsICd3aWtpJywgJz4nKSwgJ2cnKTtcblx0XHRcdGNvbnN0IGNvcGllZHRleHQgPSBfd2lraXRleHRcblx0XHRcdFx0LnJlcGxhY2UoLzwhLS0oXFxzfFxcUykqPy0tPi9nLCByZXBsYWNlQnlCbGFua3MpXG5cdFx0XHRcdC5yZXBsYWNlKG5vd2lraVJlZ2V4LCByZXBsYWNlQnlCbGFua3MpO1xuXHRcdFx0Ly8gU2VhcmNoIGluIGNvcGllZHRleHQgdG8gYXZvaWQgdGhhdCB3ZSBpbnNlcnQgaW5zaWRlIGFuIEhUTUwgY29tbWVudCBvciBhIG5vd2lraSBcImVsZW1lbnRcIi5cblx0XHRcdGxldCBpbmRleCA9IC0xO1xuXHRcdFx0ZmluZENhdHNSRS5sYXN0SW5kZXggPSAwO1xuXHRcdFx0d2hpbGUgKGZpbmRDYXRzUkUuZXhlYyhjb3BpZWR0ZXh0KSAhPT0gbnVsbCkge1xuXHRcdFx0XHRpbmRleCA9IGZpbmRDYXRzUkUubGFzdEluZGV4O1xuXHRcdFx0fVxuXHRcdFx0aWYgKGluZGV4IDwgMCkge1xuXHRcdFx0XHQvLyBGaW5kIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgaW50ZXJsYW5ndWFnZSBsaW5rLi4uXG5cdFx0XHRcdGxldCBtYXRjaCA9IG51bGw7XG5cdFx0XHRcdGludGVybGFuZ3VhZ2VSRVxuXHRcdFx0XHRcdD8gKG1hdGNoID0gaW50ZXJsYW5ndWFnZVJFLmV4ZWMoY29waWVkdGV4dCkpXG5cdFx0XHRcdFx0OiAvLyBBcHByb3hpbWF0aW9uIHdpdGhvdXQgQVBJOiBpbnRlcmxhbmd1YWdlIGxpbmtzIHN0YXJ0IHdpdGggMiB0byAzIGxvd2VyIGNhc2UgbGV0dGVycywgb3B0aW9uYWxseSBmb2xsb3dlZCBieVxuXHRcdFx0XHRcdFx0Ly8gYSBzZXF1ZW5jZSBvZiBncm91cHMgY29uc2lzdGluZyBvZiBhIGRhc2ggZm9sbG93ZWQgYnkgb25lIG9yIG1vcmUgbG93ZXIgY2FzZSBsZXR0ZXJzLiBFeGNlcHRpb25zIGFyZSBcInNpbXBsZVwiXG5cdFx0XHRcdFx0XHQvLyBhbmQgXCJ0b2tpcG9uYVwiLlxuXHRcdFx0XHRcdFx0KG1hdGNoID0gLygoXnxcXG5cXHI/KShcXFtcXFtcXHMqKChbYS16XXsyLDN9KC1bYS16XSspKil8c2ltcGxlfHRva2lwb25hKVxccyo6W15cXF1dK11dXFxzKikpKyQvLmV4ZWMoXG5cdFx0XHRcdFx0XHRcdGNvcGllZHRleHRcblx0XHRcdFx0XHRcdCkpO1xuXHRcdFx0XHRpZiAobWF0Y2gpIHtcblx0XHRcdFx0XHQoe2luZGV4fSA9IG1hdGNoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdGlkeDogaW5kZXgsXG5cdFx0XHRcdFx0b25DYXQ6IGZhbHNlLFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0aWR4OiBpbmRleCxcblx0XHRcdFx0b25DYXQ6IGluZGV4ID49IDAsXG5cdFx0XHR9O1xuXHRcdH07XG5cdFx0Y29uc3Qgc3VtbWFyeSA9IFtdO1xuXHRcdGNvbnN0IG5hbWVTcGFjZSA9IEhDLmNhdGVnb3J5X2Nhbm9uaWNhbDtcblx0XHRjb25zdCAvLyBQb3NpdGlvbiBvZiByZW1vdmVkIGNhdGVnb3J5O1xuXHRcdFx0a2V5Q2hhbmdlID0gdG9SZW1vdmUgJiYgdG9BZGQgJiYgdG9SZW1vdmUgPT09IHRvQWRkICYmIHRvQWRkLmxlbmd0aCA+IDA7XG5cdFx0bGV0IG1hdGNoZXM7XG5cdFx0bGV0IGNhdF9wb2ludCA9IC0xO1xuXHRcdGlmIChrZXkpIHtcblx0XHRcdGtleSA9IGB8JHtrZXl9YDtcblx0XHR9XG5cdFx0Ly8gUmVtb3ZlXG5cdFx0aWYgKHRvUmVtb3ZlICYmIHRvUmVtb3ZlLmxlbmd0aCA+IDApIHtcblx0XHRcdG1hdGNoZXMgPSBmaW5kX2NhdGVnb3J5KHdpa2l0ZXh0LCB0b1JlbW92ZSk7XG5cdFx0XHRpZiAoIW1hdGNoZXMgfHwgbWF0Y2hlcy5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR0ZXh0OiB3aWtpdGV4dCxcblx0XHRcdFx0XHRzdW1tYXJ5LFxuXHRcdFx0XHRcdGVycm9yOiBnZXRNZXNzYWdlKCdtZXNzYWdlcy1jYXRfbm90Rm91bmQnLCB0b1JlbW92ZSksXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRsZXQgYmVmb3JlID0gd2lraXRleHQuc2xpY2UoMCwgTWF0aC5tYXgoMCwgbWF0Y2hlc1swXS5tYXRjaC5pbmRleCkpO1xuXHRcdFx0bGV0IGFmdGVyID0gd2lraXRleHQuc2xpY2UoTWF0aC5tYXgoMCwgbWF0Y2hlc1swXS5tYXRjaC5pbmRleCArIG1hdGNoZXNbMF0ubWF0Y2hbMF0ubGVuZ3RoKSk7XG5cdFx0XHRpZiAobWF0Y2hlcy5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdC8vIFJlbW92ZSBhbGwgb2NjdXJyZW5jZXMgaW4gYWZ0ZXJcblx0XHRcdFx0bWF0Y2hlcy5yZS5sYXN0SW5kZXggPSAwO1xuXHRcdFx0XHRhZnRlciA9IGFmdGVyLnJlcGxhY2UobWF0Y2hlcy5yZSwgJycpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKFxuXHRcdFx0XHR0b0FkZCAmJiAvLyBuYW1lU3BhY2UgPSBtYXRjaGVzWyAwIF0ubWF0Y2hbIDEgXSB8fCBuYW1lU3BhY2U7IENhbm9uaWNhbCBuYW1lc3BhY2Ugc2hvdWxkIGJlIGFsd2F5cyBwcmVmZXJyZWRcblx0XHRcdFx0a2V5ID09PSBudWxsXG5cdFx0XHQpIHtcblx0XHRcdFx0WywgLCBrZXldID0gbWF0Y2hlc1swXS5tYXRjaDtcblx0XHRcdH1cblx0XHRcdC8vIFJlbWVtYmVyIHRoZSBjYXRlZ29yeSBrZXksIGlmIGFueS5cblx0XHRcdC8vIFJlbW92ZSB3aGl0ZXNwYWNlIChwcm9wZXJseSk6IHN0cmlwIHdoaXRlc3BhY2UsIGJ1dCBvbmx5IHVwIHRvIHRoZSBuZXh0IGxpbmUgZmVlZC5cblx0XHRcdC8vIElmIHdlIHRoZW4gaGF2ZSB0d28gbGluZWZlZWRzIGluIGEgcm93LCByZW1vdmUgb25lLiBPdGhlcndpc2UsIGlmIHdlIGhhdmUgdHdvIG5vbi1cblx0XHRcdC8vIHdoaXRlc3BhY2UgY2hhcmFjdGVycywgaW5zZXJ0IGEgYmxhbmsuXG5cdFx0XHRsZXQgaSA9IGJlZm9yZS5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPj0gMCAmJiBiZWZvcmUuY2hhckF0KGkpICE9PSAnXFxuJyAmJiBiZWZvcmUuc2xpY2UoaSwgaSArIDEpLnNlYXJjaCgvXFxzLykgPj0gMCkge1xuXHRcdFx0XHRpLS07XG5cdFx0XHR9XG5cdFx0XHRsZXQgaiA9IDA7XG5cdFx0XHR3aGlsZSAoaiA8IGFmdGVyLmxlbmd0aCAmJiBhZnRlci5jaGFyQXQoaikgIT09ICdcXG4nICYmIGFmdGVyLnNsaWNlKGosIGogKyAxKS5zZWFyY2goL1xccy8pID49IDApIHtcblx0XHRcdFx0aisrO1xuXHRcdFx0fVxuXHRcdFx0aWYgKFxuXHRcdFx0XHRpID49IDAgJiZcblx0XHRcdFx0YmVmb3JlLmNoYXJBdChpKSA9PT0gJ1xcbicgJiZcblx0XHRcdFx0KGFmdGVyLmxlbmd0aCA9PT0gMCB8fCAoaiA8IGFmdGVyLmxlbmd0aCAmJiBhZnRlci5jaGFyQXQoaikgPT09ICdcXG4nKSlcblx0XHRcdCkge1xuXHRcdFx0XHRpLS07XG5cdFx0XHR9XG5cdFx0XHRiZWZvcmUgPSBpID49IDAgPyBiZWZvcmUuc2xpY2UoMCwgTWF0aC5tYXgoMCwgaSArIDEpKSA6ICcnO1xuXHRcdFx0YWZ0ZXIgPSBqIDwgYWZ0ZXIubGVuZ3RoID8gYWZ0ZXIuc2xpY2UoTWF0aC5tYXgoMCwgaikpIDogJyc7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdGJlZm9yZS5sZW5ndGggPiAwICYmXG5cdFx0XHRcdGJlZm9yZS5zbGljZShNYXRoLm1heCgwLCBiZWZvcmUubGVuZ3RoIC0gMSkpLnNlYXJjaCgvXFxTLykgPj0gMCAmJlxuXHRcdFx0XHRhZnRlci5sZW5ndGggPiAwICYmXG5cdFx0XHRcdGFmdGVyLnNsaWNlKDAsIDEpLnNlYXJjaCgvXFxTLykgPj0gMFxuXHRcdFx0KSB7XG5cdFx0XHRcdGJlZm9yZSArPSAnICc7XG5cdFx0XHR9XG5cdFx0XHRjYXRfcG9pbnQgPSBiZWZvcmUubGVuZ3RoO1xuXHRcdFx0aWYgKGNhdF9wb2ludCA9PT0gMCAmJiBhZnRlci5sZW5ndGggPiAwICYmIGFmdGVyLnNsaWNlKDAsIDEpID09PSAnXFxuJykge1xuXHRcdFx0XHRhZnRlciA9IGFmdGVyLnNsaWNlKDEpO1xuXHRcdFx0fVxuXHRcdFx0d2lraXRleHQgPSBiZWZvcmUgKyBhZnRlcjtcblx0XHRcdGlmICgha2V5Q2hhbmdlKSB7XG5cdFx0XHRcdGlmIChIQy50ZW1wbGF0ZV9jYXRlZ29yaWVzW3RvUmVtb3ZlXSkge1xuXHRcdFx0XHRcdHN1bW1hcnkucHVzaChnZXRNZXNzYWdlKCdtZXNzYWdlcy10ZW1wbGF0ZV9yZW1vdmVkJywgdG9SZW1vdmUpKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzdW1tYXJ5LnB1c2goZ2V0TWVzc2FnZSgnbWVzc2FnZXMtY2F0X3JlbW92ZWQnLCB0b1JlbW92ZSkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIEFkZFxuXHRcdGlmICh0b0FkZCAmJiB0b0FkZC5sZW5ndGggPiAwKSB7XG5cdFx0XHRtYXRjaGVzID0gZmluZF9jYXRlZ29yeSh3aWtpdGV4dCwgdG9BZGQpO1xuXHRcdFx0aWYgKG1hdGNoZXMgJiYgbWF0Y2hlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdC8vIEFscmVhZHkgZXhpc3RzXG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0dGV4dDogd2lraXRleHQsXG5cdFx0XHRcdFx0c3VtbWFyeSxcblx0XHRcdFx0XHRlcnJvcjogZ2V0TWVzc2FnZSgnbWVzc2FnZXMtY2F0X2V4aXN0cycsIHRvQWRkKSxcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGxldCBvbkNhdCA9IGZhbHNlO1xuXHRcdFx0aWYgKGNhdF9wb2ludCA8IDApIHtcblx0XHRcdFx0Y29uc3QgcG9pbnQgPSBmaW5kX2luc2VydGlvbnBvaW50KHdpa2l0ZXh0KTtcblx0XHRcdFx0Y2F0X3BvaW50ID0gcG9pbnQuaWR4O1xuXHRcdFx0XHQoe29uQ2F0fSA9IHBvaW50KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG9uQ2F0ID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IG5ld2NhdHN0cmluZyA9IGBbWyR7bmFtZVNwYWNlfToke3RvQWRkfSR7a2V5IHx8ICcnfV1dYDtcblx0XHRcdGlmIChjYXRfcG9pbnQgPj0gMCkge1xuXHRcdFx0XHRjb25zdCBzdWZmaXggPSB3aWtpdGV4dC5zbGljZShNYXRoLm1heCgwLCBjYXRfcG9pbnQpKTtcblx0XHRcdFx0d2lraXRleHQgPVxuXHRcdFx0XHRcdHdpa2l0ZXh0LnNsaWNlKDAsIE1hdGgubWF4KDAsIGNhdF9wb2ludCkpICtcblx0XHRcdFx0XHQoY2F0X3BvaW50ID4gMCA/ICdcXG4nIDogJycpICtcblx0XHRcdFx0XHRuZXdjYXRzdHJpbmcgK1xuXHRcdFx0XHRcdChvbkNhdCA/ICcnIDogJ1xcbicpO1xuXHRcdFx0XHR3aWtpdGV4dCArPSBzdWZmaXgubGVuZ3RoID4gMCAmJiBzdWZmaXguc2xpY2UoMCwgMSkgIT09ICdcXG4nID8gYFxcbiR7c3VmZml4fWAgOiBzdWZmaXg7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAod2lraXRleHQubGVuZ3RoID4gMCAmJiB3aWtpdGV4dC5zbGljZSgtMSwgd2lraXRleHQubGVuZ3RoIC0gMSArIDEpICE9PSAnXFxuJykge1xuXHRcdFx0XHRcdHdpa2l0ZXh0ICs9ICdcXG4nO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHdpa2l0ZXh0ICs9ICh3aWtpdGV4dC5sZW5ndGggPiAwID8gJ1xcbicgOiAnJykgKyBuZXdjYXRzdHJpbmc7XG5cdFx0XHR9XG5cdFx0XHRpZiAoa2V5Q2hhbmdlKSB7XG5cdFx0XHRcdGxldCBrID0ga2V5IHx8ICcnO1xuXHRcdFx0XHRpZiAoay5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0ayA9IGsuc2xpY2UoMSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3VtbWFyeS5wdXNoKGdldE1lc3NhZ2UoJ21lc3NhZ2VzLWNhdF9rZXljaGFuZ2UnLCB0b0FkZCwgaykpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c3VtbWFyeS5wdXNoKGdldE1lc3NhZ2UoJ21lc3NhZ2VzLWNhdF9hZGRlZCcsIHRvQWRkKSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoSEMudW5jYXRfcmVnZXhwICYmICFpc19oaWRkZW4pIHtcblx0XHRcdFx0Y29uc3QgdHh0ID0gd2lraXRleHQucmVwbGFjZShIQy51bmNhdF9yZWdleHAsICcnKTsgLy8gUmVtb3ZlIFwidW5jYXRcIiB0ZW1wbGF0ZXNcblx0XHRcdFx0aWYgKHR4dC5sZW5ndGggIT09IHdpa2l0ZXh0Lmxlbmd0aCkge1xuXHRcdFx0XHRcdHdpa2l0ZXh0ID0gdHh0O1xuXHRcdFx0XHRcdHN1bW1hcnkucHVzaChnZXRNZXNzYWdlKCdtZXNzYWdlcy11bmNhdF9yZW1vdmVkJykpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB7XG5cdFx0XHR0ZXh0OiB3aWtpdGV4dCxcblx0XHRcdHN1bW1hcnksXG5cdFx0XHRlcnJvcjogbnVsbCxcblx0XHR9O1xuXHR9O1xuXHQvLyBUaGUgcmVhbCBIb3RDYXQgVUlcblx0Y29uc3QgZXZ0S2V5cyA9ICh7Y3RybEtleSwgbWV0YUtleSwgc2hpZnRLZXl9KSA9PiB7XG5cdFx0bGV0IGNvZGUgPSAwO1xuXHRcdGlmIChjdHJsS2V5KSB7XG5cdFx0XHQvLyBBbGwgbW9kZXJuIGJyb3dzZXJzXG5cdFx0XHQvLyBDdHJsLWNsaWNrIHNlZW1zIHRvIGJlIG92ZXJsb2FkZWQgaW4gRkYvTWFjIChpdCBvcGVucyBhIHBvcC11cCBtZW51KSwgc28gdHJlYXQgY21kLWNsaWNrXG5cdFx0XHQvLyBhcyBhIGN0cmwtY2xpY2ssIHRvby5cblx0XHRcdGlmIChjdHJsS2V5IHx8IG1ldGFLZXkpIHtcblx0XHRcdFx0Y29kZSB8fD0gMTtcblx0XHRcdH1cblx0XHRcdGlmIChzaGlmdEtleSkge1xuXHRcdFx0XHRjb2RlIHx8PSAyO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gY29kZTtcblx0fTtcblx0Y29uc3QgZXZ0S2lsbCA9IChlKSA9PiB7XG5cdFx0aWYgKGUucHJldmVudERlZmF1bHQpIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGUuY2FuY2VsQnViYmxlID0gdHJ1ZTtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xuXHRsZXQgY2F0TGluZSA9IG51bGw7IC8vIHRydWUgaWYgTWVkaWFXaWtpIHNlcnZlcyB0aGUgbmV3IFVMLUxJIERPTSBmb3IgY2F0ZWdvcmllc1xuXHRsZXQgb25VcGxvYWQgPSBmYWxzZTtcblx0bGV0IGVkaXRvcnMgPSBbXTtcblx0bGV0IGNvbW1pdEJ1dHRvbiA9IG51bGw7XG5cdGxldCBjb21taXRGb3JtID0gbnVsbDtcblx0bGV0IG11bHRpU3BhbiA9IG51bGw7XG5cdGxldCBwYWdlVGV4dCA9IG51bGw7XG5cdGxldCBwYWdlVGltZSA9IG51bGw7XG5cdGxldCBwYWdlV2F0Y2hlZCA9IGZhbHNlO1xuXHRsZXQgd2F0Y2hDcmVhdGUgPSBmYWxzZTtcblx0bGV0IHdhdGNoRWRpdCA9IGZhbHNlO1xuXHRsZXQgbWlub3JFZGl0cyA9IGZhbHNlO1xuXHRsZXQgZWRpdFRva2VuID0gbnVsbDtcblx0bGV0IGlzX3J0bCA9IGZhbHNlO1xuXHRsZXQgc2VydmVyVGltZSA9IG51bGw7XG5cdGxldCBsYXN0UmV2SWQgPSBudWxsO1xuXHRsZXQgcGFnZVRleHRSZXZJZCA9IG51bGw7XG5cdGxldCBjb25mbGljdGluZ1VzZXIgPSBudWxsO1xuXHRsZXQgbmV3RE9NID0gZmFsc2U7XG5cdGNvbnN0IFVOQ0hBTkdFRCA9IDA7XG5cdGNvbnN0IE9QRU4gPSAxOyAvLyBPcGVuLCBidXQgbm8gaW5wdXQgeWV0XG5cdGNvbnN0IENIQU5HRV9QRU5ESU5HID0gMjsgLy8gT3Blbiwgc29tZSBpbnB1dCBtYWRlXG5cdGNvbnN0IENIQU5HRUQgPSAzO1xuXHRjb25zdCBERUxFVEVEID0gNDtcblx0Y29uc3Qgc2V0UGFnZSA9IChkYXRhKSA9PiB7XG5cdFx0bGV0IHN0YXJ0VGltZSA9IG51bGw7XG5cdFx0aWYgKGRhdGEgJiYgZGF0YS5xdWVyeSkge1xuXHRcdFx0aWYgKGRhdGEucXVlcnkucGFnZXMpIHtcblx0XHRcdFx0Y29uc3QgW3BhZ2VdID0gZGF0YS5xdWVyeS5wYWdlcztcblx0XHRcdFx0aWYgKHBhZ2UpIHtcblx0XHRcdFx0XHRpZiAocGFnZS5yZXZpc2lvbnMgJiYgcGFnZS5yZXZpc2lvbnMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdFx0Ly8gUmV2aXNpb25zIGFyZSBzb3J0ZWQgYnkgcmV2aXNpb24gSUQsIGhlbmNlIFswXSBpcyB0aGUgb25lIHdlIGFza2VkIGZvciwgYW5kIHBvc3NpYmx5IHRoZXJlJ3MgYSBbMV0gaWYgd2UncmVcblx0XHRcdFx0XHRcdC8vIG5vdCBvbiB0aGUgbGF0ZXN0IHJldmlzaW9uIChlZGl0IGNvbmZsaWN0cyBhbmQgc3VjaCkuXG5cdFx0XHRcdFx0XHRwYWdlVGV4dCA9IHBhZ2UucmV2aXNpb25zWzBdLnNsb3RzWydtYWluJ10uY29udGVudDtcblx0XHRcdFx0XHRcdGlmIChwYWdlLnJldmlzaW9uc1swXS50aW1lc3RhbXApIHtcblx0XHRcdFx0XHRcdFx0cGFnZVRpbWUgPSBwYWdlLnJldmlzaW9uc1swXS50aW1lc3RhbXAucmVwbGFjZSgvXFxEL2csICcnKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmIChwYWdlLnJldmlzaW9uc1swXS5yZXZpZCkge1xuXHRcdFx0XHRcdFx0XHRwYWdlVGV4dFJldklkID0gcGFnZS5yZXZpc2lvbnNbMF0ucmV2aWQ7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRpZiAocGFnZS5yZXZpc2lvbnMubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRcdFx0XHRjb25mbGljdGluZ1VzZXIgPSBwYWdlLnJldmlzaW9uc1sxXS51c2VyO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAocGFnZS5sYXN0cmV2aWQpIHtcblx0XHRcdFx0XHRcdGxhc3RSZXZJZCA9IHBhZ2UubGFzdHJldmlkO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAocGFnZS5zdGFydHRpbWVzdGFtcCkge1xuXHRcdFx0XHRcdFx0c3RhcnRUaW1lID0gcGFnZS5zdGFydHRpbWVzdGFtcC5yZXBsYWNlKC9cXEQvZywgJycpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRwYWdlV2F0Y2hlZCA9IHR5cGVvZiBwYWdlLndhdGNoZWQgPT09ICdzdHJpbmcnO1xuXHRcdFx0XHRcdGlmIChkYXRhLnF1ZXJ5LnRva2Vucykge1xuXHRcdFx0XHRcdFx0ZWRpdFRva2VuID0gZGF0YS5xdWVyeS50b2tlbnMuY3NyZnRva2VuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAocGFnZS5sYW5nbGlua3MgJiYgKCFkYXRhWydxdWVyeS1jb250aW51ZSddIHx8ICFkYXRhWydxdWVyeS1jb250aW51ZSddLmxhbmdsaW5rcykpIHtcblx0XHRcdFx0XHRcdC8vIFdlIGhhdmUgaW50ZXJsYW5ndWFnZSBsaW5rcywgYW5kIHdlIGdvdCB0aGVtIGFsbC5cblx0XHRcdFx0XHRcdGxldCByZSA9ICcnO1xuXHRcdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwYWdlLmxhbmdsaW5rcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0XHRyZSArPSAoaSA+IDAgPyAnfCcgOiAnJykgKyBwYWdlLmxhbmdsaW5rc1tpXS5sYW5nLnJlcGxhY2UoLyhbJCgpKisuP1xcXFxeXSkvZywgJ1xcXFwkMScpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKHJlLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRcdFx0aW50ZXJsYW5ndWFnZVJFID0gbmV3IFJlZ0V4cChgKChefFxcXFxuXFxcXHI/KShcXFxcW1xcXFxbXFxcXHMqKCR7cmV9KVxcXFxzKjpbXlxcXFxdXStcXFxcXVxcXFxdXFxcXHMqKSkrJGApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ly8gU2l0ZWluZm9cblx0XHRcdGlmIChkYXRhLnF1ZXJ5LmdlbmVyYWwpIHtcblx0XHRcdFx0aWYgKGRhdGEucXVlcnkuZ2VuZXJhbC50aW1lICYmICFzdGFydFRpbWUpIHtcblx0XHRcdFx0XHRzdGFydFRpbWUgPSBkYXRhLnF1ZXJ5LmdlbmVyYWwudGltZS5yZXBsYWNlKC9cXEQvZywgJycpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChIQy5jYXBpdGFsaXplUGFnZU5hbWVzID09PSBudWxsKSB7XG5cdFx0XHRcdFx0Ly8gUmVzb3VyY2VMb2FkZXIncyBKU1BhcnNlciBkb2Vzbid0IGxpa2UgLmNhc2UsIHNvIG92ZXJyaWRlIGVzbGludC5cblx0XHRcdFx0XHRIQy5jYXBpdGFsaXplUGFnZU5hbWVzID0gZGF0YS5xdWVyeS5nZW5lcmFsLmNhc2UgPT09ICdmaXJzdC1sZXR0ZXInO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRzZXJ2ZXJUaW1lID0gc3RhcnRUaW1lO1xuXHRcdFx0Ly8gVXNlcmluZm9cblx0XHRcdGlmIChkYXRhLnF1ZXJ5LnVzZXJpbmZvICYmIGRhdGEucXVlcnkudXNlcmluZm8ub3B0aW9ucykge1xuXHRcdFx0XHR3YXRjaENyZWF0ZSA9ICFIQy5kb250X2FkZF90b193YXRjaGxpc3QgJiYgZGF0YS5xdWVyeS51c2VyaW5mby5vcHRpb25zLndhdGNoY3JlYXRpb25zID09PSAnMSc7XG5cdFx0XHRcdHdhdGNoRWRpdCA9ICFIQy5kb250X2FkZF90b193YXRjaGxpc3QgJiYgZGF0YS5xdWVyeS51c2VyaW5mby5vcHRpb25zLndhdGNoZGVmYXVsdCA9PT0gJzEnO1xuXHRcdFx0XHRtaW5vckVkaXRzID0gZGF0YS5xdWVyeS51c2VyaW5mby5vcHRpb25zLm1pbm9yZGVmYXVsdCA9PT0gMTtcblx0XHRcdFx0Ly8gSWYgdGhlIHVzZXIgaGFzIHRoZSBcIkFsbCBlZGl0cyBhcmUgbWlub3JcIiBwcmVmZXJlbmNlIGVuYWJsZWQsIHdlIHNob3VsZCBob25vciB0aGF0XG5cdFx0XHRcdC8vIGZvciBzaW5nbGUgY2F0ZWdvcnkgY2hhbmdlcywgbm8gbWF0dGVyIHdoYXQgdGhlIHNpdGUgY29uZmlndXJhdGlvbiBpcy5cblx0XHRcdFx0aWYgKG1pbm9yRWRpdHMpIHtcblx0XHRcdFx0XHRIQy5zaW5nbGVfbWlub3IgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRsZXQgc2F2ZUluUHJvZ3Jlc3MgPSBmYWxzZTtcblx0Y29uc3QgaW5pdGlhdGVFZGl0ID0gKGRvRWRpdCwgZmFpbHVyZSkgPT4ge1xuXHRcdGlmIChzYXZlSW5Qcm9ncmVzcykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRzYXZlSW5Qcm9ncmVzcyA9IHRydWU7XG5cdFx0bGV0IG9sZEJ1dHRvblN0YXRlO1xuXHRcdGlmIChjb21taXRCdXR0b24pIHtcblx0XHRcdG9sZEJ1dHRvblN0YXRlID0gY29tbWl0QnV0dG9uLmRpc2FibGVkO1xuXHRcdFx0Y29tbWl0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcblx0XHR9XG5cdFx0Y29uc3QgZmFpbCA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XG5cdFx0XHRzYXZlSW5Qcm9ncmVzcyA9IGZhbHNlO1xuXHRcdFx0aWYgKGNvbW1pdEJ1dHRvbikge1xuXHRcdFx0XHRjb21taXRCdXR0b24uZGlzYWJsZWQgPSBvbGRCdXR0b25TdGF0ZTtcblx0XHRcdH1cblx0XHRcdGZhaWx1cmUuYXBwbHkodGhpcywgYXJncyk7XG5cdFx0fTtcblx0XHQvLyBNdXN0IHVzZSBBamF4IGhlcmUgdG8gZ2V0IHRoZSB1c2VyIG9wdGlvbnMgYW5kIHRoZSBlZGl0IHRva2VuLlxuXHRcdGNvbnN0IHBhcmFtcyA9IHtcblx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0cmF3Y29udGludWU6ICcnLFxuXHRcdFx0dGl0bGVzOiBjb25mLndnUGFnZU5hbWUsXG5cdFx0XHRwcm9wOiBbJ2luZm8nLCAncmV2aXNpb25zJywgJ2xhbmdsaW5rcyddLFxuXHRcdFx0aW5wcm9wOiAnd2F0Y2hlZCcsXG5cdFx0XHRydnByb3A6IFsnY29udGVudCcsICd0aW1lc3RhbXAnLCAnaWRzJywgJ3VzZXInXSxcblx0XHRcdHJ2c2xvdHM6ICdtYWluJyxcblx0XHRcdHJ2bGltaXQ6ICcyJyxcblx0XHRcdHJ2ZGlyOiAnbmV3ZXInLFxuXHRcdFx0cnZzdGFydGlkOiBjb25mLndnQ3VyUmV2aXNpb25JZCxcblx0XHRcdGxsbGltaXQ6ICc1MDAnLFxuXHRcdFx0bWV0YTogWydzaXRlaW5mbycsICd1c2VyaW5mbycsICd0b2tlbnMnXSxcblx0XHRcdHR5cGU6ICdjc3JmJyxcblx0XHRcdHVpcHJvcDogWydvcHRpb25zJ10sXG5cdFx0fTtcblx0XHRhcGkuZ2V0KHBhcmFtcylcblx0XHRcdC5kb25lKChkYXRhKSA9PiB7XG5cdFx0XHRcdHNldFBhZ2UoZGF0YSk7XG5cdFx0XHRcdGRvRWRpdChmYWlsKTtcblx0XHRcdH0pXG5cdFx0XHQuZmFpbCgoe3N0YXR1cywgc3RhdHVzVGV4dH0pID0+IHtcblx0XHRcdFx0ZmFpbChgJHtzdGF0dXN9ICR7c3RhdHVzVGV4dH1gKTtcblx0XHRcdH0pO1xuXHR9O1xuXHRjb25zdCBtdWx0aUNoYW5nZU1zZyA9IChjb3VudCkgPT4ge1xuXHRcdHJldHVybiBnZXRNZXNzYWdlKCdtZXNzYWdlcy1tdWx0aV9jaGFuZ2UnLCBTdHJpbmcoY291bnQpKTtcblx0fTtcblx0Y29uc3QgY3VycmVudFRpbWVzdGFtcCA9ICgpID0+IHtcblx0XHRjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuXHRcdGxldCB0cyA9IFN0cmluZyhub3cuZ2V0VVRDRnVsbFllYXIoKSk7XG5cdFx0Y29uc3QgdHdvID0gKHMpID0+IHtcblx0XHRcdHJldHVybiBzLnNsaWNlKC0yKTtcblx0XHR9O1xuXHRcdHRzICs9XG5cdFx0XHR0d28oYDAke25vdy5nZXRVVENNb250aCgpICsgMX1gKSArXG5cdFx0XHR0d28oYDAke25vdy5nZXRVVENEYXRlKCl9YCkgK1xuXHRcdFx0dHdvKGAwMCR7bm93LmdldFVUQ0hvdXJzKCl9YCkgK1xuXHRcdFx0dHdvKGAwMCR7bm93LmdldFVUQ01pbnV0ZXMoKX1gKSArXG5cdFx0XHR0d28oYDAwJHtub3cuZ2V0VVRDU2Vjb25kcygpfWApO1xuXHRcdHJldHVybiB0cztcblx0fTtcblx0Y29uc3QgcGVyZm9ybUNoYW5nZXMgPSAoZmFpbHVyZSwgc2luZ2xlRWRpdG9yKSA9PiB7XG5cdFx0aWYgKHBhZ2VUZXh0ID09PSBudWxsKSB7XG5cdFx0XHRmYWlsdXJlKGdldE1lc3NhZ2UoJ21lc3NhZ2VzLW11bHRpX2Vycm9yJykpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHQvLyBDcmVhdGUgYSBmb3JtIGFuZCBzdWJtaXQgaXQuIFdlIGRvbid0IHVzZSB0aGUgZWRpdCBBUEkgKGFwaS5waHA/YWN0aW9uPWVkaXQpIGJlY2F1c2Vcblx0XHQvLyAoYSkgc2Vuc2libHkgcmVwb3J0aW5nIGJhY2sgZXJyb3JzIGxpa2UgZWRpdCBjb25mbGljdHMgaXMgYWx3YXlzIGEgaGFzc2xlLCBhbmRcblx0XHQvLyAoYikgd2Ugd2FudCB0byBzaG93IGEgZGlmZiBmb3IgbXVsdGktZWRpdHMgYW55d2F5LCBhbmRcblx0XHQvLyAoYykgd2Ugd2FudCB0byB0cmlnZ2VyIG9uc3VibWl0IGV2ZW50cywgYWxsb3dpbmcgdXNlciBjb2RlIHRvIGludGVyY2VwdCB0aGUgZWRpdC5cblx0XHQvLyBVc2luZyB0aGUgZm9ybSwgd2UgY2FuIGRvIChiKSBhbmQgKGMpLCBhbmQgd2UgZ2V0IChhKSBmb3IgZnJlZS4gQW5kLCBvZiBjb3Vyc2UsIHVzaW5nIHRoZSBmb3JtXG5cdFx0Ly8gYXV0b21hdGljYWxseSByZWxvYWRzIHRoZSBwYWdlIHdpdGggdGhlIHVwZGF0ZWQgY2F0ZWdvcmllcyBvbiBhIHN1Y2Nlc3NmdWwgc3VibWl0LCB3aGljaFxuXHRcdC8vIHdlIHdvdWxkIGhhdmUgdG8gZG8gZXhwbGljaXRseSBpZiB3ZSB1c2VkIHRoZSBlZGl0IEFQSS5cblx0XHRsZXQgYWN0aW9uO1xuXHRcdC8vIE5vcm1hbGx5LCB3ZSBkb24ndCBoYXZlIHRvIGNhcmUgYWJvdXQgZWRpdCBjb25mbGljdHMuIElmIHNvbWUgb3RoZXIgdXNlciBlZGl0ZWQgdGhlIHBhZ2UgaW4gdGhlIG1lYW50aW1lLCB0aGVcblx0XHQvLyBzZXJ2ZXIgd2lsbCB0YWtlIGNhcmUgb2YgaXQgYW5kIG1lcmdlIHRoZSBlZGl0IGF1dG9tYXRpY2FsbHkgb3IgcHJlc2VudCBhbiBlZGl0IGNvbmZsaWN0IHNjcmVlbi4gSG93ZXZlciwgdGhlXG5cdFx0Ly8gc2VydmVyIHN1cHByZXNzZXMgZWRpdCBjb25mbGljdHMgd2l0aCBvbmVzZWxmLiBIZW5jZSwgaWYgd2UgaGF2ZSBhIGNvbmZsaWN0LCBhbmQgdGhlIGNvbmZsaWN0aW5nIHVzZXIgaXMgdGhlXG5cdFx0Ly8gY3VycmVudCB1c2VyLCB0aGVuIHdlIHNldCB0aGUgXCJvbGRpZFwiIHZhbHVlIGFuZCBzd2l0Y2ggdG8gZGlmZiwgd2hpY2ggZ2l2ZXMgdGhlIFwieW91IGFyZSBlZGl0aW5nIGFuIG9sZCB2ZXJzaW9uO1xuXHRcdC8vIGlmIHlvdSBzYXZlLCBhbnkgbW9yZSByZWNlbnQgY2hhbmdlcyB3aWxsIGJlIGxvc3RcIiBzY3JlZW4uXG5cdFx0Y29uc3Qgc2VsZkVkaXRDb25mbGljdCA9XG5cdFx0XHQoKGxhc3RSZXZJZCAhPT0gbnVsbCAmJiBsYXN0UmV2SWQgIT09IGNvbmYud2dDdXJSZXZpc2lvbklkKSB8fFxuXHRcdFx0XHQocGFnZVRleHRSZXZJZCAhPT0gbnVsbCAmJiBwYWdlVGV4dFJldklkICE9PSBjb25mLndnQ3VyUmV2aXNpb25JZCkpICYmXG5cdFx0XHRjb25mbGljdGluZ1VzZXIgJiZcblx0XHRcdGNvbmZsaWN0aW5nVXNlciA9PT0gY29uZi53Z1VzZXJOYW1lO1xuXHRcdGlmIChzaW5nbGVFZGl0b3IgJiYgIXNpbmdsZUVkaXRvci5ub0NvbW1pdCAmJiAhSEMubm9fYXV0b2NvbW1pdCAmJiBlZGl0VG9rZW4gJiYgIXNlbGZFZGl0Q29uZmxpY3QpIHtcblx0XHRcdC8vIElmIHdlIGRvIGhhdmUgYW4gZWRpdCBjb25mbGljdCwgYnV0IG5vdCB3aXRoIG91cnNlbGYsIHRoYXQncyBubyByZWFzb24gbm90IHRvIGF0dGVtcHQgdG8gc2F2ZTogdGhlIHNlcnZlciBzaWRlIG1heSBhY3R1YWxseSBiZSBhYmxlIHRvXG5cdFx0XHQvLyBtZXJnZSB0aGUgY2hhbmdlcy4gV2UganVzdCBuZWVkIHRvIG1ha2Ugc3VyZSB0aGF0IHdlIGRvIHByZXNlbnQgYSBkaWZmIHZpZXcgaWYgaXQncyBhIHNlbGYgZWRpdCBjb25mbGljdC5cblx0XHRcdGNvbW1pdEZvcm0ud3BFZGl0VG9rZW4udmFsdWUgPSBlZGl0VG9rZW47XG5cdFx0XHRhY3Rpb24gPSBjb21taXRGb3JtLndwRGlmZjtcblx0XHRcdGlmIChhY3Rpb24pIHtcblx0XHRcdFx0YWN0aW9uLnZhbHVlID0gJ3dwU2F2ZSc7XG5cdFx0XHRcdGFjdGlvbi5uYW1lID0gYWN0aW9uLnZhbHVlO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRhY3Rpb24gPSBjb21taXRGb3JtLndwU2F2ZTtcblx0XHRcdGlmIChhY3Rpb24pIHtcblx0XHRcdFx0YWN0aW9uLnZhbHVlID0gJ3dwRGlmZic7XG5cdFx0XHRcdGFjdGlvbi5uYW1lID0gYWN0aW9uLnZhbHVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRsZXQgcmVzdWx0ID0ge1xuXHRcdFx0dGV4dDogcGFnZVRleHQsXG5cdFx0fTtcblx0XHRjb25zdCBjaGFuZ2VkID0gW107XG5cdFx0Y29uc3QgYWRkZWQgPSBbXTtcblx0XHRjb25zdCBkZWxldGVkID0gW107XG5cdFx0Y29uc3QgdG9FZGl0ID0gc2luZ2xlRWRpdG9yID8gW3NpbmdsZUVkaXRvcl0gOiBlZGl0b3JzO1xuXHRcdGxldCBlZGl0O1xuXHRcdGxldCBpO1xuXHRcdGxldCBlcnJvciA9IG51bGw7XG5cdFx0bGV0IGNoYW5nZXMgPSAwO1xuXHRcdGZvciAoaSA9IDA7IGkgPCB0b0VkaXQubGVuZ3RoOyBpKyspIHtcblx0XHRcdGVkaXQgPSB0b0VkaXRbaV07XG5cdFx0XHRpZiAoZWRpdC5zdGF0ZSA9PT0gQ0hBTkdFRCkge1xuXHRcdFx0XHRyZXN1bHQgPSBjaGFuZ2VfY2F0ZWdvcnkoXG5cdFx0XHRcdFx0cmVzdWx0LnRleHQsXG5cdFx0XHRcdFx0ZWRpdC5vcmlnaW5hbENhdGVnb3J5LFxuXHRcdFx0XHRcdGVkaXQuY3VycmVudENhdGVnb3J5LFxuXHRcdFx0XHRcdGVkaXQuY3VycmVudEtleSxcblx0XHRcdFx0XHRlZGl0LmN1cnJlbnRIaWRkZW5cblx0XHRcdFx0KTtcblx0XHRcdFx0aWYgKCFyZXN1bHQuZXJyb3IpIHtcblx0XHRcdFx0XHRjaGFuZ2VzKys7XG5cdFx0XHRcdFx0aWYgKCFlZGl0Lm9yaWdpbmFsQ2F0ZWdvcnkgfHwgZWRpdC5vcmlnaW5hbENhdGVnb3J5Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdFx0YWRkZWQucHVzaChlZGl0LmN1cnJlbnRDYXRlZ29yeSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGNoYW5nZWQucHVzaCh7XG5cdFx0XHRcdFx0XHRcdGZyb206IGVkaXQub3JpZ2luYWxDYXRlZ29yeSxcblx0XHRcdFx0XHRcdFx0dG86IGVkaXQuY3VycmVudENhdGVnb3J5LFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2UgaWYgKGVycm9yID09PSBudWxsKSB7XG5cdFx0XHRcdFx0KHtlcnJvcn0gPSByZXN1bHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGVkaXQuc3RhdGUgPT09IERFTEVURUQgJiYgZWRpdC5vcmlnaW5hbENhdGVnb3J5ICYmIGVkaXQub3JpZ2luYWxDYXRlZ29yeS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHJlc3VsdCA9IGNoYW5nZV9jYXRlZ29yeShyZXN1bHQudGV4dCwgZWRpdC5vcmlnaW5hbENhdGVnb3J5LCBudWxsLCBudWxsLCBmYWxzZSk7XG5cdFx0XHRcdGlmICghcmVzdWx0LmVycm9yKSB7XG5cdFx0XHRcdFx0Y2hhbmdlcysrO1xuXHRcdFx0XHRcdGRlbGV0ZWQucHVzaChlZGl0Lm9yaWdpbmFsQ2F0ZWdvcnkpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGVycm9yID09PSBudWxsKSB7XG5cdFx0XHRcdFx0KHtlcnJvcn0gPSByZXN1bHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChlcnJvciAhPT0gbnVsbCkge1xuXHRcdFx0Ly8gRG8gbm90IGNvbW1pdCBpZiB0aGVyZSB3ZXJlIGVycm9yc1xuXHRcdFx0YWN0aW9uID0gY29tbWl0Rm9ybS53cFNhdmU7XG5cdFx0XHRpZiAoYWN0aW9uKSB7XG5cdFx0XHRcdGFjdGlvbi52YWx1ZSA9ICd3cERpZmYnO1xuXHRcdFx0XHRhY3Rpb24ubmFtZSA9IGFjdGlvbi52YWx1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gRmlsbCBpbiB0aGUgZm9ybSBhbmQgc3VibWl0IGl0XG5cdFx0Y29tbWl0Rm9ybS53cE1pbm9yZWRpdC5jaGVja2VkID0gbWlub3JFZGl0cztcblx0XHRjb21taXRGb3JtLndwV2F0Y2h0aGlzLmNoZWNrZWQgPSAoIWNvbmYud2dBcnRpY2xlSWQgJiYgd2F0Y2hDcmVhdGUpIHx8IHdhdGNoRWRpdCB8fCBwYWdlV2F0Y2hlZDtcblx0XHRpZiAoY29uZi53Z0FydGljbGVJZCB8fCAhIXNpbmdsZUVkaXRvcikge1xuXHRcdFx0Ly8gUHJlcGFyZSBjaGFuZ2UtdGFnIHNhdmVcblx0XHRcdGlmIChhY3Rpb24gJiYgYWN0aW9uLnZhbHVlID09PSAnd3BTYXZlJykge1xuXHRcdFx0XHRpZiAoSEMuY2hhbmdlVGFnKSB7XG5cdFx0XHRcdFx0Y29tbWl0Rm9ybS53cENoYW5nZVRhZ3MudmFsdWUgPSBIQy5jaGFuZ2VUYWc7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbW1pdEZvcm0ud3BBdXRvU3VtbWFyeS52YWx1ZSA9IEhDLmNoYW5nZVRhZztcblx0XHRcdH1cblx0XHRcdGlmIChjaGFuZ2VzID09PSAxKSB7XG5cdFx0XHRcdGlmIChyZXN1bHQuc3VtbWFyeSAmJiByZXN1bHQuc3VtbWFyeS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0Y29tbWl0Rm9ybS53cFN1bW1hcnkudmFsdWUgPVxuXHRcdFx0XHRcdFx0KEhDLmNoYW5nZVRhZyA/ICcnIDogZ2V0TWVzc2FnZSgnbWVzc2FnZXMtcHJlZml4JykpICtcblx0XHRcdFx0XHRcdHJlc3VsdC5zdW1tYXJ5LmpvaW4oZ2V0TWVzc2FnZSgnbWVzc2FnZXMtc2VwYXJhdG9yJykpICtcblx0XHRcdFx0XHRcdChIQy5jaGFuZ2VUYWcgPyAnJyA6IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXVzaW5nJykpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbW1pdEZvcm0ud3BNaW5vcmVkaXQuY2hlY2tlZCA9IEhDLnNpbmdsZV9taW5vciB8fCBtaW5vckVkaXRzO1xuXHRcdFx0fSBlbHNlIGlmIChjaGFuZ2VzKSB7XG5cdFx0XHRcdGxldCBzdW1tYXJ5ID0gW107XG5cdFx0XHRcdGNvbnN0IHNob3J0U3VtbWFyeSA9IFtdO1xuXHRcdFx0XHQvLyBEZWxldGVkXG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBkZWxldGVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0c3VtbWFyeS5wdXNoKGDiiJIke2dldE1lc3NhZ2UoJ21lc3NhZ2VzLXNob3J0X2NhdGNoYW5nZScsIGRlbGV0ZWRbaV0pfWApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkZWxldGVkLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHRcdHNob3J0U3VtbWFyeS5wdXNoKGDiiJIke2dldE1lc3NhZ2UoJ21lc3NhZ2VzLXNob3J0X2NhdGNoYW5nZScsIGRlbGV0ZWRbMF0pfWApO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGRlbGV0ZWQubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdHNob3J0U3VtbWFyeS5wdXNoKGDiiJIgJHttdWx0aUNoYW5nZU1zZyhkZWxldGVkLmxlbmd0aCl9YCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gQWRkZWRcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGFkZGVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0c3VtbWFyeS5wdXNoKGArJHtnZXRNZXNzYWdlKCdtZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnLCBhZGRlZFtpXSl9YCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGFkZGVkLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHRcdHNob3J0U3VtbWFyeS5wdXNoKGArJHtnZXRNZXNzYWdlKCdtZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnLCBhZGRlZFswXSl9YCk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoYWRkZWQubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdHNob3J0U3VtbWFyeS5wdXNoKGArICR7bXVsdGlDaGFuZ2VNc2coYWRkZWQubGVuZ3RoKX1gKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBDaGFuZ2VkXG5cdFx0XHRcdGNvbnN0IGFycm93ID0gaXNfcnRsID8gJ1xcdTIxOTAnIDogJ1xcdTIxOTInOyAvLyBsZWZ0IGFuZCByaWdodCBhcnJvd3MuIERvbid0IHVzZSDihpAgYW5kIOKGkiBpbiB0aGUgY29kZS5cblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGNoYW5nZWQubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoY2hhbmdlZFtpXS5mcm9tID09PSBjaGFuZ2VkW2ldLnRvKSB7XG5cdFx0XHRcdFx0XHRzdW1tYXJ5LnB1c2goYMKxJHtnZXRNZXNzYWdlKCdtZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnLCBjaGFuZ2VkW2ldLmZyb20pfWApO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRzdW1tYXJ5LnB1c2goXG5cdFx0XHRcdFx0XHRcdGDCsSR7Z2V0TWVzc2FnZSgnbWVzc2FnZXMtc2hvcnRfY2F0Y2hhbmdlJywgY2hhbmdlZFtpXS5mcm9tKX0ke2Fycm93fSR7Z2V0TWVzc2FnZShcblx0XHRcdFx0XHRcdFx0XHQnbWVzc2FnZXMtc2hvcnRfY2F0Y2hhbmdlJyxcblx0XHRcdFx0XHRcdFx0XHRjaGFuZ2VkW2ldLnRvXG5cdFx0XHRcdFx0XHRcdCl9YFxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGNoYW5nZWQubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRcdFx0aWYgKGNoYW5nZWRbMF0uZnJvbSA9PT0gY2hhbmdlZFswXS50bykge1xuXHRcdFx0XHRcdFx0c2hvcnRTdW1tYXJ5LnB1c2goYMKxJHtnZXRNZXNzYWdlKCdtZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnLCBjaGFuZ2VkWzBdLmZyb20pfWApO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRzaG9ydFN1bW1hcnkucHVzaChcblx0XHRcdFx0XHRcdFx0YMKxJHtnZXRNZXNzYWdlKCdtZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnLCBjaGFuZ2VkWzBdLmZyb20pfSR7YXJyb3d9JHtnZXRNZXNzYWdlKFxuXHRcdFx0XHRcdFx0XHRcdCdtZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnLFxuXHRcdFx0XHRcdFx0XHRcdGNoYW5nZWRbMF0udG9cblx0XHRcdFx0XHRcdFx0KX1gXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIGlmIChjaGFuZ2VkLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRzaG9ydFN1bW1hcnkucHVzaChgwrEgJHttdWx0aUNoYW5nZU1zZyhjaGFuZ2VkLmxlbmd0aCl9YCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHN1bW1hcnkubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdHN1bW1hcnkgPSBzdW1tYXJ5LmpvaW4oZ2V0TWVzc2FnZSgnbWVzc2FnZXMtc2VwYXJhdG9yJykpO1xuXHRcdFx0XHRcdGlmIChcblx0XHRcdFx0XHRcdHN1bW1hcnkubGVuZ3RoID5cblx0XHRcdFx0XHRcdDIwMCAtXG5cdFx0XHRcdFx0XHRcdChIQy5jaGFuZ2VUYWcgPyAnJyA6IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXByZWZpeCcpKS5sZW5ndGggLVxuXHRcdFx0XHRcdFx0XHQoSEMuY2hhbmdlVGFnID8gJycgOiBnZXRNZXNzYWdlKCdtZXNzYWdlcy11c2luZycpKS5sZW5ndGhcblx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdHN1bW1hcnkgPSBzaG9ydFN1bW1hcnkuam9pbihnZXRNZXNzYWdlKCdtZXNzYWdlcy1zZXBhcmF0b3InKSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvbW1pdEZvcm0ud3BTdW1tYXJ5LnZhbHVlID1cblx0XHRcdFx0XHRcdChIQy5jaGFuZ2VUYWcgPyAnJyA6IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXByZWZpeCcpKSArXG5cdFx0XHRcdFx0XHRzdW1tYXJ5ICtcblx0XHRcdFx0XHRcdChIQy5jaGFuZ2VUYWcgPyAnJyA6IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXVzaW5nJykpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNvbW1pdEZvcm0ud3BUZXh0Ym94MS52YWx1ZSA9IHJlc3VsdC50ZXh0O1xuXHRcdGNvbW1pdEZvcm0ud3BTdGFydHRpbWUudmFsdWUgPSBzZXJ2ZXJUaW1lIHx8IGN1cnJlbnRUaW1lc3RhbXAoKTtcblx0XHRjb21taXRGb3JtLndwRWRpdHRpbWUudmFsdWUgPSBwYWdlVGltZSB8fCBjb21taXRGb3JtLndwU3RhcnR0aW1lLnZhbHVlO1xuXHRcdGlmIChzZWxmRWRpdENvbmZsaWN0KSB7XG5cdFx0XHRjb21taXRGb3JtLm9sZGlkLnZhbHVlID0gU3RyaW5nKHBhZ2VUZXh0UmV2SWQgfHwgY29uZi53Z0N1clJldmlzaW9uSWQpO1xuXHRcdH1cblx0XHQvLyBTdWJtaXQgdGhlIGZvcm0gaW4gYSB3YXkgdGhhdCB0cmlnZ2VycyBvbnN1Ym1pdCBldmVudHM6IGNvbW1pdEZvcm0uc3VibWl0KCkgZG9lc24ndC5cblx0XHRjb21taXRGb3JtLmhjQ29tbWl0LmNsaWNrKCk7XG5cdH07XG5cdGNvbnN0IHJlc29sdmVPbmUgPSAocGFnZSwgdG9SZXNvbHZlKSA9PiB7XG5cdFx0Y29uc3QgY2F0cyA9IHBhZ2UuY2F0ZWdvcmllcztcblx0XHRjb25zdCB7bGlua3N9ID0gcGFnZTtcblx0XHRsZXQgaXNfZGFiID0gZmFsc2U7IC8vIEhhcmQgcmVkaXJlY3Q/XG5cdFx0bGV0IGlzX3JlZGlyID0gdHlwZW9mIHBhZ2UucmVkaXJlY3QgPT09ICdzdHJpbmcnO1xuXHRcdGxldCBpO1xuXHRcdGNvbnN0IGlzX2hpZGRlbiA9IHBhZ2UuY2F0ZWdvcnlpbmZvICYmIHR5cGVvZiBwYWdlLmNhdGVnb3J5aW5mby5oaWRkZW4gPT09ICdzdHJpbmcnO1xuXHRcdGNvbnN0IGlzX21pc3NpbmcgPSB0eXBlb2YgcGFnZS5taXNzaW5nID09PSAnc3RyaW5nJztcblx0XHRmb3IgKGkgPSAwOyBpIDwgdG9SZXNvbHZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoaSAmJiB0b1Jlc29sdmVbaV0uZGFiSW5wdXRDbGVhbmVkICE9PSBwYWdlLnRpdGxlLnNsaWNlKE1hdGgubWF4KDAsIHBhZ2UudGl0bGUuaW5kZXhPZignOicpICsgMSkpKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0Ly8gTm90ZTogdGhlIHNlcnZlciByZXR1cm5zIGluIHBhZ2UgYW4gTkZDIG5vcm1hbGl6ZWQgVW5pY29kZSB0aXRsZS4gSWYgb3VyIGlucHV0IHdhcyBub3QgTkZDIG5vcm1hbGl6ZWQsIHdlIG1heSBub3QgZmluZFxuXHRcdFx0Ly8gYW55IGVudHJ5IGhlcmUuIElmIHdlIGhhdmUgb25seSBvbmUgZWRpdG9yIHRvIHJlc29sdmUgKHRoZSBtb3N0IGNvbW1vbiBjYXNlLCBJIHByZXN1bWUpLCB3ZSBtYXkgc2ltcGx5IHNraXAgdGhlIGNoZWNrLlxuXHRcdFx0dG9SZXNvbHZlW2ldLmN1cnJlbnRIaWRkZW4gPSBpc19oaWRkZW47XG5cdFx0XHR0b1Jlc29sdmVbaV0uaW5wdXRFeGlzdHMgPSAhaXNfbWlzc2luZztcblx0XHRcdHRvUmVzb2x2ZVtpXS5pY29uLnNyYyA9IGlzX21pc3NpbmcgPyBIQy5leGlzdHNObyA6IEhDLmV4aXN0c1llcztcblx0XHR9XG5cdFx0aWYgKGlzX21pc3NpbmcpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKCFpc19yZWRpciAmJiBjYXRzICYmIChnZXRNZXNzYWdlKCdkaXNhbWJpZ19jYXRlZ29yeScpIHx8IGdldE1lc3NhZ2UoJ3JlZGlyX2NhdGVnb3J5JykpKSB7XG5cdFx0XHRmb3IgKGNvbnN0IGNhdF8gb2YgY2F0cykge1xuXHRcdFx0XHRsZXQgY2F0ID0gY2F0Xy50aXRsZTtcblx0XHRcdFx0Ly8gU3RyaXAgbmFtZXNwYWNlIHByZWZpeFxuXHRcdFx0XHRpZiAoY2F0KSB7XG5cdFx0XHRcdFx0Y2F0ID0gY2F0LnNsaWNlKE1hdGgubWF4KDAsIGNhdC5pbmRleE9mKCc6JykgKyAxKSkucmVwbGFjZSgvXy9nLCAnICcpO1xuXHRcdFx0XHRcdGlmIChjYXQgPT09IGdldE1lc3NhZ2UoJ2Rpc2FtYmlnX2NhdGVnb3J5JykpIHtcblx0XHRcdFx0XHRcdGlzX2RhYiA9IHRydWU7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9IGVsc2UgaWYgKGNhdCA9PT0gZ2V0TWVzc2FnZSgncmVkaXJfY2F0ZWdvcnknKSkge1xuXHRcdFx0XHRcdFx0aXNfcmVkaXIgPSB0cnVlO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICghaXNfcmVkaXIgJiYgIWlzX2RhYikge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoIWxpbmtzIHx8IGxpbmtzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCB0aXRsZXMgPSBbXTtcblx0XHRmb3IgKGkgPSAwOyBpIDwgbGlua3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChcblx0XHRcdFx0Ly8gQ2F0ZWdvcnkgbmFtZXNwYWNlIC0tIGFsd2F5cyB0cnVlIHNpbmNlIHdlIGFzayBvbmx5IGZvciB0aGUgY2F0ZWdvcnkgbGlua3Ncblx0XHRcdFx0bGlua3NbaV0ubnMgPT09IDE0ICYmXG5cdFx0XHRcdC8vIE5hbWUgbm90IGVtcHR5XG5cdFx0XHRcdGxpbmtzW2ldLnRpdGxlICYmXG5cdFx0XHRcdGxpbmtzW2ldLnRpdGxlLmxlbmd0aCA+IDBcblx0XHRcdCkge1xuXHRcdFx0XHQvLyBJbnRlcm5hbCBsaW5rIHRvIGV4aXN0aW5nIHRoaW5neS4gRXh0cmFjdCB0aGUgcGFnZSBuYW1lIGFuZCByZW1vdmUgdGhlIG5hbWVzcGFjZS5cblx0XHRcdFx0bGV0IG1hdGNoID0gbGlua3NbaV0udGl0bGU7XG5cdFx0XHRcdG1hdGNoID0gbWF0Y2guc2xpY2UoTWF0aC5tYXgoMCwgbWF0Y2guaW5kZXhPZignOicpICsgMSkpO1xuXHRcdFx0XHQvLyBFeGNsdWRlIGJsYWNrbGlzdGVkIGNhdGVnb3JpZXMuXG5cdFx0XHRcdGlmICghSEMuYmxhY2tsaXN0IHx8ICFIQy5ibGFja2xpc3QudGVzdChtYXRjaCkpIHtcblx0XHRcdFx0XHR0aXRsZXMucHVzaChtYXRjaCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKHRpdGxlcy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Zm9yIChpID0gMDsgaSA8IHRvUmVzb2x2ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKGkgJiYgdG9SZXNvbHZlW2ldLmRhYklucHV0Q2xlYW5lZCAhPT0gcGFnZS50aXRsZS5zbGljZShNYXRoLm1heCgwLCBwYWdlLnRpdGxlLmluZGV4T2YoJzonKSArIDEpKSkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdHRvUmVzb2x2ZVtpXS5pbnB1dEV4aXN0cyA9IHRydWU7IC8vIE1pZ2h0IGFjdHVhbGx5IGJlIHdyb25nIGlmIGl0J3MgYSByZWRpcmVjdCBwb2ludGluZyB0byBhIG5vbi1leGlzdGluZyBjYXRlZ29yeVxuXHRcdFx0dG9SZXNvbHZlW2ldLmljb24uc3JjID0gSEMuZXhpc3RzWWVzO1xuXHRcdFx0aWYgKHRpdGxlcy5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdHRvUmVzb2x2ZVtpXS5kYWIgPSB0aXRsZXM7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0b1Jlc29sdmVbaV0udGV4dC52YWx1ZSA9XG5cdFx0XHRcdFx0dGl0bGVzWzBdICsgKHRvUmVzb2x2ZVtpXS5jdXJyZW50S2V5ID09PSBudWxsID8gJycgOiBgfCR7dG9SZXNvbHZlW2ldLmN1cnJlbnRLZXl9YCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRjb25zdCByZXNvbHZlUmVkaXJlY3RzID0gKHRvUmVzb2x2ZSwgcGFyYW1zKSA9PiB7XG5cdFx0aWYgKCFwYXJhbXMgfHwgIXBhcmFtcy5xdWVyeSB8fCAhcGFyYW1zLnF1ZXJ5LnBhZ2VzKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGZvciAoY29uc3QgcCBpbiBwYXJhbXMucXVlcnkucGFnZXMpIHtcblx0XHRcdGlmICghT2JqZWN0Lmhhc093bihwYXJhbXMucXVlcnkucGFnZXMsIHApKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0cmVzb2x2ZU9uZShwYXJhbXMucXVlcnkucGFnZXNbcF0sIHRvUmVzb2x2ZSk7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCByZXNvbHZlTXVsdGkgPSAodG9SZXNvbHZlLCBjYWxsYmFjaykgPT4ge1xuXHRcdGxldCBpO1xuXHRcdGZvciAoaSA9IDA7IGkgPCB0b1Jlc29sdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHRvUmVzb2x2ZVtpXS5kYWIgPSBudWxsO1xuXHRcdFx0dG9SZXNvbHZlW2ldLmRhYklucHV0ID0gdG9SZXNvbHZlW2ldLmxhc3RJbnB1dDtcblx0XHR9XG5cdFx0aWYgKG5vU3VnZ2VzdGlvbnMpIHtcblx0XHRcdGNhbGxiYWNrKHRvUmVzb2x2ZSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IHBhcmFtcyA9IHtcblx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0cHJvcDogJ2luZm98bGlua3N8Y2F0ZWdvcmllc3xjYXRlZ29yeWluZm8nLFxuXHRcdFx0cGxuYW1lc3BhY2U6ICcxNCcsXG5cdFx0XHRwbGxpbWl0OiB0b1Jlc29sdmUubGVuZ3RoICogMTAsXG5cdFx0XHRjbGxpbWl0OiB0b1Jlc29sdmUubGVuZ3RoICogMTAsXG5cdFx0fTtcblx0XHRjb25zdCB0aXRsZXMgPSBbXTtcblx0XHRmb3IgKGkgPSAwOyBpIDwgdG9SZXNvbHZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQgdiA9IHRvUmVzb2x2ZVtpXS5kYWJJbnB1dDtcblx0XHRcdHYgPSByZXBsYWNlU2hvcnRjdXRzKHYsIEhDLnNob3J0Y3V0cyk7XG5cdFx0XHR0b1Jlc29sdmVbaV0uZGFiSW5wdXRDbGVhbmVkID0gdjtcblx0XHRcdHRpdGxlcy5wdXNoKGBDYXRlZ29yeToke3Z9YCk7XG5cdFx0fVxuXHRcdHBhcmFtcy50aXRsZXMgPSB0aXRsZXMuam9pbignfCcpO1xuXHRcdGFwaS5nZXQocGFyYW1zKVxuXHRcdFx0LmRvbmUoKGpzb24pID0+IHtcblx0XHRcdFx0cmVzb2x2ZVJlZGlyZWN0cyh0b1Jlc29sdmUsIGpzb24pO1xuXHRcdFx0XHRjYWxsYmFjayh0b1Jlc29sdmUpO1xuXHRcdFx0fSlcblx0XHRcdC5mYWlsKChyZXEpID0+IHtcblx0XHRcdFx0aWYgKCFyZXEpIHtcblx0XHRcdFx0XHRub1N1Z2dlc3Rpb25zID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjYWxsYmFjayh0b1Jlc29sdmUpO1xuXHRcdFx0fSk7XG5cdH07XG5cdGNvbnN0IG1ha2VBY3RpdmUgPSAod2hpY2gpID0+IHtcblx0XHRpZiAod2hpY2guaXNfYWN0aXZlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGZvciAoY29uc3QgZWRpdG9yIG9mIGVkaXRvcnMpIHtcblx0XHRcdGlmIChlZGl0b3IgIT09IHdoaWNoKSB7XG5cdFx0XHRcdGVkaXRvci5pbmFjdGl2YXRlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHdoaWNoLmlzX2FjdGl2ZSA9IHRydWU7XG5cdFx0aWYgKHdoaWNoLmRhYikge1xuXHRcdFx0c2hvd0RhYih3aGljaCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIENoZWNrIGZvciBwcm9ncmFtbWF0aWMgdmFsdWUgY2hhbmdlcy5cblx0XHRcdGNvbnN0IGV4cGVjdGVkSW5wdXQgPSB3aGljaC5sYXN0UmVhbElucHV0IHx8IHdoaWNoLmxhc3RJbnB1dCB8fCAnJztcblx0XHRcdGNvbnN0IGFjdHVhbFZhbHVlID0gd2hpY2gudGV4dC52YWx1ZSB8fCAnJztcblx0XHRcdGlmIChcblx0XHRcdFx0KGV4cGVjdGVkSW5wdXQubGVuZ3RoID09PSAwICYmIGFjdHVhbFZhbHVlLmxlbmd0aCA+IDApIHx8XG5cdFx0XHRcdChleHBlY3RlZElucHV0Lmxlbmd0aCA+IDAgJiYgYWN0dWFsVmFsdWUuaW5kZXhPZihleHBlY3RlZElucHV0KSlcblx0XHRcdCkge1xuXHRcdFx0XHQvLyBTb21laG93IHRoZSBmaWVsZCdzIHZhbHVlIGFwcGVhcnMgdG8gaGF2ZSBjaGFuZ2VkLCBhbmQgd2hpY2gubGFzdFNlbGVjdGlvbiB0aGVyZWZvcmUgaXMgbm8gbG9uZ2VyIHZhbGlkLiBUcnkgdG8gc2V0IHRoZVxuXHRcdFx0XHQvLyBjdXJzb3IgYXQgdGhlIGVuZCBvZiB0aGUgY2F0ZWdvcnksIGFuZCBkbyBub3QgZGlzcGxheSB0aGUgb2xkIHN1Z2dlc3Rpb24gbGlzdC5cblx0XHRcdFx0d2hpY2guc2hvd3NMaXN0ID0gZmFsc2U7XG5cdFx0XHRcdGNvbnN0IHYgPSBhY3R1YWxWYWx1ZS5zcGxpdCgnfCcpO1xuXHRcdFx0XHRbd2hpY2gubGFzdElucHV0XSA9IHY7XG5cdFx0XHRcdHdoaWNoLmxhc3RSZWFsSW5wdXQgPSB3aGljaC5sYXN0SW5wdXQ7XG5cdFx0XHRcdGlmICh2Lmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0XHRbLCB3aGljaC5jdXJyZW50S2V5XSA9IHY7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHdoaWNoLmxhc3RTZWxlY3Rpb24pIHtcblx0XHRcdFx0XHR3aGljaC5sYXN0U2VsZWN0aW9uID0ge1xuXHRcdFx0XHRcdFx0c3RhcnQ6IHZbMF0ubGVuZ3RoLFxuXHRcdFx0XHRcdFx0ZW5kOiB2WzBdLmxlbmd0aCxcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAod2hpY2guc2hvd3NMaXN0KSB7XG5cdFx0XHRcdHdoaWNoLmRpc3BsYXlMaXN0KCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAod2hpY2gubGFzdFNlbGVjdGlvbikge1xuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHR3aGljaC5zZXRTZWxlY3Rpb24od2hpY2gubGFzdFNlbGVjdGlvbi5zdGFydCwgd2hpY2gubGFzdFNlbGVjdGlvbi5lbmQpO1xuXHRcdFx0XHR9LCAwKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdGNvbnN0IHNob3dEYWIgPSAod2hpY2gpID0+IHtcblx0XHRpZiAod2hpY2guaXNfYWN0aXZlKSB7XG5cdFx0XHR3aGljaC5zaG93U3VnZ2VzdGlvbnMod2hpY2guZGFiLCBmYWxzZSwgbnVsbCwgbnVsbCk7IC8vIGRvIGF1dG9jb21wbGV0aW9uLCBubyBrZXksIG5vIGVuZ2luZSBzZWxlY3RvclxuXHRcdFx0d2hpY2guZGFiID0gbnVsbDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bWFrZUFjdGl2ZSh3aGljaCk7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBtdWx0aVN1Ym1pdCA9ICgpID0+IHtcblx0XHRjb25zdCB0b1Jlc29sdmUgPSBbXTtcblx0XHRmb3IgKGNvbnN0IGVkaXRvciBvZiBlZGl0b3JzKSB7XG5cdFx0XHRpZiAoZWRpdG9yLnN0YXRlID09PSBDSEFOR0VfUEVORElORyB8fCBlZGl0b3Iuc3RhdGUgPT09IE9QRU4pIHtcblx0XHRcdFx0dG9SZXNvbHZlLnB1c2goZWRpdG9yKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKHRvUmVzb2x2ZS5sZW5ndGggPT09IDApIHtcblx0XHRcdGluaXRpYXRlRWRpdChcblx0XHRcdFx0KGZhaWx1cmUpID0+IHtcblx0XHRcdFx0XHRwZXJmb3JtQ2hhbmdlcyhmYWlsdXJlKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0KG1zZykgPT4ge1xuXHRcdFx0XHRcdG13Lm5vdGlmeShtc2csIHt0YWc6ICdob3RDYXQnfSk7XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHJlc29sdmVNdWx0aSh0b1Jlc29sdmUsIChyZXNvbHZlZCkgPT4ge1xuXHRcdFx0bGV0IGZpcnN0RGFiID0gbnVsbDtcblx0XHRcdGxldCBkb250Q2hhbmdlID0gZmFsc2U7XG5cdFx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgcmVzb2x2ZWQpIHtcblx0XHRcdFx0aWYgKGVsZW1lbnQubGFzdElucHV0ID09PSBlbGVtZW50LmRhYklucHV0KSB7XG5cdFx0XHRcdFx0aWYgKGVsZW1lbnQuZGFiKSB7XG5cdFx0XHRcdFx0XHRpZiAoIWZpcnN0RGFiKSB7XG5cdFx0XHRcdFx0XHRcdGZpcnN0RGFiID0gZWxlbWVudDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2UgaWYgKGVsZW1lbnQuYWNjZXB0Q2hlY2sodHJ1ZSkpIHtcblx0XHRcdFx0XHRcdGVsZW1lbnQuY29tbWl0KCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIFdlIGRpZG4ndCBkaXNhYmxlIGFsbCB0aGUgb3BlbiBlZGl0b3JzLCBidXQgd2UgZGlkIGFzeW5jaHJvbm91cyBjYWxscy4gSXQgaXNcblx0XHRcdFx0XHQvLyB0aGVvcmV0aWNhbGx5IHBvc3NpYmxlIHRoYXQgdGhlIHVzZXIgY2hhbmdlZCBzb21ldGhpbmcuLi5cblx0XHRcdFx0XHRkb250Q2hhbmdlID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGZpcnN0RGFiKSB7XG5cdFx0XHRcdHNob3dEYWIoZmlyc3REYWIpO1xuXHRcdFx0fSBlbHNlIGlmICghZG9udENoYW5nZSkge1xuXHRcdFx0XHRpbml0aWF0ZUVkaXQoXG5cdFx0XHRcdFx0KGZhaWx1cmUpID0+IHtcblx0XHRcdFx0XHRcdHBlcmZvcm1DaGFuZ2VzKGZhaWx1cmUpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0KG1zZykgPT4ge1xuXHRcdFx0XHRcdFx0bXcubm90aWZ5KG1zZywge3RhZzogJ2hvdENhdCd9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH07XG5cdGNvbnN0IHNldE11bHRpSW5wdXQgPSAoKSA9PiB7XG5cdFx0aWYgKGNvbW1pdEJ1dHRvbiB8fCBvblVwbG9hZCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb21taXRCdXR0b24gPSBtYWtlKCdpbnB1dCcpO1xuXHRcdGNvbW1pdEJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG5cdFx0Y29tbWl0QnV0dG9uLnZhbHVlID0gZ2V0TWVzc2FnZSgnbWVzc2FnZXMtY29tbWl0Jyk7XG5cdFx0Y29tbWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbXVsdGlTdWJtaXQpO1xuXHRcdGlmIChtdWx0aVNwYW4pIHtcblx0XHRcdG11bHRpU3Bhbi5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChjb21taXRCdXR0b24sIG11bHRpU3Bhbik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNhdExpbmUuYXBwZW5kKGNvbW1pdEJ1dHRvbik7XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBjaGVja011bHRpSW5wdXQgPSAoKSA9PiB7XG5cdFx0aWYgKCFjb21taXRCdXR0b24pIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0bGV0IGhhc0NoYW5nZXMgPSBmYWxzZTtcblx0XHRmb3IgKGNvbnN0IGVkaXRvciBvZiBlZGl0b3JzKSB7XG5cdFx0XHRpZiAoZWRpdG9yLnN0YXRlICE9PSBVTkNIQU5HRUQpIHtcblx0XHRcdFx0aGFzQ2hhbmdlcyA9IHRydWU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjb21taXRCdXR0b24uZGlzYWJsZWQgPSAhaGFzQ2hhbmdlcztcblx0fTtcblx0Y29uc3Qgc3VnZ2VzdGlvbkVuZ2luZXMgPSB7XG5cdFx0b3BlbnNlYXJjaDoge1xuXHRcdFx0dXJpOiBgJHttdy5jb25maWcuZ2V0KFxuXHRcdFx0XHQnd2dTY3JpcHRQYXRoJ1xuXHRcdFx0KX0vYXBpLnBocD9mb3JtYXQ9anNvbiZhY3Rpb249b3BlbnNlYXJjaCZuYW1lc3BhY2U9MTQmbGltaXQ9MzAmc2VhcmNoPUNhdGVnb3J5OiQxYCxcblx0XHRcdC8vICQxID0gc2VhcmNoIHRlcm1cblx0XHRcdC8vIEZ1bmN0aW9uIHRvIGNvbnZlcnQgcmVzdWx0IG9mIHVyaSBpbnRvIGFuIGFycmF5IG9mIGNhdGVnb3J5IG5hbWVzXG5cdFx0XHRoYW5kbGVyOiAocXVlcnlSZXN1bHQsIHF1ZXJ5S2V5KSA9PiB7XG5cdFx0XHRcdGlmIChxdWVyeVJlc3VsdCAmJiBxdWVyeVJlc3VsdC5sZW5ndGggPj0gMikge1xuXHRcdFx0XHRcdGNvbnN0IGtleSA9IHF1ZXJ5UmVzdWx0WzBdLnNsaWNlKE1hdGgubWF4KDAsIHF1ZXJ5UmVzdWx0WzBdLmluZGV4T2YoJzonKSArIDEpKTtcblx0XHRcdFx0XHRjb25zdCBbLCB0aXRsZXNdID0gcXVlcnlSZXN1bHQ7XG5cdFx0XHRcdFx0bGV0IGV4aXN0cyA9IGZhbHNlO1xuXHRcdFx0XHRcdGlmICghY2F0X3ByZWZpeCkge1xuXHRcdFx0XHRcdFx0Y2F0X3ByZWZpeCA9IG5ldyBSZWdFeHAoYF4oJHtIQy5jYXRlZ29yeV9yZWdleHB9KTpgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aXRsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdGNhdF9wcmVmaXgubGFzdEluZGV4ID0gMDtcblx0XHRcdFx0XHRcdGNvbnN0IG0gPSBjYXRfcHJlZml4LmV4ZWModGl0bGVzW2ldKTtcblx0XHRcdFx0XHRcdGlmIChtICYmIG0ubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRcdFx0XHR0aXRsZXNbaV0gPSB0aXRsZXNbaV0uc2xpY2UoTWF0aC5tYXgoMCwgdGl0bGVzW2ldLmluZGV4T2YoJzonKSArIDEpKTsgLy8gcm0gbmFtZXNwYWNlXG5cdFx0XHRcdFx0XHRcdGlmIChrZXkgPT09IHRpdGxlc1tpXSkge1xuXHRcdFx0XHRcdFx0XHRcdGV4aXN0cyA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHRpdGxlcy5zcGxpY2UoaSwgMSk7IC8vIE5vcGUsIGl0J3Mgbm90IGEgY2F0ZWdvcnkgYWZ0ZXIgYWxsLlxuXHRcdFx0XHRcdFx0XHRpLS07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRpdGxlcy5leGlzdHMgPSBleGlzdHM7XG5cdFx0XHRcdFx0aWYgKHF1ZXJ5S2V5ICE9PSBrZXkpIHtcblx0XHRcdFx0XHRcdHRpdGxlcy5ub3JtYWxpemVkID0ga2V5O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBSZW1lbWJlciB0aGUgTkZDIG5vcm1hbGl6ZWQga2V5IHdlIGdvdCBiYWNrIGZyb20gdGhlIHNlcnZlclxuXHRcdFx0XHRcdHJldHVybiB0aXRsZXM7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0aW50ZXJuYWxzZWFyY2g6IHtcblx0XHRcdHVyaTogYCR7bXcuY29uZmlnLmdldChcblx0XHRcdFx0J3dnU2NyaXB0UGF0aCdcblx0XHRcdCl9L2FwaS5waHA/Zm9ybWF0PWpzb24mYWN0aW9uPXF1ZXJ5Jmxpc3Q9YWxscGFnZXMmYXBuYW1lc3BhY2U9MTQmYXBsaW1pdD0zMCZhcGZyb209JDEmYXBwcmVmaXg9JDFgLFxuXHRcdFx0aGFuZGxlcjogKHF1ZXJ5UmVzdWx0KSA9PiB7XG5cdFx0XHRcdGlmIChxdWVyeVJlc3VsdCAmJiBxdWVyeVJlc3VsdC5xdWVyeSAmJiBxdWVyeVJlc3VsdC5xdWVyeS5hbGxwYWdlcykge1xuXHRcdFx0XHRcdGNvbnN0IHRpdGxlcyA9IHF1ZXJ5UmVzdWx0LnF1ZXJ5LmFsbHBhZ2VzO1xuXHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGl0bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHR0aXRsZXNbaV0gPSB0aXRsZXNbaV0udGl0bGUuc2xpY2UoTWF0aC5tYXgoMCwgdGl0bGVzW2ldLnRpdGxlLmluZGV4T2YoJzonKSArIDEpKTtcblx0XHRcdFx0XHR9IC8vIHJtIG5hbWVzcGFjZVxuXHRcdFx0XHRcdHJldHVybiB0aXRsZXM7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0ZXhpc3RzOiB7XG5cdFx0XHR1cmk6IGAke213LmNvbmZpZy5nZXQoJ3dnU2NyaXB0UGF0aCcpfS9hcGkucGhwP2Zvcm1hdD1qc29uJmFjdGlvbj1xdWVyeSZwcm9wPWluZm8mdGl0bGVzPUNhdGVnb3J5OiQxYCxcblx0XHRcdGhhbmRsZXI6IChxdWVyeVJlc3VsdCwgcXVlcnlLZXkpID0+IHtcblx0XHRcdFx0aWYgKHF1ZXJ5UmVzdWx0ICYmIHF1ZXJ5UmVzdWx0LnF1ZXJ5ICYmIHF1ZXJ5UmVzdWx0LnF1ZXJ5LnBhZ2VzICYmICFxdWVyeVJlc3VsdC5xdWVyeS5wYWdlc1stMV0pIHtcblx0XHRcdFx0XHQvLyBTaG91bGQgaGF2ZSBleGFjdGx5IDFcblx0XHRcdFx0XHRmb3IgKGNvbnN0IHAgaW4gcXVlcnlSZXN1bHQucXVlcnkucGFnZXMpIHtcblx0XHRcdFx0XHRcdGlmICghT2JqZWN0Lmhhc093bihxdWVyeVJlc3VsdC5xdWVyeS5wYWdlcywgcCkpIHtcblx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRsZXQgX3RpdGxlID0gcXVlcnlSZXN1bHQucXVlcnkucGFnZXNbcF0udGl0bGU7XG5cdFx0XHRcdFx0XHRfdGl0bGUgPSBfdGl0bGUuc2xpY2UoTWF0aC5tYXgoMCwgX3RpdGxlLmluZGV4T2YoJzonKSArIDEpKTtcblx0XHRcdFx0XHRcdGNvbnN0IHRpdGxlcyA9IFtfdGl0bGVdO1xuXHRcdFx0XHRcdFx0dGl0bGVzLmV4aXN0cyA9IHRydWU7XG5cdFx0XHRcdFx0XHRpZiAocXVlcnlLZXkgIT09IF90aXRsZSkge1xuXHRcdFx0XHRcdFx0XHR0aXRsZXMubm9ybWFsaXplZCA9IF90aXRsZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC8vIE5GQ1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRpdGxlcztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0c3ViY2F0ZWdvcmllczoge1xuXHRcdFx0dXJpOiBgJHttdy5jb25maWcuZ2V0KFxuXHRcdFx0XHQnd2dTY3JpcHRQYXRoJ1xuXHRcdFx0KX0vYXBpLnBocD9mb3JtYXQ9anNvbiZhY3Rpb249cXVlcnkmbGlzdD1jYXRlZ29yeW1lbWJlcnMmY210eXBlPXN1YmNhdCZjbWxpbWl0PW1heCZjbXRpdGxlPUNhdGVnb3J5OiQxYCxcblx0XHRcdGhhbmRsZXI6IChxdWVyeVJlc3VsdCkgPT4ge1xuXHRcdFx0XHRpZiAocXVlcnlSZXN1bHQgJiYgcXVlcnlSZXN1bHQucXVlcnkgJiYgcXVlcnlSZXN1bHQucXVlcnkuY2F0ZWdvcnltZW1iZXJzKSB7XG5cdFx0XHRcdFx0Y29uc3QgdGl0bGVzID0gcXVlcnlSZXN1bHQucXVlcnkuY2F0ZWdvcnltZW1iZXJzO1xuXHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGl0bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHR0aXRsZXNbaV0gPSB0aXRsZXNbaV0udGl0bGUuc2xpY2UoTWF0aC5tYXgoMCwgdGl0bGVzW2ldLnRpdGxlLmluZGV4T2YoJzonKSArIDEpKTtcblx0XHRcdFx0XHR9IC8vIHJtIG5hbWVzcGFjZVxuXHRcdFx0XHRcdHJldHVybiB0aXRsZXM7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0cGFyZW50Y2F0ZWdvcmllczoge1xuXHRcdFx0dXJpOiBgJHttdy5jb25maWcuZ2V0KFxuXHRcdFx0XHQnd2dTY3JpcHRQYXRoJ1xuXHRcdFx0KX0vYXBpLnBocD9mb3JtYXQ9anNvbiZhY3Rpb249cXVlcnkmcHJvcD1jYXRlZ29yaWVzJnRpdGxlcz1DYXRlZ29yeTokMSZjbGxpbWl0PW1heGAsXG5cdFx0XHRoYW5kbGVyOiAocXVlcnlSZXN1bHQpID0+IHtcblx0XHRcdFx0aWYgKHF1ZXJ5UmVzdWx0ICYmIHF1ZXJ5UmVzdWx0LnF1ZXJ5ICYmIHF1ZXJ5UmVzdWx0LnF1ZXJ5LnBhZ2VzKSB7XG5cdFx0XHRcdFx0Zm9yIChjb25zdCBwIGluIHF1ZXJ5UmVzdWx0LnF1ZXJ5LnBhZ2VzKSB7XG5cdFx0XHRcdFx0XHRpZiAocXVlcnlSZXN1bHQucXVlcnkucGFnZXNbcF0uY2F0ZWdvcmllcykge1xuXHRcdFx0XHRcdFx0XHRjb25zdCB0aXRsZXMgPSBxdWVyeVJlc3VsdC5xdWVyeS5wYWdlc1twXS5jYXRlZ29yaWVzO1xuXHRcdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRpdGxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0XHRcdHRpdGxlc1tpXSA9IHRpdGxlc1tpXS50aXRsZS5zbGljZShNYXRoLm1heCgwLCB0aXRsZXNbaV0udGl0bGUuaW5kZXhPZignOicpICsgMSkpO1xuXHRcdFx0XHRcdFx0XHR9IC8vIHJtIG5hbWVzcGFjZVxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdGl0bGVzO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH0sXG5cdFx0fSxcblx0fTtcblx0Y29uc3Qgc3VnZ2VzdGlvbkNvbmZpZ3MgPSB7XG5cdFx0c2VhcmNoaW5kZXg6IHtcblx0XHRcdG5hbWU6ICdTZWFyY2ggaW5kZXgnLFxuXHRcdFx0ZW5naW5lczogWydvcGVuc2VhcmNoJ10sXG5cdFx0XHRjYWNoZToge30sXG5cdFx0XHRzaG93OiB0cnVlLFxuXHRcdFx0dGVtcDogZmFsc2UsXG5cdFx0XHRub0NvbXBsZXRpb246IGZhbHNlLFxuXHRcdH0sXG5cdFx0cGFnZWxpc3Q6IHtcblx0XHRcdG5hbWU6ICdQYWdlIGxpc3QnLFxuXHRcdFx0ZW5naW5lczogWydpbnRlcm5hbHNlYXJjaCcsICdleGlzdHMnXSxcblx0XHRcdGNhY2hlOiB7fSxcblx0XHRcdHNob3c6IHRydWUsXG5cdFx0XHR0ZW1wOiBmYWxzZSxcblx0XHRcdG5vQ29tcGxldGlvbjogZmFsc2UsXG5cdFx0fSxcblx0XHRjb21iaW5lZDoge1xuXHRcdFx0bmFtZTogJ0NvbWJpbmVkIHNlYXJjaCcsXG5cdFx0XHRlbmdpbmVzOiBbJ29wZW5zZWFyY2gnLCAnaW50ZXJuYWxzZWFyY2gnXSxcblx0XHRcdGNhY2hlOiB7fSxcblx0XHRcdHNob3c6IHRydWUsXG5cdFx0XHR0ZW1wOiBmYWxzZSxcblx0XHRcdG5vQ29tcGxldGlvbjogZmFsc2UsXG5cdFx0fSxcblx0XHRzdWJjYXQ6IHtcblx0XHRcdG5hbWU6ICdTdWJjYXRlZ29yaWVzJyxcblx0XHRcdGVuZ2luZXM6IFsnc3ViY2F0ZWdvcmllcyddLFxuXHRcdFx0Y2FjaGU6IHt9LFxuXHRcdFx0c2hvdzogdHJ1ZSxcblx0XHRcdHRlbXA6IHRydWUsXG5cdFx0XHRub0NvbXBsZXRpb246IHRydWUsXG5cdFx0fSxcblx0XHRwYXJlbnRjYXQ6IHtcblx0XHRcdG5hbWU6ICdQYXJlbnQgY2F0ZWdvcmllcycsXG5cdFx0XHRlbmdpbmVzOiBbJ3BhcmVudGNhdGVnb3JpZXMnXSxcblx0XHRcdGNhY2hlOiB7fSxcblx0XHRcdHNob3c6IHRydWUsXG5cdFx0XHR0ZW1wOiB0cnVlLFxuXHRcdFx0bm9Db21wbGV0aW9uOiB0cnVlLFxuXHRcdH0sXG5cdH07XG5cdC8vIEV2ZW50IGtleUNvZGVzIHRoYXQgd2UgaGFuZGxlIGluIHRoZSB0ZXh0IGlucHV0IGZpZWxkL3N1Z2dlc3Rpb24gbGlzdC5cblx0Y29uc3QgQlMgPSA4O1xuXHRjb25zdCBUQUIgPSA5O1xuXHRjb25zdCBSRVQgPSAxMztcblx0Y29uc3QgRVNDID0gMjc7XG5cdGNvbnN0IFNQQUNFID0gMzI7XG5cdGNvbnN0IFBHVVAgPSAzMztcblx0Y29uc3QgUEdET1dOID0gMzQ7XG5cdGNvbnN0IFVQID0gMzg7XG5cdGNvbnN0IERPV04gPSA0MDtcblx0Y29uc3QgREVMID0gNDY7XG5cdGNvbnN0IElNRSA9IDIyOTtcblx0Y2xhc3MgQ2F0ZWdvcnlFZGl0b3Ige1xuXHRcdGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcblx0XHRcdHRoaXMuaW5pdGlhbGl6ZSguLi5hcmdzKTtcblx0XHR9XG5cdFx0aW5pdGlhbGl6ZShsaW5lLCBzcGFuLCBhZnRlciwga2V5LCBpc19oaWRkZW4pIHtcblx0XHRcdC8vIElmIGEgc3BhbiBpcyBnaXZlbiwgJ2FmdGVyJyBpcyB0aGUgY2F0ZWdvcnkgdGl0bGUsIG90aGVyd2lzZSBpdCBtYXkgYmUgYW4gZWxlbWVudCBhZnRlciB3aGljaCB0b1xuXHRcdFx0Ly8gaW5zZXJ0IHRoZSBuZXcgc3Bhbi4gJ2tleScgaXMgbGlrZXdpc2Ugb3ZlcmxvYWRlZDsgaWYgYSBzcGFuIGlzIGdpdmVuLCBpdCBpcyB0aGUgY2F0ZWdvcnkga2V5IChpZlxuXHRcdFx0Ly8ga25vd24pLCBvdGhlcndpc2UgaXQgaXMgYSBib29sZWFuIGluZGljYXRpbmcgd2hldGhlciBhIGJhciBzaGFsbCBiZSBwcmVwZW5kZWQuXG5cdFx0XHRpZiAoc3Bhbikge1xuXHRcdFx0XHRpZiAoaXNfcnRsKSB7XG5cdFx0XHRcdFx0c3Bhbi5kaXIgPSAncnRsJztcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmlzQWRkQ2F0ZWdvcnkgPSBmYWxzZTtcblx0XHRcdFx0dGhpcy5jYXRMaW5rID0gc3Bhbi5maXJzdENoaWxkO1xuXHRcdFx0XHR0aGlzLm9yaWdpbmFsQ2F0ZWdvcnkgPSBhZnRlcjtcblx0XHRcdFx0dGhpcy5vcmlnaW5hbEtleSA9IGtleSAmJiBrZXkubGVuZ3RoID4gMSA/IGtleS5zbGljZSgxKSA6IG51bGw7IC8vID4gMSBiZWNhdXNlIGl0IGluY2x1ZGVzIHRoZSBsZWFkaW5nIGJhclxuXHRcdFx0XHR0aGlzLm9yaWdpbmFsRXhpc3RzID0gIWhhc0NsYXNzKHRoaXMuY2F0TGluaywgJ25ldycpO1xuXHRcdFx0XHQvLyBDcmVhdGUgY2hhbmdlIGFuZCBkZWwgbGlua3Ncblx0XHRcdFx0dGhpcy5tYWtlTGlua1NwYW4oKTtcblx0XHRcdFx0aWYgKCF0aGlzLm9yaWdpbmFsRXhpc3RzICYmIHRoaXMudXBEb3duTGlua3MpIHtcblx0XHRcdFx0XHR0aGlzLnVwRG93bkxpbmtzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3Bhbi5hcHBlbmQodGhpcy5saW5rU3Bhbik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmlzQWRkQ2F0ZWdvcnkgPSB0cnVlO1xuXHRcdFx0XHQvLyBDcmVhdGUgYWRkIHNwYW4gYW5kIGFwcGVuZCB0byBjYXRMaW5rc1xuXHRcdFx0XHR0aGlzLm9yaWdpbmFsQ2F0ZWdvcnkgPSAnJztcblx0XHRcdFx0dGhpcy5vcmlnaW5hbEtleSA9IG51bGw7XG5cdFx0XHRcdHRoaXMub3JpZ2luYWxFeGlzdHMgPSBmYWxzZTtcblx0XHRcdFx0aWYgKCFuZXdET00pIHtcblx0XHRcdFx0XHRzcGFuID0gbWFrZSgnc3BhbicpO1xuXHRcdFx0XHRcdHNwYW4uY2xhc3NOYW1lID0gJ25vcHJpbnQnO1xuXHRcdFx0XHRcdGlmIChrZXkpIHtcblx0XHRcdFx0XHRcdHNwYW4uYXBwZW5kKG1ha2UoJyB8ICcsIHRydWUpKTtcblx0XHRcdFx0XHRcdGlmIChhZnRlcikge1xuXHRcdFx0XHRcdFx0XHRhZnRlci5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzcGFuLCBhZnRlci5uZXh0U2libGluZyk7XG5cdFx0XHRcdFx0XHRcdGFmdGVyID0gYWZ0ZXIubmV4dFNpYmxpbmc7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGxpbmUpIHtcblx0XHRcdFx0XHRcdFx0bGluZS5hcHBlbmQoc3Bhbik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChsaW5lICYmIGxpbmUuZmlyc3RDaGlsZCkge1xuXHRcdFx0XHRcdFx0c3Bhbi5hcHBlbmQobWFrZSgnICcsIHRydWUpKTtcblx0XHRcdFx0XHRcdGxpbmUuYXBwZW5kKHNwYW4pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmxpbmtTcGFuID0gbWFrZSgnc3BhbicpO1xuXHRcdFx0XHR0aGlzLmxpbmtTcGFuLmNsYXNzTmFtZSA9ICdub3ByaW50IG5vcG9wdXBzIGhvdGNhdGxpbmsnO1xuXHRcdFx0XHRjb25zdCBsaW5rID0gbWFrZSgnYScpO1xuXHRcdFx0XHRsaW5rLmhyZWYgPSAnI2NhdGxpbmtzJztcblx0XHRcdFx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3Blbi5iaW5kKHRoaXMpKTtcblx0XHRcdFx0bGluay5hcHBlbmQobWFrZShIQy5saW5rcy5hZGQsIHRydWUpKTtcblx0XHRcdFx0bGluay50aXRsZSA9IGdldE1lc3NhZ2UoJ3Rvb2x0aXBzLWFkZCcpO1xuXHRcdFx0XHR0aGlzLmxpbmtTcGFuLmFwcGVuZChsaW5rKTtcblx0XHRcdFx0c3BhbiA9IG1ha2UobmV3RE9NID8gJ2xpJyA6ICdzcGFuJyk7XG5cdFx0XHRcdHNwYW4uY2xhc3NOYW1lID0gJ25vcHJpbnQnO1xuXHRcdFx0XHRpZiAoaXNfcnRsKSB7XG5cdFx0XHRcdFx0c3Bhbi5kaXIgPSAncnRsJztcblx0XHRcdFx0fVxuXHRcdFx0XHRzcGFuLmFwcGVuZCh0aGlzLmxpbmtTcGFuKTtcblx0XHRcdFx0aWYgKGFmdGVyKSB7XG5cdFx0XHRcdFx0YWZ0ZXIucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc3BhbiwgYWZ0ZXIubmV4dFNpYmxpbmcpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGxpbmUpIHtcblx0XHRcdFx0XHRsaW5lLmFwcGVuZChzcGFuKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLm5vcm1hbExpbmtzID0gbnVsbDtcblx0XHRcdFx0dGhpcy51bmRlbExpbmsgPSBudWxsO1xuXHRcdFx0XHR0aGlzLmNhdExpbmsgPSBudWxsO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5vcmlnaW5hbEhpZGRlbiA9IGlzX2hpZGRlbjtcblx0XHRcdHRoaXMubGluZSA9IGxpbmU7XG5cdFx0XHR0aGlzLmVuZ2luZSA9IEhDLnN1Z2dlc3Rpb25zO1xuXHRcdFx0dGhpcy5zcGFuID0gc3Bhbjtcblx0XHRcdHRoaXMuY3VycmVudENhdGVnb3J5ID0gdGhpcy5vcmlnaW5hbENhdGVnb3J5O1xuXHRcdFx0dGhpcy5jdXJyZW50RXhpc3RzID0gdGhpcy5vcmlnaW5hbEV4aXN0cztcblx0XHRcdHRoaXMuY3VycmVudEhpZGRlbiA9IHRoaXMub3JpZ2luYWxIaWRkZW47XG5cdFx0XHR0aGlzLmN1cnJlbnRLZXkgPSB0aGlzLm9yaWdpbmFsS2V5O1xuXHRcdFx0dGhpcy5zdGF0ZSA9IFVOQ0hBTkdFRDtcblx0XHRcdHRoaXMubGFzdFNhdmVkU3RhdGUgPSBVTkNIQU5HRUQ7XG5cdFx0XHR0aGlzLmxhc3RTYXZlZENhdGVnb3J5ID0gdGhpcy5vcmlnaW5hbENhdGVnb3J5O1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRLZXkgPSB0aGlzLm9yaWdpbmFsS2V5O1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRFeGlzdHMgPSB0aGlzLm9yaWdpbmFsRXhpc3RzO1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRIaWRkZW4gPSB0aGlzLm9yaWdpbmFsSGlkZGVuO1xuXHRcdFx0aWYgKHRoaXMuY2F0TGluayAmJiB0aGlzLmN1cnJlbnRLZXkpIHtcblx0XHRcdFx0dGhpcy5jYXRMaW5rLnRpdGxlID0gdGhpcy5jdXJyZW50S2V5O1xuXHRcdFx0fVxuXHRcdFx0ZWRpdG9yc1tlZGl0b3JzLmxlbmd0aF0gPSB0aGlzO1xuXHRcdH1cblx0XHRtYWtlTGlua1NwYW4oKSB7XG5cdFx0XHR0aGlzLm5vcm1hbExpbmtzID0gbWFrZSgnc3BhbicpO1xuXHRcdFx0bGV0IGxpbmsgPSBudWxsO1xuXHRcdFx0aWYgKHRoaXMub3JpZ2luYWxDYXRlZ29yeSAmJiB0aGlzLm9yaWdpbmFsQ2F0ZWdvcnkubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRsaW5rID0gbWFrZSgnYScpO1xuXHRcdFx0XHRsaW5rLmhyZWYgPSAnI2NhdGxpbmtzJztcblx0XHRcdFx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucmVtb3ZlLmJpbmQodGhpcykpO1xuXHRcdFx0XHRsaW5rLmFwcGVuZChtYWtlKEhDLmxpbmtzLnJlbW92ZSwgdHJ1ZSkpO1xuXHRcdFx0XHRsaW5rLnRpdGxlID0gZ2V0TWVzc2FnZSgndG9vbHRpcHMtcmVtb3ZlJyk7XG5cdFx0XHRcdHRoaXMubm9ybWFsTGlua3MuYXBwZW5kKG1ha2UoJyAnLCB0cnVlKSk7XG5cdFx0XHRcdHRoaXMubm9ybWFsTGlua3MuYXBwZW5kKGxpbmspO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFIQy50ZW1wbGF0ZV9jYXRlZ29yaWVzW3RoaXMub3JpZ2luYWxDYXRlZ29yeV0pIHtcblx0XHRcdFx0bGluayA9IG1ha2UoJ2EnKTtcblx0XHRcdFx0bGluay5ocmVmID0gJyNjYXRsaW5rcyc7XG5cdFx0XHRcdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9wZW4uYmluZCh0aGlzKSk7XG5cdFx0XHRcdGxpbmsuYXBwZW5kKG1ha2UoSEMubGlua3MuY2hhbmdlLCB0cnVlKSk7XG5cdFx0XHRcdGxpbmsudGl0bGUgPSBnZXRNZXNzYWdlKCd0b29sdGlwcy1jaGFuZ2UnKTtcblx0XHRcdFx0dGhpcy5ub3JtYWxMaW5rcy5hcHBlbmQobWFrZSgnICcsIHRydWUpKTtcblx0XHRcdFx0dGhpcy5ub3JtYWxMaW5rcy5hcHBlbmQobGluayk7XG5cdFx0XHRcdGlmICghbm9TdWdnZXN0aW9ucyAmJiBIQy51c2VfdXBfZG93bikge1xuXHRcdFx0XHRcdHRoaXMudXBEb3duTGlua3MgPSBtYWtlKCdzcGFuJyk7XG5cdFx0XHRcdFx0bGluayA9IG1ha2UoJ2EnKTtcblx0XHRcdFx0XHRsaW5rLmhyZWYgPSAnI2NhdGxpbmtzJztcblx0XHRcdFx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5kb3duLmJpbmQodGhpcykpO1xuXHRcdFx0XHRcdGxpbmsuYXBwZW5kKG1ha2UoSEMubGlua3MuZG93biwgdHJ1ZSkpO1xuXHRcdFx0XHRcdGxpbmsudGl0bGUgPSBnZXRNZXNzYWdlKCd0b29sdGlwcy1kb3duJyk7XG5cdFx0XHRcdFx0dGhpcy51cERvd25MaW5rcy5hcHBlbmQobWFrZSgnICcsIHRydWUpKTtcblx0XHRcdFx0XHR0aGlzLnVwRG93bkxpbmtzLmFwcGVuZChsaW5rKTtcblx0XHRcdFx0XHRsaW5rID0gbWFrZSgnYScpO1xuXHRcdFx0XHRcdGxpbmsuaHJlZiA9ICcjY2F0bGlua3MnO1xuXHRcdFx0XHRcdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnVwLmJpbmQodGhpcykpO1xuXHRcdFx0XHRcdGxpbmsuYXBwZW5kKG1ha2UoSEMubGlua3MudXAsIHRydWUpKTtcblx0XHRcdFx0XHRsaW5rLnRpdGxlID0gZ2V0TWVzc2FnZSgndG9vbHRpcHMtdXAnKTtcblx0XHRcdFx0XHR0aGlzLnVwRG93bkxpbmtzLmFwcGVuZChtYWtlKCcgJywgdHJ1ZSkpO1xuXHRcdFx0XHRcdHRoaXMudXBEb3duTGlua3MuYXBwZW5kKGxpbmspO1xuXHRcdFx0XHRcdHRoaXMubm9ybWFsTGlua3MuYXBwZW5kKHRoaXMudXBEb3duTGlua3MpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmxpbmtTcGFuID0gbWFrZSgnc3BhbicpO1xuXHRcdFx0dGhpcy5saW5rU3Bhbi5jbGFzc05hbWUgPSAnbm9wcmludCBub3BvcHVwcyBob3RjYXRsaW5rJztcblx0XHRcdHRoaXMubGlua1NwYW4uYXBwZW5kKHRoaXMubm9ybWFsTGlua3MpO1xuXHRcdFx0dGhpcy51bmRlbExpbmsgPSBtYWtlKCdzcGFuJyk7XG5cdFx0XHR0aGlzLnVuZGVsTGluay5jbGFzc05hbWUgPSAnbm9wb3B1cHMgaG90Y2F0bGluayc7XG5cdFx0XHR0aGlzLnVuZGVsTGluay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0bGluayA9IG1ha2UoJ2EnKTtcblx0XHRcdGxpbmsuaHJlZiA9ICcjY2F0bGlua3MnO1xuXHRcdFx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucmVzdG9yZS5iaW5kKHRoaXMpKTtcblx0XHRcdGxpbmsuYXBwZW5kKG1ha2UoSEMubGlua3MucmVzdG9yZSwgdHJ1ZSkpO1xuXHRcdFx0bGluay50aXRsZSA9IGdldE1lc3NhZ2UoJ3Rvb2x0aXBzLXJlc3RvcmUnKTtcblx0XHRcdHRoaXMudW5kZWxMaW5rLmFwcGVuZChtYWtlKCcgJywgdHJ1ZSkpO1xuXHRcdFx0dGhpcy51bmRlbExpbmsuYXBwZW5kKGxpbmspO1xuXHRcdFx0dGhpcy5saW5rU3Bhbi5hcHBlbmQodGhpcy51bmRlbExpbmspO1xuXHRcdH1cblx0XHRpbnZva2VTdWdnZXN0aW9ucyhkb250X2F1dG9jb21wbGV0ZSkge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHR0aGlzLmVuZ2luZSAmJlxuXHRcdFx0XHRzdWdnZXN0aW9uQ29uZmlnc1t0aGlzLmVuZ2luZV0gJiZcblx0XHRcdFx0c3VnZ2VzdGlvbkNvbmZpZ3NbdGhpcy5lbmdpbmVdLnRlbXAgJiZcblx0XHRcdFx0IWRvbnRfYXV0b2NvbXBsZXRlXG5cdFx0XHQpIHtcblx0XHRcdFx0dGhpcy5lbmdpbmUgPSBIQy5zdWdnZXN0aW9ucztcblx0XHRcdH0gLy8gUmVzZXQgdG8gYSBzZWFyY2ggdXBvbiBpbnB1dFxuXHRcdFx0dGhpcy5zdGF0ZSA9IENIQU5HRV9QRU5ESU5HO1xuXHRcdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0c2VsZi50ZXh0Y2hhbmdlKGRvbnRfYXV0b2NvbXBsZXRlKTtcblx0XHRcdH0sIEhDLnN1Z2dlc3RfZGVsYXkpO1xuXHRcdH1cblx0XHRtYWtlRm9ybSgpIHtcblx0XHRcdGNvbnN0IGZvcm0gPSBtYWtlKCdmb3JtJyk7XG5cdFx0XHRmb3JtLm1ldGhvZCA9ICdQT1NUJztcblx0XHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdGhpcy5hY2NlcHQuYmluZCh0aGlzKSk7XG5cdFx0XHR0aGlzLmZvcm0gPSBmb3JtO1xuXHRcdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0XHRjb25zdCB0ZXh0ID0gbWFrZSgnaW5wdXQnKTtcblx0XHRcdHRleHQudHlwZSA9ICd0ZXh0Jztcblx0XHRcdHRleHQuc2l6ZSA9IEhDLmVkaXRib3hfd2lkdGg7XG5cdFx0XHRpZiAoIW5vU3VnZ2VzdGlvbnMpIHtcblx0XHRcdFx0Ly8gQmUgY2FyZWZ1bCBoZXJlIHRvIGhhbmRsZSBJTUUgaW5wdXQuIFRoaXMgaXMgYnJvd3Nlci9PUy9JTUUgZGVwZW5kZW50LCBidXQgYmFzaWNhbGx5IHRoZXJlIGFyZSB0d28gbWVjaGFuaXNtczpcblx0XHRcdFx0Ly8gLSBNb2Rlcm4gKERPTSBMZXZlbCAzKSBicm93c2VycyB1c2UgY29tcG9zaXRpb25zdGFydC9jb21wb3NpdGlvbmVuZCBldmVudHMgdG8gc2lnbmFsIGNvbXBvc2l0aW9uOyBpZiB0aGVcblx0XHRcdFx0Ly8gICBjb21wb3NpdGlvbiBpcyBub3QgY2FuY2VsZWQsIHRoZXJlJ2xsIGJlIGEgdGV4dElucHV0IGV2ZW50IGZvbGxvd2luZy4gRHVyaW5nIGEgY29tcG9zaXRpb24ga2V5IGV2ZW50cyBhcmVcblx0XHRcdFx0Ly8gICBlaXRoZXIgYWxsIHN1cHByZXNzZWQgKEZGL0dlY2tvKSwgb3Igb3RoZXJ3aXNlIGhhdmUga2V5RG93biA9PT0gSU1FIGZvciBhbGwga2V5cyAoV2Via2l0KS5cblx0XHRcdFx0Ly8gICAtIFdlYmtpdCBzZW5kcyBhIHRleHRJbnB1dCBmb2xsb3dlZCBieSBrZXlEb3duID09PSBJTUUgYW5kIGEga2V5VXAgd2l0aCB0aGUga2V5IHRoYXQgZW5kZWQgY29tcG9zaXRpb24uXG5cdFx0XHRcdC8vICAgLSBHZWNrbyBkb2Vzbid0IHNlbmQgdGV4dElucHV0IGJ1dCBqdXN0IGEga2V5VXAgd2l0aCB0aGUga2V5IHRoYXQgZW5kZWQgY29tcG9zaXRpb24sIHdpdGhvdXQgc2VuZGluZyBrZXlEb3duXG5cdFx0XHRcdC8vXHQgZmlyc3QuIEdlY2tvIGRvZXNuJ3Qgc2VuZCBhbnkga2V5ZG93biB3aGlsZSBJTUUgaXMgYWN0aXZlLlxuXHRcdFx0XHQvLyAtIE9sZGVyIGJyb3dzZXJzIHNpZ25hbCBjb21wb3NpdGlvbiBieSBrZXlEb3duID09PSBJTUUgZm9yIHRoZSBmaXJzdCBhbmQgc3Vic2VxdWVudCBrZXlzIGZvciBhIGNvbXBvc2l0aW9uLiBUaGVcblx0XHRcdFx0Ly8gICBmaXJzdCBrZXlEb3duICE9PSBJTUUgaXMgY2VydGFpbmx5IGFmdGVyIHRoZSBlbmQgb2YgdGhlIGNvbXBvc2l0aW9uLiBUeXBpY2FsbHksIGNvbXBvc2l0aW9uIGVuZCBjYW4gYWxzbyBiZVxuXHRcdFx0XHQvLyAgIGRldGVjdGVkIGJ5IGEga2V5RG93biBJTUUgd2l0aCBhIGtleVVwIG9mIHNwYWNlLCB0YWIsIGVzY2FwZSwgb3IgcmV0dXJuLlxuXHRcdFx0XHR0ZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0Y29uc3Qga2V5ID0gZXZlbnQua2V5IHx8IDA7XG5cdFx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdFx0c2VsZi5pbWUgJiZcblx0XHRcdFx0XHRcdHNlbGYubGFzdEtleSA9PT0gSU1FICYmXG5cdFx0XHRcdFx0XHQhc2VsZi51c2VzQ29tcG9zaXRpb24gJiZcblx0XHRcdFx0XHRcdChrZXkgPT09IFRBQiB8fCBrZXkgPT09IFJFVCB8fCBrZXkgPT09IEVTQyB8fCBrZXkgPT09IFNQQUNFKVxuXHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0c2VsZi5pbWUgPSBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHNlbGYuaW1lKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGtleSA9PT0gVVAgfHwga2V5ID09PSBET1dOIHx8IGtleSA9PT0gUEdVUCB8fCBrZXkgPT09IFBHRE9XTikge1xuXHRcdFx0XHRcdFx0Ly8gSW4gY2FzZSBhIGJyb3dzZXIgZG9lc24ndCBnZW5lcmF0ZSBrZXlwcmVzcyBldmVudHMgZm9yIGFycm93IGtleXMuLi5cblx0XHRcdFx0XHRcdGlmIChzZWxmLmtleUNvdW50ID09PSAwKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBzZWxmLnByb2Nlc3NLZXkoZXZlbnQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRpZiAoa2V5ID09PSBFU0MgJiYgc2VsZi5sYXN0S2V5ICE9PSBJTUUgJiYgIXNlbGYucmVzZXRLZXlTZWxlY3Rpb24oKSkge1xuXHRcdFx0XHRcdFx0XHQvLyBObyB1bmRvIG9mIGtleSBzZWxlY3Rpb246IHRyZWF0IEVTQyBhcyBcImNhbmNlbFwiLlxuXHRcdFx0XHRcdFx0XHRzZWxmLmNhbmNlbCgpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvLyBBbHNvIGRvIHRoaXMgZm9yIEVTQyBhcyBhIHdvcmthcm91bmQgZm9yIEZpcmVmb3ggYnVnIDUyNDM2MFxuXHRcdFx0XHRcdFx0Ly8ge0BsaW5rIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTUyNDM2MH1cblx0XHRcdFx0XHRcdHNlbGYuaW52b2tlU3VnZ2VzdGlvbnMoa2V5ID09PSBCUyB8fCBrZXkgPT09IERFTCB8fCBrZXkgPT09IEVTQyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0dGV4dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0Y29uc3Qga2V5ID0gZXZlbnQua2V5IHx8IDA7XG5cdFx0XHRcdFx0c2VsZi5sYXN0S2V5ID0ga2V5O1xuXHRcdFx0XHRcdHNlbGYua2V5Q291bnQgPSAwO1xuXHRcdFx0XHRcdC8vIERPTSBMZXZlbCA8IDMgSU1FIGlucHV0XG5cdFx0XHRcdFx0aWYgKCFzZWxmLmltZSAmJiBrZXkgPT09IElNRSAmJiAhc2VsZi51c2VzQ29tcG9zaXRpb24pIHtcblx0XHRcdFx0XHRcdC8vIHNlbGYudXNlc0NvbXBvc2l0aW9uIGNhdGNoZXMgYnJvd3NlcnMgdGhhdCBtYXkgZW1pdCBzcHVyaW91cyBrZXlkb3duIElNRSBhZnRlciBhIGNvbXBvc2l0aW9uIGhhcyBlbmRlZFxuXHRcdFx0XHRcdFx0c2VsZi5pbWUgPSB0cnVlO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoXG5cdFx0XHRcdFx0XHRzZWxmLmltZSAmJlxuXHRcdFx0XHRcdFx0a2V5ICE9PSBJTUUgJiZcblx0XHRcdFx0XHRcdCEoKGtleSA+PSAxNiAmJiBrZXkgPD0gMjApIHx8IChrZXkgPj0gOTEgJiYga2V5IDw9IDkzKSB8fCBrZXkgPT09IDE0NClcblx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdC8vIElnbm9yZSBjb250cm9sIGtleXM6IGN0cmwsIHNoaWZ0LCBhbHQsIGFsdCBnciwgY2FwcyBsb2NrLCB3aW5kb3dzL2FwcGxlIGNtZCBrZXlzLCBudW0gbG9jay4gT25seSB0aGUgd2luZG93cyBrZXlzXG5cdFx0XHRcdFx0XHQvLyB0ZXJtaW5hdGUgSU1FIChhcHBsZSBjbWQgZG9lc24ndCksIGJ1dCB0aGV5IGFsc28gY2F1c2UgYSBibHVyLCBzbyBpdCdzIE9LIHRvIGlnbm9yZSB0aGVtIGhlcmUuXG5cdFx0XHRcdFx0XHQvLyBOb3RlOiBTYWZhcmkgNCAoNTMwLjE3KSBwcm9wYWdhdGVzIEVTQyBvdXQgb2YgYW4gSU1FIGNvbXBvc2l0aW9uIChvYnNlcnZlZCBhdCBsZWFzdCBvbiBXaW4gWFApLlxuXHRcdFx0XHRcdFx0c2VsZi5pbWUgPSBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHNlbGYuaW1lKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gSGFuZGxlIHJldHVybiBleHBsaWNpdGx5LCB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBmb3JtIHN1Ym1pc3Npb24gdG8gYmUgYWJsZSB0byBjaGVjayBmb3IgY3RybFxuXHRcdFx0XHRcdGlmIChrZXkgPT09IFJFVCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHNlbGYuYWNjZXB0KGV2ZW50KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gSW5oaWJpdCBkZWZhdWx0IGJlaGF2aW9yIG9mIEVTQyAocmV2ZXJ0IHRvIGxhc3QgcmVhbCBpbnB1dCBpbiBGRjogd2UgZG8gdGhhdCBvdXJzZWx2ZXMpXG5cdFx0XHRcdFx0cmV0dXJuIGtleSA9PT0gRVNDID8gZXZ0S2lsbChldmVudCkgOiB0cnVlO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0Ly8gQW5kIGhhbmRsZSBjb250aW51ZWQgcHJlc3Npbmcgb2YgYXJyb3cga2V5c1xuXHRcdFx0XHR0ZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0c2VsZi5rZXlDb3VudCsrO1xuXHRcdFx0XHRcdHJldHVybiBzZWxmLnByb2Nlc3NLZXkoZXZlbnQpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0JCh0ZXh0KS5vbignZm9jdXMnLCAoKSA9PiB7XG5cdFx0XHRcdFx0bWFrZUFjdGl2ZShzZWxmKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdC8vIE9uIElFLCBibHVyIGV2ZW50cyBhcmUgYXN5bmNocm9ub3VzLCBhbmQgbWF5IHRodXMgYXJyaXZlIGFmdGVyIHRoZSBlbGVtZW50IGhhcyBsb3N0IHRoZSBmb2N1cy4gU2luY2UgSUVcblx0XHRcdFx0Ly8gY2FuIGdldCB0aGUgc2VsZWN0aW9uIG9ubHkgd2hpbGUgdGhlIGVsZW1lbnQgaXMgYWN0aXZlIChoYXMgdGhlIGZvY3VzKSwgd2UgbWF5IG5vdCBhbHdheXMgZ2V0IHRoZSBzZWxlY3Rpb24uXG5cdFx0XHRcdC8vIFRoZXJlZm9yZSwgdXNlIGFuIElFLXNwZWNpZmljIHN5bmNocm9ub3VzIGV2ZW50IG9uIElFLi4uXG5cdFx0XHRcdC8vIERvbid0IHRlc3QgZm9yIHRleHQuc2VsZWN0aW9uU3RhcnQgYmVpbmcgZGVmaW5lZDtcblx0XHRcdFx0JCh0ZXh0KS5vbihcblx0XHRcdFx0XHR0ZXh0Lm9uYmVmb3JlZGVhY3RpdmF0ZSAhPT0gdW5kZWZpbmVkICYmIHRleHQuY3JlYXRlVGV4dFJhbmdlID8gJ2JlZm9yZWRlYWN0aXZhdGUnIDogJ2JsdXInLFxuXHRcdFx0XHRcdHRoaXMuc2F2ZVZpZXcuYmluZCh0aGlzKVxuXHRcdFx0XHQpO1xuXHRcdFx0XHQvLyBET00gTGV2ZWwgMyBJTUUgaGFuZGxpbmdcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBTZXR0aW5nIGxhc3RLZXkgPSBJTUUgcHJvdmlkZXMgYSBmYWtlIGtleURvd24gZm9yIEdlY2tvJ3Mgc2luZ2xlIGtleVVwIGFmdGVyIGEgY21wb3NpdGlvbi4gSWYgd2UgZGlkbid0IGRvIHRoaXMsXG5cdFx0XHRcdFx0Ly8gY2FuY2VsbGluZyBhIGNvbXBvc2l0aW9uIHZpYSBFU0Mgd291bGQgYWxzbyBjYW5jZWwgYW5kIGNsb3NlIHRoZSB3aG9sZSBjYXRlZ29yeSBpbnB1dCBlZGl0b3IuXG5cdFx0XHRcdFx0JCh0ZXh0KS5vbignY29tcG9zaXRpb25zdGFydCcsICgpID0+IHtcblx0XHRcdFx0XHRcdHNlbGYubGFzdEtleSA9IElNRTtcblx0XHRcdFx0XHRcdHNlbGYudXNlc0NvbXBvc2l0aW9uID0gdHJ1ZTtcblx0XHRcdFx0XHRcdHNlbGYuaW1lID0gdHJ1ZTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHQkKHRleHQpLm9uKCdjb21wb3NpdGlvbmVuZCcsICgpID0+IHtcblx0XHRcdFx0XHRcdHNlbGYubGFzdEtleSA9IElNRTtcblx0XHRcdFx0XHRcdHNlbGYudXNlc0NvbXBvc2l0aW9uID0gdHJ1ZTtcblx0XHRcdFx0XHRcdHNlbGYuaW1lID0gZmFsc2U7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0JCh0ZXh0KS5vbigndGV4dElucHV0JywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0c2VsZi5pbWUgPSBmYWxzZTtcblx0XHRcdFx0XHRcdHNlbGYuaW52b2tlU3VnZ2VzdGlvbnMoZmFsc2UpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHQvLyBKdXN0IGluIGNhc2Ugc29tZSBicm93c2VycyBtaWdodCBwcm9kdWNlIGV4Y2VwdGlvbnMgd2l0aCB0aGVzZSBET00gTGV2ZWwgMyBldmVudHNcblx0XHRcdFx0fVxuXHRcdFx0XHQkKHRleHQpLm9uKCdibHVyJywgKCkgPT4ge1xuXHRcdFx0XHRcdHNlbGYudXNlc0NvbXBvc2l0aW9uID0gZmFsc2U7XG5cdFx0XHRcdFx0c2VsZi5pbWUgPSBmYWxzZTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnRleHQgPSB0ZXh0O1xuXHRcdFx0dGhpcy5pY29uID0gbWFrZSgnaW1nJyk7XG5cdFx0XHRsZXQgbGlzdCA9IG51bGw7XG5cdFx0XHRpZiAoIW5vU3VnZ2VzdGlvbnMpIHtcblx0XHRcdFx0bGlzdCA9IG1ha2UoJ3NlbGVjdCcpO1xuXHRcdFx0XHRsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRcdGlmIChzZWxmLmhpZ2hsaWdodFN1Z2dlc3Rpb24oMCkpIHtcblx0XHRcdFx0XHRcdHNlbGYudGV4dGNoYW5nZShmYWxzZSwgdHJ1ZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0bGlzdC5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIChlKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHNlbGYuaGlnaGxpZ2h0U3VnZ2VzdGlvbigwKSkge1xuXHRcdFx0XHRcdFx0c2VsZi5hY2NlcHQoZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0bGlzdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG5cdFx0XHRcdFx0c2VsZi5oaWdobGlnaHRTdWdnZXN0aW9uKDApO1xuXHRcdFx0XHRcdHNlbGYudGV4dC5mb2N1cygpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0bGlzdC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudCkgPT4ge1xuXHRcdFx0XHRcdGlmIChldmVudC5rZXkgPT09IEVTQykge1xuXHRcdFx0XHRcdFx0c2VsZi5yZXNldEtleVNlbGVjdGlvbigpO1xuXHRcdFx0XHRcdFx0c2VsZi50ZXh0LmZvY3VzKCk7XG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRcdFx0c2VsZi50ZXh0Y2hhbmdlKHRydWUpO1xuXHRcdFx0XHRcdFx0fSwgSEMuc3VnZ2VzdF9kZWxheSk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChldmVudC5rZXkgPT09IFJFVCkge1xuXHRcdFx0XHRcdFx0c2VsZi5hY2NlcHQoZXZlbnQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHRcdGlmICghSEMuZml4ZWRfc2VhcmNoKSB7XG5cdFx0XHRcdFx0Y29uc3QgZW5naW5lU2VsZWN0b3IgPSBtYWtlKCdzZWxlY3QnKTtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IGtleSBpbiBzdWdnZXN0aW9uQ29uZmlncykge1xuXHRcdFx0XHRcdFx0aWYgKHN1Z2dlc3Rpb25Db25maWdzW2tleV0uc2hvdykge1xuXHRcdFx0XHRcdFx0XHRjb25zdCBvcHQgPSBtYWtlKCdvcHRpb24nKTtcblx0XHRcdFx0XHRcdFx0b3B0LnZhbHVlID0ga2V5O1xuXHRcdFx0XHRcdFx0XHRpZiAoa2V5ID09PSB0aGlzLmVuZ2luZSkge1xuXHRcdFx0XHRcdFx0XHRcdG9wdC5zZWxlY3RlZCA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0b3B0LmFwcGVuZChtYWtlKHN1Z2dlc3Rpb25Db25maWdzW2tleV0ubmFtZSwgdHJ1ZSkpO1xuXHRcdFx0XHRcdFx0XHRlbmdpbmVTZWxlY3Rvci5hcHBlbmQob3B0KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZW5naW5lU2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0c2VsZi5lbmdpbmUgPSBzZWxmLmVuZ2luZVNlbGVjdG9yLm9wdGlvbnNbc2VsZi5lbmdpbmVTZWxlY3Rvci5zZWxlY3RlZEluZGV4XS52YWx1ZTtcblx0XHRcdFx0XHRcdHNlbGYudGV4dC5mb2N1cygpO1xuXHRcdFx0XHRcdFx0c2VsZi50ZXh0Y2hhbmdlKHRydWUsIHRydWUpOyAvLyBEb24ndCBhdXRvY29tcGxldGUsIGZvcmNlIHJlLWRpc3BsYXkgb2YgbGlzdFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3IgPSBlbmdpbmVTZWxlY3Rvcjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5saXN0ID0gbGlzdDtcblx0XHRcdGNvbnN0IGJ1dHRvbl9sYWJlbCA9IChfaWQsIGRlZmF1bHRUZXh0KSA9PiB7XG5cdFx0XHRcdGNvbnN0IGxhYmVsID0gbnVsbDtcblx0XHRcdFx0aWYgKCFsYWJlbCB8fCAhbGFiZWwuZGF0YSkge1xuXHRcdFx0XHRcdHJldHVybiBkZWZhdWx0VGV4dDtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbGFiZWwuZGF0YTtcblx0XHRcdH07XG5cdFx0XHQvLyBEbyBub3QgdXNlIHR5cGUgJ3N1Ym1pdCc7IHdlIGNhbm5vdCBkZXRlY3QgbW9kaWZpZXIga2V5cyBpZiB3ZSBkb1xuXHRcdFx0Y29uc3QgT0sgPSBtYWtlKCdpbnB1dCcpO1xuXHRcdFx0T0sudHlwZSA9ICdidXR0b24nO1xuXHRcdFx0T0sudmFsdWUgPSBidXR0b25fbGFiZWwoJ3dwT2tVcGxvYWRMYmwnLCBnZXRNZXNzYWdlKCdtZXNzYWdlcy1vaycpKTtcblx0XHRcdE9LLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5hY2NlcHQuYmluZCh0aGlzKSk7XG5cdFx0XHR0aGlzLm9rID0gT0s7XG5cdFx0XHRjb25zdCBjYW5jZWwgPSBtYWtlKCdpbnB1dCcpO1xuXHRcdFx0Y2FuY2VsLnR5cGUgPSAnYnV0dG9uJztcblx0XHRcdGNhbmNlbC52YWx1ZSA9IGJ1dHRvbl9sYWJlbCgnd3BDYW5jZWxVcGxvYWRMYmwnLCBnZXRNZXNzYWdlKCdtZXNzYWdlcy1jYW5jZWwnKSk7XG5cdFx0XHRjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNhbmNlbC5iaW5kKHRoaXMpKTtcblx0XHRcdHRoaXMuY2FuY2VsQnV0dG9uID0gY2FuY2VsO1xuXHRcdFx0Y29uc3Qgc3BhbiA9IG1ha2UoJ3NwYW4nKTtcblx0XHRcdHNwYW4uY2xhc3NOYW1lID0gJ2hvdGNhdGlucHV0Jztcblx0XHRcdHNwYW4uc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuXHRcdFx0c3Bhbi5hcHBlbmQodGV4dCk7XG5cdFx0XHQvLyBQdXQgc29tZSB0ZXh0IGludG8gdGhpcyBzcGFuIChhMCBpcyBuYnNwKSBhbmQgbWFrZSBzdXJlIGl0IGFsd2F5cyBzdGF5cyBvbiB0aGUgc2FtZVxuXHRcdFx0Ly8gbGluZSBhcyB0aGUgaW5wdXQgZmllbGQsIG90aGVyd2lzZSwgSUU4LzkgbWlzY2FsY3VsYXRlcyB0aGUgaGVpZ2h0IG9mIHRoZSBzcGFuIGFuZFxuXHRcdFx0Ly8gdGhlbiB0aGUgZW5naW5lIHNlbGVjdG9yIG1heSBvdmVybGFwIHRoZSBpbnB1dCBmaWVsZC5cblx0XHRcdHNwYW4uYXBwZW5kKG1ha2UoJ1xcdTAwQTAnLCB0cnVlKSk7XG5cdFx0XHRzcGFuLnN0eWxlLndoaXRlU3BhY2UgPSAnbm93cmFwJztcblx0XHRcdGlmIChsaXN0KSB7XG5cdFx0XHRcdHNwYW4uYXBwZW5kKGxpc3QpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuZW5naW5lU2VsZWN0b3IpIHtcblx0XHRcdFx0c3Bhbi5hcHBlbmQodGhpcy5lbmdpbmVTZWxlY3Rvcik7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIW5vU3VnZ2VzdGlvbnMpIHtcblx0XHRcdFx0c3Bhbi5hcHBlbmQodGhpcy5pY29uKTtcblx0XHRcdH1cblx0XHRcdHNwYW4uYXBwZW5kKE9LKTtcblx0XHRcdHNwYW4uYXBwZW5kKGNhbmNlbCk7XG5cdFx0XHRmb3JtLmFwcGVuZChzcGFuKTtcblx0XHRcdGZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdHRoaXMuc3Bhbi5hcHBlbmQoZm9ybSk7XG5cdFx0fVxuXHRcdGRpc3BsYXkoZXZlbnQpIHtcblx0XHRcdGlmICh0aGlzLmlzQWRkQ2F0ZWdvcnkgJiYgIW9uVXBsb2FkICYmIHRoaXMubGluZSkge1xuXHRcdFx0XHRuZXcgQ2F0ZWdvcnlFZGl0b3IodGhpcy5saW5lLCBudWxsLCB0aGlzLnNwYW4sIHRydWUpOyAvLyBDcmVhdGUgYSBuZXcgb25lXG5cdFx0XHR9XG5cdFx0XHRpZiAoIWNvbW1pdEJ1dHRvbiAmJiAhb25VcGxvYWQpIHtcblx0XHRcdFx0Zm9yIChjb25zdCBlZGl0b3Igb2YgZWRpdG9ycykge1xuXHRcdFx0XHRcdGlmIChlZGl0b3Iuc3RhdGUgIT09IFVOQ0hBTkdFRCkge1xuXHRcdFx0XHRcdFx0c2V0TXVsdGlJbnB1dCgpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoIXRoaXMuZm9ybSkge1xuXHRcdFx0XHR0aGlzLm1ha2VGb3JtKCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5saXN0KSB7XG5cdFx0XHRcdHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuZW5naW5lU2VsZWN0b3IpIHtcblx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5jdXJyZW50Q2F0ZWdvcnkgPSB0aGlzLmxhc3RTYXZlZENhdGVnb3J5O1xuXHRcdFx0dGhpcy5jdXJyZW50RXhpc3RzID0gdGhpcy5sYXN0U2F2ZWRFeGlzdHM7XG5cdFx0XHR0aGlzLmN1cnJlbnRIaWRkZW4gPSB0aGlzLmxhc3RTYXZlZEhpZGRlbjtcblx0XHRcdHRoaXMuY3VycmVudEtleSA9IHRoaXMubGFzdFNhdmVkS2V5O1xuXHRcdFx0dGhpcy5pY29uLnNyYyA9IHRoaXMuY3VycmVudEV4aXN0cyA/IEhDLmV4aXN0c1llcyA6IEhDLmV4aXN0c05vO1xuXHRcdFx0dGhpcy50ZXh0LnZhbHVlID0gdGhpcy5jdXJyZW50Q2F0ZWdvcnkgKyAodGhpcy5jdXJyZW50S2V5ID09PSBudWxsID8gJycgOiBgfCR7dGhpcy5jdXJyZW50S2V5fWApO1xuXHRcdFx0dGhpcy5vcmlnaW5hbFN0YXRlID0gdGhpcy5zdGF0ZTtcblx0XHRcdHRoaXMubGFzdElucHV0ID0gdGhpcy5jdXJyZW50Q2F0ZWdvcnk7XG5cdFx0XHR0aGlzLmlucHV0RXhpc3RzID0gdGhpcy5jdXJyZW50RXhpc3RzO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IHRoaXMuc3RhdGUgPT09IFVOQ0hBTkdFRCA/IE9QRU4gOiBDSEFOR0VfUEVORElORztcblx0XHRcdHRoaXMubGFzdFNlbGVjdGlvbiA9IHtcblx0XHRcdFx0c3RhcnQ6IHRoaXMuY3VycmVudENhdGVnb3J5Lmxlbmd0aCxcblx0XHRcdFx0ZW5kOiB0aGlzLmN1cnJlbnRDYXRlZ29yeS5sZW5ndGgsXG5cdFx0XHR9O1xuXHRcdFx0dGhpcy5zaG93c0xpc3QgPSBmYWxzZTtcblx0XHRcdC8vIERpc3BsYXkgdGhlIGZvcm1cblx0XHRcdGlmICh0aGlzLmNhdExpbmspIHtcblx0XHRcdFx0dGhpcy5jYXRMaW5rLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmxpbmtTcGFuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHR0aGlzLmZvcm0uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xuXHRcdFx0dGhpcy5vay5kaXNhYmxlZCA9IGZhbHNlO1xuXHRcdFx0Ly8gS2lsbCB0aGUgZXZlbnQgYmVmb3JlIGZvY3Vzc2luZywgb3RoZXJ3aXNlIElFIHdpbGwga2lsbCB0aGUgb25mb2N1cyBldmVudCFcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGV2dEtpbGwoZXZlbnQpO1xuXHRcdFx0dGhpcy50ZXh0LmZvY3VzKCk7XG5cdFx0XHR0aGlzLnRleHQucmVhZE9ubHkgPSBmYWxzZTtcblx0XHRcdGNoZWNrTXVsdGlJbnB1dCgpO1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cdFx0c2hvdyhldmVudCwgZW5naW5lLCByZWFkT25seSkge1xuXHRcdFx0Y29uc3QgcmVzdWx0ID0gdGhpcy5kaXNwbGF5KGV2ZW50KTtcblx0XHRcdGNvbnN0IHYgPSB0aGlzLmxhc3RTYXZlZENhdGVnb3J5O1xuXHRcdFx0aWYgKHYubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnRleHQucmVhZE9ubHkgPSAhIXJlYWRPbmx5O1xuXHRcdFx0dGhpcy5lbmdpbmUgPSBlbmdpbmU7XG5cdFx0XHR0aGlzLnRleHRjaGFuZ2UoZmFsc2UsIHRydWUpOyAvLyBkbyBhdXRvY29tcGxldGlvbiwgZm9yY2UgZGlzcGxheSBvZiBzdWdnZXN0aW9uc1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cdFx0b3BlbihldmVudCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuc2hvdyhldmVudCwgdGhpcy5lbmdpbmUgJiYgc3VnZ2VzdGlvbkNvbmZpZ3NbdGhpcy5lbmdpbmVdLnRlbXAgPyBIQy5zdWdnZXN0aW9ucyA6IHRoaXMuZW5naW5lKTtcblx0XHR9XG5cdFx0ZG93bihldmVudCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuc2hvdyhldmVudCwgJ3N1YmNhdCcsIHRydWUpO1xuXHRcdH1cblx0XHR1cChldmVudCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuc2hvdyhldmVudCwgJ3BhcmVudGNhdCcpO1xuXHRcdH1cblx0XHRjYW5jZWwoKSB7XG5cdFx0XHRpZiAodGhpcy5pc0FkZENhdGVnb3J5ICYmICFvblVwbG9hZCkge1xuXHRcdFx0XHR0aGlzLnJlbW92ZUVkaXRvcigpOyAvLyBXZSBhZGRlZCBhIG5ldyBhZGRlciB3aGVuIG9wZW5pbmdcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Ly8gQ2xvc2UsIHJlLWRpc3BsYXkgbGlua1xuXHRcdFx0dGhpcy5pbmFjdGl2YXRlKCk7XG5cdFx0XHR0aGlzLmZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdGlmICh0aGlzLmNhdExpbmspIHtcblx0XHRcdFx0dGhpcy5jYXRMaW5rLnN0eWxlLmRpc3BsYXkgPSAnJztcblx0XHRcdH1cblx0XHRcdHRoaXMubGlua1NwYW4uc3R5bGUuZGlzcGxheSA9ICcnO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IHRoaXMub3JpZ2luYWxTdGF0ZTtcblx0XHRcdHRoaXMuY3VycmVudENhdGVnb3J5ID0gdGhpcy5sYXN0U2F2ZWRDYXRlZ29yeTtcblx0XHRcdHRoaXMuY3VycmVudEtleSA9IHRoaXMubGFzdFNhdmVkS2V5O1xuXHRcdFx0dGhpcy5jdXJyZW50RXhpc3RzID0gdGhpcy5sYXN0U2F2ZWRFeGlzdHM7XG5cdFx0XHR0aGlzLmN1cnJlbnRIaWRkZW4gPSB0aGlzLmxhc3RTYXZlZEhpZGRlbjtcblx0XHRcdGlmICh0aGlzLmNhdExpbmspIHtcblx0XHRcdFx0dGhpcy5jYXRMaW5rLnRpdGxlID0gdGhpcy5jdXJyZW50S2V5ICYmIHRoaXMuY3VycmVudEtleS5sZW5ndGggPiAwID8gdGhpcy5jdXJyZW50S2V5IDogJyc7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5zdGF0ZSA9PT0gVU5DSEFOR0VEKSB7XG5cdFx0XHRcdGlmICh0aGlzLmNhdExpbmspIHtcblx0XHRcdFx0XHR0aGlzLmNhdExpbmsuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50Jztcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICghb25VcGxvYWQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHR0aGlzLmNhdExpbmsuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gSEMuYmdfY2hhbmdlZDtcblx0XHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdFx0LyogZW1wdHkgKi9cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Y2hlY2tNdWx0aUlucHV0KCk7XG5cdFx0fVxuXHRcdHJlbW92ZUVkaXRvcigpIHtcblx0XHRcdGlmICghbmV3RE9NKSB7XG5cdFx0XHRcdGNvbnN0IG5leHQgPSB0aGlzLnNwYW4ubmV4dFNpYmxpbmc7XG5cdFx0XHRcdGlmIChuZXh0KSB7XG5cdFx0XHRcdFx0bmV4dC5yZW1vdmUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuc3BhbiAmJiB0aGlzLnNwYW4ucGFyZW50Tm9kZSkge1xuXHRcdFx0XHR0aGlzLnNwYW4ucmVtb3ZlKCk7XG5cdFx0XHR9XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGVkaXRvcnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKGVkaXRvcnNbaV0gPT09IHRoaXMpIHtcblx0XHRcdFx0XHRlZGl0b3JzLnNwbGljZShpLCAxKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Y2hlY2tNdWx0aUlucHV0KCk7XG5cdFx0fVxuXHRcdHJvbGxiYWNrKGV2ZW50KSB7XG5cdFx0XHR0aGlzLnVuZG9MaW5rLnJlbW92ZSgpO1xuXHRcdFx0dGhpcy51bmRvTGluayA9IG51bGw7XG5cdFx0XHR0aGlzLmN1cnJlbnRDYXRlZ29yeSA9IHRoaXMub3JpZ2luYWxDYXRlZ29yeTtcblx0XHRcdHRoaXMuY3VycmVudEtleSA9IHRoaXMub3JpZ2luYWxLZXk7XG5cdFx0XHR0aGlzLmN1cnJlbnRFeGlzdHMgPSB0aGlzLm9yaWdpbmFsRXhpc3RzO1xuXHRcdFx0dGhpcy5jdXJyZW50SGlkZGVuID0gdGhpcy5vcmlnaW5hbEhpZGRlbjtcblx0XHRcdHRoaXMubGFzdFNhdmVkQ2F0ZWdvcnkgPSB0aGlzLm9yaWdpbmFsQ2F0ZWdvcnk7XG5cdFx0XHR0aGlzLmxhc3RTYXZlZEtleSA9IHRoaXMub3JpZ2luYWxLZXk7XG5cdFx0XHR0aGlzLmxhc3RTYXZlZEV4aXN0cyA9IHRoaXMub3JpZ2luYWxFeGlzdHM7XG5cdFx0XHR0aGlzLmxhc3RTYXZlZEhpZGRlbiA9IHRoaXMub3JpZ2luYWxIaWRkZW47XG5cdFx0XHR0aGlzLnN0YXRlID0gVU5DSEFOR0VEO1xuXHRcdFx0aWYgKCF0aGlzLmN1cnJlbnRDYXRlZ29yeSB8fCB0aGlzLmN1cnJlbnRDYXRlZ29yeS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0Ly8gSXQgd2FzIGEgbmV3bHkgYWRkZWQgY2F0ZWdvcnkuIFJlbW92ZSB0aGUgd2hvbGUgZWRpdG9yLlxuXHRcdFx0XHR0aGlzLnJlbW92ZUVkaXRvcigpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gUmVkaXNwbGF5IHRoZSBsaW5rLi4uXG5cdFx0XHRcdHRoaXMuY2F0TGluay5maXJzdENoaWxkLnJlbW92ZSgpO1xuXHRcdFx0XHR0aGlzLmNhdExpbmsuYXBwZW5kKG1ha2UodGhpcy5jdXJyZW50Q2F0ZWdvcnksIHRydWUpKTtcblx0XHRcdFx0dGhpcy5jYXRMaW5rLmhyZWYgPSB3aWtpUGFnZVBhdGgoYCR7SEMuY2F0ZWdvcnlfY2Fub25pY2FsfToke3RoaXMuY3VycmVudENhdGVnb3J5fWApO1xuXHRcdFx0XHR0aGlzLmNhdExpbmsudGl0bGUgPSB0aGlzLmN1cnJlbnRLZXkgfHwgJyc7XG5cdFx0XHRcdHRoaXMuY2F0TGluay5jbGFzc05hbWUgPSB0aGlzLmN1cnJlbnRFeGlzdHMgPyAnJyA6ICduZXcnO1xuXHRcdFx0XHR0aGlzLmNhdExpbmsuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50Jztcblx0XHRcdFx0aWYgKHRoaXMudXBEb3duTGlua3MpIHtcblx0XHRcdFx0XHR0aGlzLnVwRG93bkxpbmtzLnN0eWxlLmRpc3BsYXkgPSB0aGlzLmN1cnJlbnRFeGlzdHMgPyAnJyA6ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0XHRjaGVja011bHRpSW5wdXQoKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBldnRLaWxsKGV2ZW50KTtcblx0XHR9XG5cdFx0aW5hY3RpdmF0ZSgpIHtcblx0XHRcdGlmICh0aGlzLmxpc3QpIHtcblx0XHRcdFx0dGhpcy5saXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5lbmdpbmVTZWxlY3Rvcikge1xuXHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmlzX2FjdGl2ZSA9IGZhbHNlO1xuXHRcdH1cblx0XHRhY2NlcHRDaGVjayhkb250Q2hlY2spIHtcblx0XHRcdHRoaXMuc2FuaXRpemVJbnB1dCgpO1xuXHRcdFx0Y29uc3QgdmFsdWUgPSB0aGlzLnRleHQudmFsdWUuc3BsaXQoJ3wnKTtcblx0XHRcdGxldCBrZXkgPSBudWxsO1xuXHRcdFx0aWYgKHZhbHVlLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0Wywga2V5XSA9IHZhbHVlO1xuXHRcdFx0fVxuXHRcdFx0bGV0IHYgPSB2YWx1ZVswXS5yZXBsYWNlKC9fL2csICcgJykudHJpbSgpO1xuXHRcdFx0aWYgKEhDLmNhcGl0YWxpemVQYWdlTmFtZXMpIHtcblx0XHRcdFx0diA9IGNhcGl0YWxpemUodik7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmxhc3RJbnB1dCA9IHY7XG5cdFx0XHR2ID0gcmVwbGFjZVNob3J0Y3V0cyh2LCBIQy5zaG9ydGN1dHMpO1xuXHRcdFx0aWYgKHYubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHRoaXMuY2FuY2VsKCk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGlmIChcblx0XHRcdFx0IWRvbnRDaGVjayAmJlxuXHRcdFx0XHQoKGNvbmYud2dOYW1lc3BhY2VOdW1iZXIgPT09IDE0ICYmIHYgPT09IGNvbmYud2dUaXRsZSkgfHwgKEhDLmJsYWNrbGlzdCAmJiBIQy5ibGFja2xpc3QudGVzdCh2KSkpXG5cdFx0XHQpIHtcblx0XHRcdFx0dGhpcy5jYW5jZWwoKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5jdXJyZW50Q2F0ZWdvcnkgPSB2O1xuXHRcdFx0dGhpcy5jdXJyZW50S2V5ID0ga2V5O1xuXHRcdFx0dGhpcy5jdXJyZW50RXhpc3RzID0gdGhpcy5pbnB1dEV4aXN0cztcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRhY2NlcHQoZXZlbnQpIHtcblx0XHRcdC8vIChldnRLZXlzKGV2ZW50KSAmIDEpICE9PSAwXG5cdFx0XHQvLyDlvZPkuJTku4XlvZNldnRLZXlzKGV2ZW50KeS4ujHml7bvvIzmlbTkuKrliKTliKvlvI/miY3kuLp0cnVlXG5cdFx0XHR0aGlzLm5vQ29tbWl0ID0gZXZ0S2V5cyhldmVudCkgPT09IDE7XG5cdFx0XHRjb25zdCByZXN1bHQgPSBldnRLaWxsKGV2ZW50KTtcblx0XHRcdGlmICh0aGlzLmFjY2VwdENoZWNrKCkpIHtcblx0XHRcdFx0Y29uc3QgdG9SZXNvbHZlID0gW3RoaXNdO1xuXHRcdFx0XHRjb25zdCBvcmlnaW5hbCA9IHRoaXMuY3VycmVudENhdGVnb3J5O1xuXHRcdFx0XHRyZXNvbHZlTXVsdGkodG9SZXNvbHZlLCAocmVzb2x2ZWQpID0+IHtcblx0XHRcdFx0XHRpZiAocmVzb2x2ZWRbMF0uZGFiKSB7XG5cdFx0XHRcdFx0XHRzaG93RGFiKHJlc29sdmVkWzBdKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHJlc29sdmVkWzBdLmFjY2VwdENoZWNrKHRydWUpKSB7XG5cdFx0XHRcdFx0XHRyZXNvbHZlZFswXS5jb21taXQoXG5cdFx0XHRcdFx0XHRcdHJlc29sdmVkWzBdLmN1cnJlbnRDYXRlZ29yeSA9PT0gb3JpZ2luYWxcblx0XHRcdFx0XHRcdFx0XHQ/IG51bGxcblx0XHRcdFx0XHRcdFx0XHQ6IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLWNhdF9yZXNvbHZlZCcsIG9yaWdpbmFsKVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cdFx0Y2xvc2UoKSB7XG5cdFx0XHRpZiAoIXRoaXMuY2F0TGluaykge1xuXHRcdFx0XHQvLyBDcmVhdGUgYSBjYXRMaW5rXG5cdFx0XHRcdHRoaXMuY2F0TGluayA9IG1ha2UoJ2EnKTtcblx0XHRcdFx0dGhpcy5jYXRMaW5rLmFwcGVuZChtYWtlKCdmb28nLCB0cnVlKSk7XG5cdFx0XHRcdHRoaXMuY2F0TGluay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR0aGlzLnNwYW4uaW5zZXJ0QmVmb3JlKHRoaXMuY2F0TGluaywgdGhpcy5zcGFuLmZpcnN0Q2hpbGQubmV4dFNpYmxpbmcpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5jYXRMaW5rLmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG5cdFx0XHR0aGlzLmNhdExpbmsuYXBwZW5kKG1ha2UodGhpcy5jdXJyZW50Q2F0ZWdvcnksIHRydWUpKTtcblx0XHRcdHRoaXMuY2F0TGluay5ocmVmID0gd2lraVBhZ2VQYXRoKGAke0hDLmNhdGVnb3J5X2Nhbm9uaWNhbH06JHt0aGlzLmN1cnJlbnRDYXRlZ29yeX1gKTtcblx0XHRcdHRoaXMuY2F0TGluay5jbGFzc05hbWUgPSB0aGlzLmN1cnJlbnRFeGlzdHMgPyAnJyA6ICduZXcnO1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRDYXRlZ29yeSA9IHRoaXMuY3VycmVudENhdGVnb3J5O1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRLZXkgPSB0aGlzLmN1cnJlbnRLZXk7XG5cdFx0XHR0aGlzLmxhc3RTYXZlZEV4aXN0cyA9IHRoaXMuY3VycmVudEV4aXN0cztcblx0XHRcdHRoaXMubGFzdFNhdmVkSGlkZGVuID0gdGhpcy5jdXJyZW50SGlkZGVuO1xuXHRcdFx0Ly8gQ2xvc2UgZm9ybSBhbmQgcmVkaXNwbGF5IGNhdGVnb3J5XG5cdFx0XHR0aGlzLmluYWN0aXZhdGUoKTtcblx0XHRcdHRoaXMuZm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0dGhpcy5jYXRMaW5rLnRpdGxlID0gdGhpcy5jdXJyZW50S2V5IHx8ICcnO1xuXHRcdFx0dGhpcy5jYXRMaW5rLnN0eWxlLmRpc3BsYXkgPSAnJztcblx0XHRcdGlmICh0aGlzLmlzQWRkQ2F0ZWdvcnkpIHtcblx0XHRcdFx0aWYgKG9uVXBsb2FkICYmIHRoaXMubGluZSkge1xuXHRcdFx0XHRcdG5ldyBDYXRlZ29yeUVkaXRvcih0aGlzLmxpbmUsIG51bGwsIHRoaXMuc3BhbiwgdHJ1ZSk7IC8vIENyZWF0ZSBhIG5ldyBvbmVcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmlzQWRkQ2F0ZWdvcnkgPSBmYWxzZTtcblx0XHRcdFx0dGhpcy5saW5rU3Bhbi5yZW1vdmUoKTtcblx0XHRcdFx0dGhpcy5tYWtlTGlua1NwYW4oKTtcblx0XHRcdFx0dGhpcy5zcGFuLmFwcGVuZCh0aGlzLmxpbmtTcGFuKTtcblx0XHRcdH1cblx0XHRcdGlmICghdGhpcy51bmRvTGluaykge1xuXHRcdFx0XHQvLyBBcHBlbmQgYW4gdW5kbyBsaW5rLlxuXHRcdFx0XHRjb25zdCBzcGFuID0gbWFrZSgnc3BhbicpO1xuXHRcdFx0XHRjb25zdCBsaW5rID0gbWFrZSgnYScpO1xuXHRcdFx0XHRsaW5rLmhyZWYgPSAnI2NhdGxpbmtzJztcblx0XHRcdFx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucm9sbGJhY2suYmluZCh0aGlzKSk7XG5cdFx0XHRcdGxpbmsuYXBwZW5kKG1ha2UoSEMubGlua3MudW5kbywgdHJ1ZSkpO1xuXHRcdFx0XHRsaW5rLnRpdGxlID0gZ2V0TWVzc2FnZSgndG9vbHRpcHMtdW5kbycpO1xuXHRcdFx0XHRzcGFuLmFwcGVuZChtYWtlKCcgJywgdHJ1ZSkpO1xuXHRcdFx0XHRzcGFuLmFwcGVuZChsaW5rKTtcblx0XHRcdFx0dGhpcy5ub3JtYWxMaW5rcy5hcHBlbmQoc3Bhbik7XG5cdFx0XHRcdHRoaXMudW5kb0xpbmsgPSBzcGFuO1xuXHRcdFx0XHRpZiAoIW9uVXBsb2FkKSB7XG5cdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdHRoaXMuY2F0TGluay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBIQy5iZ19jaGFuZ2VkO1xuXHRcdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdFx0LyogZW1wdHkgKi9cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLnVwRG93bkxpbmtzKSB7XG5cdFx0XHRcdHRoaXMudXBEb3duTGlua3Muc3R5bGUuZGlzcGxheSA9IHRoaXMubGFzdFNhdmVkRXhpc3RzID8gJycgOiAnbm9uZSc7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmxpbmtTcGFuLnN0eWxlLmRpc3BsYXkgPSAnJztcblx0XHRcdHRoaXMuc3RhdGUgPSBDSEFOR0VEO1xuXHRcdFx0Y2hlY2tNdWx0aUlucHV0KCk7XG5cdFx0fVxuXHRcdGNvbW1pdCgpIHtcblx0XHRcdC8vIENoZWNrIGFnYWluIHRvIGNhdGNoIHByb2JsZW0gY2FzZXMgYWZ0ZXIgcmVkaXJlY3QgcmVzb2x1dGlvblxuXHRcdFx0aWYgKFxuXHRcdFx0XHQodGhpcy5jdXJyZW50Q2F0ZWdvcnkgPT09IHRoaXMub3JpZ2luYWxDYXRlZ29yeSAmJlxuXHRcdFx0XHRcdCh0aGlzLmN1cnJlbnRLZXkgPT09IHRoaXMub3JpZ2luYWxLZXkgfHxcblx0XHRcdFx0XHRcdCh0aGlzLmN1cnJlbnRLZXkgPT09IG51bGwgJiYgdGhpcy5vcmlnaW5hbEtleS5sZW5ndGggPT09IDApKSkgfHxcblx0XHRcdFx0KGNvbmYud2dOYW1lc3BhY2VOdW1iZXIgPT09IDE0ICYmIHRoaXMuY3VycmVudENhdGVnb3J5ID09PSBjb25mLndnVGl0bGUpIHx8XG5cdFx0XHRcdChIQy5ibGFja2xpc3QgJiYgSEMuYmxhY2tsaXN0LnRlc3QodGhpcy5jdXJyZW50Q2F0ZWdvcnkpKVxuXHRcdFx0KSB7XG5cdFx0XHRcdHRoaXMuY2FuY2VsKCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHRoaXMuY2xvc2UoKTtcblx0XHRcdGlmICghY29tbWl0QnV0dG9uICYmICFvblVwbG9hZCkge1xuXHRcdFx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRcdFx0aW5pdGlhdGVFZGl0KFxuXHRcdFx0XHRcdChmYWlsdXJlKSA9PiB7XG5cdFx0XHRcdFx0XHRwZXJmb3JtQ2hhbmdlcyhmYWlsdXJlLCBzZWxmKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdChtc2cpID0+IHtcblx0XHRcdFx0XHRcdG13Lm5vdGlmeShtc2csIHt0YWc6ICdob3RDYXQnfSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZW1vdmUoZXZlbnQpIHtcblx0XHRcdC8vIChldnRLZXlzKGV2ZW50KSAmIDEpXG5cdFx0XHQvLyDlvZPkuJTku4XlvZNldnRLZXlzKGV2ZW50KeS4ujHml7bvvIzmlbTkuKrliKTliKvlvI/miY3kuLox77yM5ZCm5YiZ6YO95pivMFxuXHRcdFx0dGhpcy5kb1JlbW92ZShldnRLZXlzKGV2ZW50KSA9PT0gMSk7XG5cdFx0XHRyZXR1cm4gZXZ0S2lsbChldmVudCk7XG5cdFx0fVxuXHRcdGRvUmVtb3ZlKG5vQ29tbWl0KSB7XG5cdFx0XHRpZiAodGhpcy5pc0FkZENhdGVnb3J5KSB7XG5cdFx0XHRcdC8vIEVtcHR5IGlucHV0IG9uIGFkZGluZyBhIG5ldyBjYXRlZ29yeVxuXHRcdFx0XHR0aGlzLmNhbmNlbCgpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWNvbW1pdEJ1dHRvbiAmJiAhb25VcGxvYWQpIHtcblx0XHRcdFx0Zm9yIChjb25zdCBlZGl0b3Igb2YgZWRpdG9ycykge1xuXHRcdFx0XHRcdGlmIChlZGl0b3Iuc3RhdGUgIT09IFVOQ0hBTkdFRCkge1xuXHRcdFx0XHRcdFx0c2V0TXVsdGlJbnB1dCgpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoY29tbWl0QnV0dG9uKSB7XG5cdFx0XHRcdHRoaXMuY2F0TGluay50aXRsZSA9ICcnO1xuXHRcdFx0XHR0aGlzLmNhdExpbmsuc3R5bGUuY3NzVGV4dCArPSAnOyB0ZXh0LWRlY29yYXRpb24gOiBsaW5lLXRocm91Z2ggIWltcG9ydGFudDsnO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHRoaXMuY2F0TGluay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBIQy5iZ19jaGFuZ2VkO1xuXHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHQvKiBlbXB0eSAqL1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMub3JpZ2luYWxTdGF0ZSA9IHRoaXMuc3RhdGU7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSBERUxFVEVEO1xuXHRcdFx0XHR0aGlzLm5vcm1hbExpbmtzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdHRoaXMudW5kZWxMaW5rLnN0eWxlLmRpc3BsYXkgPSAnJztcblx0XHRcdFx0Y2hlY2tNdWx0aUlucHV0KCk7XG5cdFx0XHR9IGVsc2UgaWYgKG9uVXBsb2FkKSB7XG5cdFx0XHRcdC8vIFJlbW92ZSB0aGlzIGVkaXRvciBjb21wbGV0ZWx5XG5cdFx0XHRcdHRoaXMucmVtb3ZlRWRpdG9yKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLm9yaWdpbmFsU3RhdGUgPSB0aGlzLnN0YXRlO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gREVMRVRFRDtcblx0XHRcdFx0dGhpcy5ub0NvbW1pdCA9IG5vQ29tbWl0IHx8IEhDLmRlbF9uZWVkc19kaWZmO1xuXHRcdFx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRcdFx0aW5pdGlhdGVFZGl0KFxuXHRcdFx0XHRcdChmYWlsdXJlKSA9PiB7XG5cdFx0XHRcdFx0XHRwZXJmb3JtQ2hhbmdlcyhmYWlsdXJlLCBzZWxmKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdChtc2cpID0+IHtcblx0XHRcdFx0XHRcdHNlbGYuc3RhdGUgPSBzZWxmLm9yaWdpbmFsU3RhdGU7XG5cdFx0XHRcdFx0XHRtdy5ub3RpZnkobXNnLCB7dGFnOiAnaG90Q2F0J30pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmVzdG9yZShldmVudCkge1xuXHRcdFx0Ly8gQ2FuIG9jY3VyIG9ubHkgaWYgd2UgZG8gaGF2ZSBhIGNvbW1pdCBidXR0b24gYW5kIGFyZSBub3Qgb24gdGhlIHVwbG9hZCBmb3JtXG5cdFx0XHR0aGlzLmNhdExpbmsudGl0bGUgPSB0aGlzLmN1cnJlbnRLZXkgfHwgJyc7XG5cdFx0XHR0aGlzLmNhdExpbmsuc3R5bGUudGV4dERlY29yYXRpb24gPSAnJztcblx0XHRcdHRoaXMuc3RhdGUgPSB0aGlzLm9yaWdpbmFsU3RhdGU7XG5cdFx0XHRpZiAodGhpcy5zdGF0ZSA9PT0gVU5DSEFOR0VEKSB7XG5cdFx0XHRcdHRoaXMuY2F0TGluay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHR0aGlzLmNhdExpbmsuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gSEMuYmdfY2hhbmdlZDtcblx0XHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdFx0LyogZW1wdHkgKi9cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5ub3JtYWxMaW5rcy5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cdFx0XHR0aGlzLnVuZGVsTGluay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0Y2hlY2tNdWx0aUlucHV0KCk7XG5cdFx0XHRyZXR1cm4gZXZ0S2lsbChldmVudCk7XG5cdFx0fVxuXHRcdC8vIEludGVybmFsIG9wZXJhdGlvbnNcblx0XHRzZWxlY3RFbmdpbmUoZW5naW5lTmFtZSkge1xuXHRcdFx0aWYgKCF0aGlzLmVuZ2luZVNlbGVjdG9yKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5lbmdpbmVTZWxlY3Rvci5vcHRpb25zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iub3B0aW9uc1tpXS5zZWxlY3RlZCA9IHRoaXMuZW5naW5lU2VsZWN0b3Iub3B0aW9uc1tpXS52YWx1ZSA9PT0gZW5naW5lTmFtZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0c2FuaXRpemVJbnB1dCgpIHtcblx0XHRcdGxldCB2ID0gdGhpcy50ZXh0LnZhbHVlIHx8ICcnO1xuXHRcdFx0diA9IHYucmVwbGFjZSgvXihcXHN8XykrLywgJycpOyAvLyBUcmltIGxlYWRpbmcgYmxhbmtzIGFuZCB1bmRlcnNjb3Jlc1xuXHRcdFx0Y29uc3QgcmUgPSBuZXcgUmVnRXhwKGBeKCR7SEMuY2F0ZWdvcnlfcmVnZXhwfSk6YCk7XG5cdFx0XHRpZiAocmUudGVzdCh2KSkge1xuXHRcdFx0XHR2ID0gdi5zbGljZShNYXRoLm1heCgwLCB2LmluZGV4T2YoJzonKSArIDEpKS5yZXBsYWNlKC9eKFxcc3xfKSsvLCAnJyk7XG5cdFx0XHR9XG5cdFx0XHR2ID0gdi5yZXBsYWNlKC9cXHUyMDBFJC8sICcnKTsgLy8gVHJpbSBlbmRpbmcgbGVmdC10by1yaWdodCBtYXJrXG5cdFx0XHRpZiAoSEMuY2FwaXRhbGl6ZVBhZ2VOYW1lcykge1xuXHRcdFx0XHR2ID0gY2FwaXRhbGl6ZSh2KTtcblx0XHRcdH1cblx0XHRcdC8vIE9ubHkgdXBkYXRlIHRoZSBpbnB1dCBmaWVsZCBpZiB0aGVyZSBpcyBhIGRpZmZlcmVuY2UuIFZhcmlvdXMgYnJvd3NlcnMgb3RoZXJ3aXNlXG5cdFx0XHQvLyByZXNldCB0aGUgc2VsZWN0aW9uIGFuZCBjdXJzb3IgcG9zaXRpb24gYWZ0ZXIgZWFjaCB2YWx1ZSByZS1hc3NpZ25tZW50LlxuXHRcdFx0aWYgKHRoaXMudGV4dC52YWx1ZSAhPT0gbnVsbCAmJiB0aGlzLnRleHQudmFsdWUgIT09IHYpIHtcblx0XHRcdFx0dGhpcy50ZXh0LnZhbHVlID0gdjtcblx0XHRcdH1cblx0XHR9XG5cdFx0bWFrZUNhbGwodXJsLCBjYWxsYmFja09iaiwgZW5naW5lLCBxdWVyeUtleSwgY2xlYW5LZXkpIHtcblx0XHRcdGxldCBjYiA9IGNhbGxiYWNrT2JqO1xuXHRcdFx0Y29uc3QgZSA9IGVuZ2luZTtcblx0XHRcdGNvbnN0IHYgPSBxdWVyeUtleTtcblx0XHRcdGNvbnN0IHogPSBjbGVhbktleTtcblx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdFx0Y29uc3QgZG9uZSA9ICgpID0+IHtcblx0XHRcdFx0Y2IuY2FsbHNNYWRlKys7XG5cdFx0XHRcdGlmIChjYi5jYWxsc01hZGUgPT09IGNiLm5vZkNhbGxzKSB7XG5cdFx0XHRcdFx0aWYgKGNiLmV4aXN0cykge1xuXHRcdFx0XHRcdFx0Y2IuYWxsVGl0bGVzLmV4aXN0cyA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChjYi5ub3JtYWxpemVkKSB7XG5cdFx0XHRcdFx0XHRjYi5hbGxUaXRsZXMubm9ybWFsaXplZCA9IGNiLm5vcm1hbGl6ZWQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICghY2IuZG9udENhY2hlICYmICFzdWdnZXN0aW9uQ29uZmlnc1tjYi5lbmdpbmVOYW1lXS5jYWNoZVt6XSkge1xuXHRcdFx0XHRcdFx0c3VnZ2VzdGlvbkNvbmZpZ3NbY2IuZW5naW5lTmFtZV0uY2FjaGVbel0gPSBjYi5hbGxUaXRsZXM7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHNlbGYudGV4dC5yZWFkT25seSA9IGZhbHNlO1xuXHRcdFx0XHRcdGlmICghY2IuY2FuY2VsbGVkKSB7XG5cdFx0XHRcdFx0XHRzZWxmLnNob3dTdWdnZXN0aW9ucyhjYi5hbGxUaXRsZXMsIGNiLm5vQ29tcGxldGlvbiwgdiwgY2IuZW5naW5lTmFtZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChjYiA9PT0gc2VsZi5jYWxsYmFja09iaikge1xuXHRcdFx0XHRcdFx0c2VsZi5jYWxsYmFja09iaiA9IG51bGw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNiID0gdW5kZWZpbmVkO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0JC5nZXRKU09OKHVybCwgKGpzb24pID0+IHtcblx0XHRcdFx0Y29uc3QgdGl0bGVzID0gZS5oYW5kbGVyKGpzb24sIHopO1xuXHRcdFx0XHRpZiAodGl0bGVzICYmIHRpdGxlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0Y2IuYWxsVGl0bGVzID1cblx0XHRcdFx0XHRcdGNiLmFsbFRpdGxlcyA9PT0gbnVsbFxuXHRcdFx0XHRcdFx0XHQ/IHRpdGxlc1xuXHRcdFx0XHRcdFx0XHQ6IFsuLi5jYi5hbGxUaXRsZXMsIC4uLihBcnJheS5pc0FycmF5KHRpdGxlcykgPyB0aXRsZXMgOiBbdGl0bGVzXSldO1xuXHRcdFx0XHRcdGlmICh0aXRsZXMuZXhpc3RzKSB7XG5cdFx0XHRcdFx0XHRjYi5leGlzdHMgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAodGl0bGVzLm5vcm1hbGl6ZWQpIHtcblx0XHRcdFx0XHRcdGNiLm5vcm1hbGl6ZWQgPSB0aXRsZXMubm9ybWFsaXplZDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0ZG9uZSgpO1xuXHRcdFx0fSkuZmFpbCgocmVxKSA9PiB7XG5cdFx0XHRcdGlmICghcmVxKSB7XG5cdFx0XHRcdFx0bm9TdWdnZXN0aW9ucyA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2IuZG9udENhY2hlID0gdHJ1ZTtcblx0XHRcdFx0ZG9uZSgpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdGNhbGxiYWNrT2JqID0gbnVsbDtcblx0XHR0ZXh0Y2hhbmdlKGRvbnRfYXV0b2NvbXBsZXRlLCBmb3JjZSkge1xuXHRcdFx0Ly8gSGlkZSBhbGwgb3RoZXIgbGlzdHNcblx0XHRcdG1ha2VBY3RpdmUodGhpcyk7XG5cdFx0XHQvLyBHZXQgaW5wdXQgdmFsdWUsIG9taXQgc29ydCBrZXksIGlmIGFueVxuXHRcdFx0dGhpcy5zYW5pdGl6ZUlucHV0KCk7XG5cdFx0XHRsZXQgdiA9IHRoaXMudGV4dC52YWx1ZTtcblx0XHRcdC8vIERpc3JlZ2FyZCBhbnl0aGluZyBhZnRlciBhIHBpcGUuXG5cdFx0XHRjb25zdCBwaXBlID0gdi5pbmRleE9mKCd8Jyk7XG5cdFx0XHRpZiAocGlwZSA+PSAwKSB7XG5cdFx0XHRcdHRoaXMuY3VycmVudEtleSA9IHYuc2xpY2UoTWF0aC5tYXgoMCwgcGlwZSArIDEpKTtcblx0XHRcdFx0diA9IHYuc2xpY2UoMCwgTWF0aC5tYXgoMCwgcGlwZSkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5jdXJyZW50S2V5ID0gbnVsbDtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLmxhc3RJbnB1dCA9PT0gdiAmJiAhZm9yY2UpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fSAvLyBObyBjaGFuZ2Vcblx0XHRcdGlmICh0aGlzLmxhc3RJbnB1dCAhPT0gdikge1xuXHRcdFx0XHRjaGVja011bHRpSW5wdXQoKTtcblx0XHRcdH1cblx0XHRcdHRoaXMubGFzdElucHV0ID0gdjtcblx0XHRcdHRoaXMubGFzdFJlYWxJbnB1dCA9IHY7XG5cdFx0XHQvLyBNYXJrIGJsYWNrbGlzdGVkIGlucHV0cy5cblx0XHRcdHRoaXMub2suZGlzYWJsZWQgPSB2Lmxlbmd0aCA+IDAgJiYgSEMuYmxhY2tsaXN0ICYmIEhDLmJsYWNrbGlzdC50ZXN0KHYpO1xuXHRcdFx0aWYgKG5vU3VnZ2VzdGlvbnMpIHtcblx0XHRcdFx0Ly8gTm8gQWpheDoganVzdCBtYWtlIHN1cmUgdGhlIGxpc3QgaXMgaGlkZGVuXG5cdFx0XHRcdGlmICh0aGlzLmxpc3QpIHtcblx0XHRcdFx0XHR0aGlzLmxpc3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodGhpcy5lbmdpbmVTZWxlY3Rvcikge1xuXHRcdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodGhpcy5pY29uKSB7XG5cdFx0XHRcdFx0dGhpcy5pY29uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHYubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHRoaXMuc2hvd1N1Z2dlc3Rpb25zKFtdKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0bGV0IGNsZWFuS2V5ID0gdi5yZXBsYWNlKC9bXFx1MjAwRVxcdTIwMEZcXHUyMDJBLVxcdTIwMkVdL2csICcnKS5yZXBsYWNlKHdpa2lUZXh0QmxhbmtSRSwgJyAnKTtcblx0XHRcdGNsZWFuS2V5ID0gcmVwbGFjZVNob3J0Y3V0cyhjbGVhbktleSwgSEMuc2hvcnRjdXRzKTtcblx0XHRcdGNsZWFuS2V5ID0gY2xlYW5LZXkudHJpbSgpO1xuXHRcdFx0aWYgKGNsZWFuS2V5Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHR0aGlzLnNob3dTdWdnZXN0aW9ucyhbXSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLmNhbGxiYWNrT2JqKSB7XG5cdFx0XHRcdHRoaXMuY2FsbGJhY2tPYmouY2FuY2VsbGVkID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IGVuZ2luZU5hbWUgPSBzdWdnZXN0aW9uQ29uZmlnc1t0aGlzLmVuZ2luZV0gPyB0aGlzLmVuZ2luZSA6ICdjb21iaW5lZCc7XG5cdFx0XHRkb250X2F1dG9jb21wbGV0ZSB8fD0gc3VnZ2VzdGlvbkNvbmZpZ3NbZW5naW5lTmFtZV0ubm9Db21wbGV0aW9uO1xuXHRcdFx0aWYgKHN1Z2dlc3Rpb25Db25maWdzW2VuZ2luZU5hbWVdLmNhY2hlW2NsZWFuS2V5XSkge1xuXHRcdFx0XHR0aGlzLnNob3dTdWdnZXN0aW9ucyhzdWdnZXN0aW9uQ29uZmlnc1tlbmdpbmVOYW1lXS5jYWNoZVtjbGVhbktleV0sIGRvbnRfYXV0b2NvbXBsZXRlLCB2LCBlbmdpbmVOYW1lKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3Qge2VuZ2luZXN9ID0gc3VnZ2VzdGlvbkNvbmZpZ3NbZW5naW5lTmFtZV07XG5cdFx0XHR0aGlzLmNhbGxiYWNrT2JqID0ge1xuXHRcdFx0XHRhbGxUaXRsZXM6IG51bGwsXG5cdFx0XHRcdGNhbGxzTWFkZTogMCxcblx0XHRcdFx0bm9mQ2FsbHM6IGVuZ2luZXMubGVuZ3RoLFxuXHRcdFx0XHRub0NvbXBsZXRpb246IGRvbnRfYXV0b2NvbXBsZXRlLFxuXHRcdFx0XHRlbmdpbmVOYW1lLFxuXHRcdFx0fTtcblx0XHRcdHRoaXMubWFrZUNhbGxzKGVuZ2luZXMsIHRoaXMuY2FsbGJhY2tPYmosIHYsIGNsZWFuS2V5KTtcblx0XHR9XG5cdFx0bWFrZUNhbGxzKGVuZ2luZXMsIGNiLCB2LCBjbGVhbktleSkge1xuXHRcdFx0Zm9yIChjb25zdCBlbmdpbmVfIG9mIGVuZ2luZXMpIHtcblx0XHRcdFx0Y29uc3QgZW5naW5lID0gc3VnZ2VzdGlvbkVuZ2luZXNbZW5naW5lX107XG5cdFx0XHRcdGNvbnN0IHVybCA9IGNvbmYud2dTY3JpcHRQYXRoICsgZW5naW5lLnVyaS5yZXBsYWNlKC9cXCQxL2csIGVuY29kZVVSSUNvbXBvbmVudChjbGVhbktleSkpO1xuXHRcdFx0XHR0aGlzLm1ha2VDYWxsKHVybCwgY2IsIGVuZ2luZSwgdiwgY2xlYW5LZXkpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRzaG93U3VnZ2VzdGlvbnModGl0bGVzLCBkb250QXV0b2NvbXBsZXRlLCBxdWVyeUtleSwgZW5naW5lTmFtZSkge1xuXHRcdFx0dGhpcy50ZXh0LnJlYWRPbmx5ID0gZmFsc2U7XG5cdFx0XHR0aGlzLmRhYiA9IG51bGw7XG5cdFx0XHR0aGlzLnNob3dzTGlzdCA9IGZhbHNlO1xuXHRcdFx0aWYgKCF0aGlzLmxpc3QpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKG5vU3VnZ2VzdGlvbnMpIHtcblx0XHRcdFx0aWYgKHRoaXMubGlzdCkge1xuXHRcdFx0XHRcdHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0aGlzLmVuZ2luZVNlbGVjdG9yKSB7XG5cdFx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0aGlzLmljb24pIHtcblx0XHRcdFx0XHR0aGlzLmljb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmlucHV0RXhpc3RzID0gdHJ1ZTsgLy8gRGVmYXVsdC4uLlxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmVuZ2luZU5hbWUgPSBlbmdpbmVOYW1lO1xuXHRcdFx0aWYgKGVuZ2luZU5hbWUpIHtcblx0XHRcdFx0aWYgKCF0aGlzLmVuZ2luZVNlbGVjdG9yKSB7XG5cdFx0XHRcdFx0dGhpcy5lbmdpbmVOYW1lID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICh0aGlzLmVuZ2luZVNlbGVjdG9yKSB7XG5cdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdH1cblx0XHRcdGlmIChxdWVyeUtleSkge1xuXHRcdFx0XHRpZiAodGhpcy5sYXN0SW5wdXQuaW5kZXhPZihxdWVyeUtleSkpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdHRoaXMubGFzdFF1ZXJ5ICYmXG5cdFx0XHRcdFx0dGhpcy5sYXN0SW5wdXQuaW5kZXhPZih0aGlzLmxhc3RRdWVyeSkgPT09IDAgJiZcblx0XHRcdFx0XHR0aGlzLmxhc3RRdWVyeS5sZW5ndGggPiBxdWVyeUtleS5sZW5ndGhcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmxhc3RRdWVyeSA9IHF1ZXJ5S2V5O1xuXHRcdFx0Ly8gR2V0IGN1cnJlbnQgaW5wdXQgdGV4dFxuXHRcdFx0bGV0IHYgPSB0aGlzLnRleHQudmFsdWUuc3BsaXQoJ3wnKTtcblx0XHRcdGNvbnN0IGtleSA9IHYubGVuZ3RoID4gMSA/IGB8JHt2WzFdfWAgOiAnJztcblx0XHRcdHYgPSBIQy5jYXBpdGFsaXplUGFnZU5hbWVzID8gY2FwaXRhbGl6ZSh2WzBdKSA6IHZbMF07XG5cdFx0XHRsZXQgdk5vcm1hbGl6ZWQgPSB2O1xuXHRcdFx0Y29uc3Qga25vd25Ub0V4aXN0ID0gdGl0bGVzICYmIHRpdGxlcy5leGlzdHM7XG5cdFx0XHRsZXQgaTtcblx0XHRcdGlmICh0aXRsZXMpIHtcblx0XHRcdFx0aWYgKHRpdGxlcy5ub3JtYWxpemVkICYmIHYuaW5kZXhPZihxdWVyeUtleSkgPT09IDApIHtcblx0XHRcdFx0XHQvLyBXZSBnb3QgYmFjayBhIGRpZmZlcmVudCBub3JtYWxpemF0aW9uIHRoYW4gd2hhdCBpcyBpbiB0aGUgaW5wdXQgZmllbGRcblx0XHRcdFx0XHR2Tm9ybWFsaXplZCA9IHRpdGxlcy5ub3JtYWxpemVkICsgdi5zbGljZShxdWVyeUtleS5sZW5ndGgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IHZMb3cgPSB2Tm9ybWFsaXplZC50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0XHQvLyBTdHJpcCBibGFja2xpc3RlZCBjYXRlZ29yaWVzXG5cdFx0XHRcdGlmIChIQy5ibGFja2xpc3QpIHtcblx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgdGl0bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRpZiAoSEMuYmxhY2tsaXN0LnRlc3QodGl0bGVzW2ldKSkge1xuXHRcdFx0XHRcdFx0XHR0aXRsZXMuc3BsaWNlKGksIDEpO1xuXHRcdFx0XHRcdFx0XHRpLS07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHRpdGxlcy5zb3J0KChhLCBiKSA9PiB7XG5cdFx0XHRcdFx0aWYgKGEgPT09IGIpIHtcblx0XHRcdFx0XHRcdHJldHVybiAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoYS5pbmRleE9mKGIpID09PSAwKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gMTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gYSBiZWdpbnMgd2l0aCBiOiBhID4gYlxuXHRcdFx0XHRcdGlmIChiLmluZGV4T2YoYSkgPT09IDApIHtcblx0XHRcdFx0XHRcdHJldHVybiAtMTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gYiBiZWdpbnMgd2l0aCBhOiBhIDwgYlxuXHRcdFx0XHRcdC8vIE9wZW5zZWFyY2ggbWF5IHJldHVybiBzdHVmZiBub3QgYmVnaW5uaW5nIHdpdGggdGhlIHNlYXJjaCBwcmVmaXghXG5cdFx0XHRcdFx0bGV0IHByZWZpeE1hdGNoQSA9IGEuaW5kZXhPZih2Tm9ybWFsaXplZCkgPT09IDAgPyAxIDogMDtcblx0XHRcdFx0XHRsZXQgcHJlZml4TWF0Y2hCID0gYi5pbmRleE9mKHZOb3JtYWxpemVkKSA9PT0gMCA/IDEgOiAwO1xuXHRcdFx0XHRcdGlmIChwcmVmaXhNYXRjaEEgIT09IHByZWZpeE1hdGNoQikge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHByZWZpeE1hdGNoQiAtIHByZWZpeE1hdGNoQTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gQ2FzZS1pbnNlbnNpdGl2ZSBwcmVmaXggbWF0Y2ghXG5cdFx0XHRcdFx0Y29uc3QgYUxvdyA9IGEudG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0XHRjb25zdCBiTG93ID0gYi50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0XHRcdHByZWZpeE1hdGNoQSA9IGFMb3cuaW5kZXhPZih2TG93KSA9PT0gMCA/IDEgOiAwO1xuXHRcdFx0XHRcdHByZWZpeE1hdGNoQiA9IGJMb3cuaW5kZXhPZih2TG93KSA9PT0gMCA/IDEgOiAwO1xuXHRcdFx0XHRcdGlmIChwcmVmaXhNYXRjaEEgIT09IHByZWZpeE1hdGNoQikge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHByZWZpeE1hdGNoQiAtIHByZWZpeE1hdGNoQTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGEgPCBiKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gLTE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChiIDwgYSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIDE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiAwO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0Ly8gUmVtb3ZlIGR1cGxpY2F0ZXMgYW5kIHNlbGYtcmVmZXJlbmNlc1xuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgdGl0bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdFx0KGkgKyAxIDwgdGl0bGVzLmxlbmd0aCAmJiB0aXRsZXNbaV0gPT09IHRpdGxlc1tpICsgMV0pIHx8XG5cdFx0XHRcdFx0XHQoY29uZi53Z05hbWVzcGFjZU51bWJlciA9PT0gMTQgJiYgdGl0bGVzW2ldID09PSBjb25mLndnVGl0bGUpXG5cdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHR0aXRsZXMuc3BsaWNlKGksIDEpO1xuXHRcdFx0XHRcdFx0aS0tO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKCF0aXRsZXMgfHwgdGl0bGVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRpZiAodGhpcy5saXN0KSB7XG5cdFx0XHRcdFx0dGhpcy5saXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRoaXMuZW5naW5lU2VsZWN0b3IpIHtcblx0XHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGVuZ2luZU5hbWUgJiYgc3VnZ2VzdGlvbkNvbmZpZ3NbZW5naW5lTmFtZV0gJiYgIXN1Z2dlc3Rpb25Db25maWdzW2VuZ2luZU5hbWVdLnRlbXApIHtcblx0XHRcdFx0XHRpZiAodGhpcy5pY29uKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmljb24uc3JjID0gSEMuZXhpc3RzTm87XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuaW5wdXRFeGlzdHMgPSBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBbZmlyc3RUaXRsZV0gPSB0aXRsZXM7XG5cdFx0XHRjb25zdCBjb21wbGV0ZWQgPSB0aGlzLmF1dG9Db21wbGV0ZShmaXJzdFRpdGxlLCB2LCB2Tm9ybWFsaXplZCwga2V5LCBkb250QXV0b2NvbXBsZXRlKTtcblx0XHRcdGNvbnN0IGV4aXN0aW5nID0gY29tcGxldGVkIHx8IGtub3duVG9FeGlzdCB8fCBmaXJzdFRpdGxlID09PSByZXBsYWNlU2hvcnRjdXRzKHYsIEhDLnNob3J0Y3V0cyk7XG5cdFx0XHRpZiAoZW5naW5lTmFtZSAmJiBzdWdnZXN0aW9uQ29uZmlnc1tlbmdpbmVOYW1lXSAmJiAhc3VnZ2VzdGlvbkNvbmZpZ3NbZW5naW5lTmFtZV0udGVtcCkge1xuXHRcdFx0XHR0aGlzLmljb24uc3JjID0gZXhpc3RpbmcgPyBIQy5leGlzdHNZZXMgOiBIQy5leGlzdHNObztcblx0XHRcdFx0dGhpcy5pbnB1dEV4aXN0cyA9IGV4aXN0aW5nO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGNvbXBsZXRlZCkge1xuXHRcdFx0XHR0aGlzLmxhc3RJbnB1dCA9IGZpcnN0VGl0bGU7XG5cdFx0XHRcdGlmICh0aXRsZXMubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRcdFx0dGhpcy5saXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdFx0aWYgKHRoaXMuZW5naW5lU2VsZWN0b3IpIHtcblx0XHRcdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyAoUmUtKWZpbGwgdGhlIGxpc3Rcblx0XHRcdHdoaWxlICh0aGlzLmxpc3QuZmlyc3RDaGlsZCkge1xuXHRcdFx0XHR0aGlzLmxpc3QuZmlyc3RDaGlsZC5yZW1vdmUoKTtcblx0XHRcdH1cblx0XHRcdGZvciAoaSA9IDA7IGkgPCB0aXRsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y29uc3Qgb3B0ID0gbWFrZSgnb3B0aW9uJyk7XG5cdFx0XHRcdG9wdC5hcHBlbmQobWFrZSh0aXRsZXNbaV0sIHRydWUpKTtcblx0XHRcdFx0b3B0LnNlbGVjdGVkID0gY29tcGxldGVkICYmIGkgPT09IDA7XG5cdFx0XHRcdHRoaXMubGlzdC5hcHBlbmQob3B0KTtcblx0XHRcdH1cblx0XHRcdHRoaXMuZGlzcGxheUxpc3QoKTtcblx0XHR9XG5cdFx0ZGlzcGxheUxpc3QoKSB7XG5cdFx0XHR0aGlzLnNob3dzTGlzdCA9IHRydWU7XG5cdFx0XHRpZiAoIXRoaXMuaXNfYWN0aXZlKSB7XG5cdFx0XHRcdHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHRpZiAodGhpcy5lbmdpbmVTZWxlY3Rvcikge1xuXHRcdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRsZXQgbm9mSXRlbXMgPSB0aGlzLmxpc3Qub3B0aW9ucy5sZW5ndGggPiBIQy5saXN0U2l6ZSA/IEhDLmxpc3RTaXplIDogdGhpcy5saXN0Lm9wdGlvbnMubGVuZ3RoO1xuXHRcdFx0aWYgKG5vZkl0ZW1zIDw9IDEpIHtcblx0XHRcdFx0bm9mSXRlbXMgPSAyO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5saXN0LnNpemUgPSBub2ZJdGVtcztcblx0XHRcdHRoaXMubGlzdC5zdHlsZS5hbGlnbiA9IGlzX3J0bCA/ICdyaWdodCcgOiAnbGVmdCc7XG5cdFx0XHR0aGlzLmxpc3Quc3R5bGUuekluZGV4ID0gNTtcblx0XHRcdHRoaXMubGlzdC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG5cdFx0XHQvLyBDb21wdXRlIGluaXRpYWwgbGlzdCBwb3NpdGlvbi4gRmlyc3QgdGhlIGhlaWdodC5cblx0XHRcdGNvbnN0IGFuY2hvciA9IGlzX3J0bCA/ICdyaWdodCcgOiAnbGVmdCc7XG5cdFx0XHRsZXQgbGlzdGggPSAwO1xuXHRcdFx0aWYgKHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcblx0XHRcdFx0Ly8gT2ZmLXNjcmVlbiBkaXNwbGF5IHRvIGdldCB0aGUgaGVpZ2h0XG5cdFx0XHRcdHRoaXMubGlzdC5zdHlsZS50b3AgPSBgJHt0aGlzLnRleHQub2Zmc2V0VG9wfXB4YDtcblx0XHRcdFx0dGhpcy5saXN0LnN0eWxlW2FuY2hvcl0gPSAnLTEwMDAwcHgnO1xuXHRcdFx0XHR0aGlzLmxpc3Quc3R5bGUuZGlzcGxheSA9ICcnO1xuXHRcdFx0XHRsaXN0aCA9IHRoaXMubGlzdC5vZmZzZXRIZWlnaHQ7XG5cdFx0XHRcdHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bGlzdGggPSB0aGlzLmxpc3Qub2Zmc2V0SGVpZ2h0O1xuXHRcdFx0fVxuXHRcdFx0Ly8gQXBwcm94aW1hdGUgY2FsY3VsYXRpb24gb2YgbWF4aW11bSBsaXN0IHNpemVcblx0XHRcdGxldCBtYXhMaXN0SGVpZ2h0ID0gbGlzdGg7XG5cdFx0XHRpZiAobm9mSXRlbXMgPCBIQy5saXN0U2l6ZSkge1xuXHRcdFx0XHRtYXhMaXN0SGVpZ2h0ID0gKGxpc3RoIC8gbm9mSXRlbXMpICogSEMubGlzdFNpemU7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCB2aWV3cG9ydCA9ICh3aGF0KSA9PiB7XG5cdFx0XHRcdGlmIChpc193ZWJraXQgJiYgIWRvY3VtZW50LmV2YWx1YXRlKSB7XG5cdFx0XHRcdFx0Ly8gU2FmYXJpIDwgMy4wXG5cdFx0XHRcdFx0cmV0dXJuIHdpbmRvd1tgaW5uZXIke3doYXR9YF07XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgcyA9IGBjbGllbnQke3doYXR9YDtcblx0XHRcdFx0aWYgKHdpbmRvdy5vcGVyYSkge1xuXHRcdFx0XHRcdHJldHVybiAkKCdib2R5JylbMF1bc107XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRbc10gOiAwKSB8fCAkKCdib2R5JylbMF1bc10gfHwgMDtcblx0XHRcdH07XG5cdFx0XHRjb25zdCBzY3JvbGxfb2Zmc2V0ID0gKHdoYXQpID0+IHtcblx0XHRcdFx0Y29uc3QgcyA9IGBzY3JvbGwke3doYXR9YDtcblx0XHRcdFx0bGV0IHJlc3VsdCA9IChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRbc10gOiAwKSB8fCAkKCdib2R5JylbMF1bc10gfHwgMDtcblx0XHRcdFx0aWYgKGlzX3J0bCAmJiB3aGF0ID09PSAnTGVmdCcpIHtcblx0XHRcdFx0XHQvLyBSVEwgaW5jb25zaXN0ZW5jaWVzLlxuXHRcdFx0XHRcdC8vIEZGOiAwIGF0IHRoZSBmYXIgcmlnaHQsIHRoZW4gaW5jcmVhc2luZ2x5IG5lZ2F0aXZlIHZhbHVlcy5cblx0XHRcdFx0XHQvLyBJRSA+PSA4OiAwIGF0IHRoZSBmYXIgcmlnaHQsIHRoZW4gaW5jcmVhc2luZ2x5IHBvc2l0aXZlIHZhbHVlcy5cblx0XHRcdFx0XHQvLyBXZWJraXQ6IHNjcm9sbFdpZHRoIC0gY2xpZW50V2lkdGggYXQgdGhlIGZhciByaWdodCwgdGhlbiBkb3duIHRvIHplcm8uXG5cdFx0XHRcdFx0Ly8gT3BlcmE6IGRvbid0IGtub3cuLi5cblx0XHRcdFx0XHRpZiAocmVzdWx0IDwgMCkge1xuXHRcdFx0XHRcdFx0cmVzdWx0ID0gLXJlc3VsdDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKCFpc193ZWJraXQpIHtcblx0XHRcdFx0XHRcdHJlc3VsdCA9IHNjcm9sbF9vZmZzZXQoJ1dpZHRoJykgLSB2aWV3cG9ydCgnV2lkdGgnKSAtIHJlc3VsdDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gTm93IGFsbCBoYXZlIHdlYmtpdCBiZWhhdmlvciwgaS5lLiB6ZXJvIGlmIGF0IHRoZSBsZWZ0bW9zdCBlZGdlLlxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9O1xuXHRcdFx0Y29uc3QgcG9zaXRpb24gPSAobm9kZSkgPT4ge1xuXHRcdFx0XHQvLyBTdHJpcHBlZC1kb3duIHNpbXBsaWZpZWQgcG9zaXRpb24gZnVuY3Rpb24uIEl0J3MgZ29vZCBlbm91Z2ggZm9yIG91ciBwdXJwb3Nlcy5cblx0XHRcdFx0aWYgKG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KSB7XG5cdFx0XHRcdFx0Y29uc3QgYm94ID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0eDogTWF0aC5yb3VuZChib3gubGVmdCArIHNjcm9sbF9vZmZzZXQoJ0xlZnQnKSksXG5cdFx0XHRcdFx0XHR5OiBNYXRoLnJvdW5kKGJveC50b3AgKyBzY3JvbGxfb2Zmc2V0KCdUb3AnKSksXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXHRcdFx0XHRsZXQgdCA9IDA7XG5cdFx0XHRcdGxldCBsID0gMDtcblx0XHRcdFx0ZG8ge1xuXHRcdFx0XHRcdHQgKz0gbm9kZS5vZmZzZXRUb3AgfHwgMDtcblx0XHRcdFx0XHRsICs9IG5vZGUub2Zmc2V0TGVmdCB8fCAwO1xuXHRcdFx0XHRcdG5vZGUgPSBub2RlLm9mZnNldFBhcmVudDtcblx0XHRcdFx0fSB3aGlsZSAobm9kZSk7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0eDogbCxcblx0XHRcdFx0XHR5OiB0LFxuXHRcdFx0XHR9O1xuXHRcdFx0fTtcblx0XHRcdGNvbnN0IHRleHRQb3MgPSBwb3NpdGlvbih0aGlzLnRleHQpO1xuXHRcdFx0Y29uc3QgbmwgPSAwO1xuXHRcdFx0bGV0IG50ID0gMDtcblx0XHRcdC8vIE9wZXJhIDkuNSBzb21laG93IGhhcyBvZmZzZXRXaWR0aCA9IDAgaGVyZT8/IFVzZSB0aGUgbmV4dCBiZXN0IHZhbHVlLi4uXG5cdFx0XHRsZXQgb2Zmc2V0ID0gMDtcblx0XHRcdGNvbnN0IHRleHRCb3hXaWR0aCA9IHRoaXMudGV4dC5vZmZzZXRXaWR0aCB8fCB0aGlzLnRleHQuY2xpZW50V2lkdGg7XG5cdFx0XHRpZiAodGhpcy5lbmdpbmVOYW1lKSB7XG5cdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUuekluZGV4ID0gNTtcblx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG5cdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUud2lkdGggPSBgJHt0ZXh0Qm94V2lkdGh9cHhgO1xuXHRcdFx0XHQvLyBGaWd1cmUgb3V0IHRoZSBoZWlnaHQgb2YgdGhpcyBzZWxlY3RvcjogZGlzcGxheSBpdCBvZmYtc2NyZWVuLCB0aGVuIGhpZGUgaXQgYWdhaW4uXG5cdFx0XHRcdGlmICh0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuXHRcdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGVbYW5jaG9yXSA9ICctMTAwMDBweCc7XG5cdFx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS50b3AgPSAnMCc7XG5cdFx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cdFx0XHRcdFx0b2Zmc2V0ID0gdGhpcy5lbmdpbmVTZWxlY3Rvci5vZmZzZXRIZWlnaHQ7XG5cdFx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdG9mZnNldCA9IHRoaXMuZW5naW5lU2VsZWN0b3Iub2Zmc2V0SGVpZ2h0O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGVbYW5jaG9yXSA9IGAke25sfXB4YDtcblx0XHRcdH1cblx0XHRcdGlmICh0ZXh0UG9zLnkgPCBtYXhMaXN0SGVpZ2h0ICsgb2Zmc2V0ICsgMSkge1xuXHRcdFx0XHQvLyBUaGUgbGlzdCBtaWdodCBleHRlbmQgYmV5b25kIHRoZSB1cHBlciBib3JkZXIgb2YgdGhlIHBhZ2UuIExldCdzIGF2b2lkIHRoYXQgYnkgcGxhY2luZyBpdFxuXHRcdFx0XHQvLyBiZWxvdyB0aGUgaW5wdXQgdGV4dCBmaWVsZC5cblx0XHRcdFx0bnQgPSB0aGlzLnRleHQub2Zmc2V0SGVpZ2h0ICsgb2Zmc2V0ICsgMTtcblx0XHRcdFx0aWYgKHRoaXMuZW5naW5lTmFtZSkge1xuXHRcdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUudG9wID0gYCR7dGhpcy50ZXh0Lm9mZnNldEhlaWdodH1weGA7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG50ID0gLWxpc3RoIC0gb2Zmc2V0IC0gMTtcblx0XHRcdFx0aWYgKHRoaXMuZW5naW5lTmFtZSkge1xuXHRcdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUudG9wID0gYCR7LShvZmZzZXQgKyAxKX1weGA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHRoaXMubGlzdC5zdHlsZS50b3AgPSBgJHtudH1weGA7XG5cdFx0XHR0aGlzLmxpc3Quc3R5bGUud2lkdGggPSAnJzsgLy8gTm8gZml4ZWQgd2lkdGggKHlldClcblx0XHRcdHRoaXMubGlzdC5zdHlsZVthbmNob3JdID0gYCR7bmx9cHhgO1xuXHRcdFx0aWYgKHRoaXMuZW5naW5lTmFtZSkge1xuXHRcdFx0XHR0aGlzLnNlbGVjdEVuZ2luZSh0aGlzLmVuZ2luZU5hbWUpO1xuXHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnJztcblx0XHRcdH1cblx0XHRcdHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0XHRcdC8vIFNldCB0aGUgd2lkdGggb2YgdGhlIGxpc3Rcblx0XHRcdGlmICh0aGlzLmxpc3Qub2Zmc2V0V2lkdGggPCB0ZXh0Qm94V2lkdGgpIHtcblx0XHRcdFx0dGhpcy5saXN0LnN0eWxlLndpZHRoID0gYCR7dGV4dEJveFdpZHRofXB4YDtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Ly8gSWYgdGhlIGxpc3QgaXMgd2lkZXIgdGhhbiB0aGUgdGV4dGJveDogbWFrZSBzdXJlIGl0IGZpdHMgaG9yaXpvbnRhbGx5IGludG8gdGhlIGJyb3dzZXIgd2luZG93XG5cdFx0XHRjb25zdCBzY3JvbGwgPSBzY3JvbGxfb2Zmc2V0KCdMZWZ0Jyk7XG5cdFx0XHRjb25zdCB2aWV3X3cgPSB2aWV3cG9ydCgnV2lkdGgnKTtcblx0XHRcdGxldCB3ID0gdGhpcy5saXN0Lm9mZnNldFdpZHRoO1xuXHRcdFx0Y29uc3QgbF9wb3MgPSBwb3NpdGlvbih0aGlzLmxpc3QpO1xuXHRcdFx0bGV0IGxlZnQgPSBsX3Bvcy54O1xuXHRcdFx0bGV0IHJpZ2h0ID0gbGVmdCArIHc7XG5cdFx0XHRpZiAobGVmdCA8IHNjcm9sbCB8fCByaWdodCA+IHNjcm9sbCArIHZpZXdfdykge1xuXHRcdFx0XHRpZiAodyA+IHZpZXdfdykge1xuXHRcdFx0XHRcdHcgPSB2aWV3X3c7XG5cdFx0XHRcdFx0dGhpcy5saXN0LnN0eWxlLndpZHRoID0gYCR7d31weGA7XG5cdFx0XHRcdFx0aWYgKGlzX3J0bCkge1xuXHRcdFx0XHRcdFx0bGVmdCA9IHJpZ2h0IC0gdztcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmlnaHQgPSBsZWZ0ICsgdztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0bGV0IHJlbGF0aXZlX29mZnNldCA9IDA7XG5cdFx0XHRcdGlmIChsZWZ0IDwgc2Nyb2xsKSB7XG5cdFx0XHRcdFx0cmVsYXRpdmVfb2Zmc2V0ID0gc2Nyb2xsIC0gbGVmdDtcblx0XHRcdFx0fSBlbHNlIGlmIChyaWdodCA+IHNjcm9sbCArIHZpZXdfdykge1xuXHRcdFx0XHRcdHJlbGF0aXZlX29mZnNldCA9IC0ocmlnaHQgLSBzY3JvbGwgLSB2aWV3X3cpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChpc19ydGwpIHtcblx0XHRcdFx0XHRyZWxhdGl2ZV9vZmZzZXQgPSAtcmVsYXRpdmVfb2Zmc2V0O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChyZWxhdGl2ZV9vZmZzZXQpIHtcblx0XHRcdFx0XHR0aGlzLmxpc3Quc3R5bGVbYW5jaG9yXSA9IGAke25sICsgcmVsYXRpdmVfb2Zmc2V0fXB4YDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRhdXRvQ29tcGxldGUobmV3VmFsLCBhY3RWYWwsIG5vcm1hbGl6ZWRBY3RWYWwsIGtleSwgZG9udE1vZGlmeSkge1xuXHRcdFx0aWYgKG5ld1ZhbCA9PT0gYWN0VmFsKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGRvbnRNb2RpZnkgfHwgdGhpcy5pbWUgfHwgIXRoaXMuY2FuU2VsZWN0KCkpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0Ly8gSWYgd2UgY2FuJ3Qgc2VsZWN0IHByb3Blcmx5IG9yIGFuIElNRSBjb21wb3NpdGlvbiBpcyBvbmdvaW5nLCBhdXRvY29tcGxldGlvbiB3b3VsZCBiZSBhIG1ham9yIGFubm95YW5jZSB0byB0aGUgdXNlci5cblx0XHRcdGlmIChuZXdWYWwuaW5kZXhPZihhY3RWYWwpKSB7XG5cdFx0XHRcdC8vIE1heWJlIGl0J2xsIHdvcmsgd2l0aCB0aGUgbm9ybWFsaXplZCB2YWx1ZSAoTkZDKT9cblx0XHRcdFx0aWYgKG5vcm1hbGl6ZWRBY3RWYWwgJiYgbmV3VmFsLmluZGV4T2Yobm9ybWFsaXplZEFjdFZhbCkgPT09IDApIHtcblx0XHRcdFx0XHRpZiAodGhpcy5sYXN0UmVhbElucHV0ID09PSBhY3RWYWwpIHtcblx0XHRcdFx0XHRcdHRoaXMubGFzdFJlYWxJbnB1dCA9IG5vcm1hbGl6ZWRBY3RWYWw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGFjdFZhbCA9IG5vcm1hbGl6ZWRBY3RWYWw7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyBBY3R1YWwgaW5wdXQgaXMgYSBwcmVmaXggb2YgdGhlIG5ldyB0ZXh0LiBGaWxsIGluIG5ldyB0ZXh0LCBzZWxlY3RpbmcgdGhlIG5ld2x5IGFkZGVkIHN1ZmZpeFxuXHRcdFx0Ly8gc3VjaCB0aGF0IGl0IGNhbiBiZSBlYXNpbHkgcmVtb3ZlZCBieSB0eXBpbmcgYmFja3NwYWNlIGlmIHRoZSBzdWdnZXN0aW9uIGlzIHVud2FudGVkLlxuXHRcdFx0dGhpcy50ZXh0LmZvY3VzKCk7XG5cdFx0XHR0aGlzLnRleHQudmFsdWUgPSBuZXdWYWwgKyBrZXk7XG5cdFx0XHR0aGlzLnNldFNlbGVjdGlvbihhY3RWYWwubGVuZ3RoLCBuZXdWYWwubGVuZ3RoKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRjYW5TZWxlY3QoKSB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHR0aGlzLnRleHQuc2V0U2VsZWN0aW9uUmFuZ2UgfHxcblx0XHRcdFx0dGhpcy50ZXh0LmNyZWF0ZVRleHRSYW5nZSB8fFxuXHRcdFx0XHQodGhpcy50ZXh0LnNlbGVjdGlvblN0YXJ0ICE9PSB1bmRlZmluZWQgJiYgdGhpcy50ZXh0LnNlbGVjdGlvbkVuZCAhPT0gdW5kZWZpbmVkKVxuXHRcdFx0KTtcblx0XHR9XG5cdFx0c2V0U2VsZWN0aW9uKGZyb20sIHRvKSB7XG5cdFx0XHQvLyB0aGlzLnRleHQgbXVzdCBiZSBmb2N1c2VkIChhdCBsZWFzdCBvbiBJRSlcblx0XHRcdGlmICghdGhpcy50ZXh0LnZhbHVlKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLnRleHQuc2V0U2VsZWN0aW9uUmFuZ2UpIHtcblx0XHRcdFx0Ly8gZS5nLiBraHRtbFxuXHRcdFx0XHR0aGlzLnRleHQuc2V0U2VsZWN0aW9uUmFuZ2UoZnJvbSwgdG8pO1xuXHRcdFx0fSBlbHNlIGlmICh0aGlzLnRleHQuc2VsZWN0aW9uU3RhcnQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRpZiAoZnJvbSA+IHRoaXMudGV4dC5zZWxlY3Rpb25TdGFydCkge1xuXHRcdFx0XHRcdHRoaXMudGV4dC5zZWxlY3Rpb25FbmQgPSB0bztcblx0XHRcdFx0XHR0aGlzLnRleHQuc2VsZWN0aW9uU3RhcnQgPSBmcm9tO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMudGV4dC5zZWxlY3Rpb25TdGFydCA9IGZyb207XG5cdFx0XHRcdFx0dGhpcy50ZXh0LnNlbGVjdGlvbkVuZCA9IHRvO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMudGV4dC5jcmVhdGVUZXh0UmFuZ2UpIHtcblx0XHRcdFx0Ly8gSUVcblx0XHRcdFx0Y29uc3QgbmV3X3NlbGVjdGlvbiA9IHRoaXMudGV4dC5jcmVhdGVUZXh0UmFuZ2UoKTtcblx0XHRcdFx0bmV3X3NlbGVjdGlvbi5tb3ZlKCdjaGFyYWN0ZXInLCBmcm9tKTtcblx0XHRcdFx0bmV3X3NlbGVjdGlvbi5tb3ZlRW5kKCdjaGFyYWN0ZXInLCB0byAtIGZyb20pO1xuXHRcdFx0XHRuZXdfc2VsZWN0aW9uLnNlbGVjdCgpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRnZXRTZWxlY3Rpb24oKSB7XG5cdFx0XHRsZXQgZnJvbSA9IDA7XG5cdFx0XHQvLyB0aGlzLnRleHQgbXVzdCBiZSBmb2N1c2VkIChhdCBsZWFzdCBvbiBJRSlcblx0XHRcdGxldCB0byA9IDA7XG5cdFx0XHRpZiAoIXRoaXMudGV4dC52YWx1ZSkge1xuXHRcdFx0XHQvLyBObyB0ZXh0LlxuXHRcdFx0fSBlbHNlIGlmICh0aGlzLnRleHQuc2VsZWN0aW9uU3RhcnQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRmcm9tID0gdGhpcy50ZXh0LnNlbGVjdGlvblN0YXJ0O1xuXHRcdFx0XHR0byA9IHRoaXMudGV4dC5zZWxlY3Rpb25FbmQ7XG5cdFx0XHR9IGVsc2UgaWYgKGRvY3VtZW50LnNlbGVjdGlvbiAmJiBkb2N1bWVudC5zZWxlY3Rpb24uY3JlYXRlUmFuZ2UpIHtcblx0XHRcdFx0Ly8gSUVcblx0XHRcdFx0Y29uc3Qgcm5nID0gZG9jdW1lbnQuc2VsZWN0aW9uLmNyZWF0ZVJhbmdlKCkuZHVwbGljYXRlKCk7XG5cdFx0XHRcdGlmIChybmcucGFyZW50Tm9kZSgpID09PSB0aGlzLnRleHQpIHtcblx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0Y29uc3QgdGV4dFJuZyA9IHRoaXMudGV4dC5jcmVhdGVUZXh0UmFuZ2UoKTtcblx0XHRcdFx0XHRcdHRleHRSbmcubW92ZSgnY2hhcmFjdGVyJywgMCk7XG5cdFx0XHRcdFx0XHR0ZXh0Um5nLnNldEVuZFBvaW50KCdFbmRUb0VuZCcsIHJuZyk7XG5cdFx0XHRcdFx0XHQvLyBXZSdyZSBpbiBhIHNpbmdsZS1saW5lIGlucHV0IGJveDogbm8gbmVlZCB0byBjYXJlIGFib3V0IElFJ3Mgc3RyYW5nZVxuXHRcdFx0XHRcdFx0Ly8gaGFuZGxpbmcgb2YgbGluZSBlbmRzXG5cdFx0XHRcdFx0XHR0byA9IHRleHRSbmcudGV4dC5sZW5ndGg7XG5cdFx0XHRcdFx0XHR0ZXh0Um5nLnNldEVuZFBvaW50KCdFbmRUb1N0YXJ0Jywgcm5nKTtcblx0XHRcdFx0XHRcdGZyb20gPSB0ZXh0Um5nLnRleHQubGVuZ3RoO1xuXHRcdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdFx0ZnJvbSA9IHRoaXMudGV4dC52YWx1ZS5sZW5ndGg7XG5cdFx0XHRcdFx0XHR0byA9IGZyb207IC8vIEF0IGVuZCBvZiB0ZXh0XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRzdGFydDogZnJvbSxcblx0XHRcdFx0ZW5kOiB0byxcblx0XHRcdH07XG5cdFx0fVxuXHRcdHNhdmVWaWV3KCkge1xuXHRcdFx0dGhpcy5sYXN0U2VsZWN0aW9uID0gdGhpcy5nZXRTZWxlY3Rpb24oKTtcblx0XHR9XG5cdFx0cHJvY2Vzc0tleShldmVudCkge1xuXHRcdFx0bGV0IGRpciA9IDA7XG5cdFx0XHRzd2l0Y2ggKHRoaXMubGFzdEtleSkge1xuXHRcdFx0XHRjYXNlIFVQOlxuXHRcdFx0XHRcdGRpciA9IC0xO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIERPV046XG5cdFx0XHRcdFx0ZGlyID0gMTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBQR1VQOlxuXHRcdFx0XHRcdGRpciA9IC1IQy5saXN0U2l6ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBQR0RPV046XG5cdFx0XHRcdFx0ZGlyID0gSEMubGlzdFNpemU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgRVNDOlxuXHRcdFx0XHRcdC8vIEluaGliaXQgZGVmYXVsdCBiZWhhdmlvciAocmV2ZXJ0IHRvIGxhc3QgcmVhbCBpbnB1dCBpbiBGRjogd2UgZG8gdGhhdCBvdXJzZWx2ZXMpXG5cdFx0XHRcdFx0cmV0dXJuIGV2dEtpbGwoZXZlbnQpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGRpcikge1xuXHRcdFx0XHRpZiAodGhpcy5saXN0LnN0eWxlLmRpc3BsYXkgIT09ICdub25lJykge1xuXHRcdFx0XHRcdC8vIExpc3QgaXMgdmlzaWJsZSwgc28gdGhlcmUgYXJlIHN1Z2dlc3Rpb25zXG5cdFx0XHRcdFx0dGhpcy5oaWdobGlnaHRTdWdnZXN0aW9uKGRpcik7XG5cdFx0XHRcdFx0Ly8gS2lsbCB0aGUgZXZlbnQsIG90aGVyd2lzZSBzb21lIGJyb3dzZXJzIChlLmcuLCBGaXJlZm94KSBtYXkgYWRkaXRpb25hbGx5IHRyZWF0IGFuIHVwLWFycm93XG5cdFx0XHRcdFx0Ly8gYXMgXCJwbGFjZSB0aGUgdGV4dCBjdXJzb3IgYXQgdGhlIGZyb250XCIsIHdoaWNoIHdlIGRvbid0IHdhbnQgaGVyZS5cblx0XHRcdFx0XHRyZXR1cm4gZXZ0S2lsbChldmVudCk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoXG5cdFx0XHRcdFx0dGhpcy5rZXlDb3VudCA8PSAxICYmXG5cdFx0XHRcdFx0KCF0aGlzLmNhbGxiYWNrT2JqIHx8IHRoaXMuY2FsbGJhY2tPYmouY2FsbHNNYWRlID09PSB0aGlzLmNhbGxiYWNrT2JqLm5vZkNhbGxzKVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHQvLyBJZiBubyBzdWdnZXN0aW9ucyBkaXNwbGF5ZWQsIGdldCB0aGVtLCB1bmxlc3Mgd2UncmUgYWxyZWFkeSBnZXR0aW5nIHRoZW0uXG5cdFx0XHRcdFx0dGhpcy50ZXh0Y2hhbmdlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRoaWdobGlnaHRTdWdnZXN0aW9uKGRpcikge1xuXHRcdFx0aWYgKG5vU3VnZ2VzdGlvbnMgfHwgIXRoaXMubGlzdCB8fCB0aGlzLmxpc3Quc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IGN1cnIgPSB0aGlzLmxpc3Quc2VsZWN0ZWRJbmRleDtcblx0XHRcdGxldCB0Z3QgPSAtMTtcblx0XHRcdGlmIChkaXIgPT09IDApIHtcblx0XHRcdFx0aWYgKGN1cnIgPCAwIHx8IGN1cnIgPj0gdGhpcy5saXN0Lm9wdGlvbnMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRndCA9IGN1cnI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0Z3QgPSBjdXJyIDwgMCA/IDAgOiBjdXJyICsgZGlyO1xuXHRcdFx0XHR0Z3QgPSB0Z3QgPCAwID8gMCA6IHRndDtcblx0XHRcdFx0aWYgKHRndCA+PSB0aGlzLmxpc3Qub3B0aW9ucy5sZW5ndGgpIHtcblx0XHRcdFx0XHR0Z3QgPSB0aGlzLmxpc3Qub3B0aW9ucy5sZW5ndGggLSAxO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAodGd0ICE9PSBjdXJyIHx8IGRpciA9PT0gMCkge1xuXHRcdFx0XHRpZiAoY3VyciA+PSAwICYmIGN1cnIgPCB0aGlzLmxpc3Qub3B0aW9ucy5sZW5ndGggJiYgZGlyICE9PSAwKSB7XG5cdFx0XHRcdFx0dGhpcy5saXN0Lm9wdGlvbnNbY3Vycl0uc2VsZWN0ZWQgPSBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmxpc3Qub3B0aW9uc1t0Z3RdLnNlbGVjdGVkID0gdHJ1ZTtcblx0XHRcdFx0Ly8gR2V0IGN1cnJlbnQgaW5wdXQgdGV4dFxuXHRcdFx0XHRjb25zdCB2ID0gdGhpcy50ZXh0LnZhbHVlLnNwbGl0KCd8Jyk7XG5cdFx0XHRcdGNvbnN0IGtleSA9IHYubGVuZ3RoID4gMSA/IGB8JHt2WzFdfWAgOiAnJztcblx0XHRcdFx0Y29uc3QgY29tcGxldGVkID0gdGhpcy5hdXRvQ29tcGxldGUodGhpcy5saXN0Lm9wdGlvbnNbdGd0XS50ZXh0LCB0aGlzLmxhc3RSZWFsSW5wdXQsIG51bGwsIGtleSwgZmFsc2UpO1xuXHRcdFx0XHRpZiAoIWNvbXBsZXRlZCB8fCB0aGlzLmxpc3Qub3B0aW9uc1t0Z3RdLnRleHQgPT09IHRoaXMubGFzdFJlYWxJbnB1dCkge1xuXHRcdFx0XHRcdHRoaXMudGV4dC52YWx1ZSA9IHRoaXMubGlzdC5vcHRpb25zW3RndF0udGV4dCArIGtleTtcblx0XHRcdFx0XHRpZiAodGhpcy5jYW5TZWxlY3QoKSkge1xuXHRcdFx0XHRcdFx0dGhpcy5zZXRTZWxlY3Rpb24odGhpcy5saXN0Lm9wdGlvbnNbdGd0XS50ZXh0Lmxlbmd0aCwgdGhpcy5saXN0Lm9wdGlvbnNbdGd0XS50ZXh0Lmxlbmd0aCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMubGFzdElucHV0ID0gdGhpcy5saXN0Lm9wdGlvbnNbdGd0XS50ZXh0O1xuXHRcdFx0XHR0aGlzLmlucHV0RXhpc3RzID0gdHJ1ZTsgLy8gTWlnaHQgYmUgd3JvbmcgaWYgZnJvbSBhIGRhYiBsaXN0Li4uXG5cdFx0XHRcdGlmICh0aGlzLmljb24pIHtcblx0XHRcdFx0XHR0aGlzLmljb24uc3JjID0gSEMuZXhpc3RzWWVzO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSBDSEFOR0VfUEVORElORztcblx0XHRcdH1cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRyZXNldEtleVNlbGVjdGlvbigpIHtcblx0XHRcdGlmIChub1N1Z2dlc3Rpb25zIHx8ICF0aGlzLmxpc3QgfHwgdGhpcy5saXN0LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBjdXJyID0gdGhpcy5saXN0LnNlbGVjdGVkSW5kZXg7XG5cdFx0XHRpZiAoY3VyciA+PSAwICYmIGN1cnIgPCB0aGlzLmxpc3Qub3B0aW9ucy5sZW5ndGgpIHtcblx0XHRcdFx0dGhpcy5saXN0Lm9wdGlvbnNbY3Vycl0uc2VsZWN0ZWQgPSBmYWxzZTtcblx0XHRcdFx0Ly8gR2V0IGN1cnJlbnQgaW5wdXQgdGV4dFxuXHRcdFx0XHRjb25zdCB2ID0gdGhpcy50ZXh0LnZhbHVlLnNwbGl0KCd8Jyk7XG5cdFx0XHRcdGNvbnN0IGtleSA9IHYubGVuZ3RoID4gMSA/IGB8JHt2WzFdfWAgOiAnJztcblx0XHRcdFx0Ly8gRVNDIGlzIGhhbmRsZWQgc3RyYW5nZWx5IGJ5IHNvbWUgYnJvd3NlcnMgKGUuZy4sIEZGKTsgc29tZWhvdyBpdCByZXNldHMgdGhlIGlucHV0IHZhbHVlIGJlZm9yZVxuXHRcdFx0XHQvLyBvdXIgZXZlbnQgaGFuZGxlcnMgZXZlciBnZXQgYSBjaGFuY2UgdG8gcnVuLlxuXHRcdFx0XHRsZXQgcmVzdWx0ID0gdlswXSAhPT0gdGhpcy5sYXN0SW5wdXQ7XG5cdFx0XHRcdGlmICh2WzBdICE9PSB0aGlzLmxhc3RSZWFsSW5wdXQpIHtcblx0XHRcdFx0XHR0aGlzLnRleHQudmFsdWUgPSB0aGlzLmxhc3RSZWFsSW5wdXQgKyBrZXk7XG5cdFx0XHRcdFx0cmVzdWx0ID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmxhc3RJbnB1dCA9IHRoaXMubGFzdFJlYWxJbnB1dDtcblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblx0Y29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcblx0XHQvLyBVc2VyIGNvbmZpZ3VyYXRpb25zOiBEbyB0aGlzIGhlcmUsIGNhbGxlZCBmcm9tIHRoZSBvbmxvYWQgaGFuZGxlciwgc28gdGhhdCB1c2VycyBjYW5cblx0XHQvLyBvdmVycmlkZSBpdCBlYXNpbHkgaW4gdGhlaXIgb3duIHVzZXIgc2NyaXB0IGZpbGVzIGJ5IGp1c3QgZGVjbGFyaW5nIHZhcmlhYmxlcy5cblx0XHRjb25zdCBjb25maWcgPSB7fTtcblx0XHRIQy5kb250X2FkZF90b193YXRjaGxpc3QgPVxuXHRcdFx0d2luZG93LmhvdGNhdF9kb250X2FkZF90b193YXRjaGxpc3QgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHQ/IGNvbmZpZy5Ib3RDYXREb250QWRkVG9XYXRjaGxpc3QgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdD8gSEMuZG9udF9hZGRfdG9fd2F0Y2hsaXN0XG5cdFx0XHRcdFx0OiBjb25maWcuSG90Q2F0RG9udEFkZFRvV2F0Y2hsaXN0XG5cdFx0XHRcdDogISF3aW5kb3cuaG90Y2F0X2RvbnRfYWRkX3RvX3dhdGNobGlzdDtcblx0XHRIQy5ub19hdXRvY29tbWl0ID1cblx0XHRcdHdpbmRvdy5ob3RjYXRfbm9fYXV0b2NvbW1pdCA9PT0gdW5kZWZpbmVkXG5cdFx0XHRcdD8gY29uZmlnLkhvdENhdE5vQXV0b0NvbW1pdCA9PT0gdW5kZWZpbmVkXG5cdFx0XHRcdFx0PyBjb25mLndnTmFtZXNwYWNlTnVtYmVyICUgMlxuXHRcdFx0XHRcdFx0PyB0cnVlXG5cdFx0XHRcdFx0XHQ6IEhDLm5vX2F1dG9jb21taXQgLy8gT24gdGFsayBuYW1lc3BhY2UgZGVmYXVsdCBhdXRvY29tbWl0IG9mZlxuXHRcdFx0XHRcdDogY29uZmlnLkhvdENhdE5vQXV0b0NvbW1pdFxuXHRcdFx0XHQ6ICEhd2luZG93LmhvdGNhdF9ub19hdXRvY29tbWl0O1xuXHRcdEhDLmRlbF9uZWVkc19kaWZmID1cblx0XHRcdHdpbmRvdy5ob3RjYXRfZGVsX25lZWRzX2RpZmYgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHQ/IGNvbmZpZy5Ib3RDYXREZWxOZWVkc0RpZmYgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdD8gSEMuZGVsX25lZWRzX2RpZmZcblx0XHRcdFx0XHQ6IGNvbmZpZy5Ib3RDYXREZWxOZWVkc0RpZmZcblx0XHRcdFx0OiAhIXdpbmRvdy5ob3RjYXRfZGVsX25lZWRzX2RpZmY7XG5cdFx0SEMuc3VnZ2VzdF9kZWxheSA9IHdpbmRvdy5ob3RjYXRfc3VnZ2VzdGlvbl9kZWxheSB8fCBjb25maWcuSG90Q2F0U3VnZ2VzdGlvbkRlbGF5IHx8IEhDLnN1Z2dlc3RfZGVsYXk7XG5cdFx0SEMuZWRpdGJveF93aWR0aCA9IHdpbmRvdy5ob3RjYXRfZWRpdGJveF93aWR0aCB8fCBjb25maWcuSG90Q2F0RWRpdEJveFdpZHRoIHx8IEhDLmVkaXRib3hfd2lkdGg7XG5cdFx0SEMuc3VnZ2VzdGlvbnMgPSB3aW5kb3cuaG90Y2F0X3N1Z2dlc3Rpb25zIHx8IGNvbmZpZy5Ib3RDYXRTdWdnZXN0aW9ucyB8fCBIQy5zdWdnZXN0aW9ucztcblx0XHRpZiAodHlwZW9mIEhDLnN1Z2dlc3Rpb25zICE9PSAnc3RyaW5nJyB8fCAhc3VnZ2VzdGlvbkNvbmZpZ3NbSEMuc3VnZ2VzdGlvbnNdKSB7XG5cdFx0XHRIQy5zdWdnZXN0aW9ucyA9ICdjb21iaW5lZCc7XG5cdFx0fVxuXHRcdEhDLmZpeGVkX3NlYXJjaCA9XG5cdFx0XHR3aW5kb3cuaG90Y2F0X3N1Z2dlc3Rpb25zX2ZpeGVkID09PSB1bmRlZmluZWRcblx0XHRcdFx0PyBjb25maWcuSG90Q2F0Rml4ZWRTdWdnZXN0aW9ucyA9PT0gdW5kZWZpbmVkXG5cdFx0XHRcdFx0PyBIQy5maXhlZF9zZWFyY2hcblx0XHRcdFx0XHQ6IGNvbmZpZy5Ib3RDYXRGaXhlZFN1Z2dlc3Rpb25zXG5cdFx0XHRcdDogISF3aW5kb3cuaG90Y2F0X3N1Z2dlc3Rpb25zX2ZpeGVkO1xuXHRcdEhDLnNpbmdsZV9taW5vciA9XG5cdFx0XHR3aW5kb3cuaG90Y2F0X3NpbmdsZV9jaGFuZ2VzX2FyZV9taW5vciA9PT0gdW5kZWZpbmVkXG5cdFx0XHRcdD8gY29uZmlnLkhvdENhdE1pbm9yU2luZ2xlQ2hhbmdlcyA9PT0gdW5kZWZpbmVkXG5cdFx0XHRcdFx0PyBIQy5zaW5nbGVfbWlub3Jcblx0XHRcdFx0XHQ6IGNvbmZpZy5Ib3RDYXRNaW5vclNpbmdsZUNoYW5nZXNcblx0XHRcdFx0OiAhIXdpbmRvdy5ob3RjYXRfc2luZ2xlX2NoYW5nZXNfYXJlX21pbm9yO1xuXHRcdEhDLmJnX2NoYW5nZWQgPSB3aW5kb3cuaG90Y2F0X2NoYW5nZWRfYmFja2dyb3VuZCB8fCBjb25maWcuSG90Q2F0Q2hhbmdlZEJhY2tncm91bmQgfHwgSEMuYmdfY2hhbmdlZDtcblx0XHRIQy51c2VfdXBfZG93biA9XG5cdFx0XHR3aW5kb3cuaG90Y2F0X3VzZV9jYXRlZ29yeV9saW5rcyA9PT0gdW5kZWZpbmVkXG5cdFx0XHRcdD8gY29uZmlnLkhvdENhdFVzZUNhdGVnb3J5TGlua3MgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdD8gSEMudXNlX3VwX2Rvd25cblx0XHRcdFx0XHQ6IGNvbmZpZy5Ib3RDYXRVc2VDYXRlZ29yeUxpbmtzXG5cdFx0XHRcdDogISF3aW5kb3cuaG90Y2F0X3VzZV9jYXRlZ29yeV9saW5rcztcblx0XHRIQy5saXN0U2l6ZSA9IHdpbmRvdy5ob3RjYXRfbGlzdF9zaXplIHx8IGNvbmZpZy5Ib3RDYXRMaXN0U2l6ZSB8fCBIQy5saXN0U2l6ZTtcblx0XHRIQy5jaGFuZ2VUYWcgPSBjb25maWcuSG90Q2F0Q2hhbmdlVGFnIHx8ICcnO1xuXHRcdC8vIFRoZSBuZXh0IHdob2xlIHNoZWJhbmcgaXMgbmVlZGVkLCBiZWNhdXNlIG1hbnVhbCB0YWdzIGdldCBub3Qgc3VibWl0dGVkIGV4Y2VwdCBvZiBzYXZlXG5cdFx0aWYgKEhDLmNoYW5nZVRhZykge1xuXHRcdFx0Y29uc3QgZUZvcm0gPSBkb2N1bWVudC5lZGl0Zm9ybTtcblx0XHRcdGNvbnN0IGNhdFJlZ0V4cCA9IG5ldyBSZWdFeHAoYF5cXFxcW1xcXFxbKCR7SEMuY2F0ZWdvcnlfcmVnZXhwfSk6YCk7XG5cdFx0XHRsZXQgb2xkVHh0O1xuXHRcdFx0Ly8gUmV0dXJucyB0cnVlIGlmIG1pbm9yIGNoYW5nZVxuXHRcdFx0Y29uc3QgaXNNaW5vckNoYW5nZSA9ICgpID0+IHtcblx0XHRcdFx0bGV0IG5ld1R4dCA9IGVGb3JtLndwVGV4dGJveDE7XG5cdFx0XHRcdGlmICghbmV3VHh0KSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdG5ld1R4dCA9IG5ld1R4dC52YWx1ZTtcblx0XHRcdFx0Y29uc3Qgb2xkTGluZXMgPSBvbGRUeHQubWF0Y2goL14uKiQvZ20pO1xuXHRcdFx0XHRjb25zdCBuZXdMaW5lcyA9IG5ld1R4dC5tYXRjaCgvXi4qJC9nbSk7XG5cdFx0XHRcdGxldCBjQXJyOyAvLyBjaGFuZ2VzXG5cdFx0XHRcdGNvbnN0IGV4Y2VwdCA9IChhQXJyLCBiQXJyKSA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgcmVzdWx0ID0gW107XG5cdFx0XHRcdFx0bGV0IGxBcnI7IC8vIHNtYWxsZXJcblx0XHRcdFx0XHRsZXQgLy8gbGFyZ2VyXG5cdFx0XHRcdFx0XHRzQXJyO1xuXHRcdFx0XHRcdGlmIChhQXJyLmxlbmd0aCA8IGJBcnIubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRsQXJyID0gYkFycjtcblx0XHRcdFx0XHRcdHNBcnIgPSBhQXJyO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRsQXJyID0gYUFycjtcblx0XHRcdFx0XHRcdHNBcnIgPSBiQXJyO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRmb3IgKGNvbnN0IGl0ZW0gb2YgbEFycikge1xuXHRcdFx0XHRcdFx0Y29uc3QgaW5kID0gc0Fyci5pbmRleE9mKGl0ZW0pO1xuXHRcdFx0XHRcdFx0aWYgKGluZCA9PT0gLTEpIHtcblx0XHRcdFx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbSk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRzQXJyLnNwbGljZShpbmQsIDEpOyAvLyBkb24ndCBjaGVjayB0aGlzIGl0ZW0gYWdhaW5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIFsuLi5yZXN1bHQsIC4uLnNBcnJdO1xuXHRcdFx0XHR9O1xuXHRcdFx0XHRjQXJyID0gZXhjZXB0KG9sZExpbmVzLCBuZXdMaW5lcyk7XG5cdFx0XHRcdGlmIChjQXJyLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRjQXJyID0gY0Fyci5maWx0ZXIoKGMpID0+IHtcblx0XHRcdFx0XHRcdGMgPSBjLnRyaW0oKTtcblx0XHRcdFx0XHRcdHJldHVybiBjICYmICFjYXRSZWdFeHAudGVzdChjKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoY0Fyci5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRvbGRUeHQgPSBuZXdUeHQ7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHRpZiAoXG5cdFx0XHRcdGNvbmYud2dBY3Rpb24gPT09ICdzdWJtaXQnICYmXG5cdFx0XHRcdGNvbmYud2dBcnRpY2xlSWQgJiZcblx0XHRcdFx0ZUZvcm0gJiZcblx0XHRcdFx0ZUZvcm0ud3BTdW1tYXJ5ICYmXG5cdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3aWtpRGlmZicpXG5cdFx0XHQpIHtcblx0XHRcdFx0Y29uc3Qgc3VtID0gZUZvcm0ud3BTdW1tYXJ5O1xuXHRcdFx0XHRjb25zdCBzdW1BID0gZUZvcm0ud3BBdXRvU3VtbWFyeTtcblx0XHRcdFx0aWYgKHN1bS52YWx1ZSAmJiBzdW1BLnZhbHVlID09PSBIQy5jaGFuZ2VUYWcpIHtcblx0XHRcdFx0XHQvLyBIb3RDYXQgZGlmZlxuXHRcdFx0XHRcdC8vIE1ENSBoYXNoIG9mIHRoZSBlbXB0eSBzdHJpbmcsIGFzIEhvdENhdCBlZGl0IGlzIGJhc2VkIG9uIGVtcHR5IHN1bVxuXHRcdFx0XHRcdHN1bUEudmFsdWUgPSBzdW1BLnZhbHVlLnJlcGxhY2UoSEMuY2hhbmdlVGFnLCAnZDQxZDhjZDk4ZjAwYjIwNGU5ODAwOTk4ZWNmODQyN2UnKTtcblx0XHRcdFx0XHQvLyBBdHRyIGNyZWF0aW9uIGFuZCBldmVudCBoYW5kbGluZyBpcyBub3Qgc2FtZSBpbiBhbGwgKG9sZCkgYnJvd3NlcnMgc28gdXNlICRcblx0XHRcdFx0XHRjb25zdCAkY3QgPSAkKCc8aW5wdXQ+Jylcblx0XHRcdFx0XHRcdC5hdHRyKHtcblx0XHRcdFx0XHRcdFx0dHlwZTogJ2hpZGRlbicsXG5cdFx0XHRcdFx0XHRcdG5hbWU6ICd3cENoYW5nZVRhZ3MnLFxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdC52YWwoSEMuY2hhbmdlVGFnKTtcblx0XHRcdFx0XHQkKGVGb3JtKS5hcHBlbmQoJGN0KTtcblx0XHRcdFx0XHRvbGRUeHQgPSBlRm9ybS53cFRleHRib3gxLnZhbHVlO1xuXHRcdFx0XHRcdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRcdFx0XHRcdCRib2R5LmZpbmQoJyN3cFNhdmUnKS5vbmUoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKCRjdC52YWwoKSkge1xuXHRcdFx0XHRcdFx0XHRzdW0udmFsdWUgPSBzdW0udmFsdWUucmVwbGFjZShcblx0XHRcdFx0XHRcdFx0XHRnZXRNZXNzYWdlKCdtZXNzYWdlcy11c2luZycpIHx8IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXByZWZpeCcpLFxuXHRcdFx0XHRcdFx0XHRcdCcnXG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0Y29uc3QgcmVtb3ZlQ2hhbmdlVGFnID0gKCkgPT4ge1xuXHRcdFx0XHRcdFx0JChlRm9ybS53cFRleHRib3gxKVxuXHRcdFx0XHRcdFx0XHQuYWRkKHN1bSlcblx0XHRcdFx0XHRcdFx0Lm9uZSgnaW5wdXQnLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoaXNNaW5vckNoYW5nZSgpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJlbW92ZUNoYW5nZVRhZygpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0JGN0LnZhbCgnJyk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fSwgNTAwKTtcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRyZW1vdmVDaGFuZ2VUYWcoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBOdW1lcmljIGlucHV0LCBtYWtlIHN1cmUgd2UgaGF2ZSBhIG51bWVyaWMgdmFsdWVcblx0XHRIQy5saXN0U2l6ZSA9IE51bWJlci5wYXJzZUludChIQy5saXN0U2l6ZSwgMTApO1xuXHRcdGlmIChOdW1iZXIuaXNOYU4oSEMubGlzdFNpemUpIHx8IEhDLmxpc3RTaXplIDwgNSkge1xuXHRcdFx0SEMubGlzdFNpemUgPSA1O1xuXHRcdH1cblx0XHRIQy5saXN0U2l6ZSA9IE1hdGgubWluKEhDLmxpc3RTaXplLCAzMCk7IC8vIE1heCBzaXplXG5cdFx0Ly8gTG9jYWxpemUgc2VhcmNoIGVuZ2luZSBuYW1lc1xuXHRcdGZvciAoY29uc3QgW2tleSwgc3VnZ2VzdGlvbkNvbmZpZ10gb2YgT2JqZWN0LmVudHJpZXMoc3VnZ2VzdGlvbkNvbmZpZ3MpKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRpZiAoa2V5ICYmIGdldE1lc3NhZ2UoYGVuZ2luZV9uYW1lcy0ke2tleX1gKSkge1xuXHRcdFx0XHRcdHN1Z2dlc3Rpb25Db25maWcubmFtZSA9IGdldE1lc3NhZ2UoYGVuZ2luZV9uYW1lcy0ke2tleX1gKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBDYXRjaCBib3RoIG5hdGl2ZSBSVEwgYW5kIFwiZmFrZWRcIiBSVEwgdGhyb3VnaCBbW01lZGlhV2lraTpSdGwuanNdXVxuXHRcdGlzX3J0bCA9IGhhc0NsYXNzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSwgJ3J0bCcpO1xuXHRcdGlmICghaXNfcnRsKSB7XG5cdFx0XHRpZiAoZG9jdW1lbnQuZGVmYXVsdFZpZXcgJiYgZG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZSkge1xuXHRcdFx0XHQvLyBHZWNrbyBldGMuXG5cdFx0XHRcdGlzX3J0bCA9IGRvY3VtZW50LmRlZmF1bHRWaWV3XG5cdFx0XHRcdFx0LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLCBudWxsKVxuXHRcdFx0XHRcdC5nZXRQcm9wZXJ0eVZhbHVlKCdkaXJlY3Rpb24nKTtcblx0XHRcdH0gZWxzZSBpZiAoJCgnYm9keScpWzBdLmN1cnJlbnRTdHlsZSkge1xuXHRcdFx0XHQvLyBJRSwgaGFzIHN1YnRsZSBkaWZmZXJlbmNlcyB0byBnZXRDb21wdXRlZFN0eWxlXG5cdFx0XHRcdGlzX3J0bCA9ICQoJ2JvZHknKVswXS5jdXJyZW50U3R5bGUuZGlyZWN0aW9uO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gTm90IGV4YWN0bHkgcmlnaHQsIGJ1dCBiZXN0IGVmZm9ydFxuXHRcdFx0XHRpc19ydGwgPSAkKCdib2R5JylbMF0uc3R5bGUuZGlyZWN0aW9uO1xuXHRcdFx0fVxuXHRcdFx0aXNfcnRsID0gaXNfcnRsID09PSAncnRsJztcblx0XHR9XG5cdH07XG5cdGNvbnN0IGNhbl9lZGl0ID0gKCkgPT4ge1xuXHRcdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2EtZWRpdCcpICE9PSBudWxsO1xuXHR9O1xuXHQvLyBMZWdhY3kgc3R1ZmZcblx0Y29uc3QgY2xvc2VGb3JtID0gZnVuY3Rpb24gKCkge1xuXHRcdC8vIENsb3NlIGFsbCBvcGVuIGVkaXRvcnMgd2l0aG91dCByZWRpcmVjdCByZXNvbHV0aW9uIGFuZCBvdGhlciBhc3luY2hyb25vdXMgc3R1ZmYuXG5cdFx0Zm9yIChjb25zdCBlZGl0IG9mIGVkaXRvcnMpIHtcblx0XHRcdGlmIChlZGl0LnN0YXRlID09PSBPUEVOKSB7XG5cdFx0XHRcdGVkaXQuY2FuY2VsKCk7XG5cdFx0XHR9IGVsc2UgaWYgKGVkaXQuc3RhdGUgPT09IENIQU5HRV9QRU5ESU5HKSB7XG5cdFx0XHRcdGVkaXQuc2FuaXRpemVJbnB1dCgpO1xuXHRcdFx0XHRjb25zdCB2YWx1ZSA9IGVkaXQudGV4dC52YWx1ZS5zcGxpdCgnfCcpO1xuXHRcdFx0XHRsZXQga2V5ID0gbnVsbDtcblx0XHRcdFx0aWYgKHZhbHVlLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0XHRbLCBrZXldID0gdmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgdiA9IHZhbHVlWzBdLnJlcGxhY2UoL18vZywgJyAnKS50cmltKCk7XG5cdFx0XHRcdGlmICh2Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdGVkaXQuY2FuY2VsKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZWRpdC5jdXJyZW50Q2F0ZWdvcnkgPSB2O1xuXHRcdFx0XHRcdGVkaXQuY3VycmVudEtleSA9IGtleTtcblx0XHRcdFx0XHRlZGl0LmN1cnJlbnRFeGlzdHMgPSB0aGlzLmlucHV0RXhpc3RzO1xuXHRcdFx0XHRcdGVkaXQuY2xvc2UoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0Y29uc3Qgc2V0dXBfdXBsb2FkID0gKCkgPT4ge1xuXHRcdG9uVXBsb2FkID0gdHJ1ZTtcblx0XHQvLyBBZGQgYW4gZW1wdHkgY2F0ZWdvcnkgYmFyIGF0IHRoZSBlbmQgb2YgdGhlIHRhYmxlIGNvbnRhaW5pbmcgdGhlIGRlc2NyaXB0aW9uLCBhbmQgY2hhbmdlIHRoZSBvbnN1Ym1pdCBoYW5kbGVyLlxuXHRcdGxldCBpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtdy1odG1sZm9ybS1kZXNjcmlwdGlvbicpIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3cERlc3RGaWxlJyk7XG5cdFx0aWYgKCFpcCkge1xuXHRcdFx0aXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd3BEZXN0RmlsZScpO1xuXHRcdFx0d2hpbGUgKGlwICYmIGlwLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgIT09ICd0YWJsZScpIHtcblx0XHRcdFx0aXAgPSBpcC5wYXJlbnROb2RlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoIWlwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IHJldXBsb2FkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dwRm9yUmVVcGxvYWQnKTtcblx0XHRjb25zdCBkZXN0RmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3cERlc3RGaWxlJyk7XG5cdFx0aWYgKChyZXVwbG9hZCAmJiAhIXJldXBsb2FkLnZhbHVlKSB8fCAoZGVzdEZpbGUgJiYgKGRlc3RGaWxlLmRpc2FibGVkIHx8IGRlc3RGaWxlLnJlYWRPbmx5KSkpIHtcblx0XHRcdHJldHVybjsgLy8gcmUtdXBsb2FkIGZvcm0uLi5cblx0XHR9XG5cdFx0Ly8gSW5zZXJ0IGEgdGFibGUgcm93IHdpdGggdHdvIGZpZWxkcyAobGFiZWwgYW5kIGVtcHR5IGNhdGVnb3J5IGJhcilcblx0XHRjb25zdCBsYWJlbENlbGwgPSBtYWtlKCd0ZCcpO1xuXHRcdGNvbnN0IGxpbmVDZWxsID0gbWFrZSgndGQnKTtcblx0XHQvLyBDcmVhdGUgdGhlIGNhdGVnb3J5IGxpbmVcblx0XHRjYXRMaW5lID0gbWFrZSgnZGl2Jyk7XG5cdFx0Y2F0TGluZS5jbGFzc05hbWUgPSAnY2F0bGlua3MnO1xuXHRcdGNhdExpbmUuaWQgPSAnY2F0bGlua3MnO1xuXHRcdGNhdExpbmUuc3R5bGUudGV4dEFsaWduID0gaXNfcnRsID8gJ3JpZ2h0JyA6ICdsZWZ0Jztcblx0XHQvLyBXZSdsbCBiZSBpbnNpZGUgYSB0YWJsZSByb3cuIE1ha2Ugc3VyZSB0aGF0IHdlIGRvbid0IGhhdmUgbWFyZ2lucyBvciBzdHJhbmdlIGJvcmRlcnMuXG5cdFx0Y2F0TGluZS5zdHlsZS5tYXJnaW4gPSAnMCc7XG5cdFx0Y2F0TGluZS5zdHlsZS5ib3JkZXIgPSAnbm9uZSc7XG5cdFx0bGluZUNlbGwuYXBwZW5kKGNhdExpbmUpO1xuXHRcdC8vIENyZWF0ZSB0aGUgbGFiZWxcblx0XHRjb25zdCBsYWJlbCA9IG51bGw7XG5cdFx0aWYgKGxhYmVsKSB7XG5cdFx0XHRsYWJlbENlbGwuaWQgPSAnaG90Y2F0TGFiZWxUcmFuc2xhdGVkJztcblx0XHRcdGxhYmVsQ2VsbC5hcHBlbmQobGFiZWwpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRsYWJlbENlbGwuaWQgPSAnaG90Y2F0TGFiZWwnO1xuXHRcdFx0bGFiZWxDZWxsLmFwcGVuZChtYWtlKGdldE1lc3NhZ2UoJ2NhdGVnb3JpZXMnKSwgdHJ1ZSkpO1xuXHRcdH1cblx0XHRsYWJlbENlbGwuY2xhc3NOYW1lID0gJ213LWxhYmVsJztcblx0XHRsYWJlbENlbGwuc3R5bGUudGV4dEFsaWduID0gJ3JpZ2h0Jztcblx0XHRsYWJlbENlbGwuc3R5bGUudmVydGljYWxBbGlnbiA9ICdtaWRkbGUnO1xuXHRcdC8vIENoYW5nZSB0aGUgb25zdWJtaXQgaGFuZGxlclxuXHRcdGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXBsb2FkJykgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI213LXVwbG9hZC1mb3JtJyk7XG5cdFx0aWYgKGZvcm0pIHtcblx0XHRcdGNvbnN0IG5ld1JvdyA9IGlwLmluc2VydFJvdygtMSk7XG5cdFx0XHRuZXdSb3cuYXBwZW5kKGxhYmVsQ2VsbCk7XG5cdFx0XHRuZXdSb3cuYXBwZW5kKGxpbmVDZWxsKTtcblx0XHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKG9sZFN1Ym1pdCwgLi4uYXJncykgPT4ge1xuXHRcdFx0XHRyZXR1cm4gKCgpID0+IHtcblx0XHRcdFx0XHRsZXQgZG9fc3VibWl0ID0gdHJ1ZTtcblx0XHRcdFx0XHRpZiAob2xkU3VibWl0KSB7XG5cdFx0XHRcdFx0XHRpZiAodHlwZW9mIG9sZFN1Ym1pdCA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWV2YWxcblx0XHRcdFx0XHRcdFx0ZG9fc3VibWl0ID0gd2luZG93LmV2YWwob2xkU3VibWl0KTtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAob2xkU3VibWl0IGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcblx0XHRcdFx0XHRcdFx0ZG9fc3VibWl0ID0gb2xkU3VibWl0LmFwcGx5KGZvcm0sIFtvbGRTdWJtaXQsIC4uLmFyZ3NdKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKCFkb19zdWJtaXQpIHtcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y2xvc2VGb3JtKCk7XG5cdFx0XHRcdFx0Ly8gQ29weSB0aGUgY2F0ZWdvcmllc1xuXHRcdFx0XHRcdGNvbnN0IGViID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dwVXBsb2FkRGVzY3JpcHRpb24nKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd3BEZXNjJyk7XG5cdFx0XHRcdFx0bGV0IGFkZGVkT25lID0gZmFsc2U7XG5cdFx0XHRcdFx0Zm9yIChjb25zdCBlZGl0b3Igb2YgZWRpdG9ycykge1xuXHRcdFx0XHRcdFx0Y29uc3QgdCA9IGVkaXRvci5jdXJyZW50Q2F0ZWdvcnk7XG5cdFx0XHRcdFx0XHRpZiAoIXQpIHtcblx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRjb25zdCBrZXkgPSBlZGl0b3IuY3VycmVudEtleTtcblx0XHRcdFx0XHRcdGNvbnN0IG5ld19jYXQgPSBgW1ske0hDLmNhdGVnb3J5X2Nhbm9uaWNhbH06JHt0fSR7a2V5ID8gYHwke2tleX1gIDogJyd9XV1gO1xuXHRcdFx0XHRcdFx0Ly8gT25seSBhZGQgaWYgbm90IGFscmVhZHkgcHJlc2VudFxuXHRcdFx0XHRcdFx0Y29uc3Qgbm93aWtpUmVnZXggPSBuZXcgUmVnRXhwKCc8bm8nLmNvbmNhdCgnd2lraT4nLCAnKFxcXFxzfFxcXFxTKSo/PC9ubycsICd3aWtpJywgJz4nKSwgJ2cnKTtcblx0XHRcdFx0XHRcdGNvbnN0IF9jbGVhbmVkVGV4dCA9IGViLnZhbHVlLnJlcGxhY2UoLzwhLS0oXFxzfFxcUykqPy0tPi9nLCAnJykucmVwbGFjZShub3dpa2lSZWdleCk7XG5cdFx0XHRcdFx0XHRpZiAoIWZpbmRfY2F0ZWdvcnkoX2NsZWFuZWRUZXh0LCB0LCB0cnVlKSkge1xuXHRcdFx0XHRcdFx0XHRlYi52YWx1ZSArPSBgXFxuJHtuZXdfY2F0fWA7XG5cdFx0XHRcdFx0XHRcdGFkZGVkT25lID0gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGFkZGVkT25lKSB7XG5cdFx0XHRcdFx0XHQvLyBSZW1vdmUgXCJzdWJzdDp1bmNcIiBhZGRlZCBieSBGbGluZm8gaWYgaXQgZGlkbid0IGZpbmQgY2F0ZWdvcmllc1xuXHRcdFx0XHRcdFx0Y29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKCd7eyQnLmNvbmNhdCgnc3Vic3Q6JykuY29uY2F0KCd1bmN9fScpLCAnZycpO1xuXHRcdFx0XHRcdFx0ZWIudmFsdWUgPSBlYi52YWx1ZS5yZXBsYWNlKHJlZ2V4LCAnJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9KShmb3JtLm9uc3VibWl0KTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fTtcblx0bGV0IGNsZWFuZWRUZXh0ID0gbnVsbDtcblx0Y29uc3QgaXNPblBhZ2UgPSAoe2ZpcnN0Q2hpbGR9KSA9PiB7XG5cdFx0aWYgKGZpcnN0Q2hpbGQubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0bGV0IGNhdFRpdGxlID0gdGl0bGUoZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSk7XG5cdFx0aWYgKCFjYXRUaXRsZSkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGNhdFRpdGxlID0gY2F0VGl0bGUuc2xpY2UoY2F0VGl0bGUuaW5kZXhPZignOicpICsgMSkucmVwbGFjZSgvXy9nLCAnICcpO1xuXHRcdGlmIChIQy5ibGFja2xpc3QgJiYgSEMuYmxhY2tsaXN0LnRlc3QoY2F0VGl0bGUpKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0Y29uc3QgcmVzdWx0ID0ge1xuXHRcdFx0dGl0bGU6IGNhdFRpdGxlLFxuXHRcdFx0bWF0Y2g6IFsnJywgJycsICcnXSxcblx0XHR9O1xuXHRcdGlmIChwYWdlVGV4dCA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cdFx0aWYgKGNsZWFuZWRUZXh0ID09PSBudWxsKSB7XG5cdFx0XHRjb25zdCBub3dpa2lSZWdleCA9IG5ldyBSZWdFeHAoJzxubycuY29uY2F0KCd3aWtpPicsICcoXFxcXHN8XFxcXFMpKj88L25vJywgJ3dpa2knLCAnPicpLCAnZycpO1xuXHRcdFx0Y2xlYW5lZFRleHQgPSBwYWdlVGV4dC5yZXBsYWNlKC88IS0tKFxcc3xcXFMpKj8tLT4vZywgJycpLnJlcGxhY2Uobm93aWtpUmVnZXgsICcnKTtcblx0XHR9XG5cdFx0cmVzdWx0Lm1hdGNoID0gZmluZF9jYXRlZ29yeShjbGVhbmVkVGV4dCwgY2F0VGl0bGUsIHRydWUpO1xuXHRcdHJldHVybiByZXN1bHQ7XG5cdH07XG5cdGxldCBpbml0aWFsaXplZCA9IGZhbHNlO1xuXHRsZXQgc2V0dXBUaW1lb3V0ID0gbnVsbDtcblx0Y29uc3QgZmluZEJ5Q2xhc3MgPSAoc2NvcGUsIHRhZywgY2xhc3NOYW1lKSA9PiB7XG5cdFx0Y29uc3QgcmVzdWx0ID0gJChzY29wZSkuZmluZChgJHt0YWd9LiR7Y2xhc3NOYW1lfWApO1xuXHRcdHJldHVybiByZXN1bHQgJiYgcmVzdWx0Lmxlbmd0aCA+IDAgPyByZXN1bHRbMF0gOiBudWxsO1xuXHR9O1xuXHRjb25zdCBzZXR1cCA9IChhZGRpdGlvbmFsV29yaykgPT4ge1xuXHRcdGlmIChpbml0aWFsaXplZCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpbml0aWFsaXplZCA9IHRydWU7XG5cdFx0aWYgKHNldHVwVGltZW91dCkge1xuXHRcdFx0d2luZG93LmNsZWFyVGltZW91dChzZXR1cFRpbWVvdXQpO1xuXHRcdFx0c2V0dXBUaW1lb3V0ID0gbnVsbDtcblx0XHR9XG5cdFx0Ly8gRmluZCB0aGUgY2F0ZWdvcnkgYmFyLCBvciBjcmVhdGUgYW4gZW1wdHkgb25lIGlmIHRoZXJlIGlzbid0IG9uZS4gVGhlbiBhZGQgLS8rLSBsaW5rcyBhZnRlclxuXHRcdC8vIGVhY2ggY2F0ZWdvcnksIGFuZCBhZGQgdGhlICsgbGluay5cblx0XHRjYXRMaW5lIHx8PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXctbm9ybWFsLWNhdGxpbmtzJyk7IC8vIFNwZWNpYWw6VXBsb2FkXG5cdFx0Y29uc3QgaGlkZGVuQ2F0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtdy1oaWRkZW4tY2F0bGlua3MnKTtcblx0XHRpZiAoIWNhdExpbmUpIHtcblx0XHRcdGxldCBmb290ZXIgPSBudWxsO1xuXHRcdFx0aWYgKCFoaWRkZW5DYXRzKSB7XG5cdFx0XHRcdGZvb3RlciA9IGZpbmRCeUNsYXNzKGRvY3VtZW50LCAnZGl2JywgJ3ByaW50Zm9vdGVyJyk7XG5cdFx0XHRcdGlmICghZm9vdGVyKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9IC8vIERvbid0IGtub3cgd2hlcmUgdG8gaW5zZXJ0IHRoZSBjYXRlZ29yeSBsaW5lXG5cdFx0XHR9XG5cdFx0XHRjYXRMaW5lID0gbWFrZSgnZGl2Jyk7XG5cdFx0XHRjYXRMaW5lLmlkID0gJ213LW5vcm1hbC1jYXRsaW5rcyc7XG5cdFx0XHRjYXRMaW5lLnN0eWxlLnRleHRBbGlnbiA9IGlzX3J0bCA/ICdyaWdodCcgOiAnbGVmdCc7XG5cdFx0XHQvLyBBZGQgYSBsYWJlbFxuXHRcdFx0Y29uc3QgbGFiZWwgPSBtYWtlKCdhJyk7XG5cdFx0XHRsYWJlbC5ocmVmID0gY29uZi53Z0FydGljbGVQYXRoLnJlcGxhY2UoJyQxJywgJ1NwZWNpYWw6Q2F0ZWdvcmllcycpO1xuXHRcdFx0bGFiZWwudGl0bGUgPSBnZXRNZXNzYWdlKCdjYXRlZ29yaWVzJyk7XG5cdFx0XHRsYWJlbC5hcHBlbmQobWFrZShnZXRNZXNzYWdlKCdjYXRlZ29yaWVzJyksIHRydWUpKTtcblx0XHRcdGNhdExpbmUuYXBwZW5kKGxhYmVsKTtcblx0XHRcdGNhdExpbmUuYXBwZW5kKG1ha2UoJzonLCB0cnVlKSk7XG5cdFx0XHQvLyBJbnNlcnQgdGhlIG5ldyBjYXRlZ29yeSBsaW5lXG5cdFx0XHRsZXQgY29udGFpbmVyID0gaGlkZGVuQ2F0cyA/IGhpZGRlbkNhdHMucGFyZW50Tm9kZSA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXRsaW5rcycpO1xuXHRcdFx0aWYgKCFjb250YWluZXIpIHtcblx0XHRcdFx0Y29udGFpbmVyID0gbWFrZSgnZGl2Jyk7XG5cdFx0XHRcdGNvbnRhaW5lci5pZCA9ICdjYXRsaW5rcyc7XG5cdFx0XHRcdGZvb3Rlci5wYXJlbnROb2RlLmluc2VydEJlZm9yZShjb250YWluZXIsIGZvb3Rlci5uZXh0U2libGluZyk7XG5cdFx0XHR9XG5cdFx0XHRjb250YWluZXIuY2xhc3NOYW1lID0gJ2NhdGxpbmtzIG5vcHJpbnQnO1xuXHRcdFx0Y29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnJztcblx0XHRcdGlmIChoaWRkZW5DYXRzKSB7XG5cdFx0XHRcdGhpZGRlbkNhdHMuYmVmb3JlKGNhdExpbmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29udGFpbmVyLmFwcGVuZChjYXRMaW5lKTtcblx0XHRcdH1cblx0XHR9IC8vIGVuZCBpZiBjYXRMaW5lIGV4aXN0c1xuXHRcdGlmIChpc19ydGwpIHtcblx0XHRcdGNhdExpbmUuZGlyID0gJ3J0bCc7XG5cdFx0fVxuXHRcdC8vIENyZWF0ZSBlZGl0b3JzIGZvciBhbGwgZXhpc3RpbmcgY2F0ZWdvcmllc1xuXHRcdGNvbnN0IGNyZWF0ZUVkaXRvcnMgPSAobGluZSwgaXNfaGlkZGVuKSA9PiB7XG5cdFx0XHRsZXQgaTtcblx0XHRcdGxldCBjYXRzID0gbGluZS5xdWVyeVNlbGVjdG9yQWxsKCdsaScpO1xuXHRcdFx0aWYgKGNhdHMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRuZXdET00gPSB0cnVlO1xuXHRcdFx0XHRsaW5lID0gY2F0c1swXS5wYXJlbnROb2RlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y2F0cyA9IGxpbmUucXVlcnlTZWxlY3RvckFsbCgnc3BhbicpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gQ29weSBjYXRzLCBvdGhlcndpc2UgaXQnbGwgYWxzbyBtYWdpY2FsbHkgY29udGFpbiBvdXIgYWRkZWQgc3BhbnMgYXMgaXQgaXMgYSBsaXZlIGNvbGxlY3Rpb24hXG5cdFx0XHRjb25zdCBjb3B5Q2F0cyA9IEFycmF5LmZyb20oe1xuXHRcdFx0XHRsZW5ndGg6IGNhdHMubGVuZ3RoLFxuXHRcdFx0fSk7XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgY2F0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjb3B5Q2F0c1tpXSA9IGNhdHNbaV07XG5cdFx0XHR9XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgY29weUNhdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y29uc3QgdGVzdCA9IGlzT25QYWdlKGNvcHlDYXRzW2ldKTtcblx0XHRcdFx0aWYgKHRlc3QgIT09IG51bGwgJiYgdGVzdC5tYXRjaCAhPT0gbnVsbCAmJiBsaW5lKSB7XG5cdFx0XHRcdFx0bmV3IENhdGVnb3J5RWRpdG9yKGxpbmUsIGNvcHlDYXRzW2ldLCB0ZXN0LnRpdGxlLCB0ZXN0Lm1hdGNoWzJdLCBpc19oaWRkZW4pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gY29weUNhdHMubGVuZ3RoID4gMCA/IGNvcHlDYXRzLmF0KC0xKSA6IG51bGw7XG5cdFx0fTtcblx0XHRjb25zdCBsYXN0U3BhbiA9IGNyZWF0ZUVkaXRvcnMoY2F0TGluZSwgZmFsc2UpO1xuXHRcdC8vIENyZWF0ZSBvbmUgdG8gYWRkIGEgbmV3IGNhdGVnb3J5XG5cdFx0bmV3IENhdGVnb3J5RWRpdG9yKG5ld0RPTSA/IGNhdExpbmUucXVlcnlTZWxlY3RvckFsbCgndWwnKVswXSA6IGNhdExpbmUsIG51bGwsIG51bGwsIGxhc3RTcGFuICE9PSBudWxsLCBmYWxzZSk7XG5cdFx0aWYgKCFvblVwbG9hZCkge1xuXHRcdFx0aWYgKHBhZ2VUZXh0ICE9PSBudWxsICYmIGhpZGRlbkNhdHMpIHtcblx0XHRcdFx0aWYgKGlzX3J0bCkge1xuXHRcdFx0XHRcdGhpZGRlbkNhdHMuZGlyID0gJ3J0bCc7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y3JlYXRlRWRpdG9ycyhoaWRkZW5DYXRzLCB0cnVlKTtcblx0XHRcdH1cblx0XHRcdC8vIEFuZCBmaW5hbGx5IGFkZCB0aGUgXCJtdWx0aS1tb2RlXCIgc3Bhbi4gKERvIHRoaXMgYXQgdGhlIGVuZCwgb3RoZXJ3aXNlIGl0IGVuZHMgdXAgaW4gdGhlIGxpc3QgYWJvdmUuKVxuXHRcdFx0Y29uc3QgZW5hYmxlTXVsdGkgPSBtYWtlKCdzcGFuJyk7XG5cdFx0XHRlbmFibGVNdWx0aS5jbGFzc05hbWUgPSAnbm9wcmludCc7XG5cdFx0XHRpZiAoaXNfcnRsKSB7XG5cdFx0XHRcdGVuYWJsZU11bHRpLmRpciA9ICdydGwnO1xuXHRcdFx0fVxuXHRcdFx0Y2F0TGluZS5pbnNlcnRCZWZvcmUoZW5hYmxlTXVsdGksIGNhdExpbmUuZmlyc3RDaGlsZC5uZXh0U2libGluZyk7XG5cdFx0XHRlbmFibGVNdWx0aS5hcHBlbmQobWFrZSgnXFx1MDBBMCcsIHRydWUpKTsgLy8gbmJzcFxuXHRcdFx0bXVsdGlTcGFuID0gbWFrZSgnc3BhbicpO1xuXHRcdFx0ZW5hYmxlTXVsdGkuYXBwZW5kKG11bHRpU3Bhbik7XG5cdFx0XHRtdWx0aVNwYW4uaW5uZXJIVE1MID0gYCg8YT4ke0hDLmFkZG11bHRpfTwvYT4pYDtcblx0XHRcdGNvbnN0IFtsaW5rXSA9IG11bHRpU3Bhbi5xdWVyeVNlbGVjdG9yQWxsKCdhJyk7XG5cdFx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdHNldE11bHRpSW5wdXQoKTtcblx0XHRcdFx0Y2hlY2tNdWx0aUlucHV0KCk7XG5cdFx0XHRcdHJldHVybiBldnRLaWxsKGV2ZW50KTtcblx0XHRcdH0pO1xuXHRcdFx0bGluay50aXRsZSA9IGdldE1lc3NhZ2UoJ211bHRpX3Rvb2x0aXAnKTtcblx0XHRcdGxpbmsuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuXHRcdH1cblx0XHRjbGVhbmVkVGV4dCA9IG51bGw7XG5cdFx0aWYgKGFkZGl0aW9uYWxXb3JrIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcblx0XHRcdGFkZGl0aW9uYWxXb3JrKCk7XG5cdFx0fVxuXHRcdG13Lmhvb2soJ2hvdGNhdC5yZWFkeScpLmZpcmUoKTsgLy8gRXhlY3V0ZSByZWdpc3RlcmVkIGNhbGxiYWNrIGZ1bmN0aW9uc1xuXHRcdCQoJ2JvZHknKS50cmlnZ2VyKCdob3RjYXRTZXR1cENvbXBsZXRlZCcpO1xuXHR9O1xuXHRjb25zdCBjcmVhdGVDb21taXRGb3JtID0gKCkgPT4ge1xuXHRcdGlmIChjb21taXRGb3JtKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IGZvcm1Db250YWluZXIgPSBtYWtlKCdkaXYnKTtcblx0XHRmb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZChmb3JtQ29udGFpbmVyKTtcblx0XHRmb3JtQ29udGFpbmVyLmlubmVySFRNTCA9IGA8Zm9ybSBpZD1cImhvdGNhdENvbW1pdEZvcm1cIiBtZXRob2Q9XCJwb3N0XCIgZW5jdHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIiBhY3Rpb249XCIke1xuXHRcdFx0Y29uZi53Z1NjcmlwdFxuXHRcdH0/dGl0bGU9JHtlbmNvZGVVUklDb21wb25lbnQoXG5cdFx0XHRjb25mLndnUGFnZU5hbWVcblx0XHQpfSZhY3Rpb249c3VibWl0XCI+PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwid3BUZXh0Ym94MVwiPiR7YDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIm1vZGVsXCIgdmFsdWU9XCIke2NvbmYud2dQYWdlQ29udGVudE1vZGVsfVwiPmB9PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiZm9ybWF0XCIgdmFsdWU9XCJ0ZXh0L3gtd2lraVwiPjxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIndwU3VtbWFyeVwiIHZhbHVlPVwiXCI+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJ3cE1pbm9yZWRpdFwiIHZhbHVlPVwiMVwiPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwid3BXYXRjaHRoaXNcIiB2YWx1ZT1cIjFcIj48aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJ3cEF1dG9TdW1tYXJ5XCIgdmFsdWU9XCJkNDFkOGNkOThmMDBiMjA0ZTk4MDA5OThlY2Y4NDI3ZVwiPjxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIndwRWRpdHRpbWVcIj48aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJ3cFN0YXJ0dGltZVwiPjxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIndwRGlmZlwiIHZhbHVlPVwid3BEaWZmXCI+PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwib2xkaWRcIiB2YWx1ZT1cIjBcIj48aW5wdXQgdHlwZT1cInN1Ym1pdFwiIG5hbWU9XCJoY0NvbW1pdFwiIHZhbHVlPVwiaGNDb21taXRcIj48aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJ3cEVkaXRUb2tlblwiPjxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIndwVWx0aW1hdGVQYXJhbVwiIHZhbHVlPVwiMVwiPjxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIndwQ2hhbmdlVGFnc1wiPjxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgdmFsdWU9XCLihLPwnZKy4pml8J2TivCdk4PwnZK+8J2SuOKEtPCdkrnihK9cIiBuYW1lPVwid3BVbmljb2RlQ2hlY2tcIj48L2Zvcm0+YDtcblx0XHRjb21taXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvdGNhdENvbW1pdEZvcm0nKTtcblx0fTtcblx0Y29uc3QgZ2V0UGFnZSA9ICgpID0+IHtcblx0XHQvLyBXZSBrbm93IHdlIGhhdmUgYW4gYXJ0aWNsZSBoZXJlLlxuXHRcdGlmIChjb25mLndnQXJ0aWNsZUlkKSB7XG5cdFx0XHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0cmF3Y29udGludWU6ICcnLFxuXHRcdFx0XHR0aXRsZXM6IGNvbmYud2dQYWdlTmFtZSxcblx0XHRcdFx0cHJvcDogWydpbmZvJywgJ3JldmlzaW9ucyddLFxuXHRcdFx0XHRydnByb3A6IFsnY29udGVudCcsICd0aW1lc3RhbXAnLCAnaWRzJ10sXG5cdFx0XHRcdHJ2bGltaXQ6ICcxJyxcblx0XHRcdFx0cnZzdGFydGlkOiBjb25mLndnQ3VyUmV2aXNpb25JZCxcblx0XHRcdFx0cnZzbG90czogJ21haW4nLFxuXHRcdFx0XHRtZXRhOiBbJ3NpdGVpbmZvJ10sXG5cdFx0XHR9O1xuXHRcdFx0SEMuc3RhcnQgPSAoZGF0YSkgPT4ge1xuXHRcdFx0XHRzZXRQYWdlKGRhdGEpO1xuXHRcdFx0XHRzZXR1cChjcmVhdGVDb21taXRGb3JtKTtcblx0XHRcdH07XG5cdFx0XHRhcGkuZ2V0KHBhcmFtcykudGhlbigoZGF0YSkgPT4ge1xuXHRcdFx0XHRIQy5zdGFydChkYXRhKTtcblx0XHRcdH0pO1xuXHRcdFx0c2V0dXBUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHNldHVwKGNyZWF0ZUNvbW1pdEZvcm0pO1xuXHRcdFx0fSwgNDAwMCk7IC8vIDQgc2VjLCBqdXN0IGluIGNhc2UgZ2V0dGluZyB0aGUgd2lraXRleHQgdGFrZXMgbG9uZ2VyLlxuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBEb2Vzbid0IGV4aXN0IHlldC4gRGlzYWJsZSBvbiBub24tZXhpc3RpbmcgVXNlciBwYWdlcy5cblx0XHRcdGlmIChjb25mLndnTmFtZXNwYWNlTnVtYmVyID09PSAyKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHBhZ2VUZXh0ID0gJyc7XG5cdFx0XHRwYWdlVGltZSA9IG51bGw7XG5cdFx0XHRzZXR1cChjcmVhdGVDb21taXRGb3JtKTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IHNldFN0YXRlID0gKHN0YXRlKSA9PiB7XG5cdFx0Y29uc3QgY2F0cyA9IHN0YXRlLnNwbGl0KCdcXG4nKTtcblx0XHRpZiAoY2F0cy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRpZiAoaW5pdGlhbGl6ZWQgJiYgZWRpdG9ycy5sZW5ndGggPT09IDEgJiYgZWRpdG9yc1swXS5pc0FkZENhdGVnb3J5KSB7XG5cdFx0XHQvLyBJbnNlcnQgbmV3IHNwYW5zIGFuZCBjcmVhdGUgbmV3IGVkaXRvcnMgZm9yIHRoZW0uXG5cdFx0XHRjb25zdCBuZXdTcGFucyA9IFtdO1xuXHRcdFx0Y29uc3QgYmVmb3JlID0gZWRpdG9ycy5sZW5ndGggPT09IDEgPyBlZGl0b3JzWzBdLnNwYW4gOiBudWxsO1xuXHRcdFx0bGV0IGk7XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgY2F0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAoY2F0c1tpXS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRsZXQgY2F0ID0gY2F0c1tpXS5zcGxpdCgnfCcpO1xuXHRcdFx0XHRjb25zdCBrZXkgPSBjYXQubGVuZ3RoID4gMSA/IGNhdFsxXSA6IG51bGw7XG5cdFx0XHRcdFtjYXRdID0gY2F0O1xuXHRcdFx0XHRjb25zdCBsaW5rID0gbWFrZSgnYScpO1xuXHRcdFx0XHRsaW5rLmhyZWYgPSB3aWtpUGFnZVBhdGgoYCR7SEMuY2F0ZWdvcnlfY2Fub25pY2FsfToke2NhdH1gKTtcblx0XHRcdFx0bGluay5hcHBlbmQobWFrZShjYXQsIHRydWUpKTtcblx0XHRcdFx0bGluay50aXRsZSA9IGNhdDtcblx0XHRcdFx0Y29uc3Qgc3BhbiA9IG1ha2UoJ3NwYW4nKTtcblx0XHRcdFx0c3Bhbi5hcHBlbmQobGluayk7XG5cdFx0XHRcdGlmICghaSkge1xuXHRcdFx0XHRcdGNhdExpbmUuaW5zZXJ0QmVmb3JlKG1ha2UoJyAnLCB0cnVlKSwgYmVmb3JlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRiZWZvcmUuYmVmb3JlKHNwYW4pO1xuXHRcdFx0XHRpZiAoYmVmb3JlICYmIGkgKyAxIDwgY2F0cy5sZW5ndGgpIHtcblx0XHRcdFx0XHRwYXJlbnQuaW5zZXJ0QmVmb3JlKG1ha2UoJyB8ICcsIHRydWUpLCBiZWZvcmUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdG5ld1NwYW5zLnB1c2goe1xuXHRcdFx0XHRcdGVsZW1lbnQ6IHNwYW4sXG5cdFx0XHRcdFx0dGl0bGU6IGNhdCxcblx0XHRcdFx0XHRrZXksXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0Ly8gQW5kIGNoYW5nZSB0aGUgbGFzdCBvbmUuLi5cblx0XHRcdGlmIChiZWZvcmUpIHtcblx0XHRcdFx0YmVmb3JlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG1ha2UoJyB8ICcsIHRydWUpLCBiZWZvcmUpO1xuXHRcdFx0fVxuXHRcdFx0Zm9yIChpID0gMDsgaSA8IG5ld1NwYW5zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdG5ldyBDYXRlZ29yeUVkaXRvcihjYXRMaW5lLCBuZXdTcGFuc1tpXS5lbGVtZW50LCBuZXdTcGFuc1tpXS50aXRsZSwgbmV3U3BhbnNbaV0ua2V5KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH07XG5cdGNvbnN0IGdldFN0YXRlID0gKCkgPT4ge1xuXHRcdGxldCByZXN1bHQgPSBudWxsO1xuXHRcdGZvciAoY29uc3QgZWRpdG9yIG9mIGVkaXRvcnMpIHtcblx0XHRcdGxldCB0ZXh0ID0gZWRpdG9yLmN1cnJlbnRDYXRlZ29yeTtcblx0XHRcdGNvbnN0IGtleSA9IGVkaXRvci5jdXJyZW50S2V5O1xuXHRcdFx0aWYgKHRleHQgJiYgdGV4dC5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdGlmIChrZXkgIT09IG51bGwpIHtcblx0XHRcdFx0XHR0ZXh0ICs9IGB8JHtrZXl9YDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAocmVzdWx0ID09PSBudWxsKSB7XG5cdFx0XHRcdFx0cmVzdWx0ID0gdGV4dDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXN1bHQgKz0gYFxcbiR7dGV4dH1gO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH07XG5cdGNvbnN0IHJlYWxseV9ydW4gPSAoKSA9PiB7XG5cdFx0aW5pdGlhbGl6ZSgpO1xuXHRcdGlmIChcblx0XHRcdCFIQy51cGxvYWRfZGlzYWJsZWQgJiZcblx0XHRcdGNvbmYud2dOYW1lc3BhY2VOdW1iZXIgPT09IC0xICYmXG5cdFx0XHRjb25mLndnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lID09PSAnVXBsb2FkJyAmJlxuXHRcdFx0Y29uZi53Z1VzZXJOYW1lXG5cdFx0KSB7XG5cdFx0XHRzZXR1cF91cGxvYWQoKTtcblx0XHRcdHNldHVwKCgpID0+IHtcblx0XHRcdFx0Ly8gQ2hlY2sgZm9yIHN0YXRlIHJlc3RvcmF0aW9uIG9uY2UgdGhlIHNldHVwIGlzIGRvbmUgb3RoZXJ3aXNlLCBidXQgYmVmb3JlIHNpZ25hbGxpbmcgc2V0dXAgY29tcGxldGlvblxuXHRcdFx0XHRpZiAod2luZG93LlVwbG9hZEZvcm0gJiYgVXBsb2FkRm9ybS5wcmV2aW91c19ob3RjYXRfc3RhdGUpIHtcblx0XHRcdFx0XHRVcGxvYWRGb3JtLnByZXZpb3VzX2hvdGNhdF9zdGF0ZSA9IHNldFN0YXRlKFVwbG9hZEZvcm0ucHJldmlvdXNfaG90Y2F0X3N0YXRlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmIChcblx0XHRcdFx0IWNvbmYud2dJc0FydGljbGUgfHxcblx0XHRcdFx0Y29uZi53Z0FjdGlvbiAhPT0gJ3ZpZXcnIHx8XG5cdFx0XHRcdHBhcmFtKCdkaWZmJykgIT09IG51bGwgfHxcblx0XHRcdFx0cGFyYW0oJ29sZGlkJykgIT09IG51bGwgfHxcblx0XHRcdFx0IWNhbl9lZGl0KCkgfHxcblx0XHRcdFx0SEMuZGlzYWJsZSgpXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Z2V0UGFnZSgpO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgcnVuID0gKCkgPT4ge1xuXHRcdGlmIChIQy5zdGFydGVkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdEhDLnN0YXJ0ZWQgPSB0cnVlO1xuXHRcdHJlYWxseV9ydW4oKTtcblx0fTtcblx0Ly8gRXhwb3J0IGxlZ2FjeSBmdW5jdGlvbnNcblx0d2luZG93LmhvdGNhdF9nZXRfc3RhdGUgPSAoKSA9PiB7XG5cdFx0cmV0dXJuIGdldFN0YXRlKCk7XG5cdH07XG5cdHdpbmRvdy5ob3RjYXRfc2V0X3N0YXRlID0gKHN0YXRlKSA9PiB7XG5cdFx0cmV0dXJuIHNldFN0YXRlKHN0YXRlKTtcblx0fTtcblx0d2luZG93LmhvdGNhdF9jbG9zZV9mb3JtID0gKCkgPT4ge1xuXHRcdGNsb3NlRm9ybSgpO1xuXHR9O1xuXHRIQy5ydW5XaGVuUmVhZHkgPSAoY2FsbGJhY2spID0+IHtcblx0XHQvLyBydW4gdXNlci1yZWdpc3RlcmVkIGNvZGUgb25jZSBIb3RDYXQgaXMgZnVsbHkgc2V0IHVwIGFuZCByZWFkeS5cblx0XHRtdy5ob29rKCdob3RjYXQucmVhZHknKS5hZGQoY2FsbGJhY2spO1xuXHR9O1xuXHQvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgZ2V0IGNvbmZsaWN0cyB3aXRoIEFqYXhDYXRlZ29yaWVzIChjb3JlIGRldmVsb3BtZW50IHRoYXQgc2hvdWxkIG9uZSBkYXlcblx0Ly8gcmVwbGFjZSBIb3RDYXQpLlxuXHRtdy5jb25maWcuc2V0KCdkaXNhYmxlQUpBWENhdGVnb3JpZXMnLCB0cnVlKTtcblx0Ly8gUnVuIGFzIHNvb24gYXMgcG9zc2libGUuIFRoaXMgdmFyaWVzIGRlcGVuZGluZyBvbiBNZWRpYVdpa2kgdmVyc2lvbjtcblx0Ly8gd2luZG93J3MgJ2xvYWQnIGV2ZW50IGlzIGFsd2F5cyBzYWZlLCBidXQgdXN1YWxseSB3ZSBjYW4gZG8gYmV0dGVyIHRoYW4gdGhhdC5cblx0aWYgKGNvbmYud2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUgIT09ICdVcGxvYWQnKSB7XG5cdFx0Ly8gUmVsb2FkIEhvdENhdCBhZnRlciAoVkUpIGVkaXRzIChidWcgVDEwMzI4NSlcblx0XHRtdy5ob29rKCdwb3N0RWRpdCcpLmFkZCgoKSA9PiB7XG5cdFx0XHQvLyBSZXNldCBIb3RDYXQgaW4gY2FzZSB0aGlzIGlzIGEgc29mdCByZWxvYWQgKGUuZy4gVmlzdWFsRWRpdG9yIGVkaXQpLCB1bmxlc3MgdGhlIGNhdGVnb3JpZXNcblx0XHRcdC8vIHdlcmUgbm90IHJlLXJlbmRlcmVkIGFuZCBvdXIgaW50ZXJmYWNlIGlzIHN0aWxsIHRoZXJlIChlLmcuIERpc2N1c3Npb25Ub29scyBlZGl0KVxuXHRcdFx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXRsaW5rcyAuaG90Y2F0bGluaycpKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNhdExpbmUgPSBudWxsO1xuXHRcdFx0ZWRpdG9ycyA9IFtdO1xuXHRcdFx0aW5pdGlhbGl6ZWQgPSBmYWxzZTtcblx0XHRcdEhDLnN0YXJ0ZWQgPSBmYWxzZTtcblx0XHRcdHJ1bigpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdlIGNhbiBzYWZlbHkgdHJpZ2dlciBqdXN0IGFmdGVyIHVzZXIgY29uZmlndXJhdGlvbiBpcyBsb2FkZWQuXG5cdC8vIFVzZSBhbHdheXMoKSBpbnN0ZWFkIG9mIHRoZW4oKSB0byBhbHNvIHN0YXJ0IEhvdENhdCBpZiB0aGUgdXNlciBtb2R1bGUgaGFzIHByb2JsZW1zLlxuXHQkKHJ1bik7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQSx3RkFBQUEsU0FBQTtBQUFBO0FBQ0EsUUFBSSxRQUFRLFNBQVUsSUFBSTtBQUN4QixhQUFPLE1BQU0sR0FBRyxTQUFTLFFBQVE7QUFBQSxJQUNuQztBQUdBLElBQUFBLFFBQU87QUFBQSxJQUVMLE1BQU0sT0FBTyxjQUFjLFlBQVksVUFBVSxLQUNqRCxNQUFNLE9BQU8sVUFBVSxZQUFZLE1BQU07QUFBQSxJQUV6QyxNQUFNLE9BQU8sUUFBUSxZQUFZLElBQUksS0FDckMsTUFBTSxPQUFP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QjtBQUNBcEIsU0FBTzJ6QixvQkFBb0IsTUFBTTtBQUNoQ3ZFLGNBQVU7RUFDWDtBQUNBdmtCLEtBQUcrb0IsZUFBZ0IxWSxjQUFhO0FBRS9CcmIsT0FBRzB5QixLQUFLLGNBQWMsRUFBRXhxQixJQUFJbVQsUUFBUTtFQUNyQztBQUdBcmIsS0FBR0MsT0FBTzRDLElBQUkseUJBQXlCLElBQUk7QUFHM0MsTUFBSTZFLEtBQUs0ckIsK0JBQStCLFVBQVU7QUFFakR0ekIsT0FBRzB5QixLQUFLLFVBQVUsRUFBRXhxQixJQUFJLE1BQU07QUFHN0IsVUFBSTdILFNBQVMrdEIsY0FBYyx1QkFBdUIsR0FBRztBQUNwRDtNQUNEO0FBQ0FoYyxnQkFBVTtBQUNWRSxnQkFBVSxDQUFBO0FBQ1ZtZixvQkFBYztBQUNkem1CLFNBQUcyb0IsVUFBVTtBQUNiRCxVQUFJO0lBQ0wsQ0FBQztFQUNGO0FBR0ExeUIsSUFBRTB5QixHQUFHO0FBQ04sR0FBRzsiLAogICJuYW1lcyI6IFsibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbCIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAiU3ltYm9sIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbCIsICJkb2N1bWVudCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbCIsICJUeXBlRXJyb3IiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiJCIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImhvdENhdENoZWNrIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAid2luZG93IiwgIkhvdENhdEF1dG9SZW1vdmVDaGVja0NhdE9wdE91dCIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yQWxsIiwgImFwaSIsICJpbml0TXdBcGkiLCAiY2hlY2tDYXRlZ29yaWVzUmVnRXhwIiwgInNlbGZOYW1lIiwgInN0b3JhZ2VJdGVtTmFtZSIsICJzdG9yYWdlSXRlbSIsICJzdG9yYWdlIiwgImNyZWF0ZWpJY29uIiwgImljb25DbGFzcyIsICIkIiwgImF0dHIiLCAiY29uY2F0IiwgInRleHQiLCAiY3JlYXRlTm90aWZ5QXJlYSIsICJ0ZXh0Tm9kZSIsICJpY29uIiwgInN0YXRlIiwgImFkZENsYXNzIiwgImFwcGVuZCIsICJjc3MiLCAicGFkZGluZyIsICJvbmUiLCAiZSIsICJfc2VsZiR3cFRleHRib3gxJHZhbHUiLCAic2VsZiIsICJuZXdWYWwiLCAid3BUZXh0Ym94MSIsICJ2YWx1ZSIsICJyZXBsYWNlIiwgImRsZ0J1dHRvbnMiLCAiJGRpYWxvZ0NoZWNrU3RvcmFnZSIsICIkcGVybWFTYXZlSGludCIsICIkdGV4dEhpbnROb2RlIiwgIiRkaWFsb2ciLCAiZG9SZW1vdmUiLCAid3BTdW1tYXJ5IiwgIndyaXRlU3RvcmFnZSIsICJ2YWwiLCAic2V0IiwgIl8kZGlhbG9nQ2hlY2tTdG9yYWdlJCIsICJjaGVja2VkIiwgImRpYWxvZyIsICJfJGRpYWxvZ0NoZWNrU3RvcmFnZSQyIiwgIl9hZGRUb0pTIiwgIl9lIiwgInByZXZlbnREZWZhdWx0IiwgImhhc0NsYXNzIiwgIiRlbCIsICJvZmYiLCAicGFyYW1zIiwgImFjdGlvbiIsICJ0aXRsZSIsICJzdW1tYXJ5IiwgImFwcGVuZHRleHQiLCAiZGF0YSIsICJlZGl0RG9uZSIsICJlZGl0U3RhdCIsICJlcnJvciIsICJub3RpZnkiLCAiY29kZSIsICJpbmZvIiwgInRhZyIsICJ0eXBlIiwgImZhZGVPdXQiLCAicG9zdFdpdGhUb2tlbiIsICJ0aGVuIiwgInByb21wdCIsICJpZCIsICJvbiIsICJmYWRlSW4iLCAiYXBwZW5kVG8iLCAiZGlzcGxheSIsICJ1c2VyIiwgImlzQW5vbiIsICJoaWRlIiwgIm1vZGFsIiwgImNsb3NlT25Fc2NhcGUiLCAid2lkdGgiLCAiYnV0dG9ucyIsICJjbG9zZSIsICIkYm9keSIsICJmaW5kIiwgInRyaWdnZXIiLCAib3BlbiIsICIkYnV0dG9ucyIsICJwYXJlbnQiLCAiZXEiLCAiYnV0dG9uIiwgImljb25zIiwgInByaW1hcnkiLCAiSG90Q2F0QXV0b1JlbW92ZUNoZWNrQ2F0IiwgIiRva0xpbmsiLCAiaHJlZiIsICJkb0VkaXQiLCAicmVzdWx0IiwgIm5vY3JlYXRlIiwgImFqYXgiLCAidXJsIiwgImRhdGFUeXBlIiwgInN1Y2Nlc3MiLCAiY2FjaGUiLCAibG9hZEhvdENhdENoZWNrIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImFyZ3MiLCAibWVzc2FnZSIsICJwbGFpbiIsICJXR19VU0VSX0dST1VQUyIsICJfbXckY29uZmlnJGdldCIsICJXR19VU0VSX0xBTkdVQUdFIiwgImhvdENhdE1lc3NhZ2VzIiwgImluY2x1ZGVzIiwgIm1lc3NhZ2VzIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJob3RDYXQiLCAiY29uZiIsICJ2YWx1ZXMiLCAiSG90Q2F0IiwgIm5vZGVOYW1lIiwgIndnQWN0aW9uIiwgImxpbmtzIiwgImNoYW5nZSIsICJyZW1vdmUiLCAiYWRkIiwgInJlc3RvcmUiLCAidW5kbyIsICJkb3duIiwgInVwIiwgImNoYW5nZVRhZyIsICJhZGRtdWx0aSIsICJkaXNhYmxlIiwgIm5zIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIm5zSWRzIiwgIndnTmFtZXNwYWNlSWRzIiwgIndnQXJ0aWNsZUlkIiwgInRlc3QiLCAid2dUaXRsZSIsICJjcmVhdG9yIiwgInRpbWVkdGV4dCIsICJpbnN0aXR1dGlvbiIsICJ1bmNhdF9yZWdleHAiLCAiZXhpc3RzWWVzIiwgImV4aXN0c05vIiwgInRlbXBsYXRlX2NhdGVnb3JpZXMiLCAiY2FwaXRhbGl6ZVBhZ2VOYW1lcyIsICJ1cGxvYWRfZGlzYWJsZWQiLCAiYmxhY2tsaXN0IiwgImJnX2NoYW5nZWQiLCAibm9fYXV0b2NvbW1pdCIsICJkZWxfbmVlZHNfZGlmZiIsICJzdWdnZXN0X2RlbGF5IiwgImVkaXRib3hfd2lkdGgiLCAic3VnZ2VzdGlvbnMiLCAiZml4ZWRfc2VhcmNoIiwgInVzZV91cF9kb3duIiwgImxpc3RTaXplIiwgInNpbmdsZV9taW5vciIsICJkb250X2FkZF90b193YXRjaGxpc3QiLCAic2hvcnRjdXRzIiwgImFkZFNob3J0Y3V0cyIsICJtYXAiLCAiX2EiLCAiayIsICJPYmplY3QiLCAiaGFzT3duIiwgInYiLCAidHJpbSIsICJsZW5ndGgiLCAiSEMiLCAidWEiLCAibmF2aWdhdG9yIiwgInVzZXJBZ2VudCIsICJ0b0xvd2VyQ2FzZSIsICJpc193ZWJraXQiLCAiY2F0X3ByZWZpeCIsICJub1N1Z2dlc3Rpb25zIiwgIndpa2lUZXh0QmxhbmsiLCAid2lraVRleHRCbGFua1JFIiwgIlJlZ0V4cCIsICJ3aWtpVGV4dEJsYW5rT3JCaWRpIiwgImZvcm1hdHRlZE5hbWVzcGFjZXMiLCAid2dGb3JtYXR0ZWROYW1lc3BhY2VzIiwgIm5hbWVzcGFjZUlkcyIsICJhdXRvTG9jYWxpemUiLCAibmFtZXNwYWNlTnVtYmVyIiwgImZhbGxiYWNrIiwgImNyZWF0ZVJlZ2V4cFN0ciIsICJuYW1lIiwgInJlZ2V4X25hbWUiLCAiaSIsICJpbml0aWFsIiwgImNoYXJBdCIsICJsbCIsICJ1bCIsICJ0b1VwcGVyQ2FzZSIsICJjYW5vbmljYWwiLCAiU3RyaW5nIiwgInJlZ2V4cCIsICJjYXRfbmFtZSIsICJjYXRlZ29yeV9jYW5vbmljYWwiLCAiY2F0ZWdvcnlfcmVnZXhwIiwgInRlbXBsYXRlX3JlZ2V4cCIsICJtYWtlIiwgImFyZyIsICJsaXRlcmFsIiwgImNyZWF0ZVRleHROb2RlIiwgImNyZWF0ZUVsZW1lbnQiLCAicGFyYW0iLCAidXJpIiwgImxvY2F0aW9uIiwgInJlIiwgIm0iLCAiZXhlYyIsICJkZWNvZGVVUklDb21wb25lbnQiLCAic2NyaXB0IiwgIndnU2NyaXB0IiwgImluZGV4T2YiLCAid2dTZXJ2ZXIiLCAic2xpY2UiLCAicHJvdG9jb2wiLCAicHJlZml4IiwgIndnQXJ0aWNsZVBhdGgiLCAiY2xhc3NOYW1lIiwgImNhcGl0YWxpemUiLCAic3RyIiwgIndpa2lQYWdlUGF0aCIsICJwYWdlTmFtZSIsICJlbmNvZGVVUklDb21wb25lbnQiLCAiZXNjYXBlUkUiLCAic3Vic3RpdHV0ZUZhY3RvcnkiLCAib3B0aW9ucyIsICJsZWFkIiwgImluZGljYXRvciIsICJsYnJhY2UiLCAicmJyYWNlIiwgIm1hdGNoIiwgImlkeCIsICJhbHBoYSIsICJyZXBsYWNlbWVudCIsICJyZXBsYWNlU2hvcnRjdXRzIiwgInJlcGxhY2VIYXNoIiwgInMiLCAiZmluZENhdHNSRSIsICJyZXBsYWNlQnlCbGFua3MiLCAiZmluZF9jYXRlZ29yeSIsICJ3aWtpdGV4dCIsICJjYXRlZ29yeSIsICJvbmNlIiwgImNhdF9yZWdleCIsICJub3dpa2lSZWdleCIsICJjb3BpZWR0ZXh0IiwgImN1cnJfbWF0Y2giLCAicHVzaCIsICJpbnRlcmxhbmd1YWdlUkUiLCAiY2hhbmdlX2NhdGVnb3J5IiwgInRvUmVtb3ZlIiwgInRvQWRkIiwgImlzX2hpZGRlbiIsICJmaW5kX2luc2VydGlvbnBvaW50IiwgIl93aWtpdGV4dCIsICJpbmRleCIsICJsYXN0SW5kZXgiLCAib25DYXQiLCAibmFtZVNwYWNlIiwgImtleUNoYW5nZSIsICJtYXRjaGVzIiwgImNhdF9wb2ludCIsICJiZWZvcmUiLCAiTWF0aCIsICJtYXgiLCAiYWZ0ZXIiLCAic2VhcmNoIiwgImoiLCAicG9pbnQiLCAibmV3Y2F0c3RyaW5nIiwgInN1ZmZpeCIsICJ0eHQiLCAiZXZ0S2V5cyIsICJjdHJsS2V5IiwgIm1ldGFLZXkiLCAic2hpZnRLZXkiLCAiZXZ0S2lsbCIsICJzdG9wUHJvcGFnYXRpb24iLCAiY2FuY2VsQnViYmxlIiwgImNhdExpbmUiLCAib25VcGxvYWQiLCAiZWRpdG9ycyIsICJjb21taXRCdXR0b24iLCAiY29tbWl0Rm9ybSIsICJtdWx0aVNwYW4iLCAicGFnZVRleHQiLCAicGFnZVRpbWUiLCAicGFnZVdhdGNoZWQiLCAid2F0Y2hDcmVhdGUiLCAid2F0Y2hFZGl0IiwgIm1pbm9yRWRpdHMiLCAiZWRpdFRva2VuIiwgImlzX3J0bCIsICJzZXJ2ZXJUaW1lIiwgImxhc3RSZXZJZCIsICJwYWdlVGV4dFJldklkIiwgImNvbmZsaWN0aW5nVXNlciIsICJuZXdET00iLCAiVU5DSEFOR0VEIiwgIk9QRU4iLCAiQ0hBTkdFX1BFTkRJTkciLCAiQ0hBTkdFRCIsICJERUxFVEVEIiwgInNldFBhZ2UiLCAic3RhcnRUaW1lIiwgInF1ZXJ5IiwgInBhZ2VzIiwgInBhZ2UiLCAicmV2aXNpb25zIiwgInNsb3RzIiwgImNvbnRlbnQiLCAidGltZXN0YW1wIiwgInJldmlkIiwgImxhc3RyZXZpZCIsICJzdGFydHRpbWVzdGFtcCIsICJ3YXRjaGVkIiwgInRva2VucyIsICJjc3JmdG9rZW4iLCAibGFuZ2xpbmtzIiwgImxhbmciLCAiZ2VuZXJhbCIsICJ0aW1lIiwgImNhc2UiLCAidXNlcmluZm8iLCAid2F0Y2hjcmVhdGlvbnMiLCAid2F0Y2hkZWZhdWx0IiwgIm1pbm9yZGVmYXVsdCIsICJzYXZlSW5Qcm9ncmVzcyIsICJpbml0aWF0ZUVkaXQiLCAiZmFpbHVyZSIsICJvbGRCdXR0b25TdGF0ZSIsICJkaXNhYmxlZCIsICJmYWlsIiwgImFwcGx5IiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInJhd2NvbnRpbnVlIiwgInRpdGxlcyIsICJ3Z1BhZ2VOYW1lIiwgInByb3AiLCAiaW5wcm9wIiwgInJ2cHJvcCIsICJydnNsb3RzIiwgInJ2bGltaXQiLCAicnZkaXIiLCAicnZzdGFydGlkIiwgIndnQ3VyUmV2aXNpb25JZCIsICJsbGxpbWl0IiwgIm1ldGEiLCAidWlwcm9wIiwgImRvbmUiLCAic3RhdHVzIiwgInN0YXR1c1RleHQiLCAibXVsdGlDaGFuZ2VNc2ciLCAiY291bnQiLCAiY3VycmVudFRpbWVzdGFtcCIsICJub3ciLCAiRGF0ZSIsICJ0cyIsICJnZXRVVENGdWxsWWVhciIsICJ0d28iLCAiZ2V0VVRDTW9udGgiLCAiZ2V0VVRDRGF0ZSIsICJnZXRVVENIb3VycyIsICJnZXRVVENNaW51dGVzIiwgImdldFVUQ1NlY29uZHMiLCAicGVyZm9ybUNoYW5nZXMiLCAic2luZ2xlRWRpdG9yIiwgInNlbGZFZGl0Q29uZmxpY3QiLCAid2dVc2VyTmFtZSIsICJub0NvbW1pdCIsICJ3cEVkaXRUb2tlbiIsICJ3cERpZmYiLCAid3BTYXZlIiwgImNoYW5nZWQiLCAiYWRkZWQiLCAiZGVsZXRlZCIsICJ0b0VkaXQiLCAiZWRpdCIsICJjaGFuZ2VzIiwgIm9yaWdpbmFsQ2F0ZWdvcnkiLCAiY3VycmVudENhdGVnb3J5IiwgImN1cnJlbnRLZXkiLCAiY3VycmVudEhpZGRlbiIsICJmcm9tIiwgInRvIiwgIndwTWlub3JlZGl0IiwgIndwV2F0Y2h0aGlzIiwgIndwQ2hhbmdlVGFncyIsICJ3cEF1dG9TdW1tYXJ5IiwgImpvaW4iLCAic2hvcnRTdW1tYXJ5IiwgImFycm93IiwgIndwU3RhcnR0aW1lIiwgIndwRWRpdHRpbWUiLCAib2xkaWQiLCAiaGNDb21taXQiLCAiY2xpY2siLCAicmVzb2x2ZU9uZSIsICJ0b1Jlc29sdmUiLCAiY2F0cyIsICJjYXRlZ29yaWVzIiwgImlzX2RhYiIsICJpc19yZWRpciIsICJyZWRpcmVjdCIsICJjYXRlZ29yeWluZm8iLCAiaGlkZGVuIiwgImlzX21pc3NpbmciLCAibWlzc2luZyIsICJkYWJJbnB1dENsZWFuZWQiLCAiaW5wdXRFeGlzdHMiLCAic3JjIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJuIiwgImNhdF8iLCAiY2F0IiwgImVyciIsICJmIiwgImRhYiIsICJyZXNvbHZlUmVkaXJlY3RzIiwgInAiLCAicmVzb2x2ZU11bHRpIiwgImNhbGxiYWNrIiwgImRhYklucHV0IiwgImxhc3RJbnB1dCIsICJwbG5hbWVzcGFjZSIsICJwbGxpbWl0IiwgImNsbGltaXQiLCAianNvbiIsICJyZXEiLCAibWFrZUFjdGl2ZSIsICJ3aGljaCIsICJpc19hY3RpdmUiLCAiX2kiLCAiX2VkaXRvcnMiLCAiZWRpdG9yIiwgImluYWN0aXZhdGUiLCAic2hvd0RhYiIsICJleHBlY3RlZElucHV0IiwgImxhc3RSZWFsSW5wdXQiLCAiYWN0dWFsVmFsdWUiLCAic2hvd3NMaXN0IiwgInNwbGl0IiwgImxhc3RTZWxlY3Rpb24iLCAic3RhcnQiLCAiZW5kIiwgImRpc3BsYXlMaXN0IiwgInNldFRpbWVvdXQiLCAic2V0U2VsZWN0aW9uIiwgInNob3dTdWdnZXN0aW9ucyIsICJtdWx0aVN1Ym1pdCIsICJfaTIiLCAiX2VkaXRvcnMyIiwgIm1zZyIsICJyZXNvbHZlZCIsICJmaXJzdERhYiIsICJkb250Q2hhbmdlIiwgIl9pdGVyYXRvcjIiLCAiX3N0ZXAyIiwgImVsZW1lbnQiLCAiYWNjZXB0Q2hlY2siLCAiY29tbWl0IiwgInNldE11bHRpSW5wdXQiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJwYXJlbnROb2RlIiwgInJlcGxhY2VDaGlsZCIsICJjaGVja011bHRpSW5wdXQiLCAiaGFzQ2hhbmdlcyIsICJfaTMiLCAiX2VkaXRvcnMzIiwgInN1Z2dlc3Rpb25FbmdpbmVzIiwgIm9wZW5zZWFyY2giLCAiaGFuZGxlciIsICJxdWVyeVJlc3VsdCIsICJxdWVyeUtleSIsICJleGlzdHMiLCAic3BsaWNlIiwgIm5vcm1hbGl6ZWQiLCAiaW50ZXJuYWxzZWFyY2giLCAiYWxscGFnZXMiLCAiX3RpdGxlIiwgInN1YmNhdGVnb3JpZXMiLCAiY2F0ZWdvcnltZW1iZXJzIiwgInBhcmVudGNhdGVnb3JpZXMiLCAic3VnZ2VzdGlvbkNvbmZpZ3MiLCAic2VhcmNoaW5kZXgiLCAiZW5naW5lcyIsICJzaG93IiwgInRlbXAiLCAibm9Db21wbGV0aW9uIiwgInBhZ2VsaXN0IiwgImNvbWJpbmVkIiwgInN1YmNhdCIsICJwYXJlbnRjYXQiLCAiQlMiLCAiVEFCIiwgIlJFVCIsICJFU0MiLCAiU1BBQ0UiLCAiUEdVUCIsICJQR0RPV04iLCAiVVAiLCAiRE9XTiIsICJERUwiLCAiSU1FIiwgIkNhdGVnb3J5RWRpdG9yIiwgImNvbnN0cnVjdG9yIiwgImluaXRpYWxpemUiLCAibGluZSIsICJzcGFuIiwgImRpciIsICJpc0FkZENhdGVnb3J5IiwgImNhdExpbmsiLCAiZmlyc3RDaGlsZCIsICJvcmlnaW5hbEtleSIsICJvcmlnaW5hbEV4aXN0cyIsICJtYWtlTGlua1NwYW4iLCAidXBEb3duTGlua3MiLCAic3R5bGUiLCAibGlua1NwYW4iLCAiaW5zZXJ0QmVmb3JlIiwgIm5leHRTaWJsaW5nIiwgImxpbmsiLCAiYmluZCIsICJub3JtYWxMaW5rcyIsICJ1bmRlbExpbmsiLCAib3JpZ2luYWxIaWRkZW4iLCAiZW5naW5lIiwgImN1cnJlbnRFeGlzdHMiLCAibGFzdFNhdmVkU3RhdGUiLCAibGFzdFNhdmVkQ2F0ZWdvcnkiLCAibGFzdFNhdmVkS2V5IiwgImxhc3RTYXZlZEV4aXN0cyIsICJsYXN0U2F2ZWRIaWRkZW4iLCAiaW52b2tlU3VnZ2VzdGlvbnMiLCAiZG9udF9hdXRvY29tcGxldGUiLCAidGV4dGNoYW5nZSIsICJtYWtlRm9ybSIsICJmb3JtIiwgIm1ldGhvZCIsICJhY2NlcHQiLCAic2l6ZSIsICJldmVudCIsICJpbWUiLCAibGFzdEtleSIsICJ1c2VzQ29tcG9zaXRpb24iLCAia2V5Q291bnQiLCAicHJvY2Vzc0tleSIsICJyZXNldEtleVNlbGVjdGlvbiIsICJjYW5jZWwiLCAib25iZWZvcmVkZWFjdGl2YXRlIiwgImNyZWF0ZVRleHRSYW5nZSIsICJzYXZlVmlldyIsICJsaXN0IiwgImhpZ2hsaWdodFN1Z2dlc3Rpb24iLCAiZm9jdXMiLCAiZW5naW5lU2VsZWN0b3IiLCAib3B0IiwgInNlbGVjdGVkIiwgInNlbGVjdGVkSW5kZXgiLCAiYnV0dG9uX2xhYmVsIiwgIl9pZCIsICJkZWZhdWx0VGV4dCIsICJsYWJlbCIsICJPSyIsICJvayIsICJjYW5jZWxCdXR0b24iLCAicG9zaXRpb24iLCAid2hpdGVTcGFjZSIsICJfaTQiLCAiX2VkaXRvcnM0IiwgIm9yaWdpbmFsU3RhdGUiLCAicmVhZE9ubHkiLCAicmVtb3ZlRWRpdG9yIiwgImJhY2tncm91bmRDb2xvciIsICJuZXh0IiwgInJvbGxiYWNrIiwgInVuZG9MaW5rIiwgImRvbnRDaGVjayIsICJzYW5pdGl6ZUlucHV0IiwgIm9yaWdpbmFsIiwgIl9pNSIsICJfZWRpdG9yczUiLCAiY3NzVGV4dCIsICJ0ZXh0RGVjb3JhdGlvbiIsICJzZWxlY3RFbmdpbmUiLCAiZW5naW5lTmFtZSIsICJtYWtlQ2FsbCIsICJjYWxsYmFja09iaiIsICJjbGVhbktleSIsICJjYiIsICJ6IiwgImNhbGxzTWFkZSIsICJub2ZDYWxscyIsICJhbGxUaXRsZXMiLCAiZG9udENhY2hlIiwgImNhbmNlbGxlZCIsICJnZXRKU09OIiwgIkFycmF5IiwgImlzQXJyYXkiLCAiZm9yY2UiLCAicGlwZSIsICJtYWtlQ2FsbHMiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAiZW5naW5lXyIsICJ3Z1NjcmlwdFBhdGgiLCAiZG9udEF1dG9jb21wbGV0ZSIsICJsYXN0UXVlcnkiLCAidk5vcm1hbGl6ZWQiLCAia25vd25Ub0V4aXN0IiwgInZMb3ciLCAic29ydCIsICJhIiwgImIiLCAicHJlZml4TWF0Y2hBIiwgInByZWZpeE1hdGNoQiIsICJhTG93IiwgImJMb3ciLCAiZmlyc3RUaXRsZSIsICJjb21wbGV0ZWQiLCAiYXV0b0NvbXBsZXRlIiwgImV4aXN0aW5nIiwgIm5vZkl0ZW1zIiwgImFsaWduIiwgInpJbmRleCIsICJhbmNob3IiLCAibGlzdGgiLCAidG9wIiwgIm9mZnNldFRvcCIsICJvZmZzZXRIZWlnaHQiLCAibWF4TGlzdEhlaWdodCIsICJ2aWV3cG9ydCIsICJ3aGF0IiwgImV2YWx1YXRlIiwgIm9wZXJhIiwgImRvY3VtZW50RWxlbWVudCIsICJzY3JvbGxfb2Zmc2V0IiwgIm5vZGUiLCAiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwgImJveCIsICJ4IiwgInJvdW5kIiwgImxlZnQiLCAieSIsICJ0IiwgImwiLCAib2Zmc2V0TGVmdCIsICJvZmZzZXRQYXJlbnQiLCAidGV4dFBvcyIsICJubCIsICJudCIsICJvZmZzZXQiLCAidGV4dEJveFdpZHRoIiwgIm9mZnNldFdpZHRoIiwgImNsaWVudFdpZHRoIiwgInNjcm9sbCIsICJ2aWV3X3ciLCAidyIsICJsX3BvcyIsICJyaWdodCIsICJyZWxhdGl2ZV9vZmZzZXQiLCAiYWN0VmFsIiwgIm5vcm1hbGl6ZWRBY3RWYWwiLCAiZG9udE1vZGlmeSIsICJjYW5TZWxlY3QiLCAic2V0U2VsZWN0aW9uUmFuZ2UiLCAic2VsZWN0aW9uU3RhcnQiLCAic2VsZWN0aW9uRW5kIiwgIm5ld19zZWxlY3Rpb24iLCAibW92ZSIsICJtb3ZlRW5kIiwgInNlbGVjdCIsICJnZXRTZWxlY3Rpb24iLCAic2VsZWN0aW9uIiwgImNyZWF0ZVJhbmdlIiwgInJuZyIsICJkdXBsaWNhdGUiLCAidGV4dFJuZyIsICJzZXRFbmRQb2ludCIsICJjdXJyIiwgInRndCIsICJob3RjYXRfZG9udF9hZGRfdG9fd2F0Y2hsaXN0IiwgIkhvdENhdERvbnRBZGRUb1dhdGNobGlzdCIsICJob3RjYXRfbm9fYXV0b2NvbW1pdCIsICJIb3RDYXROb0F1dG9Db21taXQiLCAiaG90Y2F0X2RlbF9uZWVkc19kaWZmIiwgIkhvdENhdERlbE5lZWRzRGlmZiIsICJob3RjYXRfc3VnZ2VzdGlvbl9kZWxheSIsICJIb3RDYXRTdWdnZXN0aW9uRGVsYXkiLCAiaG90Y2F0X2VkaXRib3hfd2lkdGgiLCAiSG90Q2F0RWRpdEJveFdpZHRoIiwgImhvdGNhdF9zdWdnZXN0aW9ucyIsICJIb3RDYXRTdWdnZXN0aW9ucyIsICJob3RjYXRfc3VnZ2VzdGlvbnNfZml4ZWQiLCAiSG90Q2F0Rml4ZWRTdWdnZXN0aW9ucyIsICJob3RjYXRfc2luZ2xlX2NoYW5nZXNfYXJlX21pbm9yIiwgIkhvdENhdE1pbm9yU2luZ2xlQ2hhbmdlcyIsICJob3RjYXRfY2hhbmdlZF9iYWNrZ3JvdW5kIiwgIkhvdENhdENoYW5nZWRCYWNrZ3JvdW5kIiwgImhvdGNhdF91c2VfY2F0ZWdvcnlfbGlua3MiLCAiSG90Q2F0VXNlQ2F0ZWdvcnlMaW5rcyIsICJob3RjYXRfbGlzdF9zaXplIiwgIkhvdENhdExpc3RTaXplIiwgIkhvdENhdENoYW5nZVRhZyIsICJlRm9ybSIsICJlZGl0Zm9ybSIsICJjYXRSZWdFeHAiLCAib2xkVHh0IiwgImlzTWlub3JDaGFuZ2UiLCAibmV3VHh0IiwgIm9sZExpbmVzIiwgIm5ld0xpbmVzIiwgImNBcnIiLCAiZXhjZXB0IiwgImFBcnIiLCAiYkFyciIsICJsQXJyIiwgInNBcnIiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAiaXRlbSIsICJpbmQiLCAiZmlsdGVyIiwgImMiLCAicXVlcnlTZWxlY3RvciIsICJzdW0iLCAic3VtQSIsICIkY3QiLCAicmVtb3ZlQ2hhbmdlVGFnIiwgIk51bWJlciIsICJwYXJzZUludCIsICJpc05hTiIsICJtaW4iLCAiX2k2IiwgIl9PYmplY3QkZW50cmllcyIsICJlbnRyaWVzIiwgInN1Z2dlc3Rpb25Db25maWciLCAiZGVmYXVsdFZpZXciLCAiZ2V0Q29tcHV0ZWRTdHlsZSIsICJnZXRQcm9wZXJ0eVZhbHVlIiwgImN1cnJlbnRTdHlsZSIsICJkaXJlY3Rpb24iLCAiY2FuX2VkaXQiLCAiY2xvc2VGb3JtIiwgIl9pNyIsICJfZWRpdG9yczYiLCAic2V0dXBfdXBsb2FkIiwgImlwIiwgInJldXBsb2FkIiwgImRlc3RGaWxlIiwgImxhYmVsQ2VsbCIsICJsaW5lQ2VsbCIsICJ0ZXh0QWxpZ24iLCAibWFyZ2luIiwgImJvcmRlciIsICJ2ZXJ0aWNhbEFsaWduIiwgIm5ld1JvdyIsICJpbnNlcnRSb3ciLCAib2xkU3VibWl0IiwgImRvX3N1Ym1pdCIsICJldmFsIiwgIkZ1bmN0aW9uIiwgImViIiwgImFkZGVkT25lIiwgIl9pOCIsICJfZWRpdG9yczciLCAibmV3X2NhdCIsICJfY2xlYW5lZFRleHQiLCAicmVnZXgiLCAib25zdWJtaXQiLCAiY2xlYW5lZFRleHQiLCAiaXNPblBhZ2UiLCAibm9kZVR5cGUiLCAiTm9kZSIsICJFTEVNRU5UX05PREUiLCAiY2F0VGl0bGUiLCAiZ2V0QXR0cmlidXRlIiwgImluaXRpYWxpemVkIiwgInNldHVwVGltZW91dCIsICJmaW5kQnlDbGFzcyIsICJzY29wZSIsICJzZXR1cCIsICJhZGRpdGlvbmFsV29yayIsICJjbGVhclRpbWVvdXQiLCAiaGlkZGVuQ2F0cyIsICJmb290ZXIiLCAiY29udGFpbmVyIiwgImNyZWF0ZUVkaXRvcnMiLCAiY29weUNhdHMiLCAiYXQiLCAibGFzdFNwYW4iLCAiZW5hYmxlTXVsdGkiLCAiaW5uZXJIVE1MIiwgImN1cnNvciIsICJob29rIiwgImZpcmUiLCAiY3JlYXRlQ29tbWl0Rm9ybSIsICJmb3JtQ29udGFpbmVyIiwgIndnUGFnZUNvbnRlbnRNb2RlbCIsICJnZXRQYWdlIiwgInNldFN0YXRlIiwgIm5ld1NwYW5zIiwgImdldFN0YXRlIiwgIl9pOSIsICJfZWRpdG9yczgiLCAicmVhbGx5X3J1biIsICJ3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSIsICJVcGxvYWRGb3JtIiwgInByZXZpb3VzX2hvdGNhdF9zdGF0ZSIsICJ3Z0lzQXJ0aWNsZSIsICJydW4iLCAic3RhcnRlZCIsICJob3RjYXRfZ2V0X3N0YXRlIiwgImhvdGNhdF9zZXRfc3RhdGUiLCAiaG90Y2F0X2Nsb3NlX2Zvcm0iLCAicnVuV2hlblJlYWR5Il0KfQo=

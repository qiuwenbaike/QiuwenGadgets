/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|title1=RefToolbar.js|license1=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-refToolbar.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Edittools-refToolbar/modules/RefToolbar.ts}
 */

/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|title2=RefToolbarBase.js|license2=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-refToolbarBase.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Edittools-refToolbar/modules/RefToolbarBase.js}
 */

/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|title3=RefToolbar.js (RefToolbar 2.0)|license3=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:RefToolbar.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Edittools-refToolbar/modules/RefToolbar2.0.js}
 */

/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|title3=RefToolBar messages|license3=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:RefToolbarMessages-zh-hans.js}
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:RefToolbarMessages-zh-hant.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Edittools-refToolbar/modules/RefToolbarMessages.js}
 */

/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|title3=RefToolBar Config|license3=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:RefToolbarConfig.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Edittools-refToolbar/modules/RefToolbarConfig.js}
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/global.js
var require_global = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/global.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/fails.js
var require_fails = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/fails.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/descriptors.js
var require_descriptors = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/descriptors.js"(exports, module2) {
    "use strict";
    var fails = require_fails();
    module2.exports = !fails(function() {
      return Object.defineProperty({}, 1, { get: function() {
        return 7;
      } })[1] !== 7;
    });
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/function-bind-native.js
var require_function_bind_native = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/function-bind-native.js"(exports, module2) {
    "use strict";
    var fails = require_fails();
    module2.exports = !fails(function() {
      var test = function() {
      }.bind();
      return typeof test != "function" || test.hasOwnProperty("prototype");
    });
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/function-call.js
var require_function_call = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/function-call.js"(exports, module2) {
    "use strict";
    var NATIVE_BIND = require_function_bind_native();
    var call = Function.prototype.call;
    module2.exports = NATIVE_BIND ? call.bind(call) : function() {
      return call.apply(call, arguments);
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-property-is-enumerable.js
var require_object_property_is_enumerable = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-property-is-enumerable.js"(exports) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/create-property-descriptor.js
var require_create_property_descriptor = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/create-property-descriptor.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/function-uncurry-this.js
var require_function_uncurry_this = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/function-uncurry-this.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/classof-raw.js
var require_classof_raw = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/classof-raw.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var toString = uncurryThis({}.toString);
    var stringSlice = uncurryThis("".slice);
    module2.exports = function(it) {
      return stringSlice(toString(it), 8, -1);
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/indexed-object.js
var require_indexed_object = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/indexed-object.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/is-null-or-undefined.js
var require_is_null_or_undefined = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/is-null-or-undefined.js"(exports, module2) {
    "use strict";
    module2.exports = function(it) {
      return it === null || it === void 0;
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/require-object-coercible.js
var require_require_object_coercible = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/require-object-coercible.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/to-indexed-object.js
var require_to_indexed_object = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/to-indexed-object.js"(exports, module2) {
    "use strict";
    var IndexedObject = require_indexed_object();
    var requireObjectCoercible = require_require_object_coercible();
    module2.exports = function(it) {
      return IndexedObject(requireObjectCoercible(it));
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/is-callable.js
var require_is_callable = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/is-callable.js"(exports, module2) {
    "use strict";
    var documentAll = typeof document == "object" && document.all;
    module2.exports = typeof documentAll == "undefined" && documentAll !== void 0 ? function(argument) {
      return typeof argument == "function" || argument === documentAll;
    } : function(argument) {
      return typeof argument == "function";
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/is-object.js
var require_is_object = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/is-object.js"(exports, module2) {
    "use strict";
    var isCallable = require_is_callable();
    module2.exports = function(it) {
      return typeof it == "object" ? it !== null : isCallable(it);
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/get-built-in.js
var require_get_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/get-built-in.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-is-prototype-of.js
var require_object_is_prototype_of = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-is-prototype-of.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    module2.exports = uncurryThis({}.isPrototypeOf);
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/engine-user-agent.js
var require_engine_user_agent = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/engine-user-agent.js"(exports, module2) {
    "use strict";
    module2.exports = typeof navigator != "undefined" && String(navigator.userAgent) || "";
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/engine-v8-version.js
var require_engine_v8_version = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/engine-v8-version.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/symbol-constructor-detection.js
var require_symbol_constructor_detection = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/symbol-constructor-detection.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/use-symbol-as-uid.js
var require_use_symbol_as_uid = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/use-symbol-as-uid.js"(exports, module2) {
    "use strict";
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    module2.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/is-symbol.js
var require_is_symbol = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/is-symbol.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/try-to-string.js
var require_try_to_string = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/try-to-string.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/a-callable.js
var require_a_callable = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/a-callable.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/get-method.js
var require_get_method = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/get-method.js"(exports, module2) {
    "use strict";
    var aCallable = require_a_callable();
    var isNullOrUndefined = require_is_null_or_undefined();
    module2.exports = function(V, P) {
      var func = V[P];
      return isNullOrUndefined(func) ? void 0 : aCallable(func);
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/ordinary-to-primitive.js
var require_ordinary_to_primitive = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/ordinary-to-primitive.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/is-pure.js
var require_is_pure = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/is-pure.js"(exports, module2) {
    "use strict";
    module2.exports = false;
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/define-global-property.js
var require_define_global_property = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/define-global-property.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/shared-store.js
var require_shared_store = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/shared-store.js"(exports, module2) {
    "use strict";
    var IS_PURE = require_is_pure();
    var globalThis2 = require_global();
    var defineGlobalProperty = require_define_global_property();
    var SHARED = "__core-js_shared__";
    var store = module2.exports = globalThis2[SHARED] || defineGlobalProperty(SHARED, {});
    (store.versions || (store.versions = [])).push({
      version: "3.36.0",
      mode: IS_PURE ? "pure" : "global",
      copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
      license: "https://github.com/zloirock/core-js/blob/v3.36.0/LICENSE",
      source: "https://github.com/zloirock/core-js"
    });
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/shared.js
var require_shared = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/shared.js"(exports, module2) {
    "use strict";
    var store = require_shared_store();
    module2.exports = function(key, value) {
      return store[key] || (store[key] = value || {});
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/to-object.js
var require_to_object = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/to-object.js"(exports, module2) {
    "use strict";
    var requireObjectCoercible = require_require_object_coercible();
    var $Object = Object;
    module2.exports = function(argument) {
      return $Object(requireObjectCoercible(argument));
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/has-own-property.js
var require_has_own_property = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/has-own-property.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var toObject = require_to_object();
    var hasOwnProperty = uncurryThis({}.hasOwnProperty);
    module2.exports = Object.hasOwn || function hasOwn(it, key) {
      return hasOwnProperty(toObject(it), key);
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/uid.js
var require_uid = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/uid.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/well-known-symbol.js
var require_well_known_symbol = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/well-known-symbol.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/to-primitive.js
var require_to_primitive = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/to-primitive.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/to-property-key.js
var require_to_property_key = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/to-property-key.js"(exports, module2) {
    "use strict";
    var toPrimitive = require_to_primitive();
    var isSymbol = require_is_symbol();
    module2.exports = function(argument) {
      var key = toPrimitive(argument, "string");
      return isSymbol(key) ? key : key + "";
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/document-create-element.js
var require_document_create_element = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/document-create-element.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/ie8-dom-define.js
var require_ie8_dom_define = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/ie8-dom-define.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-get-own-property-descriptor.js
var require_object_get_own_property_descriptor = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-get-own-property-descriptor.js"(exports) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/v8-prototype-define-bug.js
var require_v8_prototype_define_bug = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/v8-prototype-define-bug.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/an-object.js
var require_an_object = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/an-object.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-define-property.js
var require_object_define_property = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-define-property.js"(exports) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/create-non-enumerable-property.js
var require_create_non_enumerable_property = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/create-non-enumerable-property.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/function-name.js
var require_function_name = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/function-name.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/inspect-source.js
var require_inspect_source = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/inspect-source.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/weak-map-basic-detection.js
var require_weak_map_basic_detection = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/weak-map-basic-detection.js"(exports, module2) {
    "use strict";
    var global2 = require_global();
    var isCallable = require_is_callable();
    var WeakMap = global2.WeakMap;
    module2.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/shared-key.js
var require_shared_key = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/shared-key.js"(exports, module2) {
    "use strict";
    var shared = require_shared();
    var uid = require_uid();
    var keys = shared("keys");
    module2.exports = function(key) {
      return keys[key] || (keys[key] = uid(key));
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/hidden-keys.js
var require_hidden_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/hidden-keys.js"(exports, module2) {
    "use strict";
    module2.exports = {};
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/internal-state.js
var require_internal_state = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/internal-state.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/make-built-in.js
var require_make_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/make-built-in.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/define-built-in.js
var require_define_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/define-built-in.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/math-trunc.js
var require_math_trunc = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/math-trunc.js"(exports, module2) {
    "use strict";
    var ceil = Math.ceil;
    var floor = Math.floor;
    module2.exports = Math.trunc || function trunc(x) {
      var n = +x;
      return (n > 0 ? floor : ceil)(n);
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/to-integer-or-infinity.js
var require_to_integer_or_infinity = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/to-integer-or-infinity.js"(exports, module2) {
    "use strict";
    var trunc = require_math_trunc();
    module2.exports = function(argument) {
      var number = +argument;
      return number !== number || number === 0 ? 0 : trunc(number);
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/to-absolute-index.js
var require_to_absolute_index = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/to-absolute-index.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/to-length.js
var require_to_length = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/to-length.js"(exports, module2) {
    "use strict";
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var min = Math.min;
    module2.exports = function(argument) {
      var len = toIntegerOrInfinity(argument);
      return len > 0 ? min(len, 9007199254740991) : 0;
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/length-of-array-like.js
var require_length_of_array_like = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/length-of-array-like.js"(exports, module2) {
    "use strict";
    var toLength = require_to_length();
    module2.exports = function(obj) {
      return toLength(obj.length);
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/array-includes.js
var require_array_includes = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/array-includes.js"(exports, module2) {
    "use strict";
    var toIndexedObject = require_to_indexed_object();
    var toAbsoluteIndex = require_to_absolute_index();
    var lengthOfArrayLike = require_length_of_array_like();
    var createMethod = function(IS_INCLUDES) {
      return function($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = lengthOfArrayLike(O);
        if (length === 0)
          return !IS_INCLUDES && -1;
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-keys-internal.js
var require_object_keys_internal = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-keys-internal.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/enum-bug-keys.js
var require_enum_bug_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/enum-bug-keys.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-get-own-property-names.js
var require_object_get_own_property_names = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-get-own-property-names.js"(exports) {
    "use strict";
    var internalObjectKeys = require_object_keys_internal();
    var enumBugKeys = require_enum_bug_keys();
    var hiddenKeys = enumBugKeys.concat("length", "prototype");
    exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
      return internalObjectKeys(O, hiddenKeys);
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-get-own-property-symbols.js
var require_object_get_own_property_symbols = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/object-get-own-property-symbols.js"(exports) {
    "use strict";
    exports.f = Object.getOwnPropertySymbols;
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/own-keys.js
var require_own_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/own-keys.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/copy-constructor-properties.js
var require_copy_constructor_properties = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/copy-constructor-properties.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/is-forced.js
var require_is_forced = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/is-forced.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/export.js
var require_export = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/export.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/is-array.js
var require_is_array = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/is-array.js"(exports, module2) {
    "use strict";
    var classof = require_classof_raw();
    module2.exports = Array.isArray || function isArray(argument) {
      return classof(argument) === "Array";
    };
  }
});

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/array-set-length.js
var require_array_set_length = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/array-set-length.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/does-not-exceed-safe-integer.js
var require_does_not_exceed_safe_integer = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/internals/does-not-exceed-safe-integer.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/modules/es.array.push.js
var require_es_array_push = __commonJS({
  "node_modules/.pnpm/core-js@3.36.0/node_modules/core-js/modules/es.array.push.js"() {
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

// dist/Edittools-refToolbar/Edittools-refToolbar.js
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
//! src/Edittools-refToolbar/modules/constant.ts
var WG_ACTION = mw.config.get("wgAction");
var WG_PAGE_CONTENT_MODEL = mw.config.get("wgPageContentModel");
var WG_USER_LANGUAGE = mw.config.get("wgUserLanguage");
var IS_WG_EDIT_OR_SUBMIT_ACTION = ["edit", "submit"].includes(WG_ACTION);
//! src/Edittools-refToolbar/Edittools-refToolbar.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/Edittools-refToolbar/modules/util/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("RefToolbar/2.0");
//! src/Edittools-refToolbar/modules/util/getMessage.ts
var getMessage = (key, ...args) => {
  return args.length ? mw.message(key, ...args).parse() : mw.message(key).plain();
};
//! src/Edittools-refToolbar/modules/RefToolbarConfig.js
var refToolbarConfig = () => {
  const {
    CiteTemplate,
    CiteErrorCheck
  } = window;
  CiteTB.Options = {
    "date format": "<year>-<zmonth>-<zdate>",
    "autodate fields": ["accessdate"],
    months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    modal: true,
    autoparse: true,
    expandtemplates: false
  };
  new CiteTemplate("cite web", "web", [
    // Basic fields
    {
      field: "author<N>",
      increment_group: "author_alt",
      increment_button: true
    },
    {
      field: "title",
      autofillprop: "title"
    },
    {
      field: "url",
      autofillid: "url"
    },
    {
      field: "website",
      autofillprop: "journal"
    },
    {
      field: "publisher",
      autofillprop: "publisher"
    },
    {
      field: "accessdate"
    },
    {
      field: "ref",
      tooltip: "cite-ref-tooltip"
    }
  ], [
    // Expanded fields
    {
      field: "authorlink<N>",
      tooltip: "cite-authorlink-tooltip",
      increment_group: "authorlink",
      increment_button: true
    },
    {
      field: "last<N>",
      autofillprop: "last-incr",
      increment_group: "author"
    },
    {
      field: "first<N>",
      autofillprop: "first-incr",
      increment_group: "author",
      increment_button: true
    },
    {
      field: "location"
    },
    {
      field: "page",
      tooltip: "cite-page-tooltip"
    },
    {
      field: "pages",
      autofillprop: "pages",
      tooltip: "cite-pages-tooltip"
    },
    {
      field: "language",
      autofillprop: "language"
    },
    {
      field: "format"
    },
    {
      field: "doi",
      autofillid: "doi",
      autofillprop: "doi"
    },
    {
      field: "date",
      autofillprop: "date"
    },
    {
      field: "quote"
    }
  ]);
  new CiteTemplate("cite news", "news", [
    // Basic fields
    {
      field: "author<N>",
      increment_group: "author_alt",
      increment_button: true
    },
    {
      field: "title",
      autofillprop: "title"
    },
    {
      field: "url",
      autofillid: "url"
    },
    {
      field: "accessdate"
    },
    {
      field: "work",
      tooltip: "cite-work-tooltip",
      autofillprop: "journal"
    },
    {
      field: "agency"
    },
    {
      field: "issue"
    },
    {
      field: "publisher",
      autofillprop: "publisher"
    },
    {
      field: "date",
      autofillprop: "date"
    },
    {
      field: "ref",
      tooltip: "cite-ref-tooltip"
    }
  ], [
    // Expanded fields
    {
      field: "authorlink<N>",
      tooltip: "cite-authorlink-tooltip",
      increment_group: "authorlink",
      increment_button: true
    },
    {
      field: "last<N>",
      autofillprop: "last-incr",
      increment_group: "author"
    },
    {
      field: "first<N>",
      autofillprop: "first-incr",
      increment_group: "author",
      increment_button: true
    },
    {
      field: "location"
    },
    {
      field: "page",
      tooltip: "cite-page-tooltip"
    },
    {
      field: "pages",
      autofillprop: "pages",
      tooltip: "cite-pages-tooltip"
    },
    {
      field: "language",
      autofillprop: "language"
    },
    {
      field: "format"
    },
    {
      field: "doi",
      autofillid: "doi",
      autofillprop: "doi"
    },
    {
      field: "quote"
    }
  ]);
  new CiteTemplate("cite book", "book", [
    // Basic fields
    {
      field: "author<N>",
      increment_group: "author_alt",
      increment_button: true
    },
    {
      field: "coauthors",
      autofillprop: "coauthors"
    },
    {
      field: "editor"
    },
    {
      field: "title",
      autofillprop: "title"
    },
    {
      field: "date",
      autofillprop: "year"
    },
    {
      field: "publisher",
      autofillprop: "publisher"
    },
    {
      field: "location",
      autofillprop: "location"
    },
    {
      field: "isbn",
      /* "autofillid":"isbn", */
      autofillprop: "isbn"
    },
    {
      field: "page",
      tooltip: "cite-page-tooltip"
    },
    {
      field: "pages",
      autofillprop: "pages",
      tooltip: "cite-pages-tooltip"
    },
    {
      field: "edition",
      autofillprop: "edition"
    },
    {
      field: "url",
      autofillid: "url"
    },
    {
      field: "accessdate"
    },
    {
      field: "ref",
      tooltip: "cite-ref-tooltip"
    }
  ], [
    // Expanded fields
    {
      field: "last<N>",
      autofillprop: "last-incr",
      increment_group: "author"
    },
    {
      field: "first<N>",
      autofillprop: "first-incr",
      increment_group: "author",
      increment_button: true
    },
    {
      field: "authorlink<N>",
      tooltip: "cite-authorlink-tooltip",
      increment_group: "authorlink",
      increment_button: true
    },
    {
      field: "editor<N>-last",
      increment_group: "editor"
    },
    {
      field: "editor<N>-first",
      increment_group: "editor",
      increment_button: true
    },
    {
      field: "editor<N>-link",
      increment_group: "editorlink",
      increment_button: true
    },
    {
      field: "language",
      autofillprop: "language"
    },
    {
      field: "format"
    },
    {
      field: "chapter",
      autofillprop: "chapter"
    },
    {
      field: "quote"
    }
  ]);
  new CiteTemplate("cite journal", "journal", [
    // Basic fields
    {
      field: "author<N>",
      increment_group: "author_alt",
      increment_button: true
    },
    {
      field: "coauthors",
      autofillprop: "coauthors"
    },
    {
      field: "title",
      autofillprop: "title"
    },
    {
      field: "journal",
      autofillprop: "journal"
    },
    {
      field: "date",
      autofillprop: "date"
    },
    {
      field: "volume",
      autofillprop: "volume"
    },
    {
      field: "issue",
      autofillprop: "issue"
    },
    {
      field: "page",
      tooltip: "cite-page-tooltip"
    },
    {
      field: "pages",
      autofillprop: "pages",
      tooltip: "cite-pages-tooltip"
    },
    {
      field: "doi",
      autofillid: "doi",
      autofillprop: "doi"
    },
    {
      field: "pmid",
      autofillid: "pmid"
    },
    {
      field: "url",
      autofillid: "url"
    },
    {
      field: "accessdate"
    },
    {
      field: "ref",
      tooltip: "cite-ref-tooltip"
    }
  ], [
    // Expanded fields
    {
      field: "authorlink<N>",
      tooltip: "cite-authorlink-tooltip",
      increment_group: "authorlink",
      increment_button: true
    },
    {
      field: "last<N>",
      autofillprop: "last-incr",
      increment_group: "author"
    },
    {
      field: "first<N>",
      autofillprop: "first-incr",
      increment_group: "author",
      increment_button: true
    },
    {
      field: "editor<N>-last",
      increment_group: "editor"
    },
    {
      field: "editor<N>-first",
      increment_group: "editor",
      increment_button: true
    },
    {
      field: "editor<N>-link",
      increment_group: "editorlink",
      increment_button: true
    },
    {
      field: "series"
    },
    {
      field: "at",
      tooltip: "cite-at-tooltip"
    },
    {
      field: "trans-title"
    },
    {
      field: "publisher",
      autofillprop: "publisher"
    },
    {
      field: "location"
    },
    {
      field: "language",
      autofillprop: "language"
    },
    {
      field: "format"
    },
    {
      field: "issn",
      autofillprop: "issn"
    },
    {
      field: "pmc"
    },
    {
      field: "oclc"
    },
    {
      field: "bibcode"
    },
    {
      field: "id"
    },
    {
      field: "quote"
    },
    {
      field: "postscript",
      tooltip: "cite-postscript-tooltip"
    }
  ]);
  new CiteTemplate("cite conference", "conference", [
    // Basic fields
    {
      field: "author",
      autofillprop: "author1"
    },
    {
      field: "coauthors",
      autofillprop: "coauthors"
    },
    {
      field: "title",
      autofillprop: "title"
    },
    {
      field: "conference"
    },
    {
      field: "conferenceurl"
    },
    {
      field: "booktitle",
      autofillprop: "journal"
    },
    {
      field: "date",
      autofillprop: "date"
    },
    {
      field: "year"
    },
    {
      field: "month"
    },
    {
      field: "volume",
      autofillprop: "volume"
    },
    {
      field: "publisher",
      autofillprop: "publisher"
    },
    {
      field: "location",
      autofillprop: "location"
    },
    {
      field: "isbn"
    },
    {
      field: "pages"
    },
    {
      field: "doi",
      autofillid: "doi",
      autofillprop: "doi"
    },
    {
      field: "pmid",
      autofillid: "pmid"
    },
    {
      field: "url",
      autofillid: "url"
    },
    {
      field: "accessdate",
      tooltip: "cite-accessdate-tooltip"
    }
  ], [
    // Expanded fields
    {
      field: "last",
      autofillprop: "last1"
    },
    {
      field: "first",
      autofillprop: "first1"
    },
    {
      field: "authorlink",
      tooltip: "cite-authorlink-tooltip"
    },
    {
      field: "editor"
    },
    {
      field: "others"
    },
    {
      field: "edition",
      autofillprop: "edition"
    },
    {
      field: "language",
      autofillprop: "language"
    },
    {
      field: "format"
    },
    {
      field: "issn"
    },
    {
      field: "oclc"
    },
    {
      field: "id",
      tooltip: "cite-id-tooltip"
    },
    {
      field: "quote"
    }
  ]);
  new CiteTemplate("cite encyclopedia", "encyclopedia", [
    // Basic fields
    {
      field: "author",
      autofillprop: "author1"
    },
    {
      field: "title"
    },
    {
      field: "editor"
    },
    {
      field: "encyclopedia",
      autofillprop: "title"
    },
    {
      field: "volume"
    },
    {
      field: "year",
      autofillprop: "year"
    },
    {
      field: "publisher",
      autofillprop: "publisher"
    },
    {
      field: "location",
      autofillprop: "location"
    },
    {
      field: "isbn"
    },
    {
      field: "pages"
    },
    {
      field: "url"
    }
  ], [
    // Expanded fields
    {
      field: "last",
      autofillprop: "last1"
    },
    {
      field: "first",
      autofillprop: "first1"
    },
    {
      field: "authorlink",
      tooltip: "cite-authorlink-tooltip"
    },
    {
      field: "coauthors",
      autofillprop: "coauthors"
    },
    {
      field: "others"
    },
    {
      field: "edition",
      autofillprop: "edition"
    },
    {
      field: "oclc"
    },
    {
      field: "id",
      tooltip: "cite-id-tooltip"
    },
    {
      field: "accessdate",
      tooltip: "cite-accessdate-tooltip"
    },
    {
      field: "language",
      autofillprop: "language"
    },
    {
      field: "format"
    },
    {
      field: "date"
    },
    {
      field: "month"
    },
    {
      field: "quote"
    }
  ]);
  new CiteErrorCheck({
    type: "reflist",
    testname: "samecontent",
    desc: "cite-samecontent-desc",
    func: (reflist) => {
      const errors = [];
      const refs2 = [];
      var _iterator = _createForOfIteratorHelper(reflist), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          const element = _step.value;
          if (element.shorttag) {
            continue;
          }
          if (refs2.includes(element.content)) {
            if (errors.includes(element.content)) {
              continue;
            }
            errors.push(element.content);
          } else {
            refs2.push(element.content);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      const ret = [];
      for (var _i = 0, _errors = errors; _i < _errors.length; _i++) {
        const error = _errors[_i];
        ret.push({
          msg: "cite-samecontent-error",
          err: error
        });
      }
      return ret;
    }
  });
  new CiteErrorCheck({
    type: "reflist",
    testname: "repeated",
    desc: "cite-repeated-desc",
    func: (reflist) => {
      const errors = [];
      const refs2 = [];
      var _iterator2 = _createForOfIteratorHelper(reflist), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          const element = _step2.value;
          if (element.shorttag || !element.refname) {
            continue;
          }
          if (refs2.includes(element.refname)) {
            if (errors.includes(element.refname)) {
              continue;
            }
            errors.push(element.refname);
          } else {
            refs2.push(element.refname);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      const ret = [];
      for (var _i2 = 0, _errors2 = errors; _i2 < _errors2.length; _i2++) {
        const error = _errors2[_i2];
        ret.push({
          msg: "cite-repeated-error",
          err: error
        });
      }
      return ret;
    }
  });
  new CiteErrorCheck({
    type: "reflist",
    testname: "undefined",
    desc: "cite-undefined-desc",
    func: (reflist) => {
      const errors = [];
      const longrefs = [];
      for (var _i3 = 0, _Object$values = Object.values(reflist); _i3 < _Object$values.length; _i3++) {
        const value = _Object$values[_i3];
        const {
          refname,
          shorttag
        } = value;
        if (!shorttag && refname) {
          longrefs.push(value.refname);
        }
        if (shorttag && errors.includes(refname) === -1 && !longrefs.includes(refname)) {
          errors.push(refname);
        }
      }
      const ret = [];
      for (var _i4 = 0, _errors3 = errors; _i4 < _errors3.length; _i4++) {
        const error = _errors3[_i4];
        ret.push({
          msg: "cite-undefined-error",
          err: error
        });
      }
      return ret;
    }
  });
  CiteTB.init();
};
//! src/Edittools-refToolbar/modules/RefToolbar2.0.js
var refToolbar2 = ($body) => {
  CiteTB.DefaultOptions = {
    "date format": "<year>-<zmonth>-<zdate>",
    "autodate fields": [],
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    modal: true,
    autoparse: false,
    expandtemplates: false
  };
  CiteTB.getOption = (opt) => {
    if (CiteTB.UserOptions[opt] !== void 0) {
      return CiteTB.UserOptions[opt];
    } else if (CiteTB.Options[opt] !== void 0) {
      return CiteTB.Options[opt];
    }
    return CiteTB.DefaultOptions[opt];
  };
  CiteTB.init = () => {
    var _$$width2, _$$width3;
    $(document).find("head").trigger("reftoolbarbase");
    const $target = $body.find("textarea[name=wpTextbox1]");
    const temlist = {};
    for (const t in CiteTB.Templates) {
      if (Object.hasOwn(CiteTB.Templates, t)) {
        var _$$width;
        const tem = CiteTB.Templates[t];
        const sform = CiteTB.escStr(tem.shortform);
        const actionobj = {
          type: "dialog",
          module: "cite-dialog-".concat(sform)
        };
        const dialogobj = {};
        dialogobj["cite-dialog-".concat(sform)] = {
          resizeme: false,
          titleMsg: "cite-dialog-".concat(sform),
          id: "citetoolbar-".concat(sform),
          init: () => {
          },
          html: tem.getInitial(),
          dialog: {
            width: Math.round((_$$width = $(window).width()) !== null && _$$width !== void 0 ? _$$width : 0 * 0.8),
            open() {
              $(this).html(CiteTB.getOpenTemplate().getForm());
              $body.find(".cite-prev-parse").on("click", (e) => {
                e.preventDefault();
                CiteTB.prevParseClick();
              });
            },
            buttons: {
              "cite-form-submit"() {
                const ref = CiteTB.getRef(false, true);
                $(this).dialog("close");
                $.wikiEditor.modules.toolbar.fn.doAction($(this).data("context"), {
                  type: "encapsulate",
                  options: {
                    post: ref
                  }
                }, $(this));
              },
              "cite-form-showhide": CiteTB.showHideExtra,
              "cite-refpreview"() {
                const ref = CiteTB.getRef(false, false);
                const template = CiteTB.getOpenTemplate();
                const div = $("#citetoolbar-".concat(CiteTB.escStr(template.shortform)));
                div.find(".cite-preview-label").show();
                div.find(".cite-ref-preview").text(ref).show();
                if (CiteTB.getOption("autoparse")) {
                  CiteTB.prevParseClick();
                } else {
                  div.find(".cite-prev-parse").show();
                  div.find(".cite-prev-parsed-label").hide();
                  div.find(".cite-preview-parsed").html("");
                }
              },
              "wikieditor-toolbar-tool-link-cancel"() {
                $(this).dialog("close");
              },
              "cite-form-reset"() {
                CiteTB.resetForm();
              }
            }
          }
        };
        try {
          $target.wikiEditor("addDialog", dialogobj);
        } catch {
        }
        temlist[sform] = {
          label: tem.templatename,
          action: actionobj
        };
      }
    }
    const refsection = {
      sections: {
        cites: {
          type: "toolbar",
          label: getMessage("cite-section-label"),
          groups: {
            template: {
              tools: {
                template: {
                  type: "select",
                  label: getMessage("cite-template-list"),
                  list: temlist
                }
              }
            },
            namedrefs: {
              label: getMessage("cite-named-refs-label"),
              tools: {
                nrefs: {
                  type: "button",
                  action: {
                    type: "dialog",
                    module: "cite-toolbar-namedrefs"
                  },
                  icon: "https://tu.zhongwen.wiki/images/qiuwenbaike/zh/thumb/b/be/Nuvola_clipboard_lined.svg/22px-Nuvola_clipboard_lined.svg.png",
                  section: "cites",
                  group: "namedrefs",
                  label: getMessage("cite-named-refs-button")
                }
              }
            },
            errorcheck: {
              label: getMessage("cite-errorcheck-label"),
              tools: {
                echeck: {
                  type: "button",
                  action: {
                    type: "dialog",
                    module: "cite-toolbar-errorcheck"
                  },
                  icon: "https://tu.zhongwen.wiki/images/qiuwenbaike/zh/thumb/a/a3/Nuvola_apps_korganizer-NO.png/22px-Nuvola_apps_korganizer-NO.png",
                  section: "cites",
                  group: "errorcheck",
                  label: getMessage("cite-errorcheck-button")
                }
              }
            }
          }
        }
      }
    };
    const defaultdialogs = {
      "cite-toolbar-errorcheck": {
        titleMsg: "cite-errorcheck-label",
        id: "citetoolbar-errorcheck",
        resizeme: false,
        init: () => {
        },
        html: '<div id="cite-namedref-loading"><img src="https://tu.zhongwen.wiki/images/qiuwenbaike/zh/d/de/Ajax-loader.gif" />&nbsp;'.concat(getMessage("cite-loading"), "</div>"),
        dialog: {
          width: Math.round((_$$width2 = $(window).width()) !== null && _$$width2 !== void 0 ? _$$width2 : 0 * 0.8),
          open() {
            CiteTB.loadRefs();
          },
          buttons: {
            "cite-errorcheck-submit"() {
              const errorchecks = $body.find("input[name=cite-err-test]:checked");
              let errors = [];
              var _iterator3 = _createForOfIteratorHelper(errorchecks), _step3;
              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                  const errorcheck = _step3.value;
                  errors = [...errors, ...CiteTB.ErrorChecks[$(errorcheck).val()].run()];
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
              CiteTB.displayErrors(errors);
              $(this).dialog("close");
            },
            "wikieditor-toolbar-tool-link-cancel"() {
              $(this).dialog("close");
            }
          }
        }
      },
      "cite-toolbar-namedrefs": {
        titleMsg: "cite-named-refs-title",
        resizeme: false,
        id: "citetoolbar-namedrefs",
        html: '<div id="cite-namedref-loading"> <img src="https://tu.zhongwen.wiki/images/qiuwenbaike/zh/d/de/Ajax-loader.gif" /> &nbsp;'.concat(getMessage("cite-loading"), "</div>"),
        init: () => {
        },
        dialog: {
          width: Math.round((_$$width3 = $(window).width()) !== null && _$$width3 !== void 0 ? _$$width3 : 0 * 0.8),
          open() {
            CiteTB.loadRefs();
          },
          buttons: {
            "cite-form-submit"() {
              const refname = $body.find("#cite-namedref-select").val();
              if (refname === "") {
                return;
              }
              $(this).dialog("close");
              $.wikiEditor.modules.toolbar.fn.doAction($(this).data("context"), {
                type: "encapsulate",
                options: {
                  post: CiteTB.getNamedRef(refname, true)
                }
              }, $(this));
            },
            "wikieditor-toolbar-tool-link-cancel"() {
              $(this).dialog("close");
            }
          }
        }
      }
    };
    try {
      $target.wikiEditor("addDialog", defaultdialogs);
    } catch {
    }
    $body.find("#citetoolbar-namedrefs").off("dialogopen");
    if (!CiteTB.getOption("modal")) {
      mw.util.addCSS(".ui-widget-overlay{display:none !important}");
    }
    try {
      $target.wikiEditor("addToToolbar", refsection);
    } catch {
    }
  };
  CiteTB.mainRefList = [];
  CiteTB.refsLoaded = false;
  CiteTB.getRef = (inneronly, forinsert) => {
    let i, j, g, group;
    const template = CiteTB.getOpenTemplate();
    const {
      templatename
    } = template;
    let res = "";
    const refobj = {
      shorttag: false
    };
    if (!inneronly) {
      group = $("#cite-".concat(CiteTB.escStr(template.shortform), "-group")).val();
      let refname = $("#cite-".concat(CiteTB.escStr(template.shortform), "-name")).val();
      res += "<ref";
      if (refname) {
        refname = String(refname).trim();
        res += " name=".concat(CiteTB.getQuotedString(refname));
        refobj.refname = refname;
      }
      if (group) {
        group = String(group).trim();
        res += " group=".concat(CiteTB.getQuotedString(group));
        refobj.refgroup = group;
      }
      res += ">";
    }
    let content = "{{".concat(templatename);
    for (g in template.incrementables) {
      if (Object.hasOwn(template.incrementables, g)) {
        group = template.incrementables[g];
        for (i = 1; i <= group.val; i++) {
          for (j = 0; j < group.fields.length; j++) {
            const fieldname = group.fields[j].field;
            const fieldid = fieldname.replace("<N>", i.toString());
            const field = $("#cite-".concat(CiteTB.escStr(template.shortform), "-").concat(fieldid)).val();
            if (field) {
              content += " |".concat(fieldid, "=");
              content += String(field).trim();
            }
          }
        }
      }
    }
    for (i = 0; i < template.basic.length; i++) {
      if (template.basic[i].increment_group) {
        continue;
      }
      const fieldname = template.basic[i].field;
      const field = $("#cite-".concat(CiteTB.escStr(template.shortform), "-").concat(fieldname)).val();
      if (field) {
        content += " |".concat(fieldname, "=");
        content += String(field).trim();
      }
    }
    if ($body.find("#cite-form-status").val() !== "closed") {
      for (i = 0; i < template.extra.length; i++) {
        if (template.extra[i].increment_group) {
          continue;
        }
        const fieldname = template.extra[i].field;
        const field = $("#cite-".concat(CiteTB.escStr(template.shortform), "-").concat(fieldname)).val();
        if (field) {
          content += " |".concat(fieldname, "=");
          content += String(field).trim();
        }
      }
    }
    content += "}}";
    res += content;
    refobj.content = content;
    if (!inneronly) {
      res += "</ref>";
    }
    if (forinsert) {
      CiteTB.mainRefList.push(refobj);
    }
    return res;
  };
  CiteTB.getNamedRef = (refname, forinsert) => {
    if (forinsert) {
      CiteTB.mainRefList.push({
        shorttag: true,
        refname
      });
    }
    return "<ref name=".concat(CiteTB.getQuotedString(refname), " />");
  };
  CiteTB.loadRefs = () => {
    if (CiteTB.refsLoaded) {
      return;
    }
    CiteTB.getPageText(CiteTB.loadRefsInternal);
  };
  CiteTB.loadRefsInternal = (text) => {
    const refsregex = /< *ref(?: +(name|group) *= *(?:"([^"]*?)"|'([^']*?)'|([^ '"/>]*?)) *)? *(?: +(name|group) *= *(?:"([^"]*?)"|'([^']*?)'|([^ '"/>]*?)) *)? *(?:\/ *>|>((?:.|\n)*?)< *\/ *ref *>)/gim;
    while (true) {
      const ref = refsregex.exec(text);
      if (ref === null) {
        break;
      }
      const refobj = {};
      if (ref[9]) {
        [, , , , , , , , , refobj.content] = ref;
        refobj.shorttag = false;
      } else {
        refobj.shorttag = true;
      }
      if (ref[1] !== "") {
        if (ref[2]) {
          [, , refobj["ref".concat(ref[1])]] = ref;
        } else if (ref[3]) {
          [, , , refobj["ref".concat(ref[1])]] = ref;
        } else {
          [, , , , refobj["ref".concat(ref[1])]] = ref;
        }
      }
      if (ref[5] !== "") {
        if (ref[6]) {
          [, , , , , , refobj["ref".concat(ref[5])]] = ref;
        } else if (ref[7]) {
          [, , , , , , , refobj["ref".concat(ref[5])]] = ref;
        } else {
          [, , , , , , , , refobj["ref".concat(ref[5])]] = ref;
        }
      }
      CiteTB.mainRefList.push(refobj);
    }
    CiteTB.refsLoaded = true;
    CiteTB.setupErrorCheck();
    CiteTB.setupNamedRefs();
  };
  CiteTB.parse = (text, callback) => {
    const postdata = {
      action: "parse",
      title: mw.config.get("wgPageName"),
      text,
      prop: "text",
      format: "json",
      formatversion: "2"
    };
    api.post(postdata).then(({
      parse
    }) => {
      const html = parse.text;
      callback(html);
    });
  };
  CiteTB.expandtemplates = (text, callback) => {
    const postdata = {
      action: "expandtemplates",
      title: mw.config.get("wgPageName"),
      text,
      format: "json",
      formatversion: "2"
    };
    api.post(postdata).then(({
      expandtemplates
    }) => {
      const restext = expandtemplates.wikitext;
      callback(restext);
    });
  };
  CiteTB.getPageText = (callback) => {
    const section = $body.find("input[name=wpSection]").val();
    if (section === "") {
      if (CiteTB.getOption("expandtemplates")) {
        CiteTB.expandtemplates($body.find("textarea[name=wpTextbox1]").wikiEditor("getContents").text(), callback);
      } else {
        callback($body.find("textarea[name=wpTextbox1]").wikiEditor("getContents").text());
      }
    } else {
      const postdata = {
        action: "query",
        prop: "revisions",
        rvprop: "content",
        pageids: mw.config.get("wgArticleId"),
        format: "json",
        formatversion: "2"
      };
      if (CiteTB.getOption("expandtemplates")) {
        postdata.rvexpandtemplates = "1";
      }
      api.get(postdata).then(({
        query
      }) => {
        const pagetext = query.pages[0].revisions[0].content;
        callback(pagetext);
      });
    }
  };
  CiteTB.safeDecodeURIComponent = (s) => {
    try {
      s = decodeURIComponent(s);
    } catch {
    }
    return s;
  };
  CiteTB.initAutofill = function() {
    var _$$attr;
    const elemid = (_$$attr = $(this).attr("id")) !== null && _$$attr !== void 0 ? _$$attr : "";
    const res = /^cite-auto-(.*?)-(.*)-(.*)$/.exec(elemid);
    if (!res) {
      return false;
    }
    const [, tem, field, autotype] = res;
    let id = $("#cite-".concat(tem, "-").concat(field)).val();
    if (!id) {
      return false;
    }
    let url = "https://citoid.qiuwen.net.cn/lookup.php?";
    id = CiteTB.safeDecodeURIComponent(id);
    url += "".concat(autotype, "=").concat(encodeURIComponent(id));
    url += "&template=".concat(encodeURIComponent(tem));
    const s = document.createElement("script");
    s.setAttribute("src", url);
    s.setAttribute("type", "text/javascript");
    document.head.append(s);
    return false;
  };
  CiteTB.autoFill = (data, template, type) => {
    const cl = "cite-".concat(template, "-");
    let i, j;
    let coauthors;
    $(".".concat(cl, "title")).val(data.title);
    if (data.authors && data.authors.length > 0) {
      if ($(".".concat(cl, "last-incr-1")).length > 0) {
        var _$$eq$attr;
        const classes = (_$$eq$attr = $(".".concat(cl, "last-incr-1")).eq(0).attr("class")) === null || _$$eq$attr === void 0 ? void 0 : _$$eq$attr.split(/\s+/);
        if (!classes) {
          return;
        }
        let group = false;
        const patt = /cite-[^-]*?-incr-(.*)/;
        var _iterator4 = _createForOfIteratorHelper(classes), _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
            const class_ = _step4.value;
            if (patt.exec(class_)) {
              [, group] = patt.exec(class_);
              break;
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
        $(".".concat(cl, "last-incr-1")).val(data.authors[0][0]);
        $(".".concat(cl, "first-incr-1")).val(data.authors[0][1]);
        const elemid = "#cite-incr-".concat(template, "-").concat(group);
        for (i = 2; i < data.authors.length + 1; i++) {
          $(elemid).trigger("click");
          $(".".concat(cl, "last-incr-").concat(i.toString())).val(data.authors[i - 1][0]);
          $(".".concat(cl, "first-incr-").concat(i.toString())).val(data.authors[i - 1][1]);
        }
      } else if ($(".".concat(cl, "author-incr-1")).length > 0) {
        var _$$eq$attr2;
        const classes = (_$$eq$attr2 = $(".".concat(cl, "author-incr-1")).eq(0).attr("class")) === null || _$$eq$attr2 === void 0 ? void 0 : _$$eq$attr2.split(/\s+/);
        if (!classes) {
          return;
        }
        let group = false;
        const patt = /cite-[^-]*?-incr-(.*)/;
        var _iterator5 = _createForOfIteratorHelper(classes), _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
            const class_ = _step5.value;
            if (patt.exec(class_)) {
              [, group] = patt.exec(class_);
              break;
            }
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
        $(".".concat(cl, "author-incr-1")).val(data.authors[0].join(", "));
        const elemid = "#cite-incr-".concat(template, "-").concat(group);
        for (i = 2; i < data.authors.length + 1; i++) {
          $(elemid).trigger("click");
          $(".".concat(cl, "author-incr-").concat(i.toString())).val(data.authors[i - 1].join(", "));
        }
      } else if ($(".".concat(cl, "last1")).length > 0) {
        for (i = 0; data.authors && i < data.authors.length; i++) {
          if ($(".".concat(cl, "last").concat(i + 1)).length) {
            $(".".concat(cl, "last").concat(i + 1)).val(data.authors[i][0]);
            $(".".concat(cl, "first").concat(i + 1)).val(data.authors[i][1]);
          } else {
            coauthors = [];
            for (j = i; j < data.authors.length; j++) {
              coauthors.push(data.authors[j].join(", "));
            }
            $(".".concat(cl, "coauthors")).val(coauthors.join("; "));
            break;
          }
        }
      } else if ($(".".concat(cl, "author1")).length === 0) {
        const authors = [];
        for (i = 0; data.authors && i < data.authors.length; i++) {
          authors.push(data.authors[i].join(", "));
        }
        $(".".concat(cl, "authors")).val(authors.join("; "));
      } else {
        for (i = 0; data.authors && i < data.authors.length; i++) {
          if ($(".".concat(cl, "author").concat(i + 1)).length) {
            $(".".concat(cl, "author").concat(i + 1)).val(data.authors[i].join(", "));
          } else {
            coauthors = [];
            for (j = i; j < data.authors.length; j++) {
              coauthors.push(data.authors[j].join(", "));
            }
            $(".".concat(cl, "coauthors")).val(coauthors.join("; "));
            break;
          }
        }
      }
    }
    if (data.date) {
      try {
        const DT = new Date(data.date);
        if (/^\d{4}-\d{2}(-XX)?$/i.test(data.date)) {
          data.date = data.date.replace("-XX", "");
          $(".".concat(cl, "date")).val(CiteTB.formatDate(DT, false, true));
        } else if (/^\d{4}-\d{2}-\d{2}?/i.test(data.date)) {
          $(".".concat(cl, "date")).val(CiteTB.formatDate(DT, true, true));
        } else {
          $(".".concat(cl, "date")).val(data.date);
        }
      } catch {
      }
    } else {
      $(".".concat(cl, "date")).val(data.date);
    }
    switch (type) {
      case "pmid":
      case "doi":
        $(".".concat(cl, "journal")).val(data.journal);
        $(".".concat(cl, "volume")).val(data.volume);
        $(".".concat(cl, "issue")).val(data.issue);
        $(".".concat(cl, "pages")).val(data.pages);
        if (type === "pmid" && data.doi) {
          $(".".concat(cl, "doi")).val(data.doi);
        }
        break;
      case "isbn":
        $(".".concat(cl, "publisher")).val(data.publisher);
        $(".".concat(cl, "location")).val(data.location);
        $(".".concat(cl, "edition")).val(data.edition);
        break;
      case "url":
        $(".".concat(cl, "journal")).val(data.journal);
        $(".".concat(cl, "volume")).val(data.volume);
        $(".".concat(cl, "issue")).val(data.issue);
        $(".".concat(cl, "pages")).val(data.pages);
        $(".".concat(cl, "publisher")).val(data.publisher);
        $(".".concat(cl, "edition")).val(data.edition);
        $(".".concat(cl, "isbn")).val(data.isbn);
        $(".".concat(cl, "issn")).val(data.issn);
        $(".".concat(cl, "doi")).val(data.doi);
        if (data.language && data.language !== "en-US" && data.language !== "en-GB") {
          $(".".concat(cl, "language")).val(data.language);
        }
        $(".".concat(cl, "chapter")).val(data.chapter);
        break;
    }
  };
  CiteTB.incrementFields = function() {
    var _$$attr2;
    const template = CiteTB.getOpenTemplate();
    const [currentrow] = $(this).parents("tr");
    $(this).prev().css("width", "100%");
    $(this).detach();
    const elemid = (_$$attr2 = $(this).attr("id")) !== null && _$$attr2 !== void 0 ? _$$attr2 : "";
    const res = /^cite-incr-(.*?)-(.*)$/.exec(elemid);
    if (!res) {
      return;
    }
    const [, , group] = res;
    const increments = template.incrementables[group];
    const {
      fields
    } = increments;
    template.incrementables[group].val += 1;
    const trs = template.makeFormInner(fields, false);
    trs.reverse();
    var _iterator6 = _createForOfIteratorHelper(trs), _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
        const tr = _step6.value;
        $(currentrow).after(tr);
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
  };
  CiteTB.fillAccessdate = function() {
    var _$$attr3;
    const elemid = (_$$attr3 = $(this).attr("id")) !== null && _$$attr3 !== void 0 ? _$$attr3 : "";
    const res = /^cite-date-(.*?)-(.*)$/.exec(elemid);
    const [, id] = res;
    if (!res) {
      return;
    }
    const [, , field] = res;
    const DT = /* @__PURE__ */ new Date();
    const datestr = CiteTB.formatDate(DT);
    $("#cite-".concat(id, "-").concat(field)).val(datestr);
    return false;
  };
  CiteTB.formatDate = (DT, useday, usemonth) => {
    if (useday === void 0) {
      useday = true;
    }
    if (usemonth === void 0) {
      usemonth = true;
    }
    let datestr = CiteTB.getOption("date format");
    let zmonth = "";
    let month = DT.getUTCMonth() + 1;
    if (month < 10) {
      zmonth = "0".concat(month.toString());
    } else {
      zmonth = month.toString();
    }
    month = month.toString();
    let zdate = "";
    let date = DT.getUTCDate();
    if (date < 10) {
      zdate = "0".concat(date.toString());
    } else {
      zdate = date.toString();
    }
    date = date.toString();
    if (useday) {
      datestr = datestr.replace("<date>", date);
      datestr = datestr.replace("<zdate>", zdate);
    } else {
      datestr = datestr.replace("<date>", "");
      datestr = datestr.replace("<zdate>", "");
    }
    if (usemonth) {
      datestr = datestr.replace("<month>", month);
      datestr = datestr.replace("<zmonth>", zmonth);
      datestr = datestr.replace("<monthname>", CiteTB.getOption("months")[DT.getUTCMonth()]);
    } else {
      datestr = datestr.replace("<month>", "");
      datestr = datestr.replace("<zmonth>", "");
      datestr = datestr.replace("<monthname>", "");
    }
    datestr = datestr.replace("<year>", DT.getUTCFullYear().toString());
    return datestr.replace(/^[ /\-,.]*(.*?)[ /\-,.]*$/g, "$1");
  };
  CiteTB.setupNamedRefs = () => {
    const names = [];
    let i;
    for (i = 0; i < CiteTB.mainRefList.length; i++) {
      if (!CiteTB.mainRefList[i].shorttag && CiteTB.mainRefList[i].refname) {
        names.push(CiteTB.mainRefList[i]);
      }
    }
    const stuff = $("<div>");
    $body.find("#citetoolbar-namedrefs").html(stuff);
    if (names.length === 0) {
      stuff.html(getMessage("cite-no-namedrefs"));
    } else {
      stuff.html(getMessage("cite-namedrefs-intro"));
      const select = $("<select>").attr("id", "cite-namedref-select");
      select.append($("<option>").attr("value", "").text(getMessage("cite-named-refs-dropdown")));
      for (i = 0; i < names.length; i++) {
        select.append($("<option>").text(names[i].refname));
      }
      stuff.after(select);
      select.before("<br>");
      const prevlabel = $("<div>").attr("id", "cite-nref-preview-label").css("display", "none").html(getMessage("cite-raw-preview"));
      select.after(prevlabel);
      prevlabel.before("<br><br>");
      prevlabel.after('<div id="cite-namedref-preview" style="padding:0.5em; font-size:110%" />');
      const parselabel = $("<span>").attr("id", "cite-parsed-label").css("display", "none").html(getMessage("cite-parsed-label"));
      $body.find("#cite-namedref-preview").after(parselabel);
      parselabel.after('<div id="cite-namedref-parsed" style="padding-bottom:0.5em; font-size:110%" />');
      const link = $("<a>").attr({
        href: "#",
        id: "cite-nref-parse"
      }).css({
        margin: "0 1em 0 1em",
        display: "none",
        color: "#00008b"
      });
      link.html(getMessage("cite-form-parse"));
      $body.find("#cite-namedref-parsed").after(link);
      $body.find("#cite-namedref-select").on("change", CiteTB.namedRefSelectClick);
      $body.find("#cite-nref-parse").on("click", CiteTB.nrefParseClick);
    }
  };
  CiteTB.setupErrorCheck = () => {
    const form = $("<div>").attr("id", "cite-errorcheck-heading").html(getMessage("cite-errorcheck-heading"));
    const ul = $("<ul>").attr("id", "cite-errcheck-list");
    let test;
    for (const t in CiteTB.ErrorChecks) {
      if (Object.hasOwn(CiteTB.ErrorChecks, t)) {
        test = CiteTB.ErrorChecks[t];
        ul.append(test.getRow());
      }
    }
    form.append(ul);
    $body.find("#citetoolbar-errorcheck").html(form.html());
  };
  CiteTB.fillNrefPreview = (parsed) => {
    $body.find("#cite-parsed-label").show();
    $body.find("#cite-namedref-parsed").html(parsed);
  };
  CiteTB.nrefParseClick = () => {
    const choice = $body.find("#cite-namedref-select").val();
    if (choice === "") {
      $body.find("#cite-parsed-label").hide();
      $body.find("#cite-namedref-parsed").text("");
      return false;
    }
    $body.find("#cite-nref-parse").hide();
    for (let i = 0; i < CiteTB.mainRefList.length; i++) {
      if (!CiteTB.mainRefList[i].shorttag && CiteTB.mainRefList[i].refname === choice) {
        CiteTB.parse(CiteTB.mainRefList[i].content, CiteTB.fillNrefPreview);
        return false;
      }
    }
  };
  CiteTB.lastnamedrefchoice = "";
  CiteTB.namedRefSelectClick = () => {
    const choice = $body.find("#cite-namedref-select").val();
    if (CiteTB.lastnamedrefchoice === choice) {
      return;
    }
    CiteTB.lastnamedrefchoice = choice;
    $body.find("#cite-parsed-label").hide();
    $body.find("#cite-namedref-parsed").text("");
    if (choice === "") {
      $body.find("#cite-nref-preview-label").hide();
      $body.find("#cite-namedref-preview").text("");
      $body.find("#cite-nref-parse").hide();
      return;
    }
    for (let i = 0; i < CiteTB.mainRefList.length; i++) {
      if (!CiteTB.mainRefList[i].shorttag && CiteTB.mainRefList[i].refname === choice) {
        $body.find("#cite-nref-preview-label").show();
        $body.find("#cite-namedref-preview").text(CiteTB.mainRefList[i].content);
        if (CiteTB.getOption("autoparse")) {
          CiteTB.nrefParseClick();
        } else {
          $body.find("#cite-nref-parse").show();
        }
      }
    }
  };
  CiteTB.fillTemplatePreview = (text) => {
    const template = CiteTB.getOpenTemplate();
    const div = $("#citetoolbar-".concat(CiteTB.escStr(template.shortform)));
    div.find(".cite-prev-parsed-label").show();
    div.find(".cite-preview-parsed").html(text);
  };
  CiteTB.prevParseClick = () => {
    const ref = CiteTB.getRef(true, false);
    const template = CiteTB.getOpenTemplate();
    const div = $("#citetoolbar-".concat(CiteTB.escStr(template.shortform)));
    div.find(".cite-prev-parse").hide();
    CiteTB.parse(ref, CiteTB.fillTemplatePreview);
  };
  CiteTB.showHideExtra = () => {
    const template = CiteTB.getOpenTemplate();
    const div = $("#citetoolbar-".concat(CiteTB.escStr(template.shortform)));
    const setting = div.find(".cite-form-status").val();
    if (setting === "closed") {
      div.find(".cite-form-status").val("open");
      div.find(".cite-extra-fields").show(1, () => {
        div.find(".cite-extra-fields").css({
          width: "100%",
          "background-color": "transparent"
        });
      });
    } else {
      div.find(".cite-form-status").val("closed");
      div.find(".cite-extra-fields").hide();
    }
  };
  CiteTB.resetForm = () => {
    const template = CiteTB.getOpenTemplate();
    const div = $("#citetoolbar-".concat(CiteTB.escStr(template.shortform)));
    div.html(template.getForm());
  };
  CiteTB.getQuotedString = (s) => {
    const sq = /'/.test(s);
    const dq = /"/.test(s);
    if (!sq && !dq) {
      return '"'.concat(s, '"');
    } else if (!dq) {
      return '"'.concat(s, '"');
    } else if (!sq) {
      return "'".concat(s, "'");
    }
    s = s.replace(/"/g, "'");
    return '"'.concat(s, '"');
  };
  CiteTB.fixStr = (s) => {
    s = s.slice(0, 1).toUpperCase() + s.slice(1);
    s = s.replace("_", " ");
    return s;
  };
  CiteTB.escStr = (s) => {
    return s.replace(/\s/g, "-").replace(/'/g, "\\'").replace(/"/g, '\\"');
  };
  CiteTB.getOpenTemplate = () => {
    const dialogs = $body.find(".ui-dialog-content.ui-widget-content:visible");
    const templatename = $(dialogs[0]).find(".cite-template").val();
    return CiteTB.Templates[templatename];
  };
  CiteTB.displayErrors = (errors) => {
    $body.find("#cite-err-report").remove();
    const table = $("<table>").attr("id", "cite-err-report").css({
      width: "100%",
      border: "1px solid #A9A9A9",
      "background-color": "#FFEFD5",
      padding: "0.25em",
      "margin-top": "0.5em"
    });
    $body.find("#editpage-copywarn").before(table);
    let tr;
    const tr1 = $("<tr>").css("width", "100%");
    const th1 = $("<th>").css("width", "60%").css("font-size", "110%").html(getMessage("cite-err-report-heading"));
    const th2 = $("<th>").css("width", "40%").css("text-align", "right;");
    const im = $("<img>").attr("src", "https://tu.zhongwen.wiki/images/qiuwenbaike/zh/thumb/5/55/Gtk-stop.svg/20px-Gtk-stop.svg.png");
    im.attr("alt", getMessage("cite-err-report-close")).attr("title", getMessage("cite-err-report-close"));
    const ad = $("<a>").attr({
      id: "cite-err-check-close",
      href: "#"
    });
    ad.append(im);
    th2.append(ad);
    tr1.append(th1).append(th2);
    table.append(tr1);
    $body.find("#cite-err-check-close").on("click", () => {
      $body.find("#cite-err-report").remove();
    });
    if (errors.length === 0) {
      tr = $("<tr>").css("width", "100%");
      const td = $("<td>").css("text-align", "center").css("margin", "1.5px").html(getMessage("cite-err-report-empty"));
      tr.append(td);
      table.append(tr);
      return;
    }
    for (const error in errors) {
      if (Object.hasOwn(errors, error)) {
        const err = errors[error];
        tr = $("<tr>").css("width", "100%");
        const td1 = $("<td>").css({
          border: "1px solid #000",
          margin: "1.5px",
          width: "60%"
        }).html(err.err);
        const td2 = $("<td>").css({
          border: "1px solid #000",
          margin: "1.5px",
          width: "40%"
        }).html(getMessage(err.msg));
        tr.append(td1).append(td2);
        table.append(tr);
      }
    }
  };
  refToolbarConfig();
};
//! src/Edittools-refToolbar/modules/RefToolbarBase.js
var refToolbarBase = () => {
  var _window;
  (_window = window).CiteTB || (_window.CiteTB = {
    Templates: {},
    // All templates
    Options: {},
    // Global options
    UserOptions: {},
    // User options
    DefaultOptions: {},
    // Script defaults
    ErrorChecks: {}
    // Error check functions
  });
  window.CiteTemplate = class CiteTemplate {
    constructor(templatename, shortform, basicfields, expandedfields) {
      this.templatename = templatename;
      this.shortform = shortform;
      this.basic = basicfields;
      this.extra = expandedfields;
      this.incrementables = {};
      CiteTB.Templates[this.templatename] = this;
    }
    makeFormInner(fields, incrsetup) {
      const trs = [];
      const autofills = [];
      let tr;
      var _iterator7 = _createForOfIteratorHelper(fields.entries()), _step7;
      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
          const [i, fieldobj] = _step7.value;
          let {
            field
          } = fieldobj;
          let labelfield = fieldobj.field;
          let ad = false;
          let im;
          if (incrsetup && fieldobj.increment_group) {
            field = fieldobj.field.replace("<N>", "1");
            labelfield = fieldobj.field.replace("<N>", "");
            if (this.incrementables[fieldobj.increment_group] && !this.incrementables[fieldobj.increment_group].setup) {
              this.incrementables[fieldobj.increment_group].fields.push(fieldobj);
            } else if (!this.incrementables[fieldobj.increment_group]) {
              this.incrementables[fieldobj.increment_group] = {
                fields: [fieldobj],
                val: 1,
                setup: false
              };
            } else if (this.incrementables[fieldobj.increment_group] && this.incrementables[fieldobj.increment_group].setup) {
              this.incrementables[fieldobj.increment_group].val = 1;
            }
          } else if (fieldobj.increment_group) {
            const incrval = this.incrementables[fieldobj.increment_group].val;
            field = fieldobj.field.replace("<N>", incrval.toString());
            labelfield = fieldobj.field.replace("<N>", "");
          }
          const autodateFields = CiteTB.getOption("autodate fields");
          if (autodateFields.includes(field)) {
            im = $("<img>").attr("src", "https://tu.zhongwen.wiki/images/qiuwenbaike/zh/thumb/7/7b/Nuvola_apps_date.svg/20px-Nuvola_apps_date.svg.png");
            im.attr("alt", getMessage("cite-insert-date")).attr("title", getMessage("cite-insert-date"));
            ad = $("<a>").attr("href", "#");
            ad.append(im);
            ad.attr("id", "cite-date-".concat(CiteTB.escStr(this.shortform), "-").concat(field));
            $(document).on("click", "#cite-date-".concat(CiteTB.escStr(this.shortform), "-").concat(field), CiteTB.fillAccessdate);
          }
          if (fieldobj.autofillid) {
            const autotype = fieldobj.autofillid;
            im = $("<img>").attr("src", "https://tu.zhongwen.wiki/images/qiuwenbaike/zh/thumb/1/17/System-search.svg/20px-System-search.svg.png");
            im.attr("alt", getMessage("cite-autofill-alt")).attr("title", getMessage("cite-autofill-alt"));
            ad = $("<a>").attr("href", "#");
            ad.append(im);
            ad.attr("id", "cite-auto-".concat(CiteTB.escStr(this.shortform), "-").concat(field, "-").concat(autotype));
            autofills.push("#cite-auto-".concat(CiteTB.escStr(this.shortform), "-").concat(field, "-").concat(autotype));
          }
          if (fieldobj.increment_button) {
            const incrtype = fieldobj.increment_group;
            im = $("<img>").attr("src", "https://tu.zhongwen.wiki/images/qiuwenbaike/zh/thumb/b/b9/Nuvola_action_edit_add.svg/20px-Nuvola_action_edit_add.svg.png");
            im.attr("alt", getMessage("cite-increment-alt")).attr("title", getMessage("cite-increment-alt"));
            ad = $("<a>").attr("href", "#");
            ad.append(im);
            ad.attr("id", "cite-incr-".concat(CiteTB.escStr(this.shortform), "-").concat(incrtype));
          }
          let display = getMessage("cite-".concat(labelfield, "-label"));
          if (typeof display !== "string") {
            display = fieldobj.label ? CiteTB.fixStr(fieldobj.label) : CiteTB.fixStr(labelfield);
          }
          const tooltip = fieldobj.tooltip ? $("<abbr>").attr("title", getMessage(fieldobj.tooltip)).html($("<sup>").text("?")) : false;
          let input = "";
          input = $("<input>").attr({
            tabindex: "1",
            style: ad ? "width: 85%" : "width: 100%",
            type: "text"
          });
          input.attr("id", "cite-".concat(CiteTB.escStr(this.shortform), "-").concat(field));
          if (fieldobj.autofillprop) {
            let classname = "cite-".concat(CiteTB.escStr(this.shortform), "-").concat(fieldobj.autofillprop);
            if (fieldobj.increment_group) {
              input.addClass("cite-".concat(CiteTB.escStr(this.shortform), "-incr-").concat(fieldobj.increment_group));
              classname += "-".concat(this.incrementables[fieldobj.increment_group].val.toString());
            }
            input.addClass(classname);
          }
          const label = $("<label>");
          label.attr("for", "cite-".concat(CiteTB.escStr(this.shortform), "-").concat(field)).text(display);
          if (tooltip) {
            label.append(tooltip);
          }
          let style = "text-align: right; width: 20%;";
          if (i % 2 === 1) {
            style += " padding-left: 1em;";
          } else {
            tr = $("<tr>");
          }
          const td1 = $("<td>").addClass("cite-form-td").attr({
            style
          });
          td1.append(label);
          tr.append(td1);
          const td2 = $("<td>").addClass("cite-form-td").css("width", "30%");
          td2.append(input);
          if (ad) {
            td2.append(ad);
          }
          tr.append(td2);
          if (i % 2 === 0) {
            trs.push(tr);
          }
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
      let needsetup = false;
      for (const g in this.incrementables) {
        if (!this.incrementables[g].setup) {
          needsetup = true;
          $(document).on("click", "#cite-incr-".concat(CiteTB.escStr(this.shortform), "-").concat(g), CiteTB.incrementFields);
          this.incrementables[g].setup = true;
        }
      }
      if (needsetup || Object.keys(this.incrementables).length === 0) {
        var _iterator8 = _createForOfIteratorHelper(autofills), _step8;
        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
            const autofill = _step8.value;
            $(document).on("click", autofill, CiteTB.initAutofill);
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }
      }
      return trs;
    }
    // gives a little bit of HTML so the open form can be identified
    getInitial() {
      const hidden = $("<input>").addClass("cite-template").attr({
        type: "hidden",
        value: this.templatename
      });
      return hidden;
    }
    // makes the form used in the dialog boxes
    getForm() {
      const main = $("<div>").addClass("cite-form-container");
      const form1 = $("<table>").addClass("cite-basic-fields").css({
        width: "100%",
        "background-color": "transparent"
      });
      let trs = this.makeFormInner(this.basic, true);
      var _iterator9 = _createForOfIteratorHelper(trs), _step9;
      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) {
          const tr = _step9.value;
          form1.append(tr);
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
      const form2 = $("<table>").addClass("cite-extra-fields").css({
        width: "100%",
        "background-color": "transparent",
        display: "none"
      });
      trs = this.makeFormInner(this.extra, true);
      var _iterator10 = _createForOfIteratorHelper(trs), _step10;
      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done; ) {
          const tr = _step10.value;
          form2.append(tr);
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }
      main.append(form1).append(form2);
      const form3 = $("<table>").addClass("cite-other-fields").css({
        width: "100%",
        "background-color": "transparent",
        "padding-top": "1em"
      });
      const $tr = $("<tr>");
      const $td1 = $("<td>").addClass("cite-form-td").css({
        "text-align": "right",
        width: "20%"
      });
      const $label1 = $("<label>");
      $label1.attr("for", "cite-".concat(CiteTB.escStr(this.shortform), "-name")).text(getMessage("cite-name-label"));
      $td1.append($label1);
      const td2 = $("<td>").addClass("cite-form-td").css("width", "30%");
      const input1 = $("<input>").attr({
        tabindex: "1",
        style: "width: 100%",
        type: "text"
      });
      input1.attr("id", "cite-".concat(CiteTB.escStr(this.shortform), "-name"));
      td2.append(input1);
      const td3 = $("<td>").addClass("cite-form-td").css({
        "text-align": "right",
        "padding-left": "1em",
        width: "20%"
      });
      const label2 = $("<label>");
      label2.attr("for", "cite-".concat(CiteTB.escStr(this.shortform), "-group")).text(getMessage("cite-group-label"));
      td3.append(label2);
      const td4 = $("<td>").addClass("cite-form-td").css("width", "30%");
      const input2 = $("<input>").attr({
        tabindex: "1",
        style: "width: 100%",
        type: "text"
      });
      input2.attr("id", "cite-".concat(CiteTB.escStr(this.shortform), "-group"));
      td4.append(input2);
      $tr.append($td1).append(td2).append(td3).append(td4);
      form3.append($tr);
      main.append(form3);
      const extras = $("<div>");
      extras.append($("<input>").addClass("cite-form-status").attr({
        type: "hidden",
        value: "closed"
      }));
      const hidden = $("<input>").addClass("cite-template").attr("type", "hidden");
      hidden.val(this.templatename);
      extras.append(hidden);
      const span1 = $("<span>").addClass("cite-preview-label").css("display", "none");
      span1.text(getMessage("cite-raw-preview"));
      extras.append(span1).append($("<div>").addClass("cite-ref-preview").css({
        padding: "0.5em",
        "font-size": "110%"
      }));
      const span2 = $("<span>").addClass("cite-prev-parsed-label").css("display", "none");
      span2.text(getMessage("cite-parsed-label"));
      extras.append(span2).append($("<div>").addClass("cite-preview-parsed").css({
        "padding-bottom": "0.5em",
        "font-size": "110%"
      }));
      const link = $("<a>").addClass("cite-prev-parse").attr("href", "#").css({
        margin: "0 1em",
        display: "none",
        color: "#00008b"
      });
      link.text(getMessage("cite-form-parse"));
      extras.append(link);
      main.append(extras);
      return main;
    }
  };
  window.CiteErrorCheck = class CiteErrorCheck {
    constructor(obj) {
      this.obj = obj;
      CiteTB.ErrorChecks[this.obj.testname] = this;
    }
    run() {
      let errors = [];
      switch (this.obj.type) {
        case "refcheck":
          CiteTB.loadRefs();
          for (let i = 0; i < CiteTB.mainRefList.length; i++) {
            const e = this.obj.func(CiteTB.mainRefList[i]);
            if (e) {
              errors.push(e);
            }
          }
          break;
        case "reflist":
          CiteTB.loadRefs();
          errors = this.obj.func(CiteTB.mainRefList);
          break;
        case "search": {
          const {
            func
          } = this.obj;
          CiteTB.getPageText((text) => {
            errors = func(text);
          });
          break;
        }
      }
      return errors;
    }
    getRow() {
      const row = $("<li>");
      const check = $("<input>").attr({
        type: "checkbox",
        name: "cite-err-test"
      });
      check.attr("value", this.obj.testname);
      const label = $("<label>").html(getMessage(this.obj.desc));
      label.attr("for", this.obj.testname);
      row.append(check).append(" &ndash; ").append(label);
      return row;
    }
  };
  $(document).find("head").trigger("reftoolbarbase");
};
//! src/Edittools-refToolbar/modules/messages.ts
var refToolbarMesages = () => {
  if (WG_USER_LANGUAGE === "en") {
    return;
  }
  if (["zh-hant", "zh-hk", "zh-mo", "zh-tw"].includes(WG_USER_LANGUAGE)) {
    mw.messages.set({
      "cite-section-label": "引用",
      "cite-template-list": "模板",
      "cite-named-refs-label": "同名文獻",
      "cite-named-refs-title": "插入同名文獻",
      "cite-named-refs-button": "已命名參考文獻",
      "cite-named-refs-dropdown": "同名文獻",
      // Used on the top of the named refs list dropsown
      "cite-errorcheck-label": "錯誤檢查",
      "cite-errorcheck-button": "檢查錯誤",
      "cite-dialog-base": "引用",
      "cite-form-submit": "插入",
      "cite-form-showhide": "顯示/隱藏額外區域",
      "cite-no-namedrefs": "在本頁找不到任何同名文獻",
      "cite-namedrefs-intro": "從列出的參考文獻目錄中選擇一個名字。點擊「插入」插入一個參考文獻到文本中。",
      "cite-raw-preview": "Wikitext:",
      "cite-parsed-label": "解析後的wikitext:",
      "cite-form-parse": "顯示解析後的預覽",
      "cite-refpreview": "預覽",
      "cite-name-label": "ref名",
      "cite-group-label": "ref組",
      "cite-errorcheck-submit": "檢查",
      "cite-errorcheck-heading": "檢查下列錯誤：",
      "cite-error-unclosed": "未關閉<tt>&lt;ref&gt;</tt>標記",
      "cite-error-samecontent": "有相同內容的參考文獻",
      "cite-error-templates": '參考文獻未使用<a href="'.concat(mw.util.getUrl("Category:引用模板"), '">引用模板</a>'),
      "cite-error-repeated": "多個參考文獻有相同名稱",
      "cite-error-undef": "有未定義的同名參考文獻在使用",
      "cite-error-samecontent-msg": "多個文獻含有相同內容: $1",
      "cite-error-repeated-msg": "給多個參考文獻命名: 「$1」",
      "cite-error-templates-msg": "沒有使用模板: $1",
      "cite-form-reset": "重設表單",
      "cite-loading": "載入數據",
      // Shown while pagetext is being downloaded from the API
      "cite-insert-date": "插入當前日期",
      // Alt/title text for "insert date" icon
      "cite-err-report-heading": "引用錯誤報告",
      // Heading for error report table
      "cite-err-report-close": "關閉",
      // Alt/title text for "close" icon on error report
      "cite-err-report-empty": "未找到錯誤",
      // Message displayed in the error report list if there are no errors
      "cite-autofill-alt": "自動填充",
      // Alt text for autofill button image
      "cite-ref-tooltip": "錨點的標識符（使該引用可以成為內部連結的目標）",
      "cite-postscript-tooltip": "如果設定這一參數，則覆蓋使用句點終止引文的默認行爲",
      "cite-dialog-web": "網頁引用",
      "cite-dialog-news": "新聞引用",
      "cite-dialog-book": "書籍引用",
      "cite-dialog-journal": "期刊引用",
      "cite-dialog-conference": "會議引用",
      "cite-dialog-encyclopedia": "百科全書引用",
      "cite-author-label": "作者",
      "cite-title-label": "標題",
      "cite-url-label": "網址",
      "cite-website-label": "網站名稱",
      "cite-work-label": "報紙或雜誌",
      "cite-agency-label": "通訊社",
      "cite-publisher-label": "出版者",
      "cite-accessdate-label": "存取日期",
      "cite-last-label": "姓",
      "cite-first-label": "名",
      "cite-authorlink-label": "作者條目",
      "cite-coauthors-label": "其他作者",
      "cite-location-label": "出版地",
      "cite-page-label": "所在頁",
      "cite-pages-label": "頁範圍",
      "cite-at-label": "書內部分",
      "cite-language-label": "語言",
      "cite-format-label": "文件格式",
      "cite-doi-label": "DOI",
      "cite-date-label": "日期",
      "cite-month-label": "月份",
      "cite-year-label": "年份",
      "cite-quote-label": "摘錄",
      "cite-newspaper-label": "新聞媒體",
      "cite-author2-label": "第2作者",
      "cite-author3-label": "第3作者",
      "cite-author4-label": "第4作者",
      "cite-author5-label": "第5作者",
      "cite-agency": "通訊社",
      "cite-issn-label": "ISSN",
      "cite-oclc-label": "OCLC",
      "cite-bibcode-label": "Bibcode",
      "cite-isbn-label": "ISBN",
      "cite-others-label": "譯者",
      "cite-edition-label": "版本",
      "cite-trans-title-label": "翻譯後標題",
      "cite-ref-label": "錨點標識符",
      "cite-postscript-label": "结尾符",
      "cite-series-label": "系列",
      "cite-volume-label": "卷",
      "cite-unified-label": "統一書號",
      "cite-chapter-label": "章節",
      "cite-journal-label": "雜誌/期刊",
      "cite-issue-label": "期",
      "cite-pmid-label": "PMID",
      "cite-editor-label": "編輯",
      "cite-editor1-first-label": "編輯名",
      "cite-editor1-last-label": "編輯姓",
      "cite-editor1-link-label": "編輯條目",
      "cite-editor-first-label": "編輯名",
      "cite-editor-last-label": "編輯姓",
      "cite-editor-link-label": "編輯條目",
      "cite-pmc-label": "PMC",
      "cite-id-label": "ID",
      "cite-laysummary-label": "簡明摘要",
      "cite-laysource-label": "簡明摘要來源",
      "cite-laydate-label": "簡明摘要日期",
      "cite-conference-label": "會議名稱",
      "cite-conferenceurl-label": "會議網址",
      "cite-booktitle-label": "論文集",
      "cite-encyclopedia-label": "百科全書名",
      "cite-authorlink-tooltip": "若該作者有條目，填寫條目名稱",
      "cite-at-tooltip": "內容在來源中的位置（當按頁碼引用不適當時）",
      "cite-accessdate-tooltip": "訪問這個引用來源時的日期",
      "cite-id-tooltip": "其他的文章編號",
      "cite-samecontent-desc": "檢查含有相同內容的多個參考文獻",
      "cite-samecontent-error": "多個參考文獻包含有相同內容",
      "cite-repeated-desc": "使用相同名字的多個參考文獻",
      "cite-repeated-error": "多個參考文獻使用了相同名字",
      "cite-undefined-desc": "未定義的參考文獻",
      "cite-undefined-error": "一個已命名的參考文獻已經使用但是沒有定義",
      "cite-work-tooltip": "刊登該作品的出版物的名稱。請不要使用斜體",
      "cite-newspaper-tooltip": "刊登該新聞的出版物名稱",
      "cite-series-tooltip": "當書籍是一系列出版品中的其中一部份時使用",
      "cite-unified-tooltip": "1980年代之前中國所使用的書籍編號",
      "cite-laysummary-tooltip": "該文獻相關的新聞報道的URL",
      "cite-laysource-tooltip": "該文獻相關的新聞報道的出處"
    });
  } else {
    mw.messages.set({
      "cite-section-label": "引用",
      "cite-template-list": "模板",
      "cite-named-refs-label": "同名文献",
      "cite-named-refs-title": "插入同名文献",
      "cite-named-refs-button": "已命名参考文献",
      "cite-named-refs-dropdown": "同名文献",
      // Used on the top of the named refs list dropsown
      "cite-errorcheck-label": "错误检查",
      "cite-errorcheck-button": "检查错误",
      "cite-dialog-base": "引用",
      "cite-form-submit": "插入",
      "cite-form-showhide": "显示/隐藏额外区域",
      "cite-no-namedrefs": "在本页找不到任何同名文献",
      "cite-namedrefs-intro": "从列出的参考文献目录中选择一个名字。点击“插入”插入一个参考文献到文本中。",
      "cite-raw-preview": "Wikitext:",
      "cite-parsed-label": "解析后的wikitext:",
      "cite-form-parse": "显示解析后的预览",
      "cite-refpreview": "预览",
      "cite-name-label": "ref名",
      "cite-group-label": "ref组",
      "cite-errorcheck-submit": "检查",
      "cite-errorcheck-heading": "检查下列错误：",
      "cite-error-unclosed": "未关闭<tt>&lt;ref&gt;</tt>标记",
      "cite-error-samecontent": "有相同内容的参考文献",
      "cite-error-templates": '参考文献未使用<a href="'.concat(mw.util.getUrl("Category:引用模板"), '">引用模板</a>'),
      "cite-error-repeated": "多个参考文献有相同名称",
      "cite-error-undef": "有未定义的同名参考文献在使用",
      "cite-error-samecontent-msg": "多个文献含有相同内容: $1",
      "cite-error-repeated-msg": "给多个参考文献命名: “$1”",
      "cite-error-templates-msg": "没有使用模板: $1",
      "cite-form-reset": "重设表单",
      "cite-loading": "载入数据",
      // Shown while pagetext is being downloaded from the API
      "cite-insert-date": "插入当前日期",
      // Alt/title text for "insert date" icon
      "cite-err-report-heading": "引用错误报告",
      // Heading for error report table
      "cite-err-report-close": "关闭",
      // Alt/title text for "close" icon on error report
      "cite-err-report-empty": "未找到错误",
      // Message displayed in the error report list if there are no errors
      "cite-autofill-alt": "自动填充",
      // Alt text for autofill button image
      "cite-ref-tooltip": "锚点的标识符（使该引用可以成为内部链接的目标）",
      "cite-postscript-tooltip": "如果设定这一参数，则覆盖使用句点终止引文的默认行为",
      "cite-dialog-web": "网页引用",
      "cite-dialog-news": "新闻引用",
      "cite-dialog-book": "书籍引用",
      "cite-dialog-journal": "期刊引用",
      "cite-dialog-conference": "会议引用",
      "cite-dialog-encyclopedia": "百科全书引用",
      "cite-author-label": "作者",
      "cite-title-label": "标题",
      "cite-url-label": "网址",
      "cite-website-label": "网站名称",
      "cite-work-label": "报纸或杂志",
      "cite-agency-label": "通讯社",
      "cite-publisher-label": "出版者",
      "cite-accessdate-label": "访问日期",
      "cite-last-label": "姓",
      "cite-first-label": "名",
      "cite-authorlink-label": "作者条目",
      "cite-coauthors-label": "其他作者",
      "cite-location-label": "出版地",
      "cite-page-label": "所在页",
      "cite-pages-label": "页范围",
      "cite-at-label": "书内部分",
      "cite-language-label": "语言",
      "cite-format-label": "文档格式",
      "cite-doi-label": "DOI",
      "cite-date-label": "日期",
      "cite-month-label": "月份",
      "cite-year-label": "年份",
      "cite-quote-label": "摘录",
      "cite-newspaper-label": "新闻媒体",
      "cite-author2-label": "第2作者",
      "cite-author3-label": "第3作者",
      "cite-author4-label": "第4作者",
      "cite-author5-label": "第5作者",
      "cite-agency": "通讯社",
      "cite-issn-label": "ISSN",
      "cite-oclc-label": "OCLC",
      "cite-bibcode-label": "Bibcode",
      "cite-isbn-label": "ISBN",
      "cite-others-label": "译者",
      "cite-edition-label": "版本",
      "cite-trans-title-label": "翻译后标题",
      "cite-ref-label": "锚点标识符",
      "cite-postscript-label": "结尾符",
      "cite-series-label": "系列",
      "cite-volume-label": "卷",
      "cite-unified-label": "统一书号",
      "cite-chapter-label": "章节",
      "cite-journal-label": "杂志/期刊",
      "cite-issue-label": "期",
      "cite-pmid-label": "PMID",
      "cite-editor-label": "编辑",
      "cite-editor1-first-label": "编辑名",
      "cite-editor1-last-label": "编辑姓",
      "cite-editor1-link-label": "编辑条目",
      "cite-editor-first-label": "编辑名",
      "cite-editor-last-label": "编辑姓",
      "cite-editor-link-label": "编辑条目",
      "cite-pmc-label": "PMC",
      "cite-id-label": "ID",
      "cite-laysummary-label": "简明摘要",
      "cite-laysource-label": "简明摘要来源",
      "cite-laydate-label": "简明摘要日期",
      "cite-conference-label": "会议名称",
      "cite-conferenceurl-label": "会议网址",
      "cite-booktitle-label": "论文集",
      "cite-encyclopedia-label": "百科全书名",
      "cite-authorlink-tooltip": "若该作者有条目，填写条目名称",
      "cite-at-tooltip": "内容在来源中的位置（当按页码引用不适当时）",
      "cite-accessdate-tooltip": "访问这个引用来源时的日期",
      "cite-id-tooltip": "其他的文章编号",
      "cite-samecontent-desc": "检查含有相同内容的多个参考文献",
      "cite-samecontent-error": "多个参考文献包含有相同内容",
      "cite-repeated-desc": "使用相同名字的多个参考文献",
      "cite-repeated-error": "多个参考文献使用了相同名字",
      "cite-undefined-desc": "未定义的参考文献",
      "cite-undefined-error": "一个已命名的参考文献已经使用但是没有定义",
      "cite-work-tooltip": "刊登该作品的出版物的名称。请不要使用斜体",
      "cite-newspaper-tooltip": "刊登該新聞的出版物名称",
      "cite-series-tooltip": "当书籍是一系列出版品中的其中一部份时使用",
      "cite-unified-tooltip": "1980年代之前中国所使用的书籍编号",
      "cite-laysummary-tooltip": "该文献相关的新闻报道的URL",
      "cite-laysource-tooltip": "该文献相关的新闻报道的出处"
    });
  }
};
//! src/Edittools-refToolbar/Edittools-refToolbar.ts
(() => {
  if (!IS_WG_EDIT_OR_SUBMIT_ACTION || WG_PAGE_CONTENT_MODEL !== "wikitext") {
    return;
  }
  if (!mw.user.options.get("usebetatoolbar")) {
    return;
  }
  if (document.querySelector("textarea[name=wpTextbox1][readonly]")) {
    return;
  }
  refToolbarMesages();
  refToolbarBase();
  void (0, import_ext_gadget2.getBody)().then(refToolbar2);
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mYWlscy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Rlc2NyaXB0b3JzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1jYWxsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NsYXNzb2YtcmF3LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtY2FsbGFibGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nZXQtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXN5bWJvbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RyeS10by1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWNhbGxhYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1Zy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1uYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9tYXRoLXRydW5jLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtYXJyYXkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNi4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1zZXQtbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzYuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9lcy1ub3QtZXhjZWVkLXNhZmUtaW50ZWdlci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM2LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5wdXNoLmpzIiwgInNyYy9FZGl0dG9vbHMtcmVmVG9vbGJhci9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9FZGl0dG9vbHMtcmVmVG9vbGJhci9FZGl0dG9vbHMtcmVmVG9vbGJhci50cyIsICJzcmMvRWRpdHRvb2xzLXJlZlRvb2xiYXIvbW9kdWxlcy91dGlsL2FwaS50cyIsICJzcmMvRWRpdHRvb2xzLXJlZlRvb2xiYXIvbW9kdWxlcy91dGlsL2dldE1lc3NhZ2UudHMiLCAic3JjL0VkaXR0b29scy1yZWZUb29sYmFyL21vZHVsZXMvUmVmVG9vbGJhckNvbmZpZy5qcyIsICJzcmMvRWRpdHRvb2xzLXJlZlRvb2xiYXIvbW9kdWxlcy9SZWZUb29sYmFyMi4wLmpzIiwgInNyYy9FZGl0dG9vbHMtcmVmVG9vbGJhci9tb2R1bGVzL1JlZlRvb2xiYXJCYXNlLmpzIiwgInNyYy9FZGl0dG9vbHMtcmVmVG9vbGJhci9tb2R1bGVzL21lc3NhZ2VzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIndXNlIHN0cmljdCc7XG52YXIgY2hlY2sgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICYmIGl0Lk1hdGggPT09IE1hdGggJiYgaXQ7XG59O1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxubW9kdWxlLmV4cG9ydHMgPVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZ2xvYmFsLXRoaXMgLS0gc2FmZVxuICBjaGVjayh0eXBlb2YgZ2xvYmFsVGhpcyA9PSAnb2JqZWN0JyAmJiBnbG9iYWxUaGlzKSB8fFxuICBjaGVjayh0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdykgfHxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAtLSBzYWZlXG4gIGNoZWNrKHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYpIHx8XG4gIGNoZWNrKHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsKSB8fFxuICBjaGVjayh0eXBlb2YgdGhpcyA9PSAnb2JqZWN0JyAmJiB0aGlzKSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmMgLS0gZmFsbGJhY2tcbiAgKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pKCkgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBEZXRlY3QgSUU4J3MgaW5jb21wbGV0ZSBkZWZpbmVQcm9wZXJ0eSBpbXBsZW1lbnRhdGlvblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sIDEsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pWzFdICE9PSA3O1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWZ1bmN0aW9uLXByb3RvdHlwZS1iaW5kIC0tIHNhZmVcbiAgdmFyIHRlc3QgPSAoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9KS5iaW5kKCk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gdHlwZW9mIHRlc3QgIT0gJ2Z1bmN0aW9uJyB8fCB0ZXN0Lmhhc093blByb3BlcnR5KCdwcm90b3R5cGUnKTtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgY2FsbCA9IEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9CSU5EID8gY2FsbC5iaW5kKGNhbGwpIDogZnVuY3Rpb24gKCkge1xuICByZXR1cm4gY2FsbC5hcHBseShjYWxsLCBhcmd1bWVudHMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gTmFzaG9ybiB+IEpESzggYnVnXG52YXIgTkFTSE9STl9CVUcgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgJiYgISRwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHsgMTogMiB9LCAxKTtcblxuLy8gYE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGVgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QucHJvdG90eXBlLnByb3BlcnR5aXNlbnVtZXJhYmxlXG5leHBvcnRzLmYgPSBOQVNIT1JOX0JVRyA/IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKFYpIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGhpcywgVik7XG4gIHJldHVybiAhIWRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci5lbnVtZXJhYmxlO1xufSA6ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgY2FsbCA9IEZ1bmN0aW9uUHJvdG90eXBlLmNhbGw7XG52YXIgdW5jdXJyeVRoaXNXaXRoQmluZCA9IE5BVElWRV9CSU5EICYmIEZ1bmN0aW9uUHJvdG90eXBlLmJpbmQuYmluZChjYWxsLCBjYWxsKTtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfQklORCA/IHVuY3VycnlUaGlzV2l0aEJpbmQgOiBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY2FsbC5hcHBseShmbiwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG52YXIgdG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyh7fS50b1N0cmluZyk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBzdHJpbmdTbGljZSh0b1N0cmluZyhpdCksIDgsIC0xKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcbnZhciBzcGxpdCA9IHVuY3VycnlUaGlzKCcnLnNwbGl0KTtcblxuLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3Ncbm1vZHVsZS5leHBvcnRzID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyB0aHJvd3MgYW4gZXJyb3IgaW4gcmhpbm8sIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9yaGluby9pc3N1ZXMvMzQ2XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gISRPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKTtcbn0pID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjbGFzc29mKGl0KSA9PT0gJ1N0cmluZycgPyBzcGxpdChpdCwgJycpIDogJE9iamVjdChpdCk7XG59IDogJE9iamVjdDtcbiIsICIndXNlIHN0cmljdCc7XG4vLyB3ZSBjYW4ndCB1c2UganVzdCBgaXQgPT0gbnVsbGAgc2luY2Ugb2YgYGRvY3VtZW50LmFsbGAgc3BlY2lhbCBjYXNlXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLUlzSFRNTEREQS1pbnRlcm5hbC1zbG90LWFlY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID09PSBudWxsIHx8IGl0ID09PSB1bmRlZmluZWQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYFJlcXVpcmVPYmplY3RDb2VyY2libGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZXF1aXJlb2JqZWN0Y29lcmNpYmxlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXNOdWxsT3JVbmRlZmluZWQoaXQpKSB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJbmRleGVkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoaXQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1Jc0hUTUxEREEtaW50ZXJuYWwtc2xvdFxudmFyIGRvY3VtZW50QWxsID0gdHlwZW9mIGRvY3VtZW50ID09ICdvYmplY3QnICYmIGRvY3VtZW50LmFsbDtcblxuLy8gYElzQ2FsbGFibGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc2NhbGxhYmxlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9uby10eXBlb2YtdW5kZWZpbmVkIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBkb2N1bWVudEFsbCA9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudEFsbCAhPT0gdW5kZWZpbmVkID8gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJyB8fCBhcmd1bWVudCA9PT0gZG9jdW1lbnRBbGw7XG59IDogZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogaXNDYWxsYWJsZShpdCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgYUZ1bmN0aW9uID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBpc0NhbGxhYmxlKGFyZ3VtZW50KSA/IGFyZ3VtZW50IDogdW5kZWZpbmVkO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZXNwYWNlLCBtZXRob2QpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPCAyID8gYUZ1bmN0aW9uKGdsb2JhbFtuYW1lc3BhY2VdKSA6IGdsb2JhbFtuYW1lc3BhY2VdICYmIGdsb2JhbFtuYW1lc3BhY2VdW21ldGhvZF07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB1bmN1cnJ5VGhpcyh7fS5pc1Byb3RvdHlwZU9mKTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBuYXZpZ2F0b3IgIT0gJ3VuZGVmaW5lZCcgJiYgU3RyaW5nKG5hdmlnYXRvci51c2VyQWdlbnQpIHx8ICcnO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50Jyk7XG5cbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgRGVubyA9IGdsb2JhbC5EZW5vO1xudmFyIHZlcnNpb25zID0gcHJvY2VzcyAmJiBwcm9jZXNzLnZlcnNpb25zIHx8IERlbm8gJiYgRGVuby52ZXJzaW9uO1xudmFyIHY4ID0gdmVyc2lvbnMgJiYgdmVyc2lvbnMudjg7XG52YXIgbWF0Y2gsIHZlcnNpb247XG5cbmlmICh2OCkge1xuICBtYXRjaCA9IHY4LnNwbGl0KCcuJyk7XG4gIC8vIGluIG9sZCBDaHJvbWUsIHZlcnNpb25zIG9mIFY4IGlzbid0IFY4ID0gQ2hyb21lIC8gMTBcbiAgLy8gYnV0IHRoZWlyIGNvcnJlY3QgdmVyc2lvbnMgYXJlIG5vdCBpbnRlcmVzdGluZyBmb3IgdXNcbiAgdmVyc2lvbiA9IG1hdGNoWzBdID4gMCAmJiBtYXRjaFswXSA8IDQgPyAxIDogKyhtYXRjaFswXSArIG1hdGNoWzFdKTtcbn1cblxuLy8gQnJvd3NlckZTIE5vZGVKUyBgcHJvY2Vzc2AgcG9seWZpbGwgaW5jb3JyZWN0bHkgc2V0IGAudjhgIHRvIGAwLjBgXG4vLyBzbyBjaGVjayBgdXNlckFnZW50YCBldmVuIGlmIGAudjhgIGV4aXN0cywgYnV0IDBcbmlmICghdmVyc2lvbiAmJiB1c2VyQWdlbnQpIHtcbiAgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2goL0VkZ2VcXC8oXFxkKykvKTtcbiAgaWYgKCFtYXRjaCB8fCBtYXRjaFsxXSA+PSA3NCkge1xuICAgIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9DaHJvbWVcXC8oXFxkKykvKTtcbiAgICBpZiAobWF0Y2gpIHZlcnNpb24gPSArbWF0Y2hbMV07XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2ZXJzaW9uO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLXN5bWJvbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZyAqL1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24nKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcblxudmFyICRTdHJpbmcgPSBnbG9iYWwuU3RyaW5nO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5c3ltYm9scyAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xubW9kdWxlLmV4cG9ydHMgPSAhIU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN5bWJvbCA9IFN5bWJvbCgnc3ltYm9sIGRldGVjdGlvbicpO1xuICAvLyBDaHJvbWUgMzggU3ltYm9sIGhhcyBpbmNvcnJlY3QgdG9TdHJpbmcgY29udmVyc2lvblxuICAvLyBgZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzYCBwb2x5ZmlsbCBzeW1ib2xzIGNvbnZlcnRlZCB0byBvYmplY3QgYXJlIG5vdCBTeW1ib2wgaW5zdGFuY2VzXG4gIC8vIG5iOiBEbyBub3QgY2FsbCBgU3RyaW5nYCBkaXJlY3RseSB0byBhdm9pZCB0aGlzIGJlaW5nIG9wdGltaXplZCBvdXQgdG8gYHN5bWJvbCsnJ2Agd2hpY2ggd2lsbCxcbiAgLy8gb2YgY291cnNlLCBmYWlsLlxuICByZXR1cm4gISRTdHJpbmcoc3ltYm9sKSB8fCAhKE9iamVjdChzeW1ib2wpIGluc3RhbmNlb2YgU3ltYm9sKSB8fFxuICAgIC8vIENocm9tZSAzOC00MCBzeW1ib2xzIGFyZSBub3QgaW5oZXJpdGVkIGZyb20gRE9NIGNvbGxlY3Rpb25zIHByb3RvdHlwZXMgdG8gaW5zdGFuY2VzXG4gICAgIVN5bWJvbC5zaGFtICYmIFY4X1ZFUlNJT04gJiYgVjhfVkVSU0lPTiA8IDQxO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tc3ltYm9sIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zeW1ib2wtY29uc3RydWN0b3ItZGV0ZWN0aW9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX1NZTUJPTFxuICAmJiAhU3ltYm9sLnNoYW1cbiAgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mJyk7XG52YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbm1vZHVsZS5leHBvcnRzID0gVVNFX1NZTUJPTF9BU19VSUQgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyICRTeW1ib2wgPSBnZXRCdWlsdEluKCdTeW1ib2wnKTtcbiAgcmV0dXJuIGlzQ2FsbGFibGUoJFN5bWJvbCkgJiYgaXNQcm90b3R5cGVPZigkU3ltYm9sLnByb3RvdHlwZSwgJE9iamVjdChpdCkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJFN0cmluZyA9IFN0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gJFN0cmluZyhhcmd1bWVudCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuICdPYmplY3QnO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgdHJ5VG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdHJ5LXRvLXN0cmluZycpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYEFzc2VydDogSXNDYWxsYWJsZShhcmd1bWVudCkgaXMgdHJ1ZWBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIGlmIChpc0NhbGxhYmxlKGFyZ3VtZW50KSkgcmV0dXJuIGFyZ3VtZW50O1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcih0cnlUb1N0cmluZyhhcmd1bWVudCkgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkJyk7XG5cbi8vIGBHZXRNZXRob2RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1nZXRtZXRob2Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFYsIFApIHtcbiAgdmFyIGZ1bmMgPSBWW1BdO1xuICByZXR1cm4gaXNOdWxsT3JVbmRlZmluZWQoZnVuYykgPyB1bmRlZmluZWQgOiBhQ2FsbGFibGUoZnVuYyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgT3JkaW5hcnlUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9yZGluYXJ5dG9wcmltaXRpdmVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBwcmVmKSB7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAocHJlZiA9PT0gJ3N0cmluZycgJiYgaXNDYWxsYWJsZShmbiA9IGlucHV0LnRvU3RyaW5nKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKGlzQ2FsbGFibGUoZm4gPSBpbnB1dC52YWx1ZU9mKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHByZWYgIT09ICdzdHJpbmcnICYmIGlzQ2FsbGFibGUoZm4gPSBpbnB1dC50b1N0cmluZykgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHRyeSB7XG4gICAgZGVmaW5lUHJvcGVydHkoZ2xvYmFsLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGdsb2JhbFtrZXldID0gdmFsdWU7XG4gIH0gcmV0dXJuIHZhbHVlO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBkZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5Jyk7XG5cbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IG1vZHVsZS5leHBvcnRzID0gZ2xvYmFsVGhpc1tTSEFSRURdIHx8IGRlZmluZUdsb2JhbFByb3BlcnR5KFNIQVJFRCwge30pO1xuXG4oc3RvcmUudmVyc2lvbnMgfHwgKHN0b3JlLnZlcnNpb25zID0gW10pKS5wdXNoKHtcbiAgdmVyc2lvbjogJzMuMzYuMCcsXG4gIG1vZGU6IElTX1BVUkUgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAxNC0yMDI0IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJyxcbiAgbGljZW5zZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2Jsb2IvdjMuMzYuMC9MSUNFTlNFJyxcbiAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMnXG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgc3RvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSB8fCB7fSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcblxuLy8gYFRvT2JqZWN0YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9vYmplY3Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiAkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xuXG52YXIgaGFzT3duUHJvcGVydHkgPSB1bmN1cnJ5VGhpcyh7fS5oYXNPd25Qcm9wZXJ0eSk7XG5cbi8vIGBIYXNPd25Qcm9wZXJ0eWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWhhc293bnByb3BlcnR5XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWhhc293biAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5oYXNPd24gfHwgZnVuY3Rpb24gaGFzT3duKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5KHRvT2JqZWN0KGl0KSwga2V5KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG52YXIgaWQgPSAwO1xudmFyIHBvc3RmaXggPSBNYXRoLnJhbmRvbSgpO1xudmFyIHRvU3RyaW5nID0gdW5jdXJyeVRoaXMoMS4wLnRvU3RyaW5nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcgKyAoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSkgKyAnKV8nICsgdG9TdHJpbmcoKytpZCArIHBvc3RmaXgsIDM2KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zeW1ib2wtY29uc3RydWN0b3ItZGV0ZWN0aW9uJyk7XG52YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQnKTtcblxudmFyIFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgV2VsbEtub3duU3ltYm9sc1N0b3JlID0gc2hhcmVkKCd3a3MnKTtcbnZhciBjcmVhdGVXZWxsS25vd25TeW1ib2wgPSBVU0VfU1lNQk9MX0FTX1VJRCA/IFN5bWJvbFsnZm9yJ10gfHwgU3ltYm9sIDogU3ltYm9sICYmIFN5bWJvbC53aXRob3V0U2V0dGVyIHx8IHVpZDtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICBpZiAoIWhhc093bihXZWxsS25vd25TeW1ib2xzU3RvcmUsIG5hbWUpKSB7XG4gICAgV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdID0gTkFUSVZFX1NZTUJPTCAmJiBoYXNPd24oU3ltYm9sLCBuYW1lKVxuICAgICAgPyBTeW1ib2xbbmFtZV1cbiAgICAgIDogY3JlYXRlV2VsbEtub3duU3ltYm9sKCdTeW1ib2wuJyArIG5hbWUpO1xuICB9IHJldHVybiBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1zeW1ib2wnKTtcbnZhciBnZXRNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LW1ldGhvZCcpO1xudmFyIG9yZGluYXJ5VG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb3JkaW5hcnktdG8tcHJpbWl0aXZlJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xudmFyIFRPX1BSSU1JVElWRSA9IHdlbGxLbm93blN5bWJvbCgndG9QcmltaXRpdmUnKTtcblxuLy8gYFRvUHJpbWl0aXZlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9wcmltaXRpdmVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBwcmVmKSB7XG4gIGlmICghaXNPYmplY3QoaW5wdXQpIHx8IGlzU3ltYm9sKGlucHV0KSkgcmV0dXJuIGlucHV0O1xuICB2YXIgZXhvdGljVG9QcmltID0gZ2V0TWV0aG9kKGlucHV0LCBUT19QUklNSVRJVkUpO1xuICB2YXIgcmVzdWx0O1xuICBpZiAoZXhvdGljVG9QcmltKSB7XG4gICAgaWYgKHByZWYgPT09IHVuZGVmaW5lZCkgcHJlZiA9ICdkZWZhdWx0JztcbiAgICByZXN1bHQgPSBjYWxsKGV4b3RpY1RvUHJpbSwgaW5wdXQsIHByZWYpO1xuICAgIGlmICghaXNPYmplY3QocmVzdWx0KSB8fCBpc1N5bWJvbChyZXN1bHQpKSByZXR1cm4gcmVzdWx0O1xuICAgIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xuICB9XG4gIGlmIChwcmVmID09PSB1bmRlZmluZWQpIHByZWYgPSAnbnVtYmVyJztcbiAgcmV0dXJuIG9yZGluYXJ5VG9QcmltaXRpdmUoaW5wdXQsIHByZWYpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG5cbi8vIGBUb1Byb3BlcnR5S2V5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9wcm9wZXJ0eWtleVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIGtleSA9IHRvUHJpbWl0aXZlKGFyZ3VtZW50LCAnc3RyaW5nJyk7XG4gIHJldHVybiBpc1N5bWJvbChrZXkpID8ga2V5IDoga2V5ICsgJyc7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciBkb2N1bWVudCA9IGdsb2JhbC5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIEVYSVNUUyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIEVYSVNUUyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCcpO1xuXG4vLyBUaGFua3MgdG8gSUU4IGZvciBpdHMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIURFU0NSSVBUT1JTICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjcmVhdGVFbGVtZW50KCdkaXYnKSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9XG4gIH0pLmEgIT09IDc7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5Jyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pZTgtZG9tLWRlZmluZScpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5ZGVzY3JpcHRvclxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgPyAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSW5kZXhlZE9iamVjdChPKTtcbiAgUCA9IHRvUHJvcGVydHlLZXkoUCk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzT3duKE8sIFApKSByZXR1cm4gY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKCFjYWxsKHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlLmYsIE8sIFApLCBPW1BdKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxuLy8gVjggfiBDaHJvbWUgMzYtXG4vLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMzM0XG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSwgJ3Byb3RvdHlwZScsIHtcbiAgICB2YWx1ZTogNDIsXG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pLnByb3RvdHlwZSAhPT0gNDI7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciAkU3RyaW5nID0gU3RyaW5nO1xudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBBc3NlcnQ6IFR5cGUoYXJndW1lbnQpIGlzIE9iamVjdGBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIGlmIChpc09iamVjdChhcmd1bWVudCkpIHJldHVybiBhcmd1bWVudDtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJFN0cmluZyhhcmd1bWVudCkgKyAnIGlzIG5vdCBhbiBvYmplY3QnKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcbnZhciBWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1ZycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5Jyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgJGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIEVOVU1FUkFCTEUgPSAnZW51bWVyYWJsZSc7XG52YXIgQ09ORklHVVJBQkxFID0gJ2NvbmZpZ3VyYWJsZSc7XG52YXIgV1JJVEFCTEUgPSAnd3JpdGFibGUnO1xuXG4vLyBgT2JqZWN0LmRlZmluZVByb3BlcnR5YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnR5XG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyA/IFY4X1BST1RPVFlQRV9ERUZJTkVfQlVHID8gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJvcGVydHlLZXkoUCk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAodHlwZW9mIE8gPT09ICdmdW5jdGlvbicgJiYgUCA9PT0gJ3Byb3RvdHlwZScgJiYgJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzICYmIFdSSVRBQkxFIGluIEF0dHJpYnV0ZXMgJiYgIUF0dHJpYnV0ZXNbV1JJVEFCTEVdKSB7XG4gICAgdmFyIGN1cnJlbnQgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApO1xuICAgIGlmIChjdXJyZW50ICYmIGN1cnJlbnRbV1JJVEFCTEVdKSB7XG4gICAgICBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgICAgIEF0dHJpYnV0ZXMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogQ09ORklHVVJBQkxFIGluIEF0dHJpYnV0ZXMgPyBBdHRyaWJ1dGVzW0NPTkZJR1VSQUJMRV0gOiBjdXJyZW50W0NPTkZJR1VSQUJMRV0sXG4gICAgICAgIGVudW1lcmFibGU6IEVOVU1FUkFCTEUgaW4gQXR0cmlidXRlcyA/IEF0dHJpYnV0ZXNbRU5VTUVSQUJMRV0gOiBjdXJyZW50W0VOVU1FUkFCTEVdLFxuICAgICAgICB3cml0YWJsZTogZmFsc2VcbiAgICAgIH07XG4gICAgfVxuICB9IHJldHVybiAkZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG59IDogJGRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJvcGVydHlLZXkoUCk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuICRkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBuZXcgJFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKG9iamVjdCwga2V5LCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG5cbnZhciBGdW5jdGlvblByb3RvdHlwZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciBnZXREZXNjcmlwdG9yID0gREVTQ1JJUFRPUlMgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxudmFyIEVYSVNUUyA9IGhhc093bihGdW5jdGlvblByb3RvdHlwZSwgJ25hbWUnKTtcbi8vIGFkZGl0aW9uYWwgcHJvdGVjdGlvbiBmcm9tIG1pbmlmaWVkIC8gbWFuZ2xlZCAvIGRyb3BwZWQgZnVuY3Rpb24gbmFtZXNcbnZhciBQUk9QRVIgPSBFWElTVFMgJiYgKGZ1bmN0aW9uIHNvbWV0aGluZygpIHsgLyogZW1wdHkgKi8gfSkubmFtZSA9PT0gJ3NvbWV0aGluZyc7XG52YXIgQ09ORklHVVJBQkxFID0gRVhJU1RTICYmICghREVTQ1JJUFRPUlMgfHwgKERFU0NSSVBUT1JTICYmIGdldERlc2NyaXB0b3IoRnVuY3Rpb25Qcm90b3R5cGUsICduYW1lJykuY29uZmlndXJhYmxlKSk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBFWElTVFM6IEVYSVNUUyxcbiAgUFJPUEVSOiBQUk9QRVIsXG4gIENPTkZJR1VSQUJMRTogQ09ORklHVVJBQkxFXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgc3RvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG5cbnZhciBmdW5jdGlvblRvU3RyaW5nID0gdW5jdXJyeVRoaXMoRnVuY3Rpb24udG9TdHJpbmcpO1xuXG4vLyB0aGlzIGhlbHBlciBicm9rZW4gaW4gYGNvcmUtanNAMy40LjEtMy40LjRgLCBzbyB3ZSBjYW4ndCB1c2UgYHNoYXJlZGAgaGVscGVyXG5pZiAoIWlzQ2FsbGFibGUoc3RvcmUuaW5zcGVjdFNvdXJjZSkpIHtcbiAgc3RvcmUuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBmdW5jdGlvblRvU3RyaW5nKGl0KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdG9yZS5pbnNwZWN0U291cmNlO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgV2Vha01hcCA9IGdsb2JhbC5XZWFrTWFwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQ2FsbGFibGUoV2Vha01hcCkgJiYgL25hdGl2ZSBjb2RlLy50ZXN0KFN0cmluZyhXZWFrTWFwKSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG5cbnZhciBrZXlzID0gc2hhcmVkKCdrZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4ga2V5c1trZXldIHx8IChrZXlzW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIE5BVElWRV9XRUFLX01BUCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24nKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xuXG52YXIgT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQgPSAnT2JqZWN0IGFscmVhZHkgaW5pdGlhbGl6ZWQnO1xudmFyIFR5cGVFcnJvciA9IGdsb2JhbC5UeXBlRXJyb3I7XG52YXIgV2Vha01hcCA9IGdsb2JhbC5XZWFrTWFwO1xudmFyIHNldCwgZ2V0LCBoYXM7XG5cbnZhciBlbmZvcmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBoYXMoaXQpID8gZ2V0KGl0KSA6IHNldChpdCwge30pO1xufTtcblxudmFyIGdldHRlckZvciA9IGZ1bmN0aW9uIChUWVBFKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaXQpIHtcbiAgICB2YXIgc3RhdGU7XG4gICAgaWYgKCFpc09iamVjdChpdCkgfHwgKHN0YXRlID0gZ2V0KGl0KSkudHlwZSAhPT0gVFlQRSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW5jb21wYXRpYmxlIHJlY2VpdmVyLCAnICsgVFlQRSArICcgcmVxdWlyZWQnKTtcbiAgICB9IHJldHVybiBzdGF0ZTtcbiAgfTtcbn07XG5cbmlmIChOQVRJVkVfV0VBS19NQVAgfHwgc2hhcmVkLnN0YXRlKSB7XG4gIHZhciBzdG9yZSA9IHNoYXJlZC5zdGF0ZSB8fCAoc2hhcmVkLnN0YXRlID0gbmV3IFdlYWtNYXAoKSk7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXNlbGYtYXNzaWduIC0tIHByb3RvdHlwZSBtZXRob2RzIHByb3RlY3Rpb24gKi9cbiAgc3RvcmUuZ2V0ID0gc3RvcmUuZ2V0O1xuICBzdG9yZS5oYXMgPSBzdG9yZS5oYXM7XG4gIHN0b3JlLnNldCA9IHN0b3JlLnNldDtcbiAgLyogZXNsaW50LWVuYWJsZSBuby1zZWxmLWFzc2lnbiAtLSBwcm90b3R5cGUgbWV0aG9kcyBwcm90ZWN0aW9uICovXG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICBpZiAoc3RvcmUuaGFzKGl0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcihPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCk7XG4gICAgbWV0YWRhdGEuZmFjYWRlID0gaXQ7XG4gICAgc3RvcmUuc2V0KGl0LCBtZXRhZGF0YSk7XG4gICAgcmV0dXJuIG1ldGFkYXRhO1xuICB9O1xuICBnZXQgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gc3RvcmUuZ2V0KGl0KSB8fCB7fTtcbiAgfTtcbiAgaGFzID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHN0b3JlLmhhcyhpdCk7XG4gIH07XG59IGVsc2Uge1xuICB2YXIgU1RBVEUgPSBzaGFyZWRLZXkoJ3N0YXRlJyk7XG4gIGhpZGRlbktleXNbU1RBVEVdID0gdHJ1ZTtcbiAgc2V0ID0gZnVuY3Rpb24gKGl0LCBtZXRhZGF0YSkge1xuICAgIGlmIChoYXNPd24oaXQsIFNUQVRFKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCk7XG4gICAgbWV0YWRhdGEuZmFjYWRlID0gaXQ7XG4gICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KGl0LCBTVEFURSwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGhhc093bihpdCwgU1RBVEUpID8gaXRbU1RBVEVdIDoge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBoYXNPd24oaXQsIFNUQVRFKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogc2V0LFxuICBnZXQ6IGdldCxcbiAgaGFzOiBoYXMsXG4gIGVuZm9yY2U6IGVuZm9yY2UsXG4gIGdldHRlckZvcjogZ2V0dGVyRm9yXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgQ09ORklHVVJBQkxFX0ZVTkNUSU9OX05BTUUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tbmFtZScpLkNPTkZJR1VSQUJMRTtcbnZhciBpbnNwZWN0U291cmNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luc3BlY3Qtc291cmNlJyk7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpO1xuXG52YXIgZW5mb3JjZUludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmVuZm9yY2U7XG52YXIgZ2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0O1xudmFyICRTdHJpbmcgPSBTdHJpbmc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBzdHJpbmdTbGljZSA9IHVuY3VycnlUaGlzKCcnLnNsaWNlKTtcbnZhciByZXBsYWNlID0gdW5jdXJyeVRoaXMoJycucmVwbGFjZSk7XG52YXIgam9pbiA9IHVuY3VycnlUaGlzKFtdLmpvaW4pO1xuXG52YXIgQ09ORklHVVJBQkxFX0xFTkdUSCA9IERFU0NSSVBUT1JTICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eShmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0sICdsZW5ndGgnLCB7IHZhbHVlOiA4IH0pLmxlbmd0aCAhPT0gODtcbn0pO1xuXG52YXIgVEVNUExBVEUgPSBTdHJpbmcoU3RyaW5nKS5zcGxpdCgnU3RyaW5nJyk7XG5cbnZhciBtYWtlQnVpbHRJbiA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlLCBuYW1lLCBvcHRpb25zKSB7XG4gIGlmIChzdHJpbmdTbGljZSgkU3RyaW5nKG5hbWUpLCAwLCA3KSA9PT0gJ1N5bWJvbCgnKSB7XG4gICAgbmFtZSA9ICdbJyArIHJlcGxhY2UoJFN0cmluZyhuYW1lKSwgL15TeW1ib2xcXCgoW14pXSopXFwpLiokLywgJyQxJykgKyAnXSc7XG4gIH1cbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5nZXR0ZXIpIG5hbWUgPSAnZ2V0ICcgKyBuYW1lO1xuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnNldHRlcikgbmFtZSA9ICdzZXQgJyArIG5hbWU7XG4gIGlmICghaGFzT3duKHZhbHVlLCAnbmFtZScpIHx8IChDT05GSUdVUkFCTEVfRlVOQ1RJT05fTkFNRSAmJiB2YWx1ZS5uYW1lICE9PSBuYW1lKSkge1xuICAgIGlmIChERVNDUklQVE9SUykgZGVmaW5lUHJvcGVydHkodmFsdWUsICduYW1lJywgeyB2YWx1ZTogbmFtZSwgY29uZmlndXJhYmxlOiB0cnVlIH0pO1xuICAgIGVsc2UgdmFsdWUubmFtZSA9IG5hbWU7XG4gIH1cbiAgaWYgKENPTkZJR1VSQUJMRV9MRU5HVEggJiYgb3B0aW9ucyAmJiBoYXNPd24ob3B0aW9ucywgJ2FyaXR5JykgJiYgdmFsdWUubGVuZ3RoICE9PSBvcHRpb25zLmFyaXR5KSB7XG4gICAgZGVmaW5lUHJvcGVydHkodmFsdWUsICdsZW5ndGgnLCB7IHZhbHVlOiBvcHRpb25zLmFyaXR5IH0pO1xuICB9XG4gIHRyeSB7XG4gICAgaWYgKG9wdGlvbnMgJiYgaGFzT3duKG9wdGlvbnMsICdjb25zdHJ1Y3RvcicpICYmIG9wdGlvbnMuY29uc3RydWN0b3IpIHtcbiAgICAgIGlmIChERVNDUklQVE9SUykgZGVmaW5lUHJvcGVydHkodmFsdWUsICdwcm90b3R5cGUnLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTtcbiAgICAvLyBpbiBWOCB+IENocm9tZSA1MywgcHJvdG90eXBlcyBvZiBzb21lIG1ldGhvZHMsIGxpa2UgYEFycmF5LnByb3RvdHlwZS52YWx1ZXNgLCBhcmUgbm9uLXdyaXRhYmxlXG4gICAgfSBlbHNlIGlmICh2YWx1ZS5wcm90b3R5cGUpIHZhbHVlLnByb3RvdHlwZSA9IHVuZGVmaW5lZDtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICB2YXIgc3RhdGUgPSBlbmZvcmNlSW50ZXJuYWxTdGF0ZSh2YWx1ZSk7XG4gIGlmICghaGFzT3duKHN0YXRlLCAnc291cmNlJykpIHtcbiAgICBzdGF0ZS5zb3VyY2UgPSBqb2luKFRFTVBMQVRFLCB0eXBlb2YgbmFtZSA9PSAnc3RyaW5nJyA/IG5hbWUgOiAnJyk7XG4gIH0gcmV0dXJuIHZhbHVlO1xufTtcblxuLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXh0ZW5kLW5hdGl2ZSAtLSByZXF1aXJlZFxuRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nID0gbWFrZUJ1aWx0SW4oZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiBpc0NhbGxhYmxlKHRoaXMpICYmIGdldEludGVybmFsU3RhdGUodGhpcykuc291cmNlIHx8IGluc3BlY3RTb3VyY2UodGhpcyk7XG59LCAndG9TdHJpbmcnKTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBtYWtlQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9tYWtlLWJ1aWx0LWluJyk7XG52YXIgZGVmaW5lR2xvYmFsUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWdsb2JhbC1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBrZXksIHZhbHVlLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykgb3B0aW9ucyA9IHt9O1xuICB2YXIgc2ltcGxlID0gb3B0aW9ucy5lbnVtZXJhYmxlO1xuICB2YXIgbmFtZSA9IG9wdGlvbnMubmFtZSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5uYW1lIDoga2V5O1xuICBpZiAoaXNDYWxsYWJsZSh2YWx1ZSkpIG1ha2VCdWlsdEluKHZhbHVlLCBuYW1lLCBvcHRpb25zKTtcbiAgaWYgKG9wdGlvbnMuZ2xvYmFsKSB7XG4gICAgaWYgKHNpbXBsZSkgT1trZXldID0gdmFsdWU7XG4gICAgZWxzZSBkZWZpbmVHbG9iYWxQcm9wZXJ0eShrZXksIHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFvcHRpb25zLnVuc2FmZSkgZGVsZXRlIE9ba2V5XTtcbiAgICAgIGVsc2UgaWYgKE9ba2V5XSkgc2ltcGxlID0gdHJ1ZTtcbiAgICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gICAgaWYgKHNpbXBsZSkgT1trZXldID0gdmFsdWU7XG4gICAgZWxzZSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKE8sIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6ICFvcHRpb25zLm5vbkNvbmZpZ3VyYWJsZSxcbiAgICAgIHdyaXRhYmxlOiAhb3B0aW9ucy5ub25Xcml0YWJsZVxuICAgIH0pO1xuICB9IHJldHVybiBPO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5cbi8vIGBNYXRoLnRydW5jYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbWF0aC50cnVuY1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW1hdGgtdHJ1bmMgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBNYXRoLnRydW5jIHx8IGZ1bmN0aW9uIHRydW5jKHgpIHtcbiAgdmFyIG4gPSAreDtcbiAgcmV0dXJuIChuID4gMCA/IGZsb29yIDogY2VpbCkobik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0cnVuYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9tYXRoLXRydW5jJyk7XG5cbi8vIGBUb0ludGVnZXJPckluZmluaXR5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9pbnRlZ2Vyb3JpbmZpbml0eVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIG51bWJlciA9ICthcmd1bWVudDtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgcmV0dXJuIG51bWJlciAhPT0gbnVtYmVyIHx8IG51bWJlciA9PT0gMCA/IDAgOiB0cnVuYyhudW1iZXIpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9JbnRlZ2VyT3JJbmZpbml0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyLW9yLWluZmluaXR5Jyk7XG5cbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcblxuLy8gSGVscGVyIGZvciBhIHBvcHVsYXIgcmVwZWF0aW5nIGNhc2Ugb2YgdGhlIHNwZWM6XG4vLyBMZXQgaW50ZWdlciBiZSA/IFRvSW50ZWdlcihpbmRleCkuXG4vLyBJZiBpbnRlZ2VyIDwgMCwgbGV0IHJlc3VsdCBiZSBtYXgoKGxlbmd0aCArIGludGVnZXIpLCAwKTsgZWxzZSBsZXQgcmVzdWx0IGJlIG1pbihpbnRlZ2VyLCBsZW5ndGgpLlxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICB2YXIgaW50ZWdlciA9IHRvSW50ZWdlck9ySW5maW5pdHkoaW5kZXgpO1xuICByZXR1cm4gaW50ZWdlciA8IDAgPyBtYXgoaW50ZWdlciArIGxlbmd0aCwgMCkgOiBtaW4oaW50ZWdlciwgbGVuZ3RoKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xuXG52YXIgbWluID0gTWF0aC5taW47XG5cbi8vIGBUb0xlbmd0aGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvbGVuZ3RoXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICB2YXIgbGVuID0gdG9JbnRlZ2VyT3JJbmZpbml0eShhcmd1bWVudCk7XG4gIHJldHVybiBsZW4gPiAwID8gbWluKGxlbiwgMHgxRkZGRkZGRkZGRkZGRikgOiAwOyAvLyAyICoqIDUzIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcblxuLy8gYExlbmd0aE9mQXJyYXlMaWtlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbGVuZ3Rob2ZhcnJheWxpa2Vcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdG9MZW5ndGgob2JqLmxlbmd0aCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tYWJzb2x1dGUtaW5kZXgnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnsgaW5kZXhPZiwgaW5jbHVkZXMgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSBsZW5ndGhPZkFycmF5TGlrZShPKTtcbiAgICBpZiAobGVuZ3RoID09PSAwKSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgICAgIGlmICh2YWx1ZSAhPT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgIGlmICgoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykgJiYgT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5pbmNsdWRlc2AgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluY2x1ZGVzXG4gIGluY2x1ZGVzOiBjcmVhdGVNZXRob2QodHJ1ZSksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuaW5kZXhPZmAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluZGV4b2ZcbiAgaW5kZXhPZjogY3JlYXRlTWV0aG9kKGZhbHNlKVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBpbmRleE9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzJykuaW5kZXhPZjtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG5cbnZhciBwdXNoID0gdW5jdXJyeVRoaXMoW10ucHVzaCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pICFoYXNPd24oaGlkZGVuS2V5cywga2V5KSAmJiBoYXNPd24oTywga2V5KSAmJiBwdXNoKHJlc3VsdCwga2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhc093bihPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5pbmRleE9mKHJlc3VsdCwga2V5KSB8fCBwdXNoKHJlc3VsdCwga2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBJRTgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gW1xuICAnY29uc3RydWN0b3InLFxuICAnaGFzT3duUHJvcGVydHknLFxuICAnaXNQcm90b3R5cGVPZicsXG4gICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsXG4gICd0b0xvY2FsZVN0cmluZycsXG4gICd0b1N0cmluZycsXG4gICd2YWx1ZU9mJ1xuXTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaW50ZXJuYWxPYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xuXG52YXIgaGlkZGVuS2V5cyA9IGVudW1CdWdLZXlzLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHluYW1lc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eW5hbWVzIC0tIHNhZmVcbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICByZXR1cm4gaW50ZXJuYWxPYmplY3RLZXlzKE8sIGhpZGRlbktleXMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5c3ltYm9scyAtLSBzYWZlXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xuXG52YXIgY29uY2F0ID0gdW5jdXJyeVRoaXMoW10uY29uY2F0KTtcblxuLy8gYWxsIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBub24tZW51bWVyYWJsZSBhbmQgc3ltYm9sc1xubW9kdWxlLmV4cG9ydHMgPSBnZXRCdWlsdEluKCdSZWZsZWN0JywgJ293bktleXMnKSB8fCBmdW5jdGlvbiBvd25LZXlzKGl0KSB7XG4gIHZhciBrZXlzID0gZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZS5mKGFuT2JqZWN0KGl0KSk7XG4gIHZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUuZjtcbiAgcmV0dXJuIGdldE93blByb3BlcnR5U3ltYm9scyA/IGNvbmNhdChrZXlzLCBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpKSA6IGtleXM7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIG93bktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb3duLWtleXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UsIGV4Y2VwdGlvbnMpIHtcbiAgdmFyIGtleXMgPSBvd25LZXlzKHNvdXJjZSk7XG4gIHZhciBkZWZpbmVQcm9wZXJ0eSA9IGRlZmluZVByb3BlcnR5TW9kdWxlLmY7XG4gIHZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUuZjtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgaWYgKCFoYXNPd24odGFyZ2V0LCBrZXkpICYmICEoZXhjZXB0aW9ucyAmJiBoYXNPd24oZXhjZXB0aW9ucywga2V5KSkpIHtcbiAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICB9XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgcmVwbGFjZW1lbnQgPSAvI3xcXC5wcm90b3R5cGVcXC4vO1xuXG52YXIgaXNGb3JjZWQgPSBmdW5jdGlvbiAoZmVhdHVyZSwgZGV0ZWN0aW9uKSB7XG4gIHZhciB2YWx1ZSA9IGRhdGFbbm9ybWFsaXplKGZlYXR1cmUpXTtcbiAgcmV0dXJuIHZhbHVlID09PSBQT0xZRklMTCA/IHRydWVcbiAgICA6IHZhbHVlID09PSBOQVRJVkUgPyBmYWxzZVxuICAgIDogaXNDYWxsYWJsZShkZXRlY3Rpb24pID8gZmFpbHMoZGV0ZWN0aW9uKVxuICAgIDogISFkZXRlY3Rpb247XG59O1xuXG52YXIgbm9ybWFsaXplID0gaXNGb3JjZWQubm9ybWFsaXplID0gZnVuY3Rpb24gKHN0cmluZykge1xuICByZXR1cm4gU3RyaW5nKHN0cmluZykucmVwbGFjZShyZXBsYWNlbWVudCwgJy4nKS50b0xvd2VyQ2FzZSgpO1xufTtcblxudmFyIGRhdGEgPSBpc0ZvcmNlZC5kYXRhID0ge307XG52YXIgTkFUSVZFID0gaXNGb3JjZWQuTkFUSVZFID0gJ04nO1xudmFyIFBPTFlGSUxMID0gaXNGb3JjZWQuUE9MWUZJTEwgPSAnUCc7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGb3JjZWQ7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpLmY7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIGRlZmluZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluJyk7XG52YXIgZGVmaW5lR2xvYmFsUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWdsb2JhbC1wcm9wZXJ0eScpO1xudmFyIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzJyk7XG52YXIgaXNGb3JjZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtZm9yY2VkJyk7XG5cbi8qXG4gIG9wdGlvbnMudGFyZ2V0ICAgICAgICAgLSBuYW1lIG9mIHRoZSB0YXJnZXQgb2JqZWN0XG4gIG9wdGlvbnMuZ2xvYmFsICAgICAgICAgLSB0YXJnZXQgaXMgdGhlIGdsb2JhbCBvYmplY3RcbiAgb3B0aW9ucy5zdGF0ICAgICAgICAgICAtIGV4cG9ydCBhcyBzdGF0aWMgbWV0aG9kcyBvZiB0YXJnZXRcbiAgb3B0aW9ucy5wcm90byAgICAgICAgICAtIGV4cG9ydCBhcyBwcm90b3R5cGUgbWV0aG9kcyBvZiB0YXJnZXRcbiAgb3B0aW9ucy5yZWFsICAgICAgICAgICAtIHJlYWwgcHJvdG90eXBlIG1ldGhvZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMuZm9yY2VkICAgICAgICAgLSBleHBvcnQgZXZlbiBpZiB0aGUgbmF0aXZlIGZlYXR1cmUgaXMgYXZhaWxhYmxlXG4gIG9wdGlvbnMuYmluZCAgICAgICAgICAgLSBiaW5kIG1ldGhvZHMgdG8gdGhlIHRhcmdldCwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLndyYXAgICAgICAgICAgIC0gd3JhcCBjb25zdHJ1Y3RvcnMgdG8gcHJldmVudGluZyBnbG9iYWwgcG9sbHV0aW9uLCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMudW5zYWZlICAgICAgICAgLSB1c2UgdGhlIHNpbXBsZSBhc3NpZ25tZW50IG9mIHByb3BlcnR5IGluc3RlYWQgb2YgZGVsZXRlICsgZGVmaW5lUHJvcGVydHlcbiAgb3B0aW9ucy5zaGFtICAgICAgICAgICAtIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgb3B0aW9ucy5lbnVtZXJhYmxlICAgICAtIGV4cG9ydCBhcyBlbnVtZXJhYmxlIHByb3BlcnR5XG4gIG9wdGlvbnMuZG9udENhbGxHZXRTZXQgLSBwcmV2ZW50IGNhbGxpbmcgYSBnZXR0ZXIgb24gdGFyZ2V0XG4gIG9wdGlvbnMubmFtZSAgICAgICAgICAgLSB0aGUgLm5hbWUgb2YgdGhlIGZ1bmN0aW9uIGlmIGl0IGRvZXMgbm90IG1hdGNoIHRoZSBrZXlcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcHRpb25zLCBzb3VyY2UpIHtcbiAgdmFyIFRBUkdFVCA9IG9wdGlvbnMudGFyZ2V0O1xuICB2YXIgR0xPQkFMID0gb3B0aW9ucy5nbG9iYWw7XG4gIHZhciBTVEFUSUMgPSBvcHRpb25zLnN0YXQ7XG4gIHZhciBGT1JDRUQsIHRhcmdldCwga2V5LCB0YXJnZXRQcm9wZXJ0eSwgc291cmNlUHJvcGVydHksIGRlc2NyaXB0b3I7XG4gIGlmIChHTE9CQUwpIHtcbiAgICB0YXJnZXQgPSBnbG9iYWw7XG4gIH0gZWxzZSBpZiAoU1RBVElDKSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsW1RBUkdFVF0gfHwgZGVmaW5lR2xvYmFsUHJvcGVydHkoVEFSR0VULCB7fSk7XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsW1RBUkdFVF0gJiYgZ2xvYmFsW1RBUkdFVF0ucHJvdG90eXBlO1xuICB9XG4gIGlmICh0YXJnZXQpIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIHNvdXJjZVByb3BlcnR5ID0gc291cmNlW2tleV07XG4gICAgaWYgKG9wdGlvbnMuZG9udENhbGxHZXRTZXQpIHtcbiAgICAgIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpO1xuICAgICAgdGFyZ2V0UHJvcGVydHkgPSBkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IudmFsdWU7XG4gICAgfSBlbHNlIHRhcmdldFByb3BlcnR5ID0gdGFyZ2V0W2tleV07XG4gICAgRk9SQ0VEID0gaXNGb3JjZWQoR0xPQkFMID8ga2V5IDogVEFSR0VUICsgKFNUQVRJQyA/ICcuJyA6ICcjJykgKyBrZXksIG9wdGlvbnMuZm9yY2VkKTtcbiAgICAvLyBjb250YWluZWQgaW4gdGFyZ2V0XG4gICAgaWYgKCFGT1JDRUQgJiYgdGFyZ2V0UHJvcGVydHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHR5cGVvZiBzb3VyY2VQcm9wZXJ0eSA9PSB0eXBlb2YgdGFyZ2V0UHJvcGVydHkpIGNvbnRpbnVlO1xuICAgICAgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyhzb3VyY2VQcm9wZXJ0eSwgdGFyZ2V0UHJvcGVydHkpO1xuICAgIH1cbiAgICAvLyBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gICAgaWYgKG9wdGlvbnMuc2hhbSB8fCAodGFyZ2V0UHJvcGVydHkgJiYgdGFyZ2V0UHJvcGVydHkuc2hhbSkpIHtcbiAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShzb3VyY2VQcm9wZXJ0eSwgJ3NoYW0nLCB0cnVlKTtcbiAgICB9XG4gICAgZGVmaW5lQnVpbHRJbih0YXJnZXQsIGtleSwgc291cmNlUHJvcGVydHksIG9wdGlvbnMpO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG5cbi8vIGBJc0FycmF5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXNhcnJheVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LWlzYXJyYXkgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGNsYXNzb2YoYXJndW1lbnQpID09PSAnQXJyYXknO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIFNhZmFyaSA8IDEzIGRvZXMgbm90IHRocm93IGFuIGVycm9yIGluIHRoaXMgY2FzZVxudmFyIFNJTEVOVF9PTl9OT05fV1JJVEFCTEVfTEVOR1RIX1NFVCA9IERFU0NSSVBUT1JTICYmICFmdW5jdGlvbiAoKSB7XG4gIC8vIG1ha2VzIG5vIHNlbnNlIHdpdGhvdXQgcHJvcGVyIHN0cmljdCBtb2RlIHN1cHBvcnRcbiAgaWYgKHRoaXMgIT09IHVuZGVmaW5lZCkgcmV0dXJuIHRydWU7XG4gIHRyeSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFtdLCAnbGVuZ3RoJywgeyB3cml0YWJsZTogZmFsc2UgfSkubGVuZ3RoID0gMTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3IgaW5zdGFuY2VvZiBUeXBlRXJyb3I7XG4gIH1cbn0oKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTSUxFTlRfT05fTk9OX1dSSVRBQkxFX0xFTkdUSF9TRVQgPyBmdW5jdGlvbiAoTywgbGVuZ3RoKSB7XG4gIGlmIChpc0FycmF5KE8pICYmICFnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgJ2xlbmd0aCcpLndyaXRhYmxlKSB7XG4gICAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Nhbm5vdCBzZXQgcmVhZCBvbmx5IC5sZW5ndGgnKTtcbiAgfSByZXR1cm4gTy5sZW5ndGggPSBsZW5ndGg7XG59IDogZnVuY3Rpb24gKE8sIGxlbmd0aCkge1xuICByZXR1cm4gTy5sZW5ndGggPSBsZW5ndGg7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSAweDFGRkZGRkZGRkZGRkZGOyAvLyAyICoqIDUzIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA+IE1BWF9TQUZFX0lOVEVHRVIpIHRocm93ICRUeXBlRXJyb3IoJ01heGltdW0gYWxsb3dlZCBpbmRleCBleGNlZWRlZCcpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG52YXIgc2V0QXJyYXlMZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc2V0LWxlbmd0aCcpO1xudmFyIGRvZXNOb3RFeGNlZWRTYWZlSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2VzLW5vdC1leGNlZWQtc2FmZS1pbnRlZ2VyJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxudmFyIElOQ09SUkVDVF9UT19MRU5HVEggPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBbXS5wdXNoLmNhbGwoeyBsZW5ndGg6IDB4MTAwMDAwMDAwIH0sIDEpICE9PSA0Mjk0OTY3Mjk3O1xufSk7XG5cbi8vIFY4IDw9IDEyMSBhbmQgU2FmYXJpIDw9IDE1LjQ7IEZGIDwgMjMgdGhyb3dzIEludGVybmFsRXJyb3Jcbi8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTEyNjgxXG52YXIgcHJvcGVyRXJyb3JPbk5vbldyaXRhYmxlTGVuZ3RoID0gZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShbXSwgJ2xlbmd0aCcsIHsgd3JpdGFibGU6IGZhbHNlIH0pLnB1c2goKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3IgaW5zdGFuY2VvZiBUeXBlRXJyb3I7XG4gIH1cbn07XG5cbnZhciBGT1JDRUQgPSBJTkNPUlJFQ1RfVE9fTEVOR1RIIHx8ICFwcm9wZXJFcnJvck9uTm9uV3JpdGFibGVMZW5ndGgoKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5wdXNoYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnB1c2hcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBhcml0eTogMSwgZm9yY2VkOiBGT1JDRUQgfSwge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnMgLS0gcmVxdWlyZWQgZm9yIGAubGVuZ3RoYFxuICBwdXNoOiBmdW5jdGlvbiBwdXNoKGl0ZW0pIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpO1xuICAgIHZhciBsZW4gPSBsZW5ndGhPZkFycmF5TGlrZShPKTtcbiAgICB2YXIgYXJnQ291bnQgPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGRvZXNOb3RFeGNlZWRTYWZlSW50ZWdlcihsZW4gKyBhcmdDb3VudCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdDb3VudDsgaSsrKSB7XG4gICAgICBPW2xlbl0gPSBhcmd1bWVudHNbaV07XG4gICAgICBsZW4rKztcbiAgICB9XG4gICAgc2V0QXJyYXlMZW5ndGgoTywgbGVuKTtcbiAgICByZXR1cm4gbGVuO1xuICB9XG59KTtcbiIsICJjb25zdCBXR19BQ1RJT046IE1lZGlhV2lraUNvbmZpZ01hcFdnQWN0aW9uID0gbXcuY29uZmlnLmdldCgnd2dBY3Rpb24nKTtcbmNvbnN0IFdHX1BBR0VfQ09OVEVOVF9NT0RFTDogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dQYWdlQ29udGVudE1vZGVsJyk7XG5jb25zdCBXR19VU0VSX0xBTkdVQUdFOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCd3Z1VzZXJMYW5ndWFnZScpO1xuXG5jb25zdCBJU19XR19FRElUX09SX1NVQk1JVF9BQ1RJT046IGJvb2xlYW4gPSBbJ2VkaXQnLCAnc3VibWl0J10uaW5jbHVkZXMoV0dfQUNUSU9OKTtcblxuZXhwb3J0IHtXR19QQUdFX0NPTlRFTlRfTU9ERUwsIFdHX1VTRVJfTEFOR1VBR0UsIElTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTn07XG4iLCAiaW1wb3J0ICcuL0VkaXR0b29scy1yZWZUb29sYmFyLmxlc3MnO1xuaW1wb3J0IHtJU19XR19FRElUX09SX1NVQk1JVF9BQ1RJT04sIFdHX1BBR0VfQ09OVEVOVF9NT0RFTH0gZnJvbSAnLi9tb2R1bGVzL2NvbnN0YW50JztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7cmVmVG9vbGJhcjJ9IGZyb20gJy4vbW9kdWxlcy9SZWZUb29sYmFyMi4wJztcbmltcG9ydCB7cmVmVG9vbGJhckJhc2V9IGZyb20gJy4vbW9kdWxlcy9SZWZUb29sYmFyQmFzZSc7XG5pbXBvcnQge3JlZlRvb2xiYXJNZXNhZ2VzfSBmcm9tICcuL21vZHVsZXMvbWVzc2FnZXMnO1xuXG4vKipcbiAqIFJlZlRvb2xiYXJcbiAqXG4gKiBBZGRzIHRvb2xzIGZvciBjaXRpbmcgcmVmZXJlbmNlcyB0byB0aGUgZWRpdCB0b29sYmFyLlxuICogT25lIG9mIHR3byBwb3NzaWJsZSB2ZXJzaW9ucyB3aWxsIGxvYWQgKFJlZnRvb2xiYXIgMS4wIG9yIFJlZnRvb2xiYXIgMS4wKVxuICogZGVwZW5kaW5nIG9uIHRoZSB1c2VyIHByZWZlcmVuY2VzICh0aGUgdXNlYmV0YXRvb2xiYXIgcHJlZmVyZW5jZSkuXG4gKlxuICogQGF1dGhvciBNci5aLW1hbiwgS2FsZGFyaVxuICovXG4oKCk6IHZvaWQgPT4ge1xuXHQvLyBPbmx5IGV4ZWN1dGUgd2hlbiBlZGl0aW5nL3ByZXZpZXdpbmcgd2lraXRleHQgcGFnZXNcblx0aWYgKCFJU19XR19FRElUX09SX1NVQk1JVF9BQ1RJT04gfHwgV0dfUEFHRV9DT05URU5UX01PREVMICE9PSAnd2lraXRleHQnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKCFtdy51c2VyLm9wdGlvbnMuZ2V0KCd1c2ViZXRhdG9vbGJhcicpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhW25hbWU9d3BUZXh0Ym94MV1bcmVhZG9ubHldJykpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBMb2FkIGxvY2FsIG1lc3NhZ2VzLlxuXHRyZWZUb29sYmFyTWVzYWdlcygpO1xuXHQvLyBMb2FkIG1haW4gZnVuY3Rpb25zXG5cdHJlZlRvb2xiYXJCYXNlKCk7XG5cdHZvaWQgZ2V0Qm9keSgpLnRoZW4ocmVmVG9vbGJhcjIpO1xufSkoKTtcbiIsICJpbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoJ1JlZlRvb2xiYXIvMi4wJyk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJjb25zdCBnZXRNZXNzYWdlID0gKGtleTogc3RyaW5nLCAuLi5hcmdzOiBzdHJpbmdbXSk6IHN0cmluZyA9PiB7XG5cdC8vIE1lc3NhZ2VzIHRoYXQgY2FuIGJlIHVzZWQgaGVyZTpcblx0Ly8gKiBzZWUgbWVzc2FnZXMudHNcblx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRyZXR1cm4gYXJncy5sZW5ndGggPyBtdy5tZXNzYWdlKGtleSwgLi4uYXJncykucGFyc2UoKSA6IG13Lm1lc3NhZ2Uoa2V5KS5wbGFpbigpO1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICIvKiBnbG9iYWwgQ2l0ZVRCICovXG4vKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UsIG5vLW5ldywgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50ICovXG4vLyBAdHMtbm9jaGVja1xuLyoqXG4gKiBTaXRld2lkZSBvcHRpb25zIGZvciB0aGUgdGhlIENpdGUgdG9vbGJhciBidXR0b246XG4gKiBBbGwgb3B0aW9ucyBzaG91bGQgYmUgc3BlY2lmaWVkXG4gKlxuICogXCJkYXRlIGZvcm1hdFwiIHNldHMgdGhlIGRhdGUgZm9ybWF0IHVzZWQgZm9yIHRoZSBmdW5jdGlvbiB0byBpbnNlcnQgdGhlIGN1cnJlbnQgZGF0ZVxuICogQ3VycmVudCBhdmFpbGFibGUgb3B0aW9uczpcbiAqIGRhdGUgLSB0aGUgZGF5IG9mIHRoZSBtb250aFxuICogemRhdGUgLSBkYXkgb2YgdGhlIG1vbnRoLCB6ZXJvIHBhZGRlZCB0byAyIGRpZ2l0c1xuICogbW9udGhuYW1lIC0gVGhlIG1vbnRoIG5hbWVcbiAqIG1vbnRoIC0gVGhlIG51bWJlcmljIG1vbnRoICgxLTEyKVxuICogem1vbnRoIC0gbnVtZXJpYyBtb250aCwgemVybyBwYWRkZWQgdG8gMiBkaWdpdHNcbiAqIHllYXIgLSBUaGUgZnVsbCB5ZWFyICg0IGRpZ2l0cylcbiAqXG4gKiBcImF1dG9kYXRlIGZpZWxkc1wiIGlzIGEgbGlzdCBvZiB0ZW1wbGF0ZSBmaWVsZHMgdGhhdCBzaG91bGQgaGF2ZSBhIGJ1dHRvbiB0byBpbnNlcnQgdGhlIGN1cnJlbnQgZGF0ZVxuICpcbiAqIFwibW9udGhzXCIgaXMgYSBsaXN0IG9mIGxvY2FsaXplZCBtb250aCBuYW1lc1xuICpcbiAqIFwibW9kYWxcIiAtIGlmIHRydWUsIHRoZSBkaWFsb2dzIHdpbGwgYmUgbW9kYWwgd2luZG93cywgYmxvY2tpbmcgYWNjZXNzIHRvIHRoZSByZXN0IG9mIHRoZSB3aW5kb3cuXG4gKiBBbGwgZGlhbG9ncyBpbiB0aGUgdG9vbGJhciBhcmUgbW9kYWwgYnkgZGVmYXVsdFxuICpcbiAqIFwiYXV0b3BhcnNlXCIgLSBpZiB0cnVlLCBwcmV2aWV3aW5nIGEgcmVmIHdpbGwgYXV0b21hdGljYWxseSB0cmlnZ2VyIGEgcHJldmlldyBvZiB0aGUgcGFyc2VkIHdpa2l0ZXh0LlxuICogSXQgaXMgbm90IHJlY29tbWVuZGVkIHRvIHNldCB0aGlzIHRvIHRydWUgYXMgYSBnbG9iYWwgc2V0dGluZyBhcyBpdCBtYXkgc2xvdyB0aGUgc2NyaXB0IGRvd24gZm9yXG4gKiBwZW9wbGUgd2l0aCBzbG93IGNvbm5lY3Rpb25zLlxuICpcbiAqIFwiZXhwYW5kdGVtcGxhdGVzXCIgLSBpZiB0cnVlLCB0ZW1wbGF0ZXMgYW5kIHBhcnNlciBmdW5jdGlvbnMgd2lsbCBiZSBleHBhbmRlZCB3aGVuIGdldHRpbmcgcGFnZSB0ZXh0XG4gKiAodGVtcGxhdGVzIGluc2lkZSBvZiByZWYgdGFncyB3aWxsIG5vdCBiZSBleHBhbmRlZCkuIFRoaXMgd2lsbCBhbGxvdyByZWZlcmVuY2VzIGluc2lkZSBvZiB0ZW1wbGF0ZXMgb3JcbiAqIHJlZmVyZW5jZXMgdXNpbmcge3sjdGFnOnJlZn19IHRvIGJlIGxpc3RlZCBpbiB0aGUgbmFtZWQgcmVmcyBkaWFsb2cgYW5kIHNlYXJjaGVkIGJ5IGVycm9yIGNoZWNrcy5cbiAqIFRoaXMgbWF5IHNsb3cgbG9hZGluZyB0aGUgbmFtZWQgcmVmcyBhbmQgZXJyb3IgY2hlY2sgZGlhbG9ncy5cbiAqL1xuY29uc3QgcmVmVG9vbGJhckNvbmZpZyA9ICgpID0+IHtcblx0Y29uc3Qge0NpdGVUZW1wbGF0ZSwgQ2l0ZUVycm9yQ2hlY2t9ID0gd2luZG93O1xuXG5cdENpdGVUQi5PcHRpb25zID0ge1xuXHRcdCdkYXRlIGZvcm1hdCc6ICc8eWVhcj4tPHptb250aD4tPHpkYXRlPicsXG5cdFx0J2F1dG9kYXRlIGZpZWxkcyc6IFsnYWNjZXNzZGF0ZSddLFxuXHRcdG1vbnRoczogWycx5pyIJywgJzLmnIgnLCAnM+aciCcsICc05pyIJywgJzXmnIgnLCAnNuaciCcsICc35pyIJywgJzjmnIgnLCAnOeaciCcsICcxMOaciCcsICcxMeaciCcsICcxMuaciCddLFxuXHRcdG1vZGFsOiB0cnVlLFxuXHRcdGF1dG9wYXJzZTogdHJ1ZSxcblx0XHRleHBhbmR0ZW1wbGF0ZXM6IGZhbHNlLFxuXHR9O1xuXG5cdC8vIENpdGUgdGVtcGxhdGUgZGVmaW5pdGlvbnNcblx0bmV3IENpdGVUZW1wbGF0ZShcblx0XHQnY2l0ZSB3ZWInLFxuXHRcdCd3ZWInLFxuXHRcdFtcblx0XHRcdC8vIEJhc2ljIGZpZWxkc1xuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2F1dGhvcjxOPicsXG5cdFx0XHRcdGluY3JlbWVudF9ncm91cDogJ2F1dGhvcl9hbHQnLFxuXHRcdFx0XHRpbmNyZW1lbnRfYnV0dG9uOiB0cnVlLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICd0aXRsZScsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ3RpdGxlJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAndXJsJyxcblx0XHRcdFx0YXV0b2ZpbGxpZDogJ3VybCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3dlYnNpdGUnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdqb3VybmFsJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAncHVibGlzaGVyJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAncHVibGlzaGVyJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnYWNjZXNzZGF0ZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3JlZicsXG5cdFx0XHRcdHRvb2x0aXA6ICdjaXRlLXJlZi10b29sdGlwJyxcblx0XHRcdH0sXG5cdFx0XSxcblx0XHRbXG5cdFx0XHQvLyBFeHBhbmRlZCBmaWVsZHNcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdhdXRob3JsaW5rPE4+Jyxcblx0XHRcdFx0dG9vbHRpcDogJ2NpdGUtYXV0aG9ybGluay10b29sdGlwJyxcblx0XHRcdFx0aW5jcmVtZW50X2dyb3VwOiAnYXV0aG9ybGluaycsXG5cdFx0XHRcdGluY3JlbWVudF9idXR0b246IHRydWUsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2xhc3Q8Tj4nLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdsYXN0LWluY3InLFxuXHRcdFx0XHRpbmNyZW1lbnRfZ3JvdXA6ICdhdXRob3InLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdmaXJzdDxOPicsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2ZpcnN0LWluY3InLFxuXHRcdFx0XHRpbmNyZW1lbnRfZ3JvdXA6ICdhdXRob3InLFxuXHRcdFx0XHRpbmNyZW1lbnRfYnV0dG9uOiB0cnVlLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdsb2NhdGlvbicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3BhZ2UnLFxuXHRcdFx0XHR0b29sdGlwOiAnY2l0ZS1wYWdlLXRvb2x0aXAnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdwYWdlcycsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ3BhZ2VzJyxcblx0XHRcdFx0dG9vbHRpcDogJ2NpdGUtcGFnZXMtdG9vbHRpcCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2xhbmd1YWdlJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnbGFuZ3VhZ2UnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdmb3JtYXQnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdkb2knLFxuXHRcdFx0XHRhdXRvZmlsbGlkOiAnZG9pJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnZG9pJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnZGF0ZScsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2RhdGUnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdxdW90ZScsXG5cdFx0XHR9LFxuXHRcdF1cblx0KTtcblx0bmV3IENpdGVUZW1wbGF0ZShcblx0XHQnY2l0ZSBuZXdzJyxcblx0XHQnbmV3cycsXG5cdFx0W1xuXHRcdFx0Ly8gQmFzaWMgZmllbGRzXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnYXV0aG9yPE4+Jyxcblx0XHRcdFx0aW5jcmVtZW50X2dyb3VwOiAnYXV0aG9yX2FsdCcsXG5cdFx0XHRcdGluY3JlbWVudF9idXR0b246IHRydWUsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3RpdGxlJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAndGl0bGUnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICd1cmwnLFxuXHRcdFx0XHRhdXRvZmlsbGlkOiAndXJsJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnYWNjZXNzZGF0ZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3dvcmsnLFxuXHRcdFx0XHR0b29sdGlwOiAnY2l0ZS13b3JrLXRvb2x0aXAnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdqb3VybmFsJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnYWdlbmN5Jyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnaXNzdWUnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdwdWJsaXNoZXInLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdwdWJsaXNoZXInLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdkYXRlJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnZGF0ZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3JlZicsXG5cdFx0XHRcdHRvb2x0aXA6ICdjaXRlLXJlZi10b29sdGlwJyxcblx0XHRcdH0sXG5cdFx0XSxcblx0XHRbXG5cdFx0XHQvLyBFeHBhbmRlZCBmaWVsZHNcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdhdXRob3JsaW5rPE4+Jyxcblx0XHRcdFx0dG9vbHRpcDogJ2NpdGUtYXV0aG9ybGluay10b29sdGlwJyxcblx0XHRcdFx0aW5jcmVtZW50X2dyb3VwOiAnYXV0aG9ybGluaycsXG5cdFx0XHRcdGluY3JlbWVudF9idXR0b246IHRydWUsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2xhc3Q8Tj4nLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdsYXN0LWluY3InLFxuXHRcdFx0XHRpbmNyZW1lbnRfZ3JvdXA6ICdhdXRob3InLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdmaXJzdDxOPicsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2ZpcnN0LWluY3InLFxuXHRcdFx0XHRpbmNyZW1lbnRfZ3JvdXA6ICdhdXRob3InLFxuXHRcdFx0XHRpbmNyZW1lbnRfYnV0dG9uOiB0cnVlLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdsb2NhdGlvbicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3BhZ2UnLFxuXHRcdFx0XHR0b29sdGlwOiAnY2l0ZS1wYWdlLXRvb2x0aXAnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdwYWdlcycsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ3BhZ2VzJyxcblx0XHRcdFx0dG9vbHRpcDogJ2NpdGUtcGFnZXMtdG9vbHRpcCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2xhbmd1YWdlJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnbGFuZ3VhZ2UnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdmb3JtYXQnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdkb2knLFxuXHRcdFx0XHRhdXRvZmlsbGlkOiAnZG9pJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnZG9pJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAncXVvdGUnLFxuXHRcdFx0fSxcblx0XHRdXG5cdCk7XG5cdG5ldyBDaXRlVGVtcGxhdGUoXG5cdFx0J2NpdGUgYm9vaycsXG5cdFx0J2Jvb2snLFxuXHRcdFtcblx0XHRcdC8vIEJhc2ljIGZpZWxkc1xuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2F1dGhvcjxOPicsXG5cdFx0XHRcdGluY3JlbWVudF9ncm91cDogJ2F1dGhvcl9hbHQnLFxuXHRcdFx0XHRpbmNyZW1lbnRfYnV0dG9uOiB0cnVlLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdjb2F1dGhvcnMnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdjb2F1dGhvcnMnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdlZGl0b3InLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICd0aXRsZScsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ3RpdGxlJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnZGF0ZScsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ3llYXInLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdwdWJsaXNoZXInLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdwdWJsaXNoZXInLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdsb2NhdGlvbicsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2xvY2F0aW9uJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnaXNibicsXG5cdFx0XHRcdC8qIFwiYXV0b2ZpbGxpZFwiOlwiaXNiblwiLCAqLyBhdXRvZmlsbHByb3A6ICdpc2JuJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAncGFnZScsXG5cdFx0XHRcdHRvb2x0aXA6ICdjaXRlLXBhZ2UtdG9vbHRpcCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3BhZ2VzJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAncGFnZXMnLFxuXHRcdFx0XHR0b29sdGlwOiAnY2l0ZS1wYWdlcy10b29sdGlwJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnZWRpdGlvbicsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2VkaXRpb24nLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICd1cmwnLFxuXHRcdFx0XHRhdXRvZmlsbGlkOiAndXJsJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnYWNjZXNzZGF0ZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3JlZicsXG5cdFx0XHRcdHRvb2x0aXA6ICdjaXRlLXJlZi10b29sdGlwJyxcblx0XHRcdH0sXG5cdFx0XSxcblx0XHRbXG5cdFx0XHQvLyBFeHBhbmRlZCBmaWVsZHNcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdsYXN0PE4+Jyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnbGFzdC1pbmNyJyxcblx0XHRcdFx0aW5jcmVtZW50X2dyb3VwOiAnYXV0aG9yJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnZmlyc3Q8Tj4nLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdmaXJzdC1pbmNyJyxcblx0XHRcdFx0aW5jcmVtZW50X2dyb3VwOiAnYXV0aG9yJyxcblx0XHRcdFx0aW5jcmVtZW50X2J1dHRvbjogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnYXV0aG9ybGluazxOPicsXG5cdFx0XHRcdHRvb2x0aXA6ICdjaXRlLWF1dGhvcmxpbmstdG9vbHRpcCcsXG5cdFx0XHRcdGluY3JlbWVudF9ncm91cDogJ2F1dGhvcmxpbmsnLFxuXHRcdFx0XHRpbmNyZW1lbnRfYnV0dG9uOiB0cnVlLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdlZGl0b3I8Tj4tbGFzdCcsXG5cdFx0XHRcdGluY3JlbWVudF9ncm91cDogJ2VkaXRvcicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2VkaXRvcjxOPi1maXJzdCcsXG5cdFx0XHRcdGluY3JlbWVudF9ncm91cDogJ2VkaXRvcicsXG5cdFx0XHRcdGluY3JlbWVudF9idXR0b246IHRydWUsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2VkaXRvcjxOPi1saW5rJyxcblx0XHRcdFx0aW5jcmVtZW50X2dyb3VwOiAnZWRpdG9ybGluaycsXG5cdFx0XHRcdGluY3JlbWVudF9idXR0b246IHRydWUsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2xhbmd1YWdlJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnbGFuZ3VhZ2UnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdmb3JtYXQnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdjaGFwdGVyJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnY2hhcHRlcicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3F1b3RlJyxcblx0XHRcdH0sXG5cdFx0XVxuXHQpO1xuXHRuZXcgQ2l0ZVRlbXBsYXRlKFxuXHRcdCdjaXRlIGpvdXJuYWwnLFxuXHRcdCdqb3VybmFsJyxcblx0XHRbXG5cdFx0XHQvLyBCYXNpYyBmaWVsZHNcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdhdXRob3I8Tj4nLFxuXHRcdFx0XHRpbmNyZW1lbnRfZ3JvdXA6ICdhdXRob3JfYWx0Jyxcblx0XHRcdFx0aW5jcmVtZW50X2J1dHRvbjogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnY29hdXRob3JzJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnY29hdXRob3JzJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAndGl0bGUnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICd0aXRsZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2pvdXJuYWwnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdqb3VybmFsJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnZGF0ZScsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2RhdGUnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICd2b2x1bWUnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICd2b2x1bWUnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdpc3N1ZScsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2lzc3VlJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAncGFnZScsXG5cdFx0XHRcdHRvb2x0aXA6ICdjaXRlLXBhZ2UtdG9vbHRpcCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3BhZ2VzJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAncGFnZXMnLFxuXHRcdFx0XHR0b29sdGlwOiAnY2l0ZS1wYWdlcy10b29sdGlwJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnZG9pJyxcblx0XHRcdFx0YXV0b2ZpbGxpZDogJ2RvaScsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2RvaScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3BtaWQnLFxuXHRcdFx0XHRhdXRvZmlsbGlkOiAncG1pZCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3VybCcsXG5cdFx0XHRcdGF1dG9maWxsaWQ6ICd1cmwnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdhY2Nlc3NkYXRlJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAncmVmJyxcblx0XHRcdFx0dG9vbHRpcDogJ2NpdGUtcmVmLXRvb2x0aXAnLFxuXHRcdFx0fSxcblx0XHRdLFxuXHRcdFtcblx0XHRcdC8vIEV4cGFuZGVkIGZpZWxkc1xuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2F1dGhvcmxpbms8Tj4nLFxuXHRcdFx0XHR0b29sdGlwOiAnY2l0ZS1hdXRob3JsaW5rLXRvb2x0aXAnLFxuXHRcdFx0XHRpbmNyZW1lbnRfZ3JvdXA6ICdhdXRob3JsaW5rJyxcblx0XHRcdFx0aW5jcmVtZW50X2J1dHRvbjogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnbGFzdDxOPicsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2xhc3QtaW5jcicsXG5cdFx0XHRcdGluY3JlbWVudF9ncm91cDogJ2F1dGhvcicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2ZpcnN0PE4+Jyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnZmlyc3QtaW5jcicsXG5cdFx0XHRcdGluY3JlbWVudF9ncm91cDogJ2F1dGhvcicsXG5cdFx0XHRcdGluY3JlbWVudF9idXR0b246IHRydWUsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2VkaXRvcjxOPi1sYXN0Jyxcblx0XHRcdFx0aW5jcmVtZW50X2dyb3VwOiAnZWRpdG9yJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnZWRpdG9yPE4+LWZpcnN0Jyxcblx0XHRcdFx0aW5jcmVtZW50X2dyb3VwOiAnZWRpdG9yJyxcblx0XHRcdFx0aW5jcmVtZW50X2J1dHRvbjogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnZWRpdG9yPE4+LWxpbmsnLFxuXHRcdFx0XHRpbmNyZW1lbnRfZ3JvdXA6ICdlZGl0b3JsaW5rJyxcblx0XHRcdFx0aW5jcmVtZW50X2J1dHRvbjogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnc2VyaWVzJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnYXQnLFxuXHRcdFx0XHR0b29sdGlwOiAnY2l0ZS1hdC10b29sdGlwJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAndHJhbnMtdGl0bGUnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdwdWJsaXNoZXInLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdwdWJsaXNoZXInLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdsb2NhdGlvbicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2xhbmd1YWdlJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnbGFuZ3VhZ2UnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdmb3JtYXQnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdpc3NuJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnaXNzbicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3BtYycsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ29jbGMnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdiaWJjb2RlJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnaWQnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdxdW90ZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3Bvc3RzY3JpcHQnLFxuXHRcdFx0XHR0b29sdGlwOiAnY2l0ZS1wb3N0c2NyaXB0LXRvb2x0aXAnLFxuXHRcdFx0fSxcblx0XHRdXG5cdCk7XG5cdG5ldyBDaXRlVGVtcGxhdGUoXG5cdFx0J2NpdGUgY29uZmVyZW5jZScsXG5cdFx0J2NvbmZlcmVuY2UnLFxuXHRcdFtcblx0XHRcdC8vIEJhc2ljIGZpZWxkc1xuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2F1dGhvcicsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2F1dGhvcjEnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdjb2F1dGhvcnMnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdjb2F1dGhvcnMnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICd0aXRsZScsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ3RpdGxlJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnY29uZmVyZW5jZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2NvbmZlcmVuY2V1cmwnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdib29rdGl0bGUnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdqb3VybmFsJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnZGF0ZScsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2RhdGUnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICd5ZWFyJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnbW9udGgnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICd2b2x1bWUnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICd2b2x1bWUnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdwdWJsaXNoZXInLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdwdWJsaXNoZXInLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdsb2NhdGlvbicsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2xvY2F0aW9uJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnaXNibicgLyogLCBcImF1dG9maWxsaWRcIjpcImlzYm5cIiAqLyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAncGFnZXMnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdkb2knLFxuXHRcdFx0XHRhdXRvZmlsbGlkOiAnZG9pJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnZG9pJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAncG1pZCcsXG5cdFx0XHRcdGF1dG9maWxsaWQ6ICdwbWlkJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAndXJsJyxcblx0XHRcdFx0YXV0b2ZpbGxpZDogJ3VybCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2FjY2Vzc2RhdGUnLFxuXHRcdFx0XHR0b29sdGlwOiAnY2l0ZS1hY2Nlc3NkYXRlLXRvb2x0aXAnLFxuXHRcdFx0fSxcblx0XHRdLFxuXHRcdFtcblx0XHRcdC8vIEV4cGFuZGVkIGZpZWxkc1xuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2xhc3QnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdsYXN0MScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2ZpcnN0Jyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnZmlyc3QxJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnYXV0aG9ybGluaycsXG5cdFx0XHRcdHRvb2x0aXA6ICdjaXRlLWF1dGhvcmxpbmstdG9vbHRpcCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2VkaXRvcicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ290aGVycycsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2VkaXRpb24nLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdlZGl0aW9uJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnbGFuZ3VhZ2UnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdsYW5ndWFnZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2Zvcm1hdCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2lzc24nLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdvY2xjJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnaWQnLFxuXHRcdFx0XHR0b29sdGlwOiAnY2l0ZS1pZC10b29sdGlwJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAncXVvdGUnLFxuXHRcdFx0fSxcblx0XHRdXG5cdCk7XG5cdG5ldyBDaXRlVGVtcGxhdGUoXG5cdFx0J2NpdGUgZW5jeWNsb3BlZGlhJyxcblx0XHQnZW5jeWNsb3BlZGlhJyxcblx0XHRbXG5cdFx0XHQvLyBCYXNpYyBmaWVsZHNcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdhdXRob3InLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdhdXRob3IxJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAndGl0bGUnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdlZGl0b3InLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdlbmN5Y2xvcGVkaWEnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICd0aXRsZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3ZvbHVtZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3llYXInLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICd5ZWFyJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAncHVibGlzaGVyJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAncHVibGlzaGVyJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnbG9jYXRpb24nLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdsb2NhdGlvbicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2lzYm4nIC8qICwgXCJhdXRvZmlsbGlkXCI6XCJpc2JuXCIgKi8sXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3BhZ2VzJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAndXJsJyxcblx0XHRcdH0sXG5cdFx0XSxcblx0XHRbXG5cdFx0XHQvLyBFeHBhbmRlZCBmaWVsZHNcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdsYXN0Jyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnbGFzdDEnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdmaXJzdCcsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2ZpcnN0MScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2F1dGhvcmxpbmsnLFxuXHRcdFx0XHR0b29sdGlwOiAnY2l0ZS1hdXRob3JsaW5rLXRvb2x0aXAnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdjb2F1dGhvcnMnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdjb2F1dGhvcnMnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdvdGhlcnMnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdlZGl0aW9uJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnZWRpdGlvbicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ29jbGMnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdpZCcsXG5cdFx0XHRcdHRvb2x0aXA6ICdjaXRlLWlkLXRvb2x0aXAnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdhY2Nlc3NkYXRlJyxcblx0XHRcdFx0dG9vbHRpcDogJ2NpdGUtYWNjZXNzZGF0ZS10b29sdGlwJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnbGFuZ3VhZ2UnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdsYW5ndWFnZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2Zvcm1hdCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2RhdGUnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdtb250aCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3F1b3RlJyxcblx0XHRcdH0sXG5cdFx0XVxuXHQpO1xuXG5cdC8vIENpdGUgZXJyb3IgY2hlY2sgZGVmaW5pdGlvbnNcblx0bmV3IENpdGVFcnJvckNoZWNrKHtcblx0XHR0eXBlOiAncmVmbGlzdCcsXG5cdFx0dGVzdG5hbWU6ICdzYW1lY29udGVudCcsXG5cdFx0ZGVzYzogJ2NpdGUtc2FtZWNvbnRlbnQtZGVzYycsXG5cdFx0ZnVuYzogKHJlZmxpc3QpID0+IHtcblx0XHRcdGNvbnN0IGVycm9ycyA9IFtdO1xuXHRcdFx0Y29uc3QgcmVmczIgPSBbXTtcblx0XHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiByZWZsaXN0KSB7XG5cdFx0XHRcdGlmIChlbGVtZW50LnNob3J0dGFnKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHJlZnMyLmluY2x1ZGVzKGVsZW1lbnQuY29udGVudCkpIHtcblx0XHRcdFx0XHRpZiAoZXJyb3JzLmluY2x1ZGVzKGVsZW1lbnQuY29udGVudCkpIHtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlcnJvcnMucHVzaChlbGVtZW50LmNvbnRlbnQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJlZnMyLnB1c2goZWxlbWVudC5jb250ZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcmV0ID0gW107XG5cdFx0XHRmb3IgKGNvbnN0IGVycm9yIG9mIGVycm9ycykge1xuXHRcdFx0XHRyZXQucHVzaCh7XG5cdFx0XHRcdFx0bXNnOiAnY2l0ZS1zYW1lY29udGVudC1lcnJvcicsXG5cdFx0XHRcdFx0ZXJyOiBlcnJvcixcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmV0O1xuXHRcdH0sXG5cdH0pO1xuXHRuZXcgQ2l0ZUVycm9yQ2hlY2soe1xuXHRcdHR5cGU6ICdyZWZsaXN0Jyxcblx0XHR0ZXN0bmFtZTogJ3JlcGVhdGVkJyxcblx0XHRkZXNjOiAnY2l0ZS1yZXBlYXRlZC1kZXNjJyxcblx0XHRmdW5jOiAocmVmbGlzdCkgPT4ge1xuXHRcdFx0Y29uc3QgZXJyb3JzID0gW107XG5cdFx0XHRjb25zdCByZWZzMiA9IFtdO1xuXHRcdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mIHJlZmxpc3QpIHtcblx0XHRcdFx0aWYgKGVsZW1lbnQuc2hvcnR0YWcgfHwgIWVsZW1lbnQucmVmbmFtZSkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChyZWZzMi5pbmNsdWRlcyhlbGVtZW50LnJlZm5hbWUpKSB7XG5cdFx0XHRcdFx0aWYgKGVycm9ycy5pbmNsdWRlcyhlbGVtZW50LnJlZm5hbWUpKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZXJyb3JzLnB1c2goZWxlbWVudC5yZWZuYW1lKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZWZzMi5wdXNoKGVsZW1lbnQucmVmbmFtZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGNvbnN0IHJldCA9IFtdO1xuXHRcdFx0Zm9yIChjb25zdCBlcnJvciBvZiBlcnJvcnMpIHtcblx0XHRcdFx0cmV0LnB1c2goe1xuXHRcdFx0XHRcdG1zZzogJ2NpdGUtcmVwZWF0ZWQtZXJyb3InLFxuXHRcdFx0XHRcdGVycjogZXJyb3IsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJldDtcblx0XHR9LFxuXHR9KTtcblx0bmV3IENpdGVFcnJvckNoZWNrKHtcblx0XHR0eXBlOiAncmVmbGlzdCcsXG5cdFx0dGVzdG5hbWU6ICd1bmRlZmluZWQnLFxuXHRcdGRlc2M6ICdjaXRlLXVuZGVmaW5lZC1kZXNjJyxcblx0XHRmdW5jOiAocmVmbGlzdCkgPT4ge1xuXHRcdFx0Y29uc3QgZXJyb3JzID0gW107XG5cdFx0XHRjb25zdCBsb25ncmVmcyA9IFtdO1xuXHRcdFx0Zm9yIChjb25zdCB2YWx1ZSBvZiBPYmplY3QudmFsdWVzKHJlZmxpc3QpKSB7XG5cdFx0XHRcdGNvbnN0IHtyZWZuYW1lLCBzaG9ydHRhZ30gPSB2YWx1ZTtcblx0XHRcdFx0aWYgKCFzaG9ydHRhZyAmJiByZWZuYW1lKSB7XG5cdFx0XHRcdFx0bG9uZ3JlZnMucHVzaCh2YWx1ZS5yZWZuYW1lKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoc2hvcnR0YWcgJiYgZXJyb3JzLmluY2x1ZGVzKHJlZm5hbWUpID09PSAtMSAmJiAhbG9uZ3JlZnMuaW5jbHVkZXMocmVmbmFtZSkpIHtcblx0XHRcdFx0XHRlcnJvcnMucHVzaChyZWZuYW1lKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcmV0ID0gW107XG5cdFx0XHRmb3IgKGNvbnN0IGVycm9yIG9mIGVycm9ycykge1xuXHRcdFx0XHRyZXQucHVzaCh7XG5cdFx0XHRcdFx0bXNnOiAnY2l0ZS11bmRlZmluZWQtZXJyb3InLFxuXHRcdFx0XHRcdGVycjogZXJyb3IsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJldDtcblx0XHR9LFxuXHR9KTtcblxuXHQvLyBleGVjdXRlIG1haW4gZnVuY3Rpb25cblx0Q2l0ZVRCLmluaXQoKTtcbn07XG5cbmV4cG9ydCB7cmVmVG9vbGJhckNvbmZpZ307XG4iLCAiLyogZ2xvYmFsIENpdGVUQiAqL1xuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50ICovXG4vLyBAdHMtbm9jaGVja1xuaW1wb3J0IHthcGl9IGZyb20gJy4vdXRpbC9hcGknO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL3V0aWwvZ2V0TWVzc2FnZSc7XG5pbXBvcnQge3JlZlRvb2xiYXJDb25maWd9IGZyb20gJy4vUmVmVG9vbGJhckNvbmZpZyc7XG5cbi8vIFRPRE86IG1ha2UgYXV0b2RhdGUgYW4gb3B0aW9uIGluIHRoZSBDaXRlVGVtcGxhdGUgb2JqZWN0LCBub3QgYSBwcmVmZXJlbmNlXG5jb25zdCByZWZUb29sYmFyMiA9ICgkYm9keSkgPT4ge1xuXHQvLyBEZWZhdWx0IG9wdGlvbnMsIHRoZXNlIG1haW5seSBleGlzdCBzbyB0aGUgc2NyaXB0IHdvbid0IGJyZWFrIGlmIGEgbmV3IG9wdGlvbiBpcyBhZGRlZFxuXHRDaXRlVEIuRGVmYXVsdE9wdGlvbnMgPSB7XG5cdFx0J2RhdGUgZm9ybWF0JzogJzx5ZWFyPi08em1vbnRoPi08emRhdGU+Jyxcblx0XHQnYXV0b2RhdGUgZmllbGRzJzogW10sXG5cdFx0bW9udGhzOiBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ10sXG5cdFx0bW9kYWw6IHRydWUsXG5cdFx0YXV0b3BhcnNlOiBmYWxzZSxcblx0XHRleHBhbmR0ZW1wbGF0ZXM6IGZhbHNlLFxuXHR9O1xuXG5cdC8vIEdldCBhbiBvcHRpb24gLSB1c2VyIHNldHRpbmdzIG92ZXJyaWRlIGdsb2JhbCB3aGljaCBvdmVycmlkZSBkZWZhdWx0c1xuXHRDaXRlVEIuZ2V0T3B0aW9uID0gKG9wdCkgPT4ge1xuXHRcdGlmIChDaXRlVEIuVXNlck9wdGlvbnNbb3B0XSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gQ2l0ZVRCLlVzZXJPcHRpb25zW29wdF07XG5cdFx0fSBlbHNlIGlmIChDaXRlVEIuT3B0aW9uc1tvcHRdICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiBDaXRlVEIuT3B0aW9uc1tvcHRdO1xuXHRcdH1cblx0XHRyZXR1cm4gQ2l0ZVRCLkRlZmF1bHRPcHRpb25zW29wdF07XG5cdH07XG5cblx0Q2l0ZVRCLmluaXQgPSAoKSA9PiB7XG5cdFx0LyogTWFpbiBzdHVmZiwgYnVpbGQgdGhlIGFjdHVhbCB0b29sYmFyIHN0cnVjdHVyZVxuXHRcdCAqIDEuIGdldCB0aGUgdGVtcGxhdGUgbGlzdCwgbWFrZSB0aGUgZHJvcGRvd24gbGlzdCBhbmQgc2V0IHVwIHRoZSB0ZW1wbGF0ZSBkaWFsb2cgYm94ZXNcblx0XHQgKiAyLiBhY3R1YWxseSBidWlsZCB0aGUgdG9vbGJhcjpcblx0XHQgKiAtIEEgc2VjdGlvbiBmb3IgY2l0ZXNcblx0XHQgKiAtLSBkcm9wZG93biBmb3IgdGhlIHRlbXBsYXRlcyAocHJldmlvdXNseSBkZWZpbmVkKVxuXHRcdCAqIC0tIGJ1dHRvbiBmb3IgbmFtZWQgcmVmcyB3aXRoIGEgZGlhbG9nIGJveFxuXHRcdCAqIC0tIGJ1dHRvbiBmb3IgZXJyb3JjaGVja1xuXHRcdCAqIDMuIGFkZCB0aGUgd2hvbGUgdGhpbmcgdG8gdGhlIG1haW4gdG9vbGJhclxuXHRcdCAqL1xuXG5cdFx0JChkb2N1bWVudCkuZmluZCgnaGVhZCcpLnRyaWdnZXIoJ3JlZnRvb2xiYXJiYXNlJyk7XG5cdFx0Y29uc3QgJHRhcmdldCA9ICRib2R5LmZpbmQoJ3RleHRhcmVhW25hbWU9d3BUZXh0Ym94MV0nKTtcblx0XHRjb25zdCB0ZW1saXN0ID0ge307XG5cdFx0Zm9yIChjb25zdCB0IGluIENpdGVUQi5UZW1wbGF0ZXMpIHtcblx0XHRcdGlmIChPYmplY3QuaGFzT3duKENpdGVUQi5UZW1wbGF0ZXMsIHQpKSB7XG5cdFx0XHRcdGNvbnN0IHRlbSA9IENpdGVUQi5UZW1wbGF0ZXNbdF07XG5cdFx0XHRcdGNvbnN0IHNmb3JtID0gQ2l0ZVRCLmVzY1N0cih0ZW0uc2hvcnRmb3JtKTtcblx0XHRcdFx0Y29uc3QgYWN0aW9ub2JqID0ge1xuXHRcdFx0XHRcdHR5cGU6ICdkaWFsb2cnLFxuXHRcdFx0XHRcdG1vZHVsZTogYGNpdGUtZGlhbG9nLSR7c2Zvcm19YCxcblx0XHRcdFx0fTtcblx0XHRcdFx0Y29uc3QgZGlhbG9nb2JqID0ge307XG5cdFx0XHRcdGRpYWxvZ29ialtgY2l0ZS1kaWFsb2ctJHtzZm9ybX1gXSA9IHtcblx0XHRcdFx0XHRyZXNpemVtZTogZmFsc2UsXG5cdFx0XHRcdFx0dGl0bGVNc2c6IGBjaXRlLWRpYWxvZy0ke3Nmb3JtfWAsXG5cdFx0XHRcdFx0aWQ6IGBjaXRldG9vbGJhci0ke3Nmb3JtfWAsXG5cdFx0XHRcdFx0aW5pdDogKCkgPT4ge30sXG5cdFx0XHRcdFx0aHRtbDogdGVtLmdldEluaXRpYWwoKSxcblx0XHRcdFx0XHRkaWFsb2c6IHtcblx0XHRcdFx0XHRcdHdpZHRoOiBNYXRoLnJvdW5kKCQod2luZG93KS53aWR0aCgpID8/IDAgKiAwLjgpLFxuXHRcdFx0XHRcdFx0b3BlbigpIHtcblx0XHRcdFx0XHRcdFx0JCh0aGlzKS5odG1sKENpdGVUQi5nZXRPcGVuVGVtcGxhdGUoKS5nZXRGb3JtKCkpO1xuXHRcdFx0XHRcdFx0XHQvKiogQHBhcmFtIHtqUXVlcnkuRXZlbnR9IGUgKi9cblx0XHRcdFx0XHRcdFx0JGJvZHkuZmluZCgnLmNpdGUtcHJldi1wYXJzZScpLm9uKCdjbGljaycsIChlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRcdENpdGVUQi5wcmV2UGFyc2VDbGljaygpO1xuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRidXR0b25zOiB7XG5cdFx0XHRcdFx0XHRcdCdjaXRlLWZvcm0tc3VibWl0JygpIHtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCByZWYgPSBDaXRlVEIuZ2V0UmVmKGZhbHNlLCB0cnVlKTtcblx0XHRcdFx0XHRcdFx0XHQkKHRoaXMpLmRpYWxvZygnY2xvc2UnKTtcblx0XHRcdFx0XHRcdFx0XHQkLndpa2lFZGl0b3IubW9kdWxlcy50b29sYmFyLmZuLmRvQWN0aW9uKFxuXHRcdFx0XHRcdFx0XHRcdFx0JCh0aGlzKS5kYXRhKCdjb250ZXh0JyksXG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdlbmNhcHN1bGF0ZScsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwb3N0OiByZWYsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0JCh0aGlzKVxuXHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdCdjaXRlLWZvcm0tc2hvd2hpZGUnOiBDaXRlVEIuc2hvd0hpZGVFeHRyYSxcblx0XHRcdFx0XHRcdFx0J2NpdGUtcmVmcHJldmlldycoKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgcmVmID0gQ2l0ZVRCLmdldFJlZihmYWxzZSwgZmFsc2UpO1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHRlbXBsYXRlID0gQ2l0ZVRCLmdldE9wZW5UZW1wbGF0ZSgpO1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IGRpdiA9ICQoYCNjaXRldG9vbGJhci0ke0NpdGVUQi5lc2NTdHIodGVtcGxhdGUuc2hvcnRmb3JtKX1gKTtcblx0XHRcdFx0XHRcdFx0XHRkaXYuZmluZCgnLmNpdGUtcHJldmlldy1sYWJlbCcpLnNob3coKTtcblx0XHRcdFx0XHRcdFx0XHRkaXYuZmluZCgnLmNpdGUtcmVmLXByZXZpZXcnKS50ZXh0KHJlZikuc2hvdygpO1xuXHRcdFx0XHRcdFx0XHRcdGlmIChDaXRlVEIuZ2V0T3B0aW9uKCdhdXRvcGFyc2UnKSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0Q2l0ZVRCLnByZXZQYXJzZUNsaWNrKCk7XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdGRpdi5maW5kKCcuY2l0ZS1wcmV2LXBhcnNlJykuc2hvdygpO1xuXHRcdFx0XHRcdFx0XHRcdFx0ZGl2LmZpbmQoJy5jaXRlLXByZXYtcGFyc2VkLWxhYmVsJykuaGlkZSgpO1xuXHRcdFx0XHRcdFx0XHRcdFx0ZGl2LmZpbmQoJy5jaXRlLXByZXZpZXctcGFyc2VkJykuaHRtbCgnJyk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHQnd2lraWVkaXRvci10b29sYmFyLXRvb2wtbGluay1jYW5jZWwnKCkge1xuXHRcdFx0XHRcdFx0XHRcdCQodGhpcykuZGlhbG9nKCdjbG9zZScpO1xuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHQnY2l0ZS1mb3JtLXJlc2V0JygpIHtcblx0XHRcdFx0XHRcdFx0XHRDaXRlVEIucmVzZXRGb3JtKCk7XG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH07XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0JHRhcmdldC53aWtpRWRpdG9yKCdhZGREaWFsb2cnLCBkaWFsb2dvYmopO1xuXHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHQvKiBUeXBlRXJyb3I6IHJhbmdlIGlzIG51bGwgKi9cblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBpZiAoIUNpdGVUQi5nZXRPcHRpb24oJ21vZGFsJykpIHtcblx0XHRcdFx0Ly8gXHQkYm9keS5maW5kKGAjY2l0ZXRvb2xiYXItJHtzZm9ybX1gKS5kaWFsb2coJ29wdGlvbicsICdtb2RhbCcsIGZhbHNlKTtcblx0XHRcdFx0Ly8gfVxuXHRcdFx0XHR0ZW1saXN0W3Nmb3JtXSA9IHtcblx0XHRcdFx0XHRsYWJlbDogdGVtLnRlbXBsYXRlbmFtZSxcblx0XHRcdFx0XHRhY3Rpb246IGFjdGlvbm9iaixcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjb25zdCByZWZzZWN0aW9uID0ge1xuXHRcdFx0c2VjdGlvbnM6IHtcblx0XHRcdFx0Y2l0ZXM6IHtcblx0XHRcdFx0XHR0eXBlOiAndG9vbGJhcicsXG5cdFx0XHRcdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ2NpdGUtc2VjdGlvbi1sYWJlbCcpLFxuXHRcdFx0XHRcdGdyb3Vwczoge1xuXHRcdFx0XHRcdFx0dGVtcGxhdGU6IHtcblx0XHRcdFx0XHRcdFx0dG9vbHM6IHtcblx0XHRcdFx0XHRcdFx0XHR0ZW1wbGF0ZToge1xuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogJ3NlbGVjdCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnY2l0ZS10ZW1wbGF0ZS1saXN0JyksXG5cdFx0XHRcdFx0XHRcdFx0XHRsaXN0OiB0ZW1saXN0LFxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0bmFtZWRyZWZzOiB7XG5cdFx0XHRcdFx0XHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdjaXRlLW5hbWVkLXJlZnMtbGFiZWwnKSxcblx0XHRcdFx0XHRcdFx0dG9vbHM6IHtcblx0XHRcdFx0XHRcdFx0XHRucmVmczoge1xuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogJ2J1dHRvbicsXG5cdFx0XHRcdFx0XHRcdFx0XHRhY3Rpb246IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogJ2RpYWxvZycsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZTogJ2NpdGUtdG9vbGJhci1uYW1lZHJlZnMnLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdGljb246ICdodHRwczovL3R1Lnpob25nd2VuLndpa2kvaW1hZ2VzL3FpdXdlbmJhaWtlL3poL3RodW1iL2IvYmUvTnV2b2xhX2NsaXBib2FyZF9saW5lZC5zdmcvMjJweC1OdXZvbGFfY2xpcGJvYXJkX2xpbmVkLnN2Zy5wbmcnLFxuXHRcdFx0XHRcdFx0XHRcdFx0c2VjdGlvbjogJ2NpdGVzJyxcblx0XHRcdFx0XHRcdFx0XHRcdGdyb3VwOiAnbmFtZWRyZWZzJyxcblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdjaXRlLW5hbWVkLXJlZnMtYnV0dG9uJyksXG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRlcnJvcmNoZWNrOiB7XG5cdFx0XHRcdFx0XHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdjaXRlLWVycm9yY2hlY2stbGFiZWwnKSxcblx0XHRcdFx0XHRcdFx0dG9vbHM6IHtcblx0XHRcdFx0XHRcdFx0XHRlY2hlY2s6IHtcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdidXR0b24nLFxuXHRcdFx0XHRcdFx0XHRcdFx0YWN0aW9uOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdkaWFsb2cnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGU6ICdjaXRlLXRvb2xiYXItZXJyb3JjaGVjaycsXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0aWNvbjogJ2h0dHBzOi8vdHUuemhvbmd3ZW4ud2lraS9pbWFnZXMvcWl1d2VuYmFpa2UvemgvdGh1bWIvYS9hMy9OdXZvbGFfYXBwc19rb3JnYW5pemVyLU5PLnBuZy8yMnB4LU51dm9sYV9hcHBzX2tvcmdhbml6ZXItTk8ucG5nJyxcblx0XHRcdFx0XHRcdFx0XHRcdHNlY3Rpb246ICdjaXRlcycsXG5cdFx0XHRcdFx0XHRcdFx0XHRncm91cDogJ2Vycm9yY2hlY2snLFxuXHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6IGdldE1lc3NhZ2UoJ2NpdGUtZXJyb3JjaGVjay1idXR0b24nKSxcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHR9O1xuXG5cdFx0Y29uc3QgZGVmYXVsdGRpYWxvZ3MgPSB7XG5cdFx0XHQnY2l0ZS10b29sYmFyLWVycm9yY2hlY2snOiB7XG5cdFx0XHRcdHRpdGxlTXNnOiAnY2l0ZS1lcnJvcmNoZWNrLWxhYmVsJyxcblx0XHRcdFx0aWQ6ICdjaXRldG9vbGJhci1lcnJvcmNoZWNrJyxcblx0XHRcdFx0cmVzaXplbWU6IGZhbHNlLFxuXHRcdFx0XHRpbml0OiAoKSA9PiB7fSxcblx0XHRcdFx0aHRtbDogYDxkaXYgaWQ9XCJjaXRlLW5hbWVkcmVmLWxvYWRpbmdcIj48aW1nIHNyYz1cImh0dHBzOi8vdHUuemhvbmd3ZW4ud2lraS9pbWFnZXMvcWl1d2VuYmFpa2UvemgvZC9kZS9BamF4LWxvYWRlci5naWZcIiAvPiZuYnNwOyR7Z2V0TWVzc2FnZShcblx0XHRcdFx0XHQnY2l0ZS1sb2FkaW5nJ1xuXHRcdFx0XHQpfTwvZGl2PmAsXG5cdFx0XHRcdGRpYWxvZzoge1xuXHRcdFx0XHRcdHdpZHRoOiBNYXRoLnJvdW5kKCQod2luZG93KS53aWR0aCgpID8/IDAgKiAwLjgpLFxuXHRcdFx0XHRcdG9wZW4oKSB7XG5cdFx0XHRcdFx0XHRDaXRlVEIubG9hZFJlZnMoKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGJ1dHRvbnM6IHtcblx0XHRcdFx0XHRcdCdjaXRlLWVycm9yY2hlY2stc3VibWl0JygpIHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgZXJyb3JjaGVja3MgPSAkYm9keS5maW5kKCdpbnB1dFtuYW1lPWNpdGUtZXJyLXRlc3RdOmNoZWNrZWQnKTtcblx0XHRcdFx0XHRcdFx0bGV0IGVycm9ycyA9IFtdO1xuXHRcdFx0XHRcdFx0XHRmb3IgKGNvbnN0IGVycm9yY2hlY2sgb2YgZXJyb3JjaGVja3MpIHtcblx0XHRcdFx0XHRcdFx0XHRlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5DaXRlVEIuRXJyb3JDaGVja3NbJChlcnJvcmNoZWNrKS52YWwoKV0ucnVuKCldO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdENpdGVUQi5kaXNwbGF5RXJyb3JzKGVycm9ycyk7XG5cdFx0XHRcdFx0XHRcdCQodGhpcykuZGlhbG9nKCdjbG9zZScpO1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdCd3aWtpZWRpdG9yLXRvb2xiYXItdG9vbC1saW5rLWNhbmNlbCcoKSB7XG5cdFx0XHRcdFx0XHRcdCQodGhpcykuZGlhbG9nKCdjbG9zZScpO1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdCdjaXRlLXRvb2xiYXItbmFtZWRyZWZzJzoge1xuXHRcdFx0XHR0aXRsZU1zZzogJ2NpdGUtbmFtZWQtcmVmcy10aXRsZScsXG5cdFx0XHRcdHJlc2l6ZW1lOiBmYWxzZSxcblx0XHRcdFx0aWQ6ICdjaXRldG9vbGJhci1uYW1lZHJlZnMnLFxuXHRcdFx0XHRodG1sOiBgPGRpdiBpZD1cImNpdGUtbmFtZWRyZWYtbG9hZGluZ1wiPiA8aW1nIHNyYz1cImh0dHBzOi8vdHUuemhvbmd3ZW4ud2lraS9pbWFnZXMvcWl1d2VuYmFpa2UvemgvZC9kZS9BamF4LWxvYWRlci5naWZcIiAvPiAmbmJzcDske2dldE1lc3NhZ2UoXG5cdFx0XHRcdFx0J2NpdGUtbG9hZGluZydcblx0XHRcdFx0KX08L2Rpdj5gLFxuXHRcdFx0XHRpbml0OiAoKSA9PiB7fSxcblx0XHRcdFx0ZGlhbG9nOiB7XG5cdFx0XHRcdFx0d2lkdGg6IE1hdGgucm91bmQoJCh3aW5kb3cpLndpZHRoKCkgPz8gMCAqIDAuOCksXG5cdFx0XHRcdFx0b3BlbigpIHtcblx0XHRcdFx0XHRcdENpdGVUQi5sb2FkUmVmcygpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0YnV0dG9uczoge1xuXHRcdFx0XHRcdFx0J2NpdGUtZm9ybS1zdWJtaXQnKCkge1xuXHRcdFx0XHRcdFx0XHRjb25zdCByZWZuYW1lID0gJGJvZHkuZmluZCgnI2NpdGUtbmFtZWRyZWYtc2VsZWN0JykudmFsKCk7XG5cdFx0XHRcdFx0XHRcdGlmIChyZWZuYW1lID09PSAnJykge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQkKHRoaXMpLmRpYWxvZygnY2xvc2UnKTtcblx0XHRcdFx0XHRcdFx0JC53aWtpRWRpdG9yLm1vZHVsZXMudG9vbGJhci5mbi5kb0FjdGlvbihcblx0XHRcdFx0XHRcdFx0XHQkKHRoaXMpLmRhdGEoJ2NvbnRleHQnKSxcblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnZW5jYXBzdWxhdGUnLFxuXHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRwb3N0OiBDaXRlVEIuZ2V0TmFtZWRSZWYocmVmbmFtZSwgdHJ1ZSksXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0JCh0aGlzKVxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdCd3aWtpZWRpdG9yLXRvb2xiYXItdG9vbC1saW5rLWNhbmNlbCcoKSB7XG5cdFx0XHRcdFx0XHRcdCQodGhpcykuZGlhbG9nKCdjbG9zZScpO1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHR9O1xuXG5cdFx0dHJ5IHtcblx0XHRcdCR0YXJnZXQud2lraUVkaXRvcignYWRkRGlhbG9nJywgZGVmYXVsdGRpYWxvZ3MpO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0Ly8gZXJyb3Igb2NjdXJyZWQgc2V0dGluZyB1cCB3aWtpZWRpdG9yLlxuXHRcdH1cblx0XHQkYm9keS5maW5kKCcjY2l0ZXRvb2xiYXItbmFtZWRyZWZzJykub2ZmKCdkaWFsb2dvcGVuJyk7XG5cdFx0aWYgKCFDaXRlVEIuZ2V0T3B0aW9uKCdtb2RhbCcpKSB7XG5cdFx0XHQvLyAkYm9keS5maW5kKCcjY2l0ZXRvb2xiYXItbmFtZWRyZWZzJykuZGlhbG9nKCdvcHRpb24nLCAnbW9kYWwnLCBmYWxzZSk7XG5cdFx0XHQvLyAkYm9keS5maW5kKCcjY2l0ZXRvb2xiYXItZXJyb3JjaGVjaycpLmRpYWxvZygnb3B0aW9uJywgJ21vZGFsJywgZmFsc2UpO1xuXHRcdFx0bXcudXRpbC5hZGRDU1MoJy51aS13aWRnZXQtb3ZlcmxheXtkaXNwbGF5Om5vbmUgIWltcG9ydGFudH0nKTtcblx0XHR9XG5cdFx0dHJ5IHtcblx0XHRcdCR0YXJnZXQud2lraUVkaXRvcignYWRkVG9Ub29sYmFyJywgcmVmc2VjdGlvbik7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHQvLyBlcnJvciBvY2N1cnJlZCBzZXR0aW5nIHVwIHdpa2llZGl0b3IuXG5cdFx0fVxuXHR9O1xuXG5cdC8vIFNldHVwIHRoZSBtYWluIG9iamVjdFxuXHRDaXRlVEIubWFpblJlZkxpc3QgPSBbXTtcblx0Q2l0ZVRCLnJlZnNMb2FkZWQgPSBmYWxzZTtcblxuXHQvLyBSRUYgRlVOQ1RJT05TXG5cdC8vIEFjdHVhbGx5IGFzc2VtYmxlIGEgcmVmIGZyb20gdXNlciBpbnB1dFxuXHRDaXRlVEIuZ2V0UmVmID0gKGlubmVyb25seSwgZm9yaW5zZXJ0KSA9PiB7XG5cdFx0bGV0IGksIGosIGcsIGdyb3VwO1xuXHRcdGNvbnN0IHRlbXBsYXRlID0gQ2l0ZVRCLmdldE9wZW5UZW1wbGF0ZSgpO1xuXHRcdGNvbnN0IHt0ZW1wbGF0ZW5hbWV9ID0gdGVtcGxhdGU7XG5cdFx0bGV0IHJlcyA9ICcnO1xuXHRcdGNvbnN0IHJlZm9iaiA9IHtcblx0XHRcdHNob3J0dGFnOiBmYWxzZSxcblx0XHR9O1xuXHRcdGlmICghaW5uZXJvbmx5KSB7XG5cdFx0XHRncm91cCA9ICQoYCNjaXRlLSR7Q2l0ZVRCLmVzY1N0cih0ZW1wbGF0ZS5zaG9ydGZvcm0pfS1ncm91cGApLnZhbCgpO1xuXHRcdFx0bGV0IHJlZm5hbWUgPSAkKGAjY2l0ZS0ke0NpdGVUQi5lc2NTdHIodGVtcGxhdGUuc2hvcnRmb3JtKX0tbmFtZWApLnZhbCgpO1xuXHRcdFx0cmVzICs9ICc8cmVmJztcblx0XHRcdGlmIChyZWZuYW1lKSB7XG5cdFx0XHRcdHJlZm5hbWUgPSBTdHJpbmcocmVmbmFtZSkudHJpbSgpO1xuXHRcdFx0XHRyZXMgKz0gYCBuYW1lPSR7Q2l0ZVRCLmdldFF1b3RlZFN0cmluZyhyZWZuYW1lKX1gO1xuXHRcdFx0XHRyZWZvYmoucmVmbmFtZSA9IHJlZm5hbWU7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZ3JvdXApIHtcblx0XHRcdFx0Z3JvdXAgPSBTdHJpbmcoZ3JvdXApLnRyaW0oKTtcblx0XHRcdFx0cmVzICs9IGAgZ3JvdXA9JHtDaXRlVEIuZ2V0UXVvdGVkU3RyaW5nKGdyb3VwKX1gO1xuXHRcdFx0XHRyZWZvYmoucmVmZ3JvdXAgPSBncm91cDtcblx0XHRcdH1cblx0XHRcdHJlcyArPSAnPic7XG5cdFx0fVxuXHRcdGxldCBjb250ZW50ID0gYHt7JHt0ZW1wbGF0ZW5hbWV9YDtcblx0XHRmb3IgKGcgaW4gdGVtcGxhdGUuaW5jcmVtZW50YWJsZXMpIHtcblx0XHRcdGlmIChPYmplY3QuaGFzT3duKHRlbXBsYXRlLmluY3JlbWVudGFibGVzLCBnKSkge1xuXHRcdFx0XHRncm91cCA9IHRlbXBsYXRlLmluY3JlbWVudGFibGVzW2ddO1xuXHRcdFx0XHRmb3IgKGkgPSAxOyBpIDw9IGdyb3VwLnZhbDsgaSsrKSB7XG5cdFx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IGdyb3VwLmZpZWxkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdFx0Y29uc3QgZmllbGRuYW1lID0gZ3JvdXAuZmllbGRzW2pdLmZpZWxkO1xuXHRcdFx0XHRcdFx0Y29uc3QgZmllbGRpZCA9IGZpZWxkbmFtZS5yZXBsYWNlKCc8Tj4nLCBpLnRvU3RyaW5nKCkpO1xuXHRcdFx0XHRcdFx0Y29uc3QgZmllbGQgPSAkKGAjY2l0ZS0ke0NpdGVUQi5lc2NTdHIodGVtcGxhdGUuc2hvcnRmb3JtKX0tJHtmaWVsZGlkfWApLnZhbCgpO1xuXHRcdFx0XHRcdFx0aWYgKGZpZWxkKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQgKz0gYCB8JHtmaWVsZGlkfT1gO1xuXHRcdFx0XHRcdFx0XHRjb250ZW50ICs9IFN0cmluZyhmaWVsZCkudHJpbSgpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRmb3IgKGkgPSAwOyBpIDwgdGVtcGxhdGUuYmFzaWMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmICh0ZW1wbGF0ZS5iYXNpY1tpXS5pbmNyZW1lbnRfZ3JvdXApIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBmaWVsZG5hbWUgPSB0ZW1wbGF0ZS5iYXNpY1tpXS5maWVsZDtcblx0XHRcdGNvbnN0IGZpZWxkID0gJChgI2NpdGUtJHtDaXRlVEIuZXNjU3RyKHRlbXBsYXRlLnNob3J0Zm9ybSl9LSR7ZmllbGRuYW1lfWApLnZhbCgpO1xuXHRcdFx0aWYgKGZpZWxkKSB7XG5cdFx0XHRcdGNvbnRlbnQgKz0gYCB8JHtmaWVsZG5hbWV9PWA7XG5cdFx0XHRcdGNvbnRlbnQgKz0gU3RyaW5nKGZpZWxkKS50cmltKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICgkYm9keS5maW5kKCcjY2l0ZS1mb3JtLXN0YXR1cycpLnZhbCgpICE9PSAnY2xvc2VkJykge1xuXHRcdFx0Zm9yIChpID0gMDsgaSA8IHRlbXBsYXRlLmV4dHJhLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmICh0ZW1wbGF0ZS5leHRyYVtpXS5pbmNyZW1lbnRfZ3JvdXApIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBmaWVsZG5hbWUgPSB0ZW1wbGF0ZS5leHRyYVtpXS5maWVsZDtcblx0XHRcdFx0Y29uc3QgZmllbGQgPSAkKGAjY2l0ZS0ke0NpdGVUQi5lc2NTdHIodGVtcGxhdGUuc2hvcnRmb3JtKX0tJHtmaWVsZG5hbWV9YCkudmFsKCk7XG5cdFx0XHRcdGlmIChmaWVsZCkge1xuXHRcdFx0XHRcdGNvbnRlbnQgKz0gYCB8JHtmaWVsZG5hbWV9PWA7XG5cdFx0XHRcdFx0Y29udGVudCArPSBTdHJpbmcoZmllbGQpLnRyaW0oKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRjb250ZW50ICs9ICd9fSc7XG5cdFx0cmVzICs9IGNvbnRlbnQ7XG5cdFx0cmVmb2JqLmNvbnRlbnQgPSBjb250ZW50O1xuXHRcdGlmICghaW5uZXJvbmx5KSB7XG5cdFx0XHRyZXMgKz0gJzwvcmVmPic7XG5cdFx0fVxuXHRcdGlmIChmb3JpbnNlcnQpIHtcblx0XHRcdENpdGVUQi5tYWluUmVmTGlzdC5wdXNoKHJlZm9iaik7XG5cdFx0fVxuXHRcdHJldHVybiByZXM7XG5cdH07XG5cblx0Ly8gTWFrZSBhIHJlZmVyZW5jZSB0byBhIG5hbWVkIHJlZlxuXHRDaXRlVEIuZ2V0TmFtZWRSZWYgPSAocmVmbmFtZSwgZm9yaW5zZXJ0KSA9PiB7XG5cdFx0aWYgKGZvcmluc2VydCkge1xuXHRcdFx0Q2l0ZVRCLm1haW5SZWZMaXN0LnB1c2goe1xuXHRcdFx0XHRzaG9ydHRhZzogdHJ1ZSxcblx0XHRcdFx0cmVmbmFtZSxcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRyZXR1cm4gYDxyZWYgbmFtZT0ke0NpdGVUQi5nZXRRdW90ZWRTdHJpbmcocmVmbmFtZSl9IC8+YDtcblx0fTtcblxuXHQvLyBGdW5jdGlvbiB0byBsb2FkIHRoZSByZWYgbGlzdFxuXHRDaXRlVEIubG9hZFJlZnMgPSAoKSA9PiB7XG5cdFx0aWYgKENpdGVUQi5yZWZzTG9hZGVkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdENpdGVUQi5nZXRQYWdlVGV4dChDaXRlVEIubG9hZFJlZnNJbnRlcm5hbCk7XG5cdH07XG5cblx0Ly8gRnVuY3Rpb24gdGhhdCBhY3R1YWxseSBsb2FkcyB0aGUgbGlzdCBmcm9tIHRoZSBwYWdlIHRleHRcblx0Q2l0ZVRCLmxvYWRSZWZzSW50ZXJuYWwgPSAodGV4dCkgPT4ge1xuXHRcdC8vIFdoYXQgdGhpcyBkb2VzOiAgICAgICAgICAgICBleHRyYWN0IGZpcnN0IG5hbWUvZ3JvdXAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmFjdCBzZWNvbmQgbmFtZS9ncm91cCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3J0dGFnICAgaW5uZXIgY29udGVudFxuXHRcdGNvbnN0IHJlZnNyZWdleCA9XG5cdFx0XHQvPCAqcmVmKD86ICsobmFtZXxncm91cCkgKj0gKig/OlwiKFteXCJdKj8pXCJ8JyhbXiddKj8pJ3woW14gJ1wiLz5dKj8pKSAqKT8gKig/OiArKG5hbWV8Z3JvdXApICo9ICooPzpcIihbXlwiXSo/KVwifCcoW14nXSo/KSd8KFteICdcIi8+XSo/KSkgKik/ICooPzpcXC8gKj58PigoPzoufFxcbikqPyk8ICpcXC8gKnJlZiAqPikvZ2ltO1xuXHRcdC8vIFRoaXMgc2hvdWxkIHdvcmsgcmVnYXJkbGVzcyBvZiB0aGUgcXVvdGluZyB1c2VkIGZvciBuYW1lcy9ncm91cHMgYW5kIGZvciBsaW5lYnJlYWtzIGluIHRoZSBpbm5lciBjb250ZW50XG5cdFx0d2hpbGUgKHRydWUpIHtcblx0XHRcdGNvbnN0IHJlZiA9IHJlZnNyZWdleC5leGVjKHRleHQpO1xuXHRcdFx0aWYgKHJlZiA9PT0gbnVsbCkge1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGNvbnN0IHJlZm9iaiA9IHt9O1xuXHRcdFx0aWYgKHJlZls5XSkge1xuXHRcdFx0XHQvLyBDb250ZW50ICsgc2hvcnQgdGFnIGNoZWNrXG5cdFx0XHRcdC8vIG13Lm5vdGlmeShgXCIke3JlZls5XX1cImAsIHt0YWc6ICdSZWZUb29sYmFyMi4wJywgdHlwZTogJ3dhcm4nfSk7XG5cdFx0XHRcdFssICwgLCAsICwgLCAsICwgLCByZWZvYmouY29udGVudF0gPSByZWY7XG5cdFx0XHRcdHJlZm9iai5zaG9ydHRhZyA9IGZhbHNlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVmb2JqLnNob3J0dGFnID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGlmIChyZWZbMV0gIT09ICcnKSB7XG5cdFx0XHRcdC8vIEZpcnN0IG5hbWUvZ3JvdXBcblx0XHRcdFx0aWYgKHJlZlsyXSkge1xuXHRcdFx0XHRcdFssICwgcmVmb2JqW2ByZWYke3JlZlsxXX1gXV0gPSByZWY7XG5cdFx0XHRcdH0gZWxzZSBpZiAocmVmWzNdKSB7XG5cdFx0XHRcdFx0WywgLCAsIHJlZm9ialtgcmVmJHtyZWZbMV19YF1dID0gcmVmO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFssICwgLCAsIHJlZm9ialtgcmVmJHtyZWZbMV19YF1dID0gcmVmO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAocmVmWzVdICE9PSAnJykge1xuXHRcdFx0XHQvLyBTZWNvbmQgbmFtZS9ncm91cFxuXHRcdFx0XHRpZiAocmVmWzZdKSB7XG5cdFx0XHRcdFx0WywgLCAsICwgLCAsIHJlZm9ialtgcmVmJHtyZWZbNV19YF1dID0gcmVmO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHJlZls3XSkge1xuXHRcdFx0XHRcdFssICwgLCAsICwgLCAsIHJlZm9ialtgcmVmJHtyZWZbNV19YF1dID0gcmVmO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFssICwgLCAsICwgLCAsICwgcmVmb2JqW2ByZWYke3JlZls1XX1gXV0gPSByZWY7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdENpdGVUQi5tYWluUmVmTGlzdC5wdXNoKHJlZm9iaik7XG5cdFx0fVxuXHRcdENpdGVUQi5yZWZzTG9hZGVkID0gdHJ1ZTtcblx0XHRDaXRlVEIuc2V0dXBFcnJvckNoZWNrKCk7XG5cdFx0Q2l0ZVRCLnNldHVwTmFtZWRSZWZzKCk7XG5cdH07XG5cblx0Ly8gQUpBWCBGVU5DVElPTlNcblx0Ly8gUGFyc2Ugc29tZSB3aWtpdGV4dCBhbmQgaGFuZCBpdCBvZmYgdG8gYSBjYWxsYmFjayBmdW5jdGlvblxuXHRDaXRlVEIucGFyc2UgPSAodGV4dCwgY2FsbGJhY2spID0+IHtcblx0XHRjb25zdCBwb3N0ZGF0YSA9IHtcblx0XHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRcdHRpdGxlOiBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJyksXG5cdFx0XHR0ZXh0LFxuXHRcdFx0cHJvcDogJ3RleHQnLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0fTtcblx0XHRhcGkucG9zdChwb3N0ZGF0YSkudGhlbigoe3BhcnNlfSkgPT4ge1xuXHRcdFx0Y29uc3QgaHRtbCA9IHBhcnNlLnRleHQ7XG5cdFx0XHRjYWxsYmFjayhodG1sKTtcblx0XHR9KTtcblx0fTtcblxuXHQvLyBVc2UgdGhlIEFQSSB0byBleHBhbmQgdGVtcGxhdGVzIG9uIHNvbWUgdGV4dFxuXHRDaXRlVEIuZXhwYW5kdGVtcGxhdGVzID0gKHRleHQsIGNhbGxiYWNrKSA9PiB7XG5cdFx0Y29uc3QgcG9zdGRhdGEgPSB7XG5cdFx0XHRhY3Rpb246ICdleHBhbmR0ZW1wbGF0ZXMnLFxuXHRcdFx0dGl0bGU6IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKSxcblx0XHRcdHRleHQsXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHR9O1xuXHRcdGFwaS5wb3N0KHBvc3RkYXRhKS50aGVuKCh7ZXhwYW5kdGVtcGxhdGVzfSkgPT4ge1xuXHRcdFx0Y29uc3QgcmVzdGV4dCA9IGV4cGFuZHRlbXBsYXRlcy53aWtpdGV4dDtcblx0XHRcdGNhbGxiYWNrKHJlc3RleHQpO1xuXHRcdH0pO1xuXHR9O1xuXG5cdC8vIEZ1bmN0aW9uIHRvIGdldCB0aGUgcGFnZSB0ZXh0XG5cdENpdGVUQi5nZXRQYWdlVGV4dCA9IChjYWxsYmFjaykgPT4ge1xuXHRcdGNvbnN0IHNlY3Rpb24gPSAkYm9keS5maW5kKCdpbnB1dFtuYW1lPXdwU2VjdGlvbl0nKS52YWwoKTtcblx0XHRpZiAoc2VjdGlvbiA9PT0gJycpIHtcblx0XHRcdGlmIChDaXRlVEIuZ2V0T3B0aW9uKCdleHBhbmR0ZW1wbGF0ZXMnKSkge1xuXHRcdFx0XHRDaXRlVEIuZXhwYW5kdGVtcGxhdGVzKFxuXHRcdFx0XHRcdCRib2R5LmZpbmQoJ3RleHRhcmVhW25hbWU9d3BUZXh0Ym94MV0nKS53aWtpRWRpdG9yKCdnZXRDb250ZW50cycpLnRleHQoKSxcblx0XHRcdFx0XHRjYWxsYmFja1xuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y2FsbGJhY2soJGJvZHkuZmluZCgndGV4dGFyZWFbbmFtZT13cFRleHRib3gxXScpLndpa2lFZGl0b3IoJ2dldENvbnRlbnRzJykudGV4dCgpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgcG9zdGRhdGEgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0cHJvcDogJ3JldmlzaW9ucycsXG5cdFx0XHRcdHJ2cHJvcDogJ2NvbnRlbnQnLFxuXHRcdFx0XHRwYWdlaWRzOiBtdy5jb25maWcuZ2V0KCd3Z0FydGljbGVJZCcpLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0fTtcblx0XHRcdGlmIChDaXRlVEIuZ2V0T3B0aW9uKCdleHBhbmR0ZW1wbGF0ZXMnKSkge1xuXHRcdFx0XHRwb3N0ZGF0YS5ydmV4cGFuZHRlbXBsYXRlcyA9ICcxJztcblx0XHRcdH1cblx0XHRcdGFwaS5nZXQocG9zdGRhdGEpLnRoZW4oKHtxdWVyeX0pID0+IHtcblx0XHRcdFx0Y29uc3QgcGFnZXRleHQgPSBxdWVyeS5wYWdlc1swXS5yZXZpc2lvbnNbMF0uY29udGVudDtcblx0XHRcdFx0Y2FsbGJhY2socGFnZXRleHQpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xuXG5cdC8vIFNhZmUgdmVyc2lvbiBvZiBkZWNvZGVVUklDb21wb25lbnQoKSB0aGF0IGRvZXNuJ3QgdGhyb3cgZXhjZXB0aW9ucy5cblx0Ly8gSWYgdGhlIG5hdGl2ZSBkZWNvZGVVUklDb21wb25lbnQoKSB0aHJldyBhbiBleGNlcHRpb24sIHRoZSBvcmlnaW5hbCBzdHJpbmcgd2lsbCBiZSByZXR1cm5lZC5cblx0Q2l0ZVRCLnNhZmVEZWNvZGVVUklDb21wb25lbnQgPSAocykgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRzID0gZGVjb2RlVVJJQ29tcG9uZW50KHMpO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0LyogZW1wdHkgKi9cblx0XHR9XG5cdFx0cmV0dXJuIHM7XG5cdH07XG5cblx0Ly8gQXV0b2ZpbGwgYSB0ZW1wbGF0ZSBmcm9tIGFuIElEIChJU0JOLCBET0ksIFBNSUQsIFVSTClcblx0Q2l0ZVRCLmluaXRBdXRvZmlsbCA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCBlbGVtaWQgPSAkKHRoaXMpLmF0dHIoJ2lkJykgPz8gJyc7XG5cdFx0Y29uc3QgcmVzID0gL15jaXRlLWF1dG8tKC4qPyktKC4qKS0oLiopJC8uZXhlYyhlbGVtaWQpO1xuXHRcdGlmICghcmVzKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGNvbnN0IFssIHRlbSwgZmllbGQsIGF1dG90eXBlXSA9IHJlcztcblx0XHRsZXQgaWQgPSAkKGAjY2l0ZS0ke3RlbX0tJHtmaWVsZH1gKS52YWwoKTtcblx0XHRpZiAoIWlkKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGxldCB1cmwgPSAnaHR0cHM6Ly9jaXRvaWQucWl1d2VuLm5ldC5jbi9sb29rdXAucGhwPyc7XG5cdFx0Ly8gQ2l0b2lkIGV4cGVjdHMgbWluaW1hbGx5IGVuY29kZWQgaW5wdXQsIHNvIGRvIHNvbWUgc3BlY3VsYXRpdmUgZGVjb2RpbmcgaGVyZSB0byBhdm9pZFxuXHRcdC8vIDQwNCBmZXRjaGVzLiBodHRwczovL3BoYWJyaWNhdG9yLndpa2ltZWRpYS5vcmcvVDE0NjUzOVxuXHRcdGlkID0gQ2l0ZVRCLnNhZmVEZWNvZGVVUklDb21wb25lbnQoaWQpO1xuXHRcdHVybCArPSBgJHthdXRvdHlwZX09JHtlbmNvZGVVUklDb21wb25lbnQoaWQpfWA7XG5cdFx0dXJsICs9IGAmdGVtcGxhdGU9JHtlbmNvZGVVUklDb21wb25lbnQodGVtKX1gO1xuXHRcdGNvbnN0IHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblx0XHRzLnNldEF0dHJpYnV0ZSgnc3JjJywgdXJsKTtcblx0XHRzLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0L2phdmFzY3JpcHQnKTtcblx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZChzKTtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH07XG5cblx0Ly8gQ2FsbGJhY2sgZm9yIGF1dG9maWxsXG5cdC8vIFRPRE86IEF1dG9maWxsIHRoZSBVUkwsIGF0IGxlYXN0IGZvciBET0lcblx0Q2l0ZVRCLmF1dG9GaWxsID0gKGRhdGEsIHRlbXBsYXRlLCB0eXBlKSA9PiB7XG5cdFx0Y29uc3QgY2wgPSBgY2l0ZS0ke3RlbXBsYXRlfS1gO1xuXHRcdGxldCBpLCBqO1xuXHRcdGxldCBjb2F1dGhvcnM7XG5cdFx0JChgLiR7Y2x9dGl0bGVgKS52YWwoZGF0YS50aXRsZSk7XG5cdFx0Ly8gRmlsbCBpbiBhdXRob3JzXG5cdFx0aWYgKGRhdGEuYXV0aG9ycyAmJiBkYXRhLmF1dGhvcnMubGVuZ3RoID4gMCkge1xuXHRcdFx0aWYgKCQoYC4ke2NsfWxhc3QtaW5jci0xYCkubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRjb25zdCBjbGFzc2VzID0gJChgLiR7Y2x9bGFzdC1pbmNyLTFgKS5lcSgwKS5hdHRyKCdjbGFzcycpPy5zcGxpdCgvXFxzKy8pO1xuXHRcdFx0XHRpZiAoIWNsYXNzZXMpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0bGV0IGdyb3VwID0gZmFsc2U7XG5cdFx0XHRcdGNvbnN0IHBhdHQgPSAvY2l0ZS1bXi1dKj8taW5jci0oLiopLztcblx0XHRcdFx0Zm9yIChjb25zdCBjbGFzc18gb2YgY2xhc3Nlcykge1xuXHRcdFx0XHRcdGlmIChwYXR0LmV4ZWMoY2xhc3NfKSkge1xuXHRcdFx0XHRcdFx0WywgZ3JvdXBdID0gcGF0dC5leGVjKGNsYXNzXyk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0JChgLiR7Y2x9bGFzdC1pbmNyLTFgKS52YWwoZGF0YS5hdXRob3JzWzBdWzBdKTtcblx0XHRcdFx0JChgLiR7Y2x9Zmlyc3QtaW5jci0xYCkudmFsKGRhdGEuYXV0aG9yc1swXVsxXSk7XG5cdFx0XHRcdGNvbnN0IGVsZW1pZCA9IGAjY2l0ZS1pbmNyLSR7dGVtcGxhdGV9LSR7Z3JvdXB9YDtcblx0XHRcdFx0Zm9yIChpID0gMjsgaSA8IGRhdGEuYXV0aG9ycy5sZW5ndGggKyAxOyBpKyspIHtcblx0XHRcdFx0XHQkKGVsZW1pZCkudHJpZ2dlcignY2xpY2snKTtcblx0XHRcdFx0XHQkKGAuJHtjbH1sYXN0LWluY3ItJHtpLnRvU3RyaW5nKCl9YCkudmFsKGRhdGEuYXV0aG9yc1tpIC0gMV1bMF0pO1xuXHRcdFx0XHRcdCQoYC4ke2NsfWZpcnN0LWluY3ItJHtpLnRvU3RyaW5nKCl9YCkudmFsKGRhdGEuYXV0aG9yc1tpIC0gMV1bMV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKCQoYC4ke2NsfWF1dGhvci1pbmNyLTFgKS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdGNvbnN0IGNsYXNzZXMgPSAkKGAuJHtjbH1hdXRob3ItaW5jci0xYCkuZXEoMCkuYXR0cignY2xhc3MnKT8uc3BsaXQoL1xccysvKTtcblx0XHRcdFx0aWYgKCFjbGFzc2VzKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxldCBncm91cCA9IGZhbHNlO1xuXHRcdFx0XHRjb25zdCBwYXR0ID0gL2NpdGUtW14tXSo/LWluY3ItKC4qKS87XG5cdFx0XHRcdGZvciAoY29uc3QgY2xhc3NfIG9mIGNsYXNzZXMpIHtcblx0XHRcdFx0XHRpZiAocGF0dC5leGVjKGNsYXNzXykpIHtcblx0XHRcdFx0XHRcdFssIGdyb3VwXSA9IHBhdHQuZXhlYyhjbGFzc18pO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdCQoYC4ke2NsfWF1dGhvci1pbmNyLTFgKS52YWwoZGF0YS5hdXRob3JzWzBdLmpvaW4oJywgJykpO1xuXHRcdFx0XHRjb25zdCBlbGVtaWQgPSBgI2NpdGUtaW5jci0ke3RlbXBsYXRlfS0ke2dyb3VwfWA7XG5cdFx0XHRcdGZvciAoaSA9IDI7IGkgPCBkYXRhLmF1dGhvcnMubGVuZ3RoICsgMTsgaSsrKSB7XG5cdFx0XHRcdFx0JChlbGVtaWQpLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdFx0XHRcdFx0JChgLiR7Y2x9YXV0aG9yLWluY3ItJHtpLnRvU3RyaW5nKCl9YCkudmFsKGRhdGEuYXV0aG9yc1tpIC0gMV0uam9pbignLCAnKSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoJChgLiR7Y2x9bGFzdDFgKS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdGZvciAoaSA9IDA7IGRhdGEuYXV0aG9ycyAmJiBpIDwgZGF0YS5hdXRob3JzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKCQoYC4ke2NsfWxhc3Qke2kgKyAxfWApLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0JChgLiR7Y2x9bGFzdCR7aSArIDF9YCkudmFsKGRhdGEuYXV0aG9yc1tpXVswXSk7XG5cdFx0XHRcdFx0XHQkKGAuJHtjbH1maXJzdCR7aSArIDF9YCkudmFsKGRhdGEuYXV0aG9yc1tpXVsxXSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGNvYXV0aG9ycyA9IFtdO1xuXHRcdFx0XHRcdFx0Zm9yIChqID0gaTsgaiA8IGRhdGEuYXV0aG9ycy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdFx0XHRjb2F1dGhvcnMucHVzaChkYXRhLmF1dGhvcnNbal0uam9pbignLCAnKSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQkKGAuJHtjbH1jb2F1dGhvcnNgKS52YWwoY29hdXRob3JzLmpvaW4oJzsgJykpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKCQoYC4ke2NsfWF1dGhvcjFgKS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0Y29uc3QgYXV0aG9ycyA9IFtdO1xuXHRcdFx0XHRmb3IgKGkgPSAwOyBkYXRhLmF1dGhvcnMgJiYgaSA8IGRhdGEuYXV0aG9ycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGF1dGhvcnMucHVzaChkYXRhLmF1dGhvcnNbaV0uam9pbignLCAnKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0JChgLiR7Y2x9YXV0aG9yc2ApLnZhbChhdXRob3JzLmpvaW4oJzsgJykpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Zm9yIChpID0gMDsgZGF0YS5hdXRob3JzICYmIGkgPCBkYXRhLmF1dGhvcnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoJChgLiR7Y2x9YXV0aG9yJHtpICsgMX1gKS5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdCQoYC4ke2NsfWF1dGhvciR7aSArIDF9YCkudmFsKGRhdGEuYXV0aG9yc1tpXS5qb2luKCcsICcpKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Y29hdXRob3JzID0gW107XG5cdFx0XHRcdFx0XHRmb3IgKGogPSBpOyBqIDwgZGF0YS5hdXRob3JzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0XHRcdGNvYXV0aG9ycy5wdXNoKGRhdGEuYXV0aG9yc1tqXS5qb2luKCcsICcpKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdCQoYC4ke2NsfWNvYXV0aG9yc2ApLnZhbChjb2F1dGhvcnMuam9pbignOyAnKSk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBGb3JtYXQgcGFydGlhbCBkYXRlcyBvZiB0aGUgZm9ybWF0IFlZWVktTU0sIFlZWVktTU0tWFgsIG9yIFlZWVktTU0tREQgY29ycmVjdGx5XG5cdFx0aWYgKGRhdGEuZGF0ZSkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29uc3QgRFQgPSBuZXcgRGF0ZShkYXRhLmRhdGUpO1xuXHRcdFx0XHRpZiAoL15cXGR7NH0tXFxkezJ9KC1YWCk/JC9pLnRlc3QoZGF0YS5kYXRlKSkge1xuXHRcdFx0XHRcdGRhdGEuZGF0ZSA9IGRhdGEuZGF0ZS5yZXBsYWNlKCctWFgnLCAnJyk7XG5cdFx0XHRcdFx0JChgLiR7Y2x9ZGF0ZWApLnZhbChDaXRlVEIuZm9ybWF0RGF0ZShEVCwgZmFsc2UsIHRydWUpKTtcblx0XHRcdFx0fSBlbHNlIGlmICgvXlxcZHs0fS1cXGR7Mn0tXFxkezJ9Py9pLnRlc3QoZGF0YS5kYXRlKSkge1xuXHRcdFx0XHRcdCQoYC4ke2NsfWRhdGVgKS52YWwoQ2l0ZVRCLmZvcm1hdERhdGUoRFQsIHRydWUsIHRydWUpKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkKGAuJHtjbH1kYXRlYCkudmFsKGRhdGEuZGF0ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHQvKiBlbXB0eSAqL1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHQkKGAuJHtjbH1kYXRlYCkudmFsKGRhdGEuZGF0ZSk7XG5cdFx0fVxuXG5cdFx0c3dpdGNoICh0eXBlKSB7XG5cdFx0XHRjYXNlICdwbWlkJzpcblx0XHRcdGNhc2UgJ2RvaSc6XG5cdFx0XHRcdCQoYC4ke2NsfWpvdXJuYWxgKS52YWwoZGF0YS5qb3VybmFsKTtcblx0XHRcdFx0JChgLiR7Y2x9dm9sdW1lYCkudmFsKGRhdGEudm9sdW1lKTtcblx0XHRcdFx0JChgLiR7Y2x9aXNzdWVgKS52YWwoZGF0YS5pc3N1ZSk7XG5cdFx0XHRcdCQoYC4ke2NsfXBhZ2VzYCkudmFsKGRhdGEucGFnZXMpO1xuXHRcdFx0XHRpZiAodHlwZSA9PT0gJ3BtaWQnICYmIGRhdGEuZG9pKSB7XG5cdFx0XHRcdFx0JChgLiR7Y2x9ZG9pYCkudmFsKGRhdGEuZG9pKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICdpc2JuJzpcblx0XHRcdFx0JChgLiR7Y2x9cHVibGlzaGVyYCkudmFsKGRhdGEucHVibGlzaGVyKTtcblx0XHRcdFx0JChgLiR7Y2x9bG9jYXRpb25gKS52YWwoZGF0YS5sb2NhdGlvbik7XG5cdFx0XHRcdCQoYC4ke2NsfWVkaXRpb25gKS52YWwoZGF0YS5lZGl0aW9uKTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAndXJsJzpcblx0XHRcdFx0JChgLiR7Y2x9am91cm5hbGApLnZhbChkYXRhLmpvdXJuYWwpO1xuXHRcdFx0XHQkKGAuJHtjbH12b2x1bWVgKS52YWwoZGF0YS52b2x1bWUpO1xuXHRcdFx0XHQkKGAuJHtjbH1pc3N1ZWApLnZhbChkYXRhLmlzc3VlKTtcblx0XHRcdFx0JChgLiR7Y2x9cGFnZXNgKS52YWwoZGF0YS5wYWdlcyk7XG5cdFx0XHRcdCQoYC4ke2NsfXB1Ymxpc2hlcmApLnZhbChkYXRhLnB1Ymxpc2hlcik7XG5cdFx0XHRcdCQoYC4ke2NsfWVkaXRpb25gKS52YWwoZGF0YS5lZGl0aW9uKTtcblx0XHRcdFx0JChgLiR7Y2x9aXNibmApLnZhbChkYXRhLmlzYm4pO1xuXHRcdFx0XHQkKGAuJHtjbH1pc3NuYCkudmFsKGRhdGEuaXNzbik7XG5cdFx0XHRcdCQoYC4ke2NsfWRvaWApLnZhbChkYXRhLmRvaSk7XG5cdFx0XHRcdC8vIFwiZW4tVVNcIiBpc24ndCBhIHZhbGlkIHZhbHVlIGZvciB0aGUgbGFuZ3VhZ2UgcGFyYW1ldGVyXG5cdFx0XHRcdGlmIChkYXRhLmxhbmd1YWdlICYmIGRhdGEubGFuZ3VhZ2UgIT09ICdlbi1VUycgJiYgZGF0YS5sYW5ndWFnZSAhPT0gJ2VuLUdCJykge1xuXHRcdFx0XHRcdCQoYC4ke2NsfWxhbmd1YWdlYCkudmFsKGRhdGEubGFuZ3VhZ2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdCQoYC4ke2NsfWNoYXB0ZXJgKS52YWwoZGF0YS5jaGFwdGVyKTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Ly8gTm8gZGVmYXVsdFxuXHRcdH1cblx0fTtcblxuXHQvLyBGT1JNIERJQUxPRyBGVU5DVElPTlNcblx0Ly8gQWRkIG5ldyBpbmNyZW1lbnRhYmxlIGZpZWxkc1xuXHRDaXRlVEIuaW5jcmVtZW50RmllbGRzID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IHRlbXBsYXRlID0gQ2l0ZVRCLmdldE9wZW5UZW1wbGF0ZSgpO1xuXHRcdGNvbnN0IFtjdXJyZW50cm93XSA9ICQodGhpcykucGFyZW50cygndHInKTtcblx0XHQkKHRoaXMpLnByZXYoKS5jc3MoJ3dpZHRoJywgJzEwMCUnKTtcblx0XHQkKHRoaXMpLmRldGFjaCgpO1xuXHRcdGNvbnN0IGVsZW1pZCA9ICQodGhpcykuYXR0cignaWQnKSA/PyAnJztcblx0XHRjb25zdCByZXMgPSAvXmNpdGUtaW5jci0oLio/KS0oLiopJC8uZXhlYyhlbGVtaWQpO1xuXHRcdGlmICghcmVzKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IFssICwgZ3JvdXBdID0gcmVzO1xuXHRcdGNvbnN0IGluY3JlbWVudHMgPSB0ZW1wbGF0ZS5pbmNyZW1lbnRhYmxlc1tncm91cF07XG5cdFx0Y29uc3Qge2ZpZWxkc30gPSBpbmNyZW1lbnRzO1xuXHRcdHRlbXBsYXRlLmluY3JlbWVudGFibGVzW2dyb3VwXS52YWwgKz0gMTtcblx0XHRjb25zdCB0cnMgPSB0ZW1wbGF0ZS5tYWtlRm9ybUlubmVyKGZpZWxkcywgZmFsc2UpO1xuXHRcdHRycy5yZXZlcnNlKCk7XG5cdFx0Zm9yIChjb25zdCB0ciBvZiB0cnMpIHtcblx0XHRcdCQoY3VycmVudHJvdykuYWZ0ZXIodHIpO1xuXHRcdH1cblx0fTtcblxuXHQvLyBmaWxsIHRoZSBhY2Nlc3NkYXRlIHBhcmFtIHdpdGggdGhlIGN1cnJlbnQgZGF0ZVxuXHRDaXRlVEIuZmlsbEFjY2Vzc2RhdGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgZWxlbWlkID0gJCh0aGlzKS5hdHRyKCdpZCcpID8/ICcnO1xuXHRcdGNvbnN0IHJlcyA9IC9eY2l0ZS1kYXRlLSguKj8pLSguKikkLy5leGVjKGVsZW1pZCk7XG5cdFx0Y29uc3QgWywgaWRdID0gcmVzO1xuXHRcdGlmICghcmVzKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IFssICwgZmllbGRdID0gcmVzO1xuXHRcdGNvbnN0IERUID0gbmV3IERhdGUoKTtcblx0XHRjb25zdCBkYXRlc3RyID0gQ2l0ZVRCLmZvcm1hdERhdGUoRFQpO1xuXHRcdCQoYCNjaXRlLSR7aWR9LSR7ZmllbGR9YCkudmFsKGRhdGVzdHIpO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fTtcblxuXHRDaXRlVEIuZm9ybWF0RGF0ZSA9IChEVCwgdXNlZGF5LCB1c2Vtb250aCkgPT4ge1xuXHRcdGlmICh1c2VkYXkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dXNlZGF5ID0gdHJ1ZTtcblx0XHR9XG5cdFx0aWYgKHVzZW1vbnRoID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHVzZW1vbnRoID0gdHJ1ZTtcblx0XHR9XG5cdFx0bGV0IGRhdGVzdHIgPSBDaXRlVEIuZ2V0T3B0aW9uKCdkYXRlIGZvcm1hdCcpO1xuXHRcdGxldCB6bW9udGggPSAnJztcblx0XHRsZXQgbW9udGggPSBEVC5nZXRVVENNb250aCgpICsgMTtcblx0XHRpZiAobW9udGggPCAxMCkge1xuXHRcdFx0em1vbnRoID0gYDAke21vbnRoLnRvU3RyaW5nKCl9YDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0em1vbnRoID0gbW9udGgudG9TdHJpbmcoKTtcblx0XHR9XG5cdFx0bW9udGggPSBtb250aC50b1N0cmluZygpO1xuXHRcdGxldCB6ZGF0ZSA9ICcnO1xuXHRcdGxldCBkYXRlID0gRFQuZ2V0VVRDRGF0ZSgpO1xuXHRcdGlmIChkYXRlIDwgMTApIHtcblx0XHRcdHpkYXRlID0gYDAke2RhdGUudG9TdHJpbmcoKX1gO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR6ZGF0ZSA9IGRhdGUudG9TdHJpbmcoKTtcblx0XHR9XG5cdFx0ZGF0ZSA9IGRhdGUudG9TdHJpbmcoKTtcblx0XHRpZiAodXNlZGF5KSB7XG5cdFx0XHRkYXRlc3RyID0gZGF0ZXN0ci5yZXBsYWNlKCc8ZGF0ZT4nLCBkYXRlKTtcblx0XHRcdGRhdGVzdHIgPSBkYXRlc3RyLnJlcGxhY2UoJzx6ZGF0ZT4nLCB6ZGF0ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRhdGVzdHIgPSBkYXRlc3RyLnJlcGxhY2UoJzxkYXRlPicsICcnKTtcblx0XHRcdGRhdGVzdHIgPSBkYXRlc3RyLnJlcGxhY2UoJzx6ZGF0ZT4nLCAnJyk7XG5cdFx0fVxuXHRcdGlmICh1c2Vtb250aCkge1xuXHRcdFx0ZGF0ZXN0ciA9IGRhdGVzdHIucmVwbGFjZSgnPG1vbnRoPicsIG1vbnRoKTtcblx0XHRcdGRhdGVzdHIgPSBkYXRlc3RyLnJlcGxhY2UoJzx6bW9udGg+Jywgem1vbnRoKTtcblx0XHRcdGRhdGVzdHIgPSBkYXRlc3RyLnJlcGxhY2UoJzxtb250aG5hbWU+JywgQ2l0ZVRCLmdldE9wdGlvbignbW9udGhzJylbRFQuZ2V0VVRDTW9udGgoKV0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkYXRlc3RyID0gZGF0ZXN0ci5yZXBsYWNlKCc8bW9udGg+JywgJycpO1xuXHRcdFx0ZGF0ZXN0ciA9IGRhdGVzdHIucmVwbGFjZSgnPHptb250aD4nLCAnJyk7XG5cdFx0XHRkYXRlc3RyID0gZGF0ZXN0ci5yZXBsYWNlKCc8bW9udGhuYW1lPicsICcnKTtcblx0XHR9XG5cdFx0ZGF0ZXN0ciA9IGRhdGVzdHIucmVwbGFjZSgnPHllYXI+JywgRFQuZ2V0VVRDRnVsbFllYXIoKS50b1N0cmluZygpKTtcblx0XHRyZXR1cm4gZGF0ZXN0ci5yZXBsYWNlKC9eWyAvXFwtLC5dKiguKj8pWyAvXFwtLC5dKiQvZywgJyQxJyk7IC8vIENsZWFudXAgYW55IGRhbmdsaW5nIHNwYWNlcyBvciBjb25uZWN0b3JzIHRoYXQgbWlnaHQgcmVzdWx0IGZyb20gb21pdHRpbmcgZGF0ZS9tb250aFxuXHR9O1xuXG5cdC8vIEZ1bmN0aW9uIGNhbGxlZCBhZnRlciB0aGUgcmVmIGxpc3QgaXMgbG9hZGVkLCB0byBhY3R1YWxseSBzZXQgdGhlIGNvbnRlbnRzIG9mIHRoZSBuYW1lZCByZWYgZGlhbG9nXG5cdC8vIFVudGlsIHRoZSBsaXN0IGlzIGxvYWRlZCwgaXRzIGp1c3QgYSBcIkxvYWRpbmdcIiBwbGFjZWhvbGRlclxuXHRDaXRlVEIuc2V0dXBOYW1lZFJlZnMgPSAoKSA9PiB7XG5cdFx0Y29uc3QgbmFtZXMgPSBbXTtcblx0XHRsZXQgaTtcblx0XHRmb3IgKGkgPSAwOyBpIDwgQ2l0ZVRCLm1haW5SZWZMaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoIUNpdGVUQi5tYWluUmVmTGlzdFtpXS5zaG9ydHRhZyAmJiBDaXRlVEIubWFpblJlZkxpc3RbaV0ucmVmbmFtZSkge1xuXHRcdFx0XHRuYW1lcy5wdXNoKENpdGVUQi5tYWluUmVmTGlzdFtpXSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNvbnN0IHN0dWZmID0gJCgnPGRpdj4nKTtcblx0XHQkYm9keS5maW5kKCcjY2l0ZXRvb2xiYXItbmFtZWRyZWZzJykuaHRtbChzdHVmZik7XG5cdFx0aWYgKG5hbWVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0c3R1ZmYuaHRtbChnZXRNZXNzYWdlKCdjaXRlLW5vLW5hbWVkcmVmcycpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R1ZmYuaHRtbChnZXRNZXNzYWdlKCdjaXRlLW5hbWVkcmVmcy1pbnRybycpKTtcblx0XHRcdGNvbnN0IHNlbGVjdCA9ICQoJzxzZWxlY3Q+JykuYXR0cignaWQnLCAnY2l0ZS1uYW1lZHJlZi1zZWxlY3QnKTtcblx0XHRcdHNlbGVjdC5hcHBlbmQoJCgnPG9wdGlvbj4nKS5hdHRyKCd2YWx1ZScsICcnKS50ZXh0KGdldE1lc3NhZ2UoJ2NpdGUtbmFtZWQtcmVmcy1kcm9wZG93bicpKSk7XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgbmFtZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0c2VsZWN0LmFwcGVuZCgkKCc8b3B0aW9uPicpLnRleHQobmFtZXNbaV0ucmVmbmFtZSkpO1xuXHRcdFx0fVxuXHRcdFx0c3R1ZmYuYWZ0ZXIoc2VsZWN0KTtcblx0XHRcdHNlbGVjdC5iZWZvcmUoJzxicj4nKTtcblx0XHRcdGNvbnN0IHByZXZsYWJlbCA9ICQoJzxkaXY+Jylcblx0XHRcdFx0LmF0dHIoJ2lkJywgJ2NpdGUtbnJlZi1wcmV2aWV3LWxhYmVsJylcblx0XHRcdFx0LmNzcygnZGlzcGxheScsICdub25lJylcblx0XHRcdFx0Lmh0bWwoZ2V0TWVzc2FnZSgnY2l0ZS1yYXctcHJldmlldycpKTtcblx0XHRcdHNlbGVjdC5hZnRlcihwcmV2bGFiZWwpO1xuXHRcdFx0cHJldmxhYmVsLmJlZm9yZSgnPGJyPjxicj4nKTtcblx0XHRcdHByZXZsYWJlbC5hZnRlcignPGRpdiBpZD1cImNpdGUtbmFtZWRyZWYtcHJldmlld1wiIHN0eWxlPVwicGFkZGluZzowLjVlbTsgZm9udC1zaXplOjExMCVcIiAvPicpO1xuXHRcdFx0Y29uc3QgcGFyc2VsYWJlbCA9ICQoJzxzcGFuPicpXG5cdFx0XHRcdC5hdHRyKCdpZCcsICdjaXRlLXBhcnNlZC1sYWJlbCcpXG5cdFx0XHRcdC5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpXG5cdFx0XHRcdC5odG1sKGdldE1lc3NhZ2UoJ2NpdGUtcGFyc2VkLWxhYmVsJykpO1xuXHRcdFx0JGJvZHkuZmluZCgnI2NpdGUtbmFtZWRyZWYtcHJldmlldycpLmFmdGVyKHBhcnNlbGFiZWwpO1xuXHRcdFx0cGFyc2VsYWJlbC5hZnRlcignPGRpdiBpZD1cImNpdGUtbmFtZWRyZWYtcGFyc2VkXCIgc3R5bGU9XCJwYWRkaW5nLWJvdHRvbTowLjVlbTsgZm9udC1zaXplOjExMCVcIiAvPicpO1xuXHRcdFx0Y29uc3QgbGluayA9ICQoJzxhPicpXG5cdFx0XHRcdC5hdHRyKHtcblx0XHRcdFx0XHRocmVmOiAnIycsXG5cdFx0XHRcdFx0aWQ6ICdjaXRlLW5yZWYtcGFyc2UnLFxuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY3NzKHtcblx0XHRcdFx0XHRtYXJnaW46ICcwIDFlbSAwIDFlbScsXG5cdFx0XHRcdFx0ZGlzcGxheTogJ25vbmUnLFxuXHRcdFx0XHRcdGNvbG9yOiAnIzAwMDA4YicsXG5cdFx0XHRcdH0pO1xuXHRcdFx0bGluay5odG1sKGdldE1lc3NhZ2UoJ2NpdGUtZm9ybS1wYXJzZScpKTtcblx0XHRcdCRib2R5LmZpbmQoJyNjaXRlLW5hbWVkcmVmLXBhcnNlZCcpLmFmdGVyKGxpbmspO1xuXG5cdFx0XHQkYm9keS5maW5kKCcjY2l0ZS1uYW1lZHJlZi1zZWxlY3QnKS5vbignY2hhbmdlJywgQ2l0ZVRCLm5hbWVkUmVmU2VsZWN0Q2xpY2spO1xuXHRcdFx0JGJvZHkuZmluZCgnI2NpdGUtbnJlZi1wYXJzZScpLm9uKCdjbGljaycsIENpdGVUQi5ucmVmUGFyc2VDbGljayk7XG5cdFx0fVxuXHR9O1xuXG5cdC8vIEZ1bmN0aW9uIHRvIGdldCB0aGUgZXJyb3JjaGVjayBmb3JtIEhUTUxcblx0Q2l0ZVRCLnNldHVwRXJyb3JDaGVjayA9ICgpID0+IHtcblx0XHRjb25zdCBmb3JtID0gJCgnPGRpdj4nKS5hdHRyKCdpZCcsICdjaXRlLWVycm9yY2hlY2staGVhZGluZycpLmh0bWwoZ2V0TWVzc2FnZSgnY2l0ZS1lcnJvcmNoZWNrLWhlYWRpbmcnKSk7XG5cdFx0Y29uc3QgdWwgPSAkKCc8dWw+JykuYXR0cignaWQnLCAnY2l0ZS1lcnJjaGVjay1saXN0Jyk7XG5cdFx0bGV0IHRlc3Q7XG5cdFx0Zm9yIChjb25zdCB0IGluIENpdGVUQi5FcnJvckNoZWNrcykge1xuXHRcdFx0aWYgKE9iamVjdC5oYXNPd24oQ2l0ZVRCLkVycm9yQ2hlY2tzLCB0KSkge1xuXHRcdFx0XHR0ZXN0ID0gQ2l0ZVRCLkVycm9yQ2hlY2tzW3RdO1xuXHRcdFx0XHR1bC5hcHBlbmQodGVzdC5nZXRSb3coKSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZvcm0uYXBwZW5kKHVsKTtcblx0XHQkYm9keS5maW5kKCcjY2l0ZXRvb2xiYXItZXJyb3JjaGVjaycpLmh0bWwoZm9ybS5odG1sKCkpO1xuXHR9O1xuXG5cdC8vIENhbGxiYWNrIGZ1bmN0aW9uIGZvciBwYXJzZWQgcHJldmlld1xuXHRDaXRlVEIuZmlsbE5yZWZQcmV2aWV3ID0gKHBhcnNlZCkgPT4ge1xuXHRcdCRib2R5LmZpbmQoJyNjaXRlLXBhcnNlZC1sYWJlbCcpLnNob3coKTtcblx0XHQkYm9keS5maW5kKCcjY2l0ZS1uYW1lZHJlZi1wYXJzZWQnKS5odG1sKHBhcnNlZCk7XG5cdH07XG5cblx0Ly8gQ2xpY2sgaGFuZGxlciBmb3IgdGhlIG5hbWVkLXJlZiBwYXJzZWQgcHJldmlld1xuXHRDaXRlVEIubnJlZlBhcnNlQ2xpY2sgPSAoKSA9PiB7XG5cdFx0Y29uc3QgY2hvaWNlID0gJGJvZHkuZmluZCgnI2NpdGUtbmFtZWRyZWYtc2VsZWN0JykudmFsKCk7XG5cdFx0aWYgKGNob2ljZSA9PT0gJycpIHtcblx0XHRcdCRib2R5LmZpbmQoJyNjaXRlLXBhcnNlZC1sYWJlbCcpLmhpZGUoKTtcblx0XHRcdCRib2R5LmZpbmQoJyNjaXRlLW5hbWVkcmVmLXBhcnNlZCcpLnRleHQoJycpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHQkYm9keS5maW5kKCcjY2l0ZS1ucmVmLXBhcnNlJykuaGlkZSgpO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgQ2l0ZVRCLm1haW5SZWZMaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoIUNpdGVUQi5tYWluUmVmTGlzdFtpXS5zaG9ydHRhZyAmJiBDaXRlVEIubWFpblJlZkxpc3RbaV0ucmVmbmFtZSA9PT0gY2hvaWNlKSB7XG5cdFx0XHRcdENpdGVUQi5wYXJzZShDaXRlVEIubWFpblJlZkxpc3RbaV0uY29udGVudCwgQ2l0ZVRCLmZpbGxOcmVmUHJldmlldyk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0Ly8gQ2xpY2sgaGFuZGxlciBmb3IgdGhlIG5hbWVkLXJlZiBkcm9wZG93blxuXHRDaXRlVEIubGFzdG5hbWVkcmVmY2hvaWNlID0gJyc7XG5cdENpdGVUQi5uYW1lZFJlZlNlbGVjdENsaWNrID0gKCkgPT4ge1xuXHRcdGNvbnN0IGNob2ljZSA9ICRib2R5LmZpbmQoJyNjaXRlLW5hbWVkcmVmLXNlbGVjdCcpLnZhbCgpO1xuXHRcdGlmIChDaXRlVEIubGFzdG5hbWVkcmVmY2hvaWNlID09PSBjaG9pY2UpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Q2l0ZVRCLmxhc3RuYW1lZHJlZmNob2ljZSA9IGNob2ljZTtcblx0XHQkYm9keS5maW5kKCcjY2l0ZS1wYXJzZWQtbGFiZWwnKS5oaWRlKCk7XG5cdFx0JGJvZHkuZmluZCgnI2NpdGUtbmFtZWRyZWYtcGFyc2VkJykudGV4dCgnJyk7XG5cdFx0aWYgKGNob2ljZSA9PT0gJycpIHtcblx0XHRcdCRib2R5LmZpbmQoJyNjaXRlLW5yZWYtcHJldmlldy1sYWJlbCcpLmhpZGUoKTtcblx0XHRcdCRib2R5LmZpbmQoJyNjaXRlLW5hbWVkcmVmLXByZXZpZXcnKS50ZXh0KCcnKTtcblx0XHRcdCRib2R5LmZpbmQoJyNjaXRlLW5yZWYtcGFyc2UnKS5oaWRlKCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgQ2l0ZVRCLm1haW5SZWZMaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoIUNpdGVUQi5tYWluUmVmTGlzdFtpXS5zaG9ydHRhZyAmJiBDaXRlVEIubWFpblJlZkxpc3RbaV0ucmVmbmFtZSA9PT0gY2hvaWNlKSB7XG5cdFx0XHRcdCRib2R5LmZpbmQoJyNjaXRlLW5yZWYtcHJldmlldy1sYWJlbCcpLnNob3coKTtcblx0XHRcdFx0JGJvZHkuZmluZCgnI2NpdGUtbmFtZWRyZWYtcHJldmlldycpLnRleHQoQ2l0ZVRCLm1haW5SZWZMaXN0W2ldLmNvbnRlbnQpO1xuXHRcdFx0XHRpZiAoQ2l0ZVRCLmdldE9wdGlvbignYXV0b3BhcnNlJykpIHtcblx0XHRcdFx0XHRDaXRlVEIubnJlZlBhcnNlQ2xpY2soKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkYm9keS5maW5kKCcjY2l0ZS1ucmVmLXBhcnNlJykuc2hvdygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdC8vIGNhbGxiYWNrIGZ1bmN0aW9uIGZvciBwYXJzZWQgcHJldmlld1xuXHRDaXRlVEIuZmlsbFRlbXBsYXRlUHJldmlldyA9ICh0ZXh0KSA9PiB7XG5cdFx0Y29uc3QgdGVtcGxhdGUgPSBDaXRlVEIuZ2V0T3BlblRlbXBsYXRlKCk7XG5cdFx0Y29uc3QgZGl2ID0gJChgI2NpdGV0b29sYmFyLSR7Q2l0ZVRCLmVzY1N0cih0ZW1wbGF0ZS5zaG9ydGZvcm0pfWApO1xuXHRcdGRpdi5maW5kKCcuY2l0ZS1wcmV2LXBhcnNlZC1sYWJlbCcpLnNob3coKTtcblx0XHRkaXYuZmluZCgnLmNpdGUtcHJldmlldy1wYXJzZWQnKS5odG1sKHRleHQpO1xuXHR9O1xuXG5cdC8vIENsaWNrIGhhbmRsZXIgZm9yIHRlbXBsYXRlIHBhcnNlZCBwcmV2aWV3XG5cdENpdGVUQi5wcmV2UGFyc2VDbGljayA9ICgpID0+IHtcblx0XHRjb25zdCByZWYgPSBDaXRlVEIuZ2V0UmVmKHRydWUsIGZhbHNlKTtcblx0XHRjb25zdCB0ZW1wbGF0ZSA9IENpdGVUQi5nZXRPcGVuVGVtcGxhdGUoKTtcblx0XHRjb25zdCBkaXYgPSAkKGAjY2l0ZXRvb2xiYXItJHtDaXRlVEIuZXNjU3RyKHRlbXBsYXRlLnNob3J0Zm9ybSl9YCk7XG5cdFx0ZGl2LmZpbmQoJy5jaXRlLXByZXYtcGFyc2UnKS5oaWRlKCk7XG5cdFx0Q2l0ZVRCLnBhcnNlKHJlZiwgQ2l0ZVRCLmZpbGxUZW1wbGF0ZVByZXZpZXcpO1xuXHR9O1xuXG5cdC8vIFNob3cvaGlkZSB0aGUgZXh0cmEgZmllbGRzIGluIHRoZSBkaWFsb2cgYm94XG5cdENpdGVUQi5zaG93SGlkZUV4dHJhID0gKCkgPT4ge1xuXHRcdGNvbnN0IHRlbXBsYXRlID0gQ2l0ZVRCLmdldE9wZW5UZW1wbGF0ZSgpO1xuXHRcdGNvbnN0IGRpdiA9ICQoYCNjaXRldG9vbGJhci0ke0NpdGVUQi5lc2NTdHIodGVtcGxhdGUuc2hvcnRmb3JtKX1gKTtcblx0XHRjb25zdCBzZXR0aW5nID0gZGl2LmZpbmQoJy5jaXRlLWZvcm0tc3RhdHVzJykudmFsKCk7XG5cdFx0aWYgKHNldHRpbmcgPT09ICdjbG9zZWQnKSB7XG5cdFx0XHRkaXYuZmluZCgnLmNpdGUtZm9ybS1zdGF0dXMnKS52YWwoJ29wZW4nKTtcblx0XHRcdGRpdi5maW5kKCcuY2l0ZS1leHRyYS1maWVsZHMnKS5zaG93KDEsICgpID0+IHtcblx0XHRcdFx0Ly8galF1ZXJ5IGFkZHMgYGRpc3BsYXk6IGJsb2NrYCwgd2hpY2ggc2NyZXdzIHRoaW5ncyB1cFxuXHRcdFx0XHRkaXYuZmluZCgnLmNpdGUtZXh0cmEtZmllbGRzJykuY3NzKHtcblx0XHRcdFx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdFx0XHRcdCdiYWNrZ3JvdW5kLWNvbG9yJzogJ3RyYW5zcGFyZW50Jyxcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZGl2LmZpbmQoJy5jaXRlLWZvcm0tc3RhdHVzJykudmFsKCdjbG9zZWQnKTtcblx0XHRcdGRpdi5maW5kKCcuY2l0ZS1leHRyYS1maWVsZHMnKS5oaWRlKCk7XG5cdFx0fVxuXHR9O1xuXG5cdC8vIFJlc2V0cyBmb3JtIGZpZWxkcyBhbmQgcHJldmlld3Ncblx0Ly8gUmVzZXRzIGZvcm0gZmllbGRzIGFuZCBwcmV2aWV3c1xuXHRDaXRlVEIucmVzZXRGb3JtID0gKCkgPT4ge1xuXHRcdGNvbnN0IHRlbXBsYXRlID0gQ2l0ZVRCLmdldE9wZW5UZW1wbGF0ZSgpO1xuXHRcdGNvbnN0IGRpdiA9ICQoYCNjaXRldG9vbGJhci0ke0NpdGVUQi5lc2NTdHIodGVtcGxhdGUuc2hvcnRmb3JtKX1gKTtcblx0XHRkaXYuaHRtbCh0ZW1wbGF0ZS5nZXRGb3JtKCkpO1xuXHR9O1xuXG5cdC8vIFNUUklORyBVVElMSVRZIEZVTkNUSU9OU1xuXHQvLyBSZXR1cm5zIGEgc3RyaW5nIHF1b3RlZCBhcyBuZWNlc3NhcnkgZm9yIG5hbWUvZ3JvdXAgYXR0cmlidXRlc1xuXHRDaXRlVEIuZ2V0UXVvdGVkU3RyaW5nID0gKHMpID0+IHtcblx0XHRjb25zdCBzcSA9IC8nLy50ZXN0KHMpOyAvLyBzaW5nbGUgcXVvdGVzXG5cdFx0Y29uc3QgZHEgPSAvXCIvLnRlc3Qocyk7IC8vIGRvdWJsZSBxdW90ZXNcblx0XHRpZiAoIXNxICYmICFkcSkge1xuXHRcdFx0Ly8gQWx3YXlzIHF1b3RlcyBmb3Igbm9uLWxhdGluIGFscGhhYmV0XG5cdFx0XHRyZXR1cm4gYFwiJHtzfVwiYDtcblx0XHR9IGVsc2UgaWYgKCFkcSkge1xuXHRcdFx0Ly8gQ2FuIHVzZSBkb3VibGUgcXVvdGVzXG5cdFx0XHRyZXR1cm4gYFwiJHtzfVwiYDtcblx0XHR9IGVsc2UgaWYgKCFzcSkge1xuXHRcdFx0Ly8gQ2FuIHVzZSBzaW5nbGUgcXVvdGVzXG5cdFx0XHRyZXR1cm4gYCcke3N9J2A7XG5cdFx0fVxuXHRcdC8vIEhhcyBkb3VibGUgYW5kIHNpbmdsZSBxdW90ZXNcblx0XHRzID0gcy5yZXBsYWNlKC9cIi9nLCBcIidcIik7XG5cdFx0cmV0dXJuIGBcIiR7c31cImA7XG5cdH07XG5cblx0Ly8gRml4IHVwIHN0cmluZ3MgZm9yIG91dHB1dCAtIGNhcGl0YWxpemUgZmlyc3QgY2hhciwgcmVwbGFjZSB1bmRlcnNjb3JlcyB3aXRoIHNwYWNlc1xuXHRDaXRlVEIuZml4U3RyID0gKHMpID0+IHtcblx0XHRzID0gcy5zbGljZSgwLCAxKS50b1VwcGVyQ2FzZSgpICsgcy5zbGljZSgxKTtcblx0XHRzID0gcy5yZXBsYWNlKCdfJywgJyAnKTtcblx0XHRyZXR1cm4gcztcblx0fTtcblxuXHQvLyBFc2NhcGUgc3BhY2VzIGFuZCBxdW90ZXMgZm9yIHVzZSBpbiBIVE1MIGNsYXNzZXMvaWRzXG5cdENpdGVUQi5lc2NTdHIgPSAocykgPT4ge1xuXHRcdHJldHVybiBzLnJlcGxhY2UoL1xccy9nLCAnLScpLnJlcGxhY2UoLycvZywgXCJcXFxcJ1wiKS5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJyk7XG5cdH07XG5cblx0Ly8gTUlTQyBGVU5DVElPTlNcblx0Ly8gRGV0ZXJtaW5lIHdoaWNoIHRlbXBsYXRlIGZvcm0gaXMgb3BlbiwgYW5kIGdldCB0aGUgdGVtcGxhdGUgb2JqZWN0IGZvciBpdFxuXHRDaXRlVEIuZ2V0T3BlblRlbXBsYXRlID0gKCkgPT4ge1xuXHRcdGNvbnN0IGRpYWxvZ3MgPSAkYm9keS5maW5kKCcudWktZGlhbG9nLWNvbnRlbnQudWktd2lkZ2V0LWNvbnRlbnQ6dmlzaWJsZScpO1xuXHRcdGNvbnN0IHRlbXBsYXRlbmFtZSA9ICQoZGlhbG9nc1swXSkuZmluZCgnLmNpdGUtdGVtcGxhdGUnKS52YWwoKTtcblx0XHRyZXR1cm4gQ2l0ZVRCLlRlbXBsYXRlc1t0ZW1wbGF0ZW5hbWVdO1xuXHR9O1xuXG5cdC8vIERpc3BsYXkgdGhlIHJlcG9ydCBmb3IgdGhlIGVycm9yIGNoZWNrc1xuXHRDaXRlVEIuZGlzcGxheUVycm9ycyA9IChlcnJvcnMpID0+IHtcblx0XHQkYm9keS5maW5kKCcjY2l0ZS1lcnItcmVwb3J0JykucmVtb3ZlKCk7XG5cdFx0Y29uc3QgdGFibGUgPSAkKCc8dGFibGU+JykuYXR0cignaWQnLCAnY2l0ZS1lcnItcmVwb3J0JykuY3NzKHtcblx0XHRcdHdpZHRoOiAnMTAwJScsXG5cdFx0XHRib3JkZXI6ICcxcHggc29saWQgI0E5QTlBOScsXG5cdFx0XHQnYmFja2dyb3VuZC1jb2xvcic6ICcjRkZFRkQ1Jyxcblx0XHRcdHBhZGRpbmc6ICcwLjI1ZW0nLFxuXHRcdFx0J21hcmdpbi10b3AnOiAnMC41ZW0nLFxuXHRcdH0pO1xuXHRcdCRib2R5LmZpbmQoJyNlZGl0cGFnZS1jb3B5d2FybicpLmJlZm9yZSh0YWJsZSk7XG5cdFx0bGV0IHRyO1xuXHRcdGNvbnN0IHRyMSA9ICQoJzx0cj4nKS5jc3MoJ3dpZHRoJywgJzEwMCUnKTtcblx0XHRjb25zdCB0aDEgPSAkKCc8dGg+JykuY3NzKCd3aWR0aCcsICc2MCUnKS5jc3MoJ2ZvbnQtc2l6ZScsICcxMTAlJykuaHRtbChnZXRNZXNzYWdlKCdjaXRlLWVyci1yZXBvcnQtaGVhZGluZycpKTtcblx0XHRjb25zdCB0aDIgPSAkKCc8dGg+JykuY3NzKCd3aWR0aCcsICc0MCUnKS5jc3MoJ3RleHQtYWxpZ24nLCAncmlnaHQ7Jyk7XG5cdFx0Y29uc3QgaW0gPSAkKCc8aW1nPicpLmF0dHIoXG5cdFx0XHQnc3JjJyxcblx0XHRcdCdodHRwczovL3R1Lnpob25nd2VuLndpa2kvaW1hZ2VzL3FpdXdlbmJhaWtlL3poL3RodW1iLzUvNTUvR3RrLXN0b3Auc3ZnLzIwcHgtR3RrLXN0b3Auc3ZnLnBuZydcblx0XHQpO1xuXHRcdGltLmF0dHIoJ2FsdCcsIGdldE1lc3NhZ2UoJ2NpdGUtZXJyLXJlcG9ydC1jbG9zZScpKS5hdHRyKCd0aXRsZScsIGdldE1lc3NhZ2UoJ2NpdGUtZXJyLXJlcG9ydC1jbG9zZScpKTtcblx0XHRjb25zdCBhZCA9ICQoJzxhPicpLmF0dHIoe1xuXHRcdFx0aWQ6ICdjaXRlLWVyci1jaGVjay1jbG9zZScsXG5cdFx0XHRocmVmOiAnIycsXG5cdFx0fSk7XG5cdFx0YWQuYXBwZW5kKGltKTtcblx0XHR0aDIuYXBwZW5kKGFkKTtcblx0XHR0cjEuYXBwZW5kKHRoMSkuYXBwZW5kKHRoMik7XG5cdFx0dGFibGUuYXBwZW5kKHRyMSk7XG5cdFx0JGJvZHkuZmluZCgnI2NpdGUtZXJyLWNoZWNrLWNsb3NlJykub24oJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0JGJvZHkuZmluZCgnI2NpdGUtZXJyLXJlcG9ydCcpLnJlbW92ZSgpO1xuXHRcdH0pO1xuXHRcdGlmIChlcnJvcnMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHR0ciA9ICQoJzx0cj4nKS5jc3MoJ3dpZHRoJywgJzEwMCUnKTtcblx0XHRcdGNvbnN0IHRkID0gJCgnPHRkPicpXG5cdFx0XHRcdC5jc3MoJ3RleHQtYWxpZ24nLCAnY2VudGVyJylcblx0XHRcdFx0LmNzcygnbWFyZ2luJywgJzEuNXB4Jylcblx0XHRcdFx0Lmh0bWwoZ2V0TWVzc2FnZSgnY2l0ZS1lcnItcmVwb3J0LWVtcHR5JykpO1xuXHRcdFx0dHIuYXBwZW5kKHRkKTtcblx0XHRcdHRhYmxlLmFwcGVuZCh0cik7XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Zm9yIChjb25zdCBlcnJvciBpbiBlcnJvcnMpIHtcblx0XHRcdGlmIChPYmplY3QuaGFzT3duKGVycm9ycywgZXJyb3IpKSB7XG5cdFx0XHRcdGNvbnN0IGVyciA9IGVycm9yc1tlcnJvcl07XG5cdFx0XHRcdHRyID0gJCgnPHRyPicpLmNzcygnd2lkdGgnLCAnMTAwJScpO1xuXHRcdFx0XHRjb25zdCB0ZDEgPSAkKCc8dGQ+Jylcblx0XHRcdFx0XHQuY3NzKHtcblx0XHRcdFx0XHRcdGJvcmRlcjogJzFweCBzb2xpZCAjMDAwJyxcblx0XHRcdFx0XHRcdG1hcmdpbjogJzEuNXB4Jyxcblx0XHRcdFx0XHRcdHdpZHRoOiAnNjAlJyxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5odG1sKGVyci5lcnIpO1xuXHRcdFx0XHRjb25zdCB0ZDIgPSAkKCc8dGQ+Jylcblx0XHRcdFx0XHQuY3NzKHtcblx0XHRcdFx0XHRcdGJvcmRlcjogJzFweCBzb2xpZCAjMDAwJyxcblx0XHRcdFx0XHRcdG1hcmdpbjogJzEuNXB4Jyxcblx0XHRcdFx0XHRcdHdpZHRoOiAnNDAlJyxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5odG1sKGdldE1lc3NhZ2UoZXJyLm1zZykpO1xuXHRcdFx0XHR0ci5hcHBlbmQodGQxKS5hcHBlbmQodGQyKTtcblx0XHRcdFx0dGFibGUuYXBwZW5kKHRyKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0Ly8gTG9hZCBjb25maWd1cmF0aW9uIGZvciBzaXRlXG5cdHJlZlRvb2xiYXJDb25maWcoKTtcblxuXHQvLyBFbmQgb2YgY29kZSBsb2FkZWQgb25seSBvbiBlZGl0XG59O1xuXG5leHBvcnQge3JlZlRvb2xiYXIyfTtcbiIsICIvKiBnbG9iYWwgQ2l0ZVRCICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnQgKi9cbi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vdXRpbC9nZXRNZXNzYWdlJztcblxuY29uc3QgcmVmVG9vbGJhckJhc2UgPSAoKSA9PiB7XG5cdHdpbmRvdy5DaXRlVEIgfHw9IHtcblx0XHRUZW1wbGF0ZXM6IHt9LCAvLyBBbGwgdGVtcGxhdGVzXG5cdFx0T3B0aW9uczoge30sIC8vIEdsb2JhbCBvcHRpb25zXG5cdFx0VXNlck9wdGlvbnM6IHt9LCAvLyBVc2VyIG9wdGlvbnNcblx0XHREZWZhdWx0T3B0aW9uczoge30sIC8vIFNjcmlwdCBkZWZhdWx0c1xuXHRcdEVycm9yQ2hlY2tzOiB7fSwgLy8gRXJyb3IgY2hlY2sgZnVuY3Rpb25zXG5cdH07XG5cblx0Ly8gQ2xhc3MgZm9yIGNpdGUgdGVtcGxhdGVzXG5cdHdpbmRvdy5DaXRlVGVtcGxhdGUgPSBjbGFzcyBDaXRlVGVtcGxhdGUge1xuXHRcdGNvbnN0cnVjdG9yKHRlbXBsYXRlbmFtZSwgc2hvcnRmb3JtLCBiYXNpY2ZpZWxkcywgZXhwYW5kZWRmaWVsZHMpIHtcblx0XHRcdC8vIFByb3BlcnRpZXNcblx0XHRcdHRoaXMudGVtcGxhdGVuYW1lID0gdGVtcGxhdGVuYW1lOyAvLyBUaGUgdGVtcGxhdGUgbmFtZSAtIFwiY2l0ZSB3ZWJcIiwgXCJjaXRlIGJvb2tcIiwgZXRjLlxuXHRcdFx0dGhpcy5zaG9ydGZvcm0gPSBzaG9ydGZvcm07IC8vIEEgc2hvcnQgZm9ybSwgdXNlZCBmb3IgdGhlIGRyb3Bkb3duIGJveFxuXHRcdFx0dGhpcy5iYXNpYyA9IGJhc2ljZmllbGRzOyAvLyBCYXNpYyBmaWVsZHMgLSBhdXRob3IsIHRpdGxlLCBwdWJsaXNoZXIuLi5cblxuXHRcdFx0Ly8gTGVzcyBjb21tb24gLSBxdW90ZSwgYXJjaGl2ZXVybCAtIHNob3VsZCBiZSBldmVyeXRoaW5nIHRoZSB0ZW1wbGF0ZSBzdXBwb3J0cyBtaW51cyB0aGUgYmFzaWMgb25lc1xuXHRcdFx0dGhpcy5leHRyYSA9IGV4cGFuZGVkZmllbGRzO1xuXHRcdFx0dGhpcy5pbmNyZW1lbnRhYmxlcyA9IHt9O1xuXG5cdFx0XHQvLyBBZGQgaXQgdG8gdGhlIGxpc3Rcblx0XHRcdENpdGVUQi5UZW1wbGF0ZXNbdGhpcy50ZW1wbGF0ZW5hbWVdID0gdGhpcztcblx0XHR9XG5cdFx0bWFrZUZvcm1Jbm5lcihmaWVsZHMsIGluY3JzZXR1cCkge1xuXHRcdFx0Y29uc3QgdHJzID0gW107XG5cdFx0XHRjb25zdCBhdXRvZmlsbHMgPSBbXTtcblx0XHRcdGxldCB0cjtcblx0XHRcdGZvciAoY29uc3QgW2ksIGZpZWxkb2JqXSBvZiBmaWVsZHMuZW50cmllcygpKSB7XG5cdFx0XHRcdGxldCB7ZmllbGR9ID0gZmllbGRvYmo7XG5cdFx0XHRcdGxldCBsYWJlbGZpZWxkID0gZmllbGRvYmouZmllbGQ7XG5cdFx0XHRcdGxldCBhZCA9IGZhbHNlO1xuXHRcdFx0XHRsZXQgaW07XG5cdFx0XHRcdGlmIChpbmNyc2V0dXAgJiYgZmllbGRvYmouaW5jcmVtZW50X2dyb3VwKSB7XG5cdFx0XHRcdFx0ZmllbGQgPSBmaWVsZG9iai5maWVsZC5yZXBsYWNlKCc8Tj4nLCAnMScpO1xuXHRcdFx0XHRcdGxhYmVsZmllbGQgPSBmaWVsZG9iai5maWVsZC5yZXBsYWNlKCc8Tj4nLCAnJyk7XG5cdFx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdFx0dGhpcy5pbmNyZW1lbnRhYmxlc1tmaWVsZG9iai5pbmNyZW1lbnRfZ3JvdXBdICYmXG5cdFx0XHRcdFx0XHQhdGhpcy5pbmNyZW1lbnRhYmxlc1tmaWVsZG9iai5pbmNyZW1lbnRfZ3JvdXBdLnNldHVwXG5cdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHQvLyBUaGUgb2JqZWN0IGhhcyBiZWVuIGNyZWF0ZWQsIGJ1dCBub3QgZnVsbHkgaW5pdGlhbGl6ZWRcblx0XHRcdFx0XHRcdHRoaXMuaW5jcmVtZW50YWJsZXNbZmllbGRvYmouaW5jcmVtZW50X2dyb3VwXS5maWVsZHMucHVzaChmaWVsZG9iaik7XG5cdFx0XHRcdFx0fSBlbHNlIGlmICghdGhpcy5pbmNyZW1lbnRhYmxlc1tmaWVsZG9iai5pbmNyZW1lbnRfZ3JvdXBdKSB7XG5cdFx0XHRcdFx0XHQvLyBPYmplY3Qgbm90IHlldCBjcmVhdGVkXG5cdFx0XHRcdFx0XHR0aGlzLmluY3JlbWVudGFibGVzW2ZpZWxkb2JqLmluY3JlbWVudF9ncm91cF0gPSB7XG5cdFx0XHRcdFx0XHRcdGZpZWxkczogW2ZpZWxkb2JqXSxcblx0XHRcdFx0XHRcdFx0dmFsOiAxLFxuXHRcdFx0XHRcdFx0XHRzZXR1cDogZmFsc2UsXG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoXG5cdFx0XHRcdFx0XHR0aGlzLmluY3JlbWVudGFibGVzW2ZpZWxkb2JqLmluY3JlbWVudF9ncm91cF0gJiZcblx0XHRcdFx0XHRcdHRoaXMuaW5jcmVtZW50YWJsZXNbZmllbGRvYmouaW5jcmVtZW50X2dyb3VwXS5zZXR1cFxuXHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0Ly8gRnVsbHkgaW5pdGlhbGl6ZWQgZnJvbSBhIHByZXZpb3VzIGludm9jYXRpb24gb2YgdGhpcyBmdW5jdGlvbiwganVzdCByZXNldHRpbmcgdGhlIG51bWJlclxuXHRcdFx0XHRcdFx0dGhpcy5pbmNyZW1lbnRhYmxlc1tmaWVsZG9iai5pbmNyZW1lbnRfZ3JvdXBdLnZhbCA9IDE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2UgaWYgKGZpZWxkb2JqLmluY3JlbWVudF9ncm91cCkge1xuXHRcdFx0XHRcdC8vIEFkZGluZyBhIG5ldyByb3dcblx0XHRcdFx0XHRjb25zdCBpbmNydmFsID0gdGhpcy5pbmNyZW1lbnRhYmxlc1tmaWVsZG9iai5pbmNyZW1lbnRfZ3JvdXBdLnZhbDtcblx0XHRcdFx0XHRmaWVsZCA9IGZpZWxkb2JqLmZpZWxkLnJlcGxhY2UoJzxOPicsIGluY3J2YWwudG9TdHJpbmcoKSk7XG5cdFx0XHRcdFx0bGFiZWxmaWVsZCA9IGZpZWxkb2JqLmZpZWxkLnJlcGxhY2UoJzxOPicsICcnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBhdXRvZGF0ZUZpZWxkcyA9IENpdGVUQi5nZXRPcHRpb24oJ2F1dG9kYXRlIGZpZWxkcycpO1xuXHRcdFx0XHRpZiAoYXV0b2RhdGVGaWVsZHMuaW5jbHVkZXMoZmllbGQpKSB7XG5cdFx0XHRcdFx0aW0gPSAkKCc8aW1nPicpLmF0dHIoXG5cdFx0XHRcdFx0XHQnc3JjJyxcblx0XHRcdFx0XHRcdCdodHRwczovL3R1Lnpob25nd2VuLndpa2kvaW1hZ2VzL3FpdXdlbmJhaWtlL3poL3RodW1iLzcvN2IvTnV2b2xhX2FwcHNfZGF0ZS5zdmcvMjBweC1OdXZvbGFfYXBwc19kYXRlLnN2Zy5wbmcnXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRpbS5hdHRyKCdhbHQnLCBnZXRNZXNzYWdlKCdjaXRlLWluc2VydC1kYXRlJykpLmF0dHIoJ3RpdGxlJywgZ2V0TWVzc2FnZSgnY2l0ZS1pbnNlcnQtZGF0ZScpKTtcblx0XHRcdFx0XHRhZCA9ICQoJzxhPicpLmF0dHIoJ2hyZWYnLCAnIycpO1xuXHRcdFx0XHRcdGFkLmFwcGVuZChpbSk7XG5cdFx0XHRcdFx0YWQuYXR0cignaWQnLCBgY2l0ZS1kYXRlLSR7Q2l0ZVRCLmVzY1N0cih0aGlzLnNob3J0Zm9ybSl9LSR7ZmllbGR9YCk7XG5cdFx0XHRcdFx0JChkb2N1bWVudCkub24oXG5cdFx0XHRcdFx0XHQnY2xpY2snLFxuXHRcdFx0XHRcdFx0YCNjaXRlLWRhdGUtJHtDaXRlVEIuZXNjU3RyKHRoaXMuc2hvcnRmb3JtKX0tJHtmaWVsZH1gLFxuXHRcdFx0XHRcdFx0Q2l0ZVRCLmZpbGxBY2Nlc3NkYXRlXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZmllbGRvYmouYXV0b2ZpbGxpZCkge1xuXHRcdFx0XHRcdGNvbnN0IGF1dG90eXBlID0gZmllbGRvYmouYXV0b2ZpbGxpZDtcblx0XHRcdFx0XHRpbSA9ICQoJzxpbWc+JykuYXR0cihcblx0XHRcdFx0XHRcdCdzcmMnLFxuXHRcdFx0XHRcdFx0J2h0dHBzOi8vdHUuemhvbmd3ZW4ud2lraS9pbWFnZXMvcWl1d2VuYmFpa2UvemgvdGh1bWIvMS8xNy9TeXN0ZW0tc2VhcmNoLnN2Zy8yMHB4LVN5c3RlbS1zZWFyY2guc3ZnLnBuZydcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGltLmF0dHIoJ2FsdCcsIGdldE1lc3NhZ2UoJ2NpdGUtYXV0b2ZpbGwtYWx0JykpLmF0dHIoJ3RpdGxlJywgZ2V0TWVzc2FnZSgnY2l0ZS1hdXRvZmlsbC1hbHQnKSk7XG5cdFx0XHRcdFx0YWQgPSAkKCc8YT4nKS5hdHRyKCdocmVmJywgJyMnKTtcblx0XHRcdFx0XHRhZC5hcHBlbmQoaW0pO1xuXHRcdFx0XHRcdGFkLmF0dHIoJ2lkJywgYGNpdGUtYXV0by0ke0NpdGVUQi5lc2NTdHIodGhpcy5zaG9ydGZvcm0pfS0ke2ZpZWxkfS0ke2F1dG90eXBlfWApO1xuXHRcdFx0XHRcdGF1dG9maWxscy5wdXNoKGAjY2l0ZS1hdXRvLSR7Q2l0ZVRCLmVzY1N0cih0aGlzLnNob3J0Zm9ybSl9LSR7ZmllbGR9LSR7YXV0b3R5cGV9YCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGZpZWxkb2JqLmluY3JlbWVudF9idXR0b24pIHtcblx0XHRcdFx0XHRjb25zdCBpbmNydHlwZSA9IGZpZWxkb2JqLmluY3JlbWVudF9ncm91cDtcblx0XHRcdFx0XHRpbSA9ICQoJzxpbWc+JykuYXR0cihcblx0XHRcdFx0XHRcdCdzcmMnLFxuXHRcdFx0XHRcdFx0J2h0dHBzOi8vdHUuemhvbmd3ZW4ud2lraS9pbWFnZXMvcWl1d2VuYmFpa2UvemgvdGh1bWIvYi9iOS9OdXZvbGFfYWN0aW9uX2VkaXRfYWRkLnN2Zy8yMHB4LU51dm9sYV9hY3Rpb25fZWRpdF9hZGQuc3ZnLnBuZydcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGltLmF0dHIoJ2FsdCcsIGdldE1lc3NhZ2UoJ2NpdGUtaW5jcmVtZW50LWFsdCcpKS5hdHRyKCd0aXRsZScsIGdldE1lc3NhZ2UoJ2NpdGUtaW5jcmVtZW50LWFsdCcpKTtcblx0XHRcdFx0XHRhZCA9ICQoJzxhPicpLmF0dHIoJ2hyZWYnLCAnIycpO1xuXHRcdFx0XHRcdGFkLmFwcGVuZChpbSk7XG5cdFx0XHRcdFx0YWQuYXR0cignaWQnLCBgY2l0ZS1pbmNyLSR7Q2l0ZVRCLmVzY1N0cih0aGlzLnNob3J0Zm9ybSl9LSR7aW5jcnR5cGV9YCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRsZXQgZGlzcGxheSA9IGdldE1lc3NhZ2UoYGNpdGUtJHtsYWJlbGZpZWxkfS1sYWJlbGApO1xuXHRcdFx0XHRpZiAodHlwZW9mIGRpc3BsYXkgIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0ZGlzcGxheSA9IGZpZWxkb2JqLmxhYmVsID8gQ2l0ZVRCLmZpeFN0cihmaWVsZG9iai5sYWJlbCkgOiBDaXRlVEIuZml4U3RyKGxhYmVsZmllbGQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IHRvb2x0aXAgPSBmaWVsZG9iai50b29sdGlwXG5cdFx0XHRcdFx0PyAkKCc8YWJicj4nKS5hdHRyKCd0aXRsZScsIGdldE1lc3NhZ2UoZmllbGRvYmoudG9vbHRpcCkpLmh0bWwoJCgnPHN1cD4nKS50ZXh0KCc/JykpXG5cdFx0XHRcdFx0OiBmYWxzZTtcblx0XHRcdFx0bGV0IGlucHV0ID0gJyc7XG5cdFx0XHRcdGlucHV0ID0gJCgnPGlucHV0PicpLmF0dHIoe1xuXHRcdFx0XHRcdHRhYmluZGV4OiAnMScsXG5cdFx0XHRcdFx0c3R5bGU6IGFkID8gJ3dpZHRoOiA4NSUnIDogJ3dpZHRoOiAxMDAlJyxcblx0XHRcdFx0XHR0eXBlOiAndGV4dCcsXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRpbnB1dC5hdHRyKCdpZCcsIGBjaXRlLSR7Q2l0ZVRCLmVzY1N0cih0aGlzLnNob3J0Zm9ybSl9LSR7ZmllbGR9YCk7XG5cdFx0XHRcdGlmIChmaWVsZG9iai5hdXRvZmlsbHByb3ApIHtcblx0XHRcdFx0XHRsZXQgY2xhc3NuYW1lID0gYGNpdGUtJHtDaXRlVEIuZXNjU3RyKHRoaXMuc2hvcnRmb3JtKX0tJHtmaWVsZG9iai5hdXRvZmlsbHByb3B9YDtcblx0XHRcdFx0XHRpZiAoZmllbGRvYmouaW5jcmVtZW50X2dyb3VwKSB7XG5cdFx0XHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWVkaWF3aWtpL2NsYXNzLWRvY1xuXHRcdFx0XHRcdFx0aW5wdXQuYWRkQ2xhc3MoYGNpdGUtJHtDaXRlVEIuZXNjU3RyKHRoaXMuc2hvcnRmb3JtKX0taW5jci0ke2ZpZWxkb2JqLmluY3JlbWVudF9ncm91cH1gKTtcblx0XHRcdFx0XHRcdGNsYXNzbmFtZSArPSBgLSR7dGhpcy5pbmNyZW1lbnRhYmxlc1tmaWVsZG9iai5pbmNyZW1lbnRfZ3JvdXBdLnZhbC50b1N0cmluZygpfWA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtZWRpYXdpa2kvY2xhc3MtZG9jXG5cdFx0XHRcdFx0aW5wdXQuYWRkQ2xhc3MoY2xhc3NuYW1lKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBsYWJlbCA9ICQoJzxsYWJlbD4nKTtcblx0XHRcdFx0bGFiZWwuYXR0cignZm9yJywgYGNpdGUtJHtDaXRlVEIuZXNjU3RyKHRoaXMuc2hvcnRmb3JtKX0tJHtmaWVsZH1gKS50ZXh0KGRpc3BsYXkpO1xuXHRcdFx0XHRpZiAodG9vbHRpcCkge1xuXHRcdFx0XHRcdGxhYmVsLmFwcGVuZCh0b29sdGlwKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRsZXQgc3R5bGUgPSAndGV4dC1hbGlnbjogcmlnaHQ7IHdpZHRoOiAyMCU7Jztcblx0XHRcdFx0aWYgKGkgJSAyID09PSAxKSB7XG5cdFx0XHRcdFx0c3R5bGUgKz0gJyBwYWRkaW5nLWxlZnQ6IDFlbTsnO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRyID0gJCgnPHRyPicpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IHRkMSA9ICQoJzx0ZD4nKS5hZGRDbGFzcygnY2l0ZS1mb3JtLXRkJykuYXR0cih7XG5cdFx0XHRcdFx0c3R5bGUsXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHR0ZDEuYXBwZW5kKGxhYmVsKTtcblx0XHRcdFx0dHIuYXBwZW5kKHRkMSk7XG5cdFx0XHRcdGNvbnN0IHRkMiA9ICQoJzx0ZD4nKS5hZGRDbGFzcygnY2l0ZS1mb3JtLXRkJykuY3NzKCd3aWR0aCcsICczMCUnKTtcblx0XHRcdFx0dGQyLmFwcGVuZChpbnB1dCk7XG5cdFx0XHRcdGlmIChhZCkge1xuXHRcdFx0XHRcdHRkMi5hcHBlbmQoYWQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRyLmFwcGVuZCh0ZDIpO1xuXHRcdFx0XHRpZiAoaSAlIDIgPT09IDApIHtcblx0XHRcdFx0XHR0cnMucHVzaCh0cik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGxldCBuZWVkc2V0dXAgPSBmYWxzZTtcblx0XHRcdGZvciAoY29uc3QgZyBpbiB0aGlzLmluY3JlbWVudGFibGVzKSB7XG5cdFx0XHRcdGlmICghdGhpcy5pbmNyZW1lbnRhYmxlc1tnXS5zZXR1cCkge1xuXHRcdFx0XHRcdG5lZWRzZXR1cCA9IHRydWU7XG5cdFx0XHRcdFx0JChkb2N1bWVudCkub24oJ2NsaWNrJywgYCNjaXRlLWluY3ItJHtDaXRlVEIuZXNjU3RyKHRoaXMuc2hvcnRmb3JtKX0tJHtnfWAsIENpdGVUQi5pbmNyZW1lbnRGaWVsZHMpO1xuXHRcdFx0XHRcdHRoaXMuaW5jcmVtZW50YWJsZXNbZ10uc2V0dXAgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAobmVlZHNldHVwIHx8IE9iamVjdC5rZXlzKHRoaXMuaW5jcmVtZW50YWJsZXMpLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKGNvbnN0IGF1dG9maWxsIG9mIGF1dG9maWxscykge1xuXHRcdFx0XHRcdCQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGF1dG9maWxsLCBDaXRlVEIuaW5pdEF1dG9maWxsKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRycztcblx0XHR9XG5cdFx0Ly8gZ2l2ZXMgYSBsaXR0bGUgYml0IG9mIEhUTUwgc28gdGhlIG9wZW4gZm9ybSBjYW4gYmUgaWRlbnRpZmllZFxuXHRcdGdldEluaXRpYWwoKSB7XG5cdFx0XHRjb25zdCBoaWRkZW4gPSAkKCc8aW5wdXQ+JykuYWRkQ2xhc3MoJ2NpdGUtdGVtcGxhdGUnKS5hdHRyKHtcblx0XHRcdFx0dHlwZTogJ2hpZGRlbicsXG5cdFx0XHRcdHZhbHVlOiB0aGlzLnRlbXBsYXRlbmFtZSxcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIGhpZGRlbjtcblx0XHR9XG5cdFx0Ly8gbWFrZXMgdGhlIGZvcm0gdXNlZCBpbiB0aGUgZGlhbG9nIGJveGVzXG5cdFx0Z2V0Rm9ybSgpIHtcblx0XHRcdGNvbnN0IG1haW4gPSAkKCc8ZGl2PicpLmFkZENsYXNzKCdjaXRlLWZvcm0tY29udGFpbmVyJyk7XG5cdFx0XHRjb25zdCBmb3JtMSA9ICQoJzx0YWJsZT4nKS5hZGRDbGFzcygnY2l0ZS1iYXNpYy1maWVsZHMnKS5jc3Moe1xuXHRcdFx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdFx0XHQnYmFja2dyb3VuZC1jb2xvcic6ICd0cmFuc3BhcmVudCcsXG5cdFx0XHR9KTtcblx0XHRcdGxldCB0cnMgPSB0aGlzLm1ha2VGb3JtSW5uZXIodGhpcy5iYXNpYywgdHJ1ZSk7XG5cdFx0XHRmb3IgKGNvbnN0IHRyIG9mIHRycykge1xuXHRcdFx0XHRmb3JtMS5hcHBlbmQodHIpO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgZm9ybTIgPSAkKCc8dGFibGU+JykuYWRkQ2xhc3MoJ2NpdGUtZXh0cmEtZmllbGRzJykuY3NzKHtcblx0XHRcdFx0d2lkdGg6ICcxMDAlJyxcblx0XHRcdFx0J2JhY2tncm91bmQtY29sb3InOiAndHJhbnNwYXJlbnQnLFxuXHRcdFx0XHRkaXNwbGF5OiAnbm9uZScsXG5cdFx0XHR9KTtcblx0XHRcdHRycyA9IHRoaXMubWFrZUZvcm1Jbm5lcih0aGlzLmV4dHJhLCB0cnVlKTtcblx0XHRcdGZvciAoY29uc3QgdHIgb2YgdHJzKSB7XG5cdFx0XHRcdGZvcm0yLmFwcGVuZCh0cik7XG5cdFx0XHR9XG5cdFx0XHRtYWluLmFwcGVuZChmb3JtMSkuYXBwZW5kKGZvcm0yKTtcblx0XHRcdGNvbnN0IGZvcm0zID0gJCgnPHRhYmxlPicpLmFkZENsYXNzKCdjaXRlLW90aGVyLWZpZWxkcycpLmNzcyh7XG5cdFx0XHRcdHdpZHRoOiAnMTAwJScsXG5cdFx0XHRcdCdiYWNrZ3JvdW5kLWNvbG9yJzogJ3RyYW5zcGFyZW50Jyxcblx0XHRcdFx0J3BhZGRpbmctdG9wJzogJzFlbScsXG5cdFx0XHR9KTtcblx0XHRcdGNvbnN0ICR0ciA9ICQoJzx0cj4nKTtcblx0XHRcdGNvbnN0ICR0ZDEgPSAkKCc8dGQ+JykuYWRkQ2xhc3MoJ2NpdGUtZm9ybS10ZCcpLmNzcyh7XG5cdFx0XHRcdCd0ZXh0LWFsaWduJzogJ3JpZ2h0Jyxcblx0XHRcdFx0d2lkdGg6ICcyMCUnLFxuXHRcdFx0fSk7XG5cdFx0XHRjb25zdCAkbGFiZWwxID0gJCgnPGxhYmVsPicpO1xuXHRcdFx0JGxhYmVsMS5hdHRyKCdmb3InLCBgY2l0ZS0ke0NpdGVUQi5lc2NTdHIodGhpcy5zaG9ydGZvcm0pfS1uYW1lYCkudGV4dChnZXRNZXNzYWdlKCdjaXRlLW5hbWUtbGFiZWwnKSk7XG5cdFx0XHQkdGQxLmFwcGVuZCgkbGFiZWwxKTtcblx0XHRcdGNvbnN0IHRkMiA9ICQoJzx0ZD4nKS5hZGRDbGFzcygnY2l0ZS1mb3JtLXRkJykuY3NzKCd3aWR0aCcsICczMCUnKTtcblx0XHRcdGNvbnN0IGlucHV0MSA9ICQoJzxpbnB1dD4nKS5hdHRyKHtcblx0XHRcdFx0dGFiaW5kZXg6ICcxJyxcblx0XHRcdFx0c3R5bGU6ICd3aWR0aDogMTAwJScsXG5cdFx0XHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHRcdH0pO1xuXHRcdFx0aW5wdXQxLmF0dHIoJ2lkJywgYGNpdGUtJHtDaXRlVEIuZXNjU3RyKHRoaXMuc2hvcnRmb3JtKX0tbmFtZWApO1xuXHRcdFx0dGQyLmFwcGVuZChpbnB1dDEpO1xuXHRcdFx0Y29uc3QgdGQzID0gJCgnPHRkPicpLmFkZENsYXNzKCdjaXRlLWZvcm0tdGQnKS5jc3Moe1xuXHRcdFx0XHQndGV4dC1hbGlnbic6ICdyaWdodCcsXG5cdFx0XHRcdCdwYWRkaW5nLWxlZnQnOiAnMWVtJyxcblx0XHRcdFx0d2lkdGg6ICcyMCUnLFxuXHRcdFx0fSk7XG5cdFx0XHRjb25zdCBsYWJlbDIgPSAkKCc8bGFiZWw+Jyk7XG5cdFx0XHRsYWJlbDIuYXR0cignZm9yJywgYGNpdGUtJHtDaXRlVEIuZXNjU3RyKHRoaXMuc2hvcnRmb3JtKX0tZ3JvdXBgKS50ZXh0KGdldE1lc3NhZ2UoJ2NpdGUtZ3JvdXAtbGFiZWwnKSk7XG5cdFx0XHR0ZDMuYXBwZW5kKGxhYmVsMik7XG5cdFx0XHRjb25zdCB0ZDQgPSAkKCc8dGQ+JykuYWRkQ2xhc3MoJ2NpdGUtZm9ybS10ZCcpLmNzcygnd2lkdGgnLCAnMzAlJyk7XG5cdFx0XHRjb25zdCBpbnB1dDIgPSAkKCc8aW5wdXQ+JykuYXR0cih7XG5cdFx0XHRcdHRhYmluZGV4OiAnMScsXG5cdFx0XHRcdHN0eWxlOiAnd2lkdGg6IDEwMCUnLFxuXHRcdFx0XHR0eXBlOiAndGV4dCcsXG5cdFx0XHR9KTtcblx0XHRcdGlucHV0Mi5hdHRyKCdpZCcsIGBjaXRlLSR7Q2l0ZVRCLmVzY1N0cih0aGlzLnNob3J0Zm9ybSl9LWdyb3VwYCk7XG5cdFx0XHR0ZDQuYXBwZW5kKGlucHV0Mik7XG5cdFx0XHQkdHIuYXBwZW5kKCR0ZDEpLmFwcGVuZCh0ZDIpLmFwcGVuZCh0ZDMpLmFwcGVuZCh0ZDQpO1xuXHRcdFx0Zm9ybTMuYXBwZW5kKCR0cik7XG5cdFx0XHRtYWluLmFwcGVuZChmb3JtMyk7XG5cdFx0XHRjb25zdCBleHRyYXMgPSAkKCc8ZGl2PicpO1xuXHRcdFx0ZXh0cmFzLmFwcGVuZChcblx0XHRcdFx0JCgnPGlucHV0PicpLmFkZENsYXNzKCdjaXRlLWZvcm0tc3RhdHVzJykuYXR0cih7XG5cdFx0XHRcdFx0dHlwZTogJ2hpZGRlbicsXG5cdFx0XHRcdFx0dmFsdWU6ICdjbG9zZWQnLFxuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0XHRcdGNvbnN0IGhpZGRlbiA9ICQoJzxpbnB1dD4nKS5hZGRDbGFzcygnY2l0ZS10ZW1wbGF0ZScpLmF0dHIoJ3R5cGUnLCAnaGlkZGVuJyk7XG5cdFx0XHRoaWRkZW4udmFsKHRoaXMudGVtcGxhdGVuYW1lKTtcblx0XHRcdGV4dHJhcy5hcHBlbmQoaGlkZGVuKTtcblx0XHRcdGNvbnN0IHNwYW4xID0gJCgnPHNwYW4+JykuYWRkQ2xhc3MoJ2NpdGUtcHJldmlldy1sYWJlbCcpLmNzcygnZGlzcGxheScsICdub25lJyk7XG5cdFx0XHRzcGFuMS50ZXh0KGdldE1lc3NhZ2UoJ2NpdGUtcmF3LXByZXZpZXcnKSk7XG5cdFx0XHRleHRyYXMuYXBwZW5kKHNwYW4xKS5hcHBlbmQoXG5cdFx0XHRcdCQoJzxkaXY+JykuYWRkQ2xhc3MoJ2NpdGUtcmVmLXByZXZpZXcnKS5jc3Moe1xuXHRcdFx0XHRcdHBhZGRpbmc6ICcwLjVlbScsXG5cdFx0XHRcdFx0J2ZvbnQtc2l6ZSc6ICcxMTAlJyxcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdFx0XHRjb25zdCBzcGFuMiA9ICQoJzxzcGFuPicpLmFkZENsYXNzKCdjaXRlLXByZXYtcGFyc2VkLWxhYmVsJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcblx0XHRcdHNwYW4yLnRleHQoZ2V0TWVzc2FnZSgnY2l0ZS1wYXJzZWQtbGFiZWwnKSk7XG5cdFx0XHRleHRyYXMuYXBwZW5kKHNwYW4yKS5hcHBlbmQoXG5cdFx0XHRcdCQoJzxkaXY+JykuYWRkQ2xhc3MoJ2NpdGUtcHJldmlldy1wYXJzZWQnKS5jc3Moe1xuXHRcdFx0XHRcdCdwYWRkaW5nLWJvdHRvbSc6ICcwLjVlbScsXG5cdFx0XHRcdFx0J2ZvbnQtc2l6ZSc6ICcxMTAlJyxcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdFx0XHRjb25zdCBsaW5rID0gJCgnPGE+JykuYWRkQ2xhc3MoJ2NpdGUtcHJldi1wYXJzZScpLmF0dHIoJ2hyZWYnLCAnIycpLmNzcyh7XG5cdFx0XHRcdG1hcmdpbjogJzAgMWVtJyxcblx0XHRcdFx0ZGlzcGxheTogJ25vbmUnLFxuXHRcdFx0XHRjb2xvcjogJyMwMDAwOGInLFxuXHRcdFx0fSk7XG5cdFx0XHRsaW5rLnRleHQoZ2V0TWVzc2FnZSgnY2l0ZS1mb3JtLXBhcnNlJykpO1xuXHRcdFx0ZXh0cmFzLmFwcGVuZChsaW5rKTtcblx0XHRcdG1haW4uYXBwZW5kKGV4dHJhcyk7XG5cdFx0XHRyZXR1cm4gbWFpbjtcblx0XHR9XG5cdH07XG5cdC8qKlxuXHQgKiBDbGFzcyBmb3IgZXJyb3IgY2hlY2tzXG5cdCAqIEZJWE1FOiBET0NTIE9VVCBPRiBEQVRFXG5cdCAqIHR5cGUgLSB0eXBlIG9mIGVycm9yIGNoZWNrIC0gY3VycmVudCBvcHRpb25zOlxuXHQgKiAqICdyZWZjaGVjaycgLSBhcHBseSBhIGZ1bmN0aW9uIG9uIGVhY2ggcmVmIGluZGl2aWR1YWxseVxuXHQgKiAtIGZ1bmN0aW9uIHNob3VsZCBhY2NlcHQgYSByZWYgb2JqZWN0LCByZXR1cm4gYSBzdHJpbmdcblx0ICogKiAncmVmbGlzdCcgLSBhcHBseSBhIGZ1bmN0aW9uIG9uIHRoZSBlbnRpcmUgcmVmIGxpc3Rcblx0ICogLSBmdW5jdGlvbiBzaG91bGQgYWNjZXB0IGFuIGFycmF5IG9mIHJlZiBvYmplY3RzLCByZXR1cm4gYW4gYXJyYXkgb2Ygc3RyaW5nc1xuXHQgKiAqICdzZWFyY2gnIC0gYXBwbHkgYSBmdW5jdGlvbiBybyB0aGUgcGFnZSB0ZXh0XG5cdCAqIC0gZnVuY3Rpb24gc2hvdWxkIGFjY2VwdCB0aGUgcGFnZSB0ZXh0IGFzIGEgc3RyaW5nLCByZXR1cm4gYW4gYXJyYXkgb2Ygc3RyaW5nc1xuXHQgKiBUaGUgc3RyaW5ncyByZXR1cm5lZCBieSB0aGUgZnVuY3Rpb24gc2hvdWxkIGJlIHZhbGlkIEhUTUxcblx0ICogZnVuY3Rpb24gLSBUaGUgZnVuY3Rpb24gZGVzY3JpYmVkIGFib3ZlIHRlc3RuYW1lIC0gTmFtZSBvZiB0aGUgZXJyb3IgY2hlY2ssIG11c3Qgbm90IGNvbnRhaW4gc3BhY2VzXG5cdCAqIGRlc2MgLSBBIHNob3J0IGRlc2NyaXB0aW9uIG9mIHRoZSB0ZXN0XG5cdCAqXG5cdCAqIEBwYXJhbSB7dW5rbm93bn0gb2JqXG5cdCAqL1xuXHR3aW5kb3cuQ2l0ZUVycm9yQ2hlY2sgPSBjbGFzcyBDaXRlRXJyb3JDaGVjayB7XG5cdFx0Y29uc3RydWN0b3Iob2JqKSB7XG5cdFx0XHR0aGlzLm9iaiA9IG9iajtcblxuXHRcdFx0Q2l0ZVRCLkVycm9yQ2hlY2tzW3RoaXMub2JqLnRlc3RuYW1lXSA9IHRoaXM7XG5cdFx0fVxuXHRcdHJ1bigpIHtcblx0XHRcdGxldCBlcnJvcnMgPSBbXTtcblx0XHRcdHN3aXRjaCAodGhpcy5vYmoudHlwZSkge1xuXHRcdFx0XHRjYXNlICdyZWZjaGVjayc6XG5cdFx0XHRcdFx0Q2l0ZVRCLmxvYWRSZWZzKCk7XG5cdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBDaXRlVEIubWFpblJlZkxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdGNvbnN0IGUgPSB0aGlzLm9iai5mdW5jKENpdGVUQi5tYWluUmVmTGlzdFtpXSk7XG5cdFx0XHRcdFx0XHRpZiAoZSkge1xuXHRcdFx0XHRcdFx0XHRlcnJvcnMucHVzaChlKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3JlZmxpc3QnOlxuXHRcdFx0XHRcdENpdGVUQi5sb2FkUmVmcygpO1xuXHRcdFx0XHRcdGVycm9ycyA9IHRoaXMub2JqLmZ1bmMoQ2l0ZVRCLm1haW5SZWZMaXN0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnc2VhcmNoJzoge1xuXHRcdFx0XHRcdGNvbnN0IHtmdW5jfSA9IHRoaXMub2JqO1xuXHRcdFx0XHRcdENpdGVUQi5nZXRQYWdlVGV4dCgodGV4dCkgPT4ge1xuXHRcdFx0XHRcdFx0ZXJyb3JzID0gZnVuYyh0ZXh0KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGVycm9ycztcblx0XHR9XG5cdFx0Z2V0Um93KCkge1xuXHRcdFx0Y29uc3Qgcm93ID0gJCgnPGxpPicpO1xuXHRcdFx0Y29uc3QgY2hlY2sgPSAkKCc8aW5wdXQ+JykuYXR0cih7XG5cdFx0XHRcdHR5cGU6ICdjaGVja2JveCcsXG5cdFx0XHRcdG5hbWU6ICdjaXRlLWVyci10ZXN0Jyxcblx0XHRcdH0pO1xuXHRcdFx0Y2hlY2suYXR0cigndmFsdWUnLCB0aGlzLm9iai50ZXN0bmFtZSk7XG5cdFx0XHRjb25zdCBsYWJlbCA9ICQoJzxsYWJlbD4nKS5odG1sKGdldE1lc3NhZ2UodGhpcy5vYmouZGVzYykpO1xuXHRcdFx0bGFiZWwuYXR0cignZm9yJywgdGhpcy5vYmoudGVzdG5hbWUpO1xuXHRcdFx0cm93LmFwcGVuZChjaGVjaykuYXBwZW5kKCcgJm5kYXNoOyAnKS5hcHBlbmQobGFiZWwpO1xuXHRcdFx0cmV0dXJuIHJvdztcblx0XHR9XG5cdH07XG5cblx0JChkb2N1bWVudCkuZmluZCgnaGVhZCcpLnRyaWdnZXIoJ3JlZnRvb2xiYXJiYXNlJyk7XG59O1xuXG5leHBvcnQge3JlZlRvb2xiYXJCYXNlfTtcbiIsICJpbXBvcnQge1dHX1VTRVJfTEFOR1VBR0V9IGZyb20gJy4vY29uc3RhbnQnO1xuXG5jb25zdCByZWZUb29sYmFyTWVzYWdlcyA9ICgpOiB2b2lkID0+IHtcblx0aWYgKFdHX1VTRVJfTEFOR1VBR0UgPT09ICdlbicpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Ly8gQWxsIHVzZXItZmFjaW5nIG1lc3NhZ2VzXG5cdC8vIFRPRE86IERvY3VtZW50IHVzYWdlXG5cdGlmIChbJ3poLWhhbnQnLCAnemgtaGsnLCAnemgtbW8nLCAnemgtdHcnXS5pbmNsdWRlcyhXR19VU0VSX0xBTkdVQUdFKSkge1xuXHRcdG13Lm1lc3NhZ2VzLnNldCh7XG5cdFx0XHQnY2l0ZS1zZWN0aW9uLWxhYmVsJzogJ+W8leeUqCcsXG5cdFx0XHQnY2l0ZS10ZW1wbGF0ZS1saXN0JzogJ+aooeadvycsXG5cdFx0XHQnY2l0ZS1uYW1lZC1yZWZzLWxhYmVsJzogJ+WQjOWQjeaWh+eNuycsXG5cdFx0XHQnY2l0ZS1uYW1lZC1yZWZzLXRpdGxlJzogJ+aPkuWFpeWQjOWQjeaWh+eNuycsXG5cdFx0XHQnY2l0ZS1uYW1lZC1yZWZzLWJ1dHRvbic6ICflt7Llkb3lkI3lj4PogIPmlofnjbsnLFxuXHRcdFx0J2NpdGUtbmFtZWQtcmVmcy1kcm9wZG93bic6ICflkIzlkI3mlofnjbsnLFxuXHRcdFx0Ly8gVXNlZCBvbiB0aGUgdG9wIG9mIHRoZSBuYW1lZCByZWZzIGxpc3QgZHJvcHNvd25cblx0XHRcdCdjaXRlLWVycm9yY2hlY2stbGFiZWwnOiAn6Yyv6Kqk5qqi5p+lJyxcblx0XHRcdCdjaXRlLWVycm9yY2hlY2stYnV0dG9uJzogJ+aqouafpemMr+iqpCcsXG5cdFx0XHQnY2l0ZS1kaWFsb2ctYmFzZSc6ICflvJXnlKgnLFxuXHRcdFx0J2NpdGUtZm9ybS1zdWJtaXQnOiAn5o+S5YWlJyxcblx0XHRcdCdjaXRlLWZvcm0tc2hvd2hpZGUnOiAn6aGv56S6L+maseiXj+mhjeWkluWNgOWfnycsXG5cdFx0XHQnY2l0ZS1uby1uYW1lZHJlZnMnOiAn5Zyo5pys6aCB5om+5LiN5Yiw5Lu75L2V5ZCM5ZCN5paH5427Jyxcblx0XHRcdCdjaXRlLW5hbWVkcmVmcy1pbnRybyc6ICflvp7liJflh7rnmoTlj4PogIPmlofnjbvnm67pjITkuK3pgbjmk4fkuIDlgIvlkI3lrZfjgILpu57mk4rjgIzmj5LlhaXjgI3mj5LlhaXkuIDlgIvlj4PogIPmlofnjbvliLDmlofmnKzkuK3jgIInLFxuXHRcdFx0J2NpdGUtcmF3LXByZXZpZXcnOiAnV2lraXRleHQ6Jyxcblx0XHRcdCdjaXRlLXBhcnNlZC1sYWJlbCc6ICfop6PmnpDlvoznmoR3aWtpdGV4dDonLFxuXHRcdFx0J2NpdGUtZm9ybS1wYXJzZSc6ICfpoa/npLrop6PmnpDlvoznmoTpoJDopr0nLFxuXHRcdFx0J2NpdGUtcmVmcHJldmlldyc6ICfpoJDopr0nLFxuXHRcdFx0J2NpdGUtbmFtZS1sYWJlbCc6ICdyZWblkI0nLFxuXHRcdFx0J2NpdGUtZ3JvdXAtbGFiZWwnOiAncmVm57WEJyxcblx0XHRcdCdjaXRlLWVycm9yY2hlY2stc3VibWl0JzogJ+aqouafpScsXG5cdFx0XHQnY2l0ZS1lcnJvcmNoZWNrLWhlYWRpbmcnOiAn5qqi5p+l5LiL5YiX6Yyv6Kqk77yaJyxcblx0XHRcdCdjaXRlLWVycm9yLXVuY2xvc2VkJzogJ+acqumXnOmWiTx0dD4mbHQ7cmVmJmd0OzwvdHQ+5qiZ6KiYJyxcblx0XHRcdCdjaXRlLWVycm9yLXNhbWVjb250ZW50JzogJ+acieebuOWQjOWFp+WuueeahOWPg+iAg+aWh+eNuycsXG5cdFx0XHQnY2l0ZS1lcnJvci10ZW1wbGF0ZXMnOiBg5Y+D6ICD5paH54275pyq5L2/55SoPGEgaHJlZj1cIiR7bXcudXRpbC5nZXRVcmwoJ0NhdGVnb3J5OuW8leeUqOaooeadvycpfVwiPuW8leeUqOaooeadvzwvYT5gLFxuXHRcdFx0J2NpdGUtZXJyb3ItcmVwZWF0ZWQnOiAn5aSa5YCL5Y+D6ICD5paH54275pyJ55u45ZCM5ZCN56ixJyxcblx0XHRcdCdjaXRlLWVycm9yLXVuZGVmJzogJ+acieacquWumue+qeeahOWQjOWQjeWPg+iAg+aWh+eNu+WcqOS9v+eUqCcsXG5cdFx0XHQnY2l0ZS1lcnJvci1zYW1lY29udGVudC1tc2cnOiAn5aSa5YCL5paH54275ZCr5pyJ55u45ZCM5YWn5a65OiAkMScsXG5cdFx0XHQnY2l0ZS1lcnJvci1yZXBlYXRlZC1tc2cnOiAn57Wm5aSa5YCL5Y+D6ICD5paH54275ZG95ZCNOiDjgIwkMeOAjScsXG5cdFx0XHQnY2l0ZS1lcnJvci10ZW1wbGF0ZXMtbXNnJzogJ+aykuacieS9v+eUqOaooeadvzogJDEnLFxuXHRcdFx0J2NpdGUtZm9ybS1yZXNldCc6ICfph43oqK3ooajllq4nLFxuXHRcdFx0J2NpdGUtbG9hZGluZyc6ICfovInlhaXmlbjmk5onLFxuXHRcdFx0Ly8gU2hvd24gd2hpbGUgcGFnZXRleHQgaXMgYmVpbmcgZG93bmxvYWRlZCBmcm9tIHRoZSBBUElcblx0XHRcdCdjaXRlLWluc2VydC1kYXRlJzogJ+aPkuWFpeeVtuWJjeaXpeacnycsXG5cdFx0XHQvLyBBbHQvdGl0bGUgdGV4dCBmb3IgXCJpbnNlcnQgZGF0ZVwiIGljb25cblx0XHRcdCdjaXRlLWVyci1yZXBvcnQtaGVhZGluZyc6ICflvJXnlKjpjK/oqqTloLHlkYonLFxuXHRcdFx0Ly8gSGVhZGluZyBmb3IgZXJyb3IgcmVwb3J0IHRhYmxlXG5cdFx0XHQnY2l0ZS1lcnItcmVwb3J0LWNsb3NlJzogJ+mXnOmWiScsXG5cdFx0XHQvLyBBbHQvdGl0bGUgdGV4dCBmb3IgXCJjbG9zZVwiIGljb24gb24gZXJyb3IgcmVwb3J0XG5cdFx0XHQnY2l0ZS1lcnItcmVwb3J0LWVtcHR5JzogJ+acquaJvuWIsOmMr+iqpCcsXG5cdFx0XHQvLyBNZXNzYWdlIGRpc3BsYXllZCBpbiB0aGUgZXJyb3IgcmVwb3J0IGxpc3QgaWYgdGhlcmUgYXJlIG5vIGVycm9yc1xuXHRcdFx0J2NpdGUtYXV0b2ZpbGwtYWx0JzogJ+iHquWLleWhq+WFhScsXG5cdFx0XHQvLyBBbHQgdGV4dCBmb3IgYXV0b2ZpbGwgYnV0dG9uIGltYWdlXG5cdFx0XHQnY2l0ZS1yZWYtdG9vbHRpcCc6ICfpjKjpu57nmoTmqJnorZjnrKbvvIjkvb/oqbLlvJXnlKjlj6/ku6XmiJDngrrlhafpg6jpgKPntZDnmoTnm67mqJnvvIknLFxuXHRcdFx0J2NpdGUtcG9zdHNjcmlwdC10b29sdGlwJzogJ+WmguaenOioreWumumAmeS4gOWPg+aVuO+8jOWJh+imhuiTi+S9v+eUqOWPpem7nue1guatouW8leaWh+eahOm7mOiqjeihjOeIsicsXG5cdFx0XHQnY2l0ZS1kaWFsb2ctd2ViJzogJ+e2sumggeW8leeUqCcsXG5cdFx0XHQnY2l0ZS1kaWFsb2ctbmV3cyc6ICfmlrDogZ7lvJXnlKgnLFxuXHRcdFx0J2NpdGUtZGlhbG9nLWJvb2snOiAn5pu457GN5byV55SoJyxcblx0XHRcdCdjaXRlLWRpYWxvZy1qb3VybmFsJzogJ+acn+WIiuW8leeUqCcsXG5cdFx0XHQnY2l0ZS1kaWFsb2ctY29uZmVyZW5jZSc6ICfmnIPorbDlvJXnlKgnLFxuXHRcdFx0J2NpdGUtZGlhbG9nLWVuY3ljbG9wZWRpYSc6ICfnmb7np5Hlhajmm7jlvJXnlKgnLFxuXHRcdFx0J2NpdGUtYXV0aG9yLWxhYmVsJzogJ+S9nOiAhScsXG5cdFx0XHQnY2l0ZS10aXRsZS1sYWJlbCc6ICfmqJnpoYwnLFxuXHRcdFx0J2NpdGUtdXJsLWxhYmVsJzogJ+e2suWdgCcsXG5cdFx0XHQnY2l0ZS13ZWJzaXRlLWxhYmVsJzogJ+e2suermeWQjeeosScsXG5cdFx0XHQnY2l0ZS13b3JrLWxhYmVsJzogJ+Wgsee0meaIlumbnOiqjCcsXG5cdFx0XHQnY2l0ZS1hZ2VuY3ktbGFiZWwnOiAn6YCa6KiK56S+Jyxcblx0XHRcdCdjaXRlLXB1Ymxpc2hlci1sYWJlbCc6ICflh7rniYjogIUnLFxuXHRcdFx0J2NpdGUtYWNjZXNzZGF0ZS1sYWJlbCc6ICflrZjlj5bml6XmnJ8nLFxuXHRcdFx0J2NpdGUtbGFzdC1sYWJlbCc6ICflp5MnLFxuXHRcdFx0J2NpdGUtZmlyc3QtbGFiZWwnOiAn5ZCNJyxcblx0XHRcdCdjaXRlLWF1dGhvcmxpbmstbGFiZWwnOiAn5L2c6ICF5qKd55uuJyxcblx0XHRcdCdjaXRlLWNvYXV0aG9ycy1sYWJlbCc6ICflhbbku5bkvZzogIUnLFxuXHRcdFx0J2NpdGUtbG9jYXRpb24tbGFiZWwnOiAn5Ye654mI5ZywJyxcblx0XHRcdCdjaXRlLXBhZ2UtbGFiZWwnOiAn5omA5Zyo6aCBJyxcblx0XHRcdCdjaXRlLXBhZ2VzLWxhYmVsJzogJ+mggeevhOWcjScsXG5cdFx0XHQnY2l0ZS1hdC1sYWJlbCc6ICfmm7jlhafpg6jliIYnLFxuXHRcdFx0J2NpdGUtbGFuZ3VhZ2UtbGFiZWwnOiAn6Kqe6KiAJyxcblx0XHRcdCdjaXRlLWZvcm1hdC1sYWJlbCc6ICfmlofku7bmoLzlvI8nLFxuXHRcdFx0J2NpdGUtZG9pLWxhYmVsJzogJ0RPSScsXG5cdFx0XHQnY2l0ZS1kYXRlLWxhYmVsJzogJ+aXpeacnycsXG5cdFx0XHQnY2l0ZS1tb250aC1sYWJlbCc6ICfmnIjku70nLFxuXHRcdFx0J2NpdGUteWVhci1sYWJlbCc6ICflubTku70nLFxuXHRcdFx0J2NpdGUtcXVvdGUtbGFiZWwnOiAn5pGY6YyEJyxcblx0XHRcdCdjaXRlLW5ld3NwYXBlci1sYWJlbCc6ICfmlrDogZ7lqpLpq5QnLFxuXHRcdFx0J2NpdGUtYXV0aG9yMi1sYWJlbCc6ICfnrKwy5L2c6ICFJyxcblx0XHRcdCdjaXRlLWF1dGhvcjMtbGFiZWwnOiAn56ysM+S9nOiAhScsXG5cdFx0XHQnY2l0ZS1hdXRob3I0LWxhYmVsJzogJ+esrDTkvZzogIUnLFxuXHRcdFx0J2NpdGUtYXV0aG9yNS1sYWJlbCc6ICfnrKw15L2c6ICFJyxcblx0XHRcdCdjaXRlLWFnZW5jeSc6ICfpgJroqIrnpL4nLFxuXHRcdFx0J2NpdGUtaXNzbi1sYWJlbCc6ICdJU1NOJyxcblx0XHRcdCdjaXRlLW9jbGMtbGFiZWwnOiAnT0NMQycsXG5cdFx0XHQnY2l0ZS1iaWJjb2RlLWxhYmVsJzogJ0JpYmNvZGUnLFxuXHRcdFx0J2NpdGUtaXNibi1sYWJlbCc6ICdJU0JOJyxcblx0XHRcdCdjaXRlLW90aGVycy1sYWJlbCc6ICfora/ogIUnLFxuXHRcdFx0J2NpdGUtZWRpdGlvbi1sYWJlbCc6ICfniYjmnKwnLFxuXHRcdFx0J2NpdGUtdHJhbnMtdGl0bGUtbGFiZWwnOiAn57+76K2v5b6M5qiZ6aGMJyxcblx0XHRcdCdjaXRlLXJlZi1sYWJlbCc6ICfpjKjpu57mqJnorZjnrKYnLFxuXHRcdFx0J2NpdGUtcG9zdHNjcmlwdC1sYWJlbCc6ICfnu5PlsL7nrKYnLFxuXHRcdFx0J2NpdGUtc2VyaWVzLWxhYmVsJzogJ+ezu+WIlycsXG5cdFx0XHQnY2l0ZS12b2x1bWUtbGFiZWwnOiAn5Y23Jyxcblx0XHRcdCdjaXRlLXVuaWZpZWQtbGFiZWwnOiAn57Wx5LiA5pu46JmfJyxcblx0XHRcdCdjaXRlLWNoYXB0ZXItbGFiZWwnOiAn56ug56+AJyxcblx0XHRcdCdjaXRlLWpvdXJuYWwtbGFiZWwnOiAn6Zuc6KqML+acn+WIiicsXG5cdFx0XHQnY2l0ZS1pc3N1ZS1sYWJlbCc6ICfmnJ8nLFxuXHRcdFx0J2NpdGUtcG1pZC1sYWJlbCc6ICdQTUlEJyxcblx0XHRcdCdjaXRlLWVkaXRvci1sYWJlbCc6ICfnt6jovK8nLFxuXHRcdFx0J2NpdGUtZWRpdG9yMS1maXJzdC1sYWJlbCc6ICfnt6jovK/lkI0nLFxuXHRcdFx0J2NpdGUtZWRpdG9yMS1sYXN0LWxhYmVsJzogJ+e3qOi8r+WnkycsXG5cdFx0XHQnY2l0ZS1lZGl0b3IxLWxpbmstbGFiZWwnOiAn57eo6Lyv5qKd55uuJyxcblx0XHRcdCdjaXRlLWVkaXRvci1maXJzdC1sYWJlbCc6ICfnt6jovK/lkI0nLFxuXHRcdFx0J2NpdGUtZWRpdG9yLWxhc3QtbGFiZWwnOiAn57eo6Lyv5aeTJyxcblx0XHRcdCdjaXRlLWVkaXRvci1saW5rLWxhYmVsJzogJ+e3qOi8r+aineebricsXG5cdFx0XHQnY2l0ZS1wbWMtbGFiZWwnOiAnUE1DJyxcblx0XHRcdCdjaXRlLWlkLWxhYmVsJzogJ0lEJyxcblx0XHRcdCdjaXRlLWxheXN1bW1hcnktbGFiZWwnOiAn57Ch5piO5pGY6KaBJyxcblx0XHRcdCdjaXRlLWxheXNvdXJjZS1sYWJlbCc6ICfnsKHmmI7mkZjopoHkvobmupAnLFxuXHRcdFx0J2NpdGUtbGF5ZGF0ZS1sYWJlbCc6ICfnsKHmmI7mkZjopoHml6XmnJ8nLFxuXHRcdFx0J2NpdGUtY29uZmVyZW5jZS1sYWJlbCc6ICfmnIPorbDlkI3nqLEnLFxuXHRcdFx0J2NpdGUtY29uZmVyZW5jZXVybC1sYWJlbCc6ICfmnIPorbDntrLlnYAnLFxuXHRcdFx0J2NpdGUtYm9va3RpdGxlLWxhYmVsJzogJ+irluaWh+mbhicsXG5cdFx0XHQnY2l0ZS1lbmN5Y2xvcGVkaWEtbGFiZWwnOiAn55m+56eR5YWo5pu45ZCNJyxcblx0XHRcdCdjaXRlLWF1dGhvcmxpbmstdG9vbHRpcCc6ICfoi6XoqbLkvZzogIXmnInmop3nm67vvIzloavlr6vmop3nm67lkI3nqLEnLFxuXHRcdFx0J2NpdGUtYXQtdG9vbHRpcCc6ICflhaflrrnlnKjkvobmupDkuK3nmoTkvY3nva7vvIjnlbbmjInpoIHnorzlvJXnlKjkuI3pgannlbbmmYLvvIknLFxuXHRcdFx0J2NpdGUtYWNjZXNzZGF0ZS10b29sdGlwJzogJ+ioquWVj+mAmeWAi+W8leeUqOS+hua6kOaZgueahOaXpeacnycsXG5cdFx0XHQnY2l0ZS1pZC10b29sdGlwJzogJ+WFtuS7lueahOaWh+eroOe3qOiZnycsXG5cdFx0XHQnY2l0ZS1zYW1lY29udGVudC1kZXNjJzogJ+aqouafpeWQq+acieebuOWQjOWFp+WuueeahOWkmuWAi+WPg+iAg+aWh+eNuycsXG5cdFx0XHQnY2l0ZS1zYW1lY29udGVudC1lcnJvcic6ICflpJrlgIvlj4PogIPmlofnjbvljIXlkKvmnInnm7jlkIzlhaflrrknLFxuXHRcdFx0J2NpdGUtcmVwZWF0ZWQtZGVzYyc6ICfkvb/nlKjnm7jlkIzlkI3lrZfnmoTlpJrlgIvlj4PogIPmlofnjbsnLFxuXHRcdFx0J2NpdGUtcmVwZWF0ZWQtZXJyb3InOiAn5aSa5YCL5Y+D6ICD5paH54275L2/55So5LqG55u45ZCM5ZCN5a2XJyxcblx0XHRcdCdjaXRlLXVuZGVmaW5lZC1kZXNjJzogJ+acquWumue+qeeahOWPg+iAg+aWh+eNuycsXG5cdFx0XHQnY2l0ZS11bmRlZmluZWQtZXJyb3InOiAn5LiA5YCL5bey5ZG95ZCN55qE5Y+D6ICD5paH54275bey57aT5L2/55So5L2G5piv5rKS5pyJ5a6a576pJyxcblx0XHRcdCdjaXRlLXdvcmstdG9vbHRpcCc6ICfliIrnmbvoqbLkvZzlk4HnmoTlh7rniYjniannmoTlkI3nqLHjgILoq4vkuI3opoHkvb/nlKjmlpzpq5QnLFxuXHRcdFx0J2NpdGUtbmV3c3BhcGVyLXRvb2x0aXAnOiAn5YiK55m76Kmy5paw6IGe55qE5Ye654mI54mp5ZCN56ixJyxcblx0XHRcdCdjaXRlLXNlcmllcy10b29sdGlwJzogJ+eVtuabuOexjeaYr+S4gOezu+WIl+WHuueJiOWTgeS4reeahOWFtuS4reS4gOmDqOS7veaZguS9v+eUqCcsXG5cdFx0XHQnY2l0ZS11bmlmaWVkLXRvb2x0aXAnOiAnMTk4MOW5tOS7o+S5i+WJjeS4reWci+aJgOS9v+eUqOeahOabuOexjee3qOiZnycsXG5cdFx0XHQnY2l0ZS1sYXlzdW1tYXJ5LXRvb2x0aXAnOiAn6Kmy5paH542755u46Zec55qE5paw6IGe5aCx6YGT55qEVVJMJyxcblx0XHRcdCdjaXRlLWxheXNvdXJjZS10b29sdGlwJzogJ+ipsuaWh+eNu+ebuOmXnOeahOaWsOiBnuWgsemBk+eahOWHuuiZlScsXG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0bXcubWVzc2FnZXMuc2V0KHtcblx0XHRcdCdjaXRlLXNlY3Rpb24tbGFiZWwnOiAn5byV55SoJyxcblx0XHRcdCdjaXRlLXRlbXBsYXRlLWxpc3QnOiAn5qih5p2/Jyxcblx0XHRcdCdjaXRlLW5hbWVkLXJlZnMtbGFiZWwnOiAn5ZCM5ZCN5paH54yuJyxcblx0XHRcdCdjaXRlLW5hbWVkLXJlZnMtdGl0bGUnOiAn5o+S5YWl5ZCM5ZCN5paH54yuJyxcblx0XHRcdCdjaXRlLW5hbWVkLXJlZnMtYnV0dG9uJzogJ+W3suWRveWQjeWPguiAg+aWh+eMricsXG5cdFx0XHQnY2l0ZS1uYW1lZC1yZWZzLWRyb3Bkb3duJzogJ+WQjOWQjeaWh+eMricsXG5cdFx0XHQvLyBVc2VkIG9uIHRoZSB0b3Agb2YgdGhlIG5hbWVkIHJlZnMgbGlzdCBkcm9wc293blxuXHRcdFx0J2NpdGUtZXJyb3JjaGVjay1sYWJlbCc6ICfplJnor6/mo4Dmn6UnLFxuXHRcdFx0J2NpdGUtZXJyb3JjaGVjay1idXR0b24nOiAn5qOA5p+l6ZSZ6K+vJyxcblx0XHRcdCdjaXRlLWRpYWxvZy1iYXNlJzogJ+W8leeUqCcsXG5cdFx0XHQnY2l0ZS1mb3JtLXN1Ym1pdCc6ICfmj5LlhaUnLFxuXHRcdFx0J2NpdGUtZm9ybS1zaG93aGlkZSc6ICfmmL7npLov6ZqQ6JeP6aKd5aSW5Yy65Z+fJyxcblx0XHRcdCdjaXRlLW5vLW5hbWVkcmVmcyc6ICflnKjmnKzpobXmib7kuI3liLDku7vkvZXlkIzlkI3mlofnjK4nLFxuXHRcdFx0J2NpdGUtbmFtZWRyZWZzLWludHJvJzogJ+S7juWIl+WHuueahOWPguiAg+aWh+eMruebruW9leS4remAieaLqeS4gOS4quWQjeWtl+OAgueCueWHu+KAnOaPkuWFpeKAneaPkuWFpeS4gOS4quWPguiAg+aWh+eMruWIsOaWh+acrOS4reOAgicsXG5cdFx0XHQnY2l0ZS1yYXctcHJldmlldyc6ICdXaWtpdGV4dDonLFxuXHRcdFx0J2NpdGUtcGFyc2VkLWxhYmVsJzogJ+ino+aekOWQjueahHdpa2l0ZXh0OicsXG5cdFx0XHQnY2l0ZS1mb3JtLXBhcnNlJzogJ+aYvuekuuino+aekOWQjueahOmihOiniCcsXG5cdFx0XHQnY2l0ZS1yZWZwcmV2aWV3JzogJ+mihOiniCcsXG5cdFx0XHQnY2l0ZS1uYW1lLWxhYmVsJzogJ3JlZuWQjScsXG5cdFx0XHQnY2l0ZS1ncm91cC1sYWJlbCc6ICdyZWbnu4QnLFxuXHRcdFx0J2NpdGUtZXJyb3JjaGVjay1zdWJtaXQnOiAn5qOA5p+lJyxcblx0XHRcdCdjaXRlLWVycm9yY2hlY2staGVhZGluZyc6ICfmo4Dmn6XkuIvliJfplJnor6/vvJonLFxuXHRcdFx0J2NpdGUtZXJyb3ItdW5jbG9zZWQnOiAn5pyq5YWz6ZetPHR0PiZsdDtyZWYmZ3Q7PC90dD7moIforrAnLFxuXHRcdFx0J2NpdGUtZXJyb3Itc2FtZWNvbnRlbnQnOiAn5pyJ55u45ZCM5YaF5a6555qE5Y+C6ICD5paH54yuJyxcblx0XHRcdCdjaXRlLWVycm9yLXRlbXBsYXRlcyc6IGDlj4LogIPmlofnjK7mnKrkvb/nlKg8YSBocmVmPVwiJHttdy51dGlsLmdldFVybCgnQ2F0ZWdvcnk65byV55So5qih5p2/Jyl9XCI+5byV55So5qih5p2/PC9hPmAsXG5cdFx0XHQnY2l0ZS1lcnJvci1yZXBlYXRlZCc6ICflpJrkuKrlj4LogIPmlofnjK7mnInnm7jlkIzlkI3np7AnLFxuXHRcdFx0J2NpdGUtZXJyb3ItdW5kZWYnOiAn5pyJ5pyq5a6a5LmJ55qE5ZCM5ZCN5Y+C6ICD5paH54yu5Zyo5L2/55SoJyxcblx0XHRcdCdjaXRlLWVycm9yLXNhbWVjb250ZW50LW1zZyc6ICflpJrkuKrmlofnjK7lkKvmnInnm7jlkIzlhoXlrrk6ICQxJyxcblx0XHRcdCdjaXRlLWVycm9yLXJlcGVhdGVkLW1zZyc6ICfnu5nlpJrkuKrlj4LogIPmlofnjK7lkb3lkI06IOKAnCQx4oCdJyxcblx0XHRcdCdjaXRlLWVycm9yLXRlbXBsYXRlcy1tc2cnOiAn5rKh5pyJ5L2/55So5qih5p2/OiAkMScsXG5cdFx0XHQnY2l0ZS1mb3JtLXJlc2V0JzogJ+mHjeiuvuihqOWNlScsXG5cdFx0XHQnY2l0ZS1sb2FkaW5nJzogJ+i9veWFpeaVsOaNricsXG5cdFx0XHQvLyBTaG93biB3aGlsZSBwYWdldGV4dCBpcyBiZWluZyBkb3dubG9hZGVkIGZyb20gdGhlIEFQSVxuXHRcdFx0J2NpdGUtaW5zZXJ0LWRhdGUnOiAn5o+S5YWl5b2T5YmN5pel5pyfJyxcblx0XHRcdC8vIEFsdC90aXRsZSB0ZXh0IGZvciBcImluc2VydCBkYXRlXCIgaWNvblxuXHRcdFx0J2NpdGUtZXJyLXJlcG9ydC1oZWFkaW5nJzogJ+W8leeUqOmUmeivr+aKpeWRiicsXG5cdFx0XHQvLyBIZWFkaW5nIGZvciBlcnJvciByZXBvcnQgdGFibGVcblx0XHRcdCdjaXRlLWVyci1yZXBvcnQtY2xvc2UnOiAn5YWz6ZetJyxcblx0XHRcdC8vIEFsdC90aXRsZSB0ZXh0IGZvciBcImNsb3NlXCIgaWNvbiBvbiBlcnJvciByZXBvcnRcblx0XHRcdCdjaXRlLWVyci1yZXBvcnQtZW1wdHknOiAn5pyq5om+5Yiw6ZSZ6K+vJyxcblx0XHRcdC8vIE1lc3NhZ2UgZGlzcGxheWVkIGluIHRoZSBlcnJvciByZXBvcnQgbGlzdCBpZiB0aGVyZSBhcmUgbm8gZXJyb3JzXG5cdFx0XHQnY2l0ZS1hdXRvZmlsbC1hbHQnOiAn6Ieq5Yqo5aGr5YWFJyxcblx0XHRcdC8vIEFsdCB0ZXh0IGZvciBhdXRvZmlsbCBidXR0b24gaW1hZ2Vcblx0XHRcdCdjaXRlLXJlZi10b29sdGlwJzogJ+mUmueCueeahOagh+ivhuespu+8iOS9v+ivpeW8leeUqOWPr+S7peaIkOS4uuWGhemDqOmTvuaOpeeahOebruagh++8iScsXG5cdFx0XHQnY2l0ZS1wb3N0c2NyaXB0LXRvb2x0aXAnOiAn5aaC5p6c6K6+5a6a6L+Z5LiA5Y+C5pWw77yM5YiZ6KaG55uW5L2/55So5Y+l54K557uI5q2i5byV5paH55qE6buY6K6k6KGM5Li6Jyxcblx0XHRcdCdjaXRlLWRpYWxvZy13ZWInOiAn572R6aG15byV55SoJyxcblx0XHRcdCdjaXRlLWRpYWxvZy1uZXdzJzogJ+aWsOmXu+W8leeUqCcsXG5cdFx0XHQnY2l0ZS1kaWFsb2ctYm9vayc6ICfkuabnsY3lvJXnlKgnLFxuXHRcdFx0J2NpdGUtZGlhbG9nLWpvdXJuYWwnOiAn5pyf5YiK5byV55SoJyxcblx0XHRcdCdjaXRlLWRpYWxvZy1jb25mZXJlbmNlJzogJ+S8muiuruW8leeUqCcsXG5cdFx0XHQnY2l0ZS1kaWFsb2ctZW5jeWNsb3BlZGlhJzogJ+eZvuenkeWFqOS5puW8leeUqCcsXG5cdFx0XHQnY2l0ZS1hdXRob3ItbGFiZWwnOiAn5L2c6ICFJyxcblx0XHRcdCdjaXRlLXRpdGxlLWxhYmVsJzogJ+agh+mimCcsXG5cdFx0XHQnY2l0ZS11cmwtbGFiZWwnOiAn572R5Z2AJyxcblx0XHRcdCdjaXRlLXdlYnNpdGUtbGFiZWwnOiAn572R56uZ5ZCN56ewJyxcblx0XHRcdCdjaXRlLXdvcmstbGFiZWwnOiAn5oql57q45oiW5p2C5b+XJyxcblx0XHRcdCdjaXRlLWFnZW5jeS1sYWJlbCc6ICfpgJrorq/npL4nLFxuXHRcdFx0J2NpdGUtcHVibGlzaGVyLWxhYmVsJzogJ+WHuueJiOiAhScsXG5cdFx0XHQnY2l0ZS1hY2Nlc3NkYXRlLWxhYmVsJzogJ+iuv+mXruaXpeacnycsXG5cdFx0XHQnY2l0ZS1sYXN0LWxhYmVsJzogJ+WnkycsXG5cdFx0XHQnY2l0ZS1maXJzdC1sYWJlbCc6ICflkI0nLFxuXHRcdFx0J2NpdGUtYXV0aG9ybGluay1sYWJlbCc6ICfkvZzogIXmnaHnm64nLFxuXHRcdFx0J2NpdGUtY29hdXRob3JzLWxhYmVsJzogJ+WFtuS7luS9nOiAhScsXG5cdFx0XHQnY2l0ZS1sb2NhdGlvbi1sYWJlbCc6ICflh7rniYjlnLAnLFxuXHRcdFx0J2NpdGUtcGFnZS1sYWJlbCc6ICfmiYDlnKjpobUnLFxuXHRcdFx0J2NpdGUtcGFnZXMtbGFiZWwnOiAn6aG16IyD5Zu0Jyxcblx0XHRcdCdjaXRlLWF0LWxhYmVsJzogJ+S5puWGhemDqOWIhicsXG5cdFx0XHQnY2l0ZS1sYW5ndWFnZS1sYWJlbCc6ICfor63oqIAnLFxuXHRcdFx0J2NpdGUtZm9ybWF0LWxhYmVsJzogJ+aWh+aho+agvOW8jycsXG5cdFx0XHQnY2l0ZS1kb2ktbGFiZWwnOiAnRE9JJyxcblx0XHRcdCdjaXRlLWRhdGUtbGFiZWwnOiAn5pel5pyfJyxcblx0XHRcdCdjaXRlLW1vbnRoLWxhYmVsJzogJ+aciOS7vScsXG5cdFx0XHQnY2l0ZS15ZWFyLWxhYmVsJzogJ+W5tOS7vScsXG5cdFx0XHQnY2l0ZS1xdW90ZS1sYWJlbCc6ICfmkZjlvZUnLFxuXHRcdFx0J2NpdGUtbmV3c3BhcGVyLWxhYmVsJzogJ+aWsOmXu+WqkuS9kycsXG5cdFx0XHQnY2l0ZS1hdXRob3IyLWxhYmVsJzogJ+esrDLkvZzogIUnLFxuXHRcdFx0J2NpdGUtYXV0aG9yMy1sYWJlbCc6ICfnrKwz5L2c6ICFJyxcblx0XHRcdCdjaXRlLWF1dGhvcjQtbGFiZWwnOiAn56ysNOS9nOiAhScsXG5cdFx0XHQnY2l0ZS1hdXRob3I1LWxhYmVsJzogJ+esrDXkvZzogIUnLFxuXHRcdFx0J2NpdGUtYWdlbmN5JzogJ+mAmuiur+ekvicsXG5cdFx0XHQnY2l0ZS1pc3NuLWxhYmVsJzogJ0lTU04nLFxuXHRcdFx0J2NpdGUtb2NsYy1sYWJlbCc6ICdPQ0xDJyxcblx0XHRcdCdjaXRlLWJpYmNvZGUtbGFiZWwnOiAnQmliY29kZScsXG5cdFx0XHQnY2l0ZS1pc2JuLWxhYmVsJzogJ0lTQk4nLFxuXHRcdFx0J2NpdGUtb3RoZXJzLWxhYmVsJzogJ+ivkeiAhScsXG5cdFx0XHQnY2l0ZS1lZGl0aW9uLWxhYmVsJzogJ+eJiOacrCcsXG5cdFx0XHQnY2l0ZS10cmFucy10aXRsZS1sYWJlbCc6ICfnv7vor5HlkI7moIfpopgnLFxuXHRcdFx0J2NpdGUtcmVmLWxhYmVsJzogJ+mUmueCueagh+ivhuespicsXG5cdFx0XHQnY2l0ZS1wb3N0c2NyaXB0LWxhYmVsJzogJ+e7k+WwvuespicsXG5cdFx0XHQnY2l0ZS1zZXJpZXMtbGFiZWwnOiAn57O75YiXJyxcblx0XHRcdCdjaXRlLXZvbHVtZS1sYWJlbCc6ICfljbcnLFxuXHRcdFx0J2NpdGUtdW5pZmllZC1sYWJlbCc6ICfnu5/kuIDkuablj7cnLFxuXHRcdFx0J2NpdGUtY2hhcHRlci1sYWJlbCc6ICfnq6DoioInLFxuXHRcdFx0J2NpdGUtam91cm5hbC1sYWJlbCc6ICfmnYLlv5cv5pyf5YiKJyxcblx0XHRcdCdjaXRlLWlzc3VlLWxhYmVsJzogJ+acnycsXG5cdFx0XHQnY2l0ZS1wbWlkLWxhYmVsJzogJ1BNSUQnLFxuXHRcdFx0J2NpdGUtZWRpdG9yLWxhYmVsJzogJ+e8lui+kScsXG5cdFx0XHQnY2l0ZS1lZGl0b3IxLWZpcnN0LWxhYmVsJzogJ+e8lui+keWQjScsXG5cdFx0XHQnY2l0ZS1lZGl0b3IxLWxhc3QtbGFiZWwnOiAn57yW6L6R5aeTJyxcblx0XHRcdCdjaXRlLWVkaXRvcjEtbGluay1sYWJlbCc6ICfnvJbovpHmnaHnm64nLFxuXHRcdFx0J2NpdGUtZWRpdG9yLWZpcnN0LWxhYmVsJzogJ+e8lui+keWQjScsXG5cdFx0XHQnY2l0ZS1lZGl0b3ItbGFzdC1sYWJlbCc6ICfnvJbovpHlp5MnLFxuXHRcdFx0J2NpdGUtZWRpdG9yLWxpbmstbGFiZWwnOiAn57yW6L6R5p2h55uuJyxcblx0XHRcdCdjaXRlLXBtYy1sYWJlbCc6ICdQTUMnLFxuXHRcdFx0J2NpdGUtaWQtbGFiZWwnOiAnSUQnLFxuXHRcdFx0J2NpdGUtbGF5c3VtbWFyeS1sYWJlbCc6ICfnroDmmI7mkZjopoEnLFxuXHRcdFx0J2NpdGUtbGF5c291cmNlLWxhYmVsJzogJ+eugOaYjuaRmOimgeadpea6kCcsXG5cdFx0XHQnY2l0ZS1sYXlkYXRlLWxhYmVsJzogJ+eugOaYjuaRmOimgeaXpeacnycsXG5cdFx0XHQnY2l0ZS1jb25mZXJlbmNlLWxhYmVsJzogJ+S8muiuruWQjeensCcsXG5cdFx0XHQnY2l0ZS1jb25mZXJlbmNldXJsLWxhYmVsJzogJ+S8muiurue9keWdgCcsXG5cdFx0XHQnY2l0ZS1ib29rdGl0bGUtbGFiZWwnOiAn6K665paH6ZuGJyxcblx0XHRcdCdjaXRlLWVuY3ljbG9wZWRpYS1sYWJlbCc6ICfnmb7np5HlhajkuablkI0nLFxuXHRcdFx0J2NpdGUtYXV0aG9ybGluay10b29sdGlwJzogJ+iLpeivpeS9nOiAheacieadoeebru+8jOWhq+WGmeadoeebruWQjeensCcsXG5cdFx0XHQnY2l0ZS1hdC10b29sdGlwJzogJ+WGheWuueWcqOadpea6kOS4reeahOS9jee9ru+8iOW9k+aMiemhteeggeW8leeUqOS4jemAguW9k+aXtu+8iScsXG5cdFx0XHQnY2l0ZS1hY2Nlc3NkYXRlLXRvb2x0aXAnOiAn6K6/6Zeu6L+Z5Liq5byV55So5p2l5rqQ5pe255qE5pel5pyfJyxcblx0XHRcdCdjaXRlLWlkLXRvb2x0aXAnOiAn5YW25LuW55qE5paH56ug57yW5Y+3Jyxcblx0XHRcdCdjaXRlLXNhbWVjb250ZW50LWRlc2MnOiAn5qOA5p+l5ZCr5pyJ55u45ZCM5YaF5a6555qE5aSa5Liq5Y+C6ICD5paH54yuJyxcblx0XHRcdCdjaXRlLXNhbWVjb250ZW50LWVycm9yJzogJ+WkmuS4quWPguiAg+aWh+eMruWMheWQq+acieebuOWQjOWGheWuuScsXG5cdFx0XHQnY2l0ZS1yZXBlYXRlZC1kZXNjJzogJ+S9v+eUqOebuOWQjOWQjeWtl+eahOWkmuS4quWPguiAg+aWh+eMricsXG5cdFx0XHQnY2l0ZS1yZXBlYXRlZC1lcnJvcic6ICflpJrkuKrlj4LogIPmlofnjK7kvb/nlKjkuobnm7jlkIzlkI3lrZcnLFxuXHRcdFx0J2NpdGUtdW5kZWZpbmVkLWRlc2MnOiAn5pyq5a6a5LmJ55qE5Y+C6ICD5paH54yuJyxcblx0XHRcdCdjaXRlLXVuZGVmaW5lZC1lcnJvcic6ICfkuIDkuKrlt7Llkb3lkI3nmoTlj4LogIPmlofnjK7lt7Lnu4/kvb/nlKjkvYbmmK/msqHmnInlrprkuYknLFxuXHRcdFx0J2NpdGUtd29yay10b29sdGlwJzogJ+WIiueZu+ivpeS9nOWTgeeahOWHuueJiOeJqeeahOWQjeensOOAguivt+S4jeimgeS9v+eUqOaWnOS9kycsXG5cdFx0XHQnY2l0ZS1uZXdzcGFwZXItdG9vbHRpcCc6ICfliIrnmbvoqbLmlrDogZ7nmoTlh7rniYjnianlkI3np7AnLFxuXHRcdFx0J2NpdGUtc2VyaWVzLXRvb2x0aXAnOiAn5b2T5Lmm57GN5piv5LiA57O75YiX5Ye654mI5ZOB5Lit55qE5YW25Lit5LiA6YOo5Lu95pe25L2/55SoJyxcblx0XHRcdCdjaXRlLXVuaWZpZWQtdG9vbHRpcCc6ICcxOTgw5bm05Luj5LmL5YmN5Lit5Zu95omA5L2/55So55qE5Lmm57GN57yW5Y+3Jyxcblx0XHRcdCdjaXRlLWxheXN1bW1hcnktdG9vbHRpcCc6ICfor6XmlofnjK7nm7jlhbPnmoTmlrDpl7vmiqXpgZPnmoRVUkwnLFxuXHRcdFx0J2NpdGUtbGF5c291cmNlLXRvb2x0aXAnOiAn6K+l5paH54yu55u45YWz55qE5paw6Ze75oql6YGT55qE5Ye65aSEJyxcblx0XHR9KTtcblx0fVxufTtcblxuZXhwb3J0IHtyZWZUb29sYmFyTWVzYWdlc307XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUEsd0ZBQUFBLFNBQUE7QUFBQTtBQUNBLFFBQUksUUFBUSxTQUFVLElBQUk7QUFDeEIsYUFBTyxNQUFNLEdBQUcsU0FBUyxRQUFRO0FBQUEsSUFDbkM7QUFHQSxJQUFBQSxRQUFPO0FBQUEsSUFFTCxNQUFNLE9BQU8sY0FBYyxZQUFZLFVBQVUsS0FDakQsTUFBTSxPQUFPLFVBQVUsWUFBWSxNQUFNO0FBQUEsSUFFekMsTUFBTSxPQUFPLFFBQVEsWUFBWSxJQUFJLEtBQ3JDLE1BQU0sT0FBTyxVQUFVLFlBQVksTUFBTSxLQUN6QyxNQUFNLE9BQU8sV0FBUSxZQUFZLE9BQUk7QUFBQSxJQUVwQywyQkFBWTtBQUFFLGFBQU87QUFBQSxJQUFNLEVBQUcsS0FB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M0IsMkJBQTJCO01BQzNCLG1CQUFtQjtNQUNuQiwyQkFBMkI7TUFDM0IsbUJBQW1CO01BQ25CLHlCQUF5QjtNQUN6QiwwQkFBMEI7TUFDMUIsc0JBQXNCO01BQ3RCLHVCQUF1QjtNQUN2Qix1QkFBdUI7TUFDdkIsd0JBQXdCO01BQ3hCLHFCQUFxQjtNQUNyQiwwQkFBMEI7TUFDMUIsdUJBQXVCO01BQ3ZCLHdCQUF3QjtNQUN4QiwyQkFBMkI7TUFDM0IsMEJBQTBCO0lBQzNCLENBQUM7RUFDRjtBQUNEOztDTi9QQyxNQUFZO0FBRVosTUFBSSxDQUFDNVcsK0JBQStCRiwwQkFBMEIsWUFBWTtBQUN6RTtFQUNEO0FBRUEsTUFBSSxDQUFDSCxHQUFHa1gsS0FBS3RQLFFBQVExSCxJQUFJLGdCQUFnQixHQUFHO0FBQzNDO0VBQ0Q7QUFFQSxNQUFJaUYsU0FBU2dTLGNBQWMscUNBQXFDLEdBQUc7QUFDbEU7RUFDRDtBQUdBTCxvQkFBa0I7QUFFbEJsRCxpQkFBZTtBQUNmLFFBQUEsR0FBS3JULG1CQUFBNlcsU0FBUSxFQUFFakwsS0FBS3pILFdBQVc7QUFDaEMsR0FBRzsiLAogICJuYW1lcyI6IFsibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbCIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIlN5bWJvbCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAiZG9jdW1lbnQiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAiVHlwZUVycm9yIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIiQiLCAiV0dfQUNUSU9OIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiV0dfUEFHRV9DT05URU5UX01PREVMIiwgIldHX1VTRVJfTEFOR1VBR0UiLCAiSVNfV0dfRURJVF9PUl9TVUJNSVRfQUNUSU9OIiwgImluY2x1ZGVzIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImFwaSIsICJpbml0TXdBcGkiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiYXJncyIsICJsZW5ndGgiLCAibWVzc2FnZSIsICJwYXJzZSIsICJwbGFpbiIsICJyZWZUb29sYmFyQ29uZmlnIiwgIkNpdGVUZW1wbGF0ZSIsICJDaXRlRXJyb3JDaGVjayIsICJ3aW5kb3ciLCAiQ2l0ZVRCIiwgIk9wdGlvbnMiLCAibW9udGhzIiwgIm1vZGFsIiwgImF1dG9wYXJzZSIsICJleHBhbmR0ZW1wbGF0ZXMiLCAiZmllbGQiLCAiaW5jcmVtZW50X2dyb3VwIiwgImluY3JlbWVudF9idXR0b24iLCAiYXV0b2ZpbGxwcm9wIiwgImF1dG9maWxsaWQiLCAidG9vbHRpcCIsICJ0eXBlIiwgInRlc3RuYW1lIiwgImRlc2MiLCAiZnVuYyIsICJyZWZsaXN0IiwgImVycm9ycyIsICJyZWZzMiIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiZWxlbWVudCIsICJ2YWx1ZSIsICJzaG9ydHRhZyIsICJjb250ZW50IiwgInB1c2giLCAiZXJyIiwgImUiLCAiZiIsICJyZXQiLCAiX2kiLCAiX2Vycm9ycyIsICJlcnJvciIsICJtc2ciLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAicmVmbmFtZSIsICJfaTIiLCAiX2Vycm9yczIiLCAibG9uZ3JlZnMiLCAiX2kzIiwgIl9PYmplY3QkdmFsdWVzIiwgIk9iamVjdCIsICJ2YWx1ZXMiLCAiX2k0IiwgIl9lcnJvcnMzIiwgImluaXQiLCAicmVmVG9vbGJhcjIiLCAiJGJvZHkiLCAiRGVmYXVsdE9wdGlvbnMiLCAiZ2V0T3B0aW9uIiwgIm9wdCIsICJVc2VyT3B0aW9ucyIsICJfJCR3aWR0aDIiLCAiXyQkd2lkdGgzIiwgIiQiLCAiZG9jdW1lbnQiLCAiZmluZCIsICJ0cmlnZ2VyIiwgIiR0YXJnZXQiLCAidGVtbGlzdCIsICJ0IiwgIlRlbXBsYXRlcyIsICJoYXNPd24iLCAiXyQkd2lkdGgiLCAidGVtIiwgInNmb3JtIiwgImVzY1N0ciIsICJzaG9ydGZvcm0iLCAiYWN0aW9ub2JqIiwgIm1vZHVsZSIsICJjb25jYXQiLCAiZGlhbG9nb2JqIiwgInJlc2l6ZW1lIiwgInRpdGxlTXNnIiwgImlkIiwgImh0bWwiLCAiZ2V0SW5pdGlhbCIsICJkaWFsb2ciLCAid2lkdGgiLCAiTWF0aCIsICJyb3VuZCIsICJvcGVuIiwgImdldE9wZW5UZW1wbGF0ZSIsICJnZXRGb3JtIiwgIm9uIiwgInByZXZlbnREZWZhdWx0IiwgInByZXZQYXJzZUNsaWNrIiwgImJ1dHRvbnMiLCAicmVmIiwgImdldFJlZiIsICJ3aWtpRWRpdG9yIiwgIm1vZHVsZXMiLCAidG9vbGJhciIsICJmbiIsICJkb0FjdGlvbiIsICJkYXRhIiwgIm9wdGlvbnMiLCAicG9zdCIsICJzaG93SGlkZUV4dHJhIiwgInRlbXBsYXRlIiwgImRpdiIsICJzaG93IiwgInRleHQiLCAiaGlkZSIsICJyZXNldEZvcm0iLCAibGFiZWwiLCAidGVtcGxhdGVuYW1lIiwgImFjdGlvbiIsICJyZWZzZWN0aW9uIiwgInNlY3Rpb25zIiwgImNpdGVzIiwgImdyb3VwcyIsICJ0b29scyIsICJsaXN0IiwgIm5hbWVkcmVmcyIsICJucmVmcyIsICJpY29uIiwgInNlY3Rpb24iLCAiZ3JvdXAiLCAiZXJyb3JjaGVjayIsICJlY2hlY2siLCAiZGVmYXVsdGRpYWxvZ3MiLCAibG9hZFJlZnMiLCAiZXJyb3JjaGVja3MiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAiRXJyb3JDaGVja3MiLCAidmFsIiwgInJ1biIsICJkaXNwbGF5RXJyb3JzIiwgImdldE5hbWVkUmVmIiwgIm9mZiIsICJ1dGlsIiwgImFkZENTUyIsICJtYWluUmVmTGlzdCIsICJyZWZzTG9hZGVkIiwgImlubmVyb25seSIsICJmb3JpbnNlcnQiLCAiaSIsICJqIiwgImciLCAicmVzIiwgInJlZm9iaiIsICJTdHJpbmciLCAidHJpbSIsICJnZXRRdW90ZWRTdHJpbmciLCAicmVmZ3JvdXAiLCAiaW5jcmVtZW50YWJsZXMiLCAiZmllbGRzIiwgImZpZWxkbmFtZSIsICJmaWVsZGlkIiwgInJlcGxhY2UiLCAidG9TdHJpbmciLCAiYmFzaWMiLCAiZXh0cmEiLCAiZ2V0UGFnZVRleHQiLCAibG9hZFJlZnNJbnRlcm5hbCIsICJyZWZzcmVnZXgiLCAiZXhlYyIsICJzZXR1cEVycm9yQ2hlY2siLCAic2V0dXBOYW1lZFJlZnMiLCAiY2FsbGJhY2siLCAicG9zdGRhdGEiLCAidGl0bGUiLCAicHJvcCIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJ0aGVuIiwgInJlc3RleHQiLCAid2lraXRleHQiLCAicnZwcm9wIiwgInBhZ2VpZHMiLCAicnZleHBhbmR0ZW1wbGF0ZXMiLCAicXVlcnkiLCAicGFnZXRleHQiLCAicGFnZXMiLCAicmV2aXNpb25zIiwgInNhZmVEZWNvZGVVUklDb21wb25lbnQiLCAiZGVjb2RlVVJJQ29tcG9uZW50IiwgImluaXRBdXRvZmlsbCIsICJfJCRhdHRyIiwgImVsZW1pZCIsICJhdHRyIiwgImF1dG90eXBlIiwgInVybCIsICJlbmNvZGVVUklDb21wb25lbnQiLCAiY3JlYXRlRWxlbWVudCIsICJzZXRBdHRyaWJ1dGUiLCAiaGVhZCIsICJhcHBlbmQiLCAiYXV0b0ZpbGwiLCAiY2wiLCAiY29hdXRob3JzIiwgImF1dGhvcnMiLCAiXyQkZXEkYXR0ciIsICJjbGFzc2VzIiwgImVxIiwgInNwbGl0IiwgInBhdHQiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAiY2xhc3NfIiwgIl8kJGVxJGF0dHIyIiwgIl9pdGVyYXRvcjUiLCAiX3N0ZXA1IiwgImpvaW4iLCAiZGF0ZSIsICJEVCIsICJEYXRlIiwgInRlc3QiLCAiZm9ybWF0RGF0ZSIsICJqb3VybmFsIiwgInZvbHVtZSIsICJpc3N1ZSIsICJkb2kiLCAicHVibGlzaGVyIiwgImxvY2F0aW9uIiwgImVkaXRpb24iLCAiaXNibiIsICJpc3NuIiwgImxhbmd1YWdlIiwgImNoYXB0ZXIiLCAiaW5jcmVtZW50RmllbGRzIiwgIl8kJGF0dHIyIiwgImN1cnJlbnRyb3ciLCAicGFyZW50cyIsICJwcmV2IiwgImNzcyIsICJkZXRhY2giLCAiaW5jcmVtZW50cyIsICJ0cnMiLCAibWFrZUZvcm1Jbm5lciIsICJyZXZlcnNlIiwgIl9pdGVyYXRvcjYiLCAiX3N0ZXA2IiwgInRyIiwgImFmdGVyIiwgImZpbGxBY2Nlc3NkYXRlIiwgIl8kJGF0dHIzIiwgImRhdGVzdHIiLCAidXNlZGF5IiwgInVzZW1vbnRoIiwgInptb250aCIsICJtb250aCIsICJnZXRVVENNb250aCIsICJ6ZGF0ZSIsICJnZXRVVENEYXRlIiwgImdldFVUQ0Z1bGxZZWFyIiwgIm5hbWVzIiwgInN0dWZmIiwgInNlbGVjdCIsICJiZWZvcmUiLCAicHJldmxhYmVsIiwgInBhcnNlbGFiZWwiLCAibGluayIsICJocmVmIiwgIm1hcmdpbiIsICJkaXNwbGF5IiwgImNvbG9yIiwgIm5hbWVkUmVmU2VsZWN0Q2xpY2siLCAibnJlZlBhcnNlQ2xpY2siLCAiZm9ybSIsICJ1bCIsICJnZXRSb3ciLCAiZmlsbE5yZWZQcmV2aWV3IiwgInBhcnNlZCIsICJjaG9pY2UiLCAibGFzdG5hbWVkcmVmY2hvaWNlIiwgImZpbGxUZW1wbGF0ZVByZXZpZXciLCAic2V0dGluZyIsICJzcSIsICJkcSIsICJmaXhTdHIiLCAic2xpY2UiLCAidG9VcHBlckNhc2UiLCAiZGlhbG9ncyIsICJyZW1vdmUiLCAidGFibGUiLCAiYm9yZGVyIiwgInBhZGRpbmciLCAidHIxIiwgInRoMSIsICJ0aDIiLCAiaW0iLCAiYWQiLCAidGQiLCAidGQxIiwgInRkMiIsICJyZWZUb29sYmFyQmFzZSIsICJfd2luZG93IiwgImNvbnN0cnVjdG9yIiwgImJhc2ljZmllbGRzIiwgImV4cGFuZGVkZmllbGRzIiwgImluY3JzZXR1cCIsICJhdXRvZmlsbHMiLCAiX2l0ZXJhdG9yNyIsICJlbnRyaWVzIiwgIl9zdGVwNyIsICJmaWVsZG9iaiIsICJsYWJlbGZpZWxkIiwgInNldHVwIiwgImluY3J2YWwiLCAiYXV0b2RhdGVGaWVsZHMiLCAiaW5jcnR5cGUiLCAiaW5wdXQiLCAidGFiaW5kZXgiLCAic3R5bGUiLCAiY2xhc3NuYW1lIiwgImFkZENsYXNzIiwgIm5lZWRzZXR1cCIsICJrZXlzIiwgIl9pdGVyYXRvcjgiLCAiX3N0ZXA4IiwgImF1dG9maWxsIiwgImhpZGRlbiIsICJtYWluIiwgImZvcm0xIiwgIl9pdGVyYXRvcjkiLCAiX3N0ZXA5IiwgImZvcm0yIiwgIl9pdGVyYXRvcjEwIiwgIl9zdGVwMTAiLCAiZm9ybTMiLCAiJHRyIiwgIiR0ZDEiLCAiJGxhYmVsMSIsICJpbnB1dDEiLCAidGQzIiwgImxhYmVsMiIsICJ0ZDQiLCAiaW5wdXQyIiwgImV4dHJhcyIsICJzcGFuMSIsICJzcGFuMiIsICJvYmoiLCAicm93IiwgImNoZWNrIiwgIm5hbWUiLCAicmVmVG9vbGJhck1lc2FnZXMiLCAibWVzc2FnZXMiLCAic2V0IiwgImdldFVybCIsICJ1c2VyIiwgInF1ZXJ5U2VsZWN0b3IiLCAiZ2V0Qm9keSJdCn0K

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

// dist/Edittools-refToolbar/Edittools-refToolbar.js
//! src/Edittools-refToolbar/modules/constant.ts
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
var WG_ACTION = mw.config.get("wgAction");
var WG_PAGE_CONTENT_MODEL = mw.config.get("wgPageContentModel");
var WG_USER_LANGUAGE = mw.config.get("wgUserLanguage");
var WG_WIKI_ID = mw.config.get("wgWikiID");
var IS_WG_EDIT_OR_SUBMIT_ACTION = ["edit", "submit"].includes(WG_ACTION);
//! src/Edittools-refToolbar/modules/RefToolbar2.0.js
var import_ext_gadget = require("ext.gadget.Util");
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
var refToolbar2 = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* () {
    const $body = yield (0, import_ext_gadget.getBody)();
    const api = (0, import_ext_gadget.initMwApi)("Qiuwen/1.1 (RefToolbar/2.0; ".concat(WG_WIKI_ID, ")"));
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
      const $target = $body.find("#wpTextbox1");
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
            labelMsg: "cite-section-label",
            groups: {
              template: {
                tools: {
                  template: {
                    type: "select",
                    labelMsg: "cite-template-list",
                    list: temlist
                  }
                }
              },
              namedrefs: {
                labelMsg: "cite-named-refs-label",
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
                    labelMsg: "cite-named-refs-button"
                  }
                }
              },
              errorcheck: {
                labelMsg: "cite-errorcheck-label",
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
                    labelMsg: "cite-errorcheck-button"
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
          CiteTB.expandtemplates($body.find("#wpTextbox1").wikiEditor("getContents").text(), callback);
        } else {
          callback($body.find("#wpTextbox1").wikiEditor("getContents").text());
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
      let url = "//citoid.qiuwen.net.cn/lookup.php?";
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
  });
  return function refToolbar22() {
    return _ref.apply(this, arguments);
  };
}();
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
  if (mw.config.get("wgRefToolbarInstalled")) {
    return;
  }
  mw.config.set("wgRefToolbarInstalled", true);
  if (!IS_WG_EDIT_OR_SUBMIT_ACTION || WG_PAGE_CONTENT_MODEL !== "wikitext") {
    return;
  }
  if (!mw.user.options.get("usebetatoolbar")) {
    return;
  }
  if (document.querySelector("#wpTextbox1[readonly]")) {
    return;
  }
  refToolbarMesages();
  refToolbarBase();
  void refToolbar2();
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mYWlscy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Rlc2NyaXB0b3JzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1jYWxsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NsYXNzb2YtcmF3LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtY2FsbGFibGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nZXQtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXN5bWJvbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RyeS10by1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWNhbGxhYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1Zy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1uYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9tYXRoLXRydW5jLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtYXJyYXkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1zZXQtbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9lcy1ub3QtZXhjZWVkLXNhZmUtaW50ZWdlci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5wdXNoLmpzIiwgInNyYy9FZGl0dG9vbHMtcmVmVG9vbGJhci9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9FZGl0dG9vbHMtcmVmVG9vbGJhci9tb2R1bGVzL1JlZlRvb2xiYXIyLjAuanMiLCAic3JjL0VkaXR0b29scy1yZWZUb29sYmFyL21vZHVsZXMvdXRpbC9nZXRNZXNzYWdlLnRzIiwgInNyYy9FZGl0dG9vbHMtcmVmVG9vbGJhci9tb2R1bGVzL1JlZlRvb2xiYXJDb25maWcuanMiLCAic3JjL0VkaXR0b29scy1yZWZUb29sYmFyL21vZHVsZXMvUmVmVG9vbGJhckJhc2UuanMiLCAic3JjL0VkaXR0b29scy1yZWZUb29sYmFyL21vZHVsZXMvbWVzc2FnZXMudHMiLCAic3JjL0VkaXR0b29scy1yZWZUb29sYmFyL0VkaXR0b29scy1yZWZUb29sYmFyLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIndXNlIHN0cmljdCc7XG52YXIgY2hlY2sgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICYmIGl0Lk1hdGggPT09IE1hdGggJiYgaXQ7XG59O1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxubW9kdWxlLmV4cG9ydHMgPVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZ2xvYmFsLXRoaXMgLS0gc2FmZVxuICBjaGVjayh0eXBlb2YgZ2xvYmFsVGhpcyA9PSAnb2JqZWN0JyAmJiBnbG9iYWxUaGlzKSB8fFxuICBjaGVjayh0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdykgfHxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAtLSBzYWZlXG4gIGNoZWNrKHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYpIHx8XG4gIGNoZWNrKHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsKSB8fFxuICBjaGVjayh0eXBlb2YgdGhpcyA9PSAnb2JqZWN0JyAmJiB0aGlzKSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmMgLS0gZmFsbGJhY2tcbiAgKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pKCkgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBEZXRlY3QgSUU4J3MgaW5jb21wbGV0ZSBkZWZpbmVQcm9wZXJ0eSBpbXBsZW1lbnRhdGlvblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sIDEsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pWzFdICE9PSA3O1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWZ1bmN0aW9uLXByb3RvdHlwZS1iaW5kIC0tIHNhZmVcbiAgdmFyIHRlc3QgPSAoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9KS5iaW5kKCk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gdHlwZW9mIHRlc3QgIT0gJ2Z1bmN0aW9uJyB8fCB0ZXN0Lmhhc093blByb3BlcnR5KCdwcm90b3R5cGUnKTtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgY2FsbCA9IEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9CSU5EID8gY2FsbC5iaW5kKGNhbGwpIDogZnVuY3Rpb24gKCkge1xuICByZXR1cm4gY2FsbC5hcHBseShjYWxsLCBhcmd1bWVudHMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gTmFzaG9ybiB+IEpESzggYnVnXG52YXIgTkFTSE9STl9CVUcgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgJiYgISRwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHsgMTogMiB9LCAxKTtcblxuLy8gYE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGVgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QucHJvdG90eXBlLnByb3BlcnR5aXNlbnVtZXJhYmxlXG5leHBvcnRzLmYgPSBOQVNIT1JOX0JVRyA/IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKFYpIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGhpcywgVik7XG4gIHJldHVybiAhIWRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci5lbnVtZXJhYmxlO1xufSA6ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgY2FsbCA9IEZ1bmN0aW9uUHJvdG90eXBlLmNhbGw7XG52YXIgdW5jdXJyeVRoaXNXaXRoQmluZCA9IE5BVElWRV9CSU5EICYmIEZ1bmN0aW9uUHJvdG90eXBlLmJpbmQuYmluZChjYWxsLCBjYWxsKTtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfQklORCA/IHVuY3VycnlUaGlzV2l0aEJpbmQgOiBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY2FsbC5hcHBseShmbiwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG52YXIgdG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyh7fS50b1N0cmluZyk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBzdHJpbmdTbGljZSh0b1N0cmluZyhpdCksIDgsIC0xKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcbnZhciBzcGxpdCA9IHVuY3VycnlUaGlzKCcnLnNwbGl0KTtcblxuLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3Ncbm1vZHVsZS5leHBvcnRzID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyB0aHJvd3MgYW4gZXJyb3IgaW4gcmhpbm8sIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9yaGluby9pc3N1ZXMvMzQ2XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gISRPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKTtcbn0pID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjbGFzc29mKGl0KSA9PT0gJ1N0cmluZycgPyBzcGxpdChpdCwgJycpIDogJE9iamVjdChpdCk7XG59IDogJE9iamVjdDtcbiIsICIndXNlIHN0cmljdCc7XG4vLyB3ZSBjYW4ndCB1c2UganVzdCBgaXQgPT0gbnVsbGAgc2luY2Ugb2YgYGRvY3VtZW50LmFsbGAgc3BlY2lhbCBjYXNlXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLUlzSFRNTEREQS1pbnRlcm5hbC1zbG90LWFlY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID09PSBudWxsIHx8IGl0ID09PSB1bmRlZmluZWQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYFJlcXVpcmVPYmplY3RDb2VyY2libGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZXF1aXJlb2JqZWN0Y29lcmNpYmxlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXNOdWxsT3JVbmRlZmluZWQoaXQpKSB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJbmRleGVkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoaXQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1Jc0hUTUxEREEtaW50ZXJuYWwtc2xvdFxudmFyIGRvY3VtZW50QWxsID0gdHlwZW9mIGRvY3VtZW50ID09ICdvYmplY3QnICYmIGRvY3VtZW50LmFsbDtcblxuLy8gYElzQ2FsbGFibGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc2NhbGxhYmxlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9uby10eXBlb2YtdW5kZWZpbmVkIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBkb2N1bWVudEFsbCA9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudEFsbCAhPT0gdW5kZWZpbmVkID8gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJyB8fCBhcmd1bWVudCA9PT0gZG9jdW1lbnRBbGw7XG59IDogZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogaXNDYWxsYWJsZShpdCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgYUZ1bmN0aW9uID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBpc0NhbGxhYmxlKGFyZ3VtZW50KSA/IGFyZ3VtZW50IDogdW5kZWZpbmVkO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZXNwYWNlLCBtZXRob2QpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPCAyID8gYUZ1bmN0aW9uKGdsb2JhbFtuYW1lc3BhY2VdKSA6IGdsb2JhbFtuYW1lc3BhY2VdICYmIGdsb2JhbFtuYW1lc3BhY2VdW21ldGhvZF07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB1bmN1cnJ5VGhpcyh7fS5pc1Byb3RvdHlwZU9mKTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBuYXZpZ2F0b3IgIT0gJ3VuZGVmaW5lZCcgJiYgU3RyaW5nKG5hdmlnYXRvci51c2VyQWdlbnQpIHx8ICcnO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50Jyk7XG5cbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgRGVubyA9IGdsb2JhbC5EZW5vO1xudmFyIHZlcnNpb25zID0gcHJvY2VzcyAmJiBwcm9jZXNzLnZlcnNpb25zIHx8IERlbm8gJiYgRGVuby52ZXJzaW9uO1xudmFyIHY4ID0gdmVyc2lvbnMgJiYgdmVyc2lvbnMudjg7XG52YXIgbWF0Y2gsIHZlcnNpb247XG5cbmlmICh2OCkge1xuICBtYXRjaCA9IHY4LnNwbGl0KCcuJyk7XG4gIC8vIGluIG9sZCBDaHJvbWUsIHZlcnNpb25zIG9mIFY4IGlzbid0IFY4ID0gQ2hyb21lIC8gMTBcbiAgLy8gYnV0IHRoZWlyIGNvcnJlY3QgdmVyc2lvbnMgYXJlIG5vdCBpbnRlcmVzdGluZyBmb3IgdXNcbiAgdmVyc2lvbiA9IG1hdGNoWzBdID4gMCAmJiBtYXRjaFswXSA8IDQgPyAxIDogKyhtYXRjaFswXSArIG1hdGNoWzFdKTtcbn1cblxuLy8gQnJvd3NlckZTIE5vZGVKUyBgcHJvY2Vzc2AgcG9seWZpbGwgaW5jb3JyZWN0bHkgc2V0IGAudjhgIHRvIGAwLjBgXG4vLyBzbyBjaGVjayBgdXNlckFnZW50YCBldmVuIGlmIGAudjhgIGV4aXN0cywgYnV0IDBcbmlmICghdmVyc2lvbiAmJiB1c2VyQWdlbnQpIHtcbiAgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2goL0VkZ2VcXC8oXFxkKykvKTtcbiAgaWYgKCFtYXRjaCB8fCBtYXRjaFsxXSA+PSA3NCkge1xuICAgIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9DaHJvbWVcXC8oXFxkKykvKTtcbiAgICBpZiAobWF0Y2gpIHZlcnNpb24gPSArbWF0Y2hbMV07XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2ZXJzaW9uO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLXN5bWJvbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZyAqL1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24nKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcblxudmFyICRTdHJpbmcgPSBnbG9iYWwuU3RyaW5nO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5c3ltYm9scyAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xubW9kdWxlLmV4cG9ydHMgPSAhIU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN5bWJvbCA9IFN5bWJvbCgnc3ltYm9sIGRldGVjdGlvbicpO1xuICAvLyBDaHJvbWUgMzggU3ltYm9sIGhhcyBpbmNvcnJlY3QgdG9TdHJpbmcgY29udmVyc2lvblxuICAvLyBgZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzYCBwb2x5ZmlsbCBzeW1ib2xzIGNvbnZlcnRlZCB0byBvYmplY3QgYXJlIG5vdCBTeW1ib2wgaW5zdGFuY2VzXG4gIC8vIG5iOiBEbyBub3QgY2FsbCBgU3RyaW5nYCBkaXJlY3RseSB0byBhdm9pZCB0aGlzIGJlaW5nIG9wdGltaXplZCBvdXQgdG8gYHN5bWJvbCsnJ2Agd2hpY2ggd2lsbCxcbiAgLy8gb2YgY291cnNlLCBmYWlsLlxuICByZXR1cm4gISRTdHJpbmcoc3ltYm9sKSB8fCAhKE9iamVjdChzeW1ib2wpIGluc3RhbmNlb2YgU3ltYm9sKSB8fFxuICAgIC8vIENocm9tZSAzOC00MCBzeW1ib2xzIGFyZSBub3QgaW5oZXJpdGVkIGZyb20gRE9NIGNvbGxlY3Rpb25zIHByb3RvdHlwZXMgdG8gaW5zdGFuY2VzXG4gICAgIVN5bWJvbC5zaGFtICYmIFY4X1ZFUlNJT04gJiYgVjhfVkVSU0lPTiA8IDQxO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tc3ltYm9sIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zeW1ib2wtY29uc3RydWN0b3ItZGV0ZWN0aW9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX1NZTUJPTFxuICAmJiAhU3ltYm9sLnNoYW1cbiAgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mJyk7XG52YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbm1vZHVsZS5leHBvcnRzID0gVVNFX1NZTUJPTF9BU19VSUQgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyICRTeW1ib2wgPSBnZXRCdWlsdEluKCdTeW1ib2wnKTtcbiAgcmV0dXJuIGlzQ2FsbGFibGUoJFN5bWJvbCkgJiYgaXNQcm90b3R5cGVPZigkU3ltYm9sLnByb3RvdHlwZSwgJE9iamVjdChpdCkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJFN0cmluZyA9IFN0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gJFN0cmluZyhhcmd1bWVudCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuICdPYmplY3QnO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgdHJ5VG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdHJ5LXRvLXN0cmluZycpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYEFzc2VydDogSXNDYWxsYWJsZShhcmd1bWVudCkgaXMgdHJ1ZWBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIGlmIChpc0NhbGxhYmxlKGFyZ3VtZW50KSkgcmV0dXJuIGFyZ3VtZW50O1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcih0cnlUb1N0cmluZyhhcmd1bWVudCkgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkJyk7XG5cbi8vIGBHZXRNZXRob2RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1nZXRtZXRob2Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFYsIFApIHtcbiAgdmFyIGZ1bmMgPSBWW1BdO1xuICByZXR1cm4gaXNOdWxsT3JVbmRlZmluZWQoZnVuYykgPyB1bmRlZmluZWQgOiBhQ2FsbGFibGUoZnVuYyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgT3JkaW5hcnlUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9yZGluYXJ5dG9wcmltaXRpdmVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBwcmVmKSB7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAocHJlZiA9PT0gJ3N0cmluZycgJiYgaXNDYWxsYWJsZShmbiA9IGlucHV0LnRvU3RyaW5nKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKGlzQ2FsbGFibGUoZm4gPSBpbnB1dC52YWx1ZU9mKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHByZWYgIT09ICdzdHJpbmcnICYmIGlzQ2FsbGFibGUoZm4gPSBpbnB1dC50b1N0cmluZykgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHRyeSB7XG4gICAgZGVmaW5lUHJvcGVydHkoZ2xvYmFsLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGdsb2JhbFtrZXldID0gdmFsdWU7XG4gIH0gcmV0dXJuIHZhbHVlO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcblxudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgZGVmaW5lR2xvYmFsUHJvcGVydHkoU0hBUkVELCB7fSk7XG5cbm1vZHVsZS5leHBvcnRzID0gc3RvcmU7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xudmFyIHN0b3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHt9KTtcbn0pKCd2ZXJzaW9ucycsIFtdKS5wdXNoKHtcbiAgdmVyc2lvbjogJzMuMzUuMCcsXG4gIG1vZGU6IElTX1BVUkUgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAxNC0yMDIzIERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJyxcbiAgbGljZW5zZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2Jsb2IvdjMuMzUuMC9MSUNFTlNFJyxcbiAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMnXG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbi8vIGBUb09iamVjdGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvb2JqZWN0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gJE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcblxudmFyIGhhc093blByb3BlcnR5ID0gdW5jdXJyeVRoaXMoe30uaGFzT3duUHJvcGVydHkpO1xuXG4vLyBgSGFzT3duUHJvcGVydHlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1oYXNvd25wcm9wZXJ0eVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1oYXNvd24gLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuaGFzT3duIHx8IGZ1bmN0aW9uIGhhc093bihpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eSh0b09iamVjdChpdCksIGtleSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxudmFyIGlkID0gMDtcbnZhciBwb3N0Zml4ID0gTWF0aC5yYW5kb20oKTtcbnZhciB0b1N0cmluZyA9IHVuY3VycnlUaGlzKDEuMC50b1N0cmluZyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnICsgKGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXkpICsgJylfJyArIHRvU3RyaW5nKCsraWQgKyBwb3N0Zml4LCAzNik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3ltYm9sLWNvbnN0cnVjdG9yLWRldGVjdGlvbicpO1xudmFyIFVTRV9TWU1CT0xfQVNfVUlEID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkJyk7XG5cbnZhciBTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyIFdlbGxLbm93blN5bWJvbHNTdG9yZSA9IHNoYXJlZCgnd2tzJyk7XG52YXIgY3JlYXRlV2VsbEtub3duU3ltYm9sID0gVVNFX1NZTUJPTF9BU19VSUQgPyBTeW1ib2xbJ2ZvciddIHx8IFN5bWJvbCA6IFN5bWJvbCAmJiBTeW1ib2wud2l0aG91dFNldHRlciB8fCB1aWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgaWYgKCFoYXNPd24oV2VsbEtub3duU3ltYm9sc1N0b3JlLCBuYW1lKSkge1xuICAgIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXSA9IE5BVElWRV9TWU1CT0wgJiYgaGFzT3duKFN5bWJvbCwgbmFtZSlcbiAgICAgID8gU3ltYm9sW25hbWVdXG4gICAgICA6IGNyZWF0ZVdlbGxLbm93blN5bWJvbCgnU3ltYm9sLicgKyBuYW1lKTtcbiAgfSByZXR1cm4gV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciBvcmRpbmFyeVRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZScpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbnZhciBUT19QUklNSVRJVkUgPSB3ZWxsS25vd25TeW1ib2woJ3RvUHJpbWl0aXZlJyk7XG5cbi8vIGBUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJpbWl0aXZlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnB1dCwgcHJlZikge1xuICBpZiAoIWlzT2JqZWN0KGlucHV0KSB8fCBpc1N5bWJvbChpbnB1dCkpIHJldHVybiBpbnB1dDtcbiAgdmFyIGV4b3RpY1RvUHJpbSA9IGdldE1ldGhvZChpbnB1dCwgVE9fUFJJTUlUSVZFKTtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKGV4b3RpY1RvUHJpbSkge1xuICAgIGlmIChwcmVmID09PSB1bmRlZmluZWQpIHByZWYgPSAnZGVmYXVsdCc7XG4gICAgcmVzdWx0ID0gY2FsbChleG90aWNUb1ByaW0sIGlucHV0LCBwcmVmKTtcbiAgICBpZiAoIWlzT2JqZWN0KHJlc3VsdCkgfHwgaXNTeW1ib2wocmVzdWx0KSkgcmV0dXJuIHJlc3VsdDtcbiAgICB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbiAgfVxuICBpZiAocHJlZiA9PT0gdW5kZWZpbmVkKSBwcmVmID0gJ251bWJlcic7XG4gIHJldHVybiBvcmRpbmFyeVRvUHJpbWl0aXZlKGlucHV0LCBwcmVmKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xudmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXN5bWJvbCcpO1xuXG4vLyBgVG9Qcm9wZXJ0eUtleWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJvcGVydHlrZXlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBrZXkgPSB0b1ByaW1pdGl2ZShhcmd1bWVudCwgJ3N0cmluZycpO1xuICByZXR1cm4gaXNTeW1ib2woa2V5KSA/IGtleSA6IGtleSArICcnO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgZG9jdW1lbnQgPSBnbG9iYWwuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBFWElTVFMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBFWElTVFMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcblxuLy8gVGhhbmtzIHRvIElFOCBmb3IgaXRzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3JlYXRlRWxlbWVudCgnZGl2JyksICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfVxuICB9KS5hICE9PSA3O1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0luZGV4ZWRPYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhc093bihPLCBQKSkgcmV0dXJuIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcighY2FsbChwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZS5mLCBPLCBQKSwgT1tQXSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbi8vIFY4IH4gQ2hyb21lIDM2LVxuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzMzNFxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0sICdwcm90b3R5cGUnLCB7XG4gICAgdmFsdWU6IDQyLFxuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KS5wcm90b3R5cGUgIT09IDQyO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgJFN0cmluZyA9IFN0cmluZztcbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgQXNzZXJ0OiBUeXBlKGFyZ3VtZW50KSBpcyBPYmplY3RgXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoaXNPYmplY3QoYXJndW1lbnQpKSByZXR1cm4gYXJndW1lbnQ7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKCRTdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgYW4gb2JqZWN0Jyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG52YXIgVjhfUFJPVE9UWVBFX0RFRklORV9CVUcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdjgtcHJvdG90eXBlLWRlZmluZS1idWcnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleScpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBFTlVNRVJBQkxFID0gJ2VudW1lcmFibGUnO1xudmFyIENPTkZJR1VSQUJMRSA9ICdjb25maWd1cmFibGUnO1xudmFyIFdSSVRBQkxFID0gJ3dyaXRhYmxlJztcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0eWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0eVxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgPyBWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA/IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKHR5cGVvZiBPID09PSAnZnVuY3Rpb24nICYmIFAgPT09ICdwcm90b3R5cGUnICYmICd2YWx1ZScgaW4gQXR0cmlidXRlcyAmJiBXUklUQUJMRSBpbiBBdHRyaWJ1dGVzICYmICFBdHRyaWJ1dGVzW1dSSVRBQkxFXSkge1xuICAgIHZhciBjdXJyZW50ID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKTtcbiAgICBpZiAoY3VycmVudCAmJiBjdXJyZW50W1dSSVRBQkxFXSkge1xuICAgICAgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gICAgICBBdHRyaWJ1dGVzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IENPTkZJR1VSQUJMRSBpbiBBdHRyaWJ1dGVzID8gQXR0cmlidXRlc1tDT05GSUdVUkFCTEVdIDogY3VycmVudFtDT05GSUdVUkFCTEVdLFxuICAgICAgICBlbnVtZXJhYmxlOiBFTlVNRVJBQkxFIGluIEF0dHJpYnV0ZXMgPyBBdHRyaWJ1dGVzW0VOVU1FUkFCTEVdIDogY3VycmVudFtFTlVNRVJBQkxFXSxcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlXG4gICAgICB9O1xuICAgIH1cbiAgfSByZXR1cm4gJGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xufSA6ICRkZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiAkZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIGtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0RGVzY3JpcHRvciA9IERFU0NSSVBUT1JTICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbnZhciBFWElTVFMgPSBoYXNPd24oRnVuY3Rpb25Qcm90b3R5cGUsICduYW1lJyk7XG4vLyBhZGRpdGlvbmFsIHByb3RlY3Rpb24gZnJvbSBtaW5pZmllZCAvIG1hbmdsZWQgLyBkcm9wcGVkIGZ1bmN0aW9uIG5hbWVzXG52YXIgUFJPUEVSID0gRVhJU1RTICYmIChmdW5jdGlvbiBzb21ldGhpbmcoKSB7IC8qIGVtcHR5ICovIH0pLm5hbWUgPT09ICdzb21ldGhpbmcnO1xudmFyIENPTkZJR1VSQUJMRSA9IEVYSVNUUyAmJiAoIURFU0NSSVBUT1JTIHx8IChERVNDUklQVE9SUyAmJiBnZXREZXNjcmlwdG9yKEZ1bmN0aW9uUHJvdG90eXBlLCAnbmFtZScpLmNvbmZpZ3VyYWJsZSkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgRVhJU1RTOiBFWElTVFMsXG4gIFBST1BFUjogUFJPUEVSLFxuICBDT05GSUdVUkFCTEU6IENPTkZJR1VSQUJMRVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHN0b3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xuXG52YXIgZnVuY3Rpb25Ub1N0cmluZyA9IHVuY3VycnlUaGlzKEZ1bmN0aW9uLnRvU3RyaW5nKTtcblxuLy8gdGhpcyBoZWxwZXIgYnJva2VuIGluIGBjb3JlLWpzQDMuNC4xLTMuNC40YCwgc28gd2UgY2FuJ3QgdXNlIGBzaGFyZWRgIGhlbHBlclxuaWYgKCFpc0NhbGxhYmxlKHN0b3JlLmluc3BlY3RTb3VyY2UpKSB7XG4gIHN0b3JlLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb25Ub1N0cmluZyhpdCk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RvcmUuaW5zcGVjdFNvdXJjZTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIFdlYWtNYXAgPSBnbG9iYWwuV2Vha01hcDtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0NhbGxhYmxlKFdlYWtNYXApICYmIC9uYXRpdmUgY29kZS8udGVzdChTdHJpbmcoV2Vha01hcCkpO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xuXG52YXIga2V5cyA9IHNoYXJlZCgna2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIGtleXNba2V5XSB8fCAoa2V5c1trZXldID0gdWlkKGtleSkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfV0VBS19NQVAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2Vhay1tYXAtYmFzaWMtZGV0ZWN0aW9uJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcbnZhciBzaGFyZWRLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLWtleScpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcblxudmFyIE9CSkVDVF9BTFJFQURZX0lOSVRJQUxJWkVEID0gJ09iamVjdCBhbHJlYWR5IGluaXRpYWxpemVkJztcbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xudmFyIFdlYWtNYXAgPSBnbG9iYWwuV2Vha01hcDtcbnZhciBzZXQsIGdldCwgaGFzO1xuXG52YXIgZW5mb3JjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaGFzKGl0KSA/IGdldChpdCkgOiBzZXQoaXQsIHt9KTtcbn07XG5cbnZhciBnZXR0ZXJGb3IgPSBmdW5jdGlvbiAoVFlQRSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGl0KSB7XG4gICAgdmFyIHN0YXRlO1xuICAgIGlmICghaXNPYmplY3QoaXQpIHx8IChzdGF0ZSA9IGdldChpdCkpLnR5cGUgIT09IFRZUEUpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0luY29tcGF0aWJsZSByZWNlaXZlciwgJyArIFRZUEUgKyAnIHJlcXVpcmVkJyk7XG4gICAgfSByZXR1cm4gc3RhdGU7XG4gIH07XG59O1xuXG5pZiAoTkFUSVZFX1dFQUtfTUFQIHx8IHNoYXJlZC5zdGF0ZSkge1xuICB2YXIgc3RvcmUgPSBzaGFyZWQuc3RhdGUgfHwgKHNoYXJlZC5zdGF0ZSA9IG5ldyBXZWFrTWFwKCkpO1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1zZWxmLWFzc2lnbiAtLSBwcm90b3R5cGUgbWV0aG9kcyBwcm90ZWN0aW9uICovXG4gIHN0b3JlLmdldCA9IHN0b3JlLmdldDtcbiAgc3RvcmUuaGFzID0gc3RvcmUuaGFzO1xuICBzdG9yZS5zZXQgPSBzdG9yZS5zZXQ7XG4gIC8qIGVzbGludC1lbmFibGUgbm8tc2VsZi1hc3NpZ24gLS0gcHJvdG90eXBlIG1ldGhvZHMgcHJvdGVjdGlvbiAqL1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgaWYgKHN0b3JlLmhhcyhpdCkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIHN0b3JlLnNldChpdCwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHN0b3JlLmdldChpdCkgfHwge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBzdG9yZS5oYXMoaXQpO1xuICB9O1xufSBlbHNlIHtcbiAgdmFyIFNUQVRFID0gc2hhcmVkS2V5KCdzdGF0ZScpO1xuICBoaWRkZW5LZXlzW1NUQVRFXSA9IHRydWU7XG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICBpZiAoaGFzT3duKGl0LCBTVEFURSkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShpdCwgU1RBVEUsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBoYXNPd24oaXQsIFNUQVRFKSA/IGl0W1NUQVRFXSA6IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaGFzT3duKGl0LCBTVEFURSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldCxcbiAgZ2V0OiBnZXQsXG4gIGhhczogaGFzLFxuICBlbmZvcmNlOiBlbmZvcmNlLFxuICBnZXR0ZXJGb3I6IGdldHRlckZvclxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIENPTkZJR1VSQUJMRV9GVU5DVElPTl9OQU1FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLW5hbWUnKS5DT05GSUdVUkFCTEU7XG52YXIgaW5zcGVjdFNvdXJjZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnNwZWN0LXNvdXJjZScpO1xudmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUnKTtcblxudmFyIGVuZm9yY2VJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5lbmZvcmNlO1xudmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldDtcbnZhciAkU3RyaW5nID0gU3RyaW5nO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG52YXIgcmVwbGFjZSA9IHVuY3VycnlUaGlzKCcnLnJlcGxhY2UpO1xudmFyIGpvaW4gPSB1bmN1cnJ5VGhpcyhbXS5qb2luKTtcblxudmFyIENPTkZJR1VSQUJMRV9MRU5HVEggPSBERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHkoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9LCAnbGVuZ3RoJywgeyB2YWx1ZTogOCB9KS5sZW5ndGggIT09IDg7XG59KTtcblxudmFyIFRFTVBMQVRFID0gU3RyaW5nKFN0cmluZykuc3BsaXQoJ1N0cmluZycpO1xuXG52YXIgbWFrZUJ1aWx0SW4gPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSwgbmFtZSwgb3B0aW9ucykge1xuICBpZiAoc3RyaW5nU2xpY2UoJFN0cmluZyhuYW1lKSwgMCwgNykgPT09ICdTeW1ib2woJykge1xuICAgIG5hbWUgPSAnWycgKyByZXBsYWNlKCRTdHJpbmcobmFtZSksIC9eU3ltYm9sXFwoKFteKV0qKVxcKS8sICckMScpICsgJ10nO1xuICB9XG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZ2V0dGVyKSBuYW1lID0gJ2dldCAnICsgbmFtZTtcbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5zZXR0ZXIpIG5hbWUgPSAnc2V0ICcgKyBuYW1lO1xuICBpZiAoIWhhc093bih2YWx1ZSwgJ25hbWUnKSB8fCAoQ09ORklHVVJBQkxFX0ZVTkNUSU9OX05BTUUgJiYgdmFsdWUubmFtZSAhPT0gbmFtZSkpIHtcbiAgICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5KHZhbHVlLCAnbmFtZScsIHsgdmFsdWU6IG5hbWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KTtcbiAgICBlbHNlIHZhbHVlLm5hbWUgPSBuYW1lO1xuICB9XG4gIGlmIChDT05GSUdVUkFCTEVfTEVOR1RIICYmIG9wdGlvbnMgJiYgaGFzT3duKG9wdGlvbnMsICdhcml0eScpICYmIHZhbHVlLmxlbmd0aCAhPT0gb3B0aW9ucy5hcml0eSkge1xuICAgIGRlZmluZVByb3BlcnR5KHZhbHVlLCAnbGVuZ3RoJywgeyB2YWx1ZTogb3B0aW9ucy5hcml0eSB9KTtcbiAgfVxuICB0cnkge1xuICAgIGlmIChvcHRpb25zICYmIGhhc093bihvcHRpb25zLCAnY29uc3RydWN0b3InKSAmJiBvcHRpb25zLmNvbnN0cnVjdG9yKSB7XG4gICAgICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5KHZhbHVlLCAncHJvdG90eXBlJywgeyB3cml0YWJsZTogZmFsc2UgfSk7XG4gICAgLy8gaW4gVjggfiBDaHJvbWUgNTMsIHByb3RvdHlwZXMgb2Ygc29tZSBtZXRob2RzLCBsaWtlIGBBcnJheS5wcm90b3R5cGUudmFsdWVzYCwgYXJlIG5vbi13cml0YWJsZVxuICAgIH0gZWxzZSBpZiAodmFsdWUucHJvdG90eXBlKSB2YWx1ZS5wcm90b3R5cGUgPSB1bmRlZmluZWQ7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgdmFyIHN0YXRlID0gZW5mb3JjZUludGVybmFsU3RhdGUodmFsdWUpO1xuICBpZiAoIWhhc093bihzdGF0ZSwgJ3NvdXJjZScpKSB7XG4gICAgc3RhdGUuc291cmNlID0gam9pbihURU1QTEFURSwgdHlwZW9mIG5hbWUgPT0gJ3N0cmluZycgPyBuYW1lIDogJycpO1xuICB9IHJldHVybiB2YWx1ZTtcbn07XG5cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWV4dGVuZC1uYXRpdmUgLS0gcmVxdWlyZWRcbkZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZyA9IG1ha2VCdWlsdEluKGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gaXNDYWxsYWJsZSh0aGlzKSAmJiBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpLnNvdXJjZSB8fCBpbnNwZWN0U291cmNlKHRoaXMpO1xufSwgJ3RvU3RyaW5nJyk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgbWFrZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWFrZS1idWlsdC1pbicpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywga2V5LCB2YWx1ZSwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcbiAgdmFyIHNpbXBsZSA9IG9wdGlvbnMuZW51bWVyYWJsZTtcbiAgdmFyIG5hbWUgPSBvcHRpb25zLm5hbWUgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubmFtZSA6IGtleTtcbiAgaWYgKGlzQ2FsbGFibGUodmFsdWUpKSBtYWtlQnVpbHRJbih2YWx1ZSwgbmFtZSwgb3B0aW9ucyk7XG4gIGlmIChvcHRpb25zLmdsb2JhbCkge1xuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2UgZGVmaW5lR2xvYmFsUHJvcGVydHkoa2V5LCB2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghb3B0aW9ucy51bnNhZmUpIGRlbGV0ZSBPW2tleV07XG4gICAgICBlbHNlIGlmIChPW2tleV0pIHNpbXBsZSA9IHRydWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2UgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihPLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiAhb3B0aW9ucy5ub25Db25maWd1cmFibGUsXG4gICAgICB3cml0YWJsZTogIW9wdGlvbnMubm9uV3JpdGFibGVcbiAgICB9KTtcbiAgfSByZXR1cm4gTztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuXG4vLyBgTWF0aC50cnVuY2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW1hdGgudHJ1bmNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1tYXRoLXRydW5jIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gTWF0aC50cnVuYyB8fCBmdW5jdGlvbiB0cnVuYyh4KSB7XG4gIHZhciBuID0gK3g7XG4gIHJldHVybiAobiA+IDAgPyBmbG9vciA6IGNlaWwpKG4pO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdHJ1bmMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWF0aC10cnVuYycpO1xuXG4vLyBgVG9JbnRlZ2VyT3JJbmZpbml0eWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvaW50ZWdlcm9yaW5maW5pdHlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBudW1iZXIgPSArYXJndW1lbnQ7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gIHJldHVybiBudW1iZXIgIT09IG51bWJlciB8fCBudW1iZXIgPT09IDAgPyAwIDogdHJ1bmMobnVtYmVyKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xuXG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5cbi8vIEhlbHBlciBmb3IgYSBwb3B1bGFyIHJlcGVhdGluZyBjYXNlIG9mIHRoZSBzcGVjOlxuLy8gTGV0IGludGVnZXIgYmUgPyBUb0ludGVnZXIoaW5kZXgpLlxuLy8gSWYgaW50ZWdlciA8IDAsIGxldCByZXN1bHQgYmUgbWF4KChsZW5ndGggKyBpbnRlZ2VyKSwgMCk7IGVsc2UgbGV0IHJlc3VsdCBiZSBtaW4oaW50ZWdlciwgbGVuZ3RoKS5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgdmFyIGludGVnZXIgPSB0b0ludGVnZXJPckluZmluaXR5KGluZGV4KTtcbiAgcmV0dXJuIGludGVnZXIgPCAwID8gbWF4KGludGVnZXIgKyBsZW5ndGgsIDApIDogbWluKGludGVnZXIsIGxlbmd0aCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHknKTtcblxudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBgVG9MZW5ndGhgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b2xlbmd0aFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGFyZ3VtZW50ID4gMCA/IG1pbih0b0ludGVnZXJPckluZmluaXR5KGFyZ3VtZW50KSwgMHgxRkZGRkZGRkZGRkZGRikgOiAwOyAvLyAyICoqIDUzIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcblxuLy8gYExlbmd0aE9mQXJyYXlMaWtlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbGVuZ3Rob2ZhcnJheWxpa2Vcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdG9MZW5ndGgob2JqLmxlbmd0aCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tYWJzb2x1dGUtaW5kZXgnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnsgaW5kZXhPZiwgaW5jbHVkZXMgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSBsZW5ndGhPZkFycmF5TGlrZShPKTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT09IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gICAgICBpZiAodmFsdWUgIT09IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICBpZiAoKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pICYmIE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBBcnJheS5wcm90b3R5cGUuaW5jbHVkZXNgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmNsdWRlc1xuICBpbmNsdWRlczogY3JlYXRlTWV0aG9kKHRydWUpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmluZGV4T2ZgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmRleG9mXG4gIGluZGV4T2Y6IGNyZWF0ZU1ldGhvZChmYWxzZSlcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgaW5kZXhPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pbmNsdWRlcycpLmluZGV4T2Y7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xuXG52YXIgcHVzaCA9IHVuY3VycnlUaGlzKFtdLnB1c2gpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSAhaGFzT3duKGhpZGRlbktleXMsIGtleSkgJiYgaGFzT3duKE8sIGtleSkgJiYgcHVzaChyZXN1bHQsIGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXNPd24oTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+aW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcHVzaChyZXN1bHQsIGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gSUU4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IFtcbiAgJ2NvbnN0cnVjdG9yJyxcbiAgJ2hhc093blByb3BlcnR5JyxcbiAgJ2lzUHJvdG90eXBlT2YnLFxuICAncHJvcGVydHlJc0VudW1lcmFibGUnLFxuICAndG9Mb2NhbGVTdHJpbmcnLFxuICAndG9TdHJpbmcnLFxuICAndmFsdWVPZidcbl07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGludGVybmFsT2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcblxudmFyIGhpZGRlbktleXMgPSBlbnVtQnVnS2V5cy5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5bmFtZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHluYW1lcyAtLSBzYWZlXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuIGludGVybmFsT2JqZWN0S2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eXN5bWJvbHMgLS0gc2FmZVxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcblxudmFyIGNvbmNhdCA9IHVuY3VycnlUaGlzKFtdLmNvbmNhdCk7XG5cbi8vIGFsbCBvYmplY3Qga2V5cywgaW5jbHVkZXMgbm9uLWVudW1lcmFibGUgYW5kIHN5bWJvbHNcbm1vZHVsZS5leHBvcnRzID0gZ2V0QnVpbHRJbignUmVmbGVjdCcsICdvd25LZXlzJykgfHwgZnVuY3Rpb24gb3duS2V5cyhpdCkge1xuICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUuZihhbk9iamVjdChpdCkpO1xuICB2YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlLmY7XG4gIHJldHVybiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPyBjb25jYXQoa2V5cywgZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSkgOiBrZXlzO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBvd25LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL293bi1rZXlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc291cmNlLCBleGNlcHRpb25zKSB7XG4gIHZhciBrZXlzID0gb3duS2V5cyhzb3VyY2UpO1xuICB2YXIgZGVmaW5lUHJvcGVydHkgPSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mO1xuICB2YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlLmY7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIGlmICghaGFzT3duKHRhcmdldCwga2V5KSAmJiAhKGV4Y2VwdGlvbnMgJiYgaGFzT3duKGV4Y2VwdGlvbnMsIGtleSkpKSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgfVxuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIHJlcGxhY2VtZW50ID0gLyN8XFwucHJvdG90eXBlXFwuLztcblxudmFyIGlzRm9yY2VkID0gZnVuY3Rpb24gKGZlYXR1cmUsIGRldGVjdGlvbikge1xuICB2YXIgdmFsdWUgPSBkYXRhW25vcm1hbGl6ZShmZWF0dXJlKV07XG4gIHJldHVybiB2YWx1ZSA9PT0gUE9MWUZJTEwgPyB0cnVlXG4gICAgOiB2YWx1ZSA9PT0gTkFUSVZFID8gZmFsc2VcbiAgICA6IGlzQ2FsbGFibGUoZGV0ZWN0aW9uKSA/IGZhaWxzKGRldGVjdGlvbilcbiAgICA6ICEhZGV0ZWN0aW9uO1xufTtcblxudmFyIG5vcm1hbGl6ZSA9IGlzRm9yY2VkLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgcmV0dXJuIFN0cmluZyhzdHJpbmcpLnJlcGxhY2UocmVwbGFjZW1lbnQsICcuJykudG9Mb3dlckNhc2UoKTtcbn07XG5cbnZhciBkYXRhID0gaXNGb3JjZWQuZGF0YSA9IHt9O1xudmFyIE5BVElWRSA9IGlzRm9yY2VkLk5BVElWRSA9ICdOJztcbnZhciBQT0xZRklMTCA9IGlzRm9yY2VkLlBPTFlGSUxMID0gJ1AnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRm9yY2VkO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKS5mO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBkZWZpbmVCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbicpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcbnZhciBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcHktY29uc3RydWN0b3ItcHJvcGVydGllcycpO1xudmFyIGlzRm9yY2VkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWZvcmNlZCcpO1xuXG4vKlxuICBvcHRpb25zLnRhcmdldCAgICAgICAgIC0gbmFtZSBvZiB0aGUgdGFyZ2V0IG9iamVjdFxuICBvcHRpb25zLmdsb2JhbCAgICAgICAgIC0gdGFyZ2V0IGlzIHRoZSBnbG9iYWwgb2JqZWN0XG4gIG9wdGlvbnMuc3RhdCAgICAgICAgICAgLSBleHBvcnQgYXMgc3RhdGljIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucHJvdG8gICAgICAgICAgLSBleHBvcnQgYXMgcHJvdG90eXBlIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucmVhbCAgICAgICAgICAgLSByZWFsIHByb3RvdHlwZSBtZXRob2QgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLmZvcmNlZCAgICAgICAgIC0gZXhwb3J0IGV2ZW4gaWYgdGhlIG5hdGl2ZSBmZWF0dXJlIGlzIGF2YWlsYWJsZVxuICBvcHRpb25zLmJpbmQgICAgICAgICAgIC0gYmluZCBtZXRob2RzIHRvIHRoZSB0YXJnZXQsIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy53cmFwICAgICAgICAgICAtIHdyYXAgY29uc3RydWN0b3JzIHRvIHByZXZlbnRpbmcgZ2xvYmFsIHBvbGx1dGlvbiwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLnVuc2FmZSAgICAgICAgIC0gdXNlIHRoZSBzaW1wbGUgYXNzaWdubWVudCBvZiBwcm9wZXJ0eSBpbnN0ZWFkIG9mIGRlbGV0ZSArIGRlZmluZVByb3BlcnR5XG4gIG9wdGlvbnMuc2hhbSAgICAgICAgICAgLSBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gIG9wdGlvbnMuZW51bWVyYWJsZSAgICAgLSBleHBvcnQgYXMgZW51bWVyYWJsZSBwcm9wZXJ0eVxuICBvcHRpb25zLmRvbnRDYWxsR2V0U2V0IC0gcHJldmVudCBjYWxsaW5nIGEgZ2V0dGVyIG9uIHRhcmdldFxuICBvcHRpb25zLm5hbWUgICAgICAgICAgIC0gdGhlIC5uYW1lIG9mIHRoZSBmdW5jdGlvbiBpZiBpdCBkb2VzIG5vdCBtYXRjaCB0aGUga2V5XG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3B0aW9ucywgc291cmNlKSB7XG4gIHZhciBUQVJHRVQgPSBvcHRpb25zLnRhcmdldDtcbiAgdmFyIEdMT0JBTCA9IG9wdGlvbnMuZ2xvYmFsO1xuICB2YXIgU1RBVElDID0gb3B0aW9ucy5zdGF0O1xuICB2YXIgRk9SQ0VELCB0YXJnZXQsIGtleSwgdGFyZ2V0UHJvcGVydHksIHNvdXJjZVByb3BlcnR5LCBkZXNjcmlwdG9yO1xuICBpZiAoR0xPQkFMKSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsO1xuICB9IGVsc2UgaWYgKFNUQVRJQykge1xuICAgIHRhcmdldCA9IGdsb2JhbFtUQVJHRVRdIHx8IGRlZmluZUdsb2JhbFByb3BlcnR5KFRBUkdFVCwge30pO1xuICB9IGVsc2Uge1xuICAgIHRhcmdldCA9IChnbG9iYWxbVEFSR0VUXSB8fCB7fSkucHJvdG90eXBlO1xuICB9XG4gIGlmICh0YXJnZXQpIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIHNvdXJjZVByb3BlcnR5ID0gc291cmNlW2tleV07XG4gICAgaWYgKG9wdGlvbnMuZG9udENhbGxHZXRTZXQpIHtcbiAgICAgIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpO1xuICAgICAgdGFyZ2V0UHJvcGVydHkgPSBkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IudmFsdWU7XG4gICAgfSBlbHNlIHRhcmdldFByb3BlcnR5ID0gdGFyZ2V0W2tleV07XG4gICAgRk9SQ0VEID0gaXNGb3JjZWQoR0xPQkFMID8ga2V5IDogVEFSR0VUICsgKFNUQVRJQyA/ICcuJyA6ICcjJykgKyBrZXksIG9wdGlvbnMuZm9yY2VkKTtcbiAgICAvLyBjb250YWluZWQgaW4gdGFyZ2V0XG4gICAgaWYgKCFGT1JDRUQgJiYgdGFyZ2V0UHJvcGVydHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHR5cGVvZiBzb3VyY2VQcm9wZXJ0eSA9PSB0eXBlb2YgdGFyZ2V0UHJvcGVydHkpIGNvbnRpbnVlO1xuICAgICAgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyhzb3VyY2VQcm9wZXJ0eSwgdGFyZ2V0UHJvcGVydHkpO1xuICAgIH1cbiAgICAvLyBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gICAgaWYgKG9wdGlvbnMuc2hhbSB8fCAodGFyZ2V0UHJvcGVydHkgJiYgdGFyZ2V0UHJvcGVydHkuc2hhbSkpIHtcbiAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShzb3VyY2VQcm9wZXJ0eSwgJ3NoYW0nLCB0cnVlKTtcbiAgICB9XG4gICAgZGVmaW5lQnVpbHRJbih0YXJnZXQsIGtleSwgc291cmNlUHJvcGVydHksIG9wdGlvbnMpO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG5cbi8vIGBJc0FycmF5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXNhcnJheVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LWlzYXJyYXkgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGNsYXNzb2YoYXJndW1lbnQpID09PSAnQXJyYXknO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIFNhZmFyaSA8IDEzIGRvZXMgbm90IHRocm93IGFuIGVycm9yIGluIHRoaXMgY2FzZVxudmFyIFNJTEVOVF9PTl9OT05fV1JJVEFCTEVfTEVOR1RIX1NFVCA9IERFU0NSSVBUT1JTICYmICFmdW5jdGlvbiAoKSB7XG4gIC8vIG1ha2VzIG5vIHNlbnNlIHdpdGhvdXQgcHJvcGVyIHN0cmljdCBtb2RlIHN1cHBvcnRcbiAgaWYgKHRoaXMgIT09IHVuZGVmaW5lZCkgcmV0dXJuIHRydWU7XG4gIHRyeSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFtdLCAnbGVuZ3RoJywgeyB3cml0YWJsZTogZmFsc2UgfSkubGVuZ3RoID0gMTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3IgaW5zdGFuY2VvZiBUeXBlRXJyb3I7XG4gIH1cbn0oKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTSUxFTlRfT05fTk9OX1dSSVRBQkxFX0xFTkdUSF9TRVQgPyBmdW5jdGlvbiAoTywgbGVuZ3RoKSB7XG4gIGlmIChpc0FycmF5KE8pICYmICFnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgJ2xlbmd0aCcpLndyaXRhYmxlKSB7XG4gICAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Nhbm5vdCBzZXQgcmVhZCBvbmx5IC5sZW5ndGgnKTtcbiAgfSByZXR1cm4gTy5sZW5ndGggPSBsZW5ndGg7XG59IDogZnVuY3Rpb24gKE8sIGxlbmd0aCkge1xuICByZXR1cm4gTy5sZW5ndGggPSBsZW5ndGg7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSAweDFGRkZGRkZGRkZGRkZGOyAvLyAyICoqIDUzIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA+IE1BWF9TQUZFX0lOVEVHRVIpIHRocm93ICRUeXBlRXJyb3IoJ01heGltdW0gYWxsb3dlZCBpbmRleCBleGNlZWRlZCcpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG52YXIgc2V0QXJyYXlMZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc2V0LWxlbmd0aCcpO1xudmFyIGRvZXNOb3RFeGNlZWRTYWZlSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2VzLW5vdC1leGNlZWQtc2FmZS1pbnRlZ2VyJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxudmFyIElOQ09SUkVDVF9UT19MRU5HVEggPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBbXS5wdXNoLmNhbGwoeyBsZW5ndGg6IDB4MTAwMDAwMDAwIH0sIDEpICE9PSA0Mjk0OTY3Mjk3O1xufSk7XG5cbi8vIFY4IDw9IDEyMSBhbmQgU2FmYXJpIDw9IDE1LjQ7IEZGIDwgMjMgdGhyb3dzIEludGVybmFsRXJyb3Jcbi8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTEyNjgxXG52YXIgcHJvcGVyRXJyb3JPbk5vbldyaXRhYmxlTGVuZ3RoID0gZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShbXSwgJ2xlbmd0aCcsIHsgd3JpdGFibGU6IGZhbHNlIH0pLnB1c2goKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3IgaW5zdGFuY2VvZiBUeXBlRXJyb3I7XG4gIH1cbn07XG5cbnZhciBGT1JDRUQgPSBJTkNPUlJFQ1RfVE9fTEVOR1RIIHx8ICFwcm9wZXJFcnJvck9uTm9uV3JpdGFibGVMZW5ndGgoKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5wdXNoYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnB1c2hcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBhcml0eTogMSwgZm9yY2VkOiBGT1JDRUQgfSwge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnMgLS0gcmVxdWlyZWQgZm9yIGAubGVuZ3RoYFxuICBwdXNoOiBmdW5jdGlvbiBwdXNoKGl0ZW0pIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpO1xuICAgIHZhciBsZW4gPSBsZW5ndGhPZkFycmF5TGlrZShPKTtcbiAgICB2YXIgYXJnQ291bnQgPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGRvZXNOb3RFeGNlZWRTYWZlSW50ZWdlcihsZW4gKyBhcmdDb3VudCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdDb3VudDsgaSsrKSB7XG4gICAgICBPW2xlbl0gPSBhcmd1bWVudHNbaV07XG4gICAgICBsZW4rKztcbiAgICB9XG4gICAgc2V0QXJyYXlMZW5ndGgoTywgbGVuKTtcbiAgICByZXR1cm4gbGVuO1xuICB9XG59KTtcbiIsICJjb25zdCBXR19BQ1RJT046IE1lZGlhV2lraUNvbmZpZ01hcFdnQWN0aW9uID0gbXcuY29uZmlnLmdldCgnd2dBY3Rpb24nKTtcbmNvbnN0IFdHX1BBR0VfQ09OVEVOVF9NT0RFTDogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dQYWdlQ29udGVudE1vZGVsJyk7XG5jb25zdCBXR19VU0VSX0xBTkdVQUdFOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCd3Z1VzZXJMYW5ndWFnZScpO1xuY29uc3QgV0dfV0lLSV9JRDogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dXaWtpSUQnKTtcblxuY29uc3QgSVNfV0dfRURJVF9PUl9TVUJNSVRfQUNUSU9OOiBib29sZWFuID0gWydlZGl0JywgJ3N1Ym1pdCddLmluY2x1ZGVzKFdHX0FDVElPTik7XG5cbmV4cG9ydCB7V0dfUEFHRV9DT05URU5UX01PREVMLCBXR19VU0VSX0xBTkdVQUdFLCBXR19XSUtJX0lELCBJU19XR19FRElUX09SX1NVQk1JVF9BQ1RJT059O1xuIiwgIi8qIGdsb2JhbCBDaXRlVEIgKi9cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudCAqL1xuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCB7Z2V0Qm9keSwgaW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtXR19XSUtJX0lEfSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi91dGlsL2dldE1lc3NhZ2UnO1xuaW1wb3J0IHtyZWZUb29sYmFyQ29uZmlnfSBmcm9tICcuL1JlZlRvb2xiYXJDb25maWcnO1xuXG4vLyBUT0RPOiBtYWtlIGF1dG9kYXRlIGFuIG9wdGlvbiBpbiB0aGUgQ2l0ZVRlbXBsYXRlIG9iamVjdCwgbm90IGEgcHJlZmVyZW5jZVxuY29uc3QgcmVmVG9vbGJhcjIgPSBhc3luYyAoKSA9PiB7XG5cdGNvbnN0ICRib2R5ID0gYXdhaXQgZ2V0Qm9keSgpO1xuXHRjb25zdCBhcGkgPSBpbml0TXdBcGkoYFFpdXdlbi8xLjEgKFJlZlRvb2xiYXIvMi4wOyAke1dHX1dJS0lfSUR9KWApO1xuXG5cdC8vIERlZmF1bHQgb3B0aW9ucywgdGhlc2UgbWFpbmx5IGV4aXN0IHNvIHRoZSBzY3JpcHQgd29uJ3QgYnJlYWsgaWYgYSBuZXcgb3B0aW9uIGlzIGFkZGVkXG5cdENpdGVUQi5EZWZhdWx0T3B0aW9ucyA9IHtcblx0XHQnZGF0ZSBmb3JtYXQnOiAnPHllYXI+LTx6bW9udGg+LTx6ZGF0ZT4nLFxuXHRcdCdhdXRvZGF0ZSBmaWVsZHMnOiBbXSxcblx0XHRtb250aHM6IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXSxcblx0XHRtb2RhbDogdHJ1ZSxcblx0XHRhdXRvcGFyc2U6IGZhbHNlLFxuXHRcdGV4cGFuZHRlbXBsYXRlczogZmFsc2UsXG5cdH07XG5cblx0Ly8gR2V0IGFuIG9wdGlvbiAtIHVzZXIgc2V0dGluZ3Mgb3ZlcnJpZGUgZ2xvYmFsIHdoaWNoIG92ZXJyaWRlIGRlZmF1bHRzXG5cdENpdGVUQi5nZXRPcHRpb24gPSAob3B0KSA9PiB7XG5cdFx0aWYgKENpdGVUQi5Vc2VyT3B0aW9uc1tvcHRdICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiBDaXRlVEIuVXNlck9wdGlvbnNbb3B0XTtcblx0XHR9IGVsc2UgaWYgKENpdGVUQi5PcHRpb25zW29wdF0gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIENpdGVUQi5PcHRpb25zW29wdF07XG5cdFx0fVxuXHRcdHJldHVybiBDaXRlVEIuRGVmYXVsdE9wdGlvbnNbb3B0XTtcblx0fTtcblxuXHRDaXRlVEIuaW5pdCA9ICgpID0+IHtcblx0XHQvKiBNYWluIHN0dWZmLCBidWlsZCB0aGUgYWN0dWFsIHRvb2xiYXIgc3RydWN0dXJlXG5cdFx0ICogMS4gZ2V0IHRoZSB0ZW1wbGF0ZSBsaXN0LCBtYWtlIHRoZSBkcm9wZG93biBsaXN0IGFuZCBzZXQgdXAgdGhlIHRlbXBsYXRlIGRpYWxvZyBib3hlc1xuXHRcdCAqIDIuIGFjdHVhbGx5IGJ1aWxkIHRoZSB0b29sYmFyOlxuXHRcdCAqIC0gQSBzZWN0aW9uIGZvciBjaXRlc1xuXHRcdCAqIC0tIGRyb3Bkb3duIGZvciB0aGUgdGVtcGxhdGVzIChwcmV2aW91c2x5IGRlZmluZWQpXG5cdFx0ICogLS0gYnV0dG9uIGZvciBuYW1lZCByZWZzIHdpdGggYSBkaWFsb2cgYm94XG5cdFx0ICogLS0gYnV0dG9uIGZvciBlcnJvcmNoZWNrXG5cdFx0ICogMy4gYWRkIHRoZSB3aG9sZSB0aGluZyB0byB0aGUgbWFpbiB0b29sYmFyXG5cdFx0ICovXG5cblx0XHQkKGRvY3VtZW50KS5maW5kKCdoZWFkJykudHJpZ2dlcigncmVmdG9vbGJhcmJhc2UnKTtcblx0XHRjb25zdCAkdGFyZ2V0ID0gJGJvZHkuZmluZCgnI3dwVGV4dGJveDEnKTtcblx0XHRjb25zdCB0ZW1saXN0ID0ge307XG5cdFx0Zm9yIChjb25zdCB0IGluIENpdGVUQi5UZW1wbGF0ZXMpIHtcblx0XHRcdGlmIChPYmplY3QuaGFzT3duKENpdGVUQi5UZW1wbGF0ZXMsIHQpKSB7XG5cdFx0XHRcdGNvbnN0IHRlbSA9IENpdGVUQi5UZW1wbGF0ZXNbdF07XG5cdFx0XHRcdGNvbnN0IHNmb3JtID0gQ2l0ZVRCLmVzY1N0cih0ZW0uc2hvcnRmb3JtKTtcblx0XHRcdFx0Y29uc3QgYWN0aW9ub2JqID0ge1xuXHRcdFx0XHRcdHR5cGU6ICdkaWFsb2cnLFxuXHRcdFx0XHRcdG1vZHVsZTogYGNpdGUtZGlhbG9nLSR7c2Zvcm19YCxcblx0XHRcdFx0fTtcblx0XHRcdFx0Y29uc3QgZGlhbG9nb2JqID0ge307XG5cdFx0XHRcdGRpYWxvZ29ialtgY2l0ZS1kaWFsb2ctJHtzZm9ybX1gXSA9IHtcblx0XHRcdFx0XHRyZXNpemVtZTogZmFsc2UsXG5cdFx0XHRcdFx0dGl0bGVNc2c6IGBjaXRlLWRpYWxvZy0ke3Nmb3JtfWAsXG5cdFx0XHRcdFx0aWQ6IGBjaXRldG9vbGJhci0ke3Nmb3JtfWAsXG5cdFx0XHRcdFx0aW5pdDogKCkgPT4ge30sXG5cdFx0XHRcdFx0aHRtbDogdGVtLmdldEluaXRpYWwoKSxcblx0XHRcdFx0XHRkaWFsb2c6IHtcblx0XHRcdFx0XHRcdHdpZHRoOiBNYXRoLnJvdW5kKCQod2luZG93KS53aWR0aCgpID8/IDAgKiAwLjgpLFxuXHRcdFx0XHRcdFx0b3BlbigpIHtcblx0XHRcdFx0XHRcdFx0JCh0aGlzKS5odG1sKENpdGVUQi5nZXRPcGVuVGVtcGxhdGUoKS5nZXRGb3JtKCkpO1xuXHRcdFx0XHRcdFx0XHQvKiogQHBhcmFtIHtqUXVlcnkuRXZlbnR9IGUgKi9cblx0XHRcdFx0XHRcdFx0JGJvZHkuZmluZCgnLmNpdGUtcHJldi1wYXJzZScpLm9uKCdjbGljaycsIChlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRcdENpdGVUQi5wcmV2UGFyc2VDbGljaygpO1xuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRidXR0b25zOiB7XG5cdFx0XHRcdFx0XHRcdCdjaXRlLWZvcm0tc3VibWl0JygpIHtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCByZWYgPSBDaXRlVEIuZ2V0UmVmKGZhbHNlLCB0cnVlKTtcblx0XHRcdFx0XHRcdFx0XHQkKHRoaXMpLmRpYWxvZygnY2xvc2UnKTtcblx0XHRcdFx0XHRcdFx0XHQkLndpa2lFZGl0b3IubW9kdWxlcy50b29sYmFyLmZuLmRvQWN0aW9uKFxuXHRcdFx0XHRcdFx0XHRcdFx0JCh0aGlzKS5kYXRhKCdjb250ZXh0JyksXG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdlbmNhcHN1bGF0ZScsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnM6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwb3N0OiByZWYsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0JCh0aGlzKVxuXHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdCdjaXRlLWZvcm0tc2hvd2hpZGUnOiBDaXRlVEIuc2hvd0hpZGVFeHRyYSxcblx0XHRcdFx0XHRcdFx0J2NpdGUtcmVmcHJldmlldycoKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgcmVmID0gQ2l0ZVRCLmdldFJlZihmYWxzZSwgZmFsc2UpO1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHRlbXBsYXRlID0gQ2l0ZVRCLmdldE9wZW5UZW1wbGF0ZSgpO1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IGRpdiA9ICQoYCNjaXRldG9vbGJhci0ke0NpdGVUQi5lc2NTdHIodGVtcGxhdGUuc2hvcnRmb3JtKX1gKTtcblx0XHRcdFx0XHRcdFx0XHRkaXYuZmluZCgnLmNpdGUtcHJldmlldy1sYWJlbCcpLnNob3coKTtcblx0XHRcdFx0XHRcdFx0XHRkaXYuZmluZCgnLmNpdGUtcmVmLXByZXZpZXcnKS50ZXh0KHJlZikuc2hvdygpO1xuXHRcdFx0XHRcdFx0XHRcdGlmIChDaXRlVEIuZ2V0T3B0aW9uKCdhdXRvcGFyc2UnKSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0Q2l0ZVRCLnByZXZQYXJzZUNsaWNrKCk7XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdGRpdi5maW5kKCcuY2l0ZS1wcmV2LXBhcnNlJykuc2hvdygpO1xuXHRcdFx0XHRcdFx0XHRcdFx0ZGl2LmZpbmQoJy5jaXRlLXByZXYtcGFyc2VkLWxhYmVsJykuaGlkZSgpO1xuXHRcdFx0XHRcdFx0XHRcdFx0ZGl2LmZpbmQoJy5jaXRlLXByZXZpZXctcGFyc2VkJykuaHRtbCgnJyk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHQnd2lraWVkaXRvci10b29sYmFyLXRvb2wtbGluay1jYW5jZWwnKCkge1xuXHRcdFx0XHRcdFx0XHRcdCQodGhpcykuZGlhbG9nKCdjbG9zZScpO1xuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHQnY2l0ZS1mb3JtLXJlc2V0JygpIHtcblx0XHRcdFx0XHRcdFx0XHRDaXRlVEIucmVzZXRGb3JtKCk7XG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH07XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0JHRhcmdldC53aWtpRWRpdG9yKCdhZGREaWFsb2cnLCBkaWFsb2dvYmopO1xuXHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHQvKiBUeXBlRXJyb3I6IHJhbmdlIGlzIG51bGwgKi9cblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBpZiAoIUNpdGVUQi5nZXRPcHRpb24oJ21vZGFsJykpIHtcblx0XHRcdFx0Ly8gICAgICRib2R5LmZpbmQoJyNjaXRldG9vbGJhci0nK3Nmb3JtKS5kaWFsb2coJ29wdGlvbicsICdtb2RhbCcsIGZhbHNlKTtcblx0XHRcdFx0Ly8gfVxuXHRcdFx0XHR0ZW1saXN0W3Nmb3JtXSA9IHtcblx0XHRcdFx0XHRsYWJlbDogdGVtLnRlbXBsYXRlbmFtZSxcblx0XHRcdFx0XHRhY3Rpb246IGFjdGlvbm9iaixcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRjb25zdCByZWZzZWN0aW9uID0ge1xuXHRcdFx0c2VjdGlvbnM6IHtcblx0XHRcdFx0Y2l0ZXM6IHtcblx0XHRcdFx0XHR0eXBlOiAndG9vbGJhcicsXG5cdFx0XHRcdFx0bGFiZWxNc2c6ICdjaXRlLXNlY3Rpb24tbGFiZWwnLFxuXHRcdFx0XHRcdGdyb3Vwczoge1xuXHRcdFx0XHRcdFx0dGVtcGxhdGU6IHtcblx0XHRcdFx0XHRcdFx0dG9vbHM6IHtcblx0XHRcdFx0XHRcdFx0XHR0ZW1wbGF0ZToge1xuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogJ3NlbGVjdCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbE1zZzogJ2NpdGUtdGVtcGxhdGUtbGlzdCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRsaXN0OiB0ZW1saXN0LFxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0bmFtZWRyZWZzOiB7XG5cdFx0XHRcdFx0XHRcdGxhYmVsTXNnOiAnY2l0ZS1uYW1lZC1yZWZzLWxhYmVsJyxcblx0XHRcdFx0XHRcdFx0dG9vbHM6IHtcblx0XHRcdFx0XHRcdFx0XHRucmVmczoge1xuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogJ2J1dHRvbicsXG5cdFx0XHRcdFx0XHRcdFx0XHRhY3Rpb246IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogJ2RpYWxvZycsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZTogJ2NpdGUtdG9vbGJhci1uYW1lZHJlZnMnLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdGljb246ICdodHRwczovL3R1Lnpob25nd2VuLndpa2kvaW1hZ2VzL3FpdXdlbmJhaWtlL3poL3RodW1iL2IvYmUvTnV2b2xhX2NsaXBib2FyZF9saW5lZC5zdmcvMjJweC1OdXZvbGFfY2xpcGJvYXJkX2xpbmVkLnN2Zy5wbmcnLFxuXHRcdFx0XHRcdFx0XHRcdFx0c2VjdGlvbjogJ2NpdGVzJyxcblx0XHRcdFx0XHRcdFx0XHRcdGdyb3VwOiAnbmFtZWRyZWZzJyxcblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsTXNnOiAnY2l0ZS1uYW1lZC1yZWZzLWJ1dHRvbicsXG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRlcnJvcmNoZWNrOiB7XG5cdFx0XHRcdFx0XHRcdGxhYmVsTXNnOiAnY2l0ZS1lcnJvcmNoZWNrLWxhYmVsJyxcblx0XHRcdFx0XHRcdFx0dG9vbHM6IHtcblx0XHRcdFx0XHRcdFx0XHRlY2hlY2s6IHtcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdidXR0b24nLFxuXHRcdFx0XHRcdFx0XHRcdFx0YWN0aW9uOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdkaWFsb2cnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGU6ICdjaXRlLXRvb2xiYXItZXJyb3JjaGVjaycsXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0aWNvbjogJ2h0dHBzOi8vdHUuemhvbmd3ZW4ud2lraS9pbWFnZXMvcWl1d2VuYmFpa2UvemgvdGh1bWIvYS9hMy9OdXZvbGFfYXBwc19rb3JnYW5pemVyLU5PLnBuZy8yMnB4LU51dm9sYV9hcHBzX2tvcmdhbml6ZXItTk8ucG5nJyxcblx0XHRcdFx0XHRcdFx0XHRcdHNlY3Rpb246ICdjaXRlcycsXG5cdFx0XHRcdFx0XHRcdFx0XHRncm91cDogJ2Vycm9yY2hlY2snLFxuXHRcdFx0XHRcdFx0XHRcdFx0bGFiZWxNc2c6ICdjaXRlLWVycm9yY2hlY2stYnV0dG9uJyxcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHR9O1xuXG5cdFx0Y29uc3QgZGVmYXVsdGRpYWxvZ3MgPSB7XG5cdFx0XHQnY2l0ZS10b29sYmFyLWVycm9yY2hlY2snOiB7XG5cdFx0XHRcdHRpdGxlTXNnOiAnY2l0ZS1lcnJvcmNoZWNrLWxhYmVsJyxcblx0XHRcdFx0aWQ6ICdjaXRldG9vbGJhci1lcnJvcmNoZWNrJyxcblx0XHRcdFx0cmVzaXplbWU6IGZhbHNlLFxuXHRcdFx0XHRpbml0OiAoKSA9PiB7fSxcblx0XHRcdFx0aHRtbDogYDxkaXYgaWQ9XCJjaXRlLW5hbWVkcmVmLWxvYWRpbmdcIj48aW1nIHNyYz1cImh0dHBzOi8vdHUuemhvbmd3ZW4ud2lraS9pbWFnZXMvcWl1d2VuYmFpa2UvemgvZC9kZS9BamF4LWxvYWRlci5naWZcIiAvPiZuYnNwOyR7Z2V0TWVzc2FnZShcblx0XHRcdFx0XHQnY2l0ZS1sb2FkaW5nJ1xuXHRcdFx0XHQpfTwvZGl2PmAsXG5cdFx0XHRcdGRpYWxvZzoge1xuXHRcdFx0XHRcdHdpZHRoOiBNYXRoLnJvdW5kKCQod2luZG93KS53aWR0aCgpID8/IDAgKiAwLjgpLFxuXHRcdFx0XHRcdG9wZW4oKSB7XG5cdFx0XHRcdFx0XHRDaXRlVEIubG9hZFJlZnMoKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGJ1dHRvbnM6IHtcblx0XHRcdFx0XHRcdCdjaXRlLWVycm9yY2hlY2stc3VibWl0JygpIHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgZXJyb3JjaGVja3MgPSAkYm9keS5maW5kKCdpbnB1dFtuYW1lPWNpdGUtZXJyLXRlc3RdOmNoZWNrZWQnKTtcblx0XHRcdFx0XHRcdFx0bGV0IGVycm9ycyA9IFtdO1xuXHRcdFx0XHRcdFx0XHRmb3IgKGNvbnN0IGVycm9yY2hlY2sgb2YgZXJyb3JjaGVja3MpIHtcblx0XHRcdFx0XHRcdFx0XHRlcnJvcnMgPSBbLi4uZXJyb3JzLCAuLi5DaXRlVEIuRXJyb3JDaGVja3NbJChlcnJvcmNoZWNrKS52YWwoKV0ucnVuKCldO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdENpdGVUQi5kaXNwbGF5RXJyb3JzKGVycm9ycyk7XG5cdFx0XHRcdFx0XHRcdCQodGhpcykuZGlhbG9nKCdjbG9zZScpO1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdCd3aWtpZWRpdG9yLXRvb2xiYXItdG9vbC1saW5rLWNhbmNlbCcoKSB7XG5cdFx0XHRcdFx0XHRcdCQodGhpcykuZGlhbG9nKCdjbG9zZScpO1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdCdjaXRlLXRvb2xiYXItbmFtZWRyZWZzJzoge1xuXHRcdFx0XHR0aXRsZU1zZzogJ2NpdGUtbmFtZWQtcmVmcy10aXRsZScsXG5cdFx0XHRcdHJlc2l6ZW1lOiBmYWxzZSxcblx0XHRcdFx0aWQ6ICdjaXRldG9vbGJhci1uYW1lZHJlZnMnLFxuXHRcdFx0XHRodG1sOiBgPGRpdiBpZD1cImNpdGUtbmFtZWRyZWYtbG9hZGluZ1wiPiA8aW1nIHNyYz1cImh0dHBzOi8vdHUuemhvbmd3ZW4ud2lraS9pbWFnZXMvcWl1d2VuYmFpa2UvemgvZC9kZS9BamF4LWxvYWRlci5naWZcIiAvPiAmbmJzcDske2dldE1lc3NhZ2UoXG5cdFx0XHRcdFx0J2NpdGUtbG9hZGluZydcblx0XHRcdFx0KX08L2Rpdj5gLFxuXHRcdFx0XHRpbml0OiAoKSA9PiB7fSxcblx0XHRcdFx0ZGlhbG9nOiB7XG5cdFx0XHRcdFx0d2lkdGg6IE1hdGgucm91bmQoJCh3aW5kb3cpLndpZHRoKCkgPz8gMCAqIDAuOCksXG5cdFx0XHRcdFx0b3BlbigpIHtcblx0XHRcdFx0XHRcdENpdGVUQi5sb2FkUmVmcygpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0YnV0dG9uczoge1xuXHRcdFx0XHRcdFx0J2NpdGUtZm9ybS1zdWJtaXQnKCkge1xuXHRcdFx0XHRcdFx0XHRjb25zdCByZWZuYW1lID0gJGJvZHkuZmluZCgnI2NpdGUtbmFtZWRyZWYtc2VsZWN0JykudmFsKCk7XG5cdFx0XHRcdFx0XHRcdGlmIChyZWZuYW1lID09PSAnJykge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQkKHRoaXMpLmRpYWxvZygnY2xvc2UnKTtcblx0XHRcdFx0XHRcdFx0JC53aWtpRWRpdG9yLm1vZHVsZXMudG9vbGJhci5mbi5kb0FjdGlvbihcblx0XHRcdFx0XHRcdFx0XHQkKHRoaXMpLmRhdGEoJ2NvbnRleHQnKSxcblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnZW5jYXBzdWxhdGUnLFxuXHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRwb3N0OiBDaXRlVEIuZ2V0TmFtZWRSZWYocmVmbmFtZSwgdHJ1ZSksXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0JCh0aGlzKVxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdCd3aWtpZWRpdG9yLXRvb2xiYXItdG9vbC1saW5rLWNhbmNlbCcoKSB7XG5cdFx0XHRcdFx0XHRcdCQodGhpcykuZGlhbG9nKCdjbG9zZScpO1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHR9O1xuXG5cdFx0dHJ5IHtcblx0XHRcdCR0YXJnZXQud2lraUVkaXRvcignYWRkRGlhbG9nJywgZGVmYXVsdGRpYWxvZ3MpO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0Ly8gZXJyb3Igb2NjdXJyZWQgc2V0dGluZyB1cCB3aWtpZWRpdG9yLlxuXHRcdH1cblx0XHQkYm9keS5maW5kKCcjY2l0ZXRvb2xiYXItbmFtZWRyZWZzJykub2ZmKCdkaWFsb2dvcGVuJyk7XG5cdFx0aWYgKCFDaXRlVEIuZ2V0T3B0aW9uKCdtb2RhbCcpKSB7XG5cdFx0XHQvLyAkYm9keS5maW5kKCcjY2l0ZXRvb2xiYXItbmFtZWRyZWZzJykuZGlhbG9nKCdvcHRpb24nLCAnbW9kYWwnLCBmYWxzZSk7XG5cdFx0XHQvLyAkYm9keS5maW5kKCcjY2l0ZXRvb2xiYXItZXJyb3JjaGVjaycpLmRpYWxvZygnb3B0aW9uJywgJ21vZGFsJywgZmFsc2UpO1xuXHRcdFx0bXcudXRpbC5hZGRDU1MoJy51aS13aWRnZXQtb3ZlcmxheXtkaXNwbGF5Om5vbmUgIWltcG9ydGFudH0nKTtcblx0XHR9XG5cdFx0dHJ5IHtcblx0XHRcdCR0YXJnZXQud2lraUVkaXRvcignYWRkVG9Ub29sYmFyJywgcmVmc2VjdGlvbik7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHQvLyBlcnJvciBvY2N1cnJlZCBzZXR0aW5nIHVwIHdpa2llZGl0b3IuXG5cdFx0fVxuXHR9O1xuXG5cdC8vIFNldHVwIHRoZSBtYWluIG9iamVjdFxuXHRDaXRlVEIubWFpblJlZkxpc3QgPSBbXTtcblx0Q2l0ZVRCLnJlZnNMb2FkZWQgPSBmYWxzZTtcblxuXHQvLyBSRUYgRlVOQ1RJT05TXG5cdC8vIEFjdHVhbGx5IGFzc2VtYmxlIGEgcmVmIGZyb20gdXNlciBpbnB1dFxuXHRDaXRlVEIuZ2V0UmVmID0gKGlubmVyb25seSwgZm9yaW5zZXJ0KSA9PiB7XG5cdFx0bGV0IGksIGosIGcsIGdyb3VwO1xuXHRcdGNvbnN0IHRlbXBsYXRlID0gQ2l0ZVRCLmdldE9wZW5UZW1wbGF0ZSgpO1xuXHRcdGNvbnN0IHt0ZW1wbGF0ZW5hbWV9ID0gdGVtcGxhdGU7XG5cdFx0bGV0IHJlcyA9ICcnO1xuXHRcdGNvbnN0IHJlZm9iaiA9IHtcblx0XHRcdHNob3J0dGFnOiBmYWxzZSxcblx0XHR9O1xuXHRcdGlmICghaW5uZXJvbmx5KSB7XG5cdFx0XHRncm91cCA9ICQoYCNjaXRlLSR7Q2l0ZVRCLmVzY1N0cih0ZW1wbGF0ZS5zaG9ydGZvcm0pfS1ncm91cGApLnZhbCgpO1xuXHRcdFx0bGV0IHJlZm5hbWUgPSAkKGAjY2l0ZS0ke0NpdGVUQi5lc2NTdHIodGVtcGxhdGUuc2hvcnRmb3JtKX0tbmFtZWApLnZhbCgpO1xuXHRcdFx0cmVzICs9ICc8cmVmJztcblx0XHRcdGlmIChyZWZuYW1lKSB7XG5cdFx0XHRcdHJlZm5hbWUgPSBTdHJpbmcocmVmbmFtZSkudHJpbSgpO1xuXHRcdFx0XHRyZXMgKz0gYCBuYW1lPSR7Q2l0ZVRCLmdldFF1b3RlZFN0cmluZyhyZWZuYW1lKX1gO1xuXHRcdFx0XHRyZWZvYmoucmVmbmFtZSA9IHJlZm5hbWU7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZ3JvdXApIHtcblx0XHRcdFx0Z3JvdXAgPSBTdHJpbmcoZ3JvdXApLnRyaW0oKTtcblx0XHRcdFx0cmVzICs9IGAgZ3JvdXA9JHtDaXRlVEIuZ2V0UXVvdGVkU3RyaW5nKGdyb3VwKX1gO1xuXHRcdFx0XHRyZWZvYmoucmVmZ3JvdXAgPSBncm91cDtcblx0XHRcdH1cblx0XHRcdHJlcyArPSAnPic7XG5cdFx0fVxuXHRcdGxldCBjb250ZW50ID0gYHt7JHt0ZW1wbGF0ZW5hbWV9YDtcblx0XHRmb3IgKGcgaW4gdGVtcGxhdGUuaW5jcmVtZW50YWJsZXMpIHtcblx0XHRcdGlmIChPYmplY3QuaGFzT3duKHRlbXBsYXRlLmluY3JlbWVudGFibGVzLCBnKSkge1xuXHRcdFx0XHRncm91cCA9IHRlbXBsYXRlLmluY3JlbWVudGFibGVzW2ddO1xuXHRcdFx0XHRmb3IgKGkgPSAxOyBpIDw9IGdyb3VwLnZhbDsgaSsrKSB7XG5cdFx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IGdyb3VwLmZpZWxkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdFx0Y29uc3QgZmllbGRuYW1lID0gZ3JvdXAuZmllbGRzW2pdLmZpZWxkO1xuXHRcdFx0XHRcdFx0Y29uc3QgZmllbGRpZCA9IGZpZWxkbmFtZS5yZXBsYWNlKCc8Tj4nLCBpLnRvU3RyaW5nKCkpO1xuXHRcdFx0XHRcdFx0Y29uc3QgZmllbGQgPSAkKGAjY2l0ZS0ke0NpdGVUQi5lc2NTdHIodGVtcGxhdGUuc2hvcnRmb3JtKX0tJHtmaWVsZGlkfWApLnZhbCgpO1xuXHRcdFx0XHRcdFx0aWYgKGZpZWxkKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQgKz0gYCB8JHtmaWVsZGlkfT1gO1xuXHRcdFx0XHRcdFx0XHRjb250ZW50ICs9IFN0cmluZyhmaWVsZCkudHJpbSgpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRmb3IgKGkgPSAwOyBpIDwgdGVtcGxhdGUuYmFzaWMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmICh0ZW1wbGF0ZS5iYXNpY1tpXS5pbmNyZW1lbnRfZ3JvdXApIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBmaWVsZG5hbWUgPSB0ZW1wbGF0ZS5iYXNpY1tpXS5maWVsZDtcblx0XHRcdGNvbnN0IGZpZWxkID0gJChgI2NpdGUtJHtDaXRlVEIuZXNjU3RyKHRlbXBsYXRlLnNob3J0Zm9ybSl9LSR7ZmllbGRuYW1lfWApLnZhbCgpO1xuXHRcdFx0aWYgKGZpZWxkKSB7XG5cdFx0XHRcdGNvbnRlbnQgKz0gYCB8JHtmaWVsZG5hbWV9PWA7XG5cdFx0XHRcdGNvbnRlbnQgKz0gU3RyaW5nKGZpZWxkKS50cmltKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICgkYm9keS5maW5kKCcjY2l0ZS1mb3JtLXN0YXR1cycpLnZhbCgpICE9PSAnY2xvc2VkJykge1xuXHRcdFx0Zm9yIChpID0gMDsgaSA8IHRlbXBsYXRlLmV4dHJhLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmICh0ZW1wbGF0ZS5leHRyYVtpXS5pbmNyZW1lbnRfZ3JvdXApIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBmaWVsZG5hbWUgPSB0ZW1wbGF0ZS5leHRyYVtpXS5maWVsZDtcblx0XHRcdFx0Y29uc3QgZmllbGQgPSAkKGAjY2l0ZS0ke0NpdGVUQi5lc2NTdHIodGVtcGxhdGUuc2hvcnRmb3JtKX0tJHtmaWVsZG5hbWV9YCkudmFsKCk7XG5cdFx0XHRcdGlmIChmaWVsZCkge1xuXHRcdFx0XHRcdGNvbnRlbnQgKz0gYCB8JHtmaWVsZG5hbWV9PWA7XG5cdFx0XHRcdFx0Y29udGVudCArPSBTdHJpbmcoZmllbGQpLnRyaW0oKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRjb250ZW50ICs9ICd9fSc7XG5cdFx0cmVzICs9IGNvbnRlbnQ7XG5cdFx0cmVmb2JqLmNvbnRlbnQgPSBjb250ZW50O1xuXHRcdGlmICghaW5uZXJvbmx5KSB7XG5cdFx0XHRyZXMgKz0gJzwvcmVmPic7XG5cdFx0fVxuXHRcdGlmIChmb3JpbnNlcnQpIHtcblx0XHRcdENpdGVUQi5tYWluUmVmTGlzdC5wdXNoKHJlZm9iaik7XG5cdFx0fVxuXHRcdHJldHVybiByZXM7XG5cdH07XG5cblx0Ly8gTWFrZSBhIHJlZmVyZW5jZSB0byBhIG5hbWVkIHJlZlxuXHRDaXRlVEIuZ2V0TmFtZWRSZWYgPSAocmVmbmFtZSwgZm9yaW5zZXJ0KSA9PiB7XG5cdFx0aWYgKGZvcmluc2VydCkge1xuXHRcdFx0Q2l0ZVRCLm1haW5SZWZMaXN0LnB1c2goe1xuXHRcdFx0XHRzaG9ydHRhZzogdHJ1ZSxcblx0XHRcdFx0cmVmbmFtZSxcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRyZXR1cm4gYDxyZWYgbmFtZT0ke0NpdGVUQi5nZXRRdW90ZWRTdHJpbmcocmVmbmFtZSl9IC8+YDtcblx0fTtcblxuXHQvLyBGdW5jdGlvbiB0byBsb2FkIHRoZSByZWYgbGlzdFxuXHRDaXRlVEIubG9hZFJlZnMgPSAoKSA9PiB7XG5cdFx0aWYgKENpdGVUQi5yZWZzTG9hZGVkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdENpdGVUQi5nZXRQYWdlVGV4dChDaXRlVEIubG9hZFJlZnNJbnRlcm5hbCk7XG5cdH07XG5cblx0Ly8gRnVuY3Rpb24gdGhhdCBhY3R1YWxseSBsb2FkcyB0aGUgbGlzdCBmcm9tIHRoZSBwYWdlIHRleHRcblx0Q2l0ZVRCLmxvYWRSZWZzSW50ZXJuYWwgPSAodGV4dCkgPT4ge1xuXHRcdC8vIFdoYXQgdGhpcyBkb2VzOiAgICAgICAgICAgICBleHRyYWN0IGZpcnN0IG5hbWUvZ3JvdXAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmFjdCBzZWNvbmQgbmFtZS9ncm91cCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3J0dGFnICAgaW5uZXIgY29udGVudFxuXHRcdGNvbnN0IHJlZnNyZWdleCA9XG5cdFx0XHQvPCAqcmVmKD86ICsobmFtZXxncm91cCkgKj0gKig/OlwiKFteXCJdKj8pXCJ8JyhbXiddKj8pJ3woW14gJ1wiLz5dKj8pKSAqKT8gKig/OiArKG5hbWV8Z3JvdXApICo9ICooPzpcIihbXlwiXSo/KVwifCcoW14nXSo/KSd8KFteICdcIi8+XSo/KSkgKik/ICooPzpcXC8gKj58PigoPzoufFxcbikqPyk8ICpcXC8gKnJlZiAqPikvZ2ltO1xuXHRcdC8vIFRoaXMgc2hvdWxkIHdvcmsgcmVnYXJkbGVzcyBvZiB0aGUgcXVvdGluZyB1c2VkIGZvciBuYW1lcy9ncm91cHMgYW5kIGZvciBsaW5lYnJlYWtzIGluIHRoZSBpbm5lciBjb250ZW50XG5cdFx0d2hpbGUgKHRydWUpIHtcblx0XHRcdGNvbnN0IHJlZiA9IHJlZnNyZWdleC5leGVjKHRleHQpO1xuXHRcdFx0aWYgKHJlZiA9PT0gbnVsbCkge1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGNvbnN0IHJlZm9iaiA9IHt9O1xuXHRcdFx0aWYgKHJlZls5XSkge1xuXHRcdFx0XHQvLyBDb250ZW50ICsgc2hvcnQgdGFnIGNoZWNrXG5cdFx0XHRcdC8vIG13Lm5vdGlmeShgXCIke3JlZls5XX1cImAsIHt0YWc6ICdSZWZUb29sYmFyMi4wJywgdHlwZTogJ3dhcm4nfSk7XG5cdFx0XHRcdFssICwgLCAsICwgLCAsICwgLCByZWZvYmouY29udGVudF0gPSByZWY7XG5cdFx0XHRcdHJlZm9iai5zaG9ydHRhZyA9IGZhbHNlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVmb2JqLnNob3J0dGFnID0gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGlmIChyZWZbMV0gIT09ICcnKSB7XG5cdFx0XHRcdC8vIEZpcnN0IG5hbWUvZ3JvdXBcblx0XHRcdFx0aWYgKHJlZlsyXSkge1xuXHRcdFx0XHRcdFssICwgcmVmb2JqW2ByZWYke3JlZlsxXX1gXV0gPSByZWY7XG5cdFx0XHRcdH0gZWxzZSBpZiAocmVmWzNdKSB7XG5cdFx0XHRcdFx0WywgLCAsIHJlZm9ialtgcmVmJHtyZWZbMV19YF1dID0gcmVmO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFssICwgLCAsIHJlZm9ialtgcmVmJHtyZWZbMV19YF1dID0gcmVmO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAocmVmWzVdICE9PSAnJykge1xuXHRcdFx0XHQvLyBTZWNvbmQgbmFtZS9ncm91cFxuXHRcdFx0XHRpZiAocmVmWzZdKSB7XG5cdFx0XHRcdFx0WywgLCAsICwgLCAsIHJlZm9ialtgcmVmJHtyZWZbNV19YF1dID0gcmVmO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHJlZls3XSkge1xuXHRcdFx0XHRcdFssICwgLCAsICwgLCAsIHJlZm9ialtgcmVmJHtyZWZbNV19YF1dID0gcmVmO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFssICwgLCAsICwgLCAsICwgcmVmb2JqW2ByZWYke3JlZls1XX1gXV0gPSByZWY7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdENpdGVUQi5tYWluUmVmTGlzdC5wdXNoKHJlZm9iaik7XG5cdFx0fVxuXHRcdENpdGVUQi5yZWZzTG9hZGVkID0gdHJ1ZTtcblx0XHRDaXRlVEIuc2V0dXBFcnJvckNoZWNrKCk7XG5cdFx0Q2l0ZVRCLnNldHVwTmFtZWRSZWZzKCk7XG5cdH07XG5cblx0Ly8gQUpBWCBGVU5DVElPTlNcblx0Ly8gUGFyc2Ugc29tZSB3aWtpdGV4dCBhbmQgaGFuZCBpdCBvZmYgdG8gYSBjYWxsYmFjayBmdW5jdGlvblxuXHRDaXRlVEIucGFyc2UgPSAodGV4dCwgY2FsbGJhY2spID0+IHtcblx0XHRjb25zdCBwb3N0ZGF0YSA9IHtcblx0XHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRcdHRpdGxlOiBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJyksXG5cdFx0XHR0ZXh0LFxuXHRcdFx0cHJvcDogJ3RleHQnLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0fTtcblx0XHRhcGkucG9zdChwb3N0ZGF0YSkudGhlbigoe3BhcnNlfSkgPT4ge1xuXHRcdFx0Y29uc3QgaHRtbCA9IHBhcnNlLnRleHQ7XG5cdFx0XHRjYWxsYmFjayhodG1sKTtcblx0XHR9KTtcblx0fTtcblxuXHQvLyBVc2UgdGhlIEFQSSB0byBleHBhbmQgdGVtcGxhdGVzIG9uIHNvbWUgdGV4dFxuXHRDaXRlVEIuZXhwYW5kdGVtcGxhdGVzID0gKHRleHQsIGNhbGxiYWNrKSA9PiB7XG5cdFx0Y29uc3QgcG9zdGRhdGEgPSB7XG5cdFx0XHRhY3Rpb246ICdleHBhbmR0ZW1wbGF0ZXMnLFxuXHRcdFx0dGl0bGU6IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKSxcblx0XHRcdHRleHQsXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHR9O1xuXHRcdGFwaS5wb3N0KHBvc3RkYXRhKS50aGVuKCh7ZXhwYW5kdGVtcGxhdGVzfSkgPT4ge1xuXHRcdFx0Y29uc3QgcmVzdGV4dCA9IGV4cGFuZHRlbXBsYXRlcy53aWtpdGV4dDtcblx0XHRcdGNhbGxiYWNrKHJlc3RleHQpO1xuXHRcdH0pO1xuXHR9O1xuXG5cdC8vIEZ1bmN0aW9uIHRvIGdldCB0aGUgcGFnZSB0ZXh0XG5cdENpdGVUQi5nZXRQYWdlVGV4dCA9IChjYWxsYmFjaykgPT4ge1xuXHRcdGNvbnN0IHNlY3Rpb24gPSAkYm9keS5maW5kKCdpbnB1dFtuYW1lPXdwU2VjdGlvbl0nKS52YWwoKTtcblx0XHRpZiAoc2VjdGlvbiA9PT0gJycpIHtcblx0XHRcdGlmIChDaXRlVEIuZ2V0T3B0aW9uKCdleHBhbmR0ZW1wbGF0ZXMnKSkge1xuXHRcdFx0XHRDaXRlVEIuZXhwYW5kdGVtcGxhdGVzKCRib2R5LmZpbmQoJyN3cFRleHRib3gxJykud2lraUVkaXRvcignZ2V0Q29udGVudHMnKS50ZXh0KCksIGNhbGxiYWNrKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNhbGxiYWNrKCRib2R5LmZpbmQoJyN3cFRleHRib3gxJykud2lraUVkaXRvcignZ2V0Q29udGVudHMnKS50ZXh0KCkpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCBwb3N0ZGF0YSA9IHtcblx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRwcm9wOiAncmV2aXNpb25zJyxcblx0XHRcdFx0cnZwcm9wOiAnY29udGVudCcsXG5cdFx0XHRcdHBhZ2VpZHM6IG13LmNvbmZpZy5nZXQoJ3dnQXJ0aWNsZUlkJyksXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHR9O1xuXHRcdFx0aWYgKENpdGVUQi5nZXRPcHRpb24oJ2V4cGFuZHRlbXBsYXRlcycpKSB7XG5cdFx0XHRcdHBvc3RkYXRhLnJ2ZXhwYW5kdGVtcGxhdGVzID0gJzEnO1xuXHRcdFx0fVxuXHRcdFx0YXBpLmdldChwb3N0ZGF0YSkudGhlbigoe3F1ZXJ5fSkgPT4ge1xuXHRcdFx0XHRjb25zdCBwYWdldGV4dCA9IHF1ZXJ5LnBhZ2VzWzBdLnJldmlzaW9uc1swXS5jb250ZW50O1xuXHRcdFx0XHRjYWxsYmFjayhwYWdldGV4dCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH07XG5cblx0Ly8gU2FmZSB2ZXJzaW9uIG9mIGRlY29kZVVSSUNvbXBvbmVudCgpIHRoYXQgZG9lc24ndCB0aHJvdyBleGNlcHRpb25zLlxuXHQvLyBJZiB0aGUgbmF0aXZlIGRlY29kZVVSSUNvbXBvbmVudCgpIHRocmV3IGFuIGV4Y2VwdGlvbiwgdGhlIG9yaWdpbmFsIHN0cmluZyB3aWxsIGJlIHJldHVybmVkLlxuXHRDaXRlVEIuc2FmZURlY29kZVVSSUNvbXBvbmVudCA9IChzKSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdHMgPSBkZWNvZGVVUklDb21wb25lbnQocyk7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHQvKiBlbXB0eSAqL1xuXHRcdH1cblx0XHRyZXR1cm4gcztcblx0fTtcblxuXHQvLyBBdXRvZmlsbCBhIHRlbXBsYXRlIGZyb20gYW4gSUQgKElTQk4sIERPSSwgUE1JRCwgVVJMKVxuXHRDaXRlVEIuaW5pdEF1dG9maWxsID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IGVsZW1pZCA9ICQodGhpcykuYXR0cignaWQnKSA/PyAnJztcblx0XHRjb25zdCByZXMgPSAvXmNpdGUtYXV0by0oLio/KS0oLiopLSguKikkLy5leGVjKGVsZW1pZCk7XG5cdFx0aWYgKCFyZXMpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0Y29uc3QgWywgdGVtLCBmaWVsZCwgYXV0b3R5cGVdID0gcmVzO1xuXHRcdGxldCBpZCA9ICQoYCNjaXRlLSR7dGVtfS0ke2ZpZWxkfWApLnZhbCgpO1xuXHRcdGlmICghaWQpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0bGV0IHVybCA9ICcvL2NpdG9pZC5xaXV3ZW4ubmV0LmNuL2xvb2t1cC5waHA/Jztcblx0XHQvLyBDaXRvaWQgZXhwZWN0cyBtaW5pbWFsbHkgZW5jb2RlZCBpbnB1dCwgc28gZG8gc29tZSBzcGVjdWxhdGl2ZSBkZWNvZGluZyBoZXJlIHRvIGF2b2lkXG5cdFx0Ly8gNDA0IGZldGNoZXMuIGh0dHBzOi8vcGhhYnJpY2F0b3Iud2lraW1lZGlhLm9yZy9UMTQ2NTM5XG5cdFx0aWQgPSBDaXRlVEIuc2FmZURlY29kZVVSSUNvbXBvbmVudChpZCk7XG5cdFx0dXJsICs9IGAke2F1dG90eXBlfT0ke2VuY29kZVVSSUNvbXBvbmVudChpZCl9YDtcblx0XHR1cmwgKz0gYCZ0ZW1wbGF0ZT0ke2VuY29kZVVSSUNvbXBvbmVudCh0ZW0pfWA7XG5cdFx0Y29uc3QgcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXHRcdHMuc2V0QXR0cmlidXRlKCdzcmMnLCB1cmwpO1xuXHRcdHMuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQvamF2YXNjcmlwdCcpO1xuXHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kKHMpO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fTtcblxuXHQvLyBDYWxsYmFjayBmb3IgYXV0b2ZpbGxcblx0Ly8gVE9ETzogQXV0b2ZpbGwgdGhlIFVSTCwgYXQgbGVhc3QgZm9yIERPSVxuXHRDaXRlVEIuYXV0b0ZpbGwgPSAoZGF0YSwgdGVtcGxhdGUsIHR5cGUpID0+IHtcblx0XHRjb25zdCBjbCA9IGBjaXRlLSR7dGVtcGxhdGV9LWA7XG5cdFx0bGV0IGksIGo7XG5cdFx0bGV0IGNvYXV0aG9ycztcblx0XHQkKGAuJHtjbH10aXRsZWApLnZhbChkYXRhLnRpdGxlKTtcblx0XHQvLyBGaWxsIGluIGF1dGhvcnNcblx0XHRpZiAoZGF0YS5hdXRob3JzICYmIGRhdGEuYXV0aG9ycy5sZW5ndGggPiAwKSB7XG5cdFx0XHRpZiAoJChgLiR7Y2x9bGFzdC1pbmNyLTFgKS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdGNvbnN0IGNsYXNzZXMgPSAkKGAuJHtjbH1sYXN0LWluY3ItMWApLmVxKDApLmF0dHIoJ2NsYXNzJyk/LnNwbGl0KC9cXHMrLyk7XG5cdFx0XHRcdGlmICghY2xhc3Nlcykge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsZXQgZ3JvdXAgPSBmYWxzZTtcblx0XHRcdFx0Y29uc3QgcGF0dCA9IC9jaXRlLVteLV0qPy1pbmNyLSguKikvO1xuXHRcdFx0XHRmb3IgKGNvbnN0IGNsYXNzXyBvZiBjbGFzc2VzKSB7XG5cdFx0XHRcdFx0aWYgKHBhdHQuZXhlYyhjbGFzc18pKSB7XG5cdFx0XHRcdFx0XHRbLCBncm91cF0gPSBwYXR0LmV4ZWMoY2xhc3NfKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHQkKGAuJHtjbH1sYXN0LWluY3ItMWApLnZhbChkYXRhLmF1dGhvcnNbMF1bMF0pO1xuXHRcdFx0XHQkKGAuJHtjbH1maXJzdC1pbmNyLTFgKS52YWwoZGF0YS5hdXRob3JzWzBdWzFdKTtcblx0XHRcdFx0Y29uc3QgZWxlbWlkID0gYCNjaXRlLWluY3ItJHt0ZW1wbGF0ZX0tJHtncm91cH1gO1xuXHRcdFx0XHRmb3IgKGkgPSAyOyBpIDwgZGF0YS5hdXRob3JzLmxlbmd0aCArIDE7IGkrKykge1xuXHRcdFx0XHRcdCQoZWxlbWlkKS50cmlnZ2VyKCdjbGljaycpO1xuXHRcdFx0XHRcdCQoYC4ke2NsfWxhc3QtaW5jci0ke2kudG9TdHJpbmcoKX1gKS52YWwoZGF0YS5hdXRob3JzW2kgLSAxXVswXSk7XG5cdFx0XHRcdFx0JChgLiR7Y2x9Zmlyc3QtaW5jci0ke2kudG9TdHJpbmcoKX1gKS52YWwoZGF0YS5hdXRob3JzW2kgLSAxXVsxXSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoJChgLiR7Y2x9YXV0aG9yLWluY3ItMWApLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0Y29uc3QgY2xhc3NlcyA9ICQoYC4ke2NsfWF1dGhvci1pbmNyLTFgKS5lcSgwKS5hdHRyKCdjbGFzcycpPy5zcGxpdCgvXFxzKy8pO1xuXHRcdFx0XHRpZiAoIWNsYXNzZXMpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0bGV0IGdyb3VwID0gZmFsc2U7XG5cdFx0XHRcdGNvbnN0IHBhdHQgPSAvY2l0ZS1bXi1dKj8taW5jci0oLiopLztcblx0XHRcdFx0Zm9yIChjb25zdCBjbGFzc18gb2YgY2xhc3Nlcykge1xuXHRcdFx0XHRcdGlmIChwYXR0LmV4ZWMoY2xhc3NfKSkge1xuXHRcdFx0XHRcdFx0WywgZ3JvdXBdID0gcGF0dC5leGVjKGNsYXNzXyk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0JChgLiR7Y2x9YXV0aG9yLWluY3ItMWApLnZhbChkYXRhLmF1dGhvcnNbMF0uam9pbignLCAnKSk7XG5cdFx0XHRcdGNvbnN0IGVsZW1pZCA9IGAjY2l0ZS1pbmNyLSR7dGVtcGxhdGV9LSR7Z3JvdXB9YDtcblx0XHRcdFx0Zm9yIChpID0gMjsgaSA8IGRhdGEuYXV0aG9ycy5sZW5ndGggKyAxOyBpKyspIHtcblx0XHRcdFx0XHQkKGVsZW1pZCkudHJpZ2dlcignY2xpY2snKTtcblx0XHRcdFx0XHQkKGAuJHtjbH1hdXRob3ItaW5jci0ke2kudG9TdHJpbmcoKX1gKS52YWwoZGF0YS5hdXRob3JzW2kgLSAxXS5qb2luKCcsICcpKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICgkKGAuJHtjbH1sYXN0MWApLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0Zm9yIChpID0gMDsgZGF0YS5hdXRob3JzICYmIGkgPCBkYXRhLmF1dGhvcnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoJChgLiR7Y2x9bGFzdCR7aSArIDF9YCkubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHQkKGAuJHtjbH1sYXN0JHtpICsgMX1gKS52YWwoZGF0YS5hdXRob3JzW2ldWzBdKTtcblx0XHRcdFx0XHRcdCQoYC4ke2NsfWZpcnN0JHtpICsgMX1gKS52YWwoZGF0YS5hdXRob3JzW2ldWzFdKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Y29hdXRob3JzID0gW107XG5cdFx0XHRcdFx0XHRmb3IgKGogPSBpOyBqIDwgZGF0YS5hdXRob3JzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0XHRcdGNvYXV0aG9ycy5wdXNoKGRhdGEuYXV0aG9yc1tqXS5qb2luKCcsICcpKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdCQoYC4ke2NsfWNvYXV0aG9yc2ApLnZhbChjb2F1dGhvcnMuam9pbignOyAnKSk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoJChgLiR7Y2x9YXV0aG9yMWApLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRjb25zdCBhdXRob3JzID0gW107XG5cdFx0XHRcdGZvciAoaSA9IDA7IGRhdGEuYXV0aG9ycyAmJiBpIDwgZGF0YS5hdXRob3JzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0YXV0aG9ycy5wdXNoKGRhdGEuYXV0aG9yc1tpXS5qb2luKCcsICcpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQkKGAuJHtjbH1hdXRob3JzYCkudmFsKGF1dGhvcnMuam9pbignOyAnKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmb3IgKGkgPSAwOyBkYXRhLmF1dGhvcnMgJiYgaSA8IGRhdGEuYXV0aG9ycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmICgkKGAuJHtjbH1hdXRob3Ike2kgKyAxfWApLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0JChgLiR7Y2x9YXV0aG9yJHtpICsgMX1gKS52YWwoZGF0YS5hdXRob3JzW2ldLmpvaW4oJywgJykpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRjb2F1dGhvcnMgPSBbXTtcblx0XHRcdFx0XHRcdGZvciAoaiA9IGk7IGogPCBkYXRhLmF1dGhvcnMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRcdFx0Y29hdXRob3JzLnB1c2goZGF0YS5hdXRob3JzW2pdLmpvaW4oJywgJykpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0JChgLiR7Y2x9Y29hdXRob3JzYCkudmFsKGNvYXV0aG9ycy5qb2luKCc7ICcpKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEZvcm1hdCBwYXJ0aWFsIGRhdGVzIG9mIHRoZSBmb3JtYXQgWVlZWS1NTSwgWVlZWS1NTS1YWCwgb3IgWVlZWS1NTS1ERCBjb3JyZWN0bHlcblx0XHRpZiAoZGF0YS5kYXRlKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjb25zdCBEVCA9IG5ldyBEYXRlKGRhdGEuZGF0ZSk7XG5cdFx0XHRcdGlmICgvXlxcZHs0fS1cXGR7Mn0oLVhYKT8kL2kudGVzdChkYXRhLmRhdGUpKSB7XG5cdFx0XHRcdFx0ZGF0YS5kYXRlID0gZGF0YS5kYXRlLnJlcGxhY2UoJy1YWCcsICcnKTtcblx0XHRcdFx0XHQkKGAuJHtjbH1kYXRlYCkudmFsKENpdGVUQi5mb3JtYXREYXRlKERULCBmYWxzZSwgdHJ1ZSkpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKC9eXFxkezR9LVxcZHsyfS1cXGR7Mn0/L2kudGVzdChkYXRhLmRhdGUpKSB7XG5cdFx0XHRcdFx0JChgLiR7Y2x9ZGF0ZWApLnZhbChDaXRlVEIuZm9ybWF0RGF0ZShEVCwgdHJ1ZSwgdHJ1ZSkpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCQoYC4ke2NsfWRhdGVgKS52YWwoZGF0YS5kYXRlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdC8qIGVtcHR5ICovXG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQoYC4ke2NsfWRhdGVgKS52YWwoZGF0YS5kYXRlKTtcblx0XHR9XG5cblx0XHRzd2l0Y2ggKHR5cGUpIHtcblx0XHRcdGNhc2UgJ3BtaWQnOlxuXHRcdFx0Y2FzZSAnZG9pJzpcblx0XHRcdFx0JChgLiR7Y2x9am91cm5hbGApLnZhbChkYXRhLmpvdXJuYWwpO1xuXHRcdFx0XHQkKGAuJHtjbH12b2x1bWVgKS52YWwoZGF0YS52b2x1bWUpO1xuXHRcdFx0XHQkKGAuJHtjbH1pc3N1ZWApLnZhbChkYXRhLmlzc3VlKTtcblx0XHRcdFx0JChgLiR7Y2x9cGFnZXNgKS52YWwoZGF0YS5wYWdlcyk7XG5cdFx0XHRcdGlmICh0eXBlID09PSAncG1pZCcgJiYgZGF0YS5kb2kpIHtcblx0XHRcdFx0XHQkKGAuJHtjbH1kb2lgKS52YWwoZGF0YS5kb2kpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ2lzYm4nOlxuXHRcdFx0XHQkKGAuJHtjbH1wdWJsaXNoZXJgKS52YWwoZGF0YS5wdWJsaXNoZXIpO1xuXHRcdFx0XHQkKGAuJHtjbH1sb2NhdGlvbmApLnZhbChkYXRhLmxvY2F0aW9uKTtcblx0XHRcdFx0JChgLiR7Y2x9ZWRpdGlvbmApLnZhbChkYXRhLmVkaXRpb24pO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICd1cmwnOlxuXHRcdFx0XHQkKGAuJHtjbH1qb3VybmFsYCkudmFsKGRhdGEuam91cm5hbCk7XG5cdFx0XHRcdCQoYC4ke2NsfXZvbHVtZWApLnZhbChkYXRhLnZvbHVtZSk7XG5cdFx0XHRcdCQoYC4ke2NsfWlzc3VlYCkudmFsKGRhdGEuaXNzdWUpO1xuXHRcdFx0XHQkKGAuJHtjbH1wYWdlc2ApLnZhbChkYXRhLnBhZ2VzKTtcblx0XHRcdFx0JChgLiR7Y2x9cHVibGlzaGVyYCkudmFsKGRhdGEucHVibGlzaGVyKTtcblx0XHRcdFx0JChgLiR7Y2x9ZWRpdGlvbmApLnZhbChkYXRhLmVkaXRpb24pO1xuXHRcdFx0XHQkKGAuJHtjbH1pc2JuYCkudmFsKGRhdGEuaXNibik7XG5cdFx0XHRcdCQoYC4ke2NsfWlzc25gKS52YWwoZGF0YS5pc3NuKTtcblx0XHRcdFx0JChgLiR7Y2x9ZG9pYCkudmFsKGRhdGEuZG9pKTtcblx0XHRcdFx0Ly8gXCJlbi1VU1wiIGlzbid0IGEgdmFsaWQgdmFsdWUgZm9yIHRoZSBsYW5ndWFnZSBwYXJhbWV0ZXJcblx0XHRcdFx0aWYgKGRhdGEubGFuZ3VhZ2UgJiYgZGF0YS5sYW5ndWFnZSAhPT0gJ2VuLVVTJyAmJiBkYXRhLmxhbmd1YWdlICE9PSAnZW4tR0InKSB7XG5cdFx0XHRcdFx0JChgLiR7Y2x9bGFuZ3VhZ2VgKS52YWwoZGF0YS5sYW5ndWFnZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0JChgLiR7Y2x9Y2hhcHRlcmApLnZhbChkYXRhLmNoYXB0ZXIpO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHQvLyBObyBkZWZhdWx0XG5cdFx0fVxuXHR9O1xuXG5cdC8vIEZPUk0gRElBTE9HIEZVTkNUSU9OU1xuXHQvLyBBZGQgbmV3IGluY3JlbWVudGFibGUgZmllbGRzXG5cdENpdGVUQi5pbmNyZW1lbnRGaWVsZHMgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgdGVtcGxhdGUgPSBDaXRlVEIuZ2V0T3BlblRlbXBsYXRlKCk7XG5cdFx0Y29uc3QgW2N1cnJlbnRyb3ddID0gJCh0aGlzKS5wYXJlbnRzKCd0cicpO1xuXHRcdCQodGhpcykucHJldigpLmNzcygnd2lkdGgnLCAnMTAwJScpO1xuXHRcdCQodGhpcykuZGV0YWNoKCk7XG5cdFx0Y29uc3QgZWxlbWlkID0gJCh0aGlzKS5hdHRyKCdpZCcpID8/ICcnO1xuXHRcdGNvbnN0IHJlcyA9IC9eY2l0ZS1pbmNyLSguKj8pLSguKikkLy5leGVjKGVsZW1pZCk7XG5cdFx0aWYgKCFyZXMpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgWywgLCBncm91cF0gPSByZXM7XG5cdFx0Y29uc3QgaW5jcmVtZW50cyA9IHRlbXBsYXRlLmluY3JlbWVudGFibGVzW2dyb3VwXTtcblx0XHRjb25zdCB7ZmllbGRzfSA9IGluY3JlbWVudHM7XG5cdFx0dGVtcGxhdGUuaW5jcmVtZW50YWJsZXNbZ3JvdXBdLnZhbCArPSAxO1xuXHRcdGNvbnN0IHRycyA9IHRlbXBsYXRlLm1ha2VGb3JtSW5uZXIoZmllbGRzLCBmYWxzZSk7XG5cdFx0dHJzLnJldmVyc2UoKTtcblx0XHRmb3IgKGNvbnN0IHRyIG9mIHRycykge1xuXHRcdFx0JChjdXJyZW50cm93KS5hZnRlcih0cik7XG5cdFx0fVxuXHR9O1xuXG5cdC8vIGZpbGwgdGhlIGFjY2Vzc2RhdGUgcGFyYW0gd2l0aCB0aGUgY3VycmVudCBkYXRlXG5cdENpdGVUQi5maWxsQWNjZXNzZGF0ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCBlbGVtaWQgPSAkKHRoaXMpLmF0dHIoJ2lkJykgPz8gJyc7XG5cdFx0Y29uc3QgcmVzID0gL15jaXRlLWRhdGUtKC4qPyktKC4qKSQvLmV4ZWMoZWxlbWlkKTtcblx0XHRjb25zdCBbLCBpZF0gPSByZXM7XG5cdFx0aWYgKCFyZXMpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgWywgLCBmaWVsZF0gPSByZXM7XG5cdFx0Y29uc3QgRFQgPSBuZXcgRGF0ZSgpO1xuXHRcdGNvbnN0IGRhdGVzdHIgPSBDaXRlVEIuZm9ybWF0RGF0ZShEVCk7XG5cdFx0JChgI2NpdGUtJHtpZH0tJHtmaWVsZH1gKS52YWwoZGF0ZXN0cik7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xuXG5cdENpdGVUQi5mb3JtYXREYXRlID0gKERULCB1c2VkYXksIHVzZW1vbnRoKSA9PiB7XG5cdFx0aWYgKHVzZWRheSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR1c2VkYXkgPSB0cnVlO1xuXHRcdH1cblx0XHRpZiAodXNlbW9udGggPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dXNlbW9udGggPSB0cnVlO1xuXHRcdH1cblx0XHRsZXQgZGF0ZXN0ciA9IENpdGVUQi5nZXRPcHRpb24oJ2RhdGUgZm9ybWF0Jyk7XG5cdFx0bGV0IHptb250aCA9ICcnO1xuXHRcdGxldCBtb250aCA9IERULmdldFVUQ01vbnRoKCkgKyAxO1xuXHRcdGlmIChtb250aCA8IDEwKSB7XG5cdFx0XHR6bW9udGggPSBgMCR7bW9udGgudG9TdHJpbmcoKX1gO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR6bW9udGggPSBtb250aC50b1N0cmluZygpO1xuXHRcdH1cblx0XHRtb250aCA9IG1vbnRoLnRvU3RyaW5nKCk7XG5cdFx0bGV0IHpkYXRlID0gJyc7XG5cdFx0bGV0IGRhdGUgPSBEVC5nZXRVVENEYXRlKCk7XG5cdFx0aWYgKGRhdGUgPCAxMCkge1xuXHRcdFx0emRhdGUgPSBgMCR7ZGF0ZS50b1N0cmluZygpfWA7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHpkYXRlID0gZGF0ZS50b1N0cmluZygpO1xuXHRcdH1cblx0XHRkYXRlID0gZGF0ZS50b1N0cmluZygpO1xuXHRcdGlmICh1c2VkYXkpIHtcblx0XHRcdGRhdGVzdHIgPSBkYXRlc3RyLnJlcGxhY2UoJzxkYXRlPicsIGRhdGUpO1xuXHRcdFx0ZGF0ZXN0ciA9IGRhdGVzdHIucmVwbGFjZSgnPHpkYXRlPicsIHpkYXRlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZGF0ZXN0ciA9IGRhdGVzdHIucmVwbGFjZSgnPGRhdGU+JywgJycpO1xuXHRcdFx0ZGF0ZXN0ciA9IGRhdGVzdHIucmVwbGFjZSgnPHpkYXRlPicsICcnKTtcblx0XHR9XG5cdFx0aWYgKHVzZW1vbnRoKSB7XG5cdFx0XHRkYXRlc3RyID0gZGF0ZXN0ci5yZXBsYWNlKCc8bW9udGg+JywgbW9udGgpO1xuXHRcdFx0ZGF0ZXN0ciA9IGRhdGVzdHIucmVwbGFjZSgnPHptb250aD4nLCB6bW9udGgpO1xuXHRcdFx0ZGF0ZXN0ciA9IGRhdGVzdHIucmVwbGFjZSgnPG1vbnRobmFtZT4nLCBDaXRlVEIuZ2V0T3B0aW9uKCdtb250aHMnKVtEVC5nZXRVVENNb250aCgpXSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRhdGVzdHIgPSBkYXRlc3RyLnJlcGxhY2UoJzxtb250aD4nLCAnJyk7XG5cdFx0XHRkYXRlc3RyID0gZGF0ZXN0ci5yZXBsYWNlKCc8em1vbnRoPicsICcnKTtcblx0XHRcdGRhdGVzdHIgPSBkYXRlc3RyLnJlcGxhY2UoJzxtb250aG5hbWU+JywgJycpO1xuXHRcdH1cblx0XHRkYXRlc3RyID0gZGF0ZXN0ci5yZXBsYWNlKCc8eWVhcj4nLCBEVC5nZXRVVENGdWxsWWVhcigpLnRvU3RyaW5nKCkpO1xuXHRcdHJldHVybiBkYXRlc3RyLnJlcGxhY2UoL15bIC9cXC0sLl0qKC4qPylbIC9cXC0sLl0qJC9nLCAnJDEnKTsgLy8gQ2xlYW51cCBhbnkgZGFuZ2xpbmcgc3BhY2VzIG9yIGNvbm5lY3RvcnMgdGhhdCBtaWdodCByZXN1bHQgZnJvbSBvbWl0dGluZyBkYXRlL21vbnRoXG5cdH07XG5cblx0Ly8gRnVuY3Rpb24gY2FsbGVkIGFmdGVyIHRoZSByZWYgbGlzdCBpcyBsb2FkZWQsIHRvIGFjdHVhbGx5IHNldCB0aGUgY29udGVudHMgb2YgdGhlIG5hbWVkIHJlZiBkaWFsb2dcblx0Ly8gVW50aWwgdGhlIGxpc3QgaXMgbG9hZGVkLCBpdHMganVzdCBhIFwiTG9hZGluZ1wiIHBsYWNlaG9sZGVyXG5cdENpdGVUQi5zZXR1cE5hbWVkUmVmcyA9ICgpID0+IHtcblx0XHRjb25zdCBuYW1lcyA9IFtdO1xuXHRcdGxldCBpO1xuXHRcdGZvciAoaSA9IDA7IGkgPCBDaXRlVEIubWFpblJlZkxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmICghQ2l0ZVRCLm1haW5SZWZMaXN0W2ldLnNob3J0dGFnICYmIENpdGVUQi5tYWluUmVmTGlzdFtpXS5yZWZuYW1lKSB7XG5cdFx0XHRcdG5hbWVzLnB1c2goQ2l0ZVRCLm1haW5SZWZMaXN0W2ldKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y29uc3Qgc3R1ZmYgPSAkKCc8ZGl2PicpO1xuXHRcdCRib2R5LmZpbmQoJyNjaXRldG9vbGJhci1uYW1lZHJlZnMnKS5odG1sKHN0dWZmKTtcblx0XHRpZiAobmFtZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRzdHVmZi5odG1sKGdldE1lc3NhZ2UoJ2NpdGUtbm8tbmFtZWRyZWZzJykpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHVmZi5odG1sKGdldE1lc3NhZ2UoJ2NpdGUtbmFtZWRyZWZzLWludHJvJykpO1xuXHRcdFx0Y29uc3Qgc2VsZWN0ID0gJCgnPHNlbGVjdD4nKS5hdHRyKCdpZCcsICdjaXRlLW5hbWVkcmVmLXNlbGVjdCcpO1xuXHRcdFx0c2VsZWN0LmFwcGVuZCgkKCc8b3B0aW9uPicpLmF0dHIoJ3ZhbHVlJywgJycpLnRleHQoZ2V0TWVzc2FnZSgnY2l0ZS1uYW1lZC1yZWZzLWRyb3Bkb3duJykpKTtcblx0XHRcdGZvciAoaSA9IDA7IGkgPCBuYW1lcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRzZWxlY3QuYXBwZW5kKCQoJzxvcHRpb24+JykudGV4dChuYW1lc1tpXS5yZWZuYW1lKSk7XG5cdFx0XHR9XG5cdFx0XHRzdHVmZi5hZnRlcihzZWxlY3QpO1xuXHRcdFx0c2VsZWN0LmJlZm9yZSgnPGJyPicpO1xuXHRcdFx0Y29uc3QgcHJldmxhYmVsID0gJCgnPGRpdj4nKVxuXHRcdFx0XHQuYXR0cignaWQnLCAnY2l0ZS1ucmVmLXByZXZpZXctbGFiZWwnKVxuXHRcdFx0XHQuY3NzKCdkaXNwbGF5JywgJ25vbmUnKVxuXHRcdFx0XHQuaHRtbChnZXRNZXNzYWdlKCdjaXRlLXJhdy1wcmV2aWV3JykpO1xuXHRcdFx0c2VsZWN0LmFmdGVyKHByZXZsYWJlbCk7XG5cdFx0XHRwcmV2bGFiZWwuYmVmb3JlKCc8YnI+PGJyPicpO1xuXHRcdFx0cHJldmxhYmVsLmFmdGVyKCc8ZGl2IGlkPVwiY2l0ZS1uYW1lZHJlZi1wcmV2aWV3XCIgc3R5bGU9XCJwYWRkaW5nOjAuNWVtOyBmb250LXNpemU6MTEwJVwiIC8+Jyk7XG5cdFx0XHRjb25zdCBwYXJzZWxhYmVsID0gJCgnPHNwYW4+Jylcblx0XHRcdFx0LmF0dHIoJ2lkJywgJ2NpdGUtcGFyc2VkLWxhYmVsJylcblx0XHRcdFx0LmNzcygnZGlzcGxheScsICdub25lJylcblx0XHRcdFx0Lmh0bWwoZ2V0TWVzc2FnZSgnY2l0ZS1wYXJzZWQtbGFiZWwnKSk7XG5cdFx0XHQkYm9keS5maW5kKCcjY2l0ZS1uYW1lZHJlZi1wcmV2aWV3JykuYWZ0ZXIocGFyc2VsYWJlbCk7XG5cdFx0XHRwYXJzZWxhYmVsLmFmdGVyKCc8ZGl2IGlkPVwiY2l0ZS1uYW1lZHJlZi1wYXJzZWRcIiBzdHlsZT1cInBhZGRpbmctYm90dG9tOjAuNWVtOyBmb250LXNpemU6MTEwJVwiIC8+Jyk7XG5cdFx0XHRjb25zdCBsaW5rID0gJCgnPGE+Jylcblx0XHRcdFx0LmF0dHIoe1xuXHRcdFx0XHRcdGhyZWY6ICcjJyxcblx0XHRcdFx0XHRpZDogJ2NpdGUtbnJlZi1wYXJzZScsXG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jc3Moe1xuXHRcdFx0XHRcdG1hcmdpbjogJzAgMWVtIDAgMWVtJyxcblx0XHRcdFx0XHRkaXNwbGF5OiAnbm9uZScsXG5cdFx0XHRcdFx0Y29sb3I6ICcjMDAwMDhiJyxcblx0XHRcdFx0fSk7XG5cdFx0XHRsaW5rLmh0bWwoZ2V0TWVzc2FnZSgnY2l0ZS1mb3JtLXBhcnNlJykpO1xuXHRcdFx0JGJvZHkuZmluZCgnI2NpdGUtbmFtZWRyZWYtcGFyc2VkJykuYWZ0ZXIobGluayk7XG5cblx0XHRcdCRib2R5LmZpbmQoJyNjaXRlLW5hbWVkcmVmLXNlbGVjdCcpLm9uKCdjaGFuZ2UnLCBDaXRlVEIubmFtZWRSZWZTZWxlY3RDbGljayk7XG5cdFx0XHQkYm9keS5maW5kKCcjY2l0ZS1ucmVmLXBhcnNlJykub24oJ2NsaWNrJywgQ2l0ZVRCLm5yZWZQYXJzZUNsaWNrKTtcblx0XHR9XG5cdH07XG5cblx0Ly8gRnVuY3Rpb24gdG8gZ2V0IHRoZSBlcnJvcmNoZWNrIGZvcm0gSFRNTFxuXHRDaXRlVEIuc2V0dXBFcnJvckNoZWNrID0gKCkgPT4ge1xuXHRcdGNvbnN0IGZvcm0gPSAkKCc8ZGl2PicpLmF0dHIoJ2lkJywgJ2NpdGUtZXJyb3JjaGVjay1oZWFkaW5nJykuaHRtbChnZXRNZXNzYWdlKCdjaXRlLWVycm9yY2hlY2staGVhZGluZycpKTtcblx0XHRjb25zdCB1bCA9ICQoJzx1bD4nKS5hdHRyKCdpZCcsICdjaXRlLWVycmNoZWNrLWxpc3QnKTtcblx0XHRsZXQgdGVzdDtcblx0XHRmb3IgKGNvbnN0IHQgaW4gQ2l0ZVRCLkVycm9yQ2hlY2tzKSB7XG5cdFx0XHRpZiAoT2JqZWN0Lmhhc093bihDaXRlVEIuRXJyb3JDaGVja3MsIHQpKSB7XG5cdFx0XHRcdHRlc3QgPSBDaXRlVEIuRXJyb3JDaGVja3NbdF07XG5cdFx0XHRcdHVsLmFwcGVuZCh0ZXN0LmdldFJvdygpKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Zm9ybS5hcHBlbmQodWwpO1xuXHRcdCRib2R5LmZpbmQoJyNjaXRldG9vbGJhci1lcnJvcmNoZWNrJykuaHRtbChmb3JtLmh0bWwoKSk7XG5cdH07XG5cblx0Ly8gQ2FsbGJhY2sgZnVuY3Rpb24gZm9yIHBhcnNlZCBwcmV2aWV3XG5cdENpdGVUQi5maWxsTnJlZlByZXZpZXcgPSAocGFyc2VkKSA9PiB7XG5cdFx0JGJvZHkuZmluZCgnI2NpdGUtcGFyc2VkLWxhYmVsJykuc2hvdygpO1xuXHRcdCRib2R5LmZpbmQoJyNjaXRlLW5hbWVkcmVmLXBhcnNlZCcpLmh0bWwocGFyc2VkKTtcblx0fTtcblxuXHQvLyBDbGljayBoYW5kbGVyIGZvciB0aGUgbmFtZWQtcmVmIHBhcnNlZCBwcmV2aWV3XG5cdENpdGVUQi5ucmVmUGFyc2VDbGljayA9ICgpID0+IHtcblx0XHRjb25zdCBjaG9pY2UgPSAkYm9keS5maW5kKCcjY2l0ZS1uYW1lZHJlZi1zZWxlY3QnKS52YWwoKTtcblx0XHRpZiAoY2hvaWNlID09PSAnJykge1xuXHRcdFx0JGJvZHkuZmluZCgnI2NpdGUtcGFyc2VkLWxhYmVsJykuaGlkZSgpO1xuXHRcdFx0JGJvZHkuZmluZCgnI2NpdGUtbmFtZWRyZWYtcGFyc2VkJykudGV4dCgnJyk7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdCRib2R5LmZpbmQoJyNjaXRlLW5yZWYtcGFyc2UnKS5oaWRlKCk7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBDaXRlVEIubWFpblJlZkxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmICghQ2l0ZVRCLm1haW5SZWZMaXN0W2ldLnNob3J0dGFnICYmIENpdGVUQi5tYWluUmVmTGlzdFtpXS5yZWZuYW1lID09PSBjaG9pY2UpIHtcblx0XHRcdFx0Q2l0ZVRCLnBhcnNlKENpdGVUQi5tYWluUmVmTGlzdFtpXS5jb250ZW50LCBDaXRlVEIuZmlsbE5yZWZQcmV2aWV3KTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHQvLyBDbGljayBoYW5kbGVyIGZvciB0aGUgbmFtZWQtcmVmIGRyb3Bkb3duXG5cdENpdGVUQi5sYXN0bmFtZWRyZWZjaG9pY2UgPSAnJztcblx0Q2l0ZVRCLm5hbWVkUmVmU2VsZWN0Q2xpY2sgPSAoKSA9PiB7XG5cdFx0Y29uc3QgY2hvaWNlID0gJGJvZHkuZmluZCgnI2NpdGUtbmFtZWRyZWYtc2VsZWN0JykudmFsKCk7XG5cdFx0aWYgKENpdGVUQi5sYXN0bmFtZWRyZWZjaG9pY2UgPT09IGNob2ljZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRDaXRlVEIubGFzdG5hbWVkcmVmY2hvaWNlID0gY2hvaWNlO1xuXHRcdCRib2R5LmZpbmQoJyNjaXRlLXBhcnNlZC1sYWJlbCcpLmhpZGUoKTtcblx0XHQkYm9keS5maW5kKCcjY2l0ZS1uYW1lZHJlZi1wYXJzZWQnKS50ZXh0KCcnKTtcblx0XHRpZiAoY2hvaWNlID09PSAnJykge1xuXHRcdFx0JGJvZHkuZmluZCgnI2NpdGUtbnJlZi1wcmV2aWV3LWxhYmVsJykuaGlkZSgpO1xuXHRcdFx0JGJvZHkuZmluZCgnI2NpdGUtbmFtZWRyZWYtcHJldmlldycpLnRleHQoJycpO1xuXHRcdFx0JGJvZHkuZmluZCgnI2NpdGUtbnJlZi1wYXJzZScpLmhpZGUoKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBDaXRlVEIubWFpblJlZkxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmICghQ2l0ZVRCLm1haW5SZWZMaXN0W2ldLnNob3J0dGFnICYmIENpdGVUQi5tYWluUmVmTGlzdFtpXS5yZWZuYW1lID09PSBjaG9pY2UpIHtcblx0XHRcdFx0JGJvZHkuZmluZCgnI2NpdGUtbnJlZi1wcmV2aWV3LWxhYmVsJykuc2hvdygpO1xuXHRcdFx0XHQkYm9keS5maW5kKCcjY2l0ZS1uYW1lZHJlZi1wcmV2aWV3JykudGV4dChDaXRlVEIubWFpblJlZkxpc3RbaV0uY29udGVudCk7XG5cdFx0XHRcdGlmIChDaXRlVEIuZ2V0T3B0aW9uKCdhdXRvcGFyc2UnKSkge1xuXHRcdFx0XHRcdENpdGVUQi5ucmVmUGFyc2VDbGljaygpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCRib2R5LmZpbmQoJyNjaXRlLW5yZWYtcGFyc2UnKS5zaG93KCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0Ly8gY2FsbGJhY2sgZnVuY3Rpb24gZm9yIHBhcnNlZCBwcmV2aWV3XG5cdENpdGVUQi5maWxsVGVtcGxhdGVQcmV2aWV3ID0gKHRleHQpID0+IHtcblx0XHRjb25zdCB0ZW1wbGF0ZSA9IENpdGVUQi5nZXRPcGVuVGVtcGxhdGUoKTtcblx0XHRjb25zdCBkaXYgPSAkKGAjY2l0ZXRvb2xiYXItJHtDaXRlVEIuZXNjU3RyKHRlbXBsYXRlLnNob3J0Zm9ybSl9YCk7XG5cdFx0ZGl2LmZpbmQoJy5jaXRlLXByZXYtcGFyc2VkLWxhYmVsJykuc2hvdygpO1xuXHRcdGRpdi5maW5kKCcuY2l0ZS1wcmV2aWV3LXBhcnNlZCcpLmh0bWwodGV4dCk7XG5cdH07XG5cblx0Ly8gQ2xpY2sgaGFuZGxlciBmb3IgdGVtcGxhdGUgcGFyc2VkIHByZXZpZXdcblx0Q2l0ZVRCLnByZXZQYXJzZUNsaWNrID0gKCkgPT4ge1xuXHRcdGNvbnN0IHJlZiA9IENpdGVUQi5nZXRSZWYodHJ1ZSwgZmFsc2UpO1xuXHRcdGNvbnN0IHRlbXBsYXRlID0gQ2l0ZVRCLmdldE9wZW5UZW1wbGF0ZSgpO1xuXHRcdGNvbnN0IGRpdiA9ICQoYCNjaXRldG9vbGJhci0ke0NpdGVUQi5lc2NTdHIodGVtcGxhdGUuc2hvcnRmb3JtKX1gKTtcblx0XHRkaXYuZmluZCgnLmNpdGUtcHJldi1wYXJzZScpLmhpZGUoKTtcblx0XHRDaXRlVEIucGFyc2UocmVmLCBDaXRlVEIuZmlsbFRlbXBsYXRlUHJldmlldyk7XG5cdH07XG5cblx0Ly8gU2hvdy9oaWRlIHRoZSBleHRyYSBmaWVsZHMgaW4gdGhlIGRpYWxvZyBib3hcblx0Q2l0ZVRCLnNob3dIaWRlRXh0cmEgPSAoKSA9PiB7XG5cdFx0Y29uc3QgdGVtcGxhdGUgPSBDaXRlVEIuZ2V0T3BlblRlbXBsYXRlKCk7XG5cdFx0Y29uc3QgZGl2ID0gJChgI2NpdGV0b29sYmFyLSR7Q2l0ZVRCLmVzY1N0cih0ZW1wbGF0ZS5zaG9ydGZvcm0pfWApO1xuXHRcdGNvbnN0IHNldHRpbmcgPSBkaXYuZmluZCgnLmNpdGUtZm9ybS1zdGF0dXMnKS52YWwoKTtcblx0XHRpZiAoc2V0dGluZyA9PT0gJ2Nsb3NlZCcpIHtcblx0XHRcdGRpdi5maW5kKCcuY2l0ZS1mb3JtLXN0YXR1cycpLnZhbCgnb3BlbicpO1xuXHRcdFx0ZGl2LmZpbmQoJy5jaXRlLWV4dHJhLWZpZWxkcycpLnNob3coMSwgKCkgPT4ge1xuXHRcdFx0XHQvLyBqUXVlcnkgYWRkcyBgZGlzcGxheTogYmxvY2tgLCB3aGljaCBzY3Jld3MgdGhpbmdzIHVwXG5cdFx0XHRcdGRpdi5maW5kKCcuY2l0ZS1leHRyYS1maWVsZHMnKS5jc3Moe1xuXHRcdFx0XHRcdHdpZHRoOiAnMTAwJScsXG5cdFx0XHRcdFx0J2JhY2tncm91bmQtY29sb3InOiAndHJhbnNwYXJlbnQnLFxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkaXYuZmluZCgnLmNpdGUtZm9ybS1zdGF0dXMnKS52YWwoJ2Nsb3NlZCcpO1xuXHRcdFx0ZGl2LmZpbmQoJy5jaXRlLWV4dHJhLWZpZWxkcycpLmhpZGUoKTtcblx0XHR9XG5cdH07XG5cblx0Ly8gUmVzZXRzIGZvcm0gZmllbGRzIGFuZCBwcmV2aWV3c1xuXHQvLyBSZXNldHMgZm9ybSBmaWVsZHMgYW5kIHByZXZpZXdzXG5cdENpdGVUQi5yZXNldEZvcm0gPSAoKSA9PiB7XG5cdFx0Y29uc3QgdGVtcGxhdGUgPSBDaXRlVEIuZ2V0T3BlblRlbXBsYXRlKCk7XG5cdFx0Y29uc3QgZGl2ID0gJChgI2NpdGV0b29sYmFyLSR7Q2l0ZVRCLmVzY1N0cih0ZW1wbGF0ZS5zaG9ydGZvcm0pfWApO1xuXHRcdGRpdi5odG1sKHRlbXBsYXRlLmdldEZvcm0oKSk7XG5cdH07XG5cblx0Ly8gU1RSSU5HIFVUSUxJVFkgRlVOQ1RJT05TXG5cdC8vIFJldHVybnMgYSBzdHJpbmcgcXVvdGVkIGFzIG5lY2Vzc2FyeSBmb3IgbmFtZS9ncm91cCBhdHRyaWJ1dGVzXG5cdENpdGVUQi5nZXRRdW90ZWRTdHJpbmcgPSAocykgPT4ge1xuXHRcdGNvbnN0IHNxID0gLycvLnRlc3Qocyk7IC8vIHNpbmdsZSBxdW90ZXNcblx0XHRjb25zdCBkcSA9IC9cIi8udGVzdChzKTsgLy8gZG91YmxlIHF1b3Rlc1xuXHRcdGlmICghc3EgJiYgIWRxKSB7XG5cdFx0XHQvLyBBbHdheXMgcXVvdGVzIGZvciBub24tbGF0aW4gYWxwaGFiZXRcblx0XHRcdHJldHVybiBgXCIke3N9XCJgO1xuXHRcdH0gZWxzZSBpZiAoIWRxKSB7XG5cdFx0XHQvLyBDYW4gdXNlIGRvdWJsZSBxdW90ZXNcblx0XHRcdHJldHVybiBgXCIke3N9XCJgO1xuXHRcdH0gZWxzZSBpZiAoIXNxKSB7XG5cdFx0XHQvLyBDYW4gdXNlIHNpbmdsZSBxdW90ZXNcblx0XHRcdHJldHVybiBgJyR7c30nYDtcblx0XHR9XG5cdFx0Ly8gSGFzIGRvdWJsZSBhbmQgc2luZ2xlIHF1b3Rlc1xuXHRcdHMgPSBzLnJlcGxhY2UoL1wiL2csIFwiJ1wiKTtcblx0XHRyZXR1cm4gYFwiJHtzfVwiYDtcblx0fTtcblxuXHQvLyBGaXggdXAgc3RyaW5ncyBmb3Igb3V0cHV0IC0gY2FwaXRhbGl6ZSBmaXJzdCBjaGFyLCByZXBsYWNlIHVuZGVyc2NvcmVzIHdpdGggc3BhY2VzXG5cdENpdGVUQi5maXhTdHIgPSAocykgPT4ge1xuXHRcdHMgPSBzLnNsaWNlKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyBzLnNsaWNlKDEpO1xuXHRcdHMgPSBzLnJlcGxhY2UoJ18nLCAnICcpO1xuXHRcdHJldHVybiBzO1xuXHR9O1xuXG5cdC8vIEVzY2FwZSBzcGFjZXMgYW5kIHF1b3RlcyBmb3IgdXNlIGluIEhUTUwgY2xhc3Nlcy9pZHNcblx0Q2l0ZVRCLmVzY1N0ciA9IChzKSA9PiB7XG5cdFx0cmV0dXJuIHMucmVwbGFjZSgvXFxzL2csICctJykucmVwbGFjZSgvJy9nLCBcIlxcXFwnXCIpLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKTtcblx0fTtcblxuXHQvLyBNSVNDIEZVTkNUSU9OU1xuXHQvLyBEZXRlcm1pbmUgd2hpY2ggdGVtcGxhdGUgZm9ybSBpcyBvcGVuLCBhbmQgZ2V0IHRoZSB0ZW1wbGF0ZSBvYmplY3QgZm9yIGl0XG5cdENpdGVUQi5nZXRPcGVuVGVtcGxhdGUgPSAoKSA9PiB7XG5cdFx0Y29uc3QgZGlhbG9ncyA9ICRib2R5LmZpbmQoJy51aS1kaWFsb2ctY29udGVudC51aS13aWRnZXQtY29udGVudDp2aXNpYmxlJyk7XG5cdFx0Y29uc3QgdGVtcGxhdGVuYW1lID0gJChkaWFsb2dzWzBdKS5maW5kKCcuY2l0ZS10ZW1wbGF0ZScpLnZhbCgpO1xuXHRcdHJldHVybiBDaXRlVEIuVGVtcGxhdGVzW3RlbXBsYXRlbmFtZV07XG5cdH07XG5cblx0Ly8gRGlzcGxheSB0aGUgcmVwb3J0IGZvciB0aGUgZXJyb3IgY2hlY2tzXG5cdENpdGVUQi5kaXNwbGF5RXJyb3JzID0gKGVycm9ycykgPT4ge1xuXHRcdCRib2R5LmZpbmQoJyNjaXRlLWVyci1yZXBvcnQnKS5yZW1vdmUoKTtcblx0XHRjb25zdCB0YWJsZSA9ICQoJzx0YWJsZT4nKS5hdHRyKCdpZCcsICdjaXRlLWVyci1yZXBvcnQnKS5jc3Moe1xuXHRcdFx0d2lkdGg6ICcxMDAlJyxcblx0XHRcdGJvcmRlcjogJzFweCBzb2xpZCAjQTlBOUE5Jyxcblx0XHRcdCdiYWNrZ3JvdW5kLWNvbG9yJzogJyNGRkVGRDUnLFxuXHRcdFx0cGFkZGluZzogJzAuMjVlbScsXG5cdFx0XHQnbWFyZ2luLXRvcCc6ICcwLjVlbScsXG5cdFx0fSk7XG5cdFx0JGJvZHkuZmluZCgnI2VkaXRwYWdlLWNvcHl3YXJuJykuYmVmb3JlKHRhYmxlKTtcblx0XHRsZXQgdHI7XG5cdFx0Y29uc3QgdHIxID0gJCgnPHRyPicpLmNzcygnd2lkdGgnLCAnMTAwJScpO1xuXHRcdGNvbnN0IHRoMSA9ICQoJzx0aD4nKS5jc3MoJ3dpZHRoJywgJzYwJScpLmNzcygnZm9udC1zaXplJywgJzExMCUnKS5odG1sKGdldE1lc3NhZ2UoJ2NpdGUtZXJyLXJlcG9ydC1oZWFkaW5nJykpO1xuXHRcdGNvbnN0IHRoMiA9ICQoJzx0aD4nKS5jc3MoJ3dpZHRoJywgJzQwJScpLmNzcygndGV4dC1hbGlnbicsICdyaWdodDsnKTtcblx0XHRjb25zdCBpbSA9ICQoJzxpbWc+JykuYXR0cihcblx0XHRcdCdzcmMnLFxuXHRcdFx0J2h0dHBzOi8vdHUuemhvbmd3ZW4ud2lraS9pbWFnZXMvcWl1d2VuYmFpa2UvemgvdGh1bWIvNS81NS9HdGstc3RvcC5zdmcvMjBweC1HdGstc3RvcC5zdmcucG5nJ1xuXHRcdCk7XG5cdFx0aW0uYXR0cignYWx0JywgZ2V0TWVzc2FnZSgnY2l0ZS1lcnItcmVwb3J0LWNsb3NlJykpLmF0dHIoJ3RpdGxlJywgZ2V0TWVzc2FnZSgnY2l0ZS1lcnItcmVwb3J0LWNsb3NlJykpO1xuXHRcdGNvbnN0IGFkID0gJCgnPGE+JykuYXR0cih7XG5cdFx0XHRpZDogJ2NpdGUtZXJyLWNoZWNrLWNsb3NlJyxcblx0XHRcdGhyZWY6ICcjJyxcblx0XHR9KTtcblx0XHRhZC5hcHBlbmQoaW0pO1xuXHRcdHRoMi5hcHBlbmQoYWQpO1xuXHRcdHRyMS5hcHBlbmQodGgxKS5hcHBlbmQodGgyKTtcblx0XHR0YWJsZS5hcHBlbmQodHIxKTtcblx0XHQkYm9keS5maW5kKCcjY2l0ZS1lcnItY2hlY2stY2xvc2UnKS5vbignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHQkYm9keS5maW5kKCcjY2l0ZS1lcnItcmVwb3J0JykucmVtb3ZlKCk7XG5cdFx0fSk7XG5cdFx0aWYgKGVycm9ycy5sZW5ndGggPT09IDApIHtcblx0XHRcdHRyID0gJCgnPHRyPicpLmNzcygnd2lkdGgnLCAnMTAwJScpO1xuXHRcdFx0Y29uc3QgdGQgPSAkKCc8dGQ+Jylcblx0XHRcdFx0LmNzcygndGV4dC1hbGlnbicsICdjZW50ZXInKVxuXHRcdFx0XHQuY3NzKCdtYXJnaW4nLCAnMS41cHgnKVxuXHRcdFx0XHQuaHRtbChnZXRNZXNzYWdlKCdjaXRlLWVyci1yZXBvcnQtZW1wdHknKSk7XG5cdFx0XHR0ci5hcHBlbmQodGQpO1xuXHRcdFx0dGFibGUuYXBwZW5kKHRyKTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRmb3IgKGNvbnN0IGVycm9yIGluIGVycm9ycykge1xuXHRcdFx0aWYgKE9iamVjdC5oYXNPd24oZXJyb3JzLCBlcnJvcikpIHtcblx0XHRcdFx0Y29uc3QgZXJyID0gZXJyb3JzW2Vycm9yXTtcblx0XHRcdFx0dHIgPSAkKCc8dHI+JykuY3NzKCd3aWR0aCcsICcxMDAlJyk7XG5cdFx0XHRcdGNvbnN0IHRkMSA9ICQoJzx0ZD4nKVxuXHRcdFx0XHRcdC5jc3Moe1xuXHRcdFx0XHRcdFx0Ym9yZGVyOiAnMXB4IHNvbGlkICMwMDAnLFxuXHRcdFx0XHRcdFx0bWFyZ2luOiAnMS41cHgnLFxuXHRcdFx0XHRcdFx0d2lkdGg6ICc2MCUnLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0Lmh0bWwoZXJyLmVycik7XG5cdFx0XHRcdGNvbnN0IHRkMiA9ICQoJzx0ZD4nKVxuXHRcdFx0XHRcdC5jc3Moe1xuXHRcdFx0XHRcdFx0Ym9yZGVyOiAnMXB4IHNvbGlkICMwMDAnLFxuXHRcdFx0XHRcdFx0bWFyZ2luOiAnMS41cHgnLFxuXHRcdFx0XHRcdFx0d2lkdGg6ICc0MCUnLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0Lmh0bWwoZ2V0TWVzc2FnZShlcnIubXNnKSk7XG5cdFx0XHRcdHRyLmFwcGVuZCh0ZDEpLmFwcGVuZCh0ZDIpO1xuXHRcdFx0XHR0YWJsZS5hcHBlbmQodHIpO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHQvLyBMb2FkIGNvbmZpZ3VyYXRpb24gZm9yIHNpdGVcblx0cmVmVG9vbGJhckNvbmZpZygpO1xuXG5cdC8vIEVuZCBvZiBjb2RlIGxvYWRlZCBvbmx5IG9uIGVkaXRcbn07XG5cbmV4cG9ydCB7cmVmVG9vbGJhcjJ9O1xuIiwgImNvbnN0IGdldE1lc3NhZ2UgPSAoa2V5OiBzdHJpbmcsIC4uLmFyZ3M6IHN0cmluZ1tdKTogc3RyaW5nID0+IHtcblx0Ly8gTWVzc2FnZXMgdGhhdCBjYW4gYmUgdXNlZCBoZXJlOlxuXHQvLyAqIHNlZSBtZXNzYWdlcy50c1xuXHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdHJldHVybiBhcmdzLmxlbmd0aCA/IG13Lm1lc3NhZ2Uoa2V5LCAuLi5hcmdzKS5wYXJzZSgpIDogbXcubWVzc2FnZShrZXkpLnBsYWluKCk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgIi8qIGdsb2JhbCBDaXRlVEIgKi9cbi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSwgbm8tbmV3LCBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnQgKi9cbi8vIEB0cy1ub2NoZWNrXG4vKipcbiAqIFNpdGV3aWRlIG9wdGlvbnMgZm9yIHRoZSB0aGUgQ2l0ZSB0b29sYmFyIGJ1dHRvbjpcbiAqIEFsbCBvcHRpb25zIHNob3VsZCBiZSBzcGVjaWZpZWRcbiAqXG4gKiBcImRhdGUgZm9ybWF0XCIgc2V0cyB0aGUgZGF0ZSBmb3JtYXQgdXNlZCBmb3IgdGhlIGZ1bmN0aW9uIHRvIGluc2VydCB0aGUgY3VycmVudCBkYXRlXG4gKiBDdXJyZW50IGF2YWlsYWJsZSBvcHRpb25zOlxuICogZGF0ZSAtIHRoZSBkYXkgb2YgdGhlIG1vbnRoXG4gKiB6ZGF0ZSAtIGRheSBvZiB0aGUgbW9udGgsIHplcm8gcGFkZGVkIHRvIDIgZGlnaXRzXG4gKiBtb250aG5hbWUgLSBUaGUgbW9udGggbmFtZVxuICogbW9udGggLSBUaGUgbnVtYmVyaWMgbW9udGggKDEtMTIpXG4gKiB6bW9udGggLSBudW1lcmljIG1vbnRoLCB6ZXJvIHBhZGRlZCB0byAyIGRpZ2l0c1xuICogeWVhciAtIFRoZSBmdWxsIHllYXIgKDQgZGlnaXRzKVxuICpcbiAqIFwiYXV0b2RhdGUgZmllbGRzXCIgaXMgYSBsaXN0IG9mIHRlbXBsYXRlIGZpZWxkcyB0aGF0IHNob3VsZCBoYXZlIGEgYnV0dG9uIHRvIGluc2VydCB0aGUgY3VycmVudCBkYXRlXG4gKlxuICogXCJtb250aHNcIiBpcyBhIGxpc3Qgb2YgbG9jYWxpemVkIG1vbnRoIG5hbWVzXG4gKlxuICogXCJtb2RhbFwiIC0gaWYgdHJ1ZSwgdGhlIGRpYWxvZ3Mgd2lsbCBiZSBtb2RhbCB3aW5kb3dzLCBibG9ja2luZyBhY2Nlc3MgdG8gdGhlIHJlc3Qgb2YgdGhlIHdpbmRvdy5cbiAqIEFsbCBkaWFsb2dzIGluIHRoZSB0b29sYmFyIGFyZSBtb2RhbCBieSBkZWZhdWx0XG4gKlxuICogXCJhdXRvcGFyc2VcIiAtIGlmIHRydWUsIHByZXZpZXdpbmcgYSByZWYgd2lsbCBhdXRvbWF0aWNhbGx5IHRyaWdnZXIgYSBwcmV2aWV3IG9mIHRoZSBwYXJzZWQgd2lraXRleHQuXG4gKiBJdCBpcyBub3QgcmVjb21tZW5kZWQgdG8gc2V0IHRoaXMgdG8gdHJ1ZSBhcyBhIGdsb2JhbCBzZXR0aW5nIGFzIGl0IG1heSBzbG93IHRoZSBzY3JpcHQgZG93biBmb3JcbiAqIHBlb3BsZSB3aXRoIHNsb3cgY29ubmVjdGlvbnMuXG4gKlxuICogXCJleHBhbmR0ZW1wbGF0ZXNcIiAtIGlmIHRydWUsIHRlbXBsYXRlcyBhbmQgcGFyc2VyIGZ1bmN0aW9ucyB3aWxsIGJlIGV4cGFuZGVkIHdoZW4gZ2V0dGluZyBwYWdlIHRleHRcbiAqICh0ZW1wbGF0ZXMgaW5zaWRlIG9mIHJlZiB0YWdzIHdpbGwgbm90IGJlIGV4cGFuZGVkKS4gVGhpcyB3aWxsIGFsbG93IHJlZmVyZW5jZXMgaW5zaWRlIG9mIHRlbXBsYXRlcyBvclxuICogcmVmZXJlbmNlcyB1c2luZyB7eyN0YWc6cmVmfX0gdG8gYmUgbGlzdGVkIGluIHRoZSBuYW1lZCByZWZzIGRpYWxvZyBhbmQgc2VhcmNoZWQgYnkgZXJyb3IgY2hlY2tzLlxuICogVGhpcyBtYXkgc2xvdyBsb2FkaW5nIHRoZSBuYW1lZCByZWZzIGFuZCBlcnJvciBjaGVjayBkaWFsb2dzLlxuICovXG5jb25zdCByZWZUb29sYmFyQ29uZmlnID0gKCkgPT4ge1xuXHRjb25zdCB7Q2l0ZVRlbXBsYXRlLCBDaXRlRXJyb3JDaGVja30gPSB3aW5kb3c7XG5cblx0Q2l0ZVRCLk9wdGlvbnMgPSB7XG5cdFx0J2RhdGUgZm9ybWF0JzogJzx5ZWFyPi08em1vbnRoPi08emRhdGU+Jyxcblx0XHQnYXV0b2RhdGUgZmllbGRzJzogWydhY2Nlc3NkYXRlJ10sXG5cdFx0bW9udGhzOiBbJzHmnIgnLCAnMuaciCcsICcz5pyIJywgJzTmnIgnLCAnNeaciCcsICc25pyIJywgJzfmnIgnLCAnOOaciCcsICc55pyIJywgJzEw5pyIJywgJzEx5pyIJywgJzEy5pyIJ10sXG5cdFx0bW9kYWw6IHRydWUsXG5cdFx0YXV0b3BhcnNlOiB0cnVlLFxuXHRcdGV4cGFuZHRlbXBsYXRlczogZmFsc2UsXG5cdH07XG5cblx0Ly8gQ2l0ZSB0ZW1wbGF0ZSBkZWZpbml0aW9uc1xuXHRuZXcgQ2l0ZVRlbXBsYXRlKFxuXHRcdCdjaXRlIHdlYicsXG5cdFx0J3dlYicsXG5cdFx0W1xuXHRcdFx0Ly8gQmFzaWMgZmllbGRzXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnYXV0aG9yPE4+Jyxcblx0XHRcdFx0aW5jcmVtZW50X2dyb3VwOiAnYXV0aG9yX2FsdCcsXG5cdFx0XHRcdGluY3JlbWVudF9idXR0b246IHRydWUsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3RpdGxlJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAndGl0bGUnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICd1cmwnLFxuXHRcdFx0XHRhdXRvZmlsbGlkOiAndXJsJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnd2Vic2l0ZScsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2pvdXJuYWwnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdwdWJsaXNoZXInLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdwdWJsaXNoZXInLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdhY2Nlc3NkYXRlJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAncmVmJyxcblx0XHRcdFx0dG9vbHRpcDogJ2NpdGUtcmVmLXRvb2x0aXAnLFxuXHRcdFx0fSxcblx0XHRdLFxuXHRcdFtcblx0XHRcdC8vIEV4cGFuZGVkIGZpZWxkc1xuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2F1dGhvcmxpbms8Tj4nLFxuXHRcdFx0XHR0b29sdGlwOiAnY2l0ZS1hdXRob3JsaW5rLXRvb2x0aXAnLFxuXHRcdFx0XHRpbmNyZW1lbnRfZ3JvdXA6ICdhdXRob3JsaW5rJyxcblx0XHRcdFx0aW5jcmVtZW50X2J1dHRvbjogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnbGFzdDxOPicsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2xhc3QtaW5jcicsXG5cdFx0XHRcdGluY3JlbWVudF9ncm91cDogJ2F1dGhvcicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2ZpcnN0PE4+Jyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnZmlyc3QtaW5jcicsXG5cdFx0XHRcdGluY3JlbWVudF9ncm91cDogJ2F1dGhvcicsXG5cdFx0XHRcdGluY3JlbWVudF9idXR0b246IHRydWUsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2xvY2F0aW9uJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAncGFnZScsXG5cdFx0XHRcdHRvb2x0aXA6ICdjaXRlLXBhZ2UtdG9vbHRpcCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3BhZ2VzJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAncGFnZXMnLFxuXHRcdFx0XHR0b29sdGlwOiAnY2l0ZS1wYWdlcy10b29sdGlwJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnbGFuZ3VhZ2UnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdsYW5ndWFnZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2Zvcm1hdCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2RvaScsXG5cdFx0XHRcdGF1dG9maWxsaWQ6ICdkb2knLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdkb2knLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdkYXRlJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnZGF0ZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3F1b3RlJyxcblx0XHRcdH0sXG5cdFx0XVxuXHQpO1xuXHRuZXcgQ2l0ZVRlbXBsYXRlKFxuXHRcdCdjaXRlIG5ld3MnLFxuXHRcdCduZXdzJyxcblx0XHRbXG5cdFx0XHQvLyBCYXNpYyBmaWVsZHNcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdhdXRob3I8Tj4nLFxuXHRcdFx0XHRpbmNyZW1lbnRfZ3JvdXA6ICdhdXRob3JfYWx0Jyxcblx0XHRcdFx0aW5jcmVtZW50X2J1dHRvbjogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAndGl0bGUnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICd0aXRsZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3VybCcsXG5cdFx0XHRcdGF1dG9maWxsaWQ6ICd1cmwnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdhY2Nlc3NkYXRlJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnd29yaycsXG5cdFx0XHRcdHRvb2x0aXA6ICdjaXRlLXdvcmstdG9vbHRpcCcsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2pvdXJuYWwnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdhZ2VuY3knLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdpc3N1ZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3B1Ymxpc2hlcicsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ3B1Ymxpc2hlcicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2RhdGUnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdkYXRlJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAncmVmJyxcblx0XHRcdFx0dG9vbHRpcDogJ2NpdGUtcmVmLXRvb2x0aXAnLFxuXHRcdFx0fSxcblx0XHRdLFxuXHRcdFtcblx0XHRcdC8vIEV4cGFuZGVkIGZpZWxkc1xuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2F1dGhvcmxpbms8Tj4nLFxuXHRcdFx0XHR0b29sdGlwOiAnY2l0ZS1hdXRob3JsaW5rLXRvb2x0aXAnLFxuXHRcdFx0XHRpbmNyZW1lbnRfZ3JvdXA6ICdhdXRob3JsaW5rJyxcblx0XHRcdFx0aW5jcmVtZW50X2J1dHRvbjogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnbGFzdDxOPicsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2xhc3QtaW5jcicsXG5cdFx0XHRcdGluY3JlbWVudF9ncm91cDogJ2F1dGhvcicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2ZpcnN0PE4+Jyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnZmlyc3QtaW5jcicsXG5cdFx0XHRcdGluY3JlbWVudF9ncm91cDogJ2F1dGhvcicsXG5cdFx0XHRcdGluY3JlbWVudF9idXR0b246IHRydWUsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2xvY2F0aW9uJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAncGFnZScsXG5cdFx0XHRcdHRvb2x0aXA6ICdjaXRlLXBhZ2UtdG9vbHRpcCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3BhZ2VzJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAncGFnZXMnLFxuXHRcdFx0XHR0b29sdGlwOiAnY2l0ZS1wYWdlcy10b29sdGlwJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnbGFuZ3VhZ2UnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdsYW5ndWFnZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2Zvcm1hdCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2RvaScsXG5cdFx0XHRcdGF1dG9maWxsaWQ6ICdkb2knLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdkb2knLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdxdW90ZScsXG5cdFx0XHR9LFxuXHRcdF1cblx0KTtcblx0bmV3IENpdGVUZW1wbGF0ZShcblx0XHQnY2l0ZSBib29rJyxcblx0XHQnYm9vaycsXG5cdFx0W1xuXHRcdFx0Ly8gQmFzaWMgZmllbGRzXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnYXV0aG9yPE4+Jyxcblx0XHRcdFx0aW5jcmVtZW50X2dyb3VwOiAnYXV0aG9yX2FsdCcsXG5cdFx0XHRcdGluY3JlbWVudF9idXR0b246IHRydWUsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2NvYXV0aG9ycycsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2NvYXV0aG9ycycsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2VkaXRvcicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3RpdGxlJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAndGl0bGUnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdkYXRlJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAneWVhcicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3B1Ymxpc2hlcicsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ3B1Ymxpc2hlcicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2xvY2F0aW9uJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnbG9jYXRpb24nLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdpc2JuJyxcblx0XHRcdFx0LyogXCJhdXRvZmlsbGlkXCI6XCJpc2JuXCIsICovIGF1dG9maWxscHJvcDogJ2lzYm4nLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdwYWdlJyxcblx0XHRcdFx0dG9vbHRpcDogJ2NpdGUtcGFnZS10b29sdGlwJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAncGFnZXMnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdwYWdlcycsXG5cdFx0XHRcdHRvb2x0aXA6ICdjaXRlLXBhZ2VzLXRvb2x0aXAnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdlZGl0aW9uJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnZWRpdGlvbicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3VybCcsXG5cdFx0XHRcdGF1dG9maWxsaWQ6ICd1cmwnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdhY2Nlc3NkYXRlJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAncmVmJyxcblx0XHRcdFx0dG9vbHRpcDogJ2NpdGUtcmVmLXRvb2x0aXAnLFxuXHRcdFx0fSxcblx0XHRdLFxuXHRcdFtcblx0XHRcdC8vIEV4cGFuZGVkIGZpZWxkc1xuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2xhc3Q8Tj4nLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdsYXN0LWluY3InLFxuXHRcdFx0XHRpbmNyZW1lbnRfZ3JvdXA6ICdhdXRob3InLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdmaXJzdDxOPicsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2ZpcnN0LWluY3InLFxuXHRcdFx0XHRpbmNyZW1lbnRfZ3JvdXA6ICdhdXRob3InLFxuXHRcdFx0XHRpbmNyZW1lbnRfYnV0dG9uOiB0cnVlLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdhdXRob3JsaW5rPE4+Jyxcblx0XHRcdFx0dG9vbHRpcDogJ2NpdGUtYXV0aG9ybGluay10b29sdGlwJyxcblx0XHRcdFx0aW5jcmVtZW50X2dyb3VwOiAnYXV0aG9ybGluaycsXG5cdFx0XHRcdGluY3JlbWVudF9idXR0b246IHRydWUsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2VkaXRvcjxOPi1sYXN0Jyxcblx0XHRcdFx0aW5jcmVtZW50X2dyb3VwOiAnZWRpdG9yJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnZWRpdG9yPE4+LWZpcnN0Jyxcblx0XHRcdFx0aW5jcmVtZW50X2dyb3VwOiAnZWRpdG9yJyxcblx0XHRcdFx0aW5jcmVtZW50X2J1dHRvbjogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnZWRpdG9yPE4+LWxpbmsnLFxuXHRcdFx0XHRpbmNyZW1lbnRfZ3JvdXA6ICdlZGl0b3JsaW5rJyxcblx0XHRcdFx0aW5jcmVtZW50X2J1dHRvbjogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnbGFuZ3VhZ2UnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdsYW5ndWFnZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2Zvcm1hdCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2NoYXB0ZXInLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdjaGFwdGVyJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAncXVvdGUnLFxuXHRcdFx0fSxcblx0XHRdXG5cdCk7XG5cdG5ldyBDaXRlVGVtcGxhdGUoXG5cdFx0J2NpdGUgam91cm5hbCcsXG5cdFx0J2pvdXJuYWwnLFxuXHRcdFtcblx0XHRcdC8vIEJhc2ljIGZpZWxkc1xuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2F1dGhvcjxOPicsXG5cdFx0XHRcdGluY3JlbWVudF9ncm91cDogJ2F1dGhvcl9hbHQnLFxuXHRcdFx0XHRpbmNyZW1lbnRfYnV0dG9uOiB0cnVlLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdjb2F1dGhvcnMnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdjb2F1dGhvcnMnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICd0aXRsZScsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ3RpdGxlJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnam91cm5hbCcsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2pvdXJuYWwnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdkYXRlJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnZGF0ZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3ZvbHVtZScsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ3ZvbHVtZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2lzc3VlJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnaXNzdWUnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdwYWdlJyxcblx0XHRcdFx0dG9vbHRpcDogJ2NpdGUtcGFnZS10b29sdGlwJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAncGFnZXMnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdwYWdlcycsXG5cdFx0XHRcdHRvb2x0aXA6ICdjaXRlLXBhZ2VzLXRvb2x0aXAnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdkb2knLFxuXHRcdFx0XHRhdXRvZmlsbGlkOiAnZG9pJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnZG9pJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAncG1pZCcsXG5cdFx0XHRcdGF1dG9maWxsaWQ6ICdwbWlkJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAndXJsJyxcblx0XHRcdFx0YXV0b2ZpbGxpZDogJ3VybCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2FjY2Vzc2RhdGUnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdyZWYnLFxuXHRcdFx0XHR0b29sdGlwOiAnY2l0ZS1yZWYtdG9vbHRpcCcsXG5cdFx0XHR9LFxuXHRcdF0sXG5cdFx0W1xuXHRcdFx0Ly8gRXhwYW5kZWQgZmllbGRzXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnYXV0aG9ybGluazxOPicsXG5cdFx0XHRcdHRvb2x0aXA6ICdjaXRlLWF1dGhvcmxpbmstdG9vbHRpcCcsXG5cdFx0XHRcdGluY3JlbWVudF9ncm91cDogJ2F1dGhvcmxpbmsnLFxuXHRcdFx0XHRpbmNyZW1lbnRfYnV0dG9uOiB0cnVlLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdsYXN0PE4+Jyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnbGFzdC1pbmNyJyxcblx0XHRcdFx0aW5jcmVtZW50X2dyb3VwOiAnYXV0aG9yJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnZmlyc3Q8Tj4nLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdmaXJzdC1pbmNyJyxcblx0XHRcdFx0aW5jcmVtZW50X2dyb3VwOiAnYXV0aG9yJyxcblx0XHRcdFx0aW5jcmVtZW50X2J1dHRvbjogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnZWRpdG9yPE4+LWxhc3QnLFxuXHRcdFx0XHRpbmNyZW1lbnRfZ3JvdXA6ICdlZGl0b3InLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdlZGl0b3I8Tj4tZmlyc3QnLFxuXHRcdFx0XHRpbmNyZW1lbnRfZ3JvdXA6ICdlZGl0b3InLFxuXHRcdFx0XHRpbmNyZW1lbnRfYnV0dG9uOiB0cnVlLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdlZGl0b3I8Tj4tbGluaycsXG5cdFx0XHRcdGluY3JlbWVudF9ncm91cDogJ2VkaXRvcmxpbmsnLFxuXHRcdFx0XHRpbmNyZW1lbnRfYnV0dG9uOiB0cnVlLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdzZXJpZXMnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdhdCcsXG5cdFx0XHRcdHRvb2x0aXA6ICdjaXRlLWF0LXRvb2x0aXAnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICd0cmFucy10aXRsZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3B1Ymxpc2hlcicsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ3B1Ymxpc2hlcicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2xvY2F0aW9uJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnbGFuZ3VhZ2UnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdsYW5ndWFnZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2Zvcm1hdCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2lzc24nLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdpc3NuJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAncG1jJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnb2NsYycsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2JpYmNvZGUnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdpZCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3F1b3RlJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAncG9zdHNjcmlwdCcsXG5cdFx0XHRcdHRvb2x0aXA6ICdjaXRlLXBvc3RzY3JpcHQtdG9vbHRpcCcsXG5cdFx0XHR9LFxuXHRcdF1cblx0KTtcblx0bmV3IENpdGVUZW1wbGF0ZShcblx0XHQnY2l0ZSBjb25mZXJlbmNlJyxcblx0XHQnY29uZmVyZW5jZScsXG5cdFx0W1xuXHRcdFx0Ly8gQmFzaWMgZmllbGRzXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnYXV0aG9yJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnYXV0aG9yMScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2NvYXV0aG9ycycsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2NvYXV0aG9ycycsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3RpdGxlJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAndGl0bGUnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdjb25mZXJlbmNlJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnY29uZmVyZW5jZXVybCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2Jvb2t0aXRsZScsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2pvdXJuYWwnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdkYXRlJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnZGF0ZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3llYXInLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdtb250aCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3ZvbHVtZScsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ3ZvbHVtZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3B1Ymxpc2hlcicsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ3B1Ymxpc2hlcicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2xvY2F0aW9uJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnbG9jYXRpb24nLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdpc2JuJyAvKiAsIFwiYXV0b2ZpbGxpZFwiOlwiaXNiblwiICovLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdwYWdlcycsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2RvaScsXG5cdFx0XHRcdGF1dG9maWxsaWQ6ICdkb2knLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdkb2knLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdwbWlkJyxcblx0XHRcdFx0YXV0b2ZpbGxpZDogJ3BtaWQnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICd1cmwnLFxuXHRcdFx0XHRhdXRvZmlsbGlkOiAndXJsJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnYWNjZXNzZGF0ZScsXG5cdFx0XHRcdHRvb2x0aXA6ICdjaXRlLWFjY2Vzc2RhdGUtdG9vbHRpcCcsXG5cdFx0XHR9LFxuXHRcdF0sXG5cdFx0W1xuXHRcdFx0Ly8gRXhwYW5kZWQgZmllbGRzXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnbGFzdCcsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2xhc3QxJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnZmlyc3QnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdmaXJzdDEnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdhdXRob3JsaW5rJyxcblx0XHRcdFx0dG9vbHRpcDogJ2NpdGUtYXV0aG9ybGluay10b29sdGlwJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnZWRpdG9yJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnb3RoZXJzJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnZWRpdGlvbicsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2VkaXRpb24nLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdsYW5ndWFnZScsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2xhbmd1YWdlJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnZm9ybWF0Jyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnaXNzbicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ29jbGMnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdpZCcsXG5cdFx0XHRcdHRvb2x0aXA6ICdjaXRlLWlkLXRvb2x0aXAnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdxdW90ZScsXG5cdFx0XHR9LFxuXHRcdF1cblx0KTtcblx0bmV3IENpdGVUZW1wbGF0ZShcblx0XHQnY2l0ZSBlbmN5Y2xvcGVkaWEnLFxuXHRcdCdlbmN5Y2xvcGVkaWEnLFxuXHRcdFtcblx0XHRcdC8vIEJhc2ljIGZpZWxkc1xuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2F1dGhvcicsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2F1dGhvcjEnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICd0aXRsZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2VkaXRvcicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2VuY3ljbG9wZWRpYScsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ3RpdGxlJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAndm9sdW1lJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAneWVhcicsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ3llYXInLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdwdWJsaXNoZXInLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdwdWJsaXNoZXInLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdsb2NhdGlvbicsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2xvY2F0aW9uJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnaXNibicgLyogLCBcImF1dG9maWxsaWRcIjpcImlzYm5cIiAqLyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAncGFnZXMnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICd1cmwnLFxuXHRcdFx0fSxcblx0XHRdLFxuXHRcdFtcblx0XHRcdC8vIEV4cGFuZGVkIGZpZWxkc1xuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2xhc3QnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdsYXN0MScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2ZpcnN0Jyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnZmlyc3QxJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnYXV0aG9ybGluaycsXG5cdFx0XHRcdHRvb2x0aXA6ICdjaXRlLWF1dGhvcmxpbmstdG9vbHRpcCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2NvYXV0aG9ycycsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2NvYXV0aG9ycycsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ290aGVycycsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2VkaXRpb24nLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdlZGl0aW9uJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnb2NsYycsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2lkJyxcblx0XHRcdFx0dG9vbHRpcDogJ2NpdGUtaWQtdG9vbHRpcCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2FjY2Vzc2RhdGUnLFxuXHRcdFx0XHR0b29sdGlwOiAnY2l0ZS1hY2Nlc3NkYXRlLXRvb2x0aXAnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdsYW5ndWFnZScsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2xhbmd1YWdlJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnZm9ybWF0Jyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnZGF0ZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ21vbnRoJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAncXVvdGUnLFxuXHRcdFx0fSxcblx0XHRdXG5cdCk7XG5cblx0Ly8gQ2l0ZSBlcnJvciBjaGVjayBkZWZpbml0aW9uc1xuXHRuZXcgQ2l0ZUVycm9yQ2hlY2soe1xuXHRcdHR5cGU6ICdyZWZsaXN0Jyxcblx0XHR0ZXN0bmFtZTogJ3NhbWVjb250ZW50Jyxcblx0XHRkZXNjOiAnY2l0ZS1zYW1lY29udGVudC1kZXNjJyxcblx0XHRmdW5jOiAocmVmbGlzdCkgPT4ge1xuXHRcdFx0Y29uc3QgZXJyb3JzID0gW107XG5cdFx0XHRjb25zdCByZWZzMiA9IFtdO1xuXHRcdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mIHJlZmxpc3QpIHtcblx0XHRcdFx0aWYgKGVsZW1lbnQuc2hvcnR0YWcpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAocmVmczIuaW5jbHVkZXMoZWxlbWVudC5jb250ZW50KSkge1xuXHRcdFx0XHRcdGlmIChlcnJvcnMuaW5jbHVkZXMoZWxlbWVudC5jb250ZW50KSkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVycm9ycy5wdXNoKGVsZW1lbnQuY29udGVudCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmVmczIucHVzaChlbGVtZW50LmNvbnRlbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRjb25zdCByZXQgPSBbXTtcblx0XHRcdGZvciAoY29uc3QgZXJyb3Igb2YgZXJyb3JzKSB7XG5cdFx0XHRcdHJldC5wdXNoKHtcblx0XHRcdFx0XHRtc2c6ICdjaXRlLXNhbWVjb250ZW50LWVycm9yJyxcblx0XHRcdFx0XHRlcnI6IGVycm9yLFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiByZXQ7XG5cdFx0fSxcblx0fSk7XG5cdG5ldyBDaXRlRXJyb3JDaGVjayh7XG5cdFx0dHlwZTogJ3JlZmxpc3QnLFxuXHRcdHRlc3RuYW1lOiAncmVwZWF0ZWQnLFxuXHRcdGRlc2M6ICdjaXRlLXJlcGVhdGVkLWRlc2MnLFxuXHRcdGZ1bmM6IChyZWZsaXN0KSA9PiB7XG5cdFx0XHRjb25zdCBlcnJvcnMgPSBbXTtcblx0XHRcdGNvbnN0IHJlZnMyID0gW107XG5cdFx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgcmVmbGlzdCkge1xuXHRcdFx0XHRpZiAoZWxlbWVudC5zaG9ydHRhZyB8fCAhZWxlbWVudC5yZWZuYW1lKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHJlZnMyLmluY2x1ZGVzKGVsZW1lbnQucmVmbmFtZSkpIHtcblx0XHRcdFx0XHRpZiAoZXJyb3JzLmluY2x1ZGVzKGVsZW1lbnQucmVmbmFtZSkpIHtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlcnJvcnMucHVzaChlbGVtZW50LnJlZm5hbWUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJlZnMyLnB1c2goZWxlbWVudC5yZWZuYW1lKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcmV0ID0gW107XG5cdFx0XHRmb3IgKGNvbnN0IGVycm9yIG9mIGVycm9ycykge1xuXHRcdFx0XHRyZXQucHVzaCh7XG5cdFx0XHRcdFx0bXNnOiAnY2l0ZS1yZXBlYXRlZC1lcnJvcicsXG5cdFx0XHRcdFx0ZXJyOiBlcnJvcixcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmV0O1xuXHRcdH0sXG5cdH0pO1xuXHRuZXcgQ2l0ZUVycm9yQ2hlY2soe1xuXHRcdHR5cGU6ICdyZWZsaXN0Jyxcblx0XHR0ZXN0bmFtZTogJ3VuZGVmaW5lZCcsXG5cdFx0ZGVzYzogJ2NpdGUtdW5kZWZpbmVkLWRlc2MnLFxuXHRcdGZ1bmM6IChyZWZsaXN0KSA9PiB7XG5cdFx0XHRjb25zdCBlcnJvcnMgPSBbXTtcblx0XHRcdGNvbnN0IGxvbmdyZWZzID0gW107XG5cdFx0XHRmb3IgKGNvbnN0IHZhbHVlIG9mIE9iamVjdC52YWx1ZXMocmVmbGlzdCkpIHtcblx0XHRcdFx0Y29uc3Qge3JlZm5hbWUsIHNob3J0dGFnfSA9IHZhbHVlO1xuXHRcdFx0XHRpZiAoIXNob3J0dGFnICYmIHJlZm5hbWUpIHtcblx0XHRcdFx0XHRsb25ncmVmcy5wdXNoKHZhbHVlLnJlZm5hbWUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChzaG9ydHRhZyAmJiBlcnJvcnMuaW5jbHVkZXMocmVmbmFtZSkgPT09IC0xICYmICFsb25ncmVmcy5pbmNsdWRlcyhyZWZuYW1lKSkge1xuXHRcdFx0XHRcdGVycm9ycy5wdXNoKHJlZm5hbWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRjb25zdCByZXQgPSBbXTtcblx0XHRcdGZvciAoY29uc3QgZXJyb3Igb2YgZXJyb3JzKSB7XG5cdFx0XHRcdHJldC5wdXNoKHtcblx0XHRcdFx0XHRtc2c6ICdjaXRlLXVuZGVmaW5lZC1lcnJvcicsXG5cdFx0XHRcdFx0ZXJyOiBlcnJvcixcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmV0O1xuXHRcdH0sXG5cdH0pO1xuXG5cdC8vIGV4ZWN1dGUgbWFpbiBmdW5jdGlvblxuXHRDaXRlVEIuaW5pdCgpO1xufTtcblxuZXhwb3J0IHtyZWZUb29sYmFyQ29uZmlnfTtcbiIsICIvKiBnbG9iYWwgQ2l0ZVRCICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnQgKi9cbi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vdXRpbC9nZXRNZXNzYWdlJztcblxuY29uc3QgcmVmVG9vbGJhckJhc2UgPSAoKSA9PiB7XG5cdHdpbmRvdy5DaXRlVEIgfHw9IHtcblx0XHRUZW1wbGF0ZXM6IHt9LCAvLyBBbGwgdGVtcGxhdGVzXG5cdFx0T3B0aW9uczoge30sIC8vIEdsb2JhbCBvcHRpb25zXG5cdFx0VXNlck9wdGlvbnM6IHt9LCAvLyBVc2VyIG9wdGlvbnNcblx0XHREZWZhdWx0T3B0aW9uczoge30sIC8vIFNjcmlwdCBkZWZhdWx0c1xuXHRcdEVycm9yQ2hlY2tzOiB7fSwgLy8gRXJyb3IgY2hlY2sgZnVuY3Rpb25zXG5cdH07XG5cblx0Ly8gQ2xhc3MgZm9yIGNpdGUgdGVtcGxhdGVzXG5cdHdpbmRvdy5DaXRlVGVtcGxhdGUgPSBjbGFzcyBDaXRlVGVtcGxhdGUge1xuXHRcdGNvbnN0cnVjdG9yKHRlbXBsYXRlbmFtZSwgc2hvcnRmb3JtLCBiYXNpY2ZpZWxkcywgZXhwYW5kZWRmaWVsZHMpIHtcblx0XHRcdC8vIFByb3BlcnRpZXNcblx0XHRcdHRoaXMudGVtcGxhdGVuYW1lID0gdGVtcGxhdGVuYW1lOyAvLyBUaGUgdGVtcGxhdGUgbmFtZSAtIFwiY2l0ZSB3ZWJcIiwgXCJjaXRlIGJvb2tcIiwgZXRjLlxuXHRcdFx0dGhpcy5zaG9ydGZvcm0gPSBzaG9ydGZvcm07IC8vIEEgc2hvcnQgZm9ybSwgdXNlZCBmb3IgdGhlIGRyb3Bkb3duIGJveFxuXHRcdFx0dGhpcy5iYXNpYyA9IGJhc2ljZmllbGRzOyAvLyBCYXNpYyBmaWVsZHMgLSBhdXRob3IsIHRpdGxlLCBwdWJsaXNoZXIuLi5cblxuXHRcdFx0Ly8gTGVzcyBjb21tb24gLSBxdW90ZSwgYXJjaGl2ZXVybCAtIHNob3VsZCBiZSBldmVyeXRoaW5nIHRoZSB0ZW1wbGF0ZSBzdXBwb3J0cyBtaW51cyB0aGUgYmFzaWMgb25lc1xuXHRcdFx0dGhpcy5leHRyYSA9IGV4cGFuZGVkZmllbGRzO1xuXHRcdFx0dGhpcy5pbmNyZW1lbnRhYmxlcyA9IHt9O1xuXG5cdFx0XHQvLyBBZGQgaXQgdG8gdGhlIGxpc3Rcblx0XHRcdENpdGVUQi5UZW1wbGF0ZXNbdGhpcy50ZW1wbGF0ZW5hbWVdID0gdGhpcztcblx0XHR9XG5cdFx0bWFrZUZvcm1Jbm5lcihmaWVsZHMsIGluY3JzZXR1cCkge1xuXHRcdFx0Y29uc3QgdHJzID0gW107XG5cdFx0XHRjb25zdCBhdXRvZmlsbHMgPSBbXTtcblx0XHRcdGxldCB0cjtcblx0XHRcdGZvciAoY29uc3QgW2ksIGZpZWxkb2JqXSBvZiBmaWVsZHMuZW50cmllcygpKSB7XG5cdFx0XHRcdGxldCB7ZmllbGR9ID0gZmllbGRvYmo7XG5cdFx0XHRcdGxldCBsYWJlbGZpZWxkID0gZmllbGRvYmouZmllbGQ7XG5cdFx0XHRcdGxldCBhZCA9IGZhbHNlO1xuXHRcdFx0XHRsZXQgaW07XG5cdFx0XHRcdGlmIChpbmNyc2V0dXAgJiYgZmllbGRvYmouaW5jcmVtZW50X2dyb3VwKSB7XG5cdFx0XHRcdFx0ZmllbGQgPSBmaWVsZG9iai5maWVsZC5yZXBsYWNlKCc8Tj4nLCAnMScpO1xuXHRcdFx0XHRcdGxhYmVsZmllbGQgPSBmaWVsZG9iai5maWVsZC5yZXBsYWNlKCc8Tj4nLCAnJyk7XG5cdFx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdFx0dGhpcy5pbmNyZW1lbnRhYmxlc1tmaWVsZG9iai5pbmNyZW1lbnRfZ3JvdXBdICYmXG5cdFx0XHRcdFx0XHQhdGhpcy5pbmNyZW1lbnRhYmxlc1tmaWVsZG9iai5pbmNyZW1lbnRfZ3JvdXBdLnNldHVwXG5cdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHQvLyBUaGUgb2JqZWN0IGhhcyBiZWVuIGNyZWF0ZWQsIGJ1dCBub3QgZnVsbHkgaW5pdGlhbGl6ZWRcblx0XHRcdFx0XHRcdHRoaXMuaW5jcmVtZW50YWJsZXNbZmllbGRvYmouaW5jcmVtZW50X2dyb3VwXS5maWVsZHMucHVzaChmaWVsZG9iaik7XG5cdFx0XHRcdFx0fSBlbHNlIGlmICghdGhpcy5pbmNyZW1lbnRhYmxlc1tmaWVsZG9iai5pbmNyZW1lbnRfZ3JvdXBdKSB7XG5cdFx0XHRcdFx0XHQvLyBPYmplY3Qgbm90IHlldCBjcmVhdGVkXG5cdFx0XHRcdFx0XHR0aGlzLmluY3JlbWVudGFibGVzW2ZpZWxkb2JqLmluY3JlbWVudF9ncm91cF0gPSB7XG5cdFx0XHRcdFx0XHRcdGZpZWxkczogW2ZpZWxkb2JqXSxcblx0XHRcdFx0XHRcdFx0dmFsOiAxLFxuXHRcdFx0XHRcdFx0XHRzZXR1cDogZmFsc2UsXG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoXG5cdFx0XHRcdFx0XHR0aGlzLmluY3JlbWVudGFibGVzW2ZpZWxkb2JqLmluY3JlbWVudF9ncm91cF0gJiZcblx0XHRcdFx0XHRcdHRoaXMuaW5jcmVtZW50YWJsZXNbZmllbGRvYmouaW5jcmVtZW50X2dyb3VwXS5zZXR1cFxuXHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0Ly8gRnVsbHkgaW5pdGlhbGl6ZWQgZnJvbSBhIHByZXZpb3VzIGludm9jYXRpb24gb2YgdGhpcyBmdW5jdGlvbiwganVzdCByZXNldHRpbmcgdGhlIG51bWJlclxuXHRcdFx0XHRcdFx0dGhpcy5pbmNyZW1lbnRhYmxlc1tmaWVsZG9iai5pbmNyZW1lbnRfZ3JvdXBdLnZhbCA9IDE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2UgaWYgKGZpZWxkb2JqLmluY3JlbWVudF9ncm91cCkge1xuXHRcdFx0XHRcdC8vIEFkZGluZyBhIG5ldyByb3dcblx0XHRcdFx0XHRjb25zdCBpbmNydmFsID0gdGhpcy5pbmNyZW1lbnRhYmxlc1tmaWVsZG9iai5pbmNyZW1lbnRfZ3JvdXBdLnZhbDtcblx0XHRcdFx0XHRmaWVsZCA9IGZpZWxkb2JqLmZpZWxkLnJlcGxhY2UoJzxOPicsIGluY3J2YWwudG9TdHJpbmcoKSk7XG5cdFx0XHRcdFx0bGFiZWxmaWVsZCA9IGZpZWxkb2JqLmZpZWxkLnJlcGxhY2UoJzxOPicsICcnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBhdXRvZGF0ZUZpZWxkcyA9IENpdGVUQi5nZXRPcHRpb24oJ2F1dG9kYXRlIGZpZWxkcycpO1xuXHRcdFx0XHRpZiAoYXV0b2RhdGVGaWVsZHMuaW5jbHVkZXMoZmllbGQpKSB7XG5cdFx0XHRcdFx0aW0gPSAkKCc8aW1nPicpLmF0dHIoXG5cdFx0XHRcdFx0XHQnc3JjJyxcblx0XHRcdFx0XHRcdCdodHRwczovL3R1Lnpob25nd2VuLndpa2kvaW1hZ2VzL3FpdXdlbmJhaWtlL3poL3RodW1iLzcvN2IvTnV2b2xhX2FwcHNfZGF0ZS5zdmcvMjBweC1OdXZvbGFfYXBwc19kYXRlLnN2Zy5wbmcnXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRpbS5hdHRyKCdhbHQnLCBnZXRNZXNzYWdlKCdjaXRlLWluc2VydC1kYXRlJykpLmF0dHIoJ3RpdGxlJywgZ2V0TWVzc2FnZSgnY2l0ZS1pbnNlcnQtZGF0ZScpKTtcblx0XHRcdFx0XHRhZCA9ICQoJzxhPicpLmF0dHIoJ2hyZWYnLCAnIycpO1xuXHRcdFx0XHRcdGFkLmFwcGVuZChpbSk7XG5cdFx0XHRcdFx0YWQuYXR0cignaWQnLCBgY2l0ZS1kYXRlLSR7Q2l0ZVRCLmVzY1N0cih0aGlzLnNob3J0Zm9ybSl9LSR7ZmllbGR9YCk7XG5cdFx0XHRcdFx0JChkb2N1bWVudCkub24oXG5cdFx0XHRcdFx0XHQnY2xpY2snLFxuXHRcdFx0XHRcdFx0YCNjaXRlLWRhdGUtJHtDaXRlVEIuZXNjU3RyKHRoaXMuc2hvcnRmb3JtKX0tJHtmaWVsZH1gLFxuXHRcdFx0XHRcdFx0Q2l0ZVRCLmZpbGxBY2Nlc3NkYXRlXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZmllbGRvYmouYXV0b2ZpbGxpZCkge1xuXHRcdFx0XHRcdGNvbnN0IGF1dG90eXBlID0gZmllbGRvYmouYXV0b2ZpbGxpZDtcblx0XHRcdFx0XHRpbSA9ICQoJzxpbWc+JykuYXR0cihcblx0XHRcdFx0XHRcdCdzcmMnLFxuXHRcdFx0XHRcdFx0J2h0dHBzOi8vdHUuemhvbmd3ZW4ud2lraS9pbWFnZXMvcWl1d2VuYmFpa2UvemgvdGh1bWIvMS8xNy9TeXN0ZW0tc2VhcmNoLnN2Zy8yMHB4LVN5c3RlbS1zZWFyY2guc3ZnLnBuZydcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGltLmF0dHIoJ2FsdCcsIGdldE1lc3NhZ2UoJ2NpdGUtYXV0b2ZpbGwtYWx0JykpLmF0dHIoJ3RpdGxlJywgZ2V0TWVzc2FnZSgnY2l0ZS1hdXRvZmlsbC1hbHQnKSk7XG5cdFx0XHRcdFx0YWQgPSAkKCc8YT4nKS5hdHRyKCdocmVmJywgJyMnKTtcblx0XHRcdFx0XHRhZC5hcHBlbmQoaW0pO1xuXHRcdFx0XHRcdGFkLmF0dHIoJ2lkJywgYGNpdGUtYXV0by0ke0NpdGVUQi5lc2NTdHIodGhpcy5zaG9ydGZvcm0pfS0ke2ZpZWxkfS0ke2F1dG90eXBlfWApO1xuXHRcdFx0XHRcdGF1dG9maWxscy5wdXNoKGAjY2l0ZS1hdXRvLSR7Q2l0ZVRCLmVzY1N0cih0aGlzLnNob3J0Zm9ybSl9LSR7ZmllbGR9LSR7YXV0b3R5cGV9YCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGZpZWxkb2JqLmluY3JlbWVudF9idXR0b24pIHtcblx0XHRcdFx0XHRjb25zdCBpbmNydHlwZSA9IGZpZWxkb2JqLmluY3JlbWVudF9ncm91cDtcblx0XHRcdFx0XHRpbSA9ICQoJzxpbWc+JykuYXR0cihcblx0XHRcdFx0XHRcdCdzcmMnLFxuXHRcdFx0XHRcdFx0J2h0dHBzOi8vdHUuemhvbmd3ZW4ud2lraS9pbWFnZXMvcWl1d2VuYmFpa2UvemgvdGh1bWIvYi9iOS9OdXZvbGFfYWN0aW9uX2VkaXRfYWRkLnN2Zy8yMHB4LU51dm9sYV9hY3Rpb25fZWRpdF9hZGQuc3ZnLnBuZydcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGltLmF0dHIoJ2FsdCcsIGdldE1lc3NhZ2UoJ2NpdGUtaW5jcmVtZW50LWFsdCcpKS5hdHRyKCd0aXRsZScsIGdldE1lc3NhZ2UoJ2NpdGUtaW5jcmVtZW50LWFsdCcpKTtcblx0XHRcdFx0XHRhZCA9ICQoJzxhPicpLmF0dHIoJ2hyZWYnLCAnIycpO1xuXHRcdFx0XHRcdGFkLmFwcGVuZChpbSk7XG5cdFx0XHRcdFx0YWQuYXR0cignaWQnLCBgY2l0ZS1pbmNyLSR7Q2l0ZVRCLmVzY1N0cih0aGlzLnNob3J0Zm9ybSl9LSR7aW5jcnR5cGV9YCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRsZXQgZGlzcGxheSA9IGdldE1lc3NhZ2UoYGNpdGUtJHtsYWJlbGZpZWxkfS1sYWJlbGApO1xuXHRcdFx0XHRpZiAodHlwZW9mIGRpc3BsYXkgIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0ZGlzcGxheSA9IGZpZWxkb2JqLmxhYmVsID8gQ2l0ZVRCLmZpeFN0cihmaWVsZG9iai5sYWJlbCkgOiBDaXRlVEIuZml4U3RyKGxhYmVsZmllbGQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IHRvb2x0aXAgPSBmaWVsZG9iai50b29sdGlwXG5cdFx0XHRcdFx0PyAkKCc8YWJicj4nKS5hdHRyKCd0aXRsZScsIGdldE1lc3NhZ2UoZmllbGRvYmoudG9vbHRpcCkpLmh0bWwoJCgnPHN1cD4nKS50ZXh0KCc/JykpXG5cdFx0XHRcdFx0OiBmYWxzZTtcblx0XHRcdFx0bGV0IGlucHV0ID0gJyc7XG5cdFx0XHRcdGlucHV0ID0gJCgnPGlucHV0PicpLmF0dHIoe1xuXHRcdFx0XHRcdHRhYmluZGV4OiAnMScsXG5cdFx0XHRcdFx0c3R5bGU6IGFkID8gJ3dpZHRoOiA4NSUnIDogJ3dpZHRoOiAxMDAlJyxcblx0XHRcdFx0XHR0eXBlOiAndGV4dCcsXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRpbnB1dC5hdHRyKCdpZCcsIGBjaXRlLSR7Q2l0ZVRCLmVzY1N0cih0aGlzLnNob3J0Zm9ybSl9LSR7ZmllbGR9YCk7XG5cdFx0XHRcdGlmIChmaWVsZG9iai5hdXRvZmlsbHByb3ApIHtcblx0XHRcdFx0XHRsZXQgY2xhc3NuYW1lID0gYGNpdGUtJHtDaXRlVEIuZXNjU3RyKHRoaXMuc2hvcnRmb3JtKX0tJHtmaWVsZG9iai5hdXRvZmlsbHByb3B9YDtcblx0XHRcdFx0XHRpZiAoZmllbGRvYmouaW5jcmVtZW50X2dyb3VwKSB7XG5cdFx0XHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWVkaWF3aWtpL2NsYXNzLWRvY1xuXHRcdFx0XHRcdFx0aW5wdXQuYWRkQ2xhc3MoYGNpdGUtJHtDaXRlVEIuZXNjU3RyKHRoaXMuc2hvcnRmb3JtKX0taW5jci0ke2ZpZWxkb2JqLmluY3JlbWVudF9ncm91cH1gKTtcblx0XHRcdFx0XHRcdGNsYXNzbmFtZSArPSBgLSR7dGhpcy5pbmNyZW1lbnRhYmxlc1tmaWVsZG9iai5pbmNyZW1lbnRfZ3JvdXBdLnZhbC50b1N0cmluZygpfWA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtZWRpYXdpa2kvY2xhc3MtZG9jXG5cdFx0XHRcdFx0aW5wdXQuYWRkQ2xhc3MoY2xhc3NuYW1lKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBsYWJlbCA9ICQoJzxsYWJlbD4nKTtcblx0XHRcdFx0bGFiZWwuYXR0cignZm9yJywgYGNpdGUtJHtDaXRlVEIuZXNjU3RyKHRoaXMuc2hvcnRmb3JtKX0tJHtmaWVsZH1gKS50ZXh0KGRpc3BsYXkpO1xuXHRcdFx0XHRpZiAodG9vbHRpcCkge1xuXHRcdFx0XHRcdGxhYmVsLmFwcGVuZCh0b29sdGlwKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRsZXQgc3R5bGUgPSAndGV4dC1hbGlnbjogcmlnaHQ7IHdpZHRoOiAyMCU7Jztcblx0XHRcdFx0aWYgKGkgJSAyID09PSAxKSB7XG5cdFx0XHRcdFx0c3R5bGUgKz0gJyBwYWRkaW5nLWxlZnQ6IDFlbTsnO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRyID0gJCgnPHRyPicpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IHRkMSA9ICQoJzx0ZD4nKS5hZGRDbGFzcygnY2l0ZS1mb3JtLXRkJykuYXR0cih7XG5cdFx0XHRcdFx0c3R5bGUsXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHR0ZDEuYXBwZW5kKGxhYmVsKTtcblx0XHRcdFx0dHIuYXBwZW5kKHRkMSk7XG5cdFx0XHRcdGNvbnN0IHRkMiA9ICQoJzx0ZD4nKS5hZGRDbGFzcygnY2l0ZS1mb3JtLXRkJykuY3NzKCd3aWR0aCcsICczMCUnKTtcblx0XHRcdFx0dGQyLmFwcGVuZChpbnB1dCk7XG5cdFx0XHRcdGlmIChhZCkge1xuXHRcdFx0XHRcdHRkMi5hcHBlbmQoYWQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRyLmFwcGVuZCh0ZDIpO1xuXHRcdFx0XHRpZiAoaSAlIDIgPT09IDApIHtcblx0XHRcdFx0XHR0cnMucHVzaCh0cik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGxldCBuZWVkc2V0dXAgPSBmYWxzZTtcblx0XHRcdGZvciAoY29uc3QgZyBpbiB0aGlzLmluY3JlbWVudGFibGVzKSB7XG5cdFx0XHRcdGlmICghdGhpcy5pbmNyZW1lbnRhYmxlc1tnXS5zZXR1cCkge1xuXHRcdFx0XHRcdG5lZWRzZXR1cCA9IHRydWU7XG5cdFx0XHRcdFx0JChkb2N1bWVudCkub24oJ2NsaWNrJywgYCNjaXRlLWluY3ItJHtDaXRlVEIuZXNjU3RyKHRoaXMuc2hvcnRmb3JtKX0tJHtnfWAsIENpdGVUQi5pbmNyZW1lbnRGaWVsZHMpO1xuXHRcdFx0XHRcdHRoaXMuaW5jcmVtZW50YWJsZXNbZ10uc2V0dXAgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAobmVlZHNldHVwIHx8IE9iamVjdC5rZXlzKHRoaXMuaW5jcmVtZW50YWJsZXMpLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKGNvbnN0IGF1dG9maWxsIG9mIGF1dG9maWxscykge1xuXHRcdFx0XHRcdCQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGF1dG9maWxsLCBDaXRlVEIuaW5pdEF1dG9maWxsKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRycztcblx0XHR9XG5cdFx0Ly8gZ2l2ZXMgYSBsaXR0bGUgYml0IG9mIEhUTUwgc28gdGhlIG9wZW4gZm9ybSBjYW4gYmUgaWRlbnRpZmllZFxuXHRcdGdldEluaXRpYWwoKSB7XG5cdFx0XHRjb25zdCBoaWRkZW4gPSAkKCc8aW5wdXQ+JykuYWRkQ2xhc3MoJ2NpdGUtdGVtcGxhdGUnKS5hdHRyKHtcblx0XHRcdFx0dHlwZTogJ2hpZGRlbicsXG5cdFx0XHRcdHZhbHVlOiB0aGlzLnRlbXBsYXRlbmFtZSxcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIGhpZGRlbjtcblx0XHR9XG5cdFx0Ly8gbWFrZXMgdGhlIGZvcm0gdXNlZCBpbiB0aGUgZGlhbG9nIGJveGVzXG5cdFx0Z2V0Rm9ybSgpIHtcblx0XHRcdGNvbnN0IG1haW4gPSAkKCc8ZGl2PicpLmFkZENsYXNzKCdjaXRlLWZvcm0tY29udGFpbmVyJyk7XG5cdFx0XHRjb25zdCBmb3JtMSA9ICQoJzx0YWJsZT4nKS5hZGRDbGFzcygnY2l0ZS1iYXNpYy1maWVsZHMnKS5jc3Moe1xuXHRcdFx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdFx0XHQnYmFja2dyb3VuZC1jb2xvcic6ICd0cmFuc3BhcmVudCcsXG5cdFx0XHR9KTtcblx0XHRcdGxldCB0cnMgPSB0aGlzLm1ha2VGb3JtSW5uZXIodGhpcy5iYXNpYywgdHJ1ZSk7XG5cdFx0XHRmb3IgKGNvbnN0IHRyIG9mIHRycykge1xuXHRcdFx0XHRmb3JtMS5hcHBlbmQodHIpO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgZm9ybTIgPSAkKCc8dGFibGU+JykuYWRkQ2xhc3MoJ2NpdGUtZXh0cmEtZmllbGRzJykuY3NzKHtcblx0XHRcdFx0d2lkdGg6ICcxMDAlJyxcblx0XHRcdFx0J2JhY2tncm91bmQtY29sb3InOiAndHJhbnNwYXJlbnQnLFxuXHRcdFx0XHRkaXNwbGF5OiAnbm9uZScsXG5cdFx0XHR9KTtcblx0XHRcdHRycyA9IHRoaXMubWFrZUZvcm1Jbm5lcih0aGlzLmV4dHJhLCB0cnVlKTtcblx0XHRcdGZvciAoY29uc3QgdHIgb2YgdHJzKSB7XG5cdFx0XHRcdGZvcm0yLmFwcGVuZCh0cik7XG5cdFx0XHR9XG5cdFx0XHRtYWluLmFwcGVuZChmb3JtMSkuYXBwZW5kKGZvcm0yKTtcblx0XHRcdGNvbnN0IGZvcm0zID0gJCgnPHRhYmxlPicpLmFkZENsYXNzKCdjaXRlLW90aGVyLWZpZWxkcycpLmNzcyh7XG5cdFx0XHRcdHdpZHRoOiAnMTAwJScsXG5cdFx0XHRcdCdiYWNrZ3JvdW5kLWNvbG9yJzogJ3RyYW5zcGFyZW50Jyxcblx0XHRcdFx0J3BhZGRpbmctdG9wJzogJzFlbScsXG5cdFx0XHR9KTtcblx0XHRcdGNvbnN0ICR0ciA9ICQoJzx0cj4nKTtcblx0XHRcdGNvbnN0ICR0ZDEgPSAkKCc8dGQ+JykuYWRkQ2xhc3MoJ2NpdGUtZm9ybS10ZCcpLmNzcyh7XG5cdFx0XHRcdCd0ZXh0LWFsaWduJzogJ3JpZ2h0Jyxcblx0XHRcdFx0d2lkdGg6ICcyMCUnLFxuXHRcdFx0fSk7XG5cdFx0XHRjb25zdCAkbGFiZWwxID0gJCgnPGxhYmVsPicpO1xuXHRcdFx0JGxhYmVsMS5hdHRyKCdmb3InLCBgY2l0ZS0ke0NpdGVUQi5lc2NTdHIodGhpcy5zaG9ydGZvcm0pfS1uYW1lYCkudGV4dChnZXRNZXNzYWdlKCdjaXRlLW5hbWUtbGFiZWwnKSk7XG5cdFx0XHQkdGQxLmFwcGVuZCgkbGFiZWwxKTtcblx0XHRcdGNvbnN0IHRkMiA9ICQoJzx0ZD4nKS5hZGRDbGFzcygnY2l0ZS1mb3JtLXRkJykuY3NzKCd3aWR0aCcsICczMCUnKTtcblx0XHRcdGNvbnN0IGlucHV0MSA9ICQoJzxpbnB1dD4nKS5hdHRyKHtcblx0XHRcdFx0dGFiaW5kZXg6ICcxJyxcblx0XHRcdFx0c3R5bGU6ICd3aWR0aDogMTAwJScsXG5cdFx0XHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHRcdH0pO1xuXHRcdFx0aW5wdXQxLmF0dHIoJ2lkJywgYGNpdGUtJHtDaXRlVEIuZXNjU3RyKHRoaXMuc2hvcnRmb3JtKX0tbmFtZWApO1xuXHRcdFx0dGQyLmFwcGVuZChpbnB1dDEpO1xuXHRcdFx0Y29uc3QgdGQzID0gJCgnPHRkPicpLmFkZENsYXNzKCdjaXRlLWZvcm0tdGQnKS5jc3Moe1xuXHRcdFx0XHQndGV4dC1hbGlnbic6ICdyaWdodCcsXG5cdFx0XHRcdCdwYWRkaW5nLWxlZnQnOiAnMWVtJyxcblx0XHRcdFx0d2lkdGg6ICcyMCUnLFxuXHRcdFx0fSk7XG5cdFx0XHRjb25zdCBsYWJlbDIgPSAkKCc8bGFiZWw+Jyk7XG5cdFx0XHRsYWJlbDIuYXR0cignZm9yJywgYGNpdGUtJHtDaXRlVEIuZXNjU3RyKHRoaXMuc2hvcnRmb3JtKX0tZ3JvdXBgKS50ZXh0KGdldE1lc3NhZ2UoJ2NpdGUtZ3JvdXAtbGFiZWwnKSk7XG5cdFx0XHR0ZDMuYXBwZW5kKGxhYmVsMik7XG5cdFx0XHRjb25zdCB0ZDQgPSAkKCc8dGQ+JykuYWRkQ2xhc3MoJ2NpdGUtZm9ybS10ZCcpLmNzcygnd2lkdGgnLCAnMzAlJyk7XG5cdFx0XHRjb25zdCBpbnB1dDIgPSAkKCc8aW5wdXQ+JykuYXR0cih7XG5cdFx0XHRcdHRhYmluZGV4OiAnMScsXG5cdFx0XHRcdHN0eWxlOiAnd2lkdGg6IDEwMCUnLFxuXHRcdFx0XHR0eXBlOiAndGV4dCcsXG5cdFx0XHR9KTtcblx0XHRcdGlucHV0Mi5hdHRyKCdpZCcsIGBjaXRlLSR7Q2l0ZVRCLmVzY1N0cih0aGlzLnNob3J0Zm9ybSl9LWdyb3VwYCk7XG5cdFx0XHR0ZDQuYXBwZW5kKGlucHV0Mik7XG5cdFx0XHQkdHIuYXBwZW5kKCR0ZDEpLmFwcGVuZCh0ZDIpLmFwcGVuZCh0ZDMpLmFwcGVuZCh0ZDQpO1xuXHRcdFx0Zm9ybTMuYXBwZW5kKCR0cik7XG5cdFx0XHRtYWluLmFwcGVuZChmb3JtMyk7XG5cdFx0XHRjb25zdCBleHRyYXMgPSAkKCc8ZGl2PicpO1xuXHRcdFx0ZXh0cmFzLmFwcGVuZChcblx0XHRcdFx0JCgnPGlucHV0PicpLmFkZENsYXNzKCdjaXRlLWZvcm0tc3RhdHVzJykuYXR0cih7XG5cdFx0XHRcdFx0dHlwZTogJ2hpZGRlbicsXG5cdFx0XHRcdFx0dmFsdWU6ICdjbG9zZWQnLFxuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0XHRcdGNvbnN0IGhpZGRlbiA9ICQoJzxpbnB1dD4nKS5hZGRDbGFzcygnY2l0ZS10ZW1wbGF0ZScpLmF0dHIoJ3R5cGUnLCAnaGlkZGVuJyk7XG5cdFx0XHRoaWRkZW4udmFsKHRoaXMudGVtcGxhdGVuYW1lKTtcblx0XHRcdGV4dHJhcy5hcHBlbmQoaGlkZGVuKTtcblx0XHRcdGNvbnN0IHNwYW4xID0gJCgnPHNwYW4+JykuYWRkQ2xhc3MoJ2NpdGUtcHJldmlldy1sYWJlbCcpLmNzcygnZGlzcGxheScsICdub25lJyk7XG5cdFx0XHRzcGFuMS50ZXh0KGdldE1lc3NhZ2UoJ2NpdGUtcmF3LXByZXZpZXcnKSk7XG5cdFx0XHRleHRyYXMuYXBwZW5kKHNwYW4xKS5hcHBlbmQoXG5cdFx0XHRcdCQoJzxkaXY+JykuYWRkQ2xhc3MoJ2NpdGUtcmVmLXByZXZpZXcnKS5jc3Moe1xuXHRcdFx0XHRcdHBhZGRpbmc6ICcwLjVlbScsXG5cdFx0XHRcdFx0J2ZvbnQtc2l6ZSc6ICcxMTAlJyxcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdFx0XHRjb25zdCBzcGFuMiA9ICQoJzxzcGFuPicpLmFkZENsYXNzKCdjaXRlLXByZXYtcGFyc2VkLWxhYmVsJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcblx0XHRcdHNwYW4yLnRleHQoZ2V0TWVzc2FnZSgnY2l0ZS1wYXJzZWQtbGFiZWwnKSk7XG5cdFx0XHRleHRyYXMuYXBwZW5kKHNwYW4yKS5hcHBlbmQoXG5cdFx0XHRcdCQoJzxkaXY+JykuYWRkQ2xhc3MoJ2NpdGUtcHJldmlldy1wYXJzZWQnKS5jc3Moe1xuXHRcdFx0XHRcdCdwYWRkaW5nLWJvdHRvbSc6ICcwLjVlbScsXG5cdFx0XHRcdFx0J2ZvbnQtc2l6ZSc6ICcxMTAlJyxcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdFx0XHRjb25zdCBsaW5rID0gJCgnPGE+JykuYWRkQ2xhc3MoJ2NpdGUtcHJldi1wYXJzZScpLmF0dHIoJ2hyZWYnLCAnIycpLmNzcyh7XG5cdFx0XHRcdG1hcmdpbjogJzAgMWVtJyxcblx0XHRcdFx0ZGlzcGxheTogJ25vbmUnLFxuXHRcdFx0XHRjb2xvcjogJyMwMDAwOGInLFxuXHRcdFx0fSk7XG5cdFx0XHRsaW5rLnRleHQoZ2V0TWVzc2FnZSgnY2l0ZS1mb3JtLXBhcnNlJykpO1xuXHRcdFx0ZXh0cmFzLmFwcGVuZChsaW5rKTtcblx0XHRcdG1haW4uYXBwZW5kKGV4dHJhcyk7XG5cdFx0XHRyZXR1cm4gbWFpbjtcblx0XHR9XG5cdH07XG5cdC8qKlxuXHQgKiBDbGFzcyBmb3IgZXJyb3IgY2hlY2tzXG5cdCAqIEZJWE1FOiBET0NTIE9VVCBPRiBEQVRFXG5cdCAqIHR5cGUgLSB0eXBlIG9mIGVycm9yIGNoZWNrIC0gY3VycmVudCBvcHRpb25zOlxuXHQgKiAqICdyZWZjaGVjaycgLSBhcHBseSBhIGZ1bmN0aW9uIG9uIGVhY2ggcmVmIGluZGl2aWR1YWxseVxuXHQgKiAtIGZ1bmN0aW9uIHNob3VsZCBhY2NlcHQgYSByZWYgb2JqZWN0LCByZXR1cm4gYSBzdHJpbmdcblx0ICogKiAncmVmbGlzdCcgLSBhcHBseSBhIGZ1bmN0aW9uIG9uIHRoZSBlbnRpcmUgcmVmIGxpc3Rcblx0ICogLSBmdW5jdGlvbiBzaG91bGQgYWNjZXB0IGFuIGFycmF5IG9mIHJlZiBvYmplY3RzLCByZXR1cm4gYW4gYXJyYXkgb2Ygc3RyaW5nc1xuXHQgKiAqICdzZWFyY2gnIC0gYXBwbHkgYSBmdW5jdGlvbiBybyB0aGUgcGFnZSB0ZXh0XG5cdCAqIC0gZnVuY3Rpb24gc2hvdWxkIGFjY2VwdCB0aGUgcGFnZSB0ZXh0IGFzIGEgc3RyaW5nLCByZXR1cm4gYW4gYXJyYXkgb2Ygc3RyaW5nc1xuXHQgKiBUaGUgc3RyaW5ncyByZXR1cm5lZCBieSB0aGUgZnVuY3Rpb24gc2hvdWxkIGJlIHZhbGlkIEhUTUxcblx0ICogZnVuY3Rpb24gLSBUaGUgZnVuY3Rpb24gZGVzY3JpYmVkIGFib3ZlIHRlc3RuYW1lIC0gTmFtZSBvZiB0aGUgZXJyb3IgY2hlY2ssIG11c3Qgbm90IGNvbnRhaW4gc3BhY2VzXG5cdCAqIGRlc2MgLSBBIHNob3J0IGRlc2NyaXB0aW9uIG9mIHRoZSB0ZXN0XG5cdCAqXG5cdCAqIEBwYXJhbSB7dW5rbm93bn0gb2JqXG5cdCAqL1xuXHR3aW5kb3cuQ2l0ZUVycm9yQ2hlY2sgPSBjbGFzcyBDaXRlRXJyb3JDaGVjayB7XG5cdFx0Y29uc3RydWN0b3Iob2JqKSB7XG5cdFx0XHR0aGlzLm9iaiA9IG9iajtcblxuXHRcdFx0Q2l0ZVRCLkVycm9yQ2hlY2tzW3RoaXMub2JqLnRlc3RuYW1lXSA9IHRoaXM7XG5cdFx0fVxuXHRcdHJ1bigpIHtcblx0XHRcdGxldCBlcnJvcnMgPSBbXTtcblx0XHRcdHN3aXRjaCAodGhpcy5vYmoudHlwZSkge1xuXHRcdFx0XHRjYXNlICdyZWZjaGVjayc6XG5cdFx0XHRcdFx0Q2l0ZVRCLmxvYWRSZWZzKCk7XG5cdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBDaXRlVEIubWFpblJlZkxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdGNvbnN0IGUgPSB0aGlzLm9iai5mdW5jKENpdGVUQi5tYWluUmVmTGlzdFtpXSk7XG5cdFx0XHRcdFx0XHRpZiAoZSkge1xuXHRcdFx0XHRcdFx0XHRlcnJvcnMucHVzaChlKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3JlZmxpc3QnOlxuXHRcdFx0XHRcdENpdGVUQi5sb2FkUmVmcygpO1xuXHRcdFx0XHRcdGVycm9ycyA9IHRoaXMub2JqLmZ1bmMoQ2l0ZVRCLm1haW5SZWZMaXN0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnc2VhcmNoJzoge1xuXHRcdFx0XHRcdGNvbnN0IHtmdW5jfSA9IHRoaXMub2JqO1xuXHRcdFx0XHRcdENpdGVUQi5nZXRQYWdlVGV4dCgodGV4dCkgPT4ge1xuXHRcdFx0XHRcdFx0ZXJyb3JzID0gZnVuYyh0ZXh0KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGVycm9ycztcblx0XHR9XG5cdFx0Z2V0Um93KCkge1xuXHRcdFx0Y29uc3Qgcm93ID0gJCgnPGxpPicpO1xuXHRcdFx0Y29uc3QgY2hlY2sgPSAkKCc8aW5wdXQ+JykuYXR0cih7XG5cdFx0XHRcdHR5cGU6ICdjaGVja2JveCcsXG5cdFx0XHRcdG5hbWU6ICdjaXRlLWVyci10ZXN0Jyxcblx0XHRcdH0pO1xuXHRcdFx0Y2hlY2suYXR0cigndmFsdWUnLCB0aGlzLm9iai50ZXN0bmFtZSk7XG5cdFx0XHRjb25zdCBsYWJlbCA9ICQoJzxsYWJlbD4nKS5odG1sKGdldE1lc3NhZ2UodGhpcy5vYmouZGVzYykpO1xuXHRcdFx0bGFiZWwuYXR0cignZm9yJywgdGhpcy5vYmoudGVzdG5hbWUpO1xuXHRcdFx0cm93LmFwcGVuZChjaGVjaykuYXBwZW5kKCcgJm5kYXNoOyAnKS5hcHBlbmQobGFiZWwpO1xuXHRcdFx0cmV0dXJuIHJvdztcblx0XHR9XG5cdH07XG5cblx0JChkb2N1bWVudCkuZmluZCgnaGVhZCcpLnRyaWdnZXIoJ3JlZnRvb2xiYXJiYXNlJyk7XG59O1xuXG5leHBvcnQge3JlZlRvb2xiYXJCYXNlfTtcbiIsICJpbXBvcnQge1dHX1VTRVJfTEFOR1VBR0V9IGZyb20gJy4vY29uc3RhbnQnO1xuXG5jb25zdCByZWZUb29sYmFyTWVzYWdlcyA9ICgpOiB2b2lkID0+IHtcblx0aWYgKFdHX1VTRVJfTEFOR1VBR0UgPT09ICdlbicpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Ly8gQWxsIHVzZXItZmFjaW5nIG1lc3NhZ2VzXG5cdC8vIFRPRE86IERvY3VtZW50IHVzYWdlXG5cdGlmIChbJ3poLWhhbnQnLCAnemgtaGsnLCAnemgtbW8nLCAnemgtdHcnXS5pbmNsdWRlcyhXR19VU0VSX0xBTkdVQUdFKSkge1xuXHRcdG13Lm1lc3NhZ2VzLnNldCh7XG5cdFx0XHQnY2l0ZS1zZWN0aW9uLWxhYmVsJzogJ+W8leeUqCcsXG5cdFx0XHQnY2l0ZS10ZW1wbGF0ZS1saXN0JzogJ+aooeadvycsXG5cdFx0XHQnY2l0ZS1uYW1lZC1yZWZzLWxhYmVsJzogJ+WQjOWQjeaWh+eNuycsXG5cdFx0XHQnY2l0ZS1uYW1lZC1yZWZzLXRpdGxlJzogJ+aPkuWFpeWQjOWQjeaWh+eNuycsXG5cdFx0XHQnY2l0ZS1uYW1lZC1yZWZzLWJ1dHRvbic6ICflt7Llkb3lkI3lj4PogIPmlofnjbsnLFxuXHRcdFx0J2NpdGUtbmFtZWQtcmVmcy1kcm9wZG93bic6ICflkIzlkI3mlofnjbsnLFxuXHRcdFx0Ly8gVXNlZCBvbiB0aGUgdG9wIG9mIHRoZSBuYW1lZCByZWZzIGxpc3QgZHJvcHNvd25cblx0XHRcdCdjaXRlLWVycm9yY2hlY2stbGFiZWwnOiAn6Yyv6Kqk5qqi5p+lJyxcblx0XHRcdCdjaXRlLWVycm9yY2hlY2stYnV0dG9uJzogJ+aqouafpemMr+iqpCcsXG5cdFx0XHQnY2l0ZS1kaWFsb2ctYmFzZSc6ICflvJXnlKgnLFxuXHRcdFx0J2NpdGUtZm9ybS1zdWJtaXQnOiAn5o+S5YWlJyxcblx0XHRcdCdjaXRlLWZvcm0tc2hvd2hpZGUnOiAn6aGv56S6L+maseiXj+mhjeWkluWNgOWfnycsXG5cdFx0XHQnY2l0ZS1uby1uYW1lZHJlZnMnOiAn5Zyo5pys6aCB5om+5LiN5Yiw5Lu75L2V5ZCM5ZCN5paH5427Jyxcblx0XHRcdCdjaXRlLW5hbWVkcmVmcy1pbnRybyc6ICflvp7liJflh7rnmoTlj4PogIPmlofnjbvnm67pjITkuK3pgbjmk4fkuIDlgIvlkI3lrZfjgILpu57mk4rjgIzmj5LlhaXjgI3mj5LlhaXkuIDlgIvlj4PogIPmlofnjbvliLDmlofmnKzkuK3jgIInLFxuXHRcdFx0J2NpdGUtcmF3LXByZXZpZXcnOiAnV2lraXRleHQ6Jyxcblx0XHRcdCdjaXRlLXBhcnNlZC1sYWJlbCc6ICfop6PmnpDlvoznmoR3aWtpdGV4dDonLFxuXHRcdFx0J2NpdGUtZm9ybS1wYXJzZSc6ICfpoa/npLrop6PmnpDlvoznmoTpoJDopr0nLFxuXHRcdFx0J2NpdGUtcmVmcHJldmlldyc6ICfpoJDopr0nLFxuXHRcdFx0J2NpdGUtbmFtZS1sYWJlbCc6ICdyZWblkI0nLFxuXHRcdFx0J2NpdGUtZ3JvdXAtbGFiZWwnOiAncmVm57WEJyxcblx0XHRcdCdjaXRlLWVycm9yY2hlY2stc3VibWl0JzogJ+aqouafpScsXG5cdFx0XHQnY2l0ZS1lcnJvcmNoZWNrLWhlYWRpbmcnOiAn5qqi5p+l5LiL5YiX6Yyv6Kqk77yaJyxcblx0XHRcdCdjaXRlLWVycm9yLXVuY2xvc2VkJzogJ+acqumXnOmWiTx0dD4mbHQ7cmVmJmd0OzwvdHQ+5qiZ6KiYJyxcblx0XHRcdCdjaXRlLWVycm9yLXNhbWVjb250ZW50JzogJ+acieebuOWQjOWFp+WuueeahOWPg+iAg+aWh+eNuycsXG5cdFx0XHQnY2l0ZS1lcnJvci10ZW1wbGF0ZXMnOiBg5Y+D6ICD5paH54275pyq5L2/55SoPGEgaHJlZj1cIiR7bXcudXRpbC5nZXRVcmwoJ0NhdGVnb3J5OuW8leeUqOaooeadvycpfVwiPuW8leeUqOaooeadvzwvYT5gLFxuXHRcdFx0J2NpdGUtZXJyb3ItcmVwZWF0ZWQnOiAn5aSa5YCL5Y+D6ICD5paH54275pyJ55u45ZCM5ZCN56ixJyxcblx0XHRcdCdjaXRlLWVycm9yLXVuZGVmJzogJ+acieacquWumue+qeeahOWQjOWQjeWPg+iAg+aWh+eNu+WcqOS9v+eUqCcsXG5cdFx0XHQnY2l0ZS1lcnJvci1zYW1lY29udGVudC1tc2cnOiAn5aSa5YCL5paH54275ZCr5pyJ55u45ZCM5YWn5a65OiAkMScsXG5cdFx0XHQnY2l0ZS1lcnJvci1yZXBlYXRlZC1tc2cnOiAn57Wm5aSa5YCL5Y+D6ICD5paH54275ZG95ZCNOiDjgIwkMeOAjScsXG5cdFx0XHQnY2l0ZS1lcnJvci10ZW1wbGF0ZXMtbXNnJzogJ+aykuacieS9v+eUqOaooeadvzogJDEnLFxuXHRcdFx0J2NpdGUtZm9ybS1yZXNldCc6ICfph43oqK3ooajllq4nLFxuXHRcdFx0J2NpdGUtbG9hZGluZyc6ICfovInlhaXmlbjmk5onLFxuXHRcdFx0Ly8gU2hvd24gd2hpbGUgcGFnZXRleHQgaXMgYmVpbmcgZG93bmxvYWRlZCBmcm9tIHRoZSBBUElcblx0XHRcdCdjaXRlLWluc2VydC1kYXRlJzogJ+aPkuWFpeeVtuWJjeaXpeacnycsXG5cdFx0XHQvLyBBbHQvdGl0bGUgdGV4dCBmb3IgXCJpbnNlcnQgZGF0ZVwiIGljb25cblx0XHRcdCdjaXRlLWVyci1yZXBvcnQtaGVhZGluZyc6ICflvJXnlKjpjK/oqqTloLHlkYonLFxuXHRcdFx0Ly8gSGVhZGluZyBmb3IgZXJyb3IgcmVwb3J0IHRhYmxlXG5cdFx0XHQnY2l0ZS1lcnItcmVwb3J0LWNsb3NlJzogJ+mXnOmWiScsXG5cdFx0XHQvLyBBbHQvdGl0bGUgdGV4dCBmb3IgXCJjbG9zZVwiIGljb24gb24gZXJyb3IgcmVwb3J0XG5cdFx0XHQnY2l0ZS1lcnItcmVwb3J0LWVtcHR5JzogJ+acquaJvuWIsOmMr+iqpCcsXG5cdFx0XHQvLyBNZXNzYWdlIGRpc3BsYXllZCBpbiB0aGUgZXJyb3IgcmVwb3J0IGxpc3QgaWYgdGhlcmUgYXJlIG5vIGVycm9yc1xuXHRcdFx0J2NpdGUtYXV0b2ZpbGwtYWx0JzogJ+iHquWLleWhq+WFhScsXG5cdFx0XHQvLyBBbHQgdGV4dCBmb3IgYXV0b2ZpbGwgYnV0dG9uIGltYWdlXG5cdFx0XHQnY2l0ZS1yZWYtdG9vbHRpcCc6ICfpjKjpu57nmoTmqJnorZjnrKbvvIjkvb/oqbLlvJXnlKjlj6/ku6XmiJDngrrlhafpg6jpgKPntZDnmoTnm67mqJnvvIknLFxuXHRcdFx0J2NpdGUtcG9zdHNjcmlwdC10b29sdGlwJzogJ+WmguaenOioreWumumAmeS4gOWPg+aVuO+8jOWJh+imhuiTi+S9v+eUqOWPpem7nue1guatouW8leaWh+eahOm7mOiqjeihjOeIsicsXG5cdFx0XHQnY2l0ZS1kaWFsb2ctd2ViJzogJ+e2sumggeW8leeUqCcsXG5cdFx0XHQnY2l0ZS1kaWFsb2ctbmV3cyc6ICfmlrDogZ7lvJXnlKgnLFxuXHRcdFx0J2NpdGUtZGlhbG9nLWJvb2snOiAn5pu457GN5byV55SoJyxcblx0XHRcdCdjaXRlLWRpYWxvZy1qb3VybmFsJzogJ+acn+WIiuW8leeUqCcsXG5cdFx0XHQnY2l0ZS1kaWFsb2ctY29uZmVyZW5jZSc6ICfmnIPorbDlvJXnlKgnLFxuXHRcdFx0J2NpdGUtZGlhbG9nLWVuY3ljbG9wZWRpYSc6ICfnmb7np5Hlhajmm7jlvJXnlKgnLFxuXHRcdFx0J2NpdGUtYXV0aG9yLWxhYmVsJzogJ+S9nOiAhScsXG5cdFx0XHQnY2l0ZS10aXRsZS1sYWJlbCc6ICfmqJnpoYwnLFxuXHRcdFx0J2NpdGUtdXJsLWxhYmVsJzogJ+e2suWdgCcsXG5cdFx0XHQnY2l0ZS13ZWJzaXRlLWxhYmVsJzogJ+e2suermeWQjeeosScsXG5cdFx0XHQnY2l0ZS13b3JrLWxhYmVsJzogJ+Wgsee0meaIlumbnOiqjCcsXG5cdFx0XHQnY2l0ZS1hZ2VuY3ktbGFiZWwnOiAn6YCa6KiK56S+Jyxcblx0XHRcdCdjaXRlLXB1Ymxpc2hlci1sYWJlbCc6ICflh7rniYjogIUnLFxuXHRcdFx0J2NpdGUtYWNjZXNzZGF0ZS1sYWJlbCc6ICflrZjlj5bml6XmnJ8nLFxuXHRcdFx0J2NpdGUtbGFzdC1sYWJlbCc6ICflp5MnLFxuXHRcdFx0J2NpdGUtZmlyc3QtbGFiZWwnOiAn5ZCNJyxcblx0XHRcdCdjaXRlLWF1dGhvcmxpbmstbGFiZWwnOiAn5L2c6ICF5qKd55uuJyxcblx0XHRcdCdjaXRlLWNvYXV0aG9ycy1sYWJlbCc6ICflhbbku5bkvZzogIUnLFxuXHRcdFx0J2NpdGUtbG9jYXRpb24tbGFiZWwnOiAn5Ye654mI5ZywJyxcblx0XHRcdCdjaXRlLXBhZ2UtbGFiZWwnOiAn5omA5Zyo6aCBJyxcblx0XHRcdCdjaXRlLXBhZ2VzLWxhYmVsJzogJ+mggeevhOWcjScsXG5cdFx0XHQnY2l0ZS1hdC1sYWJlbCc6ICfmm7jlhafpg6jliIYnLFxuXHRcdFx0J2NpdGUtbGFuZ3VhZ2UtbGFiZWwnOiAn6Kqe6KiAJyxcblx0XHRcdCdjaXRlLWZvcm1hdC1sYWJlbCc6ICfmlofku7bmoLzlvI8nLFxuXHRcdFx0J2NpdGUtZG9pLWxhYmVsJzogJ0RPSScsXG5cdFx0XHQnY2l0ZS1kYXRlLWxhYmVsJzogJ+aXpeacnycsXG5cdFx0XHQnY2l0ZS1tb250aC1sYWJlbCc6ICfmnIjku70nLFxuXHRcdFx0J2NpdGUteWVhci1sYWJlbCc6ICflubTku70nLFxuXHRcdFx0J2NpdGUtcXVvdGUtbGFiZWwnOiAn5pGY6YyEJyxcblx0XHRcdCdjaXRlLW5ld3NwYXBlci1sYWJlbCc6ICfmlrDogZ7lqpLpq5QnLFxuXHRcdFx0J2NpdGUtYXV0aG9yMi1sYWJlbCc6ICfnrKwy5L2c6ICFJyxcblx0XHRcdCdjaXRlLWF1dGhvcjMtbGFiZWwnOiAn56ysM+S9nOiAhScsXG5cdFx0XHQnY2l0ZS1hdXRob3I0LWxhYmVsJzogJ+esrDTkvZzogIUnLFxuXHRcdFx0J2NpdGUtYXV0aG9yNS1sYWJlbCc6ICfnrKw15L2c6ICFJyxcblx0XHRcdCdjaXRlLWFnZW5jeSc6ICfpgJroqIrnpL4nLFxuXHRcdFx0J2NpdGUtaXNzbi1sYWJlbCc6ICdJU1NOJyxcblx0XHRcdCdjaXRlLW9jbGMtbGFiZWwnOiAnT0NMQycsXG5cdFx0XHQnY2l0ZS1iaWJjb2RlLWxhYmVsJzogJ0JpYmNvZGUnLFxuXHRcdFx0J2NpdGUtaXNibi1sYWJlbCc6ICdJU0JOJyxcblx0XHRcdCdjaXRlLW90aGVycy1sYWJlbCc6ICfora/ogIUnLFxuXHRcdFx0J2NpdGUtZWRpdGlvbi1sYWJlbCc6ICfniYjmnKwnLFxuXHRcdFx0J2NpdGUtdHJhbnMtdGl0bGUtbGFiZWwnOiAn57+76K2v5b6M5qiZ6aGMJyxcblx0XHRcdCdjaXRlLXJlZi1sYWJlbCc6ICfpjKjpu57mqJnorZjnrKYnLFxuXHRcdFx0J2NpdGUtcG9zdHNjcmlwdC1sYWJlbCc6ICfnu5PlsL7nrKYnLFxuXHRcdFx0J2NpdGUtc2VyaWVzLWxhYmVsJzogJ+ezu+WIlycsXG5cdFx0XHQnY2l0ZS12b2x1bWUtbGFiZWwnOiAn5Y23Jyxcblx0XHRcdCdjaXRlLXVuaWZpZWQtbGFiZWwnOiAn57Wx5LiA5pu46JmfJyxcblx0XHRcdCdjaXRlLWNoYXB0ZXItbGFiZWwnOiAn56ug56+AJyxcblx0XHRcdCdjaXRlLWpvdXJuYWwtbGFiZWwnOiAn6Zuc6KqML+acn+WIiicsXG5cdFx0XHQnY2l0ZS1pc3N1ZS1sYWJlbCc6ICfmnJ8nLFxuXHRcdFx0J2NpdGUtcG1pZC1sYWJlbCc6ICdQTUlEJyxcblx0XHRcdCdjaXRlLWVkaXRvci1sYWJlbCc6ICfnt6jovK8nLFxuXHRcdFx0J2NpdGUtZWRpdG9yMS1maXJzdC1sYWJlbCc6ICfnt6jovK/lkI0nLFxuXHRcdFx0J2NpdGUtZWRpdG9yMS1sYXN0LWxhYmVsJzogJ+e3qOi8r+WnkycsXG5cdFx0XHQnY2l0ZS1lZGl0b3IxLWxpbmstbGFiZWwnOiAn57eo6Lyv5qKd55uuJyxcblx0XHRcdCdjaXRlLWVkaXRvci1maXJzdC1sYWJlbCc6ICfnt6jovK/lkI0nLFxuXHRcdFx0J2NpdGUtZWRpdG9yLWxhc3QtbGFiZWwnOiAn57eo6Lyv5aeTJyxcblx0XHRcdCdjaXRlLWVkaXRvci1saW5rLWxhYmVsJzogJ+e3qOi8r+aineebricsXG5cdFx0XHQnY2l0ZS1wbWMtbGFiZWwnOiAnUE1DJyxcblx0XHRcdCdjaXRlLWlkLWxhYmVsJzogJ0lEJyxcblx0XHRcdCdjaXRlLWxheXN1bW1hcnktbGFiZWwnOiAn57Ch5piO5pGY6KaBJyxcblx0XHRcdCdjaXRlLWxheXNvdXJjZS1sYWJlbCc6ICfnsKHmmI7mkZjopoHkvobmupAnLFxuXHRcdFx0J2NpdGUtbGF5ZGF0ZS1sYWJlbCc6ICfnsKHmmI7mkZjopoHml6XmnJ8nLFxuXHRcdFx0J2NpdGUtY29uZmVyZW5jZS1sYWJlbCc6ICfmnIPorbDlkI3nqLEnLFxuXHRcdFx0J2NpdGUtY29uZmVyZW5jZXVybC1sYWJlbCc6ICfmnIPorbDntrLlnYAnLFxuXHRcdFx0J2NpdGUtYm9va3RpdGxlLWxhYmVsJzogJ+irluaWh+mbhicsXG5cdFx0XHQnY2l0ZS1lbmN5Y2xvcGVkaWEtbGFiZWwnOiAn55m+56eR5YWo5pu45ZCNJyxcblx0XHRcdCdjaXRlLWF1dGhvcmxpbmstdG9vbHRpcCc6ICfoi6XoqbLkvZzogIXmnInmop3nm67vvIzloavlr6vmop3nm67lkI3nqLEnLFxuXHRcdFx0J2NpdGUtYXQtdG9vbHRpcCc6ICflhaflrrnlnKjkvobmupDkuK3nmoTkvY3nva7vvIjnlbbmjInpoIHnorzlvJXnlKjkuI3pgannlbbmmYLvvIknLFxuXHRcdFx0J2NpdGUtYWNjZXNzZGF0ZS10b29sdGlwJzogJ+ioquWVj+mAmeWAi+W8leeUqOS+hua6kOaZgueahOaXpeacnycsXG5cdFx0XHQnY2l0ZS1pZC10b29sdGlwJzogJ+WFtuS7lueahOaWh+eroOe3qOiZnycsXG5cdFx0XHQnY2l0ZS1zYW1lY29udGVudC1kZXNjJzogJ+aqouafpeWQq+acieebuOWQjOWFp+WuueeahOWkmuWAi+WPg+iAg+aWh+eNuycsXG5cdFx0XHQnY2l0ZS1zYW1lY29udGVudC1lcnJvcic6ICflpJrlgIvlj4PogIPmlofnjbvljIXlkKvmnInnm7jlkIzlhaflrrknLFxuXHRcdFx0J2NpdGUtcmVwZWF0ZWQtZGVzYyc6ICfkvb/nlKjnm7jlkIzlkI3lrZfnmoTlpJrlgIvlj4PogIPmlofnjbsnLFxuXHRcdFx0J2NpdGUtcmVwZWF0ZWQtZXJyb3InOiAn5aSa5YCL5Y+D6ICD5paH54275L2/55So5LqG55u45ZCM5ZCN5a2XJyxcblx0XHRcdCdjaXRlLXVuZGVmaW5lZC1kZXNjJzogJ+acquWumue+qeeahOWPg+iAg+aWh+eNuycsXG5cdFx0XHQnY2l0ZS11bmRlZmluZWQtZXJyb3InOiAn5LiA5YCL5bey5ZG95ZCN55qE5Y+D6ICD5paH54275bey57aT5L2/55So5L2G5piv5rKS5pyJ5a6a576pJyxcblx0XHRcdCdjaXRlLXdvcmstdG9vbHRpcCc6ICfliIrnmbvoqbLkvZzlk4HnmoTlh7rniYjniannmoTlkI3nqLHjgILoq4vkuI3opoHkvb/nlKjmlpzpq5QnLFxuXHRcdFx0J2NpdGUtbmV3c3BhcGVyLXRvb2x0aXAnOiAn5YiK55m76Kmy5paw6IGe55qE5Ye654mI54mp5ZCN56ixJyxcblx0XHRcdCdjaXRlLXNlcmllcy10b29sdGlwJzogJ+eVtuabuOexjeaYr+S4gOezu+WIl+WHuueJiOWTgeS4reeahOWFtuS4reS4gOmDqOS7veaZguS9v+eUqCcsXG5cdFx0XHQnY2l0ZS11bmlmaWVkLXRvb2x0aXAnOiAnMTk4MOW5tOS7o+S5i+WJjeS4reWci+aJgOS9v+eUqOeahOabuOexjee3qOiZnycsXG5cdFx0XHQnY2l0ZS1sYXlzdW1tYXJ5LXRvb2x0aXAnOiAn6Kmy5paH542755u46Zec55qE5paw6IGe5aCx6YGT55qEVVJMJyxcblx0XHRcdCdjaXRlLWxheXNvdXJjZS10b29sdGlwJzogJ+ipsuaWh+eNu+ebuOmXnOeahOaWsOiBnuWgsemBk+eahOWHuuiZlScsXG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0bXcubWVzc2FnZXMuc2V0KHtcblx0XHRcdCdjaXRlLXNlY3Rpb24tbGFiZWwnOiAn5byV55SoJyxcblx0XHRcdCdjaXRlLXRlbXBsYXRlLWxpc3QnOiAn5qih5p2/Jyxcblx0XHRcdCdjaXRlLW5hbWVkLXJlZnMtbGFiZWwnOiAn5ZCM5ZCN5paH54yuJyxcblx0XHRcdCdjaXRlLW5hbWVkLXJlZnMtdGl0bGUnOiAn5o+S5YWl5ZCM5ZCN5paH54yuJyxcblx0XHRcdCdjaXRlLW5hbWVkLXJlZnMtYnV0dG9uJzogJ+W3suWRveWQjeWPguiAg+aWh+eMricsXG5cdFx0XHQnY2l0ZS1uYW1lZC1yZWZzLWRyb3Bkb3duJzogJ+WQjOWQjeaWh+eMricsXG5cdFx0XHQvLyBVc2VkIG9uIHRoZSB0b3Agb2YgdGhlIG5hbWVkIHJlZnMgbGlzdCBkcm9wc293blxuXHRcdFx0J2NpdGUtZXJyb3JjaGVjay1sYWJlbCc6ICfplJnor6/mo4Dmn6UnLFxuXHRcdFx0J2NpdGUtZXJyb3JjaGVjay1idXR0b24nOiAn5qOA5p+l6ZSZ6K+vJyxcblx0XHRcdCdjaXRlLWRpYWxvZy1iYXNlJzogJ+W8leeUqCcsXG5cdFx0XHQnY2l0ZS1mb3JtLXN1Ym1pdCc6ICfmj5LlhaUnLFxuXHRcdFx0J2NpdGUtZm9ybS1zaG93aGlkZSc6ICfmmL7npLov6ZqQ6JeP6aKd5aSW5Yy65Z+fJyxcblx0XHRcdCdjaXRlLW5vLW5hbWVkcmVmcyc6ICflnKjmnKzpobXmib7kuI3liLDku7vkvZXlkIzlkI3mlofnjK4nLFxuXHRcdFx0J2NpdGUtbmFtZWRyZWZzLWludHJvJzogJ+S7juWIl+WHuueahOWPguiAg+aWh+eMruebruW9leS4remAieaLqeS4gOS4quWQjeWtl+OAgueCueWHu+KAnOaPkuWFpeKAneaPkuWFpeS4gOS4quWPguiAg+aWh+eMruWIsOaWh+acrOS4reOAgicsXG5cdFx0XHQnY2l0ZS1yYXctcHJldmlldyc6ICdXaWtpdGV4dDonLFxuXHRcdFx0J2NpdGUtcGFyc2VkLWxhYmVsJzogJ+ino+aekOWQjueahHdpa2l0ZXh0OicsXG5cdFx0XHQnY2l0ZS1mb3JtLXBhcnNlJzogJ+aYvuekuuino+aekOWQjueahOmihOiniCcsXG5cdFx0XHQnY2l0ZS1yZWZwcmV2aWV3JzogJ+mihOiniCcsXG5cdFx0XHQnY2l0ZS1uYW1lLWxhYmVsJzogJ3JlZuWQjScsXG5cdFx0XHQnY2l0ZS1ncm91cC1sYWJlbCc6ICdyZWbnu4QnLFxuXHRcdFx0J2NpdGUtZXJyb3JjaGVjay1zdWJtaXQnOiAn5qOA5p+lJyxcblx0XHRcdCdjaXRlLWVycm9yY2hlY2staGVhZGluZyc6ICfmo4Dmn6XkuIvliJfplJnor6/vvJonLFxuXHRcdFx0J2NpdGUtZXJyb3ItdW5jbG9zZWQnOiAn5pyq5YWz6ZetPHR0PiZsdDtyZWYmZ3Q7PC90dD7moIforrAnLFxuXHRcdFx0J2NpdGUtZXJyb3Itc2FtZWNvbnRlbnQnOiAn5pyJ55u45ZCM5YaF5a6555qE5Y+C6ICD5paH54yuJyxcblx0XHRcdCdjaXRlLWVycm9yLXRlbXBsYXRlcyc6IGDlj4LogIPmlofnjK7mnKrkvb/nlKg8YSBocmVmPVwiJHttdy51dGlsLmdldFVybCgnQ2F0ZWdvcnk65byV55So5qih5p2/Jyl9XCI+5byV55So5qih5p2/PC9hPmAsXG5cdFx0XHQnY2l0ZS1lcnJvci1yZXBlYXRlZCc6ICflpJrkuKrlj4LogIPmlofnjK7mnInnm7jlkIzlkI3np7AnLFxuXHRcdFx0J2NpdGUtZXJyb3ItdW5kZWYnOiAn5pyJ5pyq5a6a5LmJ55qE5ZCM5ZCN5Y+C6ICD5paH54yu5Zyo5L2/55SoJyxcblx0XHRcdCdjaXRlLWVycm9yLXNhbWVjb250ZW50LW1zZyc6ICflpJrkuKrmlofnjK7lkKvmnInnm7jlkIzlhoXlrrk6ICQxJyxcblx0XHRcdCdjaXRlLWVycm9yLXJlcGVhdGVkLW1zZyc6ICfnu5nlpJrkuKrlj4LogIPmlofnjK7lkb3lkI06IOKAnCQx4oCdJyxcblx0XHRcdCdjaXRlLWVycm9yLXRlbXBsYXRlcy1tc2cnOiAn5rKh5pyJ5L2/55So5qih5p2/OiAkMScsXG5cdFx0XHQnY2l0ZS1mb3JtLXJlc2V0JzogJ+mHjeiuvuihqOWNlScsXG5cdFx0XHQnY2l0ZS1sb2FkaW5nJzogJ+i9veWFpeaVsOaNricsXG5cdFx0XHQvLyBTaG93biB3aGlsZSBwYWdldGV4dCBpcyBiZWluZyBkb3dubG9hZGVkIGZyb20gdGhlIEFQSVxuXHRcdFx0J2NpdGUtaW5zZXJ0LWRhdGUnOiAn5o+S5YWl5b2T5YmN5pel5pyfJyxcblx0XHRcdC8vIEFsdC90aXRsZSB0ZXh0IGZvciBcImluc2VydCBkYXRlXCIgaWNvblxuXHRcdFx0J2NpdGUtZXJyLXJlcG9ydC1oZWFkaW5nJzogJ+W8leeUqOmUmeivr+aKpeWRiicsXG5cdFx0XHQvLyBIZWFkaW5nIGZvciBlcnJvciByZXBvcnQgdGFibGVcblx0XHRcdCdjaXRlLWVyci1yZXBvcnQtY2xvc2UnOiAn5YWz6ZetJyxcblx0XHRcdC8vIEFsdC90aXRsZSB0ZXh0IGZvciBcImNsb3NlXCIgaWNvbiBvbiBlcnJvciByZXBvcnRcblx0XHRcdCdjaXRlLWVyci1yZXBvcnQtZW1wdHknOiAn5pyq5om+5Yiw6ZSZ6K+vJyxcblx0XHRcdC8vIE1lc3NhZ2UgZGlzcGxheWVkIGluIHRoZSBlcnJvciByZXBvcnQgbGlzdCBpZiB0aGVyZSBhcmUgbm8gZXJyb3JzXG5cdFx0XHQnY2l0ZS1hdXRvZmlsbC1hbHQnOiAn6Ieq5Yqo5aGr5YWFJyxcblx0XHRcdC8vIEFsdCB0ZXh0IGZvciBhdXRvZmlsbCBidXR0b24gaW1hZ2Vcblx0XHRcdCdjaXRlLXJlZi10b29sdGlwJzogJ+mUmueCueeahOagh+ivhuespu+8iOS9v+ivpeW8leeUqOWPr+S7peaIkOS4uuWGhemDqOmTvuaOpeeahOebruagh++8iScsXG5cdFx0XHQnY2l0ZS1wb3N0c2NyaXB0LXRvb2x0aXAnOiAn5aaC5p6c6K6+5a6a6L+Z5LiA5Y+C5pWw77yM5YiZ6KaG55uW5L2/55So5Y+l54K557uI5q2i5byV5paH55qE6buY6K6k6KGM5Li6Jyxcblx0XHRcdCdjaXRlLWRpYWxvZy13ZWInOiAn572R6aG15byV55SoJyxcblx0XHRcdCdjaXRlLWRpYWxvZy1uZXdzJzogJ+aWsOmXu+W8leeUqCcsXG5cdFx0XHQnY2l0ZS1kaWFsb2ctYm9vayc6ICfkuabnsY3lvJXnlKgnLFxuXHRcdFx0J2NpdGUtZGlhbG9nLWpvdXJuYWwnOiAn5pyf5YiK5byV55SoJyxcblx0XHRcdCdjaXRlLWRpYWxvZy1jb25mZXJlbmNlJzogJ+S8muiuruW8leeUqCcsXG5cdFx0XHQnY2l0ZS1kaWFsb2ctZW5jeWNsb3BlZGlhJzogJ+eZvuenkeWFqOS5puW8leeUqCcsXG5cdFx0XHQnY2l0ZS1hdXRob3ItbGFiZWwnOiAn5L2c6ICFJyxcblx0XHRcdCdjaXRlLXRpdGxlLWxhYmVsJzogJ+agh+mimCcsXG5cdFx0XHQnY2l0ZS11cmwtbGFiZWwnOiAn572R5Z2AJyxcblx0XHRcdCdjaXRlLXdlYnNpdGUtbGFiZWwnOiAn572R56uZ5ZCN56ewJyxcblx0XHRcdCdjaXRlLXdvcmstbGFiZWwnOiAn5oql57q45oiW5p2C5b+XJyxcblx0XHRcdCdjaXRlLWFnZW5jeS1sYWJlbCc6ICfpgJrorq/npL4nLFxuXHRcdFx0J2NpdGUtcHVibGlzaGVyLWxhYmVsJzogJ+WHuueJiOiAhScsXG5cdFx0XHQnY2l0ZS1hY2Nlc3NkYXRlLWxhYmVsJzogJ+iuv+mXruaXpeacnycsXG5cdFx0XHQnY2l0ZS1sYXN0LWxhYmVsJzogJ+WnkycsXG5cdFx0XHQnY2l0ZS1maXJzdC1sYWJlbCc6ICflkI0nLFxuXHRcdFx0J2NpdGUtYXV0aG9ybGluay1sYWJlbCc6ICfkvZzogIXmnaHnm64nLFxuXHRcdFx0J2NpdGUtY29hdXRob3JzLWxhYmVsJzogJ+WFtuS7luS9nOiAhScsXG5cdFx0XHQnY2l0ZS1sb2NhdGlvbi1sYWJlbCc6ICflh7rniYjlnLAnLFxuXHRcdFx0J2NpdGUtcGFnZS1sYWJlbCc6ICfmiYDlnKjpobUnLFxuXHRcdFx0J2NpdGUtcGFnZXMtbGFiZWwnOiAn6aG16IyD5Zu0Jyxcblx0XHRcdCdjaXRlLWF0LWxhYmVsJzogJ+S5puWGhemDqOWIhicsXG5cdFx0XHQnY2l0ZS1sYW5ndWFnZS1sYWJlbCc6ICfor63oqIAnLFxuXHRcdFx0J2NpdGUtZm9ybWF0LWxhYmVsJzogJ+aWh+aho+agvOW8jycsXG5cdFx0XHQnY2l0ZS1kb2ktbGFiZWwnOiAnRE9JJyxcblx0XHRcdCdjaXRlLWRhdGUtbGFiZWwnOiAn5pel5pyfJyxcblx0XHRcdCdjaXRlLW1vbnRoLWxhYmVsJzogJ+aciOS7vScsXG5cdFx0XHQnY2l0ZS15ZWFyLWxhYmVsJzogJ+W5tOS7vScsXG5cdFx0XHQnY2l0ZS1xdW90ZS1sYWJlbCc6ICfmkZjlvZUnLFxuXHRcdFx0J2NpdGUtbmV3c3BhcGVyLWxhYmVsJzogJ+aWsOmXu+WqkuS9kycsXG5cdFx0XHQnY2l0ZS1hdXRob3IyLWxhYmVsJzogJ+esrDLkvZzogIUnLFxuXHRcdFx0J2NpdGUtYXV0aG9yMy1sYWJlbCc6ICfnrKwz5L2c6ICFJyxcblx0XHRcdCdjaXRlLWF1dGhvcjQtbGFiZWwnOiAn56ysNOS9nOiAhScsXG5cdFx0XHQnY2l0ZS1hdXRob3I1LWxhYmVsJzogJ+esrDXkvZzogIUnLFxuXHRcdFx0J2NpdGUtYWdlbmN5JzogJ+mAmuiur+ekvicsXG5cdFx0XHQnY2l0ZS1pc3NuLWxhYmVsJzogJ0lTU04nLFxuXHRcdFx0J2NpdGUtb2NsYy1sYWJlbCc6ICdPQ0xDJyxcblx0XHRcdCdjaXRlLWJpYmNvZGUtbGFiZWwnOiAnQmliY29kZScsXG5cdFx0XHQnY2l0ZS1pc2JuLWxhYmVsJzogJ0lTQk4nLFxuXHRcdFx0J2NpdGUtb3RoZXJzLWxhYmVsJzogJ+ivkeiAhScsXG5cdFx0XHQnY2l0ZS1lZGl0aW9uLWxhYmVsJzogJ+eJiOacrCcsXG5cdFx0XHQnY2l0ZS10cmFucy10aXRsZS1sYWJlbCc6ICfnv7vor5HlkI7moIfpopgnLFxuXHRcdFx0J2NpdGUtcmVmLWxhYmVsJzogJ+mUmueCueagh+ivhuespicsXG5cdFx0XHQnY2l0ZS1wb3N0c2NyaXB0LWxhYmVsJzogJ+e7k+WwvuespicsXG5cdFx0XHQnY2l0ZS1zZXJpZXMtbGFiZWwnOiAn57O75YiXJyxcblx0XHRcdCdjaXRlLXZvbHVtZS1sYWJlbCc6ICfljbcnLFxuXHRcdFx0J2NpdGUtdW5pZmllZC1sYWJlbCc6ICfnu5/kuIDkuablj7cnLFxuXHRcdFx0J2NpdGUtY2hhcHRlci1sYWJlbCc6ICfnq6DoioInLFxuXHRcdFx0J2NpdGUtam91cm5hbC1sYWJlbCc6ICfmnYLlv5cv5pyf5YiKJyxcblx0XHRcdCdjaXRlLWlzc3VlLWxhYmVsJzogJ+acnycsXG5cdFx0XHQnY2l0ZS1wbWlkLWxhYmVsJzogJ1BNSUQnLFxuXHRcdFx0J2NpdGUtZWRpdG9yLWxhYmVsJzogJ+e8lui+kScsXG5cdFx0XHQnY2l0ZS1lZGl0b3IxLWZpcnN0LWxhYmVsJzogJ+e8lui+keWQjScsXG5cdFx0XHQnY2l0ZS1lZGl0b3IxLWxhc3QtbGFiZWwnOiAn57yW6L6R5aeTJyxcblx0XHRcdCdjaXRlLWVkaXRvcjEtbGluay1sYWJlbCc6ICfnvJbovpHmnaHnm64nLFxuXHRcdFx0J2NpdGUtZWRpdG9yLWZpcnN0LWxhYmVsJzogJ+e8lui+keWQjScsXG5cdFx0XHQnY2l0ZS1lZGl0b3ItbGFzdC1sYWJlbCc6ICfnvJbovpHlp5MnLFxuXHRcdFx0J2NpdGUtZWRpdG9yLWxpbmstbGFiZWwnOiAn57yW6L6R5p2h55uuJyxcblx0XHRcdCdjaXRlLXBtYy1sYWJlbCc6ICdQTUMnLFxuXHRcdFx0J2NpdGUtaWQtbGFiZWwnOiAnSUQnLFxuXHRcdFx0J2NpdGUtbGF5c3VtbWFyeS1sYWJlbCc6ICfnroDmmI7mkZjopoEnLFxuXHRcdFx0J2NpdGUtbGF5c291cmNlLWxhYmVsJzogJ+eugOaYjuaRmOimgeadpea6kCcsXG5cdFx0XHQnY2l0ZS1sYXlkYXRlLWxhYmVsJzogJ+eugOaYjuaRmOimgeaXpeacnycsXG5cdFx0XHQnY2l0ZS1jb25mZXJlbmNlLWxhYmVsJzogJ+S8muiuruWQjeensCcsXG5cdFx0XHQnY2l0ZS1jb25mZXJlbmNldXJsLWxhYmVsJzogJ+S8muiurue9keWdgCcsXG5cdFx0XHQnY2l0ZS1ib29rdGl0bGUtbGFiZWwnOiAn6K665paH6ZuGJyxcblx0XHRcdCdjaXRlLWVuY3ljbG9wZWRpYS1sYWJlbCc6ICfnmb7np5HlhajkuablkI0nLFxuXHRcdFx0J2NpdGUtYXV0aG9ybGluay10b29sdGlwJzogJ+iLpeivpeS9nOiAheacieadoeebru+8jOWhq+WGmeadoeebruWQjeensCcsXG5cdFx0XHQnY2l0ZS1hdC10b29sdGlwJzogJ+WGheWuueWcqOadpea6kOS4reeahOS9jee9ru+8iOW9k+aMiemhteeggeW8leeUqOS4jemAguW9k+aXtu+8iScsXG5cdFx0XHQnY2l0ZS1hY2Nlc3NkYXRlLXRvb2x0aXAnOiAn6K6/6Zeu6L+Z5Liq5byV55So5p2l5rqQ5pe255qE5pel5pyfJyxcblx0XHRcdCdjaXRlLWlkLXRvb2x0aXAnOiAn5YW25LuW55qE5paH56ug57yW5Y+3Jyxcblx0XHRcdCdjaXRlLXNhbWVjb250ZW50LWRlc2MnOiAn5qOA5p+l5ZCr5pyJ55u45ZCM5YaF5a6555qE5aSa5Liq5Y+C6ICD5paH54yuJyxcblx0XHRcdCdjaXRlLXNhbWVjb250ZW50LWVycm9yJzogJ+WkmuS4quWPguiAg+aWh+eMruWMheWQq+acieebuOWQjOWGheWuuScsXG5cdFx0XHQnY2l0ZS1yZXBlYXRlZC1kZXNjJzogJ+S9v+eUqOebuOWQjOWQjeWtl+eahOWkmuS4quWPguiAg+aWh+eMricsXG5cdFx0XHQnY2l0ZS1yZXBlYXRlZC1lcnJvcic6ICflpJrkuKrlj4LogIPmlofnjK7kvb/nlKjkuobnm7jlkIzlkI3lrZcnLFxuXHRcdFx0J2NpdGUtdW5kZWZpbmVkLWRlc2MnOiAn5pyq5a6a5LmJ55qE5Y+C6ICD5paH54yuJyxcblx0XHRcdCdjaXRlLXVuZGVmaW5lZC1lcnJvcic6ICfkuIDkuKrlt7Llkb3lkI3nmoTlj4LogIPmlofnjK7lt7Lnu4/kvb/nlKjkvYbmmK/msqHmnInlrprkuYknLFxuXHRcdFx0J2NpdGUtd29yay10b29sdGlwJzogJ+WIiueZu+ivpeS9nOWTgeeahOWHuueJiOeJqeeahOWQjeensOOAguivt+S4jeimgeS9v+eUqOaWnOS9kycsXG5cdFx0XHQnY2l0ZS1uZXdzcGFwZXItdG9vbHRpcCc6ICfliIrnmbvoqbLmlrDogZ7nmoTlh7rniYjnianlkI3np7AnLFxuXHRcdFx0J2NpdGUtc2VyaWVzLXRvb2x0aXAnOiAn5b2T5Lmm57GN5piv5LiA57O75YiX5Ye654mI5ZOB5Lit55qE5YW25Lit5LiA6YOo5Lu95pe25L2/55SoJyxcblx0XHRcdCdjaXRlLXVuaWZpZWQtdG9vbHRpcCc6ICcxOTgw5bm05Luj5LmL5YmN5Lit5Zu95omA5L2/55So55qE5Lmm57GN57yW5Y+3Jyxcblx0XHRcdCdjaXRlLWxheXN1bW1hcnktdG9vbHRpcCc6ICfor6XmlofnjK7nm7jlhbPnmoTmlrDpl7vmiqXpgZPnmoRVUkwnLFxuXHRcdFx0J2NpdGUtbGF5c291cmNlLXRvb2x0aXAnOiAn6K+l5paH54yu55u45YWz55qE5paw6Ze75oql6YGT55qE5Ye65aSEJyxcblx0XHR9KTtcblx0fVxufTtcblxuZXhwb3J0IHtyZWZUb29sYmFyTWVzYWdlc307XG4iLCAiaW1wb3J0IHtJU19XR19FRElUX09SX1NVQk1JVF9BQ1RJT04sIFdHX1BBR0VfQ09OVEVOVF9NT0RFTH0gZnJvbSAnLi9tb2R1bGVzL2NvbnN0YW50JztcbmltcG9ydCB7cmVmVG9vbGJhcjJ9IGZyb20gJy4vbW9kdWxlcy9SZWZUb29sYmFyMi4wJztcbmltcG9ydCB7cmVmVG9vbGJhckJhc2V9IGZyb20gJy4vbW9kdWxlcy9SZWZUb29sYmFyQmFzZSc7XG5pbXBvcnQge3JlZlRvb2xiYXJNZXNhZ2VzfSBmcm9tICcuL21vZHVsZXMvbWVzc2FnZXMnO1xuXG4vKipcbiAqIFJlZlRvb2xiYXJcbiAqXG4gKiBBZGRzIHRvb2xzIGZvciBjaXRpbmcgcmVmZXJlbmNlcyB0byB0aGUgZWRpdCB0b29sYmFyLlxuICogT25lIG9mIHR3byBwb3NzaWJsZSB2ZXJzaW9ucyB3aWxsIGxvYWQgKFJlZnRvb2xiYXIgMS4wIG9yIFJlZnRvb2xiYXIgMS4wKVxuICogZGVwZW5kaW5nIG9uIHRoZSB1c2VyIHByZWZlcmVuY2VzICh0aGUgdXNlYmV0YXRvb2xiYXIgcHJlZmVyZW5jZSkuXG4gKlxuICogQGF1dGhvciBNci5aLW1hbiwgS2FsZGFyaVxuICovXG4oKCk6IHZvaWQgPT4ge1xuXHRpZiAobXcuY29uZmlnLmdldCgnd2dSZWZUb29sYmFySW5zdGFsbGVkJykpIHtcblx0XHRyZXR1cm47XG5cdH0gLy8gU2V0IGd1YXJkXG5cdG13LmNvbmZpZy5zZXQoJ3dnUmVmVG9vbGJhckluc3RhbGxlZCcsIHRydWUpO1xuXG5cdC8vIE9ubHkgZXhlY3V0ZSB3aGVuIGVkaXRpbmcvcHJldmlld2luZyB3aWtpdGV4dCBwYWdlc1xuXHRpZiAoIUlTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTiB8fCBXR19QQUdFX0NPTlRFTlRfTU9ERUwgIT09ICd3aWtpdGV4dCcpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoIW13LnVzZXIub3B0aW9ucy5nZXQoJ3VzZWJldGF0b29sYmFyJykpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dwVGV4dGJveDFbcmVhZG9ubHldJykpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBMb2FkIGxvY2FsIG1lc3NhZ2VzLlxuXHRyZWZUb29sYmFyTWVzYWdlcygpO1xuXHQvLyBMb2FkIG1haW4gZnVuY3Rpb25zXG5cdHJlZlRvb2xiYXJCYXNlKCk7XG5cdHZvaWQgcmVmVG9vbGJhcjIoKTtcbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7O0FBQUE7QUFBQSx3RkFBQUEsU0FBQTtBQUFBO0FBQ0EsUUFBSSxRQUFRLFNBQVUsSUFBSTtBQUN4QixhQUFPLE1BQU0sR0FBRyxTQUFTLFFBQVE7QUFBQSxJQUNuQztBQUdBLElBQUFBLFFBQU87QUFBQSxJQUVMLE1BQU0sT0FBTyxjQUFjLFlBQVksVUFBVSxLQUNqRCxNQUFNLE9BQU8sVUFBVSxZQUFZLE1BQU07QUFBQSxJQUV6QyxNQUFNLE9BQU8sUUFBUSxZQUFZLElBQUksS0FDckMsTUFBTSxPQUFPLFVBQVUsWUFBWSxNQUFNLEtBQ3pDLE1BQU0sT0FBTyxXQUFRLFlBQVksT0FBSTtBQUFBLElBRXBDLDJCQUFZO0FBQUUsYUFBTztBQUFBLElBQU0sRUFBRyxLQUFLLFNBQVMsYUFBYSxFQUFFO0FBQUE7QUFBQTs7O0FDZjlEO0FBQUEsdUZBQUFDLFNBQUE7QUFBQTtBQUNBLElBQUFBLFFBQU8sVUFBVSxTQUFVLE1BQU07QUFDL0IsVUFBSTtBQUNGLGVBQU8sQ0FBQyxDQUFDLEtBQUs7QUFBQSxNQUNoQixTQUFTLE9BQU87QUFDZCxlQUFPO0FBQUEsTUFDVDtBQUFBLElBQ0Y7QUFBQTtB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MEI7TUFDMUIsc0JBQXNCO01BQ3RCLHVCQUF1QjtNQUN2Qix1QkFBdUI7TUFDdkIsd0JBQXdCO01BQ3hCLHFCQUFxQjtNQUNyQiwwQkFBMEI7TUFDMUIsdUJBQXVCO01BQ3ZCLHdCQUF3QjtNQUN4QiwyQkFBMkI7TUFDM0IsMEJBQTBCO0lBQzNCLENBQUM7RUFDRjtBQUNEOztDQ2pRQyxNQUFZO0FBQ1osTUFBSXZYLEdBQUdDLE9BQU9DLElBQUksdUJBQXVCLEdBQUc7QUFDM0M7RUFDRDtBQUNBRixLQUFHQyxPQUFPcVgsSUFBSSx5QkFBeUIsSUFBSTtBQUczQyxNQUFJLENBQUNoWCwrQkFBK0JILDBCQUEwQixZQUFZO0FBQ3pFO0VBQ0Q7QUFFQSxNQUFJLENBQUNILEdBQUd3WCxLQUFLelAsUUFBUTdILElBQUksZ0JBQWdCLEdBQUc7QUFDM0M7RUFDRDtBQUVBLE1BQUlxRixTQUFTa1MsY0FBYyx1QkFBdUIsR0FBRztBQUNwRDtFQUNEO0FBR0FMLG9CQUFrQjtBQUVsQmxELGlCQUFlO0FBQ2YsT0FBSzFQLFlBQVk7QUFDbEIsR0FBRzsiLAogICJuYW1lcyI6IFsibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbCIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAiU3ltYm9sIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbCIsICJkb2N1bWVudCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbCIsICJUeXBlRXJyb3IiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiJCIsICJXR19BQ1RJT04iLCAibXciLCAiY29uZmlnIiwgImdldCIsICJXR19QQUdFX0NPTlRFTlRfTU9ERUwiLCAiV0dfVVNFUl9MQU5HVUFHRSIsICJXR19XSUtJX0lEIiwgIklTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTiIsICJpbmNsdWRlcyIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImFyZ3MiLCAibGVuZ3RoIiwgIm1lc3NhZ2UiLCAicGFyc2UiLCAicGxhaW4iLCAicmVmVG9vbGJhckNvbmZpZyIsICJDaXRlVGVtcGxhdGUiLCAiQ2l0ZUVycm9yQ2hlY2siLCAid2luZG93IiwgIkNpdGVUQiIsICJPcHRpb25zIiwgIm1vbnRocyIsICJtb2RhbCIsICJhdXRvcGFyc2UiLCAiZXhwYW5kdGVtcGxhdGVzIiwgImZpZWxkIiwgImluY3JlbWVudF9ncm91cCIsICJpbmNyZW1lbnRfYnV0dG9uIiwgImF1dG9maWxscHJvcCIsICJhdXRvZmlsbGlkIiwgInRvb2x0aXAiLCAidHlwZSIsICJ0ZXN0bmFtZSIsICJkZXNjIiwgImZ1bmMiLCAicmVmbGlzdCIsICJlcnJvcnMiLCAicmVmczIiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImVsZW1lbnQiLCAidmFsdWUiLCAic2hvcnR0YWciLCAiY29udGVudCIsICJwdXNoIiwgImVyciIsICJlIiwgImYiLCAicmV0IiwgIl9pIiwgIl9lcnJvcnMiLCAiZXJyb3IiLCAibXNnIiwgIl9pdGVyYXRvcjIiLCAiX3N0ZXAyIiwgInJlZm5hbWUiLCAiX2kyIiwgIl9lcnJvcnMyIiwgImxvbmdyZWZzIiwgIl9pMyIsICJfT2JqZWN0JHZhbHVlcyIsICJPYmplY3QiLCAidmFsdWVzIiwgIl9pNCIsICJfZXJyb3JzMyIsICJpbml0IiwgInJlZlRvb2xiYXIyIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAiJGJvZHkiLCAiZ2V0Qm9keSIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNvbmNhdCIsICJEZWZhdWx0T3B0aW9ucyIsICJnZXRPcHRpb24iLCAib3B0IiwgIlVzZXJPcHRpb25zIiwgIl8kJHdpZHRoMiIsICJfJCR3aWR0aDMiLCAiJCIsICJkb2N1bWVudCIsICJmaW5kIiwgInRyaWdnZXIiLCAiJHRhcmdldCIsICJ0ZW1saXN0IiwgInQiLCAiVGVtcGxhdGVzIiwgImhhc093biIsICJfJCR3aWR0aCIsICJ0ZW0iLCAic2Zvcm0iLCAiZXNjU3RyIiwgInNob3J0Zm9ybSIsICJhY3Rpb25vYmoiLCAibW9kdWxlIiwgImRpYWxvZ29iaiIsICJyZXNpemVtZSIsICJ0aXRsZU1zZyIsICJpZCIsICJodG1sIiwgImdldEluaXRpYWwiLCAiZGlhbG9nIiwgIndpZHRoIiwgIk1hdGgiLCAicm91bmQiLCAib3BlbiIsICJnZXRPcGVuVGVtcGxhdGUiLCAiZ2V0Rm9ybSIsICJvbiIsICJwcmV2ZW50RGVmYXVsdCIsICJwcmV2UGFyc2VDbGljayIsICJidXR0b25zIiwgInJlZiIsICJnZXRSZWYiLCAid2lraUVkaXRvciIsICJtb2R1bGVzIiwgInRvb2xiYXIiLCAiZm4iLCAiZG9BY3Rpb24iLCAiZGF0YSIsICJvcHRpb25zIiwgInBvc3QiLCAic2hvd0hpZGVFeHRyYSIsICJ0ZW1wbGF0ZSIsICJkaXYiLCAic2hvdyIsICJ0ZXh0IiwgImhpZGUiLCAicmVzZXRGb3JtIiwgImxhYmVsIiwgInRlbXBsYXRlbmFtZSIsICJhY3Rpb24iLCAicmVmc2VjdGlvbiIsICJzZWN0aW9ucyIsICJjaXRlcyIsICJsYWJlbE1zZyIsICJncm91cHMiLCAidG9vbHMiLCAibGlzdCIsICJuYW1lZHJlZnMiLCAibnJlZnMiLCAiaWNvbiIsICJzZWN0aW9uIiwgImdyb3VwIiwgImVycm9yY2hlY2siLCAiZWNoZWNrIiwgImRlZmF1bHRkaWFsb2dzIiwgImxvYWRSZWZzIiwgImVycm9yY2hlY2tzIiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgIkVycm9yQ2hlY2tzIiwgInZhbCIsICJydW4iLCAiZGlzcGxheUVycm9ycyIsICJnZXROYW1lZFJlZiIsICJvZmYiLCAidXRpbCIsICJhZGRDU1MiLCAibWFpblJlZkxpc3QiLCAicmVmc0xvYWRlZCIsICJpbm5lcm9ubHkiLCAiZm9yaW5zZXJ0IiwgImkiLCAiaiIsICJnIiwgInJlcyIsICJyZWZvYmoiLCAiU3RyaW5nIiwgInRyaW0iLCAiZ2V0UXVvdGVkU3RyaW5nIiwgInJlZmdyb3VwIiwgImluY3JlbWVudGFibGVzIiwgImZpZWxkcyIsICJmaWVsZG5hbWUiLCAiZmllbGRpZCIsICJyZXBsYWNlIiwgInRvU3RyaW5nIiwgImJhc2ljIiwgImV4dHJhIiwgImdldFBhZ2VUZXh0IiwgImxvYWRSZWZzSW50ZXJuYWwiLCAicmVmc3JlZ2V4IiwgImV4ZWMiLCAic2V0dXBFcnJvckNoZWNrIiwgInNldHVwTmFtZWRSZWZzIiwgImNhbGxiYWNrIiwgInBvc3RkYXRhIiwgInRpdGxlIiwgInByb3AiLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAidGhlbiIsICJyZXN0ZXh0IiwgIndpa2l0ZXh0IiwgInJ2cHJvcCIsICJwYWdlaWRzIiwgInJ2ZXhwYW5kdGVtcGxhdGVzIiwgInF1ZXJ5IiwgInBhZ2V0ZXh0IiwgInBhZ2VzIiwgInJldmlzaW9ucyIsICJzYWZlRGVjb2RlVVJJQ29tcG9uZW50IiwgImRlY29kZVVSSUNvbXBvbmVudCIsICJpbml0QXV0b2ZpbGwiLCAiXyQkYXR0ciIsICJlbGVtaWQiLCAiYXR0ciIsICJhdXRvdHlwZSIsICJ1cmwiLCAiZW5jb2RlVVJJQ29tcG9uZW50IiwgImNyZWF0ZUVsZW1lbnQiLCAic2V0QXR0cmlidXRlIiwgImhlYWQiLCAiYXBwZW5kIiwgImF1dG9GaWxsIiwgImNsIiwgImNvYXV0aG9ycyIsICJhdXRob3JzIiwgIl8kJGVxJGF0dHIiLCAiY2xhc3NlcyIsICJlcSIsICJzcGxpdCIsICJwYXR0IiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgImNsYXNzXyIsICJfJCRlcSRhdHRyMiIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJqb2luIiwgImRhdGUiLCAiRFQiLCAiRGF0ZSIsICJ0ZXN0IiwgImZvcm1hdERhdGUiLCAiam91cm5hbCIsICJ2b2x1bWUiLCAiaXNzdWUiLCAiZG9pIiwgInB1Ymxpc2hlciIsICJsb2NhdGlvbiIsICJlZGl0aW9uIiwgImlzYm4iLCAiaXNzbiIsICJsYW5ndWFnZSIsICJjaGFwdGVyIiwgImluY3JlbWVudEZpZWxkcyIsICJfJCRhdHRyMiIsICJjdXJyZW50cm93IiwgInBhcmVudHMiLCAicHJldiIsICJjc3MiLCAiZGV0YWNoIiwgImluY3JlbWVudHMiLCAidHJzIiwgIm1ha2VGb3JtSW5uZXIiLCAicmV2ZXJzZSIsICJfaXRlcmF0b3I2IiwgIl9zdGVwNiIsICJ0ciIsICJhZnRlciIsICJmaWxsQWNjZXNzZGF0ZSIsICJfJCRhdHRyMyIsICJkYXRlc3RyIiwgInVzZWRheSIsICJ1c2Vtb250aCIsICJ6bW9udGgiLCAibW9udGgiLCAiZ2V0VVRDTW9udGgiLCAiemRhdGUiLCAiZ2V0VVRDRGF0ZSIsICJnZXRVVENGdWxsWWVhciIsICJuYW1lcyIsICJzdHVmZiIsICJzZWxlY3QiLCAiYmVmb3JlIiwgInByZXZsYWJlbCIsICJwYXJzZWxhYmVsIiwgImxpbmsiLCAiaHJlZiIsICJtYXJnaW4iLCAiZGlzcGxheSIsICJjb2xvciIsICJuYW1lZFJlZlNlbGVjdENsaWNrIiwgIm5yZWZQYXJzZUNsaWNrIiwgImZvcm0iLCAidWwiLCAiZ2V0Um93IiwgImZpbGxOcmVmUHJldmlldyIsICJwYXJzZWQiLCAiY2hvaWNlIiwgImxhc3RuYW1lZHJlZmNob2ljZSIsICJmaWxsVGVtcGxhdGVQcmV2aWV3IiwgInNldHRpbmciLCAic3EiLCAiZHEiLCAiZml4U3RyIiwgInNsaWNlIiwgInRvVXBwZXJDYXNlIiwgImRpYWxvZ3MiLCAicmVtb3ZlIiwgInRhYmxlIiwgImJvcmRlciIsICJwYWRkaW5nIiwgInRyMSIsICJ0aDEiLCAidGgyIiwgImltIiwgImFkIiwgInRkIiwgInRkMSIsICJ0ZDIiLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgInJlZlRvb2xiYXJCYXNlIiwgIl93aW5kb3ciLCAiY29uc3RydWN0b3IiLCAiYmFzaWNmaWVsZHMiLCAiZXhwYW5kZWRmaWVsZHMiLCAiaW5jcnNldHVwIiwgImF1dG9maWxscyIsICJfaXRlcmF0b3I3IiwgImVudHJpZXMiLCAiX3N0ZXA3IiwgImZpZWxkb2JqIiwgImxhYmVsZmllbGQiLCAic2V0dXAiLCAiaW5jcnZhbCIsICJhdXRvZGF0ZUZpZWxkcyIsICJpbmNydHlwZSIsICJpbnB1dCIsICJ0YWJpbmRleCIsICJzdHlsZSIsICJjbGFzc25hbWUiLCAiYWRkQ2xhc3MiLCAibmVlZHNldHVwIiwgImtleXMiLCAiX2l0ZXJhdG9yOCIsICJfc3RlcDgiLCAiYXV0b2ZpbGwiLCAiaGlkZGVuIiwgIm1haW4iLCAiZm9ybTEiLCAiX2l0ZXJhdG9yOSIsICJfc3RlcDkiLCAiZm9ybTIiLCAiX2l0ZXJhdG9yMTAiLCAiX3N0ZXAxMCIsICJmb3JtMyIsICIkdHIiLCAiJHRkMSIsICIkbGFiZWwxIiwgImlucHV0MSIsICJ0ZDMiLCAibGFiZWwyIiwgInRkNCIsICJpbnB1dDIiLCAiZXh0cmFzIiwgInNwYW4xIiwgInNwYW4yIiwgIm9iaiIsICJyb3ciLCAiY2hlY2siLCAibmFtZSIsICJyZWZUb29sYmFyTWVzYWdlcyIsICJtZXNzYWdlcyIsICJzZXQiLCAiZ2V0VXJsIiwgInVzZXIiLCAicXVlcnlTZWxlY3RvciJdCn0K

})();

/* </nowiki> */

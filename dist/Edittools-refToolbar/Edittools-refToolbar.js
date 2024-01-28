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
    const api = (0, import_ext_gadget.initMwApi)("RefToolbar/2.0");
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mYWlscy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Rlc2NyaXB0b3JzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1jYWxsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NsYXNzb2YtcmF3LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtY2FsbGFibGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nZXQtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXN5bWJvbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RyeS10by1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWNhbGxhYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1Zy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1uYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9tYXRoLXRydW5jLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtYXJyYXkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1zZXQtbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9lcy1ub3QtZXhjZWVkLXNhZmUtaW50ZWdlci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5wdXNoLmpzIiwgInNyYy9FZGl0dG9vbHMtcmVmVG9vbGJhci9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9FZGl0dG9vbHMtcmVmVG9vbGJhci9tb2R1bGVzL1JlZlRvb2xiYXIyLjAuanMiLCAic3JjL0VkaXR0b29scy1yZWZUb29sYmFyL21vZHVsZXMvdXRpbC9nZXRNZXNzYWdlLnRzIiwgInNyYy9FZGl0dG9vbHMtcmVmVG9vbGJhci9tb2R1bGVzL1JlZlRvb2xiYXJDb25maWcuanMiLCAic3JjL0VkaXR0b29scy1yZWZUb29sYmFyL21vZHVsZXMvUmVmVG9vbGJhckJhc2UuanMiLCAic3JjL0VkaXR0b29scy1yZWZUb29sYmFyL21vZHVsZXMvbWVzc2FnZXMudHMiLCAic3JjL0VkaXR0b29scy1yZWZUb29sYmFyL0VkaXR0b29scy1yZWZUb29sYmFyLnRzIl0sCiAgInNvdXJjZVJvb3QiOiAiLi4vR2FkZ2V0cyIsCiAgInNvdXJjZXNDb250ZW50IjogWyIndXNlIHN0cmljdCc7XG52YXIgY2hlY2sgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICYmIGl0Lk1hdGggPT09IE1hdGggJiYgaXQ7XG59O1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxubW9kdWxlLmV4cG9ydHMgPVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZ2xvYmFsLXRoaXMgLS0gc2FmZVxuICBjaGVjayh0eXBlb2YgZ2xvYmFsVGhpcyA9PSAnb2JqZWN0JyAmJiBnbG9iYWxUaGlzKSB8fFxuICBjaGVjayh0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdykgfHxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAtLSBzYWZlXG4gIGNoZWNrKHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYpIHx8XG4gIGNoZWNrKHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsKSB8fFxuICBjaGVjayh0eXBlb2YgdGhpcyA9PSAnb2JqZWN0JyAmJiB0aGlzKSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmMgLS0gZmFsbGJhY2tcbiAgKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pKCkgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBEZXRlY3QgSUU4J3MgaW5jb21wbGV0ZSBkZWZpbmVQcm9wZXJ0eSBpbXBsZW1lbnRhdGlvblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sIDEsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pWzFdICE9PSA3O1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWZ1bmN0aW9uLXByb3RvdHlwZS1iaW5kIC0tIHNhZmVcbiAgdmFyIHRlc3QgPSAoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9KS5iaW5kKCk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gdHlwZW9mIHRlc3QgIT0gJ2Z1bmN0aW9uJyB8fCB0ZXN0Lmhhc093blByb3BlcnR5KCdwcm90b3R5cGUnKTtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgY2FsbCA9IEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9CSU5EID8gY2FsbC5iaW5kKGNhbGwpIDogZnVuY3Rpb24gKCkge1xuICByZXR1cm4gY2FsbC5hcHBseShjYWxsLCBhcmd1bWVudHMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gTmFzaG9ybiB+IEpESzggYnVnXG52YXIgTkFTSE9STl9CVUcgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgJiYgISRwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHsgMTogMiB9LCAxKTtcblxuLy8gYE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGVgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QucHJvdG90eXBlLnByb3BlcnR5aXNlbnVtZXJhYmxlXG5leHBvcnRzLmYgPSBOQVNIT1JOX0JVRyA/IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKFYpIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGhpcywgVik7XG4gIHJldHVybiAhIWRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci5lbnVtZXJhYmxlO1xufSA6ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgY2FsbCA9IEZ1bmN0aW9uUHJvdG90eXBlLmNhbGw7XG52YXIgdW5jdXJyeVRoaXNXaXRoQmluZCA9IE5BVElWRV9CSU5EICYmIEZ1bmN0aW9uUHJvdG90eXBlLmJpbmQuYmluZChjYWxsLCBjYWxsKTtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfQklORCA/IHVuY3VycnlUaGlzV2l0aEJpbmQgOiBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY2FsbC5hcHBseShmbiwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG52YXIgdG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyh7fS50b1N0cmluZyk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBzdHJpbmdTbGljZSh0b1N0cmluZyhpdCksIDgsIC0xKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcbnZhciBzcGxpdCA9IHVuY3VycnlUaGlzKCcnLnNwbGl0KTtcblxuLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3Ncbm1vZHVsZS5leHBvcnRzID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyB0aHJvd3MgYW4gZXJyb3IgaW4gcmhpbm8sIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9yaGluby9pc3N1ZXMvMzQ2XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gISRPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKTtcbn0pID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjbGFzc29mKGl0KSA9PT0gJ1N0cmluZycgPyBzcGxpdChpdCwgJycpIDogJE9iamVjdChpdCk7XG59IDogJE9iamVjdDtcbiIsICIndXNlIHN0cmljdCc7XG4vLyB3ZSBjYW4ndCB1c2UganVzdCBgaXQgPT0gbnVsbGAgc2luY2Ugb2YgYGRvY3VtZW50LmFsbGAgc3BlY2lhbCBjYXNlXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLUlzSFRNTEREQS1pbnRlcm5hbC1zbG90LWFlY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID09PSBudWxsIHx8IGl0ID09PSB1bmRlZmluZWQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYFJlcXVpcmVPYmplY3RDb2VyY2libGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZXF1aXJlb2JqZWN0Y29lcmNpYmxlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXNOdWxsT3JVbmRlZmluZWQoaXQpKSB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJbmRleGVkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoaXQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1Jc0hUTUxEREEtaW50ZXJuYWwtc2xvdFxudmFyIGRvY3VtZW50QWxsID0gdHlwZW9mIGRvY3VtZW50ID09ICdvYmplY3QnICYmIGRvY3VtZW50LmFsbDtcblxuLy8gYElzQ2FsbGFibGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc2NhbGxhYmxlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9uby10eXBlb2YtdW5kZWZpbmVkIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBkb2N1bWVudEFsbCA9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudEFsbCAhPT0gdW5kZWZpbmVkID8gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJyB8fCBhcmd1bWVudCA9PT0gZG9jdW1lbnRBbGw7XG59IDogZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogaXNDYWxsYWJsZShpdCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgYUZ1bmN0aW9uID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBpc0NhbGxhYmxlKGFyZ3VtZW50KSA/IGFyZ3VtZW50IDogdW5kZWZpbmVkO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZXNwYWNlLCBtZXRob2QpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPCAyID8gYUZ1bmN0aW9uKGdsb2JhbFtuYW1lc3BhY2VdKSA6IGdsb2JhbFtuYW1lc3BhY2VdICYmIGdsb2JhbFtuYW1lc3BhY2VdW21ldGhvZF07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB1bmN1cnJ5VGhpcyh7fS5pc1Byb3RvdHlwZU9mKTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBuYXZpZ2F0b3IgIT0gJ3VuZGVmaW5lZCcgJiYgU3RyaW5nKG5hdmlnYXRvci51c2VyQWdlbnQpIHx8ICcnO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50Jyk7XG5cbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgRGVubyA9IGdsb2JhbC5EZW5vO1xudmFyIHZlcnNpb25zID0gcHJvY2VzcyAmJiBwcm9jZXNzLnZlcnNpb25zIHx8IERlbm8gJiYgRGVuby52ZXJzaW9uO1xudmFyIHY4ID0gdmVyc2lvbnMgJiYgdmVyc2lvbnMudjg7XG52YXIgbWF0Y2gsIHZlcnNpb247XG5cbmlmICh2OCkge1xuICBtYXRjaCA9IHY4LnNwbGl0KCcuJyk7XG4gIC8vIGluIG9sZCBDaHJvbWUsIHZlcnNpb25zIG9mIFY4IGlzbid0IFY4ID0gQ2hyb21lIC8gMTBcbiAgLy8gYnV0IHRoZWlyIGNvcnJlY3QgdmVyc2lvbnMgYXJlIG5vdCBpbnRlcmVzdGluZyBmb3IgdXNcbiAgdmVyc2lvbiA9IG1hdGNoWzBdID4gMCAmJiBtYXRjaFswXSA8IDQgPyAxIDogKyhtYXRjaFswXSArIG1hdGNoWzFdKTtcbn1cblxuLy8gQnJvd3NlckZTIE5vZGVKUyBgcHJvY2Vzc2AgcG9seWZpbGwgaW5jb3JyZWN0bHkgc2V0IGAudjhgIHRvIGAwLjBgXG4vLyBzbyBjaGVjayBgdXNlckFnZW50YCBldmVuIGlmIGAudjhgIGV4aXN0cywgYnV0IDBcbmlmICghdmVyc2lvbiAmJiB1c2VyQWdlbnQpIHtcbiAgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2goL0VkZ2VcXC8oXFxkKykvKTtcbiAgaWYgKCFtYXRjaCB8fCBtYXRjaFsxXSA+PSA3NCkge1xuICAgIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9DaHJvbWVcXC8oXFxkKykvKTtcbiAgICBpZiAobWF0Y2gpIHZlcnNpb24gPSArbWF0Y2hbMV07XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2ZXJzaW9uO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLXN5bWJvbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZyAqL1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24nKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcblxudmFyICRTdHJpbmcgPSBnbG9iYWwuU3RyaW5nO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5c3ltYm9scyAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xubW9kdWxlLmV4cG9ydHMgPSAhIU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN5bWJvbCA9IFN5bWJvbCgnc3ltYm9sIGRldGVjdGlvbicpO1xuICAvLyBDaHJvbWUgMzggU3ltYm9sIGhhcyBpbmNvcnJlY3QgdG9TdHJpbmcgY29udmVyc2lvblxuICAvLyBgZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzYCBwb2x5ZmlsbCBzeW1ib2xzIGNvbnZlcnRlZCB0byBvYmplY3QgYXJlIG5vdCBTeW1ib2wgaW5zdGFuY2VzXG4gIC8vIG5iOiBEbyBub3QgY2FsbCBgU3RyaW5nYCBkaXJlY3RseSB0byBhdm9pZCB0aGlzIGJlaW5nIG9wdGltaXplZCBvdXQgdG8gYHN5bWJvbCsnJ2Agd2hpY2ggd2lsbCxcbiAgLy8gb2YgY291cnNlLCBmYWlsLlxuICByZXR1cm4gISRTdHJpbmcoc3ltYm9sKSB8fCAhKE9iamVjdChzeW1ib2wpIGluc3RhbmNlb2YgU3ltYm9sKSB8fFxuICAgIC8vIENocm9tZSAzOC00MCBzeW1ib2xzIGFyZSBub3QgaW5oZXJpdGVkIGZyb20gRE9NIGNvbGxlY3Rpb25zIHByb3RvdHlwZXMgdG8gaW5zdGFuY2VzXG4gICAgIVN5bWJvbC5zaGFtICYmIFY4X1ZFUlNJT04gJiYgVjhfVkVSU0lPTiA8IDQxO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tc3ltYm9sIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zeW1ib2wtY29uc3RydWN0b3ItZGV0ZWN0aW9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX1NZTUJPTFxuICAmJiAhU3ltYm9sLnNoYW1cbiAgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mJyk7XG52YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbm1vZHVsZS5leHBvcnRzID0gVVNFX1NZTUJPTF9BU19VSUQgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyICRTeW1ib2wgPSBnZXRCdWlsdEluKCdTeW1ib2wnKTtcbiAgcmV0dXJuIGlzQ2FsbGFibGUoJFN5bWJvbCkgJiYgaXNQcm90b3R5cGVPZigkU3ltYm9sLnByb3RvdHlwZSwgJE9iamVjdChpdCkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJFN0cmluZyA9IFN0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gJFN0cmluZyhhcmd1bWVudCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuICdPYmplY3QnO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgdHJ5VG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdHJ5LXRvLXN0cmluZycpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYEFzc2VydDogSXNDYWxsYWJsZShhcmd1bWVudCkgaXMgdHJ1ZWBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIGlmIChpc0NhbGxhYmxlKGFyZ3VtZW50KSkgcmV0dXJuIGFyZ3VtZW50O1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcih0cnlUb1N0cmluZyhhcmd1bWVudCkgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkJyk7XG5cbi8vIGBHZXRNZXRob2RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1nZXRtZXRob2Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFYsIFApIHtcbiAgdmFyIGZ1bmMgPSBWW1BdO1xuICByZXR1cm4gaXNOdWxsT3JVbmRlZmluZWQoZnVuYykgPyB1bmRlZmluZWQgOiBhQ2FsbGFibGUoZnVuYyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgT3JkaW5hcnlUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9yZGluYXJ5dG9wcmltaXRpdmVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBwcmVmKSB7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAocHJlZiA9PT0gJ3N0cmluZycgJiYgaXNDYWxsYWJsZShmbiA9IGlucHV0LnRvU3RyaW5nKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKGlzQ2FsbGFibGUoZm4gPSBpbnB1dC52YWx1ZU9mKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHByZWYgIT09ICdzdHJpbmcnICYmIGlzQ2FsbGFibGUoZm4gPSBpbnB1dC50b1N0cmluZykgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHRyeSB7XG4gICAgZGVmaW5lUHJvcGVydHkoZ2xvYmFsLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGdsb2JhbFtrZXldID0gdmFsdWU7XG4gIH0gcmV0dXJuIHZhbHVlO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcblxudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgZGVmaW5lR2xvYmFsUHJvcGVydHkoU0hBUkVELCB7fSk7XG5cbm1vZHVsZS5leHBvcnRzID0gc3RvcmU7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xudmFyIHN0b3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHt9KTtcbn0pKCd2ZXJzaW9ucycsIFtdKS5wdXNoKHtcbiAgdmVyc2lvbjogJzMuMzUuMScsXG4gIG1vZGU6IElTX1BVUkUgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAxNC0yMDI0IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJyxcbiAgbGljZW5zZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2Jsb2IvdjMuMzUuMS9MSUNFTlNFJyxcbiAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMnXG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbi8vIGBUb09iamVjdGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvb2JqZWN0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gJE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcblxudmFyIGhhc093blByb3BlcnR5ID0gdW5jdXJyeVRoaXMoe30uaGFzT3duUHJvcGVydHkpO1xuXG4vLyBgSGFzT3duUHJvcGVydHlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1oYXNvd25wcm9wZXJ0eVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1oYXNvd24gLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuaGFzT3duIHx8IGZ1bmN0aW9uIGhhc093bihpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eSh0b09iamVjdChpdCksIGtleSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxudmFyIGlkID0gMDtcbnZhciBwb3N0Zml4ID0gTWF0aC5yYW5kb20oKTtcbnZhciB0b1N0cmluZyA9IHVuY3VycnlUaGlzKDEuMC50b1N0cmluZyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnICsgKGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXkpICsgJylfJyArIHRvU3RyaW5nKCsraWQgKyBwb3N0Zml4LCAzNik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3ltYm9sLWNvbnN0cnVjdG9yLWRldGVjdGlvbicpO1xudmFyIFVTRV9TWU1CT0xfQVNfVUlEID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkJyk7XG5cbnZhciBTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyIFdlbGxLbm93blN5bWJvbHNTdG9yZSA9IHNoYXJlZCgnd2tzJyk7XG52YXIgY3JlYXRlV2VsbEtub3duU3ltYm9sID0gVVNFX1NZTUJPTF9BU19VSUQgPyBTeW1ib2xbJ2ZvciddIHx8IFN5bWJvbCA6IFN5bWJvbCAmJiBTeW1ib2wud2l0aG91dFNldHRlciB8fCB1aWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgaWYgKCFoYXNPd24oV2VsbEtub3duU3ltYm9sc1N0b3JlLCBuYW1lKSkge1xuICAgIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXSA9IE5BVElWRV9TWU1CT0wgJiYgaGFzT3duKFN5bWJvbCwgbmFtZSlcbiAgICAgID8gU3ltYm9sW25hbWVdXG4gICAgICA6IGNyZWF0ZVdlbGxLbm93blN5bWJvbCgnU3ltYm9sLicgKyBuYW1lKTtcbiAgfSByZXR1cm4gV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciBvcmRpbmFyeVRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZScpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbnZhciBUT19QUklNSVRJVkUgPSB3ZWxsS25vd25TeW1ib2woJ3RvUHJpbWl0aXZlJyk7XG5cbi8vIGBUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJpbWl0aXZlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnB1dCwgcHJlZikge1xuICBpZiAoIWlzT2JqZWN0KGlucHV0KSB8fCBpc1N5bWJvbChpbnB1dCkpIHJldHVybiBpbnB1dDtcbiAgdmFyIGV4b3RpY1RvUHJpbSA9IGdldE1ldGhvZChpbnB1dCwgVE9fUFJJTUlUSVZFKTtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKGV4b3RpY1RvUHJpbSkge1xuICAgIGlmIChwcmVmID09PSB1bmRlZmluZWQpIHByZWYgPSAnZGVmYXVsdCc7XG4gICAgcmVzdWx0ID0gY2FsbChleG90aWNUb1ByaW0sIGlucHV0LCBwcmVmKTtcbiAgICBpZiAoIWlzT2JqZWN0KHJlc3VsdCkgfHwgaXNTeW1ib2wocmVzdWx0KSkgcmV0dXJuIHJlc3VsdDtcbiAgICB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbiAgfVxuICBpZiAocHJlZiA9PT0gdW5kZWZpbmVkKSBwcmVmID0gJ251bWJlcic7XG4gIHJldHVybiBvcmRpbmFyeVRvUHJpbWl0aXZlKGlucHV0LCBwcmVmKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xudmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXN5bWJvbCcpO1xuXG4vLyBgVG9Qcm9wZXJ0eUtleWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJvcGVydHlrZXlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBrZXkgPSB0b1ByaW1pdGl2ZShhcmd1bWVudCwgJ3N0cmluZycpO1xuICByZXR1cm4gaXNTeW1ib2woa2V5KSA/IGtleSA6IGtleSArICcnO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgZG9jdW1lbnQgPSBnbG9iYWwuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBFWElTVFMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBFWElTVFMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcblxuLy8gVGhhbmtzIHRvIElFOCBmb3IgaXRzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3JlYXRlRWxlbWVudCgnZGl2JyksICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfVxuICB9KS5hICE9PSA3O1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0luZGV4ZWRPYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhc093bihPLCBQKSkgcmV0dXJuIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcighY2FsbChwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZS5mLCBPLCBQKSwgT1tQXSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbi8vIFY4IH4gQ2hyb21lIDM2LVxuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzMzNFxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0sICdwcm90b3R5cGUnLCB7XG4gICAgdmFsdWU6IDQyLFxuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KS5wcm90b3R5cGUgIT09IDQyO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgJFN0cmluZyA9IFN0cmluZztcbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgQXNzZXJ0OiBUeXBlKGFyZ3VtZW50KSBpcyBPYmplY3RgXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoaXNPYmplY3QoYXJndW1lbnQpKSByZXR1cm4gYXJndW1lbnQ7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKCRTdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgYW4gb2JqZWN0Jyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG52YXIgVjhfUFJPVE9UWVBFX0RFRklORV9CVUcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdjgtcHJvdG90eXBlLWRlZmluZS1idWcnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleScpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBFTlVNRVJBQkxFID0gJ2VudW1lcmFibGUnO1xudmFyIENPTkZJR1VSQUJMRSA9ICdjb25maWd1cmFibGUnO1xudmFyIFdSSVRBQkxFID0gJ3dyaXRhYmxlJztcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0eWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0eVxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgPyBWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA/IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKHR5cGVvZiBPID09PSAnZnVuY3Rpb24nICYmIFAgPT09ICdwcm90b3R5cGUnICYmICd2YWx1ZScgaW4gQXR0cmlidXRlcyAmJiBXUklUQUJMRSBpbiBBdHRyaWJ1dGVzICYmICFBdHRyaWJ1dGVzW1dSSVRBQkxFXSkge1xuICAgIHZhciBjdXJyZW50ID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKTtcbiAgICBpZiAoY3VycmVudCAmJiBjdXJyZW50W1dSSVRBQkxFXSkge1xuICAgICAgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gICAgICBBdHRyaWJ1dGVzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IENPTkZJR1VSQUJMRSBpbiBBdHRyaWJ1dGVzID8gQXR0cmlidXRlc1tDT05GSUdVUkFCTEVdIDogY3VycmVudFtDT05GSUdVUkFCTEVdLFxuICAgICAgICBlbnVtZXJhYmxlOiBFTlVNRVJBQkxFIGluIEF0dHJpYnV0ZXMgPyBBdHRyaWJ1dGVzW0VOVU1FUkFCTEVdIDogY3VycmVudFtFTlVNRVJBQkxFXSxcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlXG4gICAgICB9O1xuICAgIH1cbiAgfSByZXR1cm4gJGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xufSA6ICRkZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiAkZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIGtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0RGVzY3JpcHRvciA9IERFU0NSSVBUT1JTICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbnZhciBFWElTVFMgPSBoYXNPd24oRnVuY3Rpb25Qcm90b3R5cGUsICduYW1lJyk7XG4vLyBhZGRpdGlvbmFsIHByb3RlY3Rpb24gZnJvbSBtaW5pZmllZCAvIG1hbmdsZWQgLyBkcm9wcGVkIGZ1bmN0aW9uIG5hbWVzXG52YXIgUFJPUEVSID0gRVhJU1RTICYmIChmdW5jdGlvbiBzb21ldGhpbmcoKSB7IC8qIGVtcHR5ICovIH0pLm5hbWUgPT09ICdzb21ldGhpbmcnO1xudmFyIENPTkZJR1VSQUJMRSA9IEVYSVNUUyAmJiAoIURFU0NSSVBUT1JTIHx8IChERVNDUklQVE9SUyAmJiBnZXREZXNjcmlwdG9yKEZ1bmN0aW9uUHJvdG90eXBlLCAnbmFtZScpLmNvbmZpZ3VyYWJsZSkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgRVhJU1RTOiBFWElTVFMsXG4gIFBST1BFUjogUFJPUEVSLFxuICBDT05GSUdVUkFCTEU6IENPTkZJR1VSQUJMRVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHN0b3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xuXG52YXIgZnVuY3Rpb25Ub1N0cmluZyA9IHVuY3VycnlUaGlzKEZ1bmN0aW9uLnRvU3RyaW5nKTtcblxuLy8gdGhpcyBoZWxwZXIgYnJva2VuIGluIGBjb3JlLWpzQDMuNC4xLTMuNC40YCwgc28gd2UgY2FuJ3QgdXNlIGBzaGFyZWRgIGhlbHBlclxuaWYgKCFpc0NhbGxhYmxlKHN0b3JlLmluc3BlY3RTb3VyY2UpKSB7XG4gIHN0b3JlLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb25Ub1N0cmluZyhpdCk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RvcmUuaW5zcGVjdFNvdXJjZTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIFdlYWtNYXAgPSBnbG9iYWwuV2Vha01hcDtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0NhbGxhYmxlKFdlYWtNYXApICYmIC9uYXRpdmUgY29kZS8udGVzdChTdHJpbmcoV2Vha01hcCkpO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xuXG52YXIga2V5cyA9IHNoYXJlZCgna2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIGtleXNba2V5XSB8fCAoa2V5c1trZXldID0gdWlkKGtleSkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfV0VBS19NQVAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2Vhay1tYXAtYmFzaWMtZGV0ZWN0aW9uJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcbnZhciBzaGFyZWRLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLWtleScpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcblxudmFyIE9CSkVDVF9BTFJFQURZX0lOSVRJQUxJWkVEID0gJ09iamVjdCBhbHJlYWR5IGluaXRpYWxpemVkJztcbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xudmFyIFdlYWtNYXAgPSBnbG9iYWwuV2Vha01hcDtcbnZhciBzZXQsIGdldCwgaGFzO1xuXG52YXIgZW5mb3JjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaGFzKGl0KSA/IGdldChpdCkgOiBzZXQoaXQsIHt9KTtcbn07XG5cbnZhciBnZXR0ZXJGb3IgPSBmdW5jdGlvbiAoVFlQRSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGl0KSB7XG4gICAgdmFyIHN0YXRlO1xuICAgIGlmICghaXNPYmplY3QoaXQpIHx8IChzdGF0ZSA9IGdldChpdCkpLnR5cGUgIT09IFRZUEUpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0luY29tcGF0aWJsZSByZWNlaXZlciwgJyArIFRZUEUgKyAnIHJlcXVpcmVkJyk7XG4gICAgfSByZXR1cm4gc3RhdGU7XG4gIH07XG59O1xuXG5pZiAoTkFUSVZFX1dFQUtfTUFQIHx8IHNoYXJlZC5zdGF0ZSkge1xuICB2YXIgc3RvcmUgPSBzaGFyZWQuc3RhdGUgfHwgKHNoYXJlZC5zdGF0ZSA9IG5ldyBXZWFrTWFwKCkpO1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1zZWxmLWFzc2lnbiAtLSBwcm90b3R5cGUgbWV0aG9kcyBwcm90ZWN0aW9uICovXG4gIHN0b3JlLmdldCA9IHN0b3JlLmdldDtcbiAgc3RvcmUuaGFzID0gc3RvcmUuaGFzO1xuICBzdG9yZS5zZXQgPSBzdG9yZS5zZXQ7XG4gIC8qIGVzbGludC1lbmFibGUgbm8tc2VsZi1hc3NpZ24gLS0gcHJvdG90eXBlIG1ldGhvZHMgcHJvdGVjdGlvbiAqL1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgaWYgKHN0b3JlLmhhcyhpdCkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIHN0b3JlLnNldChpdCwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHN0b3JlLmdldChpdCkgfHwge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBzdG9yZS5oYXMoaXQpO1xuICB9O1xufSBlbHNlIHtcbiAgdmFyIFNUQVRFID0gc2hhcmVkS2V5KCdzdGF0ZScpO1xuICBoaWRkZW5LZXlzW1NUQVRFXSA9IHRydWU7XG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICBpZiAoaGFzT3duKGl0LCBTVEFURSkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShpdCwgU1RBVEUsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBoYXNPd24oaXQsIFNUQVRFKSA/IGl0W1NUQVRFXSA6IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaGFzT3duKGl0LCBTVEFURSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldCxcbiAgZ2V0OiBnZXQsXG4gIGhhczogaGFzLFxuICBlbmZvcmNlOiBlbmZvcmNlLFxuICBnZXR0ZXJGb3I6IGdldHRlckZvclxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIENPTkZJR1VSQUJMRV9GVU5DVElPTl9OQU1FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLW5hbWUnKS5DT05GSUdVUkFCTEU7XG52YXIgaW5zcGVjdFNvdXJjZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnNwZWN0LXNvdXJjZScpO1xudmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUnKTtcblxudmFyIGVuZm9yY2VJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5lbmZvcmNlO1xudmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldDtcbnZhciAkU3RyaW5nID0gU3RyaW5nO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG52YXIgcmVwbGFjZSA9IHVuY3VycnlUaGlzKCcnLnJlcGxhY2UpO1xudmFyIGpvaW4gPSB1bmN1cnJ5VGhpcyhbXS5qb2luKTtcblxudmFyIENPTkZJR1VSQUJMRV9MRU5HVEggPSBERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHkoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9LCAnbGVuZ3RoJywgeyB2YWx1ZTogOCB9KS5sZW5ndGggIT09IDg7XG59KTtcblxudmFyIFRFTVBMQVRFID0gU3RyaW5nKFN0cmluZykuc3BsaXQoJ1N0cmluZycpO1xuXG52YXIgbWFrZUJ1aWx0SW4gPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSwgbmFtZSwgb3B0aW9ucykge1xuICBpZiAoc3RyaW5nU2xpY2UoJFN0cmluZyhuYW1lKSwgMCwgNykgPT09ICdTeW1ib2woJykge1xuICAgIG5hbWUgPSAnWycgKyByZXBsYWNlKCRTdHJpbmcobmFtZSksIC9eU3ltYm9sXFwoKFteKV0qKVxcKS4qJC8sICckMScpICsgJ10nO1xuICB9XG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZ2V0dGVyKSBuYW1lID0gJ2dldCAnICsgbmFtZTtcbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5zZXR0ZXIpIG5hbWUgPSAnc2V0ICcgKyBuYW1lO1xuICBpZiAoIWhhc093bih2YWx1ZSwgJ25hbWUnKSB8fCAoQ09ORklHVVJBQkxFX0ZVTkNUSU9OX05BTUUgJiYgdmFsdWUubmFtZSAhPT0gbmFtZSkpIHtcbiAgICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5KHZhbHVlLCAnbmFtZScsIHsgdmFsdWU6IG5hbWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KTtcbiAgICBlbHNlIHZhbHVlLm5hbWUgPSBuYW1lO1xuICB9XG4gIGlmIChDT05GSUdVUkFCTEVfTEVOR1RIICYmIG9wdGlvbnMgJiYgaGFzT3duKG9wdGlvbnMsICdhcml0eScpICYmIHZhbHVlLmxlbmd0aCAhPT0gb3B0aW9ucy5hcml0eSkge1xuICAgIGRlZmluZVByb3BlcnR5KHZhbHVlLCAnbGVuZ3RoJywgeyB2YWx1ZTogb3B0aW9ucy5hcml0eSB9KTtcbiAgfVxuICB0cnkge1xuICAgIGlmIChvcHRpb25zICYmIGhhc093bihvcHRpb25zLCAnY29uc3RydWN0b3InKSAmJiBvcHRpb25zLmNvbnN0cnVjdG9yKSB7XG4gICAgICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5KHZhbHVlLCAncHJvdG90eXBlJywgeyB3cml0YWJsZTogZmFsc2UgfSk7XG4gICAgLy8gaW4gVjggfiBDaHJvbWUgNTMsIHByb3RvdHlwZXMgb2Ygc29tZSBtZXRob2RzLCBsaWtlIGBBcnJheS5wcm90b3R5cGUudmFsdWVzYCwgYXJlIG5vbi13cml0YWJsZVxuICAgIH0gZWxzZSBpZiAodmFsdWUucHJvdG90eXBlKSB2YWx1ZS5wcm90b3R5cGUgPSB1bmRlZmluZWQ7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgdmFyIHN0YXRlID0gZW5mb3JjZUludGVybmFsU3RhdGUodmFsdWUpO1xuICBpZiAoIWhhc093bihzdGF0ZSwgJ3NvdXJjZScpKSB7XG4gICAgc3RhdGUuc291cmNlID0gam9pbihURU1QTEFURSwgdHlwZW9mIG5hbWUgPT0gJ3N0cmluZycgPyBuYW1lIDogJycpO1xuICB9IHJldHVybiB2YWx1ZTtcbn07XG5cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWV4dGVuZC1uYXRpdmUgLS0gcmVxdWlyZWRcbkZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZyA9IG1ha2VCdWlsdEluKGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gaXNDYWxsYWJsZSh0aGlzKSAmJiBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpLnNvdXJjZSB8fCBpbnNwZWN0U291cmNlKHRoaXMpO1xufSwgJ3RvU3RyaW5nJyk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgbWFrZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWFrZS1idWlsdC1pbicpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywga2V5LCB2YWx1ZSwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcbiAgdmFyIHNpbXBsZSA9IG9wdGlvbnMuZW51bWVyYWJsZTtcbiAgdmFyIG5hbWUgPSBvcHRpb25zLm5hbWUgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubmFtZSA6IGtleTtcbiAgaWYgKGlzQ2FsbGFibGUodmFsdWUpKSBtYWtlQnVpbHRJbih2YWx1ZSwgbmFtZSwgb3B0aW9ucyk7XG4gIGlmIChvcHRpb25zLmdsb2JhbCkge1xuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2UgZGVmaW5lR2xvYmFsUHJvcGVydHkoa2V5LCB2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghb3B0aW9ucy51bnNhZmUpIGRlbGV0ZSBPW2tleV07XG4gICAgICBlbHNlIGlmIChPW2tleV0pIHNpbXBsZSA9IHRydWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2UgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihPLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiAhb3B0aW9ucy5ub25Db25maWd1cmFibGUsXG4gICAgICB3cml0YWJsZTogIW9wdGlvbnMubm9uV3JpdGFibGVcbiAgICB9KTtcbiAgfSByZXR1cm4gTztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuXG4vLyBgTWF0aC50cnVuY2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW1hdGgudHJ1bmNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1tYXRoLXRydW5jIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gTWF0aC50cnVuYyB8fCBmdW5jdGlvbiB0cnVuYyh4KSB7XG4gIHZhciBuID0gK3g7XG4gIHJldHVybiAobiA+IDAgPyBmbG9vciA6IGNlaWwpKG4pO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdHJ1bmMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWF0aC10cnVuYycpO1xuXG4vLyBgVG9JbnRlZ2VyT3JJbmZpbml0eWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvaW50ZWdlcm9yaW5maW5pdHlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBudW1iZXIgPSArYXJndW1lbnQ7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gIHJldHVybiBudW1iZXIgIT09IG51bWJlciB8fCBudW1iZXIgPT09IDAgPyAwIDogdHJ1bmMobnVtYmVyKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xuXG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5cbi8vIEhlbHBlciBmb3IgYSBwb3B1bGFyIHJlcGVhdGluZyBjYXNlIG9mIHRoZSBzcGVjOlxuLy8gTGV0IGludGVnZXIgYmUgPyBUb0ludGVnZXIoaW5kZXgpLlxuLy8gSWYgaW50ZWdlciA8IDAsIGxldCByZXN1bHQgYmUgbWF4KChsZW5ndGggKyBpbnRlZ2VyKSwgMCk7IGVsc2UgbGV0IHJlc3VsdCBiZSBtaW4oaW50ZWdlciwgbGVuZ3RoKS5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgdmFyIGludGVnZXIgPSB0b0ludGVnZXJPckluZmluaXR5KGluZGV4KTtcbiAgcmV0dXJuIGludGVnZXIgPCAwID8gbWF4KGludGVnZXIgKyBsZW5ndGgsIDApIDogbWluKGludGVnZXIsIGxlbmd0aCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHknKTtcblxudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBgVG9MZW5ndGhgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b2xlbmd0aFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIGxlbiA9IHRvSW50ZWdlck9ySW5maW5pdHkoYXJndW1lbnQpO1xuICByZXR1cm4gbGVuID4gMCA/IG1pbihsZW4sIDB4MUZGRkZGRkZGRkZGRkYpIDogMDsgLy8gMiAqKiA1MyAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG5cbi8vIGBMZW5ndGhPZkFycmF5TGlrZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWxlbmd0aG9mYXJyYXlsaWtlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHRvTGVuZ3RoKG9iai5sZW5ndGgpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS57IGluZGV4T2YsIGluY2x1ZGVzIH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gbGVuZ3RoT2ZBcnJheUxpa2UoTyk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9PSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICAgICAgaWYgKHZhbHVlICE9PSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgaWYgKChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSAmJiBPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcbiAgaW5jbHVkZXM6IGNyZWF0ZU1ldGhvZCh0cnVlKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5pbmRleE9mYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5kZXhvZlxuICBpbmRleE9mOiBjcmVhdGVNZXRob2QoZmFsc2UpXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIGluZGV4T2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMnKS5pbmRleE9mO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcblxudmFyIHB1c2ggPSB1bmN1cnJ5VGhpcyhbXS5wdXNoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgIWhhc093bihoaWRkZW5LZXlzLCBrZXkpICYmIGhhc093bihPLCBrZXkpICYmIHB1c2gocmVzdWx0LCBrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzT3duKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHB1c2gocmVzdWx0LCBrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIElFOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSBbXG4gICdjb25zdHJ1Y3RvcicsXG4gICdoYXNPd25Qcm9wZXJ0eScsXG4gICdpc1Byb3RvdHlwZU9mJyxcbiAgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJyxcbiAgJ3RvTG9jYWxlU3RyaW5nJyxcbiAgJ3RvU3RyaW5nJyxcbiAgJ3ZhbHVlT2YnXG5dO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpbnRlcm5hbE9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG5cbnZhciBoaWRkZW5LZXlzID0gZW51bUJ1Z0tleXMuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eW5hbWVzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5bmFtZXMgLS0gc2FmZVxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHJldHVybiBpbnRlcm5hbE9iamVjdEtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlzeW1ib2xzIC0tIHNhZmVcbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcycpO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG5cbnZhciBjb25jYXQgPSB1bmN1cnJ5VGhpcyhbXS5jb25jYXQpO1xuXG4vLyBhbGwgb2JqZWN0IGtleXMsIGluY2x1ZGVzIG5vbi1lbnVtZXJhYmxlIGFuZCBzeW1ib2xzXG5tb2R1bGUuZXhwb3J0cyA9IGdldEJ1aWx0SW4oJ1JlZmxlY3QnLCAnb3duS2V5cycpIHx8IGZ1bmN0aW9uIG93bktleXMoaXQpIHtcbiAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlLmYoYW5PYmplY3QoaXQpKTtcbiAgdmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZS5mO1xuICByZXR1cm4gZ2V0T3duUHJvcGVydHlTeW1ib2xzID8gY29uY2F0KGtleXMsIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkpIDoga2V5cztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgb3duS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vd24ta2V5cycpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSwgZXhjZXB0aW9ucykge1xuICB2YXIga2V5cyA9IG93bktleXMoc291cmNlKTtcbiAgdmFyIGRlZmluZVByb3BlcnR5ID0gZGVmaW5lUHJvcGVydHlNb2R1bGUuZjtcbiAgdmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZS5mO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICBpZiAoIWhhc093bih0YXJnZXQsIGtleSkgJiYgIShleGNlcHRpb25zICYmIGhhc093bihleGNlcHRpb25zLCBrZXkpKSkge1xuICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgIH1cbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbnZhciByZXBsYWNlbWVudCA9IC8jfFxcLnByb3RvdHlwZVxcLi87XG5cbnZhciBpc0ZvcmNlZCA9IGZ1bmN0aW9uIChmZWF0dXJlLCBkZXRlY3Rpb24pIHtcbiAgdmFyIHZhbHVlID0gZGF0YVtub3JtYWxpemUoZmVhdHVyZSldO1xuICByZXR1cm4gdmFsdWUgPT09IFBPTFlGSUxMID8gdHJ1ZVxuICAgIDogdmFsdWUgPT09IE5BVElWRSA/IGZhbHNlXG4gICAgOiBpc0NhbGxhYmxlKGRldGVjdGlvbikgPyBmYWlscyhkZXRlY3Rpb24pXG4gICAgOiAhIWRldGVjdGlvbjtcbn07XG5cbnZhciBub3JtYWxpemUgPSBpc0ZvcmNlZC5ub3JtYWxpemUgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gIHJldHVybiBTdHJpbmcoc3RyaW5nKS5yZXBsYWNlKHJlcGxhY2VtZW50LCAnLicpLnRvTG93ZXJDYXNlKCk7XG59O1xuXG52YXIgZGF0YSA9IGlzRm9yY2VkLmRhdGEgPSB7fTtcbnZhciBOQVRJVkUgPSBpc0ZvcmNlZC5OQVRJVkUgPSAnTic7XG52YXIgUE9MWUZJTEwgPSBpc0ZvcmNlZC5QT0xZRklMTCA9ICdQJztcblxubW9kdWxlLmV4cG9ydHMgPSBpc0ZvcmNlZDtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJykuZjtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgZGVmaW5lQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4nKTtcbnZhciBkZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5Jyk7XG52YXIgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jb3B5LWNvbnN0cnVjdG9yLXByb3BlcnRpZXMnKTtcbnZhciBpc0ZvcmNlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1mb3JjZWQnKTtcblxuLypcbiAgb3B0aW9ucy50YXJnZXQgICAgICAgICAtIG5hbWUgb2YgdGhlIHRhcmdldCBvYmplY3RcbiAgb3B0aW9ucy5nbG9iYWwgICAgICAgICAtIHRhcmdldCBpcyB0aGUgZ2xvYmFsIG9iamVjdFxuICBvcHRpb25zLnN0YXQgICAgICAgICAgIC0gZXhwb3J0IGFzIHN0YXRpYyBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnByb3RvICAgICAgICAgIC0gZXhwb3J0IGFzIHByb3RvdHlwZSBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnJlYWwgICAgICAgICAgIC0gcmVhbCBwcm90b3R5cGUgbWV0aG9kIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy5mb3JjZWQgICAgICAgICAtIGV4cG9ydCBldmVuIGlmIHRoZSBuYXRpdmUgZmVhdHVyZSBpcyBhdmFpbGFibGVcbiAgb3B0aW9ucy5iaW5kICAgICAgICAgICAtIGJpbmQgbWV0aG9kcyB0byB0aGUgdGFyZ2V0LCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMud3JhcCAgICAgICAgICAgLSB3cmFwIGNvbnN0cnVjdG9ycyB0byBwcmV2ZW50aW5nIGdsb2JhbCBwb2xsdXRpb24sIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy51bnNhZmUgICAgICAgICAtIHVzZSB0aGUgc2ltcGxlIGFzc2lnbm1lbnQgb2YgcHJvcGVydHkgaW5zdGVhZCBvZiBkZWxldGUgKyBkZWZpbmVQcm9wZXJ0eVxuICBvcHRpb25zLnNoYW0gICAgICAgICAgIC0gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuICBvcHRpb25zLmVudW1lcmFibGUgICAgIC0gZXhwb3J0IGFzIGVudW1lcmFibGUgcHJvcGVydHlcbiAgb3B0aW9ucy5kb250Q2FsbEdldFNldCAtIHByZXZlbnQgY2FsbGluZyBhIGdldHRlciBvbiB0YXJnZXRcbiAgb3B0aW9ucy5uYW1lICAgICAgICAgICAtIHRoZSAubmFtZSBvZiB0aGUgZnVuY3Rpb24gaWYgaXQgZG9lcyBub3QgbWF0Y2ggdGhlIGtleVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9wdGlvbnMsIHNvdXJjZSkge1xuICB2YXIgVEFSR0VUID0gb3B0aW9ucy50YXJnZXQ7XG4gIHZhciBHTE9CQUwgPSBvcHRpb25zLmdsb2JhbDtcbiAgdmFyIFNUQVRJQyA9IG9wdGlvbnMuc3RhdDtcbiAgdmFyIEZPUkNFRCwgdGFyZ2V0LCBrZXksIHRhcmdldFByb3BlcnR5LCBzb3VyY2VQcm9wZXJ0eSwgZGVzY3JpcHRvcjtcbiAgaWYgKEdMT0JBTCkge1xuICAgIHRhcmdldCA9IGdsb2JhbDtcbiAgfSBlbHNlIGlmIChTVEFUSUMpIHtcbiAgICB0YXJnZXQgPSBnbG9iYWxbVEFSR0VUXSB8fCBkZWZpbmVHbG9iYWxQcm9wZXJ0eShUQVJHRVQsIHt9KTtcbiAgfSBlbHNlIHtcbiAgICB0YXJnZXQgPSBnbG9iYWxbVEFSR0VUXSAmJiBnbG9iYWxbVEFSR0VUXS5wcm90b3R5cGU7XG4gIH1cbiAgaWYgKHRhcmdldCkgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgc291cmNlUHJvcGVydHkgPSBzb3VyY2Vba2V5XTtcbiAgICBpZiAob3B0aW9ucy5kb250Q2FsbEdldFNldCkge1xuICAgICAgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSk7XG4gICAgICB0YXJnZXRQcm9wZXJ0eSA9IGRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci52YWx1ZTtcbiAgICB9IGVsc2UgdGFyZ2V0UHJvcGVydHkgPSB0YXJnZXRba2V5XTtcbiAgICBGT1JDRUQgPSBpc0ZvcmNlZChHTE9CQUwgPyBrZXkgOiBUQVJHRVQgKyAoU1RBVElDID8gJy4nIDogJyMnKSArIGtleSwgb3B0aW9ucy5mb3JjZWQpO1xuICAgIC8vIGNvbnRhaW5lZCBpbiB0YXJnZXRcbiAgICBpZiAoIUZPUkNFRCAmJiB0YXJnZXRQcm9wZXJ0eSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodHlwZW9mIHNvdXJjZVByb3BlcnR5ID09IHR5cGVvZiB0YXJnZXRQcm9wZXJ0eSkgY29udGludWU7XG4gICAgICBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzKHNvdXJjZVByb3BlcnR5LCB0YXJnZXRQcm9wZXJ0eSk7XG4gICAgfVxuICAgIC8vIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgICBpZiAob3B0aW9ucy5zaGFtIHx8ICh0YXJnZXRQcm9wZXJ0eSAmJiB0YXJnZXRQcm9wZXJ0eS5zaGFtKSkge1xuICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KHNvdXJjZVByb3BlcnR5LCAnc2hhbScsIHRydWUpO1xuICAgIH1cbiAgICBkZWZpbmVCdWlsdEluKHRhcmdldCwga2V5LCBzb3VyY2VQcm9wZXJ0eSwgb3B0aW9ucyk7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcblxuLy8gYElzQXJyYXlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc2FycmF5XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktaXNhcnJheSAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmd1bWVudCkge1xuICByZXR1cm4gY2xhc3NvZihhcmd1bWVudCkgPT09ICdBcnJheSc7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gU2FmYXJpIDwgMTMgZG9lcyBub3QgdGhyb3cgYW4gZXJyb3IgaW4gdGhpcyBjYXNlXG52YXIgU0lMRU5UX09OX05PTl9XUklUQUJMRV9MRU5HVEhfU0VUID0gREVTQ1JJUFRPUlMgJiYgIWZ1bmN0aW9uICgpIHtcbiAgLy8gbWFrZXMgbm8gc2Vuc2Ugd2l0aG91dCBwcm9wZXIgc3RyaWN0IG1vZGUgc3VwcG9ydFxuICBpZiAodGhpcyAhPT0gdW5kZWZpbmVkKSByZXR1cm4gdHJ1ZTtcbiAgdHJ5IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoW10sICdsZW5ndGgnLCB7IHdyaXRhYmxlOiBmYWxzZSB9KS5sZW5ndGggPSAxO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBlcnJvciBpbnN0YW5jZW9mIFR5cGVFcnJvcjtcbiAgfVxufSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNJTEVOVF9PTl9OT05fV1JJVEFCTEVfTEVOR1RIX1NFVCA/IGZ1bmN0aW9uIChPLCBsZW5ndGgpIHtcbiAgaWYgKGlzQXJyYXkoTykgJiYgIWdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCAnbGVuZ3RoJykud3JpdGFibGUpIHtcbiAgICB0aHJvdyBuZXcgJFR5cGVFcnJvcignQ2Fubm90IHNldCByZWFkIG9ubHkgLmxlbmd0aCcpO1xuICB9IHJldHVybiBPLmxlbmd0aCA9IGxlbmd0aDtcbn0gOiBmdW5jdGlvbiAoTywgbGVuZ3RoKSB7XG4gIHJldHVybiBPLmxlbmd0aCA9IGxlbmd0aDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDB4MUZGRkZGRkZGRkZGRkY7IC8vIDIgKiogNTMgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID4gTUFYX1NBRkVfSU5URUdFUikgdGhyb3cgJFR5cGVFcnJvcignTWF4aW11bSBhbGxvd2VkIGluZGV4IGV4Y2VlZGVkJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcbnZhciBzZXRBcnJheUxlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zZXQtbGVuZ3RoJyk7XG52YXIgZG9lc05vdEV4Y2VlZFNhZmVJbnRlZ2VyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvZXMtbm90LWV4Y2VlZC1zYWZlLWludGVnZXInKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG52YXIgSU5DT1JSRUNUX1RPX0xFTkdUSCA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIFtdLnB1c2guY2FsbCh7IGxlbmd0aDogMHgxMDAwMDAwMDAgfSwgMSkgIT09IDQyOTQ5NjcyOTc7XG59KTtcblxuLy8gVjggPD0gMTIxIGFuZCBTYWZhcmkgPD0gMTUuNDsgRkYgPCAyMyB0aHJvd3MgSW50ZXJuYWxFcnJvclxuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MTI2ODFcbnZhciBwcm9wZXJFcnJvck9uTm9uV3JpdGFibGVMZW5ndGggPSBmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFtdLCAnbGVuZ3RoJywgeyB3cml0YWJsZTogZmFsc2UgfSkucHVzaCgpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBlcnJvciBpbnN0YW5jZW9mIFR5cGVFcnJvcjtcbiAgfVxufTtcblxudmFyIEZPUkNFRCA9IElOQ09SUkVDVF9UT19MRU5HVEggfHwgIXByb3BlckVycm9yT25Ob25Xcml0YWJsZUxlbmd0aCgpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnB1c2hgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUucHVzaFxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGFyaXR5OiAxLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFycyAtLSByZXF1aXJlZCBmb3IgYC5sZW5ndGhgXG4gIHB1c2g6IGZ1bmN0aW9uIHB1c2goaXRlbSkge1xuICAgIHZhciBPID0gdG9PYmplY3QodGhpcyk7XG4gICAgdmFyIGxlbiA9IGxlbmd0aE9mQXJyYXlMaWtlKE8pO1xuICAgIHZhciBhcmdDb3VudCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgZG9lc05vdEV4Y2VlZFNhZmVJbnRlZ2VyKGxlbiArIGFyZ0NvdW50KTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ0NvdW50OyBpKyspIHtcbiAgICAgIE9bbGVuXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgIGxlbisrO1xuICAgIH1cbiAgICBzZXRBcnJheUxlbmd0aChPLCBsZW4pO1xuICAgIHJldHVybiBsZW47XG4gIH1cbn0pO1xuIiwgImNvbnN0IFdHX0FDVElPTjogTWVkaWFXaWtpQ29uZmlnTWFwV2dBY3Rpb24gPSBtdy5jb25maWcuZ2V0KCd3Z0FjdGlvbicpO1xuY29uc3QgV0dfUEFHRV9DT05URU5UX01PREVMOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VDb250ZW50TW9kZWwnKTtcbmNvbnN0IFdHX1VTRVJfTEFOR1VBR0U6IHN0cmluZyA9IG13LmNvbmZpZy5nZXQoJ3dnVXNlckxhbmd1YWdlJyk7XG5cbmNvbnN0IElTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTjogYm9vbGVhbiA9IFsnZWRpdCcsICdzdWJtaXQnXS5pbmNsdWRlcyhXR19BQ1RJT04pO1xuXG5leHBvcnQge1dHX1BBR0VfQ09OVEVOVF9NT0RFTCwgV0dfVVNFUl9MQU5HVUFHRSwgSVNfV0dfRURJVF9PUl9TVUJNSVRfQUNUSU9OfTtcbiIsICIvKiBnbG9iYWwgQ2l0ZVRCICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnQgKi9cbi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQge2dldEJvZHksIGluaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi91dGlsL2dldE1lc3NhZ2UnO1xuaW1wb3J0IHtyZWZUb29sYmFyQ29uZmlnfSBmcm9tICcuL1JlZlRvb2xiYXJDb25maWcnO1xuXG4vLyBUT0RPOiBtYWtlIGF1dG9kYXRlIGFuIG9wdGlvbiBpbiB0aGUgQ2l0ZVRlbXBsYXRlIG9iamVjdCwgbm90IGEgcHJlZmVyZW5jZVxuY29uc3QgcmVmVG9vbGJhcjIgPSBhc3luYyAoKSA9PiB7XG5cdGNvbnN0ICRib2R5ID0gYXdhaXQgZ2V0Qm9keSgpO1xuXHRjb25zdCBhcGkgPSBpbml0TXdBcGkoJ1JlZlRvb2xiYXIvMi4wJyk7XG5cblx0Ly8gRGVmYXVsdCBvcHRpb25zLCB0aGVzZSBtYWlubHkgZXhpc3Qgc28gdGhlIHNjcmlwdCB3b24ndCBicmVhayBpZiBhIG5ldyBvcHRpb24gaXMgYWRkZWRcblx0Q2l0ZVRCLkRlZmF1bHRPcHRpb25zID0ge1xuXHRcdCdkYXRlIGZvcm1hdCc6ICc8eWVhcj4tPHptb250aD4tPHpkYXRlPicsXG5cdFx0J2F1dG9kYXRlIGZpZWxkcyc6IFtdLFxuXHRcdG1vbnRoczogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddLFxuXHRcdG1vZGFsOiB0cnVlLFxuXHRcdGF1dG9wYXJzZTogZmFsc2UsXG5cdFx0ZXhwYW5kdGVtcGxhdGVzOiBmYWxzZSxcblx0fTtcblxuXHQvLyBHZXQgYW4gb3B0aW9uIC0gdXNlciBzZXR0aW5ncyBvdmVycmlkZSBnbG9iYWwgd2hpY2ggb3ZlcnJpZGUgZGVmYXVsdHNcblx0Q2l0ZVRCLmdldE9wdGlvbiA9IChvcHQpID0+IHtcblx0XHRpZiAoQ2l0ZVRCLlVzZXJPcHRpb25zW29wdF0gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIENpdGVUQi5Vc2VyT3B0aW9uc1tvcHRdO1xuXHRcdH0gZWxzZSBpZiAoQ2l0ZVRCLk9wdGlvbnNbb3B0XSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gQ2l0ZVRCLk9wdGlvbnNbb3B0XTtcblx0XHR9XG5cdFx0cmV0dXJuIENpdGVUQi5EZWZhdWx0T3B0aW9uc1tvcHRdO1xuXHR9O1xuXG5cdENpdGVUQi5pbml0ID0gKCkgPT4ge1xuXHRcdC8qIE1haW4gc3R1ZmYsIGJ1aWxkIHRoZSBhY3R1YWwgdG9vbGJhciBzdHJ1Y3R1cmVcblx0XHQgKiAxLiBnZXQgdGhlIHRlbXBsYXRlIGxpc3QsIG1ha2UgdGhlIGRyb3Bkb3duIGxpc3QgYW5kIHNldCB1cCB0aGUgdGVtcGxhdGUgZGlhbG9nIGJveGVzXG5cdFx0ICogMi4gYWN0dWFsbHkgYnVpbGQgdGhlIHRvb2xiYXI6XG5cdFx0ICogLSBBIHNlY3Rpb24gZm9yIGNpdGVzXG5cdFx0ICogLS0gZHJvcGRvd24gZm9yIHRoZSB0ZW1wbGF0ZXMgKHByZXZpb3VzbHkgZGVmaW5lZClcblx0XHQgKiAtLSBidXR0b24gZm9yIG5hbWVkIHJlZnMgd2l0aCBhIGRpYWxvZyBib3hcblx0XHQgKiAtLSBidXR0b24gZm9yIGVycm9yY2hlY2tcblx0XHQgKiAzLiBhZGQgdGhlIHdob2xlIHRoaW5nIHRvIHRoZSBtYWluIHRvb2xiYXJcblx0XHQgKi9cblxuXHRcdCQoZG9jdW1lbnQpLmZpbmQoJ2hlYWQnKS50cmlnZ2VyKCdyZWZ0b29sYmFyYmFzZScpO1xuXHRcdGNvbnN0ICR0YXJnZXQgPSAkYm9keS5maW5kKCcjd3BUZXh0Ym94MScpO1xuXHRcdGNvbnN0IHRlbWxpc3QgPSB7fTtcblx0XHRmb3IgKGNvbnN0IHQgaW4gQ2l0ZVRCLlRlbXBsYXRlcykge1xuXHRcdFx0aWYgKE9iamVjdC5oYXNPd24oQ2l0ZVRCLlRlbXBsYXRlcywgdCkpIHtcblx0XHRcdFx0Y29uc3QgdGVtID0gQ2l0ZVRCLlRlbXBsYXRlc1t0XTtcblx0XHRcdFx0Y29uc3Qgc2Zvcm0gPSBDaXRlVEIuZXNjU3RyKHRlbS5zaG9ydGZvcm0pO1xuXHRcdFx0XHRjb25zdCBhY3Rpb25vYmogPSB7XG5cdFx0XHRcdFx0dHlwZTogJ2RpYWxvZycsXG5cdFx0XHRcdFx0bW9kdWxlOiBgY2l0ZS1kaWFsb2ctJHtzZm9ybX1gLFxuXHRcdFx0XHR9O1xuXHRcdFx0XHRjb25zdCBkaWFsb2dvYmogPSB7fTtcblx0XHRcdFx0ZGlhbG9nb2JqW2BjaXRlLWRpYWxvZy0ke3Nmb3JtfWBdID0ge1xuXHRcdFx0XHRcdHJlc2l6ZW1lOiBmYWxzZSxcblx0XHRcdFx0XHR0aXRsZU1zZzogYGNpdGUtZGlhbG9nLSR7c2Zvcm19YCxcblx0XHRcdFx0XHRpZDogYGNpdGV0b29sYmFyLSR7c2Zvcm19YCxcblx0XHRcdFx0XHRpbml0OiAoKSA9PiB7fSxcblx0XHRcdFx0XHRodG1sOiB0ZW0uZ2V0SW5pdGlhbCgpLFxuXHRcdFx0XHRcdGRpYWxvZzoge1xuXHRcdFx0XHRcdFx0d2lkdGg6IE1hdGgucm91bmQoJCh3aW5kb3cpLndpZHRoKCkgPz8gMCAqIDAuOCksXG5cdFx0XHRcdFx0XHRvcGVuKCkge1xuXHRcdFx0XHRcdFx0XHQkKHRoaXMpLmh0bWwoQ2l0ZVRCLmdldE9wZW5UZW1wbGF0ZSgpLmdldEZvcm0oKSk7XG5cdFx0XHRcdFx0XHRcdC8qKiBAcGFyYW0ge2pRdWVyeS5FdmVudH0gZSAqL1xuXHRcdFx0XHRcdFx0XHQkYm9keS5maW5kKCcuY2l0ZS1wcmV2LXBhcnNlJykub24oJ2NsaWNrJywgKGUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdFx0Q2l0ZVRCLnByZXZQYXJzZUNsaWNrKCk7XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdGJ1dHRvbnM6IHtcblx0XHRcdFx0XHRcdFx0J2NpdGUtZm9ybS1zdWJtaXQnKCkge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHJlZiA9IENpdGVUQi5nZXRSZWYoZmFsc2UsIHRydWUpO1xuXHRcdFx0XHRcdFx0XHRcdCQodGhpcykuZGlhbG9nKCdjbG9zZScpO1xuXHRcdFx0XHRcdFx0XHRcdCQud2lraUVkaXRvci5tb2R1bGVzLnRvb2xiYXIuZm4uZG9BY3Rpb24oXG5cdFx0XHRcdFx0XHRcdFx0XHQkKHRoaXMpLmRhdGEoJ2NvbnRleHQnKSxcblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogJ2VuY2Fwc3VsYXRlJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBvc3Q6IHJlZixcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHQkKHRoaXMpXG5cdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0J2NpdGUtZm9ybS1zaG93aGlkZSc6IENpdGVUQi5zaG93SGlkZUV4dHJhLFxuXHRcdFx0XHRcdFx0XHQnY2l0ZS1yZWZwcmV2aWV3JygpIHtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCByZWYgPSBDaXRlVEIuZ2V0UmVmKGZhbHNlLCBmYWxzZSk7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgdGVtcGxhdGUgPSBDaXRlVEIuZ2V0T3BlblRlbXBsYXRlKCk7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgZGl2ID0gJChgI2NpdGV0b29sYmFyLSR7Q2l0ZVRCLmVzY1N0cih0ZW1wbGF0ZS5zaG9ydGZvcm0pfWApO1xuXHRcdFx0XHRcdFx0XHRcdGRpdi5maW5kKCcuY2l0ZS1wcmV2aWV3LWxhYmVsJykuc2hvdygpO1xuXHRcdFx0XHRcdFx0XHRcdGRpdi5maW5kKCcuY2l0ZS1yZWYtcHJldmlldycpLnRleHQocmVmKS5zaG93KCk7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKENpdGVUQi5nZXRPcHRpb24oJ2F1dG9wYXJzZScpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRDaXRlVEIucHJldlBhcnNlQ2xpY2soKTtcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0ZGl2LmZpbmQoJy5jaXRlLXByZXYtcGFyc2UnKS5zaG93KCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRkaXYuZmluZCgnLmNpdGUtcHJldi1wYXJzZWQtbGFiZWwnKS5oaWRlKCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRkaXYuZmluZCgnLmNpdGUtcHJldmlldy1wYXJzZWQnKS5odG1sKCcnKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdCd3aWtpZWRpdG9yLXRvb2xiYXItdG9vbC1saW5rLWNhbmNlbCcoKSB7XG5cdFx0XHRcdFx0XHRcdFx0JCh0aGlzKS5kaWFsb2coJ2Nsb3NlJyk7XG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdCdjaXRlLWZvcm0tcmVzZXQnKCkge1xuXHRcdFx0XHRcdFx0XHRcdENpdGVUQi5yZXNldEZvcm0oKTtcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fTtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQkdGFyZ2V0Lndpa2lFZGl0b3IoJ2FkZERpYWxvZycsIGRpYWxvZ29iaik7XG5cdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdC8qIFR5cGVFcnJvcjogcmFuZ2UgaXMgbnVsbCAqL1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIGlmICghQ2l0ZVRCLmdldE9wdGlvbignbW9kYWwnKSkge1xuXHRcdFx0XHQvLyAgICAgJGJvZHkuZmluZCgnI2NpdGV0b29sYmFyLScrc2Zvcm0pLmRpYWxvZygnb3B0aW9uJywgJ21vZGFsJywgZmFsc2UpO1xuXHRcdFx0XHQvLyB9XG5cdFx0XHRcdHRlbWxpc3Rbc2Zvcm1dID0ge1xuXHRcdFx0XHRcdGxhYmVsOiB0ZW0udGVtcGxhdGVuYW1lLFxuXHRcdFx0XHRcdGFjdGlvbjogYWN0aW9ub2JqLFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNvbnN0IHJlZnNlY3Rpb24gPSB7XG5cdFx0XHRzZWN0aW9uczoge1xuXHRcdFx0XHRjaXRlczoge1xuXHRcdFx0XHRcdHR5cGU6ICd0b29sYmFyJyxcblx0XHRcdFx0XHRsYWJlbE1zZzogJ2NpdGUtc2VjdGlvbi1sYWJlbCcsXG5cdFx0XHRcdFx0Z3JvdXBzOiB7XG5cdFx0XHRcdFx0XHR0ZW1wbGF0ZToge1xuXHRcdFx0XHRcdFx0XHR0b29sczoge1xuXHRcdFx0XHRcdFx0XHRcdHRlbXBsYXRlOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnc2VsZWN0Jyxcblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsTXNnOiAnY2l0ZS10ZW1wbGF0ZS1saXN0Jyxcblx0XHRcdFx0XHRcdFx0XHRcdGxpc3Q6IHRlbWxpc3QsXG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRuYW1lZHJlZnM6IHtcblx0XHRcdFx0XHRcdFx0bGFiZWxNc2c6ICdjaXRlLW5hbWVkLXJlZnMtbGFiZWwnLFxuXHRcdFx0XHRcdFx0XHR0b29sczoge1xuXHRcdFx0XHRcdFx0XHRcdG5yZWZzOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnYnV0dG9uJyxcblx0XHRcdFx0XHRcdFx0XHRcdGFjdGlvbjoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnZGlhbG9nJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlOiAnY2l0ZS10b29sYmFyLW5hbWVkcmVmcycsXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0aWNvbjogJ2h0dHBzOi8vdHUuemhvbmd3ZW4ud2lraS9pbWFnZXMvcWl1d2VuYmFpa2UvemgvdGh1bWIvYi9iZS9OdXZvbGFfY2xpcGJvYXJkX2xpbmVkLnN2Zy8yMnB4LU51dm9sYV9jbGlwYm9hcmRfbGluZWQuc3ZnLnBuZycsXG5cdFx0XHRcdFx0XHRcdFx0XHRzZWN0aW9uOiAnY2l0ZXMnLFxuXHRcdFx0XHRcdFx0XHRcdFx0Z3JvdXA6ICduYW1lZHJlZnMnLFxuXHRcdFx0XHRcdFx0XHRcdFx0bGFiZWxNc2c6ICdjaXRlLW5hbWVkLXJlZnMtYnV0dG9uJyxcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdGVycm9yY2hlY2s6IHtcblx0XHRcdFx0XHRcdFx0bGFiZWxNc2c6ICdjaXRlLWVycm9yY2hlY2stbGFiZWwnLFxuXHRcdFx0XHRcdFx0XHR0b29sczoge1xuXHRcdFx0XHRcdFx0XHRcdGVjaGVjazoge1xuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogJ2J1dHRvbicsXG5cdFx0XHRcdFx0XHRcdFx0XHRhY3Rpb246IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogJ2RpYWxvZycsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZTogJ2NpdGUtdG9vbGJhci1lcnJvcmNoZWNrJyxcblx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRpY29uOiAnaHR0cHM6Ly90dS56aG9uZ3dlbi53aWtpL2ltYWdlcy9xaXV3ZW5iYWlrZS96aC90aHVtYi9hL2EzL051dm9sYV9hcHBzX2tvcmdhbml6ZXItTk8ucG5nLzIycHgtTnV2b2xhX2FwcHNfa29yZ2FuaXplci1OTy5wbmcnLFxuXHRcdFx0XHRcdFx0XHRcdFx0c2VjdGlvbjogJ2NpdGVzJyxcblx0XHRcdFx0XHRcdFx0XHRcdGdyb3VwOiAnZXJyb3JjaGVjaycsXG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbE1zZzogJ2NpdGUtZXJyb3JjaGVjay1idXR0b24nLFxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH07XG5cblx0XHRjb25zdCBkZWZhdWx0ZGlhbG9ncyA9IHtcblx0XHRcdCdjaXRlLXRvb2xiYXItZXJyb3JjaGVjayc6IHtcblx0XHRcdFx0dGl0bGVNc2c6ICdjaXRlLWVycm9yY2hlY2stbGFiZWwnLFxuXHRcdFx0XHRpZDogJ2NpdGV0b29sYmFyLWVycm9yY2hlY2snLFxuXHRcdFx0XHRyZXNpemVtZTogZmFsc2UsXG5cdFx0XHRcdGluaXQ6ICgpID0+IHt9LFxuXHRcdFx0XHRodG1sOiBgPGRpdiBpZD1cImNpdGUtbmFtZWRyZWYtbG9hZGluZ1wiPjxpbWcgc3JjPVwiaHR0cHM6Ly90dS56aG9uZ3dlbi53aWtpL2ltYWdlcy9xaXV3ZW5iYWlrZS96aC9kL2RlL0FqYXgtbG9hZGVyLmdpZlwiIC8+Jm5ic3A7JHtnZXRNZXNzYWdlKFxuXHRcdFx0XHRcdCdjaXRlLWxvYWRpbmcnXG5cdFx0XHRcdCl9PC9kaXY+YCxcblx0XHRcdFx0ZGlhbG9nOiB7XG5cdFx0XHRcdFx0d2lkdGg6IE1hdGgucm91bmQoJCh3aW5kb3cpLndpZHRoKCkgPz8gMCAqIDAuOCksXG5cdFx0XHRcdFx0b3BlbigpIHtcblx0XHRcdFx0XHRcdENpdGVUQi5sb2FkUmVmcygpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0YnV0dG9uczoge1xuXHRcdFx0XHRcdFx0J2NpdGUtZXJyb3JjaGVjay1zdWJtaXQnKCkge1xuXHRcdFx0XHRcdFx0XHRjb25zdCBlcnJvcmNoZWNrcyA9ICRib2R5LmZpbmQoJ2lucHV0W25hbWU9Y2l0ZS1lcnItdGVzdF06Y2hlY2tlZCcpO1xuXHRcdFx0XHRcdFx0XHRsZXQgZXJyb3JzID0gW107XG5cdFx0XHRcdFx0XHRcdGZvciAoY29uc3QgZXJyb3JjaGVjayBvZiBlcnJvcmNoZWNrcykge1xuXHRcdFx0XHRcdFx0XHRcdGVycm9ycyA9IFsuLi5lcnJvcnMsIC4uLkNpdGVUQi5FcnJvckNoZWNrc1skKGVycm9yY2hlY2spLnZhbCgpXS5ydW4oKV07XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Q2l0ZVRCLmRpc3BsYXlFcnJvcnMoZXJyb3JzKTtcblx0XHRcdFx0XHRcdFx0JCh0aGlzKS5kaWFsb2coJ2Nsb3NlJyk7XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0J3dpa2llZGl0b3ItdG9vbGJhci10b29sLWxpbmstY2FuY2VsJygpIHtcblx0XHRcdFx0XHRcdFx0JCh0aGlzKS5kaWFsb2coJ2Nsb3NlJyk7XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0J2NpdGUtdG9vbGJhci1uYW1lZHJlZnMnOiB7XG5cdFx0XHRcdHRpdGxlTXNnOiAnY2l0ZS1uYW1lZC1yZWZzLXRpdGxlJyxcblx0XHRcdFx0cmVzaXplbWU6IGZhbHNlLFxuXHRcdFx0XHRpZDogJ2NpdGV0b29sYmFyLW5hbWVkcmVmcycsXG5cdFx0XHRcdGh0bWw6IGA8ZGl2IGlkPVwiY2l0ZS1uYW1lZHJlZi1sb2FkaW5nXCI+IDxpbWcgc3JjPVwiaHR0cHM6Ly90dS56aG9uZ3dlbi53aWtpL2ltYWdlcy9xaXV3ZW5iYWlrZS96aC9kL2RlL0FqYXgtbG9hZGVyLmdpZlwiIC8+ICZuYnNwOyR7Z2V0TWVzc2FnZShcblx0XHRcdFx0XHQnY2l0ZS1sb2FkaW5nJ1xuXHRcdFx0XHQpfTwvZGl2PmAsXG5cdFx0XHRcdGluaXQ6ICgpID0+IHt9LFxuXHRcdFx0XHRkaWFsb2c6IHtcblx0XHRcdFx0XHR3aWR0aDogTWF0aC5yb3VuZCgkKHdpbmRvdykud2lkdGgoKSA/PyAwICogMC44KSxcblx0XHRcdFx0XHRvcGVuKCkge1xuXHRcdFx0XHRcdFx0Q2l0ZVRCLmxvYWRSZWZzKCk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRidXR0b25zOiB7XG5cdFx0XHRcdFx0XHQnY2l0ZS1mb3JtLXN1Ym1pdCcoKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHJlZm5hbWUgPSAkYm9keS5maW5kKCcjY2l0ZS1uYW1lZHJlZi1zZWxlY3QnKS52YWwoKTtcblx0XHRcdFx0XHRcdFx0aWYgKHJlZm5hbWUgPT09ICcnKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdCQodGhpcykuZGlhbG9nKCdjbG9zZScpO1xuXHRcdFx0XHRcdFx0XHQkLndpa2lFZGl0b3IubW9kdWxlcy50b29sYmFyLmZuLmRvQWN0aW9uKFxuXHRcdFx0XHRcdFx0XHRcdCQodGhpcykuZGF0YSgnY29udGV4dCcpLFxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdlbmNhcHN1bGF0ZScsXG5cdFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBvc3Q6IENpdGVUQi5nZXROYW1lZFJlZihyZWZuYW1lLCB0cnVlKSxcblx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHQkKHRoaXMpXG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0J3dpa2llZGl0b3ItdG9vbGJhci10b29sLWxpbmstY2FuY2VsJygpIHtcblx0XHRcdFx0XHRcdFx0JCh0aGlzKS5kaWFsb2coJ2Nsb3NlJyk7XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdH07XG5cblx0XHR0cnkge1xuXHRcdFx0JHRhcmdldC53aWtpRWRpdG9yKCdhZGREaWFsb2cnLCBkZWZhdWx0ZGlhbG9ncyk7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHQvLyBlcnJvciBvY2N1cnJlZCBzZXR0aW5nIHVwIHdpa2llZGl0b3IuXG5cdFx0fVxuXHRcdCRib2R5LmZpbmQoJyNjaXRldG9vbGJhci1uYW1lZHJlZnMnKS5vZmYoJ2RpYWxvZ29wZW4nKTtcblx0XHRpZiAoIUNpdGVUQi5nZXRPcHRpb24oJ21vZGFsJykpIHtcblx0XHRcdC8vICRib2R5LmZpbmQoJyNjaXRldG9vbGJhci1uYW1lZHJlZnMnKS5kaWFsb2coJ29wdGlvbicsICdtb2RhbCcsIGZhbHNlKTtcblx0XHRcdC8vICRib2R5LmZpbmQoJyNjaXRldG9vbGJhci1lcnJvcmNoZWNrJykuZGlhbG9nKCdvcHRpb24nLCAnbW9kYWwnLCBmYWxzZSk7XG5cdFx0XHRtdy51dGlsLmFkZENTUygnLnVpLXdpZGdldC1vdmVybGF5e2Rpc3BsYXk6bm9uZSAhaW1wb3J0YW50fScpO1xuXHRcdH1cblx0XHR0cnkge1xuXHRcdFx0JHRhcmdldC53aWtpRWRpdG9yKCdhZGRUb1Rvb2xiYXInLCByZWZzZWN0aW9uKTtcblx0XHR9IGNhdGNoIHtcblx0XHRcdC8vIGVycm9yIG9jY3VycmVkIHNldHRpbmcgdXAgd2lraWVkaXRvci5cblx0XHR9XG5cdH07XG5cblx0Ly8gU2V0dXAgdGhlIG1haW4gb2JqZWN0XG5cdENpdGVUQi5tYWluUmVmTGlzdCA9IFtdO1xuXHRDaXRlVEIucmVmc0xvYWRlZCA9IGZhbHNlO1xuXG5cdC8vIFJFRiBGVU5DVElPTlNcblx0Ly8gQWN0dWFsbHkgYXNzZW1ibGUgYSByZWYgZnJvbSB1c2VyIGlucHV0XG5cdENpdGVUQi5nZXRSZWYgPSAoaW5uZXJvbmx5LCBmb3JpbnNlcnQpID0+IHtcblx0XHRsZXQgaSwgaiwgZywgZ3JvdXA7XG5cdFx0Y29uc3QgdGVtcGxhdGUgPSBDaXRlVEIuZ2V0T3BlblRlbXBsYXRlKCk7XG5cdFx0Y29uc3Qge3RlbXBsYXRlbmFtZX0gPSB0ZW1wbGF0ZTtcblx0XHRsZXQgcmVzID0gJyc7XG5cdFx0Y29uc3QgcmVmb2JqID0ge1xuXHRcdFx0c2hvcnR0YWc6IGZhbHNlLFxuXHRcdH07XG5cdFx0aWYgKCFpbm5lcm9ubHkpIHtcblx0XHRcdGdyb3VwID0gJChgI2NpdGUtJHtDaXRlVEIuZXNjU3RyKHRlbXBsYXRlLnNob3J0Zm9ybSl9LWdyb3VwYCkudmFsKCk7XG5cdFx0XHRsZXQgcmVmbmFtZSA9ICQoYCNjaXRlLSR7Q2l0ZVRCLmVzY1N0cih0ZW1wbGF0ZS5zaG9ydGZvcm0pfS1uYW1lYCkudmFsKCk7XG5cdFx0XHRyZXMgKz0gJzxyZWYnO1xuXHRcdFx0aWYgKHJlZm5hbWUpIHtcblx0XHRcdFx0cmVmbmFtZSA9IFN0cmluZyhyZWZuYW1lKS50cmltKCk7XG5cdFx0XHRcdHJlcyArPSBgIG5hbWU9JHtDaXRlVEIuZ2V0UXVvdGVkU3RyaW5nKHJlZm5hbWUpfWA7XG5cdFx0XHRcdHJlZm9iai5yZWZuYW1lID0gcmVmbmFtZTtcblx0XHRcdH1cblx0XHRcdGlmIChncm91cCkge1xuXHRcdFx0XHRncm91cCA9IFN0cmluZyhncm91cCkudHJpbSgpO1xuXHRcdFx0XHRyZXMgKz0gYCBncm91cD0ke0NpdGVUQi5nZXRRdW90ZWRTdHJpbmcoZ3JvdXApfWA7XG5cdFx0XHRcdHJlZm9iai5yZWZncm91cCA9IGdyb3VwO1xuXHRcdFx0fVxuXHRcdFx0cmVzICs9ICc+Jztcblx0XHR9XG5cdFx0bGV0IGNvbnRlbnQgPSBge3ske3RlbXBsYXRlbmFtZX1gO1xuXHRcdGZvciAoZyBpbiB0ZW1wbGF0ZS5pbmNyZW1lbnRhYmxlcykge1xuXHRcdFx0aWYgKE9iamVjdC5oYXNPd24odGVtcGxhdGUuaW5jcmVtZW50YWJsZXMsIGcpKSB7XG5cdFx0XHRcdGdyb3VwID0gdGVtcGxhdGUuaW5jcmVtZW50YWJsZXNbZ107XG5cdFx0XHRcdGZvciAoaSA9IDE7IGkgPD0gZ3JvdXAudmFsOyBpKyspIHtcblx0XHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgZ3JvdXAuZmllbGRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBmaWVsZG5hbWUgPSBncm91cC5maWVsZHNbal0uZmllbGQ7XG5cdFx0XHRcdFx0XHRjb25zdCBmaWVsZGlkID0gZmllbGRuYW1lLnJlcGxhY2UoJzxOPicsIGkudG9TdHJpbmcoKSk7XG5cdFx0XHRcdFx0XHRjb25zdCBmaWVsZCA9ICQoYCNjaXRlLSR7Q2l0ZVRCLmVzY1N0cih0ZW1wbGF0ZS5zaG9ydGZvcm0pfS0ke2ZpZWxkaWR9YCkudmFsKCk7XG5cdFx0XHRcdFx0XHRpZiAoZmllbGQpIHtcblx0XHRcdFx0XHRcdFx0Y29udGVudCArPSBgIHwke2ZpZWxkaWR9PWA7XG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQgKz0gU3RyaW5nKGZpZWxkKS50cmltKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZvciAoaSA9IDA7IGkgPCB0ZW1wbGF0ZS5iYXNpYy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKHRlbXBsYXRlLmJhc2ljW2ldLmluY3JlbWVudF9ncm91cCkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IGZpZWxkbmFtZSA9IHRlbXBsYXRlLmJhc2ljW2ldLmZpZWxkO1xuXHRcdFx0Y29uc3QgZmllbGQgPSAkKGAjY2l0ZS0ke0NpdGVUQi5lc2NTdHIodGVtcGxhdGUuc2hvcnRmb3JtKX0tJHtmaWVsZG5hbWV9YCkudmFsKCk7XG5cdFx0XHRpZiAoZmllbGQpIHtcblx0XHRcdFx0Y29udGVudCArPSBgIHwke2ZpZWxkbmFtZX09YDtcblx0XHRcdFx0Y29udGVudCArPSBTdHJpbmcoZmllbGQpLnRyaW0oKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKCRib2R5LmZpbmQoJyNjaXRlLWZvcm0tc3RhdHVzJykudmFsKCkgIT09ICdjbG9zZWQnKSB7XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgdGVtcGxhdGUuZXh0cmEubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHRlbXBsYXRlLmV4dHJhW2ldLmluY3JlbWVudF9ncm91cCkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IGZpZWxkbmFtZSA9IHRlbXBsYXRlLmV4dHJhW2ldLmZpZWxkO1xuXHRcdFx0XHRjb25zdCBmaWVsZCA9ICQoYCNjaXRlLSR7Q2l0ZVRCLmVzY1N0cih0ZW1wbGF0ZS5zaG9ydGZvcm0pfS0ke2ZpZWxkbmFtZX1gKS52YWwoKTtcblx0XHRcdFx0aWYgKGZpZWxkKSB7XG5cdFx0XHRcdFx0Y29udGVudCArPSBgIHwke2ZpZWxkbmFtZX09YDtcblx0XHRcdFx0XHRjb250ZW50ICs9IFN0cmluZyhmaWVsZCkudHJpbSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNvbnRlbnQgKz0gJ319Jztcblx0XHRyZXMgKz0gY29udGVudDtcblx0XHRyZWZvYmouY29udGVudCA9IGNvbnRlbnQ7XG5cdFx0aWYgKCFpbm5lcm9ubHkpIHtcblx0XHRcdHJlcyArPSAnPC9yZWY+Jztcblx0XHR9XG5cdFx0aWYgKGZvcmluc2VydCkge1xuXHRcdFx0Q2l0ZVRCLm1haW5SZWZMaXN0LnB1c2gocmVmb2JqKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlcztcblx0fTtcblxuXHQvLyBNYWtlIGEgcmVmZXJlbmNlIHRvIGEgbmFtZWQgcmVmXG5cdENpdGVUQi5nZXROYW1lZFJlZiA9IChyZWZuYW1lLCBmb3JpbnNlcnQpID0+IHtcblx0XHRpZiAoZm9yaW5zZXJ0KSB7XG5cdFx0XHRDaXRlVEIubWFpblJlZkxpc3QucHVzaCh7XG5cdFx0XHRcdHNob3J0dGFnOiB0cnVlLFxuXHRcdFx0XHRyZWZuYW1lLFxuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdHJldHVybiBgPHJlZiBuYW1lPSR7Q2l0ZVRCLmdldFF1b3RlZFN0cmluZyhyZWZuYW1lKX0gLz5gO1xuXHR9O1xuXG5cdC8vIEZ1bmN0aW9uIHRvIGxvYWQgdGhlIHJlZiBsaXN0XG5cdENpdGVUQi5sb2FkUmVmcyA9ICgpID0+IHtcblx0XHRpZiAoQ2l0ZVRCLnJlZnNMb2FkZWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Q2l0ZVRCLmdldFBhZ2VUZXh0KENpdGVUQi5sb2FkUmVmc0ludGVybmFsKTtcblx0fTtcblxuXHQvLyBGdW5jdGlvbiB0aGF0IGFjdHVhbGx5IGxvYWRzIHRoZSBsaXN0IGZyb20gdGhlIHBhZ2UgdGV4dFxuXHRDaXRlVEIubG9hZFJlZnNJbnRlcm5hbCA9ICh0ZXh0KSA9PiB7XG5cdFx0Ly8gV2hhdCB0aGlzIGRvZXM6ICAgICAgICAgICAgIGV4dHJhY3QgZmlyc3QgbmFtZS9ncm91cCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRyYWN0IHNlY29uZCBuYW1lL2dyb3VwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvcnR0YWcgICBpbm5lciBjb250ZW50XG5cdFx0Y29uc3QgcmVmc3JlZ2V4ID1cblx0XHRcdC88ICpyZWYoPzogKyhuYW1lfGdyb3VwKSAqPSAqKD86XCIoW15cIl0qPylcInwnKFteJ10qPyknfChbXiAnXCIvPl0qPykpICopPyAqKD86ICsobmFtZXxncm91cCkgKj0gKig/OlwiKFteXCJdKj8pXCJ8JyhbXiddKj8pJ3woW14gJ1wiLz5dKj8pKSAqKT8gKig/OlxcLyAqPnw+KCg/Oi58XFxuKSo/KTwgKlxcLyAqcmVmICo+KS9naW07XG5cdFx0Ly8gVGhpcyBzaG91bGQgd29yayByZWdhcmRsZXNzIG9mIHRoZSBxdW90aW5nIHVzZWQgZm9yIG5hbWVzL2dyb3VwcyBhbmQgZm9yIGxpbmVicmVha3MgaW4gdGhlIGlubmVyIGNvbnRlbnRcblx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0Y29uc3QgcmVmID0gcmVmc3JlZ2V4LmV4ZWModGV4dCk7XG5cdFx0XHRpZiAocmVmID09PSBudWxsKSB7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcmVmb2JqID0ge307XG5cdFx0XHRpZiAocmVmWzldKSB7XG5cdFx0XHRcdC8vIENvbnRlbnQgKyBzaG9ydCB0YWcgY2hlY2tcblx0XHRcdFx0Ly8gbXcubm90aWZ5KGBcIiR7cmVmWzldfVwiYCwge3RhZzogJ1JlZlRvb2xiYXIyLjAnLCB0eXBlOiAnd2Fybid9KTtcblx0XHRcdFx0WywgLCAsICwgLCAsICwgLCAsIHJlZm9iai5jb250ZW50XSA9IHJlZjtcblx0XHRcdFx0cmVmb2JqLnNob3J0dGFnID0gZmFsc2U7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZWZvYmouc2hvcnR0YWcgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHJlZlsxXSAhPT0gJycpIHtcblx0XHRcdFx0Ly8gRmlyc3QgbmFtZS9ncm91cFxuXHRcdFx0XHRpZiAocmVmWzJdKSB7XG5cdFx0XHRcdFx0WywgLCByZWZvYmpbYHJlZiR7cmVmWzFdfWBdXSA9IHJlZjtcblx0XHRcdFx0fSBlbHNlIGlmIChyZWZbM10pIHtcblx0XHRcdFx0XHRbLCAsICwgcmVmb2JqW2ByZWYke3JlZlsxXX1gXV0gPSByZWY7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0WywgLCAsICwgcmVmb2JqW2ByZWYke3JlZlsxXX1gXV0gPSByZWY7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChyZWZbNV0gIT09ICcnKSB7XG5cdFx0XHRcdC8vIFNlY29uZCBuYW1lL2dyb3VwXG5cdFx0XHRcdGlmIChyZWZbNl0pIHtcblx0XHRcdFx0XHRbLCAsICwgLCAsICwgcmVmb2JqW2ByZWYke3JlZls1XX1gXV0gPSByZWY7XG5cdFx0XHRcdH0gZWxzZSBpZiAocmVmWzddKSB7XG5cdFx0XHRcdFx0WywgLCAsICwgLCAsICwgcmVmb2JqW2ByZWYke3JlZls1XX1gXV0gPSByZWY7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0WywgLCAsICwgLCAsICwgLCByZWZvYmpbYHJlZiR7cmVmWzVdfWBdXSA9IHJlZjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Q2l0ZVRCLm1haW5SZWZMaXN0LnB1c2gocmVmb2JqKTtcblx0XHR9XG5cdFx0Q2l0ZVRCLnJlZnNMb2FkZWQgPSB0cnVlO1xuXHRcdENpdGVUQi5zZXR1cEVycm9yQ2hlY2soKTtcblx0XHRDaXRlVEIuc2V0dXBOYW1lZFJlZnMoKTtcblx0fTtcblxuXHQvLyBBSkFYIEZVTkNUSU9OU1xuXHQvLyBQYXJzZSBzb21lIHdpa2l0ZXh0IGFuZCBoYW5kIGl0IG9mZiB0byBhIGNhbGxiYWNrIGZ1bmN0aW9uXG5cdENpdGVUQi5wYXJzZSA9ICh0ZXh0LCBjYWxsYmFjaykgPT4ge1xuXHRcdGNvbnN0IHBvc3RkYXRhID0ge1xuXHRcdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdFx0dGl0bGU6IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKSxcblx0XHRcdHRleHQsXG5cdFx0XHRwcm9wOiAndGV4dCcsXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHR9O1xuXHRcdGFwaS5wb3N0KHBvc3RkYXRhKS50aGVuKCh7cGFyc2V9KSA9PiB7XG5cdFx0XHRjb25zdCBodG1sID0gcGFyc2UudGV4dDtcblx0XHRcdGNhbGxiYWNrKGh0bWwpO1xuXHRcdH0pO1xuXHR9O1xuXG5cdC8vIFVzZSB0aGUgQVBJIHRvIGV4cGFuZCB0ZW1wbGF0ZXMgb24gc29tZSB0ZXh0XG5cdENpdGVUQi5leHBhbmR0ZW1wbGF0ZXMgPSAodGV4dCwgY2FsbGJhY2spID0+IHtcblx0XHRjb25zdCBwb3N0ZGF0YSA9IHtcblx0XHRcdGFjdGlvbjogJ2V4cGFuZHRlbXBsYXRlcycsXG5cdFx0XHR0aXRsZTogbXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpLFxuXHRcdFx0dGV4dCxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdH07XG5cdFx0YXBpLnBvc3QocG9zdGRhdGEpLnRoZW4oKHtleHBhbmR0ZW1wbGF0ZXN9KSA9PiB7XG5cdFx0XHRjb25zdCByZXN0ZXh0ID0gZXhwYW5kdGVtcGxhdGVzLndpa2l0ZXh0O1xuXHRcdFx0Y2FsbGJhY2socmVzdGV4dCk7XG5cdFx0fSk7XG5cdH07XG5cblx0Ly8gRnVuY3Rpb24gdG8gZ2V0IHRoZSBwYWdlIHRleHRcblx0Q2l0ZVRCLmdldFBhZ2VUZXh0ID0gKGNhbGxiYWNrKSA9PiB7XG5cdFx0Y29uc3Qgc2VjdGlvbiA9ICRib2R5LmZpbmQoJ2lucHV0W25hbWU9d3BTZWN0aW9uXScpLnZhbCgpO1xuXHRcdGlmIChzZWN0aW9uID09PSAnJykge1xuXHRcdFx0aWYgKENpdGVUQi5nZXRPcHRpb24oJ2V4cGFuZHRlbXBsYXRlcycpKSB7XG5cdFx0XHRcdENpdGVUQi5leHBhbmR0ZW1wbGF0ZXMoJGJvZHkuZmluZCgnI3dwVGV4dGJveDEnKS53aWtpRWRpdG9yKCdnZXRDb250ZW50cycpLnRleHQoKSwgY2FsbGJhY2spO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y2FsbGJhY2soJGJvZHkuZmluZCgnI3dwVGV4dGJveDEnKS53aWtpRWRpdG9yKCdnZXRDb250ZW50cycpLnRleHQoKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IHBvc3RkYXRhID0ge1xuXHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRcdFx0XHRydnByb3A6ICdjb250ZW50Jyxcblx0XHRcdFx0cGFnZWlkczogbXcuY29uZmlnLmdldCgnd2dBcnRpY2xlSWQnKSxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdH07XG5cdFx0XHRpZiAoQ2l0ZVRCLmdldE9wdGlvbignZXhwYW5kdGVtcGxhdGVzJykpIHtcblx0XHRcdFx0cG9zdGRhdGEucnZleHBhbmR0ZW1wbGF0ZXMgPSAnMSc7XG5cdFx0XHR9XG5cdFx0XHRhcGkuZ2V0KHBvc3RkYXRhKS50aGVuKCh7cXVlcnl9KSA9PiB7XG5cdFx0XHRcdGNvbnN0IHBhZ2V0ZXh0ID0gcXVlcnkucGFnZXNbMF0ucmV2aXNpb25zWzBdLmNvbnRlbnQ7XG5cdFx0XHRcdGNhbGxiYWNrKHBhZ2V0ZXh0KTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fTtcblxuXHQvLyBTYWZlIHZlcnNpb24gb2YgZGVjb2RlVVJJQ29tcG9uZW50KCkgdGhhdCBkb2Vzbid0IHRocm93IGV4Y2VwdGlvbnMuXG5cdC8vIElmIHRoZSBuYXRpdmUgZGVjb2RlVVJJQ29tcG9uZW50KCkgdGhyZXcgYW4gZXhjZXB0aW9uLCB0aGUgb3JpZ2luYWwgc3RyaW5nIHdpbGwgYmUgcmV0dXJuZWQuXG5cdENpdGVUQi5zYWZlRGVjb2RlVVJJQ29tcG9uZW50ID0gKHMpID0+IHtcblx0XHR0cnkge1xuXHRcdFx0cyA9IGRlY29kZVVSSUNvbXBvbmVudChzKTtcblx0XHR9IGNhdGNoIHtcblx0XHRcdC8qIGVtcHR5ICovXG5cdFx0fVxuXHRcdHJldHVybiBzO1xuXHR9O1xuXG5cdC8vIEF1dG9maWxsIGEgdGVtcGxhdGUgZnJvbSBhbiBJRCAoSVNCTiwgRE9JLCBQTUlELCBVUkwpXG5cdENpdGVUQi5pbml0QXV0b2ZpbGwgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgZWxlbWlkID0gJCh0aGlzKS5hdHRyKCdpZCcpID8/ICcnO1xuXHRcdGNvbnN0IHJlcyA9IC9eY2l0ZS1hdXRvLSguKj8pLSguKiktKC4qKSQvLmV4ZWMoZWxlbWlkKTtcblx0XHRpZiAoIXJlcykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRjb25zdCBbLCB0ZW0sIGZpZWxkLCBhdXRvdHlwZV0gPSByZXM7XG5cdFx0bGV0IGlkID0gJChgI2NpdGUtJHt0ZW19LSR7ZmllbGR9YCkudmFsKCk7XG5cdFx0aWYgKCFpZCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRsZXQgdXJsID0gJy8vY2l0b2lkLnFpdXdlbi5uZXQuY24vbG9va3VwLnBocD8nO1xuXHRcdC8vIENpdG9pZCBleHBlY3RzIG1pbmltYWxseSBlbmNvZGVkIGlucHV0LCBzbyBkbyBzb21lIHNwZWN1bGF0aXZlIGRlY29kaW5nIGhlcmUgdG8gYXZvaWRcblx0XHQvLyA0MDQgZmV0Y2hlcy4gaHR0cHM6Ly9waGFicmljYXRvci53aWtpbWVkaWEub3JnL1QxNDY1Mzlcblx0XHRpZCA9IENpdGVUQi5zYWZlRGVjb2RlVVJJQ29tcG9uZW50KGlkKTtcblx0XHR1cmwgKz0gYCR7YXV0b3R5cGV9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KGlkKX1gO1xuXHRcdHVybCArPSBgJnRlbXBsYXRlPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHRlbSl9YDtcblx0XHRjb25zdCBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cdFx0cy5zZXRBdHRyaWJ1dGUoJ3NyYycsIHVybCk7XG5cdFx0cy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9qYXZhc2NyaXB0Jyk7XG5cdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmQocyk7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xuXG5cdC8vIENhbGxiYWNrIGZvciBhdXRvZmlsbFxuXHQvLyBUT0RPOiBBdXRvZmlsbCB0aGUgVVJMLCBhdCBsZWFzdCBmb3IgRE9JXG5cdENpdGVUQi5hdXRvRmlsbCA9IChkYXRhLCB0ZW1wbGF0ZSwgdHlwZSkgPT4ge1xuXHRcdGNvbnN0IGNsID0gYGNpdGUtJHt0ZW1wbGF0ZX0tYDtcblx0XHRsZXQgaSwgajtcblx0XHRsZXQgY29hdXRob3JzO1xuXHRcdCQoYC4ke2NsfXRpdGxlYCkudmFsKGRhdGEudGl0bGUpO1xuXHRcdC8vIEZpbGwgaW4gYXV0aG9yc1xuXHRcdGlmIChkYXRhLmF1dGhvcnMgJiYgZGF0YS5hdXRob3JzLmxlbmd0aCA+IDApIHtcblx0XHRcdGlmICgkKGAuJHtjbH1sYXN0LWluY3ItMWApLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0Y29uc3QgY2xhc3NlcyA9ICQoYC4ke2NsfWxhc3QtaW5jci0xYCkuZXEoMCkuYXR0cignY2xhc3MnKT8uc3BsaXQoL1xccysvKTtcblx0XHRcdFx0aWYgKCFjbGFzc2VzKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxldCBncm91cCA9IGZhbHNlO1xuXHRcdFx0XHRjb25zdCBwYXR0ID0gL2NpdGUtW14tXSo/LWluY3ItKC4qKS87XG5cdFx0XHRcdGZvciAoY29uc3QgY2xhc3NfIG9mIGNsYXNzZXMpIHtcblx0XHRcdFx0XHRpZiAocGF0dC5leGVjKGNsYXNzXykpIHtcblx0XHRcdFx0XHRcdFssIGdyb3VwXSA9IHBhdHQuZXhlYyhjbGFzc18pO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdCQoYC4ke2NsfWxhc3QtaW5jci0xYCkudmFsKGRhdGEuYXV0aG9yc1swXVswXSk7XG5cdFx0XHRcdCQoYC4ke2NsfWZpcnN0LWluY3ItMWApLnZhbChkYXRhLmF1dGhvcnNbMF1bMV0pO1xuXHRcdFx0XHRjb25zdCBlbGVtaWQgPSBgI2NpdGUtaW5jci0ke3RlbXBsYXRlfS0ke2dyb3VwfWA7XG5cdFx0XHRcdGZvciAoaSA9IDI7IGkgPCBkYXRhLmF1dGhvcnMubGVuZ3RoICsgMTsgaSsrKSB7XG5cdFx0XHRcdFx0JChlbGVtaWQpLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdFx0XHRcdFx0JChgLiR7Y2x9bGFzdC1pbmNyLSR7aS50b1N0cmluZygpfWApLnZhbChkYXRhLmF1dGhvcnNbaSAtIDFdWzBdKTtcblx0XHRcdFx0XHQkKGAuJHtjbH1maXJzdC1pbmNyLSR7aS50b1N0cmluZygpfWApLnZhbChkYXRhLmF1dGhvcnNbaSAtIDFdWzFdKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICgkKGAuJHtjbH1hdXRob3ItaW5jci0xYCkubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRjb25zdCBjbGFzc2VzID0gJChgLiR7Y2x9YXV0aG9yLWluY3ItMWApLmVxKDApLmF0dHIoJ2NsYXNzJyk/LnNwbGl0KC9cXHMrLyk7XG5cdFx0XHRcdGlmICghY2xhc3Nlcykge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsZXQgZ3JvdXAgPSBmYWxzZTtcblx0XHRcdFx0Y29uc3QgcGF0dCA9IC9jaXRlLVteLV0qPy1pbmNyLSguKikvO1xuXHRcdFx0XHRmb3IgKGNvbnN0IGNsYXNzXyBvZiBjbGFzc2VzKSB7XG5cdFx0XHRcdFx0aWYgKHBhdHQuZXhlYyhjbGFzc18pKSB7XG5cdFx0XHRcdFx0XHRbLCBncm91cF0gPSBwYXR0LmV4ZWMoY2xhc3NfKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHQkKGAuJHtjbH1hdXRob3ItaW5jci0xYCkudmFsKGRhdGEuYXV0aG9yc1swXS5qb2luKCcsICcpKTtcblx0XHRcdFx0Y29uc3QgZWxlbWlkID0gYCNjaXRlLWluY3ItJHt0ZW1wbGF0ZX0tJHtncm91cH1gO1xuXHRcdFx0XHRmb3IgKGkgPSAyOyBpIDwgZGF0YS5hdXRob3JzLmxlbmd0aCArIDE7IGkrKykge1xuXHRcdFx0XHRcdCQoZWxlbWlkKS50cmlnZ2VyKCdjbGljaycpO1xuXHRcdFx0XHRcdCQoYC4ke2NsfWF1dGhvci1pbmNyLSR7aS50b1N0cmluZygpfWApLnZhbChkYXRhLmF1dGhvcnNbaSAtIDFdLmpvaW4oJywgJykpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKCQoYC4ke2NsfWxhc3QxYCkubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRmb3IgKGkgPSAwOyBkYXRhLmF1dGhvcnMgJiYgaSA8IGRhdGEuYXV0aG9ycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmICgkKGAuJHtjbH1sYXN0JHtpICsgMX1gKS5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdCQoYC4ke2NsfWxhc3Qke2kgKyAxfWApLnZhbChkYXRhLmF1dGhvcnNbaV1bMF0pO1xuXHRcdFx0XHRcdFx0JChgLiR7Y2x9Zmlyc3Qke2kgKyAxfWApLnZhbChkYXRhLmF1dGhvcnNbaV1bMV0pO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRjb2F1dGhvcnMgPSBbXTtcblx0XHRcdFx0XHRcdGZvciAoaiA9IGk7IGogPCBkYXRhLmF1dGhvcnMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRcdFx0Y29hdXRob3JzLnB1c2goZGF0YS5hdXRob3JzW2pdLmpvaW4oJywgJykpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0JChgLiR7Y2x9Y29hdXRob3JzYCkudmFsKGNvYXV0aG9ycy5qb2luKCc7ICcpKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICgkKGAuJHtjbH1hdXRob3IxYCkubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdGNvbnN0IGF1dGhvcnMgPSBbXTtcblx0XHRcdFx0Zm9yIChpID0gMDsgZGF0YS5hdXRob3JzICYmIGkgPCBkYXRhLmF1dGhvcnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRhdXRob3JzLnB1c2goZGF0YS5hdXRob3JzW2ldLmpvaW4oJywgJykpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdCQoYC4ke2NsfWF1dGhvcnNgKS52YWwoYXV0aG9ycy5qb2luKCc7ICcpKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZvciAoaSA9IDA7IGRhdGEuYXV0aG9ycyAmJiBpIDwgZGF0YS5hdXRob3JzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKCQoYC4ke2NsfWF1dGhvciR7aSArIDF9YCkubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHQkKGAuJHtjbH1hdXRob3Ike2kgKyAxfWApLnZhbChkYXRhLmF1dGhvcnNbaV0uam9pbignLCAnKSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGNvYXV0aG9ycyA9IFtdO1xuXHRcdFx0XHRcdFx0Zm9yIChqID0gaTsgaiA8IGRhdGEuYXV0aG9ycy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRcdFx0XHRjb2F1dGhvcnMucHVzaChkYXRhLmF1dGhvcnNbal0uam9pbignLCAnKSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQkKGAuJHtjbH1jb2F1dGhvcnNgKS52YWwoY29hdXRob3JzLmpvaW4oJzsgJykpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gRm9ybWF0IHBhcnRpYWwgZGF0ZXMgb2YgdGhlIGZvcm1hdCBZWVlZLU1NLCBZWVlZLU1NLVhYLCBvciBZWVlZLU1NLUREIGNvcnJlY3RseVxuXHRcdGlmIChkYXRhLmRhdGUpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IERUID0gbmV3IERhdGUoZGF0YS5kYXRlKTtcblx0XHRcdFx0aWYgKC9eXFxkezR9LVxcZHsyfSgtWFgpPyQvaS50ZXN0KGRhdGEuZGF0ZSkpIHtcblx0XHRcdFx0XHRkYXRhLmRhdGUgPSBkYXRhLmRhdGUucmVwbGFjZSgnLVhYJywgJycpO1xuXHRcdFx0XHRcdCQoYC4ke2NsfWRhdGVgKS52YWwoQ2l0ZVRCLmZvcm1hdERhdGUoRFQsIGZhbHNlLCB0cnVlKSk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoL15cXGR7NH0tXFxkezJ9LVxcZHsyfT8vaS50ZXN0KGRhdGEuZGF0ZSkpIHtcblx0XHRcdFx0XHQkKGAuJHtjbH1kYXRlYCkudmFsKENpdGVUQi5mb3JtYXREYXRlKERULCB0cnVlLCB0cnVlKSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0JChgLiR7Y2x9ZGF0ZWApLnZhbChkYXRhLmRhdGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0LyogZW1wdHkgKi9cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0JChgLiR7Y2x9ZGF0ZWApLnZhbChkYXRhLmRhdGUpO1xuXHRcdH1cblxuXHRcdHN3aXRjaCAodHlwZSkge1xuXHRcdFx0Y2FzZSAncG1pZCc6XG5cdFx0XHRjYXNlICdkb2knOlxuXHRcdFx0XHQkKGAuJHtjbH1qb3VybmFsYCkudmFsKGRhdGEuam91cm5hbCk7XG5cdFx0XHRcdCQoYC4ke2NsfXZvbHVtZWApLnZhbChkYXRhLnZvbHVtZSk7XG5cdFx0XHRcdCQoYC4ke2NsfWlzc3VlYCkudmFsKGRhdGEuaXNzdWUpO1xuXHRcdFx0XHQkKGAuJHtjbH1wYWdlc2ApLnZhbChkYXRhLnBhZ2VzKTtcblx0XHRcdFx0aWYgKHR5cGUgPT09ICdwbWlkJyAmJiBkYXRhLmRvaSkge1xuXHRcdFx0XHRcdCQoYC4ke2NsfWRvaWApLnZhbChkYXRhLmRvaSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAnaXNibic6XG5cdFx0XHRcdCQoYC4ke2NsfXB1Ymxpc2hlcmApLnZhbChkYXRhLnB1Ymxpc2hlcik7XG5cdFx0XHRcdCQoYC4ke2NsfWxvY2F0aW9uYCkudmFsKGRhdGEubG9jYXRpb24pO1xuXHRcdFx0XHQkKGAuJHtjbH1lZGl0aW9uYCkudmFsKGRhdGEuZWRpdGlvbik7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ3VybCc6XG5cdFx0XHRcdCQoYC4ke2NsfWpvdXJuYWxgKS52YWwoZGF0YS5qb3VybmFsKTtcblx0XHRcdFx0JChgLiR7Y2x9dm9sdW1lYCkudmFsKGRhdGEudm9sdW1lKTtcblx0XHRcdFx0JChgLiR7Y2x9aXNzdWVgKS52YWwoZGF0YS5pc3N1ZSk7XG5cdFx0XHRcdCQoYC4ke2NsfXBhZ2VzYCkudmFsKGRhdGEucGFnZXMpO1xuXHRcdFx0XHQkKGAuJHtjbH1wdWJsaXNoZXJgKS52YWwoZGF0YS5wdWJsaXNoZXIpO1xuXHRcdFx0XHQkKGAuJHtjbH1lZGl0aW9uYCkudmFsKGRhdGEuZWRpdGlvbik7XG5cdFx0XHRcdCQoYC4ke2NsfWlzYm5gKS52YWwoZGF0YS5pc2JuKTtcblx0XHRcdFx0JChgLiR7Y2x9aXNzbmApLnZhbChkYXRhLmlzc24pO1xuXHRcdFx0XHQkKGAuJHtjbH1kb2lgKS52YWwoZGF0YS5kb2kpO1xuXHRcdFx0XHQvLyBcImVuLVVTXCIgaXNuJ3QgYSB2YWxpZCB2YWx1ZSBmb3IgdGhlIGxhbmd1YWdlIHBhcmFtZXRlclxuXHRcdFx0XHRpZiAoZGF0YS5sYW5ndWFnZSAmJiBkYXRhLmxhbmd1YWdlICE9PSAnZW4tVVMnICYmIGRhdGEubGFuZ3VhZ2UgIT09ICdlbi1HQicpIHtcblx0XHRcdFx0XHQkKGAuJHtjbH1sYW5ndWFnZWApLnZhbChkYXRhLmxhbmd1YWdlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQkKGAuJHtjbH1jaGFwdGVyYCkudmFsKGRhdGEuY2hhcHRlcik7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdC8vIE5vIGRlZmF1bHRcblx0XHR9XG5cdH07XG5cblx0Ly8gRk9STSBESUFMT0cgRlVOQ1RJT05TXG5cdC8vIEFkZCBuZXcgaW5jcmVtZW50YWJsZSBmaWVsZHNcblx0Q2l0ZVRCLmluY3JlbWVudEZpZWxkcyA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCB0ZW1wbGF0ZSA9IENpdGVUQi5nZXRPcGVuVGVtcGxhdGUoKTtcblx0XHRjb25zdCBbY3VycmVudHJvd10gPSAkKHRoaXMpLnBhcmVudHMoJ3RyJyk7XG5cdFx0JCh0aGlzKS5wcmV2KCkuY3NzKCd3aWR0aCcsICcxMDAlJyk7XG5cdFx0JCh0aGlzKS5kZXRhY2goKTtcblx0XHRjb25zdCBlbGVtaWQgPSAkKHRoaXMpLmF0dHIoJ2lkJykgPz8gJyc7XG5cdFx0Y29uc3QgcmVzID0gL15jaXRlLWluY3ItKC4qPyktKC4qKSQvLmV4ZWMoZWxlbWlkKTtcblx0XHRpZiAoIXJlcykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBbLCAsIGdyb3VwXSA9IHJlcztcblx0XHRjb25zdCBpbmNyZW1lbnRzID0gdGVtcGxhdGUuaW5jcmVtZW50YWJsZXNbZ3JvdXBdO1xuXHRcdGNvbnN0IHtmaWVsZHN9ID0gaW5jcmVtZW50cztcblx0XHR0ZW1wbGF0ZS5pbmNyZW1lbnRhYmxlc1tncm91cF0udmFsICs9IDE7XG5cdFx0Y29uc3QgdHJzID0gdGVtcGxhdGUubWFrZUZvcm1Jbm5lcihmaWVsZHMsIGZhbHNlKTtcblx0XHR0cnMucmV2ZXJzZSgpO1xuXHRcdGZvciAoY29uc3QgdHIgb2YgdHJzKSB7XG5cdFx0XHQkKGN1cnJlbnRyb3cpLmFmdGVyKHRyKTtcblx0XHR9XG5cdH07XG5cblx0Ly8gZmlsbCB0aGUgYWNjZXNzZGF0ZSBwYXJhbSB3aXRoIHRoZSBjdXJyZW50IGRhdGVcblx0Q2l0ZVRCLmZpbGxBY2Nlc3NkYXRlID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IGVsZW1pZCA9ICQodGhpcykuYXR0cignaWQnKSA/PyAnJztcblx0XHRjb25zdCByZXMgPSAvXmNpdGUtZGF0ZS0oLio/KS0oLiopJC8uZXhlYyhlbGVtaWQpO1xuXHRcdGNvbnN0IFssIGlkXSA9IHJlcztcblx0XHRpZiAoIXJlcykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBbLCAsIGZpZWxkXSA9IHJlcztcblx0XHRjb25zdCBEVCA9IG5ldyBEYXRlKCk7XG5cdFx0Y29uc3QgZGF0ZXN0ciA9IENpdGVUQi5mb3JtYXREYXRlKERUKTtcblx0XHQkKGAjY2l0ZS0ke2lkfS0ke2ZpZWxkfWApLnZhbChkYXRlc3RyKTtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH07XG5cblx0Q2l0ZVRCLmZvcm1hdERhdGUgPSAoRFQsIHVzZWRheSwgdXNlbW9udGgpID0+IHtcblx0XHRpZiAodXNlZGF5ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHVzZWRheSA9IHRydWU7XG5cdFx0fVxuXHRcdGlmICh1c2Vtb250aCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR1c2Vtb250aCA9IHRydWU7XG5cdFx0fVxuXHRcdGxldCBkYXRlc3RyID0gQ2l0ZVRCLmdldE9wdGlvbignZGF0ZSBmb3JtYXQnKTtcblx0XHRsZXQgem1vbnRoID0gJyc7XG5cdFx0bGV0IG1vbnRoID0gRFQuZ2V0VVRDTW9udGgoKSArIDE7XG5cdFx0aWYgKG1vbnRoIDwgMTApIHtcblx0XHRcdHptb250aCA9IGAwJHttb250aC50b1N0cmluZygpfWA7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHptb250aCA9IG1vbnRoLnRvU3RyaW5nKCk7XG5cdFx0fVxuXHRcdG1vbnRoID0gbW9udGgudG9TdHJpbmcoKTtcblx0XHRsZXQgemRhdGUgPSAnJztcblx0XHRsZXQgZGF0ZSA9IERULmdldFVUQ0RhdGUoKTtcblx0XHRpZiAoZGF0ZSA8IDEwKSB7XG5cdFx0XHR6ZGF0ZSA9IGAwJHtkYXRlLnRvU3RyaW5nKCl9YDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0emRhdGUgPSBkYXRlLnRvU3RyaW5nKCk7XG5cdFx0fVxuXHRcdGRhdGUgPSBkYXRlLnRvU3RyaW5nKCk7XG5cdFx0aWYgKHVzZWRheSkge1xuXHRcdFx0ZGF0ZXN0ciA9IGRhdGVzdHIucmVwbGFjZSgnPGRhdGU+JywgZGF0ZSk7XG5cdFx0XHRkYXRlc3RyID0gZGF0ZXN0ci5yZXBsYWNlKCc8emRhdGU+JywgemRhdGUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkYXRlc3RyID0gZGF0ZXN0ci5yZXBsYWNlKCc8ZGF0ZT4nLCAnJyk7XG5cdFx0XHRkYXRlc3RyID0gZGF0ZXN0ci5yZXBsYWNlKCc8emRhdGU+JywgJycpO1xuXHRcdH1cblx0XHRpZiAodXNlbW9udGgpIHtcblx0XHRcdGRhdGVzdHIgPSBkYXRlc3RyLnJlcGxhY2UoJzxtb250aD4nLCBtb250aCk7XG5cdFx0XHRkYXRlc3RyID0gZGF0ZXN0ci5yZXBsYWNlKCc8em1vbnRoPicsIHptb250aCk7XG5cdFx0XHRkYXRlc3RyID0gZGF0ZXN0ci5yZXBsYWNlKCc8bW9udGhuYW1lPicsIENpdGVUQi5nZXRPcHRpb24oJ21vbnRocycpW0RULmdldFVUQ01vbnRoKCldKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZGF0ZXN0ciA9IGRhdGVzdHIucmVwbGFjZSgnPG1vbnRoPicsICcnKTtcblx0XHRcdGRhdGVzdHIgPSBkYXRlc3RyLnJlcGxhY2UoJzx6bW9udGg+JywgJycpO1xuXHRcdFx0ZGF0ZXN0ciA9IGRhdGVzdHIucmVwbGFjZSgnPG1vbnRobmFtZT4nLCAnJyk7XG5cdFx0fVxuXHRcdGRhdGVzdHIgPSBkYXRlc3RyLnJlcGxhY2UoJzx5ZWFyPicsIERULmdldFVUQ0Z1bGxZZWFyKCkudG9TdHJpbmcoKSk7XG5cdFx0cmV0dXJuIGRhdGVzdHIucmVwbGFjZSgvXlsgL1xcLSwuXSooLio/KVsgL1xcLSwuXSokL2csICckMScpOyAvLyBDbGVhbnVwIGFueSBkYW5nbGluZyBzcGFjZXMgb3IgY29ubmVjdG9ycyB0aGF0IG1pZ2h0IHJlc3VsdCBmcm9tIG9taXR0aW5nIGRhdGUvbW9udGhcblx0fTtcblxuXHQvLyBGdW5jdGlvbiBjYWxsZWQgYWZ0ZXIgdGhlIHJlZiBsaXN0IGlzIGxvYWRlZCwgdG8gYWN0dWFsbHkgc2V0IHRoZSBjb250ZW50cyBvZiB0aGUgbmFtZWQgcmVmIGRpYWxvZ1xuXHQvLyBVbnRpbCB0aGUgbGlzdCBpcyBsb2FkZWQsIGl0cyBqdXN0IGEgXCJMb2FkaW5nXCIgcGxhY2Vob2xkZXJcblx0Q2l0ZVRCLnNldHVwTmFtZWRSZWZzID0gKCkgPT4ge1xuXHRcdGNvbnN0IG5hbWVzID0gW107XG5cdFx0bGV0IGk7XG5cdFx0Zm9yIChpID0gMDsgaSA8IENpdGVUQi5tYWluUmVmTGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKCFDaXRlVEIubWFpblJlZkxpc3RbaV0uc2hvcnR0YWcgJiYgQ2l0ZVRCLm1haW5SZWZMaXN0W2ldLnJlZm5hbWUpIHtcblx0XHRcdFx0bmFtZXMucHVzaChDaXRlVEIubWFpblJlZkxpc3RbaV0pO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjb25zdCBzdHVmZiA9ICQoJzxkaXY+Jyk7XG5cdFx0JGJvZHkuZmluZCgnI2NpdGV0b29sYmFyLW5hbWVkcmVmcycpLmh0bWwoc3R1ZmYpO1xuXHRcdGlmIChuYW1lcy5sZW5ndGggPT09IDApIHtcblx0XHRcdHN0dWZmLmh0bWwoZ2V0TWVzc2FnZSgnY2l0ZS1uby1uYW1lZHJlZnMnKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0dWZmLmh0bWwoZ2V0TWVzc2FnZSgnY2l0ZS1uYW1lZHJlZnMtaW50cm8nKSk7XG5cdFx0XHRjb25zdCBzZWxlY3QgPSAkKCc8c2VsZWN0PicpLmF0dHIoJ2lkJywgJ2NpdGUtbmFtZWRyZWYtc2VsZWN0Jyk7XG5cdFx0XHRzZWxlY3QuYXBwZW5kKCQoJzxvcHRpb24+JykuYXR0cigndmFsdWUnLCAnJykudGV4dChnZXRNZXNzYWdlKCdjaXRlLW5hbWVkLXJlZnMtZHJvcGRvd24nKSkpO1xuXHRcdFx0Zm9yIChpID0gMDsgaSA8IG5hbWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHNlbGVjdC5hcHBlbmQoJCgnPG9wdGlvbj4nKS50ZXh0KG5hbWVzW2ldLnJlZm5hbWUpKTtcblx0XHRcdH1cblx0XHRcdHN0dWZmLmFmdGVyKHNlbGVjdCk7XG5cdFx0XHRzZWxlY3QuYmVmb3JlKCc8YnI+Jyk7XG5cdFx0XHRjb25zdCBwcmV2bGFiZWwgPSAkKCc8ZGl2PicpXG5cdFx0XHRcdC5hdHRyKCdpZCcsICdjaXRlLW5yZWYtcHJldmlldy1sYWJlbCcpXG5cdFx0XHRcdC5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpXG5cdFx0XHRcdC5odG1sKGdldE1lc3NhZ2UoJ2NpdGUtcmF3LXByZXZpZXcnKSk7XG5cdFx0XHRzZWxlY3QuYWZ0ZXIocHJldmxhYmVsKTtcblx0XHRcdHByZXZsYWJlbC5iZWZvcmUoJzxicj48YnI+Jyk7XG5cdFx0XHRwcmV2bGFiZWwuYWZ0ZXIoJzxkaXYgaWQ9XCJjaXRlLW5hbWVkcmVmLXByZXZpZXdcIiBzdHlsZT1cInBhZGRpbmc6MC41ZW07IGZvbnQtc2l6ZToxMTAlXCIgLz4nKTtcblx0XHRcdGNvbnN0IHBhcnNlbGFiZWwgPSAkKCc8c3Bhbj4nKVxuXHRcdFx0XHQuYXR0cignaWQnLCAnY2l0ZS1wYXJzZWQtbGFiZWwnKVxuXHRcdFx0XHQuY3NzKCdkaXNwbGF5JywgJ25vbmUnKVxuXHRcdFx0XHQuaHRtbChnZXRNZXNzYWdlKCdjaXRlLXBhcnNlZC1sYWJlbCcpKTtcblx0XHRcdCRib2R5LmZpbmQoJyNjaXRlLW5hbWVkcmVmLXByZXZpZXcnKS5hZnRlcihwYXJzZWxhYmVsKTtcblx0XHRcdHBhcnNlbGFiZWwuYWZ0ZXIoJzxkaXYgaWQ9XCJjaXRlLW5hbWVkcmVmLXBhcnNlZFwiIHN0eWxlPVwicGFkZGluZy1ib3R0b206MC41ZW07IGZvbnQtc2l6ZToxMTAlXCIgLz4nKTtcblx0XHRcdGNvbnN0IGxpbmsgPSAkKCc8YT4nKVxuXHRcdFx0XHQuYXR0cih7XG5cdFx0XHRcdFx0aHJlZjogJyMnLFxuXHRcdFx0XHRcdGlkOiAnY2l0ZS1ucmVmLXBhcnNlJyxcblx0XHRcdFx0fSlcblx0XHRcdFx0LmNzcyh7XG5cdFx0XHRcdFx0bWFyZ2luOiAnMCAxZW0gMCAxZW0nLFxuXHRcdFx0XHRcdGRpc3BsYXk6ICdub25lJyxcblx0XHRcdFx0XHRjb2xvcjogJyMwMDAwOGInLFxuXHRcdFx0XHR9KTtcblx0XHRcdGxpbmsuaHRtbChnZXRNZXNzYWdlKCdjaXRlLWZvcm0tcGFyc2UnKSk7XG5cdFx0XHQkYm9keS5maW5kKCcjY2l0ZS1uYW1lZHJlZi1wYXJzZWQnKS5hZnRlcihsaW5rKTtcblxuXHRcdFx0JGJvZHkuZmluZCgnI2NpdGUtbmFtZWRyZWYtc2VsZWN0Jykub24oJ2NoYW5nZScsIENpdGVUQi5uYW1lZFJlZlNlbGVjdENsaWNrKTtcblx0XHRcdCRib2R5LmZpbmQoJyNjaXRlLW5yZWYtcGFyc2UnKS5vbignY2xpY2snLCBDaXRlVEIubnJlZlBhcnNlQ2xpY2spO1xuXHRcdH1cblx0fTtcblxuXHQvLyBGdW5jdGlvbiB0byBnZXQgdGhlIGVycm9yY2hlY2sgZm9ybSBIVE1MXG5cdENpdGVUQi5zZXR1cEVycm9yQ2hlY2sgPSAoKSA9PiB7XG5cdFx0Y29uc3QgZm9ybSA9ICQoJzxkaXY+JykuYXR0cignaWQnLCAnY2l0ZS1lcnJvcmNoZWNrLWhlYWRpbmcnKS5odG1sKGdldE1lc3NhZ2UoJ2NpdGUtZXJyb3JjaGVjay1oZWFkaW5nJykpO1xuXHRcdGNvbnN0IHVsID0gJCgnPHVsPicpLmF0dHIoJ2lkJywgJ2NpdGUtZXJyY2hlY2stbGlzdCcpO1xuXHRcdGxldCB0ZXN0O1xuXHRcdGZvciAoY29uc3QgdCBpbiBDaXRlVEIuRXJyb3JDaGVja3MpIHtcblx0XHRcdGlmIChPYmplY3QuaGFzT3duKENpdGVUQi5FcnJvckNoZWNrcywgdCkpIHtcblx0XHRcdFx0dGVzdCA9IENpdGVUQi5FcnJvckNoZWNrc1t0XTtcblx0XHRcdFx0dWwuYXBwZW5kKHRlc3QuZ2V0Um93KCkpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRmb3JtLmFwcGVuZCh1bCk7XG5cdFx0JGJvZHkuZmluZCgnI2NpdGV0b29sYmFyLWVycm9yY2hlY2snKS5odG1sKGZvcm0uaHRtbCgpKTtcblx0fTtcblxuXHQvLyBDYWxsYmFjayBmdW5jdGlvbiBmb3IgcGFyc2VkIHByZXZpZXdcblx0Q2l0ZVRCLmZpbGxOcmVmUHJldmlldyA9IChwYXJzZWQpID0+IHtcblx0XHQkYm9keS5maW5kKCcjY2l0ZS1wYXJzZWQtbGFiZWwnKS5zaG93KCk7XG5cdFx0JGJvZHkuZmluZCgnI2NpdGUtbmFtZWRyZWYtcGFyc2VkJykuaHRtbChwYXJzZWQpO1xuXHR9O1xuXG5cdC8vIENsaWNrIGhhbmRsZXIgZm9yIHRoZSBuYW1lZC1yZWYgcGFyc2VkIHByZXZpZXdcblx0Q2l0ZVRCLm5yZWZQYXJzZUNsaWNrID0gKCkgPT4ge1xuXHRcdGNvbnN0IGNob2ljZSA9ICRib2R5LmZpbmQoJyNjaXRlLW5hbWVkcmVmLXNlbGVjdCcpLnZhbCgpO1xuXHRcdGlmIChjaG9pY2UgPT09ICcnKSB7XG5cdFx0XHQkYm9keS5maW5kKCcjY2l0ZS1wYXJzZWQtbGFiZWwnKS5oaWRlKCk7XG5cdFx0XHQkYm9keS5maW5kKCcjY2l0ZS1uYW1lZHJlZi1wYXJzZWQnKS50ZXh0KCcnKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0JGJvZHkuZmluZCgnI2NpdGUtbnJlZi1wYXJzZScpLmhpZGUoKTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IENpdGVUQi5tYWluUmVmTGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKCFDaXRlVEIubWFpblJlZkxpc3RbaV0uc2hvcnR0YWcgJiYgQ2l0ZVRCLm1haW5SZWZMaXN0W2ldLnJlZm5hbWUgPT09IGNob2ljZSkge1xuXHRcdFx0XHRDaXRlVEIucGFyc2UoQ2l0ZVRCLm1haW5SZWZMaXN0W2ldLmNvbnRlbnQsIENpdGVUQi5maWxsTnJlZlByZXZpZXcpO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdC8vIENsaWNrIGhhbmRsZXIgZm9yIHRoZSBuYW1lZC1yZWYgZHJvcGRvd25cblx0Q2l0ZVRCLmxhc3RuYW1lZHJlZmNob2ljZSA9ICcnO1xuXHRDaXRlVEIubmFtZWRSZWZTZWxlY3RDbGljayA9ICgpID0+IHtcblx0XHRjb25zdCBjaG9pY2UgPSAkYm9keS5maW5kKCcjY2l0ZS1uYW1lZHJlZi1zZWxlY3QnKS52YWwoKTtcblx0XHRpZiAoQ2l0ZVRCLmxhc3RuYW1lZHJlZmNob2ljZSA9PT0gY2hvaWNlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdENpdGVUQi5sYXN0bmFtZWRyZWZjaG9pY2UgPSBjaG9pY2U7XG5cdFx0JGJvZHkuZmluZCgnI2NpdGUtcGFyc2VkLWxhYmVsJykuaGlkZSgpO1xuXHRcdCRib2R5LmZpbmQoJyNjaXRlLW5hbWVkcmVmLXBhcnNlZCcpLnRleHQoJycpO1xuXHRcdGlmIChjaG9pY2UgPT09ICcnKSB7XG5cdFx0XHQkYm9keS5maW5kKCcjY2l0ZS1ucmVmLXByZXZpZXctbGFiZWwnKS5oaWRlKCk7XG5cdFx0XHQkYm9keS5maW5kKCcjY2l0ZS1uYW1lZHJlZi1wcmV2aWV3JykudGV4dCgnJyk7XG5cdFx0XHQkYm9keS5maW5kKCcjY2l0ZS1ucmVmLXBhcnNlJykuaGlkZSgpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IENpdGVUQi5tYWluUmVmTGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKCFDaXRlVEIubWFpblJlZkxpc3RbaV0uc2hvcnR0YWcgJiYgQ2l0ZVRCLm1haW5SZWZMaXN0W2ldLnJlZm5hbWUgPT09IGNob2ljZSkge1xuXHRcdFx0XHQkYm9keS5maW5kKCcjY2l0ZS1ucmVmLXByZXZpZXctbGFiZWwnKS5zaG93KCk7XG5cdFx0XHRcdCRib2R5LmZpbmQoJyNjaXRlLW5hbWVkcmVmLXByZXZpZXcnKS50ZXh0KENpdGVUQi5tYWluUmVmTGlzdFtpXS5jb250ZW50KTtcblx0XHRcdFx0aWYgKENpdGVUQi5nZXRPcHRpb24oJ2F1dG9wYXJzZScpKSB7XG5cdFx0XHRcdFx0Q2l0ZVRCLm5yZWZQYXJzZUNsaWNrKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0JGJvZHkuZmluZCgnI2NpdGUtbnJlZi1wYXJzZScpLnNob3coKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHQvLyBjYWxsYmFjayBmdW5jdGlvbiBmb3IgcGFyc2VkIHByZXZpZXdcblx0Q2l0ZVRCLmZpbGxUZW1wbGF0ZVByZXZpZXcgPSAodGV4dCkgPT4ge1xuXHRcdGNvbnN0IHRlbXBsYXRlID0gQ2l0ZVRCLmdldE9wZW5UZW1wbGF0ZSgpO1xuXHRcdGNvbnN0IGRpdiA9ICQoYCNjaXRldG9vbGJhci0ke0NpdGVUQi5lc2NTdHIodGVtcGxhdGUuc2hvcnRmb3JtKX1gKTtcblx0XHRkaXYuZmluZCgnLmNpdGUtcHJldi1wYXJzZWQtbGFiZWwnKS5zaG93KCk7XG5cdFx0ZGl2LmZpbmQoJy5jaXRlLXByZXZpZXctcGFyc2VkJykuaHRtbCh0ZXh0KTtcblx0fTtcblxuXHQvLyBDbGljayBoYW5kbGVyIGZvciB0ZW1wbGF0ZSBwYXJzZWQgcHJldmlld1xuXHRDaXRlVEIucHJldlBhcnNlQ2xpY2sgPSAoKSA9PiB7XG5cdFx0Y29uc3QgcmVmID0gQ2l0ZVRCLmdldFJlZih0cnVlLCBmYWxzZSk7XG5cdFx0Y29uc3QgdGVtcGxhdGUgPSBDaXRlVEIuZ2V0T3BlblRlbXBsYXRlKCk7XG5cdFx0Y29uc3QgZGl2ID0gJChgI2NpdGV0b29sYmFyLSR7Q2l0ZVRCLmVzY1N0cih0ZW1wbGF0ZS5zaG9ydGZvcm0pfWApO1xuXHRcdGRpdi5maW5kKCcuY2l0ZS1wcmV2LXBhcnNlJykuaGlkZSgpO1xuXHRcdENpdGVUQi5wYXJzZShyZWYsIENpdGVUQi5maWxsVGVtcGxhdGVQcmV2aWV3KTtcblx0fTtcblxuXHQvLyBTaG93L2hpZGUgdGhlIGV4dHJhIGZpZWxkcyBpbiB0aGUgZGlhbG9nIGJveFxuXHRDaXRlVEIuc2hvd0hpZGVFeHRyYSA9ICgpID0+IHtcblx0XHRjb25zdCB0ZW1wbGF0ZSA9IENpdGVUQi5nZXRPcGVuVGVtcGxhdGUoKTtcblx0XHRjb25zdCBkaXYgPSAkKGAjY2l0ZXRvb2xiYXItJHtDaXRlVEIuZXNjU3RyKHRlbXBsYXRlLnNob3J0Zm9ybSl9YCk7XG5cdFx0Y29uc3Qgc2V0dGluZyA9IGRpdi5maW5kKCcuY2l0ZS1mb3JtLXN0YXR1cycpLnZhbCgpO1xuXHRcdGlmIChzZXR0aW5nID09PSAnY2xvc2VkJykge1xuXHRcdFx0ZGl2LmZpbmQoJy5jaXRlLWZvcm0tc3RhdHVzJykudmFsKCdvcGVuJyk7XG5cdFx0XHRkaXYuZmluZCgnLmNpdGUtZXh0cmEtZmllbGRzJykuc2hvdygxLCAoKSA9PiB7XG5cdFx0XHRcdC8vIGpRdWVyeSBhZGRzIGBkaXNwbGF5OiBibG9ja2AsIHdoaWNoIHNjcmV3cyB0aGluZ3MgdXBcblx0XHRcdFx0ZGl2LmZpbmQoJy5jaXRlLWV4dHJhLWZpZWxkcycpLmNzcyh7XG5cdFx0XHRcdFx0d2lkdGg6ICcxMDAlJyxcblx0XHRcdFx0XHQnYmFja2dyb3VuZC1jb2xvcic6ICd0cmFuc3BhcmVudCcsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRpdi5maW5kKCcuY2l0ZS1mb3JtLXN0YXR1cycpLnZhbCgnY2xvc2VkJyk7XG5cdFx0XHRkaXYuZmluZCgnLmNpdGUtZXh0cmEtZmllbGRzJykuaGlkZSgpO1xuXHRcdH1cblx0fTtcblxuXHQvLyBSZXNldHMgZm9ybSBmaWVsZHMgYW5kIHByZXZpZXdzXG5cdC8vIFJlc2V0cyBmb3JtIGZpZWxkcyBhbmQgcHJldmlld3Ncblx0Q2l0ZVRCLnJlc2V0Rm9ybSA9ICgpID0+IHtcblx0XHRjb25zdCB0ZW1wbGF0ZSA9IENpdGVUQi5nZXRPcGVuVGVtcGxhdGUoKTtcblx0XHRjb25zdCBkaXYgPSAkKGAjY2l0ZXRvb2xiYXItJHtDaXRlVEIuZXNjU3RyKHRlbXBsYXRlLnNob3J0Zm9ybSl9YCk7XG5cdFx0ZGl2Lmh0bWwodGVtcGxhdGUuZ2V0Rm9ybSgpKTtcblx0fTtcblxuXHQvLyBTVFJJTkcgVVRJTElUWSBGVU5DVElPTlNcblx0Ly8gUmV0dXJucyBhIHN0cmluZyBxdW90ZWQgYXMgbmVjZXNzYXJ5IGZvciBuYW1lL2dyb3VwIGF0dHJpYnV0ZXNcblx0Q2l0ZVRCLmdldFF1b3RlZFN0cmluZyA9IChzKSA9PiB7XG5cdFx0Y29uc3Qgc3EgPSAvJy8udGVzdChzKTsgLy8gc2luZ2xlIHF1b3Rlc1xuXHRcdGNvbnN0IGRxID0gL1wiLy50ZXN0KHMpOyAvLyBkb3VibGUgcXVvdGVzXG5cdFx0aWYgKCFzcSAmJiAhZHEpIHtcblx0XHRcdC8vIEFsd2F5cyBxdW90ZXMgZm9yIG5vbi1sYXRpbiBhbHBoYWJldFxuXHRcdFx0cmV0dXJuIGBcIiR7c31cImA7XG5cdFx0fSBlbHNlIGlmICghZHEpIHtcblx0XHRcdC8vIENhbiB1c2UgZG91YmxlIHF1b3Rlc1xuXHRcdFx0cmV0dXJuIGBcIiR7c31cImA7XG5cdFx0fSBlbHNlIGlmICghc3EpIHtcblx0XHRcdC8vIENhbiB1c2Ugc2luZ2xlIHF1b3Rlc1xuXHRcdFx0cmV0dXJuIGAnJHtzfSdgO1xuXHRcdH1cblx0XHQvLyBIYXMgZG91YmxlIGFuZCBzaW5nbGUgcXVvdGVzXG5cdFx0cyA9IHMucmVwbGFjZSgvXCIvZywgXCInXCIpO1xuXHRcdHJldHVybiBgXCIke3N9XCJgO1xuXHR9O1xuXG5cdC8vIEZpeCB1cCBzdHJpbmdzIGZvciBvdXRwdXQgLSBjYXBpdGFsaXplIGZpcnN0IGNoYXIsIHJlcGxhY2UgdW5kZXJzY29yZXMgd2l0aCBzcGFjZXNcblx0Q2l0ZVRCLmZpeFN0ciA9IChzKSA9PiB7XG5cdFx0cyA9IHMuc2xpY2UoMCwgMSkudG9VcHBlckNhc2UoKSArIHMuc2xpY2UoMSk7XG5cdFx0cyA9IHMucmVwbGFjZSgnXycsICcgJyk7XG5cdFx0cmV0dXJuIHM7XG5cdH07XG5cblx0Ly8gRXNjYXBlIHNwYWNlcyBhbmQgcXVvdGVzIGZvciB1c2UgaW4gSFRNTCBjbGFzc2VzL2lkc1xuXHRDaXRlVEIuZXNjU3RyID0gKHMpID0+IHtcblx0XHRyZXR1cm4gcy5yZXBsYWNlKC9cXHMvZywgJy0nKS5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIikucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpO1xuXHR9O1xuXG5cdC8vIE1JU0MgRlVOQ1RJT05TXG5cdC8vIERldGVybWluZSB3aGljaCB0ZW1wbGF0ZSBmb3JtIGlzIG9wZW4sIGFuZCBnZXQgdGhlIHRlbXBsYXRlIG9iamVjdCBmb3IgaXRcblx0Q2l0ZVRCLmdldE9wZW5UZW1wbGF0ZSA9ICgpID0+IHtcblx0XHRjb25zdCBkaWFsb2dzID0gJGJvZHkuZmluZCgnLnVpLWRpYWxvZy1jb250ZW50LnVpLXdpZGdldC1jb250ZW50OnZpc2libGUnKTtcblx0XHRjb25zdCB0ZW1wbGF0ZW5hbWUgPSAkKGRpYWxvZ3NbMF0pLmZpbmQoJy5jaXRlLXRlbXBsYXRlJykudmFsKCk7XG5cdFx0cmV0dXJuIENpdGVUQi5UZW1wbGF0ZXNbdGVtcGxhdGVuYW1lXTtcblx0fTtcblxuXHQvLyBEaXNwbGF5IHRoZSByZXBvcnQgZm9yIHRoZSBlcnJvciBjaGVja3Ncblx0Q2l0ZVRCLmRpc3BsYXlFcnJvcnMgPSAoZXJyb3JzKSA9PiB7XG5cdFx0JGJvZHkuZmluZCgnI2NpdGUtZXJyLXJlcG9ydCcpLnJlbW92ZSgpO1xuXHRcdGNvbnN0IHRhYmxlID0gJCgnPHRhYmxlPicpLmF0dHIoJ2lkJywgJ2NpdGUtZXJyLXJlcG9ydCcpLmNzcyh7XG5cdFx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdFx0Ym9yZGVyOiAnMXB4IHNvbGlkICNBOUE5QTknLFxuXHRcdFx0J2JhY2tncm91bmQtY29sb3InOiAnI0ZGRUZENScsXG5cdFx0XHRwYWRkaW5nOiAnMC4yNWVtJyxcblx0XHRcdCdtYXJnaW4tdG9wJzogJzAuNWVtJyxcblx0XHR9KTtcblx0XHQkYm9keS5maW5kKCcjZWRpdHBhZ2UtY29weXdhcm4nKS5iZWZvcmUodGFibGUpO1xuXHRcdGxldCB0cjtcblx0XHRjb25zdCB0cjEgPSAkKCc8dHI+JykuY3NzKCd3aWR0aCcsICcxMDAlJyk7XG5cdFx0Y29uc3QgdGgxID0gJCgnPHRoPicpLmNzcygnd2lkdGgnLCAnNjAlJykuY3NzKCdmb250LXNpemUnLCAnMTEwJScpLmh0bWwoZ2V0TWVzc2FnZSgnY2l0ZS1lcnItcmVwb3J0LWhlYWRpbmcnKSk7XG5cdFx0Y29uc3QgdGgyID0gJCgnPHRoPicpLmNzcygnd2lkdGgnLCAnNDAlJykuY3NzKCd0ZXh0LWFsaWduJywgJ3JpZ2h0OycpO1xuXHRcdGNvbnN0IGltID0gJCgnPGltZz4nKS5hdHRyKFxuXHRcdFx0J3NyYycsXG5cdFx0XHQnaHR0cHM6Ly90dS56aG9uZ3dlbi53aWtpL2ltYWdlcy9xaXV3ZW5iYWlrZS96aC90aHVtYi81LzU1L0d0ay1zdG9wLnN2Zy8yMHB4LUd0ay1zdG9wLnN2Zy5wbmcnXG5cdFx0KTtcblx0XHRpbS5hdHRyKCdhbHQnLCBnZXRNZXNzYWdlKCdjaXRlLWVyci1yZXBvcnQtY2xvc2UnKSkuYXR0cigndGl0bGUnLCBnZXRNZXNzYWdlKCdjaXRlLWVyci1yZXBvcnQtY2xvc2UnKSk7XG5cdFx0Y29uc3QgYWQgPSAkKCc8YT4nKS5hdHRyKHtcblx0XHRcdGlkOiAnY2l0ZS1lcnItY2hlY2stY2xvc2UnLFxuXHRcdFx0aHJlZjogJyMnLFxuXHRcdH0pO1xuXHRcdGFkLmFwcGVuZChpbSk7XG5cdFx0dGgyLmFwcGVuZChhZCk7XG5cdFx0dHIxLmFwcGVuZCh0aDEpLmFwcGVuZCh0aDIpO1xuXHRcdHRhYmxlLmFwcGVuZCh0cjEpO1xuXHRcdCRib2R5LmZpbmQoJyNjaXRlLWVyci1jaGVjay1jbG9zZScpLm9uKCdjbGljaycsICgpID0+IHtcblx0XHRcdCRib2R5LmZpbmQoJyNjaXRlLWVyci1yZXBvcnQnKS5yZW1vdmUoKTtcblx0XHR9KTtcblx0XHRpZiAoZXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0dHIgPSAkKCc8dHI+JykuY3NzKCd3aWR0aCcsICcxMDAlJyk7XG5cdFx0XHRjb25zdCB0ZCA9ICQoJzx0ZD4nKVxuXHRcdFx0XHQuY3NzKCd0ZXh0LWFsaWduJywgJ2NlbnRlcicpXG5cdFx0XHRcdC5jc3MoJ21hcmdpbicsICcxLjVweCcpXG5cdFx0XHRcdC5odG1sKGdldE1lc3NhZ2UoJ2NpdGUtZXJyLXJlcG9ydC1lbXB0eScpKTtcblx0XHRcdHRyLmFwcGVuZCh0ZCk7XG5cdFx0XHR0YWJsZS5hcHBlbmQodHIpO1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGZvciAoY29uc3QgZXJyb3IgaW4gZXJyb3JzKSB7XG5cdFx0XHRpZiAoT2JqZWN0Lmhhc093bihlcnJvcnMsIGVycm9yKSkge1xuXHRcdFx0XHRjb25zdCBlcnIgPSBlcnJvcnNbZXJyb3JdO1xuXHRcdFx0XHR0ciA9ICQoJzx0cj4nKS5jc3MoJ3dpZHRoJywgJzEwMCUnKTtcblx0XHRcdFx0Y29uc3QgdGQxID0gJCgnPHRkPicpXG5cdFx0XHRcdFx0LmNzcyh7XG5cdFx0XHRcdFx0XHRib3JkZXI6ICcxcHggc29saWQgIzAwMCcsXG5cdFx0XHRcdFx0XHRtYXJnaW46ICcxLjVweCcsXG5cdFx0XHRcdFx0XHR3aWR0aDogJzYwJScsXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuaHRtbChlcnIuZXJyKTtcblx0XHRcdFx0Y29uc3QgdGQyID0gJCgnPHRkPicpXG5cdFx0XHRcdFx0LmNzcyh7XG5cdFx0XHRcdFx0XHRib3JkZXI6ICcxcHggc29saWQgIzAwMCcsXG5cdFx0XHRcdFx0XHRtYXJnaW46ICcxLjVweCcsXG5cdFx0XHRcdFx0XHR3aWR0aDogJzQwJScsXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuaHRtbChnZXRNZXNzYWdlKGVyci5tc2cpKTtcblx0XHRcdFx0dHIuYXBwZW5kKHRkMSkuYXBwZW5kKHRkMik7XG5cdFx0XHRcdHRhYmxlLmFwcGVuZCh0cik7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdC8vIExvYWQgY29uZmlndXJhdGlvbiBmb3Igc2l0ZVxuXHRyZWZUb29sYmFyQ29uZmlnKCk7XG5cblx0Ly8gRW5kIG9mIGNvZGUgbG9hZGVkIG9ubHkgb24gZWRpdFxufTtcblxuZXhwb3J0IHtyZWZUb29sYmFyMn07XG4iLCAiY29uc3QgZ2V0TWVzc2FnZSA9IChrZXk6IHN0cmluZywgLi4uYXJnczogc3RyaW5nW10pOiBzdHJpbmcgPT4ge1xuXHQvLyBNZXNzYWdlcyB0aGF0IGNhbiBiZSB1c2VkIGhlcmU6XG5cdC8vICogc2VlIG1lc3NhZ2VzLnRzXG5cdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0cmV0dXJuIGFyZ3MubGVuZ3RoID8gbXcubWVzc2FnZShrZXksIC4uLmFyZ3MpLnBhcnNlKCkgOiBtdy5tZXNzYWdlKGtleSkucGxhaW4oKTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiLyogZ2xvYmFsIENpdGVUQiAqL1xuLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlLCBuby1uZXcsIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudCAqL1xuLy8gQHRzLW5vY2hlY2tcbi8qKlxuICogU2l0ZXdpZGUgb3B0aW9ucyBmb3IgdGhlIHRoZSBDaXRlIHRvb2xiYXIgYnV0dG9uOlxuICogQWxsIG9wdGlvbnMgc2hvdWxkIGJlIHNwZWNpZmllZFxuICpcbiAqIFwiZGF0ZSBmb3JtYXRcIiBzZXRzIHRoZSBkYXRlIGZvcm1hdCB1c2VkIGZvciB0aGUgZnVuY3Rpb24gdG8gaW5zZXJ0IHRoZSBjdXJyZW50IGRhdGVcbiAqIEN1cnJlbnQgYXZhaWxhYmxlIG9wdGlvbnM6XG4gKiBkYXRlIC0gdGhlIGRheSBvZiB0aGUgbW9udGhcbiAqIHpkYXRlIC0gZGF5IG9mIHRoZSBtb250aCwgemVybyBwYWRkZWQgdG8gMiBkaWdpdHNcbiAqIG1vbnRobmFtZSAtIFRoZSBtb250aCBuYW1lXG4gKiBtb250aCAtIFRoZSBudW1iZXJpYyBtb250aCAoMS0xMilcbiAqIHptb250aCAtIG51bWVyaWMgbW9udGgsIHplcm8gcGFkZGVkIHRvIDIgZGlnaXRzXG4gKiB5ZWFyIC0gVGhlIGZ1bGwgeWVhciAoNCBkaWdpdHMpXG4gKlxuICogXCJhdXRvZGF0ZSBmaWVsZHNcIiBpcyBhIGxpc3Qgb2YgdGVtcGxhdGUgZmllbGRzIHRoYXQgc2hvdWxkIGhhdmUgYSBidXR0b24gdG8gaW5zZXJ0IHRoZSBjdXJyZW50IGRhdGVcbiAqXG4gKiBcIm1vbnRoc1wiIGlzIGEgbGlzdCBvZiBsb2NhbGl6ZWQgbW9udGggbmFtZXNcbiAqXG4gKiBcIm1vZGFsXCIgLSBpZiB0cnVlLCB0aGUgZGlhbG9ncyB3aWxsIGJlIG1vZGFsIHdpbmRvd3MsIGJsb2NraW5nIGFjY2VzcyB0byB0aGUgcmVzdCBvZiB0aGUgd2luZG93LlxuICogQWxsIGRpYWxvZ3MgaW4gdGhlIHRvb2xiYXIgYXJlIG1vZGFsIGJ5IGRlZmF1bHRcbiAqXG4gKiBcImF1dG9wYXJzZVwiIC0gaWYgdHJ1ZSwgcHJldmlld2luZyBhIHJlZiB3aWxsIGF1dG9tYXRpY2FsbHkgdHJpZ2dlciBhIHByZXZpZXcgb2YgdGhlIHBhcnNlZCB3aWtpdGV4dC5cbiAqIEl0IGlzIG5vdCByZWNvbW1lbmRlZCB0byBzZXQgdGhpcyB0byB0cnVlIGFzIGEgZ2xvYmFsIHNldHRpbmcgYXMgaXQgbWF5IHNsb3cgdGhlIHNjcmlwdCBkb3duIGZvclxuICogcGVvcGxlIHdpdGggc2xvdyBjb25uZWN0aW9ucy5cbiAqXG4gKiBcImV4cGFuZHRlbXBsYXRlc1wiIC0gaWYgdHJ1ZSwgdGVtcGxhdGVzIGFuZCBwYXJzZXIgZnVuY3Rpb25zIHdpbGwgYmUgZXhwYW5kZWQgd2hlbiBnZXR0aW5nIHBhZ2UgdGV4dFxuICogKHRlbXBsYXRlcyBpbnNpZGUgb2YgcmVmIHRhZ3Mgd2lsbCBub3QgYmUgZXhwYW5kZWQpLiBUaGlzIHdpbGwgYWxsb3cgcmVmZXJlbmNlcyBpbnNpZGUgb2YgdGVtcGxhdGVzIG9yXG4gKiByZWZlcmVuY2VzIHVzaW5nIHt7I3RhZzpyZWZ9fSB0byBiZSBsaXN0ZWQgaW4gdGhlIG5hbWVkIHJlZnMgZGlhbG9nIGFuZCBzZWFyY2hlZCBieSBlcnJvciBjaGVja3MuXG4gKiBUaGlzIG1heSBzbG93IGxvYWRpbmcgdGhlIG5hbWVkIHJlZnMgYW5kIGVycm9yIGNoZWNrIGRpYWxvZ3MuXG4gKi9cbmNvbnN0IHJlZlRvb2xiYXJDb25maWcgPSAoKSA9PiB7XG5cdGNvbnN0IHtDaXRlVGVtcGxhdGUsIENpdGVFcnJvckNoZWNrfSA9IHdpbmRvdztcblxuXHRDaXRlVEIuT3B0aW9ucyA9IHtcblx0XHQnZGF0ZSBmb3JtYXQnOiAnPHllYXI+LTx6bW9udGg+LTx6ZGF0ZT4nLFxuXHRcdCdhdXRvZGF0ZSBmaWVsZHMnOiBbJ2FjY2Vzc2RhdGUnXSxcblx0XHRtb250aHM6IFsnMeaciCcsICcy5pyIJywgJzPmnIgnLCAnNOaciCcsICc15pyIJywgJzbmnIgnLCAnN+aciCcsICc45pyIJywgJznmnIgnLCAnMTDmnIgnLCAnMTHmnIgnLCAnMTLmnIgnXSxcblx0XHRtb2RhbDogdHJ1ZSxcblx0XHRhdXRvcGFyc2U6IHRydWUsXG5cdFx0ZXhwYW5kdGVtcGxhdGVzOiBmYWxzZSxcblx0fTtcblxuXHQvLyBDaXRlIHRlbXBsYXRlIGRlZmluaXRpb25zXG5cdG5ldyBDaXRlVGVtcGxhdGUoXG5cdFx0J2NpdGUgd2ViJyxcblx0XHQnd2ViJyxcblx0XHRbXG5cdFx0XHQvLyBCYXNpYyBmaWVsZHNcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdhdXRob3I8Tj4nLFxuXHRcdFx0XHRpbmNyZW1lbnRfZ3JvdXA6ICdhdXRob3JfYWx0Jyxcblx0XHRcdFx0aW5jcmVtZW50X2J1dHRvbjogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAndGl0bGUnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICd0aXRsZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3VybCcsXG5cdFx0XHRcdGF1dG9maWxsaWQ6ICd1cmwnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICd3ZWJzaXRlJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnam91cm5hbCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3B1Ymxpc2hlcicsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ3B1Ymxpc2hlcicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2FjY2Vzc2RhdGUnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdyZWYnLFxuXHRcdFx0XHR0b29sdGlwOiAnY2l0ZS1yZWYtdG9vbHRpcCcsXG5cdFx0XHR9LFxuXHRcdF0sXG5cdFx0W1xuXHRcdFx0Ly8gRXhwYW5kZWQgZmllbGRzXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnYXV0aG9ybGluazxOPicsXG5cdFx0XHRcdHRvb2x0aXA6ICdjaXRlLWF1dGhvcmxpbmstdG9vbHRpcCcsXG5cdFx0XHRcdGluY3JlbWVudF9ncm91cDogJ2F1dGhvcmxpbmsnLFxuXHRcdFx0XHRpbmNyZW1lbnRfYnV0dG9uOiB0cnVlLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdsYXN0PE4+Jyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnbGFzdC1pbmNyJyxcblx0XHRcdFx0aW5jcmVtZW50X2dyb3VwOiAnYXV0aG9yJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnZmlyc3Q8Tj4nLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdmaXJzdC1pbmNyJyxcblx0XHRcdFx0aW5jcmVtZW50X2dyb3VwOiAnYXV0aG9yJyxcblx0XHRcdFx0aW5jcmVtZW50X2J1dHRvbjogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnbG9jYXRpb24nLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdwYWdlJyxcblx0XHRcdFx0dG9vbHRpcDogJ2NpdGUtcGFnZS10b29sdGlwJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAncGFnZXMnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdwYWdlcycsXG5cdFx0XHRcdHRvb2x0aXA6ICdjaXRlLXBhZ2VzLXRvb2x0aXAnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdsYW5ndWFnZScsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2xhbmd1YWdlJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnZm9ybWF0Jyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnZG9pJyxcblx0XHRcdFx0YXV0b2ZpbGxpZDogJ2RvaScsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2RvaScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2RhdGUnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdkYXRlJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAncXVvdGUnLFxuXHRcdFx0fSxcblx0XHRdXG5cdCk7XG5cdG5ldyBDaXRlVGVtcGxhdGUoXG5cdFx0J2NpdGUgbmV3cycsXG5cdFx0J25ld3MnLFxuXHRcdFtcblx0XHRcdC8vIEJhc2ljIGZpZWxkc1xuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2F1dGhvcjxOPicsXG5cdFx0XHRcdGluY3JlbWVudF9ncm91cDogJ2F1dGhvcl9hbHQnLFxuXHRcdFx0XHRpbmNyZW1lbnRfYnV0dG9uOiB0cnVlLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICd0aXRsZScsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ3RpdGxlJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAndXJsJyxcblx0XHRcdFx0YXV0b2ZpbGxpZDogJ3VybCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2FjY2Vzc2RhdGUnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICd3b3JrJyxcblx0XHRcdFx0dG9vbHRpcDogJ2NpdGUtd29yay10b29sdGlwJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnam91cm5hbCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2FnZW5jeScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2lzc3VlJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAncHVibGlzaGVyJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAncHVibGlzaGVyJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnZGF0ZScsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2RhdGUnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdyZWYnLFxuXHRcdFx0XHR0b29sdGlwOiAnY2l0ZS1yZWYtdG9vbHRpcCcsXG5cdFx0XHR9LFxuXHRcdF0sXG5cdFx0W1xuXHRcdFx0Ly8gRXhwYW5kZWQgZmllbGRzXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnYXV0aG9ybGluazxOPicsXG5cdFx0XHRcdHRvb2x0aXA6ICdjaXRlLWF1dGhvcmxpbmstdG9vbHRpcCcsXG5cdFx0XHRcdGluY3JlbWVudF9ncm91cDogJ2F1dGhvcmxpbmsnLFxuXHRcdFx0XHRpbmNyZW1lbnRfYnV0dG9uOiB0cnVlLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdsYXN0PE4+Jyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnbGFzdC1pbmNyJyxcblx0XHRcdFx0aW5jcmVtZW50X2dyb3VwOiAnYXV0aG9yJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnZmlyc3Q8Tj4nLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdmaXJzdC1pbmNyJyxcblx0XHRcdFx0aW5jcmVtZW50X2dyb3VwOiAnYXV0aG9yJyxcblx0XHRcdFx0aW5jcmVtZW50X2J1dHRvbjogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnbG9jYXRpb24nLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdwYWdlJyxcblx0XHRcdFx0dG9vbHRpcDogJ2NpdGUtcGFnZS10b29sdGlwJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAncGFnZXMnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdwYWdlcycsXG5cdFx0XHRcdHRvb2x0aXA6ICdjaXRlLXBhZ2VzLXRvb2x0aXAnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdsYW5ndWFnZScsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2xhbmd1YWdlJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnZm9ybWF0Jyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnZG9pJyxcblx0XHRcdFx0YXV0b2ZpbGxpZDogJ2RvaScsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2RvaScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3F1b3RlJyxcblx0XHRcdH0sXG5cdFx0XVxuXHQpO1xuXHRuZXcgQ2l0ZVRlbXBsYXRlKFxuXHRcdCdjaXRlIGJvb2snLFxuXHRcdCdib29rJyxcblx0XHRbXG5cdFx0XHQvLyBCYXNpYyBmaWVsZHNcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdhdXRob3I8Tj4nLFxuXHRcdFx0XHRpbmNyZW1lbnRfZ3JvdXA6ICdhdXRob3JfYWx0Jyxcblx0XHRcdFx0aW5jcmVtZW50X2J1dHRvbjogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnY29hdXRob3JzJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnY29hdXRob3JzJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnZWRpdG9yJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAndGl0bGUnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICd0aXRsZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2RhdGUnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICd5ZWFyJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAncHVibGlzaGVyJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAncHVibGlzaGVyJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnbG9jYXRpb24nLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdsb2NhdGlvbicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2lzYm4nLFxuXHRcdFx0XHQvKiBcImF1dG9maWxsaWRcIjpcImlzYm5cIiwgKi8gYXV0b2ZpbGxwcm9wOiAnaXNibicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3BhZ2UnLFxuXHRcdFx0XHR0b29sdGlwOiAnY2l0ZS1wYWdlLXRvb2x0aXAnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdwYWdlcycsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ3BhZ2VzJyxcblx0XHRcdFx0dG9vbHRpcDogJ2NpdGUtcGFnZXMtdG9vbHRpcCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2VkaXRpb24nLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdlZGl0aW9uJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAndXJsJyxcblx0XHRcdFx0YXV0b2ZpbGxpZDogJ3VybCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2FjY2Vzc2RhdGUnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdyZWYnLFxuXHRcdFx0XHR0b29sdGlwOiAnY2l0ZS1yZWYtdG9vbHRpcCcsXG5cdFx0XHR9LFxuXHRcdF0sXG5cdFx0W1xuXHRcdFx0Ly8gRXhwYW5kZWQgZmllbGRzXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnbGFzdDxOPicsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2xhc3QtaW5jcicsXG5cdFx0XHRcdGluY3JlbWVudF9ncm91cDogJ2F1dGhvcicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2ZpcnN0PE4+Jyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnZmlyc3QtaW5jcicsXG5cdFx0XHRcdGluY3JlbWVudF9ncm91cDogJ2F1dGhvcicsXG5cdFx0XHRcdGluY3JlbWVudF9idXR0b246IHRydWUsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2F1dGhvcmxpbms8Tj4nLFxuXHRcdFx0XHR0b29sdGlwOiAnY2l0ZS1hdXRob3JsaW5rLXRvb2x0aXAnLFxuXHRcdFx0XHRpbmNyZW1lbnRfZ3JvdXA6ICdhdXRob3JsaW5rJyxcblx0XHRcdFx0aW5jcmVtZW50X2J1dHRvbjogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnZWRpdG9yPE4+LWxhc3QnLFxuXHRcdFx0XHRpbmNyZW1lbnRfZ3JvdXA6ICdlZGl0b3InLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdlZGl0b3I8Tj4tZmlyc3QnLFxuXHRcdFx0XHRpbmNyZW1lbnRfZ3JvdXA6ICdlZGl0b3InLFxuXHRcdFx0XHRpbmNyZW1lbnRfYnV0dG9uOiB0cnVlLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdlZGl0b3I8Tj4tbGluaycsXG5cdFx0XHRcdGluY3JlbWVudF9ncm91cDogJ2VkaXRvcmxpbmsnLFxuXHRcdFx0XHRpbmNyZW1lbnRfYnV0dG9uOiB0cnVlLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdsYW5ndWFnZScsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2xhbmd1YWdlJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnZm9ybWF0Jyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnY2hhcHRlcicsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2NoYXB0ZXInLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdxdW90ZScsXG5cdFx0XHR9LFxuXHRcdF1cblx0KTtcblx0bmV3IENpdGVUZW1wbGF0ZShcblx0XHQnY2l0ZSBqb3VybmFsJyxcblx0XHQnam91cm5hbCcsXG5cdFx0W1xuXHRcdFx0Ly8gQmFzaWMgZmllbGRzXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnYXV0aG9yPE4+Jyxcblx0XHRcdFx0aW5jcmVtZW50X2dyb3VwOiAnYXV0aG9yX2FsdCcsXG5cdFx0XHRcdGluY3JlbWVudF9idXR0b246IHRydWUsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2NvYXV0aG9ycycsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2NvYXV0aG9ycycsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3RpdGxlJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAndGl0bGUnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdqb3VybmFsJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnam91cm5hbCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2RhdGUnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdkYXRlJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAndm9sdW1lJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAndm9sdW1lJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnaXNzdWUnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdpc3N1ZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3BhZ2UnLFxuXHRcdFx0XHR0b29sdGlwOiAnY2l0ZS1wYWdlLXRvb2x0aXAnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdwYWdlcycsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ3BhZ2VzJyxcblx0XHRcdFx0dG9vbHRpcDogJ2NpdGUtcGFnZXMtdG9vbHRpcCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2RvaScsXG5cdFx0XHRcdGF1dG9maWxsaWQ6ICdkb2knLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdkb2knLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdwbWlkJyxcblx0XHRcdFx0YXV0b2ZpbGxpZDogJ3BtaWQnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICd1cmwnLFxuXHRcdFx0XHRhdXRvZmlsbGlkOiAndXJsJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnYWNjZXNzZGF0ZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3JlZicsXG5cdFx0XHRcdHRvb2x0aXA6ICdjaXRlLXJlZi10b29sdGlwJyxcblx0XHRcdH0sXG5cdFx0XSxcblx0XHRbXG5cdFx0XHQvLyBFeHBhbmRlZCBmaWVsZHNcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdhdXRob3JsaW5rPE4+Jyxcblx0XHRcdFx0dG9vbHRpcDogJ2NpdGUtYXV0aG9ybGluay10b29sdGlwJyxcblx0XHRcdFx0aW5jcmVtZW50X2dyb3VwOiAnYXV0aG9ybGluaycsXG5cdFx0XHRcdGluY3JlbWVudF9idXR0b246IHRydWUsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2xhc3Q8Tj4nLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdsYXN0LWluY3InLFxuXHRcdFx0XHRpbmNyZW1lbnRfZ3JvdXA6ICdhdXRob3InLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdmaXJzdDxOPicsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2ZpcnN0LWluY3InLFxuXHRcdFx0XHRpbmNyZW1lbnRfZ3JvdXA6ICdhdXRob3InLFxuXHRcdFx0XHRpbmNyZW1lbnRfYnV0dG9uOiB0cnVlLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdlZGl0b3I8Tj4tbGFzdCcsXG5cdFx0XHRcdGluY3JlbWVudF9ncm91cDogJ2VkaXRvcicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2VkaXRvcjxOPi1maXJzdCcsXG5cdFx0XHRcdGluY3JlbWVudF9ncm91cDogJ2VkaXRvcicsXG5cdFx0XHRcdGluY3JlbWVudF9idXR0b246IHRydWUsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2VkaXRvcjxOPi1saW5rJyxcblx0XHRcdFx0aW5jcmVtZW50X2dyb3VwOiAnZWRpdG9ybGluaycsXG5cdFx0XHRcdGluY3JlbWVudF9idXR0b246IHRydWUsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3NlcmllcycsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2F0Jyxcblx0XHRcdFx0dG9vbHRpcDogJ2NpdGUtYXQtdG9vbHRpcCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3RyYW5zLXRpdGxlJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAncHVibGlzaGVyJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAncHVibGlzaGVyJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnbG9jYXRpb24nLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdsYW5ndWFnZScsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2xhbmd1YWdlJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnZm9ybWF0Jyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnaXNzbicsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2lzc24nLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdwbWMnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdvY2xjJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnYmliY29kZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2lkJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAncXVvdGUnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdwb3N0c2NyaXB0Jyxcblx0XHRcdFx0dG9vbHRpcDogJ2NpdGUtcG9zdHNjcmlwdC10b29sdGlwJyxcblx0XHRcdH0sXG5cdFx0XVxuXHQpO1xuXHRuZXcgQ2l0ZVRlbXBsYXRlKFxuXHRcdCdjaXRlIGNvbmZlcmVuY2UnLFxuXHRcdCdjb25mZXJlbmNlJyxcblx0XHRbXG5cdFx0XHQvLyBCYXNpYyBmaWVsZHNcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdhdXRob3InLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdhdXRob3IxJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnY29hdXRob3JzJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnY29hdXRob3JzJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAndGl0bGUnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICd0aXRsZScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2NvbmZlcmVuY2UnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdjb25mZXJlbmNldXJsJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnYm9va3RpdGxlJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnam91cm5hbCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2RhdGUnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdkYXRlJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAneWVhcicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ21vbnRoJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAndm9sdW1lJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAndm9sdW1lJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAncHVibGlzaGVyJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAncHVibGlzaGVyJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnbG9jYXRpb24nLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdsb2NhdGlvbicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2lzYm4nIC8qICwgXCJhdXRvZmlsbGlkXCI6XCJpc2JuXCIgKi8sXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3BhZ2VzJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnZG9pJyxcblx0XHRcdFx0YXV0b2ZpbGxpZDogJ2RvaScsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2RvaScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3BtaWQnLFxuXHRcdFx0XHRhdXRvZmlsbGlkOiAncG1pZCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3VybCcsXG5cdFx0XHRcdGF1dG9maWxsaWQ6ICd1cmwnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdhY2Nlc3NkYXRlJyxcblx0XHRcdFx0dG9vbHRpcDogJ2NpdGUtYWNjZXNzZGF0ZS10b29sdGlwJyxcblx0XHRcdH0sXG5cdFx0XSxcblx0XHRbXG5cdFx0XHQvLyBFeHBhbmRlZCBmaWVsZHNcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdsYXN0Jyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnbGFzdDEnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdmaXJzdCcsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2ZpcnN0MScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2F1dGhvcmxpbmsnLFxuXHRcdFx0XHR0b29sdGlwOiAnY2l0ZS1hdXRob3JsaW5rLXRvb2x0aXAnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdlZGl0b3InLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdvdGhlcnMnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdlZGl0aW9uJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnZWRpdGlvbicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2xhbmd1YWdlJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnbGFuZ3VhZ2UnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdmb3JtYXQnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdpc3NuJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnb2NsYycsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2lkJyxcblx0XHRcdFx0dG9vbHRpcDogJ2NpdGUtaWQtdG9vbHRpcCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3F1b3RlJyxcblx0XHRcdH0sXG5cdFx0XVxuXHQpO1xuXHRuZXcgQ2l0ZVRlbXBsYXRlKFxuXHRcdCdjaXRlIGVuY3ljbG9wZWRpYScsXG5cdFx0J2VuY3ljbG9wZWRpYScsXG5cdFx0W1xuXHRcdFx0Ly8gQmFzaWMgZmllbGRzXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnYXV0aG9yJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnYXV0aG9yMScsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3RpdGxlJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnZWRpdG9yJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnZW5jeWNsb3BlZGlhJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAndGl0bGUnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICd2b2x1bWUnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICd5ZWFyJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAneWVhcicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3B1Ymxpc2hlcicsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ3B1Ymxpc2hlcicsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2xvY2F0aW9uJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnbG9jYXRpb24nLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdpc2JuJyAvKiAsIFwiYXV0b2ZpbGxpZFwiOlwiaXNiblwiICovLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdwYWdlcycsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ3VybCcsXG5cdFx0XHR9LFxuXHRcdF0sXG5cdFx0W1xuXHRcdFx0Ly8gRXhwYW5kZWQgZmllbGRzXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnbGFzdCcsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2xhc3QxJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnZmlyc3QnLFxuXHRcdFx0XHRhdXRvZmlsbHByb3A6ICdmaXJzdDEnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdhdXRob3JsaW5rJyxcblx0XHRcdFx0dG9vbHRpcDogJ2NpdGUtYXV0aG9ybGluay10b29sdGlwJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnY29hdXRob3JzJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnY29hdXRob3JzJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnb3RoZXJzJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnZWRpdGlvbicsXG5cdFx0XHRcdGF1dG9maWxscHJvcDogJ2VkaXRpb24nLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdvY2xjJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnaWQnLFxuXHRcdFx0XHR0b29sdGlwOiAnY2l0ZS1pZC10b29sdGlwJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnYWNjZXNzZGF0ZScsXG5cdFx0XHRcdHRvb2x0aXA6ICdjaXRlLWFjY2Vzc2RhdGUtdG9vbHRpcCcsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZDogJ2xhbmd1YWdlJyxcblx0XHRcdFx0YXV0b2ZpbGxwcm9wOiAnbGFuZ3VhZ2UnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdmb3JtYXQnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdkYXRlJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGZpZWxkOiAnbW9udGgnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0ZmllbGQ6ICdxdW90ZScsXG5cdFx0XHR9LFxuXHRcdF1cblx0KTtcblxuXHQvLyBDaXRlIGVycm9yIGNoZWNrIGRlZmluaXRpb25zXG5cdG5ldyBDaXRlRXJyb3JDaGVjayh7XG5cdFx0dHlwZTogJ3JlZmxpc3QnLFxuXHRcdHRlc3RuYW1lOiAnc2FtZWNvbnRlbnQnLFxuXHRcdGRlc2M6ICdjaXRlLXNhbWVjb250ZW50LWRlc2MnLFxuXHRcdGZ1bmM6IChyZWZsaXN0KSA9PiB7XG5cdFx0XHRjb25zdCBlcnJvcnMgPSBbXTtcblx0XHRcdGNvbnN0IHJlZnMyID0gW107XG5cdFx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgcmVmbGlzdCkge1xuXHRcdFx0XHRpZiAoZWxlbWVudC5zaG9ydHRhZykge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChyZWZzMi5pbmNsdWRlcyhlbGVtZW50LmNvbnRlbnQpKSB7XG5cdFx0XHRcdFx0aWYgKGVycm9ycy5pbmNsdWRlcyhlbGVtZW50LmNvbnRlbnQpKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZXJyb3JzLnB1c2goZWxlbWVudC5jb250ZW50KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZWZzMi5wdXNoKGVsZW1lbnQuY29udGVudCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGNvbnN0IHJldCA9IFtdO1xuXHRcdFx0Zm9yIChjb25zdCBlcnJvciBvZiBlcnJvcnMpIHtcblx0XHRcdFx0cmV0LnB1c2goe1xuXHRcdFx0XHRcdG1zZzogJ2NpdGUtc2FtZWNvbnRlbnQtZXJyb3InLFxuXHRcdFx0XHRcdGVycjogZXJyb3IsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJldDtcblx0XHR9LFxuXHR9KTtcblx0bmV3IENpdGVFcnJvckNoZWNrKHtcblx0XHR0eXBlOiAncmVmbGlzdCcsXG5cdFx0dGVzdG5hbWU6ICdyZXBlYXRlZCcsXG5cdFx0ZGVzYzogJ2NpdGUtcmVwZWF0ZWQtZGVzYycsXG5cdFx0ZnVuYzogKHJlZmxpc3QpID0+IHtcblx0XHRcdGNvbnN0IGVycm9ycyA9IFtdO1xuXHRcdFx0Y29uc3QgcmVmczIgPSBbXTtcblx0XHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiByZWZsaXN0KSB7XG5cdFx0XHRcdGlmIChlbGVtZW50LnNob3J0dGFnIHx8ICFlbGVtZW50LnJlZm5hbWUpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAocmVmczIuaW5jbHVkZXMoZWxlbWVudC5yZWZuYW1lKSkge1xuXHRcdFx0XHRcdGlmIChlcnJvcnMuaW5jbHVkZXMoZWxlbWVudC5yZWZuYW1lKSkge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVycm9ycy5wdXNoKGVsZW1lbnQucmVmbmFtZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmVmczIucHVzaChlbGVtZW50LnJlZm5hbWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRjb25zdCByZXQgPSBbXTtcblx0XHRcdGZvciAoY29uc3QgZXJyb3Igb2YgZXJyb3JzKSB7XG5cdFx0XHRcdHJldC5wdXNoKHtcblx0XHRcdFx0XHRtc2c6ICdjaXRlLXJlcGVhdGVkLWVycm9yJyxcblx0XHRcdFx0XHRlcnI6IGVycm9yLFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiByZXQ7XG5cdFx0fSxcblx0fSk7XG5cdG5ldyBDaXRlRXJyb3JDaGVjayh7XG5cdFx0dHlwZTogJ3JlZmxpc3QnLFxuXHRcdHRlc3RuYW1lOiAndW5kZWZpbmVkJyxcblx0XHRkZXNjOiAnY2l0ZS11bmRlZmluZWQtZGVzYycsXG5cdFx0ZnVuYzogKHJlZmxpc3QpID0+IHtcblx0XHRcdGNvbnN0IGVycm9ycyA9IFtdO1xuXHRcdFx0Y29uc3QgbG9uZ3JlZnMgPSBbXTtcblx0XHRcdGZvciAoY29uc3QgdmFsdWUgb2YgT2JqZWN0LnZhbHVlcyhyZWZsaXN0KSkge1xuXHRcdFx0XHRjb25zdCB7cmVmbmFtZSwgc2hvcnR0YWd9ID0gdmFsdWU7XG5cdFx0XHRcdGlmICghc2hvcnR0YWcgJiYgcmVmbmFtZSkge1xuXHRcdFx0XHRcdGxvbmdyZWZzLnB1c2godmFsdWUucmVmbmFtZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHNob3J0dGFnICYmIGVycm9ycy5pbmNsdWRlcyhyZWZuYW1lKSA9PT0gLTEgJiYgIWxvbmdyZWZzLmluY2x1ZGVzKHJlZm5hbWUpKSB7XG5cdFx0XHRcdFx0ZXJyb3JzLnB1c2gocmVmbmFtZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGNvbnN0IHJldCA9IFtdO1xuXHRcdFx0Zm9yIChjb25zdCBlcnJvciBvZiBlcnJvcnMpIHtcblx0XHRcdFx0cmV0LnB1c2goe1xuXHRcdFx0XHRcdG1zZzogJ2NpdGUtdW5kZWZpbmVkLWVycm9yJyxcblx0XHRcdFx0XHRlcnI6IGVycm9yLFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiByZXQ7XG5cdFx0fSxcblx0fSk7XG5cblx0Ly8gZXhlY3V0ZSBtYWluIGZ1bmN0aW9uXG5cdENpdGVUQi5pbml0KCk7XG59O1xuXG5leHBvcnQge3JlZlRvb2xiYXJDb25maWd9O1xuIiwgIi8qIGdsb2JhbCBDaXRlVEIgKi9cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudCAqL1xuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi91dGlsL2dldE1lc3NhZ2UnO1xuXG5jb25zdCByZWZUb29sYmFyQmFzZSA9ICgpID0+IHtcblx0d2luZG93LkNpdGVUQiB8fD0ge1xuXHRcdFRlbXBsYXRlczoge30sIC8vIEFsbCB0ZW1wbGF0ZXNcblx0XHRPcHRpb25zOiB7fSwgLy8gR2xvYmFsIG9wdGlvbnNcblx0XHRVc2VyT3B0aW9uczoge30sIC8vIFVzZXIgb3B0aW9uc1xuXHRcdERlZmF1bHRPcHRpb25zOiB7fSwgLy8gU2NyaXB0IGRlZmF1bHRzXG5cdFx0RXJyb3JDaGVja3M6IHt9LCAvLyBFcnJvciBjaGVjayBmdW5jdGlvbnNcblx0fTtcblxuXHQvLyBDbGFzcyBmb3IgY2l0ZSB0ZW1wbGF0ZXNcblx0d2luZG93LkNpdGVUZW1wbGF0ZSA9IGNsYXNzIENpdGVUZW1wbGF0ZSB7XG5cdFx0Y29uc3RydWN0b3IodGVtcGxhdGVuYW1lLCBzaG9ydGZvcm0sIGJhc2ljZmllbGRzLCBleHBhbmRlZGZpZWxkcykge1xuXHRcdFx0Ly8gUHJvcGVydGllc1xuXHRcdFx0dGhpcy50ZW1wbGF0ZW5hbWUgPSB0ZW1wbGF0ZW5hbWU7IC8vIFRoZSB0ZW1wbGF0ZSBuYW1lIC0gXCJjaXRlIHdlYlwiLCBcImNpdGUgYm9va1wiLCBldGMuXG5cdFx0XHR0aGlzLnNob3J0Zm9ybSA9IHNob3J0Zm9ybTsgLy8gQSBzaG9ydCBmb3JtLCB1c2VkIGZvciB0aGUgZHJvcGRvd24gYm94XG5cdFx0XHR0aGlzLmJhc2ljID0gYmFzaWNmaWVsZHM7IC8vIEJhc2ljIGZpZWxkcyAtIGF1dGhvciwgdGl0bGUsIHB1Ymxpc2hlci4uLlxuXG5cdFx0XHQvLyBMZXNzIGNvbW1vbiAtIHF1b3RlLCBhcmNoaXZldXJsIC0gc2hvdWxkIGJlIGV2ZXJ5dGhpbmcgdGhlIHRlbXBsYXRlIHN1cHBvcnRzIG1pbnVzIHRoZSBiYXNpYyBvbmVzXG5cdFx0XHR0aGlzLmV4dHJhID0gZXhwYW5kZWRmaWVsZHM7XG5cdFx0XHR0aGlzLmluY3JlbWVudGFibGVzID0ge307XG5cblx0XHRcdC8vIEFkZCBpdCB0byB0aGUgbGlzdFxuXHRcdFx0Q2l0ZVRCLlRlbXBsYXRlc1t0aGlzLnRlbXBsYXRlbmFtZV0gPSB0aGlzO1xuXHRcdH1cblx0XHRtYWtlRm9ybUlubmVyKGZpZWxkcywgaW5jcnNldHVwKSB7XG5cdFx0XHRjb25zdCB0cnMgPSBbXTtcblx0XHRcdGNvbnN0IGF1dG9maWxscyA9IFtdO1xuXHRcdFx0bGV0IHRyO1xuXHRcdFx0Zm9yIChjb25zdCBbaSwgZmllbGRvYmpdIG9mIGZpZWxkcy5lbnRyaWVzKCkpIHtcblx0XHRcdFx0bGV0IHtmaWVsZH0gPSBmaWVsZG9iajtcblx0XHRcdFx0bGV0IGxhYmVsZmllbGQgPSBmaWVsZG9iai5maWVsZDtcblx0XHRcdFx0bGV0IGFkID0gZmFsc2U7XG5cdFx0XHRcdGxldCBpbTtcblx0XHRcdFx0aWYgKGluY3JzZXR1cCAmJiBmaWVsZG9iai5pbmNyZW1lbnRfZ3JvdXApIHtcblx0XHRcdFx0XHRmaWVsZCA9IGZpZWxkb2JqLmZpZWxkLnJlcGxhY2UoJzxOPicsICcxJyk7XG5cdFx0XHRcdFx0bGFiZWxmaWVsZCA9IGZpZWxkb2JqLmZpZWxkLnJlcGxhY2UoJzxOPicsICcnKTtcblx0XHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0XHR0aGlzLmluY3JlbWVudGFibGVzW2ZpZWxkb2JqLmluY3JlbWVudF9ncm91cF0gJiZcblx0XHRcdFx0XHRcdCF0aGlzLmluY3JlbWVudGFibGVzW2ZpZWxkb2JqLmluY3JlbWVudF9ncm91cF0uc2V0dXBcblx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdC8vIFRoZSBvYmplY3QgaGFzIGJlZW4gY3JlYXRlZCwgYnV0IG5vdCBmdWxseSBpbml0aWFsaXplZFxuXHRcdFx0XHRcdFx0dGhpcy5pbmNyZW1lbnRhYmxlc1tmaWVsZG9iai5pbmNyZW1lbnRfZ3JvdXBdLmZpZWxkcy5wdXNoKGZpZWxkb2JqKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKCF0aGlzLmluY3JlbWVudGFibGVzW2ZpZWxkb2JqLmluY3JlbWVudF9ncm91cF0pIHtcblx0XHRcdFx0XHRcdC8vIE9iamVjdCBub3QgeWV0IGNyZWF0ZWRcblx0XHRcdFx0XHRcdHRoaXMuaW5jcmVtZW50YWJsZXNbZmllbGRvYmouaW5jcmVtZW50X2dyb3VwXSA9IHtcblx0XHRcdFx0XHRcdFx0ZmllbGRzOiBbZmllbGRvYmpdLFxuXHRcdFx0XHRcdFx0XHR2YWw6IDEsXG5cdFx0XHRcdFx0XHRcdHNldHVwOiBmYWxzZSxcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChcblx0XHRcdFx0XHRcdHRoaXMuaW5jcmVtZW50YWJsZXNbZmllbGRvYmouaW5jcmVtZW50X2dyb3VwXSAmJlxuXHRcdFx0XHRcdFx0dGhpcy5pbmNyZW1lbnRhYmxlc1tmaWVsZG9iai5pbmNyZW1lbnRfZ3JvdXBdLnNldHVwXG5cdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHQvLyBGdWxseSBpbml0aWFsaXplZCBmcm9tIGEgcHJldmlvdXMgaW52b2NhdGlvbiBvZiB0aGlzIGZ1bmN0aW9uLCBqdXN0IHJlc2V0dGluZyB0aGUgbnVtYmVyXG5cdFx0XHRcdFx0XHR0aGlzLmluY3JlbWVudGFibGVzW2ZpZWxkb2JqLmluY3JlbWVudF9ncm91cF0udmFsID0gMTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSBpZiAoZmllbGRvYmouaW5jcmVtZW50X2dyb3VwKSB7XG5cdFx0XHRcdFx0Ly8gQWRkaW5nIGEgbmV3IHJvd1xuXHRcdFx0XHRcdGNvbnN0IGluY3J2YWwgPSB0aGlzLmluY3JlbWVudGFibGVzW2ZpZWxkb2JqLmluY3JlbWVudF9ncm91cF0udmFsO1xuXHRcdFx0XHRcdGZpZWxkID0gZmllbGRvYmouZmllbGQucmVwbGFjZSgnPE4+JywgaW5jcnZhbC50b1N0cmluZygpKTtcblx0XHRcdFx0XHRsYWJlbGZpZWxkID0gZmllbGRvYmouZmllbGQucmVwbGFjZSgnPE4+JywgJycpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IGF1dG9kYXRlRmllbGRzID0gQ2l0ZVRCLmdldE9wdGlvbignYXV0b2RhdGUgZmllbGRzJyk7XG5cdFx0XHRcdGlmIChhdXRvZGF0ZUZpZWxkcy5pbmNsdWRlcyhmaWVsZCkpIHtcblx0XHRcdFx0XHRpbSA9ICQoJzxpbWc+JykuYXR0cihcblx0XHRcdFx0XHRcdCdzcmMnLFxuXHRcdFx0XHRcdFx0J2h0dHBzOi8vdHUuemhvbmd3ZW4ud2lraS9pbWFnZXMvcWl1d2VuYmFpa2UvemgvdGh1bWIvNy83Yi9OdXZvbGFfYXBwc19kYXRlLnN2Zy8yMHB4LU51dm9sYV9hcHBzX2RhdGUuc3ZnLnBuZydcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGltLmF0dHIoJ2FsdCcsIGdldE1lc3NhZ2UoJ2NpdGUtaW5zZXJ0LWRhdGUnKSkuYXR0cigndGl0bGUnLCBnZXRNZXNzYWdlKCdjaXRlLWluc2VydC1kYXRlJykpO1xuXHRcdFx0XHRcdGFkID0gJCgnPGE+JykuYXR0cignaHJlZicsICcjJyk7XG5cdFx0XHRcdFx0YWQuYXBwZW5kKGltKTtcblx0XHRcdFx0XHRhZC5hdHRyKCdpZCcsIGBjaXRlLWRhdGUtJHtDaXRlVEIuZXNjU3RyKHRoaXMuc2hvcnRmb3JtKX0tJHtmaWVsZH1gKTtcblx0XHRcdFx0XHQkKGRvY3VtZW50KS5vbihcblx0XHRcdFx0XHRcdCdjbGljaycsXG5cdFx0XHRcdFx0XHRgI2NpdGUtZGF0ZS0ke0NpdGVUQi5lc2NTdHIodGhpcy5zaG9ydGZvcm0pfS0ke2ZpZWxkfWAsXG5cdFx0XHRcdFx0XHRDaXRlVEIuZmlsbEFjY2Vzc2RhdGVcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChmaWVsZG9iai5hdXRvZmlsbGlkKSB7XG5cdFx0XHRcdFx0Y29uc3QgYXV0b3R5cGUgPSBmaWVsZG9iai5hdXRvZmlsbGlkO1xuXHRcdFx0XHRcdGltID0gJCgnPGltZz4nKS5hdHRyKFxuXHRcdFx0XHRcdFx0J3NyYycsXG5cdFx0XHRcdFx0XHQnaHR0cHM6Ly90dS56aG9uZ3dlbi53aWtpL2ltYWdlcy9xaXV3ZW5iYWlrZS96aC90aHVtYi8xLzE3L1N5c3RlbS1zZWFyY2guc3ZnLzIwcHgtU3lzdGVtLXNlYXJjaC5zdmcucG5nJ1xuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0aW0uYXR0cignYWx0JywgZ2V0TWVzc2FnZSgnY2l0ZS1hdXRvZmlsbC1hbHQnKSkuYXR0cigndGl0bGUnLCBnZXRNZXNzYWdlKCdjaXRlLWF1dG9maWxsLWFsdCcpKTtcblx0XHRcdFx0XHRhZCA9ICQoJzxhPicpLmF0dHIoJ2hyZWYnLCAnIycpO1xuXHRcdFx0XHRcdGFkLmFwcGVuZChpbSk7XG5cdFx0XHRcdFx0YWQuYXR0cignaWQnLCBgY2l0ZS1hdXRvLSR7Q2l0ZVRCLmVzY1N0cih0aGlzLnNob3J0Zm9ybSl9LSR7ZmllbGR9LSR7YXV0b3R5cGV9YCk7XG5cdFx0XHRcdFx0YXV0b2ZpbGxzLnB1c2goYCNjaXRlLWF1dG8tJHtDaXRlVEIuZXNjU3RyKHRoaXMuc2hvcnRmb3JtKX0tJHtmaWVsZH0tJHthdXRvdHlwZX1gKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZmllbGRvYmouaW5jcmVtZW50X2J1dHRvbikge1xuXHRcdFx0XHRcdGNvbnN0IGluY3J0eXBlID0gZmllbGRvYmouaW5jcmVtZW50X2dyb3VwO1xuXHRcdFx0XHRcdGltID0gJCgnPGltZz4nKS5hdHRyKFxuXHRcdFx0XHRcdFx0J3NyYycsXG5cdFx0XHRcdFx0XHQnaHR0cHM6Ly90dS56aG9uZ3dlbi53aWtpL2ltYWdlcy9xaXV3ZW5iYWlrZS96aC90aHVtYi9iL2I5L051dm9sYV9hY3Rpb25fZWRpdF9hZGQuc3ZnLzIwcHgtTnV2b2xhX2FjdGlvbl9lZGl0X2FkZC5zdmcucG5nJ1xuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0aW0uYXR0cignYWx0JywgZ2V0TWVzc2FnZSgnY2l0ZS1pbmNyZW1lbnQtYWx0JykpLmF0dHIoJ3RpdGxlJywgZ2V0TWVzc2FnZSgnY2l0ZS1pbmNyZW1lbnQtYWx0JykpO1xuXHRcdFx0XHRcdGFkID0gJCgnPGE+JykuYXR0cignaHJlZicsICcjJyk7XG5cdFx0XHRcdFx0YWQuYXBwZW5kKGltKTtcblx0XHRcdFx0XHRhZC5hdHRyKCdpZCcsIGBjaXRlLWluY3ItJHtDaXRlVEIuZXNjU3RyKHRoaXMuc2hvcnRmb3JtKX0tJHtpbmNydHlwZX1gKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGxldCBkaXNwbGF5ID0gZ2V0TWVzc2FnZShgY2l0ZS0ke2xhYmVsZmllbGR9LWxhYmVsYCk7XG5cdFx0XHRcdGlmICh0eXBlb2YgZGlzcGxheSAhPT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHRkaXNwbGF5ID0gZmllbGRvYmoubGFiZWwgPyBDaXRlVEIuZml4U3RyKGZpZWxkb2JqLmxhYmVsKSA6IENpdGVUQi5maXhTdHIobGFiZWxmaWVsZCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgdG9vbHRpcCA9IGZpZWxkb2JqLnRvb2x0aXBcblx0XHRcdFx0XHQ/ICQoJzxhYmJyPicpLmF0dHIoJ3RpdGxlJywgZ2V0TWVzc2FnZShmaWVsZG9iai50b29sdGlwKSkuaHRtbCgkKCc8c3VwPicpLnRleHQoJz8nKSlcblx0XHRcdFx0XHQ6IGZhbHNlO1xuXHRcdFx0XHRsZXQgaW5wdXQgPSAnJztcblx0XHRcdFx0aW5wdXQgPSAkKCc8aW5wdXQ+JykuYXR0cih7XG5cdFx0XHRcdFx0dGFiaW5kZXg6ICcxJyxcblx0XHRcdFx0XHRzdHlsZTogYWQgPyAnd2lkdGg6IDg1JScgOiAnd2lkdGg6IDEwMCUnLFxuXHRcdFx0XHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGlucHV0LmF0dHIoJ2lkJywgYGNpdGUtJHtDaXRlVEIuZXNjU3RyKHRoaXMuc2hvcnRmb3JtKX0tJHtmaWVsZH1gKTtcblx0XHRcdFx0aWYgKGZpZWxkb2JqLmF1dG9maWxscHJvcCkge1xuXHRcdFx0XHRcdGxldCBjbGFzc25hbWUgPSBgY2l0ZS0ke0NpdGVUQi5lc2NTdHIodGhpcy5zaG9ydGZvcm0pfS0ke2ZpZWxkb2JqLmF1dG9maWxscHJvcH1gO1xuXHRcdFx0XHRcdGlmIChmaWVsZG9iai5pbmNyZW1lbnRfZ3JvdXApIHtcblx0XHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtZWRpYXdpa2kvY2xhc3MtZG9jXG5cdFx0XHRcdFx0XHRpbnB1dC5hZGRDbGFzcyhgY2l0ZS0ke0NpdGVUQi5lc2NTdHIodGhpcy5zaG9ydGZvcm0pfS1pbmNyLSR7ZmllbGRvYmouaW5jcmVtZW50X2dyb3VwfWApO1xuXHRcdFx0XHRcdFx0Y2xhc3NuYW1lICs9IGAtJHt0aGlzLmluY3JlbWVudGFibGVzW2ZpZWxkb2JqLmluY3JlbWVudF9ncm91cF0udmFsLnRvU3RyaW5nKCl9YDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1lZGlhd2lraS9jbGFzcy1kb2Ncblx0XHRcdFx0XHRpbnB1dC5hZGRDbGFzcyhjbGFzc25hbWUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IGxhYmVsID0gJCgnPGxhYmVsPicpO1xuXHRcdFx0XHRsYWJlbC5hdHRyKCdmb3InLCBgY2l0ZS0ke0NpdGVUQi5lc2NTdHIodGhpcy5zaG9ydGZvcm0pfS0ke2ZpZWxkfWApLnRleHQoZGlzcGxheSk7XG5cdFx0XHRcdGlmICh0b29sdGlwKSB7XG5cdFx0XHRcdFx0bGFiZWwuYXBwZW5kKHRvb2x0aXApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxldCBzdHlsZSA9ICd0ZXh0LWFsaWduOiByaWdodDsgd2lkdGg6IDIwJTsnO1xuXHRcdFx0XHRpZiAoaSAlIDIgPT09IDEpIHtcblx0XHRcdFx0XHRzdHlsZSArPSAnIHBhZGRpbmctbGVmdDogMWVtOyc7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dHIgPSAkKCc8dHI+Jyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgdGQxID0gJCgnPHRkPicpLmFkZENsYXNzKCdjaXRlLWZvcm0tdGQnKS5hdHRyKHtcblx0XHRcdFx0XHRzdHlsZSxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHRkMS5hcHBlbmQobGFiZWwpO1xuXHRcdFx0XHR0ci5hcHBlbmQodGQxKTtcblx0XHRcdFx0Y29uc3QgdGQyID0gJCgnPHRkPicpLmFkZENsYXNzKCdjaXRlLWZvcm0tdGQnKS5jc3MoJ3dpZHRoJywgJzMwJScpO1xuXHRcdFx0XHR0ZDIuYXBwZW5kKGlucHV0KTtcblx0XHRcdFx0aWYgKGFkKSB7XG5cdFx0XHRcdFx0dGQyLmFwcGVuZChhZCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dHIuYXBwZW5kKHRkMik7XG5cdFx0XHRcdGlmIChpICUgMiA9PT0gMCkge1xuXHRcdFx0XHRcdHRycy5wdXNoKHRyKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bGV0IG5lZWRzZXR1cCA9IGZhbHNlO1xuXHRcdFx0Zm9yIChjb25zdCBnIGluIHRoaXMuaW5jcmVtZW50YWJsZXMpIHtcblx0XHRcdFx0aWYgKCF0aGlzLmluY3JlbWVudGFibGVzW2ddLnNldHVwKSB7XG5cdFx0XHRcdFx0bmVlZHNldHVwID0gdHJ1ZTtcblx0XHRcdFx0XHQkKGRvY3VtZW50KS5vbignY2xpY2snLCBgI2NpdGUtaW5jci0ke0NpdGVUQi5lc2NTdHIodGhpcy5zaG9ydGZvcm0pfS0ke2d9YCwgQ2l0ZVRCLmluY3JlbWVudEZpZWxkcyk7XG5cdFx0XHRcdFx0dGhpcy5pbmNyZW1lbnRhYmxlc1tnXS5zZXR1cCA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChuZWVkc2V0dXAgfHwgT2JqZWN0LmtleXModGhpcy5pbmNyZW1lbnRhYmxlcykubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdGZvciAoY29uc3QgYXV0b2ZpbGwgb2YgYXV0b2ZpbGxzKSB7XG5cdFx0XHRcdFx0JChkb2N1bWVudCkub24oJ2NsaWNrJywgYXV0b2ZpbGwsIENpdGVUQi5pbml0QXV0b2ZpbGwpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJzO1xuXHRcdH1cblx0XHQvLyBnaXZlcyBhIGxpdHRsZSBiaXQgb2YgSFRNTCBzbyB0aGUgb3BlbiBmb3JtIGNhbiBiZSBpZGVudGlmaWVkXG5cdFx0Z2V0SW5pdGlhbCgpIHtcblx0XHRcdGNvbnN0IGhpZGRlbiA9ICQoJzxpbnB1dD4nKS5hZGRDbGFzcygnY2l0ZS10ZW1wbGF0ZScpLmF0dHIoe1xuXHRcdFx0XHR0eXBlOiAnaGlkZGVuJyxcblx0XHRcdFx0dmFsdWU6IHRoaXMudGVtcGxhdGVuYW1lLFxuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gaGlkZGVuO1xuXHRcdH1cblx0XHQvLyBtYWtlcyB0aGUgZm9ybSB1c2VkIGluIHRoZSBkaWFsb2cgYm94ZXNcblx0XHRnZXRGb3JtKCkge1xuXHRcdFx0Y29uc3QgbWFpbiA9ICQoJzxkaXY+JykuYWRkQ2xhc3MoJ2NpdGUtZm9ybS1jb250YWluZXInKTtcblx0XHRcdGNvbnN0IGZvcm0xID0gJCgnPHRhYmxlPicpLmFkZENsYXNzKCdjaXRlLWJhc2ljLWZpZWxkcycpLmNzcyh7XG5cdFx0XHRcdHdpZHRoOiAnMTAwJScsXG5cdFx0XHRcdCdiYWNrZ3JvdW5kLWNvbG9yJzogJ3RyYW5zcGFyZW50Jyxcblx0XHRcdH0pO1xuXHRcdFx0bGV0IHRycyA9IHRoaXMubWFrZUZvcm1Jbm5lcih0aGlzLmJhc2ljLCB0cnVlKTtcblx0XHRcdGZvciAoY29uc3QgdHIgb2YgdHJzKSB7XG5cdFx0XHRcdGZvcm0xLmFwcGVuZCh0cik7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBmb3JtMiA9ICQoJzx0YWJsZT4nKS5hZGRDbGFzcygnY2l0ZS1leHRyYS1maWVsZHMnKS5jc3Moe1xuXHRcdFx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdFx0XHQnYmFja2dyb3VuZC1jb2xvcic6ICd0cmFuc3BhcmVudCcsXG5cdFx0XHRcdGRpc3BsYXk6ICdub25lJyxcblx0XHRcdH0pO1xuXHRcdFx0dHJzID0gdGhpcy5tYWtlRm9ybUlubmVyKHRoaXMuZXh0cmEsIHRydWUpO1xuXHRcdFx0Zm9yIChjb25zdCB0ciBvZiB0cnMpIHtcblx0XHRcdFx0Zm9ybTIuYXBwZW5kKHRyKTtcblx0XHRcdH1cblx0XHRcdG1haW4uYXBwZW5kKGZvcm0xKS5hcHBlbmQoZm9ybTIpO1xuXHRcdFx0Y29uc3QgZm9ybTMgPSAkKCc8dGFibGU+JykuYWRkQ2xhc3MoJ2NpdGUtb3RoZXItZmllbGRzJykuY3NzKHtcblx0XHRcdFx0d2lkdGg6ICcxMDAlJyxcblx0XHRcdFx0J2JhY2tncm91bmQtY29sb3InOiAndHJhbnNwYXJlbnQnLFxuXHRcdFx0XHQncGFkZGluZy10b3AnOiAnMWVtJyxcblx0XHRcdH0pO1xuXHRcdFx0Y29uc3QgJHRyID0gJCgnPHRyPicpO1xuXHRcdFx0Y29uc3QgJHRkMSA9ICQoJzx0ZD4nKS5hZGRDbGFzcygnY2l0ZS1mb3JtLXRkJykuY3NzKHtcblx0XHRcdFx0J3RleHQtYWxpZ24nOiAncmlnaHQnLFxuXHRcdFx0XHR3aWR0aDogJzIwJScsXG5cdFx0XHR9KTtcblx0XHRcdGNvbnN0ICRsYWJlbDEgPSAkKCc8bGFiZWw+Jyk7XG5cdFx0XHQkbGFiZWwxLmF0dHIoJ2ZvcicsIGBjaXRlLSR7Q2l0ZVRCLmVzY1N0cih0aGlzLnNob3J0Zm9ybSl9LW5hbWVgKS50ZXh0KGdldE1lc3NhZ2UoJ2NpdGUtbmFtZS1sYWJlbCcpKTtcblx0XHRcdCR0ZDEuYXBwZW5kKCRsYWJlbDEpO1xuXHRcdFx0Y29uc3QgdGQyID0gJCgnPHRkPicpLmFkZENsYXNzKCdjaXRlLWZvcm0tdGQnKS5jc3MoJ3dpZHRoJywgJzMwJScpO1xuXHRcdFx0Y29uc3QgaW5wdXQxID0gJCgnPGlucHV0PicpLmF0dHIoe1xuXHRcdFx0XHR0YWJpbmRleDogJzEnLFxuXHRcdFx0XHRzdHlsZTogJ3dpZHRoOiAxMDAlJyxcblx0XHRcdFx0dHlwZTogJ3RleHQnLFxuXHRcdFx0fSk7XG5cdFx0XHRpbnB1dDEuYXR0cignaWQnLCBgY2l0ZS0ke0NpdGVUQi5lc2NTdHIodGhpcy5zaG9ydGZvcm0pfS1uYW1lYCk7XG5cdFx0XHR0ZDIuYXBwZW5kKGlucHV0MSk7XG5cdFx0XHRjb25zdCB0ZDMgPSAkKCc8dGQ+JykuYWRkQ2xhc3MoJ2NpdGUtZm9ybS10ZCcpLmNzcyh7XG5cdFx0XHRcdCd0ZXh0LWFsaWduJzogJ3JpZ2h0Jyxcblx0XHRcdFx0J3BhZGRpbmctbGVmdCc6ICcxZW0nLFxuXHRcdFx0XHR3aWR0aDogJzIwJScsXG5cdFx0XHR9KTtcblx0XHRcdGNvbnN0IGxhYmVsMiA9ICQoJzxsYWJlbD4nKTtcblx0XHRcdGxhYmVsMi5hdHRyKCdmb3InLCBgY2l0ZS0ke0NpdGVUQi5lc2NTdHIodGhpcy5zaG9ydGZvcm0pfS1ncm91cGApLnRleHQoZ2V0TWVzc2FnZSgnY2l0ZS1ncm91cC1sYWJlbCcpKTtcblx0XHRcdHRkMy5hcHBlbmQobGFiZWwyKTtcblx0XHRcdGNvbnN0IHRkNCA9ICQoJzx0ZD4nKS5hZGRDbGFzcygnY2l0ZS1mb3JtLXRkJykuY3NzKCd3aWR0aCcsICczMCUnKTtcblx0XHRcdGNvbnN0IGlucHV0MiA9ICQoJzxpbnB1dD4nKS5hdHRyKHtcblx0XHRcdFx0dGFiaW5kZXg6ICcxJyxcblx0XHRcdFx0c3R5bGU6ICd3aWR0aDogMTAwJScsXG5cdFx0XHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHRcdH0pO1xuXHRcdFx0aW5wdXQyLmF0dHIoJ2lkJywgYGNpdGUtJHtDaXRlVEIuZXNjU3RyKHRoaXMuc2hvcnRmb3JtKX0tZ3JvdXBgKTtcblx0XHRcdHRkNC5hcHBlbmQoaW5wdXQyKTtcblx0XHRcdCR0ci5hcHBlbmQoJHRkMSkuYXBwZW5kKHRkMikuYXBwZW5kKHRkMykuYXBwZW5kKHRkNCk7XG5cdFx0XHRmb3JtMy5hcHBlbmQoJHRyKTtcblx0XHRcdG1haW4uYXBwZW5kKGZvcm0zKTtcblx0XHRcdGNvbnN0IGV4dHJhcyA9ICQoJzxkaXY+Jyk7XG5cdFx0XHRleHRyYXMuYXBwZW5kKFxuXHRcdFx0XHQkKCc8aW5wdXQ+JykuYWRkQ2xhc3MoJ2NpdGUtZm9ybS1zdGF0dXMnKS5hdHRyKHtcblx0XHRcdFx0XHR0eXBlOiAnaGlkZGVuJyxcblx0XHRcdFx0XHR2YWx1ZTogJ2Nsb3NlZCcsXG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHRcdFx0Y29uc3QgaGlkZGVuID0gJCgnPGlucHV0PicpLmFkZENsYXNzKCdjaXRlLXRlbXBsYXRlJykuYXR0cigndHlwZScsICdoaWRkZW4nKTtcblx0XHRcdGhpZGRlbi52YWwodGhpcy50ZW1wbGF0ZW5hbWUpO1xuXHRcdFx0ZXh0cmFzLmFwcGVuZChoaWRkZW4pO1xuXHRcdFx0Y29uc3Qgc3BhbjEgPSAkKCc8c3Bhbj4nKS5hZGRDbGFzcygnY2l0ZS1wcmV2aWV3LWxhYmVsJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcblx0XHRcdHNwYW4xLnRleHQoZ2V0TWVzc2FnZSgnY2l0ZS1yYXctcHJldmlldycpKTtcblx0XHRcdGV4dHJhcy5hcHBlbmQoc3BhbjEpLmFwcGVuZChcblx0XHRcdFx0JCgnPGRpdj4nKS5hZGRDbGFzcygnY2l0ZS1yZWYtcHJldmlldycpLmNzcyh7XG5cdFx0XHRcdFx0cGFkZGluZzogJzAuNWVtJyxcblx0XHRcdFx0XHQnZm9udC1zaXplJzogJzExMCUnLFxuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0XHRcdGNvbnN0IHNwYW4yID0gJCgnPHNwYW4+JykuYWRkQ2xhc3MoJ2NpdGUtcHJldi1wYXJzZWQtbGFiZWwnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuXHRcdFx0c3BhbjIudGV4dChnZXRNZXNzYWdlKCdjaXRlLXBhcnNlZC1sYWJlbCcpKTtcblx0XHRcdGV4dHJhcy5hcHBlbmQoc3BhbjIpLmFwcGVuZChcblx0XHRcdFx0JCgnPGRpdj4nKS5hZGRDbGFzcygnY2l0ZS1wcmV2aWV3LXBhcnNlZCcpLmNzcyh7XG5cdFx0XHRcdFx0J3BhZGRpbmctYm90dG9tJzogJzAuNWVtJyxcblx0XHRcdFx0XHQnZm9udC1zaXplJzogJzExMCUnLFxuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0XHRcdGNvbnN0IGxpbmsgPSAkKCc8YT4nKS5hZGRDbGFzcygnY2l0ZS1wcmV2LXBhcnNlJykuYXR0cignaHJlZicsICcjJykuY3NzKHtcblx0XHRcdFx0bWFyZ2luOiAnMCAxZW0nLFxuXHRcdFx0XHRkaXNwbGF5OiAnbm9uZScsXG5cdFx0XHRcdGNvbG9yOiAnIzAwMDA4YicsXG5cdFx0XHR9KTtcblx0XHRcdGxpbmsudGV4dChnZXRNZXNzYWdlKCdjaXRlLWZvcm0tcGFyc2UnKSk7XG5cdFx0XHRleHRyYXMuYXBwZW5kKGxpbmspO1xuXHRcdFx0bWFpbi5hcHBlbmQoZXh0cmFzKTtcblx0XHRcdHJldHVybiBtYWluO1xuXHRcdH1cblx0fTtcblx0LyoqXG5cdCAqIENsYXNzIGZvciBlcnJvciBjaGVja3Ncblx0ICogRklYTUU6IERPQ1MgT1VUIE9GIERBVEVcblx0ICogdHlwZSAtIHR5cGUgb2YgZXJyb3IgY2hlY2sgLSBjdXJyZW50IG9wdGlvbnM6XG5cdCAqICogJ3JlZmNoZWNrJyAtIGFwcGx5IGEgZnVuY3Rpb24gb24gZWFjaCByZWYgaW5kaXZpZHVhbGx5XG5cdCAqIC0gZnVuY3Rpb24gc2hvdWxkIGFjY2VwdCBhIHJlZiBvYmplY3QsIHJldHVybiBhIHN0cmluZ1xuXHQgKiAqICdyZWZsaXN0JyAtIGFwcGx5IGEgZnVuY3Rpb24gb24gdGhlIGVudGlyZSByZWYgbGlzdFxuXHQgKiAtIGZ1bmN0aW9uIHNob3VsZCBhY2NlcHQgYW4gYXJyYXkgb2YgcmVmIG9iamVjdHMsIHJldHVybiBhbiBhcnJheSBvZiBzdHJpbmdzXG5cdCAqICogJ3NlYXJjaCcgLSBhcHBseSBhIGZ1bmN0aW9uIHJvIHRoZSBwYWdlIHRleHRcblx0ICogLSBmdW5jdGlvbiBzaG91bGQgYWNjZXB0IHRoZSBwYWdlIHRleHQgYXMgYSBzdHJpbmcsIHJldHVybiBhbiBhcnJheSBvZiBzdHJpbmdzXG5cdCAqIFRoZSBzdHJpbmdzIHJldHVybmVkIGJ5IHRoZSBmdW5jdGlvbiBzaG91bGQgYmUgdmFsaWQgSFRNTFxuXHQgKiBmdW5jdGlvbiAtIFRoZSBmdW5jdGlvbiBkZXNjcmliZWQgYWJvdmUgdGVzdG5hbWUgLSBOYW1lIG9mIHRoZSBlcnJvciBjaGVjaywgbXVzdCBub3QgY29udGFpbiBzcGFjZXNcblx0ICogZGVzYyAtIEEgc2hvcnQgZGVzY3JpcHRpb24gb2YgdGhlIHRlc3Rcblx0ICpcblx0ICogQHBhcmFtIHt1bmtub3dufSBvYmpcblx0ICovXG5cdHdpbmRvdy5DaXRlRXJyb3JDaGVjayA9IGNsYXNzIENpdGVFcnJvckNoZWNrIHtcblx0XHRjb25zdHJ1Y3RvcihvYmopIHtcblx0XHRcdHRoaXMub2JqID0gb2JqO1xuXG5cdFx0XHRDaXRlVEIuRXJyb3JDaGVja3NbdGhpcy5vYmoudGVzdG5hbWVdID0gdGhpcztcblx0XHR9XG5cdFx0cnVuKCkge1xuXHRcdFx0bGV0IGVycm9ycyA9IFtdO1xuXHRcdFx0c3dpdGNoICh0aGlzLm9iai50eXBlKSB7XG5cdFx0XHRcdGNhc2UgJ3JlZmNoZWNrJzpcblx0XHRcdFx0XHRDaXRlVEIubG9hZFJlZnMoKTtcblx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IENpdGVUQi5tYWluUmVmTGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0Y29uc3QgZSA9IHRoaXMub2JqLmZ1bmMoQ2l0ZVRCLm1haW5SZWZMaXN0W2ldKTtcblx0XHRcdFx0XHRcdGlmIChlKSB7XG5cdFx0XHRcdFx0XHRcdGVycm9ycy5wdXNoKGUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAncmVmbGlzdCc6XG5cdFx0XHRcdFx0Q2l0ZVRCLmxvYWRSZWZzKCk7XG5cdFx0XHRcdFx0ZXJyb3JzID0gdGhpcy5vYmouZnVuYyhDaXRlVEIubWFpblJlZkxpc3QpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdzZWFyY2gnOiB7XG5cdFx0XHRcdFx0Y29uc3Qge2Z1bmN9ID0gdGhpcy5vYmo7XG5cdFx0XHRcdFx0Q2l0ZVRCLmdldFBhZ2VUZXh0KCh0ZXh0KSA9PiB7XG5cdFx0XHRcdFx0XHRlcnJvcnMgPSBmdW5jKHRleHQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZXJyb3JzO1xuXHRcdH1cblx0XHRnZXRSb3coKSB7XG5cdFx0XHRjb25zdCByb3cgPSAkKCc8bGk+Jyk7XG5cdFx0XHRjb25zdCBjaGVjayA9ICQoJzxpbnB1dD4nKS5hdHRyKHtcblx0XHRcdFx0dHlwZTogJ2NoZWNrYm94Jyxcblx0XHRcdFx0bmFtZTogJ2NpdGUtZXJyLXRlc3QnLFxuXHRcdFx0fSk7XG5cdFx0XHRjaGVjay5hdHRyKCd2YWx1ZScsIHRoaXMub2JqLnRlc3RuYW1lKTtcblx0XHRcdGNvbnN0IGxhYmVsID0gJCgnPGxhYmVsPicpLmh0bWwoZ2V0TWVzc2FnZSh0aGlzLm9iai5kZXNjKSk7XG5cdFx0XHRsYWJlbC5hdHRyKCdmb3InLCB0aGlzLm9iai50ZXN0bmFtZSk7XG5cdFx0XHRyb3cuYXBwZW5kKGNoZWNrKS5hcHBlbmQoJyAmbmRhc2g7ICcpLmFwcGVuZChsYWJlbCk7XG5cdFx0XHRyZXR1cm4gcm93O1xuXHRcdH1cblx0fTtcblxuXHQkKGRvY3VtZW50KS5maW5kKCdoZWFkJykudHJpZ2dlcigncmVmdG9vbGJhcmJhc2UnKTtcbn07XG5cbmV4cG9ydCB7cmVmVG9vbGJhckJhc2V9O1xuIiwgImltcG9ydCB7V0dfVVNFUl9MQU5HVUFHRX0gZnJvbSAnLi9jb25zdGFudCc7XG5cbmNvbnN0IHJlZlRvb2xiYXJNZXNhZ2VzID0gKCk6IHZvaWQgPT4ge1xuXHRpZiAoV0dfVVNFUl9MQU5HVUFHRSA9PT0gJ2VuJykge1xuXHRcdHJldHVybjtcblx0fVxuXHQvLyBBbGwgdXNlci1mYWNpbmcgbWVzc2FnZXNcblx0Ly8gVE9ETzogRG9jdW1lbnQgdXNhZ2Vcblx0aWYgKFsnemgtaGFudCcsICd6aC1oaycsICd6aC1tbycsICd6aC10dyddLmluY2x1ZGVzKFdHX1VTRVJfTEFOR1VBR0UpKSB7XG5cdFx0bXcubWVzc2FnZXMuc2V0KHtcblx0XHRcdCdjaXRlLXNlY3Rpb24tbGFiZWwnOiAn5byV55SoJyxcblx0XHRcdCdjaXRlLXRlbXBsYXRlLWxpc3QnOiAn5qih5p2/Jyxcblx0XHRcdCdjaXRlLW5hbWVkLXJlZnMtbGFiZWwnOiAn5ZCM5ZCN5paH5427Jyxcblx0XHRcdCdjaXRlLW5hbWVkLXJlZnMtdGl0bGUnOiAn5o+S5YWl5ZCM5ZCN5paH5427Jyxcblx0XHRcdCdjaXRlLW5hbWVkLXJlZnMtYnV0dG9uJzogJ+W3suWRveWQjeWPg+iAg+aWh+eNuycsXG5cdFx0XHQnY2l0ZS1uYW1lZC1yZWZzLWRyb3Bkb3duJzogJ+WQjOWQjeaWh+eNuycsXG5cdFx0XHQvLyBVc2VkIG9uIHRoZSB0b3Agb2YgdGhlIG5hbWVkIHJlZnMgbGlzdCBkcm9wc293blxuXHRcdFx0J2NpdGUtZXJyb3JjaGVjay1sYWJlbCc6ICfpjK/oqqTmqqLmn6UnLFxuXHRcdFx0J2NpdGUtZXJyb3JjaGVjay1idXR0b24nOiAn5qqi5p+l6Yyv6KqkJyxcblx0XHRcdCdjaXRlLWRpYWxvZy1iYXNlJzogJ+W8leeUqCcsXG5cdFx0XHQnY2l0ZS1mb3JtLXN1Ym1pdCc6ICfmj5LlhaUnLFxuXHRcdFx0J2NpdGUtZm9ybS1zaG93aGlkZSc6ICfpoa/npLov6Zqx6JeP6aGN5aSW5Y2A5Z+fJyxcblx0XHRcdCdjaXRlLW5vLW5hbWVkcmVmcyc6ICflnKjmnKzpoIHmib7kuI3liLDku7vkvZXlkIzlkI3mlofnjbsnLFxuXHRcdFx0J2NpdGUtbmFtZWRyZWZzLWludHJvJzogJ+W+nuWIl+WHuueahOWPg+iAg+aWh+eNu+ebrumMhOS4remBuOaTh+S4gOWAi+WQjeWtl+OAgum7nuaTiuOAjOaPkuWFpeOAjeaPkuWFpeS4gOWAi+WPg+iAg+aWh+eNu+WIsOaWh+acrOS4reOAgicsXG5cdFx0XHQnY2l0ZS1yYXctcHJldmlldyc6ICdXaWtpdGV4dDonLFxuXHRcdFx0J2NpdGUtcGFyc2VkLWxhYmVsJzogJ+ino+aekOW+jOeahHdpa2l0ZXh0OicsXG5cdFx0XHQnY2l0ZS1mb3JtLXBhcnNlJzogJ+mhr+ekuuino+aekOW+jOeahOmgkOimvScsXG5cdFx0XHQnY2l0ZS1yZWZwcmV2aWV3JzogJ+mgkOimvScsXG5cdFx0XHQnY2l0ZS1uYW1lLWxhYmVsJzogJ3JlZuWQjScsXG5cdFx0XHQnY2l0ZS1ncm91cC1sYWJlbCc6ICdyZWbntYQnLFxuXHRcdFx0J2NpdGUtZXJyb3JjaGVjay1zdWJtaXQnOiAn5qqi5p+lJyxcblx0XHRcdCdjaXRlLWVycm9yY2hlY2staGVhZGluZyc6ICfmqqLmn6XkuIvliJfpjK/oqqTvvJonLFxuXHRcdFx0J2NpdGUtZXJyb3ItdW5jbG9zZWQnOiAn5pyq6Zec6ZaJPHR0PiZsdDtyZWYmZ3Q7PC90dD7mqJnoqJgnLFxuXHRcdFx0J2NpdGUtZXJyb3Itc2FtZWNvbnRlbnQnOiAn5pyJ55u45ZCM5YWn5a6555qE5Y+D6ICD5paH5427Jyxcblx0XHRcdCdjaXRlLWVycm9yLXRlbXBsYXRlcyc6IGDlj4PogIPmlofnjbvmnKrkvb/nlKg8YSBocmVmPVwiJHttdy51dGlsLmdldFVybCgnQ2F0ZWdvcnk65byV55So5qih5p2/Jyl9XCI+5byV55So5qih5p2/PC9hPmAsXG5cdFx0XHQnY2l0ZS1lcnJvci1yZXBlYXRlZCc6ICflpJrlgIvlj4PogIPmlofnjbvmnInnm7jlkIzlkI3nqLEnLFxuXHRcdFx0J2NpdGUtZXJyb3ItdW5kZWYnOiAn5pyJ5pyq5a6a576p55qE5ZCM5ZCN5Y+D6ICD5paH54275Zyo5L2/55SoJyxcblx0XHRcdCdjaXRlLWVycm9yLXNhbWVjb250ZW50LW1zZyc6ICflpJrlgIvmlofnjbvlkKvmnInnm7jlkIzlhaflrrk6ICQxJyxcblx0XHRcdCdjaXRlLWVycm9yLXJlcGVhdGVkLW1zZyc6ICfntablpJrlgIvlj4PogIPmlofnjbvlkb3lkI06IOOAjCQx44CNJyxcblx0XHRcdCdjaXRlLWVycm9yLXRlbXBsYXRlcy1tc2cnOiAn5rKS5pyJ5L2/55So5qih5p2/OiAkMScsXG5cdFx0XHQnY2l0ZS1mb3JtLXJlc2V0JzogJ+mHjeioreihqOWWricsXG5cdFx0XHQnY2l0ZS1sb2FkaW5nJzogJ+i8ieWFpeaVuOaTmicsXG5cdFx0XHQvLyBTaG93biB3aGlsZSBwYWdldGV4dCBpcyBiZWluZyBkb3dubG9hZGVkIGZyb20gdGhlIEFQSVxuXHRcdFx0J2NpdGUtaW5zZXJ0LWRhdGUnOiAn5o+S5YWl55W25YmN5pel5pyfJyxcblx0XHRcdC8vIEFsdC90aXRsZSB0ZXh0IGZvciBcImluc2VydCBkYXRlXCIgaWNvblxuXHRcdFx0J2NpdGUtZXJyLXJlcG9ydC1oZWFkaW5nJzogJ+W8leeUqOmMr+iqpOWgseWRiicsXG5cdFx0XHQvLyBIZWFkaW5nIGZvciBlcnJvciByZXBvcnQgdGFibGVcblx0XHRcdCdjaXRlLWVyci1yZXBvcnQtY2xvc2UnOiAn6Zec6ZaJJyxcblx0XHRcdC8vIEFsdC90aXRsZSB0ZXh0IGZvciBcImNsb3NlXCIgaWNvbiBvbiBlcnJvciByZXBvcnRcblx0XHRcdCdjaXRlLWVyci1yZXBvcnQtZW1wdHknOiAn5pyq5om+5Yiw6Yyv6KqkJyxcblx0XHRcdC8vIE1lc3NhZ2UgZGlzcGxheWVkIGluIHRoZSBlcnJvciByZXBvcnQgbGlzdCBpZiB0aGVyZSBhcmUgbm8gZXJyb3JzXG5cdFx0XHQnY2l0ZS1hdXRvZmlsbC1hbHQnOiAn6Ieq5YuV5aGr5YWFJyxcblx0XHRcdC8vIEFsdCB0ZXh0IGZvciBhdXRvZmlsbCBidXR0b24gaW1hZ2Vcblx0XHRcdCdjaXRlLXJlZi10b29sdGlwJzogJ+mMqOm7nueahOaomeitmOespu+8iOS9v+ipsuW8leeUqOWPr+S7peaIkOeCuuWFp+mDqOmAo+e1kOeahOebruaome+8iScsXG5cdFx0XHQnY2l0ZS1wb3N0c2NyaXB0LXRvb2x0aXAnOiAn5aaC5p6c6Kit5a6a6YCZ5LiA5Y+D5pW477yM5YmH6KaG6JOL5L2/55So5Y+l6bue57WC5q2i5byV5paH55qE6buY6KqN6KGM54iyJyxcblx0XHRcdCdjaXRlLWRpYWxvZy13ZWInOiAn57ay6aCB5byV55SoJyxcblx0XHRcdCdjaXRlLWRpYWxvZy1uZXdzJzogJ+aWsOiBnuW8leeUqCcsXG5cdFx0XHQnY2l0ZS1kaWFsb2ctYm9vayc6ICfmm7jnsY3lvJXnlKgnLFxuXHRcdFx0J2NpdGUtZGlhbG9nLWpvdXJuYWwnOiAn5pyf5YiK5byV55SoJyxcblx0XHRcdCdjaXRlLWRpYWxvZy1jb25mZXJlbmNlJzogJ+acg+itsOW8leeUqCcsXG5cdFx0XHQnY2l0ZS1kaWFsb2ctZW5jeWNsb3BlZGlhJzogJ+eZvuenkeWFqOabuOW8leeUqCcsXG5cdFx0XHQnY2l0ZS1hdXRob3ItbGFiZWwnOiAn5L2c6ICFJyxcblx0XHRcdCdjaXRlLXRpdGxlLWxhYmVsJzogJ+aomemhjCcsXG5cdFx0XHQnY2l0ZS11cmwtbGFiZWwnOiAn57ay5Z2AJyxcblx0XHRcdCdjaXRlLXdlYnNpdGUtbGFiZWwnOiAn57ay56uZ5ZCN56ixJyxcblx0XHRcdCdjaXRlLXdvcmstbGFiZWwnOiAn5aCx57SZ5oiW6Zuc6KqMJyxcblx0XHRcdCdjaXRlLWFnZW5jeS1sYWJlbCc6ICfpgJroqIrnpL4nLFxuXHRcdFx0J2NpdGUtcHVibGlzaGVyLWxhYmVsJzogJ+WHuueJiOiAhScsXG5cdFx0XHQnY2l0ZS1hY2Nlc3NkYXRlLWxhYmVsJzogJ+WtmOWPluaXpeacnycsXG5cdFx0XHQnY2l0ZS1sYXN0LWxhYmVsJzogJ+WnkycsXG5cdFx0XHQnY2l0ZS1maXJzdC1sYWJlbCc6ICflkI0nLFxuXHRcdFx0J2NpdGUtYXV0aG9ybGluay1sYWJlbCc6ICfkvZzogIXmop3nm64nLFxuXHRcdFx0J2NpdGUtY29hdXRob3JzLWxhYmVsJzogJ+WFtuS7luS9nOiAhScsXG5cdFx0XHQnY2l0ZS1sb2NhdGlvbi1sYWJlbCc6ICflh7rniYjlnLAnLFxuXHRcdFx0J2NpdGUtcGFnZS1sYWJlbCc6ICfmiYDlnKjpoIEnLFxuXHRcdFx0J2NpdGUtcGFnZXMtbGFiZWwnOiAn6aCB56+E5ZyNJyxcblx0XHRcdCdjaXRlLWF0LWxhYmVsJzogJ+abuOWFp+mDqOWIhicsXG5cdFx0XHQnY2l0ZS1sYW5ndWFnZS1sYWJlbCc6ICfoqp7oqIAnLFxuXHRcdFx0J2NpdGUtZm9ybWF0LWxhYmVsJzogJ+aWh+S7tuagvOW8jycsXG5cdFx0XHQnY2l0ZS1kb2ktbGFiZWwnOiAnRE9JJyxcblx0XHRcdCdjaXRlLWRhdGUtbGFiZWwnOiAn5pel5pyfJyxcblx0XHRcdCdjaXRlLW1vbnRoLWxhYmVsJzogJ+aciOS7vScsXG5cdFx0XHQnY2l0ZS15ZWFyLWxhYmVsJzogJ+W5tOS7vScsXG5cdFx0XHQnY2l0ZS1xdW90ZS1sYWJlbCc6ICfmkZjpjIQnLFxuXHRcdFx0J2NpdGUtbmV3c3BhcGVyLWxhYmVsJzogJ+aWsOiBnuWqkumrlCcsXG5cdFx0XHQnY2l0ZS1hdXRob3IyLWxhYmVsJzogJ+esrDLkvZzogIUnLFxuXHRcdFx0J2NpdGUtYXV0aG9yMy1sYWJlbCc6ICfnrKwz5L2c6ICFJyxcblx0XHRcdCdjaXRlLWF1dGhvcjQtbGFiZWwnOiAn56ysNOS9nOiAhScsXG5cdFx0XHQnY2l0ZS1hdXRob3I1LWxhYmVsJzogJ+esrDXkvZzogIUnLFxuXHRcdFx0J2NpdGUtYWdlbmN5JzogJ+mAmuioiuekvicsXG5cdFx0XHQnY2l0ZS1pc3NuLWxhYmVsJzogJ0lTU04nLFxuXHRcdFx0J2NpdGUtb2NsYy1sYWJlbCc6ICdPQ0xDJyxcblx0XHRcdCdjaXRlLWJpYmNvZGUtbGFiZWwnOiAnQmliY29kZScsXG5cdFx0XHQnY2l0ZS1pc2JuLWxhYmVsJzogJ0lTQk4nLFxuXHRcdFx0J2NpdGUtb3RoZXJzLWxhYmVsJzogJ+itr+iAhScsXG5cdFx0XHQnY2l0ZS1lZGl0aW9uLWxhYmVsJzogJ+eJiOacrCcsXG5cdFx0XHQnY2l0ZS10cmFucy10aXRsZS1sYWJlbCc6ICfnv7vora/lvozmqJnpoYwnLFxuXHRcdFx0J2NpdGUtcmVmLWxhYmVsJzogJ+mMqOm7nuaomeitmOespicsXG5cdFx0XHQnY2l0ZS1wb3N0c2NyaXB0LWxhYmVsJzogJ+e7k+WwvuespicsXG5cdFx0XHQnY2l0ZS1zZXJpZXMtbGFiZWwnOiAn57O75YiXJyxcblx0XHRcdCdjaXRlLXZvbHVtZS1sYWJlbCc6ICfljbcnLFxuXHRcdFx0J2NpdGUtdW5pZmllZC1sYWJlbCc6ICfntbHkuIDmm7jomZ8nLFxuXHRcdFx0J2NpdGUtY2hhcHRlci1sYWJlbCc6ICfnq6Dnr4AnLFxuXHRcdFx0J2NpdGUtam91cm5hbC1sYWJlbCc6ICfpm5zoqowv5pyf5YiKJyxcblx0XHRcdCdjaXRlLWlzc3VlLWxhYmVsJzogJ+acnycsXG5cdFx0XHQnY2l0ZS1wbWlkLWxhYmVsJzogJ1BNSUQnLFxuXHRcdFx0J2NpdGUtZWRpdG9yLWxhYmVsJzogJ+e3qOi8rycsXG5cdFx0XHQnY2l0ZS1lZGl0b3IxLWZpcnN0LWxhYmVsJzogJ+e3qOi8r+WQjScsXG5cdFx0XHQnY2l0ZS1lZGl0b3IxLWxhc3QtbGFiZWwnOiAn57eo6Lyv5aeTJyxcblx0XHRcdCdjaXRlLWVkaXRvcjEtbGluay1sYWJlbCc6ICfnt6jovK/mop3nm64nLFxuXHRcdFx0J2NpdGUtZWRpdG9yLWZpcnN0LWxhYmVsJzogJ+e3qOi8r+WQjScsXG5cdFx0XHQnY2l0ZS1lZGl0b3ItbGFzdC1sYWJlbCc6ICfnt6jovK/lp5MnLFxuXHRcdFx0J2NpdGUtZWRpdG9yLWxpbmstbGFiZWwnOiAn57eo6Lyv5qKd55uuJyxcblx0XHRcdCdjaXRlLXBtYy1sYWJlbCc6ICdQTUMnLFxuXHRcdFx0J2NpdGUtaWQtbGFiZWwnOiAnSUQnLFxuXHRcdFx0J2NpdGUtbGF5c3VtbWFyeS1sYWJlbCc6ICfnsKHmmI7mkZjopoEnLFxuXHRcdFx0J2NpdGUtbGF5c291cmNlLWxhYmVsJzogJ+ewoeaYjuaRmOimgeS+hua6kCcsXG5cdFx0XHQnY2l0ZS1sYXlkYXRlLWxhYmVsJzogJ+ewoeaYjuaRmOimgeaXpeacnycsXG5cdFx0XHQnY2l0ZS1jb25mZXJlbmNlLWxhYmVsJzogJ+acg+itsOWQjeeosScsXG5cdFx0XHQnY2l0ZS1jb25mZXJlbmNldXJsLWxhYmVsJzogJ+acg+itsOe2suWdgCcsXG5cdFx0XHQnY2l0ZS1ib29rdGl0bGUtbGFiZWwnOiAn6KuW5paH6ZuGJyxcblx0XHRcdCdjaXRlLWVuY3ljbG9wZWRpYS1sYWJlbCc6ICfnmb7np5Hlhajmm7jlkI0nLFxuXHRcdFx0J2NpdGUtYXV0aG9ybGluay10b29sdGlwJzogJ+iLpeipsuS9nOiAheacieaineebru+8jOWhq+Wvq+aineebruWQjeeosScsXG5cdFx0XHQnY2l0ZS1hdC10b29sdGlwJzogJ+WFp+WuueWcqOS+hua6kOS4reeahOS9jee9ru+8iOeVtuaMiemggeeivOW8leeUqOS4jemBqeeVtuaZgu+8iScsXG5cdFx0XHQnY2l0ZS1hY2Nlc3NkYXRlLXRvb2x0aXAnOiAn6Kiq5ZWP6YCZ5YCL5byV55So5L6G5rqQ5pmC55qE5pel5pyfJyxcblx0XHRcdCdjaXRlLWlkLXRvb2x0aXAnOiAn5YW25LuW55qE5paH56ug57eo6JmfJyxcblx0XHRcdCdjaXRlLXNhbWVjb250ZW50LWRlc2MnOiAn5qqi5p+l5ZCr5pyJ55u45ZCM5YWn5a6555qE5aSa5YCL5Y+D6ICD5paH5427Jyxcblx0XHRcdCdjaXRlLXNhbWVjb250ZW50LWVycm9yJzogJ+WkmuWAi+WPg+iAg+aWh+eNu+WMheWQq+acieebuOWQjOWFp+WuuScsXG5cdFx0XHQnY2l0ZS1yZXBlYXRlZC1kZXNjJzogJ+S9v+eUqOebuOWQjOWQjeWtl+eahOWkmuWAi+WPg+iAg+aWh+eNuycsXG5cdFx0XHQnY2l0ZS1yZXBlYXRlZC1lcnJvcic6ICflpJrlgIvlj4PogIPmlofnjbvkvb/nlKjkuobnm7jlkIzlkI3lrZcnLFxuXHRcdFx0J2NpdGUtdW5kZWZpbmVkLWRlc2MnOiAn5pyq5a6a576p55qE5Y+D6ICD5paH5427Jyxcblx0XHRcdCdjaXRlLXVuZGVmaW5lZC1lcnJvcic6ICfkuIDlgIvlt7Llkb3lkI3nmoTlj4PogIPmlofnjbvlt7LntpPkvb/nlKjkvYbmmK/mspLmnInlrprnvqknLFxuXHRcdFx0J2NpdGUtd29yay10b29sdGlwJzogJ+WIiueZu+ipsuS9nOWTgeeahOWHuueJiOeJqeeahOWQjeeoseOAguiri+S4jeimgeS9v+eUqOaWnOmrlCcsXG5cdFx0XHQnY2l0ZS1uZXdzcGFwZXItdG9vbHRpcCc6ICfliIrnmbvoqbLmlrDogZ7nmoTlh7rniYjnianlkI3nqLEnLFxuXHRcdFx0J2NpdGUtc2VyaWVzLXRvb2x0aXAnOiAn55W25pu457GN5piv5LiA57O75YiX5Ye654mI5ZOB5Lit55qE5YW25Lit5LiA6YOo5Lu95pmC5L2/55SoJyxcblx0XHRcdCdjaXRlLXVuaWZpZWQtdG9vbHRpcCc6ICcxOTgw5bm05Luj5LmL5YmN5Lit5ZyL5omA5L2/55So55qE5pu457GN57eo6JmfJyxcblx0XHRcdCdjaXRlLWxheXN1bW1hcnktdG9vbHRpcCc6ICfoqbLmlofnjbvnm7jpl5znmoTmlrDogZ7loLHpgZPnmoRVUkwnLFxuXHRcdFx0J2NpdGUtbGF5c291cmNlLXRvb2x0aXAnOiAn6Kmy5paH542755u46Zec55qE5paw6IGe5aCx6YGT55qE5Ye66JmVJyxcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHRtdy5tZXNzYWdlcy5zZXQoe1xuXHRcdFx0J2NpdGUtc2VjdGlvbi1sYWJlbCc6ICflvJXnlKgnLFxuXHRcdFx0J2NpdGUtdGVtcGxhdGUtbGlzdCc6ICfmqKHmnb8nLFxuXHRcdFx0J2NpdGUtbmFtZWQtcmVmcy1sYWJlbCc6ICflkIzlkI3mlofnjK4nLFxuXHRcdFx0J2NpdGUtbmFtZWQtcmVmcy10aXRsZSc6ICfmj5LlhaXlkIzlkI3mlofnjK4nLFxuXHRcdFx0J2NpdGUtbmFtZWQtcmVmcy1idXR0b24nOiAn5bey5ZG95ZCN5Y+C6ICD5paH54yuJyxcblx0XHRcdCdjaXRlLW5hbWVkLXJlZnMtZHJvcGRvd24nOiAn5ZCM5ZCN5paH54yuJyxcblx0XHRcdC8vIFVzZWQgb24gdGhlIHRvcCBvZiB0aGUgbmFtZWQgcmVmcyBsaXN0IGRyb3Bzb3duXG5cdFx0XHQnY2l0ZS1lcnJvcmNoZWNrLWxhYmVsJzogJ+mUmeivr+ajgOafpScsXG5cdFx0XHQnY2l0ZS1lcnJvcmNoZWNrLWJ1dHRvbic6ICfmo4Dmn6XplJnor68nLFxuXHRcdFx0J2NpdGUtZGlhbG9nLWJhc2UnOiAn5byV55SoJyxcblx0XHRcdCdjaXRlLWZvcm0tc3VibWl0JzogJ+aPkuWFpScsXG5cdFx0XHQnY2l0ZS1mb3JtLXNob3doaWRlJzogJ+aYvuekui/pmpDol4/pop3lpJbljLrln58nLFxuXHRcdFx0J2NpdGUtbm8tbmFtZWRyZWZzJzogJ+WcqOacrOmhteaJvuS4jeWIsOS7u+S9leWQjOWQjeaWh+eMricsXG5cdFx0XHQnY2l0ZS1uYW1lZHJlZnMtaW50cm8nOiAn5LuO5YiX5Ye655qE5Y+C6ICD5paH54yu55uu5b2V5Lit6YCJ5oup5LiA5Liq5ZCN5a2X44CC54K55Ye74oCc5o+S5YWl4oCd5o+S5YWl5LiA5Liq5Y+C6ICD5paH54yu5Yiw5paH5pys5Lit44CCJyxcblx0XHRcdCdjaXRlLXJhdy1wcmV2aWV3JzogJ1dpa2l0ZXh0OicsXG5cdFx0XHQnY2l0ZS1wYXJzZWQtbGFiZWwnOiAn6Kej5p6Q5ZCO55qEd2lraXRleHQ6Jyxcblx0XHRcdCdjaXRlLWZvcm0tcGFyc2UnOiAn5pi+56S66Kej5p6Q5ZCO55qE6aKE6KeIJyxcblx0XHRcdCdjaXRlLXJlZnByZXZpZXcnOiAn6aKE6KeIJyxcblx0XHRcdCdjaXRlLW5hbWUtbGFiZWwnOiAncmVm5ZCNJyxcblx0XHRcdCdjaXRlLWdyb3VwLWxhYmVsJzogJ3JlZue7hCcsXG5cdFx0XHQnY2l0ZS1lcnJvcmNoZWNrLXN1Ym1pdCc6ICfmo4Dmn6UnLFxuXHRcdFx0J2NpdGUtZXJyb3JjaGVjay1oZWFkaW5nJzogJ+ajgOafpeS4i+WIl+mUmeivr++8micsXG5cdFx0XHQnY2l0ZS1lcnJvci11bmNsb3NlZCc6ICfmnKrlhbPpl608dHQ+Jmx0O3JlZiZndDs8L3R0Puagh+iusCcsXG5cdFx0XHQnY2l0ZS1lcnJvci1zYW1lY29udGVudCc6ICfmnInnm7jlkIzlhoXlrrnnmoTlj4LogIPmlofnjK4nLFxuXHRcdFx0J2NpdGUtZXJyb3ItdGVtcGxhdGVzJzogYOWPguiAg+aWh+eMruacquS9v+eUqDxhIGhyZWY9XCIke213LnV0aWwuZ2V0VXJsKCdDYXRlZ29yeTrlvJXnlKjmqKHmnb8nKX1cIj7lvJXnlKjmqKHmnb88L2E+YCxcblx0XHRcdCdjaXRlLWVycm9yLXJlcGVhdGVkJzogJ+WkmuS4quWPguiAg+aWh+eMruacieebuOWQjOWQjeensCcsXG5cdFx0XHQnY2l0ZS1lcnJvci11bmRlZic6ICfmnInmnKrlrprkuYnnmoTlkIzlkI3lj4LogIPmlofnjK7lnKjkvb/nlKgnLFxuXHRcdFx0J2NpdGUtZXJyb3Itc2FtZWNvbnRlbnQtbXNnJzogJ+WkmuS4quaWh+eMruWQq+acieebuOWQjOWGheWuuTogJDEnLFxuXHRcdFx0J2NpdGUtZXJyb3ItcmVwZWF0ZWQtbXNnJzogJ+e7meWkmuS4quWPguiAg+aWh+eMruWRveWQjTog4oCcJDHigJ0nLFxuXHRcdFx0J2NpdGUtZXJyb3ItdGVtcGxhdGVzLW1zZyc6ICfmsqHmnInkvb/nlKjmqKHmnb86ICQxJyxcblx0XHRcdCdjaXRlLWZvcm0tcmVzZXQnOiAn6YeN6K6+6KGo5Y2VJyxcblx0XHRcdCdjaXRlLWxvYWRpbmcnOiAn6L295YWl5pWw5o2uJyxcblx0XHRcdC8vIFNob3duIHdoaWxlIHBhZ2V0ZXh0IGlzIGJlaW5nIGRvd25sb2FkZWQgZnJvbSB0aGUgQVBJXG5cdFx0XHQnY2l0ZS1pbnNlcnQtZGF0ZSc6ICfmj5LlhaXlvZPliY3ml6XmnJ8nLFxuXHRcdFx0Ly8gQWx0L3RpdGxlIHRleHQgZm9yIFwiaW5zZXJ0IGRhdGVcIiBpY29uXG5cdFx0XHQnY2l0ZS1lcnItcmVwb3J0LWhlYWRpbmcnOiAn5byV55So6ZSZ6K+v5oql5ZGKJyxcblx0XHRcdC8vIEhlYWRpbmcgZm9yIGVycm9yIHJlcG9ydCB0YWJsZVxuXHRcdFx0J2NpdGUtZXJyLXJlcG9ydC1jbG9zZSc6ICflhbPpl60nLFxuXHRcdFx0Ly8gQWx0L3RpdGxlIHRleHQgZm9yIFwiY2xvc2VcIiBpY29uIG9uIGVycm9yIHJlcG9ydFxuXHRcdFx0J2NpdGUtZXJyLXJlcG9ydC1lbXB0eSc6ICfmnKrmib7liLDplJnor68nLFxuXHRcdFx0Ly8gTWVzc2FnZSBkaXNwbGF5ZWQgaW4gdGhlIGVycm9yIHJlcG9ydCBsaXN0IGlmIHRoZXJlIGFyZSBubyBlcnJvcnNcblx0XHRcdCdjaXRlLWF1dG9maWxsLWFsdCc6ICfoh6rliqjloavlhYUnLFxuXHRcdFx0Ly8gQWx0IHRleHQgZm9yIGF1dG9maWxsIGJ1dHRvbiBpbWFnZVxuXHRcdFx0J2NpdGUtcmVmLXRvb2x0aXAnOiAn6ZSa54K555qE5qCH6K+G56ym77yI5L2/6K+l5byV55So5Y+v5Lul5oiQ5Li65YaF6YOo6ZO+5o6l55qE55uu5qCH77yJJyxcblx0XHRcdCdjaXRlLXBvc3RzY3JpcHQtdG9vbHRpcCc6ICflpoLmnpzorr7lrprov5nkuIDlj4LmlbDvvIzliJnopobnm5bkvb/nlKjlj6Xngrnnu4jmraLlvJXmlofnmoTpu5jorqTooYzkuLonLFxuXHRcdFx0J2NpdGUtZGlhbG9nLXdlYic6ICfnvZHpobXlvJXnlKgnLFxuXHRcdFx0J2NpdGUtZGlhbG9nLW5ld3MnOiAn5paw6Ze75byV55SoJyxcblx0XHRcdCdjaXRlLWRpYWxvZy1ib29rJzogJ+S5puexjeW8leeUqCcsXG5cdFx0XHQnY2l0ZS1kaWFsb2ctam91cm5hbCc6ICfmnJ/liIrlvJXnlKgnLFxuXHRcdFx0J2NpdGUtZGlhbG9nLWNvbmZlcmVuY2UnOiAn5Lya6K6u5byV55SoJyxcblx0XHRcdCdjaXRlLWRpYWxvZy1lbmN5Y2xvcGVkaWEnOiAn55m+56eR5YWo5Lmm5byV55SoJyxcblx0XHRcdCdjaXRlLWF1dGhvci1sYWJlbCc6ICfkvZzogIUnLFxuXHRcdFx0J2NpdGUtdGl0bGUtbGFiZWwnOiAn5qCH6aKYJyxcblx0XHRcdCdjaXRlLXVybC1sYWJlbCc6ICfnvZHlnYAnLFxuXHRcdFx0J2NpdGUtd2Vic2l0ZS1sYWJlbCc6ICfnvZHnq5nlkI3np7AnLFxuXHRcdFx0J2NpdGUtd29yay1sYWJlbCc6ICfmiqXnurjmiJbmnYLlv5cnLFxuXHRcdFx0J2NpdGUtYWdlbmN5LWxhYmVsJzogJ+mAmuiur+ekvicsXG5cdFx0XHQnY2l0ZS1wdWJsaXNoZXItbGFiZWwnOiAn5Ye654mI6ICFJyxcblx0XHRcdCdjaXRlLWFjY2Vzc2RhdGUtbGFiZWwnOiAn6K6/6Zeu5pel5pyfJyxcblx0XHRcdCdjaXRlLWxhc3QtbGFiZWwnOiAn5aeTJyxcblx0XHRcdCdjaXRlLWZpcnN0LWxhYmVsJzogJ+WQjScsXG5cdFx0XHQnY2l0ZS1hdXRob3JsaW5rLWxhYmVsJzogJ+S9nOiAheadoeebricsXG5cdFx0XHQnY2l0ZS1jb2F1dGhvcnMtbGFiZWwnOiAn5YW25LuW5L2c6ICFJyxcblx0XHRcdCdjaXRlLWxvY2F0aW9uLWxhYmVsJzogJ+WHuueJiOWcsCcsXG5cdFx0XHQnY2l0ZS1wYWdlLWxhYmVsJzogJ+aJgOWcqOmhtScsXG5cdFx0XHQnY2l0ZS1wYWdlcy1sYWJlbCc6ICfpobXojIPlm7QnLFxuXHRcdFx0J2NpdGUtYXQtbGFiZWwnOiAn5Lmm5YaF6YOo5YiGJyxcblx0XHRcdCdjaXRlLWxhbmd1YWdlLWxhYmVsJzogJ+ivreiogCcsXG5cdFx0XHQnY2l0ZS1mb3JtYXQtbGFiZWwnOiAn5paH5qGj5qC85byPJyxcblx0XHRcdCdjaXRlLWRvaS1sYWJlbCc6ICdET0knLFxuXHRcdFx0J2NpdGUtZGF0ZS1sYWJlbCc6ICfml6XmnJ8nLFxuXHRcdFx0J2NpdGUtbW9udGgtbGFiZWwnOiAn5pyI5Lu9Jyxcblx0XHRcdCdjaXRlLXllYXItbGFiZWwnOiAn5bm05Lu9Jyxcblx0XHRcdCdjaXRlLXF1b3RlLWxhYmVsJzogJ+aRmOW9lScsXG5cdFx0XHQnY2l0ZS1uZXdzcGFwZXItbGFiZWwnOiAn5paw6Ze75aqS5L2TJyxcblx0XHRcdCdjaXRlLWF1dGhvcjItbGFiZWwnOiAn56ysMuS9nOiAhScsXG5cdFx0XHQnY2l0ZS1hdXRob3IzLWxhYmVsJzogJ+esrDPkvZzogIUnLFxuXHRcdFx0J2NpdGUtYXV0aG9yNC1sYWJlbCc6ICfnrKw05L2c6ICFJyxcblx0XHRcdCdjaXRlLWF1dGhvcjUtbGFiZWwnOiAn56ysNeS9nOiAhScsXG5cdFx0XHQnY2l0ZS1hZ2VuY3knOiAn6YCa6K6v56S+Jyxcblx0XHRcdCdjaXRlLWlzc24tbGFiZWwnOiAnSVNTTicsXG5cdFx0XHQnY2l0ZS1vY2xjLWxhYmVsJzogJ09DTEMnLFxuXHRcdFx0J2NpdGUtYmliY29kZS1sYWJlbCc6ICdCaWJjb2RlJyxcblx0XHRcdCdjaXRlLWlzYm4tbGFiZWwnOiAnSVNCTicsXG5cdFx0XHQnY2l0ZS1vdGhlcnMtbGFiZWwnOiAn6K+R6ICFJyxcblx0XHRcdCdjaXRlLWVkaXRpb24tbGFiZWwnOiAn54mI5pysJyxcblx0XHRcdCdjaXRlLXRyYW5zLXRpdGxlLWxhYmVsJzogJ+e/u+ivkeWQjuagh+mimCcsXG5cdFx0XHQnY2l0ZS1yZWYtbGFiZWwnOiAn6ZSa54K55qCH6K+G56ymJyxcblx0XHRcdCdjaXRlLXBvc3RzY3JpcHQtbGFiZWwnOiAn57uT5bC+56ymJyxcblx0XHRcdCdjaXRlLXNlcmllcy1sYWJlbCc6ICfns7vliJcnLFxuXHRcdFx0J2NpdGUtdm9sdW1lLWxhYmVsJzogJ+WNtycsXG5cdFx0XHQnY2l0ZS11bmlmaWVkLWxhYmVsJzogJ+e7n+S4gOS5puWPtycsXG5cdFx0XHQnY2l0ZS1jaGFwdGVyLWxhYmVsJzogJ+eroOiKgicsXG5cdFx0XHQnY2l0ZS1qb3VybmFsLWxhYmVsJzogJ+adguW/ly/mnJ/liIonLFxuXHRcdFx0J2NpdGUtaXNzdWUtbGFiZWwnOiAn5pyfJyxcblx0XHRcdCdjaXRlLXBtaWQtbGFiZWwnOiAnUE1JRCcsXG5cdFx0XHQnY2l0ZS1lZGl0b3ItbGFiZWwnOiAn57yW6L6RJyxcblx0XHRcdCdjaXRlLWVkaXRvcjEtZmlyc3QtbGFiZWwnOiAn57yW6L6R5ZCNJyxcblx0XHRcdCdjaXRlLWVkaXRvcjEtbGFzdC1sYWJlbCc6ICfnvJbovpHlp5MnLFxuXHRcdFx0J2NpdGUtZWRpdG9yMS1saW5rLWxhYmVsJzogJ+e8lui+keadoeebricsXG5cdFx0XHQnY2l0ZS1lZGl0b3ItZmlyc3QtbGFiZWwnOiAn57yW6L6R5ZCNJyxcblx0XHRcdCdjaXRlLWVkaXRvci1sYXN0LWxhYmVsJzogJ+e8lui+keWnkycsXG5cdFx0XHQnY2l0ZS1lZGl0b3ItbGluay1sYWJlbCc6ICfnvJbovpHmnaHnm64nLFxuXHRcdFx0J2NpdGUtcG1jLWxhYmVsJzogJ1BNQycsXG5cdFx0XHQnY2l0ZS1pZC1sYWJlbCc6ICdJRCcsXG5cdFx0XHQnY2l0ZS1sYXlzdW1tYXJ5LWxhYmVsJzogJ+eugOaYjuaRmOimgScsXG5cdFx0XHQnY2l0ZS1sYXlzb3VyY2UtbGFiZWwnOiAn566A5piO5pGY6KaB5p2l5rqQJyxcblx0XHRcdCdjaXRlLWxheWRhdGUtbGFiZWwnOiAn566A5piO5pGY6KaB5pel5pyfJyxcblx0XHRcdCdjaXRlLWNvbmZlcmVuY2UtbGFiZWwnOiAn5Lya6K6u5ZCN56ewJyxcblx0XHRcdCdjaXRlLWNvbmZlcmVuY2V1cmwtbGFiZWwnOiAn5Lya6K6u572R5Z2AJyxcblx0XHRcdCdjaXRlLWJvb2t0aXRsZS1sYWJlbCc6ICforrrmlofpm4YnLFxuXHRcdFx0J2NpdGUtZW5jeWNsb3BlZGlhLWxhYmVsJzogJ+eZvuenkeWFqOS5puWQjScsXG5cdFx0XHQnY2l0ZS1hdXRob3JsaW5rLXRvb2x0aXAnOiAn6Iul6K+l5L2c6ICF5pyJ5p2h55uu77yM5aGr5YaZ5p2h55uu5ZCN56ewJyxcblx0XHRcdCdjaXRlLWF0LXRvb2x0aXAnOiAn5YaF5a655Zyo5p2l5rqQ5Lit55qE5L2N572u77yI5b2T5oyJ6aG156CB5byV55So5LiN6YCC5b2T5pe277yJJyxcblx0XHRcdCdjaXRlLWFjY2Vzc2RhdGUtdG9vbHRpcCc6ICforr/pl67ov5nkuKrlvJXnlKjmnaXmupDml7bnmoTml6XmnJ8nLFxuXHRcdFx0J2NpdGUtaWQtdG9vbHRpcCc6ICflhbbku5bnmoTmlofnq6DnvJblj7cnLFxuXHRcdFx0J2NpdGUtc2FtZWNvbnRlbnQtZGVzYyc6ICfmo4Dmn6XlkKvmnInnm7jlkIzlhoXlrrnnmoTlpJrkuKrlj4LogIPmlofnjK4nLFxuXHRcdFx0J2NpdGUtc2FtZWNvbnRlbnQtZXJyb3InOiAn5aSa5Liq5Y+C6ICD5paH54yu5YyF5ZCr5pyJ55u45ZCM5YaF5a65Jyxcblx0XHRcdCdjaXRlLXJlcGVhdGVkLWRlc2MnOiAn5L2/55So55u45ZCM5ZCN5a2X55qE5aSa5Liq5Y+C6ICD5paH54yuJyxcblx0XHRcdCdjaXRlLXJlcGVhdGVkLWVycm9yJzogJ+WkmuS4quWPguiAg+aWh+eMruS9v+eUqOS6huebuOWQjOWQjeWtlycsXG5cdFx0XHQnY2l0ZS11bmRlZmluZWQtZGVzYyc6ICfmnKrlrprkuYnnmoTlj4LogIPmlofnjK4nLFxuXHRcdFx0J2NpdGUtdW5kZWZpbmVkLWVycm9yJzogJ+S4gOS4quW3suWRveWQjeeahOWPguiAg+aWh+eMruW3sue7j+S9v+eUqOS9huaYr+ayoeacieWumuS5iScsXG5cdFx0XHQnY2l0ZS13b3JrLXRvb2x0aXAnOiAn5YiK55m76K+l5L2c5ZOB55qE5Ye654mI54mp55qE5ZCN56ew44CC6K+35LiN6KaB5L2/55So5pac5L2TJyxcblx0XHRcdCdjaXRlLW5ld3NwYXBlci10b29sdGlwJzogJ+WIiueZu+ipsuaWsOiBnueahOWHuueJiOeJqeWQjeensCcsXG5cdFx0XHQnY2l0ZS1zZXJpZXMtdG9vbHRpcCc6ICflvZPkuabnsY3mmK/kuIDns7vliJflh7rniYjlk4HkuK3nmoTlhbbkuK3kuIDpg6jku73ml7bkvb/nlKgnLFxuXHRcdFx0J2NpdGUtdW5pZmllZC10b29sdGlwJzogJzE5ODDlubTku6PkuYvliY3kuK3lm73miYDkvb/nlKjnmoTkuabnsY3nvJblj7cnLFxuXHRcdFx0J2NpdGUtbGF5c3VtbWFyeS10b29sdGlwJzogJ+ivpeaWh+eMruebuOWFs+eahOaWsOmXu+aKpemBk+eahFVSTCcsXG5cdFx0XHQnY2l0ZS1sYXlzb3VyY2UtdG9vbHRpcCc6ICfor6XmlofnjK7nm7jlhbPnmoTmlrDpl7vmiqXpgZPnmoTlh7rlpIQnLFxuXHRcdH0pO1xuXHR9XG59O1xuXG5leHBvcnQge3JlZlRvb2xiYXJNZXNhZ2VzfTtcbiIsICJpbXBvcnQge0lTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTiwgV0dfUEFHRV9DT05URU5UX01PREVMfSBmcm9tICcuL21vZHVsZXMvY29uc3RhbnQnO1xuaW1wb3J0IHtyZWZUb29sYmFyMn0gZnJvbSAnLi9tb2R1bGVzL1JlZlRvb2xiYXIyLjAnO1xuaW1wb3J0IHtyZWZUb29sYmFyQmFzZX0gZnJvbSAnLi9tb2R1bGVzL1JlZlRvb2xiYXJCYXNlJztcbmltcG9ydCB7cmVmVG9vbGJhck1lc2FnZXN9IGZyb20gJy4vbW9kdWxlcy9tZXNzYWdlcyc7XG5cbi8qKlxuICogUmVmVG9vbGJhclxuICpcbiAqIEFkZHMgdG9vbHMgZm9yIGNpdGluZyByZWZlcmVuY2VzIHRvIHRoZSBlZGl0IHRvb2xiYXIuXG4gKiBPbmUgb2YgdHdvIHBvc3NpYmxlIHZlcnNpb25zIHdpbGwgbG9hZCAoUmVmdG9vbGJhciAxLjAgb3IgUmVmdG9vbGJhciAxLjApXG4gKiBkZXBlbmRpbmcgb24gdGhlIHVzZXIgcHJlZmVyZW5jZXMgKHRoZSB1c2ViZXRhdG9vbGJhciBwcmVmZXJlbmNlKS5cbiAqXG4gKiBAYXV0aG9yIE1yLlotbWFuLCBLYWxkYXJpXG4gKi9cbigoKTogdm9pZCA9PiB7XG5cdGlmIChtdy5jb25maWcuZ2V0KCd3Z1JlZlRvb2xiYXJJbnN0YWxsZWQnKSkge1xuXHRcdHJldHVybjtcblx0fSAvLyBTZXQgZ3VhcmRcblx0bXcuY29uZmlnLnNldCgnd2dSZWZUb29sYmFySW5zdGFsbGVkJywgdHJ1ZSk7XG5cblx0Ly8gT25seSBleGVjdXRlIHdoZW4gZWRpdGluZy9wcmV2aWV3aW5nIHdpa2l0ZXh0IHBhZ2VzXG5cdGlmICghSVNfV0dfRURJVF9PUl9TVUJNSVRfQUNUSU9OIHx8IFdHX1BBR0VfQ09OVEVOVF9NT0RFTCAhPT0gJ3dpa2l0ZXh0Jykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmICghbXcudXNlci5vcHRpb25zLmdldCgndXNlYmV0YXRvb2xiYXInKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd3BUZXh0Ym94MVtyZWFkb25seV0nKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIExvYWQgbG9jYWwgbWVzc2FnZXMuXG5cdHJlZlRvb2xiYXJNZXNhZ2VzKCk7XG5cdC8vIExvYWQgbWFpbiBmdW5jdGlvbnNcblx0cmVmVG9vbGJhckJhc2UoKTtcblx0dm9pZCByZWZUb29sYmFyMigpO1xufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7QUFBQTtBQUFBLCtFQUFBQSxVQUFBQyxTQUFBO0FBQUE7QUFDQSxRQUFJLFFBQVEsU0FBVSxJQUFJO0FBQ3hCLGFBQU8sTUFBTSxHQUFHLFNBQVMsUUFBUTtBQUFBLElBQ25DO0FBR0EsSUFBQUEsUUFBTztBQUFBLElBRUwsTUFBTSxPQUFPLGNBQWMsWUFBWSxVQUFVLEtBQ2pELE1BQU0sT0FBTyxVQUFVLFlBQVksTUFBTTtBQUFBLElBRXpDLE1BQU0sT0FBTyxRQUFRLFlBQVksSUFBSSxLQUNyQyxNQUFNLE9BQU8sVUFBVSxZQUFZLE1BQU0sS0FDekMsTUFBTSxPQUFPRCxZQUFRLFlBQVlBLFFBQUk7QUFBQSxJQUVwQywyQkFBWTtBQUFFLGFBQU87QUFBQSxJQUFNLEVBQUcsS0FBSyxTQUFTLGFBQWEsRUFBRTtBQUFBO0FBQUE7OztBQ2Y5RDtBQUFBLDhFQUFBRSxVQUFBQyxTQUFBO0FBQUE7QUFDQSxJQUFBQSxRQUFPLFVBQVUsU0FBVSxNQUFNO0FBQy9CLFVBQUk7QUFDRixlQUFPLENBQUMsQ0FBQyxLQUFLO0FBQUEsTUFDaEIsU0FBUyxPQUFPO0FBQ2QsZUFBTztBQUFBLE1BQ1Q7QUFBQSxJQUNGO0FBQUE7QUFBQTs7O0FDUEE7QUFBQSxvRkFBQUMsVUFBQUMsU0FBQTtBQUFBO0FBQ0EsUUFBSSxRQUFRO0FBR1osSUFBQUEs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IiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbCIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbCIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAiU3ltYm9sIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbCIsICJkb2N1bWVudCIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbCIsICJUeXBlRXJyb3IiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJleHBvcnRzIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAibW9kdWxlIiwgImdsb2JhbCIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIm1vZHVsZSIsICIkIiwgIldHX0FDVElPTiIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIldHX1BBR0VfQ09OVEVOVF9NT0RFTCIsICJXR19VU0VSX0xBTkdVQUdFIiwgIklTX1dHX0VESVRfT1JfU1VCTUlUX0FDVElPTiIsICJpbmNsdWRlcyIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImFyZ3MiLCAibGVuZ3RoIiwgIm1lc3NhZ2UiLCAicGFyc2UiLCAicGxhaW4iLCAicmVmVG9vbGJhckNvbmZpZyIsICJDaXRlVGVtcGxhdGUiLCAiQ2l0ZUVycm9yQ2hlY2siLCAid2luZG93IiwgIkNpdGVUQiIsICJPcHRpb25zIiwgIm1vbnRocyIsICJtb2RhbCIsICJhdXRvcGFyc2UiLCAiZXhwYW5kdGVtcGxhdGVzIiwgImZpZWxkIiwgImluY3JlbWVudF9ncm91cCIsICJpbmNyZW1lbnRfYnV0dG9uIiwgImF1dG9maWxscHJvcCIsICJhdXRvZmlsbGlkIiwgInRvb2x0aXAiLCAidHlwZSIsICJ0ZXN0bmFtZSIsICJkZXNjIiwgImZ1bmMiLCAicmVmbGlzdCIsICJlcnJvcnMiLCAicmVmczIiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImVsZW1lbnQiLCAidmFsdWUiLCAic2hvcnR0YWciLCAiY29udGVudCIsICJwdXNoIiwgImVyciIsICJlIiwgImYiLCAicmV0IiwgIl9pIiwgIl9lcnJvcnMiLCAiZXJyb3IiLCAibXNnIiwgIl9pdGVyYXRvcjIiLCAiX3N0ZXAyIiwgInJlZm5hbWUiLCAiX2kyIiwgIl9lcnJvcnMyIiwgImxvbmdyZWZzIiwgIl9pMyIsICJfT2JqZWN0JHZhbHVlcyIsICJPYmplY3QiLCAidmFsdWVzIiwgIl9pNCIsICJfZXJyb3JzMyIsICJpbml0IiwgInJlZlRvb2xiYXIyIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAiJGJvZHkiLCAiZ2V0Qm9keSIsICJhcGkiLCAiaW5pdE13QXBpIiwgIkRlZmF1bHRPcHRpb25zIiwgImdldE9wdGlvbiIsICJvcHQiLCAiVXNlck9wdGlvbnMiLCAiXyQkd2lkdGgyIiwgIl8kJHdpZHRoMyIsICIkIiwgImRvY3VtZW50IiwgImZpbmQiLCAidHJpZ2dlciIsICIkdGFyZ2V0IiwgInRlbWxpc3QiLCAidCIsICJUZW1wbGF0ZXMiLCAiaGFzT3duIiwgIl8kJHdpZHRoIiwgInRlbSIsICJzZm9ybSIsICJlc2NTdHIiLCAic2hvcnRmb3JtIiwgImFjdGlvbm9iaiIsICJtb2R1bGUiLCAiY29uY2F0IiwgImRpYWxvZ29iaiIsICJyZXNpemVtZSIsICJ0aXRsZU1zZyIsICJpZCIsICJodG1sIiwgImdldEluaXRpYWwiLCAiZGlhbG9nIiwgIndpZHRoIiwgIk1hdGgiLCAicm91bmQiLCAib3BlbiIsICJnZXRPcGVuVGVtcGxhdGUiLCAiZ2V0Rm9ybSIsICJvbiIsICJwcmV2ZW50RGVmYXVsdCIsICJwcmV2UGFyc2VDbGljayIsICJidXR0b25zIiwgInJlZiIsICJnZXRSZWYiLCAid2lraUVkaXRvciIsICJtb2R1bGVzIiwgInRvb2xiYXIiLCAiZm4iLCAiZG9BY3Rpb24iLCAiZGF0YSIsICJvcHRpb25zIiwgInBvc3QiLCAic2hvd0hpZGVFeHRyYSIsICJ0ZW1wbGF0ZSIsICJkaXYiLCAic2hvdyIsICJ0ZXh0IiwgImhpZGUiLCAicmVzZXRGb3JtIiwgImxhYmVsIiwgInRlbXBsYXRlbmFtZSIsICJhY3Rpb24iLCAicmVmc2VjdGlvbiIsICJzZWN0aW9ucyIsICJjaXRlcyIsICJsYWJlbE1zZyIsICJncm91cHMiLCAidG9vbHMiLCAibGlzdCIsICJuYW1lZHJlZnMiLCAibnJlZnMiLCAiaWNvbiIsICJzZWN0aW9uIiwgImdyb3VwIiwgImVycm9yY2hlY2siLCAiZWNoZWNrIiwgImRlZmF1bHRkaWFsb2dzIiwgImxvYWRSZWZzIiwgImVycm9yY2hlY2tzIiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgIkVycm9yQ2hlY2tzIiwgInZhbCIsICJydW4iLCAiZGlzcGxheUVycm9ycyIsICJnZXROYW1lZFJlZiIsICJvZmYiLCAidXRpbCIsICJhZGRDU1MiLCAibWFpblJlZkxpc3QiLCAicmVmc0xvYWRlZCIsICJpbm5lcm9ubHkiLCAiZm9yaW5zZXJ0IiwgImkiLCAiaiIsICJnIiwgInJlcyIsICJyZWZvYmoiLCAiU3RyaW5nIiwgInRyaW0iLCAiZ2V0UXVvdGVkU3RyaW5nIiwgInJlZmdyb3VwIiwgImluY3JlbWVudGFibGVzIiwgImZpZWxkcyIsICJmaWVsZG5hbWUiLCAiZmllbGRpZCIsICJyZXBsYWNlIiwgInRvU3RyaW5nIiwgImJhc2ljIiwgImV4dHJhIiwgImdldFBhZ2VUZXh0IiwgImxvYWRSZWZzSW50ZXJuYWwiLCAicmVmc3JlZ2V4IiwgImV4ZWMiLCAic2V0dXBFcnJvckNoZWNrIiwgInNldHVwTmFtZWRSZWZzIiwgImNhbGxiYWNrIiwgInBvc3RkYXRhIiwgInRpdGxlIiwgInByb3AiLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAidGhlbiIsICJyZXN0ZXh0IiwgIndpa2l0ZXh0IiwgInJ2cHJvcCIsICJwYWdlaWRzIiwgInJ2ZXhwYW5kdGVtcGxhdGVzIiwgInF1ZXJ5IiwgInBhZ2V0ZXh0IiwgInBhZ2VzIiwgInJldmlzaW9ucyIsICJzYWZlRGVjb2RlVVJJQ29tcG9uZW50IiwgImRlY29kZVVSSUNvbXBvbmVudCIsICJpbml0QXV0b2ZpbGwiLCAiXyQkYXR0ciIsICJlbGVtaWQiLCAiYXR0ciIsICJhdXRvdHlwZSIsICJ1cmwiLCAiZW5jb2RlVVJJQ29tcG9uZW50IiwgImNyZWF0ZUVsZW1lbnQiLCAic2V0QXR0cmlidXRlIiwgImhlYWQiLCAiYXBwZW5kIiwgImF1dG9GaWxsIiwgImNsIiwgImNvYXV0aG9ycyIsICJhdXRob3JzIiwgIl8kJGVxJGF0dHIiLCAiY2xhc3NlcyIsICJlcSIsICJzcGxpdCIsICJwYXR0IiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgImNsYXNzXyIsICJfJCRlcSRhdHRyMiIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJqb2luIiwgImRhdGUiLCAiRFQiLCAiRGF0ZSIsICJ0ZXN0IiwgImZvcm1hdERhdGUiLCAiam91cm5hbCIsICJ2b2x1bWUiLCAiaXNzdWUiLCAiZG9pIiwgInB1Ymxpc2hlciIsICJsb2NhdGlvbiIsICJlZGl0aW9uIiwgImlzYm4iLCAiaXNzbiIsICJsYW5ndWFnZSIsICJjaGFwdGVyIiwgImluY3JlbWVudEZpZWxkcyIsICJfJCRhdHRyMiIsICJjdXJyZW50cm93IiwgInBhcmVudHMiLCAicHJldiIsICJjc3MiLCAiZGV0YWNoIiwgImluY3JlbWVudHMiLCAidHJzIiwgIm1ha2VGb3JtSW5uZXIiLCAicmV2ZXJzZSIsICJfaXRlcmF0b3I2IiwgIl9zdGVwNiIsICJ0ciIsICJhZnRlciIsICJmaWxsQWNjZXNzZGF0ZSIsICJfJCRhdHRyMyIsICJkYXRlc3RyIiwgInVzZWRheSIsICJ1c2Vtb250aCIsICJ6bW9udGgiLCAibW9udGgiLCAiZ2V0VVRDTW9udGgiLCAiemRhdGUiLCAiZ2V0VVRDRGF0ZSIsICJnZXRVVENGdWxsWWVhciIsICJuYW1lcyIsICJzdHVmZiIsICJzZWxlY3QiLCAiYmVmb3JlIiwgInByZXZsYWJlbCIsICJwYXJzZWxhYmVsIiwgImxpbmsiLCAiaHJlZiIsICJtYXJnaW4iLCAiZGlzcGxheSIsICJjb2xvciIsICJuYW1lZFJlZlNlbGVjdENsaWNrIiwgIm5yZWZQYXJzZUNsaWNrIiwgImZvcm0iLCAidWwiLCAiZ2V0Um93IiwgImZpbGxOcmVmUHJldmlldyIsICJwYXJzZWQiLCAiY2hvaWNlIiwgImxhc3RuYW1lZHJlZmNob2ljZSIsICJmaWxsVGVtcGxhdGVQcmV2aWV3IiwgInNldHRpbmciLCAic3EiLCAiZHEiLCAiZml4U3RyIiwgInNsaWNlIiwgInRvVXBwZXJDYXNlIiwgImRpYWxvZ3MiLCAicmVtb3ZlIiwgInRhYmxlIiwgImJvcmRlciIsICJwYWRkaW5nIiwgInRyMSIsICJ0aDEiLCAidGgyIiwgImltIiwgImFkIiwgInRkIiwgInRkMSIsICJ0ZDIiLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgInJlZlRvb2xiYXJCYXNlIiwgIl93aW5kb3ciLCAiY29uc3RydWN0b3IiLCAiYmFzaWNmaWVsZHMiLCAiZXhwYW5kZWRmaWVsZHMiLCAiaW5jcnNldHVwIiwgImF1dG9maWxscyIsICJfaXRlcmF0b3I3IiwgImVudHJpZXMiLCAiX3N0ZXA3IiwgImZpZWxkb2JqIiwgImxhYmVsZmllbGQiLCAic2V0dXAiLCAiaW5jcnZhbCIsICJhdXRvZGF0ZUZpZWxkcyIsICJpbmNydHlwZSIsICJpbnB1dCIsICJ0YWJpbmRleCIsICJzdHlsZSIsICJjbGFzc25hbWUiLCAiYWRkQ2xhc3MiLCAibmVlZHNldHVwIiwgImtleXMiLCAiX2l0ZXJhdG9yOCIsICJfc3RlcDgiLCAiYXV0b2ZpbGwiLCAiaGlkZGVuIiwgIm1haW4iLCAiZm9ybTEiLCAiX2l0ZXJhdG9yOSIsICJfc3RlcDkiLCAiZm9ybTIiLCAiX2l0ZXJhdG9yMTAiLCAiX3N0ZXAxMCIsICJmb3JtMyIsICIkdHIiLCAiJHRkMSIsICIkbGFiZWwxIiwgImlucHV0MSIsICJ0ZDMiLCAibGFiZWwyIiwgInRkNCIsICJpbnB1dDIiLCAiZXh0cmFzIiwgInNwYW4xIiwgInNwYW4yIiwgIm9iaiIsICJyb3ciLCAiY2hlY2siLCAibmFtZSIsICJyZWZUb29sYmFyTWVzYWdlcyIsICJtZXNzYWdlcyIsICJzZXQiLCAiZ2V0VXJsIiwgInVzZXIiLCAicXVlcnlTZWxlY3RvciJdCn0K

})();

/* </nowiki> */

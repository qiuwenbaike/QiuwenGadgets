/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|title=ToolsRedirect|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-ToolsRedirect.js}
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-ToolsRedirect.css}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/ToolsRedirect}
 */

/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|title2=ToolsRedirect Messages|license2=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-ToolsRedirect-msg-zh-hans.js}
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-ToolsRedirect-msg-zh-hant.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/ToolsRedirect/messages.js}
 */

/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|title3=ToolsRedirect-bio-latin-names|license3=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/Special:Permalink/61193369}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/ToolsRedirect/bio-latin-names.js}
 */

/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|title3=ToolsRedirect-courtesy-and-art-names|license3=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-ToolsRedirect-courtesy-and-art-names.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/ToolsRedirect/courtesy-and-art-names.js}
 */

/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|title3=ToolsRedirect-opt-bolds|license3=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-ToolsRedirect-opt-bolds.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/ToolsRedirect/opt-bolds.js}
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

// dist/ToolsRedirect/ToolsRedirect.js
//! src/ToolsRedirect/modules/constant.ts
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
var WG_NAMESPACE_IDS = mw.config.get("wgNamespaceIds");
var WG_NAMESPACE_NUMBER = mw.config.get("wgNamespaceNumber");
var WG_PAGE_NAME = mw.config.get("wgPageName");
var WG_USER_LANGUAGE = mw.config.get("wgUserLanguage");
var IS_CATEGORY = WG_NAMESPACE_NUMBER === 14;
var SUFFIX_APPEND = 0;
var SUFFIX_REPLACE = 1;
var SUFFIX_SETDEFAULT = 2;
var EDIT_TAG = "ToolsRedirect";
var VARIANTS = ["zh-hans", "zh-hant", "zh-cn", "zh-hk", "zh-mo", "zh-sg", "zh-my", "zh-tw"];
//! src/ToolsRedirect/modules/util/getMessages.ts
var getMessage = (key, ...args) => {
  key = "toolsredirect-".concat(key);
  return args.length ? mw.message(key, ...args).parse() : mw.message(key).plain();
};
//! src/ToolsRedirect/modules/core.js
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("ToolsRedirect/2.0");
var findRedirectCallbacks = [];
var pageWithRedirectTextSuffix = {};
var redirectExcludes = {};
var nsPrefixes = [];
var nsCanonPrefix;
var nsPrefixPattern;
for (_i = 0, _Object$entries = Object.entries(WG_NAMESPACE_IDS); _i < _Object$entries.length; _i++) {
  const [text, nsid] = _Object$entries[_i];
  if (nsid === WG_NAMESPACE_NUMBER && !!text) {
    nsPrefixes.push(text);
  }
}
var _i;
var _Object$entries;
if (WG_NAMESPACE_NUMBER === 0) {
  nsCanonPrefix = "";
  nsPrefixPattern = /^/;
} else {
  nsCanonPrefix = "".concat(WG_PAGE_NAME.split(":")[0], ":");
  nsPrefixPattern = new RegExp("^(".concat(nsPrefixes.join("|"), "):"), "i");
}
var fixNamespace = (title) => {
  if (WG_NAMESPACE_NUMBER === 0) {
    return title;
  } else if (nsPrefixPattern.test(title)) {
    return title.replace(nsPrefixPattern, nsCanonPrefix);
  }
  return nsCanonPrefix + title;
};
var findRedirectCallback = function(callback, ...args) {
  if (callback) {
    findRedirectCallbacks.push(callback);
  } else {
    findRedirectCallbacks.push(callback, ...args);
  }
  return this;
};
var findRedirectBySelector = function(selector) {
  findRedirectCallbacks.push(() => {
    return $(selector).map((_index, element) => {
      return $(element).eq(0).text().trim() || null;
    });
  });
  return this;
};
var setRedirectTextSuffix = (title, suffix, flag) => {
  let flag_set = false;
  let flag_append = false;
  flag || (flag = SUFFIX_APPEND);
  flag_set = flag === SUFFIX_REPLACE;
  title = fixNamespace(title);
  if (title in pageWithRedirectTextSuffix) {
    flag_append = flag === SUFFIX_APPEND;
  } else {
    flag_set = true;
  }
  if (flag_set) {
    pageWithRedirectTextSuffix[title] = suffix;
  } else if (flag_append) {
    pageWithRedirectTextSuffix[title] += suffix;
  }
};
window.toolsRedirect = {
  findRedirectCallback,
  findRedirectBySelector,
  setRedirectTextSuffix
};
var ToolsRedirect = {
  tabselem: null,
  tagselem: null,
  variants: VARIANTS,
  init() {
    const self2 = this;
    const $body = $("body");
    const button = $("<li>").addClass("mw-list-item collapsible vector-tab-noicon").attr("id", "ca-redirect").css("cursor", "pointer").append($("<a>").attr("title", getMessage("btndesc")).text(getMessage("btntitle")));
    button.on("click", (event) => {
      event.preventDefault();
      self2.dialog();
    });
    $body.find("li#ca-history").after(button);
  },
  dialog() {
    const dialog = $("<div>").attr("title", getMessage("dlgtitle")).addClass("dialog-redirect").dialog({
      bgiframe: true,
      resizable: false,
      modal: true,
      width: Math.round($(window).width() * 0.8),
      position: "center"
    });
    dialog.css("max-height", "".concat(Math.round($(window).height() * 0.8), "px"));
    this.tabselem = $("<div>").addClass("tab-redirect").appendTo(dialog);
    this.tagselem = $("<ul>").appendTo(this.tabselem);
    this.addTabs();
    this.tabselem.tabs();
  },
  addTabs() {
    for (const kname in this.tabs) {
      if (Object.hasOwn(this.tabs, kname)) {
        if (this.tabs[kname] === null) {
          this.tabs[kname] = this["_initTab".concat(kname[0].charAt(0).toUpperCase()).concat(kname.slice(1))]();
        }
        const tab = this.tabs[kname];
        this.tagselem.append(tab.tag);
        this.tabselem.append(tab.cont);
      }
    }
    this.loadView();
  },
  createTab(tabname, tabtitle, onClick) {
    const self2 = this;
    const tag = $("<li>").append($("<a>").attr("href", "#tab-".concat(tabname)).text(tabtitle));
    const cont = $("<div>").attr("id", "tab-".concat(tabname));
    $("a", tag).on("click", () => {
      onClick.call(self2);
    });
    return {
      tag,
      cont,
      loaded: false
    };
  },
  _initTabView() {
    return this.createTab("view", getMessage("tabviewtitle"), this.loadView);
  },
  _initTabCreate() {
    return this.createTab("create", getMessage("tabcreatetitle"), this.loadCreate);
  },
  tabs: {
    view: null,
    create: null
  },
  fix(pagenames) {
    const self2 = this;
    $("p.desc", self2.tabs.view.cont).text(getMessage("fixloading"));
    $("p[class!=desc]", self2.tabs.view.cont).remove();
    self2.loading(self2.tabs.view.cont);
    self2.bulkEditByRegex(pagenames, /\s*\[\[.*?\]\]/, " [[".concat(WG_PAGE_NAME, "]]"), getMessage("fixsummary")).then(() => {
      setTimeout(() => {
        self2.loaded(self2.tabs.view.cont);
        self2.loadView(true);
      }, 3e3);
    });
  },
  create(pagenames) {
    const self2 = this;
    $("p.desc", self2.tabs.create.cont).text(getMessage("createloading"));
    $("p[class!=desc]", self2.tabs.create.cont).remove();
    self2.loading(self2.tabs.create.cont);
    self2.bulkEdit(pagenames, getMessage("createtext").replace("$1", WG_PAGE_NAME), getMessage("createsummary").replace("$1", WG_PAGE_NAME)).then(() => {
      setTimeout(() => {
        self2.loaded(self2.tabs.create.cont);
        self2.tabs.view.loaded = false;
        self2.loadCreate(true);
      }, 500);
    });
  },
  addRedirectTextSuffix(title, text) {
    if (title in pageWithRedirectTextSuffix) {
      text += pageWithRedirectTextSuffix[title];
    }
    return text;
  },
  bulkEdit(titles, text, summary) {
    const self2 = this;
    titles = titles.filter((v, i, arr) => {
      return arr.indexOf(v) === i;
    });
    titles = titles.join("|");
    return api.post({
      action: "query",
      format: "json",
      formatversion: "2",
      prop: "info",
      titles
    }).then(({
      query
    }) => {
      const deferreds = [];
      var _iterator = _createForOfIteratorHelper(query.pages), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          const {
            title
          } = _step.value;
          deferreds.push(api.postWithToken("csrf", {
            action: "edit",
            format: "json",
            formatversion: "2",
            title,
            text: self2.addRedirectTextSuffix(title, text),
            summary,
            tags: EDIT_TAG
          }));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return $.when(...deferreds);
    });
  },
  bulkEditByRegex(titles, regex, text, summary) {
    titles = titles.filter((v, i, arr) => {
      return arr.indexOf(v) === i;
    });
    titles = titles.join("|");
    return api.post({
      action: "query",
      format: "json",
      formatversion: "2",
      prop: "revisions",
      rvprop: "content",
      rvslots: "*",
      titles
    }).then(({
      query
    }) => {
      const deferreds = [];
      var _iterator2 = _createForOfIteratorHelper(query.pages), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          const page = _step2.value;
          const {
            content
          } = page.revisions[0].slots["main"];
          const newContent = content.replace(regex, text);
          deferreds.push(api.postWithToken("csrf", {
            action: "edit",
            format: "json",
            formatversion: "2",
            title: page.title,
            text: newContent,
            tags: EDIT_TAG,
            basetimestamp: page.revisions[0].timestamp,
            summary
          }));
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return $.when(...deferreds);
    });
  },
  loadTabCont(tabname, callback, reload) {
    const self2 = this;
    const tab = self2.tabs[tabname];
    if (reload) {
      tab.loaded = false;
    }
    if (!tab.loaded) {
      tab.cont.html("");
      const $desc = $("<p>").addClass("desc").append($("<span>").addClass("desc-text").text(getMessage("rediloading"))).appendTo(tab.cont);
      const $text = $desc.find("> .desc-text");
      callback.apply(self2).done(() => {
        $text.text(getMessage("tab".concat(tabname, "desc")));
      }).fail(() => {
        $text.text(getMessage("tab".concat(tabname, "notfound")));
      }).always(() => {
        self2.addMethods($desc, [{
          href: "#refresh",
          title: getMessage("refresh"),
          click(event) {
            event.preventDefault();
            self2.loadTabCont(tabname, callback, true);
          }
        }]);
      });
      tab.loaded = true;
    }
  },
  loading(container) {
    if (container.prop("tagName").toLowerCase() === "span") {
      container.addClass("mw-ajax-loader");
    } else if ($("span.mw-ajax-loader", container).length === 0) {
      $("<span>").addClass("mw-ajax-loader").appendTo(container);
    }
  },
  loaded(container) {
    if (container.prop("tagName").toLowerCase() === "span") {
      container.removeClass("mw-ajax-loader");
    } else {
      $("span.mw-ajax-loader", container).remove();
    }
  },
  selectAll(cont) {
    $("input[type=checkbox]:not(:disabled)", cont).prop("checked", true);
  },
  selectInverse(cont) {
    $("input[type=checkbox]:not(:disabled)", cont).each((_index, element) => {
      const $element = $(element);
      $element.prop("checked", !$element.prop("checked"));
    });
  },
  selectAction(cont, cb) {
    const pagenames = [];
    $("input[type=checkbox]:checked", cont).each((_index, pagename) => {
      pagenames.push($(pagename).data("page-title"));
    });
    if (pagenames.length > 0) {
      cb.call(this, pagenames);
    }
  },
  clickAction(cont, cb) {
    const pagename = $('input[type="checkbox"]', cont).data("page-title");
    cb.call(this, [pagename]);
  },
  buildLink({
    title,
    href,
    click,
    classname
  }) {
    const a = $("<a>").attr({
      title,
      href,
      target: "_blank",
      rel: "noopener noreferrer"
    }).text(title);
    if (click) {
      a.on("click", click);
    }
    if (classname) {
      a.addClass(classname);
    }
    return $("<span>").addClass("tools-redirect_link").append(a);
  },
  addMethods($parent, methods) {
    const self2 = this;
    let $container = $parent.find("> .tools-redirect_methods");
    const methodExist = ({
      href
    }) => {
      return $container.find("a[href=".concat(JSON.stringify(href), "]")).length > 0;
    };
    if ($container.length === 0) {
      $container = $("<span>").addClass("tools-redirect_methods").appendTo($parent);
    }
    var _iterator3 = _createForOfIteratorHelper(methods), _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
        const method = _step3.value;
        if (!methodExist(method)) {
          self2.buildLink(method).appendTo($container);
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  },
  buildSelection(main, metd, mt, dsab) {
    const cont = $("<span>");
    const sele = $("<input>").attr("type", "checkbox").appendTo(cont);
    this.buildLink(main).appendTo(cont);
    this.addMethods(cont, metd);
    sele.data("page-title", mt);
    if (dsab) {
      sele.prop("disabled", "disabled");
    }
    return cont;
  },
  loadView(reload) {
    const $container = this.tabs.view.cont;
    this.loadTabCont("view", function() {
      return this.loadRedirect(WG_PAGE_NAME, $container, 0);
    }, reload);
  },
  loadCreate(reload) {
    this.loadTabCont("create", function() {
      return this.findRedirect(WG_PAGE_NAME);
    }, reload);
  },
  loadRedirect(pagename, container, deep, loaded) {
    this.loading(container);
    const self2 = this;
    const deferred = $.Deferred();
    const top = deep ? $("<dl>").appendTo(container) : container;
    if (!loaded) {
      loaded = {};
      loaded[pagename] = true;
    }
    const onClickFix = (event) => {
      const entry = $(this).parents("dd, p").first();
      event.preventDefault();
      self2.clickAction(entry, this.fix);
    };
    api.post({
      action: "query",
      format: "json",
      formatversion: "2",
      prop: "redirects",
      titles: pagename,
      rdlimit: "max"
    }).then(({
      query
    }) => {
      self2.loaded(container);
      let has_redirect = false;
      const desc = $("p.desc", self2.tabs.view.cont);
      const maximumRedirectDepth = 10;
      var _iterator4 = _createForOfIteratorHelper(query.pages), _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
          const page = _step4.value;
          if (page.redirects) {
            const {
              redirects
            } = page;
            var _iterator5 = _createForOfIteratorHelper(redirects), _step5;
            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
                const {
                  title
                } = _step5.value;
                const rdtitle = title;
                const ultitle = rdtitle.replace(/ /g, "_");
                const entry = (deep ? $("<dd>") : $("<p>")).appendTo(top);
                const methods = [{
                  href: mw.util.getUrl(ultitle, {
                    action: "edit"
                  }),
                  title: getMessage("rediedit")
                }];
                const isCycleRedirect = rdtitle in loaded;
                loaded[rdtitle] = true;
                if (!isCycleRedirect && deep) {
                  methods.push({
                    href: "#fix-redirect",
                    title: getMessage("tabviewfix"),
                    click: onClickFix
                  });
                }
                const $container = self2.buildSelection({
                  href: mw.util.getUrl(ultitle, {
                    redirect: "no"
                  }),
                  title: rdtitle
                }, methods, ultitle, !deep).appendTo(entry);
                if (isCycleRedirect) {
                  $container.append('<span class="error">'.concat(getMessage("errcycleredirect"), "</span>"));
                } else if (deep < maximumRedirectDepth) {
                  deferred.then(() => {
                    return self2.loadRedirect(rdtitle, entry, deep + 1, loaded);
                  });
                }
                has_redirect = true;
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
          } else {
            has_redirect = false;
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      if (has_redirect && deep === 1) {
        self2.addMethods(desc, [{
          href: "#select-all",
          title: getMessage("selectall"),
          click(event) {
            event.preventDefault();
            self2.selectAll(self2.tabs.view.cont);
          }
        }, {
          href: "#select-inverse",
          title: getMessage("selectinverse"),
          click(event) {
            event.preventDefault();
            self2.selectInverse(self2.tabs.view.cont);
          }
        }, {
          href: "#fix-selected",
          title: getMessage("tabviewfix"),
          click(event) {
            event.preventDefault();
            self2.selectAction(self2.tabs.view.cont, self2.fix);
          }
        }]);
      }
      if (has_redirect) {
        deferred.resolveWith(self2);
      } else {
        deferred.rejectWith(self2);
      }
    });
    return deferred.promise();
  },
  findVariants(pagename, titles) {
    const self2 = this;
    const suffixReg = /^.+?((（|[ _]\().+?([)）]))$/;
    let retTitles = [];
    const deferreds = [];
    for (var _i2 = 0, _VARIANTS = VARIANTS; _i2 < _VARIANTS.length; _i2++) {
      const variant = _VARIANTS[_i2];
      let xhr = api.post({
        action: "parse",
        format: "json",
        formatversion: "2",
        page: pagename,
        prop: "displaytitle",
        uselang: variant,
        variant
      }).then(({
        parse
      }) => {
        const {
          displaytitle
        } = parse;
        let title = $("<span>").append(displaytitle).eq(0).text().trim();
        title = fixNamespace(title);
        setRedirectTextSuffix(title, "\n{{简繁重定向}}", SUFFIX_APPEND);
        return title;
      });
      if (IS_CATEGORY) {
        xhr = xhr.then((origTitle) => {
          api.post({
            action: "parse",
            format: "json",
            formatversion: "2",
            text: pagename,
            prop: "text",
            title: "MediaWiki:Gadget-ToolsRedirect.js/-",
            contentmodel: "wikitext",
            uselang: variant,
            variant
          }).then(({
            parse
          }) => {
            const tmpTitle = $(parse.text).text().trim();
            redirectExcludes[tmpTitle] = true;
            return origTitle;
          });
        });
      }
      deferreds.push(xhr);
    }
    return $.when(...deferreds).then((...args) => {
      const suffixes = [];
      for (var _i3 = 0, _args = args; _i3 < _args.length; _i3++) {
        const title = _args[_i3];
        let suffix;
        const suffixArr = suffixReg.exec(title);
        if (suffixArr && suffixArr.length === 2) {
          [, suffix] = suffixArr;
        } else {
          suffix = "";
        }
        retTitles.push(title);
        suffixes.push(suffix);
      }
      var _iterator6 = _createForOfIteratorHelper(new Set(suffixes)), _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
          const suffix = _step6.value;
          retTitles = [...retTitles, ...titles.map((title) => {
            const modifiedTitle = fixNamespace(title);
            return suffixReg.test(modifiedTitle) ? modifiedTitle : modifiedTitle + suffix;
          })];
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      return self2.findNotExists([...new Set(retTitles)]);
    });
  },
  findNotExists(titles) {
    const deferreds = [];
    const excludes = /* @__PURE__ */ new Set(["用字模式"]);
    let alltitles = [];
    titles = titles.join("|");
    for (var _i4 = 0, _VARIANTS2 = VARIANTS; _i4 < _VARIANTS2.length; _i4++) {
      const variant = _VARIANTS2[_i4];
      deferreds.push(api.post({
        action: "parse",
        format: "json",
        formatversion: "2",
        text: titles,
        prop: "text",
        title: "MediaWiki:Gadget-ToolsRedirect.js/-",
        contentmodel: "wikitext",
        uselang: variant,
        variant
      }));
    }
    return $.when(...deferreds).then((...args) => {
      for (var _i5 = 0, _args2 = args; _i5 < _args2.length; _i5++) {
        const [{
          parse
        }] = _args2[_i5];
        alltitles = [...alltitles, ...$(parse.text).text().trim().split("|")];
      }
      alltitles = alltitles.filter((v, i, arr) => {
        return arr.indexOf(v) === i;
      });
      alltitles = alltitles.join("|");
      return api.post({
        action: "query",
        format: "json",
        formatversion: "2",
        prop: "info",
        titles: alltitles
      }).then(({
        query
      }) => {
        titles = [];
        var _iterator7 = _createForOfIteratorHelper(query.pages), _step7;
        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
            const page = _step7.value;
            const {
              title
            } = page;
            if (page.missing && !excludes.has(title)) {
              if (title in redirectExcludes) {
                return;
              }
              titles.push(title);
              if (IS_CATEGORY) {
                const target = WG_PAGE_NAME.replace(/^Category:/, "");
                setRedirectTextSuffix(title, "\n{{分类重定向|$1}}".replace("$1", target));
              }
              setRedirectTextSuffix(title, "\n{{别名重定向}}", SUFFIX_SETDEFAULT);
            }
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
        return titles;
      });
    });
  },
  findRedirect(pagename) {
    const self2 = this;
    const frcDeferreds = [];
    const container = self2.tabs.create.cont;
    const $body = $("body");
    const $content = $body.find("#mw-content-text > div.mw-parser-output");
    const deferred = $.Deferred();
    let titles = [];
    self2.loading(container);
    for (var _i6 = 0, _findRedirectCallback = findRedirectCallbacks; _i6 < _findRedirectCallback.length; _i6++) {
      const callback = _findRedirectCallback[_i6];
      const ret = callback(pagename, $content, titles);
      if (typeof ret === "string") {
        titles.push(ret);
      } else if ("done" in ret) {
        frcDeferreds.push(ret);
      } else {
        titles = [.../* @__PURE__ */ new Set([...titles, ...ret])];
      }
    }
    titles = titles.map((title) => {
      return title || null;
    });
    const onClickCreate = function(event) {
      const entry = $(this).parents("p:first");
      event.preventDefault();
      self2.clickAction(entry, self2.create);
    };
    $.when(...frcDeferreds).then((...args) => {
      for (var _i7 = 0, _args3 = args; _i7 < _args3.length; _i7++) {
        const ret = _args3[_i7];
        if (typeof ret === "string") {
          titles.push(ret);
        } else {
          titles = [.../* @__PURE__ */ new Set([...titles, ...ret])];
        }
      }
      return self2.findVariants(pagename, titles);
    }).then((fvtitles) => {
      self2.loaded(container);
      var _iterator8 = _createForOfIteratorHelper(fvtitles), _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
          const title = _step8.value;
          const ultitle = title.replace(" ", "_");
          const entry = $("<p>").appendTo(container);
          self2.buildSelection({
            href: mw.util.getUrl(ultitle, {
              action: "edit",
              redlink: "1"
            }),
            title,
            classname: "new"
          }, [{
            href: "#create-redirect",
            title: getMessage("tabcreatetitle"),
            click: onClickCreate
          }], ultitle, false).appendTo(entry);
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
      const desc = $("p.desc", container);
      if (fvtitles.length > 0) {
        self2.addMethods(desc, [{
          href: "#select-all",
          title: getMessage("selectall"),
          click(event) {
            event.preventDefault();
            self2.selectAll(container);
          }
        }, {
          href: "#select-inverse",
          title: getMessage("selectinverse"),
          click(event) {
            event.preventDefault();
            self2.selectInverse(container);
          }
        }, {
          href: "#create-selected",
          title: getMessage("tabcreatetitle"),
          click(event) {
            event.preventDefault();
            self2.selectAction(container, self2.create);
          }
        }]);
        deferred.resolveWith(self2, [fvtitles]);
      } else {
        void deferred.rejectWith(self2, [fvtitles]);
      }
    });
    return deferred.promise();
  }
};
//! src/ToolsRedirect/modules/messages.ts
var toolsRedirectMessages = () => {
  if (["zh-hant", "zh-hk", "zh-mo", "zh-tw"].includes(WG_USER_LANGUAGE)) {
    mw.messages.set({
      "toolsredirect-btntitle": "重新導向",
      "toolsredirect-btndesc": "創建和管理此頁面的重新導向",
      "toolsredirect-dlgtitle": "創建和管理重新導向",
      "toolsredirect-rediloading": "數據加載中，請稍候……",
      "toolsredirect-rediedit": "編輯",
      "toolsredirect-selectall": "全選",
      "toolsredirect-selectinverse": "反選",
      "toolsredirect-tabviewtitle": "查看",
      "toolsredirect-tabviewdesc": "以下是指向此頁面的重新導向頁：",
      "toolsredirect-tabviewnotfound": "沒有找到任何指向此頁面的重新導向頁。",
      "toolsredirect-tabviewmulti": "多重",
      "toolsredirect-tabviewfix": "修復",
      "toolsredirect-fixloading": "請稍候，正在自動修復重新導向……",
      "toolsredirect-fixtext": "#REDIRECT [[$1]]",
      "toolsredirect-fixsummary": "編輯工具：修復多重重新導向",
      "toolsredirect-tabcreatetitle": "創建",
      "toolsredirect-tabcreatedesc": "以下是尚未創建的重新導向頁：",
      "toolsredirect-tabcreatenotfound": "沒有找到可以創建的重新導向頁。",
      "toolsredirect-tabcreateall": "全部創建",
      "toolsredirect-createloading": "請稍候，正在自動創建重新導向……",
      "toolsredirect-createtext": "#REDIRECT [[$1]]",
      "toolsredirect-createsummary": "編輯工具：自動創建重新導向到[[$1]]",
      "toolsredirect-errcycleredirect": "無法自動修復：發現循環重新導向",
      "toolsredirect-refresh": "刷新"
    });
  } else {
    mw.messages.set({
      "toolsredirect-btntitle": "重定向",
      "toolsredirect-btndesc": "创建和管理此页面的重定向",
      "toolsredirect-dlgtitle": "创建和管理重定向",
      "toolsredirect-rediloading": "数据加载中，请稍候……",
      "toolsredirect-rediedit": "编辑",
      "toolsredirect-selectall": "全选",
      "toolsredirect-selectinverse": "反选",
      "toolsredirect-tabviewtitle": "查看",
      "toolsredirect-tabviewdesc": "以下是指向此页面的重定向页：",
      "toolsredirect-tabviewnotfound": "没有找到任何指向此页面的重定向页。",
      "toolsredirect-tabviewmulti": "多重",
      "toolsredirect-tabviewfix": "修复",
      "toolsredirect-fixloading": "请稍候，正在自动修复重定向……",
      "toolsredirect-fixtext": "#REDIRECT [[$1]]",
      "toolsredirect-fixsummary": "编辑工具：修复多重重定向",
      "toolsredirect-tabcreatetitle": "创建",
      "toolsredirect-tabcreatedesc": "以下是尚未创建的重定向页：",
      "toolsredirect-tabcreatenotfound": "没有找到可以创建的重定向页。",
      "toolsredirect-tabcreateall": "全部创建",
      "toolsredirect-createloading": "请稍候，正在自动创建重定向……",
      "toolsredirect-createtext": "#REDIRECT [[$1]]",
      "toolsredirect-createsummary": "编辑工具：自动创建重定向到[[$1]]",
      "toolsredirect-errcycleredirect": "无法自动修复：发现循环重定向",
      "toolsredirect-refresh": "刷新"
    });
  }
};
//! src/ToolsRedirect/modules/bio-latin-names.ts
var toolsRedirect_bio_latin_names = () => {
  const prefixRegex = /[学學]名\s*[:：]?\s*$/;
  const colonRegex = /^\s*[:：]?\s*$/;
  window.toolsRedirect.findRedirectCallback((_pagename, $content) => {
    const titles = [];
    $content.find('> p > [lang="la"], > p > i').each((_index, element) => {
      let title;
      let previousNode = element.previousSibling;
      if (previousNode && colonRegex.test(previousNode.textContent)) {
        previousNode = previousNode.previousSibling;
      }
      if (previousNode && prefixRegex.test(previousNode.textContent)) {
        title = $(element).text().trim();
        titles.push(title);
        window.toolsRedirect.setRedirectTextSuffix(title, "\n{{学名重定向}}");
      }
    });
    return [...new Set(titles)];
  });
};
//! src/ToolsRedirect/modules/courtesy-and-art-names.ts
var toolsRedirect_courtesy_and_art_names = () => {
  const prefixRegex = /[号字號]\s*$/;
  const compSurnames = ["欧阳", "歐陽", "令狐", "皇甫", "上官", "司徒", "诸葛", "諸葛", "司马", "司馬", "宇文", "呼延", "端木", "申屠", "尉迟", "尉遲", "轩辕", "軒轅", "夏侯", "南宫", "南宮", "司空", "鲜于", "鮮于", "西门", "西門", "独孤", "獨孤", "东方", "東方", "司寇", "羊舌", "第五", "梁丘", "锺离", "鍾離", "东郭", "東郭", "公孙", "公孫", "孟孙", "孟孫", "仲孙", "仲孫", "叔孙", "叔孫", "季孙", "季孫", "长孙", "長孫", "慕容", "闾丘", "閭丘", "东门", "東門", "公羊", "万俟", "百里", "公冶", "呼延", "浮屠", "即墨", "单于", "單于", "田丘"];
  const compSurnameRegex = new RegExp("^(".concat(compSurnames.join("|"), ")."));
  const findSurname = (pagename) => {
    if (compSurnameRegex.test(pagename)) {
      return compSurnameRegex.exec(pagename)[1];
    }
    return pagename[0];
  };
  window.toolsRedirect.findRedirectCallback((pagename, $content) => {
    let surname;
    const titles = [];
    $content.find("> p > b").each((_index, element) => {
      const previousNode = element.previousSibling;
      if (previousNode && prefixRegex.test(previousNode.textContent)) {
        const name = $(element).text().trim();
        if (!surname) {
          surname = findSurname(pagename);
        }
        titles.push(surname + name);
      }
    });
    return [...new Set(titles)];
  });
};
//! src/ToolsRedirect/modules/opt-bolds.ts
var toolsRedirect_opt_bolds = () => {
  window.toolsRedirect.findRedirectBySelector("div#mw-content-text p > b");
};
//! src/ToolsRedirect/ToolsRedirect.js
toolsRedirectMessages();
ToolsRedirect.init();
if (mw.user.options.get("gadget-ToolsRedirect-bio-latin-names")) {
  $(toolsRedirect_bio_latin_names);
}
if (mw.user.options.get("gadget-ToolsRedirect-courtesy-and-art-names")) {
  $(toolsRedirect_courtesy_and_art_names);
}
if (mw.user.options.get("gadget-ToolsRedirect-opt-bolds")) {
  $(toolsRedirect_opt_bolds);
}

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mYWlscy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Rlc2NyaXB0b3JzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1jYWxsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NsYXNzb2YtcmF3LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtY2FsbGFibGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nZXQtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXN5bWJvbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RyeS10by1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWNhbGxhYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1Zy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1uYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9tYXRoLXRydW5jLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtYXJyYXkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNS4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1zZXQtbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzUuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9lcy1ub3QtZXhjZWVkLXNhZmUtaW50ZWdlci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM1LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5wdXNoLmpzIiwgInNyYy9Ub29sc1JlZGlyZWN0L21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL1Rvb2xzUmVkaXJlY3QvbW9kdWxlcy91dGlsL2dldE1lc3NhZ2VzLnRzIiwgInNyYy9Ub29sc1JlZGlyZWN0L21vZHVsZXMvY29yZS5qcyIsICJzcmMvVG9vbHNSZWRpcmVjdC9tb2R1bGVzL21lc3NhZ2VzLnRzIiwgInNyYy9Ub29sc1JlZGlyZWN0L21vZHVsZXMvYmlvLWxhdGluLW5hbWVzLnRzIiwgInNyYy9Ub29sc1JlZGlyZWN0L21vZHVsZXMvY291cnRlc3ktYW5kLWFydC1uYW1lcy50cyIsICJzcmMvVG9vbHNSZWRpcmVjdC9tb2R1bGVzL29wdC1ib2xkcy50cyIsICJzcmMvVG9vbHNSZWRpcmVjdC9Ub29sc1JlZGlyZWN0LmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIndXNlIHN0cmljdCc7XG52YXIgY2hlY2sgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICYmIGl0Lk1hdGggPT09IE1hdGggJiYgaXQ7XG59O1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxubW9kdWxlLmV4cG9ydHMgPVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZ2xvYmFsLXRoaXMgLS0gc2FmZVxuICBjaGVjayh0eXBlb2YgZ2xvYmFsVGhpcyA9PSAnb2JqZWN0JyAmJiBnbG9iYWxUaGlzKSB8fFxuICBjaGVjayh0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdykgfHxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAtLSBzYWZlXG4gIGNoZWNrKHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYpIHx8XG4gIGNoZWNrKHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsKSB8fFxuICBjaGVjayh0eXBlb2YgdGhpcyA9PSAnb2JqZWN0JyAmJiB0aGlzKSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmMgLS0gZmFsbGJhY2tcbiAgKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pKCkgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBEZXRlY3QgSUU4J3MgaW5jb21wbGV0ZSBkZWZpbmVQcm9wZXJ0eSBpbXBsZW1lbnRhdGlvblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sIDEsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pWzFdICE9PSA3O1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWZ1bmN0aW9uLXByb3RvdHlwZS1iaW5kIC0tIHNhZmVcbiAgdmFyIHRlc3QgPSAoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9KS5iaW5kKCk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gdHlwZW9mIHRlc3QgIT0gJ2Z1bmN0aW9uJyB8fCB0ZXN0Lmhhc093blByb3BlcnR5KCdwcm90b3R5cGUnKTtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgY2FsbCA9IEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9CSU5EID8gY2FsbC5iaW5kKGNhbGwpIDogZnVuY3Rpb24gKCkge1xuICByZXR1cm4gY2FsbC5hcHBseShjYWxsLCBhcmd1bWVudHMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gTmFzaG9ybiB+IEpESzggYnVnXG52YXIgTkFTSE9STl9CVUcgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgJiYgISRwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHsgMTogMiB9LCAxKTtcblxuLy8gYE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGVgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QucHJvdG90eXBlLnByb3BlcnR5aXNlbnVtZXJhYmxlXG5leHBvcnRzLmYgPSBOQVNIT1JOX0JVRyA/IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKFYpIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGhpcywgVik7XG4gIHJldHVybiAhIWRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci5lbnVtZXJhYmxlO1xufSA6ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgY2FsbCA9IEZ1bmN0aW9uUHJvdG90eXBlLmNhbGw7XG52YXIgdW5jdXJyeVRoaXNXaXRoQmluZCA9IE5BVElWRV9CSU5EICYmIEZ1bmN0aW9uUHJvdG90eXBlLmJpbmQuYmluZChjYWxsLCBjYWxsKTtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfQklORCA/IHVuY3VycnlUaGlzV2l0aEJpbmQgOiBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY2FsbC5hcHBseShmbiwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG52YXIgdG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyh7fS50b1N0cmluZyk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBzdHJpbmdTbGljZSh0b1N0cmluZyhpdCksIDgsIC0xKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcbnZhciBzcGxpdCA9IHVuY3VycnlUaGlzKCcnLnNwbGl0KTtcblxuLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3Ncbm1vZHVsZS5leHBvcnRzID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyB0aHJvd3MgYW4gZXJyb3IgaW4gcmhpbm8sIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9yaGluby9pc3N1ZXMvMzQ2XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gISRPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKTtcbn0pID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjbGFzc29mKGl0KSA9PT0gJ1N0cmluZycgPyBzcGxpdChpdCwgJycpIDogJE9iamVjdChpdCk7XG59IDogJE9iamVjdDtcbiIsICIndXNlIHN0cmljdCc7XG4vLyB3ZSBjYW4ndCB1c2UganVzdCBgaXQgPT0gbnVsbGAgc2luY2Ugb2YgYGRvY3VtZW50LmFsbGAgc3BlY2lhbCBjYXNlXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLUlzSFRNTEREQS1pbnRlcm5hbC1zbG90LWFlY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID09PSBudWxsIHx8IGl0ID09PSB1bmRlZmluZWQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYFJlcXVpcmVPYmplY3RDb2VyY2libGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZXF1aXJlb2JqZWN0Y29lcmNpYmxlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXNOdWxsT3JVbmRlZmluZWQoaXQpKSB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJbmRleGVkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoaXQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1Jc0hUTUxEREEtaW50ZXJuYWwtc2xvdFxudmFyIGRvY3VtZW50QWxsID0gdHlwZW9mIGRvY3VtZW50ID09ICdvYmplY3QnICYmIGRvY3VtZW50LmFsbDtcblxuLy8gYElzQ2FsbGFibGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc2NhbGxhYmxlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9uby10eXBlb2YtdW5kZWZpbmVkIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBkb2N1bWVudEFsbCA9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudEFsbCAhPT0gdW5kZWZpbmVkID8gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJyB8fCBhcmd1bWVudCA9PT0gZG9jdW1lbnRBbGw7XG59IDogZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogaXNDYWxsYWJsZShpdCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgYUZ1bmN0aW9uID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBpc0NhbGxhYmxlKGFyZ3VtZW50KSA/IGFyZ3VtZW50IDogdW5kZWZpbmVkO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZXNwYWNlLCBtZXRob2QpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPCAyID8gYUZ1bmN0aW9uKGdsb2JhbFtuYW1lc3BhY2VdKSA6IGdsb2JhbFtuYW1lc3BhY2VdICYmIGdsb2JhbFtuYW1lc3BhY2VdW21ldGhvZF07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB1bmN1cnJ5VGhpcyh7fS5pc1Byb3RvdHlwZU9mKTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBuYXZpZ2F0b3IgIT0gJ3VuZGVmaW5lZCcgJiYgU3RyaW5nKG5hdmlnYXRvci51c2VyQWdlbnQpIHx8ICcnO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50Jyk7XG5cbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgRGVubyA9IGdsb2JhbC5EZW5vO1xudmFyIHZlcnNpb25zID0gcHJvY2VzcyAmJiBwcm9jZXNzLnZlcnNpb25zIHx8IERlbm8gJiYgRGVuby52ZXJzaW9uO1xudmFyIHY4ID0gdmVyc2lvbnMgJiYgdmVyc2lvbnMudjg7XG52YXIgbWF0Y2gsIHZlcnNpb247XG5cbmlmICh2OCkge1xuICBtYXRjaCA9IHY4LnNwbGl0KCcuJyk7XG4gIC8vIGluIG9sZCBDaHJvbWUsIHZlcnNpb25zIG9mIFY4IGlzbid0IFY4ID0gQ2hyb21lIC8gMTBcbiAgLy8gYnV0IHRoZWlyIGNvcnJlY3QgdmVyc2lvbnMgYXJlIG5vdCBpbnRlcmVzdGluZyBmb3IgdXNcbiAgdmVyc2lvbiA9IG1hdGNoWzBdID4gMCAmJiBtYXRjaFswXSA8IDQgPyAxIDogKyhtYXRjaFswXSArIG1hdGNoWzFdKTtcbn1cblxuLy8gQnJvd3NlckZTIE5vZGVKUyBgcHJvY2Vzc2AgcG9seWZpbGwgaW5jb3JyZWN0bHkgc2V0IGAudjhgIHRvIGAwLjBgXG4vLyBzbyBjaGVjayBgdXNlckFnZW50YCBldmVuIGlmIGAudjhgIGV4aXN0cywgYnV0IDBcbmlmICghdmVyc2lvbiAmJiB1c2VyQWdlbnQpIHtcbiAgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2goL0VkZ2VcXC8oXFxkKykvKTtcbiAgaWYgKCFtYXRjaCB8fCBtYXRjaFsxXSA+PSA3NCkge1xuICAgIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9DaHJvbWVcXC8oXFxkKykvKTtcbiAgICBpZiAobWF0Y2gpIHZlcnNpb24gPSArbWF0Y2hbMV07XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2ZXJzaW9uO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLXN5bWJvbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZyAqL1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24nKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcblxudmFyICRTdHJpbmcgPSBnbG9iYWwuU3RyaW5nO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5c3ltYm9scyAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xubW9kdWxlLmV4cG9ydHMgPSAhIU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN5bWJvbCA9IFN5bWJvbCgnc3ltYm9sIGRldGVjdGlvbicpO1xuICAvLyBDaHJvbWUgMzggU3ltYm9sIGhhcyBpbmNvcnJlY3QgdG9TdHJpbmcgY29udmVyc2lvblxuICAvLyBgZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzYCBwb2x5ZmlsbCBzeW1ib2xzIGNvbnZlcnRlZCB0byBvYmplY3QgYXJlIG5vdCBTeW1ib2wgaW5zdGFuY2VzXG4gIC8vIG5iOiBEbyBub3QgY2FsbCBgU3RyaW5nYCBkaXJlY3RseSB0byBhdm9pZCB0aGlzIGJlaW5nIG9wdGltaXplZCBvdXQgdG8gYHN5bWJvbCsnJ2Agd2hpY2ggd2lsbCxcbiAgLy8gb2YgY291cnNlLCBmYWlsLlxuICByZXR1cm4gISRTdHJpbmcoc3ltYm9sKSB8fCAhKE9iamVjdChzeW1ib2wpIGluc3RhbmNlb2YgU3ltYm9sKSB8fFxuICAgIC8vIENocm9tZSAzOC00MCBzeW1ib2xzIGFyZSBub3QgaW5oZXJpdGVkIGZyb20gRE9NIGNvbGxlY3Rpb25zIHByb3RvdHlwZXMgdG8gaW5zdGFuY2VzXG4gICAgIVN5bWJvbC5zaGFtICYmIFY4X1ZFUlNJT04gJiYgVjhfVkVSU0lPTiA8IDQxO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tc3ltYm9sIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zeW1ib2wtY29uc3RydWN0b3ItZGV0ZWN0aW9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX1NZTUJPTFxuICAmJiAhU3ltYm9sLnNoYW1cbiAgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mJyk7XG52YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbm1vZHVsZS5leHBvcnRzID0gVVNFX1NZTUJPTF9BU19VSUQgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyICRTeW1ib2wgPSBnZXRCdWlsdEluKCdTeW1ib2wnKTtcbiAgcmV0dXJuIGlzQ2FsbGFibGUoJFN5bWJvbCkgJiYgaXNQcm90b3R5cGVPZigkU3ltYm9sLnByb3RvdHlwZSwgJE9iamVjdChpdCkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJFN0cmluZyA9IFN0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gJFN0cmluZyhhcmd1bWVudCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuICdPYmplY3QnO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgdHJ5VG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdHJ5LXRvLXN0cmluZycpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYEFzc2VydDogSXNDYWxsYWJsZShhcmd1bWVudCkgaXMgdHJ1ZWBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIGlmIChpc0NhbGxhYmxlKGFyZ3VtZW50KSkgcmV0dXJuIGFyZ3VtZW50O1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcih0cnlUb1N0cmluZyhhcmd1bWVudCkgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkJyk7XG5cbi8vIGBHZXRNZXRob2RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1nZXRtZXRob2Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFYsIFApIHtcbiAgdmFyIGZ1bmMgPSBWW1BdO1xuICByZXR1cm4gaXNOdWxsT3JVbmRlZmluZWQoZnVuYykgPyB1bmRlZmluZWQgOiBhQ2FsbGFibGUoZnVuYyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgT3JkaW5hcnlUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9yZGluYXJ5dG9wcmltaXRpdmVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBwcmVmKSB7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAocHJlZiA9PT0gJ3N0cmluZycgJiYgaXNDYWxsYWJsZShmbiA9IGlucHV0LnRvU3RyaW5nKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKGlzQ2FsbGFibGUoZm4gPSBpbnB1dC52YWx1ZU9mKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHByZWYgIT09ICdzdHJpbmcnICYmIGlzQ2FsbGFibGUoZm4gPSBpbnB1dC50b1N0cmluZykgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHRyeSB7XG4gICAgZGVmaW5lUHJvcGVydHkoZ2xvYmFsLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGdsb2JhbFtrZXldID0gdmFsdWU7XG4gIH0gcmV0dXJuIHZhbHVlO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcblxudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgZGVmaW5lR2xvYmFsUHJvcGVydHkoU0hBUkVELCB7fSk7XG5cbm1vZHVsZS5leHBvcnRzID0gc3RvcmU7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xudmFyIHN0b3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHt9KTtcbn0pKCd2ZXJzaW9ucycsIFtdKS5wdXNoKHtcbiAgdmVyc2lvbjogJzMuMzUuMScsXG4gIG1vZGU6IElTX1BVUkUgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAxNC0yMDI0IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJyxcbiAgbGljZW5zZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2Jsb2IvdjMuMzUuMS9MSUNFTlNFJyxcbiAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMnXG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbi8vIGBUb09iamVjdGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvb2JqZWN0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gJE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcblxudmFyIGhhc093blByb3BlcnR5ID0gdW5jdXJyeVRoaXMoe30uaGFzT3duUHJvcGVydHkpO1xuXG4vLyBgSGFzT3duUHJvcGVydHlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1oYXNvd25wcm9wZXJ0eVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1oYXNvd24gLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuaGFzT3duIHx8IGZ1bmN0aW9uIGhhc093bihpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eSh0b09iamVjdChpdCksIGtleSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxudmFyIGlkID0gMDtcbnZhciBwb3N0Zml4ID0gTWF0aC5yYW5kb20oKTtcbnZhciB0b1N0cmluZyA9IHVuY3VycnlUaGlzKDEuMC50b1N0cmluZyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnICsgKGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXkpICsgJylfJyArIHRvU3RyaW5nKCsraWQgKyBwb3N0Zml4LCAzNik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3ltYm9sLWNvbnN0cnVjdG9yLWRldGVjdGlvbicpO1xudmFyIFVTRV9TWU1CT0xfQVNfVUlEID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkJyk7XG5cbnZhciBTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyIFdlbGxLbm93blN5bWJvbHNTdG9yZSA9IHNoYXJlZCgnd2tzJyk7XG52YXIgY3JlYXRlV2VsbEtub3duU3ltYm9sID0gVVNFX1NZTUJPTF9BU19VSUQgPyBTeW1ib2xbJ2ZvciddIHx8IFN5bWJvbCA6IFN5bWJvbCAmJiBTeW1ib2wud2l0aG91dFNldHRlciB8fCB1aWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgaWYgKCFoYXNPd24oV2VsbEtub3duU3ltYm9sc1N0b3JlLCBuYW1lKSkge1xuICAgIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXSA9IE5BVElWRV9TWU1CT0wgJiYgaGFzT3duKFN5bWJvbCwgbmFtZSlcbiAgICAgID8gU3ltYm9sW25hbWVdXG4gICAgICA6IGNyZWF0ZVdlbGxLbm93blN5bWJvbCgnU3ltYm9sLicgKyBuYW1lKTtcbiAgfSByZXR1cm4gV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciBvcmRpbmFyeVRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZScpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbnZhciBUT19QUklNSVRJVkUgPSB3ZWxsS25vd25TeW1ib2woJ3RvUHJpbWl0aXZlJyk7XG5cbi8vIGBUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJpbWl0aXZlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnB1dCwgcHJlZikge1xuICBpZiAoIWlzT2JqZWN0KGlucHV0KSB8fCBpc1N5bWJvbChpbnB1dCkpIHJldHVybiBpbnB1dDtcbiAgdmFyIGV4b3RpY1RvUHJpbSA9IGdldE1ldGhvZChpbnB1dCwgVE9fUFJJTUlUSVZFKTtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKGV4b3RpY1RvUHJpbSkge1xuICAgIGlmIChwcmVmID09PSB1bmRlZmluZWQpIHByZWYgPSAnZGVmYXVsdCc7XG4gICAgcmVzdWx0ID0gY2FsbChleG90aWNUb1ByaW0sIGlucHV0LCBwcmVmKTtcbiAgICBpZiAoIWlzT2JqZWN0KHJlc3VsdCkgfHwgaXNTeW1ib2wocmVzdWx0KSkgcmV0dXJuIHJlc3VsdDtcbiAgICB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbiAgfVxuICBpZiAocHJlZiA9PT0gdW5kZWZpbmVkKSBwcmVmID0gJ251bWJlcic7XG4gIHJldHVybiBvcmRpbmFyeVRvUHJpbWl0aXZlKGlucHV0LCBwcmVmKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xudmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXN5bWJvbCcpO1xuXG4vLyBgVG9Qcm9wZXJ0eUtleWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJvcGVydHlrZXlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBrZXkgPSB0b1ByaW1pdGl2ZShhcmd1bWVudCwgJ3N0cmluZycpO1xuICByZXR1cm4gaXNTeW1ib2woa2V5KSA/IGtleSA6IGtleSArICcnO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgZG9jdW1lbnQgPSBnbG9iYWwuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBFWElTVFMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBFWElTVFMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcblxuLy8gVGhhbmtzIHRvIElFOCBmb3IgaXRzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3JlYXRlRWxlbWVudCgnZGl2JyksICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfVxuICB9KS5hICE9PSA3O1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0luZGV4ZWRPYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhc093bihPLCBQKSkgcmV0dXJuIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcighY2FsbChwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZS5mLCBPLCBQKSwgT1tQXSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbi8vIFY4IH4gQ2hyb21lIDM2LVxuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzMzNFxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0sICdwcm90b3R5cGUnLCB7XG4gICAgdmFsdWU6IDQyLFxuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KS5wcm90b3R5cGUgIT09IDQyO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgJFN0cmluZyA9IFN0cmluZztcbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgQXNzZXJ0OiBUeXBlKGFyZ3VtZW50KSBpcyBPYmplY3RgXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoaXNPYmplY3QoYXJndW1lbnQpKSByZXR1cm4gYXJndW1lbnQ7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKCRTdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgYW4gb2JqZWN0Jyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG52YXIgVjhfUFJPVE9UWVBFX0RFRklORV9CVUcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdjgtcHJvdG90eXBlLWRlZmluZS1idWcnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleScpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBFTlVNRVJBQkxFID0gJ2VudW1lcmFibGUnO1xudmFyIENPTkZJR1VSQUJMRSA9ICdjb25maWd1cmFibGUnO1xudmFyIFdSSVRBQkxFID0gJ3dyaXRhYmxlJztcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0eWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0eVxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgPyBWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA/IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKHR5cGVvZiBPID09PSAnZnVuY3Rpb24nICYmIFAgPT09ICdwcm90b3R5cGUnICYmICd2YWx1ZScgaW4gQXR0cmlidXRlcyAmJiBXUklUQUJMRSBpbiBBdHRyaWJ1dGVzICYmICFBdHRyaWJ1dGVzW1dSSVRBQkxFXSkge1xuICAgIHZhciBjdXJyZW50ID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKTtcbiAgICBpZiAoY3VycmVudCAmJiBjdXJyZW50W1dSSVRBQkxFXSkge1xuICAgICAgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gICAgICBBdHRyaWJ1dGVzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IENPTkZJR1VSQUJMRSBpbiBBdHRyaWJ1dGVzID8gQXR0cmlidXRlc1tDT05GSUdVUkFCTEVdIDogY3VycmVudFtDT05GSUdVUkFCTEVdLFxuICAgICAgICBlbnVtZXJhYmxlOiBFTlVNRVJBQkxFIGluIEF0dHJpYnV0ZXMgPyBBdHRyaWJ1dGVzW0VOVU1FUkFCTEVdIDogY3VycmVudFtFTlVNRVJBQkxFXSxcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlXG4gICAgICB9O1xuICAgIH1cbiAgfSByZXR1cm4gJGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xufSA6ICRkZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiAkZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIGtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0RGVzY3JpcHRvciA9IERFU0NSSVBUT1JTICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbnZhciBFWElTVFMgPSBoYXNPd24oRnVuY3Rpb25Qcm90b3R5cGUsICduYW1lJyk7XG4vLyBhZGRpdGlvbmFsIHByb3RlY3Rpb24gZnJvbSBtaW5pZmllZCAvIG1hbmdsZWQgLyBkcm9wcGVkIGZ1bmN0aW9uIG5hbWVzXG52YXIgUFJPUEVSID0gRVhJU1RTICYmIChmdW5jdGlvbiBzb21ldGhpbmcoKSB7IC8qIGVtcHR5ICovIH0pLm5hbWUgPT09ICdzb21ldGhpbmcnO1xudmFyIENPTkZJR1VSQUJMRSA9IEVYSVNUUyAmJiAoIURFU0NSSVBUT1JTIHx8IChERVNDUklQVE9SUyAmJiBnZXREZXNjcmlwdG9yKEZ1bmN0aW9uUHJvdG90eXBlLCAnbmFtZScpLmNvbmZpZ3VyYWJsZSkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgRVhJU1RTOiBFWElTVFMsXG4gIFBST1BFUjogUFJPUEVSLFxuICBDT05GSUdVUkFCTEU6IENPTkZJR1VSQUJMRVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHN0b3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xuXG52YXIgZnVuY3Rpb25Ub1N0cmluZyA9IHVuY3VycnlUaGlzKEZ1bmN0aW9uLnRvU3RyaW5nKTtcblxuLy8gdGhpcyBoZWxwZXIgYnJva2VuIGluIGBjb3JlLWpzQDMuNC4xLTMuNC40YCwgc28gd2UgY2FuJ3QgdXNlIGBzaGFyZWRgIGhlbHBlclxuaWYgKCFpc0NhbGxhYmxlKHN0b3JlLmluc3BlY3RTb3VyY2UpKSB7XG4gIHN0b3JlLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb25Ub1N0cmluZyhpdCk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RvcmUuaW5zcGVjdFNvdXJjZTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIFdlYWtNYXAgPSBnbG9iYWwuV2Vha01hcDtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0NhbGxhYmxlKFdlYWtNYXApICYmIC9uYXRpdmUgY29kZS8udGVzdChTdHJpbmcoV2Vha01hcCkpO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xuXG52YXIga2V5cyA9IHNoYXJlZCgna2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIGtleXNba2V5XSB8fCAoa2V5c1trZXldID0gdWlkKGtleSkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfV0VBS19NQVAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2Vhay1tYXAtYmFzaWMtZGV0ZWN0aW9uJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcbnZhciBzaGFyZWRLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLWtleScpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcblxudmFyIE9CSkVDVF9BTFJFQURZX0lOSVRJQUxJWkVEID0gJ09iamVjdCBhbHJlYWR5IGluaXRpYWxpemVkJztcbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xudmFyIFdlYWtNYXAgPSBnbG9iYWwuV2Vha01hcDtcbnZhciBzZXQsIGdldCwgaGFzO1xuXG52YXIgZW5mb3JjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaGFzKGl0KSA/IGdldChpdCkgOiBzZXQoaXQsIHt9KTtcbn07XG5cbnZhciBnZXR0ZXJGb3IgPSBmdW5jdGlvbiAoVFlQRSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGl0KSB7XG4gICAgdmFyIHN0YXRlO1xuICAgIGlmICghaXNPYmplY3QoaXQpIHx8IChzdGF0ZSA9IGdldChpdCkpLnR5cGUgIT09IFRZUEUpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0luY29tcGF0aWJsZSByZWNlaXZlciwgJyArIFRZUEUgKyAnIHJlcXVpcmVkJyk7XG4gICAgfSByZXR1cm4gc3RhdGU7XG4gIH07XG59O1xuXG5pZiAoTkFUSVZFX1dFQUtfTUFQIHx8IHNoYXJlZC5zdGF0ZSkge1xuICB2YXIgc3RvcmUgPSBzaGFyZWQuc3RhdGUgfHwgKHNoYXJlZC5zdGF0ZSA9IG5ldyBXZWFrTWFwKCkpO1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1zZWxmLWFzc2lnbiAtLSBwcm90b3R5cGUgbWV0aG9kcyBwcm90ZWN0aW9uICovXG4gIHN0b3JlLmdldCA9IHN0b3JlLmdldDtcbiAgc3RvcmUuaGFzID0gc3RvcmUuaGFzO1xuICBzdG9yZS5zZXQgPSBzdG9yZS5zZXQ7XG4gIC8qIGVzbGludC1lbmFibGUgbm8tc2VsZi1hc3NpZ24gLS0gcHJvdG90eXBlIG1ldGhvZHMgcHJvdGVjdGlvbiAqL1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgaWYgKHN0b3JlLmhhcyhpdCkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIHN0b3JlLnNldChpdCwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHN0b3JlLmdldChpdCkgfHwge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBzdG9yZS5oYXMoaXQpO1xuICB9O1xufSBlbHNlIHtcbiAgdmFyIFNUQVRFID0gc2hhcmVkS2V5KCdzdGF0ZScpO1xuICBoaWRkZW5LZXlzW1NUQVRFXSA9IHRydWU7XG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICBpZiAoaGFzT3duKGl0LCBTVEFURSkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShpdCwgU1RBVEUsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBoYXNPd24oaXQsIFNUQVRFKSA/IGl0W1NUQVRFXSA6IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaGFzT3duKGl0LCBTVEFURSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldCxcbiAgZ2V0OiBnZXQsXG4gIGhhczogaGFzLFxuICBlbmZvcmNlOiBlbmZvcmNlLFxuICBnZXR0ZXJGb3I6IGdldHRlckZvclxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIENPTkZJR1VSQUJMRV9GVU5DVElPTl9OQU1FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLW5hbWUnKS5DT05GSUdVUkFCTEU7XG52YXIgaW5zcGVjdFNvdXJjZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnNwZWN0LXNvdXJjZScpO1xudmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUnKTtcblxudmFyIGVuZm9yY2VJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5lbmZvcmNlO1xudmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldDtcbnZhciAkU3RyaW5nID0gU3RyaW5nO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG52YXIgcmVwbGFjZSA9IHVuY3VycnlUaGlzKCcnLnJlcGxhY2UpO1xudmFyIGpvaW4gPSB1bmN1cnJ5VGhpcyhbXS5qb2luKTtcblxudmFyIENPTkZJR1VSQUJMRV9MRU5HVEggPSBERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHkoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9LCAnbGVuZ3RoJywgeyB2YWx1ZTogOCB9KS5sZW5ndGggIT09IDg7XG59KTtcblxudmFyIFRFTVBMQVRFID0gU3RyaW5nKFN0cmluZykuc3BsaXQoJ1N0cmluZycpO1xuXG52YXIgbWFrZUJ1aWx0SW4gPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSwgbmFtZSwgb3B0aW9ucykge1xuICBpZiAoc3RyaW5nU2xpY2UoJFN0cmluZyhuYW1lKSwgMCwgNykgPT09ICdTeW1ib2woJykge1xuICAgIG5hbWUgPSAnWycgKyByZXBsYWNlKCRTdHJpbmcobmFtZSksIC9eU3ltYm9sXFwoKFteKV0qKVxcKS4qJC8sICckMScpICsgJ10nO1xuICB9XG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZ2V0dGVyKSBuYW1lID0gJ2dldCAnICsgbmFtZTtcbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5zZXR0ZXIpIG5hbWUgPSAnc2V0ICcgKyBuYW1lO1xuICBpZiAoIWhhc093bih2YWx1ZSwgJ25hbWUnKSB8fCAoQ09ORklHVVJBQkxFX0ZVTkNUSU9OX05BTUUgJiYgdmFsdWUubmFtZSAhPT0gbmFtZSkpIHtcbiAgICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5KHZhbHVlLCAnbmFtZScsIHsgdmFsdWU6IG5hbWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KTtcbiAgICBlbHNlIHZhbHVlLm5hbWUgPSBuYW1lO1xuICB9XG4gIGlmIChDT05GSUdVUkFCTEVfTEVOR1RIICYmIG9wdGlvbnMgJiYgaGFzT3duKG9wdGlvbnMsICdhcml0eScpICYmIHZhbHVlLmxlbmd0aCAhPT0gb3B0aW9ucy5hcml0eSkge1xuICAgIGRlZmluZVByb3BlcnR5KHZhbHVlLCAnbGVuZ3RoJywgeyB2YWx1ZTogb3B0aW9ucy5hcml0eSB9KTtcbiAgfVxuICB0cnkge1xuICAgIGlmIChvcHRpb25zICYmIGhhc093bihvcHRpb25zLCAnY29uc3RydWN0b3InKSAmJiBvcHRpb25zLmNvbnN0cnVjdG9yKSB7XG4gICAgICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5KHZhbHVlLCAncHJvdG90eXBlJywgeyB3cml0YWJsZTogZmFsc2UgfSk7XG4gICAgLy8gaW4gVjggfiBDaHJvbWUgNTMsIHByb3RvdHlwZXMgb2Ygc29tZSBtZXRob2RzLCBsaWtlIGBBcnJheS5wcm90b3R5cGUudmFsdWVzYCwgYXJlIG5vbi13cml0YWJsZVxuICAgIH0gZWxzZSBpZiAodmFsdWUucHJvdG90eXBlKSB2YWx1ZS5wcm90b3R5cGUgPSB1bmRlZmluZWQ7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgdmFyIHN0YXRlID0gZW5mb3JjZUludGVybmFsU3RhdGUodmFsdWUpO1xuICBpZiAoIWhhc093bihzdGF0ZSwgJ3NvdXJjZScpKSB7XG4gICAgc3RhdGUuc291cmNlID0gam9pbihURU1QTEFURSwgdHlwZW9mIG5hbWUgPT0gJ3N0cmluZycgPyBuYW1lIDogJycpO1xuICB9IHJldHVybiB2YWx1ZTtcbn07XG5cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWV4dGVuZC1uYXRpdmUgLS0gcmVxdWlyZWRcbkZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZyA9IG1ha2VCdWlsdEluKGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gaXNDYWxsYWJsZSh0aGlzKSAmJiBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpLnNvdXJjZSB8fCBpbnNwZWN0U291cmNlKHRoaXMpO1xufSwgJ3RvU3RyaW5nJyk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgbWFrZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWFrZS1idWlsdC1pbicpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywga2V5LCB2YWx1ZSwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcbiAgdmFyIHNpbXBsZSA9IG9wdGlvbnMuZW51bWVyYWJsZTtcbiAgdmFyIG5hbWUgPSBvcHRpb25zLm5hbWUgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubmFtZSA6IGtleTtcbiAgaWYgKGlzQ2FsbGFibGUodmFsdWUpKSBtYWtlQnVpbHRJbih2YWx1ZSwgbmFtZSwgb3B0aW9ucyk7XG4gIGlmIChvcHRpb25zLmdsb2JhbCkge1xuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2UgZGVmaW5lR2xvYmFsUHJvcGVydHkoa2V5LCB2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghb3B0aW9ucy51bnNhZmUpIGRlbGV0ZSBPW2tleV07XG4gICAgICBlbHNlIGlmIChPW2tleV0pIHNpbXBsZSA9IHRydWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2UgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihPLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiAhb3B0aW9ucy5ub25Db25maWd1cmFibGUsXG4gICAgICB3cml0YWJsZTogIW9wdGlvbnMubm9uV3JpdGFibGVcbiAgICB9KTtcbiAgfSByZXR1cm4gTztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuXG4vLyBgTWF0aC50cnVuY2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW1hdGgudHJ1bmNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1tYXRoLXRydW5jIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gTWF0aC50cnVuYyB8fCBmdW5jdGlvbiB0cnVuYyh4KSB7XG4gIHZhciBuID0gK3g7XG4gIHJldHVybiAobiA+IDAgPyBmbG9vciA6IGNlaWwpKG4pO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdHJ1bmMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWF0aC10cnVuYycpO1xuXG4vLyBgVG9JbnRlZ2VyT3JJbmZpbml0eWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvaW50ZWdlcm9yaW5maW5pdHlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBudW1iZXIgPSArYXJndW1lbnQ7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gIHJldHVybiBudW1iZXIgIT09IG51bWJlciB8fCBudW1iZXIgPT09IDAgPyAwIDogdHJ1bmMobnVtYmVyKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xuXG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5cbi8vIEhlbHBlciBmb3IgYSBwb3B1bGFyIHJlcGVhdGluZyBjYXNlIG9mIHRoZSBzcGVjOlxuLy8gTGV0IGludGVnZXIgYmUgPyBUb0ludGVnZXIoaW5kZXgpLlxuLy8gSWYgaW50ZWdlciA8IDAsIGxldCByZXN1bHQgYmUgbWF4KChsZW5ndGggKyBpbnRlZ2VyKSwgMCk7IGVsc2UgbGV0IHJlc3VsdCBiZSBtaW4oaW50ZWdlciwgbGVuZ3RoKS5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgdmFyIGludGVnZXIgPSB0b0ludGVnZXJPckluZmluaXR5KGluZGV4KTtcbiAgcmV0dXJuIGludGVnZXIgPCAwID8gbWF4KGludGVnZXIgKyBsZW5ndGgsIDApIDogbWluKGludGVnZXIsIGxlbmd0aCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHknKTtcblxudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBgVG9MZW5ndGhgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b2xlbmd0aFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIGxlbiA9IHRvSW50ZWdlck9ySW5maW5pdHkoYXJndW1lbnQpO1xuICByZXR1cm4gbGVuID4gMCA/IG1pbihsZW4sIDB4MUZGRkZGRkZGRkZGRkYpIDogMDsgLy8gMiAqKiA1MyAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG5cbi8vIGBMZW5ndGhPZkFycmF5TGlrZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWxlbmd0aG9mYXJyYXlsaWtlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHRvTGVuZ3RoKG9iai5sZW5ndGgpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS57IGluZGV4T2YsIGluY2x1ZGVzIH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gbGVuZ3RoT2ZBcnJheUxpa2UoTyk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9PSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICAgICAgaWYgKHZhbHVlICE9PSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgaWYgKChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSAmJiBPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcbiAgaW5jbHVkZXM6IGNyZWF0ZU1ldGhvZCh0cnVlKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5pbmRleE9mYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5kZXhvZlxuICBpbmRleE9mOiBjcmVhdGVNZXRob2QoZmFsc2UpXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIGluZGV4T2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMnKS5pbmRleE9mO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcblxudmFyIHB1c2ggPSB1bmN1cnJ5VGhpcyhbXS5wdXNoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgIWhhc093bihoaWRkZW5LZXlzLCBrZXkpICYmIGhhc093bihPLCBrZXkpICYmIHB1c2gocmVzdWx0LCBrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzT3duKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHB1c2gocmVzdWx0LCBrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIElFOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSBbXG4gICdjb25zdHJ1Y3RvcicsXG4gICdoYXNPd25Qcm9wZXJ0eScsXG4gICdpc1Byb3RvdHlwZU9mJyxcbiAgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJyxcbiAgJ3RvTG9jYWxlU3RyaW5nJyxcbiAgJ3RvU3RyaW5nJyxcbiAgJ3ZhbHVlT2YnXG5dO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpbnRlcm5hbE9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG5cbnZhciBoaWRkZW5LZXlzID0gZW51bUJ1Z0tleXMuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eW5hbWVzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5bmFtZXMgLS0gc2FmZVxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHJldHVybiBpbnRlcm5hbE9iamVjdEtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlzeW1ib2xzIC0tIHNhZmVcbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcycpO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG5cbnZhciBjb25jYXQgPSB1bmN1cnJ5VGhpcyhbXS5jb25jYXQpO1xuXG4vLyBhbGwgb2JqZWN0IGtleXMsIGluY2x1ZGVzIG5vbi1lbnVtZXJhYmxlIGFuZCBzeW1ib2xzXG5tb2R1bGUuZXhwb3J0cyA9IGdldEJ1aWx0SW4oJ1JlZmxlY3QnLCAnb3duS2V5cycpIHx8IGZ1bmN0aW9uIG93bktleXMoaXQpIHtcbiAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlLmYoYW5PYmplY3QoaXQpKTtcbiAgdmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZS5mO1xuICByZXR1cm4gZ2V0T3duUHJvcGVydHlTeW1ib2xzID8gY29uY2F0KGtleXMsIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkpIDoga2V5cztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgb3duS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vd24ta2V5cycpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSwgZXhjZXB0aW9ucykge1xuICB2YXIga2V5cyA9IG93bktleXMoc291cmNlKTtcbiAgdmFyIGRlZmluZVByb3BlcnR5ID0gZGVmaW5lUHJvcGVydHlNb2R1bGUuZjtcbiAgdmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZS5mO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICBpZiAoIWhhc093bih0YXJnZXQsIGtleSkgJiYgIShleGNlcHRpb25zICYmIGhhc093bihleGNlcHRpb25zLCBrZXkpKSkge1xuICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgIH1cbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbnZhciByZXBsYWNlbWVudCA9IC8jfFxcLnByb3RvdHlwZVxcLi87XG5cbnZhciBpc0ZvcmNlZCA9IGZ1bmN0aW9uIChmZWF0dXJlLCBkZXRlY3Rpb24pIHtcbiAgdmFyIHZhbHVlID0gZGF0YVtub3JtYWxpemUoZmVhdHVyZSldO1xuICByZXR1cm4gdmFsdWUgPT09IFBPTFlGSUxMID8gdHJ1ZVxuICAgIDogdmFsdWUgPT09IE5BVElWRSA/IGZhbHNlXG4gICAgOiBpc0NhbGxhYmxlKGRldGVjdGlvbikgPyBmYWlscyhkZXRlY3Rpb24pXG4gICAgOiAhIWRldGVjdGlvbjtcbn07XG5cbnZhciBub3JtYWxpemUgPSBpc0ZvcmNlZC5ub3JtYWxpemUgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gIHJldHVybiBTdHJpbmcoc3RyaW5nKS5yZXBsYWNlKHJlcGxhY2VtZW50LCAnLicpLnRvTG93ZXJDYXNlKCk7XG59O1xuXG52YXIgZGF0YSA9IGlzRm9yY2VkLmRhdGEgPSB7fTtcbnZhciBOQVRJVkUgPSBpc0ZvcmNlZC5OQVRJVkUgPSAnTic7XG52YXIgUE9MWUZJTEwgPSBpc0ZvcmNlZC5QT0xZRklMTCA9ICdQJztcblxubW9kdWxlLmV4cG9ydHMgPSBpc0ZvcmNlZDtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJykuZjtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgZGVmaW5lQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4nKTtcbnZhciBkZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5Jyk7XG52YXIgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jb3B5LWNvbnN0cnVjdG9yLXByb3BlcnRpZXMnKTtcbnZhciBpc0ZvcmNlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1mb3JjZWQnKTtcblxuLypcbiAgb3B0aW9ucy50YXJnZXQgICAgICAgICAtIG5hbWUgb2YgdGhlIHRhcmdldCBvYmplY3RcbiAgb3B0aW9ucy5nbG9iYWwgICAgICAgICAtIHRhcmdldCBpcyB0aGUgZ2xvYmFsIG9iamVjdFxuICBvcHRpb25zLnN0YXQgICAgICAgICAgIC0gZXhwb3J0IGFzIHN0YXRpYyBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnByb3RvICAgICAgICAgIC0gZXhwb3J0IGFzIHByb3RvdHlwZSBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnJlYWwgICAgICAgICAgIC0gcmVhbCBwcm90b3R5cGUgbWV0aG9kIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy5mb3JjZWQgICAgICAgICAtIGV4cG9ydCBldmVuIGlmIHRoZSBuYXRpdmUgZmVhdHVyZSBpcyBhdmFpbGFibGVcbiAgb3B0aW9ucy5iaW5kICAgICAgICAgICAtIGJpbmQgbWV0aG9kcyB0byB0aGUgdGFyZ2V0LCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMud3JhcCAgICAgICAgICAgLSB3cmFwIGNvbnN0cnVjdG9ycyB0byBwcmV2ZW50aW5nIGdsb2JhbCBwb2xsdXRpb24sIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy51bnNhZmUgICAgICAgICAtIHVzZSB0aGUgc2ltcGxlIGFzc2lnbm1lbnQgb2YgcHJvcGVydHkgaW5zdGVhZCBvZiBkZWxldGUgKyBkZWZpbmVQcm9wZXJ0eVxuICBvcHRpb25zLnNoYW0gICAgICAgICAgIC0gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuICBvcHRpb25zLmVudW1lcmFibGUgICAgIC0gZXhwb3J0IGFzIGVudW1lcmFibGUgcHJvcGVydHlcbiAgb3B0aW9ucy5kb250Q2FsbEdldFNldCAtIHByZXZlbnQgY2FsbGluZyBhIGdldHRlciBvbiB0YXJnZXRcbiAgb3B0aW9ucy5uYW1lICAgICAgICAgICAtIHRoZSAubmFtZSBvZiB0aGUgZnVuY3Rpb24gaWYgaXQgZG9lcyBub3QgbWF0Y2ggdGhlIGtleVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9wdGlvbnMsIHNvdXJjZSkge1xuICB2YXIgVEFSR0VUID0gb3B0aW9ucy50YXJnZXQ7XG4gIHZhciBHTE9CQUwgPSBvcHRpb25zLmdsb2JhbDtcbiAgdmFyIFNUQVRJQyA9IG9wdGlvbnMuc3RhdDtcbiAgdmFyIEZPUkNFRCwgdGFyZ2V0LCBrZXksIHRhcmdldFByb3BlcnR5LCBzb3VyY2VQcm9wZXJ0eSwgZGVzY3JpcHRvcjtcbiAgaWYgKEdMT0JBTCkge1xuICAgIHRhcmdldCA9IGdsb2JhbDtcbiAgfSBlbHNlIGlmIChTVEFUSUMpIHtcbiAgICB0YXJnZXQgPSBnbG9iYWxbVEFSR0VUXSB8fCBkZWZpbmVHbG9iYWxQcm9wZXJ0eShUQVJHRVQsIHt9KTtcbiAgfSBlbHNlIHtcbiAgICB0YXJnZXQgPSBnbG9iYWxbVEFSR0VUXSAmJiBnbG9iYWxbVEFSR0VUXS5wcm90b3R5cGU7XG4gIH1cbiAgaWYgKHRhcmdldCkgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgc291cmNlUHJvcGVydHkgPSBzb3VyY2Vba2V5XTtcbiAgICBpZiAob3B0aW9ucy5kb250Q2FsbEdldFNldCkge1xuICAgICAgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSk7XG4gICAgICB0YXJnZXRQcm9wZXJ0eSA9IGRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci52YWx1ZTtcbiAgICB9IGVsc2UgdGFyZ2V0UHJvcGVydHkgPSB0YXJnZXRba2V5XTtcbiAgICBGT1JDRUQgPSBpc0ZvcmNlZChHTE9CQUwgPyBrZXkgOiBUQVJHRVQgKyAoU1RBVElDID8gJy4nIDogJyMnKSArIGtleSwgb3B0aW9ucy5mb3JjZWQpO1xuICAgIC8vIGNvbnRhaW5lZCBpbiB0YXJnZXRcbiAgICBpZiAoIUZPUkNFRCAmJiB0YXJnZXRQcm9wZXJ0eSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodHlwZW9mIHNvdXJjZVByb3BlcnR5ID09IHR5cGVvZiB0YXJnZXRQcm9wZXJ0eSkgY29udGludWU7XG4gICAgICBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzKHNvdXJjZVByb3BlcnR5LCB0YXJnZXRQcm9wZXJ0eSk7XG4gICAgfVxuICAgIC8vIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgICBpZiAob3B0aW9ucy5zaGFtIHx8ICh0YXJnZXRQcm9wZXJ0eSAmJiB0YXJnZXRQcm9wZXJ0eS5zaGFtKSkge1xuICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KHNvdXJjZVByb3BlcnR5LCAnc2hhbScsIHRydWUpO1xuICAgIH1cbiAgICBkZWZpbmVCdWlsdEluKHRhcmdldCwga2V5LCBzb3VyY2VQcm9wZXJ0eSwgb3B0aW9ucyk7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcblxuLy8gYElzQXJyYXlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc2FycmF5XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktaXNhcnJheSAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmd1bWVudCkge1xuICByZXR1cm4gY2xhc3NvZihhcmd1bWVudCkgPT09ICdBcnJheSc7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gU2FmYXJpIDwgMTMgZG9lcyBub3QgdGhyb3cgYW4gZXJyb3IgaW4gdGhpcyBjYXNlXG52YXIgU0lMRU5UX09OX05PTl9XUklUQUJMRV9MRU5HVEhfU0VUID0gREVTQ1JJUFRPUlMgJiYgIWZ1bmN0aW9uICgpIHtcbiAgLy8gbWFrZXMgbm8gc2Vuc2Ugd2l0aG91dCBwcm9wZXIgc3RyaWN0IG1vZGUgc3VwcG9ydFxuICBpZiAodGhpcyAhPT0gdW5kZWZpbmVkKSByZXR1cm4gdHJ1ZTtcbiAgdHJ5IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoW10sICdsZW5ndGgnLCB7IHdyaXRhYmxlOiBmYWxzZSB9KS5sZW5ndGggPSAxO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBlcnJvciBpbnN0YW5jZW9mIFR5cGVFcnJvcjtcbiAgfVxufSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNJTEVOVF9PTl9OT05fV1JJVEFCTEVfTEVOR1RIX1NFVCA/IGZ1bmN0aW9uIChPLCBsZW5ndGgpIHtcbiAgaWYgKGlzQXJyYXkoTykgJiYgIWdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCAnbGVuZ3RoJykud3JpdGFibGUpIHtcbiAgICB0aHJvdyBuZXcgJFR5cGVFcnJvcignQ2Fubm90IHNldCByZWFkIG9ubHkgLmxlbmd0aCcpO1xuICB9IHJldHVybiBPLmxlbmd0aCA9IGxlbmd0aDtcbn0gOiBmdW5jdGlvbiAoTywgbGVuZ3RoKSB7XG4gIHJldHVybiBPLmxlbmd0aCA9IGxlbmd0aDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDB4MUZGRkZGRkZGRkZGRkY7IC8vIDIgKiogNTMgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID4gTUFYX1NBRkVfSU5URUdFUikgdGhyb3cgJFR5cGVFcnJvcignTWF4aW11bSBhbGxvd2VkIGluZGV4IGV4Y2VlZGVkJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcbnZhciBzZXRBcnJheUxlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1zZXQtbGVuZ3RoJyk7XG52YXIgZG9lc05vdEV4Y2VlZFNhZmVJbnRlZ2VyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvZXMtbm90LWV4Y2VlZC1zYWZlLWludGVnZXInKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG52YXIgSU5DT1JSRUNUX1RPX0xFTkdUSCA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIFtdLnB1c2guY2FsbCh7IGxlbmd0aDogMHgxMDAwMDAwMDAgfSwgMSkgIT09IDQyOTQ5NjcyOTc7XG59KTtcblxuLy8gVjggPD0gMTIxIGFuZCBTYWZhcmkgPD0gMTUuNDsgRkYgPCAyMyB0aHJvd3MgSW50ZXJuYWxFcnJvclxuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MTI2ODFcbnZhciBwcm9wZXJFcnJvck9uTm9uV3JpdGFibGVMZW5ndGggPSBmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFtdLCAnbGVuZ3RoJywgeyB3cml0YWJsZTogZmFsc2UgfSkucHVzaCgpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBlcnJvciBpbnN0YW5jZW9mIFR5cGVFcnJvcjtcbiAgfVxufTtcblxudmFyIEZPUkNFRCA9IElOQ09SUkVDVF9UT19MRU5HVEggfHwgIXByb3BlckVycm9yT25Ob25Xcml0YWJsZUxlbmd0aCgpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnB1c2hgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUucHVzaFxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGFyaXR5OiAxLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFycyAtLSByZXF1aXJlZCBmb3IgYC5sZW5ndGhgXG4gIHB1c2g6IGZ1bmN0aW9uIHB1c2goaXRlbSkge1xuICAgIHZhciBPID0gdG9PYmplY3QodGhpcyk7XG4gICAgdmFyIGxlbiA9IGxlbmd0aE9mQXJyYXlMaWtlKE8pO1xuICAgIHZhciBhcmdDb3VudCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgZG9lc05vdEV4Y2VlZFNhZmVJbnRlZ2VyKGxlbiArIGFyZ0NvdW50KTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ0NvdW50OyBpKyspIHtcbiAgICAgIE9bbGVuXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgIGxlbisrO1xuICAgIH1cbiAgICBzZXRBcnJheUxlbmd0aChPLCBsZW4pO1xuICAgIHJldHVybiBsZW47XG4gIH1cbn0pO1xuIiwgImNvbnN0IFdHX05BTUVTUEFDRV9JRFMgPSBtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZUlkcycpO1xuY29uc3QgV0dfTkFNRVNQQUNFX05VTUJFUjogbnVtYmVyID0gbXcuY29uZmlnLmdldCgnd2dOYW1lc3BhY2VOdW1iZXInKTtcbmNvbnN0IFdHX1BBR0VfTkFNRTogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpO1xuY29uc3QgV0dfVVNFUl9MQU5HVUFHRTogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dVc2VyTGFuZ3VhZ2UnKTtcblxuY29uc3QgSVNfQ0FURUdPUlkgPSBXR19OQU1FU1BBQ0VfTlVNQkVSID09PSAxNDtcblxuY29uc3QgU1VGRklYX0FQUEVORCA9IDA7XG5jb25zdCBTVUZGSVhfUkVQTEFDRSA9IDE7XG5jb25zdCBTVUZGSVhfU0VUREVGQVVMVCA9IDI7XG5cbmNvbnN0IEVESVRfVEFHID0gJ1Rvb2xzUmVkaXJlY3QnO1xuXG5jb25zdCBWQVJJQU5UUyA9IFsnemgtaGFucycsICd6aC1oYW50JywgJ3poLWNuJywgJ3poLWhrJywgJ3poLW1vJywgJ3poLXNnJywgJ3poLW15JywgJ3poLXR3J107XG5cbmV4cG9ydCB7XG5cdEVESVRfVEFHLFxuXHRJU19DQVRFR09SWSxcblx0U1VGRklYX0FQUEVORCxcblx0U1VGRklYX1JFUExBQ0UsXG5cdFNVRkZJWF9TRVRERUZBVUxULFxuXHRWQVJJQU5UUyxcblx0V0dfTkFNRVNQQUNFX0lEUyxcblx0V0dfTkFNRVNQQUNFX05VTUJFUixcblx0V0dfUEFHRV9OQU1FLFxuXHRXR19VU0VSX0xBTkdVQUdFLFxufTtcbiIsICJleHBvcnQgY29uc3QgZ2V0TWVzc2FnZSA9IChrZXk6IHN0cmluZywgLi4uYXJnczogc3RyaW5nW10pID0+IHtcblx0Ly8gTWVzc2FnZXMgdGhhdCBjYW4gYmUgdXNlZCBoZXJlOlxuXHQvLyAqIHNlZSBtZXNzYWdlcy50c1xuXHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdGtleSA9IGB0b29sc3JlZGlyZWN0LSR7a2V5fWA7XG5cdHJldHVybiBhcmdzLmxlbmd0aCA/IG13Lm1lc3NhZ2Uoa2V5LCAuLi5hcmdzKS5wYXJzZSgpIDogbXcubWVzc2FnZShrZXkpLnBsYWluKCk7XG59O1xuIiwgIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQge1xuXHRFRElUX1RBRyxcblx0SVNfQ0FURUdPUlksXG5cdFNVRkZJWF9BUFBFTkQsXG5cdFNVRkZJWF9SRVBMQUNFLFxuXHRTVUZGSVhfU0VUREVGQVVMVCxcblx0VkFSSUFOVFMsXG5cdFdHX05BTUVTUEFDRV9JRFMsXG5cdFdHX05BTUVTUEFDRV9OVU1CRVIsXG5cdFdHX1BBR0VfTkFNRSxcbn0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vdXRpbC9nZXRNZXNzYWdlcyc7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpID0gaW5pdE13QXBpKCdUb29sc1JlZGlyZWN0LzIuMCcpO1xuXG5jb25zdCBmaW5kUmVkaXJlY3RDYWxsYmFja3MgPSBbXTtcbmNvbnN0IHBhZ2VXaXRoUmVkaXJlY3RUZXh0U3VmZml4ID0ge307XG5jb25zdCByZWRpcmVjdEV4Y2x1ZGVzID0ge307XG5jb25zdCBuc1ByZWZpeGVzID0gW107XG5sZXQgbnNDYW5vblByZWZpeCwgbnNQcmVmaXhQYXR0ZXJuO1xuXG5mb3IgKGNvbnN0IFt0ZXh0LCBuc2lkXSBvZiBPYmplY3QuZW50cmllcyhXR19OQU1FU1BBQ0VfSURTKSkge1xuXHRpZiAobnNpZCA9PT0gV0dfTkFNRVNQQUNFX05VTUJFUiAmJiAhIXRleHQpIHtcblx0XHRuc1ByZWZpeGVzLnB1c2godGV4dCk7XG5cdH1cbn1cblxuaWYgKFdHX05BTUVTUEFDRV9OVU1CRVIgPT09IDApIHtcblx0Ly8gYXJ0aWNsZXNcblx0bnNDYW5vblByZWZpeCA9ICcnO1xuXHRuc1ByZWZpeFBhdHRlcm4gPSAvXi87XG59IGVsc2Uge1xuXHRuc0Nhbm9uUHJlZml4ID0gYCR7V0dfUEFHRV9OQU1FLnNwbGl0KCc6JylbMF19OmA7XG5cdG5zUHJlZml4UGF0dGVybiA9IG5ldyBSZWdFeHAoYF4oJHtuc1ByZWZpeGVzLmpvaW4oJ3wnKX0pOmAsICdpJyk7XG59XG5cbmNvbnN0IGZpeE5hbWVzcGFjZSA9ICh0aXRsZSkgPT4ge1xuXHRpZiAoV0dfTkFNRVNQQUNFX05VTUJFUiA9PT0gMCkge1xuXHRcdC8vIGRvIG5vdGhpbmcgaWYgaXQncyBhcnRpY2xlc1xuXHRcdHJldHVybiB0aXRsZTtcblx0fSBlbHNlIGlmIChuc1ByZWZpeFBhdHRlcm4udGVzdCh0aXRsZSkpIHtcblx0XHQvLyBjYW5vbml6ZSB0aGUgbmFtZXNwYWNlXG5cdFx0cmV0dXJuIHRpdGxlLnJlcGxhY2UobnNQcmVmaXhQYXR0ZXJuLCBuc0Nhbm9uUHJlZml4KTtcblx0fVxuXHQvLyBkb24ndCBoYXZlIGEgbmFtZXNwYWNlXG5cdHJldHVybiBuc0Nhbm9uUHJlZml4ICsgdGl0bGU7XG59O1xuXG4vKipcbiAqIEFkZCBuZXcgY3VzdG9tIGNhbGxiYWNrIGZvciBmaW5kaW5nIG5ldyBwb3RlbnRpYWwgcmVkaXJlY3QgdGl0bGVzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIChwYWdlbmFtZSwgJGNvbnRlbnQsIHRpdGxlcykgPT4gdGl0bGUgbGlzdFxuICogQHBhcmFtIHsuLi5GdW5jdGlvbn0gYXJnc1xuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5jb25zdCBmaW5kUmVkaXJlY3RDYWxsYmFjayA9IGZ1bmN0aW9uIChjYWxsYmFjaywgLi4uYXJncykge1xuXHRpZiAoY2FsbGJhY2spIHtcblx0XHRmaW5kUmVkaXJlY3RDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG5cdH0gZWxzZSB7XG5cdFx0ZmluZFJlZGlyZWN0Q2FsbGJhY2tzLnB1c2goY2FsbGJhY2ssIC4uLmFyZ3MpO1xuXHR9XG5cdHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBGaW5kIG5ldyBwb3RlbnRpYWwgcmVkaXJlY3QgdGl0bGVzIHRocm91Z2ggc2VsZWN0b3IocylcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuY29uc3QgZmluZFJlZGlyZWN0QnlTZWxlY3RvciA9IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuXHQvKiBBIHNob3J0Y3V0IHRvIGFkZCBDU1Mgc2VsZWN0b3JzIGFzIHJ1bGUgdG8gZmluZCBuZXcgcG90ZW50aWFsIHJlZGlyZWN0IHRpdGxlcy4gKi9cblx0ZmluZFJlZGlyZWN0Q2FsbGJhY2tzLnB1c2goKCkgPT4ge1xuXHRcdHJldHVybiAkKHNlbGVjdG9yKS5tYXAoKF9pbmRleCwgZWxlbWVudCkgPT4ge1xuXHRcdFx0cmV0dXJuICQoZWxlbWVudCkuZXEoMCkudGV4dCgpLnRyaW0oKSB8fCBudWxsO1xuXHRcdH0pO1xuXHR9KTtcblx0cmV0dXJuIHRoaXM7XG59O1xuXG5jb25zdCBzZXRSZWRpcmVjdFRleHRTdWZmaXggPSAodGl0bGUsIHN1ZmZpeCwgZmxhZykgPT4ge1xuXHRsZXQgZmxhZ19zZXQgPSBmYWxzZTtcblx0bGV0IGZsYWdfYXBwZW5kID0gZmFsc2U7XG5cdGZsYWcgfHw9IFNVRkZJWF9BUFBFTkQ7IC8vIGRlZmF1bHQgYXBwZW5kXG5cdGZsYWdfc2V0ID0gZmxhZyA9PT0gU1VGRklYX1JFUExBQ0U7XG5cdHRpdGxlID0gZml4TmFtZXNwYWNlKHRpdGxlKTtcblx0aWYgKHRpdGxlIGluIHBhZ2VXaXRoUmVkaXJlY3RUZXh0U3VmZml4KSB7XG5cdFx0ZmxhZ19hcHBlbmQgPSBmbGFnID09PSBTVUZGSVhfQVBQRU5EO1xuXHR9IGVsc2Uge1xuXHRcdC8vIGlmIG5vdCBleGlzdCwgZXZlcnkgZmxhZyBjYW4gc2V0XG5cdFx0ZmxhZ19zZXQgPSB0cnVlO1xuXHR9XG5cdGlmIChmbGFnX3NldCkge1xuXHRcdHBhZ2VXaXRoUmVkaXJlY3RUZXh0U3VmZml4W3RpdGxlXSA9IHN1ZmZpeDtcblx0fSBlbHNlIGlmIChmbGFnX2FwcGVuZCkge1xuXHRcdHBhZ2VXaXRoUmVkaXJlY3RUZXh0U3VmZml4W3RpdGxlXSArPSBzdWZmaXg7XG5cdH1cbn07XG5cbi8qIGV4cG9ydCBnbG9iYWwgb2JqZWN0ICovXG53aW5kb3cudG9vbHNSZWRpcmVjdCA9IHtcblx0ZmluZFJlZGlyZWN0Q2FsbGJhY2ssXG5cdGZpbmRSZWRpcmVjdEJ5U2VsZWN0b3IsXG5cdHNldFJlZGlyZWN0VGV4dFN1ZmZpeCxcbn07XG5cbmV4cG9ydCBjb25zdCBUb29sc1JlZGlyZWN0ID0ge1xuXHR0YWJzZWxlbTogbnVsbCxcblx0dGFnc2VsZW06IG51bGwsXG5cdHZhcmlhbnRzOiBWQVJJQU5UUyxcblx0aW5pdCgpIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblx0XHRjb25zdCBidXR0b24gPSAkKCc8bGk+Jylcblx0XHRcdC5hZGRDbGFzcygnbXctbGlzdC1pdGVtIGNvbGxhcHNpYmxlIHZlY3Rvci10YWItbm9pY29uJylcblx0XHRcdC5hdHRyKCdpZCcsICdjYS1yZWRpcmVjdCcpXG5cdFx0XHQuY3NzKCdjdXJzb3InLCAncG9pbnRlcicpXG5cdFx0XHQuYXBwZW5kKCQoJzxhPicpLmF0dHIoJ3RpdGxlJywgZ2V0TWVzc2FnZSgnYnRuZGVzYycpKS50ZXh0KGdldE1lc3NhZ2UoJ2J0bnRpdGxlJykpKTtcblx0XHRidXR0b24ub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0c2VsZi5kaWFsb2coKTtcblx0XHR9KTtcblx0XHQkYm9keS5maW5kKCdsaSNjYS1oaXN0b3J5JykuYWZ0ZXIoYnV0dG9uKTtcblx0fSxcblx0ZGlhbG9nKCkge1xuXHRcdGNvbnN0IGRpYWxvZyA9ICQoJzxkaXY+Jylcblx0XHRcdC5hdHRyKCd0aXRsZScsIGdldE1lc3NhZ2UoJ2RsZ3RpdGxlJykpXG5cdFx0XHQuYWRkQ2xhc3MoJ2RpYWxvZy1yZWRpcmVjdCcpXG5cdFx0XHQuZGlhbG9nKHtcblx0XHRcdFx0YmdpZnJhbWU6IHRydWUsXG5cdFx0XHRcdHJlc2l6YWJsZTogZmFsc2UsXG5cdFx0XHRcdG1vZGFsOiB0cnVlLFxuXHRcdFx0XHR3aWR0aDogTWF0aC5yb3VuZCgkKHdpbmRvdykud2lkdGgoKSAqIDAuOCksXG5cdFx0XHRcdHBvc2l0aW9uOiAnY2VudGVyJyxcblx0XHRcdH0pO1xuXHRcdGRpYWxvZy5jc3MoJ21heC1oZWlnaHQnLCBgJHtNYXRoLnJvdW5kKCQod2luZG93KS5oZWlnaHQoKSAqIDAuOCl9cHhgKTtcblx0XHR0aGlzLnRhYnNlbGVtID0gJCgnPGRpdj4nKS5hZGRDbGFzcygndGFiLXJlZGlyZWN0JykuYXBwZW5kVG8oZGlhbG9nKTtcblx0XHR0aGlzLnRhZ3NlbGVtID0gJCgnPHVsPicpLmFwcGVuZFRvKHRoaXMudGFic2VsZW0pO1xuXHRcdHRoaXMuYWRkVGFicygpO1xuXHRcdHRoaXMudGFic2VsZW0udGFicygpO1xuXHR9LFxuXHRhZGRUYWJzKCkge1xuXHRcdGZvciAoY29uc3Qga25hbWUgaW4gdGhpcy50YWJzKSB7XG5cdFx0XHRpZiAoT2JqZWN0Lmhhc093bih0aGlzLnRhYnMsIGtuYW1lKSkge1xuXHRcdFx0XHRpZiAodGhpcy50YWJzW2tuYW1lXSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdHRoaXMudGFic1trbmFtZV0gPSB0aGlzW2BfaW5pdFRhYiR7a25hbWVbMF0uY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtrbmFtZS5zbGljZSgxKX1gXSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IHRhYiA9IHRoaXMudGFic1trbmFtZV07XG5cdFx0XHRcdHRoaXMudGFnc2VsZW0uYXBwZW5kKHRhYi50YWcpO1xuXHRcdFx0XHR0aGlzLnRhYnNlbGVtLmFwcGVuZCh0YWIuY29udCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIGRlZmF1bHQgdGFiLCBhdXRvbG9hZCB3aGVuIGRpYWxvZyBpbml0aWF0ZVxuXHRcdHRoaXMubG9hZFZpZXcoKTtcblx0fSxcblx0Y3JlYXRlVGFiKHRhYm5hbWUsIHRhYnRpdGxlLCBvbkNsaWNrKSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0Y29uc3QgdGFnID0gJCgnPGxpPicpLmFwcGVuZCgkKCc8YT4nKS5hdHRyKCdocmVmJywgYCN0YWItJHt0YWJuYW1lfWApLnRleHQodGFidGl0bGUpKTtcblx0XHRjb25zdCBjb250ID0gJCgnPGRpdj4nKS5hdHRyKCdpZCcsIGB0YWItJHt0YWJuYW1lfWApO1xuXHRcdCQoJ2EnLCB0YWcpLm9uKCdjbGljaycsICgpID0+IHtcblx0XHRcdG9uQ2xpY2suY2FsbChzZWxmKTtcblx0XHR9KTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dGFnLFxuXHRcdFx0Y29udCxcblx0XHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0fTtcblx0fSxcblx0X2luaXRUYWJWaWV3KCkge1xuXHRcdHJldHVybiB0aGlzLmNyZWF0ZVRhYigndmlldycsIGdldE1lc3NhZ2UoJ3RhYnZpZXd0aXRsZScpLCB0aGlzLmxvYWRWaWV3KTtcblx0fSxcblx0X2luaXRUYWJDcmVhdGUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuY3JlYXRlVGFiKCdjcmVhdGUnLCBnZXRNZXNzYWdlKCd0YWJjcmVhdGV0aXRsZScpLCB0aGlzLmxvYWRDcmVhdGUpO1xuXHR9LFxuXHR0YWJzOiB7XG5cdFx0dmlldzogbnVsbCxcblx0XHRjcmVhdGU6IG51bGwsXG5cdH0sXG5cdGZpeChwYWdlbmFtZXMpIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHQkKCdwLmRlc2MnLCBzZWxmLnRhYnMudmlldy5jb250KS50ZXh0KGdldE1lc3NhZ2UoJ2ZpeGxvYWRpbmcnKSk7XG5cdFx0JCgncFtjbGFzcyE9ZGVzY10nLCBzZWxmLnRhYnMudmlldy5jb250KS5yZW1vdmUoKTtcblx0XHRzZWxmLmxvYWRpbmcoc2VsZi50YWJzLnZpZXcuY29udCk7XG5cdFx0c2VsZi5idWxrRWRpdEJ5UmVnZXgocGFnZW5hbWVzLCAvXFxzKlxcW1xcWy4qP1xcXVxcXS8sIGAgW1ske1dHX1BBR0VfTkFNRX1dXWAsIGdldE1lc3NhZ2UoJ2ZpeHN1bW1hcnknKSkudGhlbigoKSA9PiB7XG5cdFx0XHQvLyBkZWxheSBsb2FkIGJlZm9yZSB0aGUgYXN5bmNocm9ub3VzIHRhc2tzIG9uIHNlcnZlciBmaW5pc2hlZFxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHNlbGYubG9hZGVkKHNlbGYudGFicy52aWV3LmNvbnQpO1xuXHRcdFx0XHRzZWxmLmxvYWRWaWV3KHRydWUpO1xuXHRcdFx0fSwgMzAwMCk7XG5cdFx0fSk7XG5cdH0sXG5cdGNyZWF0ZShwYWdlbmFtZXMpIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHQkKCdwLmRlc2MnLCBzZWxmLnRhYnMuY3JlYXRlLmNvbnQpLnRleHQoZ2V0TWVzc2FnZSgnY3JlYXRlbG9hZGluZycpKTtcblx0XHQkKCdwW2NsYXNzIT1kZXNjXScsIHNlbGYudGFicy5jcmVhdGUuY29udCkucmVtb3ZlKCk7XG5cdFx0c2VsZi5sb2FkaW5nKHNlbGYudGFicy5jcmVhdGUuY29udCk7XG5cdFx0c2VsZi5idWxrRWRpdChcblx0XHRcdHBhZ2VuYW1lcyxcblx0XHRcdGdldE1lc3NhZ2UoJ2NyZWF0ZXRleHQnKS5yZXBsYWNlKCckMScsIFdHX1BBR0VfTkFNRSksXG5cdFx0XHRnZXRNZXNzYWdlKCdjcmVhdGVzdW1tYXJ5JykucmVwbGFjZSgnJDEnLCBXR19QQUdFX05BTUUpXG5cdFx0KS50aGVuKCgpID0+IHtcblx0XHRcdC8vIGRlbGF5IGxvYWQgYmVmb3JlIHRoZSBhc3luY2hyb25vdXMgdGFza3Mgb24gc2VydmVyIGZpbmlzaGVkXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0c2VsZi5sb2FkZWQoc2VsZi50YWJzLmNyZWF0ZS5jb250KTtcblx0XHRcdFx0c2VsZi50YWJzLnZpZXcubG9hZGVkID0gZmFsc2U7XG5cdFx0XHRcdHNlbGYubG9hZENyZWF0ZSh0cnVlKTtcblx0XHRcdH0sIDUwMCk7XG5cdFx0fSk7XG5cdH0sXG5cdGFkZFJlZGlyZWN0VGV4dFN1ZmZpeCh0aXRsZSwgdGV4dCkge1xuXHRcdGlmICh0aXRsZSBpbiBwYWdlV2l0aFJlZGlyZWN0VGV4dFN1ZmZpeCkge1xuXHRcdFx0dGV4dCArPSBwYWdlV2l0aFJlZGlyZWN0VGV4dFN1ZmZpeFt0aXRsZV07XG5cdFx0fVxuXHRcdHJldHVybiB0ZXh0O1xuXHR9LFxuXHRidWxrRWRpdCh0aXRsZXMsIHRleHQsIHN1bW1hcnkpIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHR0aXRsZXMgPSB0aXRsZXMuZmlsdGVyKCh2LCBpLCBhcnIpID0+IHtcblx0XHRcdHJldHVybiBhcnIuaW5kZXhPZih2KSA9PT0gaTtcblx0XHR9KTtcblx0XHR0aXRsZXMgPSB0aXRsZXMuam9pbignfCcpO1xuXHRcdHJldHVybiBhcGlcblx0XHRcdC5wb3N0KHtcblx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHRwcm9wOiAnaW5mbycsXG5cdFx0XHRcdHRpdGxlcyxcblx0XHRcdH0pXG5cdFx0XHQudGhlbigoe3F1ZXJ5fSkgPT4ge1xuXHRcdFx0XHRjb25zdCBkZWZlcnJlZHMgPSBbXTtcblx0XHRcdFx0Zm9yIChjb25zdCB7dGl0bGV9IG9mIHF1ZXJ5LnBhZ2VzKSB7XG5cdFx0XHRcdFx0ZGVmZXJyZWRzLnB1c2goXG5cdFx0XHRcdFx0XHRhcGkucG9zdFdpdGhUb2tlbignY3NyZicsIHtcblx0XHRcdFx0XHRcdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0XHRcdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdFx0XHRcdHRpdGxlLFxuXHRcdFx0XHRcdFx0XHR0ZXh0OiBzZWxmLmFkZFJlZGlyZWN0VGV4dFN1ZmZpeCh0aXRsZSwgdGV4dCksXG5cdFx0XHRcdFx0XHRcdHN1bW1hcnksXG5cdFx0XHRcdFx0XHRcdHRhZ3M6IEVESVRfVEFHLFxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiAkLndoZW4oLi4uZGVmZXJyZWRzKTtcblx0XHRcdH0pO1xuXHR9LFxuXHRidWxrRWRpdEJ5UmVnZXgodGl0bGVzLCByZWdleCwgdGV4dCwgc3VtbWFyeSkge1xuXHRcdHRpdGxlcyA9IHRpdGxlcy5maWx0ZXIoKHYsIGksIGFycikgPT4ge1xuXHRcdFx0cmV0dXJuIGFyci5pbmRleE9mKHYpID09PSBpO1xuXHRcdH0pO1xuXHRcdHRpdGxlcyA9IHRpdGxlcy5qb2luKCd8Jyk7XG5cdFx0cmV0dXJuIGFwaVxuXHRcdFx0LnBvc3Qoe1xuXHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRcdFx0XHRydnByb3A6ICdjb250ZW50Jyxcblx0XHRcdFx0cnZzbG90czogJyonLFxuXHRcdFx0XHR0aXRsZXMsXG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oKHtxdWVyeX0pID0+IHtcblx0XHRcdFx0Y29uc3QgZGVmZXJyZWRzID0gW107XG5cdFx0XHRcdGZvciAoY29uc3QgcGFnZSBvZiBxdWVyeS5wYWdlcykge1xuXHRcdFx0XHRcdGNvbnN0IHtjb250ZW50fSA9IHBhZ2UucmV2aXNpb25zWzBdLnNsb3RzWydtYWluJ107XG5cdFx0XHRcdFx0Y29uc3QgbmV3Q29udGVudCA9IGNvbnRlbnQucmVwbGFjZShyZWdleCwgdGV4dCk7XG5cdFx0XHRcdFx0ZGVmZXJyZWRzLnB1c2goXG5cdFx0XHRcdFx0XHRhcGkucG9zdFdpdGhUb2tlbignY3NyZicsIHtcblx0XHRcdFx0XHRcdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0XHRcdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiBwYWdlLnRpdGxlLFxuXHRcdFx0XHRcdFx0XHR0ZXh0OiBuZXdDb250ZW50LFxuXHRcdFx0XHRcdFx0XHR0YWdzOiBFRElUX1RBRyxcblx0XHRcdFx0XHRcdFx0YmFzZXRpbWVzdGFtcDogcGFnZS5yZXZpc2lvbnNbMF0udGltZXN0YW1wLFxuXHRcdFx0XHRcdFx0XHRzdW1tYXJ5LFxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiAkLndoZW4oLi4uZGVmZXJyZWRzKTtcblx0XHRcdH0pO1xuXHR9LFxuXHRsb2FkVGFiQ29udCh0YWJuYW1lLCBjYWxsYmFjaywgcmVsb2FkKSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0Y29uc3QgdGFiID0gc2VsZi50YWJzW3RhYm5hbWVdO1xuXHRcdGlmIChyZWxvYWQpIHtcblx0XHRcdHRhYi5sb2FkZWQgPSBmYWxzZTtcblx0XHR9XG5cdFx0aWYgKCF0YWIubG9hZGVkKSB7XG5cdFx0XHR0YWIuY29udC5odG1sKCcnKTtcblx0XHRcdC8vXG5cdFx0XHRjb25zdCAkZGVzYyA9ICQoJzxwPicpXG5cdFx0XHRcdC5hZGRDbGFzcygnZGVzYycpXG5cdFx0XHRcdC5hcHBlbmQoJCgnPHNwYW4+JykuYWRkQ2xhc3MoJ2Rlc2MtdGV4dCcpLnRleHQoZ2V0TWVzc2FnZSgncmVkaWxvYWRpbmcnKSkpXG5cdFx0XHRcdC5hcHBlbmRUbyh0YWIuY29udCk7XG5cdFx0XHRjb25zdCAkdGV4dCA9ICRkZXNjLmZpbmQoJz4gLmRlc2MtdGV4dCcpO1xuXHRcdFx0Y2FsbGJhY2tcblx0XHRcdFx0LmFwcGx5KHNlbGYpXG5cdFx0XHRcdC5kb25lKCgpID0+IHtcblx0XHRcdFx0XHQvLyBNZXNzYWdlcyB0aGF0IGNhbiBiZSB1c2VkIGhlcmU6XG5cdFx0XHRcdFx0Ly8gKiBzZWUgbWVzc2FnZXMuanNcblx0XHRcdFx0XHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdFx0XHRcdFx0JHRleHQudGV4dChnZXRNZXNzYWdlKGB0YWIke3RhYm5hbWV9ZGVzY2ApKTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmZhaWwoKCkgPT4ge1xuXHRcdFx0XHRcdC8vIE1lc3NhZ2VzIHRoYXQgY2FuIGJlIHVzZWQgaGVyZTpcblx0XHRcdFx0XHQvLyAqIHNlZSBtZXNzYWdlcy5qc1xuXHRcdFx0XHRcdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0XHRcdFx0XHQkdGV4dC50ZXh0KGdldE1lc3NhZ2UoYHRhYiR7dGFibmFtZX1ub3Rmb3VuZGApKTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmFsd2F5cygoKSA9PiB7XG5cdFx0XHRcdFx0c2VsZi5hZGRNZXRob2RzKCRkZXNjLCBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGhyZWY6ICcjcmVmcmVzaCcsXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiBnZXRNZXNzYWdlKCdyZWZyZXNoJyksXG5cdFx0XHRcdFx0XHRcdGNsaWNrKGV2ZW50KSB7XG5cdFx0XHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0XHRzZWxmLmxvYWRUYWJDb250KHRhYm5hbWUsIGNhbGxiYWNrLCB0cnVlKTtcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0dGFiLmxvYWRlZCA9IHRydWU7XG5cdFx0fVxuXHR9LFxuXHRsb2FkaW5nKGNvbnRhaW5lcikge1xuXHRcdGlmIChjb250YWluZXIucHJvcCgndGFnTmFtZScpLnRvTG93ZXJDYXNlKCkgPT09ICdzcGFuJykge1xuXHRcdFx0Y29udGFpbmVyLmFkZENsYXNzKCdtdy1hamF4LWxvYWRlcicpO1xuXHRcdH0gZWxzZSBpZiAoJCgnc3Bhbi5tdy1hamF4LWxvYWRlcicsIGNvbnRhaW5lcikubGVuZ3RoID09PSAwKSB7XG5cdFx0XHQkKCc8c3Bhbj4nKS5hZGRDbGFzcygnbXctYWpheC1sb2FkZXInKS5hcHBlbmRUbyhjb250YWluZXIpO1xuXHRcdH1cblx0fSxcblx0bG9hZGVkKGNvbnRhaW5lcikge1xuXHRcdGlmIChjb250YWluZXIucHJvcCgndGFnTmFtZScpLnRvTG93ZXJDYXNlKCkgPT09ICdzcGFuJykge1xuXHRcdFx0Y29udGFpbmVyLnJlbW92ZUNsYXNzKCdtdy1hamF4LWxvYWRlcicpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkKCdzcGFuLm13LWFqYXgtbG9hZGVyJywgY29udGFpbmVyKS5yZW1vdmUoKTtcblx0XHR9XG5cdH0sXG5cdHNlbGVjdEFsbChjb250KSB7XG5cdFx0JCgnaW5wdXRbdHlwZT1jaGVja2JveF06bm90KDpkaXNhYmxlZCknLCBjb250KS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XG5cdH0sXG5cdHNlbGVjdEludmVyc2UoY29udCkge1xuXHRcdCQoJ2lucHV0W3R5cGU9Y2hlY2tib3hdOm5vdCg6ZGlzYWJsZWQpJywgY29udCkuZWFjaCgoX2luZGV4LCBlbGVtZW50KSA9PiB7XG5cdFx0XHRjb25zdCAkZWxlbWVudCA9ICQoZWxlbWVudCk7XG5cdFx0XHQkZWxlbWVudC5wcm9wKCdjaGVja2VkJywgISRlbGVtZW50LnByb3AoJ2NoZWNrZWQnKSk7XG5cdFx0fSk7XG5cdH0sXG5cdHNlbGVjdEFjdGlvbihjb250LCBjYikge1xuXHRcdGNvbnN0IHBhZ2VuYW1lcyA9IFtdO1xuXHRcdCQoJ2lucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQnLCBjb250KS5lYWNoKChfaW5kZXgsIHBhZ2VuYW1lKSA9PiB7XG5cdFx0XHRwYWdlbmFtZXMucHVzaCgkKHBhZ2VuYW1lKS5kYXRhKCdwYWdlLXRpdGxlJykpO1xuXHRcdH0pO1xuXHRcdGlmIChwYWdlbmFtZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0Y2IuY2FsbCh0aGlzLCBwYWdlbmFtZXMpO1xuXHRcdH1cblx0fSxcblx0Y2xpY2tBY3Rpb24oY29udCwgY2IpIHtcblx0XHRjb25zdCBwYWdlbmFtZSA9ICQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScsIGNvbnQpLmRhdGEoJ3BhZ2UtdGl0bGUnKTtcblx0XHRjYi5jYWxsKHRoaXMsIFtwYWdlbmFtZV0pO1xuXHR9LFxuXHRidWlsZExpbmsoe3RpdGxlLCBocmVmLCBjbGljaywgY2xhc3NuYW1lfSkge1xuXHRcdGNvbnN0IGEgPSAkKCc8YT4nKVxuXHRcdFx0LmF0dHIoe1xuXHRcdFx0XHR0aXRsZSxcblx0XHRcdFx0aHJlZixcblx0XHRcdFx0dGFyZ2V0OiAnX2JsYW5rJyxcblx0XHRcdFx0cmVsOiAnbm9vcGVuZXIgbm9yZWZlcnJlcicsXG5cdFx0XHR9KVxuXHRcdFx0LnRleHQodGl0bGUpO1xuXHRcdGlmIChjbGljaykge1xuXHRcdFx0YS5vbignY2xpY2snLCBjbGljayk7XG5cdFx0fVxuXHRcdGlmIChjbGFzc25hbWUpIHtcblx0XHRcdGEuYWRkQ2xhc3MoY2xhc3NuYW1lKTtcblx0XHR9XG5cdFx0cmV0dXJuICQoJzxzcGFuPicpLmFkZENsYXNzKCd0b29scy1yZWRpcmVjdF9saW5rJykuYXBwZW5kKGEpO1xuXHR9LFxuXHRhZGRNZXRob2RzKCRwYXJlbnQsIG1ldGhvZHMpIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRsZXQgJGNvbnRhaW5lciA9ICRwYXJlbnQuZmluZCgnPiAudG9vbHMtcmVkaXJlY3RfbWV0aG9kcycpO1xuXHRcdGNvbnN0IG1ldGhvZEV4aXN0ID0gKHtocmVmfSkgPT4ge1xuXHRcdFx0cmV0dXJuICRjb250YWluZXIuZmluZChgYVtocmVmPSR7SlNPTi5zdHJpbmdpZnkoaHJlZil9XWApLmxlbmd0aCA+IDA7XG5cdFx0fTtcblx0XHRpZiAoJGNvbnRhaW5lci5sZW5ndGggPT09IDApIHtcblx0XHRcdCRjb250YWluZXIgPSAkKCc8c3Bhbj4nKS5hZGRDbGFzcygndG9vbHMtcmVkaXJlY3RfbWV0aG9kcycpLmFwcGVuZFRvKCRwYXJlbnQpO1xuXHRcdH1cblx0XHRmb3IgKGNvbnN0IG1ldGhvZCBvZiBtZXRob2RzKSB7XG5cdFx0XHRpZiAoIW1ldGhvZEV4aXN0KG1ldGhvZCkpIHtcblx0XHRcdFx0c2VsZi5idWlsZExpbmsobWV0aG9kKS5hcHBlbmRUbygkY29udGFpbmVyKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdGJ1aWxkU2VsZWN0aW9uKG1haW4sIG1ldGQsIG10LCBkc2FiKSB7XG5cdFx0Y29uc3QgY29udCA9ICQoJzxzcGFuPicpO1xuXHRcdGNvbnN0IHNlbGUgPSAkKCc8aW5wdXQ+JykuYXR0cigndHlwZScsICdjaGVja2JveCcpLmFwcGVuZFRvKGNvbnQpO1xuXHRcdHRoaXMuYnVpbGRMaW5rKG1haW4pLmFwcGVuZFRvKGNvbnQpO1xuXHRcdHRoaXMuYWRkTWV0aG9kcyhjb250LCBtZXRkKTtcblx0XHRzZWxlLmRhdGEoJ3BhZ2UtdGl0bGUnLCBtdCk7XG5cdFx0aWYgKGRzYWIpIHtcblx0XHRcdHNlbGUucHJvcCgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcblx0XHR9XG5cdFx0cmV0dXJuIGNvbnQ7XG5cdH0sXG5cdGxvYWRWaWV3KHJlbG9hZCkge1xuXHRcdGNvbnN0ICRjb250YWluZXIgPSB0aGlzLnRhYnMudmlldy5jb250O1xuXHRcdHRoaXMubG9hZFRhYkNvbnQoXG5cdFx0XHQndmlldycsXG5cdFx0XHRmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmxvYWRSZWRpcmVjdChXR19QQUdFX05BTUUsICRjb250YWluZXIsIDApO1xuXHRcdFx0fSxcblx0XHRcdHJlbG9hZFxuXHRcdCk7XG5cdH0sXG5cdGxvYWRDcmVhdGUocmVsb2FkKSB7XG5cdFx0dGhpcy5sb2FkVGFiQ29udChcblx0XHRcdCdjcmVhdGUnLFxuXHRcdFx0ZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5maW5kUmVkaXJlY3QoV0dfUEFHRV9OQU1FKTtcblx0XHRcdH0sXG5cdFx0XHRyZWxvYWRcblx0XHQpO1xuXHR9LFxuXHRsb2FkUmVkaXJlY3QocGFnZW5hbWUsIGNvbnRhaW5lciwgZGVlcCwgbG9hZGVkKSB7XG5cdFx0dGhpcy5sb2FkaW5nKGNvbnRhaW5lcik7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0Y29uc3QgZGVmZXJyZWQgPSAkLkRlZmVycmVkKCk7XG5cdFx0Y29uc3QgdG9wID0gZGVlcCA/ICQoJzxkbD4nKS5hcHBlbmRUbyhjb250YWluZXIpIDogY29udGFpbmVyO1xuXHRcdGlmICghbG9hZGVkKSB7XG5cdFx0XHRsb2FkZWQgPSB7fTtcblx0XHRcdGxvYWRlZFtwYWdlbmFtZV0gPSB0cnVlO1xuXHRcdH1cblx0XHRjb25zdCBvbkNsaWNrRml4ID0gKGV2ZW50KSA9PiB7XG5cdFx0XHRjb25zdCBlbnRyeSA9ICQodGhpcykucGFyZW50cygnZGQsIHAnKS5maXJzdCgpO1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHNlbGYuY2xpY2tBY3Rpb24oZW50cnksIHRoaXMuZml4KTtcblx0XHR9O1xuXHRcdGFwaS5wb3N0KHtcblx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0cHJvcDogJ3JlZGlyZWN0cycsXG5cdFx0XHR0aXRsZXM6IHBhZ2VuYW1lLFxuXHRcdFx0cmRsaW1pdDogJ21heCcsXG5cdFx0fSkudGhlbigoe3F1ZXJ5fSkgPT4ge1xuXHRcdFx0c2VsZi5sb2FkZWQoY29udGFpbmVyKTtcblx0XHRcdGxldCBoYXNfcmVkaXJlY3QgPSBmYWxzZTtcblx0XHRcdGNvbnN0IGRlc2MgPSAkKCdwLmRlc2MnLCBzZWxmLnRhYnMudmlldy5jb250KTtcblx0XHRcdGNvbnN0IG1heGltdW1SZWRpcmVjdERlcHRoID0gMTA7XG5cdFx0XHRmb3IgKGNvbnN0IHBhZ2Ugb2YgcXVlcnkucGFnZXMpIHtcblx0XHRcdFx0aWYgKHBhZ2UucmVkaXJlY3RzKSB7XG5cdFx0XHRcdFx0Y29uc3Qge3JlZGlyZWN0c30gPSBwYWdlO1xuXHRcdFx0XHRcdGZvciAoY29uc3Qge3RpdGxlfSBvZiByZWRpcmVjdHMpIHtcblx0XHRcdFx0XHRcdGNvbnN0IHJkdGl0bGUgPSB0aXRsZTtcblx0XHRcdFx0XHRcdGNvbnN0IHVsdGl0bGUgPSByZHRpdGxlLnJlcGxhY2UoLyAvZywgJ18nKTtcblx0XHRcdFx0XHRcdGNvbnN0IGVudHJ5ID0gKGRlZXAgPyAkKCc8ZGQ+JykgOiAkKCc8cD4nKSkuYXBwZW5kVG8odG9wKTtcblx0XHRcdFx0XHRcdGNvbnN0IG1ldGhvZHMgPSBbXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRocmVmOiBtdy51dGlsLmdldFVybCh1bHRpdGxlLCB7YWN0aW9uOiAnZWRpdCd9KSxcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogZ2V0TWVzc2FnZSgncmVkaWVkaXQnKSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdF07XG5cdFx0XHRcdFx0XHRjb25zdCBpc0N5Y2xlUmVkaXJlY3QgPSByZHRpdGxlIGluIGxvYWRlZDtcblx0XHRcdFx0XHRcdGxvYWRlZFtyZHRpdGxlXSA9IHRydWU7XG5cdFx0XHRcdFx0XHRpZiAoIWlzQ3ljbGVSZWRpcmVjdCAmJiBkZWVwKSB7XG5cdFx0XHRcdFx0XHRcdG1ldGhvZHMucHVzaCh7XG5cdFx0XHRcdFx0XHRcdFx0aHJlZjogJyNmaXgtcmVkaXJlY3QnLFxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiBnZXRNZXNzYWdlKCd0YWJ2aWV3Zml4JyksXG5cdFx0XHRcdFx0XHRcdFx0Y2xpY2s6IG9uQ2xpY2tGaXgsXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Y29uc3QgJGNvbnRhaW5lciA9IHNlbGZcblx0XHRcdFx0XHRcdFx0LmJ1aWxkU2VsZWN0aW9uKFxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdGhyZWY6IG13LnV0aWwuZ2V0VXJsKHVsdGl0bGUsIHtyZWRpcmVjdDogJ25vJ30pLFxuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6IHJkdGl0bGUsXG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRtZXRob2RzLFxuXHRcdFx0XHRcdFx0XHRcdHVsdGl0bGUsXG5cdFx0XHRcdFx0XHRcdFx0IWRlZXBcblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHQuYXBwZW5kVG8oZW50cnkpO1xuXHRcdFx0XHRcdFx0aWYgKGlzQ3ljbGVSZWRpcmVjdCkge1xuXHRcdFx0XHRcdFx0XHQkY29udGFpbmVyLmFwcGVuZChgPHNwYW4gY2xhc3M9XCJlcnJvclwiPiR7Z2V0TWVzc2FnZSgnZXJyY3ljbGVyZWRpcmVjdCcpfTwvc3Bhbj5gKTtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoZGVlcCA8IG1heGltdW1SZWRpcmVjdERlcHRoKSB7XG5cdFx0XHRcdFx0XHRcdGRlZmVycmVkLnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBzZWxmLmxvYWRSZWRpcmVjdChyZHRpdGxlLCBlbnRyeSwgZGVlcCArIDEsIGxvYWRlZCk7XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aGFzX3JlZGlyZWN0ID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aGFzX3JlZGlyZWN0ID0gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChoYXNfcmVkaXJlY3QgJiYgZGVlcCA9PT0gMSkge1xuXHRcdFx0XHRzZWxmLmFkZE1ldGhvZHMoZGVzYywgW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGhyZWY6ICcjc2VsZWN0LWFsbCcsXG5cdFx0XHRcdFx0XHR0aXRsZTogZ2V0TWVzc2FnZSgnc2VsZWN0YWxsJyksXG5cdFx0XHRcdFx0XHRjbGljayhldmVudCkge1xuXHRcdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRzZWxmLnNlbGVjdEFsbChzZWxmLnRhYnMudmlldy5jb250KTtcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRocmVmOiAnI3NlbGVjdC1pbnZlcnNlJyxcblx0XHRcdFx0XHRcdHRpdGxlOiBnZXRNZXNzYWdlKCdzZWxlY3RpbnZlcnNlJyksXG5cdFx0XHRcdFx0XHRjbGljayhldmVudCkge1xuXHRcdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRzZWxmLnNlbGVjdEludmVyc2Uoc2VsZi50YWJzLnZpZXcuY29udCk7XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0aHJlZjogJyNmaXgtc2VsZWN0ZWQnLFxuXHRcdFx0XHRcdFx0dGl0bGU6IGdldE1lc3NhZ2UoJ3RhYnZpZXdmaXgnKSxcblx0XHRcdFx0XHRcdGNsaWNrKGV2ZW50KSB7XG5cdFx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdHNlbGYuc2VsZWN0QWN0aW9uKHNlbGYudGFicy52aWV3LmNvbnQsIHNlbGYuZml4KTtcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoaGFzX3JlZGlyZWN0KSB7XG5cdFx0XHRcdGRlZmVycmVkLnJlc29sdmVXaXRoKHNlbGYpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZGVmZXJyZWQucmVqZWN0V2l0aChzZWxmKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRyZXR1cm4gZGVmZXJyZWQucHJvbWlzZSgpO1xuXHR9LFxuXHRmaW5kVmFyaWFudHMocGFnZW5hbWUsIHRpdGxlcykge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdGNvbnN0IHN1ZmZpeFJlZyA9IC9eLis/KCjvvIh8WyBfXVxcKCkuKz8oWynvvIldKSkkLztcblx0XHRsZXQgcmV0VGl0bGVzID0gW107XG5cdFx0Y29uc3QgZGVmZXJyZWRzID0gW107XG5cdFx0Zm9yIChjb25zdCB2YXJpYW50IG9mIFZBUklBTlRTKSB7XG5cdFx0XHRsZXQgeGhyID0gYXBpXG5cdFx0XHRcdC5wb3N0KHtcblx0XHRcdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHRcdHBhZ2U6IHBhZ2VuYW1lLFxuXHRcdFx0XHRcdHByb3A6ICdkaXNwbGF5dGl0bGUnLFxuXHRcdFx0XHRcdHVzZWxhbmc6IHZhcmlhbnQsXG5cdFx0XHRcdFx0dmFyaWFudCxcblx0XHRcdFx0fSlcblx0XHRcdFx0LnRoZW4oKHtwYXJzZX0pID0+IHtcblx0XHRcdFx0XHRjb25zdCB7ZGlzcGxheXRpdGxlfSA9IHBhcnNlO1xuXHRcdFx0XHRcdC8vIEV4YW1wbGU6XG5cdFx0XHRcdFx0Ly8gLSBCZWZvcmU6IDxzcGFuIGNsYXNzPVwibXctcGFnZS10aXRsZS1uYW1lc3BhY2VcIj7msYLpl7vnmb7np5E8L3NwYW4+PHNwYW4gY2xhc3M9XCJtdy1wYWdlLXRpdGxlLXNlcGFyYXRvclwiPjo8L3NwYW4+PHNwYW4gY2xhc3M9XCJtdy1wYWdlLXRpdGxlLW1haW5cIj7mspnnm5I8L3NwYW4+XG5cdFx0XHRcdFx0Ly8gLSBBZnRlcjog5rGC6Ze755m+56eROuaymeebklxuXHRcdFx0XHRcdGxldCB0aXRsZSA9ICQoJzxzcGFuPicpLmFwcGVuZChkaXNwbGF5dGl0bGUpLmVxKDApLnRleHQoKS50cmltKCk7XG5cdFx0XHRcdFx0dGl0bGUgPSBmaXhOYW1lc3BhY2UodGl0bGUpO1xuXHRcdFx0XHRcdHNldFJlZGlyZWN0VGV4dFN1ZmZpeCh0aXRsZSwgJ1xcbnt7566A57mB6YeN5a6a5ZCRfX0nLCBTVUZGSVhfQVBQRU5EKTtcblx0XHRcdFx0XHRyZXR1cm4gdGl0bGU7XG5cdFx0XHRcdH0pO1xuXHRcdFx0aWYgKElTX0NBVEVHT1JZKSB7XG5cdFx0XHRcdHhociA9IHhoci50aGVuKChvcmlnVGl0bGUpID0+IHtcblx0XHRcdFx0XHRhcGkucG9zdCh7XG5cdFx0XHRcdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdFx0XHRcdHRleHQ6IHBhZ2VuYW1lLFxuXHRcdFx0XHRcdFx0cHJvcDogJ3RleHQnLFxuXHRcdFx0XHRcdFx0dGl0bGU6ICdNZWRpYVdpa2k6R2FkZ2V0LVRvb2xzUmVkaXJlY3QuanMvLScsXG5cdFx0XHRcdFx0XHRjb250ZW50bW9kZWw6ICd3aWtpdGV4dCcsXG5cdFx0XHRcdFx0XHR1c2VsYW5nOiB2YXJpYW50LFxuXHRcdFx0XHRcdFx0dmFyaWFudCxcblx0XHRcdFx0XHR9KS50aGVuKCh7cGFyc2V9KSA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCB0bXBUaXRsZSA9ICQocGFyc2UudGV4dCkudGV4dCgpLnRyaW0oKTtcblx0XHRcdFx0XHRcdC8vIHNob3VsZCBub3QgY3JlYXRlIHJlZGlyZWN0IGNhdGVnb3JpZXNcblx0XHRcdFx0XHRcdC8vIGlmIHRoZSBjb252ZXJzaW9uIGlzIGFscmVhZHkgaW4gZ2xvYmFsIHRhYmxlLFxuXHRcdFx0XHRcdFx0Ly8gb3IgaXQgd2lsbCBtZXNzIHVwIGEgbG90XG5cdFx0XHRcdFx0XHRyZWRpcmVjdEV4Y2x1ZGVzW3RtcFRpdGxlXSA9IHRydWU7XG5cdFx0XHRcdFx0XHRyZXR1cm4gb3JpZ1RpdGxlO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdGRlZmVycmVkcy5wdXNoKHhocik7XG5cdFx0fVxuXHRcdHJldHVybiAkLndoZW4oLi4uZGVmZXJyZWRzKS50aGVuKCguLi5hcmdzKSA9PiB7XG5cdFx0XHRjb25zdCBzdWZmaXhlcyA9IFtdO1xuXHRcdFx0Zm9yIChjb25zdCB0aXRsZSBvZiBhcmdzKSB7XG5cdFx0XHRcdGxldCBzdWZmaXg7XG5cdFx0XHRcdC8vIGZpbmQgdGl0bGUgc3VmZml4LFxuXHRcdFx0XHQvLyBmb3IgZXhhbXBsZSBcIiAo5rWO5Y2X5biCKVwiIHRvIFwi5biC5Lit5Yy6ICjmtY7ljZfluIIpXCJcblx0XHRcdFx0Y29uc3Qgc3VmZml4QXJyID0gc3VmZml4UmVnLmV4ZWModGl0bGUpO1xuXHRcdFx0XHRpZiAoc3VmZml4QXJyICYmIHN1ZmZpeEFyci5sZW5ndGggPT09IDIpIHtcblx0XHRcdFx0XHRbLCBzdWZmaXhdID0gc3VmZml4QXJyO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHN1ZmZpeCA9ICcnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldFRpdGxlcy5wdXNoKHRpdGxlKTtcblx0XHRcdFx0c3VmZml4ZXMucHVzaChzdWZmaXgpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gYXBwZW5kIHN1ZmZpeGVzXG5cdFx0XHRmb3IgKGNvbnN0IHN1ZmZpeCBvZiBuZXcgU2V0KHN1ZmZpeGVzKSkge1xuXHRcdFx0XHRyZXRUaXRsZXMgPSBbXG5cdFx0XHRcdFx0Li4ucmV0VGl0bGVzLFxuXHRcdFx0XHRcdC4uLnRpdGxlcy5tYXAoKHRpdGxlKSA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCBtb2RpZmllZFRpdGxlID0gZml4TmFtZXNwYWNlKHRpdGxlKTtcblx0XHRcdFx0XHRcdHJldHVybiBzdWZmaXhSZWcudGVzdChtb2RpZmllZFRpdGxlKSA/IG1vZGlmaWVkVGl0bGUgOiBtb2RpZmllZFRpdGxlICsgc3VmZml4O1xuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRdO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHNlbGYuZmluZE5vdEV4aXN0cyhbLi4ubmV3IFNldChyZXRUaXRsZXMpXSk7XG5cdFx0fSk7XG5cdH0sXG5cdGZpbmROb3RFeGlzdHModGl0bGVzKSB7XG5cdFx0Y29uc3QgZGVmZXJyZWRzID0gW107XG5cdFx0Y29uc3QgZXhjbHVkZXMgPSBuZXcgU2V0KFsn55So5a2X5qih5byPJ10pO1xuXHRcdGxldCBhbGx0aXRsZXMgPSBbXTtcblx0XHR0aXRsZXMgPSB0aXRsZXMuam9pbignfCcpO1xuXHRcdGZvciAoY29uc3QgdmFyaWFudCBvZiBWQVJJQU5UUykge1xuXHRcdFx0ZGVmZXJyZWRzLnB1c2goXG5cdFx0XHRcdGFwaS5wb3N0KHtcblx0XHRcdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHRcdHRleHQ6IHRpdGxlcyxcblx0XHRcdFx0XHRwcm9wOiAndGV4dCcsXG5cdFx0XHRcdFx0dGl0bGU6ICdNZWRpYVdpa2k6R2FkZ2V0LVRvb2xzUmVkaXJlY3QuanMvLScsXG5cdFx0XHRcdFx0Y29udGVudG1vZGVsOiAnd2lraXRleHQnLFxuXHRcdFx0XHRcdHVzZWxhbmc6IHZhcmlhbnQsXG5cdFx0XHRcdFx0dmFyaWFudCxcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdFx0fVxuXHRcdHJldHVybiAkLndoZW4oLi4uZGVmZXJyZWRzKS50aGVuKCguLi5hcmdzKSA9PiB7XG5cdFx0XHRmb3IgKGNvbnN0IFt7cGFyc2V9XSBvZiBhcmdzKSB7XG5cdFx0XHRcdGFsbHRpdGxlcyA9IFsuLi5hbGx0aXRsZXMsIC4uLiQocGFyc2UudGV4dCkudGV4dCgpLnRyaW0oKS5zcGxpdCgnfCcpXTtcblx0XHRcdH1cblx0XHRcdGFsbHRpdGxlcyA9IGFsbHRpdGxlcy5maWx0ZXIoKHYsIGksIGFycikgPT4ge1xuXHRcdFx0XHRyZXR1cm4gYXJyLmluZGV4T2YodikgPT09IGk7XG5cdFx0XHR9KTtcblx0XHRcdGFsbHRpdGxlcyA9IGFsbHRpdGxlcy5qb2luKCd8Jyk7XG5cdFx0XHRyZXR1cm4gYXBpXG5cdFx0XHRcdC5wb3N0KHtcblx0XHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHRcdHByb3A6ICdpbmZvJyxcblx0XHRcdFx0XHR0aXRsZXM6IGFsbHRpdGxlcyxcblx0XHRcdFx0fSlcblx0XHRcdFx0LnRoZW4oKHtxdWVyeX0pID0+IHtcblx0XHRcdFx0XHR0aXRsZXMgPSBbXTtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IHBhZ2Ugb2YgcXVlcnkucGFnZXMpIHtcblx0XHRcdFx0XHRcdGNvbnN0IHt0aXRsZX0gPSBwYWdlO1xuXHRcdFx0XHRcdFx0aWYgKHBhZ2UubWlzc2luZyAmJiAhZXhjbHVkZXMuaGFzKHRpdGxlKSkge1xuXHRcdFx0XHRcdFx0XHRpZiAodGl0bGUgaW4gcmVkaXJlY3RFeGNsdWRlcykge1xuXHRcdFx0XHRcdFx0XHRcdC8vIGV4Y2x1ZGUgc3BlY2lhbCB0aXRsZXNcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0dGl0bGVzLnB1c2godGl0bGUpO1xuXHRcdFx0XHRcdFx0XHRpZiAoSVNfQ0FURUdPUlkpIHtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCB0YXJnZXQgPSBXR19QQUdFX05BTUUucmVwbGFjZSgvXkNhdGVnb3J5Oi8sICcnKTtcblx0XHRcdFx0XHRcdFx0XHRzZXRSZWRpcmVjdFRleHRTdWZmaXgodGl0bGUsICdcXG57e+WIhuexu+mHjeWumuWQkXwkMX19Jy5yZXBsYWNlKCckMScsIHRhcmdldCkpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdC8vIG9ubHkgc2V0IGRlZmF1bHQgc3VmZml4XG5cdFx0XHRcdFx0XHRcdHNldFJlZGlyZWN0VGV4dFN1ZmZpeCh0aXRsZSwgJ1xcbnt75Yir5ZCN6YeN5a6a5ZCRfX0nLCBTVUZGSVhfU0VUREVGQVVMVCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiB0aXRsZXM7XG5cdFx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9LFxuXHRmaW5kUmVkaXJlY3QocGFnZW5hbWUpIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRjb25zdCBmcmNEZWZlcnJlZHMgPSBbXTtcblx0XHRjb25zdCBjb250YWluZXIgPSBzZWxmLnRhYnMuY3JlYXRlLmNvbnQ7XG5cdFx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdFx0Y29uc3QgJGNvbnRlbnQgPSAkYm9keS5maW5kKCcjbXctY29udGVudC10ZXh0ID4gZGl2Lm13LXBhcnNlci1vdXRwdXQnKTtcblx0XHRjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQoKTtcblx0XHRsZXQgdGl0bGVzID0gW107XG5cdFx0c2VsZi5sb2FkaW5nKGNvbnRhaW5lcik7XG5cdFx0Zm9yIChjb25zdCBjYWxsYmFjayBvZiBmaW5kUmVkaXJlY3RDYWxsYmFja3MpIHtcblx0XHRcdGNvbnN0IHJldCA9IGNhbGxiYWNrKHBhZ2VuYW1lLCAkY29udGVudCwgdGl0bGVzKTtcblx0XHRcdGlmICh0eXBlb2YgcmV0ID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHR0aXRsZXMucHVzaChyZXQpO1xuXHRcdFx0fSBlbHNlIGlmICgnZG9uZScgaW4gcmV0KSB7XG5cdFx0XHRcdC8vIGlzIERlZmVycmVkXG5cdFx0XHRcdGZyY0RlZmVycmVkcy5wdXNoKHJldCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aXRsZXMgPSBbLi4ubmV3IFNldChbLi4udGl0bGVzLCAuLi5yZXRdKV07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIHJlbW92ZSBhbGwgZW1wdHkgdGl0bGVzXG5cdFx0dGl0bGVzID0gdGl0bGVzLm1hcCgodGl0bGUpID0+IHtcblx0XHRcdHJldHVybiB0aXRsZSB8fCBudWxsO1xuXHRcdH0pO1xuXHRcdGNvbnN0IG9uQ2xpY2tDcmVhdGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRcdGNvbnN0IGVudHJ5ID0gJCh0aGlzKS5wYXJlbnRzKCdwOmZpcnN0Jyk7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0c2VsZi5jbGlja0FjdGlvbihlbnRyeSwgc2VsZi5jcmVhdGUpO1xuXHRcdH07XG5cdFx0Ly8gaGFuZGxlcyB0aGUgZGVmZXJyZWQgY2FsbGJhY2tzXG5cdFx0JC53aGVuKC4uLmZyY0RlZmVycmVkcylcblx0XHRcdC50aGVuKCguLi5hcmdzKSA9PiB7XG5cdFx0XHRcdGZvciAoY29uc3QgcmV0IG9mIGFyZ3MpIHtcblx0XHRcdFx0XHRpZiAodHlwZW9mIHJldCA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHRcdHRpdGxlcy5wdXNoKHJldCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRpdGxlcyA9IFsuLi5uZXcgU2V0KFsuLi50aXRsZXMsIC4uLnJldF0pXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHNlbGYuZmluZFZhcmlhbnRzKHBhZ2VuYW1lLCB0aXRsZXMpO1xuXHRcdFx0fSlcblx0XHRcdC50aGVuKChmdnRpdGxlcykgPT4ge1xuXHRcdFx0XHQvLyBidWlsZCBIVE1MXG5cdFx0XHRcdHNlbGYubG9hZGVkKGNvbnRhaW5lcik7XG5cdFx0XHRcdGZvciAoY29uc3QgdGl0bGUgb2YgZnZ0aXRsZXMpIHtcblx0XHRcdFx0XHRjb25zdCB1bHRpdGxlID0gdGl0bGUucmVwbGFjZSgnICcsICdfJyk7XG5cdFx0XHRcdFx0Y29uc3QgZW50cnkgPSAkKCc8cD4nKS5hcHBlbmRUbyhjb250YWluZXIpO1xuXHRcdFx0XHRcdHNlbGYuYnVpbGRTZWxlY3Rpb24oXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGhyZWY6IG13LnV0aWwuZ2V0VXJsKHVsdGl0bGUsIHthY3Rpb246ICdlZGl0JywgcmVkbGluazogJzEnfSksXG5cdFx0XHRcdFx0XHRcdHRpdGxlLFxuXHRcdFx0XHRcdFx0XHRjbGFzc25hbWU6ICduZXcnLFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdGhyZWY6ICcjY3JlYXRlLXJlZGlyZWN0Jyxcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogZ2V0TWVzc2FnZSgndGFiY3JlYXRldGl0bGUnKSxcblx0XHRcdFx0XHRcdFx0XHRjbGljazogb25DbGlja0NyZWF0ZSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XHR1bHRpdGxlLFxuXHRcdFx0XHRcdFx0ZmFsc2Vcblx0XHRcdFx0XHQpLmFwcGVuZFRvKGVudHJ5KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBkZXNjID0gJCgncC5kZXNjJywgY29udGFpbmVyKTtcblx0XHRcdFx0aWYgKGZ2dGl0bGVzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRzZWxmLmFkZE1ldGhvZHMoZGVzYywgW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRocmVmOiAnI3NlbGVjdC1hbGwnLFxuXHRcdFx0XHRcdFx0XHR0aXRsZTogZ2V0TWVzc2FnZSgnc2VsZWN0YWxsJyksXG5cdFx0XHRcdFx0XHRcdGNsaWNrKGV2ZW50KSB7XG5cdFx0XHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0XHRzZWxmLnNlbGVjdEFsbChjb250YWluZXIpO1xuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0aHJlZjogJyNzZWxlY3QtaW52ZXJzZScsXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiBnZXRNZXNzYWdlKCdzZWxlY3RpbnZlcnNlJyksXG5cdFx0XHRcdFx0XHRcdGNsaWNrKGV2ZW50KSB7XG5cdFx0XHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0XHRzZWxmLnNlbGVjdEludmVyc2UoY29udGFpbmVyKTtcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGhyZWY6ICcjY3JlYXRlLXNlbGVjdGVkJyxcblx0XHRcdFx0XHRcdFx0dGl0bGU6IGdldE1lc3NhZ2UoJ3RhYmNyZWF0ZXRpdGxlJyksXG5cdFx0XHRcdFx0XHRcdGNsaWNrKGV2ZW50KSB7XG5cdFx0XHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0XHRzZWxmLnNlbGVjdEFjdGlvbihjb250YWluZXIsIHNlbGYuY3JlYXRlKTtcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XSk7XG5cdFx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZVdpdGgoc2VsZiwgW2Z2dGl0bGVzXSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dm9pZCBkZWZlcnJlZC5yZWplY3RXaXRoKHNlbGYsIFtmdnRpdGxlc10pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRyZXR1cm4gZGVmZXJyZWQucHJvbWlzZSgpO1xuXHR9LFxufTtcbiIsICJpbXBvcnQge1dHX1VTRVJfTEFOR1VBR0V9IGZyb20gJy4vY29uc3RhbnQnO1xuXG5leHBvcnQgY29uc3QgdG9vbHNSZWRpcmVjdE1lc3NhZ2VzID0gKCk6IHZvaWQgPT4ge1xuXHRpZiAoWyd6aC1oYW50JywgJ3poLWhrJywgJ3poLW1vJywgJ3poLXR3J10uaW5jbHVkZXMoV0dfVVNFUl9MQU5HVUFHRSkpIHtcblx0XHRtdy5tZXNzYWdlcy5zZXQoe1xuXHRcdFx0J3Rvb2xzcmVkaXJlY3QtYnRudGl0bGUnOiAn6YeN5paw5bCO5ZCRJyxcblx0XHRcdCd0b29sc3JlZGlyZWN0LWJ0bmRlc2MnOiAn5Ym15bu65ZKM566h55CG5q2k6aCB6Z2i55qE6YeN5paw5bCO5ZCRJyxcblx0XHRcdCd0b29sc3JlZGlyZWN0LWRsZ3RpdGxlJzogJ+WJteW7uuWSjOeuoeeQhumHjeaWsOWwjuWQkScsXG5cdFx0XHQndG9vbHNyZWRpcmVjdC1yZWRpbG9hZGluZyc6ICfmlbjmk5rliqDovInkuK3vvIzoq4vnqI3lgJnigKbigKYnLFxuXHRcdFx0J3Rvb2xzcmVkaXJlY3QtcmVkaWVkaXQnOiAn57eo6LyvJyxcblx0XHRcdCd0b29sc3JlZGlyZWN0LXNlbGVjdGFsbCc6ICflhajpgbgnLFxuXHRcdFx0J3Rvb2xzcmVkaXJlY3Qtc2VsZWN0aW52ZXJzZSc6ICflj43pgbgnLFxuXHRcdFx0J3Rvb2xzcmVkaXJlY3QtdGFidmlld3RpdGxlJzogJ+afpeeciycsXG5cdFx0XHQndG9vbHNyZWRpcmVjdC10YWJ2aWV3ZGVzYyc6ICfku6XkuIvmmK/mjIflkJHmraTpoIHpnaLnmoTph43mlrDlsI7lkJHpoIHvvJonLFxuXHRcdFx0J3Rvb2xzcmVkaXJlY3QtdGFidmlld25vdGZvdW5kJzogJ+aykuacieaJvuWIsOS7u+S9leaMh+WQkeatpOmggemdoueahOmHjeaWsOWwjuWQkemggeOAgicsXG5cdFx0XHQndG9vbHNyZWRpcmVjdC10YWJ2aWV3bXVsdGknOiAn5aSa6YeNJyxcblx0XHRcdCd0b29sc3JlZGlyZWN0LXRhYnZpZXdmaXgnOiAn5L+u5b6pJyxcblx0XHRcdCd0b29sc3JlZGlyZWN0LWZpeGxvYWRpbmcnOiAn6KuL56iN5YCZ77yM5q2j5Zyo6Ieq5YuV5L+u5b6p6YeN5paw5bCO5ZCR4oCm4oCmJyxcblx0XHRcdCd0b29sc3JlZGlyZWN0LWZpeHRleHQnOiAnI1JFRElSRUNUIFtbJDFdXScsXG5cdFx0XHQndG9vbHNyZWRpcmVjdC1maXhzdW1tYXJ5JzogJ+e3qOi8r+W3peWFt++8muS/ruW+qeWkmumHjemHjeaWsOWwjuWQkScsXG5cdFx0XHQndG9vbHNyZWRpcmVjdC10YWJjcmVhdGV0aXRsZSc6ICflibXlu7onLFxuXHRcdFx0J3Rvb2xzcmVkaXJlY3QtdGFiY3JlYXRlZGVzYyc6ICfku6XkuIvmmK/lsJrmnKrlibXlu7rnmoTph43mlrDlsI7lkJHpoIHvvJonLFxuXHRcdFx0J3Rvb2xzcmVkaXJlY3QtdGFiY3JlYXRlbm90Zm91bmQnOiAn5rKS5pyJ5om+5Yiw5Y+v5Lul5Ym15bu655qE6YeN5paw5bCO5ZCR6aCB44CCJyxcblx0XHRcdCd0b29sc3JlZGlyZWN0LXRhYmNyZWF0ZWFsbCc6ICflhajpg6jlibXlu7onLFxuXHRcdFx0J3Rvb2xzcmVkaXJlY3QtY3JlYXRlbG9hZGluZyc6ICfoq4vnqI3lgJnvvIzmraPlnKjoh6rli5XlibXlu7rph43mlrDlsI7lkJHigKbigKYnLFxuXHRcdFx0J3Rvb2xzcmVkaXJlY3QtY3JlYXRldGV4dCc6ICcjUkVESVJFQ1QgW1skMV1dJyxcblx0XHRcdCd0b29sc3JlZGlyZWN0LWNyZWF0ZXN1bW1hcnknOiAn57eo6Lyv5bel5YW377ya6Ieq5YuV5Ym15bu66YeN5paw5bCO5ZCR5YiwW1skMV1dJyxcblx0XHRcdCd0b29sc3JlZGlyZWN0LWVycmN5Y2xlcmVkaXJlY3QnOiAn54Sh5rOV6Ieq5YuV5L+u5b6p77ya55m854++5b6q55Kw6YeN5paw5bCO5ZCRJyxcblx0XHRcdCd0b29sc3JlZGlyZWN0LXJlZnJlc2gnOiAn5Yi35pawJyxcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHRtdy5tZXNzYWdlcy5zZXQoe1xuXHRcdFx0J3Rvb2xzcmVkaXJlY3QtYnRudGl0bGUnOiAn6YeN5a6a5ZCRJyxcblx0XHRcdCd0b29sc3JlZGlyZWN0LWJ0bmRlc2MnOiAn5Yib5bu65ZKM566h55CG5q2k6aG16Z2i55qE6YeN5a6a5ZCRJyxcblx0XHRcdCd0b29sc3JlZGlyZWN0LWRsZ3RpdGxlJzogJ+WIm+W7uuWSjOeuoeeQhumHjeWumuWQkScsXG5cdFx0XHQndG9vbHNyZWRpcmVjdC1yZWRpbG9hZGluZyc6ICfmlbDmja7liqDovb3kuK3vvIzor7fnqI3lgJnigKbigKYnLFxuXHRcdFx0J3Rvb2xzcmVkaXJlY3QtcmVkaWVkaXQnOiAn57yW6L6RJyxcblx0XHRcdCd0b29sc3JlZGlyZWN0LXNlbGVjdGFsbCc6ICflhajpgIknLFxuXHRcdFx0J3Rvb2xzcmVkaXJlY3Qtc2VsZWN0aW52ZXJzZSc6ICflj43pgIknLFxuXHRcdFx0J3Rvb2xzcmVkaXJlY3QtdGFidmlld3RpdGxlJzogJ+afpeeciycsXG5cdFx0XHQndG9vbHNyZWRpcmVjdC10YWJ2aWV3ZGVzYyc6ICfku6XkuIvmmK/mjIflkJHmraTpobXpnaLnmoTph43lrprlkJHpobXvvJonLFxuXHRcdFx0J3Rvb2xzcmVkaXJlY3QtdGFidmlld25vdGZvdW5kJzogJ+ayoeacieaJvuWIsOS7u+S9leaMh+WQkeatpOmhtemdoueahOmHjeWumuWQkemhteOAgicsXG5cdFx0XHQndG9vbHNyZWRpcmVjdC10YWJ2aWV3bXVsdGknOiAn5aSa6YeNJyxcblx0XHRcdCd0b29sc3JlZGlyZWN0LXRhYnZpZXdmaXgnOiAn5L+u5aSNJyxcblx0XHRcdCd0b29sc3JlZGlyZWN0LWZpeGxvYWRpbmcnOiAn6K+356iN5YCZ77yM5q2j5Zyo6Ieq5Yqo5L+u5aSN6YeN5a6a5ZCR4oCm4oCmJyxcblx0XHRcdCd0b29sc3JlZGlyZWN0LWZpeHRleHQnOiAnI1JFRElSRUNUIFtbJDFdXScsXG5cdFx0XHQndG9vbHNyZWRpcmVjdC1maXhzdW1tYXJ5JzogJ+e8lui+keW3peWFt++8muS/ruWkjeWkmumHjemHjeWumuWQkScsXG5cdFx0XHQndG9vbHNyZWRpcmVjdC10YWJjcmVhdGV0aXRsZSc6ICfliJvlu7onLFxuXHRcdFx0J3Rvb2xzcmVkaXJlY3QtdGFiY3JlYXRlZGVzYyc6ICfku6XkuIvmmK/lsJrmnKrliJvlu7rnmoTph43lrprlkJHpobXvvJonLFxuXHRcdFx0J3Rvb2xzcmVkaXJlY3QtdGFiY3JlYXRlbm90Zm91bmQnOiAn5rKh5pyJ5om+5Yiw5Y+v5Lul5Yib5bu655qE6YeN5a6a5ZCR6aG144CCJyxcblx0XHRcdCd0b29sc3JlZGlyZWN0LXRhYmNyZWF0ZWFsbCc6ICflhajpg6jliJvlu7onLFxuXHRcdFx0J3Rvb2xzcmVkaXJlY3QtY3JlYXRlbG9hZGluZyc6ICfor7fnqI3lgJnvvIzmraPlnKjoh6rliqjliJvlu7rph43lrprlkJHigKbigKYnLFxuXHRcdFx0J3Rvb2xzcmVkaXJlY3QtY3JlYXRldGV4dCc6ICcjUkVESVJFQ1QgW1skMV1dJyxcblx0XHRcdCd0b29sc3JlZGlyZWN0LWNyZWF0ZXN1bW1hcnknOiAn57yW6L6R5bel5YW377ya6Ieq5Yqo5Yib5bu66YeN5a6a5ZCR5YiwW1skMV1dJyxcblx0XHRcdCd0b29sc3JlZGlyZWN0LWVycmN5Y2xlcmVkaXJlY3QnOiAn5peg5rOV6Ieq5Yqo5L+u5aSN77ya5Y+R546w5b6q546v6YeN5a6a5ZCRJyxcblx0XHRcdCd0b29sc3JlZGlyZWN0LXJlZnJlc2gnOiAn5Yi35pawJyxcblx0XHR9KTtcblx0fVxufTtcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuZXhwb3J0IGNvbnN0IHRvb2xzUmVkaXJlY3RfYmlvX2xhdGluX25hbWVzID0gKCkgPT4ge1xuXHRjb25zdCBwcmVmaXhSZWdleCA9IC9b5a2m5a24XeWQjVxccypbOu+8ml0/XFxzKiQvO1xuXHRjb25zdCBjb2xvblJlZ2V4ID0gL15cXHMqWzrvvJpdP1xccyokLztcblx0d2luZG93LnRvb2xzUmVkaXJlY3QuZmluZFJlZGlyZWN0Q2FsbGJhY2soKF9wYWdlbmFtZSwgJGNvbnRlbnQpID0+IHtcblx0XHRjb25zdCB0aXRsZXM6IHN0cmluZ1tdID0gW107XG5cdFx0JGNvbnRlbnQuZmluZCgnPiBwID4gW2xhbmc9XCJsYVwiXSwgPiBwID4gaScpLmVhY2goKF9pbmRleCwgZWxlbWVudCkgPT4ge1xuXHRcdFx0bGV0IHRpdGxlO1xuXHRcdFx0bGV0IHByZXZpb3VzTm9kZSA9IGVsZW1lbnQucHJldmlvdXNTaWJsaW5nO1xuXHRcdFx0aWYgKHByZXZpb3VzTm9kZSAmJiBjb2xvblJlZ2V4LnRlc3QocHJldmlvdXNOb2RlLnRleHRDb250ZW50KSkge1xuXHRcdFx0XHRwcmV2aW91c05vZGUgPSBwcmV2aW91c05vZGUucHJldmlvdXNTaWJsaW5nO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHByZXZpb3VzTm9kZSAmJiBwcmVmaXhSZWdleC50ZXN0KHByZXZpb3VzTm9kZS50ZXh0Q29udGVudCkpIHtcblx0XHRcdFx0dGl0bGUgPSAkKGVsZW1lbnQpLnRleHQoKS50cmltKCk7XG5cdFx0XHRcdHRpdGxlcy5wdXNoKHRpdGxlKTtcblx0XHRcdFx0d2luZG93LnRvb2xzUmVkaXJlY3Quc2V0UmVkaXJlY3RUZXh0U3VmZml4KHRpdGxlLCAnXFxue3vlrablkI3ph43lrprlkJF9fScpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHJldHVybiBbLi4ubmV3IFNldCh0aXRsZXMpXTtcblx0fSk7XG59O1xuIiwgIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG5leHBvcnQgY29uc3QgdG9vbHNSZWRpcmVjdF9jb3VydGVzeV9hbmRfYXJ0X25hbWVzID0gKCk6IHZvaWQgPT4ge1xuXHRjb25zdCBwcmVmaXhSZWdleCA9IC9b5Y+35a2X6JmfXVxccyokLztcblx0Y29uc3QgY29tcFN1cm5hbWVzID0gW1xuXHRcdCfmrKfpmLMnLFxuXHRcdCfmrZDpmb0nLFxuXHRcdCfku6Tni5AnLFxuXHRcdCfnmofnlKsnLFxuXHRcdCfkuIrlrpgnLFxuXHRcdCflj7jlvpInLFxuXHRcdCfor7jokZsnLFxuXHRcdCfoq7jokZsnLFxuXHRcdCflj7jpqawnLFxuXHRcdCflj7jppqwnLFxuXHRcdCflrofmlocnLFxuXHRcdCflkbzlu7YnLFxuXHRcdCfnq6/mnKgnLFxuXHRcdCfnlLPlsaAnLFxuXHRcdCflsInov58nLFxuXHRcdCflsInpgbInLFxuXHRcdCfovanovpUnLFxuXHRcdCfou5LovYUnLFxuXHRcdCflpI/kvq8nLFxuXHRcdCfljZflrqsnLFxuXHRcdCfljZflrq4nLFxuXHRcdCflj7jnqbonLFxuXHRcdCfpspzkuo4nLFxuXHRcdCfprq7kuo4nLFxuXHRcdCfopb/pl6gnLFxuXHRcdCfopb/ploAnLFxuXHRcdCfni6zlraQnLFxuXHRcdCfnjajlraQnLFxuXHRcdCfkuJzmlrknLFxuXHRcdCfmnbHmlrknLFxuXHRcdCflj7jlr4cnLFxuXHRcdCfnvoroiIwnLFxuXHRcdCfnrKzkupQnLFxuXHRcdCfmooHkuJgnLFxuXHRcdCfplLrnprsnLFxuXHRcdCfpjb7pm6InLFxuXHRcdCfkuJzpg60nLFxuXHRcdCfmnbHpg60nLFxuXHRcdCflhazlrZknLFxuXHRcdCflhazlrasnLFxuXHRcdCflrZ/lrZknLFxuXHRcdCflrZ/lrasnLFxuXHRcdCfku7LlrZknLFxuXHRcdCfku7LlrasnLFxuXHRcdCflj5TlrZknLFxuXHRcdCflj5TlrasnLFxuXHRcdCflraPlrZknLFxuXHRcdCflraPlrasnLFxuXHRcdCfplb/lrZknLFxuXHRcdCfplbflrasnLFxuXHRcdCfmhZXlrrknLFxuXHRcdCfpl77kuJgnLFxuXHRcdCfplq3kuJgnLFxuXHRcdCfkuJzpl6gnLFxuXHRcdCfmnbHploAnLFxuXHRcdCflhaznvoonLFxuXHRcdCfkuIfkv58nLFxuXHRcdCfnmb7ph4wnLFxuXHRcdCflhazlhrYnLFxuXHRcdCflkbzlu7YnLFxuXHRcdCfmta7lsaAnLFxuXHRcdCfljbPloqgnLFxuXHRcdCfljZXkuo4nLFxuXHRcdCfllq7kuo4nLFxuXHRcdCfnlLDkuJgnLFxuXHRdO1xuXHRjb25zdCBjb21wU3VybmFtZVJlZ2V4ID0gbmV3IFJlZ0V4cChgXigke2NvbXBTdXJuYW1lcy5qb2luKCd8Jyl9KS5gKTtcblx0Y29uc3QgZmluZFN1cm5hbWUgPSAocGFnZW5hbWU6IHN0cmluZykgPT4ge1xuXHRcdGlmIChjb21wU3VybmFtZVJlZ2V4LnRlc3QocGFnZW5hbWUpKSB7XG5cdFx0XHRyZXR1cm4gY29tcFN1cm5hbWVSZWdleC5leGVjKHBhZ2VuYW1lKVsxXTtcblx0XHR9XG5cdFx0cmV0dXJuIHBhZ2VuYW1lWzBdO1xuXHR9O1xuXHR3aW5kb3cudG9vbHNSZWRpcmVjdC5maW5kUmVkaXJlY3RDYWxsYmFjaygocGFnZW5hbWUsICRjb250ZW50KSA9PiB7XG5cdFx0bGV0IHN1cm5hbWU7XG5cdFx0Y29uc3QgdGl0bGVzOiBzdHJpbmdbXSA9IFtdO1xuXHRcdCRjb250ZW50LmZpbmQoJz4gcCA+IGInKS5lYWNoKChfaW5kZXgsIGVsZW1lbnQpID0+IHtcblx0XHRcdGNvbnN0IHByZXZpb3VzTm9kZSA9IGVsZW1lbnQucHJldmlvdXNTaWJsaW5nO1xuXHRcdFx0aWYgKHByZXZpb3VzTm9kZSAmJiBwcmVmaXhSZWdleC50ZXN0KHByZXZpb3VzTm9kZS50ZXh0Q29udGVudCkpIHtcblx0XHRcdFx0Y29uc3QgbmFtZSA9ICQoZWxlbWVudCkudGV4dCgpLnRyaW0oKTtcblx0XHRcdFx0aWYgKCFzdXJuYW1lKSB7XG5cdFx0XHRcdFx0c3VybmFtZSA9IGZpbmRTdXJuYW1lKHBhZ2VuYW1lKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aXRsZXMucHVzaChzdXJuYW1lICsgbmFtZSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0cmV0dXJuIFsuLi5uZXcgU2V0KHRpdGxlcyldO1xuXHR9KTtcbn07XG4iLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmV4cG9ydCBjb25zdCB0b29sc1JlZGlyZWN0X29wdF9ib2xkcyA9ICgpID0+IHtcblx0d2luZG93LnRvb2xzUmVkaXJlY3QuZmluZFJlZGlyZWN0QnlTZWxlY3RvcignZGl2I213LWNvbnRlbnQtdGV4dCBwID4gYicpO1xufTtcbiIsICJpbXBvcnQge1Rvb2xzUmVkaXJlY3R9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcbmltcG9ydCB7dG9vbHNSZWRpcmVjdE1lc3NhZ2VzfSBmcm9tICcuL21vZHVsZXMvbWVzc2FnZXMnO1xuXG5pbXBvcnQge3Rvb2xzUmVkaXJlY3RfYmlvX2xhdGluX25hbWVzfSBmcm9tICcuL21vZHVsZXMvYmlvLWxhdGluLW5hbWVzJztcbmltcG9ydCB7dG9vbHNSZWRpcmVjdF9jb3VydGVzeV9hbmRfYXJ0X25hbWVzfSBmcm9tICcuL21vZHVsZXMvY291cnRlc3ktYW5kLWFydC1uYW1lcyc7XG5pbXBvcnQge3Rvb2xzUmVkaXJlY3Rfb3B0X2JvbGRzfSBmcm9tICcuL21vZHVsZXMvb3B0LWJvbGRzJztcblxudG9vbHNSZWRpcmVjdE1lc3NhZ2VzKCk7XG5Ub29sc1JlZGlyZWN0LmluaXQoKTtcblxuaWYgKG13LnVzZXIub3B0aW9ucy5nZXQoJ2dhZGdldC1Ub29sc1JlZGlyZWN0LWJpby1sYXRpbi1uYW1lcycpKSB7XG5cdCQodG9vbHNSZWRpcmVjdF9iaW9fbGF0aW5fbmFtZXMpO1xufVxuXG5pZiAobXcudXNlci5vcHRpb25zLmdldCgnZ2FkZ2V0LVRvb2xzUmVkaXJlY3QtY291cnRlc3ktYW5kLWFydC1uYW1lcycpKSB7XG5cdCQodG9vbHNSZWRpcmVjdF9jb3VydGVzeV9hbmRfYXJ0X25hbWVzKTtcbn1cblxuaWYgKG13LnVzZXIub3B0aW9ucy5nZXQoJ2dhZGdldC1Ub29sc1JlZGlyZWN0LW9wdC1ib2xkcycpKSB7XG5cdCQodG9vbHNSZWRpcmVjdF9vcHRfYm9sZHMpO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQSx3RkFBQUEsU0FBQTtBQUFBO0FBQ0EsUUFBSSxRQUFRLFNBQVUsSUFBSTtBQUN4QixhQUFPLE1BQU0sR0FBRyxTQUFTLFFBQVE7QUFBQSxJQUNuQztBQUdBLElBQUFBLFFBQU87QUFBQSxJQUVMLE1BQU0sT0FBTyxjQUFjLFlBQVksVUFBVSxLQUNqRCxNQUFNLE9BQU8sVUFBVSxZQUFZLE1BQU07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akUsR0FBR29TLEtBQUtDLFFBQVFuUyxJQUFJLHNDQUFzQyxHQUFHO0FBQ2hFOEMsSUFBRXNPLDZCQUE2QjtBQUNoQztBQUVBLElBQUl0UixHQUFHb1MsS0FBS0MsUUFBUW5TLElBQUksNkNBQTZDLEdBQUc7QUFDdkU4QyxJQUFFNk8sb0NBQW9DO0FBQ3ZDO0FBRUEsSUFBSTdSLEdBQUdvUyxLQUFLQyxRQUFRblMsSUFBSSxnQ0FBZ0MsR0FBRztBQUMxRDhDLElBQUVtUCx1QkFBdUI7QUFDMUI7IiwKICAibmFtZXMiOiBbIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAibW9kdWxlIiwgImdsb2JhbCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbCIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIlN5bWJvbCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAiZG9jdW1lbnQiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAiVHlwZUVycm9yIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIiQiLCAiV0dfTkFNRVNQQUNFX0lEUyIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIldHX05BTUVTUEFDRV9OVU1CRVIiLCAiV0dfUEFHRV9OQU1FIiwgIldHX1VTRVJfTEFOR1VBR0UiLCAiSVNfQ0FURUdPUlkiLCAiU1VGRklYX0FQUEVORCIsICJTVUZGSVhfUkVQTEFDRSIsICJTVUZGSVhfU0VUREVGQVVMVCIsICJFRElUX1RBRyIsICJWQVJJQU5UUyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJhcmdzIiwgImNvbmNhdCIsICJsZW5ndGgiLCAibWVzc2FnZSIsICJwYXJzZSIsICJwbGFpbiIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImFwaSIsICJpbml0TXdBcGkiLCAiZmluZFJlZGlyZWN0Q2FsbGJhY2tzIiwgInBhZ2VXaXRoUmVkaXJlY3RUZXh0U3VmZml4IiwgInJlZGlyZWN0RXhjbHVkZXMiLCAibnNQcmVmaXhlcyIsICJuc0Nhbm9uUHJlZml4IiwgIm5zUHJlZml4UGF0dGVybiIsICJfaSIsICJfT2JqZWN0JGVudHJpZXMiLCAiT2JqZWN0IiwgImVudHJpZXMiLCAidGV4dCIsICJuc2lkIiwgInB1c2giLCAic3BsaXQiLCAiUmVnRXhwIiwgImpvaW4iLCAiZml4TmFtZXNwYWNlIiwgInRpdGxlIiwgInRlc3QiLCAicmVwbGFjZSIsICJmaW5kUmVkaXJlY3RDYWxsYmFjayIsICJjYWxsYmFjayIsICJmaW5kUmVkaXJlY3RCeVNlbGVjdG9yIiwgInNlbGVjdG9yIiwgIiQiLCAibWFwIiwgIl9pbmRleCIsICJlbGVtZW50IiwgImVxIiwgInRyaW0iLCAic2V0UmVkaXJlY3RUZXh0U3VmZml4IiwgInN1ZmZpeCIsICJmbGFnIiwgImZsYWdfc2V0IiwgImZsYWdfYXBwZW5kIiwgIndpbmRvdyIsICJ0b29sc1JlZGlyZWN0IiwgIlRvb2xzUmVkaXJlY3QiLCAidGFic2VsZW0iLCAidGFnc2VsZW0iLCAidmFyaWFudHMiLCAiaW5pdCIsICJzZWxmIiwgIiRib2R5IiwgImJ1dHRvbiIsICJhZGRDbGFzcyIsICJhdHRyIiwgImNzcyIsICJhcHBlbmQiLCAib24iLCAiZXZlbnQiLCAicHJldmVudERlZmF1bHQiLCAiZGlhbG9nIiwgImZpbmQiLCAiYWZ0ZXIiLCAiYmdpZnJhbWUiLCAicmVzaXphYmxlIiwgIm1vZGFsIiwgIndpZHRoIiwgIk1hdGgiLCAicm91bmQiLCAicG9zaXRpb24iLCAiaGVpZ2h0IiwgImFwcGVuZFRvIiwgImFkZFRhYnMiLCAidGFicyIsICJrbmFtZSIsICJoYXNPd24iLCAiY2hhckF0IiwgInRvVXBwZXJDYXNlIiwgInNsaWNlIiwgInRhYiIsICJ0YWciLCAiY29udCIsICJsb2FkVmlldyIsICJjcmVhdGVUYWIiLCAidGFibmFtZSIsICJ0YWJ0aXRsZSIsICJvbkNsaWNrIiwgImNhbGwiLCAibG9hZGVkIiwgIl9pbml0VGFiVmlldyIsICJfaW5pdFRhYkNyZWF0ZSIsICJsb2FkQ3JlYXRlIiwgInZpZXciLCAiY3JlYXRlIiwgImZpeCIsICJwYWdlbmFtZXMiLCAicmVtb3ZlIiwgImxvYWRpbmciLCAiYnVsa0VkaXRCeVJlZ2V4IiwgInRoZW4iLCAic2V0VGltZW91dCIsICJidWxrRWRpdCIsICJhZGRSZWRpcmVjdFRleHRTdWZmaXgiLCAidGl0bGVzIiwgInN1bW1hcnkiLCAiZmlsdGVyIiwgInYiLCAiaSIsICJhcnIiLCAiaW5kZXhPZiIsICJwb3N0IiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgInF1ZXJ5IiwgImRlZmVycmVkcyIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAicGFnZXMiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAidmFsdWUiLCAicG9zdFdpdGhUb2tlbiIsICJ0YWdzIiwgImVyciIsICJlIiwgImYiLCAid2hlbiIsICJyZWdleCIsICJydnByb3AiLCAicnZzbG90cyIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJwYWdlIiwgImNvbnRlbnQiLCAicmV2aXNpb25zIiwgInNsb3RzIiwgIm5ld0NvbnRlbnQiLCAiYmFzZXRpbWVzdGFtcCIsICJ0aW1lc3RhbXAiLCAibG9hZFRhYkNvbnQiLCAicmVsb2FkIiwgImh0bWwiLCAiJGRlc2MiLCAiJHRleHQiLCAiYXBwbHkiLCAiZmFpbCIsICJhbHdheXMiLCAiYWRkTWV0aG9kcyIsICJocmVmIiwgImNsaWNrIiwgImNvbnRhaW5lciIsICJ0b0xvd2VyQ2FzZSIsICJyZW1vdmVDbGFzcyIsICJzZWxlY3RBbGwiLCAic2VsZWN0SW52ZXJzZSIsICJlYWNoIiwgIiRlbGVtZW50IiwgInNlbGVjdEFjdGlvbiIsICJjYiIsICJwYWdlbmFtZSIsICJkYXRhIiwgImNsaWNrQWN0aW9uIiwgImJ1aWxkTGluayIsICJjbGFzc25hbWUiLCAiYSIsICJ0YXJnZXQiLCAicmVsIiwgIiRwYXJlbnQiLCAibWV0aG9kcyIsICIkY29udGFpbmVyIiwgIm1ldGhvZEV4aXN0IiwgIkpTT04iLCAic3RyaW5naWZ5IiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgIm1ldGhvZCIsICJidWlsZFNlbGVjdGlvbiIsICJtYWluIiwgIm1ldGQiLCAibXQiLCAiZHNhYiIsICJzZWxlIiwgImxvYWRSZWRpcmVjdCIsICJmaW5kUmVkaXJlY3QiLCAiZGVlcCIsICJkZWZlcnJlZCIsICJEZWZlcnJlZCIsICJ0b3AiLCAib25DbGlja0ZpeCIsICJlbnRyeSIsICJwYXJlbnRzIiwgImZpcnN0IiwgInJkbGltaXQiLCAiaGFzX3JlZGlyZWN0IiwgImRlc2MiLCAibWF4aW11bVJlZGlyZWN0RGVwdGgiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAicmVkaXJlY3RzIiwgIl9pdGVyYXRvcjUiLCAiX3N0ZXA1IiwgInJkdGl0bGUiLCAidWx0aXRsZSIsICJ1dGlsIiwgImdldFVybCIsICJpc0N5Y2xlUmVkaXJlY3QiLCAicmVkaXJlY3QiLCAicmVzb2x2ZVdpdGgiLCAicmVqZWN0V2l0aCIsICJwcm9taXNlIiwgImZpbmRWYXJpYW50cyIsICJzdWZmaXhSZWciLCAicmV0VGl0bGVzIiwgIl9pMiIsICJfVkFSSUFOVFMiLCAidmFyaWFudCIsICJ4aHIiLCAidXNlbGFuZyIsICJkaXNwbGF5dGl0bGUiLCAib3JpZ1RpdGxlIiwgImNvbnRlbnRtb2RlbCIsICJ0bXBUaXRsZSIsICJzdWZmaXhlcyIsICJfaTMiLCAiX2FyZ3MiLCAic3VmZml4QXJyIiwgImV4ZWMiLCAiX2l0ZXJhdG9yNiIsICJTZXQiLCAiX3N0ZXA2IiwgIm1vZGlmaWVkVGl0bGUiLCAiZmluZE5vdEV4aXN0cyIsICJleGNsdWRlcyIsICJhbGx0aXRsZXMiLCAiX2k0IiwgIl9WQVJJQU5UUzIiLCAiX2k1IiwgIl9hcmdzMiIsICJfaXRlcmF0b3I3IiwgIl9zdGVwNyIsICJtaXNzaW5nIiwgImhhcyIsICJmcmNEZWZlcnJlZHMiLCAiJGNvbnRlbnQiLCAiX2k2IiwgIl9maW5kUmVkaXJlY3RDYWxsYmFjayIsICJyZXQiLCAib25DbGlja0NyZWF0ZSIsICJfaTciLCAiX2FyZ3MzIiwgImZ2dGl0bGVzIiwgIl9pdGVyYXRvcjgiLCAiX3N0ZXA4IiwgInJlZGxpbmsiLCAidG9vbHNSZWRpcmVjdE1lc3NhZ2VzIiwgImluY2x1ZGVzIiwgIm1lc3NhZ2VzIiwgInNldCIsICJ0b29sc1JlZGlyZWN0X2Jpb19sYXRpbl9uYW1lcyIsICJwcmVmaXhSZWdleCIsICJjb2xvblJlZ2V4IiwgIl9wYWdlbmFtZSIsICJwcmV2aW91c05vZGUiLCAicHJldmlvdXNTaWJsaW5nIiwgInRleHRDb250ZW50IiwgInRvb2xzUmVkaXJlY3RfY291cnRlc3lfYW5kX2FydF9uYW1lcyIsICJjb21wU3VybmFtZXMiLCAiY29tcFN1cm5hbWVSZWdleCIsICJmaW5kU3VybmFtZSIsICJzdXJuYW1lIiwgIm5hbWUiLCAidG9vbHNSZWRpcmVjdF9vcHRfYm9sZHMiLCAidXNlciIsICJvcHRpb25zIl0KfQo=

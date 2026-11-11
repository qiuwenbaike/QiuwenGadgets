/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://en.wikipedia.org/wiki/MediaWiki:Gadget-popups.js}
 * @base {@link https://zh.wikipedia.org/w/index.php?title=User:Lupin/strings-draft&oldid=579996170}
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-navpop.css}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Navigation_popups}
 * @license CC-BY-SA-4.0 {@link https://www.qiuwenbaike.cn/wiki/H:CC-BY-SA-4.0}
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
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};

// node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/fails.js
var require_fails = __commonJS({
  "node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/fails.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/descriptors.js
var require_descriptors = __commonJS({
  "node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/descriptors.js"(exports, module2) {
    "use strict";
    var fails = require_fails();
    module2.exports = !fails(function() {
      return Object.defineProperty({}, 1, { get: function() {
        return 7;
      } })[1] !== 7;
    });
  }
});

// node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/function-bind-native.js
var require_function_bind_native = __commonJS({
  "node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/function-bind-native.js"(exports, module2) {
    "use strict";
    var fails = require_fails();
    module2.exports = !fails(function() {
      var test = function() {
      }.bind();
      return typeof test != "function" || test.hasOwnProperty("prototype");
    });
  }
});

// node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/function-uncurry-this.js
var require_function_uncurry_this = __commonJS({
  "node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/function-uncurry-this.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/is-callable.js
var require_is_callable = __commonJS({
  "node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/is-callable.js"(exports, module2) {
    "use strict";
    var documentAll = typeof document == "object" && document.all;
    module2.exports = typeof documentAll == "undefined" && documentAll !== void 0 ? function(argument) {
      return typeof argument == "function" || argument === documentAll;
    } : function(argument) {
      return typeof argument == "function";
    };
  }
});

// node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/is-null-or-undefined.js
var require_is_null_or_undefined = __commonJS({
  "node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/is-null-or-undefined.js"(exports, module2) {
    "use strict";
    module2.exports = function(it) {
      return it === null || it === void 0;
    };
  }
});

// node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/require-object-coercible.js
var require_require_object_coercible = __commonJS({
  "node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/require-object-coercible.js"(exports, module2) {
    "use strict";
    var isNullOrUndefined = require_is_null_or_undefined();
    var $TypeError = TypeError;
    module2.exports = function(it) {
      if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
      return it;
    };
  }
});

// node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/to-object.js
var require_to_object = __commonJS({
  "node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/to-object.js"(exports, module2) {
    "use strict";
    var requireObjectCoercible = require_require_object_coercible();
    var $Object = Object;
    module2.exports = function(argument) {
      return $Object(requireObjectCoercible(argument));
    };
  }
});

// node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/has-own-property.js
var require_has_own_property = __commonJS({
  "node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/has-own-property.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var toObject = require_to_object();
    var hasOwnProperty = uncurryThis({}.hasOwnProperty);
    module2.exports = Object.hasOwn || function hasOwn(it, key) {
      return hasOwnProperty(toObject(it), key);
    };
  }
});

// node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/function-name.js
var require_function_name = __commonJS({
  "node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/function-name.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/is-pure.js
var require_is_pure = __commonJS({
  "node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/is-pure.js"(exports, module2) {
    "use strict";
    module2.exports = false;
  }
});

// node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/global-this.js
var require_global_this = __commonJS({
  "node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/global-this.js"(exports, module2) {
    "use strict";
    var check = function(it) {
      return it && it.Math === Math && it;
    };
    module2.exports = // eslint-disable-next-line es/no-global-this -- safe
    check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
    check(typeof self == "object" && self) || check(typeof global == "object" && global) || check(typeof exports == "object" && exports) || // eslint-disable-next-line no-new-func -- fallback
    /* @__PURE__ */ (function() {
      return this;
    })() || Function("return this")();
  }
});

// node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/define-global-property.js
var require_define_global_property = __commonJS({
  "node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/define-global-property.js"(exports, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var defineProperty = Object.defineProperty;
    module2.exports = function(key, value) {
      try {
        defineProperty(globalThis2, key, { value, configurable: true, writable: true });
      } catch (error) {
        globalThis2[key] = value;
      }
      return value;
    };
  }
});

// node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/shared-store.js
var require_shared_store = __commonJS({
  "node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/shared-store.js"(exports, module2) {
    "use strict";
    var IS_PURE = require_is_pure();
    var globalThis2 = require_global_this();
    var defineGlobalProperty = require_define_global_property();
    var SHARED = "__core-js_shared__";
    var store = module2.exports = globalThis2[SHARED] || defineGlobalProperty(SHARED, {});
    (store.versions || (store.versions = [])).push({
      version: "3.51.0",
      mode: IS_PURE ? "pure" : "global",
      copyright: "© 2013–2025 Denis Pushkarev (zloirock.ru), 2025–2026 CoreJS Company (core-js.io). All rights reserved.",
      license: "https://github.com/zloirock/core-js/blob/v3.51.0/LICENSE",
      source: "https://github.com/zloirock/core-js"
    });
  }
});

// node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/inspect-source.js
var require_inspect_source = __commonJS({
  "node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/inspect-source.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/weak-map-basic-detection.js
var require_weak_map_basic_detection = __commonJS({
  "node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/weak-map-basic-detection.js"(exports, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var isCallable = require_is_callable();
    var WeakMap = globalThis2.WeakMap;
    module2.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));
  }
});

// node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/is-object.js
var require_is_object = __commonJS({
  "node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/is-object.js"(exports, module2) {
    "use strict";
    var isCallable = require_is_callable();
    module2.exports = function(it) {
      return typeof it == "object" ? it !== null : isCallable(it);
    };
  }
});

// node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/document-create-element.js
var require_document_create_element = __commonJS({
  "node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/document-create-element.js"(exports, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var isObject = require_is_object();
    var document2 = globalThis2.document;
    var EXISTS = isObject(document2) && isObject(document2.createElement);
    module2.exports = function(it) {
      return EXISTS ? document2.createElement(it) : {};
    };
  }
});

// node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/ie8-dom-define.js
var require_ie8_dom_define = __commonJS({
  "node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/ie8-dom-define.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/v8-prototype-define-bug.js
var require_v8_prototype_define_bug = __commonJS({
  "node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/v8-prototype-define-bug.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/an-object.js
var require_an_object = __commonJS({
  "node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/an-object.js"(exports, module2) {
    "use strict";
    var isObject = require_is_object();
    var $String = String;
    var $TypeError = TypeError;
    module2.exports = function(argument) {
      if (isObject(argument)) return argument;
      throw new $TypeError($String(argument) + " is not an object");
    };
  }
});

// node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/function-call.js
var require_function_call = __commonJS({
  "node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/function-call.js"(exports, module2) {
    "use strict";
    var NATIVE_BIND = require_function_bind_native();
    var call = Function.prototype.call;
    module2.exports = NATIVE_BIND ? call.bind(call) : function() {
      return call.apply(call, arguments);
    };
  }
});

// node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/get-built-in.js
var require_get_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/get-built-in.js"(exports, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var isCallable = require_is_callable();
    var aFunction = function(argument) {
      return isCallable(argument) ? argument : void 0;
    };
    module2.exports = function(namespace, method) {
      return arguments.length < 2 ? aFunction(globalThis2[namespace]) : globalThis2[namespace] && globalThis2[namespace][method];
    };
  }
});

// node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/object-is-prototype-of.js
var require_object_is_prototype_of = __commonJS({
  "node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/object-is-prototype-of.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    module2.exports = uncurryThis({}.isPrototypeOf);
  }
});

// node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/environment-user-agent.js
var require_environment_user_agent = __commonJS({
  "node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/environment-user-agent.js"(exports, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var navigator2 = globalThis2.navigator;
    var userAgent = navigator2 && navigator2.userAgent;
    module2.exports = userAgent ? String(userAgent) : "";
  }
});

// node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/environment-v8-version.js
var require_environment_v8_version = __commonJS({
  "node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/environment-v8-version.js"(exports, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var userAgent = require_environment_user_agent();
    var process = globalThis2.process;
    var Deno = globalThis2.Deno;
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
        if (match) version = +match[1];
      }
    }
    module2.exports = version;
  }
});

// node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/symbol-constructor-detection.js
var require_symbol_constructor_detection = __commonJS({
  "node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/symbol-constructor-detection.js"(exports, module2) {
    "use strict";
    var V8_VERSION = require_environment_v8_version();
    var fails = require_fails();
    var globalThis2 = require_global_this();
    var $String = globalThis2.String;
    module2.exports = !!Object.getOwnPropertySymbols && !fails(function() {
      var symbol = /* @__PURE__ */ Symbol("symbol detection");
      return !$String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
      !Symbol.sham && V8_VERSION && V8_VERSION < 41;
    });
  }
});

// node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/use-symbol-as-uid.js
var require_use_symbol_as_uid = __commonJS({
  "node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/use-symbol-as-uid.js"(exports, module2) {
    "use strict";
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    module2.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
  }
});

// node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/is-symbol.js
var require_is_symbol = __commonJS({
  "node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/is-symbol.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/try-to-string.js
var require_try_to_string = __commonJS({
  "node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/try-to-string.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/a-callable.js
var require_a_callable = __commonJS({
  "node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/a-callable.js"(exports, module2) {
    "use strict";
    var isCallable = require_is_callable();
    var tryToString = require_try_to_string();
    var $TypeError = TypeError;
    module2.exports = function(argument) {
      if (isCallable(argument)) return argument;
      throw new $TypeError(tryToString(argument) + " is not a function");
    };
  }
});

// node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/get-method.js
var require_get_method = __commonJS({
  "node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/get-method.js"(exports, module2) {
    "use strict";
    var aCallable = require_a_callable();
    var isNullOrUndefined = require_is_null_or_undefined();
    module2.exports = function(V, P) {
      var func = V[P];
      return isNullOrUndefined(func) ? void 0 : aCallable(func);
    };
  }
});

// node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/ordinary-to-primitive.js
var require_ordinary_to_primitive = __commonJS({
  "node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/ordinary-to-primitive.js"(exports, module2) {
    "use strict";
    var call = require_function_call();
    var isCallable = require_is_callable();
    var isObject = require_is_object();
    var $TypeError = TypeError;
    module2.exports = function(input, pref) {
      var fn, val;
      if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
      if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
      if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
      throw new $TypeError("Can't convert object to primitive value");
    };
  }
});

// node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/shared.js
var require_shared = __commonJS({
  "node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/shared.js"(exports, module2) {
    "use strict";
    var store = require_shared_store();
    var create = Object.create || Object;
    module2.exports = function(key, value) {
      return store[key] || (store[key] = value || create(null));
    };
  }
});

// node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/uid.js
var require_uid = __commonJS({
  "node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/uid.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var id = 0;
    var postfix = Math.random();
    var toString = uncurryThis(1.1.toString);
    module2.exports = function(key) {
      return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString(++id + postfix, 36);
    };
  }
});

// node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/well-known-symbol.js
var require_well_known_symbol = __commonJS({
  "node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/well-known-symbol.js"(exports, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var shared = require_shared();
    var hasOwn = require_has_own_property();
    var uid = require_uid();
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
    var Symbol2 = globalThis2.Symbol;
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

// node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/to-primitive.js
var require_to_primitive = __commonJS({
  "node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/to-primitive.js"(exports, module2) {
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
      if (!isObject(input) || isSymbol(input)) return input;
      var exoticToPrim = getMethod(input, TO_PRIMITIVE);
      var result;
      if (exoticToPrim) {
        if (pref === void 0) pref = "default";
        result = call(exoticToPrim, input, pref);
        if (!isObject(result) || isSymbol(result)) return result;
        throw new $TypeError("Can't convert object to primitive value");
      }
      if (pref === void 0) pref = "number";
      return ordinaryToPrimitive(input, pref);
    };
  }
});

// node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/to-property-key.js
var require_to_property_key = __commonJS({
  "node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/to-property-key.js"(exports, module2) {
    "use strict";
    var toPrimitive = require_to_primitive();
    var isSymbol = require_is_symbol();
    module2.exports = function(argument) {
      var key = toPrimitive(argument, "string");
      return isSymbol(key) ? key : key + "";
    };
  }
});

// node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/object-define-property.js
var require_object_define_property = __commonJS({
  "node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/object-define-property.js"(exports) {
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
      if (IE8_DOM_DEFINE) try {
        return $defineProperty(O, P, Attributes);
      } catch (error) {
      }
      if ("get" in Attributes || "set" in Attributes) throw new $TypeError("Accessors not supported");
      if ("value" in Attributes) O[P] = Attributes.value;
      return O;
    };
  }
});

// node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/create-property-descriptor.js
var require_create_property_descriptor = __commonJS({
  "node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/create-property-descriptor.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/create-non-enumerable-property.js
var require_create_non_enumerable_property = __commonJS({
  "node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/create-non-enumerable-property.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/shared-key.js
var require_shared_key = __commonJS({
  "node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/shared-key.js"(exports, module2) {
    "use strict";
    var shared = require_shared();
    var uid = require_uid();
    var keys = shared("keys");
    module2.exports = function(key) {
      return keys[key] || (keys[key] = uid(key));
    };
  }
});

// node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/hidden-keys.js
var require_hidden_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/hidden-keys.js"(exports, module2) {
    "use strict";
    module2.exports = {};
  }
});

// node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/internal-state.js
var require_internal_state = __commonJS({
  "node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/internal-state.js"(exports, module2) {
    "use strict";
    var NATIVE_WEAK_MAP = require_weak_map_basic_detection();
    var globalThis2 = require_global_this();
    var isObject = require_is_object();
    var createNonEnumerableProperty = require_create_non_enumerable_property();
    var hasOwn = require_has_own_property();
    var shared = require_shared_store();
    var sharedKey = require_shared_key();
    var hiddenKeys = require_hidden_keys();
    var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
    var TypeError2 = globalThis2.TypeError;
    var WeakMap = globalThis2.WeakMap;
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
        if (store.has(it)) throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
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
        if (hasOwn(it, STATE)) throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
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

// node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/make-built-in.js
var require_make_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/make-built-in.js"(exports, module2) {
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
      if (options && options.getter) name = "get " + name;
      if (options && options.setter) name = "set " + name;
      if (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
        if (DESCRIPTORS) defineProperty(value, "name", { value: name, configurable: true });
        else value.name = name;
      }
      if (CONFIGURABLE_LENGTH && options && hasOwn(options, "arity") && value.length !== options.arity) {
        defineProperty(value, "length", { value: options.arity });
      }
      try {
        if (options && hasOwn(options, "constructor") && options.constructor) {
          if (DESCRIPTORS) defineProperty(value, "prototype", { writable: false });
        } else if (value.prototype) value.prototype = void 0;
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

// node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/define-built-in-accessor.js
var require_define_built_in_accessor = __commonJS({
  "node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/define-built-in-accessor.js"(exports, module2) {
    "use strict";
    var makeBuiltIn = require_make_built_in();
    var defineProperty = require_object_define_property();
    module2.exports = function(target, name, descriptor) {
      if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
      if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
      return defineProperty.f(target, name, descriptor);
    };
  }
});

// node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/regexp-flags-detection.js
var require_regexp_flags_detection = __commonJS({
  "node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/regexp-flags-detection.js"(exports, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var fails = require_fails();
    var RegExp2 = globalThis2.RegExp;
    var FLAGS_GETTER_IS_CORRECT = !fails(function() {
      var INDICES_SUPPORT = true;
      try {
        RegExp2(".", "d");
      } catch (error) {
        INDICES_SUPPORT = false;
      }
      var O = {};
      var calls = "";
      var expected = INDICES_SUPPORT ? "dgimsy" : "gimsy";
      var addGetter = function(key2, chr) {
        Object.defineProperty(O, key2, { get: function() {
          calls += chr;
          return true;
        } });
      };
      var pairs = {
        dotAll: "s",
        global: "g",
        ignoreCase: "i",
        multiline: "m",
        sticky: "y"
      };
      if (INDICES_SUPPORT) pairs.hasIndices = "d";
      for (var key in pairs) addGetter(key, pairs[key]);
      var result = Object.getOwnPropertyDescriptor(RegExp2.prototype, "flags").get.call(O);
      return result !== expected || calls !== expected;
    });
    module2.exports = { correct: FLAGS_GETTER_IS_CORRECT };
  }
});

// node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/regexp-flags.js
var require_regexp_flags = __commonJS({
  "node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/internals/regexp-flags.js"(exports, module2) {
    "use strict";
    var anObject = require_an_object();
    module2.exports = function() {
      var that = anObject(this);
      var result = "";
      if (that.hasIndices) result += "d";
      if (that.global) result += "g";
      if (that.ignoreCase) result += "i";
      if (that.multiline) result += "m";
      if (that.dotAll) result += "s";
      if (that.unicode) result += "u";
      if (that.unicodeSets) result += "v";
      if (that.sticky) result += "y";
      return result;
    };
  }
});

// node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/modules/es.regexp.flags.js
var require_es_regexp_flags = __commonJS({
  "node_modules/.pnpm/core-js@3.51.0/node_modules/core-js/modules/es.regexp.flags.js"() {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var defineBuiltInAccessor = require_define_built_in_accessor();
    var regExpFlagsDetection = require_regexp_flags_detection();
    var regExpFlagsGetterImplementation = require_regexp_flags();
    if (DESCRIPTORS && !regExpFlagsDetection.correct) {
      defineBuiltInAccessor(RegExp.prototype, "flags", {
        configurable: true,
        get: regExpFlagsGetterImplementation
      });
      regExpFlagsDetection.correct = true;
    }
  }
});

// dist/Navigation_popups/Navigation_popups.js
//! src/Navigation_popups/modules/domdrag.ts
require_es_regexp_flags();
var Drag = class {
  obj = null;
  startCondition;
  endHook;
  constructor() {
    this.startCondition = null;
    this.endHook = null;
  }
  /**
   * Initialises the Drag instance by telling it which object you want to be draggable, and what
   * you want to drag it by.
   *
   * @param {DOMElement} o The "handle" by which <code>oRoot</code> is dragged.
   * @param {DOMElement} oRoot The object which moves when <code>o</code> is dragged, or <code>o</code> if omitted.
   */
  init(o, oRoot) {
    const self2 = this;
    this.obj = o;
    o.onmousedown = (e) => {
      self2.start(e);
    };
    o.dragging = false;
    o.popups_draggable = true;
    o.hmode = true;
    o.vmode = true;
    o.root = oRoot || o;
    if (Number.isNaN(Number.parseInt(o.root.style.left, 10))) {
      o.root.style.left = "0px";
    }
    if (Number.isNaN(Number.parseInt(o.root.style.top, 10))) {
      o.root.style.top = "0px";
    }
    o.root.onthisStart = () => {
    };
    o.root.onthisEnd = () => {
    };
    o.root.onthis = () => {
    };
  }
  /**
   * Starts the drag.
   *
   * @private
   * @param {Event} e
   */
  start(e) {
    const o = this.obj;
    if (this.startCondition && !this.startCondition(e)) {
      return void 0;
    }
    const root = o.root;
    const y = Number.parseInt(o.vmode ? root.style.top : root.style.bottom, 10);
    const x = Number.parseInt(o.hmode ? root.style.left : root.style.right, 10);
    root.onthisStart(x, y);
    o.lastMouseX = e.clientX;
    o.lastMouseY = e.clientY;
    const self2 = this;
    o.onmousemoveDefault = document.onmousemove;
    o.dragging = true;
    document.onmousemove = (e2) => {
      self2.drag(e2);
    };
    document.onmouseup = () => {
      self2.end();
    };
    return false;
  }
  /**
   * Does the drag.
   *
   * @param {Event} e
   * @private
   */
  drag(e) {
    const o = this.obj;
    const root = o.root;
    const ey = e.clientY;
    const ex = e.clientX;
    const y = Number.parseInt(o.vmode ? root.style.top : root.style.bottom, 10);
    const x = Number.parseInt(o.hmode ? root.style.left : root.style.right, 10);
    const nx = x + (ex - o.lastMouseX) * (o.hmode ? 1 : -1);
    const ny = y + (ey - o.lastMouseY) * (o.vmode ? 1 : -1);
    root.style[o.hmode ? "left" : "right"] = `${nx}px`;
    root.style[o.vmode ? "top" : "bottom"] = `${ny}px`;
    o.lastMouseX = ex;
    o.lastMouseY = ey;
    root.onthis(nx, ny);
    return false;
  }
  /**
   * Ends the drag.
   *
   * @private
   */
  end() {
    document.onmousemove = this.obj.onmousemoveDefault;
    document.onmouseup = null;
    this.obj.dragging = false;
    if (this.endHook) {
      this.endHook(Number.parseInt(this.obj.root.style[this.obj.hmode ? "left" : "right"], 10), Number.parseInt(this.obj.root.style[this.obj.vmode ? "top" : "bottom"], 10));
    }
  }
};
//! src/Navigation_popups/modules/navpopup.ts
var Mousetracker = class {
  loopDelay;
  timer;
  active;
  dirty;
  hooks;
  x;
  y;
  lastHook_x;
  lastHook_y;
  savedListener;
  constructor() {
    this.loopDelay = 400;
    this.timer = null;
    this.active = false;
    this.dirty = true;
    this.hooks = [];
  }
  /**
   * Adds a hook, to be called when we get events.
   *
   * @param {Function} f A function which is called as
   * <code>f(x,y)</code>. It should return <code>true</code> when it
   * wants to be removed, and <code>false</code> otherwise.
   */
  addHook(f) {
    this.hooks.push(f);
  }
  /**
   * Runs hooks, passing them the x
   * and y coords of the mouse.  Hook functions that return true are
   * passed to {@source Mousetracker#removeHooks} for removal.
   *
   * @private
   */
  runHooks() {
    if (!this.hooks || this.hooks.length === 0) {
      return;
    }
    let remove = false;
    const removeObj = {};
    const {
      x
    } = this;
    const {
      y
    } = this;
    const len = this.hooks.length;
    for (let i = 0; i < len; ++i) {
      if (this.hooks[i](x, y) === true) {
        remove = true;
        removeObj[i] = true;
      }
    }
    if (remove) {
      this.removeHooks(removeObj);
    }
  }
  /**
   * Removes hooks.
   *
   * @private
   * @param {Object} removeObj An object whose keys are the index
   * numbers of functions for removal, with values that evaluate to true
   */
  removeHooks(removeObj) {
    const newHooks = [];
    const len = this.hooks.length;
    for (let i = 0; i < len; ++i) {
      if (!removeObj[i]) {
        newHooks.push(this.hooks[i]);
      }
    }
    this.hooks = newHooks;
  }
  /**
   * Event listener for mouse wiggles.
   * We simply grab the event, set x and y and run the hooks.
   * This makes the cpu all hot and bothered :-(
   *
   * @private
   * @param {Event} e Mousemove event
   */
  track(e) {
    if (e) {
      this.setPosition(e.pageX, e.pageY);
    }
  }
  /**
   * Sets the x and y coordinates stored and takes appropriate action,
   * running hooks as appropriate.
   *
   * @param {Integer} x, y Screen coordinates to set
   * @param {number} x
   * @param {number} y
   */
  setPosition(x, y) {
    this.x = x;
    this.y = y;
    if (this.dirty || this.hooks.length === 0) {
      this.dirty = false;
      return;
    }
    if (typeof this.lastHook_x !== "number") {
      this.lastHook_x = -100;
      this.lastHook_y = -100;
    }
    let diff2 = (this.lastHook_x - x) * (this.lastHook_y - y);
    diff2 = diff2 >= 0 ? diff2 : -diff2;
    if (diff2 > 1) {
      this.lastHook_x = x;
      this.lastHook_y = y;
      if (this.dirty) {
        this.dirty = false;
      } else {
        this.runHooks();
      }
    }
  }
  /**
   * Sets things in motion, unless they are already that is, registering an event listener on
   * <code>document.onmousemove</code>. A half-hearted attempt is made to preserve the old event
   * listener if there is one.
   */
  enable() {
    if (this.active) {
      return;
    }
    this.active = true;
    this.savedListener = document.onmousemove;
    const self2 = this;
    document.onmousemove = (e) => {
      self2.track(e);
    };
    if (this.loopDelay) {
      this.timer = setInterval(() => {
        self2.runHooks();
      }, this.loopDelay);
    }
  }
  /**
   * Disables the tracker, removing the event listener.
   */
  disable() {
    if (!this.active) {
      return;
    }
    if (typeof this.savedListener === "function") {
      document.onmousemove = this.savedListener;
    } else {
      document.onmousemove = null;
    }
    if (this.timer) {
      clearInterval(this.timer);
    }
    this.active = false;
  }
};
var Navpopup = class _Navpopup {
  uid;
  visible;
  noshow;
  hooks;
  hookIds;
  downloads;
  pending;
  fuzz;
  constrained;
  width;
  height;
  mainDiv;
  /* 由外部代码动态附加的属性 */
  left;
  top;
  tooWide;
  maxWidth;
  stable_x;
  stable_y;
  showSoonStableTimer;
  className;
  idNumber;
  delay;
  hasPopupMenu;
  parentAnchor;
  parentPopup;
  article;
  redir;
  originalArticle;
  redirTarget;
  mouseLeavingTime;
  stopPopupTimer;
  diffData;
  static uid = 0;
  static highest = 1e3;
  static tracker = new Mousetracker();
  constructor() {
    this.uid = _Navpopup.uid++;
    this.visible = false;
    this.noshow = false;
    this.hooks = {
      create: [],
      unhide: [],
      hide: []
    };
    this.hookIds = {};
    this.downloads = [];
    this.pending = null;
    this.fuzz = 5;
    this.constrained = true;
    this.width = 0;
    this.height = 0;
    this.mainDiv = null;
    this.createMainDiv();
  }
  /**
   * Retrieves the {@source #visible} attribute, indicating whether the popup is currently visible.
   *
   * @type boolean
   */
  isVisible() {
    return this.visible;
  }
  /**
   * Repositions popup using CSS style.
   *
   * @private
   * @param {integer} x x-coordinate (px)
   * @param {integer} y y-coordinate (px)
   * @param {boolean} noLimitHor Don't call {@source #limitHorizontalPosition}
   */
  reposition(x, y, noLimitHor) {
    log(`reposition(${x},${y},${noLimitHor})`);
    if (x !== void 0 && x !== null) {
      this.left = x;
    }
    if (y !== void 0 && y !== null) {
      this.top = y;
    }
    if (this.left !== void 0 && this.top !== void 0) {
      this.mainDiv.style.left = `${this.left}px`;
      this.mainDiv.style.top = `${this.top}px`;
    }
    if (!noLimitHor) {
      this.limitHorizontalPosition();
    }
  }
  /**
   * Prevents popups from being in silly locations. Hopefully.
   * Should not be run if {@source #constrained} is true.
   *
   * @private
   */
  limitHorizontalPosition() {
    if (!this.constrained || this.tooWide) {
      return;
    }
    this.updateDimensions();
    const x = this.left;
    const w = this.width;
    const cWidth = document.querySelector("body").clientWidth;
    if (x + w >= cWidth || x > 0 && this.maxWidth && this.width < this.maxWidth && this.height > this.width && x > cWidth - this.maxWidth) {
      this.mainDiv.style.left = "-10000px";
      this.mainDiv.style.width = `${this.maxWidth}px`;
      const naturalWidth = this.mainDiv.offsetWidth;
      let newLeft = cWidth - naturalWidth - 1;
      if (newLeft < 0) {
        newLeft = 0;
        this.tooWide = true;
      }
      log(`limitHorizontalPosition: moving to (${newLeft},${this.top}); naturalWidth=${naturalWidth}, clientWidth=${cWidth}`);
      this.reposition(newLeft, null, true);
    }
  }
  /**
   * Brings popup to the top of the z-order.
   * We increment the {@source #highest} property of the contructor here.
   *
   * @private
   */
  raise() {
    this.mainDiv.style.zIndex = `${_Navpopup.highest + 1}`;
    ++_Navpopup.highest;
  }
  /**
   * Shows the popup provided {@source #noshow} is not true.
   * Updates the position, brings the popup to the top of the z-order and unhides it.
   */
  show() {
    if (this.noshow) {
      return;
    }
    this.reposition();
    this.raise();
    this.unhide();
  }
  /**
   * Checks to see if the mouse pointer has
   * stabilised (checking every <code>time</code>/2 milliseconds) and runs the
   * {@source #show} method if it has.
   *
   * @param {integer} time The minimum time (ms) before the popup may be shown.
   */
  showSoonIfStable(time) {
    log(`showSoonIfStable, time=${time}`);
    if (this.visible) {
      return;
    }
    this.noshow = false;
    this.stable_x = -1e4;
    this.stable_y = -1e4;
    const stableShow = () => {
      log("stableShow called");
      const new_x = _Navpopup.tracker.x;
      const new_y = _Navpopup.tracker.y;
      const dx = self2.stable_x - new_x;
      const dy = self2.stable_y - new_y;
      const fuzz2 = 0;
      if (dx * dx <= fuzz2 && dy * dy <= fuzz2) {
        log("mouse is stable");
        clearInterval(self2.showSoonStableTimer);
        self2.reposition(new_x + 2, new_y + 2);
        self2.show();
        self2.limitHorizontalPosition();
        return;
      }
      self2.stable_x = new_x;
      self2.stable_y = new_y;
    };
    const self2 = this;
    this.showSoonStableTimer = setInterval(stableShow, time / 2);
  }
  /**
   * Sets the {@source #noshow} flag and hides the popup. This should be called
   * when the mouse leaves the link before
   * (or after) it's actually been displayed.
   */
  banish() {
    log("banish called");
    this.noshow = true;
    if (this.showSoonStableTimer) {
      log("clearing showSoonStableTimer");
      clearInterval(this.showSoonStableTimer);
    }
    this.hide();
  }
  /**
   * Runs hooks added with {@source #addHook}.
   *
   * @private
   * @param {string} key Key name of the {@source #hooks} array - one of 'create', 'unhide', 'hide'
   * @param {string} when Controls exactly when the hook is run: either 'before' or 'after'
   */
  runHooks(key, when) {
    if (!this.hooks[key]) {
      return;
    }
    const keyHooks = this.hooks[key];
    const len = keyHooks.length;
    for (let i = 0; i < len; ++i) {
      const entry = keyHooks[i];
      if (entry && entry.when === when && Reflect.apply(entry.hook, this, [])) {
        if (entry.hookId) {
          delete this.hookIds[entry.hookId];
        }
        keyHooks[i] = null;
      }
    }
  }
  /**
   * Adds a hook to the popup. Hook functions are run with <code>this</code> set to refer to the
   * Navpopup instance, and no arguments.
   *
   * @param {Function} hook The hook function. Functions that return true are deleted.
   * @param {string} key Key name of the {@source #hooks} array - one of 'create', 'unhide', 'hide'
   * @param {string} when Controls exactly when the hook is run: either 'before' or 'after'
   * @param {string} uid A truthy string identifying the hook function; if it matches another hook
   * in this position, it won't be added again.
   */
  addHook(hook, key, when, uid) {
    when || (when = "after");
    if (!this.hooks[key]) {
      return;
    }
    let hookId;
    if (uid) {
      hookId = [key, when, uid].join("|");
      if (this.hookIds[hookId]) {
        return;
      }
      this.hookIds[hookId] = true;
    }
    this.hooks[key].push({
      hook,
      when,
      hookId
    });
  }
  /**
   * Creates the main DIV element, which contains all the actual popup content.
   * Runs hooks with key 'create'.
   *
   * @private
   */
  createMainDiv() {
    if (this.mainDiv) {
      return;
    }
    this.runHooks("create", "before");
    const mainDiv = document.createElement("div");
    const self2 = this;
    mainDiv.onclick = () => {
      self2.onclickListener();
    };
    mainDiv.className = this.className ?? "navpopup_maindiv";
    mainDiv.id = mainDiv.className + this.uid;
    mainDiv.style.position = "absolute";
    mainDiv.style.minWidth = "350px";
    mainDiv.style.display = "none";
    mainDiv.className = "navpopup";
    mainDiv.navpopup = this;
    this.mainDiv = mainDiv;
    document.querySelector("body").append(mainDiv);
    this.runHooks("create", "after");
  }
  /**
   * Calls the {@source #raise} method.
   *
   * @private
   */
  onclickListener() {
    this.raise();
  }
  /**
   * Makes the popup draggable, using a {@source Drag} object.
   *
   * @param {string} handleName
   * @private
   */
  makeDraggable(handleName) {
    if (!this.mainDiv) {
      this.createMainDiv();
    }
    const drag = new Drag();
    if (!handleName) {
      drag.startCondition = (e) => {
        try {
          if (!e.shiftKey) {
            return false;
          }
        } catch {
          return false;
        }
        return true;
      };
    }
    let dragHandle;
    if (handleName) {
      dragHandle = document.getElementById(`${handleName}`);
    }
    dragHandle || (dragHandle = this.mainDiv);
    const self2 = this;
    drag.endHook = (x, y) => {
      _Navpopup.tracker.dirty = true;
      self2.reposition(x, y);
    };
    drag.init(dragHandle, this.mainDiv);
  }
  /**
   * Hides the popup using CSS. Runs hooks with key 'hide'.
   * Sets {@source #visible} appropriately.
   * {@source #banish} should be called externally instead of this method.
   *
   * @private
   */
  hide() {
    this.runHooks("hide", "before");
    this.abortDownloads();
    if (this.visible !== void 0 && this.visible) {
      this.mainDiv.style.display = "none";
      this.visible = false;
    }
    this.runHooks("hide", "after");
  }
  /**
   * Shows the popup using CSS. Runs hooks with key 'unhide'.
   * Sets {@source #visible} appropriately.   {@source #show} should be called externally instead of this method.
   *
   * @private
   */
  unhide() {
    this.runHooks("unhide", "before");
    if (this.visible !== void 0 && !this.visible) {
      this.mainDiv.style.display = "inline";
      this.visible = true;
    }
    this.runHooks("unhide", "after");
  }
  /**
   * Sets the <code>innerHTML</code> attribute of the main div containing the popup content.
   *
   * @param {string} html The HTML to set.
   */
  setInnerHTML(html) {
    this.mainDiv.innerHTML = html;
  }
  /**
   * Updates the {@source #width} and {@source #height} attributes with the CSS properties.
   *
   * @private
   */
  updateDimensions() {
    this.width = this.mainDiv.offsetWidth;
    this.height = this.mainDiv.offsetHeight;
  }
  /**
   * Checks if the point (x,y) is within {@source #fuzz} of the
   * {@source #mainDiv}.
   *
   * @param {integer} x x-coordinate (px)
   * @param {integer} y y-coordinate (px)
   * @type boolean
   */
  isWithin(x, y, fuzzArg, _element) {
    if (!this.visible) {
      return false;
    }
    this.updateDimensions();
    const fuzz = fuzzArg || 0;
    return x + fuzz >= this.left && x - fuzz <= this.left + this.width && y + fuzz >= this.top && y - fuzz <= this.top + this.height;
  }
  /**
   * Adds a download to {@source #downloads}.
   *
   * @param {Downloader} download
   */
  addDownload(download) {
    if (!download) {
      return;
    }
    this.downloads.push(download);
  }
  /**
   * Aborts the downloads listed in {@source #downloads}.
   *
   * @see Downloader#abort
   */
  abortDownloads() {
    for (const d of this.downloads) {
      if (d && d.abort) {
        d.abort();
      }
    }
    this.downloads = [];
  }
};
//! src/Navigation_popups/modules/tools.ts
var getJsObj = (json) => {
  try {
    const json_ret = JSON.parse(json);
    if (json_ret.warnings) {
      for (let w = 0; w < json_ret.warnings.length; w++) {
        if (json_ret.warnings[w]["*"]) {
          log(json_ret.warnings[w]["*"]);
        } else {
          log(json_ret.warnings[w].warnings);
        }
      }
    } else if (json_ret.error) {
      errlog(`${json_ret.error.code}: ${json_ret.error.info}`);
    }
    return json_ret;
  } catch {
    errlog(`Something went wrong with getJsObj, json=${json}`);
    return 1;
  }
};
var anyChild = (obj) => {
  for (const p in obj) {
    if (!Object.hasOwn(obj, p)) {
      continue;
    }
    return obj[p];
  }
  return null;
};
var upcaseFirst = (str) => {
  if (typeof str !== "string" || str === "") {
    return;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};
var literalizeRegex = (str) => {
  return mw.util.escapeRegExp(str);
};
String.prototype.entify = function() {
  return this.split("&").join("&amp;").split("<").join("&lt;").split(">").join(
    "&gt;"
    /* +shy */
  ).split('"').join("&quot;");
};
var removeNulls = (val) => {
  return val !== null;
};
var joinPath = (list) => {
  return list.filter(removeNulls).join("/");
};
var simplePrintf = (str, subs) => {
  if (!str || !subs) {
    return str;
  }
  const ret = [];
  const s = str.split(/(%s|\$\d+)/);
  let i = 0;
  do {
    ret.push(s.shift());
    if (s.length === 0) {
      break;
    }
    const cmd = s.shift();
    if (cmd === "%s") {
      if (i < subs.length) {
        ret.push(subs[i]);
      } else {
        ret.push(cmd);
      }
      ++i;
    } else {
      const j = Number.parseInt(cmd.replace("$", ""), 10) - 1;
      if (j > -1 && j < subs.length) {
        ret.push(subs[j]);
      } else {
        ret.push(cmd);
      }
    }
  } while (s.length > 0);
  return ret.join("");
};
var isString = (x) => {
  return typeof x === "string" || x instanceof String;
};
var isRegExp = (x) => {
  return x instanceof RegExp;
};
var isArray = (x) => {
  return Array.isArray(x);
};
var repeatString = (s, mult) => {
  let ret = "";
  for (let i = 0; i < mult; ++i) {
    ret += s;
  }
  return ret;
};
var zeroFill = (s, min) => {
  min || (min = 2);
  const t = s.toString();
  return repeatString("0", min - t.length) + t;
};
var map = (f, o) => {
  if (isArray(o)) {
    return map_array(f, o);
  }
  return map_object(f, o);
};
var map_array = (f, o) => {
  const ret = [];
  for (const element of o) {
    ret.push(f(element));
  }
  return ret;
};
var map_object = (f, o) => {
  const ret = {};
  for (const i in o) {
    if (!Object.hasOwn(o, i)) {
      continue;
    }
    ret[o] = f(o[i]);
  }
  return ret;
};
//! src/Navigation_popups/modules/string.ts
var import_ext_gadget = require("ext.gadget.i18n");
var message = {
  // summary data, searching etc.
  article: (0, import_ext_gadget.wgULS)("条目", "條目"),
  category: (0, import_ext_gadget.wgULS)("个分类", "個分類"),
  categories: (0, import_ext_gadget.wgULS)("个分类", "個分類"),
  image: (0, import_ext_gadget.wgULS)("个文件", "個檔案"),
  images: (0, import_ext_gadget.wgULS)("个文件", "個檔案"),
  stub: "小作品",
  "section stub": (0, import_ext_gadget.wgULS)("小章节", "小章節"),
  "Empty page": (0, import_ext_gadget.wgULS)("空页面", "空頁面"),
  kB: (0, import_ext_gadget.wgULS)("千字节<sub>（以1000为一进）</sub>", "千位元組<sub>（以1000為一進）</sub>"),
  bytes: (0, import_ext_gadget.wgULS)("字节", "位元組"),
  day: "天",
  days: "天",
  hour: (0, import_ext_gadget.wgULS)("小时", "小時"),
  hours: (0, import_ext_gadget.wgULS)("小时", "小時"),
  minute: "分",
  minutes: "分",
  second: "秒",
  seconds: "秒",
  week: "周",
  weeks: "周",
  month: "月",
  months: "月",
  year: "年",
  years: "年",
  search: (0, import_ext_gadget.wgULS)("搜索", "搜尋"),
  SearchHint: (0, import_ext_gadget.wgULS)("搜索包含 %s 的页面", "搜尋包含 %s 的頁面"),
  web: "Bing",
  global: "全域",
  "more...": "更多……",
  // article-related actions and info
  // (some actions also apply to user pages)
  actions: (0, import_ext_gadget.wgULS)("操作", "動作"),
  // /// view articles and view talk
  popupsMenu: "Popups",
  "disable previews": (0, import_ext_gadget.wgULS)("禁用预览", "禁用預覽"),
  togglePreviewsHint: (0, import_ext_gadget.wgULS)("切换本页 Popups 的预览开关", "切換本頁 Popups 的預覽開關"),
  "toggle previews": (0, import_ext_gadget.wgULS)("切换预览开关", "切換預覽開關"),
  reset: (0, import_ext_gadget.wgULS)("复位", "複位"),
  disable: "禁用 Popups",
  disablePopupsHint: (0, import_ext_gadget.wgULS)("在本页禁用 Popups，刷新页面以重新启用。", "在本頁禁用 Popups，重新整理頁面以重新啟用。"),
  purgePopupsHint: (0, import_ext_gadget.wgULS)("复位 Popups，清除所有缓存数据。", "複位 Popups，清除所有快取資料。"),
  PopupsHint: (0, import_ext_gadget.wgULS)("复位 Popups，清除所有缓存数据。", "複位 Popups，清除所有快取資料。"),
  spacebar: "空格",
  view: (0, import_ext_gadget.wgULS)("查看", "檢視"),
  "view article": (0, import_ext_gadget.wgULS)("查看条目", "檢視條目"),
  viewHint: (0, import_ext_gadget.wgULS)("前往 %s", "前往 %s"),
  talk: (0, import_ext_gadget.wgULS)("讨论", "討論"),
  "talk page": (0, import_ext_gadget.wgULS)("讨论页", "討論頁"),
  "this&nbsp;revision": (0, import_ext_gadget.wgULS)("此修订版本", "此修訂版本"),
  "revision %s of %s": (0, import_ext_gadget.wgULS)("页面 $2 的修订版本 $1", "頁面 $2 的修訂版本 $1"),
  "Revision %s of %s": (0, import_ext_gadget.wgULS)("页面 $2 的修订版本 $1", "頁面 $2 的修訂版本 $1"),
  "the revision prior to revision %s of %s": (0, import_ext_gadget.wgULS)("页面 $2 的修订版本 $1 之前的修订版本", "頁面 $2 的修訂版本 $1 之前的修訂版本"),
  "Toggle image size": (0, import_ext_gadget.wgULS)("点击切换图片大小", "點擊切換圖片大小"),
  del: (0, import_ext_gadget.wgULS)("删除", "删除"),
  // /// delete, protect, move
  delete: (0, import_ext_gadget.wgULS)("删除", "删除"),
  deleteHint: (0, import_ext_gadget.wgULS)("删除 %s", "删除 %s"),
  undeleteShort: (0, import_ext_gadget.wgULS)("恢复", "恢復"),
  UndeleteHint: (0, import_ext_gadget.wgULS)("恢复 %s", "恢復 %s"),
  protect: (0, import_ext_gadget.wgULS)("保护", "保護"),
  protectHint: (0, import_ext_gadget.wgULS)("保护 %s", "保護 %s"),
  unprotectShort: (0, import_ext_gadget.wgULS)("解除", "解除"),
  unprotectHint: (0, import_ext_gadget.wgULS)("解除对 %s 的保护", "解除對 %s 的保護"),
  move: (0, import_ext_gadget.wgULS)("移动", "移動"),
  "move page": (0, import_ext_gadget.wgULS)("移动页面", "移動頁面"),
  MovepageHint: (0, import_ext_gadget.wgULS)("修改 %s 的标题", "修改 %s 的標題"),
  edit: (0, import_ext_gadget.wgULS)("编辑", "編輯"),
  // /// edit articles and talk
  "edit article": (0, import_ext_gadget.wgULS)("编辑条目", "編輯條目"),
  editHint: (0, import_ext_gadget.wgULS)("修改 %s 的内容", "修改 %s 的內容"),
  "edit talk": (0, import_ext_gadget.wgULS)("编辑讨论页", "編輯對話頁"),
  new: (0, import_ext_gadget.wgULS)("新", "新"),
  "new topic": (0, import_ext_gadget.wgULS)("新话题", "新話題"),
  newSectionHint: (0, import_ext_gadget.wgULS)("在 %s 增加新的讨论话题", "在 %s 增加新的討論話題"),
  "null edit": (0, import_ext_gadget.wgULS)("空编辑", "空編輯"),
  nullEditHint: (0, import_ext_gadget.wgULS)("进行一次对 %s 的空编辑", "製造一次對 %s 的空編輯"),
  hist: (0, import_ext_gadget.wgULS)("历史", "歷史"),
  // /// history, diffs, editors, related
  history: (0, import_ext_gadget.wgULS)("历史", "歷史"),
  historyHint: (0, import_ext_gadget.wgULS)("%s 的修订历史", "%s 的修訂歷史"),
  last: (0, import_ext_gadget.wgULS)("之前", "之前"),
  // [[MediaWiki:Last]]
  lastEdit: (0, import_ext_gadget.wgULS)("最近更改", "最近更改"),
  "show last edit": (0, import_ext_gadget.wgULS)("最近一次更改", "最新一次修訂"),
  "Show the last edit": (0, import_ext_gadget.wgULS)("显示最近一次更改的差异", "顯示最新一次修訂的差異"),
  lastContrib: (0, import_ext_gadget.wgULS)("最近编辑", "最近編輯"),
  "last set of edits": (0, import_ext_gadget.wgULS)("最近编辑", "最近編輯"),
  lastContribHint: (0, import_ext_gadget.wgULS)("显示由最后一位编辑者造成的差异", "顯示由最後一位編輯者製造的差異"),
  cur: (0, import_ext_gadget.wgULS)("当前", "當前"),
  diffCur: (0, import_ext_gadget.wgULS)("与当前版本的差异", "與目前版本的差異"),
  "Show changes since revision %s": (0, import_ext_gadget.wgULS)("显示自修订版本 %s 的差异", "顯示自修訂版本 %s 的差異"),
  "%s old": (0, import_ext_gadget.wgULS)("%s 前的最后版本", "%s 前的最后版本"),
  // as in 4 weeks old
  oldEdit: (0, import_ext_gadget.wgULS)("旧编辑", "舊編輯"),
  purge: (0, import_ext_gadget.wgULS)("清除缓存", "清除快取"),
  purgeHint: (0, import_ext_gadget.wgULS)("清除服务器中 %s 的缓存", "清除伺服器中 %s 的快取"),
  raw: (0, import_ext_gadget.wgULS)("源代码", "原始碼"),
  rawHint: (0, import_ext_gadget.wgULS)("查看 %s 的源代码", "檢視 %s 的原始碼"),
  render: (0, import_ext_gadget.wgULS)("仅正文", "僅正文"),
  renderHint: (0, import_ext_gadget.wgULS)("显示 %s 的纯HTML解析（仅正文内容）", "顯示 %s 的純HTML解析（僅正文內容）"),
  "Show the edit made to get revision": (0, import_ext_gadget.wgULS)("显示编辑以得到修订版本", "顯示編輯以得到修訂版本"),
  sinceMe: (0, import_ext_gadget.wgULS)("自我", "自我"),
  "changes since mine": (0, import_ext_gadget.wgULS)("自我修订的差异", "自我修訂的差異"),
  sinceMeHint: (0, import_ext_gadget.wgULS)("显示自我上次修改以来的差异", "顯示自我上次修改以來的差異"),
  "Couldn't find an edit by %s\nin the last %s edits to\n%s": (0, import_ext_gadget.wgULS)("在 $3 最近 $2 次编辑中找不到 $1 做出的修改", "在 $3 最近 $2 次編輯中找不到 $1 做出的修改"),
  eds: (0, import_ext_gadget.wgULS)("编辑", "編輯"),
  editors: (0, import_ext_gadget.wgULS)("编辑者", "編輯者"),
  editorListHint: (0, import_ext_gadget.wgULS)("列出编辑过 %s 的用户", "列出編輯過 %s 的使用者"),
  related: (0, import_ext_gadget.wgULS)("相关", "相關"),
  relatedChanges: (0, import_ext_gadget.wgULS)("相关更改", "相關更改"),
  "related changes": (0, import_ext_gadget.wgULS)("相关更改", "相關更改"),
  RecentchangeslinkedHint: (0, import_ext_gadget.wgULS)("显示相关 %s 的修改", "顯示相關 %s 的修改"),
  editOld: (0, import_ext_gadget.wgULS)("编辑旧版", "編輯舊版"),
  // /// edit old version, or revert
  rv: (0, import_ext_gadget.wgULS)("回退", "恢復"),
  revert: (0, import_ext_gadget.wgULS)("回退", "恢復"),
  revertHint: (0, import_ext_gadget.wgULS)("回退到 %s", "恢復到 %s"),
  undo: (0, import_ext_gadget.wgULS)("撤销", "撤銷"),
  undoHint: (0, import_ext_gadget.wgULS)("撤销这次编辑", "撤銷這次編輯"),
  defaultpopupRedlinkSummary: (0, import_ext_gadget.wgULS)("移除到空页面[[%s]]的链接（Popups）", "移除到空頁面[[%s]]的連結（Popups）"),
  defaultpopupFixDabsSummary: (0, import_ext_gadget.wgULS)("消歧义[[%s]]到[[%s]]（Popups）", "消歧義[[%s]]到[[%s]]（Popups）"),
  defaultpopupFixRedirsSummary: (0, import_ext_gadget.wgULS)("忽略从[[%s]]到[[%s]]的重定向（Popups）", "忽略從[[%s]]到[[%s]]的重新導向（Popups）"),
  defaultpopupExtendedRevertSummary: (0, import_ext_gadget.wgULS)("回退到$2在$1时编辑的修订版本$3（Popups）", "還原到$2在$1時製作的修訂版本$3（Popups）"),
  defaultpopupRevertToPreviousSummary: (0, import_ext_gadget.wgULS)("回退到修订版本%s的上一个版本（Popups）", "還原到修訂版本%s的上一個版本（Popups）"),
  defaultpopupRevertSummary: (0, import_ext_gadget.wgULS)("回退到修订版本%s（Popups）", "還原到修訂版本%s（Popups）"),
  defaultpopupQueriedRevertToPreviousSummary: (0, import_ext_gadget.wgULS)("回退到修订版本$1的上一个版本，由$3在$2时编辑（Popups）", "還原到修訂版本$1的上一個版本，由$3在$2時製作（Popups）"),
  defaultpopupQueriedRevertSummary: (0, import_ext_gadget.wgULS)("回退到$3在$2时编辑的修订版本$1（Popups）", "還原到$3在$2時製作的修訂版本$1（Popups）"),
  defaultpopupRmDabLinkSummary: (0, import_ext_gadget.wgULS)("移除到消歧义页[[%s]]的链接（Popups）", "移除到消歧義頁[[%s]]的連結（Popups）"),
  Redirects: (0, import_ext_gadget.wgULS)("重定向", "重定向"),
  // as in Redirects to ...
  // " to ": wgULS( "到","到" ),
  // as in Redirects to ...
  "Bypass redirect": (0, import_ext_gadget.wgULS)("忽略重定向", "忽略重新導向"),
  "Fix this redirect": (0, import_ext_gadget.wgULS)("修复重定向", "修復重新導向"),
  disambig: (0, import_ext_gadget.wgULS)("消歧义", "消歧義"),
  // /// add or remove dab etc.
  disambigHint: (0, import_ext_gadget.wgULS)("消歧义这个链接到 [[%s]]", "消歧義這個連結到 [[%s]]"),
  "Click to disambiguate this link to:": (0, import_ext_gadget.wgULS)("点击以消歧义这个链接到：", "點擊以消歧義這個連結到："),
  "remove this link": (0, import_ext_gadget.wgULS)("移除链接", "移除連結"),
  "remove all links to this page from this article": (0, import_ext_gadget.wgULS)("移除此条目到这页的所有链接", "移除此條目到這頁的所有連結"),
  "remove all links to this disambig page from this article": (0, import_ext_gadget.wgULS)("移除此条目到这消歧义的所有链接", "移除此條目到這消歧義的所有連結"),
  mainlink: (0, import_ext_gadget.wgULS)("主链接", "主連結"),
  // /// links, watch, unwatch
  wikiLink: (0, import_ext_gadget.wgULS)("个内部链接", "个內部連結"),
  wikiLinks: (0, import_ext_gadget.wgULS)("个内部链接", "个內部連結"),
  "links here": (0, import_ext_gadget.wgULS)("链入", "鏈入"),
  whatLinksHere: (0, import_ext_gadget.wgULS)("链入页面", "鏈入頁面"),
  "what links here": (0, import_ext_gadget.wgULS)("链入页面", "鏈入頁面"),
  WhatlinkshereHint: (0, import_ext_gadget.wgULS)("显示链接到 %s 的页面", "顯示連結到 %s 的頁面"),
  unwatchShort: (0, import_ext_gadget.wgULS)("取消", "取消"),
  watchThingy: (0, import_ext_gadget.wgULS)("监视", "監視"),
  // called watchThingy because {}.watch is a function
  watchHint: (0, import_ext_gadget.wgULS)("加入 %s 到我的监视列表", "加入 %s 到我的監視列表"),
  unwatchHint: (0, import_ext_gadget.wgULS)("从我的监视列表移除 %s", "從我的監視列表移除 %s"),
  "Only found one editor: %s made %s edits": (0, import_ext_gadget.wgULS)("仅找到一位编者：%s 制造了 %s 次编辑", "僅找到一位編者：%s 製造了 %s 次編輯"),
  "%s seems to be the last editor to the page %s": (0, import_ext_gadget.wgULS)("%s 看上去是 %s 这页的最后一位编者", "%s 看上去是 %s 這頁的最後一位編者"),
  rss: (0, import_ext_gadget.wgULS)("RSS", "RSS"),
  // diff previews
  "Diff truncated for performance reasons": (0, import_ext_gadget.wgULS)("出于性能考虑，差异已被截断", "出於效能考慮，差異已被截斷"),
  "Old revision": (0, import_ext_gadget.wgULS)("旧版本", "舊版本"),
  "New revision": (0, import_ext_gadget.wgULS)("新版本", "新版本"),
  "Something went wrong :-(": (0, import_ext_gadget.wgULS)("出问题了 :-(", "出問題了 :-("),
  "Empty revision, maybe non-existent": (0, import_ext_gadget.wgULS)("空的修订，可能并不存在", "空的修訂，可能並不存在"),
  "Unknown date": (0, import_ext_gadget.wgULS)("未知日期", "未知日期"),
  // other special previews
  "Empty category": (0, import_ext_gadget.wgULS)("空的分类", "空的分類"),
  "Category members (%s shown)": (0, import_ext_gadget.wgULS)("分类成员（%s 显示）", "分類成員（%s 顯示）"),
  "No image links found": (0, import_ext_gadget.wgULS)("未找到文件链接", "未找到檔案連結"),
  "File links": (0, import_ext_gadget.wgULS)("文件链接", "檔案連結"),
  "not commons": (0, import_ext_gadget.wgULS)("维基共享中无此名称的文件。", "維基共享中無此名稱的檔案。"),
  "commons only": (0, import_ext_gadget.wgULS)("此文件来自维基共享。", "此檔案來自維基共享。"),
  "No image found": (0, import_ext_gadget.wgULS)("找不到文件", "找不到檔案"),
  "commons dupe": (0, import_ext_gadget.wgULS)("维基共享中存在此文件的副本。", "維基共享中存在此檔案的副本。"),
  "commons conflict": (0, import_ext_gadget.wgULS)("维基共享中存在此文件名称不同的副本。", "維基共享中存在此檔名稱不同的副本。"),
  // user-related actions and info
  user: (0, import_ext_gadget.wgULS)("用户", "使用者"),
  // /// user page, talk, email, space
  "user&nbsp;page": (0, import_ext_gadget.wgULS)("用户页", "使用者頁"),
  "user talk": (0, import_ext_gadget.wgULS)("用户讨论", "使用者對話"),
  "edit user talk": (0, import_ext_gadget.wgULS)("编辑用户讨论", "編輯使用者對話"),
  "leave comment": (0, import_ext_gadget.wgULS)("留言", "留言"),
  email: (0, import_ext_gadget.wgULS)("电邮", "電郵"),
  "email user": (0, import_ext_gadget.wgULS)("电邮用户", "電郵使用者"),
  EmailuserHint: (0, import_ext_gadget.wgULS)("给 %s 发送电子邮件", "給 %s 發送電子郵件"),
  space: (0, import_ext_gadget.wgULS)("子页面", "子頁面"),
  // short form for userSpace link
  PrefixindexHint: (0, import_ext_gadget.wgULS)("显示 %s 的用户页子页面", "顯示 %s 的使用者頁子頁面"),
  count: (0, import_ext_gadget.wgULS)("统计", "統計"),
  // /// contributions, tree, log
  "edit counter": (0, import_ext_gadget.wgULS)("编辑次数", "編輯次數"),
  katelinkHint: (0, import_ext_gadget.wgULS)("%s 的编辑次数", "%s 的編輯次數"),
  contribs: (0, import_ext_gadget.wgULS)("贡献", "貢獻"),
  contributions: (0, import_ext_gadget.wgULS)("贡献", "貢獻"),
  deletedContribs: (0, import_ext_gadget.wgULS)("已删除的贡献", "已刪除的貢獻"),
  ContributionsHint: (0, import_ext_gadget.wgULS)("%s 的用户贡献", "%s 的使用者貢獻"),
  tree: (0, import_ext_gadget.wgULS)("树", "樹"),
  contribsTreeHint: (0, import_ext_gadget.wgULS)("根据名字空间查看 %s 的贡献", "根據命名空間檢視 %s 的貢獻"),
  log: (0, import_ext_gadget.wgULS)("日志", "日誌"),
  "user log": (0, import_ext_gadget.wgULS)("用户日志", "使用者日誌"),
  userLogHint: (0, import_ext_gadget.wgULS)("显示 %s 的用户日志", "顯示 %s 的使用者日誌"),
  unblockShort: (0, import_ext_gadget.wgULS)("解除", "解除"),
  block: (0, import_ext_gadget.wgULS)("封禁", "封鎖"),
  "block user": (0, import_ext_gadget.wgULS)("封禁用户", "封鎖使用者"),
  IpblocklistHint: (0, import_ext_gadget.wgULS)("解封 %s", "解封 %s"),
  BlockipHint: (0, import_ext_gadget.wgULS)("封禁 %s", "封鎖 %s"),
  "block log": (0, import_ext_gadget.wgULS)("封禁日志", "封鎖日誌"),
  blockLogHint: (0, import_ext_gadget.wgULS)("显示 %s 的封禁日志", "顯示 %s 的封鎖日誌"),
  protectLogHint: (0, import_ext_gadget.wgULS)("显示 %s 的保护日志", "顯示 %s 的保護日誌"),
  pageLogHint: (0, import_ext_gadget.wgULS)("显示 %s 的日志", "顯示 %s 的日誌"),
  deleteLogHint: (0, import_ext_gadget.wgULS)("显示 %s 的删除日志", "顯示 %s 的刪除日誌"),
  "Invalid %s %s": (0, import_ext_gadget.wgULS)("选项 %s 不可用：%s", "選項 %s 不可用：%s"),
  m: "小",
  // Autoediting
  "Enter a non-empty edit summary or press cancel to abort": (0, import_ext_gadget.wgULS)("输入编辑摘要，或按取消中止操作", "輸入編輯摘要，或按取消中止操作"),
  "Failed to get revision information, please edit manually.\n\n": (0, import_ext_gadget.wgULS)("获取修订版本信息失败，请手动修改。\n\n", "獲取修訂版本資訊失敗，請手動修改。\n\n"),
  "The %s button has been automatically clicked. Please wait for the next page to load.": (0, import_ext_gadget.wgULS)("按钮 %s 已被自动点击，请等待下一个页面加载。", "按鈕 %s 已被自動點擊，請等待下一個頁面載入。"),
  "Could not find button %s. Please check the settings in your javascript file.": (0, import_ext_gadget.wgULS)("找不到按钮 %s，请检查您 JavaScript 文件中的设置。", "找不到按鈕 %s，請檢查您 JavaScript 檔案中的設定。"),
  // Popups setup
  "Open full-size image": (0, import_ext_gadget.wgULS)("查看全尺寸图像", "檢視全尺寸影像"),
  // 以下内容由 AnnAngela 补正
  bingSearchHint: (0, import_ext_gadget.wgULS)("在 Bing 上搜索“%s”", "在 bing 上搜尋「%s」"),
  "enable previews": (0, import_ext_gadget.wgULS)("启用预览", "啟用預覽"),
  "show preview": (0, import_ext_gadget.wgULS)("禁用预览", "禁用預覽"),
  historyfeedHint: (0, import_ext_gadget.wgULS)("该页面的近期更改 RSS feed", "該頁面的近期更改 RSS feed"),
  "send thanks": (0, import_ext_gadget.wgULS)("发送感谢", "傳送感謝"),
  ThanksHint: (0, import_ext_gadget.wgULS)("向该用户发送一封感谢消息", "向該使用者傳送一封感謝訊息"),
  "mark patrolled": (0, import_ext_gadget.wgULS)("标记为已巡查", "標記為已巡查"),
  markpatrolledHint: (0, import_ext_gadget.wgULS)("标记该编辑为已巡查", "標記該編輯為已巡查"),
  "Could not marked this edit as patrolled": (0, import_ext_gadget.wgULS)("无法标记该编辑为已巡查", "無法標記該編輯為已巡查"),
  defaultpopupReviewedSummary: (0, import_ext_gadget.wgULS)("标记从版本%s到%s间的编辑为已巡查", "標記從版本%s到%s間的編輯為已巡查"),
  "Image from Commons": (0, import_ext_gadget.wgULS)("来自维基共享的图片", "來自維基共用的圖片"),
  "Description page": (0, import_ext_gadget.wgULS)("图片描述页", "圖片描述頁"),
  "Alt text:": (0, import_ext_gadget.wgULS)("替换文本（Alt）：", "替換文字（Alt）："),
  revdel: (0, import_ext_gadget.wgULS)("历史版本被隐藏", "歷史版本被隱藏"),
  DeletedcontributionsHint: (0, import_ext_gadget.wgULS)("用户%s的被删除编辑次数", "使用者%s的被刪除編輯次數"),
  "No backlinks found": (0, import_ext_gadget.wgULS)("找不到链入页面", "找不到鏈入頁面"),
  " and more": (0, import_ext_gadget.wgULS)("以及其他页面", "以及其他頁面"),
  "Download preview data": (0, import_ext_gadget.wgULS)("下载预览数据", "下載預覽資料"),
  "Not a registered username": (0, import_ext_gadget.wgULS)("非已注册的用户", "非已註冊的使用者"),
  BLOCKED: (0, import_ext_gadget.wgULS)("被封禁", "被封鎖"),
  "Has blocks": (0, import_ext_gadget.wgULS)("被部分封禁", "被部分封鎖"),
  " edits since: ": (0, import_ext_gadget.wgULS)("次编辑，注册日期为", "次編輯，註冊日期為"),
  "last edit on ": (0, import_ext_gadget.wgULS)("最后一次编辑于", "最後一次編輯於"),
  EmailUserHint: (0, import_ext_gadget.wgULS)("给 %s 发送电子邮件", "給 %s 發送電子郵件"),
  RANGEBLOCKED: (0, import_ext_gadget.wgULS)("IP段被封禁", "IP段被封鎖"),
  "IP user": (0, import_ext_gadget.wgULS)("IP用户", "IP使用者"),
  "♀": "♀",
  "♂": "♂",
  HIDDEN: (0, import_ext_gadget.wgULS)("全域隐藏", "全域隱藏"),
  LOCKED: (0, import_ext_gadget.wgULS)("全域锁定", "全域鎖定"),
  "Invalid user": (0, import_ext_gadget.wgULS)("非法用户名", "非法使用者名稱"),
  diff: (0, import_ext_gadget.wgULS)("差异", "差異"),
  " to ": "至",
  autoedit_version: "np20140416",
  PrefixIndexHint: (0, import_ext_gadget.wgULS)("显示用户%s的子页面", "顯示使用者%s的子頁面"),
  nullEditSummary: (0, import_ext_gadget.wgULS)("进行一次零编辑", "進行一次零編輯"),
  // 用户组名称从系统消息获取
  "group-no-autoconfirmed": (0, import_ext_gadget.wgULS)("非自动确认用户", "非自動確認使用者"),
  separator: "、",
  comma: "，"
};
//! src/Navigation_popups/modules/pg.ts
var pg = {
  api: {},
  re: {},
  ns: {},
  string: {},
  wiki: {},
  user: {},
  misc: {},
  option: {},
  optionDefault: {},
  flag: {},
  cache: {},
  structures: {},
  timer: {},
  counter: {},
  current: {},
  fn: {},
  escapeQuotesHTML: (text) => {
    return text.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  },
  unescapeQuotesHTML: (html) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  },
  endoflist: null
};
//! src/Navigation_popups/modules/strings.ts
pg.string = {
  // summary data, searching etc.
  article: "article",
  category: "category",
  categories: "categories",
  image: "image",
  images: "images",
  stub: "stub",
  "section stub": "section stub",
  "Empty page": "Empty page",
  kB: "kB",
  bytes: "bytes",
  day: "day",
  days: "days",
  hour: "hour",
  hours: "hours",
  minute: "minute",
  minutes: "minutes",
  second: "second",
  seconds: "seconds",
  week: "week",
  weeks: "weeks",
  search: "search",
  SearchHint: "Find English Wikipedia articles containing %s",
  web: "web",
  global: "global",
  // article-related actions and info
  // (some actions also apply to user pages)
  actions: "actions",
  popupsMenu: "popups",
  togglePreviewsHint: "Toggle preview generation in popups on this page",
  "enable previews": "enable previews",
  "disable previews": "disable previews",
  "toggle previews": "toggle previews",
  "show preview": "show preview",
  reset: "reset",
  "more...": "more...",
  disable: "disable popups",
  disablePopupsHint: "Disable popups on this page. Reload page to re-enable.",
  historyfeedHint: "RSS feed of recent changes to this page",
  purgePopupsHint: "Reset popups, clearing all cached popup data.",
  PopupsHint: "Reset popups, clearing all cached popup data.",
  spacebar: "space",
  view: "view",
  "view article": "view article",
  viewHint: "Go to %s",
  talk: "talk",
  "talk page": "talk page",
  "this&nbsp;revision": "this&nbsp;revision",
  "revision %s of %s": "revision %s of %s",
  "Revision %s of %s": "Revision %s of %s",
  "the revision prior to revision %s of %s": "the revision prior to revision %s of %s",
  "Toggle image size": "Click to toggle image size",
  del: "del",
  delete: "delete",
  deleteHint: "Delete %s",
  undeleteShort: "un",
  UndeleteHint: "Show the deletion history for %s",
  protect: "protect",
  protectHint: "Restrict editing rights to %s",
  unprotectShort: "un",
  unprotectHint: "Allow %s to be edited by anyone again",
  "send thanks": "send thanks",
  ThanksHint: "Send a thank you notification to this user",
  move: "move",
  "move page": "move page",
  MovepageHint: "Change the title of %s",
  edit: "edit",
  "edit article": "edit article",
  editHint: "Change the content of %s",
  "edit talk": "edit talk",
  new: "new",
  "new topic": "new topic",
  newSectionHint: "Start a new section on %s",
  "null edit": "null edit",
  nullEditHint: "Submit an edit to %s, making no changes ",
  hist: "hist",
  history: "history",
  historyHint: "List the changes made to %s",
  last: "prev",
  lastEdit: "lastEdit",
  "mark patrolled": "mark patrolled",
  markpatrolledHint: "Mark this edit as patrolled",
  "Could not marked this edit as patrolled": "Could not marked this edit as patrolled",
  "show last edit": "most recent edit",
  "Show the last edit": "Show the effects of the most recent change",
  lastContrib: "lastContrib",
  "last set of edits": "latest edits",
  lastContribHint: "Show the net effect of changes made by the last editor",
  cur: "cur",
  diffCur: "diffCur",
  "Show changes since revision %s": "Show changes since revision %s",
  "%s old": "%s old",
  oldEdit: "oldEdit",
  purge: "purge",
  purgeHint: "Demand a fresh copy of %s",
  raw: "source",
  rawHint: "Download the source of %s",
  render: "simple",
  renderHint: "Show a plain HTML version of %s",
  "Show the edit made to get revision": "Show the edit made to get revision",
  sinceMe: "sinceMe",
  "changes since mine": "diff my edit",
  sinceMeHint: "Show changes since my last edit",
  "Couldn't find an edit by %s\nin the last %s edits to\n%s": "Couldn't find an edit by %s\nin the last %s edits to\n%s",
  eds: "eds",
  editors: "editors",
  editorListHint: "List the users who have edited %s",
  related: "related",
  relatedChanges: "relatedChanges",
  "related changes": "related changes",
  RecentchangeslinkedHint: "Show changes in articles related to %s",
  editOld: "editOld",
  rv: "rv",
  revert: "revert",
  revertHint: "Revert to %s",
  defaultpopupReviewedSummary: "Accepted by reviewing the [[Special:diff/%s/%s|difference]] between this version and previously accepted version using [[:enwiki:Wikipedia:Tools/Navigation_popups|popups]]",
  defaultpopupRedlinkSummary: "Removing link to empty page [[%s]] using [[:enwiki:Wikipedia:Tools/Navigation_popups|popups]]",
  defaultpopupFixDabsSummary: "Disambiguate [[%s]] to [[%s]] using [[:enwiki:Wikipedia:Tools/Navigation_popups|popups]]",
  defaultpopupFixRedirsSummary: "Redirect bypass from [[%s]] to [[%s]] using [[:enwiki:Wikipedia:Tools/Navigation_popups|popups]]",
  defaultpopupExtendedRevertSummary: "Revert to revision dated %s by %s, oldid %s using [[:enwiki:Wikipedia:Tools/Navigation_popups|popups]]",
  defaultpopupRevertToPreviousSummary: "Revert to the revision prior to revision %s using [[:enwiki:Wikipedia:Tools/Navigation_popups|popups]]",
  defaultpopupRevertSummary: "Revert to revision %s using [[:enwiki:Wikipedia:Tools/Navigation_popups|popups]]",
  defaultpopupQueriedRevertToPreviousSummary: "Revert to the revision prior to revision $1 dated $2 by $3 using [[:enwiki:Wikipedia:Tools/Navigation_popups|popups]]",
  defaultpopupQueriedRevertSummary: "Revert to revision $1 dated $2 by $3 using [[:enwiki:Wikipedia:Tools/Navigation_popups|popups]]",
  defaultpopupRmDabLinkSummary: "Remove link to dab page [[%s]] using [[:enwiki:Wikipedia:Tools/Navigation_popups|popups]]",
  Redirects: "Redirects",
  " to ": " to ",
  "Bypass redirect": "Bypass redirect",
  "Fix this redirect": "Fix this redirect",
  disambig: "disambig",
  disambigHint: "Disambiguate this link to [[%s]]",
  "Click to disambiguate this link to:": "Click to disambiguate this link to:",
  "remove this link": "remove this link",
  "remove all links to this page from this article": "remove all links to this page from this article",
  "remove all links to this disambig page from this article": "remove all links to this disambig page from this article",
  mainlink: "mainlink",
  wikiLink: "wikiLink",
  wikiLinks: "wikiLinks",
  "links here": "links here",
  whatLinksHere: "whatLinksHere",
  "what links here": "what links here",
  WhatlinkshereHint: "List the pages that are hyperlinked to %s",
  unwatchShort: "un",
  watchThingy: "watch",
  watchHint: "Add %s to my watchlist",
  unwatchHint: "Remove %s from my watchlist",
  "Only found one editor: %s made %s edits": "Only found one editor: %s made %s edits",
  "%s seems to be the last editor to the page %s": "%s seems to be the last editor to the page %s",
  rss: "rss",
  // diff previews
  "Diff truncated for performance reasons": "Diff truncated for performance reasons",
  "Old revision": "Old revision",
  "New revision": "New revision",
  "Something went wrong :-(": "Something went wrong :-(",
  "Empty revision, maybe non-existent": "Empty revision, maybe non-existent",
  "Unknown date": "Unknown date",
  // other special previews
  "Empty category": "Empty category",
  "Category members (%s shown)": "Category members (%s shown)",
  "No image links found": "No image links found",
  "File links": "File links",
  "No image found": "No image found",
  "Image from Commons": "Image from Commons",
  "Description page": "Description page",
  "Alt text:": "Alt text:",
  revdel: "Hidden revision",
  // user-related actions and info
  user: "user",
  "user&nbsp;page": "user&nbsp;page",
  "user talk": "user talk",
  "edit user talk": "edit user talk",
  "leave comment": "leave comment",
  email: "email",
  "email user": "email user",
  EmailuserHint: "Send an email to %s",
  space: "space",
  PrefixIndexHint: "Show pages in the userspace of %s",
  count: "count",
  "edit counter": "edit counter",
  editCounterLinkHint: "Count the contributions made by %s",
  contribs: "contribs",
  contributions: "contributions",
  deletedContribs: "deleted contributions",
  DeletedcontributionsHint: "List deleted edits made by %s",
  ContributionsHint: "List the contributions made by %s",
  log: "log",
  "user log": "user log",
  userLogHint: "Show %s's user log",
  arin: "ARIN lookup",
  "Look up %s in ARIN whois database": "Look up %s in the ARIN whois database",
  unblockShort: "un",
  block: "block",
  "block user": "block user",
  IpblocklistHint: "Unblock %s",
  BlockipHint: "Prevent %s from editing",
  "block log": "block log",
  blockLogHint: "Show the block log for %s",
  protectLogHint: "Show the protection log for %s",
  pageLogHint: "Show the page log for %s",
  deleteLogHint: "Show the deletion log for %s",
  "Invalid %s %s": "The option %s is invalid: %s",
  "No backlinks found": "No backlinks found",
  " and more": " and more",
  undo: "undo",
  undoHint: "undo this edit",
  "Download preview data": "Download preview data",
  "Invalid or IP user": "Invalid or IP user",
  "Not a registered username": "Not a registered username",
  BLOCKED: "BLOCKED",
  "Has blocks": "Has blocks",
  " edits since: ": " edits since: ",
  "last edit on ": "last edit on ",
  "he/him": "he/him",
  "she/her": "she/her",
  // Autoediting
  "Enter a non-empty edit summary or press cancel to abort": "Enter a non-empty edit summary or press cancel to abort",
  "Failed to get revision information, please edit manually.\n\n": "Failed to get revision information, please edit manually.\n\n",
  "The %s button has been automatically clicked. Please wait for the next page to load.": "The %s button has been automatically clicked. Please wait for the next page to load.",
  "Could not find button %s. Please check the settings in your javascript file.": "Could not find button %s. Please check the settings in your javascript file.",
  // Popups setup
  "Open full-size image": "Open full-size image",
  autoedit_version: "np20140416"
};
var popupString = (str) => {
  if (message !== void 0 && message && message[str]) {
    return message[str];
  }
  if (pg.string[str]) {
    return pg.string[str];
  }
  return str;
};
var tprintf = (str, subs) => {
  if (typeof subs !== typeof []) {
    subs = [subs];
  }
  return simplePrintf(popupString(str), subs);
};
//! src/Navigation_popups/modules/titles.ts
var Stringwrapper = class {
  value;
  /**
   * Wrapper for this.toString().indexOf()
   *
   * @param {string} x
   * @type integer
   */
  indexOf(x) {
    return this.toString().indexOf(x);
  }
  /**
   * Returns this.value.
   *
   * @type String
   */
  toString() {
    return this.value;
  }
  /**
   * Wrapper for {@source String#parenSplit} applied to this.toString()
   *
   * @param {string | RegExp} x
   * @type Array
   */
  split(x) {
    return this.toString().split(x);
  }
  /**
   * Wrapper for this.toString().substring()
   *
   * @param {number} x
   * @param {number} y (optional)
   * @type String
   */
  substring(x, y) {
    if (y === void 0) {
      return this.toString().slice(Math.max(0, x));
    }
    return this.toString().substring(x, y);
  }
  /**
   * Wrapper for this.toString().replace()
   *
   * @param {string | RegExp} x
   * @param {string} y
   * @type String
   */
  replace(x, y) {
    return this.toString().replace(x, y);
  }
};
var Title = class _Title extends Stringwrapper {
  anchor;
  ns;
  oldid;
  title;
  static fromURL = (h) => {
    return new _Title().fromURL(h);
  };
  static fromAnchor = (a) => {
    return new _Title().fromAnchor(a);
  };
  static fromWikiText = (txt) => {
    return new _Title().fromWikiText(txt);
  };
  constructor(val) {
    super();
    this.value = null;
    this.anchor = "";
    this.setUtf(val);
  }
  /**
   * Returns the canonical representation of the article title, optionally without anchor.
   *
   * @param {boolean} omitAnchor
   * @fixme Decide specs for anchor
   * @return String The article title and the anchor.
   */
  toString(omitAnchor) {
    return this.value + (!omitAnchor && this.anchor ? `#${this.anchorString()}` : "");
  }
  anchorString() {
    if (!this.anchor) {
      return "";
    }
    const split = this.anchor.split(/((?:\.[\dA-F]{2})+)/);
    const len = split.length;
    let value;
    for (let j = 1; j < len; j += 2) {
      value = split[j].split(".").join("%");
      try {
        value = decodeURIComponent(value);
      } catch {
      }
      split[j] = value.split("_").join(" ");
    }
    return split.join("");
  }
  urlAnchor() {
    const split = this.anchor.split("/((?:[%][0-9A-F]{2})+)/");
    const len = split.length;
    for (let j = 1; j < len; j += 2) {
      split[j] = split[j].split("%").join(".");
    }
    return split.join("");
  }
  anchorFromUtf(str) {
    this.anchor = encodeURIComponent(str.split(" ").join("_")).split("%3A").join(":").split("'").join("%27").split("%").join(".");
  }
  fromURL(h) {
    if (typeof h !== "string") {
      this.value = null;
      return this;
    }
    const splitted = h.split("?");
    splitted[0] = splitted[0].split("&").join("%26");
    h = splitted.join("?");
    const contribs = pg.re.contribs.exec(h);
    if (contribs) {
      if (contribs[1] === "title=") {
        contribs[3] = contribs[3].split("+").join(" ");
      }
      const u = new _Title(contribs[3]);
      this.setUtf(_Title.decodeNasties(`${mw.config.get("wgFormattedNamespaces")[pg.nsUserId]}:${u.stripNamespace()}`));
      return this;
    }
    const email = pg.re.email.exec(h);
    if (email) {
      this.setUtf(_Title.decodeNasties(`${mw.config.get("wgFormattedNamespaces")[pg.nsUserId]}:${new _Title(email[3]).stripNamespace()}`));
      return this;
    }
    const backlinks = pg.re.backlinks.exec(h);
    if (backlinks) {
      this.setUtf(_Title.decodeNasties(new _Title(backlinks[3])));
      return this;
    }
    const specialdiff = pg.re.specialdiff.exec(h);
    if (specialdiff) {
      this.setUtf(_Title.decodeNasties(new _Title(`${mw.config.get("wgFormattedNamespaces")[pg.nsSpecialId]}:Diff`)));
      return this;
    }
    const m = pg.re.main.exec(h);
    if (m === null) {
      this.value = null;
    } else {
      const fromBotInterface = /\?(.+&)?title=/.test(h);
      if (fromBotInterface) {
        m[2] = m[2].split("+").join("_");
      }
      const extracted = m[2] + (m[3] ? `#${m[3]}` : "");
      this.setUtf(_Title.decodeNasties(extracted));
    }
    return this;
  }
  static decodeNasties(txt) {
    try {
      let ret = decodeURI(_Title.decodeEscapes(txt));
      ret = ret.replace(/[ _]*$/, "");
      return ret;
    } catch {
      return txt;
    }
  }
  // Decode valid %-encodings, otherwise escape them
  static decodeEscapes(txt) {
    const split = txt.split(/((?:%[\dA-Fa-f]{2})+)/);
    const len = split.length;
    if (len === 1) {
      return split[0].replace(/%(?![\dA-Fa-f]{2})/g, "%25");
    }
    for (let i = 1; i < len; i += 2) {
      split[i] = decodeURIComponent(split[i]);
    }
    return split.join("");
  }
  fromAnchor(a) {
    if (!a) {
      this.value = null;
      return this;
    }
    return this.fromURL(a.href);
  }
  fromWikiText(txt) {
    txt = myDecodeURI(txt);
    this.setUtf(txt);
    return this;
  }
  hintValue() {
    if (!this.value) {
      return "";
    }
    return safeDecodeURI(this.value);
  }
  toUserName(withNs) {
    if (this.namespaceId() !== pg.nsUserId && this.namespaceId() !== pg.nsUsertalkId) {
      this.value = null;
      return;
    }
    this.value = (withNs ? `${mw.config.get("wgFormattedNamespaces")[pg.nsUserId]}:` : "") + this.stripNamespace().split("/")[0];
  }
  userName(withNs) {
    const t = new _Title(this.value);
    t.toUserName(withNs);
    if (t.value) {
      return t;
    }
    return null;
  }
  toTalkPage() {
    if (this.value === null) {
      return null;
    }
    const namespaceId = this.namespaceId();
    if (namespaceId >= 0 && namespaceId % 2 === 0) {
      const localizedNamespace = mw.config.get("wgFormattedNamespaces")[namespaceId + 1];
      if (localizedNamespace !== void 0) {
        this.value = localizedNamespace === "" ? this.stripNamespace() : `${localizedNamespace.split(" ").join("_")}:${this.stripNamespace()}`;
        return this.value;
      }
    }
    this.value = null;
    return null;
  }
  // Return canonical, localized namespace
  namespace() {
    return mw.config.get("wgFormattedNamespaces")[this.namespaceId()];
  }
  namespaceId() {
    const n = this.value.indexOf(":");
    if (n === -1) {
      return 0;
    }
    const namespaceId = mw.config.get("wgNamespaceIds")[this.value.slice(0, Math.max(0, n)).split(" ").join("_").toLowerCase()];
    if (namespaceId === void 0) {
      return 0;
    }
    return namespaceId;
  }
  talkPage() {
    const t = new _Title(this.value);
    t.toTalkPage();
    if (t.value) {
      return t;
    }
    return null;
  }
  isTalkPage() {
    if (this.talkPage() === null) {
      return true;
    }
    return false;
  }
  toArticleFromTalkPage() {
    if (this.value === null) {
      return null;
    }
    const namespaceId = this.namespaceId();
    if (namespaceId >= 0 && namespaceId % 2 === 1) {
      const localizedNamespace = mw.config.get("wgFormattedNamespaces")[namespaceId - 1];
      if (localizedNamespace !== void 0) {
        this.value = localizedNamespace === "" ? this.stripNamespace() : `${localizedNamespace.split(" ").join("_")}:${this.stripNamespace()}`;
        return this.value;
      }
    }
    this.value = null;
    return null;
  }
  articleFromTalkPage() {
    const t = new _Title(this.value);
    t.toArticleFromTalkPage();
    if (t.value) {
      return t;
    }
    return null;
  }
  articleFromTalkOrArticle() {
    const t = new _Title(this.value);
    if (t.toArticleFromTalkPage()) {
      return t;
    }
    return this;
  }
  isIpUser() {
    return pg.re.ipUser.test(this.userName());
  }
  stripNamespace() {
    const n = this.value.indexOf(":");
    if (n === -1) {
      return this.value;
    }
    const namespaceId = this.namespaceId();
    if (namespaceId === pg.nsMainspaceId) {
      return this.value;
    }
    return this.value.slice(Math.max(0, n + 1));
  }
  setUtf(value) {
    if (!value) {
      this.value = "";
      return;
    }
    const anch = value.indexOf("#");
    if (anch === -1) {
      this.value = value.split("_").join(" ");
      this.anchor = "";
      return;
    }
    this.value = value.slice(0, Math.max(0, anch)).split("_").join(" ");
    this.anchor = value.slice(Math.max(0, anch + 1));
    this.ns = null;
  }
  setUrl(urlfrag) {
    const anch = urlfrag.indexOf("#");
    this.value = safeDecodeURI(urlfrag.slice(0, Math.max(0, anch)));
    this.anchor = this.value.slice(Math.max(0, anch + 1));
  }
  append(x) {
    this.setUtf(this.value + x);
  }
  urlString(x) {
    x || (x = {});
    let v = this.toString(true);
    if (!x.omitAnchor && this.anchor) {
      v += `#${this.urlAnchor()}`;
    }
    if (!x.keepSpaces) {
      v = v.split(" ").join("_");
    }
    return encodeURI(v).split("&").join("%26").split("?").join("%3F").split("+").join("%2B");
  }
  removeAnchor() {
    return new _Title(this.toString(true));
  }
  toUrl() {
    return pg.wiki.titlebase + this.urlString();
  }
};
var parseParams = (url) => {
  const specialDiff = pg.re.specialdiff.exec(url);
  if (specialDiff) {
    const split = specialDiff[1].split("/");
    if (split.length === 1) {
      return {
        oldid: split[0],
        diff: "prev"
      };
    } else if (split.length === 2) {
      return {
        oldid: split[0],
        diff: split[1]
      };
    }
  }
  const ret = {};
  if (!url.includes("?")) {
    return ret;
  }
  url = url.split("#")[0];
  const s = url.split("?").slice(1).join(",");
  const t = s.split("&");
  for (const element of t) {
    const z = element.split("=");
    z.push(null);
    ret[z[0]] = z[1];
  }
  if (ret.diff && ret.oldid === void 0) {
    ret.oldid = "prev";
  }
  if (ret.oldid && (ret.oldid === "prev" || ret.oldid === "next" || ret.oldid === "cur")) {
    const helper = ret.diff;
    ret.diff = ret.oldid;
    ret.oldid = helper;
  }
  return ret;
};
var myDecodeURI = (str) => {
  let ret;
  try {
    ret = decodeURI(str.toString());
  } catch {
    return str;
  }
  for (let i = 0; i < pg.misc.decodeExtras.length; ++i) {
    const {
      from
    } = pg.misc.decodeExtras[i];
    const {
      to
    } = pg.misc.decodeExtras[i];
    ret = ret.split(from).join(to);
  }
  return ret;
};
var safeDecodeURI = (str) => {
  const ret = myDecodeURI(str);
  return ret || str;
};
var isDisambig = (data, article) => {
  if (!getValueOf("popupAllDabsStubs") && article.namespace()) {
    return false;
  }
  return !article.isTalkPage() && pg.re.disambig.test(data);
};
var stubCount = (data, article) => {
  if (!getValueOf("popupAllDabsStubs") && article.namespace()) {
    return false;
  }
  let sectStub = 0;
  let realStub = 0;
  if (pg.re.stub.test(data)) {
    const s = data.split(pg.re.stub);
    for (let i = 1; i < s.length; i += 2) {
      if (s[i]) {
        ++sectStub;
      } else {
        ++realStub;
      }
    }
  }
  return {
    real: realStub,
    sect: sectStub
  };
};
var isValidImageName = (str) => {
  return !str.includes("{");
};
var isInStrippableNamespace = (article) => {
  return article.namespaceId() !== 0;
};
var isInMainNamespace = (article) => {
  return article.namespaceId() === 0;
};
var anchorContainsImage = (a) => {
  if (a === null) {
    return false;
  }
  const kids = a.childNodes;
  for (const kid of kids) {
    if (kid.nodeName === "IMG") {
      return true;
    }
  }
  return false;
};
var markNopopupSpanLinksDone = false;
var isPopupLink = (a) => {
  if (!markNopopupSpanLinksDone) {
    markNopopupSpanLinks();
  }
  if (a.inNopopupSpan) {
    return false;
  }
  if (a.onmousedown || a.getAttribute("nopopup")) {
    return false;
  }
  const h = a.href;
  if (h === `${document.location.href}#`) {
    return false;
  }
  if (!pg.re.basenames.test(h)) {
    return false;
  }
  if (!pg.re.urlNoPopup.test(h)) {
    return true;
  }
  return (pg.re.email.test(h) || pg.re.contribs.test(h) || pg.re.backlinks.test(h) || pg.re.specialdiff.test(h)) && !h.includes("&limit=");
};
var markNopopupSpanLinks = function markNopopupSpanLinks2() {
  if (!getValueOf("popupOnlyArticleLinks")) {
    fixVectorMenuPopups();
  }
  const $body = $("body");
  const s = $body.find(".nopopups").toArray();
  for (const element of s) {
    const as = element.querySelectorAll("a");
    for (const a of as) {
      a.inNopopupSpan = true;
    }
  }
  markNopopupSpanLinksDone = true;
};
var fixVectorMenuPopups = () => {
  const $body = $("body");
  $body.find("nav.vector-menu h3:first a:first").prop("inNopopupSpan", true);
};
//! src/Navigation_popups/modules/pageinfo.ts
var popupFilterPageSize = (data) => {
  return formatBytes(data.length);
};
var popupFilterCountLinks = (data) => {
  const num = countLinks(data);
  return `${String(num)}&nbsp;${num === 1 ? popupString("wikiLink") : popupString("wikiLinks")}`;
};
var popupFilterCountImages = (data) => {
  const num = countImages(data);
  return `${String(num)}&nbsp;${num === 1 ? popupString("image") : popupString("images")}`;
};
var popupFilterCountCategories = (data) => {
  const num = countCategories(data);
  return `${String(num)}&nbsp;${num === 1 ? popupString("category") : popupString("categories")}`;
};
var popupFilterLastModified = (_data, download) => {
  const lastmod = download.lastModified;
  const now = /* @__PURE__ */ new Date();
  if (lastmod && getValueOf("popupLastModified")) {
    const age = Number(now) - Number(lastmod);
    return tprintf("%s old", [formatAge(age)]).replace(/ /g, "&nbsp;");
  }
  return "";
};
var formatAge = (age) => {
  let a = 0 + age;
  const aa = a;
  const seclen = 1e3;
  const minlen = 60 * seclen;
  const hourlen = 60 * minlen;
  const daylen = 24 * hourlen;
  const weeklen = 7 * daylen;
  const numweeks = (a - a % weeklen) / weeklen;
  a -= numweeks * weeklen;
  const sweeks = addunit(numweeks, "week");
  const numdays = (a - a % daylen) / daylen;
  a -= numdays * daylen;
  const sdays = addunit(numdays, "day");
  const numhours = (a - a % hourlen) / hourlen;
  a -= numhours * hourlen;
  const shours = addunit(numhours, "hour");
  const nummins = (a - a % minlen) / minlen;
  a -= nummins * minlen;
  const smins = addunit(nummins, "minute");
  const numsecs = (a - a % seclen) / seclen;
  a -= numsecs * seclen;
  const ssecs = addunit(numsecs, "second");
  if (aa > 4 * weeklen) {
    return sweeks;
  }
  if (aa > weeklen) {
    return `${sweeks} ${sdays}`;
  }
  if (aa > daylen) {
    return `${sdays} ${shours}`;
  }
  if (aa > 6 * hourlen) {
    return shours;
  }
  if (aa > hourlen) {
    return `${shours} ${smins}`;
  }
  if (aa > 10 * minlen) {
    return smins;
  }
  if (aa > minlen) {
    return `${smins} ${ssecs}`;
  }
  return ssecs;
};
var addunit = (num, str) => {
  return `${num} ${num === 1 ? popupString(str) : popupString(`${str}s`)}`;
};
var runPopupFilters = (list, data, download) => {
  const ret = [];
  for (const element of list) {
    if (element && typeof element === "function") {
      const s = element(data, download, download.owner.article);
      if (s) {
        ret.push(s);
      }
    }
  }
  return ret;
};
var getPageInfo = (data, download) => {
  if (!data || data.length === 0) {
    return popupString("Empty page");
  }
  const popupFilters = getValueOf("popupFilters") || [];
  const extraPopupFilters = getValueOf("extraPopupFilters") || [];
  const pageInfoArray = runPopupFilters([...popupFilters, ...extraPopupFilters], data, download);
  let pageInfo = pageInfoArray.join(", ");
  if (pageInfo !== "") {
    pageInfo = upcaseFirst(pageInfo) ?? pageInfo;
  }
  return pageInfo;
};
var countLinks = (wikiText) => {
  return wikiText.split("[[").length - 1;
};
var countImages = (wikiText) => {
  return (wikiText.split(pg.re.image).length - 1) / (pg.re.imageBracketCount + 1);
};
var countCategories = (wikiText) => {
  return (wikiText.split(pg.re.category).length - 1) / (pg.re.categoryBracketCount + 1);
};
var popupFilterStubDetect = (data, _download, article) => {
  const counts = stubCount(data, article);
  if (counts.real) {
    return popupString("stub");
  }
  if (counts.sect) {
    return popupString("section stub");
  }
  return "";
};
var popupFilterDisambigDetect = (data, _download, article) => {
  if (!getValueOf("popupAllDabsStubs") && article.namespace()) {
    return "";
  }
  return isDisambig(data, article) ? popupString("disambig") : "";
};
var formatBytes = (num) => {
  return num > 949 ? Math.round(num / 100) / 10 + popupString("kB") : `${num}&nbsp;${popupString("bytes")}`;
};
//! src/Navigation_popups/modules/options.ts
var defaultize = (x) => {
  var _pg$option;
  (_pg$option = pg.option)[x] ?? (_pg$option[x] = window[x] === void 0 ? pg.optionDefault[x] : window[x]);
};
var newOption = (x, def) => {
  pg.optionDefault[x] = def;
};
var setDefault = (x, def) => {
  return newOption(x, def);
};
var getValueOf = (varName) => {
  defaultize(varName);
  return pg.option[varName];
};
var setOptions = () => {
  let userIsSysop = false;
  const userGroups = mw.config.get("wgUserGroups");
  if (userGroups) {
    for (let g = 0; g < userGroups.length; ++g) {
      if (userGroups[g] === "sysop") {
        userIsSysop = true;
      }
      if (userGroups[g] === "steward") {
        userIsSysop = true;
      }
    }
  }
  newOption("popupDelay", 0.5);
  newOption("popupHideDelay", 0.5);
  newOption("simplePopups", false);
  newOption("popupStructure", "shortmenus");
  newOption("popupActionsMenu", true);
  newOption("popupSetupMenu", true);
  newOption("popupAdminLinks", userIsSysop);
  newOption("popupShortcutKeys", false);
  newOption("popupHistoricalLinks", true);
  newOption("popupOnlyArticleLinks", true);
  newOption("removeTitles", true);
  newOption("popupMaxWidth", 350);
  newOption("popupSimplifyMainLink", true);
  newOption("popupAppendRedirNavLinks", true);
  newOption("popupTocLinks", false);
  newOption("popupSubpopups", true);
  newOption(
    "popupDragHandle",
    false
    /* 'popupTopLinks' */
  );
  newOption("popupLazyPreviews", true);
  newOption("popupLazyDownloads", true);
  newOption("popupAllDabsStubs", false);
  newOption("popupDebugging", false);
  newOption("popupActiveNavlinks", true);
  newOption("popupModifier", false);
  newOption("popupModifierAction", "enable");
  newOption("popupDraggable", true);
  newOption("popupReview", false);
  newOption("popupLocale", false);
  newOption("popupDateTimeFormatterOptions", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
  newOption("popupDateFormatterOptions", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  newOption("popupTimeFormatterOptions", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
  newOption("popupImages", true);
  newOption("imagePopupsForImages", true);
  newOption("popupNeverGetThumbs", false);
  newOption("popupThumbAction", "imagepage");
  newOption("popupImageSize", 60);
  newOption("popupImageSizeLarge", 200);
  newOption("popupFixRedirs", false);
  newOption("popupRedirAutoClick", "wpDiff");
  newOption("popupFixDabs", false);
  newOption("popupDabsAutoClick", "wpDiff");
  newOption("popupRevertSummaryPrompt", false);
  newOption("popupMinorReverts", false);
  newOption("popupRedlinkRemoval", false);
  newOption("popupRedlinkAutoClick", "wpDiff");
  newOption("popupWatchDisambiggedPages", null);
  newOption("popupWatchRedirredPages", null);
  newOption("popupDabWiktionary", "last");
  newOption("popupNavLinks", true);
  newOption("popupNavLinkSeparator", " &sdot; ");
  newOption("popupLastEditLink", true);
  newOption("popupEditCounterTool", "supercount");
  newOption("popupEditCounterUrl", "");
  newOption("popupPreviews", true);
  newOption("popupSummaryData", true);
  newOption("popupMaxPreviewSentences", 5);
  newOption("popupMaxPreviewCharacters", 600);
  newOption("popupLastModified", true);
  newOption("popupPreviewKillTemplates", true);
  newOption("popupPreviewRawTemplates", true);
  newOption("popupPreviewFirstParOnly", true);
  newOption("popupPreviewCutHeadings", true);
  newOption("popupPreviewButton", false);
  newOption("popupPreviewButtonEvent", "click");
  newOption("popupPreviewDiffs", true);
  newOption("popupDiffMaxLines", 100);
  newOption("popupDiffContextLines", 2);
  newOption("popupDiffContextCharacters", 40);
  newOption("popupDiffDates", true);
  newOption("popupDiffDatePrinter", "toLocaleString");
  newOption("popupReviewedSummary", popupString("defaultpopupReviewedSummary"));
  newOption("popupFixDabsSummary", popupString("defaultpopupFixDabsSummary"));
  newOption("popupExtendedRevertSummary", popupString("defaultpopupExtendedRevertSummary"));
  newOption("popupRevertSummary", popupString("defaultpopupRevertSummary"));
  newOption("popupRevertToPreviousSummary", popupString("defaultpopupRevertToPreviousSummary"));
  newOption("popupQueriedRevertSummary", popupString("defaultpopupQueriedRevertSummary"));
  newOption("popupQueriedRevertToPreviousSummary", popupString("defaultpopupQueriedRevertToPreviousSummary"));
  newOption("popupFixRedirsSummary", popupString("defaultpopupFixRedirsSummary"));
  newOption("popupRedlinkSummary", popupString("defaultpopupRedlinkSummary"));
  newOption("popupRmDabLinkSummary", popupString("defaultpopupRmDabLinkSummary"));
  newOption("popupHistoryLimit", 50);
  newOption("popupFilters", [popupFilterStubDetect, popupFilterDisambigDetect, popupFilterPageSize, popupFilterCountLinks, popupFilterCountImages, popupFilterCountCategories, popupFilterLastModified]);
  newOption("extraPopupFilters", []);
  newOption("popupOnEditSelection", "cursor");
  newOption("popupPreviewHistory", true);
  newOption("popupImageLinks", true);
  newOption("popupCategoryMembers", true);
  newOption("popupUserInfo", true);
  newOption("popupHistoryPreviewLimit", 25);
  newOption("popupContribsPreviewLimit", 25);
  newOption("popupRevDelUrl", "//en.wikipedia.org/wiki/Wikipedia:Revision_deletion");
  newOption("popupShowGender", true);
  newOption("popupNewWindows", false);
  newOption("popupLinksNewWindow", {
    lastContrib: true,
    sinceMe: true
  });
  newOption("popupDabRegexp", String.raw`\{\{\s*(d(ab|isamb(ig(uation)?)?)|(((geo|hn|road?|school|number)dis)|[234][lc][acw]|(road|ship)index))\s*(\|[^}]*)?\}\}|is a .*disambiguation.*page`);
  newOption("popupAnchorRegexp", "anchors?");
  newOption("popupStubRegexp", "(sect)?stub[}][}]|This .*-related article is a .*stub");
  newOption("popupImageVarsRegexp", "image|image_(?:file|skyline|name|flag|seal)|cover|badge|logo");
};
//! src/Navigation_popups/modules/namespaces.ts
var setNamespaces = () => {
  pg.nsSpecialId = -1;
  pg.nsMainspaceId = 0;
  pg.nsImageId = 6;
  pg.nsUserId = 2;
  pg.nsUsertalkId = 3;
  pg.nsCategoryId = 14;
  pg.nsTemplateId = 10;
};
var setRedirs = () => {
  const r = "redirect";
  const R = "REDIRECT";
  const redirLists = {
    ar: [R, "تحويل"],
    be: [r, "перанакіраваньне"],
    bg: [r, "пренасочване", "виж"],
    bs: [r, "Preusmjeri", "preusmjeri", "PREUSMJERI"],
    bn: [R, "পুনর্নির্দেশ"],
    cs: [R, "PŘESMĚRUJ"],
    cy: [r, "ail-cyfeirio"],
    de: [R, "WEITERLEITUNG"],
    el: [R, "ΑΝΑΚΑΤΕΥΘΥΝΣΗ"],
    eo: [R, "ALIDIREKTU", "ALIDIREKTI"],
    es: [R, "REDIRECCIÓN"],
    et: [r, "suuna"],
    ga: [r, "athsheoladh"],
    gl: [r, "REDIRECCIÓN", "REDIRECIONAMENTO"],
    he: [R, "הפניה"],
    hu: [R, "ÁTIRÁNYÍTÁS"],
    is: [r, "tilvísun", "TILVÍSUN"],
    it: [R, "RINVIA", "Rinvia"],
    ja: [R, "転送"],
    mk: [r, "пренасочување", "види"],
    nds: [r, "wiederleiden"],
    "nds-nl": [R, "DEURVERWIEZING", "DUURVERWIEZING"],
    nl: [R, "DOORVERWIJZING"],
    nn: [r, "omdiriger"],
    pl: [R, "PATRZ", "PRZEKIERUJ", "TAM"],
    pt: [R, "redir"],
    ru: [R, "ПЕРЕНАПРАВЛЕНИЕ", "ПЕРЕНАПР"],
    sk: [r, "presmeruj"],
    sr: [r, "Преусмери", "преусмери", "ПРЕУСМЕРИ", "Preusmeri", "preusmeri", "PREUSMERI"],
    tt: [R, "yünältü", "перенаправление", "перенапр"],
    uk: [R, "ПЕРЕНАПРАВЛЕННЯ", "ПЕРЕНАПР"],
    vi: [r, "đổi"],
    yi: [R, "ווייטערפירן"],
    zh: [R, "重定向"]
    // no comma
  };
  const redirList = redirLists[pg.wiki.lang] || [r, R];
  pg.re.redirect = new RegExp(`^\\s*[#](${redirList.join("|")}).*?\\[{2}([^\\|\\]]*)(|[^\\]]*)?\\]{2}\\s*(.*)`, "i");
};
var setInterwiki = () => {
  if (pg.wiki.wikimedia) {
    pg.wiki.interwiki = "aa|ab|ace|af|ak|als|am|an|ang|ar|arc|arz|as|ast|av|ay|az|ba|bar|bat-smg|bcl|be|be-x-old|bg|bh|bi|bjn|bm|bn|bo|bpy|br|bs|bug|bxr|ca|cbk-zam|cdo|ce|ceb|ch|cho|chr|chy|ckb|co|cr|crh|cs|csb|cu|cv|cy|da|de|diq|dsb|dv|dz|ee|el|eml|en|eo|es|et|eu|ext|fa|ff|fi|fiu-vro|fj|fo|fr|frp|frr|fur|fy|ga|gag|gan|gd|gl|glk|gn|got|gu|gv|ha|hak|haw|he|hi|hif|ho|hr|hsb|ht|hu|hy|hz|ia|id|ie|ig|ii|ik|ilo|io|is|it|iu|ja|jbo|jv|ka|kaa|kab|kbd|kg|ki|kj|kk|kl|km|kn|ko|koi|kr|krc|ks|ksh|ku|kv|kw|ky|la|lad|lb|lbe|lg|li|lij|lmo|ln|lo|lt|ltg|lv|map-bms|mdf|mg|mh|mhr|mi|mk|ml|mn|mo|mr|mrj|ms|mt|mus|mwl|my|myv|mzn|na|nah|nap|nds|nds-nl|ne|new|ng|nl|nn|no|nov|nrm|nv|ny|oc|om|or|os|pa|pag|pam|pap|pcd|pdc|pfl|pi|pih|pl|pms|pnb|pnt|ps|pt|qu|rm|rmy|rn|ro|roa-rup|roa-tara|ru|rue|rw|sa|sah|sc|scn|sco|sd|se|sg|sh|si|simple|sk|sl|sm|sn|so|sq|sr|srn|ss|st|stq|su|sv|sw|szl|ta|te|tet|tg|th|ti|tk|tl|tn|to|tpi|tr|ts|tt|tum|tw|ty|udm|ug|uk|ur|uz|ve|vec|vi|vls|vo|wa|war|wo|wuu|xal|xh|yi|yo|za|zea|zh|zh-classical|zh-min-nan|zh-yue|zu";
    pg.re.interwiki = new RegExp(`^${pg.wiki.interwiki}:`);
  } else {
    pg.wiki.interwiki = null;
    pg.re.interwiki = /^$/;
  }
};
var nsRe = (namespaceId) => {
  const imageNamespaceVariants = [];
  for (const [_localizedNamespaceLc, _namespaceId] of Object.entries(mw.config.get("wgNamespaceIds"))) {
    if (_namespaceId !== namespaceId) {
      continue;
    }
    const localizedNamespaceLc = upcaseFirst(_localizedNamespaceLc) ?? "";
    imageNamespaceVariants.push(mw.util.escapeRegExp(localizedNamespaceLc).split(" ").join("[ _]"), mw.util.escapeRegExp(encodeURI(localizedNamespaceLc)));
  }
  return `(?:${imageNamespaceVariants.join("|")})`;
};
var nsReImage = () => {
  return nsRe(pg.nsImageId);
};
//! src/Navigation_popups/modules/api.ts
var import_ext_gadget2 = require("ext.gadget.Util");
var api = (0, import_ext_gadget2.initMwApi)("Navigation popups/1.0");
//! src/Navigation_popups/modules/debug.ts
var setupDebugging = () => {
  if (window.popupDebug) {
    window.log = (x) => {
      console.log(x);
    };
    window.errlog = (x) => {
      console.error(`[Popups] ${x}`);
    };
    log("Initializing logger");
  } else {
    window.log = () => {
    };
    window.errlog = () => {
    };
  }
};
//! src/Navigation_popups/modules/livepreview.ts
var Insta = {};
var setupLivePreview = () => {
  var _Insta$conf$user;
  Insta.conf = {
    baseUrl: "",
    user: {},
    wiki: {
      lang: pg.wiki.lang,
      interwiki: pg.wiki.interwiki,
      default_thumb_width: 180
    },
    paths: {
      articles: `${pg.wiki.articlePath}/`,
      // Only used for Insta previews with images. (not in popups)
      math: "/math/",
      images: "https://tu.zhongwen.wiki/images/qiuwenbaike/zh/",
      images_fallback: "//wm.zhongwen.wiki/commons/"
    },
    locale: {
      user: mw.config.get("wgFormattedNamespaces")[pg.nsUserId],
      image: mw.config.get("wgFormattedNamespaces")[pg.nsImageId],
      category: mw.config.get("wgFormattedNamespaces")[pg.nsCategoryId],
      // shouldn't be used in popup previews, i think
      months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    }
  };
  (_Insta$conf$user = Insta.conf.user).name || (_Insta$conf$user.name = "Qiuwen Baike contributors");
  Insta.conf.user.signature = `[[${Insta.conf.locale.user}:${Insta.conf.user.name}|${Insta.conf.user.name}]]`;
  Insta.BLOCK_IMAGE = new RegExp(`^\\[\\[(?:File|Image|${Insta.conf.locale.image}):.*?\\|.*?(?:frame|thumbnail|thumb|none|right|left|center)`, "i");
};
Insta.dump = function(from, to) {
  if (typeof from === "string") {
    from = document.getElementById(`${from}`);
  }
  if (typeof to === "string") {
    to = document.getElementById(`${to}`);
  }
  to.innerHTML = this.convert(from.value);
};
Insta.convert = (wiki) => {
  const ll = typeof wiki === "string" ? wiki.replace(/\r/g, "").split(/\n/) : wiki;
  let o = "";
  let p = 0;
  let r;
  const remain = () => {
    return ll.length;
  };
  const sh = () => {
    return ll.shift();
  };
  const ps = (s) => {
    o += s;
  };
  const f = function f2(...args) {
    let i = 1;
    const a = args;
    let [f3] = a;
    let o2 = "";
    let c;
    let p2;
    for (; i < a.length; i++) {
      if ((p2 = f3.indexOf("?")) + 1) {
        c = f3.charAt(p2 + 1) === "?" ? 1 : 0;
        i -= c;
        o2 += f3.slice(0, Math.max(0, p2)) + (c ? "?" : a[i]);
        f3 = f3.slice(p2 + 1 + c);
      } else {
        break;
      }
    }
    return o2 + f3;
  };
  const html_entities = (s) => {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  };
  const htmlescape_text = (s) => {
    return s.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/:/g, "&#58;").replace(/\[/g, "&#91;").replace(/]/g, "&#93;");
  };
  const htmlescape_attr = (s) => {
    return htmlescape_text(s).replace(/'/g, "&#39;").replace(/"/g, "&quot;");
  };
  const str_imatch = (a, b) => {
    let i;
    let l;
    for (i = 0, l = Math.min(a.length, b.length); i < l; i++) {
      if (a.charAt(i) !== b.charAt(i)) {
        break;
      }
    }
    return i;
  };
  const compareLineStringOrReg = (c) => {
    return typeof c === "string" ? ll[0] && ll[0].slice(0, c.length) === c : r = ll[0] && ll[0].match(c);
  };
  const compareLineString = (c) => {
    return ll[0] === c;
  };
  const charAtPoint = (p2) => {
    return ll[0].charAt(p2);
  };
  const endl = (s) => {
    ps(s);
    sh();
  };
  const parse_list = () => {
    let prev = "";
    while (remain() && compareLineStringOrReg(/^([#*:;]+)(.*)$/)) {
      const l_match = r;
      sh();
      const ipos = str_imatch(prev, l_match[1]);
      for (let prevPos = prev.length - 1; prevPos >= ipos; prevPos--) {
        const pi = prev.charAt(prevPos);
        if (pi === "*") {
          ps("</ul>");
        } else if (pi === "#") {
          ps("</ol>");
        } else if (["", "*", "#"].indexOf(l_match[1].charAt(prevPos))) {
          ps("</dl>");
        }
      }
      for (let matchPos = ipos; matchPos < l_match[1].length; matchPos++) {
        const li = l_match[1].charAt(matchPos);
        if (li === "*") {
          ps("<ul>");
        } else if (li === "#") {
          ps("<ol>");
        } else if (["", "*", "#"].indexOf(prev.charAt(matchPos))) {
          ps("<dl>");
        }
      }
      switch (l_match[1].at(-1)) {
        case "*":
        case "#":
          ps(`<li>${parse_inline_nowiki(l_match[2])}`);
          break;
        case ";": {
          ps("<dt>");
          const dt_match = l_match[2].match(/(.*?)(:.*?)$/);
          if (dt_match) {
            ps(parse_inline_nowiki(dt_match[1]));
            ll.unshift(dt_match[2]);
          } else {
            ps(parse_inline_nowiki(l_match[2]));
          }
          break;
        }
        case ":":
          ps(`<dd>${parse_inline_nowiki(l_match[2])}`);
      }
      [, prev] = l_match;
    }
    for (let i = prev.length - 1; i >= 0; i--) {
      ps(f("</?>", prev.charAt(i) === "*" ? "ul" : prev.charAt(i) === "#" ? "ol" : "dl"));
    }
  };
  const parse_table = () => {
    endl(f("<table>", compareLineStringOrReg(/^{\|( .*)$/) ? r[1] : ""));
    for (; remain(); ) {
      if (compareLineStringOrReg("|")) {
        switch (charAtPoint(1)) {
          case "}":
            endl("</table>");
            return;
          case "-":
            endl(f("<tr>", compareLineStringOrReg(/\|-*(.*)/)[1]));
            break;
          default:
            parse_table_data();
        }
      } else if (compareLineStringOrReg("!")) {
        parse_table_data();
      } else {
        sh();
      }
    }
  };
  const parse_table_data = () => {
    let td_line;
    let match_i;
    const td_match = sh().match(/^(\|\+|\||!)((?:([^[|]*?)\|(?!\|))?(.*))$/);
    if (td_match[1] === "|+") {
      ps("<caption");
    } else {
      ps(`<t${td_match[1] === "|" ? "d" : "h"}`);
    }
    if (td_match[3]) {
      match_i = 4;
    } else {
      match_i = 2;
    }
    ps(">");
    if (td_match[1] === "|+") {
      ps(parse_inline_nowiki(td_match[match_i]));
    } else {
      td_line = td_match[match_i].split(td_match[1] === "|" ? "||" : /\|\||!!/);
      ps(parse_inline_nowiki(td_line.shift()));
      while (td_line.length > 0) {
        ll.unshift(td_match[1] + td_line.pop());
      }
    }
    let tc = 0;
    const td = [];
    while (remain()) {
      td.push(sh());
      if (compareLineStringOrReg("|")) {
        if (!tc) {
          break;
        } else if (charAtPoint(1) === "}") {
          tc--;
        }
      } else if (!tc && compareLineStringOrReg("!")) {
        break;
      } else if (compareLineStringOrReg("{|")) {
        tc++;
      }
    }
    if (td.length > 0) {
      ps(Insta.convert(td));
    }
  };
  const parse_pre = () => {
    ps("<pre>");
    do {
      endl(`${parse_inline_nowiki(ll[0].slice(1))}
`);
    } while (remain() && compareLineStringOrReg(" "));
    ps("</pre>");
  };
  const parse_block_image = () => {
    ps(parse_image(sh()));
  };
  const parse_image = (str) => {
    let tag = str.substring(str.indexOf(":") + 1, str.length - 2);
    let _width;
    let attr = [];
    let _filename;
    let _caption = "";
    let _thumb = 0;
    let _frame = 0;
    let _center = 0;
    let _align = "";
    if (/\|/.test(tag)) {
      let nesting = 0;
      let last_attr;
      for (let i = tag.length - 1; i > 0; i--) {
        if (tag.charAt(i) === "|" && !nesting) {
          last_attr = tag.slice(i + 1);
          tag = tag.slice(0, Math.max(0, i));
          break;
        } else {
          switch (tag.slice(i - 1, i - 1 + 2)) {
            case "]]":
              nesting++;
              i--;
              break;
            case "[[":
              nesting--;
              i--;
          }
        }
      }
      attr = tag.split(/\s*\|\s*/);
      attr.push(last_attr);
      _filename = attr.shift();
      let w_match;
      for (; attr.length > 0; attr.shift()) {
        w_match = attr[0].match(/^(\d*)(?:[px]*\d*)?px$/);
        if (w_match) {
          [, _width] = w_match;
        } else {
          switch (attr[0]) {
            case "thumb":
            case "thumbnail":
              _thumb = true;
              _frame = true;
              break;
            case "frame":
              _frame = true;
              break;
            case "none":
            case "right":
            case "left":
              _center = false;
              [_align] = attr;
              break;
            case "center":
              _center = true;
              _align = "none";
              break;
            default:
              if (attr.length === 1) {
                [_caption] = attr;
              }
          }
        }
      }
    } else {
      _filename = tag;
    }
    void [_width, _filename, _caption, _thumb, _frame, _center, _align];
    return "";
  };
  const parse_inline_nowiki = (str) => {
    let start;
    let lastend = 0;
    let substart = 0;
    let nestlev = 0;
    let open;
    let close;
    let subloop;
    let html = "";
    while ((start = str.indexOf("<no".concat("wiki", ">"), substart)) !== -1) {
      html += parse_inline_wiki(str.substring(lastend, start));
      start += 8;
      substart = start;
      subloop = true;
      do {
        open = str.indexOf("<no".concat("wiki", ">"), substart);
        close = str.indexOf("</no".concat("wiki", ">"), substart);
        if (close <= open || open === -1) {
          if (close === -1) {
            return html + html_entities(str.slice(start));
          }
          substart = close + 9;
          if (nestlev) {
            nestlev--;
          } else {
            lastend = substart;
            html += html_entities(str.substring(start, lastend - 9));
            subloop = false;
          }
        } else {
          substart = open + 8;
          nestlev++;
        }
      } while (subloop);
    }
    return html + parse_inline_wiki(str.slice(lastend));
  };
  const parse_inline_images = (str) => {
    let start;
    let substart = 0;
    let nestlev = 0;
    let loop;
    let close;
    let open;
    let wiki2;
    let html;
    while ((start = str.indexOf("[[", substart)) !== -1) {
      if (new RegExp(`^(Image|File|${Insta.conf.locale.image}):`, "i").test(str.slice(start + 2))) {
        loop = true;
        substart = start;
        do {
          substart += 2;
          close = str.indexOf("]]", substart);
          open = str.indexOf("[[", substart);
          if (close <= open || open === -1) {
            if (close === -1) {
              return str;
            }
            substart = close;
            if (nestlev) {
              nestlev--;
            } else {
              wiki2 = str.substring(start, close + 2);
              html = parse_image(wiki2);
              str = str.replace(wiki2, html);
              substart = start + html.length;
              loop = false;
            }
          } else {
            substart = open;
            nestlev++;
          }
        } while (loop);
      } else {
        break;
      }
    }
    return str;
  };
  const parse_inline_formatting = (str) => {
    let em;
    let st;
    let i;
    let li = 0;
    let o2 = "";
    while ((i = str.indexOf("''", li)) + 1) {
      o2 += str.substring(li, i);
      li = i + 2;
      if (str.charAt(i + 2) === "'") {
        li++;
        st = !st;
        o2 += st ? "<strong>" : "</strong>";
      } else {
        em = !em;
        o2 += em ? "<em>" : "</em>";
      }
    }
    return o2 + str.slice(li);
  };
  const parse_inline_wiki = (str) => {
    str = parse_inline_images(str);
    str = parse_inline_formatting(str);
    str = str.replace(/<math>(.*?)<\/math>/gi, "");
    const now = /* @__PURE__ */ new Date();
    let minutes = now.getUTCMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    const date = f("?:?, ? ? ? (UTC)", now.getUTCHours(), minutes, now.getUTCDate(), Insta.conf.locale.months[now.getUTCMonth()], now.getUTCFullYear());
    return str.replace(/~{5}(?!~)/g, date).replace(/~{4}(?!~)/g, `${Insta.conf.user.name} ${date}`).replace(/~{3}(?!~)/g, Insta.conf.user.name).replace(new RegExp(`\\[\\[:((?:${Insta.conf.locale.category}|Image|File|${Insta.conf.locale.image}|${Insta.conf.wiki.interwiki}):[^|]*?)\\]\\](\\w*)`, "gi"), (_$0, $1, $2) => {
      return f("<a href='?'>?</a>", Insta.conf.paths.articles + htmlescape_attr($1), htmlescape_text($1) + htmlescape_text($2));
    }).replace(new RegExp(`\\[\\[(?:${Insta.conf.locale.category}|${Insta.conf.wiki.interwiki}):.*?\\]\\]`, "gi"), "").replace(new RegExp(`\\[\\[:((?:${Insta.conf.locale.category}|Image|File|${Insta.conf.locale.image}|${Insta.conf.wiki.interwiki}):.*?)\\|([^\\]]+?)\\]\\](\\w*)`, "gi"), (_$0, $1, $2, $3) => {
      return f("<a href='?'>?</a>", Insta.conf.paths.articles + htmlescape_attr($1), htmlescape_text($2) + htmlescape_text($3));
    }).replace(/\[\[(\/[^|]*?)]]/g, (_$0, $1) => {
      return f("<a href='?'>?</a>", Insta.conf.baseUrl + htmlescape_attr($1), htmlescape_text($1));
    }).replace(/\[\[(\/.*?)\|(.+?)]]/g, (_$0, $1, $2) => {
      return f("<a href='?'>?</a>", Insta.conf.baseUrl + htmlescape_attr($1), htmlescape_text($2));
    }).replace(/\[\[([^[|]*?)]](\w*)/g, (_$0, $1, $2) => {
      return f("<a href='?'>?</a>", Insta.conf.paths.articles + htmlescape_attr($1), htmlescape_text($1) + htmlescape_text($2));
    }).replace(/\[\[([^[]*?)\|([^\]]+?)]](\w*)/g, (_$0, $1, $2, $3) => {
      return f("<a href='?'>?</a>", Insta.conf.paths.articles + htmlescape_attr($1), htmlescape_text($2) + htmlescape_text($3));
    }).replace(/\[\[([^\]]*?:)?(.*?)( *\(.*?\))?\|]]/g, (_$0, $1, $2, $3) => {
      return f("<a href='?'>?</a>", Insta.conf.paths.articles + htmlescape_attr($1) + htmlescape_attr($2) + htmlescape_attr($3), htmlescape_text($2));
    }).replace(/\[(https?|news|ftp|mailto|gopher|irc):(\/*)([^\]]*?) (.*?)]/g, (_$0, $1, $2, $3, $4) => {
      return f("<a class='external' href='?:?'>?</a>", htmlescape_attr($1), htmlescape_attr($2) + htmlescape_attr($3), htmlescape_text($4));
    }).replace(/\[http:\/\/(.*?)]/g, (_$0, $1) => {
      return f("<a class='external' href='http://?'>[#]</a>", htmlescape_attr($1));
    }).replace(/\[(news|ftp|mailto|gopher|irc):(\/*)(.*?)]/g, (_$0, $1, $2, $3) => {
      return f("<a class='external' href='?:?'>?:?</a>", htmlescape_attr($1), htmlescape_attr($2) + htmlescape_attr($3), htmlescape_text($1), htmlescape_text($2) + htmlescape_text($3));
    }).replace(/(^| )(https?|news|ftp|mailto|gopher|irc):(\/*)([^ $]*[^ !$,.:;?])/g, (_$0, $1, $2, $3, $4) => {
      return f("?<a class='external' href='?:?'>?:?</a>", htmlescape_text($1), htmlescape_attr($2), htmlescape_attr($3) + htmlescape_attr($4), htmlescape_text($2), htmlescape_text($3) + htmlescape_text($4));
    }).replace("__NOTOC__", "").replace("__NOINDEX__", "").replace("__INDEX__", "").replace("__NOEDITSECTION__", "");
  };
  for (; remain(); ) {
    if (compareLineStringOrReg(/^(={1,6})(.*)\1(.*)$/)) {
      p = 0;
      endl(f("<h?>?</h?>?", r[1].length, parse_inline_nowiki(r[2]), r[1].length, r[3]));
    } else if (compareLineStringOrReg(/^[#*:;]/)) {
      p = 0;
      parse_list();
    } else if (compareLineStringOrReg(" ")) {
      p = 0;
      parse_pre();
    } else if (compareLineStringOrReg("{|")) {
      p = 0;
      parse_table();
    } else if (compareLineStringOrReg(/^----+$/)) {
      p = 0;
      endl("<hr>");
    } else if (compareLineStringOrReg(Insta.BLOCK_IMAGE)) {
      p = 0;
      parse_block_image();
    } else {
      if (compareLineString("")) {
        p = remain() > 1 && ll[1] === "";
        if (p) {
          endl("<p><br>");
        }
      } else {
        if (!p) {
          ps("<p>");
          p = 1;
        }
        ps(`${parse_inline_nowiki(ll[0])} `);
      }
      sh();
    }
  }
  return o;
};
var wiki2html = (txt, baseurl) => {
  Insta.conf.baseUrl = baseurl;
  return Insta.convert(txt);
};
//! src/Navigation_popups/modules/shortcutkeys.ts
var lastPopupLinkSelected = null;
var popupHandleKeypress = function popupHandleKeypress2(evt) {
  const keyCode = evt.keyCode;
  if (!keyCode || !pg.current.link || !pg.current.link.navpopup) {
    return;
  }
  if (keyCode === 27) {
    killPopup();
    return false;
  }
  const letter = String.fromCodePoint(keyCode);
  const links = pg.current.link.navpopup.mainDiv.querySelectorAll("A");
  let startLink = 0;
  let i;
  let j;
  if (lastPopupLinkSelected) {
    for (i = 0; i < links.length; ++i) {
      if (links[i] === lastPopupLinkSelected) {
        startLink = i;
      }
    }
  }
  for (j = 0; j < links.length; ++j) {
    i = (startLink + j + 1) % links.length;
    if (links[i].getAttribute("popupkey") === letter) {
      if (evt && evt.preventDefault) {
        evt.preventDefault();
      }
      links[i].focus();
      lastPopupLinkSelected = links[i];
      return false;
    }
  }
  if (document.oldPopupOnkeypress) {
    return document.oldPopupOnkeypress(evt);
  }
  return true;
};
var addPopupShortcuts = () => {
  if (document.onkeypress !== popupHandleKeypress) {
    document.oldPopupOnkeypress = document.onkeypress;
  }
  document.onkeypress = popupHandleKeypress;
};
var rmPopupShortcuts = () => {
  lastPopupLinkSelected = null;
  if (document.oldPopupOnkeypress && document.oldPopupOnkeypress === popupHandleKeypress) {
    document.onkeypress = null;
    return;
  }
  document.onkeypress = document.oldPopupOnkeypress;
};
var addLinkProperty = (html, property) => {
  const i = html.indexOf(">");
  if (i === -1) {
    return html;
  }
  return `${html.slice(0, Math.max(0, i))} ${property}${html.slice(Math.max(0, i))}`;
};
var addPopupShortcut = (html, key) => {
  if (!getValueOf("popupShortcutKeys")) {
    return html;
  }
  const ret = addLinkProperty(html, `popupkey="${key}"`);
  if (key === " ") {
    key = popupString("spacebar");
  }
  return ret.replace(/^(.*?)(title=")(.*?)(".*)$/i, `$1$2$3 [${key}]$4`);
};
//! src/Navigation_popups/modules/mouseout.ts
var fuzzyCursorOffMenus = (_x, _y, _fuzz, parent) => {
  if (!parent) {
    return null;
  }
  const uls = parent.querySelectorAll("ul");
  for (const ul of uls) {
    if (ul.className === "popup_menu" && ul.offsetWidth > 0) {
      return false;
    }
  }
  return true;
};
var checkPopupPosition = () => {
  if (pg.current.link && pg.current.link.navpopup) {
    pg.current.link.navpopup.limitHorizontalPosition();
  }
};
var mouseOutWikiLink = function mouseOutWikiLink2() {
  const self2 = this;
  removeModifierKeyListener(self2);
  if (self2.navpopup === null || self2.navpopup === void 0) {
    return;
  }
  if (!self2.navpopup.isVisible()) {
    self2.navpopup.banish();
    return;
  }
  restoreTitle(self2);
  Navpopup.tracker.addHook(posCheckerHook(self2.navpopup));
};
var posCheckerHook = (navpop) => {
  return () => {
    if (!navpop.isVisible()) {
      return true;
    }
    if (Navpopup.tracker.dirty) {
      return false;
    }
    const {
      x
    } = Navpopup.tracker;
    const {
      y
    } = Navpopup.tracker;
    const mouseOverNavpop = navpop.isWithin(x, y, navpop.fuzz, navpop.mainDiv) || !fuzzyCursorOffMenus(x, y, navpop.fuzz, navpop.mainDiv);
    let t = getValueOf("popupHideDelay");
    if (t) {
      t *= 1e3;
    }
    if (!t) {
      if (!mouseOverNavpop) {
        if (navpop.parentAnchor) {
          restoreTitle(navpop.parentAnchor);
        }
        navpop.banish();
        return true;
      }
      return false;
    }
    const d = Date.now();
    if (!navpop.mouseLeavingTime) {
      navpop.mouseLeavingTime = d;
      return false;
    }
    if (mouseOverNavpop) {
      navpop.mouseLeavingTime = null;
      return false;
    }
    if (d - navpop.mouseLeavingTime > t) {
      navpop.mouseLeavingTime = null;
      navpop.banish();
      return true;
    }
    return false;
  };
};
var runStopPopupTimer = (navpop) => {
  if (!navpop.stopPopupTimer) {
    navpop.stopPopupTimer = setInterval(posCheckerHook(navpop), 500);
    navpop.addHook(() => {
      clearInterval(navpop.stopPopupTimer);
    }, "hide", "before");
  }
};
//! src/Navigation_popups/modules/downloader.ts
var Downloader = class {
  http;
  url;
  id = null;
  lastModified = null;
  callbackFunction = null;
  onFailure = null;
  aborted = false;
  method = "GET";
  async = true;
  data;
  owner;
  constructor(url) {
    this.http = new XMLHttpRequest();
    this.url = url;
    this.id = null;
    this.lastModified = null;
    this.callbackFunction = null;
    this.onFailure = null;
    this.aborted = false;
    this.method = "GET";
    this.async = true;
  }
  /**
   * Submits the http request.
   *
   * @param {*} x
   */
  send(x) {
    if (!this.http) {
      return null;
    }
    return this.http.send(x);
  }
  /* Aborts the download, setting the <code>aborted</code> field to true. */
  abort() {
    if (!this.http) {
      return null;
    }
    this.aborted = true;
    return this.http.abort();
  }
  /** Returns the downloaded data. */
  getData() {
    if (!this.http) {
      return null;
    }
    return this.http.responseText;
  }
  /** Prepares the download. */
  setTarget() {
    if (!this.http) {
      return;
    }
    this.http.open(this.method, this.url, this.async);
    this.http.setRequestHeader("Api-User-Agent", pg.api.userAgent);
  }
  /** Gets the state of the download. */
  getReadyState() {
    if (!this.http) {
      return null;
    }
    return this.http.readyState;
  }
  /**
   * Starts the download.
   * Note that setTarget {@source Downloader#setTarget} must be run first
   */
  start() {
    if (!this.http) {
      return;
    }
    const self2 = this;
    pg.misc.downloadsInProgress[this.id] = self2;
    this.http.send(null);
  }
  /**
   * Gets the 'Last-Modified' date from the download headers.
   * Should be run after the download completes.
   * Returns <code>null</code> on failure.
   *
   * @return {Date}
   */
  getLastModifiedDate() {
    if (!this.http) {
      return null;
    }
    let lastmod;
    try {
      lastmod = this.http.getResponseHeader("Last-Modified");
    } catch {
    }
    if (lastmod) {
      return new Date(lastmod);
    }
    return null;
  }
  /**
   * Sets the callback function.
   *
   * @param {Function} f callback function, called as <code>f(this)</code> on success
   */
  setCallback(f) {
    if (!this.http) {
      return;
    }
    this.http.onreadystatechange = f;
  }
  getStatus() {
    if (!this.http) {
      return null;
    }
    return this.http.status;
  }
};
new Downloader();
pg.misc.downloadsInProgress = {};
var newDownload = function newDownload2(url, id, callback, onfailure) {
  const d = new Downloader(url);
  if (!d.http) {
    return "ohdear";
  }
  d.id = id;
  d.setTarget();
  onfailure || (onfailure = 2);
  const f = function() {
    if (d.getReadyState() === 4) {
      delete pg.misc.downloadsInProgress[this.id];
      try {
        if (d.getStatus() === 200) {
          d.data = d.getData();
          d.lastModified = d.getLastModifiedDate();
          callback(d);
        } else if (typeof onfailure === "number") {
          if (onfailure > 0) {
            newDownload2(url, id, callback, onfailure - 1);
          }
        } else if (typeof onfailure === "function") {
          onfailure(d, url, id, callback);
        }
      } catch {
      }
    }
  };
  d.setCallback(f);
  return d;
};
var fakeDownload = (url, id, callback, data, lastModified, owner) => {
  const d = newDownload(url, callback);
  d.owner = owner;
  d.id = id;
  d.data = data;
  d.lastModified = lastModified;
  return callback(d);
};
var startDownload = (url, id, callback) => {
  const d = newDownload(url, id, callback);
  if (typeof d === "string") {
    return d;
  }
  d.start();
  return d;
};
var abortAllDownloads = () => {
  for (const x in pg.misc.downloadsInProgress) {
    if (!Object.hasOwn(pg.misc.downloadsInProgress, x)) {
      continue;
    }
    try {
      pg.misc.downloadsInProgress[x].aborted = true;
      pg.misc.downloadsInProgress[x].abort();
      delete pg.misc.downloadsInProgress[x];
    } catch {
    }
  }
};
//! src/Navigation_popups/modules/links.ts
var titledDiffLink = (l) => {
  return titledWikiLink({
    article: l.article,
    action: `${l.to}&oldid=${l.from}`,
    newWin: l.newWin,
    noPopup: l.noPopup,
    text: l.text,
    title: l.title,
    /* hack: no oldid here */
    actionName: "diff"
  });
};
var wikiLink = (l) => {
  if (!(typeof l.article === typeof {} && typeof l.action === "string" && typeof l.text === "string")) {
    return null;
  }
  if (l.oldid === void 0) {
    l.oldid = null;
  }
  const savedOldid = l.oldid;
  if (!/^(edit|view|revert|render)$|^raw/.test(l.action)) {
    l.oldid = null;
  }
  let hint = popupString(`${l.action}Hint`);
  const oldidData = [l.oldid, safeDecodeURI(l.article)];
  let revisionString = tprintf("revision %s of %s", oldidData);
  log(`revisionString=${revisionString}`);
  switch (l.action) {
    case "edit&section=new":
      hint = popupString("newSectionHint");
      break;
    case "edit&undo=":
      if (l.diff && l.diff !== "prev" && savedOldid) {
        l.action += `${l.diff}&undoafter=${savedOldid}`;
      } else if (savedOldid) {
        l.action += savedOldid;
      }
      hint = popupString("undoHint");
      break;
    case "raw&ctype=text/css":
      hint = popupString("rawHint");
      break;
    case "revert": {
      const p = parseParams(pg.current.link.href);
      l.action = `edit&autoclick=wpSave&actoken=${autoClickToken()}&autoimpl=${popupString("autoedit_version")}&autosummary=${revertSummary(l.oldid, p.diff)}`;
      if (p.diff === "prev") {
        l.action += "&direction=prev";
        revisionString = tprintf("the revision prior to revision %s of %s", oldidData);
      }
      if (getValueOf("popupRevertSummaryPrompt")) {
        l.action += "&autosummaryprompt=true";
      }
      if (getValueOf("popupMinorReverts")) {
        l.action += "&autominor=true";
      }
      log(`revisionString is now ${revisionString}`);
      break;
    }
    case "nullEdit":
      l.action = `edit&autoclick=wpSave&actoken=${autoClickToken()}&autoimpl=${popupString("autoedit_version")}&autosummary=null`;
      break;
    case "historyfeed":
      l.action = "history&feed=rss";
      break;
    case "markpatrolled":
      l.action = `markpatrolled&rcid=${l.rcid}`;
  }
  if (hint) {
    hint = l.oldid ? simplePrintf(hint, [revisionString]) : simplePrintf(hint, [safeDecodeURI(l.article)]);
  } else {
    hint = safeDecodeURI(`${l.article}&action=${l.action}`) + l.oldid ? `&oldid=${l.oldid}` : "";
  }
  return titledWikiLink({
    article: l.article,
    action: l.action,
    text: l.text,
    newWin: l.newWin,
    title: hint,
    oldid: l.oldid,
    noPopup: l.noPopup,
    onclick: l.onclick
  });
};
var revertSummary = (oldid, diff2) => {
  let ret = "";
  ret = diff2 === "prev" ? getValueOf("popupQueriedRevertToPreviousSummary") : getValueOf("popupQueriedRevertSummary");
  return `${ret}&autorv=${oldid}`;
};
var titledWikiLink = (l) => {
  if (l.article === void 0 || l.action === void 0) {
    errlog("got undefined article or action in titledWikiLink");
    return null;
  }
  const base = pg.wiki.titlebase + l.article.urlString();
  let url = base;
  if (l.actionName === void 0 || !l.actionName) {
    l.actionName = "action";
  }
  if (l.action !== "view") {
    url = `${base}&${l.actionName}=${l.action}`;
  }
  if (l.oldid !== void 0 && l.oldid) {
    url += `&oldid=${l.oldid}`;
  }
  let cssClass = pg.misc.defaultNavlinkClassname;
  if (l.className !== void 0 && l.className) {
    cssClass = l.className;
  }
  return generalNavLink({
    url,
    newWin: l.newWin,
    title: l.title === void 0 ? null : l.title,
    text: l.text === void 0 ? null : l.text,
    className: cssClass,
    noPopup: l.noPopup,
    onclick: l.onclick
  });
};
pg.fn.getLastContrib = (wikipage, newWin) => {
  getHistoryInfo(wikipage, (x) => {
    processLastContribInfo(x, {
      page: wikipage,
      newWin
    });
  });
};
var processLastContribInfo = (info, stuff) => {
  if (!info.edits || info.edits.length === 0) {
    void mw.notify("Popups: an odd thing happened. Please retry.", {
      tag: "popups",
      type: "error"
    });
    return;
  }
  if (!info.firstNewEditor) {
    void mw.notify(tprintf("Only found one editor: %s made %s edits", [info.edits[0].editor, info.edits.length]), {
      tag: "popups",
      type: "error"
    });
    return;
  }
  const newUrl = `${pg.wiki.titlebase + new Title(stuff.page).urlString()}&diff=cur&oldid=${info.firstNewEditor.oldid}`;
  displayUrl(newUrl, stuff.newWin);
};
pg.fn.getDiffSinceMyEdit = (wikipage, newWin) => {
  getHistoryInfo(wikipage, (x) => {
    processDiffSinceMyEdit(x, {
      page: wikipage,
      newWin
    });
  });
};
var processDiffSinceMyEdit = (info, stuff) => {
  if (!info.edits || info.edits.length === 0) {
    void mw.notify("Popups: something fishy happened. Please try again.", {
      tag: "popups",
      type: "error"
    });
    return;
  }
  const friendlyName = stuff.page.split("_").join(" ");
  if (!info.myLastEdit) {
    void mw.notify(tprintf("Couldn't find an edit by %s\nin the last %s edits to\n%s", [info.userName, getValueOf("popupHistoryLimit"), friendlyName]), {
      tag: "popups",
      type: "error"
    });
    return;
  }
  if (info.myLastEdit.index === 0) {
    void mw.notify(tprintf("%s seems to be the last editor to the page %s", [info.userName, friendlyName]), {
      type: "error"
    });
    return;
  }
  const newUrl = `${pg.wiki.titlebase + new Title(stuff.page).urlString()}&diff=cur&oldid=${info.myLastEdit.oldid}`;
  displayUrl(newUrl, stuff.newWin);
};
var displayUrl = (url, newWin) => {
  if (newWin) {
    window.open(url);
  } else {
    document.location = url;
  }
};
pg.fn.purgePopups = () => {
  processAllPopups(true);
  setupCache();
  pg.option = {};
  abortAllDownloads();
};
var processAllPopups = (nullify, banish) => {
  for (let i = 0; pg.current.links && i < pg.current.links.length; ++i) {
    if (!pg.current.links[i].navpopup) {
      continue;
    }
    if (nullify || banish) {
      pg.current.links[i].navpopup.banish();
    }
    pg.current.links[i].simpleNoMore = false;
    if (nullify) {
      pg.current.links[i].navpopup = null;
    }
  }
};
pg.fn.disablePopups = () => {
  processAllPopups(false, true);
  setupTooltips(null, true);
};
pg.fn.togglePreviews = () => {
  processAllPopups(true, true);
  pg.option.simplePopups = !pg.option.simplePopups;
  abortAllDownloads();
};
var magicWatchLink = function magicWatchLink2(l) {
  l.onclick = simplePrintf("pg.fn.modifyWatchlist('%s','%s');return false;", [l.article.toString(true).split("\\").join("\\\\").split("'").join(String.raw`\'`), this.id]);
  return wikiLink(l);
};
pg.fn.modifyWatchlist = async (title, action) => {
  const reqData = {
    action: "watch",
    formatversion: "2",
    titles: title,
    uselang: mw.config.get("wgUserLanguage")
  };
  if (action === "unwatch") {
    reqData.unwatch = true;
  }
  const mwTitle = mw.Title.newFromText(title);
  let messageName;
  if (mwTitle && mwTitle.getNamespaceId() > 0 && mwTitle.getNamespaceId() % 2 === 1) {
    messageName = action === "watch" ? "addedwatchtext-talk" : "removedwatchtext-talk";
  } else {
    messageName = action === "watch" ? "addedwatchtext" : "removedwatchtext";
  }
  await getMwApi().postWithToken("watch", reqData);
  await getMwApi().loadMessagesIfMissing([messageName]);
  void mw.notify(mw.message(messageName, title).parseDom(), {
    tag: "popups"
  });
};
var magicHistoryLink = (l) => {
  let title = "";
  let onClick = "";
  switch (l.id) {
    case "lastContrib":
      onClick = simplePrintf("pg.fn.getLastContrib('%s',%s)", [l.article.toString(true).split("\\").join("\\\\").split("'").join(String.raw`\'`), l.newWin]);
      title = popupString("lastContribHint");
      break;
    case "sinceMe":
      onClick = simplePrintf("pg.fn.getDiffSinceMyEdit('%s',%s)", [l.article.toString(true).split("\\").join("\\\\").split("'").join(String.raw`\'`), l.newWin]);
      title = popupString("sinceMeHint");
      break;
  }
  onClick += ";return false;";
  return generalNavLink({
    newWin: false,
    title,
    text: l.text,
    noPopup: l.noPopup,
    onclick: onClick
  });
};
var popupMenuLink = (l) => {
  const title = popupString(simplePrintf("%sHint", [l.id]));
  const onClick = simplePrintf("pg.fn.%s();return false;", [l.id]);
  return generalNavLink({
    newWin: false,
    title,
    text: l.text,
    noPopup: l.noPopup,
    onclick: onClick
  });
};
var specialLink = (l) => {
  if (l.specialpage === void 0 || !l.specialpage) {
    return null;
  }
  const base = `${pg.wiki.titlebase + mw.config.get("wgFormattedNamespaces")[pg.nsSpecialId]}:${l.specialpage}`;
  l.sep ?? (l.sep = "&target=");
  let article = l.article.urlString({
    keepSpaces: l.specialpage === "Search"
  });
  let hint = popupString(`${l.specialpage}Hint`);
  switch (l.specialpage) {
    case "Log":
      switch (l.sep) {
        case "&user=":
          hint = popupString("userLogHint");
          break;
        case "&type=block&page=":
          hint = popupString("blockLogHint");
          break;
        case "&page=":
          hint = popupString("pageLogHint");
          break;
        case "&type=protect&page=":
          hint = popupString("protectLogHint");
          break;
        case "&type=delete&page=":
          hint = popupString("deleteLogHint");
          break;
        default:
          log(`Unknown log type, sep=${l.sep}`);
          hint = "Missing hint (FIXME)";
      }
      break;
    case "PrefixIndex":
      article += "/";
      break;
  }
  hint = hint ? simplePrintf(hint, [safeDecodeURI(l.article)]) : safeDecodeURI(`${l.specialpage}:${l.article}`);
  const url = base + l.sep + article;
  return generalNavLink({
    url,
    title: hint,
    text: l.text,
    newWin: l.newWin,
    noPopup: l.noPopup
  });
};
var generalLink = (l) => {
  let ret = "<a";
  if (l.url) {
    const url = l.url.split('"').join("%22");
    ret += ` href="${url}"`;
  }
  if (l.title !== void 0 && l.title) {
    ret += ` title="${pg.escapeQuotesHTML(l.title)}"`;
  }
  if (l.onclick !== void 0 && l.onclick) {
    ret += ` onclick="${pg.escapeQuotesHTML(l.onclick)}"`;
  }
  if (l.noPopup) {
    ret += " noPopup=1";
  }
  let newWin;
  if (l.newWin === void 0 || l.newWin === null) {
    newWin = getValueOf("popupNewWindows");
  } else {
    ({
      newWin
    } = l);
  }
  if (newWin) {
    ret += ' rel="noopener" target="_blank"';
  }
  if (l.className !== void 0 && l.className) {
    ret += ` class="${l.className}"`;
  }
  ret += ">";
  if (typeof l.text === "string") {
    ret += pg.escapeQuotesHTML(pg.unescapeQuotesHTML(l.text));
  }
  ret += "</a>";
  return ret;
};
var appendParamsToLink = (linkstr, params) => {
  const sp = linkstr.split(/(href="[^"]+?)"/i);
  if (sp.length < 2) {
    return null;
  }
  let ret = sp.shift() + sp.shift();
  ret += `&${params}"`;
  ret += sp.join("");
  return ret;
};
var changeLinkTargetLink = (x) => {
  if (x.newTarget) {
    log(`changeLinkTargetLink: newTarget=${x.newTarget}`);
  }
  if (x.oldTarget !== decodeURIComponent(x.oldTarget)) {
    log(`This might be an input problem: ${x.oldTarget}`);
  }
  const cA = mw.util.escapeRegExp(x.oldTarget);
  let chs = cA.charAt(0).toUpperCase();
  chs = `[${chs}${chs.toLowerCase()}]`;
  let currentArticleRegexBit = chs + cA.slice(1);
  currentArticleRegexBit = currentArticleRegexBit.split(/[ _]+|%20/g).join("(?:[_ ]+|%20)").split(String.raw`\(`).join(String.raw`(?:%28|\()`).split(String.raw`\)`).join(String.raw`(?:%29|\))`);
  currentArticleRegexBit = `\\s*(${currentArticleRegexBit}(?:#[^\\[\\|]*)?)\\s*`;
  const title = x.title || mw.config.get("wgPageName").split("_").join(" ");
  const lk = titledWikiLink({
    article: new Title(title),
    newWin: x.newWin,
    action: "edit",
    text: x.text,
    title: x.hint,
    className: "popup_change_title_link"
  });
  let cmd = "";
  if (x.newTarget) {
    const t = x.newTarget;
    const s = mw.util.escapeRegExp(x.newTarget);
    if (x.alsoChangeLabel) {
      cmd += `s~\\[\\[${currentArticleRegexBit}\\]\\]~[[${t}]]~g;`;
      cmd += `s~\\[\\[${currentArticleRegexBit}[|]~[[${t}|~g;`;
      cmd += `s~\\[\\[${s}\\|${s}\\]\\]~[[${t}]]~g`;
    } else {
      cmd += `s~\\[\\[${currentArticleRegexBit}\\]\\]~[[${t}|$1]]~g;`;
      cmd += `s~\\[\\[${currentArticleRegexBit}[|]~[[${t}|~g;`;
      cmd += `s~\\[\\[${s}\\|${s}\\]\\]~[[${t}]]~g`;
    }
  } else {
    cmd += `s~\\[\\[${currentArticleRegexBit}\\]\\]~$1~g;`;
    cmd += `s~\\[\\[${currentArticleRegexBit}[|](.*?)\\]\\]~$2~g`;
  }
  cmd = `autoedit=${encodeURIComponent(cmd)}`;
  cmd += `&autoclick=${encodeURIComponent(x.clickButton)}&actoken=${encodeURIComponent(autoClickToken())}`;
  cmd += x.minor === null ? "" : `&autominor=${encodeURIComponent(x.minor)}`;
  cmd += x.watch === null ? "" : `&autowatch=${encodeURIComponent(x.watch)}`;
  cmd += `&autosummary=${encodeURIComponent(x.summary)}`;
  cmd += `&autoimpl=${encodeURIComponent(popupString("autoedit_version"))}`;
  return appendParamsToLink(lk, cmd);
};
var redirLink = (redirMatch, article) => {
  let ret = "";
  if (getValueOf("popupAppendRedirNavLinks") && getValueOf("popupNavLinks")) {
    ret += "<hr>";
    if (getValueOf("popupFixRedirs")) {
      ret += popupString("Redirects to: (Fix ");
      log(`redirLink: newTarget=${redirMatch}`);
      ret += addPopupShortcut(changeLinkTargetLink({
        newTarget: redirMatch,
        text: popupString("target"),
        hint: popupString("Fix this redirect, changing just the link target"),
        summary: simplePrintf(getValueOf("popupFixRedirsSummary"), [article.toString(), redirMatch]),
        oldTarget: article.toString(),
        clickButton: getValueOf("popupRedirAutoClick"),
        minor: true,
        watch: getValueOf("popupWatchRedirredPages")
      }), "R");
      ret += popupString(" or ");
      ret += addPopupShortcut(changeLinkTargetLink({
        newTarget: redirMatch,
        text: popupString("target & label"),
        hint: popupString("Fix this redirect, changing the link target and label"),
        summary: simplePrintf(getValueOf("popupFixRedirsSummary"), [article.toString(), redirMatch]),
        oldTarget: article.toString(),
        clickButton: getValueOf("popupRedirAutoClick"),
        minor: true,
        watch: getValueOf("popupWatchRedirredPages"),
        alsoChangeLabel: true
      }), "R");
      ret += popupString(")");
    } else {
      ret += popupString("Redirects") + popupString(" to ");
    }
    return ret;
  }
  return `<br> ${popupString("Redirects")}${popupString(" to ")}${titledWikiLink({
    article: new Title().fromWikiText(redirMatch),
    action: "view",
    text: safeDecodeURI(redirMatch),
    title: popupString("Bypass redirect")
  })}`;
};
var arinLink = (l) => {
  if (!saneLinkCheck(l)) {
    return null;
  }
  if (!l.article.isIpUser() || !pg.wiki.wikimedia) {
    return null;
  }
  const uN = l.article.userName();
  return generalNavLink({
    url: `http://ws.arin.net/cgi-bin/whois.pl?queryinput=${encodeURIComponent(uN)}`,
    newWin: l.newWin,
    title: tprintf("Look up %s in ARIN whois database", [uN]),
    text: l.text,
    noPopup: 1
  });
};
var toolDbName = (cookieStyle) => {
  let ret = mw.config.get("wgDBname");
  if (!cookieStyle) {
    ret += "_p";
  }
  return ret;
};
var saneLinkCheck = (l) => {
  if (typeof l.article !== typeof {} || typeof l.text !== "string") {
    return false;
  }
  return true;
};
var editCounterLink = (l) => {
  if (!saneLinkCheck(l)) {
    return null;
  }
  if (!pg.wiki.wikimedia) {
    return null;
  }
  const uN = l.article.userName();
  const tool = getValueOf("popupEditCounterTool");
  let url;
  const defaultToolUrl = "//tools.wmflabs.org/supercount/index.php?user=$1&project=$2.$3";
  switch (tool) {
    case "custom":
      url = simplePrintf(getValueOf("popupEditCounterUrl"), [encodeURIComponent(uN), toolDbName()]);
      break;
    default: {
      const theWiki = pg.wiki.hostname.split(".");
      url = simplePrintf(defaultToolUrl, [encodeURIComponent(uN), theWiki[0], theWiki[1]]);
    }
  }
  return generalNavLink({
    url,
    title: tprintf("editCounterLinkHint", [uN]),
    newWin: l.newWin,
    text: l.text,
    noPopup: 1
  });
};
var editorListLink = (l) => {
  if (!saneLinkCheck(l)) {
    return null;
  }
  const article = l.article.articleFromTalkPage() || l.article;
  const url = `https://xtools.wmflabs.org/articleinfo/${encodeURI(pg.wiki.hostname)}/${article.urlString()}?uselang=${mw.config.get("wgUserLanguage")}`;
  return generalNavLink({
    url,
    title: tprintf("editorListHint", [article]),
    newWin: l.newWin,
    text: l.text,
    noPopup: 1
  });
};
var generalNavLink = (l) => {
  l.className = l.className === null ? "popupNavLink" : l.className;
  return generalLink(l);
};
var getHistoryInfo = (wikipage, whatNext) => {
  log("getHistoryInfo");
  getHistory(wikipage, whatNext ? (d) => {
    whatNext(processHistory(d));
  } : processHistory);
};
var getHistory = (wikipage, onComplete) => {
  log("getHistory");
  const url = `${pg.wiki.apiwikibase}?format=json&formatversion=2&action=query&prop=revisions&titles=${new Title(wikipage).urlString()}&rvlimit=${getValueOf("popupHistoryLimit")}`;
  log(`getHistory: url=${url}`);
  return startDownload(url, `${pg.idNumber}history`, onComplete);
};
var processHistory = (download) => {
  const jsobj = getJsObj(download.data);
  try {
    const {
      revisions
    } = anyChild(jsobj.query.pages);
    const edits = [];
    for (const revision of revisions) {
      edits.push({
        oldid: revision.revid,
        editor: revision.user
      });
    }
    log(`processed ${edits.length} edits`);
    return finishProcessHistory(edits, mw.config.get("wgUserName"));
  } catch {
    log("Something went wrong with JSON business");
    return finishProcessHistory([]);
  }
};
var finishProcessHistory = (edits, userName) => {
  const histInfo = {};
  histInfo.edits = edits;
  histInfo.userName = userName;
  for (let i = 0; i < edits.length; ++i) {
    if (histInfo.myLastEdit === void 0 && userName && edits[i].editor === userName) {
      histInfo.myLastEdit = {
        index: i,
        oldid: edits[i].oldid,
        previd: i === 0 ? null : edits[i - 1].oldid
      };
    }
    if (histInfo.firstNewEditor === void 0 && edits[i].editor !== edits[0].editor) {
      histInfo.firstNewEditor = {
        index: i,
        oldid: edits[i].oldid,
        previd: i === 0 ? null : edits[i - 1].oldid
      };
    }
  }
  return histInfo;
};
//! src/Navigation_popups/modules/navlinks.ts
var defaultNavlinkSpec = () => {
  let str = "";
  str += "<b><<mainlink|shortcut= >></b>";
  if (getValueOf("popupLastEditLink")) {
    str += "*<<lastEdit|shortcut=/>>|<<lastContrib>>|<<sinceMe>>if(oldid){|<<oldEdit>>|<<diffCur>>}";
  }
  str += "if(user){<br><<contribs|shortcut=c>>*<<userlog|shortcut=L|log>>";
  str += "if(ipuser){*<<arin>>}if(wikimedia){*<<count|shortcut=#>>}";
  str += "if(ipuser){}else{*<<email|shortcut=E>>}if(admin){*<<block|shortcut=b>>|<<blocklog|log>>}}";
  const editstr = "<<edit|shortcut=e>>";
  const editOldidStr = `if(oldid){<<editOld|shortcut=e>>|<<revert|shortcut=v|rv>>|<<edit|cur>>}else{${editstr}}`;
  const historystr = "<<history|shortcut=h>>|<<editors|shortcut=E|>>";
  const watchstr = "<<unwatch|unwatchShort>>|<<watch|shortcut=w|watchThingy>>";
  str += `<br>if(talk){${editOldidStr}|<<new|shortcut=+>>*${historystr}*${watchstr}*<b><<article|shortcut=a>></b>|<<editArticle|edit>>}else{${// not a talk page
  editOldidStr}*${historystr}*${watchstr}*<b><<talk|shortcut=t>></b>|<<editTalk|edit>>|<<newTalk|shortcut=+|new>>}`;
  str += "<br><<whatLinksHere|shortcut=l>>*<<relatedChanges|shortcut=r>>*<<move|shortcut=m>>";
  str += "if(admin){<br><<unprotect|unprotectShort>>|<<protect|shortcut=p>>|<<protectlog|log>>*<<undelete|undeleteShort>>|<<delete|shortcut=d>>|<<deletelog|log>>}";
  return str;
};
var navLinksHTML = (article, _hint, params) => {
  const str = `<span class="popupNavLinks">${defaultNavlinkSpec()}</span>`;
  return navlinkStringToHTML(str, article, params);
};
var expandConditionalNavlinkString = function expandConditionalNavlinkString2(s, article, z, recursionCount) {
  const {
    oldid
  } = z;
  const {
    rcid
  } = z;
  const {
    diff: diff2
  } = z;
  recursionCount || (recursionCount = 0);
  const conditionalSplitRegex = /(;?\s*if\s*\(\s*(\w*)\s*\)\s*{([^{}]*)}(\s*else\s*{([^{}]*?)}|))/i;
  const splitted = s.split(conditionalSplitRegex);
  const numParens = 5;
  let ret = splitted[0];
  for (let i = 1; i < splitted.length; i = i + numParens + 1) {
    const testString = splitted[i + 1];
    const trueString = splitted[i + 2];
    let falseString = splitted[i + 4];
    if (falseString === void 0 || !falseString) {
      falseString = "";
    }
    let testResult;
    switch (testString) {
      case "user":
        testResult = !!article.userName();
        break;
      case "talk":
        testResult = !article.talkPage();
        break;
      case "admin":
        testResult = !!getValueOf("popupAdminLinks");
        break;
      case "oldid":
        testResult = !!(oldid !== void 0 && oldid);
        break;
      case "rcid":
        testResult = !!(rcid !== void 0 && rcid);
        break;
      case "ipuser":
        testResult = !!article.isIpUser();
        break;
      case "mainspace_en":
        testResult = isInMainNamespace(article) && pg.wiki.hostname === "en.wikipedia.org";
        break;
      case "wikimedia":
        testResult = !!pg.wiki.wikimedia;
        break;
      case "diff":
        testResult = !!(diff2 !== void 0 && diff2);
        break;
    }
    switch (testResult) {
      case null:
        ret += splitted[i];
        break;
      case true:
        ret += trueString;
        break;
      case false:
        ret += falseString;
        break;
    }
    ret += splitted[i + numParens];
  }
  if (conditionalSplitRegex.test(ret) && recursionCount < 10) {
    return expandConditionalNavlinkString2(ret, article, z, recursionCount + 1);
  }
  return ret;
};
var navlinkStringToArray = (s, article, params) => {
  s = expandConditionalNavlinkString(s, article, params);
  const splitted = s.split(/<<(.*?)>>/);
  const ret = [];
  for (const [i, element] of splitted.entries()) {
    if (i % 2) {
      const t = new navlinkTag();
      const ss = element.split("|");
      [t.id] = ss;
      for (let j = 1; j < ss.length; ++j) {
        const sss = ss[j].split("=");
        if (sss.length > 1) {
          [, t[sss[0]]] = sss;
        } else {
          t.text = popupString(sss[0]);
        }
      }
      t.article = article;
      const {
        oldid
      } = params;
      const {
        rcid
      } = params;
      const {
        diff: diff2
      } = params;
      if (oldid !== void 0 && oldid !== null) {
        t.oldid = oldid;
      }
      if (rcid !== void 0 && rcid !== null) {
        t.rcid = rcid;
      }
      if (diff2 !== void 0 && diff2 !== null) {
        t.diff = diff2;
      }
      if (!t.text && t.id !== "mainlink") {
        t.text = popupString(t.id);
      }
      ret.push(t);
    } else {
      ret.push(element);
    }
  }
  return ret;
};
var navlinkSubstituteHTML = (s) => {
  return s.split("*").join(getValueOf("popupNavLinkSeparator")).split("<menurow>").join('<li class="popup_menu_row">').split("</menurow>").join("</li>").split("<menu>").join('<ul class="popup_menu">').split("</menu>").join("</ul>");
};
var navlinkDepth = (magic, s) => {
  return s.split(`<${magic}>`).length - s.split(`</${magic}>`).length;
};
var navlinkStringToHTML = (s, article, params) => {
  const p = navlinkStringToArray(s, article, params);
  let html = "";
  let menudepth = 0;
  let menurowdepth = 0;
  for (const element of p) {
    if (typeof element === "string") {
      html += navlinkSubstituteHTML(element);
      menudepth += navlinkDepth("menu", element);
      menurowdepth += navlinkDepth("menurow", element);
    } else if (element instanceof navlinkTag) {
      html += menudepth > 0 && menurowdepth === 0 ? `<li class="popup_menu_item">${element.html()}</li>` : element.html();
    }
  }
  return html;
};
var navlinkTag = class {
  type;
  id;
  text;
  title;
  shortcut;
  article;
  print;
  specialpage;
  sep;
  action;
  oldid;
  rcid;
  diff;
  newWin;
  noPopup;
  from;
  to;
  constructor() {
    this.type = "navlinkTag";
  }
  html() {
    this.getNewWin();
    this.getPrintFunction();
    let html = "";
    let opening;
    let closing;
    const tagType = "span";
    if (tagType) {
      opening = `<${tagType} class="popup_${this.id}">`;
      closing = `</${tagType}>`;
    } else {
      opening = "";
      closing = "";
    }
    if (typeof this.print === "function") {
      html = this.print(this);
      if (typeof html !== "string") {
        html = "";
      } else if (this.shortcut !== void 0) {
        html = addPopupShortcut(html, this.shortcut);
      }
    } else {
      errlog(`Oh dear - invalid print function for a navlinkTag, id=${this.id}`);
    }
    return opening + html + closing;
  }
  getNewWin() {
    getValueOf("popupLinksNewWindow");
    if (pg.option.popupLinksNewWindow[this.id] === void 0) {
      this.newWin = null;
    }
    this.newWin = pg.option.popupLinksNewWindow[this.id];
  }
  getPrintFunction() {
    if (typeof this.id !== "string" || typeof this.article !== typeof {}) {
      return;
    }
    this.noPopup = 1;
    switch (this.id) {
      case "contribs":
      case "history":
      case "whatLinksHere":
      case "userPage":
      case "userTalk":
      case "talk":
      case "article":
      case "lastEdit":
        this.noPopup = null;
    }
    switch (this.id) {
      case "email":
      case "contribs":
      case "block":
      case "unblock":
      case "userlog":
      case "userSpace":
      case "deletedContribs":
        this.article = this.article.userName();
    }
    switch (this.id) {
      case "userTalk":
      case "newUserTalk":
      case "editUserTalk":
      case "userPage":
      case "blocklog":
        this.article = this.article.userName(true);
        delete this.oldid;
        break;
      case "pagelog":
      case "deletelog":
      case "protectlog":
        delete this.oldid;
    }
    if (this.id !== "mainlink") {
      this.article = this.article.removeAnchor();
    }
    switch (this.id) {
      case "undelete":
        this.print = specialLink;
        this.specialpage = "Undelete";
        this.sep = "/";
        break;
      case "whatLinksHere":
        this.print = specialLink;
        this.specialpage = "Whatlinkshere";
        break;
      case "relatedChanges":
        this.print = specialLink;
        this.specialpage = "Recentchangeslinked";
        break;
      case "move":
        this.print = specialLink;
        this.specialpage = "Movepage";
        break;
      case "contribs":
        this.print = specialLink;
        this.specialpage = "Contributions";
        break;
      case "deletedContribs":
        this.print = specialLink;
        this.specialpage = "Deletedcontributions";
        break;
      case "email":
        this.print = specialLink;
        this.specialpage = "EmailUser";
        this.sep = "/";
        break;
      case "block":
        this.print = specialLink;
        this.specialpage = "Blockip";
        this.sep = "&ip=";
        break;
      case "unblock":
        this.print = specialLink;
        this.specialpage = "Ipblocklist";
        this.sep = "&action=unblock&ip=";
        break;
      case "userlog":
        this.print = specialLink;
        this.specialpage = "Log";
        this.sep = "&user=";
        break;
      case "blocklog":
        this.print = specialLink;
        this.specialpage = "Log";
        this.sep = "&type=block&page=";
        break;
      case "pagelog":
        this.print = specialLink;
        this.specialpage = "Log";
        this.sep = "&page=";
        break;
      case "protectlog":
        this.print = specialLink;
        this.specialpage = "Log";
        this.sep = "&type=protect&page=";
        break;
      case "deletelog":
        this.print = specialLink;
        this.specialpage = "Log";
        this.sep = "&type=delete&page=";
        break;
      case "userSpace":
        this.print = specialLink;
        this.specialpage = "PrefixIndex";
        this.sep = "&namespace=2&prefix=";
        break;
      case "search":
        this.print = specialLink;
        this.specialpage = "Search";
        this.sep = "&fulltext=Search&search=";
        break;
      case "thank":
        this.print = specialLink;
        this.specialpage = "Thanks";
        this.sep = "/";
        this.article.value = this.diff === "prev" ? this.oldid : this.diff;
        break;
      case "unwatch":
      case "watch":
        this.print = magicWatchLink;
        this.action = `${this.id}&autowatchlist=1&autoimpl=${popupString("autoedit_version")}&actoken=${autoClickToken()}`;
        break;
      case "history":
      case "historyfeed":
      case "unprotect":
      case "protect":
        this.print = wikiLink;
        this.action = this.id;
        break;
      case "delete":
        this.print = wikiLink;
        this.action = "delete";
        if (this.article.namespaceId() === pg.nsImageId) {
          const img = this.article.stripNamespace();
          this.action += `&image=${img}`;
        }
        break;
      case "markpatrolled":
      case "edit":
        delete this.oldid;
        this.print = wikiLink;
        this.action = this.id;
        break;
      case "view":
      case "purge":
      case "render":
        this.print = wikiLink;
        this.action = this.id;
        break;
      case "raw":
        this.print = wikiLink;
        this.action = "raw";
        break;
      case "new":
        this.print = wikiLink;
        this.action = "edit&section=new";
        break;
      case "mainlink":
        if (this.text === void 0) {
          this.text = this.article.toString().entify();
        }
        if (getValueOf("popupSimplifyMainLink") && isInStrippableNamespace(this.article)) {
          const s = this.text.split("/");
          this.text = s.at(-1);
          if (this.text === "" && s.length > 1) {
            this.text = s.at(-2);
          }
        }
        this.print = titledWikiLink;
        if (this.title === void 0 && pg.current.link && pg.current.link.href !== void 0) {
          this.title = safeDecodeURI(pg.current.link.originalTitle ?? this.article);
          if (this.oldid !== void 0 && this.oldid) {
            this.title = tprintf("Revision %s of %s", [this.oldid, this.title]);
          }
        }
        this.action = "view";
        break;
      case "userPage":
      case "article":
      case "editArticle":
        delete this.oldid;
        this.article = this.article.articleFromTalkOrArticle();
        this.print = wikiLink;
        this.action = this.id.indexOf("edit") === 0 ? "edit" : "view";
        break;
      case "userTalk":
      case "talk":
        this.article = this.article.talkPage();
        delete this.oldid;
        this.print = wikiLink;
        this.action = "view";
        break;
      case "arin":
        this.print = arinLink;
        break;
      case "count":
        this.print = editCounterLink;
        break;
      case "editors":
        this.print = editorListLink;
        break;
      case "lastEdit":
        this.print = titledDiffLink;
        this.title = popupString("Show the last edit");
        this.from = "prev";
        this.to = "cur";
        break;
      case "oldEdit":
        this.print = titledDiffLink;
        this.title = `${popupString("Show the edit made to get revision")} ${this.oldid}`;
        this.from = "prev";
        this.to = this.oldid;
        break;
      case "editOld":
        this.print = wikiLink;
        this.action = "edit";
        break;
      case "undo":
        this.print = wikiLink;
        this.action = "edit&undo=";
        break;
      case "revert":
        this.print = wikiLink;
        this.action = "revert";
        break;
      case "nullEdit":
        this.print = wikiLink;
        this.action = "nullEdit";
        break;
      case "diffCur":
        this.print = titledDiffLink;
        this.title = tprintf("Show changes since revision %s", [this.oldid]);
        this.from = this.oldid;
        this.to = "cur";
        break;
      case "editUserTalk":
      case "editTalk":
        delete this.oldid;
        this.article = this.article.talkPage();
        this.action = "edit";
        this.print = wikiLink;
        break;
      case "newUserTalk":
      case "newTalk":
        this.article = this.article.talkPage();
        this.action = "edit&section=new";
        this.print = wikiLink;
        break;
      case "lastContrib":
      case "sinceMe":
        this.print = magicHistoryLink;
        break;
      case "togglePreviews":
      case "disablePopups":
      case "purgePopups":
        if (this.id === "togglePreviews") {
          this.text = popupString(pg.option.simplePopups ? "enable previews" : "disable previews");
        }
        this.print = popupMenuLink;
        break;
      default:
        this.print = () => `Unknown navlink type: ${this.id}`;
    }
  }
};
//! src/Navigation_popups/modules/structures.ts
pg.structures.original = {};
pg.structures.original.popupLayout = () => {
  return ["popupError", "popupImage", "popupTopLinks", "popupTitle", "popupUserData", "popupData", "popupOtherLinks", "popupRedir", ["popupWarnRedir", "popupRedirTopLinks", "popupRedirTitle", "popupRedirData", "popupRedirOtherLinks"], "popupMiscTools", ["popupRedlink"], "popupPrePreviewSep", "popupPreview", "popupSecondPreview", "popupPreviewMore", "popupPostPreview", "popupFixDab"];
};
pg.structures.original.popupRedirSpans = () => {
  return ["popupRedir", "popupWarnRedir", "popupRedirTopLinks", "popupRedirTitle", "popupRedirData", "popupRedirOtherLinks"];
};
pg.structures.original.popupTitle = (x) => {
  log("defaultstructure.popupTitle");
  if (!getValueOf("popupNavLinks")) {
    return navlinkStringToHTML("<b><<mainlink>></b>", x.article, x.params);
  }
  return "";
};
pg.structures.original.popupTopLinks = (x) => {
  log("defaultstructure.popupTopLinks");
  if (getValueOf("popupNavLinks")) {
    return navLinksHTML(x.article, x.hint, x.params);
  }
  return "";
};
pg.structures.original.popupImage = (x) => {
  log(`original.popupImage, x.article=${x.article}, x.navpop.idNumber=${x.navpop.idNumber}`);
  return imageHTML(x.article, x.navpop.idNumber);
};
pg.structures.original.popupRedirTitle = pg.structures.original.popupTitle;
pg.structures.original.popupRedirTopLinks = pg.structures.original.popupTopLinks;
var copyStructure = (oldStructure, newStructure) => {
  pg.structures[newStructure] = {};
  for (const prop in pg.structures[oldStructure]) {
    if (!Object.hasOwn(pg.structures[oldStructure], prop)) {
      continue;
    }
    pg.structures[newStructure][prop] = pg.structures[oldStructure][prop];
  }
};
copyStructure("original", "nostalgia");
pg.structures.nostalgia.popupTopLinks = (x) => {
  let str = "";
  str += "<b><<mainlink|shortcut= >></b>";
  str += "if(user){<br><<contribs|shortcut=c>>";
  str += "if(wikimedia){*<<count|shortcut=#>>}";
  str += "if(ipuser){}else{*<<email|shortcut=E>>}if(admin){*<<block|shortcut=b>>}}";
  const editstr = "<<edit|shortcut=e>>";
  const editOldidStr = `if(oldid){<<editOld|shortcut=e>>|<<revert|shortcut=v|rv>>|<<edit|cur>>}else{${editstr}}`;
  const historystr = "<<history|shortcut=h>>";
  const watchstr = "<<unwatch|unwatchShort>>|<<watch|shortcut=w|watchThingy>>";
  str += `<br>if(talk){${editOldidStr}|<<new|shortcut=+>>*${historystr}*${watchstr}*<b><<article|shortcut=a>></b>|<<editArticle|edit>>}else{${// not a talk page
  editOldidStr}*${historystr}*${watchstr}*<b><<talk|shortcut=t>></b>|<<editTalk|edit>>|<<newTalk|shortcut=+|new>>}`;
  str += "<br><<whatLinksHere|shortcut=l>>*<<relatedChanges|shortcut=r>>";
  str += "if(admin){<br>}else{*}<<move|shortcut=m>>";
  str += "if(admin){*<<unprotect|unprotectShort>>|<<protect|shortcut=p>>*<<undelete|undeleteShort>>|<<delete|shortcut=d>>}";
  return navlinkStringToHTML(str, x.article, x.params);
};
pg.structures.nostalgia.popupRedirTopLinks = pg.structures.nostalgia.popupTopLinks;
copyStructure("original", "fancy");
pg.structures.fancy.popupTitle = (x) => {
  return navlinkStringToHTML("<font size=+0><<mainlink>></font>", x.article, x.params);
};
pg.structures.fancy.popupTopLinks = (x) => {
  const hist = "<<history|shortcut=h|hist>>|<<lastEdit|shortcut=/|last>>|<<editors|shortcut=E|eds>>";
  const watch = "<<unwatch|unwatchShort>>|<<watch|shortcut=w|watchThingy>>";
  const move = "<<move|shortcut=m|move>>";
  return navlinkStringToHTML(`if(talk){<<edit|shortcut=e>>|<<new|shortcut=+|+>>*${hist}*<<article|shortcut=a>>|<<editArticle|edit>>*${watch}*${move}}else{<<edit|shortcut=e>>*${hist}*<<talk|shortcut=t|>>|<<editTalk|edit>>|<<newTalk|shortcut=+|new>>*${watch}*${move}}<br>`, x.article, x.params);
};
pg.structures.fancy.popupOtherLinks = (x) => {
  const admin = "<<unprotect|unprotectShort>>|<<protect|shortcut=p>>*<<undelete|undeleteShort>>|<<delete|shortcut=d|del>>";
  let user = "<<contribs|shortcut=c>>if(wikimedia){|<<count|shortcut=#|#>>}";
  user += `if(ipuser){|<<arin>>}else{*<<email|shortcut=E|${popupString("email")}>>}if(admin){*<<block|shortcut=b>>}`;
  const normal = "<<whatLinksHere|shortcut=l|links here>>*<<relatedChanges|shortcut=r|related>>";
  return navlinkStringToHTML(`<br>if(user){${user}*}if(admin){${admin}if(user){<br>}else{*}}${normal}`, x.article, x.params);
};
pg.structures.fancy.popupRedirTitle = pg.structures.fancy.popupTitle;
pg.structures.fancy.popupRedirTopLinks = pg.structures.fancy.popupTopLinks;
pg.structures.fancy.popupRedirOtherLinks = pg.structures.fancy.popupOtherLinks;
copyStructure("fancy", "fancy2");
pg.structures.fancy2.popupTopLinks = // hack out the <br> at the end and put one at the beginning
(x) => {
  return `<br>${pg.structures.fancy.popupTopLinks(x).replace(/<br>$/i, "")}`;
};
pg.structures.fancy2.popupLayout = () => {
  return ["popupError", "popupImage", "popupTitle", "popupUserData", "popupData", "popupTopLinks", "popupOtherLinks", "popupRedir", ["popupWarnRedir", "popupRedirTopLinks", "popupRedirTitle", "popupRedirData", "popupRedirOtherLinks"], "popupMiscTools", ["popupRedlink"], "popupPrePreviewSep", "popupPreview", "popupSecondPreview", "popupPreviewMore", "popupPostPreview", "popupFixDab"];
};
copyStructure("original", "menus");
pg.structures.menus.popupLayout = () => {
  return ["popupError", "popupImage", "popupTopLinks", "popupTitle", "popupOtherLinks", "popupRedir", ["popupWarnRedir", "popupRedirTopLinks", "popupRedirTitle", "popupRedirData", "popupRedirOtherLinks"], "popupUserData", "popupData", "popupMiscTools", ["popupRedlink"], "popupPrePreviewSep", "popupPreview", "popupSecondPreview", "popupPreviewMore", "popupPostPreview", "popupFixDab"];
};
pg.structures.menus.popupTopLinks = (x, shorter) => {
  const s = [];
  const dropdiv = '<div class="popup_drop">';
  const enddiv = "</div>";
  let hist = "<<history|shortcut=h>>";
  if (!shorter) {
    hist = `<menurow>${hist}|<<historyfeed|rss>>|<<editors|shortcut=E>></menurow>`;
  }
  const lastedit = "<<lastEdit|shortcut=/|show last edit>>";
  const thank = "if(diff){<<thank|send thanks>>}";
  const jsHistory = "<<lastContrib|last set of edits>><<sinceMe|changes since mine>>";
  const linkshere = "<<whatLinksHere|shortcut=l|what links here>>";
  const related = "<<relatedChanges|shortcut=r|related changes>>";
  const search = "<menurow><<search|shortcut=s>></menurow>";
  const watch = "<menurow><<unwatch|unwatchShort>>|<<watch|shortcut=w|watchThingy>></menurow>";
  const protect = "<menurow><<unprotect|unprotectShort>>|<<protect|shortcut=p>>|<<protectlog|log>></menurow>";
  const del = "<menurow><<undelete|undeleteShort>>|<<delete|shortcut=d>>|<<deletelog|log>></menurow>";
  const move = "<<move|shortcut=m|move page>>";
  const nullPurge = "<menurow><<nullEdit|shortcut=n|null edit>>|<<purge|shortcut=P>></menurow>";
  const viewOptions = "<menurow><<view|shortcut=v>>|<<render|shortcut=S>>|<<raw>></menurow>";
  const editRow = "if(oldid){<menurow><<edit|shortcut=e>>|<<editOld|shortcut=e|this&nbsp;revision>></menurow><menurow><<revert|shortcut=v>>|<<undo>></menurow>}else{<<edit|shortcut=e>>}";
  const markPatrolled = "if(rcid){<<markpatrolled|mark patrolled>>}";
  const newTopic = "if(talk){<<new|shortcut=+|new topic>>}";
  const protectDelete = `if(admin){${protect}${del}}`;
  if (getValueOf("popupActionsMenu")) {
    s.push(`<<mainlink>>*${dropdiv}${menuTitle("actions")}`);
  } else {
    s.push(`${dropdiv}<<mainlink>>`);
  }
  s.push("<menu>", editRow + markPatrolled + newTopic + hist + lastedit + thank);
  if (!shorter) {
    s.push(jsHistory);
  }
  s.push(move + linkshere + related);
  if (!shorter) {
    s.push(nullPurge + search);
  }
  if (!shorter) {
    s.push(viewOptions);
  }
  s.push(`<hr>${watch}${protectDelete}`, `<hr>if(talk){<<article|shortcut=a|view article>><<editArticle|edit article>>}else{<<talk|shortcut=t|talk page>><<editTalk|edit talk>><<newTalk|shortcut=+|new topic>>}</menu>${enddiv}`);
  const email = "<<email|shortcut=E|email user>>";
  const contribs = "if(wikimedia){<menurow>}<<contribs|shortcut=c|contributions>>if(wikimedia){</menurow>}if(admin){<menurow><<deletedContribs>></menurow>}";
  s.push(`if(user){*${dropdiv}${menuTitle("user")}`, "<menu>", "<menurow><<userPage|shortcut=u|user&nbsp;page>>|<<userSpace|space>></menurow>", "<<userTalk|shortcut=t|user talk>><<editUserTalk|edit user talk>><<newUserTalk|shortcut=+|leave comment>>");
  if (shorter) {
    s.push(`if(ipuser){}else{${email}}`);
  } else {
    s.push(`if(ipuser){<<arin>>}else{${email}}`);
  }
  s.push(`<hr>${contribs}<<userlog|shortcut=L|user log>>`, "if(wikimedia){<<count|shortcut=#|edit counter>>}", "if(admin){<menurow><<unblock|unblockShort>>|<<block|shortcut=b|block user>></menurow>}", "<<blocklog|shortcut=B|block log>>", `</menu>${enddiv}}`);
  if (getValueOf("popupSetupMenu") && !x.navpop.hasPopupMenu) {
    x.navpop.hasPopupMenu = true;
    s.push(`*${dropdiv}${menuTitle("popupsMenu")}<menu>`, "<<togglePreviews|toggle previews>>", "<<purgePopups|reset>>", "<<disablePopups|disable>>", `</menu>${enddiv}`);
  }
  return navlinkStringToHTML(s.join(""), x.article, x.params);
};
var menuTitle = (s) => {
  return `<a href="#" noPopup=1>${popupString(s)}</a>`;
};
pg.structures.menus.popupRedirTitle = pg.structures.menus.popupTitle;
pg.structures.menus.popupRedirTopLinks = pg.structures.menus.popupTopLinks;
copyStructure("menus", "shortmenus");
pg.structures.shortmenus.popupTopLinks = (x) => {
  return pg.structures.menus.popupTopLinks(x, true);
};
pg.structures.shortmenus.popupRedirTopLinks = pg.structures.shortmenus.popupTopLinks;
pg.structures.lite = {};
pg.structures.lite.popupLayout = () => {
  return ["popupTitle", "popupPreview"];
};
pg.structures.lite.popupTitle = (x) => {
  log(`${x.article}: structures.lite.popupTitle`);
  return `<div><span class="popup_mainlink"><b>${x.article.toString()}</b></span></div>`;
};
var getPgStructures = () => {
  return pg.structures;
};
//! src/Navigation_popups/modules/htmloutput.ts
pg.structures = getPgStructures();
var setPopupHTML = function setPopupHTML2(str, elementId, popupId, onSuccess, append) {
  if (popupId === void 0) {
    popupId = pg.idNumber;
  }
  const popupElement = document.getElementById(`${elementId}${popupId}`);
  if (popupElement) {
    if (!append) {
      popupElement.innerHTML = "";
    }
    if (isString(str)) {
      popupElement.innerHTML += str;
    } else {
      popupElement.append(str);
    }
    if (onSuccess) {
      onSuccess();
    }
    setTimeout(checkPopupPosition, 100);
    return true;
  }
  setTimeout(() => {
    setPopupHTML2(str, elementId, popupId, onSuccess);
  }, 600);
  return null;
};
var setPopupTrailer = (str, id) => {
  return setPopupHTML(str, "popupData", id);
};
var fillEmptySpans = (args) => {
  let redir = true;
  let rcid;
  if (typeof args !== "object" || args.redir === void 0 || !args.redir) {
    redir = false;
  }
  const a = args.navpopup.parentAnchor;
  let article;
  let hint;
  let oldid;
  let params = {};
  if (redir && typeof args.redirTarget === typeof {}) {
    article = args.redirTarget;
  } else {
    article = new Title().fromAnchor(a);
    hint = a.originalTitle || article.hintValue();
    params = parseParams(a.href);
    oldid = getValueOf("popupHistoricalLinks") ? params.oldid : null;
    ({
      rcid
    } = params);
  }
  const x = {
    article,
    hint,
    oldid,
    rcid,
    navpop: args.navpopup,
    params
  };
  const structure = pg.structures[getValueOf("popupStructure")];
  if (typeof structure !== "object") {
    setPopupHTML("popupError", `Unknown structure (this should never happen): ${pg.option.popupStructure}`, args.navpopup.idNumber);
    return;
  }
  const spans = flatten(pg.misc.layout);
  const numspans = spans.length;
  const redirs = pg.misc.redirSpans;
  for (let i = 0; i < numspans; ++i) {
    const found = redirs && redirs.includes(spans[i]);
    if (found && !redir || !found && redir) {
      continue;
    }
    const structurefn = structure[spans[i]];
    if (structurefn === void 0) {
      continue;
    }
    let setfn = setPopupHTML;
    if (getValueOf("popupActiveNavlinks") && (spans[i].indexOf("popupTopLinks") === 0 || spans[i].indexOf("popupRedirTopLinks") === 0)) {
      setfn = setPopupTipsAndHTML;
    }
    switch (typeof structurefn) {
      case "function":
        log(`running ${spans[i]}({
						article:${x.article}, hint:${x.hint}, oldid: ${x.oldid}})`);
        setfn(structurefn(x), spans[i], args.navpopup.idNumber);
        break;
      case "string":
        setfn(structurefn, spans[i], args.navpopup.idNumber);
        break;
      default:
        errlog(`unknown thing with label ${spans[i]} (span index was ${i})`);
        break;
    }
  }
};
var flatten = function flatten2(list, start) {
  const ret = [];
  if (start === void 0) {
    start = 0;
  }
  for (let i = start; i < list.length; ++i) {
    if (typeof list[i] === typeof []) {
      return [...ret, ...flatten2(list[i]), ...flatten2(list, i + 1)];
    }
    ret.push(list[i]);
  }
  return ret;
};
var popupHTML = function popupHTML2(a) {
  let structureName = getValueOf("popupStructure");
  let structure = pg.structures[structureName];
  if (!structure || typeof structure !== "object") {
    structureName = pg.optionDefault.popupStructure;
    structure = pg.structures[structureName];
    if (!structure || typeof structure !== "object") {
      structureName = "original";
      structure = pg.structures[structureName];
    }
    pg.option.popupStructure = structureName;
  }
  if (!structure || typeof structure.popupLayout !== "function") {
    return "Bad layout";
  }
  pg.misc.layout = structure.popupLayout();
  pg.misc.redirSpans = typeof structure.popupRedirSpans === "function" ? structure.popupRedirSpans() : [];
  return makeEmptySpans(pg.misc.layout, a.navpopup);
};
var makeEmptySpans = function makeEmptySpans2(list, navpop) {
  let ret = "";
  for (const element of list) {
    if (typeof element === "string") {
      ret += emptySpanHTML(element, navpop.idNumber, "div");
    } else if (typeof element === typeof [] && element.length > 0) {
      ret = ret.split(/(<\/[^>]*?>$)/).join(makeEmptySpans2(element, navpop));
    } else if (typeof element === typeof {} && element.nodeType) {
      ret += emptySpanHTML(element.name, navpop.idNumber, element.nodeType);
    }
  }
  return ret;
};
var emptySpanHTML = function emptySpanHTML2(name, id, tag, classname) {
  tag || (tag = "span");
  classname || (classname = emptySpanHTML2.classAliases[name]);
  classname || (classname = name);
  if (name === getValueOf("popupDragHandle")) {
    classname += " popupDragHandle";
  }
  return simplePrintf('<%s id="%s" class="%s"></%s>', [tag, name + id, classname, tag]);
};
emptySpanHTML.classAliases = {
  popupSecondPreview: "popupPreview"
};
var imageHTML = (_article, idNumber) => {
  return simplePrintf('<a id="popupImageLink$1"><img align="right" valign="top" id="popupImg$1" style="display:none"></img></a>', [idNumber]);
};
var popTipsSoonFn = (id, when, popData) => {
  when || (when = 250);
  const popTips = () => {
    setupTooltips(document.getElementById(`${id}`), false, true, popData);
  };
  return () => {
    setTimeout(popTips, when, popData);
  };
};
var setPopupTipsAndHTML = (html, divname, idnumber, popData) => {
  setPopupHTML(html, divname, idnumber, getValueOf("popupSubpopups") ? popTipsSoonFn(divname + idnumber, null, popData) : null);
};
//! src/Navigation_popups/modules/getpage.ts
var getPageWithCaching = (url, onComplete, owner) => {
  log(`getPageWithCaching, url=${url}`);
  const i = findInPageCache(url);
  let d;
  if (i > -1) {
    d = fakeDownload(url, owner.idNumber, onComplete, pg.cache.pages[i].data, pg.cache.pages[i].lastModified, owner);
  } else {
    d = getPage(url, onComplete, owner);
    if (d && owner && owner.addDownload) {
      owner.addDownload(d);
      d.owner = owner;
    }
  }
};
var getPage = (url, onComplete, owner) => {
  log("getPage");
  const callback = (d) => {
    if (!d.aborted) {
      addPageToCache(d);
      onComplete(d);
    }
  };
  return startDownload(url, owner.idNumber, callback);
};
var findInPageCache = (url) => {
  for (let i = 0; i < pg.cache.pages.length; ++i) {
    if (url === pg.cache.pages[i].url) {
      return i;
    }
  }
  return -1;
};
var addPageToCache = (download) => {
  log(`addPageToCache ${download.url}`);
  const page = {
    url: download.url,
    data: download.data,
    lastModified: download.lastModified
  };
  return pg.cache.pages.push(page);
};
//! src/Navigation_popups/modules/images.ts
var loadImage = (image, navpop) => {
  if (typeof image.stripNamespace !== "function") {
    void mw.notify("loadImages bad", {
      tag: "popups",
      type: "error"
    });
  }
  if (!getValueOf("popupImages")) {
    return;
  }
  if (!isValidImageName(image.toString())) {
    return false;
  }
  const art = image.urlString();
  let url = `${pg.wiki.apiwikibase}?format=json&formatversion=2&action=query`;
  url += `&prop=imageinfo&iiprop=url|mime&iiurlwidth=${getValueOf("popupImageSizeLarge")}`;
  url += `&titles=${art}`;
  pendingNavpopTask(navpop);
  const callback = (d) => {
    popupsInsertImage(navpop.idNumber, navpop, d);
  };
  const go = () => {
    getPageWithCaching(url, callback, navpop);
    return true;
  };
  if (navpop.visible || !getValueOf("popupLazyDownloads")) {
    go();
  } else {
    navpop.addHook(go, "unhide", "after", "DOWNLOAD_IMAGE_QUERY_DATA");
  }
  return false;
};
var popupsInsertImage = (id, _navpop, download) => {
  log("popupsInsertImage");
  let imageinfo;
  try {
    const jsObj = getJsObj(download.data);
    const imagepage = anyChild(jsObj.query.pages);
    if (imagepage.imageinfo === void 0) {
      return;
    }
    [imageinfo] = imagepage.imageinfo;
  } catch {
    log("popupsInsertImage failed :(");
    return;
  }
  const popupImage = document.querySelector(`#popupImg${id}`);
  if (!popupImage) {
    log("could not find insertion point for image");
    return;
  }
  popupImage.width = getValueOf("popupImageSize");
  popupImage.style.display = "inline";
  if (imageinfo.thumburl) {
    popupImage.src = imageinfo.thumburl;
  } else if (imageinfo.mime.indexOf("image") === 0) {
    popupImage.src = imageinfo.url;
    log("a thumb could not be found, using original image");
  } else {
    log("fullsize imagethumb, but not sure if it's an image");
  }
  const a = document.querySelector(`#popupImageLink${id}`);
  if (a === null) {
    return null;
  }
  const thumbAction = getValueOf("popupThumbAction");
  if (thumbAction === "imagepage" && pg.current.article.namespaceId() !== pg.nsImageId) {
    a.href = imageinfo.descriptionurl;
    popTipsSoonFn(`popupImage${id}`)();
    return null;
  }
  switch (thumbAction) {
    case "imagepage":
    case "sizetoggle":
      a.onclick = toggleSize;
      a.title = popupString("Toggle image size");
      return;
    case "linkfull":
      a.href = imageinfo.url;
      a.title = popupString("Open full-size image");
  }
  return null;
};
var toggleSize = function toggleSize2() {
  const self2 = this;
  if (!self2) {
    void mw.notify("self is null :/", {
      tag: "popups",
      type: "error"
    });
    return;
  }
  const img = self2.firstChild;
  if (!img) {
    void mw.notify("img is null :/", {
      tag: "popups",
      type: "error"
    });
    return;
  }
  img.style.width = !img.style.width || img.style.width === "" ? "100%" : "";
};
var getValidImageFromWikiText = (wikiText) => {
  let matched;
  let match;
  const t = removeMatchesUnless(wikiText, /(<!--[\S\s]*?-->)/, 1, /^<!--[^[]*popup/i);
  while ((match = pg.re.image.exec(t)) !== null) {
    const m = match[2] || match[6];
    if (isValidImageName(m)) {
      matched = m;
      break;
    }
  }
  pg.re.image.lastIndex = 0;
  if (!matched) {
    return null;
  }
  return `${mw.config.get("wgFormattedNamespaces")[pg.nsImageId]}:${upcaseFirst(matched)}`;
};
var removeMatchesUnless = (str, re1, parencount, re2) => {
  const split = str.split(re1);
  const c = parencount + 1;
  for (let i = 0; i < split.length; ++i) {
    if (i % c === 0 || re2.test(split[i])) {
      continue;
    }
    split[i] = "";
  }
  return split.join("");
};
//! src/Navigation_popups/modules/dab.ts
var retargetDab = (newTarget, oldTarget, friendlyCurrentArticleName, titleToEdit) => {
  log(`retargetDab: newTarget=${newTarget} oldTarget=${oldTarget}`);
  return changeLinkTargetLink({
    newTarget,
    text: newTarget.split(" ").join("&nbsp;"),
    hint: tprintf("disambigHint", [newTarget]),
    summary: simplePrintf(getValueOf("popupFixDabsSummary"), [friendlyCurrentArticleName, newTarget]),
    clickButton: getValueOf("popupDabsAutoClick"),
    minor: true,
    oldTarget,
    watch: getValueOf("popupWatchDisambiggedPages"),
    title: titleToEdit
  });
};
var listLinks = (wikitext, oldTarget, titleToEdit) => {
  const reg = /\[\[([^|]*?) *(\||]])/gi;
  let ret = [];
  const splitted = wikitext.split(reg);
  const omitRegex = /^[a-z]*:|^[Ss]pecial:|^[Ii]mage|^[Cc]ategory/;
  const friendlyCurrentArticleName = oldTarget.toString();
  const wikPos = getValueOf("popupDabWiktionary");
  for (let i = 1; i < splitted.length; i += 3) {
    if (typeof splitted[i] === "string" && splitted[i].length > 0 && !omitRegex.test(splitted[i])) {
      ret.push(retargetDab(splitted[i], oldTarget, friendlyCurrentArticleName, titleToEdit));
    }
  }
  ret = rmDupesFromSortedList(ret.sort());
  if (wikPos) {
    const wikTarget = `wiktionary:${friendlyCurrentArticleName.replace(/^(.+)\s+\([^)]+\)\s*$/, "$1")}`;
    const meth = wikPos.toLowerCase() === "first" ? "unshift" : "push";
    ret[meth](retargetDab(wikTarget, oldTarget, friendlyCurrentArticleName, titleToEdit));
  }
  ret.push(changeLinkTargetLink({
    newTarget: null,
    text: popupString("remove this link").split(" ").join("&nbsp;"),
    hint: popupString("remove all links to this disambig page from this article"),
    clickButton: getValueOf("popupDabsAutoClick"),
    oldTarget,
    summary: simplePrintf(getValueOf("popupRmDabLinkSummary"), [friendlyCurrentArticleName]),
    watch: getValueOf("popupWatchDisambiggedPages"),
    title: titleToEdit
  }));
  return ret;
};
var rmDupesFromSortedList = (list) => {
  const ret = [];
  for (const element of list) {
    if (ret.length === 0 || element !== ret.at(-1)) {
      ret.push(element);
    }
  }
  return ret;
};
var makeFixDab = (data, navpop) => {
  const titleToEdit = navpop.parentPopup && navpop.parentPopup.article.toString();
  const list = listLinks(data, navpop.originalArticle, titleToEdit);
  if (list.length === 0) {
    log("listLinks returned empty list");
    return null;
  }
  let html = `<hr>${popupString("Click to disambiguate this link to:")}<br>`;
  html += list.join(", ");
  return html;
};
var makeFixDabs = (wikiText, navpop) => {
  if (getValueOf("popupFixDabs") && isDisambig(wikiText, navpop.article) && Title.fromURL(location.href).namespaceId() !== pg.nsSpecialId && navpop.article.talkPage()) {
    setPopupHTML(makeFixDab(wikiText, navpop), "popupFixDab", navpop.idNumber);
  }
};
var popupRedlinkHTML = (article) => {
  return changeLinkTargetLink({
    newTarget: null,
    text: popupString("remove this link").split(" ").join("&nbsp;"),
    hint: popupString("remove all links to this page from this article"),
    clickButton: getValueOf("popupRedlinkAutoClick"),
    oldTarget: article.toString(),
    summary: simplePrintf(getValueOf("popupRedlinkSummary"), [article.toString()])
  });
};
//! src/Navigation_popups/modules/previewmaker.ts
var Previewmaker = class _Previewmaker {
  originalData;
  baseUrl;
  owner;
  maxCharacters;
  maxSentences;
  fullLength;
  data;
  html;
  constructor(wikiText, baseUrl, owner) {
    this.originalData = wikiText;
    this.baseUrl = baseUrl;
    this.owner = owner;
    this.maxCharacters = getValueOf("popupMaxPreviewCharacters");
    this.maxSentences = getValueOf("popupMaxPreviewSentences");
    this.setData();
  }
  setData() {
    const maxSize = Math.max(1e4, 2 * this.maxCharacters);
    this.data = this.originalData.slice(0, Math.max(0, maxSize));
  }
  /**
   * Remove HTML comments
   *
   * @private
   */
  killComments() {
    this.data = this.data.replace(/^<!--[^$]*?-->\n|\n<!--[^$]*?-->(?=\n)|<!--[^$]*?-->/g, "");
  }
  /**
   * @private
   */
  killDivs() {
    this.data = this.data.replace(/< *div[^>]* *>[\S\s]*?< *\/ *div *>/gi, "");
  }
  /**
   * @private
   */
  killGalleries() {
    this.data = this.data.replace(/< *gallery[^>]* *>[\S\s]*?< *\/ *gallery *>/gi, "");
  }
  /**
   * @param {Object} opening
   * @param {Object} closing
   * @param {Object} subopening
   * @param {Object} subclosing
   * @param {Object} repl
   * @private
   */
  kill(opening, closing, subopening, subclosing, repl) {
    let oldk = this.data;
    let k = _Previewmaker.killStuff(this.data, opening, closing, subopening, subclosing, repl);
    while (k.length < oldk.length) {
      oldk = k;
      k = _Previewmaker.killStuff(k, opening, closing, subopening, subclosing, repl);
    }
    this.data = k;
  }
  /**
   * @param {Object} txt
   * @param {Object} opening
   * @param {Object} closing
   * @param {Object} subopening
   * @param {Object} subclosing
   * @param {Object} repl
   * @private
   */
  static killStuff(txt, opening, closing, subopening, subclosing, repl) {
    const op = _Previewmaker.makeRegexp(opening);
    const cl = _Previewmaker.makeRegexp(closing, "^");
    const sb = subopening ? _Previewmaker.makeRegexp(subopening, "^") : null;
    const sc = subclosing ? _Previewmaker.makeRegexp(subclosing, "^") : cl;
    if (!op || !cl) {
      void mw.notify("Navigation Popups error: op or cl is null! something is wrong.", {
        tag: "popups",
        type: "error"
      });
      return;
    }
    if (!op.test(txt)) {
      return txt;
    }
    let ret = "";
    const opResult = op.exec(txt);
    ret = txt.slice(0, Math.max(0, opResult.index));
    txt = txt.slice(Math.max(0, opResult.index + opResult[0].length));
    let depth = 1;
    while (txt.length > 0) {
      let removal = 0;
      if (depth === 1 && cl.test(txt)) {
        depth--;
        removal = cl.exec(txt)[0].length;
      } else if (depth > 1 && sc.test(txt)) {
        depth--;
        removal = sc.exec(txt)[0].length;
      } else if (sb && sb.test(txt)) {
        depth++;
        removal = sb.exec(txt)[0].length;
      }
      removal || (removal = 1);
      txt = txt.slice(Math.max(0, removal));
      if (depth === 0) {
        break;
      }
    }
    return ret + (repl || "") + txt;
  }
  /**
   * @param {string|RegExp} x
   * @param {string|RegExp} prefix
   * @param {string|RegExp} suffix
   * @private
   */
  static makeRegexp(x, prefix, suffix) {
    prefix || (prefix = "");
    suffix || (suffix = "");
    let reStr = "";
    let flags = "";
    if (isString(x)) {
      reStr = prefix + literalizeRegex(x) + suffix;
    } else if (isRegExp(x)) {
      let s = x.toString().slice(1);
      const sp = s.split("/");
      flags = sp.at(-1);
      sp[sp.length - 1] = "";
      s = sp.join("/");
      s = s.slice(0, Math.max(0, s.length - 1));
      reStr = prefix + s + suffix;
    } else {
      log("makeRegexp failed");
    }
    log(`makeRegexp: got reStr=${reStr}, flags=${flags}`);
    return new RegExp(reStr, flags);
  }
  /**
   * @private
   */
  killBoxTemplates() {
    this.kill(/{{[^\s{|}]*?(float|box)[ _](begin|start)/i, /}}\s*/, "{{");
    this.kill(/{{[^\s{|}]*?(infobox|elementbox|frame)[ _]/i, /}}\s*/, "{{");
  }
  /**
   * @private
   */
  killTemplates() {
    this.kill("{{", "}}", "{", "}", " ");
  }
  /**
   * @private
   */
  killTables() {
    this.kill("{|", /\|}\s*/, "{|");
    this.kill(/<table.*?>/i, /<\/table.*?>/i, /<table.*?>/i);
    this.data = this.data.replace(/^\|.*$/gm, "");
  }
  /**
   * @private
   */
  killImages() {
    const forbiddenNamespaceAliases = [];
    for (const [localizedNamespaceLc, namespaceId] of Object.entries(mw.config.get("wgNamespaceIds"))) {
      if (namespaceId !== pg.nsImageId && namespaceId !== pg.nsCategoryId) {
        return;
      }
      forbiddenNamespaceAliases.push(localizedNamespaceLc.split(" ").join("[ _]"));
    }
    this.kill(new RegExp(`[[][[]\\s*(${forbiddenNamespaceAliases.join("|")})\\s*:`, "i"), /]]\s*/, "[", "]");
  }
  /**
   * @private
   */
  killHTML() {
    this.kill(/<ref\b[^/>]*?>/i, /<\/ref>/i);
    this.data = this.data.replace(/(^|\n) *<.*/g, "\n");
    const splitted = this.data.split(/(<[\W\w]*?(?:>|$|(?=<)))/);
    const len = splitted.length;
    for (let i = 1; i < len; i += 2) {
      switch (splitted[i]) {
        case "<no".concat("wiki", ">"):
        case "</no".concat("wiki", ">"):
        case "<block".concat("quote", ">"):
        case "</block".concat("quote", ">"):
          break;
        default:
          splitted[i] = "";
      }
    }
    this.data = splitted.join("");
  }
  /**
   * @private
   */
  killChunks() {
    const italicChunkRegex = /((^|\n)\s*:*\s*''[^']([^']|'''|'[^']){20}(.|\n[^\n])*''[\s!.?]*\n)+/g;
    this.data = this.data.replace(italicChunkRegex, "\n");
  }
  /**
   * @private
   */
  mopup() {
    this.data = this.data.replace(/^-{4,}/gm, "");
    this.data = this.data.replace(/(^|\n) *:[^\n]*/g, "");
    this.data = this.data.replace(/^__[_a-z]*__ *$/gim, "");
  }
  /**
   * @private
   */
  firstBit() {
    let d = this.data;
    if (getValueOf("popupPreviewCutHeadings")) {
      this.data = this.data.replace(/\s*(==+[^=]*==+)\s*/g, "\n\n$1 ");
      this.data = this.data.replace(/([:;]) *\n{2,}/g, "$1\n");
      this.data = this.data.replace(/^\s*/, "");
      const stuff = /^([^\n]|\n\S)*/.exec(this.data);
      if (stuff) {
        [d] = stuff;
      }
      if (!getValueOf("popupPreviewFirstParOnly")) {
        d = this.data;
      }
      d = d.replace(/(==+[^=]*==+)\s*/g, "$1\n\n");
    }
    d = d.split(/([!.?]+["']*\s)/g);
    d[0] = d[0].replace(/^\s*/, "");
    const notSentenceEnds = /([^.][a-z]\. *[a-z]|etc|sic|dr|mr|mrs|ms|st|no|op|cit|\[[^\]]*|\s[a-z])$/i;
    d = this.fixSentenceEnds(d, notSentenceEnds);
    this.fullLength = d.join("").length;
    let n = this.maxSentences;
    let dd = _Previewmaker.firstSentences(d, n);
    do {
      dd = _Previewmaker.firstSentences(d, n);
      --n;
    } while (dd.length > this.maxCharacters && n !== 0);
    this.data = dd;
  }
  /**
   * @param {string} strs
   * @param {RegExp} reg
   * @private
   */
  fixSentenceEnds(strs, reg) {
    for (let i = 0; i < strs.length - 2; ++i) {
      if (reg.test(strs[i])) {
        const a = [];
        for (let j = 0; j < strs.length; ++j) {
          if (j < i) {
            a[j] = strs[j];
          }
          if (j === i) {
            a[i] = strs[i] + strs[i + 1] + strs[i + 2];
          }
          if (j > i + 2) {
            a[j - 2] = strs[j];
          }
        }
        return this.fixSentenceEnds(a, reg);
      }
    }
    return strs;
  }
  /**
   * @param {string[]} strs
   * @param {number} howmany
   * @private
   */
  static firstSentences(strs, howmany) {
    const t = strs.slice(0, 2 * howmany);
    return t.join("");
  }
  /**
   * @private
   */
  killBadWhitespace() {
    this.data = this.data.replace(/^ *'+ *$/gm, "");
  }
  /**
   * Runs the various methods to generate the preview.
   * The preview is stored in the <code>html</html> field.
   *
   * @private
   */
  makePreview() {
    if (this.owner.article.namespaceId() !== pg.nsTemplateId && this.owner.article.namespaceId() !== pg.nsImageId) {
      this.killComments();
      this.killDivs();
      this.killGalleries();
      this.killBoxTemplates();
      if (getValueOf("popupPreviewKillTemplates")) {
        this.killTemplates();
      } else {
        this.killMultilineTemplates();
      }
      this.killTables();
      this.killImages();
      this.killHTML();
      this.killChunks();
      this.mopup();
      this.firstBit();
      this.killBadWhitespace();
    } else {
      this.killHTML();
    }
    this.html = wiki2html(this.data, this.baseUrl);
    this.fixHTML();
    this.stripLongTemplates();
  }
  /**
   * @param {string} data
   * @private
   */
  static esWiki2HtmlPart(data) {
    const reLinks = /(?:\[\[([^\]|]*)(?:\|([^\]|]*))*]]([a-z]*))/gi;
    reLinks.lastIndex = 0;
    let match;
    let result = "";
    let postfixIndex = 0;
    while ((match = reLinks.exec(data)) !== null) {
      result += `${pg.escapeQuotesHTML(data.substring(postfixIndex, match.index))}<a href="${Insta.conf.paths.articles}${pg.escapeQuotesHTML(match[1])}">${pg.escapeQuotesHTML((match[2] ?? match[1]) + match[3])}</a>`;
      postfixIndex = reLinks.lastIndex;
    }
    result += pg.escapeQuotesHTML(data.slice(Math.max(0, postfixIndex)));
    return result;
  }
  editSummaryPreview() {
    const reAes = /\/\* *(.*?) *\*\//g;
    reAes.lastIndex = 0;
    const match = reAes.exec(this.data);
    if (match) {
      const prefix = this.data.slice(0, Math.max(0, match.index - 1));
      const [, section] = match;
      const postfix = this.data.slice(Math.max(0, reAes.lastIndex));
      let start = "<span class='autocomment'>";
      let end = "</span>";
      if (prefix.length > 0) {
        start = `${_Previewmaker.esWiki2HtmlPart(prefix)} ${start}- `;
      }
      if (postfix.length > 0) {
        end = `: ${end}${_Previewmaker.esWiki2HtmlPart(postfix)}`;
      }
      const t = new Title().fromURL(this.baseUrl);
      t.anchorFromUtf(section);
      const sectionLink = `${Insta.conf.paths.articles + pg.escapeQuotesHTML(t.toString(true))}#${pg.escapeQuotesHTML(t.anchor)}`;
      return `${start}<a href="${sectionLink}">&rarr;</a> ${pg.escapeQuotesHTML(section)}${end}`;
    }
    return _Previewmaker.esWiki2HtmlPart(this.data);
  }
  /**
   * Works around livepreview bugs.
   *
   * @private
   */
  fixHTML() {
    if (!this.html) {
      return;
    }
    let ret = this.html;
    ret = ret.replace(new RegExp(`(<a href="${pg.wiki.articlePath}/[^"]*)[?](.*?")`, "g"), "$1%3F$2");
    ret = ret.replace(new RegExp(`(<a href='${pg.wiki.articlePath}/[^']*)[?](.*?')`, "g"), "$1%3F$2");
    this.html = ret;
  }
  /**
   * Generates the preview and displays it in the current popup.
   * Does nothing if the generated preview is invalid or consists of whitespace only.
   * Also activates wikilinks in the preview for subpopups if the popupSubpopups option is true.
   */
  showPreview() {
    this.makePreview();
    if (typeof this.html !== "string") {
      return;
    }
    if (/^\s*$/.test(this.html)) {
      return;
    }
    setPopupHTML("<hr>", "popupPrePreviewSep", this.owner.idNumber);
    setPopupTipsAndHTML(this.html, "popupPreview", this.owner.idNumber, {
      owner: this.owner
    });
    const more = this.fullLength > this.data.length ? this.moreLink() : "";
    setPopupHTML(more, "popupPreviewMore", this.owner.idNumber);
  }
  /**
   * @private
   */
  moreLink() {
    const a = document.createElement("a");
    a.className = "popupMoreLink";
    a.innerHTML = popupString("more...");
    const self2 = this;
    a.onclick = () => {
      self2.maxCharacters += 2e3;
      self2.maxSentences += 20;
      self2.setData();
      self2.showPreview();
    };
    return a;
  }
  /**
   * @private
   */
  stripLongTemplates() {
    this.html = this.html.replace(/^.{0,1000}{{[^}]*?(<(p|br)( \/)?>\s*){2,}([^{}]*?}})?/gi, "");
    this.html = this.html.split("\n").join(" ");
    this.html = this.html.replace(/{{[^}]*<pre>[^}]*}}/gi, "");
  }
  /**
   * @private
   */
  killMultilineTemplates() {
    this.kill("{{{", "}}}");
    this.kill(/\s*{{[^{}]*\n/, "}}", "{{");
  }
};
//! src/Navigation_popups/modules/selpop.ts
var getEditboxSelection = () => {
  let editbox;
  try {
    var _document$editform;
    editbox = (_document$editform = document.editform) === null || _document$editform === void 0 ? void 0 : _document$editform.wpTextbox1;
  } catch {
    return;
  }
  const selStart = editbox.selectionStart;
  const selEnd = editbox.selectionEnd;
  return editbox.value.substring(selStart, selEnd);
};
var doSelectionPopup = () => {
  const sel = getEditboxSelection();
  const open = sel.indexOf("[[");
  const pipe = sel.indexOf("|");
  const close = sel.indexOf("]]");
  if (open === -1 || pipe === -1 && close === -1) {
    return;
  }
  if (pipe !== -1 && open > pipe || close !== -1 && open > close) {
    return;
  }
  const article = new Title(sel.substring(open + 2, pipe < 0 ? close : pipe));
  if (getValueOf("popupOnEditSelection") === "boxpreview") {
    return doSeparateSelectionPopup(sel, article);
  }
  if (close > 0 && sel.slice(Math.max(0, close + 2)).includes("[[")) {
    return;
  }
  const a = document.createElement("a");
  a.href = pg.wiki.titlebase + article.urlString();
  mouseOverWikiLink2(a);
  if (a.navpopup) {
    a.navpopup.addHook(() => {
      runStopPopupTimer(a.navpopup);
    }, "unhide", "after");
  }
};
var doSeparateSelectionPopup = (str, article) => {
  let div = document.querySelector("#selectionPreview");
  if (!div) {
    div = document.createElement("div");
    div.id = "selectionPreview";
    try {
      const box = document.editform.wpTextbox1;
      box.parentNode.insertBefore(div, box);
    } catch {
      return;
    }
  }
  const p = prepPreviewmaker(str, article, newNavpopup(document.createElement("a"), article));
  p.makePreview();
  if (p.html) {
    div.innerHTML = p.html;
  }
  div.ranSetupTooltipsAlready = false;
  popTipsSoonFn("selectionPreview")();
};
//! src/Navigation_popups/modules/querypreview.ts
var loadAPIPreview = (queryType, article, navpop) => {
  const art = new Title(article).urlString();
  let url = `${pg.wiki.apiwikibase}?format=json&formatversion=2&action=query&`;
  let htmlGenerator = () => {
    void mw.notify("invalid html generator", {
      tag: "popups",
      type: "error"
    });
  };
  let usernameart = "";
  switch (queryType) {
    case "history":
      url += `titles=${art}&prop=revisions&rvlimit=${getValueOf("popupHistoryPreviewLimit")}`;
      htmlGenerator = APIhistoryPreviewHTML;
      break;
    case "category":
      url += `list=categorymembers&cmtitle=${art}`;
      htmlGenerator = APIcategoryPreviewHTML;
      break;
    case "userinfo": {
      const username = new Title(article).userName();
      usernameart = encodeURIComponent(username);
      url += pg.re.ipUser.test(username) ? `list=blocks&bkprop=range|restrictions&bkip=${usernameart}` : `list=users|usercontribs&usprop=blockinfo|groups|editcount|registration|gender&ususers=${usernameart}&meta=globaluserinfo&guiprop=groups|unattached&guiuser=${usernameart}&uclimit=1&ucprop=timestamp&ucuser=${usernameart}`;
      htmlGenerator = APIuserInfoPreviewHTML;
      break;
    }
    case "contribs":
      usernameart = encodeURIComponent(new Title(article).userName());
      url += `list=usercontribs&ucuser=${usernameart}&uclimit=${getValueOf("popupContribsPreviewLimit")}`;
      htmlGenerator = APIcontribsPreviewHTML;
      break;
    case "imagepagepreview": {
      let trail = "";
      if (getValueOf("popupImageLinks")) {
        trail = `&list=imageusage&iutitle=${art}`;
      }
      url += `titles=${art}&prop=revisions|imageinfo&rvprop=content${trail}`;
      htmlGenerator = APIimagepagePreviewHTML;
      break;
    }
    case "backlinks":
      url += `list=backlinks&bltitle=${art}`;
      htmlGenerator = APIbacklinksPreviewHTML;
      break;
    case "revision":
      url += article.oldid ? `revids=${article.oldid}` : `titles=${article.removeAnchor().urlString()}`;
      url += "&prop=revisions|pageprops|info|images|categories&rvprop=ids|timestamp|flags|comment|user|content&cllimit=max&imlimit=max";
      htmlGenerator = APIrevisionPreviewHTML;
      break;
  }
  pendingNavpopTask(navpop);
  const callback = (d) => {
    log("callback of API functions was hit");
    if (queryType === "userinfo") {
      fetchUserGroupNames(d.data).then(() => {
        showAPIPreview(queryType, htmlGenerator(article, d, navpop), navpop.idNumber, navpop, d);
      });
      return;
    }
    showAPIPreview(queryType, htmlGenerator(article, d, navpop), navpop.idNumber, navpop, d);
  };
  const go = () => {
    getPageWithCaching(url, callback, navpop);
    return true;
  };
  if (navpop.visible || !getValueOf("popupLazyDownloads")) {
    go();
  } else {
    navpop.addHook(go, "unhide", "before", `DOWNLOAD_${queryType}_QUERY_DATA`);
  }
};
var linkList = (list) => {
  list.sort((x, y) => {
    return x === y ? 0 : x < y ? -1 : 1;
  });
  const buf = [];
  for (const element of list) {
    buf.push(wikiLink({
      article: new Title(element),
      text: element.split(" ").join("&nbsp;"),
      action: "view"
    }));
  }
  return buf.join(", ");
};
var getTimeOffset = () => {
  const tz = mw.user.options.get("timecorrection");
  if (tz && tz.includes("|")) {
    return Number.parseInt(tz.split("|")[1], 10);
  }
  return 0;
};
var getTimeZone = () => {
  if (!pg.user.timeZone) {
    const tz = mw.user.options.get("timecorrection");
    pg.user.timeZone = "UTC";
    if (tz) {
      const tzComponents = tz.split("|");
      if (tzComponents.length === 3 && tzComponents[0] === "ZoneInfo") {
        [, , pg.user.timeZone] = tzComponents;
      } else {
        errlog(`Unexpected timezone information: ${tz}`);
      }
    }
  }
  return pg.user.timeZone;
};
var useTimeOffset = () => {
  const tz = mw.user.options.get("timecorrection");
  if (tz && !tz.includes("ZoneInfo|")) {
    return true;
  }
  return false;
};
var getLocales = () => {
  if (!pg.user.locales) {
    let userLanguage = document.querySelector("html").getAttribute("lang");
    if (getValueOf("popupLocale")) {
      userLanguage = getValueOf("popupLocale");
    } else if (userLanguage === "en") {
      userLanguage = getMWDateFormat() === "mdy" ? "en-US" : "en-GB";
    }
    pg.user.locales = Intl.DateTimeFormat.supportedLocalesOf([userLanguage, navigator.language]);
  }
  return pg.user.locales;
};
var getMWDateFormat = () => {
  return mw.user.options.get("date");
};
var editPreviewTable = (article, h, reallyContribs) => {
  let html = ["<table>"];
  let day;
  let curart = article;
  let page;
  let makeFirstColumnLinks;
  if (reallyContribs) {
    makeFirstColumnLinks = (currentRevision) => {
      let result = "(";
      result += `<a href="${pg.wiki.titlebase}${new Title(currentRevision.title).urlString()}&diff=prev&oldid=${currentRevision.revid}">${popupString("diff")}</a>`;
      result += "&nbsp;|&nbsp;";
      result += `<a href="${pg.wiki.titlebase}${new Title(currentRevision.title).urlString()}&action=history">${popupString("hist")}</a>`;
      result += ")";
      return result;
    };
  } else {
    const firstRevid = h[0].revid;
    makeFirstColumnLinks = (currentRevision) => {
      let result = "(";
      result += `<a href="${pg.wiki.titlebase}${new Title(curart).urlString()}&diff=${firstRevid}&oldid=${currentRevision.revid}">${popupString("cur")}</a>`;
      result += "&nbsp;|&nbsp;";
      result += `<a href="${pg.wiki.titlebase}${new Title(curart).urlString()}&diff=prev&oldid=${currentRevision.revid}">${popupString("last")}</a>`;
      result += ")";
      return result;
    };
  }
  for (const [i, element] of h.entries()) {
    if (reallyContribs) {
      page = element.title;
      curart = new Title(page);
    }
    const minor = element.minor ? "<b>m </b>" : "";
    const editDate = new Date(element.timestamp);
    let thisDay = formattedDate(editDate);
    const thisTime = formattedTime(editDate);
    if (thisDay === day) {
      thisDay = "";
    } else {
      day = thisDay;
    }
    if (thisDay) {
      html.push(`<tr><td colspan=3><span class="popup_history_date">${thisDay}</span></td></tr>`);
    }
    html.push(`<tr class="popup_history_row_${i % 2 ? "odd" : "even"}">`, `<td>${makeFirstColumnLinks(element)}</td>`, `<td><a href="${pg.wiki.titlebase}${new Title(curart).urlString()}&oldid=${element.revid}">${thisTime}</a></td>`);
    let col3url = "";
    let col3txt = "";
    if (reallyContribs) {
      col3url = pg.wiki.titlebase + curart.urlString();
      col3txt = pg.escapeQuotesHTML(page);
    } else {
      const {
        user
      } = element;
      if (element.userhidden) {
        col3url = getValueOf("popupRevDelUrl");
        col3txt = pg.escapeQuotesHTML(popupString("revdel"));
      } else {
        col3url = pg.re.ipUser.test(user) ? `${pg.wiki.titlebase + mw.config.get("wgFormattedNamespaces")[pg.nsSpecialId]}:Contributions&target=${new Title(user).urlString()}` : `${pg.wiki.titlebase + mw.config.get("wgFormattedNamespaces")[pg.nsUserId]}:${new Title(user).urlString()}`;
        col3txt = pg.escapeQuotesHTML(user);
      }
    }
    html.push(`<td>${reallyContribs ? minor : ""}<a href="${col3url}">${col3txt}</a></td>`);
    let comment = "";
    const c = element.comment || element.content;
    if (c) {
      comment = new Previewmaker(c, new Title(curart).toUrl()).editSummaryPreview();
    } else if (element.commenthidden) {
      comment = popupString("revdel");
    }
    html.push(`<td>${reallyContribs ? "" : minor}${comment}</td>`, "</tr>");
    html = [html.join("")];
  }
  html.push("</table>");
  return html.join("");
};
var adjustDate = (d, offset) => {
  const o = offset * 60 * 1e3;
  return new Date(+d + o);
};
var convertTimeZone = (date, timeZone) => {
  return new Date(date.toLocaleString("en-US", {
    timeZone
  }));
};
var formattedDateTime = (date) => {
  if (useTimeOffset()) {
    return `${formattedDate(date)} ${formattedTime(date)}`;
  }
  if (getMWDateFormat() === "ISO 8601") {
    const d2 = convertTimeZone(date, getTimeZone());
    return `${map(zeroFill, [d2.getFullYear(), d2.getMonth() + 1, d2.getDate()]).join("-")}T${map(zeroFill, [d2.getHours(), d2.getMinutes(), d2.getSeconds()]).join(":")}`;
  }
  const options = getValueOf("popupDateTimeFormatterOptions");
  options.timeZone = getTimeZone();
  return date.toLocaleString(getLocales(), options);
};
var formattedDate = (date) => {
  let d2;
  if (useTimeOffset()) {
    d2 = adjustDate(date, getTimeOffset());
    return map(zeroFill, [d2.getUTCFullYear(), d2.getUTCMonth() + 1, d2.getUTCDate()]).join("-");
  }
  if (getMWDateFormat() === "ISO 8601") {
    d2 = convertTimeZone(date, getTimeZone());
    return map(zeroFill, [d2.getFullYear(), d2.getMonth() + 1, d2.getDate()]).join("-");
  }
  const options = getValueOf("popupDateFormatterOptions");
  options.timeZone = getTimeZone();
  return date.toLocaleDateString(getLocales(), options);
};
var formattedTime = (date) => {
  let d2;
  if (useTimeOffset()) {
    d2 = adjustDate(date, getTimeOffset());
    return map(zeroFill, [d2.getUTCHours(), d2.getUTCMinutes(), d2.getUTCSeconds()]).join(":");
  }
  if (getMWDateFormat() === "ISO 8601") {
    d2 = convertTimeZone(date, getTimeZone());
    return map(zeroFill, [d2.getHours(), d2.getMinutes(), d2.getSeconds()]).join(":");
  }
  const options = getValueOf("popupTimeFormatterOptions");
  options.timeZone = getTimeZone();
  return date.toLocaleTimeString(getLocales(), options);
};
var fetchUserGroupNames = (userinfoResponse) => {
  const queryObj = getJsObj(userinfoResponse).query;
  const user = anyChild(queryObj.users);
  const messages = [];
  if (user.groups) {
    for (const groupName of user.groups) {
      if (!["*", "user", "autoconfirmed"].includes(groupName)) {
        messages.push(`group-${groupName}-member`);
      }
    }
  }
  if (queryObj.globaluserinfo && queryObj.globaluserinfo.groups) {
    for (const groupName of queryObj.globaluserinfo.groups) {
      messages.push(`group-${groupName}-member`);
    }
  }
  return getMwApi().loadMessagesIfMissing(messages);
};
var showAPIPreview = (queryType, html, id, navpop, download) => {
  let target = "popupPreview";
  completedNavpopTask(navpop);
  switch (queryType) {
    case "imagelinks":
    case "category":
      target = "popupPostPreview";
      break;
    case "userinfo":
      target = "popupUserData";
      break;
    case "revision":
      insertPreview(download);
      return;
  }
  setPopupTipsAndHTML(html, target, id);
};
var APIrevisionPreviewHTML = (_article, download) => {
  try {
    const jsObj = getJsObj(download.data);
    const page = anyChild(jsObj.query.pages);
    if (page.missing) {
      download.owner = null;
      return;
    }
    const content = page && page.revisions && page.revisions[0] && page.revisions[0].content ? page.revisions[0].content : null;
    if (typeof content === "string") {
      download.data = content;
      download.lastModified = new Date(page.revisions[0].timestamp);
    }
  } catch {
    return "Revision preview failed :(";
  }
};
var APIbacklinksPreviewHTML = (_article, download) => {
  try {
    const jsObj = getJsObj(download.data);
    const list = jsObj.query.backlinks;
    let html = [];
    if (!list) {
      return popupString("No backlinks found");
    }
    for (const element of list) {
      const t = new Title(element.title);
      html.push(`<a href="${pg.wiki.titlebase}${t.urlString()}">${t.toString().entify()}</a>`);
    }
    html = html.join(", ");
    if (jsObj.continue && jsObj.continue.blcontinue) {
      html += popupString(" and more");
    }
    return html;
  } catch {
    return "backlinksPreviewHTML went wonky";
  }
};
pg.fn.APIsharedImagePagePreviewHTML = (obj) => {
  log("APIsharedImagePagePreviewHTML");
  const popupid = obj.requestid;
  if (obj.query && obj.query.pages) {
    const page = anyChild(obj.query.pages);
    const content = page && page.revisions && page.revisions[0].contentmodel === "wikitext" ? page.revisions[0].content : null;
    if (typeof content === "string" && pg && pg.current && pg.current.link && pg.current.link.navpopup) {
      const p = new Previewmaker(content, pg.current.link.navpopup.article, pg.current.link.navpopup);
      p.makePreview();
      setPopupHTML(p.html, "popupSecondPreview", popupid);
    }
  }
};
var APIimagepagePreviewHTML = (article, download, navpop) => {
  try {
    const jsObj = getJsObj(download.data);
    const page = anyChild(jsObj.query.pages);
    const content = page && page.revisions && page.revisions[0].contentmodel === "wikitext" ? page.revisions[0].content : null;
    let ret = "";
    let alt = "";
    try {
      var _navpop$parentAnchor$;
      alt = (_navpop$parentAnchor$ = navpop.parentAnchor.childNodes[0]) === null || _navpop$parentAnchor$ === void 0 ? void 0 : _navpop$parentAnchor$.alt;
    } catch {
    }
    if (alt) {
      ret = `${ret}<hr><b>${popupString("Alt text:")}</b> ${pg.escapeQuotesHTML(alt)}`;
    }
    if (typeof content === "string") {
      const p = prepPreviewmaker(content, article, navpop);
      p.makePreview();
      if (p.html) {
        ret += `<hr>${p.html}`;
      }
      if (getValueOf("popupSummaryData")) {
        const info = getPageInfo(content, download);
        log(info);
        setPopupTrailer(info, navpop.idNumber);
      }
    }
    if (page && page.imagerepository === "shared") {
      const art = new Title(article);
      const encart = encodeURIComponent(`File:${art.stripNamespace()}`);
      const shared_url = `${pg.wiki.apicommonsbase}?format=json&formatversion=2&callback=pg.fn.APIsharedImagePagePreviewHTML&requestid=${navpop.idNumber}&action=query&prop=revisions&rvprop=content&titles=${encart}`;
      ret = `${ret}<hr>${popupString("Image from Commons")}: <a href="${pg.wiki.commonsbase}?title=${encart}">${popupString("Description page")}</a>`;
      mw.loader.load(shared_url);
    }
    showAPIPreview("imagelinks", APIimagelinksPreviewHTML(article, download), navpop.idNumber, download, download);
    return ret;
  } catch {
    return "API imagepage preview failed :(";
  }
};
var APIimagelinksPreviewHTML = (_article, download) => {
  try {
    const jsobj = getJsObj(download.data);
    const list = jsobj.query.imageusage;
    if (list) {
      const ret = [];
      for (const element of list) {
        ret.push(element.title);
      }
      if (ret.length === 0) {
        return popupString("No image links found");
      }
      return `<h2>${popupString("File links")}</h2>${linkList(ret)}`;
    }
    return popupString("No image links found");
  } catch {
    return "Image links preview generation failed :(";
  }
};
var APIcategoryPreviewHTML = (_article, download) => {
  try {
    const jsobj = getJsObj(download.data);
    const list = jsobj.query.categorymembers;
    let ret = [];
    for (const element of list) {
      ret.push(element.title);
    }
    if (ret.length === 0) {
      return popupString("Empty category");
    }
    ret = `<h2>${tprintf("Category members (%s shown)", [ret.length])}</h2>${linkList(ret)}`;
    if (jsobj.continue && jsobj.continue.cmcontinue) {
      ret += popupString(" and more");
    }
    return ret;
  } catch {
    return "Category preview failed :(";
  }
};
var APIuserInfoPreviewHTML = (_article, download) => {
  let ret = [];
  let queryobj = {};
  try {
    queryobj = getJsObj(download.data).query;
  } catch {
    return "Userinfo preview failed :(";
  }
  const user = anyChild(queryobj.users);
  if (user) {
    const {
      globaluserinfo
    } = queryobj;
    if (user.invalid === "") {
      ret.push(popupString("Invalid user"));
    } else if (user.missing === "") {
      ret.push(popupString("Not a registered username"));
    }
    if (user.blockedby) {
      if (user.blockpartial) {
        ret.push(`<b>${popupString("Has blocks")}</b>`);
      } else {
        ret.push(`<b>${popupString("BLOCKED")}</b>`);
      }
    }
    if (globaluserinfo && ("locked" in globaluserinfo || "hidden" in globaluserinfo)) {
      let lockedSulAccountIsAttachedToThis = true;
      for (let i = 0; globaluserinfo.unattached && i < globaluserinfo.unattached.length; i++) {
        if (globaluserinfo.unattached[i].wiki === mw.config.get("wgDBname")) {
          lockedSulAccountIsAttachedToThis = false;
          break;
        }
      }
      if (lockedSulAccountIsAttachedToThis) {
        if ("locked" in globaluserinfo) {
          ret.push(`<b><i>${popupString("LOCKED")}</i></b>`);
        }
        if ("hidden" in globaluserinfo) {
          ret.push(`<b><i>${popupString("HIDDEN")}</i></b>`);
        }
      }
    }
    if (getValueOf("popupShowGender") && user.gender) {
      switch (user.gender) {
        case "male":
          ret.push(`${popupString("he/him")} · `);
          break;
        case "female":
          ret.push(`${popupString("she/her")} · `);
          break;
      }
    }
    if (user.groups) {
      for (const groupName of user.groups) {
        if (!["*", "user", "autoconfirmed"].includes(groupName)) {
          ret.push(pg.escapeQuotesHTML(mw.message(`group-${groupName}-member`, user.gender).text()));
        }
      }
    }
    if (globaluserinfo && globaluserinfo.groups) {
      for (const groupName of globaluserinfo.groups) {
        ret.push(
          // Messages that can be used here:
          // * see [[Special:PrefixIndex/MediaWiki:Group-]]
          // * for more information
          `<i>${pg.escapeQuotesHTML(mw.message(`group-${groupName}-member`, user.gender).text())}</i>`
        );
      }
    }
    if (user.registration) {
      ret.push(pg.escapeQuotesHTML((user.editcount ?? "0") + popupString(" edits since: ") + (user.registration ? formattedDate(new Date(user.registration)) : "")));
    }
  }
  if (queryobj.usercontribs && queryobj.usercontribs.length > 0) {
    ret.push(popupString("last edit on ") + formattedDate(new Date(queryobj.usercontribs[0].timestamp)));
  }
  if (queryobj.blocks) {
    ret.push(popupString("IP user"));
    for (let l = 0; l < queryobj.blocks.length; l++) {
      let rbstr = queryobj.blocks[l].rangestart === queryobj.blocks[l].rangeend ? "BLOCK" : "RANGEBLOCK";
      rbstr = Array.isArray(queryobj.blocks[l].restrictions) ? `${rbstr}ED` : `Has ${rbstr.toLowerCase()}s`;
      ret.push(`<b>${popupString(rbstr)}</b>`);
    }
  }
  for (let m = 0; m < ret.length - 1; m++) {
    if (ret[m].length > 3 && ret[m].slice(Math.max(0, ret[m].length - 3)) === " · ") {
      ret[m] += ret[m + 1];
      ret.splice(m + 1, 1);
      m--;
    }
  }
  ret = `<hr>${ret.join(", ")}`;
  return ret;
};
var APIcontribsPreviewHTML = (article, download, navpop) => {
  return APIhistoryPreviewHTML(article, download, navpop, true);
};
var APIhistoryPreviewHTML = (article, download, _navpop, reallyContribs) => {
  try {
    const jsobj = getJsObj(download.data);
    let edits = [];
    edits = reallyContribs ? jsobj.query.usercontribs : anyChild(jsobj.query.pages).revisions;
    const ret = editPreviewTable(article, edits, reallyContribs);
    return ret;
  } catch {
    return "History preview failed :-(";
  }
};
//! src/Navigation_popups/modules/diff.ts
var delFmt = (x) => {
  if (x.length === 0) {
    return "";
  }
  return `<del class='popupDiff'>${x.join("")}</del>`;
};
var insFmt = (x) => {
  if (x.length === 0) {
    return "";
  }
  return `<ins class='popupDiff'>${x.join("")}</ins>`;
};
var countCrossings = (a, b, i, eject) => {
  if (!b[i].row && b[i].row !== 0) {
    return -1;
  }
  let count = 0;
  for (const [j, element] of a.entries()) {
    if (!element.row && element.row !== 0) {
      continue;
    }
    if ((j - b[i].row) * (i - element.row) > 0) {
      if (eject) {
        return true;
      }
      count++;
    }
  }
  return count;
};
var shortenDiffString = function shortenDiffString2(str, context) {
  const re = /(<del[\S\s]*?<\/del>|<ins[\S\s]*?<\/ins>)/;
  const splitted = str.split(re);
  let ret = [""];
  for (let i = 0; i < splitted.length; i += 2) {
    if (splitted[i].length < 2 * context) {
      ret[ret.length - 1] += splitted[i];
      if (i + 1 < splitted.length) {
        ret[ret.length - 1] += splitted[i + 1];
      }
      continue;
    } else {
      if (i > 0) {
        ret[ret.length - 1] += splitted[i].slice(0, Math.max(0, context));
      }
      if (i + 1 < splitted.length) {
        ret.push(splitted[i].slice(Math.max(0, splitted[i].length - context)) + splitted[i + 1]);
      }
    }
  }
  while (ret.length > 0 && !ret[0]) {
    ret = ret.slice(1);
  }
  return ret;
};
var diffString = (o, n) => {
  let i;
  const oSplitted = o.split(/\b/);
  const nSplitted = n.split(/\b/);
  for (i = 0; i < oSplitted.length; ++i) {
    oSplitted[i] = oSplitted[i].entify();
  }
  for (i = 0; i < nSplitted.length; ++i) {
    nSplitted[i] = nSplitted[i].entify();
  }
  const out = diff(oSplitted, nSplitted);
  let str = "";
  let acc = [];
  let maxOutputPair = 0;
  for (i = 0; i < out.n.length; ++i) {
    if (out.n[i].paired) {
      if (maxOutputPair > out.n[i].row) {
        out.o[out.n[i].row] = out.o[out.n[i].row].text;
        out.n[i] = out.n[i].text;
      }
      if (maxOutputPair < out.n[i].row) {
        maxOutputPair = out.n[i].row;
      }
    }
  }
  for (i = 0; i < out.o.length && !out.o[i].paired; ++i) {
    acc.push(out.o[i]);
  }
  str += delFmt(acc);
  acc = [];
  for (i = 0; i < out.n.length; ++i) {
    while (i < out.n.length && !out.n[i].paired) {
      acc.push(out.n[i++]);
    }
    str += insFmt(acc);
    acc = [];
    if (i < out.n.length) {
      str += out.n[i].text;
      let m = out.n[i].row + 1;
      while (m < out.o.length && !out.o[m].paired) {
        acc.push(out.o[m++]);
      }
      str += delFmt(acc);
      acc = [];
    }
  }
  return str;
};
var jsReservedProperties = new RegExp("^(constructor|prototype|__((define|lookup)[GS]etter)__|eval|hasOwnProperty|propertyIsEnumerable|to(Source|String|LocaleString)|(un)?watch|valueOf)$");
var diffBugAlert = function diffBugAlert2(word) {
  if (!diffBugAlert2.list[word]) {
    diffBugAlert2.list[word] = 1;
    void mw.notify(`Bad word: ${word}

Please report this bug.`, {
      tag: "popups",
      type: "error"
    });
  }
};
diffBugAlert.list = {};
var makeDiffHashtable = (src) => {
  const ret = {};
  for (let i = 0; i < src.length; i++) {
    var _src$i;
    if (jsReservedProperties.test(src[i])) {
      src[i] += "<!-- -->";
    }
    ret[_src$i = src[i]] ?? (ret[_src$i] = []);
    try {
      ret[src[i]].push(i);
    } catch {
      diffBugAlert(src[i]);
    }
  }
  return ret;
};
var diff = (o, n) => {
  const ns = makeDiffHashtable(n);
  const os = makeDiffHashtable(o);
  let i;
  for (i in ns) {
    if (!Object.hasOwn(ns, i)) {
      continue;
    }
    const nsi = ns[i];
    const osi = os[i];
    if (nsi.length === 1 && osi && osi.length === 1) {
      n[nsi[0]] = {
        text: n[nsi[0]],
        row: osi[0],
        paired: true
      };
      o[osi[0]] = {
        text: o[osi[0]],
        row: nsi[0],
        paired: true
      };
    }
  }
  for (i = 0; i < n.length - 1; i++) {
    if (n[i].paired && !n[i + 1].paired && n[i].row + 1 < o.length && !o[n[i].row + 1].paired && n[i + 1] === o[n[i].row + 1]) {
      n[i + 1] = {
        text: n[i + 1],
        row: n[i].row + 1,
        paired: true
      };
      o[n[i].row + 1] = {
        text: o[n[i].row + 1],
        row: i + 1,
        paired: true
      };
    }
  }
  for (i = n.length - 1; i > 0; i--) {
    if (n[i].paired && !n[i - 1].paired && n[i].row > 0 && !o[n[i].row - 1].paired && n[i - 1] === o[n[i].row - 1]) {
      n[i - 1] = {
        text: n[i - 1],
        row: n[i].row - 1,
        paired: true
      };
      o[n[i].row - 1] = {
        text: o[n[i].row - 1],
        row: i - 1,
        paired: true
      };
    }
  }
  return {
    o,
    n
  };
};
//! src/Navigation_popups/modules/diffpreview.ts
var loadDiff = (article, oldid, diff2, navpop) => {
  navpop.diffData = {
    oldRev: {},
    newRev: {}
  };
  const api2 = getMwApi();
  const params = {
    action: "compare",
    prop: ["ids", "title"],
    smaxage: 600,
    maxage: 600
  };
  if (article.title) {
    params.fromtitle = article.title;
  }
  switch (diff2) {
    case "cur":
      switch (oldid) {
        case null:
        case "":
        case "prev":
          params.torelative = "prev";
          break;
        default:
          params.fromrev = oldid;
          params.torelative = "cur";
          break;
      }
      break;
    case "prev":
      if (oldid) {
        params.fromrev = oldid;
      }
      params.torelative = "prev";
      break;
    case "next":
      params.fromrev = oldid || 0;
      params.torelative = "next";
      break;
    default:
      params.fromrev = oldid || 0;
      params.torev = diff2 || 0;
      break;
  }
  api2.get(params).then((data) => {
    navpop.diffData.oldRev.revid = data.compare.fromrevid;
    navpop.diffData.newRev.revid = data.compare.torevid;
    addReviewLink(navpop, "popupMiscTools");
    const go = () => {
      pendingNavpopTask(navpop);
      let url = `${pg.wiki.apiwikibase}?format=json&formatversion=2&action=query&`;
      url += `revids=${navpop.diffData.oldRev.revid}|${navpop.diffData.newRev.revid}`;
      url += "&prop=revisions&rvprop=ids|timestamp|content";
      getPageWithCaching(url, doneDiff, navpop);
      return true;
    };
    if (navpop.visible || !getValueOf("popupLazyDownloads")) {
      go();
    } else {
      navpop.addHook(go, "unhide", "before", "DOWNLOAD_DIFFS");
    }
  });
};
var addReviewLink = (navpop, target) => {
  if (!pg.user.canReview) {
    return;
  }
  if (navpop.diffData.newRev.revid <= navpop.diffData.oldRev.revid) {
    return;
  }
  const params = {
    action: "query",
    format: "json",
    formatversion: "2",
    prop: ["info", "flagged"],
    revids: navpop.diffData.oldRev.revid
  };
  getMwApi().get(params).then((data) => {
    const stable_revid = data.query.pages[0].flagged && data.query.pages[0].flagged.stable_revid || 0;
    if (stable_revid === navpop.diffData.oldRev.revid) {
      const a = document.createElement("a");
      a.innerHTML = popupString("mark patrolled");
      a.title = popupString("markpatrolledHint");
      a.onclick = () => {
        const params2 = {
          action: "review",
          comment: tprintf("defaultpopupReviewedSummary", [navpop.diffData.oldRev.revid, navpop.diffData.newRev.revid]),
          revid: navpop.diffData.newRev.revid
        };
        getMwApi().postWithToken("csrf", params2).done(() => {
          a.style.display = "none";
        }).fail(() => {
          void mw.notify(popupString("Could not marked this edit as patrolled"), {
            tag: "popups",
            type: "error"
          });
        });
      };
      setPopupHTML(a, target, navpop.idNumber, null, true);
    }
  });
};
var doneDiff = (download) => {
  if (!download.owner || !download.owner.diffData) {
    return;
  }
  const navpop = download.owner;
  completedNavpopTask(navpop);
  let pages;
  let revisions = [];
  try {
    ({
      pages
    } = getJsObj(download.data).query);
    for (const page of pages) {
      revisions = [...revisions, ...page.revisions];
    }
    for (const revision of revisions) {
      if (revision.revid === navpop.diffData.oldRev.revid) {
        navpop.diffData.oldRev.revision = revision;
      } else if (revision.revid === navpop.diffData.newRev.revid) {
        navpop.diffData.newRev.revision = revision;
      }
    }
  } catch {
    errlog("Could not get diff");
  }
  insertDiff(navpop);
};
var rmBoringLines = (a, b, context) => {
  if (context === void 0) {
    context = 2;
  }
  const aa = [];
  const aaa = [];
  const bb = [];
  const bbb = [];
  let i;
  let j;
  for (i = 0; i < a.length; ++i) {
    if (!a[i].paired) {
      aa[i] = 1;
    } else if (countCrossings(b, a, i, true)) {
      aa[i] = 1;
      bb[a[i].row] = 1;
    }
  }
  for (i = 0; i < b.length; ++i) {
    if (bb[i] === 1) {
      continue;
    }
    if (!b[i].paired) {
      bb[i] = 1;
    }
  }
  for (i = 0; i < b.length; ++i) {
    if (bb[i] === 1) {
      for (j = Math.max(0, i - context); j < Math.min(b.length, i + context); ++j) {
        if (!bb[j]) {
          bb[j] = 1;
          aa[b[j].row] = 0.5;
        }
      }
    }
  }
  for (i = 0; i < a.length; ++i) {
    if (aa[i] === 1) {
      for (j = Math.max(0, i - context); j < Math.min(a.length, i + context); ++j) {
        if (!aa[j]) {
          aa[j] = 1;
          bb[a[j].row] = 0.5;
        }
      }
    }
  }
  for (i = 0; i < bb.length; ++i) {
    if (bb[i] > 0) {
      if (b[i].paired) {
        bbb.push(b[i].text);
      } else {
        bbb.push(b[i]);
      }
    }
  }
  for (i = 0; i < aa.length; ++i) {
    if (aa[i] > 0) {
      if (a[i].paired) {
        aaa.push(a[i].text);
      } else {
        aaa.push(a[i]);
      }
    }
  }
  return {
    a: aaa,
    b: bbb
  };
};
var stripOuterCommonLines = (a, b, context) => {
  let i = 0;
  while (i < a.length && i < b.length && a[i] === b[i]) {
    ++i;
  }
  let j = a.length - 1;
  let k = b.length - 1;
  while (j >= 0 && k >= 0 && a[j] === b[k]) {
    --j;
    --k;
  }
  return {
    a: a.slice(Math.max(0, i - 1 - context), Math.min(a.length + 1, j + context + 1)),
    b: b.slice(Math.max(0, i - 1 - context), Math.min(b.length + 1, k + context + 1))
  };
};
var insertDiff = (navpop) => {
  let oldlines = navpop.diffData.oldRev.revision.content.split("\n");
  let newlines = navpop.diffData.newRev.revision.content.split("\n");
  let inner = stripOuterCommonLines(oldlines, newlines, getValueOf("popupDiffContextLines"));
  oldlines = inner.a;
  newlines = inner.b;
  let truncated = false;
  getValueOf("popupDiffMaxLines");
  if (oldlines.length > pg.option.popupDiffMaxLines || newlines.length > pg.option.popupDiffMaxLines) {
    truncated = true;
    inner = stripOuterCommonLines(oldlines.slice(0, pg.option.popupDiffMaxLines), newlines.slice(0, pg.option.popupDiffMaxLines), pg.option.popupDiffContextLines);
    oldlines = inner.a;
    newlines = inner.b;
  }
  const lineDiff = diff(oldlines, newlines);
  const lines2 = rmBoringLines(lineDiff.o, lineDiff.n);
  const oldlines2 = lines2.a;
  const newlines2 = lines2.b;
  let html = "<hr>";
  if (getValueOf("popupDiffDates")) {
    html += diffDatesTable(navpop);
    html += "<hr>";
  }
  html += shortenDiffString(diffString(oldlines2.join("\n"), newlines2.join("\n")), getValueOf("popupDiffContextCharacters")).join("<hr>");
  setPopupTipsAndHTML(html.split("\n").join("<br>") + (truncated ? `<hr><b>${popupString("Diff truncated for performance reasons")}</b>` : ""), "popupPreview", navpop.idNumber);
};
var diffDatesTable = (navpop) => {
  let html = '<table class="popup_diff_dates">';
  html += diffDatesTableRow(navpop.diffData.newRev.revision, tprintf("New revision"));
  html += diffDatesTableRow(navpop.diffData.oldRev.revision, tprintf("Old revision"));
  html += "</table>";
  return html;
};
var diffDatesTableRow = (revision, label) => {
  let txt = "";
  const lastModifiedDate = new Date(revision.timestamp);
  txt = formattedDateTime(lastModifiedDate);
  const revlink = generalLink({
    url: `${mw.config.get("wgScript")}?oldid=${revision.revid}`,
    text: label,
    title: label
  });
  return simplePrintf("<tr><td>%s</td><td>%s</td></tr>", [revlink, txt]);
};
//! src/Navigation_popups/modules/actions.ts
var setupTooltips = (container, remove, force, popData) => {
  log(`setupTooltips, container=${container}, remove=${remove}`);
  if (!container) {
    if (getValueOf("popupOnEditSelection") && document && document.editform && document.editform.wpTextbox1) {
      document.editform.wpTextbox1.onmouseup = doSelectionPopup;
    }
    container = defaultPopupsContainer();
  }
  if (!remove && !force && container.ranSetupTooltipsAlready) {
    return;
  }
  container.ranSetupTooltipsAlready = !remove;
  const anchors = container.querySelectorAll("a");
  setupTooltipsLoop(anchors, 0, 250, 100, remove, popData);
};
var defaultPopupsContainer = () => {
  if (getValueOf("popupOnlyArticleLinks")) {
    return document.querySelector(".skin-vector-2022 .vector-body") || document.querySelector("#mw_content") || document.querySelector("#content") || document.querySelector("#article") || document;
  }
  return document;
};
var setupTooltipsLoop = function setupTooltipsLoop2(anchors, begin, howmany, sleep, remove, popData, ...args) {
  log(simplePrintf("setupTooltipsLoop(%s,%s,%s,%s,%s)", [anchors, begin, howmany, sleep, remove, popData, ...args]));
  const finish = begin + howmany;
  const loopend = Math.min(finish, anchors.length);
  let j = loopend - begin;
  log(`setupTooltips: anchors.length=${anchors.length}, begin=${begin}, howmany=${howmany}, loopend=${loopend}, remove=${remove}`);
  const doTooltip = remove ? removeTooltip : addTooltip;
  if (j > 0) {
    do {
      const a = anchors[loopend - j];
      if (a === void 0 || !a || !a.href) {
        log(`got null anchor at index ${loopend - j}`);
        continue;
      }
      doTooltip(a, popData);
    } while (--j);
  }
  if (finish < anchors.length) {
    setTimeout(() => {
      setupTooltipsLoop2(anchors, finish, howmany, sleep, remove, popData);
    }, sleep);
  } else {
    if (!remove && !getValueOf("popupTocLinks")) {
      rmTocTooltips();
    }
    pg.flag.finishedLoading = true;
  }
};
var rmTocTooltips = () => {
  const toc = document.querySelector("#toc");
  if (toc) {
    const tocLinks = toc.querySelectorAll("a");
    const tocLen = tocLinks.length;
    for (let j = 0; j < tocLen; ++j) {
      removeTooltip(tocLinks[j], true);
    }
  }
};
var addTooltip = (a, popData) => {
  if (!isPopupLink(a)) {
    return;
  }
  a.onmouseover = mouseOverWikiLink;
  a.onmouseout = mouseOutWikiLink;
  a.onmousedown = killPopup;
  a.hasPopup = true;
  a.popData = popData;
};
var removeTooltip = (a, _force) => {
  if (!a.hasPopup) {
    return;
  }
  a.onmouseover = null;
  a.onmouseout = null;
  if (a.originalTitle) {
    a.title = a.originalTitle;
  }
  a.hasPopup = false;
};
var removeTitle = (a) => {
  a.originalTitle || (a.originalTitle = a.title);
  a.title = "";
};
var restoreTitle = (a) => {
  if (a.title || !a.originalTitle) {
    return;
  }
  a.title = a.originalTitle;
};
var registerHooks = (np) => {
  const popupMaxWidth = getValueOf("popupMaxWidth");
  if (typeof popupMaxWidth === "number") {
    const setMaxWidth = () => {
      np.mainDiv.style.maxWidth = `${popupMaxWidth}px`;
      np.maxWidth = popupMaxWidth;
    };
    np.addHook(setMaxWidth, "unhide", "before");
  }
  np.addHook(addPopupShortcuts, "unhide", "after");
  np.addHook(rmPopupShortcuts, "hide", "before");
};
var removeModifierKeyListener = (a) => {
  document.removeEventListener("keydown", a.modifierKeyListener, false);
  document.removeEventListener("keyup", a.modifierKeyListener, false);
};
var mouseOverWikiLink = function mouseOverWikiLink3(evt) {
  if (getValueOf("popupModifier")) {
    const action = getValueOf("popupModifierAction");
    const key = action === "disable" ? "keyup" : "keydown";
    const self2 = this;
    self2.modifierKeyListener = (evt2) => {
      mouseOverWikiLink2(self2, evt2);
    };
    document.addEventListener(key, self2.modifierKeyListener, false);
  }
  return mouseOverWikiLink2(this, evt);
};
var footnoteTarget = (a) => {
  const aTitle = Title.fromAnchor(a);
  const anch = aTitle.anchor;
  if (!/^(cite_note-|_note-|endnote)/.test(anch)) {
    return false;
  }
  const lTitle = Title.fromURL(location.href);
  if (lTitle.toString(true) !== aTitle.toString(true)) {
    return false;
  }
  let el = document.getElementById(`${anch}`);
  while (el && typeof el.nodeName === "string") {
    const nt = el.nodeName.toLowerCase();
    if (nt === "li") {
      return el;
    } else if (nt === "body") {
      return false;
    } else if (el.parentNode) {
      el = el.parentNode;
    } else {
      return false;
    }
  }
  return false;
};
var footnotePreview = (x, navpop) => {
  setPopupHTML(`<hr>${x.innerHTML}`, "popupPreview", navpop.idNumber);
};
var modifierPressed = (evt) => {
  const mod = getValueOf("popupModifier");
  if (!mod) {
    return false;
  }
  return evt && evt[`${mod.toLowerCase()}Key`];
};
var isCorrectModifier = (_a, evt) => {
  if (!getValueOf("popupModifier")) {
    return true;
  }
  const action = getValueOf("popupModifierAction");
  return action === "enable" && modifierPressed(evt) || action === "disable" && !modifierPressed(evt);
};
var mouseOverWikiLink2 = (a, evt) => {
  if (!isCorrectModifier(a, evt)) {
    return;
  }
  if (getValueOf("removeTitles")) {
    removeTitle(a);
  }
  if (a === pg.current.link && a.navpopup && a.navpopup.isVisible()) {
    return;
  }
  pg.current.link = a;
  if (getValueOf("simplePopups") && !pg.option.popupStructure) {
    setDefault("popupStructure", "original");
  }
  const article = new Title().fromAnchor(a);
  pg.current.article = article;
  if (!a.navpopup) {
    a.navpopup = newNavpopup(a, article);
    pg.current.linksHash[a.href] = a.navpopup;
    pg.current.links.push(a);
  }
  if (a.navpopup.pending === null || a.navpopup.pending !== 0) {
    simplePopupContent(a, article);
  }
  a.navpopup.showSoonIfStable(a.navpopup.delay);
  clearInterval(pg.timer.checkPopupPosition);
  pg.timer.checkPopupPosition = setInterval(checkPopupPosition, 600);
  if (getValueOf("simplePopups") && getValueOf("popupPreviewButton") && !a.simpleNoMore) {
    const d = document.createElement("div");
    d.className = "popupPreviewButtonDiv";
    const s = document.createElement("span");
    d.append(s);
    s.className = "popupPreviewButton";
    s[`on${getValueOf("popupPreviewButtonEvent")}`] = () => {
      a.simpleNoMore = true;
      d.style.display = "none";
      nonsimplePopupContent(a, article);
    };
    s.innerHTML = popupString("show preview");
    setPopupHTML(d, "popupPreview", a.navpopup.idNumber);
  }
  if (a.navpopup.pending !== 0) {
    nonsimplePopupContent(a, article);
  }
};
var simplePopupContent = (a, article) => {
  a.navpopup.hasPopupMenu = false;
  a.navpopup.setInnerHTML(popupHTML(a));
  fillEmptySpans({
    navpopup: a.navpopup
  });
  if (getValueOf("popupDraggable")) {
    let dragHandle = getValueOf("popupDragHandle") || null;
    if (dragHandle && dragHandle !== "all") {
      dragHandle += a.navpopup.idNumber;
    }
    setTimeout(() => {
      a.navpopup.makeDraggable(dragHandle);
    }, 150);
  }
  if (getValueOf("popupRedlinkRemoval") && a.className === "new") {
    setPopupHTML(`<br>${popupRedlinkHTML(article)}`, "popupRedlink", a.navpopup.idNumber);
  }
};
var debugData = (navpopup) => {
  if (getValueOf("popupDebugging") && navpopup.idNumber) {
    setPopupHTML(`idNumber=${navpopup.idNumber}, pending=${navpopup.pending}`, "popupError", navpopup.idNumber);
  }
};
var newNavpopup = (a, article) => {
  const navpopup = new Navpopup();
  navpopup.fuzz = 5;
  navpopup.delay = getValueOf("popupDelay") * 1e3;
  pg.idNumber = (pg.idNumber ?? 0) + 1;
  navpopup.idNumber = pg.idNumber;
  navpopup.parentAnchor = a;
  navpopup.parentPopup = a.popData && a.popData.owner;
  navpopup.article = article;
  registerHooks(navpopup);
  return navpopup;
};
var shouldShowNonSimple = (a) => {
  return !getValueOf("simplePopups") || a.simpleNoMore;
};
var shouldShow = (a, option) => {
  if (shouldShowNonSimple(a)) {
    return getValueOf(option);
  }
  return window[option] !== void 0 && window[option];
};
var nonsimplePopupContent = (a, article) => {
  let diff2;
  let history;
  const params = parseParams(a.href);
  const oldid = params.oldid === void 0 ? null : params.oldid;
  if (shouldShow(a, "popupPreviewDiffs")) {
    ({
      diff: diff2
    } = params);
  }
  if (shouldShow(a, "popupPreviewHistory")) {
    history = params.action === "history";
  }
  a.navpopup.pending = 0;
  const referenceElement = footnoteTarget(a);
  if (referenceElement) {
    footnotePreview(referenceElement, a.navpopup);
  } else if (diff2 || diff2 === 0) {
    loadDiff(article, oldid, diff2, a.navpopup);
  } else if (history) {
    loadAPIPreview("history", article, a.navpopup);
  } else if (shouldShowNonSimple(a) && pg.re.contribs.test(a.href)) {
    loadAPIPreview("contribs", article, a.navpopup);
  } else if (shouldShowNonSimple(a) && pg.re.backlinks.test(a.href)) {
    loadAPIPreview("backlinks", article, a.navpopup);
  } else if (
    // FIXME should be able to get all preview combinations with options
    article.namespaceId() === pg.nsImageId && (shouldShow(a, "imagePopupsForImages") || !anchorContainsImage(a))
  ) {
    loadAPIPreview("imagepagepreview", article, a.navpopup);
    loadImage(article, a.navpopup);
  } else {
    if (article.namespaceId() === pg.nsCategoryId && shouldShow(a, "popupCategoryMembers")) {
      loadAPIPreview("category", article, a.navpopup);
    } else if ((article.namespaceId() === pg.nsUserId || article.namespaceId() === pg.nsUsertalkId) && shouldShow(a, "popupUserInfo")) {
      loadAPIPreview("userinfo", article, a.navpopup);
    }
    if (shouldShowNonSimple(a)) {
      startArticlePreview(article, oldid, a.navpopup);
    }
  }
};
var pendingNavpopTask = (navpop) => {
  if (navpop && navpop.pending === null) {
    navpop.pending = 0;
  }
  navpop.pending = (navpop.pending ?? 0) + 1;
  debugData(navpop);
};
var completedNavpopTask = (navpop) => {
  if (navpop && navpop.pending) {
    --navpop.pending;
  }
  debugData(navpop);
};
var startArticlePreview = (article, oldid, navpop) => {
  navpop.redir = 0;
  loadPreview(article, oldid, navpop);
};
var loadPreview = (article, oldid, navpop) => {
  if (!navpop.redir) {
    navpop.originalArticle = article;
  }
  article.oldid = oldid;
  loadAPIPreview("revision", article, navpop);
};
var loadPreviewFromRedir = (redirMatch, navpop) => {
  const target = new Title().fromWikiText(redirMatch[2]);
  if (navpop.article.anchor) {
    target.anchor = navpop.article.anchor;
  }
  navpop.redir++;
  navpop.redirTarget = target;
  const warnRedir = redirLink(target, navpop.article);
  setPopupHTML(warnRedir, "popupWarnRedir", navpop.idNumber);
  navpop.article = target;
  fillEmptySpans({
    redir: true,
    redirTarget: target,
    navpopup: navpop
  });
  return loadPreview(target, null, navpop);
};
var insertPreview = (download) => {
  if (!download.owner) {
    return;
  }
  const redirMatch = pg.re.redirect.exec(download.data);
  if (download.owner.redir === 0 && redirMatch) {
    loadPreviewFromRedir(redirMatch, download.owner);
    return;
  }
  if (download.owner.visible || !getValueOf("popupLazyPreviews")) {
    insertPreviewNow(download);
  } else {
    const id = download.owner.redir ? "PREVIEW_REDIR_HOOK" : "PREVIEW_HOOK";
    download.owner.addHook(() => {
      insertPreviewNow(download);
      return true;
    }, "unhide", "after", id);
  }
};
var insertPreviewNow = (download) => {
  if (!download.owner) {
    return;
  }
  const wikiText = download.data;
  const navpop = download.owner;
  const art = navpop.redirTarget || navpop.originalArticle;
  makeFixDabs(wikiText, navpop);
  if (getValueOf("popupSummaryData")) {
    getPageInfo(wikiText, download);
    setPopupTrailer(getPageInfo(wikiText, download), navpop.idNumber);
  }
  let imagePage = "";
  imagePage = art.namespaceId() === pg.nsImageId ? art.toString() : getValidImageFromWikiText(wikiText);
  if (imagePage) {
    loadImage(Title.fromWikiText(imagePage), navpop);
  }
  if (getValueOf("popupPreviews")) {
    insertArticlePreview(download, art, navpop);
  }
};
var insertArticlePreview = (download, art, navpop) => {
  if (download && typeof download.data === "string") {
    if (art.namespaceId() === pg.nsTemplateId && getValueOf("popupPreviewRawTemplates")) {
      const h = `<hr><span style="font-family: monospace;">${download.data.entify().split(String.raw`\n`).join(String.raw`<br>\n`)}</span>`;
      setPopupHTML(h, "popupPreview", navpop.idNumber);
    } else {
      const p = prepPreviewmaker(download.data, art, navpop);
      p.showPreview();
    }
  }
};
var prepPreviewmaker = (data, article, navpop) => {
  const d = anchorize(data, article.anchorString());
  const urlBase = joinPath([pg.wiki.articlebase, article.urlString()]);
  const p = new Previewmaker(d, urlBase, navpop);
  return p;
};
var anchorize = (d, anch) => {
  if (!anch) {
    return d;
  }
  const anchRe = new RegExp(`(?:=+\\s*${literalizeRegex(anch).replace(/[ _]/g, "[_ ]")}\\s*=+|\\{\\{\\s*${getValueOf("popupAnchorRegexp")}\\s*(?:\\|[^|}]*)*?\\s*${literalizeRegex(anch)}\\s*(?:\\|[^}]*)?}})`);
  const match = d.match(anchRe);
  if (match && match.length > 0 && match[0]) {
    return d.slice(Math.max(0, d.indexOf(match[0])));
  }
  const lines = d.split("\n");
  for (let i = 0; i < lines.length; ++i) {
    lines[i] = lines[i].replace(/\[{2}([^\]|]*?\|)?(.*?)]{2}/g, "$2").replace(/'''([^'])/g, "$1").replace(/''([^'])/g, "$1");
    if (anchRe.test(lines[i])) {
      return d.split("\n").slice(i).join("\n").replace(/^[^=]*/, "");
    }
  }
  return d;
};
var killPopup = function killPopup2() {
  removeModifierKeyListener(this);
  if (getValueOf("popupShortcutKeys")) {
    rmPopupShortcuts();
  }
  if (!pg) {
    return;
  }
  if (pg.current.link && pg.current.link.navpopup) {
    pg.current.link.navpopup.banish();
  }
  pg.current.link = null;
  abortAllDownloads();
  if (pg.timer.checkPopupPosition) {
    clearInterval(pg.timer.checkPopupPosition);
    pg.timer.checkPopupPosition = null;
  }
  return true;
};
//! src/Navigation_popups/modules/init.ts
var setSiteInfo = () => {
  if (window.popupLocalDebug) {
    pg.wiki.hostname = "en.wikipedia.org";
  } else {
    pg.wiki.hostname = location.hostname;
  }
  pg.wiki.wikimedia = /(wiki([mp]edia|source|books|news|quote|versity|species|voyage|data)|metawiki|wiktionary|mediawiki)\.org/.test(pg.wiki.hostname);
  pg.wiki.wikia = /\.wikia\.com$/i.test(pg.wiki.hostname);
  pg.wiki.isLocal = pg.wiki.hostname.startsWith("localhost");
  pg.wiki.commons = pg.wiki.wikimedia && pg.wiki.hostname !== "commons.wikimedia.org" ? "commons.wikimedia.org" : null;
  pg.wiki.lang = mw.config.get("wgContentLanguage");
  const port = location.port ? `:${location.port}` : "";
  pg.wiki.sitebase = pg.wiki.hostname + port;
};
var setUserInfo = () => {
  const params = {
    action: "query",
    list: "users",
    ususers: mw.config.get("wgUserName"),
    usprop: "rights"
  };
  pg.user.canReview = false;
  if (getValueOf("popupReview")) {
    getMwApi().get(params).done((data) => {
      const [{
        rights
      }] = data.query.users;
      pg.user.canReview = rights.includes("review");
    });
  }
};
var fetchSpecialPageNames = () => {
  const params = {
    action: "query",
    format: "json",
    formatversion: "2",
    meta: "siteinfo",
    siprop: "specialpagealiases",
    uselang: "content",
    // cache for an hour
    smaxage: 3600,
    maxage: 3600
  };
  return getMwApi().get(params).then((data) => {
    pg.wiki.specialpagealiases = data.query.specialpagealiases;
  });
};
var setTitleBase = () => {
  const protocol = window.popupLocalDebug ? "http:" : location.protocol;
  pg.wiki.articlePath = mw.config.get("wgArticlePath").replace(/\/\$1/, "");
  pg.wiki.botInterfacePath = mw.config.get("wgScript");
  pg.wiki.APIPath = `${mw.config.get("wgScriptPath")}/api.php`;
  const titletail = `${pg.wiki.botInterfacePath}?title=`;
  pg.wiki.titlebase = `${protocol}//${pg.wiki.sitebase}${titletail}`;
  pg.wiki.wikibase = `${protocol}//${pg.wiki.sitebase}${pg.wiki.botInterfacePath}`;
  pg.wiki.apiwikibase = `${protocol}//${pg.wiki.sitebase}${pg.wiki.APIPath}`;
  pg.wiki.articlebase = `${protocol}//${pg.wiki.sitebase}${pg.wiki.articlePath}`;
  pg.wiki.commonsbase = `${protocol}//${pg.wiki.commons}${pg.wiki.botInterfacePath}`;
  pg.wiki.apicommonsbase = `${protocol}//${pg.wiki.commons}${pg.wiki.APIPath}`;
  pg.re.basenames = new RegExp(`^(${map(literalizeRegex, [pg.wiki.titlebase, pg.wiki.articlebase]).join("|")})`);
};
var setMainRegex = () => {
  const reStart = "[^:]*://";
  let preTitles = `${literalizeRegex(mw.config.get("wgScriptPath"))}/(?:index[.]php|wiki[.]phtml)[?]title=`;
  preTitles += `|${literalizeRegex(`${pg.wiki.articlePath}/`)}`;
  const reEnd = `(${preTitles})([^&?#]*)[^#]*(?:#(.+))?`;
  pg.re.main = new RegExp(reStart + literalizeRegex(pg.wiki.sitebase) + reEnd);
};
var buildSpecialPageGroup = (specialPageObj) => {
  const variants = [];
  variants.push(mw.util.escapeRegExp(specialPageObj.realname), mw.util.escapeRegExp(encodeURI(specialPageObj.realname)));
  for (const alias of specialPageObj.aliases) {
    variants.push(mw.util.escapeRegExp(alias), mw.util.escapeRegExp(encodeURI(alias)));
  }
  return variants.join("|");
};
var setRegexps = () => {
  setMainRegex();
  const sp = nsRe(pg.nsSpecialId);
  pg.re.urlNoPopup = new RegExp(`((title=|/)${sp}(?:%3A|:)|section=[0-9]|^#$)`);
  for (const specialpage of pg.wiki.specialpagealiases) {
    switch (specialpage.realname) {
      case "Contributions":
        pg.re.contribs = new RegExp(`(title=|/)${sp}(?:%3A|:)(?:${buildSpecialPageGroup(specialpage)})(&target=|/|/${nsRe(pg.nsUserId)}:)(.*)`, "i");
        break;
      case "Diff":
        pg.re.specialdiff = new RegExp(`/${sp}(?:%3A|:)(?:${buildSpecialPageGroup(specialpage)})/([^?#]*)`, "i");
        break;
      case "Emailuser":
        pg.re.email = new RegExp(`(title=|/)${sp}(?:%3A|:)(?:${buildSpecialPageGroup(specialpage)})(&target=|/|/(?:${nsRe(pg.nsUserId)}:)?)(.*)`, "i");
        break;
      case "Whatlinkshere":
        pg.re.backlinks = new RegExp(`(title=|/)${sp}(?:%3A|:)(?:${buildSpecialPageGroup(specialpage)})(&target=|/)([^&]*)`, "i");
        break;
    }
  }
  const im = nsReImage();
  pg.re.image = new RegExp(`(^|\\[\\[)${im}: *([^|\\]]*[^|\\] ])${String.raw`([^0-9\]]*([0-9]+) *px)?|(?:\n *[|]?|[|]) *`}(${getValueOf("popupImageVarsRegexp")}) *= *(?:\\[\\[ *)?(?:${im}:)?${String.raw`([^|]*?)(?:\]\])? *[|]? *\n`}`, "img");
  pg.re.imageBracketCount = 6;
  pg.re.category = new RegExp(`\\[\\[${nsRe(pg.nsCategoryId)}: *([^|\\]]*[^|\\] ]) *`, "i");
  pg.re.categoryBracketCount = 1;
  pg.re.ipUser = /^(?::(?::|(?::[\dA-Fa-f]{1,4}){1,7})|[\dA-Fa-f]{1,4}(?::[\dA-Fa-f]{1,4}){0,6}::|[\dA-Fa-f]{1,4}(?::[\dA-Fa-f]{1,4}){7})|(((25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)\.){3}(25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d))$/;
  pg.re.stub = new RegExp(getValueOf("popupStubRegexp"), "im");
  pg.re.disambig = new RegExp(getValueOf("popupDabRegexp"), "im");
  pg.re.oldid = /[&?]oldid=([^&]*)/;
  pg.re.diff = /[&?]diff=([^&]*)/;
};
var setupCache = () => {
  pg.cache.pages = [];
};
var setMisc = () => {
  pg.current.link = null;
  pg.current.links = [];
  pg.current.linksHash = {};
  setupCache();
  pg.timer.checkPopupPosition = null;
  pg.counter.loop = 0;
  pg.idNumber = 0;
  pg.misc.decodeExtras = [
    {
      from: "%2C",
      to: ","
    },
    {
      from: "_",
      to: " "
    },
    {
      from: "%24",
      to: "$"
    },
    {
      from: "%26",
      to: "&"
    }
    // no ,
  ];
};
var getMwApi = () => {
  if (!pg.api.client) {
    pg.api.userAgent = "Navigation popups/1.0";
    pg.api.client = api;
  }
  return pg.api.client;
};
var setupPopupsCompleted = false;
var setupPopups = function setupPopups2(callback) {
  if (setupPopupsCompleted) {
    if (typeof callback === "function") {
      callback();
    }
    return;
  }
  fetchSpecialPageNames().then(() => {
    setupDebugging();
    setSiteInfo();
    setTitleBase();
    setOptions();
    setUserInfo();
    setNamespaces();
    setInterwiki();
    setRegexps();
    setRedirs();
    setMisc();
    setupLivePreview();
    setupTooltips();
    log("In setupPopups(), just called setupTooltips()");
    Navpopup.tracker.enable();
    setupPopupsCompleted = true;
    if (typeof callback === "function") {
      callback();
    }
  });
};
//! src/Navigation_popups/modules/autoedit.ts
var substitute = (data, cmdBody) => {
  const fromRe = new RegExp(cmdBody.from, cmdBody.flags);
  return data.replace(fromRe, cmdBody.to);
};
var execCmds = (data, cmdList) => {
  for (const element of cmdList) {
    data = element.action(data, element);
  }
  return data;
};
var parseCmd = function parseCmd2(str) {
  if (str.length === 0) {
    return [];
  }
  let p = false;
  switch (str.charAt(0)) {
    case "s":
      p = parseSubstitute(str);
      break;
    default:
      return false;
  }
  if (p) {
    return [p, parseCmd2(p.remainder)];
  }
  return false;
};
var unEscape = (str, sep) => {
  return str.split("\\\\").join("\\").split(`\\${sep}`).join(sep).split(String.raw`\n`).join("\n");
};
var parseSubstitute = (str) => {
  let from;
  let to;
  let flags;
  let tmp;
  if (str.length < 4) {
    return false;
  }
  const sep = str.charAt(1);
  str = str.slice(2);
  tmp = skipOver(str, sep);
  if (tmp) {
    from = tmp.segment;
    str = tmp.remainder;
  } else {
    return false;
  }
  tmp = skipOver(str, sep);
  if (tmp) {
    to = tmp.segment;
    str = tmp.remainder;
  } else {
    return false;
  }
  flags = "";
  if (str.length > 0) {
    tmp = skipOver(str, ";") || skipToEnd(str, ";");
    if (tmp) {
      flags = tmp.segment;
      str = tmp.remainder;
    }
  }
  return {
    action: substitute,
    from,
    to,
    flags,
    remainder: str
  };
};
var skipOver = (str, sep) => {
  const endSegment = findNext(str, sep);
  if (endSegment < 0) {
    return false;
  }
  const segment = unEscape(str.slice(0, Math.max(0, endSegment)), sep);
  return {
    segment,
    remainder: str.slice(Math.max(0, endSegment + 1))
  };
};
var skipToEnd = (str, _sep) => {
  return {
    segment: str,
    remainder: ""
  };
};
var findNext = (str, ch) => {
  for (let i = 0; i < str.length; ++i) {
    if (str.charAt(i) === "\\") {
      i += 2;
    }
    if (str.charAt(i) === ch) {
      return i;
    }
  }
  return -1;
};
var setCheckbox = (param, box) => {
  const val = mw.util.getParamValue(param);
  if (val) {
    switch (val) {
      case "1":
      case "yes":
      case "true":
        box.checked = true;
        break;
      case "0":
      case "no":
      case "false":
        box.checked = false;
    }
  }
};
var autoEditAlreadyRan = false;
var autoEdit = function autoEdit2() {
  setupPopups(() => {
    if (mw.util.getParamValue("autoimpl") !== popupString("autoedit_version")) {
      return false;
    }
    if (mw.util.getParamValue("autowatchlist") && mw.util.getParamValue("actoken") === autoClickToken()) {
      pg.fn.modifyWatchlist(mw.util.getParamValue("title"), mw.util.getParamValue("action"));
    }
    if (!document.editform) {
      return false;
    }
    if (autoEditAlreadyRan) {
      return false;
    }
    autoEditAlreadyRan = true;
    const cmdString = mw.util.getParamValue("autoedit");
    if (cmdString) {
      try {
        const editbox = document.editform.wpTextbox1;
        const cmdList = parseCmd(cmdString);
        const input = editbox.value;
        const output = execCmds(input, cmdList);
        editbox.value = output;
      } catch {
        return false;
      }
    }
    setCheckbox("autominor", document.editform.wpMinoredit);
    setCheckbox("autowatch", document.editform.wpWatchthis);
    const rvid = mw.util.getParamValue("autorv");
    if (rvid) {
      const url = `${pg.wiki.apiwikibase}?action=query&format=json&formatversion=2&prop=revisions&revids=${rvid}`;
      startDownload(url, null, autoEdit22);
    } else {
      autoEdit22();
    }
    return false;
  });
};
var autoEdit22 = (d) => {
  let summary = mw.util.getParamValue("autosummary");
  let summaryprompt = mw.util.getParamValue("autosummaryprompt");
  let summarynotice = "";
  if (d && d.data && mw.util.getParamValue("autorv")) {
    const s = getRvSummary(summary, d.data);
    if (s === false) {
      summaryprompt = true;
      summarynotice = popupString("Failed to get revision information, please edit manually.\n\n");
      summary = simplePrintf(summary, [mw.util.getParamValue("autorv"), "(unknown)", "(unknown)"]);
    } else {
      summary = s;
    }
  }
  if (summaryprompt) {
    const txt = summarynotice + popupString("Enter a non-empty edit summary or press cancel to abort");
    const response = prompt(txt, summary);
    if (response) {
      summary = response;
    } else {
      return;
    }
  }
  if (summary) {
    document.editform.wpSummary.value = summary;
  }
  setTimeout(autoEdit3, 100);
};
var autoClickToken = () => {
  return mw.user.sessionId();
};
var autoEdit3 = () => {
  if (mw.util.getParamValue("actoken") !== autoClickToken()) {
    return;
  }
  const btn = mw.util.getParamValue("autoclick");
  if (btn) {
    if (document.editform && document.editform[btn]) {
      const button = document.editform[btn];
      const msg = tprintf("The %s button has been automatically clicked. Please wait for the next page to load.", [button.value]);
      bannerMessage(msg);
      document.title = `(${document.title})`;
      button.click();
    } else {
      void mw.notify(tprintf("Could not find button %s. Please check the settings in your javascript file.", [btn]), {
        tag: "popups",
        type: "error"
      });
    }
  }
};
var bannerMessage = (s) => {
  const headings = document.querySelectorAll("h1");
  if (headings) {
    const div = document.createElement("div");
    div.innerHTML = `<font size=+1><b>${pg.escapeQuotesHTML(s)}</b></font>`;
    headings[0].parentNode.insertBefore(div, headings[0]);
  }
};
var getRvSummary = (template, json) => {
  try {
    const o = getJsObj(json);
    const [edit] = anyChild(o.query.pages).revisions;
    const timestamp = edit.timestamp.split(/[A-Z]/g).join(" ").replace(/^ *| *$/g, "");
    return simplePrintf(template, [edit.revid, timestamp, edit.userhidden ? "(hidden)" : edit.user]);
  } catch {
    return false;
  }
};
//! src/Navigation_popups/modules/run.ts
var popups = () => {
  if (window.pg && !(window.pg instanceof HTMLElement)) {
    return;
  }
  window.pg = pg;
  if (document.readyState === "complete") {
    autoEdit();
  } else {
    $(window).on("load", autoEdit);
  }
  (() => {
    let once = true;
    const dynamicContentHandler = ($content) => {
      if ($content.attr("id") === "mw-content-text" && once) {
        once = false;
        return;
      }
      const registerHooksForVisibleNavpops = () => {
        for (let i = 0; pg.current.links && i < pg.current.links.length; i++) {
          const navpop = pg.current.links[i].navpopup;
          if (!navpop || !navpop.isVisible()) {
            continue;
          }
          Navpopup.tracker.addHook(posCheckerHook(navpop));
        }
      };
      const doIt = () => {
        registerHooksForVisibleNavpops();
        $content.each((_index, element) => {
          element.ranSetupTooltipsAlready = false;
          setupTooltips(element);
        });
      };
      setupPopups(doIt);
    };
    mw.hook("wikipage.content").add(dynamicContentHandler);
    mw.hook("ext.echo.overlay.beforeShowingOverlay").add(($overlay) => {
      dynamicContentHandler($overlay.find(".mw-echo-state"));
    });
  })();
};
//! src/Navigation_popups/Navigation_popups.ts
$(popups);

})();

/* </nowiki> */


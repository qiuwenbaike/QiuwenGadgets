/**
 * SPDX-License-Identifier: CC-BY-SA-4.0 OR Apache-2.0
 * _addText: '{{Gadget Header|title=Wikiplus|license=CC-BY-SA-4.0}}'
 *
 * Wikiplus
 *
 * @base {@link https://github.com/Wikiplus/Wikiplus}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/Wikiplus}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Wikiplus/}
 * @author Eridanus Sora (妹空酱)
 * @license CC-BY-SA-4.0 {@link https://www.qiuwenbaike.cn/wiki/H:CC-BY-SA-4.0} OR Apache-2.0 {@link http://www.apache.org/licenses/LICENSE-2.0}
 */

/**
 * Copyright 2014-2024 Eridanus Sora (妹空酱)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
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

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/is-callable.js
var require_is_callable = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/is-callable.js"(exports, module2) {
    "use strict";
    var documentAll = typeof document == "object" && document.all;
    module2.exports = typeof documentAll == "undefined" && documentAll !== void 0 ? function(argument) {
      return typeof argument == "function" || argument === documentAll;
    } : function(argument) {
      return typeof argument == "function";
    };
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/fails.js
var require_fails = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/fails.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/descriptors.js
var require_descriptors = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/descriptors.js"(exports, module2) {
    "use strict";
    var fails = require_fails();
    module2.exports = !fails(function() {
      return Object.defineProperty({}, 1, { get: function() {
        return 7;
      } })[1] !== 7;
    });
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/global-this.js
var require_global_this = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/global-this.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/is-object.js
var require_is_object = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/is-object.js"(exports, module2) {
    "use strict";
    var isCallable = require_is_callable();
    module2.exports = function(it) {
      return typeof it == "object" ? it !== null : isCallable(it);
    };
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/document-create-element.js
var require_document_create_element = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/document-create-element.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/ie8-dom-define.js
var require_ie8_dom_define = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/ie8-dom-define.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/v8-prototype-define-bug.js
var require_v8_prototype_define_bug = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/v8-prototype-define-bug.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/an-object.js
var require_an_object = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/an-object.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/function-bind-native.js
var require_function_bind_native = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/function-bind-native.js"(exports, module2) {
    "use strict";
    var fails = require_fails();
    module2.exports = !fails(function() {
      var test = function() {
      }.bind();
      return typeof test != "function" || test.hasOwnProperty("prototype");
    });
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/function-call.js
var require_function_call = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/function-call.js"(exports, module2) {
    "use strict";
    var NATIVE_BIND = require_function_bind_native();
    var call = Function.prototype.call;
    module2.exports = NATIVE_BIND ? call.bind(call) : function() {
      return call.apply(call, arguments);
    };
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/get-built-in.js
var require_get_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/get-built-in.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/function-uncurry-this.js
var require_function_uncurry_this = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/function-uncurry-this.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/object-is-prototype-of.js
var require_object_is_prototype_of = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/object-is-prototype-of.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    module2.exports = uncurryThis({}.isPrototypeOf);
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/environment-user-agent.js
var require_environment_user_agent = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/environment-user-agent.js"(exports, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var navigator2 = globalThis2.navigator;
    var userAgent = navigator2 && navigator2.userAgent;
    module2.exports = userAgent ? String(userAgent) : "";
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/environment-v8-version.js
var require_environment_v8_version = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/environment-v8-version.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/symbol-constructor-detection.js
var require_symbol_constructor_detection = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/symbol-constructor-detection.js"(exports, module2) {
    "use strict";
    var V8_VERSION = require_environment_v8_version();
    var fails = require_fails();
    var globalThis2 = require_global_this();
    var $String = globalThis2.String;
    module2.exports = !!Object.getOwnPropertySymbols && !fails(function() {
      var symbol = Symbol("symbol detection");
      return !$String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
      !Symbol.sham && V8_VERSION && V8_VERSION < 41;
    });
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/use-symbol-as-uid.js
var require_use_symbol_as_uid = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/use-symbol-as-uid.js"(exports, module2) {
    "use strict";
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    module2.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/is-symbol.js
var require_is_symbol = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/is-symbol.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/try-to-string.js
var require_try_to_string = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/try-to-string.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/a-callable.js
var require_a_callable = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/a-callable.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/is-null-or-undefined.js
var require_is_null_or_undefined = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/is-null-or-undefined.js"(exports, module2) {
    "use strict";
    module2.exports = function(it) {
      return it === null || it === void 0;
    };
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/get-method.js
var require_get_method = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/get-method.js"(exports, module2) {
    "use strict";
    var aCallable = require_a_callable();
    var isNullOrUndefined = require_is_null_or_undefined();
    module2.exports = function(V, P) {
      var func = V[P];
      return isNullOrUndefined(func) ? void 0 : aCallable(func);
    };
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/ordinary-to-primitive.js
var require_ordinary_to_primitive = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/ordinary-to-primitive.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/is-pure.js
var require_is_pure = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/is-pure.js"(exports, module2) {
    "use strict";
    module2.exports = false;
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/define-global-property.js
var require_define_global_property = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/define-global-property.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/shared-store.js
var require_shared_store = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/shared-store.js"(exports, module2) {
    "use strict";
    var IS_PURE = require_is_pure();
    var globalThis2 = require_global_this();
    var defineGlobalProperty = require_define_global_property();
    var SHARED = "__core-js_shared__";
    var store = module2.exports = globalThis2[SHARED] || defineGlobalProperty(SHARED, {});
    (store.versions || (store.versions = [])).push({
      version: "3.38.0",
      mode: IS_PURE ? "pure" : "global",
      copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
      license: "https://github.com/zloirock/core-js/blob/v3.38.0/LICENSE",
      source: "https://github.com/zloirock/core-js"
    });
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/shared.js
var require_shared = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/shared.js"(exports, module2) {
    "use strict";
    var store = require_shared_store();
    module2.exports = function(key, value) {
      return store[key] || (store[key] = value || {});
    };
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/require-object-coercible.js
var require_require_object_coercible = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/require-object-coercible.js"(exports, module2) {
    "use strict";
    var isNullOrUndefined = require_is_null_or_undefined();
    var $TypeError = TypeError;
    module2.exports = function(it) {
      if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
      return it;
    };
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/to-object.js
var require_to_object = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/to-object.js"(exports, module2) {
    "use strict";
    var requireObjectCoercible = require_require_object_coercible();
    var $Object = Object;
    module2.exports = function(argument) {
      return $Object(requireObjectCoercible(argument));
    };
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/has-own-property.js
var require_has_own_property = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/has-own-property.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var toObject = require_to_object();
    var hasOwnProperty = uncurryThis({}.hasOwnProperty);
    module2.exports = Object.hasOwn || function hasOwn(it, key) {
      return hasOwnProperty(toObject(it), key);
    };
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/uid.js
var require_uid = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/uid.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/well-known-symbol.js
var require_well_known_symbol = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/well-known-symbol.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/to-primitive.js
var require_to_primitive = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/to-primitive.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/to-property-key.js
var require_to_property_key = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/to-property-key.js"(exports, module2) {
    "use strict";
    var toPrimitive = require_to_primitive();
    var isSymbol = require_is_symbol();
    module2.exports = function(argument) {
      var key = toPrimitive(argument, "string");
      return isSymbol(key) ? key : key + "";
    };
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/object-define-property.js
var require_object_define_property = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/object-define-property.js"(exports) {
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

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/function-name.js
var require_function_name = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/function-name.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/inspect-source.js
var require_inspect_source = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/inspect-source.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/weak-map-basic-detection.js
var require_weak_map_basic_detection = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/weak-map-basic-detection.js"(exports, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var isCallable = require_is_callable();
    var WeakMap = globalThis2.WeakMap;
    module2.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/create-property-descriptor.js
var require_create_property_descriptor = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/create-property-descriptor.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/create-non-enumerable-property.js
var require_create_non_enumerable_property = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/create-non-enumerable-property.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/shared-key.js
var require_shared_key = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/shared-key.js"(exports, module2) {
    "use strict";
    var shared = require_shared();
    var uid = require_uid();
    var keys = shared("keys");
    module2.exports = function(key) {
      return keys[key] || (keys[key] = uid(key));
    };
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/hidden-keys.js
var require_hidden_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/hidden-keys.js"(exports, module2) {
    "use strict";
    module2.exports = {};
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/internal-state.js
var require_internal_state = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/internal-state.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/make-built-in.js
var require_make_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/make-built-in.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/define-built-in.js
var require_define_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/define-built-in.js"(exports, module2) {
    "use strict";
    var isCallable = require_is_callable();
    var definePropertyModule = require_object_define_property();
    var makeBuiltIn = require_make_built_in();
    var defineGlobalProperty = require_define_global_property();
    module2.exports = function(O, key, value, options) {
      if (!options) options = {};
      var simple = options.enumerable;
      var name = options.name !== void 0 ? options.name : key;
      if (isCallable(value)) makeBuiltIn(value, name, options);
      if (options.global) {
        if (simple) O[key] = value;
        else defineGlobalProperty(key, value);
      } else {
        try {
          if (!options.unsafe) delete O[key];
          else if (O[key]) simple = true;
        } catch (error) {
        }
        if (simple) O[key] = value;
        else definePropertyModule.f(O, key, {
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

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/to-string-tag-support.js
var require_to_string_tag_support = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/to-string-tag-support.js"(exports, module2) {
    "use strict";
    var wellKnownSymbol = require_well_known_symbol();
    var TO_STRING_TAG = wellKnownSymbol("toStringTag");
    var test = {};
    test[TO_STRING_TAG] = "z";
    module2.exports = String(test) === "[object z]";
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/classof-raw.js
var require_classof_raw = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/classof-raw.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var toString = uncurryThis({}.toString);
    var stringSlice = uncurryThis("".slice);
    module2.exports = function(it) {
      return stringSlice(toString(it), 8, -1);
    };
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/classof.js
var require_classof = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/classof.js"(exports, module2) {
    "use strict";
    var TO_STRING_TAG_SUPPORT = require_to_string_tag_support();
    var isCallable = require_is_callable();
    var classofRaw = require_classof_raw();
    var wellKnownSymbol = require_well_known_symbol();
    var TO_STRING_TAG = wellKnownSymbol("toStringTag");
    var $Object = Object;
    var CORRECT_ARGUMENTS = classofRaw(/* @__PURE__ */ function() {
      return arguments;
    }()) === "Arguments";
    var tryGet = function(it, key) {
      try {
        return it[key];
      } catch (error) {
      }
    };
    module2.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
      var O, tag, result;
      return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) === "Object" && isCallable(O.callee) ? "Arguments" : result;
    };
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/to-string.js
var require_to_string = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/to-string.js"(exports, module2) {
    "use strict";
    var classof = require_classof();
    var $String = String;
    module2.exports = function(argument) {
      if (classof(argument) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
      return $String(argument);
    };
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/validate-arguments-length.js
var require_validate_arguments_length = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/validate-arguments-length.js"(exports, module2) {
    "use strict";
    var $TypeError = TypeError;
    module2.exports = function(passed, required) {
      if (passed < required) throw new $TypeError("Not enough arguments");
      return passed;
    };
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/modules/web.url-search-params.delete.js
var require_web_url_search_params_delete = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/modules/web.url-search-params.delete.js"() {
    "use strict";
    var defineBuiltIn = require_define_built_in();
    var uncurryThis = require_function_uncurry_this();
    var toString = require_to_string();
    var validateArgumentsLength = require_validate_arguments_length();
    var $URLSearchParams = URLSearchParams;
    var URLSearchParamsPrototype = $URLSearchParams.prototype;
    var append = uncurryThis(URLSearchParamsPrototype.append);
    var $delete = uncurryThis(URLSearchParamsPrototype["delete"]);
    var forEach = uncurryThis(URLSearchParamsPrototype.forEach);
    var push = uncurryThis([].push);
    var params = new $URLSearchParams("a=1&a=2&b=3");
    params["delete"]("a", 1);
    params["delete"]("b", void 0);
    if (params + "" !== "a=2") {
      defineBuiltIn(URLSearchParamsPrototype, "delete", function(name) {
        var length = arguments.length;
        var $value = length < 2 ? void 0 : arguments[1];
        if (length && $value === void 0) return $delete(this, name);
        var entries = [];
        forEach(this, function(v, k) {
          push(entries, { key: k, value: v });
        });
        validateArgumentsLength(length, 1);
        var key = toString(name);
        var value = toString($value);
        var index = 0;
        var dindex = 0;
        var found = false;
        var entriesLength = entries.length;
        var entry;
        while (index < entriesLength) {
          entry = entries[index++];
          if (found || entry.key === key) {
            found = true;
            $delete(this, entry.key);
          } else dindex++;
        }
        while (dindex < entriesLength) {
          entry = entries[dindex++];
          if (!(entry.key === key && entry.value === value)) append(this, entry.key, entry.value);
        }
      }, { enumerable: true, unsafe: true });
    }
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/modules/web.url-search-params.has.js
var require_web_url_search_params_has = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/modules/web.url-search-params.has.js"() {
    "use strict";
    var defineBuiltIn = require_define_built_in();
    var uncurryThis = require_function_uncurry_this();
    var toString = require_to_string();
    var validateArgumentsLength = require_validate_arguments_length();
    var $URLSearchParams = URLSearchParams;
    var URLSearchParamsPrototype = $URLSearchParams.prototype;
    var getAll = uncurryThis(URLSearchParamsPrototype.getAll);
    var $has = uncurryThis(URLSearchParamsPrototype.has);
    var params = new $URLSearchParams("a=1");
    if (params.has("a", 2) || !params.has("a", void 0)) {
      defineBuiltIn(URLSearchParamsPrototype, "has", function has(name) {
        var length = arguments.length;
        var $value = length < 2 ? void 0 : arguments[1];
        if (length && $value === void 0) return $has(this, name);
        var values = getAll(this, name);
        validateArgumentsLength(length, 1);
        var value = toString($value);
        var index = 0;
        while (index < values.length) {
          if (values[index++] === value) return true;
        }
        return false;
      }, { enumerable: true, unsafe: true });
    }
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/define-built-in-accessor.js
var require_define_built_in_accessor = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/define-built-in-accessor.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/modules/web.url-search-params.size.js
var require_web_url_search_params_size = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/modules/web.url-search-params.size.js"() {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var uncurryThis = require_function_uncurry_this();
    var defineBuiltInAccessor = require_define_built_in_accessor();
    var URLSearchParamsPrototype = URLSearchParams.prototype;
    var forEach = uncurryThis(URLSearchParamsPrototype.forEach);
    if (DESCRIPTORS && !("size" in URLSearchParamsPrototype)) {
      defineBuiltInAccessor(URLSearchParamsPrototype, "size", {
        get: function size() {
          var count = 0;
          forEach(this, function() {
            count++;
          });
          return count;
        },
        configurable: true,
        enumerable: true
      });
    }
  }
});

// dist/Wikiplus/Wikiplus.js
require_web_url_search_params_delete();
require_web_url_search_params_has();
require_web_url_search_params_size();
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var n = 0, F = function() {
      };
      return { s: F, n: function() {
        return n >= r.length ? { done: true } : { done: false, value: r[n++] };
      }, e: function(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u = false;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function(r2) {
    u = true, o = r2;
  }, f: function() {
    try {
      a || null == t.return || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c), u = i.value;
  } catch (n2) {
    return void e(n2);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function() {
    var t = this, e = arguments;
    return new Promise(function(r, o) {
      var a = n.apply(t, e);
      function _next(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n2);
      }
      function _throw(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n2);
      }
      _next(void 0);
    });
  };
}
var __getOwnPropNames2 = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames2(fn)[0]])(fn = 0)), res;
};
//! src/Wikiplus/modules/utils/constants.js
var Constants;
var constants_default;
var init_constants = __esm({
  "src/Wikiplus/modules/utils/constants.js"() {
    "use strict";
    Constants = class {
      version = "4.0.12";
      get isArticle() {
        return window.mw.config.get("wgIsArticle");
      }
      get currentPageName() {
        return window.mw.config.get("wgPageName").replace(/ /g, "_");
      }
      get articleId() {
        return window.mw.config.get("wgArticleId");
      }
      get revisionId() {
        return window.mw.config.get("wgRevisionId");
      }
      get latestRevisionId() {
        return window.mw.config.get("wgCurRevisionId");
      }
      get articlePath() {
        return window.mw.config.get("wgArticlePath");
      }
      get scriptPath() {
        return window.mw.config.get("wgScriptPath");
      }
      get action() {
        return window.mw.config.get("wgAction");
      }
      get skin() {
        return window.mw.config.get("skin");
      }
      get userGroups() {
        return window.mw.config.get("wgUserGroups");
      }
      get wikiId() {
        return window.mw.config.get("wgWikiID");
      }
    };
    constants_default = new Constants();
  }
});
//! src/Wikiplus/modules/utils/requests.js
var Requests;
var requests_default;
var init_requests = __esm({
  "src/Wikiplus/modules/utils/requests.js"() {
    "use strict";
    init_constants();
    Requests = {
      base: "".concat(location.protocol, "//").concat(location.host).concat(constants_default.scriptPath, "/api.php"),
      get(query) {
        return _asyncToGenerator(function* () {
          const url = new URL(Requests.base);
          for (var _i = 0, _Object$keys = Object.keys(query); _i < _Object$keys.length; _i++) {
            const key = _Object$keys[_i];
            url.searchParams.append(key, query[key]);
          }
          const response = yield fetch(url, {
            credentials: "same-origin",
            headers: {
              "Api-User-Agent": "Wikiplus/".concat(constants_default.version, " (").concat(constants_default.wikiId, ")")
            }
          });
          return yield response.json();
        })();
      },
      post(payload) {
        return _asyncToGenerator(function* () {
          const url = new URL(Requests.base);
          const form = new FormData();
          for (var _i2 = 0, _Object$entries = Object.entries(payload); _i2 < _Object$entries.length; _i2++) {
            const [key, value] = _Object$entries[_i2];
            form.append(key, value);
          }
          const response = yield fetch(url, {
            method: "POST",
            body: form,
            credentials: "same-origin",
            headers: {
              "Api-User-Agent": "Wikiplus/".concat(constants_default.version, " (").concat(constants_default.wikiId, ")")
            }
          });
          return yield response.json();
        })();
      }
    };
    requests_default = Requests;
  }
});
//! src/Wikiplus/modules/utils/i18n.js
var I18n;
var i18n_default;
var init_i18n = __esm({
  "src/Wikiplus/modules/utils/i18n.js"() {
    "use strict";
    I18n = class {
      language;
      i18nData = {};
      sessionUpdateLog = [];
      constructor() {
        let language;
        try {
          language = JSON.parse(localStorage["Wikiplus_Settings"])["language"] || navigator.language.toLowerCase();
        } catch {
          language = (navigator.language || navigator.browserLanguage).replace(/han[st]-?/i, "").toLowerCase();
        }
        this.language = language;
        try {
          const i18nCache = JSON.parse(localStorage.getItem("Wikiplus_i18nCache"));
          for (var _i3 = 0, _Object$keys2 = Object.keys(i18nCache); _i3 < _Object$keys2.length; _i3++) {
            const key = _Object$keys2[_i3];
            this.i18nData[key] = i18nCache[key];
          }
        } catch {
          localStorage.setItem("Wikiplus_i18nCache", "{}");
        }
      }
      translate(key, placeholders = []) {
        let result = "";
        if (this.language in this.i18nData) {
          if (key in this.i18nData[this.language]) {
            result = this.i18nData[this.language][key];
          } else {
            this.loadLanguage(this.language);
            if (key in this.i18nData["en-us"]) {
              result = this.i18nData["en-us"][key];
            } else {
              result = key;
            }
          }
        } else {
          this.loadLanguage(this.language);
        }
        if (placeholders.length > 0) {
          var _iterator = _createForOfIteratorHelper(placeholders.entries()), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              const [index, placeholder] = _step.value;
              result = result.replace("$".concat(index + 1), placeholder);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        return result;
      }
      loadLanguage(language) {
        var _this = this;
        return _asyncToGenerator(function* () {
          if (_this.sessionUpdateLog.includes(language)) {
            return;
          }
          try {
            const response = yield (yield fetch("https://gitcdn.qiuwen.net.cn/InterfaceAdmin/Wikiplus/raw/branch/dev/languages/".concat(language, ".json"))).json();
            const nowVersion = localStorage.getItem("Wikiplus_LanguageVersion") || "000";
            _this.sessionUpdateLog.push(language);
            if (response.__version !== nowVersion || !(language in _this.i18nData)) {
              console.info("Update ".concat(language, " support to version ").concat(response.__version));
              _this.i18nData[language] = response;
              localStorage.setItem("Wikiplus_i18nCache", JSON.stringify(_this.i18nData));
            }
          } catch {
          }
        })();
      }
    };
    i18n_default = new I18n();
  }
});
//! src/Wikiplus/modules/utils/log.js
var WikiplusError;
var Log;
var log_default;
var init_log = __esm({
  "src/Wikiplus/modules/utils/log.js"() {
    "use strict";
    init_i18n();
    WikiplusError = class extends Error {
      constructor(message, code) {
        super(message);
        this.code = code;
      }
    };
    Log = {
      debug(message = "") {
        console.debug("[Wikiplus-DEBUG] ".concat(message));
      },
      info(message = "") {
        console.info("[Wikiplus-INFO] ".concat(message));
      },
      error(errorCode, payloads = []) {
        let template = i18n_default.translate(errorCode);
        if (payloads.length > 0) {
          var _iterator2 = _createForOfIteratorHelper(payloads.entries()), _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              const [i, v] = _step2.value;
              template = template.replace(new RegExp("\\".concat(i + 1), "ig"), v);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
        console.error("[Wikiplus-ERROR] ".concat(template));
        throw new WikiplusError("".concat(template), errorCode);
      }
    };
    log_default = Log;
  }
});
//! src/Wikiplus/modules/services/wiki.js
var Wiki;
var wiki_default;
var init_wiki = __esm({
  "src/Wikiplus/modules/services/wiki.js"() {
    "use strict";
    init_requests();
    init_log();
    init_i18n();
    init_constants();
    Wiki = class {
      pageInfoCache = {};
      /**
       * 获得 Edit Token
       * Get Edit Token
       *
       * @returns {Promise<string>}
       */
      getEditToken() {
        return _asyncToGenerator(function* () {
          const response = yield requests_default.get({
            action: "query",
            meta: "tokens",
            format: "json"
          });
          if (response.query && response.query.tokens && response.query.tokens.csrftoken && response.query.tokens.csrftoken !== "+\\") {
            return response.query.tokens.csrftoken;
          }
          return log_default.error("fail_to_get_edittoken");
        })();
      }
      /**
       * 获得页面上一版本时间戳
       * Get the timestamp of the last revision of page specified.
       *
       * @param {params.string} title 页面名 / Pagename
       * @param {params.revisionId} revisionId 修订版本号 / Revision ID
       * @returns {Promise<string>}
       */
      getPageInfo({
        title,
        revisionId
      }) {
        var _this2 = this;
        return _asyncToGenerator(function* () {
          try {
            const params = {
              action: "query",
              prop: "revisions|info",
              rvprop: "timestamp|ids",
              format: "json"
            };
            if (revisionId) {
              params.revids = revisionId;
            } else if (title) {
              if (_this2.pageInfoCache[title]) {
                return {
                  timestamp: _this2.pageInfoCache[title].timestamp,
                  revisionId: _this2.pageInfoCache[title].revid
                };
              }
              params.titles = title;
            }
            const response = yield requests_default.get(params);
            if (response.query && response.query.pages) {
              if (Object.keys(response.query.pages)[0] === "-1") {
                return {};
              }
              const pageInfo = response.query.pages[Object.keys(response.query.pages)[0]].revisions[0];
              if (title) {
                _this2.pageInfoCache[title] = pageInfo;
              }
              return {
                timestamp: pageInfo.timestamp,
                revisionId: pageInfo.revid
              };
            }
          } catch {
            log_default.error("fail_to_get_edittoken");
          }
        })();
      }
      /**
       * 获得页面的 Wikitext
       * Get wikitext of the page.
       *
       * @param {string} title title
       * @param {Object} config
       * @param {string} config.revisionId 版本号
       * @param {string} config.section 段落号
       * @return {Promise<string>} wikitext内容
       */
      getWikiText({
        section,
        revisionId
      }) {
        return _asyncToGenerator(function* () {
          try {
            const response = yield (yield fetch("".concat(location.protocol, "//").concat(location.host).concat(constants_default.scriptPath, "/index.php?oldid=").concat(revisionId, "&section=").concat(section, "&action=raw"))).text();
            return response;
          } catch {
            log_default.error("fail_to_get_wikitext");
          }
        })();
      }
      /**
       * 解析 Wikitext
       *
       * @param {string} wikitext wikitext
       * @param {string} title 页面标题
       * @param {Object} config 设置
       * @return {Promise<string>} 解析结果 HTML
       */
      parseWikiText(wikitext, title = "", config = {}) {
        return _asyncToGenerator(function* () {
          try {
            const response = yield requests_default.post({
              format: "json",
              action: "parse",
              text: wikitext,
              title,
              pst: "true"
            });
            if (response.parse && response.parse.text) {
              return response.parse.text["*"];
            }
          } catch {
            log_default.error("cant_parse_wikitext");
          }
        })();
      }
      /**
       * 编辑页面
       *
       * @param root0
       * @param root0.title
       * @param root0.content
       * @param root0.editToken
       * @param root0.timestamp
       * @param root0.config
       * @param root0.additionalConfig
       */
      edit({
        title,
        content,
        editToken,
        timestamp,
        config = {},
        additionalConfig = {}
      } = {}) {
        return _asyncToGenerator(function* () {
          let response;
          try {
            response = yield requests_default.post({
              action: "edit",
              format: "json",
              text: content,
              title,
              token: editToken,
              ...timestamp ? {
                basetimestamp: timestamp
              } : {},
              ...config,
              ...additionalConfig
            });
          } catch {
            log_default.error("network_edit_error");
          }
          if (response.edit) {
            if (response.edit.result === "Success") {
              return true;
            }
            if (response.edit.code) {
              throw new Error("\n                        ".concat(i18n_default.translate("hit_abusefilter"), ":").concat(response.edit.info.replace("/Hit AbuseFilter: /ig", ""), '\n                        <br>\n                        <div style="font-size: smaller;">').concat(response.edit.warning, "</div>\n                    "));
            } else {
              log_default.error("unknown_edit_error");
            }
          } else if (response.error && response.error.code) {
            log_default.error(response.error.code);
          } else if (response.code) {
            log_default.error(response.code);
          } else {
            log_default.error("unknown_edit_error");
          }
        })();
      }
      /**
       * 获得指定页面最新修订编号
       * Get latest revisionId of a page.
       *
       * @param {*} title
       */
      getLatestRevisionIdForPage(title) {
        var _this3 = this;
        return _asyncToGenerator(function* () {
          const {
            revisionId
          } = yield _this3.getPageInfo({
            title
          });
          return revisionId;
        })();
      }
    };
    wiki_default = new Wiki();
  }
});
//! src/Wikiplus/modules/core/page.js
var Page;
var page_default;
var init_page = __esm({
  "src/Wikiplus/modules/core/page.js"() {
    "use strict";
    init_wiki();
    init_log();
    Page = class {
      timestamp;
      editToken;
      title;
      revisionId;
      inited = false;
      isNewPage = false;
      sectionCache = {};
      /**
       * @param {params.title} 页面标题 Page Name (optional)
       * @param {params.revisionId} 页面修订编号 Revision Id
       */
      constructor({
        title,
        revisionId
      }) {
        this.title = title;
        this.revisionId = revisionId;
        this.isNewPage = !revisionId;
      }
      /**
       * 初始化 获得页面EditToken和初始TimeStamp
       * Initialization.
       *
       * @param {string} editToken (optional) 如果提供了editToken，将不会再获取
       */
      init({
        editToken = ""
      } = {}) {
        var _this4 = this;
        return _asyncToGenerator(function* () {
          const promiseArr = [_this4.getTimestamp()];
          if (!editToken) {
            promiseArr.push(_this4.getEditToken());
          }
          yield Promise.all(promiseArr);
          _this4.inited = true;
          log_default.info("Page initialization for ".concat(_this4.title, "#").concat(_this4.revisionId, " finished."));
        })();
      }
      /**
       * 获得 EditToken
       * Get EditToken
       */
      getEditToken() {
        var _this5 = this;
        return _asyncToGenerator(function* () {
          yield mw.loader.using("mediawiki.user");
          if (mw.user.tokens.get("csrfToken") && mw.user.tokens.get("csrfToken") !== "+\\") {
            _this5.editToken = mw.user.tokens.get("csrfToken");
            return;
          }
          _this5.editToken = yield wiki_default.getEditToken();
        })();
      }
      /**
       * 获得编辑基准时间戳
       * Get Base Timestamp
       */
      getTimestamp() {
        var _this6 = this;
        return _asyncToGenerator(function* () {
          const {
            timestamp,
            revisionId
          } = yield wiki_default.getPageInfo({
            revisionId: _this6.revisionId,
            title: _this6.title
          });
          _this6.timestamp = timestamp;
          if (revisionId) {
            _this6.revisionId = revisionId;
            _this6.isNewPage = false;
          }
        })();
      }
      /**
       * 获得 WikiText
       *
       * @param {Object} config
       * @param {string} config.section
       * @param {string} config.revisionId
       */
      getWikiText({
        section = ""
      } = {}) {
        var _this7 = this;
        return _asyncToGenerator(function* () {
          const sec = section === -1 ? "" : section;
          if (_this7.sectionCache[sec]) {
            return _this7.sectionCache[sec];
          }
          const wikiText = yield wiki_default.getWikiText({
            section: sec,
            revisionId: _this7.revisionId
          });
          log_default.info("Wikitext of ".concat(_this7.title, "#").concat(section, " fetched."));
          _this7.sectionCache[sec] = wikiText;
          return wikiText;
        })();
      }
      /**
       * 解析 WikiText
       *
       * @param {string} wikitext
       */
      parseWikiText(wikitext) {
        var _this8 = this;
        return _asyncToGenerator(function* () {
          return wiki_default.parseWikiText(wikitext, _this8.title);
        })();
      }
      /**
       * 编辑页面
       *
       * @param {*} config
       * @param payload
       */
      edit(payload) {
        var _this9 = this;
        return _asyncToGenerator(function* () {
          if (!_this9.editToken) {
            log_default.error("fail_to_get_edittoken");
            return;
          }
          if (!_this9.timestamp && !_this9.isNewPage) {
            log_default.error("fail_to_get_timestamp");
            return;
          }
          return wiki_default.edit({
            title: _this9.title,
            editToken: _this9.editToken,
            ..._this9.timestamp ? {
              timestamp: _this9.timestamp
            } : {},
            ...payload,
            additionalConfig: {
              ..._this9.isNewPage ? {
                createonly: _this9.isNewPage
              } : {}
            }
          });
        })();
      }
    };
    page_default = Page;
  }
});
//! src/Wikiplus/modules/core/notification.js
var Notification;
var notification_default;
var init_notification = __esm({
  "src/Wikiplus/modules/core/notification.js"() {
    "use strict";
    Notification = class {
      constructor() {
        this.init();
      }
      init() {
        $("body").append('<div id="MoeNotification"></div>');
      }
      display(text = "喵~", type = "success", callback = () => {
      }) {
        $("#MoeNotification").append($("<div>").addClass("MoeNotification-notice").addClass("MoeNotification-notice-".concat(type)).append("<span>".concat(text, "</span>")));
        $("#MoeNotification").find(".MoeNotification-notice").last().fadeIn(300);
        this.bind();
        this.clear();
        callback($("#MoeNotification").find(".MoeNotification-notice").last());
      }
      bind() {
        const self2 = this;
        $(".MoeNotification-notice").on("mouseover", function() {
          self2.slideLeft($(this));
        });
      }
      success(text, callback) {
        this.display(text, "success", callback);
      }
      warning(text, callback) {
        this.display(text, "warning", callback);
      }
      error(text, callback) {
        this.display(text, "error", callback);
      }
      clear() {
        if ($(".MoeNotification-notice").length >= 10) {
          $("#MoeNotification").children().first().fadeOut(150, function() {
            $(this).remove();
          });
          setTimeout(this.clear, 300);
        }
      }
      empty(f) {
        $(".MoeNotification-notice").each(function(i) {
          if (typeof f === "function") {
            const ele = $(this);
            setTimeout(() => {
              f(ele);
            }, 200 * i);
          } else {
            $(this).delay(i * 200).fadeOut("fast", function() {
              $(this).remove();
            });
          }
        });
      }
      slideLeft(ele, speed) {
        ele.css("position", "relative");
        ele.animate({
          left: "-200%"
        }, speed || 150, function() {
          $(this).fadeOut("fast", function() {
            $(this).remove();
          });
        });
      }
    };
    notification_default = new Notification();
  }
});
//! src/Wikiplus/modules/utils/sleep.js
var sleep;
var sleep_default;
var init_sleep = __esm({
  "src/Wikiplus/modules/utils/sleep.js"() {
    "use strict";
    sleep = (time) => {
      return new Promise((resolve) => {
        return setTimeout(resolve, time);
      });
    };
    sleep_default = sleep;
  }
});
//! src/Wikiplus/modules/utils/helpers.js
function parseQuery(url) {
  const reg = /(([^?&=]+)(?:=([^?&=]*))*)/g;
  const params = {};
  let match;
  while (match = reg.exec(url)) {
    try {
      params[match[2]] = decodeURIComponent(match[3]);
    } catch {
      params[match[2]] = match[3];
    }
  }
  return params;
}
var init_helpers = __esm({
  "src/Wikiplus/modules/utils/helpers.js"() {
    "use strict";
  }
});
//! src/Wikiplus/modules/core/ui.js
var UI;
var ui_default;
var init_ui = __esm({
  "src/Wikiplus/modules/core/ui.js"() {
    "use strict";
    init_constants();
    init_notification();
    init_i18n();
    init_log();
    init_sleep();
    init_helpers();
    UI = class {
      quickEditPanelVisible = false;
      scrollTop = 0;
      /**
       * 创建居中对话框
       *
       * @param {string} title 窗口标题
       * @param {string | JQuery<HTMLElement>} content 内容
       * @param {*} width 宽度
       * @param {*} callback 回调函数
       */
      createDialogBox(title = "Wikiplus", content = "", width = 600, callback = () => {
      }) {
        if ($(".Wikiplus-InterBox").length > 0) {
          $(".Wikiplus-InterBox").each(function() {
            $(this).remove();
          });
        }
        const clientWidth = window.innerWidth;
        const clientHeight = window.innerHeight;
        const dialogWidth = Math.min(clientWidth, width);
        const dialogBox = $("<div>").addClass("Wikiplus-InterBox").css({
          "margin-left": clientWidth / 2 - dialogWidth / 2,
          top: $(document).scrollTop() + clientHeight * 0.2,
          display: "none"
        }).append($("<div>").addClass("Wikiplus-InterBox-Header").html(title)).append($("<div>").addClass("Wikiplus-InterBox-Content").append(content)).append($("<span>").text("×").addClass("Wikiplus-InterBox-Close"));
        $("body").append(dialogBox);
        $(".Wikiplus-InterBox").width(dialogWidth);
        $(".Wikiplus-InterBox-Close").on("click", function() {
          $(this).parent().fadeOut("fast", function() {
            window.addEventListener("close", window.onbeforeunload = void 0);
            $(this).remove();
          });
        });
        const bindDragging = function(element) {
          element.mousedown((e) => {
            const baseX = e.clientX;
            const baseY = e.clientY;
            const baseOffsetX = element.parent().offset().left;
            const baseOffsetY = element.parent().offset().top;
            $(document).on("mousemove", (e2) => {
              element.parent().css({
                "margin-left": baseOffsetX + e2.clientX - baseX,
                top: baseOffsetY + e2.clientY - baseY
              });
            });
            $(document).on("mouseup", () => {
              element.unbind("mousedown");
              $(document).off("mousemove");
              $(document).off("mouseup");
              bindDragging(element);
            });
          });
        };
        bindDragging($(".Wikiplus-InterBox-Header"));
        $(".Wikiplus-InterBox").fadeIn(500);
        callback();
        return dialogBox;
      }
      /**
       * 在搜索框左侧「更多」菜单内添加按钮
       * Add a button in "More" menu (left of the search bar)
       *
       * @param {string} text 按钮名 Button text
       * @param {string} id 按钮id Button id
       * @return {JQuery<HTMLElement>} button
       */
      addFunctionButton(text, id) {
        let button;
        switch (constants_default.skin) {
          case "minerva":
            button = $("<li>").attr("id", id).addClass("toggle-list-item").append($("<a>").addClass("mw-ui-icon mw-ui-icon-before toggle-list-item__anchor").append($("<span>").attr("href", "javascript:void(0);").addClass("toggle-list-item__label").text(text)));
            break;
          case "moeskin":
            button = $("<li>").addClass("Wikiplus-More-Function-Button").attr("id", id).append($("<a>").attr("href", "javascript:void(0);").text(text));
            break;
          default:
            button = $("<li>").addClass("mw-list-item").addClass("vector-tab-noicon").attr("id", id).append($("<a>").attr("href", "javascript:void(0);").text(text));
        }
        if (constants_default.skin === "minerva" && $("#p-tb").length > 0) {
          $("#p-tb").append(button);
          return $("#".concat(id));
        } else if (constants_default.skin === "moeskin") {
          $(".more-actions-list").first().append(button);
          return $("#".concat(id));
        } else if ($("#p-cactions").length > 0) {
          $("#p-cactions ul").append(button);
          return $("#".concat(id));
        }
        log_default.info(i18n_default.translate("cant_add_funcbtn"));
      }
      /**
       * 插入快速重定向按钮
       *
       * @param {*} onClick
       */
      insertSimpleRedirectButton(onClick = () => {
      }) {
        const button = this.addFunctionButton(i18n_default.translate("redirect_from"), "Wikiplus-SR-Intro");
        if (button) {
          button.on("click", onClick);
        }
      }
      /**
       * 插入设置面板按钮
       *
       * @param {*} onClick
       */
      insertSettingsPanelButton(onClick = () => {
      }) {
        const button = this.addFunctionButton(i18n_default.translate("wikiplus_settings"), "Wikiplus-Settings-Intro");
        if (button) {
          button.on("click", onClick);
        }
      }
      /**
       * 插入顶部快速编辑按钮
       * Insert QuickEdit button besides page edit button.
       *
       * @param onClick
       */
      insertTopQuickEditEntry(onClick) {
        const topBtn = $("<li>").attr("id", "Wikiplus-Edit-TopBtn").attr("class", "mw-list-item");
        const topBtnLink = $("<a>").attr("href", "javascript:void(0)").text("".concat(i18n_default.translate("quickedit_topbtn")));
        topBtn.append(topBtnLink);
        switch (constants_default.skin) {
          case "minerva":
            topBtn.css({
              "align-items": "center",
              display: "flex"
            });
            topBtn.find("span").addClass("page-actions-menu__list-item");
            topBtn.find("a").addClass("mw-ui-icon mw-ui-icon-element mw-ui-icon-wikimedia-edit-base20 mw-ui-icon-with-label-desktop").css("vertical-align", "middle");
            break;
          case "vector-2022":
            topBtn.addClass("vector-tab-noicon");
            break;
          case "vector":
            topBtn.append($("<span>").append(topBtnLink));
            break;
          default:
        }
        $(topBtn).on("click", () => {
          onClick({
            sectionNumber: -1,
            targetPageName: constants_default.currentPageName
          });
        });
        if ($("#ca-edit").length > 0 && $("#Wikiplus-Edit-TopBtn").length === 0) {
          constants_default.skin === "minerva" ? $("#ca-edit").parent().after(topBtn) : $("#ca-edit").after(topBtn);
        }
      }
      /**
       * 插入段落快速编辑按钮
       * Insert QuickEdit buttons for each section.
       *
       * @param onClick
       */
      insertSectionQuickEditEntries(onClick = () => {
      }) {
        const sectionBtn = constants_default.skin === "minerva" ? $("<span>").append($("<a>").addClass("Wikiplus-Edit-SectionBtn mw-ui-icon mw-ui-icon-element mw-ui-icon-wikimedia-edit-base20 edit-page mw-ui-icon-flush-right").css("margin-left", "0.75em").attr("href", "javascript:void(0)").attr("title", i18n_default.translate("quickedit_sectionbtn"))) : $("<span>").append($("<span>").addClass("mw-editsection-divider").text(" | ")).append($("<a>").addClass("Wikiplus-Edit-SectionBtn").attr("href", "javascript:void(0)").text(i18n_default.translate("quickedit_sectionbtn")));
        $(".mw-editsection").each(function(i) {
          try {
            const editURL = $(this).find("a[href*='action=edit']").first().attr("href");
            const sectionNumber = editURL.match(/&[ve]*section\=([^&]+)/)[1].replace(/T-/gi, "");
            const sectionTargetName = decodeURIComponent(editURL.match(/title=(.+?)&/)[1]);
            const cloneNode = $(this).prev().clone();
            cloneNode.find(".mw-headline-number").remove();
            const sectionName = cloneNode.text().trim();
            const _sectionBtn = sectionBtn.clone();
            _sectionBtn.find(".Wikiplus-Edit-SectionBtn").on("click", () => {
              onClick({
                sectionNumber,
                sectionName,
                targetPageName: sectionTargetName
              });
            });
            constants_default.skin === "minerva" ? $(this).append(_sectionBtn) : $(this).find(".mw-editsection-bracket").last().before(_sectionBtn);
          } catch {
            log_default.error("fail_to_init_quickedit");
          }
        });
      }
      /**
       * 插入任意链接编辑入口
       *
       * @param {*} onClick
       */
      insertLinkEditEntries(onClick = () => {
      }) {
        $("#mw-content-text a.external").each(function(i) {
          const url = $(this).attr("href");
          const params = parseQuery(url);
          if (params.action === "edit" && params.title !== void 0 && params.section !== "new") {
            $(this).after($("<a>").attr({
              href: "javascript:void(0)",
              class: "Wikiplus-Edit-EveryWhereBtn"
            }).text("(".concat(i18n_default.translate("quickedit_sectionbtn"), ")")).on("click", () => {
              var _params$section;
              onClick({
                targetPageName: params.title,
                sectionNumber: (_params$section = params.section) !== null && _params$section !== void 0 ? _params$section : -1
              });
            }));
          }
        });
      }
      showQuickEditPanel({
        title = "",
        content = "",
        summary = "",
        onBack = () => {
        },
        onParse = () => {
        },
        onEdit = () => {
        },
        escExit = false
      }) {
        const self2 = this;
        this.scrollTop = $(document).scrollTop();
        if (this.quickEditPanelVisible) {
          this.hideQuickEditPanel();
        }
        this.quickEditPanelVisible = true;
        window.addEventListener("close", window.onbeforeunload = function() {
          return "".concat(i18n_default.translate("onclose_confirm"));
        });
        const isNewPage = $(".noarticletext").length > 0;
        const backBtn = $("<span>").attr("id", "Wikiplus-Quickedit-Back").addClass("Wikiplus-Btn").text("".concat(i18n_default.translate("back")));
        const jumpBtn = $("<span>").attr("id", "Wikiplus-Quickedit-Jump").addClass("Wikiplus-Btn").append($("<a>").attr("href", "#Wikiplus-Quickedit").text("".concat(i18n_default.translate("goto_editbox"))));
        const inputBox = $("<textarea>").attr("id", "Wikiplus-Quickedit");
        const previewBox = $("<div>").attr("id", "Wikiplus-Quickedit-Preview-Output");
        const summaryBox = $("<input>").attr("id", "Wikiplus-Quickedit-Summary-Input").attr("placeholder", "".concat(i18n_default.translate("summary_placehold")));
        const editSubmitBtn = $("<button>").attr("id", "Wikiplus-Quickedit-Submit").text("".concat(i18n_default.translate(isNewPage ? "publish_page" : "publish_change"), "(Ctrl+S)"));
        const previewSubmitBtn = $("<button>").attr("id", "Wikiplus-Quickedit-Preview-Submit").text("".concat(i18n_default.translate("preview")));
        const isMinorEdit = $("<div>").append($("<input>").attr({
          type: "checkbox",
          id: "Wikiplus-Quickedit-MinorEdit"
        })).append($("<label>").attr("for", "Wikiplus-Quickedit-MinorEdit").text("".concat(i18n_default.translate("mark_minoredit"), "(Ctrl+Shift+S)"))).css({
          margin: "5px 5px 5px -3px",
          display: "inline"
        });
        const editBody = $("<div>").append(backBtn, jumpBtn, previewBox, inputBox, summaryBox, $("<br>"), isMinorEdit, editSubmitBtn, previewSubmitBtn);
        this.createDialogBox(title, editBody, 1e3, () => {
          $("#Wikiplus-Quickedit").val(content);
          $("#Wikiplus-Quickedit-Summary-Input").val(summary);
        });
        $("#Wikiplus-Quickedit-Back").on("click", onBack);
        $("#Wikiplus-Quickedit-Preview-Submit").on("click", /* @__PURE__ */ _asyncToGenerator(function* () {
          const preloadBanner = $("<div>").addClass("Wikiplus-Banner").text("".concat(i18n_default.translate("loading_preview")));
          const wikiText = $("#Wikiplus-Quickedit").val();
          $(this).attr("disabled", "disabled");
          $("#Wikiplus-Quickedit-Preview-Output").fadeOut(100, () => {
            $("#Wikiplus-Quickedit-Preview-Output").html("").append(preloadBanner);
            $("#Wikiplus-Quickedit-Preview-Output").fadeIn(100);
          });
          $("html, body").animate({
            scrollTop: self2.scrollTop
          }, 200);
          const result = yield onParse(wikiText);
          $("#Wikiplus-Quickedit-Preview-Output").fadeOut("100", () => {
            $("#Wikiplus-Quickedit-Preview-Output").html('<hr><div class="mw-body-content">'.concat(result, "</div><hr>"));
            $("#Wikiplus-Quickedit-Preview-Output").fadeIn("100");
            $("#Wikiplus-Quickedit-Preview-Submit").prop("disabled", false);
          });
        }));
        $("#Wikiplus-Quickedit-Submit").on("click", /* @__PURE__ */ _asyncToGenerator(function* () {
          const timer = Date.now();
          const editBanner = $("<div>").addClass("Wikiplus-Banner").text("".concat(i18n_default.translate("submitting_edit")));
          const payload = {
            summary: $("#Wikiplus-Quickedit-Summary-Input").val(),
            content: $("#Wikiplus-Quickedit").val(),
            isMinorEdit: $("#Wikiplus-Quickedit-MinorEdit").is(":checked")
          };
          $("#Wikiplus-Quickedit-Submit,#Wikiplus-Quickedit,#Wikiplus-Quickedit-Preview-Submit").attr("disabled", "disabled");
          $("html, body").animate({
            scrollTop: self2.scrollTop
          }, 200);
          $("#Wikiplus-Quickedit-Preview-Output").fadeOut(100, () => {
            $("#Wikiplus-Quickedit-Preview-Output").html("").append(editBanner);
            $("#Wikiplus-Quickedit-Preview-Output").fadeIn(100);
          });
          try {
            yield onEdit(payload);
            const useTime = Date.now() - timer;
            $("#Wikiplus-Quickedit-Preview-Output").find(".Wikiplus-Banner").css("background", "rgba(6, 239, 92, 0.44)");
            $("#Wikiplus-Quickedit-Preview-Output").find(".Wikiplus-Banner").text("".concat(i18n_default.translate("edit_success", [useTime.toString()])));
            window.addEventListener("close", window.onbeforeunload = void 0);
            setTimeout(() => {
              location.reload();
            }, 500);
          } catch (error) {
            console.log(error);
            $(".Wikiplus-Banner").css("background", "rgba(218, 142, 167, 0.65)");
            $(".Wikiplus-Banner").html(error.message);
          } finally {
            $("#Wikiplus-Quickedit-Submit,#Wikiplus-Quickedit,#Wikiplus-Quickedit-Preview-Submit").prop("disabled", false);
          }
        }));
        $("#Wikiplus-Quickedit,#Wikiplus-Quickedit-Summary-Input,#Wikiplus-Quickedit-MinorEdit").on("keydown", (e) => {
          if (e.ctrlKey && e.which === 83) {
            if (e.shiftKey) {
              $("#Wikiplus-Quickedit-MinorEdit").trigger("click");
            }
            $("#Wikiplus-Quickedit-Submit").trigger("click");
            e.preventDefault();
            e.stopPropagation();
          }
        });
        if (escExit) {
          $(document).on("keydown", (e) => {
            if (e.which === 27) {
              $("#Wikiplus-Quickedit-Back").trigger("click");
            }
          });
        }
      }
      hideQuickEditPanel() {
        this.quickEditPanelVisible = false;
        $(".Wikiplus-InterBox").fadeOut("fast", function() {
          window.addEventListener("close", window.onbeforeunload = void 0);
          $(this).remove();
        });
      }
      /**
       * 显示快速重定向弹窗
       *
       * @param root0
       * @param root0.onEdit
       * @param root0.onSuccess
       */
      showSimpleRedirectPanel({
        onEdit = () => {
        },
        onSuccess = () => {
        }
      } = {}) {
        var _this10 = this;
        const input = $("<input>").addClass("Wikiplus-InterBox-Input");
        const applyBtn = $("<div>").addClass("Wikiplus-InterBox-Btn").attr("id", "Wikiplus-SR-Apply").text(i18n_default.translate("submit"));
        const cancelBtn = $("<div>").addClass("Wikiplus-InterBox-Btn").attr("id", "Wikiplus-SR-Cancel").text(i18n_default.translate("cancel"));
        const continueBtn = $("<div>").addClass("Wikiplus-InterBox-Btn").attr("id", "Wikiplus-SR-Continue").text(i18n_default.translate("continue"));
        const content = $("<div>").append(input).append($("<hr>")).append(applyBtn).append(cancelBtn);
        const dialog = this.createDialogBox(i18n_default.translate("redirect_desc"), content, 600);
        applyBtn.on("click", /* @__PURE__ */ _asyncToGenerator(function* () {
          const title = $(".Wikiplus-InterBox-Input").val();
          $(".Wikiplus-InterBox-Content").html('<div class="Wikiplus-Banner">'.concat(i18n_default.translate("submitting_edit"), "</div>"));
          try {
            yield onEdit({
              title,
              forceOverwrite: false
            });
            $(".Wikiplus-Banner").text(i18n_default.translate("redirect_saved"));
            _this10.hideSimpleRedirectPanel(dialog);
            onSuccess({
              title
            });
          } catch (error) {
            $(".Wikiplus-Banner").css("background", "rgba(218, 142, 167, 0.65)");
            $(".Wikiplus-Banner").text(error.message);
            if (error.code === "articleexists") {
              $(".Wikiplus-InterBox-Content").append($("<hr>")).append(continueBtn).append(cancelBtn);
              cancelBtn.on("click", () => {
                _this10.hideSimpleRedirectPanel(dialog);
              });
              continueBtn.on("click", /* @__PURE__ */ _asyncToGenerator(function* () {
                $(".Wikiplus-InterBox-Content").html('<div class="Wikiplus-Banner">'.concat(i18n_default.translate("submitting_edit"), "</div>"));
                try {
                  yield onEdit({
                    title,
                    forceOverwrite: true
                  });
                  $(".Wikiplus-Banner").text(i18n_default.translate("redirect_saved"));
                  _this10.hideSimpleRedirectPanel(dialog);
                  onSuccess({
                    title
                  });
                } catch (error2) {
                  $(".Wikiplus-Banner").css("background", "rgba(218, 142, 167, 0.65)");
                  $(".Wikiplus-Banner").text(error2.message);
                }
              }));
            }
          }
        }));
        cancelBtn.on("click", () => {
          this.hideSimpleRedirectPanel(dialog);
        });
      }
      /**
       * 隐藏快速重定向弹窗
       *
       * @param {*} dialog
       */
      hideSimpleRedirectPanel(dialog = $("body")) {
        dialog.find(".Wikiplus-InterBox-Close").trigger("click");
      }
      showSettingsPanel({
        onSubmit = () => {
        }
      } = {}) {
        var _this11 = this;
        const input = $("<textarea>").attr("id", "Wikiplus-Setting-Input").attr("rows", "10");
        const applyBtn = $("<div>").addClass("Wikiplus-InterBox-Btn").attr("id", "Wikiplus-Setting-Apply").text(i18n_default.translate("submit"));
        const cancelBtn = $("<div>").addClass("Wikiplus-InterBox-Btn").attr("id", "Wikiplus-Setting-Cancel").text(i18n_default.translate("cancel"));
        const content = $("<div>").append(input).append($("<hr>")).append(applyBtn).append(cancelBtn);
        const dialog = this.createDialogBox(i18n_default.translate("wikiplus_settings_desc"), content, 600, () => {
          if (localStorage.Wikiplus_Settings) {
            $("#Wikiplus-Setting-Input").val(localStorage.Wikiplus_Settings);
            try {
              const settings = JSON.parse(localStorage.Wikiplus_Settings);
              $("#Wikiplus-Setting-Input").val(JSON.stringify(settings, null, 2));
            } catch {
            }
          } else {
            $("#Wikiplus-Setting-Input").attr("placeholder", i18n_default.translate("wikiplus_settings_placeholder"));
          }
        });
        applyBtn.on("click", /* @__PURE__ */ _asyncToGenerator(function* () {
          const savedBanner = $("<div>").addClass("Wikiplus-Banner").text(i18n_default.translate("wikiplus_settings_saved"));
          const settings = $("#Wikiplus-Setting-Input").val();
          try {
            onSubmit({
              settings
            });
            $(".Wikiplus-InterBox-Content").html("").append(savedBanner);
            yield sleep_default(1500);
            _this11.hideSettingsPanel(dialog);
          } catch {
            notification_default.error(i18n_default.translate("wikiplus_settings_grammar_error"));
          }
        }));
        cancelBtn.on("click", () => {
          this.hideSettingsPanel(dialog);
        });
      }
      hideSettingsPanel(dialog = $("body")) {
        dialog.find(".Wikiplus-InterBox-Close").trigger("click");
      }
      bindPreloadEvents(onPreload) {
        $("#toc").children("ul").find("a").each(function(i) {
          $(this).on("mouseover", function() {
            $(this).off("mouseover");
            onPreload({
              sectionNumber: i + 1
            });
          });
        });
      }
    };
    ui_default = new UI();
  }
});
//! src/Wikiplus/modules/utils/settings.js
var Settings;
var settings_default;
var init_settings = __esm({
  "src/Wikiplus/modules/utils/settings.js"() {
    "use strict";
    Settings = class {
      getSetting(key, object = {}) {
        const w = object;
        let settings;
        try {
          settings = JSON.parse(localStorage["Wikiplus_Settings"]);
        } catch {
          return;
        }
        try {
          const customSettingFunction = new Function("return ".concat(settings[key]));
          if (typeof customSettingFunction === "function") {
            try {
              if (customSettingFunction()(w) === true) {
              } else {
                return customSettingFunction()(w) || settings[key];
              }
            } catch {
              return settings[key];
            }
          } else {
            return settings[key];
          }
        } catch {
          try {
            let result = settings[key];
            for (var _i4 = 0, _Object$keys3 = Object.keys(object); _i4 < _Object$keys3.length; _i4++) {
              const key2 = _Object$keys3[_i4];
              result = result.replace("${".concat(key2, "}"), object[key2]);
            }
            return result;
          } catch {
          }
        }
      }
    };
    settings_default = new Settings();
  }
});
//! src/Wikiplus/modules/index.js
var modules_exports = {};
var init_modules = __esm({
  "src/Wikiplus/modules/index.js"() {
    "use strict";
    init_page();
    init_ui();
    init_notification();
    init_wiki();
    init_settings();
    init_log();
    init_constants();
    init_i18n();
    $(/* @__PURE__ */ _asyncToGenerator(function* () {
      const Pages = {};
      const isCurrentPageEmpty = $(".noarticletext").length > 0 && constants_default.articleId === 0;
      const getPage = /* @__PURE__ */ function() {
        var _ref7 = _asyncToGenerator(function* ({
          revisionId: revisionId2,
          title
        }) {
          if (Pages[revisionId2]) {
            return Pages[revisionId2];
          }
          const newPage = new page_default({
            revisionId: revisionId2,
            title
          });
          yield newPage.init();
          Pages[revisionId2] = newPage;
          return Pages[revisionId2];
        });
        return function getPage2(_x) {
          return _ref7.apply(this, arguments);
        };
      }();
      log_default.info("Wikiplus now loading. Version: ".concat(constants_default.version));
      if (!window.mw) {
        console.log("Mediawiki JavaScript not loaded or not a Mediawiki website.");
        return;
      }
      if (!constants_default.userGroups.includes("autoconfirmed") && !constants_default.userGroups.includes("confirmed")) {
        notification_default.error(i18n_default.translate("not_autoconfirmed_user"));
        log_default.info(i18n_default.translate("not_autoconfirmed_user"));
        return;
      }
      if (!constants_default.isArticle || constants_default.action !== "view") {
        log_default.info("Not an editable page. Stop initialization.");
        return;
      }
      window._WikiplusPages = Pages;
      const currentPageName = constants_default.currentPageName;
      const revisionId = constants_default.revisionId;
      const currentPage = yield getPage({
        revisionId,
        title: currentPageName
      });
      const handleQuickEditButtonClicked = /* @__PURE__ */ function() {
        var _ref8 = _asyncToGenerator(function* ({
          sectionNumber,
          sectionName,
          targetPageName
        } = {}) {
          const isOtherPage = targetPageName !== currentPageName;
          if (isOtherPage && constants_default.latestRevisionId !== constants_default.revisionId) {
            log_default.error("cross_page_history_revision_edit_warning");
            return;
          }
          const revisionId2 = isOtherPage ? yield wiki_default.getLatestRevisionIdForPage(targetPageName) : constants_default.revisionId;
          const page = yield getPage({
            revisionId: revisionId2,
            title: targetPageName
          });
          const customSummary = settings_default.getSetting("defaultSummary", {
            sectionName,
            sectionNumber,
            sectionTargetName: targetPageName
          });
          const summary = customSummary || (sectionName ? "/* ".concat(sectionName, " */ ").concat(i18n_default.translate("default_summary_suffix")) : i18n_default.translate("default_summary_suffix"));
          const timer = setTimeout(() => {
            notification_default.success(i18n_default.translate("loading"));
          }, 200);
          const sectionContent = yield page.getWikiText({
            section: sectionNumber
          });
          const isEditHistoryRevision = !isOtherPage && constants_default.latestRevisionId !== constants_default.revisionId;
          const escToExit = settings_default.getSetting("esc_to_exit_quickedit") === true || // 兼容老设置key
          settings_default.getSetting("esc_to_exit_quickedit") === "true" || settings_default.getSetting("escToExitQuickEdit") === true || settings_default.getSetting("escToExitQuickEdit") === "true";
          const customEditTags = settings_default.getSetting("custom_edit_tags");
          const defaultEditTags = [];
          const editTags = customEditTags !== null && customEditTags !== void 0 && customEditTags.length ? customEditTags : defaultEditTags;
          clearTimeout(timer);
          notification_default.empty();
          if (isEditHistoryRevision) {
            notification_default.warning(i18n_default.translate("history_edit_warning"));
          }
          const shouldShowCreatePageTip = isOtherPage ? !revisionId2 : isCurrentPageEmpty;
          ui_default.showQuickEditPanel({
            title: "".concat(i18n_default.translate("quickedit_topbtn")).concat(isEditHistoryRevision ? i18n_default.translate("history_edit_warning") : ""),
            content: shouldShowCreatePageTip ? i18n_default.translate("create_page_tip") : sectionContent,
            summary,
            onBack: ui_default.hideQuickEditPanel,
            onParse: (wikiText) => {
              return page.parseWikiText(wikiText);
            },
            onEdit: function() {
              var _ref9 = _asyncToGenerator(function* ({
                content,
                summary: summary2,
                isMinorEdit
              }) {
                const editPayload = {
                  content,
                  config: {
                    summary: summary2,
                    ...sectionNumber === -1 ? {} : {
                      section: sectionNumber
                    },
                    ...editTags.length ? {
                      tags: editTags.join("|")
                    } : {}
                  }
                };
                if (isMinorEdit) {
                  editPayload.config.minor = "true";
                } else {
                  editPayload.config.notminor = "true";
                }
                yield page.edit(editPayload);
              });
              return function onEdit(_x2) {
                return _ref9.apply(this, arguments);
              };
            }(),
            escExit: escToExit
          });
        });
        return function handleQuickEditButtonClicked2() {
          return _ref8.apply(this, arguments);
        };
      }();
      const handleSimpleRedirectButtonClicked = /* @__PURE__ */ function() {
        var _ref10 = _asyncToGenerator(function* () {
          ui_default.showSimpleRedirectPanel({
            onEdit: function() {
              var _ref11 = _asyncToGenerator(function* ({
                title,
                forceOverwrite = false
              }) {
                const page = yield getPage({
                  title
                });
                const currentPageName2 = constants_default.currentPageName;
                const payload = {
                  content: "#REDIRECT [[".concat(currentPageName2, "]]"),
                  config: {
                    summary: i18n_default.translate("redirect_from_summary", [title, currentPageName2])
                  }
                };
                if (!forceOverwrite) {
                  payload.config.createonly = "true";
                }
                yield page.edit(payload);
              });
              return function onEdit(_x3) {
                return _ref11.apply(this, arguments);
              };
            }(),
            onSuccess: ({
              title
            }) => {
              location.href = constants_default.articlePath.replace(/\$1/gi, title);
            }
          });
        });
        return function handleSimpleRedirectButtonClicked2() {
          return _ref10.apply(this, arguments);
        };
      }();
      const handleSettingsButtonClicked = /* @__PURE__ */ function() {
        var _ref12 = _asyncToGenerator(function* () {
          ui_default.showSettingsPanel({
            onSubmit: ({
              settings
            }) => {
              JSON.parse(settings);
              localStorage.setItem("Wikiplus_Settings", settings);
            }
          });
        });
        return function handleSettingsButtonClicked2() {
          return _ref12.apply(this, arguments);
        };
      }();
      const handlePreload = /* @__PURE__ */ function() {
        var _ref13 = _asyncToGenerator(function* ({
          sectionNumber
        }) {
          yield currentPage.getWikiText({
            section: sectionNumber
          });
        });
        return function handlePreload2(_x4) {
          return _ref13.apply(this, arguments);
        };
      }();
      ui_default.insertTopQuickEditEntry(handleQuickEditButtonClicked);
      ui_default.insertSectionQuickEditEntries(handleQuickEditButtonClicked);
      ui_default.insertLinkEditEntries(handleQuickEditButtonClicked);
      ui_default.insertSimpleRedirectButton(handleSimpleRedirectButtonClicked);
      ui_default.insertSettingsPanelButton(handleSettingsButtonClicked);
      ui_default.bindPreloadEvents(handlePreload);
    }));
  }
});
//! src/Wikiplus/Wikiplus.ts
_asyncToGenerator(function* () {
  const {
    wgAction,
    wgIsArticle
  } = mw.config.get();
  if (wgAction !== "view" || !wgIsArticle) {
    return;
  }
  const {
    "visualeditor-enable": isVeEnable
  } = mw.user.options.get();
  const loader = /* @__PURE__ */ function() {
    var _ref15 = _asyncToGenerator(function* () {
      yield Promise.resolve().then(() => (init_modules(), modules_exports));
    });
    return function loader2() {
      return _ref15.apply(this, arguments);
    };
  }();
  if (isVeEnable) {
    yield mw.loader.using("ext.visualEditor.core");
  }
  void loader();
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1jYWxsYWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZhaWxzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVzY3JpcHRvcnMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwtdGhpcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1Zy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtbmF0aXZlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1idWlsdC1pbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbnZpcm9ubWVudC11c2VyLWFnZW50LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdjgtdmVyc2lvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXN5bWJvbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RyeS10by1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWNhbGxhYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtbnVsbC1vci11bmRlZmluZWQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nZXQtbWV0aG9kLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb3JkaW5hcnktdG8tcHJpbWl0aXZlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtcHVyZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQtc3RvcmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdWlkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1wcmltaXRpdmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1wcm9wZXJ0eS1rZXkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tbmFtZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2luc3BlY3Qtc291cmNlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvd2Vhay1tYXAtYmFzaWMtZGV0ZWN0aW9uLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1zdHJpbmctdGFnLXN1cHBvcnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jbGFzc29mLXJhdy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NsYXNzb2YuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92YWxpZGF0ZS1hcmd1bWVudHMtbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi51cmwtc2VhcmNoLXBhcmFtcy5kZWxldGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnVybC1zZWFyY2gtcGFyYW1zLmhhcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbi1hY2Nlc3Nvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIudXJsLXNlYXJjaC1wYXJhbXMuc2l6ZS5qcyIsICJzcmMvV2lraXBsdXMvbW9kdWxlcy91dGlscy9jb25zdGFudHMuanMiLCAic3JjL1dpa2lwbHVzL21vZHVsZXMvdXRpbHMvcmVxdWVzdHMuanMiLCAic3JjL1dpa2lwbHVzL21vZHVsZXMvdXRpbHMvaTE4bi5qcyIsICJzcmMvV2lraXBsdXMvbW9kdWxlcy91dGlscy9sb2cuanMiLCAic3JjL1dpa2lwbHVzL21vZHVsZXMvc2VydmljZXMvd2lraS5qcyIsICJzcmMvV2lraXBsdXMvbW9kdWxlcy9jb3JlL3BhZ2UuanMiLCAic3JjL1dpa2lwbHVzL21vZHVsZXMvY29yZS9ub3RpZmljYXRpb24uanMiLCAic3JjL1dpa2lwbHVzL21vZHVsZXMvdXRpbHMvc2xlZXAuanMiLCAic3JjL1dpa2lwbHVzL21vZHVsZXMvdXRpbHMvaGVscGVycy5qcyIsICJzcmMvV2lraXBsdXMvbW9kdWxlcy9jb3JlL3VpLmpzIiwgInNyYy9XaWtpcGx1cy9tb2R1bGVzL3V0aWxzL3NldHRpbmdzLmpzIiwgInNyYy9XaWtpcGx1cy9tb2R1bGVzL2luZGV4LmpzIiwgInNyYy9XaWtpcGx1cy9XaWtpcGx1cy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1Jc0hUTUxEREEtaW50ZXJuYWwtc2xvdFxudmFyIGRvY3VtZW50QWxsID0gdHlwZW9mIGRvY3VtZW50ID09ICdvYmplY3QnICYmIGRvY3VtZW50LmFsbDtcblxuLy8gYElzQ2FsbGFibGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc2NhbGxhYmxlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9uby10eXBlb2YtdW5kZWZpbmVkIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBkb2N1bWVudEFsbCA9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudEFsbCAhPT0gdW5kZWZpbmVkID8gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJyB8fCBhcmd1bWVudCA9PT0gZG9jdW1lbnRBbGw7XG59IDogZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxuLy8gRGV0ZWN0IElFOCdzIGluY29tcGxldGUgZGVmaW5lUHJvcGVydHkgaW1wbGVtZW50YXRpb25cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAxLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KVsxXSAhPT0gNztcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjaGVjayA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgJiYgaXQuTWF0aCA9PT0gTWF0aCAmJiBpdDtcbn07XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG5tb2R1bGUuZXhwb3J0cyA9XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1nbG9iYWwtdGhpcyAtLSBzYWZlXG4gIGNoZWNrKHR5cGVvZiBnbG9iYWxUaGlzID09ICdvYmplY3QnICYmIGdsb2JhbFRoaXMpIHx8XG4gIGNoZWNrKHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93KSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzIC0tIHNhZmVcbiAgY2hlY2sodHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZikgfHxcbiAgY2hlY2sodHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwpIHx8XG4gIGNoZWNrKHR5cGVvZiB0aGlzID09ICdvYmplY3QnICYmIHRoaXMpIHx8XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuYyAtLSBmYWxsYmFja1xuICAoZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSkoKSB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IGlzQ2FsbGFibGUoaXQpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgZG9jdW1lbnQgPSBnbG9iYWxUaGlzLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgRVhJU1RTID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gRVhJU1RTID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBjcmVhdGVFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50Jyk7XG5cbi8vIFRoYW5rcyB0byBJRTggZm9yIGl0cyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhREVTQ1JJUFRPUlMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGNyZWF0ZUVsZW1lbnQoJ2RpdicpLCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH1cbiAgfSkuYSAhPT0gNztcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbi8vIFY4IH4gQ2hyb21lIDM2LVxuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzMzNFxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0sICdwcm90b3R5cGUnLCB7XG4gICAgdmFsdWU6IDQyLFxuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KS5wcm90b3R5cGUgIT09IDQyO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgJFN0cmluZyA9IFN0cmluZztcbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgQXNzZXJ0OiBUeXBlKGFyZ3VtZW50KSBpcyBPYmplY3RgXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoaXNPYmplY3QoYXJndW1lbnQpKSByZXR1cm4gYXJndW1lbnQ7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKCRTdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgYW4gb2JqZWN0Jyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1mdW5jdGlvbi1wcm90b3R5cGUtYmluZCAtLSBzYWZlXG4gIHZhciB0ZXN0ID0gKGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSkuYmluZCgpO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zIC0tIHNhZmVcbiAgcmV0dXJuIHR5cGVvZiB0ZXN0ICE9ICdmdW5jdGlvbicgfHwgdGVzdC5oYXNPd25Qcm9wZXJ0eSgncHJvdG90eXBlJyk7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgTkFUSVZFX0JJTkQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUnKTtcblxudmFyIGNhbGwgPSBGdW5jdGlvbi5wcm90b3R5cGUuY2FsbDtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfQklORCA/IGNhbGwuYmluZChjYWxsKSA6IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGNhbGwuYXBwbHkoY2FsbCwgYXJndW1lbnRzKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbnZhciBhRnVuY3Rpb24gPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGlzQ2FsbGFibGUoYXJndW1lbnQpID8gYXJndW1lbnQgOiB1bmRlZmluZWQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lc3BhY2UsIG1ldGhvZCkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA8IDIgPyBhRnVuY3Rpb24oZ2xvYmFsVGhpc1tuYW1lc3BhY2VdKSA6IGdsb2JhbFRoaXNbbmFtZXNwYWNlXSAmJiBnbG9iYWxUaGlzW25hbWVzcGFjZV1bbWV0aG9kXTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIE5BVElWRV9CSU5EID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtbmF0aXZlJyk7XG5cbnZhciBGdW5jdGlvblByb3RvdHlwZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbnZhciBjYWxsID0gRnVuY3Rpb25Qcm90b3R5cGUuY2FsbDtcbnZhciB1bmN1cnJ5VGhpc1dpdGhCaW5kID0gTkFUSVZFX0JJTkQgJiYgRnVuY3Rpb25Qcm90b3R5cGUuYmluZC5iaW5kKGNhbGwsIGNhbGwpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9CSU5EID8gdW5jdXJyeVRoaXNXaXRoQmluZCA6IGZ1bmN0aW9uIChmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBjYWxsLmFwcGx5KGZuLCBhcmd1bWVudHMpO1xuICB9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gdW5jdXJyeVRoaXMoe30uaXNQcm90b3R5cGVPZik7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcblxudmFyIG5hdmlnYXRvciA9IGdsb2JhbFRoaXMubmF2aWdhdG9yO1xudmFyIHVzZXJBZ2VudCA9IG5hdmlnYXRvciAmJiBuYXZpZ2F0b3IudXNlckFnZW50O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVzZXJBZ2VudCA/IFN0cmluZyh1c2VyQWdlbnQpIDogJyc7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdXNlci1hZ2VudCcpO1xuXG52YXIgcHJvY2VzcyA9IGdsb2JhbFRoaXMucHJvY2VzcztcbnZhciBEZW5vID0gZ2xvYmFsVGhpcy5EZW5vO1xudmFyIHZlcnNpb25zID0gcHJvY2VzcyAmJiBwcm9jZXNzLnZlcnNpb25zIHx8IERlbm8gJiYgRGVuby52ZXJzaW9uO1xudmFyIHY4ID0gdmVyc2lvbnMgJiYgdmVyc2lvbnMudjg7XG52YXIgbWF0Y2gsIHZlcnNpb247XG5cbmlmICh2OCkge1xuICBtYXRjaCA9IHY4LnNwbGl0KCcuJyk7XG4gIC8vIGluIG9sZCBDaHJvbWUsIHZlcnNpb25zIG9mIFY4IGlzbid0IFY4ID0gQ2hyb21lIC8gMTBcbiAgLy8gYnV0IHRoZWlyIGNvcnJlY3QgdmVyc2lvbnMgYXJlIG5vdCBpbnRlcmVzdGluZyBmb3IgdXNcbiAgdmVyc2lvbiA9IG1hdGNoWzBdID4gMCAmJiBtYXRjaFswXSA8IDQgPyAxIDogKyhtYXRjaFswXSArIG1hdGNoWzFdKTtcbn1cblxuLy8gQnJvd3NlckZTIE5vZGVKUyBgcHJvY2Vzc2AgcG9seWZpbGwgaW5jb3JyZWN0bHkgc2V0IGAudjhgIHRvIGAwLjBgXG4vLyBzbyBjaGVjayBgdXNlckFnZW50YCBldmVuIGlmIGAudjhgIGV4aXN0cywgYnV0IDBcbmlmICghdmVyc2lvbiAmJiB1c2VyQWdlbnQpIHtcbiAgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2goL0VkZ2VcXC8oXFxkKykvKTtcbiAgaWYgKCFtYXRjaCB8fCBtYXRjaFsxXSA+PSA3NCkge1xuICAgIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9DaHJvbWVcXC8oXFxkKykvKTtcbiAgICBpZiAobWF0Y2gpIHZlcnNpb24gPSArbWF0Y2hbMV07XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2ZXJzaW9uO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLXN5bWJvbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZyAqL1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdjgtdmVyc2lvbicpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xuXG52YXIgJFN0cmluZyA9IGdsb2JhbFRoaXMuU3RyaW5nO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5c3ltYm9scyAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xubW9kdWxlLmV4cG9ydHMgPSAhIU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN5bWJvbCA9IFN5bWJvbCgnc3ltYm9sIGRldGVjdGlvbicpO1xuICAvLyBDaHJvbWUgMzggU3ltYm9sIGhhcyBpbmNvcnJlY3QgdG9TdHJpbmcgY29udmVyc2lvblxuICAvLyBgZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzYCBwb2x5ZmlsbCBzeW1ib2xzIGNvbnZlcnRlZCB0byBvYmplY3QgYXJlIG5vdCBTeW1ib2wgaW5zdGFuY2VzXG4gIC8vIG5iOiBEbyBub3QgY2FsbCBgU3RyaW5nYCBkaXJlY3RseSB0byBhdm9pZCB0aGlzIGJlaW5nIG9wdGltaXplZCBvdXQgdG8gYHN5bWJvbCsnJ2Agd2hpY2ggd2lsbCxcbiAgLy8gb2YgY291cnNlLCBmYWlsLlxuICByZXR1cm4gISRTdHJpbmcoc3ltYm9sKSB8fCAhKE9iamVjdChzeW1ib2wpIGluc3RhbmNlb2YgU3ltYm9sKSB8fFxuICAgIC8vIENocm9tZSAzOC00MCBzeW1ib2xzIGFyZSBub3QgaW5oZXJpdGVkIGZyb20gRE9NIGNvbGxlY3Rpb25zIHByb3RvdHlwZXMgdG8gaW5zdGFuY2VzXG4gICAgIVN5bWJvbC5zaGFtICYmIFY4X1ZFUlNJT04gJiYgVjhfVkVSU0lPTiA8IDQxO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tc3ltYm9sIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zeW1ib2wtY29uc3RydWN0b3ItZGV0ZWN0aW9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX1NZTUJPTFxuICAmJiAhU3ltYm9sLnNoYW1cbiAgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mJyk7XG52YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbm1vZHVsZS5leHBvcnRzID0gVVNFX1NZTUJPTF9BU19VSUQgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyICRTeW1ib2wgPSBnZXRCdWlsdEluKCdTeW1ib2wnKTtcbiAgcmV0dXJuIGlzQ2FsbGFibGUoJFN5bWJvbCkgJiYgaXNQcm90b3R5cGVPZigkU3ltYm9sLnByb3RvdHlwZSwgJE9iamVjdChpdCkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJFN0cmluZyA9IFN0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gJFN0cmluZyhhcmd1bWVudCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuICdPYmplY3QnO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgdHJ5VG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdHJ5LXRvLXN0cmluZycpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYEFzc2VydDogSXNDYWxsYWJsZShhcmd1bWVudCkgaXMgdHJ1ZWBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIGlmIChpc0NhbGxhYmxlKGFyZ3VtZW50KSkgcmV0dXJuIGFyZ3VtZW50O1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcih0cnlUb1N0cmluZyhhcmd1bWVudCkgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIHdlIGNhbid0IHVzZSBqdXN0IGBpdCA9PSBudWxsYCBzaW5jZSBvZiBgZG9jdW1lbnQuYWxsYCBzcGVjaWFsIGNhc2Vcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtSXNIVE1MRERBLWludGVybmFsLXNsb3QtYWVjXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPT09IG51bGwgfHwgaXQgPT09IHVuZGVmaW5lZDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtbnVsbC1vci11bmRlZmluZWQnKTtcblxuLy8gYEdldE1ldGhvZGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWdldG1ldGhvZFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoViwgUCkge1xuICB2YXIgZnVuYyA9IFZbUF07XG4gIHJldHVybiBpc051bGxPclVuZGVmaW5lZChmdW5jKSA/IHVuZGVmaW5lZCA6IGFDYWxsYWJsZShmdW5jKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBPcmRpbmFyeVRvUHJpbWl0aXZlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb3JkaW5hcnl0b3ByaW1pdGl2ZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5wdXQsIHByZWYpIHtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChwcmVmID09PSAnc3RyaW5nJyAmJiBpc0NhbGxhYmxlKGZuID0gaW5wdXQudG9TdHJpbmcpICYmICFpc09iamVjdCh2YWwgPSBjYWxsKGZuLCBpbnB1dCkpKSByZXR1cm4gdmFsO1xuICBpZiAoaXNDYWxsYWJsZShmbiA9IGlucHV0LnZhbHVlT2YpICYmICFpc09iamVjdCh2YWwgPSBjYWxsKGZuLCBpbnB1dCkpKSByZXR1cm4gdmFsO1xuICBpZiAocHJlZiAhPT0gJ3N0cmluZycgJiYgaXNDYWxsYWJsZShmbiA9IGlucHV0LnRvU3RyaW5nKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgdHJ5IHtcbiAgICBkZWZpbmVQcm9wZXJ0eShnbG9iYWxUaGlzLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGdsb2JhbFRoaXNba2V5XSA9IHZhbHVlO1xuICB9IHJldHVybiB2YWx1ZTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBkZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5Jyk7XG5cbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IG1vZHVsZS5leHBvcnRzID0gZ2xvYmFsVGhpc1tTSEFSRURdIHx8IGRlZmluZUdsb2JhbFByb3BlcnR5KFNIQVJFRCwge30pO1xuXG4oc3RvcmUudmVyc2lvbnMgfHwgKHN0b3JlLnZlcnNpb25zID0gW10pKS5wdXNoKHtcbiAgdmVyc2lvbjogJzMuMzguMCcsXG4gIG1vZGU6IElTX1BVUkUgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAxNC0yMDI0IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJyxcbiAgbGljZW5zZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2Jsb2IvdjMuMzguMC9MSUNFTlNFJyxcbiAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMnXG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgc3RvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSB8fCB7fSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYFJlcXVpcmVPYmplY3RDb2VyY2libGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZXF1aXJlb2JqZWN0Y29lcmNpYmxlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXNOdWxsT3JVbmRlZmluZWQoaXQpKSB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcblxuLy8gYFRvT2JqZWN0YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9vYmplY3Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiAkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xuXG52YXIgaGFzT3duUHJvcGVydHkgPSB1bmN1cnJ5VGhpcyh7fS5oYXNPd25Qcm9wZXJ0eSk7XG5cbi8vIGBIYXNPd25Qcm9wZXJ0eWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWhhc293bnByb3BlcnR5XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWhhc293biAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5oYXNPd24gfHwgZnVuY3Rpb24gaGFzT3duKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5KHRvT2JqZWN0KGl0KSwga2V5KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG52YXIgaWQgPSAwO1xudmFyIHBvc3RmaXggPSBNYXRoLnJhbmRvbSgpO1xudmFyIHRvU3RyaW5nID0gdW5jdXJyeVRoaXMoMS4wLnRvU3RyaW5nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcgKyAoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSkgKyAnKV8nICsgdG9TdHJpbmcoKytpZCArIHBvc3RmaXgsIDM2KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zeW1ib2wtY29uc3RydWN0b3ItZGV0ZWN0aW9uJyk7XG52YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQnKTtcblxudmFyIFN5bWJvbCA9IGdsb2JhbFRoaXMuU3ltYm9sO1xudmFyIFdlbGxLbm93blN5bWJvbHNTdG9yZSA9IHNoYXJlZCgnd2tzJyk7XG52YXIgY3JlYXRlV2VsbEtub3duU3ltYm9sID0gVVNFX1NZTUJPTF9BU19VSUQgPyBTeW1ib2xbJ2ZvciddIHx8IFN5bWJvbCA6IFN5bWJvbCAmJiBTeW1ib2wud2l0aG91dFNldHRlciB8fCB1aWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgaWYgKCFoYXNPd24oV2VsbEtub3duU3ltYm9sc1N0b3JlLCBuYW1lKSkge1xuICAgIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXSA9IE5BVElWRV9TWU1CT0wgJiYgaGFzT3duKFN5bWJvbCwgbmFtZSlcbiAgICAgID8gU3ltYm9sW25hbWVdXG4gICAgICA6IGNyZWF0ZVdlbGxLbm93blN5bWJvbCgnU3ltYm9sLicgKyBuYW1lKTtcbiAgfSByZXR1cm4gV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciBvcmRpbmFyeVRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZScpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbnZhciBUT19QUklNSVRJVkUgPSB3ZWxsS25vd25TeW1ib2woJ3RvUHJpbWl0aXZlJyk7XG5cbi8vIGBUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJpbWl0aXZlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnB1dCwgcHJlZikge1xuICBpZiAoIWlzT2JqZWN0KGlucHV0KSB8fCBpc1N5bWJvbChpbnB1dCkpIHJldHVybiBpbnB1dDtcbiAgdmFyIGV4b3RpY1RvUHJpbSA9IGdldE1ldGhvZChpbnB1dCwgVE9fUFJJTUlUSVZFKTtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKGV4b3RpY1RvUHJpbSkge1xuICAgIGlmIChwcmVmID09PSB1bmRlZmluZWQpIHByZWYgPSAnZGVmYXVsdCc7XG4gICAgcmVzdWx0ID0gY2FsbChleG90aWNUb1ByaW0sIGlucHV0LCBwcmVmKTtcbiAgICBpZiAoIWlzT2JqZWN0KHJlc3VsdCkgfHwgaXNTeW1ib2wocmVzdWx0KSkgcmV0dXJuIHJlc3VsdDtcbiAgICB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbiAgfVxuICBpZiAocHJlZiA9PT0gdW5kZWZpbmVkKSBwcmVmID0gJ251bWJlcic7XG4gIHJldHVybiBvcmRpbmFyeVRvUHJpbWl0aXZlKGlucHV0LCBwcmVmKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xudmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXN5bWJvbCcpO1xuXG4vLyBgVG9Qcm9wZXJ0eUtleWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJvcGVydHlrZXlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBrZXkgPSB0b1ByaW1pdGl2ZShhcmd1bWVudCwgJ3N0cmluZycpO1xuICByZXR1cm4gaXNTeW1ib2woa2V5KSA/IGtleSA6IGtleSArICcnO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pZTgtZG9tLWRlZmluZScpO1xudmFyIFY4X1BST1RPVFlQRV9ERUZJTkVfQlVHID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Y4LXByb3RvdHlwZS1kZWZpbmUtYnVnJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcm9wZXJ0eS1rZXknKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbnZhciAkZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgRU5VTUVSQUJMRSA9ICdlbnVtZXJhYmxlJztcbnZhciBDT05GSUdVUkFCTEUgPSAnY29uZmlndXJhYmxlJztcbnZhciBXUklUQUJMRSA9ICd3cml0YWJsZSc7XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydHlgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydHlcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gVjhfUFJPVE9UWVBFX0RFRklORV9CVUcgPyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9Qcm9wZXJ0eUtleShQKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmICh0eXBlb2YgTyA9PT0gJ2Z1bmN0aW9uJyAmJiBQID09PSAncHJvdG90eXBlJyAmJiAndmFsdWUnIGluIEF0dHJpYnV0ZXMgJiYgV1JJVEFCTEUgaW4gQXR0cmlidXRlcyAmJiAhQXR0cmlidXRlc1tXUklUQUJMRV0pIHtcbiAgICB2YXIgY3VycmVudCA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG4gICAgaWYgKGN1cnJlbnQgJiYgY3VycmVudFtXUklUQUJMRV0pIHtcbiAgICAgIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICAgICAgQXR0cmlidXRlcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiBDT05GSUdVUkFCTEUgaW4gQXR0cmlidXRlcyA/IEF0dHJpYnV0ZXNbQ09ORklHVVJBQkxFXSA6IGN1cnJlbnRbQ09ORklHVVJBQkxFXSxcbiAgICAgICAgZW51bWVyYWJsZTogRU5VTUVSQUJMRSBpbiBBdHRyaWJ1dGVzID8gQXR0cmlidXRlc1tFTlVNRVJBQkxFXSA6IGN1cnJlbnRbRU5VTUVSQUJMRV0sXG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgICAgfTtcbiAgICB9XG4gIH0gcmV0dXJuICRkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKTtcbn0gOiAkZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9Qcm9wZXJ0eUtleShQKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gJGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IG5ldyAkVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCcpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG5cbnZhciBGdW5jdGlvblByb3RvdHlwZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciBnZXREZXNjcmlwdG9yID0gREVTQ1JJUFRPUlMgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxudmFyIEVYSVNUUyA9IGhhc093bihGdW5jdGlvblByb3RvdHlwZSwgJ25hbWUnKTtcbi8vIGFkZGl0aW9uYWwgcHJvdGVjdGlvbiBmcm9tIG1pbmlmaWVkIC8gbWFuZ2xlZCAvIGRyb3BwZWQgZnVuY3Rpb24gbmFtZXNcbnZhciBQUk9QRVIgPSBFWElTVFMgJiYgKGZ1bmN0aW9uIHNvbWV0aGluZygpIHsgLyogZW1wdHkgKi8gfSkubmFtZSA9PT0gJ3NvbWV0aGluZyc7XG52YXIgQ09ORklHVVJBQkxFID0gRVhJU1RTICYmICghREVTQ1JJUFRPUlMgfHwgKERFU0NSSVBUT1JTICYmIGdldERlc2NyaXB0b3IoRnVuY3Rpb25Qcm90b3R5cGUsICduYW1lJykuY29uZmlndXJhYmxlKSk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBFWElTVFM6IEVYSVNUUyxcbiAgUFJPUEVSOiBQUk9QRVIsXG4gIENPTkZJR1VSQUJMRTogQ09ORklHVVJBQkxFXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgc3RvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG5cbnZhciBmdW5jdGlvblRvU3RyaW5nID0gdW5jdXJyeVRoaXMoRnVuY3Rpb24udG9TdHJpbmcpO1xuXG4vLyB0aGlzIGhlbHBlciBicm9rZW4gaW4gYGNvcmUtanNAMy40LjEtMy40LjRgLCBzbyB3ZSBjYW4ndCB1c2UgYHNoYXJlZGAgaGVscGVyXG5pZiAoIWlzQ2FsbGFibGUoc3RvcmUuaW5zcGVjdFNvdXJjZSkpIHtcbiAgc3RvcmUuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBmdW5jdGlvblRvU3RyaW5nKGl0KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdG9yZS5pbnNwZWN0U291cmNlO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgV2Vha01hcCA9IGdsb2JhbFRoaXMuV2Vha01hcDtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0NhbGxhYmxlKFdlYWtNYXApICYmIC9uYXRpdmUgY29kZS8udGVzdChTdHJpbmcoV2Vha01hcCkpO1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIGtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcblxudmFyIGtleXMgPSBzaGFyZWQoJ2tleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBrZXlzW2tleV0gfHwgKGtleXNba2V5XSA9IHVpZChrZXkpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgTkFUSVZFX1dFQUtfTUFQID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlYWstbWFwLWJhc2ljLWRldGVjdGlvbicpO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG52YXIgc2hhcmVkS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG5cbnZhciBPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCA9ICdPYmplY3QgYWxyZWFkeSBpbml0aWFsaXplZCc7XG52YXIgVHlwZUVycm9yID0gZ2xvYmFsVGhpcy5UeXBlRXJyb3I7XG52YXIgV2Vha01hcCA9IGdsb2JhbFRoaXMuV2Vha01hcDtcbnZhciBzZXQsIGdldCwgaGFzO1xuXG52YXIgZW5mb3JjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaGFzKGl0KSA/IGdldChpdCkgOiBzZXQoaXQsIHt9KTtcbn07XG5cbnZhciBnZXR0ZXJGb3IgPSBmdW5jdGlvbiAoVFlQRSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGl0KSB7XG4gICAgdmFyIHN0YXRlO1xuICAgIGlmICghaXNPYmplY3QoaXQpIHx8IChzdGF0ZSA9IGdldChpdCkpLnR5cGUgIT09IFRZUEUpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0luY29tcGF0aWJsZSByZWNlaXZlciwgJyArIFRZUEUgKyAnIHJlcXVpcmVkJyk7XG4gICAgfSByZXR1cm4gc3RhdGU7XG4gIH07XG59O1xuXG5pZiAoTkFUSVZFX1dFQUtfTUFQIHx8IHNoYXJlZC5zdGF0ZSkge1xuICB2YXIgc3RvcmUgPSBzaGFyZWQuc3RhdGUgfHwgKHNoYXJlZC5zdGF0ZSA9IG5ldyBXZWFrTWFwKCkpO1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1zZWxmLWFzc2lnbiAtLSBwcm90b3R5cGUgbWV0aG9kcyBwcm90ZWN0aW9uICovXG4gIHN0b3JlLmdldCA9IHN0b3JlLmdldDtcbiAgc3RvcmUuaGFzID0gc3RvcmUuaGFzO1xuICBzdG9yZS5zZXQgPSBzdG9yZS5zZXQ7XG4gIC8qIGVzbGludC1lbmFibGUgbm8tc2VsZi1hc3NpZ24gLS0gcHJvdG90eXBlIG1ldGhvZHMgcHJvdGVjdGlvbiAqL1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgaWYgKHN0b3JlLmhhcyhpdCkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIHN0b3JlLnNldChpdCwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHN0b3JlLmdldChpdCkgfHwge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBzdG9yZS5oYXMoaXQpO1xuICB9O1xufSBlbHNlIHtcbiAgdmFyIFNUQVRFID0gc2hhcmVkS2V5KCdzdGF0ZScpO1xuICBoaWRkZW5LZXlzW1NUQVRFXSA9IHRydWU7XG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICBpZiAoaGFzT3duKGl0LCBTVEFURSkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShpdCwgU1RBVEUsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBoYXNPd24oaXQsIFNUQVRFKSA/IGl0W1NUQVRFXSA6IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaGFzT3duKGl0LCBTVEFURSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldCxcbiAgZ2V0OiBnZXQsXG4gIGhhczogaGFzLFxuICBlbmZvcmNlOiBlbmZvcmNlLFxuICBnZXR0ZXJGb3I6IGdldHRlckZvclxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIENPTkZJR1VSQUJMRV9GVU5DVElPTl9OQU1FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLW5hbWUnKS5DT05GSUdVUkFCTEU7XG52YXIgaW5zcGVjdFNvdXJjZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnNwZWN0LXNvdXJjZScpO1xudmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUnKTtcblxudmFyIGVuZm9yY2VJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5lbmZvcmNlO1xudmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldDtcbnZhciAkU3RyaW5nID0gU3RyaW5nO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG52YXIgcmVwbGFjZSA9IHVuY3VycnlUaGlzKCcnLnJlcGxhY2UpO1xudmFyIGpvaW4gPSB1bmN1cnJ5VGhpcyhbXS5qb2luKTtcblxudmFyIENPTkZJR1VSQUJMRV9MRU5HVEggPSBERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHkoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9LCAnbGVuZ3RoJywgeyB2YWx1ZTogOCB9KS5sZW5ndGggIT09IDg7XG59KTtcblxudmFyIFRFTVBMQVRFID0gU3RyaW5nKFN0cmluZykuc3BsaXQoJ1N0cmluZycpO1xuXG52YXIgbWFrZUJ1aWx0SW4gPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSwgbmFtZSwgb3B0aW9ucykge1xuICBpZiAoc3RyaW5nU2xpY2UoJFN0cmluZyhuYW1lKSwgMCwgNykgPT09ICdTeW1ib2woJykge1xuICAgIG5hbWUgPSAnWycgKyByZXBsYWNlKCRTdHJpbmcobmFtZSksIC9eU3ltYm9sXFwoKFteKV0qKVxcKS4qJC8sICckMScpICsgJ10nO1xuICB9XG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZ2V0dGVyKSBuYW1lID0gJ2dldCAnICsgbmFtZTtcbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5zZXR0ZXIpIG5hbWUgPSAnc2V0ICcgKyBuYW1lO1xuICBpZiAoIWhhc093bih2YWx1ZSwgJ25hbWUnKSB8fCAoQ09ORklHVVJBQkxFX0ZVTkNUSU9OX05BTUUgJiYgdmFsdWUubmFtZSAhPT0gbmFtZSkpIHtcbiAgICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5KHZhbHVlLCAnbmFtZScsIHsgdmFsdWU6IG5hbWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KTtcbiAgICBlbHNlIHZhbHVlLm5hbWUgPSBuYW1lO1xuICB9XG4gIGlmIChDT05GSUdVUkFCTEVfTEVOR1RIICYmIG9wdGlvbnMgJiYgaGFzT3duKG9wdGlvbnMsICdhcml0eScpICYmIHZhbHVlLmxlbmd0aCAhPT0gb3B0aW9ucy5hcml0eSkge1xuICAgIGRlZmluZVByb3BlcnR5KHZhbHVlLCAnbGVuZ3RoJywgeyB2YWx1ZTogb3B0aW9ucy5hcml0eSB9KTtcbiAgfVxuICB0cnkge1xuICAgIGlmIChvcHRpb25zICYmIGhhc093bihvcHRpb25zLCAnY29uc3RydWN0b3InKSAmJiBvcHRpb25zLmNvbnN0cnVjdG9yKSB7XG4gICAgICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5KHZhbHVlLCAncHJvdG90eXBlJywgeyB3cml0YWJsZTogZmFsc2UgfSk7XG4gICAgLy8gaW4gVjggfiBDaHJvbWUgNTMsIHByb3RvdHlwZXMgb2Ygc29tZSBtZXRob2RzLCBsaWtlIGBBcnJheS5wcm90b3R5cGUudmFsdWVzYCwgYXJlIG5vbi13cml0YWJsZVxuICAgIH0gZWxzZSBpZiAodmFsdWUucHJvdG90eXBlKSB2YWx1ZS5wcm90b3R5cGUgPSB1bmRlZmluZWQ7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgdmFyIHN0YXRlID0gZW5mb3JjZUludGVybmFsU3RhdGUodmFsdWUpO1xuICBpZiAoIWhhc093bihzdGF0ZSwgJ3NvdXJjZScpKSB7XG4gICAgc3RhdGUuc291cmNlID0gam9pbihURU1QTEFURSwgdHlwZW9mIG5hbWUgPT0gJ3N0cmluZycgPyBuYW1lIDogJycpO1xuICB9IHJldHVybiB2YWx1ZTtcbn07XG5cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWV4dGVuZC1uYXRpdmUgLS0gcmVxdWlyZWRcbkZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZyA9IG1ha2VCdWlsdEluKGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gaXNDYWxsYWJsZSh0aGlzKSAmJiBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpLnNvdXJjZSB8fCBpbnNwZWN0U291cmNlKHRoaXMpO1xufSwgJ3RvU3RyaW5nJyk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgbWFrZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWFrZS1idWlsdC1pbicpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywga2V5LCB2YWx1ZSwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcbiAgdmFyIHNpbXBsZSA9IG9wdGlvbnMuZW51bWVyYWJsZTtcbiAgdmFyIG5hbWUgPSBvcHRpb25zLm5hbWUgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubmFtZSA6IGtleTtcbiAgaWYgKGlzQ2FsbGFibGUodmFsdWUpKSBtYWtlQnVpbHRJbih2YWx1ZSwgbmFtZSwgb3B0aW9ucyk7XG4gIGlmIChvcHRpb25zLmdsb2JhbCkge1xuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2UgZGVmaW5lR2xvYmFsUHJvcGVydHkoa2V5LCB2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghb3B0aW9ucy51bnNhZmUpIGRlbGV0ZSBPW2tleV07XG4gICAgICBlbHNlIGlmIChPW2tleV0pIHNpbXBsZSA9IHRydWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2UgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihPLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiAhb3B0aW9ucy5ub25Db25maWd1cmFibGUsXG4gICAgICB3cml0YWJsZTogIW9wdGlvbnMubm9uV3JpdGFibGVcbiAgICB9KTtcbiAgfSByZXR1cm4gTztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcbnZhciB0ZXN0ID0ge307XG5cbnRlc3RbVE9fU1RSSU5HX1RBR10gPSAneic7XG5cbm1vZHVsZS5leHBvcnRzID0gU3RyaW5nKHRlc3QpID09PSAnW29iamVjdCB6XSc7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG52YXIgdG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyh7fS50b1N0cmluZyk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBzdHJpbmdTbGljZSh0b1N0cmluZyhpdCksIDgsIC0xKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIFRPX1NUUklOR19UQUdfU1VQUE9SVCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmctdGFnLXN1cHBvcnQnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgY2xhc3NvZlJhdyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xuXG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIENPUlJFQ1RfQVJHVU1FTlRTID0gY2xhc3NvZlJhdyhmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbn07XG5cbi8vIGdldHRpbmcgdGFnIGZyb20gRVM2KyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2Bcbm1vZHVsZS5leHBvcnRzID0gVE9fU1RSSU5HX1RBR19TVVBQT1JUID8gY2xhc3NvZlJhdyA6IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgdGFnLCByZXN1bHQ7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mICh0YWcgPSB0cnlHZXQoTyA9ICRPYmplY3QoaXQpLCBUT19TVFJJTkdfVEFHKSkgPT0gJ3N0cmluZycgPyB0YWdcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IENPUlJFQ1RfQVJHVU1FTlRTID8gY2xhc3NvZlJhdyhPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChyZXN1bHQgPSBjbGFzc29mUmF3KE8pKSA9PT0gJ09iamVjdCcgJiYgaXNDYWxsYWJsZShPLmNhbGxlZSkgPyAnQXJndW1lbnRzJyA6IHJlc3VsdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZicpO1xuXG52YXIgJFN0cmluZyA9IFN0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgaWYgKGNsYXNzb2YoYXJndW1lbnQpID09PSAnU3ltYm9sJykgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgYSBTeW1ib2wgdmFsdWUgdG8gYSBzdHJpbmcnKTtcbiAgcmV0dXJuICRTdHJpbmcoYXJndW1lbnQpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocGFzc2VkLCByZXF1aXJlZCkge1xuICBpZiAocGFzc2VkIDwgcmVxdWlyZWQpIHRocm93IG5ldyAkVHlwZUVycm9yKCdOb3QgZW5vdWdoIGFyZ3VtZW50cycpO1xuICByZXR1cm4gcGFzc2VkO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZGVmaW5lQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4nKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmcnKTtcbnZhciB2YWxpZGF0ZUFyZ3VtZW50c0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy92YWxpZGF0ZS1hcmd1bWVudHMtbGVuZ3RoJyk7XG5cbnZhciAkVVJMU2VhcmNoUGFyYW1zID0gVVJMU2VhcmNoUGFyYW1zO1xudmFyIFVSTFNlYXJjaFBhcmFtc1Byb3RvdHlwZSA9ICRVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlO1xudmFyIGFwcGVuZCA9IHVuY3VycnlUaGlzKFVSTFNlYXJjaFBhcmFtc1Byb3RvdHlwZS5hcHBlbmQpO1xudmFyICRkZWxldGUgPSB1bmN1cnJ5VGhpcyhVUkxTZWFyY2hQYXJhbXNQcm90b3R5cGVbJ2RlbGV0ZSddKTtcbnZhciBmb3JFYWNoID0gdW5jdXJyeVRoaXMoVVJMU2VhcmNoUGFyYW1zUHJvdG90eXBlLmZvckVhY2gpO1xudmFyIHB1c2ggPSB1bmN1cnJ5VGhpcyhbXS5wdXNoKTtcbnZhciBwYXJhbXMgPSBuZXcgJFVSTFNlYXJjaFBhcmFtcygnYT0xJmE9MiZiPTMnKTtcblxucGFyYW1zWydkZWxldGUnXSgnYScsIDEpO1xuLy8gYHVuZGVmaW5lZGAgY2FzZSBpcyBhIENocm9taXVtIDExNyBidWdcbi8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTE0MjIyXG5wYXJhbXNbJ2RlbGV0ZSddKCdiJywgdW5kZWZpbmVkKTtcblxuaWYgKHBhcmFtcyArICcnICE9PSAnYT0yJykge1xuICBkZWZpbmVCdWlsdEluKFVSTFNlYXJjaFBhcmFtc1Byb3RvdHlwZSwgJ2RlbGV0ZScsIGZ1bmN0aW9uIChuYW1lIC8qICwgdmFsdWUgKi8pIHtcbiAgICB2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICB2YXIgJHZhbHVlID0gbGVuZ3RoIDwgMiA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1sxXTtcbiAgICBpZiAobGVuZ3RoICYmICR2YWx1ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gJGRlbGV0ZSh0aGlzLCBuYW1lKTtcbiAgICB2YXIgZW50cmllcyA9IFtdO1xuICAgIGZvckVhY2godGhpcywgZnVuY3Rpb24gKHYsIGspIHsgLy8gYWxzbyB2YWxpZGF0ZXMgYHRoaXNgXG4gICAgICBwdXNoKGVudHJpZXMsIHsga2V5OiBrLCB2YWx1ZTogdiB9KTtcbiAgICB9KTtcbiAgICB2YWxpZGF0ZUFyZ3VtZW50c0xlbmd0aChsZW5ndGgsIDEpO1xuICAgIHZhciBrZXkgPSB0b1N0cmluZyhuYW1lKTtcbiAgICB2YXIgdmFsdWUgPSB0b1N0cmluZygkdmFsdWUpO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIGRpbmRleCA9IDA7XG4gICAgdmFyIGZvdW5kID0gZmFsc2U7XG4gICAgdmFyIGVudHJpZXNMZW5ndGggPSBlbnRyaWVzLmxlbmd0aDtcbiAgICB2YXIgZW50cnk7XG4gICAgd2hpbGUgKGluZGV4IDwgZW50cmllc0xlbmd0aCkge1xuICAgICAgZW50cnkgPSBlbnRyaWVzW2luZGV4KytdO1xuICAgICAgaWYgKGZvdW5kIHx8IGVudHJ5LmtleSA9PT0ga2V5KSB7XG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgJGRlbGV0ZSh0aGlzLCBlbnRyeS5rZXkpO1xuICAgICAgfSBlbHNlIGRpbmRleCsrO1xuICAgIH1cbiAgICB3aGlsZSAoZGluZGV4IDwgZW50cmllc0xlbmd0aCkge1xuICAgICAgZW50cnkgPSBlbnRyaWVzW2RpbmRleCsrXTtcbiAgICAgIGlmICghKGVudHJ5LmtleSA9PT0ga2V5ICYmIGVudHJ5LnZhbHVlID09PSB2YWx1ZSkpIGFwcGVuZCh0aGlzLCBlbnRyeS5rZXksIGVudHJ5LnZhbHVlKTtcbiAgICB9XG4gIH0sIHsgZW51bWVyYWJsZTogdHJ1ZSwgdW5zYWZlOiB0cnVlIH0pO1xufVxuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBkZWZpbmVCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbicpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIHZhbGlkYXRlQXJndW1lbnRzTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3ZhbGlkYXRlLWFyZ3VtZW50cy1sZW5ndGgnKTtcblxudmFyICRVUkxTZWFyY2hQYXJhbXMgPSBVUkxTZWFyY2hQYXJhbXM7XG52YXIgVVJMU2VhcmNoUGFyYW1zUHJvdG90eXBlID0gJFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGU7XG52YXIgZ2V0QWxsID0gdW5jdXJyeVRoaXMoVVJMU2VhcmNoUGFyYW1zUHJvdG90eXBlLmdldEFsbCk7XG52YXIgJGhhcyA9IHVuY3VycnlUaGlzKFVSTFNlYXJjaFBhcmFtc1Byb3RvdHlwZS5oYXMpO1xudmFyIHBhcmFtcyA9IG5ldyAkVVJMU2VhcmNoUGFyYW1zKCdhPTEnKTtcblxuLy8gYHVuZGVmaW5lZGAgY2FzZSBpcyBhIENocm9taXVtIDExNyBidWdcbi8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTE0MjIyXG5pZiAocGFyYW1zLmhhcygnYScsIDIpIHx8ICFwYXJhbXMuaGFzKCdhJywgdW5kZWZpbmVkKSkge1xuICBkZWZpbmVCdWlsdEluKFVSTFNlYXJjaFBhcmFtc1Byb3RvdHlwZSwgJ2hhcycsIGZ1bmN0aW9uIGhhcyhuYW1lIC8qICwgdmFsdWUgKi8pIHtcbiAgICB2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICB2YXIgJHZhbHVlID0gbGVuZ3RoIDwgMiA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1sxXTtcbiAgICBpZiAobGVuZ3RoICYmICR2YWx1ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gJGhhcyh0aGlzLCBuYW1lKTtcbiAgICB2YXIgdmFsdWVzID0gZ2V0QWxsKHRoaXMsIG5hbWUpOyAvLyBhbHNvIHZhbGlkYXRlcyBgdGhpc2BcbiAgICB2YWxpZGF0ZUFyZ3VtZW50c0xlbmd0aChsZW5ndGgsIDEpO1xuICAgIHZhciB2YWx1ZSA9IHRvU3RyaW5nKCR2YWx1ZSk7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB3aGlsZSAoaW5kZXggPCB2YWx1ZXMubGVuZ3RoKSB7XG4gICAgICBpZiAodmFsdWVzW2luZGV4KytdID09PSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgfSByZXR1cm4gZmFsc2U7XG4gIH0sIHsgZW51bWVyYWJsZTogdHJ1ZSwgdW5zYWZlOiB0cnVlIH0pO1xufVxuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBtYWtlQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9tYWtlLWJ1aWx0LWluJyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpIHtcbiAgaWYgKGRlc2NyaXB0b3IuZ2V0KSBtYWtlQnVpbHRJbihkZXNjcmlwdG9yLmdldCwgbmFtZSwgeyBnZXR0ZXI6IHRydWUgfSk7XG4gIGlmIChkZXNjcmlwdG9yLnNldCkgbWFrZUJ1aWx0SW4oZGVzY3JpcHRvci5zZXQsIG5hbWUsIHsgc2V0dGVyOiB0cnVlIH0pO1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHkuZih0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBkZWZpbmVCdWlsdEluQWNjZXNzb3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluLWFjY2Vzc29yJyk7XG5cbnZhciBVUkxTZWFyY2hQYXJhbXNQcm90b3R5cGUgPSBVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlO1xudmFyIGZvckVhY2ggPSB1bmN1cnJ5VGhpcyhVUkxTZWFyY2hQYXJhbXNQcm90b3R5cGUuZm9yRWFjaCk7XG5cbi8vIGBVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlLnNpemVgIGdldHRlclxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3doYXR3Zy91cmwvcHVsbC83MzRcbmlmIChERVNDUklQVE9SUyAmJiAhKCdzaXplJyBpbiBVUkxTZWFyY2hQYXJhbXNQcm90b3R5cGUpKSB7XG4gIGRlZmluZUJ1aWx0SW5BY2Nlc3NvcihVUkxTZWFyY2hQYXJhbXNQcm90b3R5cGUsICdzaXplJywge1xuICAgIGdldDogZnVuY3Rpb24gc2l6ZSgpIHtcbiAgICAgIHZhciBjb3VudCA9IDA7XG4gICAgICBmb3JFYWNoKHRoaXMsIGZ1bmN0aW9uICgpIHsgY291bnQrKzsgfSk7XG4gICAgICByZXR1cm4gY291bnQ7XG4gICAgfSxcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZW51bWVyYWJsZTogdHJ1ZVxuICB9KTtcbn1cbiIsICJjbGFzcyBDb25zdGFudHMge1xuXHR2ZXJzaW9uID0gJzQuMC4xMic7XG5cdGdldCBpc0FydGljbGUoKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCd3Z0lzQXJ0aWNsZScpO1xuXHR9XG5cdGdldCBjdXJyZW50UGFnZU5hbWUoKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJykucmVwbGFjZSgvIC9nLCAnXycpO1xuXHR9XG5cdGdldCBhcnRpY2xlSWQoKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCd3Z0FydGljbGVJZCcpO1xuXHR9XG5cdGdldCByZXZpc2lvbklkKCkge1xuXHRcdHJldHVybiB3aW5kb3cubXcuY29uZmlnLmdldCgnd2dSZXZpc2lvbklkJyk7XG5cdH1cblx0Z2V0IGxhdGVzdFJldmlzaW9uSWQoKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCd3Z0N1clJldmlzaW9uSWQnKTtcblx0fVxuXHRnZXQgYXJ0aWNsZVBhdGgoKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCd3Z0FydGljbGVQYXRoJyk7XG5cdH1cblx0Z2V0IHNjcmlwdFBhdGgoKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCd3Z1NjcmlwdFBhdGgnKTtcblx0fVxuXHRnZXQgYWN0aW9uKCkge1xuXHRcdHJldHVybiB3aW5kb3cubXcuY29uZmlnLmdldCgnd2dBY3Rpb24nKTtcblx0fVxuXHRnZXQgc2tpbigpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3NraW4nKTtcblx0fVxuXHRnZXQgdXNlckdyb3VwcygpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3dnVXNlckdyb3VwcycpO1xuXHR9XG5cdGdldCB3aWtpSWQoKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCd3Z1dpa2lJRCcpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBDb25zdGFudHMoKTtcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuLi91dGlscy9jb25zdGFudHMnO1xuXG5jb25zdCBSZXF1ZXN0cyA9IHtcblx0YmFzZTogYCR7bG9jYXRpb24ucHJvdG9jb2x9Ly8ke2xvY2F0aW9uLmhvc3R9JHtDb25zdGFudHMuc2NyaXB0UGF0aH0vYXBpLnBocGAsXG5cdGFzeW5jIGdldChxdWVyeSkge1xuXHRcdGNvbnN0IHVybCA9IG5ldyBVUkwoUmVxdWVzdHMuYmFzZSk7XG5cdFx0Zm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMocXVlcnkpKSB7XG5cdFx0XHR1cmwuc2VhcmNoUGFyYW1zLmFwcGVuZChrZXksIHF1ZXJ5W2tleV0pO1xuXHRcdH1cblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuXHRcdFx0Y3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdCdBcGktVXNlci1BZ2VudCc6IGBXaWtpcGx1cy8ke0NvbnN0YW50cy52ZXJzaW9ufSAoJHtDb25zdGFudHMud2lraUlkfSlgLFxuXHRcdFx0fSxcblx0XHR9KTtcblx0XHRyZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXHR9LFxuXHRhc3luYyBwb3N0KHBheWxvYWQpIHtcblx0XHRjb25zdCB1cmwgPSBuZXcgVVJMKFJlcXVlc3RzLmJhc2UpO1xuXHRcdGNvbnN0IGZvcm0gPSBuZXcgRm9ybURhdGEoKTtcblx0XHRmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhwYXlsb2FkKSkge1xuXHRcdFx0Zm9ybS5hcHBlbmQoa2V5LCB2YWx1ZSk7XG5cdFx0fVxuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdGJvZHk6IGZvcm0sXG5cdFx0XHRjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0J0FwaS1Vc2VyLUFnZW50JzogYFdpa2lwbHVzLyR7Q29uc3RhbnRzLnZlcnNpb259ICgke0NvbnN0YW50cy53aWtpSWR9KWAsXG5cdFx0XHR9LFxuXHRcdH0pO1xuXHRcdHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cdH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0cztcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuY2xhc3MgSTE4biB7XG5cdGxhbmd1YWdlO1xuXHRpMThuRGF0YSA9IHt9O1xuXHRzZXNzaW9uVXBkYXRlTG9nID0gW107XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdGxldCBsYW5ndWFnZTtcblx0XHR0cnkge1xuXHRcdFx0bGFuZ3VhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZVsnV2lraXBsdXNfU2V0dGluZ3MnXSlbJ2xhbmd1YWdlJ10gfHwgbmF2aWdhdG9yLmxhbmd1YWdlLnRvTG93ZXJDYXNlKCk7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRsYW5ndWFnZSA9IChuYXZpZ2F0b3IubGFuZ3VhZ2UgfHwgbmF2aWdhdG9yLmJyb3dzZXJMYW5ndWFnZSlcblx0XHRcdFx0LnJlcGxhY2UoL2hhbltzdF0tPy9pLCAnJykgLy8gZm9yIGxhbmd1YWdlcyBsaWtlIHpoLUhhbnMtQ05cblx0XHRcdFx0LnRvTG93ZXJDYXNlKCk7XG5cdFx0fVxuXHRcdHRoaXMubGFuZ3VhZ2UgPSBsYW5ndWFnZTtcblx0XHQvLyBNZXJnZSB3aXRoIGxvY2FsU3RvcmFnZSBpMThuIGNhY2hlXG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IGkxOG5DYWNoZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1dpa2lwbHVzX2kxOG5DYWNoZScpKTtcblx0XHRcdGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGkxOG5DYWNoZSkpIHtcblx0XHRcdFx0dGhpcy5pMThuRGF0YVtrZXldID0gaTE4bkNhY2hlW2tleV07XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHQvLyBGYWlsIHRvIHBhcnNlIGkxOG4gY2FjaGUsIHJlc2V0XG5cdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnV2lraXBsdXNfaTE4bkNhY2hlJywgJ3t9Jyk7XG5cdFx0fVxuXHR9XG5cdHRyYW5zbGF0ZShrZXksIHBsYWNlaG9sZGVycyA9IFtdKSB7XG5cdFx0bGV0IHJlc3VsdCA9ICcnO1xuXHRcdGlmICh0aGlzLmxhbmd1YWdlIGluIHRoaXMuaTE4bkRhdGEpIHtcblx0XHRcdGlmIChrZXkgaW4gdGhpcy5pMThuRGF0YVt0aGlzLmxhbmd1YWdlXSkge1xuXHRcdFx0XHRyZXN1bHQgPSB0aGlzLmkxOG5EYXRhW3RoaXMubGFuZ3VhZ2VdW2tleV07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyB0cnkgdXBkYXRlIGxhbmd1YWdlIHZlcmlzb25cblx0XHRcdFx0dGhpcy5sb2FkTGFuZ3VhZ2UodGhpcy5sYW5ndWFnZSk7XG5cdFx0XHRcdGlmIChrZXkgaW4gdGhpcy5pMThuRGF0YVsnZW4tdXMnXSkge1xuXHRcdFx0XHRcdC8vIEZhbGxiYWNrIHRvIEVuZ2xpc2hcblx0XHRcdFx0XHRyZXN1bHQgPSB0aGlzLmkxOG5EYXRhWydlbi11cyddW2tleV07XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmVzdWx0ID0ga2V5O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMubG9hZExhbmd1YWdlKHRoaXMubGFuZ3VhZ2UpO1xuXHRcdH1cblxuXHRcdGlmIChwbGFjZWhvbGRlcnMubGVuZ3RoID4gMCkge1xuXHRcdFx0Zm9yIChjb25zdCBbaW5kZXgsIHBsYWNlaG9sZGVyXSBvZiBwbGFjZWhvbGRlcnMuZW50cmllcygpKSB7XG5cdFx0XHRcdHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKGAkJHtpbmRleCArIDF9YCwgcGxhY2Vob2xkZXIpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cdGFzeW5jIGxvYWRMYW5ndWFnZShsYW5ndWFnZSkge1xuXHRcdGlmICh0aGlzLnNlc3Npb25VcGRhdGVMb2cuaW5jbHVkZXMobGFuZ3VhZ2UpKSB7XG5cdFx0XHQvLyBIYXMgYmVlbiB1cGRhdGVkIHRoaXMgc2Vzc2lvbi5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgKFxuXHRcdFx0XHRhd2FpdCBmZXRjaChcblx0XHRcdFx0XHRgaHR0cHM6Ly9naXRjZG4ucWl1d2VuLm5ldC5jbi9JbnRlcmZhY2VBZG1pbi9XaWtpcGx1cy9yYXcvYnJhbmNoL2Rldi9sYW5ndWFnZXMvJHtsYW5ndWFnZX0uanNvbmBcblx0XHRcdFx0KVxuXHRcdFx0KS5qc29uKCk7XG5cdFx0XHRjb25zdCBub3dWZXJzaW9uID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1dpa2lwbHVzX0xhbmd1YWdlVmVyc2lvbicpIHx8ICcwMDAnO1xuXHRcdFx0dGhpcy5zZXNzaW9uVXBkYXRlTG9nLnB1c2gobGFuZ3VhZ2UpO1xuXHRcdFx0aWYgKHJlc3BvbnNlLl9fdmVyc2lvbiAhPT0gbm93VmVyc2lvbiB8fCAhKGxhbmd1YWdlIGluIHRoaXMuaTE4bkRhdGEpKSB7XG5cdFx0XHRcdC8vIExhbmd1YWdlIGdldCB1cGRhdGVkXG5cdFx0XHRcdGNvbnNvbGUuaW5mbyhgVXBkYXRlICR7bGFuZ3VhZ2V9IHN1cHBvcnQgdG8gdmVyc2lvbiAke3Jlc3BvbnNlLl9fdmVyc2lvbn1gKTtcblx0XHRcdFx0dGhpcy5pMThuRGF0YVtsYW5ndWFnZV0gPSByZXNwb25zZTtcblx0XHRcdFx0Ly8gVXBkYXRlIGxvY2FsU3RvcmFnZSBjYWNoZVxuXHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnV2lraXBsdXNfaTE4bkNhY2hlJywgSlNPTi5zdHJpbmdpZnkodGhpcy5pMThuRGF0YSkpO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0Ly8gVW5zdXBwb3J0ZWQgbGFuZ3VhZ2Vcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEkxOG4oKTtcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuaW1wb3J0IGkxOG4gZnJvbSAnLi9pMThuJztcblxuY2xhc3MgV2lraXBsdXNFcnJvciBleHRlbmRzIEVycm9yIHtcblx0Y29uc3RydWN0b3IobWVzc2FnZSwgY29kZSkge1xuXHRcdHN1cGVyKG1lc3NhZ2UpO1xuXHRcdHRoaXMuY29kZSA9IGNvZGU7XG5cdH1cbn1cblxuY29uc3QgTG9nID0ge1xuXHRkZWJ1ZyhtZXNzYWdlID0gJycpIHtcblx0XHRjb25zb2xlLmRlYnVnKGBbV2lraXBsdXMtREVCVUddICR7bWVzc2FnZX1gKTtcblx0fSxcblx0aW5mbyhtZXNzYWdlID0gJycpIHtcblx0XHRjb25zb2xlLmluZm8oYFtXaWtpcGx1cy1JTkZPXSAke21lc3NhZ2V9YCk7XG5cdH0sXG5cdGVycm9yKGVycm9yQ29kZSwgcGF5bG9hZHMgPSBbXSkge1xuXHRcdGxldCB0ZW1wbGF0ZSA9IGkxOG4udHJhbnNsYXRlKGVycm9yQ29kZSk7XG5cdFx0aWYgKHBheWxvYWRzLmxlbmd0aCA+IDApIHtcblx0XHRcdC8vIEZpbGxcblx0XHRcdGZvciAoY29uc3QgW2ksIHZdIG9mIHBheWxvYWRzLmVudHJpZXMoKSkge1xuXHRcdFx0XHR0ZW1wbGF0ZSA9IHRlbXBsYXRlLnJlcGxhY2UobmV3IFJlZ0V4cChgXFxcXCR7aSArIDF9YCwgJ2lnJyksIHYpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjb25zb2xlLmVycm9yKGBbV2lraXBsdXMtRVJST1JdICR7dGVtcGxhdGV9YCk7XG5cdFx0dGhyb3cgbmV3IFdpa2lwbHVzRXJyb3IoYCR7dGVtcGxhdGV9YCwgZXJyb3JDb2RlKTtcblx0fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZztcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuaW1wb3J0IHJlcXVlc3RzIGZyb20gJy4uL3V0aWxzL3JlcXVlc3RzJztcbmltcG9ydCBMb2cgZnJvbSAnLi4vdXRpbHMvbG9nJztcbmltcG9ydCBpMThuIGZyb20gJy4uL3V0aWxzL2kxOG4nO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuLi91dGlscy9jb25zdGFudHMnO1xuXG5jbGFzcyBXaWtpIHtcblx0cGFnZUluZm9DYWNoZSA9IHt9O1xuXHQvKipcblx0ICog6I635b6XIEVkaXQgVG9rZW5cblx0ICogR2V0IEVkaXQgVG9rZW5cblx0ICpcblx0ICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn1cblx0ICovXG5cdGFzeW5jIGdldEVkaXRUb2tlbigpIHtcblx0XHQvLyDlsJ3or5Xku44gQVBJIOiOt+W+lyBFZGl0VG9rZW5cblx0XHQvLyBUcnkgdG8gZ2V0IEVkaXRUb2tlbiBmcm9tIEFQSVxuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdHMuZ2V0KHtcblx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdG1ldGE6ICd0b2tlbnMnLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0fSk7XG5cdFx0aWYgKFxuXHRcdFx0cmVzcG9uc2UucXVlcnkgJiZcblx0XHRcdHJlc3BvbnNlLnF1ZXJ5LnRva2VucyAmJlxuXHRcdFx0cmVzcG9uc2UucXVlcnkudG9rZW5zLmNzcmZ0b2tlbiAmJlxuXHRcdFx0cmVzcG9uc2UucXVlcnkudG9rZW5zLmNzcmZ0b2tlbiAhPT0gJytcXFxcJ1xuXHRcdCkge1xuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLnF1ZXJ5LnRva2Vucy5jc3JmdG9rZW47XG5cdFx0fVxuXHRcdHJldHVybiBMb2cuZXJyb3IoJ2ZhaWxfdG9fZ2V0X2VkaXR0b2tlbicpO1xuXHR9XG5cdC8qKlxuXHQgKiDojrflvpfpobXpnaLkuIrkuIDniYjmnKzml7bpl7TmiLNcblx0ICogR2V0IHRoZSB0aW1lc3RhbXAgb2YgdGhlIGxhc3QgcmV2aXNpb24gb2YgcGFnZSBzcGVjaWZpZWQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7cGFyYW1zLnN0cmluZ30gdGl0bGUg6aG16Z2i5ZCNIC8gUGFnZW5hbWVcblx0ICogQHBhcmFtIHtwYXJhbXMucmV2aXNpb25JZH0gcmV2aXNpb25JZCDkv67orqLniYjmnKzlj7cgLyBSZXZpc2lvbiBJRFxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fVxuXHQgKi9cblx0YXN5bmMgZ2V0UGFnZUluZm8oe3RpdGxlLCByZXZpc2lvbklkfSkge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0cHJvcDogJ3JldmlzaW9uc3xpbmZvJyxcblx0XHRcdFx0cnZwcm9wOiAndGltZXN0YW1wfGlkcycsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0fTtcblx0XHRcdGlmIChyZXZpc2lvbklkKSB7XG5cdFx0XHRcdHBhcmFtcy5yZXZpZHMgPSByZXZpc2lvbklkO1xuXHRcdFx0fSBlbHNlIGlmICh0aXRsZSkge1xuXHRcdFx0XHRpZiAodGhpcy5wYWdlSW5mb0NhY2hlW3RpdGxlXSkge1xuXHRcdFx0XHRcdC8vIEhpdCBjYWNoZVxuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHR0aW1lc3RhbXA6IHRoaXMucGFnZUluZm9DYWNoZVt0aXRsZV0udGltZXN0YW1wLFxuXHRcdFx0XHRcdFx0cmV2aXNpb25JZDogdGhpcy5wYWdlSW5mb0NhY2hlW3RpdGxlXS5yZXZpZCxcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHBhcmFtcy50aXRsZXMgPSB0aXRsZTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdHMuZ2V0KHBhcmFtcyk7XG5cdFx0XHRpZiAocmVzcG9uc2UucXVlcnkgJiYgcmVzcG9uc2UucXVlcnkucGFnZXMpIHtcblx0XHRcdFx0aWYgKE9iamVjdC5rZXlzKHJlc3BvbnNlLnF1ZXJ5LnBhZ2VzKVswXSA9PT0gJy0xJykge1xuXHRcdFx0XHRcdC8vIOS4jeWtmOWcqOi/meS4gOmhtemdolxuXHRcdFx0XHRcdC8vIFBhZ2Ugbm90IGZvdW5kLlxuXHRcdFx0XHRcdHJldHVybiB7fTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBwYWdlSW5mbyA9IHJlc3BvbnNlLnF1ZXJ5LnBhZ2VzW09iamVjdC5rZXlzKHJlc3BvbnNlLnF1ZXJ5LnBhZ2VzKVswXV0ucmV2aXNpb25zWzBdO1xuXHRcdFx0XHRpZiAodGl0bGUpIHtcblx0XHRcdFx0XHR0aGlzLnBhZ2VJbmZvQ2FjaGVbdGl0bGVdID0gcGFnZUluZm87XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR0aW1lc3RhbXA6IHBhZ2VJbmZvLnRpbWVzdGFtcCxcblx0XHRcdFx0XHRyZXZpc2lvbklkOiBwYWdlSW5mby5yZXZpZCxcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdExvZy5lcnJvcignZmFpbF90b19nZXRfZWRpdHRva2VuJyk7XG5cdFx0fVxuXHR9XG5cdC8qKlxuXHQgKiDojrflvpfpobXpnaLnmoQgV2lraXRleHRcblx0ICogR2V0IHdpa2l0ZXh0IG9mIHRoZSBwYWdlLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGl0bGUgdGl0bGVcblx0ICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLnJldmlzaW9uSWQg54mI5pys5Y+3XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcuc2VjdGlvbiDmrrXokL3lj7dcblx0ICogQHJldHVybiB7UHJvbWlzZTxzdHJpbmc+fSB3aWtpdGV4dOWGheWuuVxuXHQgKi9cblx0YXN5bmMgZ2V0V2lraVRleHQoe3NlY3Rpb24sIHJldmlzaW9uSWR9KSB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgKFxuXHRcdFx0XHRhd2FpdCBmZXRjaChcblx0XHRcdFx0XHRgJHtsb2NhdGlvbi5wcm90b2NvbH0vLyR7bG9jYXRpb24uaG9zdH0ke0NvbnN0YW50cy5zY3JpcHRQYXRofS9pbmRleC5waHA/b2xkaWQ9JHtyZXZpc2lvbklkfSZzZWN0aW9uPSR7c2VjdGlvbn0mYWN0aW9uPXJhd2Bcblx0XHRcdFx0KVxuXHRcdFx0KS50ZXh0KCk7XG5cdFx0XHRyZXR1cm4gcmVzcG9uc2U7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRMb2cuZXJyb3IoJ2ZhaWxfdG9fZ2V0X3dpa2l0ZXh0Jyk7XG5cdFx0fVxuXHR9XG5cdC8qKlxuXHQgKiDop6PmnpAgV2lraXRleHRcblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHdpa2l0ZXh0IHdpa2l0ZXh0XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZSDpobXpnaLmoIfpophcblx0ICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyDorr7nva5cblx0ICogQHJldHVybiB7UHJvbWlzZTxzdHJpbmc+fSDop6PmnpDnu5PmnpwgSFRNTFxuXHQgKi9cblx0YXN5bmMgcGFyc2VXaWtpVGV4dCh3aWtpdGV4dCwgdGl0bGUgPSAnJywgY29uZmlnID0ge30pIHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0cy5wb3N0KHtcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRcdFx0dGV4dDogd2lraXRleHQsXG5cdFx0XHRcdHRpdGxlLFxuXHRcdFx0XHRwc3Q6ICd0cnVlJyxcblx0XHRcdH0pO1xuXHRcdFx0aWYgKHJlc3BvbnNlLnBhcnNlICYmIHJlc3BvbnNlLnBhcnNlLnRleHQpIHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLnBhcnNlLnRleHRbJyonXTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdExvZy5lcnJvcignY2FudF9wYXJzZV93aWtpdGV4dCcpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiDnvJbovpHpobXpnaJcblx0ICpcblx0ICogQHBhcmFtIHJvb3QwXG5cdCAqIEBwYXJhbSByb290MC50aXRsZVxuXHQgKiBAcGFyYW0gcm9vdDAuY29udGVudFxuXHQgKiBAcGFyYW0gcm9vdDAuZWRpdFRva2VuXG5cdCAqIEBwYXJhbSByb290MC50aW1lc3RhbXBcblx0ICogQHBhcmFtIHJvb3QwLmNvbmZpZ1xuXHQgKiBAcGFyYW0gcm9vdDAuYWRkaXRpb25hbENvbmZpZ1xuXHQgKi9cblx0YXN5bmMgZWRpdCh7dGl0bGUsIGNvbnRlbnQsIGVkaXRUb2tlbiwgdGltZXN0YW1wLCBjb25maWcgPSB7fSwgYWRkaXRpb25hbENvbmZpZyA9IHt9fSA9IHt9KSB7XG5cdFx0bGV0IHJlc3BvbnNlO1xuXHRcdHRyeSB7XG5cdFx0XHRyZXNwb25zZSA9IGF3YWl0IHJlcXVlc3RzLnBvc3Qoe1xuXHRcdFx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdHRleHQ6IGNvbnRlbnQsXG5cdFx0XHRcdHRpdGxlLFxuXHRcdFx0XHR0b2tlbjogZWRpdFRva2VuLFxuXHRcdFx0XHQuLi4odGltZXN0YW1wID8ge2Jhc2V0aW1lc3RhbXA6IHRpbWVzdGFtcH0gOiB7fSksXG5cdFx0XHRcdC4uLmNvbmZpZyxcblx0XHRcdFx0Li4uYWRkaXRpb25hbENvbmZpZyxcblx0XHRcdH0pO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0TG9nLmVycm9yKCduZXR3b3JrX2VkaXRfZXJyb3InKTtcblx0XHR9XG5cdFx0aWYgKHJlc3BvbnNlLmVkaXQpIHtcblx0XHRcdGlmIChyZXNwb25zZS5lZGl0LnJlc3VsdCA9PT0gJ1N1Y2Nlc3MnKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHJlc3BvbnNlLmVkaXQuY29kZSkge1xuXHRcdFx0XHQvLyBBYnVzZSBGaWx0ZXJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBcbiAgICAgICAgICAgICAgICAgICAgICAgICR7aTE4bi50cmFuc2xhdGUoJ2hpdF9hYnVzZWZpbHRlcicpfToke3Jlc3BvbnNlLmVkaXQuaW5mby5yZXBsYWNlKCcvSGl0IEFidXNlRmlsdGVyOiAvaWcnLCAnJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwiZm9udC1zaXplOiBzbWFsbGVyO1wiPiR7cmVzcG9uc2UuZWRpdC53YXJuaW5nfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdExvZy5lcnJvcigndW5rbm93bl9lZGl0X2Vycm9yJyk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChyZXNwb25zZS5lcnJvciAmJiByZXNwb25zZS5lcnJvci5jb2RlKSB7XG5cdFx0XHRMb2cuZXJyb3IocmVzcG9uc2UuZXJyb3IuY29kZSk7XG5cdFx0fSBlbHNlIGlmIChyZXNwb25zZS5jb2RlKSB7XG5cdFx0XHRMb2cuZXJyb3IocmVzcG9uc2UuY29kZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdExvZy5lcnJvcigndW5rbm93bl9lZGl0X2Vycm9yJyk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIOiOt+W+l+aMh+WumumhtemdouacgOaWsOS/ruiuoue8luWPt1xuXHQgKiBHZXQgbGF0ZXN0IHJldmlzaW9uSWQgb2YgYSBwYWdlLlxuXHQgKlxuXHQgKiBAcGFyYW0geyp9IHRpdGxlXG5cdCAqL1xuXHRhc3luYyBnZXRMYXRlc3RSZXZpc2lvbklkRm9yUGFnZSh0aXRsZSkge1xuXHRcdGNvbnN0IHtyZXZpc2lvbklkfSA9IGF3YWl0IHRoaXMuZ2V0UGFnZUluZm8oe3RpdGxlfSk7XG5cdFx0cmV0dXJuIHJldmlzaW9uSWQ7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFdpa2koKTtcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuaW1wb3J0IFdpa2kgZnJvbSAnLi4vc2VydmljZXMvd2lraSc7XG5pbXBvcnQgTG9nIGZyb20gJy4uL3V0aWxzL2xvZyc7XG5cbmNsYXNzIFBhZ2Uge1xuXHR0aW1lc3RhbXA7XG5cdGVkaXRUb2tlbjtcblx0dGl0bGU7XG5cdHJldmlzaW9uSWQ7XG5cblx0aW5pdGVkID0gZmFsc2U7XG5cdGlzTmV3UGFnZSA9IGZhbHNlO1xuXG5cdHNlY3Rpb25DYWNoZSA9IHt9O1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3BhcmFtcy50aXRsZX0g6aG16Z2i5qCH6aKYIFBhZ2UgTmFtZSAob3B0aW9uYWwpXG5cdCAqIEBwYXJhbSB7cGFyYW1zLnJldmlzaW9uSWR9IOmhtemdouS/ruiuoue8luWPtyBSZXZpc2lvbiBJZFxuXHQgKi9cblx0Y29uc3RydWN0b3Ioe3RpdGxlLCByZXZpc2lvbklkfSkge1xuXHRcdHRoaXMudGl0bGUgPSB0aXRsZTtcblx0XHR0aGlzLnJldmlzaW9uSWQgPSByZXZpc2lvbklkO1xuXHRcdHRoaXMuaXNOZXdQYWdlID0gIXJldmlzaW9uSWQ7XG5cdH1cblxuXHQvKipcblx0ICog5Yid5aeL5YyWIOiOt+W+l+mhtemdokVkaXRUb2tlbuWSjOWIneWni1RpbWVTdGFtcFxuXHQgKiBJbml0aWFsaXphdGlvbi5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IGVkaXRUb2tlbiAob3B0aW9uYWwpIOWmguaenOaPkOS+m+S6hmVkaXRUb2tlbu+8jOWwhuS4jeS8muWGjeiOt+WPllxuXHQgKi9cblx0YXN5bmMgaW5pdCh7ZWRpdFRva2VuID0gJyd9ID0ge30pIHtcblx0XHRjb25zdCBwcm9taXNlQXJyID0gW3RoaXMuZ2V0VGltZXN0YW1wKCldO1xuXHRcdGlmICghZWRpdFRva2VuKSB7XG5cdFx0XHRwcm9taXNlQXJyLnB1c2godGhpcy5nZXRFZGl0VG9rZW4oKSk7XG5cdFx0fVxuXHRcdGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VBcnIpO1xuXHRcdHRoaXMuaW5pdGVkID0gdHJ1ZTtcblx0XHRMb2cuaW5mbyhgUGFnZSBpbml0aWFsaXphdGlvbiBmb3IgJHt0aGlzLnRpdGxlfSMke3RoaXMucmV2aXNpb25JZH0gZmluaXNoZWQuYCk7XG5cdH1cblxuXHQvKipcblx0ICog6I635b6XIEVkaXRUb2tlblxuXHQgKiBHZXQgRWRpdFRva2VuXG5cdCAqL1xuXHRhc3luYyBnZXRFZGl0VG9rZW4oKSB7XG5cdFx0YXdhaXQgbXcubG9hZGVyLnVzaW5nKCdtZWRpYXdpa2kudXNlcicpO1xuXHRcdGlmIChtdy51c2VyLnRva2Vucy5nZXQoJ2NzcmZUb2tlbicpICYmIG13LnVzZXIudG9rZW5zLmdldCgnY3NyZlRva2VuJykgIT09ICcrXFxcXCcpIHtcblx0XHRcdC8vIOWmguaenCBNZWRpYVdpa2kgSmF2YVNjcmlwdCBBUEkg5Y+v5Lul55u05o6l6I635b6XIEVkaXRUb2tlbiDliJnnm7TmjqXov5Tlm55cblx0XHRcdC8vIFJldHVybiBFZGl0VG9rZW4gcmV0cmlldmVkIGZyb20gTWVkaWFXaWtpIEphdmFTY3JpcHQgQVBJIGlmIGFjY2Vzc2libGVcblx0XHRcdHRoaXMuZWRpdFRva2VuID0gbXcudXNlci50b2tlbnMuZ2V0KCdjc3JmVG9rZW4nKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Ly8g5LuOQVBJ6I635b6XRWRpdFRva2VuXG5cdFx0Ly8gR2V0IEVkaXRUb2tlbiBmcm9tIE1lZGlhV2lraSBBUElcblx0XHR0aGlzLmVkaXRUb2tlbiA9IGF3YWl0IFdpa2kuZ2V0RWRpdFRva2VuKCk7XG5cdH1cblxuXHQvKipcblx0ICog6I635b6X57yW6L6R5Z+65YeG5pe26Ze05oizXG5cdCAqIEdldCBCYXNlIFRpbWVzdGFtcFxuXHQgKi9cblx0YXN5bmMgZ2V0VGltZXN0YW1wKCkge1xuXHRcdGNvbnN0IHt0aW1lc3RhbXAsIHJldmlzaW9uSWR9ID0gYXdhaXQgV2lraS5nZXRQYWdlSW5mbyh7XG5cdFx0XHRyZXZpc2lvbklkOiB0aGlzLnJldmlzaW9uSWQsXG5cdFx0XHR0aXRsZTogdGhpcy50aXRsZSxcblx0XHR9KTtcblx0XHR0aGlzLnRpbWVzdGFtcCA9IHRpbWVzdGFtcDtcblx0XHRpZiAocmV2aXNpb25JZCkge1xuXHRcdFx0dGhpcy5yZXZpc2lvbklkID0gcmV2aXNpb25JZDtcblx0XHRcdHRoaXMuaXNOZXdQYWdlID0gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIOiOt+W+lyBXaWtpVGV4dFxuXHQgKlxuXHQgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcuc2VjdGlvblxuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLnJldmlzaW9uSWRcblx0ICovXG5cdGFzeW5jIGdldFdpa2lUZXh0KHtzZWN0aW9uID0gJyd9ID0ge30pIHtcblx0XHRjb25zdCBzZWMgPSBzZWN0aW9uID09PSAtMSA/ICcnIDogc2VjdGlvbjtcblx0XHRpZiAodGhpcy5zZWN0aW9uQ2FjaGVbc2VjXSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuc2VjdGlvbkNhY2hlW3NlY107XG5cdFx0fVxuXHRcdGNvbnN0IHdpa2lUZXh0ID0gYXdhaXQgV2lraS5nZXRXaWtpVGV4dCh7XG5cdFx0XHRzZWN0aW9uOiBzZWMsXG5cdFx0XHRyZXZpc2lvbklkOiB0aGlzLnJldmlzaW9uSWQsXG5cdFx0fSk7XG5cdFx0TG9nLmluZm8oYFdpa2l0ZXh0IG9mICR7dGhpcy50aXRsZX0jJHtzZWN0aW9ufSBmZXRjaGVkLmApO1xuXHRcdHRoaXMuc2VjdGlvbkNhY2hlW3NlY10gPSB3aWtpVGV4dDtcblx0XHRyZXR1cm4gd2lraVRleHQ7XG5cdH1cblxuXHQvKipcblx0ICog6Kej5p6QIFdpa2lUZXh0XG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB3aWtpdGV4dFxuXHQgKi9cblx0YXN5bmMgcGFyc2VXaWtpVGV4dCh3aWtpdGV4dCkge1xuXHRcdHJldHVybiBXaWtpLnBhcnNlV2lraVRleHQod2lraXRleHQsIHRoaXMudGl0bGUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIOe8lui+kemhtemdolxuXHQgKlxuXHQgKiBAcGFyYW0geyp9IGNvbmZpZ1xuXHQgKiBAcGFyYW0gcGF5bG9hZFxuXHQgKi9cblx0YXN5bmMgZWRpdChwYXlsb2FkKSB7XG5cdFx0aWYgKCF0aGlzLmVkaXRUb2tlbikge1xuXHRcdFx0TG9nLmVycm9yKCdmYWlsX3RvX2dldF9lZGl0dG9rZW4nKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKCF0aGlzLnRpbWVzdGFtcCAmJiAhdGhpcy5pc05ld1BhZ2UpIHtcblx0XHRcdC8vIOWmguaenOS4jeaYr+WIm+W7uuaWsOmhtemdoiDlj4jmsqHmnInln7rlh4bml7bpl7TmiLMg5YiZ5pyJ5Y+v6IO96YCg5oiQ57yW6L6R6KaG55uWIOS/nemZqei1t+ingeebtOaOpeaLkue7nVxuXHRcdFx0TG9nLmVycm9yKCdmYWlsX3RvX2dldF90aW1lc3RhbXAnKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0cmV0dXJuIFdpa2kuZWRpdCh7XG5cdFx0XHR0aXRsZTogdGhpcy50aXRsZSxcblx0XHRcdGVkaXRUb2tlbjogdGhpcy5lZGl0VG9rZW4sXG5cdFx0XHQuLi4odGhpcy50aW1lc3RhbXAgPyB7dGltZXN0YW1wOiB0aGlzLnRpbWVzdGFtcH0gOiB7fSksXG5cdFx0XHQuLi5wYXlsb2FkLFxuXHRcdFx0YWRkaXRpb25hbENvbmZpZzoge1xuXHRcdFx0XHQuLi4odGhpcy5pc05ld1BhZ2UgPyB7Y3JlYXRlb25seTogdGhpcy5pc05ld1BhZ2V9IDoge30pLFxuXHRcdFx0fSxcblx0XHR9KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xuIiwgIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG5jbGFzcyBOb3RpZmljYXRpb24ge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmluaXQoKTtcblx0fVxuXHRpbml0KCkge1xuXHRcdCQoJ2JvZHknKS5hcHBlbmQoJzxkaXYgaWQ9XCJNb2VOb3RpZmljYXRpb25cIj48L2Rpdj4nKTtcblx0fVxuXHRkaXNwbGF5KHRleHQgPSAn5Za1ficsIHR5cGUgPSAnc3VjY2VzcycsIGNhbGxiYWNrID0gKCkgPT4ge30pIHtcblx0XHQkKCcjTW9lTm90aWZpY2F0aW9uJykuYXBwZW5kKFxuXHRcdFx0JCgnPGRpdj4nKVxuXHRcdFx0XHQuYWRkQ2xhc3MoJ01vZU5vdGlmaWNhdGlvbi1ub3RpY2UnKVxuXHRcdFx0XHQuYWRkQ2xhc3MoYE1vZU5vdGlmaWNhdGlvbi1ub3RpY2UtJHt0eXBlfWApXG5cdFx0XHRcdC5hcHBlbmQoYDxzcGFuPiR7dGV4dH08L3NwYW4+YClcblx0XHQpO1xuXHRcdCQoJyNNb2VOb3RpZmljYXRpb24nKS5maW5kKCcuTW9lTm90aWZpY2F0aW9uLW5vdGljZScpLmxhc3QoKS5mYWRlSW4oMzAwKTtcblx0XHR0aGlzLmJpbmQoKTtcblx0XHR0aGlzLmNsZWFyKCk7XG5cdFx0Y2FsbGJhY2soJCgnI01vZU5vdGlmaWNhdGlvbicpLmZpbmQoJy5Nb2VOb3RpZmljYXRpb24tbm90aWNlJykubGFzdCgpKTtcblx0fVxuXHRiaW5kKCkge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdCQoJy5Nb2VOb3RpZmljYXRpb24tbm90aWNlJykub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uICgpIHtcblx0XHRcdHNlbGYuc2xpZGVMZWZ0KCQodGhpcykpO1xuXHRcdH0pO1xuXHR9XG5cdHN1Y2Nlc3ModGV4dCwgY2FsbGJhY2spIHtcblx0XHR0aGlzLmRpc3BsYXkodGV4dCwgJ3N1Y2Nlc3MnLCBjYWxsYmFjayk7XG5cdH1cblx0d2FybmluZyh0ZXh0LCBjYWxsYmFjaykge1xuXHRcdHRoaXMuZGlzcGxheSh0ZXh0LCAnd2FybmluZycsIGNhbGxiYWNrKTtcblx0fVxuXHRlcnJvcih0ZXh0LCBjYWxsYmFjaykge1xuXHRcdHRoaXMuZGlzcGxheSh0ZXh0LCAnZXJyb3InLCBjYWxsYmFjayk7XG5cdH1cblx0Y2xlYXIoKSB7XG5cdFx0aWYgKCQoJy5Nb2VOb3RpZmljYXRpb24tbm90aWNlJykubGVuZ3RoID49IDEwKSB7XG5cdFx0XHQkKCcjTW9lTm90aWZpY2F0aW9uJylcblx0XHRcdFx0LmNoaWxkcmVuKClcblx0XHRcdFx0LmZpcnN0KClcblx0XHRcdFx0LmZhZGVPdXQoMTUwLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0JCh0aGlzKS5yZW1vdmUoKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRzZXRUaW1lb3V0KHRoaXMuY2xlYXIsIDMwMCk7XG5cdFx0fVxuXHR9XG5cdGVtcHR5KGYpIHtcblx0XHQkKCcuTW9lTm90aWZpY2F0aW9uLW5vdGljZScpLmVhY2goZnVuY3Rpb24gKGkpIHtcblx0XHRcdGlmICh0eXBlb2YgZiA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRjb25zdCBlbGUgPSAkKHRoaXMpO1xuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRmKGVsZSk7XG5cdFx0XHRcdH0sIDIwMCAqIGkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JCh0aGlzKVxuXHRcdFx0XHRcdC5kZWxheShpICogMjAwKVxuXHRcdFx0XHRcdC5mYWRlT3V0KCdmYXN0JywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0JCh0aGlzKS5yZW1vdmUoKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXHRzbGlkZUxlZnQoZWxlLCBzcGVlZCkge1xuXHRcdGVsZS5jc3MoJ3Bvc2l0aW9uJywgJ3JlbGF0aXZlJyk7XG5cdFx0ZWxlLmFuaW1hdGUoXG5cdFx0XHR7XG5cdFx0XHRcdGxlZnQ6ICctMjAwJScsXG5cdFx0XHR9LFxuXHRcdFx0c3BlZWQgfHwgMTUwLFxuXHRcdFx0ZnVuY3Rpb24gKCkge1xuXHRcdFx0XHQkKHRoaXMpLmZhZGVPdXQoJ2Zhc3QnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0JCh0aGlzKS5yZW1vdmUoKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgTm90aWZpY2F0aW9uKCk7XG4iLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmNvbnN0IHNsZWVwID0gKHRpbWUpID0+IHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cdFx0cmV0dXJuIHNldFRpbWVvdXQocmVzb2x2ZSwgdGltZSk7XG5cdH0pO1xufTtcbmV4cG9ydCBkZWZhdWx0IHNsZWVwO1xuIiwgIi8qKlxuICog6Kej5p6QVVJM5Y+C5pWw5YiX6KGoXG4gKiBQYXJzZSBVUkwgcXVlcnkuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9fSB1cmxcbiAqIEBwYXJhbSB1cmxcbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVF1ZXJ5KHVybCkge1xuXHRjb25zdCByZWcgPSAvKChbXj8mPV0rKSg/Oj0oW14/Jj1dKikpKikvZztcblx0Y29uc3QgcGFyYW1zID0ge307XG5cdGxldCBtYXRjaDtcblx0d2hpbGUgKChtYXRjaCA9IHJlZy5leGVjKHVybCkpKSB7XG5cdFx0dHJ5IHtcblx0XHRcdHBhcmFtc1ttYXRjaFsyXV0gPSBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbM10pO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0cGFyYW1zW21hdGNoWzJdXSA9IG1hdGNoWzNdO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcGFyYW1zO1xufVxuIiwgIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cyc7XG5pbXBvcnQgTm90aWZpY2F0aW9uIGZyb20gJy4vbm90aWZpY2F0aW9uJztcbmltcG9ydCBpMThuIGZyb20gJy4uL3V0aWxzL2kxOG4nO1xuaW1wb3J0IExvZyBmcm9tICcuLi91dGlscy9sb2cnO1xuaW1wb3J0IHNsZWVwIGZyb20gJy4uL3V0aWxzL3NsZWVwJztcbmltcG9ydCB7cGFyc2VRdWVyeX0gZnJvbSAnLi4vdXRpbHMvaGVscGVycyc7XG5cbmNsYXNzIFVJIHtcblx0cXVpY2tFZGl0UGFuZWxWaXNpYmxlID0gZmFsc2U7XG5cdHNjcm9sbFRvcCA9IDA7XG5cblx0LyoqXG5cdCAqIOWIm+W7uuWxheS4reWvueivneahhlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGl0bGUg56qX5Y+j5qCH6aKYXG5cdCAqIEBwYXJhbSB7c3RyaW5nIHwgSlF1ZXJ5PEhUTUxFbGVtZW50Pn0gY29udGVudCDlhoXlrrlcblx0ICogQHBhcmFtIHsqfSB3aWR0aCDlrr3luqZcblx0ICogQHBhcmFtIHsqfSBjYWxsYmFjayDlm57osIPlh73mlbBcblx0ICovXG5cdGNyZWF0ZURpYWxvZ0JveCh0aXRsZSA9ICdXaWtpcGx1cycsIGNvbnRlbnQgPSAnJywgd2lkdGggPSA2MDAsIGNhbGxiYWNrID0gKCkgPT4ge30pIHtcblx0XHRpZiAoJCgnLldpa2lwbHVzLUludGVyQm94JykubGVuZ3RoID4gMCkge1xuXHRcdFx0JCgnLldpa2lwbHVzLUludGVyQm94JykuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdCQodGhpcykucmVtb3ZlKCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0Y29uc3QgY2xpZW50V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblx0XHRjb25zdCBjbGllbnRIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cdFx0Y29uc3QgZGlhbG9nV2lkdGggPSBNYXRoLm1pbihjbGllbnRXaWR0aCwgd2lkdGgpO1xuXHRcdGNvbnN0IGRpYWxvZ0JveCA9ICQoJzxkaXY+Jylcblx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gnKVxuXHRcdFx0LmNzcyh7XG5cdFx0XHRcdCdtYXJnaW4tbGVmdCc6IGNsaWVudFdpZHRoIC8gMiAtIGRpYWxvZ1dpZHRoIC8gMixcblx0XHRcdFx0dG9wOiAkKGRvY3VtZW50KS5zY3JvbGxUb3AoKSArIGNsaWVudEhlaWdodCAqIDAuMixcblx0XHRcdFx0ZGlzcGxheTogJ25vbmUnLFxuXHRcdFx0fSlcblx0XHRcdC5hcHBlbmQoJCgnPGRpdj4nKS5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gtSGVhZGVyJykuaHRtbCh0aXRsZSkpXG5cdFx0XHQuYXBwZW5kKCQoJzxkaXY+JykuYWRkQ2xhc3MoJ1dpa2lwbHVzLUludGVyQm94LUNvbnRlbnQnKS5hcHBlbmQoY29udGVudCkpXG5cdFx0XHQuYXBwZW5kKCQoJzxzcGFuPicpLnRleHQoJ8OXJykuYWRkQ2xhc3MoJ1dpa2lwbHVzLUludGVyQm94LUNsb3NlJykpO1xuXHRcdCQoJ2JvZHknKS5hcHBlbmQoZGlhbG9nQm94KTtcblx0XHQkKCcuV2lraXBsdXMtSW50ZXJCb3gnKS53aWR0aChkaWFsb2dXaWR0aCk7XG5cdFx0JCgnLldpa2lwbHVzLUludGVyQm94LUNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0JCh0aGlzKVxuXHRcdFx0XHQucGFyZW50KClcblx0XHRcdFx0LmZhZGVPdXQoJ2Zhc3QnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgKHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IHVuZGVmaW5lZCkpOyAvLyDlj5bmtojpobXpnaLlhbPpl63noa7orqRcblx0XHRcdFx0XHQkKHRoaXMpLnJlbW92ZSgpO1xuXHRcdFx0XHR9KTtcblx0XHR9KTtcblx0XHQvL+aLluabs1xuXHRcdGNvbnN0IGJpbmREcmFnZ2luZyA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG5cdFx0XHRlbGVtZW50Lm1vdXNlZG93bigoZSkgPT4ge1xuXHRcdFx0XHRjb25zdCBiYXNlWCA9IGUuY2xpZW50WDtcblx0XHRcdFx0Y29uc3QgYmFzZVkgPSBlLmNsaWVudFk7XG5cdFx0XHRcdGNvbnN0IGJhc2VPZmZzZXRYID0gZWxlbWVudC5wYXJlbnQoKS5vZmZzZXQoKS5sZWZ0O1xuXHRcdFx0XHRjb25zdCBiYXNlT2Zmc2V0WSA9IGVsZW1lbnQucGFyZW50KCkub2Zmc2V0KCkudG9wO1xuXHRcdFx0XHQkKGRvY3VtZW50KS5vbignbW91c2Vtb3ZlJywgKGUpID0+IHtcblx0XHRcdFx0XHRlbGVtZW50LnBhcmVudCgpLmNzcyh7XG5cdFx0XHRcdFx0XHQnbWFyZ2luLWxlZnQnOiBiYXNlT2Zmc2V0WCArIGUuY2xpZW50WCAtIGJhc2VYLFxuXHRcdFx0XHRcdFx0dG9wOiBiYXNlT2Zmc2V0WSArIGUuY2xpZW50WSAtIGJhc2VZLFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0JChkb2N1bWVudCkub24oJ21vdXNldXAnLCAoKSA9PiB7XG5cdFx0XHRcdFx0ZWxlbWVudC51bmJpbmQoJ21vdXNlZG93bicpO1xuXHRcdFx0XHRcdCQoZG9jdW1lbnQpLm9mZignbW91c2Vtb3ZlJyk7XG5cdFx0XHRcdFx0JChkb2N1bWVudCkub2ZmKCdtb3VzZXVwJyk7XG5cdFx0XHRcdFx0YmluZERyYWdnaW5nKGVsZW1lbnQpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH07XG5cdFx0YmluZERyYWdnaW5nKCQoJy5XaWtpcGx1cy1JbnRlckJveC1IZWFkZXInKSk7XG5cdFx0JCgnLldpa2lwbHVzLUludGVyQm94JykuZmFkZUluKDUwMCk7XG5cdFx0Y2FsbGJhY2soKTtcblx0XHRyZXR1cm4gZGlhbG9nQm94O1xuXHR9XG5cblx0LyoqXG5cdCAqIOWcqOaQnOe0ouahhuW3puS+p+OAjOabtOWkmuOAjeiPnOWNleWGhea3u+WKoOaMiemSrlxuXHQgKiBBZGQgYSBidXR0b24gaW4gXCJNb3JlXCIgbWVudSAobGVmdCBvZiB0aGUgc2VhcmNoIGJhcilcblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHQg5oyJ6ZKu5ZCNIEJ1dHRvbiB0ZXh0XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBpZCDmjInpkq5pZCBCdXR0b24gaWRcblx0ICogQHJldHVybiB7SlF1ZXJ5PEhUTUxFbGVtZW50Pn0gYnV0dG9uXG5cdCAqL1xuXHRhZGRGdW5jdGlvbkJ1dHRvbih0ZXh0LCBpZCkge1xuXHRcdGxldCBidXR0b247XG5cdFx0c3dpdGNoIChDb25zdGFudHMuc2tpbikge1xuXHRcdFx0Y2FzZSAnbWluZXJ2YSc6XG5cdFx0XHRcdGJ1dHRvbiA9ICQoJzxsaT4nKVxuXHRcdFx0XHRcdC5hdHRyKCdpZCcsIGlkKVxuXHRcdFx0XHRcdC5hZGRDbGFzcygndG9nZ2xlLWxpc3QtaXRlbScpXG5cdFx0XHRcdFx0LmFwcGVuZChcblx0XHRcdFx0XHRcdCQoJzxhPicpXG5cdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygnbXctdWktaWNvbiBtdy11aS1pY29uLWJlZm9yZSB0b2dnbGUtbGlzdC1pdGVtX19hbmNob3InKVxuXHRcdFx0XHRcdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHRcdFx0XHRcdCQoJzxzcGFuPicpXG5cdFx0XHRcdFx0XHRcdFx0XHQuYXR0cignaHJlZicsICdqYXZhc2NyaXB0OnZvaWQoMCk7Jylcblx0XHRcdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygndG9nZ2xlLWxpc3QtaXRlbV9fbGFiZWwnKVxuXHRcdFx0XHRcdFx0XHRcdFx0LnRleHQodGV4dClcblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICdtb2Vza2luJzpcblx0XHRcdFx0YnV0dG9uID0gJCgnPGxpPicpXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdXaWtpcGx1cy1Nb3JlLUZ1bmN0aW9uLUJ1dHRvbicpXG5cdFx0XHRcdFx0LmF0dHIoJ2lkJywgaWQpXG5cdFx0XHRcdFx0LmFwcGVuZCgkKCc8YT4nKS5hdHRyKCdocmVmJywgJ2phdmFzY3JpcHQ6dm9pZCgwKTsnKS50ZXh0KHRleHQpKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGJ1dHRvbiA9ICQoJzxsaT4nKVxuXHRcdFx0XHRcdC5hZGRDbGFzcygnbXctbGlzdC1pdGVtJylcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3ZlY3Rvci10YWItbm9pY29uJylcblx0XHRcdFx0XHQuYXR0cignaWQnLCBpZClcblx0XHRcdFx0XHQuYXBwZW5kKCQoJzxhPicpLmF0dHIoJ2hyZWYnLCAnamF2YXNjcmlwdDp2b2lkKDApOycpLnRleHQodGV4dCkpO1xuXHRcdH1cblx0XHRpZiAoQ29uc3RhbnRzLnNraW4gPT09ICdtaW5lcnZhJyAmJiAkKCcjcC10YicpLmxlbmd0aCA+IDApIHtcblx0XHRcdCQoJyNwLXRiJykuYXBwZW5kKGJ1dHRvbik7XG5cdFx0XHRyZXR1cm4gJChgIyR7aWR9YCk7XG5cdFx0fSBlbHNlIGlmIChDb25zdGFudHMuc2tpbiA9PT0gJ21vZXNraW4nKSB7XG5cdFx0XHQkKCcubW9yZS1hY3Rpb25zLWxpc3QnKS5maXJzdCgpLmFwcGVuZChidXR0b24pO1xuXHRcdFx0cmV0dXJuICQoYCMke2lkfWApO1xuXHRcdH0gZWxzZSBpZiAoJCgnI3AtY2FjdGlvbnMnKS5sZW5ndGggPiAwKSB7XG5cdFx0XHQkKCcjcC1jYWN0aW9ucyB1bCcpLmFwcGVuZChidXR0b24pO1xuXHRcdFx0cmV0dXJuICQoYCMke2lkfWApO1xuXHRcdH1cblx0XHRMb2cuaW5mbyhpMThuLnRyYW5zbGF0ZSgnY2FudF9hZGRfZnVuY2J0bicpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiDmj5LlhaXlv6vpgJ/ph43lrprlkJHmjInpkq5cblx0ICpcblx0ICogQHBhcmFtIHsqfSBvbkNsaWNrXG5cdCAqL1xuXHRpbnNlcnRTaW1wbGVSZWRpcmVjdEJ1dHRvbihvbkNsaWNrID0gKCkgPT4ge30pIHtcblx0XHRjb25zdCBidXR0b24gPSB0aGlzLmFkZEZ1bmN0aW9uQnV0dG9uKGkxOG4udHJhbnNsYXRlKCdyZWRpcmVjdF9mcm9tJyksICdXaWtpcGx1cy1TUi1JbnRybycpO1xuXHRcdGlmIChidXR0b24pIHtcblx0XHRcdGJ1dHRvbi5vbignY2xpY2snLCBvbkNsaWNrKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICog5o+S5YWl6K6+572u6Z2i5p2/5oyJ6ZKuXG5cdCAqXG5cdCAqIEBwYXJhbSB7Kn0gb25DbGlja1xuXHQgKi9cblx0aW5zZXJ0U2V0dGluZ3NQYW5lbEJ1dHRvbihvbkNsaWNrID0gKCkgPT4ge30pIHtcblx0XHRjb25zdCBidXR0b24gPSB0aGlzLmFkZEZ1bmN0aW9uQnV0dG9uKGkxOG4udHJhbnNsYXRlKCd3aWtpcGx1c19zZXR0aW5ncycpLCAnV2lraXBsdXMtU2V0dGluZ3MtSW50cm8nKTtcblx0XHRpZiAoYnV0dG9uKSB7XG5cdFx0XHRidXR0b24ub24oJ2NsaWNrJywgb25DbGljayk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIOaPkuWFpemhtumDqOW/q+mAn+e8lui+keaMiemSrlxuXHQgKiBJbnNlcnQgUXVpY2tFZGl0IGJ1dHRvbiBiZXNpZGVzIHBhZ2UgZWRpdCBidXR0b24uXG5cdCAqXG5cdCAqIEBwYXJhbSBvbkNsaWNrXG5cdCAqL1xuXHRpbnNlcnRUb3BRdWlja0VkaXRFbnRyeShvbkNsaWNrKSB7XG5cdFx0Y29uc3QgdG9wQnRuID0gJCgnPGxpPicpLmF0dHIoJ2lkJywgJ1dpa2lwbHVzLUVkaXQtVG9wQnRuJykuYXR0cignY2xhc3MnLCAnbXctbGlzdC1pdGVtJyk7XG5cdFx0Y29uc3QgdG9wQnRuTGluayA9ICQoJzxhPicpXG5cdFx0XHQuYXR0cignaHJlZicsICdqYXZhc2NyaXB0OnZvaWQoMCknKVxuXHRcdFx0LnRleHQoYCR7aTE4bi50cmFuc2xhdGUoJ3F1aWNrZWRpdF90b3BidG4nKX1gKTtcblx0XHR0b3BCdG4uYXBwZW5kKHRvcEJ0bkxpbmspO1xuXHRcdHN3aXRjaCAoQ29uc3RhbnRzLnNraW4pIHtcblx0XHRcdGNhc2UgJ21pbmVydmEnOlxuXHRcdFx0XHR0b3BCdG4uY3NzKHsnYWxpZ24taXRlbXMnOiAnY2VudGVyJywgZGlzcGxheTogJ2ZsZXgnfSk7XG5cdFx0XHRcdHRvcEJ0bi5maW5kKCdzcGFuJykuYWRkQ2xhc3MoJ3BhZ2UtYWN0aW9ucy1tZW51X19saXN0LWl0ZW0nKTtcblx0XHRcdFx0dG9wQnRuXG5cdFx0XHRcdFx0LmZpbmQoJ2EnKVxuXHRcdFx0XHRcdC5hZGRDbGFzcyhcblx0XHRcdFx0XHRcdCdtdy11aS1pY29uIG13LXVpLWljb24tZWxlbWVudCBtdy11aS1pY29uLXdpa2ltZWRpYS1lZGl0LWJhc2UyMCBtdy11aS1pY29uLXdpdGgtbGFiZWwtZGVza3RvcCdcblx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0LmNzcygndmVydGljYWwtYWxpZ24nLCAnbWlkZGxlJyk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICd2ZWN0b3ItMjAyMic6XG5cdFx0XHRcdHRvcEJ0bi5hZGRDbGFzcygndmVjdG9yLXRhYi1ub2ljb24nKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ3ZlY3Rvcic6XG5cdFx0XHRcdHRvcEJ0bi5hcHBlbmQoJCgnPHNwYW4+JykuYXBwZW5kKHRvcEJ0bkxpbmspKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0fVxuXHRcdCQodG9wQnRuKS5vbignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRvbkNsaWNrKHtcblx0XHRcdFx0c2VjdGlvbk51bWJlcjogLTEsXG5cdFx0XHRcdHRhcmdldFBhZ2VOYW1lOiBDb25zdGFudHMuY3VycmVudFBhZ2VOYW1lLFxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdFx0aWYgKCQoJyNjYS1lZGl0JykubGVuZ3RoID4gMCAmJiAkKCcjV2lraXBsdXMtRWRpdC1Ub3BCdG4nKS5sZW5ndGggPT09IDApIHtcblx0XHRcdENvbnN0YW50cy5za2luID09PSAnbWluZXJ2YScgPyAkKCcjY2EtZWRpdCcpLnBhcmVudCgpLmFmdGVyKHRvcEJ0bikgOiAkKCcjY2EtZWRpdCcpLmFmdGVyKHRvcEJ0bik7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIOaPkuWFpeauteiQveW/q+mAn+e8lui+keaMiemSrlxuXHQgKiBJbnNlcnQgUXVpY2tFZGl0IGJ1dHRvbnMgZm9yIGVhY2ggc2VjdGlvbi5cblx0ICpcblx0ICogQHBhcmFtIG9uQ2xpY2tcblx0ICovXG5cdGluc2VydFNlY3Rpb25RdWlja0VkaXRFbnRyaWVzKG9uQ2xpY2sgPSAoKSA9PiB7fSkge1xuXHRcdGNvbnN0IHNlY3Rpb25CdG4gPVxuXHRcdFx0Q29uc3RhbnRzLnNraW4gPT09ICdtaW5lcnZhJ1xuXHRcdFx0XHQ/ICQoJzxzcGFuPicpLmFwcGVuZChcblx0XHRcdFx0XHRcdCQoJzxhPicpXG5cdFx0XHRcdFx0XHRcdC5hZGRDbGFzcyhcblx0XHRcdFx0XHRcdFx0XHQnV2lraXBsdXMtRWRpdC1TZWN0aW9uQnRuIG13LXVpLWljb24gbXctdWktaWNvbi1lbGVtZW50IG13LXVpLWljb24td2lraW1lZGlhLWVkaXQtYmFzZTIwIGVkaXQtcGFnZSBtdy11aS1pY29uLWZsdXNoLXJpZ2h0J1xuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdC5jc3MoJ21hcmdpbi1sZWZ0JywgJzAuNzVlbScpXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdocmVmJywgJ2phdmFzY3JpcHQ6dm9pZCgwKScpXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCd0aXRsZScsIGkxOG4udHJhbnNsYXRlKCdxdWlja2VkaXRfc2VjdGlvbmJ0bicpKVxuXHRcdFx0XHRcdClcblx0XHRcdFx0OiAkKCc8c3Bhbj4nKVxuXHRcdFx0XHRcdFx0LmFwcGVuZCgkKCc8c3Bhbj4nKS5hZGRDbGFzcygnbXctZWRpdHNlY3Rpb24tZGl2aWRlcicpLnRleHQoJyB8ICcpKVxuXHRcdFx0XHRcdFx0LmFwcGVuZChcblx0XHRcdFx0XHRcdFx0JCgnPGE+Jylcblx0XHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ1dpa2lwbHVzLUVkaXQtU2VjdGlvbkJ0bicpXG5cdFx0XHRcdFx0XHRcdFx0LmF0dHIoJ2hyZWYnLCAnamF2YXNjcmlwdDp2b2lkKDApJylcblx0XHRcdFx0XHRcdFx0XHQudGV4dChpMThuLnRyYW5zbGF0ZSgncXVpY2tlZGl0X3NlY3Rpb25idG4nKSlcblx0XHRcdFx0XHRcdCk7XG5cdFx0JCgnLm13LWVkaXRzZWN0aW9uJykuZWFjaChmdW5jdGlvbiAoaSkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29uc3QgZWRpdFVSTCA9ICQodGhpcykuZmluZChcImFbaHJlZio9J2FjdGlvbj1lZGl0J11cIikuZmlyc3QoKS5hdHRyKCdocmVmJyk7XG5cdFx0XHRcdGNvbnN0IHNlY3Rpb25OdW1iZXIgPSBlZGl0VVJMXG5cdFx0XHRcdFx0Lm1hdGNoKC8mW3ZlXSpzZWN0aW9uXFw9KFteJl0rKS8pWzFdIC8vIGB2ZWAgZm9yIHZpc3VhbCBlZGl0b3Jcblx0XHRcdFx0XHQucmVwbGFjZSgvVC0vZ2ksICcnKTsgLy8gZW1iZWRkZWQgcGFnZXMgdXNlIFQtc2VyaWVzIHNlY3Rpb24gbnVtYmVyXG5cdFx0XHRcdGNvbnN0IHNlY3Rpb25UYXJnZXROYW1lID0gZGVjb2RlVVJJQ29tcG9uZW50KGVkaXRVUkwubWF0Y2goL3RpdGxlPSguKz8pJi8pWzFdKTtcblx0XHRcdFx0Y29uc3QgY2xvbmVOb2RlID0gJCh0aGlzKS5wcmV2KCkuY2xvbmUoKTtcblx0XHRcdFx0Y2xvbmVOb2RlLmZpbmQoJy5tdy1oZWFkbGluZS1udW1iZXInKS5yZW1vdmUoKTtcblx0XHRcdFx0Y29uc3Qgc2VjdGlvbk5hbWUgPSBjbG9uZU5vZGUudGV4dCgpLnRyaW0oKTtcblx0XHRcdFx0Y29uc3QgX3NlY3Rpb25CdG4gPSBzZWN0aW9uQnRuLmNsb25lKCk7XG5cdFx0XHRcdF9zZWN0aW9uQnRuLmZpbmQoJy5XaWtpcGx1cy1FZGl0LVNlY3Rpb25CdG4nKS5vbignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdFx0b25DbGljayh7XG5cdFx0XHRcdFx0XHRzZWN0aW9uTnVtYmVyLFxuXHRcdFx0XHRcdFx0c2VjdGlvbk5hbWUsXG5cdFx0XHRcdFx0XHR0YXJnZXRQYWdlTmFtZTogc2VjdGlvblRhcmdldE5hbWUsXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRDb25zdGFudHMuc2tpbiA9PT0gJ21pbmVydmEnXG5cdFx0XHRcdFx0PyAkKHRoaXMpLmFwcGVuZChfc2VjdGlvbkJ0bilcblx0XHRcdFx0XHQ6ICQodGhpcykuZmluZCgnLm13LWVkaXRzZWN0aW9uLWJyYWNrZXQnKS5sYXN0KCkuYmVmb3JlKF9zZWN0aW9uQnRuKTtcblx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRMb2cuZXJyb3IoJ2ZhaWxfdG9faW5pdF9xdWlja2VkaXQnKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiDmj5LlhaXku7vmhI/pk77mjqXnvJbovpHlhaXlj6Ncblx0ICpcblx0ICogQHBhcmFtIHsqfSBvbkNsaWNrXG5cdCAqL1xuXHRpbnNlcnRMaW5rRWRpdEVudHJpZXMob25DbGljayA9ICgpID0+IHt9KSB7XG5cdFx0JCgnI213LWNvbnRlbnQtdGV4dCBhLmV4dGVybmFsJykuZWFjaChmdW5jdGlvbiAoaSkge1xuXHRcdFx0Y29uc3QgdXJsID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XG5cdFx0XHRjb25zdCBwYXJhbXMgPSBwYXJzZVF1ZXJ5KHVybCk7XG5cdFx0XHRpZiAocGFyYW1zLmFjdGlvbiA9PT0gJ2VkaXQnICYmIHBhcmFtcy50aXRsZSAhPT0gdW5kZWZpbmVkICYmIHBhcmFtcy5zZWN0aW9uICE9PSAnbmV3Jykge1xuXHRcdFx0XHQkKHRoaXMpLmFmdGVyKFxuXHRcdFx0XHRcdCQoJzxhPicpXG5cdFx0XHRcdFx0XHQuYXR0cih7XG5cdFx0XHRcdFx0XHRcdGhyZWY6ICdqYXZhc2NyaXB0OnZvaWQoMCknLFxuXHRcdFx0XHRcdFx0XHRjbGFzczogJ1dpa2lwbHVzLUVkaXQtRXZlcnlXaGVyZUJ0bicsXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0LnRleHQoYCgke2kxOG4udHJhbnNsYXRlKCdxdWlja2VkaXRfc2VjdGlvbmJ0bicpfSlgKVxuXHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsICgpID0+IHtcblx0XHRcdFx0XHRcdFx0b25DbGljayh7XG5cdFx0XHRcdFx0XHRcdFx0dGFyZ2V0UGFnZU5hbWU6IHBhcmFtcy50aXRsZSxcblx0XHRcdFx0XHRcdFx0XHRzZWN0aW9uTnVtYmVyOiBwYXJhbXMuc2VjdGlvbiA/PyAtMSxcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0c2hvd1F1aWNrRWRpdFBhbmVsKHtcblx0XHR0aXRsZSA9ICcnLFxuXHRcdGNvbnRlbnQgPSAnJyxcblx0XHRzdW1tYXJ5ID0gJycsXG5cdFx0b25CYWNrID0gKCkgPT4ge30sXG5cdFx0b25QYXJzZSA9ICgpID0+IHt9LFxuXHRcdG9uRWRpdCA9ICgpID0+IHt9LFxuXHRcdGVzY0V4aXQgPSBmYWxzZSxcblx0fSkge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdHRoaXMuc2Nyb2xsVG9wID0gJChkb2N1bWVudCkuc2Nyb2xsVG9wKCk7XG5cdFx0aWYgKHRoaXMucXVpY2tFZGl0UGFuZWxWaXNpYmxlKSB7XG5cdFx0XHR0aGlzLmhpZGVRdWlja0VkaXRQYW5lbCgpO1xuXHRcdH1cblx0XHR0aGlzLnF1aWNrRWRpdFBhbmVsVmlzaWJsZSA9IHRydWU7XG5cdFx0Ly8g6Ziy5q2i5omL5ruR5YWz6Zet6aG16Z2iXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0XHQnY2xvc2UnLFxuXHRcdFx0KHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0cmV0dXJuIGAke2kxOG4udHJhbnNsYXRlKCdvbmNsb3NlX2NvbmZpcm0nKX1gO1xuXHRcdFx0fSlcblx0XHQpO1xuXHRcdGNvbnN0IGlzTmV3UGFnZSA9ICQoJy5ub2FydGljbGV0ZXh0JykubGVuZ3RoID4gMDtcblx0XHQvLyBET00g5a6a5LmJ5byA5aeLXG5cdFx0Y29uc3QgYmFja0J0biA9ICQoJzxzcGFuPicpXG5cdFx0XHQuYXR0cignaWQnLCAnV2lraXBsdXMtUXVpY2tlZGl0LUJhY2snKVxuXHRcdFx0LmFkZENsYXNzKCdXaWtpcGx1cy1CdG4nKVxuXHRcdFx0LnRleHQoYCR7aTE4bi50cmFuc2xhdGUoJ2JhY2snKX1gKTsgLy8g6L+U5Zue5oyJ6ZKuXG5cdFx0Y29uc3QganVtcEJ0biA9ICQoJzxzcGFuPicpXG5cdFx0XHQuYXR0cignaWQnLCAnV2lraXBsdXMtUXVpY2tlZGl0LUp1bXAnKVxuXHRcdFx0LmFkZENsYXNzKCdXaWtpcGx1cy1CdG4nKVxuXHRcdFx0LmFwcGVuZChcblx0XHRcdFx0JCgnPGE+Jylcblx0XHRcdFx0XHQuYXR0cignaHJlZicsICcjV2lraXBsdXMtUXVpY2tlZGl0Jylcblx0XHRcdFx0XHQudGV4dChgJHtpMThuLnRyYW5zbGF0ZSgnZ290b19lZGl0Ym94Jyl9YClcblx0XHRcdCk7IC8vIOWIsOe8lui+keahhlxuXHRcdGNvbnN0IGlucHV0Qm94ID0gJCgnPHRleHRhcmVhPicpLmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVF1aWNrZWRpdCcpOyAvLyDkuLvnvJbovpHmoYZcblx0XHRjb25zdCBwcmV2aWV3Qm94ID0gJCgnPGRpdj4nKS5hdHRyKCdpZCcsICdXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKTsgLy8g6aKE6KeI6L6T5Ye6XG5cdFx0Y29uc3Qgc3VtbWFyeUJveCA9ICQoJzxpbnB1dD4nKVxuXHRcdFx0LmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVF1aWNrZWRpdC1TdW1tYXJ5LUlucHV0Jylcblx0XHRcdC5hdHRyKCdwbGFjZWhvbGRlcicsIGAke2kxOG4udHJhbnNsYXRlKCdzdW1tYXJ5X3BsYWNlaG9sZCcpfWApOyAvLyDnvJbovpHmkZjopoHovpPlhaVcblx0XHRjb25zdCBlZGl0U3VibWl0QnRuID0gJCgnPGJ1dHRvbj4nKVxuXHRcdFx0LmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVF1aWNrZWRpdC1TdWJtaXQnKVxuXHRcdFx0LnRleHQoYCR7aTE4bi50cmFuc2xhdGUoaXNOZXdQYWdlID8gJ3B1Ymxpc2hfcGFnZScgOiAncHVibGlzaF9jaGFuZ2UnKX0oQ3RybCtTKWApOyAvLyDmj5DkuqTmjInpkq5cblx0XHRjb25zdCBwcmV2aWV3U3VibWl0QnRuID0gJCgnPGJ1dHRvbj4nKVxuXHRcdFx0LmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LVN1Ym1pdCcpXG5cdFx0XHQudGV4dChgJHtpMThuLnRyYW5zbGF0ZSgncHJldmlldycpfWApOyAvLyDpooTop4jmjInpkq5cblx0XHRjb25zdCBpc01pbm9yRWRpdCA9ICQoJzxkaXY+Jylcblx0XHRcdC5hcHBlbmQoJCgnPGlucHV0PicpLmF0dHIoe3R5cGU6ICdjaGVja2JveCcsIGlkOiAnV2lraXBsdXMtUXVpY2tlZGl0LU1pbm9yRWRpdCd9KSlcblx0XHRcdC5hcHBlbmQoXG5cdFx0XHRcdCQoJzxsYWJlbD4nKVxuXHRcdFx0XHRcdC5hdHRyKCdmb3InLCAnV2lraXBsdXMtUXVpY2tlZGl0LU1pbm9yRWRpdCcpXG5cdFx0XHRcdFx0LnRleHQoYCR7aTE4bi50cmFuc2xhdGUoJ21hcmtfbWlub3JlZGl0Jyl9KEN0cmwrU2hpZnQrUylgKVxuXHRcdFx0KVxuXHRcdFx0LmNzcyh7bWFyZ2luOiAnNXB4IDVweCA1cHggLTNweCcsIGRpc3BsYXk6ICdpbmxpbmUnfSk7XG5cdFx0Ly8gRE9N5a6a5LmJ57uT5p2fXG5cdFx0Y29uc3QgZWRpdEJvZHkgPSAkKCc8ZGl2PicpLmFwcGVuZChcblx0XHRcdGJhY2tCdG4sXG5cdFx0XHRqdW1wQnRuLFxuXHRcdFx0cHJldmlld0JveCxcblx0XHRcdGlucHV0Qm94LFxuXHRcdFx0c3VtbWFyeUJveCxcblx0XHRcdCQoJzxicj4nKSxcblx0XHRcdGlzTWlub3JFZGl0LFxuXHRcdFx0ZWRpdFN1Ym1pdEJ0bixcblx0XHRcdHByZXZpZXdTdWJtaXRCdG5cblx0XHQpO1xuXHRcdHRoaXMuY3JlYXRlRGlhbG9nQm94KHRpdGxlLCBlZGl0Qm9keSwgMTAwMCwgKCkgPT4ge1xuXHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdCcpLnZhbChjb250ZW50KTtcblx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtU3VtbWFyeS1JbnB1dCcpLnZhbChzdW1tYXJ5KTtcblx0XHR9KTtcblx0XHQvLyBCYWNrXG5cdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1CYWNrJykub24oJ2NsaWNrJywgb25CYWNrKTtcblx0XHQvLyBQcmV2aWV3XG5cdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LVN1Ym1pdCcpLm9uKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IHByZWxvYWRCYW5uZXIgPSAkKCc8ZGl2PicpXG5cdFx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtQmFubmVyJylcblx0XHRcdFx0LnRleHQoYCR7aTE4bi50cmFuc2xhdGUoJ2xvYWRpbmdfcHJldmlldycpfWApO1xuXHRcdFx0Y29uc3Qgd2lraVRleHQgPSAkKCcjV2lraXBsdXMtUXVpY2tlZGl0JykudmFsKCk7XG5cdFx0XHQkKHRoaXMpLmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG5cdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctT3V0cHV0JykuZmFkZU91dCgxMDAsICgpID0+IHtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCcpLmh0bWwoJycpLmFwcGVuZChwcmVsb2FkQmFubmVyKTtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCcpLmZhZGVJbigxMDApO1xuXHRcdFx0fSk7XG5cdFx0XHQkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiBzZWxmLnNjcm9sbFRvcH0sIDIwMCk7IC8v6L+U5Zue6aG26YOoXG5cdFx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBvblBhcnNlKHdpa2lUZXh0KTtcblx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKS5mYWRlT3V0KCcxMDAnLCAoKSA9PiB7XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKS5odG1sKGA8aHI+PGRpdiBjbGFzcz1cIm13LWJvZHktY29udGVudFwiPiR7cmVzdWx0fTwvZGl2Pjxocj5gKTtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCcpLmZhZGVJbignMTAwJyk7XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1TdWJtaXQnKS5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdC8vIEVkaXRcblx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVN1Ym1pdCcpLm9uKCdjbGljaycsIGFzeW5jICgpID0+IHtcblx0XHRcdGNvbnN0IHRpbWVyID0gRGF0ZS5ub3coKTtcblx0XHRcdGNvbnN0IGVkaXRCYW5uZXIgPSAkKCc8ZGl2PicpXG5cdFx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtQmFubmVyJylcblx0XHRcdFx0LnRleHQoYCR7aTE4bi50cmFuc2xhdGUoJ3N1Ym1pdHRpbmdfZWRpdCcpfWApO1xuXHRcdFx0Y29uc3QgcGF5bG9hZCA9IHtcblx0XHRcdFx0c3VtbWFyeTogJCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1TdW1tYXJ5LUlucHV0JykudmFsKCksXG5cdFx0XHRcdGNvbnRlbnQ6ICQoJyNXaWtpcGx1cy1RdWlja2VkaXQnKS52YWwoKSxcblx0XHRcdFx0aXNNaW5vckVkaXQ6ICQoJyNXaWtpcGx1cy1RdWlja2VkaXQtTWlub3JFZGl0JykuaXMoJzpjaGVja2VkJyksXG5cdFx0XHR9O1xuXHRcdFx0Ly8g5YeG5aSH57yW6L6RIOemgeeUqOaMiemSriDmiafooYzliqjnlLtcblx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtU3VibWl0LCNXaWtpcGx1cy1RdWlja2VkaXQsI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LVN1Ym1pdCcpLmF0dHIoXG5cdFx0XHRcdCdkaXNhYmxlZCcsXG5cdFx0XHRcdCdkaXNhYmxlZCdcblx0XHRcdCk7XG5cdFx0XHQkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiBzZWxmLnNjcm9sbFRvcH0sIDIwMCk7XG5cdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctT3V0cHV0JykuZmFkZU91dCgxMDAsICgpID0+IHtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCcpLmh0bWwoJycpLmFwcGVuZChlZGl0QmFubmVyKTtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCcpLmZhZGVJbigxMDApO1xuXHRcdFx0fSk7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRhd2FpdCBvbkVkaXQocGF5bG9hZCk7XG5cdFx0XHRcdGNvbnN0IHVzZVRpbWUgPSBEYXRlLm5vdygpIC0gdGltZXI7XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKVxuXHRcdFx0XHRcdC5maW5kKCcuV2lraXBsdXMtQmFubmVyJylcblx0XHRcdFx0XHQuY3NzKCdiYWNrZ3JvdW5kJywgJ3JnYmEoNiwgMjM5LCA5MiwgMC40NCknKTtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCcpXG5cdFx0XHRcdFx0LmZpbmQoJy5XaWtpcGx1cy1CYW5uZXInKVxuXHRcdFx0XHRcdC50ZXh0KGAke2kxOG4udHJhbnNsYXRlKCdlZGl0X3N1Y2Nlc3MnLCBbdXNlVGltZS50b1N0cmluZygpXSl9YCk7XG5cdFx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsICh3aW5kb3cub25iZWZvcmV1bmxvYWQgPSB1bmRlZmluZWQpKTsgLy/lj5bmtojpobXpnaLlhbPpl63noa7orqRcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0bG9jYXRpb24ucmVsb2FkKCk7XG5cdFx0XHRcdH0sIDUwMCk7XG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0XHRcdCQoJy5XaWtpcGx1cy1CYW5uZXInKS5jc3MoJ2JhY2tncm91bmQnLCAncmdiYSgyMTgsIDE0MiwgMTY3LCAwLjY1KScpO1xuXHRcdFx0XHQkKCcuV2lraXBsdXMtQmFubmVyJykuaHRtbChlcnJvci5tZXNzYWdlKTtcblx0XHRcdH0gZmluYWxseSB7XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtU3VibWl0LCNXaWtpcGx1cy1RdWlja2VkaXQsI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LVN1Ym1pdCcpLnByb3AoXG5cdFx0XHRcdFx0J2Rpc2FibGVkJyxcblx0XHRcdFx0XHRmYWxzZVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdC8vQ3RybCtT5o+Q5LqkIEN0cmwrU2hpZnQrU+Wwj+e8lui+kVxuXHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQsI1dpa2lwbHVzLVF1aWNrZWRpdC1TdW1tYXJ5LUlucHV0LCNXaWtpcGx1cy1RdWlja2VkaXQtTWlub3JFZGl0Jykub24oJ2tleWRvd24nLCAoZSkgPT4ge1xuXHRcdFx0aWYgKGUuY3RybEtleSAmJiBlLndoaWNoID09PSA4Mykge1xuXHRcdFx0XHRpZiAoZS5zaGlmdEtleSkge1xuXHRcdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtTWlub3JFZGl0JykudHJpZ2dlcignY2xpY2snKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVN1Ym1pdCcpLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHQvL0VzY+mAgOWHulxuXHRcdGlmIChlc2NFeGl0KSB7XG5cdFx0XHQkKGRvY3VtZW50KS5vbigna2V5ZG93bicsIChlKSA9PiB7XG5cdFx0XHRcdGlmIChlLndoaWNoID09PSAyNykge1xuXHRcdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtQmFjaycpLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdGhpZGVRdWlja0VkaXRQYW5lbCgpIHtcblx0XHR0aGlzLnF1aWNrRWRpdFBhbmVsVmlzaWJsZSA9IGZhbHNlO1xuXHRcdCQoJy5XaWtpcGx1cy1JbnRlckJveCcpLmZhZGVPdXQoJ2Zhc3QnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2UnLCAod2luZG93Lm9uYmVmb3JldW5sb2FkID0gdW5kZWZpbmVkKSk7IC8v5Y+W5raI6aG16Z2i5YWz6Zet56Gu6K6kXG5cdFx0XHQkKHRoaXMpLnJlbW92ZSgpO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIOaYvuekuuW/q+mAn+mHjeWumuWQkeW8ueeql1xuXHQgKlxuXHQgKiBAcGFyYW0gcm9vdDBcblx0ICogQHBhcmFtIHJvb3QwLm9uRWRpdFxuXHQgKiBAcGFyYW0gcm9vdDAub25TdWNjZXNzXG5cdCAqL1xuXHRzaG93U2ltcGxlUmVkaXJlY3RQYW5lbCh7b25FZGl0ID0gKCkgPT4ge30sIG9uU3VjY2VzcyA9ICgpID0+IHt9fSA9IHt9KSB7XG5cdFx0Y29uc3QgaW5wdXQgPSAkKCc8aW5wdXQ+JykuYWRkQ2xhc3MoJ1dpa2lwbHVzLUludGVyQm94LUlucHV0Jyk7XG5cdFx0Y29uc3QgYXBwbHlCdG4gPSAkKCc8ZGl2PicpXG5cdFx0XHQuYWRkQ2xhc3MoJ1dpa2lwbHVzLUludGVyQm94LUJ0bicpXG5cdFx0XHQuYXR0cignaWQnLCAnV2lraXBsdXMtU1ItQXBwbHknKVxuXHRcdFx0LnRleHQoaTE4bi50cmFuc2xhdGUoJ3N1Ym1pdCcpKTtcblx0XHRjb25zdCBjYW5jZWxCdG4gPSAkKCc8ZGl2PicpXG5cdFx0XHQuYWRkQ2xhc3MoJ1dpa2lwbHVzLUludGVyQm94LUJ0bicpXG5cdFx0XHQuYXR0cignaWQnLCAnV2lraXBsdXMtU1ItQ2FuY2VsJylcblx0XHRcdC50ZXh0KGkxOG4udHJhbnNsYXRlKCdjYW5jZWwnKSk7XG5cdFx0Y29uc3QgY29udGludWVCdG4gPSAkKCc8ZGl2PicpXG5cdFx0XHQuYWRkQ2xhc3MoJ1dpa2lwbHVzLUludGVyQm94LUJ0bicpXG5cdFx0XHQuYXR0cignaWQnLCAnV2lraXBsdXMtU1ItQ29udGludWUnKVxuXHRcdFx0LnRleHQoaTE4bi50cmFuc2xhdGUoJ2NvbnRpbnVlJykpO1xuXHRcdGNvbnN0IGNvbnRlbnQgPSAkKCc8ZGl2PicpLmFwcGVuZChpbnB1dCkuYXBwZW5kKCQoJzxocj4nKSkuYXBwZW5kKGFwcGx5QnRuKS5hcHBlbmQoY2FuY2VsQnRuKTsgLy/mi7zmjqVcblx0XHRjb25zdCBkaWFsb2cgPSB0aGlzLmNyZWF0ZURpYWxvZ0JveChpMThuLnRyYW5zbGF0ZSgncmVkaXJlY3RfZGVzYycpLCBjb250ZW50LCA2MDApO1xuXHRcdGFwcGx5QnRuLm9uKCdjbGljaycsIGFzeW5jICgpID0+IHtcblx0XHRcdGNvbnN0IHRpdGxlID0gJCgnLldpa2lwbHVzLUludGVyQm94LUlucHV0JykudmFsKCk7XG5cdFx0XHQkKCcuV2lraXBsdXMtSW50ZXJCb3gtQ29udGVudCcpLmh0bWwoXG5cdFx0XHRcdGA8ZGl2IGNsYXNzPVwiV2lraXBsdXMtQmFubmVyXCI+JHtpMThuLnRyYW5zbGF0ZSgnc3VibWl0dGluZ19lZGl0Jyl9PC9kaXY+YFxuXHRcdFx0KTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGF3YWl0IG9uRWRpdCh7XG5cdFx0XHRcdFx0dGl0bGUsXG5cdFx0XHRcdFx0Zm9yY2VPdmVyd3JpdGU6IGZhbHNlLFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0JCgnLldpa2lwbHVzLUJhbm5lcicpLnRleHQoaTE4bi50cmFuc2xhdGUoJ3JlZGlyZWN0X3NhdmVkJykpO1xuXHRcdFx0XHR0aGlzLmhpZGVTaW1wbGVSZWRpcmVjdFBhbmVsKGRpYWxvZyk7XG5cdFx0XHRcdG9uU3VjY2Vzcyh7dGl0bGV9KTtcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdCQoJy5XaWtpcGx1cy1CYW5uZXInKS5jc3MoJ2JhY2tncm91bmQnLCAncmdiYSgyMTgsIDE0MiwgMTY3LCAwLjY1KScpO1xuXHRcdFx0XHQkKCcuV2lraXBsdXMtQmFubmVyJykudGV4dChlcnJvci5tZXNzYWdlKTtcblx0XHRcdFx0aWYgKGVycm9yLmNvZGUgPT09ICdhcnRpY2xlZXhpc3RzJykge1xuXHRcdFx0XHRcdCQoJy5XaWtpcGx1cy1JbnRlckJveC1Db250ZW50JykuYXBwZW5kKCQoJzxocj4nKSkuYXBwZW5kKGNvbnRpbnVlQnRuKS5hcHBlbmQoY2FuY2VsQnRuKTtcblx0XHRcdFx0XHRjYW5jZWxCdG4ub24oJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5oaWRlU2ltcGxlUmVkaXJlY3RQYW5lbChkaWFsb2cpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGNvbnRpbnVlQnRuLm9uKCdjbGljaycsIGFzeW5jICgpID0+IHtcblx0XHRcdFx0XHRcdCQoJy5XaWtpcGx1cy1JbnRlckJveC1Db250ZW50JykuaHRtbChcblx0XHRcdFx0XHRcdFx0YDxkaXYgY2xhc3M9XCJXaWtpcGx1cy1CYW5uZXJcIj4ke2kxOG4udHJhbnNsYXRlKCdzdWJtaXR0aW5nX2VkaXQnKX08L2Rpdj5gXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0YXdhaXQgb25FZGl0KHtcblx0XHRcdFx0XHRcdFx0XHR0aXRsZSxcblx0XHRcdFx0XHRcdFx0XHRmb3JjZU92ZXJ3cml0ZTogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdCQoJy5XaWtpcGx1cy1CYW5uZXInKS50ZXh0KGkxOG4udHJhbnNsYXRlKCdyZWRpcmVjdF9zYXZlZCcpKTtcblx0XHRcdFx0XHRcdFx0dGhpcy5oaWRlU2ltcGxlUmVkaXJlY3RQYW5lbChkaWFsb2cpO1xuXHRcdFx0XHRcdFx0XHRvblN1Y2Nlc3Moe3RpdGxlfSk7XG5cdFx0XHRcdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRcdFx0XHQkKCcuV2lraXBsdXMtQmFubmVyJykuY3NzKCdiYWNrZ3JvdW5kJywgJ3JnYmEoMjE4LCAxNDIsIDE2NywgMC42NSknKTtcblx0XHRcdFx0XHRcdFx0JCgnLldpa2lwbHVzLUJhbm5lcicpLnRleHQoZXJyb3IubWVzc2FnZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0XHRjYW5jZWxCdG4ub24oJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5oaWRlU2ltcGxlUmVkaXJlY3RQYW5lbChkaWFsb2cpO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIOmakOiXj+W/q+mAn+mHjeWumuWQkeW8ueeql1xuXHQgKlxuXHQgKiBAcGFyYW0geyp9IGRpYWxvZ1xuXHQgKi9cblx0aGlkZVNpbXBsZVJlZGlyZWN0UGFuZWwoZGlhbG9nID0gJCgnYm9keScpKSB7XG5cdFx0ZGlhbG9nLmZpbmQoJy5XaWtpcGx1cy1JbnRlckJveC1DbG9zZScpLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdH1cblxuXHRzaG93U2V0dGluZ3NQYW5lbCh7b25TdWJtaXQgPSAoKSA9PiB7fX0gPSB7fSkge1xuXHRcdGNvbnN0IGlucHV0ID0gJCgnPHRleHRhcmVhPicpLmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVNldHRpbmctSW5wdXQnKS5hdHRyKCdyb3dzJywgJzEwJyk7XG5cdFx0Y29uc3QgYXBwbHlCdG4gPSAkKCc8ZGl2PicpXG5cdFx0XHQuYWRkQ2xhc3MoJ1dpa2lwbHVzLUludGVyQm94LUJ0bicpXG5cdFx0XHQuYXR0cignaWQnLCAnV2lraXBsdXMtU2V0dGluZy1BcHBseScpXG5cdFx0XHQudGV4dChpMThuLnRyYW5zbGF0ZSgnc3VibWl0JykpO1xuXHRcdGNvbnN0IGNhbmNlbEJ0biA9ICQoJzxkaXY+Jylcblx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gtQnRuJylcblx0XHRcdC5hdHRyKCdpZCcsICdXaWtpcGx1cy1TZXR0aW5nLUNhbmNlbCcpXG5cdFx0XHQudGV4dChpMThuLnRyYW5zbGF0ZSgnY2FuY2VsJykpO1xuXHRcdGNvbnN0IGNvbnRlbnQgPSAkKCc8ZGl2PicpLmFwcGVuZChpbnB1dCkuYXBwZW5kKCQoJzxocj4nKSkuYXBwZW5kKGFwcGx5QnRuKS5hcHBlbmQoY2FuY2VsQnRuKTsgLy/mi7zmjqVcblxuXHRcdGNvbnN0IGRpYWxvZyA9IHRoaXMuY3JlYXRlRGlhbG9nQm94KGkxOG4udHJhbnNsYXRlKCd3aWtpcGx1c19zZXR0aW5nc19kZXNjJyksIGNvbnRlbnQsIDYwMCwgKCkgPT4ge1xuXHRcdFx0aWYgKGxvY2FsU3RvcmFnZS5XaWtpcGx1c19TZXR0aW5ncykge1xuXHRcdFx0XHQkKCcjV2lraXBsdXMtU2V0dGluZy1JbnB1dCcpLnZhbChsb2NhbFN0b3JhZ2UuV2lraXBsdXNfU2V0dGluZ3MpO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGNvbnN0IHNldHRpbmdzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuV2lraXBsdXNfU2V0dGluZ3MpO1xuXHRcdFx0XHRcdCQoJyNXaWtpcGx1cy1TZXR0aW5nLUlucHV0JykudmFsKEpTT04uc3RyaW5naWZ5KHNldHRpbmdzLCBudWxsLCAyKSk7XG5cdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdC8vIGlnbm9yZVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkKCcjV2lraXBsdXMtU2V0dGluZy1JbnB1dCcpLmF0dHIoJ3BsYWNlaG9sZGVyJywgaTE4bi50cmFuc2xhdGUoJ3dpa2lwbHVzX3NldHRpbmdzX3BsYWNlaG9sZGVyJykpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGFwcGx5QnRuLm9uKCdjbGljaycsIGFzeW5jICgpID0+IHtcblx0XHRcdGNvbnN0IHNhdmVkQmFubmVyID0gJCgnPGRpdj4nKS5hZGRDbGFzcygnV2lraXBsdXMtQmFubmVyJykudGV4dChpMThuLnRyYW5zbGF0ZSgnd2lraXBsdXNfc2V0dGluZ3Nfc2F2ZWQnKSk7XG5cdFx0XHRjb25zdCBzZXR0aW5ncyA9ICQoJyNXaWtpcGx1cy1TZXR0aW5nLUlucHV0JykudmFsKCk7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRvblN1Ym1pdCh7c2V0dGluZ3N9KTtcblx0XHRcdFx0JCgnLldpa2lwbHVzLUludGVyQm94LUNvbnRlbnQnKS5odG1sKCcnKS5hcHBlbmQoc2F2ZWRCYW5uZXIpO1xuXHRcdFx0XHRhd2FpdCBzbGVlcCgxNTAwKTtcblx0XHRcdFx0dGhpcy5oaWRlU2V0dGluZ3NQYW5lbChkaWFsb2cpO1xuXHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdE5vdGlmaWNhdGlvbi5lcnJvcihpMThuLnRyYW5zbGF0ZSgnd2lraXBsdXNfc2V0dGluZ3NfZ3JhbW1hcl9lcnJvcicpKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRjYW5jZWxCdG4ub24oJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5oaWRlU2V0dGluZ3NQYW5lbChkaWFsb2cpO1xuXHRcdH0pO1xuXHR9XG5cblx0aGlkZVNldHRpbmdzUGFuZWwoZGlhbG9nID0gJCgnYm9keScpKSB7XG5cdFx0ZGlhbG9nLmZpbmQoJy5XaWtpcGx1cy1JbnRlckJveC1DbG9zZScpLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdH1cblxuXHRiaW5kUHJlbG9hZEV2ZW50cyhvblByZWxvYWQpIHtcblx0XHQkKCcjdG9jJylcblx0XHRcdC5jaGlsZHJlbigndWwnKVxuXHRcdFx0LmZpbmQoJ2EnKVxuXHRcdFx0LmVhY2goZnVuY3Rpb24gKGkpIHtcblx0XHRcdFx0JCh0aGlzKS5vbignbW91c2VvdmVyJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdCQodGhpcykub2ZmKCdtb3VzZW92ZXInKTtcblx0XHRcdFx0XHRvblByZWxvYWQoe1xuXHRcdFx0XHRcdFx0c2VjdGlvbk51bWJlcjogaSArIDEsXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFVJKCk7XG4iLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmNsYXNzIFNldHRpbmdzIHtcblx0Z2V0U2V0dGluZyhrZXksIG9iamVjdCA9IHt9KSB7XG5cdFx0Y29uc3QgdyA9IG9iamVjdDtcblx0XHRsZXQgc2V0dGluZ3M7XG5cdFx0dHJ5IHtcblx0XHRcdHNldHRpbmdzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2VbJ1dpa2lwbHVzX1NldHRpbmdzJ10pO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgY3VzdG9tU2V0dGluZ0Z1bmN0aW9uID0gbmV3IEZ1bmN0aW9uKGByZXR1cm4gJHtzZXR0aW5nc1trZXldfWApO1xuXHRcdFx0aWYgKHR5cGVvZiBjdXN0b21TZXR0aW5nRnVuY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRpZiAoY3VzdG9tU2V0dGluZ0Z1bmN0aW9uKCkodykgPT09IHRydWUpIHtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGN1c3RvbVNldHRpbmdGdW5jdGlvbigpKHcpIHx8IHNldHRpbmdzW2tleV07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHRyZXR1cm4gc2V0dGluZ3Nba2V5XTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHNldHRpbmdzW2tleV07XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRsZXQgcmVzdWx0ID0gc2V0dGluZ3Nba2V5XTtcblx0XHRcdFx0Zm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMob2JqZWN0KSkge1xuXHRcdFx0XHRcdHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKGBcXCR7JHtrZXl9fWAsIG9iamVjdFtrZXldKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgU2V0dGluZ3MoKTtcbiIsICIvKipcbiAqIFdpa2lwbHVzXG4gKiBFcmlkYW51cyBTb3JhIDxzb3JhQHNvdW5kLm1vZT5cbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCBQYWdlIGZyb20gJy4vY29yZS9wYWdlJztcbmltcG9ydCBVSSBmcm9tICcuL2NvcmUvdWknO1xuaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tICcuL2NvcmUvbm90aWZpY2F0aW9uJztcbmltcG9ydCBXaWtpIGZyb20gJy4vc2VydmljZXMvd2lraSc7XG5pbXBvcnQgU2V0dGluZ3MgZnJvbSAnLi91dGlscy9zZXR0aW5ncyc7XG5pbXBvcnQgTG9nIGZyb20gJy4vdXRpbHMvbG9nJztcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi91dGlscy9jb25zdGFudHMnO1xuaW1wb3J0IGkxOG4gZnJvbSAnLi91dGlscy9pMThuJztcblxuJChhc3luYyAoKSA9PiB7XG5cdGNvbnN0IFBhZ2VzID0ge307XG5cdGNvbnN0IGlzQ3VycmVudFBhZ2VFbXB0eSA9ICQoJy5ub2FydGljbGV0ZXh0JykubGVuZ3RoID4gMCAmJiBDb25zdGFudHMuYXJ0aWNsZUlkID09PSAwO1xuXG5cdC8qKlxuXHQgKiBHZXQgcGFnZSBpbnN0YW5jZS5cblx0ICpcblx0ICogQHBhcmFtIHsqfSBwYXJhbXNcblx0ICogQHBhcmFtIHtudW1iZXJ9IHBhcmFtcy5yZXZpc2lvbklkIOmhtemdouS/ruiuoueJiOacrOWPt1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLnRpdGxlIOmhtemdouagh+mimFxuXHQgKi9cblx0Y29uc3QgZ2V0UGFnZSA9IGFzeW5jICh7cmV2aXNpb25JZCwgdGl0bGV9KSA9PiB7XG5cdFx0aWYgKFBhZ2VzW3JldmlzaW9uSWRdKSB7XG5cdFx0XHRyZXR1cm4gUGFnZXNbcmV2aXNpb25JZF07XG5cdFx0fVxuXHRcdGNvbnN0IG5ld1BhZ2UgPSBuZXcgUGFnZSh7XG5cdFx0XHRyZXZpc2lvbklkLFxuXHRcdFx0dGl0bGUsXG5cdFx0fSk7XG5cdFx0YXdhaXQgbmV3UGFnZS5pbml0KCk7XG5cdFx0UGFnZXNbcmV2aXNpb25JZF0gPSBuZXdQYWdlO1xuXHRcdHJldHVybiBQYWdlc1tyZXZpc2lvbklkXTtcblx0fTtcblxuXHRMb2cuaW5mbyhgV2lraXBsdXMgbm93IGxvYWRpbmcuIFZlcnNpb246ICR7Q29uc3RhbnRzLnZlcnNpb259YCk7XG5cblx0aWYgKCF3aW5kb3cubXcpIHtcblx0XHRjb25zb2xlLmxvZygnTWVkaWF3aWtpIEphdmFTY3JpcHQgbm90IGxvYWRlZCBvciBub3QgYSBNZWRpYXdpa2kgd2Vic2l0ZS4nKTtcblx0XHRyZXR1cm47XG5cdH1cblx0aWYgKCFDb25zdGFudHMudXNlckdyb3Vwcy5pbmNsdWRlcygnYXV0b2NvbmZpcm1lZCcpICYmICFDb25zdGFudHMudXNlckdyb3Vwcy5pbmNsdWRlcygnY29uZmlybWVkJykpIHtcblx0XHROb3RpZmljYXRpb24uZXJyb3IoaTE4bi50cmFuc2xhdGUoJ25vdF9hdXRvY29uZmlybWVkX3VzZXInKSk7XG5cdFx0TG9nLmluZm8oaTE4bi50cmFuc2xhdGUoJ25vdF9hdXRvY29uZmlybWVkX3VzZXInKSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKCFDb25zdGFudHMuaXNBcnRpY2xlIHx8IENvbnN0YW50cy5hY3Rpb24gIT09ICd2aWV3Jykge1xuXHRcdExvZy5pbmZvKCdOb3QgYW4gZWRpdGFibGUgcGFnZS4gU3RvcCBpbml0aWFsaXphdGlvbi4nKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBJbml0aWFsaXplIGN1cnJlbnQgcGFnZSDpu5jorqTliJ3lp4vljJblvZPliY3pobXpnaJcblx0d2luZG93Ll9XaWtpcGx1c1BhZ2VzID0gUGFnZXM7XG5cdGNvbnN0IGN1cnJlbnRQYWdlTmFtZSA9IENvbnN0YW50cy5jdXJyZW50UGFnZU5hbWU7XG5cdGNvbnN0IHJldmlzaW9uSWQgPSBDb25zdGFudHMucmV2aXNpb25JZDtcblx0Y29uc3QgY3VycmVudFBhZ2UgPSBhd2FpdCBnZXRQYWdlKHtcblx0XHRyZXZpc2lvbklkLFxuXHRcdHRpdGxlOiBjdXJyZW50UGFnZU5hbWUsXG5cdH0pO1xuXG5cdGNvbnN0IGhhbmRsZVF1aWNrRWRpdEJ1dHRvbkNsaWNrZWQgPSBhc3luYyAoe3NlY3Rpb25OdW1iZXIsIHNlY3Rpb25OYW1lLCB0YXJnZXRQYWdlTmFtZX0gPSB7fSkgPT4ge1xuXHRcdGNvbnN0IGlzT3RoZXJQYWdlID0gdGFyZ2V0UGFnZU5hbWUgIT09IGN1cnJlbnRQYWdlTmFtZTtcblx0XHRpZiAoaXNPdGhlclBhZ2UgJiYgQ29uc3RhbnRzLmxhdGVzdFJldmlzaW9uSWQgIT09IENvbnN0YW50cy5yZXZpc2lvbklkKSB7XG5cdFx0XHQvLyDlnKjljoblj7LniYjmnKznvJbovpHlhbbku5bpobXpnaLmnInpl67popgg5pqC5pe25LiN5pSv5oyBXG5cdFx0XHRMb2cuZXJyb3IoJ2Nyb3NzX3BhZ2VfaGlzdG9yeV9yZXZpc2lvbl9lZGl0X3dhcm5pbmcnKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgcmV2aXNpb25JZCA9IGlzT3RoZXJQYWdlID8gYXdhaXQgV2lraS5nZXRMYXRlc3RSZXZpc2lvbklkRm9yUGFnZSh0YXJnZXRQYWdlTmFtZSkgOiBDb25zdGFudHMucmV2aXNpb25JZDtcblxuXHRcdGNvbnN0IHBhZ2UgPSBhd2FpdCBnZXRQYWdlKHtyZXZpc2lvbklkLCB0aXRsZTogdGFyZ2V0UGFnZU5hbWV9KTtcblx0XHRjb25zdCBjdXN0b21TdW1tYXJ5ID0gU2V0dGluZ3MuZ2V0U2V0dGluZygnZGVmYXVsdFN1bW1hcnknLCB7XG5cdFx0XHRzZWN0aW9uTmFtZSxcblx0XHRcdHNlY3Rpb25OdW1iZXIsXG5cdFx0XHRzZWN0aW9uVGFyZ2V0TmFtZTogdGFyZ2V0UGFnZU5hbWUsXG5cdFx0fSk7XG5cdFx0Y29uc3Qgc3VtbWFyeSA9XG5cdFx0XHRjdXN0b21TdW1tYXJ5IHx8XG5cdFx0XHQoc2VjdGlvbk5hbWVcblx0XHRcdFx0PyBgLyogJHtzZWN0aW9uTmFtZX0gKi8gJHtpMThuLnRyYW5zbGF0ZSgnZGVmYXVsdF9zdW1tYXJ5X3N1ZmZpeCcpfWBcblx0XHRcdFx0OiBpMThuLnRyYW5zbGF0ZSgnZGVmYXVsdF9zdW1tYXJ5X3N1ZmZpeCcpKTtcblx0XHRjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0Tm90aWZpY2F0aW9uLnN1Y2Nlc3MoaTE4bi50cmFuc2xhdGUoJ2xvYWRpbmcnKSk7XG5cdFx0fSwgMjAwKTtcblx0XHRjb25zdCBzZWN0aW9uQ29udGVudCA9IGF3YWl0IHBhZ2UuZ2V0V2lraVRleHQoe1xuXHRcdFx0c2VjdGlvbjogc2VjdGlvbk51bWJlcixcblx0XHR9KTtcblx0XHRjb25zdCBpc0VkaXRIaXN0b3J5UmV2aXNpb24gPSAhaXNPdGhlclBhZ2UgJiYgQ29uc3RhbnRzLmxhdGVzdFJldmlzaW9uSWQgIT09IENvbnN0YW50cy5yZXZpc2lvbklkO1xuXHRcdGNvbnN0IGVzY1RvRXhpdCA9XG5cdFx0XHRTZXR0aW5ncy5nZXRTZXR0aW5nKCdlc2NfdG9fZXhpdF9xdWlja2VkaXQnKSA9PT0gdHJ1ZSB8fCAvLyDlhbzlrrnogIHorr7nva5rZXlcblx0XHRcdFNldHRpbmdzLmdldFNldHRpbmcoJ2VzY190b19leGl0X3F1aWNrZWRpdCcpID09PSAndHJ1ZScgfHxcblx0XHRcdFNldHRpbmdzLmdldFNldHRpbmcoJ2VzY1RvRXhpdFF1aWNrRWRpdCcpID09PSB0cnVlIHx8XG5cdFx0XHRTZXR0aW5ncy5nZXRTZXR0aW5nKCdlc2NUb0V4aXRRdWlja0VkaXQnKSA9PT0gJ3RydWUnO1xuXHRcdGNvbnN0IGN1c3RvbUVkaXRUYWdzID0gU2V0dGluZ3MuZ2V0U2V0dGluZygnY3VzdG9tX2VkaXRfdGFncycpO1xuXHRcdGNvbnN0IGRlZmF1bHRFZGl0VGFncyA9IFtdO1xuXHRcdGNvbnN0IGVkaXRUYWdzID0gY3VzdG9tRWRpdFRhZ3M/Lmxlbmd0aCA/IGN1c3RvbUVkaXRUYWdzIDogZGVmYXVsdEVkaXRUYWdzO1xuXHRcdGNsZWFyVGltZW91dCh0aW1lcik7XG5cdFx0Tm90aWZpY2F0aW9uLmVtcHR5KCk7XG5cblx0XHRpZiAoaXNFZGl0SGlzdG9yeVJldmlzaW9uKSB7XG5cdFx0XHROb3RpZmljYXRpb24ud2FybmluZyhpMThuLnRyYW5zbGF0ZSgnaGlzdG9yeV9lZGl0X3dhcm5pbmcnKSk7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgc2hvdWxkU2hvd0NyZWF0ZVBhZ2VUaXAgPSBpc090aGVyUGFnZSA/ICFyZXZpc2lvbklkIDogaXNDdXJyZW50UGFnZUVtcHR5O1xuXG5cdFx0VUkuc2hvd1F1aWNrRWRpdFBhbmVsKHtcblx0XHRcdHRpdGxlOiBgJHtpMThuLnRyYW5zbGF0ZSgncXVpY2tlZGl0X3RvcGJ0bicpfSR7XG5cdFx0XHRcdGlzRWRpdEhpc3RvcnlSZXZpc2lvbiA/IGkxOG4udHJhbnNsYXRlKCdoaXN0b3J5X2VkaXRfd2FybmluZycpIDogJydcblx0XHRcdH1gLFxuXHRcdFx0Y29udGVudDogc2hvdWxkU2hvd0NyZWF0ZVBhZ2VUaXAgPyBpMThuLnRyYW5zbGF0ZSgnY3JlYXRlX3BhZ2VfdGlwJykgOiBzZWN0aW9uQ29udGVudCxcblx0XHRcdHN1bW1hcnksXG5cdFx0XHRvbkJhY2s6IFVJLmhpZGVRdWlja0VkaXRQYW5lbCxcblx0XHRcdG9uUGFyc2U6ICh3aWtpVGV4dCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gcGFnZS5wYXJzZVdpa2lUZXh0KHdpa2lUZXh0KTtcblx0XHRcdH0sXG5cdFx0XHRvbkVkaXQ6IGFzeW5jICh7Y29udGVudCwgc3VtbWFyeSwgaXNNaW5vckVkaXR9KSA9PiB7XG5cdFx0XHRcdGNvbnN0IGVkaXRQYXlsb2FkID0ge1xuXHRcdFx0XHRcdGNvbnRlbnQsXG5cdFx0XHRcdFx0Y29uZmlnOiB7XG5cdFx0XHRcdFx0XHRzdW1tYXJ5LFxuXHRcdFx0XHRcdFx0Li4uKHNlY3Rpb25OdW1iZXIgPT09IC0xID8ge30gOiB7c2VjdGlvbjogc2VjdGlvbk51bWJlcn0pLFxuXHRcdFx0XHRcdFx0Li4uKGVkaXRUYWdzLmxlbmd0aCA/IHt0YWdzOiBlZGl0VGFncy5qb2luKCd8Jyl9IDoge30pLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH07XG5cdFx0XHRcdGlmIChpc01pbm9yRWRpdCkge1xuXHRcdFx0XHRcdGVkaXRQYXlsb2FkLmNvbmZpZy5taW5vciA9ICd0cnVlJztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRlZGl0UGF5bG9hZC5jb25maWcubm90bWlub3IgPSAndHJ1ZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0YXdhaXQgcGFnZS5lZGl0KGVkaXRQYXlsb2FkKTtcblx0XHRcdH0sXG5cdFx0XHRlc2NFeGl0OiBlc2NUb0V4aXQsXG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3QgaGFuZGxlU2ltcGxlUmVkaXJlY3RCdXR0b25DbGlja2VkID0gYXN5bmMgKCkgPT4ge1xuXHRcdFVJLnNob3dTaW1wbGVSZWRpcmVjdFBhbmVsKHtcblx0XHRcdG9uRWRpdDogYXN5bmMgKHt0aXRsZSwgZm9yY2VPdmVyd3JpdGUgPSBmYWxzZX0pID0+IHtcblx0XHRcdFx0Y29uc3QgcGFnZSA9IGF3YWl0IGdldFBhZ2Uoe3RpdGxlfSk7XG5cdFx0XHRcdGNvbnN0IGN1cnJlbnRQYWdlTmFtZSA9IENvbnN0YW50cy5jdXJyZW50UGFnZU5hbWU7XG5cdFx0XHRcdGNvbnN0IHBheWxvYWQgPSB7XG5cdFx0XHRcdFx0Y29udGVudDogYCNSRURJUkVDVCBbWyR7Y3VycmVudFBhZ2VOYW1lfV1dYCxcblx0XHRcdFx0XHRjb25maWc6IHtcblx0XHRcdFx0XHRcdHN1bW1hcnk6IGkxOG4udHJhbnNsYXRlKCdyZWRpcmVjdF9mcm9tX3N1bW1hcnknLCBbdGl0bGUsIGN1cnJlbnRQYWdlTmFtZV0pLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH07XG5cdFx0XHRcdGlmICghZm9yY2VPdmVyd3JpdGUpIHtcblx0XHRcdFx0XHRwYXlsb2FkLmNvbmZpZy5jcmVhdGVvbmx5ID0gJ3RydWUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGF3YWl0IHBhZ2UuZWRpdChwYXlsb2FkKTtcblx0XHRcdH0sXG5cdFx0XHRvblN1Y2Nlc3M6ICh7dGl0bGV9KSA9PiB7XG5cdFx0XHRcdGxvY2F0aW9uLmhyZWYgPSBDb25zdGFudHMuYXJ0aWNsZVBhdGgucmVwbGFjZSgvXFwkMS9naSwgdGl0bGUpO1xuXHRcdFx0fSxcblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCBoYW5kbGVTZXR0aW5nc0J1dHRvbkNsaWNrZWQgPSBhc3luYyAoKSA9PiB7XG5cdFx0VUkuc2hvd1NldHRpbmdzUGFuZWwoe1xuXHRcdFx0b25TdWJtaXQ6ICh7c2V0dGluZ3N9KSA9PiB7XG5cdFx0XHRcdEpTT04ucGFyc2Uoc2V0dGluZ3MpO1xuXHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnV2lraXBsdXNfU2V0dGluZ3MnLCBzZXR0aW5ncyk7XG5cdFx0XHR9LFxuXHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0IGhhbmRsZVByZWxvYWQgPSBhc3luYyAoe3NlY3Rpb25OdW1iZXJ9KSA9PiB7XG5cdFx0YXdhaXQgY3VycmVudFBhZ2UuZ2V0V2lraVRleHQoe1xuXHRcdFx0c2VjdGlvbjogc2VjdGlvbk51bWJlcixcblx0XHR9KTtcblx0fTtcblxuXHRVSS5pbnNlcnRUb3BRdWlja0VkaXRFbnRyeShoYW5kbGVRdWlja0VkaXRCdXR0b25DbGlja2VkKTtcblx0VUkuaW5zZXJ0U2VjdGlvblF1aWNrRWRpdEVudHJpZXMoaGFuZGxlUXVpY2tFZGl0QnV0dG9uQ2xpY2tlZCk7XG5cdFVJLmluc2VydExpbmtFZGl0RW50cmllcyhoYW5kbGVRdWlja0VkaXRCdXR0b25DbGlja2VkKTtcblx0VUkuaW5zZXJ0U2ltcGxlUmVkaXJlY3RCdXR0b24oaGFuZGxlU2ltcGxlUmVkaXJlY3RCdXR0b25DbGlja2VkKTtcblx0VUkuaW5zZXJ0U2V0dGluZ3NQYW5lbEJ1dHRvbihoYW5kbGVTZXR0aW5nc0J1dHRvbkNsaWNrZWQpO1xuXHRVSS5iaW5kUHJlbG9hZEV2ZW50cyhoYW5kbGVQcmVsb2FkKTtcbn0pO1xuIiwgImltcG9ydCAnLi9XaWtpcGx1cy5sZXNzJztcblxuKGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3Qge3dnQWN0aW9uLCB3Z0lzQXJ0aWNsZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGlmICh3Z0FjdGlvbiAhPT0gJ3ZpZXcnIHx8ICF3Z0lzQXJ0aWNsZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHsndmlzdWFsZWRpdG9yLWVuYWJsZSc6IGlzVmVFbmFibGV9ID0gbXcudXNlci5vcHRpb25zLmdldCgpIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuXG5cdGNvbnN0IGxvYWRlciA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRhd2FpdCBpbXBvcnQoJy4vbW9kdWxlcy9pbmRleCcpO1xuXHR9O1xuXG5cdC8qIHNlZSA8aHR0cHM6Ly9naXRodWIuY29tL1dpa2lwbHVzL1dpa2lwbHVzL2lzc3Vlcy82NT4gKi9cblx0aWYgKGlzVmVFbmFibGUpIHtcblx0XHRhd2FpdCBtdy5sb2FkZXIudXNpbmcoJ2V4dC52aXN1YWxFZGl0b3IuY29yZScpO1xuXHR9XG5cblx0dm9pZCBsb2FkZXIoKTtcbn0p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QztFQUFXLElBQUk1WCxHQUFHQyxPQUFPQyxJQUFJO0FBQzlDLE1BQUl5WCxhQUFhLFVBQVUsQ0FBQ0MsYUFBYTtBQUN4QztFQUNEO0FBRUEsUUFBTTtJQUFDLHVCQUF1QkM7RUFBVSxJQUFJN1gsR0FBRytKLEtBQUsrTixRQUFRNVgsSUFBSTtBQUVoRSxRQUFNMkosU0FBQSwyQkFBQTtBQUFBLFFBQUFrTyxTQUFBeFcsa0JBQVMsYUFBMkI7QUFDekMsWUFBTW1JLFFBQUErQyxRQUFBLEVBQUF1TCxLQUFBLE9BQUFoRCxhQUFBLEdBQUFELGdCQUFBO0lBQ1AsQ0FBQTtBQUFBLFdBQUEsU0FGTWxMLFVBQUE7QUFBQSxhQUFBa08sT0FBQXZDLE1BQUEsTUFBQUMsU0FBQTtJQUFBO0VBQUEsRUFBQTtBQUtOLE1BQUlvQyxZQUFZO0FBQ2YsVUFBTTdYLEdBQUc2SixPQUFPQyxNQUFNLHVCQUF1QjtFQUM5QztBQUVBLE9BQUtELE9BQU87QUFDYixDQUFBLEVBQUc7IiwKICAibmFtZXMiOiBbIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiZG9jdW1lbnQiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIm5hdmlnYXRvciIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiU3ltYm9sIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiVHlwZUVycm9yIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiQ29uc3RhbnRzIiwgImNvbnN0YW50c19kZWZhdWx0IiwgImluaXRfY29uc3RhbnRzIiwgIl9fZXNtIiwgInZlcnNpb24iLCAiaXNBcnRpY2xlIiwgIndpbmRvdyIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImN1cnJlbnRQYWdlTmFtZSIsICJyZXBsYWNlIiwgImFydGljbGVJZCIsICJyZXZpc2lvbklkIiwgImxhdGVzdFJldmlzaW9uSWQiLCAiYXJ0aWNsZVBhdGgiLCAic2NyaXB0UGF0aCIsICJhY3Rpb24iLCAic2tpbiIsICJ1c2VyR3JvdXBzIiwgIndpa2lJZCIsICJSZXF1ZXN0cyIsICJyZXF1ZXN0c19kZWZhdWx0IiwgImluaXRfcmVxdWVzdHMiLCAiYmFzZSIsICJjb25jYXQiLCAibG9jYXRpb24iLCAicHJvdG9jb2wiLCAiaG9zdCIsICJxdWVyeSIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJ1cmwiLCAiVVJMIiwgIl9pIiwgIl9PYmplY3Qka2V5cyIsICJPYmplY3QiLCAia2V5cyIsICJsZW5ndGgiLCAia2V5IiwgInNlYXJjaFBhcmFtcyIsICJhcHBlbmQiLCAicmVzcG9uc2UiLCAiZmV0Y2giLCAiY3JlZGVudGlhbHMiLCAiaGVhZGVycyIsICJqc29uIiwgInBvc3QiLCAicGF5bG9hZCIsICJmb3JtIiwgIkZvcm1EYXRhIiwgIl9pMiIsICJfT2JqZWN0JGVudHJpZXMiLCAiZW50cmllcyIsICJ2YWx1ZSIsICJtZXRob2QiLCAiYm9keSIsICJJMThuIiwgImkxOG5fZGVmYXVsdCIsICJpbml0X2kxOG4iLCAibGFuZ3VhZ2UiLCAiaTE4bkRhdGEiLCAic2Vzc2lvblVwZGF0ZUxvZyIsICJjb25zdHJ1Y3RvciIsICJKU09OIiwgInBhcnNlIiwgImxvY2FsU3RvcmFnZSIsICJuYXZpZ2F0b3IiLCAidG9Mb3dlckNhc2UiLCAiYnJvd3Nlckxhbmd1YWdlIiwgImkxOG5DYWNoZSIsICJnZXRJdGVtIiwgIl9pMyIsICJfT2JqZWN0JGtleXMyIiwgInNldEl0ZW0iLCAidHJhbnNsYXRlIiwgInBsYWNlaG9sZGVycyIsICJyZXN1bHQiLCAibG9hZExhbmd1YWdlIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJpbmRleCIsICJwbGFjZWhvbGRlciIsICJlcnIiLCAiZSIsICJmIiwgIl90aGlzIiwgImluY2x1ZGVzIiwgIm5vd1ZlcnNpb24iLCAicHVzaCIsICJfX3ZlcnNpb24iLCAiY29uc29sZSIsICJpbmZvIiwgInN0cmluZ2lmeSIsICJXaWtpcGx1c0Vycm9yIiwgIkxvZyIsICJsb2dfZGVmYXVsdCIsICJpbml0X2xvZyIsICJFcnJvciIsICJtZXNzYWdlIiwgImNvZGUiLCAiZGVidWciLCAiZXJyb3IiLCAiZXJyb3JDb2RlIiwgInBheWxvYWRzIiwgInRlbXBsYXRlIiwgIl9pdGVyYXRvcjIiLCAiX3N0ZXAyIiwgImkiLCAidiIsICJSZWdFeHAiLCAiV2lraSIsICJ3aWtpX2RlZmF1bHQiLCAiaW5pdF93aWtpIiwgInBhZ2VJbmZvQ2FjaGUiLCAiZ2V0RWRpdFRva2VuIiwgIm1ldGEiLCAiZm9ybWF0IiwgInRva2VucyIsICJjc3JmdG9rZW4iLCAiZ2V0UGFnZUluZm8iLCAidGl0bGUiLCAiX3RoaXMyIiwgInBhcmFtcyIsICJwcm9wIiwgInJ2cHJvcCIsICJyZXZpZHMiLCAidGltZXN0YW1wIiwgInJldmlkIiwgInRpdGxlcyIsICJwYWdlcyIsICJwYWdlSW5mbyIsICJyZXZpc2lvbnMiLCAiZ2V0V2lraVRleHQiLCAic2VjdGlvbiIsICJ0ZXh0IiwgInBhcnNlV2lraVRleHQiLCAid2lraXRleHQiLCAicHN0IiwgImVkaXQiLCAiY29udGVudCIsICJlZGl0VG9rZW4iLCAiYWRkaXRpb25hbENvbmZpZyIsICJ0b2tlbiIsICJiYXNldGltZXN0YW1wIiwgIndhcm5pbmciLCAiZ2V0TGF0ZXN0UmV2aXNpb25JZEZvclBhZ2UiLCAiX3RoaXMzIiwgIlBhZ2UiLCAicGFnZV9kZWZhdWx0IiwgImluaXRfcGFnZSIsICJpbml0ZWQiLCAiaXNOZXdQYWdlIiwgInNlY3Rpb25DYWNoZSIsICJpbml0IiwgIl90aGlzNCIsICJwcm9taXNlQXJyIiwgImdldFRpbWVzdGFtcCIsICJQcm9taXNlIiwgImFsbCIsICJfdGhpczUiLCAibG9hZGVyIiwgInVzaW5nIiwgInVzZXIiLCAiX3RoaXM2IiwgIl90aGlzNyIsICJzZWMiLCAid2lraVRleHQiLCAiX3RoaXM4IiwgIl90aGlzOSIsICJjcmVhdGVvbmx5IiwgIk5vdGlmaWNhdGlvbiIsICJub3RpZmljYXRpb25fZGVmYXVsdCIsICJpbml0X25vdGlmaWNhdGlvbiIsICIkIiwgImRpc3BsYXkiLCAidHlwZSIsICJjYWxsYmFjayIsICJhZGRDbGFzcyIsICJmaW5kIiwgImxhc3QiLCAiZmFkZUluIiwgImJpbmQiLCAiY2xlYXIiLCAic2VsZiIsICJvbiIsICJzbGlkZUxlZnQiLCAic3VjY2VzcyIsICJjaGlsZHJlbiIsICJmaXJzdCIsICJmYWRlT3V0IiwgInJlbW92ZSIsICJzZXRUaW1lb3V0IiwgImVtcHR5IiwgImVhY2giLCAiZWxlIiwgImRlbGF5IiwgInNwZWVkIiwgImNzcyIsICJhbmltYXRlIiwgImxlZnQiLCAic2xlZXAiLCAic2xlZXBfZGVmYXVsdCIsICJpbml0X3NsZWVwIiwgInRpbWUiLCAicmVzb2x2ZSIsICJwYXJzZVF1ZXJ5IiwgInJlZyIsICJtYXRjaCIsICJleGVjIiwgImRlY29kZVVSSUNvbXBvbmVudCIsICJpbml0X2hlbHBlcnMiLCAiVUkiLCAidWlfZGVmYXVsdCIsICJpbml0X3VpIiwgInF1aWNrRWRpdFBhbmVsVmlzaWJsZSIsICJzY3JvbGxUb3AiLCAiY3JlYXRlRGlhbG9nQm94IiwgIndpZHRoIiwgImNsaWVudFdpZHRoIiwgImlubmVyV2lkdGgiLCAiY2xpZW50SGVpZ2h0IiwgImlubmVySGVpZ2h0IiwgImRpYWxvZ1dpZHRoIiwgIk1hdGgiLCAibWluIiwgImRpYWxvZ0JveCIsICJ0b3AiLCAiZG9jdW1lbnQiLCAiaHRtbCIsICJwYXJlbnQiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJvbmJlZm9yZXVubG9hZCIsICJiaW5kRHJhZ2dpbmciLCAiZWxlbWVudCIsICJtb3VzZWRvd24iLCAiYmFzZVgiLCAiY2xpZW50WCIsICJiYXNlWSIsICJjbGllbnRZIiwgImJhc2VPZmZzZXRYIiwgIm9mZnNldCIsICJiYXNlT2Zmc2V0WSIsICJlMiIsICJ1bmJpbmQiLCAib2ZmIiwgImFkZEZ1bmN0aW9uQnV0dG9uIiwgImlkIiwgImJ1dHRvbiIsICJhdHRyIiwgImluc2VydFNpbXBsZVJlZGlyZWN0QnV0dG9uIiwgIm9uQ2xpY2siLCAiaW5zZXJ0U2V0dGluZ3NQYW5lbEJ1dHRvbiIsICJpbnNlcnRUb3BRdWlja0VkaXRFbnRyeSIsICJ0b3BCdG4iLCAidG9wQnRuTGluayIsICJzZWN0aW9uTnVtYmVyIiwgInRhcmdldFBhZ2VOYW1lIiwgImFmdGVyIiwgImluc2VydFNlY3Rpb25RdWlja0VkaXRFbnRyaWVzIiwgInNlY3Rpb25CdG4iLCAiZWRpdFVSTCIsICJzZWN0aW9uVGFyZ2V0TmFtZSIsICJjbG9uZU5vZGUiLCAicHJldiIsICJjbG9uZSIsICJzZWN0aW9uTmFtZSIsICJ0cmltIiwgIl9zZWN0aW9uQnRuIiwgImJlZm9yZSIsICJpbnNlcnRMaW5rRWRpdEVudHJpZXMiLCAiaHJlZiIsICJjbGFzcyIsICJfcGFyYW1zJHNlY3Rpb24iLCAic2hvd1F1aWNrRWRpdFBhbmVsIiwgInN1bW1hcnkiLCAib25CYWNrIiwgIm9uUGFyc2UiLCAib25FZGl0IiwgImVzY0V4aXQiLCAiaGlkZVF1aWNrRWRpdFBhbmVsIiwgImJhY2tCdG4iLCAianVtcEJ0biIsICJpbnB1dEJveCIsICJwcmV2aWV3Qm94IiwgInN1bW1hcnlCb3giLCAiZWRpdFN1Ym1pdEJ0biIsICJwcmV2aWV3U3VibWl0QnRuIiwgImlzTWlub3JFZGl0IiwgIm1hcmdpbiIsICJlZGl0Qm9keSIsICJ2YWwiLCAicHJlbG9hZEJhbm5lciIsICJ0aW1lciIsICJEYXRlIiwgIm5vdyIsICJlZGl0QmFubmVyIiwgImlzIiwgInVzZVRpbWUiLCAidG9TdHJpbmciLCAicmVsb2FkIiwgImxvZyIsICJjdHJsS2V5IiwgIndoaWNoIiwgInNoaWZ0S2V5IiwgInRyaWdnZXIiLCAicHJldmVudERlZmF1bHQiLCAic3RvcFByb3BhZ2F0aW9uIiwgInNob3dTaW1wbGVSZWRpcmVjdFBhbmVsIiwgIm9uU3VjY2VzcyIsICJfdGhpczEwIiwgImlucHV0IiwgImFwcGx5QnRuIiwgImNhbmNlbEJ0biIsICJjb250aW51ZUJ0biIsICJkaWFsb2ciLCAiZm9yY2VPdmVyd3JpdGUiLCAiaGlkZVNpbXBsZVJlZGlyZWN0UGFuZWwiLCAiZXJyb3IyIiwgInNob3dTZXR0aW5nc1BhbmVsIiwgIm9uU3VibWl0IiwgIl90aGlzMTEiLCAiV2lraXBsdXNfU2V0dGluZ3MiLCAic2V0dGluZ3MiLCAic2F2ZWRCYW5uZXIiLCAiaGlkZVNldHRpbmdzUGFuZWwiLCAiYmluZFByZWxvYWRFdmVudHMiLCAib25QcmVsb2FkIiwgIlNldHRpbmdzIiwgInNldHRpbmdzX2RlZmF1bHQiLCAiaW5pdF9zZXR0aW5ncyIsICJnZXRTZXR0aW5nIiwgIm9iamVjdCIsICJ3IiwgImN1c3RvbVNldHRpbmdGdW5jdGlvbiIsICJGdW5jdGlvbiIsICJfaTQiLCAiX09iamVjdCRrZXlzMyIsICJrZXkyIiwgIm1vZHVsZXNfZXhwb3J0cyIsICJpbml0X21vZHVsZXMiLCAiUGFnZXMiLCAiaXNDdXJyZW50UGFnZUVtcHR5IiwgImdldFBhZ2UiLCAiX3JlZjciLCAicmV2aXNpb25JZDIiLCAibmV3UGFnZSIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiX1dpa2lwbHVzUGFnZXMiLCAiY3VycmVudFBhZ2UiLCAiaGFuZGxlUXVpY2tFZGl0QnV0dG9uQ2xpY2tlZCIsICJfcmVmOCIsICJpc090aGVyUGFnZSIsICJwYWdlIiwgImN1c3RvbVN1bW1hcnkiLCAic2VjdGlvbkNvbnRlbnQiLCAiaXNFZGl0SGlzdG9yeVJldmlzaW9uIiwgImVzY1RvRXhpdCIsICJjdXN0b21FZGl0VGFncyIsICJkZWZhdWx0RWRpdFRhZ3MiLCAiZWRpdFRhZ3MiLCAiY2xlYXJUaW1lb3V0IiwgInNob3VsZFNob3dDcmVhdGVQYWdlVGlwIiwgIl9yZWY5IiwgInN1bW1hcnkyIiwgImVkaXRQYXlsb2FkIiwgInRhZ3MiLCAiam9pbiIsICJtaW5vciIsICJub3RtaW5vciIsICJfeDIiLCAiaGFuZGxlU2ltcGxlUmVkaXJlY3RCdXR0b25DbGlja2VkIiwgIl9yZWYxMCIsICJfcmVmMTEiLCAiY3VycmVudFBhZ2VOYW1lMiIsICJfeDMiLCAiaGFuZGxlU2V0dGluZ3NCdXR0b25DbGlja2VkIiwgIl9yZWYxMiIsICJoYW5kbGVQcmVsb2FkIiwgIl9yZWYxMyIsICJfeDQiLCAid2dBY3Rpb24iLCAid2dJc0FydGljbGUiLCAiaXNWZUVuYWJsZSIsICJvcHRpb25zIiwgIl9yZWYxNSIsICJ0aGVuIl0KfQo=

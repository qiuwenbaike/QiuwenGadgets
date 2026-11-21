/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Editform_Attribution}
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

// node_modules/.pnpm/proxy-polyfill@0.3.2/node_modules/proxy-polyfill/proxy.min.js
var require_proxy_min = __commonJS({
  "node_modules/.pnpm/proxy-polyfill@0.3.2/node_modules/proxy-polyfill/proxy.min.js"() {
    (function() {
      function n() {
        function v() {
          return null;
        }
        function l(a) {
          return a ? "object" === typeof a || "function" === typeof a : false;
        }
        function p2(a) {
          if (null !== a && !l(a)) throw new TypeError("Object prototype may only be an Object or null: " + a);
        }
        var q = null, e = Object, w = !!e.create || !({ __proto__: null } instanceof e), A = e.create || (w ? function(a) {
          p2(a);
          return { __proto__: a };
        } : function(a) {
          function c() {
          }
          p2(a);
          if (null === a) throw new SyntaxError("Native Object.create is required to create objects with null prototype");
          c.prototype = a;
          return new c();
        }), B = e.getPrototypeOf || ([].__proto__ === Array.prototype ? function(a) {
          a = a.__proto__;
          return l(a) ? a : null;
        } : v);
        var m2 = function(a, c) {
          function k() {
          }
          if (void 0 === (this && this instanceof m2 ? this.constructor : void 0)) throw new TypeError("Constructor Proxy requires 'new'");
          if (!l(a) || !l(c)) throw new TypeError("Cannot create proxy with a non-object as target or handler");
          q = function() {
            a = null;
            k = function(b) {
              throw new TypeError("Cannot perform '" + b + "' on a proxy that has been revoked");
            };
          };
          setTimeout(function() {
            q = null;
          }, 0);
          var g = c;
          c = { get: null, set: null, apply: null, construct: null };
          for (var h2 in g) {
            if (!(h2 in c)) throw new TypeError("Proxy polyfill does not support trap '" + h2 + "'");
            c[h2] = g[h2];
          }
          "function" === typeof g && (c.apply = g.apply.bind(g));
          g = B(a);
          var r = false, t = false;
          if ("function" === typeof a) {
            var f = function() {
              var b = this && this.constructor === f, d = Array.prototype.slice.call(arguments);
              k(b ? "construct" : "apply");
              return b && c.construct ? c.construct.call(this, a, d) : !b && c.apply ? c.apply(a, this, d) : b ? (d.unshift(a), new (a.bind.apply(a, d))()) : a.apply(
                this,
                d
              );
            };
            r = true;
          } else a instanceof Array ? (f = [], t = true) : f = w || null !== g ? A(g) : {};
          var x = c.get ? function(b) {
            k("get");
            return c.get(this, b, f);
          } : function(b) {
            k("get");
            return this[b];
          }, C = c.set ? function(b, d) {
            k("set");
            c.set(this, b, d, f);
          } : function(b, d) {
            k("set");
            this[b] = d;
          }, y = {};
          e.getOwnPropertyNames(a).forEach(function(b) {
            if (!((r || t) && b in f)) {
              var d = e.getOwnPropertyDescriptor(a, b);
              e.defineProperty(f, b, { enumerable: !!d.enumerable, get: x.bind(a, b), set: C.bind(a, b) });
              y[b] = true;
            }
          });
          h2 = true;
          if (r || t) {
            var D = e.setPrototypeOf || ([].__proto__ === Array.prototype ? function(b, d) {
              p2(d);
              b.__proto__ = d;
              return b;
            } : v);
            g && D(f, g) || (h2 = false);
          }
          if (c.get || !h2) for (var u in a) y[u] || e.defineProperty(f, u, { get: x.bind(a, u) });
          e.seal(a);
          e.seal(f);
          return f;
        };
        m2.revocable = function(a, c) {
          return { proxy: new m2(a, c), revoke: q };
        };
        return m2;
      }
      ;
      var z = "undefined" !== typeof process && "[object process]" === {}.toString.call(process) || "undefined" !== typeof navigator && "ReactNative" === navigator.product ? global : self;
      z.Proxy || (z.Proxy = n(), z.Proxy.revocable = z.Proxy.revocable);
    })();
  }
});

// dist/Editform_Attribution/Editform_Attribution.js
//! src/Editform_Attribution/Editform_Attribution.ts
require_proxy_min();
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/Editform_Attribution/options.json
var configKey = "gadget-Editform_Attribution__Initialized";
var configKeyVe = "gadget-Editform_Attribution__Initialized__VE";
var inputId = "editform_attribution";
var targetWikiEditor = ".editCheckboxes";
//! src/Editform_Attribution/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    "Add to Edit Summary": (0, import_ext_gadget.localize)({
      en: "Add to Edit Summary",
      "zh-hans": "添加至编辑摘要",
      "zh-hant": "添加至編輯摘要"
    }),
    Source: (0, import_ext_gadget.localize)({
      en: "Source",
      "zh-hans": "内容来源",
      "zh-hant": "內容來源"
    }),
    License: (0, import_ext_gadget.localize)({
      en: "License",
      "zh-hans": "许可证",
      "zh-hant": "許可證"
    }),
    "Other License": (0, import_ext_gadget.localize)({
      en: "Other license",
      "zh-hans": "其他许可证",
      "zh-hant": "其他許可證"
    }),
    "Please Claim Sources and Licenses": (0, import_ext_gadget.localize)({
      en: "If edit content adds any third-party content, please add the source and license of the third-party content separately to the editing summary.",
      "zh-hans": "若您向编辑内容中添加了第三方撰写的内容，请将相关第三方内容的来源、许可条款在编辑摘要中分条声明",
      "zh-hant": "若您向編輯內容中添加了第三方撰写的內容，請將相关第三方內容的來源、許可條款在編輯摘要中分條聲明"
    }),
    "Replace With License": (0, import_ext_gadget.localize)({
      en: " (Replace with license name and URL)",
      "zh-hans": "（请替换为许可证名称和网址）",
      "zh-hant": "（請替換爲許可證名稱和網址）"
    }),
    "Please replace placeholder with actual license": (0, import_ext_gadget.localize)({
      en: "Please replace placeholder with actual license.",
      "zh-hans": "请将占位符替换为实际许可证。",
      "zh-hant": "請將占位符替換爲實際許可證。"
    }),
    "License is missing": (0, import_ext_gadget.localize)({
      en: "License is missing!",
      "zh-hans": "请选择对应的许可证！",
      "zh-hant": "請選擇對應的許可證！"
    }),
    "Source is missing": (0, import_ext_gadget.localize)({
      en: "Source is missing!",
      "zh-hans": "请填写对应的来源！",
      "zh-hant": "請填寫對應的來源！"
    }),
    "Both source and License are missing": (0, import_ext_gadget.localize)({
      en: "Both source and License are missing!",
      "zh-hans": "请填写对应的来源，并选择对应的许可证！",
      "zh-hant": "請填寫對應的來源，並選擇對應的許可證！"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/Editform_Attribution/modules/constant.ts
var {
  wgNamespaceIds
} = mw.config.get();
var LICENSES = [{
  label: "CC BY-SA 4.0",
  data: "cc-by-sa:4.0"
}, {
  label: "CC BY-SA 3.0",
  data: "cc-by-sa:3.0"
}, {
  label: "CC BY-SA 3.0 CN",
  data: "cc-by-sa:3.0/cn"
}, {
  label: "CC BY 4.0",
  data: "cc-by:4.0"
}, {
  label: "CC BY 3.0",
  data: "cc-by:3.0"
}, {
  label: "CC BY 3.0 CN",
  data: "cc-by:3.0/cn"
}, {
  label: "CC0-1.0",
  data: "cc-zero:1.0"
}, {
  label: "KOGL Type I: Attribution",
  data: "https://www.kogl.or.kr/info/licenseType1.do"
}, {
  label: getMessage("Other License"),
  data: getMessage("Replace With License")
}];
var VALID_INTERWIKI_PREFIX = ["cc-by", "cc-by-sa", "cc-zero", "cc0", "commons", "enwiki", "incubator", "incubator-wp-mnc", "incubator-wt-mnc", "iso639-3", "lexemes", "licence", "licencewiki", "license", "login", "loginqiuwenbaike", "loginwiki", "mediawikiwiki", "mozillawiki", "mw", "oldwikisource", "pmid", "qiuwenbaike", "rev", "testwikidata", "v", "voy", "wiki", "wikibooks", "wikidata", "wikifunctions", "wikinews", "wikipedia", "wikiquote", "wikisource", "wikiversity", "wikivoyage", "wikt", "wiktionary", "zhqiuwenbaike", "zhwiki", "zhwikisource", "zhwikivoyage"];
var VALID_INTERNAL_PREFIX = [];
for (const [namespaceName, id] of Object.entries(wgNamespaceIds)) {
  if (id === 0) {
    continue;
  }
  VALID_INTERNAL_PREFIX[VALID_INTERNAL_PREFIX.length] = namespaceName;
}
//! src/Editform_Attribution/modules/util/getLink.ts
var escapeRegex = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
var createPrefixRegex = (prefixes2) => new RegExp(`^:?(?:${prefixes2.map(escapeRegex).join("|")}):`, "i");
var VALID_INTERWIKI_LINK_REGEX = createPrefixRegex(VALID_INTERWIKI_PREFIX);
var VALID_INTERNAL_PREFIX_REGEX = createPrefixRegex(VALID_INTERNAL_PREFIX);
var getLink = ({
  link,
  text
}) => {
  if ([getMessage("Replace With License"), getMessage("Other License")].includes(link) || text && [getMessage("Replace With License"), getMessage("Other License")].includes(text)) {
    return getMessage("Replace With License");
  }
  if (link.startsWith("[[") && link.endsWith("]]")) {
    return link;
  }
  if (link.startsWith("http://") || link.startsWith("https://")) {
    return `[${encodeURI(decodeURI(link))} ]`;
  }
  if (VALID_INTERWIKI_LINK_REGEX.test(link)) {
    link = `:${link.replace(/^:/, "")}`;
    if (text) {
      return `[[${link}|${text}]]`;
    }
    return `[[${link}]]`;
  }
  if (VALID_INTERNAL_PREFIX_REGEX.test(link)) {
    link = `:${link.replace(/^:/, "")}`;
    if (text) {
      return `[[${link}|${text}]]`;
    }
    return `[[${link}]]`;
  }
  return link;
};
//! src/Editform_Attribution/modules/util/getLicense.ts
var getLicense = (license) => {
  const selected = LICENSES.find(({
    data
  }) => data === license);
  return selected ? getLink({
    link: selected.data,
    text: selected.label
  }) : "";
};
var updateWpLicense = ({
  $body,
  license
}) => {
  let $wpLicense = $body.find("input[name=wpLicense]");
  if (!$wpLicense.length) {
    $wpLicense = $("<input>").attr({
      id: "wpLicense",
      name: "wpLicense",
      type: "hidden",
      value: ""
    }).prependTo($body);
  }
  $wpLicense.val(getLicense(license));
};
//! src/Editform_Attribution/modules/util/getSource.ts
var getSource = (source) => source ? getLink({
  link: source
}) : "";
var updateWpSource = ({
  $body,
  source
}) => {
  let $wpSource = $body.find("input[name=wpSource]");
  if (!$wpSource.length) {
    $wpSource = $("<input>").attr({
      id: "wpSource",
      name: "wpSource",
      type: "hidden",
      value: ""
    }).prependTo($body);
  }
  $wpSource.val(getSource(source));
};
/**
* @vue/shared v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function makeMap(str) {
  const map = /* @__PURE__ */ Object.create(null);
  for (const key of str.split(",")) map[key] = 1;
  return (val) => val in map;
}
var EMPTY_OBJ = false ? Object.freeze({}) : {};
var EMPTY_ARR = false ? Object.freeze([]) : [];
var NOOP = () => {
};
var NO = () => false;
var isOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && // uppercase letter
(key.charCodeAt(2) > 122 || key.charCodeAt(2) < 97);
var isModelListener = (key) => key.startsWith("onUpdate:");
var extend = Object.assign;
var remove = (arr, el) => {
  const i = arr.indexOf(el);
  if (i > -1) {
    arr.splice(i, 1);
  }
};
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = (val, key) => hasOwnProperty.call(val, key);
var isArray = Array.isArray;
var isMap = (val) => toTypeString(val) === "[object Map]";
var isSet = (val) => toTypeString(val) === "[object Set]";
var isDate = (val) => toTypeString(val) === "[object Date]";
var isFunction = (val) => typeof val === "function";
var isString = (val) => typeof val === "string";
var isSymbol = (val) => typeof val === "symbol";
var isObject = (val) => val !== null && typeof val === "object";
var isPromise = (val) => {
  return (isObject(val) || isFunction(val)) && isFunction(val.then) && isFunction(val.catch);
};
var objectToString = Object.prototype.toString;
var toTypeString = (value) => objectToString.call(value);
var toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
var isPlainObject = (val) => toTypeString(val) === "[object Object]";
var isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
var isReservedProp = /* @__PURE__ */ makeMap(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
);
var cacheStringFunction = (fn) => {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
var camelizeRE = /-\w/g;
var camelize = /* @__PURE__ */ cacheStringFunction((str) => {
  return str.replace(camelizeRE, (c) => c.slice(1).toUpperCase());
});
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = /* @__PURE__ */ cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
var capitalize = /* @__PURE__ */ cacheStringFunction((str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
var toHandlerKey = /* @__PURE__ */ cacheStringFunction((str) => {
  const s = str ? `on${capitalize(str)}` : ``;
  return s;
});
var hasChanged = (value, oldValue) => !Object.is(value, oldValue);
var invokeArrayFns = (fns, ...arg) => {
  for (let i = 0; i < fns.length; i++) {
    fns[i](...arg);
  }
};
var def = (obj, key, value, writable = false) => {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    writable,
    value
  });
};
var looseToNumber = (val) => {
  const n = parseFloat(val);
  return isNaN(n) ? val : n;
};
var toNumber = (val) => {
  const n = isString(val) ? Number(val) : NaN;
  return isNaN(n) ? val : n;
};
var _globalThis;
var getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
};
function normalizeStyle(value) {
  if (isArray(value)) {
    const res = {};
    for (let i = 0; i < value.length; i++) {
      const item = value[i];
      const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
      if (normalized) {
        for (const key in normalized) {
          res[key] = normalized[key];
        }
      }
    }
    return res;
  } else if (isString(value) || isObject(value)) {
    return value;
  }
}
var listDelimiterRE = /;(?![^(]*\))/g;
var propertyDelimiterRE = /:([^]+)/;
var styleCommentRE = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function parseStringStyle(cssText) {
  const ret = {};
  cssText.replace(styleCommentRE, (match) => match.startsWith("/*") ? "" : match).split(listDelimiterRE).forEach((item) => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}
function normalizeClass(value) {
  let res = "";
  if (isString(value)) {
    res = value;
  } else if (isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      const normalized = normalizeClass(value[i]);
      if (normalized) {
        res += normalized + " ";
      }
    }
  } else if (isObject(value)) {
    for (const name in value) {
      if (value[name]) {
        res += name + " ";
      }
    }
  }
  return res.trim();
}
var specialBooleanAttrs = `itemscope,allowfullscreen,disablepictureinpicture,disableremoteplayback,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly`;
var isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
var isBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
function includeBooleanAttr(value) {
  return !!value || value === "";
}
function looseCompareArrays(a, b, seen) {
  if (a.length !== b.length) return false;
  let equal = true;
  for (let i = 0; equal && i < a.length; i++) {
    equal = looseEqual(a[i], b[i], seen);
  }
  return equal;
}
function looseCompareCollections(a, b, seen) {
  if (a.size !== b.size) return false;
  const candidates = Array.from(b);
  const matched = new Uint8Array(candidates.length);
  for (const item of a) {
    let index = -1;
    for (let i = 0; i < candidates.length; i++) {
      if (!matched[i] && looseEqual(item, candidates[i], seen)) {
        index = i;
        break;
      }
    }
    if (index < 0) return false;
    matched[index] = 1;
  }
  return true;
}
function looseCompareObjects(a, b, seen) {
  let aValidType = isMap(a);
  let bValidType = isMap(b);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? looseCompareCollections(a, b, seen) : false;
  }
  aValidType = isSet(a);
  bValidType = isSet(b);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? looseCompareCollections(a, b, seen) : false;
  }
  const aKeysCount = Object.keys(a).length;
  const bKeysCount = Object.keys(b).length;
  if (aKeysCount !== bKeysCount) {
    return false;
  }
  for (const key in a) {
    const aHasKey = a.hasOwnProperty(key);
    const bHasKey = b.hasOwnProperty(key);
    if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key], seen)) {
      return false;
    }
  }
  return String(a) === String(b);
}
function looseCompareNested(a, b, seen, compare) {
  if (!seen) {
    seen = [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()];
  }
  const [seenA, seenB] = seen;
  if (seenA.has(a) || seenB.has(b)) {
    return seenA.get(a) === b && seenB.get(b) === a;
  }
  seenA.set(a, b);
  seenB.set(b, a);
  const equal = compare(a, b, seen);
  seenA.delete(a);
  seenB.delete(b);
  return equal;
}
function looseEqual(a, b, seen) {
  if (a === b) return true;
  let aValidType = isDate(a);
  let bValidType = isDate(b);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? a.getTime() === b.getTime() : false;
  }
  aValidType = isSymbol(a);
  bValidType = isSymbol(b);
  if (aValidType || bValidType) {
    return a === b;
  }
  aValidType = isArray(a);
  bValidType = isArray(b);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? looseCompareNested(a, b, seen, looseCompareArrays) : false;
  }
  aValidType = isObject(a);
  bValidType = isObject(b);
  if (aValidType || bValidType) {
    if (!aValidType || !bValidType) {
      return false;
    }
    return looseCompareNested(a, b, seen, looseCompareObjects);
  }
  return String(a) === String(b);
}
function looseIndexOf(arr, val) {
  return arr.findIndex((item) => looseEqual(item, val));
}
var isRef = (val) => {
  return !!(val && val["__v_isRef"] === true);
};
var toDisplayString = (val) => {
  return isString(val) ? val : val == null ? "" : isArray(val) || isObject(val) && (val.toString === objectToString || !isFunction(val.toString)) ? isRef(val) ? toDisplayString(val.value) : JSON.stringify(val, replacer, 2) : String(val);
};
var replacer = (_key, val) => {
  if (isRef(val)) {
    return replacer(_key, val.value);
  } else if (isMap(val)) {
    return {
      [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val2], i) => {
        entries[stringifySymbol(key, i) + " =>"] = val2;
        return entries;
      }, {})
    };
  } else if (isSet(val)) {
    return {
      [`Set(${val.size})`]: [...val.values()].map((v) => stringifySymbol(v))
    };
  } else if (isSymbol(val)) {
    return stringifySymbol(val);
  } else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
    return String(val);
  }
  return val;
};
var stringifySymbol = (v, i = "") => {
  var _a;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    isSymbol(v) ? `Symbol(${(_a = v.description) != null ? _a : i})` : v
  );
};
function normalizeCssVarValue(value) {
  if (value == null) {
    return "initial";
  }
  if (typeof value === "string") {
    return value === "" ? " " : value;
  }
  if (typeof value !== "number" || !Number.isFinite(value)) {
    if (false) {
      console.warn("[Vue warn] Invalid value used for CSS binding. Expected a string or a finite number but received:", value);
    }
  }
  return String(value);
}
/**
* @vue/reactivity v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function warn(msg, ...args) {
  console.warn(`[Vue warn] ${msg}`, ...args);
}
var activeEffectScope;
var EffectScope = class {
  // TODO isolatedDeclarations "__v_skip"
  constructor(detached = false) {
    this.detached = detached;
    this._active = true;
    this._on = 0;
    this.effects = [];
    this.cleanups = [];
    this._isPaused = false;
    this._warnOnRun = true;
    this.__v_skip = true;
    if (!detached && activeEffectScope) {
      if (activeEffectScope.active) {
        this.parent = activeEffectScope;
        this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
      } else {
        this._active = false;
        this._warnOnRun = false;
      }
    }
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = true;
      let i, l;
      if (this.scopes) {
        const scopes = this.scopes.slice();
        for (i = 0, l = scopes.length; i < l; i++) {
          scopes[i].pause();
        }
      }
      for (i = 0, l = this.effects.length; i < l; i++) {
        this.effects[i].pause();
      }
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active) {
      if (this._isPaused) {
        this._isPaused = false;
        let i, l;
        if (this.scopes) {
          const scopes = this.scopes.slice();
          for (i = 0, l = scopes.length; i < l; i++) {
            scopes[i].resume();
          }
        }
        const effects = this.effects.slice();
        for (i = 0, l = effects.length; i < l; i++) {
          effects[i].resume();
        }
      }
    }
  }
  run(fn) {
    if (this._active) {
      const currentEffectScope = activeEffectScope;
      try {
        activeEffectScope = this;
        return fn();
      } finally {
        activeEffectScope = currentEffectScope;
      }
    } else if (false) {
      warn(`cannot run an inactive effect scope.`);
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    if (++this._on === 1) {
      this.prevScope = activeEffectScope;
      activeEffectScope = this;
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (activeEffectScope === this) {
        activeEffectScope = this.prevScope;
      } else {
        let current = activeEffectScope;
        while (current) {
          if (current.prevScope === this) {
            current.prevScope = this.prevScope;
            break;
          }
          current = current.prevScope;
        }
      }
      this.prevScope = void 0;
    }
  }
  stop(fromParent) {
    if (this._active) {
      this._active = false;
      let i, l;
      for (i = 0, l = this.effects.length; i < l; i++) {
        this.effects[i].stop();
      }
      this.effects.length = 0;
      for (i = 0, l = this.cleanups.length; i < l; i++) {
        this.cleanups[i]();
      }
      this.cleanups.length = 0;
      if (this.scopes) {
        const scopes = this.scopes.slice();
        for (i = 0, l = scopes.length; i < l; i++) {
          scopes[i].stop(true);
        }
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !fromParent) {
        const last = this.parent.scopes.pop();
        if (last && last !== this) {
          this.parent.scopes[this.index] = last;
          last.index = this.index;
        }
      }
      this.parent = void 0;
    }
  }
};
function getCurrentScope() {
  return activeEffectScope;
}
function onScopeDispose(fn, failSilently = false) {
  if (activeEffectScope) {
    if (activeEffectScope.active) {
      activeEffectScope.cleanups.push(fn);
    } else {
      fn();
    }
  } else if (false) {
    warn(`onScopeDispose() is called when there is no active effect scope to be associated with.`);
  }
}
var activeSub;
var pausedQueueEffects = /* @__PURE__ */ new WeakSet();
var ReactiveEffect = class {
  constructor(fn) {
    this.fn = fn;
    this.deps = void 0;
    this.depsTail = void 0;
    this.flags = 1 | 4;
    this.next = void 0;
    this.cleanup = void 0;
    this.scheduler = void 0;
    if (activeEffectScope) {
      if (activeEffectScope.active) {
        activeEffectScope.effects.push(this);
      } else {
        this.flags &= -2;
      }
    }
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    if (this.flags & 64) {
      this.flags &= -65;
      if (pausedQueueEffects.has(this)) {
        pausedQueueEffects.delete(this);
        this.trigger();
      }
    }
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags & 2 && !(this.flags & 32)) {
      return;
    }
    if (!(this.flags & 8)) {
      batch(this);
    }
  }
  run() {
    if (!(this.flags & 1)) {
      return this.fn();
    }
    this.flags |= 2;
    cleanupEffect(this);
    prepareDeps(this);
    const prevEffect = activeSub;
    const prevShouldTrack = shouldTrack;
    activeSub = this;
    shouldTrack = true;
    try {
      return this.fn();
    } finally {
      if (false) {
        warn("Active effect was not restored correctly - this is likely a Vue internal bug.");
      }
      cleanupDeps(this);
      activeSub = prevEffect;
      shouldTrack = prevShouldTrack;
      this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let link = this.deps; link; link = link.nextDep) {
        removeSub(link);
      }
      this.deps = this.depsTail = void 0;
      cleanupEffect(this);
      this.onStop && this.onStop();
      this.flags &= -2;
    }
  }
  trigger() {
    if (this.flags & 64) {
      pausedQueueEffects.add(this);
    } else if (this.scheduler) {
      this.scheduler();
    } else {
      this.runIfDirty();
    }
  }
  /**
   * @internal
   */
  runIfDirty() {
    if (isDirty(this)) {
      this.run();
    }
  }
  get dirty() {
    return isDirty(this);
  }
};
var batchDepth = 0;
var batchedSub;
var batchedComputed;
function batch(sub, isComputed = false) {
  sub.flags |= 8;
  if (isComputed) {
    sub.next = batchedComputed;
    batchedComputed = sub;
    return;
  }
  sub.next = batchedSub;
  batchedSub = sub;
}
function startBatch() {
  batchDepth++;
}
function endBatch() {
  if (--batchDepth > 0) {
    return;
  }
  if (batchedComputed) {
    let e = batchedComputed;
    batchedComputed = void 0;
    while (e) {
      const next = e.next;
      e.next = void 0;
      e.flags &= -9;
      e = next;
    }
  }
  let error;
  while (batchedSub) {
    let e = batchedSub;
    batchedSub = void 0;
    while (e) {
      const next = e.next;
      e.next = void 0;
      e.flags &= -9;
      if (e.flags & 1) {
        try {
          ;
          e.trigger();
        } catch (err) {
          if (!error) error = err;
        }
      }
      e = next;
    }
  }
  if (error) throw error;
}
function prepareDeps(sub) {
  for (let link = sub.deps; link; link = link.nextDep) {
    link.version = -1;
    link.prevActiveLink = link.dep.activeLink;
    link.dep.activeLink = link;
  }
}
function cleanupDeps(sub) {
  let head;
  let tail = sub.depsTail;
  let link = tail;
  while (link) {
    const prev = link.prevDep;
    if (link.version === -1) {
      if (link === tail) tail = prev;
      removeSub(link);
      removeDep(link);
    } else {
      head = link;
    }
    link.dep.activeLink = link.prevActiveLink;
    link.prevActiveLink = void 0;
    link = prev;
  }
  sub.deps = head;
  sub.depsTail = tail;
}
function isDirty(sub) {
  for (let link = sub.deps; link; link = link.nextDep) {
    if (link.dep.version !== link.version || link.dep.computed && (refreshComputed(link.dep.computed) || link.dep.version !== link.version)) {
      return true;
    }
  }
  if (sub._dirty) {
    return true;
  }
  return false;
}
function refreshComputed(computed3) {
  if (computed3.flags & 4 && !(computed3.flags & 16)) {
    return;
  }
  computed3.flags &= -17;
  if (computed3.globalVersion === globalVersion) {
    return;
  }
  computed3.globalVersion = globalVersion;
  if (!computed3.isSSR && computed3.flags & 128 && (!computed3.deps && !computed3._dirty || !isDirty(computed3))) {
    return;
  }
  computed3.flags |= 2;
  const dep = computed3.dep;
  const prevSub = activeSub;
  const prevShouldTrack = shouldTrack;
  activeSub = computed3;
  shouldTrack = true;
  try {
    prepareDeps(computed3);
    const value = computed3.fn(computed3._value);
    if (dep.version === 0 || hasChanged(value, computed3._value)) {
      computed3.flags |= 128;
      computed3._value = value;
      dep.version++;
    }
  } catch (err) {
    dep.version++;
    throw err;
  } finally {
    activeSub = prevSub;
    shouldTrack = prevShouldTrack;
    cleanupDeps(computed3);
    computed3.flags &= -3;
  }
}
function removeSub(link, soft = false) {
  const {
    dep,
    prevSub,
    nextSub
  } = link;
  if (prevSub) {
    prevSub.nextSub = nextSub;
    link.prevSub = void 0;
  }
  if (nextSub) {
    nextSub.prevSub = prevSub;
    link.nextSub = void 0;
  }
  if (false) {
    dep.subsHead = nextSub;
  }
  if (dep.subs === link) {
    dep.subs = prevSub;
    if (!prevSub && dep.computed) {
      dep.computed.flags &= -5;
      for (let l = dep.computed.deps; l; l = l.nextDep) {
        removeSub(l, true);
      }
    }
  }
  if (!soft && !--dep.sc && dep.map) {
    dep.map.delete(dep.key);
  }
}
function removeDep(link) {
  const {
    prevDep,
    nextDep
  } = link;
  if (prevDep) {
    prevDep.nextDep = nextDep;
    link.prevDep = void 0;
  }
  if (nextDep) {
    nextDep.prevDep = prevDep;
    link.nextDep = void 0;
  }
}
var shouldTrack = true;
var trackStack = [];
function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}
function resetTracking() {
  const last = trackStack.pop();
  shouldTrack = last === void 0 ? true : last;
}
function cleanupEffect(e) {
  const {
    cleanup
  } = e;
  e.cleanup = void 0;
  if (cleanup) {
    const prevSub = activeSub;
    activeSub = void 0;
    try {
      cleanup();
    } finally {
      activeSub = prevSub;
    }
  }
}
var globalVersion = 0;
var Link = class {
  constructor(sub, dep) {
    this.sub = sub;
    this.dep = dep;
    this.version = dep.version;
    this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
};
var Dep = class {
  // TODO isolatedDeclarations "__v_skip"
  constructor(computed3) {
    this.computed = computed3;
    this.version = 0;
    this.activeLink = void 0;
    this.subs = void 0;
    this.map = void 0;
    this.key = void 0;
    this.sc = 0;
    this.__v_skip = true;
    if (false) {
      this.subsHead = void 0;
    }
  }
  track(debugInfo) {
    if (!activeSub || !shouldTrack || activeSub === this.computed) {
      return;
    }
    let link = this.activeLink;
    if (link === void 0 || link.sub !== activeSub) {
      link = this.activeLink = new Link(activeSub, this);
      if (!activeSub.deps) {
        activeSub.deps = activeSub.depsTail = link;
      } else {
        link.prevDep = activeSub.depsTail;
        activeSub.depsTail.nextDep = link;
        activeSub.depsTail = link;
      }
      addSub(link);
    } else if (link.version === -1) {
      link.version = this.version;
      if (link.nextDep) {
        const next = link.nextDep;
        next.prevDep = link.prevDep;
        if (link.prevDep) {
          link.prevDep.nextDep = next;
        }
        link.prevDep = activeSub.depsTail;
        link.nextDep = void 0;
        activeSub.depsTail.nextDep = link;
        activeSub.depsTail = link;
        if (activeSub.deps === link) {
          activeSub.deps = next;
        }
      }
    }
    if (false) {
      activeSub.onTrack(extend({
        effect: activeSub
      }, debugInfo));
    }
    return link;
  }
  trigger(debugInfo) {
    this.version++;
    globalVersion++;
    this.notify(debugInfo);
  }
  notify(debugInfo) {
    startBatch();
    try {
      if (false) {
        for (let head = this.subsHead; head; head = head.nextSub) {
          if (head.sub.onTrigger && !(head.sub.flags & 8)) {
            head.sub.onTrigger(extend({
              effect: head.sub
            }, debugInfo));
          }
        }
      }
      for (let link = this.subs; link; link = link.prevSub) {
        if (link.sub.notify()) {
          ;
          link.sub.dep.notify();
        }
      }
    } finally {
      endBatch();
    }
  }
};
function addSub(link) {
  link.dep.sc++;
  if (link.sub.flags & 4) {
    const computed3 = link.dep.computed;
    if (computed3 && !link.dep.subs) {
      computed3.flags |= 4 | 16;
      for (let l = computed3.deps; l; l = l.nextDep) {
        addSub(l);
      }
    }
    const currentTail = link.dep.subs;
    if (currentTail !== link) {
      link.prevSub = currentTail;
      if (currentTail) currentTail.nextSub = link;
    }
    if (false) {
      link.dep.subsHead = link;
    }
    link.dep.subs = link;
  }
}
var targetMap = /* @__PURE__ */ new WeakMap();
var ITERATE_KEY = /* @__PURE__ */ Symbol(false ? "Object iterate" : "");
var MAP_KEY_ITERATE_KEY = /* @__PURE__ */ Symbol(false ? "Map keys iterate" : "");
var ARRAY_ITERATE_KEY = /* @__PURE__ */ Symbol(false ? "Array iterate" : "");
function track(target, type, key) {
  if (shouldTrack && activeSub) {
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, dep = new Dep());
      dep.map = depsMap;
      dep.key = key;
    }
    if (false) {
      dep.track({
        target,
        type,
        key
      });
    } else {
      dep.track();
    }
  }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    globalVersion++;
    return;
  }
  const run = (dep) => {
    if (dep) {
      if (false) {
        dep.trigger({
          target,
          type,
          key,
          newValue,
          oldValue,
          oldTarget
        });
      } else {
        dep.trigger();
      }
    }
  };
  startBatch();
  if (type === "clear") {
    depsMap.forEach(run);
  } else {
    const targetIsArray = isArray(target);
    const isArrayIndex = targetIsArray && isIntegerKey(key);
    if (targetIsArray && key === "length") {
      const newLength = Number(newValue);
      depsMap.forEach((dep, key2) => {
        if (key2 === "length" || key2 === ARRAY_ITERATE_KEY || !isSymbol(key2) && key2 >= newLength) {
          run(dep);
        }
      });
    } else {
      if (key !== void 0 || depsMap.has(void 0)) {
        run(depsMap.get(key));
      }
      if (isArrayIndex) {
        run(depsMap.get(ARRAY_ITERATE_KEY));
      }
      switch (type) {
        case "add":
          if (!targetIsArray) {
            run(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              run(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          } else if (isArrayIndex) {
            run(depsMap.get("length"));
          }
          break;
        case "delete":
          if (!targetIsArray) {
            run(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              run(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          }
          break;
        case "set":
          if (isMap(target)) {
            run(depsMap.get(ITERATE_KEY));
          }
          break;
      }
    }
  }
  endBatch();
}
function getDepFromReactive(object, key) {
  const depMap = targetMap.get(object);
  return depMap && depMap.get(key);
}
function reactiveReadArray(array) {
  const raw = /* @__PURE__ */ toRaw(array);
  if (raw === array) return raw;
  track(raw, "iterate", ARRAY_ITERATE_KEY);
  if (/* @__PURE__ */ isShallow(array)) return raw;
  if (!/* @__PURE__ */ isReadonly(array)) return raw.map(toReactive);
  return /* @__PURE__ */ isReactive(array) ? raw.map((item) => toReadonly(toReactive(item))) : raw.map(toReadonly);
}
function shallowReadArray(arr) {
  track(arr = /* @__PURE__ */ toRaw(arr), "iterate", ARRAY_ITERATE_KEY);
  return arr;
}
function toWrapped(target, item) {
  if (/* @__PURE__ */ isReadonly(target)) {
    return /* @__PURE__ */ isReactive(target) ? toReadonly(toReactive(item)) : toReadonly(item);
  }
  return toReactive(item);
}
var arrayInstrumentations = {
  __proto__: null,
  [Symbol.iterator]() {
    return iterator(this, Symbol.iterator, (item) => toWrapped(this, item));
  },
  concat(...args) {
    return reactiveReadArray(this).concat(...args.map((x) => isArray(x) ? reactiveReadArray(x) : x));
  },
  entries() {
    return iterator(this, "entries", (value) => {
      value[1] = toWrapped(this, value[1]);
      return value;
    });
  },
  every(fn, thisArg) {
    return apply(this, "every", fn, thisArg, void 0, arguments);
  },
  filter(fn, thisArg) {
    return apply(this, "filter", fn, thisArg, (v) => v.map((item) => toWrapped(this, item)), arguments);
  },
  find(fn, thisArg) {
    return apply(this, "find", fn, thisArg, (item) => toWrapped(this, item), arguments);
  },
  findIndex(fn, thisArg) {
    return apply(this, "findIndex", fn, thisArg, void 0, arguments);
  },
  findLast(fn, thisArg) {
    return apply(this, "findLast", fn, thisArg, (item) => toWrapped(this, item), arguments);
  },
  findLastIndex(fn, thisArg) {
    return apply(this, "findLastIndex", fn, thisArg, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(fn, thisArg) {
    return apply(this, "forEach", fn, thisArg, void 0, arguments);
  },
  includes(...args) {
    return searchProxy(this, "includes", args);
  },
  indexOf(...args) {
    return searchProxy(this, "indexOf", args);
  },
  join(separator) {
    return reactiveReadArray(this).join(separator);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...args) {
    return searchProxy(this, "lastIndexOf", args);
  },
  map(fn, thisArg) {
    return apply(this, "map", fn, thisArg, void 0, arguments);
  },
  pop() {
    return noTracking(this, "pop");
  },
  push(...args) {
    return noTracking(this, "push", args);
  },
  reduce(fn, ...args) {
    return reduce(this, "reduce", fn, args);
  },
  reduceRight(fn, ...args) {
    return reduce(this, "reduceRight", fn, args);
  },
  shift() {
    return noTracking(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(fn, thisArg) {
    return apply(this, "some", fn, thisArg, void 0, arguments);
  },
  splice(...args) {
    return noTracking(this, "splice", args);
  },
  toReversed() {
    return reactiveReadArray(this).toReversed();
  },
  toSorted(comparer) {
    return reactiveReadArray(this).toSorted(comparer);
  },
  toSpliced(...args) {
    return reactiveReadArray(this).toSpliced(...args);
  },
  unshift(...args) {
    return noTracking(this, "unshift", args);
  },
  values() {
    return iterator(this, "values", (item) => toWrapped(this, item));
  }
};
function iterator(self2, method, wrapValue) {
  const arr = shallowReadArray(self2);
  const methodFn = arr[method];
  const iter = methodFn.call(arr);
  if (arr !== self2 && !/* @__PURE__ */ isShallow(self2)) {
    if (iter[Symbol.toStringTag] === "Array Iterator") {
      const wrapped = Object.create(Object.getPrototypeOf(iter));
      wrapped.next = () => wrapResult(iter.next(), wrapValue);
      if (methodFn !== arrayProto[method]) {
        Object.defineProperties(wrapped, {
          return: {
            get() {
              const fn = iter.return;
              return typeof fn === "function" ? fn.bind(iter) : fn;
            }
          },
          throw: {
            get() {
              const fn = iter.throw;
              return typeof fn === "function" ? fn.bind(iter) : fn;
            }
          }
        });
      }
      return wrapped;
    }
    iter._next = iter.next;
    iter.next = () => wrapResult(iter._next(), wrapValue);
  }
  return iter;
}
function wrapResult(result, wrapValue) {
  if (!result.done) {
    result.value = wrapValue(result.value);
  }
  return result;
}
var arrayProto = Array.prototype;
function apply(self2, method, fn, thisArg, wrappedRetFn, args) {
  const arr = shallowReadArray(self2);
  const needsWrap = arr !== self2 && !/* @__PURE__ */ isShallow(self2);
  const methodFn = arr[method];
  if (methodFn !== arrayProto[method]) {
    const result2 = methodFn.apply(self2, args);
    return needsWrap ? toReactive(result2) : result2;
  }
  let wrappedFn = fn;
  if (arr !== self2) {
    if (needsWrap) {
      wrappedFn = function(item, index) {
        return fn.call(this, toWrapped(self2, item), index, self2);
      };
    } else if (fn.length > 2) {
      wrappedFn = function(item, index) {
        return fn.call(this, item, index, self2);
      };
    }
  }
  const result = methodFn.call(arr, wrappedFn, thisArg);
  return needsWrap && wrappedRetFn ? wrappedRetFn(result) : result;
}
function reduce(self2, method, fn, args) {
  const arr = shallowReadArray(self2);
  const needsWrap = arr !== self2 && !/* @__PURE__ */ isShallow(self2);
  let wrappedFn = fn;
  let wrapInitialAccumulator = false;
  if (arr !== self2) {
    if (needsWrap) {
      wrapInitialAccumulator = args.length === 0;
      wrappedFn = function(acc, item, index) {
        if (wrapInitialAccumulator) {
          wrapInitialAccumulator = false;
          acc = toWrapped(self2, acc);
        }
        return fn.call(this, acc, toWrapped(self2, item), index, self2);
      };
    } else if (fn.length > 3) {
      wrappedFn = function(acc, item, index) {
        return fn.call(this, acc, item, index, self2);
      };
    }
  }
  const result = arr[method](wrappedFn, ...args);
  return wrapInitialAccumulator ? toWrapped(self2, result) : result;
}
function searchProxy(self2, method, args) {
  const arr = /* @__PURE__ */ toRaw(self2);
  track(arr, "iterate", ARRAY_ITERATE_KEY);
  const res = arr[method](...args);
  if ((res === -1 || res === false) && /* @__PURE__ */ isProxy(args[0])) {
    args[0] = /* @__PURE__ */ toRaw(args[0]);
    return arr[method](...args);
  }
  return res;
}
function noTracking(self2, method, args = []) {
  pauseTracking();
  startBatch();
  const res = (/* @__PURE__ */ toRaw(self2))[method].apply(self2, args);
  endBatch();
  resetTracking();
  return res;
}
var isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
var builtInSymbols = /* @__PURE__ */ new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key) => key !== "arguments" && key !== "caller").map((key) => Symbol[key]).filter(isSymbol));
function hasOwnProperty2(key) {
  if (!isSymbol(key)) key = String(key);
  const obj = /* @__PURE__ */ toRaw(this);
  track(obj, "has", key);
  return obj.hasOwnProperty(key);
}
var BaseReactiveHandler = class {
  constructor(_isReadonly = false, _isShallow = false) {
    this._isReadonly = _isReadonly;
    this._isShallow = _isShallow;
  }
  get(target, key, receiver) {
    if (key === "__v_skip") return target["__v_skip"];
    const isReadonly2 = this._isReadonly, isShallow2 = this._isShallow;
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_isShallow") {
      return isShallow2;
    } else if (key === "__v_raw") {
      if (receiver === (isReadonly2 ? isShallow2 ? shallowReadonlyMap : readonlyMap : isShallow2 ? shallowReactiveMap : reactiveMap).get(target) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(target) === Object.getPrototypeOf(receiver)) {
        return target;
      }
      return;
    }
    const targetIsArray = isArray(target);
    if (!isReadonly2) {
      let fn;
      if (targetIsArray && (fn = arrayInstrumentations[key])) {
        return fn;
      }
      if (key === "hasOwnProperty") {
        return hasOwnProperty2;
      }
    }
    const res = Reflect.get(
      target,
      key,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ isRef2(target) ? target : receiver
    );
    if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
      return res;
    }
    if (!isReadonly2) {
      track(target, "get", key);
    }
    if (isShallow2) {
      return res;
    }
    if (/* @__PURE__ */ isRef2(res)) {
      const value = targetIsArray && isIntegerKey(key) ? res : res.value;
      return isReadonly2 && isObject(value) ? /* @__PURE__ */ readonly(value) : value;
    }
    if (isObject(res)) {
      return isReadonly2 ? /* @__PURE__ */ readonly(res) : /* @__PURE__ */ reactive(res);
    }
    return res;
  }
};
var MutableReactiveHandler = class extends BaseReactiveHandler {
  constructor(isShallow2 = false) {
    super(false, isShallow2);
  }
  set(target, key, value, receiver) {
    let oldValue = target[key];
    const isArrayWithIntegerKey = isArray(target) && isIntegerKey(key);
    if (!this._isShallow) {
      const isOldValueReadonly = /* @__PURE__ */ isReadonly(oldValue);
      if (!/* @__PURE__ */ isShallow(value) && !/* @__PURE__ */ isReadonly(value)) {
        oldValue = /* @__PURE__ */ toRaw(oldValue);
        value = /* @__PURE__ */ toRaw(value);
      }
      if (!isArrayWithIntegerKey && /* @__PURE__ */ isRef2(oldValue) && !/* @__PURE__ */ isRef2(value)) {
        if (isOldValueReadonly) {
          if (false) {
            warn(`Set operation on key "${String(key)}" failed: target is readonly.`, target[key]);
          }
          return true;
        } else {
          oldValue.value = value;
          return true;
        }
      }
    }
    const hadKey = isArrayWithIntegerKey ? Number(key) < target.length : hasOwn(target, key);
    const result = Reflect.set(target, key, value, /* @__PURE__ */ isRef2(target) ? target : receiver);
    if (target === /* @__PURE__ */ toRaw(receiver) && result) {
      if (!hadKey) {
        trigger(target, "add", key, value);
      } else if (hasChanged(value, oldValue)) {
        trigger(target, "set", key, value, oldValue);
      }
    }
    return result;
  }
  deleteProperty(target, key) {
    const hadKey = hasOwn(target, key);
    const oldValue = target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) {
      trigger(target, "delete", key, void 0, oldValue);
    }
    return result;
  }
  has(target, key) {
    const result = Reflect.has(target, key);
    if (!isSymbol(key) || !builtInSymbols.has(key)) {
      track(target, "has", key);
    }
    return result;
  }
  ownKeys(target) {
    track(target, "iterate", isArray(target) ? "length" : ITERATE_KEY);
    return Reflect.ownKeys(target);
  }
};
var ReadonlyReactiveHandler = class extends BaseReactiveHandler {
  constructor(isShallow2 = false) {
    super(true, isShallow2);
  }
  set(target, key) {
    if (false) {
      warn(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
    }
    return true;
  }
  deleteProperty(target, key) {
    if (false) {
      warn(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
    }
    return true;
  }
};
var mutableHandlers = /* @__PURE__ */ new MutableReactiveHandler();
var readonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler();
var shallowReactiveHandlers = /* @__PURE__ */ new MutableReactiveHandler(true);
var shallowReadonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler(true);
var toShallow = (value) => value;
var getProto = (v) => Reflect.getPrototypeOf(v);
function createIterableMethod(method, isReadonly2, isShallow2) {
  return function(...args) {
    const target = this["__v_raw"];
    const rawTarget = /* @__PURE__ */ toRaw(target);
    const targetIsMap = isMap(rawTarget);
    const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
    const isKeyOnly = method === "keys" && targetIsMap;
    const innerIterator = target[method](...args);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
    return extend(
      // inheriting all iterator properties
      Object.create(innerIterator),
      {
        // iterator protocol
        next() {
          const {
            value,
            done
          } = innerIterator.next();
          return done ? {
            value,
            done
          } : {
            value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
            done
          };
        }
      }
    );
  };
}
function createReadonlyMethod(type) {
  return function(...args) {
    if (false) {
      const key = args[0] ? `on key "${args[0]}" ` : ``;
      warn(`${capitalize(type)} operation ${key}failed: target is readonly.`, /* @__PURE__ */ toRaw(this));
    }
    return type === "delete" ? false : type === "clear" ? void 0 : this;
  };
}
function createInstrumentations(readonly2, shallow) {
  const instrumentations = {
    get(key) {
      const target = this["__v_raw"];
      const rawTarget = /* @__PURE__ */ toRaw(target);
      const rawKey = /* @__PURE__ */ toRaw(key);
      if (!readonly2) {
        if (hasChanged(key, rawKey)) {
          track(rawTarget, "get", key);
        }
        track(rawTarget, "get", rawKey);
      }
      const {
        has
      } = getProto(rawTarget);
      const wrap = shallow ? toShallow : readonly2 ? toReadonly : toReactive;
      if (has.call(rawTarget, key)) {
        return wrap(target.get(key));
      } else if (has.call(rawTarget, rawKey)) {
        return wrap(target.get(rawKey));
      } else if (target !== rawTarget) {
        target.get(key);
      }
    },
    get size() {
      const target = this["__v_raw"];
      !readonly2 && track(/* @__PURE__ */ toRaw(target), "iterate", ITERATE_KEY);
      return target.size;
    },
    has(key) {
      const target = this["__v_raw"];
      const rawTarget = /* @__PURE__ */ toRaw(target);
      const rawKey = /* @__PURE__ */ toRaw(key);
      if (!readonly2) {
        if (hasChanged(key, rawKey)) {
          track(rawTarget, "has", key);
        }
        track(rawTarget, "has", rawKey);
      }
      return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
    },
    forEach(callback, thisArg) {
      const observed = this;
      const target = observed["__v_raw"];
      const rawTarget = /* @__PURE__ */ toRaw(target);
      const wrap = shallow ? toShallow : readonly2 ? toReadonly : toReactive;
      !readonly2 && track(rawTarget, "iterate", ITERATE_KEY);
      return target.forEach((value, key) => {
        return callback.call(thisArg, wrap(value), wrap(key), observed);
      });
    }
  };
  extend(instrumentations, readonly2 ? {
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear")
  } : {
    add(value) {
      const target = /* @__PURE__ */ toRaw(this);
      const proto = getProto(target);
      const rawValue = /* @__PURE__ */ toRaw(value);
      const valueToAdd = !shallow && !/* @__PURE__ */ isShallow(value) && !/* @__PURE__ */ isReadonly(value) ? rawValue : value;
      const hadKey = proto.has.call(target, valueToAdd) || hasChanged(value, valueToAdd) && proto.has.call(target, value) || hasChanged(rawValue, valueToAdd) && proto.has.call(target, rawValue);
      if (!hadKey) {
        target.add(valueToAdd);
        trigger(target, "add", valueToAdd, valueToAdd);
      }
      return this;
    },
    set(key, value) {
      if (!shallow && !/* @__PURE__ */ isShallow(value) && !/* @__PURE__ */ isReadonly(value)) {
        value = /* @__PURE__ */ toRaw(value);
      }
      const target = /* @__PURE__ */ toRaw(this);
      const {
        has,
        get
      } = getProto(target);
      let hadKey = has.call(target, key);
      if (!hadKey) {
        key = /* @__PURE__ */ toRaw(key);
        hadKey = has.call(target, key);
      } else if (false) {
        checkIdentityKeys(target, has, key);
      }
      const oldValue = get.call(target, key);
      target.set(key, value);
      if (!hadKey) {
        trigger(target, "add", key, value);
      } else if (hasChanged(value, oldValue)) {
        trigger(target, "set", key, value, oldValue);
      }
      return this;
    },
    delete(key) {
      const target = /* @__PURE__ */ toRaw(this);
      const {
        has,
        get
      } = getProto(target);
      let hadKey = has.call(target, key);
      if (!hadKey) {
        key = /* @__PURE__ */ toRaw(key);
        hadKey = has.call(target, key);
      } else if (false) {
        checkIdentityKeys(target, has, key);
      }
      const oldValue = get ? get.call(target, key) : void 0;
      const result = target.delete(key);
      if (hadKey) {
        trigger(target, "delete", key, void 0, oldValue);
      }
      return result;
    },
    clear() {
      const target = /* @__PURE__ */ toRaw(this);
      const hadItems = target.size !== 0;
      const oldTarget = false ? isMap(target) ? new Map(target) : new Set(target) : void 0;
      const result = target.clear();
      if (hadItems) {
        trigger(target, "clear", void 0, void 0, oldTarget);
      }
      return result;
    }
  });
  const iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
  iteratorMethods.forEach((method) => {
    instrumentations[method] = createIterableMethod(method, readonly2, shallow);
  });
  return instrumentations;
}
function createInstrumentationGetter(isReadonly2, shallow) {
  const instrumentations = createInstrumentations(isReadonly2, shallow);
  return (target, key, receiver) => {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_isShallow") {
      return shallow;
    } else if (key === "__v_raw") {
      return target;
    }
    return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
  };
}
var mutableCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, false)
};
var shallowCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, true)
};
var readonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, false)
};
var shallowReadonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, true)
};
var reactiveMap = /* @__PURE__ */ new WeakMap();
var shallowReactiveMap = /* @__PURE__ */ new WeakMap();
var readonlyMap = /* @__PURE__ */ new WeakMap();
var shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
function targetTypeMap(rawType) {
  switch (rawType) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
// @__NO_SIDE_EFFECTS__
function reactive(target) {
  if (/* @__PURE__ */ isReadonly(target)) {
    return target;
  }
  return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
// @__NO_SIDE_EFFECTS__
function shallowReactive(target) {
  return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
}
// @__NO_SIDE_EFFECTS__
function readonly(target) {
  return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
// @__NO_SIDE_EFFECTS__
function shallowReadonly(target) {
  return createReactiveObject(target, true, shallowReadonlyHandlers, shallowReadonlyCollectionHandlers, shallowReadonlyMap);
}
function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
  if (!isObject(target)) {
    if (false) {
      warn(`value cannot be made ${isReadonly2 ? "readonly" : "reactive"}: ${String(target)}`);
    }
    return target;
  }
  if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
    return target;
  }
  if (target["__v_skip"] || !Object.isExtensible(target)) {
    return target;
  }
  const existingProxy = proxyMap.get(target);
  if (existingProxy) {
    return existingProxy;
  }
  const targetType = targetTypeMap(toRawType(target));
  if (targetType === 0) {
    return target;
  }
  const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
  proxyMap.set(target, proxy);
  return proxy;
}
// @__NO_SIDE_EFFECTS__
function isReactive(value) {
  if (/* @__PURE__ */ isReadonly(value)) {
    return /* @__PURE__ */ isReactive(value["__v_raw"]);
  }
  return !!(value && value["__v_isReactive"]);
}
// @__NO_SIDE_EFFECTS__
function isReadonly(value) {
  return !!(value && value["__v_isReadonly"]);
}
// @__NO_SIDE_EFFECTS__
function isShallow(value) {
  return !!(value && value["__v_isShallow"]);
}
// @__NO_SIDE_EFFECTS__
function isProxy(value) {
  return value ? !!value["__v_raw"] : false;
}
// @__NO_SIDE_EFFECTS__
function toRaw(observed) {
  const raw = observed && observed["__v_raw"];
  return raw ? /* @__PURE__ */ toRaw(raw) : observed;
}
function markRaw(value) {
  if (!hasOwn(value, "__v_skip") && Object.isExtensible(value)) {
    def(value, "__v_skip", true);
  }
  return value;
}
var toReactive = (value) => isObject(value) ? /* @__PURE__ */ reactive(value) : value;
var toReadonly = (value) => isObject(value) ? /* @__PURE__ */ readonly(value) : value;
// @__NO_SIDE_EFFECTS__
function isRef2(r) {
  return r ? r["__v_isRef"] === true : false;
}
// @__NO_SIDE_EFFECTS__
function ref(value) {
  return createRef(value, false);
}
// @__NO_SIDE_EFFECTS__
function shallowRef(value) {
  return createRef(value, true);
}
function createRef(rawValue, shallow) {
  if (/* @__PURE__ */ isRef2(rawValue)) {
    return rawValue;
  }
  return new RefImpl(rawValue, shallow);
}
var RefImpl = class {
  constructor(value, isShallow2) {
    this.dep = new Dep();
    this["__v_isRef"] = true;
    this["__v_isShallow"] = false;
    this._rawValue = isShallow2 ? value : /* @__PURE__ */ toRaw(value);
    this._value = isShallow2 ? value : toReactive(value);
    this["__v_isShallow"] = isShallow2;
  }
  get value() {
    if (false) {
      this.dep.track({
        target: this,
        type: "get",
        key: "value"
      });
    } else {
      this.dep.track();
    }
    return this._value;
  }
  set value(newValue) {
    const oldValue = this._rawValue;
    const useDirectValue = this["__v_isShallow"] || /* @__PURE__ */ isShallow(newValue) || /* @__PURE__ */ isReadonly(newValue);
    newValue = useDirectValue ? newValue : /* @__PURE__ */ toRaw(newValue);
    if (hasChanged(newValue, oldValue)) {
      this._rawValue = newValue;
      this._value = useDirectValue ? newValue : toReactive(newValue);
      if (false) {
        this.dep.trigger({
          target: this,
          type: "set",
          key: "value",
          newValue,
          oldValue
        });
      } else {
        this.dep.trigger();
      }
    }
  }
};
function unref(ref2) {
  return /* @__PURE__ */ isRef2(ref2) ? ref2.value : ref2;
}
var shallowUnwrapHandlers = {
  get: (target, key, receiver) => key === "__v_raw" ? target : unref(Reflect.get(target, key, receiver)),
  set: (target, key, value, receiver) => {
    const oldValue = target[key];
    if (/* @__PURE__ */ isRef2(oldValue) && !/* @__PURE__ */ isRef2(value)) {
      oldValue.value = value;
      return true;
    } else {
      return Reflect.set(target, key, value, receiver);
    }
  }
};
function proxyRefs(objectWithRefs) {
  return /* @__PURE__ */ isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
// @__NO_SIDE_EFFECTS__
function toRefs(object) {
  if (false) {
    warn(`toRefs() expects a reactive object but received a plain one.`);
  }
  const ret = isArray(object) ? new Array(object.length) : {};
  for (const key in object) {
    ret[key] = propertyToRef(object, key);
  }
  return ret;
}
var ObjectRefImpl = class {
  constructor(_object, key, _defaultValue) {
    this._object = _object;
    this._defaultValue = _defaultValue;
    this["__v_isRef"] = true;
    this._value = void 0;
    this._key = isSymbol(key) ? key : String(key);
    this._raw = /* @__PURE__ */ toRaw(_object);
    let shallow = true;
    let obj = _object;
    if (!isArray(_object) || isSymbol(this._key) || !isIntegerKey(this._key)) {
      do {
        shallow = !/* @__PURE__ */ isProxy(obj) || /* @__PURE__ */ isShallow(obj);
      } while (shallow && (obj = obj["__v_raw"]));
    }
    this._shallow = shallow;
  }
  get value() {
    let val = this._object[this._key];
    if (this._shallow) {
      val = unref(val);
    }
    return this._value = val === void 0 ? this._defaultValue : val;
  }
  set value(newVal) {
    if (this._shallow && /* @__PURE__ */ isRef2(this._raw[this._key])) {
      const nestedRef = this._object[this._key];
      if (/* @__PURE__ */ isRef2(nestedRef)) {
        nestedRef.value = newVal;
        return;
      }
    }
    this._object[this._key] = newVal;
  }
  get dep() {
    return getDepFromReactive(this._raw, this._key);
  }
};
var GetterRefImpl = class {
  constructor(_getter) {
    this._getter = _getter;
    this["__v_isRef"] = true;
    this["__v_isReadonly"] = true;
    this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
};
// @__NO_SIDE_EFFECTS__
function toRef(source, key, defaultValue) {
  if (/* @__PURE__ */ isRef2(source)) {
    return source;
  } else if (isFunction(source)) {
    return new GetterRefImpl(source);
  } else if (isObject(source) && arguments.length > 1) {
    return propertyToRef(source, key, defaultValue);
  } else {
    return /* @__PURE__ */ ref(source);
  }
}
function propertyToRef(source, key, defaultValue) {
  return new ObjectRefImpl(source, key, defaultValue);
}
var ComputedRefImpl = class {
  constructor(fn, setter, isSSR) {
    this.fn = fn;
    this.setter = setter;
    this._value = void 0;
    this.dep = new Dep(this);
    this.__v_isRef = true;
    this.deps = void 0;
    this.depsTail = void 0;
    this.flags = 16;
    this.globalVersion = globalVersion - 1;
    this.next = void 0;
    this.effect = this;
    this["__v_isReadonly"] = !setter;
    this.isSSR = isSSR;
  }
  /**
   * @internal
   */
  notify() {
    this.flags |= 16;
    if (!(this.flags & 8) && // avoid infinite self recursion
    activeSub !== this) {
      batch(this, true);
      return true;
    } else if (false) ;
  }
  get value() {
    const link = false ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    refreshComputed(this);
    if (link) {
      link.version = this.dep.version;
    }
    return this._value;
  }
  set value(newValue) {
    if (this.setter) {
      this.setter(newValue);
    } else if (false) {
      warn("Write operation failed: computed value is readonly");
    }
  }
};
// @__NO_SIDE_EFFECTS__
function computed(getterOrOptions, debugOptions, isSSR = false) {
  let getter;
  let setter;
  if (isFunction(getterOrOptions)) {
    getter = getterOrOptions;
  } else {
    getter = getterOrOptions.get;
    setter = getterOrOptions.set;
  }
  const cRef = new ComputedRefImpl(getter, setter, isSSR);
  if (false) {
    cRef.onTrack = debugOptions.onTrack;
    cRef.onTrigger = debugOptions.onTrigger;
  }
  return cRef;
}
var INITIAL_WATCHER_VALUE = {};
var cleanupMap = /* @__PURE__ */ new WeakMap();
var activeWatcher = void 0;
function onWatcherCleanup(cleanupFn, failSilently = false, owner = activeWatcher) {
  if (owner) {
    let cleanups = cleanupMap.get(owner);
    if (!cleanups) cleanupMap.set(owner, cleanups = []);
    cleanups.push(cleanupFn);
  } else if (false) {
    warn(`onWatcherCleanup() was called when there was no active watcher to associate with.`);
  }
}
function watch(source, cb, options = EMPTY_OBJ) {
  const {
    immediate,
    deep,
    once,
    scheduler,
    augmentJob,
    call
  } = options;
  const warnInvalidSource = (s) => {
    (options.onWarn || warn)(`Invalid watch source: `, s, `A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.`);
  };
  const reactiveGetter = (source2) => {
    if (deep) return source2;
    if (/* @__PURE__ */ isShallow(source2) || deep === false || deep === 0) return traverse(source2, 1);
    return traverse(source2);
  };
  let effect2;
  let getter;
  let cleanup;
  let boundCleanup;
  let forceTrigger = false;
  let isMultiSource = false;
  if (/* @__PURE__ */ isRef2(source)) {
    getter = () => source.value;
    forceTrigger = /* @__PURE__ */ isShallow(source);
  } else if (/* @__PURE__ */ isReactive(source)) {
    getter = () => reactiveGetter(source);
    forceTrigger = true;
  } else if (isArray(source)) {
    isMultiSource = true;
    forceTrigger = source.some((s) => /* @__PURE__ */ isReactive(s) || /* @__PURE__ */ isShallow(s));
    getter = () => source.map((s) => {
      if (/* @__PURE__ */ isRef2(s)) {
        return s.value;
      } else if (/* @__PURE__ */ isReactive(s)) {
        return reactiveGetter(s);
      } else if (isFunction(s)) {
        return call ? call(s, 2) : s();
      } else {
      }
    });
  } else if (isFunction(source)) {
    if (cb) {
      getter = call ? () => call(source, 2) : source;
    } else {
      getter = () => {
        if (cleanup) {
          pauseTracking();
          try {
            cleanup();
          } finally {
            resetTracking();
          }
        }
        const currentEffect = activeWatcher;
        activeWatcher = effect2;
        try {
          return call ? call(source, 3, [boundCleanup]) : source(boundCleanup);
        } finally {
          activeWatcher = currentEffect;
        }
      };
    }
  } else {
    getter = NOOP;
  }
  if (cb && deep) {
    const baseGetter = getter;
    const depth = deep === true ? Infinity : deep;
    getter = () => traverse(baseGetter(), depth);
  }
  const scope = getCurrentScope();
  const watchHandle = () => {
    effect2.stop();
    if (scope && scope.active) {
      remove(scope.effects, effect2);
    }
  };
  if (once && cb) {
    const _cb = cb;
    cb = (...args) => {
      try {
        return _cb(...args);
      } finally {
        watchHandle();
      }
    };
  }
  let oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
  const job = (immediateFirstRun) => {
    if (!(effect2.flags & 1) || !effect2.dirty && !immediateFirstRun) {
      return;
    }
    if (cb) {
      const newValue = effect2.run();
      if (immediateFirstRun || deep || forceTrigger || (isMultiSource ? newValue.some((v, i) => hasChanged(v, oldValue[i])) : hasChanged(newValue, oldValue))) {
        const currentWatcher = activeWatcher;
        pauseTracking();
        try {
          if (cleanup) {
            cleanup();
          }
          activeWatcher = effect2;
          const args = [
            newValue,
            // pass undefined as the old value when it's changed for the first time
            oldValue === INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue,
            boundCleanup
          ];
          oldValue = newValue;
          call ? call(cb, 3, args) : (
            // @ts-expect-error
            cb(...args)
          );
        } finally {
          activeWatcher = currentWatcher;
          resetTracking();
        }
      }
    } else {
      effect2.run();
    }
  };
  if (augmentJob) {
    augmentJob(job);
  }
  effect2 = new ReactiveEffect(getter);
  effect2.scheduler = scheduler ? () => scheduler(job, false) : job;
  boundCleanup = (fn) => onWatcherCleanup(fn, false, effect2);
  cleanup = effect2.onStop = () => {
    const cleanups = cleanupMap.get(effect2);
    if (cleanups) {
      if (call) {
        call(cleanups, 4);
      } else {
        for (const cleanup2 of cleanups) cleanup2();
      }
      cleanupMap.delete(effect2);
    }
  };
  if (false) {
    effect2.onTrack = options.onTrack;
    effect2.onTrigger = options.onTrigger;
  }
  if (cb) {
    if (immediate) {
      job(true);
    } else {
      oldValue = effect2.run();
    }
  } else if (scheduler) {
    scheduler(job.bind(null, true), true);
  } else {
    effect2.run();
  }
  watchHandle.pause = effect2.pause.bind(effect2);
  watchHandle.resume = effect2.resume.bind(effect2);
  watchHandle.stop = watchHandle;
  return watchHandle;
}
function traverse(value, depth = Infinity, seen) {
  if (depth <= 0 || !isObject(value) || value["__v_skip"]) {
    return value;
  }
  seen = seen || /* @__PURE__ */ new Map();
  if ((seen.get(value) || 0) >= depth) {
    return value;
  }
  seen.set(value, depth);
  depth--;
  if (/* @__PURE__ */ isRef2(value)) {
    traverse(value.value, depth, seen);
  } else if (isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      traverse(value[i], depth, seen);
    }
  } else if (isSet(value) || isMap(value)) {
    value.forEach((v) => {
      traverse(v, depth, seen);
    });
  } else if (isPlainObject(value)) {
    for (const key in value) {
      traverse(value[key], depth, seen);
    }
    for (const key of Object.getOwnPropertySymbols(value)) {
      if (Object.prototype.propertyIsEnumerable.call(value, key)) {
        traverse(value[key], depth, seen);
      }
    }
  }
  return value;
}
/**
* @vue/runtime-core v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function callWithErrorHandling(fn, instance, type, args) {
  try {
    return args ? fn(...args) : fn();
  } catch (err) {
    handleError(err, instance, type);
  }
}
function callWithAsyncErrorHandling(fn, instance, type, args) {
  if (isFunction(fn)) {
    const res = callWithErrorHandling(fn, instance, type, args);
    if (res && isPromise(res)) {
      res.catch((err) => {
        handleError(err, instance, type, void 0, true);
      });
    }
    return res;
  }
  if (isArray(fn)) {
    const values = [];
    for (let i = 0; i < fn.length; i++) {
      values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
    }
    return values;
  } else if (false) {
    warn$1(`Invalid value type passed to callWithAsyncErrorHandling(): ${typeof fn}`);
  }
}
function handleError(err, instance, type, throwInDev = true, isAsyncError = false) {
  const contextVNode = instance ? instance.vnode : null;
  const {
    errorHandler,
    throwUnhandledErrorInProduction
  } = instance && instance.appContext.config || EMPTY_OBJ;
  if (instance) {
    let cur = instance.parent;
    const exposedInstance = instance.proxy;
    const errorInfo = false ? ErrorTypeStrings$1[type] : `https://vuejs.org/error-reference/#runtime-${type}`;
    while (cur) {
      const errorCapturedHooks = cur.ec;
      if (errorCapturedHooks && !cur.isUnmounted && // Async failures may outlive stopped scopes whose unmount effects
      // are deferred or discarded by Suspense.
      (!isAsyncError || cur.scope.active)) {
        for (let i = 0; i < errorCapturedHooks.length; i++) {
          if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
            return;
          }
        }
      }
      cur = cur.parent;
    }
    if (errorHandler) {
      pauseTracking();
      callWithErrorHandling(errorHandler, null, 10, [err, exposedInstance, errorInfo]);
      resetTracking();
      return;
    }
  }
  logError(err, type, contextVNode, throwInDev, throwUnhandledErrorInProduction);
}
function logError(err, type, contextVNode, throwInDev = true, throwInProd = false) {
  if (false) {
    const info = ErrorTypeStrings$1[type];
    if (contextVNode) {
      pushWarningContext(contextVNode);
    }
    warn$1(`Unhandled error${info ? ` during execution of ${info}` : ``}`);
    if (contextVNode) {
      popWarningContext();
    }
    if (throwInDev) {
      throw err;
    } else {
      console.error(err);
    }
  } else if (throwInProd) {
    throw err;
  } else {
    console.error(err);
  }
}
var queue = [];
var flushIndex = -1;
var pendingPostFlushCbs = [];
var activePostFlushCbs = null;
var postFlushIndex = 0;
var resolvedPromise = /* @__PURE__ */ Promise.resolve();
var currentFlushPromise = null;
function nextTick(fn) {
  const p2 = currentFlushPromise || resolvedPromise;
  return fn ? p2.then(this ? fn.bind(this) : fn) : p2;
}
function findInsertionIndex(id) {
  let start = flushIndex + 1;
  let end = queue.length;
  while (start < end) {
    const middle = start + end >>> 1;
    const middleJob = queue[middle];
    const middleJobId = getId(middleJob);
    if (middleJobId < id || middleJobId === id && middleJob.flags & 2) {
      start = middle + 1;
    } else {
      end = middle;
    }
  }
  return start;
}
function queueJob(job) {
  if (!(job.flags & 1)) {
    const jobId = getId(job);
    const lastJob = queue[queue.length - 1];
    if (!lastJob || // fast path when the job id is larger than the tail
    !(job.flags & 2) && jobId >= getId(lastJob)) {
      queue.push(job);
    } else {
      queue.splice(findInsertionIndex(jobId), 0, job);
    }
    job.flags |= 1;
    queueFlush();
  }
}
function queueFlush() {
  if (!currentFlushPromise) {
    currentFlushPromise = resolvedPromise.then(flushJobs);
  }
}
function queuePostFlushCb(cb) {
  if (!isArray(cb)) {
    if (activePostFlushCbs && cb.id === -1) {
      activePostFlushCbs.splice(postFlushIndex + 1, 0, cb);
    } else if (!(cb.flags & 1)) {
      pendingPostFlushCbs.push(cb);
      cb.flags |= 1;
    }
  } else {
    for (let i = 0; i < cb.length; i++) {
      pendingPostFlushCbs.push(cb[i]);
    }
  }
  queueFlush();
}
function flushPreFlushCbs(instance, minUid, seen, i = flushIndex + 1) {
  if (false) {
    seen = seen || /* @__PURE__ */ new Map();
  }
  for (; i < queue.length; i++) {
    const cb = queue[i];
    if (cb && cb.flags & 2) {
      if (instance && cb.id !== instance.uid || minUid !== void 0 && !(cb.id >= minUid)) {
        continue;
      }
      if (false) {
        continue;
      }
      queue.splice(i, 1);
      i = instance ? i - 1 : flushIndex;
      if (cb.flags & 4) {
        cb.flags &= -2;
      }
      cb();
      if (!(cb.flags & 4)) {
        cb.flags &= -2;
      }
    }
  }
}
function flushPostFlushCbs(seen, skip, minUid = 0) {
  if (pendingPostFlushCbs.length) {
    let cbs = pendingPostFlushCbs;
    let kept = 0;
    if (skip) {
      cbs = [];
      for (let i = 0; i < pendingPostFlushCbs.length; i++) {
        const cb = pendingPostFlushCbs[i];
        if (cb.i !== void 0 ? !cb.i || cb.i.uid < minUid : skip.has(cb)) {
          pendingPostFlushCbs[kept++] = cb;
        } else {
          cbs.push(cb);
        }
      }
    }
    const deduped = [...new Set(cbs)].sort((a, b) => getId(a) - getId(b));
    pendingPostFlushCbs.length = kept;
    if (activePostFlushCbs) {
      for (let i = 0; i < deduped.length; i++) {
        activePostFlushCbs.push(deduped[i]);
      }
      return;
    }
    activePostFlushCbs = deduped;
    if (false) {
      seen = seen || /* @__PURE__ */ new Map();
    }
    for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
      const cb = activePostFlushCbs[postFlushIndex];
      if (false) {
        continue;
      }
      if (cb.flags & 4) {
        cb.flags &= -2;
      }
      if (!(cb.flags & 8)) cb();
      cb.flags &= -2;
    }
    activePostFlushCbs = null;
    postFlushIndex = 0;
  }
}
var isFlushing = false;
function flushOnAppMount(fn, minUid) {
  if (isFlushing) {
    fn();
    return;
  }
  const queued = minUid === void 0 ? void 0 : new Set(pendingPostFlushCbs);
  fn();
  isFlushing = true;
  try {
    flushPreFlushCbs(void 0, minUid);
    flushPostFlushCbs(void 0, queued, minUid);
  } finally {
    isFlushing = false;
  }
}
var getId = (job) => job.id == null ? job.flags & 2 ? -1 : Infinity : job.id;
function flushJobs(seen) {
  if (false) {
    seen = seen || /* @__PURE__ */ new Map();
  }
  const check = false ? (job) => checkRecursiveUpdates(seen, job) : NOOP;
  try {
    for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
      const job = queue[flushIndex];
      if (job && !(job.flags & 8)) {
        if (false) {
          continue;
        }
        if (job.flags & 4) {
          job.flags &= ~1;
        }
        callWithErrorHandling(job, job.i, job.i ? 15 : 14);
        if (!(job.flags & 4)) {
          job.flags &= ~1;
        }
      }
    }
  } finally {
    for (; flushIndex < queue.length; flushIndex++) {
      const job = queue[flushIndex];
      if (job) {
        job.flags &= -2;
      }
    }
    flushIndex = -1;
    queue.length = 0;
    flushPostFlushCbs(seen);
    currentFlushPromise = null;
    if (queue.length || pendingPostFlushCbs.length) {
      flushJobs(seen);
    }
  }
}
var isHmrUpdating = false;
if (false) {
  getGlobalThis().__VUE_HMR_RUNTIME__ = {
    createRecord: tryWrap(createRecord),
    rerender: tryWrap(rerender),
    reload: tryWrap(reload)
  };
}
var currentRenderingInstance = null;
var currentScopeId = null;
function setCurrentRenderingInstance(instance) {
  const prev = currentRenderingInstance;
  currentRenderingInstance = instance;
  currentScopeId = instance && instance.type.__scopeId || null;
  return prev;
}
function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot) {
  if (!ctx) return fn;
  if (fn._n) {
    return fn;
  }
  const renderFnWithContext = (...args) => {
    if (renderFnWithContext._d) {
      setBlockTracking(-1);
    }
    const prevInstance = setCurrentRenderingInstance(ctx);
    const prevStackSize = blockStack.length;
    let res;
    try {
      res = fn(...args);
    } finally {
      for (let i = blockStack.length; i > prevStackSize; i--) closeBlock();
      setCurrentRenderingInstance(prevInstance);
      if (renderFnWithContext._d) {
        setBlockTracking(1);
      }
    }
    if (false) {
      devtoolsComponentUpdated(ctx);
    }
    return res;
  };
  renderFnWithContext._n = true;
  renderFnWithContext._c = true;
  renderFnWithContext._d = true;
  return renderFnWithContext;
}
function withDirectives(vnode, directives) {
  if (currentRenderingInstance === null) {
    return vnode;
  }
  const instance = getComponentPublicInstance(currentRenderingInstance);
  const bindings = vnode.dirs || (vnode.dirs = []);
  for (let i = 0; i < directives.length; i++) {
    let [dir, value, arg, modifiers = EMPTY_OBJ] = directives[i];
    if (dir) {
      if (isFunction(dir)) {
        dir = {
          mounted: dir,
          updated: dir
        };
      }
      if (dir.deep) {
        traverse(value);
      }
      bindings.push({
        dir,
        instance,
        value,
        oldValue: void 0,
        arg,
        modifiers
      });
    }
  }
  return vnode;
}
function invokeDirectiveHook(vnode, prevVNode, instance, name) {
  let hookVNode = vnode;
  if (name === "beforeMount") {
    vnode._mount = vnode;
  } else if (name === "beforeUpdate") {
    const mount = prevVNode && prevVNode._mount;
    if (mount) {
      mount._latest = vnode;
      vnode._mount = mount;
    }
  } else if (name === "mounted") {
    const latest = vnode._latest;
    vnode._mount = vnode._latest = void 0;
    if (latest) {
      hookVNode = latest;
      latest._mount = void 0;
    }
  }
  const bindings = hookVNode.dirs;
  const oldBindings = prevVNode && prevVNode.dirs;
  for (let i = 0; i < bindings.length; i++) {
    let binding = bindings[i];
    if (oldBindings) {
      binding.oldValue = oldBindings[i].value;
    } else if (name === "mounted" && binding.oldValue !== void 0) {
      binding = extend({}, binding, {
        oldValue: void 0
      });
    }
    let hook = binding.dir[name];
    if (hook) {
      pauseTracking();
      callWithAsyncErrorHandling(hook, instance, 8, [vnode.el, binding, hookVNode, prevVNode]);
      resetTracking();
    }
  }
}
function provide(key, value) {
  if (false) {
    if (!currentInstance || currentInstance.isMounted) {
      warn$1(`provide() can only be used inside setup().`);
    }
  }
  if (currentInstance) {
    let provides = currentInstance.provides;
    const parentProvides = currentInstance.parent && currentInstance.parent.provides;
    if (parentProvides === provides) {
      provides = currentInstance.provides = Object.create(parentProvides);
    }
    provides[key] = value;
  }
}
function inject(key, defaultValue, treatDefaultAsFactory = false) {
  const instance = getCurrentInstance();
  if (instance || currentApp) {
    let provides = currentApp ? currentApp._context.provides : instance ? instance.parent == null || instance.ce ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides : void 0;
    if (provides && key in provides) {
      return provides[key];
    } else if (arguments.length > 1) {
      return treatDefaultAsFactory && isFunction(defaultValue) ? defaultValue.call(instance && instance.proxy) : defaultValue;
    } else if (false) {
      warn$1(`injection "${String(key)}" not found.`);
    }
  } else if (false) {
    warn$1(`inject() can only be used inside setup() or functional components.`);
  }
}
var ssrContextKey = /* @__PURE__ */ Symbol.for("v-scx");
var useSSRContext = () => {
  {
    const ctx = inject(ssrContextKey);
    if (!ctx) {
    }
    return ctx;
  }
};
function watch2(source, cb, options) {
  if (false) {
    warn$1(`\`watch(fn, options?)\` signature has been moved to a separate API. Use \`watchEffect(fn, options?)\` instead. \`watch\` now only supports \`watch(source, cb, options?) signature.`);
  }
  return doWatch(source, cb, options);
}
function doWatch(source, cb, options = EMPTY_OBJ) {
  const {
    immediate,
    deep,
    flush,
    once
  } = options;
  if (false) {
    if (immediate !== void 0) {
      warn$1(`watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.`);
    }
    if (deep !== void 0) {
      warn$1(`watch() "deep" option is only respected when using the watch(source, callback, options?) signature.`);
    }
    if (once !== void 0) {
      warn$1(`watch() "once" option is only respected when using the watch(source, callback, options?) signature.`);
    }
  }
  const baseWatchOptions = extend({}, options);
  if (false) baseWatchOptions.onWarn = warn$1;
  const runsImmediately = cb && immediate || !cb && flush !== "post";
  let ssrCleanup;
  if (isInSSRComponentSetup) {
    if (flush === "sync") {
      const ctx = useSSRContext();
      ssrCleanup = ctx.__watcherHandles || (ctx.__watcherHandles = []);
    } else if (!runsImmediately) {
      const watchStopHandle = () => {
      };
      watchStopHandle.stop = NOOP;
      watchStopHandle.resume = NOOP;
      watchStopHandle.pause = NOOP;
      return watchStopHandle;
    }
  }
  const instance = currentInstance;
  baseWatchOptions.call = (fn, type, args) => callWithAsyncErrorHandling(fn, instance, type, args);
  let isPre = false;
  if (flush === "post") {
    baseWatchOptions.scheduler = (job) => {
      job.i = instance;
      queuePostRenderEffect(job, instance && instance.suspense);
    };
  } else if (flush !== "sync") {
    isPre = true;
    baseWatchOptions.scheduler = (job, isFirstRun) => {
      if (isFirstRun) {
        job();
      } else {
        queueJob(job);
      }
    };
  }
  baseWatchOptions.augmentJob = (job) => {
    if (cb) {
      job.flags |= 4;
    }
    if (isPre) {
      job.flags |= 2;
      if (instance) {
        job.id = instance.uid;
        job.i = instance;
      }
    }
  };
  const watchHandle = watch(source, cb, baseWatchOptions);
  if (isInSSRComponentSetup) {
    if (ssrCleanup) {
      ssrCleanup.push(watchHandle);
    } else if (runsImmediately) {
      watchHandle();
    }
  }
  return watchHandle;
}
function instanceWatch(source, value, options) {
  const publicThis = this.proxy;
  const getter = isString(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
  let cb;
  if (isFunction(value)) {
    cb = value;
  } else {
    cb = value.handler;
    options = value;
  }
  const reset = setCurrentInstance(this);
  const res = doWatch(getter, cb.bind(publicThis), options);
  reset();
  return res;
}
function createPathGetter(ctx, path) {
  const segments = path.split(".");
  return () => {
    let cur = ctx;
    for (let i = 0; i < segments.length && cur; i++) {
      cur = cur[segments[i]];
    }
    return cur;
  };
}
var pendingMounts = /* @__PURE__ */ new WeakMap();
var TeleportEndKey = /* @__PURE__ */ Symbol("_vte");
var isTeleport = (type) => type.__isTeleport;
var isTeleportDisabled = (props) => props && (props.disabled || props.disabled === "");
var isTeleportDeferred = (props) => props && (props.defer || props.defer === "");
var isTargetSVG = (target) => typeof SVGElement !== "undefined" && target instanceof SVGElement;
var isTargetMathML = (target) => typeof MathMLElement === "function" && target instanceof MathMLElement;
var resolveTarget = (props, select) => {
  const targetSelector = props && props.to;
  if (isString(targetSelector)) {
    if (!select) {
      return null;
    } else {
      const target = select(targetSelector);
      if (false) {
        warn$1(`Failed to locate Teleport target with selector "${targetSelector}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`);
      }
      return target;
    }
  } else {
    if (false) {
      warn$1(`Invalid Teleport target: ${targetSelector}`);
    }
    return targetSelector;
  }
};
var TeleportImpl = {
  name: "Teleport",
  __isTeleport: true,
  process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, internals) {
    const {
      mc: mountChildren,
      pc: patchChildren,
      pbc: patchBlockChildren,
      o: {
        insert,
        querySelector,
        createText,
        createComment,
        parentNode
      }
    } = internals;
    const disabled = isTeleportDisabled(n2.props);
    let {
      dynamicChildren
    } = n2;
    if (false) {
      optimized = false;
      dynamicChildren = null;
    }
    const mount = (vnode, container2, anchor2) => {
      if (vnode.shapeFlag & 16) {
        mountChildren(vnode.children, container2, anchor2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
      }
    };
    const mountToTarget = (vnode = n2) => {
      const disabled2 = isTeleportDisabled(vnode.props);
      const target = vnode.target = resolveTarget(vnode.props, querySelector);
      const targetAnchor = prepareAnchor(target, vnode, createText, insert);
      if (target) {
        if (namespace !== "svg" && isTargetSVG(target)) {
          namespace = "svg";
        } else if (namespace !== "mathml" && isTargetMathML(target)) {
          namespace = "mathml";
        }
        if (parentComponent && parentComponent.isCE) {
          (parentComponent.ce._teleportTargets || (parentComponent.ce._teleportTargets = /* @__PURE__ */ new Set())).add(target);
        }
        if (!disabled2) {
          mount(vnode, target, targetAnchor);
          updateCssVars(vnode, false);
        }
      } else if (false) {
        warn$1("Invalid Teleport target on mount:", target, `(${typeof target})`);
      }
    };
    const queuePendingMount = (vnode) => {
      const mountJob = () => {
        if (pendingMounts.get(vnode) !== mountJob) return;
        pendingMounts.delete(vnode);
        if (isTeleportDisabled(vnode.props)) {
          const mountContainer = parentNode(vnode.el) || container;
          mount(vnode, mountContainer, vnode.anchor);
          updateCssVars(vnode, true);
        }
        mountToTarget(vnode);
      };
      pendingMounts.set(vnode, mountJob);
      queuePostRenderEffect(mountJob, parentSuspense);
    };
    if (n1 == null) {
      const placeholder = n2.el = false ? createComment("teleport start") : createText("");
      const mainAnchor = n2.anchor = false ? createComment("teleport end") : createText("");
      insert(placeholder, container, anchor);
      insert(mainAnchor, container, anchor);
      if (isTeleportDeferred(n2.props) || parentSuspense && parentSuspense.pendingBranch) {
        queuePendingMount(n2);
        return;
      }
      if (disabled) {
        mount(n2, container, mainAnchor);
        updateCssVars(n2, true);
      }
      mountToTarget();
    } else {
      n2.el = n1.el;
      const mainAnchor = n2.anchor = n1.anchor;
      const pendingMount = pendingMounts.get(n1);
      if (pendingMount) {
        pendingMount.flags |= 8;
        pendingMounts.delete(n1);
        queuePendingMount(n2);
        return;
      }
      n2.targetStart = n1.targetStart;
      const target = n2.target = n1.target;
      const targetAnchor = n2.targetAnchor = n1.targetAnchor;
      const wasDisabled = isTeleportDisabled(n1.props);
      const currentContainer = wasDisabled ? container : target;
      const currentAnchor = wasDisabled ? mainAnchor : targetAnchor;
      if (namespace === "svg" || isTargetSVG(target)) {
        namespace = "svg";
      } else if (namespace === "mathml" || isTargetMathML(target)) {
        namespace = "mathml";
      }
      if (dynamicChildren) {
        patchBlockChildren(n1.dynamicChildren, dynamicChildren, currentContainer, parentComponent, parentSuspense, namespace, slotScopeIds);
        traverseStaticChildren(n1, n2, true);
      } else if (!optimized) {
        patchChildren(n1, n2, currentContainer, currentAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, false);
      }
      if (disabled) {
        if (!wasDisabled) {
          moveTeleport(n2, container, mainAnchor, internals, 1);
        } else {
          if (n2.props && n1.props && n2.props.to !== n1.props.to) {
            n2.props.to = n1.props.to;
          }
        }
      } else {
        if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
          const nextTarget = resolveTarget(n2.props, querySelector);
          if (nextTarget) {
            n2.target = nextTarget;
            moveTeleport(n2, nextTarget, null, internals, 0);
          } else if (false) {
            warn$1("Invalid Teleport target on update:", target, `(${typeof target})`);
          }
        } else if (wasDisabled) {
          moveTeleport(n2, target, targetAnchor, internals, 1);
        }
      }
      updateCssVars(n2, disabled);
    }
  },
  remove(vnode, parentComponent, parentSuspense, {
    um: unmount,
    o: {
      remove: hostRemove
    }
  }, doRemove) {
    const {
      shapeFlag,
      children,
      anchor,
      targetStart,
      targetAnchor,
      target,
      props
    } = vnode;
    const disabled = isTeleportDisabled(props);
    const shouldRemove = doRemove || !disabled;
    const pendingMount = pendingMounts.get(vnode);
    if (pendingMount) {
      pendingMount.flags |= 8;
      pendingMounts.delete(vnode);
    }
    if (target) {
      hostRemove(targetStart);
      hostRemove(targetAnchor);
    }
    doRemove && hostRemove(anchor);
    if (!pendingMount && (disabled || target) && shapeFlag & 16) {
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        unmount(child, parentComponent, parentSuspense, shouldRemove, !!child.dynamicChildren);
      }
    }
  },
  move: moveTeleport,
  hydrate: hydrateTeleport
};
function moveTeleport(vnode, container, parentAnchor, {
  o: {
    insert
  },
  m: move
}, moveType = 2) {
  if (moveType === 0) {
    if (vnode.targetStart) {
      insert(vnode.targetStart, container, parentAnchor);
    }
    insert(vnode.targetAnchor, container, parentAnchor);
    parentAnchor = vnode.targetAnchor;
  }
  const {
    el,
    anchor,
    shapeFlag,
    children,
    props
  } = vnode;
  const isReorder = moveType === 2;
  if (isReorder) {
    insert(el, container, parentAnchor);
  }
  if (!pendingMounts.has(vnode) && (!isReorder || isTeleportDisabled(props))) {
    if (shapeFlag & 16) {
      for (let i = 0; i < children.length; i++) {
        move(children[i], container, parentAnchor, 2);
      }
    }
  }
  if (isReorder) {
    insert(anchor, container, parentAnchor);
  }
}
function hydrateTeleport(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, {
  o: {
    nextSibling,
    parentNode,
    querySelector,
    insert,
    createText
  }
}, hydrateChildren) {
  function hydrateAnchor(target2, targetNode) {
    let targetAnchor = targetNode;
    while (targetAnchor) {
      if (targetAnchor && targetAnchor.nodeType === 8) {
        if (targetAnchor.data === "teleport start anchor") {
          vnode.targetStart = targetAnchor;
        } else if (targetAnchor.data === "teleport anchor") {
          vnode.targetAnchor = targetAnchor;
          target2._lpa = vnode.targetAnchor && nextSibling(vnode.targetAnchor);
          break;
        }
      }
      targetAnchor = nextSibling(targetAnchor);
    }
  }
  function hydrateDisabledTeleport(node2, vnode2) {
    vnode2.anchor = hydrateChildren(nextSibling(node2), vnode2, parentNode(node2), parentComponent, parentSuspense, slotScopeIds, optimized);
  }
  const target = vnode.target = resolveTarget(vnode.props, querySelector);
  const disabled = isTeleportDisabled(vnode.props);
  if (target) {
    const targetNode = target._lpa || target.firstChild;
    if (vnode.shapeFlag & 16) {
      if (disabled) {
        hydrateDisabledTeleport(node, vnode);
        hydrateAnchor(target, targetNode);
        if (!vnode.targetAnchor) {
          prepareAnchor(
            target,
            vnode,
            createText,
            insert,
            // if target is the same as the main view, insert anchors before current node
            // to avoid hydrating mismatch
            parentNode(node) === target ? node : null
          );
        }
      } else {
        vnode.anchor = nextSibling(node);
        hydrateAnchor(target, targetNode);
        if (!vnode.targetAnchor) {
          prepareAnchor(target, vnode, createText, insert);
        }
        hydrateChildren(targetNode && nextSibling(targetNode), vnode, target, parentComponent, parentSuspense, slotScopeIds, optimized);
      }
    }
    updateCssVars(vnode, disabled);
  } else if (disabled) {
    if (vnode.shapeFlag & 16) {
      hydrateDisabledTeleport(node, vnode);
      vnode.targetStart = node;
      vnode.targetAnchor = nextSibling(node);
    }
  }
  return vnode.anchor && nextSibling(vnode.anchor);
}
var Teleport = TeleportImpl;
function updateCssVars(vnode, isDisabled) {
  const ctx = vnode.ctx;
  if (ctx && ctx.ut) {
    let node, anchor;
    if (isDisabled) {
      node = vnode.el;
      anchor = vnode.anchor;
    } else {
      node = vnode.targetStart;
      anchor = vnode.targetAnchor;
    }
    while (node && node !== anchor) {
      if (node.nodeType === 1) node.setAttribute("data-v-owner", ctx.uid);
      node = node.nextSibling;
    }
    ctx.ut();
  }
}
function prepareAnchor(target, vnode, createText, insert, anchor = null) {
  const targetStart = vnode.targetStart = createText("");
  const targetAnchor = vnode.targetAnchor = createText("");
  targetStart[TeleportEndKey] = targetAnchor;
  if (target) {
    insert(targetStart, target, anchor);
    insert(targetAnchor, target, anchor);
  }
  return targetAnchor;
}
var leaveCbKey = /* @__PURE__ */ Symbol("_leaveCb");
var enterCbKey = /* @__PURE__ */ Symbol("_enterCb");
function useTransitionState() {
  const state = {
    isMounted: false,
    isLeaving: false,
    isUnmounting: false,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  onMounted(() => {
    state.isMounted = true;
  });
  onBeforeUnmount(() => {
    state.isUnmounting = true;
  });
  return state;
}
var TransitionHookValidator = [Function, Array];
var BaseTransitionPropsValidators = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: TransitionHookValidator,
  onEnter: TransitionHookValidator,
  onAfterEnter: TransitionHookValidator,
  onEnterCancelled: TransitionHookValidator,
  // leave
  onBeforeLeave: TransitionHookValidator,
  onLeave: TransitionHookValidator,
  onAfterLeave: TransitionHookValidator,
  onLeaveCancelled: TransitionHookValidator,
  // appear
  onBeforeAppear: TransitionHookValidator,
  onAppear: TransitionHookValidator,
  onAfterAppear: TransitionHookValidator,
  onAppearCancelled: TransitionHookValidator
};
var BaseTransitionImpl = {
  name: `BaseTransition`,
  props: BaseTransitionPropsValidators,
  setup(props, {
    slots
  }) {
    const instance = getCurrentInstance();
    const state = useTransitionState();
    return () => {
      const children = slots.default && getTransitionRawChildren(slots.default(), true);
      const child = children && children.length ? findNonCommentChild(children) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        instance.subTree ? createCommentVNode() : void 0
      );
      if (!child) {
        return;
      }
      const rawProps = /* @__PURE__ */ toRaw(props);
      const {
        mode
      } = rawProps;
      if (false) {
        warn$1(`invalid <transition> mode: ${mode}`);
      }
      if (state.isLeaving) {
        return emptyPlaceholder(child);
      }
      const innerChild = getInnerChild$1(child);
      if (!innerChild) {
        return emptyPlaceholder(child);
      }
      const enterHooks = resolveTransitionHooks(innerChild, rawProps, state, instance);
      if (innerChild.type !== Comment) {
        setTransitionHooks(innerChild, enterHooks);
      }
      let oldInnerChild = instance.subTree && getInnerChild$1(instance.subTree);
      if (oldInnerChild && oldInnerChild.type !== Comment && !isSameVNodeType(oldInnerChild, innerChild) && getTransitionRoot(instance.subTree)) {
        let leavingHooks = resolveTransitionHooks(oldInnerChild, rawProps, state, instance);
        setTransitionHooks(oldInnerChild, leavingHooks);
        if (mode === "out-in" && innerChild.type !== Comment) {
          state.isLeaving = true;
          leavingHooks.afterLeave = () => {
            state.isLeaving = false;
            if (!(instance.job.flags & 8)) {
              if (instance.effect.flags & 2) {
                const job = () => {
                  if (!(instance.job.flags & 8)) {
                    instance.update();
                  }
                };
                job.i = instance;
                queueJob(job);
              } else {
                instance.update();
              }
            }
            delete leavingHooks.afterLeave;
            oldInnerChild = void 0;
          };
          return emptyPlaceholder(child);
        } else if (mode === "in-out" && innerChild.type !== Comment) {
          leavingHooks.delayLeave = (el, earlyRemove, delayedLeave) => {
            const leavingVNodesCache = getLeavingNodesForType(state, oldInnerChild);
            leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
            el[leaveCbKey] = () => {
              earlyRemove();
              el[leaveCbKey] = void 0;
              delete enterHooks.delayedLeave;
              oldInnerChild = void 0;
            };
            enterHooks.delayedLeave = () => {
              delayedLeave();
              delete enterHooks.delayedLeave;
              oldInnerChild = void 0;
            };
          };
        } else {
          oldInnerChild = void 0;
        }
      } else if (oldInnerChild) {
        oldInnerChild = void 0;
      }
      return child;
    };
  }
};
function findNonCommentChild(children) {
  let child = children[0];
  if (children.length > 1) {
    let hasFound = false;
    for (const c of children) {
      if (c.type !== Comment) {
        if (false) {
          warn$1("<transition> can only be used on a single element or component. Use <transition-group> for lists.");
          break;
        }
        child = c;
        hasFound = true;
        if (true) break;
      }
    }
  }
  return child;
}
var BaseTransition = BaseTransitionImpl;
function getLeavingNodesForType(state, vnode) {
  const {
    leavingVNodes
  } = state;
  let leavingVNodesCache = leavingVNodes.get(vnode.type);
  if (!leavingVNodesCache) {
    leavingVNodesCache = /* @__PURE__ */ Object.create(null);
    leavingVNodes.set(vnode.type, leavingVNodesCache);
  }
  return leavingVNodesCache;
}
function resolveTransitionHooks(vnode, props, state, instance) {
  const {
    appear,
    mode,
    persisted = false,
    onBeforeEnter,
    onEnter,
    onAfterEnter,
    onEnterCancelled,
    onBeforeLeave,
    onLeave,
    onAfterLeave,
    onLeaveCancelled,
    onBeforeAppear,
    onAppear,
    onAfterAppear,
    onAppearCancelled
  } = props;
  const key = String(vnode.key);
  const leavingVNodesCache = getLeavingNodesForType(state, vnode);
  const callHook3 = (hook, args) => {
    hook && callWithAsyncErrorHandling(hook, instance, 9, args);
  };
  const callAsyncHook = (hook, args) => {
    const done = args[1];
    callHook3(hook, args);
    if (isArray(hook)) {
      if (hook.every((hook2) => hook2.length <= 1)) done();
    } else if (hook.length <= 1) {
      done();
    }
  };
  const hooks = {
    mode,
    persisted,
    beforeEnter(el) {
      let hook = onBeforeEnter;
      if (!state.isMounted) {
        if (appear) {
          hook = onBeforeAppear || onBeforeEnter;
        } else {
          return;
        }
      }
      if (el[leaveCbKey]) {
        el[leaveCbKey](
          true
          /* cancelled */
        );
      }
      const leavingVNode = leavingVNodesCache[key];
      if (leavingVNode && isSameVNodeType(vnode, leavingVNode)) {
        let leavingCb = leavingVNode.el[leaveCbKey];
        if (!leavingCb) {
          const leavingRoot = getTransitionRoot(leavingVNode);
          leavingCb = leavingRoot && leavingRoot.el[leaveCbKey];
        }
        if (leavingCb) {
          leavingCb();
        }
      }
      callHook3(hook, [el]);
    },
    enter(el) {
      if (!isHmrUpdating && leavingVNodesCache[key] === vnode) return;
      let hook = onEnter;
      let afterHook = onAfterEnter;
      let cancelHook = onEnterCancelled;
      if (!state.isMounted) {
        if (appear) {
          hook = onAppear || onEnter;
          afterHook = onAfterAppear || onAfterEnter;
          cancelHook = onAppearCancelled || onEnterCancelled;
        } else {
          return;
        }
      }
      let called = false;
      el[enterCbKey] = (cancelled) => {
        if (called) return;
        called = true;
        if (cancelled) {
          callHook3(cancelHook, [el]);
        } else {
          callHook3(afterHook, [el]);
        }
        if (hooks.delayedLeave) {
          hooks.delayedLeave();
        }
        el[enterCbKey] = void 0;
      };
      const done = el[enterCbKey].bind(null, false);
      if (hook) {
        callAsyncHook(hook, [el, done]);
      } else {
        done();
      }
    },
    leave(el, remove2) {
      const key2 = String(vnode.key);
      if (el[enterCbKey]) {
        el[enterCbKey](
          true
          /* cancelled */
        );
      }
      if (state.isUnmounting) {
        return remove2();
      }
      callHook3(onBeforeLeave, [el]);
      let called = false;
      el[leaveCbKey] = (cancelled) => {
        if (called) return;
        called = true;
        remove2();
        if (cancelled) {
          callHook3(onLeaveCancelled, [el]);
        } else {
          callHook3(onAfterLeave, [el]);
        }
        el[leaveCbKey] = void 0;
        if (leavingVNodesCache[key2] === vnode) {
          delete leavingVNodesCache[key2];
        }
      };
      const done = el[leaveCbKey].bind(null, false);
      leavingVNodesCache[key2] = vnode;
      if (onLeave) {
        callAsyncHook(onLeave, [el, done]);
      } else {
        done();
      }
    },
    clone(vnode2) {
      const cloned = resolveTransitionHooks(vnode2, props, state, instance);
      cloned.afterLeave = () => {
        if (hooks.afterLeave) hooks.afterLeave();
      };
      cloned.delayLeave = (el, earlyRemove, delayedLeave) => {
        if (hooks.delayLeave) {
          hooks.delayLeave(el, earlyRemove, delayedLeave);
        } else {
          delayedLeave();
        }
      };
      cloned.delayedLeave = () => {
        if (hooks.delayedLeave) hooks.delayedLeave();
      };
      return cloned;
    }
  };
  return hooks;
}
function emptyPlaceholder(vnode) {
  if (isKeepAlive(vnode)) {
    vnode = cloneVNode(vnode);
    vnode.children = null;
    return vnode;
  }
}
function getInnerChild$1(vnode) {
  if (!isKeepAlive(vnode)) {
    if (isTeleport(vnode.type) && vnode.children) {
      return findNonCommentChild(vnode.children);
    }
    return vnode;
  }
  if (vnode.component) {
    return vnode.component.subTree;
  }
  const {
    shapeFlag,
    children
  } = vnode;
  if (children) {
    if (shapeFlag & 16) {
      return children[0];
    }
    if (shapeFlag & 32 && isFunction(children.default)) {
      return children.default();
    }
  }
}
function setTransitionHooks(vnode, hooks) {
  if (vnode.shapeFlag & 6 && vnode.component) {
    vnode.transition = hooks;
    const subTree = vnode.component.subTree;
    setTransitionHooks(isTeleport(subTree.type) ? getInnerChild$1(subTree) || subTree : subTree, hooks);
  } else if (vnode.shapeFlag & 128) {
    const suspense = vnode.suspense;
    if (suspense) {
      const branch = suspense.isHydrating ? suspense.pendingBranch : suspense.activeBranch;
      if (branch) {
        setTransitionHooks(branch, hooks.clone(branch));
      }
    } else {
      vnode.ssContent.transition = hooks.clone(vnode.ssContent);
      vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
    }
  } else {
    vnode.transition = hooks;
    if (vnode.type === Fragment && isArray(vnode.children)) {
      const child = filterSingleRoot(vnode.children, false);
      if (child) {
        setTransitionHooks(child, hooks);
      }
    }
  }
}
function getTransitionRawChildren(children, keepComment = false, parentKey) {
  let ret = [];
  let keyedFragmentCount = 0;
  for (let i = 0; i < children.length; i++) {
    let child = children[i];
    const key = parentKey == null ? child.key : String(parentKey) + String(child.key != null ? child.key : i);
    if (child.type === Fragment) {
      if (child.patchFlag & 128) keyedFragmentCount++;
      ret = ret.concat(getTransitionRawChildren(child.children, keepComment, key));
    } else if (keepComment || child.type !== Comment) {
      ret.push(key != null ? cloneVNode(child, {
        key
      }) : child);
    }
  }
  if (keyedFragmentCount > 1) {
    for (let i = 0; i < ret.length; i++) {
      ret[i].patchFlag = -2;
    }
  }
  return ret;
}
function getTransitionRoot(vnode) {
  if (vnode.component) {
    return getTransitionRoot(vnode.component.subTree);
  }
  if (vnode.type === Fragment) {
    const child = isArray(vnode.children) && filterSingleRoot(vnode.children, false);
    return child ? getTransitionRoot(child) : void 0;
  }
  if (vnode.type !== Comment) {
    return vnode;
  }
}
// @__NO_SIDE_EFFECTS__
function defineComponent(options, extraOptions) {
  return isFunction(options) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => extend({
      name: options.name
    }, extraOptions, {
      setup: options
    }))()
  ) : options;
}
function useId() {
  const i = getCurrentInstance();
  if (i) {
    return (i.appContext.config.idPrefix || "v") + "-" + i.ids[0] + i.ids[1]++;
  } else if (false) {
    warn$1(`useId() is called when there is no active component instance to be associated with.`);
  }
  return "";
}
function markAsyncBoundary(instance) {
  instance.ids = [instance.ids[0] + instance.ids[2]++ + "-", 0, 0];
}
function isTemplateRefKey(refs, key) {
  let desc;
  return !!((desc = Object.getOwnPropertyDescriptor(refs, key)) && !desc.configurable);
}
var pendingSetRefMap = /* @__PURE__ */ new WeakMap();
function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
  if (isArray(rawRef)) {
    rawRef.forEach((r, i) => setRef(r, oldRawRef && (isArray(oldRawRef) ? oldRawRef[i] : oldRawRef), parentSuspense, vnode, isUnmount));
    return;
  }
  if (isAsyncWrapper(vnode) && !isUnmount) {
    if (vnode.shapeFlag & 512 && vnode.type.__asyncResolved && vnode.component.subTree.component) {
      setRef(rawRef, oldRawRef, parentSuspense, vnode.component.subTree);
    }
    return;
  }
  const refValue = vnode.shapeFlag & 4 ? getComponentPublicInstance(vnode.component) : vnode.el;
  const value = isUnmount ? null : refValue;
  const {
    i: owner,
    r: ref2
  } = rawRef;
  if (false) {
    warn$1(`Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.`);
    return;
  }
  const oldRef = oldRawRef && oldRawRef.r;
  const refs = owner.refs === EMPTY_OBJ ? owner.refs = {} : owner.refs;
  const setupState = owner.setupState;
  const rawSetupState = /* @__PURE__ */ toRaw(setupState);
  const canSetSetupRef = setupState === EMPTY_OBJ ? NO : (key) => {
    if (false) {
      if (hasOwn(rawSetupState, key) && !/* @__PURE__ */ isRef2(rawSetupState[key])) {
        warn$1(`Template ref "${key}" used on a non-ref value. It will not work in the production build.`);
      }
      if (knownTemplateRefs.has(rawSetupState[key])) {
        return false;
      }
    }
    if (isTemplateRefKey(refs, key)) {
      return false;
    }
    return hasOwn(rawSetupState, key);
  };
  const canSetRef = (ref22, key) => {
    if (false) {
      return false;
    }
    if (key && isTemplateRefKey(refs, key)) {
      return false;
    }
    return true;
  };
  if (oldRef != null && oldRef !== ref2) {
    invalidatePendingSetRef(oldRawRef);
    if (isString(oldRef)) {
      refs[oldRef] = null;
      if (canSetSetupRef(oldRef)) {
        setupState[oldRef] = null;
      }
    } else if (/* @__PURE__ */ isRef2(oldRef)) {
      const oldRawRefAtom = oldRawRef;
      if (canSetRef(oldRef, oldRawRefAtom.k)) {
        oldRef.value = null;
      }
      if (oldRawRefAtom.k) refs[oldRawRefAtom.k] = null;
    }
  }
  if (isFunction(ref2)) {
    callWithErrorHandling(ref2, owner, 12, [value, refs]);
  } else {
    const _isString = isString(ref2);
    const _isRef = /* @__PURE__ */ isRef2(ref2);
    if (_isString || _isRef) {
      const doSet = () => {
        if (rawRef.f) {
          const existing = _isString ? canSetSetupRef(ref2) ? setupState[ref2] : refs[ref2] : canSetRef(ref2) || !rawRef.k ? ref2.value : refs[rawRef.k];
          if (isUnmount) {
            isArray(existing) && remove(existing, refValue);
          } else {
            if (!isArray(existing)) {
              if (_isString) {
                refs[ref2] = [refValue];
                if (canSetSetupRef(ref2)) {
                  setupState[ref2] = refs[ref2];
                }
              } else {
                const newVal = [refValue];
                if (canSetRef(ref2, rawRef.k)) {
                  ref2.value = newVal;
                }
                if (rawRef.k) refs[rawRef.k] = newVal;
              }
            } else if (!existing.includes(refValue)) {
              existing.push(refValue);
            }
          }
        } else if (_isString) {
          refs[ref2] = value;
          if (canSetSetupRef(ref2)) {
            setupState[ref2] = value;
          }
        } else if (_isRef) {
          if (canSetRef(ref2, rawRef.k)) {
            ref2.value = value;
          }
          if (rawRef.k) refs[rawRef.k] = value;
        } else if (false) {
          warn$1("Invalid template ref type:", ref2, `(${typeof ref2})`);
        }
      };
      if (value) {
        const job = () => {
          doSet();
          pendingSetRefMap.delete(rawRef);
        };
        job.id = -1;
        pendingSetRefMap.set(rawRef, job);
        queuePostRenderEffect(job, parentSuspense);
      } else {
        invalidatePendingSetRef(rawRef);
        doSet();
      }
    } else if (false) {
      warn$1("Invalid template ref type:", ref2, `(${typeof ref2})`);
    }
  }
}
function invalidatePendingSetRef(rawRef) {
  const pendingSetRef = pendingSetRefMap.get(rawRef);
  if (pendingSetRef) {
    pendingSetRef.flags |= 8;
    pendingSetRefMap.delete(rawRef);
  }
}
var requestIdleCallback = getGlobalThis().requestIdleCallback || ((cb) => setTimeout(cb, 1));
var cancelIdleCallback = getGlobalThis().cancelIdleCallback || ((id) => clearTimeout(id));
var isAsyncWrapper = (i) => !!i.type.__asyncLoader;
var isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
function onActivated(hook, target) {
  registerKeepAliveHook(hook, "a", target);
}
function onDeactivated(hook, target) {
  registerKeepAliveHook(hook, "da", target);
}
function registerKeepAliveHook(hook, type, target = currentInstance) {
  const wrappedHook = hook.__wdc || (hook.__wdc = () => {
    let current = target;
    while (current) {
      if (current.isDeactivated) {
        return;
      }
      current = current.parent;
    }
    return hook();
  });
  injectHook(type, wrappedHook, target);
  if (target) {
    let current = target.parent;
    while (current && current.parent) {
      if (isKeepAlive(current.parent.vnode)) {
        injectToKeepAliveRoot(wrappedHook, type, target, current);
      }
      current = current.parent;
    }
  }
}
function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
  const injected = injectHook(
    type,
    hook,
    keepAliveRoot,
    true
    /* prepend */
  );
  const removal = injectHook("um", () => remove(keepAliveRoot[type], injected), target);
  removal.flags = 16;
}
function injectHook(type, hook, target = currentInstance, prepend = false) {
  if (target) {
    const hooks = target[type] || (target[type] = []);
    const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
      pauseTracking();
      const reset = setCurrentInstance(target);
      const res = callWithAsyncErrorHandling(hook, target, type, args);
      reset();
      resetTracking();
      return res;
    });
    if (prepend) {
      hooks.unshift(wrappedHook);
    } else {
      hooks.push(wrappedHook);
    }
    return wrappedHook;
  } else if (false) {
    const apiName = toHandlerKey(ErrorTypeStrings$1[type].replace(/ hook$/, ""));
    warn$1(`${apiName} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
  }
}
var createHook = (lifecycle) => (hook, target = currentInstance) => {
  if (!isInSSRComponentSetup || lifecycle === "sp") {
    injectHook(lifecycle, (...args) => hook(...args), target);
  }
};
var onBeforeMount = createHook("bm");
var onMounted = createHook("m");
var onBeforeUpdate = createHook("bu");
var onUpdated = createHook("u");
var onBeforeUnmount = createHook("bum");
var onUnmounted = createHook("um");
var onServerPrefetch = createHook("sp");
var onRenderTriggered = createHook("rtg");
var onRenderTracked = createHook("rtc");
function onErrorCaptured(hook, target = currentInstance) {
  injectHook("ec", hook, target);
}
var COMPONENTS = "components";
function resolveComponent(name, maybeSelfReference) {
  return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
}
var NULL_DYNAMIC_COMPONENT = /* @__PURE__ */ Symbol.for("v-ndc");
function resolveDynamicComponent(component) {
  if (isString(component)) {
    return resolveAsset(COMPONENTS, component, false) || component;
  } else {
    return component || NULL_DYNAMIC_COMPONENT;
  }
}
function resolveAsset(type, name, warnMissing = true, maybeSelfReference = false) {
  const instance = currentRenderingInstance || currentInstance;
  if (instance) {
    const Component = instance.type;
    if (type === COMPONENTS) {
      const selfName = getComponentName(Component, false);
      if (selfName && (selfName === name || selfName === camelize(name) || selfName === capitalize(camelize(name)))) {
        return Component;
      }
    }
    const res = (
      // local registration
      // check instance[type] first which is resolved for options API
      resolve(instance[type] || Component[type], name) || // global registration
      resolve(instance.appContext[type], name)
    );
    if (!res && maybeSelfReference) {
      return Component;
    }
    if (false) {
      const extra = type === COMPONENTS ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : ``;
      warn$1(`Failed to resolve ${type.slice(0, -1)}: ${name}${extra}`);
    }
    return res;
  } else if (false) {
    warn$1(`resolve${capitalize(type.slice(0, -1))} can only be used in render() or setup().`);
  }
}
function resolve(registry, name) {
  return registry && (registry[name] || registry[camelize(name)] || registry[capitalize(camelize(name))]);
}
function renderList(source, renderItem, cache, index) {
  let ret;
  const cached = cache && cache[index];
  const sourceIsArray = isArray(source);
  if (sourceIsArray || isString(source)) {
    const sourceIsReactiveArray = sourceIsArray && /* @__PURE__ */ isReactive(source);
    let needsWrap = false;
    let isReadonlySource = false;
    if (sourceIsReactiveArray) {
      needsWrap = !/* @__PURE__ */ isShallow(source);
      isReadonlySource = /* @__PURE__ */ isReadonly(source);
      source = shallowReadArray(source);
    }
    ret = new Array(source.length);
    for (let i = 0, l = source.length; i < l; i++) {
      ret[i] = renderItem(needsWrap ? isReadonlySource ? toReadonly(toReactive(source[i])) : toReactive(source[i]) : source[i], i, void 0, cached && cached[i]);
    }
  } else if (typeof source === "number") {
    if (!Number.isInteger(source) || source < 0) {
      if (false) {
        warn$1(`The v-for range expects a positive integer value but got ${source}.`);
      }
      ret = [];
    } else {
      ret = new Array(source);
      for (let i = 0; i < source; i++) {
        ret[i] = renderItem(i + 1, i, void 0, cached && cached[i]);
      }
    }
  } else if (isObject(source)) {
    if (source[Symbol.iterator]) {
      ret = Array.from(source, (item, i) => renderItem(item, i, void 0, cached && cached[i]));
    } else {
      const keys = Object.keys(source);
      ret = new Array(keys.length);
      for (let i = 0, l = keys.length; i < l; i++) {
        const key = keys[i];
        ret[i] = renderItem(source[key], key, i, cached && cached[i]);
      }
    }
  } else {
    ret = [];
  }
  if (cache) {
    cache[index] = ret;
  }
  return ret;
}
function createSlots(slots, dynamicSlots) {
  for (let i = 0; i < dynamicSlots.length; i++) {
    const slot = dynamicSlots[i];
    if (isArray(slot)) {
      for (let j = 0; j < slot.length; j++) {
        slots[slot[j].name] = slot[j].fn;
      }
    } else if (slot) {
      slots[slot.name] = slot.key ? (...args) => {
        const res = slot.fn(...args);
        if (res) res.key = slot.key;
        return res;
      } : slot.fn;
    }
  }
  return slots;
}
function renderSlot(slots, name, props, fallback, noSlotted, branchKey) {
  if (props == null) props = {};
  if (currentRenderingInstance.ce || currentRenderingInstance.parent && isAsyncWrapper(currentRenderingInstance.parent) && currentRenderingInstance.parent.ce) {
    const slotProps = branchKey != null && props.key == null ? extend({}, props, {
      key: branchKey
    }) : props;
    const hasProps = Object.keys(slotProps).length > 0;
    if (name !== "default") slotProps.name = name;
    return openBlock(), createBlock(Fragment, null, [createVNode("slot", slotProps, fallback && fallback())], hasProps ? -2 : 64);
  }
  let slot = slots[name];
  if (false) {
    warn$1(`SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template.`);
    slot = () => [];
  }
  if (slot && slot._c) {
    slot._d = false;
  }
  const prevStackSize = blockStack.length;
  openBlock();
  let rendered;
  try {
    const validSlotContent = slot && ensureValidVNode(slot(props));
    const slotKey = props.key || branchKey || // slot content array of a dynamic conditional slot may have a branch
    // key attached in the `createSlots` helper, respect that
    validSlotContent && validSlotContent.key;
    rendered = createBlock(Fragment, {
      key: (slotKey && !isSymbol(slotKey) ? slotKey : `_${name}`) + // #7256 force differentiate fallback content from actual content
      (!validSlotContent && fallback ? "_fb" : "")
    }, validSlotContent || (fallback ? fallback() : []), validSlotContent && slots._ === 1 ? 64 : -2);
  } catch (err) {
    for (let i = blockStack.length; i > prevStackSize; i--) closeBlock();
    throw err;
  } finally {
    if (slot && slot._c) {
      slot._d = true;
    }
  }
  if (!noSlotted && rendered.scopeId) {
    rendered.slotScopeIds = [rendered.scopeId + "-s"];
  }
  return rendered;
}
function ensureValidVNode(vnodes) {
  return vnodes.some((child) => {
    if (!isVNode(child)) return true;
    if (child.type === Comment) return false;
    if (child.type === Fragment && !ensureValidVNode(child.children)) return false;
    return true;
  }) ? vnodes : null;
}
function toHandlers(obj, preserveCaseIfNecessary) {
  const ret = {};
  if (false) {
    warn$1(`v-on with no argument expects an object value.`);
    return ret;
  }
  for (const key in obj) {
    ret[preserveCaseIfNecessary && /[A-Z]/.test(key) ? `on:${key}` : toHandlerKey(key)] = obj[key];
  }
  return ret;
}
var getPublicInstance = (i) => {
  if (!i) return null;
  if (isStatefulComponent(i)) return getComponentPublicInstance(i);
  return getPublicInstance(i.parent);
};
var publicPropertiesMap = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ extend(/* @__PURE__ */ Object.create(null), {
    $: (i) => i,
    $el: (i) => false ? getDevRootFragmentEl(i) : i.vnode.el,
    $data: (i) => i.data,
    $props: (i) => false ? /* @__PURE__ */ shallowReadonly(i.props) : i.props,
    $attrs: (i) => false ? /* @__PURE__ */ shallowReadonly(i.attrs) : i.attrs,
    $slots: (i) => false ? /* @__PURE__ */ shallowReadonly(i.slots) : i.slots,
    $refs: (i) => false ? /* @__PURE__ */ shallowReadonly(i.refs) : i.refs,
    $parent: (i) => getPublicInstance(i.parent),
    $root: (i) => getPublicInstance(i.root),
    $host: (i) => i.ce,
    $emit: (i) => i.emit,
    $options: (i) => true ? resolveMergedOptions(i) : i.type,
    $forceUpdate: (i) => i.f || (i.f = () => {
      queueJob(i.update);
    }),
    $nextTick: (i) => i.n || (i.n = nextTick.bind(i.proxy)),
    $watch: (i) => true ? instanceWatch.bind(i) : NOOP
  })
);
var hasSetupBinding = (state, key) => state !== EMPTY_OBJ && !state.__isScriptSetup && hasOwn(state, key);
var PublicInstanceProxyHandlers = {
  get({
    _: instance
  }, key) {
    if (key === "__v_skip") {
      return true;
    }
    const {
      ctx,
      setupState,
      data,
      props,
      accessCache,
      type,
      appContext
    } = instance;
    if (false) {
      return true;
    }
    if (key[0] !== "$") {
      const n = accessCache[key];
      if (n !== void 0) {
        switch (n) {
          case 1:
            return setupState[key];
          case 2:
            return data[key];
          case 4:
            return ctx[key];
          case 3:
            return props[key];
        }
      } else if (hasSetupBinding(setupState, key)) {
        accessCache[key] = 1;
        return setupState[key];
      } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
        accessCache[key] = 2;
        return data[key];
      } else if (hasOwn(props, key)) {
        accessCache[key] = 3;
        return props[key];
      } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
        accessCache[key] = 4;
        return ctx[key];
      } else if (shouldCacheAccess) {
        accessCache[key] = 0;
      }
    }
    const publicGetter = publicPropertiesMap[key];
    let cssModule, globalProperties;
    if (publicGetter) {
      if (key === "$attrs") {
        track(instance.attrs, "get", "");
      } else if (false) {
        track(instance, "get", key);
      }
      return publicGetter(instance);
    } else if (
      // css module (injected by vue-loader)
      (cssModule = type.__cssModules) && (cssModule = cssModule[key])
    ) {
      return cssModule;
    } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
      accessCache[key] = 4;
      return ctx[key];
    } else if (
      // global properties
      globalProperties = appContext.config.globalProperties, hasOwn(globalProperties, key)
    ) {
      {
        return globalProperties[key];
      }
    } else if (false) {
      if (data !== EMPTY_OBJ && isReservedPrefix(key[0]) && hasOwn(data, key)) {
        warn$1(`Property ${JSON.stringify(key)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`);
      } else if (instance === currentRenderingInstance) {
        warn$1(`Property ${JSON.stringify(key)} was accessed during render but is not defined on instance.`);
      }
    }
  },
  set({
    _: instance
  }, key, value) {
    const {
      data,
      setupState,
      ctx
    } = instance;
    if (hasSetupBinding(setupState, key)) {
      setupState[key] = value;
      return true;
    } else if (false) {
      warn$1(`Cannot mutate <script setup> binding "${key}" from Options API.`);
      return false;
    } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
      data[key] = value;
      return true;
    } else if (hasOwn(instance.props, key)) {
      return false;
    }
    if (key[0] === "$" && key.slice(1) in instance) {
      return false;
    } else {
      if (false) {
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          value
        });
      } else {
        ctx[key] = value;
      }
    }
    return true;
  },
  has({
    _: {
      data,
      setupState,
      accessCache,
      ctx,
      appContext,
      props,
      type
    }
  }, key) {
    let cssModules;
    return !!(accessCache[key] || data !== EMPTY_OBJ && key[0] !== "$" && hasOwn(data, key) || hasSetupBinding(setupState, key) || hasOwn(props, key) || hasOwn(ctx, key) || hasOwn(publicPropertiesMap, key) || hasOwn(appContext.config.globalProperties, key) || (cssModules = type.__cssModules) && cssModules[key]);
  },
  defineProperty(target, key, descriptor) {
    if (descriptor.get != null) {
      target._.accessCache[key] = 0;
    } else if (hasOwn(descriptor, "value")) {
      this.set(target, key, descriptor.value, null);
    }
    return Reflect.defineProperty(target, key, descriptor);
  }
};
if (false) {
  PublicInstanceProxyHandlers.ownKeys = (target) => {
    warn$1(`Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead.`);
    return Reflect.ownKeys(target);
  };
}
function normalizePropsOrEmits(props) {
  return isArray(props) ? props.reduce((normalized, p2) => (normalized[p2] = null, normalized), {}) : props;
}
var shouldCacheAccess = true;
function applyOptions(instance) {
  const options = resolveMergedOptions(instance);
  const publicThis = instance.proxy;
  const ctx = instance.ctx;
  shouldCacheAccess = false;
  if (options.beforeCreate) {
    callHook(options.beforeCreate, instance, "bc");
  }
  const {
    // state
    data: dataOptions,
    computed: computedOptions,
    methods,
    watch: watchOptions,
    provide: provideOptions,
    inject: injectOptions,
    // lifecycle
    created,
    beforeMount,
    mounted,
    beforeUpdate,
    updated,
    activated,
    deactivated,
    beforeDestroy,
    beforeUnmount,
    destroyed,
    unmounted,
    render: render2,
    renderTracked,
    renderTriggered,
    errorCaptured,
    serverPrefetch,
    // public API
    expose,
    inheritAttrs,
    // assets
    components,
    directives,
    filters
  } = options;
  const checkDuplicateProperties = false ? createDuplicateChecker() : null;
  if (false) {
    const [propsOptions] = instance.propsOptions;
    if (propsOptions) {
      for (const key in propsOptions) {
        checkDuplicateProperties("Props", key);
      }
    }
  }
  if (injectOptions) {
    resolveInjections(injectOptions, ctx, checkDuplicateProperties);
  }
  if (methods) {
    for (const key in methods) {
      const methodHandler = methods[key];
      if (isFunction(methodHandler)) {
        if (false) {
          Object.defineProperty(ctx, key, {
            value: methodHandler.bind(publicThis),
            configurable: true,
            enumerable: true,
            writable: true
          });
        } else {
          ctx[key] = methodHandler.bind(publicThis);
        }
        if (false) {
          checkDuplicateProperties("Methods", key);
        }
      } else if (false) {
        warn$1(`Method "${key}" has type "${typeof methodHandler}" in the component definition. Did you reference the function correctly?`);
      }
    }
  }
  if (dataOptions) {
    if (false) {
      warn$1(`The data option must be a function. Plain object usage is no longer supported.`);
    }
    const data = dataOptions.call(publicThis, publicThis);
    if (false) {
      warn$1(`data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>.`);
    }
    if (!isObject(data)) {
    } else {
      instance.data = /* @__PURE__ */ reactive(data);
      if (false) {
        for (const key in data) {
          checkDuplicateProperties("Data", key);
          if (!isReservedPrefix(key[0])) {
            Object.defineProperty(ctx, key, {
              configurable: true,
              enumerable: true,
              get: () => data[key],
              set: NOOP
            });
          }
        }
      }
    }
  }
  shouldCacheAccess = true;
  if (computedOptions) {
    for (const key in computedOptions) {
      const opt = computedOptions[key];
      const get = isFunction(opt) ? opt.bind(publicThis, publicThis) : isFunction(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP;
      if (false) {
        warn$1(`Computed property "${key}" has no getter.`);
      }
      const set = !isFunction(opt) && isFunction(opt.set) ? opt.set.bind(publicThis) : false ? () => {
        warn$1(`Write operation failed: computed property "${key}" is readonly.`);
      } : NOOP;
      const c = computed2({
        get,
        set
      });
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => c.value,
        set: (v) => c.value = v
      });
      if (false) {
        checkDuplicateProperties("Computed", key);
      }
    }
  }
  if (watchOptions) {
    for (const key in watchOptions) {
      createWatcher(watchOptions[key], ctx, publicThis, key);
    }
  }
  if (provideOptions) {
    const provides = isFunction(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
    Reflect.ownKeys(provides).forEach((key) => {
      provide(key, provides[key]);
    });
  }
  if (created) {
    callHook(created, instance, "c");
  }
  function registerLifecycleHook(register, hook) {
    if (isArray(hook)) {
      hook.forEach((_hook) => register(_hook.bind(publicThis)));
    } else if (hook) {
      register(hook.bind(publicThis));
    }
  }
  registerLifecycleHook(onBeforeMount, beforeMount);
  registerLifecycleHook(onMounted, mounted);
  registerLifecycleHook(onBeforeUpdate, beforeUpdate);
  registerLifecycleHook(onUpdated, updated);
  registerLifecycleHook(onActivated, activated);
  registerLifecycleHook(onDeactivated, deactivated);
  registerLifecycleHook(onErrorCaptured, errorCaptured);
  registerLifecycleHook(onRenderTracked, renderTracked);
  registerLifecycleHook(onRenderTriggered, renderTriggered);
  registerLifecycleHook(onBeforeUnmount, beforeUnmount);
  registerLifecycleHook(onUnmounted, unmounted);
  registerLifecycleHook(onServerPrefetch, serverPrefetch);
  if (isArray(expose)) {
    if (expose.length) {
      const exposed = instance.exposed || (instance.exposed = {});
      expose.forEach((key) => {
        Object.defineProperty(exposed, key, {
          get: () => publicThis[key],
          set: (val) => publicThis[key] = val,
          enumerable: true
        });
      });
    } else if (!instance.exposed) {
      instance.exposed = {};
    }
  }
  if (render2 && instance.render === NOOP) {
    instance.render = render2;
  }
  if (inheritAttrs != null) {
    instance.inheritAttrs = inheritAttrs;
  }
  if (components) instance.components = components;
  if (directives) instance.directives = directives;
  if (serverPrefetch) {
    markAsyncBoundary(instance);
  }
}
function resolveInjections(injectOptions, ctx, checkDuplicateProperties = NOOP) {
  if (isArray(injectOptions)) {
    injectOptions = normalizeInject(injectOptions);
  }
  for (const key in injectOptions) {
    const opt = injectOptions[key];
    let injected;
    if (isObject(opt)) {
      if ("default" in opt) {
        injected = inject(opt.from || key, opt.default, true);
      } else {
        injected = inject(opt.from || key);
      }
    } else {
      injected = inject(opt);
    }
    if (/* @__PURE__ */ isRef2(injected)) {
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => injected.value,
        set: (v) => injected.value = v
      });
    } else {
      ctx[key] = injected;
    }
    if (false) {
      checkDuplicateProperties("Inject", key);
    }
  }
}
function callHook(hook, instance, type) {
  callWithAsyncErrorHandling(isArray(hook) ? hook.map((h2) => h2.bind(instance.proxy)) : hook.bind(instance.proxy), instance, type);
}
function createWatcher(raw, ctx, publicThis, key) {
  let getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
  if (isString(raw)) {
    const handler = ctx[raw];
    if (isFunction(handler)) {
      {
        watch2(getter, handler);
      }
    } else if (false) {
      warn$1(`Invalid watch handler specified by key "${raw}"`, handler);
    }
  } else if (isFunction(raw)) {
    {
      watch2(getter, raw.bind(publicThis));
    }
  } else if (isObject(raw)) {
    if (isArray(raw)) {
      raw.forEach((r) => createWatcher(r, ctx, publicThis, key));
    } else {
      const handler = isFunction(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
      if (isFunction(handler)) {
        watch2(getter, handler, raw);
      } else if (false) {
        warn$1(`Invalid watch handler specified by key "${raw.handler}"`, handler);
      }
    }
  } else if (false) {
    warn$1(`Invalid watch option: "${key}"`, raw);
  }
}
function resolveMergedOptions(instance) {
  const base = instance.type;
  const {
    mixins,
    extends: extendsOptions
  } = base;
  const {
    mixins: globalMixins,
    optionsCache: cache,
    config: {
      optionMergeStrategies
    }
  } = instance.appContext;
  const cached = cache.get(base);
  let resolved;
  if (cached) {
    resolved = cached;
  } else if (!globalMixins.length && !mixins && !extendsOptions) {
    {
      resolved = base;
    }
  } else {
    resolved = {};
    if (globalMixins.length) {
      globalMixins.forEach((m2) => mergeOptions(resolved, m2, optionMergeStrategies, true));
    }
    mergeOptions(resolved, base, optionMergeStrategies);
  }
  if (isObject(base)) {
    cache.set(base, resolved);
  }
  return resolved;
}
function mergeOptions(to, from, strats, asMixin = false) {
  const {
    mixins,
    extends: extendsOptions
  } = from;
  if (extendsOptions) {
    mergeOptions(to, extendsOptions, strats, true);
  }
  if (mixins) {
    mixins.forEach((m2) => mergeOptions(to, m2, strats, true));
  }
  for (const key in from) {
    if (asMixin && key === "expose") {
    } else {
      const strat = internalOptionMergeStrats[key] || strats && strats[key];
      to[key] = strat ? strat(to[key], from[key]) : from[key];
    }
  }
  return to;
}
var internalOptionMergeStrats = {
  data: mergeDataFn,
  props: mergeEmitsOrPropsOptions,
  emits: mergeEmitsOrPropsOptions,
  // objects
  methods: mergeObjectOptions,
  computed: mergeObjectOptions,
  // lifecycle
  beforeCreate: mergeAsArray,
  created: mergeAsArray,
  beforeMount: mergeAsArray,
  mounted: mergeAsArray,
  beforeUpdate: mergeAsArray,
  updated: mergeAsArray,
  beforeDestroy: mergeAsArray,
  beforeUnmount: mergeAsArray,
  destroyed: mergeAsArray,
  unmounted: mergeAsArray,
  activated: mergeAsArray,
  deactivated: mergeAsArray,
  errorCaptured: mergeAsArray,
  serverPrefetch: mergeAsArray,
  // assets
  components: mergeObjectOptions,
  directives: mergeObjectOptions,
  // watch
  watch: mergeWatchOptions,
  // provide / inject
  provide: mergeDataFn,
  inject: mergeInject
};
function mergeDataFn(to, from) {
  if (!from) {
    return to;
  }
  if (!to) {
    return from;
  }
  return function mergedDataFn() {
    return extend(isFunction(to) ? to.call(this, this) : to, isFunction(from) ? from.call(this, this) : from);
  };
}
function mergeInject(to, from) {
  return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}
function normalizeInject(raw) {
  if (isArray(raw)) {
    const res = {};
    for (let i = 0; i < raw.length; i++) {
      res[raw[i]] = raw[i];
    }
    return res;
  }
  return raw;
}
function mergeAsArray(to, from) {
  return to ? [...new Set([].concat(to, from))] : from;
}
function mergeObjectOptions(to, from) {
  return to ? extend(/* @__PURE__ */ Object.create(null), to, from) : from;
}
function mergeEmitsOrPropsOptions(to, from) {
  if (to) {
    if (isArray(to) && isArray(from)) {
      return [.../* @__PURE__ */ new Set([...to, ...from])];
    }
    return extend(/* @__PURE__ */ Object.create(null), normalizePropsOrEmits(to), normalizePropsOrEmits(from != null ? from : {}));
  } else {
    return from;
  }
}
function mergeWatchOptions(to, from) {
  if (!to) return from;
  if (!from) return to;
  const merged = extend(/* @__PURE__ */ Object.create(null), to);
  for (const key in from) {
    merged[key] = mergeAsArray(to[key], from[key]);
  }
  return merged;
}
function createAppContext() {
  return {
    app: null,
    config: {
      isNativeTag: NO,
      performance: false,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
var uid$1 = 0;
function createAppAPI(render2, hydrate) {
  return function createApp2(rootComponent, rootProps = null) {
    if (!isFunction(rootComponent)) {
      rootComponent = extend({}, rootComponent);
    }
    if (rootProps != null && !isObject(rootProps)) {
      rootProps = null;
    }
    const context = createAppContext();
    const installedPlugins = /* @__PURE__ */ new WeakSet();
    const pluginCleanupFns = [];
    let isMounted = false;
    const app = context.app = {
      _uid: uid$1++,
      _component: rootComponent,
      _props: rootProps,
      _container: null,
      _context: context,
      _instance: null,
      version,
      get config() {
        return context.config;
      },
      set config(v) {
        if (false) {
          warn$1(`app.config cannot be replaced. Modify individual options instead.`);
        }
      },
      use(plugin, ...options) {
        if (installedPlugins.has(plugin)) {
        } else if (plugin && isFunction(plugin.install)) {
          installedPlugins.add(plugin);
          plugin.install(app, ...options);
        } else if (isFunction(plugin)) {
          installedPlugins.add(plugin);
          plugin(app, ...options);
        } else if (false) {
          warn$1(`A plugin must either be a function or an object with an "install" function.`);
        }
        return app;
      },
      mixin(mixin) {
        if (true) {
          if (!context.mixins.includes(mixin)) {
            context.mixins.push(mixin);
          } else if (false) {
            warn$1("Mixin has already been applied to target app" + (mixin.name ? `: ${mixin.name}` : ""));
          }
        } else if (false) {
          warn$1("Mixins are only available in builds supporting Options API");
        }
        return app;
      },
      component(name, component) {
        if (false) {
          validateComponentName(name, context.config);
        }
        if (!component) {
          return context.components[name];
        }
        if (false) {
          warn$1(`Component "${name}" has already been registered in target app.`);
        }
        context.components[name] = component;
        return app;
      },
      directive(name, directive) {
        if (false) {
          validateDirectiveName(name);
        }
        if (!directive) {
          return context.directives[name];
        }
        if (false) {
          warn$1(`Directive "${name}" has already been registered in target app.`);
        }
        context.directives[name] = directive;
        return app;
      },
      mount(rootContainer, isHydrate, namespace) {
        if (!isMounted) {
          if (false) {
            warn$1(`There is already an app instance mounted on the host container.
 If you want to mount another app on the same host container, you need to unmount the previous app by calling \`app.unmount()\` first.`);
          }
          const vnode = app._ceVNode || createVNode(rootComponent, rootProps);
          vnode.appContext = context;
          if (namespace === true) {
            namespace = "svg";
          } else if (namespace === false) {
            namespace = void 0;
          }
          if (false) {
            context.reload = () => {
              const cloned = cloneVNode(vnode);
              cloned.el = null;
              render2(cloned, rootContainer, namespace);
            };
          }
          if (isHydrate && hydrate) {
            hydrate(vnode, rootContainer);
          } else {
            render2(vnode, rootContainer, namespace);
          }
          isMounted = true;
          app._container = rootContainer;
          rootContainer.__vue_app__ = app;
          if (false) {
            app._instance = vnode.component;
            devtoolsInitApp(app, version);
          }
          return getComponentPublicInstance(vnode.component);
        } else if (false) {
          warn$1(`App has already been mounted.
If you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. \`const createMyApp = () => createApp(App)\``);
        }
      },
      onUnmount(cleanupFn) {
        if (false) {
          warn$1(`Expected function as first argument to app.onUnmount(), but got ${typeof cleanupFn}`);
        }
        pluginCleanupFns.push(cleanupFn);
      },
      unmount() {
        if (isMounted) {
          callWithAsyncErrorHandling(pluginCleanupFns, app._instance, 16);
          render2(null, app._container);
          if (false) {
            app._instance = null;
            devtoolsUnmountApp(app);
          }
          delete app._container.__vue_app__;
        } else if (false) {
          warn$1(`Cannot unmount an app that is not mounted.`);
        }
      },
      provide(key, value) {
        if (false) {
          if (hasOwn(context.provides, key)) {
            warn$1(`App already provides property with key "${String(key)}". It will be overwritten with the new value.`);
          } else {
            warn$1(`App already provides property with key "${String(key)}" inherited from its parent element. It will be overwritten with the new value.`);
          }
        }
        context.provides[key] = value;
        return app;
      },
      runWithContext(fn) {
        const lastApp = currentApp;
        currentApp = app;
        try {
          return fn();
        } finally {
          currentApp = lastApp;
        }
      }
    };
    return app;
  };
}
var currentApp = null;
var getModelModifiers = (props, modelName) => {
  return modelName === "modelValue" || modelName === "model-value" ? props.modelModifiers : props[`${modelName}Modifiers`] || props[`${camelize(modelName)}Modifiers`] || props[`${hyphenate(modelName)}Modifiers`];
};
function emit(instance, event, ...rawArgs) {
  if (instance.isUnmounted) return;
  const props = instance.vnode.props || EMPTY_OBJ;
  if (false) {
    const {
      emitsOptions,
      propsOptions: [propsOptions]
    } = instance;
    if (emitsOptions) {
      if (!(event in emitsOptions) && true) {
        if (!propsOptions || !(toHandlerKey(camelize(event)) in propsOptions)) {
          warn$1(`Component emitted event "${event}" but it is neither declared in the emits option nor as an "${toHandlerKey(camelize(event))}" prop.`);
        }
      } else {
        const validator = emitsOptions[event];
        if (isFunction(validator)) {
          const isValid = validator(...rawArgs);
          if (!isValid) {
            warn$1(`Invalid event arguments: event validation failed for event "${event}".`);
          }
        }
      }
    }
  }
  let args = rawArgs;
  const isModelListener2 = event.startsWith("update:");
  const modifiers = isModelListener2 && getModelModifiers(props, event.slice(7));
  if (modifiers) {
    if (modifiers.trim) {
      args = rawArgs.map((a) => isString(a) ? a.trim() : a);
    }
    if (modifiers.number) {
      args = args.map(looseToNumber);
    }
  }
  if (false) {
    devtoolsComponentEmit(instance, event, args);
  }
  if (false) {
    const lowerCaseEvent = event.toLowerCase();
    if (lowerCaseEvent !== event && props[toHandlerKey(lowerCaseEvent)]) {
      warn$1(`Event "${lowerCaseEvent}" is emitted in component ${formatComponentName(instance, instance.type)} but the handler is registered for "${event}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${hyphenate(event)}" instead of "${event}".`);
    }
  }
  let handlerName;
  let handler = props[handlerName = toHandlerKey(event)] || // also try camelCase event handler (#2249)
  props[handlerName = toHandlerKey(camelize(event))];
  if (!handler && isModelListener2) {
    handler = props[handlerName = toHandlerKey(hyphenate(event))];
  }
  if (handler) {
    callWithAsyncErrorHandling(handler, instance, 6, args);
  }
  const onceHandler = props[handlerName + `Once`];
  if (onceHandler) {
    if (!instance.emitted) {
      instance.emitted = {};
    } else if (instance.emitted[handlerName]) {
      return;
    }
    instance.emitted[handlerName] = true;
    callWithAsyncErrorHandling(onceHandler, instance, 6, args);
  }
}
var mixinEmitsCache = /* @__PURE__ */ new WeakMap();
function normalizeEmitsOptions(comp, appContext, asMixin = false) {
  const cache = asMixin ? mixinEmitsCache : appContext.emitsCache;
  const cached = cache.get(comp);
  if (cached !== void 0) {
    return cached;
  }
  const raw = comp.emits;
  let normalized = {};
  let hasExtends = false;
  if (!isFunction(comp)) {
    const extendEmits = (raw2) => {
      const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
      if (normalizedFromExtend) {
        hasExtends = true;
        extend(normalized, normalizedFromExtend);
      }
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendEmits);
    }
    if (comp.extends) {
      extendEmits(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendEmits);
    }
  }
  if (!raw && !hasExtends) {
    if (isObject(comp)) {
      cache.set(comp, null);
    }
    return null;
  }
  if (isArray(raw)) {
    raw.forEach((key) => normalized[key] = null);
  } else {
    extend(normalized, raw);
  }
  if (isObject(comp)) {
    cache.set(comp, normalized);
  }
  return normalized;
}
function isEmitListener(options, key) {
  if (!options || !isOn(key)) {
    return false;
  }
  key = key.slice(2);
  key = key === "Once" ? key : key.replace(/Once$/, "");
  return hasOwn(options, key[0].toLowerCase() + key.slice(1)) || hasOwn(options, hyphenate(key)) || hasOwn(options, key);
}
function renderComponentRoot(instance) {
  const {
    type: Component,
    vnode,
    proxy,
    withProxy,
    propsOptions: [propsOptions],
    slots,
    attrs,
    emit: emit2,
    render: render2,
    renderCache,
    props,
    data,
    setupState,
    ctx,
    inheritAttrs
  } = instance;
  const prev = setCurrentRenderingInstance(instance);
  let result;
  let fallthroughAttrs;
  if (false) {
    accessedAttrs = false;
  }
  try {
    if (vnode.shapeFlag & 4) {
      const proxyToUse = withProxy || proxy;
      const thisProxy = false ? new Proxy(proxyToUse, {
        get(target, key, receiver) {
          warn$1(`Property '${String(key)}' was accessed via 'this'. Avoid using 'this' in templates.`);
          return Reflect.get(target, key, receiver);
        }
      }) : proxyToUse;
      result = normalizeVNode(render2.call(thisProxy, proxyToUse, renderCache, false ? /* @__PURE__ */ shallowReadonly(props) : props, setupState, data, ctx));
      fallthroughAttrs = attrs;
    } else {
      const render22 = Component;
      if (false) {
        markAttrsAccessed();
      }
      result = normalizeVNode(render22.length > 1 ? render22(false ? /* @__PURE__ */ shallowReadonly(props) : props, false ? {
        get attrs() {
          markAttrsAccessed();
          return /* @__PURE__ */ shallowReadonly(attrs);
        },
        slots,
        emit: emit2
      } : {
        attrs,
        slots,
        emit: emit2
      }) : render22(false ? /* @__PURE__ */ shallowReadonly(props) : props, null));
      fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
    }
  } catch (err) {
    blockStack.length = 0;
    handleError(err, instance, 1);
    result = createVNode(Comment);
  }
  let root = result;
  let setRoot = void 0;
  if (false) {
    [root, setRoot] = getChildRoot(result);
  }
  if (fallthroughAttrs && inheritAttrs !== false) {
    const keys = Object.keys(fallthroughAttrs);
    const {
      shapeFlag
    } = root;
    if (keys.length) {
      if (shapeFlag & (1 | 6)) {
        if (propsOptions && keys.some(isModelListener)) {
          fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions);
        }
        root = cloneVNode(root, fallthroughAttrs, false, true);
      } else if (false) {
        const allAttrs = Object.keys(attrs);
        const eventAttrs = [];
        const extraAttrs = [];
        for (let i = 0, l = allAttrs.length; i < l; i++) {
          const key = allAttrs[i];
          if (isOn(key)) {
            if (!isModelListener(key)) {
              eventAttrs.push(key[2].toLowerCase() + key.slice(3));
            }
          } else {
            extraAttrs.push(key);
          }
        }
        if (extraAttrs.length) {
          warn$1(`Extraneous non-props attributes (${extraAttrs.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`);
        }
        if (eventAttrs.length) {
          warn$1(`Extraneous non-emits event listeners (${eventAttrs.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
        }
      }
    }
  }
  if (vnode.dirs) {
    if (false) {
      warn$1(`Runtime directive used on component with non-element root node. The directives will not function as intended.`);
    }
    root = cloneVNode(root, null, false, true);
    root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
  }
  if (vnode.transition) {
    const child = isTeleport(root.type) ? getInnerChild$1(root) || root : root;
    if (false) {
      warn$1(`Component inside <Transition> renders non-element root node that cannot be animated.`);
    }
    setTransitionHooks(child, vnode.transition);
  }
  if (false) {
    setRoot(root);
  } else {
    result = root;
  }
  setCurrentRenderingInstance(prev);
  return result;
}
function filterSingleRoot(children, recurse = true) {
  let singleRoot;
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (isVNode(child)) {
      if (child.type !== Comment || child.children === "v-if") {
        if (singleRoot) {
          return;
        } else {
          singleRoot = child;
          if (false) {
            return filterSingleRoot(singleRoot.children);
          }
        }
      }
    } else {
      return;
    }
  }
  return singleRoot;
}
var getFunctionalFallthrough = (attrs) => {
  let res;
  for (const key in attrs) {
    if (key === "class" || key === "style" || isOn(key)) {
      (res || (res = {}))[key] = attrs[key];
    }
  }
  return res;
};
var filterModelListeners = (attrs, props) => {
  const res = {};
  for (const key in attrs) {
    if (!isModelListener(key) || !(key.slice(9) in props)) {
      res[key] = attrs[key];
    }
  }
  return res;
};
function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
  const {
    props: prevProps,
    children: prevChildren,
    component
  } = prevVNode;
  const {
    props: nextProps,
    children: nextChildren,
    patchFlag
  } = nextVNode;
  const emits = component.emitsOptions;
  if (false) {
    return true;
  }
  if (nextVNode.dirs || nextVNode.transition) {
    return true;
  }
  if (optimized && patchFlag >= 0) {
    if (patchFlag & 1024) {
      return true;
    }
    if (patchFlag & 16) {
      if (!prevProps) {
        return !!nextProps;
      }
      return hasPropsChanged(prevProps, nextProps, emits);
    } else if (patchFlag & 8) {
      const dynamicProps = nextVNode.dynamicProps;
      for (let i = 0; i < dynamicProps.length; i++) {
        const key = dynamicProps[i];
        if (hasPropValueChanged(nextProps, prevProps, key) && !isEmitListener(emits, key)) {
          return true;
        }
      }
    }
  } else {
    if (prevChildren || nextChildren) {
      if (!nextChildren || !nextChildren.$stable) {
        return true;
      }
    }
    if (prevProps === nextProps) {
      return false;
    }
    if (!prevProps) {
      return !!nextProps;
    }
    if (!nextProps) {
      return true;
    }
    return hasPropsChanged(prevProps, nextProps, emits);
  }
  return false;
}
function hasPropsChanged(prevProps, nextProps, emitsOptions) {
  const nextKeys = Object.keys(nextProps);
  if (nextKeys.length !== Object.keys(prevProps).length) {
    return true;
  }
  for (let i = 0; i < nextKeys.length; i++) {
    const key = nextKeys[i];
    if (!hasOwn(prevProps, key) || hasPropValueChanged(nextProps, prevProps, key) && !isEmitListener(emitsOptions, key)) {
      return true;
    }
  }
  return false;
}
function hasPropValueChanged(nextProps, prevProps, key) {
  const nextProp = nextProps[key];
  const prevProp = prevProps[key];
  if (key === "style" && isObject(nextProp) && isObject(prevProp)) {
    return !looseEqual(nextProp, prevProp);
  }
  return nextProp !== prevProp;
}
function updateHOCHostEl({
  vnode,
  parent,
  suspense
}, el) {
  while (parent) {
    const root = parent.subTree;
    if (root.suspense && root.suspense.activeBranch === vnode) {
      root.suspense.vnode.el = root.el = el;
      vnode = root;
    }
    if (root === vnode) {
      (vnode = parent.vnode).el = el;
      parent = parent.parent;
    } else {
      break;
    }
  }
  if (suspense && suspense.activeBranch === vnode) {
    suspense.vnode.el = el;
  }
}
var internalObjectProto = {};
var createInternalObject = () => Object.create(internalObjectProto);
var isInternalObject = (obj) => Object.getPrototypeOf(obj) === internalObjectProto;
function initProps(instance, rawProps, isStateful, isSSR = false) {
  const props = {};
  const attrs = createInternalObject();
  instance.propsDefaults = /* @__PURE__ */ Object.create(null);
  setFullProps(instance, rawProps, props, attrs);
  for (const key in instance.propsOptions[0]) {
    if (!(key in props)) {
      props[key] = void 0;
    }
  }
  if (false) {
    validateProps(rawProps || {}, props, instance);
  }
  if (isStateful) {
    instance.props = isSSR ? props : /* @__PURE__ */ shallowReactive(props);
  } else {
    if (!instance.type.props) {
      instance.props = attrs;
    } else {
      instance.props = props;
    }
  }
  instance.attrs = attrs;
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
  const {
    props,
    attrs,
    vnode: {
      patchFlag
    }
  } = instance;
  const rawCurrentProps = /* @__PURE__ */ toRaw(props);
  const [options] = instance.propsOptions;
  let hasAttrsChanged = false;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (optimized || patchFlag > 0) && !(patchFlag & 16)
  ) {
    if (patchFlag & 8) {
      const propsToUpdate = instance.vnode.dynamicProps;
      for (let i = 0; i < propsToUpdate.length; i++) {
        let key = propsToUpdate[i];
        if (isEmitListener(instance.emitsOptions, key)) {
          continue;
        }
        const value = rawProps[key];
        if (options) {
          if (hasOwn(attrs, key)) {
            if (value !== attrs[key]) {
              attrs[key] = value;
              hasAttrsChanged = true;
            }
          } else {
            const camelizedKey = camelize(key);
            props[camelizedKey] = resolvePropValue(options, rawCurrentProps, camelizedKey, value, instance, false);
          }
        } else {
          if (value !== attrs[key]) {
            attrs[key] = value;
            hasAttrsChanged = true;
          }
        }
      }
    }
  } else {
    if (setFullProps(instance, rawProps, props, attrs)) {
      hasAttrsChanged = true;
    }
    let kebabKey;
    for (const key in rawCurrentProps) {
      if (!rawProps || // for camelCase
      !hasOwn(rawProps, key) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((kebabKey = hyphenate(key)) === key || !hasOwn(rawProps, kebabKey))) {
        if (options) {
          if (rawPrevProps && // for camelCase
          (rawPrevProps[key] !== void 0 || // for kebab-case
          rawPrevProps[kebabKey] !== void 0)) {
            props[key] = resolvePropValue(options, rawCurrentProps, key, void 0, instance, true);
          }
        } else {
          delete props[key];
        }
      }
    }
    if (attrs !== rawCurrentProps) {
      for (const key in attrs) {
        if (!rawProps || !hasOwn(rawProps, key) && true) {
          delete attrs[key];
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (hasAttrsChanged) {
    trigger(instance.attrs, "set", "");
  }
  if (false) {
    validateProps(rawProps || {}, props, instance);
  }
}
function setFullProps(instance, rawProps, props, attrs) {
  const [options, needCastKeys] = instance.propsOptions;
  let hasAttrsChanged = false;
  let rawCastValues;
  if (rawProps) {
    for (let key in rawProps) {
      if (isReservedProp(key)) {
        continue;
      }
      const value = rawProps[key];
      let camelKey;
      if (options && hasOwn(options, camelKey = camelize(key))) {
        if (!needCastKeys || !needCastKeys.includes(camelKey)) {
          props[camelKey] = value;
        } else {
          (rawCastValues || (rawCastValues = {}))[camelKey] = value;
        }
      } else if (!isEmitListener(instance.emitsOptions, key)) {
        if (!(key in attrs) || value !== attrs[key]) {
          attrs[key] = value;
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (needCastKeys) {
    const rawCurrentProps = /* @__PURE__ */ toRaw(props);
    const castValues = rawCastValues || EMPTY_OBJ;
    for (let i = 0; i < needCastKeys.length; i++) {
      const key = needCastKeys[i];
      props[key] = resolvePropValue(options, rawCurrentProps, key, castValues[key], instance, !hasOwn(castValues, key));
    }
  }
  return hasAttrsChanged;
}
function resolvePropValue(options, props, key, value, instance, isAbsent) {
  const opt = options[key];
  if (opt != null) {
    const hasDefault = hasOwn(opt, "default");
    if (hasDefault && value === void 0) {
      const defaultValue = opt.default;
      if (opt.type !== Function && !opt.skipFactory && isFunction(defaultValue)) {
        const {
          propsDefaults
        } = instance;
        if (key in propsDefaults) {
          value = propsDefaults[key];
        } else {
          const reset = setCurrentInstance(instance);
          value = propsDefaults[key] = defaultValue.call(null, props);
          reset();
        }
      } else {
        value = defaultValue;
      }
      if (instance.ce) {
        instance.ce._setProp(key, value);
      }
    }
    if (opt[
      0
      /* shouldCast */
    ]) {
      if (isAbsent && !hasDefault) {
        value = false;
      } else if (opt[
        1
        /* shouldCastTrue */
      ] && (value === "" || value === hyphenate(key))) {
        value = true;
      }
    }
  }
  return value;
}
var mixinPropsCache = /* @__PURE__ */ new WeakMap();
function normalizePropsOptions(comp, appContext, asMixin = false) {
  const cache = asMixin ? mixinPropsCache : appContext.propsCache;
  const cached = cache.get(comp);
  if (cached) {
    return cached;
  }
  const raw = comp.props;
  const normalized = {};
  const needCastKeys = [];
  let hasExtends = false;
  if (!isFunction(comp)) {
    const extendProps = (raw2) => {
      hasExtends = true;
      const [props, keys] = normalizePropsOptions(raw2, appContext, true);
      extend(normalized, props);
      if (keys) needCastKeys.push(...keys);
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendProps);
    }
    if (comp.extends) {
      extendProps(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendProps);
    }
  }
  if (!raw && !hasExtends) {
    if (isObject(comp)) {
      cache.set(comp, EMPTY_ARR);
    }
    return EMPTY_ARR;
  }
  if (isArray(raw)) {
    for (let i = 0; i < raw.length; i++) {
      if (false) {
        warn$1(`props must be strings when using array syntax.`, raw[i]);
      }
      const normalizedKey = camelize(raw[i]);
      if (validatePropName(normalizedKey)) {
        normalized[normalizedKey] = EMPTY_OBJ;
      }
    }
  } else if (raw) {
    if (false) {
      warn$1(`invalid props options`, raw);
    }
    for (const key in raw) {
      const normalizedKey = camelize(key);
      if (validatePropName(normalizedKey)) {
        const opt = raw[key];
        const prop = normalized[normalizedKey] = isArray(opt) || isFunction(opt) ? {
          type: opt
        } : extend({}, opt);
        const propType = prop.type;
        let shouldCast = false;
        let shouldCastTrue = true;
        if (isArray(propType)) {
          for (let index = 0; index < propType.length; ++index) {
            const type = propType[index];
            const typeName = isFunction(type) && type.name;
            if (typeName === "Boolean") {
              shouldCast = true;
              break;
            } else if (typeName === "String") {
              shouldCastTrue = false;
            }
          }
        } else {
          shouldCast = isFunction(propType) && propType.name === "Boolean";
        }
        prop[
          0
          /* shouldCast */
        ] = shouldCast;
        prop[
          1
          /* shouldCastTrue */
        ] = shouldCastTrue;
        if (shouldCast || hasOwn(prop, "default")) {
          needCastKeys.push(normalizedKey);
        }
      }
    }
  }
  const res = [normalized, needCastKeys];
  if (isObject(comp)) {
    cache.set(comp, res);
  }
  return res;
}
function validatePropName(key) {
  if (key[0] !== "$" && !isReservedProp(key)) {
    return true;
  } else if (false) {
    warn$1(`Invalid prop name: "${key}" is a reserved property.`);
  }
  return false;
}
var isInternalKey = (key) => key === "_" || key === "_ctx" || key === "$stable";
var normalizeSlotValue = (value) => isArray(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
var normalizeSlot = (key, rawSlot, ctx) => {
  if (rawSlot._n) {
    return rawSlot;
  }
  const normalized = withCtx((...args) => {
    if (false) {
      warn$1(`Slot "${key}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`);
    }
    return normalizeSlotValue(rawSlot(...args));
  }, ctx);
  normalized._c = false;
  return normalized;
};
var normalizeObjectSlots = (rawSlots, slots, instance) => {
  const ctx = rawSlots._ctx;
  for (const key in rawSlots) {
    if (isInternalKey(key)) continue;
    const value = rawSlots[key];
    if (isFunction(value)) {
      slots[key] = normalizeSlot(key, value, ctx);
    } else if (value != null) {
      if (false) {
        warn$1(`Non-function value encountered for slot "${key}". Prefer function slots for better performance.`);
      }
      const normalized = normalizeSlotValue(value);
      slots[key] = () => normalized;
    }
  }
};
var normalizeVNodeSlots = (instance, children) => {
  if (false) {
    warn$1(`Non-function value encountered for default slot. Prefer function slots for better performance.`);
  }
  const normalized = normalizeSlotValue(children);
  instance.slots.default = () => normalized;
};
var assignSlots = (slots, children, optimized) => {
  for (const key in children) {
    if (optimized || !isInternalKey(key)) {
      slots[key] = children[key];
    }
  }
};
var initSlots = (instance, children, optimized) => {
  const slots = instance.slots = createInternalObject();
  if (instance.vnode.shapeFlag & 32) {
    const type = children._;
    if (type) {
      assignSlots(slots, children, optimized);
      if (optimized) {
        def(slots, "_", type, true);
      }
    } else {
      normalizeObjectSlots(children, slots);
    }
  } else if (children) {
    normalizeVNodeSlots(instance, children);
  }
};
var updateSlots = (instance, children, optimized) => {
  const {
    vnode,
    slots
  } = instance;
  let needDeletionCheck = true;
  let deletionComparisonTarget = EMPTY_OBJ;
  if (vnode.shapeFlag & 32) {
    const type = children._;
    if (type) {
      if (false) {
        assignSlots(slots, children, optimized);
        trigger(instance, "set", "$slots");
      } else if (optimized && type === 1) {
        needDeletionCheck = false;
      } else {
        assignSlots(slots, children, optimized);
      }
    } else {
      needDeletionCheck = !children.$stable;
      normalizeObjectSlots(children, slots);
    }
    deletionComparisonTarget = children;
  } else if (children) {
    normalizeVNodeSlots(instance, children);
    deletionComparisonTarget = {
      default: 1
    };
  }
  if (needDeletionCheck) {
    for (const key in slots) {
      if (!isInternalKey(key) && deletionComparisonTarget[key] == null) {
        delete slots[key];
      }
    }
  }
};
function initFeatureFlags() {
  const needWarn = [];
  if (false) {
    getGlobalThis().__VUE_OPTIONS_API__ = true;
  }
  if (false) {
    getGlobalThis().__VUE_PROD_DEVTOOLS__ = false;
  }
  if (false) {
    getGlobalThis().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false;
  }
  if (false) {
    const multi = needWarn.length > 1;
    console.warn(`Feature flag${multi ? `s` : ``} ${needWarn.join(", ")} ${multi ? `are` : `is`} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`);
  }
}
var queuePostRenderEffect = queueEffectWithSuspense;
function createRenderer(options) {
  return baseCreateRenderer(options);
}
function baseCreateRenderer(options, createHydrationFns) {
  {
    initFeatureFlags();
  }
  const target = getGlobalThis();
  target.__VUE__ = true;
  if (false) {
    setDevtoolsHook$1(target.__VUE_DEVTOOLS_GLOBAL_HOOK__, target);
  }
  const {
    insert: hostInsert,
    remove: hostRemove,
    patchProp: hostPatchProp,
    createElement: hostCreateElement,
    createText: hostCreateText,
    createComment: hostCreateComment,
    setText: hostSetText,
    setElementText: hostSetElementText,
    parentNode: hostParentNode,
    nextSibling: hostNextSibling,
    setScopeId: hostSetScopeId = NOOP,
    insertStaticContent: hostInsertStaticContent
  } = options;
  const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, namespace = void 0, slotScopeIds = null, optimized = false ? false : !!n2.dynamicChildren) => {
    if (n1 === n2) {
      return;
    }
    if (n1 && !isSameVNodeType(n1, n2)) {
      anchor = getNextHostNode(n1);
      unmount(n1, parentComponent, parentSuspense, true);
      n1 = null;
    }
    if (n2.patchFlag === -2) {
      optimized = false;
      n2.dynamicChildren = null;
    }
    if (n2.dynamicChildren && n1 && n1.dynamicChildren && n1.dynamicChildren.hasOnce) {
      if (n2.dynamicChildren === EMPTY_ARR) {
        n2.dynamicChildren = [];
      }
      n2.dynamicChildren.hasOnce = true;
    }
    const {
      type,
      ref: ref2,
      shapeFlag
    } = n2;
    switch (type) {
      case Text:
        processText(n1, n2, container, anchor);
        break;
      case Comment:
        processCommentNode(n1, n2, container, anchor);
        break;
      case Static:
        if (n1 == null) {
          mountStaticNode(n2, container, anchor, namespace);
        } else if (false) {
          patchStaticNode(n1, n2, container, namespace);
        }
        break;
      case Fragment:
        processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
        break;
      default:
        if (shapeFlag & 1) {
          processElement(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
        } else if (shapeFlag & 6) {
          processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
        } else if (shapeFlag & 64) {
          type.process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, internals);
        } else if (shapeFlag & 128) {
          type.process(n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, internals);
        } else if (false) {
          warn$1("Invalid VNode type:", type, `(${typeof type})`);
        }
    }
    if (ref2 != null && parentComponent) {
      setRef(ref2, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
    } else if (ref2 == null && n1 && n1.ref != null) {
      setRef(n1.ref, null, parentSuspense, n1, true);
    }
  };
  const processText = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(n2.el = hostCreateText(n2.children), container, anchor);
    } else {
      const el = n2.el = n1.el;
      if (n2.children !== n1.children) {
        hostSetText(el, n2.children);
      }
    }
  };
  const processCommentNode = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(n2.el = hostCreateComment(n2.children || ""), container, anchor);
    } else {
      n2.el = n1.el;
    }
  };
  const mountStaticNode = (n2, container, anchor, namespace) => {
    [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, namespace, n2.el, n2.anchor);
  };
  const patchStaticNode = (n1, n2, container, namespace) => {
    if (n2.children !== n1.children) {
      const anchor = hostNextSibling(n1.anchor);
      removeStaticNode(n1);
      [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, namespace);
    } else {
      n2.el = n1.el;
      n2.anchor = n1.anchor;
    }
  };
  const moveStaticNode = ({
    el,
    anchor
  }, container, nextSibling) => {
    let next;
    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostInsert(el, container, nextSibling);
      el = next;
    }
    hostInsert(anchor, container, nextSibling);
  };
  const removeStaticNode = ({
    el,
    anchor
  }) => {
    let next;
    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostRemove(el);
      el = next;
    }
    hostRemove(anchor);
  };
  const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    if (n2.type === "svg") {
      namespace = "svg";
    } else if (n2.type === "math") {
      namespace = "mathml";
    }
    if (n1 == null) {
      mountElement(n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
    } else {
      const customElement = n1.el && n1.el._isVueCE ? n1.el : null;
      try {
        if (customElement) {
          customElement._beginPatch();
        }
        patchElement(n1, n2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
      } finally {
        if (customElement) {
          customElement._endPatch();
        }
      }
    }
  };
  const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    let el;
    let vnodeHook;
    const {
      props,
      shapeFlag,
      transition,
      dirs
    } = vnode;
    el = vnode.el = hostCreateElement(vnode.type, namespace, props && props.is, props);
    if (shapeFlag & 8) {
      hostSetElementText(el, vnode.children);
    } else if (shapeFlag & 16) {
      mountChildren(vnode.children, el, null, parentComponent, parentSuspense, resolveChildrenNamespace(vnode, namespace), slotScopeIds, optimized);
    }
    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, "created");
    }
    setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
    if (props) {
      for (const key in props) {
        if (key !== "value" && !isReservedProp(key)) {
          hostPatchProp(el, key, null, props[key], namespace, parentComponent);
        }
      }
      if ("value" in props) {
        hostPatchProp(el, "value", null, props.value, namespace);
      }
      if (vnodeHook = props.onVnodeBeforeMount) {
        invokeVNodeHook(vnodeHook, parentComponent, vnode);
      }
    }
    if (false) {
      def(el, "__vnode", vnode, true);
      def(el, "__vueParentComponent", parentComponent, true);
    }
    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
    }
    const needCallTransitionHooks = needTransition(parentSuspense, transition);
    if (needCallTransitionHooks) {
      transition.beforeEnter(el);
    } else if (transition && !transition.persisted) {
      el[deferredEnterKey] = true;
    }
    hostInsert(el, container, anchor);
    if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) {
      const isHmr = false;
      queuePostRenderEffect(() => {
        let prev;
        if (false) prev = setHmrUpdating(isHmr);
        try {
          vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
          needCallTransitionHooks && transition.enter(el);
          dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
        } finally {
          if (false) setHmrUpdating(prev);
        }
      }, parentSuspense);
    }
  };
  const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent) => {
    if (scopeId) {
      hostSetScopeId(el, scopeId);
    }
    if (slotScopeIds) {
      for (let i = 0; i < slotScopeIds.length; i++) {
        hostSetScopeId(el, slotScopeIds[i]);
      }
    }
    if (parentComponent) {
      let subTree = parentComponent.subTree;
      if (false) {
        subTree = filterSingleRoot(subTree.children) || subTree;
      }
      if (vnode === subTree || isSuspense(subTree.type) && (subTree.ssContent === vnode || subTree.ssFallback === vnode)) {
        const parentVNode = parentComponent.vnode;
        setScopeId(el, parentVNode, parentVNode.scopeId, parentVNode.slotScopeIds, parentComponent.parent);
      }
    }
  };
  const mountChildren = (children, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, start = 0) => {
    for (let i = start; i < children.length; i++) {
      const child = children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]);
      patch(null, child, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
    }
  };
  const patchElement = (n1, n2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    const el = n2.el = n1.el;
    if (false) {
      el.__vnode = n2;
    }
    let {
      patchFlag,
      dynamicChildren,
      dirs
    } = n2;
    patchFlag |= n1.patchFlag & 16;
    const oldProps = n1.props || EMPTY_OBJ;
    const newProps = n2.props || EMPTY_OBJ;
    let vnodeHook;
    parentComponent && toggleRecurse(parentComponent, false);
    if (vnodeHook = newProps.onVnodeBeforeUpdate) {
      invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
    }
    if (dirs) {
      invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
    }
    parentComponent && toggleRecurse(parentComponent, true);
    if (
      // #6385 the old vnode may be a user-wrapped non-isomorphic block
      // Force full diff when block metadata is unstable.
      dynamicChildren && (!n1.dynamicChildren || n1.dynamicChildren.length !== dynamicChildren.length)
    ) {
      patchFlag = 0;
      optimized = false;
      dynamicChildren = null;
    }
    if (oldProps.innerHTML && newProps.innerHTML == null || oldProps.textContent && newProps.textContent == null) {
      hostSetElementText(el, "");
    }
    if (dynamicChildren) {
      patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, resolveChildrenNamespace(n2, namespace), slotScopeIds);
      if (false) {
        traverseStaticChildren(n1, n2);
      }
    } else if (!optimized) {
      patchChildren(n1, n2, el, null, parentComponent, parentSuspense, resolveChildrenNamespace(n2, namespace), slotScopeIds, false);
    }
    if (patchFlag > 0) {
      if (patchFlag & 16) {
        patchProps(el, oldProps, newProps, parentComponent, namespace);
      } else {
        if (patchFlag & 2) {
          if (oldProps.class !== newProps.class) {
            hostPatchProp(el, "class", null, newProps.class, namespace);
          }
        }
        if (patchFlag & 4) {
          hostPatchProp(el, "style", oldProps.style, newProps.style, namespace);
        }
        if (patchFlag & 8) {
          const propsToUpdate = n2.dynamicProps;
          for (let i = 0; i < propsToUpdate.length; i++) {
            const key = propsToUpdate[i];
            const prev = oldProps[key];
            const next = newProps[key];
            if (next !== prev || key === "value") {
              hostPatchProp(el, key, prev, next, namespace, parentComponent);
            }
          }
        }
      }
      if (patchFlag & 1) {
        if (n1.children !== n2.children) {
          hostSetElementText(el, n2.children);
        }
      }
    } else if (!optimized && dynamicChildren == null) {
      patchProps(el, oldProps, newProps, parentComponent, namespace);
    }
    if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
      }, parentSuspense);
    }
  };
  const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, namespace, slotScopeIds) => {
    for (let i = 0; i < newChildren.length; i++) {
      const oldVNode = oldChildren[i];
      const newVNode = newChildren[i];
      const oldEl = oldVNode.el || resolveAsyncComponentPlaceholder(oldVNode);
      const container = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        oldEl && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (oldVNode.type === Fragment || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !isSameVNodeType(oldVNode, newVNode) || // - In the case of a component, it could contain anything.
        oldVNode.shapeFlag & (6 | 64 | 128)) ? hostParentNode(oldEl) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          fallbackContainer
        )
      );
      patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, namespace, slotScopeIds, true);
    }
  };
  const patchProps = (el, oldProps, newProps, parentComponent, namespace) => {
    if (oldProps !== newProps) {
      if (oldProps !== EMPTY_OBJ) {
        for (const key in oldProps) {
          if (!isReservedProp(key) && !(key in newProps)) {
            hostPatchProp(el, key, oldProps[key], null, namespace, parentComponent);
          }
        }
      }
      for (const key in newProps) {
        if (isReservedProp(key)) continue;
        const next = newProps[key];
        const prev = oldProps[key];
        if (next !== prev && key !== "value") {
          hostPatchProp(el, key, prev, next, namespace, parentComponent);
        }
      }
      if ("value" in newProps) {
        hostPatchProp(el, "value", oldProps.value, newProps.value, namespace);
      }
    }
  };
  const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
    const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
    let {
      patchFlag,
      dynamicChildren,
      slotScopeIds: fragmentSlotScopeIds
    } = n2;
    if (false) {
      patchFlag = 0;
      optimized = false;
      dynamicChildren = null;
    }
    if (fragmentSlotScopeIds) {
      slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
    }
    if (n1 == null) {
      hostInsert(fragmentStartAnchor, container, anchor);
      hostInsert(fragmentEndAnchor, container, anchor);
      mountChildren(
        // #10007
        // such fragment like `<></>` will be compiled into
        // a fragment which doesn't have a children.
        // In this case fallback to an empty array
        n2.children || [],
        container,
        fragmentEndAnchor,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized
      );
    } else {
      if (patchFlag > 0 && patchFlag & 64 && dynamicChildren && // #2715 the previous fragment could've been a BAILed one as a result
      // of renderSlot() with no valid children
      n1.dynamicChildren && n1.dynamicChildren.length === dynamicChildren.length) {
        patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, namespace, slotScopeIds);
        if (false) {
          traverseStaticChildren(n1, n2);
        } else if (
          // #2080 if the stable fragment has a key, it's a <template v-for> that may
          //  get moved around. Make sure all root level vnodes inherit el.
          // #2134 or if it's a component root, it may also get moved around
          // as the component is being moved.
          n2.key != null || parentComponent && n2 === parentComponent.subTree
        ) {
          traverseStaticChildren(
            n1,
            n2,
            true
            /* shallow */
          );
        }
      } else {
        patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
      }
    }
  };
  const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    n2.slotScopeIds = slotScopeIds;
    if (n1 == null) {
      if (n2.shapeFlag & 512) {
        parentComponent.ctx.activate(n2, container, anchor, namespace, optimized);
      } else {
        mountComponent(n2, container, anchor, parentComponent, parentSuspense, namespace, optimized);
      }
    } else {
      updateComponent(n1, n2, optimized);
    }
  };
  const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, namespace, optimized) => {
    const instance = initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense);
    if (false) {
      registerHMR(instance);
    }
    if (false) {
      pushWarningContext(initialVNode);
      startMeasure(instance, `mount`);
    }
    if (isKeepAlive(initialVNode)) {
      instance.ctx.renderer = internals;
    }
    {
      if (false) {
        startMeasure(instance, `init`);
      }
      setupComponent(instance, false, optimized);
      if (false) {
        endMeasure(instance, `init`);
      }
    }
    if (false) initialVNode.el = null;
    if (instance.asyncDep) {
      parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect, optimized, namespace);
      if (!initialVNode.el) {
        const placeholder = instance.subTree = createVNode(Comment);
        processCommentNode(null, placeholder, container, anchor);
        initialVNode.placeholder = placeholder.el;
      }
    } else {
      setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, namespace, optimized);
    }
    if (false) {
      popWarningContext();
      endMeasure(instance, `mount`);
    }
  };
  const updateComponent = (n1, n2, optimized) => {
    const instance = n2.component = n1.component;
    if (shouldUpdateComponent(n1, n2, optimized)) {
      if (instance.asyncDep && !instance.asyncResolved) {
        if (false) {
          pushWarningContext(n2);
        }
        n2.el = n1.el;
        n2.placeholder = n1.placeholder;
        updateComponentPreRender(instance, n2, optimized);
        if (false) {
          popWarningContext();
        }
        return;
      } else {
        instance.next = n2;
        instance.update();
      }
    } else {
      n2.el = n1.el;
      n2.placeholder = n1.placeholder;
      instance.vnode = n2;
    }
  };
  const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, namespace, optimized) => {
    const componentUpdateFn = () => {
      if (!instance.isMounted) {
        let vnodeHook;
        const {
          el,
          props
        } = initialVNode;
        const {
          bm,
          m: m2,
          parent,
          root,
          type
        } = instance;
        const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
        toggleRecurse(instance, false);
        if (bm) {
          invokeArrayFns(bm);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) {
          invokeVNodeHook(vnodeHook, parent, initialVNode);
        }
        toggleRecurse(instance, true);
        if (el && hydrateNode) {
          const hydrateSubTree = () => {
            if (false) {
              startMeasure(instance, `render`);
            }
            instance.subTree = renderComponentRoot(instance);
            if (false) {
              endMeasure(instance, `render`);
            }
            if (false) {
              startMeasure(instance, `hydrate`);
            }
            hydrateNode(el, instance.subTree, instance, parentSuspense, null);
            if (false) {
              endMeasure(instance, `hydrate`);
            }
          };
          if (isAsyncWrapperVNode && type.__asyncHydrate) {
            type.__asyncHydrate(el, instance, hydrateSubTree);
          } else {
            hydrateSubTree();
          }
        } else {
          if (root.ce && root.ce._hasShadowRoot()) {
            root.ce._injectChildStyle(type, instance.parent ? instance.parent.type : void 0);
          }
          if (false) {
            startMeasure(instance, `render`);
          }
          const subTree = instance.subTree = renderComponentRoot(instance);
          if (false) {
            endMeasure(instance, `render`);
          }
          if (false) {
            startMeasure(instance, `patch`);
          }
          patch(null, subTree, container, anchor, instance, parentSuspense, namespace);
          if (false) {
            endMeasure(instance, `patch`);
          }
          initialVNode.el = subTree.el;
        }
        if (m2) {
          queuePostRenderEffect(m2, parentSuspense);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
          const scopedInitialVNode = initialVNode;
          queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode), parentSuspense);
        }
        if (initialVNode.shapeFlag & 256 || parent && isAsyncWrapper(parent.vnode) && parent.vnode.shapeFlag & 256) {
          instance.a && queuePostRenderEffect(instance.a, parentSuspense);
        }
        instance.isMounted = true;
        if (false) {
          devtoolsComponentAdded(instance);
        }
        initialVNode = container = anchor = null;
      } else {
        let {
          next,
          bu,
          u,
          parent,
          vnode
        } = instance;
        {
          const unresolvedAsyncRoot = locateUnresolvedAsyncRoot(instance);
          if (unresolvedAsyncRoot) {
            if (next) {
              next.el = vnode.el;
              updateComponentPreRender(instance, next, optimized);
            }
            unresolvedAsyncRoot.asyncDep.then(() => {
              const retry = () => {
                if (instance.job.flags & 8) return;
                if (parentSuspense && parentSuspense.pendingBranch) {
                  queuePostRenderEffect(retry, parentSuspense);
                } else {
                  update();
                }
              };
              retry.flags = 16 | 32;
              queuePostRenderEffect(retry, parentSuspense);
            });
            return;
          }
        }
        let originNext = next;
        let vnodeHook;
        if (false) {
          pushWarningContext(next || instance.vnode);
        }
        toggleRecurse(instance, false);
        if (next) {
          next.el = vnode.el;
          updateComponentPreRender(instance, next, optimized);
        } else {
          next = vnode;
        }
        if (bu) {
          invokeArrayFns(bu);
        }
        if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) {
          invokeVNodeHook(vnodeHook, parent, next, vnode);
        }
        toggleRecurse(instance, true);
        if (false) {
          startMeasure(instance, `render`);
        }
        const nextTree = renderComponentRoot(instance);
        if (false) {
          endMeasure(instance, `render`);
        }
        const prevTree = instance.subTree;
        instance.subTree = nextTree;
        if (false) {
          startMeasure(instance, `patch`);
        }
        patch(
          prevTree,
          nextTree,
          // parent may have changed if it's in a teleport. a root that is a
          // pending async component only has its placeholder comment
          hostParentNode(prevTree.el || resolveAsyncComponentPlaceholder(prevTree)),
          // anchor may have changed if it's in a fragment
          getNextHostNode(prevTree),
          instance,
          parentSuspense,
          namespace
        );
        if (false) {
          endMeasure(instance, `patch`);
        }
        next.el = nextTree.el;
        if (originNext === null) {
          updateHOCHostEl(instance, nextTree.el);
        }
        if (u) {
          queuePostRenderEffect(u, parentSuspense);
        }
        if (vnodeHook = next.props && next.props.onVnodeUpdated) {
          queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent, next, vnode), parentSuspense);
        }
        if (false) {
          devtoolsComponentUpdated(instance);
        }
        if (false) {
          popWarningContext();
        }
      }
    };
    instance.scope.on();
    const effect2 = instance.effect = new ReactiveEffect(componentUpdateFn);
    instance.scope.off();
    const update = instance.update = effect2.run.bind(effect2);
    const job = instance.job = effect2.runIfDirty.bind(effect2);
    job.i = instance;
    job.id = instance.uid;
    effect2.scheduler = () => queueJob(job);
    toggleRecurse(instance, true);
    if (false) {
      effect2.onTrack = instance.rtc ? (e) => invokeArrayFns(instance.rtc, e) : void 0;
      effect2.onTrigger = instance.rtg ? (e) => invokeArrayFns(instance.rtg, e) : void 0;
    }
    update();
  };
  const updateComponentPreRender = (instance, nextVNode, optimized) => {
    nextVNode.component = instance;
    const prevProps = instance.vnode.props;
    instance.vnode = nextVNode;
    instance.next = null;
    updateProps(instance, nextVNode.props, prevProps, optimized);
    updateSlots(instance, nextVNode.children, optimized);
    pauseTracking();
    flushPreFlushCbs(instance);
    resetTracking();
  };
  const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized = false) => {
    const c1 = n1 && n1.children;
    const prevShapeFlag = n1 ? n1.shapeFlag : 0;
    const c2 = n2.children;
    const {
      patchFlag,
      shapeFlag
    } = n2;
    if (patchFlag > 0) {
      if (patchFlag & 128) {
        patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
        return;
      } else if (patchFlag & 256) {
        patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
        return;
      }
    }
    if (shapeFlag & 8) {
      if (prevShapeFlag & 16) {
        unmountChildren(c1, parentComponent, parentSuspense);
      }
      if (c2 !== c1) {
        hostSetElementText(container, c2);
      }
    } else {
      if (prevShapeFlag & 16) {
        if (shapeFlag & 16) {
          patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
        } else {
          unmountChildren(c1, parentComponent, parentSuspense, true);
        }
      } else {
        if (prevShapeFlag & 8) {
          hostSetElementText(container, "");
        }
        if (shapeFlag & 16) {
          mountChildren(c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
        }
      }
    }
  };
  const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    c1 = c1 || EMPTY_ARR;
    c2 = c2 || EMPTY_ARR;
    const oldLength = c1.length;
    const newLength = c2.length;
    const commonLength = Math.min(oldLength, newLength);
    let i;
    for (i = 0; i < commonLength; i++) {
      const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
      patch(c1[i], nextChild, container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
    }
    if (oldLength > newLength) {
      unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength);
    } else {
      mountChildren(c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, commonLength);
    }
  };
  const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    let i = 0;
    const l2 = c2.length;
    let e1 = c1.length - 1;
    let e2 = l2 - 1;
    while (i <= e1 && i <= e2) {
      const n1 = c1[i];
      const n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
      if (isSameVNodeType(n1, n2)) {
        patch(n1, n2, container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
      } else {
        break;
      }
      i++;
    }
    while (i <= e1 && i <= e2) {
      const n1 = c1[e1];
      const n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
      if (isSameVNodeType(n1, n2)) {
        patch(n1, n2, container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
      } else {
        break;
      }
      e1--;
      e2--;
    }
    if (i > e1) {
      if (i <= e2) {
        const nextPos = e2 + 1;
        const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
        while (i <= e2) {
          patch(null, c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]), container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
          i++;
        }
      }
    } else if (i > e2) {
      while (i <= e1) {
        unmount(c1[i], parentComponent, parentSuspense, true);
        i++;
      }
    } else {
      const s1 = i;
      const s2 = i;
      const keyToNewIndexMap = /* @__PURE__ */ new Map();
      for (i = s2; i <= e2; i++) {
        const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
        if (nextChild.key != null) {
          if (false) {
            warn$1(`Duplicate keys found during update:`, JSON.stringify(nextChild.key), `Make sure keys are unique.`);
          }
          keyToNewIndexMap.set(nextChild.key, i);
        }
      }
      let j;
      let patched = 0;
      const toBePatched = e2 - s2 + 1;
      let moved = false;
      let maxNewIndexSoFar = 0;
      const newIndexToOldIndexMap = new Array(toBePatched);
      for (i = 0; i < toBePatched; i++) newIndexToOldIndexMap[i] = 0;
      for (i = s1; i <= e1; i++) {
        const prevChild = c1[i];
        if (patched >= toBePatched) {
          unmount(prevChild, parentComponent, parentSuspense, true);
          continue;
        }
        let newIndex;
        if (prevChild.key != null) {
          newIndex = keyToNewIndexMap.get(prevChild.key);
        } else {
          for (j = s2; j <= e2; j++) {
            if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
              newIndex = j;
              break;
            }
          }
        }
        if (newIndex === void 0) {
          unmount(prevChild, parentComponent, parentSuspense, true);
        } else {
          newIndexToOldIndexMap[newIndex - s2] = i + 1;
          if (newIndex >= maxNewIndexSoFar) {
            maxNewIndexSoFar = newIndex;
          } else {
            moved = true;
          }
          patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
          patched++;
        }
      }
      const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : EMPTY_ARR;
      j = increasingNewIndexSequence.length - 1;
      for (i = toBePatched - 1; i >= 0; i--) {
        const nextIndex = s2 + i;
        const nextChild = c2[nextIndex];
        const anchorVNode = c2[nextIndex + 1];
        const anchor = nextIndex + 1 < l2 ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          anchorVNode.el || resolveAsyncComponentPlaceholder(anchorVNode)
        ) : parentAnchor;
        if (newIndexToOldIndexMap[i] === 0) {
          patch(null, nextChild, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized);
        } else if (moved) {
          if (j < 0 || i !== increasingNewIndexSequence[j]) {
            move(nextChild, container, anchor, 2);
          } else {
            j--;
          }
        }
      }
    }
  };
  const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
    const {
      el,
      type,
      transition,
      children,
      shapeFlag
    } = vnode;
    if (shapeFlag & 6) {
      move(vnode.component.subTree, container, anchor, moveType);
      return;
    }
    if (shapeFlag & 128) {
      vnode.suspense.move(container, anchor, moveType);
      return;
    }
    if (shapeFlag & 64) {
      type.move(vnode, container, anchor, internals);
      return;
    }
    if (type === Fragment) {
      hostInsert(el, container, anchor);
      for (let i = 0; i < children.length; i++) {
        move(children[i], container, anchor, moveType);
      }
      hostInsert(vnode.anchor, container, anchor);
      return;
    }
    if (type === Static) {
      moveStaticNode(vnode, container, anchor);
      return;
    }
    const needTransition2 = moveType !== 2 && shapeFlag & 1 && transition;
    if (needTransition2) {
      if (moveType === 0) {
        if (transition.persisted && !el[leaveCbKey]) {
          hostInsert(el, container, anchor);
        } else {
          transition.beforeEnter(el);
          hostInsert(el, container, anchor);
          queuePostRenderEffect(() => transition.enter(el), parentSuspense);
        }
      } else {
        const {
          leave,
          delayLeave,
          afterLeave
        } = transition;
        const remove22 = () => {
          if (vnode.ctx.isUnmounted) {
            hostRemove(el);
          } else {
            hostInsert(el, container, anchor);
          }
        };
        const performLeave = () => {
          const wasLeaving = el._isLeaving || !!el[leaveCbKey];
          if (el._isLeaving) {
            el[leaveCbKey](
              true
              /* cancelled */
            );
          }
          if (transition.persisted && !wasLeaving) {
            remove22();
          } else {
            leave(el, () => {
              remove22();
              afterLeave && afterLeave();
            });
          }
        };
        if (delayLeave) {
          delayLeave(el, remove22, performLeave);
        } else {
          performLeave();
        }
      }
    } else {
      hostInsert(el, container, anchor);
    }
  };
  const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
    const {
      type,
      props,
      ref: ref2,
      children,
      dynamicChildren,
      shapeFlag,
      patchFlag,
      dirs,
      cacheIndex,
      memo
    } = vnode;
    if (patchFlag === -2 || dynamicChildren && dynamicChildren.hasOnce) {
      optimized = false;
    }
    if (ref2 != null) {
      pauseTracking();
      setRef(ref2, null, parentSuspense, vnode, true);
      resetTracking();
    }
    if (cacheIndex != null && (!vnode.ctx || vnode.ctx === parentComponent)) {
      parentComponent.renderCache[cacheIndex] = void 0;
    }
    if (shapeFlag & 256 && parentComponent.ctx.deactivate(vnode)) {
      return;
    }
    const shouldInvokeDirs = shapeFlag & 1 && dirs;
    const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
    let vnodeHook;
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) {
      invokeVNodeHook(vnodeHook, parentComponent, vnode);
    }
    if (shapeFlag & 6) {
      unmountComponent(vnode.component, parentSuspense, doRemove);
    } else {
      if (shapeFlag & 128) {
        vnode.suspense.unmount(parentSuspense, doRemove);
        return;
      }
      if (shouldInvokeDirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
      }
      if (shapeFlag & 64) {
        vnode.type.remove(vnode, parentComponent, parentSuspense, internals, doRemove);
      } else if (dynamicChildren && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !dynamicChildren.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (type !== Fragment || patchFlag > 0 && patchFlag & 64)) {
        unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
      } else if (type === Fragment && patchFlag & (128 | 256) || !optimized && shapeFlag & 16) {
        unmountChildren(children, parentComponent, parentSuspense);
      }
      if (doRemove) {
        remove2(vnode);
      }
    }
    const shouldInvalidateMemo = memo != null && cacheIndex == null;
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs || shouldInvalidateMemo) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
        if (shouldInvalidateMemo) {
          vnode.el = null;
        }
      }, parentSuspense);
    }
  };
  const remove2 = (vnode) => {
    const {
      type,
      el,
      anchor,
      transition
    } = vnode;
    const isFragment = type === Fragment;
    if (isFragment && !transition) {
      removeFragment(el, anchor);
      return;
    }
    if (type === Static) {
      removeStaticNode(vnode);
      if (transition && !transition.persisted && transition.afterLeave) {
        transition.afterLeave();
      }
      return;
    }
    const leavingNode = isFragment ? getTransitionRoot(vnode) : vnode;
    const performRemove = () => {
      if (isFragment) {
        if (hostParentNode(el)) {
          removeFragment(el, anchor);
        }
      } else {
        hostRemove(el);
      }
      if (transition && !transition.persisted && transition.afterLeave) {
        transition.afterLeave();
      }
    };
    if (leavingNode && leavingNode.shapeFlag & 1 && transition && !transition.persisted) {
      const {
        leave,
        delayLeave
      } = transition;
      const leavingEl = leavingNode.el;
      const performLeave = () => leave(leavingEl, performRemove);
      if (delayLeave) {
        delayLeave(leavingEl, performRemove, performLeave);
      } else {
        performLeave();
      }
    } else {
      performRemove();
    }
  };
  const removeFragment = (cur, end) => {
    let next;
    while (cur !== end) {
      next = hostNextSibling(cur);
      hostRemove(cur);
      cur = next;
    }
    hostRemove(end);
  };
  const unmountComponent = (instance, parentSuspense, doRemove) => {
    if (false) {
      unregisterHMR(instance);
    }
    const {
      bum,
      scope,
      job,
      subTree,
      um,
      m: m2,
      a
    } = instance;
    invalidateMount(m2);
    invalidateMount(a);
    if (bum) {
      invokeArrayFns(bum);
    }
    scope.stop();
    if (job) {
      job.flags |= 8;
      unmount(subTree, instance, parentSuspense, doRemove);
    } else if (subTree) {
      subTree.transition = instance.vnode.transition;
      unmount(subTree, instance, parentSuspense, doRemove);
    }
    if (um) {
      queuePostRenderEffect(um, parentSuspense);
    }
    const markUnmounted = () => {
      instance.isUnmounted = true;
    };
    markUnmounted.flags = 16;
    queuePostRenderEffect(markUnmounted, parentSuspense);
    if (false) {
      devtoolsComponentRemoved(instance);
    }
  };
  const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
    for (let i = start; i < children.length; i++) {
      unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
    }
  };
  const getNextHostNode = (vnode) => {
    if (vnode.shapeFlag & 6) {
      return getNextHostNode(vnode.component.subTree);
    }
    if (vnode.shapeFlag & 128) {
      return vnode.suspense.next();
    }
    const el = hostNextSibling(vnode.anchor || vnode.el);
    const teleportEnd = el && el[TeleportEndKey];
    return teleportEnd ? hostNextSibling(teleportEnd) : el;
  };
  const render2 = (vnode, container, namespace) => {
    const minUid = vnode && container._vnode ? void 0 : vnode && vnode.component ? vnode.component.uid : getNextUid();
    flushOnAppMount(() => {
      if (vnode == null) {
        if (container._vnode) {
          unmount(container._vnode, null, null, true);
        }
      } else {
        patch(container._vnode || null, vnode, container, null, null, null, namespace);
      }
      container._vnode = vnode;
    }, minUid);
  };
  const internals = {
    p: patch,
    um: unmount,
    m: move,
    r: remove2,
    mt: mountComponent,
    mc: mountChildren,
    pc: patchChildren,
    pbc: patchBlockChildren,
    n: getNextHostNode,
    o: options
  };
  let hydrate;
  let hydrateNode;
  if (createHydrationFns) {
    [hydrate, hydrateNode] = createHydrationFns(internals);
  }
  return {
    render: render2,
    hydrate,
    createApp: createAppAPI(render2, hydrate)
  };
}
function resolveChildrenNamespace({
  type,
  props
}, currentNamespace) {
  return currentNamespace === "svg" && type === "foreignObject" || currentNamespace === "mathml" && type === "annotation-xml" && props && props.encoding && props.encoding.includes("html") ? void 0 : currentNamespace;
}
function toggleRecurse({
  effect: effect2,
  job
}, allowed) {
  if (allowed) {
    effect2.flags |= 32;
    job.flags |= 4;
  } else {
    effect2.flags &= -33;
    job.flags &= -5;
  }
}
function needTransition(parentSuspense, transition) {
  return (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
}
function traverseStaticChildren(n1, n2, shallow = false) {
  const ch1 = n1.children;
  const ch2 = n2.children;
  if (isArray(ch1) && isArray(ch2)) {
    for (let i = 0; i < ch1.length; i++) {
      const c1 = ch1[i];
      let c2 = ch2[i];
      if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
        if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
          c2 = ch2[i] = cloneIfMounted(ch2[i]);
          c2.el = c1.el;
        }
        if (!shallow && c2.patchFlag !== -2) traverseStaticChildren(c1, c2);
      }
      if (c2.type === Text) {
        if (c2.patchFlag === -1) {
          c2 = ch2[i] = cloneIfMounted(c2);
        }
        c2.el = c1.el;
      }
      if (c2.type === Comment && !c2.el) {
        c2.el = c1.el;
      }
      if (false) {
        c2.el && (c2.el.__vnode = c2);
      }
    }
  }
}
function getSequence(arr) {
  const p2 = arr.slice();
  const result = [0];
  let i, j, u, v, c;
  const len = arr.length;
  for (i = 0; i < len; i++) {
    const arrI = arr[i];
    if (arrI !== 0) {
      j = result[result.length - 1];
      if (arr[j] < arrI) {
        p2[i] = j;
        result.push(i);
        continue;
      }
      u = 0;
      v = result.length - 1;
      while (u < v) {
        c = u + v >> 1;
        if (arr[result[c]] < arrI) {
          u = c + 1;
        } else {
          v = c;
        }
      }
      if (arrI < arr[result[u]]) {
        if (u > 0) {
          p2[i] = result[u - 1];
        }
        result[u] = i;
      }
    }
  }
  u = result.length;
  v = result[u - 1];
  while (u-- > 0) {
    result[u] = v;
    v = p2[v];
  }
  return result;
}
function locateUnresolvedAsyncRoot(instance) {
  const subComponent = instance.subTree.component;
  if (subComponent) {
    if (subComponent.asyncDep && !subComponent.asyncResolved) {
      return subComponent;
    } else {
      return locateUnresolvedAsyncRoot(subComponent);
    }
  }
}
function invalidateMount(hooks) {
  if (hooks) {
    for (let i = 0; i < hooks.length; i++) hooks[i].flags |= 8;
  }
}
function resolveAsyncComponentPlaceholder(anchorVnode) {
  if (anchorVnode.placeholder) {
    return anchorVnode.placeholder;
  }
  const instance = anchorVnode.component;
  if (instance) {
    return resolveAsyncComponentPlaceholder(instance.subTree);
  }
  const suspense = anchorVnode.suspense;
  if (suspense && suspense.activeBranch) {
    return resolveAsyncComponentPlaceholder(suspense.activeBranch);
  }
  return null;
}
var isSuspense = (type) => type.__isSuspense;
var deferredEnterKey = /* @__PURE__ */ Symbol("_deferredEnter");
function queueEffectWithSuspense(fn, suspense) {
  if (suspense && suspense.pendingBranch) {
    if (isArray(fn)) {
      suspense.effects.push(...fn);
    } else {
      suspense.effects.push(fn);
    }
  } else {
    queuePostFlushCb(fn);
  }
}
var Fragment = /* @__PURE__ */ Symbol.for("v-fgt");
var Text = /* @__PURE__ */ Symbol.for("v-txt");
var Comment = /* @__PURE__ */ Symbol.for("v-cmt");
var Static = /* @__PURE__ */ Symbol.for("v-stc");
var blockStack = [];
var currentBlock = null;
function openBlock(disableTracking = false) {
  blockStack.push(currentBlock = disableTracking ? null : []);
}
function closeBlock() {
  blockStack.pop();
  currentBlock = blockStack[blockStack.length - 1] || null;
}
var isBlockTreeEnabled = 1;
function setBlockTracking(value, inVOnce = false) {
  isBlockTreeEnabled += value;
  if (value < 0 && currentBlock && inVOnce) {
    currentBlock.hasOnce = true;
  }
}
function setupBlock(vnode) {
  vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || EMPTY_ARR : null;
  closeBlock();
  if (isBlockTreeEnabled > 0 && currentBlock) {
    currentBlock.push(vnode);
  }
  return vnode;
}
function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
  return setupBlock(createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, true));
}
function createBlock(type, props, children, patchFlag, dynamicProps) {
  return setupBlock(createVNode(type, props, children, patchFlag, dynamicProps, true));
}
function isVNode(value) {
  return value ? value.__v_isVNode === true : false;
}
function isSameVNodeType(n1, n2) {
  if (false) {
    const dirtyInstances = hmrDirtyComponents.get(n2.type);
    if (dirtyInstances && dirtyInstances.has(n1.component)) {
      n1.shapeFlag &= -257;
      n2.shapeFlag &= -513;
      return false;
    }
  }
  return n1.type === n2.type && n1.key === n2.key;
}
var normalizeKey = ({
  key
}) => key != null ? key : null;
var normalizeRef = ({
  ref: ref2,
  ref_key,
  ref_for
}) => {
  if (typeof ref2 === "number") {
    ref2 = "" + ref2;
  }
  return ref2 != null ? isString(ref2) || /* @__PURE__ */ isRef2(ref2) || isFunction(ref2) ? {
    i: currentRenderingInstance,
    r: ref2,
    k: ref_key,
    f: !!ref_for
  } : ref2 : null;
};
function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
  const vnode = {
    __v_isVNode: true,
    __v_skip: true,
    type,
    props,
    key: props && normalizeKey(props),
    ref: props && normalizeRef(props),
    scopeId: currentScopeId,
    slotScopeIds: null,
    children,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag,
    patchFlag,
    dynamicProps,
    dynamicChildren: null,
    appContext: null,
    ctx: currentRenderingInstance
  };
  if (needFullChildrenNormalization) {
    normalizeChildren(vnode, children);
    if (shapeFlag & 128) {
      type.normalize(vnode);
    }
  } else if (children) {
    vnode.shapeFlag |= isString(children) ? 8 : 16;
  }
  if (false) {
    warn$1(`VNode created with invalid key (NaN). VNode type:`, vnode.type);
  }
  if (false) {
    const overwritingProp = props.innerHTML != null ? "innerHTML" : props.textContent != null ? "textContent" : null;
    if (overwritingProp && hasContentChildren(vnode.children)) {
      warn$1(`The \`${overwritingProp}\` prop on <${vnode.type}> will override its children. Remove either the \`${overwritingProp}\` prop or the children.`);
    }
  }
  if (isBlockTreeEnabled > 0 && // avoid a block node from tracking itself
  !isBlockNode && // has current parent block
  currentBlock && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (vnode.patchFlag > 0 || shapeFlag & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  vnode.patchFlag !== 32) {
    currentBlock.push(vnode);
  }
  return vnode;
}
var createVNode = false ? createVNodeWithArgsTransform : _createVNode;
function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
  if (!type || type === NULL_DYNAMIC_COMPONENT) {
    if (false) {
      warn$1(`Invalid vnode type when creating vnode: ${type}.`);
    }
    type = Comment;
  }
  if (isVNode(type)) {
    const cloned = cloneVNode(
      type,
      props,
      true
      /* mergeRef: true */
    );
    if (children) {
      normalizeChildren(cloned, children);
    }
    if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) {
      if (cloned.shapeFlag & 6) {
        currentBlock[currentBlock.indexOf(type)] = cloned;
      } else {
        currentBlock.push(cloned);
      }
    }
    cloned.patchFlag = -2;
    return cloned;
  }
  if (isClassComponent(type)) {
    type = type.__vccOpts;
  }
  if (props) {
    props = guardReactiveProps(props);
    let {
      class: klass,
      style
    } = props;
    if (klass && !isString(klass)) {
      props.class = normalizeClass(klass);
    }
    if (isObject(style)) {
      if (/* @__PURE__ */ isProxy(style) && !isArray(style)) {
        style = extend({}, style);
      }
      props.style = normalizeStyle(style);
    }
  }
  const shapeFlag = isString(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : isObject(type) ? 4 : isFunction(type) ? 2 : 0;
  if (false) {
    type = /* @__PURE__ */ toRaw(type);
    warn$1(`Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with \`markRaw\` or using \`shallowRef\` instead of \`ref\`.`, `
Component that was made reactive: `, type);
  }
  return createBaseVNode(type, props, children, patchFlag, dynamicProps, shapeFlag, isBlockNode, true);
}
function guardReactiveProps(props) {
  if (!props) return null;
  if (/* @__PURE__ */ isProxy(props)) return extend({}, props);
  return isInternalObject(props) ? extend({}, props[rawAttrsKey] || props) : props;
}
function cloneVNode(vnode, extraProps, mergeRef = false, cloneTransition = false) {
  const {
    props,
    ref: ref2,
    patchFlag,
    children,
    transition
  } = vnode;
  const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
  const cloned = {
    __v_isVNode: true,
    __v_skip: true,
    type: vnode.type,
    props: mergedProps,
    key: mergedProps && normalizeKey(mergedProps),
    ref: extraProps && extraProps.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      mergeRef && ref2 ? isArray(ref2) ? ref2.concat(normalizeRef(extraProps)) : [ref2, normalizeRef(extraProps)] : normalizeRef(extraProps)
    ) : ref2,
    scopeId: vnode.scopeId,
    slotScopeIds: vnode.slotScopeIds,
    children: false ? children.map(deepCloneVNode) : children,
    target: vnode.target,
    targetStart: vnode.targetStart,
    targetAnchor: vnode.targetAnchor,
    staticCount: vnode.staticCount,
    shapeFlag: vnode.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
    dynamicProps: vnode.dynamicProps,
    dynamicChildren: vnode.dynamicChildren,
    appContext: vnode.appContext,
    dirs: vnode.dirs,
    transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: vnode.component,
    suspense: vnode.suspense,
    ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
    ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
    placeholder: vnode.placeholder,
    el: vnode.el,
    anchor: vnode.anchor,
    ctx: vnode.ctx,
    ce: vnode.ce,
    cacheIndex: vnode.cacheIndex
  };
  if (transition && cloneTransition) {
    setTransitionHooks(cloned, transition.clone(cloned));
  }
  return cloned;
}
function createTextVNode(text = " ", flag = 0) {
  return createVNode(Text, null, text, flag);
}
function createCommentVNode(text = "", asBlock = false) {
  return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
}
function normalizeVNode(child) {
  if (child == null || typeof child === "boolean") {
    return createVNode(Comment);
  } else if (isArray(child)) {
    return createVNode(
      Fragment,
      null,
      // #3666, avoid reference pollution when reusing vnode
      child.slice()
    );
  } else if (isVNode(child)) {
    return cloneIfMounted(child);
  } else {
    return createVNode(Text, null, String(child));
  }
}
function cloneIfMounted(child) {
  return child.el === null && child.patchFlag !== -1 || child.memo ? child : cloneVNode(child);
}
function normalizeChildren(vnode, children) {
  let type = 0;
  const {
    shapeFlag
  } = vnode;
  if (children == null) {
    children = null;
  } else if (isArray(children)) {
    type = 16;
  } else if (typeof children === "object") {
    if (shapeFlag & (1 | 64)) {
      const slot = children.default;
      if (slot) {
        slot._c && (slot._d = false);
        normalizeChildren(vnode, slot());
        slot._c && (slot._d = true);
      }
      return;
    } else {
      type = 32;
      const slotFlag = children._;
      if (!slotFlag && !isInternalObject(children)) {
        children._ctx = currentRenderingInstance;
      } else if (slotFlag === 3 && currentRenderingInstance) {
        if (currentRenderingInstance.slots._ === 1) {
          children._ = 1;
        } else {
          children._ = 2;
          vnode.patchFlag |= 1024;
        }
      }
    }
  } else if (isFunction(children)) {
    if (shapeFlag & (1 | 64)) {
      normalizeChildren(vnode, {
        default: children
      });
      return;
    }
    children = {
      default: children,
      _ctx: currentRenderingInstance
    };
    type = 32;
  } else {
    children = String(children);
    if (shapeFlag & 64) {
      type = 16;
      children = [createTextVNode(children)];
    } else {
      type = 8;
    }
  }
  vnode.children = children;
  vnode.shapeFlag |= type;
}
function mergeProps(...args) {
  const ret = {};
  for (let i = 0; i < args.length; i++) {
    const toMerge = args[i];
    for (const key in toMerge) {
      if (key === "class") {
        if (ret.class !== toMerge.class) {
          ret.class = normalizeClass([ret.class, toMerge.class]);
        }
      } else if (key === "style") {
        ret.style = normalizeStyle([ret.style, toMerge.style]);
      } else if (isOn(key)) {
        const existing = ret[key];
        const incoming = toMerge[key];
        if (incoming && existing !== incoming && !(isArray(existing) && existing.includes(incoming))) {
          ret[key] = existing ? [].concat(existing, incoming) : incoming;
        } else if (incoming == null && existing == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !isModelListener(key)) {
          ret[key] = incoming;
        }
      } else if (key !== "") {
        ret[key] = toMerge[key];
      }
    }
  }
  return ret;
}
function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
  callWithAsyncErrorHandling(hook, instance, 7, [vnode, prevVNode]);
}
var emptyAppContext = /* @__PURE__ */ createAppContext();
var uid = 0;
function getNextUid() {
  return uid;
}
function createComponentInstance(vnode, parent, suspense) {
  const type = vnode.type;
  const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
  const instance = {
    uid: uid++,
    vnode,
    type,
    parent,
    appContext,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new EffectScope(
      true
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: parent ? parent.provides : Object.create(appContext.provides),
    ids: parent ? parent.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: normalizePropsOptions(type, appContext),
    emitsOptions: normalizeEmitsOptions(type, appContext),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: EMPTY_OBJ,
    // inheritAttrs
    inheritAttrs: type.inheritAttrs,
    // state
    ctx: EMPTY_OBJ,
    data: EMPTY_OBJ,
    props: EMPTY_OBJ,
    attrs: EMPTY_OBJ,
    slots: EMPTY_OBJ,
    refs: EMPTY_OBJ,
    setupState: EMPTY_OBJ,
    setupContext: null,
    // suspense related
    suspense,
    suspenseId: suspense ? suspense.pendingId : 0,
    asyncDep: null,
    asyncResolved: false,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: false,
    isUnmounted: false,
    isDeactivated: false,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  if (false) {
    instance.ctx = createDevRenderContext(instance);
  } else {
    instance.ctx = {
      _: instance
    };
  }
  instance.root = parent ? parent.root : instance;
  instance.emit = emit.bind(null, instance);
  if (vnode.ce) {
    vnode.ce(instance);
  }
  return instance;
}
var currentInstance = null;
var getCurrentInstance = () => currentInstance || currentRenderingInstance;
var internalSetCurrentInstance;
var setInSSRSetupState;
{
  const g = getGlobalThis();
  const registerGlobalSetter = (key, setter) => {
    let setters;
    if (!(setters = g[key])) setters = g[key] = [];
    setters.push(setter);
    return (v) => {
      if (setters.length > 1) setters.forEach((set) => set(v));
      else setters[0](v);
    };
  };
  internalSetCurrentInstance = registerGlobalSetter(`__VUE_INSTANCE_SETTERS__`, (v) => currentInstance = v);
  setInSSRSetupState = registerGlobalSetter(`__VUE_SSR_SETTERS__`, (v) => isInSSRComponentSetup = v);
}
var setCurrentInstance = (instance) => {
  const prev = currentInstance;
  internalSetCurrentInstance(instance);
  instance.scope.on();
  return () => {
    instance.scope.off();
    internalSetCurrentInstance(prev);
  };
};
var unsetCurrentInstance = () => {
  currentInstance && currentInstance.scope.off();
  internalSetCurrentInstance(null);
};
function isStatefulComponent(instance) {
  return instance.vnode.shapeFlag & 4;
}
var isInSSRComponentSetup = false;
function setupComponent(instance, isSSR = false, optimized = false) {
  isSSR && setInSSRSetupState(isSSR);
  const {
    props,
    children
  } = instance.vnode;
  const isStateful = isStatefulComponent(instance);
  initProps(instance, props, isStateful, isSSR);
  initSlots(instance, children, optimized || isSSR);
  const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
  isSSR && setInSSRSetupState(false);
  return setupResult;
}
function setupStatefulComponent(instance, isSSR) {
  const Component = instance.type;
  if (false) {
    if (Component.name) {
      validateComponentName(Component.name, instance.appContext.config);
    }
    if (Component.components) {
      const names = Object.keys(Component.components);
      for (let i = 0; i < names.length; i++) {
        validateComponentName(names[i], instance.appContext.config);
      }
    }
    if (Component.directives) {
      const names = Object.keys(Component.directives);
      for (let i = 0; i < names.length; i++) {
        validateDirectiveName(names[i]);
      }
    }
    if (Component.compilerOptions && isRuntimeOnly()) {
      warn$1(`"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.`);
    }
  }
  instance.accessCache = /* @__PURE__ */ Object.create(null);
  instance.proxy = new Proxy(instance.ctx, PublicInstanceProxyHandlers);
  if (false) {
    exposePropsOnRenderContext(instance);
  }
  const {
    setup
  } = Component;
  if (setup) {
    pauseTracking();
    const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
    const reset = setCurrentInstance(instance);
    const setupResult = callWithErrorHandling(setup, instance, 0, [false ? /* @__PURE__ */ shallowReadonly(instance.props) : instance.props, setupContext]);
    const isAsyncSetup = isPromise(setupResult);
    resetTracking();
    reset();
    if ((isAsyncSetup || instance.sp) && !isAsyncWrapper(instance)) {
      markAsyncBoundary(instance);
    }
    if (isAsyncSetup) {
      setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
      if (isSSR) {
        return setupResult.then((resolvedResult) => {
          setInSSRSetupState(true);
          try {
            handleSetupResult(instance, resolvedResult, isSSR);
          } finally {
            setInSSRSetupState(false);
          }
        }).catch((e) => {
          handleError(e, instance, 0, void 0, true);
          instance.ssrRender = (_, push) => push("<!---->");
        });
      } else {
        instance.asyncDep = setupResult;
        if (false) {
          const name = formatComponentName(instance, Component);
          warn$1(`Component <${name}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
        }
      }
    } else {
      handleSetupResult(instance, setupResult, isSSR);
    }
  } else {
    finishComponentSetup(instance, isSSR);
  }
}
function handleSetupResult(instance, setupResult, isSSR) {
  if (isFunction(setupResult)) {
    if (instance.type.__ssrInlineRender) {
      instance.ssrRender = setupResult;
    } else {
      instance.render = setupResult;
    }
  } else if (isObject(setupResult)) {
    if (false) {
      warn$1(`setup() should not return VNodes directly - return a render function instead.`);
    }
    if (false) {
      instance.devtoolsRawSetupState = setupResult;
    }
    instance.setupState = proxyRefs(setupResult);
    if (false) {
      exposeSetupStateOnRenderContext(instance);
    }
  } else if (false) {
    warn$1(`setup() should return an object. Received: ${setupResult === null ? "null" : typeof setupResult}`);
  }
  finishComponentSetup(instance, isSSR);
}
var compile;
var installWithProxy;
function finishComponentSetup(instance, isSSR, skipOptions) {
  const Component = instance.type;
  if (!instance.render) {
    if (!isSSR && compile && !Component.render) {
      const template = Component.template || resolveMergedOptions(instance).template;
      if (template) {
        if (false) {
          startMeasure(instance, `compile`);
        }
        const {
          isCustomElement,
          compilerOptions
        } = instance.appContext.config;
        const {
          delimiters,
          compilerOptions: componentCompilerOptions
        } = Component;
        const finalCompilerOptions = extend(extend({
          isCustomElement,
          delimiters
        }, compilerOptions), componentCompilerOptions);
        Component.render = compile(template, finalCompilerOptions);
        if (false) {
          endMeasure(instance, `compile`);
        }
      }
    }
    instance.render = Component.render || NOOP;
    if (installWithProxy) {
      installWithProxy(instance);
    }
  }
  if (true) {
    const reset = setCurrentInstance(instance);
    pauseTracking();
    try {
      applyOptions(instance);
    } finally {
      resetTracking();
      reset();
    }
  }
  if (false) {
    if (!compile && Component.template) {
      warn$1(`Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".`);
    } else {
      warn$1(`Component is missing template or render function: `, Component);
    }
  }
}
var rawAttrsKey = /* @__PURE__ */ Symbol();
var attrsProxyHandlers = false ? {
  get(target, key) {
    markAttrsAccessed();
    track(target, "get", "");
    return key === rawAttrsKey ? target : target[key];
  },
  set() {
    warn$1(`setupContext.attrs is readonly.`);
    return false;
  },
  deleteProperty() {
    warn$1(`setupContext.attrs is readonly.`);
    return false;
  }
} : {
  get(target, key) {
    track(target, "get", "");
    return key === rawAttrsKey ? target : target[key];
  }
};
function createSetupContext(instance) {
  const expose = (exposed) => {
    if (false) {
      if (instance.exposed) {
        warn$1(`expose() should be called only once per setup().`);
      }
      if (exposed != null) {
        let exposedType = typeof exposed;
        if (exposedType === "object") {
          if (isArray(exposed)) {
            exposedType = "array";
          } else if (/* @__PURE__ */ isRef2(exposed)) {
            exposedType = "ref";
          }
        }
        if (exposedType !== "object") {
          warn$1(`expose() should be passed a plain object, received ${exposedType}.`);
        }
      }
    }
    instance.exposed = exposed || {};
  };
  if (false) {
    let attrsProxy;
    let slotsProxy;
    return Object.freeze({
      get attrs() {
        return attrsProxy || (attrsProxy = new Proxy(instance.attrs, attrsProxyHandlers));
      },
      get slots() {
        return slotsProxy || (slotsProxy = getSlotsProxy(instance));
      },
      get emit() {
        return (event, ...args) => instance.emit(event, ...args);
      },
      expose
    });
  } else {
    return {
      attrs: new Proxy(instance.attrs, attrsProxyHandlers),
      slots: instance.slots,
      emit: instance.emit,
      expose
    };
  }
}
function getComponentPublicInstance(instance) {
  if (instance.exposed) {
    return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
      get(target, key) {
        if (key in target) {
          return target[key];
        } else if (key in publicPropertiesMap) {
          return publicPropertiesMap[key](instance);
        }
      },
      has(target, key) {
        return key in target || key in publicPropertiesMap;
      }
    }));
  } else {
    return instance.proxy;
  }
}
function getComponentName(Component, includeInferred = true) {
  return isFunction(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
}
function isClassComponent(value) {
  return isFunction(value) && "__vccOpts" in value;
}
var computed2 = (getterOrOptions, debugOptions) => {
  const c = /* @__PURE__ */ computed(getterOrOptions, debugOptions, isInSSRComponentSetup);
  if (false) {
    const i = getCurrentInstance();
    if (i && i.appContext.config.warnRecursiveComputed) {
      c._warnRecursive = true;
    }
  }
  return c;
};
function h(type, propsOrChildren, children) {
  try {
    setBlockTracking(-1);
    const l = arguments.length;
    if (l === 2) {
      if (isObject(propsOrChildren) && !isArray(propsOrChildren)) {
        if (isVNode(propsOrChildren)) {
          return createVNode(type, null, [propsOrChildren]);
        }
        return createVNode(type, propsOrChildren);
      } else {
        return createVNode(type, null, propsOrChildren);
      }
    } else {
      if (l > 3) {
        children = Array.prototype.slice.call(arguments, 2);
      } else if (l === 3 && isVNode(children)) {
        children = [children];
      }
      return createVNode(type, propsOrChildren, children);
    }
  } finally {
    setBlockTracking(1);
  }
}
var version = "3.5.45";
var warn2 = false ? warn$1 : NOOP;
/**
* @vue/runtime-dom v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
var policy = void 0;
var tt = typeof window !== "undefined" && window.trustedTypes;
if (tt) {
  try {
    policy = /* @__PURE__ */ tt.createPolicy("vue", {
      createHTML: (val) => val
    });
  } catch (e) {
  }
}
var unsafeToTrustedHTML = policy ? (val) => policy.createHTML(val) : (val) => val;
var svgNS = "http://www.w3.org/2000/svg";
var mathmlNS = "http://www.w3.org/1998/Math/MathML";
var doc = typeof document !== "undefined" ? document : null;
var templateContainer = doc && /* @__PURE__ */ doc.createElement("template");
var nodeOps = {
  insert: (child, parent, anchor) => {
    parent.insertBefore(child, anchor || null);
  },
  remove: (child) => {
    const parent = child.parentNode;
    if (parent) {
      parent.removeChild(child);
    }
  },
  createElement: (tag, namespace, is, props) => {
    const el = namespace === "svg" ? doc.createElementNS(svgNS, tag) : namespace === "mathml" ? doc.createElementNS(mathmlNS, tag) : is ? doc.createElement(tag, {
      is
    }) : doc.createElement(tag);
    if (tag === "select" && props && props.multiple != null) {
      el.setAttribute("multiple", props.multiple);
    }
    return el;
  },
  createText: (text) => doc.createTextNode(text),
  createComment: (text) => doc.createComment(text),
  setText: (node, text) => {
    node.nodeValue = text;
  },
  setElementText: (el, text) => {
    el.textContent = text;
  },
  parentNode: (node) => node.parentNode,
  nextSibling: (node) => node.nextSibling,
  querySelector: (selector) => doc.querySelector(selector),
  setScopeId(el, id) {
    el.setAttribute(id, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(content, parent, anchor, namespace, start, end) {
    const before = anchor ? anchor.previousSibling : parent.lastChild;
    if (start && (start === end || start.nextSibling)) {
      while (true) {
        parent.insertBefore(start.cloneNode(true), anchor);
        if (start === end || !(start = start.nextSibling)) break;
      }
    } else {
      templateContainer.innerHTML = unsafeToTrustedHTML(namespace === "svg" ? `<svg>${content}</svg>` : namespace === "mathml" ? `<math>${content}</math>` : content);
      const template = templateContainer.content;
      if (namespace === "svg" || namespace === "mathml") {
        const wrapper = template.firstChild;
        while (wrapper.firstChild) {
          template.appendChild(wrapper.firstChild);
        }
        template.removeChild(wrapper);
      }
      parent.insertBefore(template, anchor);
    }
    return [
      // first
      before ? before.nextSibling : parent.firstChild,
      // last
      anchor ? anchor.previousSibling : parent.lastChild
    ];
  }
};
var TRANSITION = "transition";
var ANIMATION = "animation";
var vtcKey = /* @__PURE__ */ Symbol("_vtc");
var DOMTransitionPropsValidators = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: true
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
var TransitionPropsValidators = /* @__PURE__ */ extend({}, BaseTransitionPropsValidators, DOMTransitionPropsValidators);
var decorate$1 = (t) => {
  t.displayName = "Transition";
  t.props = TransitionPropsValidators;
  return t;
};
var Transition = /* @__PURE__ */ decorate$1((props, {
  slots
}) => h(BaseTransition, resolveTransitionProps(props), slots));
var callHook2 = (hook, args = []) => {
  if (isArray(hook)) {
    hook.forEach((h2) => h2(...args));
  } else if (hook) {
    hook(...args);
  }
};
var hasExplicitCallback = (hook) => {
  return hook ? isArray(hook) ? hook.some((h2) => h2.length > 1) : hook.length > 1 : false;
};
function resolveTransitionProps(rawProps) {
  const baseProps = {};
  for (const key in rawProps) {
    if (!(key in DOMTransitionPropsValidators)) {
      baseProps[key] = rawProps[key];
    }
  }
  if (rawProps.css === false) {
    return baseProps;
  }
  const {
    name = "v",
    type,
    duration,
    enterFromClass = `${name}-enter-from`,
    enterActiveClass = `${name}-enter-active`,
    enterToClass = `${name}-enter-to`,
    appearFromClass = enterFromClass,
    appearActiveClass = enterActiveClass,
    appearToClass = enterToClass,
    leaveFromClass = `${name}-leave-from`,
    leaveActiveClass = `${name}-leave-active`,
    leaveToClass = `${name}-leave-to`
  } = rawProps;
  const durations = normalizeDuration(duration);
  const enterDuration = durations && durations[0];
  const leaveDuration = durations && durations[1];
  const {
    onBeforeEnter,
    onEnter,
    onEnterCancelled,
    onLeave,
    onLeaveCancelled,
    onBeforeAppear = onBeforeEnter,
    onAppear = onEnter,
    onAppearCancelled = onEnterCancelled
  } = baseProps;
  const finishEnter = (el, isAppear, done, isCancelled) => {
    el._enterCancelled = isCancelled;
    removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
    removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
    done && done();
  };
  const finishLeave = (el, done) => {
    el._isLeaving = false;
    removeTransitionClass(el, leaveFromClass);
    removeTransitionClass(el, leaveToClass);
    removeTransitionClass(el, leaveActiveClass);
    done && done();
  };
  const makeEnterHook = (isAppear) => {
    return (el, done) => {
      const hook = isAppear ? onAppear : onEnter;
      const resolve2 = () => finishEnter(el, isAppear, done);
      callHook2(hook, [el, resolve2]);
      nextFrame(() => {
        removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
        addTransitionClass(el, isAppear ? appearToClass : enterToClass);
        if (!hasExplicitCallback(hook)) {
          whenTransitionEnds(el, type, enterDuration, resolve2);
        }
      });
    };
  };
  return extend(baseProps, {
    onBeforeEnter(el) {
      callHook2(onBeforeEnter, [el]);
      addTransitionClass(el, enterFromClass);
      addTransitionClass(el, enterActiveClass);
    },
    onBeforeAppear(el) {
      callHook2(onBeforeAppear, [el]);
      addTransitionClass(el, appearFromClass);
      addTransitionClass(el, appearActiveClass);
    },
    onEnter: makeEnterHook(false),
    onAppear: makeEnterHook(true),
    onLeave(el, done) {
      el._isLeaving = true;
      const resolve2 = () => finishLeave(el, done);
      addTransitionClass(el, leaveFromClass);
      if (!el._enterCancelled) {
        forceReflow(el);
        addTransitionClass(el, leaveActiveClass);
      } else {
        addTransitionClass(el, leaveActiveClass);
        forceReflow(el);
      }
      nextFrame(() => {
        if (!el._isLeaving) {
          return;
        }
        removeTransitionClass(el, leaveFromClass);
        addTransitionClass(el, leaveToClass);
        if (!hasExplicitCallback(onLeave)) {
          whenTransitionEnds(el, type, leaveDuration, resolve2);
        }
      });
      callHook2(onLeave, [el, resolve2]);
    },
    onEnterCancelled(el) {
      finishEnter(el, false, void 0, true);
      callHook2(onEnterCancelled, [el]);
    },
    onAppearCancelled(el) {
      finishEnter(el, true, void 0, true);
      callHook2(onAppearCancelled, [el]);
    },
    onLeaveCancelled(el) {
      finishLeave(el);
      callHook2(onLeaveCancelled, [el]);
    }
  });
}
function normalizeDuration(duration) {
  if (duration == null) {
    return null;
  } else if (isObject(duration)) {
    return [NumberOf(duration.enter), NumberOf(duration.leave)];
  } else {
    const n = NumberOf(duration);
    return [n, n];
  }
}
function NumberOf(val) {
  const res = toNumber(val);
  if (false) {
    assertNumber(res, "<transition> explicit duration");
  }
  return res;
}
function addTransitionClass(el, cls) {
  cls.split(/\s+/).forEach((c) => c && el.classList.add(c));
  (el[vtcKey] || (el[vtcKey] = /* @__PURE__ */ new Set())).add(cls);
}
function removeTransitionClass(el, cls) {
  cls.split(/\s+/).forEach((c) => c && el.classList.remove(c));
  const _vtc = el[vtcKey];
  if (_vtc) {
    _vtc.delete(cls);
    if (!_vtc.size) {
      el[vtcKey] = void 0;
    }
  }
}
function nextFrame(cb) {
  requestAnimationFrame(() => {
    requestAnimationFrame(cb);
  });
}
var endId = 0;
function whenTransitionEnds(el, expectedType, explicitTimeout, resolve2) {
  const id = el._endId = ++endId;
  const resolveIfNotStale = () => {
    if (id === el._endId) {
      resolve2();
    }
  };
  if (explicitTimeout != null) {
    return setTimeout(resolveIfNotStale, explicitTimeout);
  }
  const {
    type,
    timeout,
    propCount
  } = getTransitionInfo(el, expectedType);
  if (!type) {
    return resolve2();
  }
  const endEvent = type + "end";
  let ended = 0;
  const end = () => {
    el.removeEventListener(endEvent, onEnd);
    resolveIfNotStale();
  };
  const onEnd = (e) => {
    if (e.target === el && ++ended >= propCount) {
      end();
    }
  };
  setTimeout(() => {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(endEvent, onEnd);
}
function getTransitionInfo(el, expectedType) {
  const styles = window.getComputedStyle(el);
  const getStyleProperties = (key) => (styles[key] || "").split(", ");
  const transitionDelays = getStyleProperties(`${TRANSITION}Delay`);
  const transitionDurations = getStyleProperties(`${TRANSITION}Duration`);
  const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  const animationDelays = getStyleProperties(`${ANIMATION}Delay`);
  const animationDurations = getStyleProperties(`${ANIMATION}Duration`);
  const animationTimeout = getTimeout(animationDelays, animationDurations);
  let type = null;
  let timeout = 0;
  let propCount = 0;
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
    propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
  }
  const hasTransform = type === TRANSITION && /\b(?:transform|all)(?:,|$)/.test(getStyleProperties(`${TRANSITION}Property`).toString());
  return {
    type,
    timeout,
    propCount,
    hasTransform
  };
}
function getTimeout(delays, durations) {
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }
  return Math.max(...durations.map((d, i) => toMs(d) + toMs(delays[i])));
}
function toMs(s) {
  if (s === "auto") return 0;
  return Number(s.slice(0, -1).replace(",", ".")) * 1e3;
}
function forceReflow(el) {
  const targetDocument = el ? el.ownerDocument : document;
  return targetDocument.body.offsetHeight;
}
function patchClass(el, value, isSVG) {
  const transitionClasses = el[vtcKey];
  if (transitionClasses) {
    value = (value ? [value, ...transitionClasses] : [...transitionClasses]).join(" ");
  }
  if (value == null) {
    el.removeAttribute("class");
  } else if (isSVG) {
    el.setAttribute("class", value);
  } else {
    el.className = value;
  }
}
var vShowOriginalDisplay = /* @__PURE__ */ Symbol("_vod");
var vShowHidden = /* @__PURE__ */ Symbol("_vsh");
var vShow = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(el, {
    value
  }, {
    transition
  }) {
    el[vShowOriginalDisplay] = el.style.display === "none" ? "" : el.style.display;
    if (transition && value) {
      transition.beforeEnter(el);
    } else {
      setDisplay(el, value);
    }
  },
  mounted(el, {
    value
  }, {
    transition
  }) {
    if (transition && value) {
      transition.enter(el);
    }
  },
  updated(el, {
    value,
    oldValue
  }, {
    transition
  }) {
    if (!value === !oldValue) return;
    if (transition) {
      if (value) {
        transition.beforeEnter(el);
        setDisplay(el, true);
        transition.enter(el);
      } else {
        transition.leave(el, () => {
          setDisplay(el, false);
        });
      }
    } else {
      setDisplay(el, value);
    }
  },
  beforeUnmount(el, {
    value
  }) {
    setDisplay(el, value);
  }
};
function setDisplay(el, value) {
  el.style.display = value ? el[vShowOriginalDisplay] : "none";
  el[vShowHidden] = !value;
}
var CSS_VAR_TEXT = /* @__PURE__ */ Symbol(false ? "CSS_VAR_TEXT" : "");
function useCssVars(getter) {
  const instance = getCurrentInstance();
  if (!instance) {
    return;
  }
  const updateTeleports = instance.ut = (vars = getter(instance.proxy)) => {
    Array.from(document.querySelectorAll(`[data-v-owner="${instance.uid}"]`)).forEach((node) => setVarsOnNode(node, vars));
  };
  if (false) {
    instance.getCssVars = () => getter(instance.proxy);
  }
  const setVars = () => {
    const vars = getter(instance.proxy);
    if (instance.ce) {
      setVarsOnNode(instance.ce, vars);
    } else {
      setVarsOnVNode(instance.subTree, vars);
    }
    updateTeleports(vars);
  };
  onBeforeUpdate(() => {
    queuePostFlushCb(setVars);
  });
  onMounted(() => {
    watch2(setVars, NOOP, {
      flush: "post"
    });
    const ob = new MutationObserver(setVars);
    ob.observe(instance.subTree.el.parentNode, {
      childList: true
    });
    onUnmounted(() => ob.disconnect());
  });
}
function setVarsOnVNode(vnode, vars) {
  if (vnode.shapeFlag & 128) {
    const suspense = vnode.suspense;
    vnode = suspense.activeBranch;
    if (suspense.pendingBranch && !suspense.isHydrating) {
      suspense.effects.push(() => {
        setVarsOnVNode(suspense.activeBranch, vars);
      });
    }
  }
  while (vnode.component) {
    vnode = vnode.component.subTree;
  }
  if (vnode.shapeFlag & 1 && vnode.el) {
    setVarsOnNode(vnode.el, vars);
  } else if (vnode.type === Fragment) {
    vnode.children.forEach((c) => setVarsOnVNode(c, vars));
  } else if (vnode.type === Static) {
    let {
      el,
      anchor
    } = vnode;
    while (el) {
      setVarsOnNode(el, vars);
      if (el === anchor) break;
      el = el.nextSibling;
    }
  }
}
function setVarsOnNode(el, vars) {
  if (el.nodeType === 1) {
    const style = el.style;
    let cssText = "";
    for (const key in vars) {
      const value = normalizeCssVarValue(vars[key]);
      style.setProperty(`--${key}`, value);
      cssText += `--${key}: ${value};`;
    }
    style[CSS_VAR_TEXT] = cssText;
  }
}
var displayRE = /(?:^|;)\s*display\s*:/;
function patchStyle(el, prev, next) {
  const style = el.style;
  const isCssString = isString(next);
  let hasControlledDisplay = false;
  if (next && !isCssString) {
    if (prev) {
      if (!isString(prev)) {
        for (const key in prev) {
          if (next[key] == null) {
            setStyle(style, key, "");
          }
        }
      } else {
        for (const prevStyle of prev.split(";")) {
          const key = prevStyle.slice(0, prevStyle.indexOf(":")).trim();
          if (next[key] == null) {
            setStyle(style, key, "");
          }
        }
      }
    }
    for (const key in next) {
      if (key === "display") {
        hasControlledDisplay = true;
      }
      const value = next[key];
      if (value != null) {
        if (!shouldPreserveTextareaResizeStyle(el, key, !isString(prev) && prev ? prev[key] : void 0, value)) {
          setStyle(style, key, value);
        }
      } else {
        setStyle(style, key, "");
      }
    }
  } else {
    if (isCssString) {
      if (prev !== next) {
        const cssVarText = style[CSS_VAR_TEXT];
        if (cssVarText) {
          next += ";" + cssVarText;
        }
        style.cssText = next;
        hasControlledDisplay = displayRE.test(next);
      }
    } else if (prev) {
      el.removeAttribute("style");
    }
  }
  if (vShowOriginalDisplay in el) {
    if (!isCssString || prev !== next) {
      el[vShowOriginalDisplay] = hasControlledDisplay ? style.display : "";
    }
    if (el[vShowHidden]) {
      style.display = "none";
    }
  }
}
var importantRE = /\s*!important$/;
function setStyle(style, name, val) {
  if (isArray(val)) {
    val.forEach((v) => setStyle(style, name, v));
  } else {
    if (val == null) val = "";
    if (false) {
      if (semicolonRE.test(val)) {
        warn2(`Unexpected semicolon at the end of '${name}' style value: '${val}'`);
      }
    }
    if (name.startsWith("--")) {
      if (importantRE.test(val)) {
        style.setProperty(name, val.replace(importantRE, ""), "important");
      } else {
        style.setProperty(name, val);
      }
    } else {
      const prefixed = autoPrefix(style, name);
      if (importantRE.test(val)) {
        style.setProperty(hyphenate(prefixed), val.replace(importantRE, ""), "important");
      } else {
        style[prefixed] = val;
      }
    }
  }
}
var prefixes = ["Webkit", "Moz", "ms"];
var prefixCache = {};
function autoPrefix(style, rawName) {
  const cached = prefixCache[rawName];
  if (cached) {
    return cached;
  }
  let name = camelize(rawName);
  if (name !== "filter" && name in style) {
    return prefixCache[rawName] = name;
  }
  name = capitalize(name);
  for (let i = 0; i < prefixes.length; i++) {
    const prefixed = prefixes[i] + name;
    if (prefixed in style) {
      return prefixCache[rawName] = prefixed;
    }
  }
  return rawName;
}
function shouldPreserveTextareaResizeStyle(el, key, prev, next) {
  return el.tagName === "TEXTAREA" && (key === "width" || key === "height") && isString(next) && prev === next;
}
var xlinkNS = "http://www.w3.org/1999/xlink";
function patchAttr(el, key, value, isSVG, instance, isBoolean = isSpecialBooleanAttr(key)) {
  if (isSVG && key.startsWith("xlink:")) {
    if (value == null) {
      el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    if (value == null || isBoolean && !includeBooleanAttr(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, isBoolean ? "" : isSymbol(value) ? String(value) : value);
    }
  }
}
function patchDOMProp(el, key, value, parentComponent, attrName) {
  if (key === "innerHTML" || key === "textContent") {
    if (value != null) {
      el[key] = key === "innerHTML" ? unsafeToTrustedHTML(value) : value;
    }
    return;
  }
  const tag = el.tagName;
  if (key === "value" && tag !== "PROGRESS" && // custom elements may use _value internally
  !tag.includes("-")) {
    const oldValue = tag === "OPTION" ? el.getAttribute("value") || "" : el.value;
    const newValue = value == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      el.type === "checkbox" ? "on" : ""
    ) : String(value);
    if (oldValue !== newValue || !("_value" in el)) {
      el.value = newValue;
    }
    if (value == null) {
      el.removeAttribute(key);
    }
    el._value = value;
    return;
  }
  let needRemove = false;
  if (value === "" || value == null) {
    const type = typeof el[key];
    if (type === "boolean") {
      value = includeBooleanAttr(value);
    } else if (value == null && type === "string") {
      value = "";
      needRemove = true;
    } else if (type === "number") {
      value = 0;
      needRemove = true;
    }
  }
  try {
    el[key] = value;
  } catch (e) {
    if (false) {
      warn2(`Failed setting prop "${key}" on <${tag.toLowerCase()}>: value ${value} is invalid.`, e);
    }
  }
  needRemove && el.removeAttribute(attrName || key);
}
function addEventListener(el, event, handler, options) {
  el.addEventListener(event, handler, options);
}
function removeEventListener(el, event, handler, options) {
  el.removeEventListener(event, handler, options);
}
var veiKey = /* @__PURE__ */ Symbol("_vei");
function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
  const invokers = el[veiKey] || (el[veiKey] = {});
  const existingInvoker = invokers[rawName];
  if (nextValue && existingInvoker) {
    existingInvoker.value = false ? sanitizeEventValue(nextValue, rawName) : nextValue;
  } else {
    const [name, options] = parseName(rawName);
    if (nextValue) {
      const invoker = invokers[rawName] = createInvoker(false ? sanitizeEventValue(nextValue, rawName) : nextValue, instance);
      addEventListener(el, name, invoker, options);
    } else if (existingInvoker) {
      removeEventListener(el, name, existingInvoker, options);
      invokers[rawName] = void 0;
    }
  }
}
var optionsModifierRE = /(Once|Passive|Capture)$/;
var optionsModifierEventRE = /^on:?(?:Once|Passive|Capture)$/;
function parseName(name) {
  let options;
  let m2;
  while ((m2 = name.match(optionsModifierRE)) && !optionsModifierEventRE.test(name)) {
    if (!options) options = {};
    name = name.slice(0, name.length - m2[1].length);
    options[m2[1].toLowerCase()] = true;
  }
  const event = name[2] === ":" ? name.slice(3) : hyphenate(name.slice(2));
  return [event, options];
}
var cachedNow = 0;
var p = /* @__PURE__ */ Promise.resolve();
var getNow = () => cachedNow || (p.then(() => cachedNow = 0), cachedNow = Date.now());
function createInvoker(initialValue, instance) {
  const invoker = (e) => {
    if (!e._vts) {
      e._vts = Date.now();
    } else if (e._vts <= invoker.attached) {
      return;
    }
    const value = invoker.value;
    if (isArray(value)) {
      const originalStop = e.stopImmediatePropagation;
      e.stopImmediatePropagation = () => {
        originalStop.call(e);
        e._stopped = true;
      };
      const handlers = value.slice();
      const args = [e];
      for (let i = 0; i < handlers.length; i++) {
        if (e._stopped) {
          break;
        }
        const handler = handlers[i];
        if (handler) {
          callWithAsyncErrorHandling(handler, instance, 5, args);
        }
      }
    } else {
      callWithAsyncErrorHandling(value, instance, 5, [e]);
    }
  };
  invoker.value = initialValue;
  invoker.attached = getNow();
  return invoker;
}
var isNativeOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && // lowercase letter
key.charCodeAt(2) > 96 && key.charCodeAt(2) < 123;
var patchProp = (el, key, prevValue, nextValue, namespace, parentComponent) => {
  const isSVG = namespace === "svg";
  if (key === "class") {
    patchClass(el, nextValue, isSVG);
  } else if (key === "style") {
    patchStyle(el, prevValue, nextValue);
  } else if (isOn(key)) {
    if (!isModelListener(key)) {
      patchEvent(el, key, prevValue, nextValue, parentComponent);
    }
  } else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) {
    patchDOMProp(el, key, nextValue);
    if (!el.tagName.includes("-") && (key === "value" || key === "checked" || key === "selected")) {
      patchAttr(el, key, nextValue, isSVG, parentComponent, key !== "value");
    }
  } else if (
    // #11081 force set props for possible async custom element
    el._isVueCE && // #12408 check if it's declared prop or it's async custom element
    (shouldSetAsPropForVueCE(el, key) || // @ts-expect-error _def is private
    el._def.__asyncLoader && (/[A-Z]/.test(key) || !isString(nextValue)))
  ) {
    patchDOMProp(el, camelize(key), nextValue, parentComponent, key);
  } else {
    if (key === "true-value") {
      el._trueValue = nextValue;
    } else if (key === "false-value") {
      el._falseValue = nextValue;
    }
    patchAttr(el, key, nextValue, isSVG);
  }
};
function shouldSetAsProp(el, key, value, isSVG) {
  if (isSVG) {
    if (key === "innerHTML" || key === "textContent") {
      return true;
    }
    if (key in el && isNativeOn(key) && isFunction(value)) {
      return true;
    }
    return false;
  }
  if (key === "spellcheck" || key === "draggable" || key === "translate" || key === "autocorrect") {
    return false;
  }
  if (key === "sandbox" && el.tagName === "IFRAME") {
    return false;
  }
  if (key === "form") {
    return false;
  }
  if (key === "list" && el.tagName === "INPUT") {
    return false;
  }
  if (key === "type" && el.tagName === "TEXTAREA") {
    return false;
  }
  if (key === "width" || key === "height") {
    const tag = el.tagName;
    if (tag === "IMG" || tag === "VIDEO" || tag === "CANVAS" || tag === "SOURCE") {
      return false;
    }
  }
  if (isNativeOn(key) && isString(value)) {
    return false;
  }
  return key in el;
}
function shouldSetAsPropForVueCE(el, key) {
  const props = (
    // @ts-expect-error _def is private
    el._def.props
  );
  if (!props) {
    return false;
  }
  const camelKey = camelize(key);
  return Array.isArray(props) ? props.some((prop) => camelize(prop) === camelKey) : Object.keys(props).some((prop) => camelize(prop) === camelKey);
}
var getModelAssigner = (vnode) => {
  const fn = vnode.props["onUpdate:modelValue"] || false;
  return isArray(fn) ? (value) => invokeArrayFns(fn, value) : fn;
};
function onCompositionStart(e) {
  e.target.composing = true;
}
function onCompositionEnd(e) {
  const target = e.target;
  if (target.composing) {
    target.composing = false;
    target.dispatchEvent(new Event("input"));
  }
}
var assignKey = /* @__PURE__ */ Symbol("_assign");
var initialValueKey = /* @__PURE__ */ Symbol("_initialValue");
function castValue(value, trim, number) {
  if (trim) value = value.trim();
  if (number) value = looseToNumber(value);
  return value;
}
var vModelText = {
  created(el, {
    modifiers: {
      lazy,
      trim,
      number
    }
  }, vnode) {
    if (el.parentNode) {
      if (el.type === "text") {
        el[initialValueKey] = el.defaultValue.replace(/[\r\n]/g, "");
      } else if (el.type === "textarea") {
        el[initialValueKey] = el.defaultValue.replace(/\r\n?/g, "\n");
      }
    }
    el[assignKey] = getModelAssigner(vnode);
    const castToNumber = number || vnode.props && vnode.props.type === "number";
    addEventListener(el, lazy ? "change" : "input", (e) => {
      if (e.target.composing) return;
      el[assignKey](castValue(el.value, trim, castToNumber));
    });
    if (trim || castToNumber) {
      addEventListener(el, "change", () => {
        el.value = castValue(el.value, trim, castToNumber);
      });
    }
    if (!lazy) {
      addEventListener(el, "compositionstart", onCompositionStart);
      addEventListener(el, "compositionend", onCompositionEnd);
      addEventListener(el, "change", onCompositionEnd);
    }
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(el, {
    value,
    modifiers: {
      trim,
      number
    }
  }) {
    const newValue = value == null ? "" : value;
    const initialValue = el[initialValueKey];
    delete el[initialValueKey];
    if (initialValue !== void 0 && (el.type === "text" || el.type === "textarea") && el.value !== initialValue) {
      el[assignKey](castValue(el.value, trim, number));
    } else {
      el.value = newValue;
    }
  },
  beforeUpdate(el, {
    value,
    oldValue,
    modifiers: {
      lazy,
      trim,
      number
    }
  }, vnode) {
    el[assignKey] = getModelAssigner(vnode);
    if (el.composing) return;
    const elValue = (number || el.type === "number") && !/^0\d/.test(el.value) ? looseToNumber(el.value) : el.value;
    const newValue = value == null ? "" : value;
    if (elValue === newValue) {
      return;
    }
    const rootNode = el.getRootNode();
    if ((rootNode instanceof Document || rootNode instanceof ShadowRoot) && rootNode.activeElement === el && el.type !== "range") {
      if (lazy && value === oldValue) {
        return;
      }
      if (trim && el.value.trim() === newValue) {
        return;
      }
    }
    el.value = newValue;
  }
};
var vModelCheckbox = {
  // #4096 array checkboxes need to be deep traversed
  deep: true,
  created(el, _, vnode) {
    el[assignKey] = getModelAssigner(vnode);
    addEventListener(el, "change", () => {
      const modelValue = el._modelValue;
      const elementValue = getValue(el);
      const checked = el.checked;
      const assign = el[assignKey];
      if (isArray(modelValue)) {
        const index = looseIndexOf(modelValue, elementValue);
        const found = index !== -1;
        if (checked && !found) {
          assign(modelValue.concat(elementValue));
        } else if (!checked && found) {
          const filtered = [...modelValue];
          filtered.splice(index, 1);
          assign(filtered);
        }
      } else if (isSet(modelValue)) {
        const cloned = new Set(modelValue);
        if (checked) {
          cloned.add(elementValue);
        } else {
          cloned.delete(elementValue);
        }
        assign(cloned);
      } else {
        assign(getCheckboxValue(el, checked));
      }
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: setChecked,
  beforeUpdate(el, binding, vnode) {
    el[assignKey] = getModelAssigner(vnode);
    setChecked(el, binding, vnode);
  }
};
function setChecked(el, {
  value,
  oldValue
}, vnode) {
  el._modelValue = value;
  let checked;
  if (isArray(value)) {
    checked = looseIndexOf(value, vnode.props.value) > -1;
  } else if (isSet(value)) {
    checked = value.has(vnode.props.value);
  } else {
    if (value === oldValue) return;
    checked = looseEqual(value, getCheckboxValue(el, true));
  }
  if (el.checked !== checked) {
    el.checked = checked;
  }
}
var vModelRadio = {
  created(el, {
    value
  }, vnode) {
    el.checked = looseEqual(value, vnode.props.value);
    el[assignKey] = getModelAssigner(vnode);
    addEventListener(el, "change", () => {
      el[assignKey](getValue(el));
    });
  },
  beforeUpdate(el, {
    value,
    oldValue
  }, vnode) {
    el[assignKey] = getModelAssigner(vnode);
    if (value !== oldValue) {
      el.checked = looseEqual(value, vnode.props.value);
    }
  }
};
var vModelSelect = {
  // <select multiple> value need to be deep traversed
  deep: true,
  created(el, {
    value,
    modifiers: {
      number
    }
  }, vnode) {
    el._modelValue = value;
    addEventListener(el, "change", () => {
      const selectedVal = Array.prototype.filter.call(el.options, (o) => o.selected).map((o) => number ? looseToNumber(getValue(o)) : getValue(o));
      const multiple = el.multiple;
      const assignedValue = multiple ? isSet(el._modelValue) ? new Set(selectedVal) : selectedVal : selectedVal[0];
      const pending = el._pendingValue = [multiple, multiple ? isArray(assignedValue) ? selectedVal.slice() : selectedVal : assignedValue];
      try {
        el[assignKey](assignedValue);
      } finally {
        nextTick(() => {
          if (el._pendingValue === pending) {
            el._pendingValue = void 0;
          }
        });
      }
    });
    el[assignKey] = getModelAssigner(vnode);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(el, {
    value,
    modifiers: {
      number
    }
  }) {
    setSelected(el, value, number);
  },
  beforeUpdate(el, {
    value
  }, vnode) {
    el._modelValue = value;
    el[assignKey] = getModelAssigner(vnode);
  },
  updated(el, {
    value,
    modifiers: {
      number
    }
  }) {
    const pending = el._pendingValue;
    el._pendingValue = void 0;
    if (!pending || pending[0] !== el.multiple || !isSameSelectValue(value, pending[1], pending[0])) {
      setSelected(el, value, number);
    }
  }
};
function isSameSelectValue(value, assignedValue, multiple) {
  if (!multiple) return looseEqual(value, assignedValue);
  if (isArray(value)) return looseEqual(value, assignedValue);
  if (isSet(value)) {
    if (value.size !== assignedValue.length) return false;
    for (const item of assignedValue) {
      if (!value.has(item)) return false;
    }
    return true;
  }
  return false;
}
function setSelected(el, value, number = false) {
  const isMultiple = el.multiple;
  const isArrayValue = isArray(value);
  if (isMultiple && !isArrayValue && !isSet(value)) {
    return;
  }
  for (let i = 0, l = el.options.length; i < l; i++) {
    const option = el.options[i];
    const optionValue = getValue(option);
    if (isMultiple) {
      if (isArrayValue) {
        const optionType = typeof optionValue;
        if (optionType === "string" || optionType === "number") {
          option.selected = value.some((v) => String(v) === String(optionValue));
        } else {
          option.selected = looseIndexOf(value, optionValue) > -1;
        }
      } else {
        option.selected = value.has(optionValue) || number && typeof optionValue === "string" && value.has(looseToNumber(optionValue));
      }
    } else if (looseEqual(getValue(option), value)) {
      if (el.selectedIndex !== i) el.selectedIndex = i;
      return;
    }
  }
  if (!isMultiple && el.selectedIndex !== -1) {
    el.selectedIndex = -1;
  }
}
function getValue(el) {
  return "_value" in el ? el._value : el.value;
}
function getCheckboxValue(el, checked) {
  const key = checked ? "_trueValue" : "_falseValue";
  return key in el ? el[key] : checked;
}
var vModelDynamic = {
  created(el, binding, vnode) {
    callModelHook(el, binding, vnode, null, "created");
  },
  mounted(el, binding, vnode) {
    callModelHook(el, binding, vnode, null, "mounted");
  },
  beforeUpdate(el, binding, vnode, prevVNode) {
    callModelHook(el, binding, vnode, prevVNode, "beforeUpdate");
  },
  updated(el, binding, vnode, prevVNode) {
    callModelHook(el, binding, vnode, prevVNode, "updated");
  }
};
function resolveDynamicModel(tagName, type) {
  switch (tagName) {
    case "SELECT":
      return vModelSelect;
    case "TEXTAREA":
      return vModelText;
    default:
      switch (type) {
        case "checkbox":
          return vModelCheckbox;
        case "radio":
          return vModelRadio;
        default:
          return vModelText;
      }
  }
}
function callModelHook(el, binding, vnode, prevVNode, hook) {
  const modelToUse = resolveDynamicModel(el.tagName, vnode.props && vnode.props.type);
  const fn = modelToUse[hook];
  fn && fn(el, binding, vnode, prevVNode);
}
var systemModifiers = ["ctrl", "shift", "alt", "meta"];
var modifierGuards = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, modifiers) => systemModifiers.some((m2) => e[`${m2}Key`] && !modifiers.includes(m2))
};
var withModifiers = (fn, modifiers) => {
  if (!fn) return fn;
  const cache = fn._withMods || (fn._withMods = {});
  const cacheKey = modifiers.join(".");
  return cache[cacheKey] || (cache[cacheKey] = (event, ...args) => {
    for (let i = 0; i < modifiers.length; i++) {
      const guard = modifierGuards[modifiers[i]];
      if (guard && guard(event, modifiers)) return;
    }
    return fn(event, ...args);
  });
};
var keyNames = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
};
var withKeys = (fn, modifiers) => {
  const cache = fn._withKeys || (fn._withKeys = {});
  const cacheKey = modifiers.join(".");
  return cache[cacheKey] || (cache[cacheKey] = (event) => {
    if (!("key" in event)) {
      return;
    }
    const eventKey = hyphenate(event.key);
    if (modifiers.some((k) => k === eventKey || keyNames[k] === eventKey)) {
      return fn(event);
    }
  });
};
var rendererOptions = /* @__PURE__ */ extend({
  patchProp
}, nodeOps);
var renderer;
function ensureRenderer() {
  return renderer || (renderer = createRenderer(rendererOptions));
}
var createApp = (...args) => {
  const app = ensureRenderer().createApp(...args);
  if (false) {
    injectNativeTagCheck(app);
    injectCompilerOptionsCheck(app);
  }
  const {
    mount
  } = app;
  app.mount = (containerOrSelector) => {
    const container = normalizeContainer(containerOrSelector);
    if (!container) return;
    const component = app._component;
    if (!isFunction(component) && !component.render && !component.template) {
      component.template = container.innerHTML;
    }
    if (container.nodeType === 1) {
      container.textContent = "";
    }
    const proxy = mount(container, false, resolveRootNamespace(container));
    if (container instanceof Element) {
      container.removeAttribute("v-cloak");
      container.setAttribute("data-v-app", "");
    }
    return proxy;
  };
  return app;
};
function resolveRootNamespace(container) {
  if (container instanceof SVGElement) {
    return "svg";
  }
  if (typeof MathMLElement === "function" && container instanceof MathMLElement) {
    return "mathml";
  }
}
function normalizeContainer(container) {
  if (isString(container)) {
    const res = document.querySelector(container);
    if (false) {
      warn2(`Failed to mount app: mount target selector "${container}" returned null.`);
    }
    return res;
  }
  if (false) {
    warn2(`mounting on a ShadowRoot with \`{mode: "closed"}\` may lead to unpredictable bugs`);
  }
  return container;
}
/**
* vue v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
if (false) {
  initDev();
}
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
  enumerable: true,
  configurable: true,
  writable: true,
  value
}) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {})) if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols) for (var prop of __getOwnPropSymbols(b)) {
    if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
  }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source) if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0) target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols) for (var prop of __getOwnPropSymbols(source)) {
    if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop)) target[prop] = source[prop];
  }
  return target;
};
function regExpEscape(value) {
  return value.replace(/([\\{}()|.?*+\-^$[\]])/g, "\\$1");
}
var COMBINING_MARK = "[̀-ͯ҃-҉֑-ׇֽֿׁׂׅׄؐ-ًؚ-ٰٟۖ-ۜ۟-۪ۤۧۨ-ܑۭܰ-݊ަ-ް߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣঁ-ঃ়া-ৄেৈো-্ৗৢৣ৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑੰੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୢୣஂா-ூெ-ைொ-்ௗఀ-ఄా-ౄె-ైొ-్ౕౖౢౣಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣංඃ්ා-ුූෘ-ෟෲෳัิ-ฺ็-๎ັິ-ູົຼ່-ໍ༹༘༙༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏႚ-ႝ፝-፟ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝᠋-᠍ᢅᢆᢩᤠ-ᤫᤰ-᤻ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼᪰-᪾ᬀ-ᬄ᬴-᭄᭫-᭳ᮀ-ᮂᮡ-ᮭ᯦-᯳ᰤ-᰷᳐-᳔᳒-᳨᳭ᳲ-᳴᳷-᳹᷀-᷹᷻-᷿⃐-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꙯-꙲ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧꢀꢁꢴ-ꣅ꣠-꣱ꣿꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀ꧥꨩ-ꨶꩃꩌꩍꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭ﬞ︀-️︠-︯]";
function splitStringAtMatch(query, title) {
  if (!query) {
    return [title, "", ""];
  }
  const sanitizedQuery = regExpEscape(query);
  const match = new RegExp(
    // Per https://www.regular-expressions.info/unicode.html, "any code point that is not a
    // combining mark can be followed by any number of combining marks." See also the
    // discussion in https://phabricator.wikimedia.org/T35242.
    sanitizedQuery + COMBINING_MARK + "*",
    "i"
  ).exec(title);
  if (!match || match.index === void 0) {
    return [title, "", ""];
  }
  const matchStartIndex = match.index;
  const matchEndIndex = matchStartIndex + match[0].length;
  const highlightedTitle = title.slice(matchStartIndex, matchEndIndex);
  const beforeHighlight = title.slice(0, matchStartIndex);
  const afterHighlight = title.slice(matchEndIndex, title.length);
  return [beforeHighlight, highlightedTitle, afterHighlight];
}
var m = '<path d="M9.5 1h1L19 17.2V19H1v-1.8zM9 7v6h2V7zm0 8v2h2v-2z"/>';
var M1 = '<path d="M18.154 3.837 8 16.8H6.65l-4.8-3.6 1.2-1.6 4.02 3.015 9.517-12.02z"/>';
var p1 = '<path d="M14.243 7.172 11.413 10l2.828 2.83-1.414 1.413L10 11.415l-2.827 2.827-1.414-1.414L8.585 10 5.757 7.172l1.415-1.414 2.827 2.828 2.83-2.828z"/><path d="M10 1a9 9 0 110 18 9 9 0 010-18m0 2a7 7 0 100 14 7 7 0 000-14"/>';
var g1 = '<path d="M16.707 4.707 11.414 10l5.293 5.293-1.414 1.414L10 11.414l-5.293 5.293-1.414-1.414L8.586 10 3.293 4.707l1.414-1.414L10 8.586l5.293-5.293z"/>';
var E1 = '<path d="M19 6.4v7.199L13.6 19H6.4L1 13.599v-7.2L6.4 1h7.2zM9 14v2h2v-2zm0-9v7h2V5z"/>';
var N1 = '<path d="m16.7 8-6 6H9.3l-6-6 1.4-1.4 5.3 5.3 5.3-5.3z"/>';
var I0 = '<path d="M19 19H1V1h18zm-8.5-6-2-2L5 15h10V8zm-4-8a1.5 1.5 0 100 3 1.5 1.5 0 000-3"/>';
var M = '<path d="M13 20H7v-2h6zM10 0c1.938 0 3.58.556 4.745 1.644C15.918 2.738 16.5 4.27 16.5 6c0 2.22-1.15 3.732-2.04 4.727-.644.72-.96 1.633-.96 2.662V16h-7v-2.611c0-1.029-.317-1.942-.96-2.662C4.65 9.732 3.5 8.22 3.5 6c0-1.627.593-3.145 1.743-4.255C6.395.634 8.032 0 10 0"/>';
var q0 = '<path d="M10 1a9 9 0 110 18 9 9 0 010-18M8 9v2h1v2H8v2h4v-2h-1V9zm1-4v2h2V5z"/>';
var t3 = '<path d="M10 1a9 9 0 110 18 9 9 0 010-18M8.823 11.118 6.8 9.6l-1.2 1.6 2.8 2.1h1.1l4.905-5.956-1.561-1.25z"/>';
var V5 = m;
var c6 = M1;
var t6 = p1;
var o6 = g1;
var y6 = E1;
var F6 = N1;
var o7 = I0;
var V7 = {
  langCodeMap: {
    ar: M
  },
  default: q0
};
var F9 = t3;
function Uc(c, l, o) {
  if (typeof c == "string" || "path" in c) return c;
  if ("shouldFlip" in c) return c.ltr;
  if ("rtl" in c) return o === "rtl" ? c.rtl : c.ltr;
  const v = l in c.langCodeMap ? c.langCodeMap[l] : c.default;
  return typeof v == "string" || "path" in v ? v : v.ltr;
}
function Zc(c, l) {
  if (typeof c == "string") return false;
  if ("langCodeMap" in c) {
    const o = l in c.langCodeMap ? c.langCodeMap[l] : c.default;
    if (typeof o == "string") return false;
    c = o;
  }
  if ("shouldFlipExceptions" in c && Array.isArray(c.shouldFlipExceptions)) {
    const o = c.shouldFlipExceptions.indexOf(l);
    return o === void 0 || o === -1;
  }
  return "shouldFlip" in c ? c.shouldFlip : false;
}
function useComputedDirection(root) {
  const computedDir = /* @__PURE__ */ ref(null);
  onMounted(() => {
    const dir = window.getComputedStyle(root.value).direction;
    computedDir.value = dir === "ltr" || dir === "rtl" ? dir : null;
  });
  return computedDir;
}
function useComputedLanguage(root) {
  const computedLang = /* @__PURE__ */ ref("");
  onMounted(() => {
    let ancestor = root.value;
    while ((ancestor == null ? void 0 : ancestor.lang) === "") {
      ancestor = ancestor.parentElement;
    }
    computedLang.value = ancestor ? ancestor == null ? void 0 : ancestor.lang : null;
  });
  return computedLang;
}
function makeStringTypeValidator(allowedValues) {
  return (s) => typeof s === "string" && allowedValues.includes(s);
}
var LibraryPrefix = "cdx";
var ButtonActions = ["default", "progressive", "destructive"];
var ButtonWeights = ["normal", "primary", "quiet"];
var ButtonSizes = ["small", "medium", "large"];
var IconSizes = ["x-small", "small", "medium"];
var StatusTypes = ["subtle", "notice", "progressive", "warning", "error", "success"];
var statusTypeValidator = makeStringTypeValidator(StatusTypes);
var TextInputTypes = ["text", "search", "number", "email", "month", "password", "tel", "url", "week", "date", "datetime-local", "time"];
var ValidationStatusTypes = ["default", "warning", "error", "success"];
var TableTextAlignments = [
  "start",
  "center",
  "end",
  // Numbers should be aligned to the right in all reading directionalities.
  "number"
];
var ImageAspectRatios = ["16:9", "3:2", "4:3", "1:1", "3:4", "2:3"];
var imageAspectRatioValidator = makeStringTypeValidator(ImageAspectRatios);
var ObjectFitOptions = ["fill", "contain", "cover", "none", "scale-down"];
var objectFitValidator = makeStringTypeValidator(ObjectFitOptions);
var ObjectPositions = ["top", "bottom", "left", "right", "center"];
var imagePositionValidator = makeStringTypeValidator(ObjectPositions);
var CardThumbnailPositions = ["inline-start", "inline-end", "block-start"];
var cardThumbnailPositionValidator = makeStringTypeValidator(CardThumbnailPositions);
var CardSeparations = ["none", "divider", "outline"];
var cardSeparationValidator = makeStringTypeValidator(CardSeparations);
var CardThumbnailSizes = ["small", "large"];
var cardThumbnailSizeValidator = makeStringTypeValidator(CardThumbnailSizes);
var AccordionSeparations = ["none", "minimal", "divider", "outline"];
var FieldInputIdKey = /* @__PURE__ */ Symbol("CdxFieldInputId");
var FieldDescriptionIdKey = /* @__PURE__ */ Symbol("CdxFieldDescriptionId");
var FieldStatusKey = /* @__PURE__ */ Symbol("CdxFieldStatus");
var DisabledKey = /* @__PURE__ */ Symbol("CdxDisabled");
var NoInvertClass = "".concat(LibraryPrefix, "-no-invert");
var TablePaginationPositions = ["top", "bottom", "both"];
var iconSizeValidator = makeStringTypeValidator(IconSizes);
var _sfc_main$D = /* @__PURE__ */ defineComponent({
  name: "CdxIcon",
  props: {
    /** The SVG path or an object containing that path plus other data. */
    icon: {
      type: [String, Object],
      required: true
    },
    /**
     * Accessible label for the icon. If not included, the icon will be hidden from screen
     * readers via `aria-hidden="true"`. Browsers also display this label as a tooltip when the
     * user hovers over the icon. Note that this label is not rendered as visible text next
     * to the icon.
     */
    iconLabel: {
      type: String,
      default: ""
    },
    /**
     * Explicitly set the language code to use for the icon. See
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/lang.
     * Defaults to the lang attribute of the nearest ancestor at mount time.
     */
    lang: {
      type: String,
      default: null
    },
    /**
     * Explicitly set the direction to use for the icon. See
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dir.
     * Defaults to the computed direction at mount time.
     */
    dir: {
      type: String,
      default: null
    },
    /**
     * Specify icon size by choosing one of several pre-defined size
     * options. See the type documentation for supported size options.
     * The `medium` size is used by default if no size prop is provided.
     */
    size: {
      type: String,
      default: "medium",
      validator: iconSizeValidator
    }
  },
  setup(props) {
    const rootElement = /* @__PURE__ */ ref();
    const computedDir = useComputedDirection(rootElement);
    const computedLang = useComputedLanguage(rootElement);
    const overriddenDir = computed2(() => {
      var _a;
      return (_a = props.dir) != null ? _a : computedDir.value;
    });
    const overriddenLang = computed2(() => {
      var _a;
      return (_a = props.lang) != null ? _a : computedLang.value;
    });
    const rootClasses = computed2(() => ({
      "cdx-icon--flipped": overriddenDir.value === "rtl" && overriddenLang.value !== null && Zc(props.icon, overriddenLang.value),
      ["cdx-icon--".concat(props.size)]: true
    }));
    const resolvedIcon = computed2(() => {
      var _a, _b;
      return Uc(props.icon, (_a = overriddenLang.value) != null ? _a : "", (_b = overriddenDir.value) != null ? _b : "ltr");
    });
    const iconSvg = computed2(() => typeof resolvedIcon.value === "string" ? resolvedIcon.value : "");
    const iconPath = computed2(() => typeof resolvedIcon.value !== "string" ? resolvedIcon.value.path : "");
    return {
      rootElement,
      rootClasses,
      iconSvg,
      iconPath
    };
  }
});
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
var _hoisted_1$z = ["aria-hidden"];
var _hoisted_2$n = {
  key: 0
};
var _hoisted_3$f = ["innerHTML"];
var _hoisted_4$c = ["d"];
function _sfc_render$E(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "span",
    {
      ref: "rootElement",
      class: normalizeClass(["cdx-icon", _ctx.rootClasses])
    },
    [(openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      "aria-hidden": _ctx.iconLabel ? void 0 : true
    }, [_ctx.iconLabel ? (openBlock(), createElementBlock(
      "title",
      _hoisted_2$n,
      toDisplayString(_ctx.iconLabel),
      1
      /* TEXT */
    )) : createCommentVNode("v-if", true), _ctx.iconSvg ? (openBlock(), createElementBlock("g", {
      key: 1,
      innerHTML: _ctx.iconSvg
    }, null, 8, _hoisted_3$f)) : (openBlock(), createElementBlock("path", {
      key: 2,
      d: _ctx.iconPath
    }, null, 8, _hoisted_4$c))], 8, _hoisted_1$z))],
    2
    /* CLASS */
  );
}
var CdxIcon = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["render", _sfc_render$E]]);
function flattenSlotContents(slotContents) {
  const flattened = [];
  for (const node of slotContents) {
    if (
      // HTML tag
      typeof node.type === "string" || // Component
      typeof node.type === "object"
    ) {
      flattened.push(node);
    } else if (node.type !== Comment) {
      if (typeof node.children === "string" && node.children.trim() !== "") {
        flattened.push(node.children);
      } else if (Array.isArray(node.children)) {
        flattened.push(...flattenSlotContents(node.children));
      }
    }
  }
  return flattened;
}
function isComponentVNode(node, componentName) {
  if (typeof node.type === "object" && "name" in node.type) {
    if (componentName !== void 0) {
      return node.type.name === componentName;
    }
    return true;
  }
  return false;
}
function isTagVNode(node, tagName) {
  if (typeof node.type === "string") {
    {
      return node.type === tagName.toLowerCase();
    }
  }
  return false;
}
function useSlotContents(slot) {
  const slotContents = typeof slot === "function" ? slot() : slot;
  return slotContents ? flattenSlotContents(slotContents) : [];
}
function useWarnOnce(shouldWarn, message) {
  if (shouldWarn()) {
    warn2(message);
    return;
  }
  const stop2 = watch2(shouldWarn, (newValue) => {
    if (newValue) {
      warn2(message);
      stop2();
    }
  });
}
function useIconOnlyButton(slot, attrs, componentName) {
  const isIconOnly = computed2(() => {
    const slotContents = useSlotContents(slot);
    if (slotContents.length !== 1) {
      return false;
    }
    const soleNode = slotContents[0];
    if (typeof soleNode === "object" && (isComponentVNode(soleNode, "CdxIcon") || isTagVNode(soleNode, "svg"))) {
      return true;
    }
    return false;
  });
  useWarnOnce(() => isIconOnly.value && !attrs["aria-label"] && !attrs["aria-hidden"], "".concat(componentName, ": Icon-only buttons require one of the following attributes: aria-label or aria-hidden. See documentation at https://doc.wikimedia.org/codex/latest/components/demos/button.html#icon-only-button"));
  return isIconOnly;
}
var buttonActionValidator = makeStringTypeValidator(ButtonActions);
var buttonWeightValidator = makeStringTypeValidator(ButtonWeights);
var buttonSizeValidator$1 = makeStringTypeValidator(ButtonSizes);
var _sfc_main$C = /* @__PURE__ */ defineComponent({
  name: "CdxButton",
  props: {
    /**
     * The kind of action that will be taken on click.
     *
     * @values 'default', 'progressive', 'destructive'
     */
    action: {
      type: String,
      default: "default",
      validator: buttonActionValidator
    },
    /**
     * Visual prominence of Button.
     *
     * @values 'normal', 'primary', 'quiet'
     */
    weight: {
      type: String,
      default: "normal",
      validator: buttonWeightValidator
    },
    /**
     * Button size.
     *
     * Medium: Default for most cases.
     * Large: Use rarely, mainly for icon-only buttons on touchscreens.
     * Small: Use in tight spaces or inline with text.
     * Avoid on touchscreens - prefer medium for better accessibility.
     *
     * @values 'small', 'medium', 'large'
     */
    size: {
      type: String,
      default: "medium",
      validator: buttonSizeValidator$1
    }
  },
  emits: ["click"],
  setup(props, {
    emit: emit2,
    slots,
    attrs
  }) {
    const button = /* @__PURE__ */ ref();
    const isIconOnly = useIconOnlyButton(slots.default, attrs, "CdxButton");
    const isActive = /* @__PURE__ */ ref(false);
    const rootClasses = computed2(() => ({
      ["cdx-button--action-".concat(props.action)]: true,
      ["cdx-button--weight-".concat(props.weight)]: true,
      ["cdx-button--size-".concat(props.size)]: true,
      "cdx-button--framed": props.weight !== "quiet",
      "cdx-button--icon-only": isIconOnly.value,
      "cdx-button--is-active": isActive.value
    }));
    const onClick = (event) => {
      emit2("click", event);
    };
    const setActive = (active) => {
      isActive.value = active;
    };
    function onKeyDown() {
      setActive(true);
    }
    function onKeyUp() {
      var _a;
      setActive(false);
      (_a = button.value) == null ? void 0 : _a.click();
    }
    return {
      button,
      rootClasses,
      onClick,
      onKeyDown,
      onKeyUp
    };
  }
});
function _sfc_render$D(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "button",
    {
      ref: "button",
      class: normalizeClass(["cdx-button", _ctx.rootClasses]),
      onKeydown: _cache[0] || (_cache[0] = withKeys(withModifiers((...args) => _ctx.onKeyDown && _ctx.onKeyDown(...args), ["prevent"]), ["space", "enter"])),
      onKeyup: _cache[1] || (_cache[1] = withKeys((...args) => _ctx.onKeyUp && _ctx.onKeyUp(...args), ["space", "enter"])),
      onClick: _cache[2] || (_cache[2] = (...args) => _ctx.onClick && _ctx.onClick(...args))
    },
    [renderSlot(_ctx.$slots, "default")],
    34
    /* CLASS, NEED_HYDRATION */
  );
}
var CdxButton = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["render", _sfc_render$D]]);
var separationValidator = makeStringTypeValidator(AccordionSeparations);
var _sfc_main$z = /* @__PURE__ */ defineComponent({
  name: "CdxThumbnail",
  components: {
    CdxIcon
  },
  props: {
    /**
     * Thumbnail data.
     */
    thumbnail: {
      type: [Object, null],
      default: null
    },
    /**
     * Thumbnail placeholder icon.
     */
    placeholderIcon: {
      type: [String, Object],
      default: o7
    }
  },
  setup: (props) => {
    const thumbnailLoaded = /* @__PURE__ */ ref(false);
    const thumbnailStyle = /* @__PURE__ */ ref({});
    const preloadThumbnail = (url) => {
      const escapedUrl = url.replace(/([\\"\n])/g, "\\$1");
      const image = new Image();
      image.onload = () => {
        thumbnailStyle.value = {
          backgroundImage: 'url("'.concat(escapedUrl, '")')
        };
        thumbnailLoaded.value = true;
      };
      image.onerror = () => {
        thumbnailLoaded.value = false;
      };
      image.src = escapedUrl;
    };
    onMounted(() => {
      var _a;
      if ((_a = props.thumbnail) == null ? void 0 : _a.url) {
        preloadThumbnail(props.thumbnail.url);
      }
    });
    watch2(/* @__PURE__ */ toRef(props, "thumbnail"), (newThumbnail, oldThumbnail) => {
      if (!(newThumbnail == null ? void 0 : newThumbnail.url)) {
        thumbnailLoaded.value = false;
        thumbnailStyle.value = {};
        return;
      }
      if ((oldThumbnail == null ? void 0 : oldThumbnail.url) !== newThumbnail.url) {
        thumbnailLoaded.value = false;
        preloadThumbnail(newThumbnail.url);
      }
    }, {
      deep: true
    });
    return {
      thumbnailStyle,
      thumbnailLoaded,
      NoInvertClass
    };
  }
});
var _hoisted_1$w = {
  class: "cdx-thumbnail"
};
var _hoisted_2$l = {
  key: 0,
  class: "cdx-thumbnail__placeholder"
};
function _sfc_render$A(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_cdx_icon = resolveComponent("cdx-icon");
  return openBlock(), createElementBlock("span", _hoisted_1$w, [!_ctx.thumbnailLoaded ? (openBlock(), createElementBlock("span", _hoisted_2$l, [createVNode(_component_cdx_icon, {
    icon: _ctx.placeholderIcon,
    class: "cdx-thumbnail__placeholder__icon--vue"
  }, null, 8, ["icon"])])) : createCommentVNode("v-if", true), createVNode(Transition, {
    name: "cdx-thumbnail__image"
  }, {
    default: withCtx(() => [_ctx.thumbnailLoaded ? (openBlock(), createElementBlock(
      "span",
      {
        key: 0,
        style: normalizeStyle(_ctx.thumbnailStyle),
        class: normalizeClass([_ctx.NoInvertClass, "cdx-thumbnail__image"])
      },
      null,
      6
      /* CLASS, STYLE */
    )) : createCommentVNode("v-if", true)]),
    _: 1
    /* STABLE */
  })]);
}
var CdxThumbnail = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["render", _sfc_render$A]]);
function useComputedDisabled(disabledProp) {
  const providedDisabled = inject(DisabledKey, /* @__PURE__ */ ref(false));
  return computed2(() => providedDisabled.value || disabledProp.value);
}
function useFieldData(disabledProp, statusProp, idAttr) {
  const computedDisabled = useComputedDisabled(disabledProp);
  const providedStatus = inject(FieldStatusKey, /* @__PURE__ */ ref("default"));
  const computedStatus = computed2(() => {
    if ((statusProp == null ? void 0 : statusProp.value) && statusProp.value !== "default") {
      return statusProp.value;
    }
    return providedStatus.value;
  });
  const providedId = inject(FieldInputIdKey, void 0);
  const computedInputId = computed2(() => {
    var _a;
    return (_a = providedId == null ? void 0 : providedId.value) != null ? _a : idAttr;
  });
  return {
    computedDisabled,
    computedStatus,
    computedInputId
  };
}
function useSplitAttributes(attrs, internalClasses = computed2(() => ({}))) {
  const rootClasses = computed2(() => {
    const classRecord = __objRest(internalClasses.value, []);
    if (attrs.class) {
      const providedClasses = attrs.class.split(" ");
      providedClasses.forEach((className) => {
        classRecord[className] = true;
      });
    }
    return classRecord;
  });
  const rootStyle = computed2(() => {
    if ("style" in attrs) {
      return attrs.style;
    }
    return void 0;
  });
  const otherAttrs = computed2(() => {
    const _a = attrs, {
      class: _ignoredClass,
      style: _ignoredStyle
    } = _a, attrsCopy = __objRest(_a, ["class", "style"]);
    return attrsCopy;
  });
  return {
    rootClasses,
    rootStyle,
    otherAttrs
  };
}
function useI18n(messageKey, defaultValue, params = []) {
  const providedI18nFunc = inject("CdxI18nFunction", void 0);
  return computed2(() => {
    const unwrappedParams = params.map((p2) => typeof p2 === "function" ? p2() : p2.value);
    const fromProvidedFunc = providedI18nFunc == null ? void 0 : providedI18nFunc(messageKey, ...unwrappedParams);
    if (fromProvidedFunc !== void 0 && fromProvidedFunc !== null) {
      return fromProvidedFunc;
    }
    return typeof defaultValue === "function" ? defaultValue(...unwrappedParams) : defaultValue;
  });
}
function useI18nWithOverride(override, messageKey, defaultValue, params = []) {
  const translatedMessage = useI18n(messageKey, defaultValue, params);
  return computed2(() => override.value || translatedMessage.value);
}
var _sfc_main$x = /* @__PURE__ */ defineComponent({
  name: "CdxLabel",
  components: {
    CdxIcon
  },
  /**
   * We want the label or legend to inherit attributes, not the root element.
   */
  inheritAttrs: false,
  props: {
    /**
     * Icon before the label text.
     *
     * Do not use this if including a start icon within the input component.
     */
    icon: {
      type: [String, Object],
      default: null
    },
    /**
     * Whether the field is optional.
     *
     * This will add a flag next to the label indicating that the field is optional.
     */
    optional: {
      type: Boolean,
      default: false
    },
    // DEPRECATED: set default to '(optional)' and remove validator (T368444).
    /**
     * Text to indicate that the field is optional.
     *
     * Omit this prop to use the default value, "(optional)".
     */
    optionalFlag: {
      type: String,
      default: "",
      validator: (value, props) => {
        if (value.length > 0 && !props.optional) {
          console.warn("[CdxLabel]: The boolean `optional` prop is required to show the optional flag.\n\nRefer to https://doc.wikimedia.org/codex/latest/components/demos/label.html#props.");
          return false;
        }
        return true;
      }
    },
    /**
     * Whether the label should be visually hidden.
     */
    visuallyHidden: {
      type: Boolean,
      default: false
    },
    /**
     * Whether this component should output a `<legend>` element.
     *
     * Always set this to true when this component is used inside a `<fieldset>` element. Do not
     * set it to true otherwise.
     */
    isLegend: {
      type: Boolean,
      default: false
    },
    /**
     * The ID of the input/control this label is for.
     *
     * Will be added as the `for` attribute of the `<label>`. Not needed for `<legend>`.
     */
    inputId: {
      type: String,
      default: ""
    },
    /**
     * The ID of the description element.
     *
     * This ID can be used for the `aria-describedby` attribute of the input.
     */
    descriptionId: {
      type: String,
      default: ""
    },
    /**
     * Whether this label is for a disabled field or input.
     */
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props, {
    attrs
  }) {
    const {
      computedDisabled
    } = useFieldData(/* @__PURE__ */ toRef(props, "disabled"));
    const internalClasses = computed2(() => ({
      "cdx-label--visually-hidden": props.visuallyHidden,
      "cdx-label--disabled": computedDisabled.value
    }));
    const {
      rootClasses,
      rootStyle,
      otherAttrs
    } = useSplitAttributes(attrs, internalClasses);
    const translatedOptionalFlag = useI18nWithOverride(/* @__PURE__ */ toRef(props, "optionalFlag"), "cdx-label-optional-flag", "(optional)");
    return {
      rootClasses,
      rootStyle,
      otherAttrs,
      translatedOptionalFlag
    };
  }
});
var _hoisted_1$u = ["for"];
var _hoisted_2$j = {
  class: "cdx-label__label__text"
};
var _hoisted_3$c = {
  key: 1,
  class: "cdx-label__label__optional-flag"
};
var _hoisted_4$a = ["id"];
var _hoisted_5$9 = {
  class: "cdx-label__label"
};
var _hoisted_6$8 = {
  class: "cdx-label__label__text"
};
var _hoisted_7$3 = {
  key: 1,
  class: "cdx-label__label__optional-flag"
};
var _hoisted_8$3 = {
  key: 0,
  class: "cdx-label__description"
};
function _sfc_render$y(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_cdx_icon = resolveComponent("cdx-icon");
  return !_ctx.isLegend ? (openBlock(), createElementBlock(
    "div",
    {
      key: 0,
      class: normalizeClass(["cdx-label", _ctx.rootClasses]),
      style: normalizeStyle(_ctx.rootStyle)
    },
    [createBaseVNode("label", mergeProps({
      class: "cdx-label__label",
      for: _ctx.inputId ? _ctx.inputId : void 0
    }, _ctx.otherAttrs), [_ctx.icon ? (openBlock(), createBlock(_component_cdx_icon, {
      key: 0,
      icon: _ctx.icon,
      class: "cdx-label__label__icon"
    }, null, 8, ["icon"])) : createCommentVNode("v-if", true), createBaseVNode("span", _hoisted_2$j, [renderSlot(_ctx.$slots, "default")]), _ctx.optionalFlag || _ctx.optional ? (openBlock(), createElementBlock(
      "span",
      _hoisted_3$c,
      toDisplayString(" ") + " " + toDisplayString(_ctx.translatedOptionalFlag),
      1
      /* TEXT */
    )) : createCommentVNode("v-if", true)], 16, _hoisted_1$u), _ctx.$slots.description && _ctx.$slots.description().length > 0 ? (openBlock(), createElementBlock("span", {
      key: 0,
      id: _ctx.descriptionId || void 0,
      class: "cdx-label__description"
    }, [renderSlot(_ctx.$slots, "description")], 8, _hoisted_4$a)) : createCommentVNode("v-if", true)],
    6
    /* CLASS, STYLE */
  )) : (openBlock(), createElementBlock(
    "legend",
    mergeProps({
      key: 1,
      class: ["cdx-label", _ctx.rootClasses],
      style: _ctx.rootStyle
    }, _ctx.otherAttrs),
    [createBaseVNode("span", _hoisted_5$9, [_ctx.icon ? (openBlock(), createBlock(_component_cdx_icon, {
      key: 0,
      icon: _ctx.icon,
      class: "cdx-label__label__icon"
    }, null, 8, ["icon"])) : createCommentVNode("v-if", true), createBaseVNode("span", _hoisted_6$8, [renderSlot(_ctx.$slots, "default")]), _ctx.optionalFlag || _ctx.optional ? (openBlock(), createElementBlock(
      "span",
      _hoisted_7$3,
      toDisplayString(" ") + " " + toDisplayString(_ctx.translatedOptionalFlag),
      1
      /* TEXT */
    )) : createCommentVNode("v-if", true)]), _ctx.$slots.description && _ctx.$slots.description().length > 0 ? (openBlock(), createElementBlock("span", _hoisted_8$3, [renderSlot(_ctx.$slots, "description")])) : createCommentVNode("v-if", true)],
    16
    /* FULL_PROPS */
  ));
}
var CdxLabel = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["render", _sfc_render$y]]);
function useModelWrapper(modelValueRef, emit2, eventName) {
  return computed2({
    get: () => modelValueRef.value,
    // If eventName is undefined, then 'update:modelValue' must be a valid EventName,
    // but TypeScript's type analysis isn't clever enough to realize that
    set: (value) => emit2(eventName || "update:modelValue", value)
  });
}
var statusValidator$a = makeStringTypeValidator(ValidationStatusTypes);
var sides = ["top", "right", "bottom", "left"];
var min = Math.min;
var max = Math.max;
var round = Math.round;
var floor = Math.floor;
var createCoords = (v) => ({
  x: v,
  y: v
});
var oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
var oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
function getSideList(side, isStart, rtl) {
  const lr = ["left", "right"];
  const rl = ["right", "left"];
  const tb = ["top", "bottom"];
  const bt = ["bottom", "top"];
  switch (side) {
    case "top":
    case "bottom":
      if (rtl) return isStart ? rl : lr;
      return isStart ? lr : rl;
    case "left":
    case "right":
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return __spreadValues({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }, padding);
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x,
    y,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y,
    left: x,
    right: x + width,
    bottom: y + height,
    x,
    y
  };
}
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
var computePosition$1 = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = __spreadProps(__spreadValues({}, middlewareData), {
      [name]: __spreadValues(__spreadValues({}, middlewareData[name]), data)
    });
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    x,
    y,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
var flip$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = state;
      const _a = evaluate(options, state), {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true
      } = _a, detectOverflowOptions = __objRest(_a, ["mainAxis", "crossAxis", "fallbackPlacements", "fallbackStrategy", "fallbackAxisSideDirection", "flipAlignment"]);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const initialSideAxis = getSideAxis(initialPlacement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
      if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides2 = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements[nextIndex];
        if (nextPlacement) {
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$filter2;
              const placement2 = (_overflowsData$filter2 = overflowsData.filter((d) => {
                if (hasFallbackAxisSideDirection) {
                  const currentSideAxis = getSideAxis(d.placement);
                  return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  currentSideAxis === "y";
                }
                return true;
              }).map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}
function isAnySideFullyClipped(overflow) {
  return sides.some((side) => overflow[side] >= 0);
}
var hide$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "hide",
    options,
    async fn(state) {
      const {
        rects
      } = state;
      const _a = evaluate(options, state), {
        strategy = "referenceHidden"
      } = _a, detectOverflowOptions = __objRest(_a, ["strategy"]);
      switch (strategy) {
        case "referenceHidden": {
          const overflow = await detectOverflow(state, __spreadProps(__spreadValues({}, detectOverflowOptions), {
            elementContext: "reference"
          }));
          const offsets = getSideOffsets(overflow, rects.reference);
          return {
            data: {
              referenceHiddenOffsets: offsets,
              referenceHidden: isAnySideFullyClipped(offsets)
            }
          };
        }
        case "escaped": {
          const overflow = await detectOverflow(state, __spreadProps(__spreadValues({}, detectOverflowOptions), {
            altBoundary: true
          }));
          const offsets = getSideOffsets(overflow, rects.floating);
          return {
            data: {
              escapedOffsets: offsets,
              escaped: isAnySideFullyClipped(offsets)
            }
          };
        }
        default: {
          return {};
        }
      }
    }
  };
};
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform: platform2,
    elements
  } = state;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: rawValue.mainAxis || 0,
    crossAxis: rawValue.crossAxis || 0,
    alignmentAxis: rawValue.alignmentAxis
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
var offset$1 = function(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x,
        y,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: __spreadProps(__spreadValues({}, diffCoords), {
          placement
        })
      };
    }
  };
};
var size$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "size",
    options,
    async fn(state) {
      var _state$middlewareData, _state$middlewareData2;
      const {
        placement,
        rects,
        platform: platform2,
        elements
      } = state;
      const _a = evaluate(options, state), {
        apply: apply2 = () => {
        }
      } = _a, detectOverflowOptions = __objRest(_a, ["apply"]);
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const isYAxis = getSideAxis(placement) === "y";
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === "top" || side === "bottom") {
        heightSide = side;
        widthSide = alignment === (await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
      } else {
        widthSide = side;
        heightSide = alignment === "end" ? "top" : "bottom";
      }
      const maximumClippingHeight = height - overflow.top - overflow.bottom;
      const maximumClippingWidth = width - overflow.left - overflow.right;
      const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
      const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
      const noShift = !state.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if ((_state$middlewareData = state.middlewareData.shift) != null && _state$middlewareData.enabled.x) {
        availableWidth = maximumClippingWidth;
      }
      if ((_state$middlewareData2 = state.middlewareData.shift) != null && _state$middlewareData2.enabled.y) {
        availableHeight = maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = max(overflow.left, 0);
        const xMax = max(overflow.right, 0);
        const yMin = max(overflow.top, 0);
        const yMax = max(overflow.bottom, 0);
        if (isYAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
        }
      }
      await apply2(__spreadProps(__spreadValues({}, state), {
        availableWidth,
        availableHeight
      }));
      const nextDimensions = await platform2.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};
function hasWindow() {
  return typeof window !== "undefined";
}
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (!hasWindow() || typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle2(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
function isTableElement(element) {
  return ["table", "td", "th"].includes(getNodeName(element));
}
function isTopLayer(element) {
  return [":popover-open", ":modal"].some((selector) => {
    try {
      return element.matches(selector);
    } catch (e) {
      return false;
    }
  });
}
function isContainingBlock(elementOrCss) {
  const webkit = isWebKit();
  const css = isElement(elementOrCss) ? getComputedStyle2(elementOrCss) : elementOrCss;
  return css.transform !== "none" || css.perspective !== "none" || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || ["transform", "perspective", "filter"].some((value) => (css.willChange || "").includes(value)) || ["paint", "layout", "strict", "content"].some((value) => (css.contain || "").includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports) return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
function isLastTraversableNode(node) {
  return ["html", "body", "#document"].includes(getNodeName(node));
}
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    const frameElement = getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}
function getCssDimensions(element) {
  const css = getComputedStyle2(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement$2(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement$2(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $: $2
  } = getCssDimensions(domElement);
  let x = ($2 ? round(rect.width) : rect.width) / width;
  let y = ($2 ? round(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}
var noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement$2(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = getFrameElement(currentWin);
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle2(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = getFrameElement(currentWin);
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}
function getWindowScrollBarX(element, rect) {
  const leftScroll = getNodeScroll(element).scrollLeft;
  if (!rect) {
    return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
  }
  return rect.left + leftScroll;
}
function getHTMLOffset(documentElement, scroll, ignoreScrollbarX) {
  if (ignoreScrollbarX === void 0) {
    ignoreScrollbarX = false;
  }
  const htmlRect = documentElement.getBoundingClientRect();
  const x = htmlRect.left + scroll.scrollLeft - (ignoreScrollbarX ? 0 : (
    // RTL <body> scrollbar.
    getWindowScrollBarX(documentElement, htmlRect)
  ));
  const y = htmlRect.top + scroll.scrollTop;
  return {
    x,
    y
  };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === "fixed";
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll, true) : createCoords(0);
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle2(body).direction === "rtl") {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y,
      width: clippingAncestor.width,
      height: clippingAncestor.height
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle2(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle2(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle2(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  const x = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
  const y = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
  return {
    x,
    y,
    width: rect.width,
    height: rect.height
  };
}
function isStaticPositioned(element) {
  return getComputedStyle2(element).position === "static";
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle2(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  let rawOffsetParent = element.offsetParent;
  if (getDocumentElement(element) === rawOffsetParent) {
    rawOffsetParent = rawOffsetParent.ownerDocument.body;
  }
  return rawOffsetParent;
}
function getOffsetParent(element, polyfill) {
  const win = getWindow(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!isHTMLElement(element)) {
    let svgOffsetParent = getParentNode(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element) || win;
}
var getElementRects = async function(data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};
function isRTL(element) {
  return getComputedStyle2(element).direction === "rtl";
}
var platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const {
      left,
      top,
      width,
      height
    } = element.getBoundingClientRect();
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1e3);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, __spreadProps(__spreadValues({}, options), {
        // Handle <iframe>s
        root: root.ownerDocument
      }));
    } catch (e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement$2(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
var offset = offset$1;
var flip = flip$1;
var size = size$1;
var hide = hide$1;
var computePosition = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = __spreadValues({
    platform
  }, options);
  const platformWithCache = __spreadProps(__spreadValues({}, mergedOptions.platform), {
    _c: cache
  });
  return computePosition$1(reference, floating, __spreadProps(__spreadValues({}, mergedOptions), {
    platform: platformWithCache
  }));
};
function isComponentPublicInstance(target) {
  return target != null && typeof target === "object" && "$el" in target;
}
function unwrapElement$1(target) {
  if (isComponentPublicInstance(target)) {
    const element = target.$el;
    return isNode(element) && getNodeName(element) === "#comment" ? null : element;
  }
  return target;
}
function getDPR(element) {
  if (typeof window === "undefined") {
    return 1;
  }
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}
function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}
function useFloating(reference, floating, options) {
  if (options === void 0) {
    options = {};
  }
  const whileElementsMountedOption = options.whileElementsMounted;
  const openOption = computed2(() => {
    var _unref;
    return (_unref = unref(options.open)) != null ? _unref : true;
  });
  const middlewareOption = computed2(() => unref(options.middleware));
  const placementOption = computed2(() => {
    var _unref2;
    return (_unref2 = unref(options.placement)) != null ? _unref2 : "bottom";
  });
  const strategyOption = computed2(() => {
    var _unref3;
    return (_unref3 = unref(options.strategy)) != null ? _unref3 : "absolute";
  });
  const transformOption = computed2(() => {
    var _unref4;
    return (_unref4 = unref(options.transform)) != null ? _unref4 : true;
  });
  const referenceElement = computed2(() => unwrapElement$1(reference.value));
  const floatingElement = computed2(() => unwrapElement$1(floating.value));
  const x = /* @__PURE__ */ ref(0);
  const y = /* @__PURE__ */ ref(0);
  const strategy = /* @__PURE__ */ ref(strategyOption.value);
  const placement = /* @__PURE__ */ ref(placementOption.value);
  const middlewareData = /* @__PURE__ */ shallowRef({});
  const isPositioned = /* @__PURE__ */ ref(false);
  const floatingStyles = computed2(() => {
    const initialStyles = {
      position: strategy.value,
      left: "0",
      top: "0"
    };
    if (!floatingElement.value) {
      return initialStyles;
    }
    const xVal = roundByDPR(floatingElement.value, x.value);
    const yVal = roundByDPR(floatingElement.value, y.value);
    if (transformOption.value) {
      return __spreadValues(__spreadProps(__spreadValues({}, initialStyles), {
        transform: "translate(" + xVal + "px, " + yVal + "px)"
      }), getDPR(floatingElement.value) >= 1.5 && {
        willChange: "transform"
      });
    }
    return {
      position: strategy.value,
      left: xVal + "px",
      top: yVal + "px"
    };
  });
  let whileElementsMountedCleanup;
  function update() {
    if (referenceElement.value == null || floatingElement.value == null) {
      return;
    }
    computePosition(referenceElement.value, floatingElement.value, {
      middleware: middlewareOption.value,
      placement: placementOption.value,
      strategy: strategyOption.value
    }).then((position) => {
      x.value = position.x;
      y.value = position.y;
      strategy.value = position.strategy;
      placement.value = position.placement;
      middlewareData.value = position.middlewareData;
      isPositioned.value = true;
    });
  }
  function cleanup() {
    if (typeof whileElementsMountedCleanup === "function") {
      whileElementsMountedCleanup();
      whileElementsMountedCleanup = void 0;
    }
  }
  function attach() {
    cleanup();
    if (whileElementsMountedOption === void 0) {
      update();
      return;
    }
    if (referenceElement.value != null && floatingElement.value != null) {
      whileElementsMountedCleanup = whileElementsMountedOption(referenceElement.value, floatingElement.value, update);
      return;
    }
  }
  function reset() {
    if (!openOption.value) {
      isPositioned.value = false;
    }
  }
  watch2([middlewareOption, placementOption, strategyOption], update, {
    flush: "sync"
  });
  watch2([referenceElement, floatingElement], attach, {
    flush: "sync"
  });
  watch2(openOption, reset, {
    flush: "sync"
  });
  if (getCurrentScope()) {
    onScopeDispose(cleanup);
  }
  return {
    x: /* @__PURE__ */ shallowReadonly(x),
    y: /* @__PURE__ */ shallowReadonly(y),
    strategy: /* @__PURE__ */ shallowReadonly(strategy),
    placement: /* @__PURE__ */ shallowReadonly(placement),
    middlewareData: /* @__PURE__ */ shallowReadonly(middlewareData),
    isPositioned: /* @__PURE__ */ shallowReadonly(isPositioned),
    floatingStyles,
    update
  };
}
var statusValidator$9 = makeStringTypeValidator(ValidationStatusTypes);
var _sfc_main$t = /* @__PURE__ */ defineComponent({
  name: "CdxSearchResultTitle",
  props: {
    /**
     * Title text.
     */
    title: {
      type: String,
      required: true
    },
    /**
     * The current search query.
     */
    searchQuery: {
      type: String,
      default: ""
    }
  },
  setup: (props) => {
    const titleChunks = computed2(() => splitStringAtMatch(props.searchQuery, String(props.title)));
    return {
      titleChunks
    };
  }
});
var _hoisted_1$q = {
  class: "cdx-search-result-title"
};
var _hoisted_2$f = {
  class: "cdx-search-result-title__match"
};
function _sfc_render$u(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", _hoisted_1$q, [createBaseVNode("bdi", null, [createTextVNode(
    toDisplayString(_ctx.titleChunks[0]),
    1
    /* TEXT */
  ), createBaseVNode(
    "span",
    _hoisted_2$f,
    toDisplayString(_ctx.titleChunks[1]),
    1
    /* TEXT */
  ), createTextVNode(
    toDisplayString(_ctx.titleChunks[2]),
    1
    /* TEXT */
  )])]);
}
var CdxSearchResultTitle = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["render", _sfc_render$u]]);
var _sfc_main$s = /* @__PURE__ */ defineComponent({
  name: "CdxMenuItem",
  components: {
    CdxIcon,
    CdxThumbnail,
    CdxSearchResultTitle
  },
  props: {
    /**
     * ID for HTML `id` attribute.
     */
    id: {
      type: String,
      required: true
    },
    /**
     * The value provided to the parent menu component when this menu item is selected.
     */
    value: {
      type: [String, Number],
      required: true
    },
    /**
     * Whether the menu item is disabled.
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * Whether this menu item is selected.
     */
    selected: {
      type: Boolean,
      default: false
    },
    /**
     * Whether this menu item is being pressed.
     */
    active: {
      type: Boolean,
      default: false
    },
    /**
     * Whether this menu item is visually highlighted due to hover or keyboard navigation.
     */
    highlighted: {
      type: Boolean,
      default: false
    },
    /**
     * Label for the menu item. If this isn't provided, the value will be displayed instead.
     */
    label: {
      type: String,
      default: ""
    },
    /**
     * Text that matches current search query. Only used for search results and will be
     * displayed after the label.
     */
    match: {
      type: String,
      default: ""
    },
    /**
     * Text that supports the label. Supporting text will appear next to the label in a more
     * subtle color.
     */
    supportingText: {
      type: String,
      default: ""
    },
    /**
     * URL for the menu item. If provided, the content of the menu item will be wrapped in an
     * anchor `<a>` element.
     */
    url: {
      type: String,
      default: ""
    },
    /**
     * Whether to open the URL in a new tab when url is provided.
     */
    urlNewTab: {
      type: Boolean,
      default: false
    },
    /**
     * Icon for the menu item.
     */
    icon: {
      type: [String, Object],
      default: ""
    },
    /**
     * Whether a thumbnail (or a placeholder icon) should be displayed.
     */
    showThumbnail: {
      type: Boolean,
      default: false
    },
    /**
     * Thumbnail for the menu item.
     */
    thumbnail: {
      type: [Object, null],
      default: null
    },
    /**
     * Description of the menu item.
     */
    description: {
      type: [String, null],
      default: ""
    },
    /**
     * The search query to be highlighted within the menu item's title.
     */
    searchQuery: {
      type: String,
      default: ""
    },
    /**
     * Whether to bold menu item labels.
     */
    boldLabel: {
      type: Boolean,
      default: false
    },
    /**
     * Whether to hide description text overflow via an ellipsis.
     */
    hideDescriptionOverflow: {
      type: Boolean,
      default: false
    },
    /**
     * Optional language codes for label, match, supporting text, and description.
     *
     * If included, that language code will be added as a `lang` attribute to the element
     * wrapping that text node.
     *
     * @default {}
     */
    language: {
      type: Object,
      default: () => ({})
    },
    /**
     * MenuItems inside a MenuButton can also support an "action" prop
     */
    action: {
      type: String,
      default: "default"
    },
    /**
     * Whether this menu is in multiselect mode.
     */
    multiselect: {
      type: Boolean,
      default: false
    }
  },
  emits: [
    /**
     * Emitted when the menu item becomes selected, active or highlighted in response to
     * user interaction. Handled in the Menu component.
     *
     * @property {MenuState} menuState State to change
     * @property {boolean} setState Whether to set that state to this menu item
     */
    "change"
  ],
  setup: (props, {
    emit: emit2
  }) => {
    const onMouseMove = () => {
      if (!props.highlighted) {
        emit2("change", "highlighted", true);
      }
    };
    const onMouseLeave = () => {
      emit2("change", "highlighted", false);
    };
    const onMouseDown = (e) => {
      if (e.button === 0) {
        emit2("change", "active", true);
      }
    };
    const onClick = () => {
      emit2("change", "selected", true);
    };
    const highlightQuery = computed2(() => props.searchQuery.length > 0);
    const rootClasses = computed2(() => ({
      "cdx-menu-item--selected": props.selected,
      // Only show the active visual state when the menu item is both active and
      // highlighted. This means, on mousedown -> mouseleave, the menu item is still
      // technically tracked by the menu as active, but will not appear active to the
      // user. This also means in the case of mousedown -> mouseleave -> mouseenter, the
      // menu item will appear active again, and on click (releasing the mouse button),
      // the item will be selected.
      "cdx-menu-item--active": props.active && props.highlighted,
      "cdx-menu-item--highlighted": props.highlighted,
      "cdx-menu-item--destructive": props.action && props.action === "destructive",
      "cdx-menu-item--progressive": props.action && props.action === "progressive",
      "cdx-menu-item--enabled": !props.disabled,
      "cdx-menu-item--disabled": props.disabled,
      "cdx-menu-item--highlight-query": highlightQuery.value,
      "cdx-menu-item--bold-label": props.boldLabel,
      "cdx-menu-item--has-description": !!props.description,
      "cdx-menu-item--hide-description-overflow": props.hideDescriptionOverflow
    }));
    const contentTag = computed2(() => props.url ? "a" : "span");
    const linkAttrs = computed2(() => props.url && props.urlNewTab ? {
      target: "_blank"
    } : {});
    const title = computed2(() => props.label || String(props.value));
    return {
      onMouseMove,
      onMouseLeave,
      onMouseDown,
      onClick,
      highlightQuery,
      rootClasses,
      contentTag,
      linkAttrs,
      title,
      cdxIconCheck: c6
    };
  }
});
var _hoisted_1$p = ["id", "aria-disabled", "aria-selected", "aria-checked"];
var _hoisted_2$e = {
  class: "cdx-menu-item__text"
};
var _hoisted_3$a = ["lang"];
var _hoisted_4$8 = ["lang"];
var _hoisted_5$7 = ["lang"];
var _hoisted_6$7 = ["lang"];
function _sfc_render$t(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_cdx_thumbnail = resolveComponent("cdx-thumbnail");
  const _component_cdx_icon = resolveComponent("cdx-icon");
  const _component_cdx_search_result_title = resolveComponent("cdx-search-result-title");
  return openBlock(), createElementBlock("li", {
    id: _ctx.id,
    role: "option",
    class: normalizeClass(["cdx-menu-item", _ctx.rootClasses]),
    "aria-disabled": _ctx.disabled,
    "aria-selected": _ctx.selected && !_ctx.multiselect ? true : void 0,
    "aria-checked": _ctx.selected && _ctx.multiselect ? true : void 0,
    onMousemove: _cache[0] || (_cache[0] = (...args) => _ctx.onMouseMove && _ctx.onMouseMove(...args)),
    onMouseleave: _cache[1] || (_cache[1] = (...args) => _ctx.onMouseLeave && _ctx.onMouseLeave(...args)),
    onMousedown: _cache[2] || (_cache[2] = withModifiers((...args) => _ctx.onMouseDown && _ctx.onMouseDown(...args), ["prevent"])),
    onClick: _cache[3] || (_cache[3] = (...args) => _ctx.onClick && _ctx.onClick(...args))
  }, [renderSlot(_ctx.$slots, "default", {}, () => [(openBlock(), createBlock(resolveDynamicComponent(_ctx.contentTag), mergeProps({
    href: _ctx.url ? _ctx.url : void 0
  }, _ctx.url ? _ctx.linkAttrs : {}, {
    class: "cdx-menu-item__content"
  }), {
    default: withCtx(() => {
      var _a, _b, _c, _d, _e, _f;
      return [_ctx.showThumbnail ? (openBlock(), createBlock(_component_cdx_thumbnail, {
        key: 0,
        thumbnail: _ctx.thumbnail,
        class: "cdx-menu-item__thumbnail"
      }, null, 8, ["thumbnail"])) : _ctx.icon ? (openBlock(), createBlock(_component_cdx_icon, {
        key: 1,
        icon: _ctx.icon,
        class: "cdx-menu-item__icon"
      }, null, 8, ["icon"])) : createCommentVNode("v-if", true), createBaseVNode("span", _hoisted_2$e, [_ctx.highlightQuery ? (openBlock(), createBlock(_component_cdx_search_result_title, {
        key: 0,
        title: _ctx.title,
        "search-query": _ctx.searchQuery,
        lang: (_a = _ctx.language) == null ? void 0 : _a.label
      }, null, 8, ["title", "search-query", "lang"])) : (openBlock(), createElementBlock("span", {
        key: 1,
        class: "cdx-menu-item__text__label",
        lang: (_b = _ctx.language) == null ? void 0 : _b.label
      }, [createBaseVNode(
        "bdi",
        null,
        toDisplayString(_ctx.title),
        1
        /* TEXT */
      )], 8, _hoisted_3$a)), _ctx.match ? (openBlock(), createElementBlock(
        Fragment,
        {
          key: 2
        },
        [_cache[4] || (_cache[4] = createTextVNode(toDisplayString(" ") + " ")), _ctx.highlightQuery ? (openBlock(), createBlock(_component_cdx_search_result_title, {
          key: 0,
          title: _ctx.match,
          "search-query": _ctx.searchQuery,
          lang: (_c = _ctx.language) == null ? void 0 : _c.match
        }, null, 8, ["title", "search-query", "lang"])) : (openBlock(), createElementBlock("span", {
          key: 1,
          class: "cdx-menu-item__text__match",
          lang: (_d = _ctx.language) == null ? void 0 : _d.match
        }, [createBaseVNode(
          "bdi",
          null,
          toDisplayString(_ctx.match),
          1
          /* TEXT */
        )], 8, _hoisted_4$8))],
        64
        /* STABLE_FRAGMENT */
      )) : createCommentVNode("v-if", true), _ctx.supportingText ? (openBlock(), createElementBlock(
        Fragment,
        {
          key: 3
        },
        [_cache[5] || (_cache[5] = createTextVNode(toDisplayString(" ") + " ")), createBaseVNode("span", {
          class: "cdx-menu-item__text__supporting-text",
          lang: (_e = _ctx.language) == null ? void 0 : _e.supportingText
        }, [createBaseVNode(
          "bdi",
          null,
          toDisplayString(_ctx.supportingText),
          1
          /* TEXT */
        )], 8, _hoisted_5$7)],
        64
        /* STABLE_FRAGMENT */
      )) : createCommentVNode("v-if", true), _ctx.description ? (openBlock(), createElementBlock("span", {
        key: 4,
        class: "cdx-menu-item__text__description",
        lang: (_f = _ctx.language) == null ? void 0 : _f.description
      }, [createBaseVNode(
        "bdi",
        null,
        toDisplayString(_ctx.description),
        1
        /* TEXT */
      )], 8, _hoisted_6$7)) : createCommentVNode("v-if", true)]), _ctx.multiselect && _ctx.selected ? (openBlock(), createBlock(_component_cdx_icon, {
        key: 2,
        icon: _ctx.cdxIconCheck,
        size: "small",
        class: "cdx-menu-item__selected-icon"
      }, null, 8, ["icon"])) : createCommentVNode("v-if", true)];
    }),
    _: 1
    /* STABLE */
  }, 16, ["href"]))])], 42, _hoisted_1$p);
}
var CdxMenuItem = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["render", _sfc_render$t]]);
var _sfc_main$r = /* @__PURE__ */ defineComponent({
  name: "CdxProgressBar",
  // Disable automatic attribute inheritance so we can control where attrs go
  inheritAttrs: false,
  props: {
    value: {
      type: [Number, null],
      default: null
    },
    max: {
      type: Number,
      default: 100
    },
    /**
     * Whether this is the smaller, inline variant.
     */
    inline: {
      type: Boolean,
      default: false
    },
    /**
     * Whether the progress bar is disabled.
     */
    disabled: {
      type: Boolean,
      default: false
    },
    startLabel: {
      type: String,
      default: ""
    },
    endLabel: {
      type: String,
      default: ""
    }
  },
  setup(props, {
    attrs
  }) {
    useWarnOnce(() => !props.inline && !attrs["aria-label"] && !attrs["aria-hidden"], "CdxProgressBar: Progress bars require one of the following attribute, aria-label or aria-hidden. See documentation on https://doc.wikimedia.org/codex/latest/components/demos/progress-bar.html");
    const hasValue = computed2(() => typeof props.value === "number");
    const rootClasses = computed2(() => ({
      "cdx-progress-bar--block": !props.inline,
      "cdx-progress-bar--inline": props.inline,
      "cdx-progress-bar--enabled": !props.disabled,
      "cdx-progress-bar--disabled": props.disabled
    }));
    const computedAriaHidden = computed2(
      // Set `aria-hidden` to `true` only when `inline` prop is true.
      // Otherwise, don't set the attribute.
      () => props.inline ? "true" : void 0
    );
    const clampedValue = computed2(() => {
      if (typeof props.value !== "number") {
        return 0;
      }
      return Math.min(Math.max(props.value, 0), props.max);
    });
    const progressStyles = computed2(() => ({
      "--cdx-progress-value": clampedValue.value,
      "--cdx-progress-max": props.max
    }));
    const labelsId = useId();
    const hasLabels = computed2(() => Boolean(props.startLabel || props.endLabel));
    const ariaLabelledBy = computed2(() => hasLabels.value ? labelsId : void 0);
    return {
      rootClasses,
      computedAriaHidden,
      hasValue,
      progressStyles,
      clampedValue,
      labelsId,
      ariaLabelledBy
    };
  }
});
var _hoisted_1$o = ["aria-labelledby", "aria-hidden", "aria-disabled", "aria-valuemin", "aria-valuemax", "aria-valuenow"];
var _hoisted_2$d = ["id"];
var _hoisted_3$9 = {
  class: "cdx-progress-bar__label cdx-progress-bar__label--start"
};
var _hoisted_4$7 = {
  class: "cdx-progress-bar__label cdx-progress-bar__label--end"
};
function _sfc_render$s(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    Fragment,
    null,
    [createBaseVNode("div", mergeProps({
      class: ["cdx-progress-bar", _ctx.rootClasses]
    }, _ctx.$attrs, {
      role: "progressbar",
      "aria-labelledby": _ctx.ariaLabelledBy,
      "aria-hidden": _ctx.computedAriaHidden,
      "aria-disabled": _ctx.disabled,
      "aria-valuemin": _ctx.hasValue ? 0 : void 0,
      "aria-valuemax": _ctx.hasValue ? _ctx.max : void 0,
      "aria-valuenow": _ctx.hasValue ? _ctx.clampedValue : void 0,
      style: _ctx.hasValue ? _ctx.progressStyles : void 0
    }), [createBaseVNode(
      "div",
      {
        class: normalizeClass(["cdx-progress-bar__bar", {
          "cdx-progress-bar__bar--determinate": _ctx.hasValue
        }])
      },
      null,
      2
      /* CLASS */
    )], 16, _hoisted_1$o), _ctx.startLabel || _ctx.endLabel ? (openBlock(), createElementBlock("div", {
      key: 0,
      id: _ctx.labelsId,
      class: "cdx-progress-bar__labels"
    }, [createBaseVNode(
      "div",
      _hoisted_3$9,
      toDisplayString(_ctx.startLabel),
      1
      /* TEXT */
    ), createBaseVNode(
      "div",
      _hoisted_4$7,
      toDisplayString(_ctx.endLabel),
      1
      /* TEXT */
    )], 8, _hoisted_2$d)) : createCommentVNode("v-if", true)],
    64
    /* STABLE_FRAGMENT */
  );
}
var CdxProgressBar = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["render", _sfc_render$s]]);
function useIntersectionObserver(templateRef, observerOptions) {
  const intersectionRef = /* @__PURE__ */ ref(false);
  let mounted = false;
  if (typeof window !== "object") {
    return intersectionRef;
  }
  if (!("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype)) {
    return intersectionRef;
  }
  const observer = new window.IntersectionObserver((entries) => {
    const entry = entries[0];
    if (entry) {
      intersectionRef.value = entry.isIntersecting;
    }
  }, observerOptions);
  onMounted(() => {
    mounted = true;
    if (templateRef.value) {
      observer.observe(templateRef.value);
    }
  });
  onUnmounted(() => {
    mounted = false;
    observer.disconnect();
  });
  watch2(templateRef, (newElement) => {
    if (!mounted) {
      return;
    }
    observer.disconnect();
    intersectionRef.value = false;
    if (newElement) {
      observer.observe(newElement);
    }
  });
  return intersectionRef;
}
function selectedIsArray(selected) {
  return selected !== null && Array.isArray(selected);
}
function isMenuGroupData(menuEntry) {
  return "items" in menuEntry;
}
var _sfc_main$q = /* @__PURE__ */ defineComponent({
  name: "CdxMenu",
  components: {
    CdxMenuItem,
    CdxIcon,
    CdxProgressBar
  },
  /**
   * Attributes, besides class and style, will be passed to the `<ul>` element.
   */
  inheritAttrs: false,
  props: {
    /**
     * Menu items and menu group definitions.
     *
     * Menu groups and individual menu items will be output in the order they appear here.
     */
    menuItems: {
      type: Array,
      required: true
    },
    /**
     * Interactive footer item.
     *
     * This is a special menu item which is pinned to the bottom of the menu. When scrolling is
     * enabled within the menu, the footer item will always be visible at the bottom of the
     * menu. When scrolling is not enabled, the footer item will simply appear as the last menu
     * item.
     *
     * The footer item is selectable, like other menu items.
     */
    footer: {
      type: Object,
      default: null
    },
    /**
     * Value(s) of the selected menu item(s). A single value for single-select, or an array of
     * values for multi-select.
     *
     * Must be bound with `v-model:selected`.
     *
     * The property should be initialized to `null` (for single-select) or an empty array (for
     * multi-select) rather than using a falsy value.
     */
    selected: {
      // eslint-disable-next-line vue/max-len
      type: [String, Number, Array, null],
      required: true
    },
    /**
     * Whether the menu is expanded. Must be bound with `v-model:expanded`.
     */
    expanded: {
      type: Boolean,
      required: true
    },
    /**
     * Whether to display pending state indicators. Meant to indicate that new menu items are
     * being fetched or computed.
     *
     * When true, the menu will expand if not already expanded, and an inline progress bar will
     * display. If there are no menu items yet, a message can be displayed in the `pending`
     * slot, e.g. "Loading results".
     */
    showPending: {
      type: Boolean,
      default: false
    },
    /**
     * Limit the number of menu items to display before scrolling.
     *
     * Setting this prop to anything falsy will show all menu items.
     *
     * By default, all menu items are shown.
     */
    visibleItemLimit: {
      type: Number,
      default: null
    },
    /**
     * Whether menu item thumbnails (or a placeholder icon) should be displayed.
     */
    showThumbnail: {
      type: Boolean,
      default: false
    },
    /**
     * Whether to bold menu item labels.
     */
    boldLabel: {
      type: Boolean,
      default: false
    },
    /**
     * Whether to hide description text overflow via an ellipsis.
     */
    hideDescriptionOverflow: {
      type: Boolean,
      default: false
    },
    /**
     * The search query to be highlighted within the menu items' titles.
     */
    searchQuery: {
      type: String,
      default: ""
    },
    /**
     * Whether to show the `no-results` slot content.
     *
     * The Menu component automatically shows this slot when there is content in the
     * `no-results` slot and there are zero menu items. However, some components may need to
     * customize this behavior, e.g. to show the slot even when there is at least one menu item.
     * This prop can be used to override the default Menu behavior.
     *
     * Possible values:
     * `null` (default): the `no-results` slot will display only if there are zero menu items.
     * `true`: the `no-results` slot will display, regardless of number of menu items.
     * `false`: the `no-results` slot will not display, regardless of number of menu items.
     */
    showNoResultsSlot: {
      type: Boolean,
      default: null
    },
    /**
     * Whether to disable the use of teleport and render the Menu in its
     * original location in the document.
     *
     * Teleport is disabled by default for Menus, but it will be enabled if `'CdxTeleportMenus'`
     * is provided and set to true. Setting this prop prevents the Menu from being teleported
     * regardless of the value of `'CdxTeleportMenus'`.
     */
    renderInPlace: {
      type: Boolean,
      default: false
    }
  },
  emits: [
    // Don't remove the spaces in the "string | number | null" type below; removing these
    // spaces causes the documentation to render the type as "union" instead.
    // Keep property descriptions on a single line or they will get cut off.
    /**
     * When the selected menu item changes.
     *
     * Property will be a single value or `null` in single-select mode, or an array of values or
     * an empty array in multiselect mode.
     *
     * @property {MenuItemValue | MenuItemValue[] | null} selectedValue selected value or values
     */
    "update:selected",
    /**
     * When the menu opens or closes.
     *
     * @property {boolean} newValue The new expanded state (true for open, false for closed)
     */
    "update:expanded",
    /**
     * When a menu item is clicked.
     *
     * Typically, components with menus will respond to the selected value change, but
     * occasionally, a component might want to react specifically when a menu item is clicked.
     *
     * @property {MenuItemDataWithId} menuItem The menu item that was clicked
     */
    "menu-item-click",
    /**
     * When a menu item is highlighted via keyboard navigation.
     *
     * @property {MenuItemDataWithId} highlightedMenuItem The menu item
     * was highlighted
     */
    "menu-item-keyboard-navigation",
    /**
     * When the user scrolls towards the bottom of the menu.
     *
     * If it is possible to add or load more menu items, then now would be a good moment
     * so that the user can experience infinite scrolling.
     */
    "load-more"
  ],
  // expose is temporarily disabled to work around a Vue / vue-tsc bug, see
  // https://github.com/vuejs/language-tools/issues/5069
  /*
  expose: [
  	'isExpanded',
  	'getRootElement',
  	'clearActive',
  	'getHighlightedMenuItem',
  	'getHighlightedViaKeyboard',
  	'getComputedMenuItems',
  	'delegateKeyNavigation'
  ],
  */
  setup(props, {
    emit: emit2,
    slots,
    attrs
  }) {
    const menuInstanceId = useId();
    let idCounter = 0;
    const menuItemIds = /* @__PURE__ */ new Map();
    function generateId() {
      idCounter += 1;
      return "".concat(menuInstanceId, "-").concat(idCounter);
    }
    function assignIds(items) {
      items.forEach((item) => {
        if (isMenuGroupData(item)) {
          const groupKey = "group-".concat(item.label);
          if (!menuItemIds.has(groupKey)) {
            menuItemIds.set(groupKey, generateId());
          }
          item.items.forEach((subItem) => {
            if (!menuItemIds.has(subItem.value)) {
              menuItemIds.set(subItem.value, generateId());
            }
          });
        } else if (!menuItemIds.has(item.value)) {
          menuItemIds.set(item.value, generateId());
        }
      });
    }
    watch2(/* @__PURE__ */ toRef(props, "menuItems"), (newItems) => {
      function getAllItemValues(items) {
        const values = /* @__PURE__ */ new Set();
        items.forEach((item) => {
          if (isMenuGroupData(item)) {
            values.add("group-".concat(item.label));
            item.items.forEach((subItem) => values.add(subItem.value));
          } else {
            values.add(item.value);
          }
        });
        return values;
      }
      const newItemSet = getAllItemValues(newItems);
      menuItemIds.forEach((_, key) => {
        if (!newItemSet.has(key)) {
          menuItemIds.delete(key);
        }
      });
    }, {
      deep: true
    });
    const computedMenuEntries = computed2(() => {
      assignIds(props.menuItems);
      if (props.footer) {
        assignIds([props.footer]);
      }
      const menuItemsWithFooter = props.footer && props.menuItems ? [...props.menuItems, props.footer] : props.menuItems;
      function getMenuItemWithId(menuItem) {
        const id = menuItemIds.get(menuItem.value);
        if (!id) {
          throw new Error("No ID found for menu item with value ".concat(menuItem.value));
        }
        return __spreadProps(__spreadValues({}, menuItem), {
          id
        });
      }
      return menuItemsWithFooter.map((menuEntry) => {
        if (isMenuGroupData(menuEntry)) {
          const groupId = menuItemIds.get("group-".concat(menuEntry.label));
          if (!groupId) {
            throw new Error("No ID found for menu item with value group-".concat(menuEntry.label));
          }
          return __spreadProps(__spreadValues({}, menuEntry), {
            id: groupId,
            items: menuEntry.items.map((subItem) => getMenuItemWithId(subItem))
          });
        } else {
          return getMenuItemWithId(menuEntry);
        }
      });
    });
    const computedMenuItems = computed2(() => {
      const items = [];
      computedMenuEntries.value.forEach((menuEntry) => {
        if (isMenuGroupData(menuEntry)) {
          items.push(...menuEntry.items);
        } else {
          items.push(menuEntry);
        }
      });
      return items;
    });
    const computedShowNoResultsSlot = computed2(() => {
      if (!slots["no-results"]) {
        return false;
      }
      if (props.showNoResultsSlot !== null) {
        return props.showNoResultsSlot;
      }
      return computedMenuItems.value.length === 0;
    });
    const highlightedMenuItem = /* @__PURE__ */ ref(null);
    const highlightedViaKeyboard = /* @__PURE__ */ ref(false);
    const activeMenuItem = /* @__PURE__ */ ref(null);
    const providedTeleport = inject("CdxTeleportMenus", false);
    const teleportDisabled = computed2(() => !unref(providedTeleport) || props.renderInPlace);
    const providedTarget = inject("CdxTeleportTarget", void 0);
    const computedTarget = computed2(() => {
      var _a;
      return (_a = unref(providedTarget)) != null ? _a : "body";
    });
    const ariaRelevant = "additions removals";
    let keyBuffer = "";
    let keyBufferTimeout = null;
    function clearKeyBuffer() {
      keyBuffer = "";
      if (keyBufferTimeout !== null) {
        clearTimeout(keyBufferTimeout);
        keyBufferTimeout = null;
      }
    }
    function resetKeyBufferTimeout() {
      if (keyBufferTimeout !== null) {
        clearTimeout(keyBufferTimeout);
      }
      keyBufferTimeout = setTimeout(clearKeyBuffer, 1500);
    }
    function findFirstSelectedMenuItem() {
      var _a;
      return (_a = computedMenuItems.value.find((menuItem) => selectedIsArray(props.selected) ? props.selected.includes(menuItem.value) : menuItem.value === props.selected)) != null ? _a : null;
    }
    const isMultiselect = computed2(() => selectedIsArray(props.selected));
    function isItemSelected(value) {
      return selectedIsArray(props.selected) ? props.selected.includes(value) : value === props.selected;
    }
    function updateSelected(value) {
      if (selectedIsArray(props.selected)) {
        const newSelected = !props.selected.includes(value) ? props.selected.concat(value) : props.selected.filter((item) => item !== value);
        emit2("update:selected", newSelected);
      } else {
        emit2("update:selected", value);
      }
    }
    function handleMenuItemChange(menuState, menuItem) {
      if (menuItem == null ? void 0 : menuItem.disabled) {
        return;
      }
      switch (menuState) {
        case "selected":
          if (menuItem) {
            updateSelected(menuItem.value);
          }
          if (!isMultiselect.value) {
            emit2("update:expanded", false);
          }
          activeMenuItem.value = null;
          break;
        case "highlighted":
          highlightedMenuItem.value = menuItem != null ? menuItem : null;
          highlightedViaKeyboard.value = false;
          break;
        case "highlightedViaKeyboard":
          highlightedMenuItem.value = menuItem != null ? menuItem : null;
          highlightedViaKeyboard.value = true;
          break;
        case "active":
          activeMenuItem.value = menuItem != null ? menuItem : null;
          break;
      }
    }
    const highlightedMenuItemIndex = computed2(() => {
      if (highlightedMenuItem.value === null) {
        return;
      }
      return computedMenuItems.value.findIndex(
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        (menuItem) => menuItem.value === highlightedMenuItem.value.value
      );
    });
    function handleHighlightViaKeyboard(newHighlightedMenuItem) {
      if (!newHighlightedMenuItem) {
        return;
      }
      handleMenuItemChange("highlightedViaKeyboard", newHighlightedMenuItem);
      emit2("menu-item-keyboard-navigation", newHighlightedMenuItem);
    }
    function highlightPrev(highlightedIndex) {
      var _a;
      const findPrevEnabled = (startIndex) => {
        for (let index = startIndex - 1; index >= 0; index--) {
          if (!computedMenuItems.value[index].disabled) {
            return computedMenuItems.value[index];
          }
        }
      };
      highlightedIndex = highlightedIndex != null ? highlightedIndex : computedMenuItems.value.length;
      const prev = (_a = findPrevEnabled(highlightedIndex)) != null ? _a : findPrevEnabled(computedMenuItems.value.length);
      handleHighlightViaKeyboard(prev);
    }
    function highlightNext(highlightedIndex) {
      var _a;
      const findNextEnabled = (startIndex) => computedMenuItems.value.find((item, index) => !item.disabled && index > startIndex);
      highlightedIndex = highlightedIndex != null ? highlightedIndex : -1;
      const next = (_a = findNextEnabled(highlightedIndex)) != null ? _a : findNextEnabled(-1);
      handleHighlightViaKeyboard(next);
    }
    function handleCharacterNavigation(e) {
      if (e.key === "Clear") {
        clearKeyBuffer();
        return true;
      }
      if (e.key === "Backspace") {
        keyBuffer = keyBuffer.slice(0, -1);
        resetKeyBufferTimeout();
        return true;
      }
      if (e.key.length === 1 && !e.metaKey && !e.ctrlKey && !e.altKey) {
        if (!props.expanded) {
          emit2("update:expanded", true);
        }
        if (e.key === " " && keyBuffer.length < 1) {
          return false;
        }
        keyBuffer += e.key.toLowerCase();
        const isRepeatedCharacter = keyBuffer.length > 1 && keyBuffer.split("").every((char) => char === keyBuffer[0]);
        let itemsToMatch = computedMenuItems.value;
        let stringToMatch = keyBuffer;
        if (isRepeatedCharacter && highlightedMenuItemIndex.value !== void 0) {
          itemsToMatch = itemsToMatch.slice(highlightedMenuItemIndex.value + 1).concat(itemsToMatch.slice(0, highlightedMenuItemIndex.value));
          stringToMatch = keyBuffer[0];
        }
        const matchingItem = itemsToMatch.find((item) => {
          var _a;
          return !item.disabled && String((_a = item.label) != null ? _a : item.value).toLowerCase().startsWith(stringToMatch);
        });
        if (matchingItem) {
          handleMenuItemChange("highlightedViaKeyboard", matchingItem);
          maybeScrollIntoView();
        }
        resetKeyBufferTimeout();
        return true;
      }
      return false;
    }
    function handleKeyNavigation(e, {
      prevent = true,
      characterNavigation = false
    } = {}) {
      if (characterNavigation) {
        if (handleCharacterNavigation(e)) {
          e.preventDefault();
          return true;
        }
        clearKeyBuffer();
      }
      function maybePrevent() {
        if (prevent) {
          e.preventDefault();
          e.stopPropagation();
        }
      }
      switch (e.key) {
        case "Enter":
        case " ":
          maybePrevent();
          if (props.expanded) {
            if (highlightedMenuItem.value && highlightedViaKeyboard.value) {
              updateSelected(highlightedMenuItem.value.value);
            }
            if (!isMultiselect.value) {
              emit2("update:expanded", false);
            }
          } else {
            emit2("update:expanded", true);
          }
          return true;
        case "Tab":
          if (props.expanded) {
            if (highlightedMenuItem.value && highlightedViaKeyboard.value && !isMultiselect.value) {
              updateSelected(highlightedMenuItem.value.value);
              emit2("update:expanded", false);
            }
          }
          return true;
        case "ArrowUp":
          maybePrevent();
          if (props.expanded) {
            if (highlightedMenuItem.value === null) {
              handleMenuItemChange("highlightedViaKeyboard", findFirstSelectedMenuItem());
            }
            highlightPrev(highlightedMenuItemIndex.value);
          } else {
            emit2("update:expanded", true);
          }
          maybeScrollIntoView();
          return true;
        case "ArrowDown":
          maybePrevent();
          if (props.expanded) {
            if (highlightedMenuItem.value === null) {
              handleMenuItemChange("highlightedViaKeyboard", findFirstSelectedMenuItem());
            }
            highlightNext(highlightedMenuItemIndex.value);
          } else {
            emit2("update:expanded", true);
          }
          maybeScrollIntoView();
          return true;
        case "Home":
          maybePrevent();
          if (props.expanded) {
            if (highlightedMenuItem.value === null) {
              handleMenuItemChange("highlightedViaKeyboard", findFirstSelectedMenuItem());
            }
            highlightNext();
          } else {
            emit2("update:expanded", true);
          }
          maybeScrollIntoView();
          return true;
        case "End":
          maybePrevent();
          if (props.expanded) {
            if (highlightedMenuItem.value === null) {
              handleMenuItemChange("highlightedViaKeyboard", findFirstSelectedMenuItem());
            }
            highlightPrev();
          } else {
            emit2("update:expanded", true);
          }
          maybeScrollIntoView();
          return true;
        case "Escape":
          maybePrevent();
          emit2("update:expanded", false);
          return true;
        default:
          return false;
      }
    }
    function onMouseUp() {
      handleMenuItemChange("active", null);
    }
    const menuItemElements = [];
    const loadMoreTriggerElement = /* @__PURE__ */ ref(void 0);
    const isTriggerVisible = useIntersectionObserver(loadMoreTriggerElement, {
      threshold: 0.8
    });
    watch2(isTriggerVisible, (value) => {
      if (value) {
        emit2("load-more");
      }
    });
    function assignTemplateRef(templateRef, index) {
      if (templateRef) {
        menuItemElements[index] = templateRef.$el;
        const visibleItemLimit = props.visibleItemLimit;
        if (!visibleItemLimit || props.menuItems.length < visibleItemLimit) {
          return;
        }
        const loadMoreThreshold = Math.min(visibleItemLimit, Math.max(2, Math.floor(0.2 * props.menuItems.length)));
        if (index === props.menuItems.length - loadMoreThreshold) {
          loadMoreTriggerElement.value = templateRef.$el;
        }
      }
    }
    const rootElement = /* @__PURE__ */ ref();
    const menuListbox = /* @__PURE__ */ ref();
    function maybeScrollIntoView() {
      const isListboxScrollable = menuListbox.value && menuListbox.value.scrollHeight > menuListbox.value.clientHeight;
      if (highlightedMenuItemIndex.value === void 0 || !isListboxScrollable) {
        return;
      }
      const scrollIndex = highlightedMenuItemIndex.value >= 0 ? highlightedMenuItemIndex.value : 0;
      requestAnimationFrame(() => {
        menuItemElements[scrollIndex].scrollIntoView({
          behavior: "smooth",
          block: "nearest"
        });
      });
    }
    const maxMenuHeight = /* @__PURE__ */ ref(null);
    const footerHeight = /* @__PURE__ */ ref(null);
    async function resizeMenu() {
      await nextTick();
      updateFooterHeight();
      updateMaxMenuHeight();
      await nextTick();
      maybeScrollIntoView();
    }
    function updateFooterHeight() {
      if (props.footer) {
        const footerElement = menuItemElements[menuItemElements.length - 1];
        footerHeight.value = footerElement.scrollHeight;
      } else {
        footerHeight.value = null;
      }
    }
    function updateMaxMenuHeight() {
      if (!props.visibleItemLimit || menuItemElements.length <= props.visibleItemLimit) {
        maxMenuHeight.value = null;
        return;
      }
      const firstMenuItemTop = menuItemElements[0].getBoundingClientRect().top;
      const firstHiddenMenuItemTop = menuItemElements[props.visibleItemLimit].getBoundingClientRect().top;
      maxMenuHeight.value = firstHiddenMenuItemTop - firstMenuItemTop + 2;
    }
    function getGroupWrapperClasses(group) {
      return {
        "cdx-menu__group-wrapper--hide-label": !!group.hideLabel
      };
    }
    function getMenuItemIndex(menuItem) {
      return computedMenuItems.value.indexOf(menuItem);
    }
    function getMenuItemBindings(menuItem) {
      var _a, _b;
      return __spreadValues({
        selected: isItemSelected(menuItem.value),
        active: menuItem.value === ((_a = activeMenuItem.value) == null ? void 0 : _a.value),
        highlighted: menuItem.value === ((_b = highlightedMenuItem.value) == null ? void 0 : _b.value),
        showThumbnail: props.showThumbnail,
        boldLabel: props.boldLabel,
        hideDescriptionOverflow: props.hideDescriptionOverflow,
        searchQuery: props.searchQuery,
        multiselect: isMultiselect.value
      }, menuItem);
    }
    function getMenuItemHandlers(menuItem) {
      return {
        change: (menuState, setState) => handleMenuItemChange(menuState, setState ? menuItem : null),
        click: () => emit2("menu-item-click", menuItem)
      };
    }
    function getSlotBindings(menuItem) {
      var _a, _b;
      return {
        menuItem,
        active: menuItem.value === ((_a = activeMenuItem.value) == null ? void 0 : _a.value) && menuItem.value === ((_b = highlightedMenuItem.value) == null ? void 0 : _b.value)
      };
    }
    onMounted(() => {
      document.addEventListener("mouseup", onMouseUp);
    });
    onUnmounted(() => {
      document.removeEventListener("mouseup", onMouseUp);
    });
    watch2(/* @__PURE__ */ toRef(props, "expanded"), async (newVal) => {
      if (newVal) {
        const selectedMenuItem = findFirstSelectedMenuItem();
        if (selectedMenuItem && !highlightedMenuItem.value) {
          handleMenuItemChange("highlighted", selectedMenuItem);
        }
        await resizeMenu();
      } else {
        handleMenuItemChange("highlighted", null);
      }
    });
    watch2(/* @__PURE__ */ toRef(props, "menuItems"), async (newPropMenuItems) => {
      if (newPropMenuItems.length < menuItemElements.length) {
        menuItemElements.length = newPropMenuItems.length;
      }
      if (props.expanded) {
        await resizeMenu();
      }
    }, {
      deep: true
    });
    const listBoxStyle = computed2(() => ({
      "max-height": maxMenuHeight.value ? "".concat(maxMenuHeight.value, "px") : void 0,
      "margin-bottom": footerHeight.value ? "".concat(footerHeight.value, "px") : void 0
    }));
    const internalClasses = computed2(() => ({
      "cdx-menu--has-footer": !!props.footer
    }));
    const {
      rootClasses,
      rootStyle,
      otherAttrs
    } = useSplitAttributes(attrs, internalClasses);
    return {
      listBoxStyle,
      rootClasses,
      rootStyle,
      otherAttrs,
      assignTemplateRef,
      computedMenuEntries,
      computedMenuItems,
      computedShowNoResultsSlot,
      highlightedMenuItem,
      highlightedViaKeyboard,
      teleportDisabled,
      computedTarget,
      handleMenuItemChange,
      handleKeyNavigation,
      ariaRelevant,
      isMultiselect,
      rootElement,
      menuListbox,
      getGroupWrapperClasses,
      getMenuItemIndex,
      getMenuItemBindings,
      getMenuItemHandlers,
      getSlotBindings,
      isMenuGroupData
    };
  },
  // Public methods
  // These must be in the methods block, not in the setup function, otherwise their documentation
  // won't be picked up by vue-docgen
  methods: {
    /**
     * Returns whether the menu is expanded.
     *
     * @return {boolean}
     */
    // eslint-disable-next-line vue/no-unused-properties
    isExpanded() {
      return this.expanded;
    },
    /**
     * Get the root element of the menu. The normal `.$el` property doesn't work due to the use
     * of teleport; it returns a `<!-- teleport start -->` comment instead. This method returns
     * the real, teleported root element.
     *
     * @return {HTMLElement|undefined}
     */
    // eslint-disable-next-line vue/no-unused-properties
    getRootElement() {
      return this.rootElement;
    },
    /**
     * Get the highlighted menu item, if any.
     *
     * The parent component should set `aria-activedescendant` to the `.id` property of the
     * object returned by this method. If this method returns null, `aria-activedescendant`
     * should not be set.
     *
     * @public
     * @return {MenuItemDataWithId|null} The highlighted menu item,
     *   or null if no item is highlighted or if the menu is closed.
     */
    getHighlightedMenuItem() {
      return this.expanded ? this.highlightedMenuItem : null;
    },
    /**
     * Get whether the last highlighted item was highlighted via the keyboard.
     *
     * @public
     * @return {boolean} Whether the last highlighted menu item was highlighted via keyboard.
     */
    getHighlightedViaKeyboard() {
      return this.highlightedViaKeyboard;
    },
    /**
     * Get the computed menu items with IDs (without menu groups).
     *
     * @public
     * @return {MenuItemDataWithId[]} List of current menu items without menu groups.
     */
    getComputedMenuItems() {
      return this.computedMenuItems;
    },
    /**
     * Ensure no menu item is active. This unsets the active item if there is one.
     *
     * @public
     */
    clearActive() {
      this.handleMenuItemChange("active", null);
    },
    /**
     * Handles all necessary keyboard navigation.
     *
     * The parent component should listen for keydown events on its focusable element,
     * and pass those events to this method. Events for arrow keys, tab and enter are handled
     * by this method. If a different key was pressed, this method will return false to indicate
     * that it didn't handle the event.
     *
     * @public
     * @param event {KeyboardEvent} Keydown event object
     * @param options
     * @param options.prevent {boolean} If false, do not call e.preventDefault() or
     *   e.stopPropagation()
     * @param options.characterNavigation {boolean}
     * @return Whether the event was handled
     */
    delegateKeyNavigation(event, {
      prevent = true,
      characterNavigation = false
    } = {}) {
      return this.handleKeyNavigation(event, {
        prevent,
        characterNavigation
      });
    }
  }
});
var _hoisted_1$n = ["aria-live", "aria-relevant", "aria-multiselectable"];
var _hoisted_2$c = {
  key: 0,
  class: "cdx-menu__pending cdx-menu-item"
};
var _hoisted_3$8 = {
  key: 1,
  class: "cdx-menu__no-results cdx-menu-item",
  role: "option"
};
var _hoisted_4$6 = ["aria-labelledby", "aria-describedby"];
var _hoisted_5$6 = {
  class: "cdx-menu__group__meta"
};
var _hoisted_6$6 = {
  class: "cdx-menu__group__meta__text"
};
var _hoisted_7$2 = ["id"];
var _hoisted_8$2 = ["id"];
function _sfc_render$r(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_cdx_icon = resolveComponent("cdx-icon");
  const _component_cdx_menu_item = resolveComponent("cdx-menu-item");
  const _component_cdx_progress_bar = resolveComponent("cdx-progress-bar");
  return openBlock(), createBlock(Teleport, {
    to: _ctx.computedTarget,
    disabled: _ctx.teleportDisabled
  }, [withDirectives(createBaseVNode(
    "div",
    {
      ref: "rootElement",
      class: normalizeClass(["cdx-menu", _ctx.rootClasses]),
      style: normalizeStyle(_ctx.rootStyle)
    },
    [createBaseVNode("ul", mergeProps({
      ref: "menuListbox",
      class: "cdx-menu__listbox",
      role: "listbox",
      tabindex: "-1",
      style: _ctx.listBoxStyle,
      "aria-live": _ctx.showPending ? "polite" : void 0,
      "aria-relevant": _ctx.showPending ? _ctx.ariaRelevant : void 0,
      "aria-multiselectable": _ctx.isMultiselect ? true : void 0
    }, _ctx.otherAttrs, {
      onMousedown: _cache[0] || (_cache[0] = withModifiers(() => {
      }, ["prevent"]))
    }), [_ctx.showPending && _ctx.computedMenuItems.length === 0 && _ctx.$slots.pending ? (openBlock(), createElementBlock("li", _hoisted_2$c, [renderSlot(_ctx.$slots, "pending")])) : createCommentVNode("v-if", true), _ctx.computedShowNoResultsSlot ? (openBlock(), createElementBlock("li", _hoisted_3$8, [renderSlot(_ctx.$slots, "no-results")])) : createCommentVNode("v-if", true), (openBlock(true), createElementBlock(
      Fragment,
      null,
      renderList(_ctx.computedMenuEntries, (menuEntry, index) => {
        return openBlock(), createElementBlock(
          Fragment,
          {
            key: index
          },
          [_ctx.isMenuGroupData(menuEntry) ? (openBlock(), createElementBlock(
            "li",
            {
              key: 0,
              class: normalizeClass(["cdx-menu__group-wrapper", _ctx.getGroupWrapperClasses(menuEntry)])
            },
            [createBaseVNode("ul", {
              class: "cdx-menu__group",
              role: "group",
              "aria-labelledby": menuEntry.id + "-label",
              "aria-describedby": menuEntry.id + "-description"
            }, [createBaseVNode("span", _hoisted_5$6, [menuEntry.icon ? (openBlock(), createBlock(_component_cdx_icon, {
              key: 0,
              class: "cdx-menu__group__icon",
              icon: menuEntry.icon
            }, null, 8, ["icon"])) : createCommentVNode("v-if", true), createBaseVNode("span", _hoisted_6$6, [createBaseVNode("span", {
              id: menuEntry.id + "-label",
              class: "cdx-menu__group__label"
            }, toDisplayString(menuEntry.label), 9, _hoisted_7$2), menuEntry.description ? (openBlock(), createElementBlock("span", {
              key: 0,
              id: menuEntry.id + "-description",
              class: "cdx-menu__group__description"
            }, toDisplayString(menuEntry.description), 9, _hoisted_8$2)) : createCommentVNode("v-if", true)])]), (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(menuEntry.items, (menuItemInGroup) => {
                return openBlock(), createBlock(
                  _component_cdx_menu_item,
                  mergeProps({
                    key: menuItemInGroup.value,
                    ref_for: true,
                    ref: (ref2) => _ctx.assignTemplateRef(ref2, _ctx.getMenuItemIndex(menuItemInGroup)),
                    class: "cdx-menu__group__item"
                  }, {
                    ref_for: true
                  }, _ctx.getMenuItemBindings(menuItemInGroup), toHandlers(_ctx.getMenuItemHandlers(menuItemInGroup))),
                  {
                    default: withCtx(() => [renderSlot(_ctx.$slots, "default", mergeProps({
                      ref_for: true
                    }, _ctx.getSlotBindings(menuItemInGroup)))]),
                    _: 2
                    /* DYNAMIC */
                  },
                  1040
                  /* FULL_PROPS, DYNAMIC_SLOTS */
                );
              }),
              128
              /* KEYED_FRAGMENT */
            ))], 8, _hoisted_4$6)],
            2
            /* CLASS */
          )) : (openBlock(), createBlock(
            _component_cdx_menu_item,
            mergeProps({
              key: 1,
              ref_for: true,
              ref: (ref2) => _ctx.assignTemplateRef(ref2, _ctx.getMenuItemIndex(menuEntry))
            }, {
              ref_for: true
            }, _ctx.getMenuItemBindings(menuEntry), toHandlers(_ctx.getMenuItemHandlers(menuEntry))),
            {
              default: withCtx(() => [renderSlot(_ctx.$slots, "default", mergeProps({
                ref_for: true
              }, _ctx.getSlotBindings(menuEntry)))]),
              _: 2
              /* DYNAMIC */
            },
            1040
            /* FULL_PROPS, DYNAMIC_SLOTS */
          ))],
          64
          /* STABLE_FRAGMENT */
        );
      }),
      128
      /* KEYED_FRAGMENT */
    )), _ctx.showPending ? (openBlock(), createBlock(_component_cdx_progress_bar, {
      key: 2,
      class: "cdx-menu__progress-bar",
      inline: true
    })) : createCommentVNode("v-if", true)], 16, _hoisted_1$n)],
    6
    /* CLASS, STYLE */
  ), [[vShow, _ctx.expanded]])], 8, ["to", "disabled"]);
}
var CdxMenu = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["render", _sfc_render$r]]);
var textInputTypeValidator = makeStringTypeValidator(TextInputTypes);
var statusValidator$8 = makeStringTypeValidator(ValidationStatusTypes);
var _sfc_main$p = /* @__PURE__ */ defineComponent({
  name: "CdxTextInput",
  components: {
    CdxIcon
  },
  /**
   * We want the input to inherit attributes, not the root element.
   */
  inheritAttrs: false,
  // expose is temporarily disabled to work around a Vue / vue-tsc bug, see
  // https://github.com/vuejs/language-tools/issues/5069
  /*
  expose: [
  	'focus',
  	'blur',
  	'checkValidity',
  	'reportValidity',
  	'setCustomValidity'
  ],
  */
  props: {
    /**
     * Current value of the input.
     *
     * Provided by `v-model` binding in the parent component.
     */
    modelValue: {
      type: [String, Number],
      default: ""
    },
    /**
     * `type` attribute of the input.
     *
     * @values 'text', 'search', 'number', 'email', 'password', 'tel', 'url',
     * 'week', 'month', 'date', 'datetime-local', 'time'
     */
    inputType: {
      type: String,
      default: "text",
      validator: textInputTypeValidator
    },
    /**
     * `status` attribute of the input.
     */
    status: {
      type: String,
      default: "default",
      validator: statusValidator$8
    },
    /**
     * Whether the input is disabled.
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * An icon at the start of the `<input>` element. Similar to a `::before` pseudo-element.
     */
    startIcon: {
      type: [String, Object],
      default: void 0
    },
    /**
     * An icon at the end of the `<input>` element. Similar to an `::after` pseudo-element.
     */
    endIcon: {
      type: [String, Object],
      default: void 0
    },
    /**
     * Add a clear button at the end of the `<input>` element.
     *
     * When the clear button is pressed, the input's value is set to an empty string.
     * The clear button is displayed when input text is present.
     */
    clearable: {
      type: Boolean,
      default: false
    }
  },
  emits: [
    /**
     * When the input value changes
     *
     * @property {string | number} modelValue The new model value
     */
    "update:modelValue",
    /**
     * When the user presses a key.
     *
     * This event is not emitted when the user presses the Home or End key (T314728),
     * but is emitted for Ctrl/Cmd+Home and Ctrl/Cmd+End.
     *
     * @property {KeyboardEvent}
     */
    "keydown",
    /**
     * When the input value changes via direct use of the input
     *
     * @property {InputEvent} event
     */
    "input",
    /**
     * When an input value change is committed by the user (e.g. on blur)
     *
     * @property {Event} event
     */
    "change",
    /**
     * When the input comes into focus
     *
     * @property {FocusEvent} event
     */
    "focus",
    /**
     * When the input loses focus
     *
     * @property {FocusEvent} event
     */
    "blur",
    /**
     * When composition begins
     *
     * @property {CompositionEvent} event
     */
    "compositionstart",
    /**
     * When composition is updated
     *
     * @property {CompositionEvent} event
     */
    "compositionupdate",
    /**
     * When composition ends
     *
     * @property {CompositionEvent} event
     */
    "compositionend",
    /**
     * When the input value is cleared through the use of the clear button
     *
     * @property {MouseEvent} event
     */
    "clear",
    /**
     * When the input value is invalid according to the input's constraint
     * attributes (e.g. min, max, pattern). See:
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/invalid_event
     *
     * @property {Event} event
     */
    "invalid"
  ],
  setup(props, {
    emit: emit2,
    attrs
  }) {
    const idAttribute = attrs.id;
    const {
      computedDisabled,
      computedStatus,
      computedInputId
    } = useFieldData(/* @__PURE__ */ toRef(props, "disabled"), /* @__PURE__ */ toRef(props, "status"), idAttribute);
    const descriptionId = inject(FieldDescriptionIdKey, void 0);
    const wrappedModel = useModelWrapper(/* @__PURE__ */ toRef(props, "modelValue"), emit2);
    const isClearable = computed2(() => props.clearable && !!wrappedModel.value && !computedDisabled.value);
    const internalClasses = computed2(() => ({
      "cdx-text-input--has-start-icon": !!props.startIcon,
      "cdx-text-input--has-end-icon": !!props.endIcon,
      "cdx-text-input--clearable": isClearable.value,
      ["cdx-text-input--status-".concat(computedStatus.value)]: true
    }));
    const {
      rootClasses,
      rootStyle,
      otherAttrs
    } = useSplitAttributes(attrs, internalClasses);
    const otherAttrsMinusId = computed2(() => {
      const _a = otherAttrs.value, {
        id
      } = _a, everythingElse = __objRest(_a, ["id"]);
      return everythingElse;
    });
    const inputClasses = computed2(() => ({
      "cdx-text-input__input--has-value": !!wrappedModel.value
    }));
    const onClear = (event) => {
      wrappedModel.value = "";
      emit2("clear", event);
    };
    const onKeydown = (event) => {
      if ((event.key === "Home" || event.key === "End") && !event.ctrlKey && !event.metaKey) {
        return;
      }
      emit2("keydown", event);
    };
    const onInput = (event) => {
      emit2("input", event);
    };
    const onChange = (event) => {
      emit2("change", event);
    };
    const onFocus = (event) => {
      emit2("focus", event);
    };
    const onBlur = (event) => {
      emit2("blur", event);
    };
    const onCompositionStart2 = (event) => {
      emit2("compositionstart", event);
    };
    const onCompositionUpdate = (event) => {
      emit2("compositionupdate", event);
    };
    const onCompositionEnd2 = (event) => {
      emit2("compositionend", event);
    };
    const shouldPreventDefault = /* @__PURE__ */ ref(true);
    const onInvalid = (event, doPreventDefault) => {
      if (doPreventDefault) {
        event.preventDefault();
      }
      emit2("invalid", event);
      shouldPreventDefault.value = true;
    };
    return {
      computedInputId,
      descriptionId,
      wrappedModel,
      isClearable,
      rootClasses,
      rootStyle,
      otherAttrsMinusId,
      inputClasses,
      computedDisabled,
      onClear,
      onInput,
      onChange,
      onKeydown,
      onFocus,
      onBlur,
      onCompositionStart: onCompositionStart2,
      onCompositionUpdate,
      onCompositionEnd: onCompositionEnd2,
      onInvalid,
      shouldPreventDefault,
      cdxIconClear: t6
    };
  },
  // Public methods
  // These must be in the methods block, not in the setup function, otherwise their documentation
  // won't be picked up by vue-docgen
  methods: {
    /**
     * Focus the component's `<input>` element.
     *
     * @public
     */
    focus() {
      const input = this.$refs.input;
      input.focus();
    },
    /**
     * Blur the component's `<input>` element.
     *
     * @public
     */
    blur() {
      const input = this.$refs.input;
      input.blur();
    },
    /**
     * Check the validity of the `<input>` element according to its constraint attributes.
     * Emits an 'invalid' event if the input is invalid. See:
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/checkValidity
     *
     * @public
     * @return {boolean} Whether the input is valid
     */
    checkValidity() {
      const input = this.$refs.input;
      return input.checkValidity();
    },
    /**
     * Check the validity of the `<input>` element and report it as a pop up on the UI. See:
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/reportValidity
     *
     * @public
     * @return {boolean} Whether the input is valid
     */
    reportValidity() {
      this.shouldPreventDefault = false;
      const input = this.$refs.input;
      return input.reportValidity();
    },
    /**
     * Set custom validity and message for the `<input>` element. See:
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setCustomValidity
     *
     * @public
     * @param {string} message The custom validation message to set
     */
    setCustomValidity(message) {
      const input = this.$refs.input;
      input.setCustomValidity(message);
    }
  }
});
var _hoisted_1$m = ["id", "type", "aria-describedby", "disabled"];
function _sfc_render$q(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_cdx_icon = resolveComponent("cdx-icon");
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(["cdx-text-input", _ctx.rootClasses]),
      style: normalizeStyle(_ctx.rootStyle)
    },
    [withDirectives(createBaseVNode("input", mergeProps({
      id: _ctx.computedInputId,
      ref: "input",
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.wrappedModel = $event),
      class: ["cdx-text-input__input", _ctx.inputClasses]
    }, _ctx.otherAttrsMinusId, {
      type: _ctx.inputType,
      "aria-describedby": _ctx.descriptionId,
      disabled: _ctx.computedDisabled,
      size: "1",
      onInput: _cache[1] || (_cache[1] = (...args) => _ctx.onInput && _ctx.onInput(...args)),
      onCompositionstart: _cache[2] || (_cache[2] = (...args) => _ctx.onCompositionStart && _ctx.onCompositionStart(...args)),
      onCompositionupdate: _cache[3] || (_cache[3] = (...args) => _ctx.onCompositionUpdate && _ctx.onCompositionUpdate(...args)),
      onCompositionend: _cache[4] || (_cache[4] = (...args) => _ctx.onCompositionEnd && _ctx.onCompositionEnd(...args)),
      onChange: _cache[5] || (_cache[5] = (...args) => _ctx.onChange && _ctx.onChange(...args)),
      onFocus: _cache[6] || (_cache[6] = (...args) => _ctx.onFocus && _ctx.onFocus(...args)),
      onBlur: _cache[7] || (_cache[7] = (...args) => _ctx.onBlur && _ctx.onBlur(...args)),
      onKeydown: _cache[8] || (_cache[8] = (...args) => _ctx.onKeydown && _ctx.onKeydown(...args)),
      onInvalid: _cache[9] || (_cache[9] = (e) => _ctx.onInvalid(e, _ctx.shouldPreventDefault))
    }), null, 16, _hoisted_1$m), [[vModelDynamic, _ctx.wrappedModel]]), _ctx.startIcon ? (openBlock(), createBlock(_component_cdx_icon, {
      key: 0,
      icon: _ctx.startIcon,
      class: "cdx-text-input__icon-vue cdx-text-input__start-icon"
    }, null, 8, ["icon"])) : createCommentVNode("v-if", true), _ctx.endIcon ? (openBlock(), createBlock(_component_cdx_icon, {
      key: 1,
      icon: _ctx.endIcon,
      class: "cdx-text-input__icon-vue cdx-text-input__end-icon"
    }, null, 8, ["icon"])) : createCommentVNode("v-if", true), _ctx.isClearable ? (openBlock(), createBlock(_component_cdx_icon, {
      key: 2,
      icon: _ctx.cdxIconClear,
      class: "cdx-text-input__icon-vue cdx-text-input__clear-icon",
      onMousedown: _cache[10] || (_cache[10] = withModifiers(() => {
      }, ["prevent"])),
      onClick: _ctx.onClear
    }, null, 8, ["icon", "onClick"])) : createCommentVNode("v-if", true)],
    6
    /* CLASS, STYLE */
  );
}
var CdxTextInput = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$q]]);
function unwrapElement(element) {
  return element && "$el" in element ? element.$el : element;
}
var clipPadding = 16;
var minClipHeight = 128;
function useFloatingMenu(referenceElement, menu, opt) {
  var _a;
  const menuIsExpanded = () => {
    var _a2;
    return (_a2 = menu.value) == null ? void 0 : _a2.isExpanded();
  };
  const menuRootElement = computed2(() => {
    var _a2;
    return (_a2 = menu.value) == null ? void 0 : _a2.getRootElement();
  });
  const middleware = [
    offset(opt == null ? void 0 : opt.offset),
    size({
      // Don't size the menu to take up exactly all of the available height, because that
      // makes it look like it's cut off. Instead, leave 16px of free space between the bottom
      // of the menu and the bottom edge of the viewport / scrollable container.
      padding: clipPadding,
      apply({
        rects,
        elements,
        availableHeight,
        availableWidth
      }) {
        Object.assign(elements.floating.style, {
          // Optionally use all available width
          // Else, set the width of the menu to match the width of the triggering element.
          // This is needed in Dialogs, when the menu's position is set relative to
          // the dialog, not the triggering element.
          width: "".concat((opt == null ? void 0 : opt.useAvailableWidth) ? availableWidth : rects.reference.width, "px"),
          // Set the max-height to the available height, to prevent the menu from
          // extending past the edge of the viewport or scrollable container. But don't
          // allow the menu to be shrunk to less than 128px; this is necessary to make
          // the flip() call below work.
          maxHeight: "".concat(Math.max(minClipHeight, availableHeight), "px")
        });
      }
    }),
    // If there is not enough space to put the menu below the triggering element, put it above
    // it instead. Because of the maxHeight logic above, this happens when there is less than
    // 128px available below the triggering element.
    flip({
      // Set padding in flip middleware options as well, in order to flip before it collides
      // with the edge of the viewport. Ideally this would be the same as the value we use
      // above for size, but we need it to be 1px smaller so that there's not a flickering
      // effect as FloatingUI tries to decide whether to flip or resize. Setting the value
      // here slightly smaller ensures that there is no ambiguity about which middleware
      // behavior to apply in a given scenario.
      padding: clipPadding - 1
    }),
    // Hide the menu when it has escaped the reference element's clipping context (e.g. the menu
    // is opened down and you scroll up until the reference element just starts to leave the
    // container).
    hide({
      strategy: "escaped"
    }),
    // Hide the menu when the reference element is fully hidden (e.g. the menu is opened down
    // and you scroll down until the whole reference element is gone).
    hide()
  ];
  const {
    floatingStyles,
    placement,
    middlewareData,
    update
  } = useFloating(referenceElement, menuRootElement, {
    middleware,
    placement: (_a = opt == null ? void 0 : opt.placement) != null ? _a : "bottom"
  });
  const menuVisibility = computed2(() => {
    var _a2, _b;
    const isHidden = !menuIsExpanded() || !!((_a2 = middlewareData.value.hide) == null ? void 0 : _a2.escaped) || ((_b = middlewareData.value.hide) == null ? void 0 : _b.referenceHidden);
    return isHidden ? "hidden" : "visible";
  });
  watch2([floatingStyles, menuVisibility, placement], ([newStyles, newVisibility, newPlacement]) => {
    var _a2, _b, _c, _d, _e;
    Object.assign((_b = (_a2 = menuRootElement.value) == null ? void 0 : _a2.style) != null ? _b : {}, {
      visibility: newVisibility,
      position: newStyles.position,
      top: "".concat(newStyles.top, "px"),
      // `left: 0` is set in the Menu component, which gets transformed to `right: 0` for
      // RTL. For this component, we must unset `right: 0`, because the transform value
      // is relative to the left side of the screen regardless of reading direction.
      right: "unset",
      // Set `left` value to ensure the menu is translated relative to the left side of
      // the screen, which is what FloatingUI expects when it calculates the translate-x
      // value for both LTR and RTL.
      left: "".concat(newStyles.left, "px"),
      // If menuWidth is specified, transform shifts negative, for now ignore that
      transform: (_c = newStyles.transform) != null ? _c : "none",
      // Zero out border-radius on the corners of the menu where it touches the reference
      // element. Which corners these are depends on whether the menu is flipped
      borderTopLeftRadius: newPlacement === "bottom" && newVisibility === "visible" ? "0" : "",
      borderTopRightRadius: newPlacement === "bottom" && newVisibility === "visible" ? "0" : "",
      borderBottomLeftRadius: newPlacement === "top" && newVisibility === "visible" ? "0" : "",
      borderBottomRightRadius: newPlacement === "top" && newVisibility === "visible" ? "0" : ""
    });
    Object.assign((_e = (_d = unwrapElement(referenceElement.value)) == null ? void 0 : _d.style) != null ? _e : {}, {
      // Zero out border-radius on the corners of the reference element where it touches
      // the menu. Which corners these are depends on whether the menu is flipped
      borderTopLeftRadius: newPlacement === "top" && newVisibility === "visible" ? "0" : "",
      borderTopRightRadius: newPlacement === "top" && newVisibility === "visible" ? "0" : "",
      borderBottomLeftRadius: newPlacement === "bottom" && newVisibility === "visible" ? "0" : "",
      borderBottomRightRadius: newPlacement === "bottom" && newVisibility === "visible" ? "0" : ""
    });
  });
  let cleanupAutoUpdate = null;
  watch2(menuIsExpanded, (newExpanded) => {
    if (newExpanded) {
      if (!referenceElement.value || !menuRootElement.value) {
        return;
      }
      cleanupAutoUpdate = autoUpdate(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        "$el" in referenceElement.value ? referenceElement.value.$el : referenceElement.value,
        menuRootElement.value,
        update
      );
    } else {
      if (cleanupAutoUpdate) {
        cleanupAutoUpdate();
        cleanupAutoUpdate = null;
      }
    }
  });
}
var statusValidator$7 = makeStringTypeValidator(ValidationStatusTypes);
function useResizeObserver(templateRef) {
  const currentDimensions = /* @__PURE__ */ ref({
    width: void 0,
    height: void 0
  });
  if (typeof window !== "object" || !("ResizeObserver" in window) || !("ResizeObserverEntry" in window)) {
    return currentDimensions;
  }
  const observer = new window.ResizeObserver((entries) => {
    var _a;
    const entry = entries == null ? void 0 : entries[0];
    if (entry) {
      const borderBox = (_a = entry.borderBoxSize) == null ? void 0 : _a[0];
      if (borderBox) {
        currentDimensions.value = {
          width: borderBox.inlineSize,
          height: borderBox.blockSize
        };
      } else {
        currentDimensions.value = {
          width: entry.contentRect.width,
          height: entry.contentRect.height
        };
      }
    }
  });
  let mounted = false;
  onMounted(() => {
    mounted = true;
    if (templateRef.value) {
      observer.observe(templateRef.value);
    }
  });
  onUnmounted(() => {
    mounted = false;
    observer.disconnect();
  });
  watch2(templateRef, (newElement) => {
    if (!mounted) {
      return;
    }
    observer.disconnect();
    currentDimensions.value = {
      width: void 0,
      height: void 0
    };
    if (newElement) {
      observer.observe(newElement);
    }
  });
  return currentDimensions;
}
function useFocusTrap(options) {
  const {
    containerRef,
    bodyRef,
    anchorRef,
    preventScroll = false
  } = options;
  const focusTrapStart = /* @__PURE__ */ ref();
  const focusTrapEnd = /* @__PURE__ */ ref();
  const focusHolder = /* @__PURE__ */ ref();
  let previouslyFocused = null;
  function isPreviouslyFocusedAnchor() {
    if (!anchorRef || !previouslyFocused) {
      return false;
    }
    const anchorEl = unwrapElement(anchorRef.value);
    return !!(anchorEl == null ? void 0 : anchorEl.contains(previouslyFocused));
  }
  function focusFirst() {
    if (containerRef.value) {
      focusFirstFocusableElement(containerRef.value);
    }
  }
  function focusLast() {
    if (containerRef.value) {
      focusFirstFocusableElement(containerRef.value, true);
    }
  }
  function scrollFocusedElement(focused) {
    setTimeout(() => {
      focused.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest"
      });
    }, 500);
  }
  function focusFirstFocusableElement(container, backwards = false) {
    let candidates = Array.from(container.querySelectorAll('\n				input, select, textarea, button, object, a, area,\n				[contenteditable], [tabindex]:not([tabindex^="-"])\n			'));
    if (backwards) {
      candidates = candidates.reverse();
    }
    for (const candidate of candidates) {
      candidate.focus({
        preventScroll
      });
      if (document.activeElement === candidate) {
        if (preventScroll) {
          scrollFocusedElement(candidate);
        }
        return true;
      }
    }
    return false;
  }
  async function activateFocusTrap() {
    var _a, _b;
    await nextTick();
    previouslyFocused = document.activeElement;
    if (isPreviouslyFocusedAnchor()) {
      return;
    }
    const focusTarget = (_a = bodyRef == null ? void 0 : bodyRef.value) != null ? _a : containerRef.value;
    if (focusTarget && !focusFirstFocusableElement(focusTarget)) {
      (_b = focusHolder.value) == null ? void 0 : _b.focus({
        preventScroll
      });
    }
  }
  function deactivateFocusTrap() {
    if (isPreviouslyFocusedAnchor()) {
      previouslyFocused = null;
      return;
    }
    if (previouslyFocused instanceof HTMLElement && document.contains(previouslyFocused)) {
      previouslyFocused.focus({
        preventScroll
      });
      previouslyFocused = null;
    }
  }
  return {
    focusTrapStart,
    focusTrapEnd,
    focusHolder,
    focusFirst,
    focusLast,
    activateFocusTrap,
    deactivateFocusTrap
  };
}
function getScrollbarWidth() {
  const root = document.documentElement;
  if (root.scrollHeight <= root.clientHeight) {
    return 0;
  }
  const measurement = document.createElement("div");
  measurement.style.position = "absolute";
  measurement.style.top = "-9999px";
  measurement.style.width = "100px";
  measurement.style.height = "100px";
  measurement.style.overflow = "scroll";
  document.body.appendChild(measurement);
  const scrollbarWidth = measurement.offsetWidth - measurement.clientWidth;
  document.body.removeChild(measurement);
  return scrollbarWidth;
}
function shouldUseFixedBodyScrollLock() {
  if (typeof navigator === "undefined") {
    return false;
  }
  const ua = navigator.userAgent;
  return /iP(ad|hone|od)/.test(ua) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
}
function getScrollRoot() {
  if ("scrollingElement" in document && document.scrollingElement instanceof HTMLElement) {
    return document.scrollingElement;
  }
  return document.documentElement;
}
function useScrollLock(isActive) {
  let savedScrollX = 0;
  let savedScrollY = 0;
  let appliedFixedScrollLock = false;
  const hasDOM = typeof window !== "undefined" && typeof document !== "undefined";
  function lockBodyScroll() {
    if (!hasDOM) {
      return;
    }
    const body = document.body;
    const scrollRoot = getScrollRoot();
    if (shouldUseFixedBodyScrollLock()) {
      savedScrollX = scrollRoot.scrollLeft;
      savedScrollY = scrollRoot.scrollTop;
      appliedFixedScrollLock = true;
      body.style.position = "fixed";
      body.style.top = "-".concat(savedScrollY, "px");
      body.style.left = "0";
      body.style.right = "0";
      body.style.width = "100%";
    } else {
      appliedFixedScrollLock = false;
    }
    const scrollbarWidth = getScrollbarWidth();
    if (scrollbarWidth > 0) {
      body.style.paddingRight = "".concat(scrollbarWidth, "px");
    }
    body.style.overflow = "hidden";
  }
  function unlockBodyScroll() {
    if (!hasDOM) {
      return;
    }
    const body = document.body;
    const scrollRoot = getScrollRoot();
    body.style.removeProperty("overflow");
    body.style.removeProperty("padding-right");
    if (appliedFixedScrollLock) {
      const restoreX = savedScrollX;
      const restoreY = savedScrollY;
      appliedFixedScrollLock = false;
      body.style.removeProperty("position");
      body.style.removeProperty("top");
      body.style.removeProperty("left");
      body.style.removeProperty("right");
      body.style.removeProperty("width");
      window.requestAnimationFrame(() => {
        scrollRoot.scrollLeft = restoreX;
        scrollRoot.scrollTop = restoreY;
      });
    }
  }
  watch2(isActive, (active) => {
    if (active) {
      lockBodyScroll();
    } else {
      unlockBodyScroll();
    }
  }, {
    immediate: true
  });
  onBeforeUnmount(() => {
    if (isActive.value) {
      unlockBodyScroll();
    }
  });
}
var __default__ = /* @__PURE__ */ defineComponent({
  name: "CdxDialog",
  components: {
    CdxButton,
    CdxIcon
  },
  inheritAttrs: false,
  props: {
    /**
     * Whether the dialog is visible. Should be provided via a v-model:open
     * binding in the parent scope.
     */
    open: {
      type: Boolean,
      default: false
    },
    /**
     * Title for the dialog header. Used for ARIA purposes even if no
     * visible header element is displayed.
     */
    title: {
      type: String,
      required: true
    },
    /**
     * Optional subtitle for the dialog.
     */
    subtitle: {
      type: String,
      required: false,
      default: null
    },
    /**
     * Whether the dialog header should hide the title & subtitle
     */
    hideTitle: {
      type: Boolean,
      default: false
    },
    /**
     * Add an icon-only close button to the dialog header.
     *
     * On narrow screens, the close button is always displayed. On wide screens, it's only
     * displayed if this prop is set.
     */
    useCloseButton: {
      type: Boolean,
      default: false
    },
    // DEPRECATED: Set default to 'Close' and remove validator (T368444).
    /**
     * Visually-hidden label text for the icon-only close button in the header.
     *
     * Omit this prop to use the default value, "Close".
     */
    closeButtonLabel: {
      type: String,
      default: "",
      validator: (value, props) => {
        if (value.length > 0 && !props.useCloseButton) {
          console.warn("[CdxDialog]: The boolean `useCloseButton` prop is required to show the close button.\n\nRefer to https://doc.wikimedia.org/codex/latest/components/demos/dialog.html#props.");
          return false;
        }
        return true;
      }
    },
    /**
     * Primary user action. This will display a primary button with the specified action
     * (progressive or destructive).
     */
    primaryAction: {
      type: Object,
      default: null
    },
    /**
     * Default user action. This will display a normal button.
     */
    defaultAction: {
      type: Object,
      default: null
    },
    /**
     * Whether action buttons should be vertically stacked and 100% width.
     */
    stackedActions: {
      type: Boolean,
      default: false
    },
    /**
     * Whether the dialog should maintain a fixed maximum height on mobile screens,
     * rather than expanding to fit the content height.
     */
    fixedHeight: {
      type: [Boolean, Number],
      default: false,
      validator: (value) => typeof value === "boolean" || typeof value === "number" && value > 0
    },
    /**
     * Selector or DOM element identifying the container the dialog should
     * be rendered in. The dialog will be `<teleport>`ed to this element.
     * An ID selector is recommended, e.g. `#foo-bar`, but providing an
     * actual element is also supported.
     *
     * If this prop is not set, and the parent or one of its ancestors
     * provides a teleport target using `provide( 'CdxTeleportTarget',
     * '#foo-bar' )`, the provided target will be used. If there is no
     * provided target, the dialog will be teleported to the end of the
     * `<body>` element.
     */
    target: {
      type: String,
      default: null
    },
    /**
     * Whether to disable the use of teleport and render the Dialog in its
     * original location in the document. If this is true, the `target` prop
     * is ignored.
     */
    renderInPlace: {
      type: Boolean,
      default: false
    }
  },
  emits: [
    /**
     * When the open/close state changes, e.g. when the close button is clicked.
     *
     * @property {boolean} newValue The new open/close state (true for open, false for closed)
     */
    "update:open",
    /**
     * When the primary action button is clicked.
     */
    "primary",
    /**
     * When the default action button is clicked.
     */
    "default"
  ],
  setup(props, {
    emit: emit2
  }) {
    const labelId = useId();
    const backdrop = /* @__PURE__ */ ref();
    const dialogElement = /* @__PURE__ */ ref();
    const dialogBody = /* @__PURE__ */ ref();
    const innerTeleportTarget = /* @__PURE__ */ ref();
    const useCloseButtonOrLabel = computed2(() => props.useCloseButton || props.closeButtonLabel.length > 0);
    const translatedCloseButtonLabel = useI18nWithOverride(/* @__PURE__ */ toRef(props, "closeButtonLabel"), "cdx-dialog-close-button-label", "Close");
    const showFooterActions = computed2(() => !!props.primaryAction || !!props.defaultAction);
    const bodyDimensions = useResizeObserver(dialogBody);
    const currentBodyHeight = computed2(() => {
      var _a;
      return (_a = bodyDimensions.value.height) != null ? _a : 0;
    });
    const showDividers = /* @__PURE__ */ ref(false);
    const rootClasses = computed2(() => ({
      "cdx-dialog--vertical-actions": props.stackedActions,
      "cdx-dialog--dividers": showDividers.value,
      "cdx-dialog--fixed-height": props.fixedHeight !== false,
      "cdx-dialog--fixed-height-custom": typeof props.fixedHeight === "number"
    }));
    const fixedHeightRem = computed2(() => typeof props.fixedHeight === "number" ? "".concat(props.fixedHeight / 16, "rem") : "");
    const providedTarget = inject("CdxTeleportTarget", void 0);
    const computedTarget = computed2(() => {
      var _a, _b;
      return (_b = (_a = props.target) != null ? _a : unref(providedTarget)) != null ? _b : "body";
    });
    provide("CdxTeleportTarget", innerTeleportTarget);
    const isDialogOpen = computed2(() => props.open);
    useScrollLock(isDialogOpen);
    function close() {
      emit2("update:open", false);
    }
    let mousedownOnBackdrop = false;
    function onBackdropMouseDown(e) {
      mousedownOnBackdrop = e.target === backdrop.value;
    }
    function onBackdropClick() {
      if (mousedownOnBackdrop) {
        close();
      }
    }
    const {
      focusTrapStart,
      focusTrapEnd,
      focusHolder,
      focusFirst,
      focusLast,
      activateFocusTrap,
      deactivateFocusTrap
    } = useFocusTrap({
      // dialogElement is the container for the focus trap
      containerRef: dialogElement,
      bodyRef: dialogBody,
      preventScroll: true
    });
    let ariaHiddenElements = [];
    let inertElements = [];
    function setAriaHiddenAndInert() {
      let element = backdrop.value;
      while (element.parentElement && element.nodeName !== "BODY") {
        for (const sibling of Array.from(element.parentElement.children)) {
          if (sibling === element || sibling.nodeName === "SCRIPT") {
            continue;
          }
          if (!sibling.hasAttribute("aria-hidden")) {
            sibling.setAttribute("aria-hidden", "true");
            ariaHiddenElements.push(sibling);
          }
          if (!sibling.hasAttribute("inert")) {
            sibling.setAttribute("inert", "");
            inertElements.push(sibling);
          }
        }
        element = element.parentElement;
      }
    }
    function unsetAriaHiddenAndInert() {
      for (const element of ariaHiddenElements) {
        element.removeAttribute("aria-hidden");
      }
      for (const element of inertElements) {
        element.removeAttribute("inert");
      }
      ariaHiddenElements = [];
      inertElements = [];
    }
    async function onDialogOpen() {
      await nextTick();
      setAriaHiddenAndInert();
      await activateFocusTrap();
    }
    function onDialogClose() {
      unsetAriaHiddenAndInert();
      deactivateFocusTrap();
    }
    onMounted(async () => {
      if (props.open) {
        await onDialogOpen();
      }
    });
    onUnmounted(() => {
      if (props.open) {
        onDialogClose();
      }
    });
    watch2(/* @__PURE__ */ toRef(props, "open"), async (opened) => {
      if (opened) {
        await onDialogOpen();
      } else {
        onDialogClose();
      }
    });
    watch2(currentBodyHeight, () => {
      if (dialogBody.value) {
        showDividers.value = dialogBody.value.clientHeight < dialogBody.value.scrollHeight;
      }
    });
    return {
      close,
      onBackdropClick,
      onBackdropMouseDown,
      cdxIconClose: o6,
      labelId,
      rootClasses,
      backdrop,
      dialogElement,
      focusTrapStart,
      focusTrapEnd,
      innerTeleportTarget,
      focusFirst,
      focusLast,
      dialogBody,
      focusHolder,
      showFooterActions,
      useCloseButtonOrLabel,
      translatedCloseButtonLabel,
      computedTarget,
      fixedHeightRem
    };
  }
});
var __injectCSSVars__ = () => {
  useCssVars((_ctx) => ({
    "02b496bf": _ctx.fixedHeightRem
  }));
};
var __setup__ = __default__.setup;
__default__.setup = __setup__ ? (props, ctx) => {
  __injectCSSVars__();
  return __setup__(props, ctx);
} : __injectCSSVars__;
var iconMap$2 = {
  subtle: V7,
  notice: V7,
  progressive: V7,
  error: y6,
  warning: V5,
  success: F9
};
var _sfc_main$n = /* @__PURE__ */ defineComponent({
  name: "CdxMessage",
  components: {
    CdxButton,
    CdxIcon
  },
  props: {
    // Technically, the type can be set to 'subtle' or 'progressive' too, but we do not
    // recommend this at this time, hence its omission from the Codex docs.
    /**
     * Status type of Message.
     *
     * @values 'notice', 'warning', 'error', 'success'
     */
    type: {
      type: String,
      default: "notice",
      validator: statusTypeValidator
    },
    /**
     * Whether this message follows the inline design (no padding, background color, or border).
     */
    inline: {
      type: Boolean,
      default: false
    },
    /**
     * Custom message icon. Only allowed for subtle, notice, and progressive messages.
     */
    icon: {
      type: [String, Object],
      default: null
    },
    /**
     * Whether the message should fade in. Should be used for messages that are dynamically
     * displayed, not present on page load.
     */
    fadeIn: {
      type: Boolean,
      default: false
    },
    /**
     * Allow the message to be dismissed by the user. Adds an icon-only dismiss button.
     */
    allowUserDismiss: {
      type: Boolean,
      default: false
    },
    // DEPRECATED: set default to 'Close' and remove validator (T368444).
    /**
     * Visually-hidden label text for the dismiss button for user-dismissable messages.
     *
     * Omit this prop to use the default value, "Close".
     */
    dismissButtonLabel: {
      type: String,
      default: "",
      validator: (value, props) => {
        if (value.length > 0 && !props.allowUserDismiss) {
          console.warn("[CdxMessage]: The boolean `allowUserDismiss` prop is required to show the dismiss button.\n\nRefer to https://doc.wikimedia.org/codex/latest/components/demos/message.html#props.");
          return false;
        }
        return true;
      }
    },
    /**
     * Enable automatic dismissal of message after a period of time.
     *
     * This prop can be set to `true` to use the default display time of 4000 milliseconds. To
     * customize the display time, set this prop to a number of milliseconds.
     *
     * Error messages cannot be automatically dismissed. If the `type` prop is set to `error`,
     * this prop will be ignored.
     *
     * TODO: consider adding a stricter validator to set limits on this. If the time is too
     * short, the message may not be readable. If the time is too long, the message probably
     * shouldn't be auto-dismissed.
     */
    autoDismiss: {
      type: [Boolean, Number],
      default: false,
      validator: (value) => typeof value === "boolean" || typeof value === "number" && value > 0
    },
    /**
     * Label text for the optional action button.
     */
    actionButtonLabel: {
      type: String,
      default: ""
    }
  },
  emits: [
    /**
     * Emitted when the message is dismissed by the user via the dismiss button.
     */
    "user-dismissed",
    /**
     * Emitted when the message is automatically dismissed after the display time.
     */
    "auto-dismissed",
    /**
     * Emitted when the action button is clicked.
     */
    "action-button-click"
  ],
  setup(props, {
    emit: emit2
  }) {
    const dismissed = /* @__PURE__ */ ref(false);
    const userDismissable = computed2(() => props.inline === false && // DEPRECATED: require use of new prop allowUserDismiss (T368444).
    (props.dismissButtonLabel.length > 0 || props.allowUserDismiss));
    const translatedDismissButtonLabel = useI18nWithOverride(/* @__PURE__ */ toRef(props, "dismissButtonLabel"), "cdx-message-dismiss-button-label", "Close");
    const displayTime = computed2(() => {
      if (props.autoDismiss === false || props.type === "error") {
        return false;
      } else if (props.autoDismiss === true) {
        return 4e3;
      }
      return props.autoDismiss;
    });
    const rootClasses = computed2(() => ({
      "cdx-message--inline": props.inline,
      "cdx-message--block": !props.inline,
      "cdx-message--user-dismissable": userDismissable.value,
      ["cdx-message--".concat(props.type)]: true
    }));
    const computedIcon = computed2(() => props.icon && ["progressive", "subtle", "notice"].includes(props.type) ? props.icon : iconMap$2[props.type]);
    const leaveActiveClass = /* @__PURE__ */ ref("");
    function onDismiss(eventName) {
      if (dismissed.value) {
        return;
      }
      leaveActiveClass.value = eventName === "user-dismissed" ? "cdx-message-leave-active-user" : "cdx-message-leave-active-system";
      dismissed.value = true;
      emit2(eventName);
    }
    function onActionButtonClick() {
      emit2("action-button-click");
    }
    onMounted(() => {
      if (props.type === "error" && props.autoDismiss !== false) {
        warn2('CdxMessage: Message with type="error" cannot use auto-dismiss');
      } else if (displayTime.value) {
        setTimeout(() => onDismiss("auto-dismissed"), displayTime.value);
      }
    });
    return {
      dismissed,
      userDismissable,
      translatedDismissButtonLabel,
      rootClasses,
      leaveActiveClass,
      computedIcon,
      onDismiss,
      onActionButtonClick,
      cdxIconClose: o6
    };
  }
});
var _hoisted_1$j = ["aria-live", "role"];
var _hoisted_2$a = {
  class: "cdx-message__content"
};
function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_cdx_icon = resolveComponent("cdx-icon");
  const _component_cdx_button = resolveComponent("cdx-button");
  return openBlock(), createBlock(Transition, {
    name: "cdx-message",
    appear: _ctx.fadeIn,
    "leave-active-class": _ctx.leaveActiveClass
  }, {
    default: withCtx(() => [!_ctx.dismissed ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(["cdx-message", _ctx.rootClasses]),
      "aria-live": _ctx.type !== "error" ? "polite" : void 0,
      role: _ctx.type === "error" ? "alert" : void 0
    }, [createVNode(_component_cdx_icon, {
      class: "cdx-message__icon--vue",
      icon: _ctx.computedIcon
    }, null, 8, ["icon"]), createBaseVNode("div", _hoisted_2$a, [renderSlot(_ctx.$slots, "default")]), _ctx.actionButtonLabel ? (openBlock(), createBlock(_component_cdx_button, {
      key: 0,
      class: "cdx-message__action-button",
      weight: "quiet",
      type: "button",
      size: "small",
      onClick: _ctx.onActionButtonClick
    }, {
      default: withCtx(() => [createTextVNode(
        toDisplayString(_ctx.actionButtonLabel),
        1
        /* TEXT */
      )]),
      _: 1
      /* STABLE */
    }, 8, ["onClick"])) : createCommentVNode("v-if", true), _ctx.userDismissable ? (openBlock(), createBlock(_component_cdx_button, {
      key: 1,
      class: "cdx-message__dismiss-button",
      weight: "quiet",
      type: "button",
      "aria-label": _ctx.translatedDismissButtonLabel,
      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.onDismiss("user-dismissed"))
    }, {
      default: withCtx(() => [createVNode(_component_cdx_icon, {
        icon: _ctx.cdxIconClose
      }, null, 8, ["icon"])]),
      _: 1
      /* STABLE */
    }, 8, ["aria-label"])) : createCommentVNode("v-if", true)], 10, _hoisted_1$j)) : createCommentVNode("v-if", true)]),
    _: 3
    /* FORWARDED */
  }, 8, ["appear", "leave-active-class"]);
}
var CdxMessage = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$n]]);
var statusValidator$6 = makeStringTypeValidator(ValidationStatusTypes);
var _sfc_main$m = /* @__PURE__ */ defineComponent({
  name: "CdxField",
  components: {
    CdxLabel,
    CdxMessage
  },
  props: {
    /**
     * Icon before the label text.
     *
     * Do not use this if including a start icon within the input component.
     */
    labelIcon: {
      type: [String, Object],
      default: ""
    },
    /**
     * Whether the field is optional.
     *
     * This will add a flag next to the label indicating that the field is optional.
     */
    optional: {
      type: Boolean,
      default: false
    },
    // DEPRECATED: set default to '(optional)' and remove validator (T368444).
    /**
     * Text to indicate that the field is optional.
     *
     * Omit this prop to use the default value, "(optional)".
     */
    optionalFlag: {
      type: String,
      default: "",
      validator: (value, props) => {
        if (value.length > 0 && !props.optional) {
          console.warn("[CdxField]: The boolean `optional` prop is required to show the optional flag.\n\nRefer to https://doc.wikimedia.org/codex/latest/components/demos/field.html#props.");
          return false;
        }
        return true;
      }
    },
    /**
     * Whether the label should be visually hidden.
     *
     * Note that this will also hide the description.
     */
    hideLabel: {
      type: Boolean,
      default: false
    },
    /**
     * Whether this field contains a group of inputs.
     *
     * When true, this outputs a `<fieldset>` element with a semantic `<legend>`. When false,
     * it outputs a `<div>` with a semantic `<label>`.
     */
    isFieldset: {
      type: Boolean,
      default: false
    },
    /**
     * Whether the entire field is disabled.
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * `status` attribute of the input. This also determines which validation message is shown.
     */
    status: {
      type: String,
      default: "default",
      validator: statusValidator$6
    },
    /**
     * Message text keyed on validation status type.
     *
     * @default {}
     */
    messages: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, {
    slots
  }) {
    const {
      disabled,
      status,
      isFieldset
    } = /* @__PURE__ */ toRefs(props);
    const computedDisabled = useComputedDisabled(disabled);
    const rootClasses = computed2(() => ({
      "cdx-field--disabled": computedDisabled.value,
      "cdx-field--is-fieldset": isFieldset.value
    }));
    const labelId = useId();
    const descriptionId = useId();
    const inputId2 = useId();
    const computedInputId = computed2(() => !isFieldset.value ? inputId2 : void 0);
    provide(FieldInputIdKey, computedInputId);
    const computedDescriptionId = computed2(() => !isFieldset.value && slots.description ? descriptionId : void 0);
    provide(FieldDescriptionIdKey, computedDescriptionId);
    provide(DisabledKey, computedDisabled);
    provide(FieldStatusKey, status);
    const validationMessage = computed2(() => props.status !== "default" && props.status in props.messages ? props.messages[props.status] : "");
    const validationMessageType = computed2(() => props.status === "default" ? "notice" : props.status);
    return {
      rootClasses,
      computedDisabled,
      labelId,
      descriptionId,
      inputId: inputId2,
      validationMessage,
      validationMessageType
    };
  }
});
var _hoisted_1$i = {
  class: "cdx-field__control"
};
var _hoisted_2$9 = {
  key: 0,
  class: "cdx-field__help-text"
};
var _hoisted_3$6 = {
  key: 1,
  class: "cdx-field__validation-message"
};
function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_cdx_label = resolveComponent("cdx-label");
  const _component_cdx_message = resolveComponent("cdx-message");
  return openBlock(), createBlock(resolveDynamicComponent(_ctx.isFieldset ? "fieldset" : "div"), {
    class: normalizeClass(["cdx-field", _ctx.rootClasses]),
    "aria-disabled": !_ctx.isFieldset && _ctx.computedDisabled ? true : void 0,
    disabled: _ctx.isFieldset && _ctx.computedDisabled ? true : void 0
  }, {
    default: withCtx(() => [createVNode(_component_cdx_label, {
      id: _ctx.labelId,
      icon: _ctx.labelIcon,
      "visually-hidden": _ctx.hideLabel,
      optional: _ctx.optional,
      "optional-flag": _ctx.optionalFlag,
      "input-id": _ctx.inputId,
      "description-id": _ctx.descriptionId,
      disabled: _ctx.computedDisabled,
      "is-legend": _ctx.isFieldset
    }, createSlots({
      default: withCtx(() => [renderSlot(_ctx.$slots, "label")]),
      _: 2
      /* DYNAMIC */
    }, [_ctx.$slots.description && _ctx.$slots.description().length > 0 ? {
      name: "description",
      fn: withCtx(() => [renderSlot(_ctx.$slots, "description")]),
      key: "0"
    } : void 0]), 1032, ["id", "icon", "visually-hidden", "optional", "optional-flag", "input-id", "description-id", "disabled", "is-legend"]), createBaseVNode("div", _hoisted_1$i, [renderSlot(_ctx.$slots, "default")]), _ctx.$slots["help-text"] ? (openBlock(), createElementBlock("div", _hoisted_2$9, [renderSlot(_ctx.$slots, "help-text")])) : createCommentVNode("v-if", true), !_ctx.computedDisabled && _ctx.validationMessage || _ctx.$slots[_ctx.validationMessageType] ? (openBlock(), createElementBlock("div", _hoisted_3$6, [createVNode(_component_cdx_message, {
      type: _ctx.validationMessageType,
      inline: true
    }, {
      default: withCtx(() => [_ctx.status === "warning" && _ctx.$slots.warning ? renderSlot(_ctx.$slots, "warning", {
        key: 0
      }) : _ctx.status === "error" && _ctx.$slots.error ? renderSlot(_ctx.$slots, "error", {
        key: 1
      }) : _ctx.status === "success" && _ctx.$slots.success ? renderSlot(_ctx.$slots, "success", {
        key: 2
      }) : (openBlock(), createElementBlock(
        Fragment,
        {
          key: 3
        },
        [createTextVNode(
          toDisplayString(_ctx.validationMessage),
          1
          /* TEXT */
        )],
        64
        /* STABLE_FRAGMENT */
      ))]),
      _: 3
      /* FORWARDED */
    }, 8, ["type"])])) : createCommentVNode("v-if", true)]),
    _: 3
    /* FORWARDED */
  }, 8, ["class", "aria-disabled", "disabled"]);
}
var Field = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$m]]);
var statusValidator$5 = makeStringTypeValidator(ValidationStatusTypes);
var statusValidator$4 = makeStringTypeValidator(ValidationStatusTypes);
var statusValidator$3 = makeStringTypeValidator(ValidationStatusTypes);
var statusValidator$2 = makeStringTypeValidator(ValidationStatusTypes);
var statusValidator$1 = makeStringTypeValidator(ValidationStatusTypes);
var _sfc_main$c = /* @__PURE__ */ defineComponent({
  name: "CdxSelect",
  components: {
    CdxIcon,
    CdxMenu
  },
  /**
   * We want the select handle to inherit attributes, not the root element.
   */
  inheritAttrs: false,
  props: {
    /**
     * Menu items and/or menu group definitions.
     *
     * Menu groups and individual menu items will be output in the order they appear here.
     */
    menuItems: {
      type: Array,
      required: true
    },
    /**
     * Value of the current selection.
     *
     * Must be bound with `v-model:selected`.
     *
     * The property should be initialized to `null` rather than using a falsy value.
     */
    selected: {
      type: [String, Number, null],
      required: true
    },
    /**
     * Label to display when no selection has been made.
     */
    defaultLabel: {
      type: String,
      default: ""
    },
    /**
     * Name of the input, used for forms.
     */
    name: {
      type: String,
      default: void 0
    },
    /**
     * Whether the dropdown is disabled.
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * Configuration for various menu features. All properties default to false.
     *
     * See the MenuConfig type.
     *
     * @default {}
     */
    menuConfig: {
      type: Object,
      default: () => ({})
    },
    /**
     * An icon at the start of the `<select>` element
     * displayed when no selection has been made.
     */
    defaultIcon: {
      type: [String, Object],
      default: void 0
    },
    /**
     * `status` attribute of the input.
     */
    status: {
      type: String,
      default: "default",
      validator: statusValidator$1
    }
  },
  emits: [
    /**
     * When the selection value changes.
     *
     * @property {string | number | null} modelValue The new model value
     */
    "update:selected",
    /**
     * When the user scrolls towards the bottom of the menu.
     *
     * If it is possible to add or load more menu items, then now would be a good moment
     * so that the user can experience infinite scrolling.
     */
    "load-more"
  ],
  setup(props, {
    emit: emit2,
    attrs
  }) {
    const handle = /* @__PURE__ */ ref();
    const menu = /* @__PURE__ */ ref();
    const descriptionId = inject(FieldDescriptionIdKey, void 0);
    const menuId = useId();
    const expanded = /* @__PURE__ */ ref(false);
    const handleId = attrs.id || useId();
    const {
      computedDisabled,
      computedStatus,
      computedInputId: computedHandleId
    } = useFieldData(/* @__PURE__ */ toRef(props, "disabled"), /* @__PURE__ */ toRef(props, "status"), handleId);
    const modelWrapper = useModelWrapper(/* @__PURE__ */ toRef(props, "selected"), emit2, "update:selected");
    const selectedMenuItem = computed2(() => {
      var _a;
      return (_a = menu.value) == null ? void 0 : _a.getComputedMenuItems().find((menuItem) => menuItem.value === props.selected);
    });
    const currentLabel = computed2(() => {
      var _a;
      return selectedMenuItem.value ? (_a = selectedMenuItem.value.label) != null ? _a : selectedMenuItem.value.value : props.defaultLabel;
    });
    const startIcon = computed2(() => {
      var _a;
      if (props.defaultIcon && !selectedMenuItem.value) {
        return props.defaultIcon;
      } else if ((_a = selectedMenuItem.value) == null ? void 0 : _a.icon) {
        return selectedMenuItem.value.icon;
      }
      return void 0;
    });
    const internalClasses = computed2(() => ({
      "cdx-select-vue--enabled": !computedDisabled.value,
      "cdx-select-vue--disabled": computedDisabled.value,
      "cdx-select-vue--expanded": expanded.value,
      "cdx-select-vue--value-selected": !!selectedMenuItem.value,
      "cdx-select-vue--no-selections": !selectedMenuItem.value,
      "cdx-select-vue--has-start-icon": !!startIcon.value,
      ["cdx-select-vue--status-".concat(computedStatus.value)]: true
    }));
    const {
      rootClasses,
      rootStyle,
      otherAttrs
    } = useSplitAttributes(attrs, internalClasses);
    const otherAttrsMinusId = computed2(() => {
      const _a = otherAttrs.value, {
        id
      } = _a, everythingElse = __objRest(_a, ["id"]);
      return everythingElse;
    });
    const highlightedId = computed2(() => {
      var _a, _b;
      return (_b = (_a = menu.value) == null ? void 0 : _a.getHighlightedMenuItem()) == null ? void 0 : _b.id;
    });
    function onBlur() {
      expanded.value = false;
    }
    function onClick() {
      var _a;
      if (computedDisabled.value) {
        return;
      }
      expanded.value = !expanded.value;
      (_a = handle.value) == null ? void 0 : _a.focus();
    }
    function onKeydown(e) {
      var _a;
      if (computedDisabled.value) {
        return;
      }
      (_a = menu.value) == null ? void 0 : _a.delegateKeyNavigation(e, {
        characterNavigation: true
      });
    }
    useFloatingMenu(handle, menu);
    return {
      handle,
      menu,
      computedHandleId,
      descriptionId,
      menuId,
      modelWrapper,
      selectedMenuItem,
      highlightedId,
      expanded,
      computedDisabled,
      onBlur,
      currentLabel,
      rootClasses,
      rootStyle,
      otherAttrsMinusId,
      onClick,
      onKeydown,
      startIcon,
      cdxIconExpand: F6
    };
  }
});
var _hoisted_1$a = ["aria-disabled"];
var _hoisted_2$5 = ["id", "aria-controls", "aria-activedescendant", "aria-expanded", "aria-describedby"];
var _hoisted_3$4 = ["name", "value"];
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_cdx_icon = resolveComponent("cdx-icon");
  const _component_cdx_menu = resolveComponent("cdx-menu");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["cdx-select-vue", _ctx.rootClasses]),
    style: normalizeStyle(_ctx.rootStyle),
    "aria-disabled": _ctx.computedDisabled
  }, [createBaseVNode("div", mergeProps({
    id: _ctx.computedHandleId,
    ref: "handle",
    class: "cdx-select-vue__handle"
  }, _ctx.otherAttrsMinusId, {
    tabindex: "0",
    role: "combobox",
    "aria-controls": _ctx.menuId,
    "aria-activedescendant": _ctx.highlightedId,
    "aria-expanded": _ctx.expanded,
    "aria-describedby": _ctx.descriptionId,
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args)),
    onBlur: _cache[1] || (_cache[1] = (...args) => _ctx.onBlur && _ctx.onBlur(...args)),
    onKeydown: _cache[2] || (_cache[2] = (...args) => _ctx.onKeydown && _ctx.onKeydown(...args))
  }), [renderSlot(_ctx.$slots, "label", {
    selectedMenuItem: _ctx.selectedMenuItem,
    defaultLabel: _ctx.defaultLabel
  }, () => [createTextVNode(
    toDisplayString(_ctx.currentLabel),
    1
    /* TEXT */
  )]), _ctx.startIcon ? (openBlock(), createBlock(_component_cdx_icon, {
    key: 0,
    icon: _ctx.startIcon,
    class: "cdx-select-vue__start-icon"
  }, null, 8, ["icon"])) : createCommentVNode("v-if", true), createVNode(_component_cdx_icon, {
    icon: _ctx.cdxIconExpand,
    class: "cdx-select-vue__indicator"
  }, null, 8, ["icon"])], 16, _hoisted_2$5), createVNode(_component_cdx_menu, mergeProps({
    id: _ctx.menuId,
    ref: "menu",
    selected: _ctx.modelWrapper,
    "onUpdate:selected": _cache[3] || (_cache[3] = ($event) => _ctx.modelWrapper = $event),
    expanded: _ctx.expanded,
    "onUpdate:expanded": _cache[4] || (_cache[4] = ($event) => _ctx.expanded = $event),
    "menu-items": _ctx.menuItems
  }, _ctx.menuConfig, {
    onLoadMore: _cache[5] || (_cache[5] = ($event) => _ctx.$emit("load-more"))
  }), {
    default: withCtx(({
      menuItem
    }) => [renderSlot(_ctx.$slots, "menu-item", {
      menuItem
    })]),
    _: 3
    /* FORWARDED */
  }, 16, ["id", "selected", "expanded", "menu-items"]), _ctx.name ? (openBlock(), createElementBlock("input", {
    key: 0,
    type: "hidden",
    name: _ctx.name,
    value: _ctx.selected
  }, null, 8, _hoisted_3$4)) : createCommentVNode("v-if", true)], 14, _hoisted_1$a);
}
var CdxSelect = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$c]]);
var tableTextAlignmentsValidator = makeStringTypeValidator(TableTextAlignments);
var paginationPositionValidator = makeStringTypeValidator(TablePaginationPositions);
var statusValidator = makeStringTypeValidator(ValidationStatusTypes);
var buttonSizeValidator = makeStringTypeValidator(ButtonSizes);
var AttributionForm_default = /* @__PURE__ */ defineComponent({
  __name: "AttributionForm",
  props: {
    onChange: {
      type: Function,
      required: true
    },
    onAdd: {
      type: Function,
      required: true
    }
  },
  setup(__props, {
    expose: __expose
  }) {
    __expose();
    const props = __props;
    const source = /* @__PURE__ */ ref("");
    const license = /* @__PURE__ */ ref(null);
    const licenseItems = computed2(() => LICENSES.map(({
      data,
      label
    }) => ({
      value: data,
      label
    })));
    watch2([source, license], ([newSource, newLicense]) => {
      props.onChange(newSource, newLicense ?? "");
    });
    const addToSummary = () => {
      if (props.onAdd(source.value, license.value ?? "")) {
        source.value = "";
        license.value = null;
      }
    };
    const __returned__ = {
      props,
      source,
      license,
      licenseItems,
      addToSummary,
      get CdxButton() {
        return CdxButton;
      },
      get CdxField() {
        return Field;
      },
      get CdxSelect() {
        return CdxSelect;
      },
      get CdxTextInput() {
        return CdxTextInput;
      },
      get getMessage() {
        return getMessage;
      }
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var _hoisted_1 = {
  class: "editform-attribution"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("fieldset", _hoisted_1, [createBaseVNode(
    "legend",
    null,
    toDisplayString($setup.getMessage("Please Claim Sources and Licenses")),
    1
    /* TEXT */
  ), createVNode($setup["CdxField"], null, {
    label: withCtx(() => [createTextVNode(
      toDisplayString($setup.getMessage("Source")),
      1
      /* TEXT */
    )]),
    default: withCtx(() => [createVNode($setup["CdxTextInput"], {
      modelValue: $setup.source,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.source = $event),
      placeholder: $setup.getMessage("Source")
    }, null, 8, ["modelValue", "placeholder"])]),
    _: 1
    /* STABLE */
  }), createVNode($setup["CdxField"], null, {
    label: withCtx(() => [createTextVNode(
      toDisplayString($setup.getMessage("License")),
      1
      /* TEXT */
    )]),
    default: withCtx(() => [createVNode($setup["CdxSelect"], {
      selected: $setup.license,
      "onUpdate:selected": _cache[1] || (_cache[1] = ($event) => $setup.license = $event),
      "menu-items": $setup.licenseItems,
      "default-label": $setup.getMessage("License")
    }, null, 8, ["selected", "menu-items", "default-label"])]),
    _: 1
    /* STABLE */
  }), createVNode($setup["CdxButton"], {
    type: "button",
    weight: "primary",
    onClick: $setup.addToSummary
  }, {
    default: withCtx(() => [createTextVNode(
      toDisplayString($setup.getMessage("Add to Edit Summary")),
      1
      /* TEXT */
    )]),
    _: 1
    /* STABLE */
  })]);
}
//! src/Editform_Attribution/modules/AttributionForm.vue
AttributionForm_default.render = render;
AttributionForm_default.__file = "src\\Editform_Attribution\\modules\\AttributionForm.vue";
AttributionForm_default.__scopeId = "data-v-87a8a10e";
var AttributionForm_default2 = AttributionForm_default;
//! src/Editform_Attribution/modules/util/appendTextToSummary.ts
var appendTextToSummary = ({
  customSummary,
  $wpSummary
}) => {
  const originSummary = $wpSummary.val() ?? "";
  $wpSummary.val(originSummary.trim() ? `${originSummary} ${customSummary}` : customSummary);
};
//! src/Editform_Attribution/modules/util/dialog.ts
var oouiConfirmWithStyle = async (message) => {
  const moduleName = "ext.gadget.UtilDialog";
  const require2 = await mw.loader.using(moduleName);
  const {
    oouiConfirmWithStyle: confirm
  } = require2(moduleName);
  return confirm(message);
};
//! src/Editform_Attribution/modules/util/mountAttributionForm.ts
var mountAttributionForm = ({
  root,
  $body,
  $wpSummary
}) => {
  const updateHiddenFields = (source, license) => {
    updateWpSource({
      $body,
      source
    });
    updateWpLicense({
      $body,
      license
    });
  };
  createApp(AttributionForm_default2, {
    onChange: updateHiddenFields,
    onAdd: async (source, license) => {
      updateHiddenFields(source, license);
      const wpSource = getSource(source);
      const wpLicense = getLicense(license);
      if (wpSource.length && wpLicense.length) {
        const attribution = `${getMessage("Source")}: ${wpSource} (${getMessage("License")}: ${wpLicense}) `;
        if ([getMessage("Replace With License"), getMessage("Other License")].includes(wpLicense)) {
          await oouiConfirmWithStyle(getMessage("Please replace placeholder with actual license"));
        }
        appendTextToSummary({
          customSummary: `[${attribution}]`,
          $wpSummary
        });
        return true;
      }
      if (!wpSource.length && wpLicense.length) {
        await oouiConfirmWithStyle(getMessage("Source is missing"));
      } else if (wpSource.length && !wpLicense.length) {
        await oouiConfirmWithStyle(getMessage("License is missing"));
      } else {
        await oouiConfirmWithStyle(getMessage("Both source and License are missing"));
      }
      return false;
    }
  }).mount(root);
};
//! src/Editform_Attribution/modules/processVisualEditor.ts
var processVisualEditor = ({
  $body
}) => {
  if (mw.config.get(configKeyVe)) {
    return;
  }
  const {
    target
  } = window.ve.init;
  const {
    saveDialog
  } = target;
  const {
    $saveOptions
  } = saveDialog;
  if (!$saveOptions.length) {
    return;
  }
  mw.config.set(configKeyVe, true);
  if (!$body.find(`#${inputId}`).length) {
    const root = document.createElement("div");
    root.id = inputId;
    $saveOptions.append(root);
    mountAttributionForm({
      root,
      $body,
      $wpSummary: target.saveDialog.editSummaryInput.$input
    });
  }
  mw.hook("ve.activationComplete").add(() => {
    if (mw.config.get(configKeyVe)) {
      mw.config.set(configKeyVe, false);
    }
  });
};
//! src/Editform_Attribution/modules/processWikiEditor.ts
var processWikiEditor = ({
  $body,
  $editForm
}) => {
  if (mw.config.get(configKey)) {
    return;
  }
  const $target = $editForm.find(targetWikiEditor);
  if (!$target.length) {
    return;
  }
  mw.config.set(configKey, true);
  if (!$body.find(`#${inputId}`).length) {
    const root = document.createElement("div");
    root.id = inputId;
    $target.after(root);
    mountAttributionForm({
      root,
      $body,
      $wpSummary: $editForm.find("input[name=wpSummary]")
    });
  }
};
//! src/Editform_Attribution/Editform_Attribution.ts
void (0, import_ext_gadget2.getBody)().then(function editForm($body) {
  mw.hook("wikipage.editform").add(($editForm) => {
    processWikiEditor({
      $body,
      $editForm
    });
  });
  mw.hook("ve.saveDialog.stateChanged").add(() => {
    processVisualEditor({
      $body
    });
  });
});

})();

/* </nowiki> */


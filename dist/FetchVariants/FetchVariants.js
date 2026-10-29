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

// dist/FetchVariants/FetchVariants.js
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
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    var _iterator = _createForOfIteratorHelper(__getOwnPropNames(from)), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        let key = _step.value;
        if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);
//! src/FetchVariants/FetchVariants.ts
var FetchVariants_exports = {};
__export(FetchVariants_exports, {
  fetchVariants: () => fetchVariants
});
module.exports = __toCommonJS(FetchVariants_exports);
//! src/FetchVariants/options.json
var storageKey = "ext.gadget.FetchVariants_fetchVariants";
var version = "1.0";
//! src/FetchVariants/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("FetchVariants/".concat(version));
//! src/FetchVariants/modules/constant.ts
var VARIANTS = ["zh", "zh-hans", "zh-cn", "zh-my", "zh-sg", "zh-hant", "zh-hk", "zh-mo", "zh-tw"];
//! src/FetchVariants/modules/generateResult.ts
var generateResult = (result) => Object.fromEntries([...VARIANTS.map((variant) => {
  var _result$querySelector, _result$querySelector2;
  return [variant, (_result$querySelector = (_result$querySelector2 = result.querySelector("#".concat(variant))) === null || _result$querySelector2 === void 0 ? void 0 : _result$querySelector2.textContent) !== null && _result$querySelector !== void 0 ? _result$querySelector : ""];
})]);
//! src/FetchVariants/modules/generateText.ts
var generateText = (string) => '<ul id="fetchvariants">'.concat(VARIANTS.map((variant) => '<li id="'.concat(variant, '">-{').concat(variant, "|").concat(string, "}-</li>")), "</ul>");
//! src/FetchVariants/modules/idb.ts
var import_ext_gadget2 = require("ext.gadget.idb-plus");
var variants = new import_ext_gadget2.IDBPlus(storageKey, "variants");
//! src/FetchVariants/modules/getVariants.ts
var getVariants = /* @__PURE__ */ (function() {
  var _ref = _asyncToGenerator(function* (string) {
    const results = yield variants.get(string);
    if (results) {
      variants.delete(string);
    }
    const params = {
      action: "parse",
      format: "json",
      text: generateText(string),
      title: "temp",
      variant: "zh",
      formatversion: "2"
    };
    try {
      const {
        parse
      } = yield api.get(params);
      const {
        text
      } = parse;
      const result = new DOMParser().parseFromString(text, "text/html");
      const time = Date.now();
      const results2 = {
        string,
        variants: generateResult(result),
        time
      };
      yield variants.set(string, results2);
      return results2;
    } catch {
      return void 0;
    }
  });
  return function getVariants2(_x) {
    return _ref.apply(this, arguments);
  };
})();
//! src/FetchVariants/FetchVariants.ts
var CACHE_DURATION = 24 * 60 * 60 * 1e3;
var fetchVariants = /* @__PURE__ */ (function() {
  var _ref2 = _asyncToGenerator(function* (string) {
    const time = Date.now();
    const results = yield variants.get(string);
    if (results !== null && results !== void 0 && results.time && time - results.time < CACHE_DURATION) {
      return results;
    }
    if (results) {
      yield variants.delete(string);
    }
    return getVariants(string);
  });
  return function fetchVariants2(_x2) {
    return _ref2.apply(this, arguments);
  };
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0ZldGNoVmFyaWFudHMvRmV0Y2hWYXJpYW50cy50cyIsICJzcmMvRmV0Y2hWYXJpYW50cy9vcHRpb25zLmpzb24iLCAic3JjL0ZldGNoVmFyaWFudHMvbW9kdWxlcy9hcGkudHMiLCAic3JjL0ZldGNoVmFyaWFudHMvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvRmV0Y2hWYXJpYW50cy9tb2R1bGVzL2dlbmVyYXRlUmVzdWx0LnRzIiwgInNyYy9GZXRjaFZhcmlhbnRzL21vZHVsZXMvZ2VuZXJhdGVUZXh0LnRzIiwgInNyYy9GZXRjaFZhcmlhbnRzL21vZHVsZXMvaWRiLnRzIiwgInNyYy9GZXRjaFZhcmlhbnRzL21vZHVsZXMvZ2V0VmFyaWFudHMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Z2V0VmFyaWFudHN9IGZyb20gJy4vbW9kdWxlcy9nZXRWYXJpYW50cyc7XG5pbXBvcnQge3ZhcmlhbnRzfSBmcm9tICcuL21vZHVsZXMvaWRiJztcblxuY29uc3QgQ0FDSEVfRFVSQVRJT04gPSAyNCAqIDYwICogNjAgKiAxMDAwO1xuXG5jb25zdCBmZXRjaFZhcmlhbnRzID0gYXN5bmMgKHN0cmluZzogc3RyaW5nKTogUHJvbWlzZTxWYXJpYW50UmVjb3JkIHwgdW5kZWZpbmVkPiA9PiB7XG5cdGNvbnN0IHRpbWUgPSBEYXRlLm5vdygpO1xuXHRjb25zdCByZXN1bHRzID0gYXdhaXQgdmFyaWFudHMuZ2V0KHN0cmluZyk7XG5cblx0aWYgKHJlc3VsdHM/LnRpbWUgJiYgdGltZSAtIHJlc3VsdHMudGltZSA8IENBQ0hFX0RVUkFUSU9OKSB7XG5cdFx0cmV0dXJuIHJlc3VsdHM7XG5cdH1cblxuXHRpZiAocmVzdWx0cykge1xuXHRcdGF3YWl0IHZhcmlhbnRzLmRlbGV0ZShzdHJpbmcpO1xuXHR9XG5cblx0cmV0dXJuIGdldFZhcmlhbnRzKHN0cmluZyk7XG59O1xuXG5leHBvcnQge2ZldGNoVmFyaWFudHN9O1xuIiwgIntcblx0XCJzdG9yYWdlS2V5XCI6IFwiZXh0LmdhZGdldC5GZXRjaFZhcmlhbnRzX2ZldGNoVmFyaWFudHNcIixcblx0XCJ2ZXJzaW9uXCI6IFwiMS4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYEZldGNoVmFyaWFudHMvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJjb25zdCBWQVJJQU5UUzogVmFyaWFudHNbXSA9IFsnemgnLCAnemgtaGFucycsICd6aC1jbicsICd6aC1teScsICd6aC1zZycsICd6aC1oYW50JywgJ3poLWhrJywgJ3poLW1vJywgJ3poLXR3J107XG5cbmV4cG9ydCB7VkFSSUFOVFN9O1xuIiwgImltcG9ydCB7VkFSSUFOVFN9IGZyb20gJy4vY29uc3RhbnQnO1xuXG5jb25zdCBnZW5lcmF0ZVJlc3VsdCA9IChyZXN1bHQ6IERvY3VtZW50KTogVmFyaWFudFJlc3VsdCA9PlxuXHRPYmplY3QuZnJvbUVudHJpZXMoW1xuXHRcdC4uLlZBUklBTlRTLm1hcCgodmFyaWFudCkgPT4gW3ZhcmlhbnQsIHJlc3VsdC5xdWVyeVNlbGVjdG9yKGAjJHt2YXJpYW50fWApPy50ZXh0Q29udGVudCA/PyAnJ10pLFxuXHRdKTtcblxuZXhwb3J0IHtnZW5lcmF0ZVJlc3VsdH07XG4iLCAiaW1wb3J0IHtWQVJJQU5UU30gZnJvbSAnLi9jb25zdGFudCc7XG5cbmNvbnN0IGdlbmVyYXRlVGV4dCA9IChzdHJpbmc6IHN0cmluZykgPT5cblx0YDx1bCBpZD1cImZldGNodmFyaWFudHNcIj4ke1ZBUklBTlRTLm1hcCgodmFyaWFudCkgPT4gYDxsaSBpZD1cIiR7dmFyaWFudH1cIj4teyR7dmFyaWFudH18JHtzdHJpbmd9fS08L2xpPmApfTwvdWw+YDtcblxuZXhwb3J0IHtnZW5lcmF0ZVRleHR9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7SURCUGx1c30gZnJvbSAnZXh0LmdhZGdldC5pZGItcGx1cyc7XG5cbmNvbnN0IHZhcmlhbnRzID0gbmV3IElEQlBsdXM8c3RyaW5nLCBWYXJpYW50UmVjb3JkPihPUFRJT05TLnN0b3JhZ2VLZXksICd2YXJpYW50cycpO1xuXG5leHBvcnQge3ZhcmlhbnRzfTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHtnZW5lcmF0ZVJlc3VsdH0gZnJvbSAnLi9nZW5lcmF0ZVJlc3VsdCc7XG5pbXBvcnQge2dlbmVyYXRlVGV4dH0gZnJvbSAnLi9nZW5lcmF0ZVRleHQnO1xuaW1wb3J0IHt2YXJpYW50c30gZnJvbSAnLi9pZGInO1xuXG5jb25zdCBnZXRWYXJpYW50cyA9IGFzeW5jIChzdHJpbmc6IHN0cmluZyk6IFByb21pc2U8VmFyaWFudFJlY29yZCB8IHVuZGVmaW5lZD4gPT4ge1xuXHRjb25zdCByZXN1bHRzID0gYXdhaXQgdmFyaWFudHMuZ2V0KHN0cmluZyk7XG5cdGlmIChyZXN1bHRzKSB7XG5cdFx0dmFyaWFudHMuZGVsZXRlKHN0cmluZyk7XG5cdH1cblxuXHRjb25zdCBwYXJhbXM6IEFwaVBhcnNlUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHR0ZXh0OiBnZW5lcmF0ZVRleHQoc3RyaW5nKSxcblx0XHR0aXRsZTogJ3RlbXAnLFxuXHRcdHZhcmlhbnQ6ICd6aCcsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHR9O1xuXG5cdHRyeSB7XG5cdFx0Y29uc3Qge3BhcnNlfSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblx0XHRjb25zdCB7dGV4dH0gPSBwYXJzZTtcblx0XHRjb25zdCByZXN1bHQgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKHRleHQsICd0ZXh0L2h0bWwnKTtcblx0XHRjb25zdCB0aW1lID0gRGF0ZS5ub3coKTtcblx0XHRjb25zdCByZXN1bHRzID0ge1xuXHRcdFx0c3RyaW5nLFxuXHRcdFx0dmFyaWFudHM6IGdlbmVyYXRlUmVzdWx0KHJlc3VsdCksXG5cdFx0XHR0aW1lLFxuXHRcdH07XG5cdFx0YXdhaXQgdmFyaWFudHMuc2V0KHN0cmluZywgcmVzdWx0cyk7XG5cdFx0cmV0dXJuIHJlc3VsdHM7XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdH1cbn07XG5cbmV4cG9ydCB7Z2V0VmFyaWFudHN9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsd0JBQUEsQ0FBQTtBQUFBQyxTQUFBRCx1QkFBQTtFQUFBRSxlQUFBQSxNQUFBQTtBQUFBLENBQUE7QUFBQUMsT0FBQUMsVUFBQUMsYUFBQUwscUJBQUE7O0FDQ0MsSUFBQU0sYUFBYztBQUNkLElBQUFDLFVBQVc7O0FDRFosSUFBQUMsb0JBQXdCQyxRQUFBLGlCQUFBO0FBRXhCLElBQU1DLE9BQUEsR0FBY0Ysa0JBQUFHLFdBQUEsaUJBQUFDLE9BQW1DTCxPQUFPLENBQUU7O0FDSGhFLElBQU1NLFdBQXVCLENBQUMsTUFBTSxXQUFXLFNBQVMsU0FBUyxTQUFTLFdBQVcsU0FBUyxTQUFTLE9BQU87O0FDRTlHLElBQU1DLGlCQUFrQkMsWUFDdkJDLE9BQU9DLFlBQVksQ0FDbEIsR0FBR0osU0FBU0ssSUFBS0MsYUFBQTtBQUFBLE1BQUFDLHVCQUFBQztBQUFBLFNBQVksQ0FBQ0YsVUFBQUMseUJBQUFDLHlCQUFTTixPQUFPTyxjQUFBLElBQUFWLE9BQWtCTyxPQUFPLENBQUUsT0FBQSxRQUFBRSwyQkFBQSxTQUFBLFNBQWxDQSx1QkFBcUNFLGlCQUFBLFFBQUFILDBCQUFBLFNBQUFBLHdCQUFlLEVBQUU7QUFBQyxDQUFBLENBQUEsQ0FDOUY7O0FDSEYsSUFBTUksZUFBZ0JDLFlBQUEsMEJBQUFiLE9BQ0tDLFNBQVNLLElBQUtDLGFBQUEsV0FBQVAsT0FBdUJPLFNBQU8sTUFBQSxFQUFBUCxPQUFPTyxTQUFPLEdBQUEsRUFBQVAsT0FBSWEsUUFBTSxTQUFBLENBQVMsR0FBQyxPQUFBOztBQ0Z6RyxJQUFBQyxxQkFBc0JqQixRQUFBLHFCQUFBO0FBRXRCLElBQU1rQixXQUFXLElBQUlELG1CQUFBRSxRQUF1Q3RCLFlBQVksVUFBVTs7QUNFbEYsSUFBTXVCLGNBQUEsNEJBQUE7QUFBQSxNQUFBQyxPQUFBQyxrQkFBYyxXQUFPTixRQUF1RDtBQUNqRixVQUFNTyxVQUFBLE1BQWdCTCxTQUFTTSxJQUFJUixNQUFNO0FBQ3pDLFFBQUlPLFNBQVM7QUFDWkwsZUFBU08sT0FBT1QsTUFBTTtJQUN2QjtBQUVBLFVBQU1VLFNBQXlCO01BQzlCQyxRQUFRO01BQ1JDLFFBQVE7TUFDUkMsTUFBTWQsYUFBYUMsTUFBTTtNQUN6QmMsT0FBTztNQUNQcEIsU0FBUztNQUNUcUIsZUFBZTtJQUNoQjtBQUVBLFFBQUk7QUFDSCxZQUFNO1FBQUNDO01BQUssSUFBQSxNQUFVL0IsSUFBSXVCLElBQUlFLE1BQU07QUFDcEMsWUFBTTtRQUFDRztNQUFJLElBQUlHO0FBQ2YsWUFBTTFCLFNBQVMsSUFBSTJCLFVBQVUsRUFBRUMsZ0JBQWdCTCxNQUFNLFdBQVc7QUFDaEUsWUFBTU0sT0FBT0MsS0FBS0MsSUFBSTtBQUN0QixZQUFNQyxXQUFVO1FBQ2Z0QjtRQUNBRSxVQUFVYixlQUFlQyxNQUFNO1FBQy9CNkI7TUFDRDtBQUNBLFlBQU1qQixTQUFTcUIsSUFBSXZCLFFBQVFzQixRQUFPO0FBQ2xDLGFBQU9BO0lBQ1IsUUFBUTtBQUNQLGFBQU87SUFDUjtFQUNELENBQUE7QUFBQSxTQUFBLFNBOUJNbEIsYUFBQW9CLElBQUE7QUFBQSxXQUFBbkIsS0FBQW9CLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsR0FBQTs7QVBGTixJQUFNQyxpQkFBaUIsS0FBSyxLQUFLLEtBQUs7QUFFdEMsSUFBTWxELGdCQUFBLDRCQUFBO0FBQUEsTUFBQW1ELFFBQUF0QixrQkFBZ0IsV0FBT04sUUFBdUQ7QUFDbkYsVUFBTW1CLE9BQU9DLEtBQUtDLElBQUk7QUFDdEIsVUFBTWQsVUFBQSxNQUFnQkwsU0FBU00sSUFBSVIsTUFBTTtBQUV6QyxRQUFJTyxZQUFBLFFBQUFBLFlBQUEsVUFBQUEsUUFBU1ksUUFBUUEsT0FBT1osUUFBUVksT0FBT1EsZ0JBQWdCO0FBQzFELGFBQU9wQjtJQUNSO0FBRUEsUUFBSUEsU0FBUztBQUNaLFlBQU1MLFNBQVNPLE9BQU9ULE1BQU07SUFDN0I7QUFFQSxXQUFPSSxZQUFZSixNQUFNO0VBQzFCLENBQUE7QUFBQSxTQUFBLFNBYk12QixlQUFBb0QsS0FBQTtBQUFBLFdBQUFELE1BQUFILE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsR0FBQTsiLAogICJuYW1lcyI6IFsiRmV0Y2hWYXJpYW50c19leHBvcnRzIiwgIl9fZXhwb3J0IiwgImZldGNoVmFyaWFudHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAiX190b0NvbW1vbkpTIiwgInN0b3JhZ2VLZXkiLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImFwaSIsICJpbml0TXdBcGkiLCAiY29uY2F0IiwgIlZBUklBTlRTIiwgImdlbmVyYXRlUmVzdWx0IiwgInJlc3VsdCIsICJPYmplY3QiLCAiZnJvbUVudHJpZXMiLCAibWFwIiwgInZhcmlhbnQiLCAiX3Jlc3VsdCRxdWVyeVNlbGVjdG9yIiwgIl9yZXN1bHQkcXVlcnlTZWxlY3RvcjIiLCAicXVlcnlTZWxlY3RvciIsICJ0ZXh0Q29udGVudCIsICJnZW5lcmF0ZVRleHQiLCAic3RyaW5nIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJ2YXJpYW50cyIsICJJREJQbHVzIiwgImdldFZhcmlhbnRzIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAicmVzdWx0cyIsICJnZXQiLCAiZGVsZXRlIiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgInRleHQiLCAidGl0bGUiLCAiZm9ybWF0dmVyc2lvbiIsICJwYXJzZSIsICJET01QYXJzZXIiLCAicGFyc2VGcm9tU3RyaW5nIiwgInRpbWUiLCAiRGF0ZSIsICJub3ciLCAicmVzdWx0czIiLCAic2V0IiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJDQUNIRV9EVVJBVElPTiIsICJfcmVmMiIsICJfeDIiXQp9Cg==

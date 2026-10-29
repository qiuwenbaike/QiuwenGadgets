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
//! src/FetchVariants/FetchVariants.ts
var import_ext_gadget2 = require("ext.gadget.idb-plus");
//! src/FetchVariants/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("FetchVariants/".concat(version));
//! src/FetchVariants/modules/constant.ts
var VARIANTS = ["zh", "zh-hans", "zh-cn", "zh-my", "zh-sg", "zh-hant", "zh-hk", "zh-mo", "zh-tw"];
//! src/FetchVariants/modules/generateText.ts
var generateText = (string) => '<ul id="fetchvariants">'.concat(VARIANTS.map((variant) => '<li id="'.concat(variant, '">-{').concat(variant, "|").concat(string, "}-</li>")), "</ul>");
//! src/FetchVariants/modules/generateVariants.ts
var generateVariantResult = (result) => Object.fromEntries([...VARIANTS.map((variant) => {
  var _result$querySelector, _result$querySelector2;
  return [variant, (_result$querySelector = (_result$querySelector2 = result.querySelector("#".concat(variant))) === null || _result$querySelector2 === void 0 ? void 0 : _result$querySelector2.textContent) !== null && _result$querySelector !== void 0 ? _result$querySelector : ""];
})]);
//! src/FetchVariants/FetchVariants.ts
var fetchVariants = /* @__PURE__ */ (function() {
  var _ref = _asyncToGenerator(function* (string) {
    const variants = new import_ext_gadget2.IDBPlus(storageKey, "variants");
    if (yield variants.get(string)) {
      return variants.get(string);
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
      const results = {
        string,
        variants: generateVariantResult(result)
      };
      yield variants.set(string, results);
      return results;
    } catch {
      return void 0;
    }
  });
  return function fetchVariants2(_x) {
    return _ref.apply(this, arguments);
  };
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0ZldGNoVmFyaWFudHMvRmV0Y2hWYXJpYW50cy50cyIsICJzcmMvRmV0Y2hWYXJpYW50cy9vcHRpb25zLmpzb24iLCAic3JjL0ZldGNoVmFyaWFudHMvbW9kdWxlcy9hcGkudHMiLCAic3JjL0ZldGNoVmFyaWFudHMvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvRmV0Y2hWYXJpYW50cy9tb2R1bGVzL2dlbmVyYXRlVGV4dC50cyIsICJzcmMvRmV0Y2hWYXJpYW50cy9tb2R1bGVzL2dlbmVyYXRlVmFyaWFudHMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtJREJQbHVzfSBmcm9tICdleHQuZ2FkZ2V0LmlkYi1wbHVzJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL21vZHVsZXMvYXBpJztcbmltcG9ydCB7Z2VuZXJhdGVUZXh0fSBmcm9tICcuL21vZHVsZXMvZ2VuZXJhdGVUZXh0JztcbmltcG9ydCB7Z2VuZXJhdGVWYXJpYW50UmVzdWx0fSBmcm9tICcuL21vZHVsZXMvZ2VuZXJhdGVWYXJpYW50cyc7XG5cbmNvbnN0IGZldGNoVmFyaWFudHMgPSBhc3luYyAoc3RyaW5nOiBzdHJpbmcpOiBQcm9taXNlPFZhcmlhbnRSZWNvcmQgfCB1bmRlZmluZWQ+ID0+IHtcblx0Y29uc3QgdmFyaWFudHMgPSBuZXcgSURCUGx1czxzdHJpbmcsIFZhcmlhbnRSZWNvcmQ+KE9QVElPTlMuc3RvcmFnZUtleSwgJ3ZhcmlhbnRzJyk7XG5cblx0aWYgKGF3YWl0IHZhcmlhbnRzLmdldChzdHJpbmcpKSB7XG5cdFx0cmV0dXJuIHZhcmlhbnRzLmdldChzdHJpbmcpO1xuXHR9XG5cblx0Y29uc3QgcGFyYW1zOiBBcGlQYXJzZVBhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0dGV4dDogZ2VuZXJhdGVUZXh0KHN0cmluZyksXG5cdFx0dGl0bGU6ICd0ZW1wJyxcblx0XHR2YXJpYW50OiAnemgnLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0fTtcblx0dHJ5IHtcblx0XHRjb25zdCB7cGFyc2V9ID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXHRcdGNvbnN0IHt0ZXh0fSA9IHBhcnNlO1xuXHRcdGNvbnN0IHJlc3VsdCA9IG5ldyBET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcodGV4dCwgJ3RleHQvaHRtbCcpO1xuXHRcdGNvbnN0IHJlc3VsdHMgPSB7XG5cdFx0XHRzdHJpbmcsXG5cdFx0XHR2YXJpYW50czogZ2VuZXJhdGVWYXJpYW50UmVzdWx0KHJlc3VsdCksXG5cdFx0fTtcblx0XHRhd2FpdCB2YXJpYW50cy5zZXQoc3RyaW5nLCByZXN1bHRzKTtcblx0XHRyZXR1cm4gcmVzdWx0cztcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0fVxufTtcblxuZXhwb3J0IHtmZXRjaFZhcmlhbnRzfTtcbiIsICJ7XG5cdFwic3RvcmFnZUtleVwiOiBcImV4dC5nYWRnZXQuRmV0Y2hWYXJpYW50c19mZXRjaFZhcmlhbnRzXCIsXG5cdFwidmVyc2lvblwiOiBcIjEuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBGZXRjaFZhcmlhbnRzLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiY29uc3QgVkFSSUFOVFM6IFZhcmlhbnRzW10gPSBbJ3poJywgJ3poLWhhbnMnLCAnemgtY24nLCAnemgtbXknLCAnemgtc2cnLCAnemgtaGFudCcsICd6aC1oaycsICd6aC1tbycsICd6aC10dyddO1xuXG5leHBvcnQge1ZBUklBTlRTfTtcbiIsICJpbXBvcnQge1ZBUklBTlRTfSBmcm9tICcuL2NvbnN0YW50JztcblxuY29uc3QgZ2VuZXJhdGVUZXh0ID0gKHN0cmluZzogc3RyaW5nKSA9PlxuXHRgPHVsIGlkPVwiZmV0Y2h2YXJpYW50c1wiPiR7VkFSSUFOVFMubWFwKCh2YXJpYW50KSA9PiBgPGxpIGlkPVwiJHt2YXJpYW50fVwiPi17JHt2YXJpYW50fXwke3N0cmluZ319LTwvbGk+YCl9PC91bD5gO1xuXG5leHBvcnQge2dlbmVyYXRlVGV4dH07XG4iLCAiaW1wb3J0IHtWQVJJQU5UU30gZnJvbSAnLi9jb25zdGFudCc7XG5cbmNvbnN0IGdlbmVyYXRlVmFyaWFudFJlc3VsdCA9IChyZXN1bHQ6IERvY3VtZW50KTogVmFyaWFudFJlc3VsdCA9PlxuXHRPYmplY3QuZnJvbUVudHJpZXMoW1xuXHRcdC4uLlZBUklBTlRTLm1hcCgodmFyaWFudCkgPT4gW3ZhcmlhbnQsIHJlc3VsdC5xdWVyeVNlbGVjdG9yKGAjJHt2YXJpYW50fWApPy50ZXh0Q29udGVudCA/PyAnJ10pLFxuXHRdKTtcblxuZXhwb3J0IHtnZW5lcmF0ZVZhcmlhbnRSZXN1bHR9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsd0JBQUEsQ0FBQTtBQUFBQyxTQUFBRCx1QkFBQTtFQUFBRSxlQUFBQSxNQUFBQTtBQUFBLENBQUE7QUFBQUMsT0FBQUMsVUFBQUMsYUFBQUwscUJBQUE7O0FDQ0MsSUFBQU0sYUFBYztBQUNkLElBQUFDLFVBQVc7O0FERFosSUFBQUMscUJBQXNCQyxRQUFBLHFCQUFBOztBRUF0QixJQUFBQyxvQkFBd0JELFFBQUEsaUJBQUE7QUFFeEIsSUFBTUUsT0FBQSxHQUFjRCxrQkFBQUUsV0FBQSxpQkFBQUMsT0FBbUNOLE9BQU8sQ0FBRTs7QUNIaEUsSUFBTU8sV0FBdUIsQ0FBQyxNQUFNLFdBQVcsU0FBUyxTQUFTLFNBQVMsV0FBVyxTQUFTLFNBQVMsT0FBTzs7QUNFOUcsSUFBTUMsZUFBZ0JDLFlBQUEsMEJBQUFILE9BQ0tDLFNBQVNHLElBQUtDLGFBQUEsV0FBQUwsT0FBdUJLLFNBQU8sTUFBQSxFQUFBTCxPQUFPSyxTQUFPLEdBQUEsRUFBQUwsT0FBSUcsUUFBTSxTQUFBLENBQVMsR0FBQyxPQUFBOztBQ0R6RyxJQUFNRyx3QkFBeUJDLFlBQzlCQyxPQUFPQyxZQUFZLENBQ2xCLEdBQUdSLFNBQVNHLElBQUtDLGFBQUE7QUFBQSxNQUFBSyx1QkFBQUM7QUFBQSxTQUFZLENBQUNOLFVBQUFLLHlCQUFBQyx5QkFBU0osT0FBT0ssY0FBQSxJQUFBWixPQUFrQkssT0FBTyxDQUFFLE9BQUEsUUFBQU0sMkJBQUEsU0FBQSxTQUFsQ0EsdUJBQXFDRSxpQkFBQSxRQUFBSCwwQkFBQSxTQUFBQSx3QkFBZSxFQUFFO0FBQUMsQ0FBQSxDQUFBLENBQzlGOztBTENGLElBQU1yQixnQkFBQSw0QkFBQTtBQUFBLE1BQUF5QixPQUFBQyxrQkFBZ0IsV0FBT1osUUFBdUQ7QUFDbkYsVUFBTWEsV0FBVyxJQUFJckIsbUJBQUFzQixRQUF1Q3hCLFlBQVksVUFBVTtBQUVsRixRQUFBLE1BQVV1QixTQUFTRSxJQUFJZixNQUFNLEdBQUc7QUFDL0IsYUFBT2EsU0FBU0UsSUFBSWYsTUFBTTtJQUMzQjtBQUVBLFVBQU1nQixTQUF5QjtNQUM5QkMsUUFBUTtNQUNSQyxRQUFRO01BQ1JDLE1BQU1wQixhQUFhQyxNQUFNO01BQ3pCb0IsT0FBTztNQUNQbEIsU0FBUztNQUNUbUIsZUFBZTtJQUNoQjtBQUNBLFFBQUk7QUFDSCxZQUFNO1FBQUNDO01BQUssSUFBQSxNQUFVM0IsSUFBSW9CLElBQUlDLE1BQU07QUFDcEMsWUFBTTtRQUFDRztNQUFJLElBQUlHO0FBQ2YsWUFBTWxCLFNBQVMsSUFBSW1CLFVBQVUsRUFBRUMsZ0JBQWdCTCxNQUFNLFdBQVc7QUFDaEUsWUFBTU0sVUFBVTtRQUNmekI7UUFDQWEsVUFBVVYsc0JBQXNCQyxNQUFNO01BQ3ZDO0FBQ0EsWUFBTVMsU0FBU2EsSUFBSTFCLFFBQVF5QixPQUFPO0FBQ2xDLGFBQU9BO0lBQ1IsUUFBUTtBQUNQLGFBQU87SUFDUjtFQUNELENBQUE7QUFBQSxTQUFBLFNBNUJNdkMsZUFBQXlDLElBQUE7QUFBQSxXQUFBaEIsS0FBQWlCLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsR0FBQTsiLAogICJuYW1lcyI6IFsiRmV0Y2hWYXJpYW50c19leHBvcnRzIiwgIl9fZXhwb3J0IiwgImZldGNoVmFyaWFudHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAiX190b0NvbW1vbkpTIiwgInN0b3JhZ2VLZXkiLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNvbmNhdCIsICJWQVJJQU5UUyIsICJnZW5lcmF0ZVRleHQiLCAic3RyaW5nIiwgIm1hcCIsICJ2YXJpYW50IiwgImdlbmVyYXRlVmFyaWFudFJlc3VsdCIsICJyZXN1bHQiLCAiT2JqZWN0IiwgImZyb21FbnRyaWVzIiwgIl9yZXN1bHQkcXVlcnlTZWxlY3RvciIsICJfcmVzdWx0JHF1ZXJ5U2VsZWN0b3IyIiwgInF1ZXJ5U2VsZWN0b3IiLCAidGV4dENvbnRlbnQiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJ2YXJpYW50cyIsICJJREJQbHVzIiwgImdldCIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJ0ZXh0IiwgInRpdGxlIiwgImZvcm1hdHZlcnNpb24iLCAicGFyc2UiLCAiRE9NUGFyc2VyIiwgInBhcnNlRnJvbVN0cmluZyIsICJyZXN1bHRzIiwgInNldCIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiXQp9Cg==

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
//! src/FetchVariants/FetchVariants.tsx
var FetchVariants_exports = {};
__export(FetchVariants_exports, {
  fetchVariants: () => fetchVariants
});
module.exports = __toCommonJS(FetchVariants_exports);
//! src/FetchVariants/options.json
var storageKey = "ext.gadget.FetchVariants_fetchVariants";
var version = "1.0";
//! src/FetchVariants/FetchVariants.tsx
var import_ext_gadget2 = require("ext.gadget.idb-plus");
//! src/FetchVariants/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("FetchVariants/".concat(version));
//! src/FetchVariants/modules/generateText.ts
var generateText = (string) => '<ul id="fetchvariants">\n		<li id="zh">-{zh|'.concat(string, '}-</li>\n		<li id="zh-hans">-{zh-hans|').concat(string, '}-</li>\n		<li id="zh-hant">-{zh-hant|').concat(string, '}-</li>\n		<li id="zh-cn">-{zh-cn|').concat(string, '}-</li>\n		<li id="zh-hk">-{zh-hk|').concat(string, '}-</li>\n		<li id="zh-mo">-{zh-mo|').concat(string, '}-</li>\n		<li id="zh-my">-{zh-my|').concat(string, '}-</li>\n		<li id="zh-sg">-{zh-sg|').concat(string, '}-</li>\n		<li id="zh-tw">-{zh-tw|').concat(string, "}-</li>\n	</ul>");
//! src/FetchVariants/FetchVariants.tsx
var variants = new import_ext_gadget2.IDBPlus(storageKey, "variants");
var fetchVariants = /* @__PURE__ */ (function() {
  var _ref = _asyncToGenerator(function* (string) {
    if (yield variants.get(string)) {
      return variants.get(string);
    }
    const params = {
      action: "parse",
      format: "json",
      text: generateText(string),
      title: "temp",
      variant: "zh"
    };
    try {
      const {
        parse
      } = yield api.get(params);
      const {
        text
      } = parse;
      const $result = $(text);
      const results = {
        string,
        variants: {
          zh: $result.find("#zh").text(),
          "zh-hans": $result.find("#zh-hans").text(),
          "zh-hant": $result.find("#zh-hant").text(),
          "zh-cn": $result.find("#zh-cn").text(),
          "zh-hk": $result.find("#zh-hk").text(),
          "zh-mo": $result.find("#zh-mo").text(),
          "zh-my": $result.find("#zh-my").text(),
          "zh-sg": $result.find("#zh-sg").text(),
          "zh-tw": $result.find("#zh-tw").text()
        }
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0ZldGNoVmFyaWFudHMvRmV0Y2hWYXJpYW50cy50c3giLCAic3JjL0ZldGNoVmFyaWFudHMvb3B0aW9ucy5qc29uIiwgInNyYy9GZXRjaFZhcmlhbnRzL21vZHVsZXMvYXBpLnRzIiwgInNyYy9GZXRjaFZhcmlhbnRzL21vZHVsZXMvZ2VuZXJhdGVUZXh0LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7SURCUGx1c30gZnJvbSAnZXh0LmdhZGdldC5pZGItcGx1cyc7XG5pbXBvcnQge3R5cGUgTGFuZ3N9IGZyb20gJy4vbW9kdWxlcy9jb25zdGFudCc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9tb2R1bGVzL2FwaSc7XG5pbXBvcnQge2dlbmVyYXRlVGV4dH0gZnJvbSAnLi9tb2R1bGVzL2dlbmVyYXRlVGV4dCc7XG50eXBlIFZhcmlhbnRSZWNvcmQgPSB7c3RyaW5nOiBzdHJpbmc7IHZhcmlhbnRzOiBSZWNvcmQ8TGFuZ3MsIHN0cmluZz59O1xuXG5jb25zdCB2YXJpYW50cyA9IG5ldyBJREJQbHVzPHN0cmluZywgVmFyaWFudFJlY29yZD4oT1BUSU9OUy5zdG9yYWdlS2V5LCAndmFyaWFudHMnKTtcblxuY29uc3QgZmV0Y2hWYXJpYW50cyA9IGFzeW5jIChzdHJpbmc6IHN0cmluZyk6IFByb21pc2U8VmFyaWFudFJlY29yZCB8IHVuZGVmaW5lZD4gPT4ge1xuXHRpZiAoYXdhaXQgdmFyaWFudHMuZ2V0KHN0cmluZykpIHtcblx0XHRyZXR1cm4gdmFyaWFudHMuZ2V0KHN0cmluZyk7XG5cdH1cblxuXHRjb25zdCBwYXJhbXM6IEFwaVBhcnNlUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHR0ZXh0OiBnZW5lcmF0ZVRleHQoc3RyaW5nKSxcblx0XHR0aXRsZTogJ3RlbXAnLFxuXHRcdHZhcmlhbnQ6ICd6aCcsXG5cdH07XG5cdHRyeSB7XG5cdFx0Y29uc3Qge3BhcnNlfSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblx0XHRjb25zdCB7dGV4dH0gPSBwYXJzZTtcblx0XHRjb25zdCAkcmVzdWx0ID0gJCh0ZXh0KTtcblx0XHRjb25zdCByZXN1bHRzID0ge1xuXHRcdFx0c3RyaW5nLFxuXHRcdFx0dmFyaWFudHM6IHtcblx0XHRcdFx0emg6ICRyZXN1bHQuZmluZCgnI3poJykudGV4dCgpLFxuXHRcdFx0XHQnemgtaGFucyc6ICRyZXN1bHQuZmluZCgnI3poLWhhbnMnKS50ZXh0KCksXG5cdFx0XHRcdCd6aC1oYW50JzogJHJlc3VsdC5maW5kKCcjemgtaGFudCcpLnRleHQoKSxcblx0XHRcdFx0J3poLWNuJzogJHJlc3VsdC5maW5kKCcjemgtY24nKS50ZXh0KCksXG5cdFx0XHRcdCd6aC1oayc6ICRyZXN1bHQuZmluZCgnI3poLWhrJykudGV4dCgpLFxuXHRcdFx0XHQnemgtbW8nOiAkcmVzdWx0LmZpbmQoJyN6aC1tbycpLnRleHQoKSxcblx0XHRcdFx0J3poLW15JzogJHJlc3VsdC5maW5kKCcjemgtbXknKS50ZXh0KCksXG5cdFx0XHRcdCd6aC1zZyc6ICRyZXN1bHQuZmluZCgnI3poLXNnJykudGV4dCgpLFxuXHRcdFx0XHQnemgtdHcnOiAkcmVzdWx0LmZpbmQoJyN6aC10dycpLnRleHQoKSxcblx0XHRcdH0sXG5cdFx0fTtcblx0XHRhd2FpdCB2YXJpYW50cy5zZXQoc3RyaW5nLCByZXN1bHRzKTtcblx0XHRyZXR1cm4gcmVzdWx0cztcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0fVxufTtcblxuZXhwb3J0IHtmZXRjaFZhcmlhbnRzfTtcbiIsICJ7XG5cdFwic3RvcmFnZUtleVwiOiBcImV4dC5nYWRnZXQuRmV0Y2hWYXJpYW50c19mZXRjaFZhcmlhbnRzXCIsXG5cdFwidmVyc2lvblwiOiBcIjEuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBGZXRjaFZhcmlhbnRzLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiY29uc3QgZ2VuZXJhdGVUZXh0ID0gKHN0cmluZzogc3RyaW5nKSA9PlxuXHRgPHVsIGlkPVwiZmV0Y2h2YXJpYW50c1wiPlxuXHRcdDxsaSBpZD1cInpoXCI+LXt6aHwke3N0cmluZ319LTwvbGk+XG5cdFx0PGxpIGlkPVwiemgtaGFuc1wiPi17emgtaGFuc3wke3N0cmluZ319LTwvbGk+XG5cdFx0PGxpIGlkPVwiemgtaGFudFwiPi17emgtaGFudHwke3N0cmluZ319LTwvbGk+XG5cdFx0PGxpIGlkPVwiemgtY25cIj4te3poLWNufCR7c3RyaW5nfX0tPC9saT5cblx0XHQ8bGkgaWQ9XCJ6aC1oa1wiPi17emgtaGt8JHtzdHJpbmd9fS08L2xpPlxuXHRcdDxsaSBpZD1cInpoLW1vXCI+LXt6aC1tb3wke3N0cmluZ319LTwvbGk+XG5cdFx0PGxpIGlkPVwiemgtbXlcIj4te3poLW15fCR7c3RyaW5nfX0tPC9saT5cblx0XHQ8bGkgaWQ9XCJ6aC1zZ1wiPi17emgtc2d8JHtzdHJpbmd9fS08L2xpPlxuXHRcdDxsaSBpZD1cInpoLXR3XCI+LXt6aC10d3wke3N0cmluZ319LTwvbGk+XG5cdDwvdWw+YDtcblxuZXhwb3J0IHtnZW5lcmF0ZVRleHR9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsd0JBQUEsQ0FBQTtBQUFBQyxTQUFBRCx1QkFBQTtFQUFBRSxlQUFBQSxNQUFBQTtBQUFBLENBQUE7QUFBQUMsT0FBQUMsVUFBQUMsYUFBQUwscUJBQUE7O0FDQ0MsSUFBQU0sYUFBYztBQUNkLElBQUFDLFVBQVc7O0FERFosSUFBQUMscUJBQXNCQyxRQUFBLHFCQUFBOztBRUF0QixJQUFBQyxvQkFBd0JELFFBQUEsaUJBQUE7QUFFeEIsSUFBTUUsT0FBQSxHQUFjRCxrQkFBQUUsV0FBQSxpQkFBQUMsT0FBbUNOLE9BQU8sQ0FBRTs7QUNIaEUsSUFBTU8sZUFBZ0JDLFlBQUEsK0NBQUFGLE9BRURFLFFBQU0sd0NBQUEsRUFBQUYsT0FDSUUsUUFBTSx3Q0FBQSxFQUFBRixPQUNORSxRQUFNLG9DQUFBLEVBQUFGLE9BQ1ZFLFFBQU0sb0NBQUEsRUFBQUYsT0FDTkUsUUFBTSxvQ0FBQSxFQUFBRixPQUNORSxRQUFNLG9DQUFBLEVBQUFGLE9BQ05FLFFBQU0sb0NBQUEsRUFBQUYsT0FDTkUsUUFBTSxvQ0FBQSxFQUFBRixPQUNORSxRQUFNLGlCQUFBOztBSEhqQyxJQUFNQyxXQUFXLElBQUlSLG1CQUFBUyxRQUF1Q1gsWUFBWSxVQUFVO0FBRWxGLElBQU1KLGdCQUFBLDRCQUFBO0FBQUEsTUFBQWdCLE9BQUFDLGtCQUFnQixXQUFPSixRQUF1RDtBQUNuRixRQUFBLE1BQVVDLFNBQVNJLElBQUlMLE1BQU0sR0FBRztBQUMvQixhQUFPQyxTQUFTSSxJQUFJTCxNQUFNO0lBQzNCO0FBRUEsVUFBTU0sU0FBeUI7TUFDOUJDLFFBQVE7TUFDUkMsUUFBUTtNQUNSQyxNQUFNVixhQUFhQyxNQUFNO01BQ3pCVSxPQUFPO01BQ1BDLFNBQVM7SUFDVjtBQUNBLFFBQUk7QUFDSCxZQUFNO1FBQUNDO01BQUssSUFBQSxNQUFVaEIsSUFBSVMsSUFBSUMsTUFBTTtBQUNwQyxZQUFNO1FBQUNHO01BQUksSUFBSUc7QUFDZixZQUFNQyxVQUFVQyxFQUFFTCxJQUFJO0FBQ3RCLFlBQU1NLFVBQVU7UUFDZmY7UUFDQUMsVUFBVTtVQUNUZSxJQUFJSCxRQUFRSSxLQUFLLEtBQUssRUFBRVIsS0FBSztVQUM3QixXQUFXSSxRQUFRSSxLQUFLLFVBQVUsRUFBRVIsS0FBSztVQUN6QyxXQUFXSSxRQUFRSSxLQUFLLFVBQVUsRUFBRVIsS0FBSztVQUN6QyxTQUFTSSxRQUFRSSxLQUFLLFFBQVEsRUFBRVIsS0FBSztVQUNyQyxTQUFTSSxRQUFRSSxLQUFLLFFBQVEsRUFBRVIsS0FBSztVQUNyQyxTQUFTSSxRQUFRSSxLQUFLLFFBQVEsRUFBRVIsS0FBSztVQUNyQyxTQUFTSSxRQUFRSSxLQUFLLFFBQVEsRUFBRVIsS0FBSztVQUNyQyxTQUFTSSxRQUFRSSxLQUFLLFFBQVEsRUFBRVIsS0FBSztVQUNyQyxTQUFTSSxRQUFRSSxLQUFLLFFBQVEsRUFBRVIsS0FBSztRQUN0QztNQUNEO0FBQ0EsWUFBTVIsU0FBU2lCLElBQUlsQixRQUFRZSxPQUFPO0FBQ2xDLGFBQU9BO0lBQ1IsUUFBUTtBQUNQLGFBQU87SUFDUjtFQUNELENBQUE7QUFBQSxTQUFBLFNBbkNNNUIsZUFBQWdDLElBQUE7QUFBQSxXQUFBaEIsS0FBQWlCLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsR0FBQTsiLAogICJuYW1lcyI6IFsiRmV0Y2hWYXJpYW50c19leHBvcnRzIiwgIl9fZXhwb3J0IiwgImZldGNoVmFyaWFudHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAiX190b0NvbW1vbkpTIiwgInN0b3JhZ2VLZXkiLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNvbmNhdCIsICJnZW5lcmF0ZVRleHQiLCAic3RyaW5nIiwgInZhcmlhbnRzIiwgIklEQlBsdXMiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJnZXQiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAidGV4dCIsICJ0aXRsZSIsICJ2YXJpYW50IiwgInBhcnNlIiwgIiRyZXN1bHQiLCAiJCIsICJyZXN1bHRzIiwgInpoIiwgImZpbmQiLCAic2V0IiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyJdCn0K

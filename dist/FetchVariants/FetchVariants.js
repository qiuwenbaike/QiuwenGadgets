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
//! src/FetchVariants/modules/generateText.ts
var generateText = (string) => '<ul id="fetchvariants">\n		<li id="zh">-{zh|'.concat(string, '}-</li>\n		<li id="zh-hans">-{zh-hans|').concat(string, '}-</li>\n		<li id="zh-hant">-{zh-hant|').concat(string, '}-</li>\n		<li id="zh-cn">-{zh-cn|').concat(string, '}-</li>\n		<li id="zh-hk">-{zh-hk|').concat(string, '}-</li>\n		<li id="zh-mo">-{zh-mo|').concat(string, '}-</li>\n		<li id="zh-my">-{zh-my|').concat(string, '}-</li>\n		<li id="zh-sg">-{zh-sg|').concat(string, '}-</li>\n		<li id="zh-tw">-{zh-tw|').concat(string, "}-</li>\n	</ul>");
//! src/FetchVariants/FetchVariants.ts
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
      variant: "zh",
      formatversion: "2"
    };
    try {
      var _result$querySelector, _result$querySelector2, _result$querySelector3, _result$querySelector4, _result$querySelector5, _result$querySelector6, _result$querySelector7, _result$querySelector8, _result$querySelector9, _result$querySelector0, _result$querySelector1, _result$querySelector10, _result$querySelector11, _result$querySelector12, _result$querySelector13, _result$querySelector14, _result$querySelector15, _result$querySelector16;
      const {
        parse
      } = yield api.get(params);
      const {
        text
      } = parse;
      const result = new DOMParser().parseFromString(text, "text/html");
      const results = {
        string,
        variants: {
          zh: (_result$querySelector = (_result$querySelector2 = result.querySelector("#zh")) === null || _result$querySelector2 === void 0 ? void 0 : _result$querySelector2.textContent) !== null && _result$querySelector !== void 0 ? _result$querySelector : "",
          "zh-hans": (_result$querySelector3 = (_result$querySelector4 = result.querySelector("#zh-hans")) === null || _result$querySelector4 === void 0 ? void 0 : _result$querySelector4.textContent) !== null && _result$querySelector3 !== void 0 ? _result$querySelector3 : "",
          "zh-hant": (_result$querySelector5 = (_result$querySelector6 = result.querySelector("#zh-hant")) === null || _result$querySelector6 === void 0 ? void 0 : _result$querySelector6.textContent) !== null && _result$querySelector5 !== void 0 ? _result$querySelector5 : "",
          "zh-cn": (_result$querySelector7 = (_result$querySelector8 = result.querySelector("#zh-cn")) === null || _result$querySelector8 === void 0 ? void 0 : _result$querySelector8.textContent) !== null && _result$querySelector7 !== void 0 ? _result$querySelector7 : "",
          "zh-hk": (_result$querySelector9 = (_result$querySelector0 = result.querySelector("#zh-hk")) === null || _result$querySelector0 === void 0 ? void 0 : _result$querySelector0.textContent) !== null && _result$querySelector9 !== void 0 ? _result$querySelector9 : "",
          "zh-mo": (_result$querySelector1 = (_result$querySelector10 = result.querySelector("#zh-mo")) === null || _result$querySelector10 === void 0 ? void 0 : _result$querySelector10.textContent) !== null && _result$querySelector1 !== void 0 ? _result$querySelector1 : "",
          "zh-my": (_result$querySelector11 = (_result$querySelector12 = result.querySelector("#zh-my")) === null || _result$querySelector12 === void 0 ? void 0 : _result$querySelector12.textContent) !== null && _result$querySelector11 !== void 0 ? _result$querySelector11 : "",
          "zh-sg": (_result$querySelector13 = (_result$querySelector14 = result.querySelector("#zh-sg")) === null || _result$querySelector14 === void 0 ? void 0 : _result$querySelector14.textContent) !== null && _result$querySelector13 !== void 0 ? _result$querySelector13 : "",
          "zh-tw": (_result$querySelector15 = (_result$querySelector16 = result.querySelector("#zh-tw")) === null || _result$querySelector16 === void 0 ? void 0 : _result$querySelector16.textContent) !== null && _result$querySelector15 !== void 0 ? _result$querySelector15 : ""
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0ZldGNoVmFyaWFudHMvRmV0Y2hWYXJpYW50cy50cyIsICJzcmMvRmV0Y2hWYXJpYW50cy9vcHRpb25zLmpzb24iLCAic3JjL0ZldGNoVmFyaWFudHMvbW9kdWxlcy9hcGkudHMiLCAic3JjL0ZldGNoVmFyaWFudHMvbW9kdWxlcy9nZW5lcmF0ZVRleHQudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtJREJQbHVzfSBmcm9tICdleHQuZ2FkZ2V0LmlkYi1wbHVzJztcbmltcG9ydCB7dHlwZSBMYW5nc30gZnJvbSAnLi9tb2R1bGVzL2NvbnN0YW50JztcbmltcG9ydCB7YXBpfSBmcm9tICcuL21vZHVsZXMvYXBpJztcbmltcG9ydCB7Z2VuZXJhdGVUZXh0fSBmcm9tICcuL21vZHVsZXMvZ2VuZXJhdGVUZXh0JztcbnR5cGUgVmFyaWFudFJlY29yZCA9IHtzdHJpbmc6IHN0cmluZzsgdmFyaWFudHM6IFJlY29yZDxMYW5ncywgc3RyaW5nPn07XG5cbmNvbnN0IHZhcmlhbnRzID0gbmV3IElEQlBsdXM8c3RyaW5nLCBWYXJpYW50UmVjb3JkPihPUFRJT05TLnN0b3JhZ2VLZXksICd2YXJpYW50cycpO1xuXG5jb25zdCBmZXRjaFZhcmlhbnRzID0gYXN5bmMgKHN0cmluZzogc3RyaW5nKTogUHJvbWlzZTxWYXJpYW50UmVjb3JkIHwgdW5kZWZpbmVkPiA9PiB7XG5cdGlmIChhd2FpdCB2YXJpYW50cy5nZXQoc3RyaW5nKSkge1xuXHRcdHJldHVybiB2YXJpYW50cy5nZXQoc3RyaW5nKTtcblx0fVxuXG5cdGNvbnN0IHBhcmFtczogQXBpUGFyc2VQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdHRleHQ6IGdlbmVyYXRlVGV4dChzdHJpbmcpLFxuXHRcdHRpdGxlOiAndGVtcCcsXG5cdFx0dmFyaWFudDogJ3poJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdH07XG5cdHRyeSB7XG5cdFx0Y29uc3Qge3BhcnNlfSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblx0XHRjb25zdCB7dGV4dH0gPSBwYXJzZTtcblx0XHRjb25zdCByZXN1bHQgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKHRleHQsICd0ZXh0L2h0bWwnKTtcblx0XHRjb25zdCByZXN1bHRzID0ge1xuXHRcdFx0c3RyaW5nLFxuXHRcdFx0dmFyaWFudHM6IHtcblx0XHRcdFx0emg6IHJlc3VsdC5xdWVyeVNlbGVjdG9yKCcjemgnKT8udGV4dENvbnRlbnQgPz8gJycsXG5cdFx0XHRcdCd6aC1oYW5zJzogcmVzdWx0LnF1ZXJ5U2VsZWN0b3IoJyN6aC1oYW5zJyk/LnRleHRDb250ZW50ID8/ICcnLFxuXHRcdFx0XHQnemgtaGFudCc6IHJlc3VsdC5xdWVyeVNlbGVjdG9yKCcjemgtaGFudCcpPy50ZXh0Q29udGVudCA/PyAnJyxcblx0XHRcdFx0J3poLWNuJzogcmVzdWx0LnF1ZXJ5U2VsZWN0b3IoJyN6aC1jbicpPy50ZXh0Q29udGVudCA/PyAnJyxcblx0XHRcdFx0J3poLWhrJzogcmVzdWx0LnF1ZXJ5U2VsZWN0b3IoJyN6aC1oaycpPy50ZXh0Q29udGVudCA/PyAnJyxcblx0XHRcdFx0J3poLW1vJzogcmVzdWx0LnF1ZXJ5U2VsZWN0b3IoJyN6aC1tbycpPy50ZXh0Q29udGVudCA/PyAnJyxcblx0XHRcdFx0J3poLW15JzogcmVzdWx0LnF1ZXJ5U2VsZWN0b3IoJyN6aC1teScpPy50ZXh0Q29udGVudCA/PyAnJyxcblx0XHRcdFx0J3poLXNnJzogcmVzdWx0LnF1ZXJ5U2VsZWN0b3IoJyN6aC1zZycpPy50ZXh0Q29udGVudCA/PyAnJyxcblx0XHRcdFx0J3poLXR3JzogcmVzdWx0LnF1ZXJ5U2VsZWN0b3IoJyN6aC10dycpPy50ZXh0Q29udGVudCA/PyAnJyxcblx0XHRcdH0sXG5cdFx0fTtcblx0XHRhd2FpdCB2YXJpYW50cy5zZXQoc3RyaW5nLCByZXN1bHRzKTtcblx0XHRyZXR1cm4gcmVzdWx0cztcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0fVxufTtcblxuZXhwb3J0IHtmZXRjaFZhcmlhbnRzfTtcbiIsICJ7XG5cdFwic3RvcmFnZUtleVwiOiBcImV4dC5nYWRnZXQuRmV0Y2hWYXJpYW50c19mZXRjaFZhcmlhbnRzXCIsXG5cdFwidmVyc2lvblwiOiBcIjEuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBGZXRjaFZhcmlhbnRzLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiY29uc3QgZ2VuZXJhdGVUZXh0ID0gKHN0cmluZzogc3RyaW5nKSA9PlxuXHRgPHVsIGlkPVwiZmV0Y2h2YXJpYW50c1wiPlxuXHRcdDxsaSBpZD1cInpoXCI+LXt6aHwke3N0cmluZ319LTwvbGk+XG5cdFx0PGxpIGlkPVwiemgtaGFuc1wiPi17emgtaGFuc3wke3N0cmluZ319LTwvbGk+XG5cdFx0PGxpIGlkPVwiemgtaGFudFwiPi17emgtaGFudHwke3N0cmluZ319LTwvbGk+XG5cdFx0PGxpIGlkPVwiemgtY25cIj4te3poLWNufCR7c3RyaW5nfX0tPC9saT5cblx0XHQ8bGkgaWQ9XCJ6aC1oa1wiPi17emgtaGt8JHtzdHJpbmd9fS08L2xpPlxuXHRcdDxsaSBpZD1cInpoLW1vXCI+LXt6aC1tb3wke3N0cmluZ319LTwvbGk+XG5cdFx0PGxpIGlkPVwiemgtbXlcIj4te3poLW15fCR7c3RyaW5nfX0tPC9saT5cblx0XHQ8bGkgaWQ9XCJ6aC1zZ1wiPi17emgtc2d8JHtzdHJpbmd9fS08L2xpPlxuXHRcdDxsaSBpZD1cInpoLXR3XCI+LXt6aC10d3wke3N0cmluZ319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LFFBQUFqQiwyQkFBQSxTQUFBQSx5QkFBZTtVQUN4RCxVQUFBRSwwQkFBQUMsMEJBQVNRLE9BQU9LLGNBQWMsUUFBUSxPQUFBLFFBQUFiLDRCQUFBLFNBQUEsU0FBN0JBLHdCQUFnQ2MsaUJBQUEsUUFBQWYsMkJBQUEsU0FBQUEseUJBQWU7VUFDeEQsVUFBQUUsMkJBQUFDLDBCQUFTTSxPQUFPSyxjQUFjLFFBQVEsT0FBQSxRQUFBWCw0QkFBQSxTQUFBLFNBQTdCQSx3QkFBZ0NZLGlCQUFBLFFBQUFiLDRCQUFBLFNBQUFBLDBCQUFlO1VBQ3hELFVBQUFFLDJCQUFBQywwQkFBU0ksT0FBT0ssY0FBYyxRQUFRLE9BQUEsUUFBQVQsNEJBQUEsU0FBQSxTQUE3QkEsd0JBQWdDVSxpQkFBQSxRQUFBWCw0QkFBQSxTQUFBQSwwQkFBZTtVQUN4RCxVQUFBRSwyQkFBQUMsMEJBQVNFLE9BQU9LLGNBQWMsUUFBUSxPQUFBLFFBQUFQLDRCQUFBLFNBQUEsU0FBN0JBLHdCQUFnQ1EsaUJBQUEsUUFBQVQsNEJBQUEsU0FBQUEsMEJBQWU7UUFDekQ7TUFDRDtBQUNBLFlBQU01QixTQUFTc0MsSUFBSXZDLFFBQVFtQyxPQUFPO0FBQ2xDLGFBQU9BO0lBQ1IsUUFBUTtBQUNQLGFBQU87SUFDUjtFQUNELENBQUE7QUFBQSxTQUFBLFNBcENNaEQsZUFBQXFELElBQUE7QUFBQSxXQUFBckMsS0FBQXNDLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsR0FBQTsiLAogICJuYW1lcyI6IFsiRmV0Y2hWYXJpYW50c19leHBvcnRzIiwgIl9fZXhwb3J0IiwgImZldGNoVmFyaWFudHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAiX190b0NvbW1vbkpTIiwgInN0b3JhZ2VLZXkiLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNvbmNhdCIsICJnZW5lcmF0ZVRleHQiLCAic3RyaW5nIiwgInZhcmlhbnRzIiwgIklEQlBsdXMiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJnZXQiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAidGV4dCIsICJ0aXRsZSIsICJ2YXJpYW50IiwgImZvcm1hdHZlcnNpb24iLCAiX3Jlc3VsdCRxdWVyeVNlbGVjdG9yIiwgIl9yZXN1bHQkcXVlcnlTZWxlY3RvcjIiLCAiX3Jlc3VsdCRxdWVyeVNlbGVjdG9yMyIsICJfcmVzdWx0JHF1ZXJ5U2VsZWN0b3I0IiwgIl9yZXN1bHQkcXVlcnlTZWxlY3RvcjUiLCAiX3Jlc3VsdCRxdWVyeVNlbGVjdG9yNiIsICJfcmVzdWx0JHF1ZXJ5U2VsZWN0b3I3IiwgIl9yZXN1bHQkcXVlcnlTZWxlY3RvcjgiLCAiX3Jlc3VsdCRxdWVyeVNlbGVjdG9yOSIsICJfcmVzdWx0JHF1ZXJ5U2VsZWN0b3IwIiwgIl9yZXN1bHQkcXVlcnlTZWxlY3RvcjEiLCAiX3Jlc3VsdCRxdWVyeVNlbGVjdG9yMTAiLCAiX3Jlc3VsdCRxdWVyeVNlbGVjdG9yMTEiLCAiX3Jlc3VsdCRxdWVyeVNlbGVjdG9yMTIiLCAiX3Jlc3VsdCRxdWVyeVNlbGVjdG9yMTMiLCAiX3Jlc3VsdCRxdWVyeVNlbGVjdG9yMTQiLCAiX3Jlc3VsdCRxdWVyeVNlbGVjdG9yMTUiLCAiX3Jlc3VsdCRxdWVyeVNlbGVjdG9yMTYiLCAicGFyc2UiLCAicmVzdWx0IiwgIkRPTVBhcnNlciIsICJwYXJzZUZyb21TdHJpbmciLCAicmVzdWx0cyIsICJ6aCIsICJxdWVyeVNlbGVjdG9yIiwgInRleHRDb250ZW50IiwgInNldCIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiXQp9Cg==

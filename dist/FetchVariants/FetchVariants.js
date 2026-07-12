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
      formatversion: "2",
      text: '<ul id="findvariants">\n	<li id="zh">-{zh|'.concat(string, '}}-</li>\n	<li id="zh-hans">-{zh-hans|').concat(string, '}}-</li>\n	<li id="zh-hant">-{zh-hant|').concat(string, '}}-</li>\n	<li id="zh-cn">-{zh-cn|').concat(string, '}}-</li>\n	<li id="zh-hk">-{zh-hk|').concat(string, '}}-</li>\n	<li id="zh-mo">-{zh-mo|').concat(string, '}}-</li>\n	<li id="zh-my">-{zh-my|').concat(string, '}}-</li>\n	<li id="zh-sg">-{zh-sg|').concat(string, '}}-</li>\n	<li id="zh-tw">-{zh-tw|').concat(string, "}}-</li>\n</ul>"),
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0ZldGNoVmFyaWFudHMvRmV0Y2hWYXJpYW50cy50c3giLCAic3JjL0ZldGNoVmFyaWFudHMvb3B0aW9ucy5qc29uIiwgInNyYy9GZXRjaFZhcmlhbnRzL21vZHVsZXMvYXBpLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7SURCUGx1c30gZnJvbSAnZXh0LmdhZGdldC5pZGItcGx1cyc7XG5pbXBvcnQge3R5cGUgTGFuZ3N9IGZyb20gJy4vbW9kdWxlcy9jb25zdGFudCc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9tb2R1bGVzL2FwaSc7XG50eXBlIFZhcmlhbnRSZWNvcmQgPSB7c3RyaW5nOiBzdHJpbmc7IHZhcmlhbnRzOiBSZWNvcmQ8TGFuZ3MsIHN0cmluZz59O1xuXG5jb25zdCB2YXJpYW50cyA9IG5ldyBJREJQbHVzPHN0cmluZywgVmFyaWFudFJlY29yZD4oT1BUSU9OUy5zdG9yYWdlS2V5LCAndmFyaWFudHMnKTtcblxuY29uc3QgZmV0Y2hWYXJpYW50cyA9IGFzeW5jIChzdHJpbmc6IHN0cmluZyk6IFByb21pc2U8VmFyaWFudFJlY29yZCB8IHVuZGVmaW5lZD4gPT4ge1xuXHRpZiAoYXdhaXQgdmFyaWFudHMuZ2V0KHN0cmluZykpIHtcblx0XHRyZXR1cm4gdmFyaWFudHMuZ2V0KHN0cmluZyk7XG5cdH1cblxuXHRjb25zdCBwYXJhbXM6IEFwaVBhcnNlUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0dGV4dDogYDx1bCBpZD1cImZpbmR2YXJpYW50c1wiPlxuXHQ8bGkgaWQ9XCJ6aFwiPi17emh8JHtzdHJpbmd9fX0tPC9saT5cblx0PGxpIGlkPVwiemgtaGFuc1wiPi17emgtaGFuc3wke3N0cmluZ319fS08L2xpPlxuXHQ8bGkgaWQ9XCJ6aC1oYW50XCI+LXt6aC1oYW50fCR7c3RyaW5nfX19LTwvbGk+XG5cdDxsaSBpZD1cInpoLWNuXCI+LXt6aC1jbnwke3N0cmluZ319fS08L2xpPlxuXHQ8bGkgaWQ9XCJ6aC1oa1wiPi17emgtaGt8JHtzdHJpbmd9fX0tPC9saT5cblx0PGxpIGlkPVwiemgtbW9cIj4te3poLW1vfCR7c3RyaW5nfX19LTwvbGk+XG5cdDxsaSBpZD1cInpoLW15XCI+LXt6aC1teXwke3N0cmluZ319fS08L2xpPlxuXHQ8bGkgaWQ9XCJ6aC1zZ1wiPi17emgtc2d8JHtzdHJpbmd9fX0tPC9saT5cblx0PGxpIGlkPVwiemgtdHdcIj4te3poLXR3fCR7c3RyaW5nfX19LTwvbGk+XG48L3VsPmAsXG5cdFx0dGl0bGU6ICd0ZW1wJyxcblx0XHR2YXJpYW50OiAnemgnLFxuXHR9O1xuXHR0cnkge1xuXHRcdGNvbnN0IHtwYXJzZX0gPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cdFx0Y29uc3Qge3RleHR9ID0gcGFyc2U7XG5cdFx0Y29uc3QgJHJlc3VsdCA9ICQodGV4dCk7XG5cdFx0Y29uc3QgcmVzdWx0cyA9IHtcblx0XHRcdHN0cmluZyxcblx0XHRcdHZhcmlhbnRzOiB7XG5cdFx0XHRcdHpoOiAkcmVzdWx0LmZpbmQoJyN6aCcpLnRleHQoKSxcblx0XHRcdFx0J3poLWhhbnMnOiAkcmVzdWx0LmZpbmQoJyN6aC1oYW5zJykudGV4dCgpLFxuXHRcdFx0XHQnemgtaGFudCc6ICRyZXN1bHQuZmluZCgnI3poLWhhbnQnKS50ZXh0KCksXG5cdFx0XHRcdCd6aC1jbic6ICRyZXN1bHQuZmluZCgnI3poLWNuJykudGV4dCgpLFxuXHRcdFx0XHQnemgtaGsnOiAkcmVzdWx0LmZpbmQoJyN6aC1oaycpLnRleHQoKSxcblx0XHRcdFx0J3poLW1vJzogJHJlc3VsdC5maW5kKCcjemgtbW8nKS50ZXh0KCksXG5cdFx0XHRcdCd6aC1teSc6ICRyZXN1bHQuZmluZCgnI3poLW15JykudGV4dCgpLFxuXHRcdFx0XHQnemgtc2cnOiAkcmVzdWx0LmZpbmQoJyN6aC1zZycpLnRleHQoKSxcblx0XHRcdFx0J3poLXR3JzogJHJlc3VsdC5maW5kKCcjemgtdHcnKS50ZXh0KCksXG5cdFx0XHR9LFxuXHRcdH07XG5cdFx0YXdhaXQgdmFyaWFudHMuc2V0KHN0cmluZywgcmVzdWx0cyk7XG5cdFx0cmV0dXJuIHJlc3VsdHM7XG5cdH0gY2F0Y2gge1xuXHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdH1cbn07XG5cbmV4cG9ydCB7ZmV0Y2hWYXJpYW50c307XG4iLCAie1xuXHRcInN0b3JhZ2VLZXlcIjogXCJleHQuZ2FkZ2V0LkZldGNoVmFyaWFudHNfZmV0Y2hWYXJpYW50c1wiLFxuXHRcInZlcnNpb25cIjogXCIxLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgRmV0Y2hWYXJpYW50cy8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsd0JBQUEsQ0FBQTtBQUFBQyxTQUFBRCx1QkFBQTtFQUFBRSxlQUFBQSxNQUFBQTtBQUFBLENBQUE7QUFBQUMsT0FBQUMsVUFBQUMsYUFBQUwscUJBQUE7O0FDQ0MsSUFBQU0sYUFBYztBQUNkLElBQUFDLFVBQVc7O0FERFosSUFBQUMscUJBQXNCQyxRQUFBLHFCQUFBOztBRUF0QixJQUFBQyxvQkFBd0JELFFBQUEsaUJBQUE7QUFFeEIsSUFBTUUsT0FBQSxHQUFjRCxrQkFBQUUsV0FBQSxpQkFBQUMsT0FBbUNOLE9BQU8sQ0FBRTs7QUZHaEUsSUFBTU8sV0FBVyxJQUFJTixtQkFBQU8sUUFBdUNULFlBQVksVUFBVTtBQUVsRixJQUFNSixnQkFBQSw0QkFBQTtBQUFBLE1BQUFjLE9BQUFDLGtCQUFnQixXQUFPQyxRQUF1RDtBQUNuRixRQUFBLE1BQVVKLFNBQVNLLElBQUlELE1BQU0sR0FBRztBQUMvQixhQUFPSixTQUFTSyxJQUFJRCxNQUFNO0lBQzNCO0FBRUEsVUFBTUUsU0FBeUI7TUFDOUJDLFFBQVE7TUFDUkMsUUFBUTtNQUNSQyxlQUFlO01BQ2ZDLE1BQUEsNkNBQUFYLE9BQ2tCSyxRQUFNLHdDQUFBLEVBQUFMLE9BQ0lLLFFBQU0sd0NBQUEsRUFBQUwsT0FDTkssUUFBTSxvQ0FBQSxFQUFBTCxPQUNWSyxRQUFNLG9DQUFBLEVBQUFMLE9BQ05LLFFBQU0sb0NBQUEsRUFBQUwsT0FDTkssUUFBTSxvQ0FBQSxFQUFBTCxPQUNOSyxRQUFNLG9DQUFBLEVBQUFMLE9BQ05LLFFBQU0sb0NBQUEsRUFBQUwsT0FDTkssUUFBTSxpQkFBQTtNQUU5Qk8sT0FBTztNQUNQQyxTQUFTO0lBQ1Y7QUFDQSxRQUFJO0FBQ0gsWUFBTTtRQUFDQztNQUFLLElBQUEsTUFBVWhCLElBQUlRLElBQUlDLE1BQU07QUFDcEMsWUFBTTtRQUFDSTtNQUFJLElBQUlHO0FBQ2YsWUFBTUMsVUFBVUMsRUFBRUwsSUFBSTtBQUN0QixZQUFNTSxVQUFVO1FBQ2ZaO1FBQ0FKLFVBQVU7VUFDVGlCLElBQUlILFFBQVFJLEtBQUssS0FBSyxFQUFFUixLQUFLO1VBQzdCLFdBQVdJLFFBQVFJLEtBQUssVUFBVSxFQUFFUixLQUFLO1VBQ3pDLFdBQVdJLFFBQVFJLEtBQUssVUFBVSxFQUFFUixLQUFLO1VBQ3pDLFNBQVNJLFFBQVFJLEtBQUssUUFBUSxFQUFFUixLQUFLO1VBQ3JDLFNBQVNJLFFBQVFJLEtBQUssUUFBUSxFQUFFUixLQUFLO1VBQ3JDLFNBQVNJLFFBQVFJLEtBQUssUUFBUSxFQUFFUixLQUFLO1VBQ3JDLFNBQVNJLFFBQVFJLEtBQUssUUFBUSxFQUFFUixLQUFLO1VBQ3JDLFNBQVNJLFFBQVFJLEtBQUssUUFBUSxFQUFFUixLQUFLO1VBQ3JDLFNBQVNJLFFBQVFJLEtBQUssUUFBUSxFQUFFUixLQUFLO1FBQ3RDO01BQ0Q7QUFDQSxZQUFNVixTQUFTbUIsSUFBSWYsUUFBUVksT0FBTztBQUNsQyxhQUFPQTtJQUNSLFFBQVE7QUFDUCxhQUFPO0lBQ1I7RUFDRCxDQUFBO0FBQUEsU0FBQSxTQTlDTTVCLGVBQUFnQyxJQUFBO0FBQUEsV0FBQWxCLEtBQUFtQixNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEdBQUE7IiwKICAibmFtZXMiOiBbIkZldGNoVmFyaWFudHNfZXhwb3J0cyIsICJfX2V4cG9ydCIsICJmZXRjaFZhcmlhbnRzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIl9fdG9Db21tb25KUyIsICJzdG9yYWdlS2V5IiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAidmFyaWFudHMiLCAiSURCUGx1cyIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInN0cmluZyIsICJnZXQiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJ0ZXh0IiwgInRpdGxlIiwgInZhcmlhbnQiLCAicGFyc2UiLCAiJHJlc3VsdCIsICIkIiwgInJlc3VsdHMiLCAiemgiLCAiZmluZCIsICJzZXQiLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIl0KfQo=

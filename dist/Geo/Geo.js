/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Geo}
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

// dist/Geo/Geo.js
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
    var self = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);
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
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
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
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, {
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
//! src/Geo/Geo.ts
var Geo_exports = {};
__export(Geo_exports, {
  getGeoInfo: () => getGeoInfo
});
module.exports = __toCommonJS(Geo_exports);
//! src/Geo/options.json
var defaultGeoInfo = {
  countryOrArea: "",
  region: "",
  city: ""
};
var storageKey = "ext.gadget.Geo";
//! src/Geo/Geo.ts
var getGeoInfo = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* () {
    const storeGeoInfo = mw.storage.getObject("".concat(storageKey));
    if (storeGeoInfo) {
      return storeGeoInfo;
    }
    try {
      var _ref2, _response$country, _response$region, _response$city;
      const response = yield $.getJSON("/rest.php/geo");
      const geoInfo = {
        countryOrArea: (_ref2 = (_response$country = response.country) !== null && _response$country !== void 0 ? _response$country : response.countryOrArea) !== null && _ref2 !== void 0 ? _ref2 : "",
        region: (_response$region = response.region) !== null && _response$region !== void 0 ? _response$region : "",
        city: (_response$city = response.city) !== null && _response$city !== void 0 ? _response$city : ""
      };
      mw.storage.setObject("".concat(storageKey), geoInfo, 60 * 60 * 1e3);
      return geoInfo;
    } catch {
      return defaultGeoInfo;
    }
  });
  return function getGeoInfo2() {
    return _ref.apply(this, arguments);
  };
}();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0dlby9HZW8udHMiLCAic3JjL0dlby9vcHRpb25zLmpzb24iXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHR5cGUge0dlb0luZm99IGZyb20gJy4vbW9kdWxlcy90eXBlcyc7XG5cbmNvbnN0IGdldEdlb0luZm8gPSBhc3luYyAoKTogUHJvbWlzZTxHZW9JbmZvPiA9PiB7XG5cdGNvbnN0IHN0b3JlR2VvSW5mbyA9IG13LnN0b3JhZ2UuZ2V0T2JqZWN0KGAke09QVElPTlMuc3RvcmFnZUtleX1gKSBhcyBHZW9JbmZvIHwgbnVsbDtcblx0aWYgKHN0b3JlR2VvSW5mbykge1xuXHRcdHJldHVybiBzdG9yZUdlb0luZm87XG5cdH1cblxuXHR0cnkge1xuXHRcdGNvbnN0IHJlc3BvbnNlID0gKGF3YWl0ICQuZ2V0SlNPTignL3Jlc3QucGhwL2dlbycpKSBhcyBQYXJ0aWFsPEdlb0luZm8+ICYge1xuXHRcdFx0Y291bnRyeT86IHN0cmluZztcblx0XHR9O1xuXHRcdGNvbnN0IGdlb0luZm86IEdlb0luZm8gPSB7XG5cdFx0XHRjb3VudHJ5T3JBcmVhOiByZXNwb25zZS5jb3VudHJ5ID8/IHJlc3BvbnNlLmNvdW50cnlPckFyZWEgPz8gJycsXG5cdFx0XHRyZWdpb246IHJlc3BvbnNlLnJlZ2lvbiA/PyAnJyxcblx0XHRcdGNpdHk6IHJlc3BvbnNlLmNpdHkgPz8gJycsXG5cdFx0fTtcblxuXHRcdG13LnN0b3JhZ2Uuc2V0T2JqZWN0KGAke09QVElPTlMuc3RvcmFnZUtleX1gLCBnZW9JbmZvLCA2MCAqIDYwICogMTAwMCk7XG5cblx0XHRyZXR1cm4gZ2VvSW5mbztcblx0fSBjYXRjaCB7XG5cdFx0cmV0dXJuIE9QVElPTlMuZGVmYXVsdEdlb0luZm87XG5cdH1cbn07XG5cbmV4cG9ydCB7Z2V0R2VvSW5mb307XG4iLCAie1xuXHRcImRlZmF1bHRHZW9JbmZvXCI6IHtcblx0XHRcImNvdW50cnlPckFyZWFcIjogXCJcIixcblx0XHRcInJlZ2lvblwiOiBcIlwiLFxuXHRcdFwiY2l0eVwiOiBcIlwiXG5cdH0sXG5cdFwic3RvcmFnZUtleVwiOiBcImV4dC5nYWRnZXQuR2VvXCJcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxjQUFBLENBQUE7QUFBQUMsU0FBQUQsYUFBQTtFQUFBRSxZQUFBQSxNQUFBQTtBQUFBLENBQUE7QUFBQUMsT0FBQUMsVUFBQUMsYUFBQUwsV0FBQTs7QUNDQyxJQUFBTSxpQkFBa0I7RUFDakJDLGVBQWlCO0VBQ2pCQyxRQUFVO0VBQ1ZDLE1BQVE7QUFDVDtBQUNBLElBQUFDLGFBQWM7O0FESGYsSUFBTVIsYUFBQSwyQkFBQTtBQUFBLE1BQUFTLE9BQUFDLGtCQUFhLGFBQThCO0FBQ2hELFVBQU1DLGVBQWVDLEdBQUdDLFFBQVFDLFVBQUEsR0FBQUMsT0FBcUJQLFVBQVUsQ0FBRTtBQUNqRSxRQUFJRyxjQUFjO0FBQ2pCLGFBQU9BO0lBQ1I7QUFFQSxRQUFJO0FBQUEsVUFBQUssT0FBQUMsbUJBQUFDLGtCQUFBQztBQUNILFlBQU1DLFdBQUEsTUFBa0JDLEVBQUVDLFFBQVEsZUFBZTtBQUdqRCxZQUFNQyxVQUFtQjtRQUN4QmxCLGdCQUFBVyxTQUFBQyxvQkFBZUcsU0FBU0ksYUFBQSxRQUFBUCxzQkFBQSxTQUFBQSxvQkFBV0csU0FBU2YsbUJBQUEsUUFBQVcsVUFBQSxTQUFBQSxRQUFpQjtRQUM3RFYsU0FBQVksbUJBQVFFLFNBQVNkLFlBQUEsUUFBQVkscUJBQUEsU0FBQUEsbUJBQVU7UUFDM0JYLE9BQUFZLGlCQUFNQyxTQUFTYixVQUFBLFFBQUFZLG1CQUFBLFNBQUFBLGlCQUFRO01BQ3hCO0FBRUFQLFNBQUdDLFFBQVFZLFVBQUEsR0FBQVYsT0FBcUJQLFVBQVUsR0FBSWUsU0FBUyxLQUFLLEtBQUssR0FBSTtBQUVyRSxhQUFPQTtJQUNSLFFBQVE7QUFDUCxhQUFlbkI7SUFDaEI7RUFDRCxDQUFBO0FBQUEsU0FBQSxTQXRCTUosY0FBQTtBQUFBLFdBQUFTLEtBQUFpQixNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEVBQUE7IiwKICAibmFtZXMiOiBbIkdlb19leHBvcnRzIiwgIl9fZXhwb3J0IiwgImdldEdlb0luZm8iLCAibW9kdWxlIiwgImV4cG9ydHMiLCAiX190b0NvbW1vbkpTIiwgImRlZmF1bHRHZW9JbmZvIiwgImNvdW50cnlPckFyZWEiLCAicmVnaW9uIiwgImNpdHkiLCAic3RvcmFnZUtleSIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInN0b3JlR2VvSW5mbyIsICJtdyIsICJzdG9yYWdlIiwgImdldE9iamVjdCIsICJjb25jYXQiLCAiX3JlZjIiLCAiX3Jlc3BvbnNlJGNvdW50cnkiLCAiX3Jlc3BvbnNlJHJlZ2lvbiIsICJfcmVzcG9uc2UkY2l0eSIsICJyZXNwb25zZSIsICIkIiwgImdldEpTT04iLCAiZ2VvSW5mbyIsICJjb3VudHJ5IiwgInNldE9iamVjdCIsICJhcHBseSIsICJhcmd1bWVudHMiXQp9Cg==

/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/GeoLocation}
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

// dist/GeoLocation/GeoLocation.js
//! src/GeoLocation/modules/constant.ts
var _mw$config$get;
var _mw$config$get2;
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
var USER_SCRIPT_LIST = ["滥用过滤器", "求闻编者", "求闻百科社区", "Example", "External contributors", "Maintenance script", "MediaWiki default", "MediaWiki message delivery", "New user page"];
var USER_WEBMASTER_LIST = ["QiuWen", "QiuWen for Accounts", "QiuwenSocialMedia"];
var WG_SCRIPT = mw.config.get("wgScript");
var WG_USER_GROUPS = (_mw$config$get = mw.config.get("wgUserGroups")) !== null && _mw$config$get !== void 0 ? _mw$config$get : [];
var WG_USER_NAME = (_mw$config$get2 = mw.config.get("wgUserName")) !== null && _mw$config$get2 !== void 0 ? _mw$config$get2 : "";
//! src/GeoLocation/GeoLocation.ts
var import_ext_gadget3 = require("ext.gadget.Geo");
//! src/GeoLocation/options.json
var apiTag = "GeoLocation";
var version = "3.0";
//! src/GeoLocation/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("GeoLocation/".concat(version));
//! src/GeoLocation/modules/i18n.ts
var import_ext_gadget2 = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Update: (0, import_ext_gadget2.localize)({
      en: "Update IP location information",
      ja: "IP地域の情報を更新",
      "zh-hans": "更新IP属地信息",
      "zh-hant": "更新IP屬地資訊"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/GeoLocation/modules/storeLocation.ts
var storeLocation = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* ({
    countryOrArea,
    region
  }) {
    const storePageTitle = "User:".concat(WG_USER_NAME, "/GeoIP.json");
    try {
      const response = yield $.getJSON(new mw.Uri(WG_SCRIPT).extend({
        action: "raw",
        title: storePageTitle
      }).toString());
      if (response.countryOrArea === countryOrArea && (response.region === region || !response.region && !region)) {
        return;
      }
    } catch {
    }
    const geoInfo = {
      countryOrArea,
      region
    };
    const params = {
      action: "edit",
      format: "json",
      formatversion: "2",
      contentformat: "application/json",
      contentmodel: "json",
      title: storePageTitle,
      text: JSON.stringify(geoInfo),
      summary: getMessage("Update"),
      minor: true,
      recreate: true,
      watchlist: "unwatch",
      tags: apiTag
    };
    try {
      yield api.postWithEditToken(params);
    } catch (error) {
      console.error("[GeoLocation] Ajax error:", error);
    }
  });
  return function storeLocation2(_x) {
    return _ref.apply(this, arguments);
  };
}();
//! src/GeoLocation/GeoLocation.ts
(function() {
  var _geoLocation = _asyncToGenerator(function* () {
    if (USER_SCRIPT_LIST.includes(WG_USER_NAME) || USER_WEBMASTER_LIST.includes(WG_USER_NAME) || !WG_USER_NAME) {
      return;
    }
    if (WG_USER_GROUPS.includes("bot") || WG_USER_GROUPS.includes("qiuwen") || !(WG_USER_GROUPS.includes("autoconfirmed") || WG_USER_GROUPS.includes("confirmed"))) {
      return;
    }
    const {
      countryOrArea,
      region
    } = yield (0, import_ext_gadget3.getGeoInfo)();
    if (!countryOrArea) {
      return;
    }
    void storeLocation({
      countryOrArea,
      region
    });
  });
  function geoLocation() {
    return _geoLocation.apply(this, arguments);
  }
  return geoLocation;
})()();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0dlb0xvY2F0aW9uL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0dlb0xvY2F0aW9uL0dlb0xvY2F0aW9uLnRzIiwgInNyYy9HZW9Mb2NhdGlvbi9vcHRpb25zLmpzb24iLCAic3JjL0dlb0xvY2F0aW9uL21vZHVsZXMvYXBpLnRzIiwgInNyYy9HZW9Mb2NhdGlvbi9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0dlb0xvY2F0aW9uL21vZHVsZXMvc3RvcmVMb2NhdGlvbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgVVNFUl9TQ1JJUFRfTElTVDogc3RyaW5nW10gPSBbXG5cdCfmu6XnlKjov4fmu6TlmagnLFxuXHQn5rGC6Ze757yW6ICFJyxcblx0J+axgumXu+eZvuenkeekvuWMuicsXG5cdCdFeGFtcGxlJyxcblx0J0V4dGVybmFsIGNvbnRyaWJ1dG9ycycsXG5cdCdNYWludGVuYW5jZSBzY3JpcHQnLFxuXHQnTWVkaWFXaWtpIGRlZmF1bHQnLFxuXHQnTWVkaWFXaWtpIG1lc3NhZ2UgZGVsaXZlcnknLFxuXHQnTmV3IHVzZXIgcGFnZScsXG5dO1xuY29uc3QgVVNFUl9XRUJNQVNURVJfTElTVDogc3RyaW5nW10gPSBbJ1FpdVdlbicsICdRaXVXZW4gZm9yIEFjY291bnRzJywgJ1FpdXdlblNvY2lhbE1lZGlhJ107XG5cbmNvbnN0IFdHX1NDUklQVDogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dTY3JpcHQnKTtcbmNvbnN0IFdHX1VTRVJfR1JPVVBTOiBzdHJpbmdbXSA9IG13LmNvbmZpZy5nZXQoJ3dnVXNlckdyb3VwcycpID8/IFtdO1xuY29uc3QgV0dfVVNFUl9OQU1FOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCd3Z1VzZXJOYW1lJykgPz8gJyc7XG5cbmV4cG9ydCB7VVNFUl9TQ1JJUFRfTElTVCwgVVNFUl9XRUJNQVNURVJfTElTVCwgV0dfU0NSSVBULCBXR19VU0VSX0dST1VQUywgV0dfVVNFUl9OQU1FfTtcbiIsICJpbXBvcnQge1VTRVJfU0NSSVBUX0xJU1QsIFVTRVJfV0VCTUFTVEVSX0xJU1QsIFdHX1VTRVJfR1JPVVBTLCBXR19VU0VSX05BTUV9IGZyb20gJy4vbW9kdWxlcy9jb25zdGFudCc7XG5pbXBvcnQge2dldEdlb0luZm99IGZyb20gJ2V4dC5nYWRnZXQuR2VvJztcbmltcG9ydCB7c3RvcmVMb2NhdGlvbn0gZnJvbSAnLi9tb2R1bGVzL3N0b3JlTG9jYXRpb24nO1xuXG4oYXN5bmMgZnVuY3Rpb24gZ2VvTG9jYXRpb24oKTogUHJvbWlzZTx2b2lkPiB7XG5cdGlmIChVU0VSX1NDUklQVF9MSVNULmluY2x1ZGVzKFdHX1VTRVJfTkFNRSkgfHwgVVNFUl9XRUJNQVNURVJfTElTVC5pbmNsdWRlcyhXR19VU0VSX05BTUUpIHx8ICFXR19VU0VSX05BTUUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoXG5cdFx0V0dfVVNFUl9HUk9VUFMuaW5jbHVkZXMoJ2JvdCcpIHx8XG5cdFx0V0dfVVNFUl9HUk9VUFMuaW5jbHVkZXMoJ3FpdXdlbicpIHx8XG5cdFx0IShXR19VU0VSX0dST1VQUy5pbmNsdWRlcygnYXV0b2NvbmZpcm1lZCcpIHx8IFdHX1VTRVJfR1JPVVBTLmluY2x1ZGVzKCdjb25maXJtZWQnKSlcblx0KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qge2NvdW50cnlPckFyZWEsIHJlZ2lvbn0gPSBhd2FpdCBnZXRHZW9JbmZvKCk7XG5cdGlmICghY291bnRyeU9yQXJlYSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHZvaWQgc3RvcmVMb2NhdGlvbih7XG5cdFx0Y291bnRyeU9yQXJlYSxcblx0XHRyZWdpb24sXG5cdH0pO1xufSkoKTtcbiIsICJ7XG5cdFwiYXBpVGFnXCI6IFwiR2VvTG9jYXRpb25cIixcblx0XCJ2ZXJzaW9uXCI6IFwiMy4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYEdlb0xvY2F0aW9uLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdFVwZGF0ZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdVcGRhdGUgSVAgbG9jYXRpb24gaW5mb3JtYXRpb24nLFxuXHRcdFx0amE6ICdJUOWcsOWfn+OBruaDheWgseOCkuabtOaWsCcsXG5cdFx0XHQnemgtaGFucyc6ICfmm7TmlrBJUOWxnuWcsOS/oeaBrycsXG5cdFx0XHQnemgtaGFudCc6ICfmm7TmlrBJUOWxrOWcsOizh+ioiicsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7V0dfU0NSSVBULCBXR19VU0VSX05BTUV9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHR5cGUge1N0b3JlR2VvSW5mb30gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBzdG9yZUxvY2F0aW9uID0gYXN5bmMgKHtjb3VudHJ5T3JBcmVhLCByZWdpb259OiBTdG9yZUdlb0luZm8pOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3Qgc3RvcmVQYWdlVGl0bGU6IHN0cmluZyA9IGBVc2VyOiR7V0dfVVNFUl9OQU1FfS9HZW9JUC5qc29uYDtcblxuXHR0cnkge1xuXHRcdGNvbnN0IHJlc3BvbnNlID0gKGF3YWl0ICQuZ2V0SlNPTihcblx0XHRcdG5ldyBtdy5VcmkoV0dfU0NSSVBUKVxuXHRcdFx0XHQuZXh0ZW5kKHtcblx0XHRcdFx0XHRhY3Rpb246ICdyYXcnLFxuXHRcdFx0XHRcdHRpdGxlOiBzdG9yZVBhZ2VUaXRsZSxcblx0XHRcdFx0fSlcblx0XHRcdFx0LnRvU3RyaW5nKClcblx0XHQpKSBhcyBQYXJ0aWFsPFN0b3JlR2VvSW5mbz47XG5cdFx0aWYgKHJlc3BvbnNlLmNvdW50cnlPckFyZWEgPT09IGNvdW50cnlPckFyZWEgJiYgKHJlc3BvbnNlLnJlZ2lvbiA9PT0gcmVnaW9uIHx8ICghcmVzcG9uc2UucmVnaW9uICYmICFyZWdpb24pKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0fSBjYXRjaCB7fVxuXG5cdGNvbnN0IGdlb0luZm86IFN0b3JlR2VvSW5mbyA9IHtcblx0XHRjb3VudHJ5T3JBcmVhLFxuXHRcdHJlZ2lvbixcblx0fTtcblx0Y29uc3QgcGFyYW1zOiBBcGlFZGl0UGFnZVBhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0Y29udGVudGZvcm1hdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXHRcdGNvbnRlbnRtb2RlbDogJ2pzb24nLFxuXHRcdHRpdGxlOiBzdG9yZVBhZ2VUaXRsZSxcblx0XHR0ZXh0OiBKU09OLnN0cmluZ2lmeShnZW9JbmZvKSxcblx0XHRzdW1tYXJ5OiBnZXRNZXNzYWdlKCdVcGRhdGUnKSxcblx0XHRtaW5vcjogdHJ1ZSxcblx0XHRyZWNyZWF0ZTogdHJ1ZSxcblx0XHR3YXRjaGxpc3Q6ICd1bndhdGNoJyxcblx0XHR0YWdzOiBPUFRJT05TLmFwaVRhZyxcblx0fTtcblxuXHR0cnkge1xuXHRcdGF3YWl0IGFwaS5wb3N0V2l0aEVkaXRUb2tlbihwYXJhbXMpO1xuXHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ1tHZW9Mb2NhdGlvbl0gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdH1cbn07XG5cbmV4cG9ydCB7c3RvcmVMb2NhdGlvbn07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLG1CQUE2QixDQUNsQyxTQUNBLFFBQ0EsVUFDQSxXQUNBLHlCQUNBLHNCQUNBLHFCQUNBLDhCQUNBLGVBQUE7QUFFRCxJQUFNQyxzQkFBZ0MsQ0FBQyxVQUFVLHVCQUF1QixtQkFBbUI7QUFFM0YsSUFBTUMsWUFBb0JDLEdBQUdDLE9BQU9DLElBQUksVUFBVTtBQUNsRCxJQUFNQyxrQkFBQUMsaUJBQTJCSixHQUFHQyxPQUFPQyxJQUFJLGNBQWMsT0FBQSxRQUFBRSxtQkFBQSxTQUFBQSxpQkFBSyxDQUFBO0FBQ2xFLElBQU1DLGdCQUFBQyxrQkFBdUJOLEdBQUdDLE9BQU9DLElBQUksWUFBWSxPQUFBLFFBQUFJLG9CQUFBLFNBQUFBLGtCQUFLOztBQ2Q1RCxJQUFBQyxxQkFBeUJDLFFBQUEsZ0JBQUE7O0FDQXhCLElBQUFDLFNBQVU7QUFDVixJQUFBQyxVQUFXOztBQ0RaLElBQUFDLG9CQUF3QkgsUUFBQSxpQkFBQTtBQUV4QixJQUFNSSxPQUFBLEdBQWNELGtCQUFBRSxXQUFBLGVBQUFDLE9BQWlDSixPQUFPLENBQUU7O0FDSDlELElBQUFLLHFCQUF1QlAsUUFBQSxpQkFBQTtBQUV2QixJQUFNUSxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOQyxTQUFBLEdBQVFGLG1CQUFBRyxVQUFTO01BQ2hCQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7RUFDRjtBQUNEO0FBRUEsSUFBTUMsZUFBZUwsZ0JBQWdCO0FBRXJDLElBQU1NLGFBQWdEQyxTQUFRO0FBQzdELFNBQU9GLGFBQWFFLEdBQUcsS0FBS0E7QUFDN0I7O0FDWEEsSUFBTUMsZ0JBQUEsMkJBQUE7QUFBQSxNQUFBQyxPQUFBQyxrQkFBZ0IsV0FBTztJQUFDQztJQUFlQztFQUFNLEdBQW1DO0FBQ3JGLFVBQU1DLGlCQUFBLFFBQUFmLE9BQWlDVCxjQUFZLGFBQUE7QUFFbkQsUUFBSTtBQUNILFlBQU15QixXQUFBLE1BQWtCQyxFQUFFQyxRQUN6QixJQUFJaEMsR0FBR2lDLElBQUlsQyxTQUFTLEVBQ2xCbUMsT0FBTztRQUNQQyxRQUFRO1FBQ1JDLE9BQU9QO01BQ1IsQ0FBQyxFQUNBUSxTQUFTLENBQ1o7QUFDQSxVQUFJUCxTQUFTSCxrQkFBa0JBLGtCQUFrQkcsU0FBU0YsV0FBV0EsVUFBVyxDQUFDRSxTQUFTRixVQUFVLENBQUNBLFNBQVU7QUFDOUc7TUFDRDtJQUNELFFBQVE7SUFBQztBQUVULFVBQU1VLFVBQXdCO01BQzdCWDtNQUNBQztJQUNEO0FBQ0EsVUFBTVcsU0FBNEI7TUFDakNKLFFBQVE7TUFDUkssUUFBUTtNQUNSQyxlQUFlO01BQ2ZDLGVBQWU7TUFDZkMsY0FBYztNQUNkUCxPQUFPUDtNQUNQZSxNQUFNQyxLQUFLQyxVQUFVUixPQUFPO01BQzVCUyxTQUFTekIsV0FBVyxRQUFRO01BQzVCMEIsT0FBTztNQUNQQyxVQUFVO01BQ1ZDLFdBQVc7TUFDWEMsTUFBYzFDO0lBQ2Y7QUFFQSxRQUFJO0FBQ0gsWUFBTUcsSUFBSXdDLGtCQUFrQmIsTUFBTTtJQUNuQyxTQUFTYyxPQUFnQjtBQUN4QkMsY0FBUUQsTUFBTSw2QkFBNkJBLEtBQUs7SUFDakQ7RUFDRCxDQUFBO0FBQUEsU0FBQSxTQXpDTTdCLGVBQUErQixJQUFBO0FBQUEsV0FBQTlCLEtBQUErQixNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEVBQUE7Ozt1Q0pGTCxhQUE0QztBQUM1QyxRQUFJNUQsaUJBQWlCNkQsU0FBU3JELFlBQVksS0FBS1Asb0JBQW9CNEQsU0FBU3JELFlBQVksS0FBSyxDQUFDQSxjQUFjO0FBQzNHO0lBQ0Q7QUFFQSxRQUNDRixlQUFldUQsU0FBUyxLQUFLLEtBQzdCdkQsZUFBZXVELFNBQVMsUUFBUSxLQUNoQyxFQUFFdkQsZUFBZXVELFNBQVMsZUFBZSxLQUFLdkQsZUFBZXVELFNBQVMsV0FBVyxJQUNoRjtBQUNEO0lBQ0Q7QUFFQSxVQUFNO01BQUMvQjtNQUFlQztJQUFNLElBQUEsT0FBSSxHQUFNckIsbUJBQUFvRCxZQUFXO0FBQ2pELFFBQUksQ0FBQ2hDLGVBQWU7QUFDbkI7SUFDRDtBQUVBLFNBQUtILGNBQWM7TUFDbEJHO01BQ0FDO0lBQ0QsQ0FBQztFQUNGLENBQUE7QUFBQSxXQXRCZ0JnQyxjQUFBO0FBQUEsV0FBQUMsYUFBQUwsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxTQUFBRztBQUFBLEdBQUEsRUFzQmI7IiwKICAibmFtZXMiOiBbIlVTRVJfU0NSSVBUX0xJU1QiLCAiVVNFUl9XRUJNQVNURVJfTElTVCIsICJXR19TQ1JJUFQiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJXR19VU0VSX0dST1VQUyIsICJfbXckY29uZmlnJGdldCIsICJXR19VU0VSX05BTUUiLCAiX213JGNvbmZpZyRnZXQyIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJyZXF1aXJlIiwgImFwaVRhZyIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImFwaSIsICJpbml0TXdBcGkiLCAiY29uY2F0IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJnZXRJMThuTWVzc2FnZXMiLCAiVXBkYXRlIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJzdG9yZUxvY2F0aW9uIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAiY291bnRyeU9yQXJlYSIsICJyZWdpb24iLCAic3RvcmVQYWdlVGl0bGUiLCAicmVzcG9uc2UiLCAiJCIsICJnZXRKU09OIiwgIlVyaSIsICJleHRlbmQiLCAiYWN0aW9uIiwgInRpdGxlIiwgInRvU3RyaW5nIiwgImdlb0luZm8iLCAicGFyYW1zIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgImNvbnRlbnRmb3JtYXQiLCAiY29udGVudG1vZGVsIiwgInRleHQiLCAiSlNPTiIsICJzdHJpbmdpZnkiLCAic3VtbWFyeSIsICJtaW5vciIsICJyZWNyZWF0ZSIsICJ3YXRjaGxpc3QiLCAidGFncyIsICJwb3N0V2l0aEVkaXRUb2tlbiIsICJlcnJvciIsICJjb25zb2xlIiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJpbmNsdWRlcyIsICJnZXRHZW9JbmZvIiwgImdlb0xvY2F0aW9uIiwgIl9nZW9Mb2NhdGlvbiJdCn0K

})();

/* </nowiki> */

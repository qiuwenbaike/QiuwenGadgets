/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/GeoLocation}
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

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0dlb0xvY2F0aW9uL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0dlb0xvY2F0aW9uL0dlb0xvY2F0aW9uLnRzIiwgInNyYy9HZW9Mb2NhdGlvbi9vcHRpb25zLmpzb24iLCAic3JjL0dlb0xvY2F0aW9uL21vZHVsZXMvYXBpLnRzIiwgInNyYy9HZW9Mb2NhdGlvbi9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0dlb0xvY2F0aW9uL21vZHVsZXMvc3RvcmVMb2NhdGlvbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgVVNFUl9TQ1JJUFRfTElTVDogc3RyaW5nW10gPSBbXG5cdCfmu6XnlKjov4fmu6TlmagnLFxuXHQn5rGC6Ze757yW6ICFJyxcblx0J+axgumXu+eZvuenkeekvuWMuicsXG5cdCdFeGFtcGxlJyxcblx0J0V4dGVybmFsIGNvbnRyaWJ1dG9ycycsXG5cdCdNYWludGVuYW5jZSBzY3JpcHQnLFxuXHQnTWVkaWFXaWtpIGRlZmF1bHQnLFxuXHQnTWVkaWFXaWtpIG1lc3NhZ2UgZGVsaXZlcnknLFxuXHQnTmV3IHVzZXIgcGFnZScsXG5dO1xuY29uc3QgVVNFUl9XRUJNQVNURVJfTElTVDogc3RyaW5nW10gPSBbJ1FpdVdlbicsICdRaXVXZW4gZm9yIEFjY291bnRzJywgJ1FpdXdlblNvY2lhbE1lZGlhJ107XG5cbmNvbnN0IFdHX1NDUklQVDogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dTY3JpcHQnKTtcbmNvbnN0IFdHX1VTRVJfR1JPVVBTOiBzdHJpbmdbXSA9IG13LmNvbmZpZy5nZXQoJ3dnVXNlckdyb3VwcycpID8/IFtdO1xuY29uc3QgV0dfVVNFUl9OQU1FOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCd3Z1VzZXJOYW1lJykgPz8gJyc7XG5cbmV4cG9ydCB7VVNFUl9TQ1JJUFRfTElTVCwgVVNFUl9XRUJNQVNURVJfTElTVCwgV0dfU0NSSVBULCBXR19VU0VSX0dST1VQUywgV0dfVVNFUl9OQU1FfTtcbiIsICJpbXBvcnQge1VTRVJfU0NSSVBUX0xJU1QsIFVTRVJfV0VCTUFTVEVSX0xJU1QsIFdHX1VTRVJfR1JPVVBTLCBXR19VU0VSX05BTUV9IGZyb20gJy4vbW9kdWxlcy9jb25zdGFudCc7XG5pbXBvcnQge2dldEdlb0luZm99IGZyb20gJ2V4dC5nYWRnZXQuR2VvJztcbmltcG9ydCB7c3RvcmVMb2NhdGlvbn0gZnJvbSAnLi9tb2R1bGVzL3N0b3JlTG9jYXRpb24nO1xuXG4oYXN5bmMgZnVuY3Rpb24gZ2VvTG9jYXRpb24oKTogUHJvbWlzZTx2b2lkPiB7XG5cdGlmIChVU0VSX1NDUklQVF9MSVNULmluY2x1ZGVzKFdHX1VTRVJfTkFNRSkgfHwgVVNFUl9XRUJNQVNURVJfTElTVC5pbmNsdWRlcyhXR19VU0VSX05BTUUpIHx8ICFXR19VU0VSX05BTUUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoXG5cdFx0V0dfVVNFUl9HUk9VUFMuaW5jbHVkZXMoJ2JvdCcpIHx8XG5cdFx0V0dfVVNFUl9HUk9VUFMuaW5jbHVkZXMoJ3FpdXdlbicpIHx8XG5cdFx0IShXR19VU0VSX0dST1VQUy5pbmNsdWRlcygnYXV0b2NvbmZpcm1lZCcpIHx8IFdHX1VTRVJfR1JPVVBTLmluY2x1ZGVzKCdjb25maXJtZWQnKSlcblx0KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qge2NvdW50cnlPckFyZWEsIHJlZ2lvbn0gPSBhd2FpdCBnZXRHZW9JbmZvKCk7XG5cdGlmICghY291bnRyeU9yQXJlYSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHZvaWQgc3RvcmVMb2NhdGlvbih7XG5cdFx0Y291bnRyeU9yQXJlYSxcblx0XHRyZWdpb24sXG5cdH0pO1xufSkoKTtcbiIsICJ7XG5cdFwiYXBpVGFnXCI6IFwiR2VvTG9jYXRpb25cIixcblx0XCJ2ZXJzaW9uXCI6IFwiMy4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYEdlb0xvY2F0aW9uLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdFVwZGF0ZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdVcGRhdGUgSVAgbG9jYXRpb24gaW5mb3JtYXRpb24nLFxuXHRcdFx0amE6ICdJUOWcsOWfn+OBruaDheWgseOCkuabtOaWsCcsXG5cdFx0XHQnemgtaGFucyc6ICfmm7TmlrBJUOWxnuWcsOS/oeaBrycsXG5cdFx0XHQnemgtaGFudCc6ICfmm7TmlrBJUOWxrOWcsOizh+ioiicsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7V0dfU0NSSVBULCBXR19VU0VSX05BTUV9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHR5cGUge1N0b3JlR2VvSW5mb30gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBzdG9yZUxvY2F0aW9uID0gYXN5bmMgKHtjb3VudHJ5T3JBcmVhLCByZWdpb259OiBTdG9yZUdlb0luZm8pOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3Qgc3RvcmVQYWdlVGl0bGU6IHN0cmluZyA9IGBVc2VyOiR7V0dfVVNFUl9OQU1FfS9HZW9JUC5qc29uYDtcblxuXHR0cnkge1xuXHRcdGNvbnN0IHJlc3BvbnNlID0gKGF3YWl0ICQuZ2V0SlNPTihcblx0XHRcdG5ldyBtdy5VcmkoV0dfU0NSSVBUKVxuXHRcdFx0XHQuZXh0ZW5kKHtcblx0XHRcdFx0XHRhY3Rpb246ICdyYXcnLFxuXHRcdFx0XHRcdHRpdGxlOiBzdG9yZVBhZ2VUaXRsZSxcblx0XHRcdFx0fSlcblx0XHRcdFx0LnRvU3RyaW5nKClcblx0XHQpKSBhcyBQYXJ0aWFsPFN0b3JlR2VvSW5mbz47XG5cdFx0aWYgKHJlc3BvbnNlLmNvdW50cnlPckFyZWEgPT09IGNvdW50cnlPckFyZWEgJiYgKHJlc3BvbnNlLnJlZ2lvbiA9PT0gcmVnaW9uIHx8ICghcmVzcG9uc2UucmVnaW9uICYmICFyZWdpb24pKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0fSBjYXRjaCB7fVxuXG5cdGNvbnN0IGdlb0luZm86IFN0b3JlR2VvSW5mbyA9IHtcblx0XHRjb3VudHJ5T3JBcmVhLFxuXHRcdHJlZ2lvbixcblx0fTtcblx0Y29uc3QgcGFyYW1zOiBBcGlFZGl0UGFnZVBhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0Y29udGVudGZvcm1hdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXHRcdGNvbnRlbnRtb2RlbDogJ2pzb24nLFxuXHRcdHRpdGxlOiBzdG9yZVBhZ2VUaXRsZSxcblx0XHR0ZXh0OiBKU09OLnN0cmluZ2lmeShnZW9JbmZvKSxcblx0XHRzdW1tYXJ5OiBnZXRNZXNzYWdlKCdVcGRhdGUnKSxcblx0XHRtaW5vcjogdHJ1ZSxcblx0XHRyZWNyZWF0ZTogdHJ1ZSxcblx0XHR3YXRjaGxpc3Q6ICd1bndhdGNoJyxcblx0XHR0YWdzOiBPUFRJT05TLmFwaVRhZyxcblx0fTtcblxuXHR0cnkge1xuXHRcdGF3YWl0IGFwaS5wb3N0V2l0aEVkaXRUb2tlbihwYXJhbXMpO1xuXHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ1tHZW9Mb2NhdGlvbl0gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdH1cbn07XG5cbmV4cG9ydCB7c3RvcmVMb2NhdGlvbn07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxtQkFBNkIsQ0FDbEMsU0FDQSxRQUNBLFVBQ0EsV0FDQSx5QkFDQSxzQkFDQSxxQkFDQSw4QkFDQSxlQUFBO0FBRUQsSUFBTUMsc0JBQWdDLENBQUMsVUFBVSx1QkFBdUIsbUJBQW1CO0FBRTNGLElBQU1DLFlBQW9CQyxHQUFHQyxPQUFPQyxJQUFJLFVBQVU7QUFDbEQsSUFBTUMsa0JBQUFDLGlCQUEyQkosR0FBR0MsT0FBT0MsSUFBSSxjQUFjLE9BQUEsUUFBQUUsbUJBQUEsU0FBQUEsaUJBQUssQ0FBQTtBQUNsRSxJQUFNQyxnQkFBQUMsa0JBQXVCTixHQUFHQyxPQUFPQyxJQUFJLFlBQVksT0FBQSxRQUFBSSxvQkFBQSxTQUFBQSxrQkFBSzs7QUNkNUQsSUFBQUMscUJBQXlCQyxRQUFBLGdCQUFBOztBQ0F4QixJQUFBQyxTQUFVO0FBQ1YsSUFBQUMsVUFBVzs7QUNEWixJQUFBQyxvQkFBd0JILFFBQUEsaUJBQUE7QUFFeEIsSUFBTUksT0FBQSxHQUFjRCxrQkFBQUUsV0FBQSxlQUFBQyxPQUFpQ0osT0FBTyxDQUFFOztBQ0g5RCxJQUFBSyxxQkFBdUJQLFFBQUEsaUJBQUE7QUFFdkIsSUFBTVEsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsU0FBQSxHQUFRRixtQkFBQUcsVUFBUztNQUNoQkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0VBQ0Y7QUFDRDtBQUVBLElBQU1DLGVBQWVMLGdCQUFnQjtBQUVyQyxJQUFNTSxhQUFnREMsU0FBUTtBQUM3RCxTQUFPRixhQUFhRSxHQUFHLEtBQUtBO0FBQzdCOztBQ1hBLElBQU1DLGdCQUFBLDJCQUFBO0FBQUEsTUFBQUMsT0FBQUMsa0JBQWdCLFdBQU87SUFBQ0M7SUFBZUM7RUFBTSxHQUFtQztBQUNyRixVQUFNQyxpQkFBQSxRQUFBZixPQUFpQ1QsY0FBWSxhQUFBO0FBRW5ELFFBQUk7QUFDSCxZQUFNeUIsV0FBQSxNQUFrQkMsRUFBRUMsUUFDekIsSUFBSWhDLEdBQUdpQyxJQUFJbEMsU0FBUyxFQUNsQm1DLE9BQU87UUFDUEMsUUFBUTtRQUNSQyxPQUFPUDtNQUNSLENBQUMsRUFDQVEsU0FBUyxDQUNaO0FBQ0EsVUFBSVAsU0FBU0gsa0JBQWtCQSxrQkFBa0JHLFNBQVNGLFdBQVdBLFVBQVcsQ0FBQ0UsU0FBU0YsVUFBVSxDQUFDQSxTQUFVO0FBQzlHO01BQ0Q7SUFDRCxRQUFRO0lBQUM7QUFFVCxVQUFNVSxVQUF3QjtNQUM3Qlg7TUFDQUM7SUFDRDtBQUNBLFVBQU1XLFNBQTRCO01BQ2pDSixRQUFRO01BQ1JLLFFBQVE7TUFDUkMsZUFBZTtNQUNmQyxlQUFlO01BQ2ZDLGNBQWM7TUFDZFAsT0FBT1A7TUFDUGUsTUFBTUMsS0FBS0MsVUFBVVIsT0FBTztNQUM1QlMsU0FBU3pCLFdBQVcsUUFBUTtNQUM1QjBCLE9BQU87TUFDUEMsVUFBVTtNQUNWQyxXQUFXO01BQ1hDLE1BQWMxQztJQUNmO0FBRUEsUUFBSTtBQUNILFlBQU1HLElBQUl3QyxrQkFBa0JiLE1BQU07SUFDbkMsU0FBU2MsT0FBZ0I7QUFDeEJDLGNBQVFELE1BQU0sNkJBQTZCQSxLQUFLO0lBQ2pEO0VBQ0QsQ0FBQTtBQUFBLFNBQUEsU0F6Q003QixlQUFBK0IsSUFBQTtBQUFBLFdBQUE5QixLQUFBK0IsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxFQUFBOzs7dUNKRkwsYUFBNEM7QUFDNUMsUUFBSTVELGlCQUFpQjZELFNBQVNyRCxZQUFZLEtBQUtQLG9CQUFvQjRELFNBQVNyRCxZQUFZLEtBQUssQ0FBQ0EsY0FBYztBQUMzRztJQUNEO0FBRUEsUUFDQ0YsZUFBZXVELFNBQVMsS0FBSyxLQUM3QnZELGVBQWV1RCxTQUFTLFFBQVEsS0FDaEMsRUFBRXZELGVBQWV1RCxTQUFTLGVBQWUsS0FBS3ZELGVBQWV1RCxTQUFTLFdBQVcsSUFDaEY7QUFDRDtJQUNEO0FBRUEsVUFBTTtNQUFDL0I7TUFBZUM7SUFBTSxJQUFBLE9BQUksR0FBTXJCLG1CQUFBb0QsWUFBVztBQUNqRCxRQUFJLENBQUNoQyxlQUFlO0FBQ25CO0lBQ0Q7QUFFQSxTQUFLSCxjQUFjO01BQ2xCRztNQUNBQztJQUNELENBQUM7RUFDRixDQUFBO0FBQUEsV0F0QmdCZ0MsY0FBQTtBQUFBLFdBQUFDLGFBQUFMLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsU0FBQUc7QUFBQSxHQUFBLEVBc0JiOyIsCiAgIm5hbWVzIjogWyJVU0VSX1NDUklQVF9MSVNUIiwgIlVTRVJfV0VCTUFTVEVSX0xJU1QiLCAiV0dfU0NSSVBUIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiV0dfVVNFUl9HUk9VUFMiLCAiX213JGNvbmZpZyRnZXQiLCAiV0dfVVNFUl9OQU1FIiwgIl9tdyRjb25maWckZ2V0MiIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAicmVxdWlyZSIsICJhcGlUYWciLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNvbmNhdCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIlVwZGF0ZSIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAic3RvcmVMb2NhdGlvbiIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgImNvdW50cnlPckFyZWEiLCAicmVnaW9uIiwgInN0b3JlUGFnZVRpdGxlIiwgInJlc3BvbnNlIiwgIiQiLCAiZ2V0SlNPTiIsICJVcmkiLCAiZXh0ZW5kIiwgImFjdGlvbiIsICJ0aXRsZSIsICJ0b1N0cmluZyIsICJnZW9JbmZvIiwgInBhcmFtcyIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJjb250ZW50Zm9ybWF0IiwgImNvbnRlbnRtb2RlbCIsICJ0ZXh0IiwgIkpTT04iLCAic3RyaW5naWZ5IiwgInN1bW1hcnkiLCAibWlub3IiLCAicmVjcmVhdGUiLCAid2F0Y2hsaXN0IiwgInRhZ3MiLCAicG9zdFdpdGhFZGl0VG9rZW4iLCAiZXJyb3IiLCAiY29uc29sZSIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiaW5jbHVkZXMiLCAiZ2V0R2VvSW5mbyIsICJnZW9Mb2NhdGlvbiIsICJfZ2VvTG9jYXRpb24iXQp9Cg==

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
var _mw$config$get3;
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
var SYSTEM_SCRIPT_LIST = ["滥用过滤器", "求闻编者", "求闻百科社区", "Example", "External contributors", "Maintenance script", "MediaWiki default", "MediaWiki message delivery", "New user page"];
var WEBMASTER_LIST = ["QiuWen", "QiuWen for Accounts", "QiuwenSocialMedia"];
var WG_SCRIPT = mw.config.get("wgScript");
var WG_USER_GROUPS = (_mw$config$get = mw.config.get("wgUserGroups")) !== null && _mw$config$get !== void 0 ? _mw$config$get : [];
var WG_USER_NAME = (_mw$config$get2 = mw.config.get("wgUserName")) !== null && _mw$config$get2 !== void 0 ? _mw$config$get2 : "";
var WG_USER_EDIT_COUNT = (_mw$config$get3 = mw.config.get("wgUserEditCount")) !== null && _mw$config$get3 !== void 0 ? _mw$config$get3 : 0;
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
      if (response.countryOrArea === countryOrArea && (response.region === region || response.region && !region)) {
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
    if (SYSTEM_SCRIPT_LIST.includes(WG_USER_NAME) || WEBMASTER_LIST.includes(WG_USER_NAME) || !WG_USER_NAME) {
      return;
    }
    if (WG_USER_GROUPS.includes("bot") || WG_USER_GROUPS.includes("qiuwen") || !WG_USER_EDIT_COUNT) {
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0dlb0xvY2F0aW9uL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0dlb0xvY2F0aW9uL0dlb0xvY2F0aW9uLnRzIiwgInNyYy9HZW9Mb2NhdGlvbi9vcHRpb25zLmpzb24iLCAic3JjL0dlb0xvY2F0aW9uL21vZHVsZXMvYXBpLnRzIiwgInNyYy9HZW9Mb2NhdGlvbi9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0dlb0xvY2F0aW9uL21vZHVsZXMvc3RvcmVMb2NhdGlvbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgU1lTVEVNX1NDUklQVF9MSVNUOiBzdHJpbmdbXSA9IFtcblx0J+a7peeUqOi/h+a7pOWZqCcsXG5cdCfmsYLpl7vnvJbogIUnLFxuXHQn5rGC6Ze755m+56eR56S+5Yy6Jyxcblx0J0V4YW1wbGUnLFxuXHQnRXh0ZXJuYWwgY29udHJpYnV0b3JzJyxcblx0J01haW50ZW5hbmNlIHNjcmlwdCcsXG5cdCdNZWRpYVdpa2kgZGVmYXVsdCcsXG5cdCdNZWRpYVdpa2kgbWVzc2FnZSBkZWxpdmVyeScsXG5cdCdOZXcgdXNlciBwYWdlJyxcbl07XG5jb25zdCBXRUJNQVNURVJfTElTVDogc3RyaW5nW10gPSBbJ1FpdVdlbicsICdRaXVXZW4gZm9yIEFjY291bnRzJywgJ1FpdXdlblNvY2lhbE1lZGlhJ107XG5cbmNvbnN0IFdHX1NDUklQVDogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dTY3JpcHQnKTtcbmNvbnN0IFdHX1VTRVJfR1JPVVBTOiBzdHJpbmdbXSA9IG13LmNvbmZpZy5nZXQoJ3dnVXNlckdyb3VwcycpID8/IFtdO1xuY29uc3QgV0dfVVNFUl9OQU1FOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCd3Z1VzZXJOYW1lJykgPz8gJyc7XG5jb25zdCBXR19VU0VSX0VESVRfQ09VTlQ6IG51bWJlciA9IG13LmNvbmZpZy5nZXQoJ3dnVXNlckVkaXRDb3VudCcpID8/IDA7XG5cbmV4cG9ydCB7U1lTVEVNX1NDUklQVF9MSVNULCBXRUJNQVNURVJfTElTVCwgV0dfU0NSSVBULCBXR19VU0VSX0VESVRfQ09VTlQsIFdHX1VTRVJfR1JPVVBTLCBXR19VU0VSX05BTUV9O1xuIiwgImltcG9ydCB7U1lTVEVNX1NDUklQVF9MSVNULCBXRUJNQVNURVJfTElTVCwgV0dfVVNFUl9FRElUX0NPVU5ULCBXR19VU0VSX0dST1VQUywgV0dfVVNFUl9OQU1FfSBmcm9tICcuL21vZHVsZXMvY29uc3RhbnQnO1xuaW1wb3J0IHtnZXRHZW9JbmZvfSBmcm9tICdleHQuZ2FkZ2V0Lkdlbyc7XG5pbXBvcnQge3N0b3JlTG9jYXRpb259IGZyb20gJy4vbW9kdWxlcy9zdG9yZUxvY2F0aW9uJztcblxuKGFzeW5jIGZ1bmN0aW9uIGdlb0xvY2F0aW9uKCk6IFByb21pc2U8dm9pZD4ge1xuXHRpZiAoU1lTVEVNX1NDUklQVF9MSVNULmluY2x1ZGVzKFdHX1VTRVJfTkFNRSkgfHwgV0VCTUFTVEVSX0xJU1QuaW5jbHVkZXMoV0dfVVNFUl9OQU1FKSB8fCAhV0dfVVNFUl9OQU1FKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKFdHX1VTRVJfR1JPVVBTLmluY2x1ZGVzKCdib3QnKSB8fCBXR19VU0VSX0dST1VQUy5pbmNsdWRlcygncWl1d2VuJykgfHwgIVdHX1VTRVJfRURJVF9DT1VOVCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHtjb3VudHJ5T3JBcmVhLCByZWdpb259ID0gYXdhaXQgZ2V0R2VvSW5mbygpO1xuXHRpZiAoIWNvdW50cnlPckFyZWEpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR2b2lkIHN0b3JlTG9jYXRpb24oe1xuXHRcdGNvdW50cnlPckFyZWEsXG5cdFx0cmVnaW9uLFxuXHR9KTtcbn0pKCk7XG4iLCAie1xuXHRcImFwaVRhZ1wiOiBcIkdlb0xvY2F0aW9uXCIsXG5cdFwidmVyc2lvblwiOiBcIjMuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBHZW9Mb2NhdGlvbi8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRVcGRhdGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVXBkYXRlIElQIGxvY2F0aW9uIGluZm9ybWF0aW9uJyxcblx0XHRcdGphOiAnSVDlnLDln5/jga7mg4XloLHjgpLmm7TmlrAnLFxuXHRcdFx0J3poLWhhbnMnOiAn5pu05pawSVDlsZ7lnLDkv6Hmga8nLFxuXHRcdFx0J3poLWhhbnQnOiAn5pu05pawSVDlsazlnLDos4foqIonLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge1dHX1NDUklQVCwgV0dfVVNFUl9OQU1FfSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCB0eXBlIHtTdG9yZUdlb0luZm99IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3Qgc3RvcmVMb2NhdGlvbiA9IGFzeW5jICh7Y291bnRyeU9yQXJlYSwgcmVnaW9ufTogU3RvcmVHZW9JbmZvKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGNvbnN0IHN0b3JlUGFnZVRpdGxlOiBzdHJpbmcgPSBgVXNlcjoke1dHX1VTRVJfTkFNRX0vR2VvSVAuanNvbmA7XG5cblx0dHJ5IHtcblx0XHRjb25zdCByZXNwb25zZSA9IChhd2FpdCAkLmdldEpTT04oXG5cdFx0XHRuZXcgbXcuVXJpKFdHX1NDUklQVClcblx0XHRcdFx0LmV4dGVuZCh7XG5cdFx0XHRcdFx0YWN0aW9uOiAncmF3Jyxcblx0XHRcdFx0XHR0aXRsZTogc3RvcmVQYWdlVGl0bGUsXG5cdFx0XHRcdH0pXG5cdFx0XHRcdC50b1N0cmluZygpXG5cdFx0KSkgYXMgUGFydGlhbDxTdG9yZUdlb0luZm8+O1xuXHRcdGlmIChyZXNwb25zZS5jb3VudHJ5T3JBcmVhID09PSBjb3VudHJ5T3JBcmVhICYmIChyZXNwb25zZS5yZWdpb24gPT09IHJlZ2lvbiB8fCAocmVzcG9uc2UucmVnaW9uICYmICFyZWdpb24pKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0fSBjYXRjaCB7fVxuXG5cdGNvbnN0IGdlb0luZm86IFN0b3JlR2VvSW5mbyA9IHtcblx0XHRjb3VudHJ5T3JBcmVhLFxuXHRcdHJlZ2lvbixcblx0fTtcblx0Y29uc3QgcGFyYW1zOiBBcGlFZGl0UGFnZVBhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0Y29udGVudGZvcm1hdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXHRcdGNvbnRlbnRtb2RlbDogJ2pzb24nLFxuXHRcdHRpdGxlOiBzdG9yZVBhZ2VUaXRsZSxcblx0XHR0ZXh0OiBKU09OLnN0cmluZ2lmeShnZW9JbmZvKSxcblx0XHRzdW1tYXJ5OiBnZXRNZXNzYWdlKCdVcGRhdGUnKSxcblx0XHRtaW5vcjogdHJ1ZSxcblx0XHRyZWNyZWF0ZTogdHJ1ZSxcblx0XHR3YXRjaGxpc3Q6ICd1bndhdGNoJyxcblx0XHR0YWdzOiBPUFRJT05TLmFwaVRhZyxcblx0fTtcblxuXHR0cnkge1xuXHRcdGF3YWl0IGFwaS5wb3N0V2l0aEVkaXRUb2tlbihwYXJhbXMpO1xuXHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ1tHZW9Mb2NhdGlvbl0gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdH1cbn07XG5cbmV4cG9ydCB7c3RvcmVMb2NhdGlvbn07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEscUJBQStCLENBQ3BDLFNBQ0EsUUFDQSxVQUNBLFdBQ0EseUJBQ0Esc0JBQ0EscUJBQ0EsOEJBQ0EsZUFBQTtBQUVELElBQU1DLGlCQUEyQixDQUFDLFVBQVUsdUJBQXVCLG1CQUFtQjtBQUV0RixJQUFNQyxZQUFvQkMsR0FBR0MsT0FBT0MsSUFBSSxVQUFVO0FBQ2xELElBQU1DLGtCQUFBQyxpQkFBMkJKLEdBQUdDLE9BQU9DLElBQUksY0FBYyxPQUFBLFFBQUFFLG1CQUFBLFNBQUFBLGlCQUFLLENBQUE7QUFDbEUsSUFBTUMsZ0JBQUFDLGtCQUF1Qk4sR0FBR0MsT0FBT0MsSUFBSSxZQUFZLE9BQUEsUUFBQUksb0JBQUEsU0FBQUEsa0JBQUs7QUFDNUQsSUFBTUMsc0JBQUFDLGtCQUE2QlIsR0FBR0MsT0FBT0MsSUFBSSxpQkFBaUIsT0FBQSxRQUFBTSxvQkFBQSxTQUFBQSxrQkFBSzs7QUNmdkUsSUFBQUMscUJBQXlCQyxRQUFBLGdCQUFBOztBQ0F4QixJQUFBQyxTQUFVO0FBQ1YsSUFBQUMsVUFBVzs7QUNEWixJQUFBQyxvQkFBd0JILFFBQUEsaUJBQUE7QUFFeEIsSUFBTUksT0FBQSxHQUFjRCxrQkFBQUUsV0FBQSxlQUFBQyxPQUFpQ0osT0FBTyxDQUFFOztBQ0g5RCxJQUFBSyxxQkFBdUJQLFFBQUEsaUJBQUE7QUFFdkIsSUFBTVEsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsU0FBQSxHQUFRRixtQkFBQUcsVUFBUztNQUNoQkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0VBQ0Y7QUFDRDtBQUVBLElBQU1DLGVBQWVMLGdCQUFnQjtBQUVyQyxJQUFNTSxhQUFnREMsU0FBUTtBQUM3RCxTQUFPRixhQUFhRSxHQUFHLEtBQUtBO0FBQzdCOztBQ1hBLElBQU1DLGdCQUFBLDJCQUFBO0FBQUEsTUFBQUMsT0FBQUMsa0JBQWdCLFdBQU87SUFBQ0M7SUFBZUM7RUFBTSxHQUFtQztBQUNyRixVQUFNQyxpQkFBQSxRQUFBZixPQUFpQ1gsY0FBWSxhQUFBO0FBRW5ELFFBQUk7QUFDSCxZQUFNMkIsV0FBQSxNQUFrQkMsRUFBRUMsUUFDekIsSUFBSWxDLEdBQUdtQyxJQUFJcEMsU0FBUyxFQUNsQnFDLE9BQU87UUFDUEMsUUFBUTtRQUNSQyxPQUFPUDtNQUNSLENBQUMsRUFDQVEsU0FBUyxDQUNaO0FBQ0EsVUFBSVAsU0FBU0gsa0JBQWtCQSxrQkFBa0JHLFNBQVNGLFdBQVdBLFVBQVdFLFNBQVNGLFVBQVUsQ0FBQ0EsU0FBVTtBQUM3RztNQUNEO0lBQ0QsUUFBUTtJQUFDO0FBRVQsVUFBTVUsVUFBd0I7TUFDN0JYO01BQ0FDO0lBQ0Q7QUFDQSxVQUFNVyxTQUE0QjtNQUNqQ0osUUFBUTtNQUNSSyxRQUFRO01BQ1JDLGVBQWU7TUFDZkMsZUFBZTtNQUNmQyxjQUFjO01BQ2RQLE9BQU9QO01BQ1BlLE1BQU1DLEtBQUtDLFVBQVVSLE9BQU87TUFDNUJTLFNBQVN6QixXQUFXLFFBQVE7TUFDNUIwQixPQUFPO01BQ1BDLFVBQVU7TUFDVkMsV0FBVztNQUNYQyxNQUFjMUM7SUFDZjtBQUVBLFFBQUk7QUFDSCxZQUFNRyxJQUFJd0Msa0JBQWtCYixNQUFNO0lBQ25DLFNBQVNjLE9BQWdCO0FBQ3hCQyxjQUFRRCxNQUFNLDZCQUE2QkEsS0FBSztJQUNqRDtFQUNELENBQUE7QUFBQSxTQUFBLFNBekNNN0IsZUFBQStCLElBQUE7QUFBQSxXQUFBOUIsS0FBQStCLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTs7O3VDSkZMLGFBQTRDO0FBQzVDLFFBQUk5RCxtQkFBbUIrRCxTQUFTdkQsWUFBWSxLQUFLUCxlQUFlOEQsU0FBU3ZELFlBQVksS0FBSyxDQUFDQSxjQUFjO0FBQ3hHO0lBQ0Q7QUFFQSxRQUFJRixlQUFleUQsU0FBUyxLQUFLLEtBQUt6RCxlQUFleUQsU0FBUyxRQUFRLEtBQUssQ0FBQ3JELG9CQUFvQjtBQUMvRjtJQUNEO0FBRUEsVUFBTTtNQUFDc0I7TUFBZUM7SUFBTSxJQUFBLE9BQUksR0FBTXJCLG1CQUFBb0QsWUFBVztBQUNqRCxRQUFJLENBQUNoQyxlQUFlO0FBQ25CO0lBQ0Q7QUFFQSxTQUFLSCxjQUFjO01BQ2xCRztNQUNBQztJQUNELENBQUM7RUFDRixDQUFBO0FBQUEsV0FsQmdCZ0MsY0FBQTtBQUFBLFdBQUFDLGFBQUFMLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsU0FBQUc7QUFBQSxHQUFBLEVBa0JiOyIsCiAgIm5hbWVzIjogWyJTWVNURU1fU0NSSVBUX0xJU1QiLCAiV0VCTUFTVEVSX0xJU1QiLCAiV0dfU0NSSVBUIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiV0dfVVNFUl9HUk9VUFMiLCAiX213JGNvbmZpZyRnZXQiLCAiV0dfVVNFUl9OQU1FIiwgIl9tdyRjb25maWckZ2V0MiIsICJXR19VU0VSX0VESVRfQ09VTlQiLCAiX213JGNvbmZpZyRnZXQzIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJyZXF1aXJlIiwgImFwaVRhZyIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImFwaSIsICJpbml0TXdBcGkiLCAiY29uY2F0IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJnZXRJMThuTWVzc2FnZXMiLCAiVXBkYXRlIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJzdG9yZUxvY2F0aW9uIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAiY291bnRyeU9yQXJlYSIsICJyZWdpb24iLCAic3RvcmVQYWdlVGl0bGUiLCAicmVzcG9uc2UiLCAiJCIsICJnZXRKU09OIiwgIlVyaSIsICJleHRlbmQiLCAiYWN0aW9uIiwgInRpdGxlIiwgInRvU3RyaW5nIiwgImdlb0luZm8iLCAicGFyYW1zIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgImNvbnRlbnRmb3JtYXQiLCAiY29udGVudG1vZGVsIiwgInRleHQiLCAiSlNPTiIsICJzdHJpbmdpZnkiLCAic3VtbWFyeSIsICJtaW5vciIsICJyZWNyZWF0ZSIsICJ3YXRjaGxpc3QiLCAidGFncyIsICJwb3N0V2l0aEVkaXRUb2tlbiIsICJlcnJvciIsICJjb25zb2xlIiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJpbmNsdWRlcyIsICJnZXRHZW9JbmZvIiwgImdlb0xvY2F0aW9uIiwgIl9nZW9Mb2NhdGlvbiJdCn0K

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
//! src/GeoLocation/modules/constant.ts
var SYSTEM_SCRIPT_LIST = ["滥用过滤器", "求闻编者", "求闻百科社区", "Example", "External contributors", "Maintenance script", "MediaWiki default", "MediaWiki message delivery", "New user page"];
var WEBMASTER_LIST = ["QiuWen", "QiuWen for Accounts", "QiuwenSocialMedia"];
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
var queryRevisons = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* (titles) {
    const params = {
      titles,
      action: "query",
      format: "json",
      formatversion: "2",
      prop: "revisions",
      rvprop: "content",
      rvslots: "main",
      smaxage: 600,
      maxage: 600
    };
    const response = yield api.get(params);
    return response;
  });
  return function queryRevisons2(_x) {
    return _ref.apply(this, arguments);
  };
}();
var edit = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* (title, text, summary) {
    const params = {
      title,
      text,
      action: "edit",
      format: "json",
      formatversion: "2",
      contentformat: "application/json",
      contentmodel: "json",
      minor: true,
      recreate: true,
      watchlist: "unwatch",
      tags: apiTag
    };
    if (summary) {
      params.summary = summary;
    }
    const response = yield api.postWithEditToken(params);
    return response;
  });
  return function edit2(_x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var storeLocation = /* @__PURE__ */ function() {
  var _ref3 = _asyncToGenerator(function* ({
    countryOrArea,
    region
  }) {
    const {
      wgUserName
    } = mw.config.get();
    const storePageTitle = "User:".concat(wgUserName, "/GeoIP.json");
    try {
      var _data$query$pages$;
      const data = yield queryRevisons(storePageTitle);
      const response = JSON.parse((_data$query$pages$ = data["query"].pages[0]) === null || _data$query$pages$ === void 0 || (_data$query$pages$ = _data$query$pages$.revisions) === null || _data$query$pages$ === void 0 ? void 0 : _data$query$pages$[0].slots.main.content);
      if (!response.countryOrArea) {
        return;
      }
      if (response.countryOrArea === countryOrArea) {
        if (!response.region || !region) {
          return;
        }
        if (response.region === region) {
          return;
        }
      }
    } catch {
    }
    const geoInfo = {
      countryOrArea,
      region
    };
    try {
      yield edit(storePageTitle, JSON.stringify(geoInfo), getMessage("Update"));
    } catch (error) {
      console.error("[GeoLocation] Ajax error:", error);
    }
  });
  return function storeLocation2(_x5) {
    return _ref3.apply(this, arguments);
  };
}();
//! src/GeoLocation/GeoLocation.ts
var import_ext_gadget4 = require("ext.gadget.Util");
(function() {
  var _geoLocation = _asyncToGenerator(function* () {
    const {
      wgUserName
    } = mw.config.get();
    if (!wgUserName || SYSTEM_SCRIPT_LIST.includes(wgUserName) || WEBMASTER_LIST.includes(wgUserName)) {
      return;
    }
    if ((0, import_ext_gadget4.userIsInGroup)(["qiuwen", "steward", "bot"])) {
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0dlb0xvY2F0aW9uL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0dlb0xvY2F0aW9uL0dlb0xvY2F0aW9uLnRzIiwgInNyYy9HZW9Mb2NhdGlvbi9vcHRpb25zLmpzb24iLCAic3JjL0dlb0xvY2F0aW9uL21vZHVsZXMvYXBpLnRzIiwgInNyYy9HZW9Mb2NhdGlvbi9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0dlb0xvY2F0aW9uL21vZHVsZXMvc3RvcmVMb2NhdGlvbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgU1lTVEVNX1NDUklQVF9MSVNUOiBzdHJpbmdbXSA9IFtcblx0J+a7peeUqOi/h+a7pOWZqCcsXG5cdCfmsYLpl7vnvJbogIUnLFxuXHQn5rGC6Ze755m+56eR56S+5Yy6Jyxcblx0J0V4YW1wbGUnLFxuXHQnRXh0ZXJuYWwgY29udHJpYnV0b3JzJyxcblx0J01haW50ZW5hbmNlIHNjcmlwdCcsXG5cdCdNZWRpYVdpa2kgZGVmYXVsdCcsXG5cdCdNZWRpYVdpa2kgbWVzc2FnZSBkZWxpdmVyeScsXG5cdCdOZXcgdXNlciBwYWdlJyxcbl07XG5jb25zdCBXRUJNQVNURVJfTElTVDogc3RyaW5nW10gPSBbJ1FpdVdlbicsICdRaXVXZW4gZm9yIEFjY291bnRzJywgJ1FpdXdlblNvY2lhbE1lZGlhJ107XG5cbmV4cG9ydCB7U1lTVEVNX1NDUklQVF9MSVNULCBXRUJNQVNURVJfTElTVH07XG4iLCAiaW1wb3J0IHtTWVNURU1fU0NSSVBUX0xJU1QsIFdFQk1BU1RFUl9MSVNUfSBmcm9tICcuL21vZHVsZXMvY29uc3RhbnQnO1xuaW1wb3J0IHtnZXRHZW9JbmZvfSBmcm9tICdleHQuZ2FkZ2V0Lkdlbyc7XG5pbXBvcnQge3N0b3JlTG9jYXRpb259IGZyb20gJy4vbW9kdWxlcy9zdG9yZUxvY2F0aW9uJztcbmltcG9ydCB7dXNlcklzSW5Hcm91cH0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuKGFzeW5jIGZ1bmN0aW9uIGdlb0xvY2F0aW9uKCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCB7d2dVc2VyTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKCF3Z1VzZXJOYW1lIHx8IFNZU1RFTV9TQ1JJUFRfTElTVC5pbmNsdWRlcyh3Z1VzZXJOYW1lKSB8fCBXRUJNQVNURVJfTElTVC5pbmNsdWRlcyh3Z1VzZXJOYW1lKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIERpc2FibGVkIGZvciBvZmZpY2lhbCB1c2Vyc1xuXHRpZiAodXNlcklzSW5Hcm91cChbJ3FpdXdlbicsICdzdGV3YXJkJywgJ2JvdCddKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHtjb3VudHJ5T3JBcmVhLCByZWdpb259ID0gYXdhaXQgZ2V0R2VvSW5mbygpO1xuXHRpZiAoIWNvdW50cnlPckFyZWEpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR2b2lkIHN0b3JlTG9jYXRpb24oe1xuXHRcdGNvdW50cnlPckFyZWEsXG5cdFx0cmVnaW9uLFxuXHR9KTtcbn0pKCk7XG4iLCAie1xuXHRcImFwaVRhZ1wiOiBcIkdlb0xvY2F0aW9uXCIsXG5cdFwidmVyc2lvblwiOiBcIjMuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBHZW9Mb2NhdGlvbi8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRVcGRhdGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVXBkYXRlIElQIGxvY2F0aW9uIGluZm9ybWF0aW9uJyxcblx0XHRcdGphOiAnSVDlnLDln5/jga7mg4XloLHjgpLmm7TmlrAnLFxuXHRcdFx0J3poLWhhbnMnOiAn5pu05pawSVDlsZ7lnLDkv6Hmga8nLFxuXHRcdFx0J3poLWhhbnQnOiAn5pu05pawSVDlsazlnLDos4foqIonLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQgdHlwZSB7U3RvcmVHZW9JbmZvfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IHF1ZXJ5UmV2aXNvbnMgPSBhc3luYyAodGl0bGVzOiBzdHJpbmcgfCBzdHJpbmdbXSkgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5UmV2aXNpb25zUGFyYW1zID0ge1xuXHRcdHRpdGxlcyxcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHByb3A6ICdyZXZpc2lvbnMnLFxuXHRcdHJ2cHJvcDogJ2NvbnRlbnQnLFxuXHRcdHJ2c2xvdHM6ICdtYWluJyxcblx0XHRzbWF4YWdlOiA2MDAsXG5cdFx0bWF4YWdlOiA2MDAsXG5cdH07XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXG5cdHJldHVybiByZXNwb25zZTtcbn07XG5cbmNvbnN0IGVkaXQgPSBhc3luYyAodGl0bGU6IHN0cmluZywgdGV4dDogc3RyaW5nLCBzdW1tYXJ5Pzogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpRWRpdFBhZ2VQYXJhbXMgPSB7XG5cdFx0dGl0bGUsXG5cdFx0dGV4dCxcblx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0Y29udGVudGZvcm1hdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXHRcdGNvbnRlbnRtb2RlbDogJ2pzb24nLFxuXHRcdG1pbm9yOiB0cnVlLFxuXHRcdHJlY3JlYXRlOiB0cnVlLFxuXHRcdHdhdGNobGlzdDogJ3Vud2F0Y2gnLFxuXHRcdHRhZ3M6IE9QVElPTlMuYXBpVGFnLFxuXHR9O1xuXHRpZiAoc3VtbWFyeSkge1xuXHRcdHBhcmFtcy5zdW1tYXJ5ID0gc3VtbWFyeTtcblx0fVxuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0V2l0aEVkaXRUb2tlbihwYXJhbXMpO1xuXG5cdHJldHVybiByZXNwb25zZTtcbn07XG5cbmNvbnN0IHN0b3JlTG9jYXRpb24gPSBhc3luYyAoe2NvdW50cnlPckFyZWEsIHJlZ2lvbn06IFN0b3JlR2VvSW5mbyk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCB7d2dVc2VyTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IHN0b3JlUGFnZVRpdGxlOiBzdHJpbmcgPSBgVXNlcjoke3dnVXNlck5hbWV9L0dlb0lQLmpzb25gO1xuXG5cdHRyeSB7XG5cdFx0Y29uc3QgZGF0YSA9IGF3YWl0IHF1ZXJ5UmV2aXNvbnMoc3RvcmVQYWdlVGl0bGUpO1xuXG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBKU09OLnBhcnNlKFxuXHRcdFx0ZGF0YVsncXVlcnknXS5wYWdlc1swXT8ucmV2aXNpb25zPy5bMF0uc2xvdHMubWFpbi5jb250ZW50IGFzIHN0cmluZ1xuXHRcdCkgYXMgUGFydGlhbDxTdG9yZUdlb0luZm8+O1xuXG5cdFx0aWYgKCFyZXNwb25zZS5jb3VudHJ5T3JBcmVhKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKHJlc3BvbnNlLmNvdW50cnlPckFyZWEgPT09IGNvdW50cnlPckFyZWEpIHtcblx0XHRcdGlmICghcmVzcG9uc2UucmVnaW9uIHx8ICFyZWdpb24pIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAocmVzcG9uc2UucmVnaW9uID09PSByZWdpb24pIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1cblx0fSBjYXRjaCB7fVxuXG5cdGNvbnN0IGdlb0luZm86IFN0b3JlR2VvSW5mbyA9IHtcblx0XHRjb3VudHJ5T3JBcmVhLFxuXHRcdHJlZ2lvbixcblx0fTtcblxuXHR0cnkge1xuXHRcdGF3YWl0IGVkaXQoc3RvcmVQYWdlVGl0bGUsIEpTT04uc3RyaW5naWZ5KGdlb0luZm8pLCBnZXRNZXNzYWdlKCdVcGRhdGUnKSk7XG5cdH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG5cdFx0Y29uc29sZS5lcnJvcignW0dlb0xvY2F0aW9uXSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0fVxufTtcblxuZXhwb3J0IHtzdG9yZUxvY2F0aW9ufTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxxQkFBK0IsQ0FDcEMsU0FDQSxRQUNBLFVBQ0EsV0FDQSx5QkFDQSxzQkFDQSxxQkFDQSw4QkFDQSxlQUFBO0FBRUQsSUFBTUMsaUJBQTJCLENBQUMsVUFBVSx1QkFBdUIsbUJBQW1COztBQ1Z0RixJQUFBQyxxQkFBeUJDLFFBQUEsZ0JBQUE7O0FDQXhCLElBQUFDLFNBQVU7QUFDVixJQUFBQyxVQUFXOztBQ0RaLElBQUFDLG9CQUF3QkgsUUFBQSxpQkFBQTtBQUV4QixJQUFNSSxPQUFBLEdBQWNELGtCQUFBRSxXQUFBLGVBQUFDLE9BQWlDSixPQUFPLENBQUU7O0FDSDlELElBQUFLLHFCQUF1QlAsUUFBQSxpQkFBQTtBQUV2QixJQUFN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O0NBQUEsV0FBQTtBQUFBLE1BQUF3RSxlQUFBdEQsa0JBRTNCLGFBQTRDO0FBQzVDLFVBQU07TUFBQ21DO0lBQVUsSUFBSUMsR0FBR0MsT0FBT3pCLElBQUk7QUFFbkMsUUFBSSxDQUFDdUIsY0FBY3hELG1CQUFtQjRFLFNBQVNwQixVQUFVLEtBQUt2RCxlQUFlMkUsU0FBU3BCLFVBQVUsR0FBRztBQUNsRztJQUNEO0FBR0EsU0FBQSxHQUFJa0IsbUJBQUFHLGVBQWMsQ0FBQyxVQUFVLFdBQVcsS0FBSyxDQUFDLEdBQUc7QUFDaEQ7SUFDRDtBQUVBLFVBQU07TUFBQ3ZCO01BQWVDO0lBQU0sSUFBQSxPQUFJLEdBQU1yRCxtQkFBQTRFLFlBQVc7QUFDakQsUUFBSSxDQUFDeEIsZUFBZTtBQUNuQjtJQUNEO0FBRUEsU0FBS0YsY0FBYztNQUNsQkU7TUFDQUM7SUFDRCxDQUFDO0VBQ0YsQ0FBQTtBQUFBLFdBckJnQndCLGNBQUE7QUFBQSxXQUFBSixhQUFBeEMsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxTQUFBMkM7QUFBQSxHQUFBLEVBcUJiOyIsCiAgIm5hbWVzIjogWyJTWVNURU1fU0NSSVBUX0xJU1QiLCAiV0VCTUFTVEVSX0xJU1QiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgInJlcXVpcmUiLCAiYXBpVGFnIiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImdldEkxOG5NZXNzYWdlcyIsICJVcGRhdGUiLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgInF1ZXJ5UmV2aXNvbnMiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJ0aXRsZXMiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgInJ2cHJvcCIsICJydnNsb3RzIiwgInNtYXhhZ2UiLCAibWF4YWdlIiwgInJlc3BvbnNlIiwgImdldCIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiZWRpdCIsICJfcmVmMiIsICJ0aXRsZSIsICJ0ZXh0IiwgInN1bW1hcnkiLCAiY29udGVudGZvcm1hdCIsICJjb250ZW50bW9kZWwiLCAibWlub3IiLCAicmVjcmVhdGUiLCAid2F0Y2hsaXN0IiwgInRhZ3MiLCAicG9zdFdpdGhFZGl0VG9rZW4iLCAiX3gyIiwgIl94MyIsICJfeDQiLCAic3RvcmVMb2NhdGlvbiIsICJfcmVmMyIsICJjb3VudHJ5T3JBcmVhIiwgInJlZ2lvbiIsICJ3Z1VzZXJOYW1lIiwgIm13IiwgImNvbmZpZyIsICJzdG9yZVBhZ2VUaXRsZSIsICJfZGF0YSRxdWVyeSRwYWdlcyQiLCAiZGF0YSIsICJKU09OIiwgInBhcnNlIiwgInBhZ2VzIiwgInJldmlzaW9ucyIsICJzbG90cyIsICJtYWluIiwgImNvbnRlbnQiLCAiZ2VvSW5mbyIsICJzdHJpbmdpZnkiLCAiZXJyb3IiLCAiY29uc29sZSIsICJfeDUiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgIl9nZW9Mb2NhdGlvbiIsICJpbmNsdWRlcyIsICJ1c2VySXNJbkdyb3VwIiwgImdldEdlb0luZm8iLCAiZ2VvTG9jYXRpb24iXQp9Cg==

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
      prop: ["revisions"],
      rvprop: ["content"],
      rvslots: "main",
      smaxage: 3600,
      maxage: 3600
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
      const data = yield queryRevisons(storePageTitle);
      const response = JSON.parse(data["query"].pages[0].revisions[0].slots.main.content);
      if (response.countryOrArea === countryOrArea && (response.region === region || response.region && !region)) {
        return;
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0dlb0xvY2F0aW9uL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0dlb0xvY2F0aW9uL0dlb0xvY2F0aW9uLnRzIiwgInNyYy9HZW9Mb2NhdGlvbi9vcHRpb25zLmpzb24iLCAic3JjL0dlb0xvY2F0aW9uL21vZHVsZXMvYXBpLnRzIiwgInNyYy9HZW9Mb2NhdGlvbi9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0dlb0xvY2F0aW9uL21vZHVsZXMvc3RvcmVMb2NhdGlvbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgU1lTVEVNX1NDUklQVF9MSVNUOiBzdHJpbmdbXSA9IFtcblx0J+a7peeUqOi/h+a7pOWZqCcsXG5cdCfmsYLpl7vnvJbogIUnLFxuXHQn5rGC6Ze755m+56eR56S+5Yy6Jyxcblx0J0V4YW1wbGUnLFxuXHQnRXh0ZXJuYWwgY29udHJpYnV0b3JzJyxcblx0J01haW50ZW5hbmNlIHNjcmlwdCcsXG5cdCdNZWRpYVdpa2kgZGVmYXVsdCcsXG5cdCdNZWRpYVdpa2kgbWVzc2FnZSBkZWxpdmVyeScsXG5cdCdOZXcgdXNlciBwYWdlJyxcbl07XG5jb25zdCBXRUJNQVNURVJfTElTVDogc3RyaW5nW10gPSBbJ1FpdVdlbicsICdRaXVXZW4gZm9yIEFjY291bnRzJywgJ1FpdXdlblNvY2lhbE1lZGlhJ107XG5cbmV4cG9ydCB7U1lTVEVNX1NDUklQVF9MSVNULCBXRUJNQVNURVJfTElTVH07XG4iLCAiaW1wb3J0IHtTWVNURU1fU0NSSVBUX0xJU1QsIFdFQk1BU1RFUl9MSVNUfSBmcm9tICcuL21vZHVsZXMvY29uc3RhbnQnO1xuaW1wb3J0IHtnZXRHZW9JbmZvfSBmcm9tICdleHQuZ2FkZ2V0Lkdlbyc7XG5pbXBvcnQge3N0b3JlTG9jYXRpb259IGZyb20gJy4vbW9kdWxlcy9zdG9yZUxvY2F0aW9uJztcbmltcG9ydCB7dXNlcklzSW5Hcm91cH0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuKGFzeW5jIGZ1bmN0aW9uIGdlb0xvY2F0aW9uKCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCB7d2dVc2VyTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKCF3Z1VzZXJOYW1lIHx8IFNZU1RFTV9TQ1JJUFRfTElTVC5pbmNsdWRlcyh3Z1VzZXJOYW1lKSB8fCBXRUJNQVNURVJfTElTVC5pbmNsdWRlcyh3Z1VzZXJOYW1lKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIERpc2FibGVkIGZvciBvZmZpY2lhbCB1c2Vyc1xuXHRpZiAodXNlcklzSW5Hcm91cChbJ3FpdXdlbicsICdzdGV3YXJkJywgJ2JvdCddKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHtjb3VudHJ5T3JBcmVhLCByZWdpb259ID0gYXdhaXQgZ2V0R2VvSW5mbygpO1xuXHRpZiAoIWNvdW50cnlPckFyZWEpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR2b2lkIHN0b3JlTG9jYXRpb24oe1xuXHRcdGNvdW50cnlPckFyZWEsXG5cdFx0cmVnaW9uLFxuXHR9KTtcbn0pKCk7XG4iLCAie1xuXHRcImFwaVRhZ1wiOiBcIkdlb0xvY2F0aW9uXCIsXG5cdFwidmVyc2lvblwiOiBcIjMuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBHZW9Mb2NhdGlvbi8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRVcGRhdGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVXBkYXRlIElQIGxvY2F0aW9uIGluZm9ybWF0aW9uJyxcblx0XHRcdGphOiAnSVDlnLDln5/jga7mg4XloLHjgpLmm7TmlrAnLFxuXHRcdFx0J3poLWhhbnMnOiAn5pu05pawSVDlsZ7lnLDkv6Hmga8nLFxuXHRcdFx0J3poLWhhbnQnOiAn5pu05pawSVDlsazlnLDos4foqIonLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQgdHlwZSB7U3RvcmVHZW9JbmZvfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IHF1ZXJ5UmV2aXNvbnMgPSBhc3luYyAodGl0bGVzOiBzdHJpbmcgfCBzdHJpbmdbXSkgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5UmV2aXNpb25zUGFyYW1zID0ge1xuXHRcdHRpdGxlcyxcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHByb3A6IFsncmV2aXNpb25zJ10sXG5cdFx0cnZwcm9wOiBbJ2NvbnRlbnQnXSxcblx0XHRydnNsb3RzOiAnbWFpbicsXG5cdFx0c21heGFnZTogMzYwMCxcblx0XHRtYXhhZ2U6IDM2MDAsXG5cdH07XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXG5cdHJldHVybiByZXNwb25zZTtcbn07XG5cbmNvbnN0IGVkaXQgPSBhc3luYyAodGl0bGU6IHN0cmluZywgdGV4dDogc3RyaW5nLCBzdW1tYXJ5Pzogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpRWRpdFBhZ2VQYXJhbXMgPSB7XG5cdFx0dGl0bGUsXG5cdFx0dGV4dCxcblx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0Y29udGVudGZvcm1hdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXHRcdGNvbnRlbnRtb2RlbDogJ2pzb24nLFxuXHRcdG1pbm9yOiB0cnVlLFxuXHRcdHJlY3JlYXRlOiB0cnVlLFxuXHRcdHdhdGNobGlzdDogJ3Vud2F0Y2gnLFxuXHRcdHRhZ3M6IE9QVElPTlMuYXBpVGFnLFxuXHR9O1xuXHRpZiAoc3VtbWFyeSkge1xuXHRcdHBhcmFtcy5zdW1tYXJ5ID0gc3VtbWFyeTtcblx0fVxuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0V2l0aEVkaXRUb2tlbihwYXJhbXMpO1xuXG5cdHJldHVybiByZXNwb25zZTtcbn07XG5cbmNvbnN0IHN0b3JlTG9jYXRpb24gPSBhc3luYyAoe2NvdW50cnlPckFyZWEsIHJlZ2lvbn06IFN0b3JlR2VvSW5mbyk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCB7d2dVc2VyTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IHN0b3JlUGFnZVRpdGxlOiBzdHJpbmcgPSBgVXNlcjoke3dnVXNlck5hbWV9L0dlb0lQLmpzb25gO1xuXG5cdHRyeSB7XG5cdFx0Y29uc3QgZGF0YSA9IGF3YWl0IHF1ZXJ5UmV2aXNvbnMoc3RvcmVQYWdlVGl0bGUpO1xuXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtYXJndW1lbnRcblx0XHRjb25zdCByZXNwb25zZSA9IEpTT04ucGFyc2UoZGF0YVsncXVlcnknXS5wYWdlc1swXS5yZXZpc2lvbnNbMF0uc2xvdHMubWFpbi5jb250ZW50KSBhcyBQYXJ0aWFsPFN0b3JlR2VvSW5mbz47XG5cblx0XHRpZiAocmVzcG9uc2UuY291bnRyeU9yQXJlYSA9PT0gY291bnRyeU9yQXJlYSAmJiAocmVzcG9uc2UucmVnaW9uID09PSByZWdpb24gfHwgKHJlc3BvbnNlLnJlZ2lvbiAmJiAhcmVnaW9uKSkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdH0gY2F0Y2gge31cblxuXHRjb25zdCBnZW9JbmZvOiBTdG9yZUdlb0luZm8gPSB7XG5cdFx0Y291bnRyeU9yQXJlYSxcblx0XHRyZWdpb24sXG5cdH07XG5cblx0dHJ5IHtcblx0XHRhd2FpdCBlZGl0KHN0b3JlUGFnZVRpdGxlLCBKU09OLnN0cmluZ2lmeShnZW9JbmZvKSwgZ2V0TWVzc2FnZSgnVXBkYXRlJykpO1xuXHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ1tHZW9Mb2NhdGlvbl0gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdH1cbn07XG5cbmV4cG9ydCB7c3RvcmVMb2NhdGlvbn07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEscUJBQStCLENBQ3BDLFNBQ0EsUUFDQSxVQUNBLFdBQ0EseUJBQ0Esc0JBQ0EscUJBQ0EsOEJBQ0EsZUFBQTtBQUVELElBQU1DLGlCQUEyQixDQUFDLFVBQVUsdUJBQXVCLG1CQUFtQjs7QUNWdEYsSUFBQUMscUJBQXlCQyxRQUFBLGdCQUFBOztBQ0F4QixJQUFBQyxTQUFVO0FBQ1YsSUFBQUMsVUFBVzs7QUNEWixJQUFBQyxvQkFBd0JILFFBQUEsaUJBQUE7QUFFeEIsSUFBTUksT0FBQSxHQUFjRCxrQkFBQUUsV0FBQSxlQUFBQyxPQUFpQ0osT0FBTyxDQUFFOztBQ0g5RCxJQUFBSyxxQkFBdUJQLFFBQUEsaUJBQUE7QUFFdkIsSUFBTVEsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsU0FBQSxHQUFRRixtQkFBQUcsVUFBUztNQUNoQkMsSUFBSTtN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QUMsVUFBVSxXQUFXLEtBQUssQ0FBQyxHQUFHO0FBQ2hEO0lBQ0Q7QUFFQSxVQUFNO01BQUN0QjtNQUFlQztJQUFNLElBQUEsT0FBSSxHQUFNckQsbUJBQUEyRSxZQUFXO0FBQ2pELFFBQUksQ0FBQ3ZCLGVBQWU7QUFDbkI7SUFDRDtBQUVBLFNBQUtGLGNBQWM7TUFDbEJFO01BQ0FDO0lBQ0QsQ0FBQztFQUNGLENBQUE7QUFBQSxXQXJCZ0J1QixjQUFBO0FBQUEsV0FBQUosYUFBQXZDLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsU0FBQTBDO0FBQUEsR0FBQSxFQXFCYjsiLAogICJuYW1lcyI6IFsiU1lTVEVNX1NDUklQVF9MSVNUIiwgIldFQk1BU1RFUl9MSVNUIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJyZXF1aXJlIiwgImFwaVRhZyIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImFwaSIsICJpbml0TXdBcGkiLCAiY29uY2F0IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJnZXRJMThuTWVzc2FnZXMiLCAiVXBkYXRlIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJxdWVyeVJldmlzb25zIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAidGl0bGVzIiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicHJvcCIsICJydnByb3AiLCAicnZzbG90cyIsICJzbWF4YWdlIiwgIm1heGFnZSIsICJyZXNwb25zZSIsICJnZXQiLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImVkaXQiLCAiX3JlZjIiLCAidGl0bGUiLCAidGV4dCIsICJzdW1tYXJ5IiwgImNvbnRlbnRmb3JtYXQiLCAiY29udGVudG1vZGVsIiwgIm1pbm9yIiwgInJlY3JlYXRlIiwgIndhdGNobGlzdCIsICJ0YWdzIiwgInBvc3RXaXRoRWRpdFRva2VuIiwgIl94MiIsICJfeDMiLCAiX3g0IiwgInN0b3JlTG9jYXRpb24iLCAiX3JlZjMiLCAiY291bnRyeU9yQXJlYSIsICJyZWdpb24iLCAid2dVc2VyTmFtZSIsICJtdyIsICJjb25maWciLCAic3RvcmVQYWdlVGl0bGUiLCAiZGF0YSIsICJKU09OIiwgInBhcnNlIiwgInBhZ2VzIiwgInJldmlzaW9ucyIsICJzbG90cyIsICJtYWluIiwgImNvbnRlbnQiLCAiZ2VvSW5mbyIsICJzdHJpbmdpZnkiLCAiZXJyb3IiLCAiY29uc29sZSIsICJfeDUiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgIl9nZW9Mb2NhdGlvbiIsICJpbmNsdWRlcyIsICJ1c2VySXNJbkdyb3VwIiwgImdldEdlb0luZm8iLCAiZ2VvTG9jYXRpb24iXQp9Cg==

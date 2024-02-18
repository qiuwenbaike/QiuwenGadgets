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
      const queryParams = {
        action: "query",
        titles: [storePageTitle],
        format: "json",
        formatversion: "2",
        prop: ["revisions"],
        rvprop: ["content"],
        rvslots: "main"
      };
      const data = yield api.post(queryParams);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0dlb0xvY2F0aW9uL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0dlb0xvY2F0aW9uL0dlb0xvY2F0aW9uLnRzIiwgInNyYy9HZW9Mb2NhdGlvbi9vcHRpb25zLmpzb24iLCAic3JjL0dlb0xvY2F0aW9uL21vZHVsZXMvYXBpLnRzIiwgInNyYy9HZW9Mb2NhdGlvbi9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0dlb0xvY2F0aW9uL21vZHVsZXMvc3RvcmVMb2NhdGlvbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgU1lTVEVNX1NDUklQVF9MSVNUOiBzdHJpbmdbXSA9IFtcblx0J+a7peeUqOi/h+a7pOWZqCcsXG5cdCfmsYLpl7vnvJbogIUnLFxuXHQn5rGC6Ze755m+56eR56S+5Yy6Jyxcblx0J0V4YW1wbGUnLFxuXHQnRXh0ZXJuYWwgY29udHJpYnV0b3JzJyxcblx0J01haW50ZW5hbmNlIHNjcmlwdCcsXG5cdCdNZWRpYVdpa2kgZGVmYXVsdCcsXG5cdCdNZWRpYVdpa2kgbWVzc2FnZSBkZWxpdmVyeScsXG5cdCdOZXcgdXNlciBwYWdlJyxcbl07XG5jb25zdCBXRUJNQVNURVJfTElTVDogc3RyaW5nW10gPSBbJ1FpdVdlbicsICdRaXVXZW4gZm9yIEFjY291bnRzJywgJ1FpdXdlblNvY2lhbE1lZGlhJ107XG5cbmNvbnN0IFdHX1VTRVJfR1JPVVBTOiBzdHJpbmdbXSA9IG13LmNvbmZpZy5nZXQoJ3dnVXNlckdyb3VwcycpID8/IFtdO1xuY29uc3QgV0dfVVNFUl9OQU1FOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCd3Z1VzZXJOYW1lJykgPz8gJyc7XG5jb25zdCBXR19VU0VSX0VESVRfQ09VTlQ6IG51bWJlciA9IG13LmNvbmZpZy5nZXQoJ3dnVXNlckVkaXRDb3VudCcpID8/IDA7XG5cbmV4cG9ydCB7U1lTVEVNX1NDUklQVF9MSVNULCBXRUJNQVNURVJfTElTVCwgV0dfVVNFUl9FRElUX0NPVU5ULCBXR19VU0VSX0dST1VQUywgV0dfVVNFUl9OQU1FfTtcbiIsICJpbXBvcnQge1NZU1RFTV9TQ1JJUFRfTElTVCwgV0VCTUFTVEVSX0xJU1QsIFdHX1VTRVJfRURJVF9DT1VOVCwgV0dfVVNFUl9HUk9VUFMsIFdHX1VTRVJfTkFNRX0gZnJvbSAnLi9tb2R1bGVzL2NvbnN0YW50JztcbmltcG9ydCB7Z2V0R2VvSW5mb30gZnJvbSAnZXh0LmdhZGdldC5HZW8nO1xuaW1wb3J0IHtzdG9yZUxvY2F0aW9ufSBmcm9tICcuL21vZHVsZXMvc3RvcmVMb2NhdGlvbic7XG5cbihhc3luYyBmdW5jdGlvbiBnZW9Mb2NhdGlvbigpOiBQcm9taXNlPHZvaWQ+IHtcblx0aWYgKFNZU1RFTV9TQ1JJUFRfTElTVC5pbmNsdWRlcyhXR19VU0VSX05BTUUpIHx8IFdFQk1BU1RFUl9MSVNULmluY2x1ZGVzKFdHX1VTRVJfTkFNRSkgfHwgIVdHX1VTRVJfTkFNRSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmIChXR19VU0VSX0dST1VQUy5pbmNsdWRlcygnYm90JykgfHwgV0dfVVNFUl9HUk9VUFMuaW5jbHVkZXMoJ3FpdXdlbicpIHx8ICFXR19VU0VSX0VESVRfQ09VTlQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB7Y291bnRyeU9yQXJlYSwgcmVnaW9ufSA9IGF3YWl0IGdldEdlb0luZm8oKTtcblx0aWYgKCFjb3VudHJ5T3JBcmVhKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dm9pZCBzdG9yZUxvY2F0aW9uKHtcblx0XHRjb3VudHJ5T3JBcmVhLFxuXHRcdHJlZ2lvbixcblx0fSk7XG59KSgpO1xuIiwgIntcblx0XCJhcGlUYWdcIjogXCJHZW9Mb2NhdGlvblwiLFxuXHRcInZlcnNpb25cIjogXCIzLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgR2VvTG9jYXRpb24vJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0VXBkYXRlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1VwZGF0ZSBJUCBsb2NhdGlvbiBpbmZvcm1hdGlvbicsXG5cdFx0XHRqYTogJ0lQ5Zyw5Z+f44Gu5oOF5aCx44KS5pu05pawJyxcblx0XHRcdCd6aC1oYW5zJzogJ+abtOaWsElQ5bGe5Zyw5L+h5oGvJyxcblx0XHRcdCd6aC1oYW50JzogJ+abtOaWsElQ5bGs5Zyw6LOH6KiKJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHR5cGUge1N0b3JlR2VvSW5mb30gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge1dHX1VTRVJfTkFNRX0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBzdG9yZUxvY2F0aW9uID0gYXN5bmMgKHtjb3VudHJ5T3JBcmVhLCByZWdpb259OiBTdG9yZUdlb0luZm8pOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3Qgc3RvcmVQYWdlVGl0bGU6IHN0cmluZyA9IGBVc2VyOiR7V0dfVVNFUl9OQU1FfS9HZW9JUC5qc29uYDtcblxuXHR0cnkge1xuXHRcdGNvbnN0IHF1ZXJ5UGFyYW1zOiBBcGlRdWVyeVJldmlzaW9uc1BhcmFtcyA9IHtcblx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdHRpdGxlczogW3N0b3JlUGFnZVRpdGxlXSxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0cHJvcDogWydyZXZpc2lvbnMnXSxcblx0XHRcdHJ2cHJvcDogWydjb250ZW50J10sXG5cdFx0XHRydnNsb3RzOiAnbWFpbicsXG5cdFx0fTtcblxuXHRcdGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkucG9zdChxdWVyeVBhcmFtcyk7XG5cblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hcmd1bWVudCwgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1tZW1iZXItYWNjZXNzXG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBKU09OLnBhcnNlKGRhdGFbJ3F1ZXJ5J10ucGFnZXNbMF0ucmV2aXNpb25zWzBdLnNsb3RzLm1haW4uY29udGVudCkgYXMgUGFydGlhbDxTdG9yZUdlb0luZm8+O1xuXG5cdFx0aWYgKHJlc3BvbnNlLmNvdW50cnlPckFyZWEgPT09IGNvdW50cnlPckFyZWEgJiYgKHJlc3BvbnNlLnJlZ2lvbiA9PT0gcmVnaW9uIHx8IChyZXNwb25zZS5yZWdpb24gJiYgIXJlZ2lvbikpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHR9IGNhdGNoIHt9XG5cblx0Y29uc3QgZ2VvSW5mbzogU3RvcmVHZW9JbmZvID0ge1xuXHRcdGNvdW50cnlPckFyZWEsXG5cdFx0cmVnaW9uLFxuXHR9O1xuXHRjb25zdCBwYXJhbXM6IEFwaUVkaXRQYWdlUGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ2VkaXQnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRjb250ZW50Zm9ybWF0OiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0Y29udGVudG1vZGVsOiAnanNvbicsXG5cdFx0dGl0bGU6IHN0b3JlUGFnZVRpdGxlLFxuXHRcdHRleHQ6IEpTT04uc3RyaW5naWZ5KGdlb0luZm8pLFxuXHRcdHN1bW1hcnk6IGdldE1lc3NhZ2UoJ1VwZGF0ZScpLFxuXHRcdG1pbm9yOiB0cnVlLFxuXHRcdHJlY3JlYXRlOiB0cnVlLFxuXHRcdHdhdGNobGlzdDogJ3Vud2F0Y2gnLFxuXHRcdHRhZ3M6IE9QVElPTlMuYXBpVGFnLFxuXHR9O1xuXG5cdHRyeSB7XG5cdFx0YXdhaXQgYXBpLnBvc3RXaXRoRWRpdFRva2VuKHBhcmFtcyk7XG5cdH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG5cdFx0Y29uc29sZS5lcnJvcignW0dlb0xvY2F0aW9uXSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0fVxufTtcblxuZXhwb3J0IHtzdG9yZUxvY2F0aW9ufTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxxQkFBK0IsQ0FDcEMsU0FDQSxRQUNBLFVBQ0EsV0FDQSx5QkFDQSxzQkFDQSxxQkFDQSw4QkFDQSxlQUFBO0FBRUQsSUFBTUMsaUJBQTJCLENBQUMsVUFBVSx1QkFBdUIsbUJBQW1CO0FBRXRGLElBQU1DLGtCQUFBQyxpQkFBMkJDLEdBQUdDLE9BQU9DLElBQUksY0FBYyxPQUFBLFFBQUFILG1CQUFBLFNBQUFBLGlCQUFLLENBQUE7QUFDbEUsSUFBTUksZ0JBQUFDLGtCQUF1QkosR0FBR0MsT0FBT0MsSUFBSSxZQUFZLE9BQUEsUUFBQUUsb0JBQUEsU0FBQUEsa0JBQUs7QUFDNUQsSUFBTUMsc0JBQUFDLGtCQUE2Qk4sR0FBR0MsT0FBT0MsSUFBSSxpQkFBaUIsT0FBQSxRQUFBSSxvQkFBQSxTQUFBQSxrQkFBSzs7QUNkdkUsSUFBQUMscUJBQXlCQyxRQUFBLGdCQUFBOztBQ0F4QixJQUFBQyxTQUFVO0FBQ1YsSUFBQUMsVUFBVzs7QUNEWixJQUFBQyxvQkFBd0JILFFBQUEsaUJBQUE7QUFFeEIsSUFBTUksT0FBQSxHQUFjRCxrQkFBQUUsV0FBQSxlQUFBQyxPQUFpQ0osT0FBTyxDQUFFOztBQ0g5RCxJQUFBSyxxQkFBdUJQLFFBQUEsaUJBQUE7QUFFdkIsSUFBTVEsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsU0FBQSxHQUFRRixtQkFBQUcsVUFBUztNQUNoQkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0VBQ0Y7QUFDRDtBQUVBLElBQU1DLGVBQWVMLGdCQUFnQjtBQUVyQyxJQUFNTSxhQUFnREMsU0FBUTtBQUM3RCxTQUFPRixhQUFhRSxHQUFHLEtBQUtBO0FBQzdCOztBQ1hBLElBQU1DLGdCQUFBLDJCQUFBO0FBQUEsTUFBQUMsT0FBQUMsa0JBQWdCLFdBQU87SUFBQ0M7SUFBZUM7RUFBTSxHQUFtQztBQUNyRixVQUFNQyxpQkFBQSxRQUFBZixPQUFpQ1gsY0FBWSxhQUFBO0FBRW5ELFFBQUk7QUFDSCxZQUFNMkIsY0FBdUM7UUFDNUNDLFFBQVE7UUFDUkMsUUFBUSxDQUFDSCxjQUFjO1FBQ3ZCSSxRQUFRO1FBQ1JDLGVBQWU7UUFDZkMsTUFBTSxDQUFDLFdBQVc7UUFDbEJDLFFBQVEsQ0FBQyxTQUFTO1FBQ2xCQyxTQUFTO01BQ1Y7QUFFQSxZQUFNQyxPQUFBLE1BQWExQixJQUFJMkIsS0FBS1QsV0FBVztBQUd2QyxZQUFNVSxXQUFXQyxLQUFLQyxNQUFNSixLQUFLLE9BQU8sRUFBRUssTUFBTSxDQUFDLEVBQUVDLFVBQVUsQ0FBQyxFQUFFQyxNQUFNQyxLQUFLQyxPQUFPO0FBRWxGLFVBQUlQLFNBQVNiLGtCQUFrQkEsa0JBQWtCYSxTQUFTWixXQUFXQSxVQUFXWSxTQUFTWixVQUFVLENBQUNBLFNBQVU7QUFDN0c7TUFDRDtJQUNELFFBQVE7SUFBQztBQUVULFVBQU1vQixVQUF3QjtNQUM3QnJCO01BQ0FDO0lBQ0Q7QUFDQSxVQUFNcUIsU0FBNEI7TUFDakNsQixRQUFRO01BQ1JFLFFBQVE7TUFDUkMsZUFBZTtNQUNmZ0IsZUFBZTtNQUNmQyxjQUFjO01BQ2RDLE9BQU92QjtNQUNQd0IsTUFBTVosS0FBS2EsVUFBVU4sT0FBTztNQUM1Qk8sU0FBU2pDLFdBQVcsUUFBUTtNQUM1QmtDLE9BQU87TUFDUEMsVUFBVTtNQUNWQyxXQUFXO01BQ1hDLE1BQWNsRDtJQUNmO0FBRUEsUUFBSTtBQUNILFlBQU1HLElBQUlnRCxrQkFBa0JYLE1BQU07SUFDbkMsU0FBU1ksT0FBZ0I7QUFDeEJDLGNBQVFELE1BQU0sNkJBQTZCQSxLQUFLO0lBQ2pEO0VBQ0QsQ0FBQTtBQUFBLFNBQUEsU0FoRE1yQyxlQUFBdUMsSUFBQTtBQUFBLFdBQUF0QyxLQUFBdUMsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxFQUFBOzs7dUNKRkwsYUFBNEM7QUFDNUMsUUFBSXJFLG1CQUFtQnNFLFNBQVMvRCxZQUFZLEtBQUtOLGVBQWVxRSxTQUFTL0QsWUFBWSxLQUFLLENBQUNBLGNBQWM7QUFDeEc7SUFDRDtBQUVBLFFBQUlMLGVBQWVvRSxTQUFTLEtBQUssS0FBS3BFLGVBQWVvRSxTQUFTLFFBQVEsS0FBSyxDQUFDN0Qsb0JBQW9CO0FBQy9GO0lBQ0Q7QUFFQSxVQUFNO01BQUNzQjtNQUFlQztJQUFNLElBQUEsT0FBSSxHQUFNckIsbUJBQUE0RCxZQUFXO0FBQ2pELFFBQUksQ0FBQ3hDLGVBQWU7QUFDbkI7SUFDRDtBQUVBLFNBQUtILGNBQWM7TUFDbEJHO01BQ0FDO0lBQ0QsQ0FBQztFQUNGLENBQUE7QUFBQSxXQWxCZ0J3QyxjQUFBO0FBQUEsV0FBQUMsYUFBQUwsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxTQUFBRztBQUFBLEdBQUEsRUFrQmI7IiwKICAibmFtZXMiOiBbIlNZU1RFTV9TQ1JJUFRfTElTVCIsICJXRUJNQVNURVJfTElTVCIsICJXR19VU0VSX0dST1VQUyIsICJfbXckY29uZmlnJGdldCIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIldHX1VTRVJfTkFNRSIsICJfbXckY29uZmlnJGdldDIiLCAiV0dfVVNFUl9FRElUX0NPVU5UIiwgIl9tdyRjb25maWckZ2V0MyIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAicmVxdWlyZSIsICJhcGlUYWciLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNvbmNhdCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIlVwZGF0ZSIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAic3RvcmVMb2NhdGlvbiIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgImNvdW50cnlPckFyZWEiLCAicmVnaW9uIiwgInN0b3JlUGFnZVRpdGxlIiwgInF1ZXJ5UGFyYW1zIiwgImFjdGlvbiIsICJ0aXRsZXMiLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicHJvcCIsICJydnByb3AiLCAicnZzbG90cyIsICJkYXRhIiwgInBvc3QiLCAicmVzcG9uc2UiLCAiSlNPTiIsICJwYXJzZSIsICJwYWdlcyIsICJyZXZpc2lvbnMiLCAic2xvdHMiLCAibWFpbiIsICJjb250ZW50IiwgImdlb0luZm8iLCAicGFyYW1zIiwgImNvbnRlbnRmb3JtYXQiLCAiY29udGVudG1vZGVsIiwgInRpdGxlIiwgInRleHQiLCAic3RyaW5naWZ5IiwgInN1bW1hcnkiLCAibWlub3IiLCAicmVjcmVhdGUiLCAid2F0Y2hsaXN0IiwgInRhZ3MiLCAicG9zdFdpdGhFZGl0VG9rZW4iLCAiZXJyb3IiLCAiY29uc29sZSIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiaW5jbHVkZXMiLCAiZ2V0R2VvSW5mbyIsICJnZW9Mb2NhdGlvbiIsICJfZ2VvTG9jYXRpb24iXQp9Cg==

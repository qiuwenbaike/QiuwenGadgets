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
      const data = yield api.post({
        action: "query",
        title: storePageTitle,
        format: "json",
        formatversion: "2",
        prop: ["revisions"],
        rvprop: ["content"],
        rvslots: "main"
      });
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0dlb0xvY2F0aW9uL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0dlb0xvY2F0aW9uL0dlb0xvY2F0aW9uLnRzIiwgInNyYy9HZW9Mb2NhdGlvbi9vcHRpb25zLmpzb24iLCAic3JjL0dlb0xvY2F0aW9uL21vZHVsZXMvYXBpLnRzIiwgInNyYy9HZW9Mb2NhdGlvbi9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0dlb0xvY2F0aW9uL21vZHVsZXMvc3RvcmVMb2NhdGlvbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgU1lTVEVNX1NDUklQVF9MSVNUOiBzdHJpbmdbXSA9IFtcblx0J+a7peeUqOi/h+a7pOWZqCcsXG5cdCfmsYLpl7vnvJbogIUnLFxuXHQn5rGC6Ze755m+56eR56S+5Yy6Jyxcblx0J0V4YW1wbGUnLFxuXHQnRXh0ZXJuYWwgY29udHJpYnV0b3JzJyxcblx0J01haW50ZW5hbmNlIHNjcmlwdCcsXG5cdCdNZWRpYVdpa2kgZGVmYXVsdCcsXG5cdCdNZWRpYVdpa2kgbWVzc2FnZSBkZWxpdmVyeScsXG5cdCdOZXcgdXNlciBwYWdlJyxcbl07XG5jb25zdCBXRUJNQVNURVJfTElTVDogc3RyaW5nW10gPSBbJ1FpdVdlbicsICdRaXVXZW4gZm9yIEFjY291bnRzJywgJ1FpdXdlblNvY2lhbE1lZGlhJ107XG5cbmNvbnN0IFdHX1VTRVJfR1JPVVBTOiBzdHJpbmdbXSA9IG13LmNvbmZpZy5nZXQoJ3dnVXNlckdyb3VwcycpID8/IFtdO1xuY29uc3QgV0dfVVNFUl9OQU1FOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCd3Z1VzZXJOYW1lJykgPz8gJyc7XG5jb25zdCBXR19VU0VSX0VESVRfQ09VTlQ6IG51bWJlciA9IG13LmNvbmZpZy5nZXQoJ3dnVXNlckVkaXRDb3VudCcpID8/IDA7XG5cbmV4cG9ydCB7U1lTVEVNX1NDUklQVF9MSVNULCBXRUJNQVNURVJfTElTVCwgV0dfVVNFUl9FRElUX0NPVU5ULCBXR19VU0VSX0dST1VQUywgV0dfVVNFUl9OQU1FfTtcbiIsICJpbXBvcnQge1NZU1RFTV9TQ1JJUFRfTElTVCwgV0VCTUFTVEVSX0xJU1QsIFdHX1VTRVJfRURJVF9DT1VOVCwgV0dfVVNFUl9HUk9VUFMsIFdHX1VTRVJfTkFNRX0gZnJvbSAnLi9tb2R1bGVzL2NvbnN0YW50JztcbmltcG9ydCB7Z2V0R2VvSW5mb30gZnJvbSAnZXh0LmdhZGdldC5HZW8nO1xuaW1wb3J0IHtzdG9yZUxvY2F0aW9ufSBmcm9tICcuL21vZHVsZXMvc3RvcmVMb2NhdGlvbic7XG5cbihhc3luYyBmdW5jdGlvbiBnZW9Mb2NhdGlvbigpOiBQcm9taXNlPHZvaWQ+IHtcblx0aWYgKFNZU1RFTV9TQ1JJUFRfTElTVC5pbmNsdWRlcyhXR19VU0VSX05BTUUpIHx8IFdFQk1BU1RFUl9MSVNULmluY2x1ZGVzKFdHX1VTRVJfTkFNRSkgfHwgIVdHX1VTRVJfTkFNRSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmIChXR19VU0VSX0dST1VQUy5pbmNsdWRlcygnYm90JykgfHwgV0dfVVNFUl9HUk9VUFMuaW5jbHVkZXMoJ3FpdXdlbicpIHx8ICFXR19VU0VSX0VESVRfQ09VTlQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB7Y291bnRyeU9yQXJlYSwgcmVnaW9ufSA9IGF3YWl0IGdldEdlb0luZm8oKTtcblx0aWYgKCFjb3VudHJ5T3JBcmVhKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dm9pZCBzdG9yZUxvY2F0aW9uKHtcblx0XHRjb3VudHJ5T3JBcmVhLFxuXHRcdHJlZ2lvbixcblx0fSk7XG59KSgpO1xuIiwgIntcblx0XCJhcGlUYWdcIjogXCJHZW9Mb2NhdGlvblwiLFxuXHRcInZlcnNpb25cIjogXCIzLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgR2VvTG9jYXRpb24vJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0VXBkYXRlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1VwZGF0ZSBJUCBsb2NhdGlvbiBpbmZvcm1hdGlvbicsXG5cdFx0XHRqYTogJ0lQ5Zyw5Z+f44Gu5oOF5aCx44KS5pu05pawJyxcblx0XHRcdCd6aC1oYW5zJzogJ+abtOaWsElQ5bGe5Zyw5L+h5oGvJyxcblx0XHRcdCd6aC1oYW50JzogJ+abtOaWsElQ5bGs5Zyw6LOH6KiKJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHR5cGUge1N0b3JlR2VvSW5mb30gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge1dHX1VTRVJfTkFNRX0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBzdG9yZUxvY2F0aW9uID0gYXN5bmMgKHtjb3VudHJ5T3JBcmVhLCByZWdpb259OiBTdG9yZUdlb0luZm8pOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3Qgc3RvcmVQYWdlVGl0bGU6IHN0cmluZyA9IGBVc2VyOiR7V0dfVVNFUl9OQU1FfS9HZW9JUC5qc29uYDtcblxuXHR0cnkge1xuXHRcdGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkucG9zdCh7XG5cdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHR0aXRsZTogc3RvcmVQYWdlVGl0bGUsXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdHByb3A6IFsncmV2aXNpb25zJ10sXG5cdFx0XHRydnByb3A6IFsnY29udGVudCddLFxuXHRcdFx0cnZzbG90czogJ21haW4nLFxuXHRcdH0pO1xuXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtYXJndW1lbnQsIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtbWVtYmVyLWFjY2Vzc1xuXHRcdGNvbnN0IHJlc3BvbnNlID0gSlNPTi5wYXJzZShkYXRhWydxdWVyeSddLnBhZ2VzWzBdLnJldmlzaW9uc1swXS5zbG90cy5tYWluLmNvbnRlbnQpIGFzIFBhcnRpYWw8U3RvcmVHZW9JbmZvPjtcblxuXHRcdGlmIChyZXNwb25zZS5jb3VudHJ5T3JBcmVhID09PSBjb3VudHJ5T3JBcmVhICYmIChyZXNwb25zZS5yZWdpb24gPT09IHJlZ2lvbiB8fCAocmVzcG9uc2UucmVnaW9uICYmICFyZWdpb24pKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0fSBjYXRjaCB7fVxuXG5cdGNvbnN0IGdlb0luZm86IFN0b3JlR2VvSW5mbyA9IHtcblx0XHRjb3VudHJ5T3JBcmVhLFxuXHRcdHJlZ2lvbixcblx0fTtcblx0Y29uc3QgcGFyYW1zOiBBcGlFZGl0UGFnZVBhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0Y29udGVudGZvcm1hdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXHRcdGNvbnRlbnRtb2RlbDogJ2pzb24nLFxuXHRcdHRpdGxlOiBzdG9yZVBhZ2VUaXRsZSxcblx0XHR0ZXh0OiBKU09OLnN0cmluZ2lmeShnZW9JbmZvKSxcblx0XHRzdW1tYXJ5OiBnZXRNZXNzYWdlKCdVcGRhdGUnKSxcblx0XHRtaW5vcjogdHJ1ZSxcblx0XHRyZWNyZWF0ZTogdHJ1ZSxcblx0XHR3YXRjaGxpc3Q6ICd1bndhdGNoJyxcblx0XHR0YWdzOiBPUFRJT05TLmFwaVRhZyxcblx0fTtcblxuXHR0cnkge1xuXHRcdGF3YWl0IGFwaS5wb3N0V2l0aEVkaXRUb2tlbihwYXJhbXMpO1xuXHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ1tHZW9Mb2NhdGlvbl0gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdH1cbn07XG5cbmV4cG9ydCB7c3RvcmVMb2NhdGlvbn07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEscUJBQStCLENBQ3BDLFNBQ0EsUUFDQSxVQUNBLFdBQ0EseUJBQ0Esc0JBQ0EscUJBQ0EsOEJBQ0EsZUFBQTtBQUVELElBQU1DLGlCQUEyQixDQUFDLFVBQVUsdUJBQXVCLG1CQUFtQjtBQUV0RixJQUFNQyxrQkFBQUMsaUJBQTJCQyxHQUFHQyxPQUFPQyxJQUFJLGNBQWMsT0FBQSxRQUFBSCxtQkFBQSxTQUFBQSxpQkFBSyxDQUFBO0FBQ2xFLElBQU1JLGdCQUFBQyxrQkFBdUJKLEdBQUdDLE9BQU9DLElBQUksWUFBWSxPQUFBLFFBQUFFLG9CQUFBLFNBQUFBLGtCQUFLO0FBQzVELElBQU1DLHNCQUFBQyxrQkFBNkJOLEdBQUdDLE9BQU9DLElBQUksaUJBQWlCLE9BQUEsUUFBQUksb0JBQUEsU0FBQUEsa0JBQUs7O0FDZHZFLElBQUFDLHFCQUF5QkMsUUFBQSxnQkFBQTs7QUNBeEIsSUFBQUMsU0FBVTtBQUNWLElBQUFDLFVBQVc7O0FDRFosSUFBQUMsb0JBQXdCSCxRQUFBLGlCQUFBO0FBRXhCLElBQU1JLE9BQUEsR0FBY0Qsa0JBQUFFLFdBQUEsZUFBQUMsT0FBaUNKLE9BQU8sQ0FBRTs7QUNIOUQsSUFBQUsscUJBQXVCUCxRQUFBLGlCQUFBO0FBRXZCLElBQU1RLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLFNBQUEsR0FBUUYsbUJBQUFHLFVBQVM7TUFDaEJDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztFQUNGO0FBQ0Q7QUFFQSxJQUFNQyxlQUFlTCxnQkFBZ0I7QUFFckMsSUFBTU0sYUFBZ0RDLFNBQVE7QUFDN0QsU0FBT0YsYUFBYUUsR0FBRyxLQUFLQTtBQUM3Qjs7QUNYQSxJQUFNQyxnQkFBQSwyQkFBQTtBQUFBLE1BQUFDLE9BQUFDLGtCQUFnQixXQUFPO0lBQUNDO0lBQWVDO0VBQU0sR0FBbUM7QUFDckYsVUFBTUMsaUJBQUEsUUFBQWYsT0FBaUNYLGNBQVksYUFBQTtBQUVuRCxRQUFJO0FBQ0gsWUFBTTJCLE9BQUEsTUFBYWxCLElBQUltQixLQUFLO1FBQzNCQyxRQUFRO1FBQ1JDLE9BQU9KO1FBQ1BLLFFBQVE7UUFDUkMsZUFBZTtRQUNmQyxNQUFNLENBQUMsV0FBVztRQUNsQkMsUUFBUSxDQUFDLFNBQVM7UUFDbEJDLFNBQVM7TUFDVixDQUFDO0FBR0QsWUFBTUMsV0FBV0MsS0FBS0MsTUFBTVgsS0FBSyxPQUFPLEVBQUVZLE1BQU0sQ0FBQyxFQUFFQyxVQUFVLENBQUMsRUFBRUMsTUFBTUMsS0FBS0MsT0FBTztBQUVsRixVQUFJUCxTQUFTWixrQkFBa0JBLGtCQUFrQlksU0FBU1gsV0FBV0EsVUFBV1csU0FBU1gsVUFBVSxDQUFDQSxTQUFVO0FBQzdHO01BQ0Q7SUFDRCxRQUFRO0lBQUM7QUFFVCxVQUFNbUIsVUFBd0I7TUFDN0JwQjtNQUNBQztJQUNEO0FBQ0EsVUFBTW9CLFNBQTRCO01BQ2pDaEIsUUFBUTtNQUNSRSxRQUFRO01BQ1JDLGVBQWU7TUFDZmMsZUFBZTtNQUNmQyxjQUFjO01BQ2RqQixPQUFPSjtNQUNQc0IsTUFBTVgsS0FBS1ksVUFBVUwsT0FBTztNQUM1Qk0sU0FBUy9CLFdBQVcsUUFBUTtNQUM1QmdDLE9BQU87TUFDUEMsVUFBVTtNQUNWQyxXQUFXO01BQ1hDLE1BQWNoRDtJQUNmO0FBRUEsUUFBSTtBQUNILFlBQU1HLElBQUk4QyxrQkFBa0JWLE1BQU07SUFDbkMsU0FBU1csT0FBZ0I7QUFDeEJDLGNBQVFELE1BQU0sNkJBQTZCQSxLQUFLO0lBQ2pEO0VBQ0QsQ0FBQTtBQUFBLFNBQUEsU0E5Q01uQyxlQUFBcUMsSUFBQTtBQUFBLFdBQUFwQyxLQUFBcUMsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxFQUFBOzs7dUNKRkwsYUFBNEM7QUFDNUMsUUFBSW5FLG1CQUFtQm9FLFNBQVM3RCxZQUFZLEtBQUtOLGVBQWVtRSxTQUFTN0QsWUFBWSxLQUFLLENBQUNBLGNBQWM7QUFDeEc7SUFDRDtBQUVBLFFBQUlMLGVBQWVrRSxTQUFTLEtBQUssS0FBS2xFLGVBQWVrRSxTQUFTLFFBQVEsS0FBSyxDQUFDM0Qsb0JBQW9CO0FBQy9GO0lBQ0Q7QUFFQSxVQUFNO01BQUNzQjtNQUFlQztJQUFNLElBQUEsT0FBSSxHQUFNckIsbUJBQUEwRCxZQUFXO0FBQ2pELFFBQUksQ0FBQ3RDLGVBQWU7QUFDbkI7SUFDRDtBQUVBLFNBQUtILGNBQWM7TUFDbEJHO01BQ0FDO0lBQ0QsQ0FBQztFQUNGLENBQUE7QUFBQSxXQWxCZ0JzQyxjQUFBO0FBQUEsV0FBQUMsYUFBQUwsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxTQUFBRztBQUFBLEdBQUEsRUFrQmI7IiwKICAibmFtZXMiOiBbIlNZU1RFTV9TQ1JJUFRfTElTVCIsICJXRUJNQVNURVJfTElTVCIsICJXR19VU0VSX0dST1VQUyIsICJfbXckY29uZmlnJGdldCIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIldHX1VTRVJfTkFNRSIsICJfbXckY29uZmlnJGdldDIiLCAiV0dfVVNFUl9FRElUX0NPVU5UIiwgIl9tdyRjb25maWckZ2V0MyIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAicmVxdWlyZSIsICJhcGlUYWciLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNvbmNhdCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIlVwZGF0ZSIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAic3RvcmVMb2NhdGlvbiIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgImNvdW50cnlPckFyZWEiLCAicmVnaW9uIiwgInN0b3JlUGFnZVRpdGxlIiwgImRhdGEiLCAicG9zdCIsICJhY3Rpb24iLCAidGl0bGUiLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicHJvcCIsICJydnByb3AiLCAicnZzbG90cyIsICJyZXNwb25zZSIsICJKU09OIiwgInBhcnNlIiwgInBhZ2VzIiwgInJldmlzaW9ucyIsICJzbG90cyIsICJtYWluIiwgImNvbnRlbnQiLCAiZ2VvSW5mbyIsICJwYXJhbXMiLCAiY29udGVudGZvcm1hdCIsICJjb250ZW50bW9kZWwiLCAidGV4dCIsICJzdHJpbmdpZnkiLCAic3VtbWFyeSIsICJtaW5vciIsICJyZWNyZWF0ZSIsICJ3YXRjaGxpc3QiLCAidGFncyIsICJwb3N0V2l0aEVkaXRUb2tlbiIsICJlcnJvciIsICJjb25zb2xlIiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJpbmNsdWRlcyIsICJnZXRHZW9JbmZvIiwgImdlb0xvY2F0aW9uIiwgIl9nZW9Mb2NhdGlvbiJdCn0K

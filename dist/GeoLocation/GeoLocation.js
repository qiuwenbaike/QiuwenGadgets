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
var storeLocation = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* ({
    countryOrArea,
    region
  }) {
    const {
      wgUserName
    } = mw.config.get();
    const storePageTitle = "User:".concat(wgUserName, "/GeoIP.json");
    try {
      const queryParams = {
        action: "query",
        titles: storePageTitle,
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
    const {
      wgUserName,
      wgUserGroups,
      wgUserEditCount
    } = mw.config.get();
    if (!wgUserName || SYSTEM_SCRIPT_LIST.includes(wgUserName) || WEBMASTER_LIST.includes(wgUserName) || !wgUserName) {
      return;
    }
    if (!wgUserGroups || wgUserGroups.includes("bot") || wgUserGroups.includes("qiuwen") || !(wgUserEditCount || 0)) {
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0dlb0xvY2F0aW9uL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0dlb0xvY2F0aW9uL0dlb0xvY2F0aW9uLnRzIiwgInNyYy9HZW9Mb2NhdGlvbi9vcHRpb25zLmpzb24iLCAic3JjL0dlb0xvY2F0aW9uL21vZHVsZXMvYXBpLnRzIiwgInNyYy9HZW9Mb2NhdGlvbi9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0dlb0xvY2F0aW9uL21vZHVsZXMvc3RvcmVMb2NhdGlvbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgU1lTVEVNX1NDUklQVF9MSVNUOiBzdHJpbmdbXSA9IFtcblx0J+a7peeUqOi/h+a7pOWZqCcsXG5cdCfmsYLpl7vnvJbogIUnLFxuXHQn5rGC6Ze755m+56eR56S+5Yy6Jyxcblx0J0V4YW1wbGUnLFxuXHQnRXh0ZXJuYWwgY29udHJpYnV0b3JzJyxcblx0J01haW50ZW5hbmNlIHNjcmlwdCcsXG5cdCdNZWRpYVdpa2kgZGVmYXVsdCcsXG5cdCdNZWRpYVdpa2kgbWVzc2FnZSBkZWxpdmVyeScsXG5cdCdOZXcgdXNlciBwYWdlJyxcbl07XG5jb25zdCBXRUJNQVNURVJfTElTVDogc3RyaW5nW10gPSBbJ1FpdVdlbicsICdRaXVXZW4gZm9yIEFjY291bnRzJywgJ1FpdXdlblNvY2lhbE1lZGlhJ107XG5cbmV4cG9ydCB7U1lTVEVNX1NDUklQVF9MSVNULCBXRUJNQVNURVJfTElTVH07XG4iLCAiaW1wb3J0IHtTWVNURU1fU0NSSVBUX0xJU1QsIFdFQk1BU1RFUl9MSVNUfSBmcm9tICcuL21vZHVsZXMvY29uc3RhbnQnO1xuaW1wb3J0IHtnZXRHZW9JbmZvfSBmcm9tICdleHQuZ2FkZ2V0Lkdlbyc7XG5pbXBvcnQge3N0b3JlTG9jYXRpb259IGZyb20gJy4vbW9kdWxlcy9zdG9yZUxvY2F0aW9uJztcblxuKGFzeW5jIGZ1bmN0aW9uIGdlb0xvY2F0aW9uKCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCB7d2dVc2VyTmFtZSwgd2dVc2VyR3JvdXBzLCB3Z1VzZXJFZGl0Q291bnR9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICghd2dVc2VyTmFtZSB8fCBTWVNURU1fU0NSSVBUX0xJU1QuaW5jbHVkZXMod2dVc2VyTmFtZSkgfHwgV0VCTUFTVEVSX0xJU1QuaW5jbHVkZXMod2dVc2VyTmFtZSkgfHwgIXdnVXNlck5hbWUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoIXdnVXNlckdyb3VwcyB8fCB3Z1VzZXJHcm91cHMuaW5jbHVkZXMoJ2JvdCcpIHx8IHdnVXNlckdyb3Vwcy5pbmNsdWRlcygncWl1d2VuJykgfHwgISh3Z1VzZXJFZGl0Q291bnQgfHwgMCkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB7Y291bnRyeU9yQXJlYSwgcmVnaW9ufSA9IGF3YWl0IGdldEdlb0luZm8oKTtcblx0aWYgKCFjb3VudHJ5T3JBcmVhKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dm9pZCBzdG9yZUxvY2F0aW9uKHtcblx0XHRjb3VudHJ5T3JBcmVhLFxuXHRcdHJlZ2lvbixcblx0fSk7XG59KSgpO1xuIiwgIntcblx0XCJhcGlUYWdcIjogXCJHZW9Mb2NhdGlvblwiLFxuXHRcInZlcnNpb25cIjogXCIzLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgR2VvTG9jYXRpb24vJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0VXBkYXRlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1VwZGF0ZSBJUCBsb2NhdGlvbiBpbmZvcm1hdGlvbicsXG5cdFx0XHRqYTogJ0lQ5Zyw5Z+f44Gu5oOF5aCx44KS5pu05pawJyxcblx0XHRcdCd6aC1oYW5zJzogJ+abtOaWsElQ5bGe5Zyw5L+h5oGvJyxcblx0XHRcdCd6aC1oYW50JzogJ+abtOaWsElQ5bGs5Zyw6LOH6KiKJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHR5cGUge1N0b3JlR2VvSW5mb30gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBzdG9yZUxvY2F0aW9uID0gYXN5bmMgKHtjb3VudHJ5T3JBcmVhLCByZWdpb259OiBTdG9yZUdlb0luZm8pOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3Qge3dnVXNlck5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCBzdG9yZVBhZ2VUaXRsZTogc3RyaW5nID0gYFVzZXI6JHt3Z1VzZXJOYW1lfS9HZW9JUC5qc29uYDtcblxuXHR0cnkge1xuXHRcdGNvbnN0IHF1ZXJ5UGFyYW1zOiBBcGlRdWVyeVJldmlzaW9uc1BhcmFtcyA9IHtcblx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdHRpdGxlczogc3RvcmVQYWdlVGl0bGUsXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdHByb3A6IFsncmV2aXNpb25zJ10sXG5cdFx0XHRydnByb3A6IFsnY29udGVudCddLFxuXHRcdFx0cnZzbG90czogJ21haW4nLFxuXHRcdH07XG5cblx0XHRjb25zdCBkYXRhID0gYXdhaXQgYXBpLnBvc3QocXVlcnlQYXJhbXMpO1xuXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtYXJndW1lbnRcblx0XHRjb25zdCByZXNwb25zZSA9IEpTT04ucGFyc2UoZGF0YVsncXVlcnknXS5wYWdlc1swXS5yZXZpc2lvbnNbMF0uc2xvdHMubWFpbi5jb250ZW50KSBhcyBQYXJ0aWFsPFN0b3JlR2VvSW5mbz47XG5cblx0XHRpZiAocmVzcG9uc2UuY291bnRyeU9yQXJlYSA9PT0gY291bnRyeU9yQXJlYSAmJiAocmVzcG9uc2UucmVnaW9uID09PSByZWdpb24gfHwgKHJlc3BvbnNlLnJlZ2lvbiAmJiAhcmVnaW9uKSkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdH0gY2F0Y2gge31cblxuXHRjb25zdCBnZW9JbmZvOiBTdG9yZUdlb0luZm8gPSB7XG5cdFx0Y291bnRyeU9yQXJlYSxcblx0XHRyZWdpb24sXG5cdH07XG5cdGNvbnN0IHBhcmFtczogQXBpRWRpdFBhZ2VQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdGNvbnRlbnRmb3JtYXQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcblx0XHRjb250ZW50bW9kZWw6ICdqc29uJyxcblx0XHR0aXRsZTogc3RvcmVQYWdlVGl0bGUsXG5cdFx0dGV4dDogSlNPTi5zdHJpbmdpZnkoZ2VvSW5mbyksXG5cdFx0c3VtbWFyeTogZ2V0TWVzc2FnZSgnVXBkYXRlJyksXG5cdFx0bWlub3I6IHRydWUsXG5cdFx0cmVjcmVhdGU6IHRydWUsXG5cdFx0d2F0Y2hsaXN0OiAndW53YXRjaCcsXG5cdFx0dGFnczogT1BUSU9OUy5hcGlUYWcsXG5cdH07XG5cblx0dHJ5IHtcblx0XHRhd2FpdCBhcGkucG9zdFdpdGhFZGl0VG9rZW4ocGFyYW1zKTtcblx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHRjb25zb2xlLmVycm9yKCdbR2VvTG9jYXRpb25dIEFqYXggZXJyb3I6JywgZXJyb3IpO1xuXHR9XG59O1xuXG5leHBvcnQge3N0b3JlTG9jYXRpb259O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLHFCQUErQixDQUNwQyxTQUNBLFFBQ0EsVUFDQSxXQUNBLHlCQUNBLHNCQUNBLHFCQUNBLDhCQUNBLGVBQUE7QUFFRCxJQUFNQyxpQkFBMkIsQ0FBQyxVQUFVLHVCQUF1QixtQkFBbUI7O0FDVnRGLElBQUFDLHFCQUF5QkMsUUFBQSxnQkFBQTs7QUNBeEIsSUFBQUMsU0FBVTtBQUNWLElBQUFDLFVBQVc7O0FDRFosSUFBQUMsb0JBQXdCSCxRQUFBLGlCQUFBO0FBRXhCLElBQU1JLE9BQUEsR0FBY0Qsa0JBQUFFLFdBQUEsZUFBQUMsT0FBaUNKLE9BQU8sQ0FBRTs7QUNIOUQsSUFBQUsscUJBQXVCUCxRQUFBLGlCQUFBO0FBRXZCLElBQU1RLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLFNBQUEsR0FBUUYsbUJBQUFHLFVBQVM7TUFDaEJDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztFQUNGO0FBQ0Q7QUFFQSxJQUFNQyxlQUFlTCxnQkFBZ0I7QUFFckMsSUFBTU0sYUFBZ0RDLFNBQVE7QUFDN0QsU0FBT0YsYUFBYUUsR0FBRyxLQUFLQTtBQUM3Qjs7QUNaQSxJQUFNQyxnQkFBQSwyQkFBQTtBQUFBLE1BQUFDLE9BQUFDLGtCQUFnQixXQUFPO0lBQUNDO0lBQWVDO0VBQU0sR0FBbUM7QUFDckYsVUFBTTtNQUFDQztJQUFVLElBQUlDLEdBQUdDLE9BQU9DLElBQUk7QUFDbkMsVUFBTUMsaUJBQUEsUUFBQW5CLE9BQWlDZSxZQUFVLGFBQUE7QUFFakQsUUFBSTtBQUNILFlBQU1LLGNBQXVDO1FBQzVDQyxRQUFRO1FBQ1JDLFFBQVFIO1FBQ1JJLFFBQVE7UUFDUkMsZUFBZTtRQUNmQyxNQUFNLENBQUMsV0FBVztRQUNsQkMsUUFBUSxDQUFDLFNBQVM7UUFDbEJDLFNBQVM7TUFDVjtBQUVBLFlBQU1DLE9BQUEsTUFBYTlCLElBQUkrQixLQUFLVCxXQUFXO0FBR3ZDLFlBQU1VLFdBQVdDLEtBQUtDLE1BQU1KLEtBQUssT0FBTyxFQUFFSyxNQUFNLENBQUMsRUFBRUMsVUFBVSxDQUFDLEVBQUVDLE1BQU1DLEtBQUtDLE9BQU87QUFFbEYsVUFBSVAsU0FBU2pCLGtCQUFrQkEsa0JBQWtCaUIsU0FBU2hCLFdBQVdBLFVBQVdnQixTQUFTaEIsVUFBVSxDQUFDQSxTQUFVO0FBQzdHO01BQ0Q7SUFDRCxRQUFRO0lBQUM7QUFFVCxVQUFNd0IsVUFBd0I7TUFDN0J6QjtNQUNBQztJQUNEO0FBQ0EsVUFBTXlCLFNBQTRCO01BQ2pDbEIsUUFBUTtNQUNSRSxRQUFRO01BQ1JDLGVBQWU7TUFDZmdCLGVBQWU7TUFDZkMsY0FBYztNQUNkQyxPQUFPdkI7TUFDUHdCLE1BQU1aLEtBQUthLFVBQVVOLE9BQU87TUFDNUJPLFNBQVNyQyxXQUFXLFFBQVE7TUFDNUJzQyxPQUFPO01BQ1BDLFVBQVU7TUFDVkMsV0FBVztNQUNYQyxNQUFjdEQ7SUFDZjtBQUVBLFFBQUk7QUFDSCxZQUFNRyxJQUFJb0Qsa0JBQWtCWCxNQUFNO0lBQ25DLFNBQVNZLE9BQWdCO0FBQ3hCQyxjQUFRRCxNQUFNLDZCQUE2QkEsS0FBSztJQUNqRDtFQUNELENBQUE7QUFBQSxTQUFBLFNBakRNekMsZUFBQTJDLElBQUE7QUFBQSxXQUFBMUMsS0FBQTJDLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTs7O3VDSkRMLGFBQTRDO0FBQzVDLFVBQU07TUFBQ3hDO01BQVl5QztNQUFjQztJQUFlLElBQUl6QyxHQUFHQyxPQUFPQyxJQUFJO0FBRWxFLFFBQUksQ0FBQ0gsY0FBY3hCLG1CQUFtQm1FLFNBQVMzQyxVQUFVLEtBQUt2QixlQUFla0UsU0FBUzNDLFVBQVUsS0FBSyxDQUFDQSxZQUFZO0FBQ2pIO0lBQ0Q7QUFFQSxRQUFJLENBQUN5QyxnQkFBZ0JBLGFBQWFFLFNBQVMsS0FBSyxLQUFLRixhQUFhRSxTQUFTLFFBQVEsS0FBSyxFQUFFRCxtQkFBbUIsSUFBSTtBQUNoSDtJQUNEO0FBRUEsVUFBTTtNQUFDNUM7TUFBZUM7SUFBTSxJQUFBLE9BQUksR0FBTXJCLG1CQUFBa0UsWUFBVztBQUNqRCxRQUFJLENBQUM5QyxlQUFlO0FBQ25CO0lBQ0Q7QUFFQSxTQUFLSCxjQUFjO01BQ2xCRztNQUNBQztJQUNELENBQUM7RUFDRixDQUFBO0FBQUEsV0FwQmdCOEMsY0FBQTtBQUFBLFdBQUFDLGFBQUFQLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsU0FBQUs7QUFBQSxHQUFBLEVBb0JiOyIsCiAgIm5hbWVzIjogWyJTWVNURU1fU0NSSVBUX0xJU1QiLCAiV0VCTUFTVEVSX0xJU1QiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgInJlcXVpcmUiLCAiYXBpVGFnIiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImdldEkxOG5NZXNzYWdlcyIsICJVcGRhdGUiLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgInN0b3JlTG9jYXRpb24iLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJjb3VudHJ5T3JBcmVhIiwgInJlZ2lvbiIsICJ3Z1VzZXJOYW1lIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAic3RvcmVQYWdlVGl0bGUiLCAicXVlcnlQYXJhbXMiLCAiYWN0aW9uIiwgInRpdGxlcyIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgInJ2cHJvcCIsICJydnNsb3RzIiwgImRhdGEiLCAicG9zdCIsICJyZXNwb25zZSIsICJKU09OIiwgInBhcnNlIiwgInBhZ2VzIiwgInJldmlzaW9ucyIsICJzbG90cyIsICJtYWluIiwgImNvbnRlbnQiLCAiZ2VvSW5mbyIsICJwYXJhbXMiLCAiY29udGVudGZvcm1hdCIsICJjb250ZW50bW9kZWwiLCAidGl0bGUiLCAidGV4dCIsICJzdHJpbmdpZnkiLCAic3VtbWFyeSIsICJtaW5vciIsICJyZWNyZWF0ZSIsICJ3YXRjaGxpc3QiLCAidGFncyIsICJwb3N0V2l0aEVkaXRUb2tlbiIsICJlcnJvciIsICJjb25zb2xlIiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJ3Z1VzZXJHcm91cHMiLCAid2dVc2VyRWRpdENvdW50IiwgImluY2x1ZGVzIiwgImdldEdlb0luZm8iLCAiZ2VvTG9jYXRpb24iLCAiX2dlb0xvY2F0aW9uIl0KfQo=

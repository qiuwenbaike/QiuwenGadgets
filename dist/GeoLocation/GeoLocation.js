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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0dlb0xvY2F0aW9uL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0dlb0xvY2F0aW9uL0dlb0xvY2F0aW9uLnRzIiwgInNyYy9HZW9Mb2NhdGlvbi9vcHRpb25zLmpzb24iLCAic3JjL0dlb0xvY2F0aW9uL21vZHVsZXMvYXBpLnRzIiwgInNyYy9HZW9Mb2NhdGlvbi9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0dlb0xvY2F0aW9uL21vZHVsZXMvc3RvcmVMb2NhdGlvbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgU1lTVEVNX1NDUklQVF9MSVNUOiBzdHJpbmdbXSA9IFtcblx0J+a7peeUqOi/h+a7pOWZqCcsXG5cdCfmsYLpl7vnvJbogIUnLFxuXHQn5rGC6Ze755m+56eR56S+5Yy6Jyxcblx0J0V4YW1wbGUnLFxuXHQnRXh0ZXJuYWwgY29udHJpYnV0b3JzJyxcblx0J01haW50ZW5hbmNlIHNjcmlwdCcsXG5cdCdNZWRpYVdpa2kgZGVmYXVsdCcsXG5cdCdNZWRpYVdpa2kgbWVzc2FnZSBkZWxpdmVyeScsXG5cdCdOZXcgdXNlciBwYWdlJyxcbl07XG5jb25zdCBXRUJNQVNURVJfTElTVDogc3RyaW5nW10gPSBbJ1FpdVdlbicsICdRaXVXZW4gZm9yIEFjY291bnRzJywgJ1FpdXdlblNvY2lhbE1lZGlhJ107XG5cbmV4cG9ydCB7U1lTVEVNX1NDUklQVF9MSVNULCBXRUJNQVNURVJfTElTVH07XG4iLCAiaW1wb3J0IHtTWVNURU1fU0NSSVBUX0xJU1QsIFdFQk1BU1RFUl9MSVNUfSBmcm9tICcuL21vZHVsZXMvY29uc3RhbnQnO1xuaW1wb3J0IHtnZXRHZW9JbmZvfSBmcm9tICdleHQuZ2FkZ2V0Lkdlbyc7XG5pbXBvcnQge3N0b3JlTG9jYXRpb259IGZyb20gJy4vbW9kdWxlcy9zdG9yZUxvY2F0aW9uJztcblxuKGFzeW5jIGZ1bmN0aW9uIGdlb0xvY2F0aW9uKCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCB7d2dVc2VyTmFtZSwgd2dVc2VyR3JvdXBzLCB3Z1VzZXJFZGl0Q291bnR9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICghd2dVc2VyTmFtZSB8fCBTWVNURU1fU0NSSVBUX0xJU1QuaW5jbHVkZXMod2dVc2VyTmFtZSkgfHwgV0VCTUFTVEVSX0xJU1QuaW5jbHVkZXMod2dVc2VyTmFtZSkgfHwgIXdnVXNlck5hbWUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoIXdnVXNlckdyb3VwcyB8fCB3Z1VzZXJHcm91cHMuaW5jbHVkZXMoJ2JvdCcpIHx8IHdnVXNlckdyb3Vwcy5pbmNsdWRlcygncWl1d2VuJykgfHwgISh3Z1VzZXJFZGl0Q291bnQgfHwgMCkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB7Y291bnRyeU9yQXJlYSwgcmVnaW9ufSA9IGF3YWl0IGdldEdlb0luZm8oKTtcblx0aWYgKCFjb3VudHJ5T3JBcmVhKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dm9pZCBzdG9yZUxvY2F0aW9uKHtcblx0XHRjb3VudHJ5T3JBcmVhLFxuXHRcdHJlZ2lvbixcblx0fSk7XG59KSgpO1xuIiwgIntcblx0XCJhcGlUYWdcIjogXCJHZW9Mb2NhdGlvblwiLFxuXHRcInZlcnNpb25cIjogXCIzLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgR2VvTG9jYXRpb24vJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0VXBkYXRlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1VwZGF0ZSBJUCBsb2NhdGlvbiBpbmZvcm1hdGlvbicsXG5cdFx0XHRqYTogJ0lQ5Zyw5Z+f44Gu5oOF5aCx44KS5pu05pawJyxcblx0XHRcdCd6aC1oYW5zJzogJ+abtOaWsElQ5bGe5Zyw5L+h5oGvJyxcblx0XHRcdCd6aC1oYW50JzogJ+abtOaWsElQ5bGs5Zyw6LOH6KiKJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHR5cGUge1N0b3JlR2VvSW5mb30gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBzdG9yZUxvY2F0aW9uID0gYXN5bmMgKHtjb3VudHJ5T3JBcmVhLCByZWdpb259OiBTdG9yZUdlb0luZm8pOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3Qge3dnVXNlck5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCBzdG9yZVBhZ2VUaXRsZTogc3RyaW5nID0gYFVzZXI6JHt3Z1VzZXJOYW1lfS9HZW9JUC5qc29uYDtcblxuXHR0cnkge1xuXHRcdGNvbnN0IHF1ZXJ5UGFyYW1zOiBBcGlRdWVyeVJldmlzaW9uc1BhcmFtcyA9IHtcblx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdHRpdGxlczogW3N0b3JlUGFnZVRpdGxlXSxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0cHJvcDogWydyZXZpc2lvbnMnXSxcblx0XHRcdHJ2cHJvcDogWydjb250ZW50J10sXG5cdFx0XHRydnNsb3RzOiAnbWFpbicsXG5cdFx0fTtcblxuXHRcdGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkucG9zdChxdWVyeVBhcmFtcyk7XG5cblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hcmd1bWVudFxuXHRcdGNvbnN0IHJlc3BvbnNlID0gSlNPTi5wYXJzZShkYXRhWydxdWVyeSddLnBhZ2VzWzBdLnJldmlzaW9uc1swXS5zbG90cy5tYWluLmNvbnRlbnQpIGFzIFBhcnRpYWw8U3RvcmVHZW9JbmZvPjtcblxuXHRcdGlmIChyZXNwb25zZS5jb3VudHJ5T3JBcmVhID09PSBjb3VudHJ5T3JBcmVhICYmIChyZXNwb25zZS5yZWdpb24gPT09IHJlZ2lvbiB8fCAocmVzcG9uc2UucmVnaW9uICYmICFyZWdpb24pKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0fSBjYXRjaCB7fVxuXG5cdGNvbnN0IGdlb0luZm86IFN0b3JlR2VvSW5mbyA9IHtcblx0XHRjb3VudHJ5T3JBcmVhLFxuXHRcdHJlZ2lvbixcblx0fTtcblx0Y29uc3QgcGFyYW1zOiBBcGlFZGl0UGFnZVBhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0Y29udGVudGZvcm1hdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXHRcdGNvbnRlbnRtb2RlbDogJ2pzb24nLFxuXHRcdHRpdGxlOiBzdG9yZVBhZ2VUaXRsZSxcblx0XHR0ZXh0OiBKU09OLnN0cmluZ2lmeShnZW9JbmZvKSxcblx0XHRzdW1tYXJ5OiBnZXRNZXNzYWdlKCdVcGRhdGUnKSxcblx0XHRtaW5vcjogdHJ1ZSxcblx0XHRyZWNyZWF0ZTogdHJ1ZSxcblx0XHR3YXRjaGxpc3Q6ICd1bndhdGNoJyxcblx0XHR0YWdzOiBPUFRJT05TLmFwaVRhZyxcblx0fTtcblxuXHR0cnkge1xuXHRcdGF3YWl0IGFwaS5wb3N0V2l0aEVkaXRUb2tlbihwYXJhbXMpO1xuXHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ1tHZW9Mb2NhdGlvbl0gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdH1cbn07XG5cbmV4cG9ydCB7c3RvcmVMb2NhdGlvbn07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEscUJBQStCLENBQ3BDLFNBQ0EsUUFDQSxVQUNBLFdBQ0EseUJBQ0Esc0JBQ0EscUJBQ0EsOEJBQ0EsZUFBQTtBQUVELElBQU1DLGlCQUEyQixDQUFDLFVBQVUsdUJBQXVCLG1CQUFtQjs7QUNWdEYsSUFBQUMscUJBQXlCQyxRQUFBLGdCQUFBOztBQ0F4QixJQUFBQyxTQUFVO0FBQ1YsSUFBQUMsVUFBVzs7QUNEWixJQUFBQyxvQkFBd0JILFFBQUEsaUJBQUE7QUFFeEIsSUFBTUksT0FBQSxHQUFjRCxrQkFBQUUsV0FBQSxlQUFBQyxPQUFpQ0osT0FBTyxDQUFFOztBQ0g5RCxJQUFBSyxxQkFBdUJQLFFBQUEsaUJBQUE7QUFFdkIsSUFBTVEsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsU0FBQSxHQUFRRixtQkFBQUcsVUFBUztNQUNoQkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0VBQ0Y7QUFDRDtBQUVBLElBQU1DLGVBQWVMLGdCQUFnQjtBQUVyQyxJQUFNTSxhQUFnREMsU0FBUTtBQUM3RCxTQUFPRixhQUFhRSxHQUFHLEtBQUtBO0FBQzdCOztBQ1pBLElBQU1DLGdCQUFBLDJCQUFBO0FBQUEsTUFBQUMsT0FBQUMsa0JBQWdCLFdBQU87SUFBQ0M7SUFBZUM7RUFBTSxHQUFtQztBQUNyRixVQUFNO01BQUNDO0lBQVUsSUFBSUMsR0FBR0MsT0FBT0MsSUFBSTtBQUNuQyxVQUFNQyxpQkFBQSxRQUFBbkIsT0FBaUNlLFlBQVUsYUFBQTtBQUVqRCxRQUFJO0FBQ0gsWUFBTUssY0FBdUM7UUFDNUNDLFFBQVE7UUFDUkMsUUFBUSxDQUFDSCxjQUFjO1FBQ3ZCSSxRQUFRO1FBQ1JDLGVBQWU7UUFDZkMsTUFBTSxDQUFDLFdBQVc7UUFDbEJDLFFBQVEsQ0FBQyxTQUFTO1FBQ2xCQyxTQUFTO01BQ1Y7QUFFQSxZQUFNQyxPQUFBLE1BQWE5QixJQUFJK0IsS0FBS1QsV0FBVztBQUd2QyxZQUFNVSxXQUFXQyxLQUFLQyxNQUFNSixLQUFLLE9BQU8sRUFBRUssTUFBTSxDQUFDLEVBQUVDLFVBQVUsQ0FBQyxFQUFFQyxNQUFNQyxLQUFLQyxPQUFPO0FBRWxGLFVBQUlQLFNBQVNqQixrQkFBa0JBLGtCQUFrQmlCLFNBQVNoQixXQUFXQSxVQUFXZ0IsU0FBU2hCLFVBQVUsQ0FBQ0EsU0FBVTtBQUM3RztNQUNEO0lBQ0QsUUFBUTtJQUFDO0FBRVQsVUFBTXdCLFVBQXdCO01BQzdCekI7TUFDQUM7SUFDRDtBQUNBLFVBQU15QixTQUE0QjtNQUNqQ2xCLFFBQVE7TUFDUkUsUUFBUTtNQUNSQyxlQUFlO01BQ2ZnQixlQUFlO01BQ2ZDLGNBQWM7TUFDZEMsT0FBT3ZCO01BQ1B3QixNQUFNWixLQUFLYSxVQUFVTixPQUFPO01BQzVCTyxTQUFTckMsV0FBVyxRQUFRO01BQzVCc0MsT0FBTztNQUNQQyxVQUFVO01BQ1ZDLFdBQVc7TUFDWEMsTUFBY3REO0lBQ2Y7QUFFQSxRQUFJO0FBQ0gsWUFBTUcsSUFBSW9ELGtCQUFrQlgsTUFBTTtJQUNuQyxTQUFTWSxPQUFnQjtBQUN4QkMsY0FBUUQsTUFBTSw2QkFBNkJBLEtBQUs7SUFDakQ7RUFDRCxDQUFBO0FBQUEsU0FBQSxTQWpETXpDLGVBQUEyQyxJQUFBO0FBQUEsV0FBQTFDLEtBQUEyQyxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEVBQUE7Ozt1Q0pETCxhQUE0QztBQUM1QyxVQUFNO01BQUN4QztNQUFZeUM7TUFBY0M7SUFBZSxJQUFJekMsR0FBR0MsT0FBT0MsSUFBSTtBQUVsRSxRQUFJLENBQUNILGNBQWN4QixtQkFBbUJtRSxTQUFTM0MsVUFBVSxLQUFLdkIsZUFBZWtFLFNBQVMzQyxVQUFVLEtBQUssQ0FBQ0EsWUFBWTtBQUNqSDtJQUNEO0FBRUEsUUFBSSxDQUFDeUMsZ0JBQWdCQSxhQUFhRSxTQUFTLEtBQUssS0FBS0YsYUFBYUUsU0FBUyxRQUFRLEtBQUssRUFBRUQsbUJBQW1CLElBQUk7QUFDaEg7SUFDRDtBQUVBLFVBQU07TUFBQzVDO01BQWVDO0lBQU0sSUFBQSxPQUFJLEdBQU1yQixtQkFBQWtFLFlBQVc7QUFDakQsUUFBSSxDQUFDOUMsZUFBZTtBQUNuQjtJQUNEO0FBRUEsU0FBS0gsY0FBYztNQUNsQkc7TUFDQUM7SUFDRCxDQUFDO0VBQ0YsQ0FBQTtBQUFBLFdBcEJnQjhDLGNBQUE7QUFBQSxXQUFBQyxhQUFBUCxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLFNBQUFLO0FBQUEsR0FBQSxFQW9CYjsiLAogICJuYW1lcyI6IFsiU1lTVEVNX1NDUklQVF9MSVNUIiwgIldFQk1BU1RFUl9MSVNUIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJyZXF1aXJlIiwgImFwaVRhZyIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImFwaSIsICJpbml0TXdBcGkiLCAiY29uY2F0IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJnZXRJMThuTWVzc2FnZXMiLCAiVXBkYXRlIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJzdG9yZUxvY2F0aW9uIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAiY291bnRyeU9yQXJlYSIsICJyZWdpb24iLCAid2dVc2VyTmFtZSIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgInN0b3JlUGFnZVRpdGxlIiwgInF1ZXJ5UGFyYW1zIiwgImFjdGlvbiIsICJ0aXRsZXMiLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicHJvcCIsICJydnByb3AiLCAicnZzbG90cyIsICJkYXRhIiwgInBvc3QiLCAicmVzcG9uc2UiLCAiSlNPTiIsICJwYXJzZSIsICJwYWdlcyIsICJyZXZpc2lvbnMiLCAic2xvdHMiLCAibWFpbiIsICJjb250ZW50IiwgImdlb0luZm8iLCAicGFyYW1zIiwgImNvbnRlbnRmb3JtYXQiLCAiY29udGVudG1vZGVsIiwgInRpdGxlIiwgInRleHQiLCAic3RyaW5naWZ5IiwgInN1bW1hcnkiLCAibWlub3IiLCAicmVjcmVhdGUiLCAid2F0Y2hsaXN0IiwgInRhZ3MiLCAicG9zdFdpdGhFZGl0VG9rZW4iLCAiZXJyb3IiLCAiY29uc29sZSIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAid2dVc2VyR3JvdXBzIiwgIndnVXNlckVkaXRDb3VudCIsICJpbmNsdWRlcyIsICJnZXRHZW9JbmZvIiwgImdlb0xvY2F0aW9uIiwgIl9nZW9Mb2NhdGlvbiJdCn0K

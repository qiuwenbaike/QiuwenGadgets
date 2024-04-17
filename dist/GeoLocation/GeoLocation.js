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
var queryRevisons = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* (titles) {
    const params = {
      action: "query",
      titles,
      format: "json",
      formatversion: "2",
      prop: ["revisions"],
      rvprop: ["content"],
      rvslots: "main"
    };
    const response = yield api.post(params);
    return response;
  });
  return function queryRevisons2(_x) {
    return _ref.apply(this, arguments);
  };
}();
var edit = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* (title, text, summary) {
    const params = {
      action: "edit",
      format: "json",
      formatversion: "2",
      contentformat: "application/json",
      contentmodel: "json",
      title,
      text,
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0dlb0xvY2F0aW9uL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0dlb0xvY2F0aW9uL0dlb0xvY2F0aW9uLnRzIiwgInNyYy9HZW9Mb2NhdGlvbi9vcHRpb25zLmpzb24iLCAic3JjL0dlb0xvY2F0aW9uL21vZHVsZXMvYXBpLnRzIiwgInNyYy9HZW9Mb2NhdGlvbi9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0dlb0xvY2F0aW9uL21vZHVsZXMvc3RvcmVMb2NhdGlvbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgU1lTVEVNX1NDUklQVF9MSVNUOiBzdHJpbmdbXSA9IFtcblx0J+a7peeUqOi/h+a7pOWZqCcsXG5cdCfmsYLpl7vnvJbogIUnLFxuXHQn5rGC6Ze755m+56eR56S+5Yy6Jyxcblx0J0V4YW1wbGUnLFxuXHQnRXh0ZXJuYWwgY29udHJpYnV0b3JzJyxcblx0J01haW50ZW5hbmNlIHNjcmlwdCcsXG5cdCdNZWRpYVdpa2kgZGVmYXVsdCcsXG5cdCdNZWRpYVdpa2kgbWVzc2FnZSBkZWxpdmVyeScsXG5cdCdOZXcgdXNlciBwYWdlJyxcbl07XG5jb25zdCBXRUJNQVNURVJfTElTVDogc3RyaW5nW10gPSBbJ1FpdVdlbicsICdRaXVXZW4gZm9yIEFjY291bnRzJywgJ1FpdXdlblNvY2lhbE1lZGlhJ107XG5cbmV4cG9ydCB7U1lTVEVNX1NDUklQVF9MSVNULCBXRUJNQVNURVJfTElTVH07XG4iLCAiaW1wb3J0IHtTWVNURU1fU0NSSVBUX0xJU1QsIFdFQk1BU1RFUl9MSVNUfSBmcm9tICcuL21vZHVsZXMvY29uc3RhbnQnO1xuaW1wb3J0IHtnZXRHZW9JbmZvfSBmcm9tICdleHQuZ2FkZ2V0Lkdlbyc7XG5pbXBvcnQge3N0b3JlTG9jYXRpb259IGZyb20gJy4vbW9kdWxlcy9zdG9yZUxvY2F0aW9uJztcblxuKGFzeW5jIGZ1bmN0aW9uIGdlb0xvY2F0aW9uKCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCB7d2dVc2VyTmFtZSwgd2dVc2VyR3JvdXBzLCB3Z1VzZXJFZGl0Q291bnR9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICghd2dVc2VyTmFtZSB8fCBTWVNURU1fU0NSSVBUX0xJU1QuaW5jbHVkZXMod2dVc2VyTmFtZSkgfHwgV0VCTUFTVEVSX0xJU1QuaW5jbHVkZXMod2dVc2VyTmFtZSkgfHwgIXdnVXNlck5hbWUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoIXdnVXNlckdyb3VwcyB8fCB3Z1VzZXJHcm91cHMuaW5jbHVkZXMoJ2JvdCcpIHx8IHdnVXNlckdyb3Vwcy5pbmNsdWRlcygncWl1d2VuJykgfHwgISh3Z1VzZXJFZGl0Q291bnQgfHwgMCkpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB7Y291bnRyeU9yQXJlYSwgcmVnaW9ufSA9IGF3YWl0IGdldEdlb0luZm8oKTtcblx0aWYgKCFjb3VudHJ5T3JBcmVhKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dm9pZCBzdG9yZUxvY2F0aW9uKHtcblx0XHRjb3VudHJ5T3JBcmVhLFxuXHRcdHJlZ2lvbixcblx0fSk7XG59KSgpO1xuIiwgIntcblx0XCJhcGlUYWdcIjogXCJHZW9Mb2NhdGlvblwiLFxuXHRcInZlcnNpb25cIjogXCIzLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgR2VvTG9jYXRpb24vJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0VXBkYXRlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1VwZGF0ZSBJUCBsb2NhdGlvbiBpbmZvcm1hdGlvbicsXG5cdFx0XHRqYTogJ0lQ5Zyw5Z+f44Gu5oOF5aCx44KS5pu05pawJyxcblx0XHRcdCd6aC1oYW5zJzogJ+abtOaWsElQ5bGe5Zyw5L+h5oGvJyxcblx0XHRcdCd6aC1oYW50JzogJ+abtOaWsElQ5bGs5Zyw6LOH6KiKJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHR5cGUge1N0b3JlR2VvSW5mb30gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge2FwaX0gZnJvbSAnLi9hcGknO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBxdWVyeVJldmlzb25zID0gYXN5bmMgKHRpdGxlczogc3RyaW5nIHwgc3RyaW5nW10pID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVJldmlzaW9uc1BhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0dGl0bGVzLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRwcm9wOiBbJ3JldmlzaW9ucyddLFxuXHRcdHJ2cHJvcDogWydjb250ZW50J10sXG5cdFx0cnZzbG90czogJ21haW4nLFxuXHR9O1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KHBhcmFtcyk7XG5cblx0cmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgZWRpdCA9IGFzeW5jICh0aXRsZTogc3RyaW5nLCB0ZXh0OiBzdHJpbmcsIHN1bW1hcnk/OiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlFZGl0UGFnZVBhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0Y29udGVudGZvcm1hdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXHRcdGNvbnRlbnRtb2RlbDogJ2pzb24nLFxuXHRcdHRpdGxlLFxuXHRcdHRleHQsXG5cdFx0bWlub3I6IHRydWUsXG5cdFx0cmVjcmVhdGU6IHRydWUsXG5cdFx0d2F0Y2hsaXN0OiAndW53YXRjaCcsXG5cdFx0dGFnczogT1BUSU9OUy5hcGlUYWcsXG5cdH07XG5cdGlmIChzdW1tYXJ5KSB7XG5cdFx0cGFyYW1zLnN1bW1hcnkgPSBzdW1tYXJ5O1xuXHR9XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3RXaXRoRWRpdFRva2VuKHBhcmFtcyk7XG5cblx0cmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3Qgc3RvcmVMb2NhdGlvbiA9IGFzeW5jICh7Y291bnRyeU9yQXJlYSwgcmVnaW9ufTogU3RvcmVHZW9JbmZvKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGNvbnN0IHt3Z1VzZXJOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3Qgc3RvcmVQYWdlVGl0bGU6IHN0cmluZyA9IGBVc2VyOiR7d2dVc2VyTmFtZX0vR2VvSVAuanNvbmA7XG5cblx0dHJ5IHtcblx0XHRjb25zdCBkYXRhID0gYXdhaXQgcXVlcnlSZXZpc29ucyhzdG9yZVBhZ2VUaXRsZSk7XG5cblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hcmd1bWVudFxuXHRcdGNvbnN0IHJlc3BvbnNlID0gSlNPTi5wYXJzZShkYXRhWydxdWVyeSddLnBhZ2VzWzBdLnJldmlzaW9uc1swXS5zbG90cy5tYWluLmNvbnRlbnQpIGFzIFBhcnRpYWw8U3RvcmVHZW9JbmZvPjtcblxuXHRcdGlmIChyZXNwb25zZS5jb3VudHJ5T3JBcmVhID09PSBjb3VudHJ5T3JBcmVhICYmIChyZXNwb25zZS5yZWdpb24gPT09IHJlZ2lvbiB8fCAocmVzcG9uc2UucmVnaW9uICYmICFyZWdpb24pKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0fSBjYXRjaCB7fVxuXG5cdGNvbnN0IGdlb0luZm86IFN0b3JlR2VvSW5mbyA9IHtcblx0XHRjb3VudHJ5T3JBcmVhLFxuXHRcdHJlZ2lvbixcblx0fTtcblxuXHR0cnkge1xuXHRcdGF3YWl0IGVkaXQoc3RvcmVQYWdlVGl0bGUsIEpTT04uc3RyaW5naWZ5KGdlb0luZm8pLCBnZXRNZXNzYWdlKCdVcGRhdGUnKSk7XG5cdH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG5cdFx0Y29uc29sZS5lcnJvcignW0dlb0xvY2F0aW9uXSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0fVxufTtcblxuZXhwb3J0IHtzdG9yZUxvY2F0aW9ufTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxxQkFBK0IsQ0FDcEMsU0FDQSxRQUNBLFVBQ0EsV0FDQSx5QkFDQSxzQkFDQSxxQkFDQSw4QkFDQSxlQUFBO0FBRUQsSUFBTUMsaUJBQTJCLENBQUMsVUFBVSx1QkFBdUIsbUJBQW1COztBQ1Z0RixJQUFBQyxxQkFBeUJDLFFBQUEsZ0JBQUE7O0FDQXhCLElBQUFDLFNBQVU7QUFDVixJQUFBQyxVQUFXOztBQ0RaLElBQUFDLG9CQUF3QkgsUUFBQSxpQkFBQTtBQUV4QixJQUFNSSxPQUFBLEdBQWNELGtCQUFBRSxXQUFBLGVBQUFDLE9BQWlDSixPQUFPLENBQUU7O0FDSDlELElBQUFLLHFCQUF1QlAsUUFBQSxpQkFBQTtBQUV2QixJQUFNUSxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOQyxTQUFBLEdBQVFGLG1CQUFBRyxVQUFTO01BQ2hCQyxJQUFJO01BQ0pD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VUFBTTtNQUFDckI7TUFBZUM7SUFBTSxJQUFBLE9BQUksR0FBTW5ELG1CQUFBeUUsWUFBVztBQUNqRCxRQUFJLENBQUN2QixlQUFlO0FBQ25CO0lBQ0Q7QUFFQSxTQUFLRixjQUFjO01BQ2xCRTtNQUNBQztJQUNELENBQUM7RUFDRixDQUFBO0FBQUEsV0FwQmdCdUIsY0FBQTtBQUFBLFdBQUFDLGFBQUE1QyxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLFNBQUEwQztBQUFBLEdBQUEsRUFvQmI7IiwKICAibmFtZXMiOiBbIlNZU1RFTV9TQ1JJUFRfTElTVCIsICJXRUJNQVNURVJfTElTVCIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAicmVxdWlyZSIsICJhcGlUYWciLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNvbmNhdCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIlVwZGF0ZSIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAicXVlcnlSZXZpc29ucyIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInRpdGxlcyIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAicnZwcm9wIiwgInJ2c2xvdHMiLCAicmVzcG9uc2UiLCAicG9zdCIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiZWRpdCIsICJfcmVmMiIsICJ0aXRsZSIsICJ0ZXh0IiwgInN1bW1hcnkiLCAiY29udGVudGZvcm1hdCIsICJjb250ZW50bW9kZWwiLCAibWlub3IiLCAicmVjcmVhdGUiLCAid2F0Y2hsaXN0IiwgInRhZ3MiLCAicG9zdFdpdGhFZGl0VG9rZW4iLCAiX3gyIiwgIl94MyIsICJfeDQiLCAic3RvcmVMb2NhdGlvbiIsICJfcmVmMyIsICJjb3VudHJ5T3JBcmVhIiwgInJlZ2lvbiIsICJ3Z1VzZXJOYW1lIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAic3RvcmVQYWdlVGl0bGUiLCAiZGF0YSIsICJKU09OIiwgInBhcnNlIiwgInBhZ2VzIiwgInJldmlzaW9ucyIsICJzbG90cyIsICJtYWluIiwgImNvbnRlbnQiLCAiZ2VvSW5mbyIsICJzdHJpbmdpZnkiLCAiZXJyb3IiLCAiY29uc29sZSIsICJfeDUiLCAid2dVc2VyR3JvdXBzIiwgIndnVXNlckVkaXRDb3VudCIsICJpbmNsdWRlcyIsICJnZXRHZW9JbmZvIiwgImdlb0xvY2F0aW9uIiwgIl9nZW9Mb2NhdGlvbiJdCn0K

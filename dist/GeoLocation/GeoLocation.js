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
var import_ext_gadget4 = require("ext.gadget.Util");
(function() {
  var _geoLocation = _asyncToGenerator(function* () {
    const {
      wgUserName
    } = mw.config.get();
    if (!wgUserName || SYSTEM_SCRIPT_LIST.includes(wgUserName) || WEBMASTER_LIST.includes(wgUserName)) {
      return;
    }
    if ((0, import_ext_gadget4.userIsInGroup)("qiuwen") || (0, import_ext_gadget4.userIsInGroup)("steward") || (0, import_ext_gadget4.userIsInGroup)("bot")) {
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0dlb0xvY2F0aW9uL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0dlb0xvY2F0aW9uL0dlb0xvY2F0aW9uLnRzIiwgInNyYy9HZW9Mb2NhdGlvbi9vcHRpb25zLmpzb24iLCAic3JjL0dlb0xvY2F0aW9uL21vZHVsZXMvYXBpLnRzIiwgInNyYy9HZW9Mb2NhdGlvbi9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0dlb0xvY2F0aW9uL21vZHVsZXMvc3RvcmVMb2NhdGlvbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgU1lTVEVNX1NDUklQVF9MSVNUOiBzdHJpbmdbXSA9IFtcblx0J+a7peeUqOi/h+a7pOWZqCcsXG5cdCfmsYLpl7vnvJbogIUnLFxuXHQn5rGC6Ze755m+56eR56S+5Yy6Jyxcblx0J0V4YW1wbGUnLFxuXHQnRXh0ZXJuYWwgY29udHJpYnV0b3JzJyxcblx0J01haW50ZW5hbmNlIHNjcmlwdCcsXG5cdCdNZWRpYVdpa2kgZGVmYXVsdCcsXG5cdCdNZWRpYVdpa2kgbWVzc2FnZSBkZWxpdmVyeScsXG5cdCdOZXcgdXNlciBwYWdlJyxcbl07XG5jb25zdCBXRUJNQVNURVJfTElTVDogc3RyaW5nW10gPSBbJ1FpdVdlbicsICdRaXVXZW4gZm9yIEFjY291bnRzJywgJ1FpdXdlblNvY2lhbE1lZGlhJ107XG5cbmV4cG9ydCB7U1lTVEVNX1NDUklQVF9MSVNULCBXRUJNQVNURVJfTElTVH07XG4iLCAiaW1wb3J0IHtTWVNURU1fU0NSSVBUX0xJU1QsIFdFQk1BU1RFUl9MSVNUfSBmcm9tICcuL21vZHVsZXMvY29uc3RhbnQnO1xuaW1wb3J0IHtnZXRHZW9JbmZvfSBmcm9tICdleHQuZ2FkZ2V0Lkdlbyc7XG5pbXBvcnQge3N0b3JlTG9jYXRpb259IGZyb20gJy4vbW9kdWxlcy9zdG9yZUxvY2F0aW9uJztcbmltcG9ydCB7dXNlcklzSW5Hcm91cH0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuKGFzeW5jIGZ1bmN0aW9uIGdlb0xvY2F0aW9uKCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCB7d2dVc2VyTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKCF3Z1VzZXJOYW1lIHx8IFNZU1RFTV9TQ1JJUFRfTElTVC5pbmNsdWRlcyh3Z1VzZXJOYW1lKSB8fCBXRUJNQVNURVJfTElTVC5pbmNsdWRlcyh3Z1VzZXJOYW1lKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIERpc2FibGVkIGZvciBvZmZpY2lhbCB1c2Vyc1xuXHRpZiAodXNlcklzSW5Hcm91cCgncWl1d2VuJykgfHwgdXNlcklzSW5Hcm91cCgnc3Rld2FyZCcpIHx8IHVzZXJJc0luR3JvdXAoJ2JvdCcpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qge2NvdW50cnlPckFyZWEsIHJlZ2lvbn0gPSBhd2FpdCBnZXRHZW9JbmZvKCk7XG5cdGlmICghY291bnRyeU9yQXJlYSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHZvaWQgc3RvcmVMb2NhdGlvbih7XG5cdFx0Y291bnRyeU9yQXJlYSxcblx0XHRyZWdpb24sXG5cdH0pO1xufSkoKTtcbiIsICJ7XG5cdFwiYXBpVGFnXCI6IFwiR2VvTG9jYXRpb25cIixcblx0XCJ2ZXJzaW9uXCI6IFwiMy4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYEdlb0xvY2F0aW9uLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdFVwZGF0ZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdVcGRhdGUgSVAgbG9jYXRpb24gaW5mb3JtYXRpb24nLFxuXHRcdFx0amE6ICdJUOWcsOWfn+OBruaDheWgseOCkuabtOaWsCcsXG5cdFx0XHQnemgtaGFucyc6ICfmm7TmlrBJUOWxnuWcsOS/oeaBrycsXG5cdFx0XHQnemgtaGFudCc6ICfmm7TmlrBJUOWxrOWcsOizh+ioiicsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB0eXBlIHtTdG9yZUdlb0luZm99IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgcXVlcnlSZXZpc29ucyA9IGFzeW5jICh0aXRsZXM6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlSZXZpc2lvbnNQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdHRpdGxlcyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cHJvcDogWydyZXZpc2lvbnMnXSxcblx0XHRydnByb3A6IFsnY29udGVudCddLFxuXHRcdHJ2c2xvdHM6ICdtYWluJyxcblx0fTtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdChwYXJhbXMpO1xuXG5cdHJldHVybiByZXNwb25zZTtcbn07XG5cbmNvbnN0IGVkaXQgPSBhc3luYyAodGl0bGU6IHN0cmluZywgdGV4dDogc3RyaW5nLCBzdW1tYXJ5Pzogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpRWRpdFBhZ2VQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdGNvbnRlbnRmb3JtYXQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcblx0XHRjb250ZW50bW9kZWw6ICdqc29uJyxcblx0XHR0aXRsZSxcblx0XHR0ZXh0LFxuXHRcdG1pbm9yOiB0cnVlLFxuXHRcdHJlY3JlYXRlOiB0cnVlLFxuXHRcdHdhdGNobGlzdDogJ3Vud2F0Y2gnLFxuXHRcdHRhZ3M6IE9QVElPTlMuYXBpVGFnLFxuXHR9O1xuXHRpZiAoc3VtbWFyeSkge1xuXHRcdHBhcmFtcy5zdW1tYXJ5ID0gc3VtbWFyeTtcblx0fVxuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0V2l0aEVkaXRUb2tlbihwYXJhbXMpO1xuXG5cdHJldHVybiByZXNwb25zZTtcbn07XG5cbmNvbnN0IHN0b3JlTG9jYXRpb24gPSBhc3luYyAoe2NvdW50cnlPckFyZWEsIHJlZ2lvbn06IFN0b3JlR2VvSW5mbyk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCB7d2dVc2VyTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IHN0b3JlUGFnZVRpdGxlOiBzdHJpbmcgPSBgVXNlcjoke3dnVXNlck5hbWV9L0dlb0lQLmpzb25gO1xuXG5cdHRyeSB7XG5cdFx0Y29uc3QgZGF0YSA9IGF3YWl0IHF1ZXJ5UmV2aXNvbnMoc3RvcmVQYWdlVGl0bGUpO1xuXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtYXJndW1lbnRcblx0XHRjb25zdCByZXNwb25zZSA9IEpTT04ucGFyc2UoZGF0YVsncXVlcnknXS5wYWdlc1swXS5yZXZpc2lvbnNbMF0uc2xvdHMubWFpbi5jb250ZW50KSBhcyBQYXJ0aWFsPFN0b3JlR2VvSW5mbz47XG5cblx0XHRpZiAocmVzcG9uc2UuY291bnRyeU9yQXJlYSA9PT0gY291bnRyeU9yQXJlYSAmJiAocmVzcG9uc2UucmVnaW9uID09PSByZWdpb24gfHwgKHJlc3BvbnNlLnJlZ2lvbiAmJiAhcmVnaW9uKSkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdH0gY2F0Y2gge31cblxuXHRjb25zdCBnZW9JbmZvOiBTdG9yZUdlb0luZm8gPSB7XG5cdFx0Y291bnRyeU9yQXJlYSxcblx0XHRyZWdpb24sXG5cdH07XG5cblx0dHJ5IHtcblx0XHRhd2FpdCBlZGl0KHN0b3JlUGFnZVRpdGxlLCBKU09OLnN0cmluZ2lmeShnZW9JbmZvKSwgZ2V0TWVzc2FnZSgnVXBkYXRlJykpO1xuXHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ1tHZW9Mb2NhdGlvbl0gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdH1cbn07XG5cbmV4cG9ydCB7c3RvcmVMb2NhdGlvbn07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEscUJBQStCLENBQ3BDLFNBQ0EsUUFDQSxVQUNBLFdBQ0EseUJBQ0Esc0JBQ0EscUJBQ0EsOEJBQ0EsZUFBQTtBQUVELElBQU1DLGlCQUEyQixDQUFDLFVBQVUsdUJBQXVCLG1CQUFtQjs7QUNWdEYsSUFBQUMscUJBQXlCQyxRQUFBLGdCQUFBOztBQ0F4QixJQUFBQyxTQUFVO0FBQ1YsSUFBQUMsVUFBVzs7QUNEWixJQUFBQyxvQkFBd0JILFFBQUEsaUJBQUE7QUFFeEIsSUFBTUksT0FBQSxHQUFjRCxrQkFBQUUsV0FBQSxlQUFBQyxPQUFpQ0osT0FBTyxDQUFFOztBQ0g5RCxJQUFBSyxxQkFBdUJQLFFBQUEsaUJBQUE7QUFFdkIsSUFBTVEsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsU0FBQSxHQUFRRixtQkFBQUcsVUFBUztNQUNoQkMsSUFBSTtN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TUFBQSxHQUFLSCxtQkFBQUcsZUFBYyxLQUFLLEdBQUc7QUFDaEY7SUFDRDtBQUVBLFVBQU07TUFBQ3ZCO01BQWVDO0lBQU0sSUFBQSxPQUFJLEdBQU1uRCxtQkFBQTBFLFlBQVc7QUFDakQsUUFBSSxDQUFDeEIsZUFBZTtBQUNuQjtJQUNEO0FBRUEsU0FBS0YsY0FBYztNQUNsQkU7TUFDQUM7SUFDRCxDQUFDO0VBQ0YsQ0FBQTtBQUFBLFdBckJnQndCLGNBQUE7QUFBQSxXQUFBSixhQUFBeEMsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxTQUFBMkM7QUFBQSxHQUFBLEVBcUJiOyIsCiAgIm5hbWVzIjogWyJTWVNURU1fU0NSSVBUX0xJU1QiLCAiV0VCTUFTVEVSX0xJU1QiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgInJlcXVpcmUiLCAiYXBpVGFnIiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImdldEkxOG5NZXNzYWdlcyIsICJVcGRhdGUiLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgInF1ZXJ5UmV2aXNvbnMiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJ0aXRsZXMiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgInJ2cHJvcCIsICJydnNsb3RzIiwgInJlc3BvbnNlIiwgInBvc3QiLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImVkaXQiLCAiX3JlZjIiLCAidGl0bGUiLCAidGV4dCIsICJzdW1tYXJ5IiwgImNvbnRlbnRmb3JtYXQiLCAiY29udGVudG1vZGVsIiwgIm1pbm9yIiwgInJlY3JlYXRlIiwgIndhdGNobGlzdCIsICJ0YWdzIiwgInBvc3RXaXRoRWRpdFRva2VuIiwgIl94MiIsICJfeDMiLCAiX3g0IiwgInN0b3JlTG9jYXRpb24iLCAiX3JlZjMiLCAiY291bnRyeU9yQXJlYSIsICJyZWdpb24iLCAid2dVc2VyTmFtZSIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgInN0b3JlUGFnZVRpdGxlIiwgImRhdGEiLCAiSlNPTiIsICJwYXJzZSIsICJwYWdlcyIsICJyZXZpc2lvbnMiLCAic2xvdHMiLCAibWFpbiIsICJjb250ZW50IiwgImdlb0luZm8iLCAic3RyaW5naWZ5IiwgImVycm9yIiwgImNvbnNvbGUiLCAiX3g1IiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJfZ2VvTG9jYXRpb24iLCAiaW5jbHVkZXMiLCAidXNlcklzSW5Hcm91cCIsICJnZXRHZW9JbmZvIiwgImdlb0xvY2F0aW9uIl0KfQo=

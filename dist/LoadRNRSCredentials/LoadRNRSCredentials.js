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

// dist/LoadRNRSCredentials/LoadRNRSCredentials.js
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
//! src/LoadRNRSCredentials/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var foreignApi = (0, import_ext_gadget.initMwApi)("LoadRNRSCredentials", "https://login.qiuwenbaike.cn/api.php");
//! src/LoadRNRSCredentials/LoadRNRSCredentials.ts
(function() {
  var _loadRNRSCredentials = _asyncToGenerator(function* () {
    const userRights = yield mw.user.getRights();
    if (userRights.includes("rnrsverify-confirmed")) {
      return;
    }
    try {
      var _foreignUserdata$quer, _foreignUserdata$quer2;
      const foreignUserdata = yield foreignApi.get({
        action: "query",
        meta: "userinfo",
        uiprop: "*",
        formatversion: "2"
      });
      const {
        groups,
        options
      } = (_foreignUserdata$quer = foreignUserdata === null || foreignUserdata === void 0 || (_foreignUserdata$quer2 = foreignUserdata["query"]) === null || _foreignUserdata$quer2 === void 0 ? void 0 : _foreignUserdata$quer2.userinfo) !== null && _foreignUserdata$quer !== void 0 ? _foreignUserdata$quer : {
        groups: [],
        options: {}
      };
      if (!groups || !options) {
        return;
      }
      if (!groups.includes("rnrsverify-confirmed")) {
        return;
      }
      if (!options.rnrsverifyhash || !options.rnrsverifytime) {
        return;
      }
      const {
        rnrsverifyhash,
        rnrsverifytime
      } = options;
      void (yield foreignApi.postWithToken("csrf", {
        action: "options",
        change: ["rnrsverifyhash=".concat(rnrsverifyhash), "rnrsverifytime=".concat(rnrsverifytime)],
        global: "update"
      }));
    } catch {
    }
  });
  function loadRNRSCredentials() {
    return _loadRNRSCredentials.apply(this, arguments);
  }
  return loadRNRSCredentials;
})()();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0xvYWRSTlJTQ3JlZGVudGlhbHMvbW9kdWxlcy9hcGkudHMiLCAic3JjL0xvYWRSTlJTQ3JlZGVudGlhbHMvTG9hZFJOUlNDcmVkZW50aWFscy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGZvcmVpZ25BcGkgPSBpbml0TXdBcGkoJ0xvYWRSTlJTQ3JlZGVudGlhbHMnLCAnaHR0cHM6Ly9sb2dpbi5xaXV3ZW5iYWlrZS5jbi9hcGkucGhwJyk7XG5cbmV4cG9ydCB7Zm9yZWlnbkFwaX07XG4iLCAiaW1wb3J0IHtmb3JlaWduQXBpfSBmcm9tICcuL21vZHVsZXMvYXBpJztcblxuKGFzeW5jIGZ1bmN0aW9uIGxvYWRSTlJTQ3JlZGVudGlhbHMoKSB7XG5cdGNvbnN0IHVzZXJSaWdodHMgPSBhd2FpdCBtdy51c2VyLmdldFJpZ2h0cygpO1xuXG5cdGlmICh1c2VyUmlnaHRzLmluY2x1ZGVzKCdybnJzdmVyaWZ5LWNvbmZpcm1lZCcpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dHJ5IHtcblx0XHRjb25zdCBmb3JlaWduVXNlcmRhdGEgPSBhd2FpdCBmb3JlaWduQXBpLmdldCh7XG5cdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRtZXRhOiAndXNlcmluZm8nLFxuXHRcdFx0dWlwcm9wOiAnKicsXG5cdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0fSk7XG5cblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hc3NpZ25tZW50XG5cdFx0Y29uc3Qge2dyb3Vwcywgb3B0aW9uc306IHtncm91cHM6IHN0cmluZ1tdOyBvcHRpb25zOiB7cm5yc3ZlcmlmeWhhc2g/OiBzdHJpbmc7IHJucnN2ZXJpZnl0aW1lPzogc3RyaW5nfX0gPVxuXHRcdFx0Zm9yZWlnblVzZXJkYXRhPy5bJ3F1ZXJ5J10/LnVzZXJpbmZvID8/IHtncm91cHM6IFtdLCBvcHRpb25zOiB7fX07XG5cblx0XHRpZiAoIWdyb3VwcyB8fCAhb3B0aW9ucykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICghZ3JvdXBzLmluY2x1ZGVzKCdybnJzdmVyaWZ5LWNvbmZpcm1lZCcpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCFvcHRpb25zLnJucnN2ZXJpZnloYXNoIHx8ICFvcHRpb25zLnJucnN2ZXJpZnl0aW1lKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3Qge3JucnN2ZXJpZnloYXNoLCBybnJzdmVyaWZ5dGltZX0gPSBvcHRpb25zO1xuXG5cdFx0dm9pZCAoYXdhaXQgZm9yZWlnbkFwaS5wb3N0V2l0aFRva2VuKCdjc3JmJywge1xuXHRcdFx0YWN0aW9uOiAnb3B0aW9ucycsXG5cdFx0XHRjaGFuZ2U6IFtgcm5yc3ZlcmlmeWhhc2g9JHtybnJzdmVyaWZ5aGFzaH1gLCBgcm5yc3ZlcmlmeXRpbWU9JHtybnJzdmVyaWZ5dGltZX1gXSxcblx0XHRcdGdsb2JhbDogJ3VwZGF0ZScsXG5cdFx0fSkpO1xuXHR9IGNhdGNoIHt9XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsb0JBQXdCQyxRQUFBLGlCQUFBO0FBRXhCLElBQU1DLGNBQUEsR0FBYUYsa0JBQUFHLFdBQVUsdUJBQXVCLHNDQUFzQzs7OytDQ0F6RixhQUFxQztBQUNyQyxVQUFNQyxhQUFBLE1BQW1CQyxHQUFHQyxLQUFLQyxVQUFVO0FBRTNDLFFBQUlILFdBQVdJLFNBQVMsc0JBQXNCLEdBQUc7QUFDaEQ7SUFDRDtBQUVBLFFBQUk7QUFBQSxVQUFBQyx1QkFBQUM7QUFDSCxZQUFNQyxrQkFBQSxNQUF3QlQsV0FBV1UsSUFBSTtRQUM1Q0MsUUFBUTtRQUNSQyxNQUFNO1FBQ05DLFFBQVE7UUFDUkMsZUFBZTtNQUNoQixDQUFDO0FBR0QsWUFBTTtRQUFDQztRQUFRQztNQUFPLEtBQUFULHdCQUNyQkUsb0JBQUEsUUFBQUEsb0JBQUEsV0FBQUQseUJBQUFDLGdCQUFrQixPQUFPLE9BQUEsUUFBQUQsMkJBQUEsU0FBQSxTQUF6QkEsdUJBQTRCUyxjQUFBLFFBQUFWLDBCQUFBLFNBQUFBLHdCQUFZO1FBQUNRLFFBQVEsQ0FBQTtRQUFJQyxTQUFTLENBQUM7TUFBQztBQUVqRSxVQUFJLENBQUNELFVBQVUsQ0FBQ0MsU0FBUztBQUN4QjtNQUNEO0FBRUEsVUFBSSxDQUFDRCxPQUFPVCxTQUFTLHNCQUFzQixHQUFHO0FBQzdDO01BQ0Q7QUFFQSxVQUFJLENBQUNVLFFBQVFFLGtCQUFrQixDQUFDRixRQUFRRyxnQkFBZ0I7QUFDdkQ7TUFDRDtBQUVBLFlBQU07UUFBQ0Q7UUFBZ0JDO01BQWMsSUFBSUg7QUFFekMsWUFBQSxNQUFZaEIsV0FBV29CLGNBQWMsUUFBUTtRQUM1Q1QsUUFBUTtRQUNSVSxRQUFRLENBQUEsa0JBQUFDLE9BQW1CSixjQUFjLEdBQUEsa0JBQUFJLE9BQXNCSCxjQUFjLENBQUE7UUFDN0VJLFFBQVE7TUFDVCxDQUFDO0lBQ0YsUUFBUTtJQUFDO0VBQ1YsQ0FBQTtBQUFBLFdBdkNnQkMsc0JBQUE7QUFBQSxXQUFBQyxxQkFBQUMsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxTQUFBSDtBQUFBLEdBQUEsRUF1Q2I7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiZm9yZWlnbkFwaSIsICJpbml0TXdBcGkiLCAidXNlclJpZ2h0cyIsICJtdyIsICJ1c2VyIiwgImdldFJpZ2h0cyIsICJpbmNsdWRlcyIsICJfZm9yZWlnblVzZXJkYXRhJHF1ZXIiLCAiX2ZvcmVpZ25Vc2VyZGF0YSRxdWVyMiIsICJmb3JlaWduVXNlcmRhdGEiLCAiZ2V0IiwgImFjdGlvbiIsICJtZXRhIiwgInVpcHJvcCIsICJmb3JtYXR2ZXJzaW9uIiwgImdyb3VwcyIsICJvcHRpb25zIiwgInVzZXJpbmZvIiwgInJucnN2ZXJpZnloYXNoIiwgInJucnN2ZXJpZnl0aW1lIiwgInBvc3RXaXRoVG9rZW4iLCAiY2hhbmdlIiwgImNvbmNhdCIsICJnbG9iYWwiLCAibG9hZFJOUlNDcmVkZW50aWFscyIsICJfbG9hZFJOUlNDcmVkZW50aWFscyIsICJhcHBseSIsICJhcmd1bWVudHMiXQp9Cg==

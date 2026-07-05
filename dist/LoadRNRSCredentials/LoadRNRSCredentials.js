/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/LoadRNRSCredentials}
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

// dist/LoadRNRSCredentials/LoadRNRSCredentials.js
//! src/LoadRNRSCredentials/modules/api.ts
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0xvYWRSTlJTQ3JlZGVudGlhbHMvbW9kdWxlcy9hcGkudHMiLCAic3JjL0xvYWRSTlJTQ3JlZGVudGlhbHMvTG9hZFJOUlNDcmVkZW50aWFscy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGZvcmVpZ25BcGkgPSBpbml0TXdBcGkoJ0xvYWRSTlJTQ3JlZGVudGlhbHMnLCAnaHR0cHM6Ly9sb2dpbi5xaXV3ZW5iYWlrZS5jbi9hcGkucGhwJyk7XG5cbmV4cG9ydCB7Zm9yZWlnbkFwaX07XG4iLCAiaW1wb3J0IHtmb3JlaWduQXBpfSBmcm9tICcuL21vZHVsZXMvYXBpJztcblxuKGFzeW5jIGZ1bmN0aW9uIGxvYWRSTlJTQ3JlZGVudGlhbHMoKSB7XG5cdGNvbnN0IHVzZXJSaWdodHMgPSBhd2FpdCBtdy51c2VyLmdldFJpZ2h0cygpO1xuXG5cdGlmICh1c2VyUmlnaHRzLmluY2x1ZGVzKCdybnJzdmVyaWZ5LWNvbmZpcm1lZCcpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dHJ5IHtcblx0XHRjb25zdCBmb3JlaWduVXNlcmRhdGEgPSBhd2FpdCBmb3JlaWduQXBpLmdldCh7XG5cdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRtZXRhOiAndXNlcmluZm8nLFxuXHRcdFx0dWlwcm9wOiAnKicsXG5cdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0fSk7XG5cblx0XHRjb25zdCB7Z3JvdXBzLCBvcHRpb25zfToge2dyb3Vwczogc3RyaW5nW107IG9wdGlvbnM6IHtybnJzdmVyaWZ5aGFzaD86IHN0cmluZzsgcm5yc3ZlcmlmeXRpbWU/OiBzdHJpbmd9fSA9XG5cdFx0XHRmb3JlaWduVXNlcmRhdGE/LlsncXVlcnknXT8udXNlcmluZm8gPz8ge2dyb3VwczogW10sIG9wdGlvbnM6IHt9fTtcblxuXHRcdGlmICghZ3JvdXBzIHx8ICFvcHRpb25zKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCFncm91cHMuaW5jbHVkZXMoJ3JucnN2ZXJpZnktY29uZmlybWVkJykpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIW9wdGlvbnMucm5yc3ZlcmlmeWhhc2ggfHwgIW9wdGlvbnMucm5yc3ZlcmlmeXRpbWUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCB7cm5yc3ZlcmlmeWhhc2gsIHJucnN2ZXJpZnl0aW1lfSA9IG9wdGlvbnM7XG5cblx0XHR2b2lkIChhd2FpdCBmb3JlaWduQXBpLnBvc3RXaXRoVG9rZW4oJ2NzcmYnLCB7XG5cdFx0XHRhY3Rpb246ICdvcHRpb25zJyxcblx0XHRcdGNoYW5nZTogW2BybnJzdmVyaWZ5aGFzaD0ke3JucnN2ZXJpZnloYXNofWAsIGBybnJzdmVyaWZ5dGltZT0ke3JucnN2ZXJpZnl0aW1lfWBdLFxuXHRcdFx0Z2xvYmFsOiAndXBkYXRlJyxcblx0XHR9KSk7XG5cdH0gY2F0Y2gge31cbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsb0JBQXdCQyxRQUFBLGlCQUFBO0FBRXhCLElBQU1DLGNBQUEsR0FBYUYsa0JBQUFHLFdBQVUsdUJBQXVCLHNDQUFzQzs7OytDQ0F6RixhQUFxQztBQUNyQyxVQUFNQyxhQUFBLE1BQW1CQyxHQUFHQyxLQUFLQyxVQUFVO0FBRTNDLFFBQUlILFdBQVdJLFNBQVMsc0JBQXNCLEdBQUc7QUFDaEQ7SUFDRDtBQUVBLFFBQUk7QUFBQSxVQUFBQyx1QkFBQUM7QUFDSCxZQUFNQyxrQkFBQSxNQUF3QlQsV0FBV1UsSUFBSTtRQUM1Q0MsUUFBUTtRQUNSQyxNQUFNO1FBQ05DLFFBQVE7UUFDUkMsZUFBZTtNQUNoQixDQUFDO0FBRUQsWUFBTTtRQUFDQztRQUFRQztNQUFPLEtBQUFULHdCQUNyQkUsb0JBQUEsUUFBQUEsb0JBQUEsV0FBQUQseUJBQUFDLGdCQUFrQixPQUFPLE9BQUEsUUFBQUQsMkJBQUEsU0FBQSxTQUF6QkEsdUJBQTRCUyxjQUFBLFFBQUFWLDBCQUFBLFNBQUFBLHdCQUFZO1FBQUNRLFFBQVEsQ0FBQTtRQUFJQyxTQUFTLENBQUM7TUFBQztBQUVqRSxVQUFJLENBQUNELFVBQVUsQ0FBQ0MsU0FBUztBQUN4QjtNQUNEO0FBRUEsVUFBSSxDQUFDRCxPQUFPVCxTQUFTLHNCQUFzQixHQUFHO0FBQzdDO01BQ0Q7QUFFQSxVQUFJLENBQUNVLFFBQVFFLGtCQUFrQixDQUFDRixRQUFRRyxnQkFBZ0I7QUFDdkQ7TUFDRDtBQUVBLFlBQU07UUFBQ0Q7UUFBZ0JDO01BQWMsSUFBSUg7QUFFekMsWUFBQSxNQUFZaEIsV0FBV29CLGNBQWMsUUFBUTtRQUM1Q1QsUUFBUTtRQUNSVSxRQUFRLENBQUEsa0JBQUFDLE9BQW1CSixjQUFjLEdBQUEsa0JBQUFJLE9BQXNCSCxjQUFjLENBQUE7UUFDN0VJLFFBQVE7TUFDVCxDQUFDO0lBQ0YsUUFBUTtJQUFDO0VBQ1YsQ0FBQTtBQUFBLFdBdENnQkMsc0JBQUE7QUFBQSxXQUFBQyxxQkFBQUMsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxTQUFBSDtBQUFBLEdBQUEsRUFzQ2I7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiZm9yZWlnbkFwaSIsICJpbml0TXdBcGkiLCAidXNlclJpZ2h0cyIsICJtdyIsICJ1c2VyIiwgImdldFJpZ2h0cyIsICJpbmNsdWRlcyIsICJfZm9yZWlnblVzZXJkYXRhJHF1ZXIiLCAiX2ZvcmVpZ25Vc2VyZGF0YSRxdWVyMiIsICJmb3JlaWduVXNlcmRhdGEiLCAiZ2V0IiwgImFjdGlvbiIsICJtZXRhIiwgInVpcHJvcCIsICJmb3JtYXR2ZXJzaW9uIiwgImdyb3VwcyIsICJvcHRpb25zIiwgInVzZXJpbmZvIiwgInJucnN2ZXJpZnloYXNoIiwgInJucnN2ZXJpZnl0aW1lIiwgInBvc3RXaXRoVG9rZW4iLCAiY2hhbmdlIiwgImNvbmNhdCIsICJnbG9iYWwiLCAibG9hZFJOUlNDcmVkZW50aWFscyIsICJfbG9hZFJOUlNDcmVkZW50aWFscyIsICJhcHBseSIsICJhcmd1bWVudHMiXQp9Cg==

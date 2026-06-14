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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0xvYWRSTlJTQ3JlZGVudGlhbHMvbW9kdWxlcy9hcGkudHMiLCAic3JjL0xvYWRSTlJTQ3JlZGVudGlhbHMvTG9hZFJOUlNDcmVkZW50aWFscy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGZvcmVpZ25BcGkgPSBpbml0TXdBcGkoJ0xvYWRSTlJTQ3JlZGVudGlhbHMnLCAnaHR0cHM6Ly9sb2dpbi5xaXV3ZW5iYWlrZS5jbi9hcGkucGhwJyk7XG5cbmV4cG9ydCB7Zm9yZWlnbkFwaX07XG4iLCAiaW1wb3J0IHtmb3JlaWduQXBpfSBmcm9tICcuL21vZHVsZXMvYXBpJztcblxuKGFzeW5jIGZ1bmN0aW9uIGxvYWRSTlJTQ3JlZGVudGlhbHMoKSB7XG5cdGNvbnN0IHVzZXJSaWdodHMgPSBhd2FpdCBtdy51c2VyLmdldFJpZ2h0cygpO1xuXG5cdGlmICh1c2VyUmlnaHRzLmluY2x1ZGVzKCdybnJzdmVyaWZ5LWNvbmZpcm1lZCcpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dHJ5IHtcblx0XHRjb25zdCBmb3JlaWduVXNlcmRhdGEgPSBhd2FpdCBmb3JlaWduQXBpLmdldCh7XG5cdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRtZXRhOiAndXNlcmluZm8nLFxuXHRcdFx0dWlwcm9wOiAnKicsXG5cdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0fSk7XG5cblx0XHRjb25zdCB7Z3JvdXBzLCBvcHRpb25zfToge2dyb3Vwczogc3RyaW5nW107IG9wdGlvbnM6IHtybnJzdmVyaWZ5aGFzaD86IHN0cmluZzsgcm5yc3ZlcmlmeXRpbWU/OiBzdHJpbmd9fSA9XG5cdFx0XHRmb3JlaWduVXNlcmRhdGE/LlsncXVlcnknXT8udXNlcmluZm8gPz8ge2dyb3VwczogW10sIG9wdGlvbnM6IHt9fTtcblxuXHRcdGlmICghZ3JvdXBzIHx8ICFvcHRpb25zKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCFncm91cHMuaW5jbHVkZXMoJ3JucnN2ZXJpZnktY29uZmlybWVkJykpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIW9wdGlvbnMucm5yc3ZlcmlmeWhhc2ggfHwgIW9wdGlvbnMucm5yc3ZlcmlmeXRpbWUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCB7cm5yc3ZlcmlmeWhhc2gsIHJucnN2ZXJpZnl0aW1lfSA9IG9wdGlvbnM7XG5cblx0XHR2b2lkIChhd2FpdCBmb3JlaWduQXBpLnBvc3RXaXRoVG9rZW4oJ2NzcmYnLCB7XG5cdFx0XHRhY3Rpb246ICdvcHRpb25zJyxcblx0XHRcdGNoYW5nZTogW2BybnJzdmVyaWZ5aGFzaD0ke3JucnN2ZXJpZnloYXNofWAsIGBybnJzdmVyaWZ5dGltZT0ke3JucnN2ZXJpZnl0aW1lfWBdLFxuXHRcdFx0Z2xvYmFsOiAndXBkYXRlJyxcblx0XHR9KSk7XG5cdH0gY2F0Y2gge31cbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxvQkFBd0JDLFFBQUEsaUJBQUE7QUFFeEIsSUFBTUMsY0FBQSxHQUFhRixrQkFBQUcsV0FBVSx1QkFBdUIsc0NBQXNDOzs7K0NDQXpGLGFBQXFDO0FBQ3JDLFVBQU1DLGFBQUEsTUFBbUJDLEdBQUdDLEtBQUtDLFVBQVU7QUFFM0MsUUFBSUgsV0FBV0ksU0FBUyxzQkFBc0IsR0FBRztBQUNoRDtJQUNEO0FBRUEsUUFBSTtBQUFBLFVBQUFDLHVCQUFBQztBQUNILFlBQU1DLGtCQUFBLE1BQXdCVCxXQUFXVSxJQUFJO1FBQzVDQyxRQUFRO1FBQ1JDLE1BQU07UUFDTkMsUUFBUTtRQUNSQyxlQUFlO01BQ2hCLENBQUM7QUFFRCxZQUFNO1FBQUNDO1FBQVFDO01BQU8sS0FBQVQsd0JBQ3JCRSxvQkFBQSxRQUFBQSxvQkFBQSxXQUFBRCx5QkFBQUMsZ0JBQWtCLE9BQU8sT0FBQSxRQUFBRCwyQkFBQSxTQUFBLFNBQXpCQSx1QkFBNEJTLGNBQUEsUUFBQVYsMEJBQUEsU0FBQUEsd0JBQVk7UUFBQ1EsUUFBUSxDQUFBO1FBQUlDLFNBQVMsQ0FBQztNQUFDO0FBRWpFLFVBQUksQ0FBQ0QsVUFBVSxDQUFDQyxTQUFTO0FBQ3hCO01BQ0Q7QUFFQSxVQUFJLENBQUNELE9BQU9ULFNBQVMsc0JBQXNCLEdBQUc7QUFDN0M7TUFDRDtBQUVBLFVBQUksQ0FBQ1UsUUFBUUUsa0JBQWtCLENBQUNGLFFBQVFHLGdCQUFnQjtBQUN2RDtNQUNEO0FBRUEsWUFBTTtRQUFDRDtRQUFnQkM7TUFBYyxJQUFJSDtBQUV6QyxZQUFBLE1BQVloQixXQUFXb0IsY0FBYyxRQUFRO1FBQzVDVCxRQUFRO1FBQ1JVLFFBQVEsQ0FBQSxrQkFBQUMsT0FBbUJKLGNBQWMsR0FBQSxrQkFBQUksT0FBc0JILGNBQWMsQ0FBQTtRQUM3RUksUUFBUTtNQUNULENBQUM7SUFDRixRQUFRO0lBQUM7RUFDVixDQUFBO0FBQUEsV0F0Q2dCQyxzQkFBQTtBQUFBLFdBQUFDLHFCQUFBQyxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLFNBQUFIO0FBQUEsR0FBQSxFQXNDYjsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJmb3JlaWduQXBpIiwgImluaXRNd0FwaSIsICJ1c2VyUmlnaHRzIiwgIm13IiwgInVzZXIiLCAiZ2V0UmlnaHRzIiwgImluY2x1ZGVzIiwgIl9mb3JlaWduVXNlcmRhdGEkcXVlciIsICJfZm9yZWlnblVzZXJkYXRhJHF1ZXIyIiwgImZvcmVpZ25Vc2VyZGF0YSIsICJnZXQiLCAiYWN0aW9uIiwgIm1ldGEiLCAidWlwcm9wIiwgImZvcm1hdHZlcnNpb24iLCAiZ3JvdXBzIiwgIm9wdGlvbnMiLCAidXNlcmluZm8iLCAicm5yc3ZlcmlmeWhhc2giLCAicm5yc3ZlcmlmeXRpbWUiLCAicG9zdFdpdGhUb2tlbiIsICJjaGFuZ2UiLCAiY29uY2F0IiwgImdsb2JhbCIsICJsb2FkUk5SU0NyZWRlbnRpYWxzIiwgIl9sb2FkUk5SU0NyZWRlbnRpYWxzIiwgImFwcGx5IiwgImFyZ3VtZW50cyJdCn0K

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
var foreignApi = (0, import_ext_gadget.initMwApi)("LoadRNRSCredentials", "https://www.qiuwenbaike.cn/api.php");
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0xvYWRSTlJTQ3JlZGVudGlhbHMvbW9kdWxlcy9hcGkudHMiLCAic3JjL0xvYWRSTlJTQ3JlZGVudGlhbHMvTG9hZFJOUlNDcmVkZW50aWFscy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGZvcmVpZ25BcGkgPSBpbml0TXdBcGkoJ0xvYWRSTlJTQ3JlZGVudGlhbHMnLCAnaHR0cHM6Ly93d3cucWl1d2VuYmFpa2UuY24vYXBpLnBocCcpO1xuXG5leHBvcnQge2ZvcmVpZ25BcGl9O1xuIiwgImltcG9ydCB7Zm9yZWlnbkFwaX0gZnJvbSAnLi9tb2R1bGVzL2FwaSc7XG5cbihhc3luYyBmdW5jdGlvbiBsb2FkUk5SU0NyZWRlbnRpYWxzKCkge1xuXHRjb25zdCB1c2VyUmlnaHRzID0gYXdhaXQgbXcudXNlci5nZXRSaWdodHMoKTtcblxuXHRpZiAodXNlclJpZ2h0cy5pbmNsdWRlcygncm5yc3ZlcmlmeS1jb25maXJtZWQnKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHRyeSB7XG5cdFx0Y29uc3QgZm9yZWlnblVzZXJkYXRhID0gYXdhaXQgZm9yZWlnbkFwaS5nZXQoe1xuXHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0bWV0YTogJ3VzZXJpbmZvJyxcblx0XHRcdHVpcHJvcDogJyonLFxuXHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdH0pO1xuXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtYXNzaWdubWVudFxuXHRcdGNvbnN0IHtncm91cHMsIG9wdGlvbnN9OiB7Z3JvdXBzOiBzdHJpbmdbXTsgb3B0aW9uczoge3JucnN2ZXJpZnloYXNoPzogc3RyaW5nOyBybnJzdmVyaWZ5dGltZT86IHN0cmluZ319ID1cblx0XHRcdGZvcmVpZ25Vc2VyZGF0YT8uWydxdWVyeSddPy51c2VyaW5mbyA/PyB7Z3JvdXBzOiBbXSwgb3B0aW9uczoge319O1xuXG5cdFx0aWYgKCFncm91cHMgfHwgIW9wdGlvbnMpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIWdyb3Vwcy5pbmNsdWRlcygncm5yc3ZlcmlmeS1jb25maXJtZWQnKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICghb3B0aW9ucy5ybnJzdmVyaWZ5aGFzaCB8fCAhb3B0aW9ucy5ybnJzdmVyaWZ5dGltZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IHtybnJzdmVyaWZ5aGFzaCwgcm5yc3ZlcmlmeXRpbWV9ID0gb3B0aW9ucztcblxuXHRcdHZvaWQgKGF3YWl0IGZvcmVpZ25BcGkucG9zdFdpdGhUb2tlbignY3NyZicsIHtcblx0XHRcdGFjdGlvbjogJ29wdGlvbnMnLFxuXHRcdFx0Y2hhbmdlOiBbYHJucnN2ZXJpZnloYXNoPSR7cm5yc3ZlcmlmeWhhc2h9YCwgYHJucnN2ZXJpZnl0aW1lPSR7cm5yc3ZlcmlmeXRpbWV9YF0sXG5cdFx0XHRnbG9iYWw6ICd1cGRhdGUnLFxuXHRcdH0pKTtcblx0fSBjYXRjaCB7fVxufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLG9CQUF3QkMsUUFBQSxpQkFBQTtBQUV4QixJQUFNQyxjQUFBLEdBQWFGLGtCQUFBRyxXQUFVLHVCQUF1QixvQ0FBb0M7OzsrQ0NBdkYsYUFBcUM7QUFDckMsVUFBTUMsYUFBQSxNQUFtQkMsR0FBR0MsS0FBS0MsVUFBVTtBQUUzQyxRQUFJSCxXQUFXSSxTQUFTLHNCQUFzQixHQUFHO0FBQ2hEO0lBQ0Q7QUFFQSxRQUFJO0FBQUEsVUFBQUMsdUJBQUFDO0FBQ0gsWUFBTUMsa0JBQUEsTUFBd0JULFdBQVdVLElBQUk7UUFDNUNDLFFBQVE7UUFDUkMsTUFBTTtRQUNOQyxRQUFRO1FBQ1JDLGVBQWU7TUFDaEIsQ0FBQztBQUdELFlBQU07UUFBQ0M7UUFBUUM7TUFBTyxLQUFBVCx3QkFDckJFLG9CQUFBLFFBQUFBLG9CQUFBLFdBQUFELHlCQUFBQyxnQkFBa0IsT0FBTyxPQUFBLFFBQUFELDJCQUFBLFNBQUEsU0FBekJBLHVCQUE0QlMsY0FBQSxRQUFBViwwQkFBQSxTQUFBQSx3QkFBWTtRQUFDUSxRQUFRLENBQUE7UUFBSUMsU0FBUyxDQUFDO01BQUM7QUFFakUsVUFBSSxDQUFDRCxVQUFVLENBQUNDLFNBQVM7QUFDeEI7TUFDRDtBQUVBLFVBQUksQ0FBQ0QsT0FBT1QsU0FBUyxzQkFBc0IsR0FBRztBQUM3QztNQUNEO0FBRUEsVUFBSSxDQUFDVSxRQUFRRSxrQkFBa0IsQ0FBQ0YsUUFBUUcsZ0JBQWdCO0FBQ3ZEO01BQ0Q7QUFFQSxZQUFNO1FBQUNEO1FBQWdCQztNQUFjLElBQUlIO0FBRXpDLFlBQUEsTUFBWWhCLFdBQVdvQixjQUFjLFFBQVE7UUFDNUNULFFBQVE7UUFDUlUsUUFBUSxDQUFBLGtCQUFBQyxPQUFtQkosY0FBYyxHQUFBLGtCQUFBSSxPQUFzQkgsY0FBYyxDQUFBO1FBQzdFSSxRQUFRO01BQ1QsQ0FBQztJQUNGLFFBQVE7SUFBQztFQUNWLENBQUE7QUFBQSxXQXZDZ0JDLHNCQUFBO0FBQUEsV0FBQUMscUJBQUFDLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsU0FBQUg7QUFBQSxHQUFBLEVBdUNiOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImZvcmVpZ25BcGkiLCAiaW5pdE13QXBpIiwgInVzZXJSaWdodHMiLCAibXciLCAidXNlciIsICJnZXRSaWdodHMiLCAiaW5jbHVkZXMiLCAiX2ZvcmVpZ25Vc2VyZGF0YSRxdWVyIiwgIl9mb3JlaWduVXNlcmRhdGEkcXVlcjIiLCAiZm9yZWlnblVzZXJkYXRhIiwgImdldCIsICJhY3Rpb24iLCAibWV0YSIsICJ1aXByb3AiLCAiZm9ybWF0dmVyc2lvbiIsICJncm91cHMiLCAib3B0aW9ucyIsICJ1c2VyaW5mbyIsICJybnJzdmVyaWZ5aGFzaCIsICJybnJzdmVyaWZ5dGltZSIsICJwb3N0V2l0aFRva2VuIiwgImNoYW5nZSIsICJjb25jYXQiLCAiZ2xvYmFsIiwgImxvYWRSTlJTQ3JlZGVudGlhbHMiLCAiX2xvYWRSTlJTQ3JlZGVudGlhbHMiLCAiYXBwbHkiLCAiYXJndW1lbnRzIl0KfQo=

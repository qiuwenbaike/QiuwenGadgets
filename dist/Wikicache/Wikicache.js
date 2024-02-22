/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Wikicache}
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

// dist/Wikicache/Wikicache.js
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
//! src/Wikicache/Wikicache.ts
var import_ext_gadget = require("ext.gadget.Util");
void (0, import_ext_gadget.getBody)().then(/* @__PURE__ */ function() {
  var _wikicache = _asyncToGenerator(function* ($body) {
    var _document$querySelect, _mw$storage$getObject, _document$querySelect2;
    const wpSummary = $body.find("input[name=wpSummary]").get(0);
    const wpTextbox1 = $body.find("input[name=wpTextbox1]").get(0);
    if (!wpSummary || !wpTextbox1) {
      return;
    }
    const {
      wgPageName
    } = mw.config.get();
    let cacheKey = "wikicache-autosave-".concat(wgPageName);
    const section = (_document$querySelect = document.querySelector("input[name=wpSection]")) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.value;
    if (section) {
      cacheKey += "#".concat(section);
    }
    const saveObject = (_mw$storage$getObject = mw.storage.getObject(cacheKey)) !== null && _mw$storage$getObject !== void 0 ? _mw$storage$getObject : {};
    if (saveObject["input[name=wpSummary]"]) {
      var _saveObject$inputNam;
      wpSummary.value = (_saveObject$inputNam = saveObject["input[name=wpSummary]"]) !== null && _saveObject$inputNam !== void 0 ? _saveObject$inputNam : saveObject["#wpSummary"];
    } else if (saveObject["#wpSummary"]) {
      wpSummary.value = saveObject["#wpSummary"];
    }
    if (saveObject["input[name=wpTextbox1]"]) {
      wpTextbox1.value = saveObject["input[name=wpTextbox1]"];
    } else if (saveObject["#wpTextbox1"]) {
      wpTextbox1.value = saveObject["#wpTextbox1"];
    }
    (_document$querySelect2 = document.querySelector("#editform")) === null || _document$querySelect2 === void 0 || _document$querySelect2.addEventListener("submit", () => {
      mw.storage.remove(cacheKey);
    });
    while (true) {
      yield (0, import_ext_gadget.delay)(60 * 1e3);
      const newSaveObject = {
        _path: location.pathname + location.search,
        _date: /* @__PURE__ */ new Date(),
        "input[name=wpSummary]": wpSummary.value,
        "input[name=wpTextbox1]": wpTextbox1.value
      };
      mw.storage.setObject(cacheKey, newSaveObject, 60 * 60 * 24 * 30 * 1e3);
    }
  });
  function wikicache(_x) {
    return _wikicache.apply(this, arguments);
  }
  return wikicache;
}());

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1dpa2ljYWNoZS9XaWtpY2FjaGUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7ZGVsYXksIGdldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQgdHlwZSB7QXV0b1NhdmVPYmplY3R9IGZyb20gJy4vbW9kdWxlcy90eXBlcyc7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oYXN5bmMgZnVuY3Rpb24gd2lraWNhY2hlKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCB3cFN1bW1hcnk6IEhUTUxJbnB1dEVsZW1lbnQgfCB1bmRlZmluZWQgPSAkYm9keS5maW5kPEhUTUxJbnB1dEVsZW1lbnQ+KCdpbnB1dFtuYW1lPXdwU3VtbWFyeV0nKS5nZXQoMCk7XG5cdGNvbnN0IHdwVGV4dGJveDE6IEhUTUxJbnB1dEVsZW1lbnQgfCB1bmRlZmluZWQgPSAkYm9keS5maW5kPEhUTUxJbnB1dEVsZW1lbnQ+KCdpbnB1dFtuYW1lPXdwVGV4dGJveDFdJykuZ2V0KDApO1xuXHRpZiAoIXdwU3VtbWFyeSB8fCAhd3BUZXh0Ym94MSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRsZXQgY2FjaGVLZXk6IHN0cmluZyA9IGB3aWtpY2FjaGUtYXV0b3NhdmUtJHt3Z1BhZ2VOYW1lfWA7XG5cdGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KCdpbnB1dFtuYW1lPXdwU2VjdGlvbl0nKT8udmFsdWU7XG5cdGlmIChzZWN0aW9uKSB7XG5cdFx0Y2FjaGVLZXkgKz0gYCMke3NlY3Rpb259YDtcblx0fVxuXG5cdGNvbnN0IHNhdmVPYmplY3Q6IFBhcnRpYWw8QXV0b1NhdmVPYmplY3Q+ID0gKG13LnN0b3JhZ2UuZ2V0T2JqZWN0KGNhY2hlS2V5KSBhcyBBdXRvU2F2ZU9iamVjdCB8IG51bGwpID8/IHt9O1xuXHRpZiAoc2F2ZU9iamVjdFsnaW5wdXRbbmFtZT13cFN1bW1hcnldJ10pIHtcblx0XHR3cFN1bW1hcnkudmFsdWUgPSBzYXZlT2JqZWN0WydpbnB1dFtuYW1lPXdwU3VtbWFyeV0nXSA/PyBzYXZlT2JqZWN0Wycjd3BTdW1tYXJ5J107XG5cdH0gZWxzZSBpZiAoc2F2ZU9iamVjdFsnI3dwU3VtbWFyeSddKSB7XG5cdFx0d3BTdW1tYXJ5LnZhbHVlID0gc2F2ZU9iamVjdFsnI3dwU3VtbWFyeSddO1xuXHR9XG5cdGlmIChzYXZlT2JqZWN0WydpbnB1dFtuYW1lPXdwVGV4dGJveDFdJ10pIHtcblx0XHR3cFRleHRib3gxLnZhbHVlID0gc2F2ZU9iamVjdFsnaW5wdXRbbmFtZT13cFRleHRib3gxXSddO1xuXHR9IGVsc2UgaWYgKHNhdmVPYmplY3RbJyN3cFRleHRib3gxJ10pIHtcblx0XHR3cFRleHRib3gxLnZhbHVlID0gc2F2ZU9iamVjdFsnI3dwVGV4dGJveDEnXTtcblx0fVxuXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEZvcm1FbGVtZW50PignI2VkaXRmb3JtJyk/LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsICgpOiB2b2lkID0+IHtcblx0XHRtdy5zdG9yYWdlLnJlbW92ZShjYWNoZUtleSk7XG5cdH0pO1xuXG5cdHdoaWxlICh0cnVlKSB7XG5cdFx0YXdhaXQgZGVsYXkoNjAgKiAxMDAwKTtcblx0XHRjb25zdCBuZXdTYXZlT2JqZWN0OiBBdXRvU2F2ZU9iamVjdCA9IHtcblx0XHRcdF9wYXRoOiBsb2NhdGlvbi5wYXRobmFtZSArIGxvY2F0aW9uLnNlYXJjaCxcblx0XHRcdF9kYXRlOiBuZXcgRGF0ZSgpLFxuXHRcdFx0J2lucHV0W25hbWU9d3BTdW1tYXJ5XSc6IHdwU3VtbWFyeS52YWx1ZSxcblx0XHRcdCdpbnB1dFtuYW1lPXdwVGV4dGJveDFdJzogd3BUZXh0Ym94MS52YWx1ZSxcblx0XHR9O1xuXHRcdG13LnN0b3JhZ2Uuc2V0T2JqZWN0KGNhY2hlS2V5LCBuZXdTYXZlT2JqZWN0LCA2MCAqIDYwICogMjQgKiAzMCAqIDEwMDApO1xuXHR9XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxvQkFBNkJDLFFBQUEsaUJBQUE7QUFHN0IsTUFBQSxHQUFLRCxrQkFBQUUsU0FBUSxFQUFFQyxLQUFBLDJCQUFBO0FBQUEsTUFBQUMsYUFBQUMsa0JBQUssV0FBeUJDLE9BQStDO0FBQUEsUUFBQUMsdUJBQUFDLHVCQUFBQztBQUMzRixVQUFNQyxZQUEwQ0osTUFBTUssS0FBdUIsdUJBQXVCLEVBQUVDLElBQUksQ0FBQztBQUMzRyxVQUFNQyxhQUEyQ1AsTUFBTUssS0FBdUIsd0JBQXdCLEVBQUVDLElBQUksQ0FBQztBQUM3RyxRQUFJLENBQUNGLGFBQWEsQ0FBQ0csWUFBWTtBQUM5QjtJQUNEO0FBRUEsVUFBTTtNQUFDQztJQUFVLElBQUlDLEdBQUdDLE9BQU9KLElBQUk7QUFFbkMsUUFBSUssV0FBQSxzQkFBQUMsT0FBeUNKLFVBQVU7QUFDdkQsVUFBTUssV0FBQVosd0JBQVVhLFNBQVNDLGNBQWdDLHVCQUF1QixPQUFBLFFBQUFkLDBCQUFBLFNBQUEsU0FBaEVBLHNCQUFtRWU7QUFDbkYsUUFBSUgsU0FBUztBQUNaRixrQkFBQSxJQUFBQyxPQUFnQkMsT0FBTztJQUN4QjtBQUVBLFVBQU1JLGNBQUFmLHdCQUF1Q08sR0FBR1MsUUFBUUMsVUFBVVIsUUFBUSxPQUFBLFFBQUFULDBCQUFBLFNBQUFBLHdCQUErQixDQUFDO0FBQzFHLFFBQUllLFdBQVcsdUJBQXVCLEdBQUc7QUFBQSxVQUFBRztBQUN4Q2hCLGdCQUFVWSxTQUFBSSx1QkFBUUgsV0FBVyx1QkFBdUIsT0FBQSxRQUFBRyx5QkFBQSxTQUFBQSx1QkFBS0gsV0FBVyxZQUFZO0lBQ2pGLFdBQVdBLFdBQVcsWUFBWSxHQUFHO0FBQ3BDYixnQkFBVVksUUFBUUMsV0FBVyxZQUFZO0lBQzFDO0FBQ0EsUUFBSUEsV0FBVyx3QkFBd0IsR0FBRztBQUN6Q1YsaUJBQVdTLFFBQVFDLFdBQVcsd0JBQXdCO0lBQ3ZELFdBQVdBLFdBQVcsYUFBYSxHQUFHO0FBQ3JDVixpQkFBV1MsUUFBUUMsV0FBVyxhQUFhO0lBQzVDO0FBRUEsS0FBQWQseUJBQUFXLFNBQVNDLGNBQStCLFdBQVcsT0FBQSxRQUFBWiwyQkFBQSxVQUFuREEsdUJBQXNEa0IsaUJBQWlCLFVBQVUsTUFBWTtBQUM1RlosU0FBR1MsUUFBUUksT0FBT1gsUUFBUTtJQUMzQixDQUFDO0FBRUQsV0FBTyxNQUFNO0FBQ1osYUFBQSxHQUFNakIsa0JBQUE2QixPQUFNLEtBQUssR0FBSTtBQUNyQixZQUFNQyxnQkFBZ0M7UUFDckNDLE9BQU9DLFNBQVNDLFdBQVdELFNBQVNFO1FBQ3BDQyxPQUFPLG9CQUFJQyxLQUFLO1FBQ2hCLHlCQUF5QjFCLFVBQVVZO1FBQ25DLDBCQUEwQlQsV0FBV1M7TUFDdEM7QUFDQVAsU0FBR1MsUUFBUWEsVUFBVXBCLFVBQVVhLGVBQWUsS0FBSyxLQUFLLEtBQUssS0FBSyxHQUFJO0lBQ3ZFO0VBQ0QsQ0FBQztBQUFBLFdBekNrQ1EsVUFBQUMsSUFBQTtBQUFBLFdBQUFuQyxXQUFBb0MsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxTQUFBSDtBQUFBLEVBQUEsQ0F5Q2xDOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImdldEJvZHkiLCAidGhlbiIsICJfd2lraWNhY2hlIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgIiRib2R5IiwgIl9kb2N1bWVudCRxdWVyeVNlbGVjdCIsICJfbXckc3RvcmFnZSRnZXRPYmplY3QiLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0MiIsICJ3cFN1bW1hcnkiLCAiZmluZCIsICJnZXQiLCAid3BUZXh0Ym94MSIsICJ3Z1BhZ2VOYW1lIiwgIm13IiwgImNvbmZpZyIsICJjYWNoZUtleSIsICJjb25jYXQiLCAic2VjdGlvbiIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgInZhbHVlIiwgInNhdmVPYmplY3QiLCAic3RvcmFnZSIsICJnZXRPYmplY3QiLCAiX3NhdmVPYmplY3QkaW5wdXROYW0iLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJyZW1vdmUiLCAiZGVsYXkiLCAibmV3U2F2ZU9iamVjdCIsICJfcGF0aCIsICJsb2NhdGlvbiIsICJwYXRobmFtZSIsICJzZWFyY2giLCAiX2RhdGUiLCAiRGF0ZSIsICJzZXRPYmplY3QiLCAid2lraWNhY2hlIiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyJdCn0K

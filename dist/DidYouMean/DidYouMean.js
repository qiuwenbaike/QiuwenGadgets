/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/DidYouMean}
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

// dist/DidYouMean/DidYouMean.js
//! src/DidYouMean/options.json
var _mw$config$get;
var targetSelector = "#noarticletext-dym-link a:not(.mw-selflink)";
//! src/DidYouMean/modules/constant.ts
var WG_RELEVANT_USER_NAME = (_mw$config$get = mw.config.get("wgRelevantUserName")) !== null && _mw$config$get !== void 0 ? _mw$config$get : "";
//! src/DidYouMean/DidYouMean.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/DidYouMean/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Redirecting: (0, import_ext_gadget.localize)({
      en: "Redirecting...",
      ja: "リダイレクト中...",
      "zh-hans": "重定向中……",
      "zh-hant": "重新導向中……"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/DidYouMean/DidYouMean.ts
var import_ext_gadget3 = require("ext.gadget.Toastify");
void (0, import_ext_gadget2.getBody)().then(function didYouMean($body) {
  var _$element$attr;
  const $element = $body.find(targetSelector);
  if (!$element.length) {
    return;
  }
  const href = (_$element$attr = $element.attr("href")) !== null && _$element$attr !== void 0 ? _$element$attr : "";
  if (!href) {
    return;
  }
  if (mw.config.get("wgNamespaceNumber") === 2 && WG_RELEVANT_USER_NAME) {
    const relevantUserPageName = new mw.Title(WG_RELEVANT_USER_NAME, 2).toText();
    const pageName = new mw.Title(mw.config.get("wgPageName")).toText();
    if (relevantUserPageName === pageName) {
      return;
    }
  }
  (0, import_ext_gadget3.toastify)({
    text: getMessage("Redirecting"),
    duration: -1
  }, "info");
  location.href = href;
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0RpZFlvdU1lYW4vb3B0aW9ucy5qc29uIiwgInNyYy9EaWRZb3VNZWFuL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0RpZFlvdU1lYW4vRGlkWW91TWVhbi50cyIsICJzcmMvRGlkWW91TWVhbi9tb2R1bGVzL2kxOG4udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcblx0XCJ0YXJnZXRTZWxlY3RvclwiOiBcIiNub2FydGljbGV0ZXh0LWR5bS1saW5rIGE6bm90KC5tdy1zZWxmbGluaylcIlxufVxuIiwgImNvbnN0IFdHX1JFTEVWQU5UX1VTRVJfTkFNRTogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dSZWxldmFudFVzZXJOYW1lJykgPz8gJyc7XG5cbmV4cG9ydCB7V0dfUkVMRVZBTlRfVVNFUl9OQU1FfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7V0dfUkVMRVZBTlRfVVNFUl9OQU1FfSBmcm9tICcuL21vZHVsZXMvY29uc3RhbnQnO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL21vZHVsZXMvaTE4bic7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5Jztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBkaWRZb3VNZWFuKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQge1xuXHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJGJvZHkuZmluZChPUFRJT05TLnRhcmdldFNlbGVjdG9yKTtcblx0aWYgKCEkZWxlbWVudC5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBocmVmOiBzdHJpbmcgPSAkZWxlbWVudC5hdHRyKCdocmVmJykgPz8gJyc7XG5cdGlmICghaHJlZikge1xuXHRcdHJldHVybjtcblx0fVxuXHRpZiAobXcuY29uZmlnLmdldCgnd2dOYW1lc3BhY2VOdW1iZXInKSA9PT0gMiAmJiBXR19SRUxFVkFOVF9VU0VSX05BTUUpIHtcblx0XHRjb25zdCByZWxldmFudFVzZXJQYWdlTmFtZTogc3RyaW5nID0gbmV3IG13LlRpdGxlKFdHX1JFTEVWQU5UX1VTRVJfTkFNRSwgMikudG9UZXh0KCk7XG5cdFx0Y29uc3QgcGFnZU5hbWU6IHN0cmluZyA9IG5ldyBtdy5UaXRsZShtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJykpLnRvVGV4dCgpO1xuXG5cdFx0aWYgKHJlbGV2YW50VXNlclBhZ2VOYW1lID09PSBwYWdlTmFtZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0fVxuXG5cdHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ1JlZGlyZWN0aW5nJyksXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRsb2NhdGlvbi5ocmVmID0gaHJlZjtcbn0pO1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRSZWRpcmVjdGluZzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdSZWRpcmVjdGluZy4uLicsXG5cdFx0XHRqYTogJ+ODquODgOOCpOODrOOCr+ODiOS4rS4uLicsXG5cdFx0XHQnemgtaGFucyc6ICfph43lrprlkJHkuK3igKbigKYnLFxuXHRcdFx0J3poLWhhbnQnOiAn6YeN5paw5bCO5ZCR5Lit4oCm4oCmJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQyxJQUFBQSxpQkFBa0I7O0FDRG5CLElBQU1DLHlCQUFBQyxpQkFBZ0NDLEdBQUdDLE9BQU9DLElBQUksb0JBQW9CLE9BQUEsUUFBQUgsbUJBQUEsU0FBQUEsaUJBQUs7O0FDRTdFLElBQUFJLHFCQUFzQkMsUUFBQSxpQkFBQTs7QUNGdEIsSUFBQUMsb0JBQXVCRCxRQUFBLGlCQUFBO0FBRXZCLElBQU1FLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLGNBQUEsR0FBYUYsa0JBQUFHLFVBQVM7TUFDckJDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztFQUNGO0FBQ0Q7QUFFQSxJQUFNQyxlQUFlTCxnQkFBZ0I7QUFFckMsSUFBTU0sYUFBZ0RDLFNBQVE7QUFDN0QsU0FBT0YsYUFBYUUsR0FBRyxLQUFLQTtBQUM3Qjs7QURiQSxJQUFBQyxxQkFBdUJWLFFBQUEscUJBQUE7QUFFdkIsTUFBQSxHQUFLRCxtQkFBQVksU0FBUSxFQUFFQyxLQUFLLFNBQVNDLFdBQVdDLE9BQXNDO0FBQUEsTUFBQUM7QUFDN0UsUUFBTUMsV0FBbUJGLE1BQU1HLEtBQWF4QixjQUFjO0FBQzFELE1BQUksQ0FBQ3VCLFNBQVNFLFFBQVE7QUFDckI7RUFDRDtBQUVBLFFBQU1DLFFBQUFKLGlCQUFlQyxTQUFTSSxLQUFLLE1BQU0sT0FBQSxRQUFBTCxtQkFBQSxTQUFBQSxpQkFBSztBQUM5QyxNQUFJLENBQUNJLE1BQU07QUFDVjtFQUNEO0FBQ0EsTUFBSXZCLEdBQUdDLE9BQU9DLElBQUksbUJBQW1CLE1BQU0sS0FBS0osdUJBQXVCO0FBQ3RFLFVBQU0yQix1QkFBK0IsSUFBSXpCLEdBQUcwQixNQUFNNUIsdUJBQXVCLENBQUMsRUFBRTZCLE9BQU87QUFDbkYsVUFBTUMsV0FBbUIsSUFBSTVCLEdBQUcwQixNQUFNMUIsR0FBR0MsT0FBT0MsSUFBSSxZQUFZLENBQUMsRUFBRXlCLE9BQU87QUFFMUUsUUFBSUYseUJBQXlCRyxVQUFVO0FBQ3RDO0lBQ0Q7RUFDRDtBQUVBLEdBQUEsR0FBQWQsbUJBQUFlLFVBQ0M7SUFDQ0MsTUFBTWxCLFdBQVcsYUFBYTtJQUM5Qm1CLFVBQVU7RUFDWCxHQUNBLE1BQ0Q7QUFFQUMsV0FBU1QsT0FBT0E7QUFDakIsQ0FBQzsiLAogICJuYW1lcyI6IFsidGFyZ2V0U2VsZWN0b3IiLCAiV0dfUkVMRVZBTlRfVVNFUl9OQU1FIiwgIl9tdyRjb25maWckZ2V0IiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIlJlZGlyZWN0aW5nIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgImRpZFlvdU1lYW4iLCAiJGJvZHkiLCAiXyRlbGVtZW50JGF0dHIiLCAiJGVsZW1lbnQiLCAiZmluZCIsICJsZW5ndGgiLCAiaHJlZiIsICJhdHRyIiwgInJlbGV2YW50VXNlclBhZ2VOYW1lIiwgIlRpdGxlIiwgInRvVGV4dCIsICJwYWdlTmFtZSIsICJ0b2FzdGlmeSIsICJ0ZXh0IiwgImR1cmF0aW9uIiwgImxvY2F0aW9uIl0KfQo=

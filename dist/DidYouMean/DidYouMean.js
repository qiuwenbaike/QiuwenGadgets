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
  const relevantUserPageName = new mw.Title(WG_RELEVANT_USER_NAME, 2).toText();
  const pageName = new mw.Title(mw.config.get("wgPageName")).toText();
  if (WG_RELEVANT_USER_NAME && mw.config.get("wgNamespaceNumber") === 2 && mw.config.get("wgAction") === "view" && relevantUserPageName === pageName) {
    return;
  }
  (0, import_ext_gadget3.toastify)({
    text: getMessage("Redirecting"),
    duration: -1
  }, "info");
  location.href = href;
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0RpZFlvdU1lYW4vb3B0aW9ucy5qc29uIiwgInNyYy9EaWRZb3VNZWFuL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0RpZFlvdU1lYW4vRGlkWW91TWVhbi50cyIsICJzcmMvRGlkWW91TWVhbi9tb2R1bGVzL2kxOG4udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcblx0XCJ0YXJnZXRTZWxlY3RvclwiOiBcIiNub2FydGljbGV0ZXh0LWR5bS1saW5rIGE6bm90KC5tdy1zZWxmbGluaylcIlxufVxuIiwgImNvbnN0IFdHX1JFTEVWQU5UX1VTRVJfTkFNRTogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dSZWxldmFudFVzZXJOYW1lJykgPz8gJyc7XG5cbmV4cG9ydCB7V0dfUkVMRVZBTlRfVVNFUl9OQU1FfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7V0dfUkVMRVZBTlRfVVNFUl9OQU1FfSBmcm9tICcuL21vZHVsZXMvY29uc3RhbnQnO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL21vZHVsZXMvaTE4bic7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5Jztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBkaWRZb3VNZWFuKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQge1xuXHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJGJvZHkuZmluZChPUFRJT05TLnRhcmdldFNlbGVjdG9yKTtcblx0aWYgKCEkZWxlbWVudC5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBocmVmOiBzdHJpbmcgPSAkZWxlbWVudC5hdHRyKCdocmVmJykgPz8gJyc7XG5cdGlmICghaHJlZikge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHJlbGV2YW50VXNlclBhZ2VOYW1lOiBzdHJpbmcgPSBuZXcgbXcuVGl0bGUoV0dfUkVMRVZBTlRfVVNFUl9OQU1FLCAyKS50b1RleHQoKTtcblx0Y29uc3QgcGFnZU5hbWU6IHN0cmluZyA9IG5ldyBtdy5UaXRsZShtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJykpLnRvVGV4dCgpO1xuXHRpZiAoXG5cdFx0V0dfUkVMRVZBTlRfVVNFUl9OQU1FICYmXG5cdFx0bXcuY29uZmlnLmdldCgnd2dOYW1lc3BhY2VOdW1iZXInKSA9PT0gMiAmJlxuXHRcdG13LmNvbmZpZy5nZXQoJ3dnQWN0aW9uJykgPT09ICd2aWV3JyAmJlxuXHRcdHJlbGV2YW50VXNlclBhZ2VOYW1lID09PSBwYWdlTmFtZVxuXHQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdSZWRpcmVjdGluZycpLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J2luZm8nXG5cdCk7XG5cblx0bG9jYXRpb24uaHJlZiA9IGhyZWY7XG59KTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0UmVkaXJlY3Rpbmc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUmVkaXJlY3RpbmcuLi4nLFxuXHRcdFx0amE6ICfjg6rjg4DjgqTjg6zjgq/jg4jkuK0uLi4nLFxuXHRcdFx0J3poLWhhbnMnOiAn6YeN5a6a5ZCR5Lit4oCm4oCmJyxcblx0XHRcdCd6aC1oYW50JzogJ+mHjeaWsOWwjuWQkeS4reKApuKApicsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0MsSUFBQUEsaUJBQWtCOztBQ0RuQixJQUFNQyx5QkFBQUMsaUJBQWdDQyxHQUFHQyxPQUFPQyxJQUFJLG9CQUFvQixPQUFBLFFBQUFILG1CQUFBLFNBQUFBLGlCQUFLOztBQ0U3RSxJQUFBSSxxQkFBc0JDLFFBQUEsaUJBQUE7O0FDRnRCLElBQUFDLG9CQUF1QkQsUUFBQSxpQkFBQTtBQUV2QixJQUFNRSxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOQyxjQUFBLEdBQWFGLGtCQUFBRyxVQUFTO01BQ3JCQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7RUFDRjtBQUNEO0FBRUEsSUFBTUMsZUFBZUwsZ0JBQWdCO0FBRXJDLElBQU1NLGFBQWdEQyxTQUFRO0FBQzdELFNBQU9GLGFBQWFFLEdBQUcsS0FBS0E7QUFDN0I7O0FEYkEsSUFBQUMscUJBQXVCVixRQUFBLHFCQUFBO0FBRXZCLE1BQUEsR0FBS0QsbUJBQUFZLFNBQVEsRUFBRUMsS0FBSyxTQUFTQyxXQUFXQyxPQUFzQztBQUFBLE1BQUFDO0FBQzdFLFFBQU1DLFdBQW1CRixNQUFNRyxLQUFheEIsY0FBYztBQUMxRCxNQUFJLENBQUN1QixTQUFTRSxRQUFRO0FBQ3JCO0VBQ0Q7QUFFQSxRQUFNQyxRQUFBSixpQkFBZUMsU0FBU0ksS0FBSyxNQUFNLE9BQUEsUUFBQUwsbUJBQUEsU0FBQUEsaUJBQUs7QUFDOUMsTUFBSSxDQUFDSSxNQUFNO0FBQ1Y7RUFDRDtBQUVBLFFBQU1FLHVCQUErQixJQUFJekIsR0FBRzBCLE1BQU01Qix1QkFBdUIsQ0FBQyxFQUFFNkIsT0FBTztBQUNuRixRQUFNQyxXQUFtQixJQUFJNUIsR0FBRzBCLE1BQU0xQixHQUFHQyxPQUFPQyxJQUFJLFlBQVksQ0FBQyxFQUFFeUIsT0FBTztBQUMxRSxNQUNDN0IseUJBQ0FFLEdBQUdDLE9BQU9DLElBQUksbUJBQW1CLE1BQU0sS0FDdkNGLEdBQUdDLE9BQU9DLElBQUksVUFBVSxNQUFNLFVBQzlCdUIseUJBQXlCRyxVQUN4QjtBQUNEO0VBQ0Q7QUFFQSxHQUFBLEdBQUFkLG1CQUFBZSxVQUNDO0lBQ0NDLE1BQU1sQixXQUFXLGFBQWE7SUFDOUJtQixVQUFVO0VBQ1gsR0FDQSxNQUNEO0FBRUFDLFdBQVNULE9BQU9BO0FBQ2pCLENBQUM7IiwKICAibmFtZXMiOiBbInRhcmdldFNlbGVjdG9yIiwgIldHX1JFTEVWQU5UX1VTRVJfTkFNRSIsICJfbXckY29uZmlnJGdldCIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJSZWRpcmVjdGluZyIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImdldEJvZHkiLCAidGhlbiIsICJkaWRZb3VNZWFuIiwgIiRib2R5IiwgIl8kZWxlbWVudCRhdHRyIiwgIiRlbGVtZW50IiwgImZpbmQiLCAibGVuZ3RoIiwgImhyZWYiLCAiYXR0ciIsICJyZWxldmFudFVzZXJQYWdlTmFtZSIsICJUaXRsZSIsICJ0b1RleHQiLCAicGFnZU5hbWUiLCAidG9hc3RpZnkiLCAidGV4dCIsICJkdXJhdGlvbiIsICJsb2NhdGlvbiJdCn0K

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
var _mw$config$get;
//! src/DidYouMean/options.json
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0RpZFlvdU1lYW4vb3B0aW9ucy5qc29uIiwgInNyYy9EaWRZb3VNZWFuL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0RpZFlvdU1lYW4vRGlkWW91TWVhbi50cyIsICJzcmMvRGlkWW91TWVhbi9tb2R1bGVzL2kxOG4udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIntcblx0XCJ0YXJnZXRTZWxlY3RvclwiOiBcIiNub2FydGljbGV0ZXh0LWR5bS1saW5rIGE6bm90KC5tdy1zZWxmbGluaylcIlxufVxuIiwgImNvbnN0IFdHX1JFTEVWQU5UX1VTRVJfTkFNRTogc3RyaW5nID0gbXcuY29uZmlnLmdldCgnd2dSZWxldmFudFVzZXJOYW1lJykgPz8gJyc7XG5cbmV4cG9ydCB7V0dfUkVMRVZBTlRfVVNFUl9OQU1FfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7V0dfUkVMRVZBTlRfVVNFUl9OQU1FfSBmcm9tICcuL21vZHVsZXMvY29uc3RhbnQnO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL21vZHVsZXMvaTE4bic7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5Jztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBkaWRZb3VNZWFuKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQge1xuXHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJGJvZHkuZmluZChPUFRJT05TLnRhcmdldFNlbGVjdG9yKTtcblx0aWYgKCEkZWxlbWVudC5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBocmVmOiBzdHJpbmcgPSAkZWxlbWVudC5hdHRyKCdocmVmJykgPz8gJyc7XG5cdGlmICghaHJlZikge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmIChtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZU51bWJlcicpID09PSAyICYmIFdHX1JFTEVWQU5UX1VTRVJfTkFNRSkge1xuXHRcdGNvbnN0IHJlbGV2YW50VXNlclBhZ2VOYW1lOiBzdHJpbmcgPSBuZXcgbXcuVGl0bGUoV0dfUkVMRVZBTlRfVVNFUl9OQU1FLCAyKS50b1RleHQoKTtcblx0XHRjb25zdCBwYWdlTmFtZTogc3RyaW5nID0gbmV3IG13LlRpdGxlKG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKSkudG9UZXh0KCk7XG5cblx0XHRpZiAocmVsZXZhbnRVc2VyUGFnZU5hbWUgPT09IHBhZ2VOYW1lKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHR9XG5cblx0dG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnUmVkaXJlY3RpbmcnKSxcblx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHR9LFxuXHRcdCdpbmZvJ1xuXHQpO1xuXG5cdGxvY2F0aW9uLmhyZWYgPSBocmVmO1xufSk7XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdFJlZGlyZWN0aW5nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1JlZGlyZWN0aW5nLi4uJyxcblx0XHRcdGphOiAn44Oq44OA44Kk44Os44Kv44OI5LitLi4uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+mHjeWumuWQkeS4reKApuKApicsXG5cdFx0XHQnemgtaGFudCc6ICfph43mlrDlsI7lkJHkuK3igKbigKYnLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNDLElBQUFBLGlCQUFrQjs7QUNEbkIsSUFBTUMseUJBQUFDLGlCQUFnQ0MsR0FBR0MsT0FBT0MsSUFBSSxvQkFBb0IsT0FBQSxRQUFBSCxtQkFBQSxTQUFBQSxpQkFBSzs7QUNFN0UsSUFBQUkscUJBQXNCQyxRQUFBLGlCQUFBOztBQ0Z0QixJQUFBQyxvQkFBdUJELFFBQUEsaUJBQUE7QUFFdkIsSUFBTUUsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsY0FBQSxHQUFhRixrQkFBQUcsVUFBUztNQUNyQkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0VBQ0Y7QUFDRDtBQUVBLElBQU1DLGVBQWVMLGdCQUFnQjtBQUVyQyxJQUFNTSxhQUFnREMsU0FBUTtBQUM3RCxTQUFPRixhQUFhRSxHQUFHLEtBQUtBO0FBQzdCOztBRGJBLElBQUFDLHFCQUF1QlYsUUFBQSxxQkFBQTtBQUV2QixNQUFBLEdBQUtELG1CQUFBWSxTQUFRLEVBQUVDLEtBQUssU0FBU0MsV0FBV0MsT0FBc0M7QUFBQSxNQUFBQztBQUM3RSxRQUFNQyxXQUFtQkYsTUFBTUcsS0FBYXhCLGNBQWM7QUFDMUQsTUFBSSxDQUFDdUIsU0FBU0UsUUFBUTtBQUNyQjtFQUNEO0FBRUEsUUFBTUMsUUFBQUosaUJBQWVDLFNBQVNJLEtBQUssTUFBTSxPQUFBLFFBQUFMLG1CQUFBLFNBQUFBLGlCQUFLO0FBQzlDLE1BQUksQ0FBQ0ksTUFBTTtBQUNWO0VBQ0Q7QUFFQSxNQUFJdkIsR0FBR0MsT0FBT0MsSUFBSSxtQkFBbUIsTUFBTSxLQUFLSix1QkFBdUI7QUFDdEUsVUFBTTJCLHVCQUErQixJQUFJekIsR0FBRzBCLE1BQU01Qix1QkFBdUIsQ0FBQyxFQUFFNkIsT0FBTztBQUNuRixVQUFNQyxXQUFtQixJQUFJNUIsR0FBRzBCLE1BQU0xQixHQUFHQyxPQUFPQyxJQUFJLFlBQVksQ0FBQyxFQUFFeUIsT0FBTztBQUUxRSxRQUFJRix5QkFBeUJHLFVBQVU7QUFDdEM7SUFDRDtFQUNEO0FBRUEsR0FBQSxHQUFBZCxtQkFBQWUsVUFDQztJQUNDQyxNQUFNbEIsV0FBVyxhQUFhO0lBQzlCbUIsVUFBVTtFQUNYLEdBQ0EsTUFDRDtBQUVBQyxXQUFTVCxPQUFPQTtBQUNqQixDQUFDOyIsCiAgIm5hbWVzIjogWyJ0YXJnZXRTZWxlY3RvciIsICJXR19SRUxFVkFOVF9VU0VSX05BTUUiLCAiX213JGNvbmZpZyRnZXQiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAiUmVkaXJlY3RpbmciLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJnZXRCb2R5IiwgInRoZW4iLCAiZGlkWW91TWVhbiIsICIkYm9keSIsICJfJGVsZW1lbnQkYXR0ciIsICIkZWxlbWVudCIsICJmaW5kIiwgImxlbmd0aCIsICJocmVmIiwgImF0dHIiLCAicmVsZXZhbnRVc2VyUGFnZU5hbWUiLCAiVGl0bGUiLCAidG9UZXh0IiwgInBhZ2VOYW1lIiwgInRvYXN0aWZ5IiwgInRleHQiLCAiZHVyYXRpb24iLCAibG9jYXRpb24iXQp9Cg==

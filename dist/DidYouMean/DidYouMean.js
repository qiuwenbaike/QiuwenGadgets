/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/DidYouMean}
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
var targetSelector = "#noarticletext-dym-link a:not(.mw-selflink)";
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
var import_ext_gadget2 = require("ext.gadget.Toastify");
(function didYouMean(_element$href) {
  const elements = document.querySelectorAll(targetSelector);
  if (!elements.length) {
    return;
  }
  const [element] = elements;
  const href = (_element$href = element === null || element === void 0 ? void 0 : element.href) !== null && _element$href !== void 0 ? _element$href : "";
  if (!href) {
    return;
  }
  (0, import_ext_gadget2.toastify)({
    text: getMessage("Redirecting"),
    duration: -1
  }, "info");
  location.href = href;
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0RpZFlvdU1lYW4vb3B0aW9ucy5qc29uIiwgInNyYy9EaWRZb3VNZWFuL21vZHVsZXMvaTE4bi50cyIsICJzcmMvRGlkWW91TWVhbi9EaWRZb3VNZWFuLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwidGFyZ2V0U2VsZWN0b3JcIjogXCIjbm9hcnRpY2xldGV4dC1keW0tbGluayBhOm5vdCgubXctc2VsZmxpbmspXCJcbn1cbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0UmVkaXJlY3Rpbmc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUmVkaXJlY3RpbmcuLi4nLFxuXHRcdFx0amE6ICfjg6rjg4DjgqTjg6zjgq/jg4jkuK0uLi4nLFxuXHRcdFx0J3poLWhhbnMnOiAn6YeN5a6a5ZCR5Lit4oCm4oCmJyxcblx0XHRcdCd6aC1oYW50JzogJ+mHjeaWsOWwjuWQkeS4reKApuKApicsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL21vZHVsZXMvaTE4bic7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxuKGZ1bmN0aW9uIGRpZFlvdU1lYW4oKTogdm9pZCB7XG5cdGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChPUFRJT05TLnRhcmdldFNlbGVjdG9yKTtcblx0aWYgKCFlbGVtZW50cy5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBbZWxlbWVudF0gPSBlbGVtZW50cztcblx0Y29uc3QgaHJlZjogc3RyaW5nID0gKGVsZW1lbnQgYXMgSFRNTEFuY2hvckVsZW1lbnQpPy5ocmVmID8/ICcnO1xuXHRpZiAoIWhyZWYpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdSZWRpcmVjdGluZycpLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J2luZm8nXG5cdCk7XG5cblx0bG9jYXRpb24uaHJlZiA9IGhyZWY7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7OztBQUNDLElBQUFBLGlCQUFrQjs7QUNEbkIsSUFBQUMsb0JBQXVCQyxRQUFBLGlCQUFBO0FBRXZCLElBQU1DLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLGNBQUEsR0FBYUgsa0JBQUFJLFVBQVM7TUFDckJDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztFQUNGO0FBQ0Q7QUFFQSxJQUFNQyxlQUFlTCxnQkFBZ0I7QUFFckMsSUFBTU0sYUFBZ0RDLFNBQVE7QUFDN0QsU0FBT0YsYUFBYUUsR0FBRyxLQUFLQTtBQUM3Qjs7QUNmQSxJQUFBQyxxQkFBdUJULFFBQUEscUJBQUE7Q0FFdEIsU0FBU1UsV0FBQUMsZUFBbUI7QUFDNUIsUUFBTUMsV0FBV0MsU0FBU0MsaUJBQXlCaEIsY0FBYztBQUNqRSxNQUFJLENBQUNjLFNBQVNHLFFBQVE7QUFDckI7RUFDRDtBQUVBLFFBQU0sQ0FBQ0MsT0FBTyxJQUFJSjtBQUNsQixRQUFNSyxRQUFBTixnQkFBZ0JLLFlBQUEsUUFBQUEsWUFBQSxTQUFBLFNBQUFBLFFBQStCQyxVQUFBLFFBQUFOLGtCQUFBLFNBQUFBLGdCQUFRO0FBQzdELE1BQUksQ0FBQ00sTUFBTTtBQUNWO0VBQ0Q7QUFFQSxHQUFBLEdBQUFSLG1CQUFBUyxVQUNDO0lBQ0NDLE1BQU1aLFdBQVcsYUFBYTtJQUM5QmEsVUFBVTtFQUNYLEdBQ0EsTUFDRDtBQUVBQyxXQUFTSixPQUFPQTtBQUNqQixHQUFHOyIsCiAgIm5hbWVzIjogWyJ0YXJnZXRTZWxlY3RvciIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImdldEkxOG5NZXNzYWdlcyIsICJSZWRpcmVjdGluZyIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImRpZFlvdU1lYW4iLCAiX2VsZW1lbnQkaHJlZiIsICJlbGVtZW50cyIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yQWxsIiwgImxlbmd0aCIsICJlbGVtZW50IiwgImhyZWYiLCAidG9hc3RpZnkiLCAidGV4dCIsICJkdXJhdGlvbiIsICJsb2NhdGlvbiJdCn0K

})();

/* </nowiki> */

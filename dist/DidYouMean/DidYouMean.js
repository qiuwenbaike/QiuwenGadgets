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
var targetSelector = "#noarticletext-dym-link a:not(.mw-selflink)";
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
  (0, import_ext_gadget3.toastify)({
    text: getMessage("Redirecting"),
    duration: -1
  }, "info");
  location.href = href;
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0RpZFlvdU1lYW4vb3B0aW9ucy5qc29uIiwgInNyYy9EaWRZb3VNZWFuL0RpZFlvdU1lYW4udHMiLCAic3JjL0RpZFlvdU1lYW4vbW9kdWxlcy9pMThuLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwidGFyZ2V0U2VsZWN0b3JcIjogXCIjbm9hcnRpY2xldGV4dC1keW0tbGluayBhOm5vdCgubXctc2VsZmxpbmspXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9tb2R1bGVzL2kxOG4nO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oZnVuY3Rpb24gZGlkWW91TWVhbigkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICRib2R5LmZpbmQoT1BUSU9OUy50YXJnZXRTZWxlY3Rvcik7XG5cdGlmICghJGVsZW1lbnQubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgaHJlZjogc3RyaW5nID0gJGVsZW1lbnQuYXR0cignaHJlZicpID8/ICcnO1xuXHRpZiAoIWhyZWYpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR0b2FzdGlmeShcblx0XHR7XG5cdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdSZWRpcmVjdGluZycpLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J2luZm8nXG5cdCk7XG5cblx0bG9jYXRpb24uaHJlZiA9IGhyZWY7XG59KTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0UmVkaXJlY3Rpbmc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUmVkaXJlY3RpbmcuLi4nLFxuXHRcdFx0amE6ICfjg6rjg4DjgqTjg6zjgq/jg4jkuK0uLi4nLFxuXHRcdFx0J3poLWhhbnMnOiAn6YeN5a6a5ZCR5Lit4oCm4oCmJyxcblx0XHRcdCd6aC1oYW50JzogJ+mHjeaWsOWwjuWQkeS4reKApuKApicsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQyxJQUFBQSxpQkFBa0I7O0FDQW5CLElBQUFDLHFCQUFzQkMsUUFBQSxpQkFBQTs7QUNEdEIsSUFBQUMsb0JBQXVCRCxRQUFBLGlCQUFBO0FBRXZCLElBQU1FLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLGNBQUEsR0FBYUYsa0JBQUFHLFVBQVM7TUFDckJDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztFQUNGO0FBQ0Q7QUFFQSxJQUFNQyxlQUFlTCxnQkFBZ0I7QUFFckMsSUFBTU0sYUFBZ0RDLFNBQVE7QUFDN0QsU0FBT0YsYUFBYUUsR0FBRyxLQUFLQTtBQUM3Qjs7QURkQSxJQUFBQyxxQkFBdUJWLFFBQUEscUJBQUE7QUFFdkIsTUFBQSxHQUFLRCxtQkFBQVksU0FBUSxFQUFFQyxLQUFLLFNBQVNDLFdBQVdDLE9BQXNDO0FBQUEsTUFBQUM7QUFDN0UsUUFBTUMsV0FBbUJGLE1BQU1HLEtBQWFuQixjQUFjO0FBQzFELE1BQUksQ0FBQ2tCLFNBQVNFLFFBQVE7QUFDckI7RUFDRDtBQUVBLFFBQU1DLFFBQUFKLGlCQUFlQyxTQUFTSSxLQUFLLE1BQU0sT0FBQSxRQUFBTCxtQkFBQSxTQUFBQSxpQkFBSztBQUM5QyxNQUFJLENBQUNJLE1BQU07QUFDVjtFQUNEO0FBRUEsR0FBQSxHQUFBVCxtQkFBQVcsVUFDQztJQUNDQyxNQUFNZCxXQUFXLGFBQWE7SUFDOUJlLFVBQVU7RUFDWCxHQUNBLE1BQ0Q7QUFFQUMsV0FBU0wsT0FBT0E7QUFDakIsQ0FBQzsiLAogICJuYW1lcyI6IFsidGFyZ2V0U2VsZWN0b3IiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIlJlZGlyZWN0aW5nIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgImRpZFlvdU1lYW4iLCAiJGJvZHkiLCAiXyRlbGVtZW50JGF0dHIiLCAiJGVsZW1lbnQiLCAiZmluZCIsICJsZW5ndGgiLCAiaHJlZiIsICJhdHRyIiwgInRvYXN0aWZ5IiwgInRleHQiLCAiZHVyYXRpb24iLCAibG9jYXRpb24iXQp9Cg==

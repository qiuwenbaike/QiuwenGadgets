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
  const {
    wgNamespaceNumber,
    wgRelevantUserName,
    wgPageName
  } = mw.config.get();
  if (wgNamespaceNumber === 2 && wgRelevantUserName) {
    const relevantUserPageName = new mw.Title(wgRelevantUserName, 2).toText();
    const pageName = new mw.Title(wgPageName).toText();
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0RpZFlvdU1lYW4vb3B0aW9ucy5qc29uIiwgInNyYy9EaWRZb3VNZWFuL0RpZFlvdU1lYW4udHMiLCAic3JjL0RpZFlvdU1lYW4vbW9kdWxlcy9pMThuLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwidGFyZ2V0U2VsZWN0b3JcIjogXCIjbm9hcnRpY2xldGV4dC1keW0tbGluayBhOm5vdCgubXctc2VsZmxpbmspXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9tb2R1bGVzL2kxOG4nO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oZnVuY3Rpb24gZGlkWW91TWVhbigkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICRib2R5LmZpbmQoT1BUSU9OUy50YXJnZXRTZWxlY3Rvcik7XG5cdGlmICghJGVsZW1lbnQubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgaHJlZjogc3RyaW5nID0gJGVsZW1lbnQuYXR0cignaHJlZicpID8/ICcnO1xuXHRpZiAoIWhyZWYpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB7d2dOYW1lc3BhY2VOdW1iZXIsIHdnUmVsZXZhbnRVc2VyTmFtZSwgd2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKHdnTmFtZXNwYWNlTnVtYmVyID09PSAyICYmIHdnUmVsZXZhbnRVc2VyTmFtZSkge1xuXHRcdGNvbnN0IHJlbGV2YW50VXNlclBhZ2VOYW1lOiBzdHJpbmcgPSBuZXcgbXcuVGl0bGUod2dSZWxldmFudFVzZXJOYW1lLCAyKS50b1RleHQoKTtcblx0XHRjb25zdCBwYWdlTmFtZTogc3RyaW5nID0gbmV3IG13LlRpdGxlKHdnUGFnZU5hbWUpLnRvVGV4dCgpO1xuXG5cdFx0aWYgKHJlbGV2YW50VXNlclBhZ2VOYW1lID09PSBwYWdlTmFtZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0fVxuXG5cdHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ1JlZGlyZWN0aW5nJyksXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRsb2NhdGlvbi5ocmVmID0gaHJlZjtcbn0pO1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRSZWRpcmVjdGluZzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdSZWRpcmVjdGluZy4uLicsXG5cdFx0XHRqYTogJ+ODquODgOOCpOODrOOCr+ODiOS4rS4uLicsXG5cdFx0XHQnemgtaGFucyc6ICfph43lrprlkJHkuK3igKbigKYnLFxuXHRcdFx0J3poLWhhbnQnOiAn6YeN5paw5bCO5ZCR5Lit4oCm4oCmJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNDLElBQUFBLGlCQUFrQjs7QUNBbkIsSUFBQUMscUJBQXNCQyxRQUFBLGlCQUFBOztBQ0R0QixJQUFBQyxvQkFBdUJELFFBQUEsaUJBQUE7QUFFdkIsSUFBTUUsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsY0FBQSxHQUFhRixrQkFBQUcsVUFBUztNQUNyQkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0VBQ0Y7QUFDRDtBQUVBLElBQU1DLGVBQWVMLGdCQUFnQjtBQUVyQyxJQUFNTSxhQUFnREMsU0FBUTtBQUM3RCxTQUFPRixhQUFhRSxHQUFHLEtBQUtBO0FBQzdCOztBRGRBLElBQUFDLHFCQUF1QlYsUUFBQSxxQkFBQTtBQUV2QixNQUFBLEdBQUtELG1CQUFBWSxTQUFRLEVBQUVDLEtBQUssU0FBU0MsV0FBV0MsT0FBc0M7QUFBQSxNQUFBQztBQUM3RSxRQUFNQyxXQUFtQkYsTUFBTUcsS0FBYW5CLGNBQWM7QUFDMUQsTUFBSSxDQUFDa0IsU0FBU0UsUUFBUTtBQUNyQjtFQUNEO0FBRUEsUUFBTUMsUUFBQUosaUJBQWVDLFNBQVNJLEtBQUssTUFBTSxPQUFBLFFBQUFMLG1CQUFBLFNBQUFBLGlCQUFLO0FBQzlDLE1BQUksQ0FBQ0ksTUFBTTtBQUNWO0VBQ0Q7QUFFQSxRQUFNO0lBQUNFO0lBQW1CQztJQUFvQkM7RUFBVSxJQUFJQyxHQUFHQyxPQUFPQyxJQUFJO0FBRTFFLE1BQUlMLHNCQUFzQixLQUFLQyxvQkFBb0I7QUFDbEQsVUFBTUssdUJBQStCLElBQUlILEdBQUdJLE1BQU1OLG9CQUFvQixDQUFDLEVBQUVPLE9BQU87QUFDaEYsVUFBTUMsV0FBbUIsSUFBSU4sR0FBR0ksTUFBTUwsVUFBVSxFQUFFTSxPQUFPO0FBRXpELFFBQUlGLHlCQUF5QkcsVUFBVTtBQUN0QztJQUNEO0VBQ0Q7QUFFQSxHQUFBLEdBQUFwQixtQkFBQXFCLFVBQ0M7SUFDQ0MsTUFBTXhCLFdBQVcsYUFBYTtJQUM5QnlCLFVBQVU7RUFDWCxHQUNBLE1BQ0Q7QUFFQUMsV0FBU2YsT0FBT0E7QUFDakIsQ0FBQzsiLAogICJuYW1lcyI6IFsidGFyZ2V0U2VsZWN0b3IiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIlJlZGlyZWN0aW5nIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgImRpZFlvdU1lYW4iLCAiJGJvZHkiLCAiXyRlbGVtZW50JGF0dHIiLCAiJGVsZW1lbnQiLCAiZmluZCIsICJsZW5ndGgiLCAiaHJlZiIsICJhdHRyIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIndnUmVsZXZhbnRVc2VyTmFtZSIsICJ3Z1BhZ2VOYW1lIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAicmVsZXZhbnRVc2VyUGFnZU5hbWUiLCAiVGl0bGUiLCAidG9UZXh0IiwgInBhZ2VOYW1lIiwgInRvYXN0aWZ5IiwgInRleHQiLCAiZHVyYXRpb24iLCAibG9jYXRpb24iXQp9Cg==

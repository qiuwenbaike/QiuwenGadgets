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
    wgRelevantUserName
  } = mw.config.get();
  if (wgNamespaceNumber === 2 && wgRelevantUserName) {
    const relevantUserPageName = new mw.Title(wgRelevantUserName, 2).toText();
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0RpZFlvdU1lYW4vb3B0aW9ucy5qc29uIiwgInNyYy9EaWRZb3VNZWFuL0RpZFlvdU1lYW4udHMiLCAic3JjL0RpZFlvdU1lYW4vbW9kdWxlcy9pMThuLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwidGFyZ2V0U2VsZWN0b3JcIjogXCIjbm9hcnRpY2xldGV4dC1keW0tbGluayBhOm5vdCgubXctc2VsZmxpbmspXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9tb2R1bGVzL2kxOG4nO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oZnVuY3Rpb24gZGlkWW91TWVhbigkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICRib2R5LmZpbmQoT1BUSU9OUy50YXJnZXRTZWxlY3Rvcik7XG5cdGlmICghJGVsZW1lbnQubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgaHJlZjogc3RyaW5nID0gJGVsZW1lbnQuYXR0cignaHJlZicpID8/ICcnO1xuXHRpZiAoIWhyZWYpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB7d2dOYW1lc3BhY2VOdW1iZXIsIHdnUmVsZXZhbnRVc2VyTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKHdnTmFtZXNwYWNlTnVtYmVyID09PSAyICYmIHdnUmVsZXZhbnRVc2VyTmFtZSkge1xuXHRcdGNvbnN0IHJlbGV2YW50VXNlclBhZ2VOYW1lOiBzdHJpbmcgPSBuZXcgbXcuVGl0bGUod2dSZWxldmFudFVzZXJOYW1lLCAyKS50b1RleHQoKTtcblx0XHRjb25zdCBwYWdlTmFtZTogc3RyaW5nID0gbmV3IG13LlRpdGxlKG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKSkudG9UZXh0KCk7XG5cblx0XHRpZiAocmVsZXZhbnRVc2VyUGFnZU5hbWUgPT09IHBhZ2VOYW1lKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHR9XG5cblx0dG9hc3RpZnkoXG5cdFx0e1xuXHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnUmVkaXJlY3RpbmcnKSxcblx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHR9LFxuXHRcdCdpbmZvJ1xuXHQpO1xuXG5cdGxvY2F0aW9uLmhyZWYgPSBocmVmO1xufSk7XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdFJlZGlyZWN0aW5nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1JlZGlyZWN0aW5nLi4uJyxcblx0XHRcdGphOiAn44Oq44OA44Kk44Os44Kv44OI5LitLi4uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+mHjeWumuWQkeS4reKApuKApicsXG5cdFx0XHQnemgtaGFudCc6ICfph43mlrDlsI7lkJHkuK3igKbigKYnLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0MsSUFBQUEsaUJBQWtCOztBQ0FuQixJQUFBQyxxQkFBc0JDLFFBQUEsaUJBQUE7O0FDRHRCLElBQUFDLG9CQUF1QkQsUUFBQSxpQkFBQTtBQUV2QixJQUFNRSxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOQyxjQUFBLEdBQWFGLGtCQUFBRyxVQUFTO01BQ3JCQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7RUFDRjtBQUNEO0FBRUEsSUFBTUMsZUFBZUwsZ0JBQWdCO0FBRXJDLElBQU1NLGFBQWdEQyxTQUFRO0FBQzdELFNBQU9GLGFBQWFFLEdBQUcsS0FBS0E7QUFDN0I7O0FEZEEsSUFBQUMscUJBQXVCVixRQUFBLHFCQUFBO0FBRXZCLE1BQUEsR0FBS0QsbUJBQUFZLFNBQVEsRUFBRUMsS0FBSyxTQUFTQyxXQUFXQyxPQUFzQztBQUFBLE1BQUFDO0FBQzdFLFFBQU1DLFdBQW1CRixNQUFNRyxLQUFhbkIsY0FBYztBQUMxRCxNQUFJLENBQUNrQixTQUFTRSxRQUFRO0FBQ3JCO0VBQ0Q7QUFFQSxRQUFNQyxRQUFBSixpQkFBZUMsU0FBU0ksS0FBSyxNQUFNLE9BQUEsUUFBQUwsbUJBQUEsU0FBQUEsaUJBQUs7QUFDOUMsTUFBSSxDQUFDSSxNQUFNO0FBQ1Y7RUFDRDtBQUVBLFFBQU07SUFBQ0U7SUFBbUJDO0VBQWtCLElBQUlDLEdBQUdDLE9BQU9DLElBQUk7QUFFOUQsTUFBSUosc0JBQXNCLEtBQUtDLG9CQUFvQjtBQUNsRCxVQUFNSSx1QkFBK0IsSUFBSUgsR0FBR0ksTUFBTUwsb0JBQW9CLENBQUMsRUFBRU0sT0FBTztBQUNoRixVQUFNQyxXQUFtQixJQUFJTixHQUFHSSxNQUFNSixHQUFHQyxPQUFPQyxJQUFJLFlBQVksQ0FBQyxFQUFFRyxPQUFPO0FBRTFFLFFBQUlGLHlCQUF5QkcsVUFBVTtBQUN0QztJQUNEO0VBQ0Q7QUFFQSxHQUFBLEdBQUFuQixtQkFBQW9CLFVBQ0M7SUFDQ0MsTUFBTXZCLFdBQVcsYUFBYTtJQUM5QndCLFVBQVU7RUFDWCxHQUNBLE1BQ0Q7QUFFQUMsV0FBU2QsT0FBT0E7QUFDakIsQ0FBQzsiLAogICJuYW1lcyI6IFsidGFyZ2V0U2VsZWN0b3IiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIlJlZGlyZWN0aW5nIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgImRpZFlvdU1lYW4iLCAiJGJvZHkiLCAiXyRlbGVtZW50JGF0dHIiLCAiJGVsZW1lbnQiLCAiZmluZCIsICJsZW5ndGgiLCAiaHJlZiIsICJhdHRyIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIndnUmVsZXZhbnRVc2VyTmFtZSIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgInJlbGV2YW50VXNlclBhZ2VOYW1lIiwgIlRpdGxlIiwgInRvVGV4dCIsICJwYWdlTmFtZSIsICJ0b2FzdGlmeSIsICJ0ZXh0IiwgImR1cmF0aW9uIiwgImxvY2F0aW9uIl0KfQo=

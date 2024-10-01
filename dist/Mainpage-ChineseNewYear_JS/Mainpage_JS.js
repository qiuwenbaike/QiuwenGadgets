/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Common.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Mainpage_JS}
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

// dist/Mainpage-ChineseNewYear_JS/Mainpage_JS.js
//! src/Mainpage-ChineseNewYear_JS/modules/loadHolidayStyle.ts
var import_ext_gadget = require("ext.gadget.ChineseDays");
var loadHolidayStyle = () => {
  const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  const {
    work,
    name
  } = (0, import_ext_gadget.getDayDetail)(today);
  if (work === true) {
    return;
  }
  const holidays = ["New Year's Day", "Spring Festival", "Tomb-sweeping Day", "Labour Day", "Dragon Boat Festival", "National Day", "Mid-autumn Festival"];
  for (var _i = 0, _holidays = holidays; _i < _holidays.length; _i++) {
    const holiday = _holidays[_i];
    if (name.includes(holiday)) {
      mw.loader.using(["ext.gadget.Mainpage-ChineseNewYear"]);
    }
  }
};
//! src/Mainpage-ChineseNewYear_JS/Mainpage_JS.ts
(function mainpageChineseNewYearJS() {
  const {
    wgIsMainPage,
    wgAction
  } = mw.config.get();
  if (wgAction !== "view" || !wgIsMainPage) {
    return;
  }
  loadHolidayStyle();
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01haW5wYWdlLUNoaW5lc2VOZXdZZWFyX0pTL21vZHVsZXMvbG9hZEhvbGlkYXlTdHlsZS50cyIsICJzcmMvTWFpbnBhZ2UtQ2hpbmVzZU5ld1llYXJfSlMvTWFpbnBhZ2VfSlMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Z2V0RGF5RGV0YWlsfSBmcm9tICdleHQuZ2FkZ2V0LkNoaW5lc2VEYXlzJztcblxuY29uc3QgbG9hZEhvbGlkYXlTdHlsZSA9ICgpID0+IHtcblx0Y29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuXG5cdGNvbnN0IHt3b3JrLCBuYW1lfSA9IGdldERheURldGFpbCh0b2RheSk7XG5cblx0aWYgKHdvcmsgPT09IHRydWUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBob2xpZGF5cyA9IFtcblx0XHRcIk5ldyBZZWFyJ3MgRGF5XCIsXG5cdFx0J1NwcmluZyBGZXN0aXZhbCcsXG5cdFx0J1RvbWItc3dlZXBpbmcgRGF5Jyxcblx0XHQnTGFib3VyIERheScsXG5cdFx0J0RyYWdvbiBCb2F0IEZlc3RpdmFsJyxcblx0XHQnTmF0aW9uYWwgRGF5Jyxcblx0XHQnTWlkLWF1dHVtbiBGZXN0aXZhbCcsXG5cdF07XG5cblx0Zm9yIChjb25zdCBob2xpZGF5IG9mIGhvbGlkYXlzKSB7XG5cdFx0aWYgKG5hbWUuaW5jbHVkZXMoaG9saWRheSkpIHtcblx0XHRcdG13LmxvYWRlci51c2luZyhbJ2V4dC5nYWRnZXQuTWFpbnBhZ2UtQ2hpbmVzZU5ld1llYXInXSk7XG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQge2xvYWRIb2xpZGF5U3R5bGV9O1xuIiwgImltcG9ydCB7bG9hZEhvbGlkYXlTdHlsZX0gZnJvbSAnLi9tb2R1bGVzL2xvYWRIb2xpZGF5U3R5bGUnO1xuXG4oZnVuY3Rpb24gbWFpbnBhZ2VDaGluZXNlTmV3WWVhckpTKCk6IHZvaWQge1xuXHRjb25zdCB7d2dJc01haW5QYWdlLCB3Z0FjdGlvbn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKHdnQWN0aW9uICE9PSAndmlldycgfHwgIXdnSXNNYWluUGFnZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGxvYWRIb2xpZGF5U3R5bGUoKTtcbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxvQkFBMkJDLFFBQUEsd0JBQUE7QUFFM0IsSUFBTUMsbUJBQW1CQSxNQUFNO0FBQzlCLFFBQU1DLFNBQVEsb0JBQUlDLEtBQUssR0FBRUMsWUFBWSxFQUFFQyxNQUFNLEdBQUcsRUFBRTtBQUVsRCxRQUFNO0lBQUNDO0lBQU1DO0VBQUksS0FBQSxHQUFJUixrQkFBQVMsY0FBYU4sS0FBSztBQUV2QyxNQUFJSSxTQUFTLE1BQU07QUFDbEI7RUFDRDtBQUVBLFFBQU1HLFdBQVcsQ0FDaEIsa0JBQ0EsbUJBQ0EscUJBQ0EsY0FDQSx3QkFDQSxnQkFDQSxxQkFBQTtBQUdELFdBQUFDLEtBQUEsR0FBQUMsWUFBc0JGLFVBQUFDLEtBQUFDLFVBQUFDLFFBQUFGLE1BQVU7QUFBaEMsVUFBV0csVUFBQUYsVUFBQUQsRUFBQTtBQUNWLFFBQUlILEtBQUtPLFNBQVNELE9BQU8sR0FBRztBQUMzQkUsU0FBR0MsT0FBT0MsTUFBTSxDQUFDLG9DQUFvQyxDQUFDO0lBQ3ZEO0VBQ0Q7QUFDRDs7Q0N4QkMsU0FBU0MsMkJBQWlDO0FBQzFDLFFBQU07SUFBQ0M7SUFBY0M7RUFBUSxJQUFJTCxHQUFHTSxPQUFPQyxJQUFJO0FBRS9DLE1BQUlGLGFBQWEsVUFBVSxDQUFDRCxjQUFjO0FBQ3pDO0VBQ0Q7QUFFQWxCLG1CQUFpQjtBQUNsQixHQUFHOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImxvYWRIb2xpZGF5U3R5bGUiLCAidG9kYXkiLCAiRGF0ZSIsICJ0b0lTT1N0cmluZyIsICJzbGljZSIsICJ3b3JrIiwgIm5hbWUiLCAiZ2V0RGF5RGV0YWlsIiwgImhvbGlkYXlzIiwgIl9pIiwgIl9ob2xpZGF5cyIsICJsZW5ndGgiLCAiaG9saWRheSIsICJpbmNsdWRlcyIsICJtdyIsICJsb2FkZXIiLCAidXNpbmciLCAibWFpbnBhZ2VDaGluZXNlTmV3WWVhckpTIiwgIndnSXNNYWluUGFnZSIsICJ3Z0FjdGlvbiIsICJjb25maWciLCAiZ2V0Il0KfQo=

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

// dist/Mainpage-ChineseNewYear_JS/Mainpage-ChineseNewYear_JS.js
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
  const HOLIDAYS = [
    "New Year's Day",
    "Spring Festival",
    /* 'Tomb-sweeping Day', */
    // Do not load celebrating styles when it is Tomb-sweeping Day.
    "Labour Day",
    "Dragon Boat Festival",
    "National Day",
    "Mid-autumn Festival"
  ];
  for (var _i = 0, _HOLIDAYS = HOLIDAYS; _i < _HOLIDAYS.length; _i++) {
    const holiday = _HOLIDAYS[_i];
    if (name.includes(holiday)) {
      void mw.loader.using("ext.gadget.Mainpage-ChineseNewYear");
    }
  }
};
//! src/Mainpage-ChineseNewYear_JS/Mainpage-ChineseNewYear_JS.ts
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01haW5wYWdlLUNoaW5lc2VOZXdZZWFyX0pTL21vZHVsZXMvbG9hZEhvbGlkYXlTdHlsZS50cyIsICJzcmMvTWFpbnBhZ2UtQ2hpbmVzZU5ld1llYXJfSlMvTWFpbnBhZ2UtQ2hpbmVzZU5ld1llYXJfSlMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Z2V0RGF5RGV0YWlsfSBmcm9tICdleHQuZ2FkZ2V0LkNoaW5lc2VEYXlzJztcblxuY29uc3QgbG9hZEhvbGlkYXlTdHlsZSA9ICgpID0+IHtcblx0Y29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuXG5cdGNvbnN0IHt3b3JrLCBuYW1lfSA9IGdldERheURldGFpbCh0b2RheSk7XG5cblx0aWYgKHdvcmsgPT09IHRydWUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBIT0xJREFZUyA9IFtcblx0XHRcIk5ldyBZZWFyJ3MgRGF5XCIsXG5cdFx0J1NwcmluZyBGZXN0aXZhbCcsXG5cdFx0LyogJ1RvbWItc3dlZXBpbmcgRGF5JywgKi8gLy8gRG8gbm90IGxvYWQgY2VsZWJyYXRpbmcgc3R5bGVzIHdoZW4gaXQgaXMgVG9tYi1zd2VlcGluZyBEYXkuXG5cdFx0J0xhYm91ciBEYXknLFxuXHRcdCdEcmFnb24gQm9hdCBGZXN0aXZhbCcsXG5cdFx0J05hdGlvbmFsIERheScsXG5cdFx0J01pZC1hdXR1bW4gRmVzdGl2YWwnLFxuXHRdO1xuXG5cdGZvciAoY29uc3QgaG9saWRheSBvZiBIT0xJREFZUykge1xuXHRcdGlmIChuYW1lLmluY2x1ZGVzKGhvbGlkYXkpKSB7XG5cdFx0XHR2b2lkIG13LmxvYWRlci51c2luZygnZXh0LmdhZGdldC5NYWlucGFnZS1DaGluZXNlTmV3WWVhcicpO1xuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IHtsb2FkSG9saWRheVN0eWxlfTtcbiIsICJpbXBvcnQge2xvYWRIb2xpZGF5U3R5bGV9IGZyb20gJy4vbW9kdWxlcy9sb2FkSG9saWRheVN0eWxlJztcblxuKGZ1bmN0aW9uIG1haW5wYWdlQ2hpbmVzZU5ld1llYXJKUygpOiB2b2lkIHtcblx0Y29uc3Qge3dnSXNNYWluUGFnZSwgd2dBY3Rpb259ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICh3Z0FjdGlvbiAhPT0gJ3ZpZXcnIHx8ICF3Z0lzTWFpblBhZ2UpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRsb2FkSG9saWRheVN0eWxlKCk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsb0JBQTJCQyxRQUFBLHdCQUFBO0FBRTNCLElBQU1DLG1CQUFtQkEsTUFBTTtBQUM5QixRQUFNQyxTQUFRLG9CQUFJQyxLQUFLLEdBQUVDLFlBQVksRUFBRUMsTUFBTSxHQUFHLEVBQUU7QUFFbEQsUUFBTTtJQUFDQztJQUFNQztFQUFJLEtBQUEsR0FBSVIsa0JBQUFTLGNBQWFOLEtBQUs7QUFFdkMsTUFBSUksU0FBUyxNQUFNO0FBQ2xCO0VBQ0Q7QUFFQSxRQUFNRyxXQUFXO0lBQ2hCO0lBQ0E7OztJQUVBO0lBQ0E7SUFDQTtJQUNBO0VBQUE7QUFHRCxXQUFBQyxLQUFBLEdBQUFDLFlBQXNCRixVQUFBQyxLQUFBQyxVQUFBQyxRQUFBRixNQUFVO0FBQWhDLFVBQVdHLFVBQUFGLFVBQUFELEVBQUE7QUFDVixRQUFJSCxLQUFLTyxTQUFTRCxPQUFPLEdBQUc7QUFDM0IsV0FBS0UsR0FBR0MsT0FBT0MsTUFBTSxvQ0FBb0M7SUFDMUQ7RUFDRDtBQUNEOztDQ3hCQyxTQUFTQywyQkFBaUM7QUFDMUMsUUFBTTtJQUFDQztJQUFjQztFQUFRLElBQUlMLEdBQUdNLE9BQU9DLElBQUk7QUFFL0MsTUFBSUYsYUFBYSxVQUFVLENBQUNELGNBQWM7QUFDekM7RUFDRDtBQUVBbEIsbUJBQWlCO0FBQ2xCLEdBQUc7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAibG9hZEhvbGlkYXlTdHlsZSIsICJ0b2RheSIsICJEYXRlIiwgInRvSVNPU3RyaW5nIiwgInNsaWNlIiwgIndvcmsiLCAibmFtZSIsICJnZXREYXlEZXRhaWwiLCAiSE9MSURBWVMiLCAiX2kiLCAiX0hPTElEQVlTIiwgImxlbmd0aCIsICJob2xpZGF5IiwgImluY2x1ZGVzIiwgIm13IiwgImxvYWRlciIsICJ1c2luZyIsICJtYWlucGFnZUNoaW5lc2VOZXdZZWFySlMiLCAid2dJc01haW5QYWdlIiwgIndnQWN0aW9uIiwgImNvbmZpZyIsICJnZXQiXQp9Cg==

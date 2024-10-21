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
//! src/Mainpage-ChineseNewYear_JS/Mainpage-ChineseNewYear_JS.ts
var import_ext_gadget2 = require("ext.gadget.Util");
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
  void (0, import_ext_gadget2.checkDependencies)("Mainpage-ChineseNewYear", "0");
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01haW5wYWdlLUNoaW5lc2VOZXdZZWFyX0pTL01haW5wYWdlLUNoaW5lc2VOZXdZZWFyX0pTLnRzIiwgInNyYy9NYWlucGFnZS1DaGluZXNlTmV3WWVhcl9KUy9tb2R1bGVzL2xvYWRIb2xpZGF5U3R5bGUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Y2hlY2tEZXBlbmRlbmNpZXN9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2xvYWRIb2xpZGF5U3R5bGV9IGZyb20gJy4vbW9kdWxlcy9sb2FkSG9saWRheVN0eWxlJztcblxuKGZ1bmN0aW9uIG1haW5wYWdlQ2hpbmVzZU5ld1llYXJKUygpOiB2b2lkIHtcblx0dm9pZCBjaGVja0RlcGVuZGVuY2llcygnTWFpbnBhZ2UtQ2hpbmVzZU5ld1llYXInLCAnMCcpO1xuXG5cdGNvbnN0IHt3Z0lzTWFpblBhZ2UsIHdnQWN0aW9ufSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAod2dBY3Rpb24gIT09ICd2aWV3JyB8fCAhd2dJc01haW5QYWdlKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bG9hZEhvbGlkYXlTdHlsZSgpO1xufSkoKTtcbiIsICJpbXBvcnQge2dldERheURldGFpbH0gZnJvbSAnZXh0LmdhZGdldC5DaGluZXNlRGF5cyc7XG5cbmNvbnN0IGxvYWRIb2xpZGF5U3R5bGUgPSAoKSA9PiB7XG5cdGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcblxuXHRjb25zdCB7d29yaywgbmFtZX0gPSBnZXREYXlEZXRhaWwodG9kYXkpO1xuXG5cdGlmICh3b3JrID09PSB0cnVlKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgSE9MSURBWVMgPSBbXG5cdFx0XCJOZXcgWWVhcidzIERheVwiLFxuXHRcdCdTcHJpbmcgRmVzdGl2YWwnLFxuXHRcdC8qICdUb21iLXN3ZWVwaW5nIERheScsICovIC8vIERvIG5vdCBsb2FkIGNlbGVicmF0aW5nIHN0eWxlcyB3aGVuIGl0IGlzIFRvbWItc3dlZXBpbmcgRGF5LlxuXHRcdCdMYWJvdXIgRGF5Jyxcblx0XHQnRHJhZ29uIEJvYXQgRmVzdGl2YWwnLFxuXHRcdCdOYXRpb25hbCBEYXknLFxuXHRcdCdNaWQtYXV0dW1uIEZlc3RpdmFsJyxcblx0XTtcblxuXHRmb3IgKGNvbnN0IGhvbGlkYXkgb2YgSE9MSURBWVMpIHtcblx0XHRpZiAobmFtZS5pbmNsdWRlcyhob2xpZGF5KSkge1xuXHRcdFx0dm9pZCBtdy5sb2FkZXIudXNpbmcoJ2V4dC5nYWRnZXQuTWFpbnBhZ2UtQ2hpbmVzZU5ld1llYXInKTtcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCB7bG9hZEhvbGlkYXlTdHlsZX07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBZ0NDLFFBQUEsaUJBQUE7O0FDQWhDLElBQUFDLG9CQUEyQkQsUUFBQSx3QkFBQTtBQUUzQixJQUFNRSxtQkFBbUJBLE1BQU07QUFDOUIsUUFBTUMsU0FBUSxvQkFBSUMsS0FBSyxHQUFFQyxZQUFZLEVBQUVDLE1BQU0sR0FBRyxFQUFFO0FBRWxELFFBQU07SUFBQ0M7SUFBTUM7RUFBSSxLQUFBLEdBQUlQLGtCQUFBUSxjQUFhTixLQUFLO0FBRXZDLE1BQUlJLFNBQVMsTUFBTTtBQUNsQjtFQUNEO0FBRUEsUUFBTUcsV0FBVztJQUNoQjtJQUNBOzs7SUFFQTtJQUNBO0lBQ0E7SUFDQTtFQUFBO0FBR0QsV0FBQUMsS0FBQSxHQUFBQyxZQUFzQkYsVUFBQUMsS0FBQUMsVUFBQUMsUUFBQUYsTUFBVTtBQUFoQyxVQUFXRyxVQUFBRixVQUFBRCxFQUFBO0FBQ1YsUUFBSUgsS0FBS08sU0FBU0QsT0FBTyxHQUFHO0FBQzNCLFdBQUtFLEdBQUdDLE9BQU9DLE1BQU0sb0NBQW9DO0lBQzFEO0VBQ0Q7QUFDRDs7Q0R2QkMsU0FBU0MsMkJBQWlDO0FBQzFDLFFBQUEsR0FBS3BCLG1CQUFBcUIsbUJBQWtCLDJCQUEyQixHQUFHO0FBRXJELFFBQU07SUFBQ0M7SUFBY0M7RUFBUSxJQUFJTixHQUFHTyxPQUFPQyxJQUFJO0FBRS9DLE1BQUlGLGFBQWEsVUFBVSxDQUFDRCxjQUFjO0FBQ3pDO0VBQ0Q7QUFFQW5CLG1CQUFpQjtBQUNsQixHQUFHOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldDIiLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJsb2FkSG9saWRheVN0eWxlIiwgInRvZGF5IiwgIkRhdGUiLCAidG9JU09TdHJpbmciLCAic2xpY2UiLCAid29yayIsICJuYW1lIiwgImdldERheURldGFpbCIsICJIT0xJREFZUyIsICJfaSIsICJfSE9MSURBWVMiLCAibGVuZ3RoIiwgImhvbGlkYXkiLCAiaW5jbHVkZXMiLCAibXciLCAibG9hZGVyIiwgInVzaW5nIiwgIm1haW5wYWdlQ2hpbmVzZU5ld1llYXJKUyIsICJjaGVja0RlcGVuZGVuY2llcyIsICJ3Z0lzTWFpblBhZ2UiLCAid2dBY3Rpb24iLCAiY29uZmlnIiwgImdldCJdCn0K

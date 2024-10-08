/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/MemorialDay}
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

// dist/MemorialDay/MemorialDay.js
//! src/MemorialDay/modules/addStyleTag.ts
var styles = ".skin-citizen .mw-body,\n.skin-vector .mw-body,\n.skin-gongbi #mw-content {\n	-webkit-filter: grayscale(1) !important;\n	-moz-filter: grayscale(1) !important;\n	-o-filter: grayscale(1) !important;\n	filter: grayscale(1) !important;\n}";
var addStyleTag = () => {
  mw.loader.addStyleTag(styles);
};
//! src/MemorialDay/MemorialDay.ts
var import_ext_gadget = require("ext.gadget.Util");
//! src/MemorialDay/modules/pageList.ts
var pageList = [
  // In memorial of victims of the Nanjing Massacre
  {
    titles: ["南京大屠杀死难者国家公祭日", "侵华日军南京大屠杀遇难同胞纪念馆"],
    dates: [1213]
  },
  // Im memorial of Wu Bangguo
  {
    titles: ["吴邦国"],
    dates: [20241008, 20241009, 20241010]
  }
];
//! src/MemorialDay/MemorialDay.ts
var DATENOW = /* @__PURE__ */ new Date();
var YEAR = DATENOW.getFullYear();
var MONTH = DATENOW.getMonth() + 1;
var DAY = DATENOW.getDate();
var {
  wgPageName
} = mw.config.get();
for (_i = 0, _pageList = pageList; _i < _pageList.length; _i++) {
  const {
    titles,
    dates
  } = _pageList[_i];
  if (titles.includes(wgPageName)) {
    const allDates = (0, import_ext_gadget.generateArray)(dates);
    if (allDates.includes(MONTH * 100 + DAY) || allDates.includes(YEAR * 1e4 + MONTH * 100 + DAY)) {
      addStyleTag();
    }
  }
}
var _i;
var _pageList;

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01lbW9yaWFsRGF5L21vZHVsZXMvYWRkU3R5bGVUYWcudHMiLCAic3JjL01lbW9yaWFsRGF5L01lbW9yaWFsRGF5LnRzIiwgInNyYy9NZW1vcmlhbERheS9tb2R1bGVzL3BhZ2VMaXN0LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBzdHlsZXMgPSBgLnNraW4tY2l0aXplbiAubXctYm9keSxcbi5za2luLXZlY3RvciAubXctYm9keSxcbi5za2luLWdvbmdiaSAjbXctY29udGVudCB7XG5cdC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMSkgIWltcG9ydGFudDtcblx0LW1vei1maWx0ZXI6IGdyYXlzY2FsZSgxKSAhaW1wb3J0YW50O1xuXHQtby1maWx0ZXI6IGdyYXlzY2FsZSgxKSAhaW1wb3J0YW50O1xuXHRmaWx0ZXI6IGdyYXlzY2FsZSgxKSAhaW1wb3J0YW50O1xufWA7XG5cbmNvbnN0IGFkZFN0eWxlVGFnID0gKCkgPT4ge1xuXHRtdy5sb2FkZXIuYWRkU3R5bGVUYWcoc3R5bGVzKTtcbn07XG5cbmV4cG9ydCB7YWRkU3R5bGVUYWd9O1xuIiwgImltcG9ydCB7YWRkU3R5bGVUYWd9IGZyb20gJy4vbW9kdWxlcy9hZGRTdHlsZVRhZyc7XG5pbXBvcnQge2dlbmVyYXRlQXJyYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3BhZ2VMaXN0fSBmcm9tICcuL21vZHVsZXMvcGFnZUxpc3QnO1xuXG5jb25zdCBEQVRFTk9XOiBEYXRlID0gbmV3IERhdGUoKTtcbmNvbnN0IFlFQVI6IG51bWJlciA9IERBVEVOT1cuZ2V0RnVsbFllYXIoKTtcbmNvbnN0IE1PTlRIOiBudW1iZXIgPSBEQVRFTk9XLmdldE1vbnRoKCkgKyAxO1xuY29uc3QgREFZOiBudW1iZXIgPSBEQVRFTk9XLmdldERhdGUoKTtcblxuY29uc3Qge3dnUGFnZU5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5mb3IgKGNvbnN0IHt0aXRsZXMsIGRhdGVzfSBvZiBwYWdlTGlzdCkge1xuXHRpZiAodGl0bGVzLmluY2x1ZGVzKHdnUGFnZU5hbWUpKSB7XG5cdFx0Y29uc3QgYWxsRGF0ZXMgPSBnZW5lcmF0ZUFycmF5KGRhdGVzKTtcblxuXHRcdGlmIChhbGxEYXRlcy5pbmNsdWRlcyhNT05USCAqIDEwMCArIERBWSkgfHwgYWxsRGF0ZXMuaW5jbHVkZXMoWUVBUiAqIDFlNCArIE1PTlRIICogMTAwICsgREFZKSkge1xuXHRcdFx0YWRkU3R5bGVUYWcoKTtcblx0XHR9XG5cdH1cbn1cbiIsICJjb25zdCBwYWdlTGlzdDoge1xuXHR0aXRsZXM6IHN0cmluZyB8IHN0cmluZ1tdO1xuXHRkYXRlcz86IG51bWJlciB8IG51bWJlcltdO1xufVtdID0gW1xuXHQvLyBJbiBtZW1vcmlhbCBvZiB2aWN0aW1zIG9mIHRoZSBOYW5qaW5nIE1hc3NhY3JlXG5cdHtcblx0XHR0aXRsZXM6IFsn5Y2X5Lqs5aSn5bGg5p2A5q276Zq+6ICF5Zu95a625YWs56Wt5pelJywgJ+S+teWNjuaXpeWGm+WNl+S6rOWkp+WxoOadgOmBh+mavuWQjOiDnue6quW/temmhiddLFxuXHRcdGRhdGVzOiBbMTIxM10sXG5cdH0sXG5cdC8vIEltIG1lbW9yaWFsIG9mIFd1IEJhbmdndW9cblx0e1xuXHRcdHRpdGxlczogWyflkLTpgqblm70nXSxcblx0XHRkYXRlczogWzIwXzI0MV8wMDgsIDIwXzI0MV8wMDksIDIwXzI0MV8wMTBdLFxuXHR9LFxuXTtcblxuZXhwb3J0IHtwYWdlTGlzdH07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFNBQUE7QUFTTixJQUFNQyxjQUFjQSxNQUFNO0FBQ3pCQyxLQUFHQyxPQUFPRixZQUFZRCxNQUFNO0FBQzdCOztBQ1ZBLElBQUFJLG9CQUE0QkMsUUFBQSxpQkFBQTs7QUNENUIsSUFBTUMsV0FHQTs7RUFFTDtJQUNDQyxRQUFRLENBQUMsaUJBQWlCLGtCQUFrQjtJQUM1Q0MsT0FBTyxDQUFDLElBQUk7RUFDYjs7RUFFQTtJQUNDRCxRQUFRLENBQUMsS0FBSztJQUNkQyxPQUFPLENBQUMsVUFBWSxVQUFZLFFBQVU7RUFDM0M7QUFBQTs7QURURCxJQUFNQyxVQUFnQixvQkFBSUMsS0FBSztBQUMvQixJQUFNQyxPQUFlRixRQUFRRyxZQUFZO0FBQ3pDLElBQU1DLFFBQWdCSixRQUFRSyxTQUFTLElBQUk7QUFDM0MsSUFBTUMsTUFBY04sUUFBUU8sUUFBUTtBQUVwQyxJQUFNO0VBQUNDO0FBQVUsSUFBSWYsR0FBR2dCLE9BQU9DLElBQUk7QUFFbkMsS0FBQUMsS0FBQSxHQUFBQyxZQUE4QmYsVUFBQWMsS0FBQUMsVUFBQUMsUUFBQUYsTUFBVTtBQUF4QyxRQUFXO0lBQUNiO0lBQVFDO0VBQUssSUFBQWEsVUFBQUQsRUFBQTtBQUN4QixNQUFJYixPQUFPZ0IsU0FBU04sVUFBVSxHQUFHO0FBQ2hDLFVBQU1PLFlBQUEsR0FBV3BCLGtCQUFBcUIsZUFBY2pCLEtBQUs7QUFFcEMsUUFBSWdCLFNBQVNELFNBQVNWLFFBQVEsTUFBTUUsR0FBRyxLQUFLUyxTQUFTRCxTQUFTWixPQUFPLE1BQU1FLFFBQVEsTUFBTUUsR0FBRyxHQUFHO0FBQzlGZCxrQkFBWTtJQUNiO0VBQ0Q7QUFDRDtBQVJBbUI7QUFBQUM7IiwKICAibmFtZXMiOiBbInN0eWxlcyIsICJhZGRTdHlsZVRhZyIsICJtdyIsICJsb2FkZXIiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJwYWdlTGlzdCIsICJ0aXRsZXMiLCAiZGF0ZXMiLCAiREFURU5PVyIsICJEYXRlIiwgIllFQVIiLCAiZ2V0RnVsbFllYXIiLCAiTU9OVEgiLCAiZ2V0TW9udGgiLCAiREFZIiwgImdldERhdGUiLCAid2dQYWdlTmFtZSIsICJjb25maWciLCAiZ2V0IiwgIl9pIiwgIl9wYWdlTGlzdCIsICJsZW5ndGgiLCAiaW5jbHVkZXMiLCAiYWxsRGF0ZXMiLCAiZ2VuZXJhdGVBcnJheSJdCn0K

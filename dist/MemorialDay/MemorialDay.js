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
var styles = ".skin-citizen .mw-body,\n.skin-vector .mw-body,\n.skin-gongbi #mw-content {\n	-webkit-filter: grayscale(1) !important;\n	-moz-filter: grayscale(1) !important;\n	-ms-filter: grayscale(1) !important;\n	-o-filter: grayscale(1) !important;\n	filter: grayscale(1) !important;\n}";
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
    dates: 1213
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
  if (!titles.includes(wgPageName)) {
    continue;
  }
  const allDates = (0, import_ext_gadget.generateArray)(dates);
  if (!allDates.length || !allDates.includes(MONTH * 100 + DAY) && !allDates.includes(YEAR * 1e4 + MONTH * 100 + DAY)) {
    continue;
  }
  addStyleTag();
}
var _i;
var _pageList;

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01lbW9yaWFsRGF5L21vZHVsZXMvYWRkU3R5bGVUYWcudHMiLCAic3JjL01lbW9yaWFsRGF5L01lbW9yaWFsRGF5LnRzIiwgInNyYy9NZW1vcmlhbERheS9tb2R1bGVzL3BhZ2VMaXN0LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBzdHlsZXMgPSBgLnNraW4tY2l0aXplbiAubXctYm9keSxcbi5za2luLXZlY3RvciAubXctYm9keSxcbi5za2luLWdvbmdiaSAjbXctY29udGVudCB7XG5cdC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMSkgIWltcG9ydGFudDtcblx0LW1vei1maWx0ZXI6IGdyYXlzY2FsZSgxKSAhaW1wb3J0YW50O1xuXHQtbXMtZmlsdGVyOiBncmF5c2NhbGUoMSkgIWltcG9ydGFudDtcblx0LW8tZmlsdGVyOiBncmF5c2NhbGUoMSkgIWltcG9ydGFudDtcblx0ZmlsdGVyOiBncmF5c2NhbGUoMSkgIWltcG9ydGFudDtcbn1gO1xuXG5jb25zdCBhZGRTdHlsZVRhZyA9ICgpID0+IHtcblx0bXcubG9hZGVyLmFkZFN0eWxlVGFnKHN0eWxlcyk7XG59O1xuXG5leHBvcnQge2FkZFN0eWxlVGFnfTtcbiIsICJpbXBvcnQge2FkZFN0eWxlVGFnfSBmcm9tICcuL21vZHVsZXMvYWRkU3R5bGVUYWcnO1xuaW1wb3J0IHtnZW5lcmF0ZUFycmF5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtwYWdlTGlzdH0gZnJvbSAnLi9tb2R1bGVzL3BhZ2VMaXN0JztcblxuY29uc3QgREFURU5PVzogRGF0ZSA9IG5ldyBEYXRlKCk7XG5jb25zdCBZRUFSOiBudW1iZXIgPSBEQVRFTk9XLmdldEZ1bGxZZWFyKCk7XG5jb25zdCBNT05USDogbnVtYmVyID0gREFURU5PVy5nZXRNb250aCgpICsgMTtcbmNvbnN0IERBWTogbnVtYmVyID0gREFURU5PVy5nZXREYXRlKCk7XG5cbmNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuZm9yIChjb25zdCB7dGl0bGVzLCBkYXRlc30gb2YgcGFnZUxpc3QpIHtcblx0aWYgKCF0aXRsZXMuaW5jbHVkZXMod2dQYWdlTmFtZSkpIHtcblx0XHRjb250aW51ZTtcblx0fVxuXG5cdGNvbnN0IGFsbERhdGVzID0gZ2VuZXJhdGVBcnJheShkYXRlcyk7XG5cblx0aWYgKFxuXHRcdCFhbGxEYXRlcy5sZW5ndGggfHxcblx0XHQoIWFsbERhdGVzLmluY2x1ZGVzKE1PTlRIICogMTAwICsgREFZKSAmJiAhYWxsRGF0ZXMuaW5jbHVkZXMoWUVBUiAqIDFlNCArIE1PTlRIICogMTAwICsgREFZKSlcblx0KSB7XG5cdFx0Y29udGludWU7XG5cdH1cblxuXHRhZGRTdHlsZVRhZygpO1xufVxuIiwgImNvbnN0IHBhZ2VMaXN0OiB7XG5cdHRpdGxlczogc3RyaW5nIHwgc3RyaW5nW107XG5cdGRhdGVzPzogbnVtYmVyIHwgbnVtYmVyW107XG59W10gPSBbXG5cdC8vIEluIG1lbW9yaWFsIG9mIHZpY3RpbXMgb2YgdGhlIE5hbmppbmcgTWFzc2FjcmVcblx0e1xuXHRcdHRpdGxlczogWyfljZfkuqzlpKflsaDmnYDmrbvpmr7ogIXlm73lrrblhaznpa3ml6UnLCAn5L615Y2O5pel5Yab5Y2X5Lqs5aSn5bGg5p2A6YGH6Zq+5ZCM6IOe57qq5b+16aaGJ10sXG5cdFx0ZGF0ZXM6IDEyMTMsXG5cdH0sXG5dO1xuXG5leHBvcnQge3BhZ2VMaXN0fTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsU0FBQTtBQVVOLElBQU1DLGNBQWNBLE1BQU07QUFDekJDLEtBQUdDLE9BQU9GLFlBQVlELE1BQU07QUFDN0I7O0FDWEEsSUFBQUksb0JBQTRCQyxRQUFBLGlCQUFBOztBQ0Q1QixJQUFNQyxXQUdBOztFQUVMO0lBQ0NDLFFBQVEsQ0FBQyxpQkFBaUIsa0JBQWtCO0lBQzVDQyxPQUFPO0VBQ1I7QUFBQTs7QURKRCxJQUFNQyxVQUFnQixvQkFBSUMsS0FBSztBQUMvQixJQUFNQyxPQUFlRixRQUFRRyxZQUFZO0FBQ3pDLElBQU1DLFFBQWdCSixRQUFRSyxTQUFTLElBQUk7QUFDM0MsSUFBTUMsTUFBY04sUUFBUU8sUUFBUTtBQUVwQyxJQUFNO0VBQUNDO0FBQVUsSUFBSWYsR0FBR2dCLE9BQU9DLElBQUk7QUFFbkMsS0FBQUMsS0FBQSxHQUFBQyxZQUE4QmYsVUFBQWMsS0FBQUMsVUFBQUMsUUFBQUYsTUFBVTtBQUF4QyxRQUFXO0lBQUNiO0lBQVFDO0VBQUssSUFBQWEsVUFBQUQsRUFBQTtBQUN4QixNQUFJLENBQUNiLE9BQU9nQixTQUFTTixVQUFVLEdBQUc7QUFDakM7RUFDRDtBQUVBLFFBQU1PLFlBQUEsR0FBV3BCLGtCQUFBcUIsZUFBY2pCLEtBQUs7QUFFcEMsTUFDQyxDQUFDZ0IsU0FBU0YsVUFDVCxDQUFDRSxTQUFTRCxTQUFTVixRQUFRLE1BQU1FLEdBQUcsS0FBSyxDQUFDUyxTQUFTRCxTQUFTWixPQUFPLE1BQU1FLFFBQVEsTUFBTUUsR0FBRyxHQUMxRjtBQUNEO0VBQ0Q7QUFFQWQsY0FBWTtBQUNiO0FBZkFtQjtBQUFBQzsiLAogICJuYW1lcyI6IFsic3R5bGVzIiwgImFkZFN0eWxlVGFnIiwgIm13IiwgImxvYWRlciIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgInBhZ2VMaXN0IiwgInRpdGxlcyIsICJkYXRlcyIsICJEQVRFTk9XIiwgIkRhdGUiLCAiWUVBUiIsICJnZXRGdWxsWWVhciIsICJNT05USCIsICJnZXRNb250aCIsICJEQVkiLCAiZ2V0RGF0ZSIsICJ3Z1BhZ2VOYW1lIiwgImNvbmZpZyIsICJnZXQiLCAiX2kiLCAiX3BhZ2VMaXN0IiwgImxlbmd0aCIsICJpbmNsdWRlcyIsICJhbGxEYXRlcyIsICJnZW5lcmF0ZUFycmF5Il0KfQo=

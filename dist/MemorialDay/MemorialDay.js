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
    dates: [1213]
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01lbW9yaWFsRGF5L21vZHVsZXMvYWRkU3R5bGVUYWcudHMiLCAic3JjL01lbW9yaWFsRGF5L01lbW9yaWFsRGF5LnRzIiwgInNyYy9NZW1vcmlhbERheS9tb2R1bGVzL3BhZ2VMaXN0LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBzdHlsZXMgPSBgLnNraW4tY2l0aXplbiAubXctYm9keSxcbi5za2luLXZlY3RvciAubXctYm9keSxcbi5za2luLWdvbmdiaSAjbXctY29udGVudCB7XG5cdC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMSkgIWltcG9ydGFudDtcblx0LW1vei1maWx0ZXI6IGdyYXlzY2FsZSgxKSAhaW1wb3J0YW50O1xuXHQtbXMtZmlsdGVyOiBncmF5c2NhbGUoMSkgIWltcG9ydGFudDtcblx0LW8tZmlsdGVyOiBncmF5c2NhbGUoMSkgIWltcG9ydGFudDtcblx0ZmlsdGVyOiBncmF5c2NhbGUoMSkgIWltcG9ydGFudDtcbn1gO1xuXG5jb25zdCBhZGRTdHlsZVRhZyA9ICgpID0+IHtcblx0bXcubG9hZGVyLmFkZFN0eWxlVGFnKHN0eWxlcyk7XG59O1xuXG5leHBvcnQge2FkZFN0eWxlVGFnfTtcbiIsICJpbXBvcnQge2FkZFN0eWxlVGFnfSBmcm9tICcuL21vZHVsZXMvYWRkU3R5bGVUYWcnO1xuaW1wb3J0IHtnZW5lcmF0ZUFycmF5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtwYWdlTGlzdH0gZnJvbSAnLi9tb2R1bGVzL3BhZ2VMaXN0JztcblxuY29uc3QgREFURU5PVzogRGF0ZSA9IG5ldyBEYXRlKCk7XG5jb25zdCBZRUFSOiBudW1iZXIgPSBEQVRFTk9XLmdldEZ1bGxZZWFyKCk7XG5jb25zdCBNT05USDogbnVtYmVyID0gREFURU5PVy5nZXRNb250aCgpICsgMTtcbmNvbnN0IERBWTogbnVtYmVyID0gREFURU5PVy5nZXREYXRlKCk7XG5cbmNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuZm9yIChjb25zdCB7dGl0bGVzLCBkYXRlc30gb2YgcGFnZUxpc3QpIHtcblx0aWYgKHRpdGxlcy5pbmNsdWRlcyh3Z1BhZ2VOYW1lKSkge1xuXHRcdGNvbnN0IGFsbERhdGVzID0gZ2VuZXJhdGVBcnJheShkYXRlcyk7XG5cblx0XHRpZiAoYWxsRGF0ZXMuaW5jbHVkZXMoTU9OVEggKiAxMDAgKyBEQVkpIHx8IGFsbERhdGVzLmluY2x1ZGVzKFlFQVIgKiAxZTQgKyBNT05USCAqIDEwMCArIERBWSkpIHtcblx0XHRcdGFkZFN0eWxlVGFnKCk7XG5cdFx0fVxuXHR9XG59XG4iLCAiY29uc3QgcGFnZUxpc3Q6IHtcblx0dGl0bGVzOiBzdHJpbmcgfCBzdHJpbmdbXTtcblx0ZGF0ZXM/OiBudW1iZXIgfCBudW1iZXJbXTtcbn1bXSA9IFtcblx0Ly8gSW4gbWVtb3JpYWwgb2YgdmljdGltcyBvZiB0aGUgTmFuamluZyBNYXNzYWNyZVxuXHR7XG5cdFx0dGl0bGVzOiBbJ+WNl+S6rOWkp+WxoOadgOatu+mavuiAheWbveWutuWFrOelreaXpScsICfkvrXljY7ml6XlhpvljZfkuqzlpKflsaDmnYDpgYfpmr7lkIzog57nuqrlv7XppoYnXSxcblx0XHRkYXRlczogWzEyMTNdLFxuXHR9LFxuXTtcblxuZXhwb3J0IHtwYWdlTGlzdH07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFNBQUE7QUFVTixJQUFNQyxjQUFjQSxNQUFNO0FBQ3pCQyxLQUFHQyxPQUFPRixZQUFZRCxNQUFNO0FBQzdCOztBQ1hBLElBQUFJLG9CQUE0QkMsUUFBQSxpQkFBQTs7QUNENUIsSUFBTUMsV0FHQTs7RUFFTDtJQUNDQyxRQUFRLENBQUMsaUJBQWlCLGtCQUFrQjtJQUM1Q0MsT0FBTyxDQUFDLElBQUk7RUFDYjtBQUFBOztBREpELElBQU1DLFVBQWdCLG9CQUFJQyxLQUFLO0FBQy9CLElBQU1DLE9BQWVGLFFBQVFHLFlBQVk7QUFDekMsSUFBTUMsUUFBZ0JKLFFBQVFLLFNBQVMsSUFBSTtBQUMzQyxJQUFNQyxNQUFjTixRQUFRTyxRQUFRO0FBRXBDLElBQU07RUFBQ0M7QUFBVSxJQUFJZixHQUFHZ0IsT0FBT0MsSUFBSTtBQUVuQyxLQUFBQyxLQUFBLEdBQUFDLFlBQThCZixVQUFBYyxLQUFBQyxVQUFBQyxRQUFBRixNQUFVO0FBQXhDLFFBQVc7SUFBQ2I7SUFBUUM7RUFBSyxJQUFBYSxVQUFBRCxFQUFBO0FBQ3hCLE1BQUliLE9BQU9nQixTQUFTTixVQUFVLEdBQUc7QUFDaEMsVUFBTU8sWUFBQSxHQUFXcEIsa0JBQUFxQixlQUFjakIsS0FBSztBQUVwQyxRQUFJZ0IsU0FBU0QsU0FBU1YsUUFBUSxNQUFNRSxHQUFHLEtBQUtTLFNBQVNELFNBQVNaLE9BQU8sTUFBTUUsUUFBUSxNQUFNRSxHQUFHLEdBQUc7QUFDOUZkLGtCQUFZO0lBQ2I7RUFDRDtBQUNEO0FBUkFtQjtBQUFBQzsiLAogICJuYW1lcyI6IFsic3R5bGVzIiwgImFkZFN0eWxlVGFnIiwgIm13IiwgImxvYWRlciIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgInBhZ2VMaXN0IiwgInRpdGxlcyIsICJkYXRlcyIsICJEQVRFTk9XIiwgIkRhdGUiLCAiWUVBUiIsICJnZXRGdWxsWWVhciIsICJNT05USCIsICJnZXRNb250aCIsICJEQVkiLCAiZ2V0RGF0ZSIsICJ3Z1BhZ2VOYW1lIiwgImNvbmZpZyIsICJnZXQiLCAiX2kiLCAiX3BhZ2VMaXN0IiwgImxlbmd0aCIsICJpbmNsdWRlcyIsICJhbGxEYXRlcyIsICJnZW5lcmF0ZUFycmF5Il0KfQo=

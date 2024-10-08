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
//! src/MemorialDay/MemorialDay.ts
var import_ext_gadget = require("ext.gadget.Util");
//! src/MemorialDay/modules/MemorialDay.module.less
var memorial = "MemorialDay-module__memorial_cnrRka";
//! src/MemorialDay/modules/addStyleTag.ts
var CLASS_LIST = [".skin-citizen .mw-body", ".skin-vector .mw-body", ".skin-gongbi #mw-content"];
var addStyleTag = ($body) => {
  $body.find(CLASS_LIST.join(",")).addClass(memorial);
};
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
  if (!titles.includes(wgPageName)) {
    continue;
  }
  const allDates = (0, import_ext_gadget.generateArray)(dates);
  if (!allDates.includes(MONTH * 100 + DAY) && !allDates.includes(YEAR * 1e4 + MONTH * 100 + DAY)) {
    continue;
  }
  void (0, import_ext_gadget.getBody)().then(addStyleTag);
}
var _i;
var _pageList;

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01lbW9yaWFsRGF5L01lbW9yaWFsRGF5LnRzIiwgInNyYy9NZW1vcmlhbERheS9tb2R1bGVzL01lbW9yaWFsRGF5Lm1vZHVsZS5sZXNzIiwgInNyYy9NZW1vcmlhbERheS9tb2R1bGVzL2FkZFN0eWxlVGFnLnRzIiwgInNyYy9NZW1vcmlhbERheS9tb2R1bGVzL3BhZ2VMaXN0LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2dlbmVyYXRlQXJyYXksIGdldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2FkZFN0eWxlVGFnfSBmcm9tICcuL21vZHVsZXMvYWRkU3R5bGVUYWcnO1xuaW1wb3J0IHtwYWdlTGlzdH0gZnJvbSAnLi9tb2R1bGVzL3BhZ2VMaXN0JztcblxuY29uc3QgREFURU5PVzogRGF0ZSA9IG5ldyBEYXRlKCk7XG5jb25zdCBZRUFSOiBudW1iZXIgPSBEQVRFTk9XLmdldEZ1bGxZZWFyKCk7XG5jb25zdCBNT05USDogbnVtYmVyID0gREFURU5PVy5nZXRNb250aCgpICsgMTtcbmNvbnN0IERBWTogbnVtYmVyID0gREFURU5PVy5nZXREYXRlKCk7XG5cbmNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuZm9yIChjb25zdCB7dGl0bGVzLCBkYXRlc30gb2YgcGFnZUxpc3QpIHtcblx0aWYgKCF0aXRsZXMuaW5jbHVkZXMod2dQYWdlTmFtZSkpIHtcblx0XHRjb250aW51ZTtcblx0fVxuXG5cdGNvbnN0IGFsbERhdGVzID0gZ2VuZXJhdGVBcnJheShkYXRlcyk7XG5cblx0aWYgKCFhbGxEYXRlcy5pbmNsdWRlcyhNT05USCAqIDFlMiArIERBWSkgJiYgIWFsbERhdGVzLmluY2x1ZGVzKFlFQVIgKiAxZTQgKyBNT05USCAqIDFlMiArIERBWSkpIHtcblx0XHRjb250aW51ZTtcblx0fVxuXG5cdHZvaWQgZ2V0Qm9keSgpLnRoZW4oYWRkU3R5bGVUYWcpO1xufVxuIiwgImltcG9ydCBcImVzYnVpbGQtY3NzLW1vZHVsZXMtcGx1Z2luLW5zLWNzczpzcmMvTWVtb3JpYWxEYXkvbW9kdWxlcy9NZW1vcmlhbERheS5tb2R1bGUubGVzc1wiO1xuZXhwb3J0IGNvbnN0IG1lbW9yaWFsID0gXCJNZW1vcmlhbERheS1tb2R1bGVfX21lbW9yaWFsX2NuclJrYVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFwibWVtb3JpYWxcIjogbWVtb3JpYWxcbn07XG4gICAgICAiLCAiaW1wb3J0IHttZW1vcmlhbH0gZnJvbSAnLi9NZW1vcmlhbERheS5tb2R1bGUubGVzcyc7XG5cbmNvbnN0IENMQVNTX0xJU1QgPSBbJy5za2luLWNpdGl6ZW4gLm13LWJvZHknLCAnLnNraW4tdmVjdG9yIC5tdy1ib2R5JywgJy5za2luLWdvbmdiaSAjbXctY29udGVudCddO1xuXG5jb25zdCBhZGRTdHlsZVRhZyA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pID0+IHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1lZGlhd2lraS9jbGFzcy1kb2Ncblx0JGJvZHkuZmluZChDTEFTU19MSVNULmpvaW4oJywnKSkuYWRkQ2xhc3MobWVtb3JpYWwgYXMgc3RyaW5nKTtcbn07XG5cbmV4cG9ydCB7YWRkU3R5bGVUYWd9O1xuIiwgImNvbnN0IHBhZ2VMaXN0OiB7XG5cdHRpdGxlczogc3RyaW5nIHwgc3RyaW5nW107XG5cdGRhdGVzPzogbnVtYmVyIHwgbnVtYmVyW107XG59W10gPSBbXG5cdC8vIEluIG1lbW9yaWFsIG9mIHZpY3RpbXMgb2YgdGhlIE5hbmppbmcgTWFzc2FjcmVcblx0e1xuXHRcdHRpdGxlczogWyfljZfkuqzlpKflsaDmnYDmrbvpmr7ogIXlm73lrrblhaznpa3ml6UnLCAn5L615Y2O5pel5Yab5Y2X5Lqs5aSn5bGg5p2A6YGH6Zq+5ZCM6IOe57qq5b+16aaGJ10sXG5cdFx0ZGF0ZXM6IFsxMjEzXSxcblx0fSxcblx0Ly8gSW0gbWVtb3JpYWwgb2YgV3UgQmFuZ2d1b1xuXHR7XG5cdFx0dGl0bGVzOiBbJ+WQtOmCpuWbvSddLFxuXHRcdGRhdGVzOiBbMjBfMjQxXzAwOCwgMjBfMjQxXzAwOSwgMjBfMjQxXzAxMF0sXG5cdH0sXG5dO1xuXG5leHBvcnQge3BhZ2VMaXN0fTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsb0JBQXFDQyxRQUFBLGlCQUFBOztBQ0M5QixJQUFNQyxXQUFXOztBQ0N4QixJQUFNQyxhQUFhLENBQUMsMEJBQTBCLHlCQUF5QiwwQkFBMEI7QUFFakcsSUFBTUMsY0FBZUMsV0FBbUM7QUFFdkRBLFFBQU1DLEtBQUtILFdBQVdJLEtBQUssR0FBRyxDQUFDLEVBQUVDLFNBQVNOLFFBQWtCO0FBQzdEOztBQ1BBLElBQU1PLFdBR0E7O0VBRUw7SUFDQ0MsUUFBUSxDQUFDLGlCQUFpQixrQkFBa0I7SUFDNUNDLE9BQU8sQ0FBQyxJQUFJO0VBQ2I7O0VBRUE7SUFDQ0QsUUFBUSxDQUFDLEtBQUs7SUFDZEMsT0FBTyxDQUFDLFVBQVksVUFBWSxRQUFVO0VBQzNDO0FBQUE7O0FIVEQsSUFBTUMsVUFBZ0Isb0JBQUlDLEtBQUs7QUFDL0IsSUFBTUMsT0FBZUYsUUFBUUcsWUFBWTtBQUN6QyxJQUFNQyxRQUFnQkosUUFBUUssU0FBUyxJQUFJO0FBQzNDLElBQU1DLE1BQWNOLFFBQVFPLFFBQVE7QUFFcEMsSUFBTTtFQUFDQztBQUFVLElBQUlDLEdBQUdDLE9BQU9DLElBQUk7QUFFbkMsS0FBQUMsS0FBQSxHQUFBQyxZQUE4QmhCLFVBQUFlLEtBQUFDLFVBQUFDLFFBQUFGLE1BQVU7QUFBeEMsUUFBVztJQUFDZDtJQUFRQztFQUFLLElBQUFjLFVBQUFELEVBQUE7QUFDeEIsTUFBSSxDQUFDZCxPQUFPaUIsU0FBU1AsVUFBVSxHQUFHO0FBQ2pDO0VBQ0Q7QUFFQSxRQUFNUSxZQUFBLEdBQVc1QixrQkFBQTZCLGVBQWNsQixLQUFLO0FBRXBDLE1BQUksQ0FBQ2lCLFNBQVNELFNBQVNYLFFBQVEsTUFBTUUsR0FBRyxLQUFLLENBQUNVLFNBQVNELFNBQVNiLE9BQU8sTUFBTUUsUUFBUSxNQUFNRSxHQUFHLEdBQUc7QUFDaEc7RUFDRDtBQUVBLFFBQUEsR0FBS2xCLGtCQUFBOEIsU0FBUSxFQUFFQyxLQUFLM0IsV0FBVztBQUNoQztBQVpBb0I7QUFBQUM7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAibWVtb3JpYWwiLCAiQ0xBU1NfTElTVCIsICJhZGRTdHlsZVRhZyIsICIkYm9keSIsICJmaW5kIiwgImpvaW4iLCAiYWRkQ2xhc3MiLCAicGFnZUxpc3QiLCAidGl0bGVzIiwgImRhdGVzIiwgIkRBVEVOT1ciLCAiRGF0ZSIsICJZRUFSIiwgImdldEZ1bGxZZWFyIiwgIk1PTlRIIiwgImdldE1vbnRoIiwgIkRBWSIsICJnZXREYXRlIiwgIndnUGFnZU5hbWUiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJfaSIsICJfcGFnZUxpc3QiLCAibGVuZ3RoIiwgImluY2x1ZGVzIiwgImFsbERhdGVzIiwgImdlbmVyYXRlQXJyYXkiLCAiZ2V0Qm9keSIsICJ0aGVuIl0KfQo=

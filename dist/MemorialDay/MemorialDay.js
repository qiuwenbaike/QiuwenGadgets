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
var CLASS_LIST = [".skin-citizen .mw-body", ".skin-gongbi #mw-content", ".skin-vector .mw-body", ".skin-vector-2022 .mw-body"];
var addStyleTag = ($body) => {
  for (var _i = 0, _CLASS_LIST = CLASS_LIST; _i < _CLASS_LIST.length; _i++) {
    const className = _CLASS_LIST[_i];
    $body.find(className).addClass(memorial);
  }
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
for (_i2 = 0, _pageList = pageList; _i2 < _pageList.length; _i2++) {
  const {
    titles,
    dates
  } = _pageList[_i2];
  if (!titles.includes(wgPageName)) {
    continue;
  }
  const allDates = (0, import_ext_gadget.generateArray)(dates);
  if (!allDates.includes(MONTH * 100 + DAY) && !allDates.includes(YEAR * 1e4 + MONTH * 100 + DAY)) {
    continue;
  }
  void (0, import_ext_gadget.getBody)().then(addStyleTag);
}
var _i2;
var _pageList;

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01lbW9yaWFsRGF5L01lbW9yaWFsRGF5LnRzIiwgInNyYy9NZW1vcmlhbERheS9tb2R1bGVzL01lbW9yaWFsRGF5Lm1vZHVsZS5sZXNzIiwgInNyYy9NZW1vcmlhbERheS9tb2R1bGVzL2FkZFN0eWxlVGFnLnRzIiwgInNyYy9NZW1vcmlhbERheS9tb2R1bGVzL3BhZ2VMaXN0LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2dlbmVyYXRlQXJyYXksIGdldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2FkZFN0eWxlVGFnfSBmcm9tICcuL21vZHVsZXMvYWRkU3R5bGVUYWcnO1xuaW1wb3J0IHtwYWdlTGlzdH0gZnJvbSAnLi9tb2R1bGVzL3BhZ2VMaXN0JztcblxuY29uc3QgREFURU5PVzogRGF0ZSA9IG5ldyBEYXRlKCk7XG5jb25zdCBZRUFSOiBudW1iZXIgPSBEQVRFTk9XLmdldEZ1bGxZZWFyKCk7XG5jb25zdCBNT05USDogbnVtYmVyID0gREFURU5PVy5nZXRNb250aCgpICsgMTtcbmNvbnN0IERBWTogbnVtYmVyID0gREFURU5PVy5nZXREYXRlKCk7XG5cbmNvbnN0IHt3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuZm9yIChjb25zdCB7dGl0bGVzLCBkYXRlc30gb2YgcGFnZUxpc3QpIHtcblx0aWYgKCF0aXRsZXMuaW5jbHVkZXMod2dQYWdlTmFtZSkpIHtcblx0XHRjb250aW51ZTtcblx0fVxuXG5cdGNvbnN0IGFsbERhdGVzID0gZ2VuZXJhdGVBcnJheShkYXRlcyk7XG5cblx0aWYgKCFhbGxEYXRlcy5pbmNsdWRlcyhNT05USCAqIDFlMiArIERBWSkgJiYgIWFsbERhdGVzLmluY2x1ZGVzKFlFQVIgKiAxZTQgKyBNT05USCAqIDFlMiArIERBWSkpIHtcblx0XHRjb250aW51ZTtcblx0fVxuXG5cdHZvaWQgZ2V0Qm9keSgpLnRoZW4oYWRkU3R5bGVUYWcpO1xufVxuIiwgImltcG9ydCBcImVzYnVpbGQtY3NzLW1vZHVsZXMtcGx1Z2luLW5zLWNzczpzcmMvTWVtb3JpYWxEYXkvbW9kdWxlcy9NZW1vcmlhbERheS5tb2R1bGUubGVzc1wiO1xuZXhwb3J0IGNvbnN0IG1lbW9yaWFsID0gXCJNZW1vcmlhbERheS1tb2R1bGVfX21lbW9yaWFsX2NuclJrYVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFwibWVtb3JpYWxcIjogbWVtb3JpYWxcbn07XG4gICAgICAiLCAiaW1wb3J0IHttZW1vcmlhbH0gZnJvbSAnLi9NZW1vcmlhbERheS5tb2R1bGUubGVzcyc7XG5cbmNvbnN0IENMQVNTX0xJU1QgPSBbXG5cdCcuc2tpbi1jaXRpemVuIC5tdy1ib2R5Jyxcblx0Jy5za2luLWdvbmdiaSAjbXctY29udGVudCcsXG5cdCcuc2tpbi12ZWN0b3IgLm13LWJvZHknLFxuXHQnLnNraW4tdmVjdG9yLTIwMjIgLm13LWJvZHknLFxuXTtcblxuY29uc3QgYWRkU3R5bGVUYWcgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KSA9PiB7XG5cdGZvciAoY29uc3QgY2xhc3NOYW1lIG9mIENMQVNTX0xJU1QpIHtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWVkaWF3aWtpL2NsYXNzLWRvY1xuXHRcdCRib2R5LmZpbmQoY2xhc3NOYW1lKS5hZGRDbGFzcyhtZW1vcmlhbCBhcyBzdHJpbmcpO1xuXHR9XG59O1xuXG5leHBvcnQge2FkZFN0eWxlVGFnfTtcbiIsICJjb25zdCBwYWdlTGlzdDoge1xuXHR0aXRsZXM6IHN0cmluZyB8IHN0cmluZ1tdO1xuXHRkYXRlcz86IG51bWJlciB8IG51bWJlcltdO1xufVtdID0gW1xuXHQvLyBJbiBtZW1vcmlhbCBvZiB2aWN0aW1zIG9mIHRoZSBOYW5qaW5nIE1hc3NhY3JlXG5cdHtcblx0XHR0aXRsZXM6IFsn5Y2X5Lqs5aSn5bGg5p2A5q276Zq+6ICF5Zu95a625YWs56Wt5pelJywgJ+S+teWNjuaXpeWGm+WNl+S6rOWkp+WxoOadgOmBh+mavuWQjOiDnue6quW/temmhiddLFxuXHRcdGRhdGVzOiBbMTIxM10sXG5cdH0sXG5cdC8vIEltIG1lbW9yaWFsIG9mIFd1IEJhbmdndW9cblx0e1xuXHRcdHRpdGxlczogWyflkLTpgqblm70nXSxcblx0XHRkYXRlczogWzIwXzI0MV8wMDgsIDIwXzI0MV8wMDksIDIwXzI0MV8wMTBdLFxuXHR9LFxuXTtcblxuZXhwb3J0IHtwYWdlTGlzdH07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLG9CQUFxQ0MsUUFBQSxpQkFBQTs7QUNDOUIsSUFBTUMsV0FBVzs7QUNDeEIsSUFBTUMsYUFBYSxDQUNsQiwwQkFDQSw0QkFDQSx5QkFDQSw0QkFBQTtBQUdELElBQU1DLGNBQWVDLFdBQW1DO0FBQ3ZELFdBQUFDLEtBQUEsR0FBQUMsY0FBd0JKLFlBQUFHLEtBQUFDLFlBQUFDLFFBQUFGLE1BQVk7QUFBcEMsVUFBV0csWUFBQUYsWUFBQUQsRUFBQTtBQUVWRCxVQUFNSyxLQUFLRCxTQUFTLEVBQUVFLFNBQVNULFFBQWtCO0VBQ2xEO0FBQ0Q7O0FDZEEsSUFBTVUsV0FHQTs7RUFFTDtJQUNDQyxRQUFRLENBQUMsaUJBQWlCLGtCQUFrQjtJQUM1Q0MsT0FBTyxDQUFDLElBQUk7RUFDYjs7RUFFQTtJQUNDRCxRQUFRLENBQUMsS0FBSztJQUNkQyxPQUFPLENBQUMsVUFBWSxVQUFZLFFBQVU7RUFDM0M7QUFBQTs7QUhURCxJQUFNQyxVQUFnQixvQkFBSUMsS0FBSztBQUMvQixJQUFNQyxPQUFlRixRQUFRRyxZQUFZO0FBQ3pDLElBQU1DLFFBQWdCSixRQUFRSyxTQUFTLElBQUk7QUFDM0MsSUFBTUMsTUFBY04sUUFBUU8sUUFBUTtBQUVwQyxJQUFNO0VBQUNDO0FBQVUsSUFBSUMsR0FBR0MsT0FBT0MsSUFBSTtBQUVuQyxLQUFBQyxNQUFBLEdBQUFDLFlBQThCaEIsVUFBQWUsTUFBQUMsVUFBQXBCLFFBQUFtQixPQUFVO0FBQXhDLFFBQVc7SUFBQ2Q7SUFBUUM7RUFBSyxJQUFBYyxVQUFBRCxHQUFBO0FBQ3hCLE1BQUksQ0FBQ2QsT0FBT2dCLFNBQVNOLFVBQVUsR0FBRztBQUNqQztFQUNEO0FBRUEsUUFBTU8sWUFBQSxHQUFXOUIsa0JBQUErQixlQUFjakIsS0FBSztBQUVwQyxNQUFJLENBQUNnQixTQUFTRCxTQUFTVixRQUFRLE1BQU1FLEdBQUcsS0FBSyxDQUFDUyxTQUFTRCxTQUFTWixPQUFPLE1BQU1FLFFBQVEsTUFBTUUsR0FBRyxHQUFHO0FBQ2hHO0VBQ0Q7QUFFQSxRQUFBLEdBQUtyQixrQkFBQWdDLFNBQVEsRUFBRUMsS0FBSzdCLFdBQVc7QUFDaEM7QUFaQXVCO0FBQUFDOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgIm1lbW9yaWFsIiwgIkNMQVNTX0xJU1QiLCAiYWRkU3R5bGVUYWciLCAiJGJvZHkiLCAiX2kiLCAiX0NMQVNTX0xJU1QiLCAibGVuZ3RoIiwgImNsYXNzTmFtZSIsICJmaW5kIiwgImFkZENsYXNzIiwgInBhZ2VMaXN0IiwgInRpdGxlcyIsICJkYXRlcyIsICJEQVRFTk9XIiwgIkRhdGUiLCAiWUVBUiIsICJnZXRGdWxsWWVhciIsICJNT05USCIsICJnZXRNb250aCIsICJEQVkiLCAiZ2V0RGF0ZSIsICJ3Z1BhZ2VOYW1lIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiX2kyIiwgIl9wYWdlTGlzdCIsICJpbmNsdWRlcyIsICJhbGxEYXRlcyIsICJnZW5lcmF0ZUFycmF5IiwgImdldEJvZHkiLCAidGhlbiJdCn0K

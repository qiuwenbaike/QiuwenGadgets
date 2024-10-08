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
//! src/MemorialDay/modules/MemorialDay.module.less
var memorial = "MemorialDay-module__memorial_cnrRka";
//! src/MemorialDay/modules/addStyleTag.ts
var addStyleTag = () => {
  const CLASS_LIST = [".skin-citizen .mw-body", ".skin-gongbi #mw-content", ".skin-vector .mw-body", ".skin-vector-2022 .mw-body"];
  for (var _i = 0, _CLASS_LIST = CLASS_LIST; _i < _CLASS_LIST.length; _i++) {
    var _document$querySelect;
    const className = _CLASS_LIST[_i];
    (_document$querySelect = document.querySelector(className)) === null || _document$querySelect === void 0 || _document$querySelect.classList.add(memorial);
  }
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
    titles: ["吴邦国", "File:Wu_Bangguo_Beijing2011.jpg"],
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
  addStyleTag();
}
var _i2;
var _pageList;

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01lbW9yaWFsRGF5L21vZHVsZXMvTWVtb3JpYWxEYXkubW9kdWxlLmxlc3MiLCAic3JjL01lbW9yaWFsRGF5L21vZHVsZXMvYWRkU3R5bGVUYWcudHMiLCAic3JjL01lbW9yaWFsRGF5L01lbW9yaWFsRGF5LnRzIiwgInNyYy9NZW1vcmlhbERheS9tb2R1bGVzL3BhZ2VMaXN0LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgXCJlc2J1aWxkLWNzcy1tb2R1bGVzLXBsdWdpbi1ucy1jc3M6c3JjL01lbW9yaWFsRGF5L21vZHVsZXMvTWVtb3JpYWxEYXkubW9kdWxlLmxlc3NcIjtcbmV4cG9ydCBjb25zdCBtZW1vcmlhbCA9IFwiTWVtb3JpYWxEYXktbW9kdWxlX19tZW1vcmlhbF9jbnJSa2FcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcIm1lbW9yaWFsXCI6IG1lbW9yaWFsXG59O1xuICAgICAgIiwgImltcG9ydCB7bWVtb3JpYWx9IGZyb20gJy4vTWVtb3JpYWxEYXkubW9kdWxlLmxlc3MnO1xuXG5jb25zdCBhZGRTdHlsZVRhZyA9ICgpID0+IHtcblx0Y29uc3QgQ0xBU1NfTElTVCA9IFtcblx0XHQnLnNraW4tY2l0aXplbiAubXctYm9keScsXG5cdFx0Jy5za2luLWdvbmdiaSAjbXctY29udGVudCcsXG5cdFx0Jy5za2luLXZlY3RvciAubXctYm9keScsXG5cdFx0Jy5za2luLXZlY3Rvci0yMDIyIC5tdy1ib2R5Jyxcblx0XTtcblxuXHRmb3IgKGNvbnN0IGNsYXNzTmFtZSBvZiBDTEFTU19MSVNUKSB7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1lZGlhd2lraS9jbGFzcy1kb2Ncblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNsYXNzTmFtZSk/LmNsYXNzTGlzdC5hZGQobWVtb3JpYWwgYXMgc3RyaW5nKTtcblx0fVxufTtcblxuZXhwb3J0IHthZGRTdHlsZVRhZ307XG4iLCAiaW1wb3J0IHthZGRTdHlsZVRhZ30gZnJvbSAnLi9tb2R1bGVzL2FkZFN0eWxlVGFnJztcbmltcG9ydCB7Z2VuZXJhdGVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7cGFnZUxpc3R9IGZyb20gJy4vbW9kdWxlcy9wYWdlTGlzdCc7XG5cbmNvbnN0IERBVEVOT1c6IERhdGUgPSBuZXcgRGF0ZSgpO1xuY29uc3QgWUVBUjogbnVtYmVyID0gREFURU5PVy5nZXRGdWxsWWVhcigpO1xuY29uc3QgTU9OVEg6IG51bWJlciA9IERBVEVOT1cuZ2V0TW9udGgoKSArIDE7XG5jb25zdCBEQVk6IG51bWJlciA9IERBVEVOT1cuZ2V0RGF0ZSgpO1xuXG5jb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbmZvciAoY29uc3Qge3RpdGxlcywgZGF0ZXN9IG9mIHBhZ2VMaXN0KSB7XG5cdGlmICghdGl0bGVzLmluY2x1ZGVzKHdnUGFnZU5hbWUpKSB7XG5cdFx0Y29udGludWU7XG5cdH1cblxuXHRjb25zdCBhbGxEYXRlcyA9IGdlbmVyYXRlQXJyYXkoZGF0ZXMpO1xuXG5cdGlmICghYWxsRGF0ZXMuaW5jbHVkZXMoTU9OVEggKiAxZTIgKyBEQVkpICYmICFhbGxEYXRlcy5pbmNsdWRlcyhZRUFSICogMWU0ICsgTU9OVEggKiAxZTIgKyBEQVkpKSB7XG5cdFx0Y29udGludWU7XG5cdH1cblxuXHRhZGRTdHlsZVRhZygpO1xufVxuIiwgImNvbnN0IHBhZ2VMaXN0OiB7XG5cdHRpdGxlczogc3RyaW5nIHwgc3RyaW5nW107XG5cdGRhdGVzPzogbnVtYmVyIHwgbnVtYmVyW107XG59W10gPSBbXG5cdC8vIEluIG1lbW9yaWFsIG9mIHZpY3RpbXMgb2YgdGhlIE5hbmppbmcgTWFzc2FjcmVcblx0e1xuXHRcdHRpdGxlczogWyfljZfkuqzlpKflsaDmnYDmrbvpmr7ogIXlm73lrrblhaznpa3ml6UnLCAn5L615Y2O5pel5Yab5Y2X5Lqs5aSn5bGg5p2A6YGH6Zq+5ZCM6IOe57qq5b+16aaGJ10sXG5cdFx0ZGF0ZXM6IFsxMjEzXSxcblx0fSxcblx0Ly8gSW0gbWVtb3JpYWwgb2YgV3UgQmFuZ2d1b1xuXHR7XG5cdFx0dGl0bGVzOiBbJ+WQtOmCpuWbvScsICdGaWxlOld1X0JhbmdndW9fQmVpamluZzIwMTEuanBnJ10sXG5cdFx0ZGF0ZXM6IFsyMF8yNDFfMDA4LCAyMF8yNDFfMDA5LCAyMF8yNDFfMDEwXSxcblx0fSxcbl07XG5cbmV4cG9ydCB7cGFnZUxpc3R9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTyxJQUFNQSxXQUFXOztBQ0N4QixJQUFNQyxjQUFjQSxNQUFNO0FBQ3pCLFFBQU1DLGFBQWEsQ0FDbEIsMEJBQ0EsNEJBQ0EseUJBQ0EsNEJBQUE7QUFHRCxXQUFBQyxLQUFBLEdBQUFDLGNBQXdCRixZQUFBQyxLQUFBQyxZQUFBQyxRQUFBRixNQUFZO0FBQUEsUUFBQUc7QUFBcEMsVUFBV0MsWUFBQUgsWUFBQUQsRUFBQTtBQUVWLEtBQUFHLHdCQUFBRSxTQUFTQyxjQUFjRixTQUFTLE9BQUEsUUFBQUQsMEJBQUEsVUFBaENBLHNCQUFtQ0ksVUFBVUMsSUFBSVgsUUFBa0I7RUFDcEU7QUFDRDs7QUNiQSxJQUFBWSxvQkFBNEJDLFFBQUEsaUJBQUE7O0FDRDVCLElBQU1DLFdBR0E7O0VBRUw7SUFDQ0MsUUFBUSxDQUFDLGlCQUFpQixrQkFBa0I7SUFDNUNDLE9BQU8sQ0FBQyxJQUFJO0VBQ2I7O0VBRUE7SUFDQ0QsUUFBUSxDQUFDLE9BQU8saUNBQWlDO0lBQ2pEQyxPQUFPLENBQUMsVUFBWSxVQUFZLFFBQVU7RUFDM0M7QUFBQTs7QURURCxJQUFNQyxVQUFnQixvQkFBSUMsS0FBSztBQUMvQixJQUFNQyxPQUFlRixRQUFRRyxZQUFZO0FBQ3pDLElBQU1DLFFBQWdCSixRQUFRSyxTQUFTLElBQUk7QUFDM0MsSUFBTUMsTUFBY04sUUFBUU8sUUFBUTtBQUVwQyxJQUFNO0VBQUNDO0FBQVUsSUFBSUMsR0FBR0MsT0FBT0MsSUFBSTtBQUVuQyxLQUFBQyxNQUFBLEdBQUFDLFlBQThCaEIsVUFBQWUsTUFBQUMsVUFBQXpCLFFBQUF3QixPQUFVO0FBQXhDLFFBQVc7SUFBQ2Q7SUFBUUM7RUFBSyxJQUFBYyxVQUFBRCxHQUFBO0FBQ3hCLE1BQUksQ0FBQ2QsT0FBT2dCLFNBQVNOLFVBQVUsR0FBRztBQUNqQztFQUNEO0FBRUEsUUFBTU8sWUFBQSxHQUFXcEIsa0JBQUFxQixlQUFjakIsS0FBSztBQUVwQyxNQUFJLENBQUNnQixTQUFTRCxTQUFTVixRQUFRLE1BQU1FLEdBQUcsS0FBSyxDQUFDUyxTQUFTRCxTQUFTWixPQUFPLE1BQU1FLFFBQVEsTUFBTUUsR0FBRyxHQUFHO0FBQ2hHO0VBQ0Q7QUFFQXRCLGNBQVk7QUFDYjtBQVpBNEI7QUFBQUM7IiwKICAibmFtZXMiOiBbIm1lbW9yaWFsIiwgImFkZFN0eWxlVGFnIiwgIkNMQVNTX0xJU1QiLCAiX2kiLCAiX0NMQVNTX0xJU1QiLCAibGVuZ3RoIiwgIl9kb2N1bWVudCRxdWVyeVNlbGVjdCIsICJjbGFzc05hbWUiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJjbGFzc0xpc3QiLCAiYWRkIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAicGFnZUxpc3QiLCAidGl0bGVzIiwgImRhdGVzIiwgIkRBVEVOT1ciLCAiRGF0ZSIsICJZRUFSIiwgImdldEZ1bGxZZWFyIiwgIk1PTlRIIiwgImdldE1vbnRoIiwgIkRBWSIsICJnZXREYXRlIiwgIndnUGFnZU5hbWUiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJfaTIiLCAiX3BhZ2VMaXN0IiwgImluY2x1ZGVzIiwgImFsbERhdGVzIiwgImdlbmVyYXRlQXJyYXkiXQp9Cg==

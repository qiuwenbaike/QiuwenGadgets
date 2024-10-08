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
var CLASS_LIST = [".skin-citizen .mw-body", ".skin-gongbi #mw-content", ".skin-vector .mw-body", ".skin-vector-2022 .mw-body"];
var addStyleTag = () => {
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
  addStyleTag();
}
var _i2;
var _pageList;

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01lbW9yaWFsRGF5L21vZHVsZXMvTWVtb3JpYWxEYXkubW9kdWxlLmxlc3MiLCAic3JjL01lbW9yaWFsRGF5L21vZHVsZXMvYWRkU3R5bGVUYWcudHMiLCAic3JjL01lbW9yaWFsRGF5L01lbW9yaWFsRGF5LnRzIiwgInNyYy9NZW1vcmlhbERheS9tb2R1bGVzL3BhZ2VMaXN0LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgXCJlc2J1aWxkLWNzcy1tb2R1bGVzLXBsdWdpbi1ucy1jc3M6c3JjL01lbW9yaWFsRGF5L21vZHVsZXMvTWVtb3JpYWxEYXkubW9kdWxlLmxlc3NcIjtcbmV4cG9ydCBjb25zdCBtZW1vcmlhbCA9IFwiTWVtb3JpYWxEYXktbW9kdWxlX19tZW1vcmlhbF9jbnJSa2FcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcIm1lbW9yaWFsXCI6IG1lbW9yaWFsXG59O1xuICAgICAgIiwgImltcG9ydCB7bWVtb3JpYWx9IGZyb20gJy4vTWVtb3JpYWxEYXkubW9kdWxlLmxlc3MnO1xuXG5jb25zdCBDTEFTU19MSVNUID0gW1xuXHQnLnNraW4tY2l0aXplbiAubXctYm9keScsXG5cdCcuc2tpbi1nb25nYmkgI213LWNvbnRlbnQnLFxuXHQnLnNraW4tdmVjdG9yIC5tdy1ib2R5Jyxcblx0Jy5za2luLXZlY3Rvci0yMDIyIC5tdy1ib2R5Jyxcbl07XG5cbmNvbnN0IGFkZFN0eWxlVGFnID0gKCkgPT4ge1xuXHRmb3IgKGNvbnN0IGNsYXNzTmFtZSBvZiBDTEFTU19MSVNUKSB7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1lZGlhd2lraS9jbGFzcy1kb2Ncblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNsYXNzTmFtZSk/LmNsYXNzTGlzdC5hZGQobWVtb3JpYWwgYXMgc3RyaW5nKTtcblx0fVxufTtcblxuZXhwb3J0IHthZGRTdHlsZVRhZ307XG4iLCAiaW1wb3J0IHthZGRTdHlsZVRhZ30gZnJvbSAnLi9tb2R1bGVzL2FkZFN0eWxlVGFnJztcbmltcG9ydCB7Z2VuZXJhdGVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7cGFnZUxpc3R9IGZyb20gJy4vbW9kdWxlcy9wYWdlTGlzdCc7XG5cbmNvbnN0IERBVEVOT1c6IERhdGUgPSBuZXcgRGF0ZSgpO1xuY29uc3QgWUVBUjogbnVtYmVyID0gREFURU5PVy5nZXRGdWxsWWVhcigpO1xuY29uc3QgTU9OVEg6IG51bWJlciA9IERBVEVOT1cuZ2V0TW9udGgoKSArIDE7XG5jb25zdCBEQVk6IG51bWJlciA9IERBVEVOT1cuZ2V0RGF0ZSgpO1xuXG5jb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbmZvciAoY29uc3Qge3RpdGxlcywgZGF0ZXN9IG9mIHBhZ2VMaXN0KSB7XG5cdGlmICghdGl0bGVzLmluY2x1ZGVzKHdnUGFnZU5hbWUpKSB7XG5cdFx0Y29udGludWU7XG5cdH1cblxuXHRjb25zdCBhbGxEYXRlcyA9IGdlbmVyYXRlQXJyYXkoZGF0ZXMpO1xuXG5cdGlmICghYWxsRGF0ZXMuaW5jbHVkZXMoTU9OVEggKiAxZTIgKyBEQVkpICYmICFhbGxEYXRlcy5pbmNsdWRlcyhZRUFSICogMWU0ICsgTU9OVEggKiAxZTIgKyBEQVkpKSB7XG5cdFx0Y29udGludWU7XG5cdH1cblxuXHRhZGRTdHlsZVRhZygpO1xufVxuIiwgImNvbnN0IHBhZ2VMaXN0OiB7XG5cdHRpdGxlczogc3RyaW5nIHwgc3RyaW5nW107XG5cdGRhdGVzPzogbnVtYmVyIHwgbnVtYmVyW107XG59W10gPSBbXG5cdC8vIEluIG1lbW9yaWFsIG9mIHZpY3RpbXMgb2YgdGhlIE5hbmppbmcgTWFzc2FjcmVcblx0e1xuXHRcdHRpdGxlczogWyfljZfkuqzlpKflsaDmnYDmrbvpmr7ogIXlm73lrrblhaznpa3ml6UnLCAn5L615Y2O5pel5Yab5Y2X5Lqs5aSn5bGg5p2A6YGH6Zq+5ZCM6IOe57qq5b+16aaGJ10sXG5cdFx0ZGF0ZXM6IFsxMjEzXSxcblx0fSxcblx0Ly8gSW0gbWVtb3JpYWwgb2YgV3UgQmFuZ2d1b1xuXHR7XG5cdFx0dGl0bGVzOiBbJ+WQtOmCpuWbvSddLFxuXHRcdGRhdGVzOiBbMjBfMjQxXzAwOCwgMjBfMjQxXzAwOSwgMjBfMjQxXzAxMF0sXG5cdH0sXG5dO1xuXG5leHBvcnQge3BhZ2VMaXN0fTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ08sSUFBTUEsV0FBVzs7QUNDeEIsSUFBTUMsYUFBYSxDQUNsQiwwQkFDQSw0QkFDQSx5QkFDQSw0QkFBQTtBQUdELElBQU1DLGNBQWNBLE1BQU07QUFDekIsV0FBQUMsS0FBQSxHQUFBQyxjQUF3QkgsWUFBQUUsS0FBQUMsWUFBQUMsUUFBQUYsTUFBWTtBQUFBLFFBQUFHO0FBQXBDLFVBQVdDLFlBQUFILFlBQUFELEVBQUE7QUFFVixLQUFBRyx3QkFBQUUsU0FBU0MsY0FBY0YsU0FBUyxPQUFBLFFBQUFELDBCQUFBLFVBQWhDQSxzQkFBbUNJLFVBQVVDLElBQUlYLFFBQWtCO0VBQ3BFO0FBQ0Q7O0FDYkEsSUFBQVksb0JBQTRCQyxRQUFBLGlCQUFBOztBQ0Q1QixJQUFNQyxXQUdBOztFQUVMO0lBQ0NDLFFBQVEsQ0FBQyxpQkFBaUIsa0JBQWtCO0lBQzVDQyxPQUFPLENBQUMsSUFBSTtFQUNiOztFQUVBO0lBQ0NELFFBQVEsQ0FBQyxLQUFLO0lBQ2RDLE9BQU8sQ0FBQyxVQUFZLFVBQVksUUFBVTtFQUMzQztBQUFBOztBRFRELElBQU1DLFVBQWdCLG9CQUFJQyxLQUFLO0FBQy9CLElBQU1DLE9BQWVGLFFBQVFHLFlBQVk7QUFDekMsSUFBTUMsUUFBZ0JKLFFBQVFLLFNBQVMsSUFBSTtBQUMzQyxJQUFNQyxNQUFjTixRQUFRTyxRQUFRO0FBRXBDLElBQU07RUFBQ0M7QUFBVSxJQUFJQyxHQUFHQyxPQUFPQyxJQUFJO0FBRW5DLEtBQUFDLE1BQUEsR0FBQUMsWUFBOEJoQixVQUFBZSxNQUFBQyxVQUFBekIsUUFBQXdCLE9BQVU7QUFBeEMsUUFBVztJQUFDZDtJQUFRQztFQUFLLElBQUFjLFVBQUFELEdBQUE7QUFDeEIsTUFBSSxDQUFDZCxPQUFPZ0IsU0FBU04sVUFBVSxHQUFHO0FBQ2pDO0VBQ0Q7QUFFQSxRQUFNTyxZQUFBLEdBQVdwQixrQkFBQXFCLGVBQWNqQixLQUFLO0FBRXBDLE1BQUksQ0FBQ2dCLFNBQVNELFNBQVNWLFFBQVEsTUFBTUUsR0FBRyxLQUFLLENBQUNTLFNBQVNELFNBQVNaLE9BQU8sTUFBTUUsUUFBUSxNQUFNRSxHQUFHLEdBQUc7QUFDaEc7RUFDRDtBQUVBckIsY0FBWTtBQUNiO0FBWkEyQjtBQUFBQzsiLAogICJuYW1lcyI6IFsibWVtb3JpYWwiLCAiQ0xBU1NfTElTVCIsICJhZGRTdHlsZVRhZyIsICJfaSIsICJfQ0xBU1NfTElTVCIsICJsZW5ndGgiLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0IiwgImNsYXNzTmFtZSIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgImNsYXNzTGlzdCIsICJhZGQiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJwYWdlTGlzdCIsICJ0aXRsZXMiLCAiZGF0ZXMiLCAiREFURU5PVyIsICJEYXRlIiwgIllFQVIiLCAiZ2V0RnVsbFllYXIiLCAiTU9OVEgiLCAiZ2V0TW9udGgiLCAiREFZIiwgImdldERhdGUiLCAid2dQYWdlTmFtZSIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIl9pMiIsICJfcGFnZUxpc3QiLCAiaW5jbHVkZXMiLCAiYWxsRGF0ZXMiLCAiZ2VuZXJhdGVBcnJheSJdCn0K

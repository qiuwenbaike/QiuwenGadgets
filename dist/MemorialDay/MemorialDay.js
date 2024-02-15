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
//! src/MemorialDay/modules/pageList.ts
var pageList = [{
  title: "Qiuwen:首页",
  date: 1213
}, {
  title: "南京大屠杀死难者国家公祭日",
  date: 1213
}, {
  title: "侵华日军南京大屠杀遇难同胞纪念馆",
  date: 1213
}];
//! src/MemorialDay/modules/core.ts
var DATENOW = /* @__PURE__ */ new Date();
var MONTH = DATENOW.getMonth() + 1;
var DAY = DATENOW.getDate();
var WG_PAGE_NAME = mw.config.get("wgPageName");
var memorialDay = () => {
  for (var _i = 0, _pageList = pageList; _i < _pageList.length; _i++) {
    const {
      title,
      date
    } = _pageList[_i];
    if (!((MONTH * 100 + DAY === date || !date) && WG_PAGE_NAME === title)) {
      continue;
    }
    mw.loader.addStyleTag(".skin-citizen .mw-body,\n			.skin-vector .mw-body,\n			.skin-gongbi #mw-content {\n				-webkit-filter: grayscale(1) !important;\n				-moz-filter: grayscale(1) !important;\n				-ms-filter: grayscale(1) !important;\n				-o-filter: grayscale(1) !important;\n				filter: grayscale(1) !important;\n			}");
  }
};
//! src/MemorialDay/MemorialDay.ts
memorialDay();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01lbW9yaWFsRGF5L21vZHVsZXMvcGFnZUxpc3QudHMiLCAic3JjL01lbW9yaWFsRGF5L21vZHVsZXMvY29yZS50cyIsICJzcmMvTWVtb3JpYWxEYXkvTWVtb3JpYWxEYXkudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImV4cG9ydCBjb25zdCBwYWdlTGlzdDoge1xuXHR0aXRsZTogc3RyaW5nO1xuXHRkYXRlPzogbnVtYmVyO1xufVtdID0gW1xuXHR7XG5cdFx0dGl0bGU6ICdRaXV3ZW466aaW6aG1Jyxcblx0XHRkYXRlOiAxMjEzLFxuXHR9LFxuXHR7XG5cdFx0dGl0bGU6ICfljZfkuqzlpKflsaDmnYDmrbvpmr7ogIXlm73lrrblhaznpa3ml6UnLFxuXHRcdGRhdGU6IDEyMTMsXG5cdH0sXG5cdHtcblx0XHR0aXRsZTogJ+S+teWNjuaXpeWGm+WNl+S6rOWkp+WxoOadgOmBh+mavuWQjOiDnue6quW/temmhicsXG5cdFx0ZGF0ZTogMTIxMyxcblx0fSxcbl07XG4iLCAiaW1wb3J0IHtwYWdlTGlzdH0gZnJvbSAnLi9wYWdlTGlzdCc7XG5cbmNvbnN0IERBVEVOT1c6IERhdGUgPSBuZXcgRGF0ZSgpO1xuY29uc3QgTU9OVEg6IG51bWJlciA9IERBVEVOT1cuZ2V0TW9udGgoKSArIDE7XG5jb25zdCBEQVk6IG51bWJlciA9IERBVEVOT1cuZ2V0RGF0ZSgpO1xuXG5jb25zdCBXR19QQUdFX05BTUU6IHN0cmluZyA9IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKTtcblxuZXhwb3J0IGNvbnN0IG1lbW9yaWFsRGF5ID0gKCk6IHZvaWQgPT4ge1xuXHRmb3IgKGNvbnN0IHt0aXRsZSwgZGF0ZX0gb2YgcGFnZUxpc3QpIHtcblx0XHRpZiAoISgoTU9OVEggKiAxMDAgKyBEQVkgPT09IGRhdGUgfHwgIWRhdGUpICYmIFdHX1BBR0VfTkFNRSA9PT0gdGl0bGUpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0bXcubG9hZGVyLmFkZFN0eWxlVGFnKFxuXHRcdFx0YC5za2luLWNpdGl6ZW4gLm13LWJvZHksXG5cdFx0XHQuc2tpbi12ZWN0b3IgLm13LWJvZHksXG5cdFx0XHQuc2tpbi1nb25nYmkgI213LWNvbnRlbnQge1xuXHRcdFx0XHQtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDEpICFpbXBvcnRhbnQ7XG5cdFx0XHRcdC1tb3otZmlsdGVyOiBncmF5c2NhbGUoMSkgIWltcG9ydGFudDtcblx0XHRcdFx0LW1zLWZpbHRlcjogZ3JheXNjYWxlKDEpICFpbXBvcnRhbnQ7XG5cdFx0XHRcdC1vLWZpbHRlcjogZ3JheXNjYWxlKDEpICFpbXBvcnRhbnQ7XG5cdFx0XHRcdGZpbHRlcjogZ3JheXNjYWxlKDEpICFpbXBvcnRhbnQ7XG5cdFx0XHR9YFxuXHRcdCk7XG5cdH1cbn07XG4iLCAiaW1wb3J0IHttZW1vcmlhbERheX0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuXG5tZW1vcmlhbERheSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxXQUdQLENBQ0w7RUFDQ0MsT0FBTztFQUNQQyxNQUFNO0FBQ1AsR0FDQTtFQUNDRCxPQUFPO0VBQ1BDLE1BQU07QUFDUCxHQUNBO0VBQ0NELE9BQU87RUFDUEMsTUFBTTtBQUNQLENBQUE7O0FDYkQsSUFBTUMsVUFBZ0Isb0JBQUlDLEtBQUs7QUFDL0IsSUFBTUMsUUFBZ0JGLFFBQVFHLFNBQVMsSUFBSTtBQUMzQyxJQUFNQyxNQUFjSixRQUFRSyxRQUFRO0FBRXBDLElBQU1DLGVBQXVCQyxHQUFHQyxPQUFPQyxJQUFJLFlBQVk7QUFFaEQsSUFBTUMsY0FBY0EsTUFBWTtBQUN0QyxXQUFBQyxLQUFBLEdBQUFDLFlBQTRCZixVQUFBYyxLQUFBQyxVQUFBQyxRQUFBRixNQUFVO0FBQXRDLFVBQVc7TUFBQ2I7TUFBT0M7SUFBSSxJQUFBYSxVQUFBRCxFQUFBO0FBQ3RCLFFBQUksR0FBR1QsUUFBUSxNQUFNRSxRQUFRTCxRQUFRLENBQUNBLFNBQVNPLGlCQUFpQlIsUUFBUTtBQUN2RTtJQUNEO0FBQ0FTLE9BQUdPLE9BQU9DLFlBQUEsMlNBVVY7RUFDRDtBQUNEOztBQ3ZCQUwsWUFBWTsiLAogICJuYW1lcyI6IFsicGFnZUxpc3QiLCAidGl0bGUiLCAiZGF0ZSIsICJEQVRFTk9XIiwgIkRhdGUiLCAiTU9OVEgiLCAiZ2V0TW9udGgiLCAiREFZIiwgImdldERhdGUiLCAiV0dfUEFHRV9OQU1FIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAibWVtb3JpYWxEYXkiLCAiX2kiLCAiX3BhZ2VMaXN0IiwgImxlbmd0aCIsICJsb2FkZXIiLCAiYWRkU3R5bGVUYWciXQp9Cg==

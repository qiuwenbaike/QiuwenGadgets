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

// dist/Mainpage_JS/Mainpage_JS.js
//! src/Mainpage_JS/modules/constant.ts
var WG_ACTION = mw.config.get("wgAction");
var WG_IS_NAIN_PAGE = mw.config.get("wgIsMainPage");
//! src/Mainpage_JS/Mainpage_JS.ts
var import_ext_gadget = require("ext.gadget.Util");
void (0, import_ext_gadget.getBody)().then(($body) => {
  if (WG_ACTION !== "view" || !WG_IS_NAIN_PAGE) {
    return;
  }
  $body.find("#mw-content-text a.new").contents().unwrap();
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01haW5wYWdlX0pTL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL01haW5wYWdlX0pTL01haW5wYWdlX0pTLnRzIl0sCiAgInNvdXJjZVJvb3QiOiAiLi4vR2FkZ2V0cyIsCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBXR19BQ1RJT046IE1lZGlhV2lraUNvbmZpZ01hcFdnQWN0aW9uID0gbXcuY29uZmlnLmdldCgnd2dBY3Rpb24nKTtcbmNvbnN0IFdHX0lTX05BSU5fUEFHRTogdHJ1ZSB8IG51bGwgPSBtdy5jb25maWcuZ2V0KCd3Z0lzTWFpblBhZ2UnKTtcblxuZXhwb3J0IHtXR19BQ1RJT04sIFdHX0lTX05BSU5fUEFHRX07XG4iLCAiaW1wb3J0IHtXR19BQ1RJT04sIFdHX0lTX05BSU5fUEFHRX0gZnJvbSAnLi9tb2R1bGVzL2NvbnN0YW50JztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxudm9pZCBnZXRCb2R5KCkudGhlbigoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGlmIChXR19BQ1RJT04gIT09ICd2aWV3JyB8fCAhV0dfSVNfTkFJTl9QQUdFKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8g6ZqQ6JeP57qi6Imy6ZO+5o6lXG5cdCRib2R5LmZpbmQoJyNtdy1jb250ZW50LXRleHQgYS5uZXcnKS5jb250ZW50cygpLnVud3JhcCgpO1xufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7O0FBQUEsSUFBTUEsWUFBd0NDLEdBQUdDLE9BQU9DLElBQUksVUFBVTtBQUN0RSxJQUFNQyxrQkFBK0JILEdBQUdDLE9BQU9DLElBQUksY0FBYzs7QUNBakUsSUFBQUUsb0JBQXNCQyxRQUFBLGlCQUFBO0FBRXRCLE1BQUEsR0FBS0Qsa0JBQUFFLFNBQVEsRUFBRUMsS0FBTUMsV0FBeUM7QUFDN0QsTUFBSVQsY0FBYyxVQUFVLENBQUNJLGlCQUFpQjtBQUM3QztFQUNEO0FBR0FLLFFBQU1DLEtBQUssd0JBQXdCLEVBQUVDLFNBQVMsRUFBRUMsT0FBTztBQUN4RCxDQUFDOyIsCiAgIm5hbWVzIjogWyJXR19BQ1RJT04iLCAibXciLCAiY29uZmlnIiwgImdldCIsICJXR19JU19OQUlOX1BBR0UiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJnZXRCb2R5IiwgInRoZW4iLCAiJGJvZHkiLCAiZmluZCIsICJjb250ZW50cyIsICJ1bndyYXAiXQp9Cg==

})();

/* </nowiki> */

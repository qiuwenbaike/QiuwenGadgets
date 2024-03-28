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
//! src/Mainpage_JS/Mainpage_JS.ts
var import_ext_gadget = require("ext.gadget.Util");
void (0, import_ext_gadget.getBody)().then(($body) => {
  const {
    wgIsMainPage,
    wgAction
  } = mw.config.get();
  if (wgAction !== "view" || !wgIsMainPage) {
    return;
  }
  $body.find("#mw-content-text a.new").contents().unwrap();
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01haW5wYWdlX0pTL01haW5wYWdlX0pTLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCB7d2dJc01haW5QYWdlLCB3Z0FjdGlvbn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKHdnQWN0aW9uICE9PSAndmlldycgfHwgIXdnSXNNYWluUGFnZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIOmakOiXj+e6ouiJsumTvuaOpVxuXHQkYm9keS5maW5kKCcjbXctY29udGVudC10ZXh0IGEubmV3JykuY29udGVudHMoKS51bndyYXAoKTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsb0JBQXNCQyxRQUFBLGlCQUFBO0FBRXRCLE1BQUEsR0FBS0Qsa0JBQUFFLFNBQVEsRUFBRUMsS0FBTUMsV0FBeUM7QUFDN0QsUUFBTTtJQUFDQztJQUFjQztFQUFRLElBQUlDLEdBQUdDLE9BQU9DLElBQUk7QUFFL0MsTUFBSUgsYUFBYSxVQUFVLENBQUNELGNBQWM7QUFDekM7RUFDRDtBQUdBRCxRQUFNTSxLQUFLLHdCQUF3QixFQUFFQyxTQUFTLEVBQUVDLE9BQU87QUFDeEQsQ0FBQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJnZXRCb2R5IiwgInRoZW4iLCAiJGJvZHkiLCAid2dJc01haW5QYWdlIiwgIndnQWN0aW9uIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiZmluZCIsICJjb250ZW50cyIsICJ1bndyYXAiXQp9Cg==

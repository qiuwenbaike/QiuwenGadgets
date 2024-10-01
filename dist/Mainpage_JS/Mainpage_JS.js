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
//! src/Mainpage_JS/modules/newLinkUnwrap.ts
var newLinkUnwrap = ($body) => {
  $body.find("#mw-content-text a.new").contents().unwrap();
};
//! src/Mainpage_JS/Mainpage_JS.ts
void (0, import_ext_gadget.getBody)().then(($body) => {
  const {
    wgIsMainPage,
    wgAction
  } = mw.config.get();
  if (wgAction !== "view" || !wgIsMainPage) {
    return;
  }
  newLinkUnwrap($body);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01haW5wYWdlX0pTL01haW5wYWdlX0pTLnRzIiwgInNyYy9NYWlucGFnZV9KUy9tb2R1bGVzL25ld0xpbmtVbndyYXAudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7bmV3TGlua1Vud3JhcH0gZnJvbSAnLi9tb2R1bGVzL25ld0xpbmtVbndyYXAnO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0Y29uc3Qge3dnSXNNYWluUGFnZSwgd2dBY3Rpb259ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICh3Z0FjdGlvbiAhPT0gJ3ZpZXcnIHx8ICF3Z0lzTWFpblBhZ2UpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRuZXdMaW5rVW53cmFwKCRib2R5KTtcbn0pO1xuIiwgIi8vIOmakOiXj+e6ouiJsumTvuaOpVxuY29uc3QgbmV3TGlua1Vud3JhcCA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pID0+IHtcblx0JGJvZHkuZmluZCgnI213LWNvbnRlbnQtdGV4dCBhLm5ldycpLmNvbnRlbnRzKCkudW53cmFwKCk7XG59O1xuXG5leHBvcnQge25ld0xpbmtVbndyYXB9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsb0JBQXNCQyxRQUFBLGlCQUFBOztBQ0N0QixJQUFNQyxnQkFBaUJDLFdBQW1DO0FBQ3pEQSxRQUFNQyxLQUFLLHdCQUF3QixFQUFFQyxTQUFTLEVBQUVDLE9BQU87QUFDeEQ7O0FEQUEsTUFBQSxHQUFLTixrQkFBQU8sU0FBUSxFQUFFQyxLQUFNTCxXQUF5QztBQUM3RCxRQUFNO0lBQUNNO0lBQWNDO0VBQVEsSUFBSUMsR0FBR0MsT0FBT0MsSUFBSTtBQUUvQyxNQUFJSCxhQUFhLFVBQVUsQ0FBQ0QsY0FBYztBQUN6QztFQUNEO0FBRUFQLGdCQUFjQyxLQUFLO0FBQ3BCLENBQUM7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAibmV3TGlua1Vud3JhcCIsICIkYm9keSIsICJmaW5kIiwgImNvbnRlbnRzIiwgInVud3JhcCIsICJnZXRCb2R5IiwgInRoZW4iLCAid2dJc01haW5QYWdlIiwgIndnQWN0aW9uIiwgIm13IiwgImNvbmZpZyIsICJnZXQiXQp9Cg==

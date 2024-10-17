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
//! src/Mainpage_JS/modules/addSisterProjectLinks.ts
var addSisterProjectLinks = () => {
  mw.util.addPortletLink("p-lang", mw.util.getUrl("Qiuwen:“求闻”系列项目"), window.wgULS("“求闻”系列项目列表", "「求聞」系列項目列表"), "project-completelist", window.wgULS("“求闻”系列项目列表", "「求聞」系列項目列表"));
};
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
  addSisterProjectLinks();
  newLinkUnwrap($body);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01haW5wYWdlX0pTL21vZHVsZXMvYWRkU2lzdGVyUHJvamVjdExpbmtzLnRzIiwgInNyYy9NYWlucGFnZV9KUy9NYWlucGFnZV9KUy50cyIsICJzcmMvTWFpbnBhZ2VfSlMvbW9kdWxlcy9uZXdMaW5rVW53cmFwLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvLyDmt7vliqDpk77mjqXku6XmmL7npLrigJzmsYLpl7vigJ3ns7vliJfpobnnm67pobnnm65cbmNvbnN0IGFkZFNpc3RlclByb2plY3RMaW5rcyA9ICgpID0+IHtcblx0bXcudXRpbC5hZGRQb3J0bGV0TGluayhcblx0XHQncC1sYW5nJyxcblx0XHRtdy51dGlsLmdldFVybCgnUWl1d2VuOuKAnOaxgumXu+KAneezu+WIl+mhueebricpLFxuXHRcdHdpbmRvdy53Z1VMUygn4oCc5rGC6Ze74oCd57O75YiX6aG555uu5YiX6KGoJywgJ+OAjOaxguiBnuOAjeezu+WIl+mgheebruWIl+ihqCcpLFxuXHRcdCdwcm9qZWN0LWNvbXBsZXRlbGlzdCcsXG5cdFx0d2luZG93LndnVUxTKCfigJzmsYLpl7vigJ3ns7vliJfpobnnm67liJfooagnLCAn44CM5rGC6IGe44CN57O75YiX6aCF55uu5YiX6KGoJylcblx0KTtcbn07XG5cbmV4cG9ydCB7YWRkU2lzdGVyUHJvamVjdExpbmtzfTtcbiIsICJpbXBvcnQge2FkZFNpc3RlclByb2plY3RMaW5rc30gZnJvbSAnLi9tb2R1bGVzL2FkZFNpc3RlclByb2plY3RMaW5rcyc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge25ld0xpbmtVbndyYXB9IGZyb20gJy4vbW9kdWxlcy9uZXdMaW5rVW53cmFwJztcblxudm9pZCBnZXRCb2R5KCkudGhlbigoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGNvbnN0IHt3Z0lzTWFpblBhZ2UsIHdnQWN0aW9ufSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAod2dBY3Rpb24gIT09ICd2aWV3JyB8fCAhd2dJc01haW5QYWdlKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0YWRkU2lzdGVyUHJvamVjdExpbmtzKCk7XG5cdG5ld0xpbmtVbndyYXAoJGJvZHkpO1xufSk7XG4iLCAiLy8g6ZqQ6JeP57qi6Imy6ZO+5o6lXG5jb25zdCBuZXdMaW5rVW53cmFwID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PikgPT4ge1xuXHQkYm9keS5maW5kKCcjbXctY29udGVudC10ZXh0IGEubmV3JykuY29udGVudHMoKS51bndyYXAoKTtcbn07XG5cbmV4cG9ydCB7bmV3TGlua1Vud3JhcH07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFNQSx3QkFBd0JBLE1BQU07QUFDbkNDLEtBQUdDLEtBQUtDLGVBQ1AsVUFDQUYsR0FBR0MsS0FBS0UsT0FBTyxpQkFBaUIsR0FDaENDLE9BQU9DLE1BQU0sY0FBYyxZQUFZLEdBQ3ZDLHdCQUNBRCxPQUFPQyxNQUFNLGNBQWMsWUFBWSxDQUN4QztBQUNEOztBQ1JBLElBQUFDLG9CQUFzQkMsUUFBQSxpQkFBQTs7QUNBdEIsSUFBTUMsZ0JBQWlCQyxXQUFtQztBQUN6REEsUUFBTUMsS0FBSyx3QkFBd0IsRUFBRUMsU0FBUyxFQUFFQyxPQUFPO0FBQ3hEOztBRENBLE1BQUEsR0FBS04sa0JBQUFPLFNBQVEsRUFBRUMsS0FBTUwsV0FBeUM7QUFDN0QsUUFBTTtJQUFDTTtJQUFjQztFQUFRLElBQUloQixHQUFHaUIsT0FBT0MsSUFBSTtBQUUvQyxNQUFJRixhQUFhLFVBQVUsQ0FBQ0QsY0FBYztBQUN6QztFQUNEO0FBRUFoQix3QkFBc0I7QUFDdEJTLGdCQUFjQyxLQUFLO0FBQ3BCLENBQUM7IiwKICAibmFtZXMiOiBbImFkZFNpc3RlclByb2plY3RMaW5rcyIsICJtdyIsICJ1dGlsIiwgImFkZFBvcnRsZXRMaW5rIiwgImdldFVybCIsICJ3aW5kb3ciLCAid2dVTFMiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJuZXdMaW5rVW53cmFwIiwgIiRib2R5IiwgImZpbmQiLCAiY29udGVudHMiLCAidW53cmFwIiwgImdldEJvZHkiLCAidGhlbiIsICJ3Z0lzTWFpblBhZ2UiLCAid2dBY3Rpb24iLCAiY29uZmlnIiwgImdldCJdCn0K

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
//! src/Mainpage_JS/modules/util/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    "Qiuwen Projects": (0, import_ext_gadget.localize)({
      en: "Qiuwen Projects",
      "zh-hans": "“求闻”系列项目",
      "zh-hant": "「求聞」系列項目"
    }),
    "List of Qiuwen Projects": (0, import_ext_gadget.localize)({
      en: "List of Qiuwen Projects",
      "zh-hans": "“求闻”系列项目列表",
      "zh-hant": "「求聞」系列項目列表"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/Mainpage_JS/modules/addSisterProjectLinks.ts
var addSisterProjectLinks = () => {
  const url = mw.util.getUrl("Qiuwen:“求闻”系列项目");
  const text = getMessage("Qiuwen Projects");
  const title = getMessage("List of Qiuwen Projects");
  return mw.util.addPortletLink("p-lang", url, text, "t-project-list", title);
};
//! src/Mainpage_JS/Mainpage_JS.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/Mainpage_JS/modules/newLinkUnwrap.ts
var newLinkUnwrap = ($body) => {
  $body.find("#mw-content-text a.new").contents().unwrap();
};
//! src/Mainpage_JS/Mainpage_JS.ts
void (0, import_ext_gadget2.getBody)().then(($body) => {
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01haW5wYWdlX0pTL21vZHVsZXMvdXRpbC9pMThuLnRzIiwgInNyYy9NYWlucGFnZV9KUy9tb2R1bGVzL2FkZFNpc3RlclByb2plY3RMaW5rcy50cyIsICJzcmMvTWFpbnBhZ2VfSlMvTWFpbnBhZ2VfSlMudHMiLCAic3JjL01haW5wYWdlX0pTL21vZHVsZXMvbmV3TGlua1Vud3JhcC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCdRaXV3ZW4gUHJvamVjdHMnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1FpdXdlbiBQcm9qZWN0cycsXG5cdFx0XHQnemgtaGFucyc6ICfigJzmsYLpl7vigJ3ns7vliJfpobnnm64nLFxuXHRcdFx0J3poLWhhbnQnOiAn44CM5rGC6IGe44CN57O75YiX6aCF55uuJyxcblx0XHR9KSxcblx0XHQnTGlzdCBvZiBRaXV3ZW4gUHJvamVjdHMnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0xpc3Qgb2YgUWl1d2VuIFByb2plY3RzJyxcblx0XHRcdCd6aC1oYW5zJzogJ+KAnOaxgumXu+KAneezu+WIl+mhueebruWIl+ihqCcsXG5cdFx0XHQnemgtaGFudCc6ICfjgIzmsYLogZ7jgI3ns7vliJfpoIXnm67liJfooagnLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vdXRpbC9pMThuJztcblxuLy8g5re75Yqg6ZO+5o6l5Lul5pi+56S64oCc5rGC6Ze74oCd57O75YiX6aG555uu6aG555uuXG5jb25zdCBhZGRTaXN0ZXJQcm9qZWN0TGlua3MgPSAoKSA9PiB7XG5cdGNvbnN0IHVybCA9IG13LnV0aWwuZ2V0VXJsKCdRaXV3ZW464oCc5rGC6Ze74oCd57O75YiX6aG555uuJyk7XG5cdGNvbnN0IHRleHQgPSBnZXRNZXNzYWdlKCdRaXV3ZW4gUHJvamVjdHMnKTtcblx0Y29uc3QgdGl0bGUgPSBnZXRNZXNzYWdlKCdMaXN0IG9mIFFpdXdlbiBQcm9qZWN0cycpO1xuXG5cdHJldHVybiBtdy51dGlsLmFkZFBvcnRsZXRMaW5rKCdwLWxhbmcnLCB1cmwsIHRleHQsICd0LXByb2plY3QtbGlzdCcsIHRpdGxlKTtcbn07XG5cbmV4cG9ydCB7YWRkU2lzdGVyUHJvamVjdExpbmtzfTtcbiIsICJpbXBvcnQge2FkZFNpc3RlclByb2plY3RMaW5rc30gZnJvbSAnLi9tb2R1bGVzL2FkZFNpc3RlclByb2plY3RMaW5rcyc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge25ld0xpbmtVbndyYXB9IGZyb20gJy4vbW9kdWxlcy9uZXdMaW5rVW53cmFwJztcblxudm9pZCBnZXRCb2R5KCkudGhlbigoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGNvbnN0IHt3Z0lzTWFpblBhZ2UsIHdnQWN0aW9ufSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAod2dBY3Rpb24gIT09ICd2aWV3JyB8fCAhd2dJc01haW5QYWdlKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0YWRkU2lzdGVyUHJvamVjdExpbmtzKCk7XG5cdG5ld0xpbmtVbndyYXAoJGJvZHkpO1xufSk7XG4iLCAiLy8g6ZqQ6JeP57qi6Imy6ZO+5o6lXG5jb25zdCBuZXdMaW5rVW53cmFwID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PikgPT4ge1xuXHQkYm9keS5maW5kKCcjbXctY29udGVudC10ZXh0IGEubmV3JykuY29udGVudHMoKS51bndyYXAoKTtcbn07XG5cbmV4cG9ydCB7bmV3TGlua1Vud3JhcH07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxvQkFBdUJDLFFBQUEsaUJBQUE7QUFFdkIsSUFBTUMsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTixvQkFBQSxHQUFtQkYsa0JBQUFHLFVBQVM7TUFDM0JDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRCw0QkFBQSxHQUEyQkosa0JBQUFHLFVBQVM7TUFDbkNDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7RUFDRjtBQUNEO0FBRUEsSUFBTUMsZUFBZUgsZ0JBQWdCO0FBRXJDLElBQU1JLGFBQWdEQyxTQUFRO0FBQzdELFNBQU9GLGFBQWFFLEdBQUcsS0FBS0E7QUFDN0I7O0FDbEJBLElBQU1DLHdCQUF3QkEsTUFBTTtBQUNuQyxRQUFNQyxNQUFNQyxHQUFHQyxLQUFLQyxPQUFPLGlCQUFpQjtBQUM1QyxRQUFNQyxPQUFPUCxXQUFXLGlCQUFpQjtBQUN6QyxRQUFNUSxRQUFRUixXQUFXLHlCQUF5QjtBQUVsRCxTQUFPSSxHQUFHQyxLQUFLSSxlQUFlLFVBQVVOLEtBQUtJLE1BQU0sa0JBQWtCQyxLQUFLO0FBQzNFOztBQ1JBLElBQUFFLHFCQUFzQmYsUUFBQSxpQkFBQTs7QUNBdEIsSUFBTWdCLGdCQUFpQkMsV0FBbUM7QUFDekRBLFFBQU1DLEtBQUssd0JBQXdCLEVBQUVDLFNBQVMsRUFBRUMsT0FBTztBQUN4RDs7QURDQSxNQUFBLEdBQUtMLG1CQUFBTSxTQUFRLEVBQUVDLEtBQU1MLFdBQXlDO0FBQzdELFFBQU07SUFBQ007SUFBY0M7RUFBUSxJQUFJZixHQUFHZ0IsT0FBT0MsSUFBSTtBQUUvQyxNQUFJRixhQUFhLFVBQVUsQ0FBQ0QsY0FBYztBQUN6QztFQUNEO0FBRUFoQix3QkFBc0I7QUFDdEJTLGdCQUFjQyxLQUFLO0FBQ3BCLENBQUM7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImxvY2FsaXplIiwgImVuIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJhZGRTaXN0ZXJQcm9qZWN0TGlua3MiLCAidXJsIiwgIm13IiwgInV0aWwiLCAiZ2V0VXJsIiwgInRleHQiLCAidGl0bGUiLCAiYWRkUG9ydGxldExpbmsiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgIm5ld0xpbmtVbndyYXAiLCAiJGJvZHkiLCAiZmluZCIsICJjb250ZW50cyIsICJ1bndyYXAiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgIndnSXNNYWluUGFnZSIsICJ3Z0FjdGlvbiIsICJjb25maWciLCAiZ2V0Il0KfQo=

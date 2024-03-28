/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-fullwidth-search-fix.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/FullwidthSearchFix}
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

// dist/FullwidthSearchFix/FullwidthSearchFix.js
//! src/FullwidthSearchFix/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    "Redirecting to": (0, import_ext_gadget.localize)({
      en: "Redirecting to $1",
      ja: "「$1」にリダイレクト中",
      "zh-hans": "正在重定向至“$1”",
      "zh-hant": "正在重新導向至“$1”"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/FullwidthSearchFix/modules/redirect.ts
var import_ext_gadget2 = require("ext.gadget.Toastify");
var redirect = (nameSpace, pageName) => {
  (0, import_ext_gadget2.toastify)({
    text: getMessage("Redirecting to").replace("$1", "".concat(nameSpace, ":").concat(pageName)),
    duration: -1
  }, "info");
  const {
    wgScript
  } = mw.config.get();
  const href = new mw.Uri(wgScript).extend({
    search: "".concat(nameSpace, ":").concat(pageName)
  }).toString();
  location.href = href;
};
//! src/FullwidthSearchFix/FullwidthSearchFix.ts
(function fullwidthSearchFix() {
  const URL_FULLTEXT = mw.util.getParamValue("fulltext");
  const URL_SEARCH = mw.util.getParamValue("search");
  if (URL_FULLTEXT || !URL_SEARCH) {
    return;
  }
  const colonIndex = URL_SEARCH.indexOf("：");
  if (colonIndex === -1) {
    return;
  }
  const nameSpace = URL_SEARCH.slice(0, Math.max(0, colonIndex));
  const {
    wgNamespaceIds
  } = mw.config.get();
  if (!wgNamespaceIds[nameSpace.toLowerCase()]) {
    return;
  }
  const pageName = URL_SEARCH.slice(Math.max(0, colonIndex + 1));
  redirect(nameSpace, pageName);
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0Z1bGx3aWR0aFNlYXJjaEZpeC9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0Z1bGx3aWR0aFNlYXJjaEZpeC9tb2R1bGVzL3JlZGlyZWN0LnRzIiwgInNyYy9GdWxsd2lkdGhTZWFyY2hGaXgvRnVsbHdpZHRoU2VhcmNoRml4LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0J1JlZGlyZWN0aW5nIHRvJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdSZWRpcmVjdGluZyB0byAkMScsXG5cdFx0XHRqYTogJ+OAjCQx44CN44Gr44Oq44OA44Kk44Os44Kv44OI5LitJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ato+WcqOmHjeWumuWQkeiHs+KAnCQx4oCdJyxcblx0XHRcdCd6aC1oYW50JzogJ+ato+WcqOmHjeaWsOWwjuWQkeiHs+KAnCQx4oCdJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbmNvbnN0IHJlZGlyZWN0ID0gKG5hbWVTcGFjZTogc3RyaW5nLCBwYWdlTmFtZTogc3RyaW5nKTogdm9pZCA9PiB7XG5cdHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ1JlZGlyZWN0aW5nIHRvJykucmVwbGFjZSgnJDEnLCBgJHtuYW1lU3BhY2V9OiR7cGFnZU5hbWV9YCksXG5cdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0fSxcblx0XHQnaW5mbydcblx0KTtcblxuXHRjb25zdCB7d2dTY3JpcHR9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCBocmVmOiBzdHJpbmcgPSBuZXcgbXcuVXJpKHdnU2NyaXB0KVxuXHRcdC5leHRlbmQoe1xuXHRcdFx0c2VhcmNoOiBgJHtuYW1lU3BhY2V9OiR7cGFnZU5hbWV9YCxcblx0XHR9KVxuXHRcdC50b1N0cmluZygpO1xuXHRsb2NhdGlvbi5ocmVmID0gaHJlZjtcbn07XG5cbmV4cG9ydCB7cmVkaXJlY3R9O1xuIiwgImltcG9ydCB7cmVkaXJlY3R9IGZyb20gJy4vbW9kdWxlcy9yZWRpcmVjdCc7XG5cbihmdW5jdGlvbiBmdWxsd2lkdGhTZWFyY2hGaXgoKTogdm9pZCB7XG5cdGNvbnN0IFVSTF9GVUxMVEVYVDogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnZnVsbHRleHQnKTtcblx0Y29uc3QgVVJMX1NFQVJDSDogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnc2VhcmNoJyk7XG5cblx0Ly8gZG9uJ3QgYmUgdG9vIGFnZ3Jlc2l2ZS4ganVzdCBmaXggc29tZSBvYnZpb3VzIHR5cG9zXG5cdGlmIChVUkxfRlVMTFRFWFQgfHwgIVVSTF9TRUFSQ0gpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBuYW1lc3BhY2UgbmFtZXNcblx0Y29uc3QgY29sb25JbmRleDogbnVtYmVyID0gVVJMX1NFQVJDSC5pbmRleE9mKCfvvJonKTtcblx0aWYgKGNvbG9uSW5kZXggPT09IC0xKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gaWYgbmFtZXNwYWNlIGlzIHZhbGlkXG5cdGNvbnN0IG5hbWVTcGFjZTogc3RyaW5nID0gVVJMX1NFQVJDSC5zbGljZSgwLCBNYXRoLm1heCgwLCBjb2xvbkluZGV4KSk7XG5cdGNvbnN0IHt3Z05hbWVzcGFjZUlkc30gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGlmICghd2dOYW1lc3BhY2VJZHNbbmFtZVNwYWNlLnRvTG93ZXJDYXNlKCldKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcGFnZU5hbWU6IHN0cmluZyA9IFVSTF9TRUFSQ0guc2xpY2UoTWF0aC5tYXgoMCwgY29sb25JbmRleCArIDEpKTtcblxuXHRyZWRpcmVjdChuYW1lU3BhY2UsIHBhZ2VOYW1lKTtcbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxvQkFBdUJDLFFBQUEsaUJBQUE7QUFFdkIsSUFBTUMsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTixtQkFBQSxHQUFrQkYsa0JBQUFHLFVBQVM7TUFDMUJDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztFQUNGO0FBQ0Q7QUFFQSxJQUFNQyxlQUFlSixnQkFBZ0I7QUFFckMsSUFBTUssYUFBZ0RDLFNBQVE7QUFDN0QsU0FBT0YsYUFBYUUsR0FBRyxLQUFLQTtBQUM3Qjs7QUNoQkEsSUFBQUMscUJBQXVCUixRQUFBLHFCQUFBO0FBRXZCLElBQU1TLFdBQVdBLENBQUNDLFdBQW1CQyxhQUEyQjtBQUMvRCxHQUFBLEdBQUFILG1CQUFBSSxVQUNDO0lBQ0NDLE1BQU1QLFdBQVcsZ0JBQWdCLEVBQUVRLFFBQVEsTUFBQSxHQUFBQyxPQUFTTCxXQUFTLEdBQUEsRUFBQUssT0FBSUosUUFBUSxDQUFFO0lBQzNFSyxVQUFVO0VBQ1gsR0FDQSxNQUNEO0FBRUEsUUFBTTtJQUFDQztFQUFRLElBQUlDLEdBQUdDLE9BQU9DLElBQUk7QUFDakMsUUFBTUMsT0FBZSxJQUFJSCxHQUFHSSxJQUFJTCxRQUFRLEVBQ3RDTSxPQUFPO0lBQ1BDLFFBQUEsR0FBQVQsT0FBV0wsV0FBUyxHQUFBLEVBQUFLLE9BQUlKLFFBQVE7RUFDakMsQ0FBQyxFQUNBYyxTQUFTO0FBQ1hDLFdBQVNMLE9BQU9BO0FBQ2pCOztDQ2pCQyxTQUFTTSxxQkFBMkI7QUFDcEMsUUFBTUMsZUFBOEJWLEdBQUdXLEtBQUtDLGNBQWMsVUFBVTtBQUNwRSxRQUFNQyxhQUE0QmIsR0FBR1csS0FBS0MsY0FBYyxRQUFRO0FBR2hFLE1BQUlGLGdCQUFnQixDQUFDRyxZQUFZO0FBQ2hDO0VBQ0Q7QUFHQSxRQUFNQyxhQUFxQkQsV0FBV0UsUUFBUSxHQUFHO0FBQ2pELE1BQUlELGVBQWUsSUFBSTtBQUN0QjtFQUNEO0FBR0EsUUFBTXRCLFlBQW9CcUIsV0FBV0csTUFBTSxHQUFHQyxLQUFLQyxJQUFJLEdBQUdKLFVBQVUsQ0FBQztBQUNyRSxRQUFNO0lBQUNLO0VBQWMsSUFBSW5CLEdBQUdDLE9BQU9DLElBQUk7QUFDdkMsTUFBSSxDQUFDaUIsZUFBZTNCLFVBQVU0QixZQUFZLENBQUMsR0FBRztBQUM3QztFQUNEO0FBRUEsUUFBTTNCLFdBQW1Cb0IsV0FBV0csTUFBTUMsS0FBS0MsSUFBSSxHQUFHSixhQUFhLENBQUMsQ0FBQztBQUVyRXZCLFdBQVNDLFdBQVdDLFFBQVE7QUFDN0IsR0FBRzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJnZXRJMThuTWVzc2FnZXMiLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZWRpcmVjdCIsICJuYW1lU3BhY2UiLCAicGFnZU5hbWUiLCAidG9hc3RpZnkiLCAidGV4dCIsICJyZXBsYWNlIiwgImNvbmNhdCIsICJkdXJhdGlvbiIsICJ3Z1NjcmlwdCIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImhyZWYiLCAiVXJpIiwgImV4dGVuZCIsICJzZWFyY2giLCAidG9TdHJpbmciLCAibG9jYXRpb24iLCAiZnVsbHdpZHRoU2VhcmNoRml4IiwgIlVSTF9GVUxMVEVYVCIsICJ1dGlsIiwgImdldFBhcmFtVmFsdWUiLCAiVVJMX1NFQVJDSCIsICJjb2xvbkluZGV4IiwgImluZGV4T2YiLCAic2xpY2UiLCAiTWF0aCIsICJtYXgiLCAid2dOYW1lc3BhY2VJZHMiLCAidG9Mb3dlckNhc2UiXQp9Cg==

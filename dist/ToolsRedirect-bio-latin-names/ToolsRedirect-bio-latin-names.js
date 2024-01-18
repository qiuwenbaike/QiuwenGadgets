/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/ToolsRedirect-bio-latin-names}
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

// dist/ToolsRedirect-bio-latin-names/ToolsRedirect-bio-latin-names.js
//! src/ToolsRedirect-bio-latin-names/ToolsRedirect-bio-latin-names.ts
var import_ext_gadget = require("ext.gadget.Util");
(() => {
  if (mw.user.options.get("gadget-ToolsRedirect")) {
    return;
  }
  const api = (0, import_ext_gadget.initMwApi)("ToolsRedirect-bio-latin-names/2.0");
  void api.postWithEditToken({
    action: "options",
    format: "json",
    change: "gadget-ToolsRedirect=1"
  });
  void mw.loader.using(["ext.gadget.ToolsRedirect"]);
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Rvb2xzUmVkaXJlY3QtYmlvLWxhdGluLW5hbWVzL1Rvb2xzUmVkaXJlY3QtYmlvLWxhdGluLW5hbWVzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuKCgpOiB2b2lkID0+IHtcblx0aWYgKG13LnVzZXIub3B0aW9ucy5nZXQoJ2dhZGdldC1Ub29sc1JlZGlyZWN0JykpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBhcGkgPSBpbml0TXdBcGkoJ1Rvb2xzUmVkaXJlY3QtYmlvLWxhdGluLW5hbWVzLzIuMCcpO1xuXG5cdHZvaWQgYXBpLnBvc3RXaXRoRWRpdFRva2VuKHtcblx0XHRhY3Rpb246ICdvcHRpb25zJyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRjaGFuZ2U6ICdnYWRnZXQtVG9vbHNSZWRpcmVjdD0xJyxcblx0fSk7XG5cblx0dm9pZCBtdy5sb2FkZXIudXNpbmcoWydleHQuZ2FkZ2V0LlRvb2xzUmVkaXJlY3QnXSk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7OztBQUFBLElBQUFBLG9CQUF3QkMsUUFBQSxpQkFBQTtDQUV2QixNQUFZO0FBQ1osTUFBSUMsR0FBR0MsS0FBS0MsUUFBUUMsSUFBSSxzQkFBc0IsR0FBRztBQUNoRDtFQUNEO0FBRUEsUUFBTUMsT0FBQSxHQUFNTixrQkFBQU8sV0FBVSxtQ0FBbUM7QUFFekQsT0FBS0QsSUFBSUUsa0JBQWtCO0lBQzFCQyxRQUFRO0lBQ1JDLFFBQVE7SUFDUkMsUUFBUTtFQUNULENBQUM7QUFFRCxPQUFLVCxHQUFHVSxPQUFPQyxNQUFNLENBQUMsMEJBQTBCLENBQUM7QUFDbEQsR0FBRzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJtdyIsICJ1c2VyIiwgIm9wdGlvbnMiLCAiZ2V0IiwgImFwaSIsICJpbml0TXdBcGkiLCAicG9zdFdpdGhFZGl0VG9rZW4iLCAiYWN0aW9uIiwgImZvcm1hdCIsICJjaGFuZ2UiLCAibG9hZGVyIiwgInVzaW5nIl0KfQo=

})();

/* </nowiki> */

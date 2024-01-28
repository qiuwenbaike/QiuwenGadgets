/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/ToolsRedirect/courtesy-and-art-names}
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

// dist/ToolsRedirect-courtesy-and-art-names/ToolsRedirect-courtesy-and-art-names.js
//! src/ToolsRedirect-courtesy-and-art-names/ToolsRedirect-courtesy-and-art-names.ts
var import_ext_gadget = require("ext.gadget.Util");
(() => {
  if (mw.user.options.get("gadget-ToolsRedirect")) {
    return;
  }
  const api = (0, import_ext_gadget.initMwApi)("ToolsRedirect-courtesy-and-art-names/2.0");
  void api.postWithEditToken({
    action: "options",
    format: "json",
    change: "gadget-ToolsRedirect=1"
  });
  void mw.loader.using(["ext.gadget.ToolsRedirect"]);
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Rvb2xzUmVkaXJlY3QtY291cnRlc3ktYW5kLWFydC1uYW1lcy9Ub29sc1JlZGlyZWN0LWNvdXJ0ZXN5LWFuZC1hcnQtbmFtZXMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG4oKCk6IHZvaWQgPT4ge1xuXHRpZiAobXcudXNlci5vcHRpb25zLmdldCgnZ2FkZ2V0LVRvb2xzUmVkaXJlY3QnKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGFwaSA9IGluaXRNd0FwaSgnVG9vbHNSZWRpcmVjdC1jb3VydGVzeS1hbmQtYXJ0LW5hbWVzLzIuMCcpO1xuXG5cdHZvaWQgYXBpLnBvc3RXaXRoRWRpdFRva2VuKHtcblx0XHRhY3Rpb246ICdvcHRpb25zJyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRjaGFuZ2U6ICdnYWRnZXQtVG9vbHNSZWRpcmVjdD0xJyxcblx0fSk7XG5cblx0dm9pZCBtdy5sb2FkZXIudXNpbmcoWydleHQuZ2FkZ2V0LlRvb2xzUmVkaXJlY3QnXSk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7OztBQUFBLElBQUFBLG9CQUF3QkMsUUFBQSxpQkFBQTtDQUV2QixNQUFZO0FBQ1osTUFBSUMsR0FBR0MsS0FBS0MsUUFBUUMsSUFBSSxzQkFBc0IsR0FBRztBQUNoRDtFQUNEO0FBRUEsUUFBTUMsT0FBQSxHQUFNTixrQkFBQU8sV0FBVSwwQ0FBMEM7QUFFaEUsT0FBS0QsSUFBSUUsa0JBQWtCO0lBQzFCQyxRQUFRO0lBQ1JDLFFBQVE7SUFDUkMsUUFBUTtFQUNULENBQUM7QUFFRCxPQUFLVCxHQUFHVSxPQUFPQyxNQUFNLENBQUMsMEJBQTBCLENBQUM7QUFDbEQsR0FBRzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJtdyIsICJ1c2VyIiwgIm9wdGlvbnMiLCAiZ2V0IiwgImFwaSIsICJpbml0TXdBcGkiLCAicG9zdFdpdGhFZGl0VG9rZW4iLCAiYWN0aW9uIiwgImZvcm1hdCIsICJjaGFuZ2UiLCAibG9hZGVyIiwgInVzaW5nIl0KfQo=

})();

/* </nowiki> */

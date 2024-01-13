/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/ToolsRedirect/courtesy-and-art-names}
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
//! src/ToolsRedirect-courtesy-and-art-names/modules/constant.ts
var WG_WIKI_ID = mw.config.get("wgWikiID");
//! src/ToolsRedirect-courtesy-and-art-names/ToolsRedirect-courtesy-and-art-names.ts
var import_ext_gadget = require("ext.gadget.Util");
(() => {
  if (mw.user.options.get("gadget-ToolsRedirect")) {
    return;
  }
  const api = (0, import_ext_gadget.initMwApi)("Qiuwen/1.1 (ToolsRedirect-courtesy-and-art-names/2.0; ".concat(WG_WIKI_ID, ")"));
  void api.postWithEditToken({
    action: "options",
    format: "json",
    change: "gadget-ToolsRedirect=1"
  });
  void mw.loader.using(["ext.gadget.ToolsRedirect"]);
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Rvb2xzUmVkaXJlY3QtY291cnRlc3ktYW5kLWFydC1uYW1lcy9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9Ub29sc1JlZGlyZWN0LWNvdXJ0ZXN5LWFuZC1hcnQtbmFtZXMvVG9vbHNSZWRpcmVjdC1jb3VydGVzeS1hbmQtYXJ0LW5hbWVzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBXR19XSUtJX0lEOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCd3Z1dpa2lJRCcpO1xuXG5leHBvcnQge1dHX1dJS0lfSUR9O1xuIiwgImltcG9ydCB7V0dfV0lLSV9JRH0gZnJvbSAnLi9tb2R1bGVzL2NvbnN0YW50JztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG4oKCk6IHZvaWQgPT4ge1xuXHRpZiAobXcudXNlci5vcHRpb25zLmdldCgnZ2FkZ2V0LVRvb2xzUmVkaXJlY3QnKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGFwaSA9IGluaXRNd0FwaShgUWl1d2VuLzEuMSAoVG9vbHNSZWRpcmVjdC1jb3VydGVzeS1hbmQtYXJ0LW5hbWVzLzIuMDsgJHtXR19XSUtJX0lEfSlgKTtcblxuXHR2b2lkIGFwaS5wb3N0V2l0aEVkaXRUb2tlbih7XG5cdFx0YWN0aW9uOiAnb3B0aW9ucycsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Y2hhbmdlOiAnZ2FkZ2V0LVRvb2xzUmVkaXJlY3Q9MScsXG5cdH0pO1xuXG5cdHZvaWQgbXcubG9hZGVyLnVzaW5nKFsnZXh0LmdhZGdldC5Ub29sc1JlZGlyZWN0J10pO1xufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7QUFBQSxJQUFNQSxhQUFxQkMsR0FBR0MsT0FBT0MsSUFBSSxVQUFVOztBQ0NuRCxJQUFBQyxvQkFBd0JDLFFBQUEsaUJBQUE7Q0FFdkIsTUFBWTtBQUNaLE1BQUlKLEdBQUdLLEtBQUtDLFFBQVFKLElBQUksc0JBQXNCLEdBQUc7QUFDaEQ7RUFDRDtBQUVBLFFBQU1LLE9BQUEsR0FBTUosa0JBQUFLLFdBQUEseURBQUFDLE9BQW1FVixZQUFVLEdBQUEsQ0FBRztBQUU1RixPQUFLUSxJQUFJRyxrQkFBa0I7SUFDMUJDLFFBQVE7SUFDUkMsUUFBUTtJQUNSQyxRQUFRO0VBQ1QsQ0FBQztBQUVELE9BQUtiLEdBQUdjLE9BQU9DLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQztBQUNsRCxHQUFHOyIsCiAgIm5hbWVzIjogWyJXR19XSUtJX0lEIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJ1c2VyIiwgIm9wdGlvbnMiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAicG9zdFdpdGhFZGl0VG9rZW4iLCAiYWN0aW9uIiwgImZvcm1hdCIsICJjaGFuZ2UiLCAibG9hZGVyIiwgInVzaW5nIl0KfQo=

})();

/* </nowiki> */

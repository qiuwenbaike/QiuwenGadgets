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
//! src/ToolsRedirect-bio-latin-names/modules/constant.ts
var WG_WIKI_ID = mw.config.get("wgWikiID");
//! src/ToolsRedirect-bio-latin-names/ToolsRedirect-bio-latin-names.ts
var import_ext_gadget = require("ext.gadget.Util");
(() => {
  if (mw.user.options.get("gadget-ToolsRedirect")) {
    return;
  }
  const api = (0, import_ext_gadget.initMwApi)("Qiuwen/1.1 (ToolsRedirect-bio-latin-names/2.0; ".concat(WG_WIKI_ID, ")"));
  void api.postWithEditToken({
    action: "options",
    format: "json",
    change: "gadget-ToolsRedirect=1"
  });
  void mw.loader.using(["ext.gadget.ToolsRedirect"]);
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Rvb2xzUmVkaXJlY3QtYmlvLWxhdGluLW5hbWVzL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL1Rvb2xzUmVkaXJlY3QtYmlvLWxhdGluLW5hbWVzL1Rvb2xzUmVkaXJlY3QtYmlvLWxhdGluLW5hbWVzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBXR19XSUtJX0lEOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCd3Z1dpa2lJRCcpO1xuXG5leHBvcnQge1dHX1dJS0lfSUR9O1xuIiwgImltcG9ydCB7V0dfV0lLSV9JRH0gZnJvbSAnLi9tb2R1bGVzL2NvbnN0YW50JztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG4oKCk6IHZvaWQgPT4ge1xuXHRpZiAobXcudXNlci5vcHRpb25zLmdldCgnZ2FkZ2V0LVRvb2xzUmVkaXJlY3QnKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGFwaSA9IGluaXRNd0FwaShgUWl1d2VuLzEuMSAoVG9vbHNSZWRpcmVjdC1iaW8tbGF0aW4tbmFtZXMvMi4wOyAke1dHX1dJS0lfSUR9KWApO1xuXG5cdHZvaWQgYXBpLnBvc3RXaXRoRWRpdFRva2VuKHtcblx0XHRhY3Rpb246ICdvcHRpb25zJyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRjaGFuZ2U6ICdnYWRnZXQtVG9vbHNSZWRpcmVjdD0xJyxcblx0fSk7XG5cblx0dm9pZCBtdy5sb2FkZXIudXNpbmcoWydleHQuZ2FkZ2V0LlRvb2xzUmVkaXJlY3QnXSk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7OztBQUFBLElBQU1BLGFBQXFCQyxHQUFHQyxPQUFPQyxJQUFJLFVBQVU7O0FDQ25ELElBQUFDLG9CQUF3QkMsUUFBQSxpQkFBQTtDQUV2QixNQUFZO0FBQ1osTUFBSUosR0FBR0ssS0FBS0MsUUFBUUosSUFBSSxzQkFBc0IsR0FBRztBQUNoRDtFQUNEO0FBRUEsUUFBTUssT0FBQSxHQUFNSixrQkFBQUssV0FBQSxrREFBQUMsT0FBNERWLFlBQVUsR0FBQSxDQUFHO0FBRXJGLE9BQUtRLElBQUlHLGtCQUFrQjtJQUMxQkMsUUFBUTtJQUNSQyxRQUFRO0lBQ1JDLFFBQVE7RUFDVCxDQUFDO0FBRUQsT0FBS2IsR0FBR2MsT0FBT0MsTUFBTSxDQUFDLDBCQUEwQixDQUFDO0FBQ2xELEdBQUc7IiwKICAibmFtZXMiOiBbIldHX1dJS0lfSUQiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgInVzZXIiLCAib3B0aW9ucyIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNvbmNhdCIsICJwb3N0V2l0aEVkaXRUb2tlbiIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImNoYW5nZSIsICJsb2FkZXIiLCAidXNpbmciXQp9Cg==

})();

/* </nowiki> */

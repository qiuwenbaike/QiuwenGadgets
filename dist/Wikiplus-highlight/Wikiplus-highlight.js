/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Wikiplus-highlight}
 */

/**
 * SPDX-License-Identifier: GPL-3.0
 * _addText: '{{Gadget Header|title=Wikiplus-highlight|license=GPL-3.0}}'
 *
 * Wikiplus-highlight
 *
 * @base {@link https://github.com/bhsd-harry/Wikiplus-highlight/blob/main/styles.css}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Wikiplus/module/styles.css}
 * @author Bhsd <https://github.com/bhsd-harry>, 机智的小鱼君 <https://github.com/Dragon-Fish>
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

// dist/Wikiplus-highlight/Wikiplus-highlight.js
//! src/Wikiplus-highlight/modules/constant.ts
var WG_WIKI_ID = mw.config.get("wgWikiID");
//! src/Wikiplus-highlight/Wikiplus-highlight.ts
var import_ext_gadget = require("ext.gadget.Util");
(() => {
  if (mw.user.options.get("gadget-Wikiplus")) {
    return;
  }
  const api = (0, import_ext_gadget.initMwApi)("Qiuwen/1.1 (Wikiplus-highlight/2.0; ".concat(WG_WIKI_ID, ")"));
  void api.postWithEditToken({
    action: "options",
    format: "json",
    change: "gadget-Wikiplus=1"
  });
  void mw.loader.using(["ext.gadget.Wikiplus"]);
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1dpa2lwbHVzLWhpZ2hsaWdodC9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9XaWtpcGx1cy1oaWdobGlnaHQvV2lraXBsdXMtaGlnaGxpZ2h0LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBXR19XSUtJX0lEOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCd3Z1dpa2lJRCcpO1xuXG5leHBvcnQge1dHX1dJS0lfSUR9O1xuIiwgImltcG9ydCB7V0dfV0lLSV9JRH0gZnJvbSAnLi9tb2R1bGVzL2NvbnN0YW50JztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG4oKCk6IHZvaWQgPT4ge1xuXHRpZiAobXcudXNlci5vcHRpb25zLmdldCgnZ2FkZ2V0LVdpa2lwbHVzJykpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBhcGkgPSBpbml0TXdBcGkoYFFpdXdlbi8xLjEgKFdpa2lwbHVzLWhpZ2hsaWdodC8yLjA7ICR7V0dfV0lLSV9JRH0pYCk7XG5cblx0dm9pZCBhcGkucG9zdFdpdGhFZGl0VG9rZW4oe1xuXHRcdGFjdGlvbjogJ29wdGlvbnMnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGNoYW5nZTogJ2dhZGdldC1XaWtpcGx1cz0xJyxcblx0fSk7XG5cblx0dm9pZCBtdy5sb2FkZXIudXNpbmcoWydleHQuZ2FkZ2V0Lldpa2lwbHVzJ10pO1xufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7QUFBQSxJQUFNQSxhQUFxQkMsR0FBR0MsT0FBT0MsSUFBSSxVQUFVOztBQ0NuRCxJQUFBQyxvQkFBd0JDLFFBQUEsaUJBQUE7Q0FFdkIsTUFBWTtBQUNaLE1BQUlKLEdBQUdLLEtBQUtDLFFBQVFKLElBQUksaUJBQWlCLEdBQUc7QUFDM0M7RUFDRDtBQUVBLFFBQU1LLE9BQUEsR0FBTUosa0JBQUFLLFdBQUEsdUNBQUFDLE9BQWlEVixZQUFVLEdBQUEsQ0FBRztBQUUxRSxPQUFLUSxJQUFJRyxrQkFBa0I7SUFDMUJDLFFBQVE7SUFDUkMsUUFBUTtJQUNSQyxRQUFRO0VBQ1QsQ0FBQztBQUVELE9BQUtiLEdBQUdjLE9BQU9DLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQztBQUM3QyxHQUFHOyIsCiAgIm5hbWVzIjogWyJXR19XSUtJX0lEIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJ1c2VyIiwgIm9wdGlvbnMiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAicG9zdFdpdGhFZGl0VG9rZW4iLCAiYWN0aW9uIiwgImZvcm1hdCIsICJjaGFuZ2UiLCAibG9hZGVyIiwgInVzaW5nIl0KfQo=

})();

/* </nowiki> */

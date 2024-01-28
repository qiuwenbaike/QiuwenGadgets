/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Wikiplus-highlight}
 * @license CC-BY-SA-4.0 {@link https://www.qiuwenbaike.cn/wiki/H:CC-BY-SA-4.0}
 */

/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|title=Wikiplus-highlight|license=GPL-3.0}}'
 *
 * Wikiplus-highlight
 *
 * @base {@link https://github.com/bhsd-harry/Wikiplus-highlight/blob/main/styles.css}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Wikiplus/module/styles.css}
 * @author Bhsd <https://github.com/bhsd-harry>, 机智的小鱼君 <https://github.com/Dragon-Fish>
 * @license GPL-3.0-or-later {@link https://www.qiuwenbaike.cn/wiki/H:GPL-3.0}
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
//! src/Wikiplus-highlight/Wikiplus-highlight.ts
var import_ext_gadget = require("ext.gadget.Util");
(() => {
  if (mw.user.options.get("gadget-Wikiplus")) {
    return;
  }
  const api = (0, import_ext_gadget.initMwApi)("Wikiplus-highlight/2.0");
  void api.postWithEditToken({
    action: "options",
    format: "json",
    change: "gadget-Wikiplus=1"
  });
  void mw.loader.using(["ext.gadget.Wikiplus"]);
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1dpa2lwbHVzLWhpZ2hsaWdodC9XaWtpcGx1cy1oaWdobGlnaHQudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG4oKCk6IHZvaWQgPT4ge1xuXHRpZiAobXcudXNlci5vcHRpb25zLmdldCgnZ2FkZ2V0LVdpa2lwbHVzJykpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBhcGkgPSBpbml0TXdBcGkoJ1dpa2lwbHVzLWhpZ2hsaWdodC8yLjAnKTtcblxuXHR2b2lkIGFwaS5wb3N0V2l0aEVkaXRUb2tlbih7XG5cdFx0YWN0aW9uOiAnb3B0aW9ucycsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Y2hhbmdlOiAnZ2FkZ2V0LVdpa2lwbHVzPTEnLFxuXHR9KTtcblxuXHR2b2lkIG13LmxvYWRlci51c2luZyhbJ2V4dC5nYWRnZXQuV2lraXBsdXMnXSk7XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7OztBQUFBLElBQUFBLG9CQUF3QkMsUUFBQSxpQkFBQTtDQUV2QixNQUFZO0FBQ1osTUFBSUMsR0FBR0MsS0FBS0MsUUFBUUMsSUFBSSxpQkFBaUIsR0FBRztBQUMzQztFQUNEO0FBRUEsUUFBTUMsT0FBQSxHQUFNTixrQkFBQU8sV0FBVSx3QkFBd0I7QUFFOUMsT0FBS0QsSUFBSUUsa0JBQWtCO0lBQzFCQyxRQUFRO0lBQ1JDLFFBQVE7SUFDUkMsUUFBUTtFQUNULENBQUM7QUFFRCxPQUFLVCxHQUFHVSxPQUFPQyxNQUFNLENBQUMscUJBQXFCLENBQUM7QUFDN0MsR0FBRzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJtdyIsICJ1c2VyIiwgIm9wdGlvbnMiLCAiZ2V0IiwgImFwaSIsICJpbml0TXdBcGkiLCAicG9zdFdpdGhFZGl0VG9rZW4iLCAiYWN0aW9uIiwgImZvcm1hdCIsICJjaGFuZ2UiLCAibG9hZGVyIiwgInVzaW5nIl0KfQo=

})();

/* </nowiki> */

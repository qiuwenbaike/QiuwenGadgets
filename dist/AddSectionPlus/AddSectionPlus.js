/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/AddSectionPlus}
 * @author 安忆 <i@anyi.in>
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

// dist/AddSectionPlus/AddSectionPlus.js
//! src/AddSectionPlus/modules/constant.ts
var WG_SKIN = mw.config.get("skin");
//! src/AddSectionPlus/AddSectionPlus.ts
var import_ext_gadget = require("ext.gadget.Util");
//! src/AddSectionPlus/modules/processElement.ts
var processElement = ($element) => {
  const title = $element.attr("aria-label") || $element.attr("title") || $element.text().trim();
  switch (WG_SKIN) {
    case "gongbi":
      $element.attr({
        title
      }).html("&#8203");
      break;
    default:
      $element.attr({
        title
      }).text("[+]");
  }
};
//! src/AddSectionPlus/AddSectionPlus.ts
void (0, import_ext_gadget.getBody)().then(function addSectionPlus($body) {
  if (WG_SKIN === "citizen") {
    return;
    //! style is already added by [[MediaWiki:Gadget-AddSectionPlus-pagestyles.css]]
  }
  const $wrapper = $body.find("#ca-addsection");
  if (!$wrapper.length) {
    return;
  }
  const $target = $wrapper.find("span");
  if (!$target.length) {
    return;
  }
  processElement($target);
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0FkZFNlY3Rpb25QbHVzL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0FkZFNlY3Rpb25QbHVzL0FkZFNlY3Rpb25QbHVzLnRzIiwgInNyYy9BZGRTZWN0aW9uUGx1cy9tb2R1bGVzL3Byb2Nlc3NFbGVtZW50LnRzIl0sCiAgInNvdXJjZVJvb3QiOiAiLi4vR2FkZ2V0cyIsCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBXR19TS0lOOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCdza2luJyk7XG5cbmV4cG9ydCB7V0dfU0tJTn07XG4iLCAiaW1wb3J0IHtXR19TS0lOfSBmcm9tICcuL21vZHVsZXMvY29uc3RhbnQnO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtwcm9jZXNzRWxlbWVudH0gZnJvbSAnLi9tb2R1bGVzL3Byb2Nlc3NFbGVtZW50Jztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBhZGRTZWN0aW9uUGx1cygkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0aWYgKFdHX1NLSU4gPT09ICdjaXRpemVuJykge1xuXHRcdHJldHVybjsgLy8hIHN0eWxlIGlzIGFscmVhZHkgYWRkZWQgYnkgW1tNZWRpYVdpa2k6R2FkZ2V0LUFkZFNlY3Rpb25QbHVzLXBhZ2VzdHlsZXMuY3NzXV1cblx0fVxuXG5cdGNvbnN0ICR3cmFwcGVyOiBKUXVlcnkgPSAkYm9keS5maW5kKCcjY2EtYWRkc2VjdGlvbicpO1xuXHRpZiAoISR3cmFwcGVyLmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0ICR0YXJnZXQ6IEpRdWVyeSA9ICR3cmFwcGVyLmZpbmQoJ3NwYW4nKTtcblx0aWYgKCEkdGFyZ2V0Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHByb2Nlc3NFbGVtZW50KCR0YXJnZXQpO1xufSk7XG4iLCAiaW1wb3J0IHtXR19TS0lOfSBmcm9tICcuL2NvbnN0YW50JztcblxuY29uc3QgcHJvY2Vzc0VsZW1lbnQgPSAoJGVsZW1lbnQ6IEpRdWVyeSk6IHZvaWQgPT4ge1xuXHRjb25zdCB0aXRsZTogc3RyaW5nID0gJGVsZW1lbnQuYXR0cignYXJpYS1sYWJlbCcpIHx8ICRlbGVtZW50LmF0dHIoJ3RpdGxlJykgfHwgJGVsZW1lbnQudGV4dCgpLnRyaW0oKTtcblx0c3dpdGNoIChXR19TS0lOKSB7XG5cdFx0Y2FzZSAnZ29uZ2JpJzpcblx0XHRcdCRlbGVtZW50XG5cdFx0XHRcdC5hdHRyKHtcblx0XHRcdFx0XHR0aXRsZSxcblx0XHRcdFx0fSlcblx0XHRcdFx0Lmh0bWwoJyYjODIwMycpO1xuXHRcdFx0YnJlYWs7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdCRlbGVtZW50XG5cdFx0XHRcdC5hdHRyKHtcblx0XHRcdFx0XHR0aXRsZSxcblx0XHRcdFx0fSlcblx0XHRcdFx0LnRleHQoJ1srXScpO1xuXHR9XG59O1xuXG5leHBvcnQge3Byb2Nlc3NFbGVtZW50fTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7QUFBQSxJQUFNQSxVQUFrQkMsR0FBR0MsT0FBT0MsSUFBSSxNQUFNOztBQ0M1QyxJQUFBQyxvQkFBc0JDLFFBQUEsaUJBQUE7O0FDQ3RCLElBQU1DLGlCQUFrQkMsY0FBMkI7QUFDbEQsUUFBTUMsUUFBZ0JELFNBQVNFLEtBQUssWUFBWSxLQUFLRixTQUFTRSxLQUFLLE9BQU8sS0FBS0YsU0FBU0csS0FBSyxFQUFFQyxLQUFLO0FBQ3BHLFVBQVFYLFNBQUE7SUFDUCxLQUFLO0FBQ0pPLGVBQ0VFLEtBQUs7UUFDTEQ7TUFDRCxDQUFDLEVBQ0FJLEtBQUssUUFBUTtBQUNmO0lBQ0Q7QUFDQ0wsZUFDRUUsS0FBSztRQUNMRDtNQUNELENBQUMsRUFDQUUsS0FBSyxLQUFLO0VBQ2Q7QUFDRDs7QURmQSxNQUFBLEdBQUtOLGtCQUFBUyxTQUFRLEVBQUVDLEtBQUssU0FBU0MsZUFBZUMsT0FBc0M7QUFDakYsTUFBSWhCLFlBQVksV0FBVztBQUMxQjtJQUFRO0VBQ1Q7QUFFQSxRQUFNaUIsV0FBbUJELE1BQU1FLEtBQUssZ0JBQWdCO0FBQ3BELE1BQUksQ0FBQ0QsU0FBU0UsUUFBUTtBQUNyQjtFQUNEO0FBRUEsUUFBTUMsVUFBa0JILFNBQVNDLEtBQUssTUFBTTtBQUM1QyxNQUFJLENBQUNFLFFBQVFELFFBQVE7QUFDcEI7RUFDRDtBQUVBYixpQkFBZWMsT0FBTztBQUN2QixDQUFDOyIsCiAgIm5hbWVzIjogWyJXR19TS0lOIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJwcm9jZXNzRWxlbWVudCIsICIkZWxlbWVudCIsICJ0aXRsZSIsICJhdHRyIiwgInRleHQiLCAidHJpbSIsICJodG1sIiwgImdldEJvZHkiLCAidGhlbiIsICJhZGRTZWN0aW9uUGx1cyIsICIkYm9keSIsICIkd3JhcHBlciIsICJmaW5kIiwgImxlbmd0aCIsICIkdGFyZ2V0Il0KfQo=

})();

/* </nowiki> */

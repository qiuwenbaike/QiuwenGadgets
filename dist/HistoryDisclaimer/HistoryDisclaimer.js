/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/HistoryDisclaimer}
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

// dist/HistoryDisclaimer/HistoryDisclaimer.js
//! src/HistoryDisclaimer/modules/constant.ts
var CLASS_NAME = "gadget-history_disclaimer";
var WG_CUR_REVISION_ID = mw.config.get("wgCurRevisionId");
var WG_REVISION_ID = mw.config.get("wgRevisionId");
//! src/HistoryDisclaimer/HistoryDisclaimer.ts
var import_ext_gadget = require("ext.gadget.Util");
void (0, import_ext_gadget.getBody)().then(function historyDisclaimer($body) {
  if (!WG_CUR_REVISION_ID || !WG_REVISION_ID || WG_CUR_REVISION_ID <= WG_REVISION_ID) {
    return;
  }
  if ($body.find(".".concat(CLASS_NAME)).length) {
    return;
  }
  $("<div>").addClass(CLASS_NAME).appendTo($body);
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0hpc3RvcnlEaXNjbGFpbWVyL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0hpc3RvcnlEaXNjbGFpbWVyL0hpc3RvcnlEaXNjbGFpbWVyLnRzIl0sCiAgInNvdXJjZVJvb3QiOiAiLi4vR2FkZ2V0cyIsCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBDTEFTU19OQU1FOiBzdHJpbmcgPSAnZ2FkZ2V0LWhpc3RvcnlfZGlzY2xhaW1lcic7XG5cbmNvbnN0IFdHX0NVUl9SRVZJU0lPTl9JRDogbnVtYmVyID0gbXcuY29uZmlnLmdldCgnd2dDdXJSZXZpc2lvbklkJyk7XG5jb25zdCBXR19SRVZJU0lPTl9JRDogbnVtYmVyID0gbXcuY29uZmlnLmdldCgnd2dSZXZpc2lvbklkJyk7XG5cbmV4cG9ydCB7Q0xBU1NfTkFNRSwgV0dfQ1VSX1JFVklTSU9OX0lELCBXR19SRVZJU0lPTl9JRH07XG4iLCAiaW1wb3J0IHtDTEFTU19OQU1FLCBXR19DVVJfUkVWSVNJT05fSUQsIFdHX1JFVklTSU9OX0lEfSBmcm9tICcuL21vZHVsZXMvY29uc3RhbnQnO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIGhpc3RvcnlEaXNjbGFpbWVyKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQge1xuXHRpZiAoIVdHX0NVUl9SRVZJU0lPTl9JRCB8fCAhV0dfUkVWSVNJT05fSUQgfHwgV0dfQ1VSX1JFVklTSU9OX0lEIDw9IFdHX1JFVklTSU9OX0lEKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKCRib2R5LmZpbmQoYC4ke0NMQVNTX05BTUV9YCkubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gVGhlIGZvbGxvd2luZyBjbGFzc2VzIGFyZSB1c2VkIGhlcmU6XG5cdC8vICogc2VlIGNvbnN0YW50LnRzXG5cdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0JCgnPGRpdj4nKS5hZGRDbGFzcyhDTEFTU19OQU1FKS5hcHBlbmRUbygkYm9keSk7XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7QUFBQSxJQUFNQSxhQUFxQjtBQUUzQixJQUFNQyxxQkFBNkJDLEdBQUdDLE9BQU9DLElBQUksaUJBQWlCO0FBQ2xFLElBQU1DLGlCQUF5QkgsR0FBR0MsT0FBT0MsSUFBSSxjQUFjOztBQ0YzRCxJQUFBRSxvQkFBc0JDLFFBQUEsaUJBQUE7QUFFdEIsTUFBQSxHQUFLRCxrQkFBQUUsU0FBUSxFQUFFQyxLQUFLLFNBQVNDLGtCQUFrQkMsT0FBc0M7QUFDcEYsTUFBSSxDQUFDVixzQkFBc0IsQ0FBQ0ksa0JBQWtCSixzQkFBc0JJLGdCQUFnQjtBQUNuRjtFQUNEO0FBRUEsTUFBSU0sTUFBTUMsS0FBQSxJQUFBQyxPQUFTYixVQUFVLENBQUUsRUFBRWMsUUFBUTtBQUN4QztFQUNEO0FBS0FDLElBQUUsT0FBTyxFQUFFQyxTQUFTaEIsVUFBVSxFQUFFaUIsU0FBU04sS0FBSztBQUMvQyxDQUFDOyIsCiAgIm5hbWVzIjogWyJDTEFTU19OQU1FIiwgIldHX0NVUl9SRVZJU0lPTl9JRCIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIldHX1JFVklTSU9OX0lEIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgImhpc3RvcnlEaXNjbGFpbWVyIiwgIiRib2R5IiwgImZpbmQiLCAiY29uY2F0IiwgImxlbmd0aCIsICIkIiwgImFkZENsYXNzIiwgImFwcGVuZFRvIl0KfQo=

})();

/* </nowiki> */

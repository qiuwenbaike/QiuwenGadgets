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

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0hpc3RvcnlEaXNjbGFpbWVyL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0hpc3RvcnlEaXNjbGFpbWVyL0hpc3RvcnlEaXNjbGFpbWVyLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBDTEFTU19OQU1FOiBzdHJpbmcgPSAnZ2FkZ2V0LWhpc3RvcnlfZGlzY2xhaW1lcic7XG5cbmNvbnN0IFdHX0NVUl9SRVZJU0lPTl9JRDogbnVtYmVyID0gbXcuY29uZmlnLmdldCgnd2dDdXJSZXZpc2lvbklkJyk7XG5jb25zdCBXR19SRVZJU0lPTl9JRDogbnVtYmVyID0gbXcuY29uZmlnLmdldCgnd2dSZXZpc2lvbklkJyk7XG5cbmV4cG9ydCB7Q0xBU1NfTkFNRSwgV0dfQ1VSX1JFVklTSU9OX0lELCBXR19SRVZJU0lPTl9JRH07XG4iLCAiaW1wb3J0IHtDTEFTU19OQU1FLCBXR19DVVJfUkVWSVNJT05fSUQsIFdHX1JFVklTSU9OX0lEfSBmcm9tICcuL21vZHVsZXMvY29uc3RhbnQnO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIGhpc3RvcnlEaXNjbGFpbWVyKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQge1xuXHRpZiAoIVdHX0NVUl9SRVZJU0lPTl9JRCB8fCAhV0dfUkVWSVNJT05fSUQgfHwgV0dfQ1VSX1JFVklTSU9OX0lEIDw9IFdHX1JFVklTSU9OX0lEKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKCRib2R5LmZpbmQoYC4ke0NMQVNTX05BTUV9YCkubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gVGhlIGZvbGxvd2luZyBjbGFzc2VzIGFyZSB1c2VkIGhlcmU6XG5cdC8vICogc2VlIGNvbnN0YW50LnRzXG5cdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0JCgnPGRpdj4nKS5hZGRDbGFzcyhDTEFTU19OQU1FKS5hcHBlbmRUbygkYm9keSk7XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsYUFBcUI7QUFFM0IsSUFBTUMscUJBQTZCQyxHQUFHQyxPQUFPQyxJQUFJLGlCQUFpQjtBQUNsRSxJQUFNQyxpQkFBeUJILEdBQUdDLE9BQU9DLElBQUksY0FBYzs7QUNGM0QsSUFBQUUsb0JBQXNCQyxRQUFBLGlCQUFBO0FBRXRCLE1BQUEsR0FBS0Qsa0JBQUFFLFNBQVEsRUFBRUMsS0FBSyxTQUFTQyxrQkFBa0JDLE9BQXNDO0FBQ3BGLE1BQUksQ0FBQ1Ysc0JBQXNCLENBQUNJLGtCQUFrQkosc0JBQXNCSSxnQkFBZ0I7QUFDbkY7RUFDRDtBQUVBLE1BQUlNLE1BQU1DLEtBQUEsSUFBQUMsT0FBU2IsVUFBVSxDQUFFLEVBQUVjLFFBQVE7QUFDeEM7RUFDRDtBQUtBQyxJQUFFLE9BQU8sRUFBRUMsU0FBU2hCLFVBQVUsRUFBRWlCLFNBQVNOLEtBQUs7QUFDL0MsQ0FBQzsiLAogICJuYW1lcyI6IFsiQ0xBU1NfTkFNRSIsICJXR19DVVJfUkVWSVNJT05fSUQiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJXR19SRVZJU0lPTl9JRCIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImdldEJvZHkiLCAidGhlbiIsICJoaXN0b3J5RGlzY2xhaW1lciIsICIkYm9keSIsICJmaW5kIiwgImNvbmNhdCIsICJsZW5ndGgiLCAiJCIsICJhZGRDbGFzcyIsICJhcHBlbmRUbyJdCn0K

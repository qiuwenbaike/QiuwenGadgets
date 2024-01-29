/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/EditCount}
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

// dist/EditCount/EditCount.js
//! src/EditCount/constant.ts
var WG_USER_EDIT_COUNT = mw.config.get("wgUserEditCount");
//! src/EditCount/EditCount.ts
mw.loader.addStyleTag('#pt-mycontris>a::after,.menu__item--userContributions>span>span::after{content:" ('.concat(WG_USER_EDIT_COUNT !== null && WG_USER_EDIT_COUNT !== void 0 ? WG_USER_EDIT_COUNT : 0, ')"}'));

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRDb3VudC9jb25zdGFudC50cyIsICJzcmMvRWRpdENvdW50L0VkaXRDb3VudC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgV0dfVVNFUl9FRElUX0NPVU5UOiBudW1iZXIgfCBudWxsID0gbXcuY29uZmlnLmdldCgnd2dVc2VyRWRpdENvdW50Jyk7XG5cbmV4cG9ydCB7V0dfVVNFUl9FRElUX0NPVU5UfTtcbiIsICJpbXBvcnQge1dHX1VTRVJfRURJVF9DT1VOVH0gZnJvbSAnLi9jb25zdGFudCc7XG5cbm13LmxvYWRlci5hZGRTdHlsZVRhZyhcblx0YCNwdC1teWNvbnRyaXM+YTo6YWZ0ZXIsLm1lbnVfX2l0ZW0tLXVzZXJDb250cmlidXRpb25zPnNwYW4+c3Bhbjo6YWZ0ZXJ7Y29udGVudDpcIiAoJHtXR19VU0VSX0VESVRfQ09VTlQgPz8gMH0pXCJ9YFxuKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLHFCQUFvQ0MsR0FBR0MsT0FBT0MsSUFBSSxpQkFBaUI7O0FDRXpFRixHQUFHRyxPQUFPQyxZQUFBLHFGQUFBQyxPQUM0RU4sdUJBQUEsUUFBQUEsdUJBQUEsU0FBQUEscUJBQXNCLEdBQUMsS0FBQSxDQUM3RzsiLAogICJuYW1lcyI6IFsiV0dfVVNFUl9FRElUX0NPVU5UIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAibG9hZGVyIiwgImFkZFN0eWxlVGFnIiwgImNvbmNhdCJdCn0K

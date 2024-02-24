/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/ToolsRedirect-opt-bolds}
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

// dist/ToolsRedirect-opt-bolds/ToolsRedirect-opt-bolds.js
//! src/ToolsRedirect-opt-bolds/options.json
var version = "2.0";
//! src/ToolsRedirect-opt-bolds/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("ToolsRedirect-opt-bolds-names/".concat(version));
//! src/ToolsRedirect-opt-bolds/ToolsRedirect-opt-bolds.ts
if (!mw.user.options.get("gadget-ToolsRedirect")) {
  void api.postWithEditToken({
    action: "options",
    change: "gadget-ToolsRedirect=1"
  });
  void mw.loader.using("ext.gadget.ToolsRedirect");
}

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Rvb2xzUmVkaXJlY3Qtb3B0LWJvbGRzL29wdGlvbnMuanNvbiIsICJzcmMvVG9vbHNSZWRpcmVjdC1vcHQtYm9sZHMvbW9kdWxlcy9hcGkudHMiLCAic3JjL1Rvb2xzUmVkaXJlY3Qtb3B0LWJvbGRzL1Rvb2xzUmVkaXJlY3Qtb3B0LWJvbGRzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBUb29sc1JlZGlyZWN0LW9wdC1ib2xkcy1uYW1lcy8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuL21vZHVsZXMvYXBpJztcblxuaWYgKCFtdy51c2VyLm9wdGlvbnMuZ2V0KCdnYWRnZXQtVG9vbHNSZWRpcmVjdCcpKSB7XG5cdHZvaWQgYXBpLnBvc3RXaXRoRWRpdFRva2VuKHtcblx0XHRhY3Rpb246ICdvcHRpb25zJyxcblx0XHRjaGFuZ2U6ICdnYWRnZXQtVG9vbHNSZWRpcmVjdD0xJyxcblx0fSk7XG5cblx0dm9pZCBtdy5sb2FkZXIudXNpbmcoJ2V4dC5nYWRnZXQuVG9vbHNSZWRpcmVjdCcpO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQyxJQUFBQSxVQUFXOztBQ0FaLElBQUFDLG9CQUF3QkMsUUFBQSxpQkFBQTtBQUV4QixJQUFNQyxPQUFBLEdBQWNGLGtCQUFBRyxXQUFBLGlDQUFBQyxPQUFtREwsT0FBTyxDQUFFOztBQ0RoRixJQUFJLENBQUNNLEdBQUdDLEtBQUtDLFFBQVFDLElBQUksc0JBQXNCLEdBQUc7QUFDakQsT0FBS04sSUFBSU8sa0JBQWtCO0lBQzFCQyxRQUFRO0lBQ1JDLFFBQVE7RUFDVCxDQUFDO0FBRUQsT0FBS04sR0FBR08sT0FBT0MsTUFBTSwwQkFBMEI7QUFDaEQ7IiwKICAibmFtZXMiOiBbInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNvbmNhdCIsICJtdyIsICJ1c2VyIiwgIm9wdGlvbnMiLCAiZ2V0IiwgInBvc3RXaXRoRWRpdFRva2VuIiwgImFjdGlvbiIsICJjaGFuZ2UiLCAibG9hZGVyIiwgInVzaW5nIl0KfQo=

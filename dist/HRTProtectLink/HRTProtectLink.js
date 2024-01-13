/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/HRTProtectLink|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/User:Xiplus/js/HRTProtectLink.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/HRTProtectLink}
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

// dist/HRTProtectLink/HRTProtectLink.js
//! src/HRTProtectLink/modules/constant.ts
var WG_NAMESPACE_NUMBER = mw.config.get("wgNamespaceNumber");
var WG_PAGE_NAME = mw.config.get("wgPageName");
//! src/HRTProtectLink/HRTProtectLink.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/HRTProtectLink/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    HRT: (0, import_ext_gadget.localize)({
      en: "High-risk template",
      "zh-hans": "高风险模板",
      "zh-hant": "高風險模板"
    }),
    "Full-protect HRT": (0, import_ext_gadget.localize)({
      en: "Enforce full-protection to this high-risk template",
      "zh-hans": "全保护高风险模板",
      "zh-hant": "全保護高風險模板"
    }),
    "Semi-protect HRT": (0, import_ext_gadget.localize)({
      en: "Enforce semi-protection to this high-risk template",
      "zh-hans": "半保护高风险模板",
      "zh-hant": "半保護高風險模板"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/HRTProtectLink/HRTProtectLink.ts
void (0, import_ext_gadget2.getBody)().then(function HRTProtectLink($body) {
  if (![10, 828].includes(WG_NAMESPACE_NUMBER)) {
    return;
  }
  const semiProtectURL = mw.util.getUrl(WG_PAGE_NAME, {
    action: "protect",
    "mwProtect-level-edit": "autoconfirmed",
    "mwProtect-level-move": "autoconfirmed",
    "mwProtect-reason": getMessage("HRT")
  });
  const fullProtectURL = mw.util.getUrl(WG_PAGE_NAME, {
    action: "protect",
    "mwProtect-level-edit": "sysop",
    "mwProtect-level-move": "sysop",
    "mwProtect-reason": getMessage("HRT")
  });
  const portletId = $body.find("#p-cactions").length ? "p-cactions" : "p-tb";
  mw.util.addPortletLink(portletId, semiProtectURL, getMessage("Semi-protect HRT"), "t-hrt-semiprotect");
  mw.util.addPortletLink(portletId, fullProtectURL, getMessage("Full-protect HRT"), "t-hrt-fullprotect");
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0hSVFByb3RlY3RMaW5rL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0hSVFByb3RlY3RMaW5rL0hSVFByb3RlY3RMaW5rLnRzIiwgInNyYy9IUlRQcm90ZWN0TGluay9tb2R1bGVzL2kxOG4udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IFdHX05BTUVTUEFDRV9OVU1CRVI6IG51bWJlciA9IG13LmNvbmZpZy5nZXQoJ3dnTmFtZXNwYWNlTnVtYmVyJyk7XG5jb25zdCBXR19QQUdFX05BTUU6IHN0cmluZyA9IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKTtcblxuZXhwb3J0IHtXR19OQU1FU1BBQ0VfTlVNQkVSLCBXR19QQUdFX05BTUV9O1xuIiwgImltcG9ydCB7V0dfTkFNRVNQQUNFX05VTUJFUiwgV0dfUEFHRV9OQU1FfSBmcm9tICcuL21vZHVsZXMvY29uc3RhbnQnO1xuaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL21vZHVsZXMvaTE4bic7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oZnVuY3Rpb24gSFJUUHJvdGVjdExpbmsoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCB7XG5cdGlmICghWzEwLCA4MjhdLmluY2x1ZGVzKFdHX05BTUVTUEFDRV9OVU1CRVIpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qgc2VtaVByb3RlY3RVUkw6IHN0cmluZyA9IG13LnV0aWwuZ2V0VXJsKFdHX1BBR0VfTkFNRSwge1xuXHRcdGFjdGlvbjogJ3Byb3RlY3QnLFxuXHRcdCdtd1Byb3RlY3QtbGV2ZWwtZWRpdCc6ICdhdXRvY29uZmlybWVkJyxcblx0XHQnbXdQcm90ZWN0LWxldmVsLW1vdmUnOiAnYXV0b2NvbmZpcm1lZCcsXG5cdFx0J213UHJvdGVjdC1yZWFzb24nOiBnZXRNZXNzYWdlKCdIUlQnKSxcblx0fSk7XG5cdGNvbnN0IGZ1bGxQcm90ZWN0VVJMOiBzdHJpbmcgPSBtdy51dGlsLmdldFVybChXR19QQUdFX05BTUUsIHtcblx0XHRhY3Rpb246ICdwcm90ZWN0Jyxcblx0XHQnbXdQcm90ZWN0LWxldmVsLWVkaXQnOiAnc3lzb3AnLFxuXHRcdCdtd1Byb3RlY3QtbGV2ZWwtbW92ZSc6ICdzeXNvcCcsXG5cdFx0J213UHJvdGVjdC1yZWFzb24nOiBnZXRNZXNzYWdlKCdIUlQnKSxcblx0fSk7XG5cblx0Y29uc3QgcG9ydGxldElkOiAncC1jYWN0aW9ucycgfCAncC10YicgPSAkYm9keS5maW5kKCcjcC1jYWN0aW9ucycpLmxlbmd0aCA/ICdwLWNhY3Rpb25zJyA6ICdwLXRiJztcblx0bXcudXRpbC5hZGRQb3J0bGV0TGluayhwb3J0bGV0SWQsIHNlbWlQcm90ZWN0VVJMLCBnZXRNZXNzYWdlKCdTZW1pLXByb3RlY3QgSFJUJyksICd0LWhydC1zZW1pcHJvdGVjdCcpO1xuXHRtdy51dGlsLmFkZFBvcnRsZXRMaW5rKHBvcnRsZXRJZCwgZnVsbFByb3RlY3RVUkwsIGdldE1lc3NhZ2UoJ0Z1bGwtcHJvdGVjdCBIUlQnKSwgJ3QtaHJ0LWZ1bGxwcm90ZWN0Jyk7XG59KTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0SFJUOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0hpZ2gtcmlzayB0ZW1wbGF0ZScsXG5cdFx0XHQnemgtaGFucyc6ICfpq5jpo47pmanmqKHmnb8nLFxuXHRcdFx0J3poLWhhbnQnOiAn6auY6aKo6Zqq5qih5p2/Jyxcblx0XHR9KSxcblx0XHQnRnVsbC1wcm90ZWN0IEhSVCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRW5mb3JjZSBmdWxsLXByb3RlY3Rpb24gdG8gdGhpcyBoaWdoLXJpc2sgdGVtcGxhdGUnLFxuXHRcdFx0J3poLWhhbnMnOiAn5YWo5L+d5oqk6auY6aOO6Zmp5qih5p2/Jyxcblx0XHRcdCd6aC1oYW50JzogJ+WFqOS/neitt+mrmOmiqOmaquaooeadvycsXG5cdFx0fSksXG5cdFx0J1NlbWktcHJvdGVjdCBIUlQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0VuZm9yY2Ugc2VtaS1wcm90ZWN0aW9uIHRvIHRoaXMgaGlnaC1yaXNrIHRlbXBsYXRlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WNiuS/neaKpOmrmOmjjumZqeaooeadvycsXG5cdFx0XHQnemgtaGFudCc6ICfljYrkv53orbfpq5jpoqjpmqrmqKHmnb8nLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7QUFBQSxJQUFNQSxzQkFBOEJDLEdBQUdDLE9BQU9DLElBQUksbUJBQW1CO0FBQ3JFLElBQU1DLGVBQXVCSCxHQUFHQyxPQUFPQyxJQUFJLFlBQVk7O0FDQXZELElBQUFFLHFCQUFzQkMsUUFBQSxpQkFBQTs7QUNEdEIsSUFBQUMsb0JBQXVCRCxRQUFBLGlCQUFBO0FBRXZCLElBQU1FLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLE1BQUEsR0FBS0Ysa0JBQUFHLFVBQVM7TUFDYkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNELHFCQUFBLEdBQW9CSixrQkFBQUcsVUFBUztNQUM1QkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNELHFCQUFBLEdBQW9CSixrQkFBQUcsVUFBUztNQUM1QkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztFQUNGO0FBQ0Q7QUFFQSxJQUFNQyxlQUFlSixnQkFBZ0I7QUFFckMsSUFBTUssYUFBZ0RDLFNBQVE7QUFDN0QsU0FBT0YsYUFBYUUsR0FBRyxLQUFLQTtBQUM3Qjs7QUR0QkEsTUFBQSxHQUFLVCxtQkFBQVUsU0FBUSxFQUFFQyxLQUFLLFNBQVNDLGVBQWVDLE9BQXNDO0FBQ2pGLE1BQUksQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFQyxTQUFTbkIsbUJBQW1CLEdBQUc7QUFDN0M7RUFDRDtBQUVBLFFBQU1vQixpQkFBeUJuQixHQUFHb0IsS0FBS0MsT0FBT2xCLGNBQWM7SUFDM0RtQixRQUFRO0lBQ1Isd0JBQXdCO0lBQ3hCLHdCQUF3QjtJQUN4QixvQkFBb0JWLFdBQVcsS0FBSztFQUNyQyxDQUFDO0FBQ0QsUUFBTVcsaUJBQXlCdkIsR0FBR29CLEtBQUtDLE9BQU9sQixjQUFjO0lBQzNEbUIsUUFBUTtJQUNSLHdCQUF3QjtJQUN4Qix3QkFBd0I7SUFDeEIsb0JBQW9CVixXQUFXLEtBQUs7RUFDckMsQ0FBQztBQUVELFFBQU1ZLFlBQW1DUCxNQUFNUSxLQUFLLGFBQWEsRUFBRUMsU0FBUyxlQUFlO0FBQzNGMUIsS0FBR29CLEtBQUtPLGVBQWVILFdBQVdMLGdCQUFnQlAsV0FBVyxrQkFBa0IsR0FBRyxtQkFBbUI7QUFDckdaLEtBQUdvQixLQUFLTyxlQUFlSCxXQUFXRCxnQkFBZ0JYLFdBQVcsa0JBQWtCLEdBQUcsbUJBQW1CO0FBQ3RHLENBQUM7IiwKICAibmFtZXMiOiBbIldHX05BTUVTUEFDRV9OVU1CRVIiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJXR19QQUdFX05BTUUiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkhSVCIsICJsb2NhbGl6ZSIsICJlbiIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgIkhSVFByb3RlY3RMaW5rIiwgIiRib2R5IiwgImluY2x1ZGVzIiwgInNlbWlQcm90ZWN0VVJMIiwgInV0aWwiLCAiZ2V0VXJsIiwgImFjdGlvbiIsICJmdWxsUHJvdGVjdFVSTCIsICJwb3J0bGV0SWQiLCAiZmluZCIsICJsZW5ndGgiLCAiYWRkUG9ydGxldExpbmsiXQp9Cg==

})();

/* </nowiki> */

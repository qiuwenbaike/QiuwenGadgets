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
  const {
    wgNamespaceNumber
  } = mw.config.get();
  if (![10, 828].includes(wgNamespaceNumber)) {
    return;
  }
  const {
    wgPageName
  } = mw.config.get();
  const semiProtectURL = mw.util.getUrl(wgPageName, {
    action: "protect",
    "mwProtect-level-edit": "autoconfirmed",
    "mwProtect-level-move": "autoconfirmed",
    "mwProtect-reason": getMessage("HRT")
  });
  const fullProtectURL = mw.util.getUrl(wgPageName, {
    action: "protect",
    "mwProtect-level-edit": "sysop",
    "mwProtect-level-move": "sysop",
    "mwProtect-reason": getMessage("HRT")
  });
  const portletId = $body.find("#p-cactions").length ? "p-cactions" : "p-tb";
  mw.util.addPortletLink(portletId, semiProtectURL, getMessage("Semi-protect HRT"), "t-hrt-semiprotect");
  mw.util.addPortletLink(portletId, fullProtectURL, getMessage("Full-protect HRT"), "t-hrt-fullprotect");
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0hSVFByb3RlY3RMaW5rL0hSVFByb3RlY3RMaW5rLnRzIiwgInNyYy9IUlRQcm90ZWN0TGluay9tb2R1bGVzL2kxOG4udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9tb2R1bGVzL2kxOG4nO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIEhSVFByb3RlY3RMaW5rKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQge1xuXHRjb25zdCB7d2dOYW1lc3BhY2VOdW1iZXJ9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRpZiAoIVsxMCwgODI4XS5pbmNsdWRlcyh3Z05hbWVzcGFjZU51bWJlcikpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IHNlbWlQcm90ZWN0VVJMOiBzdHJpbmcgPSBtdy51dGlsLmdldFVybCh3Z1BhZ2VOYW1lLCB7XG5cdFx0YWN0aW9uOiAncHJvdGVjdCcsXG5cdFx0J213UHJvdGVjdC1sZXZlbC1lZGl0JzogJ2F1dG9jb25maXJtZWQnLFxuXHRcdCdtd1Byb3RlY3QtbGV2ZWwtbW92ZSc6ICdhdXRvY29uZmlybWVkJyxcblx0XHQnbXdQcm90ZWN0LXJlYXNvbic6IGdldE1lc3NhZ2UoJ0hSVCcpLFxuXHR9KTtcblx0Y29uc3QgZnVsbFByb3RlY3RVUkw6IHN0cmluZyA9IG13LnV0aWwuZ2V0VXJsKHdnUGFnZU5hbWUsIHtcblx0XHRhY3Rpb246ICdwcm90ZWN0Jyxcblx0XHQnbXdQcm90ZWN0LWxldmVsLWVkaXQnOiAnc3lzb3AnLFxuXHRcdCdtd1Byb3RlY3QtbGV2ZWwtbW92ZSc6ICdzeXNvcCcsXG5cdFx0J213UHJvdGVjdC1yZWFzb24nOiBnZXRNZXNzYWdlKCdIUlQnKSxcblx0fSk7XG5cblx0Y29uc3QgcG9ydGxldElkOiAncC1jYWN0aW9ucycgfCAncC10YicgPSAkYm9keS5maW5kKCcjcC1jYWN0aW9ucycpLmxlbmd0aCA/ICdwLWNhY3Rpb25zJyA6ICdwLXRiJztcblx0bXcudXRpbC5hZGRQb3J0bGV0TGluayhwb3J0bGV0SWQsIHNlbWlQcm90ZWN0VVJMLCBnZXRNZXNzYWdlKCdTZW1pLXByb3RlY3QgSFJUJyksICd0LWhydC1zZW1pcHJvdGVjdCcpO1xuXHRtdy51dGlsLmFkZFBvcnRsZXRMaW5rKHBvcnRsZXRJZCwgZnVsbFByb3RlY3RVUkwsIGdldE1lc3NhZ2UoJ0Z1bGwtcHJvdGVjdCBIUlQnKSwgJ3QtaHJ0LWZ1bGxwcm90ZWN0Jyk7XG59KTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0SFJUOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0hpZ2gtcmlzayB0ZW1wbGF0ZScsXG5cdFx0XHQnemgtaGFucyc6ICfpq5jpo47pmanmqKHmnb8nLFxuXHRcdFx0J3poLWhhbnQnOiAn6auY6aKo6Zqq5qih5p2/Jyxcblx0XHR9KSxcblx0XHQnRnVsbC1wcm90ZWN0IEhSVCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRW5mb3JjZSBmdWxsLXByb3RlY3Rpb24gdG8gdGhpcyBoaWdoLXJpc2sgdGVtcGxhdGUnLFxuXHRcdFx0J3poLWhhbnMnOiAn5YWo5L+d5oqk6auY6aOO6Zmp5qih5p2/Jyxcblx0XHRcdCd6aC1oYW50JzogJ+WFqOS/neitt+mrmOmiqOmaquaooeadvycsXG5cdFx0fSksXG5cdFx0J1NlbWktcHJvdGVjdCBIUlQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0VuZm9yY2Ugc2VtaS1wcm90ZWN0aW9uIHRvIHRoaXMgaGlnaC1yaXNrIHRlbXBsYXRlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WNiuS/neaKpOmrmOmjjumZqeaooeadvycsXG5cdFx0XHQnemgtaGFudCc6ICfljYrkv53orbfpq5jpoqjpmqrmqKHmnb8nLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEscUJBQXNCQyxRQUFBLGlCQUFBOztBQ0F0QixJQUFBQyxvQkFBdUJELFFBQUEsaUJBQUE7QUFFdkIsSUFBTUUsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsTUFBQSxHQUFLRixrQkFBQUcsVUFBUztNQUNiQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0QscUJBQUEsR0FBb0JKLGtCQUFBRyxVQUFTO01BQzVCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0QscUJBQUEsR0FBb0JKLGtCQUFBRyxVQUFTO01BQzVCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0VBQ0Y7QUFDRDtBQUVBLElBQU1DLGVBQWVKLGdCQUFnQjtBQUVyQyxJQUFNSyxhQUFnREMsU0FBUTtBQUM3RCxTQUFPRixhQUFhRSxHQUFHLEtBQUtBO0FBQzdCOztBRHZCQSxNQUFBLEdBQUtULG1CQUFBVSxTQUFRLEVBQUVDLEtBQUssU0FBU0MsZUFBZUMsT0FBc0M7QUFDakYsUUFBTTtJQUFDQztFQUFpQixJQUFJQyxHQUFHQyxPQUFPQyxJQUFJO0FBQzFDLE1BQUksQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFQyxTQUFTSixpQkFBaUIsR0FBRztBQUMzQztFQUNEO0FBRUEsUUFBTTtJQUFDSztFQUFVLElBQUlKLEdBQUdDLE9BQU9DLElBQUk7QUFDbkMsUUFBTUcsaUJBQXlCTCxHQUFHTSxLQUFLQyxPQUFPSCxZQUFZO0lBQ3pESSxRQUFRO0lBQ1Isd0JBQXdCO0lBQ3hCLHdCQUF3QjtJQUN4QixvQkFBb0JmLFdBQVcsS0FBSztFQUNyQyxDQUFDO0FBQ0QsUUFBTWdCLGlCQUF5QlQsR0FBR00sS0FBS0MsT0FBT0gsWUFBWTtJQUN6REksUUFBUTtJQUNSLHdCQUF3QjtJQUN4Qix3QkFBd0I7SUFDeEIsb0JBQW9CZixXQUFXLEtBQUs7RUFDckMsQ0FBQztBQUVELFFBQU1pQixZQUFtQ1osTUFBTWEsS0FBSyxhQUFhLEVBQUVDLFNBQVMsZUFBZTtBQUMzRlosS0FBR00sS0FBS08sZUFBZUgsV0FBV0wsZ0JBQWdCWixXQUFXLGtCQUFrQixHQUFHLG1CQUFtQjtBQUNyR08sS0FBR00sS0FBS08sZUFBZUgsV0FBV0QsZ0JBQWdCaEIsV0FBVyxrQkFBa0IsR0FBRyxtQkFBbUI7QUFDdEcsQ0FBQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkhSVCIsICJsb2NhbGl6ZSIsICJlbiIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgIkhSVFByb3RlY3RMaW5rIiwgIiRib2R5IiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiaW5jbHVkZXMiLCAid2dQYWdlTmFtZSIsICJzZW1pUHJvdGVjdFVSTCIsICJ1dGlsIiwgImdldFVybCIsICJhY3Rpb24iLCAiZnVsbFByb3RlY3RVUkwiLCAicG9ydGxldElkIiwgImZpbmQiLCAibGVuZ3RoIiwgImFkZFBvcnRsZXRMaW5rIl0KfQo=

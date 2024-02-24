/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Editform_Patch2017}
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

// dist/Editform_Patch2017/Editform_Patch2017.js
//! src/Editform_Patch2017/Editform_Patch2017.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/Editform_Patch2017/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    minoredit: (0, import_ext_gadget.localize)({
      en: "This is a minor edit",
      "zh-hans": "这是一次小编辑",
      "zh-hant": "這是次要編輯"
    }),
    watchthis: (0, import_ext_gadget.localize)({
      en: "Watch this page",
      "zh-hans": "监视此页面",
      "zh-hant": "監視此頁面"
    }),
    copyrightwarning: (0, import_ext_gadget.localize)({
      en: '<p>By clicking the button, you agree to the <i><a href="/wiki/QW:TOS" title="Terms of Use">Terms of Use</a></i>, <i><a href="/wiki/QW:GTGL" title="Common Program">Common Program</a></i>, and the <i><a href="/wiki/Qiuwen:CP" title="Copyright Policy">Copyright Policy</a></i>. You agree to released all your contributions under the <i><a href="/wiki/Qiuwen:CC-BY-SA-4.0" title="Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)">Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)</a></i>. You promise to us that the content you submit does not involve in copyright infringement or infringement on legitimate rights and interests of others.<br><b>If you do not agree to terms and policies mentioned above, please do not submit your work.</b></p>',
      "zh-hans": '<p>点击“<b>$1</b>”按钮，即表示您<b>同意</b>《<b><a href="/wiki/QW:TOS" title="求闻百科用户协议">求闻百科用户协议</a></b>》、《<b><a href="/wiki/QW:GTGL" title="求闻百科共同纲领">求闻百科共同纲领</a></b>》及本网站<b><a href="/wiki/Qiuwen:CP" title="著作权方针">著作权方针</a></b>，<b>同意</b>依据<b><a href="/wiki/Help:CC-BY-SA-4.0" title="知识共享 署名—相同方式共享 4.0 协议国际版">CC-BY-SA 4.0</a></b>协议授权他人使用您所发布的内容，并<b>承诺</b>所提交的内容不侵犯他人的著作权及其他合法权益。<br>若您不同意《用户协议》、《共同纲领》或本网站著作权方针，请勿点击按钮发布内容。</p>',
      "zh-hant": '<p>點擊“<b>$1</b>”按鈕，即表示您<b>同意</b>《<b><a href="/wiki/QW:TOS" title="求聞百科用戶協議">求聞百科用戶協議</a></b>》、《<b><a href="/wiki/QW:GTGL" title="求聞百科共同綱領">求聞百科共同綱領</a></b>》及本網站<b><a href="/wiki/Qiuwen:CP" title="著作權方針">著作權方針</a></b>，<b>同意</b>依據<b><a href="/wiki/Help:CC-BY-SA-4.0" title="創用CC 姓名標示─相同方式分享 4.0 國際">CC-BY-SA 4.0</a></b>協議授權他人使用您所發布的內容，並<b>承諾</b>所提交的內容不侵犯他人的著作權及其他合法權益。<br>若您不同意《用戶協議》、《共同綱領》或本網站著作權方針，請勿點擊按鈕發布內容。</p>'
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/Editform_Patch2017/modules/constant.ts
var DIALOG_LICENSE_ID = "ve-ui-mwSaveDialog-license";
//! src/Editform_Patch2017/modules/processVisualEditor.ts
var processVisualEditor = ({
  $body
}) => {
  if (!$body.find(".".concat(DIALOG_LICENSE_ID)).children().length) {
    $body.find(".".concat(DIALOG_LICENSE_ID)).append($("<div>").addClass("fmbox plainlinks fmbox-system").append($("<div>").addClass("mbox-text").html(getMessage("copyrightwarning"))));
  }
};
//! src/Editform_Patch2017/Editform_Patch2017.ts
void (0, import_ext_gadget2.getBody)().then(function editForm($body) {
  mw.messages.set({
    minoredit: getMessage("minoredit"),
    watchthis: getMessage("watchthis")
  });
  mw.hook("ve.saveDialog.stateChanged").add(() => {
    processVisualEditor({
      $body
    });
  });
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRmb3JtX1BhdGNoMjAxNy9FZGl0Zm9ybV9QYXRjaDIwMTcudHMiLCAic3JjL0VkaXRmb3JtX1BhdGNoMjAxNy9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0VkaXRmb3JtX1BhdGNoMjAxNy9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9FZGl0Zm9ybV9QYXRjaDIwMTcvbW9kdWxlcy9wcm9jZXNzVmlzdWFsRWRpdG9yLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vbW9kdWxlcy9pMThuJztcbmltcG9ydCB7cHJvY2Vzc1Zpc3VhbEVkaXRvcn0gZnJvbSAnLi9tb2R1bGVzL3Byb2Nlc3NWaXN1YWxFZGl0b3InO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiDkv67mraMyMDE354mI5rqQ5Luj56CB57yW6L6R5Zmo55WM6Z2i6ZSZ6K+vXG4gKi9cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oZnVuY3Rpb24gZWRpdEZvcm0oJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCB7XG5cdG13Lm1lc3NhZ2VzLnNldCh7bWlub3JlZGl0OiBnZXRNZXNzYWdlKCdtaW5vcmVkaXQnKSwgd2F0Y2h0aGlzOiBnZXRNZXNzYWdlKCd3YXRjaHRoaXMnKX0pO1xuXG5cdG13Lmhvb2soJ3ZlLnNhdmVEaWFsb2cuc3RhdGVDaGFuZ2VkJykuYWRkKCgpOiB2b2lkID0+IHtcblx0XHRwcm9jZXNzVmlzdWFsRWRpdG9yKHtcblx0XHRcdCRib2R5LFxuXHRcdH0pO1xuXHR9KTtcbn0pO1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRtaW5vcmVkaXQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhpcyBpcyBhIG1pbm9yIGVkaXQnLFxuXHRcdFx0J3poLWhhbnMnOiAn6L+Z5piv5LiA5qyh5bCP57yW6L6RJyxcblx0XHRcdCd6aC1oYW50JzogJ+mAmeaYr+asoeimgee3qOi8rycsXG5cdFx0fSksXG5cdFx0d2F0Y2h0aGlzOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1dhdGNoIHRoaXMgcGFnZScsXG5cdFx0XHQnemgtaGFucyc6ICfnm5Hop4bmraTpobXpnaInLFxuXHRcdFx0J3poLWhhbnQnOiAn55uj6KaW5q2k6aCB6Z2iJyxcblx0XHR9KSxcblx0XHRjb3B5cmlnaHR3YXJuaW5nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJzxwPkJ5IGNsaWNraW5nIHRoZSBidXR0b24sIHlvdSBhZ3JlZSB0byB0aGUgPGk+PGEgaHJlZj1cIi93aWtpL1FXOlRPU1wiIHRpdGxlPVwiVGVybXMgb2YgVXNlXCI+VGVybXMgb2YgVXNlPC9hPjwvaT4sIDxpPjxhIGhyZWY9XCIvd2lraS9RVzpHVEdMXCIgdGl0bGU9XCJDb21tb24gUHJvZ3JhbVwiPkNvbW1vbiBQcm9ncmFtPC9hPjwvaT4sIGFuZCB0aGUgPGk+PGEgaHJlZj1cIi93aWtpL1FpdXdlbjpDUFwiIHRpdGxlPVwiQ29weXJpZ2h0IFBvbGljeVwiPkNvcHlyaWdodCBQb2xpY3k8L2E+PC9pPi4gWW91IGFncmVlIHRvIHJlbGVhc2VkIGFsbCB5b3VyIGNvbnRyaWJ1dGlvbnMgdW5kZXIgdGhlIDxpPjxhIGhyZWY9XCIvd2lraS9RaXV3ZW46Q0MtQlktU0EtNC4wXCIgdGl0bGU9XCJDcmVhdGl2ZSBDb21tb25zIEF0dHJpYnV0aW9uLVNoYXJlQWxpa2UgNC4wIEludGVybmF0aW9uYWwgKENDIEJZLVNBIDQuMClcIj5DcmVhdGl2ZSBDb21tb25zIEF0dHJpYnV0aW9uLVNoYXJlQWxpa2UgNC4wIEludGVybmF0aW9uYWwgKENDIEJZLVNBIDQuMCk8L2E+PC9pPi4gWW91IHByb21pc2UgdG8gdXMgdGhhdCB0aGUgY29udGVudCB5b3Ugc3VibWl0IGRvZXMgbm90IGludm9sdmUgaW4gY29weXJpZ2h0IGluZnJpbmdlbWVudCBvciBpbmZyaW5nZW1lbnQgb24gbGVnaXRpbWF0ZSByaWdodHMgYW5kIGludGVyZXN0cyBvZiBvdGhlcnMuPGJyPjxiPklmIHlvdSBkbyBub3QgYWdyZWUgdG8gdGVybXMgYW5kIHBvbGljaWVzIG1lbnRpb25lZCBhYm92ZSwgcGxlYXNlIGRvIG5vdCBzdWJtaXQgeW91ciB3b3JrLjwvYj48L3A+Jyxcblx0XHRcdCd6aC1oYW5zJzpcblx0XHRcdFx0JzxwPueCueWHu+KAnDxiPiQxPC9iPuKAneaMiemSru+8jOWNs+ihqOekuuaCqDxiPuWQjOaEjzwvYj7jgIo8Yj48YSBocmVmPVwiL3dpa2kvUVc6VE9TXCIgdGl0bGU9XCLmsYLpl7vnmb7np5HnlKjmiLfljY/orq5cIj7msYLpl7vnmb7np5HnlKjmiLfljY/orq48L2E+PC9iPuOAi+OAgeOAijxiPjxhIGhyZWY9XCIvd2lraS9RVzpHVEdMXCIgdGl0bGU9XCLmsYLpl7vnmb7np5HlhbHlkIznurLpooZcIj7msYLpl7vnmb7np5HlhbHlkIznurLpooY8L2E+PC9iPuOAi+WPiuacrOe9keermTxiPjxhIGhyZWY9XCIvd2lraS9RaXV3ZW46Q1BcIiB0aXRsZT1cIuiRl+S9nOadg+aWuemSiFwiPuiRl+S9nOadg+aWuemSiDwvYT48L2I+77yMPGI+5ZCM5oSPPC9iPuS+neaNrjxiPjxhIGhyZWY9XCIvd2lraS9IZWxwOkNDLUJZLVNBLTQuMFwiIHRpdGxlPVwi55+l6K+G5YWx5LqrIOe9suWQjeKAlOebuOWQjOaWueW8j+WFseS6qyA0LjAg5Y2P6K6u5Zu96ZmF54mIXCI+Q0MtQlktU0EgNC4wPC9hPjwvYj7ljY/orq7mjojmnYPku5bkurrkvb/nlKjmgqjmiYDlj5HluIPnmoTlhoXlrrnvvIzlubY8Yj7mib/or7o8L2I+5omA5o+Q5Lqk55qE5YaF5a655LiN5L6154qv5LuW5Lq655qE6JGX5L2c5p2D5Y+K5YW25LuW5ZCI5rOV5p2D55uK44CCPGJyPuiLpeaCqOS4jeWQjOaEj+OAiueUqOaIt+WNj+iuruOAi+OAgeOAiuWFseWQjOe6sumihuOAi+aIluacrOe9keermeiRl+S9nOadg+aWuemSiO+8jOivt+WLv+eCueWHu+aMiemSruWPkeW4g+WGheWuueOAgjwvcD4nLFxuXHRcdFx0J3poLWhhbnQnOlxuXHRcdFx0XHQnPHA+6bue5pOK4oCcPGI+JDE8L2I+4oCd5oyJ6YiV77yM5Y2z6KGo56S65oKoPGI+5ZCM5oSPPC9iPuOAijxiPjxhIGhyZWY9XCIvd2lraS9RVzpUT1NcIiB0aXRsZT1cIuaxguiBnueZvuenkeeUqOaItuWNlOitsFwiPuaxguiBnueZvuenkeeUqOaItuWNlOitsDwvYT48L2I+44CL44CB44CKPGI+PGEgaHJlZj1cIi93aWtpL1FXOkdUR0xcIiB0aXRsZT1cIuaxguiBnueZvuenkeWFseWQjOe2semgmFwiPuaxguiBnueZvuenkeWFseWQjOe2semgmDwvYT48L2I+44CL5Y+K5pys57ay56uZPGI+PGEgaHJlZj1cIi93aWtpL1FpdXdlbjpDUFwiIHRpdGxlPVwi6JGX5L2c5qyK5pa56YedXCI+6JGX5L2c5qyK5pa56YedPC9hPjwvYj7vvIw8Yj7lkIzmhI88L2I+5L6d5pOaPGI+PGEgaHJlZj1cIi93aWtpL0hlbHA6Q0MtQlktU0EtNC4wXCIgdGl0bGU9XCLlibXnlKhDQyDlp5PlkI3mqJnnpLrilIDnm7jlkIzmlrnlvI/liIbkuqsgNC4wIOWci+mam1wiPkNDLUJZLVNBIDQuMDwvYT48L2I+5Y2U6K2w5o6I5qyK5LuW5Lq65L2/55So5oKo5omA55m85biD55qE5YWn5a6577yM5LimPGI+5om/6Ku+PC9iPuaJgOaPkOS6pOeahOWFp+WuueS4jeS+teeKr+S7luS6uueahOiRl+S9nOasiuWPiuWFtuS7luWQiOazleasiuebiuOAgjxicj7oi6XmgqjkuI3lkIzmhI/jgIrnlKjmiLbljZTorbDjgIvjgIHjgIrlhbHlkIzntrHpoJjjgIvmiJbmnKzntrLnq5nokZfkvZzmrIrmlrnph53vvIzoq4vli7/pu57mk4rmjInpiJXnmbzluIPlhaflrrnjgII8L3A+Jyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiY29uc3QgRElBTE9HX0xJQ0VOU0VfSUQgPSAndmUtdWktbXdTYXZlRGlhbG9nLWxpY2Vuc2UnO1xuXG5leHBvcnQge0RJQUxPR19MSUNFTlNFX0lEfTtcbiIsICJpbXBvcnQge0RJQUxPR19MSUNFTlNFX0lEfSBmcm9tICcuL2NvbnN0YW50JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgcHJvY2Vzc1Zpc3VhbEVkaXRvciA9ICh7JGJvZHl9OiB7JGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+fSkgPT4ge1xuXHQvLyBNaXNzaW5nIGNvcHlyaWdodCB3YXJuaW5nXG5cdGlmICghJGJvZHkuZmluZChgLiR7RElBTE9HX0xJQ0VOU0VfSUR9YCkuY2hpbGRyZW4oKS5sZW5ndGgpIHtcblx0XHQkYm9keS5maW5kKGAuJHtESUFMT0dfTElDRU5TRV9JRH1gKS5hcHBlbmQoXG5cdFx0XHQkKCc8ZGl2PicpXG5cdFx0XHRcdC5hZGRDbGFzcygnZm1ib3ggcGxhaW5saW5rcyBmbWJveC1zeXN0ZW0nKVxuXHRcdFx0XHQuYXBwZW5kKCQoJzxkaXY+JykuYWRkQ2xhc3MoJ21ib3gtdGV4dCcpLmh0bWwoZ2V0TWVzc2FnZSgnY29weXJpZ2h0d2FybmluZycpKSlcblx0XHQpO1xuXHR9XG59O1xuXG5leHBvcnQge3Byb2Nlc3NWaXN1YWxFZGl0b3J9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBc0JDLFFBQUEsaUJBQUE7O0FDQXRCLElBQUFDLG9CQUF1QkQsUUFBQSxpQkFBQTtBQUV2QixJQUFNRSxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOQyxZQUFBLEdBQVdGLGtCQUFBRyxVQUFTO01BQ25CQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RDLFlBQUEsR0FBV0wsa0JBQUFHLFVBQVM7TUFDbkJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREUsbUJBQUEsR0FBa0JOLGtCQUFBRyxVQUFTO01BQzFCQyxJQUFJO01BQ0osV0FDQztNQUNELFdBQ0M7SUFDRixDQUFDO0VBQ0Y7QUFDRDtBQUVBLElBQU1HLGVBQWVOLGdCQUFnQjtBQUVyQyxJQUFNTyxhQUFnREMsU0FBUTtBQUM3RCxTQUFPRixhQUFhRSxHQUFHLEtBQUtBO0FBQzdCOztBQzVCQSxJQUFNQyxvQkFBb0I7O0FDRzFCLElBQU1DLHNCQUFzQkEsQ0FBQztFQUFDQztBQUFLLE1BQXdDO0FBRTFFLE1BQUksQ0FBQ0EsTUFBTUMsS0FBQSxJQUFBQyxPQUFTSixpQkFBaUIsQ0FBRSxFQUFFSyxTQUFTLEVBQUVDLFFBQVE7QUFDM0RKLFVBQU1DLEtBQUEsSUFBQUMsT0FBU0osaUJBQWlCLENBQUUsRUFBRU8sT0FDbkNDLEVBQUUsT0FBTyxFQUNQQyxTQUFTLCtCQUErQixFQUN4Q0YsT0FBT0MsRUFBRSxPQUFPLEVBQUVDLFNBQVMsV0FBVyxFQUFFQyxLQUFLWixXQUFXLGtCQUFrQixDQUFDLENBQUMsQ0FDL0U7RUFDRDtBQUNEOztBSExBLE1BQUEsR0FBS1YsbUJBQUF1QixTQUFRLEVBQUVDLEtBQUssU0FBU0MsU0FBU1gsT0FBc0M7QUFDM0VZLEtBQUdDLFNBQVNDLElBQUk7SUFBQ3hCLFdBQVdNLFdBQVcsV0FBVztJQUFHSCxXQUFXRyxXQUFXLFdBQVc7RUFBQyxDQUFDO0FBRXhGZ0IsS0FBR0csS0FBSyw0QkFBNEIsRUFBRUMsSUFBSSxNQUFZO0FBQ3JEakIsd0JBQW9CO01BQ25CQztJQUNELENBQUM7RUFDRixDQUFDO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIm1pbm9yZWRpdCIsICJsb2NhbGl6ZSIsICJlbiIsICJ3YXRjaHRoaXMiLCAiY29weXJpZ2h0d2FybmluZyIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiRElBTE9HX0xJQ0VOU0VfSUQiLCAicHJvY2Vzc1Zpc3VhbEVkaXRvciIsICIkYm9keSIsICJmaW5kIiwgImNvbmNhdCIsICJjaGlsZHJlbiIsICJsZW5ndGgiLCAiYXBwZW5kIiwgIiQiLCAiYWRkQ2xhc3MiLCAiaHRtbCIsICJnZXRCb2R5IiwgInRoZW4iLCAiZWRpdEZvcm0iLCAibXciLCAibWVzc2FnZXMiLCAic2V0IiwgImhvb2siLCAiYWRkIl0KfQo=

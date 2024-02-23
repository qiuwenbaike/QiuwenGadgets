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
//! src/Editform_Patch2017/modules/processVisualEditor.ts
var DIALOG_LICENSE_ID = "ve-ui-mwSaveDialog-license";
var processVisualEditor = ({
  $body
}) => {
  if (!$body.find(".".concat(DIALOG_LICENSE_ID)).children().length) {
    $body.find(".".concat(DIALOG_LICENSE_ID)).append($("<div>").addClass("fmbox plainlinks fmbox-system").html(getMessage("copyrightwarning")));
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRmb3JtX1BhdGNoMjAxNy9FZGl0Zm9ybV9QYXRjaDIwMTcudHMiLCAic3JjL0VkaXRmb3JtX1BhdGNoMjAxNy9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0VkaXRmb3JtX1BhdGNoMjAxNy9tb2R1bGVzL3Byb2Nlc3NWaXN1YWxFZGl0b3IudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9tb2R1bGVzL2kxOG4nO1xuaW1wb3J0IHtwcm9jZXNzVmlzdWFsRWRpdG9yfSBmcm9tICcuL21vZHVsZXMvcHJvY2Vzc1Zpc3VhbEVkaXRvcic7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIOS/ruatozIwMTfniYjmupDku6PnoIHnvJbovpHlmajnlYzpnaLplJnor69cbiAqL1xudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBlZGl0Rm9ybSgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0bXcubWVzc2FnZXMuc2V0KHttaW5vcmVkaXQ6IGdldE1lc3NhZ2UoJ21pbm9yZWRpdCcpLCB3YXRjaHRoaXM6IGdldE1lc3NhZ2UoJ3dhdGNodGhpcycpfSk7XG5cblx0bXcuaG9vaygndmUuc2F2ZURpYWxvZy5zdGF0ZUNoYW5nZWQnKS5hZGQoKCk6IHZvaWQgPT4ge1xuXHRcdHByb2Nlc3NWaXN1YWxFZGl0b3Ioe1xuXHRcdFx0JGJvZHksXG5cdFx0fSk7XG5cdH0pO1xufSk7XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdG1pbm9yZWRpdDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGlzIGlzIGEgbWlub3IgZWRpdCcsXG5cdFx0XHQnemgtaGFucyc6ICfov5nmmK/kuIDmrKHlsI/nvJbovpEnLFxuXHRcdFx0J3poLWhhbnQnOiAn6YCZ5piv5qyh6KaB57eo6LyvJyxcblx0XHR9KSxcblx0XHR3YXRjaHRoaXM6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnV2F0Y2ggdGhpcyBwYWdlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ebkeinhuatpOmhtemdoicsXG5cdFx0XHQnemgtaGFudCc6ICfnm6PoppbmraTpoIHpnaInLFxuXHRcdH0pLFxuXHRcdGNvcHlyaWdodHdhcm5pbmc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnPHA+QnkgY2xpY2tpbmcgdGhlIGJ1dHRvbiwgeW91IGFncmVlIHRvIHRoZSA8aT48YSBocmVmPVwiL3dpa2kvUVc6VE9TXCIgdGl0bGU9XCJUZXJtcyBvZiBVc2VcIj5UZXJtcyBvZiBVc2U8L2E+PC9pPiwgPGk+PGEgaHJlZj1cIi93aWtpL1FXOkdUR0xcIiB0aXRsZT1cIkNvbW1vbiBQcm9ncmFtXCI+Q29tbW9uIFByb2dyYW08L2E+PC9pPiwgYW5kIHRoZSA8aT48YSBocmVmPVwiL3dpa2kvUWl1d2VuOkNQXCIgdGl0bGU9XCJDb3B5cmlnaHQgUG9saWN5XCI+Q29weXJpZ2h0IFBvbGljeTwvYT48L2k+LiBZb3UgYWdyZWUgdG8gcmVsZWFzZWQgYWxsIHlvdXIgY29udHJpYnV0aW9ucyB1bmRlciB0aGUgPGk+PGEgaHJlZj1cIi93aWtpL1FpdXdlbjpDQy1CWS1TQS00LjBcIiB0aXRsZT1cIkNyZWF0aXZlIENvbW1vbnMgQXR0cmlidXRpb24tU2hhcmVBbGlrZSA0LjAgSW50ZXJuYXRpb25hbCAoQ0MgQlktU0EgNC4wKVwiPkNyZWF0aXZlIENvbW1vbnMgQXR0cmlidXRpb24tU2hhcmVBbGlrZSA0LjAgSW50ZXJuYXRpb25hbCAoQ0MgQlktU0EgNC4wKTwvYT48L2k+LiBZb3UgcHJvbWlzZSB0byB1cyB0aGF0IHRoZSBjb250ZW50IHlvdSBzdWJtaXQgZG9lcyBub3QgaW52b2x2ZSBpbiBjb3B5cmlnaHQgaW5mcmluZ2VtZW50IG9yIGluZnJpbmdlbWVudCBvbiBsZWdpdGltYXRlIHJpZ2h0cyBhbmQgaW50ZXJlc3RzIG9mIG90aGVycy48YnI+PGI+SWYgeW91IGRvIG5vdCBhZ3JlZSB0byB0ZXJtcyBhbmQgcG9saWNpZXMgbWVudGlvbmVkIGFib3ZlLCBwbGVhc2UgZG8gbm90IHN1Ym1pdCB5b3VyIHdvcmsuPC9iPjwvcD4nLFxuXHRcdFx0J3poLWhhbnMnOlxuXHRcdFx0XHQnPHA+54K55Ye74oCcPGI+JDE8L2I+4oCd5oyJ6ZKu77yM5Y2z6KGo56S65oKoPGI+5ZCM5oSPPC9iPuOAijxiPjxhIGhyZWY9XCIvd2lraS9RVzpUT1NcIiB0aXRsZT1cIuaxgumXu+eZvuenkeeUqOaIt+WNj+iurlwiPuaxgumXu+eZvuenkeeUqOaIt+WNj+iurjwvYT48L2I+44CL44CB44CKPGI+PGEgaHJlZj1cIi93aWtpL1FXOkdUR0xcIiB0aXRsZT1cIuaxgumXu+eZvuenkeWFseWQjOe6sumihlwiPuaxgumXu+eZvuenkeWFseWQjOe6sumihjwvYT48L2I+44CL5Y+K5pys572R56uZPGI+PGEgaHJlZj1cIi93aWtpL1FpdXdlbjpDUFwiIHRpdGxlPVwi6JGX5L2c5p2D5pa56ZKIXCI+6JGX5L2c5p2D5pa56ZKIPC9hPjwvYj7vvIw8Yj7lkIzmhI88L2I+5L6d5o2uPGI+PGEgaHJlZj1cIi93aWtpL0hlbHA6Q0MtQlktU0EtNC4wXCIgdGl0bGU9XCLnn6Xor4blhbHkuqsg572y5ZCN4oCU55u45ZCM5pa55byP5YWx5LqrIDQuMCDljY/orq7lm73pmYXniYhcIj5DQy1CWS1TQSA0LjA8L2E+PC9iPuWNj+iuruaOiOadg+S7luS6uuS9v+eUqOaCqOaJgOWPkeW4g+eahOWGheWuue+8jOW5tjxiPuaJv+ivujwvYj7miYDmj5DkuqTnmoTlhoXlrrnkuI3kvrXniq/ku5bkurrnmoTokZfkvZzmnYPlj4rlhbbku5blkIjms5XmnYPnm4rjgII8YnI+6Iul5oKo5LiN5ZCM5oSP44CK55So5oi35Y2P6K6u44CL44CB44CK5YWx5ZCM57qy6aKG44CL5oiW5pys572R56uZ6JGX5L2c5p2D5pa56ZKI77yM6K+35Yu/54K55Ye75oyJ6ZKu5Y+R5biD5YaF5a6544CCPC9wPicsXG5cdFx0XHQnemgtaGFudCc6XG5cdFx0XHRcdCc8cD7pu57mk4rigJw8Yj4kMTwvYj7igJ3mjInpiJXvvIzljbPooajnpLrmgqg8Yj7lkIzmhI88L2I+44CKPGI+PGEgaHJlZj1cIi93aWtpL1FXOlRPU1wiIHRpdGxlPVwi5rGC6IGe55m+56eR55So5oi25Y2U6K2wXCI+5rGC6IGe55m+56eR55So5oi25Y2U6K2wPC9hPjwvYj7jgIvjgIHjgIo8Yj48YSBocmVmPVwiL3dpa2kvUVc6R1RHTFwiIHRpdGxlPVwi5rGC6IGe55m+56eR5YWx5ZCM57ax6aCYXCI+5rGC6IGe55m+56eR5YWx5ZCM57ax6aCYPC9hPjwvYj7jgIvlj4rmnKzntrLnq5k8Yj48YSBocmVmPVwiL3dpa2kvUWl1d2VuOkNQXCIgdGl0bGU9XCLokZfkvZzmrIrmlrnph51cIj7okZfkvZzmrIrmlrnph508L2E+PC9iPu+8jDxiPuWQjOaEjzwvYj7kvp3mk5o8Yj48YSBocmVmPVwiL3dpa2kvSGVscDpDQy1CWS1TQS00LjBcIiB0aXRsZT1cIuWJteeUqENDIOWnk+WQjeaomeekuuKUgOebuOWQjOaWueW8j+WIhuS6qyA0LjAg5ZyL6ZqbXCI+Q0MtQlktU0EgNC4wPC9hPjwvYj7ljZTorbDmjojmrIrku5bkurrkvb/nlKjmgqjmiYDnmbzluIPnmoTlhaflrrnvvIzkuKY8Yj7mib/oq748L2I+5omA5o+Q5Lqk55qE5YWn5a655LiN5L6154qv5LuW5Lq655qE6JGX5L2c5qyK5Y+K5YW25LuW5ZCI5rOV5qyK55uK44CCPGJyPuiLpeaCqOS4jeWQjOaEj+OAiueUqOaItuWNlOitsOOAi+OAgeOAiuWFseWQjOe2semgmOOAi+aIluacrOe2suermeiRl+S9nOasiuaWuemHne+8jOiri+WLv+m7nuaTiuaMiemIleeZvOW4g+WFp+WuueOAgjwvcD4nLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IERJQUxPR19MSUNFTlNFX0lEID0gJ3ZlLXVpLW13U2F2ZURpYWxvZy1saWNlbnNlJztcblxuY29uc3QgcHJvY2Vzc1Zpc3VhbEVkaXRvciA9ICh7JGJvZHl9OiB7JGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+fSkgPT4ge1xuXHQvLyBNaXNzaW5nIGNvcHlyaWdodCB3YXJuaW5nXG5cdGlmICghJGJvZHkuZmluZChgLiR7RElBTE9HX0xJQ0VOU0VfSUR9YCkuY2hpbGRyZW4oKS5sZW5ndGgpIHtcblx0XHQkYm9keVxuXHRcdFx0LmZpbmQoYC4ke0RJQUxPR19MSUNFTlNFX0lEfWApXG5cdFx0XHQuYXBwZW5kKCQoJzxkaXY+JykuYWRkQ2xhc3MoJ2ZtYm94IHBsYWlubGlua3MgZm1ib3gtc3lzdGVtJykuaHRtbChnZXRNZXNzYWdlKCdjb3B5cmlnaHR3YXJuaW5nJykpKTtcblx0fVxufTtcblxuZXhwb3J0IHtwcm9jZXNzVmlzdWFsRWRpdG9yfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEscUJBQXNCQyxRQUFBLGlCQUFBOztBQ0F0QixJQUFBQyxvQkFBdUJELFFBQUEsaUJBQUE7QUFFdkIsSUFBTUUsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsWUFBQSxHQUFXRixrQkFBQUcsVUFBUztNQUNuQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEQyxZQUFBLEdBQVdMLGtCQUFBRyxVQUFTO01BQ25CQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RFLG1CQUFBLEdBQWtCTixrQkFBQUcsVUFBUztNQUMxQkMsSUFBSTtNQUNKLFdBQ0M7TUFDRCxXQUNDO0lBQ0YsQ0FBQztFQUNGO0FBQ0Q7QUFFQSxJQUFNRyxlQUFlTixnQkFBZ0I7QUFFckMsSUFBTU8sYUFBZ0RDLFNBQVE7QUFDN0QsU0FBT0YsYUFBYUUsR0FBRyxLQUFLQTtBQUM3Qjs7QUMxQkEsSUFBTUMsb0JBQW9CO0FBRTFCLElBQU1DLHNCQUFzQkEsQ0FBQztFQUFDQztBQUFLLE1BQXdDO0FBRTFFLE1BQUksQ0FBQ0EsTUFBTUMsS0FBQSxJQUFBQyxPQUFTSixpQkFBaUIsQ0FBRSxFQUFFSyxTQUFTLEVBQUVDLFFBQVE7QUFDM0RKLFVBQ0VDLEtBQUEsSUFBQUMsT0FBU0osaUJBQWlCLENBQUUsRUFDNUJPLE9BQU9DLEVBQUUsT0FBTyxFQUFFQyxTQUFTLCtCQUErQixFQUFFQyxLQUFLWixXQUFXLGtCQUFrQixDQUFDLENBQUM7RUFDbkc7QUFDRDs7QUZKQSxNQUFBLEdBQUtWLG1CQUFBdUIsU0FBUSxFQUFFQyxLQUFLLFNBQVNDLFNBQVNYLE9BQXNDO0FBQzNFWSxLQUFHQyxTQUFTQyxJQUFJO0lBQUN4QixXQUFXTSxXQUFXLFdBQVc7SUFBR0gsV0FBV0csV0FBVyxXQUFXO0VBQUMsQ0FBQztBQUV4RmdCLEtBQUdHLEtBQUssNEJBQTRCLEVBQUVDLElBQUksTUFBWTtBQUNyRGpCLHdCQUFvQjtNQUNuQkM7SUFDRCxDQUFDO0VBQ0YsQ0FBQztBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJtaW5vcmVkaXQiLCAibG9jYWxpemUiLCAiZW4iLCAid2F0Y2h0aGlzIiwgImNvcHlyaWdodHdhcm5pbmciLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgIkRJQUxPR19MSUNFTlNFX0lEIiwgInByb2Nlc3NWaXN1YWxFZGl0b3IiLCAiJGJvZHkiLCAiZmluZCIsICJjb25jYXQiLCAiY2hpbGRyZW4iLCAibGVuZ3RoIiwgImFwcGVuZCIsICIkIiwgImFkZENsYXNzIiwgImh0bWwiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgImVkaXRGb3JtIiwgIm13IiwgIm1lc3NhZ2VzIiwgInNldCIsICJob29rIiwgImFkZCJdCn0K

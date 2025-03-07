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
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var n = 0, F = function() {
      };
      return { s: F, n: function() {
        return n >= r.length ? { done: true } : { done: false, value: r[n++] };
      }, e: function(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u = false;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function(r2) {
    u = true, o = r2;
  }, f: function() {
    try {
      a || null == t.return || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
//! src/Editform_Patch2017/Editform_Patch2017.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/Editform_Patch2017/options.json
var dialogLicenseId = "ve-ui-mwSaveDialog-license";
var targetClass = "ve-ui-mwSaveDialog-checkboxes";
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
      en: '<p>By clicking the "Save page" or "Save changes" button, you agree to the <i><a href="/wiki/QW:TOS" title="Terms of Use">Terms of Use</a></i>, <i><a href="/wiki/QW:GTGL" title="Common Program">Common Program</a></i>, and the <i><a href="/wiki/Qiuwen:CP" title="Copyright Policy">Copyright Policy</a></i>. You agree to released all your contributions under the <i><a href="/wiki/Qiuwen:CC-BY-SA-4.0" title="Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)">Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)</a></i>. You promise to us that the content you submit does not involve in copyright infringement or infringement on legitimate rights and interests of others.<br><b>If you do not agree to terms and policies mentioned above, please do not submit your work.</b></p>',
      "zh-hans": '<p>点击“<b>保存页面</b>”或“<b>保存更改</b>”按钮，即表示您<b>同意</b>《<b><a href="/wiki/QW:TOS" title="求闻百科用户协议">求闻百科用户协议</a></b>》、《<b><a href="/wiki/QW:GTGL" title="求闻百科共同纲领">求闻百科共同纲领</a></b>》及本网站<b><a href="/wiki/Qiuwen:CP" title="著作权方针">著作权方针</a></b>，<b>同意</b>依据<b><a href="/wiki/Help:CC-BY-SA-4.0" title="知识共享 署名—相同方式共享 4.0 协议国际版">CC-BY-SA 4.0</a></b>协议授权他人使用您所发布的内容，并<b>承诺</b>所提交的内容不侵犯他人的著作权及其他合法权益。<br>若您不同意《用户协议》、《共同纲领》或本网站著作权方针，请勿点击按钮发布内容。</p>',
      "zh-hant": '<p>點擊“<b>儲存頁面</b>”或“<b>儲存變更</b>”按鈕，即表示您<b>同意</b>《<b><a href="/wiki/QW:TOS" title="求聞百科用戶協議">求聞百科用戶協議</a></b>》、《<b><a href="/wiki/QW:GTGL" title="求聞百科共同綱領">求聞百科共同綱領</a></b>》及本網站<b><a href="/wiki/Qiuwen:CP" title="著作權方針">著作權方針</a></b>，<b>同意</b>依據<b><a href="/wiki/Help:CC-BY-SA-4.0" title="創用CC 姓名標示─相同方式分享 4.0 國際">CC-BY-SA 4.0</a></b>協議授權他人使用您所發布的內容，並<b>承諾</b>所提交的內容不侵犯他人的著作權及其他合法權益。<br>若您不同意《用戶協議》、《共同綱領》或本網站著作權方針，請勿點擊按鈕發布內容。</p>'
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
var setMessages = () => {
  mw.messages.set({
    minoredit: getMessage("minoredit"),
    watchthis: getMessage("watchthis")
  });
};
//! src/Editform_Patch2017/modules/processVisualEditor.ts
var processVisualEditor = ($body) => {
  const $labels = $body.find(".".concat(targetClass)).find("label");
  var _iterator = _createForOfIteratorHelper($labels), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var _label$textContent;
      const label = _step.value;
      if (!((_label$textContent = label.textContent) !== null && _label$textContent !== void 0 && _label$textContent.startsWith("⧼"))) {
        continue;
      }
      const labelName = label.textContent.replace("⧼", "").replace("⧽", "");
      if (["minoredit", "watchthis"].includes(labelName)) {
        label.textContent = getMessage(labelName);
        label.title = getMessage(labelName);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  if (!$body.find(".".concat(dialogLicenseId)).children().length) {
    $body.find(".".concat(dialogLicenseId)).append($("<div>").addClass("fmbox plainlinks fmbox-system").append($("<div>").addClass("mbox-text").html(getMessage("copyrightwarning"))));
  }
};
//! src/Editform_Patch2017/Editform_Patch2017.ts
void (0, import_ext_gadget2.getBody)().then(function editForm($body) {
  setMessages();
  mw.hook("ve.saveDialog.stateChanged").add(() => {
    processVisualEditor($body);
  });
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL0VkaXRmb3JtX1BhdGNoMjAxNy9FZGl0Zm9ybV9QYXRjaDIwMTcudHMiLCAiLi4vLi4vc3JjL0VkaXRmb3JtX1BhdGNoMjAxNy9vcHRpb25zLmpzb24iLCAiLi4vLi4vc3JjL0VkaXRmb3JtX1BhdGNoMjAxNy9tb2R1bGVzL2kxOG4udHMiLCAiLi4vLi4vc3JjL0VkaXRmb3JtX1BhdGNoMjAxNy9tb2R1bGVzL3Byb2Nlc3NWaXN1YWxFZGl0b3IudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7cHJvY2Vzc1Zpc3VhbEVkaXRvcn0gZnJvbSAnLi9tb2R1bGVzL3Byb2Nlc3NWaXN1YWxFZGl0b3InO1xuaW1wb3J0IHtzZXRNZXNzYWdlc30gZnJvbSAnLi9tb2R1bGVzL2kxOG4nO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiDkv67mraMyMDE354mI5rqQ5Luj56CB57yW6L6R5Zmo55WM6Z2i6ZSZ6K+vXG4gKi9cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oZnVuY3Rpb24gZWRpdEZvcm0oJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCB7XG5cdHNldE1lc3NhZ2VzKCk7XG5cblx0bXcuaG9vaygndmUuc2F2ZURpYWxvZy5zdGF0ZUNoYW5nZWQnKS5hZGQoKCk6IHZvaWQgPT4ge1xuXHRcdHByb2Nlc3NWaXN1YWxFZGl0b3IoJGJvZHkpO1xuXHR9KTtcbn0pO1xuIiwgIntcblx0XCJkaWFsb2dMaWNlbnNlSWRcIjogXCJ2ZS11aS1td1NhdmVEaWFsb2ctbGljZW5zZVwiLFxuXHRcInRhcmdldENsYXNzXCI6IFwidmUtdWktbXdTYXZlRGlhbG9nLWNoZWNrYm94ZXNcIlxufVxuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRtaW5vcmVkaXQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhpcyBpcyBhIG1pbm9yIGVkaXQnLFxuXHRcdFx0J3poLWhhbnMnOiAn6L+Z5piv5LiA5qyh5bCP57yW6L6RJyxcblx0XHRcdCd6aC1oYW50JzogJ+mAmeaYr+asoeimgee3qOi8rycsXG5cdFx0fSksXG5cdFx0d2F0Y2h0aGlzOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1dhdGNoIHRoaXMgcGFnZScsXG5cdFx0XHQnemgtaGFucyc6ICfnm5Hop4bmraTpobXpnaInLFxuXHRcdFx0J3poLWhhbnQnOiAn55uj6KaW5q2k6aCB6Z2iJyxcblx0XHR9KSxcblx0XHRjb3B5cmlnaHR3YXJuaW5nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJzxwPkJ5IGNsaWNraW5nIHRoZSBcIlNhdmUgcGFnZVwiIG9yIFwiU2F2ZSBjaGFuZ2VzXCIgYnV0dG9uLCB5b3UgYWdyZWUgdG8gdGhlIDxpPjxhIGhyZWY9XCIvd2lraS9RVzpUT1NcIiB0aXRsZT1cIlRlcm1zIG9mIFVzZVwiPlRlcm1zIG9mIFVzZTwvYT48L2k+LCA8aT48YSBocmVmPVwiL3dpa2kvUVc6R1RHTFwiIHRpdGxlPVwiQ29tbW9uIFByb2dyYW1cIj5Db21tb24gUHJvZ3JhbTwvYT48L2k+LCBhbmQgdGhlIDxpPjxhIGhyZWY9XCIvd2lraS9RaXV3ZW46Q1BcIiB0aXRsZT1cIkNvcHlyaWdodCBQb2xpY3lcIj5Db3B5cmlnaHQgUG9saWN5PC9hPjwvaT4uIFlvdSBhZ3JlZSB0byByZWxlYXNlZCBhbGwgeW91ciBjb250cmlidXRpb25zIHVuZGVyIHRoZSA8aT48YSBocmVmPVwiL3dpa2kvUWl1d2VuOkNDLUJZLVNBLTQuMFwiIHRpdGxlPVwiQ3JlYXRpdmUgQ29tbW9ucyBBdHRyaWJ1dGlvbi1TaGFyZUFsaWtlIDQuMCBJbnRlcm5hdGlvbmFsIChDQyBCWS1TQSA0LjApXCI+Q3JlYXRpdmUgQ29tbW9ucyBBdHRyaWJ1dGlvbi1TaGFyZUFsaWtlIDQuMCBJbnRlcm5hdGlvbmFsIChDQyBCWS1TQSA0LjApPC9hPjwvaT4uIFlvdSBwcm9taXNlIHRvIHVzIHRoYXQgdGhlIGNvbnRlbnQgeW91IHN1Ym1pdCBkb2VzIG5vdCBpbnZvbHZlIGluIGNvcHlyaWdodCBpbmZyaW5nZW1lbnQgb3IgaW5mcmluZ2VtZW50IG9uIGxlZ2l0aW1hdGUgcmlnaHRzIGFuZCBpbnRlcmVzdHMgb2Ygb3RoZXJzLjxicj48Yj5JZiB5b3UgZG8gbm90IGFncmVlIHRvIHRlcm1zIGFuZCBwb2xpY2llcyBtZW50aW9uZWQgYWJvdmUsIHBsZWFzZSBkbyBub3Qgc3VibWl0IHlvdXIgd29yay48L2I+PC9wPicsXG5cdFx0XHQnemgtaGFucyc6XG5cdFx0XHRcdCc8cD7ngrnlh7vigJw8Yj7kv53lrZjpobXpnaI8L2I+4oCd5oiW4oCcPGI+5L+d5a2Y5pu05pS5PC9iPuKAneaMiemSru+8jOWNs+ihqOekuuaCqDxiPuWQjOaEjzwvYj7jgIo8Yj48YSBocmVmPVwiL3dpa2kvUVc6VE9TXCIgdGl0bGU9XCLmsYLpl7vnmb7np5HnlKjmiLfljY/orq5cIj7msYLpl7vnmb7np5HnlKjmiLfljY/orq48L2E+PC9iPuOAi+OAgeOAijxiPjxhIGhyZWY9XCIvd2lraS9RVzpHVEdMXCIgdGl0bGU9XCLmsYLpl7vnmb7np5HlhbHlkIznurLpooZcIj7msYLpl7vnmb7np5HlhbHlkIznurLpooY8L2E+PC9iPuOAi+WPiuacrOe9keermTxiPjxhIGhyZWY9XCIvd2lraS9RaXV3ZW46Q1BcIiB0aXRsZT1cIuiRl+S9nOadg+aWuemSiFwiPuiRl+S9nOadg+aWuemSiDwvYT48L2I+77yMPGI+5ZCM5oSPPC9iPuS+neaNrjxiPjxhIGhyZWY9XCIvd2lraS9IZWxwOkNDLUJZLVNBLTQuMFwiIHRpdGxlPVwi55+l6K+G5YWx5LqrIOe9suWQjeKAlOebuOWQjOaWueW8j+WFseS6qyA0LjAg5Y2P6K6u5Zu96ZmF54mIXCI+Q0MtQlktU0EgNC4wPC9hPjwvYj7ljY/orq7mjojmnYPku5bkurrkvb/nlKjmgqjmiYDlj5HluIPnmoTlhoXlrrnvvIzlubY8Yj7mib/or7o8L2I+5omA5o+Q5Lqk55qE5YaF5a655LiN5L6154qv5LuW5Lq655qE6JGX5L2c5p2D5Y+K5YW25LuW5ZCI5rOV5p2D55uK44CCPGJyPuiLpeaCqOS4jeWQjOaEj+OAiueUqOaIt+WNj+iuruOAi+OAgeOAiuWFseWQjOe6sumihuOAi+aIluacrOe9keermeiRl+S9nOadg+aWuemSiO+8jOivt+WLv+eCueWHu+aMiemSruWPkeW4g+WGheWuueOAgjwvcD4nLFxuXHRcdFx0J3poLWhhbnQnOlxuXHRcdFx0XHQnPHA+6bue5pOK4oCcPGI+5YSy5a2Y6aCB6Z2iPC9iPuKAneaIluKAnDxiPuWEsuWtmOiuiuabtDwvYj7igJ3mjInpiJXvvIzljbPooajnpLrmgqg8Yj7lkIzmhI88L2I+44CKPGI+PGEgaHJlZj1cIi93aWtpL1FXOlRPU1wiIHRpdGxlPVwi5rGC6IGe55m+56eR55So5oi25Y2U6K2wXCI+5rGC6IGe55m+56eR55So5oi25Y2U6K2wPC9hPjwvYj7jgIvjgIHjgIo8Yj48YSBocmVmPVwiL3dpa2kvUVc6R1RHTFwiIHRpdGxlPVwi5rGC6IGe55m+56eR5YWx5ZCM57ax6aCYXCI+5rGC6IGe55m+56eR5YWx5ZCM57ax6aCYPC9hPjwvYj7jgIvlj4rmnKzntrLnq5k8Yj48YSBocmVmPVwiL3dpa2kvUWl1d2VuOkNQXCIgdGl0bGU9XCLokZfkvZzmrIrmlrnph51cIj7okZfkvZzmrIrmlrnph508L2E+PC9iPu+8jDxiPuWQjOaEjzwvYj7kvp3mk5o8Yj48YSBocmVmPVwiL3dpa2kvSGVscDpDQy1CWS1TQS00LjBcIiB0aXRsZT1cIuWJteeUqENDIOWnk+WQjeaomeekuuKUgOebuOWQjOaWueW8j+WIhuS6qyA0LjAg5ZyL6ZqbXCI+Q0MtQlktU0EgNC4wPC9hPjwvYj7ljZTorbDmjojmrIrku5bkurrkvb/nlKjmgqjmiYDnmbzluIPnmoTlhaflrrnvvIzkuKY8Yj7mib/oq748L2I+5omA5o+Q5Lqk55qE5YWn5a655LiN5L6154qv5LuW5Lq655qE6JGX5L2c5qyK5Y+K5YW25LuW5ZCI5rOV5qyK55uK44CCPGJyPuiLpeaCqOS4jeWQjOaEj+OAiueUqOaItuWNlOitsOOAi+OAgeOAiuWFseWQjOe2semgmOOAi+aIluacrOe2suermeiRl+S9nOasiuaWuemHne+8jOiri+WLv+m7nuaTiuaMiemIleeZvOW4g+WFp+WuueOAgjwvcD4nLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuY29uc3Qgc2V0TWVzc2FnZXMgPSAoKSA9PiB7XG5cdG13Lm1lc3NhZ2VzLnNldCh7bWlub3JlZGl0OiBnZXRNZXNzYWdlKCdtaW5vcmVkaXQnKSwgd2F0Y2h0aGlzOiBnZXRNZXNzYWdlKCd3YXRjaHRoaXMnKX0pO1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlLCBzZXRNZXNzYWdlc307XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICd+L0VkaXRmb3JtX1BhdGNoMjAxNy9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBwcm9jZXNzVmlzdWFsRWRpdG9yID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHQvLyBNaXNzaW5nIGxhYmVsIG1lc3NhZ2VzXG5cdGNvbnN0ICRsYWJlbHM6IEpRdWVyeSA9ICRib2R5LmZpbmQoYC4ke09QVElPTlMudGFyZ2V0Q2xhc3N9YCkuZmluZCgnbGFiZWwnKTtcblx0Zm9yIChjb25zdCBsYWJlbCBvZiAkbGFiZWxzKSB7XG5cdFx0aWYgKCFsYWJlbC50ZXh0Q29udGVudD8uc3RhcnRzV2l0aCgn4qe8JykpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGxhYmVsTmFtZSA9IGxhYmVsLnRleHRDb250ZW50LnJlcGxhY2UoJ+KnvCcsICcnKS5yZXBsYWNlKCfip70nLCAnJyk7XG5cblx0XHRpZiAoWydtaW5vcmVkaXQnLCAnd2F0Y2h0aGlzJ10uaW5jbHVkZXMobGFiZWxOYW1lKSkge1xuXHRcdFx0bGFiZWwudGV4dENvbnRlbnQgPSBnZXRNZXNzYWdlKGxhYmVsTmFtZSBhcyAnbWlub3JlZGl0JyB8ICd3YXRjaHRoaXMnKTtcblx0XHRcdGxhYmVsLnRpdGxlID0gZ2V0TWVzc2FnZShsYWJlbE5hbWUgYXMgJ21pbm9yZWRpdCcgfCAnd2F0Y2h0aGlzJyk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gTWlzc2luZyBjb3B5cmlnaHQgd2FybmluZ1xuXHRpZiAoISRib2R5LmZpbmQoYC4ke09QVElPTlMuZGlhbG9nTGljZW5zZUlkfWApLmNoaWxkcmVuKCkubGVuZ3RoKSB7XG5cdFx0JGJvZHkuZmluZChgLiR7T1BUSU9OUy5kaWFsb2dMaWNlbnNlSWR9YCkuYXBwZW5kKFxuXHRcdFx0JCgnPGRpdj4nKVxuXHRcdFx0XHQuYWRkQ2xhc3MoJ2ZtYm94IHBsYWlubGlua3MgZm1ib3gtc3lzdGVtJylcblx0XHRcdFx0LmFwcGVuZCgkKCc8ZGl2PicpLmFkZENsYXNzKCdtYm94LXRleHQnKS5odG1sKGdldE1lc3NhZ2UoJ2NvcHlyaWdodHdhcm5pbmcnKSkpXG5cdFx0KTtcblx0fVxufTtcblxuZXhwb3J0IHtwcm9jZXNzVmlzdWFsRWRpdG9yfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFCQUFzQkMsUUFBQSxpQkFBQTs7QUNDckIsSUFBQUMsa0JBQW1CO0FBQ25CLElBQUFDLGNBQWU7O0FDRmhCLElBQUFDLG9CQUF1QkgsUUFBQSxpQkFBQTtBQUV2QixJQUFNSSxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOQyxZQUFBLEdBQVdGLGtCQUFBRyxVQUFTO01BQ25CQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RDLFlBQUEsR0FBV0wsa0JBQUFHLFVBQVM7TUFDbkJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREUsbUJBQUEsR0FBa0JOLGtCQUFBRyxVQUFTO01BQzFCQyxJQUFJO01BQ0osV0FDQztNQUNELFdBQ0M7SUFDRixDQUFDO0VBQ0Y7QUFDRDtBQUVBLElBQU1HLGVBQWVOLGdCQUFnQjtBQUVyQyxJQUFNTyxhQUFnREMsU0FBUTtBQUM3RCxTQUFPRixhQUFhRSxHQUFHLEtBQUtBO0FBQzdCO0FBRUEsSUFBTUMsY0FBY0EsTUFBTTtBQUN6QkMsS0FBR0MsU0FBU0MsSUFBSTtJQUFDWCxXQUFXTSxXQUFXLFdBQVc7SUFBR0gsV0FBV0csV0FBVyxXQUFXO0VBQUMsQ0FBQztBQUN6Rjs7QUM3QkEsSUFBTU0sc0JBQXVCQyxXQUF5QztBQUVyRSxRQUFNQyxVQUFrQkQsTUFBTUUsS0FBQSxJQUFBQyxPQUFpQm5CLFdBQVcsQ0FBRSxFQUFFa0IsS0FBSyxPQUFPO0FBQUEsTUFBQUUsWUFBQUMsMkJBQ3RESixPQUFBLEdBQUFLO0FBQUEsTUFBQTtBQUFwQixTQUFBRixVQUFBRyxFQUFBLEdBQUEsRUFBQUQsUUFBQUYsVUFBQUksRUFBQSxHQUFBQyxRQUE2QjtBQUFBLFVBQUFDO0FBQUEsWUFBbEJDLFFBQUFMLE1BQUFNO0FBQ1YsVUFBSSxHQUFBRixxQkFBQ0MsTUFBTUUsaUJBQUEsUUFBQUgsdUJBQUEsVUFBTkEsbUJBQW1CSSxXQUFXLEdBQUcsSUFBRztBQUN4QztNQUNEO0FBRUEsWUFBTUMsWUFBWUosTUFBTUUsWUFBWUcsUUFBUSxLQUFLLEVBQUUsRUFBRUEsUUFBUSxLQUFLLEVBQUU7QUFFcEUsVUFBSSxDQUFDLGFBQWEsV0FBVyxFQUFFQyxTQUFTRixTQUFTLEdBQUc7QUFDbkRKLGNBQU1FLGNBQWNwQixXQUFXc0IsU0FBc0M7QUFDckVKLGNBQU1PLFFBQVF6QixXQUFXc0IsU0FBc0M7TUFDaEU7SUFDRDtFQUFBLFNBQUFJLEtBQUE7QUFBQWYsY0FBQWdCLEVBQUFELEdBQUE7RUFBQSxVQUFBO0FBQUFmLGNBQUFpQixFQUFBO0VBQUE7QUFHQSxNQUFJLENBQUNyQixNQUFNRSxLQUFBLElBQUFDLE9BQWlCcEIsZUFBZSxDQUFFLEVBQUV1QyxTQUFTLEVBQUVDLFFBQVE7QUFDakV2QixVQUFNRSxLQUFBLElBQUFDLE9BQWlCcEIsZUFBZSxDQUFFLEVBQUV5QyxPQUN6Q0MsRUFBRSxPQUFPLEVBQ1BDLFNBQVMsK0JBQStCLEVBQ3hDRixPQUFPQyxFQUFFLE9BQU8sRUFBRUMsU0FBUyxXQUFXLEVBQUVDLEtBQUtsQyxXQUFXLGtCQUFrQixDQUFDLENBQUMsQ0FDL0U7RUFDRDtBQUNEOztBSHBCQSxNQUFBLEdBQUtaLG1CQUFBK0MsU0FBUSxFQUFFQyxLQUFLLFNBQVNDLFNBQVM5QixPQUFzQztBQUMzRUwsY0FBWTtBQUVaQyxLQUFHbUMsS0FBSyw0QkFBNEIsRUFBRUMsSUFBSSxNQUFZO0FBQ3JEakMsd0JBQW9CQyxLQUFLO0VBQzFCLENBQUM7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldDIiLCAicmVxdWlyZSIsICJkaWFsb2dMaWNlbnNlSWQiLCAidGFyZ2V0Q2xhc3MiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIm1pbm9yZWRpdCIsICJsb2NhbGl6ZSIsICJlbiIsICJ3YXRjaHRoaXMiLCAiY29weXJpZ2h0d2FybmluZyIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAic2V0TWVzc2FnZXMiLCAibXciLCAibWVzc2FnZXMiLCAic2V0IiwgInByb2Nlc3NWaXN1YWxFZGl0b3IiLCAiJGJvZHkiLCAiJGxhYmVscyIsICJmaW5kIiwgImNvbmNhdCIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiX2xhYmVsJHRleHRDb250ZW50IiwgImxhYmVsIiwgInZhbHVlIiwgInRleHRDb250ZW50IiwgInN0YXJ0c1dpdGgiLCAibGFiZWxOYW1lIiwgInJlcGxhY2UiLCAiaW5jbHVkZXMiLCAidGl0bGUiLCAiZXJyIiwgImUiLCAiZiIsICJjaGlsZHJlbiIsICJsZW5ndGgiLCAiYXBwZW5kIiwgIiQiLCAiYWRkQ2xhc3MiLCAiaHRtbCIsICJnZXRCb2R5IiwgInRoZW4iLCAiZWRpdEZvcm0iLCAiaG9vayIsICJhZGQiXQp9Cg==

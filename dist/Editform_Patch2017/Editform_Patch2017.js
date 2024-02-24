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
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function() {
      };
      return { s: F, n: function() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function(e) {
        throw e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function(e) {
    didErr = true;
    err = e;
  }, f: function() {
    try {
      if (!normalCompletion && it.return != null)
        it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
//! src/Editform_Patch2017/Editform_Patch2017.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/Editform_Patch2017/modules/constant.ts
var DIALOG_LICENSE_ID = "ve-ui-mwSaveDialog-license";
var TARGET_CLASS = "ve-ui-mwSaveDialog-checkboxes";
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
var processVisualEditor = ({
  $body
}) => {
  const $labels = $body.find(".".concat(TARGET_CLASS)).find("label");
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
  if (!$body.find(".".concat(DIALOG_LICENSE_ID)).children().length) {
    $body.find(".".concat(DIALOG_LICENSE_ID)).append($("<div>").addClass("fmbox plainlinks fmbox-system").append($("<div>").addClass("mbox-text").html(getMessage("copyrightwarning"))));
  }
};
//! src/Editform_Patch2017/Editform_Patch2017.ts
void (0, import_ext_gadget2.getBody)().then(function editForm($body) {
  setMessages();
  mw.hook("ve.saveDialog.stateChanged").add(() => {
    processVisualEditor({
      $body
    });
  });
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXRmb3JtX1BhdGNoMjAxNy9FZGl0Zm9ybV9QYXRjaDIwMTcudHMiLCAic3JjL0VkaXRmb3JtX1BhdGNoMjAxNy9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9FZGl0Zm9ybV9QYXRjaDIwMTcvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9FZGl0Zm9ybV9QYXRjaDIwMTcvbW9kdWxlcy9wcm9jZXNzVmlzdWFsRWRpdG9yLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3Byb2Nlc3NWaXN1YWxFZGl0b3J9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzVmlzdWFsRWRpdG9yJztcbmltcG9ydCB7c2V0TWVzc2FnZXN9IGZyb20gJy4vbW9kdWxlcy9pMThuJztcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24g5L+u5q2jMjAxN+eJiOa6kOS7o+eggee8lui+keWZqOeVjOmdoumUmeivr1xuICovXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIGVkaXRGb3JtKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQge1xuXHRzZXRNZXNzYWdlcygpO1xuXG5cdG13Lmhvb2soJ3ZlLnNhdmVEaWFsb2cuc3RhdGVDaGFuZ2VkJykuYWRkKCgpOiB2b2lkID0+IHtcblx0XHRwcm9jZXNzVmlzdWFsRWRpdG9yKHtcblx0XHRcdCRib2R5LFxuXHRcdH0pO1xuXHR9KTtcbn0pO1xuIiwgImNvbnN0IERJQUxPR19MSUNFTlNFX0lEID0gJ3ZlLXVpLW13U2F2ZURpYWxvZy1saWNlbnNlJztcbmNvbnN0IFRBUkdFVF9DTEFTUyA9ICd2ZS11aS1td1NhdmVEaWFsb2ctY2hlY2tib3hlcyc7XG5cbmV4cG9ydCB7RElBTE9HX0xJQ0VOU0VfSUQsIFRBUkdFVF9DTEFTU307XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdG1pbm9yZWRpdDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUaGlzIGlzIGEgbWlub3IgZWRpdCcsXG5cdFx0XHQnemgtaGFucyc6ICfov5nmmK/kuIDmrKHlsI/nvJbovpEnLFxuXHRcdFx0J3poLWhhbnQnOiAn6YCZ5piv5qyh6KaB57eo6LyvJyxcblx0XHR9KSxcblx0XHR3YXRjaHRoaXM6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnV2F0Y2ggdGhpcyBwYWdlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ebkeinhuatpOmhtemdoicsXG5cdFx0XHQnemgtaGFudCc6ICfnm6PoppbmraTpoIHpnaInLFxuXHRcdH0pLFxuXHRcdGNvcHlyaWdodHdhcm5pbmc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnPHA+QnkgY2xpY2tpbmcgdGhlIFwiU2F2ZSBwYWdlXCIgb3IgXCJTYXZlIGNoYW5nZXNcIiBidXR0b24sIHlvdSBhZ3JlZSB0byB0aGUgPGk+PGEgaHJlZj1cIi93aWtpL1FXOlRPU1wiIHRpdGxlPVwiVGVybXMgb2YgVXNlXCI+VGVybXMgb2YgVXNlPC9hPjwvaT4sIDxpPjxhIGhyZWY9XCIvd2lraS9RVzpHVEdMXCIgdGl0bGU9XCJDb21tb24gUHJvZ3JhbVwiPkNvbW1vbiBQcm9ncmFtPC9hPjwvaT4sIGFuZCB0aGUgPGk+PGEgaHJlZj1cIi93aWtpL1FpdXdlbjpDUFwiIHRpdGxlPVwiQ29weXJpZ2h0IFBvbGljeVwiPkNvcHlyaWdodCBQb2xpY3k8L2E+PC9pPi4gWW91IGFncmVlIHRvIHJlbGVhc2VkIGFsbCB5b3VyIGNvbnRyaWJ1dGlvbnMgdW5kZXIgdGhlIDxpPjxhIGhyZWY9XCIvd2lraS9RaXV3ZW46Q0MtQlktU0EtNC4wXCIgdGl0bGU9XCJDcmVhdGl2ZSBDb21tb25zIEF0dHJpYnV0aW9uLVNoYXJlQWxpa2UgNC4wIEludGVybmF0aW9uYWwgKENDIEJZLVNBIDQuMClcIj5DcmVhdGl2ZSBDb21tb25zIEF0dHJpYnV0aW9uLVNoYXJlQWxpa2UgNC4wIEludGVybmF0aW9uYWwgKENDIEJZLVNBIDQuMCk8L2E+PC9pPi4gWW91IHByb21pc2UgdG8gdXMgdGhhdCB0aGUgY29udGVudCB5b3Ugc3VibWl0IGRvZXMgbm90IGludm9sdmUgaW4gY29weXJpZ2h0IGluZnJpbmdlbWVudCBvciBpbmZyaW5nZW1lbnQgb24gbGVnaXRpbWF0ZSByaWdodHMgYW5kIGludGVyZXN0cyBvZiBvdGhlcnMuPGJyPjxiPklmIHlvdSBkbyBub3QgYWdyZWUgdG8gdGVybXMgYW5kIHBvbGljaWVzIG1lbnRpb25lZCBhYm92ZSwgcGxlYXNlIGRvIG5vdCBzdWJtaXQgeW91ciB3b3JrLjwvYj48L3A+Jyxcblx0XHRcdCd6aC1oYW5zJzpcblx0XHRcdFx0JzxwPueCueWHu+KAnDxiPuS/neWtmOmhtemdojwvYj7igJ3miJbigJw8Yj7kv53lrZjmm7TmlLk8L2I+4oCd5oyJ6ZKu77yM5Y2z6KGo56S65oKoPGI+5ZCM5oSPPC9iPuOAijxiPjxhIGhyZWY9XCIvd2lraS9RVzpUT1NcIiB0aXRsZT1cIuaxgumXu+eZvuenkeeUqOaIt+WNj+iurlwiPuaxgumXu+eZvuenkeeUqOaIt+WNj+iurjwvYT48L2I+44CL44CB44CKPGI+PGEgaHJlZj1cIi93aWtpL1FXOkdUR0xcIiB0aXRsZT1cIuaxgumXu+eZvuenkeWFseWQjOe6sumihlwiPuaxgumXu+eZvuenkeWFseWQjOe6sumihjwvYT48L2I+44CL5Y+K5pys572R56uZPGI+PGEgaHJlZj1cIi93aWtpL1FpdXdlbjpDUFwiIHRpdGxlPVwi6JGX5L2c5p2D5pa56ZKIXCI+6JGX5L2c5p2D5pa56ZKIPC9hPjwvYj7vvIw8Yj7lkIzmhI88L2I+5L6d5o2uPGI+PGEgaHJlZj1cIi93aWtpL0hlbHA6Q0MtQlktU0EtNC4wXCIgdGl0bGU9XCLnn6Xor4blhbHkuqsg572y5ZCN4oCU55u45ZCM5pa55byP5YWx5LqrIDQuMCDljY/orq7lm73pmYXniYhcIj5DQy1CWS1TQSA0LjA8L2E+PC9iPuWNj+iuruaOiOadg+S7luS6uuS9v+eUqOaCqOaJgOWPkeW4g+eahOWGheWuue+8jOW5tjxiPuaJv+ivujwvYj7miYDmj5DkuqTnmoTlhoXlrrnkuI3kvrXniq/ku5bkurrnmoTokZfkvZzmnYPlj4rlhbbku5blkIjms5XmnYPnm4rjgII8YnI+6Iul5oKo5LiN5ZCM5oSP44CK55So5oi35Y2P6K6u44CL44CB44CK5YWx5ZCM57qy6aKG44CL5oiW5pys572R56uZ6JGX5L2c5p2D5pa56ZKI77yM6K+35Yu/54K55Ye75oyJ6ZKu5Y+R5biD5YaF5a6544CCPC9wPicsXG5cdFx0XHQnemgtaGFudCc6XG5cdFx0XHRcdCc8cD7pu57mk4rigJw8Yj7lhLLlrZjpoIHpnaI8L2I+4oCd5oiW4oCcPGI+5YSy5a2Y6K6K5pu0PC9iPuKAneaMiemIle+8jOWNs+ihqOekuuaCqDxiPuWQjOaEjzwvYj7jgIo8Yj48YSBocmVmPVwiL3dpa2kvUVc6VE9TXCIgdGl0bGU9XCLmsYLogZ7nmb7np5HnlKjmiLbljZTorbBcIj7msYLogZ7nmb7np5HnlKjmiLbljZTorbA8L2E+PC9iPuOAi+OAgeOAijxiPjxhIGhyZWY9XCIvd2lraS9RVzpHVEdMXCIgdGl0bGU9XCLmsYLogZ7nmb7np5HlhbHlkIzntrHpoJhcIj7msYLogZ7nmb7np5HlhbHlkIzntrHpoJg8L2E+PC9iPuOAi+WPiuacrOe2suermTxiPjxhIGhyZWY9XCIvd2lraS9RaXV3ZW46Q1BcIiB0aXRsZT1cIuiRl+S9nOasiuaWuemHnVwiPuiRl+S9nOasiuaWuemHnTwvYT48L2I+77yMPGI+5ZCM5oSPPC9iPuS+neaTmjxiPjxhIGhyZWY9XCIvd2lraS9IZWxwOkNDLUJZLVNBLTQuMFwiIHRpdGxlPVwi5Ym155SoQ0Mg5aeT5ZCN5qiZ56S64pSA55u45ZCM5pa55byP5YiG5LqrIDQuMCDlnIvpmptcIj5DQy1CWS1TQSA0LjA8L2E+PC9iPuWNlOitsOaOiOasiuS7luS6uuS9v+eUqOaCqOaJgOeZvOW4g+eahOWFp+Wuue+8jOS4pjxiPuaJv+irvjwvYj7miYDmj5DkuqTnmoTlhaflrrnkuI3kvrXniq/ku5bkurrnmoTokZfkvZzmrIrlj4rlhbbku5blkIjms5XmrIrnm4rjgII8YnI+6Iul5oKo5LiN5ZCM5oSP44CK55So5oi25Y2U6K2w44CL44CB44CK5YWx5ZCM57ax6aCY44CL5oiW5pys57ay56uZ6JGX5L2c5qyK5pa56Yed77yM6KuL5Yu/6bue5pOK5oyJ6YiV55m85biD5YWn5a6544CCPC9wPicsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5jb25zdCBzZXRNZXNzYWdlcyA9ICgpID0+IHtcblx0bXcubWVzc2FnZXMuc2V0KHttaW5vcmVkaXQ6IGdldE1lc3NhZ2UoJ21pbm9yZWRpdCcpLCB3YXRjaHRoaXM6IGdldE1lc3NhZ2UoJ3dhdGNodGhpcycpfSk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2UsIHNldE1lc3NhZ2VzfTtcbiIsICJpbXBvcnQge0RJQUxPR19MSUNFTlNFX0lELCBUQVJHRVRfQ0xBU1N9IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBwcm9jZXNzVmlzdWFsRWRpdG9yID0gKHskYm9keX06IHskYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD59KSA9PiB7XG5cdC8vIE1pc3NpbmcgbGFiZWwgbWVzc2FnZXNcblx0Y29uc3QgJGxhYmVsczogSlF1ZXJ5ID0gJGJvZHkuZmluZChgLiR7VEFSR0VUX0NMQVNTfWApLmZpbmQoJ2xhYmVsJyk7XG5cdGZvciAoY29uc3QgbGFiZWwgb2YgJGxhYmVscykge1xuXHRcdGlmICghbGFiZWwudGV4dENvbnRlbnQ/LnN0YXJ0c1dpdGgoJ+KnvCcpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBsYWJlbE5hbWUgPSBsYWJlbC50ZXh0Q29udGVudC5yZXBsYWNlKCfip7wnLCAnJykucmVwbGFjZSgn4qe9JywgJycpO1xuXG5cdFx0aWYgKFsnbWlub3JlZGl0JywgJ3dhdGNodGhpcyddLmluY2x1ZGVzKGxhYmVsTmFtZSkpIHtcblx0XHRcdGxhYmVsLnRleHRDb250ZW50ID0gZ2V0TWVzc2FnZShsYWJlbE5hbWUgYXMgJ21pbm9yZWRpdCcgfCAnd2F0Y2h0aGlzJyk7XG5cdFx0XHRsYWJlbC50aXRsZSA9IGdldE1lc3NhZ2UobGFiZWxOYW1lIGFzICdtaW5vcmVkaXQnIHwgJ3dhdGNodGhpcycpO1xuXHRcdH1cblx0fVxuXG5cdC8vIE1pc3NpbmcgY29weXJpZ2h0IHdhcm5pbmdcblx0aWYgKCEkYm9keS5maW5kKGAuJHtESUFMT0dfTElDRU5TRV9JRH1gKS5jaGlsZHJlbigpLmxlbmd0aCkge1xuXHRcdCRib2R5LmZpbmQoYC4ke0RJQUxPR19MSUNFTlNFX0lEfWApLmFwcGVuZChcblx0XHRcdCQoJzxkaXY+Jylcblx0XHRcdFx0LmFkZENsYXNzKCdmbWJveCBwbGFpbmxpbmtzIGZtYm94LXN5c3RlbScpXG5cdFx0XHRcdC5hcHBlbmQoJCgnPGRpdj4nKS5hZGRDbGFzcygnbWJveC10ZXh0JykuaHRtbChnZXRNZXNzYWdlKCdjb3B5cmlnaHR3YXJuaW5nJykpKVxuXHRcdCk7XG5cdH1cbn07XG5cbmV4cG9ydCB7cHJvY2Vzc1Zpc3VhbEVkaXRvcn07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEscUJBQXNCQyxRQUFBLGlCQUFBOztBQ0F0QixJQUFNQyxvQkFBb0I7QUFDMUIsSUFBTUMsZUFBZTs7QUNEckIsSUFBQUMsb0JBQXVCSCxRQUFBLGlCQUFBO0FBRXZCLElBQU1JLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLFlBQUEsR0FBV0Ysa0JBQUFHLFVBQVM7TUFDbkJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREMsWUFBQSxHQUFXTCxrQkFBQUcsVUFBUztNQUNuQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNERSxtQkFBQSxHQUFrQk4sa0JBQUFHLFVBQVM7TUFDMUJDLElBQUk7TUFDSixXQUNDO01BQ0QsV0FDQztJQUNGLENBQUM7RUFDRjtBQUNEO0FBRUEsSUFBTUcsZUFBZU4sZ0JBQWdCO0FBRXJDLElBQU1PLGFBQWdEQyxTQUFRO0FBQzdELFNBQU9GLGFBQWFFLEdBQUcsS0FBS0E7QUFDN0I7QUFFQSxJQUFNQyxjQUFjQSxNQUFNO0FBQ3pCQyxLQUFHQyxTQUFTQyxJQUFJO0lBQUNYLFdBQVdNLFdBQVcsV0FBVztJQUFHSCxXQUFXRyxXQUFXLFdBQVc7RUFBQyxDQUFDO0FBQ3pGOztBQzdCQSxJQUFNTSxzQkFBc0JBLENBQUM7RUFBQ0M7QUFBSyxNQUF3QztBQUUxRSxRQUFNQyxVQUFrQkQsTUFBTUUsS0FBQSxJQUFBQyxPQUFTbkIsWUFBWSxDQUFFLEVBQUVrQixLQUFLLE9BQU87QUFBQSxNQUFBRSxZQUFBQywyQkFDL0NKLE9BQUEsR0FBQUs7QUFBQSxNQUFBO0FBQXBCLFNBQUFGLFVBQUFHLEVBQUEsR0FBQSxFQUFBRCxRQUFBRixVQUFBSSxFQUFBLEdBQUFDLFFBQTZCO0FBQUEsVUFBQUM7QUFBQSxZQUFsQkMsUUFBQUwsTUFBQU07QUFDVixVQUFJLEdBQUFGLHFCQUFDQyxNQUFNRSxpQkFBQSxRQUFBSCx1QkFBQSxVQUFOQSxtQkFBbUJJLFdBQVcsR0FBRyxJQUFHO0FBQ3hDO01BQ0Q7QUFFQSxZQUFNQyxZQUFZSixNQUFNRSxZQUFZRyxRQUFRLEtBQUssRUFBRSxFQUFFQSxRQUFRLEtBQUssRUFBRTtBQUVwRSxVQUFJLENBQUMsYUFBYSxXQUFXLEVBQUVDLFNBQVNGLFNBQVMsR0FBRztBQUNuREosY0FBTUUsY0FBY3BCLFdBQVdzQixTQUFzQztBQUNyRUosY0FBTU8sUUFBUXpCLFdBQVdzQixTQUFzQztNQUNoRTtJQUNEO0VBQUEsU0FBQUksS0FBQTtBQUFBZixjQUFBZ0IsRUFBQUQsR0FBQTtFQUFBLFVBQUE7QUFBQWYsY0FBQWlCLEVBQUE7RUFBQTtBQUdBLE1BQUksQ0FBQ3JCLE1BQU1FLEtBQUEsSUFBQUMsT0FBU3BCLGlCQUFpQixDQUFFLEVBQUV1QyxTQUFTLEVBQUVDLFFBQVE7QUFDM0R2QixVQUFNRSxLQUFBLElBQUFDLE9BQVNwQixpQkFBaUIsQ0FBRSxFQUFFeUMsT0FDbkNDLEVBQUUsT0FBTyxFQUNQQyxTQUFTLCtCQUErQixFQUN4Q0YsT0FBT0MsRUFBRSxPQUFPLEVBQUVDLFNBQVMsV0FBVyxFQUFFQyxLQUFLbEMsV0FBVyxrQkFBa0IsQ0FBQyxDQUFDLENBQy9FO0VBQ0Q7QUFDRDs7QUhwQkEsTUFBQSxHQUFLWixtQkFBQStDLFNBQVEsRUFBRUMsS0FBSyxTQUFTQyxTQUFTOUIsT0FBc0M7QUFDM0VMLGNBQVk7QUFFWkMsS0FBR21DLEtBQUssNEJBQTRCLEVBQUVDLElBQUksTUFBWTtBQUNyRGpDLHdCQUFvQjtNQUNuQkM7SUFDRCxDQUFDO0VBQ0YsQ0FBQztBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZXF1aXJlIiwgIkRJQUxPR19MSUNFTlNFX0lEIiwgIlRBUkdFVF9DTEFTUyIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAibWlub3JlZGl0IiwgImxvY2FsaXplIiwgImVuIiwgIndhdGNodGhpcyIsICJjb3B5cmlnaHR3YXJuaW5nIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJzZXRNZXNzYWdlcyIsICJtdyIsICJtZXNzYWdlcyIsICJzZXQiLCAicHJvY2Vzc1Zpc3VhbEVkaXRvciIsICIkYm9keSIsICIkbGFiZWxzIiwgImZpbmQiLCAiY29uY2F0IiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJfbGFiZWwkdGV4dENvbnRlbnQiLCAibGFiZWwiLCAidmFsdWUiLCAidGV4dENvbnRlbnQiLCAic3RhcnRzV2l0aCIsICJsYWJlbE5hbWUiLCAicmVwbGFjZSIsICJpbmNsdWRlcyIsICJ0aXRsZSIsICJlcnIiLCAiZSIsICJmIiwgImNoaWxkcmVuIiwgImxlbmd0aCIsICJhcHBlbmQiLCAiJCIsICJhZGRDbGFzcyIsICJodG1sIiwgImdldEJvZHkiLCAidGhlbiIsICJlZGl0Rm9ybSIsICJob29rIiwgImFkZCJdCn0K

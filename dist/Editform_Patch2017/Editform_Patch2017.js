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
  const $labels = $body.find(`.${targetClass}`).find("label");
  for (const label of $labels) {
    var _label$textContent;
    if (!((_label$textContent = label.textContent) !== null && _label$textContent !== void 0 && _label$textContent.startsWith("⧼"))) {
      continue;
    }
    const labelName = label.textContent.replace("⧼", "").replace("⧽", "");
    if (["minoredit", "watchthis"].includes(labelName)) {
      label.textContent = getMessage(labelName);
      label.title = getMessage(labelName);
    }
  }
  if (!$body.find(`.${dialogLicenseId}`).children().length) {
    $body.find(`.${dialogLicenseId}`).append($("<div>").addClass("fmbox plainlinks fmbox-system").append($("<div>").addClass("mbox-text").html(getMessage("copyrightwarning"))));
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


/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/ConfirmLogout}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/BanPage}
 * @author 安忆 <i@anyi.in>, WaitSpring <me@waispring.com>
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

// dist/BanPage/BanPage.js
//! src/BanPage/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Ban: (0, import_ext_gadget.localize)({
      en: "Ban this page",
      ja: "現在のページを無効に",
      "zh-hans": "禁用此页面",
      "zh-hant": "禁用此頁"
    }),
    Confirm: (0, import_ext_gadget.localize)({
      en: "Confirm to enforce ban on this page?",
      "zh-hans": "您确定要禁用此页面吗？",
      "zh-hant": "您確定要禁用此頁面嗎？"
    }),
    "Network error": (0, import_ext_gadget.localize)({
      en: "Network error",
      ja: "ネットワークエラー",
      "zh-hans": "网络异常",
      "zh-hant": "網路異常"
    }),
    Refreshing: (0, import_ext_gadget.localize)({
      en: "Page banned successfully, refreshing...",
      ja: "現在のページを無効になりました。再読み込みします...",
      "zh-hans": "禁用成功，即将刷新当前页面……",
      "zh-hant": "禁用成功，即將重新載入當前頁……"
    }),
    "Ban the $1": (0, import_ext_gadget.localize)({
      en: "Ban the $1",
      ja: "現在の$1を無効に",
      "zh-hans": "禁用此$1",
      "zh-hant": "禁用此$1"
    }),
    Image: (0, import_ext_gadget.localize)({
      en: "image",
      ja: "画像",
      "zh-hans": "图片",
      "zh-hant": "圖片"
    }),
    Page: (0, import_ext_gadget.localize)({
      en: "page",
      ja: "ページ",
      "zh-hans": "页面",
      "zh-hant": "頁"
    }),
    Template: (0, import_ext_gadget.localize)({
      en: "template",
      ja: "テンプレート",
      zh: "模板"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/BanPage/modules/util/generateEditParams.ts
var {
  wgNamespaceNumber,
  wgPageName
} = mw.config.get();
var generateEditParams = () => {
  let targetPage;
  let redirectTemplate;
  let summary = getMessage("Ban the $1");
  switch (wgNamespaceNumber) {
    case 6:
      if (wgPageName.startsWith("File:BSicon_")) {
        targetPage = "File:BSicon .svg";
      } else {
        targetPage = "File:Banned Images.svg";
      }
      redirectTemplate = "{{文件重定向}}";
      summary = summary.replace("$1", getMessage("Image"));
      break;
    case 10:
      targetPage = "Template:Void";
      redirectTemplate = "{{模板重定向}}";
      summary = summary.replace("$1", getMessage("Template"));
      break;
    default:
      targetPage = "Qiuwen:首页";
      redirectTemplate = "";
      summary = summary.replace("$1", getMessage("Page"));
      break;
  }
  const text = `#REDIRECT [[${targetPage}]]
${redirectTemplate}`;
  return {
    targetPage,
    text,
    summary,
    wgPageName
  };
};
//! src/BanPage/options.json
var version = "3.0";
//! src/BanPage/modules/api.ts
var import_ext_gadget2 = require("ext.gadget.Util");
var api = (0, import_ext_gadget2.initMwApi)(`BanPage/${version}`);
//! src/BanPage/modules/util/refreshPage.ts
var import_ext_gadget3 = require("ext.gadget.Toastify");
var refresh = (targetPage) => {
  (0, import_ext_gadget3.toastify)({
    text: getMessage("Refreshing"),
    duration: -1
  }, "success");
  if (targetPage) {
    location.replace(mw.util.getUrl(targetPage));
  } else {
    location.reload();
  }
};
//! src/BanPage/modules/util/create.ts
var create = async (editParams) => {
  const {
    targetPage,
    text,
    summary,
    wgPageName: wgPageName2
  } = editParams;
  await api.create(wgPageName2, {
    summary
  }, text);
  refresh(targetPage);
};
//! src/BanPage/modules/util/edit.ts
var edit = async (editParams) => {
  const {
    targetPage,
    text,
    summary,
    wgPageName: wgPageName2
  } = editParams;
  await api.edit(wgPageName2, () => {
    return {
      text,
      summary,
      minor: true
    };
  });
  refresh(targetPage);
};
//! src/BanPage/modules/util/showError.ts
var import_ext_gadget4 = require("ext.gadget.Toastify");
var showError = (error) => {
  console.error("[BanPage] Ajax error:", error);
  (0, import_ext_gadget4.toastify)({
    text: getMessage("Network error"),
    close: true,
    duration: -1
  }, "error");
};
//! src/BanPage/modules/editPage.ts
var editPage = async () => {
  const editParams = generateEditParams();
  try {
    await edit(editParams);
  } catch {
    try {
      await create(editParams);
    } catch (error) {
      showError(error);
    }
  }
};
//! src/BanPage/modules/addListener.ts
var import_ext_gadget5 = require("ext.gadget.Util");
var addListener = ($element) => {
  const clickListener = async (event) => {
    event.preventDefault();
    const isConfirm = await (0, import_ext_gadget5.oouiConfirmWithStyle)(getMessage("Confirm"));
    if (!isConfirm) {
      return;
    }
    void editPage();
  };
  $element.on("click", (event) => {
    void clickListener(event);
  });
};
//! src/BanPage/modules/addPortletLink.ts
var addPortletLink = ($body) => {
  const portletId = $body.find("#p-cactions").length ? "p-cactions" : "p-tb";
  const element = mw.util.addPortletLink(portletId, "#", getMessage("Ban"), "t-banpage");
  if (!element) {
    return;
  }
  const $element = $(element);
  let $target = $element.find("a");
  if (!$target.length) {
    $target = $element;
  }
  addListener($target);
};
//! src/BanPage/BanPage.ts
var import_ext_gadget6 = require("ext.gadget.Util");
(function banPage() {
  const {
    wgNamespaceNumber: wgNamespaceNumber2,
    wgPageName: wgPageName2
  } = mw.config.get();
  if (wgNamespaceNumber2 < 0 || wgNamespaceNumber2 === 14) {
    return;
  }
  if (["File:Banned_Images.svg", "File:BSicon_.svg", "Template:Void", "Qiuwen:首页", "Project:首页"].includes(wgPageName2)) {
    return;
  }
  void (0, import_ext_gadget6.getBody)().then(addPortletLink);
})();

})();

/* </nowiki> */


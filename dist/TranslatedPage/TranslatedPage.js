/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://www.qiuwenbaike.cn/wiki/User:PB2008/tp.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/TranslatedPage}
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

// dist/TranslatedPage/TranslatedPage.js
//! src/TranslatedPage/options.json
var version = "2.0";
//! src/TranslatedPage/modules/utils/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)(`TranslatedPage/${version}`);
//! src/TranslatedPage/modules/utils/util.ts
var queryPage = async (params) => {
  const response = await api.get(params);
  return response;
};
var editPage = async (params) => {
  const response = await api.postWithEditToken(params);
  return response;
};
//! src/TranslatedPage/modules/utils/addTalkPageTemplate.ts
var addTalkPageTemplate = async ({
  name,
  sourcePrompt,
  sourceRequiredMessage,
  sourceTitlePrompt,
  sourceTitleRequiredMessage,
  insertVersionPrompt,
  summary
}) => {
  const targetTitle = mw.config.get("wgPageName");
  const article = new mw.Title(targetTitle);
  const talk = new mw.Title(article.getMainText(), article.getNamespaceId() + 1);
  const talkTitle = talk.getPrefixedText();
  const source = prompt(sourcePrompt);
  if (!source) {
    alert(sourceRequiredMessage);
    return;
  }
  const sourceTitle = prompt(sourceTitlePrompt);
  if (!sourceTitle) {
    alert(sourceTitleRequiredMessage);
    return;
  }
  const version2 = prompt("请输入来源页面的特定版本号（例如：12345678）：");
  const insertVersion = prompt(insertVersionPrompt);
  const template = `{{${name}|${source}|${sourceTitle}|version=${version2}|insertversion=${insertVersion}}}
`;
  try {
    const queryResponse = await queryPage({
      action: "query",
      prop: "revisions",
      titles: talkTitle,
      rvprop: ["timestamp", "content"],
      indexpageids: true,
      curtimestamp: true
    });
    if (!queryResponse["query"] || !queryResponse["query"].pages) {
      alert("无法获取讨论页信息，请稍后重试。");
      return;
    }
    const [pageId] = queryResponse["query"].pageids;
    const revision = (queryResponse["query"].pages[pageId].revisions || [])[0] || {};
    const text = revision["*"];
    const editParams = {
      action: "edit",
      title: talkTitle,
      summary,
      starttimestamp: queryResponse["curtimestamp"]
    };
    if (text === void 0) {
      editParams.createonly = true;
      editParams.text = template;
    } else {
      editParams.basetimestamp = revision.timestamp;
      const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      editParams.text = template + text.replace(new RegExp(`\\{\\{\\s*${escapedName}\\s*\\|[^{}]+\\}\\}\\n?`, "g"), "");
    }
    try {
      const editResponse = await editPage(editParams);
      const editResult = editResponse["edit"];
      if (editResult && editResult.result === "Success") {
        alert(`成功为${talkTitle}添加了{{${name}}}模板！`);
      } else {
        alert("添加模板失败，请稍后重试。");
      }
    } catch {
      alert("添加模板失败，请检查网络连接或权限设置。");
    }
  } catch {
    alert("无法获取讨论页信息，请稍后重试。");
  }
};
//! src/TranslatedPage/modules/addMigratedPageTemplate.ts
var addMigratedPageTemplate = () => addTalkPageTemplate({
  name: "Migrated page",
  sourcePrompt: "请输入来源网站跨站前缀（例如licencewiki；必填）：",
  sourceRequiredMessage: "来源跨站前缀不能为空！",
  sourceTitlePrompt: "请输入来源页面（例如Project首页；必填）：",
  sourceTitleRequiredMessage: "来源页面不能为空！",
  insertVersionPrompt: "请输入本地搬运后的特定版本号（例如：12345678）：",
  summary: "为导入页面标记{{[[Template:Migrated page|Migrated page]]}}模板 ([[MediaWiki:Gadget-MigratedPage.js|tp.js]])"
});
//! src/TranslatedPage/modules/addTranslatedPageTemplate.ts
var addTranslatedPageTemplate = () => addTalkPageTemplate({
  name: "Translated page",
  sourcePrompt: "请输入来源语言（例如zh；必填）：",
  sourceRequiredMessage: "来源语言不能为空！",
  sourceTitlePrompt: "请输入来源页面（例如首页；必填）：",
  sourceTitleRequiredMessage: "来源页面不能为空！",
  insertVersionPrompt: "请输入本地翻译后的特定版本号（例如：12345678）：",
  summary: "为导入页面标记{{[[Template:Translated page|Translated page]]}}模板 ([[MediaWiki:Gadget-TranslatedPage.js|tp.js]])"
});
//! src/TranslatedPage/TranslatedPage.ts
var import_ext_gadget2 = require("ext.gadget.Util");
void (0, import_ext_gadget2.getBody)().then(function initTP() {
  if (mw.config.get("wgNamespaceNumber") % 2 !== 0 || mw.config.get("wgNamespaceNumber") === -1) {
    return;
  }
  const portletLinkTP = mw.util.addPortletLink(
    "p-cactions",
    // 工具栏位置
    "#",
    // 链接地址
    "添加导入模板（维基百科）",
    // 按钮名称
    "add-translated-page",
    // ID
    "为当前页面的讨论页添加{{Translated page}}模板（适用于维基百科等）"
    // 提示文字
  );
  const portletLinkMP = mw.util.addPortletLink(
    "p-cactions",
    // 工具栏位置
    "#",
    // 链接地址
    "添加导入模板（其他站点）",
    // 按钮名称
    "add-migrated-page",
    // ID
    "为当前页面的讨论页添加{{Migrated page}}模板（适用于其他站点）"
    // 提示文字
  );
  if (portletLinkTP) {
    $(portletLinkTP).on("click", (e) => {
      e.preventDefault();
      void addTranslatedPageTemplate();
    });
  }
  if (portletLinkMP) {
    $(portletLinkMP).on("click", (e) => {
      e.preventDefault();
      void addMigratedPageTemplate();
    });
  }
});

})();

/* </nowiki> */


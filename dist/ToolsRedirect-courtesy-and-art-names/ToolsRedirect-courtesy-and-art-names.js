/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-ToolsRedirect-courtesy-and-art-names.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/ToolsRedirect-courtesy-and-art-names}
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

// dist/ToolsRedirect-courtesy-and-art-names/ToolsRedirect-courtesy-and-art-names.js
//! src/ToolsRedirect-courtesy-and-art-names/ToolsRedirect-courtesy-and-art-names.ts
var import_ext_gadget3 = require("ext.gadget.Util");
//! src/ToolsRedirect-courtesy-and-art-names/modules/courtesy-and-art-names.ts
var import_ext_gadget = require("ext.gadget.ToolsRedirect");
var import_ext_gadget2 = require("ext.gadget.Util");
var checkRedirect = () => {
  const REGEX_PREFIX = /([；，]?[一又]?[字号號]\s)*$/;
  const compSurnames = ["欧阳", "歐陽", "令狐", "皇甫", "上官", "司徒", "诸葛", "諸葛", "司马", "司馬", "宇文", "呼延", "端木", "申屠", "尉迟", "尉遲", "轩辕", "軒轅", "夏侯", "南宫", "南宮", "司空", "鲜于", "鮮于", "西门", "西門", "独孤", "獨孤", "东方", "東方", "司寇", "羊舌", "第五", "梁丘", "锺离", "鍾離", "东郭", "東郭", "公孙", "公孫", "孟孙", "孟孫", "仲孙", "仲孫", "叔孙", "叔孫", "季孙", "季孫", "长孙", "長孫", "慕容", "闾丘", "閭丘", "东门", "東門", "公羊", "万俟", "百里", "公冶", "呼延", "浮屠", "即墨", "单于", "單于", "田丘"];
  const REGEX_COMP_SURNAME = new RegExp(`^(${compSurnames.join("|")}).`);
  const findSurname = (pageName) => {
    if (REGEX_COMP_SURNAME.test(pageName)) {
      return REGEX_COMP_SURNAME.exec(pageName)[1] ?? "";
    }
    return pageName[0] ?? "";
  };
  (0, import_ext_gadget.findRedirectCallback)((pageName, $content) => {
    const titles = [];
    let surname;
    for (const element of $content.find("> p > b")) {
      const {
        previousSibling,
        textContent
      } = element;
      if (!previousSibling || !textContent) {
        continue;
      }
      const {
        textContent: textContent2
      } = previousSibling;
      if (!textContent2) {
        continue;
      }
      if (REGEX_PREFIX.test(textContent2)) {
        const name = textContent.trim();
        if (!name || textContent === pageName) {
          continue;
        }
        surname || (surname = findSurname(pageName));
        titles[titles.length] = surname + name;
      }
    }
    return (0, import_ext_gadget2.uniqueArray)(titles);
  });
};
//! src/ToolsRedirect-courtesy-and-art-names/ToolsRedirect-courtesy-and-art-names.ts
(function toolsRedirectCourtesyAndArtNames() {
  void (0, import_ext_gadget3.checkDependencies)("ToolsRedirect").then(checkRedirect);
})();

})();

/* </nowiki> */


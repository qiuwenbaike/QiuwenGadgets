/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Group-transwiki_JS}
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

// dist/Group-transwiki_JS/Group-transwiki_JS.js
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
//! src/Group-transwiki_JS/options.json
var options_exports = {};
__export(options_exports, {
  configKey: () => configKey,
  default: () => options_default
});
var configKey = "gadget-Group-transwiki_JS__Initialized";
var options_default = {
  configKey
};
//! src/Group-transwiki_JS/modules/fixCheckbox.ts
var import_ext_gadget = require("ext.gadget.Util");
var fixCheckbox = () => {
  const {
    wgCanonicalSpecialPageName,
    wgWikiID
  } = mw.config.get();
  if (wgCanonicalSpecialPageName !== "Import") {
    return;
  }
  const interwikiHistory = document.querySelector("input[name=interwikiHistory]");
  const interwikiTemplates = document.querySelector("input[name=interwikiTemplates]");
  if (interwikiHistory) {
    interwikiHistory.checked = false;
  }
  if (interwikiTemplates) {
    interwikiTemplates.checked = false;
  }
  if (wgWikiID === "zhqiuwenbaike") {
    if (interwikiHistory) {
      interwikiHistory.disabled = true;
    }
    if (interwikiTemplates) {
      interwikiTemplates.disabled = true;
    }
  }
  const form = document.querySelector("#mw-import-interwiki-form");
  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      if (interwikiHistory !== null && interwikiHistory !== void 0 && interwikiHistory.checked) {
        const confirmed = await (0, import_ext_gadget.oouiConfirmWithStyle)("您是否要导入此页面的所有版本？");
        if (!confirmed) {
          interwikiHistory.checked = false;
        }
      }
      if (interwikiTemplates !== null && interwikiTemplates !== void 0 && interwikiTemplates.checked) {
        const confirmed = await (0, import_ext_gadget.oouiConfirmWithStyle)("您是否要导入此页面所包含的所有模板和其他页面？");
        if (!confirmed) {
          interwikiTemplates.checked = false;
        }
      }
      form.submit();
    });
  }
};
//! src/Group-transwiki_JS/modules/fixSummary.ts
var fixSummary = () => {
  const {
    wgCanonicalSpecialPageName
  } = mw.config.get();
  if (wgCanonicalSpecialPageName === "Import") {
    const defaultSummary = "页面文字原许可：[[cc-by-sa:4.0|CC BY-SA 4.0]]；作者请参见来源页面历史";
    const defaultFileImportSummary = `${defaultSummary}；文件作者请参见此页面及来源页面记载`;
    const userNamePrefixInput = document.querySelector("#mw-import-upload-form input[name=usernamePrefix]");
    if (userNamePrefixInput) {
      userNamePrefixInput.addEventListener("input", () => {
        const uploadLogCommentInput = document.querySelector("#mw-import-upload-form input[name=log-comment]");
        if (uploadLogCommentInput) {
          const importUploadPrefix = userNamePrefixInput === null || userNamePrefixInput === void 0 ? void 0 : userNamePrefixInput.value;
          uploadLogCommentInput.value = `导入自[[${importUploadPrefix}:|此网站]]的同名页面［${importUploadPrefix === "commons" ? defaultFileImportSummary : defaultSummary}］`;
        }
      });
    }
    const interwikiLogCommentInput = document.querySelector("#mw-import-interwiki-form input[name=log-comment]");
    if (interwikiLogCommentInput) {
      interwikiLogCommentInput.value = defaultSummary;
      const interwikiPrefixSelect = document.querySelector("#mw-import-interwiki-form select[name=interwiki]");
      if (interwikiPrefixSelect) {
        interwikiPrefixSelect.addEventListener("change", () => {
          switch (interwikiPrefixSelect.value) {
            case "commons":
              interwikiLogCommentInput.value = `［${defaultFileImportSummary}］`;
              break;
            default:
              interwikiLogCommentInput.value = `［${defaultSummary}］`;
              break;
          }
        });
      }
    }
    const assignKnownUsers = document.querySelectorAll("input[name=assignKnownUsers]");
    if (assignKnownUsers.length) {
      for (const checkBox of assignKnownUsers) {
        checkBox.checked = true;
      }
    }
  }
};
//! src/Group-transwiki_JS/Group-transwiki_JS.ts
(function userJS() {
  const {
    configKey: configKey2
  } = options_exports;
  if (mw.config.get(configKey2)) {
    return;
  }
  mw.config.set(configKey2, true);
  fixCheckbox();
  fixSummary();
})();

})();

/* </nowiki> */


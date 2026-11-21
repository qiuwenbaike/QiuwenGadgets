/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/DiffLink}
 * @author 安忆 <i@anyi.in>
 * @license GPL-3.0-or-later {@link https://www.qiuwenbaike.cn/wiki/H:GPL-3.0}
 */

/**
 * Copyright (C)  安忆
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

/**
 * SPDX-License-Identifier: MIT
 *
 * The "copy" icon from @wikimedia/codex-icons
 *
 * @license MIT
 */

/**
 * Copyright (c) 2011-2022 Wikimedia Design & OOUI team and other contributors.
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
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

// dist/DiffLink/DiffLink.js
//! src/DiffLink/modules/util/checkDiffPage.ts
var checkDiffPage = ($content) => {
  const {
    wgCurRevisionId
  } = mw.config.get();
  return $content.find("table").hasClass("diff") && !!wgCurRevisionId;
};
//! src/DiffLink/modules/util/checkRevisionPage.ts
var checkRevisionPage = ($content) => {
  return ($content.find("#contentSub #mw-revision-nav").length || $content.find("main#content>.pre-content #mw-revision-nav").length) > 0;
};
//! src/DiffLink/modules/addPortletLink.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/DiffLink/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    "Network error": (0, import_ext_gadget.localize)({
      ja: "ネットワークエラー",
      "zh-hans": "网络异常",
      "zh-hant": "網路異常"
    }),
    Close: (0, import_ext_gadget.localize)({
      en: "Close",
      ja: "閉じる",
      "zh-hans": "关闭",
      "zh-hant": "關閉"
    }),
    Copy: (0, import_ext_gadget.localize)({
      en: "Copy",
      "zh-hans": "复制",
      "zh-hant": "復製"
    }),
    Copied: (0, import_ext_gadget.localize)({
      en: "Copied.",
      "zh-hans": "已复制",
      "zh-hant": "已復製"
    }),
    "Copy failed": (0, import_ext_gadget.localize)({
      en: "Failed to copy.",
      ja: "コピーに失敗しました。",
      "zh-hans": "复制失败",
      "zh-hant": "複製失敗"
    }),
    CopyDiff: (0, import_ext_gadget.localize)({
      en: "Copy the link to the diff version (wiki syntax)",
      ja: "現在の版間の差分リンクをコピーします（ウィキ記法）",
      "zh-hans": "复制链接到当前差异版本的维基语法",
      "zh-hant": "複製連結到當前差異版本的維基語法"
    }),
    CopyPermanent: (0, import_ext_gadget.localize)({
      en: "Copy the permanent link to the current version (wiki syntax)",
      ja: "このページのこの版への固定リンクをコピーします（ウィキ記法）",
      "zh-hans": "复制链接到当前修订版本的维基语法",
      "zh-hant": "複製連結到當前修訂版本的維基語法"
    }),
    Diff: (0, import_ext_gadget.localize)({
      en: "Diff link",
      ja: "現在の版間の差分リンク",
      "zh-hans": "当前差异链接",
      "zh-hant": "當前差異連結"
    }),
    DiffVersion: (0, import_ext_gadget.localize)({
      en: "diff version",
      ja: "版間の差分",
      "zh-hans": "差异版本",
      "zh-hant": "差異版本"
    }),
    Permanent: (0, import_ext_gadget.localize)({
      en: "Permanent link",
      ja: "この版への固定リンク",
      "zh-hans": "当前修订链接",
      "zh-hant": "當前修訂連結"
    }),
    PermanentVersion: (0, import_ext_gadget.localize)({
      en: "permanent version",
      ja: "版への固定リンク",
      "zh-hans": "固定版本链接",
      "zh-hant": "固定版本連結"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/DiffLink/modules/copyText.ts
var copyText = async (text) => {
  const copyWithExecCommand = () => {
    const helper = document.createElement("textarea");
    helper.value = text;
    helper.setAttribute("readonly", "true");
    helper.style.position = "fixed";
    helper.style.top = "-9999px";
    helper.style.left = "-9999px";
    document.body.append(helper);
    try {
      helper.select();
      if (!document.execCommand("copy")) {
        throw new Error('document.execCommand("copy") failed');
      }
    } finally {
      helper.remove();
    }
  };
  const copy = async () => {
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        return;
      } catch (error) {
        try {
          copyWithExecCommand();
          return;
        } catch (fallbackError) {
          console.error("[DiffLink] Clipboard API and fallback copy failed:", error, fallbackError);
          throw fallbackError;
        }
      }
    }
    copyWithExecCommand();
  };
  try {
    await copy();
    void mw.notify(getMessage("Copied"), {
      type: "success",
      tag: "DiffLink"
    });
  } catch (error) {
    console.error("[DiffLink] Failed to copy text:", error);
    void mw.notify(getMessage("Copy failed"), {
      type: "error",
      tag: "DiffLink"
    });
  }
};
//! src/DiffLink/modules/addPortletLink.ts
/*!
 * 若想自定义复制结果中的文本可通过向自己的common.js中加入以下内容：
 *   window.DiffLink = ['版本差异', '固定版本'];
 * 若想使用默认值1，但自定值2，请将值1留空，如下例：
 *   window.DiffLink = ['', '固定版本'];
 */
var defaultTextArray = [getMessage("DiffVersion"), getMessage("PermanentVersion")];
var applyCustomText = (index, value) => {
  if (typeof value === "string" && value.length > 0) {
    defaultTextArray[index] = value;
  }
};
if (Array.isArray(window.DiffLink)) {
  applyCustomText(0, window.DiffLink[0]);
  applyCustomText(1, window.DiffLink[1]);
}
var eventListener = {
  remove: () => {
  }
};
var openDialog = async (items) => {
  const moduleName = "ext.gadget.CopyTextDialog";
  const require2 = await mw.loader.using(moduleName);
  const {
    showCopyTextDialog
  } = require2(moduleName);
  showCopyTextDialog({
    title: getMessage("Diff"),
    items,
    copyLabel: getMessage("Copy"),
    closeLabel: getMessage("Close"),
    onCopy: copyText
  });
};
var addPortletLink = ({
  text,
  tooltip,
  link,
  defaultTextArrayIndex,
  isPermaLink
}) => {
  let element = document.querySelector("#t-difflink");
  if (!element) {
    const portletId = document.querySelector("#p-cactions") ? "p-cactions" : "p-tb";
    element = mw.util.addPortletLink(portletId, "#", text, "t-difflink", tooltip);
  }
  if (!element) {
    return;
  }
  const clickListener = (event) => {
    event.preventDefault();
    const hash = isPermaLink ? decodeURIComponent(location.hash) : "";
    const items = [{
      text: link
    }, {
      text: `[[${link}${hash}]]`
    }, {
      text: `[[${link}${hash}|${defaultTextArray[defaultTextArrayIndex]}]]`
    }];
    void openDialog(items);
  };
  eventListener.remove();
  eventListener = (0, import_ext_gadget2.addEventListenerWithRemover)({
    target: element.firstElementChild ?? element,
    type: "click",
    listener: clickListener
  });
};
//! src/DiffLink/modules/buildLink.ts
var buildLink = (oldId, diffId) => {
  let link = "Special:Diff/";
  if (oldId) {
    link += `${oldId}/`;
  }
  link += diffId;
  addPortletLink({
    link,
    text: getMessage("Diff"),
    tooltip: getMessage("CopyDiff"),
    defaultTextArrayIndex: 0
  });
};
//! src/DiffLink/options.json
var version = "2.0";
//! src/DiffLink/modules/api.ts
var import_ext_gadget3 = require("ext.gadget.Util");
var api = (0, import_ext_gadget3.initMwApi)(`DiffLink/${version}`);
//! src/DiffLink/modules/util/queryApi.ts
var import_ext_gadget4 = require("ext.gadget.Toastify");
var parameters = {
  action: "compare",
  format: "json",
  formatversion: "2",
  prop: "ids",
  torelative: "prev",
  smaxage: 600,
  maxage: 600
};
var queryApi = async (diffId) => {
  try {
    return await api.get({
      ...parameters,
      fromrev: diffId
    });
  } catch (error) {
    console.error("[DiffLink] Ajax error:", error);
    (0, import_ext_gadget4.toastify)({
      text: getMessage("Network error"),
      close: true,
      duration: -1
    }, "error");
    return {};
  }
};
//! src/DiffLink/modules/compareWithRemoteDiffId.ts
var compareWithRemoteDiffId = async (diffId) => {
  var _response$compare;
  const response = await queryApi(diffId);
  const {
    wgDiffNewId,
    wgDiffOldId
  } = mw.config.get();
  if (diffId === wgDiffNewId && ((_response$compare = response["compare"]) === null || _response$compare === void 0 ? void 0 : _response$compare.fromrevid) === wgDiffOldId) {
    buildLink(0, diffId);
  }
};
//! src/DiffLink/modules/processId.ts
var processId = (isRevisionPage, {
  diffId,
  oldId,
  revisionId
}) => {
  if (diffId) {
    buildLink(oldId, diffId);
    if (oldId) {
      void compareWithRemoteDiffId(diffId);
    }
  } else if (revisionId && isRevisionPage) {
    addPortletLink({
      text: getMessage("Permanent"),
      tooltip: getMessage("CopyPermanent"),
      link: `Special:PermaLink/${revisionId}`,
      defaultTextArrayIndex: 1,
      isPermaLink: true
    });
  }
};
//! src/DiffLink/DiffLink.ts
mw.hook("wikipage.content").add(function diffLink($content) {
  if ($content.attr("id") !== "mw-content-text") {
    return;
  }
  const isDiffPage = checkDiffPage($content);
  const isRevisionPage = checkRevisionPage($content);
  if (!isDiffPage && !isRevisionPage) {
    return;
  }
  const {
    wgDiffNewId,
    wgDiffOldId,
    wgRevisionId
  } = mw.config.get();
  processId(isRevisionPage, {
    diffId: wgDiffNewId ?? null,
    oldId: wgDiffOldId ?? null,
    revisionId: wgRevisionId ?? null
  });
});

})();

/* </nowiki> */


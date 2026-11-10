/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/EditConflict}
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

// dist/EditConflict/EditConflict.js
//! src/EditConflict/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Notice: (0, import_ext_gadget.localize)({
      en: "This page has been changed by someone else after you started editing. Copy your changes, refresh and start over to avoid edit conflicts.",
      ja: "このページは他の人によって変更されています。編集衝突を避けるため、編集内容をコピーしてページを再読み込みし、編集を続けてください。",
      "zh-hans": "此页面已被他人更改。请复制您的编辑，然后刷新页面，重新开始编辑，以避免编辑冲突。",
      "zh-hant": "本頁已被他人更改。請將您的編輯複製，並重新載入頁面，然後繼續編輯，來避免編輯衝突。"
    }),
    Refresh: (0, import_ext_gadget.localize)({
      en: "Refresh",
      ja: "再読み込み",
      "zh-hans": "刷新页面",
      "zh-hant": "重新載入"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/EditConflict/modules/noticeMessage.ts
var locationReload = () => {
  location.reload();
  return false;
};
var $noticeMessage = $("<span>").append(getMessage("Notice"), $("<a>").on("click", locationReload).text(getMessage("Refresh")));
//! src/EditConflict/modules/core.ts
var import_ext_gadget3 = require("ext.gadget.Util");
//! src/EditConflict/options.json
var version = "2.0";
//! src/EditConflict/modules/api.ts
var import_ext_gadget2 = require("ext.gadget.Util");
var api = (0, import_ext_gadget2.initMwApi)(`EditConflict/${version}`);
//! src/EditConflict/modules/util/queryPageInfo.ts
var params = {
  action: "query",
  format: "json",
  formatversion: "2",
  prop: "revisions",
  rvprop: "ids"
};
var queryPageInfo = async (title) => {
  try {
    return await api.get({
      ...params,
      titles: title
    });
  } catch (error) {
    console.error("[EditConflict] Ajax error:", error);
    return {};
  }
};
//! src/EditConflict/modules/getCurrentRevisionId.ts
var getCurrentRevisionId = async (title) => {
  const pageInfo = await queryPageInfo(title);
  const {
    query
  } = pageInfo;
  if (!query) {
    return 0;
  }
  const [page] = query.pages;
  if (!page || page.missing) {
    return 0;
  }
  return page.revisions[0].revid;
};
//! src/EditConflict/modules/core.ts
var import_ext_gadget4 = require("ext.gadget.Toastify");
var editConflict = async ($body) => {
  let isContinue = true;
  $body.find('input[name="wpSave"]').on("click", () => {
    isContinue = false;
  });
  const checkEditConflict = async () => {
    const {
      wgCurRevisionId: wgCurRevisionId2,
      wgPageName
    } = mw.config.get();
    const pageRevisionId = await getCurrentRevisionId(wgPageName);
    if (!pageRevisionId) {
      isContinue = false;
    } else if (pageRevisionId > wgCurRevisionId2) {
      isContinue = false;
      (0, import_ext_gadget4.toastify)({
        node: $noticeMessage.get(0),
        close: true,
        duration: -1
      }, "info");
    }
  };
  while (true) {
    if (!isContinue) {
      break;
    }
    await checkEditConflict();
    if (!isContinue) {
      break;
    }
    await (0, import_ext_gadget3.delay)(3 * 1e3);
  }
};
//! src/EditConflict/EditConflict.ts
var import_ext_gadget5 = require("ext.gadget.Util");
var {
  wgAction,
  wgCurRevisionId
} = mw.config.get();
void (0, import_ext_gadget5.getBody)().then(($body) => {
  if (["edit", "submit"].includes(wgAction) && wgCurRevisionId) {
    void editConflict($body);
  }
});

})();

/* </nowiki> */


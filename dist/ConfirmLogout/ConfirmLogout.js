/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/ConfirmLogout}
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

// dist/ConfirmLogout/ConfirmLogout.js
//! src/ConfirmLogout/options.json
var logoutElementSelector = '#ca-cb-logout>a,#topbar>a[href*="UserLogout"],#pt-logout>a';
var logoutElementSelectorOfVector2022StickyHeader = "#pt-logout-sticky-header>a";
var version = "3.0";
//! src/ConfirmLogout/ConfirmLogout.ts
var import_ext_gadget6 = require("ext.gadget.Util");
//! src/ConfirmLogout/modules/util/refreshEventListener.ts
var import_ext_gadget = require("ext.gadget.FilterAlteredClicks");
var refreshEventListener = ($element, clickListener2) => {
  const hoverListener = () => {
    $element.off("click");
    $element.on("click", (0, import_ext_gadget.filterAlteredClicks)(clickListener2));
  };
  const hoverListenerWithDebounce = mw.util.debounce(hoverListener, 200, true);
  $element.on("mouseover touchstart", {
    passive: true
  }, hoverListenerWithDebounce);
};
//! src/ConfirmLogout/modules/addListener.ts
var {
  skin
} = mw.config.get();
var clickListener = (openConfirmDialog, event) => {
  event.preventDefault();
  openConfirmDialog();
};
var addListener = ($element, openConfirmDialog) => {
  refreshEventListener($element, (event) => {
    clickListener(openConfirmDialog, event);
  });
  if (skin !== "vector-2022") {
    return;
  }
  const $body = $element.parents("body");
  const observerCallback = (_mutations, observer) => {
    if (!$body.hasClass("vector-sticky-header-visible")) {
      return;
    }
    const SELECTOR = logoutElementSelectorOfVector2022StickyHeader;
    const element = document.querySelector(SELECTOR);
    if (!element) {
      return;
    }
    const elementClone = element.cloneNode(true);
    element.replaceWith(elementClone);
    refreshEventListener($body.find(SELECTOR), (event) => {
      clickListener(openConfirmDialog, event);
    });
    observer.disconnect();
  };
  const mutationObserver = new MutationObserver(observerCallback);
  mutationObserver.observe($body.get(0) ?? document.documentElement, {
    attributes: true,
    attributeFilter: ["class"]
  });
};
//! src/ConfirmLogout/modules/i18n.ts
var import_ext_gadget2 = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    "Network error": (0, import_ext_gadget2.localize)({
      en: "Network error",
      ja: "ネットワークエラー",
      "zh-hans": "网络异常",
      "zh-hant": "網路異常"
    }),
    Confirm: (0, import_ext_gadget2.localize)({
      en: "Confirm logout?",
      ja: "ログアウトしますか？",
      "zh-hans": "您确定要退出吗？",
      "zh-hant": "您確定要登出嗎？"
    }),
    ConfirmAction: (0, import_ext_gadget2.localize)({
      en: "Confirm",
      ja: "確認",
      "zh-hans": "确认",
      "zh-hant": "確認"
    }),
    Cancel: (0, import_ext_gadget2.localize)({
      en: "Cancel",
      ja: "キャンセル",
      "zh-hans": "取消",
      "zh-hant": "取消"
    }),
    Succeed: (0, import_ext_gadget2.localize)({
      en: "Logout succeed. Refreshing...",
      ja: "ログアウトに成功しました。再読み込みします...",
      "zh-hans": "退出成功，即将刷新页面……",
      "zh-hant": "登出成功，即將重新載入……"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/ConfirmLogout/ConfirmLogout.ts
var import_ext_gadget7 = require("ext.gadget.Toastify");
//! src/ConfirmLogout/modules/api.ts
var import_ext_gadget3 = require("ext.gadget.Util");
var api = (0, import_ext_gadget3.initMwApi)(`ConfirmLogout/${version}`);
//! src/ConfirmLogout/modules/util/logout.ts
var import_ext_gadget4 = require("ext.gadget.Toastify");
var logout = async (toastifyInstance) => {
  await api.postWithEditToken({
    action: "logout"
  });
  toastifyInstance.hideToast();
  (0, import_ext_gadget4.toastify)({
    text: getMessage("Succeed")
  }, "success");
  location.reload();
};
//! src/ConfirmLogout/modules/util/showError.ts
var import_ext_gadget5 = require("ext.gadget.Toastify");
var showError = (error, toastifyInstance) => {
  console.error("[ConfirmLogout] Ajax error:", error);
  toastifyInstance.hideToast();
  (0, import_ext_gadget5.toastify)({
    text: getMessage("Network error")
  }, "error");
};
//! src/ConfirmLogout/modules/tryLogout.ts
var tryLogout = async (toastifyInstance) => {
  try {
    await logout(toastifyInstance);
  } catch (error) {
    showError(error, toastifyInstance);
  }
};
//! src/ConfirmLogout/ConfirmLogout.ts
var {
  wgUserName
} = mw.config.get();
void (0, import_ext_gadget6.getBody)().then(function confirmLogout($body) {
  if (!wgUserName) {
    return;
  }
  const $element = $body.find(logoutElementSelector);
  if (!$element.length) {
    return;
  }
  const openConfirmDialog = async () => {
    const isConfirm = await (0, import_ext_gadget6.oouiConfirmWithStyle)(getMessage("Confirm"));
    if (!isConfirm) {
      return;
    }
    const toastifyInstance = (0, import_ext_gadget7.toastify)({
      text: mw.message("logging-out-notify").parse(),
      duration: -1
    }, "info");
    void tryLogout(toastifyInstance);
  };
  addListener($element, openConfirmDialog);
});

})();

/* </nowiki> */


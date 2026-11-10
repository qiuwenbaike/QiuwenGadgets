/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/ShortURL}
 * @author 安忆 <i@anyi.in>; WaitSpring <me@waitspring.com>
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
 * - The "copy" icon from @wikimedia/codex-icons
 * - The "link" icon from OOjs UI
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

// dist/ShortURL/ShortURL.js
//! src/ShortURL/modules/util/checkRevisionPage.ts
var checkRevisionPage = ($content) => {
  return ($content.find("#contentSub #mw-revision-nav").length || $content.find("main#content>.pre-content #mw-revision-nav").length) > 0;
};
//! src/ShortURL/modules/util/getShortDomains.ts
var getShortDomains = () => {
  const {
    wgWikiID
  } = mw.config.get();
  let domains3 = [];
  switch (wgWikiID) {
    case "zhqiuwenbaike":
      domains3 = ["qwbk.cc", "bkwz.cn"];
      break;
    case "licencewiki":
      domains3 = ["l.qwbk.cc", "l.bkwz.cn"];
      break;
    case "mncqiuwenbaike":
      domains3 = ["mnc.qwbk.cc", "mnc.bkwz.cn"];
      break;
  }
  return domains3;
};
//! src/ShortURL/modules/addHeaderLink.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/ShortURL/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Close: (0, import_ext_gadget.localize)({
      en: "Close",
      ja: "閉じる",
      "zh-hans": "关闭",
      "zh-hant": "關閉"
    }),
    "Network error": (0, import_ext_gadget.localize)({
      en: "Network error",
      ja: "ネットワークエラー",
      "zh-hans": "网络异常",
      "zh-hant": "網路異常"
    }),
    "Page URL": (0, import_ext_gadget.localize)({
      en: "Permanent URL",
      "zh-hans": "页面链接",
      "zh-hant": "頁面網址"
    }),
    "Permanent URL": (0, import_ext_gadget.localize)({
      en: "Permanent URL",
      "zh-hans": "永久链接",
      "zh-hant": "永久網址"
    }),
    "Share URL for the page": (0, import_ext_gadget.localize)({
      en: "Share URL for the page",
      "zh-hans": "分享本页链接",
      "zh-hant": "分享本頁網址"
    }),
    "Short URL": (0, import_ext_gadget.localize)({
      en: "Short URL",
      "zh-hans": "短链接",
      "zh-hant": "短網址"
    }),
    "Show URL": (0, import_ext_gadget.localize)({
      en: "Show URL",
      "zh-hans": "显示该页链接",
      "zh-hant": "顯示該頁網址"
    }),
    Copy: (0, import_ext_gadget.localize)({
      en: "Copy",
      "zh-hans": "复制",
      "zh-hant": "復製"
    }),
    "URL copied to clipboard": (0, import_ext_gadget.localize)({
      en: "The URL has been copied to clipboard: ",
      "zh-hans": "已复制本页链接：",
      "zh-hant": "已復製本頁網址："
    }),
    "Copy failed": (0, import_ext_gadget.localize)({
      en: "Failed to copy.",
      ja: "コピーに失敗しました。",
      "zh-hans": "复制失败",
      "zh-hant": "複製失敗"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/ShortURL/modules/copyText.ts
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
          console.error("[ShortURL] Clipboard API and fallback copy failed:", error, fallbackError);
          throw fallbackError;
        }
      }
    }
    copyWithExecCommand();
  };
  try {
    await copy();
    void mw.notify(getMessage("URL copied to clipboard") + text, {
      type: "success",
      tag: "ShortURL"
    });
  } catch (error) {
    console.error("[ShortURL] Failed to copy text:", error);
    void mw.notify(getMessage("Copy failed"), {
      type: "error",
      tag: "ShortURL"
    });
  }
};
//! src/ShortURL/modules/addHeaderLink.ts
var {
  wgUserName
} = mw.config.get();
var domains = getShortDomains();
var headerLinkEventListener = {
  remove: () => {
  }
};
var addHeaderLink = (link, permaLink) => {
  let headerLink = document.querySelector("#mw-indicator-shortURL a");
  if (!headerLink) {
    var _document$querySelect;
    headerLink = document.createElement("a");
    headerLink.href = "#";
    headerLink.setAttribute("aria-label", wgUserName ? getMessage("Short URL") : getMessage("Share URL for the page"));
    const icon = document.createElement("span");
    icon.className = "short-url-link-icon";
    headerLink.append(icon);
    const headerElement = document.createElement("div");
    headerElement.className = "mw-indicator";
    headerElement.id = "mw-indicator-shortURL";
    headerElement.append(headerLink);
    (_document$querySelect = document.querySelector(".mw-indicators")) === null || _document$querySelect === void 0 || _document$querySelect.prepend(headerElement);
  }
  const headerLinkClickListener = (event) => {
    event.preventDefault();
    copyText(wgUserName ? `https://${domains[0]}${link}` : `https://${location.host}${permaLink}`);
  };
  headerLinkEventListener.remove();
  headerLinkEventListener = (0, import_ext_gadget2.addEventListenerWithRemover)({
    target: headerLink,
    type: "click",
    listener: headerLinkClickListener
  });
};
//! src/ShortURL/modules/addPortletLink.ts
var import_vue4 = require("vue");
var import_vue = require("vue");
var import_codex = require("@wikimedia/codex");
var import_vue2 = require("vue");
var PortletLink_default = /* @__PURE__ */ (0, import_vue.defineComponent)({
  __name: "PortletLink",
  props: {
    open: {
      type: Boolean,
      required: true
    },
    items: {
      type: Array,
      required: true
    },
    onClose: {
      type: Function,
      required: true
    }
  },
  emits: ["update:open"],
  setup(__props, {
    expose: __expose,
    emit: __emit
  }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const isOpen = (0, import_vue2.ref)(props.open);
    (0, import_vue2.watch)(() => props.open, (value) => {
      isOpen.value = value;
    }, {
      immediate: true
    });
    const close = () => {
      isOpen.value = false;
      emit("update:open", false);
      props.onClose();
    };
    const handleOpenChange = (value) => {
      isOpen.value = value;
      if (!value) {
        close();
      }
    };
    const cdxIconCopy = {
      path: "M13 19H1V7h6V1h12v12h-6zm-6-6V9H3v8h8v-4zm2-2h8V3H9z",
      shouldFlip: true
    };
    const __returned__ = {
      props,
      emit,
      isOpen,
      close,
      handleOpenChange,
      cdxIconCopy,
      get CdxButton() {
        return import_codex.CdxButton;
      },
      get CdxDialog() {
        return import_codex.CdxDialog;
      },
      get CdxIcon() {
        return import_codex.CdxIcon;
      },
      get copyText() {
        return copyText;
      },
      get getMessage() {
        return getMessage;
      }
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var import_vue3 = require("vue");
var _hoisted_1 = {
  class: "short-url-copy-list"
};
var _hoisted_2 = {
  class: "short-url-copy-label"
};
var _hoisted_3 = {
  class: "short-url-copy-text"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue3.openBlock)(), (0, import_vue3.createBlock)($setup["CdxDialog"], {
    open: $setup.isOpen,
    "onUpdate:open": [_cache[0] || (_cache[0] = ($event) => $setup.isOpen = $event), $setup.handleOpenChange],
    title: $setup.getMessage("Share URL for the page"),
    "default-action": {
      label: $setup.getMessage("Close")
    },
    "use-close-button": true,
    onDefault: $setup.close
  }, {
    default: (0, import_vue3.withCtx)(() => [(0, import_vue3.createElementVNode)("div", _hoisted_1, [((0, import_vue3.openBlock)(true), (0, import_vue3.createElementBlock)(
      import_vue3.Fragment,
      null,
      (0, import_vue3.renderList)($props.items, (item) => {
        return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("div", {
          key: item.text,
          class: "short-url-copy-item"
        }, [(0, import_vue3.createElementVNode)(
          "div",
          _hoisted_2,
          (0, import_vue3.toDisplayString)(item.label),
          1
          /* TEXT */
        ), (0, import_vue3.createElementVNode)(
          "code",
          _hoisted_3,
          (0, import_vue3.toDisplayString)(item.text),
          1
          /* TEXT */
        ), (0, import_vue3.createVNode)($setup["CdxButton"], {
          weight: "normal",
          "aria-label": $setup.getMessage("Copy"),
          onClick: ($event) => $setup.copyText(item.text)
        }, {
          default: (0, import_vue3.withCtx)(() => [(0, import_vue3.createVNode)($setup["CdxIcon"], {
            icon: $setup.cdxIconCopy
          }), (0, import_vue3.createTextVNode)(
            " " + (0, import_vue3.toDisplayString)($setup.getMessage("Copy")),
            1
            /* TEXT */
          )]),
          _: 1
          /* STABLE */
        }, 8, ["aria-label", "onClick"])]);
      }),
      128
      /* KEYED_FRAGMENT */
    ))])]),
    _: 1
    /* STABLE */
  }, 8, ["open", "title", "default-action"]);
}
//! src/ShortURL/modules/PortletLink.vue
PortletLink_default.render = render;
PortletLink_default.__file = "src\\ShortURL\\modules\\PortletLink.vue";
PortletLink_default.__scopeId = "data-v-7dab7bae";
var PortletLink_default2 = PortletLink_default;
//! src/ShortURL/modules/addPortletLink.ts
var import_ext_gadget3 = require("ext.gadget.Util");
var {
  skin,
  wgUserName: wgUserName2
} = mw.config.get();
var domains2 = getShortDomains();
var portletLinkEventListener = {
  remove: () => {
  }
};
var openDialog = (items) => {
  const root = document.createElement("div");
  document.body.append(root);
  const app = (0, import_vue4.createApp)(PortletLink_default2, {
    open: true,
    items,
    onClose: () => {
      app === null || app === void 0 || app.unmount();
      root.remove();
    }
  });
  app.mount(root);
};
var addPortletLink = (link, permaLink) => {
  const portletId = document.querySelector("#p-cactions") ? "p-cactions" : "p-tb";
  let portletLink = document.querySelector("#t-shortlink");
  portletLink || (portletLink = mw.util.addPortletLink(portletId, "#", getMessage("Share URL for the page"), "t-shortlink", getMessage("Show URL")));
  if (portletLink) {
    const portletLinkClickListener = (event) => {
      event.preventDefault();
      const items = [{
        label: getMessage("Page URL"),
        text: location.href
      }, {
        label: getMessage("Permanent URL"),
        text: `https://${location.host}${permaLink}`
      }];
      if (wgUserName2) {
        for (const [i, domain] of domains2.entries()) {
          items.push({
            label: `${getMessage("Short URL")}${i + 1}`,
            text: `https://${domain}${link}`
          });
        }
      }
      openDialog(items);
    };
    portletLinkEventListener.remove();
    portletLinkEventListener = (0, import_ext_gadget3.addEventListenerWithRemover)({
      target: portletLink.firstElementChild ?? portletLink,
      type: "click",
      listener: portletLinkClickListener
    });
    if (skin === "citizen" && !$(portletLink).find("#mw-ui-icon-wikimedia-shortlink").length) {
      $(portletLink).find("a").prepend('<span id="mw-ui-icon-wikimedia-shortlink" class="citizen-ui-icon mw-ui-icon-link mw-ui-icon-wikimedia-link"></span>');
    }
  }
};
//! src/ShortURL/modules/buildLink.ts
var buildLink = (oldId, diffId) => {
  let link = "/d";
  let permaLink = "/wiki/Special:Diff";
  if (oldId) {
    link += `/${oldId}`;
    permaLink += `/${oldId}`;
  }
  link += `/${diffId}`;
  permaLink += `/${diffId}`;
  addHeaderLink(link, permaLink);
  addPortletLink(link, permaLink);
};
//! src/ShortURL/options.json
var version = "2.0";
//! src/ShortURL/modules/api.ts
var import_ext_gadget4 = require("ext.gadget.Util");
var api = (0, import_ext_gadget4.initMwApi)(`ShortURL/${version}`);
//! src/ShortURL/modules/util/queryApi.ts
var import_ext_gadget5 = require("ext.gadget.Toastify");
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
    console.error("[ShortURL] Ajax error:", error);
    (0, import_ext_gadget5.toastify)({
      text: getMessage("Network error"),
      close: true,
      duration: -1
    }, "error");
    return {};
  }
};
//! src/ShortURL/modules/compareWithRemoteDiffId.ts
var compareWithRemoteDiffId = async (diffId) => {
  var _response$compare;
  const response = await queryApi(diffId);
  if (diffId === mw.config.get("wgDiffNewId") && ((_response$compare = response["compare"]) === null || _response$compare === void 0 ? void 0 : _response$compare.fromrevid) === mw.config.get("wgDiffOldId")) {
    buildLink(0, diffId);
  }
};
//! src/ShortURL/modules/processId.ts
var processId = (isRevisionPage, {
  articleId,
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
    addHeaderLink(`/p/${revisionId}`, `/wiki/Special:Permalink/${revisionId}`);
    addPortletLink(`/p/${revisionId}`, `/wiki/Special:Permalink/${revisionId}`);
  } else if (articleId) {
    addHeaderLink(`/c/${articleId}`, `/index.php?curid=${articleId}`);
    addPortletLink(`/c/${articleId}`, `/index.php?curid=${articleId}`);
  }
};
//! src/ShortURL/ShortURL.ts
(function shortURL() {
  const {
    wgAction,
    wgArticleId,
    wgNamespaceNumber
  } = mw.config.get();
  const domains3 = getShortDomains();
  if (!domains3.length || wgNamespaceNumber < 0) {
    return;
  }
  if (wgAction === "view" && wgArticleId) {
    mw.hook("wikipage.content").add(($content) => {
      if ($content.attr("id") !== "mw-content-text") {
        return;
      }
      const isRevisionPage = checkRevisionPage($content);
      processId(isRevisionPage, {
        articleId: mw.config.get("wgArticleId"),
        diffId: mw.config.get("wgDiffNewId"),
        oldId: mw.config.get("wgDiffOldId"),
        revisionId: mw.config.get("wgRevisionId")
      });
    });
  }
})();

})();

/* </nowiki> */


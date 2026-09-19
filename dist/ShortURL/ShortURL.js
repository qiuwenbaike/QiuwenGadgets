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

// dist/ShortURL/ShortURL.js
//! src/ShortURL/modules/util/checkRevisionPage.ts
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var n = 0, F = function() {
      };
      return { s: F, n: function() {
        return n >= r.length ? { done: true } : { done: false, value: r[n++] };
      }, e: function(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u = false;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function(r2) {
    u = true, o = r2;
  }, f: function() {
    try {
      a || null == t.return || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c), u = i.value;
  } catch (n2) {
    return void e(n2);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function() {
    var t = this, e = arguments;
    return new Promise(function(r, o) {
      var a = n.apply(t, e);
      function _next(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n2);
      }
      function _throw(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n2);
      }
      _next(void 0);
    });
  };
}
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
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/ShortURL/modules/copyText.ts
var copyText = (text) => {
  _asyncToGenerator(function* () {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        yield navigator.clipboard.writeText(text);
        return;
      }
    } catch {
    }
    const helper = document.createElement("textarea");
    helper.value = text;
    helper.setAttribute("readonly", "true");
    helper.style.position = "fixed";
    helper.style.top = "-9999px";
    helper.style.left = "-9999px";
    document.body.append(helper);
    helper.select();
    document.execCommand("copy");
    helper.remove();
  })().then(() => {
    void mw.notify(getMessage("URL copied to clipboard") + text, {
      type: "success",
      tag: "DiffLinks"
    });
  });
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
    icon.className = "gadget-short-link__icon";
    headerLink.append(icon);
    const headerElement = document.createElement("div");
    headerElement.className = "mw-indicator";
    headerElement.id = "mw-indicator-shortURL";
    headerElement.append(headerLink);
    (_document$querySelect = document.querySelector(".mw-indicators")) === null || _document$querySelect === void 0 || _document$querySelect.prepend(headerElement);
  }
  const headerLinkClickListener = (event) => {
    event.preventDefault();
    copyText(wgUserName ? "https://".concat(domains[0]).concat(link) : "https://".concat(location.host).concat(permaLink));
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
var App_default = /* @__PURE__ */ (0, import_vue.defineComponent)({
  __name: "App",
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
//! src/ShortURL/App.vue
App_default.render = render;
App_default.__file = "src\\ShortURL\\App.vue";
App_default.__scopeId = "data-v-c4a2153a";
var App_default2 = App_default;
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
  const app = (0, import_vue4.createApp)(App_default2, {
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
    var _portletLink$firstEle;
    const portletLinkClickListener = (event) => {
      event.preventDefault();
      const items = [{
        label: getMessage("Page URL"),
        text: location.href
      }, {
        label: getMessage("Permanent URL"),
        text: "https://".concat(location.host).concat(permaLink)
      }];
      if (wgUserName2) {
        var _iterator = _createForOfIteratorHelper(domains2.entries()), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            const [i, domain] = _step.value;
            items.push({
              label: "".concat(getMessage("Short URL")).concat(i + 1),
              text: "https://".concat(domain).concat(link)
            });
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      openDialog(items);
    };
    portletLinkEventListener.remove();
    portletLinkEventListener = (0, import_ext_gadget3.addEventListenerWithRemover)({
      target: (_portletLink$firstEle = portletLink.firstElementChild) !== null && _portletLink$firstEle !== void 0 ? _portletLink$firstEle : portletLink,
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
    link += "/".concat(oldId);
    permaLink += "/".concat(oldId);
  }
  link += "/".concat(diffId);
  permaLink += "/".concat(diffId);
  addHeaderLink(link, permaLink);
  addPortletLink(link, permaLink);
};
//! src/ShortURL/options.json
var version = "2.0";
//! src/ShortURL/modules/api.ts
var import_ext_gadget4 = require("ext.gadget.Util");
var api = (0, import_ext_gadget4.initMwApi)("ShortURL/".concat(version));
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
var queryApi = /* @__PURE__ */ (function() {
  var _ref2 = _asyncToGenerator(function* (diffId) {
    try {
      return yield api.get({
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
  });
  return function queryApi2(_x) {
    return _ref2.apply(this, arguments);
  };
})();
//! src/ShortURL/modules/compareWithRemoteDiffId.ts
var compareWithRemoteDiffId = /* @__PURE__ */ (function() {
  var _ref3 = _asyncToGenerator(function* (diffId) {
    var _response$compare;
    const response = yield queryApi(diffId);
    if (diffId === mw.config.get("wgDiffNewId") && ((_response$compare = response["compare"]) === null || _response$compare === void 0 ? void 0 : _response$compare.fromrevid) === mw.config.get("wgDiffOldId")) {
      buildLink(0, diffId);
    }
  });
  return function compareWithRemoteDiffId2(_x2) {
    return _ref3.apply(this, arguments);
  };
})();
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
    addHeaderLink("/p/".concat(revisionId), "/wiki/Special:Permalink/".concat(revisionId));
    addPortletLink("/p/".concat(revisionId), "/wiki/Special:Permalink/".concat(revisionId));
  } else if (articleId) {
    addHeaderLink("/c/".concat(articleId), "/index.php?curid=".concat(articleId));
    addPortletLink("/c/".concat(articleId), "/index.php?curid=".concat(articleId));
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Nob3J0VVJML21vZHVsZXMvdXRpbC9jaGVja1JldmlzaW9uUGFnZS50cyIsICJzcmMvU2hvcnRVUkwvbW9kdWxlcy91dGlsL2dldFNob3J0RG9tYWlucy50cyIsICJzcmMvU2hvcnRVUkwvbW9kdWxlcy9hZGRIZWFkZXJMaW5rLnRzIiwgInNyYy9TaG9ydFVSTC9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1Nob3J0VVJML21vZHVsZXMvY29weVRleHQudHMiLCAic3JjL1Nob3J0VVJML21vZHVsZXMvYWRkUG9ydGxldExpbmsudHMiLCAiZGlzdC9TaG9ydFVSTC9zcmMvU2hvcnRVUkwvQXBwLnZ1ZSIsICJzZmMtdGVtcGxhdGU6RDpcXEdpdFJlcG9zaXRvcnlcXFFpdXdlbkdhZGdldHNcXHNyY1xcU2hvcnRVUkxcXEFwcC52dWU/dHlwZT10ZW1wbGF0ZSIsICJzcmMvU2hvcnRVUkwvQXBwLnZ1ZSIsICJzcmMvU2hvcnRVUkwvbW9kdWxlcy9idWlsZExpbmsudHMiLCAic3JjL1Nob3J0VVJML29wdGlvbnMuanNvbiIsICJzcmMvU2hvcnRVUkwvbW9kdWxlcy9hcGkudHMiLCAic3JjL1Nob3J0VVJML21vZHVsZXMvdXRpbC9xdWVyeUFwaS50cyIsICJzcmMvU2hvcnRVUkwvbW9kdWxlcy9jb21wYXJlV2l0aFJlbW90ZURpZmZJZC50cyIsICJzcmMvU2hvcnRVUkwvbW9kdWxlcy9wcm9jZXNzSWQudHMiLCAic3JjL1Nob3J0VVJML1Nob3J0VVJMLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBjaGVja1JldmlzaW9uUGFnZSA9ICgkY29udGVudDogSlF1ZXJ5KTogYm9vbGVhbiA9PiB7XG5cdHJldHVybiAoXG5cdFx0KCRjb250ZW50LmZpbmQoJyNjb250ZW50U3ViICNtdy1yZXZpc2lvbi1uYXYnKS5sZW5ndGggfHxcblx0XHRcdCRjb250ZW50LmZpbmQoJ21haW4jY29udGVudD4ucHJlLWNvbnRlbnQgI213LXJldmlzaW9uLW5hdicpLmxlbmd0aCkgPiAwXG5cdCk7XG59O1xuXG5leHBvcnQge2NoZWNrUmV2aXNpb25QYWdlfTtcbiIsICJjb25zdCBnZXRTaG9ydERvbWFpbnMgPSAoKTogc3RyaW5nW10gPT4ge1xuXHRjb25zdCB7d2dXaWtpSUR9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRsZXQgZG9tYWluczogc3RyaW5nW10gPSBbXTtcblxuXHRzd2l0Y2ggKHdnV2lraUlEKSB7XG5cdFx0Y2FzZSAnemhxaXV3ZW5iYWlrZSc6XG5cdFx0XHRkb21haW5zID0gWydxd2JrLmNjJywgJ2Jrd3ouY24nXTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJ2xpY2VuY2V3aWtpJzpcblx0XHRcdGRvbWFpbnMgPSBbJ2wucXdiay5jYycsICdsLmJrd3ouY24nXTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJ21uY3FpdXdlbmJhaWtlJzpcblx0XHRcdGRvbWFpbnMgPSBbJ21uYy5xd2JrLmNjJywgJ21uYy5ia3d6LmNuJ107XG5cdFx0XHRicmVhaztcblx0fVxuXG5cdHJldHVybiBkb21haW5zO1xufTtcblxuZXhwb3J0IHtnZXRTaG9ydERvbWFpbnN9O1xuIiwgImltcG9ydCB7YWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtjb3B5VGV4dH0gZnJvbSAnLi9jb3B5VGV4dCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge2dldFNob3J0RG9tYWluc30gZnJvbSAnLi91dGlsL2dldFNob3J0RG9tYWlucyc7XG5cbmNvbnN0IHt3Z1VzZXJOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcbmNvbnN0IGRvbWFpbnMgPSBnZXRTaG9ydERvbWFpbnMoKTtcblxubGV0IGhlYWRlckxpbmtFdmVudExpc3RlbmVyOiBSZXR1cm5UeXBlPHR5cGVvZiBhZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXI+ID0ge1xuXHRyZW1vdmU6ICgpOiB2b2lkID0+IHt9LFxufTtcblxuY29uc3QgYWRkSGVhZGVyTGluayA9IChsaW5rOiBzdHJpbmcsIHBlcm1hTGluazogc3RyaW5nKTogdm9pZCA9PiB7XG5cdGxldCBoZWFkZXJMaW5rOiBIVE1MQW5jaG9yRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXctaW5kaWNhdG9yLXNob3J0VVJMIGEnKTtcblx0aWYgKCFoZWFkZXJMaW5rKSB7XG5cdFx0aGVhZGVyTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblx0XHRoZWFkZXJMaW5rLmhyZWYgPSAnIyc7XG5cdFx0aGVhZGVyTGluay5zZXRBdHRyaWJ1dGUoXG5cdFx0XHQnYXJpYS1sYWJlbCcsXG5cdFx0XHR3Z1VzZXJOYW1lID8gZ2V0TWVzc2FnZSgnU2hvcnQgVVJMJykgOiBnZXRNZXNzYWdlKCdTaGFyZSBVUkwgZm9yIHRoZSBwYWdlJylcblx0XHQpO1xuXHRcdGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0aWNvbi5jbGFzc05hbWUgPSAnZ2FkZ2V0LXNob3J0LWxpbmtfX2ljb24nO1xuXHRcdGhlYWRlckxpbmsuYXBwZW5kKGljb24pO1xuXHRcdGNvbnN0IGhlYWRlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRoZWFkZXJFbGVtZW50LmNsYXNzTmFtZSA9ICdtdy1pbmRpY2F0b3InO1xuXHRcdGhlYWRlckVsZW1lbnQuaWQgPSAnbXctaW5kaWNhdG9yLXNob3J0VVJMJztcblx0XHRoZWFkZXJFbGVtZW50LmFwcGVuZChoZWFkZXJMaW5rKTtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXctaW5kaWNhdG9ycycpPy5wcmVwZW5kKGhlYWRlckVsZW1lbnQpO1xuXHR9XG5cblx0Y29uc3QgaGVhZGVyTGlua0NsaWNrTGlzdGVuZXIgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkID0+IHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGNvcHlUZXh0KHdnVXNlck5hbWUgPyBgaHR0cHM6Ly8ke2RvbWFpbnNbMF19JHtsaW5rfWAgOiBgaHR0cHM6Ly8ke2xvY2F0aW9uLmhvc3R9JHtwZXJtYUxpbmt9YCk7XG5cdH07XG5cblx0aGVhZGVyTGlua0V2ZW50TGlzdGVuZXIucmVtb3ZlKCk7XG5cdGhlYWRlckxpbmtFdmVudExpc3RlbmVyID0gYWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyKHtcblx0XHR0YXJnZXQ6IGhlYWRlckxpbmssXG5cdFx0dHlwZTogJ2NsaWNrJyxcblx0XHRsaXN0ZW5lcjogaGVhZGVyTGlua0NsaWNrTGlzdGVuZXIsXG5cdH0pO1xufTtcblxuZXhwb3J0IHthZGRIZWFkZXJMaW5rfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0Q2xvc2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ2xvc2UnLFxuXHRcdFx0amE6ICfplonjgZjjgosnLFxuXHRcdFx0J3poLWhhbnMnOiAn5YWz6ZetJyxcblx0XHRcdCd6aC1oYW50JzogJ+mXnOmWiScsXG5cdFx0fSksXG5cdFx0J05ldHdvcmsgZXJyb3InOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ05ldHdvcmsgZXJyb3InLFxuXHRcdFx0amE6ICfjg43jg4Pjg4jjg6/jg7zjgq/jgqjjg6njg7wnLFxuXHRcdFx0J3poLWhhbnMnOiAn572R57uc5byC5bi4Jyxcblx0XHRcdCd6aC1oYW50JzogJ+e2sui3r+eVsOW4uCcsXG5cdFx0fSksXG5cdFx0J1BhZ2UgVVJMJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQZXJtYW5lbnQgVVJMJyxcblx0XHRcdCd6aC1oYW5zJzogJ+mhtemdoumTvuaOpScsXG5cdFx0XHQnemgtaGFudCc6ICfpoIHpnaLntrLlnYAnLFxuXHRcdH0pLFxuXHRcdCdQZXJtYW5lbnQgVVJMJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQZXJtYW5lbnQgVVJMJyxcblx0XHRcdCd6aC1oYW5zJzogJ+awuOS5hemTvuaOpScsXG5cdFx0XHQnemgtaGFudCc6ICfmsLjkuYXntrLlnYAnLFxuXHRcdH0pLFxuXHRcdCdTaGFyZSBVUkwgZm9yIHRoZSBwYWdlJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTaGFyZSBVUkwgZm9yIHRoZSBwYWdlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WIhuS6q+acrOmhtemTvuaOpScsXG5cdFx0XHQnemgtaGFudCc6ICfliIbkuqvmnKzpoIHntrLlnYAnLFxuXHRcdH0pLFxuXHRcdCdTaG9ydCBVUkwnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1Nob3J0IFVSTCcsXG5cdFx0XHQnemgtaGFucyc6ICfnn63pk77mjqUnLFxuXHRcdFx0J3poLWhhbnQnOiAn55+t57ay5Z2AJyxcblx0XHR9KSxcblx0XHQnU2hvdyBVUkwnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1Nob3cgVVJMJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aYvuekuuivpemhtemTvuaOpScsXG5cdFx0XHQnemgtaGFudCc6ICfpoa/npLroqbLpoIHntrLlnYAnLFxuXHRcdH0pLFxuXHRcdENvcHk6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ29weScsXG5cdFx0XHQnemgtaGFucyc6ICflpI3liLYnLFxuXHRcdFx0J3poLWhhbnQnOiAn5b6p6KO9Jyxcblx0XHR9KSxcblx0XHQnVVJMIGNvcGllZCB0byBjbGlwYm9hcmQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoZSBVUkwgaGFzIGJlZW4gY29waWVkIHRvIGNsaXBib2FyZDogJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3suWkjeWItuacrOmhtemTvuaOpe+8micsXG5cdFx0XHQnemgtaGFudCc6ICflt7Llvqnoo73mnKzpoIHntrLlnYDvvJonLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IGNvcHlUZXh0ID0gKHRleHQ6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHQoYXN5bmMgKCkgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRpZiAobmF2aWdhdG9yLmNsaXBib2FyZCAmJiB3aW5kb3cuaXNTZWN1cmVDb250ZXh0KSB7XG5cdFx0XHRcdGF3YWl0IG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHRleHQpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7fVxuXG5cdFx0Y29uc3QgaGVscGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcblx0XHRoZWxwZXIudmFsdWUgPSB0ZXh0O1xuXHRcdGhlbHBlci5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJ3RydWUnKTtcblx0XHRoZWxwZXIuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuXHRcdGhlbHBlci5zdHlsZS50b3AgPSAnLTk5OTlweCc7XG5cdFx0aGVscGVyLnN0eWxlLmxlZnQgPSAnLTk5OTlweCc7XG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmQoaGVscGVyKTtcblx0XHRoZWxwZXIuc2VsZWN0KCk7XG5cdFx0ZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcblx0XHRoZWxwZXIucmVtb3ZlKCk7XG5cdH0pKCkudGhlbigoKSA9PiB7XG5cdFx0dm9pZCBtdy5ub3RpZnkoZ2V0TWVzc2FnZSgnVVJMIGNvcGllZCB0byBjbGlwYm9hcmQnKSArIHRleHQsIHtcblx0XHRcdHR5cGU6ICdzdWNjZXNzJyxcblx0XHRcdHRhZzogJ0RpZmZMaW5rcycsXG5cdFx0fSk7XG5cdH0pO1xufTtcblxuZXhwb3J0IHtjb3B5VGV4dH07XG4iLCAiaW1wb3J0IHt0eXBlIEFwcCBhcyBWdWVBcHAsIGNyZWF0ZUFwcH0gZnJvbSAndnVlJztcbmltcG9ydCBBcHAgZnJvbSAnLi4vQXBwLnZ1ZSc7XG5pbXBvcnQge2FkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcn0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7Z2V0U2hvcnREb21haW5zfSBmcm9tICcuL3V0aWwvZ2V0U2hvcnREb21haW5zJztcblxuY29uc3Qge3NraW4sIHdnVXNlck5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuY29uc3QgZG9tYWlucyA9IGdldFNob3J0RG9tYWlucygpO1xuXG5sZXQgcG9ydGxldExpbmtFdmVudExpc3RlbmVyOiBSZXR1cm5UeXBlPHR5cGVvZiBhZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXI+ID0ge1xuXHRyZW1vdmU6ICgpOiB2b2lkID0+IHt9LFxufTtcblxuY29uc3Qgb3BlbkRpYWxvZyA9IChpdGVtczoge2xhYmVsOiBzdHJpbmc7IHRleHQ6IHN0cmluZ31bXSk6IHZvaWQgPT4ge1xuXHRjb25zdCByb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGRvY3VtZW50LmJvZHkuYXBwZW5kKHJvb3QpO1xuXG5cdGNvbnN0IGFwcDogVnVlQXBwPEVsZW1lbnQ+IHwgbnVsbCA9IGNyZWF0ZUFwcChBcHAsIHtcblx0XHRvcGVuOiB0cnVlLFxuXHRcdGl0ZW1zLFxuXHRcdG9uQ2xvc2U6ICgpOiB2b2lkID0+IHtcblx0XHRcdGFwcD8udW5tb3VudCgpO1xuXHRcdFx0cm9vdC5yZW1vdmUoKTtcblx0XHR9LFxuXHR9KTtcblx0YXBwLm1vdW50KHJvb3QpO1xufTtcblxuY29uc3QgYWRkUG9ydGxldExpbmsgPSAobGluazogc3RyaW5nLCBwZXJtYUxpbms6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRjb25zdCBwb3J0bGV0SWQ6ICdwLWNhY3Rpb25zJyB8ICdwLXRiJyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwLWNhY3Rpb25zJykgPyAncC1jYWN0aW9ucycgOiAncC10Yic7XG5cdGxldCBwb3J0bGV0TGluazogSFRNTExJRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdC1zaG9ydGxpbmsnKTtcblx0cG9ydGxldExpbmsgfHw9IG13LnV0aWwuYWRkUG9ydGxldExpbmsoXG5cdFx0cG9ydGxldElkLFxuXHRcdCcjJyxcblx0XHRnZXRNZXNzYWdlKCdTaGFyZSBVUkwgZm9yIHRoZSBwYWdlJyksXG5cdFx0J3Qtc2hvcnRsaW5rJyxcblx0XHRnZXRNZXNzYWdlKCdTaG93IFVSTCcpXG5cdCk7XG5cblx0aWYgKHBvcnRsZXRMaW5rKSB7XG5cdFx0Y29uc3QgcG9ydGxldExpbmtDbGlja0xpc3RlbmVyID0gKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0Y29uc3QgaXRlbXMgPSBbXG5cdFx0XHRcdHtsYWJlbDogZ2V0TWVzc2FnZSgnUGFnZSBVUkwnKSwgdGV4dDogbG9jYXRpb24uaHJlZn0sXG5cdFx0XHRcdHtsYWJlbDogZ2V0TWVzc2FnZSgnUGVybWFuZW50IFVSTCcpLCB0ZXh0OiBgaHR0cHM6Ly8ke2xvY2F0aW9uLmhvc3R9JHtwZXJtYUxpbmt9YH0sXG5cdFx0XHRdO1xuXHRcdFx0aWYgKHdnVXNlck5hbWUpIHtcblx0XHRcdFx0Zm9yIChjb25zdCBbaSwgZG9tYWluXSBvZiBkb21haW5zLmVudHJpZXMoKSkge1xuXHRcdFx0XHRcdGl0ZW1zLnB1c2goe2xhYmVsOiBgJHtnZXRNZXNzYWdlKCdTaG9ydCBVUkwnKX0ke2kgKyAxfWAsIHRleHQ6IGBodHRwczovLyR7ZG9tYWlufSR7bGlua31gfSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG9wZW5EaWFsb2coaXRlbXMpO1xuXHRcdH07XG5cblx0XHRwb3J0bGV0TGlua0V2ZW50TGlzdGVuZXIucmVtb3ZlKCk7XG5cdFx0cG9ydGxldExpbmtFdmVudExpc3RlbmVyID0gYWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyKHtcblx0XHRcdHRhcmdldDogKHBvcnRsZXRMaW5rLmZpcnN0RWxlbWVudENoaWxkID8/IHBvcnRsZXRMaW5rKSBhcyBIVE1MRWxlbWVudCxcblx0XHRcdHR5cGU6ICdjbGljaycsXG5cdFx0XHRsaXN0ZW5lcjogcG9ydGxldExpbmtDbGlja0xpc3RlbmVyLFxuXHRcdH0pO1xuXG5cdFx0aWYgKHNraW4gPT09ICdjaXRpemVuJyAmJiAhJChwb3J0bGV0TGluaykuZmluZCgnI213LXVpLWljb24td2lraW1lZGlhLXNob3J0bGluaycpLmxlbmd0aCkge1xuXHRcdFx0JChwb3J0bGV0TGluaylcblx0XHRcdFx0LmZpbmQoJ2EnKVxuXHRcdFx0XHQucHJlcGVuZChcblx0XHRcdFx0XHQnPHNwYW4gaWQ9XCJtdy11aS1pY29uLXdpa2ltZWRpYS1zaG9ydGxpbmtcIiBjbGFzcz1cImNpdGl6ZW4tdWktaWNvbiBtdy11aS1pY29uLWxpbmsgbXctdWktaWNvbi13aWtpbWVkaWEtbGlua1wiPjwvc3Bhbj4nXG5cdFx0XHRcdCk7XG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQge2FkZFBvcnRsZXRMaW5rfTtcbiIsICI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtDZHhCdXR0b24sIENkeERpYWxvZywgQ2R4SWNvbn0gZnJvbSAnQHdpa2ltZWRpYS9jb2RleCc7XG5pbXBvcnQge3JlZiwgd2F0Y2h9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge2NvcHlUZXh0fSBmcm9tICcuL21vZHVsZXMvY29weVRleHQnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL21vZHVsZXMvaTE4bic7XG5cbmludGVyZmFjZSBDb3B5SXRlbSB7XG5cdGxhYmVsOiBzdHJpbmc7XG5cdHRleHQ6IHN0cmluZztcbn1cblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczx7XG5cdG9wZW46IGJvb2xlYW47XG5cdGl0ZW1zOiBDb3B5SXRlbVtdO1xuXHRvbkNsb3NlOiAoKSA9PiB2b2lkO1xufT4oKTtcblxuY29uc3QgZW1pdCA9IGRlZmluZUVtaXRzPHtcblx0J3VwZGF0ZTpvcGVuJzogW3ZhbHVlOiBib29sZWFuXTtcbn0+KCk7XG5jb25zdCBpc09wZW4gPSByZWYocHJvcHMub3Blbik7XG5cbndhdGNoKFxuXHQoKSA9PiBwcm9wcy5vcGVuLFxuXHQodmFsdWUpID0+IHtcblx0XHRpc09wZW4udmFsdWUgPSB2YWx1ZTtcblx0fSxcblx0e2ltbWVkaWF0ZTogdHJ1ZX1cbik7XG5cbmNvbnN0IGNsb3NlID0gKCk6IHZvaWQgPT4ge1xuXHRpc09wZW4udmFsdWUgPSBmYWxzZTtcblx0ZW1pdCgndXBkYXRlOm9wZW4nLCBmYWxzZSk7XG5cdHByb3BzLm9uQ2xvc2UoKTtcbn07XG5cbmNvbnN0IGhhbmRsZU9wZW5DaGFuZ2UgPSAodmFsdWU6IGJvb2xlYW4pOiB2b2lkID0+IHtcblx0aXNPcGVuLnZhbHVlID0gdmFsdWU7XG5cdGlmICghdmFsdWUpIHtcblx0XHRjbG9zZSgpO1xuXHR9XG59O1xuXG4vKipcbiAqIFNWRyBwYXRocyBpbmxpbmVkIGZyb20gYEB3aWtpbWVkaWEvY29kZXgtaWNvbnNgIHYyLjcuMC5cbiAqXG4gKiBNZWRpYVdpa2kgZG9lcyBub3Qgc2hpcCBhIFJlc291cmNlTG9hZGVyIG1vZHVsZSB0aGF0IGJ1bmRsZXNcbiAqIGBAd2lraW1lZGlhL2NvZGV4LWljb25zYCAoc2VlIGh0dHBzOi8vd3d3Lm1lZGlhd2lraS5vcmcvd2lraS9Db2RleCksXG4gKiBzbyB0aGUgcGF0aCBkYXRhIGlzIGNvcGllZCBoZXJlIHZlcmJhdGltIGFuZCByZW5kZXJlZCBhcyBpbmxpbmUgU1ZHXG4gKiB0byBrZWVwIHRoZSBnYWRnZXQgc2VsZi1jb250YWluZWQgd2hpbGUgc3RpbGwgc291cmNpbmcgdGhlIGljb25zXG4gKiBmcm9tIGBAd2lraW1lZGlhL2NvZGV4LWljb25zYC5cbiAqXG4gKiBAc2VlIHtAbGluayBodHRwczovL2RvYy53aWtpbWVkaWEub3JnL2NvZGV4L2xhdGVzdC9pY29ucy99XG4gKi9cbi8qKiBQYXRoIGZvciBgY2R4SWNvbkNvcHlgLiAqL1xuY29uc3QgY2R4SWNvbkNvcHkgPSB7XG5cdHBhdGg6ICdNMTMgMTlIMVY3aDZWMWgxMnYxMmgtNnptLTYtNlY5SDN2OGg4di00em0yLTJoOFYzSDl6Jyxcblx0c2hvdWxkRmxpcDogdHJ1ZSxcbn07XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuXHQ8Y2R4LWRpYWxvZ1xuXHRcdHYtbW9kZWw6b3Blbj1cImlzT3BlblwiXG5cdFx0OnRpdGxlPVwiZ2V0TWVzc2FnZSgnU2hhcmUgVVJMIGZvciB0aGUgcGFnZScpXCJcblx0XHQ6ZGVmYXVsdC1hY3Rpb249XCJ7bGFiZWw6IGdldE1lc3NhZ2UoJ0Nsb3NlJyl9XCJcblx0XHQ6dXNlLWNsb3NlLWJ1dHRvbj1cInRydWVcIlxuXHRcdEB1cGRhdGU6b3Blbj1cImhhbmRsZU9wZW5DaGFuZ2VcIlxuXHRcdEBkZWZhdWx0PVwiY2xvc2VcIlxuXHQ+XG5cdFx0PGRpdiBjbGFzcz1cInNob3J0LXVybC1jb3B5LWxpc3RcIj5cblx0XHRcdDxkaXYgdi1mb3I9XCJpdGVtIGluIGl0ZW1zXCIgOmtleT1cIml0ZW0udGV4dFwiIGNsYXNzPVwic2hvcnQtdXJsLWNvcHktaXRlbVwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwic2hvcnQtdXJsLWNvcHktbGFiZWxcIj57eyBpdGVtLmxhYmVsIH19PC9kaXY+XG5cdFx0XHRcdDxjb2RlIGNsYXNzPVwic2hvcnQtdXJsLWNvcHktdGV4dFwiPnt7IGl0ZW0udGV4dCB9fTwvY29kZT5cblx0XHRcdFx0PGNkeC1idXR0b24gd2VpZ2h0PVwibm9ybWFsXCIgOmFyaWEtbGFiZWw9XCJnZXRNZXNzYWdlKCdDb3B5JylcIiBAY2xpY2s9XCJjb3B5VGV4dChpdGVtLnRleHQpXCI+XG5cdFx0XHRcdFx0PGNkeC1pY29uIDppY29uPVwiY2R4SWNvbkNvcHlcIiAvPlxuXHRcdFx0XHRcdHt7IGdldE1lc3NhZ2UoJ0NvcHknKSB9fVxuXHRcdFx0XHQ8L2NkeC1idXR0b24+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0PC9jZHgtZGlhbG9nPlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwibGVzc1wiPlxuLnNob3J0LXVybC1jb3B5LWxpc3Qge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDAuNzVyZW07XG59XG5cbi5zaG9ydC11cmwtY29weS1pdGVtIHtcblx0ZGlzcGxheTogZmxleDtcblx0Z2FwOiAwLjVyZW07XG5cdGZsZXgtd3JhcDogd3JhcDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2hvcnQtdXJsLWNvcHktdGV4dCB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRwYWRkaW5nOiAwLjVyZW0gMC43NXJlbTtcblx0Ym9yZGVyOiAxcHggc29saWQgI2VhZWNmMDtcblx0Ym9yZGVyLXJhZGl1czogMC4yNXJlbTtcblx0YmFja2dyb3VuZDogI2Y4ZjlmYTtcblx0Y29sb3I6ICMyMDIxMjI7XG5cdGZvbnQtc2l6ZTogMC44NzVyZW07XG5cdHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcblx0ZmxleDogMSAxIDEwMCU7XG59XG48L3N0eWxlPlxuIiwgImltcG9ydCB7IHJlbmRlckxpc3QgYXMgX3JlbmRlckxpc3QsIEZyYWdtZW50IGFzIF9GcmFnbWVudCwgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBfY3JlYXRlRWxlbWVudEJsb2NrLCB0b0Rpc3BsYXlTdHJpbmcgYXMgX3RvRGlzcGxheVN0cmluZywgY3JlYXRlRWxlbWVudFZOb2RlIGFzIF9jcmVhdGVFbGVtZW50Vk5vZGUsIGNyZWF0ZVZOb2RlIGFzIF9jcmVhdGVWTm9kZSwgY3JlYXRlVGV4dFZOb2RlIGFzIF9jcmVhdGVUZXh0Vk5vZGUsIHdpdGhDdHggYXMgX3dpdGhDdHgsIGNyZWF0ZUJsb2NrIGFzIF9jcmVhdGVCbG9jayB9IGZyb20gXCJ2dWVcIlxuXG5jb25zdCBfaG9pc3RlZF8xID0geyBjbGFzczogXCJzaG9ydC11cmwtY29weS1saXN0XCIgfVxuY29uc3QgX2hvaXN0ZWRfMiA9IHsgY2xhc3M6IFwic2hvcnQtdXJsLWNvcHktbGFiZWxcIiB9XG5jb25zdCBfaG9pc3RlZF8zID0geyBjbGFzczogXCJzaG9ydC11cmwtY29weS10ZXh0XCIgfVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSwgJHByb3BzLCAkc2V0dXAsICRkYXRhLCAkb3B0aW9ucykge1xuICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKCRzZXR1cFtcIkNkeERpYWxvZ1wiXSwge1xuICAgIG9wZW46ICRzZXR1cC5pc09wZW4sXG4gICAgXCJvblVwZGF0ZTpvcGVuXCI6IFtcbiAgICAgIF9jYWNoZVswXSB8fCAoX2NhY2hlWzBdID0gJGV2ZW50ID0+ICgoJHNldHVwLmlzT3BlbikgPSAkZXZlbnQpKSxcbiAgICAgICRzZXR1cC5oYW5kbGVPcGVuQ2hhbmdlXG4gICAgXSxcbiAgICB0aXRsZTogJHNldHVwLmdldE1lc3NhZ2UoJ1NoYXJlIFVSTCBmb3IgdGhlIHBhZ2UnKSxcbiAgICBcImRlZmF1bHQtYWN0aW9uXCI6IHtsYWJlbDogJHNldHVwLmdldE1lc3NhZ2UoJ0Nsb3NlJyl9LFxuICAgIFwidXNlLWNsb3NlLWJ1dHRvblwiOiB0cnVlLFxuICAgIG9uRGVmYXVsdDogJHNldHVwLmNsb3NlXG4gIH0sIHtcbiAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzEsIFtcbiAgICAgICAgKF9vcGVuQmxvY2sodHJ1ZSksIF9jcmVhdGVFbGVtZW50QmxvY2soX0ZyYWdtZW50LCBudWxsLCBfcmVuZGVyTGlzdCgkcHJvcHMuaXRlbXMsIChpdGVtKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJkaXZcIiwge1xuICAgICAgICAgICAga2V5OiBpdGVtLnRleHQsXG4gICAgICAgICAgICBjbGFzczogXCJzaG9ydC11cmwtY29weS1pdGVtXCJcbiAgICAgICAgICB9LCBbXG4gICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzIsIF90b0Rpc3BsYXlTdHJpbmcoaXRlbS5sYWJlbCksIDEgLyogVEVYVCAqLyksXG4gICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiY29kZVwiLCBfaG9pc3RlZF8zLCBfdG9EaXNwbGF5U3RyaW5nKGl0ZW0udGV4dCksIDEgLyogVEVYVCAqLyksXG4gICAgICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiQ2R4QnV0dG9uXCJdLCB7XG4gICAgICAgICAgICAgIHdlaWdodDogXCJub3JtYWxcIixcbiAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsXCI6ICRzZXR1cC5nZXRNZXNzYWdlKCdDb3B5JyksXG4gICAgICAgICAgICAgIG9uQ2xpY2s6ICRldmVudCA9PiAoJHNldHVwLmNvcHlUZXh0KGl0ZW0udGV4dCkpXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiQ2R4SWNvblwiXSwgeyBpY29uOiAkc2V0dXAuY2R4SWNvbkNvcHkgfSksXG4gICAgICAgICAgICAgICAgX2NyZWF0ZVRleHRWTm9kZShcIiBcIiArIF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLmdldE1lc3NhZ2UoJ0NvcHknKSksIDEgLyogVEVYVCAqLylcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgICAgICAgICB9LCA4IC8qIFBST1BTICovLCBbXCJhcmlhLWxhYmVsXCIsIFwib25DbGlja1wiXSlcbiAgICAgICAgICBdKSlcbiAgICAgICAgfSksIDEyOCAvKiBLRVlFRF9GUkFHTUVOVCAqLykpXG4gICAgICBdKVxuICAgIF0pLFxuICAgIF86IDEgLyogU1RBQkxFICovXG4gIH0sIDggLyogUFJPUFMgKi8sIFtcIm9wZW5cIiwgXCJ0aXRsZVwiLCBcImRlZmF1bHQtYWN0aW9uXCJdKSlcbn0iLCAiaW1wb3J0IHNjcmlwdCBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxTaG9ydFVSTFxcXFxBcHAudnVlP3R5cGU9c2NyaXB0XCI7aW1wb3J0IFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxTaG9ydFVSTFxcXFxBcHAudnVlP3R5cGU9c3R5bGUmaW5kZXg9MFwiO2ltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFNob3J0VVJMXFxcXEFwcC52dWU/dHlwZT10ZW1wbGF0ZVwiOyBzY3JpcHQucmVuZGVyID0gcmVuZGVyO3NjcmlwdC5fX2ZpbGUgPSBcInNyY1xcXFxTaG9ydFVSTFxcXFxBcHAudnVlXCI7c2NyaXB0Ll9fc2NvcGVJZCA9IFwiZGF0YS12LWM0YTIxNTNhXCI7ZXhwb3J0IGRlZmF1bHQgc2NyaXB0OyIsICJpbXBvcnQge2FkZEhlYWRlckxpbmt9IGZyb20gJy4vYWRkSGVhZGVyTGluayc7XG5pbXBvcnQge2FkZFBvcnRsZXRMaW5rfSBmcm9tICcuL2FkZFBvcnRsZXRMaW5rJztcblxuY29uc3QgYnVpbGRMaW5rID0gKG9sZElkOiBudW1iZXIgfCBudWxsLCBkaWZmSWQ6IG51bWJlcik6IHZvaWQgPT4ge1xuXHRsZXQgbGluazogc3RyaW5nID0gJy9kJztcblx0bGV0IHBlcm1hTGluazogc3RyaW5nID0gJy93aWtpL1NwZWNpYWw6RGlmZic7XG5cdGlmIChvbGRJZCkge1xuXHRcdGxpbmsgKz0gYC8ke29sZElkfWA7XG5cdFx0cGVybWFMaW5rICs9IGAvJHtvbGRJZH1gO1xuXHR9XG5cdGxpbmsgKz0gYC8ke2RpZmZJZH1gO1xuXHRwZXJtYUxpbmsgKz0gYC8ke2RpZmZJZH1gO1xuXG5cdGFkZEhlYWRlckxpbmsobGluaywgcGVybWFMaW5rKTtcblx0YWRkUG9ydGxldExpbmsobGluaywgcGVybWFMaW5rKTtcbn07XG5cbmV4cG9ydCB7YnVpbGRMaW5rfTtcbiIsICJ7XG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBTaG9ydFVSTC8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuLi9hcGknO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG50eXBlIENvbXBhcmVSZXNwb25zZSA9IHtcblx0Y29tcGFyZT86IHtcblx0XHRmcm9tcmV2aWQ6IG51bWJlcjtcblx0fTtcbn07XG5cbmNvbnN0IHBhcmFtZXRlcnM6IEFwaUNvbXBhcmVQYWdlc1BhcmFtcyA9IHtcblx0YWN0aW9uOiAnY29tcGFyZScsXG5cdGZvcm1hdDogJ2pzb24nLFxuXHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdHByb3A6ICdpZHMnLFxuXHR0b3JlbGF0aXZlOiAncHJldicsXG5cdHNtYXhhZ2U6IDYwMCxcblx0bWF4YWdlOiA2MDAsXG59O1xuXG5jb25zdCBxdWVyeUFwaSA9IGFzeW5jIChkaWZmSWQ6IG51bWJlcik6IFByb21pc2U8Q29tcGFyZVJlc3BvbnNlPiA9PiB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGF3YWl0IGFwaS5nZXQoe1xuXHRcdFx0Li4ucGFyYW1ldGVycyxcblx0XHRcdGZyb21yZXY6IGRpZmZJZCxcblx0XHR9IGFzIHR5cGVvZiBwYXJhbWV0ZXJzKTtcblx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHRjb25zb2xlLmVycm9yKCdbU2hvcnRVUkxdIEFqYXggZXJyb3I6JywgZXJyb3IpO1xuXHRcdHRvYXN0aWZ5KFxuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdOZXR3b3JrIGVycm9yJyksXG5cdFx0XHRcdGNsb3NlOiB0cnVlLFxuXHRcdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0XHR9LFxuXHRcdFx0J2Vycm9yJ1xuXHRcdCk7XG5cblx0XHRyZXR1cm4ge307XG5cdH1cbn07XG5cbmV4cG9ydCB7cXVlcnlBcGl9O1xuIiwgImltcG9ydCB7YnVpbGRMaW5rfSBmcm9tICcuL2J1aWxkTGluayc7XG5pbXBvcnQge3F1ZXJ5QXBpfSBmcm9tICcuL3V0aWwvcXVlcnlBcGknO1xuXG5jb25zdCBjb21wYXJlV2l0aFJlbW90ZURpZmZJZCA9IGFzeW5jIChkaWZmSWQ6IG51bWJlcik6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCByZXNwb25zZTogQXdhaXRlZDxSZXR1cm5UeXBlPHR5cGVvZiBxdWVyeUFwaT4+ID0gYXdhaXQgcXVlcnlBcGkoZGlmZklkKTtcblx0aWYgKGRpZmZJZCA9PT0gbXcuY29uZmlnLmdldCgnd2dEaWZmTmV3SWQnKSAmJiByZXNwb25zZVsnY29tcGFyZSddPy5mcm9tcmV2aWQgPT09IG13LmNvbmZpZy5nZXQoJ3dnRGlmZk9sZElkJykpIHtcblx0XHRidWlsZExpbmsoMCwgZGlmZklkKTtcblx0fVxufTtcblxuZXhwb3J0IHtjb21wYXJlV2l0aFJlbW90ZURpZmZJZH07XG4iLCAiaW1wb3J0IHthZGRIZWFkZXJMaW5rfSBmcm9tICcuL2FkZEhlYWRlckxpbmsnO1xuaW1wb3J0IHthZGRQb3J0bGV0TGlua30gZnJvbSAnLi9hZGRQb3J0bGV0TGluayc7XG5pbXBvcnQge2J1aWxkTGlua30gZnJvbSAnLi9idWlsZExpbmsnO1xuaW1wb3J0IHtjb21wYXJlV2l0aFJlbW90ZURpZmZJZH0gZnJvbSAnLi9jb21wYXJlV2l0aFJlbW90ZURpZmZJZCc7XG5cbmNvbnN0IHByb2Nlc3NJZCA9IChcblx0aXNSZXZpc2lvblBhZ2U6IGJvb2xlYW4sXG5cdHtcblx0XHRhcnRpY2xlSWQsXG5cdFx0ZGlmZklkLFxuXHRcdG9sZElkLFxuXHRcdHJldmlzaW9uSWQsXG5cdH06IHtcblx0XHRhcnRpY2xlSWQ6IG51bWJlcjtcblx0XHRkaWZmSWQ6IG51bWJlciB8IG51bGw7XG5cdFx0b2xkSWQ6IG51bWJlciB8IG51bGw7XG5cdFx0cmV2aXNpb25JZDogbnVtYmVyIHwgbnVsbDtcblx0fVxuKTogdm9pZCA9PiB7XG5cdGlmIChkaWZmSWQpIHtcblx0XHRidWlsZExpbmsob2xkSWQsIGRpZmZJZCk7XG5cdFx0aWYgKG9sZElkKSB7XG5cdFx0XHR2b2lkIGNvbXBhcmVXaXRoUmVtb3RlRGlmZklkKGRpZmZJZCk7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKHJldmlzaW9uSWQgJiYgaXNSZXZpc2lvblBhZ2UpIHtcblx0XHRhZGRIZWFkZXJMaW5rKGAvcC8ke3JldmlzaW9uSWR9YCwgYC93aWtpL1NwZWNpYWw6UGVybWFsaW5rLyR7cmV2aXNpb25JZH1gKTtcblx0XHRhZGRQb3J0bGV0TGluayhgL3AvJHtyZXZpc2lvbklkfWAsIGAvd2lraS9TcGVjaWFsOlBlcm1hbGluay8ke3JldmlzaW9uSWR9YCk7XG5cdH0gZWxzZSBpZiAoYXJ0aWNsZUlkKSB7XG5cdFx0YWRkSGVhZGVyTGluayhgL2MvJHthcnRpY2xlSWR9YCwgYC9pbmRleC5waHA/Y3VyaWQ9JHthcnRpY2xlSWR9YCk7XG5cdFx0YWRkUG9ydGxldExpbmsoYC9jLyR7YXJ0aWNsZUlkfWAsIGAvaW5kZXgucGhwP2N1cmlkPSR7YXJ0aWNsZUlkfWApO1xuXHR9XG59O1xuXG5leHBvcnQge3Byb2Nlc3NJZH07XG4iLCAiaW1wb3J0IHtjaGVja1JldmlzaW9uUGFnZX0gZnJvbSAnLi9tb2R1bGVzL3V0aWwvY2hlY2tSZXZpc2lvblBhZ2UnO1xuaW1wb3J0IHtnZXRTaG9ydERvbWFpbnN9IGZyb20gJy4vbW9kdWxlcy91dGlsL2dldFNob3J0RG9tYWlucyc7XG5pbXBvcnQge3Byb2Nlc3NJZH0gZnJvbSAnLi9tb2R1bGVzL3Byb2Nlc3NJZCc7XG5cbihmdW5jdGlvbiBzaG9ydFVSTCgpIHtcblx0Y29uc3Qge3dnQWN0aW9uLCB3Z0FydGljbGVJZCwgd2dOYW1lc3BhY2VOdW1iZXJ9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGNvbnN0IGRvbWFpbnMgPSBnZXRTaG9ydERvbWFpbnMoKTtcblxuXHRpZiAoIWRvbWFpbnMubGVuZ3RoIHx8IHdnTmFtZXNwYWNlTnVtYmVyIDwgMCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmICh3Z0FjdGlvbiA9PT0gJ3ZpZXcnICYmIHdnQXJ0aWNsZUlkKSB7XG5cdFx0bXcuaG9vaygnd2lraXBhZ2UuY29udGVudCcpLmFkZCgoJGNvbnRlbnQpOiB2b2lkID0+IHtcblx0XHRcdGlmICgkY29udGVudC5hdHRyKCdpZCcpICE9PSAnbXctY29udGVudC10ZXh0Jykge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGlzUmV2aXNpb25QYWdlOiBib29sZWFuID0gY2hlY2tSZXZpc2lvblBhZ2UoJGNvbnRlbnQpO1xuXG5cdFx0XHRwcm9jZXNzSWQoaXNSZXZpc2lvblBhZ2UsIHtcblx0XHRcdFx0YXJ0aWNsZUlkOiBtdy5jb25maWcuZ2V0KCd3Z0FydGljbGVJZCcpLFxuXHRcdFx0XHRkaWZmSWQ6IG13LmNvbmZpZy5nZXQoJ3dnRGlmZk5ld0lkJyksXG5cdFx0XHRcdG9sZElkOiBtdy5jb25maWcuZ2V0KCd3Z0RpZmZPbGRJZCcpLFxuXHRcdFx0XHRyZXZpc2lvbklkOiBtdy5jb25maWcuZ2V0KCd3Z1JldmlzaW9uSWQnKSxcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsb0JBQXFCQyxjQUE4QjtBQUN4RCxVQUNFQSxTQUFTQyxLQUFLLDhCQUE4QixFQUFFQyxVQUM5Q0YsU0FBU0MsS0FBSyw0Q0FBNEMsRUFBRUMsVUFBVTtBQUV6RTs7QUNMQSxJQUFNQyxrQkFBa0JBLE1BQWdCO0FBQ3ZDLFFBQU07SUFBQ0M7RUFBUSxJQUFJQyxHQUFHQyxPQUFPQyxJQUFJO0FBQ2pDLE1BQUlDLFdBQW9CLENBQUE7QUFFeEIsVUFBUUosVUFBQTtJQUNQLEtBQUs7QUFDSkksaUJBQVUsQ0FBQyxXQUFXLFNBQVM7QUFDL0I7SUFDRCxLQUFLO0FBQ0pBLGlCQUFVLENBQUMsYUFBYSxXQUFXO0FBQ25DO0lBQ0QsS0FBSztBQUNKQSxpQkFBVSxDQUFDLGVBQWUsYUFBYTtBQUN2QztFQUNGO0FBRUEsU0FBT0E7QUFDUjs7QUNqQkEsSUFBQUMscUJBQTBDQyxRQUFBLGlCQUFBOztBQ0ExQyxJQUFBQyxvQkFBdUJELFFBQUEsaUJBQUE7QUFFdkIsSUFBTUUsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsUUFBQSxHQUFPRixrQkFBQUcsVUFBUztNQUNmQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRCxrQkFBQSxHQUFpQkwsa0JBQUFHLFVBQVM7TUFDekJDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNELGFBQUEsR0FBWUwsa0JBQUFHLFVBQVM7TUFDcEJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FB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VUFBVSxHQUFBLDJCQUFBL0gsT0FBK0IrSCxVQUFVLENBQUU7RUFDM0UsV0FBV0QsV0FBVztBQUNyQjdJLGtCQUFBLE1BQUFlLE9BQW9COEgsU0FBUyxHQUFBLG9CQUFBOUgsT0FBd0I4SCxTQUFTLENBQUU7QUFDaEV2RCxtQkFBQSxNQUFBdkUsT0FBcUI4SCxTQUFTLEdBQUEsb0JBQUE5SCxPQUF3QjhILFNBQVMsQ0FBRTtFQUNsRTtBQUNEOztDQzNCQyxTQUFTRSxXQUFXO0FBQ3BCLFFBQU07SUFBQ0M7SUFBVUM7SUFBYUM7RUFBaUIsSUFBSS9MLEdBQUdDLE9BQU9DLElBQUk7QUFFakUsUUFBTUMsV0FBVUwsZ0JBQWdCO0FBRWhDLE1BQUksQ0FBQ0ssU0FBUU4sVUFBVWtNLG9CQUFvQixHQUFHO0FBQzdDO0VBQ0Q7QUFFQSxNQUFJRixhQUFhLFVBQVVDLGFBQWE7QUFDdkM5TCxPQUFHZ00sS0FBSyxrQkFBa0IsRUFBRUMsSUFBS3RNLGNBQW1CO0FBQ25ELFVBQUlBLFNBQVN1TSxLQUFLLElBQUksTUFBTSxtQkFBbUI7QUFDOUM7TUFDRDtBQUVBLFlBQU1ULGlCQUEwQi9MLGtCQUFrQkMsUUFBUTtBQUUxRDZMLGdCQUFVQyxnQkFBZ0I7UUFDekJDLFdBQVcxTCxHQUFHQyxPQUFPQyxJQUFJLGFBQWE7UUFDdEN3SixRQUFRMUosR0FBR0MsT0FBT0MsSUFBSSxhQUFhO1FBQ25DdUosT0FBT3pKLEdBQUdDLE9BQU9DLElBQUksYUFBYTtRQUNsQ3lMLFlBQVkzTCxHQUFHQyxPQUFPQyxJQUFJLGNBQWM7TUFDekMsQ0FBQztJQUNGLENBQUM7RUFDRjtBQUNELEdBQUc7IiwKICAibmFtZXMiOiBbImNoZWNrUmV2aXNpb25QYWdlIiwgIiRjb250ZW50IiwgImZpbmQiLCAibGVuZ3RoIiwgImdldFNob3J0RG9tYWlucyIsICJ3Z1dpa2lJRCIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImRvbWFpbnMzIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJDbG9zZSIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJDb3B5IiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJjb3B5VGV4dCIsICJ0ZXh0IiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgIm5hdmlnYXRvciIsICJjbGlwYm9hcmQiLCAid2luZG93IiwgImlzU2VjdXJlQ29udGV4dCIsICJ3cml0ZVRleHQiLCAiaGVscGVyIiwgImRvY3VtZW50IiwgImNyZWF0ZUVsZW1lbnQiLCAidmFsdWUiLCAic2V0QXR0cmlidXRlIiwgInN0eWxlIiwgInBvc2l0aW9uIiwgInRvcCIsICJsZWZ0IiwgImJvZHkiLCAiYXBwZW5kIiwgInNlbGVjdCIsICJleGVjQ29tbWFuZCIsICJyZW1vdmUiLCAidGhlbiIsICJub3RpZnkiLCAidHlwZSIsICJ0YWciLCAid2dVc2VyTmFtZSIsICJkb21haW5zIiwgImhlYWRlckxpbmtFdmVudExpc3RlbmVyIiwgImFkZEhlYWRlckxpbmsiLCAibGluayIsICJwZXJtYUxpbmsiLCAiaGVhZGVyTGluayIsICJxdWVyeVNlbGVjdG9yIiwgIl9kb2N1bWVudCRxdWVyeVNlbGVjdCIsICJocmVmIiwgImljb24iLCAiY2xhc3NOYW1lIiwgImhlYWRlckVsZW1lbnQiLCAiaWQiLCAicHJlcGVuZCIsICJoZWFkZXJMaW5rQ2xpY2tMaXN0ZW5lciIsICJldmVudCIsICJwcmV2ZW50RGVmYXVsdCIsICJjb25jYXQiLCAibG9jYXRpb24iLCAiaG9zdCIsICJhZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXIiLCAidGFyZ2V0IiwgImxpc3RlbmVyIiwgImltcG9ydF92dWU0IiwgImltcG9ydF9jb2RleCIsICJpbXBvcnRfdnVlMiIsICJwcm9wcyIsICJfX3Byb3BzIiwgImVtaXQiLCAiX19lbWl0IiwgImlzT3BlbiIsICJyZWYiLCAib3BlbiIsICJ3YXRjaCIsICJpbW1lZGlhdGUiLCAiY2xvc2UiLCAib25DbG9zZSIsICJoYW5kbGVPcGVuQ2hhbmdlIiwgImNkeEljb25Db3B5IiwgInBhdGgiLCAic2hvdWxkRmxpcCIsICJpbXBvcnRfdnVlMyIsICJfaG9pc3RlZF8xIiwgImNsYXNzIiwgIl9ob2lzdGVkXzIiLCAiX2hvaXN0ZWRfMyIsICJyZW5kZXIiLCAiX2N0eCIsICJfY2FjaGUiLCAiJHByb3BzIiwgIiRzZXR1cCIsICIkZGF0YSIsICIkb3B0aW9ucyIsICJvcGVuQmxvY2siLCAiY3JlYXRlQmxvY2siLCAiJGV2ZW50IiwgInRpdGxlIiwgImxhYmVsIiwgIm9uRGVmYXVsdCIsICJkZWZhdWx0IiwgIndpdGhDdHgiLCAiY3JlYXRlRWxlbWVudFZOb2RlIiwgImNyZWF0ZUVsZW1lbnRCbG9jayIsICJGcmFnbWVudCIsICJyZW5kZXJMaXN0IiwgIml0ZW1zIiwgIml0ZW0iLCAidG9EaXNwbGF5U3RyaW5nIiwgImNyZWF0ZVZOb2RlIiwgIndlaWdodCIsICJvbkNsaWNrIiwgImNyZWF0ZVRleHRWTm9kZSIsICJfIiwgIkFwcF9kZWZhdWx0IiwgIl9fZmlsZSIsICJfX3Njb3BlSWQiLCAiQXBwX2RlZmF1bHQyIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJza2luIiwgIndnVXNlck5hbWUyIiwgImRvbWFpbnMyIiwgInBvcnRsZXRMaW5rRXZlbnRMaXN0ZW5lciIsICJvcGVuRGlhbG9nIiwgInJvb3QiLCAiYXBwIiwgImNyZWF0ZUFwcCIsICJ1bm1vdW50IiwgIm1vdW50IiwgImFkZFBvcnRsZXRMaW5rIiwgInBvcnRsZXRJZCIsICJwb3J0bGV0TGluayIsICJ1dGlsIiwgIl9wb3J0bGV0TGluayRmaXJzdEVsZSIsICJwb3J0bGV0TGlua0NsaWNrTGlzdGVuZXIiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgImVudHJpZXMiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiaSIsICJkb21haW4iLCAicHVzaCIsICJlcnIiLCAiZSIsICJmIiwgImZpcnN0RWxlbWVudENoaWxkIiwgIiQiLCAiYnVpbGRMaW5rIiwgIm9sZElkIiwgImRpZmZJZCIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJhcGkiLCAiaW5pdE13QXBpIiwgImltcG9ydF9leHRfZ2FkZ2V0NSIsICJwYXJhbWV0ZXJzIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgInRvcmVsYXRpdmUiLCAic21heGFnZSIsICJtYXhhZ2UiLCAicXVlcnlBcGkiLCAiX3JlZjIiLCAiZnJvbXJldiIsICJlcnJvciIsICJjb25zb2xlIiwgInRvYXN0aWZ5IiwgImR1cmF0aW9uIiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJjb21wYXJlV2l0aFJlbW90ZURpZmZJZCIsICJfcmVmMyIsICJfcmVzcG9uc2UkY29tcGFyZSIsICJyZXNwb25zZSIsICJmcm9tcmV2aWQiLCAiX3gyIiwgInByb2Nlc3NJZCIsICJpc1JldmlzaW9uUGFnZSIsICJhcnRpY2xlSWQiLCAicmV2aXNpb25JZCIsICJzaG9ydFVSTCIsICJ3Z0FjdGlvbiIsICJ3Z0FydGljbGVJZCIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJob29rIiwgImFkZCIsICJhdHRyIl0KfQo=

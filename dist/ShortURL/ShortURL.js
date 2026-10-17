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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Nob3J0VVJML21vZHVsZXMvdXRpbC9jaGVja1JldmlzaW9uUGFnZS50cyIsICJzcmMvU2hvcnRVUkwvbW9kdWxlcy91dGlsL2dldFNob3J0RG9tYWlucy50cyIsICJzcmMvU2hvcnRVUkwvbW9kdWxlcy9hZGRIZWFkZXJMaW5rLnRzIiwgInNyYy9TaG9ydFVSTC9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1Nob3J0VVJML21vZHVsZXMvY29weVRleHQudHMiLCAic3JjL1Nob3J0VVJML21vZHVsZXMvYWRkUG9ydGxldExpbmsudHMiLCAiZGlzdC9TaG9ydFVSTC9zcmMvU2hvcnRVUkwvQXBwLnZ1ZSIsICJzZmMtdGVtcGxhdGU6RDpcXEdpdFJlcG9zaXRvcnlcXFFpdXdlbkdhZGdldHNcXHNyY1xcU2hvcnRVUkxcXEFwcC52dWU/dHlwZT10ZW1wbGF0ZSIsICJzcmMvU2hvcnRVUkwvQXBwLnZ1ZSIsICJzcmMvU2hvcnRVUkwvbW9kdWxlcy9idWlsZExpbmsudHMiLCAic3JjL1Nob3J0VVJML29wdGlvbnMuanNvbiIsICJzcmMvU2hvcnRVUkwvbW9kdWxlcy9hcGkudHMiLCAic3JjL1Nob3J0VVJML21vZHVsZXMvdXRpbC9xdWVyeUFwaS50cyIsICJzcmMvU2hvcnRVUkwvbW9kdWxlcy9jb21wYXJlV2l0aFJlbW90ZURpZmZJZC50cyIsICJzcmMvU2hvcnRVUkwvbW9kdWxlcy9wcm9jZXNzSWQudHMiLCAic3JjL1Nob3J0VVJML1Nob3J0VVJMLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBjaGVja1JldmlzaW9uUGFnZSA9ICgkY29udGVudDogSlF1ZXJ5KTogYm9vbGVhbiA9PiB7XG5cdHJldHVybiAoXG5cdFx0KCRjb250ZW50LmZpbmQoJyNjb250ZW50U3ViICNtdy1yZXZpc2lvbi1uYXYnKS5sZW5ndGggfHxcblx0XHRcdCRjb250ZW50LmZpbmQoJ21haW4jY29udGVudD4ucHJlLWNvbnRlbnQgI213LXJldmlzaW9uLW5hdicpLmxlbmd0aCkgPiAwXG5cdCk7XG59O1xuXG5leHBvcnQge2NoZWNrUmV2aXNpb25QYWdlfTtcbiIsICJjb25zdCBnZXRTaG9ydERvbWFpbnMgPSAoKTogc3RyaW5nW10gPT4ge1xuXHRjb25zdCB7d2dXaWtpSUR9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRsZXQgZG9tYWluczogc3RyaW5nW10gPSBbXTtcblxuXHRzd2l0Y2ggKHdnV2lraUlEKSB7XG5cdFx0Y2FzZSAnemhxaXV3ZW5iYWlrZSc6XG5cdFx0XHRkb21haW5zID0gWydxd2JrLmNjJywgJ2Jrd3ouY24nXTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJ2xpY2VuY2V3aWtpJzpcblx0XHRcdGRvbWFpbnMgPSBbJ2wucXdiay5jYycsICdsLmJrd3ouY24nXTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJ21uY3FpdXdlbmJhaWtlJzpcblx0XHRcdGRvbWFpbnMgPSBbJ21uYy5xd2JrLmNjJywgJ21uYy5ia3d6LmNuJ107XG5cdFx0XHRicmVhaztcblx0fVxuXG5cdHJldHVybiBkb21haW5zO1xufTtcblxuZXhwb3J0IHtnZXRTaG9ydERvbWFpbnN9O1xuIiwgImltcG9ydCB7YWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtjb3B5VGV4dH0gZnJvbSAnLi9jb3B5VGV4dCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge2dldFNob3J0RG9tYWluc30gZnJvbSAnLi91dGlsL2dldFNob3J0RG9tYWlucyc7XG5cbmNvbnN0IHt3Z1VzZXJOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcbmNvbnN0IGRvbWFpbnMgPSBnZXRTaG9ydERvbWFpbnMoKTtcblxubGV0IGhlYWRlckxpbmtFdmVudExpc3RlbmVyOiBSZXR1cm5UeXBlPHR5cGVvZiBhZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXI+ID0ge1xuXHRyZW1vdmU6ICgpOiB2b2lkID0+IHt9LFxufTtcblxuY29uc3QgYWRkSGVhZGVyTGluayA9IChsaW5rOiBzdHJpbmcsIHBlcm1hTGluazogc3RyaW5nKTogdm9pZCA9PiB7XG5cdGxldCBoZWFkZXJMaW5rOiBIVE1MQW5jaG9yRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXctaW5kaWNhdG9yLXNob3J0VVJMIGEnKTtcblx0aWYgKCFoZWFkZXJMaW5rKSB7XG5cdFx0aGVhZGVyTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblx0XHRoZWFkZXJMaW5rLmhyZWYgPSAnIyc7XG5cdFx0aGVhZGVyTGluay5zZXRBdHRyaWJ1dGUoXG5cdFx0XHQnYXJpYS1sYWJlbCcsXG5cdFx0XHR3Z1VzZXJOYW1lID8gZ2V0TWVzc2FnZSgnU2hvcnQgVVJMJykgOiBnZXRNZXNzYWdlKCdTaGFyZSBVUkwgZm9yIHRoZSBwYWdlJylcblx0XHQpO1xuXHRcdGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0aWNvbi5jbGFzc05hbWUgPSAnZ2FkZ2V0LXNob3J0LWxpbmtfX2ljb24nO1xuXHRcdGhlYWRlckxpbmsuYXBwZW5kKGljb24pO1xuXHRcdGNvbnN0IGhlYWRlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRoZWFkZXJFbGVtZW50LmNsYXNzTmFtZSA9ICdtdy1pbmRpY2F0b3InO1xuXHRcdGhlYWRlckVsZW1lbnQuaWQgPSAnbXctaW5kaWNhdG9yLXNob3J0VVJMJztcblx0XHRoZWFkZXJFbGVtZW50LmFwcGVuZChoZWFkZXJMaW5rKTtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXctaW5kaWNhdG9ycycpPy5wcmVwZW5kKGhlYWRlckVsZW1lbnQpO1xuXHR9XG5cblx0Y29uc3QgaGVhZGVyTGlua0NsaWNrTGlzdGVuZXIgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkID0+IHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGNvcHlUZXh0KHdnVXNlck5hbWUgPyBgaHR0cHM6Ly8ke2RvbWFpbnNbMF19JHtsaW5rfWAgOiBgaHR0cHM6Ly8ke2xvY2F0aW9uLmhvc3R9JHtwZXJtYUxpbmt9YCk7XG5cdH07XG5cblx0aGVhZGVyTGlua0V2ZW50TGlzdGVuZXIucmVtb3ZlKCk7XG5cdGhlYWRlckxpbmtFdmVudExpc3RlbmVyID0gYWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyKHtcblx0XHR0YXJnZXQ6IGhlYWRlckxpbmssXG5cdFx0dHlwZTogJ2NsaWNrJyxcblx0XHRsaXN0ZW5lcjogaGVhZGVyTGlua0NsaWNrTGlzdGVuZXIsXG5cdH0pO1xufTtcblxuZXhwb3J0IHthZGRIZWFkZXJMaW5rfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0Q2xvc2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ2xvc2UnLFxuXHRcdFx0amE6ICfplonjgZjjgosnLFxuXHRcdFx0J3poLWhhbnMnOiAn5YWz6ZetJyxcblx0XHRcdCd6aC1oYW50JzogJ+mXnOmWiScsXG5cdFx0fSksXG5cdFx0J05ldHdvcmsgZXJyb3InOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ05ldHdvcmsgZXJyb3InLFxuXHRcdFx0amE6ICfjg43jg4Pjg4jjg6/jg7zjgq/jgqjjg6njg7wnLFxuXHRcdFx0J3poLWhhbnMnOiAn572R57uc5byC5bi4Jyxcblx0XHRcdCd6aC1oYW50JzogJ+e2sui3r+eVsOW4uCcsXG5cdFx0fSksXG5cdFx0J1BhZ2UgVVJMJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQZXJtYW5lbnQgVVJMJyxcblx0XHRcdCd6aC1oYW5zJzogJ+mhtemdoumTvuaOpScsXG5cdFx0XHQnemgtaGFudCc6ICfpoIHpnaLntrLlnYAnLFxuXHRcdH0pLFxuXHRcdCdQZXJtYW5lbnQgVVJMJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQZXJtYW5lbnQgVVJMJyxcblx0XHRcdCd6aC1oYW5zJzogJ+awuOS5hemTvuaOpScsXG5cdFx0XHQnemgtaGFudCc6ICfmsLjkuYXntrLlnYAnLFxuXHRcdH0pLFxuXHRcdCdTaGFyZSBVUkwgZm9yIHRoZSBwYWdlJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTaGFyZSBVUkwgZm9yIHRoZSBwYWdlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WIhuS6q+acrOmhtemTvuaOpScsXG5cdFx0XHQnemgtaGFudCc6ICfliIbkuqvmnKzpoIHntrLlnYAnLFxuXHRcdH0pLFxuXHRcdCdTaG9ydCBVUkwnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1Nob3J0IFVSTCcsXG5cdFx0XHQnemgtaGFucyc6ICfnn63pk77mjqUnLFxuXHRcdFx0J3poLWhhbnQnOiAn55+t57ay5Z2AJyxcblx0XHR9KSxcblx0XHQnU2hvdyBVUkwnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1Nob3cgVVJMJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aYvuekuuivpemhtemTvuaOpScsXG5cdFx0XHQnemgtaGFudCc6ICfpoa/npLroqbLpoIHntrLlnYAnLFxuXHRcdH0pLFxuXHRcdENvcHk6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ29weScsXG5cdFx0XHQnemgtaGFucyc6ICflpI3liLYnLFxuXHRcdFx0J3poLWhhbnQnOiAn5b6p6KO9Jyxcblx0XHR9KSxcblx0XHQnVVJMIGNvcGllZCB0byBjbGlwYm9hcmQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoZSBVUkwgaGFzIGJlZW4gY29waWVkIHRvIGNsaXBib2FyZDogJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3suWkjeWItuacrOmhtemTvuaOpe+8micsXG5cdFx0XHQnemgtaGFudCc6ICflt7Llvqnoo73mnKzpoIHntrLlnYDvvJonLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IGNvcHlUZXh0ID0gKHRleHQ6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHQoYXN5bmMgKCkgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRpZiAobmF2aWdhdG9yLmNsaXBib2FyZCAmJiB3aW5kb3cuaXNTZWN1cmVDb250ZXh0KSB7XG5cdFx0XHRcdGF3YWl0IG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHRleHQpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7fVxuXG5cdFx0Y29uc3QgaGVscGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcblx0XHRoZWxwZXIudmFsdWUgPSB0ZXh0O1xuXHRcdGhlbHBlci5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJ3RydWUnKTtcblx0XHRoZWxwZXIuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuXHRcdGhlbHBlci5zdHlsZS50b3AgPSAnLTk5OTlweCc7XG5cdFx0aGVscGVyLnN0eWxlLmxlZnQgPSAnLTk5OTlweCc7XG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmQoaGVscGVyKTtcblx0XHRoZWxwZXIuc2VsZWN0KCk7XG5cdFx0ZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcblx0XHRoZWxwZXIucmVtb3ZlKCk7XG5cdH0pKCkudGhlbigoKSA9PiB7XG5cdFx0dm9pZCBtdy5ub3RpZnkoZ2V0TWVzc2FnZSgnVVJMIGNvcGllZCB0byBjbGlwYm9hcmQnKSArIHRleHQsIHtcblx0XHRcdHR5cGU6ICdzdWNjZXNzJyxcblx0XHRcdHRhZzogJ0RpZmZMaW5rcycsXG5cdFx0fSk7XG5cdH0pO1xufTtcblxuZXhwb3J0IHtjb3B5VGV4dH07XG4iLCAiaW1wb3J0IHt0eXBlIEFwcCBhcyBWdWVBcHAsIGNyZWF0ZUFwcH0gZnJvbSAndnVlJztcbmltcG9ydCBBcHAgZnJvbSAnLi4vQXBwLnZ1ZSc7XG5pbXBvcnQge2FkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcn0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7Z2V0U2hvcnREb21haW5zfSBmcm9tICcuL3V0aWwvZ2V0U2hvcnREb21haW5zJztcblxuY29uc3Qge3NraW4sIHdnVXNlck5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuY29uc3QgZG9tYWlucyA9IGdldFNob3J0RG9tYWlucygpO1xuXG5sZXQgcG9ydGxldExpbmtFdmVudExpc3RlbmVyOiBSZXR1cm5UeXBlPHR5cGVvZiBhZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXI+ID0ge1xuXHRyZW1vdmU6ICgpOiB2b2lkID0+IHt9LFxufTtcblxuY29uc3Qgb3BlbkRpYWxvZyA9IChpdGVtczoge2xhYmVsOiBzdHJpbmc7IHRleHQ6IHN0cmluZ31bXSk6IHZvaWQgPT4ge1xuXHRjb25zdCByb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGRvY3VtZW50LmJvZHkuYXBwZW5kKHJvb3QpO1xuXG5cdGNvbnN0IGFwcDogVnVlQXBwPEVsZW1lbnQ+IHwgbnVsbCA9IGNyZWF0ZUFwcChBcHAsIHtcblx0XHRvcGVuOiB0cnVlLFxuXHRcdGl0ZW1zLFxuXHRcdG9uQ2xvc2U6ICgpOiB2b2lkID0+IHtcblx0XHRcdGFwcD8udW5tb3VudCgpO1xuXHRcdFx0cm9vdC5yZW1vdmUoKTtcblx0XHR9LFxuXHR9KTtcblx0YXBwLm1vdW50KHJvb3QpO1xufTtcblxuY29uc3QgYWRkUG9ydGxldExpbmsgPSAobGluazogc3RyaW5nLCBwZXJtYUxpbms6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRjb25zdCBwb3J0bGV0SWQ6ICdwLWNhY3Rpb25zJyB8ICdwLXRiJyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwLWNhY3Rpb25zJykgPyAncC1jYWN0aW9ucycgOiAncC10Yic7XG5cdGxldCBwb3J0bGV0TGluazogSFRNTExJRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdC1zaG9ydGxpbmsnKTtcblx0cG9ydGxldExpbmsgfHw9IG13LnV0aWwuYWRkUG9ydGxldExpbmsoXG5cdFx0cG9ydGxldElkLFxuXHRcdCcjJyxcblx0XHRnZXRNZXNzYWdlKCdTaGFyZSBVUkwgZm9yIHRoZSBwYWdlJyksXG5cdFx0J3Qtc2hvcnRsaW5rJyxcblx0XHRnZXRNZXNzYWdlKCdTaG93IFVSTCcpXG5cdCk7XG5cblx0aWYgKHBvcnRsZXRMaW5rKSB7XG5cdFx0Y29uc3QgcG9ydGxldExpbmtDbGlja0xpc3RlbmVyID0gKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0Y29uc3QgaXRlbXMgPSBbXG5cdFx0XHRcdHtsYWJlbDogZ2V0TWVzc2FnZSgnUGFnZSBVUkwnKSwgdGV4dDogbG9jYXRpb24uaHJlZn0sXG5cdFx0XHRcdHtsYWJlbDogZ2V0TWVzc2FnZSgnUGVybWFuZW50IFVSTCcpLCB0ZXh0OiBgaHR0cHM6Ly8ke2xvY2F0aW9uLmhvc3R9JHtwZXJtYUxpbmt9YH0sXG5cdFx0XHRdO1xuXHRcdFx0aWYgKHdnVXNlck5hbWUpIHtcblx0XHRcdFx0Zm9yIChjb25zdCBbaSwgZG9tYWluXSBvZiBkb21haW5zLmVudHJpZXMoKSkge1xuXHRcdFx0XHRcdGl0ZW1zLnB1c2goe2xhYmVsOiBgJHtnZXRNZXNzYWdlKCdTaG9ydCBVUkwnKX0ke2kgKyAxfWAsIHRleHQ6IGBodHRwczovLyR7ZG9tYWlufSR7bGlua31gfSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG9wZW5EaWFsb2coaXRlbXMpO1xuXHRcdH07XG5cblx0XHRwb3J0bGV0TGlua0V2ZW50TGlzdGVuZXIucmVtb3ZlKCk7XG5cdFx0cG9ydGxldExpbmtFdmVudExpc3RlbmVyID0gYWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyKHtcblx0XHRcdHRhcmdldDogKHBvcnRsZXRMaW5rLmZpcnN0RWxlbWVudENoaWxkID8/IHBvcnRsZXRMaW5rKSBhcyBIVE1MRWxlbWVudCxcblx0XHRcdHR5cGU6ICdjbGljaycsXG5cdFx0XHRsaXN0ZW5lcjogcG9ydGxldExpbmtDbGlja0xpc3RlbmVyLFxuXHRcdH0pO1xuXG5cdFx0aWYgKHNraW4gPT09ICdjaXRpemVuJyAmJiAhJChwb3J0bGV0TGluaykuZmluZCgnI213LXVpLWljb24td2lraW1lZGlhLXNob3J0bGluaycpLmxlbmd0aCkge1xuXHRcdFx0JChwb3J0bGV0TGluaylcblx0XHRcdFx0LmZpbmQoJ2EnKVxuXHRcdFx0XHQucHJlcGVuZChcblx0XHRcdFx0XHQnPHNwYW4gaWQ9XCJtdy11aS1pY29uLXdpa2ltZWRpYS1zaG9ydGxpbmtcIiBjbGFzcz1cImNpdGl6ZW4tdWktaWNvbiBtdy11aS1pY29uLWxpbmsgbXctdWktaWNvbi13aWtpbWVkaWEtbGlua1wiPjwvc3Bhbj4nXG5cdFx0XHRcdCk7XG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQge2FkZFBvcnRsZXRMaW5rfTtcbiIsICI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtDZHhCdXR0b24sIENkeERpYWxvZywgQ2R4SWNvbn0gZnJvbSAnQHdpa2ltZWRpYS9jb2RleCc7XG5pbXBvcnQge3JlZiwgd2F0Y2h9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge2NvcHlUZXh0fSBmcm9tICcuL21vZHVsZXMvY29weVRleHQnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL21vZHVsZXMvaTE4bic7XG5cbmludGVyZmFjZSBDb3B5SXRlbSB7XG5cdGxhYmVsOiBzdHJpbmc7XG5cdHRleHQ6IHN0cmluZztcbn1cblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczx7XG5cdG9wZW46IGJvb2xlYW47XG5cdGl0ZW1zOiBDb3B5SXRlbVtdO1xuXHRvbkNsb3NlOiAoKSA9PiB2b2lkO1xufT4oKTtcblxuY29uc3QgZW1pdCA9IGRlZmluZUVtaXRzPHtcblx0J3VwZGF0ZTpvcGVuJzogW3ZhbHVlOiBib29sZWFuXTtcbn0+KCk7XG5jb25zdCBpc09wZW4gPSByZWYocHJvcHMub3Blbik7XG5cbndhdGNoKFxuXHQoKSA9PiBwcm9wcy5vcGVuLFxuXHQodmFsdWUpID0+IHtcblx0XHRpc09wZW4udmFsdWUgPSB2YWx1ZTtcblx0fSxcblx0e2ltbWVkaWF0ZTogdHJ1ZX1cbik7XG5cbmNvbnN0IGNsb3NlID0gKCk6IHZvaWQgPT4ge1xuXHRpc09wZW4udmFsdWUgPSBmYWxzZTtcblx0ZW1pdCgndXBkYXRlOm9wZW4nLCBmYWxzZSk7XG5cdHByb3BzLm9uQ2xvc2UoKTtcbn07XG5cbmNvbnN0IGhhbmRsZU9wZW5DaGFuZ2UgPSAodmFsdWU6IGJvb2xlYW4pOiB2b2lkID0+IHtcblx0aXNPcGVuLnZhbHVlID0gdmFsdWU7XG5cdGlmICghdmFsdWUpIHtcblx0XHRjbG9zZSgpO1xuXHR9XG59O1xuXG4vKipcbiAqIFNWRyBwYXRocyBpbmxpbmVkIGZyb20gYEB3aWtpbWVkaWEvY29kZXgtaWNvbnNgIHYyLjcuMC5cbiAqXG4gKiBNZWRpYVdpa2kgZG9lcyBub3Qgc2hpcCBhIFJlc291cmNlTG9hZGVyIG1vZHVsZSB0aGF0IGJ1bmRsZXNcbiAqIGBAd2lraW1lZGlhL2NvZGV4LWljb25zYCAoc2VlIGh0dHBzOi8vd3d3Lm1lZGlhd2lraS5vcmcvd2lraS9Db2RleCksXG4gKiBzbyB0aGUgcGF0aCBkYXRhIGlzIGNvcGllZCBoZXJlIHZlcmJhdGltIGFuZCByZW5kZXJlZCBhcyBpbmxpbmUgU1ZHXG4gKiB0byBrZWVwIHRoZSBnYWRnZXQgc2VsZi1jb250YWluZWQgd2hpbGUgc3RpbGwgc291cmNpbmcgdGhlIGljb25zXG4gKiBmcm9tIGBAd2lraW1lZGlhL2NvZGV4LWljb25zYC5cbiAqXG4gKiBAc2VlIHtAbGluayBodHRwczovL2RvYy53aWtpbWVkaWEub3JnL2NvZGV4L2xhdGVzdC9pY29ucy99XG4gKi9cblxuLyoqIFBhdGggZm9yIGBjZHhJY29uQ29weWAuICovXG5jb25zdCBjZHhJY29uQ29weSA9IHtcblx0cGF0aDogJ00xMyAxOUgxVjdoNlYxaDEydjEyaC02em0tNi02VjlIM3Y4aDh2LTR6bTItMmg4VjNIOXonLFxuXHRzaG91bGRGbGlwOiB0cnVlLFxufTtcbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG5cdDxjZHgtZGlhbG9nXG5cdFx0di1tb2RlbDpvcGVuPVwiaXNPcGVuXCJcblx0XHQ6dGl0bGU9XCJnZXRNZXNzYWdlKCdTaGFyZSBVUkwgZm9yIHRoZSBwYWdlJylcIlxuXHRcdDpkZWZhdWx0LWFjdGlvbj1cIntsYWJlbDogZ2V0TWVzc2FnZSgnQ2xvc2UnKX1cIlxuXHRcdDp1c2UtY2xvc2UtYnV0dG9uPVwidHJ1ZVwiXG5cdFx0QHVwZGF0ZTpvcGVuPVwiaGFuZGxlT3BlbkNoYW5nZVwiXG5cdFx0QGRlZmF1bHQ9XCJjbG9zZVwiXG5cdD5cblx0XHQ8ZGl2IGNsYXNzPVwic2hvcnQtdXJsLWNvcHktbGlzdFwiPlxuXHRcdFx0PGRpdiB2LWZvcj1cIml0ZW0gaW4gaXRlbXNcIiA6a2V5PVwiaXRlbS50ZXh0XCIgY2xhc3M9XCJzaG9ydC11cmwtY29weS1pdGVtXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJzaG9ydC11cmwtY29weS1sYWJlbFwiPnt7IGl0ZW0ubGFiZWwgfX08L2Rpdj5cblx0XHRcdFx0PGNvZGUgY2xhc3M9XCJzaG9ydC11cmwtY29weS10ZXh0XCI+e3sgaXRlbS50ZXh0IH19PC9jb2RlPlxuXHRcdFx0XHQ8Y2R4LWJ1dHRvbiB3ZWlnaHQ9XCJub3JtYWxcIiA6YXJpYS1sYWJlbD1cImdldE1lc3NhZ2UoJ0NvcHknKVwiIEBjbGljaz1cImNvcHlUZXh0KGl0ZW0udGV4dClcIj5cblx0XHRcdFx0XHQ8Y2R4LWljb24gOmljb249XCJjZHhJY29uQ29weVwiIC8+XG5cdFx0XHRcdFx0e3sgZ2V0TWVzc2FnZSgnQ29weScpIH19XG5cdFx0XHRcdDwvY2R4LWJ1dHRvbj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L2NkeC1kaWFsb2c+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJsZXNzXCI+XG4uc2hvcnQtdXJsLWNvcHktbGlzdCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMC43NXJlbTtcbn1cblxuLnNob3J0LXVybC1jb3B5LWl0ZW0ge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRnYXA6IDAuNXJlbTtcblx0ZmxleC13cmFwOiB3cmFwO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zaG9ydC11cmwtY29weS10ZXh0IHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xuXHRib3JkZXI6IDFweCBzb2xpZCAjZWFlY2YwO1xuXHRib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuXHRiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuXHRjb2xvcjogIzIwMjEyMjtcblx0Zm9udC1zaXplOiAwLjg3NXJlbTtcblx0d29yZC1icmVhazogYnJlYWstYWxsO1xuXHRmbGV4OiAxIDEgMTAwJTtcbn1cbjwvc3R5bGU+XG4iLCAiaW1wb3J0IHsgcmVuZGVyTGlzdCBhcyBfcmVuZGVyTGlzdCwgRnJhZ21lbnQgYXMgX0ZyYWdtZW50LCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2ssIHRvRGlzcGxheVN0cmluZyBhcyBfdG9EaXNwbGF5U3RyaW5nLCBjcmVhdGVFbGVtZW50Vk5vZGUgYXMgX2NyZWF0ZUVsZW1lbnRWTm9kZSwgY3JlYXRlVk5vZGUgYXMgX2NyZWF0ZVZOb2RlLCBjcmVhdGVUZXh0Vk5vZGUgYXMgX2NyZWF0ZVRleHRWTm9kZSwgd2l0aEN0eCBhcyBfd2l0aEN0eCwgY3JlYXRlQmxvY2sgYXMgX2NyZWF0ZUJsb2NrIH0gZnJvbSBcInZ1ZVwiXG5cbmNvbnN0IF9ob2lzdGVkXzEgPSB7IGNsYXNzOiBcInNob3J0LXVybC1jb3B5LWxpc3RcIiB9XG5jb25zdCBfaG9pc3RlZF8yID0geyBjbGFzczogXCJzaG9ydC11cmwtY29weS1sYWJlbFwiIH1cbmNvbnN0IF9ob2lzdGVkXzMgPSB7IGNsYXNzOiBcInNob3J0LXVybC1jb3B5LXRleHRcIiB9XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soJHNldHVwW1wiQ2R4RGlhbG9nXCJdLCB7XG4gICAgb3BlbjogJHNldHVwLmlzT3BlbixcbiAgICBcIm9uVXBkYXRlOm9wZW5cIjogW1xuICAgICAgX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSAkZXZlbnQgPT4gKCgkc2V0dXAuaXNPcGVuKSA9ICRldmVudCkpLFxuICAgICAgJHNldHVwLmhhbmRsZU9wZW5DaGFuZ2VcbiAgICBdLFxuICAgIHRpdGxlOiAkc2V0dXAuZ2V0TWVzc2FnZSgnU2hhcmUgVVJMIGZvciB0aGUgcGFnZScpLFxuICAgIFwiZGVmYXVsdC1hY3Rpb25cIjoge2xhYmVsOiAkc2V0dXAuZ2V0TWVzc2FnZSgnQ2xvc2UnKX0sXG4gICAgXCJ1c2UtY2xvc2UtYnV0dG9uXCI6IHRydWUsXG4gICAgb25EZWZhdWx0OiAkc2V0dXAuY2xvc2VcbiAgfSwge1xuICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfMSwgW1xuICAgICAgICAoX29wZW5CbG9jayh0cnVlKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhfRnJhZ21lbnQsIG51bGwsIF9yZW5kZXJMaXN0KCRwcm9wcy5pdGVtcywgKGl0ZW0pID0+IHtcbiAgICAgICAgICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCB7XG4gICAgICAgICAgICBrZXk6IGl0ZW0udGV4dCxcbiAgICAgICAgICAgIGNsYXNzOiBcInNob3J0LXVybC1jb3B5LWl0ZW1cIlxuICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfMiwgX3RvRGlzcGxheVN0cmluZyhpdGVtLmxhYmVsKSwgMSAvKiBURVhUICovKSxcbiAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJjb2RlXCIsIF9ob2lzdGVkXzMsIF90b0Rpc3BsYXlTdHJpbmcoaXRlbS50ZXh0KSwgMSAvKiBURVhUICovKSxcbiAgICAgICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDZHhCdXR0b25cIl0sIHtcbiAgICAgICAgICAgICAgd2VpZ2h0OiBcIm5vcm1hbFwiLFxuICAgICAgICAgICAgICBcImFyaWEtbGFiZWxcIjogJHNldHVwLmdldE1lc3NhZ2UoJ0NvcHknKSxcbiAgICAgICAgICAgICAgb25DbGljazogJGV2ZW50ID0+ICgkc2V0dXAuY29weVRleHQoaXRlbS50ZXh0KSlcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICAgICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDZHhJY29uXCJdLCB7IGljb246ICRzZXR1cC5jZHhJY29uQ29weSB9KSxcbiAgICAgICAgICAgICAgICBfY3JlYXRlVGV4dFZOb2RlKFwiIFwiICsgX3RvRGlzcGxheVN0cmluZygkc2V0dXAuZ2V0TWVzc2FnZSgnQ29weScpKSwgMSAvKiBURVhUICovKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgICAgICAgICAgIH0sIDggLyogUFJPUFMgKi8sIFtcImFyaWEtbGFiZWxcIiwgXCJvbkNsaWNrXCJdKVxuICAgICAgICAgIF0pKVxuICAgICAgICB9KSwgMTI4IC8qIEtFWUVEX0ZSQUdNRU5UICovKSlcbiAgICAgIF0pXG4gICAgXSksXG4gICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgfSwgOCAvKiBQUk9QUyAqLywgW1wib3BlblwiLCBcInRpdGxlXCIsIFwiZGVmYXVsdC1hY3Rpb25cIl0pKVxufSIsICJpbXBvcnQgc2NyaXB0IGZyb20gXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFNob3J0VVJMXFxcXEFwcC52dWU/dHlwZT1zY3JpcHRcIjtpbXBvcnQgXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFNob3J0VVJMXFxcXEFwcC52dWU/dHlwZT1zdHlsZSZpbmRleD0wXCI7aW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcU2hvcnRVUkxcXFxcQXBwLnZ1ZT90eXBlPXRlbXBsYXRlXCI7IHNjcmlwdC5yZW5kZXIgPSByZW5kZXI7c2NyaXB0Ll9fZmlsZSA9IFwic3JjXFxcXFNob3J0VVJMXFxcXEFwcC52dWVcIjtzY3JpcHQuX19zY29wZUlkID0gXCJkYXRhLXYtYzRhMjE1M2FcIjtleHBvcnQgZGVmYXVsdCBzY3JpcHQ7IiwgImltcG9ydCB7YWRkSGVhZGVyTGlua30gZnJvbSAnLi9hZGRIZWFkZXJMaW5rJztcbmltcG9ydCB7YWRkUG9ydGxldExpbmt9IGZyb20gJy4vYWRkUG9ydGxldExpbmsnO1xuXG5jb25zdCBidWlsZExpbmsgPSAob2xkSWQ6IG51bWJlciB8IG51bGwsIGRpZmZJZDogbnVtYmVyKTogdm9pZCA9PiB7XG5cdGxldCBsaW5rOiBzdHJpbmcgPSAnL2QnO1xuXHRsZXQgcGVybWFMaW5rOiBzdHJpbmcgPSAnL3dpa2kvU3BlY2lhbDpEaWZmJztcblx0aWYgKG9sZElkKSB7XG5cdFx0bGluayArPSBgLyR7b2xkSWR9YDtcblx0XHRwZXJtYUxpbmsgKz0gYC8ke29sZElkfWA7XG5cdH1cblx0bGluayArPSBgLyR7ZGlmZklkfWA7XG5cdHBlcm1hTGluayArPSBgLyR7ZGlmZklkfWA7XG5cblx0YWRkSGVhZGVyTGluayhsaW5rLCBwZXJtYUxpbmspO1xuXHRhZGRQb3J0bGV0TGluayhsaW5rLCBwZXJtYUxpbmspO1xufTtcblxuZXhwb3J0IHtidWlsZExpbmt9O1xuIiwgIntcblx0XCJ2ZXJzaW9uXCI6IFwiMi4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYFNob3J0VVJMLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4uL2FwaSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbnR5cGUgQ29tcGFyZVJlc3BvbnNlID0ge1xuXHRjb21wYXJlPzoge1xuXHRcdGZyb21yZXZpZDogbnVtYmVyO1xuXHR9O1xufTtcblxuY29uc3QgcGFyYW1ldGVyczogQXBpQ29tcGFyZVBhZ2VzUGFyYW1zID0ge1xuXHRhY3Rpb246ICdjb21wYXJlJyxcblx0Zm9ybWF0OiAnanNvbicsXG5cdGZvcm1hdHZlcnNpb246ICcyJyxcblx0cHJvcDogJ2lkcycsXG5cdHRvcmVsYXRpdmU6ICdwcmV2Jyxcblx0c21heGFnZTogNjAwLFxuXHRtYXhhZ2U6IDYwMCxcbn07XG5cbmNvbnN0IHF1ZXJ5QXBpID0gYXN5bmMgKGRpZmZJZDogbnVtYmVyKTogUHJvbWlzZTxDb21wYXJlUmVzcG9uc2U+ID0+IHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gYXdhaXQgYXBpLmdldCh7XG5cdFx0XHQuLi5wYXJhbWV0ZXJzLFxuXHRcdFx0ZnJvbXJldjogZGlmZklkLFxuXHRcdH0gYXMgdHlwZW9mIHBhcmFtZXRlcnMpO1xuXHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ1tTaG9ydFVSTF0gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdFx0dG9hc3RpZnkoXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ05ldHdvcmsgZXJyb3InKSxcblx0XHRcdFx0Y2xvc2U6IHRydWUsXG5cdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdH0sXG5cdFx0XHQnZXJyb3InXG5cdFx0KTtcblxuXHRcdHJldHVybiB7fTtcblx0fVxufTtcblxuZXhwb3J0IHtxdWVyeUFwaX07XG4iLCAiaW1wb3J0IHtidWlsZExpbmt9IGZyb20gJy4vYnVpbGRMaW5rJztcbmltcG9ydCB7cXVlcnlBcGl9IGZyb20gJy4vdXRpbC9xdWVyeUFwaSc7XG5cbmNvbnN0IGNvbXBhcmVXaXRoUmVtb3RlRGlmZklkID0gYXN5bmMgKGRpZmZJZDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGNvbnN0IHJlc3BvbnNlOiBBd2FpdGVkPFJldHVyblR5cGU8dHlwZW9mIHF1ZXJ5QXBpPj4gPSBhd2FpdCBxdWVyeUFwaShkaWZmSWQpO1xuXHRpZiAoZGlmZklkID09PSBtdy5jb25maWcuZ2V0KCd3Z0RpZmZOZXdJZCcpICYmIHJlc3BvbnNlWydjb21wYXJlJ10/LmZyb21yZXZpZCA9PT0gbXcuY29uZmlnLmdldCgnd2dEaWZmT2xkSWQnKSkge1xuXHRcdGJ1aWxkTGluaygwLCBkaWZmSWQpO1xuXHR9XG59O1xuXG5leHBvcnQge2NvbXBhcmVXaXRoUmVtb3RlRGlmZklkfTtcbiIsICJpbXBvcnQge2FkZEhlYWRlckxpbmt9IGZyb20gJy4vYWRkSGVhZGVyTGluayc7XG5pbXBvcnQge2FkZFBvcnRsZXRMaW5rfSBmcm9tICcuL2FkZFBvcnRsZXRMaW5rJztcbmltcG9ydCB7YnVpbGRMaW5rfSBmcm9tICcuL2J1aWxkTGluayc7XG5pbXBvcnQge2NvbXBhcmVXaXRoUmVtb3RlRGlmZklkfSBmcm9tICcuL2NvbXBhcmVXaXRoUmVtb3RlRGlmZklkJztcblxuY29uc3QgcHJvY2Vzc0lkID0gKFxuXHRpc1JldmlzaW9uUGFnZTogYm9vbGVhbixcblx0e1xuXHRcdGFydGljbGVJZCxcblx0XHRkaWZmSWQsXG5cdFx0b2xkSWQsXG5cdFx0cmV2aXNpb25JZCxcblx0fToge1xuXHRcdGFydGljbGVJZDogbnVtYmVyO1xuXHRcdGRpZmZJZDogbnVtYmVyIHwgbnVsbDtcblx0XHRvbGRJZDogbnVtYmVyIHwgbnVsbDtcblx0XHRyZXZpc2lvbklkOiBudW1iZXIgfCBudWxsO1xuXHR9XG4pOiB2b2lkID0+IHtcblx0aWYgKGRpZmZJZCkge1xuXHRcdGJ1aWxkTGluayhvbGRJZCwgZGlmZklkKTtcblx0XHRpZiAob2xkSWQpIHtcblx0XHRcdHZvaWQgY29tcGFyZVdpdGhSZW1vdGVEaWZmSWQoZGlmZklkKTtcblx0XHR9XG5cdH0gZWxzZSBpZiAocmV2aXNpb25JZCAmJiBpc1JldmlzaW9uUGFnZSkge1xuXHRcdGFkZEhlYWRlckxpbmsoYC9wLyR7cmV2aXNpb25JZH1gLCBgL3dpa2kvU3BlY2lhbDpQZXJtYWxpbmsvJHtyZXZpc2lvbklkfWApO1xuXHRcdGFkZFBvcnRsZXRMaW5rKGAvcC8ke3JldmlzaW9uSWR9YCwgYC93aWtpL1NwZWNpYWw6UGVybWFsaW5rLyR7cmV2aXNpb25JZH1gKTtcblx0fSBlbHNlIGlmIChhcnRpY2xlSWQpIHtcblx0XHRhZGRIZWFkZXJMaW5rKGAvYy8ke2FydGljbGVJZH1gLCBgL2luZGV4LnBocD9jdXJpZD0ke2FydGljbGVJZH1gKTtcblx0XHRhZGRQb3J0bGV0TGluayhgL2MvJHthcnRpY2xlSWR9YCwgYC9pbmRleC5waHA/Y3VyaWQ9JHthcnRpY2xlSWR9YCk7XG5cdH1cbn07XG5cbmV4cG9ydCB7cHJvY2Vzc0lkfTtcbiIsICJpbXBvcnQge2NoZWNrUmV2aXNpb25QYWdlfSBmcm9tICcuL21vZHVsZXMvdXRpbC9jaGVja1JldmlzaW9uUGFnZSc7XG5pbXBvcnQge2dldFNob3J0RG9tYWluc30gZnJvbSAnLi9tb2R1bGVzL3V0aWwvZ2V0U2hvcnREb21haW5zJztcbmltcG9ydCB7cHJvY2Vzc0lkfSBmcm9tICcuL21vZHVsZXMvcHJvY2Vzc0lkJztcblxuKGZ1bmN0aW9uIHNob3J0VVJMKCkge1xuXHRjb25zdCB7d2dBY3Rpb24sIHdnQXJ0aWNsZUlkLCB3Z05hbWVzcGFjZU51bWJlcn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0Y29uc3QgZG9tYWlucyA9IGdldFNob3J0RG9tYWlucygpO1xuXG5cdGlmICghZG9tYWlucy5sZW5ndGggfHwgd2dOYW1lc3BhY2VOdW1iZXIgPCAwKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKHdnQWN0aW9uID09PSAndmlldycgJiYgd2dBcnRpY2xlSWQpIHtcblx0XHRtdy5ob29rKCd3aWtpcGFnZS5jb250ZW50JykuYWRkKCgkY29udGVudCk6IHZvaWQgPT4ge1xuXHRcdFx0aWYgKCRjb250ZW50LmF0dHIoJ2lkJykgIT09ICdtdy1jb250ZW50LXRleHQnKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgaXNSZXZpc2lvblBhZ2U6IGJvb2xlYW4gPSBjaGVja1JldmlzaW9uUGFnZSgkY29udGVudCk7XG5cblx0XHRcdHByb2Nlc3NJZChpc1JldmlzaW9uUGFnZSwge1xuXHRcdFx0XHRhcnRpY2xlSWQ6IG13LmNvbmZpZy5nZXQoJ3dnQXJ0aWNsZUlkJyksXG5cdFx0XHRcdGRpZmZJZDogbXcuY29uZmlnLmdldCgnd2dEaWZmTmV3SWQnKSxcblx0XHRcdFx0b2xkSWQ6IG13LmNvbmZpZy5nZXQoJ3dnRGlmZk9sZElkJyksXG5cdFx0XHRcdHJldmlzaW9uSWQ6IG13LmNvbmZpZy5nZXQoJ3dnUmV2aXNpb25JZCcpLFxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxvQkFBcUJDLGNBQThCO0FBQ3hELFVBQ0VBLFNBQVNDLEtBQUssOEJBQThCLEVBQUVDLFVBQzlDRixTQUFTQyxLQUFLLDRDQUE0QyxFQUFFQyxVQUFVO0FBRXpFOztBQ0xBLElBQU1DLGtCQUFrQkEsTUFBZ0I7QUFDdkMsUUFBTTtJQUFDQztFQUFRLElBQUlDLEdBQUdDLE9BQU9DLElBQUk7QUFDakMsTUFBSUMsV0FBb0IsQ0FBQTtBQUV4QixVQUFRSixVQUFBO0lBQ1AsS0FBSztBQUNKSSxpQkFBVSxDQUFDLFdBQVcsU0FBUztBQUMvQjtJQUNELEtBQUs7QUFDSkEsaUJBQVUsQ0FBQyxhQUFhLFdBQVc7QUFDbkM7SUFDRCxLQUFLO0FBQ0pBLGlCQUFVLENBQUMsZUFBZSxhQUFhO0FBQ3ZDO0VBQ0Y7QUFFQSxTQUFPQTtBQUNSOztBQ2pCQSxJQUFBQyxxQkFBMENDLFFBQUEsaUJBQUE7O0FDQTFDLElBQUFDLG9CQUF1QkQsUUFBQSxpQkFBQTtBQUV2QixJQUFNRSxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOQyxRQUFBLEdBQU9GLGtCQUFBRyxVQUFTO01BQ2ZDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNELGtCQUFBLEdBQWlCTCxrQkFBQUcsVUFBUztNQUN6QkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0QsYUFBQSxHQUFZTCxrQkFBQUcsVUFBUztNQUNwQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxX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SCxVQUFVLEdBQUEsMkJBQUEvSCxPQUErQitILFVBQVUsQ0FBRTtFQUMzRSxXQUFXRCxXQUFXO0FBQ3JCN0ksa0JBQUEsTUFBQWUsT0FBb0I4SCxTQUFTLEdBQUEsb0JBQUE5SCxPQUF3QjhILFNBQVMsQ0FBRTtBQUNoRXZELG1CQUFBLE1BQUF2RSxPQUFxQjhILFNBQVMsR0FBQSxvQkFBQTlILE9BQXdCOEgsU0FBUyxDQUFFO0VBQ2xFO0FBQ0Q7O0NDM0JDLFNBQVNFLFdBQVc7QUFDcEIsUUFBTTtJQUFDQztJQUFVQztJQUFhQztFQUFpQixJQUFJL0wsR0FBR0MsT0FBT0MsSUFBSTtBQUVqRSxRQUFNQyxXQUFVTCxnQkFBZ0I7QUFFaEMsTUFBSSxDQUFDSyxTQUFRTixVQUFVa00sb0JBQW9CLEdBQUc7QUFDN0M7RUFDRDtBQUVBLE1BQUlGLGFBQWEsVUFBVUMsYUFBYTtBQUN2QzlMLE9BQUdnTSxLQUFLLGtCQUFrQixFQUFFQyxJQUFLdE0sY0FBbUI7QUFDbkQsVUFBSUEsU0FBU3VNLEtBQUssSUFBSSxNQUFNLG1CQUFtQjtBQUM5QztNQUNEO0FBRUEsWUFBTVQsaUJBQTBCL0wsa0JBQWtCQyxRQUFRO0FBRTFENkwsZ0JBQVVDLGdCQUFnQjtRQUN6QkMsV0FBVzFMLEdBQUdDLE9BQU9DLElBQUksYUFBYTtRQUN0Q3dKLFFBQVExSixHQUFHQyxPQUFPQyxJQUFJLGFBQWE7UUFDbkN1SixPQUFPekosR0FBR0MsT0FBT0MsSUFBSSxhQUFhO1FBQ2xDeUwsWUFBWTNMLEdBQUdDLE9BQU9DLElBQUksY0FBYztNQUN6QyxDQUFDO0lBQ0YsQ0FBQztFQUNGO0FBQ0QsR0FBRzsiLAogICJuYW1lcyI6IFsiY2hlY2tSZXZpc2lvblBhZ2UiLCAiJGNvbnRlbnQiLCAiZmluZCIsICJsZW5ndGgiLCAiZ2V0U2hvcnREb21haW5zIiwgIndnV2lraUlEIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiZG9tYWluczMiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkNsb3NlIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgIkNvcHkiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImNvcHlUZXh0IiwgInRleHQiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAibmF2aWdhdG9yIiwgImNsaXBib2FyZCIsICJ3aW5kb3ciLCAiaXNTZWN1cmVDb250ZXh0IiwgIndyaXRlVGV4dCIsICJoZWxwZXIiLCAiZG9jdW1lbnQiLCAiY3JlYXRlRWxlbWVudCIsICJ2YWx1ZSIsICJzZXRBdHRyaWJ1dGUiLCAic3R5bGUiLCAicG9zaXRpb24iLCAidG9wIiwgImxlZnQiLCAiYm9keSIsICJhcHBlbmQiLCAic2VsZWN0IiwgImV4ZWNDb21tYW5kIiwgInJlbW92ZSIsICJ0aGVuIiwgIm5vdGlmeSIsICJ0eXBlIiwgInRhZyIsICJ3Z1VzZXJOYW1lIiwgImRvbWFpbnMiLCAiaGVhZGVyTGlua0V2ZW50TGlzdGVuZXIiLCAiYWRkSGVhZGVyTGluayIsICJsaW5rIiwgInBlcm1hTGluayIsICJoZWFkZXJMaW5rIiwgInF1ZXJ5U2VsZWN0b3IiLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0IiwgImhyZWYiLCAiaWNvbiIsICJjbGFzc05hbWUiLCAiaGVhZGVyRWxlbWVudCIsICJpZCIsICJwcmVwZW5kIiwgImhlYWRlckxpbmtDbGlja0xpc3RlbmVyIiwgImV2ZW50IiwgInByZXZlbnREZWZhdWx0IiwgImNvbmNhdCIsICJsb2NhdGlvbiIsICJob3N0IiwgImFkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3ZlciIsICJ0YXJnZXQiLCAibGlzdGVuZXIiLCAiaW1wb3J0X3Z1ZTQiLCAiaW1wb3J0X2NvZGV4IiwgImltcG9ydF92dWUyIiwgInByb3BzIiwgIl9fcHJvcHMiLCAiZW1pdCIsICJfX2VtaXQiLCAiaXNPcGVuIiwgInJlZiIsICJvcGVuIiwgIndhdGNoIiwgImltbWVkaWF0ZSIsICJjbG9zZSIsICJvbkNsb3NlIiwgImhhbmRsZU9wZW5DaGFuZ2UiLCAiY2R4SWNvbkNvcHkiLCAicGF0aCIsICJzaG91bGRGbGlwIiwgImltcG9ydF92dWUzIiwgIl9ob2lzdGVkXzEiLCAiY2xhc3MiLCAiX2hvaXN0ZWRfMiIsICJfaG9pc3RlZF8zIiwgInJlbmRlciIsICJfY3R4IiwgIl9jYWNoZSIsICIkcHJvcHMiLCAiJHNldHVwIiwgIiRkYXRhIiwgIiRvcHRpb25zIiwgIm9wZW5CbG9jayIsICJjcmVhdGVCbG9jayIsICIkZXZlbnQiLCAidGl0bGUiLCAibGFiZWwiLCAib25EZWZhdWx0IiwgImRlZmF1bHQiLCAid2l0aEN0eCIsICJjcmVhdGVFbGVtZW50Vk5vZGUiLCAiY3JlYXRlRWxlbWVudEJsb2NrIiwgIkZyYWdtZW50IiwgInJlbmRlckxpc3QiLCAiaXRlbXMiLCAiaXRlbSIsICJ0b0Rpc3BsYXlTdHJpbmciLCAiY3JlYXRlVk5vZGUiLCAid2VpZ2h0IiwgIm9uQ2xpY2siLCAiY3JlYXRlVGV4dFZOb2RlIiwgIl8iLCAiQXBwX2RlZmF1bHQiLCAiX19maWxlIiwgIl9fc2NvcGVJZCIsICJBcHBfZGVmYXVsdDIiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgInNraW4iLCAid2dVc2VyTmFtZTIiLCAiZG9tYWluczIiLCAicG9ydGxldExpbmtFdmVudExpc3RlbmVyIiwgIm9wZW5EaWFsb2ciLCAicm9vdCIsICJhcHAiLCAiY3JlYXRlQXBwIiwgInVubW91bnQiLCAibW91bnQiLCAiYWRkUG9ydGxldExpbmsiLCAicG9ydGxldElkIiwgInBvcnRsZXRMaW5rIiwgInV0aWwiLCAiX3BvcnRsZXRMaW5rJGZpcnN0RWxlIiwgInBvcnRsZXRMaW5rQ2xpY2tMaXN0ZW5lciIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiZW50cmllcyIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJpIiwgImRvbWFpbiIsICJwdXNoIiwgImVyciIsICJlIiwgImYiLCAiZmlyc3RFbGVtZW50Q2hpbGQiLCAiJCIsICJidWlsZExpbmsiLCAib2xkSWQiLCAiZGlmZklkIiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgImFwaSIsICJpbml0TXdBcGkiLCAiaW1wb3J0X2V4dF9nYWRnZXQ1IiwgInBhcmFtZXRlcnMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAidG9yZWxhdGl2ZSIsICJzbWF4YWdlIiwgIm1heGFnZSIsICJxdWVyeUFwaSIsICJfcmVmMiIsICJmcm9tcmV2IiwgImVycm9yIiwgImNvbnNvbGUiLCAidG9hc3RpZnkiLCAiZHVyYXRpb24iLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImNvbXBhcmVXaXRoUmVtb3RlRGlmZklkIiwgIl9yZWYzIiwgIl9yZXNwb25zZSRjb21wYXJlIiwgInJlc3BvbnNlIiwgImZyb21yZXZpZCIsICJfeDIiLCAicHJvY2Vzc0lkIiwgImlzUmV2aXNpb25QYWdlIiwgImFydGljbGVJZCIsICJyZXZpc2lvbklkIiwgInNob3J0VVJMIiwgIndnQWN0aW9uIiwgIndnQXJ0aWNsZUlkIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgImhvb2siLCAiYWRkIiwgImF0dHIiXQp9Cg==

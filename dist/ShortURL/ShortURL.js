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
          "span",
          null,
          (0, import_vue3.toDisplayString)(item.label),
          1
          /* TEXT */
        ), (0, import_vue3.createElementVNode)(
          "code",
          _hoisted_2,
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Nob3J0VVJML21vZHVsZXMvdXRpbC9jaGVja1JldmlzaW9uUGFnZS50cyIsICJzcmMvU2hvcnRVUkwvbW9kdWxlcy91dGlsL2dldFNob3J0RG9tYWlucy50cyIsICJzcmMvU2hvcnRVUkwvbW9kdWxlcy9hZGRIZWFkZXJMaW5rLnRzIiwgInNyYy9TaG9ydFVSTC9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1Nob3J0VVJML21vZHVsZXMvY29weVRleHQudHMiLCAic3JjL1Nob3J0VVJML21vZHVsZXMvYWRkUG9ydGxldExpbmsudHMiLCAiZGlzdC9TaG9ydFVSTC9zcmMvU2hvcnRVUkwvQXBwLnZ1ZSIsICJzZmMtdGVtcGxhdGU6RDpcXEdpdFJlcG9zaXRvcnlcXFFpdXdlbkdhZGdldHNcXHNyY1xcU2hvcnRVUkxcXEFwcC52dWU/dHlwZT10ZW1wbGF0ZSIsICJzcmMvU2hvcnRVUkwvQXBwLnZ1ZSIsICJzcmMvU2hvcnRVUkwvbW9kdWxlcy9idWlsZExpbmsudHMiLCAic3JjL1Nob3J0VVJML29wdGlvbnMuanNvbiIsICJzcmMvU2hvcnRVUkwvbW9kdWxlcy9hcGkudHMiLCAic3JjL1Nob3J0VVJML21vZHVsZXMvdXRpbC9xdWVyeUFwaS50cyIsICJzcmMvU2hvcnRVUkwvbW9kdWxlcy9jb21wYXJlV2l0aFJlbW90ZURpZmZJZC50cyIsICJzcmMvU2hvcnRVUkwvbW9kdWxlcy9wcm9jZXNzSWQudHMiLCAic3JjL1Nob3J0VVJML1Nob3J0VVJMLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBjaGVja1JldmlzaW9uUGFnZSA9ICgkY29udGVudDogSlF1ZXJ5KTogYm9vbGVhbiA9PiB7XG5cdHJldHVybiAoXG5cdFx0KCRjb250ZW50LmZpbmQoJyNjb250ZW50U3ViICNtdy1yZXZpc2lvbi1uYXYnKS5sZW5ndGggfHxcblx0XHRcdCRjb250ZW50LmZpbmQoJ21haW4jY29udGVudD4ucHJlLWNvbnRlbnQgI213LXJldmlzaW9uLW5hdicpLmxlbmd0aCkgPiAwXG5cdCk7XG59O1xuXG5leHBvcnQge2NoZWNrUmV2aXNpb25QYWdlfTtcbiIsICJjb25zdCBnZXRTaG9ydERvbWFpbnMgPSAoKTogc3RyaW5nW10gPT4ge1xuXHRjb25zdCB7d2dXaWtpSUR9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRsZXQgZG9tYWluczogc3RyaW5nW10gPSBbXTtcblxuXHRzd2l0Y2ggKHdnV2lraUlEKSB7XG5cdFx0Y2FzZSAnemhxaXV3ZW5iYWlrZSc6XG5cdFx0XHRkb21haW5zID0gWydxd2JrLmNjJywgJ2Jrd3ouY24nXTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJ2xpY2VuY2V3aWtpJzpcblx0XHRcdGRvbWFpbnMgPSBbJ2wucXdiay5jYycsICdsLmJrd3ouY24nXTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJ21uY3FpdXdlbmJhaWtlJzpcblx0XHRcdGRvbWFpbnMgPSBbJ21uYy5xd2JrLmNjJywgJ21uYy5ia3d6LmNuJ107XG5cdFx0XHRicmVhaztcblx0fVxuXG5cdHJldHVybiBkb21haW5zO1xufTtcblxuZXhwb3J0IHtnZXRTaG9ydERvbWFpbnN9O1xuIiwgImltcG9ydCB7YWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtjb3B5VGV4dH0gZnJvbSAnLi9jb3B5VGV4dCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge2dldFNob3J0RG9tYWluc30gZnJvbSAnLi91dGlsL2dldFNob3J0RG9tYWlucyc7XG5cbmNvbnN0IHt3Z1VzZXJOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcbmNvbnN0IGRvbWFpbnMgPSBnZXRTaG9ydERvbWFpbnMoKTtcblxubGV0IGhlYWRlckxpbmtFdmVudExpc3RlbmVyOiBSZXR1cm5UeXBlPHR5cGVvZiBhZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXI+ID0ge1xuXHRyZW1vdmU6ICgpOiB2b2lkID0+IHt9LFxufTtcblxuY29uc3QgYWRkSGVhZGVyTGluayA9IChsaW5rOiBzdHJpbmcsIHBlcm1hTGluazogc3RyaW5nKTogdm9pZCA9PiB7XG5cdGxldCBoZWFkZXJMaW5rOiBIVE1MQW5jaG9yRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXctaW5kaWNhdG9yLXNob3J0VVJMIGEnKTtcblx0aWYgKCFoZWFkZXJMaW5rKSB7XG5cdFx0aGVhZGVyTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblx0XHRoZWFkZXJMaW5rLmhyZWYgPSAnIyc7XG5cdFx0aGVhZGVyTGluay5zZXRBdHRyaWJ1dGUoXG5cdFx0XHQnYXJpYS1sYWJlbCcsXG5cdFx0XHR3Z1VzZXJOYW1lID8gZ2V0TWVzc2FnZSgnU2hvcnQgVVJMJykgOiBnZXRNZXNzYWdlKCdTaGFyZSBVUkwgZm9yIHRoZSBwYWdlJylcblx0XHQpO1xuXHRcdGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0aWNvbi5jbGFzc05hbWUgPSAnZ2FkZ2V0LXNob3J0LWxpbmtfX2ljb24nO1xuXHRcdGhlYWRlckxpbmsuYXBwZW5kKGljb24pO1xuXHRcdGNvbnN0IGhlYWRlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRoZWFkZXJFbGVtZW50LmNsYXNzTmFtZSA9ICdtdy1pbmRpY2F0b3InO1xuXHRcdGhlYWRlckVsZW1lbnQuaWQgPSAnbXctaW5kaWNhdG9yLXNob3J0VVJMJztcblx0XHRoZWFkZXJFbGVtZW50LmFwcGVuZChoZWFkZXJMaW5rKTtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXctaW5kaWNhdG9ycycpPy5wcmVwZW5kKGhlYWRlckVsZW1lbnQpO1xuXHR9XG5cblx0Y29uc3QgaGVhZGVyTGlua0NsaWNrTGlzdGVuZXIgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkID0+IHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGNvcHlUZXh0KHdnVXNlck5hbWUgPyBgaHR0cHM6Ly8ke2RvbWFpbnNbMF19JHtsaW5rfWAgOiBgaHR0cHM6Ly8ke2xvY2F0aW9uLmhvc3R9JHtwZXJtYUxpbmt9YCk7XG5cdH07XG5cblx0aGVhZGVyTGlua0V2ZW50TGlzdGVuZXIucmVtb3ZlKCk7XG5cdGhlYWRlckxpbmtFdmVudExpc3RlbmVyID0gYWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyKHtcblx0XHR0YXJnZXQ6IGhlYWRlckxpbmssXG5cdFx0dHlwZTogJ2NsaWNrJyxcblx0XHRsaXN0ZW5lcjogaGVhZGVyTGlua0NsaWNrTGlzdGVuZXIsXG5cdH0pO1xufTtcblxuZXhwb3J0IHthZGRIZWFkZXJMaW5rfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0Q2xvc2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ2xvc2UnLFxuXHRcdFx0amE6ICfplonjgZjjgosnLFxuXHRcdFx0J3poLWhhbnMnOiAn5YWz6ZetJyxcblx0XHRcdCd6aC1oYW50JzogJ+mXnOmWiScsXG5cdFx0fSksXG5cdFx0J05ldHdvcmsgZXJyb3InOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ05ldHdvcmsgZXJyb3InLFxuXHRcdFx0amE6ICfjg43jg4Pjg4jjg6/jg7zjgq/jgqjjg6njg7wnLFxuXHRcdFx0J3poLWhhbnMnOiAn572R57uc5byC5bi4Jyxcblx0XHRcdCd6aC1oYW50JzogJ+e2sui3r+eVsOW4uCcsXG5cdFx0fSksXG5cdFx0J1BhZ2UgVVJMJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQZXJtYW5lbnQgVVJMJyxcblx0XHRcdCd6aC1oYW5zJzogJ+mhtemdoumTvuaOpScsXG5cdFx0XHQnemgtaGFudCc6ICfpoIHpnaLntrLlnYAnLFxuXHRcdH0pLFxuXHRcdCdQZXJtYW5lbnQgVVJMJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQZXJtYW5lbnQgVVJMJyxcblx0XHRcdCd6aC1oYW5zJzogJ+awuOS5hemTvuaOpScsXG5cdFx0XHQnemgtaGFudCc6ICfmsLjkuYXntrLlnYAnLFxuXHRcdH0pLFxuXHRcdCdTaGFyZSBVUkwgZm9yIHRoZSBwYWdlJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTaGFyZSBVUkwgZm9yIHRoZSBwYWdlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WIhuS6q+acrOmhtemTvuaOpScsXG5cdFx0XHQnemgtaGFudCc6ICfliIbkuqvmnKzpoIHntrLlnYAnLFxuXHRcdH0pLFxuXHRcdCdTaG9ydCBVUkwnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1Nob3J0IFVSTCcsXG5cdFx0XHQnemgtaGFucyc6ICfnn63pk77mjqUnLFxuXHRcdFx0J3poLWhhbnQnOiAn55+t57ay5Z2AJyxcblx0XHR9KSxcblx0XHQnU2hvdyBVUkwnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1Nob3cgVVJMJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aYvuekuuivpemhtemTvuaOpScsXG5cdFx0XHQnemgtaGFudCc6ICfpoa/npLroqbLpoIHntrLlnYAnLFxuXHRcdH0pLFxuXHRcdENvcHk6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ29weScsXG5cdFx0XHQnemgtaGFucyc6ICflpI3liLYnLFxuXHRcdFx0J3poLWhhbnQnOiAn5b6p6KO9Jyxcblx0XHR9KSxcblx0XHQnVVJMIGNvcGllZCB0byBjbGlwYm9hcmQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoZSBVUkwgaGFzIGJlZW4gY29waWVkIHRvIGNsaXBib2FyZDogJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3suWkjeWItuacrOmhtemTvuaOpe+8micsXG5cdFx0XHQnemgtaGFudCc6ICflt7Llvqnoo73mnKzpoIHntrLlnYDvvJonLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IGNvcHlUZXh0ID0gKHRleHQ6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHQoYXN5bmMgKCkgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRpZiAobmF2aWdhdG9yLmNsaXBib2FyZCAmJiB3aW5kb3cuaXNTZWN1cmVDb250ZXh0KSB7XG5cdFx0XHRcdGF3YWl0IG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHRleHQpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7fVxuXG5cdFx0Y29uc3QgaGVscGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcblx0XHRoZWxwZXIudmFsdWUgPSB0ZXh0O1xuXHRcdGhlbHBlci5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJ3RydWUnKTtcblx0XHRoZWxwZXIuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuXHRcdGhlbHBlci5zdHlsZS50b3AgPSAnLTk5OTlweCc7XG5cdFx0aGVscGVyLnN0eWxlLmxlZnQgPSAnLTk5OTlweCc7XG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmQoaGVscGVyKTtcblx0XHRoZWxwZXIuc2VsZWN0KCk7XG5cdFx0ZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcblx0XHRoZWxwZXIucmVtb3ZlKCk7XG5cdH0pKCkudGhlbigoKSA9PiB7XG5cdFx0dm9pZCBtdy5ub3RpZnkoZ2V0TWVzc2FnZSgnVVJMIGNvcGllZCB0byBjbGlwYm9hcmQnKSArIHRleHQsIHtcblx0XHRcdHR5cGU6ICdzdWNjZXNzJyxcblx0XHRcdHRhZzogJ0RpZmZMaW5rcycsXG5cdFx0fSk7XG5cdH0pO1xufTtcblxuZXhwb3J0IHtjb3B5VGV4dH07XG4iLCAiaW1wb3J0IHt0eXBlIEFwcCBhcyBWdWVBcHAsIGNyZWF0ZUFwcH0gZnJvbSAndnVlJztcbmltcG9ydCBBcHAgZnJvbSAnLi4vQXBwLnZ1ZSc7XG5pbXBvcnQge2FkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcn0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7Z2V0U2hvcnREb21haW5zfSBmcm9tICcuL3V0aWwvZ2V0U2hvcnREb21haW5zJztcblxuY29uc3Qge3NraW4sIHdnVXNlck5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuY29uc3QgZG9tYWlucyA9IGdldFNob3J0RG9tYWlucygpO1xuXG5sZXQgcG9ydGxldExpbmtFdmVudExpc3RlbmVyOiBSZXR1cm5UeXBlPHR5cGVvZiBhZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXI+ID0ge1xuXHRyZW1vdmU6ICgpOiB2b2lkID0+IHt9LFxufTtcblxuY29uc3Qgb3BlbkRpYWxvZyA9IChpdGVtczoge2xhYmVsOiBzdHJpbmc7IHRleHQ6IHN0cmluZ31bXSk6IHZvaWQgPT4ge1xuXHRjb25zdCByb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGRvY3VtZW50LmJvZHkuYXBwZW5kKHJvb3QpO1xuXG5cdGNvbnN0IGFwcDogVnVlQXBwPEVsZW1lbnQ+IHwgbnVsbCA9IGNyZWF0ZUFwcChBcHAsIHtcblx0XHRvcGVuOiB0cnVlLFxuXHRcdGl0ZW1zLFxuXHRcdG9uQ2xvc2U6ICgpOiB2b2lkID0+IHtcblx0XHRcdGFwcD8udW5tb3VudCgpO1xuXHRcdFx0cm9vdC5yZW1vdmUoKTtcblx0XHR9LFxuXHR9KTtcblx0YXBwLm1vdW50KHJvb3QpO1xufTtcblxuY29uc3QgYWRkUG9ydGxldExpbmsgPSAobGluazogc3RyaW5nLCBwZXJtYUxpbms6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRjb25zdCBwb3J0bGV0SWQ6ICdwLWNhY3Rpb25zJyB8ICdwLXRiJyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwLWNhY3Rpb25zJykgPyAncC1jYWN0aW9ucycgOiAncC10Yic7XG5cdGxldCBwb3J0bGV0TGluazogSFRNTExJRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdC1zaG9ydGxpbmsnKTtcblx0cG9ydGxldExpbmsgfHw9IG13LnV0aWwuYWRkUG9ydGxldExpbmsoXG5cdFx0cG9ydGxldElkLFxuXHRcdCcjJyxcblx0XHRnZXRNZXNzYWdlKCdTaGFyZSBVUkwgZm9yIHRoZSBwYWdlJyksXG5cdFx0J3Qtc2hvcnRsaW5rJyxcblx0XHRnZXRNZXNzYWdlKCdTaG93IFVSTCcpXG5cdCk7XG5cblx0aWYgKHBvcnRsZXRMaW5rKSB7XG5cdFx0Y29uc3QgcG9ydGxldExpbmtDbGlja0xpc3RlbmVyID0gKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0Y29uc3QgaXRlbXMgPSBbXG5cdFx0XHRcdHtsYWJlbDogZ2V0TWVzc2FnZSgnUGFnZSBVUkwnKSwgdGV4dDogbG9jYXRpb24uaHJlZn0sXG5cdFx0XHRcdHtsYWJlbDogZ2V0TWVzc2FnZSgnUGVybWFuZW50IFVSTCcpLCB0ZXh0OiBgaHR0cHM6Ly8ke2xvY2F0aW9uLmhvc3R9JHtwZXJtYUxpbmt9YH0sXG5cdFx0XHRdO1xuXHRcdFx0aWYgKHdnVXNlck5hbWUpIHtcblx0XHRcdFx0Zm9yIChjb25zdCBbaSwgZG9tYWluXSBvZiBkb21haW5zLmVudHJpZXMoKSkge1xuXHRcdFx0XHRcdGl0ZW1zLnB1c2goe2xhYmVsOiBgJHtnZXRNZXNzYWdlKCdTaG9ydCBVUkwnKX0ke2kgKyAxfWAsIHRleHQ6IGBodHRwczovLyR7ZG9tYWlufSR7bGlua31gfSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG9wZW5EaWFsb2coaXRlbXMpO1xuXHRcdH07XG5cblx0XHRwb3J0bGV0TGlua0V2ZW50TGlzdGVuZXIucmVtb3ZlKCk7XG5cdFx0cG9ydGxldExpbmtFdmVudExpc3RlbmVyID0gYWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyKHtcblx0XHRcdHRhcmdldDogKHBvcnRsZXRMaW5rLmZpcnN0RWxlbWVudENoaWxkID8/IHBvcnRsZXRMaW5rKSBhcyBIVE1MRWxlbWVudCxcblx0XHRcdHR5cGU6ICdjbGljaycsXG5cdFx0XHRsaXN0ZW5lcjogcG9ydGxldExpbmtDbGlja0xpc3RlbmVyLFxuXHRcdH0pO1xuXG5cdFx0aWYgKHNraW4gPT09ICdjaXRpemVuJyAmJiAhJChwb3J0bGV0TGluaykuZmluZCgnI213LXVpLWljb24td2lraW1lZGlhLXNob3J0bGluaycpLmxlbmd0aCkge1xuXHRcdFx0JChwb3J0bGV0TGluaylcblx0XHRcdFx0LmZpbmQoJ2EnKVxuXHRcdFx0XHQucHJlcGVuZChcblx0XHRcdFx0XHQnPHNwYW4gaWQ9XCJtdy11aS1pY29uLXdpa2ltZWRpYS1zaG9ydGxpbmtcIiBjbGFzcz1cImNpdGl6ZW4tdWktaWNvbiBtdy11aS1pY29uLWxpbmsgbXctdWktaWNvbi13aWtpbWVkaWEtbGlua1wiPjwvc3Bhbj4nXG5cdFx0XHRcdCk7XG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQge2FkZFBvcnRsZXRMaW5rfTtcbiIsICI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtDZHhCdXR0b24sIENkeERpYWxvZywgQ2R4SWNvbn0gZnJvbSAnQHdpa2ltZWRpYS9jb2RleCc7XG5pbXBvcnQge3JlZiwgd2F0Y2h9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge2NvcHlUZXh0fSBmcm9tICcuL21vZHVsZXMvY29weVRleHQnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL21vZHVsZXMvaTE4bic7XG5cbmludGVyZmFjZSBDb3B5SXRlbSB7XG5cdGxhYmVsOiBzdHJpbmc7XG5cdHRleHQ6IHN0cmluZztcbn1cblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczx7XG5cdG9wZW46IGJvb2xlYW47XG5cdGl0ZW1zOiBDb3B5SXRlbVtdO1xuXHRvbkNsb3NlOiAoKSA9PiB2b2lkO1xufT4oKTtcblxuY29uc3QgZW1pdCA9IGRlZmluZUVtaXRzPHtcblx0J3VwZGF0ZTpvcGVuJzogW3ZhbHVlOiBib29sZWFuXTtcbn0+KCk7XG5jb25zdCBpc09wZW4gPSByZWYocHJvcHMub3Blbik7XG5cbndhdGNoKFxuXHQoKSA9PiBwcm9wcy5vcGVuLFxuXHQodmFsdWUpID0+IHtcblx0XHRpc09wZW4udmFsdWUgPSB2YWx1ZTtcblx0fSxcblx0e2ltbWVkaWF0ZTogdHJ1ZX1cbik7XG5cbmNvbnN0IGNsb3NlID0gKCk6IHZvaWQgPT4ge1xuXHRpc09wZW4udmFsdWUgPSBmYWxzZTtcblx0ZW1pdCgndXBkYXRlOm9wZW4nLCBmYWxzZSk7XG5cdHByb3BzLm9uQ2xvc2UoKTtcbn07XG5cbmNvbnN0IGhhbmRsZU9wZW5DaGFuZ2UgPSAodmFsdWU6IGJvb2xlYW4pOiB2b2lkID0+IHtcblx0aXNPcGVuLnZhbHVlID0gdmFsdWU7XG5cdGlmICghdmFsdWUpIHtcblx0XHRjbG9zZSgpO1xuXHR9XG59O1xuXG4vKipcbiAqIFNWRyBwYXRocyBpbmxpbmVkIGZyb20gYEB3aWtpbWVkaWEvY29kZXgtaWNvbnNgIHYyLjcuMC5cbiAqXG4gKiBNZWRpYVdpa2kgZG9lcyBub3Qgc2hpcCBhIFJlc291cmNlTG9hZGVyIG1vZHVsZSB0aGF0IGJ1bmRsZXNcbiAqIGBAd2lraW1lZGlhL2NvZGV4LWljb25zYCAoc2VlIGh0dHBzOi8vd3d3Lm1lZGlhd2lraS5vcmcvd2lraS9Db2RleCksXG4gKiBzbyB0aGUgcGF0aCBkYXRhIGlzIGNvcGllZCBoZXJlIHZlcmJhdGltIGFuZCByZW5kZXJlZCBhcyBpbmxpbmUgU1ZHXG4gKiB0byBrZWVwIHRoZSBnYWRnZXQgc2VsZi1jb250YWluZWQgd2hpbGUgc3RpbGwgc291cmNpbmcgdGhlIGljb25zXG4gKiBmcm9tIGBAd2lraW1lZGlhL2NvZGV4LWljb25zYC5cbiAqXG4gKiBAc2VlIHtAbGluayBodHRwczovL2RvYy53aWtpbWVkaWEub3JnL2NvZGV4L2xhdGVzdC9pY29ucy99XG4gKi9cbi8qKiBQYXRoIGZvciBgY2R4SWNvbkNvcHlgLiAqL1xuY29uc3QgY2R4SWNvbkNvcHkgPSB7XG5cdHBhdGg6ICdNMTMgMTlIMVY3aDZWMWgxMnYxMmgtNnptLTYtNlY5SDN2OGg4di00em0yLTJoOFYzSDl6Jyxcblx0c2hvdWxkRmxpcDogdHJ1ZSxcbn07XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuXHQ8Y2R4LWRpYWxvZ1xuXHRcdHYtbW9kZWw6b3Blbj1cImlzT3BlblwiXG5cdFx0OnRpdGxlPVwiZ2V0TWVzc2FnZSgnU2hhcmUgVVJMIGZvciB0aGUgcGFnZScpXCJcblx0XHQ6ZGVmYXVsdC1hY3Rpb249XCJ7bGFiZWw6IGdldE1lc3NhZ2UoJ0Nsb3NlJyl9XCJcblx0XHQ6dXNlLWNsb3NlLWJ1dHRvbj1cInRydWVcIlxuXHRcdEB1cGRhdGU6b3Blbj1cImhhbmRsZU9wZW5DaGFuZ2VcIlxuXHRcdEBkZWZhdWx0PVwiY2xvc2VcIlxuXHQ+XG5cdFx0PGRpdiBjbGFzcz1cInNob3J0LXVybC1jb3B5LWxpc3RcIj5cblx0XHRcdDxkaXYgdi1mb3I9XCJpdGVtIGluIGl0ZW1zXCIgOmtleT1cIml0ZW0udGV4dFwiIGNsYXNzPVwic2hvcnQtdXJsLWNvcHktaXRlbVwiPlxuXHRcdFx0XHQ8c3Bhbj57eyBpdGVtLmxhYmVsIH19PC9zcGFuPlxuXHRcdFx0XHQ8Y29kZSBjbGFzcz1cInNob3J0LXVybC1jb3B5LXRleHRcIj57eyBpdGVtLnRleHQgfX08L2NvZGU+XG5cdFx0XHRcdDxjZHgtYnV0dG9uIHdlaWdodD1cIm5vcm1hbFwiIDphcmlhLWxhYmVsPVwiZ2V0TWVzc2FnZSgnQ29weScpXCIgQGNsaWNrPVwiY29weVRleHQoaXRlbS50ZXh0KVwiPlxuXHRcdFx0XHRcdDxjZHgtaWNvbiA6aWNvbj1cImNkeEljb25Db3B5XCIgLz5cblx0XHRcdFx0XHR7eyBnZXRNZXNzYWdlKCdDb3B5JykgfX1cblx0XHRcdFx0PC9jZHgtYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdDwvY2R4LWRpYWxvZz5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cImxlc3NcIj5cbi5zaG9ydC11cmwtY29weS1saXN0IHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAwLjc1cmVtO1xufVxuXG4uc2hvcnQtdXJsLWNvcHktaXRlbSB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGdyaWQtZ2FwOiAwLjVyZW07XG5cdGdhcDogMC41cmVtO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5zaG9ydC11cmwtY29weS10ZXh0IHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xuXHRib3JkZXI6IDFweCBzb2xpZCAjZWFlY2YwO1xuXHRib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuXHRiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuXHRjb2xvcjogIzIwMjEyMjtcblx0Zm9udC1zaXplOiAwLjg3NXJlbTtcblx0d29yZC1icmVhazogYnJlYWstYWxsO1xuXHRmbGV4OiAxIDEgMTAwJTtcbn1cbjwvc3R5bGU+XG4iLCAiaW1wb3J0IHsgcmVuZGVyTGlzdCBhcyBfcmVuZGVyTGlzdCwgRnJhZ21lbnQgYXMgX0ZyYWdtZW50LCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2ssIHRvRGlzcGxheVN0cmluZyBhcyBfdG9EaXNwbGF5U3RyaW5nLCBjcmVhdGVFbGVtZW50Vk5vZGUgYXMgX2NyZWF0ZUVsZW1lbnRWTm9kZSwgY3JlYXRlVk5vZGUgYXMgX2NyZWF0ZVZOb2RlLCBjcmVhdGVUZXh0Vk5vZGUgYXMgX2NyZWF0ZVRleHRWTm9kZSwgd2l0aEN0eCBhcyBfd2l0aEN0eCwgY3JlYXRlQmxvY2sgYXMgX2NyZWF0ZUJsb2NrIH0gZnJvbSBcInZ1ZVwiXG5cbmNvbnN0IF9ob2lzdGVkXzEgPSB7IGNsYXNzOiBcInNob3J0LXVybC1jb3B5LWxpc3RcIiB9XG5jb25zdCBfaG9pc3RlZF8yID0geyBjbGFzczogXCJzaG9ydC11cmwtY29weS10ZXh0XCIgfVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSwgJHByb3BzLCAkc2V0dXAsICRkYXRhLCAkb3B0aW9ucykge1xuICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKCRzZXR1cFtcIkNkeERpYWxvZ1wiXSwge1xuICAgIG9wZW46ICRzZXR1cC5pc09wZW4sXG4gICAgXCJvblVwZGF0ZTpvcGVuXCI6IFtcbiAgICAgIF9jYWNoZVswXSB8fCAoX2NhY2hlWzBdID0gJGV2ZW50ID0+ICgoJHNldHVwLmlzT3BlbikgPSAkZXZlbnQpKSxcbiAgICAgICRzZXR1cC5oYW5kbGVPcGVuQ2hhbmdlXG4gICAgXSxcbiAgICB0aXRsZTogJHNldHVwLmdldE1lc3NhZ2UoJ1NoYXJlIFVSTCBmb3IgdGhlIHBhZ2UnKSxcbiAgICBcImRlZmF1bHQtYWN0aW9uXCI6IHtsYWJlbDogJHNldHVwLmdldE1lc3NhZ2UoJ0Nsb3NlJyl9LFxuICAgIFwidXNlLWNsb3NlLWJ1dHRvblwiOiB0cnVlLFxuICAgIG9uRGVmYXVsdDogJHNldHVwLmNsb3NlXG4gIH0sIHtcbiAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzEsIFtcbiAgICAgICAgKF9vcGVuQmxvY2sodHJ1ZSksIF9jcmVhdGVFbGVtZW50QmxvY2soX0ZyYWdtZW50LCBudWxsLCBfcmVuZGVyTGlzdCgkcHJvcHMuaXRlbXMsIChpdGVtKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJkaXZcIiwge1xuICAgICAgICAgICAga2V5OiBpdGVtLnRleHQsXG4gICAgICAgICAgICBjbGFzczogXCJzaG9ydC11cmwtY29weS1pdGVtXCJcbiAgICAgICAgICB9LCBbXG4gICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwic3BhblwiLCBudWxsLCBfdG9EaXNwbGF5U3RyaW5nKGl0ZW0ubGFiZWwpLCAxIC8qIFRFWFQgKi8pLFxuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImNvZGVcIiwgX2hvaXN0ZWRfMiwgX3RvRGlzcGxheVN0cmluZyhpdGVtLnRleHQpLCAxIC8qIFRFWFQgKi8pLFxuICAgICAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkNkeEJ1dHRvblwiXSwge1xuICAgICAgICAgICAgICB3ZWlnaHQ6IFwibm9ybWFsXCIsXG4gICAgICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiAkc2V0dXAuZ2V0TWVzc2FnZSgnQ29weScpLFxuICAgICAgICAgICAgICBvbkNsaWNrOiAkZXZlbnQgPT4gKCRzZXR1cC5jb3B5VGV4dChpdGVtLnRleHQpKVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgICAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkNkeEljb25cIl0sIHsgaWNvbjogJHNldHVwLmNkeEljb25Db3B5IH0pLFxuICAgICAgICAgICAgICAgIF9jcmVhdGVUZXh0Vk5vZGUoXCIgXCIgKyBfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5nZXRNZXNzYWdlKCdDb3B5JykpLCAxIC8qIFRFWFQgKi8pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgICAgICAgICAgfSwgOCAvKiBQUk9QUyAqLywgW1wiYXJpYS1sYWJlbFwiLCBcIm9uQ2xpY2tcIl0pXG4gICAgICAgICAgXSkpXG4gICAgICAgIH0pLCAxMjggLyogS0VZRURfRlJBR01FTlQgKi8pKVxuICAgICAgXSlcbiAgICBdKSxcbiAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICB9LCA4IC8qIFBST1BTICovLCBbXCJvcGVuXCIsIFwidGl0bGVcIiwgXCJkZWZhdWx0LWFjdGlvblwiXSkpXG59IiwgImltcG9ydCBzY3JpcHQgZnJvbSBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcU2hvcnRVUkxcXFxcQXBwLnZ1ZT90eXBlPXNjcmlwdFwiO2ltcG9ydCBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcU2hvcnRVUkxcXFxcQXBwLnZ1ZT90eXBlPXN0eWxlJmluZGV4PTBcIjtpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxTaG9ydFVSTFxcXFxBcHAudnVlP3R5cGU9dGVtcGxhdGVcIjsgc2NyaXB0LnJlbmRlciA9IHJlbmRlcjtzY3JpcHQuX19maWxlID0gXCJzcmNcXFxcU2hvcnRVUkxcXFxcQXBwLnZ1ZVwiO3NjcmlwdC5fX3Njb3BlSWQgPSBcImRhdGEtdi1jNGEyMTUzYVwiO2V4cG9ydCBkZWZhdWx0IHNjcmlwdDsiLCAiaW1wb3J0IHthZGRIZWFkZXJMaW5rfSBmcm9tICcuL2FkZEhlYWRlckxpbmsnO1xuaW1wb3J0IHthZGRQb3J0bGV0TGlua30gZnJvbSAnLi9hZGRQb3J0bGV0TGluayc7XG5cbmNvbnN0IGJ1aWxkTGluayA9IChvbGRJZDogbnVtYmVyIHwgbnVsbCwgZGlmZklkOiBudW1iZXIpOiB2b2lkID0+IHtcblx0bGV0IGxpbms6IHN0cmluZyA9ICcvZCc7XG5cdGxldCBwZXJtYUxpbms6IHN0cmluZyA9ICcvd2lraS9TcGVjaWFsOkRpZmYnO1xuXHRpZiAob2xkSWQpIHtcblx0XHRsaW5rICs9IGAvJHtvbGRJZH1gO1xuXHRcdHBlcm1hTGluayArPSBgLyR7b2xkSWR9YDtcblx0fVxuXHRsaW5rICs9IGAvJHtkaWZmSWR9YDtcblx0cGVybWFMaW5rICs9IGAvJHtkaWZmSWR9YDtcblxuXHRhZGRIZWFkZXJMaW5rKGxpbmssIHBlcm1hTGluayk7XG5cdGFkZFBvcnRsZXRMaW5rKGxpbmssIHBlcm1hTGluayk7XG59O1xuXG5leHBvcnQge2J1aWxkTGlua307XG4iLCAie1xuXHRcInZlcnNpb25cIjogXCIyLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgU2hvcnRVUkwvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi4vYXBpJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxudHlwZSBDb21wYXJlUmVzcG9uc2UgPSB7XG5cdGNvbXBhcmU/OiB7XG5cdFx0ZnJvbXJldmlkOiBudW1iZXI7XG5cdH07XG59O1xuXG5jb25zdCBwYXJhbWV0ZXJzOiBBcGlDb21wYXJlUGFnZXNQYXJhbXMgPSB7XG5cdGFjdGlvbjogJ2NvbXBhcmUnLFxuXHRmb3JtYXQ6ICdqc29uJyxcblx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRwcm9wOiAnaWRzJyxcblx0dG9yZWxhdGl2ZTogJ3ByZXYnLFxuXHRzbWF4YWdlOiA2MDAsXG5cdG1heGFnZTogNjAwLFxufTtcblxuY29uc3QgcXVlcnlBcGkgPSBhc3luYyAoZGlmZklkOiBudW1iZXIpOiBQcm9taXNlPENvbXBhcmVSZXNwb25zZT4gPT4ge1xuXHR0cnkge1xuXHRcdHJldHVybiBhd2FpdCBhcGkuZ2V0KHtcblx0XHRcdC4uLnBhcmFtZXRlcnMsXG5cdFx0XHRmcm9tcmV2OiBkaWZmSWQsXG5cdFx0fSBhcyB0eXBlb2YgcGFyYW1ldGVycyk7XG5cdH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG5cdFx0Y29uc29sZS5lcnJvcignW1Nob3J0VVJMXSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0XHR0b2FzdGlmeShcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnTmV0d29yayBlcnJvcicpLFxuXHRcdFx0XHRjbG9zZTogdHJ1ZSxcblx0XHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdFx0fSxcblx0XHRcdCdlcnJvcidcblx0XHQpO1xuXG5cdFx0cmV0dXJuIHt9O1xuXHR9XG59O1xuXG5leHBvcnQge3F1ZXJ5QXBpfTtcbiIsICJpbXBvcnQge2J1aWxkTGlua30gZnJvbSAnLi9idWlsZExpbmsnO1xuaW1wb3J0IHtxdWVyeUFwaX0gZnJvbSAnLi91dGlsL3F1ZXJ5QXBpJztcblxuY29uc3QgY29tcGFyZVdpdGhSZW1vdGVEaWZmSWQgPSBhc3luYyAoZGlmZklkOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3QgcmVzcG9uc2U6IEF3YWl0ZWQ8UmV0dXJuVHlwZTx0eXBlb2YgcXVlcnlBcGk+PiA9IGF3YWl0IHF1ZXJ5QXBpKGRpZmZJZCk7XG5cdGlmIChkaWZmSWQgPT09IG13LmNvbmZpZy5nZXQoJ3dnRGlmZk5ld0lkJykgJiYgcmVzcG9uc2VbJ2NvbXBhcmUnXT8uZnJvbXJldmlkID09PSBtdy5jb25maWcuZ2V0KCd3Z0RpZmZPbGRJZCcpKSB7XG5cdFx0YnVpbGRMaW5rKDAsIGRpZmZJZCk7XG5cdH1cbn07XG5cbmV4cG9ydCB7Y29tcGFyZVdpdGhSZW1vdGVEaWZmSWR9O1xuIiwgImltcG9ydCB7YWRkSGVhZGVyTGlua30gZnJvbSAnLi9hZGRIZWFkZXJMaW5rJztcbmltcG9ydCB7YWRkUG9ydGxldExpbmt9IGZyb20gJy4vYWRkUG9ydGxldExpbmsnO1xuaW1wb3J0IHtidWlsZExpbmt9IGZyb20gJy4vYnVpbGRMaW5rJztcbmltcG9ydCB7Y29tcGFyZVdpdGhSZW1vdGVEaWZmSWR9IGZyb20gJy4vY29tcGFyZVdpdGhSZW1vdGVEaWZmSWQnO1xuXG5jb25zdCBwcm9jZXNzSWQgPSAoXG5cdGlzUmV2aXNpb25QYWdlOiBib29sZWFuLFxuXHR7XG5cdFx0YXJ0aWNsZUlkLFxuXHRcdGRpZmZJZCxcblx0XHRvbGRJZCxcblx0XHRyZXZpc2lvbklkLFxuXHR9OiB7XG5cdFx0YXJ0aWNsZUlkOiBudW1iZXI7XG5cdFx0ZGlmZklkOiBudW1iZXIgfCBudWxsO1xuXHRcdG9sZElkOiBudW1iZXIgfCBudWxsO1xuXHRcdHJldmlzaW9uSWQ6IG51bWJlciB8IG51bGw7XG5cdH1cbik6IHZvaWQgPT4ge1xuXHRpZiAoZGlmZklkKSB7XG5cdFx0YnVpbGRMaW5rKG9sZElkLCBkaWZmSWQpO1xuXHRcdGlmIChvbGRJZCkge1xuXHRcdFx0dm9pZCBjb21wYXJlV2l0aFJlbW90ZURpZmZJZChkaWZmSWQpO1xuXHRcdH1cblx0fSBlbHNlIGlmIChyZXZpc2lvbklkICYmIGlzUmV2aXNpb25QYWdlKSB7XG5cdFx0YWRkSGVhZGVyTGluayhgL3AvJHtyZXZpc2lvbklkfWAsIGAvd2lraS9TcGVjaWFsOlBlcm1hbGluay8ke3JldmlzaW9uSWR9YCk7XG5cdFx0YWRkUG9ydGxldExpbmsoYC9wLyR7cmV2aXNpb25JZH1gLCBgL3dpa2kvU3BlY2lhbDpQZXJtYWxpbmsvJHtyZXZpc2lvbklkfWApO1xuXHR9IGVsc2UgaWYgKGFydGljbGVJZCkge1xuXHRcdGFkZEhlYWRlckxpbmsoYC9jLyR7YXJ0aWNsZUlkfWAsIGAvaW5kZXgucGhwP2N1cmlkPSR7YXJ0aWNsZUlkfWApO1xuXHRcdGFkZFBvcnRsZXRMaW5rKGAvYy8ke2FydGljbGVJZH1gLCBgL2luZGV4LnBocD9jdXJpZD0ke2FydGljbGVJZH1gKTtcblx0fVxufTtcblxuZXhwb3J0IHtwcm9jZXNzSWR9O1xuIiwgImltcG9ydCB7Y2hlY2tSZXZpc2lvblBhZ2V9IGZyb20gJy4vbW9kdWxlcy91dGlsL2NoZWNrUmV2aXNpb25QYWdlJztcbmltcG9ydCB7Z2V0U2hvcnREb21haW5zfSBmcm9tICcuL21vZHVsZXMvdXRpbC9nZXRTaG9ydERvbWFpbnMnO1xuaW1wb3J0IHtwcm9jZXNzSWR9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzSWQnO1xuXG4oZnVuY3Rpb24gc2hvcnRVUkwoKSB7XG5cdGNvbnN0IHt3Z0FjdGlvbiwgd2dBcnRpY2xlSWQsIHdnTmFtZXNwYWNlTnVtYmVyfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRjb25zdCBkb21haW5zID0gZ2V0U2hvcnREb21haW5zKCk7XG5cblx0aWYgKCFkb21haW5zLmxlbmd0aCB8fCB3Z05hbWVzcGFjZU51bWJlciA8IDApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAod2dBY3Rpb24gPT09ICd2aWV3JyAmJiB3Z0FydGljbGVJZCkge1xuXHRcdG13Lmhvb2soJ3dpa2lwYWdlLmNvbnRlbnQnKS5hZGQoKCRjb250ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRpZiAoJGNvbnRlbnQuYXR0cignaWQnKSAhPT0gJ213LWNvbnRlbnQtdGV4dCcpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBpc1JldmlzaW9uUGFnZTogYm9vbGVhbiA9IGNoZWNrUmV2aXNpb25QYWdlKCRjb250ZW50KTtcblxuXHRcdFx0cHJvY2Vzc0lkKGlzUmV2aXNpb25QYWdlLCB7XG5cdFx0XHRcdGFydGljbGVJZDogbXcuY29uZmlnLmdldCgnd2dBcnRpY2xlSWQnKSxcblx0XHRcdFx0ZGlmZklkOiBtdy5jb25maWcuZ2V0KCd3Z0RpZmZOZXdJZCcpLFxuXHRcdFx0XHRvbGRJZDogbXcuY29uZmlnLmdldCgnd2dEaWZmT2xkSWQnKSxcblx0XHRcdFx0cmV2aXNpb25JZDogbXcuY29uZmlnLmdldCgnd2dSZXZpc2lvbklkJyksXG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLG9CQUFxQkMsY0FBOEI7QUFDeEQsVUFDRUEsU0FBU0MsS0FBSyw4QkFBOEIsRUFBRUMsVUFDOUNGLFNBQVNDLEtBQUssNENBQTRDLEVBQUVDLFVBQVU7QUFFekU7O0FDTEEsSUFBTUMsa0JBQWtCQSxNQUFnQjtBQUN2QyxRQUFNO0lBQUNDO0VBQVEsSUFBSUMsR0FBR0MsT0FBT0MsSUFBSTtBQUNqQyxNQUFJQyxXQUFvQixDQUFBO0FBRXhCLFVBQVFKLFVBQUE7SUFDUCxLQUFLO0FBQ0pJLGlCQUFVLENBQUMsV0FBVyxTQUFTO0FBQy9CO0lBQ0QsS0FBSztBQUNKQSxpQkFBVSxDQUFDLGFBQWEsV0FBVztBQUNuQztJQUNELEtBQUs7QUFDSkEsaUJBQVUsQ0FBQyxlQUFlLGFBQWE7QUFDdkM7RUFDRjtBQUVBLFNBQU9BO0FBQ1I7O0FDakJBLElBQUFDLHFCQUEwQ0MsUUFBQSxpQkFBQTs7QUNBMUMsSUFBQUMsb0JBQXVCRCxRQUFBLGlCQUFBO0FBRXZCLElBQU1FLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLFFBQUEsR0FBT0Ysa0JBQUFHLFVBQVM7TUFDZkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0Qsa0JBQUEsR0FBaUJMLGtCQUFBRyxVQUFTO01BQ3pCQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRCxhQUFBLEdBQVlMLGtCQUFBRyxVQUFTO01BQ3BCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0Qsa0JBQUEsR0FBaUJKLGtCQUFBRyxVQUFTO01BQ3pCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0QsMkJBQUEsR0FBMEJKLGtCQUFBRyxVQUFTO01BQ2xDQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0QsY0FBQSxHQUFhSixrQkFBQUcsVUFBUztNQUNyQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNELGFBQUEsR0FBWUosa0JBQUFHLFVBQVM7TUFDcEJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREUsT0FBQSxHQUFNTixrQkFBQUcsVUFBUztNQUNkQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0QsNEJBQUEsR0FBMkJKLGtCQUFBRyxVQUFTO01BQ25DQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0VBQ0Y7QUFDRDtBQUVBLElBQU1HLGVBQWVOLGdCQUFnQjtBQUVyQyxJQUFNTyxhQUFnREMsU0FBUTtBQUM3RCxTQUFPRixhQUFhRSxHQUFHLEtBQUtBO0FBQzdCOztBQ3hEQSxJQUFNQyxXQUFZQyxVQUF1QjtBQUN4Q0Msb0JBQUMsYUFBWTtBQUNaLFFBQUk7QUFDSCxVQUFJQyxVQUFVQyxhQUFhQyxPQUFPQyxpQkFBaUI7QUFDbEQsY0FBTUgsVUFBVUMsVUFBVUcsVUFBVU4sSUFBSTtBQUN4QztNQUNEO0lBQ0QsUUFBUTtJQUFDO0FBRVQsVUFBTU8sU0FBU0MsU0FBU0MsY0FBYyxVQUFVO0FBQ2hERixXQUFPRyxRQUFRVjtBQUNmTyxXQUFPSSxhQUFhLFlBQVksTUFBTTtBQUN0Q0osV0FBT0ssTUFBTUMsV0FBVztBQUN4Qk4sV0FBT0ssTUFBTUUsTUFBTTtBQUNuQlAsV0FBT0ssTUFBTUcsT0FBTztBQUNwQlAsYUFBU1EsS0FBS0MsT0FBT1YsTUFBTTtBQUMzQkEsV0FBT1csT0FBTztBQUNkVixhQUFTVyxZQUFZLE1BQU07QUFDM0JaLFdBQU9hLE9BQU87RUFDZixDQUFBLEVBQUcsRUFBRUMsS0FBSyxNQUFNO0FBQ2YsU0FBS3RDLEdBQUd1QyxPQUFPekIsV0FBVyx5QkFBeUIsSUFBSUcsTUFBTTtNQUM1RHVCLE1BQU07TUFDTkMsS0FBSztJQUNOLENBQUM7RUFDRixDQUFDO0FBQ0Y7O0FGdEJBLElBQU07RUFBQ0M7QUFBVSxJQUFJMUMsR0FBR0MsT0FBT0MsSUFBSTtBQUNuQyxJQUFNeUMsVUFBVTdDLGdCQUFnQjtBQUVoQyxJQUFJOEMsMEJBQTBFO0VBQzdFUCxRQUFRQSxNQUFZO0VBQUM7QUFDdEI7QUFFQSxJQUFNUSxnQkFBZ0JBLENBQUNDLE1BQWNDLGNBQTRCO0FBQ2hFLE1BQUlDLGFBQXVDdkIsU0FBU3dCLGNBQWMsMEJBQTBCO0FBQzVGLE1BQUksQ0FBQ0QsWUFBWTtBQUFBLFFBQUFFO0FBQ2hCRixpQkFBYXZCLFNBQVNDLGNBQWMsR0FBRztBQUN2Q3NCLGVBQVdHLE9BQU87QUFDbEJILGVBQVdwQixhQUNWLGNBQ0FjLGFBQWE1QixXQUFXLFdBQVcsSUFBSUEsV0FBVyx3QkFBd0IsQ0FDM0U7QUFDQSxVQUFNc0MsT0FBTzNCLFNBQVNDLGNBQWMsTUFBTTtBQUMxQzBCLFNBQUtDLFlBQVk7QUFDakJMLGVBQVdkLE9BQU9rQixJQUFJO0FBQ3RCLFVBQU1FLGdCQUFnQjdCLFNBQVNDLGNBQWMsS0FBSztBQUNsRDRCLGtCQUFjRCxZQUFZO0FBQzFCQyxrQkFBY0MsS0FBSztBQUNuQkQsa0JBQWNwQixPQUFPYyxVQUFVO0FBQy9CLEtBQUFFLHdCQUFBekIsU0FBU3dCLGNBQWMsZ0JBQWdCLE9BQUEsUUFBQUMsMEJBQUEsVUFBdkNBLHNCQUEwQ00sUUFBUUYsYUFBYTtFQUNoRTtBQUVBLFFBQU1HLDBCQUEyQkMsV0FBNEI7QUFDNURBLFVBQU1DLGVBQWU7QUFDckIzQyxhQUFTMEIsYUFBQSxXQUFBa0IsT0FBd0JqQixRQUFRLENBQUMsQ0FBQyxFQUFBaUIsT0FBR2QsSUFBSSxJQUFBLFdBQUFjLE9BQWdCQyxTQUFTQyxJQUFJLEVBQUFGLE9BQUdiLFNBQVMsQ0FBRTtFQUM5RjtBQUVBSCwwQkFBd0JQLE9BQU87QUFDL0JPLDZCQUFBLEdBQTBCeEMsbUJBQUEyRCw2QkFBNEI7SUFDckRDLFFBQVFoQjtJQUNSUixNQUFNO0lBQ055QixVQUFVUjtFQUNYLENBQUM7QUFDRjs7QUcxQ0EsSUFBQVMsY0FBNEM3RCxRQUFBLEtBQUE7O0FDQzVDLElBQUE4RCxlQUE0QzlELFFBQUEsa0JBQUE7QUFDNUMsSUFBQStELGNBQXlCL0QsUUFBQSxLQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVN6QixVQUFNZ0UsUUFBUUM7QUFNZCxVQUFNQyxPQUFPQztBQUdiLFVBQU1DLFVBQUEsR0FBU0wsWUFBQU0sS0FBSUwsTUFBTU0sSUFBSTtBQUU3QixLQUFBLEdBQUFQLFlBQUFRLE9BQ0MsTUFBTVAsTUFBTU0sTUFDWGhELFdBQVU7QUFDVjhDLGFBQU85QyxRQUFRQTtJQUNoQixHQUNBO01BQUNrRCxXQUFXO0lBQUksQ0FDakI7QUFFQSxVQUFNQyxRQUFRQSxNQUFZO0FBQ3pCTCxhQUFPOUMsUUFBUTtBQUNmNEMsV0FBSyxlQUFlLEtBQUs7QUFDekJGLFlBQU1VLFFBQVE7SUFDZjtBQUVBLFVBQU1DLG1CQUFvQnJELFdBQXlCO0FBQ2xEOEMsYUFBTzlDLFFBQVFBO0FBQ2YsVUFBSSxDQUFDQSxPQUFPO0FBQ1htRCxjQUFNO01BQ1A7SUFDRDtBQWNBLFVBQU1HLGNBQWM7TUFDbkJDLE1BQU07TUFDTkMsWUFBWTtJQUNiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMURBLElBQUFDLGNBQXlVL0UsUUFBQSxLQUFBO0FBRXpVLElBQU1nRixhQUFhO0VBQUVDLE9BQU87QUFBc0I7QUFDbEQsSUFBTUMsYUFBYTtFQUFFRCxPQUFPO0FBQXNCO0FBRTNDLFNBQVNFLE9BQU9DLE1BQU1DLFFBQVFDLFFBQVFDLFFBQVFDLE9BQU9DLFVBQVU7QUFDcEUsVUFBQSxHQUFRVixZQUFBVyxXQUFXLElBQUEsR0FBR1gsWUFBQVksYUFBYUosT0FBTyxXQUFXLEdBQUc7SUFDdERqQixNQUFNaUIsT0FBT25CO0lBQ2IsaUJBQWlCLENBQ2ZpQixPQUFPLENBQUMsTUFBTUEsT0FBTyxDQUFDLElBQUlPLFlBQVlMLE9BQU9uQixTQUFVd0IsU0FDdkRMLE9BQU9aLGdCQUFBO0lBRVRrQixPQUFPTixPQUFPOUUsV0FBVyx3QkFBd0I7SUFDakQsa0JBQWtCO01BQUNxRixPQUFPUCxPQUFPOUUsV0FBVyxPQUFPO0lBQUM7SUFDcEQsb0JBQW9CO0lBQ3BCc0YsV0FBV1IsT0FBT2Q7RUFDcEIsR0FBRztJQUNEdUIsVUFBQSxHQUFTakIsWUFBQWtCLFNBQVMsTUFBTSxFQUFBLEdBQ3RCbEIsWUFBQW1CLG9CQUFvQixPQUFPbEIsWUFBWSxHQUFBLEdBQ3BDRCxZQUFBVyxXQUFXLElBQUksSUFBQSxHQUFHWCxZQUFBb0I7TUFBb0JwQixZQUFBcUI7TUFBVztPQUFBLEdBQU1yQixZQUFBc0IsWUFBWWYsT0FBT2dCLE9BQVFDLFVBQVM7QUFDMUYsZ0JBQUEsR0FBUXhCLFlBQUFXLFdBQVcsSUFBQSxHQUFHWCxZQUFBb0Isb0JBQW9CLE9BQU87VUFDL0N6RixLQUFLNkYsS0FBSzNGO1VBQ1ZxRSxPQUFPO1FBQ1QsR0FBRyxFQUFBLEdBQ0RGLFlBQUFtQjtVQUFvQjtVQUFRO1dBQUEsR0FBTW5CLFlBQUF5QixpQkFBaUJELEtBQUtULEtBQUs7VUFBRzs7UUFBWSxJQUFBLEdBQzVFZixZQUFBbUI7VUFBb0I7VUFBUWhCO1dBQUEsR0FBWUgsWUFBQXlCLGlCQUFpQkQsS0FBSzNGLElBQUk7VUFBRzs7UUFBWSxJQUFBLEdBQ2pGbUUsWUFBQTBCLGFBQWFsQixPQUFPLFdBQVcsR0FBRztVQUNoQ21CLFFBQVE7VUFDUixjQUFjbkIsT0FBTzlFLFdBQVcsTUFBTTtVQUN0Q2tHLFNBQVNmLFlBQVdMLE9BQU81RSxTQUFTNEYsS0FBSzNGLElBQUk7UUFDL0MsR0FBRztVQUNEb0YsVUFBQSxHQUFTakIsWUFBQWtCLFNBQVMsTUFBTSxFQUFBLEdBQ3RCbEIsWUFBQTBCLGFBQWFsQixPQUFPLFNBQVMsR0FBRztZQUFFeEMsTUFBTXdDLE9BQU9YO1VBQVksQ0FBQyxJQUFBLEdBQzVERyxZQUFBNkI7WUFBaUIsT0FBQSxHQUFNN0IsWUFBQXlCLGlCQUFpQmpCLE9BQU85RSxXQUFXLE1BQU0sQ0FBQztZQUFHOztVQUFZLENBQUEsQ0FDakY7VUFDRG9HLEdBQUc7O1FBQ0wsR0FBRyxHQUFlLENBQUMsY0FBYyxTQUFTLENBQUMsQ0FBQSxDQUM1QztNQUNILENBQUM7TUFBRzs7SUFBd0IsRUFBQSxDQUM3QixDQUFBLENBQ0Y7SUFDREEsR0FBRzs7RUFDTCxHQUFHLEdBQWUsQ0FBQyxRQUFRLFNBQVMsZ0JBQWdCLENBQUM7QUFDdkQ7O0FDM0NnUkMsWUFBTzNCLFNBQVNBO0FBQU8yQixZQUFPQyxTQUFTO0FBQXlCRCxZQUFPRSxZQUFZO0FBQWtCLElBQU9DLGVBQVFIOztBSEVwWSxJQUFBSSxxQkFBMENsSCxRQUFBLGlCQUFBO0FBSTFDLElBQU07RUFBQ21IO0VBQU05RSxZQUFBK0U7QUFBVSxJQUFJekgsR0FBR0MsT0FBT0MsSUFBSTtBQUN6QyxJQUFNd0gsV0FBVTVILGdCQUFnQjtBQUVoQyxJQUFJNkgsMkJBQTJFO0VBQzlFdEYsUUFBUUEsTUFBWTtFQUFDO0FBQ3RCO0FBRUEsSUFBTXVGLGFBQWNqQixXQUFpRDtBQUNwRSxRQUFNa0IsT0FBT3BHLFNBQVNDLGNBQWMsS0FBSztBQUN6Q0QsV0FBU1EsS0FBS0MsT0FBTzJGLElBQUk7QUFFekIsUUFBTUMsT0FBQSxHQUE4QjVELFlBQUE2RCxXQUFVVCxjQUFLO0lBQ2xEM0MsTUFBTTtJQUNOZ0M7SUFDQTVCLFNBQVNBLE1BQVk7QUFDcEIrQyxjQUFBLFFBQUFBLFFBQUEsVUFBQUEsSUFBS0UsUUFBUTtBQUNiSCxXQUFLeEYsT0FBTztJQUNiO0VBQ0QsQ0FBQztBQUNEeUYsTUFBSUcsTUFBTUosSUFBSTtBQUNmO0FBRUEsSUFBTUssaUJBQWlCQSxDQUFDcEYsTUFBY0MsY0FBNEI7QUFDakUsUUFBTW9GLFlBQW1DMUcsU0FBU3dCLGNBQWMsYUFBYSxJQUFJLGVBQWU7QUFDaEcsTUFBSW1GLGNBQW9DM0csU0FBU3dCLGNBQWMsY0FBYztBQUM3RW1GLGtCQUFBQSxjQUFnQnBJLEdBQUdxSSxLQUFLSCxlQUN2QkMsV0FDQSxLQUNBckgsV0FBVyx3QkFBd0IsR0FDbkMsZUFDQUEsV0FBVyxVQUFVLENBQ3RCO0FBRUEsTUFBSXNILGFBQWE7QUFBQSxRQUFBRTtBQUNoQixVQUFNQywyQkFBNEI3RSxXQUE0QjtBQUM3REEsWUFBTUMsZUFBZTtBQUNyQixZQUFNZ0QsUUFBUSxDQUNiO1FBQUNSLE9BQU9yRixXQUFXLFVBQVU7UUFBR0csTUFBTTRDLFNBQVNWO01BQUksR0FDbkQ7UUFBQ2dELE9BQU9yRixXQUFXLGVBQWU7UUFBR0csTUFBQSxXQUFBMkMsT0FBaUJDLFNBQVNDLElBQUksRUFBQUYsT0FBR2IsU0FBUztNQUFFLENBQUE7QUFFbEYsVUFBSTBFLGFBQVk7QUFBQSxZQUFBZSxZQUFBQywyQkFDV2YsU0FBUWdCLFFBQVEsQ0FBQSxHQUFBQztBQUFBLFlBQUE7QUFBMUMsZUFBQUgsVUFBQUksRUFBQSxHQUFBLEVBQUFELFFBQUFILFVBQUFLLEVBQUEsR0FBQUMsUUFBNkM7QUFBQSxrQkFBbEMsQ0FBQ0MsR0FBR0MsTUFBTSxJQUFBTCxNQUFBaEg7QUFDcEJnRixrQkFBTXNDLEtBQUs7Y0FBQzlDLE9BQUEsR0FBQXZDLE9BQVU5QyxXQUFXLFdBQVcsQ0FBQyxFQUFBOEMsT0FBR21GLElBQUksQ0FBQztjQUFJOUgsTUFBQSxXQUFBMkMsT0FBaUJvRixNQUFNLEVBQUFwRixPQUFHZCxJQUFJO1lBQUUsQ0FBQztVQUMzRjtRQUFBLFNBQUFvRyxLQUFBO0FBQUFWLG9CQUFBVyxFQUFBRCxHQUFBO1FBQUEsVUFBQTtBQUFBVixvQkFBQVksRUFBQTtRQUFBO01BQ0Q7QUFDQXhCLGlCQUFXakIsS0FBSztJQUNqQjtBQUVBZ0IsNkJBQXlCdEYsT0FBTztBQUNoQ3NGLGdDQUFBLEdBQTJCSixtQkFBQXhELDZCQUE0QjtNQUN0REMsU0FBQXNFLHdCQUFTRixZQUFZaUIsdUJBQUEsUUFBQWYsMEJBQUEsU0FBQUEsd0JBQXFCRjtNQUMxQzVGLE1BQU07TUFDTnlCLFVBQVVzRTtJQUNYLENBQUM7QUFFRCxRQUFJZixTQUFTLGFBQWEsQ0FBQzhCLEVBQUVsQixXQUFXLEVBQUV4SSxLQUFLLGlDQUFpQyxFQUFFQyxRQUFRO0FBQ3pGeUosUUFBRWxCLFdBQVcsRUFDWHhJLEtBQUssR0FBRyxFQUNSNEQsUUFDQSxxSEFDRDtJQUNGO0VBQ0Q7QUFDRDs7QUlsRUEsSUFBTStGLFlBQVlBLENBQUNDLE9BQXNCQyxXQUF5QjtBQUNqRSxNQUFJM0csT0FBZTtBQUNuQixNQUFJQyxZQUFvQjtBQUN4QixNQUFJeUcsT0FBTztBQUNWMUcsWUFBQSxJQUFBYyxPQUFZNEYsS0FBSztBQUNqQnpHLGlCQUFBLElBQUFhLE9BQWlCNEYsS0FBSztFQUN2QjtBQUNBMUcsVUFBQSxJQUFBYyxPQUFZNkYsTUFBTTtBQUNsQjFHLGVBQUEsSUFBQWEsT0FBaUI2RixNQUFNO0FBRXZCNUcsZ0JBQWNDLE1BQU1DLFNBQVM7QUFDN0JtRixpQkFBZXBGLE1BQU1DLFNBQVM7QUFDL0I7O0FDZEMsSUFBQTJHLFVBQVc7O0FDQVosSUFBQUMscUJBQXdCdEosUUFBQSxpQkFBQTtBQUV4QixJQUFNdUosT0FBQSxHQUFjRCxtQkFBQUUsV0FBQSxZQUFBakcsT0FBOEI4RixPQUFPLENBQUU7O0FDRDNELElBQUFJLHFCQUF1QnpKLFFBQUEscUJBQUE7QUFRdkIsSUFBTTBKLGFBQW9DO0VBQ3pDQyxRQUFRO0VBQ1JDLFFBQVE7RUFDUkMsZUFBZTtFQUNmQyxNQUFNO0VBQ05DLFlBQVk7RUFDWkMsU0FBUztFQUNUQyxRQUFRO0FBQ1Q7QUFFQSxJQUFNQyxXQUFBLDRCQUFBO0FBQUEsTUFBQUMsUUFBQXRKLGtCQUFXLFdBQU91SSxRQUE2QztBQUNwRSxRQUFJO0FBQ0gsYUFBQSxNQUFhRyxJQUFJMUosSUFBSTtRQUNwQixHQUFHNko7UUFDSFUsU0FBU2hCO01BQ1YsQ0FBc0I7SUFDdkIsU0FBU2lCLE9BQWdCO0FBQ3hCQyxjQUFRRCxNQUFNLDBCQUEwQkEsS0FBSztBQUM3QyxPQUFBLEdBQUFaLG1CQUFBYyxVQUNDO1FBQ0MzSixNQUFNSCxXQUFXLGVBQWU7UUFDaENnRSxPQUFPO1FBQ1ArRixVQUFVO01BQ1gsR0FDQSxPQUNEO0FBRUEsYUFBTyxDQUFDO0lBQ1Q7RUFDRCxDQUFBO0FBQUEsU0FBQSxTQW5CTU4sVUFBQU8sSUFBQTtBQUFBLFdBQUFOLE1BQUFPLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsR0FBQTs7QUNqQk4sSUFBTUMsMEJBQUEsNEJBQUE7QUFBQSxNQUFBQyxRQUFBaEssa0JBQTBCLFdBQU91SSxRQUFrQztBQUFBLFFBQUEwQjtBQUN4RSxVQUFNQyxXQUFBLE1BQXVEYixTQUFTZCxNQUFNO0FBQzVFLFFBQUlBLFdBQVd6SixHQUFHQyxPQUFPQyxJQUFJLGFBQWEsT0FBS2lMLG9CQUFBQyxTQUFTLFNBQVMsT0FBQSxRQUFBRCxzQkFBQSxTQUFBLFNBQWxCQSxrQkFBcUJFLGVBQWNyTCxHQUFHQyxPQUFPQyxJQUFJLGFBQWEsR0FBRztBQUMvR3FKLGdCQUFVLEdBQUdFLE1BQU07SUFDcEI7RUFDRCxDQUFBO0FBQUEsU0FBQSxTQUxNd0IseUJBQUFLLEtBQUE7QUFBQSxXQUFBSixNQUFBSCxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEdBQUE7O0FDRU4sSUFBTU8sWUFBWUEsQ0FDakJDLGdCQUNBO0VBQ0NDO0VBQ0FoQztFQUNBRDtFQUNBa0M7QUFDRCxNQU1VO0FBQ1YsTUFBSWpDLFFBQVE7QUFDWEYsY0FBVUMsT0FBT0MsTUFBTTtBQUN2QixRQUFJRCxPQUFPO0FBQ1YsV0FBS3lCLHdCQUF3QnhCLE1BQU07SUFDcEM7RUFDRCxXQUFXaUMsY0FBY0YsZ0JBQWdCO0FBQ3hDM0ksa0JBQUEsTUFBQWUsT0FBb0I4SCxVQUFVLEdBQUEsMkJBQUE5SCxPQUErQjhILFVBQVUsQ0FBRTtBQUN6RXhELG1CQUFBLE1BQUF0RSxPQUFxQjhILFVBQVUsR0FBQSwyQkFBQTlILE9BQStCOEgsVUFBVSxDQUFFO0VBQzNFLFdBQVdELFdBQVc7QUFDckI1SSxrQkFBQSxNQUFBZSxPQUFvQjZILFNBQVMsR0FBQSxvQkFBQTdILE9BQXdCNkgsU0FBUyxDQUFFO0FBQ2hFdkQsbUJBQUEsTUFBQXRFLE9BQXFCNkgsU0FBUyxHQUFBLG9CQUFBN0gsT0FBd0I2SCxTQUFTLENBQUU7RUFDbEU7QUFDRDs7Q0MzQkMsU0FBU0UsV0FBVztBQUNwQixRQUFNO0lBQUNDO0lBQVVDO0lBQWFDO0VBQWlCLElBQUk5TCxHQUFHQyxPQUFPQyxJQUFJO0FBRWpFLFFBQU1DLFdBQVVMLGdCQUFnQjtBQUVoQyxNQUFJLENBQUNLLFNBQVFOLFVBQVVpTSxvQkFBb0IsR0FBRztBQUM3QztFQUNEO0FBRUEsTUFBSUYsYUFBYSxVQUFVQyxhQUFhO0FBQ3ZDN0wsT0FBRytMLEtBQUssa0JBQWtCLEVBQUVDLElBQUtyTSxjQUFtQjtBQUNuRCxVQUFJQSxTQUFTc00sS0FBSyxJQUFJLE1BQU0sbUJBQW1CO0FBQzlDO01BQ0Q7QUFFQSxZQUFNVCxpQkFBMEI5TCxrQkFBa0JDLFFBQVE7QUFFMUQ0TCxnQkFBVUMsZ0JBQWdCO1FBQ3pCQyxXQUFXekwsR0FBR0MsT0FBT0MsSUFBSSxhQUFhO1FBQ3RDdUosUUFBUXpKLEdBQUdDLE9BQU9DLElBQUksYUFBYTtRQUNuQ3NKLE9BQU94SixHQUFHQyxPQUFPQyxJQUFJLGFBQWE7UUFDbEN3TCxZQUFZMUwsR0FBR0MsT0FBT0MsSUFBSSxjQUFjO01BQ3pDLENBQUM7SUFDRixDQUFDO0VBQ0Y7QUFDRCxHQUFHOyIsCiAgIm5hbWVzIjogWyJjaGVja1JldmlzaW9uUGFnZSIsICIkY29udGVudCIsICJmaW5kIiwgImxlbmd0aCIsICJnZXRTaG9ydERvbWFpbnMiLCAid2dXaWtpSUQiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJkb21haW5zMyIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAiQ2xvc2UiLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiQ29weSIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiY29weVRleHQiLCAidGV4dCIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJuYXZpZ2F0b3IiLCAiY2xpcGJvYXJkIiwgIndpbmRvdyIsICJpc1NlY3VyZUNvbnRleHQiLCAid3JpdGVUZXh0IiwgImhlbHBlciIsICJkb2N1bWVudCIsICJjcmVhdGVFbGVtZW50IiwgInZhbHVlIiwgInNldEF0dHJpYnV0ZSIsICJzdHlsZSIsICJwb3NpdGlvbiIsICJ0b3AiLCAibGVmdCIsICJib2R5IiwgImFwcGVuZCIsICJzZWxlY3QiLCAiZXhlY0NvbW1hbmQiLCAicmVtb3ZlIiwgInRoZW4iLCAibm90aWZ5IiwgInR5cGUiLCAidGFnIiwgIndnVXNlck5hbWUiLCAiZG9tYWlucyIsICJoZWFkZXJMaW5rRXZlbnRMaXN0ZW5lciIsICJhZGRIZWFkZXJMaW5rIiwgImxpbmsiLCAicGVybWFMaW5rIiwgImhlYWRlckxpbmsiLCAicXVlcnlTZWxlY3RvciIsICJfZG9jdW1lbnQkcXVlcnlTZWxlY3QiLCAiaHJlZiIsICJpY29uIiwgImNsYXNzTmFtZSIsICJoZWFkZXJFbGVtZW50IiwgImlkIiwgInByZXBlbmQiLCAiaGVhZGVyTGlua0NsaWNrTGlzdGVuZXIiLCAiZXZlbnQiLCAicHJldmVudERlZmF1bHQiLCAiY29uY2F0IiwgImxvY2F0aW9uIiwgImhvc3QiLCAiYWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyIiwgInRhcmdldCIsICJsaXN0ZW5lciIsICJpbXBvcnRfdnVlNCIsICJpbXBvcnRfY29kZXgiLCAiaW1wb3J0X3Z1ZTIiLCAicHJvcHMiLCAiX19wcm9wcyIsICJlbWl0IiwgIl9fZW1pdCIsICJpc09wZW4iLCAicmVmIiwgIm9wZW4iLCAid2F0Y2giLCAiaW1tZWRpYXRlIiwgImNsb3NlIiwgIm9uQ2xvc2UiLCAiaGFuZGxlT3BlbkNoYW5nZSIsICJjZHhJY29uQ29weSIsICJwYXRoIiwgInNob3VsZEZsaXAiLCAiaW1wb3J0X3Z1ZTMiLCAiX2hvaXN0ZWRfMSIsICJjbGFzcyIsICJfaG9pc3RlZF8yIiwgInJlbmRlciIsICJfY3R4IiwgIl9jYWNoZSIsICIkcHJvcHMiLCAiJHNldHVwIiwgIiRkYXRhIiwgIiRvcHRpb25zIiwgIm9wZW5CbG9jayIsICJjcmVhdGVCbG9jayIsICIkZXZlbnQiLCAidGl0bGUiLCAibGFiZWwiLCAib25EZWZhdWx0IiwgImRlZmF1bHQiLCAid2l0aEN0eCIsICJjcmVhdGVFbGVtZW50Vk5vZGUiLCAiY3JlYXRlRWxlbWVudEJsb2NrIiwgIkZyYWdtZW50IiwgInJlbmRlckxpc3QiLCAiaXRlbXMiLCAiaXRlbSIsICJ0b0Rpc3BsYXlTdHJpbmciLCAiY3JlYXRlVk5vZGUiLCAid2VpZ2h0IiwgIm9uQ2xpY2siLCAiY3JlYXRlVGV4dFZOb2RlIiwgIl8iLCAiQXBwX2RlZmF1bHQiLCAiX19maWxlIiwgIl9fc2NvcGVJZCIsICJBcHBfZGVmYXVsdDIiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgInNraW4iLCAid2dVc2VyTmFtZTIiLCAiZG9tYWluczIiLCAicG9ydGxldExpbmtFdmVudExpc3RlbmVyIiwgIm9wZW5EaWFsb2ciLCAicm9vdCIsICJhcHAiLCAiY3JlYXRlQXBwIiwgInVubW91bnQiLCAibW91bnQiLCAiYWRkUG9ydGxldExpbmsiLCAicG9ydGxldElkIiwgInBvcnRsZXRMaW5rIiwgInV0aWwiLCAiX3BvcnRsZXRMaW5rJGZpcnN0RWxlIiwgInBvcnRsZXRMaW5rQ2xpY2tMaXN0ZW5lciIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiZW50cmllcyIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJpIiwgImRvbWFpbiIsICJwdXNoIiwgImVyciIsICJlIiwgImYiLCAiZmlyc3RFbGVtZW50Q2hpbGQiLCAiJCIsICJidWlsZExpbmsiLCAib2xkSWQiLCAiZGlmZklkIiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgImFwaSIsICJpbml0TXdBcGkiLCAiaW1wb3J0X2V4dF9nYWRnZXQ1IiwgInBhcmFtZXRlcnMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAidG9yZWxhdGl2ZSIsICJzbWF4YWdlIiwgIm1heGFnZSIsICJxdWVyeUFwaSIsICJfcmVmMiIsICJmcm9tcmV2IiwgImVycm9yIiwgImNvbnNvbGUiLCAidG9hc3RpZnkiLCAiZHVyYXRpb24iLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImNvbXBhcmVXaXRoUmVtb3RlRGlmZklkIiwgIl9yZWYzIiwgIl9yZXNwb25zZSRjb21wYXJlIiwgInJlc3BvbnNlIiwgImZyb21yZXZpZCIsICJfeDIiLCAicHJvY2Vzc0lkIiwgImlzUmV2aXNpb25QYWdlIiwgImFydGljbGVJZCIsICJyZXZpc2lvbklkIiwgInNob3J0VVJMIiwgIndnQWN0aW9uIiwgIndnQXJ0aWNsZUlkIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgImhvb2siLCAiYWRkIiwgImF0dHIiXQp9Cg==

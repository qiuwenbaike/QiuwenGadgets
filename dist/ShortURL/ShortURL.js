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
var import_vue4 = require("vue");
var import_vue = require("vue");
var import_codex = require("@wikimedia/codex");
var import_vue2 = require("vue");
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
    const copyText = (text) => {
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
    const __returned__ = {
      props,
      emit,
      isOpen,
      close,
      handleOpenChange,
      copyText,
      get CdxButton() {
        return import_codex.CdxButton;
      },
      get CdxDialog() {
        return import_codex.CdxDialog;
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
          weight: "primary",
          onClick: ($event) => $setup.copyText(item.text)
        }, {
          default: (0, import_vue3.withCtx)(() => [(0, import_vue3.createTextVNode)(
            (0, import_vue3.toDisplayString)($setup.getMessage("Copy")),
            1
            /* TEXT */
          )]),
          _: 1
          /* STABLE */
        }, 8, ["onClick"])]);
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
//! src/ShortURL/modules/addHeaderLink.ts
var import_ext_gadget2 = require("ext.gadget.Util");
var {
  wgUserName
} = mw.config.get();
var domains = getShortDomains();
var headerLinkEventListener = {
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
    openDialog([{
      label: getMessage("Short URL"),
      text: wgUserName ? "https://".concat(domains[0]).concat(link) : "https://".concat(location.host).concat(permaLink)
    }]);
  };
  headerLinkEventListener.remove();
  headerLinkEventListener = (0, import_ext_gadget2.addEventListenerWithRemover)({
    target: headerLink,
    type: "click",
    listener: headerLinkClickListener
  });
};
//! src/ShortURL/modules/addPortletLink.ts
var import_vue5 = require("vue");
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
var openDialog2 = (items) => {
  const root = document.createElement("div");
  document.body.append(root);
  const app = (0, import_vue5.createApp)(App_default2, {
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
      openDialog2(items);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Nob3J0VVJML21vZHVsZXMvdXRpbC9jaGVja1JldmlzaW9uUGFnZS50cyIsICJzcmMvU2hvcnRVUkwvbW9kdWxlcy91dGlsL2dldFNob3J0RG9tYWlucy50cyIsICJzcmMvU2hvcnRVUkwvbW9kdWxlcy9hZGRIZWFkZXJMaW5rLnRzIiwgImRpc3QvU2hvcnRVUkwvc3JjL1Nob3J0VVJML0FwcC52dWUiLCAic3JjL1Nob3J0VVJML21vZHVsZXMvaTE4bi50cyIsICJzZmMtdGVtcGxhdGU6RDpcXEdpdFJlcG9zaXRvcnlcXFFpdXdlbkdhZGdldHNcXHNyY1xcU2hvcnRVUkxcXEFwcC52dWU/dHlwZT10ZW1wbGF0ZSIsICJzcmMvU2hvcnRVUkwvQXBwLnZ1ZSIsICJzcmMvU2hvcnRVUkwvbW9kdWxlcy9hZGRQb3J0bGV0TGluay50cyIsICJzcmMvU2hvcnRVUkwvbW9kdWxlcy9idWlsZExpbmsudHMiLCAic3JjL1Nob3J0VVJML29wdGlvbnMuanNvbiIsICJzcmMvU2hvcnRVUkwvbW9kdWxlcy9hcGkudHMiLCAic3JjL1Nob3J0VVJML21vZHVsZXMvdXRpbC9xdWVyeUFwaS50cyIsICJzcmMvU2hvcnRVUkwvbW9kdWxlcy9jb21wYXJlV2l0aFJlbW90ZURpZmZJZC50cyIsICJzcmMvU2hvcnRVUkwvbW9kdWxlcy9wcm9jZXNzSWQudHMiLCAic3JjL1Nob3J0VVJML1Nob3J0VVJMLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBjaGVja1JldmlzaW9uUGFnZSA9ICgkY29udGVudDogSlF1ZXJ5KTogYm9vbGVhbiA9PiB7XG5cdHJldHVybiAoXG5cdFx0KCRjb250ZW50LmZpbmQoJyNjb250ZW50U3ViICNtdy1yZXZpc2lvbi1uYXYnKS5sZW5ndGggfHxcblx0XHRcdCRjb250ZW50LmZpbmQoJ21haW4jY29udGVudD4ucHJlLWNvbnRlbnQgI213LXJldmlzaW9uLW5hdicpLmxlbmd0aCkgPiAwXG5cdCk7XG59O1xuXG5leHBvcnQge2NoZWNrUmV2aXNpb25QYWdlfTtcbiIsICJjb25zdCBnZXRTaG9ydERvbWFpbnMgPSAoKTogc3RyaW5nW10gPT4ge1xuXHRjb25zdCB7d2dXaWtpSUR9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRsZXQgZG9tYWluczogc3RyaW5nW10gPSBbXTtcblxuXHRzd2l0Y2ggKHdnV2lraUlEKSB7XG5cdFx0Y2FzZSAnemhxaXV3ZW5iYWlrZSc6XG5cdFx0XHRkb21haW5zID0gWydxd2JrLmNjJywgJ2Jrd3ouY24nXTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJ2xpY2VuY2V3aWtpJzpcblx0XHRcdGRvbWFpbnMgPSBbJ2wucXdiay5jYycsICdsLmJrd3ouY24nXTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJ21uY3FpdXdlbmJhaWtlJzpcblx0XHRcdGRvbWFpbnMgPSBbJ21uYy5xd2JrLmNjJywgJ21uYy5ia3d6LmNuJ107XG5cdFx0XHRicmVhaztcblx0fVxuXG5cdHJldHVybiBkb21haW5zO1xufTtcblxuZXhwb3J0IHtnZXRTaG9ydERvbWFpbnN9O1xuIiwgImltcG9ydCB7dHlwZSBBcHAgYXMgVnVlQXBwLCBjcmVhdGVBcHB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgQXBwIGZyb20gJy4uL0FwcC52dWUnO1xuaW1wb3J0IHthZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXJ9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge2dldFNob3J0RG9tYWluc30gZnJvbSAnLi91dGlsL2dldFNob3J0RG9tYWlucyc7XG5cbmNvbnN0IHt3Z1VzZXJOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcbmNvbnN0IGRvbWFpbnMgPSBnZXRTaG9ydERvbWFpbnMoKTtcblxubGV0IGhlYWRlckxpbmtFdmVudExpc3RlbmVyOiBSZXR1cm5UeXBlPHR5cGVvZiBhZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXI+ID0ge1xuXHRyZW1vdmU6ICgpOiB2b2lkID0+IHt9LFxufTtcblxuY29uc3Qgb3BlbkRpYWxvZyA9IChpdGVtczoge2xhYmVsOiBzdHJpbmc7IHRleHQ6IHN0cmluZ31bXSk6IHZvaWQgPT4ge1xuXHRjb25zdCByb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGRvY3VtZW50LmJvZHkuYXBwZW5kKHJvb3QpO1xuXG5cdGNvbnN0IGFwcDogVnVlQXBwPEVsZW1lbnQ+IHwgbnVsbCA9IGNyZWF0ZUFwcChBcHAsIHtcblx0XHRvcGVuOiB0cnVlLFxuXHRcdGl0ZW1zLFxuXHRcdG9uQ2xvc2U6ICgpOiB2b2lkID0+IHtcblx0XHRcdGFwcD8udW5tb3VudCgpO1xuXHRcdFx0cm9vdC5yZW1vdmUoKTtcblx0XHR9LFxuXHR9KTtcblx0YXBwLm1vdW50KHJvb3QpO1xufTtcblxuY29uc3QgYWRkSGVhZGVyTGluayA9IChsaW5rOiBzdHJpbmcsIHBlcm1hTGluazogc3RyaW5nKTogdm9pZCA9PiB7XG5cdGxldCBoZWFkZXJMaW5rOiBIVE1MQW5jaG9yRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXctaW5kaWNhdG9yLXNob3J0VVJMIGEnKTtcblx0aWYgKCFoZWFkZXJMaW5rKSB7XG5cdFx0aGVhZGVyTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblx0XHRoZWFkZXJMaW5rLmhyZWYgPSAnIyc7XG5cdFx0aGVhZGVyTGluay5zZXRBdHRyaWJ1dGUoXG5cdFx0XHQnYXJpYS1sYWJlbCcsXG5cdFx0XHR3Z1VzZXJOYW1lID8gZ2V0TWVzc2FnZSgnU2hvcnQgVVJMJykgOiBnZXRNZXNzYWdlKCdTaGFyZSBVUkwgZm9yIHRoZSBwYWdlJylcblx0XHQpO1xuXHRcdGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0aWNvbi5jbGFzc05hbWUgPSAnZ2FkZ2V0LXNob3J0LWxpbmtfX2ljb24nO1xuXHRcdGhlYWRlckxpbmsuYXBwZW5kKGljb24pO1xuXHRcdGNvbnN0IGhlYWRlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRoZWFkZXJFbGVtZW50LmNsYXNzTmFtZSA9ICdtdy1pbmRpY2F0b3InO1xuXHRcdGhlYWRlckVsZW1lbnQuaWQgPSAnbXctaW5kaWNhdG9yLXNob3J0VVJMJztcblx0XHRoZWFkZXJFbGVtZW50LmFwcGVuZChoZWFkZXJMaW5rKTtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXctaW5kaWNhdG9ycycpPy5wcmVwZW5kKGhlYWRlckVsZW1lbnQpO1xuXHR9XG5cblx0Y29uc3QgaGVhZGVyTGlua0NsaWNrTGlzdGVuZXIgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkID0+IHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdG9wZW5EaWFsb2coW1xuXHRcdFx0e1xuXHRcdFx0XHRsYWJlbDogZ2V0TWVzc2FnZSgnU2hvcnQgVVJMJyksXG5cdFx0XHRcdHRleHQ6IHdnVXNlck5hbWUgPyBgaHR0cHM6Ly8ke2RvbWFpbnNbMF19JHtsaW5rfWAgOiBgaHR0cHM6Ly8ke2xvY2F0aW9uLmhvc3R9JHtwZXJtYUxpbmt9YCxcblx0XHRcdH0sXG5cdFx0XSk7XG5cdH07XG5cblx0aGVhZGVyTGlua0V2ZW50TGlzdGVuZXIucmVtb3ZlKCk7XG5cdGhlYWRlckxpbmtFdmVudExpc3RlbmVyID0gYWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyKHtcblx0XHR0YXJnZXQ6IGhlYWRlckxpbmssXG5cdFx0dHlwZTogJ2NsaWNrJyxcblx0XHRsaXN0ZW5lcjogaGVhZGVyTGlua0NsaWNrTGlzdGVuZXIsXG5cdH0pO1xufTtcblxuZXhwb3J0IHthZGRIZWFkZXJMaW5rfTtcbiIsICI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtDZHhCdXR0b24sIENkeERpYWxvZ30gZnJvbSAnQHdpa2ltZWRpYS9jb2RleCc7XG5pbXBvcnQge3JlZiwgd2F0Y2h9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vbW9kdWxlcy9pMThuJztcblxuaW50ZXJmYWNlIENvcHlJdGVtIHtcblx0bGFiZWw6IHN0cmluZztcblx0dGV4dDogc3RyaW5nO1xufVxuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcblx0b3BlbjogYm9vbGVhbjtcblx0aXRlbXM6IENvcHlJdGVtW107XG5cdG9uQ2xvc2U6ICgpID0+IHZvaWQ7XG59PigpO1xuXG5jb25zdCBlbWl0ID0gZGVmaW5lRW1pdHM8e1xuXHQndXBkYXRlOm9wZW4nOiBbdmFsdWU6IGJvb2xlYW5dO1xufT4oKTtcbmNvbnN0IGlzT3BlbiA9IHJlZihwcm9wcy5vcGVuKTtcblxud2F0Y2goXG5cdCgpID0+IHByb3BzLm9wZW4sXG5cdCh2YWx1ZSkgPT4ge1xuXHRcdGlzT3Blbi52YWx1ZSA9IHZhbHVlO1xuXHR9LFxuXHR7aW1tZWRpYXRlOiB0cnVlfVxuKTtcblxuY29uc3QgY2xvc2UgPSAoKTogdm9pZCA9PiB7XG5cdGlzT3Blbi52YWx1ZSA9IGZhbHNlO1xuXHRlbWl0KCd1cGRhdGU6b3BlbicsIGZhbHNlKTtcblx0cHJvcHMub25DbG9zZSgpO1xufTtcblxuY29uc3QgaGFuZGxlT3BlbkNoYW5nZSA9ICh2YWx1ZTogYm9vbGVhbik6IHZvaWQgPT4ge1xuXHRpc09wZW4udmFsdWUgPSB2YWx1ZTtcblx0aWYgKCF2YWx1ZSkge1xuXHRcdGNsb3NlKCk7XG5cdH1cbn07XG5cbmNvbnN0IGNvcHlUZXh0ID0gKHRleHQ6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHQoYXN5bmMgKCkgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRpZiAobmF2aWdhdG9yLmNsaXBib2FyZCAmJiB3aW5kb3cuaXNTZWN1cmVDb250ZXh0KSB7XG5cdFx0XHRcdGF3YWl0IG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHRleHQpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7fVxuXG5cdFx0Y29uc3QgaGVscGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcblx0XHRoZWxwZXIudmFsdWUgPSB0ZXh0O1xuXHRcdGhlbHBlci5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJ3RydWUnKTtcblx0XHRoZWxwZXIuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuXHRcdGhlbHBlci5zdHlsZS50b3AgPSAnLTk5OTlweCc7XG5cdFx0aGVscGVyLnN0eWxlLmxlZnQgPSAnLTk5OTlweCc7XG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmQoaGVscGVyKTtcblx0XHRoZWxwZXIuc2VsZWN0KCk7XG5cdFx0ZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcblx0XHRoZWxwZXIucmVtb3ZlKCk7XG5cdH0pKCkudGhlbigoKSA9PiB7XG5cdFx0dm9pZCBtdy5ub3RpZnkoZ2V0TWVzc2FnZSgnVVJMIGNvcGllZCB0byBjbGlwYm9hcmQnKSArIHRleHQsIHtcblx0XHRcdHR5cGU6ICdzdWNjZXNzJyxcblx0XHRcdHRhZzogJ0RpZmZMaW5rcycsXG5cdFx0fSk7XG5cdH0pO1xufTtcbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG5cdDxjZHgtZGlhbG9nXG5cdFx0di1tb2RlbDpvcGVuPVwiaXNPcGVuXCJcblx0XHQ6dGl0bGU9XCJnZXRNZXNzYWdlKCdTaGFyZSBVUkwgZm9yIHRoZSBwYWdlJylcIlxuXHRcdDpkZWZhdWx0LWFjdGlvbj1cIntsYWJlbDogZ2V0TWVzc2FnZSgnQ2xvc2UnKX1cIlxuXHRcdDp1c2UtY2xvc2UtYnV0dG9uPVwidHJ1ZVwiXG5cdFx0QHVwZGF0ZTpvcGVuPVwiaGFuZGxlT3BlbkNoYW5nZVwiXG5cdFx0QGRlZmF1bHQ9XCJjbG9zZVwiXG5cdD5cblx0XHQ8ZGl2IGNsYXNzPVwic2hvcnQtdXJsLWNvcHktbGlzdFwiPlxuXHRcdFx0PGRpdiB2LWZvcj1cIml0ZW0gaW4gaXRlbXNcIiA6a2V5PVwiaXRlbS50ZXh0XCIgY2xhc3M9XCJzaG9ydC11cmwtY29weS1pdGVtXCI+XG5cdFx0XHRcdDxzcGFuPnt7IGl0ZW0ubGFiZWwgfX08L3NwYW4+XG5cdFx0XHRcdDxjb2RlIGNsYXNzPVwic2hvcnQtdXJsLWNvcHktdGV4dFwiPnt7IGl0ZW0udGV4dCB9fTwvY29kZT5cblx0XHRcdFx0PGNkeC1idXR0b24gd2VpZ2h0PVwicHJpbWFyeVwiIEBjbGljaz1cImNvcHlUZXh0KGl0ZW0udGV4dClcIj57eyBnZXRNZXNzYWdlKCdDb3B5JykgfX08L2NkeC1idXR0b24+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0PC9jZHgtZGlhbG9nPlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwibGVzc1wiPlxuLnNob3J0LXVybC1jb3B5LWxpc3Qge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDAuNzVyZW07XG59XG5cbi5zaG9ydC11cmwtY29weS1pdGVtIHtcblx0ZGlzcGxheTogZ3JpZDtcblx0Z2FwOiAwLjVyZW07XG59XG5cbi5zaG9ydC11cmwtY29weS10ZXh0IHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xuXHRib3JkZXI6IDFweCBzb2xpZCAjZWFlY2YwO1xuXHRib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuXHRiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuXHRjb2xvcjogIzIwMjEyMjtcblx0Zm9udC1zaXplOiAwLjg3NXJlbTtcblx0d29yZC1icmVhazogYnJlYWstYWxsO1xufVxuPC9zdHlsZT5cbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0Q2xvc2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ2xvc2UnLFxuXHRcdFx0amE6ICfplonjgZjjgosnLFxuXHRcdFx0J3poLWhhbnMnOiAn5YWz6ZetJyxcblx0XHRcdCd6aC1oYW50JzogJ+mXnOmWiScsXG5cdFx0fSksXG5cdFx0J05ldHdvcmsgZXJyb3InOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ05ldHdvcmsgZXJyb3InLFxuXHRcdFx0amE6ICfjg43jg4Pjg4jjg6/jg7zjgq/jgqjjg6njg7wnLFxuXHRcdFx0J3poLWhhbnMnOiAn572R57uc5byC5bi4Jyxcblx0XHRcdCd6aC1oYW50JzogJ+e2sui3r+eVsOW4uCcsXG5cdFx0fSksXG5cdFx0J1BhZ2UgVVJMJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQZXJtYW5lbnQgVVJMJyxcblx0XHRcdCd6aC1oYW5zJzogJ+mhtemdoumTvuaOpScsXG5cdFx0XHQnemgtaGFudCc6ICfpoIHpnaLntrLlnYAnLFxuXHRcdH0pLFxuXHRcdCdQZXJtYW5lbnQgVVJMJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQZXJtYW5lbnQgVVJMJyxcblx0XHRcdCd6aC1oYW5zJzogJ+awuOS5hemTvuaOpScsXG5cdFx0XHQnemgtaGFudCc6ICfmsLjkuYXntrLlnYAnLFxuXHRcdH0pLFxuXHRcdCdTaGFyZSBVUkwgZm9yIHRoZSBwYWdlJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTaGFyZSBVUkwgZm9yIHRoZSBwYWdlJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WIhuS6q+acrOmhtemTvuaOpScsXG5cdFx0XHQnemgtaGFudCc6ICfliIbkuqvmnKzpoIHntrLlnYAnLFxuXHRcdH0pLFxuXHRcdCdTaG9ydCBVUkwnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1Nob3J0IFVSTCcsXG5cdFx0XHQnemgtaGFucyc6ICfnn63pk77mjqUnLFxuXHRcdFx0J3poLWhhbnQnOiAn55+t57ay5Z2AJyxcblx0XHR9KSxcblx0XHQnU2hvdyBVUkwnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1Nob3cgVVJMJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aYvuekuuivpemhtemTvuaOpScsXG5cdFx0XHQnemgtaGFudCc6ICfpoa/npLroqbLpoIHntrLlnYAnLFxuXHRcdH0pLFxuXHRcdENvcHk6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ29weScsXG5cdFx0XHQnemgtaGFucyc6ICflpI3liLYnLFxuXHRcdFx0J3poLWhhbnQnOiAn5b6p6KO9Jyxcblx0XHR9KSxcblx0XHQnVVJMIGNvcGllZCB0byBjbGlwYm9hcmQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoZSBVUkwgaGFzIGJlZW4gY29waWVkIHRvIGNsaXBib2FyZDogJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3suWkjeWItuacrOmhtemTvuaOpe+8micsXG5cdFx0XHQnemgtaGFudCc6ICflt7Llvqnoo73mnKzpoIHntrLlnYDvvJonLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQgeyByZW5kZXJMaXN0IGFzIF9yZW5kZXJMaXN0LCBGcmFnbWVudCBhcyBfRnJhZ21lbnQsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jaywgdG9EaXNwbGF5U3RyaW5nIGFzIF90b0Rpc3BsYXlTdHJpbmcsIGNyZWF0ZUVsZW1lbnRWTm9kZSBhcyBfY3JlYXRlRWxlbWVudFZOb2RlLCBjcmVhdGVUZXh0Vk5vZGUgYXMgX2NyZWF0ZVRleHRWTm9kZSwgd2l0aEN0eCBhcyBfd2l0aEN0eCwgY3JlYXRlVk5vZGUgYXMgX2NyZWF0ZVZOb2RlLCBjcmVhdGVCbG9jayBhcyBfY3JlYXRlQmxvY2sgfSBmcm9tIFwidnVlXCJcblxuY29uc3QgX2hvaXN0ZWRfMSA9IHsgY2xhc3M6IFwic2hvcnQtdXJsLWNvcHktbGlzdFwiIH1cbmNvbnN0IF9ob2lzdGVkXzIgPSB7IGNsYXNzOiBcInNob3J0LXVybC1jb3B5LXRleHRcIiB9XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soJHNldHVwW1wiQ2R4RGlhbG9nXCJdLCB7XG4gICAgb3BlbjogJHNldHVwLmlzT3BlbixcbiAgICBcIm9uVXBkYXRlOm9wZW5cIjogW1xuICAgICAgX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSAkZXZlbnQgPT4gKCgkc2V0dXAuaXNPcGVuKSA9ICRldmVudCkpLFxuICAgICAgJHNldHVwLmhhbmRsZU9wZW5DaGFuZ2VcbiAgICBdLFxuICAgIHRpdGxlOiAkc2V0dXAuZ2V0TWVzc2FnZSgnU2hhcmUgVVJMIGZvciB0aGUgcGFnZScpLFxuICAgIFwiZGVmYXVsdC1hY3Rpb25cIjoge2xhYmVsOiAkc2V0dXAuZ2V0TWVzc2FnZSgnQ2xvc2UnKX0sXG4gICAgXCJ1c2UtY2xvc2UtYnV0dG9uXCI6IHRydWUsXG4gICAgb25EZWZhdWx0OiAkc2V0dXAuY2xvc2VcbiAgfSwge1xuICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfMSwgW1xuICAgICAgICAoX29wZW5CbG9jayh0cnVlKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhfRnJhZ21lbnQsIG51bGwsIF9yZW5kZXJMaXN0KCRwcm9wcy5pdGVtcywgKGl0ZW0pID0+IHtcbiAgICAgICAgICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCB7XG4gICAgICAgICAgICBrZXk6IGl0ZW0udGV4dCxcbiAgICAgICAgICAgIGNsYXNzOiBcInNob3J0LXVybC1jb3B5LWl0ZW1cIlxuICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJzcGFuXCIsIG51bGwsIF90b0Rpc3BsYXlTdHJpbmcoaXRlbS5sYWJlbCksIDEgLyogVEVYVCAqLyksXG4gICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiY29kZVwiLCBfaG9pc3RlZF8yLCBfdG9EaXNwbGF5U3RyaW5nKGl0ZW0udGV4dCksIDEgLyogVEVYVCAqLyksXG4gICAgICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiQ2R4QnV0dG9uXCJdLCB7XG4gICAgICAgICAgICAgIHdlaWdodDogXCJwcmltYXJ5XCIsXG4gICAgICAgICAgICAgIG9uQ2xpY2s6ICRldmVudCA9PiAoJHNldHVwLmNvcHlUZXh0KGl0ZW0udGV4dCkpXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAgICAgICBfY3JlYXRlVGV4dFZOb2RlKF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLmdldE1lc3NhZ2UoJ0NvcHknKSksIDEgLyogVEVYVCAqLylcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgICAgICAgICB9LCA4IC8qIFBST1BTICovLCBbXCJvbkNsaWNrXCJdKVxuICAgICAgICAgIF0pKVxuICAgICAgICB9KSwgMTI4IC8qIEtFWUVEX0ZSQUdNRU5UICovKSlcbiAgICAgIF0pXG4gICAgXSksXG4gICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgfSwgOCAvKiBQUk9QUyAqLywgW1wib3BlblwiLCBcInRpdGxlXCIsIFwiZGVmYXVsdC1hY3Rpb25cIl0pKVxufSIsICJpbXBvcnQgc2NyaXB0IGZyb20gXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFNob3J0VVJMXFxcXEFwcC52dWU/dHlwZT1zY3JpcHRcIjtpbXBvcnQgXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFNob3J0VVJMXFxcXEFwcC52dWU/dHlwZT1zdHlsZSZpbmRleD0wXCI7aW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcU2hvcnRVUkxcXFxcQXBwLnZ1ZT90eXBlPXRlbXBsYXRlXCI7IHNjcmlwdC5yZW5kZXIgPSByZW5kZXI7c2NyaXB0Ll9fZmlsZSA9IFwic3JjXFxcXFNob3J0VVJMXFxcXEFwcC52dWVcIjtzY3JpcHQuX19zY29wZUlkID0gXCJkYXRhLXYtYzRhMjE1M2FcIjtleHBvcnQgZGVmYXVsdCBzY3JpcHQ7IiwgImltcG9ydCB7dHlwZSBBcHAgYXMgVnVlQXBwLCBjcmVhdGVBcHB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgQXBwIGZyb20gJy4uL0FwcC52dWUnO1xuaW1wb3J0IHthZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXJ9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge2dldFNob3J0RG9tYWluc30gZnJvbSAnLi91dGlsL2dldFNob3J0RG9tYWlucyc7XG5cbmNvbnN0IHtza2luLCB3Z1VzZXJOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcbmNvbnN0IGRvbWFpbnMgPSBnZXRTaG9ydERvbWFpbnMoKTtcblxubGV0IHBvcnRsZXRMaW5rRXZlbnRMaXN0ZW5lcjogUmV0dXJuVHlwZTx0eXBlb2YgYWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyPiA9IHtcblx0cmVtb3ZlOiAoKTogdm9pZCA9PiB7fSxcbn07XG5cbmNvbnN0IG9wZW5EaWFsb2cgPSAoaXRlbXM6IHtsYWJlbDogc3RyaW5nOyB0ZXh0OiBzdHJpbmd9W10pOiB2b2lkID0+IHtcblx0Y29uc3Qgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRkb2N1bWVudC5ib2R5LmFwcGVuZChyb290KTtcblxuXHRjb25zdCBhcHA6IFZ1ZUFwcDxFbGVtZW50PiB8IG51bGwgPSBjcmVhdGVBcHAoQXBwLCB7XG5cdFx0b3BlbjogdHJ1ZSxcblx0XHRpdGVtcyxcblx0XHRvbkNsb3NlOiAoKTogdm9pZCA9PiB7XG5cdFx0XHRhcHA/LnVubW91bnQoKTtcblx0XHRcdHJvb3QucmVtb3ZlKCk7XG5cdFx0fSxcblx0fSk7XG5cdGFwcC5tb3VudChyb290KTtcbn07XG5cbmNvbnN0IGFkZFBvcnRsZXRMaW5rID0gKGxpbms6IHN0cmluZywgcGVybWFMaW5rOiBzdHJpbmcpOiB2b2lkID0+IHtcblx0Y29uc3QgcG9ydGxldElkOiAncC1jYWN0aW9ucycgfCAncC10YicgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcC1jYWN0aW9ucycpID8gJ3AtY2FjdGlvbnMnIDogJ3AtdGInO1xuXHRsZXQgcG9ydGxldExpbms6IEhUTUxMSUVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Qtc2hvcnRsaW5rJyk7XG5cdHBvcnRsZXRMaW5rIHx8PSBtdy51dGlsLmFkZFBvcnRsZXRMaW5rKFxuXHRcdHBvcnRsZXRJZCxcblx0XHQnIycsXG5cdFx0Z2V0TWVzc2FnZSgnU2hhcmUgVVJMIGZvciB0aGUgcGFnZScpLFxuXHRcdCd0LXNob3J0bGluaycsXG5cdFx0Z2V0TWVzc2FnZSgnU2hvdyBVUkwnKVxuXHQpO1xuXG5cdGlmIChwb3J0bGV0TGluaykge1xuXHRcdGNvbnN0IHBvcnRsZXRMaW5rQ2xpY2tMaXN0ZW5lciA9IChldmVudDogTW91c2VFdmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGNvbnN0IGl0ZW1zID0gW1xuXHRcdFx0XHR7bGFiZWw6IGdldE1lc3NhZ2UoJ1BhZ2UgVVJMJyksIHRleHQ6IGxvY2F0aW9uLmhyZWZ9LFxuXHRcdFx0XHR7bGFiZWw6IGdldE1lc3NhZ2UoJ1Blcm1hbmVudCBVUkwnKSwgdGV4dDogYGh0dHBzOi8vJHtsb2NhdGlvbi5ob3N0fSR7cGVybWFMaW5rfWB9LFxuXHRcdFx0XTtcblx0XHRcdGlmICh3Z1VzZXJOYW1lKSB7XG5cdFx0XHRcdGZvciAoY29uc3QgW2ksIGRvbWFpbl0gb2YgZG9tYWlucy5lbnRyaWVzKCkpIHtcblx0XHRcdFx0XHRpdGVtcy5wdXNoKHtsYWJlbDogYCR7Z2V0TWVzc2FnZSgnU2hvcnQgVVJMJyl9JHtpICsgMX1gLCB0ZXh0OiBgaHR0cHM6Ly8ke2RvbWFpbn0ke2xpbmt9YH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRvcGVuRGlhbG9nKGl0ZW1zKTtcblx0XHR9O1xuXG5cdFx0cG9ydGxldExpbmtFdmVudExpc3RlbmVyLnJlbW92ZSgpO1xuXHRcdHBvcnRsZXRMaW5rRXZlbnRMaXN0ZW5lciA9IGFkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcih7XG5cdFx0XHR0YXJnZXQ6IChwb3J0bGV0TGluay5maXJzdEVsZW1lbnRDaGlsZCA/PyBwb3J0bGV0TGluaykgYXMgSFRNTEVsZW1lbnQsXG5cdFx0XHR0eXBlOiAnY2xpY2snLFxuXHRcdFx0bGlzdGVuZXI6IHBvcnRsZXRMaW5rQ2xpY2tMaXN0ZW5lcixcblx0XHR9KTtcblxuXHRcdGlmIChza2luID09PSAnY2l0aXplbicgJiYgISQocG9ydGxldExpbmspLmZpbmQoJyNtdy11aS1pY29uLXdpa2ltZWRpYS1zaG9ydGxpbmsnKS5sZW5ndGgpIHtcblx0XHRcdCQocG9ydGxldExpbmspXG5cdFx0XHRcdC5maW5kKCdhJylcblx0XHRcdFx0LnByZXBlbmQoXG5cdFx0XHRcdFx0JzxzcGFuIGlkPVwibXctdWktaWNvbi13aWtpbWVkaWEtc2hvcnRsaW5rXCIgY2xhc3M9XCJjaXRpemVuLXVpLWljb24gbXctdWktaWNvbi1saW5rIG13LXVpLWljb24td2lraW1lZGlhLWxpbmtcIj48L3NwYW4+J1xuXHRcdFx0XHQpO1xuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IHthZGRQb3J0bGV0TGlua307XG4iLCAiaW1wb3J0IHthZGRIZWFkZXJMaW5rfSBmcm9tICcuL2FkZEhlYWRlckxpbmsnO1xuaW1wb3J0IHthZGRQb3J0bGV0TGlua30gZnJvbSAnLi9hZGRQb3J0bGV0TGluayc7XG5cbmNvbnN0IGJ1aWxkTGluayA9IChvbGRJZDogbnVtYmVyIHwgbnVsbCwgZGlmZklkOiBudW1iZXIpOiB2b2lkID0+IHtcblx0bGV0IGxpbms6IHN0cmluZyA9ICcvZCc7XG5cdGxldCBwZXJtYUxpbms6IHN0cmluZyA9ICcvd2lraS9TcGVjaWFsOkRpZmYnO1xuXHRpZiAob2xkSWQpIHtcblx0XHRsaW5rICs9IGAvJHtvbGRJZH1gO1xuXHRcdHBlcm1hTGluayArPSBgLyR7b2xkSWR9YDtcblx0fVxuXHRsaW5rICs9IGAvJHtkaWZmSWR9YDtcblx0cGVybWFMaW5rICs9IGAvJHtkaWZmSWR9YDtcblxuXHRhZGRIZWFkZXJMaW5rKGxpbmssIHBlcm1hTGluayk7XG5cdGFkZFBvcnRsZXRMaW5rKGxpbmssIHBlcm1hTGluayk7XG59O1xuXG5leHBvcnQge2J1aWxkTGlua307XG4iLCAie1xuXHRcInZlcnNpb25cIjogXCIyLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgU2hvcnRVUkwvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi4vYXBpJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxudHlwZSBDb21wYXJlUmVzcG9uc2UgPSB7XG5cdGNvbXBhcmU/OiB7XG5cdFx0ZnJvbXJldmlkOiBudW1iZXI7XG5cdH07XG59O1xuXG5jb25zdCBwYXJhbWV0ZXJzOiBBcGlDb21wYXJlUGFnZXNQYXJhbXMgPSB7XG5cdGFjdGlvbjogJ2NvbXBhcmUnLFxuXHRmb3JtYXQ6ICdqc29uJyxcblx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRwcm9wOiAnaWRzJyxcblx0dG9yZWxhdGl2ZTogJ3ByZXYnLFxuXHRzbWF4YWdlOiA2MDAsXG5cdG1heGFnZTogNjAwLFxufTtcblxuY29uc3QgcXVlcnlBcGkgPSBhc3luYyAoZGlmZklkOiBudW1iZXIpOiBQcm9taXNlPENvbXBhcmVSZXNwb25zZT4gPT4ge1xuXHR0cnkge1xuXHRcdHJldHVybiBhd2FpdCBhcGkuZ2V0KHtcblx0XHRcdC4uLnBhcmFtZXRlcnMsXG5cdFx0XHRmcm9tcmV2OiBkaWZmSWQsXG5cdFx0fSBhcyB0eXBlb2YgcGFyYW1ldGVycyk7XG5cdH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG5cdFx0Y29uc29sZS5lcnJvcignW1Nob3J0VVJMXSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0XHR0b2FzdGlmeShcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnTmV0d29yayBlcnJvcicpLFxuXHRcdFx0XHRjbG9zZTogdHJ1ZSxcblx0XHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdFx0fSxcblx0XHRcdCdlcnJvcidcblx0XHQpO1xuXG5cdFx0cmV0dXJuIHt9O1xuXHR9XG59O1xuXG5leHBvcnQge3F1ZXJ5QXBpfTtcbiIsICJpbXBvcnQge2J1aWxkTGlua30gZnJvbSAnLi9idWlsZExpbmsnO1xuaW1wb3J0IHtxdWVyeUFwaX0gZnJvbSAnLi91dGlsL3F1ZXJ5QXBpJztcblxuY29uc3QgY29tcGFyZVdpdGhSZW1vdGVEaWZmSWQgPSBhc3luYyAoZGlmZklkOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3QgcmVzcG9uc2U6IEF3YWl0ZWQ8UmV0dXJuVHlwZTx0eXBlb2YgcXVlcnlBcGk+PiA9IGF3YWl0IHF1ZXJ5QXBpKGRpZmZJZCk7XG5cdGlmIChkaWZmSWQgPT09IG13LmNvbmZpZy5nZXQoJ3dnRGlmZk5ld0lkJykgJiYgcmVzcG9uc2VbJ2NvbXBhcmUnXT8uZnJvbXJldmlkID09PSBtdy5jb25maWcuZ2V0KCd3Z0RpZmZPbGRJZCcpKSB7XG5cdFx0YnVpbGRMaW5rKDAsIGRpZmZJZCk7XG5cdH1cbn07XG5cbmV4cG9ydCB7Y29tcGFyZVdpdGhSZW1vdGVEaWZmSWR9O1xuIiwgImltcG9ydCB7YWRkSGVhZGVyTGlua30gZnJvbSAnLi9hZGRIZWFkZXJMaW5rJztcbmltcG9ydCB7YWRkUG9ydGxldExpbmt9IGZyb20gJy4vYWRkUG9ydGxldExpbmsnO1xuaW1wb3J0IHtidWlsZExpbmt9IGZyb20gJy4vYnVpbGRMaW5rJztcbmltcG9ydCB7Y29tcGFyZVdpdGhSZW1vdGVEaWZmSWR9IGZyb20gJy4vY29tcGFyZVdpdGhSZW1vdGVEaWZmSWQnO1xuXG5jb25zdCBwcm9jZXNzSWQgPSAoXG5cdGlzUmV2aXNpb25QYWdlOiBib29sZWFuLFxuXHR7XG5cdFx0YXJ0aWNsZUlkLFxuXHRcdGRpZmZJZCxcblx0XHRvbGRJZCxcblx0XHRyZXZpc2lvbklkLFxuXHR9OiB7XG5cdFx0YXJ0aWNsZUlkOiBudW1iZXI7XG5cdFx0ZGlmZklkOiBudW1iZXIgfCBudWxsO1xuXHRcdG9sZElkOiBudW1iZXIgfCBudWxsO1xuXHRcdHJldmlzaW9uSWQ6IG51bWJlciB8IG51bGw7XG5cdH1cbik6IHZvaWQgPT4ge1xuXHRpZiAoZGlmZklkKSB7XG5cdFx0YnVpbGRMaW5rKG9sZElkLCBkaWZmSWQpO1xuXHRcdGlmIChvbGRJZCkge1xuXHRcdFx0dm9pZCBjb21wYXJlV2l0aFJlbW90ZURpZmZJZChkaWZmSWQpO1xuXHRcdH1cblx0fSBlbHNlIGlmIChyZXZpc2lvbklkICYmIGlzUmV2aXNpb25QYWdlKSB7XG5cdFx0YWRkSGVhZGVyTGluayhgL3AvJHtyZXZpc2lvbklkfWAsIGAvd2lraS9TcGVjaWFsOlBlcm1hbGluay8ke3JldmlzaW9uSWR9YCk7XG5cdFx0YWRkUG9ydGxldExpbmsoYC9wLyR7cmV2aXNpb25JZH1gLCBgL3dpa2kvU3BlY2lhbDpQZXJtYWxpbmsvJHtyZXZpc2lvbklkfWApO1xuXHR9IGVsc2UgaWYgKGFydGljbGVJZCkge1xuXHRcdGFkZEhlYWRlckxpbmsoYC9jLyR7YXJ0aWNsZUlkfWAsIGAvaW5kZXgucGhwP2N1cmlkPSR7YXJ0aWNsZUlkfWApO1xuXHRcdGFkZFBvcnRsZXRMaW5rKGAvYy8ke2FydGljbGVJZH1gLCBgL2luZGV4LnBocD9jdXJpZD0ke2FydGljbGVJZH1gKTtcblx0fVxufTtcblxuZXhwb3J0IHtwcm9jZXNzSWR9O1xuIiwgImltcG9ydCB7Y2hlY2tSZXZpc2lvblBhZ2V9IGZyb20gJy4vbW9kdWxlcy91dGlsL2NoZWNrUmV2aXNpb25QYWdlJztcbmltcG9ydCB7Z2V0U2hvcnREb21haW5zfSBmcm9tICcuL21vZHVsZXMvdXRpbC9nZXRTaG9ydERvbWFpbnMnO1xuaW1wb3J0IHtwcm9jZXNzSWR9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzSWQnO1xuXG4oZnVuY3Rpb24gc2hvcnRVUkwoKSB7XG5cdGNvbnN0IHt3Z0FjdGlvbiwgd2dBcnRpY2xlSWQsIHdnTmFtZXNwYWNlTnVtYmVyfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRjb25zdCBkb21haW5zID0gZ2V0U2hvcnREb21haW5zKCk7XG5cblx0aWYgKCFkb21haW5zLmxlbmd0aCB8fCB3Z05hbWVzcGFjZU51bWJlciA8IDApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAod2dBY3Rpb24gPT09ICd2aWV3JyAmJiB3Z0FydGljbGVJZCkge1xuXHRcdG13Lmhvb2soJ3dpa2lwYWdlLmNvbnRlbnQnKS5hZGQoKCRjb250ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRpZiAoJGNvbnRlbnQuYXR0cignaWQnKSAhPT0gJ213LWNvbnRlbnQtdGV4dCcpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBpc1JldmlzaW9uUGFnZTogYm9vbGVhbiA9IGNoZWNrUmV2aXNpb25QYWdlKCRjb250ZW50KTtcblxuXHRcdFx0cHJvY2Vzc0lkKGlzUmV2aXNpb25QYWdlLCB7XG5cdFx0XHRcdGFydGljbGVJZDogbXcuY29uZmlnLmdldCgnd2dBcnRpY2xlSWQnKSxcblx0XHRcdFx0ZGlmZklkOiBtdy5jb25maWcuZ2V0KCd3Z0RpZmZOZXdJZCcpLFxuXHRcdFx0XHRvbGRJZDogbXcuY29uZmlnLmdldCgnd2dEaWZmT2xkSWQnKSxcblx0XHRcdFx0cmV2aXNpb25JZDogbXcuY29uZmlnLmdldCgnd2dSZXZpc2lvbklkJyksXG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsb0JBQXFCQyxjQUE4QjtBQUN4RCxVQUNFQSxTQUFTQyxLQUFLLDhCQUE4QixFQUFFQyxVQUM5Q0YsU0FBU0MsS0FBSyw0Q0FBNEMsRUFBRUMsVUFBVTtBQUV6RTs7QUNMQSxJQUFNQyxrQkFBa0JBLE1BQWdCO0FBQ3ZDLFFBQU07SUFBQ0M7RUFBUSxJQUFJQyxHQUFHQyxPQUFPQyxJQUFJO0FBQ2pDLE1BQUlDLFdBQW9CLENBQUE7QUFFeEIsVUFBUUosVUFBQTtJQUNQLEtBQUs7QUFDSkksaUJBQVUsQ0FBQyxXQUFXLFNBQVM7QUFDL0I7SUFDRCxLQUFLO0FBQ0pBLGlCQUFVLENBQUMsYUFBYSxXQUFXO0FBQ25DO0lBQ0QsS0FBSztBQUNKQSxpQkFBVSxDQUFDLGVBQWUsYUFBYTtBQUN2QztFQUNGO0FBRUEsU0FBT0E7QUFDUjs7QUNqQkEsSUFBQUMsY0FBNENDLFFBQUEsS0FBQTs7QUNDNUMsSUFBQUMsZUFBbUNELFFBQUEsa0JBQUE7QUFDbkMsSUFBQUUsY0FBeUJGLFFBQUEsS0FBQTs7QUNGekIsSUFBQUcsb0JBQXVCSCxRQUFBLGlCQUFBO0FBRXZCLElBQU1JLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLFFBQUEsR0FBT0Ysa0JB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O1FBQ25DcUosT0FBT3ZKLEdBQUdDLE9BQU9DLElBQUksYUFBYTtRQUNsQ3VMLFlBQVl6TCxHQUFHQyxPQUFPQyxJQUFJLGNBQWM7TUFDekMsQ0FBQztJQUNGLENBQUM7RUFDRjtBQUNELEdBQUc7IiwKICAibmFtZXMiOiBbImNoZWNrUmV2aXNpb25QYWdlIiwgIiRjb250ZW50IiwgImZpbmQiLCAibGVuZ3RoIiwgImdldFNob3J0RG9tYWlucyIsICJ3Z1dpa2lJRCIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImRvbWFpbnMzIiwgImltcG9ydF92dWU0IiwgInJlcXVpcmUiLCAiaW1wb3J0X2NvZGV4IiwgImltcG9ydF92dWUyIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJDbG9zZSIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJDb3B5IiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJwcm9wcyIsICJfX3Byb3BzIiwgImVtaXQiLCAiX19lbWl0IiwgImlzT3BlbiIsICJyZWYiLCAib3BlbiIsICJ3YXRjaCIsICJ2YWx1ZSIsICJpbW1lZGlhdGUiLCAiY2xvc2UiLCAib25DbG9zZSIsICJoYW5kbGVPcGVuQ2hhbmdlIiwgImNvcHlUZXh0IiwgInRleHQiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAibmF2aWdhdG9yIiwgImNsaXBib2FyZCIsICJ3aW5kb3ciLCAiaXNTZWN1cmVDb250ZXh0IiwgIndyaXRlVGV4dCIsICJoZWxwZXIiLCAiZG9jdW1lbnQiLCAiY3JlYXRlRWxlbWVudCIsICJzZXRBdHRyaWJ1dGUiLCAic3R5bGUiLCAicG9zaXRpb24iLCAidG9wIiwgImxlZnQiLCAiYm9keSIsICJhcHBlbmQiLCAic2VsZWN0IiwgImV4ZWNDb21tYW5kIiwgInJlbW92ZSIsICJ0aGVuIiwgIm5vdGlmeSIsICJ0eXBlIiwgInRhZyIsICJpbXBvcnRfdnVlMyIsICJfaG9pc3RlZF8xIiwgImNsYXNzIiwgIl9ob2lzdGVkXzIiLCAicmVuZGVyIiwgIl9jdHgiLCAiX2NhY2hlIiwgIiRwcm9wcyIsICIkc2V0dXAiLCAiJGRhdGEiLCAiJG9wdGlvbnMiLCAib3BlbkJsb2NrIiwgImNyZWF0ZUJsb2NrIiwgIiRldmVudCIsICJ0aXRsZSIsICJsYWJlbCIsICJvbkRlZmF1bHQiLCAiZGVmYXVsdCIsICJ3aXRoQ3R4IiwgImNyZWF0ZUVsZW1lbnRWTm9kZSIsICJjcmVhdGVFbGVtZW50QmxvY2siLCAiRnJhZ21lbnQiLCAicmVuZGVyTGlzdCIsICJpdGVtcyIsICJpdGVtIiwgInRvRGlzcGxheVN0cmluZyIsICJjcmVhdGVWTm9kZSIsICJ3ZWlnaHQiLCAib25DbGljayIsICJjcmVhdGVUZXh0Vk5vZGUiLCAiXyIsICJBcHBfZGVmYXVsdCIsICJfX2ZpbGUiLCAiX19zY29wZUlkIiwgIkFwcF9kZWZhdWx0MiIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAid2dVc2VyTmFtZSIsICJkb21haW5zIiwgImhlYWRlckxpbmtFdmVudExpc3RlbmVyIiwgIm9wZW5EaWFsb2ciLCAicm9vdCIsICJhcHAiLCAiY3JlYXRlQXBwIiwgInVubW91bnQiLCAibW91bnQiLCAiYWRkSGVhZGVyTGluayIsICJsaW5rIiwgInBlcm1hTGluayIsICJoZWFkZXJMaW5rIiwgInF1ZXJ5U2VsZWN0b3IiLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0IiwgImhyZWYiLCAiaWNvbiIsICJjbGFzc05hbWUiLCAiaGVhZGVyRWxlbWVudCIsICJpZCIsICJwcmVwZW5kIiwgImhlYWRlckxpbmtDbGlja0xpc3RlbmVyIiwgImV2ZW50IiwgInByZXZlbnREZWZhdWx0IiwgImNvbmNhdCIsICJsb2NhdGlvbiIsICJob3N0IiwgImFkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3ZlciIsICJ0YXJnZXQiLCAibGlzdGVuZXIiLCAiaW1wb3J0X3Z1ZTUiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgInNraW4iLCAid2dVc2VyTmFtZTIiLCAiZG9tYWluczIiLCAicG9ydGxldExpbmtFdmVudExpc3RlbmVyIiwgIm9wZW5EaWFsb2cyIiwgImFkZFBvcnRsZXRMaW5rIiwgInBvcnRsZXRJZCIsICJwb3J0bGV0TGluayIsICJ1dGlsIiwgIl9wb3J0bGV0TGluayRmaXJzdEVsZSIsICJwb3J0bGV0TGlua0NsaWNrTGlzdGVuZXIiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgImVudHJpZXMiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiaSIsICJkb21haW4iLCAicHVzaCIsICJlcnIiLCAiZSIsICJmIiwgImZpcnN0RWxlbWVudENoaWxkIiwgIiQiLCAiYnVpbGRMaW5rIiwgIm9sZElkIiwgImRpZmZJZCIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJhcGkiLCAiaW5pdE13QXBpIiwgImltcG9ydF9leHRfZ2FkZ2V0NSIsICJwYXJhbWV0ZXJzIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgInRvcmVsYXRpdmUiLCAic21heGFnZSIsICJtYXhhZ2UiLCAicXVlcnlBcGkiLCAiX3JlZjIiLCAiZnJvbXJldiIsICJlcnJvciIsICJjb25zb2xlIiwgInRvYXN0aWZ5IiwgImR1cmF0aW9uIiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJjb21wYXJlV2l0aFJlbW90ZURpZmZJZCIsICJfcmVmMyIsICJfcmVzcG9uc2UkY29tcGFyZSIsICJyZXNwb25zZSIsICJmcm9tcmV2aWQiLCAiX3gyIiwgInByb2Nlc3NJZCIsICJpc1JldmlzaW9uUGFnZSIsICJhcnRpY2xlSWQiLCAicmV2aXNpb25JZCIsICJzaG9ydFVSTCIsICJ3Z0FjdGlvbiIsICJ3Z0FydGljbGVJZCIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJob29rIiwgImFkZCIsICJhdHRyIl0KfQo=

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
var copyText = /* @__PURE__ */ (function() {
  var _ref = _asyncToGenerator(function* (text) {
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
    const copy = /* @__PURE__ */ (function() {
      var _ref2 = _asyncToGenerator(function* () {
        if (navigator.clipboard && window.isSecureContext) {
          try {
            yield navigator.clipboard.writeText(text);
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
      });
      return function copy2() {
        return _ref2.apply(this, arguments);
      };
    })();
    try {
      yield copy();
      void mw.notify(getMessage("URL copied to clipboard") + text, {
        type: "success",
        tag: "DiffLinks"
      });
    } catch (error) {
      console.error("[ShortURL] Failed to copy text:", error);
      void mw.notify(getMessage("Copy failed"), {
        type: "error",
        tag: "DiffLinks"
      });
    }
  });
  return function copyText2(_x) {
    return _ref.apply(this, arguments);
  };
})();
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
  var _ref3 = _asyncToGenerator(function* (diffId) {
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
  return function queryApi2(_x2) {
    return _ref3.apply(this, arguments);
  };
})();
//! src/ShortURL/modules/compareWithRemoteDiffId.ts
var compareWithRemoteDiffId = /* @__PURE__ */ (function() {
  var _ref4 = _asyncToGenerator(function* (diffId) {
    var _response$compare;
    const response = yield queryApi(diffId);
    if (diffId === mw.config.get("wgDiffNewId") && ((_response$compare = response["compare"]) === null || _response$compare === void 0 ? void 0 : _response$compare.fromrevid) === mw.config.get("wgDiffOldId")) {
      buildLink(0, diffId);
    }
  });
  return function compareWithRemoteDiffId2(_x3) {
    return _ref4.apply(this, arguments);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Nob3J0VVJML21vZHVsZXMvdXRpbC9jaGVja1JldmlzaW9uUGFnZS50cyIsICJzcmMvU2hvcnRVUkwvbW9kdWxlcy91dGlsL2dldFNob3J0RG9tYWlucy50cyIsICJzcmMvU2hvcnRVUkwvbW9kdWxlcy9hZGRIZWFkZXJMaW5rLnRzIiwgInNyYy9TaG9ydFVSTC9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1Nob3J0VVJML21vZHVsZXMvY29weVRleHQudHMiLCAic3JjL1Nob3J0VVJML21vZHVsZXMvYWRkUG9ydGxldExpbmsudHMiLCAiZGlzdC9TaG9ydFVSTC9zcmMvU2hvcnRVUkwvbW9kdWxlcy9Qb3J0bGV0TGluay52dWUiLCAic2ZjLXRlbXBsYXRlOkQ6XFxHaXRSZXBvc2l0b3J5XFxRaXV3ZW5HYWRnZXRzXFxzcmNcXFNob3J0VVJMXFxtb2R1bGVzXFxQb3J0bGV0TGluay52dWU/dHlwZT10ZW1wbGF0ZSIsICJzcmMvU2hvcnRVUkwvbW9kdWxlcy9Qb3J0bGV0TGluay52dWUiLCAic3JjL1Nob3J0VVJML21vZHVsZXMvYnVpbGRMaW5rLnRzIiwgInNyYy9TaG9ydFVSTC9vcHRpb25zLmpzb24iLCAic3JjL1Nob3J0VVJML21vZHVsZXMvYXBpLnRzIiwgInNyYy9TaG9ydFVSTC9tb2R1bGVzL3V0aWwvcXVlcnlBcGkudHMiLCAic3JjL1Nob3J0VVJML21vZHVsZXMvY29tcGFyZVdpdGhSZW1vdGVEaWZmSWQudHMiLCAic3JjL1Nob3J0VVJML21vZHVsZXMvcHJvY2Vzc0lkLnRzIiwgInNyYy9TaG9ydFVSTC9TaG9ydFVSTC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgY2hlY2tSZXZpc2lvblBhZ2UgPSAoJGNvbnRlbnQ6IEpRdWVyeSk6IGJvb2xlYW4gPT4ge1xuXHRyZXR1cm4gKFxuXHRcdCgkY29udGVudC5maW5kKCcjY29udGVudFN1YiAjbXctcmV2aXNpb24tbmF2JykubGVuZ3RoIHx8XG5cdFx0XHQkY29udGVudC5maW5kKCdtYWluI2NvbnRlbnQ+LnByZS1jb250ZW50ICNtdy1yZXZpc2lvbi1uYXYnKS5sZW5ndGgpID4gMFxuXHQpO1xufTtcblxuZXhwb3J0IHtjaGVja1JldmlzaW9uUGFnZX07XG4iLCAiY29uc3QgZ2V0U2hvcnREb21haW5zID0gKCk6IHN0cmluZ1tdID0+IHtcblx0Y29uc3Qge3dnV2lraUlEfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0bGV0IGRvbWFpbnM6IHN0cmluZ1tdID0gW107XG5cblx0c3dpdGNoICh3Z1dpa2lJRCkge1xuXHRcdGNhc2UgJ3pocWl1d2VuYmFpa2UnOlxuXHRcdFx0ZG9tYWlucyA9IFsncXdiay5jYycsICdia3d6LmNuJ107XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICdsaWNlbmNld2lraSc6XG5cdFx0XHRkb21haW5zID0gWydsLnF3YmsuY2MnLCAnbC5ia3d6LmNuJ107XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICdtbmNxaXV3ZW5iYWlrZSc6XG5cdFx0XHRkb21haW5zID0gWydtbmMucXdiay5jYycsICdtbmMuYmt3ei5jbiddO1xuXHRcdFx0YnJlYWs7XG5cdH1cblxuXHRyZXR1cm4gZG9tYWlucztcbn07XG5cbmV4cG9ydCB7Z2V0U2hvcnREb21haW5zfTtcbiIsICJpbXBvcnQgJy4vYWRkSGVhZGVyTGluay5sZXNzJztcbmltcG9ydCB7YWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtjb3B5VGV4dH0gZnJvbSAnLi9jb3B5VGV4dCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge2dldFNob3J0RG9tYWluc30gZnJvbSAnLi91dGlsL2dldFNob3J0RG9tYWlucyc7XG5cbmNvbnN0IHt3Z1VzZXJOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcbmNvbnN0IGRvbWFpbnMgPSBnZXRTaG9ydERvbWFpbnMoKTtcblxubGV0IGhlYWRlckxpbmtFdmVudExpc3RlbmVyOiBSZXR1cm5UeXBlPHR5cGVvZiBhZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXI+ID0ge1xuXHRyZW1vdmU6ICgpOiB2b2lkID0+IHt9LFxufTtcblxuY29uc3QgYWRkSGVhZGVyTGluayA9IChsaW5rOiBzdHJpbmcsIHBlcm1hTGluazogc3RyaW5nKTogdm9pZCA9PiB7XG5cdGxldCBoZWFkZXJMaW5rOiBIVE1MQW5jaG9yRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXctaW5kaWNhdG9yLXNob3J0VVJMIGEnKTtcblx0aWYgKCFoZWFkZXJMaW5rKSB7XG5cdFx0aGVhZGVyTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblx0XHRoZWFkZXJMaW5rLmhyZWYgPSAnIyc7XG5cdFx0aGVhZGVyTGluay5zZXRBdHRyaWJ1dGUoXG5cdFx0XHQnYXJpYS1sYWJlbCcsXG5cdFx0XHR3Z1VzZXJOYW1lID8gZ2V0TWVzc2FnZSgnU2hvcnQgVVJMJykgOiBnZXRNZXNzYWdlKCdTaGFyZSBVUkwgZm9yIHRoZSBwYWdlJylcblx0XHQpO1xuXHRcdGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0aWNvbi5jbGFzc05hbWUgPSAnc2hvcnQtdXJsLWxpbmstaWNvbic7XG5cdFx0aGVhZGVyTGluay5hcHBlbmQoaWNvbik7XG5cdFx0Y29uc3QgaGVhZGVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdGhlYWRlckVsZW1lbnQuY2xhc3NOYW1lID0gJ213LWluZGljYXRvcic7XG5cdFx0aGVhZGVyRWxlbWVudC5pZCA9ICdtdy1pbmRpY2F0b3Itc2hvcnRVUkwnO1xuXHRcdGhlYWRlckVsZW1lbnQuYXBwZW5kKGhlYWRlckxpbmspO1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tdy1pbmRpY2F0b3JzJyk/LnByZXBlbmQoaGVhZGVyRWxlbWVudCk7XG5cdH1cblxuXHRjb25zdCBoZWFkZXJMaW5rQ2xpY2tMaXN0ZW5lciA9IChldmVudDogTW91c2VFdmVudCk6IHZvaWQgPT4ge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0Y29weVRleHQod2dVc2VyTmFtZSA/IGBodHRwczovLyR7ZG9tYWluc1swXX0ke2xpbmt9YCA6IGBodHRwczovLyR7bG9jYXRpb24uaG9zdH0ke3Blcm1hTGlua31gKTtcblx0fTtcblxuXHRoZWFkZXJMaW5rRXZlbnRMaXN0ZW5lci5yZW1vdmUoKTtcblx0aGVhZGVyTGlua0V2ZW50TGlzdGVuZXIgPSBhZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXIoe1xuXHRcdHRhcmdldDogaGVhZGVyTGluayxcblx0XHR0eXBlOiAnY2xpY2snLFxuXHRcdGxpc3RlbmVyOiBoZWFkZXJMaW5rQ2xpY2tMaXN0ZW5lcixcblx0fSk7XG59O1xuXG5leHBvcnQge2FkZEhlYWRlckxpbmt9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRDbG9zZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDbG9zZScsXG5cdFx0XHRqYTogJ+mWieOBmOOCiycsXG5cdFx0XHQnemgtaGFucyc6ICflhbPpl60nLFxuXHRcdFx0J3poLWhhbnQnOiAn6Zec6ZaJJyxcblx0XHR9KSxcblx0XHQnTmV0d29yayBlcnJvcic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTmV0d29yayBlcnJvcicsXG5cdFx0XHRqYTogJ+ODjeODg+ODiOODr+ODvOOCr+OCqOODqeODvCcsXG5cdFx0XHQnemgtaGFucyc6ICfnvZHnu5zlvILluLgnLFxuXHRcdFx0J3poLWhhbnQnOiAn57ay6Lev55Ww5bi4Jyxcblx0XHR9KSxcblx0XHQnUGFnZSBVUkwnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1Blcm1hbmVudCBVUkwnLFxuXHRcdFx0J3poLWhhbnMnOiAn6aG16Z2i6ZO+5o6lJyxcblx0XHRcdCd6aC1oYW50JzogJ+mggemdoue2suWdgCcsXG5cdFx0fSksXG5cdFx0J1Blcm1hbmVudCBVUkwnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1Blcm1hbmVudCBVUkwnLFxuXHRcdFx0J3poLWhhbnMnOiAn5rC45LmF6ZO+5o6lJyxcblx0XHRcdCd6aC1oYW50JzogJ+awuOS5hee2suWdgCcsXG5cdFx0fSksXG5cdFx0J1NoYXJlIFVSTCBmb3IgdGhlIHBhZ2UnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1NoYXJlIFVSTCBmb3IgdGhlIHBhZ2UnLFxuXHRcdFx0J3poLWhhbnMnOiAn5YiG5Lqr5pys6aG16ZO+5o6lJyxcblx0XHRcdCd6aC1oYW50JzogJ+WIhuS6q+acrOmggee2suWdgCcsXG5cdFx0fSksXG5cdFx0J1Nob3J0IFVSTCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU2hvcnQgVVJMJyxcblx0XHRcdCd6aC1oYW5zJzogJ+efremTvuaOpScsXG5cdFx0XHQnemgtaGFudCc6ICfnn63ntrLlnYAnLFxuXHRcdH0pLFxuXHRcdCdTaG93IFVSTCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU2hvdyBVUkwnLFxuXHRcdFx0J3poLWhhbnMnOiAn5pi+56S66K+l6aG16ZO+5o6lJyxcblx0XHRcdCd6aC1oYW50JzogJ+mhr+ekuuipsumggee2suWdgCcsXG5cdFx0fSksXG5cdFx0Q29weTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDb3B5Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+WkjeWIticsXG5cdFx0XHQnemgtaGFudCc6ICflvqnoo70nLFxuXHRcdH0pLFxuXHRcdCdVUkwgY29waWVkIHRvIGNsaXBib2FyZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhlIFVSTCBoYXMgYmVlbiBjb3BpZWQgdG8gY2xpcGJvYXJkOiAnLFxuXHRcdFx0J3poLWhhbnMnOiAn5bey5aSN5Yi25pys6aG16ZO+5o6l77yaJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3suW+qeijveacrOmggee2suWdgO+8micsXG5cdFx0fSksXG5cdFx0J0NvcHkgZmFpbGVkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdGYWlsZWQgdG8gY29weS4nLFxuXHRcdFx0amE6ICfjgrPjg5Tjg7zjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgIInLFxuXHRcdFx0J3poLWhhbnMnOiAn5aSN5Yi25aSx6LSlJyxcblx0XHRcdCd6aC1oYW50JzogJ+ikh+ijveWkseaVlycsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgY29weVRleHQgPSBhc3luYyAodGV4dDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGNvbnN0IGNvcHlXaXRoRXhlY0NvbW1hbmQgPSAoKTogdm9pZCA9PiB7XG5cdFx0Y29uc3QgaGVscGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcblx0XHRoZWxwZXIudmFsdWUgPSB0ZXh0O1xuXHRcdGhlbHBlci5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJ3RydWUnKTtcblx0XHRoZWxwZXIuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuXHRcdGhlbHBlci5zdHlsZS50b3AgPSAnLTk5OTlweCc7XG5cdFx0aGVscGVyLnN0eWxlLmxlZnQgPSAnLTk5OTlweCc7XG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmQoaGVscGVyKTtcblx0XHR0cnkge1xuXHRcdFx0aGVscGVyLnNlbGVjdCgpO1xuXHRcdFx0aWYgKCFkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpIGZhaWxlZCcpO1xuXHRcdFx0fVxuXHRcdH0gZmluYWxseSB7XG5cdFx0XHRoZWxwZXIucmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IGNvcHkgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdFx0aWYgKG5hdmlnYXRvci5jbGlwYm9hcmQgJiYgd2luZG93LmlzU2VjdXJlQ29udGV4dCkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0YXdhaXQgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodGV4dCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Y29weVdpdGhFeGVjQ29tbWFuZCgpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fSBjYXRjaCAoZmFsbGJhY2tFcnJvcikge1xuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ1tEaWZmTGlua10gQ2xpcGJvYXJkIEFQSSBhbmQgZmFsbGJhY2sgY29weSBmYWlsZWQ6JywgZXJyb3IsIGZhbGxiYWNrRXJyb3IpO1xuXHRcdFx0XHRcdHRocm93IGZhbGxiYWNrRXJyb3I7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRjb3B5V2l0aEV4ZWNDb21tYW5kKCk7XG5cdH07XG5cblx0dHJ5IHtcblx0XHRhd2FpdCBjb3B5KCk7XG5cdFx0dm9pZCBtdy5ub3RpZnkoZ2V0TWVzc2FnZSgnVVJMIGNvcGllZCB0byBjbGlwYm9hcmQnKSArIHRleHQsIHtcblx0XHRcdHR5cGU6ICdzdWNjZXNzJyxcblx0XHRcdHRhZzogJ0RpZmZMaW5rcycsXG5cdFx0fSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5lcnJvcignW1Nob3J0VVJMXSBGYWlsZWQgdG8gY29weSB0ZXh0OicsIGVycm9yKTtcblx0XHR2b2lkIG13Lm5vdGlmeShnZXRNZXNzYWdlKCdDb3B5IGZhaWxlZCcpLCB7XG5cdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0dGFnOiAnRGlmZkxpbmtzJyxcblx0XHR9KTtcblx0fVxufTtcblxuZXhwb3J0IHtjb3B5VGV4dH07XG4iLCAiaW1wb3J0IHt0eXBlIEFwcCBhcyBWdWVBcHAsIGNyZWF0ZUFwcH0gZnJvbSAndnVlJztcbmltcG9ydCBQb3J0bGV0TGluayBmcm9tICcuL1BvcnRsZXRMaW5rLnZ1ZSc7XG5pbXBvcnQge2FkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcn0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7Z2V0U2hvcnREb21haW5zfSBmcm9tICcuL3V0aWwvZ2V0U2hvcnREb21haW5zJztcblxuY29uc3Qge3NraW4sIHdnVXNlck5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuY29uc3QgZG9tYWlucyA9IGdldFNob3J0RG9tYWlucygpO1xuXG5sZXQgcG9ydGxldExpbmtFdmVudExpc3RlbmVyOiBSZXR1cm5UeXBlPHR5cGVvZiBhZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXI+ID0ge1xuXHRyZW1vdmU6ICgpOiB2b2lkID0+IHt9LFxufTtcblxuY29uc3Qgb3BlbkRpYWxvZyA9IChpdGVtczoge2xhYmVsOiBzdHJpbmc7IHRleHQ6IHN0cmluZ31bXSk6IHZvaWQgPT4ge1xuXHRjb25zdCByb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGRvY3VtZW50LmJvZHkuYXBwZW5kKHJvb3QpO1xuXG5cdGNvbnN0IGFwcDogVnVlQXBwPEVsZW1lbnQ+IHwgbnVsbCA9IGNyZWF0ZUFwcChQb3J0bGV0TGluaywge1xuXHRcdG9wZW46IHRydWUsXG5cdFx0aXRlbXMsXG5cdFx0b25DbG9zZTogKCk6IHZvaWQgPT4ge1xuXHRcdFx0YXBwPy51bm1vdW50KCk7XG5cdFx0XHRyb290LnJlbW92ZSgpO1xuXHRcdH0sXG5cdH0pO1xuXHRhcHAubW91bnQocm9vdCk7XG59O1xuXG5jb25zdCBhZGRQb3J0bGV0TGluayA9IChsaW5rOiBzdHJpbmcsIHBlcm1hTGluazogc3RyaW5nKTogdm9pZCA9PiB7XG5cdGNvbnN0IHBvcnRsZXRJZDogJ3AtY2FjdGlvbnMnIHwgJ3AtdGInID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3AtY2FjdGlvbnMnKSA/ICdwLWNhY3Rpb25zJyA6ICdwLXRiJztcblx0bGV0IHBvcnRsZXRMaW5rOiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0LXNob3J0bGluaycpO1xuXHRwb3J0bGV0TGluayB8fD0gbXcudXRpbC5hZGRQb3J0bGV0TGluayhcblx0XHRwb3J0bGV0SWQsXG5cdFx0JyMnLFxuXHRcdGdldE1lc3NhZ2UoJ1NoYXJlIFVSTCBmb3IgdGhlIHBhZ2UnKSxcblx0XHQndC1zaG9ydGxpbmsnLFxuXHRcdGdldE1lc3NhZ2UoJ1Nob3cgVVJMJylcblx0KTtcblxuXHRpZiAocG9ydGxldExpbmspIHtcblx0XHRjb25zdCBwb3J0bGV0TGlua0NsaWNrTGlzdGVuZXIgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRjb25zdCBpdGVtcyA9IFtcblx0XHRcdFx0e2xhYmVsOiBnZXRNZXNzYWdlKCdQYWdlIFVSTCcpLCB0ZXh0OiBsb2NhdGlvbi5ocmVmfSxcblx0XHRcdFx0e2xhYmVsOiBnZXRNZXNzYWdlKCdQZXJtYW5lbnQgVVJMJyksIHRleHQ6IGBodHRwczovLyR7bG9jYXRpb24uaG9zdH0ke3Blcm1hTGlua31gfSxcblx0XHRcdF07XG5cdFx0XHRpZiAod2dVc2VyTmFtZSkge1xuXHRcdFx0XHRmb3IgKGNvbnN0IFtpLCBkb21haW5dIG9mIGRvbWFpbnMuZW50cmllcygpKSB7XG5cdFx0XHRcdFx0aXRlbXMucHVzaCh7bGFiZWw6IGAke2dldE1lc3NhZ2UoJ1Nob3J0IFVSTCcpfSR7aSArIDF9YCwgdGV4dDogYGh0dHBzOi8vJHtkb21haW59JHtsaW5rfWB9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0b3BlbkRpYWxvZyhpdGVtcyk7XG5cdFx0fTtcblxuXHRcdHBvcnRsZXRMaW5rRXZlbnRMaXN0ZW5lci5yZW1vdmUoKTtcblx0XHRwb3J0bGV0TGlua0V2ZW50TGlzdGVuZXIgPSBhZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXIoe1xuXHRcdFx0dGFyZ2V0OiAocG9ydGxldExpbmsuZmlyc3RFbGVtZW50Q2hpbGQgPz8gcG9ydGxldExpbmspIGFzIEhUTUxFbGVtZW50LFxuXHRcdFx0dHlwZTogJ2NsaWNrJyxcblx0XHRcdGxpc3RlbmVyOiBwb3J0bGV0TGlua0NsaWNrTGlzdGVuZXIsXG5cdFx0fSk7XG5cblx0XHRpZiAoc2tpbiA9PT0gJ2NpdGl6ZW4nICYmICEkKHBvcnRsZXRMaW5rKS5maW5kKCcjbXctdWktaWNvbi13aWtpbWVkaWEtc2hvcnRsaW5rJykubGVuZ3RoKSB7XG5cdFx0XHQkKHBvcnRsZXRMaW5rKVxuXHRcdFx0XHQuZmluZCgnYScpXG5cdFx0XHRcdC5wcmVwZW5kKFxuXHRcdFx0XHRcdCc8c3BhbiBpZD1cIm13LXVpLWljb24td2lraW1lZGlhLXNob3J0bGlua1wiIGNsYXNzPVwiY2l0aXplbi11aS1pY29uIG13LXVpLWljb24tbGluayBtdy11aS1pY29uLXdpa2ltZWRpYS1saW5rXCI+PC9zcGFuPidcblx0XHRcdFx0KTtcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCB7YWRkUG9ydGxldExpbmt9O1xuIiwgIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge0NkeEJ1dHRvbiwgQ2R4RGlhbG9nLCBDZHhJY29ufSBmcm9tICdAd2lraW1lZGlhL2NvZGV4JztcbmltcG9ydCB7cmVmLCB3YXRjaH0gZnJvbSAndnVlJztcbmltcG9ydCB7Y29weVRleHR9IGZyb20gJy4vY29weVRleHQnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5pbnRlcmZhY2UgQ29weUl0ZW0ge1xuXHRsYWJlbDogc3RyaW5nO1xuXHR0ZXh0OiBzdHJpbmc7XG59XG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8e1xuXHRvcGVuOiBib29sZWFuO1xuXHRpdGVtczogQ29weUl0ZW1bXTtcblx0b25DbG9zZTogKCkgPT4gdm9pZDtcbn0+KCk7XG5cbmNvbnN0IGVtaXQgPSBkZWZpbmVFbWl0czx7XG5cdCd1cGRhdGU6b3Blbic6IFt2YWx1ZTogYm9vbGVhbl07XG59PigpO1xuY29uc3QgaXNPcGVuID0gcmVmKHByb3BzLm9wZW4pO1xuXG53YXRjaChcblx0KCkgPT4gcHJvcHMub3Blbixcblx0KHZhbHVlKSA9PiB7XG5cdFx0aXNPcGVuLnZhbHVlID0gdmFsdWU7XG5cdH0sXG5cdHtpbW1lZGlhdGU6IHRydWV9XG4pO1xuXG5jb25zdCBjbG9zZSA9ICgpOiB2b2lkID0+IHtcblx0aXNPcGVuLnZhbHVlID0gZmFsc2U7XG5cdGVtaXQoJ3VwZGF0ZTpvcGVuJywgZmFsc2UpO1xuXHRwcm9wcy5vbkNsb3NlKCk7XG59O1xuXG5jb25zdCBoYW5kbGVPcGVuQ2hhbmdlID0gKHZhbHVlOiBib29sZWFuKTogdm9pZCA9PiB7XG5cdGlzT3Blbi52YWx1ZSA9IHZhbHVlO1xuXHRpZiAoIXZhbHVlKSB7XG5cdFx0Y2xvc2UoKTtcblx0fVxufTtcblxuLyoqXG4gKiBTVkcgcGF0aHMgaW5saW5lZCBmcm9tIGBAd2lraW1lZGlhL2NvZGV4LWljb25zYCB2Mi43LjAuXG4gKlxuICogTWVkaWFXaWtpIGRvZXMgbm90IHNoaXAgYSBSZXNvdXJjZUxvYWRlciBtb2R1bGUgdGhhdCBidW5kbGVzXG4gKiBgQHdpa2ltZWRpYS9jb2RleC1pY29uc2AgKHNlZSBodHRwczovL3d3dy5tZWRpYXdpa2kub3JnL3dpa2kvQ29kZXgpLFxuICogc28gdGhlIHBhdGggZGF0YSBpcyBjb3BpZWQgaGVyZSB2ZXJiYXRpbSBhbmQgcmVuZGVyZWQgYXMgaW5saW5lIFNWR1xuICogdG8ga2VlcCB0aGUgZ2FkZ2V0IHNlbGYtY29udGFpbmVkIHdoaWxlIHN0aWxsIHNvdXJjaW5nIHRoZSBpY29uc1xuICogZnJvbSBgQHdpa2ltZWRpYS9jb2RleC1pY29uc2AuXG4gKlxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9kb2Mud2lraW1lZGlhLm9yZy9jb2RleC9sYXRlc3QvaWNvbnMvfVxuICovXG5cbi8qKiBQYXRoIGZvciBgY2R4SWNvbkNvcHlgLiAqL1xuY29uc3QgY2R4SWNvbkNvcHkgPSB7XG5cdHBhdGg6ICdNMTMgMTlIMVY3aDZWMWgxMnYxMmgtNnptLTYtNlY5SDN2OGg4di00em0yLTJoOFYzSDl6Jyxcblx0c2hvdWxkRmxpcDogdHJ1ZSxcbn07XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuXHQ8Y2R4LWRpYWxvZ1xuXHRcdHYtbW9kZWw6b3Blbj1cImlzT3BlblwiXG5cdFx0OnRpdGxlPVwiZ2V0TWVzc2FnZSgnU2hhcmUgVVJMIGZvciB0aGUgcGFnZScpXCJcblx0XHQ6ZGVmYXVsdC1hY3Rpb249XCJ7bGFiZWw6IGdldE1lc3NhZ2UoJ0Nsb3NlJyl9XCJcblx0XHQ6dXNlLWNsb3NlLWJ1dHRvbj1cInRydWVcIlxuXHRcdEB1cGRhdGU6b3Blbj1cImhhbmRsZU9wZW5DaGFuZ2VcIlxuXHRcdEBkZWZhdWx0PVwiY2xvc2VcIlxuXHQ+XG5cdFx0PGRpdiBjbGFzcz1cInNob3J0LXVybC1jb3B5LWxpc3RcIj5cblx0XHRcdDxkaXYgdi1mb3I9XCJpdGVtIGluIGl0ZW1zXCIgOmtleT1cIml0ZW0udGV4dFwiIGNsYXNzPVwic2hvcnQtdXJsLWNvcHktaXRlbVwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwic2hvcnQtdXJsLWNvcHktbGFiZWxcIj57eyBpdGVtLmxhYmVsIH19PC9kaXY+XG5cdFx0XHRcdDxjb2RlIGNsYXNzPVwic2hvcnQtdXJsLWNvcHktdGV4dFwiPnt7IGl0ZW0udGV4dCB9fTwvY29kZT5cblx0XHRcdFx0PGNkeC1idXR0b24gd2VpZ2h0PVwibm9ybWFsXCIgOmFyaWEtbGFiZWw9XCJnZXRNZXNzYWdlKCdDb3B5JylcIiBAY2xpY2s9XCJjb3B5VGV4dChpdGVtLnRleHQpXCI+XG5cdFx0XHRcdFx0PGNkeC1pY29uIDppY29uPVwiY2R4SWNvbkNvcHlcIiAvPlxuXHRcdFx0XHRcdHt7IGdldE1lc3NhZ2UoJ0NvcHknKSB9fVxuXHRcdFx0XHQ8L2NkeC1idXR0b24+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0PC9jZHgtZGlhbG9nPlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwibGVzc1wiPlxuLnNob3J0LXVybC1jb3B5LWxpc3Qge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDAuNzVyZW07XG59XG5cbi5zaG9ydC11cmwtY29weS1pdGVtIHtcblx0ZGlzcGxheTogZmxleDtcblx0Z2FwOiAwLjVyZW07XG5cdGZsZXgtd3JhcDogd3JhcDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2hvcnQtdXJsLWNvcHktdGV4dCB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRwYWRkaW5nOiAwLjVyZW0gMC43NXJlbTtcblx0Ym9yZGVyOiAxcHggc29saWQgI2VhZWNmMDtcblx0Ym9yZGVyLXJhZGl1czogMC4yNXJlbTtcblx0YmFja2dyb3VuZDogI2Y4ZjlmYTtcblx0Y29sb3I6ICMyMDIxMjI7XG5cdGZvbnQtc2l6ZTogMC44NzVyZW07XG5cdHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcblx0ZmxleDogMSAxIDEwMCU7XG59XG48L3N0eWxlPlxuIiwgImltcG9ydCB7IHJlbmRlckxpc3QgYXMgX3JlbmRlckxpc3QsIEZyYWdtZW50IGFzIF9GcmFnbWVudCwgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBfY3JlYXRlRWxlbWVudEJsb2NrLCB0b0Rpc3BsYXlTdHJpbmcgYXMgX3RvRGlzcGxheVN0cmluZywgY3JlYXRlRWxlbWVudFZOb2RlIGFzIF9jcmVhdGVFbGVtZW50Vk5vZGUsIGNyZWF0ZVZOb2RlIGFzIF9jcmVhdGVWTm9kZSwgY3JlYXRlVGV4dFZOb2RlIGFzIF9jcmVhdGVUZXh0Vk5vZGUsIHdpdGhDdHggYXMgX3dpdGhDdHgsIGNyZWF0ZUJsb2NrIGFzIF9jcmVhdGVCbG9jayB9IGZyb20gXCJ2dWVcIlxuXG5jb25zdCBfaG9pc3RlZF8xID0geyBjbGFzczogXCJzaG9ydC11cmwtY29weS1saXN0XCIgfVxuY29uc3QgX2hvaXN0ZWRfMiA9IHsgY2xhc3M6IFwic2hvcnQtdXJsLWNvcHktbGFiZWxcIiB9XG5jb25zdCBfaG9pc3RlZF8zID0geyBjbGFzczogXCJzaG9ydC11cmwtY29weS10ZXh0XCIgfVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSwgJHByb3BzLCAkc2V0dXAsICRkYXRhLCAkb3B0aW9ucykge1xuICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKCRzZXR1cFtcIkNkeERpYWxvZ1wiXSwge1xuICAgIG9wZW46ICRzZXR1cC5pc09wZW4sXG4gICAgXCJvblVwZGF0ZTpvcGVuXCI6IFtcbiAgICAgIF9jYWNoZVswXSB8fCAoX2NhY2hlWzBdID0gJGV2ZW50ID0+ICgoJHNldHVwLmlzT3BlbikgPSAkZXZlbnQpKSxcbiAgICAgICRzZXR1cC5oYW5kbGVPcGVuQ2hhbmdlXG4gICAgXSxcbiAgICB0aXRsZTogJHNldHVwLmdldE1lc3NhZ2UoJ1NoYXJlIFVSTCBmb3IgdGhlIHBhZ2UnKSxcbiAgICBcImRlZmF1bHQtYWN0aW9uXCI6IHtsYWJlbDogJHNldHVwLmdldE1lc3NhZ2UoJ0Nsb3NlJyl9LFxuICAgIFwidXNlLWNsb3NlLWJ1dHRvblwiOiB0cnVlLFxuICAgIG9uRGVmYXVsdDogJHNldHVwLmNsb3NlXG4gIH0sIHtcbiAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzEsIFtcbiAgICAgICAgKF9vcGVuQmxvY2sodHJ1ZSksIF9jcmVhdGVFbGVtZW50QmxvY2soX0ZyYWdtZW50LCBudWxsLCBfcmVuZGVyTGlzdCgkcHJvcHMuaXRlbXMsIChpdGVtKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJkaXZcIiwge1xuICAgICAgICAgICAga2V5OiBpdGVtLnRleHQsXG4gICAgICAgICAgICBjbGFzczogXCJzaG9ydC11cmwtY29weS1pdGVtXCJcbiAgICAgICAgICB9LCBbXG4gICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzIsIF90b0Rpc3BsYXlTdHJpbmcoaXRlbS5sYWJlbCksIDEgLyogVEVYVCAqLyksXG4gICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiY29kZVwiLCBfaG9pc3RlZF8zLCBfdG9EaXNwbGF5U3RyaW5nKGl0ZW0udGV4dCksIDEgLyogVEVYVCAqLyksXG4gICAgICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiQ2R4QnV0dG9uXCJdLCB7XG4gICAgICAgICAgICAgIHdlaWdodDogXCJub3JtYWxcIixcbiAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsXCI6ICRzZXR1cC5nZXRNZXNzYWdlKCdDb3B5JyksXG4gICAgICAgICAgICAgIG9uQ2xpY2s6ICRldmVudCA9PiAoJHNldHVwLmNvcHlUZXh0KGl0ZW0udGV4dCkpXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiQ2R4SWNvblwiXSwgeyBpY29uOiAkc2V0dXAuY2R4SWNvbkNvcHkgfSksXG4gICAgICAgICAgICAgICAgX2NyZWF0ZVRleHRWTm9kZShcIiBcIiArIF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLmdldE1lc3NhZ2UoJ0NvcHknKSksIDEgLyogVEVYVCAqLylcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgICAgICAgICB9LCA4IC8qIFBST1BTICovLCBbXCJhcmlhLWxhYmVsXCIsIFwib25DbGlja1wiXSlcbiAgICAgICAgICBdKSlcbiAgICAgICAgfSksIDEyOCAvKiBLRVlFRF9GUkFHTUVOVCAqLykpXG4gICAgICBdKVxuICAgIF0pLFxuICAgIF86IDEgLyogU1RBQkxFICovXG4gIH0sIDggLyogUFJPUFMgKi8sIFtcIm9wZW5cIiwgXCJ0aXRsZVwiLCBcImRlZmF1bHQtYWN0aW9uXCJdKSlcbn0iLCAiaW1wb3J0IHNjcmlwdCBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxTaG9ydFVSTFxcXFxtb2R1bGVzXFxcXFBvcnRsZXRMaW5rLnZ1ZT90eXBlPXNjcmlwdFwiO2ltcG9ydCBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcU2hvcnRVUkxcXFxcbW9kdWxlc1xcXFxQb3J0bGV0TGluay52dWU/dHlwZT1zdHlsZSZpbmRleD0wXCI7aW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcU2hvcnRVUkxcXFxcbW9kdWxlc1xcXFxQb3J0bGV0TGluay52dWU/dHlwZT10ZW1wbGF0ZVwiOyBzY3JpcHQucmVuZGVyID0gcmVuZGVyO3NjcmlwdC5fX2ZpbGUgPSBcInNyY1xcXFxTaG9ydFVSTFxcXFxtb2R1bGVzXFxcXFBvcnRsZXRMaW5rLnZ1ZVwiO3NjcmlwdC5fX3Njb3BlSWQgPSBcImRhdGEtdi03ZGFiN2JhZVwiO2V4cG9ydCBkZWZhdWx0IHNjcmlwdDsiLCAiaW1wb3J0IHthZGRIZWFkZXJMaW5rfSBmcm9tICcuL2FkZEhlYWRlckxpbmsnO1xuaW1wb3J0IHthZGRQb3J0bGV0TGlua30gZnJvbSAnLi9hZGRQb3J0bGV0TGluayc7XG5cbmNvbnN0IGJ1aWxkTGluayA9IChvbGRJZDogbnVtYmVyIHwgbnVsbCwgZGlmZklkOiBudW1iZXIpOiB2b2lkID0+IHtcblx0bGV0IGxpbms6IHN0cmluZyA9ICcvZCc7XG5cdGxldCBwZXJtYUxpbms6IHN0cmluZyA9ICcvd2lraS9TcGVjaWFsOkRpZmYnO1xuXHRpZiAob2xkSWQpIHtcblx0XHRsaW5rICs9IGAvJHtvbGRJZH1gO1xuXHRcdHBlcm1hTGluayArPSBgLyR7b2xkSWR9YDtcblx0fVxuXHRsaW5rICs9IGAvJHtkaWZmSWR9YDtcblx0cGVybWFMaW5rICs9IGAvJHtkaWZmSWR9YDtcblxuXHRhZGRIZWFkZXJMaW5rKGxpbmssIHBlcm1hTGluayk7XG5cdGFkZFBvcnRsZXRMaW5rKGxpbmssIHBlcm1hTGluayk7XG59O1xuXG5leHBvcnQge2J1aWxkTGlua307XG4iLCAie1xuXHRcInZlcnNpb25cIjogXCIyLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgU2hvcnRVUkwvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi4vYXBpJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxudHlwZSBDb21wYXJlUmVzcG9uc2UgPSB7XG5cdGNvbXBhcmU/OiB7XG5cdFx0ZnJvbXJldmlkOiBudW1iZXI7XG5cdH07XG59O1xuXG5jb25zdCBwYXJhbWV0ZXJzOiBBcGlDb21wYXJlUGFnZXNQYXJhbXMgPSB7XG5cdGFjdGlvbjogJ2NvbXBhcmUnLFxuXHRmb3JtYXQ6ICdqc29uJyxcblx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRwcm9wOiAnaWRzJyxcblx0dG9yZWxhdGl2ZTogJ3ByZXYnLFxuXHRzbWF4YWdlOiA2MDAsXG5cdG1heGFnZTogNjAwLFxufTtcblxuY29uc3QgcXVlcnlBcGkgPSBhc3luYyAoZGlmZklkOiBudW1iZXIpOiBQcm9taXNlPENvbXBhcmVSZXNwb25zZT4gPT4ge1xuXHR0cnkge1xuXHRcdHJldHVybiBhd2FpdCBhcGkuZ2V0KHtcblx0XHRcdC4uLnBhcmFtZXRlcnMsXG5cdFx0XHRmcm9tcmV2OiBkaWZmSWQsXG5cdFx0fSBhcyB0eXBlb2YgcGFyYW1ldGVycyk7XG5cdH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG5cdFx0Y29uc29sZS5lcnJvcignW1Nob3J0VVJMXSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0XHR0b2FzdGlmeShcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnTmV0d29yayBlcnJvcicpLFxuXHRcdFx0XHRjbG9zZTogdHJ1ZSxcblx0XHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdFx0fSxcblx0XHRcdCdlcnJvcidcblx0XHQpO1xuXG5cdFx0cmV0dXJuIHt9O1xuXHR9XG59O1xuXG5leHBvcnQge3F1ZXJ5QXBpfTtcbiIsICJpbXBvcnQge2J1aWxkTGlua30gZnJvbSAnLi9idWlsZExpbmsnO1xuaW1wb3J0IHtxdWVyeUFwaX0gZnJvbSAnLi91dGlsL3F1ZXJ5QXBpJztcblxuY29uc3QgY29tcGFyZVdpdGhSZW1vdGVEaWZmSWQgPSBhc3luYyAoZGlmZklkOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3QgcmVzcG9uc2U6IEF3YWl0ZWQ8UmV0dXJuVHlwZTx0eXBlb2YgcXVlcnlBcGk+PiA9IGF3YWl0IHF1ZXJ5QXBpKGRpZmZJZCk7XG5cdGlmIChkaWZmSWQgPT09IG13LmNvbmZpZy5nZXQoJ3dnRGlmZk5ld0lkJykgJiYgcmVzcG9uc2VbJ2NvbXBhcmUnXT8uZnJvbXJldmlkID09PSBtdy5jb25maWcuZ2V0KCd3Z0RpZmZPbGRJZCcpKSB7XG5cdFx0YnVpbGRMaW5rKDAsIGRpZmZJZCk7XG5cdH1cbn07XG5cbmV4cG9ydCB7Y29tcGFyZVdpdGhSZW1vdGVEaWZmSWR9O1xuIiwgImltcG9ydCB7YWRkSGVhZGVyTGlua30gZnJvbSAnLi9hZGRIZWFkZXJMaW5rJztcbmltcG9ydCB7YWRkUG9ydGxldExpbmt9IGZyb20gJy4vYWRkUG9ydGxldExpbmsnO1xuaW1wb3J0IHtidWlsZExpbmt9IGZyb20gJy4vYnVpbGRMaW5rJztcbmltcG9ydCB7Y29tcGFyZVdpdGhSZW1vdGVEaWZmSWR9IGZyb20gJy4vY29tcGFyZVdpdGhSZW1vdGVEaWZmSWQnO1xuXG5jb25zdCBwcm9jZXNzSWQgPSAoXG5cdGlzUmV2aXNpb25QYWdlOiBib29sZWFuLFxuXHR7XG5cdFx0YXJ0aWNsZUlkLFxuXHRcdGRpZmZJZCxcblx0XHRvbGRJZCxcblx0XHRyZXZpc2lvbklkLFxuXHR9OiB7XG5cdFx0YXJ0aWNsZUlkOiBudW1iZXI7XG5cdFx0ZGlmZklkOiBudW1iZXIgfCBudWxsO1xuXHRcdG9sZElkOiBudW1iZXIgfCBudWxsO1xuXHRcdHJldmlzaW9uSWQ6IG51bWJlciB8IG51bGw7XG5cdH1cbik6IHZvaWQgPT4ge1xuXHRpZiAoZGlmZklkKSB7XG5cdFx0YnVpbGRMaW5rKG9sZElkLCBkaWZmSWQpO1xuXHRcdGlmIChvbGRJZCkge1xuXHRcdFx0dm9pZCBjb21wYXJlV2l0aFJlbW90ZURpZmZJZChkaWZmSWQpO1xuXHRcdH1cblx0fSBlbHNlIGlmIChyZXZpc2lvbklkICYmIGlzUmV2aXNpb25QYWdlKSB7XG5cdFx0YWRkSGVhZGVyTGluayhgL3AvJHtyZXZpc2lvbklkfWAsIGAvd2lraS9TcGVjaWFsOlBlcm1hbGluay8ke3JldmlzaW9uSWR9YCk7XG5cdFx0YWRkUG9ydGxldExpbmsoYC9wLyR7cmV2aXNpb25JZH1gLCBgL3dpa2kvU3BlY2lhbDpQZXJtYWxpbmsvJHtyZXZpc2lvbklkfWApO1xuXHR9IGVsc2UgaWYgKGFydGljbGVJZCkge1xuXHRcdGFkZEhlYWRlckxpbmsoYC9jLyR7YXJ0aWNsZUlkfWAsIGAvaW5kZXgucGhwP2N1cmlkPSR7YXJ0aWNsZUlkfWApO1xuXHRcdGFkZFBvcnRsZXRMaW5rKGAvYy8ke2FydGljbGVJZH1gLCBgL2luZGV4LnBocD9jdXJpZD0ke2FydGljbGVJZH1gKTtcblx0fVxufTtcblxuZXhwb3J0IHtwcm9jZXNzSWR9O1xuIiwgImltcG9ydCB7Y2hlY2tSZXZpc2lvblBhZ2V9IGZyb20gJy4vbW9kdWxlcy91dGlsL2NoZWNrUmV2aXNpb25QYWdlJztcbmltcG9ydCB7Z2V0U2hvcnREb21haW5zfSBmcm9tICcuL21vZHVsZXMvdXRpbC9nZXRTaG9ydERvbWFpbnMnO1xuaW1wb3J0IHtwcm9jZXNzSWR9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzSWQnO1xuXG4oZnVuY3Rpb24gc2hvcnRVUkwoKSB7XG5cdGNvbnN0IHt3Z0FjdGlvbiwgd2dBcnRpY2xlSWQsIHdnTmFtZXNwYWNlTnVtYmVyfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRjb25zdCBkb21haW5zID0gZ2V0U2hvcnREb21haW5zKCk7XG5cblx0aWYgKCFkb21haW5zLmxlbmd0aCB8fCB3Z05hbWVzcGFjZU51bWJlciA8IDApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAod2dBY3Rpb24gPT09ICd2aWV3JyAmJiB3Z0FydGljbGVJZCkge1xuXHRcdG13Lmhvb2soJ3dpa2lwYWdlLmNvbnRlbnQnKS5hZGQoKCRjb250ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRpZiAoJGNvbnRlbnQuYXR0cignaWQnKSAhPT0gJ213LWNvbnRlbnQtdGV4dCcpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBpc1JldmlzaW9uUGFnZTogYm9vbGVhbiA9IGNoZWNrUmV2aXNpb25QYWdlKCRjb250ZW50KTtcblxuXHRcdFx0cHJvY2Vzc0lkKGlzUmV2aXNpb25QYWdlLCB7XG5cdFx0XHRcdGFydGljbGVJZDogbXcuY29uZmlnLmdldCgnd2dBcnRpY2xlSWQnKSxcblx0XHRcdFx0ZGlmZklkOiBtdy5jb25maWcuZ2V0KCd3Z0RpZmZOZXdJZCcpLFxuXHRcdFx0XHRvbGRJZDogbXcuY29uZmlnLmdldCgnd2dEaWZmT2xkSWQnKSxcblx0XHRcdFx0cmV2aXNpb25JZDogbXcuY29uZmlnLmdldCgnd2dSZXZpc2lvbklkJyksXG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxvQkFBcUJDLGNBQThCO0FBQ3hELFVBQ0VBLFNBQVNDLEtBQUssOEJBQThCLEVBQUVDLFVBQzlDRixTQUFTQyxLQUFLLDRDQUE0QyxFQUFFQyxVQUFVO0FBRXpFOztBQ0xBLElBQU1DLGtCQUFrQkEsTUFBZ0I7QUFDdkMsUUFBTTtJQUFDQztFQUFRLElBQUlDLEdBQUdDLE9BQU9DLElBQUk7QUFDakMsTUFBSUMsV0FBb0IsQ0FBQTtBQUV4QixVQUFRSixVQUFBO0lBQ1AsS0FBSztBQUNKSSxpQkFBVSxDQUFDLFdBQVcsU0FBUztBQUMvQjtJQUNELEtBQUs7QUFDSkEsaUJBQVUsQ0FBQyxhQUFhLFdBQVc7QUFDbkM7SUFDRCxLQUFLO0FBQ0pBLGlCQUFVLENBQUMsZUFBZSxhQUFhO0FBQ3ZDO0VBQ0Y7QUFFQSxTQUFPQTtBQUNSOztBQ2hCQSxJQUFBQyxxQkFBMENDLFFBQUEsaUJBQUE7O0FDRDFDLElBQUFDLG9CQUF1QkQsUUFBQSxpQkFBQTtBQUV2QixJQUFNRSxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOQyxRQUFBLEdBQU9GLGtCQUFBRyxVQUFTO01BQ2ZDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7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ekksa0JBQUEsTUFBQWUsT0FBb0IwSCxTQUFTLEdBQUEsb0JBQUExSCxPQUF3QjBILFNBQVMsQ0FBRTtBQUNoRW5ELG1CQUFBLE1BQUF2RSxPQUFxQjBILFNBQVMsR0FBQSxvQkFBQTFILE9BQXdCMEgsU0FBUyxDQUFFO0VBQ2xFO0FBQ0Q7O0NDM0JDLFNBQVNFLFdBQVc7QUFDcEIsUUFBTTtJQUFDQztJQUFVQztJQUFhQztFQUFpQixJQUFJck0sR0FBR0MsT0FBT0MsSUFBSTtBQUVqRSxRQUFNQyxXQUFVTCxnQkFBZ0I7QUFFaEMsTUFBSSxDQUFDSyxTQUFRTixVQUFVd00sb0JBQW9CLEdBQUc7QUFDN0M7RUFDRDtBQUVBLE1BQUlGLGFBQWEsVUFBVUMsYUFBYTtBQUN2Q3BNLE9BQUdzTSxLQUFLLGtCQUFrQixFQUFFQyxJQUFLNU0sY0FBbUI7QUFDbkQsVUFBSUEsU0FBUzZNLEtBQUssSUFBSSxNQUFNLG1CQUFtQjtBQUM5QztNQUNEO0FBRUEsWUFBTVQsaUJBQTBCck0sa0JBQWtCQyxRQUFRO0FBRTFEbU0sZ0JBQVVDLGdCQUFnQjtRQUN6QkMsV0FBV2hNLEdBQUdDLE9BQU9DLElBQUksYUFBYTtRQUN0Q2tLLFFBQVFwSyxHQUFHQyxPQUFPQyxJQUFJLGFBQWE7UUFDbkNpSyxPQUFPbkssR0FBR0MsT0FBT0MsSUFBSSxhQUFhO1FBQ2xDK0wsWUFBWWpNLEdBQUdDLE9BQU9DLElBQUksY0FBYztNQUN6QyxDQUFDO0lBQ0YsQ0FBQztFQUNGO0FBQ0QsR0FBRzsiLAogICJuYW1lcyI6IFsiY2hlY2tSZXZpc2lvblBhZ2UiLCAiJGNvbnRlbnQiLCAiZmluZCIsICJsZW5ndGgiLCAiZ2V0U2hvcnREb21haW5zIiwgIndnV2lraUlEIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiZG9tYWluczMiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkNsb3NlIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgIkNvcHkiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImNvcHlUZXh0IiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAidGV4dCIsICJjb3B5V2l0aEV4ZWNDb21tYW5kIiwgImhlbHBlciIsICJkb2N1bWVudCIsICJjcmVhdGVFbGVtZW50IiwgInZhbHVlIiwgInNldEF0dHJpYnV0ZSIsICJzdHlsZSIsICJwb3NpdGlvbiIsICJ0b3AiLCAibGVmdCIsICJib2R5IiwgImFwcGVuZCIsICJzZWxlY3QiLCAiZXhlY0NvbW1hbmQiLCAiRXJyb3IiLCAicmVtb3ZlIiwgImNvcHkiLCAiX3JlZjIiLCAibmF2aWdhdG9yIiwgImNsaXBib2FyZCIsICJ3aW5kb3ciLCAiaXNTZWN1cmVDb250ZXh0IiwgIndyaXRlVGV4dCIsICJlcnJvciIsICJmYWxsYmFja0Vycm9yIiwgImNvbnNvbGUiLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgIm5vdGlmeSIsICJ0eXBlIiwgInRhZyIsICJfeCIsICJ3Z1VzZXJOYW1lIiwgImRvbWFpbnMiLCAiaGVhZGVyTGlua0V2ZW50TGlzdGVuZXIiLCAiYWRkSGVhZGVyTGluayIsICJsaW5rIiwgInBlcm1hTGluayIsICJoZWFkZXJMaW5rIiwgInF1ZXJ5U2VsZWN0b3IiLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0IiwgImhyZWYiLCAiaWNvbiIsICJjbGFzc05hbWUiLCAiaGVhZGVyRWxlbWVudCIsICJpZCIsICJwcmVwZW5kIiwgImhlYWRlckxpbmtDbGlja0xpc3RlbmVyIiwgImV2ZW50IiwgInByZXZlbnREZWZhdWx0IiwgImNvbmNhdCIsICJsb2NhdGlvbiIsICJob3N0IiwgImFkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3ZlciIsICJ0YXJnZXQiLCAibGlzdGVuZXIiLCAiaW1wb3J0X3Z1ZTQiLCAiaW1wb3J0X2NvZGV4IiwgImltcG9ydF92dWUyIiwgInByb3BzIiwgIl9fcHJvcHMiLCAiZW1pdCIsICJfX2VtaXQiLCAiaXNPcGVuIiwgInJlZiIsICJvcGVuIiwgIndhdGNoIiwgImltbWVkaWF0ZSIsICJjbG9zZSIsICJvbkNsb3NlIiwgImhhbmRsZU9wZW5DaGFuZ2UiLCAiY2R4SWNvbkNvcHkiLCAicGF0aCIsICJzaG91bGRGbGlwIiwgImltcG9ydF92dWUzIiwgIl9ob2lzdGVkXzEiLCAiY2xhc3MiLCAiX2hvaXN0ZWRfMiIsICJfaG9pc3RlZF8zIiwgInJlbmRlciIsICJfY3R4IiwgIl9jYWNoZSIsICIkcHJvcHMiLCAiJHNldHVwIiwgIiRkYXRhIiwgIiRvcHRpb25zIiwgIm9wZW5CbG9jayIsICJjcmVhdGVCbG9jayIsICIkZXZlbnQiLCAidGl0bGUiLCAibGFiZWwiLCAib25EZWZhdWx0IiwgImRlZmF1bHQiLCAid2l0aEN0eCIsICJjcmVhdGVFbGVtZW50Vk5vZGUiLCAiY3JlYXRlRWxlbWVudEJsb2NrIiwgIkZyYWdtZW50IiwgInJlbmRlckxpc3QiLCAiaXRlbXMiLCAiaXRlbSIsICJ0b0Rpc3BsYXlTdHJpbmciLCAiY3JlYXRlVk5vZGUiLCAid2VpZ2h0IiwgIm9uQ2xpY2siLCAiY3JlYXRlVGV4dFZOb2RlIiwgIl8iLCAiUG9ydGxldExpbmtfZGVmYXVsdCIsICJfX2ZpbGUiLCAiX19zY29wZUlkIiwgIlBvcnRsZXRMaW5rX2RlZmF1bHQyIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJza2luIiwgIndnVXNlck5hbWUyIiwgImRvbWFpbnMyIiwgInBvcnRsZXRMaW5rRXZlbnRMaXN0ZW5lciIsICJvcGVuRGlhbG9nIiwgInJvb3QiLCAiYXBwIiwgImNyZWF0ZUFwcCIsICJ1bm1vdW50IiwgIm1vdW50IiwgImFkZFBvcnRsZXRMaW5rIiwgInBvcnRsZXRJZCIsICJwb3J0bGV0TGluayIsICJ1dGlsIiwgIl9wb3J0bGV0TGluayRmaXJzdEVsZSIsICJwb3J0bGV0TGlua0NsaWNrTGlzdGVuZXIiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgImVudHJpZXMiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiaSIsICJkb21haW4iLCAicHVzaCIsICJlcnIiLCAiZSIsICJmIiwgImZpcnN0RWxlbWVudENoaWxkIiwgIiQiLCAiYnVpbGRMaW5rIiwgIm9sZElkIiwgImRpZmZJZCIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJhcGkiLCAiaW5pdE13QXBpIiwgImltcG9ydF9leHRfZ2FkZ2V0NSIsICJwYXJhbWV0ZXJzIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgInRvcmVsYXRpdmUiLCAic21heGFnZSIsICJtYXhhZ2UiLCAicXVlcnlBcGkiLCAiX3JlZjMiLCAiZnJvbXJldiIsICJ0b2FzdGlmeSIsICJkdXJhdGlvbiIsICJfeDIiLCAiY29tcGFyZVdpdGhSZW1vdGVEaWZmSWQiLCAiX3JlZjQiLCAiX3Jlc3BvbnNlJGNvbXBhcmUiLCAicmVzcG9uc2UiLCAiZnJvbXJldmlkIiwgIl94MyIsICJwcm9jZXNzSWQiLCAiaXNSZXZpc2lvblBhZ2UiLCAiYXJ0aWNsZUlkIiwgInJldmlzaW9uSWQiLCAic2hvcnRVUkwiLCAid2dBY3Rpb24iLCAid2dBcnRpY2xlSWQiLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAiaG9vayIsICJhZGQiLCAiYXR0ciJdCn0K

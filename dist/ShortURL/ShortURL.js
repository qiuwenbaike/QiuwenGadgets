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
              console.error("[ShortURL] Clipboard API and fallback copy failed:", error, fallbackError);
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
        tag: "ShortURL"
      });
    } catch (error) {
      console.error("[ShortURL] Failed to copy text:", error);
      void mw.notify(getMessage("Copy failed"), {
        type: "error",
        tag: "ShortURL"
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Nob3J0VVJML21vZHVsZXMvdXRpbC9jaGVja1JldmlzaW9uUGFnZS50cyIsICJzcmMvU2hvcnRVUkwvbW9kdWxlcy91dGlsL2dldFNob3J0RG9tYWlucy50cyIsICJzcmMvU2hvcnRVUkwvbW9kdWxlcy9hZGRIZWFkZXJMaW5rLnRzIiwgInNyYy9TaG9ydFVSTC9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1Nob3J0VVJML21vZHVsZXMvY29weVRleHQudHMiLCAic3JjL1Nob3J0VVJML21vZHVsZXMvYWRkUG9ydGxldExpbmsudHMiLCAiZGlzdC9TaG9ydFVSTC9zcmMvU2hvcnRVUkwvbW9kdWxlcy9Qb3J0bGV0TGluay52dWUiLCAic2ZjLXRlbXBsYXRlOkQ6XFxHaXRSZXBvc2l0b3J5XFxRaXV3ZW5HYWRnZXRzXFxzcmNcXFNob3J0VVJMXFxtb2R1bGVzXFxQb3J0bGV0TGluay52dWU/dHlwZT10ZW1wbGF0ZSIsICJzcmMvU2hvcnRVUkwvbW9kdWxlcy9Qb3J0bGV0TGluay52dWUiLCAic3JjL1Nob3J0VVJML21vZHVsZXMvYnVpbGRMaW5rLnRzIiwgInNyYy9TaG9ydFVSTC9vcHRpb25zLmpzb24iLCAic3JjL1Nob3J0VVJML21vZHVsZXMvYXBpLnRzIiwgInNyYy9TaG9ydFVSTC9tb2R1bGVzL3V0aWwvcXVlcnlBcGkudHMiLCAic3JjL1Nob3J0VVJML21vZHVsZXMvY29tcGFyZVdpdGhSZW1vdGVEaWZmSWQudHMiLCAic3JjL1Nob3J0VVJML21vZHVsZXMvcHJvY2Vzc0lkLnRzIiwgInNyYy9TaG9ydFVSTC9TaG9ydFVSTC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgY2hlY2tSZXZpc2lvblBhZ2UgPSAoJGNvbnRlbnQ6IEpRdWVyeSk6IGJvb2xlYW4gPT4ge1xuXHRyZXR1cm4gKFxuXHRcdCgkY29udGVudC5maW5kKCcjY29udGVudFN1YiAjbXctcmV2aXNpb24tbmF2JykubGVuZ3RoIHx8XG5cdFx0XHQkY29udGVudC5maW5kKCdtYWluI2NvbnRlbnQ+LnByZS1jb250ZW50ICNtdy1yZXZpc2lvbi1uYXYnKS5sZW5ndGgpID4gMFxuXHQpO1xufTtcblxuZXhwb3J0IHtjaGVja1JldmlzaW9uUGFnZX07XG4iLCAiY29uc3QgZ2V0U2hvcnREb21haW5zID0gKCk6IHN0cmluZ1tdID0+IHtcblx0Y29uc3Qge3dnV2lraUlEfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0bGV0IGRvbWFpbnM6IHN0cmluZ1tdID0gW107XG5cblx0c3dpdGNoICh3Z1dpa2lJRCkge1xuXHRcdGNhc2UgJ3pocWl1d2VuYmFpa2UnOlxuXHRcdFx0ZG9tYWlucyA9IFsncXdiay5jYycsICdia3d6LmNuJ107XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICdsaWNlbmNld2lraSc6XG5cdFx0XHRkb21haW5zID0gWydsLnF3YmsuY2MnLCAnbC5ia3d6LmNuJ107XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICdtbmNxaXV3ZW5iYWlrZSc6XG5cdFx0XHRkb21haW5zID0gWydtbmMucXdiay5jYycsICdtbmMuYmt3ei5jbiddO1xuXHRcdFx0YnJlYWs7XG5cdH1cblxuXHRyZXR1cm4gZG9tYWlucztcbn07XG5cbmV4cG9ydCB7Z2V0U2hvcnREb21haW5zfTtcbiIsICJpbXBvcnQgJy4vYWRkSGVhZGVyTGluay5sZXNzJztcbmltcG9ydCB7YWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtjb3B5VGV4dH0gZnJvbSAnLi9jb3B5VGV4dCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge2dldFNob3J0RG9tYWluc30gZnJvbSAnLi91dGlsL2dldFNob3J0RG9tYWlucyc7XG5cbmNvbnN0IHt3Z1VzZXJOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcbmNvbnN0IGRvbWFpbnMgPSBnZXRTaG9ydERvbWFpbnMoKTtcblxubGV0IGhlYWRlckxpbmtFdmVudExpc3RlbmVyOiBSZXR1cm5UeXBlPHR5cGVvZiBhZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXI+ID0ge1xuXHRyZW1vdmU6ICgpOiB2b2lkID0+IHt9LFxufTtcblxuY29uc3QgYWRkSGVhZGVyTGluayA9IChsaW5rOiBzdHJpbmcsIHBlcm1hTGluazogc3RyaW5nKTogdm9pZCA9PiB7XG5cdGxldCBoZWFkZXJMaW5rOiBIVE1MQW5jaG9yRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXctaW5kaWNhdG9yLXNob3J0VVJMIGEnKTtcblx0aWYgKCFoZWFkZXJMaW5rKSB7XG5cdFx0aGVhZGVyTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblx0XHRoZWFkZXJMaW5rLmhyZWYgPSAnIyc7XG5cdFx0aGVhZGVyTGluay5zZXRBdHRyaWJ1dGUoXG5cdFx0XHQnYXJpYS1sYWJlbCcsXG5cdFx0XHR3Z1VzZXJOYW1lID8gZ2V0TWVzc2FnZSgnU2hvcnQgVVJMJykgOiBnZXRNZXNzYWdlKCdTaGFyZSBVUkwgZm9yIHRoZSBwYWdlJylcblx0XHQpO1xuXHRcdGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0aWNvbi5jbGFzc05hbWUgPSAnc2hvcnQtdXJsLWxpbmstaWNvbic7XG5cdFx0aGVhZGVyTGluay5hcHBlbmQoaWNvbik7XG5cdFx0Y29uc3QgaGVhZGVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdGhlYWRlckVsZW1lbnQuY2xhc3NOYW1lID0gJ213LWluZGljYXRvcic7XG5cdFx0aGVhZGVyRWxlbWVudC5pZCA9ICdtdy1pbmRpY2F0b3Itc2hvcnRVUkwnO1xuXHRcdGhlYWRlckVsZW1lbnQuYXBwZW5kKGhlYWRlckxpbmspO1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tdy1pbmRpY2F0b3JzJyk/LnByZXBlbmQoaGVhZGVyRWxlbWVudCk7XG5cdH1cblxuXHRjb25zdCBoZWFkZXJMaW5rQ2xpY2tMaXN0ZW5lciA9IChldmVudDogTW91c2VFdmVudCk6IHZvaWQgPT4ge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0Y29weVRleHQod2dVc2VyTmFtZSA/IGBodHRwczovLyR7ZG9tYWluc1swXX0ke2xpbmt9YCA6IGBodHRwczovLyR7bG9jYXRpb24uaG9zdH0ke3Blcm1hTGlua31gKTtcblx0fTtcblxuXHRoZWFkZXJMaW5rRXZlbnRMaXN0ZW5lci5yZW1vdmUoKTtcblx0aGVhZGVyTGlua0V2ZW50TGlzdGVuZXIgPSBhZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXIoe1xuXHRcdHRhcmdldDogaGVhZGVyTGluayxcblx0XHR0eXBlOiAnY2xpY2snLFxuXHRcdGxpc3RlbmVyOiBoZWFkZXJMaW5rQ2xpY2tMaXN0ZW5lcixcblx0fSk7XG59O1xuXG5leHBvcnQge2FkZEhlYWRlckxpbmt9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRDbG9zZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDbG9zZScsXG5cdFx0XHRqYTogJ+mWieOBmOOCiycsXG5cdFx0XHQnemgtaGFucyc6ICflhbPpl60nLFxuXHRcdFx0J3poLWhhbnQnOiAn6Zec6ZaJJyxcblx0XHR9KSxcblx0XHQnTmV0d29yayBlcnJvcic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTmV0d29yayBlcnJvcicsXG5cdFx0XHRqYTogJ+ODjeODg+ODiOODr+ODvOOCr+OCqOODqeODvCcsXG5cdFx0XHQnemgtaGFucyc6ICfnvZHnu5zlvILluLgnLFxuXHRcdFx0J3poLWhhbnQnOiAn57ay6Lev55Ww5bi4Jyxcblx0XHR9KSxcblx0XHQnUGFnZSBVUkwnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1Blcm1hbmVudCBVUkwnLFxuXHRcdFx0J3poLWhhbnMnOiAn6aG16Z2i6ZO+5o6lJyxcblx0XHRcdCd6aC1oYW50JzogJ+mggemdoue2suWdgCcsXG5cdFx0fSksXG5cdFx0J1Blcm1hbmVudCBVUkwnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1Blcm1hbmVudCBVUkwnLFxuXHRcdFx0J3poLWhhbnMnOiAn5rC45LmF6ZO+5o6lJyxcblx0XHRcdCd6aC1oYW50JzogJ+awuOS5hee2suWdgCcsXG5cdFx0fSksXG5cdFx0J1NoYXJlIFVSTCBmb3IgdGhlIHBhZ2UnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1NoYXJlIFVSTCBmb3IgdGhlIHBhZ2UnLFxuXHRcdFx0J3poLWhhbnMnOiAn5YiG5Lqr5pys6aG16ZO+5o6lJyxcblx0XHRcdCd6aC1oYW50JzogJ+WIhuS6q+acrOmggee2suWdgCcsXG5cdFx0fSksXG5cdFx0J1Nob3J0IFVSTCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU2hvcnQgVVJMJyxcblx0XHRcdCd6aC1oYW5zJzogJ+efremTvuaOpScsXG5cdFx0XHQnemgtaGFudCc6ICfnn63ntrLlnYAnLFxuXHRcdH0pLFxuXHRcdCdTaG93IFVSTCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU2hvdyBVUkwnLFxuXHRcdFx0J3poLWhhbnMnOiAn5pi+56S66K+l6aG16ZO+5o6lJyxcblx0XHRcdCd6aC1oYW50JzogJ+mhr+ekuuipsumggee2suWdgCcsXG5cdFx0fSksXG5cdFx0Q29weTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDb3B5Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+WkjeWIticsXG5cdFx0XHQnemgtaGFudCc6ICflvqnoo70nLFxuXHRcdH0pLFxuXHRcdCdVUkwgY29waWVkIHRvIGNsaXBib2FyZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhlIFVSTCBoYXMgYmVlbiBjb3BpZWQgdG8gY2xpcGJvYXJkOiAnLFxuXHRcdFx0J3poLWhhbnMnOiAn5bey5aSN5Yi25pys6aG16ZO+5o6l77yaJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3suW+qeijveacrOmggee2suWdgO+8micsXG5cdFx0fSksXG5cdFx0J0NvcHkgZmFpbGVkJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdGYWlsZWQgdG8gY29weS4nLFxuXHRcdFx0amE6ICfjgrPjg5Tjg7zjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgIInLFxuXHRcdFx0J3poLWhhbnMnOiAn5aSN5Yi25aSx6LSlJyxcblx0XHRcdCd6aC1oYW50JzogJ+ikh+ijveWkseaVlycsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgY29weVRleHQgPSBhc3luYyAodGV4dDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGNvbnN0IGNvcHlXaXRoRXhlY0NvbW1hbmQgPSAoKTogdm9pZCA9PiB7XG5cdFx0Y29uc3QgaGVscGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcblx0XHRoZWxwZXIudmFsdWUgPSB0ZXh0O1xuXHRcdGhlbHBlci5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJ3RydWUnKTtcblx0XHRoZWxwZXIuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuXHRcdGhlbHBlci5zdHlsZS50b3AgPSAnLTk5OTlweCc7XG5cdFx0aGVscGVyLnN0eWxlLmxlZnQgPSAnLTk5OTlweCc7XG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmQoaGVscGVyKTtcblx0XHR0cnkge1xuXHRcdFx0aGVscGVyLnNlbGVjdCgpO1xuXHRcdFx0aWYgKCFkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpIGZhaWxlZCcpO1xuXHRcdFx0fVxuXHRcdH0gZmluYWxseSB7XG5cdFx0XHRoZWxwZXIucmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IGNvcHkgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdFx0aWYgKG5hdmlnYXRvci5jbGlwYm9hcmQgJiYgd2luZG93LmlzU2VjdXJlQ29udGV4dCkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0YXdhaXQgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodGV4dCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Y29weVdpdGhFeGVjQ29tbWFuZCgpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fSBjYXRjaCAoZmFsbGJhY2tFcnJvcikge1xuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ1tTaG9ydFVSTF0gQ2xpcGJvYXJkIEFQSSBhbmQgZmFsbGJhY2sgY29weSBmYWlsZWQ6JywgZXJyb3IsIGZhbGxiYWNrRXJyb3IpO1xuXHRcdFx0XHRcdHRocm93IGZhbGxiYWNrRXJyb3I7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRjb3B5V2l0aEV4ZWNDb21tYW5kKCk7XG5cdH07XG5cblx0dHJ5IHtcblx0XHRhd2FpdCBjb3B5KCk7XG5cdFx0dm9pZCBtdy5ub3RpZnkoZ2V0TWVzc2FnZSgnVVJMIGNvcGllZCB0byBjbGlwYm9hcmQnKSArIHRleHQsIHtcblx0XHRcdHR5cGU6ICdzdWNjZXNzJyxcblx0XHRcdHRhZzogJ1Nob3J0VVJMJyxcblx0XHR9KTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmVycm9yKCdbU2hvcnRVUkxdIEZhaWxlZCB0byBjb3B5IHRleHQ6JywgZXJyb3IpO1xuXHRcdHZvaWQgbXcubm90aWZ5KGdldE1lc3NhZ2UoJ0NvcHkgZmFpbGVkJyksIHtcblx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHR0YWc6ICdTaG9ydFVSTCcsXG5cdFx0fSk7XG5cdH1cbn07XG5cbmV4cG9ydCB7Y29weVRleHR9O1xuIiwgImltcG9ydCB7dHlwZSBBcHAgYXMgVnVlQXBwLCBjcmVhdGVBcHB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgUG9ydGxldExpbmsgZnJvbSAnLi9Qb3J0bGV0TGluay52dWUnO1xuaW1wb3J0IHthZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXJ9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge2dldFNob3J0RG9tYWluc30gZnJvbSAnLi91dGlsL2dldFNob3J0RG9tYWlucyc7XG5cbmNvbnN0IHtza2luLCB3Z1VzZXJOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcbmNvbnN0IGRvbWFpbnMgPSBnZXRTaG9ydERvbWFpbnMoKTtcblxubGV0IHBvcnRsZXRMaW5rRXZlbnRMaXN0ZW5lcjogUmV0dXJuVHlwZTx0eXBlb2YgYWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyPiA9IHtcblx0cmVtb3ZlOiAoKTogdm9pZCA9PiB7fSxcbn07XG5cbmNvbnN0IG9wZW5EaWFsb2cgPSAoaXRlbXM6IHtsYWJlbDogc3RyaW5nOyB0ZXh0OiBzdHJpbmd9W10pOiB2b2lkID0+IHtcblx0Y29uc3Qgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRkb2N1bWVudC5ib2R5LmFwcGVuZChyb290KTtcblxuXHRjb25zdCBhcHA6IFZ1ZUFwcDxFbGVtZW50PiB8IG51bGwgPSBjcmVhdGVBcHAoUG9ydGxldExpbmssIHtcblx0XHRvcGVuOiB0cnVlLFxuXHRcdGl0ZW1zLFxuXHRcdG9uQ2xvc2U6ICgpOiB2b2lkID0+IHtcblx0XHRcdGFwcD8udW5tb3VudCgpO1xuXHRcdFx0cm9vdC5yZW1vdmUoKTtcblx0XHR9LFxuXHR9KTtcblx0YXBwLm1vdW50KHJvb3QpO1xufTtcblxuY29uc3QgYWRkUG9ydGxldExpbmsgPSAobGluazogc3RyaW5nLCBwZXJtYUxpbms6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRjb25zdCBwb3J0bGV0SWQ6ICdwLWNhY3Rpb25zJyB8ICdwLXRiJyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwLWNhY3Rpb25zJykgPyAncC1jYWN0aW9ucycgOiAncC10Yic7XG5cdGxldCBwb3J0bGV0TGluazogSFRNTExJRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdC1zaG9ydGxpbmsnKTtcblx0cG9ydGxldExpbmsgfHw9IG13LnV0aWwuYWRkUG9ydGxldExpbmsoXG5cdFx0cG9ydGxldElkLFxuXHRcdCcjJyxcblx0XHRnZXRNZXNzYWdlKCdTaGFyZSBVUkwgZm9yIHRoZSBwYWdlJyksXG5cdFx0J3Qtc2hvcnRsaW5rJyxcblx0XHRnZXRNZXNzYWdlKCdTaG93IFVSTCcpXG5cdCk7XG5cblx0aWYgKHBvcnRsZXRMaW5rKSB7XG5cdFx0Y29uc3QgcG9ydGxldExpbmtDbGlja0xpc3RlbmVyID0gKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0Y29uc3QgaXRlbXMgPSBbXG5cdFx0XHRcdHtsYWJlbDogZ2V0TWVzc2FnZSgnUGFnZSBVUkwnKSwgdGV4dDogbG9jYXRpb24uaHJlZn0sXG5cdFx0XHRcdHtsYWJlbDogZ2V0TWVzc2FnZSgnUGVybWFuZW50IFVSTCcpLCB0ZXh0OiBgaHR0cHM6Ly8ke2xvY2F0aW9uLmhvc3R9JHtwZXJtYUxpbmt9YH0sXG5cdFx0XHRdO1xuXHRcdFx0aWYgKHdnVXNlck5hbWUpIHtcblx0XHRcdFx0Zm9yIChjb25zdCBbaSwgZG9tYWluXSBvZiBkb21haW5zLmVudHJpZXMoKSkge1xuXHRcdFx0XHRcdGl0ZW1zLnB1c2goe2xhYmVsOiBgJHtnZXRNZXNzYWdlKCdTaG9ydCBVUkwnKX0ke2kgKyAxfWAsIHRleHQ6IGBodHRwczovLyR7ZG9tYWlufSR7bGlua31gfSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG9wZW5EaWFsb2coaXRlbXMpO1xuXHRcdH07XG5cblx0XHRwb3J0bGV0TGlua0V2ZW50TGlzdGVuZXIucmVtb3ZlKCk7XG5cdFx0cG9ydGxldExpbmtFdmVudExpc3RlbmVyID0gYWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyKHtcblx0XHRcdHRhcmdldDogKHBvcnRsZXRMaW5rLmZpcnN0RWxlbWVudENoaWxkID8/IHBvcnRsZXRMaW5rKSBhcyBIVE1MRWxlbWVudCxcblx0XHRcdHR5cGU6ICdjbGljaycsXG5cdFx0XHRsaXN0ZW5lcjogcG9ydGxldExpbmtDbGlja0xpc3RlbmVyLFxuXHRcdH0pO1xuXG5cdFx0aWYgKHNraW4gPT09ICdjaXRpemVuJyAmJiAhJChwb3J0bGV0TGluaykuZmluZCgnI213LXVpLWljb24td2lraW1lZGlhLXNob3J0bGluaycpLmxlbmd0aCkge1xuXHRcdFx0JChwb3J0bGV0TGluaylcblx0XHRcdFx0LmZpbmQoJ2EnKVxuXHRcdFx0XHQucHJlcGVuZChcblx0XHRcdFx0XHQnPHNwYW4gaWQ9XCJtdy11aS1pY29uLXdpa2ltZWRpYS1zaG9ydGxpbmtcIiBjbGFzcz1cImNpdGl6ZW4tdWktaWNvbiBtdy11aS1pY29uLWxpbmsgbXctdWktaWNvbi13aWtpbWVkaWEtbGlua1wiPjwvc3Bhbj4nXG5cdFx0XHRcdCk7XG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQge2FkZFBvcnRsZXRMaW5rfTtcbiIsICI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtDZHhCdXR0b24sIENkeERpYWxvZywgQ2R4SWNvbn0gZnJvbSAnQHdpa2ltZWRpYS9jb2RleCc7XG5pbXBvcnQge3JlZiwgd2F0Y2h9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge2NvcHlUZXh0fSBmcm9tICcuL2NvcHlUZXh0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuaW50ZXJmYWNlIENvcHlJdGVtIHtcblx0bGFiZWw6IHN0cmluZztcblx0dGV4dDogc3RyaW5nO1xufVxuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcblx0b3BlbjogYm9vbGVhbjtcblx0aXRlbXM6IENvcHlJdGVtW107XG5cdG9uQ2xvc2U6ICgpID0+IHZvaWQ7XG59PigpO1xuXG5jb25zdCBlbWl0ID0gZGVmaW5lRW1pdHM8e1xuXHQndXBkYXRlOm9wZW4nOiBbdmFsdWU6IGJvb2xlYW5dO1xufT4oKTtcbmNvbnN0IGlzT3BlbiA9IHJlZihwcm9wcy5vcGVuKTtcblxud2F0Y2goXG5cdCgpID0+IHByb3BzLm9wZW4sXG5cdCh2YWx1ZSkgPT4ge1xuXHRcdGlzT3Blbi52YWx1ZSA9IHZhbHVlO1xuXHR9LFxuXHR7aW1tZWRpYXRlOiB0cnVlfVxuKTtcblxuY29uc3QgY2xvc2UgPSAoKTogdm9pZCA9PiB7XG5cdGlzT3Blbi52YWx1ZSA9IGZhbHNlO1xuXHRlbWl0KCd1cGRhdGU6b3BlbicsIGZhbHNlKTtcblx0cHJvcHMub25DbG9zZSgpO1xufTtcblxuY29uc3QgaGFuZGxlT3BlbkNoYW5nZSA9ICh2YWx1ZTogYm9vbGVhbik6IHZvaWQgPT4ge1xuXHRpc09wZW4udmFsdWUgPSB2YWx1ZTtcblx0aWYgKCF2YWx1ZSkge1xuXHRcdGNsb3NlKCk7XG5cdH1cbn07XG5cbi8qKlxuICogU1ZHIHBhdGhzIGlubGluZWQgZnJvbSBgQHdpa2ltZWRpYS9jb2RleC1pY29uc2AgdjIuNy4wLlxuICpcbiAqIE1lZGlhV2lraSBkb2VzIG5vdCBzaGlwIGEgUmVzb3VyY2VMb2FkZXIgbW9kdWxlIHRoYXQgYnVuZGxlc1xuICogYEB3aWtpbWVkaWEvY29kZXgtaWNvbnNgIChzZWUgaHR0cHM6Ly93d3cubWVkaWF3aWtpLm9yZy93aWtpL0NvZGV4KSxcbiAqIHNvIHRoZSBwYXRoIGRhdGEgaXMgY29waWVkIGhlcmUgdmVyYmF0aW0gYW5kIHJlbmRlcmVkIGFzIGlubGluZSBTVkdcbiAqIHRvIGtlZXAgdGhlIGdhZGdldCBzZWxmLWNvbnRhaW5lZCB3aGlsZSBzdGlsbCBzb3VyY2luZyB0aGUgaWNvbnNcbiAqIGZyb20gYEB3aWtpbWVkaWEvY29kZXgtaWNvbnNgLlxuICpcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vZG9jLndpa2ltZWRpYS5vcmcvY29kZXgvbGF0ZXN0L2ljb25zL31cbiAqL1xuXG4vKiogUGF0aCBmb3IgYGNkeEljb25Db3B5YC4gKi9cbmNvbnN0IGNkeEljb25Db3B5ID0ge1xuXHRwYXRoOiAnTTEzIDE5SDFWN2g2VjFoMTJ2MTJoLTZ6bS02LTZWOUgzdjhoOHYtNHptMi0yaDhWM0g5eicsXG5cdHNob3VsZEZsaXA6IHRydWUsXG59O1xuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cblx0PGNkeC1kaWFsb2dcblx0XHR2LW1vZGVsOm9wZW49XCJpc09wZW5cIlxuXHRcdDp0aXRsZT1cImdldE1lc3NhZ2UoJ1NoYXJlIFVSTCBmb3IgdGhlIHBhZ2UnKVwiXG5cdFx0OmRlZmF1bHQtYWN0aW9uPVwie2xhYmVsOiBnZXRNZXNzYWdlKCdDbG9zZScpfVwiXG5cdFx0OnVzZS1jbG9zZS1idXR0b249XCJ0cnVlXCJcblx0XHRAdXBkYXRlOm9wZW49XCJoYW5kbGVPcGVuQ2hhbmdlXCJcblx0XHRAZGVmYXVsdD1cImNsb3NlXCJcblx0PlxuXHRcdDxkaXYgY2xhc3M9XCJzaG9ydC11cmwtY29weS1saXN0XCI+XG5cdFx0XHQ8ZGl2IHYtZm9yPVwiaXRlbSBpbiBpdGVtc1wiIDprZXk9XCJpdGVtLnRleHRcIiBjbGFzcz1cInNob3J0LXVybC1jb3B5LWl0ZW1cIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cInNob3J0LXVybC1jb3B5LWxhYmVsXCI+e3sgaXRlbS5sYWJlbCB9fTwvZGl2PlxuXHRcdFx0XHQ8Y29kZSBjbGFzcz1cInNob3J0LXVybC1jb3B5LXRleHRcIj57eyBpdGVtLnRleHQgfX08L2NvZGU+XG5cdFx0XHRcdDxjZHgtYnV0dG9uIHdlaWdodD1cIm5vcm1hbFwiIDphcmlhLWxhYmVsPVwiZ2V0TWVzc2FnZSgnQ29weScpXCIgQGNsaWNrPVwiY29weVRleHQoaXRlbS50ZXh0KVwiPlxuXHRcdFx0XHRcdDxjZHgtaWNvbiA6aWNvbj1cImNkeEljb25Db3B5XCIgLz5cblx0XHRcdFx0XHR7eyBnZXRNZXNzYWdlKCdDb3B5JykgfX1cblx0XHRcdFx0PC9jZHgtYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdDwvY2R4LWRpYWxvZz5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cImxlc3NcIj5cbi5zaG9ydC11cmwtY29weS1saXN0IHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAwLjc1cmVtO1xufVxuXG4uc2hvcnQtdXJsLWNvcHktaXRlbSB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGdhcDogMC41cmVtO1xuXHRmbGV4LXdyYXA6IHdyYXA7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNob3J0LXVybC1jb3B5LXRleHQge1xuXHRkaXNwbGF5OiBibG9jaztcblx0cGFkZGluZzogMC41cmVtIDAuNzVyZW07XG5cdGJvcmRlcjogMXB4IHNvbGlkICNlYWVjZjA7XG5cdGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG5cdGJhY2tncm91bmQ6ICNmOGY5ZmE7XG5cdGNvbG9yOiAjMjAyMTIyO1xuXHRmb250LXNpemU6IDAuODc1cmVtO1xuXHR3b3JkLWJyZWFrOiBicmVhay1hbGw7XG5cdGZsZXg6IDEgMSAxMDAlO1xufVxuPC9zdHlsZT5cbiIsICJpbXBvcnQgeyByZW5kZXJMaXN0IGFzIF9yZW5kZXJMaXN0LCBGcmFnbWVudCBhcyBfRnJhZ21lbnQsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jaywgdG9EaXNwbGF5U3RyaW5nIGFzIF90b0Rpc3BsYXlTdHJpbmcsIGNyZWF0ZUVsZW1lbnRWTm9kZSBhcyBfY3JlYXRlRWxlbWVudFZOb2RlLCBjcmVhdGVWTm9kZSBhcyBfY3JlYXRlVk5vZGUsIGNyZWF0ZVRleHRWTm9kZSBhcyBfY3JlYXRlVGV4dFZOb2RlLCB3aXRoQ3R4IGFzIF93aXRoQ3R4LCBjcmVhdGVCbG9jayBhcyBfY3JlYXRlQmxvY2sgfSBmcm9tIFwidnVlXCJcblxuY29uc3QgX2hvaXN0ZWRfMSA9IHsgY2xhc3M6IFwic2hvcnQtdXJsLWNvcHktbGlzdFwiIH1cbmNvbnN0IF9ob2lzdGVkXzIgPSB7IGNsYXNzOiBcInNob3J0LXVybC1jb3B5LWxhYmVsXCIgfVxuY29uc3QgX2hvaXN0ZWRfMyA9IHsgY2xhc3M6IFwic2hvcnQtdXJsLWNvcHktdGV4dFwiIH1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcbiAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jaygkc2V0dXBbXCJDZHhEaWFsb2dcIl0sIHtcbiAgICBvcGVuOiAkc2V0dXAuaXNPcGVuLFxuICAgIFwib25VcGRhdGU6b3BlblwiOiBbXG4gICAgICBfY2FjaGVbMF0gfHwgKF9jYWNoZVswXSA9ICRldmVudCA9PiAoKCRzZXR1cC5pc09wZW4pID0gJGV2ZW50KSksXG4gICAgICAkc2V0dXAuaGFuZGxlT3BlbkNoYW5nZVxuICAgIF0sXG4gICAgdGl0bGU6ICRzZXR1cC5nZXRNZXNzYWdlKCdTaGFyZSBVUkwgZm9yIHRoZSBwYWdlJyksXG4gICAgXCJkZWZhdWx0LWFjdGlvblwiOiB7bGFiZWw6ICRzZXR1cC5nZXRNZXNzYWdlKCdDbG9zZScpfSxcbiAgICBcInVzZS1jbG9zZS1idXR0b25cIjogdHJ1ZSxcbiAgICBvbkRlZmF1bHQ6ICRzZXR1cC5jbG9zZVxuICB9LCB7XG4gICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF8xLCBbXG4gICAgICAgIChfb3BlbkJsb2NrKHRydWUpLCBfY3JlYXRlRWxlbWVudEJsb2NrKF9GcmFnbWVudCwgbnVsbCwgX3JlbmRlckxpc3QoJHByb3BzLml0ZW1zLCAoaXRlbSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZGl2XCIsIHtcbiAgICAgICAgICAgIGtleTogaXRlbS50ZXh0LFxuICAgICAgICAgICAgY2xhc3M6IFwic2hvcnQtdXJsLWNvcHktaXRlbVwiXG4gICAgICAgICAgfSwgW1xuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF8yLCBfdG9EaXNwbGF5U3RyaW5nKGl0ZW0ubGFiZWwpLCAxIC8qIFRFWFQgKi8pLFxuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImNvZGVcIiwgX2hvaXN0ZWRfMywgX3RvRGlzcGxheVN0cmluZyhpdGVtLnRleHQpLCAxIC8qIFRFWFQgKi8pLFxuICAgICAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkNkeEJ1dHRvblwiXSwge1xuICAgICAgICAgICAgICB3ZWlnaHQ6IFwibm9ybWFsXCIsXG4gICAgICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiAkc2V0dXAuZ2V0TWVzc2FnZSgnQ29weScpLFxuICAgICAgICAgICAgICBvbkNsaWNrOiAkZXZlbnQgPT4gKCRzZXR1cC5jb3B5VGV4dChpdGVtLnRleHQpKVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgICAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkNkeEljb25cIl0sIHsgaWNvbjogJHNldHVwLmNkeEljb25Db3B5IH0pLFxuICAgICAgICAgICAgICAgIF9jcmVhdGVUZXh0Vk5vZGUoXCIgXCIgKyBfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5nZXRNZXNzYWdlKCdDb3B5JykpLCAxIC8qIFRFWFQgKi8pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgICAgICAgICAgfSwgOCAvKiBQUk9QUyAqLywgW1wiYXJpYS1sYWJlbFwiLCBcIm9uQ2xpY2tcIl0pXG4gICAgICAgICAgXSkpXG4gICAgICAgIH0pLCAxMjggLyogS0VZRURfRlJBR01FTlQgKi8pKVxuICAgICAgXSlcbiAgICBdKSxcbiAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICB9LCA4IC8qIFBST1BTICovLCBbXCJvcGVuXCIsIFwidGl0bGVcIiwgXCJkZWZhdWx0LWFjdGlvblwiXSkpXG59IiwgImltcG9ydCBzY3JpcHQgZnJvbSBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcU2hvcnRVUkxcXFxcbW9kdWxlc1xcXFxQb3J0bGV0TGluay52dWU/dHlwZT1zY3JpcHRcIjtpbXBvcnQgXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFNob3J0VVJMXFxcXG1vZHVsZXNcXFxcUG9ydGxldExpbmsudnVlP3R5cGU9c3R5bGUmaW5kZXg9MFwiO2ltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFNob3J0VVJMXFxcXG1vZHVsZXNcXFxcUG9ydGxldExpbmsudnVlP3R5cGU9dGVtcGxhdGVcIjsgc2NyaXB0LnJlbmRlciA9IHJlbmRlcjtzY3JpcHQuX19maWxlID0gXCJzcmNcXFxcU2hvcnRVUkxcXFxcbW9kdWxlc1xcXFxQb3J0bGV0TGluay52dWVcIjtzY3JpcHQuX19zY29wZUlkID0gXCJkYXRhLXYtN2RhYjdiYWVcIjtleHBvcnQgZGVmYXVsdCBzY3JpcHQ7IiwgImltcG9ydCB7YWRkSGVhZGVyTGlua30gZnJvbSAnLi9hZGRIZWFkZXJMaW5rJztcbmltcG9ydCB7YWRkUG9ydGxldExpbmt9IGZyb20gJy4vYWRkUG9ydGxldExpbmsnO1xuXG5jb25zdCBidWlsZExpbmsgPSAob2xkSWQ6IG51bWJlciB8IG51bGwsIGRpZmZJZDogbnVtYmVyKTogdm9pZCA9PiB7XG5cdGxldCBsaW5rOiBzdHJpbmcgPSAnL2QnO1xuXHRsZXQgcGVybWFMaW5rOiBzdHJpbmcgPSAnL3dpa2kvU3BlY2lhbDpEaWZmJztcblx0aWYgKG9sZElkKSB7XG5cdFx0bGluayArPSBgLyR7b2xkSWR9YDtcblx0XHRwZXJtYUxpbmsgKz0gYC8ke29sZElkfWA7XG5cdH1cblx0bGluayArPSBgLyR7ZGlmZklkfWA7XG5cdHBlcm1hTGluayArPSBgLyR7ZGlmZklkfWA7XG5cblx0YWRkSGVhZGVyTGluayhsaW5rLCBwZXJtYUxpbmspO1xuXHRhZGRQb3J0bGV0TGluayhsaW5rLCBwZXJtYUxpbmspO1xufTtcblxuZXhwb3J0IHtidWlsZExpbmt9O1xuIiwgIntcblx0XCJ2ZXJzaW9uXCI6IFwiMi4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYFNob3J0VVJMLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4uL2FwaSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbnR5cGUgQ29tcGFyZVJlc3BvbnNlID0ge1xuXHRjb21wYXJlPzoge1xuXHRcdGZyb21yZXZpZDogbnVtYmVyO1xuXHR9O1xufTtcblxuY29uc3QgcGFyYW1ldGVyczogQXBpQ29tcGFyZVBhZ2VzUGFyYW1zID0ge1xuXHRhY3Rpb246ICdjb21wYXJlJyxcblx0Zm9ybWF0OiAnanNvbicsXG5cdGZvcm1hdHZlcnNpb246ICcyJyxcblx0cHJvcDogJ2lkcycsXG5cdHRvcmVsYXRpdmU6ICdwcmV2Jyxcblx0c21heGFnZTogNjAwLFxuXHRtYXhhZ2U6IDYwMCxcbn07XG5cbmNvbnN0IHF1ZXJ5QXBpID0gYXN5bmMgKGRpZmZJZDogbnVtYmVyKTogUHJvbWlzZTxDb21wYXJlUmVzcG9uc2U+ID0+IHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gYXdhaXQgYXBpLmdldCh7XG5cdFx0XHQuLi5wYXJhbWV0ZXJzLFxuXHRcdFx0ZnJvbXJldjogZGlmZklkLFxuXHRcdH0gYXMgdHlwZW9mIHBhcmFtZXRlcnMpO1xuXHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ1tTaG9ydFVSTF0gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdFx0dG9hc3RpZnkoXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ05ldHdvcmsgZXJyb3InKSxcblx0XHRcdFx0Y2xvc2U6IHRydWUsXG5cdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdH0sXG5cdFx0XHQnZXJyb3InXG5cdFx0KTtcblxuXHRcdHJldHVybiB7fTtcblx0fVxufTtcblxuZXhwb3J0IHtxdWVyeUFwaX07XG4iLCAiaW1wb3J0IHtidWlsZExpbmt9IGZyb20gJy4vYnVpbGRMaW5rJztcbmltcG9ydCB7cXVlcnlBcGl9IGZyb20gJy4vdXRpbC9xdWVyeUFwaSc7XG5cbmNvbnN0IGNvbXBhcmVXaXRoUmVtb3RlRGlmZklkID0gYXN5bmMgKGRpZmZJZDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGNvbnN0IHJlc3BvbnNlOiBBd2FpdGVkPFJldHVyblR5cGU8dHlwZW9mIHF1ZXJ5QXBpPj4gPSBhd2FpdCBxdWVyeUFwaShkaWZmSWQpO1xuXHRpZiAoZGlmZklkID09PSBtdy5jb25maWcuZ2V0KCd3Z0RpZmZOZXdJZCcpICYmIHJlc3BvbnNlWydjb21wYXJlJ10/LmZyb21yZXZpZCA9PT0gbXcuY29uZmlnLmdldCgnd2dEaWZmT2xkSWQnKSkge1xuXHRcdGJ1aWxkTGluaygwLCBkaWZmSWQpO1xuXHR9XG59O1xuXG5leHBvcnQge2NvbXBhcmVXaXRoUmVtb3RlRGlmZklkfTtcbiIsICJpbXBvcnQge2FkZEhlYWRlckxpbmt9IGZyb20gJy4vYWRkSGVhZGVyTGluayc7XG5pbXBvcnQge2FkZFBvcnRsZXRMaW5rfSBmcm9tICcuL2FkZFBvcnRsZXRMaW5rJztcbmltcG9ydCB7YnVpbGRMaW5rfSBmcm9tICcuL2J1aWxkTGluayc7XG5pbXBvcnQge2NvbXBhcmVXaXRoUmVtb3RlRGlmZklkfSBmcm9tICcuL2NvbXBhcmVXaXRoUmVtb3RlRGlmZklkJztcblxuY29uc3QgcHJvY2Vzc0lkID0gKFxuXHRpc1JldmlzaW9uUGFnZTogYm9vbGVhbixcblx0e1xuXHRcdGFydGljbGVJZCxcblx0XHRkaWZmSWQsXG5cdFx0b2xkSWQsXG5cdFx0cmV2aXNpb25JZCxcblx0fToge1xuXHRcdGFydGljbGVJZDogbnVtYmVyO1xuXHRcdGRpZmZJZDogbnVtYmVyIHwgbnVsbDtcblx0XHRvbGRJZDogbnVtYmVyIHwgbnVsbDtcblx0XHRyZXZpc2lvbklkOiBudW1iZXIgfCBudWxsO1xuXHR9XG4pOiB2b2lkID0+IHtcblx0aWYgKGRpZmZJZCkge1xuXHRcdGJ1aWxkTGluayhvbGRJZCwgZGlmZklkKTtcblx0XHRpZiAob2xkSWQpIHtcblx0XHRcdHZvaWQgY29tcGFyZVdpdGhSZW1vdGVEaWZmSWQoZGlmZklkKTtcblx0XHR9XG5cdH0gZWxzZSBpZiAocmV2aXNpb25JZCAmJiBpc1JldmlzaW9uUGFnZSkge1xuXHRcdGFkZEhlYWRlckxpbmsoYC9wLyR7cmV2aXNpb25JZH1gLCBgL3dpa2kvU3BlY2lhbDpQZXJtYWxpbmsvJHtyZXZpc2lvbklkfWApO1xuXHRcdGFkZFBvcnRsZXRMaW5rKGAvcC8ke3JldmlzaW9uSWR9YCwgYC93aWtpL1NwZWNpYWw6UGVybWFsaW5rLyR7cmV2aXNpb25JZH1gKTtcblx0fSBlbHNlIGlmIChhcnRpY2xlSWQpIHtcblx0XHRhZGRIZWFkZXJMaW5rKGAvYy8ke2FydGljbGVJZH1gLCBgL2luZGV4LnBocD9jdXJpZD0ke2FydGljbGVJZH1gKTtcblx0XHRhZGRQb3J0bGV0TGluayhgL2MvJHthcnRpY2xlSWR9YCwgYC9pbmRleC5waHA/Y3VyaWQ9JHthcnRpY2xlSWR9YCk7XG5cdH1cbn07XG5cbmV4cG9ydCB7cHJvY2Vzc0lkfTtcbiIsICJpbXBvcnQge2NoZWNrUmV2aXNpb25QYWdlfSBmcm9tICcuL21vZHVsZXMvdXRpbC9jaGVja1JldmlzaW9uUGFnZSc7XG5pbXBvcnQge2dldFNob3J0RG9tYWluc30gZnJvbSAnLi9tb2R1bGVzL3V0aWwvZ2V0U2hvcnREb21haW5zJztcbmltcG9ydCB7cHJvY2Vzc0lkfSBmcm9tICcuL21vZHVsZXMvcHJvY2Vzc0lkJztcblxuKGZ1bmN0aW9uIHNob3J0VVJMKCkge1xuXHRjb25zdCB7d2dBY3Rpb24sIHdnQXJ0aWNsZUlkLCB3Z05hbWVzcGFjZU51bWJlcn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0Y29uc3QgZG9tYWlucyA9IGdldFNob3J0RG9tYWlucygpO1xuXG5cdGlmICghZG9tYWlucy5sZW5ndGggfHwgd2dOYW1lc3BhY2VOdW1iZXIgPCAwKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKHdnQWN0aW9uID09PSAndmlldycgJiYgd2dBcnRpY2xlSWQpIHtcblx0XHRtdy5ob29rKCd3aWtpcGFnZS5jb250ZW50JykuYWRkKCgkY29udGVudCk6IHZvaWQgPT4ge1xuXHRcdFx0aWYgKCRjb250ZW50LmF0dHIoJ2lkJykgIT09ICdtdy1jb250ZW50LXRleHQnKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgaXNSZXZpc2lvblBhZ2U6IGJvb2xlYW4gPSBjaGVja1JldmlzaW9uUGFnZSgkY29udGVudCk7XG5cblx0XHRcdHByb2Nlc3NJZChpc1JldmlzaW9uUGFnZSwge1xuXHRcdFx0XHRhcnRpY2xlSWQ6IG13LmNvbmZpZy5nZXQoJ3dnQXJ0aWNsZUlkJyksXG5cdFx0XHRcdGRpZmZJZDogbXcuY29uZmlnLmdldCgnd2dEaWZmTmV3SWQnKSxcblx0XHRcdFx0b2xkSWQ6IG13LmNvbmZpZy5nZXQoJ3dnRGlmZk9sZElkJyksXG5cdFx0XHRcdHJldmlzaW9uSWQ6IG13LmNvbmZpZy5nZXQoJ3dnUmV2aXNpb25JZCcpLFxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsb0JBQXFCQyxjQUE4QjtBQUN4RCxVQUNFQSxTQUFTQyxLQUFLLDhCQUE4QixFQUFFQyxVQUM5Q0YsU0FBU0MsS0FBSyw0Q0FBNEMsRUFBRUMsVUFBVTtBQUV6RTs7QUNMQSxJQUFNQyxrQkFBa0JBLE1BQWdCO0FBQ3ZDLFFBQU07SUFBQ0M7RUFBUSxJQUFJQyxHQUFHQyxPQUFPQyxJQUFJO0FBQ2pDLE1BQUlDLFdBQW9CLENBQUE7QUFFeEIsVUFBUUosVUFBQTtJQUNQLEtBQUs7QUFDSkksaUJBQVUsQ0FBQyxXQUFXLFNBQVM7QUFDL0I7SUFDRCxLQUFLO0FBQ0pBLGlCQUFVLENBQUMsYUFBYSxXQUFXO0FBQ25DO0lBQ0QsS0FBSztBQUNKQSxpQkFBVSxDQUFDLGVBQWUsYUFBYTtBQUN2QztFQUNGO0FBRUEsU0FBT0E7QUFDUjs7QUNoQkEsSUFBQUMscUJBQTBDQyxRQUFBLGlCQUFBOztBQ0QxQyxJQUFBQyxvQkFBdUJELFFBQUEsaUJBQUE7QUFFdkIsSUFBTUUsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsUUFBQSxHQUFPRixrQkFBQUcsVUFBUztNQUNmQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01B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LGtCQUFBLE1BQUFlLE9BQW9CMEgsU0FBUyxHQUFBLG9CQUFBMUgsT0FBd0IwSCxTQUFTLENBQUU7QUFDaEVuRCxtQkFBQSxNQUFBdkUsT0FBcUIwSCxTQUFTLEdBQUEsb0JBQUExSCxPQUF3QjBILFNBQVMsQ0FBRTtFQUNsRTtBQUNEOztDQzNCQyxTQUFTRSxXQUFXO0FBQ3BCLFFBQU07SUFBQ0M7SUFBVUM7SUFBYUM7RUFBaUIsSUFBSXJNLEdBQUdDLE9BQU9DLElBQUk7QUFFakUsUUFBTUMsV0FBVUwsZ0JBQWdCO0FBRWhDLE1BQUksQ0FBQ0ssU0FBUU4sVUFBVXdNLG9CQUFvQixHQUFHO0FBQzdDO0VBQ0Q7QUFFQSxNQUFJRixhQUFhLFVBQVVDLGFBQWE7QUFDdkNwTSxPQUFHc00sS0FBSyxrQkFBa0IsRUFBRUMsSUFBSzVNLGNBQW1CO0FBQ25ELFVBQUlBLFNBQVM2TSxLQUFLLElBQUksTUFBTSxtQkFBbUI7QUFDOUM7TUFDRDtBQUVBLFlBQU1ULGlCQUEwQnJNLGtCQUFrQkMsUUFBUTtBQUUxRG1NLGdCQUFVQyxnQkFBZ0I7UUFDekJDLFdBQVdoTSxHQUFHQyxPQUFPQyxJQUFJLGFBQWE7UUFDdENrSyxRQUFRcEssR0FBR0MsT0FBT0MsSUFBSSxhQUFhO1FBQ25DaUssT0FBT25LLEdBQUdDLE9BQU9DLElBQUksYUFBYTtRQUNsQytMLFlBQVlqTSxHQUFHQyxPQUFPQyxJQUFJLGNBQWM7TUFDekMsQ0FBQztJQUNGLENBQUM7RUFDRjtBQUNELEdBQUc7IiwKICAibmFtZXMiOiBbImNoZWNrUmV2aXNpb25QYWdlIiwgIiRjb250ZW50IiwgImZpbmQiLCAibGVuZ3RoIiwgImdldFNob3J0RG9tYWlucyIsICJ3Z1dpa2lJRCIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImRvbWFpbnMzIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJDbG9zZSIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJDb3B5IiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJjb3B5VGV4dCIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInRleHQiLCAiY29weVdpdGhFeGVjQ29tbWFuZCIsICJoZWxwZXIiLCAiZG9jdW1lbnQiLCAiY3JlYXRlRWxlbWVudCIsICJ2YWx1ZSIsICJzZXRBdHRyaWJ1dGUiLCAic3R5bGUiLCAicG9zaXRpb24iLCAidG9wIiwgImxlZnQiLCAiYm9keSIsICJhcHBlbmQiLCAic2VsZWN0IiwgImV4ZWNDb21tYW5kIiwgIkVycm9yIiwgInJlbW92ZSIsICJjb3B5IiwgIl9yZWYyIiwgIm5hdmlnYXRvciIsICJjbGlwYm9hcmQiLCAid2luZG93IiwgImlzU2VjdXJlQ29udGV4dCIsICJ3cml0ZVRleHQiLCAiZXJyb3IiLCAiZmFsbGJhY2tFcnJvciIsICJjb25zb2xlIiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJub3RpZnkiLCAidHlwZSIsICJ0YWciLCAiX3giLCAid2dVc2VyTmFtZSIsICJkb21haW5zIiwgImhlYWRlckxpbmtFdmVudExpc3RlbmVyIiwgImFkZEhlYWRlckxpbmsiLCAibGluayIsICJwZXJtYUxpbmsiLCAiaGVhZGVyTGluayIsICJxdWVyeVNlbGVjdG9yIiwgIl9kb2N1bWVudCRxdWVyeVNlbGVjdCIsICJocmVmIiwgImljb24iLCAiY2xhc3NOYW1lIiwgImhlYWRlckVsZW1lbnQiLCAiaWQiLCAicHJlcGVuZCIsICJoZWFkZXJMaW5rQ2xpY2tMaXN0ZW5lciIsICJldmVudCIsICJwcmV2ZW50RGVmYXVsdCIsICJjb25jYXQiLCAibG9jYXRpb24iLCAiaG9zdCIsICJhZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXIiLCAidGFyZ2V0IiwgImxpc3RlbmVyIiwgImltcG9ydF92dWU0IiwgImltcG9ydF9jb2RleCIsICJpbXBvcnRfdnVlMiIsICJwcm9wcyIsICJfX3Byb3BzIiwgImVtaXQiLCAiX19lbWl0IiwgImlzT3BlbiIsICJyZWYiLCAib3BlbiIsICJ3YXRjaCIsICJpbW1lZGlhdGUiLCAiY2xvc2UiLCAib25DbG9zZSIsICJoYW5kbGVPcGVuQ2hhbmdlIiwgImNkeEljb25Db3B5IiwgInBhdGgiLCAic2hvdWxkRmxpcCIsICJpbXBvcnRfdnVlMyIsICJfaG9pc3RlZF8xIiwgImNsYXNzIiwgIl9ob2lzdGVkXzIiLCAiX2hvaXN0ZWRfMyIsICJyZW5kZXIiLCAiX2N0eCIsICJfY2FjaGUiLCAiJHByb3BzIiwgIiRzZXR1cCIsICIkZGF0YSIsICIkb3B0aW9ucyIsICJvcGVuQmxvY2siLCAiY3JlYXRlQmxvY2siLCAiJGV2ZW50IiwgInRpdGxlIiwgImxhYmVsIiwgIm9uRGVmYXVsdCIsICJkZWZhdWx0IiwgIndpdGhDdHgiLCAiY3JlYXRlRWxlbWVudFZOb2RlIiwgImNyZWF0ZUVsZW1lbnRCbG9jayIsICJGcmFnbWVudCIsICJyZW5kZXJMaXN0IiwgIml0ZW1zIiwgIml0ZW0iLCAidG9EaXNwbGF5U3RyaW5nIiwgImNyZWF0ZVZOb2RlIiwgIndlaWdodCIsICJvbkNsaWNrIiwgImNyZWF0ZVRleHRWTm9kZSIsICJfIiwgIlBvcnRsZXRMaW5rX2RlZmF1bHQiLCAiX19maWxlIiwgIl9fc2NvcGVJZCIsICJQb3J0bGV0TGlua19kZWZhdWx0MiIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAic2tpbiIsICJ3Z1VzZXJOYW1lMiIsICJkb21haW5zMiIsICJwb3J0bGV0TGlua0V2ZW50TGlzdGVuZXIiLCAib3BlbkRpYWxvZyIsICJyb290IiwgImFwcCIsICJjcmVhdGVBcHAiLCAidW5tb3VudCIsICJtb3VudCIsICJhZGRQb3J0bGV0TGluayIsICJwb3J0bGV0SWQiLCAicG9ydGxldExpbmsiLCAidXRpbCIsICJfcG9ydGxldExpbmskZmlyc3RFbGUiLCAicG9ydGxldExpbmtDbGlja0xpc3RlbmVyIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJlbnRyaWVzIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImkiLCAiZG9tYWluIiwgInB1c2giLCAiZXJyIiwgImUiLCAiZiIsICJmaXJzdEVsZW1lbnRDaGlsZCIsICIkIiwgImJ1aWxkTGluayIsICJvbGRJZCIsICJkaWZmSWQiLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAiYXBpIiwgImluaXRNd0FwaSIsICJpbXBvcnRfZXh0X2dhZGdldDUiLCAicGFyYW1ldGVycyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicHJvcCIsICJ0b3JlbGF0aXZlIiwgInNtYXhhZ2UiLCAibWF4YWdlIiwgInF1ZXJ5QXBpIiwgIl9yZWYzIiwgImZyb21yZXYiLCAidG9hc3RpZnkiLCAiZHVyYXRpb24iLCAiX3gyIiwgImNvbXBhcmVXaXRoUmVtb3RlRGlmZklkIiwgIl9yZWY0IiwgIl9yZXNwb25zZSRjb21wYXJlIiwgInJlc3BvbnNlIiwgImZyb21yZXZpZCIsICJfeDMiLCAicHJvY2Vzc0lkIiwgImlzUmV2aXNpb25QYWdlIiwgImFydGljbGVJZCIsICJyZXZpc2lvbklkIiwgInNob3J0VVJMIiwgIndnQWN0aW9uIiwgIndnQXJ0aWNsZUlkIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgImhvb2siLCAiYWRkIiwgImF0dHIiXQp9Cg==

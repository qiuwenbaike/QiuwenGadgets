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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Nob3J0VVJML21vZHVsZXMvdXRpbC9jaGVja1JldmlzaW9uUGFnZS50cyIsICJzcmMvU2hvcnRVUkwvbW9kdWxlcy91dGlsL2dldFNob3J0RG9tYWlucy50cyIsICJzcmMvU2hvcnRVUkwvbW9kdWxlcy9hZGRIZWFkZXJMaW5rLnRzIiwgInNyYy9TaG9ydFVSTC9tb2R1bGVzL2kxOG4udHMiLCAic3JjL1Nob3J0VVJML21vZHVsZXMvY29weVRleHQudHMiLCAic3JjL1Nob3J0VVJML21vZHVsZXMvYWRkUG9ydGxldExpbmsudHMiLCAiZGlzdC9TaG9ydFVSTC9zcmMvU2hvcnRVUkwvbW9kdWxlcy9Qb3J0bGV0TGluay52dWUiLCAic2ZjLXRlbXBsYXRlOkU6XFxDb2Rlc1xcUWl1d2VuXFxRaXV3ZW5HYWRnZXRzXFxzcmNcXFNob3J0VVJMXFxtb2R1bGVzXFxQb3J0bGV0TGluay52dWU/dHlwZT10ZW1wbGF0ZSIsICJzcmMvU2hvcnRVUkwvbW9kdWxlcy9Qb3J0bGV0TGluay52dWUiLCAic3JjL1Nob3J0VVJML21vZHVsZXMvYnVpbGRMaW5rLnRzIiwgInNyYy9TaG9ydFVSTC9vcHRpb25zLmpzb24iLCAic3JjL1Nob3J0VVJML21vZHVsZXMvYXBpLnRzIiwgInNyYy9TaG9ydFVSTC9tb2R1bGVzL3V0aWwvcXVlcnlBcGkudHMiLCAic3JjL1Nob3J0VVJML21vZHVsZXMvY29tcGFyZVdpdGhSZW1vdGVEaWZmSWQudHMiLCAic3JjL1Nob3J0VVJML21vZHVsZXMvcHJvY2Vzc0lkLnRzIiwgInNyYy9TaG9ydFVSTC9TaG9ydFVSTC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgY2hlY2tSZXZpc2lvblBhZ2UgPSAoJGNvbnRlbnQ6IEpRdWVyeSk6IGJvb2xlYW4gPT4ge1xuXHRyZXR1cm4gKFxuXHRcdCgkY29udGVudC5maW5kKCcjY29udGVudFN1YiAjbXctcmV2aXNpb24tbmF2JykubGVuZ3RoIHx8XG5cdFx0XHQkY29udGVudC5maW5kKCdtYWluI2NvbnRlbnQ+LnByZS1jb250ZW50ICNtdy1yZXZpc2lvbi1uYXYnKS5sZW5ndGgpID4gMFxuXHQpO1xufTtcblxuZXhwb3J0IHtjaGVja1JldmlzaW9uUGFnZX07XG4iLCAiY29uc3QgZ2V0U2hvcnREb21haW5zID0gKCk6IHN0cmluZ1tdID0+IHtcblx0Y29uc3Qge3dnV2lraUlEfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0bGV0IGRvbWFpbnM6IHN0cmluZ1tdID0gW107XG5cblx0c3dpdGNoICh3Z1dpa2lJRCkge1xuXHRcdGNhc2UgJ3pocWl1d2VuYmFpa2UnOlxuXHRcdFx0ZG9tYWlucyA9IFsncXdiay5jYycsICdia3d6LmNuJ107XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICdsaWNlbmNld2lraSc6XG5cdFx0XHRkb21haW5zID0gWydsLnF3YmsuY2MnLCAnbC5ia3d6LmNuJ107XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICdtbmNxaXV3ZW5iYWlrZSc6XG5cdFx0XHRkb21haW5zID0gWydtbmMucXdiay5jYycsICdtbmMuYmt3ei5jbiddO1xuXHRcdFx0YnJlYWs7XG5cdH1cblxuXHRyZXR1cm4gZG9tYWlucztcbn07XG5cbmV4cG9ydCB7Z2V0U2hvcnREb21haW5zfTtcbiIsICJpbXBvcnQgJy4vYWRkSGVhZGVyTGluay5sZXNzJztcbmltcG9ydCB7YWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtjb3B5VGV4dH0gZnJvbSAnLi9jb3B5VGV4dCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge2dldFNob3J0RG9tYWluc30gZnJvbSAnLi91dGlsL2dldFNob3J0RG9tYWlucyc7XG5cbmNvbnN0IHt3Z1VzZXJOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcbmNvbnN0IGRvbWFpbnMgPSBnZXRTaG9ydERvbWFpbnMoKTtcblxubGV0IGhlYWRlckxpbmtFdmVudExpc3RlbmVyOiBSZXR1cm5UeXBlPHR5cGVvZiBhZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXI+ID0ge1xuXHRyZW1vdmU6ICgpOiB2b2lkID0+IHt9LFxufTtcblxuY29uc3QgYWRkSGVhZGVyTGluayA9IChsaW5rOiBzdHJpbmcsIHBlcm1hTGluazogc3RyaW5nKTogdm9pZCA9PiB7XG5cdGxldCBoZWFkZXJMaW5rOiBIVE1MQW5jaG9yRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXctaW5kaWNhdG9yLXNob3J0VVJMIGEnKTtcblx0aWYgKCFoZWFkZXJMaW5rKSB7XG5cdFx0aGVhZGVyTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblx0XHRoZWFkZXJMaW5rLmhyZWYgPSAnIyc7XG5cdFx0aGVhZGVyTGluay5zZXRBdHRyaWJ1dGUoXG5cdFx0XHQnYXJpYS1sYWJlbCcsXG5cdFx0XHR3Z1VzZXJOYW1lID8gZ2V0TWVzc2FnZSgnU2hvcnQgVVJMJykgOiBnZXRNZXNzYWdlKCdTaGFyZSBVUkwgZm9yIHRoZSBwYWdlJylcblx0XHQpO1xuXHRcdGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0aWNvbi5jbGFzc05hbWUgPSAnc2hvcnQtdXJsLWxpbmstaWNvbic7XG5cdFx0aGVhZGVyTGluay5hcHBlbmQoaWNvbik7XG5cdFx0Y29uc3QgaGVhZGVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdGhlYWRlckVsZW1lbnQuY2xhc3NOYW1lID0gJ213LWluZGljYXRvcic7XG5cdFx0aGVhZGVyRWxlbWVudC5pZCA9ICdtdy1pbmRpY2F0b3Itc2hvcnRVUkwnO1xuXHRcdGhlYWRlckVsZW1lbnQuYXBwZW5kKGhlYWRlckxpbmspO1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tdy1pbmRpY2F0b3JzJyk/LnByZXBlbmQoaGVhZGVyRWxlbWVudCk7XG5cdH1cblxuXHRjb25zdCBoZWFkZXJMaW5rQ2xpY2tMaXN0ZW5lciA9IChldmVudDogTW91c2VFdmVudCk6IHZvaWQgPT4ge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0Y29weVRleHQod2dVc2VyTmFtZSA/IGBodHRwczovLyR7ZG9tYWluc1swXX0ke2xpbmt9YCA6IGBodHRwczovLyR7bG9jYXRpb24uaG9zdH0ke3Blcm1hTGlua31gKTtcblx0fTtcblxuXHRoZWFkZXJMaW5rRXZlbnRMaXN0ZW5lci5yZW1vdmUoKTtcblx0aGVhZGVyTGlua0V2ZW50TGlzdGVuZXIgPSBhZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXIoe1xuXHRcdHRhcmdldDogaGVhZGVyTGluayxcblx0XHR0eXBlOiAnY2xpY2snLFxuXHRcdGxpc3RlbmVyOiBoZWFkZXJMaW5rQ2xpY2tMaXN0ZW5lcixcblx0fSk7XG59O1xuXG5leHBvcnQge2FkZEhlYWRlckxpbmt9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRDbG9zZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDbG9zZScsXG5cdFx0XHRqYTogJ+mWieOBmOOCiycsXG5cdFx0XHQnemgtaGFucyc6ICflhbPpl60nLFxuXHRcdFx0J3poLWhhbnQnOiAn6Zec6ZaJJyxcblx0XHR9KSxcblx0XHQnTmV0d29yayBlcnJvcic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnTmV0d29yayBlcnJvcicsXG5cdFx0XHRqYTogJ+ODjeODg+ODiOODr+ODvOOCr+OCqOODqeODvCcsXG5cdFx0XHQnemgtaGFucyc6ICfnvZHnu5zlvILluLgnLFxuXHRcdFx0J3poLWhhbnQnOiAn57ay6Lev55Ww5bi4Jyxcblx0XHR9KSxcblx0XHQnUGFnZSBVUkwnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1Blcm1hbmVudCBVUkwnLFxuXHRcdFx0J3poLWhhbnMnOiAn6aG16Z2i6ZO+5o6lJyxcblx0XHRcdCd6aC1oYW50JzogJ+mggemdoue2suWdgCcsXG5cdFx0fSksXG5cdFx0J1Blcm1hbmVudCBVUkwnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1Blcm1hbmVudCBVUkwnLFxuXHRcdFx0J3poLWhhbnMnOiAn5rC45LmF6ZO+5o6lJyxcblx0XHRcdCd6aC1oYW50JzogJ+awuOS5hee2suWdgCcsXG5cdFx0fSksXG5cdFx0J1NoYXJlIFVSTCBmb3IgdGhlIHBhZ2UnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1NoYXJlIFVSTCBmb3IgdGhlIHBhZ2UnLFxuXHRcdFx0J3poLWhhbnMnOiAn5YiG5Lqr5pys6aG16ZO+5o6lJyxcblx0XHRcdCd6aC1oYW50JzogJ+WIhuS6q+acrOmggee2suWdgCcsXG5cdFx0fSksXG5cdFx0J1Nob3J0IFVSTCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU2hvcnQgVVJMJyxcblx0XHRcdCd6aC1oYW5zJzogJ+efremTvuaOpScsXG5cdFx0XHQnemgtaGFudCc6ICfnn63ntrLlnYAnLFxuXHRcdH0pLFxuXHRcdCdTaG93IFVSTCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU2hvdyBVUkwnLFxuXHRcdFx0J3poLWhhbnMnOiAn5pi+56S66K+l6aG16ZO+5o6lJyxcblx0XHRcdCd6aC1oYW50JzogJ+mhr+ekuuipsumggee2suWdgCcsXG5cdFx0fSksXG5cdFx0Q29weTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDb3B5Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+WkjeWIticsXG5cdFx0XHQnemgtaGFudCc6ICflvqnoo70nLFxuXHRcdH0pLFxuXHRcdCdVUkwgY29waWVkIHRvIGNsaXBib2FyZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGhlIFVSTCBoYXMgYmVlbiBjb3BpZWQgdG8gY2xpcGJvYXJkOiAnLFxuXHRcdFx0J3poLWhhbnMnOiAn5bey5aSN5Yi25pys6aG16ZO+5o6l77yaJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3suW+qeijveacrOmggee2suWdgO+8micsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgY29weVRleHQgPSAodGV4dDogc3RyaW5nKTogdm9pZCA9PiB7XG5cdChhc3luYyAoKSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGlmIChuYXZpZ2F0b3IuY2xpcGJvYXJkICYmIHdpbmRvdy5pc1NlY3VyZUNvbnRleHQpIHtcblx0XHRcdFx0YXdhaXQgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodGV4dCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHt9XG5cblx0XHRjb25zdCBoZWxwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuXHRcdGhlbHBlci52YWx1ZSA9IHRleHQ7XG5cdFx0aGVscGVyLnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCAndHJ1ZScpO1xuXHRcdGhlbHBlci5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG5cdFx0aGVscGVyLnN0eWxlLnRvcCA9ICctOTk5OXB4Jztcblx0XHRoZWxwZXIuc3R5bGUubGVmdCA9ICctOTk5OXB4Jztcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZChoZWxwZXIpO1xuXHRcdGhlbHBlci5zZWxlY3QoKTtcblx0XHRkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xuXHRcdGhlbHBlci5yZW1vdmUoKTtcblx0fSkoKS50aGVuKCgpID0+IHtcblx0XHR2b2lkIG13Lm5vdGlmeShnZXRNZXNzYWdlKCdVUkwgY29waWVkIHRvIGNsaXBib2FyZCcpICsgdGV4dCwge1xuXHRcdFx0dHlwZTogJ3N1Y2Nlc3MnLFxuXHRcdFx0dGFnOiAnRGlmZkxpbmtzJyxcblx0XHR9KTtcblx0fSk7XG59O1xuXG5leHBvcnQge2NvcHlUZXh0fTtcbiIsICJpbXBvcnQge3R5cGUgQXBwIGFzIFZ1ZUFwcCwgY3JlYXRlQXBwfSBmcm9tICd2dWUnO1xuaW1wb3J0IFBvcnRsZXRMaW5rIGZyb20gJy4vUG9ydGxldExpbmsudnVlJztcbmltcG9ydCB7YWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHtnZXRTaG9ydERvbWFpbnN9IGZyb20gJy4vdXRpbC9nZXRTaG9ydERvbWFpbnMnO1xuXG5jb25zdCB7c2tpbiwgd2dVc2VyTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5jb25zdCBkb21haW5zID0gZ2V0U2hvcnREb21haW5zKCk7XG5cbmxldCBwb3J0bGV0TGlua0V2ZW50TGlzdGVuZXI6IFJldHVyblR5cGU8dHlwZW9mIGFkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcj4gPSB7XG5cdHJlbW92ZTogKCk6IHZvaWQgPT4ge30sXG59O1xuXG5jb25zdCBvcGVuRGlhbG9nID0gKGl0ZW1zOiB7bGFiZWw6IHN0cmluZzsgdGV4dDogc3RyaW5nfVtdKTogdm9pZCA9PiB7XG5cdGNvbnN0IHJvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0ZG9jdW1lbnQuYm9keS5hcHBlbmQocm9vdCk7XG5cblx0Y29uc3QgYXBwOiBWdWVBcHA8RWxlbWVudD4gfCBudWxsID0gY3JlYXRlQXBwKFBvcnRsZXRMaW5rLCB7XG5cdFx0b3BlbjogdHJ1ZSxcblx0XHRpdGVtcyxcblx0XHRvbkNsb3NlOiAoKTogdm9pZCA9PiB7XG5cdFx0XHRhcHA/LnVubW91bnQoKTtcblx0XHRcdHJvb3QucmVtb3ZlKCk7XG5cdFx0fSxcblx0fSk7XG5cdGFwcC5tb3VudChyb290KTtcbn07XG5cbmNvbnN0IGFkZFBvcnRsZXRMaW5rID0gKGxpbms6IHN0cmluZywgcGVybWFMaW5rOiBzdHJpbmcpOiB2b2lkID0+IHtcblx0Y29uc3QgcG9ydGxldElkOiAncC1jYWN0aW9ucycgfCAncC10YicgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcC1jYWN0aW9ucycpID8gJ3AtY2FjdGlvbnMnIDogJ3AtdGInO1xuXHRsZXQgcG9ydGxldExpbms6IEhUTUxMSUVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Qtc2hvcnRsaW5rJyk7XG5cdHBvcnRsZXRMaW5rIHx8PSBtdy51dGlsLmFkZFBvcnRsZXRMaW5rKFxuXHRcdHBvcnRsZXRJZCxcblx0XHQnIycsXG5cdFx0Z2V0TWVzc2FnZSgnU2hhcmUgVVJMIGZvciB0aGUgcGFnZScpLFxuXHRcdCd0LXNob3J0bGluaycsXG5cdFx0Z2V0TWVzc2FnZSgnU2hvdyBVUkwnKVxuXHQpO1xuXG5cdGlmIChwb3J0bGV0TGluaykge1xuXHRcdGNvbnN0IHBvcnRsZXRMaW5rQ2xpY2tMaXN0ZW5lciA9IChldmVudDogTW91c2VFdmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGNvbnN0IGl0ZW1zID0gW1xuXHRcdFx0XHR7bGFiZWw6IGdldE1lc3NhZ2UoJ1BhZ2UgVVJMJyksIHRleHQ6IGxvY2F0aW9uLmhyZWZ9LFxuXHRcdFx0XHR7bGFiZWw6IGdldE1lc3NhZ2UoJ1Blcm1hbmVudCBVUkwnKSwgdGV4dDogYGh0dHBzOi8vJHtsb2NhdGlvbi5ob3N0fSR7cGVybWFMaW5rfWB9LFxuXHRcdFx0XTtcblx0XHRcdGlmICh3Z1VzZXJOYW1lKSB7XG5cdFx0XHRcdGZvciAoY29uc3QgW2ksIGRvbWFpbl0gb2YgZG9tYWlucy5lbnRyaWVzKCkpIHtcblx0XHRcdFx0XHRpdGVtcy5wdXNoKHtsYWJlbDogYCR7Z2V0TWVzc2FnZSgnU2hvcnQgVVJMJyl9JHtpICsgMX1gLCB0ZXh0OiBgaHR0cHM6Ly8ke2RvbWFpbn0ke2xpbmt9YH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRvcGVuRGlhbG9nKGl0ZW1zKTtcblx0XHR9O1xuXG5cdFx0cG9ydGxldExpbmtFdmVudExpc3RlbmVyLnJlbW92ZSgpO1xuXHRcdHBvcnRsZXRMaW5rRXZlbnRMaXN0ZW5lciA9IGFkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcih7XG5cdFx0XHR0YXJnZXQ6IChwb3J0bGV0TGluay5maXJzdEVsZW1lbnRDaGlsZCA/PyBwb3J0bGV0TGluaykgYXMgSFRNTEVsZW1lbnQsXG5cdFx0XHR0eXBlOiAnY2xpY2snLFxuXHRcdFx0bGlzdGVuZXI6IHBvcnRsZXRMaW5rQ2xpY2tMaXN0ZW5lcixcblx0XHR9KTtcblxuXHRcdGlmIChza2luID09PSAnY2l0aXplbicgJiYgISQocG9ydGxldExpbmspLmZpbmQoJyNtdy11aS1pY29uLXdpa2ltZWRpYS1zaG9ydGxpbmsnKS5sZW5ndGgpIHtcblx0XHRcdCQocG9ydGxldExpbmspXG5cdFx0XHRcdC5maW5kKCdhJylcblx0XHRcdFx0LnByZXBlbmQoXG5cdFx0XHRcdFx0JzxzcGFuIGlkPVwibXctdWktaWNvbi13aWtpbWVkaWEtc2hvcnRsaW5rXCIgY2xhc3M9XCJjaXRpemVuLXVpLWljb24gbXctdWktaWNvbi1saW5rIG13LXVpLWljb24td2lraW1lZGlhLWxpbmtcIj48L3NwYW4+J1xuXHRcdFx0XHQpO1xuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IHthZGRQb3J0bGV0TGlua307XG4iLCAiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7Q2R4QnV0dG9uLCBDZHhEaWFsb2csIENkeEljb259IGZyb20gJ0B3aWtpbWVkaWEvY29kZXgnO1xuaW1wb3J0IHtyZWYsIHdhdGNofSBmcm9tICd2dWUnO1xuaW1wb3J0IHtjb3B5VGV4dH0gZnJvbSAnLi9jb3B5VGV4dCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmludGVyZmFjZSBDb3B5SXRlbSB7XG5cdGxhYmVsOiBzdHJpbmc7XG5cdHRleHQ6IHN0cmluZztcbn1cblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczx7XG5cdG9wZW46IGJvb2xlYW47XG5cdGl0ZW1zOiBDb3B5SXRlbVtdO1xuXHRvbkNsb3NlOiAoKSA9PiB2b2lkO1xufT4oKTtcblxuY29uc3QgZW1pdCA9IGRlZmluZUVtaXRzPHtcblx0J3VwZGF0ZTpvcGVuJzogW3ZhbHVlOiBib29sZWFuXTtcbn0+KCk7XG5jb25zdCBpc09wZW4gPSByZWYocHJvcHMub3Blbik7XG5cbndhdGNoKFxuXHQoKSA9PiBwcm9wcy5vcGVuLFxuXHQodmFsdWUpID0+IHtcblx0XHRpc09wZW4udmFsdWUgPSB2YWx1ZTtcblx0fSxcblx0e2ltbWVkaWF0ZTogdHJ1ZX1cbik7XG5cbmNvbnN0IGNsb3NlID0gKCk6IHZvaWQgPT4ge1xuXHRpc09wZW4udmFsdWUgPSBmYWxzZTtcblx0ZW1pdCgndXBkYXRlOm9wZW4nLCBmYWxzZSk7XG5cdHByb3BzLm9uQ2xvc2UoKTtcbn07XG5cbmNvbnN0IGhhbmRsZU9wZW5DaGFuZ2UgPSAodmFsdWU6IGJvb2xlYW4pOiB2b2lkID0+IHtcblx0aXNPcGVuLnZhbHVlID0gdmFsdWU7XG5cdGlmICghdmFsdWUpIHtcblx0XHRjbG9zZSgpO1xuXHR9XG59O1xuXG4vKipcbiAqIFNWRyBwYXRocyBpbmxpbmVkIGZyb20gYEB3aWtpbWVkaWEvY29kZXgtaWNvbnNgIHYyLjcuMC5cbiAqXG4gKiBNZWRpYVdpa2kgZG9lcyBub3Qgc2hpcCBhIFJlc291cmNlTG9hZGVyIG1vZHVsZSB0aGF0IGJ1bmRsZXNcbiAqIGBAd2lraW1lZGlhL2NvZGV4LWljb25zYCAoc2VlIGh0dHBzOi8vd3d3Lm1lZGlhd2lraS5vcmcvd2lraS9Db2RleCksXG4gKiBzbyB0aGUgcGF0aCBkYXRhIGlzIGNvcGllZCBoZXJlIHZlcmJhdGltIGFuZCByZW5kZXJlZCBhcyBpbmxpbmUgU1ZHXG4gKiB0byBrZWVwIHRoZSBnYWRnZXQgc2VsZi1jb250YWluZWQgd2hpbGUgc3RpbGwgc291cmNpbmcgdGhlIGljb25zXG4gKiBmcm9tIGBAd2lraW1lZGlhL2NvZGV4LWljb25zYC5cbiAqXG4gKiBAc2VlIHtAbGluayBodHRwczovL2RvYy53aWtpbWVkaWEub3JnL2NvZGV4L2xhdGVzdC9pY29ucy99XG4gKi9cblxuLyoqIFBhdGggZm9yIGBjZHhJY29uQ29weWAuICovXG5jb25zdCBjZHhJY29uQ29weSA9IHtcblx0cGF0aDogJ00xMyAxOUgxVjdoNlYxaDEydjEyaC02em0tNi02VjlIM3Y4aDh2LTR6bTItMmg4VjNIOXonLFxuXHRzaG91bGRGbGlwOiB0cnVlLFxufTtcbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG5cdDxjZHgtZGlhbG9nXG5cdFx0di1tb2RlbDpvcGVuPVwiaXNPcGVuXCJcblx0XHQ6dGl0bGU9XCJnZXRNZXNzYWdlKCdTaGFyZSBVUkwgZm9yIHRoZSBwYWdlJylcIlxuXHRcdDpkZWZhdWx0LWFjdGlvbj1cIntsYWJlbDogZ2V0TWVzc2FnZSgnQ2xvc2UnKX1cIlxuXHRcdDp1c2UtY2xvc2UtYnV0dG9uPVwidHJ1ZVwiXG5cdFx0QHVwZGF0ZTpvcGVuPVwiaGFuZGxlT3BlbkNoYW5nZVwiXG5cdFx0QGRlZmF1bHQ9XCJjbG9zZVwiXG5cdD5cblx0XHQ8ZGl2IGNsYXNzPVwic2hvcnQtdXJsLWNvcHktbGlzdFwiPlxuXHRcdFx0PGRpdiB2LWZvcj1cIml0ZW0gaW4gaXRlbXNcIiA6a2V5PVwiaXRlbS50ZXh0XCIgY2xhc3M9XCJzaG9ydC11cmwtY29weS1pdGVtXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJzaG9ydC11cmwtY29weS1sYWJlbFwiPnt7IGl0ZW0ubGFiZWwgfX08L2Rpdj5cblx0XHRcdFx0PGNvZGUgY2xhc3M9XCJzaG9ydC11cmwtY29weS10ZXh0XCI+e3sgaXRlbS50ZXh0IH19PC9jb2RlPlxuXHRcdFx0XHQ8Y2R4LWJ1dHRvbiB3ZWlnaHQ9XCJub3JtYWxcIiA6YXJpYS1sYWJlbD1cImdldE1lc3NhZ2UoJ0NvcHknKVwiIEBjbGljaz1cImNvcHlUZXh0KGl0ZW0udGV4dClcIj5cblx0XHRcdFx0XHQ8Y2R4LWljb24gOmljb249XCJjZHhJY29uQ29weVwiIC8+XG5cdFx0XHRcdFx0e3sgZ2V0TWVzc2FnZSgnQ29weScpIH19XG5cdFx0XHRcdDwvY2R4LWJ1dHRvbj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L2NkeC1kaWFsb2c+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJsZXNzXCI+XG4uc2hvcnQtdXJsLWNvcHktbGlzdCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMC43NXJlbTtcbn1cblxuLnNob3J0LXVybC1jb3B5LWl0ZW0ge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRnYXA6IDAuNXJlbTtcblx0ZmxleC13cmFwOiB3cmFwO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zaG9ydC11cmwtY29weS10ZXh0IHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xuXHRib3JkZXI6IDFweCBzb2xpZCAjZWFlY2YwO1xuXHRib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuXHRiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuXHRjb2xvcjogIzIwMjEyMjtcblx0Zm9udC1zaXplOiAwLjg3NXJlbTtcblx0d29yZC1icmVhazogYnJlYWstYWxsO1xuXHRmbGV4OiAxIDEgMTAwJTtcbn1cbjwvc3R5bGU+XG4iLCAiaW1wb3J0IHsgcmVuZGVyTGlzdCBhcyBfcmVuZGVyTGlzdCwgRnJhZ21lbnQgYXMgX0ZyYWdtZW50LCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2ssIHRvRGlzcGxheVN0cmluZyBhcyBfdG9EaXNwbGF5U3RyaW5nLCBjcmVhdGVFbGVtZW50Vk5vZGUgYXMgX2NyZWF0ZUVsZW1lbnRWTm9kZSwgY3JlYXRlVk5vZGUgYXMgX2NyZWF0ZVZOb2RlLCBjcmVhdGVUZXh0Vk5vZGUgYXMgX2NyZWF0ZVRleHRWTm9kZSwgd2l0aEN0eCBhcyBfd2l0aEN0eCwgY3JlYXRlQmxvY2sgYXMgX2NyZWF0ZUJsb2NrIH0gZnJvbSBcInZ1ZVwiXG5cbmNvbnN0IF9ob2lzdGVkXzEgPSB7IGNsYXNzOiBcInNob3J0LXVybC1jb3B5LWxpc3RcIiB9XG5jb25zdCBfaG9pc3RlZF8yID0geyBjbGFzczogXCJzaG9ydC11cmwtY29weS1sYWJlbFwiIH1cbmNvbnN0IF9ob2lzdGVkXzMgPSB7IGNsYXNzOiBcInNob3J0LXVybC1jb3B5LXRleHRcIiB9XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soJHNldHVwW1wiQ2R4RGlhbG9nXCJdLCB7XG4gICAgb3BlbjogJHNldHVwLmlzT3BlbixcbiAgICBcIm9uVXBkYXRlOm9wZW5cIjogW1xuICAgICAgX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSAkZXZlbnQgPT4gKCgkc2V0dXAuaXNPcGVuKSA9ICRldmVudCkpLFxuICAgICAgJHNldHVwLmhhbmRsZU9wZW5DaGFuZ2VcbiAgICBdLFxuICAgIHRpdGxlOiAkc2V0dXAuZ2V0TWVzc2FnZSgnU2hhcmUgVVJMIGZvciB0aGUgcGFnZScpLFxuICAgIFwiZGVmYXVsdC1hY3Rpb25cIjoge2xhYmVsOiAkc2V0dXAuZ2V0TWVzc2FnZSgnQ2xvc2UnKX0sXG4gICAgXCJ1c2UtY2xvc2UtYnV0dG9uXCI6IHRydWUsXG4gICAgb25EZWZhdWx0OiAkc2V0dXAuY2xvc2VcbiAgfSwge1xuICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfMSwgW1xuICAgICAgICAoX29wZW5CbG9jayh0cnVlKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhfRnJhZ21lbnQsIG51bGwsIF9yZW5kZXJMaXN0KCRwcm9wcy5pdGVtcywgKGl0ZW0pID0+IHtcbiAgICAgICAgICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCB7XG4gICAgICAgICAgICBrZXk6IGl0ZW0udGV4dCxcbiAgICAgICAgICAgIGNsYXNzOiBcInNob3J0LXVybC1jb3B5LWl0ZW1cIlxuICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfMiwgX3RvRGlzcGxheVN0cmluZyhpdGVtLmxhYmVsKSwgMSAvKiBURVhUICovKSxcbiAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJjb2RlXCIsIF9ob2lzdGVkXzMsIF90b0Rpc3BsYXlTdHJpbmcoaXRlbS50ZXh0KSwgMSAvKiBURVhUICovKSxcbiAgICAgICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDZHhCdXR0b25cIl0sIHtcbiAgICAgICAgICAgICAgd2VpZ2h0OiBcIm5vcm1hbFwiLFxuICAgICAgICAgICAgICBcImFyaWEtbGFiZWxcIjogJHNldHVwLmdldE1lc3NhZ2UoJ0NvcHknKSxcbiAgICAgICAgICAgICAgb25DbGljazogJGV2ZW50ID0+ICgkc2V0dXAuY29weVRleHQoaXRlbS50ZXh0KSlcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICAgICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDZHhJY29uXCJdLCB7IGljb246ICRzZXR1cC5jZHhJY29uQ29weSB9KSxcbiAgICAgICAgICAgICAgICBfY3JlYXRlVGV4dFZOb2RlKFwiIFwiICsgX3RvRGlzcGxheVN0cmluZygkc2V0dXAuZ2V0TWVzc2FnZSgnQ29weScpKSwgMSAvKiBURVhUICovKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgICAgICAgICAgIH0sIDggLyogUFJPUFMgKi8sIFtcImFyaWEtbGFiZWxcIiwgXCJvbkNsaWNrXCJdKVxuICAgICAgICAgIF0pKVxuICAgICAgICB9KSwgMTI4IC8qIEtFWUVEX0ZSQUdNRU5UICovKSlcbiAgICAgIF0pXG4gICAgXSksXG4gICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgfSwgOCAvKiBQUk9QUyAqLywgW1wib3BlblwiLCBcInRpdGxlXCIsIFwiZGVmYXVsdC1hY3Rpb25cIl0pKVxufSIsICJpbXBvcnQgc2NyaXB0IGZyb20gXCJFOlxcXFxDb2Rlc1xcXFxRaXV3ZW5cXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcU2hvcnRVUkxcXFxcbW9kdWxlc1xcXFxQb3J0bGV0TGluay52dWU/dHlwZT1zY3JpcHRcIjtpbXBvcnQgXCJFOlxcXFxDb2Rlc1xcXFxRaXV3ZW5cXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcU2hvcnRVUkxcXFxcbW9kdWxlc1xcXFxQb3J0bGV0TGluay52dWU/dHlwZT1zdHlsZSZpbmRleD0wXCI7aW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIkU6XFxcXENvZGVzXFxcXFFpdXdlblxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxTaG9ydFVSTFxcXFxtb2R1bGVzXFxcXFBvcnRsZXRMaW5rLnZ1ZT90eXBlPXRlbXBsYXRlXCI7IHNjcmlwdC5yZW5kZXIgPSByZW5kZXI7c2NyaXB0Ll9fZmlsZSA9IFwic3JjXFxcXFNob3J0VVJMXFxcXG1vZHVsZXNcXFxcUG9ydGxldExpbmsudnVlXCI7c2NyaXB0Ll9fc2NvcGVJZCA9IFwiZGF0YS12LTdkYWI3YmFlXCI7ZXhwb3J0IGRlZmF1bHQgc2NyaXB0OyIsICJpbXBvcnQge2FkZEhlYWRlckxpbmt9IGZyb20gJy4vYWRkSGVhZGVyTGluayc7XG5pbXBvcnQge2FkZFBvcnRsZXRMaW5rfSBmcm9tICcuL2FkZFBvcnRsZXRMaW5rJztcblxuY29uc3QgYnVpbGRMaW5rID0gKG9sZElkOiBudW1iZXIgfCBudWxsLCBkaWZmSWQ6IG51bWJlcik6IHZvaWQgPT4ge1xuXHRsZXQgbGluazogc3RyaW5nID0gJy9kJztcblx0bGV0IHBlcm1hTGluazogc3RyaW5nID0gJy93aWtpL1NwZWNpYWw6RGlmZic7XG5cdGlmIChvbGRJZCkge1xuXHRcdGxpbmsgKz0gYC8ke29sZElkfWA7XG5cdFx0cGVybWFMaW5rICs9IGAvJHtvbGRJZH1gO1xuXHR9XG5cdGxpbmsgKz0gYC8ke2RpZmZJZH1gO1xuXHRwZXJtYUxpbmsgKz0gYC8ke2RpZmZJZH1gO1xuXG5cdGFkZEhlYWRlckxpbmsobGluaywgcGVybWFMaW5rKTtcblx0YWRkUG9ydGxldExpbmsobGluaywgcGVybWFMaW5rKTtcbn07XG5cbmV4cG9ydCB7YnVpbGRMaW5rfTtcbiIsICJ7XG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBTaG9ydFVSTC8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuLi9hcGknO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG50eXBlIENvbXBhcmVSZXNwb25zZSA9IHtcblx0Y29tcGFyZT86IHtcblx0XHRmcm9tcmV2aWQ6IG51bWJlcjtcblx0fTtcbn07XG5cbmNvbnN0IHBhcmFtZXRlcnM6IEFwaUNvbXBhcmVQYWdlc1BhcmFtcyA9IHtcblx0YWN0aW9uOiAnY29tcGFyZScsXG5cdGZvcm1hdDogJ2pzb24nLFxuXHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdHByb3A6ICdpZHMnLFxuXHR0b3JlbGF0aXZlOiAncHJldicsXG5cdHNtYXhhZ2U6IDYwMCxcblx0bWF4YWdlOiA2MDAsXG59O1xuXG5jb25zdCBxdWVyeUFwaSA9IGFzeW5jIChkaWZmSWQ6IG51bWJlcik6IFByb21pc2U8Q29tcGFyZVJlc3BvbnNlPiA9PiB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGF3YWl0IGFwaS5nZXQoe1xuXHRcdFx0Li4ucGFyYW1ldGVycyxcblx0XHRcdGZyb21yZXY6IGRpZmZJZCxcblx0XHR9IGFzIHR5cGVvZiBwYXJhbWV0ZXJzKTtcblx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHRjb25zb2xlLmVycm9yKCdbU2hvcnRVUkxdIEFqYXggZXJyb3I6JywgZXJyb3IpO1xuXHRcdHRvYXN0aWZ5KFxuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdOZXR3b3JrIGVycm9yJyksXG5cdFx0XHRcdGNsb3NlOiB0cnVlLFxuXHRcdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0XHR9LFxuXHRcdFx0J2Vycm9yJ1xuXHRcdCk7XG5cblx0XHRyZXR1cm4ge307XG5cdH1cbn07XG5cbmV4cG9ydCB7cXVlcnlBcGl9O1xuIiwgImltcG9ydCB7YnVpbGRMaW5rfSBmcm9tICcuL2J1aWxkTGluayc7XG5pbXBvcnQge3F1ZXJ5QXBpfSBmcm9tICcuL3V0aWwvcXVlcnlBcGknO1xuXG5jb25zdCBjb21wYXJlV2l0aFJlbW90ZURpZmZJZCA9IGFzeW5jIChkaWZmSWQ6IG51bWJlcik6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCByZXNwb25zZTogQXdhaXRlZDxSZXR1cm5UeXBlPHR5cGVvZiBxdWVyeUFwaT4+ID0gYXdhaXQgcXVlcnlBcGkoZGlmZklkKTtcblx0aWYgKGRpZmZJZCA9PT0gbXcuY29uZmlnLmdldCgnd2dEaWZmTmV3SWQnKSAmJiByZXNwb25zZVsnY29tcGFyZSddPy5mcm9tcmV2aWQgPT09IG13LmNvbmZpZy5nZXQoJ3dnRGlmZk9sZElkJykpIHtcblx0XHRidWlsZExpbmsoMCwgZGlmZklkKTtcblx0fVxufTtcblxuZXhwb3J0IHtjb21wYXJlV2l0aFJlbW90ZURpZmZJZH07XG4iLCAiaW1wb3J0IHthZGRIZWFkZXJMaW5rfSBmcm9tICcuL2FkZEhlYWRlckxpbmsnO1xuaW1wb3J0IHthZGRQb3J0bGV0TGlua30gZnJvbSAnLi9hZGRQb3J0bGV0TGluayc7XG5pbXBvcnQge2J1aWxkTGlua30gZnJvbSAnLi9idWlsZExpbmsnO1xuaW1wb3J0IHtjb21wYXJlV2l0aFJlbW90ZURpZmZJZH0gZnJvbSAnLi9jb21wYXJlV2l0aFJlbW90ZURpZmZJZCc7XG5cbmNvbnN0IHByb2Nlc3NJZCA9IChcblx0aXNSZXZpc2lvblBhZ2U6IGJvb2xlYW4sXG5cdHtcblx0XHRhcnRpY2xlSWQsXG5cdFx0ZGlmZklkLFxuXHRcdG9sZElkLFxuXHRcdHJldmlzaW9uSWQsXG5cdH06IHtcblx0XHRhcnRpY2xlSWQ6IG51bWJlcjtcblx0XHRkaWZmSWQ6IG51bWJlciB8IG51bGw7XG5cdFx0b2xkSWQ6IG51bWJlciB8IG51bGw7XG5cdFx0cmV2aXNpb25JZDogbnVtYmVyIHwgbnVsbDtcblx0fVxuKTogdm9pZCA9PiB7XG5cdGlmIChkaWZmSWQpIHtcblx0XHRidWlsZExpbmsob2xkSWQsIGRpZmZJZCk7XG5cdFx0aWYgKG9sZElkKSB7XG5cdFx0XHR2b2lkIGNvbXBhcmVXaXRoUmVtb3RlRGlmZklkKGRpZmZJZCk7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKHJldmlzaW9uSWQgJiYgaXNSZXZpc2lvblBhZ2UpIHtcblx0XHRhZGRIZWFkZXJMaW5rKGAvcC8ke3JldmlzaW9uSWR9YCwgYC93aWtpL1NwZWNpYWw6UGVybWFsaW5rLyR7cmV2aXNpb25JZH1gKTtcblx0XHRhZGRQb3J0bGV0TGluayhgL3AvJHtyZXZpc2lvbklkfWAsIGAvd2lraS9TcGVjaWFsOlBlcm1hbGluay8ke3JldmlzaW9uSWR9YCk7XG5cdH0gZWxzZSBpZiAoYXJ0aWNsZUlkKSB7XG5cdFx0YWRkSGVhZGVyTGluayhgL2MvJHthcnRpY2xlSWR9YCwgYC9pbmRleC5waHA/Y3VyaWQ9JHthcnRpY2xlSWR9YCk7XG5cdFx0YWRkUG9ydGxldExpbmsoYC9jLyR7YXJ0aWNsZUlkfWAsIGAvaW5kZXgucGhwP2N1cmlkPSR7YXJ0aWNsZUlkfWApO1xuXHR9XG59O1xuXG5leHBvcnQge3Byb2Nlc3NJZH07XG4iLCAiaW1wb3J0IHtjaGVja1JldmlzaW9uUGFnZX0gZnJvbSAnLi9tb2R1bGVzL3V0aWwvY2hlY2tSZXZpc2lvblBhZ2UnO1xuaW1wb3J0IHtnZXRTaG9ydERvbWFpbnN9IGZyb20gJy4vbW9kdWxlcy91dGlsL2dldFNob3J0RG9tYWlucyc7XG5pbXBvcnQge3Byb2Nlc3NJZH0gZnJvbSAnLi9tb2R1bGVzL3Byb2Nlc3NJZCc7XG5cbihmdW5jdGlvbiBzaG9ydFVSTCgpIHtcblx0Y29uc3Qge3dnQWN0aW9uLCB3Z0FydGljbGVJZCwgd2dOYW1lc3BhY2VOdW1iZXJ9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGNvbnN0IGRvbWFpbnMgPSBnZXRTaG9ydERvbWFpbnMoKTtcblxuXHRpZiAoIWRvbWFpbnMubGVuZ3RoIHx8IHdnTmFtZXNwYWNlTnVtYmVyIDwgMCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmICh3Z0FjdGlvbiA9PT0gJ3ZpZXcnICYmIHdnQXJ0aWNsZUlkKSB7XG5cdFx0bXcuaG9vaygnd2lraXBhZ2UuY29udGVudCcpLmFkZCgoJGNvbnRlbnQpOiB2b2lkID0+IHtcblx0XHRcdGlmICgkY29udGVudC5hdHRyKCdpZCcpICE9PSAnbXctY29udGVudC10ZXh0Jykge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGlzUmV2aXNpb25QYWdlOiBib29sZWFuID0gY2hlY2tSZXZpc2lvblBhZ2UoJGNvbnRlbnQpO1xuXG5cdFx0XHRwcm9jZXNzSWQoaXNSZXZpc2lvblBhZ2UsIHtcblx0XHRcdFx0YXJ0aWNsZUlkOiBtdy5jb25maWcuZ2V0KCd3Z0FydGljbGVJZCcpLFxuXHRcdFx0XHRkaWZmSWQ6IG13LmNvbmZpZy5nZXQoJ3dnRGlmZk5ld0lkJyksXG5cdFx0XHRcdG9sZElkOiBtdy5jb25maWcuZ2V0KCd3Z0RpZmZPbGRJZCcpLFxuXHRcdFx0XHRyZXZpc2lvbklkOiBtdy5jb25maWcuZ2V0KCd3Z1JldmlzaW9uSWQnKSxcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG59KSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLG9CQUFxQkMsY0FBOEI7QUFDeEQsVUFDRUEsU0FBU0MsS0FBSyw4QkFBOEIsRUFBRUMsVUFDOUNGLFNBQVNDLEtBQUssNENBQTRDLEVBQUVDLFVBQVU7QUFFekU7O0FDTEEsSUFBTUMsa0JBQWtCQSxNQUFnQjtBQUN2QyxRQUFNO0lBQUNDO0VBQVEsSUFBSUMsR0FBR0MsT0FBT0MsSUFBSTtBQUNqQyxNQUFJQyxXQUFvQixDQUFBO0FBRXhCLFVBQVFKLFVBQUE7SUFDUCxLQUFLO0FBQ0pJLGlCQUFVLENBQUMsV0FBVyxTQUFTO0FBQy9CO0lBQ0QsS0FBSztBQUNKQSxpQkFBVSxDQUFDLGFBQWEsV0FBVztBQUNuQztJQUNELEtBQUs7QUFDSkEsaUJBQVUsQ0FBQyxlQUFlLGFBQWE7QUFDdkM7RUFDRjtBQUVBLFNBQU9BO0FBQ1I7O0FDaEJBLElBQUFDLHFCQUEwQ0MsUUFBQSxpQkFBQTs7QUNEMUMsSUFBQUMsb0JBQXVCRCxRQUFBLGlCQUFBO0FBRXZCLElBQU1FLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLFFBQUEsR0FBT0Ysa0JBQUFHLFVBQVM7TUFDZkMsSUFBSTtNQUNKQyxJQUFJO01B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ImNoZWNrUmV2aXNpb25QYWdlIiwgIiRjb250ZW50IiwgImZpbmQiLCAibGVuZ3RoIiwgImdldFNob3J0RG9tYWlucyIsICJ3Z1dpa2lJRCIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImRvbWFpbnMzIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJDbG9zZSIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJDb3B5IiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJjb3B5VGV4dCIsICJ0ZXh0IiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgIm5hdmlnYXRvciIsICJjbGlwYm9hcmQiLCAid2luZG93IiwgImlzU2VjdXJlQ29udGV4dCIsICJ3cml0ZVRleHQiLCAiaGVscGVyIiwgImRvY3VtZW50IiwgImNyZWF0ZUVsZW1lbnQiLCAidmFsdWUiLCAic2V0QXR0cmlidXRlIiwgInN0eWxlIiwgInBvc2l0aW9uIiwgInRvcCIsICJsZWZ0IiwgImJvZHkiLCAiYXBwZW5kIiwgInNlbGVjdCIsICJleGVjQ29tbWFuZCIsICJyZW1vdmUiLCAidGhlbiIsICJub3RpZnkiLCAidHlwZSIsICJ0YWciLCAid2dVc2VyTmFtZSIsICJkb21haW5zIiwgImhlYWRlckxpbmtFdmVudExpc3RlbmVyIiwgImFkZEhlYWRlckxpbmsiLCAibGluayIsICJwZXJtYUxpbmsiLCAiaGVhZGVyTGluayIsICJxdWVyeVNlbGVjdG9yIiwgIl9kb2N1bWVudCRxdWVyeVNlbGVjdCIsICJocmVmIiwgImljb24iLCAiY2xhc3NOYW1lIiwgImhlYWRlckVsZW1lbnQiLCAiaWQiLCAicHJlcGVuZCIsICJoZWFkZXJMaW5rQ2xpY2tMaXN0ZW5lciIsICJldmVudCIsICJwcmV2ZW50RGVmYXVsdCIsICJjb25jYXQiLCAibG9jYXRpb24iLCAiaG9zdCIsICJhZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXIiLCAidGFyZ2V0IiwgImxpc3RlbmVyIiwgImltcG9ydF92dWU0IiwgImltcG9ydF9jb2RleCIsICJpbXBvcnRfdnVlMiIsICJwcm9wcyIsICJfX3Byb3BzIiwgImVtaXQiLCAiX19lbWl0IiwgImlzT3BlbiIsICJyZWYiLCAib3BlbiIsICJ3YXRjaCIsICJpbW1lZGlhdGUiLCAiY2xvc2UiLCAib25DbG9zZSIsICJoYW5kbGVPcGVuQ2hhbmdlIiwgImNkeEljb25Db3B5IiwgInBhdGgiLCAic2hvdWxkRmxpcCIsICJpbXBvcnRfdnVlMyIsICJfaG9pc3RlZF8xIiwgImNsYXNzIiwgIl9ob2lzdGVkXzIiLCAiX2hvaXN0ZWRfMyIsICJyZW5kZXIiLCAiX2N0eCIsICJfY2FjaGUiLCAiJHByb3BzIiwgIiRzZXR1cCIsICIkZGF0YSIsICIkb3B0aW9ucyIsICJvcGVuQmxvY2siLCAiY3JlYXRlQmxvY2siLCAiJGV2ZW50IiwgInRpdGxlIiwgImxhYmVsIiwgIm9uRGVmYXVsdCIsICJkZWZhdWx0IiwgIndpdGhDdHgiLCAiY3JlYXRlRWxlbWVudFZOb2RlIiwgImNyZWF0ZUVsZW1lbnRCbG9jayIsICJGcmFnbWVudCIsICJyZW5kZXJMaXN0IiwgIml0ZW1zIiwgIml0ZW0iLCAidG9EaXNwbGF5U3RyaW5nIiwgImNyZWF0ZVZOb2RlIiwgIndlaWdodCIsICJvbkNsaWNrIiwgImNyZWF0ZVRleHRWTm9kZSIsICJfIiwgIlBvcnRsZXRMaW5rX2RlZmF1bHQiLCAiX19maWxlIiwgIl9fc2NvcGVJZCIsICJQb3J0bGV0TGlua19kZWZhdWx0MiIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAic2tpbiIsICJ3Z1VzZXJOYW1lMiIsICJkb21haW5zMiIsICJwb3J0bGV0TGlua0V2ZW50TGlzdGVuZXIiLCAib3BlbkRpYWxvZyIsICJyb290IiwgImFwcCIsICJjcmVhdGVBcHAiLCAidW5tb3VudCIsICJtb3VudCIsICJhZGRQb3J0bGV0TGluayIsICJwb3J0bGV0SWQiLCAicG9ydGxldExpbmsiLCAidXRpbCIsICJfcG9ydGxldExpbmskZmlyc3RFbGUiLCAicG9ydGxldExpbmtDbGlja0xpc3RlbmVyIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJlbnRyaWVzIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImkiLCAiZG9tYWluIiwgInB1c2giLCAiZXJyIiwgImUiLCAiZiIsICJmaXJzdEVsZW1lbnRDaGlsZCIsICIkIiwgImJ1aWxkTGluayIsICJvbGRJZCIsICJkaWZmSWQiLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAiYXBpIiwgImluaXRNd0FwaSIsICJpbXBvcnRfZXh0X2dhZGdldDUiLCAicGFyYW1ldGVycyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicHJvcCIsICJ0b3JlbGF0aXZlIiwgInNtYXhhZ2UiLCAibWF4YWdlIiwgInF1ZXJ5QXBpIiwgIl9yZWYyIiwgImZyb21yZXYiLCAiZXJyb3IiLCAiY29uc29sZSIsICJ0b2FzdGlmeSIsICJkdXJhdGlvbiIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiY29tcGFyZVdpdGhSZW1vdGVEaWZmSWQiLCAiX3JlZjMiLCAiX3Jlc3BvbnNlJGNvbXBhcmUiLCAicmVzcG9uc2UiLCAiZnJvbXJldmlkIiwgIl94MiIsICJwcm9jZXNzSWQiLCAiaXNSZXZpc2lvblBhZ2UiLCAiYXJ0aWNsZUlkIiwgInJldmlzaW9uSWQiLCAic2hvcnRVUkwiLCAid2dBY3Rpb24iLCAid2dBcnRpY2xlSWQiLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAiaG9vayIsICJhZGQiLCAiYXR0ciJdCn0K

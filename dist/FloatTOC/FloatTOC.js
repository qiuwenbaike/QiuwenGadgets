/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/FloatTOC}
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
 * SPDX-License-Identifier: MIT
 *
 * - The "close" icon from @wikimedia/codex-icons
 * - The "reference" icon from @wikimedia/codex-icons
 * - The "down-triangle" icon from @wikimedia/codex-icons
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

// dist/FloatTOC/FloatTOC.js
//! src/FloatTOC/options.json
var elementId = "floatTOC";
//! src/FloatTOC/modules/core.ts
var import_vue3 = require("vue");
var import_vue = require("vue");
var import_codex = require("@wikimedia/codex");
//! src/FloatTOC/modules/icons.ts
var cdxIconClose = "M16.707 4.707 11.414 10l5.293 5.293-1.414 1.414L10 11.414l-5.293 5.293-1.414-1.414L8.586 10 3.293 4.707l1.414-1.414L10 8.586l5.293-5.293z";
var cdxIconReference = "M18 20H2V0h16zM4 18h12V2h-2v10h-.914L12 11l-1.086 1H10V2H4z";
var cdxIconDownTriangle = "M5 8h10v1l-5 5-5-5z";
var toInlineSvg = (path) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true"><path d="${path}"/></svg>`;
};
//! src/FloatTOC/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Close: (0, import_ext_gadget.localize)({
      en: "Close",
      ja: "閉じる",
      "zh-hans": "关闭",
      "zh-hant": "關閉"
    }),
    Contents: (0, import_ext_gadget.localize)({
      en: "Contents",
      ja: "目次",
      zh: "目录"
    }),
    Collapse: (0, import_ext_gadget.localize)({
      en: "Collapse",
      ja: "折り畳み",
      "zh-hans": "折叠",
      "zh-hant": "摺叠"
    }),
    Expand: (0, import_ext_gadget.localize)({
      en: "Expand",
      ja: "展開",
      "zh-hans": "展开",
      "zh-hant": "展開"
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
    state: {
      type: Object,
      required: true
    },
    tocHtml: {
      type: String,
      required: true
    },
    triggerOpen: {
      type: Function,
      required: true
    },
    triggerClose: {
      type: Function,
      required: true
    },
    triggerScroll: {
      type: Function,
      required: true
    }
  },
  setup(__props, {
    expose: __expose
  }) {
    __expose();
    const closeIcon = {
      path: cdxIconClose
    };
    const referenceIcon = {
      path: cdxIconReference
    };
    const __returned__ = {
      closeIcon,
      referenceIcon,
      get CdxButton() {
        return import_codex.CdxButton;
      },
      get CdxIcon() {
        return import_codex.CdxIcon;
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
var import_vue2 = require("vue");
var _hoisted_1 = {
  class: "float-toc__opener-text"
};
var _hoisted_2 = ["innerHTML"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("div", null, [(0, import_vue2.createVNode)(import_vue2.Transition, {
    name: "float-toc-fade",
    persisted: ""
  }, {
    default: (0, import_vue2.withCtx)(() => [(0, import_vue2.withDirectives)((0, import_vue2.createVNode)($setup["CdxButton"], {
      class: "float-toc__opener",
      weight: "quiet",
      "aria-label": $setup.getMessage("Contents"),
      onClick: $props.triggerOpen
    }, {
      default: (0, import_vue2.withCtx)(() => [(0, import_vue2.createVNode)($setup["CdxIcon"], {
        icon: $setup.referenceIcon
      }), (0, import_vue2.createElementVNode)(
        "span",
        _hoisted_1,
        (0, import_vue2.toDisplayString)($setup.getMessage("Contents")),
        1
        /* TEXT */
      )]),
      _: 1
      /* STABLE */
    }, 8, ["aria-label", "onClick"]), [[import_vue2.vShow, $props.state.opener]])]),
    _: 1
    /* STABLE */
  }), (0, import_vue2.createVNode)(import_vue2.Transition, {
    name: "float-toc-fade",
    persisted: ""
  }, {
    default: (0, import_vue2.withCtx)(() => [(0, import_vue2.withDirectives)((0, import_vue2.createElementVNode)(
      "div",
      {
        class: "float-toc",
        onClick: _cache[0] || (_cache[0] = (...args) => $props.triggerScroll && $props.triggerScroll(...args))
      },
      [(0, import_vue2.createVNode)($setup["CdxButton"], {
        class: "float-toc__close",
        weight: "quiet",
        "aria-label": $setup.getMessage("Close"),
        onClick: (0, import_vue2.withModifiers)($props.triggerClose, ["stop"])
      }, {
        default: (0, import_vue2.withCtx)(() => [(0, import_vue2.createVNode)($setup["CdxIcon"], {
          icon: $setup.closeIcon
        })]),
        _: 1
        /* STABLE */
      }, 8, ["aria-label", "onClick"]), (0, import_vue2.createCommentVNode)(" eslint-disable-next-line vue/no-v-html -- tocHtml is a clone of the page's own TOC markup "), (0, import_vue2.createElementVNode)("div", {
        class: "float-toc__content",
        innerHTML: $props.tocHtml
      }, null, 8, _hoisted_2)],
      512
      /* NEED_PATCH */
    ), [[import_vue2.vShow, $props.state.open]])]),
    _: 1
    /* STABLE */
  })]);
}
//! src/FloatTOC/App.vue
App_default.render = render;
App_default.__file = "src\\FloatTOC\\App.vue";
var App_default2 = App_default;
//! src/FloatTOC/modules/core.ts
var import_ext_gadget2 = require("ext.gadget.FilterAlteredClicks");
//! src/FloatTOC/modules/util/generateTogglerElement.ts
var generateTogglerElement = (isCollapse) => {
  const $toggler = $("<span>").addClass("float-toc__toggler").html(toInlineSvg(cdxIconDownTriangle));
  if (isCollapse) {
    $toggler.attr("title", getMessage("Expand"));
  } else {
    $toggler.attr("title", getMessage("Collapse")).addClass("collapse");
  }
  return $toggler;
};
//! src/FloatTOC/modules/getConfig.ts
var getConfig = (id) => {
  let config = mw.storage.getObject(id);
  config || (config = {
    floatTOC: window.outerHeight < window.outerWidth ? "open" : "close",
    originTOC: "open"
  });
  return config;
};
//! src/FloatTOC/modules/core.ts
var import_ext_gadget3 = require("ext.gadget.Util");
var floatTOC = ($originToc) => {
  var _toc$querySelector, _toc$querySelector2;
  const {
    skin
  } = mw.config.get();
  const originToc = $originToc.get(0);
  const $body = $originToc.parents("body");
  const toc = originToc.cloneNode(true);
  (_toc$querySelector = toc.querySelector("input")) === null || _toc$querySelector === void 0 || _toc$querySelector.remove();
  (_toc$querySelector2 = toc.querySelector(".toctogglespan")) === null || _toc$querySelector2 === void 0 || _toc$querySelector2.remove();
  toc.removeAttribute("id");
  const tocHtml = toc.outerHTML;
  const config = getConfig(elementId);
  const state = (0, import_vue3.reactive)({
    open: false,
    opener: false
  });
  const storeState = (target, value) => {
    config[target] = value;
    mw.storage.setObject(elementId, config);
  };
  const showPanel = () => {
    state.open = true;
    state.opener = false;
  };
  const showOpener = () => {
    state.open = false;
    state.opener = true;
  };
  const hideAll = () => {
    state.open = false;
    state.opener = false;
  };
  const smoothScroll = (event) => {
    if (skin === "citizen") {
      return;
    }
    const target = event.target;
    const $target = $(target).parent();
    const href = $target.attr("href");
    if (!href) {
      return;
    }
    const anchorOffset = $(href).offset();
    if (!anchorOffset) {
      return;
    }
    event.preventDefault();
    (0, import_ext_gadget3.scrollTop)(`${anchorOffset.top}px`);
  };
  const triggerScroll = (0, import_ext_gadget2.filterAlteredClicks)(smoothScroll);
  const triggerOpen = () => {
    storeState("floatTOC", "open");
    showPanel();
  };
  const triggerClose = () => {
    storeState("floatTOC", "close");
    showOpener();
  };
  const root = document.createElement("div");
  $body.append(root);
  const app = (0, import_vue3.createApp)(App_default2, {
    state,
    tocHtml,
    triggerOpen,
    triggerClose,
    triggerScroll
  });
  app.mount(root);
  const observerCallback = (entries) => {
    const [entry] = entries;
    if (!entry) {
      return;
    }
    if (entry.intersectionRatio === 0) {
      if (config.floatTOC === "close") {
        showOpener();
      } else {
        showPanel();
      }
    } else {
      hideAll();
    }
  };
  const intersectionObserver = new IntersectionObserver(observerCallback);
  intersectionObserver.observe(originToc);
  const collapseOriginToc = () => {
    if (skin !== "citizen") {
      return;
    }
    const isCollapse = config.originTOC === "close";
    const $originTocTitle = $body.find("#toc .toctitle");
    const $originTocItem = $body.find("#toc ul");
    const $toggler = generateTogglerElement(isCollapse);
    $originTocTitle.append($toggler);
    const collapseToggle = () => {
      const $element = $originTocTitle.find(".float-toc__toggler");
      $element.toggleClass("collapse");
      if (isCollapse) {
        $element.attr("title", getMessage("Expand"));
      } else {
        $element.attr("title", getMessage("Collapse"));
      }
    };
    $originTocTitle.on("click", () => {
      storeState("originTOC", isCollapse ? "open" : "close");
      collapseToggle();
      $originTocItem.fadeToggle();
    });
    if (isCollapse) {
      $originTocItem.fadeOut();
    }
  };
  collapseOriginToc();
};
//! src/FloatTOC/FloatTOC.ts
var import_ext_gadget4 = require("ext.gadget.Util");
void (0, import_ext_gadget4.getBody)().then(($body) => {
  const $originToc = $body.find("#toc");
  if (!$originToc.length) {
    return;
  }
  floatTOC($originToc);
});

})();

/* </nowiki> */


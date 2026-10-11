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
  return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true"><path d="'.concat(path, '"/></svg>');
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
    (0, import_ext_gadget3.scrollTop)("".concat(anchorOffset.top, "px"));
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0Zsb2F0VE9DL29wdGlvbnMuanNvbiIsICJzcmMvRmxvYXRUT0MvbW9kdWxlcy9jb3JlLnRzIiwgImRpc3QvRmxvYXRUT0Mvc3JjL0Zsb2F0VE9DL0FwcC52dWUiLCAic3JjL0Zsb2F0VE9DL21vZHVsZXMvaWNvbnMudHMiLCAic3JjL0Zsb2F0VE9DL21vZHVsZXMvaTE4bi50cyIsICJzZmMtdGVtcGxhdGU6RTpcXENvZGVzXFxRaXV3ZW5cXFFpdXdlbkdhZGdldHNcXHNyY1xcRmxvYXRUT0NcXEFwcC52dWU/dHlwZT10ZW1wbGF0ZSIsICJzcmMvRmxvYXRUT0MvQXBwLnZ1ZSIsICJzcmMvRmxvYXRUT0MvbW9kdWxlcy91dGlsL2dlbmVyYXRlVG9nZ2xlckVsZW1lbnQudHMiLCAic3JjL0Zsb2F0VE9DL21vZHVsZXMvZ2V0Q29uZmlnLnRzIiwgInNyYy9GbG9hdFRPQy9GbG9hdFRPQy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcImVsZW1lbnRJZFwiOiBcImZsb2F0VE9DXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQgdHlwZSB7Q29uZmlnLCBTdGF0ZX0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge3R5cGUgQXBwIGFzIFZ1ZUFwcCwgY3JlYXRlQXBwLCByZWFjdGl2ZX0gZnJvbSAndnVlJztcbmltcG9ydCBBcHAgZnJvbSAnLi4vQXBwLnZ1ZSc7XG5pbXBvcnQge2ZpbHRlckFsdGVyZWRDbGlja3N9IGZyb20gJ2V4dC5nYWRnZXQuRmlsdGVyQWx0ZXJlZENsaWNrcyc7XG5pbXBvcnQge2dlbmVyYXRlVG9nZ2xlckVsZW1lbnR9IGZyb20gJy4vdXRpbC9nZW5lcmF0ZVRvZ2dsZXJFbGVtZW50JztcbmltcG9ydCB7Z2V0Q29uZmlnfSBmcm9tICcuL2dldENvbmZpZyc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge3Njcm9sbFRvcH0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuaW50ZXJmYWNlIEZsb2F0VG9jU3RhdGUge1xuXHRvcGVuOiBib29sZWFuO1xuXHRvcGVuZXI6IGJvb2xlYW47XG59XG5cbmNvbnN0IGZsb2F0VE9DID0gKCRvcmlnaW5Ub2M6IEpRdWVyeSk6IHZvaWQgPT4ge1xuXHRjb25zdCB7c2tpbn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IG9yaWdpblRvYzogSFRNTEVsZW1lbnQgPSAkb3JpZ2luVG9jLmdldCgwKSBhcyBIVE1MRWxlbWVudDtcblx0Y29uc3QgJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+ID0gJG9yaWdpblRvYy5wYXJlbnRzKCdib2R5Jyk7XG5cblx0Ly8gQ2xvbmUgdGhlIG9yaWdpbiBUT0MgYW5kIGNsZWFuIGl0IHVwIGZvciB0aGUgZmxvYXRpbmcgcGFuZWxcblx0Y29uc3QgdG9jOiBIVE1MRWxlbWVudCA9IG9yaWdpblRvYy5jbG9uZU5vZGUodHJ1ZSkgYXMgSFRNTEVsZW1lbnQ7XG5cdHRvYy5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpPy5yZW1vdmUoKTtcblx0dG9jLnF1ZXJ5U2VsZWN0b3IoJy50b2N0b2dnbGVzcGFuJyk/LnJlbW92ZSgpO1xuXHR0b2MucmVtb3ZlQXR0cmlidXRlKCdpZCcpO1xuXHRjb25zdCB0b2NIdG1sOiBzdHJpbmcgPSB0b2Mub3V0ZXJIVE1MO1xuXG5cdGNvbnN0IGNvbmZpZzogQ29uZmlnID0gZ2V0Q29uZmlnKE9QVElPTlMuZWxlbWVudElkKTtcblxuXHRjb25zdCBzdGF0ZTogRmxvYXRUb2NTdGF0ZSA9IHJlYWN0aXZlKHtcblx0XHRvcGVuOiBmYWxzZSxcblx0XHRvcGVuZXI6IGZhbHNlLFxuXHR9KTtcblxuXHRjb25zdCBzdG9yZVN0YXRlID0gKHRhcmdldDoga2V5b2YgQ29uZmlnLCB2YWx1ZTogU3RhdGUpOiB2b2lkID0+IHtcblx0XHRjb25maWdbdGFyZ2V0XSA9IHZhbHVlO1xuXHRcdG13LnN0b3JhZ2Uuc2V0T2JqZWN0KE9QVElPTlMuZWxlbWVudElkLCBjb25maWcpO1xuXHR9O1xuXG5cdGNvbnN0IHNob3dQYW5lbCA9ICgpOiB2b2lkID0+IHtcblx0XHRzdGF0ZS5vcGVuID0gdHJ1ZTtcblx0XHRzdGF0ZS5vcGVuZXIgPSBmYWxzZTtcblx0fTtcblxuXHRjb25zdCBzaG93T3BlbmVyID0gKCk6IHZvaWQgPT4ge1xuXHRcdHN0YXRlLm9wZW4gPSBmYWxzZTtcblx0XHRzdGF0ZS5vcGVuZXIgPSB0cnVlO1xuXHR9O1xuXG5cdGNvbnN0IGhpZGVBbGwgPSAoKTogdm9pZCA9PiB7XG5cdFx0c3RhdGUub3BlbiA9IGZhbHNlO1xuXHRcdHN0YXRlLm9wZW5lciA9IGZhbHNlO1xuXHR9O1xuXG5cdGNvbnN0IHNtb290aFNjcm9sbCA9IChldmVudDogTW91c2VFdmVudCk6IHZvaWQgPT4ge1xuXHRcdGlmIChza2luID09PSAnY2l0aXplbicpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG5cdFx0Y29uc3QgJHRhcmdldDogSlF1ZXJ5ID0gJCh0YXJnZXQpLnBhcmVudCgpO1xuXHRcdGNvbnN0IGhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICR0YXJnZXQuYXR0cignaHJlZicpO1xuXHRcdGlmICghaHJlZikge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGFuY2hvck9mZnNldDogSlF1ZXJ5LkNvb3JkaW5hdGVzIHwgdW5kZWZpbmVkID0gJChocmVmKS5vZmZzZXQoKTtcblx0XHRpZiAoIWFuY2hvck9mZnNldCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0c2Nyb2xsVG9wKGAke2FuY2hvck9mZnNldC50b3B9cHhgKTtcblx0fTtcblxuXHQvLyBJZ25vcmUgYWx0ZXJlZCAoQ3RybC9DbWQvU2hpZnQvQWx0IG9yIG5vbi1wcmltYXJ5IGJ1dHRvbikgY2xpY2tzIHNvXG5cdC8vIHRoYXQgdGhleSBrZWVwIHRoZWlyIG5hdGl2ZSBiZWhhdmlvciAoZS5nLiBvcGVuIGluIGEgbmV3IHRhYilcblx0Y29uc3QgdHJpZ2dlclNjcm9sbCA9IGZpbHRlckFsdGVyZWRDbGlja3Moc21vb3RoU2Nyb2xsKTtcblxuXHRjb25zdCB0cmlnZ2VyT3BlbiA9ICgpOiB2b2lkID0+IHtcblx0XHRzdG9yZVN0YXRlKCdmbG9hdFRPQycsICdvcGVuJyk7XG5cdFx0c2hvd1BhbmVsKCk7XG5cdH07XG5cblx0Y29uc3QgdHJpZ2dlckNsb3NlID0gKCk6IHZvaWQgPT4ge1xuXHRcdHN0b3JlU3RhdGUoJ2Zsb2F0VE9DJywgJ2Nsb3NlJyk7XG5cdFx0c2hvd09wZW5lcigpO1xuXHR9O1xuXG5cdGNvbnN0IHJvb3Q6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdCRib2R5LmFwcGVuZChyb290KTtcblxuXHRjb25zdCBhcHA6IFZ1ZUFwcDxFbGVtZW50PiA9IGNyZWF0ZUFwcChBcHAsIHtcblx0XHRzdGF0ZSxcblx0XHR0b2NIdG1sLFxuXHRcdHRyaWdnZXJPcGVuLFxuXHRcdHRyaWdnZXJDbG9zZSxcblx0XHR0cmlnZ2VyU2Nyb2xsLFxuXHR9KTtcblx0YXBwLm1vdW50KHJvb3QpO1xuXG5cdGNvbnN0IG9ic2VydmVyQ2FsbGJhY2sgPSAoZW50cmllczogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeVtdKTogdm9pZCA9PiB7XG5cdFx0Y29uc3QgW2VudHJ5XSA9IGVudHJpZXM7XG5cdFx0aWYgKCFlbnRyeSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPT09IDApIHtcblx0XHRcdGlmIChjb25maWcuZmxvYXRUT0MgPT09ICdjbG9zZScpIHtcblx0XHRcdFx0c2hvd09wZW5lcigpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c2hvd1BhbmVsKCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGhpZGVBbGwoKTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IGludGVyc2VjdGlvbk9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihvYnNlcnZlckNhbGxiYWNrKTtcblx0aW50ZXJzZWN0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShvcmlnaW5Ub2MpO1xuXG5cdGNvbnN0IGNvbGxhcHNlT3JpZ2luVG9jID0gKCk6IHZvaWQgPT4ge1xuXHRcdGlmIChza2luICE9PSAnY2l0aXplbicpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBpc0NvbGxhcHNlOiBib29sZWFuID0gY29uZmlnLm9yaWdpblRPQyA9PT0gJ2Nsb3NlJztcblxuXHRcdGNvbnN0ICRvcmlnaW5Ub2NUaXRsZTogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnI3RvYyAudG9jdGl0bGUnKTtcblx0XHRjb25zdCAkb3JpZ2luVG9jSXRlbTogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnI3RvYyB1bCcpO1xuXG5cdFx0Y29uc3QgJHRvZ2dsZXI6IEpRdWVyeSA9IGdlbmVyYXRlVG9nZ2xlckVsZW1lbnQoaXNDb2xsYXBzZSk7XG5cdFx0JG9yaWdpblRvY1RpdGxlLmFwcGVuZCgkdG9nZ2xlcik7XG5cblx0XHRjb25zdCBjb2xsYXBzZVRvZ2dsZSA9ICgpOiB2b2lkID0+IHtcblx0XHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkb3JpZ2luVG9jVGl0bGUuZmluZCgnLmZsb2F0LXRvY19fdG9nZ2xlcicpO1xuXHRcdFx0JGVsZW1lbnQudG9nZ2xlQ2xhc3MoJ2NvbGxhcHNlJyk7XG5cdFx0XHRpZiAoaXNDb2xsYXBzZSkge1xuXHRcdFx0XHQkZWxlbWVudC5hdHRyKCd0aXRsZScsIGdldE1lc3NhZ2UoJ0V4cGFuZCcpKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCRlbGVtZW50LmF0dHIoJ3RpdGxlJywgZ2V0TWVzc2FnZSgnQ29sbGFwc2UnKSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHQkb3JpZ2luVG9jVGl0bGUub24oJ2NsaWNrJywgKCk6IHZvaWQgPT4ge1xuXHRcdFx0c3RvcmVTdGF0ZSgnb3JpZ2luVE9DJywgaXNDb2xsYXBzZSA/ICdvcGVuJyA6ICdjbG9zZScpO1xuXHRcdFx0Y29sbGFwc2VUb2dnbGUoKTtcblx0XHRcdCRvcmlnaW5Ub2NJdGVtLmZhZGVUb2dnbGUoKTtcblx0XHR9KTtcblxuXHRcdGlmIChpc0NvbGxhcHNlKSB7XG5cdFx0XHQkb3JpZ2luVG9jSXRlbS5mYWRlT3V0KCk7XG5cdFx0fVxuXHR9O1xuXHRjb2xsYXBzZU9yaWdpblRvYygpO1xufTtcblxuZXhwb3J0IHtmbG9hdFRPQ307XG4iLCAiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7Q2R4QnV0dG9uLCBDZHhJY29ufSBmcm9tICdAd2lraW1lZGlhL2NvZGV4JztcbmltcG9ydCB7Y2R4SWNvbkNsb3NlLCBjZHhJY29uUmVmZXJlbmNlfSBmcm9tICcuL21vZHVsZXMvaWNvbnMnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL21vZHVsZXMvaTE4bic7XG5cbmRlZmluZVByb3BzPHtcblx0c3RhdGU6IHtcblx0XHRvcGVuOiBib29sZWFuO1xuXHRcdG9wZW5lcjogYm9vbGVhbjtcblx0fTtcblx0dG9jSHRtbDogc3RyaW5nO1xuXHR0cmlnZ2VyT3BlbjogKCkgPT4gdm9pZDtcblx0dHJpZ2dlckNsb3NlOiAoKSA9PiB2b2lkO1xuXHR0cmlnZ2VyU2Nyb2xsOiAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHZvaWQ7XG59PigpO1xuXG5jb25zdCBjbG9zZUljb24gPSB7XG5cdHBhdGg6IGNkeEljb25DbG9zZSxcbn07XG5cbmNvbnN0IHJlZmVyZW5jZUljb24gPSB7XG5cdHBhdGg6IGNkeEljb25SZWZlcmVuY2UsXG59O1xuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cblx0PGRpdj5cblx0XHQ8dHJhbnNpdGlvbiBuYW1lPVwiZmxvYXQtdG9jLWZhZGVcIj5cblx0XHRcdDxjZHgtYnV0dG9uXG5cdFx0XHRcdHYtc2hvdz1cInN0YXRlLm9wZW5lclwiXG5cdFx0XHRcdGNsYXNzPVwiZmxvYXQtdG9jX19vcGVuZXJcIlxuXHRcdFx0XHR3ZWlnaHQ9XCJxdWlldFwiXG5cdFx0XHRcdDphcmlhLWxhYmVsPVwiZ2V0TWVzc2FnZSgnQ29udGVudHMnKVwiXG5cdFx0XHRcdEBjbGljaz1cInRyaWdnZXJPcGVuXCJcblx0XHRcdD5cblx0XHRcdFx0PGNkeC1pY29uIDppY29uPVwicmVmZXJlbmNlSWNvblwiIC8+XG5cdFx0XHRcdDxzcGFuIGNsYXNzPVwiZmxvYXQtdG9jX19vcGVuZXItdGV4dFwiPnt7IGdldE1lc3NhZ2UoJ0NvbnRlbnRzJykgfX08L3NwYW4+XG5cdFx0XHQ8L2NkeC1idXR0b24+XG5cdFx0PC90cmFuc2l0aW9uPlxuXHRcdDx0cmFuc2l0aW9uIG5hbWU9XCJmbG9hdC10b2MtZmFkZVwiPlxuXHRcdFx0PGRpdiB2LXNob3c9XCJzdGF0ZS5vcGVuXCIgY2xhc3M9XCJmbG9hdC10b2NcIiBAY2xpY2s9XCJ0cmlnZ2VyU2Nyb2xsXCI+XG5cdFx0XHRcdDxjZHgtYnV0dG9uXG5cdFx0XHRcdFx0Y2xhc3M9XCJmbG9hdC10b2NfX2Nsb3NlXCJcblx0XHRcdFx0XHR3ZWlnaHQ9XCJxdWlldFwiXG5cdFx0XHRcdFx0OmFyaWEtbGFiZWw9XCJnZXRNZXNzYWdlKCdDbG9zZScpXCJcblx0XHRcdFx0XHRAY2xpY2suc3RvcD1cInRyaWdnZXJDbG9zZVwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8Y2R4LWljb24gOmljb249XCJjbG9zZUljb25cIiAvPlxuXHRcdFx0XHQ8L2NkeC1idXR0b24+XG5cdFx0XHRcdDwhLS0gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHZ1ZS9uby12LWh0bWwgLS0gdG9jSHRtbCBpcyBhIGNsb25lIG9mIHRoZSBwYWdlJ3Mgb3duIFRPQyBtYXJrdXAgLS0+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJmbG9hdC10b2NfX2NvbnRlbnRcIiB2LWh0bWw9XCJ0b2NIdG1sXCI+PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L3RyYW5zaXRpb24+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cbiIsICIvKipcbiAqIFNWRyBwYXRocyBpbmxpbmVkIGZyb20gYEB3aWtpbWVkaWEvY29kZXgtaWNvbnNgIHYyLjcuMC5cbiAqXG4gKiBNZWRpYVdpa2kgZG9lcyBub3Qgc2hpcCBhIFJlc291cmNlTG9hZGVyIG1vZHVsZSB0aGF0IGJ1bmRsZXNcbiAqIGBAd2lraW1lZGlhL2NvZGV4LWljb25zYCAoc2VlIGh0dHBzOi8vd3d3Lm1lZGlhd2lraS5vcmcvd2lraS9Db2RleCksXG4gKiBzbyB0aGUgcGF0aCBkYXRhIGlzIGNvcGllZCBoZXJlIHZlcmJhdGltIGFuZCByZW5kZXJlZCBhcyBpbmxpbmUgU1ZHXG4gKiB0byBrZWVwIHRoZSBnYWRnZXQgc2VsZi1jb250YWluZWQgd2hpbGUgc3RpbGwgc291cmNpbmcgdGhlIGljb25zXG4gKiBmcm9tIGBAd2lraW1lZGlhL2NvZGV4LWljb25zYC5cbiAqXG4gKiBAc2VlIHtAbGluayBodHRwczovL2RvYy53aWtpbWVkaWEub3JnL2NvZGV4L2xhdGVzdC9pY29ucy99XG4gKi9cblxuLyoqIFBhdGggZm9yIGBjZHhJY29uQ2xvc2VgLiAqL1xuY29uc3QgY2R4SWNvbkNsb3NlID1cblx0J00xNi43MDcgNC43MDcgMTEuNDE0IDEwbDUuMjkzIDUuMjkzLTEuNDE0IDEuNDE0TDEwIDExLjQxNGwtNS4yOTMgNS4yOTMtMS40MTQtMS40MTRMOC41ODYgMTAgMy4yOTMgNC43MDdsMS40MTQtMS40MTRMMTAgOC41ODZsNS4yOTMtNS4yOTN6JztcblxuLyoqIFBhdGggZm9yIGBjZHhJY29uUmVmZXJlbmNlYC4gKi9cbmNvbnN0IGNkeEljb25SZWZlcmVuY2UgPSAnTTE4IDIwSDJWMGgxNnpNNCAxOGgxMlYyaC0ydjEwaC0uOTE0TDEyIDExbC0xLjA4NiAxSDEwVjJINHonO1xuXG4vKiogUGF0aCBmb3IgYGNkeEljb25Eb3duVHJpYW5nbGVgLiAqL1xuY29uc3QgY2R4SWNvbkRvd25UcmlhbmdsZSA9ICdNNSA4aDEwdjFsLTUgNS01LTV6JztcblxuLyoqXG4gKiBSZW5kZXIgYW4gYEB3aWtpbWVkaWEvY29kZXgtaWNvbnNgIHBhdGggYXMgYW4gaW5saW5lIGA8c3ZnPmAgc3RyaW5nLlxuICpcbiAqIFRoZSBTVkcgaXMgc2l6ZWQgdG8gMTAwJSBvZiBpdHMgcGFyZW50IHNvIGNvbnN1bWVycyBjb250cm9sIHRoZVxuICogZGltZW5zaW9ucyB2aWEgQ1NTLCBhbmQgYGN1cnJlbnRDb2xvcmAgaXMgdXNlZCBzbyB0aGUgaWNvbiBpbmhlcml0c1xuICogaXRzIGNvbG9yIGZyb20gdGhlIHN1cnJvdW5kaW5nIHRleHQuXG4gKlxuICogQHBhcmFtIHBhdGggVGhlIHBhdGggZGF0YSBmcm9tIGBAd2lraW1lZGlhL2NvZGV4LWljb25zYC5cbiAqIEByZXR1cm5zIFRoZSBpbmxpbmUgU1ZHIG1hcmt1cC5cbiAqL1xuY29uc3QgdG9JbmxpbmVTdmcgPSAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0cmV0dXJuIGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PHBhdGggZD1cIiR7cGF0aH1cIi8+PC9zdmc+YDtcbn07XG5cbmV4cG9ydCB7Y2R4SWNvbkNsb3NlLCBjZHhJY29uUmVmZXJlbmNlLCBjZHhJY29uRG93blRyaWFuZ2xlLCB0b0lubGluZVN2Z307XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdENsb3NlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0Nsb3NlJyxcblx0XHRcdGphOiAn6ZaJ44GY44KLJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WFs+mXrScsXG5cdFx0XHQnemgtaGFudCc6ICfpl5zploknLFxuXHRcdH0pLFxuXHRcdENvbnRlbnRzOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NvbnRlbnRzJyxcblx0XHRcdGphOiAn55uu5qyhJyxcblx0XHRcdHpoOiAn55uu5b2VJyxcblx0XHR9KSxcblx0XHRDb2xsYXBzZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDb2xsYXBzZScsXG5cdFx0XHRqYTogJ+aKmOOCiueVs+OBvycsXG5cdFx0XHQnemgtaGFucyc6ICfmipjlj6AnLFxuXHRcdFx0J3poLWhhbnQnOiAn5pG65Y+gJyxcblx0XHR9KSxcblx0XHRFeHBhbmQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRXhwYW5kJyxcblx0XHRcdGphOiAn5bGV6ZaLJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WxleW8gCcsXG5cdFx0XHQnemgtaGFudCc6ICflsZXplosnLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQgeyBjcmVhdGVWTm9kZSBhcyBfY3JlYXRlVk5vZGUsIHRvRGlzcGxheVN0cmluZyBhcyBfdG9EaXNwbGF5U3RyaW5nLCBjcmVhdGVFbGVtZW50Vk5vZGUgYXMgX2NyZWF0ZUVsZW1lbnRWTm9kZSwgdlNob3cgYXMgX3ZTaG93LCB3aXRoQ3R4IGFzIF93aXRoQ3R4LCB3aXRoRGlyZWN0aXZlcyBhcyBfd2l0aERpcmVjdGl2ZXMsIFRyYW5zaXRpb24gYXMgX1RyYW5zaXRpb24sIHdpdGhNb2RpZmllcnMgYXMgX3dpdGhNb2RpZmllcnMsIGNyZWF0ZUNvbW1lbnRWTm9kZSBhcyBfY3JlYXRlQ29tbWVudFZOb2RlLCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2sgfSBmcm9tIFwidnVlXCJcblxuY29uc3QgX2hvaXN0ZWRfMSA9IHsgY2xhc3M6IFwiZmxvYXQtdG9jX19vcGVuZXItdGV4dFwiIH1cbmNvbnN0IF9ob2lzdGVkXzIgPSBbXCJpbm5lckhUTUxcIl1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcbiAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJkaXZcIiwgbnVsbCwgW1xuICAgIF9jcmVhdGVWTm9kZShfVHJhbnNpdGlvbiwge1xuICAgICAgbmFtZTogXCJmbG9hdC10b2MtZmFkZVwiLFxuICAgICAgcGVyc2lzdGVkOiBcIlwiXG4gICAgfSwge1xuICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICBfd2l0aERpcmVjdGl2ZXMoX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkNkeEJ1dHRvblwiXSwge1xuICAgICAgICAgIGNsYXNzOiBcImZsb2F0LXRvY19fb3BlbmVyXCIsXG4gICAgICAgICAgd2VpZ2h0OiBcInF1aWV0XCIsXG4gICAgICAgICAgXCJhcmlhLWxhYmVsXCI6ICRzZXR1cC5nZXRNZXNzYWdlKCdDb250ZW50cycpLFxuICAgICAgICAgIG9uQ2xpY2s6ICRwcm9wcy50cmlnZ2VyT3BlblxuICAgICAgICB9LCB7XG4gICAgICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkNkeEljb25cIl0sIHsgaWNvbjogJHNldHVwLnJlZmVyZW5jZUljb24gfSksXG4gICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwic3BhblwiLCBfaG9pc3RlZF8xLCBfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5nZXRNZXNzYWdlKCdDb250ZW50cycpKSwgMSAvKiBURVhUICovKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgICAgIH0sIDggLyogUFJPUFMgKi8sIFtcImFyaWEtbGFiZWxcIiwgXCJvbkNsaWNrXCJdKSwgW1xuICAgICAgICAgIFtfdlNob3csICRwcm9wcy5zdGF0ZS5vcGVuZXJdXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgfSksXG4gICAgX2NyZWF0ZVZOb2RlKF9UcmFuc2l0aW9uLCB7XG4gICAgICBuYW1lOiBcImZsb2F0LXRvYy1mYWRlXCIsXG4gICAgICBwZXJzaXN0ZWQ6IFwiXCJcbiAgICB9LCB7XG4gICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgIF93aXRoRGlyZWN0aXZlcyhfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIHtcbiAgICAgICAgICBjbGFzczogXCJmbG9hdC10b2NcIixcbiAgICAgICAgICBvbkNsaWNrOiBfY2FjaGVbMF0gfHwgKF9jYWNoZVswXSA9ICguLi5hcmdzKSA9PiAoJHByb3BzLnRyaWdnZXJTY3JvbGwgJiYgJHByb3BzLnRyaWdnZXJTY3JvbGwoLi4uYXJncykpKVxuICAgICAgICB9LCBbXG4gICAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkNkeEJ1dHRvblwiXSwge1xuICAgICAgICAgICAgY2xhc3M6IFwiZmxvYXQtdG9jX19jbG9zZVwiLFxuICAgICAgICAgICAgd2VpZ2h0OiBcInF1aWV0XCIsXG4gICAgICAgICAgICBcImFyaWEtbGFiZWxcIjogJHNldHVwLmdldE1lc3NhZ2UoJ0Nsb3NlJyksXG4gICAgICAgICAgICBvbkNsaWNrOiBfd2l0aE1vZGlmaWVycygkcHJvcHMudHJpZ2dlckNsb3NlLCBbXCJzdG9wXCJdKVxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkNkeEljb25cIl0sIHsgaWNvbjogJHNldHVwLmNsb3NlSWNvbiB9KVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgICAgICAgIH0sIDggLyogUFJPUFMgKi8sIFtcImFyaWEtbGFiZWxcIiwgXCJvbkNsaWNrXCJdKSxcbiAgICAgICAgICBfY3JlYXRlQ29tbWVudFZOb2RlKFwiIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB2dWUvbm8tdi1odG1sIC0tIHRvY0h0bWwgaXMgYSBjbG9uZSBvZiB0aGUgcGFnZSdzIG93biBUT0MgbWFya3VwIFwiKSxcbiAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIHtcbiAgICAgICAgICAgIGNsYXNzOiBcImZsb2F0LXRvY19fY29udGVudFwiLFxuICAgICAgICAgICAgaW5uZXJIVE1MOiAkcHJvcHMudG9jSHRtbFxuICAgICAgICAgIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIF9ob2lzdGVkXzIpXG4gICAgICAgIF0sIDUxMiAvKiBORUVEX1BBVENIICovKSwgW1xuICAgICAgICAgIFtfdlNob3csICRwcm9wcy5zdGF0ZS5vcGVuXVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgIH0pXG4gIF0pKVxufSIsICJpbXBvcnQgc2NyaXB0IGZyb20gXCJFOlxcXFxDb2Rlc1xcXFxRaXV3ZW5cXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcRmxvYXRUT0NcXFxcQXBwLnZ1ZT90eXBlPXNjcmlwdFwiO2ltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJFOlxcXFxDb2Rlc1xcXFxRaXV3ZW5cXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcRmxvYXRUT0NcXFxcQXBwLnZ1ZT90eXBlPXRlbXBsYXRlXCI7IHNjcmlwdC5yZW5kZXIgPSByZW5kZXI7c2NyaXB0Ll9fZmlsZSA9IFwic3JjXFxcXEZsb2F0VE9DXFxcXEFwcC52dWVcIjtleHBvcnQgZGVmYXVsdCBzY3JpcHQ7IiwgImltcG9ydCB7Y2R4SWNvbkRvd25UcmlhbmdsZSwgdG9JbmxpbmVTdmd9IGZyb20gJy4uL2ljb25zJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5cbmNvbnN0IGdlbmVyYXRlVG9nZ2xlckVsZW1lbnQgPSAoaXNDb2xsYXBzZTogYm9vbGVhbik6IEpRdWVyeSA9PiB7XG5cdGNvbnN0ICR0b2dnbGVyOiBKUXVlcnkgPSAkKCc8c3Bhbj4nKS5hZGRDbGFzcygnZmxvYXQtdG9jX190b2dnbGVyJykuaHRtbCh0b0lubGluZVN2ZyhjZHhJY29uRG93blRyaWFuZ2xlKSk7XG5cblx0aWYgKGlzQ29sbGFwc2UpIHtcblx0XHQkdG9nZ2xlci5hdHRyKCd0aXRsZScsIGdldE1lc3NhZ2UoJ0V4cGFuZCcpKTtcblx0fSBlbHNlIHtcblx0XHQkdG9nZ2xlci5hdHRyKCd0aXRsZScsIGdldE1lc3NhZ2UoJ0NvbGxhcHNlJykpLmFkZENsYXNzKCdjb2xsYXBzZScpO1xuXHR9XG5cblx0cmV0dXJuICR0b2dnbGVyO1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZVRvZ2dsZXJFbGVtZW50fTtcbiIsICJpbXBvcnQgdHlwZSB7Q29uZmlnfSBmcm9tICcuL3R5cGVzJztcblxuY29uc3QgZ2V0Q29uZmlnID0gKGlkOiBzdHJpbmcpOiBDb25maWcgPT4ge1xuXHRsZXQgY29uZmlnID0gbXcuc3RvcmFnZS5nZXRPYmplY3QoaWQpIGFzIFJldHVyblR5cGU8dHlwZW9mIGdldENvbmZpZz47XG5cdGNvbmZpZyB8fD0ge1xuXHRcdGZsb2F0VE9DOiB3aW5kb3cub3V0ZXJIZWlnaHQgPCB3aW5kb3cub3V0ZXJXaWR0aCA/ICdvcGVuJyA6ICdjbG9zZScsXG5cdFx0b3JpZ2luVE9DOiAnb3BlbicsXG5cdH07XG5cblx0cmV0dXJuIGNvbmZpZztcbn07XG5cbmV4cG9ydCB7Z2V0Q29uZmlnfTtcbiIsICJpbXBvcnQgJy4vRmxvYXRUT0MubGVzcyc7XG5pbXBvcnQge2Zsb2F0VE9DfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCAkb3JpZ2luVG9jOiBKUXVlcnkgPSAkYm9keS5maW5kKCcjdG9jJyk7XG5cdGlmICghJG9yaWdpblRvYy5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRmbG9hdFRPQygkb3JpZ2luVG9jKTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQyxJQUFBQSxZQUFhOztBQ0NkLElBQUFDLGNBQXNEQyxRQUFBLEtBQUE7O0FDRHRELElBQUFDLGVBQWlDRCxRQUFBLGtCQUFBOztBQ1lqQyxJQUFNRSxlQUNMO0FBR0QsSUFBTUMsbUJBQW1CO0FBR3pCLElBQU1DLHNCQUFzQjtBQVk1QixJQUFNQyxjQUFlQyxVQUF5QjtBQUM3QyxTQUFBLDJGQUFBQyxPQUFrR0QsTUFBSSxXQUFBO0FBQ3ZHOztBQ2xDQSxJQUFBRSxvQkFBdUJSLFFBQUEsaUJBQUE7QUFFdkIsSUFBTVMsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsUUFBQSxHQUFPRixrQkFBQUcsVUFBUztNQUNmQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREMsV0FBQSxHQUFVTixrQkFBQUcsVUFBUztNQUNsQkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pFLElBQUk7SUFDTCxDQUFDO0lBQ0RDLFdBQUEsR0FBVVIsa0JBQUFHLFVBQVM7TUFDbEJDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNESSxTQUFBLEdBQVFULGtCQUFBRyxVQUFTO01BQ2hCQyxJQUFJO01BQ0pDLElBQUk7TUFDSixX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QXFCO0FBQ25FRyxlQUFTQyxZQUFZLFVBQVU7QUFDL0IsVUFBSXZFLFlBQVk7QUFDZnNFLGlCQUFTakUsS0FBSyxTQUFTcEQsV0FBVyxRQUFRLENBQUM7TUFDNUMsT0FBTztBQUNOcUgsaUJBQVNqRSxLQUFLLFNBQVNwRCxXQUFXLFVBQVUsQ0FBQztNQUM5QztJQUNEO0FBQ0FpSCxvQkFBZ0JNLEdBQUcsU0FBUyxNQUFZO0FBQ3ZDdkMsaUJBQVcsYUFBYWpDLGFBQWEsU0FBUyxPQUFPO0FBQ3JEcUUscUJBQWU7QUFDZkQscUJBQWVLLFdBQVc7SUFDM0IsQ0FBQztBQUVELFFBQUl6RSxZQUFZO0FBQ2ZvRSxxQkFBZU0sUUFBUTtJQUN4QjtFQUNEO0FBQ0FULG9CQUFrQjtBQUNuQjs7QVF0SkEsSUFBQVUscUJBQXNCN0ksUUFBQSxpQkFBQTtBQUV0QixNQUFBLEdBQUs2SSxtQkFBQUMsU0FBUSxFQUFFQyxLQUFNckQsV0FBeUM7QUFDN0QsUUFBTU4sYUFBcUJNLE1BQU0yQyxLQUFLLE1BQU07QUFDNUMsTUFBSSxDQUFDakQsV0FBVzRELFFBQVE7QUFDdkI7RUFDRDtBQUVBbEUsV0FBU00sVUFBVTtBQUNwQixDQUFDOyIsCiAgIm5hbWVzIjogWyJlbGVtZW50SWQiLCAiaW1wb3J0X3Z1ZTMiLCAicmVxdWlyZSIsICJpbXBvcnRfY29kZXgiLCAiY2R4SWNvbkNsb3NlIiwgImNkeEljb25SZWZlcmVuY2UiLCAiY2R4SWNvbkRvd25UcmlhbmdsZSIsICJ0b0lubGluZVN2ZyIsICJwYXRoIiwgImNvbmNhdCIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAiQ2xvc2UiLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiQ29udGVudHMiLCAiemgiLCAiQ29sbGFwc2UiLCAiRXhwYW5kIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJjbG9zZUljb24iLCAicmVmZXJlbmNlSWNvbiIsICJpbXBvcnRfdnVlMiIsICJfaG9pc3RlZF8xIiwgImNsYXNzIiwgIl9ob2lzdGVkXzIiLCAicmVuZGVyIiwgIl9jdHgiLCAiX2NhY2hlIiwgIiRwcm9wcyIsICIkc2V0dXAiLCAiJGRhdGEiLCAiJG9wdGlvbnMiLCAib3BlbkJsb2NrIiwgImNyZWF0ZUVsZW1lbnRCbG9jayIsICJjcmVhdGVWTm9kZSIsICJUcmFuc2l0aW9uIiwgIm5hbWUiLCAicGVyc2lzdGVkIiwgImRlZmF1bHQiLCAid2l0aEN0eCIsICJ3aXRoRGlyZWN0aXZlcyIsICJ3ZWlnaHQiLCAib25DbGljayIsICJ0cmlnZ2VyT3BlbiIsICJpY29uIiwgImNyZWF0ZUVsZW1lbnRWTm9kZSIsICJ0b0Rpc3BsYXlTdHJpbmciLCAiXyIsICJ2U2hvdyIsICJzdGF0ZSIsICJvcGVuZXIiLCAiYXJncyIsICJ0cmlnZ2VyU2Nyb2xsIiwgIndpdGhNb2RpZmllcnMiLCAidHJpZ2dlckNsb3NlIiwgImNyZWF0ZUNvbW1lbnRWTm9kZSIsICJpbm5lckhUTUwiLCAidG9jSHRtbCIsICJvcGVuIiwgIkFwcF9kZWZhdWx0IiwgIl9fZmlsZSIsICJBcHBfZGVmYXVsdDIiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImdlbmVyYXRlVG9nZ2xlckVsZW1lbnQiLCAiaXNDb2xsYXBzZSIsICIkdG9nZ2xlciIsICIkIiwgImFkZENsYXNzIiwgImh0bWwiLCAiYXR0ciIsICJnZXRDb25maWciLCAiaWQiLCAiY29uZmlnIiwgIm13IiwgInN0b3JhZ2UiLCAiZ2V0T2JqZWN0IiwgImZsb2F0VE9DIiwgIndpbmRvdyIsICJvdXRlckhlaWdodCIsICJvdXRlcldpZHRoIiwgIm9yaWdpblRPQyIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiJG9yaWdpblRvYyIsICJfdG9jJHF1ZXJ5U2VsZWN0b3IiLCAiX3RvYyRxdWVyeVNlbGVjdG9yMiIsICJza2luIiwgImdldCIsICJvcmlnaW5Ub2MiLCAiJGJvZHkiLCAicGFyZW50cyIsICJ0b2MiLCAiY2xvbmVOb2RlIiwgInF1ZXJ5U2VsZWN0b3IiLCAicmVtb3ZlIiwgInJlbW92ZUF0dHJpYnV0ZSIsICJvdXRlckhUTUwiLCAicmVhY3RpdmUiLCAic3RvcmVTdGF0ZSIsICJ0YXJnZXQiLCAidmFsdWUiLCAic2V0T2JqZWN0IiwgInNob3dQYW5lbCIsICJzaG93T3BlbmVyIiwgImhpZGVBbGwiLCAic21vb3RoU2Nyb2xsIiwgImV2ZW50IiwgIiR0YXJnZXQiLCAicGFyZW50IiwgImhyZWYiLCAiYW5jaG9yT2Zmc2V0IiwgIm9mZnNldCIsICJwcmV2ZW50RGVmYXVsdCIsICJzY3JvbGxUb3AiLCAidG9wIiwgImZpbHRlckFsdGVyZWRDbGlja3MiLCAicm9vdCIsICJkb2N1bWVudCIsICJjcmVhdGVFbGVtZW50IiwgImFwcGVuZCIsICJhcHAiLCAiY3JlYXRlQXBwIiwgIm1vdW50IiwgIm9ic2VydmVyQ2FsbGJhY2siLCAiZW50cmllcyIsICJlbnRyeSIsICJpbnRlcnNlY3Rpb25SYXRpbyIsICJpbnRlcnNlY3Rpb25PYnNlcnZlciIsICJJbnRlcnNlY3Rpb25PYnNlcnZlciIsICJvYnNlcnZlIiwgImNvbGxhcHNlT3JpZ2luVG9jIiwgIiRvcmlnaW5Ub2NUaXRsZSIsICJmaW5kIiwgIiRvcmlnaW5Ub2NJdGVtIiwgImNvbGxhcHNlVG9nZ2xlIiwgIiRlbGVtZW50IiwgInRvZ2dsZUNsYXNzIiwgIm9uIiwgImZhZGVUb2dnbGUiLCAiZmFkZU91dCIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgImxlbmd0aCJdCn0K

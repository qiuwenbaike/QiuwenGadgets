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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0Zsb2F0VE9DL29wdGlvbnMuanNvbiIsICJzcmMvRmxvYXRUT0MvbW9kdWxlcy9jb3JlLnRzIiwgImRpc3QvRmxvYXRUT0Mvc3JjL0Zsb2F0VE9DL0FwcC52dWUiLCAic3JjL0Zsb2F0VE9DL21vZHVsZXMvaWNvbnMudHMiLCAic3JjL0Zsb2F0VE9DL21vZHVsZXMvaTE4bi50cyIsICJzZmMtdGVtcGxhdGU6RDpcXEdpdFJlcG9zaXRvcnlcXFFpdXdlbkdhZGdldHNcXHNyY1xcRmxvYXRUT0NcXEFwcC52dWU/dHlwZT10ZW1wbGF0ZSIsICJzcmMvRmxvYXRUT0MvQXBwLnZ1ZSIsICJzcmMvRmxvYXRUT0MvbW9kdWxlcy91dGlsL2dlbmVyYXRlVG9nZ2xlckVsZW1lbnQudHMiLCAic3JjL0Zsb2F0VE9DL21vZHVsZXMvZ2V0Q29uZmlnLnRzIiwgInNyYy9GbG9hdFRPQy9GbG9hdFRPQy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsie1xuXHRcImVsZW1lbnRJZFwiOiBcImZsb2F0VE9DXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQgdHlwZSB7Q29uZmlnLCBTdGF0ZX0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge3R5cGUgQXBwIGFzIFZ1ZUFwcCwgY3JlYXRlQXBwLCByZWFjdGl2ZX0gZnJvbSAndnVlJztcbmltcG9ydCBBcHAgZnJvbSAnLi4vQXBwLnZ1ZSc7XG5pbXBvcnQge2ZpbHRlckFsdGVyZWRDbGlja3N9IGZyb20gJ2V4dC5nYWRnZXQuRmlsdGVyQWx0ZXJlZENsaWNrcyc7XG5pbXBvcnQge2dlbmVyYXRlVG9nZ2xlckVsZW1lbnR9IGZyb20gJy4vdXRpbC9nZW5lcmF0ZVRvZ2dsZXJFbGVtZW50JztcbmltcG9ydCB7Z2V0Q29uZmlnfSBmcm9tICcuL2dldENvbmZpZyc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge3Njcm9sbFRvcH0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuaW50ZXJmYWNlIEZsb2F0VG9jU3RhdGUge1xuXHRvcGVuOiBib29sZWFuO1xuXHRvcGVuZXI6IGJvb2xlYW47XG59XG5cbmNvbnN0IGZsb2F0VE9DID0gKCRvcmlnaW5Ub2M6IEpRdWVyeSk6IHZvaWQgPT4ge1xuXHRjb25zdCB7c2tpbn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IG9yaWdpblRvYzogSFRNTEVsZW1lbnQgPSAkb3JpZ2luVG9jLmdldCgwKSBhcyBIVE1MRWxlbWVudDtcblx0Y29uc3QgJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+ID0gJG9yaWdpblRvYy5wYXJlbnRzKCdib2R5Jyk7XG5cblx0Ly8gQ2xvbmUgdGhlIG9yaWdpbiBUT0MgYW5kIGNsZWFuIGl0IHVwIGZvciB0aGUgZmxvYXRpbmcgcGFuZWxcblx0Y29uc3QgdG9jOiBIVE1MRWxlbWVudCA9IG9yaWdpblRvYy5jbG9uZU5vZGUodHJ1ZSkgYXMgSFRNTEVsZW1lbnQ7XG5cdHRvYy5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpPy5yZW1vdmUoKTtcblx0dG9jLnF1ZXJ5U2VsZWN0b3IoJy50b2N0b2dnbGVzcGFuJyk/LnJlbW92ZSgpO1xuXHR0b2MucmVtb3ZlQXR0cmlidXRlKCdpZCcpO1xuXHRjb25zdCB0b2NIdG1sOiBzdHJpbmcgPSB0b2Mub3V0ZXJIVE1MO1xuXG5cdGNvbnN0IGNvbmZpZzogQ29uZmlnID0gZ2V0Q29uZmlnKE9QVElPTlMuZWxlbWVudElkKTtcblxuXHRjb25zdCBzdGF0ZTogRmxvYXRUb2NTdGF0ZSA9IHJlYWN0aXZlKHtcblx0XHRvcGVuOiBmYWxzZSxcblx0XHRvcGVuZXI6IGZhbHNlLFxuXHR9KTtcblxuXHRjb25zdCBzdG9yZVN0YXRlID0gKHRhcmdldDoga2V5b2YgQ29uZmlnLCB2YWx1ZTogU3RhdGUpOiB2b2lkID0+IHtcblx0XHRjb25maWdbdGFyZ2V0XSA9IHZhbHVlO1xuXHRcdG13LnN0b3JhZ2Uuc2V0T2JqZWN0KE9QVElPTlMuZWxlbWVudElkLCBjb25maWcpO1xuXHR9O1xuXG5cdGNvbnN0IHNob3dQYW5lbCA9ICgpOiB2b2lkID0+IHtcblx0XHRzdGF0ZS5vcGVuID0gdHJ1ZTtcblx0XHRzdGF0ZS5vcGVuZXIgPSBmYWxzZTtcblx0fTtcblxuXHRjb25zdCBzaG93T3BlbmVyID0gKCk6IHZvaWQgPT4ge1xuXHRcdHN0YXRlLm9wZW4gPSBmYWxzZTtcblx0XHRzdGF0ZS5vcGVuZXIgPSB0cnVlO1xuXHR9O1xuXG5cdGNvbnN0IGhpZGVBbGwgPSAoKTogdm9pZCA9PiB7XG5cdFx0c3RhdGUub3BlbiA9IGZhbHNlO1xuXHRcdHN0YXRlLm9wZW5lciA9IGZhbHNlO1xuXHR9O1xuXG5cdGNvbnN0IHNtb290aFNjcm9sbCA9IChldmVudDogTW91c2VFdmVudCk6IHZvaWQgPT4ge1xuXHRcdGlmIChza2luID09PSAnY2l0aXplbicpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG5cdFx0Y29uc3QgJHRhcmdldDogSlF1ZXJ5ID0gJCh0YXJnZXQpLnBhcmVudCgpO1xuXHRcdGNvbnN0IGhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICR0YXJnZXQuYXR0cignaHJlZicpO1xuXHRcdGlmICghaHJlZikge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IGFuY2hvck9mZnNldDogSlF1ZXJ5LkNvb3JkaW5hdGVzIHwgdW5kZWZpbmVkID0gJChocmVmKS5vZmZzZXQoKTtcblx0XHRpZiAoIWFuY2hvck9mZnNldCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0c2Nyb2xsVG9wKGAke2FuY2hvck9mZnNldC50b3B9cHhgKTtcblx0fTtcblxuXHQvLyBJZ25vcmUgYWx0ZXJlZCAoQ3RybC9DbWQvU2hpZnQvQWx0IG9yIG5vbi1wcmltYXJ5IGJ1dHRvbikgY2xpY2tzIHNvXG5cdC8vIHRoYXQgdGhleSBrZWVwIHRoZWlyIG5hdGl2ZSBiZWhhdmlvciAoZS5nLiBvcGVuIGluIGEgbmV3IHRhYilcblx0Y29uc3QgdHJpZ2dlclNjcm9sbCA9IGZpbHRlckFsdGVyZWRDbGlja3Moc21vb3RoU2Nyb2xsKTtcblxuXHRjb25zdCB0cmlnZ2VyT3BlbiA9ICgpOiB2b2lkID0+IHtcblx0XHRzdG9yZVN0YXRlKCdmbG9hdFRPQycsICdvcGVuJyk7XG5cdFx0c2hvd1BhbmVsKCk7XG5cdH07XG5cblx0Y29uc3QgdHJpZ2dlckNsb3NlID0gKCk6IHZvaWQgPT4ge1xuXHRcdHN0b3JlU3RhdGUoJ2Zsb2F0VE9DJywgJ2Nsb3NlJyk7XG5cdFx0c2hvd09wZW5lcigpO1xuXHR9O1xuXG5cdGNvbnN0IHJvb3Q6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdCRib2R5LmFwcGVuZChyb290KTtcblxuXHRjb25zdCBhcHA6IFZ1ZUFwcDxFbGVtZW50PiA9IGNyZWF0ZUFwcChBcHAsIHtcblx0XHRzdGF0ZSxcblx0XHR0b2NIdG1sLFxuXHRcdHRyaWdnZXJPcGVuLFxuXHRcdHRyaWdnZXJDbG9zZSxcblx0XHR0cmlnZ2VyU2Nyb2xsLFxuXHR9KTtcblx0YXBwLm1vdW50KHJvb3QpO1xuXG5cdGNvbnN0IG9ic2VydmVyQ2FsbGJhY2sgPSAoZW50cmllczogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeVtdKTogdm9pZCA9PiB7XG5cdFx0Y29uc3QgW2VudHJ5XSA9IGVudHJpZXM7XG5cdFx0aWYgKCFlbnRyeSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPT09IDApIHtcblx0XHRcdGlmIChjb25maWcuZmxvYXRUT0MgPT09ICdjbG9zZScpIHtcblx0XHRcdFx0c2hvd09wZW5lcigpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c2hvd1BhbmVsKCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGhpZGVBbGwoKTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IGludGVyc2VjdGlvbk9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihvYnNlcnZlckNhbGxiYWNrKTtcblx0aW50ZXJzZWN0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShvcmlnaW5Ub2MpO1xuXG5cdGNvbnN0IGNvbGxhcHNlT3JpZ2luVG9jID0gKCk6IHZvaWQgPT4ge1xuXHRcdGlmIChza2luICE9PSAnY2l0aXplbicpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBpc0NvbGxhcHNlOiBib29sZWFuID0gY29uZmlnLm9yaWdpblRPQyA9PT0gJ2Nsb3NlJztcblxuXHRcdGNvbnN0ICRvcmlnaW5Ub2NUaXRsZTogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnI3RvYyAudG9jdGl0bGUnKTtcblx0XHRjb25zdCAkb3JpZ2luVG9jSXRlbTogSlF1ZXJ5ID0gJGJvZHkuZmluZCgnI3RvYyB1bCcpO1xuXG5cdFx0Y29uc3QgJHRvZ2dsZXI6IEpRdWVyeSA9IGdlbmVyYXRlVG9nZ2xlckVsZW1lbnQoaXNDb2xsYXBzZSk7XG5cdFx0JG9yaWdpblRvY1RpdGxlLmFwcGVuZCgkdG9nZ2xlcik7XG5cblx0XHRjb25zdCBjb2xsYXBzZVRvZ2dsZSA9ICgpOiB2b2lkID0+IHtcblx0XHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkb3JpZ2luVG9jVGl0bGUuZmluZCgnLmZsb2F0LXRvY19fdG9nZ2xlcicpO1xuXHRcdFx0JGVsZW1lbnQudG9nZ2xlQ2xhc3MoJ2NvbGxhcHNlJyk7XG5cdFx0XHRpZiAoaXNDb2xsYXBzZSkge1xuXHRcdFx0XHQkZWxlbWVudC5hdHRyKCd0aXRsZScsIGdldE1lc3NhZ2UoJ0V4cGFuZCcpKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCRlbGVtZW50LmF0dHIoJ3RpdGxlJywgZ2V0TWVzc2FnZSgnQ29sbGFwc2UnKSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHQkb3JpZ2luVG9jVGl0bGUub24oJ2NsaWNrJywgKCk6IHZvaWQgPT4ge1xuXHRcdFx0c3RvcmVTdGF0ZSgnb3JpZ2luVE9DJywgaXNDb2xsYXBzZSA/ICdvcGVuJyA6ICdjbG9zZScpO1xuXHRcdFx0Y29sbGFwc2VUb2dnbGUoKTtcblx0XHRcdCRvcmlnaW5Ub2NJdGVtLmZhZGVUb2dnbGUoKTtcblx0XHR9KTtcblxuXHRcdGlmIChpc0NvbGxhcHNlKSB7XG5cdFx0XHQkb3JpZ2luVG9jSXRlbS5mYWRlT3V0KCk7XG5cdFx0fVxuXHR9O1xuXHRjb2xsYXBzZU9yaWdpblRvYygpO1xufTtcblxuZXhwb3J0IHtmbG9hdFRPQ307XG4iLCAiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7Q2R4QnV0dG9uLCBDZHhJY29ufSBmcm9tICdAd2lraW1lZGlhL2NvZGV4JztcbmltcG9ydCB7Y2R4SWNvbkNsb3NlLCBjZHhJY29uUmVmZXJlbmNlfSBmcm9tICcuL21vZHVsZXMvaWNvbnMnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL21vZHVsZXMvaTE4bic7XG5cbmRlZmluZVByb3BzPHtcblx0c3RhdGU6IHtcblx0XHRvcGVuOiBib29sZWFuO1xuXHRcdG9wZW5lcjogYm9vbGVhbjtcblx0fTtcblx0dG9jSHRtbDogc3RyaW5nO1xuXHR0cmlnZ2VyT3BlbjogKCkgPT4gdm9pZDtcblx0dHJpZ2dlckNsb3NlOiAoKSA9PiB2b2lkO1xuXHR0cmlnZ2VyU2Nyb2xsOiAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHZvaWQ7XG59PigpO1xuXG5jb25zdCBjbG9zZUljb24gPSB7XG5cdHBhdGg6IGNkeEljb25DbG9zZSxcbn07XG5cbmNvbnN0IHJlZmVyZW5jZUljb24gPSB7XG5cdHBhdGg6IGNkeEljb25SZWZlcmVuY2UsXG59O1xuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cblx0PGRpdj5cblx0XHQ8dHJhbnNpdGlvbiBuYW1lPVwiZmxvYXQtdG9jLWZhZGVcIj5cblx0XHRcdDxjZHgtYnV0dG9uXG5cdFx0XHRcdHYtc2hvdz1cInN0YXRlLm9wZW5lclwiXG5cdFx0XHRcdGNsYXNzPVwiZmxvYXQtdG9jX19vcGVuZXJcIlxuXHRcdFx0XHR3ZWlnaHQ9XCJxdWlldFwiXG5cdFx0XHRcdDphcmlhLWxhYmVsPVwiZ2V0TWVzc2FnZSgnQ29udGVudHMnKVwiXG5cdFx0XHRcdEBjbGljaz1cInRyaWdnZXJPcGVuXCJcblx0XHRcdD5cblx0XHRcdFx0PGNkeC1pY29uIDppY29uPVwicmVmZXJlbmNlSWNvblwiIC8+XG5cdFx0XHRcdDxzcGFuIGNsYXNzPVwiZmxvYXQtdG9jX19vcGVuZXItdGV4dFwiPnt7IGdldE1lc3NhZ2UoJ0NvbnRlbnRzJykgfX08L3NwYW4+XG5cdFx0XHQ8L2NkeC1idXR0b24+XG5cdFx0PC90cmFuc2l0aW9uPlxuXHRcdDx0cmFuc2l0aW9uIG5hbWU9XCJmbG9hdC10b2MtZmFkZVwiPlxuXHRcdFx0PGRpdiB2LXNob3c9XCJzdGF0ZS5vcGVuXCIgY2xhc3M9XCJmbG9hdC10b2NcIiBAY2xpY2s9XCJ0cmlnZ2VyU2Nyb2xsXCI+XG5cdFx0XHRcdDxjZHgtYnV0dG9uXG5cdFx0XHRcdFx0Y2xhc3M9XCJmbG9hdC10b2NfX2Nsb3NlXCJcblx0XHRcdFx0XHR3ZWlnaHQ9XCJxdWlldFwiXG5cdFx0XHRcdFx0OmFyaWEtbGFiZWw9XCJnZXRNZXNzYWdlKCdDbG9zZScpXCJcblx0XHRcdFx0XHRAY2xpY2suc3RvcD1cInRyaWdnZXJDbG9zZVwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8Y2R4LWljb24gOmljb249XCJjbG9zZUljb25cIiAvPlxuXHRcdFx0XHQ8L2NkeC1idXR0b24+XG5cdFx0XHRcdDwhLS0gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHZ1ZS9uby12LWh0bWwgLS0gdG9jSHRtbCBpcyBhIGNsb25lIG9mIHRoZSBwYWdlJ3Mgb3duIFRPQyBtYXJrdXAgLS0+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJmbG9hdC10b2NfX2NvbnRlbnRcIiB2LWh0bWw9XCJ0b2NIdG1sXCI+PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L3RyYW5zaXRpb24+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cbiIsICIvKipcbiAqIFNWRyBwYXRocyBpbmxpbmVkIGZyb20gYEB3aWtpbWVkaWEvY29kZXgtaWNvbnNgIHYyLjcuMC5cbiAqXG4gKiBNZWRpYVdpa2kgZG9lcyBub3Qgc2hpcCBhIFJlc291cmNlTG9hZGVyIG1vZHVsZSB0aGF0IGJ1bmRsZXNcbiAqIGBAd2lraW1lZGlhL2NvZGV4LWljb25zYCAoc2VlIGh0dHBzOi8vd3d3Lm1lZGlhd2lraS5vcmcvd2lraS9Db2RleCksXG4gKiBzbyB0aGUgcGF0aCBkYXRhIGlzIGNvcGllZCBoZXJlIHZlcmJhdGltIGFuZCByZW5kZXJlZCBhcyBpbmxpbmUgU1ZHXG4gKiB0byBrZWVwIHRoZSBnYWRnZXQgc2VsZi1jb250YWluZWQgd2hpbGUgc3RpbGwgc291cmNpbmcgdGhlIGljb25zXG4gKiBmcm9tIGBAd2lraW1lZGlhL2NvZGV4LWljb25zYC5cbiAqXG4gKiBAc2VlIHtAbGluayBodHRwczovL2RvYy53aWtpbWVkaWEub3JnL2NvZGV4L2xhdGVzdC9pY29ucy99XG4gKi9cblxuLyoqIFBhdGggZm9yIGBjZHhJY29uQ2xvc2VgLiAqL1xuY29uc3QgY2R4SWNvbkNsb3NlID1cblx0J00xNi43MDcgNC43MDcgMTEuNDE0IDEwbDUuMjkzIDUuMjkzLTEuNDE0IDEuNDE0TDEwIDExLjQxNGwtNS4yOTMgNS4yOTMtMS40MTQtMS40MTRMOC41ODYgMTAgMy4yOTMgNC43MDdsMS40MTQtMS40MTRMMTAgOC41ODZsNS4yOTMtNS4yOTN6JztcblxuLyoqIFBhdGggZm9yIGBjZHhJY29uUmVmZXJlbmNlYC4gKi9cbmNvbnN0IGNkeEljb25SZWZlcmVuY2UgPSAnTTE4IDIwSDJWMGgxNnpNNCAxOGgxMlYyaC0ydjEwaC0uOTE0TDEyIDExbC0xLjA4NiAxSDEwVjJINHonO1xuXG4vKiogUGF0aCBmb3IgYGNkeEljb25Eb3duVHJpYW5nbGVgLiAqL1xuY29uc3QgY2R4SWNvbkRvd25UcmlhbmdsZSA9ICdNNSA4aDEwdjFsLTUgNS01LTV6JztcblxuLyoqXG4gKiBSZW5kZXIgYW4gYEB3aWtpbWVkaWEvY29kZXgtaWNvbnNgIHBhdGggYXMgYW4gaW5saW5lIGA8c3ZnPmAgc3RyaW5nLlxuICpcbiAqIFRoZSBTVkcgaXMgc2l6ZWQgdG8gMTAwJSBvZiBpdHMgcGFyZW50IHNvIGNvbnN1bWVycyBjb250cm9sIHRoZVxuICogZGltZW5zaW9ucyB2aWEgQ1NTLCBhbmQgYGN1cnJlbnRDb2xvcmAgaXMgdXNlZCBzbyB0aGUgaWNvbiBpbmhlcml0c1xuICogaXRzIGNvbG9yIGZyb20gdGhlIHN1cnJvdW5kaW5nIHRleHQuXG4gKlxuICogQHBhcmFtIHBhdGggVGhlIHBhdGggZGF0YSBmcm9tIGBAd2lraW1lZGlhL2NvZGV4LWljb25zYC5cbiAqIEByZXR1cm5zIFRoZSBpbmxpbmUgU1ZHIG1hcmt1cC5cbiAqL1xuY29uc3QgdG9JbmxpbmVTdmcgPSAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0cmV0dXJuIGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PHBhdGggZD1cIiR7cGF0aH1cIi8+PC9zdmc+YDtcbn07XG5cbmV4cG9ydCB7Y2R4SWNvbkNsb3NlLCBjZHhJY29uUmVmZXJlbmNlLCBjZHhJY29uRG93blRyaWFuZ2xlLCB0b0lubGluZVN2Z307XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdENsb3NlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0Nsb3NlJyxcblx0XHRcdGphOiAn6ZaJ44GY44KLJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WFs+mXrScsXG5cdFx0XHQnemgtaGFudCc6ICfpl5zploknLFxuXHRcdH0pLFxuXHRcdENvbnRlbnRzOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NvbnRlbnRzJyxcblx0XHRcdGphOiAn55uu5qyhJyxcblx0XHRcdHpoOiAn55uu5b2VJyxcblx0XHR9KSxcblx0XHRDb2xsYXBzZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDb2xsYXBzZScsXG5cdFx0XHRqYTogJ+aKmOOCiueVs+OBvycsXG5cdFx0XHQnemgtaGFucyc6ICfmipjlj6AnLFxuXHRcdFx0J3poLWhhbnQnOiAn5pG65Y+gJyxcblx0XHR9KSxcblx0XHRFeHBhbmQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRXhwYW5kJyxcblx0XHRcdGphOiAn5bGV6ZaLJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WxleW8gCcsXG5cdFx0XHQnemgtaGFudCc6ICflsZXplosnLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQgeyBjcmVhdGVWTm9kZSBhcyBfY3JlYXRlVk5vZGUsIHRvRGlzcGxheVN0cmluZyBhcyBfdG9EaXNwbGF5U3RyaW5nLCBjcmVhdGVFbGVtZW50Vk5vZGUgYXMgX2NyZWF0ZUVsZW1lbnRWTm9kZSwgdlNob3cgYXMgX3ZTaG93LCB3aXRoQ3R4IGFzIF93aXRoQ3R4LCB3aXRoRGlyZWN0aXZlcyBhcyBfd2l0aERpcmVjdGl2ZXMsIFRyYW5zaXRpb24gYXMgX1RyYW5zaXRpb24sIHdpdGhNb2RpZmllcnMgYXMgX3dpdGhNb2RpZmllcnMsIGNyZWF0ZUNvbW1lbnRWTm9kZSBhcyBfY3JlYXRlQ29tbWVudFZOb2RlLCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2sgfSBmcm9tIFwidnVlXCJcblxuY29uc3QgX2hvaXN0ZWRfMSA9IHsgY2xhc3M6IFwiZmxvYXQtdG9jX19vcGVuZXItdGV4dFwiIH1cbmNvbnN0IF9ob2lzdGVkXzIgPSBbXCJpbm5lckhUTUxcIl1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcbiAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJkaXZcIiwgbnVsbCwgW1xuICAgIF9jcmVhdGVWTm9kZShfVHJhbnNpdGlvbiwge1xuICAgICAgbmFtZTogXCJmbG9hdC10b2MtZmFkZVwiLFxuICAgICAgcGVyc2lzdGVkOiBcIlwiXG4gICAgfSwge1xuICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICBfd2l0aERpcmVjdGl2ZXMoX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkNkeEJ1dHRvblwiXSwge1xuICAgICAgICAgIGNsYXNzOiBcImZsb2F0LXRvY19fb3BlbmVyXCIsXG4gICAgICAgICAgd2VpZ2h0OiBcInF1aWV0XCIsXG4gICAgICAgICAgXCJhcmlhLWxhYmVsXCI6ICRzZXR1cC5nZXRNZXNzYWdlKCdDb250ZW50cycpLFxuICAgICAgICAgIG9uQ2xpY2s6ICRwcm9wcy50cmlnZ2VyT3BlblxuICAgICAgICB9LCB7XG4gICAgICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkNkeEljb25cIl0sIHsgaWNvbjogJHNldHVwLnJlZmVyZW5jZUljb24gfSksXG4gICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwic3BhblwiLCBfaG9pc3RlZF8xLCBfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5nZXRNZXNzYWdlKCdDb250ZW50cycpKSwgMSAvKiBURVhUICovKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgICAgIH0sIDggLyogUFJPUFMgKi8sIFtcImFyaWEtbGFiZWxcIiwgXCJvbkNsaWNrXCJdKSwgW1xuICAgICAgICAgIFtfdlNob3csICRwcm9wcy5zdGF0ZS5vcGVuZXJdXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgfSksXG4gICAgX2NyZWF0ZVZOb2RlKF9UcmFuc2l0aW9uLCB7XG4gICAgICBuYW1lOiBcImZsb2F0LXRvYy1mYWRlXCIsXG4gICAgICBwZXJzaXN0ZWQ6IFwiXCJcbiAgICB9LCB7XG4gICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgIF93aXRoRGlyZWN0aXZlcyhfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIHtcbiAgICAgICAgICBjbGFzczogXCJmbG9hdC10b2NcIixcbiAgICAgICAgICBvbkNsaWNrOiBfY2FjaGVbMF0gfHwgKF9jYWNoZVswXSA9ICguLi5hcmdzKSA9PiAoJHByb3BzLnRyaWdnZXJTY3JvbGwgJiYgJHByb3BzLnRyaWdnZXJTY3JvbGwoLi4uYXJncykpKVxuICAgICAgICB9LCBbXG4gICAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkNkeEJ1dHRvblwiXSwge1xuICAgICAgICAgICAgY2xhc3M6IFwiZmxvYXQtdG9jX19jbG9zZVwiLFxuICAgICAgICAgICAgd2VpZ2h0OiBcInF1aWV0XCIsXG4gICAgICAgICAgICBcImFyaWEtbGFiZWxcIjogJHNldHVwLmdldE1lc3NhZ2UoJ0Nsb3NlJyksXG4gICAgICAgICAgICBvbkNsaWNrOiBfd2l0aE1vZGlmaWVycygkcHJvcHMudHJpZ2dlckNsb3NlLCBbXCJzdG9wXCJdKVxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkNkeEljb25cIl0sIHsgaWNvbjogJHNldHVwLmNsb3NlSWNvbiB9KVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgICAgICAgIH0sIDggLyogUFJPUFMgKi8sIFtcImFyaWEtbGFiZWxcIiwgXCJvbkNsaWNrXCJdKSxcbiAgICAgICAgICBfY3JlYXRlQ29tbWVudFZOb2RlKFwiIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB2dWUvbm8tdi1odG1sIC0tIHRvY0h0bWwgaXMgYSBjbG9uZSBvZiB0aGUgcGFnZSdzIG93biBUT0MgbWFya3VwIFwiKSxcbiAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIHtcbiAgICAgICAgICAgIGNsYXNzOiBcImZsb2F0LXRvY19fY29udGVudFwiLFxuICAgICAgICAgICAgaW5uZXJIVE1MOiAkcHJvcHMudG9jSHRtbFxuICAgICAgICAgIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIF9ob2lzdGVkXzIpXG4gICAgICAgIF0sIDUxMiAvKiBORUVEX1BBVENIICovKSwgW1xuICAgICAgICAgIFtfdlNob3csICRwcm9wcy5zdGF0ZS5vcGVuXVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgIH0pXG4gIF0pKVxufSIsICJpbXBvcnQgc2NyaXB0IGZyb20gXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXEZsb2F0VE9DXFxcXEFwcC52dWU/dHlwZT1zY3JpcHRcIjtpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxGbG9hdFRPQ1xcXFxBcHAudnVlP3R5cGU9dGVtcGxhdGVcIjsgc2NyaXB0LnJlbmRlciA9IHJlbmRlcjtzY3JpcHQuX19maWxlID0gXCJzcmNcXFxcRmxvYXRUT0NcXFxcQXBwLnZ1ZVwiO2V4cG9ydCBkZWZhdWx0IHNjcmlwdDsiLCAiaW1wb3J0IHtjZHhJY29uRG93blRyaWFuZ2xlLCB0b0lubGluZVN2Z30gZnJvbSAnLi4vaWNvbnMnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuY29uc3QgZ2VuZXJhdGVUb2dnbGVyRWxlbWVudCA9IChpc0NvbGxhcHNlOiBib29sZWFuKTogSlF1ZXJ5ID0+IHtcblx0Y29uc3QgJHRvZ2dsZXI6IEpRdWVyeSA9ICQoJzxzcGFuPicpLmFkZENsYXNzKCdmbG9hdC10b2NfX3RvZ2dsZXInKS5odG1sKHRvSW5saW5lU3ZnKGNkeEljb25Eb3duVHJpYW5nbGUpKTtcblxuXHRpZiAoaXNDb2xsYXBzZSkge1xuXHRcdCR0b2dnbGVyLmF0dHIoJ3RpdGxlJywgZ2V0TWVzc2FnZSgnRXhwYW5kJykpO1xuXHR9IGVsc2Uge1xuXHRcdCR0b2dnbGVyLmF0dHIoJ3RpdGxlJywgZ2V0TWVzc2FnZSgnQ29sbGFwc2UnKSkuYWRkQ2xhc3MoJ2NvbGxhcHNlJyk7XG5cdH1cblxuXHRyZXR1cm4gJHRvZ2dsZXI7XG59O1xuXG5leHBvcnQge2dlbmVyYXRlVG9nZ2xlckVsZW1lbnR9O1xuIiwgImltcG9ydCB0eXBlIHtDb25maWd9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCBnZXRDb25maWcgPSAoaWQ6IHN0cmluZyk6IENvbmZpZyA9PiB7XG5cdGxldCBjb25maWcgPSBtdy5zdG9yYWdlLmdldE9iamVjdChpZCkgYXMgUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Q29uZmlnPjtcblx0Y29uZmlnIHx8PSB7XG5cdFx0ZmxvYXRUT0M6IHdpbmRvdy5vdXRlckhlaWdodCA8IHdpbmRvdy5vdXRlcldpZHRoID8gJ29wZW4nIDogJ2Nsb3NlJyxcblx0XHRvcmlnaW5UT0M6ICdvcGVuJyxcblx0fTtcblxuXHRyZXR1cm4gY29uZmlnO1xufTtcblxuZXhwb3J0IHtnZXRDb25maWd9O1xuIiwgImltcG9ydCAnLi9GbG9hdFRPQy5sZXNzJztcbmltcG9ydCB7ZmxvYXRUT0N9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxudm9pZCBnZXRCb2R5KCkudGhlbigoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGNvbnN0ICRvcmlnaW5Ub2M6IEpRdWVyeSA9ICRib2R5LmZpbmQoJyN0b2MnKTtcblx0aWYgKCEkb3JpZ2luVG9jLmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGZsb2F0VE9DKCRvcmlnaW5Ub2MpO1xufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNDLElBQUFBLFlBQWE7O0FDQ2QsSUFBQUMsY0FBc0RDLFFBQUEsS0FBQTs7QUNEdEQsSUFBQUMsZUFBaUNELFFBQUEsa0JBQUE7O0FDWWpDLElBQU1FLGVBQ0w7QUFHRCxJQUFNQyxtQkFBbUI7QUFHekIsSUFBTUMsc0JBQXNCO0FBWTVCLElBQU1DLGNBQWVDLFVBQXlCO0FBQzdDLFNBQUEsMkZBQUFDLE9BQWtHRCxNQUFJLFdBQUE7QUFDdkc7O0FDbENBLElBQUFFLG9CQUF1QlIsUUFBQSxpQkFBQTtBQUV2QixJQUFNUyxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOQyxRQUFBLEdBQU9GLGtCQUFBRyxVQUFTO01BQ2ZDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEQyxXQUFBLEdBQVVOLGtCQUFBRyxVQUFTO01BQ2xCQyxJQUFJO01BQ0pDLElBQUk7TUFDSkUsSUFBSTtJQUNMLENBQUM7SUFDREMsV0FBQSxHQUFVUixrQkFBQUcsVUFBUztNQUNsQkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RJLFNBQUEsR0FBUVQsa0JBQUFHLFVBQVM7TUFDaEJDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7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QUFDbkVHLGVBQVNDLFlBQVksVUFBVTtBQUMvQixVQUFJdkUsWUFBWTtBQUNmc0UsaUJBQVNqRSxLQUFLLFNBQVNwRCxXQUFXLFFBQVEsQ0FBQztNQUM1QyxPQUFPO0FBQ05xSCxpQkFBU2pFLEtBQUssU0FBU3BELFdBQVcsVUFBVSxDQUFDO01BQzlDO0lBQ0Q7QUFDQWlILG9CQUFnQk0sR0FBRyxTQUFTLE1BQVk7QUFDdkN2QyxpQkFBVyxhQUFhakMsYUFBYSxTQUFTLE9BQU87QUFDckRxRSxxQkFBZTtBQUNmRCxxQkFBZUssV0FBVztJQUMzQixDQUFDO0FBRUQsUUFBSXpFLFlBQVk7QUFDZm9FLHFCQUFlTSxRQUFRO0lBQ3hCO0VBQ0Q7QUFDQVQsb0JBQWtCO0FBQ25COztBUXRKQSxJQUFBVSxxQkFBc0I3SSxRQUFBLGlCQUFBO0FBRXRCLE1BQUEsR0FBSzZJLG1CQUFBQyxTQUFRLEVBQUVDLEtBQU1yRCxXQUF5QztBQUM3RCxRQUFNTixhQUFxQk0sTUFBTTJDLEtBQUssTUFBTTtBQUM1QyxNQUFJLENBQUNqRCxXQUFXNEQsUUFBUTtBQUN2QjtFQUNEO0FBRUFsRSxXQUFTTSxVQUFVO0FBQ3BCLENBQUM7IiwKICAibmFtZXMiOiBbImVsZW1lbnRJZCIsICJpbXBvcnRfdnVlMyIsICJyZXF1aXJlIiwgImltcG9ydF9jb2RleCIsICJjZHhJY29uQ2xvc2UiLCAiY2R4SWNvblJlZmVyZW5jZSIsICJjZHhJY29uRG93blRyaWFuZ2xlIiwgInRvSW5saW5lU3ZnIiwgInBhdGgiLCAiY29uY2F0IiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJDbG9zZSIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJDb250ZW50cyIsICJ6aCIsICJDb2xsYXBzZSIsICJFeHBhbmQiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImNsb3NlSWNvbiIsICJyZWZlcmVuY2VJY29uIiwgImltcG9ydF92dWUyIiwgIl9ob2lzdGVkXzEiLCAiY2xhc3MiLCAiX2hvaXN0ZWRfMiIsICJyZW5kZXIiLCAiX2N0eCIsICJfY2FjaGUiLCAiJHByb3BzIiwgIiRzZXR1cCIsICIkZGF0YSIsICIkb3B0aW9ucyIsICJvcGVuQmxvY2siLCAiY3JlYXRlRWxlbWVudEJsb2NrIiwgImNyZWF0ZVZOb2RlIiwgIlRyYW5zaXRpb24iLCAibmFtZSIsICJwZXJzaXN0ZWQiLCAiZGVmYXVsdCIsICJ3aXRoQ3R4IiwgIndpdGhEaXJlY3RpdmVzIiwgIndlaWdodCIsICJvbkNsaWNrIiwgInRyaWdnZXJPcGVuIiwgImljb24iLCAiY3JlYXRlRWxlbWVudFZOb2RlIiwgInRvRGlzcGxheVN0cmluZyIsICJfIiwgInZTaG93IiwgInN0YXRlIiwgIm9wZW5lciIsICJhcmdzIiwgInRyaWdnZXJTY3JvbGwiLCAid2l0aE1vZGlmaWVycyIsICJ0cmlnZ2VyQ2xvc2UiLCAiY3JlYXRlQ29tbWVudFZOb2RlIiwgImlubmVySFRNTCIsICJ0b2NIdG1sIiwgIm9wZW4iLCAiQXBwX2RlZmF1bHQiLCAiX19maWxlIiwgIkFwcF9kZWZhdWx0MiIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiZ2VuZXJhdGVUb2dnbGVyRWxlbWVudCIsICJpc0NvbGxhcHNlIiwgIiR0b2dnbGVyIiwgIiQiLCAiYWRkQ2xhc3MiLCAiaHRtbCIsICJhdHRyIiwgImdldENvbmZpZyIsICJpZCIsICJjb25maWciLCAibXciLCAic3RvcmFnZSIsICJnZXRPYmplY3QiLCAiZmxvYXRUT0MiLCAid2luZG93IiwgIm91dGVySGVpZ2h0IiwgIm91dGVyV2lkdGgiLCAib3JpZ2luVE9DIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICIkb3JpZ2luVG9jIiwgIl90b2MkcXVlcnlTZWxlY3RvciIsICJfdG9jJHF1ZXJ5U2VsZWN0b3IyIiwgInNraW4iLCAiZ2V0IiwgIm9yaWdpblRvYyIsICIkYm9keSIsICJwYXJlbnRzIiwgInRvYyIsICJjbG9uZU5vZGUiLCAicXVlcnlTZWxlY3RvciIsICJyZW1vdmUiLCAicmVtb3ZlQXR0cmlidXRlIiwgIm91dGVySFRNTCIsICJyZWFjdGl2ZSIsICJzdG9yZVN0YXRlIiwgInRhcmdldCIsICJ2YWx1ZSIsICJzZXRPYmplY3QiLCAic2hvd1BhbmVsIiwgInNob3dPcGVuZXIiLCAiaGlkZUFsbCIsICJzbW9vdGhTY3JvbGwiLCAiZXZlbnQiLCAiJHRhcmdldCIsICJwYXJlbnQiLCAiaHJlZiIsICJhbmNob3JPZmZzZXQiLCAib2Zmc2V0IiwgInByZXZlbnREZWZhdWx0IiwgInNjcm9sbFRvcCIsICJ0b3AiLCAiZmlsdGVyQWx0ZXJlZENsaWNrcyIsICJyb290IiwgImRvY3VtZW50IiwgImNyZWF0ZUVsZW1lbnQiLCAiYXBwZW5kIiwgImFwcCIsICJjcmVhdGVBcHAiLCAibW91bnQiLCAib2JzZXJ2ZXJDYWxsYmFjayIsICJlbnRyaWVzIiwgImVudHJ5IiwgImludGVyc2VjdGlvblJhdGlvIiwgImludGVyc2VjdGlvbk9ic2VydmVyIiwgIkludGVyc2VjdGlvbk9ic2VydmVyIiwgIm9ic2VydmUiLCAiY29sbGFwc2VPcmlnaW5Ub2MiLCAiJG9yaWdpblRvY1RpdGxlIiwgImZpbmQiLCAiJG9yaWdpblRvY0l0ZW0iLCAiY29sbGFwc2VUb2dnbGUiLCAiJGVsZW1lbnQiLCAidG9nZ2xlQ2xhc3MiLCAib24iLCAiZmFkZVRvZ2dsZSIsICJmYWRlT3V0IiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJnZXRCb2R5IiwgInRoZW4iLCAibGVuZ3RoIl0KfQo=

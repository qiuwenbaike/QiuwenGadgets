/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @base {@link https://www.mediawiki.org/wiki/MediaWiki:Gadget-tabbedwindow.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/TabbedWindow}
 * @author Jay Prakash <https://meta.wikimedia.org/wiki/User:Jayprakash12345> and contributors
 * @license GPL-3.0-or-later {@link https://www.qiuwenbaike.cn/wiki/H:GPL-3.0}
 */

/**
 *
 * tabbedWindow.js
 *
 * It embeds an OOUI tabbed window on all pages in the API namespace on MediaWiki.org.
 * Each tab of the window contains sample code in a programming language (PHP, Javascript, Python, etc.)
 * demonstrating the use of the MediaWiki Action API.
 *
 * @license magnet:?xt=urn:btih:1f739d935676111cfff4b4693e3816e664797050&dn=gpl-3.0.txt GPL-v3-or-Later
 * @licstart  The following is the entire license notice for the JavaScript code in this gadget.
 *
 * Copyright (C) 2019 Jay Prakash <https://meta.wikimedia.org/wiki/User:Jayprakash12345> and contributors
 *
 * The JavaScript/Gadget code in this page is free software: you can
 * redistribute it and/or modify it under the terms of the GNU
 * General Public License (GNU GPL) as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option)
 * any later version.  The code is distributed WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.
 *
 * As additional permission under GNU GPL version 3 section 7, you
 * may distribute non-source (e.g., minimized or compacted) forms of
 * that code without the copy of the GNU GPL normally required by
 * section 4, provided you include this license notice and a URL
 * through which recipients can access the Corresponding Source.
 *
 * @licend  The above is the entire license notice for the JavaScript/Gadget code in this gadget.
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

// dist/TabbedWindow/TabbedWindow.js
var import_vue = require("vue");
var import_vue2 = require("vue");
var import_codex = require("@wikimedia/codex");
var App_default = /* @__PURE__ */ (0, import_vue.defineComponent)({
  __name: "App",
  props: {
    panels: {
      type: Array,
      required: true
    }
  },
  setup(__props, {
    expose: __expose
  }) {
    __expose();
    const props = __props;
    const activeId = (0, import_vue2.ref)("");
    const panelContainers = /* @__PURE__ */ new Map();
    const setActivePanel = (id, updateHash = true) => {
      if (!props.panels.some((panel) => panel.id === id)) {
        return;
      }
      activeId.value = id;
      if (updateHash && history.replaceState) {
        history.replaceState(null, document.title, `#${id}`);
      }
    };
    const setPanelContainer = (id, element) => {
      if (element instanceof HTMLElement) {
        panelContainers.set(id, element);
        for (const contentElement of ((_props$panels$find = props.panels.find((panel) => panel.id === id)) === null || _props$panels$find === void 0 ? void 0 : _props$panels$find.content) ?? []) {
          var _props$panels$find;
          element.append(contentElement);
        }
      } else {
        panelContainers.delete(id);
      }
    };
    const setFromHash = () => {
      const id = decodeURIComponent(location.hash.slice(1));
      if (id) {
        setActivePanel(id, false);
      }
    };
    (0, import_vue2.onMounted)(async () => {
      var _props$panels$;
      activeId.value = ((_props$panels$ = props.panels[0]) === null || _props$panels$ === void 0 ? void 0 : _props$panels$.id) ?? "";
      await (0, import_vue2.nextTick)();
      setFromHash();
      window.addEventListener("hashchange", setFromHash);
    });
    (0, import_vue2.onBeforeUnmount)(() => {
      window.removeEventListener("hashchange", setFromHash);
    });
    const __returned__ = {
      props,
      activeId,
      panelContainers,
      setActivePanel,
      setPanelContainer,
      setFromHash,
      get CdxButton() {
        return import_codex.CdxButton;
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
  class: "tabbed-window"
};
var _hoisted_2 = {
  class: "tabbed-window__tabs",
  role: "tablist"
};
var _hoisted_3 = ["id", "aria-hidden", "tabindex"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("div", _hoisted_1, [(0, import_vue3.createElementVNode)("div", _hoisted_2, [((0, import_vue3.openBlock)(true), (0, import_vue3.createElementBlock)(
    import_vue3.Fragment,
    null,
    (0, import_vue3.renderList)($props.panels, (panel) => {
      return (0, import_vue3.openBlock)(), (0, import_vue3.createBlock)($setup["CdxButton"], {
        key: panel.id,
        weight: $setup.activeId === panel.id ? "primary" : "quiet",
        role: "tab",
        "aria-selected": $setup.activeId === panel.id,
        "aria-controls": `tabbed-window-panel-${panel.id}`,
        onClick: ($event) => $setup.setActivePanel(panel.id)
      }, {
        default: (0, import_vue3.withCtx)(() => [(0, import_vue3.createTextVNode)(
          (0, import_vue3.toDisplayString)(panel.label),
          1
          /* TEXT */
        )]),
        _: 2
        /* DYNAMIC */
      }, 1032, ["weight", "aria-selected", "aria-controls", "onClick"]);
    }),
    128
    /* KEYED_FRAGMENT */
  ))]), ((0, import_vue3.openBlock)(true), (0, import_vue3.createElementBlock)(
    import_vue3.Fragment,
    null,
    (0, import_vue3.renderList)($props.panels, (panel) => {
      return (0, import_vue3.withDirectives)(((0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("div", {
        id: `tabbed-window-panel-${panel.id}`,
        key: panel.id,
        ref_for: true,
        ref: (element) => $setup.setPanelContainer(panel.id, element),
        "aria-hidden": $setup.activeId !== panel.id,
        class: "tabbed-window__panel",
        role: "tabpanel",
        tabindex: $setup.activeId === panel.id ? 0 : -1
      }, null, 8, _hoisted_3)), [[import_vue3.vShow, $setup.activeId === panel.id]]);
    }),
    128
    /* KEYED_FRAGMENT */
  ))]);
}
//! src/TabbedWindow/App.vue
App_default.render = render;
App_default.__file = "src\\TabbedWindow\\App.vue";
App_default.__scopeId = "data-v-d6ebc622";
var App_default2 = App_default;
//! src/TabbedWindow/TabbedWindow.ts
var import_vue4 = require("vue");
var makeTabWindow = ($tabbedWindows) => {
  $tabbedWindows.each((_i, tabbedWindow) => {
    const panels = [];
    $(tabbedWindow).find("h3, h4, h5, h6").each((_j, heading) => {
      const $heading = $(heading);
      let $headingWrapper, $headingText;
      if ($heading.closest(".mw-heading").length) {
        $headingWrapper = $heading.closest(".mw-heading");
        $headingText = $heading;
      } else if ($heading.find(".mw-headline").length) {
        $headingWrapper = $heading;
        $headingText = $heading.find(".mw-headline");
      } else {
        return;
      }
      const id = $headingText.attr("id");
      const $content = $headingWrapper.nextUntil("h3, h4, h5, h6, .mw-heading3, .mw-heading4, .mw-heading5, .mw-heading6");
      $content.prepend($headingWrapper.hide());
      panels.push({
        id,
        label: $headingText.text(),
        // Keep the original nodes so existing event handlers and live references survive.
        content: $content.toArray()
      });
    });
    $(tabbedWindow).empty();
    (0, import_vue4.createApp)(App_default2, {
      panels
    }).mount(tabbedWindow);
    mw.hook("ve.deactivationComplete").fire();
  });
};
mw.hook("wikipage.content").add(($content) => {
  const $tabbedWindows = $content.find(".mw-gadget-tabbedwindow");
  if ($tabbedWindows.length > 0) {
    makeTabWindow($tabbedWindows);
  }
});

})();

/* </nowiki> */


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
        history.replaceState(null, document.title, "#".concat(id));
      }
    };
    const setPanelContainer = (id, element) => {
      if (element instanceof HTMLElement) {
        var _props$panels$find$co, _props$panels$find;
        panelContainers.set(id, element);
        var _iterator = _createForOfIteratorHelper((_props$panels$find$co = (_props$panels$find = props.panels.find((panel) => panel.id === id)) === null || _props$panels$find === void 0 ? void 0 : _props$panels$find.content) !== null && _props$panels$find$co !== void 0 ? _props$panels$find$co : []), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            const contentElement = _step.value;
            element.append(contentElement);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
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
    (0, import_vue2.onMounted)(/* @__PURE__ */ _asyncToGenerator(function* () {
      var _props$panels$0$id, _props$panels$;
      activeId.value = (_props$panels$0$id = (_props$panels$ = props.panels[0]) === null || _props$panels$ === void 0 ? void 0 : _props$panels$.id) !== null && _props$panels$0$id !== void 0 ? _props$panels$0$id : "";
      yield (0, import_vue2.nextTick)();
      setFromHash();
      window.addEventListener("hashchange", setFromHash);
    }));
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
        "aria-controls": "tabbed-window-panel-".concat(panel.id),
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
        id: "tabbed-window-panel-".concat(panel.id),
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZGlzdC9UYWJiZWRXaW5kb3cvc3JjL1RhYmJlZFdpbmRvdy9BcHAudnVlIiwgInNmYy10ZW1wbGF0ZTpFOlxcQ29kZXNcXFFpdXdlblxcUWl1d2VuR2FkZ2V0c1xcc3JjXFxUYWJiZWRXaW5kb3dcXEFwcC52dWU/dHlwZT10ZW1wbGF0ZSIsICJzcmMvVGFiYmVkV2luZG93L0FwcC52dWUiLCAic3JjL1RhYmJlZFdpbmRvdy9UYWJiZWRXaW5kb3cudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge25leHRUaWNrLCBvbkJlZm9yZVVubW91bnQsIG9uTW91bnRlZCwgcmVmfSBmcm9tICd2dWUnO1xuaW1wb3J0IHtDZHhCdXR0b259IGZyb20gJ0B3aWtpbWVkaWEvY29kZXgnO1xuXG5pbnRlcmZhY2UgVGFiUGFuZWwge1xuXHRpZDogc3RyaW5nO1xuXHRsYWJlbDogc3RyaW5nO1xuXHRjb250ZW50OiBIVE1MRWxlbWVudFtdO1xufVxuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcblx0cGFuZWxzOiBUYWJQYW5lbFtdO1xufT4oKTtcblxuY29uc3QgYWN0aXZlSWQgPSByZWYoJycpO1xuY29uc3QgcGFuZWxDb250YWluZXJzID0gbmV3IE1hcDxzdHJpbmcsIEhUTUxFbGVtZW50PigpO1xuXG5jb25zdCBzZXRBY3RpdmVQYW5lbCA9IChpZDogc3RyaW5nLCB1cGRhdGVIYXNoID0gdHJ1ZSk6IHZvaWQgPT4ge1xuXHRpZiAoIXByb3BzLnBhbmVscy5zb21lKChwYW5lbCkgPT4gcGFuZWwuaWQgPT09IGlkKSkge1xuXHRcdHJldHVybjtcblx0fVxuXHRhY3RpdmVJZC52YWx1ZSA9IGlkO1xuXHRpZiAodXBkYXRlSGFzaCAmJiBoaXN0b3J5LnJlcGxhY2VTdGF0ZSkge1xuXHRcdGhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIGRvY3VtZW50LnRpdGxlLCBgIyR7aWR9YCk7XG5cdH1cbn07XG5cbmNvbnN0IHNldFBhbmVsQ29udGFpbmVyID0gKGlkOiBzdHJpbmcsIGVsZW1lbnQ6IEVsZW1lbnQgfCBudWxsKTogdm9pZCA9PiB7XG5cdGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcblx0XHRwYW5lbENvbnRhaW5lcnMuc2V0KGlkLCBlbGVtZW50KTtcblx0XHRmb3IgKGNvbnN0IGNvbnRlbnRFbGVtZW50IG9mIHByb3BzLnBhbmVscy5maW5kKChwYW5lbCkgPT4gcGFuZWwuaWQgPT09IGlkKT8uY29udGVudCA/PyBbXSkge1xuXHRcdFx0ZWxlbWVudC5hcHBlbmQoY29udGVudEVsZW1lbnQpO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRwYW5lbENvbnRhaW5lcnMuZGVsZXRlKGlkKTtcblx0fVxufTtcblxuY29uc3Qgc2V0RnJvbUhhc2ggPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0IGlkID0gZGVjb2RlVVJJQ29tcG9uZW50KGxvY2F0aW9uLmhhc2guc2xpY2UoMSkpO1xuXHRpZiAoaWQpIHtcblx0XHRzZXRBY3RpdmVQYW5lbChpZCwgZmFsc2UpO1xuXHR9XG59O1xuXG5vbk1vdW50ZWQoYXN5bmMgKCkgPT4ge1xuXHRhY3RpdmVJZC52YWx1ZSA9IHByb3BzLnBhbmVsc1swXT8uaWQgPz8gJyc7XG5cdGF3YWl0IG5leHRUaWNrKCk7XG5cdHNldEZyb21IYXNoKCk7XG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgc2V0RnJvbUhhc2gpO1xufSk7XG5cbm9uQmVmb3JlVW5tb3VudCgoKSA9PiB7XG5cdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgc2V0RnJvbUhhc2gpO1xufSk7XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuXHQ8ZGl2IGNsYXNzPVwidGFiYmVkLXdpbmRvd1wiPlxuXHRcdDxkaXYgY2xhc3M9XCJ0YWJiZWQtd2luZG93X190YWJzXCIgcm9sZT1cInRhYmxpc3RcIj5cblx0XHRcdDxjZHgtYnV0dG9uXG5cdFx0XHRcdHYtZm9yPVwicGFuZWwgaW4gcGFuZWxzXCJcblx0XHRcdFx0OmtleT1cInBhbmVsLmlkXCJcblx0XHRcdFx0OndlaWdodD1cImFjdGl2ZUlkID09PSBwYW5lbC5pZCA/ICdwcmltYXJ5JyA6ICdxdWlldCdcIlxuXHRcdFx0XHRyb2xlPVwidGFiXCJcblx0XHRcdFx0OmFyaWEtc2VsZWN0ZWQ9XCJhY3RpdmVJZCA9PT0gcGFuZWwuaWRcIlxuXHRcdFx0XHQ6YXJpYS1jb250cm9scz1cImB0YWJiZWQtd2luZG93LXBhbmVsLSR7cGFuZWwuaWR9YFwiXG5cdFx0XHRcdEBjbGljaz1cInNldEFjdGl2ZVBhbmVsKHBhbmVsLmlkKVwiXG5cdFx0XHQ+XG5cdFx0XHRcdHt7IHBhbmVsLmxhYmVsIH19XG5cdFx0XHQ8L2NkeC1idXR0b24+XG5cdFx0PC9kaXY+XG5cdFx0PGRpdlxuXHRcdFx0di1mb3I9XCJwYW5lbCBpbiBwYW5lbHNcIlxuXHRcdFx0di1zaG93PVwiYWN0aXZlSWQgPT09IHBhbmVsLmlkXCJcblx0XHRcdDppZD1cImB0YWJiZWQtd2luZG93LXBhbmVsLSR7cGFuZWwuaWR9YFwiXG5cdFx0XHQ6a2V5PVwicGFuZWwuaWRcIlxuXHRcdFx0OnJlZj1cIihlbGVtZW50KSA9PiBzZXRQYW5lbENvbnRhaW5lcihwYW5lbC5pZCwgZWxlbWVudCBhcyBFbGVtZW50IHwgbnVsbClcIlxuXHRcdFx0OmFyaWEtaGlkZGVuPVwiYWN0aXZlSWQgIT09IHBhbmVsLmlkXCJcblx0XHRcdGNsYXNzPVwidGFiYmVkLXdpbmRvd19fcGFuZWxcIlxuXHRcdFx0cm9sZT1cInRhYnBhbmVsXCJcblx0XHRcdDp0YWJpbmRleD1cImFjdGl2ZUlkID09PSBwYW5lbC5pZCA/IDAgOiAtMVwiXG5cdFx0PjwvZGl2PlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cImxlc3NcIj5cbi50YWJiZWQtd2luZG93IHtcblx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yLWJhc2UsICNhMmE5YjEpO1xufVxuXG4udGFiYmVkLXdpbmRvd19fdGFicyB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtd3JhcDogd3JhcDtcblx0Z2FwOiAwLjI1cmVtO1xuXHRwYWRkaW5nOiAwLjI1cmVtO1xuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yLWJhc2UsICNhMmE5YjEpO1xufVxuXG4udGFiYmVkLXdpbmRvd19fcGFuZWwge1xuXHRwYWRkaW5nOiAwLjVlbTtcbn1cbjwvc3R5bGU+XG4iLCAiaW1wb3J0IHsgcmVuZGVyTGlzdCBhcyBfcmVuZGVyTGlzdCwgRnJhZ21lbnQgYXMgX0ZyYWdtZW50LCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2ssIHRvRGlzcGxheVN0cmluZyBhcyBfdG9EaXNwbGF5U3RyaW5nLCBjcmVhdGVUZXh0Vk5vZGUgYXMgX2NyZWF0ZVRleHRWTm9kZSwgd2l0aEN0eCBhcyBfd2l0aEN0eCwgY3JlYXRlQmxvY2sgYXMgX2NyZWF0ZUJsb2NrLCBjcmVhdGVFbGVtZW50Vk5vZGUgYXMgX2NyZWF0ZUVsZW1lbnRWTm9kZSwgdlNob3cgYXMgX3ZTaG93LCB3aXRoRGlyZWN0aXZlcyBhcyBfd2l0aERpcmVjdGl2ZXMgfSBmcm9tIFwidnVlXCJcblxuY29uc3QgX2hvaXN0ZWRfMSA9IHsgY2xhc3M6IFwidGFiYmVkLXdpbmRvd1wiIH1cbmNvbnN0IF9ob2lzdGVkXzIgPSB7XG4gIGNsYXNzOiBcInRhYmJlZC13aW5kb3dfX3RhYnNcIixcbiAgcm9sZTogXCJ0YWJsaXN0XCJcbn1cbmNvbnN0IF9ob2lzdGVkXzMgPSBbXCJpZFwiLCBcImFyaWEtaGlkZGVuXCIsIFwidGFiaW5kZXhcIl1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcbiAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJkaXZcIiwgX2hvaXN0ZWRfMSwgW1xuICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfMiwgW1xuICAgICAgKF9vcGVuQmxvY2sodHJ1ZSksIF9jcmVhdGVFbGVtZW50QmxvY2soX0ZyYWdtZW50LCBudWxsLCBfcmVuZGVyTGlzdCgkcHJvcHMucGFuZWxzLCAocGFuZWwpID0+IHtcbiAgICAgICAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jaygkc2V0dXBbXCJDZHhCdXR0b25cIl0sIHtcbiAgICAgICAgICBrZXk6IHBhbmVsLmlkLFxuICAgICAgICAgIHdlaWdodDogJHNldHVwLmFjdGl2ZUlkID09PSBwYW5lbC5pZCA/ICdwcmltYXJ5JyA6ICdxdWlldCcsXG4gICAgICAgICAgcm9sZTogXCJ0YWJcIixcbiAgICAgICAgICBcImFyaWEtc2VsZWN0ZWRcIjogJHNldHVwLmFjdGl2ZUlkID09PSBwYW5lbC5pZCxcbiAgICAgICAgICBcImFyaWEtY29udHJvbHNcIjogYHRhYmJlZC13aW5kb3ctcGFuZWwtJHtwYW5lbC5pZH1gLFxuICAgICAgICAgIG9uQ2xpY2s6ICRldmVudCA9PiAoJHNldHVwLnNldEFjdGl2ZVBhbmVsKHBhbmVsLmlkKSlcbiAgICAgICAgfSwge1xuICAgICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAgIF9jcmVhdGVUZXh0Vk5vZGUoX3RvRGlzcGxheVN0cmluZyhwYW5lbC5sYWJlbCksIDEgLyogVEVYVCAqLylcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfOiAyIC8qIERZTkFNSUMgKi9cbiAgICAgICAgfSwgMTAzMiAvKiBQUk9QUywgRFlOQU1JQ19TTE9UUyAqLywgW1wid2VpZ2h0XCIsIFwiYXJpYS1zZWxlY3RlZFwiLCBcImFyaWEtY29udHJvbHNcIiwgXCJvbkNsaWNrXCJdKSlcbiAgICAgIH0pLCAxMjggLyogS0VZRURfRlJBR01FTlQgKi8pKVxuICAgIF0pLFxuICAgIChfb3BlbkJsb2NrKHRydWUpLCBfY3JlYXRlRWxlbWVudEJsb2NrKF9GcmFnbWVudCwgbnVsbCwgX3JlbmRlckxpc3QoJHByb3BzLnBhbmVscywgKHBhbmVsKSA9PiB7XG4gICAgICByZXR1cm4gX3dpdGhEaXJlY3RpdmVzKChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJkaXZcIiwge1xuICAgICAgICBpZDogYHRhYmJlZC13aW5kb3ctcGFuZWwtJHtwYW5lbC5pZH1gLFxuICAgICAgICBrZXk6IHBhbmVsLmlkLFxuICAgICAgICByZWZfZm9yOiB0cnVlLFxuICAgICAgICByZWY6IChlbGVtZW50KSA9PiAkc2V0dXAuc2V0UGFuZWxDb250YWluZXIocGFuZWwuaWQsIGVsZW1lbnQgYXMgRWxlbWVudCB8IG51bGwpLFxuICAgICAgICBcImFyaWEtaGlkZGVuXCI6ICRzZXR1cC5hY3RpdmVJZCAhPT0gcGFuZWwuaWQsXG4gICAgICAgIGNsYXNzOiBcInRhYmJlZC13aW5kb3dfX3BhbmVsXCIsXG4gICAgICAgIHJvbGU6IFwidGFicGFuZWxcIixcbiAgICAgICAgdGFiaW5kZXg6ICRzZXR1cC5hY3RpdmVJZCA9PT0gcGFuZWwuaWQgPyAwIDogLTFcbiAgICAgIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIF9ob2lzdGVkXzMpKSwgW1xuICAgICAgICBbX3ZTaG93LCAkc2V0dXAuYWN0aXZlSWQgPT09IHBhbmVsLmlkXVxuICAgICAgXSlcbiAgICB9KSwgMTI4IC8qIEtFWUVEX0ZSQUdNRU5UICovKSlcbiAgXSkpXG59IiwgImltcG9ydCBzY3JpcHQgZnJvbSBcIkU6XFxcXENvZGVzXFxcXFFpdXdlblxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxUYWJiZWRXaW5kb3dcXFxcQXBwLnZ1ZT90eXBlPXNjcmlwdFwiO2ltcG9ydCBcIkU6XFxcXENvZGVzXFxcXFFpdXdlblxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxUYWJiZWRXaW5kb3dcXFxcQXBwLnZ1ZT90eXBlPXN0eWxlJmluZGV4PTBcIjtpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiRTpcXFxcQ29kZXNcXFxcUWl1d2VuXFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFRhYmJlZFdpbmRvd1xcXFxBcHAudnVlP3R5cGU9dGVtcGxhdGVcIjsgc2NyaXB0LnJlbmRlciA9IHJlbmRlcjtzY3JpcHQuX19maWxlID0gXCJzcmNcXFxcVGFiYmVkV2luZG93XFxcXEFwcC52dWVcIjtzY3JpcHQuX19zY29wZUlkID0gXCJkYXRhLXYtZDZlYmM2MjJcIjtleHBvcnQgZGVmYXVsdCBzY3JpcHQ7IiwgImltcG9ydCBBcHAgZnJvbSAnLi9BcHAudnVlJztcbmltcG9ydCB7Y3JlYXRlQXBwfSBmcm9tICd2dWUnO1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gZmV0Y2hlcyBzYW1wbGUgY29kZSBpbiBkaWZmZXJlbnQgcHJvZ3JhbW1pbmcgbGFuZ3VhZ2VzXG4gKiBmcm9tIHRoZSBzdWItc2VjdGlvbnMgb2YgdGhlIHNlY3Rpb24gXCJTYW1wbGUgQ29kZVwiIGFuZCBwbGFjZXNcbiAqIHRoZW0gaW50byBhIFZ1ZSB0YWJiZWQgd2luZG93LlxuICpcbiAqIEBwYXJhbSB7alF1ZXJ5fSAkdGFiYmVkV2luZG93c1xuICovXG5jb25zdCBtYWtlVGFiV2luZG93ID0gKCR0YWJiZWRXaW5kb3dzOiBKUXVlcnk8RWxlbWVudD4pID0+IHtcblx0JHRhYmJlZFdpbmRvd3MuZWFjaCgoX2k6IG51bWJlciwgdGFiYmVkV2luZG93OiBFbGVtZW50KSA9PiB7XG5cdFx0Y29uc3QgcGFuZWxzOiB7aWQ6IHN0cmluZzsgbGFiZWw6IHN0cmluZzsgY29udGVudDogSFRNTEVsZW1lbnRbXX1bXSA9IFtdO1xuXHRcdCQodGFiYmVkV2luZG93KVxuXHRcdFx0LmZpbmQoJ2gzLCBoNCwgaDUsIGg2Jylcblx0XHRcdC5lYWNoKChfajogbnVtYmVyLCBoZWFkaW5nOiBFbGVtZW50KSA9PiB7XG5cdFx0XHRcdGNvbnN0ICRoZWFkaW5nID0gJChoZWFkaW5nKTtcblx0XHRcdFx0bGV0ICRoZWFkaW5nV3JhcHBlciwgJGhlYWRpbmdUZXh0O1xuXHRcdFx0XHRpZiAoJGhlYWRpbmcuY2xvc2VzdCgnLm13LWhlYWRpbmcnKS5sZW5ndGgpIHtcblx0XHRcdFx0XHQkaGVhZGluZ1dyYXBwZXIgPSAkaGVhZGluZy5jbG9zZXN0KCcubXctaGVhZGluZycpO1xuXHRcdFx0XHRcdCRoZWFkaW5nVGV4dCA9ICRoZWFkaW5nO1xuXHRcdFx0XHR9IGVsc2UgaWYgKCRoZWFkaW5nLmZpbmQoJy5tdy1oZWFkbGluZScpLmxlbmd0aCkge1xuXHRcdFx0XHRcdCRoZWFkaW5nV3JhcHBlciA9ICRoZWFkaW5nO1xuXHRcdFx0XHRcdCRoZWFkaW5nVGV4dCA9ICRoZWFkaW5nLmZpbmQoJy5tdy1oZWFkbGluZScpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBpZCA9ICRoZWFkaW5nVGV4dC5hdHRyKCdpZCcpIGFzIHN0cmluZztcblxuXHRcdFx0XHRjb25zdCAkY29udGVudCA9ICRoZWFkaW5nV3JhcHBlci5uZXh0VW50aWwoXG5cdFx0XHRcdFx0J2gzLCBoNCwgaDUsIGg2LCAubXctaGVhZGluZzMsIC5tdy1oZWFkaW5nNCwgLm13LWhlYWRpbmc1LCAubXctaGVhZGluZzYnXG5cdFx0XHRcdCk7XG5cblx0XHRcdFx0Ly8gQWRkIHRoZSBoZWFkaW5nIHRoZSBjb250ZW50IHBhbmVsIHRvIHByZXNlcnZlIHRoZSBvcmlnaW5hbCBJRHMgYXMgbWF5IGJlIHJlcXVpcmVkIGJ5IG90aGVyIHRvb2xzIChUMzUwODQwKVxuXHRcdFx0XHQkY29udGVudC5wcmVwZW5kKCRoZWFkaW5nV3JhcHBlci5oaWRlKCkpO1xuXG5cdFx0XHRcdHBhbmVscy5wdXNoKHtcblx0XHRcdFx0XHRpZCxcblx0XHRcdFx0XHRsYWJlbDogJGhlYWRpbmdUZXh0LnRleHQoKSxcblx0XHRcdFx0XHQvLyBLZWVwIHRoZSBvcmlnaW5hbCBub2RlcyBzbyBleGlzdGluZyBldmVudCBoYW5kbGVycyBhbmQgbGl2ZSByZWZlcmVuY2VzIHN1cnZpdmUuXG5cdFx0XHRcdFx0Y29udGVudDogJGNvbnRlbnQudG9BcnJheSgpLFxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXG5cdFx0JCh0YWJiZWRXaW5kb3cpLmVtcHR5KCk7XG5cdFx0Y3JlYXRlQXBwKEFwcCwge3BhbmVsc30pLm1vdW50KHRhYmJlZFdpbmRvdyk7XG5cblx0XHQvLyBXb3JrYXJvdW5kIGZvciBUMzQ4NjgwXG5cdFx0bXcuaG9vaygndmUuZGVhY3RpdmF0aW9uQ29tcGxldGUnKS5maXJlKCk7XG5cdH0pO1xufTtcblxubXcuaG9vaygnd2lraXBhZ2UuY29udGVudCcpLmFkZCgoJGNvbnRlbnQpID0+IHtcblx0Y29uc3QgJHRhYmJlZFdpbmRvd3MgPSAkY29udGVudC5maW5kKCcubXctZ2FkZ2V0LXRhYmJlZHdpbmRvdycpO1xuXHRpZiAoJHRhYmJlZFdpbmRvd3MubGVuZ3RoID4gMCkge1xuXHRcdC8vIFZpZXdpbmcgYW4gQVBJIHN1YmplY3QgcGFnZSB3aXRoIHRhYnMgb24gaXQsIGxldCdzIG1ha2UgdGhlbSBuaWNlIVxuXHRcdG1ha2VUYWJXaW5kb3coJHRhYmJlZFdpbmRvd3MpO1xuXHR9XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFBQSxjQUF3REMsUUFBQSxLQUFBO0FBQ3hELElBQUFDLGVBQXdCRCxRQUFBLGtCQUFBOzs7Ozs7Ozs7Ozs7O0FBUXhCLFVBQU1FLFFBQVFDO0FBSWQsVUFBTUMsWUFBQSxHQUFXTCxZQUFBTSxLQUFJLEVBQUU7QUFDdkIsVUFBTUMsa0JBQWtCLG9CQUFJQyxJQUF5QjtBQUVyRCxVQUFN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QWlCYSxTQUFTOUUsS0FBSyx5QkFBeUI7QUFDOUQsTUFBSWlFLGVBQWVXLFNBQVMsR0FBRztBQUU5Qlosa0JBQWNDLGNBQWM7RUFDN0I7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfdnVlMiIsICJyZXF1aXJlIiwgImltcG9ydF9jb2RleCIsICJwcm9wcyIsICJfX3Byb3BzIiwgImFjdGl2ZUlkIiwgInJlZiIsICJwYW5lbENvbnRhaW5lcnMiLCAiTWFwIiwgInNldEFjdGl2ZVBhbmVsIiwgImlkIiwgInVwZGF0ZUhhc2giLCAicGFuZWxzIiwgInNvbWUiLCAicGFuZWwiLCAidmFsdWUiLCAiaGlzdG9yeSIsICJyZXBsYWNlU3RhdGUiLCAiZG9jdW1lbnQiLCAidGl0bGUiLCAiY29uY2F0IiwgInNldFBhbmVsQ29udGFpbmVyIiwgImVsZW1lbnQiLCAiSFRNTEVsZW1lbnQiLCAiX3Byb3BzJHBhbmVscyRmaW5kJGNvIiwgIl9wcm9wcyRwYW5lbHMkZmluZCIsICJzZXQiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgImZpbmQiLCAiY29udGVudCIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJjb250ZW50RWxlbWVudCIsICJhcHBlbmQiLCAiZXJyIiwgImUiLCAiZiIsICJkZWxldGUiLCAic2V0RnJvbUhhc2giLCAiZGVjb2RlVVJJQ29tcG9uZW50IiwgImxvY2F0aW9uIiwgImhhc2giLCAic2xpY2UiLCAib25Nb3VudGVkIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgIl9wcm9wcyRwYW5lbHMkMCRpZCIsICJfcHJvcHMkcGFuZWxzJCIsICJuZXh0VGljayIsICJ3aW5kb3ciLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJvbkJlZm9yZVVubW91bnQiLCAicmVtb3ZlRXZlbnRMaXN0ZW5lciIsICJpbXBvcnRfdnVlMyIsICJfaG9pc3RlZF8xIiwgImNsYXNzIiwgIl9ob2lzdGVkXzIiLCAicm9sZSIsICJfaG9pc3RlZF8zIiwgInJlbmRlciIsICJfY3R4IiwgIl9jYWNoZSIsICIkcHJvcHMiLCAiJHNldHVwIiwgIiRkYXRhIiwgIiRvcHRpb25zIiwgIm9wZW5CbG9jayIsICJjcmVhdGVFbGVtZW50QmxvY2siLCAiY3JlYXRlRWxlbWVudFZOb2RlIiwgIkZyYWdtZW50IiwgInJlbmRlckxpc3QiLCAiY3JlYXRlQmxvY2siLCAia2V5IiwgIndlaWdodCIsICJvbkNsaWNrIiwgIiRldmVudCIsICJkZWZhdWx0IiwgIndpdGhDdHgiLCAiY3JlYXRlVGV4dFZOb2RlIiwgInRvRGlzcGxheVN0cmluZyIsICJsYWJlbCIsICJfIiwgIndpdGhEaXJlY3RpdmVzIiwgInJlZl9mb3IiLCAidGFiaW5kZXgiLCAidlNob3ciLCAiQXBwX2RlZmF1bHQiLCAiX19maWxlIiwgIl9fc2NvcGVJZCIsICJBcHBfZGVmYXVsdDIiLCAiaW1wb3J0X3Z1ZTQiLCAibWFrZVRhYldpbmRvdyIsICIkdGFiYmVkV2luZG93cyIsICJlYWNoIiwgIl9pIiwgInRhYmJlZFdpbmRvdyIsICIkIiwgIl9qIiwgImhlYWRpbmciLCAiJGhlYWRpbmciLCAiJGhlYWRpbmdXcmFwcGVyIiwgIiRoZWFkaW5nVGV4dCIsICJjbG9zZXN0IiwgImxlbmd0aCIsICJhdHRyIiwgIiRjb250ZW50IiwgIm5leHRVbnRpbCIsICJwcmVwZW5kIiwgImhpZGUiLCAicHVzaCIsICJ0ZXh0IiwgInRvQXJyYXkiLCAiZW1wdHkiLCAiY3JlYXRlQXBwIiwgIm1vdW50IiwgIm13IiwgImhvb2siLCAiZmlyZSIsICJhZGQiXQp9Cg==

/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/User:燃灯/foldRef.js}
 * @base {@link https://zh.wikipedia.org/wiki/User:燃灯/foldRef.css}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/FoldRef}
 * @license CC-BY-SA-4.0 {@link https://www.qiuwenbaike.cn/wiki/H:CC-BY-SA-4.0}
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

// dist/FoldRef/FoldRef.js
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
var import_codex = require("@wikimedia/codex");
//! src/FoldRef/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
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
var ExpandButton_default = /* @__PURE__ */ (0, import_vue.defineComponent)({
  __name: "ExpandButton",
  props: {
    onExpand: {
      type: Function,
      required: true
    }
  },
  setup(__props, {
    expose: __expose
  }) {
    __expose();
    const props = __props;
    const __returned__ = {
      props,
      get CdxButton() {
        return import_codex.CdxButton;
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
  class: "fold-ref-expand"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("div", _hoisted_1, [(0, import_vue2.createVNode)($setup["CdxButton"], {
    weight: "normal",
    onClick: $setup.props.onExpand
  }, {
    default: (0, import_vue2.withCtx)(() => [(0, import_vue2.createTextVNode)(
      (0, import_vue2.toDisplayString)($setup.getMessage("Expand")),
      1
      /* TEXT */
    )]),
    _: 1
    /* STABLE */
  }, 8, ["onClick"])]);
}
//! src/FoldRef/modules/ExpandButton.vue
ExpandButton_default.render = render;
ExpandButton_default.__file = "src\\FoldRef\\modules\\ExpandButton.vue";
ExpandButton_default.__scopeId = "data-v-4b453060";
var ExpandButton_default2 = ExpandButton_default;
//! src/FoldRef/modules/util/processElement.ts
var import_vue3 = require("vue");
//! src/FoldRef/modules/FoldRef.module.less
var refarea = "FoldRef-module__refarea_FNkcvW__4100";
//! src/FoldRef/modules/util/processElement.ts
var processElement = (element) => {
  const refFolder = document.createElement("div");
  refFolder.className = refarea;
  element.before(refFolder);
  refFolder.append(element);
  const expandRoot = document.createElement("div");
  refFolder.after(expandRoot);
  const app = (0, import_vue3.createApp)(ExpandButton_default2, {
    onExpand: () => {
      refFolder.classList.remove(refarea);
      app.unmount();
      expandRoot.remove();
    }
  });
  app.mount(expandRoot);
};
//! src/FoldRef/modules/core.ts
var foldRef = () => {
  const $foldRef = document.querySelectorAll(".mw-references-wrap,.refbegin");
  var _iterator = _createForOfIteratorHelper($foldRef), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var _element$parentElemen, _element$parentElemen2, _element$clientHeight;
      const element = _step.value;
      if ((_element$parentElemen = element.parentElement) !== null && _element$parentElemen !== void 0 && _element$parentElemen.classList.contains(refarea) || (_element$parentElemen2 = element.parentElement) !== null && _element$parentElemen2 !== void 0 && (_element$parentElemen2 = _element$parentElemen2.parentElement) !== null && _element$parentElemen2 !== void 0 && _element$parentElemen2.classList.contains(refarea)) {
        continue;
      }
      const height = (_element$clientHeight = element.clientHeight) !== null && _element$clientHeight !== void 0 ? _element$clientHeight : 0;
      if (!height || height <= window.innerHeight * 0.9) {
        continue;
      }
      processElement(element);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};
//! src/FoldRef/FoldRef.ts
var import_ext_gadget2 = require("ext.gadget.Util");
var {
  wgNamespaceNumber
} = mw.config.get();
if (wgNamespaceNumber === 0) {
  void (0, import_ext_gadget2.getBody)().then(() => {
    foldRef();
  });
}

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZGlzdC9Gb2xkUmVmL3NyYy9Gb2xkUmVmL21vZHVsZXMvRXhwYW5kQnV0dG9uLnZ1ZSIsICJzcmMvRm9sZFJlZi9tb2R1bGVzL2kxOG4udHMiLCAic2ZjLXRlbXBsYXRlOkQ6XFxHaXRSZXBvc2l0b3J5XFxRaXV3ZW5HYWRnZXRzXFxzcmNcXEZvbGRSZWZcXG1vZHVsZXNcXEV4cGFuZEJ1dHRvbi52dWU/dHlwZT10ZW1wbGF0ZSIsICJzcmMvRm9sZFJlZi9tb2R1bGVzL0V4cGFuZEJ1dHRvbi52dWUiLCAic3JjL0ZvbGRSZWYvbW9kdWxlcy91dGlsL3Byb2Nlc3NFbGVtZW50LnRzIiwgInNyYy9Gb2xkUmVmL21vZHVsZXMvRm9sZFJlZi5tb2R1bGUubGVzcyIsICJzcmMvRm9sZFJlZi9tb2R1bGVzL2NvcmUudHMiLCAic3JjL0ZvbGRSZWYvRm9sZFJlZi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7Q2R4QnV0dG9ufSBmcm9tICdAd2lraW1lZGlhL2NvZGV4JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczx7XG5cdG9uRXhwYW5kOiAoKSA9PiB2b2lkO1xufT4oKTtcbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG5cdDxkaXYgY2xhc3M9XCJmb2xkLXJlZi1leHBhbmRcIj5cblx0XHQ8Y2R4LWJ1dHRvbiB3ZWlnaHQ9XCJub3JtYWxcIiBAY2xpY2s9XCJwcm9wcy5vbkV4cGFuZFwiPlxuXHRcdFx0e3sgZ2V0TWVzc2FnZSgnRXhwYW5kJykgfX1cblx0XHQ8L2NkeC1idXR0b24+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwibGVzc1wiPlxuLmZvbGQtcmVmLWV4cGFuZCB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0Ym90dG9tOiAyZW07XG5cdGxlZnQ6IDUwJTtcblx0d2lkdGg6IDIwJTtcblx0aGVpZ2h0OiAyZW07XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcblxuXHQ6ZGVlcCguY2R4LWJ1dHRvbikge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGhlaWdodDogMTAwJTtcblx0XHRib3JkZXItcmFkaXVzOiAwLjVlbSAwLjVlbSAwIDA7XG5cdFx0bGluZS1oZWlnaHQ6IDJlbTtcblx0fVxufVxuPC9zdHlsZT5cbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0RXhwYW5kOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0V4cGFuZCcsXG5cdFx0XHRqYTogJ+WxlemWiycsXG5cdFx0XHQnemgtaGFucyc6ICflsZXlvIAnLFxuXHRcdFx0J3poLWhhbnQnOiAn5bGV6ZaLJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHsgdG9EaXNwbGF5U3RyaW5nIGFzIF90b0Rpc3BsYXlTdHJpbmcsIGNyZWF0ZVRleHRWTm9kZSBhcyBfY3JlYXRlVGV4dFZOb2RlLCB3aXRoQ3R4IGFzIF93aXRoQ3R4LCBjcmVhdGVWTm9kZSBhcyBfY3JlYXRlVk5vZGUsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jayB9IGZyb20gXCJ2dWVcIlxuXG5jb25zdCBfaG9pc3RlZF8xID0geyBjbGFzczogXCJmb2xkLXJlZi1leHBhbmRcIiB9XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZGl2XCIsIF9ob2lzdGVkXzEsIFtcbiAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiQ2R4QnV0dG9uXCJdLCB7XG4gICAgICB3ZWlnaHQ6IFwibm9ybWFsXCIsXG4gICAgICBvbkNsaWNrOiAkc2V0dXAucHJvcHMub25FeHBhbmRcbiAgICB9LCB7XG4gICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgIF9jcmVhdGVUZXh0Vk5vZGUoX3RvRGlzcGxheVN0cmluZygkc2V0dXAuZ2V0TWVzc2FnZSgnRXhwYW5kJykpLCAxIC8qIFRFWFQgKi8pXG4gICAgICBdKSxcbiAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgfSwgOCAvKiBQUk9QUyAqLywgW1wib25DbGlja1wiXSlcbiAgXSkpXG59IiwgImltcG9ydCBzY3JpcHQgZnJvbSBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcRm9sZFJlZlxcXFxtb2R1bGVzXFxcXEV4cGFuZEJ1dHRvbi52dWU/dHlwZT1zY3JpcHRcIjtpbXBvcnQgXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXEZvbGRSZWZcXFxcbW9kdWxlc1xcXFxFeHBhbmRCdXR0b24udnVlP3R5cGU9c3R5bGUmaW5kZXg9MFwiO2ltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXEZvbGRSZWZcXFxcbW9kdWxlc1xcXFxFeHBhbmRCdXR0b24udnVlP3R5cGU9dGVtcGxhdGVcIjsgc2NyaXB0LnJlbmRlciA9IHJlbmRlcjtzY3JpcHQuX19maWxlID0gXCJzcmNcXFxcRm9sZFJlZlxcXFxtb2R1bGVzXFxcXEV4cGFuZEJ1dHRvbi52dWVcIjtzY3JpcHQuX19zY29wZUlkID0gXCJkYXRhLXYtNGI0NTMwNjBcIjtleHBvcnQgZGVmYXVsdCBzY3JpcHQ7IiwgImltcG9ydCBFeHBhbmRCdXR0b24gZnJvbSAnLi4vRXhwYW5kQnV0dG9uLnZ1ZSc7XG5pbXBvcnQge2NyZWF0ZUFwcH0gZnJvbSAndnVlJztcbmltcG9ydCB7cmVmYXJlYX0gZnJvbSAnLi4vRm9sZFJlZi5tb2R1bGUubGVzcyc7XG5cbi8vIGNyZWF0ZSBhIGRpdiwgcGxhY2Uge3tSZWZsaXN0fX1zIGluc2lkZVxuY29uc3QgcHJvY2Vzc0VsZW1lbnQgPSAoZWxlbWVudDogRWxlbWVudCk6IHZvaWQgPT4ge1xuXHRjb25zdCByZWZGb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0cmVmRm9sZGVyLmNsYXNzTmFtZSA9IHJlZmFyZWEgYXMgc3RyaW5nO1xuXHRlbGVtZW50LmJlZm9yZShyZWZGb2xkZXIpO1xuXHRyZWZGb2xkZXIuYXBwZW5kKGVsZW1lbnQpO1xuXG5cdGNvbnN0IGV4cGFuZFJvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0cmVmRm9sZGVyLmFmdGVyKGV4cGFuZFJvb3QpO1xuXG5cdGNvbnN0IGFwcCA9IGNyZWF0ZUFwcChFeHBhbmRCdXR0b24sIHtcblx0XHRvbkV4cGFuZDogKCk6IHZvaWQgPT4ge1xuXHRcdFx0cmVmRm9sZGVyLmNsYXNzTGlzdC5yZW1vdmUocmVmYXJlYSBhcyBzdHJpbmcpO1xuXHRcdFx0YXBwLnVubW91bnQoKTtcblx0XHRcdGV4cGFuZFJvb3QucmVtb3ZlKCk7XG5cdFx0fSxcblx0fSk7XG5cdGFwcC5tb3VudChleHBhbmRSb290KTtcbn07XG5cbmV4cG9ydCB7cHJvY2Vzc0VsZW1lbnR9O1xuIiwgImltcG9ydCBcImVzYnVpbGQtY3NzLW1vZHVsZXMtcGx1Z2luLW5zLWNzczpzcmMvRm9sZFJlZi9tb2R1bGVzL0ZvbGRSZWYubW9kdWxlLmxlc3NcIjtcbmV4cG9ydCBjb25zdCByZWZhcmVhID0gXCJGb2xkUmVmLW1vZHVsZV9fcmVmYXJlYV9GTmtjdldfXzQxMDBcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcInJlZmFyZWFcIjogcmVmYXJlYVxufTtcbiAgICAgICIsICJpbXBvcnQge3Byb2Nlc3NFbGVtZW50fSBmcm9tICcuL3V0aWwvcHJvY2Vzc0VsZW1lbnQnO1xuaW1wb3J0IHtyZWZhcmVhfSBmcm9tICcuL0ZvbGRSZWYubW9kdWxlLmxlc3MnO1xuXG5jb25zdCBmb2xkUmVmID0gKCk6IHZvaWQgPT4ge1xuXHQvLyBmb3IgYXJ0aWNsZXMgdXNpbmcgPHJlZmVyZW5jZXMgLz4sIHt7UmVmbGlzdH19cyBvciBzaW1pbGFyIHRlbXBsYXRlc1xuXHRjb25zdCAkZm9sZFJlZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tdy1yZWZlcmVuY2VzLXdyYXAsLnJlZmJlZ2luJyk7XG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiAkZm9sZFJlZikge1xuXHRcdGlmIChcblx0XHRcdGVsZW1lbnQucGFyZW50RWxlbWVudD8uY2xhc3NMaXN0LmNvbnRhaW5zKHJlZmFyZWEgYXMgc3RyaW5nKSB8fFxuXHRcdFx0ZWxlbWVudC5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50Py5jbGFzc0xpc3QuY29udGFpbnMocmVmYXJlYSBhcyBzdHJpbmcpXG5cdFx0KSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBoZWlnaHQ6IG51bWJlciA9IGVsZW1lbnQuY2xpZW50SGVpZ2h0ID8/IDA7XG5cdFx0aWYgKCFoZWlnaHQgfHwgaGVpZ2h0IDw9IHdpbmRvdy5pbm5lckhlaWdodCAqIDAuOSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Ly8gaWYgZ3JlYXRlciB0aGFuIDkwJSBvZiB0aGUgdmlld3BvcnQgaGVpZ2h0LCBmb2xkIHRoZSByZWZlcmVuY2VzIGxpc3Rcblx0XHRwcm9jZXNzRWxlbWVudChlbGVtZW50KTtcblx0fVxufTtcblxuZXhwb3J0IHtmb2xkUmVmfTtcbiIsICJpbXBvcnQge2ZvbGRSZWZ9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuaWYgKHdnTmFtZXNwYWNlTnVtYmVyID09PSAwKSB7XG5cdHZvaWQgZ2V0Qm9keSgpLnRoZW4oKCkgPT4ge1xuXHRcdGZvbGRSZWYoKTtcblx0fSk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUFBLGVBQXdCQyxRQUFBLGtCQUFBOztBQ0R4QixJQUFBQyxvQkFBdUJELFFBQUEsaUJBQUE7QUFFdkIsSUFBTUUsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsU0FBQSxHQUFRRixrQkFBQUcsVUFBUztNQUNoQkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0VBQ0Y7QUFDRDtBQUVBLElBQU1DLGVBQWVMLGdCQUFnQjtBQUVyQyxJQUFNTSxhQUFnREMsU0FBUTtBQUM3RCxTQUFPRixhQUFhRSxHQUFHLEtBQUtBO0FBQzdCOzs7Ozs7Ozs7Ozs7O0FEYkEsVUFBTUMsUUFBUUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FFSmQsSUFBQUMsY0FBK01aLFFBQUEsS0FBQTtBQUUvTSxJQUFNYSxhQUFhO0VBQUVDLE9BQU87QUFBa0I7QUFFdkMsU0FBU0MsT0FBT0MsTUFBTUMsUUFBUUMsUUFBUUMsUUFBUUMsT0FBT0MsVUFBVTtBQUNwRSxVQUFBLEdBQVFULFlBQUFVLFdBQVcsSUFBQSxHQUFHVixZQUFBVyxvQkFBb0IsT0FBT1YsWUFBWSxFQUFBLEdBQzNERCxZQUFBWSxhQUFhTCxPQUFPLFdBQVcsR0FBRztJQUNoQ00sUUFBUTtJQUNSQyxTQUFTUCxPQUFPVCxNQUFNaUI7RUFDeEIsR0FBRztJQUNEQyxVQUFBLEdBQVNoQixZQUFBaUIsU0FBUyxNQUFNLEVBQUEsR0FDdEJqQixZQUFBa0I7T0FBQSxHQUFpQmxCLFlBQUFtQixpQkFBaUJaLE9BQU9YLFdBQVcsUUFBUSxDQUFDO01BQUc7O0lBQVksQ0FBQSxDQUM3RTtJQUNEd0IsR0FBRzs7RUFDTCxHQUFHLEdBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQSxDQUM5QjtBQUNIOztBQ2hCbVVDLHFCQUFPbEIsU0FBU0E7QUFBT2tCLHFCQUFPQyxTQUFTO0FBQTBDRCxxQkFBT0UsWUFBWTtBQUFrQixJQUFPQyx3QkFBUUg7O0FDQ3hjLElBQUFJLGNBQXdCckMsUUFBQSxLQUFBOztBQ0FqQixJQUFNc0MsVUFBVTs7QURJdkIsSUFBTUMsaUJBQWtCQyxhQUEyQjtBQUNsRCxRQUFNQyxZQUFZQyxTQUFTQyxjQUFjLEtBQUs7QUFDOUNGLFlBQVVHLFlBQVlOO0FBQ3RCRSxVQUFRSyxPQUFPSixTQUFTO0FBQ3hCQSxZQUFVSyxPQUFPTixPQUFPO0FBRXhCLFFBQU1PLGFBQWFMLFNBQVNDLGNBQWMsS0FBSztBQUMvQ0YsWUFBVU8sTUFBTUQsVUFBVTtBQUUxQixRQUFNRSxPQUFBLEdBQU1aLFlBQUFhLFdBQVVkLHVCQUFjO0lBQ25DVCxVQUFVQSxNQUFZO0FBQ3JCYyxnQkFBVVUsVUFBVUMsT0FBT2QsT0FBaUI7QUFDNUNXLFVBQUlJLFFBQVE7QUFDWk4saUJBQVdLLE9BQU87SUFDbkI7RUFDRCxDQUFDO0FBQ0RILE1BQUlLLE1BQU1QLFVBQVU7QUFDckI7O0FFbkJBLElBQU1RLFVBQVVBLE1BQVk7QUFFM0IsUUFBTUMsV0FBV2QsU0FBU2UsaUJBQWlCLCtCQUErQjtBQUFBLE1BQUFDLFlBQUFDLDJCQUNwREgsUUFBQSxHQUFBSTtBQUFBLE1BQUE7QUFBdEIsU0FBQUYsVUFBQUcsRUFBQSxHQUFBLEVBQUFELFFBQUFGLFVBQUFJLEVBQUEsR0FBQUMsUUFBZ0M7QUFBQSxVQUFBQyx1QkFBQUMsd0JBQUFDO0FBQUEsWUFBckIxQixVQUFBb0IsTUFBQU87QUFDVixXQUNDSCx3QkFBQXhCLFFBQVE0QixtQkFBQSxRQUFBSiwwQkFBQSxVQUFSQSxzQkFBdUJiLFVBQVVrQixTQUFTL0IsT0FBaUIsTUFBQTJCLHlCQUMzRHpCLFFBQVE0QixtQkFBQSxRQUFBSCwyQkFBQSxXQUFBQSx5QkFBUkEsdUJBQXVCRyxtQkFBQSxRQUFBSCwyQkFBQSxVQUF2QkEsdUJBQXNDZCxVQUFVa0IsU0FBUy9CLE9BQWlCLEdBQ3pFO0FBQ0Q7TUFDRDtBQUVBLFlBQU1nQyxVQUFBSix3QkFBaUIxQixRQUFRK0Isa0JBQUEsUUFBQUwsMEJBQUEsU0FBQUEsd0JBQWdCO0FBQy9DLFVBQUksQ0FBQ0ksVUFBVUEsVUFBVUUsT0FBT0MsY0FBYyxLQUFLO0FBQ2xEO01BQ0Q7QUFHQWxDLHFCQUFlQyxPQUFPO0lBQ3ZCO0VBQUEsU0FBQWtDLEtBQUE7QUFBQWhCLGNBQUFpQixFQUFBRCxHQUFBO0VBQUEsVUFBQTtBQUFBaEIsY0FBQWtCLEVBQUE7RUFBQTtBQUNEOztBQ3JCQSxJQUFBQyxxQkFBc0I3RSxRQUFBLGlCQUFBO0FBRXRCLElBQU07RUFBQzhFO0FBQWlCLElBQUlDLEdBQUdDLE9BQU9DLElBQUk7QUFFMUMsSUFBSUgsc0JBQXNCLEdBQUc7QUFDNUIsUUFBQSxHQUFLRCxtQkFBQUssU0FBUSxFQUFFQyxLQUFLLE1BQU07QUFDekI1QixZQUFRO0VBQ1QsQ0FBQztBQUNGOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfY29kZXgiLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAiRXhwYW5kIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJwcm9wcyIsICJfX3Byb3BzIiwgImltcG9ydF92dWUyIiwgIl9ob2lzdGVkXzEiLCAiY2xhc3MiLCAicmVuZGVyIiwgIl9jdHgiLCAiX2NhY2hlIiwgIiRwcm9wcyIsICIkc2V0dXAiLCAiJGRhdGEiLCAiJG9wdGlvbnMiLCAib3BlbkJsb2NrIiwgImNyZWF0ZUVsZW1lbnRCbG9jayIsICJjcmVhdGVWTm9kZSIsICJ3ZWlnaHQiLCAib25DbGljayIsICJvbkV4cGFuZCIsICJkZWZhdWx0IiwgIndpdGhDdHgiLCAiY3JlYXRlVGV4dFZOb2RlIiwgInRvRGlzcGxheVN0cmluZyIsICJfIiwgIkV4cGFuZEJ1dHRvbl9kZWZhdWx0IiwgIl9fZmlsZSIsICJfX3Njb3BlSWQiLCAiRXhwYW5kQnV0dG9uX2RlZmF1bHQyIiwgImltcG9ydF92dWUzIiwgInJlZmFyZWEiLCAicHJvY2Vzc0VsZW1lbnQiLCAiZWxlbWVudCIsICJyZWZGb2xkZXIiLCAiZG9jdW1lbnQiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzc05hbWUiLCAiYmVmb3JlIiwgImFwcGVuZCIsICJleHBhbmRSb290IiwgImFmdGVyIiwgImFwcCIsICJjcmVhdGVBcHAiLCAiY2xhc3NMaXN0IiwgInJlbW92ZSIsICJ1bm1vdW50IiwgIm1vdW50IiwgImZvbGRSZWYiLCAiJGZvbGRSZWYiLCAicXVlcnlTZWxlY3RvckFsbCIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiX2VsZW1lbnQkcGFyZW50RWxlbWVuIiwgIl9lbGVtZW50JHBhcmVudEVsZW1lbjIiLCAiX2VsZW1lbnQkY2xpZW50SGVpZ2h0IiwgInZhbHVlIiwgInBhcmVudEVsZW1lbnQiLCAiY29udGFpbnMiLCAiaGVpZ2h0IiwgImNsaWVudEhlaWdodCIsICJ3aW5kb3ciLCAiaW5uZXJIZWlnaHQiLCAiZXJyIiwgImUiLCAiZiIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJnZXRCb2R5IiwgInRoZW4iXQp9Cg==

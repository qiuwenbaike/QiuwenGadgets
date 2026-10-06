/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://en.wikipedia.org/wiki/User:Nardog/CopyCodeBlock.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/CopyCodeBlock}
 * @license CC-BY-SA-4.0 {@link https://www.qiuwenbaike.cn/wiki/H:CC-BY-SA-4.0}
 */

/**
 * SPDX-License-Identifier: MIT
 *
 * The "copy" icon from @wikimedia/codex-icons
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

// dist/CopyCodeBlock/CopyCodeBlock.js
//! src/CopyCodeBlock/modules/CopyCodeBlock.module.less
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
var button = "CopyCodeBlock-module__button_74i1Da__4100";
var codeBlock = "CopyCodeBlock-module__codeBlock_74i1Da__4100";
var import_vue = require("vue");
var import_codex = require("@wikimedia/codex");
//! src/CopyCodeBlock/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Copy: (0, import_ext_gadget.localize)({
      en: "Copy to clipboard",
      ja: "クリップボードにコピー",
      "zh-hans": "复制至剪贴板",
      "zh-hant": "拷貝至剪貼簿"
    }),
    Copied: (0, import_ext_gadget.localize)({
      en: "Copied",
      ja: "コピーが成功しました",
      "zh-hans": "已复制",
      "zh-hant": "已拷貝"
    }),
    Failed: (0, import_ext_gadget.localize)({
      en: "Copy failed",
      ja: "コピーに失敗しました",
      "zh-hans": "复制失败",
      "zh-hant": "拷貝失敗"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
var App_default = /* @__PURE__ */ (0, import_vue.defineComponent)({
  __name: "App",
  setup(__props, {
    expose: __expose
  }) {
    __expose();
    const cdxIconCopy = {
      path: "M13 19H1V7h6V1h12v12h-6zm-6-6V9H3v8h8v-4zm2-2h8V3H9z",
      shouldFlip: true
    };
    const __returned__ = {
      cdxIconCopy,
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
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue2.openBlock)(), (0, import_vue2.createBlock)($setup["CdxButton"], {
    weight: "quiet",
    "aria-label": $setup.getMessage("Copy")
  }, {
    default: (0, import_vue2.withCtx)(() => [(0, import_vue2.createVNode)($setup["CdxIcon"], {
      icon: $setup.cdxIconCopy
    })]),
    _: 1
    /* STABLE */
  }, 8, ["aria-label"]);
}
//! src/CopyCodeBlock/App.vue
App_default.render = render;
App_default.__file = "src\\CopyCodeBlock\\App.vue";
var App_default2 = App_default;
//! src/CopyCodeBlock/modules/addCopyListener.ts
var import_ext_gadget2 = require("ext.gadget.Clipboard");
var import_ext_gadget3 = require("ext.gadget.Toastify");
var addCopyListener = (pre, copyButton) => {
  const clipboard = new import_ext_gadget2.Clipboard(copyButton, {
    text: () => {
      var _pre$textContent;
      return (_pre$textContent = pre.textContent) !== null && _pre$textContent !== void 0 ? _pre$textContent : "";
    }
  });
  clipboard.on("success", () => {
    (0, import_ext_gadget3.toastify)({
      text: getMessage("Copied")
    }, "success");
  });
  clipboard.on("error", () => {
    (0, import_ext_gadget3.toastify)({
      text: getMessage("Failed")
    }, "error");
  });
};
//! src/CopyCodeBlock/modules/addButton.ts
var import_vue3 = require("vue");
var import_ext_gadget4 = require("ext.gadget.Tippy");
var addButton = ($pres) => {
  var _iterator = _createForOfIteratorHelper($pres), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      const pre = _step.value;
      pre.classList.add(codeBlock);
      if (pre.querySelector(".".concat(button))) {
        continue;
      }
      const wrapper = document.createElement("span");
      wrapper.className = button;
      pre.append(wrapper);
      const app = (0, import_vue3.createApp)(App_default2);
      app.mount(wrapper);
      const copyButton = wrapper.querySelector("button");
      if (!copyButton) {
        app.unmount();
        wrapper.remove();
        continue;
      }
      (0, import_ext_gadget4.tippy)(copyButton, {
        arrow: true,
        content: getMessage("Copy"),
        placement: "bottom"
      });
      addCopyListener(pre, copyButton);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};
//! src/CopyCodeBlock/CopyCodeBlock.ts
mw.hook("wikipage.content").add(function copyCodeBlock($content) {
  const $pres = $content.find("pre");
  if (!$pres.length) {
    return;
  }
  addButton($pres);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0NvcHlDb2RlQmxvY2svbW9kdWxlcy9Db3B5Q29kZUJsb2NrLm1vZHVsZS5sZXNzIiwgImRpc3QvQ29weUNvZGVCbG9jay9zcmMvQ29weUNvZGVCbG9jay9BcHAudnVlIiwgInNyYy9Db3B5Q29kZUJsb2NrL21vZHVsZXMvaTE4bi50cyIsICJzZmMtdGVtcGxhdGU6RTpcXENvZGVzXFxRaXV3ZW5cXFFpdXdlbkdhZGdldHNcXHNyY1xcQ29weUNvZGVCbG9ja1xcQXBwLnZ1ZT90eXBlPXRlbXBsYXRlIiwgInNyYy9Db3B5Q29kZUJsb2NrL0FwcC52dWUiLCAic3JjL0NvcHlDb2RlQmxvY2svbW9kdWxlcy9hZGRDb3B5TGlzdGVuZXIudHMiLCAic3JjL0NvcHlDb2RlQmxvY2svbW9kdWxlcy9hZGRCdXR0b24udHMiLCAic3JjL0NvcHlDb2RlQmxvY2svQ29weUNvZGVCbG9jay50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IFwiZXNidWlsZC1jc3MtbW9kdWxlcy1wbHVnaW4tbnMtY3NzOnNyYy9Db3B5Q29kZUJsb2NrL21vZHVsZXMvQ29weUNvZGVCbG9jay5tb2R1bGUubGVzc1wiO1xuZXhwb3J0IGNvbnN0IGJ1dHRvbiA9IFwiQ29weUNvZGVCbG9jay1tb2R1bGVfX2J1dHRvbl83NGkxRGFfXzQxMDBcIjtcbmV4cG9ydCBjb25zdCBjb2RlQmxvY2sgPSBcIkNvcHlDb2RlQmxvY2stbW9kdWxlX19jb2RlQmxvY2tfNzRpMURhX180MTAwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgXCJidXR0b25cIjogYnV0dG9uLFxuICBcImNvZGVCbG9ja1wiOiBjb2RlQmxvY2tcbn07XG4gICAgICAiLCAiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7Q2R4QnV0dG9uLCBDZHhJY29ufSBmcm9tICdAd2lraW1lZGlhL2NvZGV4JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9tb2R1bGVzL2kxOG4nO1xuXG4vKipcbiAqIFNWRyBwYXRocyBpbmxpbmVkIGZyb20gYEB3aWtpbWVkaWEvY29kZXgtaWNvbnNgIHYyLjcuMC5cbiAqXG4gKiBNZWRpYVdpa2kgZG9lcyBub3Qgc2hpcCBhIFJlc291cmNlTG9hZGVyIG1vZHVsZSB0aGF0IGJ1bmRsZXNcbiAqIGBAd2lraW1lZGlhL2NvZGV4LWljb25zYCAoc2VlIGh0dHBzOi8vd3d3Lm1lZGlhd2lraS5vcmcvd2lraS9Db2RleCksXG4gKiBzbyB0aGUgcGF0aCBkYXRhIGlzIGNvcGllZCBoZXJlIHZlcmJhdGltIGFuZCByZW5kZXJlZCBhcyBpbmxpbmUgU1ZHXG4gKiB0byBrZWVwIHRoZSBnYWRnZXQgc2VsZi1jb250YWluZWQgd2hpbGUgc3RpbGwgc291cmNpbmcgdGhlIGljb25zXG4gKiBmcm9tIGBAd2lraW1lZGlhL2NvZGV4LWljb25zYC5cbiAqXG4gKiBAc2VlIHtAbGluayBodHRwczovL2RvYy53aWtpbWVkaWEub3JnL2NvZGV4L2xhdGVzdC9pY29ucy99XG4gKi9cbi8qKiBQYXRoIGZvciBgY2R4SWNvbkNvcHlgLiAqL1xuY29uc3QgY2R4SWNvbkNvcHkgPSB7XG5cdHBhdGg6ICdNMTMgMTlIMVY3aDZWMWgxMnYxMmgtNnptLTYtNlY5SDN2OGg4di00em0yLTJoOFYzSDl6Jyxcblx0c2hvdWxkRmxpcDogdHJ1ZSxcbn07XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuXHQ8Y2R4LWJ1dHRvbiB3ZWlnaHQ9XCJxdWlldFwiIDphcmlhLWxhYmVsPVwiZ2V0TWVzc2FnZSgnQ29weScpXCI+XG5cdFx0PGNkeC1pY29uIDppY29uPVwiY2R4SWNvbkNvcHlcIiAvPlxuXHQ8L2NkeC1idXR0b24+XG48L3RlbXBsYXRlPlxuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRDb3B5OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NvcHkgdG8gY2xpcGJvYXJkJyxcblx0XHRcdGphOiAn44Kv44Oq44OD44OX44Oc44O844OJ44Gr44Kz44OU44O8Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+WkjeWItuiHs+WJqui0tOadvycsXG5cdFx0XHQnemgtaGFudCc6ICfmi7fosp3oh7PliarosrznsL8nLFxuXHRcdH0pLFxuXHRcdENvcGllZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDb3BpZWQnLFxuXHRcdFx0amE6ICfjgrPjg5Tjg7zjgYzmiJDlip/jgZfjgb7jgZfjgZ8nLFxuXHRcdFx0J3poLWhhbnMnOiAn5bey5aSN5Yi2Jyxcblx0XHRcdCd6aC1oYW50JzogJ+W3suaLt+iynScsXG5cdFx0fSksXG5cdFx0RmFpbGVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NvcHkgZmFpbGVkJyxcblx0XHRcdGphOiAn44Kz44OU44O844Gr5aSx5pWX44GX44G+44GX44GfJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WkjeWItuWksei0pScsXG5cdFx0XHQnemgtaGFudCc6ICfmi7fosp3lpLHmlZcnLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQgeyBjcmVhdGVWTm9kZSBhcyBfY3JlYXRlVk5vZGUsIHdpdGhDdHggYXMgX3dpdGhDdHgsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVCbG9jayBhcyBfY3JlYXRlQmxvY2sgfSBmcm9tIFwidnVlXCJcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcbiAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jaygkc2V0dXBbXCJDZHhCdXR0b25cIl0sIHtcbiAgICB3ZWlnaHQ6IFwicXVpZXRcIixcbiAgICBcImFyaWEtbGFiZWxcIjogJHNldHVwLmdldE1lc3NhZ2UoJ0NvcHknKVxuICB9LCB7XG4gICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkNkeEljb25cIl0sIHsgaWNvbjogJHNldHVwLmNkeEljb25Db3B5IH0pXG4gICAgXSksXG4gICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgfSwgOCAvKiBQUk9QUyAqLywgW1wiYXJpYS1sYWJlbFwiXSkpXG59IiwgImltcG9ydCBzY3JpcHQgZnJvbSBcIkU6XFxcXENvZGVzXFxcXFFpdXdlblxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxDb3B5Q29kZUJsb2NrXFxcXEFwcC52dWU/dHlwZT1zY3JpcHRcIjtpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiRTpcXFxcQ29kZXNcXFxcUWl1d2VuXFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXENvcHlDb2RlQmxvY2tcXFxcQXBwLnZ1ZT90eXBlPXRlbXBsYXRlXCI7IHNjcmlwdC5yZW5kZXIgPSByZW5kZXI7c2NyaXB0Ll9fZmlsZSA9IFwic3JjXFxcXENvcHlDb2RlQmxvY2tcXFxcQXBwLnZ1ZVwiO2V4cG9ydCBkZWZhdWx0IHNjcmlwdDsiLCAiaW1wb3J0IHtDbGlwYm9hcmR9IGZyb20gJ2V4dC5nYWRnZXQuQ2xpcGJvYXJkJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG5jb25zdCBhZGRDb3B5TGlzdGVuZXIgPSAocHJlOiBIVE1MUHJlRWxlbWVudCwgY29weUJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQpOiB2b2lkID0+IHtcblx0Y29uc3QgY2xpcGJvYXJkID0gbmV3IENsaXBib2FyZChjb3B5QnV0dG9uLCB7XG5cdFx0dGV4dDogKCk6IHN0cmluZyA9PiB7XG5cdFx0XHRyZXR1cm4gcHJlLnRleHRDb250ZW50ID8/ICcnO1xuXHRcdH0sXG5cdH0pO1xuXG5cdGNsaXBib2FyZC5vbignc3VjY2VzcycsICgpOiB2b2lkID0+IHtcblx0XHR0b2FzdGlmeShcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnQ29waWVkJyksXG5cdFx0XHR9LFxuXHRcdFx0J3N1Y2Nlc3MnXG5cdFx0KTtcblx0fSk7XG5cblx0Y2xpcGJvYXJkLm9uKCdlcnJvcicsICgpOiB2b2lkID0+IHtcblx0XHR0b2FzdGlmeShcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnRmFpbGVkJyksXG5cdFx0XHR9LFxuXHRcdFx0J2Vycm9yJ1xuXHRcdCk7XG5cdH0pO1xufTtcblxuZXhwb3J0IHthZGRDb3B5TGlzdGVuZXJ9O1xuIiwgImltcG9ydCB7YnV0dG9uLCBjb2RlQmxvY2t9IGZyb20gJy4vQ29weUNvZGVCbG9jay5tb2R1bGUubGVzcyc7XG5pbXBvcnQgQXBwIGZyb20gJy4uL0FwcC52dWUnO1xuaW1wb3J0IHthZGRDb3B5TGlzdGVuZXJ9IGZyb20gJy4vYWRkQ29weUxpc3RlbmVyJztcbmltcG9ydCB7Y3JlYXRlQXBwfSBmcm9tICd2dWUnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHt0aXBweX0gZnJvbSAnZXh0LmdhZGdldC5UaXBweSc7XG5cbmNvbnN0IGFkZEJ1dHRvbiA9ICgkcHJlczogSlF1ZXJ5PEhUTUxQcmVFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRmb3IgKGNvbnN0IHByZSBvZiAkcHJlcykge1xuXHRcdHByZS5jbGFzc0xpc3QuYWRkKGNvZGVCbG9jayBhcyBzdHJpbmcpO1xuXG5cdFx0aWYgKHByZS5xdWVyeVNlbGVjdG9yKGAuJHtidXR0b259YCkpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHdyYXBwZXI6IEhUTUxTcGFuRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHR3cmFwcGVyLmNsYXNzTmFtZSA9IGJ1dHRvbiBhcyBzdHJpbmc7XG5cdFx0cHJlLmFwcGVuZCh3cmFwcGVyKTtcblxuXHRcdGNvbnN0IGFwcCA9IGNyZWF0ZUFwcChBcHApO1xuXHRcdGFwcC5tb3VudCh3cmFwcGVyKTtcblxuXHRcdGNvbnN0IGNvcHlCdXR0b246IEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbCA9IHdyYXBwZXIucXVlcnlTZWxlY3RvcignYnV0dG9uJyk7XG5cdFx0aWYgKCFjb3B5QnV0dG9uKSB7XG5cdFx0XHRhcHAudW5tb3VudCgpO1xuXHRcdFx0d3JhcHBlci5yZW1vdmUoKTtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHRpcHB5KGNvcHlCdXR0b24sIHtcblx0XHRcdGFycm93OiB0cnVlLFxuXHRcdFx0Y29udGVudDogZ2V0TWVzc2FnZSgnQ29weScpLFxuXHRcdFx0cGxhY2VtZW50OiAnYm90dG9tJyxcblx0XHR9KTtcblxuXHRcdGFkZENvcHlMaXN0ZW5lcihwcmUsIGNvcHlCdXR0b24pO1xuXHR9XG59O1xuXG5leHBvcnQge2FkZEJ1dHRvbn07XG4iLCAiaW1wb3J0IHthZGRCdXR0b259IGZyb20gJy4vbW9kdWxlcy9hZGRCdXR0b24nO1xuXG5tdy5ob29rKCd3aWtpcGFnZS5jb250ZW50JykuYWRkKGZ1bmN0aW9uIGNvcHlDb2RlQmxvY2soJGNvbnRlbnQpOiB2b2lkIHtcblx0Y29uc3QgJHByZXM6IEpRdWVyeTxIVE1MUHJlRWxlbWVudD4gPSAkY29udGVudC5maW5kKCdwcmUnKTtcblx0aWYgKCEkcHJlcy5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRhZGRCdXR0b24oJHByZXMpO1xufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFRRyxZQUFZbkU7QUFDcEJ3QyxVQUFJNEIsT0FBT0osT0FBTztBQUVsQixZQUFNSyxPQUFBLEdBQU1wQixZQUFBcUIsV0FBVWxDLFlBQUc7QUFDekJpQyxVQUFJRSxNQUFNUCxPQUFPO0FBRWpCLFlBQU12QixhQUF1Q3VCLFFBQVFGLGNBQWMsUUFBUTtBQUMzRSxVQUFJLENBQUNyQixZQUFZO0FBQ2hCNEIsWUFBSUcsUUFBUTtBQUNaUixnQkFBUVMsT0FBTztBQUNmO01BQ0Q7QUFFQSxPQUFBLEdBQUF2QixtQkFBQXdCLE9BQU1qQyxZQUFZO1FBQ2pCa0MsT0FBTztRQUNQQyxTQUFTL0QsV0FBVyxNQUFNO1FBQzFCZ0UsV0FBVztNQUNaLENBQUM7QUFFRHRDLHNCQUFnQkMsS0FBS0MsVUFBVTtJQUNoQztFQUFBLFNBQUFxQyxLQUFBO0FBQUF6QixjQUFBMEIsRUFBQUQsR0FBQTtFQUFBLFVBQUE7QUFBQXpCLGNBQUEyQixFQUFBO0VBQUE7QUFDRDs7QUNuQ0FDLEdBQUdDLEtBQUssa0JBQWtCLEVBQUVyQixJQUFJLFNBQVNzQixjQUFjQyxVQUFnQjtBQUN0RSxRQUFNaEMsUUFBZ0NnQyxTQUFTQyxLQUFLLEtBQUs7QUFDekQsTUFBSSxDQUFDakMsTUFBTWtDLFFBQVE7QUFDbEI7RUFDRDtBQUVBbkMsWUFBVUMsS0FBSztBQUNoQixDQUFDOyIsCiAgIm5hbWVzIjogWyJidXR0b24iLCAiY29kZUJsb2NrIiwgImltcG9ydF9jb2RleCIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJDb3B5IiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgIkNvcGllZCIsICJGYWlsZWQiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImNkeEljb25Db3B5IiwgInBhdGgiLCAic2hvdWxkRmxpcCIsICJpbXBvcnRfdnVlMiIsICJyZW5kZXIiLCAiX2N0eCIsICJfY2FjaGUiLCAiJHByb3BzIiwgIiRzZXR1cCIsICIkZGF0YSIsICIkb3B0aW9ucyIsICJvcGVuQmxvY2siLCAiY3JlYXRlQmxvY2siLCAid2VpZ2h0IiwgImRlZmF1bHQiLCAid2l0aEN0eCIsICJjcmVhdGVWTm9kZSIsICJpY29uIiwgIl8iLCAiQXBwX2RlZmF1bHQiLCAiX19maWxlIiwgIkFwcF9kZWZhdWx0MiIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImFkZENvcHlMaXN0ZW5lciIsICJwcmUiLCAiY29weUJ1dHRvbiIsICJjbGlwYm9hcmQiLCAiQ2xpcGJvYXJkIiwgInRleHQiLCAiX3ByZSR0ZXh0Q29udGVudCIsICJ0ZXh0Q29udGVudCIsICJvbiIsICJ0b2FzdGlmeSIsICJpbXBvcnRfdnVlMyIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAiYWRkQnV0dG9uIiwgIiRwcmVzIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJ2YWx1ZSIsICJjbGFzc0xpc3QiLCAiYWRkIiwgInF1ZXJ5U2VsZWN0b3IiLCAiY29uY2F0IiwgIndyYXBwZXIiLCAiZG9jdW1lbnQiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzc05hbWUiLCAiYXBwZW5kIiwgImFwcCIsICJjcmVhdGVBcHAiLCAibW91bnQiLCAidW5tb3VudCIsICJyZW1vdmUiLCAidGlwcHkiLCAiYXJyb3ciLCAiY29udGVudCIsICJwbGFjZW1lbnQiLCAiZXJyIiwgImUiLCAiZiIsICJtdyIsICJob29rIiwgImNvcHlDb2RlQmxvY2siLCAiJGNvbnRlbnQiLCAiZmluZCIsICJsZW5ndGgiXQp9Cg==

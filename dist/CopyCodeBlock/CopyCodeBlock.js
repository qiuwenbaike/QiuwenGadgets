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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0NvcHlDb2RlQmxvY2svbW9kdWxlcy9Db3B5Q29kZUJsb2NrLm1vZHVsZS5sZXNzIiwgImRpc3QvQ29weUNvZGVCbG9jay9zcmMvQ29weUNvZGVCbG9jay9BcHAudnVlIiwgInNyYy9Db3B5Q29kZUJsb2NrL21vZHVsZXMvaTE4bi50cyIsICJzZmMtdGVtcGxhdGU6RDpcXEdpdFJlcG9zaXRvcnlcXFFpdXdlbkdhZGdldHNcXHNyY1xcQ29weUNvZGVCbG9ja1xcQXBwLnZ1ZT90eXBlPXRlbXBsYXRlIiwgInNyYy9Db3B5Q29kZUJsb2NrL0FwcC52dWUiLCAic3JjL0NvcHlDb2RlQmxvY2svbW9kdWxlcy9hZGRDb3B5TGlzdGVuZXIudHMiLCAic3JjL0NvcHlDb2RlQmxvY2svbW9kdWxlcy9hZGRCdXR0b24udHMiLCAic3JjL0NvcHlDb2RlQmxvY2svQ29weUNvZGVCbG9jay50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IFwiZXNidWlsZC1jc3MtbW9kdWxlcy1wbHVnaW4tbnMtY3NzOnNyYy9Db3B5Q29kZUJsb2NrL21vZHVsZXMvQ29weUNvZGVCbG9jay5tb2R1bGUubGVzc1wiO1xuZXhwb3J0IGNvbnN0IGJ1dHRvbiA9IFwiQ29weUNvZGVCbG9jay1tb2R1bGVfX2J1dHRvbl83NGkxRGFfXzQxMDBcIjtcbmV4cG9ydCBjb25zdCBjb2RlQmxvY2sgPSBcIkNvcHlDb2RlQmxvY2stbW9kdWxlX19jb2RlQmxvY2tfNzRpMURhX180MTAwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgXCJidXR0b25cIjogYnV0dG9uLFxuICBcImNvZGVCbG9ja1wiOiBjb2RlQmxvY2tcbn07XG4gICAgICAiLCAiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7Q2R4QnV0dG9uLCBDZHhJY29ufSBmcm9tICdAd2lraW1lZGlhL2NvZGV4JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9tb2R1bGVzL2kxOG4nO1xuXG4vKipcbiAqIFNWRyBwYXRocyBpbmxpbmVkIGZyb20gYEB3aWtpbWVkaWEvY29kZXgtaWNvbnNgIHYyLjcuMC5cbiAqXG4gKiBNZWRpYVdpa2kgZG9lcyBub3Qgc2hpcCBhIFJlc291cmNlTG9hZGVyIG1vZHVsZSB0aGF0IGJ1bmRsZXNcbiAqIGBAd2lraW1lZGlhL2NvZGV4LWljb25zYCAoc2VlIGh0dHBzOi8vd3d3Lm1lZGlhd2lraS5vcmcvd2lraS9Db2RleCksXG4gKiBzbyB0aGUgcGF0aCBkYXRhIGlzIGNvcGllZCBoZXJlIHZlcmJhdGltIGFuZCByZW5kZXJlZCBhcyBpbmxpbmUgU1ZHXG4gKiB0byBrZWVwIHRoZSBnYWRnZXQgc2VsZi1jb250YWluZWQgd2hpbGUgc3RpbGwgc291cmNpbmcgdGhlIGljb25zXG4gKiBmcm9tIGBAd2lraW1lZGlhL2NvZGV4LWljb25zYC5cbiAqXG4gKiBAc2VlIHtAbGluayBodHRwczovL2RvYy53aWtpbWVkaWEub3JnL2NvZGV4L2xhdGVzdC9pY29ucy99XG4gKi9cbi8qKiBQYXRoIGZvciBgY2R4SWNvbkNvcHlgLiAqL1xuY29uc3QgY2R4SWNvbkNvcHkgPSB7XG5cdHBhdGg6ICdNMTMgMTlIMVY3aDZWMWgxMnYxMmgtNnptLTYtNlY5SDN2OGg4di00em0yLTJoOFYzSDl6Jyxcblx0c2hvdWxkRmxpcDogdHJ1ZSxcbn07XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuXHQ8Y2R4LWJ1dHRvbiB3ZWlnaHQ9XCJxdWlldFwiIDphcmlhLWxhYmVsPVwiZ2V0TWVzc2FnZSgnQ29weScpXCI+XG5cdFx0PGNkeC1pY29uIDppY29uPVwiY2R4SWNvbkNvcHlcIiAvPlxuXHQ8L2NkeC1idXR0b24+XG48L3RlbXBsYXRlPlxuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRDb3B5OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NvcHkgdG8gY2xpcGJvYXJkJyxcblx0XHRcdGphOiAn44Kv44Oq44OD44OX44Oc44O844OJ44Gr44Kz44OU44O8Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+WkjeWItuiHs+WJqui0tOadvycsXG5cdFx0XHQnemgtaGFudCc6ICfmi7fosp3oh7PliarosrznsL8nLFxuXHRcdH0pLFxuXHRcdENvcGllZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDb3BpZWQnLFxuXHRcdFx0amE6ICfjgrPjg5Tjg7zjgYzmiJDlip/jgZfjgb7jgZfjgZ8nLFxuXHRcdFx0J3poLWhhbnMnOiAn5bey5aSN5Yi2Jyxcblx0XHRcdCd6aC1oYW50JzogJ+W3suaLt+iynScsXG5cdFx0fSksXG5cdFx0RmFpbGVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NvcHkgZmFpbGVkJyxcblx0XHRcdGphOiAn44Kz44OU44O844Gr5aSx5pWX44GX44G+44GX44GfJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WkjeWItuWksei0pScsXG5cdFx0XHQnemgtaGFudCc6ICfmi7fosp3lpLHmlZcnLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQgeyBjcmVhdGVWTm9kZSBhcyBfY3JlYXRlVk5vZGUsIHdpdGhDdHggYXMgX3dpdGhDdHgsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVCbG9jayBhcyBfY3JlYXRlQmxvY2sgfSBmcm9tIFwidnVlXCJcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcbiAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jaygkc2V0dXBbXCJDZHhCdXR0b25cIl0sIHtcbiAgICB3ZWlnaHQ6IFwicXVpZXRcIixcbiAgICBcImFyaWEtbGFiZWxcIjogJHNldHVwLmdldE1lc3NhZ2UoJ0NvcHknKVxuICB9LCB7XG4gICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkNkeEljb25cIl0sIHsgaWNvbjogJHNldHVwLmNkeEljb25Db3B5IH0pXG4gICAgXSksXG4gICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgfSwgOCAvKiBQUk9QUyAqLywgW1wiYXJpYS1sYWJlbFwiXSkpXG59IiwgImltcG9ydCBzY3JpcHQgZnJvbSBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcQ29weUNvZGVCbG9ja1xcXFxBcHAudnVlP3R5cGU9c2NyaXB0XCI7aW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcQ29weUNvZGVCbG9ja1xcXFxBcHAudnVlP3R5cGU9dGVtcGxhdGVcIjsgc2NyaXB0LnJlbmRlciA9IHJlbmRlcjtzY3JpcHQuX19maWxlID0gXCJzcmNcXFxcQ29weUNvZGVCbG9ja1xcXFxBcHAudnVlXCI7ZXhwb3J0IGRlZmF1bHQgc2NyaXB0OyIsICJpbXBvcnQge0NsaXBib2FyZH0gZnJvbSAnZXh0LmdhZGdldC5DbGlwYm9hcmQnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbmNvbnN0IGFkZENvcHlMaXN0ZW5lciA9IChwcmU6IEhUTUxQcmVFbGVtZW50LCBjb3B5QnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudCk6IHZvaWQgPT4ge1xuXHRjb25zdCBjbGlwYm9hcmQgPSBuZXcgQ2xpcGJvYXJkKGNvcHlCdXR0b24sIHtcblx0XHR0ZXh0OiAoKTogc3RyaW5nID0+IHtcblx0XHRcdHJldHVybiBwcmUudGV4dENvbnRlbnQgPz8gJyc7XG5cdFx0fSxcblx0fSk7XG5cblx0Y2xpcGJvYXJkLm9uKCdzdWNjZXNzJywgKCk6IHZvaWQgPT4ge1xuXHRcdHRvYXN0aWZ5KFxuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdDb3BpZWQnKSxcblx0XHRcdH0sXG5cdFx0XHQnc3VjY2Vzcydcblx0XHQpO1xuXHR9KTtcblxuXHRjbGlwYm9hcmQub24oJ2Vycm9yJywgKCk6IHZvaWQgPT4ge1xuXHRcdHRvYXN0aWZ5KFxuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdGYWlsZWQnKSxcblx0XHRcdH0sXG5cdFx0XHQnZXJyb3InXG5cdFx0KTtcblx0fSk7XG59O1xuXG5leHBvcnQge2FkZENvcHlMaXN0ZW5lcn07XG4iLCAiaW1wb3J0IHtidXR0b24sIGNvZGVCbG9ja30gZnJvbSAnLi9Db3B5Q29kZUJsb2NrLm1vZHVsZS5sZXNzJztcbmltcG9ydCBBcHAgZnJvbSAnLi4vQXBwLnZ1ZSc7XG5pbXBvcnQge2FkZENvcHlMaXN0ZW5lcn0gZnJvbSAnLi9hZGRDb3B5TGlzdGVuZXInO1xuaW1wb3J0IHtjcmVhdGVBcHB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge3RpcHB5fSBmcm9tICdleHQuZ2FkZ2V0LlRpcHB5JztcblxuY29uc3QgYWRkQnV0dG9uID0gKCRwcmVzOiBKUXVlcnk8SFRNTFByZUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGZvciAoY29uc3QgcHJlIG9mICRwcmVzKSB7XG5cdFx0cHJlLmNsYXNzTGlzdC5hZGQoY29kZUJsb2NrIGFzIHN0cmluZyk7XG5cblx0XHRpZiAocHJlLnF1ZXJ5U2VsZWN0b3IoYC4ke2J1dHRvbn1gKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgd3JhcHBlcjogSFRNTFNwYW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdHdyYXBwZXIuY2xhc3NOYW1lID0gYnV0dG9uIGFzIHN0cmluZztcblx0XHRwcmUuYXBwZW5kKHdyYXBwZXIpO1xuXG5cdFx0Y29uc3QgYXBwID0gY3JlYXRlQXBwKEFwcCk7XG5cdFx0YXBwLm1vdW50KHdyYXBwZXIpO1xuXG5cdFx0Y29uc3QgY29weUJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQgfCBudWxsID0gd3JhcHBlci5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcblx0XHRpZiAoIWNvcHlCdXR0b24pIHtcblx0XHRcdGFwcC51bm1vdW50KCk7XG5cdFx0XHR3cmFwcGVyLnJlbW92ZSgpO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0dGlwcHkoY29weUJ1dHRvbiwge1xuXHRcdFx0YXJyb3c6IHRydWUsXG5cdFx0XHRjb250ZW50OiBnZXRNZXNzYWdlKCdDb3B5JyksXG5cdFx0XHRwbGFjZW1lbnQ6ICdib3R0b20nLFxuXHRcdH0pO1xuXG5cdFx0YWRkQ29weUxpc3RlbmVyKHByZSwgY29weUJ1dHRvbik7XG5cdH1cbn07XG5cbmV4cG9ydCB7YWRkQnV0dG9ufTtcbiIsICJpbXBvcnQge2FkZEJ1dHRvbn0gZnJvbSAnLi9tb2R1bGVzL2FkZEJ1dHRvbic7XG5cbm13Lmhvb2soJ3dpa2lwYWdlLmNvbnRlbnQnKS5hZGQoZnVuY3Rpb24gY29weUNvZGVCbG9jaygkY29udGVudCk6IHZvaWQge1xuXHRjb25zdCAkcHJlczogSlF1ZXJ5PEhUTUxQcmVFbGVtZW50PiA9ICRjb250ZW50LmZpbmQoJ3ByZScpO1xuXHRpZiAoISRwcmVzLmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGFkZEJ1dHRvbigkcHJlcyk7XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ08sSUFBTUEsU0FBUztBQUNmLElBQU1DLFlBQVk7O0FDRHpCLElBQUFDLGVBQWlDQyxRQUFBLGtCQUFBOztBQ0RqQyxJQUFBQyxvQkFBdUJELFFBQUEsaUJBQUE7QUFFdkIsSUFBTUUsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTkMsT0FBQSxHQUFNRixrQkFBQUcsVUFBUztNQUNkQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREMsU0FBQSxHQUFRTixrQkFBQUcsVUFBUztNQUNoQkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RFLFNBQUEsR0FBUVAsa0JBQUFHLFVBQVM7TUFDaEJDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztFQUNGO0FBQ0Q7QUFFQSxJQUFNRyxlQUFlUCxnQkFBZ0I7QUFFckMsSUFBTVEsYUFBZ0RDLFNBQVE7QUFDN0QsU0FBT0YsYUFBYUUsR0FBRyxLQUFLQTtBQUM3Qjs7Ozs7OztBRGJBLFVBQU1DLGNBQWM7TUFDbkJDLE1BQU07TUFDTkMsWUFBWTtJQUNiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBRW5CQSxJQUFBQyxjQUF1SGYsUUFBQSxLQUFBO0FBRWhILFNBQVNnQixPQUFPQyxNQUFNQyxRQUFRQyxRQUFRQyxRQUFRQyxPQUFPQyxVQUFVO0FBQ3BFLFVBQUEsR0FBUVAsWUFBQVEsV0FBVyxJQUFBLEdBQUdSLFlBQUFTLGFBQWFKLE9BQU8sV0FBVyxHQUFHO0lBQ3RESyxRQUFRO0lBQ1IsY0FBY0wsT0FBT1YsV0FBVyxNQUFNO0VBQ3hDLEdBQUc7SUFDRGdCLFVBQUEsR0FBU1gsWUFBQVksU0FBUyxNQUFNLEVBQUEsR0FDdEJaLFlBQUFhLGFBQWFSLE9BQU8sU0FBUyxHQUFHO01BQUVTLE1BQU1ULE9BQU9SO0lBQVksQ0FBQyxDQUFBLENBQzdEO0lBQ0RrQixHQUFHOztFQUNMLEdBQUcsR0FBZSxDQUFDLFlBQVksQ0FBQztBQUNsQzs7QUNacU1DLFlBQU9mLFNBQVNBO0FBQU9lLFlBQU9DLFNBQVM7QUFBOEIsSUFBT0MsZUFBUUY7O0FDQXpSLElBQUFHLHFCQUF3QmxDLFFBQUEsc0JBQUE7QUFFeEIsSUFBQW1DLHFCQUF1Qm5DLFFBQUEscUJBQUE7QUFFdkIsSUFBTW9DLGtCQUFrQkEsQ0FBQ0MsS0FBcUJDLGVBQXdDO0FBQ3JGLFFBQU1DLFlBQVksSUFBSUwsbUJBQUFNLFVBQVVGLFlBQVk7SUFDM0NHLE1BQU1BLE1BQWM7QUFBQSxVQUFBQztBQUNuQixjQUFBQSxtQkFBT0wsSUFBSU0saUJBQUEsUUFBQUQscUJBQUEsU0FBQUEsbUJBQWU7SUFDM0I7RUFDRCxDQUFDO0FBRURILFlBQVVLLEdBQUcsV0FBVyxNQUFZO0FBQ25DLEtBQUEsR0FBQVQsbUJBQUFVLFVBQ0M7TUFDQ0osTUFBTS9CLFdBQVcsUUFBUTtJQUMxQixHQUNBLFNBQ0Q7RUFDRCxDQUFDO0FBRUQ2QixZQUFVSyxHQUFHLFNBQVMsTUFBWTtBQUNqQyxLQUFBLEdBQUFULG1CQUFBVSxVQUNDO01BQ0NKLE1BQU0vQixXQUFXLFFBQVE7SUFDMUIsR0FDQSxPQUNEO0VBQ0QsQ0FBQztBQUNGOztBQ3pCQSxJQUFBb0MsY0FBd0I5QyxRQUFBLEtBQUE7QUFFeEIsSUFBQStDLHFCQUFvQi9DLFFBQUEsa0JBQUE7QUFFcEIsSUFBTWdELFlBQWFDLFdBQXdDO0FBQUEsTUFBQUMsWUFBQUMsMkJBQ3hDRixLQUFBLEdBQUFHO0FBQUEsTUFBQTtBQUFsQixTQUFBRixVQUFBRyxFQUFBLEdBQUEsRUFBQUQsUUFBQUYsVUFBQUksRUFBQSxHQUFBQyxRQUF5QjtBQUFBLFlBQWRsQixNQUFBZSxNQUFBSTtBQUNWbkIsVUFBSW9CLFVBQVVDLElBQUk1RCxTQUFtQjtBQUVyQyxVQUFJdUMsSUFBSXNCLGNBQUEsSUFBQUMsT0FBa0IvRCxNQUFNLENBQUUsR0FBRztBQUNwQztNQUNEO0FBRUEsWUFBTWdFLFVBQTJCQyxTQUFTQyxjQUFjLE1BQU07QUFDOURGLGNBQVFHLFlBQVluRTtBQUNwQndDLFVBQUk0QixPQUFPSixPQUFPO0FBRWxCLFlBQU1LLE9BQUEsR0FBTXBCLFlBQUFxQixXQUFVbEMsWUFBRztBQUN6QmlDLFVBQUlFLE1BQU1QLE9BQU87QUFFakIsWUFBTXZCLGFBQXVDdUIsUUFBUUYsY0FBYyxRQUFRO0FBQzNFLFVBQUksQ0FBQ3JCLFlBQVk7QUFDaEI0QixZQUFJRyxRQUFRO0FBQ1pSLGdCQUFRUyxPQUFPO0FBQ2Y7TUFDRDtBQUVBLE9BQUEsR0FBQXZCLG1CQUFBd0IsT0FBTWpDLFlBQVk7UUFDakJrQyxPQUFPO1FBQ1BDLFNBQVMvRCxXQUFXLE1BQU07UUFDMUJnRSxXQUFXO01BQ1osQ0FBQztBQUVEdEMsc0JBQWdCQyxLQUFLQyxVQUFVO0lBQ2hDO0VBQUEsU0FBQXFDLEtBQUE7QUFBQXpCLGNBQUEwQixFQUFBRCxHQUFBO0VBQUEsVUFBQTtBQUFBekIsY0FBQTJCLEVBQUE7RUFBQTtBQUNEOztBQ25DQUMsR0FBR0MsS0FBSyxrQkFBa0IsRUFBRXJCLElBQUksU0FBU3NCLGNBQWNDLFVBQWdCO0FBQ3RFLFFBQU1oQyxRQUFnQ2dDLFNBQVNDLEtBQUssS0FBSztBQUN6RCxNQUFJLENBQUNqQyxNQUFNa0MsUUFBUTtBQUNsQjtFQUNEO0FBRUFuQyxZQUFVQyxLQUFLO0FBQ2hCLENBQUM7IiwKICAibmFtZXMiOiBbImJ1dHRvbiIsICJjb2RlQmxvY2siLCAiaW1wb3J0X2NvZGV4IiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkNvcHkiLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiQ29waWVkIiwgIkZhaWxlZCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiY2R4SWNvbkNvcHkiLCAicGF0aCIsICJzaG91bGRGbGlwIiwgImltcG9ydF92dWUyIiwgInJlbmRlciIsICJfY3R4IiwgIl9jYWNoZSIsICIkcHJvcHMiLCAiJHNldHVwIiwgIiRkYXRhIiwgIiRvcHRpb25zIiwgIm9wZW5CbG9jayIsICJjcmVhdGVCbG9jayIsICJ3ZWlnaHQiLCAiZGVmYXVsdCIsICJ3aXRoQ3R4IiwgImNyZWF0ZVZOb2RlIiwgImljb24iLCAiXyIsICJBcHBfZGVmYXVsdCIsICJfX2ZpbGUiLCAiQXBwX2RlZmF1bHQyIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiYWRkQ29weUxpc3RlbmVyIiwgInByZSIsICJjb3B5QnV0dG9uIiwgImNsaXBib2FyZCIsICJDbGlwYm9hcmQiLCAidGV4dCIsICJfcHJlJHRleHRDb250ZW50IiwgInRleHRDb250ZW50IiwgIm9uIiwgInRvYXN0aWZ5IiwgImltcG9ydF92dWUzIiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJhZGRCdXR0b24iLCAiJHByZXMiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgInZhbHVlIiwgImNsYXNzTGlzdCIsICJhZGQiLCAicXVlcnlTZWxlY3RvciIsICJjb25jYXQiLCAid3JhcHBlciIsICJkb2N1bWVudCIsICJjcmVhdGVFbGVtZW50IiwgImNsYXNzTmFtZSIsICJhcHBlbmQiLCAiYXBwIiwgImNyZWF0ZUFwcCIsICJtb3VudCIsICJ1bm1vdW50IiwgInJlbW92ZSIsICJ0aXBweSIsICJhcnJvdyIsICJjb250ZW50IiwgInBsYWNlbWVudCIsICJlcnIiLCAiZSIsICJmIiwgIm13IiwgImhvb2siLCAiY29weUNvZGVCbG9jayIsICIkY29udGVudCIsICJmaW5kIiwgImxlbmd0aCJdCn0K

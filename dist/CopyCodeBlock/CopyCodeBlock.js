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
 * Copyright Copyright (c) 2011-2022 Wikimedia Design & OOUI team and other contributors.
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
    const copyIcon = {
      path: "M13 19H1V7h6V1h12v12h-6zm-6-6V9H3v8h8v-4zm2-2h8V3H9z",
      shouldFlip: true
    };
    const __returned__ = {
      copyIcon,
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
      icon: $setup.copyIcon
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0NvcHlDb2RlQmxvY2svbW9kdWxlcy9Db3B5Q29kZUJsb2NrLm1vZHVsZS5sZXNzIiwgImRpc3QvQ29weUNvZGVCbG9jay9zcmMvQ29weUNvZGVCbG9jay9BcHAudnVlIiwgInNyYy9Db3B5Q29kZUJsb2NrL21vZHVsZXMvaTE4bi50cyIsICJzZmMtdGVtcGxhdGU6RDpcXEdpdFJlcG9zaXRvcnlcXFFpdXdlbkdhZGdldHNcXHNyY1xcQ29weUNvZGVCbG9ja1xcQXBwLnZ1ZT90eXBlPXRlbXBsYXRlIiwgInNyYy9Db3B5Q29kZUJsb2NrL0FwcC52dWUiLCAic3JjL0NvcHlDb2RlQmxvY2svbW9kdWxlcy9hZGRDb3B5TGlzdGVuZXIudHMiLCAic3JjL0NvcHlDb2RlQmxvY2svbW9kdWxlcy9hZGRCdXR0b24udHMiLCAic3JjL0NvcHlDb2RlQmxvY2svQ29weUNvZGVCbG9jay50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IFwiZXNidWlsZC1jc3MtbW9kdWxlcy1wbHVnaW4tbnMtY3NzOnNyYy9Db3B5Q29kZUJsb2NrL21vZHVsZXMvQ29weUNvZGVCbG9jay5tb2R1bGUubGVzc1wiO1xuZXhwb3J0IGNvbnN0IGJ1dHRvbiA9IFwiQ29weUNvZGVCbG9jay1tb2R1bGVfX2J1dHRvbl83NGkxRGFfXzQxMDBcIjtcbmV4cG9ydCBjb25zdCBjb2RlQmxvY2sgPSBcIkNvcHlDb2RlQmxvY2stbW9kdWxlX19jb2RlQmxvY2tfNzRpMURhX180MTAwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgXCJidXR0b25cIjogYnV0dG9uLFxuICBcImNvZGVCbG9ja1wiOiBjb2RlQmxvY2tcbn07XG4gICAgICAiLCAiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7Q2R4QnV0dG9uLCBDZHhJY29ufSBmcm9tICdAd2lraW1lZGlhL2NvZGV4JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9tb2R1bGVzL2kxOG4nO1xuXG4vLyBUaGUgXCJjb3B5XCIgaWNvbiBmcm9tIEB3aWtpbWVkaWEvY29kZXgtaWNvbnMsIGlubGluZWQgYmVjYXVzZSBNZWRpYVdpa2kgZG9lc1xuLy8gbm90IHByb3ZpZGUgYSBSZXNvdXJjZUxvYWRlciBtb2R1bGUgZm9yIEB3aWtpbWVkaWEvY29kZXgtaWNvbnMuXG5jb25zdCBjb3B5SWNvbiA9IHtcblx0cGF0aDogJ00xMyAxOUgxVjdoNlYxaDEydjEyaC02em0tNi02VjlIM3Y4aDh2LTR6bTItMmg4VjNIOXonLFxuXHRzaG91bGRGbGlwOiB0cnVlLFxufTtcbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG5cdDxjZHgtYnV0dG9uIHdlaWdodD1cInF1aWV0XCIgOmFyaWEtbGFiZWw9XCJnZXRNZXNzYWdlKCdDb3B5JylcIj5cblx0XHQ8Y2R4LWljb24gOmljb249XCJjb3B5SWNvblwiIC8+XG5cdDwvY2R4LWJ1dHRvbj5cbjwvdGVtcGxhdGU+XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdENvcHk6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ29weSB0byBjbGlwYm9hcmQnLFxuXHRcdFx0amE6ICfjgq/jg6rjg4Pjg5fjg5zjg7zjg4njgavjgrPjg5Tjg7wnLFxuXHRcdFx0J3poLWhhbnMnOiAn5aSN5Yi26Iez5Ymq6LS05p2/Jyxcblx0XHRcdCd6aC1oYW50JzogJ+aLt+iyneiHs+WJquiyvOewvycsXG5cdFx0fSksXG5cdFx0Q29waWVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NvcGllZCcsXG5cdFx0XHRqYTogJ+OCs+ODlOODvOOBjOaIkOWKn+OBl+OBvuOBl+OBnycsXG5cdFx0XHQnemgtaGFucyc6ICflt7LlpI3liLYnLFxuXHRcdFx0J3poLWhhbnQnOiAn5bey5ou36LKdJyxcblx0XHR9KSxcblx0XHRGYWlsZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ29weSBmYWlsZWQnLFxuXHRcdFx0amE6ICfjgrPjg5Tjg7zjgavlpLHmlZfjgZfjgb7jgZfjgZ8nLFxuXHRcdFx0J3poLWhhbnMnOiAn5aSN5Yi25aSx6LSlJyxcblx0XHRcdCd6aC1oYW50JzogJ+aLt+iyneWkseaVlycsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7IGNyZWF0ZVZOb2RlIGFzIF9jcmVhdGVWTm9kZSwgd2l0aEN0eCBhcyBfd2l0aEN0eCwgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUJsb2NrIGFzIF9jcmVhdGVCbG9jayB9IGZyb20gXCJ2dWVcIlxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSwgJHByb3BzLCAkc2V0dXAsICRkYXRhLCAkb3B0aW9ucykge1xuICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKCRzZXR1cFtcIkNkeEJ1dHRvblwiXSwge1xuICAgIHdlaWdodDogXCJxdWlldFwiLFxuICAgIFwiYXJpYS1sYWJlbFwiOiAkc2V0dXAuZ2V0TWVzc2FnZSgnQ29weScpXG4gIH0sIHtcbiAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiQ2R4SWNvblwiXSwgeyBpY29uOiAkc2V0dXAuY29weUljb24gfSlcbiAgICBdKSxcbiAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICB9LCA4IC8qIFBST1BTICovLCBbXCJhcmlhLWxhYmVsXCJdKSlcbn0iLCAiaW1wb3J0IHNjcmlwdCBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxDb3B5Q29kZUJsb2NrXFxcXEFwcC52dWU/dHlwZT1zY3JpcHRcIjtpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxDb3B5Q29kZUJsb2NrXFxcXEFwcC52dWU/dHlwZT10ZW1wbGF0ZVwiOyBzY3JpcHQucmVuZGVyID0gcmVuZGVyO3NjcmlwdC5fX2ZpbGUgPSBcInNyY1xcXFxDb3B5Q29kZUJsb2NrXFxcXEFwcC52dWVcIjtleHBvcnQgZGVmYXVsdCBzY3JpcHQ7IiwgImltcG9ydCB7Q2xpcGJvYXJkfSBmcm9tICdleHQuZ2FkZ2V0LkNsaXBib2FyZCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxuY29uc3QgYWRkQ29weUxpc3RlbmVyID0gKHByZTogSFRNTFByZUVsZW1lbnQsIGNvcHlCdXR0b246IEhUTUxCdXR0b25FbGVtZW50KTogdm9pZCA9PiB7XG5cdGNvbnN0IGNsaXBib2FyZCA9IG5ldyBDbGlwYm9hcmQoY29weUJ1dHRvbiwge1xuXHRcdHRleHQ6ICgpOiBzdHJpbmcgPT4ge1xuXHRcdFx0cmV0dXJuIHByZS50ZXh0Q29udGVudCA/PyAnJztcblx0XHR9LFxuXHR9KTtcblxuXHRjbGlwYm9hcmQub24oJ3N1Y2Nlc3MnLCAoKTogdm9pZCA9PiB7XG5cdFx0dG9hc3RpZnkoXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ0NvcGllZCcpLFxuXHRcdFx0fSxcblx0XHRcdCdzdWNjZXNzJ1xuXHRcdCk7XG5cdH0pO1xuXG5cdGNsaXBib2FyZC5vbignZXJyb3InLCAoKTogdm9pZCA9PiB7XG5cdFx0dG9hc3RpZnkoXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ0ZhaWxlZCcpLFxuXHRcdFx0fSxcblx0XHRcdCdlcnJvcidcblx0XHQpO1xuXHR9KTtcbn07XG5cbmV4cG9ydCB7YWRkQ29weUxpc3RlbmVyfTtcbiIsICJpbXBvcnQge2J1dHRvbiwgY29kZUJsb2NrfSBmcm9tICcuL0NvcHlDb2RlQmxvY2subW9kdWxlLmxlc3MnO1xuaW1wb3J0IEFwcCBmcm9tICcuLi9BcHAudnVlJztcbmltcG9ydCB7YWRkQ29weUxpc3RlbmVyfSBmcm9tICcuL2FkZENvcHlMaXN0ZW5lcic7XG5pbXBvcnQge2NyZWF0ZUFwcH0gZnJvbSAndnVlJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7dGlwcHl9IGZyb20gJ2V4dC5nYWRnZXQuVGlwcHknO1xuXG5jb25zdCBhZGRCdXR0b24gPSAoJHByZXM6IEpRdWVyeTxIVE1MUHJlRWxlbWVudD4pOiB2b2lkID0+IHtcblx0Zm9yIChjb25zdCBwcmUgb2YgJHByZXMpIHtcblx0XHRwcmUuY2xhc3NMaXN0LmFkZChjb2RlQmxvY2sgYXMgc3RyaW5nKTtcblxuXHRcdGlmIChwcmUucXVlcnlTZWxlY3RvcihgLiR7YnV0dG9ufWApKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCB3cmFwcGVyOiBIVE1MU3BhbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0d3JhcHBlci5jbGFzc05hbWUgPSBidXR0b24gYXMgc3RyaW5nO1xuXHRcdHByZS5hcHBlbmQod3JhcHBlcik7XG5cblx0XHRjb25zdCBhcHAgPSBjcmVhdGVBcHAoQXBwKTtcblx0XHRhcHAubW91bnQod3JhcHBlcik7XG5cblx0XHRjb25zdCBjb3B5QnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudCB8IG51bGwgPSB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xuXHRcdGlmICghY29weUJ1dHRvbikge1xuXHRcdFx0YXBwLnVubW91bnQoKTtcblx0XHRcdHdyYXBwZXIucmVtb3ZlKCk7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHR0aXBweShjb3B5QnV0dG9uLCB7XG5cdFx0XHRhcnJvdzogdHJ1ZSxcblx0XHRcdGNvbnRlbnQ6IGdldE1lc3NhZ2UoJ0NvcHknKSxcblx0XHRcdHBsYWNlbWVudDogJ2JvdHRvbScsXG5cdFx0fSk7XG5cblx0XHRhZGRDb3B5TGlzdGVuZXIocHJlLCBjb3B5QnV0dG9uKTtcblx0fVxufTtcblxuZXhwb3J0IHthZGRCdXR0b259O1xuIiwgImltcG9ydCB7YWRkQnV0dG9ufSBmcm9tICcuL21vZHVsZXMvYWRkQnV0dG9uJztcblxubXcuaG9vaygnd2lraXBhZ2UuY29udGVudCcpLmFkZChmdW5jdGlvbiBjb3B5Q29kZUJsb2NrKCRjb250ZW50KTogdm9pZCB7XG5cdGNvbnN0ICRwcmVzOiBKUXVlcnk8SFRNTFByZUVsZW1lbnQ+ID0gJGNvbnRlbnQuZmluZCgncHJlJyk7XG5cdGlmICghJHByZXMubGVuZ3RoKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0YWRkQnV0dG9uKCRwcmVzKTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTyxJQUFNQSxTQUFTO0FBQ2YsSUFBTUMsWUFBWTs7QUNEekIsSUFBQUMsZUFBaUNDLFFBQUEsa0JBQUE7O0FDRGpDLElBQUFDLG9CQUF1QkQsUUFBQSxpQkFBQTtBQUV2QixJQUFNRSxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOQyxPQUFBLEdBQU1GLGtCQUFBRyxVQUFTO01BQ2RDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEQyxTQUFBLEdBQVFOLGtCQUFBRyxVQUFTO01BQ2hCQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREUsU0FBQSxHQUFRUCxrQkFBQUcsVUFBUztNQUNoQkMs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cUMsS0FBQTtBQUFBekIsY0FBQTBCLEVBQUFELEdBQUE7RUFBQSxVQUFBO0FBQUF6QixjQUFBMkIsRUFBQTtFQUFBO0FBQ0Q7O0FDbkNBQyxHQUFHQyxLQUFLLGtCQUFrQixFQUFFckIsSUFBSSxTQUFTc0IsY0FBY0MsVUFBZ0I7QUFDdEUsUUFBTWhDLFFBQWdDZ0MsU0FBU0MsS0FBSyxLQUFLO0FBQ3pELE1BQUksQ0FBQ2pDLE1BQU1rQyxRQUFRO0FBQ2xCO0VBQ0Q7QUFFQW5DLFlBQVVDLEtBQUs7QUFDaEIsQ0FBQzsiLAogICJuYW1lcyI6IFsiYnV0dG9uIiwgImNvZGVCbG9jayIsICJpbXBvcnRfY29kZXgiLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAiQ29weSIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJDb3BpZWQiLCAiRmFpbGVkIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJjb3B5SWNvbiIsICJwYXRoIiwgInNob3VsZEZsaXAiLCAiaW1wb3J0X3Z1ZTIiLCAicmVuZGVyIiwgIl9jdHgiLCAiX2NhY2hlIiwgIiRwcm9wcyIsICIkc2V0dXAiLCAiJGRhdGEiLCAiJG9wdGlvbnMiLCAib3BlbkJsb2NrIiwgImNyZWF0ZUJsb2NrIiwgIndlaWdodCIsICJkZWZhdWx0IiwgIndpdGhDdHgiLCAiY3JlYXRlVk5vZGUiLCAiaWNvbiIsICJfIiwgIkFwcF9kZWZhdWx0IiwgIl9fZmlsZSIsICJBcHBfZGVmYXVsdDIiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJhZGRDb3B5TGlzdGVuZXIiLCAicHJlIiwgImNvcHlCdXR0b24iLCAiY2xpcGJvYXJkIiwgIkNsaXBib2FyZCIsICJ0ZXh0IiwgIl9wcmUkdGV4dENvbnRlbnQiLCAidGV4dENvbnRlbnQiLCAib24iLCAidG9hc3RpZnkiLCAiaW1wb3J0X3Z1ZTMiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgImFkZEJ1dHRvbiIsICIkcHJlcyIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAidmFsdWUiLCAiY2xhc3NMaXN0IiwgImFkZCIsICJxdWVyeVNlbGVjdG9yIiwgImNvbmNhdCIsICJ3cmFwcGVyIiwgImRvY3VtZW50IiwgImNyZWF0ZUVsZW1lbnQiLCAiY2xhc3NOYW1lIiwgImFwcGVuZCIsICJhcHAiLCAiY3JlYXRlQXBwIiwgIm1vdW50IiwgInVubW91bnQiLCAicmVtb3ZlIiwgInRpcHB5IiwgImFycm93IiwgImNvbnRlbnQiLCAicGxhY2VtZW50IiwgImVyciIsICJlIiwgImYiLCAibXciLCAiaG9vayIsICJjb3B5Q29kZUJsb2NrIiwgIiRjb250ZW50IiwgImZpbmQiLCAibGVuZ3RoIl0KfQo=

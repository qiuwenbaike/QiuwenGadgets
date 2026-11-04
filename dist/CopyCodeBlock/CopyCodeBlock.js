/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @base {@link https://en.wikipedia.org/wiki/User:Nardog/CopyCodeBlock.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/CopyCodeBlock}
 * @author Nardog (main author); 安忆 <i@anyi.in> (copyText.ts)
 * @license GPL-3.0-or-later {@link https://www.qiuwenbaike.cn/wiki/H:GPL-3.0}
 */

/**
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
//! src/CopyCodeBlock/modules/copyText.ts
var copyText = /* @__PURE__ */ (function() {
  var _ref = _asyncToGenerator(function* (text) {
    const copyWithExecCommand = () => {
      const helper = document.createElement("textarea");
      helper.value = text;
      helper.setAttribute("readonly", "true");
      helper.style.position = "fixed";
      helper.style.top = "-9999px";
      helper.style.left = "-9999px";
      document.body.append(helper);
      try {
        helper.select();
        if (!document.execCommand("copy")) {
          throw new Error('document.execCommand("copy") failed');
        }
      } finally {
        helper.remove();
      }
    };
    const copy = /* @__PURE__ */ (function() {
      var _ref2 = _asyncToGenerator(function* () {
        if (navigator.clipboard && window.isSecureContext) {
          try {
            yield navigator.clipboard.writeText(text);
            return;
          } catch (error) {
            try {
              copyWithExecCommand();
              return;
            } catch (fallbackError) {
              console.error("[CopyCodeBlock] Clipboard API and fallback copy failed:", error, fallbackError);
              throw fallbackError;
            }
          }
        }
        copyWithExecCommand();
      });
      return function copy2() {
        return _ref2.apply(this, arguments);
      };
    })();
    try {
      yield copy();
      void mw.notify(getMessage("Copied"), {
        type: "success",
        tag: "CopyCodeBlock"
      });
    } catch (error) {
      console.error("[CopyCodeBlock] Failed to copy text:", error);
      void mw.notify(getMessage("Failed"), {
        type: "error",
        tag: "CopyCodeBlock"
      });
    }
  });
  return function copyText2(_x) {
    return _ref.apply(this, arguments);
  };
})();
var App_default = /* @__PURE__ */ (0, import_vue.defineComponent)({
  __name: "App",
  props: {
    text: {
      type: String,
      required: true
    }
  },
  setup(__props, {
    expose: __expose
  }) {
    __expose();
    const props = __props;
    const cdxIconCopy = {
      path: "M13 19H1V7h6V1h12v12h-6zm-6-6V9H3v8h8v-4zm2-2h8V3H9z",
      shouldFlip: true
    };
    const __returned__ = {
      props,
      cdxIconCopy,
      get CdxButton() {
        return import_codex.CdxButton;
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
var import_vue2 = require("vue");
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue2.openBlock)(), (0, import_vue2.createBlock)($setup["CdxButton"], {
    weight: "quiet",
    "aria-label": $setup.getMessage("Copy"),
    onClick: _cache[0] || (_cache[0] = ($event) => $setup.copyText($setup.props.text))
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
App_default.__scopeId = "data-v-3c962e51";
var App_default2 = App_default;
//! src/CopyCodeBlock/modules/addButton.ts
var import_vue3 = require("vue");
var import_ext_gadget2 = require("ext.gadget.Tippy");
var addButton = ($pres) => {
  var _iterator = _createForOfIteratorHelper($pres), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var _pre$textContent;
      const pre = _step.value;
      pre.classList.add(codeBlock);
      if (pre.querySelector(".".concat(button))) {
        continue;
      }
      const wrapper = document.createElement("span");
      wrapper.className = button;
      pre.append(wrapper);
      const app = (0, import_vue3.createApp)(App_default2, {
        text: (_pre$textContent = pre.textContent) !== null && _pre$textContent !== void 0 ? _pre$textContent : ""
      });
      app.mount(wrapper);
      (0, import_ext_gadget2.tippy)(wrapper, {
        arrow: true,
        content: getMessage("Copy"),
        placement: "bottom"
      });
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0NvcHlDb2RlQmxvY2svbW9kdWxlcy9Db3B5Q29kZUJsb2NrLm1vZHVsZS5sZXNzIiwgImRpc3QvQ29weUNvZGVCbG9jay9zcmMvQ29weUNvZGVCbG9jay9BcHAudnVlIiwgInNyYy9Db3B5Q29kZUJsb2NrL21vZHVsZXMvaTE4bi50cyIsICJzcmMvQ29weUNvZGVCbG9jay9tb2R1bGVzL2NvcHlUZXh0LnRzIiwgInNmYy10ZW1wbGF0ZTpEOlxcR2l0UmVwb3NpdG9yeVxcUWl1d2VuR2FkZ2V0c1xcc3JjXFxDb3B5Q29kZUJsb2NrXFxBcHAudnVlP3R5cGU9dGVtcGxhdGUiLCAic3JjL0NvcHlDb2RlQmxvY2svQXBwLnZ1ZSIsICJzcmMvQ29weUNvZGVCbG9jay9tb2R1bGVzL2FkZEJ1dHRvbi50cyIsICJzcmMvQ29weUNvZGVCbG9jay9Db3B5Q29kZUJsb2NrLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgXCJlc2J1aWxkLWNzcy1tb2R1bGVzLXBsdWdpbi1ucy1jc3M6c3JjL0NvcHlDb2RlQmxvY2svbW9kdWxlcy9Db3B5Q29kZUJsb2NrLm1vZHVsZS5sZXNzXCI7XG5leHBvcnQgY29uc3QgYnV0dG9uID0gXCJDb3B5Q29kZUJsb2NrLW1vZHVsZV9fYnV0dG9uXzc0aTFEYV9fNDEwMFwiO1xuZXhwb3J0IGNvbnN0IGNvZGVCbG9jayA9IFwiQ29weUNvZGVCbG9jay1tb2R1bGVfX2NvZGVCbG9ja183NGkxRGFfXzQxMDBcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcImJ1dHRvblwiOiBidXR0b24sXG4gIFwiY29kZUJsb2NrXCI6IGNvZGVCbG9ja1xufTtcbiAgICAgICIsICI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtDZHhCdXR0b24sIENkeEljb259IGZyb20gJ0B3aWtpbWVkaWEvY29kZXgnO1xuaW1wb3J0IHtjb3B5VGV4dH0gZnJvbSAnLi9tb2R1bGVzL2NvcHlUZXh0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9tb2R1bGVzL2kxOG4nO1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcblx0dGV4dDogc3RyaW5nO1xufT4oKTtcblxuLyoqXG4gKiBTVkcgcGF0aHMgaW5saW5lZCBmcm9tIGBAd2lraW1lZGlhL2NvZGV4LWljb25zYCB2Mi43LjAuXG4gKlxuICogTWVkaWFXaWtpIGRvZXMgbm90IHNoaXAgYSBSZXNvdXJjZUxvYWRlciBtb2R1bGUgdGhhdCBidW5kbGVzXG4gKiBgQHdpa2ltZWRpYS9jb2RleC1pY29uc2AgKHNlZSBodHRwczovL3d3dy5tZWRpYXdpa2kub3JnL3dpa2kvQ29kZXgpLFxuICogc28gdGhlIHBhdGggZGF0YSBpcyBjb3BpZWQgaGVyZSB2ZXJiYXRpbSBhbmQgcmVuZGVyZWQgYXMgaW5saW5lIFNWR1xuICogdG8ga2VlcCB0aGUgZ2FkZ2V0IHNlbGYtY29udGFpbmVkIHdoaWxlIHN0aWxsIHNvdXJjaW5nIHRoZSBpY29uc1xuICogZnJvbSBgQHdpa2ltZWRpYS9jb2RleC1pY29uc2AuXG4gKlxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9kb2Mud2lraW1lZGlhLm9yZy9jb2RleC9sYXRlc3QvaWNvbnMvfVxuICovXG5cbi8qKiBQYXRoIGZvciBgY2R4SWNvbkNvcHlgLiAqL1xuY29uc3QgY2R4SWNvbkNvcHkgPSB7XG5cdHBhdGg6ICdNMTMgMTlIMVY3aDZWMWgxMnYxMmgtNnptLTYtNlY5SDN2OGg4di00em0yLTJoOFYzSDl6Jyxcblx0c2hvdWxkRmxpcDogdHJ1ZSxcbn07XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuXHQ8Y2R4LWJ1dHRvbiB3ZWlnaHQ9XCJxdWlldFwiIDphcmlhLWxhYmVsPVwiZ2V0TWVzc2FnZSgnQ29weScpXCIgQGNsaWNrPVwiY29weVRleHQocHJvcHMudGV4dClcIj5cblx0XHQ8Y2R4LWljb24gOmljb249XCJjZHhJY29uQ29weVwiIC8+XG5cdDwvY2R4LWJ1dHRvbj5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cImxlc3NcIj5cbi5jZHgtYnV0dG9uIHtcblx0Jjpob3ZlciB7XG5cdFx0LmNkeC1pY29uIDpkZWVwKHN2Zykge1xuXHRcdFx0ZmlsbDogIzM2Yztcblx0XHR9XG5cdH1cbn1cbjwvc3R5bGU+XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdENvcHk6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ29weSB0byBjbGlwYm9hcmQnLFxuXHRcdFx0amE6ICfjgq/jg6rjg4Pjg5fjg5zjg7zjg4njgavjgrPjg5Tjg7wnLFxuXHRcdFx0J3poLWhhbnMnOiAn5aSN5Yi26Iez5Ymq6LS05p2/Jyxcblx0XHRcdCd6aC1oYW50JzogJ+aLt+iyneiHs+WJquiyvOewvycsXG5cdFx0fSksXG5cdFx0Q29waWVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NvcGllZCcsXG5cdFx0XHRqYTogJ+OCs+ODlOODvOOBjOaIkOWKn+OBl+OBvuOBl+OBnycsXG5cdFx0XHQnemgtaGFucyc6ICflt7LlpI3liLYnLFxuXHRcdFx0J3poLWhhbnQnOiAn5bey5ou36LKdJyxcblx0XHR9KSxcblx0XHRGYWlsZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ29weSBmYWlsZWQnLFxuXHRcdFx0amE6ICfjgrPjg5Tjg7zjgavlpLHmlZfjgZfjgb7jgZfjgZ8nLFxuXHRcdFx0J3poLWhhbnMnOiAn5aSN5Yi25aSx6LSlJyxcblx0XHRcdCd6aC1oYW50JzogJ+aLt+iyneWkseaVlycsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgY29weVRleHQgPSBhc3luYyAodGV4dDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGNvbnN0IGNvcHlXaXRoRXhlY0NvbW1hbmQgPSAoKTogdm9pZCA9PiB7XG5cdFx0Y29uc3QgaGVscGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcblx0XHRoZWxwZXIudmFsdWUgPSB0ZXh0O1xuXHRcdGhlbHBlci5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJ3RydWUnKTtcblx0XHRoZWxwZXIuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuXHRcdGhlbHBlci5zdHlsZS50b3AgPSAnLTk5OTlweCc7XG5cdFx0aGVscGVyLnN0eWxlLmxlZnQgPSAnLTk5OTlweCc7XG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmQoaGVscGVyKTtcblx0XHR0cnkge1xuXHRcdFx0aGVscGVyLnNlbGVjdCgpO1xuXHRcdFx0aWYgKCFkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpIGZhaWxlZCcpO1xuXHRcdFx0fVxuXHRcdH0gZmluYWxseSB7XG5cdFx0XHRoZWxwZXIucmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IGNvcHkgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdFx0aWYgKG5hdmlnYXRvci5jbGlwYm9hcmQgJiYgd2luZG93LmlzU2VjdXJlQ29udGV4dCkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0YXdhaXQgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodGV4dCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Y29weVdpdGhFeGVjQ29tbWFuZCgpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fSBjYXRjaCAoZmFsbGJhY2tFcnJvcikge1xuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ1tDb3B5Q29kZUJsb2NrXSBDbGlwYm9hcmQgQVBJIGFuZCBmYWxsYmFjayBjb3B5IGZhaWxlZDonLCBlcnJvciwgZmFsbGJhY2tFcnJvcik7XG5cdFx0XHRcdFx0dGhyb3cgZmFsbGJhY2tFcnJvcjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNvcHlXaXRoRXhlY0NvbW1hbmQoKTtcblx0fTtcblxuXHR0cnkge1xuXHRcdGF3YWl0IGNvcHkoKTtcblx0XHR2b2lkIG13Lm5vdGlmeShnZXRNZXNzYWdlKCdDb3BpZWQnKSwge1xuXHRcdFx0dHlwZTogJ3N1Y2Nlc3MnLFxuXHRcdFx0dGFnOiAnQ29weUNvZGVCbG9jaycsXG5cdFx0fSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5lcnJvcignW0NvcHlDb2RlQmxvY2tdIEZhaWxlZCB0byBjb3B5IHRleHQ6JywgZXJyb3IpO1xuXHRcdHZvaWQgbXcubm90aWZ5KGdldE1lc3NhZ2UoJ0ZhaWxlZCcpLCB7XG5cdFx0XHR0eXBlOiAnZXJyb3InLFxuXHRcdFx0dGFnOiAnQ29weUNvZGVCbG9jaycsXG5cdFx0fSk7XG5cdH1cbn07XG5cbmV4cG9ydCB7Y29weVRleHR9O1xuIiwgImltcG9ydCB7IGNyZWF0ZVZOb2RlIGFzIF9jcmVhdGVWTm9kZSwgd2l0aEN0eCBhcyBfd2l0aEN0eCwgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUJsb2NrIGFzIF9jcmVhdGVCbG9jayB9IGZyb20gXCJ2dWVcIlxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSwgJHByb3BzLCAkc2V0dXAsICRkYXRhLCAkb3B0aW9ucykge1xuICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKCRzZXR1cFtcIkNkeEJ1dHRvblwiXSwge1xuICAgIHdlaWdodDogXCJxdWlldFwiLFxuICAgIFwiYXJpYS1sYWJlbFwiOiAkc2V0dXAuZ2V0TWVzc2FnZSgnQ29weScpLFxuICAgIG9uQ2xpY2s6IF9jYWNoZVswXSB8fCAoX2NhY2hlWzBdID0gJGV2ZW50ID0+ICgkc2V0dXAuY29weVRleHQoJHNldHVwLnByb3BzLnRleHQpKSlcbiAgfSwge1xuICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDZHhJY29uXCJdLCB7IGljb246ICRzZXR1cC5jZHhJY29uQ29weSB9KVxuICAgIF0pLFxuICAgIF86IDEgLyogU1RBQkxFICovXG4gIH0sIDggLyogUFJPUFMgKi8sIFtcImFyaWEtbGFiZWxcIl0pKVxufSIsICJpbXBvcnQgc2NyaXB0IGZyb20gXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXENvcHlDb2RlQmxvY2tcXFxcQXBwLnZ1ZT90eXBlPXNjcmlwdFwiO2ltcG9ydCBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcQ29weUNvZGVCbG9ja1xcXFxBcHAudnVlP3R5cGU9c3R5bGUmaW5kZXg9MFwiO2ltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXENvcHlDb2RlQmxvY2tcXFxcQXBwLnZ1ZT90eXBlPXRlbXBsYXRlXCI7IHNjcmlwdC5yZW5kZXIgPSByZW5kZXI7c2NyaXB0Ll9fZmlsZSA9IFwic3JjXFxcXENvcHlDb2RlQmxvY2tcXFxcQXBwLnZ1ZVwiO3NjcmlwdC5fX3Njb3BlSWQgPSBcImRhdGEtdi0zYzk2MmU1MVwiO2V4cG9ydCBkZWZhdWx0IHNjcmlwdDsiLCAiaW1wb3J0IHtidXR0b24sIGNvZGVCbG9ja30gZnJvbSAnLi9Db3B5Q29kZUJsb2NrLm1vZHVsZS5sZXNzJztcbmltcG9ydCBBcHAgZnJvbSAnLi4vQXBwLnZ1ZSc7XG5pbXBvcnQge2NyZWF0ZUFwcH0gZnJvbSAndnVlJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuLnRzJztcbmltcG9ydCB7dGlwcHl9IGZyb20gJ2V4dC5nYWRnZXQuVGlwcHknO1xuXG5jb25zdCBhZGRCdXR0b24gPSAoJHByZXM6IEpRdWVyeTxIVE1MUHJlRWxlbWVudD4pOiB2b2lkID0+IHtcblx0Zm9yIChjb25zdCBwcmUgb2YgJHByZXMpIHtcblx0XHRwcmUuY2xhc3NMaXN0LmFkZChjb2RlQmxvY2sgYXMgc3RyaW5nKTtcblxuXHRcdGlmIChwcmUucXVlcnlTZWxlY3RvcihgLiR7YnV0dG9ufWApKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCB3cmFwcGVyOiBIVE1MU3BhbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0d3JhcHBlci5jbGFzc05hbWUgPSBidXR0b24gYXMgc3RyaW5nO1xuXHRcdHByZS5hcHBlbmQod3JhcHBlcik7XG5cblx0XHRjb25zdCBhcHAgPSBjcmVhdGVBcHAoQXBwLCB7XG5cdFx0XHR0ZXh0OiBwcmUudGV4dENvbnRlbnQgPz8gJycsXG5cdFx0fSk7XG5cdFx0YXBwLm1vdW50KHdyYXBwZXIpO1xuXG5cdFx0dGlwcHkod3JhcHBlciwge1xuXHRcdFx0YXJyb3c6IHRydWUsXG5cdFx0XHRjb250ZW50OiBnZXRNZXNzYWdlKCdDb3B5JyksXG5cdFx0XHRwbGFjZW1lbnQ6ICdib3R0b20nLFxuXHRcdH0pO1xuXHR9XG59O1xuXG5leHBvcnQge2FkZEJ1dHRvbn07XG4iLCAiaW1wb3J0IHthZGRCdXR0b259IGZyb20gJy4vbW9kdWxlcy9hZGRCdXR0b24nO1xuXG5tdy5ob29rKCd3aWtpcGFnZS5jb250ZW50JykuYWRkKGZ1bmN0aW9uIGNvcHlDb2RlQmxvY2soJGNvbnRlbnQpOiB2b2lkIHtcblx0Y29uc3QgJHByZXM6IEpRdWVyeTxIVE1MUHJlRWxlbWVudD4gPSAkY29udGVudC5maW5kKCdwcmUnKTtcblx0aWYgKCEkcHJlcy5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRhZGRCdXR0b24oJHByZXMpO1xufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTyxJQUFNQSxTQUFTO0FBQ2YsSUFBTUMsWUFBWTs7QUNEekIsSUFBQUMsZUFBaUNDLFFBQUEsa0JBQUE7O0FDRGpDLElBQUFDLG9CQUF1QkQsUUFBQSxpQkFBQTtBQUV2QixJQUFNRSxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOQyxPQUFBLEdBQU1GLGtCQUFBRyxVQUFTO01BQ2RDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEQyxTQUFBLEdBQVFOLGtCQUFBRyxVQUFTO01BQ2hCQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREUsU0FBQSxHQUFRUCxrQkFBQUcsVUFBUztNQUNoQkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0VBQ0Y7QUFDRDtBQUVBLElBQU1HLGVBQWVQLGdCQUFnQjtBQUVyQyxJQUFNUSxhQUFnREMsU0FBUTtBQUM3RCxTQUFPRixhQUFhRSxHQUFHLEtBQUtBO0FBQzdCOztBQzNCQSxJQUFNQyxXQUFBLDRCQUFBO0FBQUEsTUFBQUMsT0FBQUMsa0JBQVcsV0FBT0MsTUFBZ0M7QUFDdkQsVUFBTUMsc0JBQXNCQSxNQUFZO0FBQ3ZDLFlBQU1DLFNBQVNDLFNBQVNDLGNBQWMsVUFBVTtBQUNoREYsYUFBT0csUUFBUUw7QUFDZkUsYUFBT0ksYUFBYSxZQUFZLE1BQU07QUFDdENKLGFBQU9LLE1BQU1DLFdB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SUFBSUcsY0FBQSxJQUFBQyxPQUFrQjlGLE1BQU0sQ0FBRSxHQUFHO0FBQ3BDO01BQ0Q7QUFFQSxZQUFNK0YsVUFBMkIxRSxTQUFTQyxjQUFjLE1BQU07QUFDOUR5RSxjQUFRQyxZQUFZaEc7QUFDcEIwRixVQUFJNUQsT0FBT2lFLE9BQU87QUFFbEIsWUFBTUUsT0FBQSxHQUFNbEIsWUFBQW1CLFdBQVVwQixjQUFLO1FBQzFCNUQsT0FBQXVFLG1CQUFNQyxJQUFJUyxpQkFBQSxRQUFBVixxQkFBQSxTQUFBQSxtQkFBZTtNQUMxQixDQUFDO0FBQ0RRLFVBQUlHLE1BQU1MLE9BQU87QUFFakIsT0FBQSxHQUFBZixtQkFBQXFCLE9BQU1OLFNBQVM7UUFDZE8sT0FBTztRQUNQQyxTQUFTMUYsV0FBVyxNQUFNO1FBQzFCMkYsV0FBVztNQUNaLENBQUM7SUFDRjtFQUFBLFNBQUFDLEtBQUE7QUFBQXRCLGNBQUF1QixFQUFBRCxHQUFBO0VBQUEsVUFBQTtBQUFBdEIsY0FBQXdCLEVBQUE7RUFBQTtBQUNEOztBQzNCQTVELEdBQUc2RCxLQUFLLGtCQUFrQixFQUFFaEIsSUFBSSxTQUFTaUIsY0FBY0MsVUFBZ0I7QUFDdEUsUUFBTTVCLFFBQWdDNEIsU0FBU0MsS0FBSyxLQUFLO0FBQ3pELE1BQUksQ0FBQzdCLE1BQU04QixRQUFRO0FBQ2xCO0VBQ0Q7QUFFQS9CLFlBQVVDLEtBQUs7QUFDaEIsQ0FBQzsiLAogICJuYW1lcyI6IFsiYnV0dG9uIiwgImNvZGVCbG9jayIsICJpbXBvcnRfY29kZXgiLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAiQ29weSIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJDb3BpZWQiLCAiRmFpbGVkIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJjb3B5VGV4dCIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInRleHQiLCAiY29weVdpdGhFeGVjQ29tbWFuZCIsICJoZWxwZXIiLCAiZG9jdW1lbnQiLCAiY3JlYXRlRWxlbWVudCIsICJ2YWx1ZSIsICJzZXRBdHRyaWJ1dGUiLCAic3R5bGUiLCAicG9zaXRpb24iLCAidG9wIiwgImxlZnQiLCAiYm9keSIsICJhcHBlbmQiLCAic2VsZWN0IiwgImV4ZWNDb21tYW5kIiwgIkVycm9yIiwgInJlbW92ZSIsICJjb3B5IiwgIl9yZWYyIiwgIm5hdmlnYXRvciIsICJjbGlwYm9hcmQiLCAid2luZG93IiwgImlzU2VjdXJlQ29udGV4dCIsICJ3cml0ZVRleHQiLCAiZXJyb3IiLCAiZmFsbGJhY2tFcnJvciIsICJjb25zb2xlIiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJtdyIsICJub3RpZnkiLCAidHlwZSIsICJ0YWciLCAiX3giLCAicHJvcHMiLCAiX19wcm9wcyIsICJjZHhJY29uQ29weSIsICJwYXRoIiwgInNob3VsZEZsaXAiLCAiaW1wb3J0X3Z1ZTIiLCAicmVuZGVyIiwgIl9jdHgiLCAiX2NhY2hlIiwgIiRwcm9wcyIsICIkc2V0dXAiLCAiJGRhdGEiLCAiJG9wdGlvbnMiLCAib3BlbkJsb2NrIiwgImNyZWF0ZUJsb2NrIiwgIndlaWdodCIsICJvbkNsaWNrIiwgIiRldmVudCIsICJkZWZhdWx0IiwgIndpdGhDdHgiLCAiY3JlYXRlVk5vZGUiLCAiaWNvbiIsICJfIiwgIkFwcF9kZWZhdWx0IiwgIl9fZmlsZSIsICJfX3Njb3BlSWQiLCAiQXBwX2RlZmF1bHQyIiwgImltcG9ydF92dWUzIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJhZGRCdXR0b24iLCAiJHByZXMiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgIl9wcmUkdGV4dENvbnRlbnQiLCAicHJlIiwgImNsYXNzTGlzdCIsICJhZGQiLCAicXVlcnlTZWxlY3RvciIsICJjb25jYXQiLCAid3JhcHBlciIsICJjbGFzc05hbWUiLCAiYXBwIiwgImNyZWF0ZUFwcCIsICJ0ZXh0Q29udGVudCIsICJtb3VudCIsICJ0aXBweSIsICJhcnJvdyIsICJjb250ZW50IiwgInBsYWNlbWVudCIsICJlcnIiLCAiZSIsICJmIiwgImhvb2siLCAiY29weUNvZGVCbG9jayIsICIkY29udGVudCIsICJmaW5kIiwgImxlbmd0aCJdCn0K

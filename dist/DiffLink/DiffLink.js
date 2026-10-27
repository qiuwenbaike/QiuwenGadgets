/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/DiffLink}
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

// dist/DiffLink/DiffLink.js
//! src/DiffLink/modules/util/checkDiffPage.ts
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
var checkDiffPage = ($content) => {
  const {
    wgCurRevisionId
  } = mw.config.get();
  return $content.find("table").hasClass("diff") && !!wgCurRevisionId;
};
//! src/DiffLink/modules/util/checkRevisionPage.ts
var checkRevisionPage = ($content) => {
  return ($content.find("#contentSub #mw-revision-nav").length || $content.find("main#content>.pre-content #mw-revision-nav").length) > 0;
};
//! src/DiffLink/modules/addPortletLink.ts
var import_vue4 = require("vue");
var import_vue = require("vue");
var import_codex = require("@wikimedia/codex");
var import_vue2 = require("vue");
//! src/DiffLink/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    "Network error": (0, import_ext_gadget.localize)({
      ja: "ネットワークエラー",
      "zh-hans": "网络异常",
      "zh-hant": "網路異常"
    }),
    Close: (0, import_ext_gadget.localize)({
      en: "Close",
      ja: "閉じる",
      "zh-hans": "关闭",
      "zh-hant": "關閉"
    }),
    Copy: (0, import_ext_gadget.localize)({
      en: "Copy",
      "zh-hans": "复制",
      "zh-hant": "復製"
    }),
    Copied: (0, import_ext_gadget.localize)({
      en: "Copied.",
      "zh-hans": "已复制",
      "zh-hant": "已復製"
    }),
    "Copy failed": (0, import_ext_gadget.localize)({
      en: "Failed to copy.",
      ja: "コピーに失敗しました。",
      "zh-hans": "复制失败",
      "zh-hant": "複製失敗"
    }),
    CopyDiff: (0, import_ext_gadget.localize)({
      en: "Copy the link to the diff version (wiki syntax)",
      ja: "現在の版間の差分リンクをコピーします（ウィキ記法）",
      "zh-hans": "复制链接到当前差异版本的维基语法",
      "zh-hant": "複製連結到當前差異版本的維基語法"
    }),
    CopyPermanent: (0, import_ext_gadget.localize)({
      en: "Copy the permanent link to the current version (wiki syntax)",
      ja: "このページのこの版への固定リンクをコピーします（ウィキ記法）",
      "zh-hans": "复制链接到当前修订版本的维基语法",
      "zh-hant": "複製連結到當前修訂版本的維基語法"
    }),
    Diff: (0, import_ext_gadget.localize)({
      en: "Diff link",
      ja: "現在の版間の差分リンク",
      "zh-hans": "当前差异链接",
      "zh-hant": "當前差異連結"
    }),
    DiffVersion: (0, import_ext_gadget.localize)({
      en: "diff version",
      ja: "版間の差分",
      "zh-hans": "差异版本",
      "zh-hant": "差異版本"
    }),
    Permanent: (0, import_ext_gadget.localize)({
      en: "Permanent link",
      ja: "この版への固定リンク",
      "zh-hans": "当前修订链接",
      "zh-hant": "當前修訂連結"
    }),
    PermanentVersion: (0, import_ext_gadget.localize)({
      en: "permanent version",
      ja: "版への固定リンク",
      "zh-hans": "固定版本链接",
      "zh-hant": "固定版本連結"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/DiffLink/modules/copyText.ts
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
              console.error("[DiffLink] Clipboard API and fallback copy failed:", error, fallbackError);
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
        tag: "DiffLinks"
      });
    } catch (error) {
      console.error("[DiffLink] Failed to copy text:", error);
      void mw.notify(getMessage("Copy failed"), {
        type: "error",
        tag: "DiffLinks"
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
    open: {
      type: Boolean,
      required: true
    },
    items: {
      type: Array,
      required: true
    },
    onClose: {
      type: Function,
      required: true
    }
  },
  emits: ["update:open"],
  setup(__props, {
    expose: __expose,
    emit: __emit
  }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const isOpen = (0, import_vue2.ref)(props.open);
    (0, import_vue2.watch)(() => props.open, (value) => {
      isOpen.value = value;
    }, {
      immediate: true
    });
    const close = () => {
      isOpen.value = false;
      emit("update:open", false);
      props.onClose();
    };
    const handleOpenChange = (value) => {
      isOpen.value = value;
      if (!value) {
        close();
      }
    };
    const cdxIconCopy = {
      path: "M13 19H1V7h6V1h12v12h-6zm-6-6V9H3v8h8v-4zm2-2h8V3H9z",
      shouldFlip: true
    };
    const __returned__ = {
      props,
      emit,
      isOpen,
      close,
      handleOpenChange,
      cdxIconCopy,
      get CdxButton() {
        return import_codex.CdxButton;
      },
      get CdxDialog() {
        return import_codex.CdxDialog;
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
var import_vue3 = require("vue");
var _hoisted_1 = {
  class: "diff-link-copy-list"
};
var _hoisted_2 = {
  class: "diff-link-copy-text"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue3.openBlock)(), (0, import_vue3.createBlock)($setup["CdxDialog"], {
    open: $setup.isOpen,
    "onUpdate:open": [_cache[0] || (_cache[0] = ($event) => $setup.isOpen = $event), $setup.handleOpenChange],
    title: $setup.getMessage("Diff"),
    "default-action": {
      label: $setup.getMessage("Close")
    },
    "use-close-button": true,
    onDefault: $setup.close
  }, {
    default: (0, import_vue3.withCtx)(() => [(0, import_vue3.createElementVNode)("div", _hoisted_1, [((0, import_vue3.openBlock)(true), (0, import_vue3.createElementBlock)(
      import_vue3.Fragment,
      null,
      (0, import_vue3.renderList)($props.items, (item) => {
        return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)("div", {
          key: item.text,
          class: "diff-link-copy-item"
        }, [(0, import_vue3.createElementVNode)(
          "code",
          _hoisted_2,
          (0, import_vue3.toDisplayString)(item.text),
          1
          /* TEXT */
        ), (0, import_vue3.createVNode)($setup["CdxButton"], {
          weight: "normal",
          "aria-label": $setup.getMessage("Copy"),
          onClick: ($event) => $setup.copyText(item.text)
        }, {
          default: (0, import_vue3.withCtx)(() => [(0, import_vue3.createVNode)($setup["CdxIcon"], {
            icon: $setup.cdxIconCopy
          }), (0, import_vue3.createTextVNode)(
            " " + (0, import_vue3.toDisplayString)($setup.getMessage("Copy")),
            1
            /* TEXT */
          )]),
          _: 1
          /* STABLE */
        }, 8, ["aria-label", "onClick"])]);
      }),
      128
      /* KEYED_FRAGMENT */
    ))])]),
    _: 1
    /* STABLE */
  }, 8, ["open", "title", "default-action"]);
}
//! src/DiffLink/App.vue
App_default.render = render;
App_default.__file = "src\\DiffLink\\App.vue";
App_default.__scopeId = "data-v-ae265c6f";
var App_default2 = App_default;
//! src/DiffLink/modules/addPortletLink.ts
var import_ext_gadget2 = require("ext.gadget.Util");
/*!
 * 若想自定义复制结果中的文本可通过向自己的common.js中加入以下内容：
 *   window.DiffLink = ['版本差异', '固定版本'];
 * 若想使用默认值1，但自定值2，请将值1留空，如下例：
 *   window.DiffLink = ['', '固定版本'];
 */
var defaultTextArray = [getMessage("DiffVersion"), getMessage("PermanentVersion")];
var applyCustomText = (index, value) => {
  if (typeof value === "string" && value.length > 0) {
    defaultTextArray[index] = value;
  }
};
if (Array.isArray(window.DiffLink)) {
  applyCustomText(0, window.DiffLink[0]);
  applyCustomText(1, window.DiffLink[1]);
}
var eventListener = {
  remove: () => {
  }
};
var openDialog = (items) => {
  const root = document.createElement("div");
  document.body.append(root);
  const app = (0, import_vue4.createApp)(App_default2, {
    open: true,
    items,
    onClose: () => {
      app === null || app === void 0 || app.unmount();
      root.remove();
    }
  });
  app.mount(root);
};
var addPortletLink = ({
  text,
  tooltip,
  link,
  defaultTextArrayIndex,
  isPermaLink
}) => {
  var _element$firstElement;
  let element = document.querySelector("#t-difflink");
  if (!element) {
    const portletId = document.querySelector("#p-cactions") ? "p-cactions" : "p-tb";
    element = mw.util.addPortletLink(portletId, "#", text, "t-difflink", tooltip);
  }
  if (!element) {
    return;
  }
  const clickListener = (event) => {
    event.preventDefault();
    const hash = isPermaLink ? decodeURIComponent(location.hash) : "";
    const items = [{
      label: link,
      text: link
    }, {
      label: "[[".concat(link).concat(hash, "]]"),
      text: "[[".concat(link).concat(hash, "]]")
    }, {
      label: "[[".concat(link).concat(hash, "|").concat(defaultTextArray[defaultTextArrayIndex], "]]"),
      text: "[[".concat(link).concat(hash, "|").concat(defaultTextArray[defaultTextArrayIndex], "]]")
    }];
    openDialog(items);
  };
  eventListener.remove();
  eventListener = (0, import_ext_gadget2.addEventListenerWithRemover)({
    target: (_element$firstElement = element.firstElementChild) !== null && _element$firstElement !== void 0 ? _element$firstElement : element,
    type: "click",
    listener: clickListener
  });
};
//! src/DiffLink/modules/buildLink.ts
var buildLink = (oldId, diffId) => {
  let link = "Special:Diff/";
  if (oldId) {
    link += "".concat(oldId, "/");
  }
  link += diffId;
  addPortletLink({
    link,
    text: getMessage("Diff"),
    tooltip: getMessage("CopyDiff"),
    defaultTextArrayIndex: 0
  });
};
//! src/DiffLink/options.json
var version = "2.0";
//! src/DiffLink/modules/api.ts
var import_ext_gadget3 = require("ext.gadget.Util");
var api = (0, import_ext_gadget3.initMwApi)("DiffLink/".concat(version));
//! src/DiffLink/modules/util/queryApi.ts
var import_ext_gadget4 = require("ext.gadget.Toastify");
var parameters = {
  action: "compare",
  format: "json",
  formatversion: "2",
  prop: "ids",
  torelative: "prev",
  smaxage: 600,
  maxage: 600
};
var queryApi = /* @__PURE__ */ (function() {
  var _ref3 = _asyncToGenerator(function* (diffId) {
    try {
      return yield api.get({
        ...parameters,
        fromrev: diffId
      });
    } catch (error) {
      console.error("[DiffLink] Ajax error:", error);
      (0, import_ext_gadget4.toastify)({
        text: getMessage("Network error"),
        close: true,
        duration: -1
      }, "error");
      return {};
    }
  });
  return function queryApi2(_x2) {
    return _ref3.apply(this, arguments);
  };
})();
//! src/DiffLink/modules/compareWithRemoteDiffId.ts
var compareWithRemoteDiffId = /* @__PURE__ */ (function() {
  var _ref4 = _asyncToGenerator(function* (diffId) {
    var _response$compare;
    const response = yield queryApi(diffId);
    const {
      wgDiffNewId,
      wgDiffOldId
    } = mw.config.get();
    if (diffId === wgDiffNewId && ((_response$compare = response["compare"]) === null || _response$compare === void 0 ? void 0 : _response$compare.fromrevid) === wgDiffOldId) {
      buildLink(0, diffId);
    }
  });
  return function compareWithRemoteDiffId2(_x3) {
    return _ref4.apply(this, arguments);
  };
})();
//! src/DiffLink/modules/processId.ts
var processId = (isRevisionPage, {
  diffId,
  oldId,
  revisionId
}) => {
  if (diffId) {
    buildLink(oldId, diffId);
    if (oldId) {
      void compareWithRemoteDiffId(diffId);
    }
  } else if (revisionId && isRevisionPage) {
    addPortletLink({
      text: getMessage("Permanent"),
      tooltip: getMessage("CopyPermanent"),
      link: "Special:PermaLink/".concat(revisionId),
      defaultTextArrayIndex: 1,
      isPermaLink: true
    });
  }
};
//! src/DiffLink/DiffLink.ts
mw.hook("wikipage.content").add(function diffLink($content) {
  if ($content.attr("id") !== "mw-content-text") {
    return;
  }
  const isDiffPage = checkDiffPage($content);
  const isRevisionPage = checkRevisionPage($content);
  if (!isDiffPage && !isRevisionPage) {
    return;
  }
  const {
    wgDiffNewId,
    wgDiffOldId,
    wgRevisionId
  } = mw.config.get();
  processId(isRevisionPage, {
    diffId: wgDiffNewId !== null && wgDiffNewId !== void 0 ? wgDiffNewId : null,
    oldId: wgDiffOldId !== null && wgDiffOldId !== void 0 ? wgDiffOldId : null,
    revisionId: wgRevisionId !== null && wgRevisionId !== void 0 ? wgRevisionId : null
  });
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0RpZmZMaW5rL21vZHVsZXMvdXRpbC9jaGVja0RpZmZQYWdlLnRzIiwgInNyYy9EaWZmTGluay9tb2R1bGVzL3V0aWwvY2hlY2tSZXZpc2lvblBhZ2UudHMiLCAic3JjL0RpZmZMaW5rL21vZHVsZXMvYWRkUG9ydGxldExpbmsudHMiLCAiZGlzdC9EaWZmTGluay9zcmMvRGlmZkxpbmsvQXBwLnZ1ZSIsICJzcmMvRGlmZkxpbmsvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9EaWZmTGluay9tb2R1bGVzL2NvcHlUZXh0LnRzIiwgInNmYy10ZW1wbGF0ZTpEOlxcR2l0UmVwb3NpdG9yeVxcUWl1d2VuR2FkZ2V0c1xcc3JjXFxEaWZmTGlua1xcQXBwLnZ1ZT90eXBlPXRlbXBsYXRlIiwgInNyYy9EaWZmTGluay9BcHAudnVlIiwgInNyYy9EaWZmTGluay9tb2R1bGVzL2J1aWxkTGluay50cyIsICJzcmMvRGlmZkxpbmsvb3B0aW9ucy5qc29uIiwgInNyYy9EaWZmTGluay9tb2R1bGVzL2FwaS50cyIsICJzcmMvRGlmZkxpbmsvbW9kdWxlcy91dGlsL3F1ZXJ5QXBpLnRzIiwgInNyYy9EaWZmTGluay9tb2R1bGVzL2NvbXBhcmVXaXRoUmVtb3RlRGlmZklkLnRzIiwgInNyYy9EaWZmTGluay9tb2R1bGVzL3Byb2Nlc3NJZC50cyIsICJzcmMvRGlmZkxpbmsvRGlmZkxpbmsudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IGNoZWNrRGlmZlBhZ2UgPSAoJGNvbnRlbnQ6IEpRdWVyeSk6IGJvb2xlYW4gPT4ge1xuXHRjb25zdCB7d2dDdXJSZXZpc2lvbklkfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0cmV0dXJuICRjb250ZW50LmZpbmQoJ3RhYmxlJykuaGFzQ2xhc3MoJ2RpZmYnKSAmJiAhIXdnQ3VyUmV2aXNpb25JZDtcbn07XG5cbmV4cG9ydCB7Y2hlY2tEaWZmUGFnZX07XG4iLCAiY29uc3QgY2hlY2tSZXZpc2lvblBhZ2UgPSAoJGNvbnRlbnQ6IEpRdWVyeSk6IGJvb2xlYW4gPT4ge1xuXHRyZXR1cm4gKFxuXHRcdCgkY29udGVudC5maW5kKCcjY29udGVudFN1YiAjbXctcmV2aXNpb24tbmF2JykubGVuZ3RoIHx8XG5cdFx0XHQkY29udGVudC5maW5kKCdtYWluI2NvbnRlbnQ+LnByZS1jb250ZW50ICNtdy1yZXZpc2lvbi1uYXYnKS5sZW5ndGgpID4gMFxuXHQpO1xufTtcblxuZXhwb3J0IHtjaGVja1JldmlzaW9uUGFnZX07XG4iLCAiaW1wb3J0IHt0eXBlIEFwcCBhcyBWdWVBcHAsIGNyZWF0ZUFwcH0gZnJvbSAndnVlJztcbmltcG9ydCBBcHAgZnJvbSAnLi4vQXBwLnZ1ZSc7XG5pbXBvcnQge2FkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcn0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuLyohXG4gKiDoi6Xmg7Poh6rlrprkuYnlpI3liLbnu5PmnpzkuK3nmoTmlofmnKzlj6/pgJrov4flkJHoh6rlt7HnmoRjb21tb24uanPkuK3liqDlhaXku6XkuIvlhoXlrrnvvJpcbiAqICAgd2luZG93LkRpZmZMaW5rID0gWyfniYjmnKzlt67lvIInLCAn5Zu65a6a54mI5pysJ107XG4gKiDoi6Xmg7Pkvb/nlKjpu5jorqTlgLwx77yM5L2G6Ieq5a6a5YC8Mu+8jOivt+WwhuWAvDHnlZnnqbrvvIzlpoLkuIvkvovvvJpcbiAqICAgd2luZG93LkRpZmZMaW5rID0gWycnLCAn5Zu65a6a54mI5pysJ107XG4gKi9cbmNvbnN0IGRlZmF1bHRUZXh0QXJyYXk6IFtzdHJpbmcsIHN0cmluZ10gPSBbZ2V0TWVzc2FnZSgnRGlmZlZlcnNpb24nKSwgZ2V0TWVzc2FnZSgnUGVybWFuZW50VmVyc2lvbicpXTtcblxuY29uc3QgYXBwbHlDdXN0b21UZXh0ID0gKGluZGV4OiAwIHwgMSwgdmFsdWU6IHVua25vd24pOiB2b2lkID0+IHtcblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUubGVuZ3RoID4gMCkge1xuXHRcdGRlZmF1bHRUZXh0QXJyYXlbaW5kZXhdID0gdmFsdWU7XG5cdH1cbn07XG5cbmlmIChBcnJheS5pc0FycmF5KHdpbmRvdy5EaWZmTGluaykpIHtcblx0YXBwbHlDdXN0b21UZXh0KDAsIHdpbmRvdy5EaWZmTGlua1swXSk7XG5cdGFwcGx5Q3VzdG9tVGV4dCgxLCB3aW5kb3cuRGlmZkxpbmtbMV0pO1xufVxuXG5sZXQgZXZlbnRMaXN0ZW5lcjogUmV0dXJuVHlwZTx0eXBlb2YgYWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyPiA9IHtcblx0cmVtb3ZlOiAoKTogdm9pZCA9PiB7fSxcbn07XG5cbmNvbnN0IG9wZW5EaWFsb2cgPSAoaXRlbXM6IHtsYWJlbDogc3RyaW5nOyB0ZXh0OiBzdHJpbmd9W10pOiB2b2lkID0+IHtcblx0Y29uc3Qgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRkb2N1bWVudC5ib2R5LmFwcGVuZChyb290KTtcblxuXHRjb25zdCBhcHA6IFZ1ZUFwcDxFbGVtZW50PiB8IG51bGwgPSBjcmVhdGVBcHAoQXBwLCB7XG5cdFx0b3BlbjogdHJ1ZSxcblx0XHRpdGVtcyxcblx0XHRvbkNsb3NlOiAoKTogdm9pZCA9PiB7XG5cdFx0XHRhcHA/LnVubW91bnQoKTtcblx0XHRcdHJvb3QucmVtb3ZlKCk7XG5cdFx0fSxcblx0fSk7XG5cdGFwcC5tb3VudChyb290KTtcbn07XG5cbmNvbnN0IGFkZFBvcnRsZXRMaW5rID0gKHtcblx0dGV4dCxcblx0dG9vbHRpcCxcblx0bGluayxcblx0ZGVmYXVsdFRleHRBcnJheUluZGV4LFxuXHRpc1Blcm1hTGluayxcbn06IHtcblx0dGV4dDogc3RyaW5nO1xuXHR0b29sdGlwOiBzdHJpbmc7XG5cdGxpbms6IHN0cmluZztcblx0ZGVmYXVsdFRleHRBcnJheUluZGV4OiBudW1iZXI7XG5cdGlzUGVybWFMaW5rPzogYm9vbGVhbjtcbn0pOiB2b2lkID0+IHtcblx0bGV0IGVsZW1lbnQ6IEhUTUxMSUVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3QtZGlmZmxpbmsnKTtcblx0aWYgKCFlbGVtZW50KSB7XG5cdFx0Y29uc3QgcG9ydGxldElkOiAncC1jYWN0aW9ucycgfCAncC10YicgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcC1jYWN0aW9ucycpID8gJ3AtY2FjdGlvbnMnIDogJ3AtdGInO1xuXHRcdGVsZW1lbnQgPSBtdy51dGlsLmFkZFBvcnRsZXRMaW5rKHBvcnRsZXRJZCwgJyMnLCB0ZXh0LCAndC1kaWZmbGluaycsIHRvb2x0aXApO1xuXHR9XG5cdGlmICghZWxlbWVudCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGNsaWNrTGlzdGVuZXIgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkID0+IHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGNvbnN0IGhhc2g6IHN0cmluZyA9IGlzUGVybWFMaW5rID8gZGVjb2RlVVJJQ29tcG9uZW50KGxvY2F0aW9uLmhhc2gpIDogJyc7XG5cdFx0Y29uc3QgaXRlbXMgPSBbXG5cdFx0XHR7bGFiZWw6IGxpbmssIHRleHQ6IGxpbmt9LFxuXHRcdFx0e2xhYmVsOiBgW1ske2xpbmt9JHtoYXNofV1dYCwgdGV4dDogYFtbJHtsaW5rfSR7aGFzaH1dXWB9LFxuXHRcdFx0e1xuXHRcdFx0XHRsYWJlbDogYFtbJHtsaW5rfSR7aGFzaH18JHtkZWZhdWx0VGV4dEFycmF5W2RlZmF1bHRUZXh0QXJyYXlJbmRleF19XV1gLFxuXHRcdFx0XHR0ZXh0OiBgW1ske2xpbmt9JHtoYXNofXwke2RlZmF1bHRUZXh0QXJyYXlbZGVmYXVsdFRleHRBcnJheUluZGV4XX1dXWAsXG5cdFx0XHR9LFxuXHRcdF07XG5cdFx0b3BlbkRpYWxvZyhpdGVtcyk7XG5cdH07XG5cblx0ZXZlbnRMaXN0ZW5lci5yZW1vdmUoKTtcblx0ZXZlbnRMaXN0ZW5lciA9IGFkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcih7XG5cdFx0dGFyZ2V0OiAoZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCA/PyBlbGVtZW50KSBhcyBIVE1MRWxlbWVudCxcblx0XHR0eXBlOiAnY2xpY2snLFxuXHRcdGxpc3RlbmVyOiBjbGlja0xpc3RlbmVyLFxuXHR9KTtcbn07XG5cbmV4cG9ydCB7YWRkUG9ydGxldExpbmt9O1xuIiwgIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge0NkeEJ1dHRvbiwgQ2R4RGlhbG9nLCBDZHhJY29ufSBmcm9tICdAd2lraW1lZGlhL2NvZGV4JztcbmltcG9ydCB7cmVmLCB3YXRjaH0gZnJvbSAndnVlJztcbmltcG9ydCB7Y29weVRleHR9IGZyb20gJy4vbW9kdWxlcy9jb3B5VGV4dCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vbW9kdWxlcy9pMThuJztcblxuaW50ZXJmYWNlIENvcHlJdGVtIHtcblx0bGFiZWw6IHN0cmluZztcblx0dGV4dDogc3RyaW5nO1xufVxuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcblx0b3BlbjogYm9vbGVhbjtcblx0aXRlbXM6IENvcHlJdGVtW107XG5cdG9uQ2xvc2U6ICgpID0+IHZvaWQ7XG59PigpO1xuXG5jb25zdCBlbWl0ID0gZGVmaW5lRW1pdHM8e1xuXHQndXBkYXRlOm9wZW4nOiBbdmFsdWU6IGJvb2xlYW5dO1xufT4oKTtcbmNvbnN0IGlzT3BlbiA9IHJlZihwcm9wcy5vcGVuKTtcblxud2F0Y2goXG5cdCgpID0+IHByb3BzLm9wZW4sXG5cdCh2YWx1ZSkgPT4ge1xuXHRcdGlzT3Blbi52YWx1ZSA9IHZhbHVlO1xuXHR9LFxuXHR7aW1tZWRpYXRlOiB0cnVlfVxuKTtcblxuY29uc3QgY2xvc2UgPSAoKTogdm9pZCA9PiB7XG5cdGlzT3Blbi52YWx1ZSA9IGZhbHNlO1xuXHRlbWl0KCd1cGRhdGU6b3BlbicsIGZhbHNlKTtcblx0cHJvcHMub25DbG9zZSgpO1xufTtcblxuY29uc3QgaGFuZGxlT3BlbkNoYW5nZSA9ICh2YWx1ZTogYm9vbGVhbik6IHZvaWQgPT4ge1xuXHRpc09wZW4udmFsdWUgPSB2YWx1ZTtcblx0aWYgKCF2YWx1ZSkge1xuXHRcdGNsb3NlKCk7XG5cdH1cbn07XG5cbi8qKlxuICogU1ZHIHBhdGhzIGlubGluZWQgZnJvbSBgQHdpa2ltZWRpYS9jb2RleC1pY29uc2AgdjIuNy4wLlxuICpcbiAqIE1lZGlhV2lraSBkb2VzIG5vdCBzaGlwIGEgUmVzb3VyY2VMb2FkZXIgbW9kdWxlIHRoYXQgYnVuZGxlc1xuICogYEB3aWtpbWVkaWEvY29kZXgtaWNvbnNgIChzZWUgaHR0cHM6Ly93d3cubWVkaWF3aWtpLm9yZy93aWtpL0NvZGV4KSxcbiAqIHNvIHRoZSBwYXRoIGRhdGEgaXMgY29waWVkIGhlcmUgdmVyYmF0aW0gYW5kIHJlbmRlcmVkIGFzIGlubGluZSBTVkdcbiAqIHRvIGtlZXAgdGhlIGdhZGdldCBzZWxmLWNvbnRhaW5lZCB3aGlsZSBzdGlsbCBzb3VyY2luZyB0aGUgaWNvbnNcbiAqIGZyb20gYEB3aWtpbWVkaWEvY29kZXgtaWNvbnNgLlxuICpcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vZG9jLndpa2ltZWRpYS5vcmcvY29kZXgvbGF0ZXN0L2ljb25zL31cbiAqL1xuXG4vKiogUGF0aCBmb3IgYGNkeEljb25Db3B5YC4gKi9cbmNvbnN0IGNkeEljb25Db3B5ID0ge1xuXHRwYXRoOiAnTTEzIDE5SDFWN2g2VjFoMTJ2MTJoLTZ6bS02LTZWOUgzdjhoOHYtNHptMi0yaDhWM0g5eicsXG5cdHNob3VsZEZsaXA6IHRydWUsXG59O1xuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cblx0PGNkeC1kaWFsb2dcblx0XHR2LW1vZGVsOm9wZW49XCJpc09wZW5cIlxuXHRcdDp0aXRsZT1cImdldE1lc3NhZ2UoJ0RpZmYnKVwiXG5cdFx0OmRlZmF1bHQtYWN0aW9uPVwie2xhYmVsOiBnZXRNZXNzYWdlKCdDbG9zZScpfVwiXG5cdFx0OnVzZS1jbG9zZS1idXR0b249XCJ0cnVlXCJcblx0XHRAdXBkYXRlOm9wZW49XCJoYW5kbGVPcGVuQ2hhbmdlXCJcblx0XHRAZGVmYXVsdD1cImNsb3NlXCJcblx0PlxuXHRcdDxkaXYgY2xhc3M9XCJkaWZmLWxpbmstY29weS1saXN0XCI+XG5cdFx0XHQ8ZGl2IHYtZm9yPVwiaXRlbSBpbiBpdGVtc1wiIDprZXk9XCJpdGVtLnRleHRcIiBjbGFzcz1cImRpZmYtbGluay1jb3B5LWl0ZW1cIj5cblx0XHRcdFx0PGNvZGUgY2xhc3M9XCJkaWZmLWxpbmstY29weS10ZXh0XCI+e3sgaXRlbS50ZXh0IH19PC9jb2RlPlxuXHRcdFx0XHQ8Y2R4LWJ1dHRvbiB3ZWlnaHQ9XCJub3JtYWxcIiA6YXJpYS1sYWJlbD1cImdldE1lc3NhZ2UoJ0NvcHknKVwiIEBjbGljaz1cImNvcHlUZXh0KGl0ZW0udGV4dClcIj5cblx0XHRcdFx0XHQ8Y2R4LWljb24gOmljb249XCJjZHhJY29uQ29weVwiIC8+XG5cdFx0XHRcdFx0e3sgZ2V0TWVzc2FnZSgnQ29weScpIH19XG5cdFx0XHRcdDwvY2R4LWJ1dHRvbj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L2NkeC1kaWFsb2c+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJsZXNzXCI+XG4uZGlmZi1saW5rLWNvcHktbGlzdCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMC43NXJlbTtcbn1cblxuLmRpZmYtbGluay1jb3B5LWl0ZW0ge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRnYXA6IDAuNXJlbTtcblx0ZmxleC13cmFwOiB3cmFwO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5kaWZmLWxpbmstY29weS10ZXh0IHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xuXHRib3JkZXI6IDFweCBzb2xpZCAjZWFlY2YwO1xuXHRib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuXHRiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuXHRjb2xvcjogIzIwMjEyMjtcblx0Zm9udC1zaXplOiAwLjg3NXJlbTtcblx0d29yZC1icmVhazogYnJlYWstYWxsO1xuXHRmbGV4OiAxIDEgMTAwJTtcbn1cbjwvc3R5bGU+XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCdOZXR3b3JrIGVycm9yJzogbG9jYWxpemUoe1xuXHRcdFx0amE6ICfjg43jg4Pjg4jjg6/jg7zjgq/jgqjjg6njg7wnLFxuXHRcdFx0J3poLWhhbnMnOiAn572R57uc5byC5bi4Jyxcblx0XHRcdCd6aC1oYW50JzogJ+e2sui3r+eVsOW4uCcsXG5cdFx0fSksXG5cdFx0Q2xvc2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ2xvc2UnLFxuXHRcdFx0amE6ICfplonjgZjjgosnLFxuXHRcdFx0J3poLWhhbnMnOiAn5YWz6ZetJyxcblx0XHRcdCd6aC1oYW50JzogJ+mXnOmWiScsXG5cdFx0fSksXG5cdFx0Q29weTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDb3B5Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+WkjeWIticsXG5cdFx0XHQnemgtaGFudCc6ICflvqnoo70nLFxuXHRcdH0pLFxuXHRcdENvcGllZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDb3BpZWQuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3suWkjeWIticsXG5cdFx0XHQnemgtaGFudCc6ICflt7Llvqnoo70nLFxuXHRcdH0pLFxuXHRcdCdDb3B5IGZhaWxlZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRmFpbGVkIHRvIGNvcHkuJyxcblx0XHRcdGphOiAn44Kz44OU44O844Gr5aSx5pWX44GX44G+44GX44Gf44CCJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WkjeWItuWksei0pScsXG5cdFx0XHQnemgtaGFudCc6ICfopIfoo73lpLHmlZcnLFxuXHRcdH0pLFxuXHRcdENvcHlEaWZmOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NvcHkgdGhlIGxpbmsgdG8gdGhlIGRpZmYgdmVyc2lvbiAod2lraSBzeW50YXgpJyxcblx0XHRcdGphOiAn54++5Zyo44Gu54mI6ZaT44Gu5beu5YiG44Oq44Oz44Kv44KS44Kz44OU44O844GX44G+44GZ77yI44Km44Kj44Kt6KiY5rOV77yJJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WkjeWItumTvuaOpeWIsOW9k+WJjeW3ruW8gueJiOacrOeahOe7tOWfuuivreazlScsXG5cdFx0XHQnemgtaGFudCc6ICfopIfoo73pgKPntZDliLDnlbbliY3lt67nlbDniYjmnKznmoTntq3ln7roqp7ms5UnLFxuXHRcdH0pLFxuXHRcdENvcHlQZXJtYW5lbnQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ29weSB0aGUgcGVybWFuZW50IGxpbmsgdG8gdGhlIGN1cnJlbnQgdmVyc2lvbiAod2lraSBzeW50YXgpJyxcblx0XHRcdGphOiAn44GT44Gu44Oa44O844K444Gu44GT44Gu54mI44G444Gu5Zu65a6a44Oq44Oz44Kv44KS44Kz44OU44O844GX44G+44GZ77yI44Km44Kj44Kt6KiY5rOV77yJJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WkjeWItumTvuaOpeWIsOW9k+WJjeS/ruiuoueJiOacrOeahOe7tOWfuuivreazlScsXG5cdFx0XHQnemgtaGFudCc6ICfopIfoo73pgKPntZDliLDnlbbliY3kv67oqILniYjmnKznmoTntq3ln7roqp7ms5UnLFxuXHRcdH0pLFxuXHRcdERpZmY6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRGlmZiBsaW5rJyxcblx0XHRcdGphOiAn54++5Zyo44Gu54mI6ZaT44Gu5beu5YiG44Oq44Oz44KvJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W9k+WJjeW3ruW8gumTvuaOpScsXG5cdFx0XHQnemgtaGFudCc6ICfnlbbliY3lt67nlbDpgKPntZAnLFxuXHRcdH0pLFxuXHRcdERpZmZWZXJzaW9uOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2RpZmYgdmVyc2lvbicsXG5cdFx0XHRqYTogJ+eJiOmWk+OBruW3ruWIhicsXG5cdFx0XHQnemgtaGFucyc6ICflt67lvILniYjmnKwnLFxuXHRcdFx0J3poLWhhbnQnOiAn5beu55Ww54mI5pysJyxcblx0XHR9KSxcblx0XHRQZXJtYW5lbnQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUGVybWFuZW50IGxpbmsnLFxuXHRcdFx0amE6ICfjgZPjga7niYjjgbjjga7lm7rlrprjg6rjg7Pjgq8nLFxuXHRcdFx0J3poLWhhbnMnOiAn5b2T5YmN5L+u6K6i6ZO+5o6lJyxcblx0XHRcdCd6aC1oYW50JzogJ+eVtuWJjeS/ruiogumAo+e1kCcsXG5cdFx0fSksXG5cdFx0UGVybWFuZW50VmVyc2lvbjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdwZXJtYW5lbnQgdmVyc2lvbicsXG5cdFx0XHRqYTogJ+eJiOOBuOOBruWbuuWumuODquODs+OCrycsXG5cdFx0XHQnemgtaGFucyc6ICflm7rlrprniYjmnKzpk77mjqUnLFxuXHRcdFx0J3poLWhhbnQnOiAn5Zu65a6a54mI5pys6YCj57WQJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBjb3B5VGV4dCA9IGFzeW5jICh0ZXh0OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3QgY29weVdpdGhFeGVjQ29tbWFuZCA9ICgpOiB2b2lkID0+IHtcblx0XHRjb25zdCBoZWxwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuXHRcdGhlbHBlci52YWx1ZSA9IHRleHQ7XG5cdFx0aGVscGVyLnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCAndHJ1ZScpO1xuXHRcdGhlbHBlci5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG5cdFx0aGVscGVyLnN0eWxlLnRvcCA9ICctOTk5OXB4Jztcblx0XHRoZWxwZXIuc3R5bGUubGVmdCA9ICctOTk5OXB4Jztcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZChoZWxwZXIpO1xuXHRcdHRyeSB7XG5cdFx0XHRoZWxwZXIuc2VsZWN0KCk7XG5cdFx0XHRpZiAoIWRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5JykpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIikgZmFpbGVkJyk7XG5cdFx0XHR9XG5cdFx0fSBmaW5hbGx5IHtcblx0XHRcdGhlbHBlci5yZW1vdmUoKTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgY29weSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRpZiAobmF2aWdhdG9yLmNsaXBib2FyZCAmJiB3aW5kb3cuaXNTZWN1cmVDb250ZXh0KSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRhd2FpdCBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh0ZXh0KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRjb3B5V2l0aEV4ZWNDb21tYW5kKCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9IGNhdGNoIChmYWxsYmFja0Vycm9yKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcignW0RpZmZMaW5rXSBDbGlwYm9hcmQgQVBJIGFuZCBmYWxsYmFjayBjb3B5IGZhaWxlZDonLCBlcnJvciwgZmFsbGJhY2tFcnJvcik7XG5cdFx0XHRcdFx0dGhyb3cgZmFsbGJhY2tFcnJvcjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNvcHlXaXRoRXhlY0NvbW1hbmQoKTtcblx0fTtcblxuXHR0cnkge1xuXHRcdGF3YWl0IGNvcHkoKTtcblx0XHR2b2lkIG13Lm5vdGlmeShnZXRNZXNzYWdlKCdDb3BpZWQnKSwge1xuXHRcdFx0dHlwZTogJ3N1Y2Nlc3MnLFxuXHRcdFx0dGFnOiAnRGlmZkxpbmtzJyxcblx0XHR9KTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRjb25zb2xlLmVycm9yKCdbRGlmZkxpbmtdIEZhaWxlZCB0byBjb3B5IHRleHQ6JywgZXJyb3IpO1xuXHRcdHZvaWQgbXcubm90aWZ5KGdldE1lc3NhZ2UoJ0NvcHkgZmFpbGVkJyksIHtcblx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHR0YWc6ICdEaWZmTGlua3MnLFxuXHRcdH0pO1xuXHR9XG59O1xuXG5leHBvcnQge2NvcHlUZXh0fTtcbiIsICJpbXBvcnQgeyByZW5kZXJMaXN0IGFzIF9yZW5kZXJMaXN0LCBGcmFnbWVudCBhcyBfRnJhZ21lbnQsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jaywgdG9EaXNwbGF5U3RyaW5nIGFzIF90b0Rpc3BsYXlTdHJpbmcsIGNyZWF0ZUVsZW1lbnRWTm9kZSBhcyBfY3JlYXRlRWxlbWVudFZOb2RlLCBjcmVhdGVWTm9kZSBhcyBfY3JlYXRlVk5vZGUsIGNyZWF0ZVRleHRWTm9kZSBhcyBfY3JlYXRlVGV4dFZOb2RlLCB3aXRoQ3R4IGFzIF93aXRoQ3R4LCBjcmVhdGVCbG9jayBhcyBfY3JlYXRlQmxvY2sgfSBmcm9tIFwidnVlXCJcblxuY29uc3QgX2hvaXN0ZWRfMSA9IHsgY2xhc3M6IFwiZGlmZi1saW5rLWNvcHktbGlzdFwiIH1cbmNvbnN0IF9ob2lzdGVkXzIgPSB7IGNsYXNzOiBcImRpZmYtbGluay1jb3B5LXRleHRcIiB9XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soJHNldHVwW1wiQ2R4RGlhbG9nXCJdLCB7XG4gICAgb3BlbjogJHNldHVwLmlzT3BlbixcbiAgICBcIm9uVXBkYXRlOm9wZW5cIjogW1xuICAgICAgX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSAkZXZlbnQgPT4gKCgkc2V0dXAuaXNPcGVuKSA9ICRldmVudCkpLFxuICAgICAgJHNldHVwLmhhbmRsZU9wZW5DaGFuZ2VcbiAgICBdLFxuICAgIHRpdGxlOiAkc2V0dXAuZ2V0TWVzc2FnZSgnRGlmZicpLFxuICAgIFwiZGVmYXVsdC1hY3Rpb25cIjoge2xhYmVsOiAkc2V0dXAuZ2V0TWVzc2FnZSgnQ2xvc2UnKX0sXG4gICAgXCJ1c2UtY2xvc2UtYnV0dG9uXCI6IHRydWUsXG4gICAgb25EZWZhdWx0OiAkc2V0dXAuY2xvc2VcbiAgfSwge1xuICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfMSwgW1xuICAgICAgICAoX29wZW5CbG9jayh0cnVlKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhfRnJhZ21lbnQsIG51bGwsIF9yZW5kZXJMaXN0KCRwcm9wcy5pdGVtcywgKGl0ZW0pID0+IHtcbiAgICAgICAgICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCB7XG4gICAgICAgICAgICBrZXk6IGl0ZW0udGV4dCxcbiAgICAgICAgICAgIGNsYXNzOiBcImRpZmYtbGluay1jb3B5LWl0ZW1cIlxuICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJjb2RlXCIsIF9ob2lzdGVkXzIsIF90b0Rpc3BsYXlTdHJpbmcoaXRlbS50ZXh0KSwgMSAvKiBURVhUICovKSxcbiAgICAgICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDZHhCdXR0b25cIl0sIHtcbiAgICAgICAgICAgICAgd2VpZ2h0OiBcIm5vcm1hbFwiLFxuICAgICAgICAgICAgICBcImFyaWEtbGFiZWxcIjogJHNldHVwLmdldE1lc3NhZ2UoJ0NvcHknKSxcbiAgICAgICAgICAgICAgb25DbGljazogJGV2ZW50ID0+ICgkc2V0dXAuY29weVRleHQoaXRlbS50ZXh0KSlcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICAgICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDZHhJY29uXCJdLCB7IGljb246ICRzZXR1cC5jZHhJY29uQ29weSB9KSxcbiAgICAgICAgICAgICAgICBfY3JlYXRlVGV4dFZOb2RlKFwiIFwiICsgX3RvRGlzcGxheVN0cmluZygkc2V0dXAuZ2V0TWVzc2FnZSgnQ29weScpKSwgMSAvKiBURVhUICovKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgICAgICAgICAgIH0sIDggLyogUFJPUFMgKi8sIFtcImFyaWEtbGFiZWxcIiwgXCJvbkNsaWNrXCJdKVxuICAgICAgICAgIF0pKVxuICAgICAgICB9KSwgMTI4IC8qIEtFWUVEX0ZSQUdNRU5UICovKSlcbiAgICAgIF0pXG4gICAgXSksXG4gICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgfSwgOCAvKiBQUk9QUyAqLywgW1wib3BlblwiLCBcInRpdGxlXCIsIFwiZGVmYXVsdC1hY3Rpb25cIl0pKVxufSIsICJpbXBvcnQgc2NyaXB0IGZyb20gXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXERpZmZMaW5rXFxcXEFwcC52dWU/dHlwZT1zY3JpcHRcIjtpbXBvcnQgXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXERpZmZMaW5rXFxcXEFwcC52dWU/dHlwZT1zdHlsZSZpbmRleD0wXCI7aW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcRGlmZkxpbmtcXFxcQXBwLnZ1ZT90eXBlPXRlbXBsYXRlXCI7IHNjcmlwdC5yZW5kZXIgPSByZW5kZXI7c2NyaXB0Ll9fZmlsZSA9IFwic3JjXFxcXERpZmZMaW5rXFxcXEFwcC52dWVcIjtzY3JpcHQuX19zY29wZUlkID0gXCJkYXRhLXYtYWUyNjVjNmZcIjtleHBvcnQgZGVmYXVsdCBzY3JpcHQ7IiwgImltcG9ydCB7YWRkUG9ydGxldExpbmt9IGZyb20gJy4vYWRkUG9ydGxldExpbmsnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBidWlsZExpbmsgPSAob2xkSWQ6IG51bWJlciB8IG51bGwsIGRpZmZJZDogbnVtYmVyKTogdm9pZCA9PiB7XG5cdGxldCBsaW5rOiBzdHJpbmcgPSAnU3BlY2lhbDpEaWZmLyc7XG5cdGlmIChvbGRJZCkge1xuXHRcdGxpbmsgKz0gYCR7b2xkSWR9L2A7XG5cdH1cblx0bGluayArPSBkaWZmSWQ7XG5cblx0YWRkUG9ydGxldExpbmsoe1xuXHRcdGxpbmssXG5cdFx0dGV4dDogZ2V0TWVzc2FnZSgnRGlmZicpLFxuXHRcdHRvb2x0aXA6IGdldE1lc3NhZ2UoJ0NvcHlEaWZmJyksXG5cdFx0ZGVmYXVsdFRleHRBcnJheUluZGV4OiAwLFxuXHR9KTtcbn07XG5cbmV4cG9ydCB7YnVpbGRMaW5rfTtcbiIsICJ7XG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBEaWZmTGluay8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuLi9hcGknO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG50eXBlIENvbXBhcmVSZXNwb25zZSA9IHtcblx0Y29tcGFyZT86IHtcblx0XHRmcm9tcmV2aWQ6IG51bWJlcjtcblx0fTtcbn07XG5cbmNvbnN0IHBhcmFtZXRlcnM6IEFwaUNvbXBhcmVQYWdlc1BhcmFtcyA9IHtcblx0YWN0aW9uOiAnY29tcGFyZScsXG5cdGZvcm1hdDogJ2pzb24nLFxuXHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdHByb3A6ICdpZHMnLFxuXHR0b3JlbGF0aXZlOiAncHJldicsXG5cdHNtYXhhZ2U6IDYwMCxcblx0bWF4YWdlOiA2MDAsXG59O1xuXG5jb25zdCBxdWVyeUFwaSA9IGFzeW5jIChkaWZmSWQ6IG51bWJlcik6IFByb21pc2U8Q29tcGFyZVJlc3BvbnNlPiA9PiB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGF3YWl0IGFwaS5nZXQoe1xuXHRcdFx0Li4ucGFyYW1ldGVycyxcblx0XHRcdGZyb21yZXY6IGRpZmZJZCxcblx0XHR9IGFzIHR5cGVvZiBwYXJhbWV0ZXJzKTtcblx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHRjb25zb2xlLmVycm9yKCdbRGlmZkxpbmtdIEFqYXggZXJyb3I6JywgZXJyb3IpO1xuXHRcdHRvYXN0aWZ5KFxuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdOZXR3b3JrIGVycm9yJyksXG5cdFx0XHRcdGNsb3NlOiB0cnVlLFxuXHRcdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0XHR9LFxuXHRcdFx0J2Vycm9yJ1xuXHRcdCk7XG5cblx0XHRyZXR1cm4ge307XG5cdH1cbn07XG5cbmV4cG9ydCB7cXVlcnlBcGl9O1xuIiwgImltcG9ydCB7YnVpbGRMaW5rfSBmcm9tICcuL2J1aWxkTGluayc7XG5pbXBvcnQge3F1ZXJ5QXBpfSBmcm9tICcuL3V0aWwvcXVlcnlBcGknO1xuXG5jb25zdCBjb21wYXJlV2l0aFJlbW90ZURpZmZJZCA9IGFzeW5jIChkaWZmSWQ6IG51bWJlcik6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCByZXNwb25zZTogQXdhaXRlZDxSZXR1cm5UeXBlPHR5cGVvZiBxdWVyeUFwaT4+ID0gYXdhaXQgcXVlcnlBcGkoZGlmZklkKTtcblx0Y29uc3Qge3dnRGlmZk5ld0lkLCB3Z0RpZmZPbGRJZH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGlmIChkaWZmSWQgPT09IHdnRGlmZk5ld0lkICYmIHJlc3BvbnNlWydjb21wYXJlJ10/LmZyb21yZXZpZCA9PT0gd2dEaWZmT2xkSWQpIHtcblx0XHRidWlsZExpbmsoMCwgZGlmZklkKTtcblx0fVxufTtcblxuZXhwb3J0IHtjb21wYXJlV2l0aFJlbW90ZURpZmZJZH07XG4iLCAiaW1wb3J0IHthZGRQb3J0bGV0TGlua30gZnJvbSAnLi9hZGRQb3J0bGV0TGluayc7XG5pbXBvcnQge2J1aWxkTGlua30gZnJvbSAnLi9idWlsZExpbmsnO1xuaW1wb3J0IHtjb21wYXJlV2l0aFJlbW90ZURpZmZJZH0gZnJvbSAnLi9jb21wYXJlV2l0aFJlbW90ZURpZmZJZCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IHByb2Nlc3NJZCA9IChcblx0aXNSZXZpc2lvblBhZ2U6IGJvb2xlYW4sXG5cdHtkaWZmSWQsIG9sZElkLCByZXZpc2lvbklkfToge2RpZmZJZDogbnVtYmVyIHwgbnVsbDsgb2xkSWQ6IG51bWJlciB8IG51bGw7IHJldmlzaW9uSWQ6IG51bWJlciB8IG51bGx9XG4pOiB2b2lkID0+IHtcblx0aWYgKGRpZmZJZCkge1xuXHRcdGJ1aWxkTGluayhvbGRJZCwgZGlmZklkKTtcblx0XHRpZiAob2xkSWQpIHtcblx0XHRcdHZvaWQgY29tcGFyZVdpdGhSZW1vdGVEaWZmSWQoZGlmZklkKTtcblx0XHR9XG5cdH0gZWxzZSBpZiAocmV2aXNpb25JZCAmJiBpc1JldmlzaW9uUGFnZSkge1xuXHRcdGFkZFBvcnRsZXRMaW5rKHtcblx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ1Blcm1hbmVudCcpLFxuXHRcdFx0dG9vbHRpcDogZ2V0TWVzc2FnZSgnQ29weVBlcm1hbmVudCcpLFxuXHRcdFx0bGluazogYFNwZWNpYWw6UGVybWFMaW5rLyR7cmV2aXNpb25JZH1gLFxuXHRcdFx0ZGVmYXVsdFRleHRBcnJheUluZGV4OiAxLFxuXHRcdFx0aXNQZXJtYUxpbms6IHRydWUsXG5cdFx0fSk7XG5cdH1cbn07XG5cbmV4cG9ydCB7cHJvY2Vzc0lkfTtcbiIsICJpbXBvcnQge2NoZWNrRGlmZlBhZ2V9IGZyb20gJy4vbW9kdWxlcy91dGlsL2NoZWNrRGlmZlBhZ2UnO1xuaW1wb3J0IHtjaGVja1JldmlzaW9uUGFnZX0gZnJvbSAnLi9tb2R1bGVzL3V0aWwvY2hlY2tSZXZpc2lvblBhZ2UnO1xuaW1wb3J0IHtwcm9jZXNzSWR9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzSWQnO1xuXG5tdy5ob29rKCd3aWtpcGFnZS5jb250ZW50JykuYWRkKGZ1bmN0aW9uIGRpZmZMaW5rKCRjb250ZW50KTogdm9pZCB7XG5cdGlmICgkY29udGVudC5hdHRyKCdpZCcpICE9PSAnbXctY29udGVudC10ZXh0Jykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGlzRGlmZlBhZ2U6IGJvb2xlYW4gPSBjaGVja0RpZmZQYWdlKCRjb250ZW50KTtcblx0Y29uc3QgaXNSZXZpc2lvblBhZ2U6IGJvb2xlYW4gPSBjaGVja1JldmlzaW9uUGFnZSgkY29udGVudCk7XG5cdGlmICghaXNEaWZmUGFnZSAmJiAhaXNSZXZpc2lvblBhZ2UpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB7d2dEaWZmTmV3SWQsIHdnRGlmZk9sZElkLCB3Z1JldmlzaW9uSWR9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdHByb2Nlc3NJZChpc1JldmlzaW9uUGFnZSwge1xuXHRcdGRpZmZJZDogd2dEaWZmTmV3SWQgPz8gbnVsbCxcblx0XHRvbGRJZDogd2dEaWZmT2xkSWQgPz8gbnVsbCxcblx0XHRyZXZpc2lvbklkOiB3Z1JldmlzaW9uSWQgPz8gbnVsbCxcblx0fSk7XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsZ0JBQWlCQyxjQUE4QjtBQUNwRCxRQUFNO0lBQUNDO0VBQWUsSUFBSUMsR0FBR0MsT0FBT0MsSUFBSTtBQUN4QyxTQUFPSixTQUFTSyxLQUFLLE9BQU8sRUFBRUMsU0FBUyxNQUFNLEtBQUssQ0FBQyxDQUFDTDtBQUNyRDs7QUNIQSxJQUFNTSxvQkFBcUJQLGNBQThCO0FBQ3hELFVBQ0VBLFNBQVNLLEtBQUssOEJBQThCLEVBQUVHLFVBQzlDUixTQUFTSyxLQUFLLDRDQUE0QyxFQUFFRyxVQUFVO0FBRXpFOztBQ0xBLElBQUFDLGNBQTRDQyxRQUFBLEtBQUE7O0FDQzVDLElBQUFDLGVBQTRDRCxRQUFBLGtCQUFBO0FBQzVDLElBQUFFLGNBQXlCRixRQUFBLEtBQUE7O0FDRnpCLElBQUFHLG9CQUF1QkgsUUFBQSxpQkFBQTtBQUV2QixJQUFNSSxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOLGtCQUFBLEdBQWlCRCxrQkFBQUUsVUFBUztNQUN6QkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEQyxRQUFBLEdBQU9KLGtCQUFBRSxVQUFTO01BQ2ZHLElBQUk7TUFDSkYsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNERyxPQUFBLEdBQU1OLGtCQUFBRSxVQUFTO01BQ2RHLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREUsU0FBQSxHQUFRUCxrQkFBQUUsVUFBUztNQUNoQkcsSUFBSTtNQUNKLFdBQVc7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WU0saUJBQUEsUUFBQUEsaUJBQUEsU0FBQUEsZUFBZ0I7RUFDN0IsQ0FBQztBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbImNoZWNrRGlmZlBhZ2UiLCAiJGNvbnRlbnQiLCAid2dDdXJSZXZpc2lvbklkIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiZmluZCIsICJoYXNDbGFzcyIsICJjaGVja1JldmlzaW9uUGFnZSIsICJsZW5ndGgiLCAiaW1wb3J0X3Z1ZTQiLCAicmVxdWlyZSIsICJpbXBvcnRfY29kZXgiLCAiaW1wb3J0X3Z1ZTIiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImxvY2FsaXplIiwgImphIiwgIkNsb3NlIiwgImVuIiwgIkNvcHkiLCAiQ29waWVkIiwgIkNvcHlEaWZmIiwgIkNvcHlQZXJtYW5lbnQiLCAiRGlmZiIsICJEaWZmVmVyc2lvbiIsICJQZXJtYW5lbnQiLCAiUGVybWFuZW50VmVyc2lvbiIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiY29weVRleHQiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJ0ZXh0IiwgImNvcHlXaXRoRXhlY0NvbW1hbmQiLCAiaGVscGVyIiwgImRvY3VtZW50IiwgImNyZWF0ZUVsZW1lbnQiLCAidmFsdWUiLCAic2V0QXR0cmlidXRlIiwgInN0eWxlIiwgInBvc2l0aW9uIiwgInRvcCIsICJsZWZ0IiwgImJvZHkiLCAiYXBwZW5kIiwgInNlbGVjdCIsICJleGVjQ29tbWFuZCIsICJFcnJvciIsICJyZW1vdmUiLCAiY29weSIsICJfcmVmMiIsICJuYXZpZ2F0b3IiLCAiY2xpcGJvYXJkIiwgIndpbmRvdyIsICJpc1NlY3VyZUNvbnRleHQiLCAid3JpdGVUZXh0IiwgImVycm9yIiwgImZhbGxiYWNrRXJyb3IiLCAiY29uc29sZSIsICJhcHBseSIsICJhcmd1bWVudHMiLCAibm90aWZ5IiwgInR5cGUiLCAidGFnIiwgIl94IiwgInByb3BzIiwgIl9fcHJvcHMiLCAiZW1pdCIsICJfX2VtaXQiLCAiaXNPcGVuIiwgInJlZiIsICJvcGVuIiwgIndhdGNoIiwgImltbWVkaWF0ZSIsICJjbG9zZSIsICJvbkNsb3NlIiwgImhhbmRsZU9wZW5DaGFuZ2UiLCAiY2R4SWNvbkNvcHkiLCAicGF0aCIsICJzaG91bGRGbGlwIiwgImltcG9ydF92dWUzIiwgIl9ob2lzdGVkXzEiLCAiY2xhc3MiLCAiX2hvaXN0ZWRfMiIsICJyZW5kZXIiLCAiX2N0eCIsICJfY2FjaGUiLCAiJHByb3BzIiwgIiRzZXR1cCIsICIkZGF0YSIsICIkb3B0aW9ucyIsICJvcGVuQmxvY2siLCAiY3JlYXRlQmxvY2siLCAiJGV2ZW50IiwgInRpdGxlIiwgImxhYmVsIiwgIm9uRGVmYXVsdCIsICJkZWZhdWx0IiwgIndpdGhDdHgiLCAiY3JlYXRlRWxlbWVudFZOb2RlIiwgImNyZWF0ZUVsZW1lbnRCbG9jayIsICJGcmFnbWVudCIsICJyZW5kZXJMaXN0IiwgIml0ZW1zIiwgIml0ZW0iLCAidG9EaXNwbGF5U3RyaW5nIiwgImNyZWF0ZVZOb2RlIiwgIndlaWdodCIsICJvbkNsaWNrIiwgImljb24iLCAiY3JlYXRlVGV4dFZOb2RlIiwgIl8iLCAiQXBwX2RlZmF1bHQiLCAiX19maWxlIiwgIl9fc2NvcGVJZCIsICJBcHBfZGVmYXVsdDIiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImRlZmF1bHRUZXh0QXJyYXkiLCAiYXBwbHlDdXN0b21UZXh0IiwgImluZGV4IiwgIkFycmF5IiwgImlzQXJyYXkiLCAiRGlmZkxpbmsiLCAiZXZlbnRMaXN0ZW5lciIsICJvcGVuRGlhbG9nIiwgInJvb3QiLCAiYXBwIiwgImNyZWF0ZUFwcCIsICJ1bm1vdW50IiwgIm1vdW50IiwgImFkZFBvcnRsZXRMaW5rIiwgInRvb2x0aXAiLCAibGluayIsICJkZWZhdWx0VGV4dEFycmF5SW5kZXgiLCAiaXNQZXJtYUxpbmsiLCAiX2VsZW1lbnQkZmlyc3RFbGVtZW50IiwgImVsZW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJwb3J0bGV0SWQiLCAidXRpbCIsICJjbGlja0xpc3RlbmVyIiwgImV2ZW50IiwgInByZXZlbnREZWZhdWx0IiwgImhhc2giLCAiZGVjb2RlVVJJQ29tcG9uZW50IiwgImxvY2F0aW9uIiwgImNvbmNhdCIsICJhZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXIiLCAidGFyZ2V0IiwgImZpcnN0RWxlbWVudENoaWxkIiwgImxpc3RlbmVyIiwgImJ1aWxkTGluayIsICJvbGRJZCIsICJkaWZmSWQiLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiYXBpIiwgImluaXRNd0FwaSIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAicGFyYW1ldGVycyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicHJvcCIsICJ0b3JlbGF0aXZlIiwgInNtYXhhZ2UiLCAibWF4YWdlIiwgInF1ZXJ5QXBpIiwgIl9yZWYzIiwgImZyb21yZXYiLCAidG9hc3RpZnkiLCAiZHVyYXRpb24iLCAiX3gyIiwgImNvbXBhcmVXaXRoUmVtb3RlRGlmZklkIiwgIl9yZWY0IiwgIl9yZXNwb25zZSRjb21wYXJlIiwgInJlc3BvbnNlIiwgIndnRGlmZk5ld0lkIiwgIndnRGlmZk9sZElkIiwgImZyb21yZXZpZCIsICJfeDMiLCAicHJvY2Vzc0lkIiwgImlzUmV2aXNpb25QYWdlIiwgInJldmlzaW9uSWQiLCAiaG9vayIsICJhZGQiLCAiZGlmZkxpbmsiLCAiYXR0ciIsICJpc0RpZmZQYWdlIiwgIndnUmV2aXNpb25JZCJdCn0K

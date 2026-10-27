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
        tag: "DiffLink"
      });
    } catch (error) {
      console.error("[DiffLink] Failed to copy text:", error);
      void mw.notify(getMessage("Copy failed"), {
        type: "error",
        tag: "DiffLink"
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0RpZmZMaW5rL21vZHVsZXMvdXRpbC9jaGVja0RpZmZQYWdlLnRzIiwgInNyYy9EaWZmTGluay9tb2R1bGVzL3V0aWwvY2hlY2tSZXZpc2lvblBhZ2UudHMiLCAic3JjL0RpZmZMaW5rL21vZHVsZXMvYWRkUG9ydGxldExpbmsudHMiLCAiZGlzdC9EaWZmTGluay9zcmMvRGlmZkxpbmsvQXBwLnZ1ZSIsICJzcmMvRGlmZkxpbmsvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9EaWZmTGluay9tb2R1bGVzL2NvcHlUZXh0LnRzIiwgInNmYy10ZW1wbGF0ZTpEOlxcR2l0UmVwb3NpdG9yeVxcUWl1d2VuR2FkZ2V0c1xcc3JjXFxEaWZmTGlua1xcQXBwLnZ1ZT90eXBlPXRlbXBsYXRlIiwgInNyYy9EaWZmTGluay9BcHAudnVlIiwgInNyYy9EaWZmTGluay9tb2R1bGVzL2J1aWxkTGluay50cyIsICJzcmMvRGlmZkxpbmsvb3B0aW9ucy5qc29uIiwgInNyYy9EaWZmTGluay9tb2R1bGVzL2FwaS50cyIsICJzcmMvRGlmZkxpbmsvbW9kdWxlcy91dGlsL3F1ZXJ5QXBpLnRzIiwgInNyYy9EaWZmTGluay9tb2R1bGVzL2NvbXBhcmVXaXRoUmVtb3RlRGlmZklkLnRzIiwgInNyYy9EaWZmTGluay9tb2R1bGVzL3Byb2Nlc3NJZC50cyIsICJzcmMvRGlmZkxpbmsvRGlmZkxpbmsudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IGNoZWNrRGlmZlBhZ2UgPSAoJGNvbnRlbnQ6IEpRdWVyeSk6IGJvb2xlYW4gPT4ge1xuXHRjb25zdCB7d2dDdXJSZXZpc2lvbklkfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0cmV0dXJuICRjb250ZW50LmZpbmQoJ3RhYmxlJykuaGFzQ2xhc3MoJ2RpZmYnKSAmJiAhIXdnQ3VyUmV2aXNpb25JZDtcbn07XG5cbmV4cG9ydCB7Y2hlY2tEaWZmUGFnZX07XG4iLCAiY29uc3QgY2hlY2tSZXZpc2lvblBhZ2UgPSAoJGNvbnRlbnQ6IEpRdWVyeSk6IGJvb2xlYW4gPT4ge1xuXHRyZXR1cm4gKFxuXHRcdCgkY29udGVudC5maW5kKCcjY29udGVudFN1YiAjbXctcmV2aXNpb24tbmF2JykubGVuZ3RoIHx8XG5cdFx0XHQkY29udGVudC5maW5kKCdtYWluI2NvbnRlbnQ+LnByZS1jb250ZW50ICNtdy1yZXZpc2lvbi1uYXYnKS5sZW5ndGgpID4gMFxuXHQpO1xufTtcblxuZXhwb3J0IHtjaGVja1JldmlzaW9uUGFnZX07XG4iLCAiaW1wb3J0IHt0eXBlIEFwcCBhcyBWdWVBcHAsIGNyZWF0ZUFwcH0gZnJvbSAndnVlJztcbmltcG9ydCBBcHAgZnJvbSAnLi4vQXBwLnZ1ZSc7XG5pbXBvcnQge2FkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcn0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuLyohXG4gKiDoi6Xmg7Poh6rlrprkuYnlpI3liLbnu5PmnpzkuK3nmoTmlofmnKzlj6/pgJrov4flkJHoh6rlt7HnmoRjb21tb24uanPkuK3liqDlhaXku6XkuIvlhoXlrrnvvJpcbiAqICAgd2luZG93LkRpZmZMaW5rID0gWyfniYjmnKzlt67lvIInLCAn5Zu65a6a54mI5pysJ107XG4gKiDoi6Xmg7Pkvb/nlKjpu5jorqTlgLwx77yM5L2G6Ieq5a6a5YC8Mu+8jOivt+WwhuWAvDHnlZnnqbrvvIzlpoLkuIvkvovvvJpcbiAqICAgd2luZG93LkRpZmZMaW5rID0gWycnLCAn5Zu65a6a54mI5pysJ107XG4gKi9cbmNvbnN0IGRlZmF1bHRUZXh0QXJyYXk6IFtzdHJpbmcsIHN0cmluZ10gPSBbZ2V0TWVzc2FnZSgnRGlmZlZlcnNpb24nKSwgZ2V0TWVzc2FnZSgnUGVybWFuZW50VmVyc2lvbicpXTtcblxuY29uc3QgYXBwbHlDdXN0b21UZXh0ID0gKGluZGV4OiAwIHwgMSwgdmFsdWU6IHVua25vd24pOiB2b2lkID0+IHtcblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUubGVuZ3RoID4gMCkge1xuXHRcdGRlZmF1bHRUZXh0QXJyYXlbaW5kZXhdID0gdmFsdWU7XG5cdH1cbn07XG5cbmlmIChBcnJheS5pc0FycmF5KHdpbmRvdy5EaWZmTGluaykpIHtcblx0YXBwbHlDdXN0b21UZXh0KDAsIHdpbmRvdy5EaWZmTGlua1swXSk7XG5cdGFwcGx5Q3VzdG9tVGV4dCgxLCB3aW5kb3cuRGlmZkxpbmtbMV0pO1xufVxuXG5sZXQgZXZlbnRMaXN0ZW5lcjogUmV0dXJuVHlwZTx0eXBlb2YgYWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyPiA9IHtcblx0cmVtb3ZlOiAoKTogdm9pZCA9PiB7fSxcbn07XG5cbmNvbnN0IG9wZW5EaWFsb2cgPSAoaXRlbXM6IHtsYWJlbDogc3RyaW5nOyB0ZXh0OiBzdHJpbmd9W10pOiB2b2lkID0+IHtcblx0Y29uc3Qgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRkb2N1bWVudC5ib2R5LmFwcGVuZChyb290KTtcblxuXHRjb25zdCBhcHA6IFZ1ZUFwcDxFbGVtZW50PiB8IG51bGwgPSBjcmVhdGVBcHAoQXBwLCB7XG5cdFx0b3BlbjogdHJ1ZSxcblx0XHRpdGVtcyxcblx0XHRvbkNsb3NlOiAoKTogdm9pZCA9PiB7XG5cdFx0XHRhcHA/LnVubW91bnQoKTtcblx0XHRcdHJvb3QucmVtb3ZlKCk7XG5cdFx0fSxcblx0fSk7XG5cdGFwcC5tb3VudChyb290KTtcbn07XG5cbmNvbnN0IGFkZFBvcnRsZXRMaW5rID0gKHtcblx0dGV4dCxcblx0dG9vbHRpcCxcblx0bGluayxcblx0ZGVmYXVsdFRleHRBcnJheUluZGV4LFxuXHRpc1Blcm1hTGluayxcbn06IHtcblx0dGV4dDogc3RyaW5nO1xuXHR0b29sdGlwOiBzdHJpbmc7XG5cdGxpbms6IHN0cmluZztcblx0ZGVmYXVsdFRleHRBcnJheUluZGV4OiBudW1iZXI7XG5cdGlzUGVybWFMaW5rPzogYm9vbGVhbjtcbn0pOiB2b2lkID0+IHtcblx0bGV0IGVsZW1lbnQ6IEhUTUxMSUVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3QtZGlmZmxpbmsnKTtcblx0aWYgKCFlbGVtZW50KSB7XG5cdFx0Y29uc3QgcG9ydGxldElkOiAncC1jYWN0aW9ucycgfCAncC10YicgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcC1jYWN0aW9ucycpID8gJ3AtY2FjdGlvbnMnIDogJ3AtdGInO1xuXHRcdGVsZW1lbnQgPSBtdy51dGlsLmFkZFBvcnRsZXRMaW5rKHBvcnRsZXRJZCwgJyMnLCB0ZXh0LCAndC1kaWZmbGluaycsIHRvb2x0aXApO1xuXHR9XG5cdGlmICghZWxlbWVudCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGNsaWNrTGlzdGVuZXIgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkID0+IHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGNvbnN0IGhhc2g6IHN0cmluZyA9IGlzUGVybWFMaW5rID8gZGVjb2RlVVJJQ29tcG9uZW50KGxvY2F0aW9uLmhhc2gpIDogJyc7XG5cdFx0Y29uc3QgaXRlbXMgPSBbXG5cdFx0XHR7bGFiZWw6IGxpbmssIHRleHQ6IGxpbmt9LFxuXHRcdFx0e2xhYmVsOiBgW1ske2xpbmt9JHtoYXNofV1dYCwgdGV4dDogYFtbJHtsaW5rfSR7aGFzaH1dXWB9LFxuXHRcdFx0e1xuXHRcdFx0XHRsYWJlbDogYFtbJHtsaW5rfSR7aGFzaH18JHtkZWZhdWx0VGV4dEFycmF5W2RlZmF1bHRUZXh0QXJyYXlJbmRleF19XV1gLFxuXHRcdFx0XHR0ZXh0OiBgW1ske2xpbmt9JHtoYXNofXwke2RlZmF1bHRUZXh0QXJyYXlbZGVmYXVsdFRleHRBcnJheUluZGV4XX1dXWAsXG5cdFx0XHR9LFxuXHRcdF07XG5cdFx0b3BlbkRpYWxvZyhpdGVtcyk7XG5cdH07XG5cblx0ZXZlbnRMaXN0ZW5lci5yZW1vdmUoKTtcblx0ZXZlbnRMaXN0ZW5lciA9IGFkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcih7XG5cdFx0dGFyZ2V0OiAoZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCA/PyBlbGVtZW50KSBhcyBIVE1MRWxlbWVudCxcblx0XHR0eXBlOiAnY2xpY2snLFxuXHRcdGxpc3RlbmVyOiBjbGlja0xpc3RlbmVyLFxuXHR9KTtcbn07XG5cbmV4cG9ydCB7YWRkUG9ydGxldExpbmt9O1xuIiwgIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge0NkeEJ1dHRvbiwgQ2R4RGlhbG9nLCBDZHhJY29ufSBmcm9tICdAd2lraW1lZGlhL2NvZGV4JztcbmltcG9ydCB7cmVmLCB3YXRjaH0gZnJvbSAndnVlJztcbmltcG9ydCB7Y29weVRleHR9IGZyb20gJy4vbW9kdWxlcy9jb3B5VGV4dCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vbW9kdWxlcy9pMThuJztcblxuaW50ZXJmYWNlIENvcHlJdGVtIHtcblx0bGFiZWw6IHN0cmluZztcblx0dGV4dDogc3RyaW5nO1xufVxuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcblx0b3BlbjogYm9vbGVhbjtcblx0aXRlbXM6IENvcHlJdGVtW107XG5cdG9uQ2xvc2U6ICgpID0+IHZvaWQ7XG59PigpO1xuXG5jb25zdCBlbWl0ID0gZGVmaW5lRW1pdHM8e1xuXHQndXBkYXRlOm9wZW4nOiBbdmFsdWU6IGJvb2xlYW5dO1xufT4oKTtcbmNvbnN0IGlzT3BlbiA9IHJlZihwcm9wcy5vcGVuKTtcblxud2F0Y2goXG5cdCgpID0+IHByb3BzLm9wZW4sXG5cdCh2YWx1ZSkgPT4ge1xuXHRcdGlzT3Blbi52YWx1ZSA9IHZhbHVlO1xuXHR9LFxuXHR7aW1tZWRpYXRlOiB0cnVlfVxuKTtcblxuY29uc3QgY2xvc2UgPSAoKTogdm9pZCA9PiB7XG5cdGlzT3Blbi52YWx1ZSA9IGZhbHNlO1xuXHRlbWl0KCd1cGRhdGU6b3BlbicsIGZhbHNlKTtcblx0cHJvcHMub25DbG9zZSgpO1xufTtcblxuY29uc3QgaGFuZGxlT3BlbkNoYW5nZSA9ICh2YWx1ZTogYm9vbGVhbik6IHZvaWQgPT4ge1xuXHRpc09wZW4udmFsdWUgPSB2YWx1ZTtcblx0aWYgKCF2YWx1ZSkge1xuXHRcdGNsb3NlKCk7XG5cdH1cbn07XG5cbi8qKlxuICogU1ZHIHBhdGhzIGlubGluZWQgZnJvbSBgQHdpa2ltZWRpYS9jb2RleC1pY29uc2AgdjIuNy4wLlxuICpcbiAqIE1lZGlhV2lraSBkb2VzIG5vdCBzaGlwIGEgUmVzb3VyY2VMb2FkZXIgbW9kdWxlIHRoYXQgYnVuZGxlc1xuICogYEB3aWtpbWVkaWEvY29kZXgtaWNvbnNgIChzZWUgaHR0cHM6Ly93d3cubWVkaWF3aWtpLm9yZy93aWtpL0NvZGV4KSxcbiAqIHNvIHRoZSBwYXRoIGRhdGEgaXMgY29waWVkIGhlcmUgdmVyYmF0aW0gYW5kIHJlbmRlcmVkIGFzIGlubGluZSBTVkdcbiAqIHRvIGtlZXAgdGhlIGdhZGdldCBzZWxmLWNvbnRhaW5lZCB3aGlsZSBzdGlsbCBzb3VyY2luZyB0aGUgaWNvbnNcbiAqIGZyb20gYEB3aWtpbWVkaWEvY29kZXgtaWNvbnNgLlxuICpcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vZG9jLndpa2ltZWRpYS5vcmcvY29kZXgvbGF0ZXN0L2ljb25zL31cbiAqL1xuXG4vKiogUGF0aCBmb3IgYGNkeEljb25Db3B5YC4gKi9cbmNvbnN0IGNkeEljb25Db3B5ID0ge1xuXHRwYXRoOiAnTTEzIDE5SDFWN2g2VjFoMTJ2MTJoLTZ6bS02LTZWOUgzdjhoOHYtNHptMi0yaDhWM0g5eicsXG5cdHNob3VsZEZsaXA6IHRydWUsXG59O1xuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cblx0PGNkeC1kaWFsb2dcblx0XHR2LW1vZGVsOm9wZW49XCJpc09wZW5cIlxuXHRcdDp0aXRsZT1cImdldE1lc3NhZ2UoJ0RpZmYnKVwiXG5cdFx0OmRlZmF1bHQtYWN0aW9uPVwie2xhYmVsOiBnZXRNZXNzYWdlKCdDbG9zZScpfVwiXG5cdFx0OnVzZS1jbG9zZS1idXR0b249XCJ0cnVlXCJcblx0XHRAdXBkYXRlOm9wZW49XCJoYW5kbGVPcGVuQ2hhbmdlXCJcblx0XHRAZGVmYXVsdD1cImNsb3NlXCJcblx0PlxuXHRcdDxkaXYgY2xhc3M9XCJkaWZmLWxpbmstY29weS1saXN0XCI+XG5cdFx0XHQ8ZGl2IHYtZm9yPVwiaXRlbSBpbiBpdGVtc1wiIDprZXk9XCJpdGVtLnRleHRcIiBjbGFzcz1cImRpZmYtbGluay1jb3B5LWl0ZW1cIj5cblx0XHRcdFx0PGNvZGUgY2xhc3M9XCJkaWZmLWxpbmstY29weS10ZXh0XCI+e3sgaXRlbS50ZXh0IH19PC9jb2RlPlxuXHRcdFx0XHQ8Y2R4LWJ1dHRvbiB3ZWlnaHQ9XCJub3JtYWxcIiA6YXJpYS1sYWJlbD1cImdldE1lc3NhZ2UoJ0NvcHknKVwiIEBjbGljaz1cImNvcHlUZXh0KGl0ZW0udGV4dClcIj5cblx0XHRcdFx0XHQ8Y2R4LWljb24gOmljb249XCJjZHhJY29uQ29weVwiIC8+XG5cdFx0XHRcdFx0e3sgZ2V0TWVzc2FnZSgnQ29weScpIH19XG5cdFx0XHRcdDwvY2R4LWJ1dHRvbj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L2NkeC1kaWFsb2c+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJsZXNzXCI+XG4uZGlmZi1saW5rLWNvcHktbGlzdCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMC43NXJlbTtcbn1cblxuLmRpZmYtbGluay1jb3B5LWl0ZW0ge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRnYXA6IDAuNXJlbTtcblx0ZmxleC13cmFwOiB3cmFwO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5kaWZmLWxpbmstY29weS10ZXh0IHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xuXHRib3JkZXI6IDFweCBzb2xpZCAjZWFlY2YwO1xuXHRib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuXHRiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuXHRjb2xvcjogIzIwMjEyMjtcblx0Zm9udC1zaXplOiAwLjg3NXJlbTtcblx0d29yZC1icmVhazogYnJlYWstYWxsO1xuXHRmbGV4OiAxIDEgMTAwJTtcbn1cbjwvc3R5bGU+XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCdOZXR3b3JrIGVycm9yJzogbG9jYWxpemUoe1xuXHRcdFx0amE6ICfjg43jg4Pjg4jjg6/jg7zjgq/jgqjjg6njg7wnLFxuXHRcdFx0J3poLWhhbnMnOiAn572R57uc5byC5bi4Jyxcblx0XHRcdCd6aC1oYW50JzogJ+e2sui3r+eVsOW4uCcsXG5cdFx0fSksXG5cdFx0Q2xvc2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ2xvc2UnLFxuXHRcdFx0amE6ICfplonjgZjjgosnLFxuXHRcdFx0J3poLWhhbnMnOiAn5YWz6ZetJyxcblx0XHRcdCd6aC1oYW50JzogJ+mXnOmWiScsXG5cdFx0fSksXG5cdFx0Q29weTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDb3B5Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+WkjeWIticsXG5cdFx0XHQnemgtaGFudCc6ICflvqnoo70nLFxuXHRcdH0pLFxuXHRcdENvcGllZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDb3BpZWQuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3suWkjeWIticsXG5cdFx0XHQnemgtaGFudCc6ICflt7Llvqnoo70nLFxuXHRcdH0pLFxuXHRcdCdDb3B5IGZhaWxlZCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRmFpbGVkIHRvIGNvcHkuJyxcblx0XHRcdGphOiAn44Kz44OU44O844Gr5aSx5pWX44GX44G+44GX44Gf44CCJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WkjeWItuWksei0pScsXG5cdFx0XHQnemgtaGFudCc6ICfopIfoo73lpLHmlZcnLFxuXHRcdH0pLFxuXHRcdENvcHlEaWZmOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NvcHkgdGhlIGxpbmsgdG8gdGhlIGRpZmYgdmVyc2lvbiAod2lraSBzeW50YXgpJyxcblx0XHRcdGphOiAn54++5Zyo44Gu54mI6ZaT44Gu5beu5YiG44Oq44Oz44Kv44KS44Kz44OU44O844GX44G+44GZ77yI44Km44Kj44Kt6KiY5rOV77yJJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WkjeWItumTvuaOpeWIsOW9k+WJjeW3ruW8gueJiOacrOeahOe7tOWfuuivreazlScsXG5cdFx0XHQnemgtaGFudCc6ICfopIfoo73pgKPntZDliLDnlbbliY3lt67nlbDniYjmnKznmoTntq3ln7roqp7ms5UnLFxuXHRcdH0pLFxuXHRcdENvcHlQZXJtYW5lbnQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ29weSB0aGUgcGVybWFuZW50IGxpbmsgdG8gdGhlIGN1cnJlbnQgdmVyc2lvbiAod2lraSBzeW50YXgpJyxcblx0XHRcdGphOiAn44GT44Gu44Oa44O844K444Gu44GT44Gu54mI44G444Gu5Zu65a6a44Oq44Oz44Kv44KS44Kz44OU44O844GX44G+44GZ77yI44Km44Kj44Kt6KiY5rOV77yJJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WkjeWItumTvuaOpeWIsOW9k+WJjeS/ruiuoueJiOacrOeahOe7tOWfuuivreazlScsXG5cdFx0XHQnemgtaGFudCc6ICfopIfoo73pgKPntZDliLDnlbbliY3kv67oqILniYjmnKznmoTntq3ln7roqp7ms5UnLFxuXHRcdH0pLFxuXHRcdERpZmY6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRGlmZiBsaW5rJyxcblx0XHRcdGphOiAn54++5Zyo44Gu54mI6ZaT44Gu5beu5YiG44Oq44Oz44KvJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W9k+WJjeW3ruW8gumTvuaOpScsXG5cdFx0XHQnemgtaGFudCc6ICfnlbbliY3lt67nlbDpgKPntZAnLFxuXHRcdH0pLFxuXHRcdERpZmZWZXJzaW9uOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2RpZmYgdmVyc2lvbicsXG5cdFx0XHRqYTogJ+eJiOmWk+OBruW3ruWIhicsXG5cdFx0XHQnemgtaGFucyc6ICflt67lvILniYjmnKwnLFxuXHRcdFx0J3poLWhhbnQnOiAn5beu55Ww54mI5pysJyxcblx0XHR9KSxcblx0XHRQZXJtYW5lbnQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUGVybWFuZW50IGxpbmsnLFxuXHRcdFx0amE6ICfjgZPjga7niYjjgbjjga7lm7rlrprjg6rjg7Pjgq8nLFxuXHRcdFx0J3poLWhhbnMnOiAn5b2T5YmN5L+u6K6i6ZO+5o6lJyxcblx0XHRcdCd6aC1oYW50JzogJ+eVtuWJjeS/ruiogumAo+e1kCcsXG5cdFx0fSksXG5cdFx0UGVybWFuZW50VmVyc2lvbjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdwZXJtYW5lbnQgdmVyc2lvbicsXG5cdFx0XHRqYTogJ+eJiOOBuOOBruWbuuWumuODquODs+OCrycsXG5cdFx0XHQnemgtaGFucyc6ICflm7rlrprniYjmnKzpk77mjqUnLFxuXHRcdFx0J3poLWhhbnQnOiAn5Zu65a6a54mI5pys6YCj57WQJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBjb3B5VGV4dCA9IGFzeW5jICh0ZXh0OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3QgY29weVdpdGhFeGVjQ29tbWFuZCA9ICgpOiB2b2lkID0+IHtcblx0XHRjb25zdCBoZWxwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuXHRcdGhlbHBlci52YWx1ZSA9IHRleHQ7XG5cdFx0aGVscGVyLnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCAndHJ1ZScpO1xuXHRcdGhlbHBlci5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG5cdFx0aGVscGVyLnN0eWxlLnRvcCA9ICctOTk5OXB4Jztcblx0XHRoZWxwZXIuc3R5bGUubGVmdCA9ICctOTk5OXB4Jztcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZChoZWxwZXIpO1xuXHRcdHRyeSB7XG5cdFx0XHRoZWxwZXIuc2VsZWN0KCk7XG5cdFx0XHRpZiAoIWRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5JykpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIikgZmFpbGVkJyk7XG5cdFx0XHR9XG5cdFx0fSBmaW5hbGx5IHtcblx0XHRcdGhlbHBlci5yZW1vdmUoKTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgY29weSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRpZiAobmF2aWdhdG9yLmNsaXBib2FyZCAmJiB3aW5kb3cuaXNTZWN1cmVDb250ZXh0KSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRhd2FpdCBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh0ZXh0KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRjb3B5V2l0aEV4ZWNDb21tYW5kKCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9IGNhdGNoIChmYWxsYmFja0Vycm9yKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcignW0RpZmZMaW5rXSBDbGlwYm9hcmQgQVBJIGFuZCBmYWxsYmFjayBjb3B5IGZhaWxlZDonLCBlcnJvciwgZmFsbGJhY2tFcnJvcik7XG5cdFx0XHRcdFx0dGhyb3cgZmFsbGJhY2tFcnJvcjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGNvcHlXaXRoRXhlY0NvbW1hbmQoKTtcblx0fTtcblxuXHR0cnkge1xuXHRcdGF3YWl0IGNvcHkoKTtcblx0XHR2b2lkIG13Lm5vdGlmeShnZXRNZXNzYWdlKCdDb3BpZWQnKSwge1xuXHRcdFx0dHlwZTogJ3N1Y2Nlc3MnLFxuXHRcdFx0dGFnOiAnRGlmZkxpbmsnLFxuXHRcdH0pO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ1tEaWZmTGlua10gRmFpbGVkIHRvIGNvcHkgdGV4dDonLCBlcnJvcik7XG5cdFx0dm9pZCBtdy5ub3RpZnkoZ2V0TWVzc2FnZSgnQ29weSBmYWlsZWQnKSwge1xuXHRcdFx0dHlwZTogJ2Vycm9yJyxcblx0XHRcdHRhZzogJ0RpZmZMaW5rJyxcblx0XHR9KTtcblx0fVxufTtcblxuZXhwb3J0IHtjb3B5VGV4dH07XG4iLCAiaW1wb3J0IHsgcmVuZGVyTGlzdCBhcyBfcmVuZGVyTGlzdCwgRnJhZ21lbnQgYXMgX0ZyYWdtZW50LCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2ssIHRvRGlzcGxheVN0cmluZyBhcyBfdG9EaXNwbGF5U3RyaW5nLCBjcmVhdGVFbGVtZW50Vk5vZGUgYXMgX2NyZWF0ZUVsZW1lbnRWTm9kZSwgY3JlYXRlVk5vZGUgYXMgX2NyZWF0ZVZOb2RlLCBjcmVhdGVUZXh0Vk5vZGUgYXMgX2NyZWF0ZVRleHRWTm9kZSwgd2l0aEN0eCBhcyBfd2l0aEN0eCwgY3JlYXRlQmxvY2sgYXMgX2NyZWF0ZUJsb2NrIH0gZnJvbSBcInZ1ZVwiXG5cbmNvbnN0IF9ob2lzdGVkXzEgPSB7IGNsYXNzOiBcImRpZmYtbGluay1jb3B5LWxpc3RcIiB9XG5jb25zdCBfaG9pc3RlZF8yID0geyBjbGFzczogXCJkaWZmLWxpbmstY29weS10ZXh0XCIgfVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSwgJHByb3BzLCAkc2V0dXAsICRkYXRhLCAkb3B0aW9ucykge1xuICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKCRzZXR1cFtcIkNkeERpYWxvZ1wiXSwge1xuICAgIG9wZW46ICRzZXR1cC5pc09wZW4sXG4gICAgXCJvblVwZGF0ZTpvcGVuXCI6IFtcbiAgICAgIF9jYWNoZVswXSB8fCAoX2NhY2hlWzBdID0gJGV2ZW50ID0+ICgoJHNldHVwLmlzT3BlbikgPSAkZXZlbnQpKSxcbiAgICAgICRzZXR1cC5oYW5kbGVPcGVuQ2hhbmdlXG4gICAgXSxcbiAgICB0aXRsZTogJHNldHVwLmdldE1lc3NhZ2UoJ0RpZmYnKSxcbiAgICBcImRlZmF1bHQtYWN0aW9uXCI6IHtsYWJlbDogJHNldHVwLmdldE1lc3NhZ2UoJ0Nsb3NlJyl9LFxuICAgIFwidXNlLWNsb3NlLWJ1dHRvblwiOiB0cnVlLFxuICAgIG9uRGVmYXVsdDogJHNldHVwLmNsb3NlXG4gIH0sIHtcbiAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzEsIFtcbiAgICAgICAgKF9vcGVuQmxvY2sodHJ1ZSksIF9jcmVhdGVFbGVtZW50QmxvY2soX0ZyYWdtZW50LCBudWxsLCBfcmVuZGVyTGlzdCgkcHJvcHMuaXRlbXMsIChpdGVtKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJkaXZcIiwge1xuICAgICAgICAgICAga2V5OiBpdGVtLnRleHQsXG4gICAgICAgICAgICBjbGFzczogXCJkaWZmLWxpbmstY29weS1pdGVtXCJcbiAgICAgICAgICB9LCBbXG4gICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiY29kZVwiLCBfaG9pc3RlZF8yLCBfdG9EaXNwbGF5U3RyaW5nKGl0ZW0udGV4dCksIDEgLyogVEVYVCAqLyksXG4gICAgICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiQ2R4QnV0dG9uXCJdLCB7XG4gICAgICAgICAgICAgIHdlaWdodDogXCJub3JtYWxcIixcbiAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsXCI6ICRzZXR1cC5nZXRNZXNzYWdlKCdDb3B5JyksXG4gICAgICAgICAgICAgIG9uQ2xpY2s6ICRldmVudCA9PiAoJHNldHVwLmNvcHlUZXh0KGl0ZW0udGV4dCkpXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiQ2R4SWNvblwiXSwgeyBpY29uOiAkc2V0dXAuY2R4SWNvbkNvcHkgfSksXG4gICAgICAgICAgICAgICAgX2NyZWF0ZVRleHRWTm9kZShcIiBcIiArIF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLmdldE1lc3NhZ2UoJ0NvcHknKSksIDEgLyogVEVYVCAqLylcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgICAgICAgICB9LCA4IC8qIFBST1BTICovLCBbXCJhcmlhLWxhYmVsXCIsIFwib25DbGlja1wiXSlcbiAgICAgICAgICBdKSlcbiAgICAgICAgfSksIDEyOCAvKiBLRVlFRF9GUkFHTUVOVCAqLykpXG4gICAgICBdKVxuICAgIF0pLFxuICAgIF86IDEgLyogU1RBQkxFICovXG4gIH0sIDggLyogUFJPUFMgKi8sIFtcIm9wZW5cIiwgXCJ0aXRsZVwiLCBcImRlZmF1bHQtYWN0aW9uXCJdKSlcbn0iLCAiaW1wb3J0IHNjcmlwdCBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxEaWZmTGlua1xcXFxBcHAudnVlP3R5cGU9c2NyaXB0XCI7aW1wb3J0IFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxEaWZmTGlua1xcXFxBcHAudnVlP3R5cGU9c3R5bGUmaW5kZXg9MFwiO2ltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXERpZmZMaW5rXFxcXEFwcC52dWU/dHlwZT10ZW1wbGF0ZVwiOyBzY3JpcHQucmVuZGVyID0gcmVuZGVyO3NjcmlwdC5fX2ZpbGUgPSBcInNyY1xcXFxEaWZmTGlua1xcXFxBcHAudnVlXCI7c2NyaXB0Ll9fc2NvcGVJZCA9IFwiZGF0YS12LWFlMjY1YzZmXCI7ZXhwb3J0IGRlZmF1bHQgc2NyaXB0OyIsICJpbXBvcnQge2FkZFBvcnRsZXRMaW5rfSBmcm9tICcuL2FkZFBvcnRsZXRMaW5rJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgYnVpbGRMaW5rID0gKG9sZElkOiBudW1iZXIgfCBudWxsLCBkaWZmSWQ6IG51bWJlcik6IHZvaWQgPT4ge1xuXHRsZXQgbGluazogc3RyaW5nID0gJ1NwZWNpYWw6RGlmZi8nO1xuXHRpZiAob2xkSWQpIHtcblx0XHRsaW5rICs9IGAke29sZElkfS9gO1xuXHR9XG5cdGxpbmsgKz0gZGlmZklkO1xuXG5cdGFkZFBvcnRsZXRMaW5rKHtcblx0XHRsaW5rLFxuXHRcdHRleHQ6IGdldE1lc3NhZ2UoJ0RpZmYnKSxcblx0XHR0b29sdGlwOiBnZXRNZXNzYWdlKCdDb3B5RGlmZicpLFxuXHRcdGRlZmF1bHRUZXh0QXJyYXlJbmRleDogMCxcblx0fSk7XG59O1xuXG5leHBvcnQge2J1aWxkTGlua307XG4iLCAie1xuXHRcInZlcnNpb25cIjogXCIyLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgRGlmZkxpbmsvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi4vYXBpJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxudHlwZSBDb21wYXJlUmVzcG9uc2UgPSB7XG5cdGNvbXBhcmU/OiB7XG5cdFx0ZnJvbXJldmlkOiBudW1iZXI7XG5cdH07XG59O1xuXG5jb25zdCBwYXJhbWV0ZXJzOiBBcGlDb21wYXJlUGFnZXNQYXJhbXMgPSB7XG5cdGFjdGlvbjogJ2NvbXBhcmUnLFxuXHRmb3JtYXQ6ICdqc29uJyxcblx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRwcm9wOiAnaWRzJyxcblx0dG9yZWxhdGl2ZTogJ3ByZXYnLFxuXHRzbWF4YWdlOiA2MDAsXG5cdG1heGFnZTogNjAwLFxufTtcblxuY29uc3QgcXVlcnlBcGkgPSBhc3luYyAoZGlmZklkOiBudW1iZXIpOiBQcm9taXNlPENvbXBhcmVSZXNwb25zZT4gPT4ge1xuXHR0cnkge1xuXHRcdHJldHVybiBhd2FpdCBhcGkuZ2V0KHtcblx0XHRcdC4uLnBhcmFtZXRlcnMsXG5cdFx0XHRmcm9tcmV2OiBkaWZmSWQsXG5cdFx0fSBhcyB0eXBlb2YgcGFyYW1ldGVycyk7XG5cdH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG5cdFx0Y29uc29sZS5lcnJvcignW0RpZmZMaW5rXSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0XHR0b2FzdGlmeShcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnTmV0d29yayBlcnJvcicpLFxuXHRcdFx0XHRjbG9zZTogdHJ1ZSxcblx0XHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdFx0fSxcblx0XHRcdCdlcnJvcidcblx0XHQpO1xuXG5cdFx0cmV0dXJuIHt9O1xuXHR9XG59O1xuXG5leHBvcnQge3F1ZXJ5QXBpfTtcbiIsICJpbXBvcnQge2J1aWxkTGlua30gZnJvbSAnLi9idWlsZExpbmsnO1xuaW1wb3J0IHtxdWVyeUFwaX0gZnJvbSAnLi91dGlsL3F1ZXJ5QXBpJztcblxuY29uc3QgY29tcGFyZVdpdGhSZW1vdGVEaWZmSWQgPSBhc3luYyAoZGlmZklkOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3QgcmVzcG9uc2U6IEF3YWl0ZWQ8UmV0dXJuVHlwZTx0eXBlb2YgcXVlcnlBcGk+PiA9IGF3YWl0IHF1ZXJ5QXBpKGRpZmZJZCk7XG5cdGNvbnN0IHt3Z0RpZmZOZXdJZCwgd2dEaWZmT2xkSWR9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRpZiAoZGlmZklkID09PSB3Z0RpZmZOZXdJZCAmJiByZXNwb25zZVsnY29tcGFyZSddPy5mcm9tcmV2aWQgPT09IHdnRGlmZk9sZElkKSB7XG5cdFx0YnVpbGRMaW5rKDAsIGRpZmZJZCk7XG5cdH1cbn07XG5cbmV4cG9ydCB7Y29tcGFyZVdpdGhSZW1vdGVEaWZmSWR9O1xuIiwgImltcG9ydCB7YWRkUG9ydGxldExpbmt9IGZyb20gJy4vYWRkUG9ydGxldExpbmsnO1xuaW1wb3J0IHtidWlsZExpbmt9IGZyb20gJy4vYnVpbGRMaW5rJztcbmltcG9ydCB7Y29tcGFyZVdpdGhSZW1vdGVEaWZmSWR9IGZyb20gJy4vY29tcGFyZVdpdGhSZW1vdGVEaWZmSWQnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBwcm9jZXNzSWQgPSAoXG5cdGlzUmV2aXNpb25QYWdlOiBib29sZWFuLFxuXHR7ZGlmZklkLCBvbGRJZCwgcmV2aXNpb25JZH06IHtkaWZmSWQ6IG51bWJlciB8IG51bGw7IG9sZElkOiBudW1iZXIgfCBudWxsOyByZXZpc2lvbklkOiBudW1iZXIgfCBudWxsfVxuKTogdm9pZCA9PiB7XG5cdGlmIChkaWZmSWQpIHtcblx0XHRidWlsZExpbmsob2xkSWQsIGRpZmZJZCk7XG5cdFx0aWYgKG9sZElkKSB7XG5cdFx0XHR2b2lkIGNvbXBhcmVXaXRoUmVtb3RlRGlmZklkKGRpZmZJZCk7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKHJldmlzaW9uSWQgJiYgaXNSZXZpc2lvblBhZ2UpIHtcblx0XHRhZGRQb3J0bGV0TGluayh7XG5cdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdQZXJtYW5lbnQnKSxcblx0XHRcdHRvb2x0aXA6IGdldE1lc3NhZ2UoJ0NvcHlQZXJtYW5lbnQnKSxcblx0XHRcdGxpbms6IGBTcGVjaWFsOlBlcm1hTGluay8ke3JldmlzaW9uSWR9YCxcblx0XHRcdGRlZmF1bHRUZXh0QXJyYXlJbmRleDogMSxcblx0XHRcdGlzUGVybWFMaW5rOiB0cnVlLFxuXHRcdH0pO1xuXHR9XG59O1xuXG5leHBvcnQge3Byb2Nlc3NJZH07XG4iLCAiaW1wb3J0IHtjaGVja0RpZmZQYWdlfSBmcm9tICcuL21vZHVsZXMvdXRpbC9jaGVja0RpZmZQYWdlJztcbmltcG9ydCB7Y2hlY2tSZXZpc2lvblBhZ2V9IGZyb20gJy4vbW9kdWxlcy91dGlsL2NoZWNrUmV2aXNpb25QYWdlJztcbmltcG9ydCB7cHJvY2Vzc0lkfSBmcm9tICcuL21vZHVsZXMvcHJvY2Vzc0lkJztcblxubXcuaG9vaygnd2lraXBhZ2UuY29udGVudCcpLmFkZChmdW5jdGlvbiBkaWZmTGluaygkY29udGVudCk6IHZvaWQge1xuXHRpZiAoJGNvbnRlbnQuYXR0cignaWQnKSAhPT0gJ213LWNvbnRlbnQtdGV4dCcpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBpc0RpZmZQYWdlOiBib29sZWFuID0gY2hlY2tEaWZmUGFnZSgkY29udGVudCk7XG5cdGNvbnN0IGlzUmV2aXNpb25QYWdlOiBib29sZWFuID0gY2hlY2tSZXZpc2lvblBhZ2UoJGNvbnRlbnQpO1xuXHRpZiAoIWlzRGlmZlBhZ2UgJiYgIWlzUmV2aXNpb25QYWdlKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qge3dnRGlmZk5ld0lkLCB3Z0RpZmZPbGRJZCwgd2dSZXZpc2lvbklkfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRwcm9jZXNzSWQoaXNSZXZpc2lvblBhZ2UsIHtcblx0XHRkaWZmSWQ6IHdnRGlmZk5ld0lkID8/IG51bGwsXG5cdFx0b2xkSWQ6IHdnRGlmZk9sZElkID8/IG51bGwsXG5cdFx0cmV2aXNpb25JZDogd2dSZXZpc2lvbklkID8/IG51bGwsXG5cdH0pO1xufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLGdCQUFpQkMsY0FBOEI7QUFDcEQsUUFBTTtJQUFDQztFQUFlLElBQUlDLEdBQUdDLE9BQU9DLElBQUk7QUFDeEMsU0FBT0osU0FBU0ssS0FBSyxPQUFPLEVBQUVDLFNBQVMsTUFBTSxLQUFLLENBQUMsQ0FBQ0w7QUFDckQ7O0FDSEEsSUFBTU0sb0JBQXFCUCxjQUE4QjtBQUN4RCxVQUNFQSxTQUFTSyxLQUFLLDhCQUE4QixFQUFFRyxVQUM5Q1IsU0FBU0ssS0FBSyw0Q0FBNEMsRUFBRUcsVUFBVTtBQUV6RTs7QUNMQSxJQUFBQyxjQUE0Q0MsUUFBQSxLQUFBOztBQ0M1QyxJQUFBQyxlQUE0Q0QsUUFBQSxrQkFBQTtBQUM1QyxJQUFBRSxjQUF5QkYsUUFBQSxLQUFBOztBQ0Z6QixJQUFBRyxvQkFBdUJILFFBQUEsaUJBQUE7QUFFdkIsSUFBTUksa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTixrQkFBQSxHQUFpQkQsa0JBQUFFLFVBQVM7TUFDekJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREMsUUFBQSxHQUFPSixrQkFBQUUsVUFBUztNQUNmRyxJQUFJO01BQ0pGLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREcsT0FBQSxHQUFNTixrQkFBQUUsVUFBUztNQUNkRyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RFLFNBQUEsR0FBUVAsa0JBQUFFLFVBQVM7TUFDaEJHLElBQUk7TUFDSixXQUFXO01B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LGlCQUFBLFFBQUFBLGlCQUFBLFNBQUFBLGVBQWdCO0VBQzdCLENBQUM7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJjaGVja0RpZmZQYWdlIiwgIiRjb250ZW50IiwgIndnQ3VyUmV2aXNpb25JZCIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImZpbmQiLCAiaGFzQ2xhc3MiLCAiY2hlY2tSZXZpc2lvblBhZ2UiLCAibGVuZ3RoIiwgImltcG9ydF92dWU0IiwgInJlcXVpcmUiLCAiaW1wb3J0X2NvZGV4IiwgImltcG9ydF92dWUyIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJsb2NhbGl6ZSIsICJqYSIsICJDbG9zZSIsICJlbiIsICJDb3B5IiwgIkNvcGllZCIsICJDb3B5RGlmZiIsICJDb3B5UGVybWFuZW50IiwgIkRpZmYiLCAiRGlmZlZlcnNpb24iLCAiUGVybWFuZW50IiwgIlBlcm1hbmVudFZlcnNpb24iLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImNvcHlUZXh0IiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAidGV4dCIsICJjb3B5V2l0aEV4ZWNDb21tYW5kIiwgImhlbHBlciIsICJkb2N1bWVudCIsICJjcmVhdGVFbGVtZW50IiwgInZhbHVlIiwgInNldEF0dHJpYnV0ZSIsICJzdHlsZSIsICJwb3NpdGlvbiIsICJ0b3AiLCAibGVmdCIsICJib2R5IiwgImFwcGVuZCIsICJzZWxlY3QiLCAiZXhlY0NvbW1hbmQiLCAiRXJyb3IiLCAicmVtb3ZlIiwgImNvcHkiLCAiX3JlZjIiLCAibmF2aWdhdG9yIiwgImNsaXBib2FyZCIsICJ3aW5kb3ciLCAiaXNTZWN1cmVDb250ZXh0IiwgIndyaXRlVGV4dCIsICJlcnJvciIsICJmYWxsYmFja0Vycm9yIiwgImNvbnNvbGUiLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgIm5vdGlmeSIsICJ0eXBlIiwgInRhZyIsICJfeCIsICJwcm9wcyIsICJfX3Byb3BzIiwgImVtaXQiLCAiX19lbWl0IiwgImlzT3BlbiIsICJyZWYiLCAib3BlbiIsICJ3YXRjaCIsICJpbW1lZGlhdGUiLCAiY2xvc2UiLCAib25DbG9zZSIsICJoYW5kbGVPcGVuQ2hhbmdlIiwgImNkeEljb25Db3B5IiwgInBhdGgiLCAic2hvdWxkRmxpcCIsICJpbXBvcnRfdnVlMyIsICJfaG9pc3RlZF8xIiwgImNsYXNzIiwgIl9ob2lzdGVkXzIiLCAicmVuZGVyIiwgIl9jdHgiLCAiX2NhY2hlIiwgIiRwcm9wcyIsICIkc2V0dXAiLCAiJGRhdGEiLCAiJG9wdGlvbnMiLCAib3BlbkJsb2NrIiwgImNyZWF0ZUJsb2NrIiwgIiRldmVudCIsICJ0aXRsZSIsICJsYWJlbCIsICJvbkRlZmF1bHQiLCAiZGVmYXVsdCIsICJ3aXRoQ3R4IiwgImNyZWF0ZUVsZW1lbnRWTm9kZSIsICJjcmVhdGVFbGVtZW50QmxvY2siLCAiRnJhZ21lbnQiLCAicmVuZGVyTGlzdCIsICJpdGVtcyIsICJpdGVtIiwgInRvRGlzcGxheVN0cmluZyIsICJjcmVhdGVWTm9kZSIsICJ3ZWlnaHQiLCAib25DbGljayIsICJpY29uIiwgImNyZWF0ZVRleHRWTm9kZSIsICJfIiwgIkFwcF9kZWZhdWx0IiwgIl9fZmlsZSIsICJfX3Njb3BlSWQiLCAiQXBwX2RlZmF1bHQyIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJkZWZhdWx0VGV4dEFycmF5IiwgImFwcGx5Q3VzdG9tVGV4dCIsICJpbmRleCIsICJBcnJheSIsICJpc0FycmF5IiwgIkRpZmZMaW5rIiwgImV2ZW50TGlzdGVuZXIiLCAib3BlbkRpYWxvZyIsICJyb290IiwgImFwcCIsICJjcmVhdGVBcHAiLCAidW5tb3VudCIsICJtb3VudCIsICJhZGRQb3J0bGV0TGluayIsICJ0b29sdGlwIiwgImxpbmsiLCAiZGVmYXVsdFRleHRBcnJheUluZGV4IiwgImlzUGVybWFMaW5rIiwgIl9lbGVtZW50JGZpcnN0RWxlbWVudCIsICJlbGVtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAicG9ydGxldElkIiwgInV0aWwiLCAiY2xpY2tMaXN0ZW5lciIsICJldmVudCIsICJwcmV2ZW50RGVmYXVsdCIsICJoYXNoIiwgImRlY29kZVVSSUNvbXBvbmVudCIsICJsb2NhdGlvbiIsICJjb25jYXQiLCAiYWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyIiwgInRhcmdldCIsICJmaXJzdEVsZW1lbnRDaGlsZCIsICJsaXN0ZW5lciIsICJidWlsZExpbmsiLCAib2xkSWQiLCAiZGlmZklkIiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImFwaSIsICJpbml0TXdBcGkiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgInBhcmFtZXRlcnMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAidG9yZWxhdGl2ZSIsICJzbWF4YWdlIiwgIm1heGFnZSIsICJxdWVyeUFwaSIsICJfcmVmMyIsICJmcm9tcmV2IiwgInRvYXN0aWZ5IiwgImR1cmF0aW9uIiwgIl94MiIsICJjb21wYXJlV2l0aFJlbW90ZURpZmZJZCIsICJfcmVmNCIsICJfcmVzcG9uc2UkY29tcGFyZSIsICJyZXNwb25zZSIsICJ3Z0RpZmZOZXdJZCIsICJ3Z0RpZmZPbGRJZCIsICJmcm9tcmV2aWQiLCAiX3gzIiwgInByb2Nlc3NJZCIsICJpc1JldmlzaW9uUGFnZSIsICJyZXZpc2lvbklkIiwgImhvb2siLCAiYWRkIiwgImRpZmZMaW5rIiwgImF0dHIiLCAiaXNEaWZmUGFnZSIsICJ3Z1JldmlzaW9uSWQiXQp9Cg==

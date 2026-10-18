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
var copyText = (text) => {
  _asyncToGenerator(function* () {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        yield navigator.clipboard.writeText(text);
        return;
      }
    } catch {
    }
    const helper = document.createElement("textarea");
    helper.value = text;
    helper.setAttribute("readonly", "true");
    helper.style.position = "fixed";
    helper.style.top = "-9999px";
    helper.style.left = "-9999px";
    document.body.append(helper);
    helper.select();
    document.execCommand("copy");
    helper.remove();
  })().then(() => {
    void mw.notify(getMessage("Copied"), {
      type: "success",
      tag: "DiffLinks"
    });
  });
};
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
  var _ref2 = _asyncToGenerator(function* (diffId) {
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
  return function queryApi2(_x) {
    return _ref2.apply(this, arguments);
  };
})();
//! src/DiffLink/modules/compareWithRemoteDiffId.ts
var compareWithRemoteDiffId = /* @__PURE__ */ (function() {
  var _ref3 = _asyncToGenerator(function* (diffId) {
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
  return function compareWithRemoteDiffId2(_x2) {
    return _ref3.apply(this, arguments);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0RpZmZMaW5rL21vZHVsZXMvdXRpbC9jaGVja0RpZmZQYWdlLnRzIiwgInNyYy9EaWZmTGluay9tb2R1bGVzL3V0aWwvY2hlY2tSZXZpc2lvblBhZ2UudHMiLCAic3JjL0RpZmZMaW5rL21vZHVsZXMvYWRkUG9ydGxldExpbmsudHMiLCAiZGlzdC9EaWZmTGluay9zcmMvRGlmZkxpbmsvQXBwLnZ1ZSIsICJzcmMvRGlmZkxpbmsvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9EaWZmTGluay9tb2R1bGVzL2NvcHlUZXh0LnRzIiwgInNmYy10ZW1wbGF0ZTpFOlxcQ29kZXNcXFFpdXdlblxcUWl1d2VuR2FkZ2V0c1xcc3JjXFxEaWZmTGlua1xcQXBwLnZ1ZT90eXBlPXRlbXBsYXRlIiwgInNyYy9EaWZmTGluay9BcHAudnVlIiwgInNyYy9EaWZmTGluay9tb2R1bGVzL2J1aWxkTGluay50cyIsICJzcmMvRGlmZkxpbmsvb3B0aW9ucy5qc29uIiwgInNyYy9EaWZmTGluay9tb2R1bGVzL2FwaS50cyIsICJzcmMvRGlmZkxpbmsvbW9kdWxlcy91dGlsL3F1ZXJ5QXBpLnRzIiwgInNyYy9EaWZmTGluay9tb2R1bGVzL2NvbXBhcmVXaXRoUmVtb3RlRGlmZklkLnRzIiwgInNyYy9EaWZmTGluay9tb2R1bGVzL3Byb2Nlc3NJZC50cyIsICJzcmMvRGlmZkxpbmsvRGlmZkxpbmsudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IGNoZWNrRGlmZlBhZ2UgPSAoJGNvbnRlbnQ6IEpRdWVyeSk6IGJvb2xlYW4gPT4ge1xuXHRjb25zdCB7d2dDdXJSZXZpc2lvbklkfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0cmV0dXJuICRjb250ZW50LmZpbmQoJ3RhYmxlJykuaGFzQ2xhc3MoJ2RpZmYnKSAmJiAhIXdnQ3VyUmV2aXNpb25JZDtcbn07XG5cbmV4cG9ydCB7Y2hlY2tEaWZmUGFnZX07XG4iLCAiY29uc3QgY2hlY2tSZXZpc2lvblBhZ2UgPSAoJGNvbnRlbnQ6IEpRdWVyeSk6IGJvb2xlYW4gPT4ge1xuXHRyZXR1cm4gKFxuXHRcdCgkY29udGVudC5maW5kKCcjY29udGVudFN1YiAjbXctcmV2aXNpb24tbmF2JykubGVuZ3RoIHx8XG5cdFx0XHQkY29udGVudC5maW5kKCdtYWluI2NvbnRlbnQ+LnByZS1jb250ZW50ICNtdy1yZXZpc2lvbi1uYXYnKS5sZW5ndGgpID4gMFxuXHQpO1xufTtcblxuZXhwb3J0IHtjaGVja1JldmlzaW9uUGFnZX07XG4iLCAiaW1wb3J0IHt0eXBlIEFwcCBhcyBWdWVBcHAsIGNyZWF0ZUFwcH0gZnJvbSAndnVlJztcbmltcG9ydCBBcHAgZnJvbSAnLi4vQXBwLnZ1ZSc7XG5pbXBvcnQge2FkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcn0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuLyohXG4gKiDoi6Xmg7Poh6rlrprkuYnlpI3liLbnu5PmnpzkuK3nmoTmlofmnKzlj6/pgJrov4flkJHoh6rlt7HnmoRjb21tb24uanPkuK3liqDlhaXku6XkuIvlhoXlrrnvvJpcbiAqICAgd2luZG93LkRpZmZMaW5rID0gWyfniYjmnKzlt67lvIInLCAn5Zu65a6a54mI5pysJ107XG4gKiDoi6Xmg7Pkvb/nlKjpu5jorqTlgLwx77yM5L2G6Ieq5a6a5YC8Mu+8jOivt+WwhuWAvDHnlZnnqbrvvIzlpoLkuIvkvovvvJpcbiAqICAgd2luZG93LkRpZmZMaW5rID0gWycnLCAn5Zu65a6a54mI5pysJ107XG4gKi9cbmNvbnN0IGRlZmF1bHRUZXh0QXJyYXk6IFtzdHJpbmcsIHN0cmluZ10gPSBbZ2V0TWVzc2FnZSgnRGlmZlZlcnNpb24nKSwgZ2V0TWVzc2FnZSgnUGVybWFuZW50VmVyc2lvbicpXTtcblxuY29uc3QgYXBwbHlDdXN0b21UZXh0ID0gKGluZGV4OiAwIHwgMSwgdmFsdWU6IHVua25vd24pOiB2b2lkID0+IHtcblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUubGVuZ3RoID4gMCkge1xuXHRcdGRlZmF1bHRUZXh0QXJyYXlbaW5kZXhdID0gdmFsdWU7XG5cdH1cbn07XG5cbmlmIChBcnJheS5pc0FycmF5KHdpbmRvdy5EaWZmTGluaykpIHtcblx0YXBwbHlDdXN0b21UZXh0KDAsIHdpbmRvdy5EaWZmTGlua1swXSk7XG5cdGFwcGx5Q3VzdG9tVGV4dCgxLCB3aW5kb3cuRGlmZkxpbmtbMV0pO1xufVxuXG5sZXQgZXZlbnRMaXN0ZW5lcjogUmV0dXJuVHlwZTx0eXBlb2YgYWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyPiA9IHtcblx0cmVtb3ZlOiAoKTogdm9pZCA9PiB7fSxcbn07XG5cbmNvbnN0IG9wZW5EaWFsb2cgPSAoaXRlbXM6IHtsYWJlbDogc3RyaW5nOyB0ZXh0OiBzdHJpbmd9W10pOiB2b2lkID0+IHtcblx0Y29uc3Qgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRkb2N1bWVudC5ib2R5LmFwcGVuZChyb290KTtcblxuXHRjb25zdCBhcHA6IFZ1ZUFwcDxFbGVtZW50PiB8IG51bGwgPSBjcmVhdGVBcHAoQXBwLCB7XG5cdFx0b3BlbjogdHJ1ZSxcblx0XHRpdGVtcyxcblx0XHRvbkNsb3NlOiAoKTogdm9pZCA9PiB7XG5cdFx0XHRhcHA/LnVubW91bnQoKTtcblx0XHRcdHJvb3QucmVtb3ZlKCk7XG5cdFx0fSxcblx0fSk7XG5cdGFwcC5tb3VudChyb290KTtcbn07XG5cbmNvbnN0IGFkZFBvcnRsZXRMaW5rID0gKHtcblx0dGV4dCxcblx0dG9vbHRpcCxcblx0bGluayxcblx0ZGVmYXVsdFRleHRBcnJheUluZGV4LFxuXHRpc1Blcm1hTGluayxcbn06IHtcblx0dGV4dDogc3RyaW5nO1xuXHR0b29sdGlwOiBzdHJpbmc7XG5cdGxpbms6IHN0cmluZztcblx0ZGVmYXVsdFRleHRBcnJheUluZGV4OiBudW1iZXI7XG5cdGlzUGVybWFMaW5rPzogYm9vbGVhbjtcbn0pOiB2b2lkID0+IHtcblx0bGV0IGVsZW1lbnQ6IEhUTUxMSUVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3QtZGlmZmxpbmsnKTtcblx0aWYgKCFlbGVtZW50KSB7XG5cdFx0Y29uc3QgcG9ydGxldElkOiAncC1jYWN0aW9ucycgfCAncC10YicgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcC1jYWN0aW9ucycpID8gJ3AtY2FjdGlvbnMnIDogJ3AtdGInO1xuXHRcdGVsZW1lbnQgPSBtdy51dGlsLmFkZFBvcnRsZXRMaW5rKHBvcnRsZXRJZCwgJyMnLCB0ZXh0LCAndC1kaWZmbGluaycsIHRvb2x0aXApO1xuXHR9XG5cdGlmICghZWxlbWVudCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGNsaWNrTGlzdGVuZXIgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkID0+IHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGNvbnN0IGhhc2g6IHN0cmluZyA9IGlzUGVybWFMaW5rID8gZGVjb2RlVVJJQ29tcG9uZW50KGxvY2F0aW9uLmhhc2gpIDogJyc7XG5cdFx0Y29uc3QgaXRlbXMgPSBbXG5cdFx0XHR7bGFiZWw6IGxpbmssIHRleHQ6IGxpbmt9LFxuXHRcdFx0e2xhYmVsOiBgW1ske2xpbmt9JHtoYXNofV1dYCwgdGV4dDogYFtbJHtsaW5rfSR7aGFzaH1dXWB9LFxuXHRcdFx0e1xuXHRcdFx0XHRsYWJlbDogYFtbJHtsaW5rfSR7aGFzaH18JHtkZWZhdWx0VGV4dEFycmF5W2RlZmF1bHRUZXh0QXJyYXlJbmRleF19XV1gLFxuXHRcdFx0XHR0ZXh0OiBgW1ske2xpbmt9JHtoYXNofXwke2RlZmF1bHRUZXh0QXJyYXlbZGVmYXVsdFRleHRBcnJheUluZGV4XX1dXWAsXG5cdFx0XHR9LFxuXHRcdF07XG5cdFx0b3BlbkRpYWxvZyhpdGVtcyk7XG5cdH07XG5cblx0ZXZlbnRMaXN0ZW5lci5yZW1vdmUoKTtcblx0ZXZlbnRMaXN0ZW5lciA9IGFkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcih7XG5cdFx0dGFyZ2V0OiAoZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCA/PyBlbGVtZW50KSBhcyBIVE1MRWxlbWVudCxcblx0XHR0eXBlOiAnY2xpY2snLFxuXHRcdGxpc3RlbmVyOiBjbGlja0xpc3RlbmVyLFxuXHR9KTtcbn07XG5cbmV4cG9ydCB7YWRkUG9ydGxldExpbmt9O1xuIiwgIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge0NkeEJ1dHRvbiwgQ2R4RGlhbG9nLCBDZHhJY29ufSBmcm9tICdAd2lraW1lZGlhL2NvZGV4JztcbmltcG9ydCB7cmVmLCB3YXRjaH0gZnJvbSAndnVlJztcbmltcG9ydCB7Y29weVRleHR9IGZyb20gJy4vbW9kdWxlcy9jb3B5VGV4dCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vbW9kdWxlcy9pMThuJztcblxuaW50ZXJmYWNlIENvcHlJdGVtIHtcblx0bGFiZWw6IHN0cmluZztcblx0dGV4dDogc3RyaW5nO1xufVxuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcblx0b3BlbjogYm9vbGVhbjtcblx0aXRlbXM6IENvcHlJdGVtW107XG5cdG9uQ2xvc2U6ICgpID0+IHZvaWQ7XG59PigpO1xuXG5jb25zdCBlbWl0ID0gZGVmaW5lRW1pdHM8e1xuXHQndXBkYXRlOm9wZW4nOiBbdmFsdWU6IGJvb2xlYW5dO1xufT4oKTtcbmNvbnN0IGlzT3BlbiA9IHJlZihwcm9wcy5vcGVuKTtcblxud2F0Y2goXG5cdCgpID0+IHByb3BzLm9wZW4sXG5cdCh2YWx1ZSkgPT4ge1xuXHRcdGlzT3Blbi52YWx1ZSA9IHZhbHVlO1xuXHR9LFxuXHR7aW1tZWRpYXRlOiB0cnVlfVxuKTtcblxuY29uc3QgY2xvc2UgPSAoKTogdm9pZCA9PiB7XG5cdGlzT3Blbi52YWx1ZSA9IGZhbHNlO1xuXHRlbWl0KCd1cGRhdGU6b3BlbicsIGZhbHNlKTtcblx0cHJvcHMub25DbG9zZSgpO1xufTtcblxuY29uc3QgaGFuZGxlT3BlbkNoYW5nZSA9ICh2YWx1ZTogYm9vbGVhbik6IHZvaWQgPT4ge1xuXHRpc09wZW4udmFsdWUgPSB2YWx1ZTtcblx0aWYgKCF2YWx1ZSkge1xuXHRcdGNsb3NlKCk7XG5cdH1cbn07XG5cbi8qKlxuICogU1ZHIHBhdGhzIGlubGluZWQgZnJvbSBgQHdpa2ltZWRpYS9jb2RleC1pY29uc2AgdjIuNy4wLlxuICpcbiAqIE1lZGlhV2lraSBkb2VzIG5vdCBzaGlwIGEgUmVzb3VyY2VMb2FkZXIgbW9kdWxlIHRoYXQgYnVuZGxlc1xuICogYEB3aWtpbWVkaWEvY29kZXgtaWNvbnNgIChzZWUgaHR0cHM6Ly93d3cubWVkaWF3aWtpLm9yZy93aWtpL0NvZGV4KSxcbiAqIHNvIHRoZSBwYXRoIGRhdGEgaXMgY29waWVkIGhlcmUgdmVyYmF0aW0gYW5kIHJlbmRlcmVkIGFzIGlubGluZSBTVkdcbiAqIHRvIGtlZXAgdGhlIGdhZGdldCBzZWxmLWNvbnRhaW5lZCB3aGlsZSBzdGlsbCBzb3VyY2luZyB0aGUgaWNvbnNcbiAqIGZyb20gYEB3aWtpbWVkaWEvY29kZXgtaWNvbnNgLlxuICpcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vZG9jLndpa2ltZWRpYS5vcmcvY29kZXgvbGF0ZXN0L2ljb25zL31cbiAqL1xuXG4vKiogUGF0aCBmb3IgYGNkeEljb25Db3B5YC4gKi9cbmNvbnN0IGNkeEljb25Db3B5ID0ge1xuXHRwYXRoOiAnTTEzIDE5SDFWN2g2VjFoMTJ2MTJoLTZ6bS02LTZWOUgzdjhoOHYtNHptMi0yaDhWM0g5eicsXG5cdHNob3VsZEZsaXA6IHRydWUsXG59O1xuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cblx0PGNkeC1kaWFsb2dcblx0XHR2LW1vZGVsOm9wZW49XCJpc09wZW5cIlxuXHRcdDp0aXRsZT1cImdldE1lc3NhZ2UoJ0RpZmYnKVwiXG5cdFx0OmRlZmF1bHQtYWN0aW9uPVwie2xhYmVsOiBnZXRNZXNzYWdlKCdDbG9zZScpfVwiXG5cdFx0OnVzZS1jbG9zZS1idXR0b249XCJ0cnVlXCJcblx0XHRAdXBkYXRlOm9wZW49XCJoYW5kbGVPcGVuQ2hhbmdlXCJcblx0XHRAZGVmYXVsdD1cImNsb3NlXCJcblx0PlxuXHRcdDxkaXYgY2xhc3M9XCJkaWZmLWxpbmstY29weS1saXN0XCI+XG5cdFx0XHQ8ZGl2IHYtZm9yPVwiaXRlbSBpbiBpdGVtc1wiIDprZXk9XCJpdGVtLnRleHRcIiBjbGFzcz1cImRpZmYtbGluay1jb3B5LWl0ZW1cIj5cblx0XHRcdFx0PGNvZGUgY2xhc3M9XCJkaWZmLWxpbmstY29weS10ZXh0XCI+e3sgaXRlbS50ZXh0IH19PC9jb2RlPlxuXHRcdFx0XHQ8Y2R4LWJ1dHRvbiB3ZWlnaHQ9XCJub3JtYWxcIiA6YXJpYS1sYWJlbD1cImdldE1lc3NhZ2UoJ0NvcHknKVwiIEBjbGljaz1cImNvcHlUZXh0KGl0ZW0udGV4dClcIj5cblx0XHRcdFx0XHQ8Y2R4LWljb24gOmljb249XCJjZHhJY29uQ29weVwiIC8+XG5cdFx0XHRcdFx0e3sgZ2V0TWVzc2FnZSgnQ29weScpIH19XG5cdFx0XHRcdDwvY2R4LWJ1dHRvbj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L2NkeC1kaWFsb2c+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJsZXNzXCI+XG4uZGlmZi1saW5rLWNvcHktbGlzdCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMC43NXJlbTtcbn1cblxuLmRpZmYtbGluay1jb3B5LWl0ZW0ge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRnYXA6IDAuNXJlbTtcblx0ZmxleC13cmFwOiB3cmFwO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5kaWZmLWxpbmstY29weS10ZXh0IHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xuXHRib3JkZXI6IDFweCBzb2xpZCAjZWFlY2YwO1xuXHRib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuXHRiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuXHRjb2xvcjogIzIwMjEyMjtcblx0Zm9udC1zaXplOiAwLjg3NXJlbTtcblx0d29yZC1icmVhazogYnJlYWstYWxsO1xuXHRmbGV4OiAxIDEgMTAwJTtcbn1cbjwvc3R5bGU+XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCdOZXR3b3JrIGVycm9yJzogbG9jYWxpemUoe1xuXHRcdFx0amE6ICfjg43jg4Pjg4jjg6/jg7zjgq/jgqjjg6njg7wnLFxuXHRcdFx0J3poLWhhbnMnOiAn572R57uc5byC5bi4Jyxcblx0XHRcdCd6aC1oYW50JzogJ+e2sui3r+eVsOW4uCcsXG5cdFx0fSksXG5cdFx0Q2xvc2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ2xvc2UnLFxuXHRcdFx0amE6ICfplonjgZjjgosnLFxuXHRcdFx0J3poLWhhbnMnOiAn5YWz6ZetJyxcblx0XHRcdCd6aC1oYW50JzogJ+mXnOmWiScsXG5cdFx0fSksXG5cdFx0Q29weTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDb3B5Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+WkjeWIticsXG5cdFx0XHQnemgtaGFudCc6ICflvqnoo70nLFxuXHRcdH0pLFxuXHRcdENvcGllZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDb3BpZWQuJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3suWkjeWIticsXG5cdFx0XHQnemgtaGFudCc6ICflt7Llvqnoo70nLFxuXHRcdH0pLFxuXHRcdENvcHlEaWZmOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NvcHkgdGhlIGxpbmsgdG8gdGhlIGRpZmYgdmVyc2lvbiAod2lraSBzeW50YXgpJyxcblx0XHRcdGphOiAn54++5Zyo44Gu54mI6ZaT44Gu5beu5YiG44Oq44Oz44Kv44KS44Kz44OU44O844GX44G+44GZ77yI44Km44Kj44Kt6KiY5rOV77yJJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WkjeWItumTvuaOpeWIsOW9k+WJjeW3ruW8gueJiOacrOeahOe7tOWfuuivreazlScsXG5cdFx0XHQnemgtaGFudCc6ICfopIfoo73pgKPntZDliLDnlbbliY3lt67nlbDniYjmnKznmoTntq3ln7roqp7ms5UnLFxuXHRcdH0pLFxuXHRcdENvcHlQZXJtYW5lbnQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ29weSB0aGUgcGVybWFuZW50IGxpbmsgdG8gdGhlIGN1cnJlbnQgdmVyc2lvbiAod2lraSBzeW50YXgpJyxcblx0XHRcdGphOiAn44GT44Gu44Oa44O844K444Gu44GT44Gu54mI44G444Gu5Zu65a6a44Oq44Oz44Kv44KS44Kz44OU44O844GX44G+44GZ77yI44Km44Kj44Kt6KiY5rOV77yJJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WkjeWItumTvuaOpeWIsOW9k+WJjeS/ruiuoueJiOacrOeahOe7tOWfuuivreazlScsXG5cdFx0XHQnemgtaGFudCc6ICfopIfoo73pgKPntZDliLDnlbbliY3kv67oqILniYjmnKznmoTntq3ln7roqp7ms5UnLFxuXHRcdH0pLFxuXHRcdERpZmY6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRGlmZiBsaW5rJyxcblx0XHRcdGphOiAn54++5Zyo44Gu54mI6ZaT44Gu5beu5YiG44Oq44Oz44KvJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W9k+WJjeW3ruW8gumTvuaOpScsXG5cdFx0XHQnemgtaGFudCc6ICfnlbbliY3lt67nlbDpgKPntZAnLFxuXHRcdH0pLFxuXHRcdERpZmZWZXJzaW9uOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2RpZmYgdmVyc2lvbicsXG5cdFx0XHRqYTogJ+eJiOmWk+OBruW3ruWIhicsXG5cdFx0XHQnemgtaGFucyc6ICflt67lvILniYjmnKwnLFxuXHRcdFx0J3poLWhhbnQnOiAn5beu55Ww54mI5pysJyxcblx0XHR9KSxcblx0XHRQZXJtYW5lbnQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUGVybWFuZW50IGxpbmsnLFxuXHRcdFx0amE6ICfjgZPjga7niYjjgbjjga7lm7rlrprjg6rjg7Pjgq8nLFxuXHRcdFx0J3poLWhhbnMnOiAn5b2T5YmN5L+u6K6i6ZO+5o6lJyxcblx0XHRcdCd6aC1oYW50JzogJ+eVtuWJjeS/ruiogumAo+e1kCcsXG5cdFx0fSksXG5cdFx0UGVybWFuZW50VmVyc2lvbjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdwZXJtYW5lbnQgdmVyc2lvbicsXG5cdFx0XHRqYTogJ+eJiOOBuOOBruWbuuWumuODquODs+OCrycsXG5cdFx0XHQnemgtaGFucyc6ICflm7rlrprniYjmnKzpk77mjqUnLFxuXHRcdFx0J3poLWhhbnQnOiAn5Zu65a6a54mI5pys6YCj57WQJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBjb3B5VGV4dCA9ICh0ZXh0OiBzdHJpbmcpOiB2b2lkID0+IHtcblx0KGFzeW5jICgpID0+IHtcblx0XHR0cnkge1xuXHRcdFx0aWYgKG5hdmlnYXRvci5jbGlwYm9hcmQgJiYgd2luZG93LmlzU2VjdXJlQ29udGV4dCkge1xuXHRcdFx0XHRhd2FpdCBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh0ZXh0KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge31cblxuXHRcdGNvbnN0IGhlbHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG5cdFx0aGVscGVyLnZhbHVlID0gdGV4dDtcblx0XHRoZWxwZXIuc2V0QXR0cmlidXRlKCdyZWFkb25seScsICd0cnVlJyk7XG5cdFx0aGVscGVyLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcblx0XHRoZWxwZXIuc3R5bGUudG9wID0gJy05OTk5cHgnO1xuXHRcdGhlbHBlci5zdHlsZS5sZWZ0ID0gJy05OTk5cHgnO1xuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kKGhlbHBlcik7XG5cdFx0aGVscGVyLnNlbGVjdCgpO1xuXHRcdGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XG5cdFx0aGVscGVyLnJlbW92ZSgpO1xuXHR9KSgpLnRoZW4oKCkgPT4ge1xuXHRcdHZvaWQgbXcubm90aWZ5KGdldE1lc3NhZ2UoJ0NvcGllZCcpLCB7XG5cdFx0XHR0eXBlOiAnc3VjY2VzcycsXG5cdFx0XHR0YWc6ICdEaWZmTGlua3MnLFxuXHRcdH0pO1xuXHR9KTtcbn07XG5cbmV4cG9ydCB7Y29weVRleHR9O1xuIiwgImltcG9ydCB7IHJlbmRlckxpc3QgYXMgX3JlbmRlckxpc3QsIEZyYWdtZW50IGFzIF9GcmFnbWVudCwgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBfY3JlYXRlRWxlbWVudEJsb2NrLCB0b0Rpc3BsYXlTdHJpbmcgYXMgX3RvRGlzcGxheVN0cmluZywgY3JlYXRlRWxlbWVudFZOb2RlIGFzIF9jcmVhdGVFbGVtZW50Vk5vZGUsIGNyZWF0ZVZOb2RlIGFzIF9jcmVhdGVWTm9kZSwgY3JlYXRlVGV4dFZOb2RlIGFzIF9jcmVhdGVUZXh0Vk5vZGUsIHdpdGhDdHggYXMgX3dpdGhDdHgsIGNyZWF0ZUJsb2NrIGFzIF9jcmVhdGVCbG9jayB9IGZyb20gXCJ2dWVcIlxuXG5jb25zdCBfaG9pc3RlZF8xID0geyBjbGFzczogXCJkaWZmLWxpbmstY29weS1saXN0XCIgfVxuY29uc3QgX2hvaXN0ZWRfMiA9IHsgY2xhc3M6IFwiZGlmZi1saW5rLWNvcHktdGV4dFwiIH1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcbiAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jaygkc2V0dXBbXCJDZHhEaWFsb2dcIl0sIHtcbiAgICBvcGVuOiAkc2V0dXAuaXNPcGVuLFxuICAgIFwib25VcGRhdGU6b3BlblwiOiBbXG4gICAgICBfY2FjaGVbMF0gfHwgKF9jYWNoZVswXSA9ICRldmVudCA9PiAoKCRzZXR1cC5pc09wZW4pID0gJGV2ZW50KSksXG4gICAgICAkc2V0dXAuaGFuZGxlT3BlbkNoYW5nZVxuICAgIF0sXG4gICAgdGl0bGU6ICRzZXR1cC5nZXRNZXNzYWdlKCdEaWZmJyksXG4gICAgXCJkZWZhdWx0LWFjdGlvblwiOiB7bGFiZWw6ICRzZXR1cC5nZXRNZXNzYWdlKCdDbG9zZScpfSxcbiAgICBcInVzZS1jbG9zZS1idXR0b25cIjogdHJ1ZSxcbiAgICBvbkRlZmF1bHQ6ICRzZXR1cC5jbG9zZVxuICB9LCB7XG4gICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF8xLCBbXG4gICAgICAgIChfb3BlbkJsb2NrKHRydWUpLCBfY3JlYXRlRWxlbWVudEJsb2NrKF9GcmFnbWVudCwgbnVsbCwgX3JlbmRlckxpc3QoJHByb3BzLml0ZW1zLCAoaXRlbSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZGl2XCIsIHtcbiAgICAgICAgICAgIGtleTogaXRlbS50ZXh0LFxuICAgICAgICAgICAgY2xhc3M6IFwiZGlmZi1saW5rLWNvcHktaXRlbVwiXG4gICAgICAgICAgfSwgW1xuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImNvZGVcIiwgX2hvaXN0ZWRfMiwgX3RvRGlzcGxheVN0cmluZyhpdGVtLnRleHQpLCAxIC8qIFRFWFQgKi8pLFxuICAgICAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkNkeEJ1dHRvblwiXSwge1xuICAgICAgICAgICAgICB3ZWlnaHQ6IFwibm9ybWFsXCIsXG4gICAgICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiAkc2V0dXAuZ2V0TWVzc2FnZSgnQ29weScpLFxuICAgICAgICAgICAgICBvbkNsaWNrOiAkZXZlbnQgPT4gKCRzZXR1cC5jb3B5VGV4dChpdGVtLnRleHQpKVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgICAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkNkeEljb25cIl0sIHsgaWNvbjogJHNldHVwLmNkeEljb25Db3B5IH0pLFxuICAgICAgICAgICAgICAgIF9jcmVhdGVUZXh0Vk5vZGUoXCIgXCIgKyBfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5nZXRNZXNzYWdlKCdDb3B5JykpLCAxIC8qIFRFWFQgKi8pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgICAgICAgICAgfSwgOCAvKiBQUk9QUyAqLywgW1wiYXJpYS1sYWJlbFwiLCBcIm9uQ2xpY2tcIl0pXG4gICAgICAgICAgXSkpXG4gICAgICAgIH0pLCAxMjggLyogS0VZRURfRlJBR01FTlQgKi8pKVxuICAgICAgXSlcbiAgICBdKSxcbiAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICB9LCA4IC8qIFBST1BTICovLCBbXCJvcGVuXCIsIFwidGl0bGVcIiwgXCJkZWZhdWx0LWFjdGlvblwiXSkpXG59IiwgImltcG9ydCBzY3JpcHQgZnJvbSBcIkU6XFxcXENvZGVzXFxcXFFpdXdlblxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxEaWZmTGlua1xcXFxBcHAudnVlP3R5cGU9c2NyaXB0XCI7aW1wb3J0IFwiRTpcXFxcQ29kZXNcXFxcUWl1d2VuXFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXERpZmZMaW5rXFxcXEFwcC52dWU/dHlwZT1zdHlsZSZpbmRleD0wXCI7aW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIkU6XFxcXENvZGVzXFxcXFFpdXdlblxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxEaWZmTGlua1xcXFxBcHAudnVlP3R5cGU9dGVtcGxhdGVcIjsgc2NyaXB0LnJlbmRlciA9IHJlbmRlcjtzY3JpcHQuX19maWxlID0gXCJzcmNcXFxcRGlmZkxpbmtcXFxcQXBwLnZ1ZVwiO3NjcmlwdC5fX3Njb3BlSWQgPSBcImRhdGEtdi1hZTI2NWM2ZlwiO2V4cG9ydCBkZWZhdWx0IHNjcmlwdDsiLCAiaW1wb3J0IHthZGRQb3J0bGV0TGlua30gZnJvbSAnLi9hZGRQb3J0bGV0TGluayc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IGJ1aWxkTGluayA9IChvbGRJZDogbnVtYmVyIHwgbnVsbCwgZGlmZklkOiBudW1iZXIpOiB2b2lkID0+IHtcblx0bGV0IGxpbms6IHN0cmluZyA9ICdTcGVjaWFsOkRpZmYvJztcblx0aWYgKG9sZElkKSB7XG5cdFx0bGluayArPSBgJHtvbGRJZH0vYDtcblx0fVxuXHRsaW5rICs9IGRpZmZJZDtcblxuXHRhZGRQb3J0bGV0TGluayh7XG5cdFx0bGluayxcblx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdEaWZmJyksXG5cdFx0dG9vbHRpcDogZ2V0TWVzc2FnZSgnQ29weURpZmYnKSxcblx0XHRkZWZhdWx0VGV4dEFycmF5SW5kZXg6IDAsXG5cdH0pO1xufTtcblxuZXhwb3J0IHtidWlsZExpbmt9O1xuIiwgIntcblx0XCJ2ZXJzaW9uXCI6IFwiMi4wXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYERpZmZMaW5rLyR7T1BUSU9OUy52ZXJzaW9ufWApO1xuXG5leHBvcnQge2FwaX07XG4iLCAiaW1wb3J0IHthcGl9IGZyb20gJy4uL2FwaSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuaW1wb3J0IHt0b2FzdGlmeX0gZnJvbSAnZXh0LmdhZGdldC5Ub2FzdGlmeSc7XG5cbnR5cGUgQ29tcGFyZVJlc3BvbnNlID0ge1xuXHRjb21wYXJlPzoge1xuXHRcdGZyb21yZXZpZDogbnVtYmVyO1xuXHR9O1xufTtcblxuY29uc3QgcGFyYW1ldGVyczogQXBpQ29tcGFyZVBhZ2VzUGFyYW1zID0ge1xuXHRhY3Rpb246ICdjb21wYXJlJyxcblx0Zm9ybWF0OiAnanNvbicsXG5cdGZvcm1hdHZlcnNpb246ICcyJyxcblx0cHJvcDogJ2lkcycsXG5cdHRvcmVsYXRpdmU6ICdwcmV2Jyxcblx0c21heGFnZTogNjAwLFxuXHRtYXhhZ2U6IDYwMCxcbn07XG5cbmNvbnN0IHF1ZXJ5QXBpID0gYXN5bmMgKGRpZmZJZDogbnVtYmVyKTogUHJvbWlzZTxDb21wYXJlUmVzcG9uc2U+ID0+IHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gYXdhaXQgYXBpLmdldCh7XG5cdFx0XHQuLi5wYXJhbWV0ZXJzLFxuXHRcdFx0ZnJvbXJldjogZGlmZklkLFxuXHRcdH0gYXMgdHlwZW9mIHBhcmFtZXRlcnMpO1xuXHR9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ1tEaWZmTGlua10gQWpheCBlcnJvcjonLCBlcnJvcik7XG5cdFx0dG9hc3RpZnkoXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ05ldHdvcmsgZXJyb3InKSxcblx0XHRcdFx0Y2xvc2U6IHRydWUsXG5cdFx0XHRcdGR1cmF0aW9uOiAtMSxcblx0XHRcdH0sXG5cdFx0XHQnZXJyb3InXG5cdFx0KTtcblxuXHRcdHJldHVybiB7fTtcblx0fVxufTtcblxuZXhwb3J0IHtxdWVyeUFwaX07XG4iLCAiaW1wb3J0IHtidWlsZExpbmt9IGZyb20gJy4vYnVpbGRMaW5rJztcbmltcG9ydCB7cXVlcnlBcGl9IGZyb20gJy4vdXRpbC9xdWVyeUFwaSc7XG5cbmNvbnN0IGNvbXBhcmVXaXRoUmVtb3RlRGlmZklkID0gYXN5bmMgKGRpZmZJZDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGNvbnN0IHJlc3BvbnNlOiBBd2FpdGVkPFJldHVyblR5cGU8dHlwZW9mIHF1ZXJ5QXBpPj4gPSBhd2FpdCBxdWVyeUFwaShkaWZmSWQpO1xuXHRjb25zdCB7d2dEaWZmTmV3SWQsIHdnRGlmZk9sZElkfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0aWYgKGRpZmZJZCA9PT0gd2dEaWZmTmV3SWQgJiYgcmVzcG9uc2VbJ2NvbXBhcmUnXT8uZnJvbXJldmlkID09PSB3Z0RpZmZPbGRJZCkge1xuXHRcdGJ1aWxkTGluaygwLCBkaWZmSWQpO1xuXHR9XG59O1xuXG5leHBvcnQge2NvbXBhcmVXaXRoUmVtb3RlRGlmZklkfTtcbiIsICJpbXBvcnQge2FkZFBvcnRsZXRMaW5rfSBmcm9tICcuL2FkZFBvcnRsZXRMaW5rJztcbmltcG9ydCB7YnVpbGRMaW5rfSBmcm9tICcuL2J1aWxkTGluayc7XG5pbXBvcnQge2NvbXBhcmVXaXRoUmVtb3RlRGlmZklkfSBmcm9tICcuL2NvbXBhcmVXaXRoUmVtb3RlRGlmZklkJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgcHJvY2Vzc0lkID0gKFxuXHRpc1JldmlzaW9uUGFnZTogYm9vbGVhbixcblx0e2RpZmZJZCwgb2xkSWQsIHJldmlzaW9uSWR9OiB7ZGlmZklkOiBudW1iZXIgfCBudWxsOyBvbGRJZDogbnVtYmVyIHwgbnVsbDsgcmV2aXNpb25JZDogbnVtYmVyIHwgbnVsbH1cbik6IHZvaWQgPT4ge1xuXHRpZiAoZGlmZklkKSB7XG5cdFx0YnVpbGRMaW5rKG9sZElkLCBkaWZmSWQpO1xuXHRcdGlmIChvbGRJZCkge1xuXHRcdFx0dm9pZCBjb21wYXJlV2l0aFJlbW90ZURpZmZJZChkaWZmSWQpO1xuXHRcdH1cblx0fSBlbHNlIGlmIChyZXZpc2lvbklkICYmIGlzUmV2aXNpb25QYWdlKSB7XG5cdFx0YWRkUG9ydGxldExpbmsoe1xuXHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnUGVybWFuZW50JyksXG5cdFx0XHR0b29sdGlwOiBnZXRNZXNzYWdlKCdDb3B5UGVybWFuZW50JyksXG5cdFx0XHRsaW5rOiBgU3BlY2lhbDpQZXJtYUxpbmsvJHtyZXZpc2lvbklkfWAsXG5cdFx0XHRkZWZhdWx0VGV4dEFycmF5SW5kZXg6IDEsXG5cdFx0XHRpc1Blcm1hTGluazogdHJ1ZSxcblx0XHR9KTtcblx0fVxufTtcblxuZXhwb3J0IHtwcm9jZXNzSWR9O1xuIiwgImltcG9ydCB7Y2hlY2tEaWZmUGFnZX0gZnJvbSAnLi9tb2R1bGVzL3V0aWwvY2hlY2tEaWZmUGFnZSc7XG5pbXBvcnQge2NoZWNrUmV2aXNpb25QYWdlfSBmcm9tICcuL21vZHVsZXMvdXRpbC9jaGVja1JldmlzaW9uUGFnZSc7XG5pbXBvcnQge3Byb2Nlc3NJZH0gZnJvbSAnLi9tb2R1bGVzL3Byb2Nlc3NJZCc7XG5cbm13Lmhvb2soJ3dpa2lwYWdlLmNvbnRlbnQnKS5hZGQoZnVuY3Rpb24gZGlmZkxpbmsoJGNvbnRlbnQpOiB2b2lkIHtcblx0aWYgKCRjb250ZW50LmF0dHIoJ2lkJykgIT09ICdtdy1jb250ZW50LXRleHQnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgaXNEaWZmUGFnZTogYm9vbGVhbiA9IGNoZWNrRGlmZlBhZ2UoJGNvbnRlbnQpO1xuXHRjb25zdCBpc1JldmlzaW9uUGFnZTogYm9vbGVhbiA9IGNoZWNrUmV2aXNpb25QYWdlKCRjb250ZW50KTtcblx0aWYgKCFpc0RpZmZQYWdlICYmICFpc1JldmlzaW9uUGFnZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHt3Z0RpZmZOZXdJZCwgd2dEaWZmT2xkSWQsIHdnUmV2aXNpb25JZH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0cHJvY2Vzc0lkKGlzUmV2aXNpb25QYWdlLCB7XG5cdFx0ZGlmZklkOiB3Z0RpZmZOZXdJZCA/PyBudWxsLFxuXHRcdG9sZElkOiB3Z0RpZmZPbGRJZCA/PyBudWxsLFxuXHRcdHJldmlzaW9uSWQ6IHdnUmV2aXNpb25JZCA/PyBudWxsLFxuXHR9KTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxnQkFBaUJDLGNBQThCO0FBQ3BELFFBQU07SUFBQ0M7RUFBZSxJQUFJQyxHQUFHQyxPQUFPQyxJQUFJO0FBQ3hDLFNBQU9KLFNBQVNLLEtBQUssT0FBTyxFQUFFQyxTQUFTLE1BQU0sS0FBSyxDQUFDLENBQUNMO0FBQ3JEOztBQ0hBLElBQU1NLG9CQUFxQlAsY0FBOEI7QUFDeEQsVUFDRUEsU0FBU0ssS0FBSyw4QkFBOEIsRUFBRUcsVUFDOUNSLFNBQVNLLEtBQUssNENBQTRDLEVBQUVHLFVBQVU7QUFFekU7O0FDTEEsSUFBQUMsY0FBNENDLFFBQUEsS0FBQTs7QUNDNUMsSUFBQUMsZUFBNENELFFBQUEsa0JBQUE7QUFDNUMsSUFBQUUsY0FBeUJGLFFBQUEsS0FBQTs7QUNGekIsSUFBQUcsb0JBQXVCSCxRQUFBLGlCQUFBO0FBRXZCLElBQU1JLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ04sa0JBQUEsR0FBaUJELGtCQUFBRSxVQUFTO01BQ3pCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RDLFFBQUEsR0FBT0osa0JBQUFFLFVBQVM7TUFDZkcsSUFBSTtNQUNKRixJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RHLE9BQUEsR0FBTU4sa0JBQUFFLFVBQVM7TUFDZEcsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNERSxTQUFBLEdBQVFQLGtCQUFBRSxVQUFTO01BQ2hCRyxJQUFJO01B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MUssa0JBQWtCUCxRQUFRO0FBQzFELE1BQUksQ0FBQ3VMLGNBQWMsQ0FBQ04sZ0JBQWdCO0FBQ25DO0VBQ0Q7QUFFQSxRQUFNO0lBQUNMO0lBQWFDO0lBQWFXO0VBQVksSUFBSXRMLEdBQUdDLE9BQU9DLElBQUk7QUFFL0Q0SyxZQUFVQyxnQkFBZ0I7SUFDekJqQyxRQUFRNEIsZ0JBQUEsUUFBQUEsZ0JBQUEsU0FBQUEsY0FBZTtJQUN2QjdCLE9BQU84QixnQkFBQSxRQUFBQSxnQkFBQSxTQUFBQSxjQUFlO0lBQ3RCSyxZQUFZTSxpQkFBQSxRQUFBQSxpQkFBQSxTQUFBQSxlQUFnQjtFQUM3QixDQUFDO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsiY2hlY2tEaWZmUGFnZSIsICIkY29udGVudCIsICJ3Z0N1clJldmlzaW9uSWQiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJmaW5kIiwgImhhc0NsYXNzIiwgImNoZWNrUmV2aXNpb25QYWdlIiwgImxlbmd0aCIsICJpbXBvcnRfdnVlNCIsICJyZXF1aXJlIiwgImltcG9ydF9jb2RleCIsICJpbXBvcnRfdnVlMiIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAibG9jYWxpemUiLCAiamEiLCAiQ2xvc2UiLCAiZW4iLCAiQ29weSIsICJDb3BpZWQiLCAiQ29weURpZmYiLCAiQ29weVBlcm1hbmVudCIsICJEaWZmIiwgIkRpZmZWZXJzaW9uIiwgIlBlcm1hbmVudCIsICJQZXJtYW5lbnRWZXJzaW9uIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJjb3B5VGV4dCIsICJ0ZXh0IiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgIm5hdmlnYXRvciIsICJjbGlwYm9hcmQiLCAid2luZG93IiwgImlzU2VjdXJlQ29udGV4dCIsICJ3cml0ZVRleHQiLCAiaGVscGVyIiwgImRvY3VtZW50IiwgImNyZWF0ZUVsZW1lbnQiLCAidmFsdWUiLCAic2V0QXR0cmlidXRlIiwgInN0eWxlIiwgInBvc2l0aW9uIiwgInRvcCIsICJsZWZ0IiwgImJvZHkiLCAiYXBwZW5kIiwgInNlbGVjdCIsICJleGVjQ29tbWFuZCIsICJyZW1vdmUiLCAidGhlbiIsICJub3RpZnkiLCAidHlwZSIsICJ0YWciLCAicHJvcHMiLCAiX19wcm9wcyIsICJlbWl0IiwgIl9fZW1pdCIsICJpc09wZW4iLCAicmVmIiwgIm9wZW4iLCAid2F0Y2giLCAiaW1tZWRpYXRlIiwgImNsb3NlIiwgIm9uQ2xvc2UiLCAiaGFuZGxlT3BlbkNoYW5nZSIsICJjZHhJY29uQ29weSIsICJwYXRoIiwgInNob3VsZEZsaXAiLCAiaW1wb3J0X3Z1ZTMiLCAiX2hvaXN0ZWRfMSIsICJjbGFzcyIsICJfaG9pc3RlZF8yIiwgInJlbmRlciIsICJfY3R4IiwgIl9jYWNoZSIsICIkcHJvcHMiLCAiJHNldHVwIiwgIiRkYXRhIiwgIiRvcHRpb25zIiwgIm9wZW5CbG9jayIsICJjcmVhdGVCbG9jayIsICIkZXZlbnQiLCAidGl0bGUiLCAibGFiZWwiLCAib25EZWZhdWx0IiwgImRlZmF1bHQiLCAid2l0aEN0eCIsICJjcmVhdGVFbGVtZW50Vk5vZGUiLCAiY3JlYXRlRWxlbWVudEJsb2NrIiwgIkZyYWdtZW50IiwgInJlbmRlckxpc3QiLCAiaXRlbXMiLCAiaXRlbSIsICJ0b0Rpc3BsYXlTdHJpbmciLCAiY3JlYXRlVk5vZGUiLCAid2VpZ2h0IiwgIm9uQ2xpY2siLCAiaWNvbiIsICJjcmVhdGVUZXh0Vk5vZGUiLCAiXyIsICJBcHBfZGVmYXVsdCIsICJfX2ZpbGUiLCAiX19zY29wZUlkIiwgIkFwcF9kZWZhdWx0MiIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiZGVmYXVsdFRleHRBcnJheSIsICJhcHBseUN1c3RvbVRleHQiLCAiaW5kZXgiLCAiQXJyYXkiLCAiaXNBcnJheSIsICJEaWZmTGluayIsICJldmVudExpc3RlbmVyIiwgIm9wZW5EaWFsb2ciLCAicm9vdCIsICJhcHAiLCAiY3JlYXRlQXBwIiwgInVubW91bnQiLCAibW91bnQiLCAiYWRkUG9ydGxldExpbmsiLCAidG9vbHRpcCIsICJsaW5rIiwgImRlZmF1bHRUZXh0QXJyYXlJbmRleCIsICJpc1Blcm1hTGluayIsICJfZWxlbWVudCRmaXJzdEVsZW1lbnQiLCAiZWxlbWVudCIsICJxdWVyeVNlbGVjdG9yIiwgInBvcnRsZXRJZCIsICJ1dGlsIiwgImNsaWNrTGlzdGVuZXIiLCAiZXZlbnQiLCAicHJldmVudERlZmF1bHQiLCAiaGFzaCIsICJkZWNvZGVVUklDb21wb25lbnQiLCAibG9jYXRpb24iLCAiY29uY2F0IiwgImFkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3ZlciIsICJ0YXJnZXQiLCAiZmlyc3RFbGVtZW50Q2hpbGQiLCAibGlzdGVuZXIiLCAiYnVpbGRMaW5rIiwgIm9sZElkIiwgImRpZmZJZCIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJhcGkiLCAiaW5pdE13QXBpIiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJwYXJhbWV0ZXJzIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgInRvcmVsYXRpdmUiLCAic21heGFnZSIsICJtYXhhZ2UiLCAicXVlcnlBcGkiLCAiX3JlZjIiLCAiZnJvbXJldiIsICJlcnJvciIsICJjb25zb2xlIiwgInRvYXN0aWZ5IiwgImR1cmF0aW9uIiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJjb21wYXJlV2l0aFJlbW90ZURpZmZJZCIsICJfcmVmMyIsICJfcmVzcG9uc2UkY29tcGFyZSIsICJyZXNwb25zZSIsICJ3Z0RpZmZOZXdJZCIsICJ3Z0RpZmZPbGRJZCIsICJmcm9tcmV2aWQiLCAiX3gyIiwgInByb2Nlc3NJZCIsICJpc1JldmlzaW9uUGFnZSIsICJyZXZpc2lvbklkIiwgImhvb2siLCAiYWRkIiwgImRpZmZMaW5rIiwgImF0dHIiLCAiaXNEaWZmUGFnZSIsICJ3Z1JldmlzaW9uSWQiXQp9Cg==

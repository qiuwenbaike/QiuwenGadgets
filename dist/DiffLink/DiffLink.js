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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0RpZmZMaW5rL21vZHVsZXMvdXRpbC9jaGVja0RpZmZQYWdlLnRzIiwgInNyYy9EaWZmTGluay9tb2R1bGVzL3V0aWwvY2hlY2tSZXZpc2lvblBhZ2UudHMiLCAic3JjL0RpZmZMaW5rL21vZHVsZXMvYWRkUG9ydGxldExpbmsudHMiLCAiZGlzdC9EaWZmTGluay9zcmMvRGlmZkxpbmsvQXBwLnZ1ZSIsICJzcmMvRGlmZkxpbmsvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9EaWZmTGluay9tb2R1bGVzL2NvcHlUZXh0LnRzIiwgInNmYy10ZW1wbGF0ZTpEOlxcR2l0UmVwb3NpdG9yeVxcUWl1d2VuR2FkZ2V0c1xcc3JjXFxEaWZmTGlua1xcQXBwLnZ1ZT90eXBlPXRlbXBsYXRlIiwgInNyYy9EaWZmTGluay9BcHAudnVlIiwgInNyYy9EaWZmTGluay9tb2R1bGVzL2J1aWxkTGluay50cyIsICJzcmMvRGlmZkxpbmsvb3B0aW9ucy5qc29uIiwgInNyYy9EaWZmTGluay9tb2R1bGVzL2FwaS50cyIsICJzcmMvRGlmZkxpbmsvbW9kdWxlcy91dGlsL3F1ZXJ5QXBpLnRzIiwgInNyYy9EaWZmTGluay9tb2R1bGVzL2NvbXBhcmVXaXRoUmVtb3RlRGlmZklkLnRzIiwgInNyYy9EaWZmTGluay9tb2R1bGVzL3Byb2Nlc3NJZC50cyIsICJzcmMvRGlmZkxpbmsvRGlmZkxpbmsudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IGNoZWNrRGlmZlBhZ2UgPSAoJGNvbnRlbnQ6IEpRdWVyeSk6IGJvb2xlYW4gPT4ge1xuXHRjb25zdCB7d2dDdXJSZXZpc2lvbklkfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0cmV0dXJuICRjb250ZW50LmZpbmQoJ3RhYmxlJykuaGFzQ2xhc3MoJ2RpZmYnKSAmJiAhIXdnQ3VyUmV2aXNpb25JZDtcbn07XG5cbmV4cG9ydCB7Y2hlY2tEaWZmUGFnZX07XG4iLCAiY29uc3QgY2hlY2tSZXZpc2lvblBhZ2UgPSAoJGNvbnRlbnQ6IEpRdWVyeSk6IGJvb2xlYW4gPT4ge1xuXHRyZXR1cm4gKFxuXHRcdCgkY29udGVudC5maW5kKCcjY29udGVudFN1YiAjbXctcmV2aXNpb24tbmF2JykubGVuZ3RoIHx8XG5cdFx0XHQkY29udGVudC5maW5kKCdtYWluI2NvbnRlbnQ+LnByZS1jb250ZW50ICNtdy1yZXZpc2lvbi1uYXYnKS5sZW5ndGgpID4gMFxuXHQpO1xufTtcblxuZXhwb3J0IHtjaGVja1JldmlzaW9uUGFnZX07XG4iLCAiaW1wb3J0IHt0eXBlIEFwcCBhcyBWdWVBcHAsIGNyZWF0ZUFwcH0gZnJvbSAndnVlJztcbmltcG9ydCBBcHAgZnJvbSAnLi4vQXBwLnZ1ZSc7XG5pbXBvcnQge2FkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcn0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuLyohXG4gKiDoi6Xmg7Poh6rlrprkuYnlpI3liLbnu5PmnpzkuK3nmoTmlofmnKzlj6/pgJrov4flkJHoh6rlt7HnmoRjb21tb24uanPkuK3liqDlhaXku6XkuIvlhoXlrrnvvJpcbiAqICAgd2luZG93LkRpZmZMaW5rID0gWyfniYjmnKzlt67lvIInLCAn5Zu65a6a54mI5pysJ107XG4gKiDoi6Xmg7Pkvb/nlKjpu5jorqTlgLwx77yM5L2G6Ieq5a6a5YC8Mu+8jOivt+WwhuWAvDHnlZnnqbrvvIzlpoLkuIvkvovvvJpcbiAqICAgd2luZG93LkRpZmZMaW5rID0gWycnLCAn5Zu65a6a54mI5pysJ107XG4gKi9cbmNvbnN0IGRlZmF1bHRUZXh0QXJyYXk6IFtzdHJpbmcsIHN0cmluZ10gPSBbZ2V0TWVzc2FnZSgnRGlmZlZlcnNpb24nKSwgZ2V0TWVzc2FnZSgnUGVybWFuZW50VmVyc2lvbicpXTtcblxuY29uc3QgYXBwbHlDdXN0b21UZXh0ID0gKGluZGV4OiAwIHwgMSwgdmFsdWU6IHVua25vd24pOiB2b2lkID0+IHtcblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUubGVuZ3RoID4gMCkge1xuXHRcdGRlZmF1bHRUZXh0QXJyYXlbaW5kZXhdID0gdmFsdWU7XG5cdH1cbn07XG5cbmlmIChBcnJheS5pc0FycmF5KHdpbmRvdy5EaWZmTGluaykpIHtcblx0YXBwbHlDdXN0b21UZXh0KDAsIHdpbmRvdy5EaWZmTGlua1swXSk7XG5cdGFwcGx5Q3VzdG9tVGV4dCgxLCB3aW5kb3cuRGlmZkxpbmtbMV0pO1xufVxuXG5sZXQgZXZlbnRMaXN0ZW5lcjogUmV0dXJuVHlwZTx0eXBlb2YgYWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyPiA9IHtcblx0cmVtb3ZlOiAoKTogdm9pZCA9PiB7fSxcbn07XG5cbmNvbnN0IG9wZW5EaWFsb2cgPSAoaXRlbXM6IHtsYWJlbDogc3RyaW5nOyB0ZXh0OiBzdHJpbmd9W10pOiB2b2lkID0+IHtcblx0Y29uc3Qgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRkb2N1bWVudC5ib2R5LmFwcGVuZChyb290KTtcblxuXHRjb25zdCBhcHA6IFZ1ZUFwcDxFbGVtZW50PiB8IG51bGwgPSBjcmVhdGVBcHAoQXBwLCB7XG5cdFx0b3BlbjogdHJ1ZSxcblx0XHRpdGVtcyxcblx0XHRvbkNsb3NlOiAoKTogdm9pZCA9PiB7XG5cdFx0XHRhcHA/LnVubW91bnQoKTtcblx0XHRcdHJvb3QucmVtb3ZlKCk7XG5cdFx0fSxcblx0fSk7XG5cdGFwcC5tb3VudChyb290KTtcbn07XG5cbmNvbnN0IGFkZFBvcnRsZXRMaW5rID0gKHtcblx0dGV4dCxcblx0dG9vbHRpcCxcblx0bGluayxcblx0ZGVmYXVsdFRleHRBcnJheUluZGV4LFxuXHRpc1Blcm1hTGluayxcbn06IHtcblx0dGV4dDogc3RyaW5nO1xuXHR0b29sdGlwOiBzdHJpbmc7XG5cdGxpbms6IHN0cmluZztcblx0ZGVmYXVsdFRleHRBcnJheUluZGV4OiBudW1iZXI7XG5cdGlzUGVybWFMaW5rPzogYm9vbGVhbjtcbn0pOiB2b2lkID0+IHtcblx0bGV0IGVsZW1lbnQ6IEhUTUxMSUVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3QtZGlmZmxpbmsnKTtcblx0aWYgKCFlbGVtZW50KSB7XG5cdFx0Y29uc3QgcG9ydGxldElkOiAncC1jYWN0aW9ucycgfCAncC10YicgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcC1jYWN0aW9ucycpID8gJ3AtY2FjdGlvbnMnIDogJ3AtdGInO1xuXHRcdGVsZW1lbnQgPSBtdy51dGlsLmFkZFBvcnRsZXRMaW5rKHBvcnRsZXRJZCwgJyMnLCB0ZXh0LCAndC1kaWZmbGluaycsIHRvb2x0aXApO1xuXHR9XG5cdGlmICghZWxlbWVudCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGNsaWNrTGlzdGVuZXIgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkID0+IHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGNvbnN0IGhhc2g6IHN0cmluZyA9IGlzUGVybWFMaW5rID8gZGVjb2RlVVJJQ29tcG9uZW50KGxvY2F0aW9uLmhhc2gpIDogJyc7XG5cdFx0Y29uc3QgaXRlbXMgPSBbXG5cdFx0XHR7bGFiZWw6IGxpbmssIHRleHQ6IGxpbmt9LFxuXHRcdFx0e2xhYmVsOiBgW1ske2xpbmt9JHtoYXNofV1dYCwgdGV4dDogYFtbJHtsaW5rfSR7aGFzaH1dXWB9LFxuXHRcdFx0e1xuXHRcdFx0XHRsYWJlbDogYFtbJHtsaW5rfSR7aGFzaH18JHtkZWZhdWx0VGV4dEFycmF5W2RlZmF1bHRUZXh0QXJyYXlJbmRleF19XV1gLFxuXHRcdFx0XHR0ZXh0OiBgW1ske2xpbmt9JHtoYXNofXwke2RlZmF1bHRUZXh0QXJyYXlbZGVmYXVsdFRleHRBcnJheUluZGV4XX1dXWAsXG5cdFx0XHR9LFxuXHRcdF07XG5cdFx0b3BlbkRpYWxvZyhpdGVtcyk7XG5cdH07XG5cblx0ZXZlbnRMaXN0ZW5lci5yZW1vdmUoKTtcblx0ZXZlbnRMaXN0ZW5lciA9IGFkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcih7XG5cdFx0dGFyZ2V0OiAoZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCA/PyBlbGVtZW50KSBhcyBIVE1MRWxlbWVudCxcblx0XHR0eXBlOiAnY2xpY2snLFxuXHRcdGxpc3RlbmVyOiBjbGlja0xpc3RlbmVyLFxuXHR9KTtcbn07XG5cbmV4cG9ydCB7YWRkUG9ydGxldExpbmt9O1xuIiwgIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge0NkeEJ1dHRvbiwgQ2R4RGlhbG9nLCBDZHhJY29ufSBmcm9tICdAd2lraW1lZGlhL2NvZGV4JztcbmltcG9ydCB7cmVmLCB3YXRjaH0gZnJvbSAndnVlJztcbmltcG9ydCB7Y29weVRleHR9IGZyb20gJy4vbW9kdWxlcy9jb3B5VGV4dCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vbW9kdWxlcy9pMThuJztcblxuaW50ZXJmYWNlIENvcHlJdGVtIHtcblx0bGFiZWw6IHN0cmluZztcblx0dGV4dDogc3RyaW5nO1xufVxuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcblx0b3BlbjogYm9vbGVhbjtcblx0aXRlbXM6IENvcHlJdGVtW107XG5cdG9uQ2xvc2U6ICgpID0+IHZvaWQ7XG59PigpO1xuXG5jb25zdCBlbWl0ID0gZGVmaW5lRW1pdHM8e1xuXHQndXBkYXRlOm9wZW4nOiBbdmFsdWU6IGJvb2xlYW5dO1xufT4oKTtcbmNvbnN0IGlzT3BlbiA9IHJlZihwcm9wcy5vcGVuKTtcblxud2F0Y2goXG5cdCgpID0+IHByb3BzLm9wZW4sXG5cdCh2YWx1ZSkgPT4ge1xuXHRcdGlzT3Blbi52YWx1ZSA9IHZhbHVlO1xuXHR9LFxuXHR7aW1tZWRpYXRlOiB0cnVlfVxuKTtcblxuY29uc3QgY2xvc2UgPSAoKTogdm9pZCA9PiB7XG5cdGlzT3Blbi52YWx1ZSA9IGZhbHNlO1xuXHRlbWl0KCd1cGRhdGU6b3BlbicsIGZhbHNlKTtcblx0cHJvcHMub25DbG9zZSgpO1xufTtcblxuY29uc3QgaGFuZGxlT3BlbkNoYW5nZSA9ICh2YWx1ZTogYm9vbGVhbik6IHZvaWQgPT4ge1xuXHRpc09wZW4udmFsdWUgPSB2YWx1ZTtcblx0aWYgKCF2YWx1ZSkge1xuXHRcdGNsb3NlKCk7XG5cdH1cbn07XG5cbi8qKlxuICogU1ZHIHBhdGhzIGlubGluZWQgZnJvbSBgQHdpa2ltZWRpYS9jb2RleC1pY29uc2AgdjIuNy4wLlxuICpcbiAqIE1lZGlhV2lraSBkb2VzIG5vdCBzaGlwIGEgUmVzb3VyY2VMb2FkZXIgbW9kdWxlIHRoYXQgYnVuZGxlc1xuICogYEB3aWtpbWVkaWEvY29kZXgtaWNvbnNgIChzZWUgaHR0cHM6Ly93d3cubWVkaWF3aWtpLm9yZy93aWtpL0NvZGV4KSxcbiAqIHNvIHRoZSBwYXRoIGRhdGEgaXMgY29waWVkIGhlcmUgdmVyYmF0aW0gYW5kIHJlbmRlcmVkIGFzIGlubGluZSBTVkdcbiAqIHRvIGtlZXAgdGhlIGdhZGdldCBzZWxmLWNvbnRhaW5lZCB3aGlsZSBzdGlsbCBzb3VyY2luZyB0aGUgaWNvbnNcbiAqIGZyb20gYEB3aWtpbWVkaWEvY29kZXgtaWNvbnNgLlxuICpcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vZG9jLndpa2ltZWRpYS5vcmcvY29kZXgvbGF0ZXN0L2ljb25zL31cbiAqL1xuLyoqIFBhdGggZm9yIGBjZHhJY29uQ29weWAuICovXG5jb25zdCBjZHhJY29uQ29weSA9IHtcblx0cGF0aDogJ00xMyAxOUgxVjdoNlYxaDEydjEyaC02em0tNi02VjlIM3Y4aDh2LTR6bTItMmg4VjNIOXonLFxuXHRzaG91bGRGbGlwOiB0cnVlLFxufTtcbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG5cdDxjZHgtZGlhbG9nXG5cdFx0di1tb2RlbDpvcGVuPVwiaXNPcGVuXCJcblx0XHQ6dGl0bGU9XCJnZXRNZXNzYWdlKCdEaWZmJylcIlxuXHRcdDpkZWZhdWx0LWFjdGlvbj1cIntsYWJlbDogZ2V0TWVzc2FnZSgnQ2xvc2UnKX1cIlxuXHRcdDp1c2UtY2xvc2UtYnV0dG9uPVwidHJ1ZVwiXG5cdFx0QHVwZGF0ZTpvcGVuPVwiaGFuZGxlT3BlbkNoYW5nZVwiXG5cdFx0QGRlZmF1bHQ9XCJjbG9zZVwiXG5cdD5cblx0XHQ8ZGl2IGNsYXNzPVwiZGlmZi1saW5rLWNvcHktbGlzdFwiPlxuXHRcdFx0PGRpdiB2LWZvcj1cIml0ZW0gaW4gaXRlbXNcIiA6a2V5PVwiaXRlbS50ZXh0XCIgY2xhc3M9XCJkaWZmLWxpbmstY29weS1pdGVtXCI+XG5cdFx0XHRcdDxjb2RlIGNsYXNzPVwiZGlmZi1saW5rLWNvcHktdGV4dFwiPnt7IGl0ZW0udGV4dCB9fTwvY29kZT5cblx0XHRcdFx0PGNkeC1idXR0b24gd2VpZ2h0PVwibm9ybWFsXCIgOmFyaWEtbGFiZWw9XCJnZXRNZXNzYWdlKCdDb3B5JylcIiBAY2xpY2s9XCJjb3B5VGV4dChpdGVtLnRleHQpXCI+XG5cdFx0XHRcdFx0PGNkeC1pY29uIDppY29uPVwiY2R4SWNvbkNvcHlcIiAvPlxuXHRcdFx0XHRcdHt7IGdldE1lc3NhZ2UoJ0NvcHknKSB9fVxuXHRcdFx0XHQ8L2NkeC1idXR0b24+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0PC9jZHgtZGlhbG9nPlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwibGVzc1wiPlxuLmRpZmYtbGluay1jb3B5LWxpc3Qge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDAuNzVyZW07XG59XG5cbi5kaWZmLWxpbmstY29weS1pdGVtIHtcblx0ZGlzcGxheTogZmxleDtcblx0Z2FwOiAwLjVyZW07XG5cdGZsZXgtd3JhcDogd3JhcDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZGlmZi1saW5rLWNvcHktdGV4dCB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRwYWRkaW5nOiAwLjVyZW0gMC43NXJlbTtcblx0Ym9yZGVyOiAxcHggc29saWQgI2VhZWNmMDtcblx0Ym9yZGVyLXJhZGl1czogMC4yNXJlbTtcblx0YmFja2dyb3VuZDogI2Y4ZjlmYTtcblx0Y29sb3I6ICMyMDIxMjI7XG5cdGZvbnQtc2l6ZTogMC44NzVyZW07XG5cdHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcblx0ZmxleDogMSAxIDEwMCU7XG59XG48L3N0eWxlPlxuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHQnTmV0d29yayBlcnJvcic6IGxvY2FsaXplKHtcblx0XHRcdGphOiAn44ON44OD44OI44Ov44O844Kv44Ko44Op44O8Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+e9kee7nOW8guW4uCcsXG5cdFx0XHQnemgtaGFudCc6ICfntrLot6/nlbDluLgnLFxuXHRcdH0pLFxuXHRcdENsb3NlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0Nsb3NlJyxcblx0XHRcdGphOiAn6ZaJ44GY44KLJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WFs+mXrScsXG5cdFx0XHQnemgtaGFudCc6ICfpl5zploknLFxuXHRcdH0pLFxuXHRcdENvcHk6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ29weScsXG5cdFx0XHQnemgtaGFucyc6ICflpI3liLYnLFxuXHRcdFx0J3poLWhhbnQnOiAn5b6p6KO9Jyxcblx0XHR9KSxcblx0XHRDb3BpZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ29waWVkLicsXG5cdFx0XHQnemgtaGFucyc6ICflt7LlpI3liLYnLFxuXHRcdFx0J3poLWhhbnQnOiAn5bey5b6p6KO9Jyxcblx0XHR9KSxcblx0XHRDb3B5RGlmZjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDb3B5IHRoZSBsaW5rIHRvIHRoZSBkaWZmIHZlcnNpb24gKHdpa2kgc3ludGF4KScsXG5cdFx0XHRqYTogJ+ePvuWcqOOBrueJiOmWk+OBruW3ruWIhuODquODs+OCr+OCkuOCs+ODlOODvOOBl+OBvuOBme+8iOOCpuOCo+OCreiomOazle+8iScsXG5cdFx0XHQnemgtaGFucyc6ICflpI3liLbpk77mjqXliLDlvZPliY3lt67lvILniYjmnKznmoTnu7Tln7ror63ms5UnLFxuXHRcdFx0J3poLWhhbnQnOiAn6KSH6KO96YCj57WQ5Yiw55W25YmN5beu55Ww54mI5pys55qE57at5Z+66Kqe5rOVJyxcblx0XHR9KSxcblx0XHRDb3B5UGVybWFuZW50OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NvcHkgdGhlIHBlcm1hbmVudCBsaW5rIHRvIHRoZSBjdXJyZW50IHZlcnNpb24gKHdpa2kgc3ludGF4KScsXG5cdFx0XHRqYTogJ+OBk+OBruODmuODvOOCuOOBruOBk+OBrueJiOOBuOOBruWbuuWumuODquODs+OCr+OCkuOCs+ODlOODvOOBl+OBvuOBme+8iOOCpuOCo+OCreiomOazle+8iScsXG5cdFx0XHQnemgtaGFucyc6ICflpI3liLbpk77mjqXliLDlvZPliY3kv67orqLniYjmnKznmoTnu7Tln7ror63ms5UnLFxuXHRcdFx0J3poLWhhbnQnOiAn6KSH6KO96YCj57WQ5Yiw55W25YmN5L+u6KiC54mI5pys55qE57at5Z+66Kqe5rOVJyxcblx0XHR9KSxcblx0XHREaWZmOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0RpZmYgbGluaycsXG5cdFx0XHRqYTogJ+ePvuWcqOOBrueJiOmWk+OBruW3ruWIhuODquODs+OCrycsXG5cdFx0XHQnemgtaGFucyc6ICflvZPliY3lt67lvILpk77mjqUnLFxuXHRcdFx0J3poLWhhbnQnOiAn55W25YmN5beu55Ww6YCj57WQJyxcblx0XHR9KSxcblx0XHREaWZmVmVyc2lvbjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdkaWZmIHZlcnNpb24nLFxuXHRcdFx0amE6ICfniYjplpPjga7lt67liIYnLFxuXHRcdFx0J3poLWhhbnMnOiAn5beu5byC54mI5pysJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3rueVsOeJiOacrCcsXG5cdFx0fSksXG5cdFx0UGVybWFuZW50OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1Blcm1hbmVudCBsaW5rJyxcblx0XHRcdGphOiAn44GT44Gu54mI44G444Gu5Zu65a6a44Oq44Oz44KvJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W9k+WJjeS/ruiuoumTvuaOpScsXG5cdFx0XHQnemgtaGFudCc6ICfnlbbliY3kv67oqILpgKPntZAnLFxuXHRcdH0pLFxuXHRcdFBlcm1hbmVudFZlcnNpb246IGxvY2FsaXplKHtcblx0XHRcdGVuOiAncGVybWFuZW50IHZlcnNpb24nLFxuXHRcdFx0amE6ICfniYjjgbjjga7lm7rlrprjg6rjg7Pjgq8nLFxuXHRcdFx0J3poLWhhbnMnOiAn5Zu65a6a54mI5pys6ZO+5o6lJyxcblx0XHRcdCd6aC1oYW50JzogJ+WbuuWumueJiOacrOmAo+e1kCcsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgY29weVRleHQgPSAodGV4dDogc3RyaW5nKTogdm9pZCA9PiB7XG5cdChhc3luYyAoKSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGlmIChuYXZpZ2F0b3IuY2xpcGJvYXJkICYmIHdpbmRvdy5pc1NlY3VyZUNvbnRleHQpIHtcblx0XHRcdFx0YXdhaXQgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodGV4dCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHt9XG5cblx0XHRjb25zdCBoZWxwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuXHRcdGhlbHBlci52YWx1ZSA9IHRleHQ7XG5cdFx0aGVscGVyLnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCAndHJ1ZScpO1xuXHRcdGhlbHBlci5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG5cdFx0aGVscGVyLnN0eWxlLnRvcCA9ICctOTk5OXB4Jztcblx0XHRoZWxwZXIuc3R5bGUubGVmdCA9ICctOTk5OXB4Jztcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZChoZWxwZXIpO1xuXHRcdGhlbHBlci5zZWxlY3QoKTtcblx0XHRkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xuXHRcdGhlbHBlci5yZW1vdmUoKTtcblx0fSkoKS50aGVuKCgpID0+IHtcblx0XHR2b2lkIG13Lm5vdGlmeShnZXRNZXNzYWdlKCdDb3BpZWQnKSwge1xuXHRcdFx0dHlwZTogJ3N1Y2Nlc3MnLFxuXHRcdFx0dGFnOiAnRGlmZkxpbmtzJyxcblx0XHR9KTtcblx0fSk7XG59O1xuXG5leHBvcnQge2NvcHlUZXh0fTtcbiIsICJpbXBvcnQgeyByZW5kZXJMaXN0IGFzIF9yZW5kZXJMaXN0LCBGcmFnbWVudCBhcyBfRnJhZ21lbnQsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jaywgdG9EaXNwbGF5U3RyaW5nIGFzIF90b0Rpc3BsYXlTdHJpbmcsIGNyZWF0ZUVsZW1lbnRWTm9kZSBhcyBfY3JlYXRlRWxlbWVudFZOb2RlLCBjcmVhdGVWTm9kZSBhcyBfY3JlYXRlVk5vZGUsIGNyZWF0ZVRleHRWTm9kZSBhcyBfY3JlYXRlVGV4dFZOb2RlLCB3aXRoQ3R4IGFzIF93aXRoQ3R4LCBjcmVhdGVCbG9jayBhcyBfY3JlYXRlQmxvY2sgfSBmcm9tIFwidnVlXCJcblxuY29uc3QgX2hvaXN0ZWRfMSA9IHsgY2xhc3M6IFwiZGlmZi1saW5rLWNvcHktbGlzdFwiIH1cbmNvbnN0IF9ob2lzdGVkXzIgPSB7IGNsYXNzOiBcImRpZmYtbGluay1jb3B5LXRleHRcIiB9XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soJHNldHVwW1wiQ2R4RGlhbG9nXCJdLCB7XG4gICAgb3BlbjogJHNldHVwLmlzT3BlbixcbiAgICBcIm9uVXBkYXRlOm9wZW5cIjogW1xuICAgICAgX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSAkZXZlbnQgPT4gKCgkc2V0dXAuaXNPcGVuKSA9ICRldmVudCkpLFxuICAgICAgJHNldHVwLmhhbmRsZU9wZW5DaGFuZ2VcbiAgICBdLFxuICAgIHRpdGxlOiAkc2V0dXAuZ2V0TWVzc2FnZSgnRGlmZicpLFxuICAgIFwiZGVmYXVsdC1hY3Rpb25cIjoge2xhYmVsOiAkc2V0dXAuZ2V0TWVzc2FnZSgnQ2xvc2UnKX0sXG4gICAgXCJ1c2UtY2xvc2UtYnV0dG9uXCI6IHRydWUsXG4gICAgb25EZWZhdWx0OiAkc2V0dXAuY2xvc2VcbiAgfSwge1xuICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfMSwgW1xuICAgICAgICAoX29wZW5CbG9jayh0cnVlKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhfRnJhZ21lbnQsIG51bGwsIF9yZW5kZXJMaXN0KCRwcm9wcy5pdGVtcywgKGl0ZW0pID0+IHtcbiAgICAgICAgICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCB7XG4gICAgICAgICAgICBrZXk6IGl0ZW0udGV4dCxcbiAgICAgICAgICAgIGNsYXNzOiBcImRpZmYtbGluay1jb3B5LWl0ZW1cIlxuICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJjb2RlXCIsIF9ob2lzdGVkXzIsIF90b0Rpc3BsYXlTdHJpbmcoaXRlbS50ZXh0KSwgMSAvKiBURVhUICovKSxcbiAgICAgICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDZHhCdXR0b25cIl0sIHtcbiAgICAgICAgICAgICAgd2VpZ2h0OiBcIm5vcm1hbFwiLFxuICAgICAgICAgICAgICBcImFyaWEtbGFiZWxcIjogJHNldHVwLmdldE1lc3NhZ2UoJ0NvcHknKSxcbiAgICAgICAgICAgICAgb25DbGljazogJGV2ZW50ID0+ICgkc2V0dXAuY29weVRleHQoaXRlbS50ZXh0KSlcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICAgICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJDZHhJY29uXCJdLCB7IGljb246ICRzZXR1cC5jZHhJY29uQ29weSB9KSxcbiAgICAgICAgICAgICAgICBfY3JlYXRlVGV4dFZOb2RlKFwiIFwiICsgX3RvRGlzcGxheVN0cmluZygkc2V0dXAuZ2V0TWVzc2FnZSgnQ29weScpKSwgMSAvKiBURVhUICovKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgICAgICAgICAgIH0sIDggLyogUFJPUFMgKi8sIFtcImFyaWEtbGFiZWxcIiwgXCJvbkNsaWNrXCJdKVxuICAgICAgICAgIF0pKVxuICAgICAgICB9KSwgMTI4IC8qIEtFWUVEX0ZSQUdNRU5UICovKSlcbiAgICAgIF0pXG4gICAgXSksXG4gICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgfSwgOCAvKiBQUk9QUyAqLywgW1wib3BlblwiLCBcInRpdGxlXCIsIFwiZGVmYXVsdC1hY3Rpb25cIl0pKVxufSIsICJpbXBvcnQgc2NyaXB0IGZyb20gXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXERpZmZMaW5rXFxcXEFwcC52dWU/dHlwZT1zY3JpcHRcIjtpbXBvcnQgXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXERpZmZMaW5rXFxcXEFwcC52dWU/dHlwZT1zdHlsZSZpbmRleD0wXCI7aW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcRGlmZkxpbmtcXFxcQXBwLnZ1ZT90eXBlPXRlbXBsYXRlXCI7IHNjcmlwdC5yZW5kZXIgPSByZW5kZXI7c2NyaXB0Ll9fZmlsZSA9IFwic3JjXFxcXERpZmZMaW5rXFxcXEFwcC52dWVcIjtzY3JpcHQuX19zY29wZUlkID0gXCJkYXRhLXYtYWUyNjVjNmZcIjtleHBvcnQgZGVmYXVsdCBzY3JpcHQ7IiwgImltcG9ydCB7YWRkUG9ydGxldExpbmt9IGZyb20gJy4vYWRkUG9ydGxldExpbmsnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBidWlsZExpbmsgPSAob2xkSWQ6IG51bWJlciB8IG51bGwsIGRpZmZJZDogbnVtYmVyKTogdm9pZCA9PiB7XG5cdGxldCBsaW5rOiBzdHJpbmcgPSAnU3BlY2lhbDpEaWZmLyc7XG5cdGlmIChvbGRJZCkge1xuXHRcdGxpbmsgKz0gYCR7b2xkSWR9L2A7XG5cdH1cblx0bGluayArPSBkaWZmSWQ7XG5cblx0YWRkUG9ydGxldExpbmsoe1xuXHRcdGxpbmssXG5cdFx0dGV4dDogZ2V0TWVzc2FnZSgnRGlmZicpLFxuXHRcdHRvb2x0aXA6IGdldE1lc3NhZ2UoJ0NvcHlEaWZmJyksXG5cdFx0ZGVmYXVsdFRleHRBcnJheUluZGV4OiAwLFxuXHR9KTtcbn07XG5cbmV4cG9ydCB7YnVpbGRMaW5rfTtcbiIsICJ7XG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBEaWZmTGluay8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuLi9hcGknO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcbmltcG9ydCB7dG9hc3RpZnl9IGZyb20gJ2V4dC5nYWRnZXQuVG9hc3RpZnknO1xuXG50eXBlIENvbXBhcmVSZXNwb25zZSA9IHtcblx0Y29tcGFyZT86IHtcblx0XHRmcm9tcmV2aWQ6IG51bWJlcjtcblx0fTtcbn07XG5cbmNvbnN0IHBhcmFtZXRlcnM6IEFwaUNvbXBhcmVQYWdlc1BhcmFtcyA9IHtcblx0YWN0aW9uOiAnY29tcGFyZScsXG5cdGZvcm1hdDogJ2pzb24nLFxuXHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdHByb3A6ICdpZHMnLFxuXHR0b3JlbGF0aXZlOiAncHJldicsXG5cdHNtYXhhZ2U6IDYwMCxcblx0bWF4YWdlOiA2MDAsXG59O1xuXG5jb25zdCBxdWVyeUFwaSA9IGFzeW5jIChkaWZmSWQ6IG51bWJlcik6IFByb21pc2U8Q29tcGFyZVJlc3BvbnNlPiA9PiB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGF3YWl0IGFwaS5nZXQoe1xuXHRcdFx0Li4ucGFyYW1ldGVycyxcblx0XHRcdGZyb21yZXY6IGRpZmZJZCxcblx0XHR9IGFzIHR5cGVvZiBwYXJhbWV0ZXJzKTtcblx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHRjb25zb2xlLmVycm9yKCdbRGlmZkxpbmtdIEFqYXggZXJyb3I6JywgZXJyb3IpO1xuXHRcdHRvYXN0aWZ5KFxuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdOZXR3b3JrIGVycm9yJyksXG5cdFx0XHRcdGNsb3NlOiB0cnVlLFxuXHRcdFx0XHRkdXJhdGlvbjogLTEsXG5cdFx0XHR9LFxuXHRcdFx0J2Vycm9yJ1xuXHRcdCk7XG5cblx0XHRyZXR1cm4ge307XG5cdH1cbn07XG5cbmV4cG9ydCB7cXVlcnlBcGl9O1xuIiwgImltcG9ydCB7YnVpbGRMaW5rfSBmcm9tICcuL2J1aWxkTGluayc7XG5pbXBvcnQge3F1ZXJ5QXBpfSBmcm9tICcuL3V0aWwvcXVlcnlBcGknO1xuXG5jb25zdCBjb21wYXJlV2l0aFJlbW90ZURpZmZJZCA9IGFzeW5jIChkaWZmSWQ6IG51bWJlcik6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCByZXNwb25zZTogQXdhaXRlZDxSZXR1cm5UeXBlPHR5cGVvZiBxdWVyeUFwaT4+ID0gYXdhaXQgcXVlcnlBcGkoZGlmZklkKTtcblx0Y29uc3Qge3dnRGlmZk5ld0lkLCB3Z0RpZmZPbGRJZH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGlmIChkaWZmSWQgPT09IHdnRGlmZk5ld0lkICYmIHJlc3BvbnNlWydjb21wYXJlJ10/LmZyb21yZXZpZCA9PT0gd2dEaWZmT2xkSWQpIHtcblx0XHRidWlsZExpbmsoMCwgZGlmZklkKTtcblx0fVxufTtcblxuZXhwb3J0IHtjb21wYXJlV2l0aFJlbW90ZURpZmZJZH07XG4iLCAiaW1wb3J0IHthZGRQb3J0bGV0TGlua30gZnJvbSAnLi9hZGRQb3J0bGV0TGluayc7XG5pbXBvcnQge2J1aWxkTGlua30gZnJvbSAnLi9idWlsZExpbmsnO1xuaW1wb3J0IHtjb21wYXJlV2l0aFJlbW90ZURpZmZJZH0gZnJvbSAnLi9jb21wYXJlV2l0aFJlbW90ZURpZmZJZCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IHByb2Nlc3NJZCA9IChcblx0aXNSZXZpc2lvblBhZ2U6IGJvb2xlYW4sXG5cdHtkaWZmSWQsIG9sZElkLCByZXZpc2lvbklkfToge2RpZmZJZDogbnVtYmVyIHwgbnVsbDsgb2xkSWQ6IG51bWJlciB8IG51bGw7IHJldmlzaW9uSWQ6IG51bWJlciB8IG51bGx9XG4pOiB2b2lkID0+IHtcblx0aWYgKGRpZmZJZCkge1xuXHRcdGJ1aWxkTGluayhvbGRJZCwgZGlmZklkKTtcblx0XHRpZiAob2xkSWQpIHtcblx0XHRcdHZvaWQgY29tcGFyZVdpdGhSZW1vdGVEaWZmSWQoZGlmZklkKTtcblx0XHR9XG5cdH0gZWxzZSBpZiAocmV2aXNpb25JZCAmJiBpc1JldmlzaW9uUGFnZSkge1xuXHRcdGFkZFBvcnRsZXRMaW5rKHtcblx0XHRcdHRleHQ6IGdldE1lc3NhZ2UoJ1Blcm1hbmVudCcpLFxuXHRcdFx0dG9vbHRpcDogZ2V0TWVzc2FnZSgnQ29weVBlcm1hbmVudCcpLFxuXHRcdFx0bGluazogYFNwZWNpYWw6UGVybWFMaW5rLyR7cmV2aXNpb25JZH1gLFxuXHRcdFx0ZGVmYXVsdFRleHRBcnJheUluZGV4OiAxLFxuXHRcdFx0aXNQZXJtYUxpbms6IHRydWUsXG5cdFx0fSk7XG5cdH1cbn07XG5cbmV4cG9ydCB7cHJvY2Vzc0lkfTtcbiIsICJpbXBvcnQge2NoZWNrRGlmZlBhZ2V9IGZyb20gJy4vbW9kdWxlcy91dGlsL2NoZWNrRGlmZlBhZ2UnO1xuaW1wb3J0IHtjaGVja1JldmlzaW9uUGFnZX0gZnJvbSAnLi9tb2R1bGVzL3V0aWwvY2hlY2tSZXZpc2lvblBhZ2UnO1xuaW1wb3J0IHtwcm9jZXNzSWR9IGZyb20gJy4vbW9kdWxlcy9wcm9jZXNzSWQnO1xuXG5tdy5ob29rKCd3aWtpcGFnZS5jb250ZW50JykuYWRkKGZ1bmN0aW9uIGRpZmZMaW5rKCRjb250ZW50KTogdm9pZCB7XG5cdGlmICgkY29udGVudC5hdHRyKCdpZCcpICE9PSAnbXctY29udGVudC10ZXh0Jykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGlzRGlmZlBhZ2U6IGJvb2xlYW4gPSBjaGVja0RpZmZQYWdlKCRjb250ZW50KTtcblx0Y29uc3QgaXNSZXZpc2lvblBhZ2U6IGJvb2xlYW4gPSBjaGVja1JldmlzaW9uUGFnZSgkY29udGVudCk7XG5cdGlmICghaXNEaWZmUGFnZSAmJiAhaXNSZXZpc2lvblBhZ2UpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB7d2dEaWZmTmV3SWQsIHdnRGlmZk9sZElkLCB3Z1JldmlzaW9uSWR9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdHByb2Nlc3NJZChpc1JldmlzaW9uUGFnZSwge1xuXHRcdGRpZmZJZDogd2dEaWZmTmV3SWQgPz8gbnVsbCxcblx0XHRvbGRJZDogd2dEaWZmT2xkSWQgPz8gbnVsbCxcblx0XHRyZXZpc2lvbklkOiB3Z1JldmlzaW9uSWQgPz8gbnVsbCxcblx0fSk7XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsZ0JBQWlCQyxjQUE4QjtBQUNwRCxRQUFNO0lBQUNDO0VBQWUsSUFBSUMsR0FBR0MsT0FBT0MsSUFBSTtBQUN4QyxTQUFPSixTQUFTSyxLQUFLLE9BQU8sRUFBRUMsU0FBUyxNQUFNLEtBQUssQ0FBQyxDQUFDTDtBQUNyRDs7QUNIQSxJQUFNTSxvQkFBcUJQLGNBQThCO0FBQ3hELFVBQ0VBLFNBQVNLLEtBQUssOEJBQThCLEVBQUVHLFVBQzlDUixTQUFTSyxLQUFLLDRDQUE0QyxFQUFFRyxVQUFVO0FBRXpFOztBQ0xBLElBQUFDLGNBQTRDQyxRQUFBLEtBQUE7O0FDQzVDLElBQUFDLGVBQTRDRCxRQUFBLGtCQUFBO0FBQzVDLElBQUFFLGNBQXlCRixRQUFBLEtBQUE7O0FDRnpCLElBQUFHLG9CQUF1QkgsUUFBQSxpQkFBQTtBQUV2QixJQUFNSSxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOLGtCQUFBLEdBQWlCRCxrQkFBQUUsVUFBUztNQUN6QkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEQyxRQUFBLEdBQU9KLGtCQUFBRSxVQUFTO01BQ2ZHLElBQUk7TUFDSkYsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNERyxPQUFBLEdBQU1OLGtCQUFBRSxVQUFTO01BQ2RHLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREUsU0FBQSxHQUFRUCxrQkFBQUUsVUFBUztNQUNoQkcsSUFBSTtNQUNKLFdBQVc7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QlAsUUFBUTtBQUMxRCxNQUFJLENBQUN1TCxjQUFjLENBQUNOLGdCQUFnQjtBQUNuQztFQUNEO0FBRUEsUUFBTTtJQUFDTDtJQUFhQztJQUFhVztFQUFZLElBQUl0TCxHQUFHQyxPQUFPQyxJQUFJO0FBRS9ENEssWUFBVUMsZ0JBQWdCO0lBQ3pCakMsUUFBUTRCLGdCQUFBLFFBQUFBLGdCQUFBLFNBQUFBLGNBQWU7SUFDdkI3QixPQUFPOEIsZ0JBQUEsUUFBQUEsZ0JBQUEsU0FBQUEsY0FBZTtJQUN0QkssWUFBWU0saUJBQUEsUUFBQUEsaUJBQUEsU0FBQUEsZUFBZ0I7RUFDN0IsQ0FBQztBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbImNoZWNrRGlmZlBhZ2UiLCAiJGNvbnRlbnQiLCAid2dDdXJSZXZpc2lvbklkIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiZmluZCIsICJoYXNDbGFzcyIsICJjaGVja1JldmlzaW9uUGFnZSIsICJsZW5ndGgiLCAiaW1wb3J0X3Z1ZTQiLCAicmVxdWlyZSIsICJpbXBvcnRfY29kZXgiLCAiaW1wb3J0X3Z1ZTIiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgImxvY2FsaXplIiwgImphIiwgIkNsb3NlIiwgImVuIiwgIkNvcHkiLCAiQ29waWVkIiwgIkNvcHlEaWZmIiwgIkNvcHlQZXJtYW5lbnQiLCAiRGlmZiIsICJEaWZmVmVyc2lvbiIsICJQZXJtYW5lbnQiLCAiUGVybWFuZW50VmVyc2lvbiIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiY29weVRleHQiLCAidGV4dCIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJuYXZpZ2F0b3IiLCAiY2xpcGJvYXJkIiwgIndpbmRvdyIsICJpc1NlY3VyZUNvbnRleHQiLCAid3JpdGVUZXh0IiwgImhlbHBlciIsICJkb2N1bWVudCIsICJjcmVhdGVFbGVtZW50IiwgInZhbHVlIiwgInNldEF0dHJpYnV0ZSIsICJzdHlsZSIsICJwb3NpdGlvbiIsICJ0b3AiLCAibGVmdCIsICJib2R5IiwgImFwcGVuZCIsICJzZWxlY3QiLCAiZXhlY0NvbW1hbmQiLCAicmVtb3ZlIiwgInRoZW4iLCAibm90aWZ5IiwgInR5cGUiLCAidGFnIiwgInByb3BzIiwgIl9fcHJvcHMiLCAiZW1pdCIsICJfX2VtaXQiLCAiaXNPcGVuIiwgInJlZiIsICJvcGVuIiwgIndhdGNoIiwgImltbWVkaWF0ZSIsICJjbG9zZSIsICJvbkNsb3NlIiwgImhhbmRsZU9wZW5DaGFuZ2UiLCAiY2R4SWNvbkNvcHkiLCAicGF0aCIsICJzaG91bGRGbGlwIiwgImltcG9ydF92dWUzIiwgIl9ob2lzdGVkXzEiLCAiY2xhc3MiLCAiX2hvaXN0ZWRfMiIsICJyZW5kZXIiLCAiX2N0eCIsICJfY2FjaGUiLCAiJHByb3BzIiwgIiRzZXR1cCIsICIkZGF0YSIsICIkb3B0aW9ucyIsICJvcGVuQmxvY2siLCAiY3JlYXRlQmxvY2siLCAiJGV2ZW50IiwgInRpdGxlIiwgImxhYmVsIiwgIm9uRGVmYXVsdCIsICJkZWZhdWx0IiwgIndpdGhDdHgiLCAiY3JlYXRlRWxlbWVudFZOb2RlIiwgImNyZWF0ZUVsZW1lbnRCbG9jayIsICJGcmFnbWVudCIsICJyZW5kZXJMaXN0IiwgIml0ZW1zIiwgIml0ZW0iLCAidG9EaXNwbGF5U3RyaW5nIiwgImNyZWF0ZVZOb2RlIiwgIndlaWdodCIsICJvbkNsaWNrIiwgImljb24iLCAiY3JlYXRlVGV4dFZOb2RlIiwgIl8iLCAiQXBwX2RlZmF1bHQiLCAiX19maWxlIiwgIl9fc2NvcGVJZCIsICJBcHBfZGVmYXVsdDIiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgImRlZmF1bHRUZXh0QXJyYXkiLCAiYXBwbHlDdXN0b21UZXh0IiwgImluZGV4IiwgIkFycmF5IiwgImlzQXJyYXkiLCAiRGlmZkxpbmsiLCAiZXZlbnRMaXN0ZW5lciIsICJvcGVuRGlhbG9nIiwgInJvb3QiLCAiYXBwIiwgImNyZWF0ZUFwcCIsICJ1bm1vdW50IiwgIm1vdW50IiwgImFkZFBvcnRsZXRMaW5rIiwgInRvb2x0aXAiLCAibGluayIsICJkZWZhdWx0VGV4dEFycmF5SW5kZXgiLCAiaXNQZXJtYUxpbmsiLCAiX2VsZW1lbnQkZmlyc3RFbGVtZW50IiwgImVsZW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJwb3J0bGV0SWQiLCAidXRpbCIsICJjbGlja0xpc3RlbmVyIiwgImV2ZW50IiwgInByZXZlbnREZWZhdWx0IiwgImhhc2giLCAiZGVjb2RlVVJJQ29tcG9uZW50IiwgImxvY2F0aW9uIiwgImNvbmNhdCIsICJhZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXIiLCAidGFyZ2V0IiwgImZpcnN0RWxlbWVudENoaWxkIiwgImxpc3RlbmVyIiwgImJ1aWxkTGluayIsICJvbGRJZCIsICJkaWZmSWQiLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiYXBpIiwgImluaXRNd0FwaSIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAicGFyYW1ldGVycyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicHJvcCIsICJ0b3JlbGF0aXZlIiwgInNtYXhhZ2UiLCAibWF4YWdlIiwgInF1ZXJ5QXBpIiwgIl9yZWYyIiwgImZyb21yZXYiLCAiZXJyb3IiLCAiY29uc29sZSIsICJ0b2FzdGlmeSIsICJkdXJhdGlvbiIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiY29tcGFyZVdpdGhSZW1vdGVEaWZmSWQiLCAiX3JlZjMiLCAiX3Jlc3BvbnNlJGNvbXBhcmUiLCAicmVzcG9uc2UiLCAid2dEaWZmTmV3SWQiLCAid2dEaWZmT2xkSWQiLCAiZnJvbXJldmlkIiwgIl94MiIsICJwcm9jZXNzSWQiLCAiaXNSZXZpc2lvblBhZ2UiLCAicmV2aXNpb25JZCIsICJob29rIiwgImFkZCIsICJkaWZmTGluayIsICJhdHRyIiwgImlzRGlmZlBhZ2UiLCAid2dSZXZpc2lvbklkIl0KfQo=

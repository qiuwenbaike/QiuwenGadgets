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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0RpZmZMaW5rL21vZHVsZXMvdXRpbC9jaGVja0RpZmZQYWdlLnRzIiwgInNyYy9EaWZmTGluay9tb2R1bGVzL3V0aWwvY2hlY2tSZXZpc2lvblBhZ2UudHMiLCAic3JjL0RpZmZMaW5rL21vZHVsZXMvYWRkUG9ydGxldExpbmsudHMiLCAiZGlzdC9EaWZmTGluay9zcmMvRGlmZkxpbmsvQXBwLnZ1ZSIsICJzcmMvRGlmZkxpbmsvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9EaWZmTGluay9tb2R1bGVzL2NvcHlUZXh0LnRzIiwgInNmYy10ZW1wbGF0ZTpEOlxcR2l0UmVwb3NpdG9yeVxcUWl1d2VuR2FkZ2V0c1xcc3JjXFxEaWZmTGlua1xcQXBwLnZ1ZT90eXBlPXRlbXBsYXRlIiwgInNyYy9EaWZmTGluay9BcHAudnVlIiwgInNyYy9EaWZmTGluay9tb2R1bGVzL2J1aWxkTGluay50cyIsICJzcmMvRGlmZkxpbmsvb3B0aW9ucy5qc29uIiwgInNyYy9EaWZmTGluay9tb2R1bGVzL2FwaS50cyIsICJzcmMvRGlmZkxpbmsvbW9kdWxlcy91dGlsL3F1ZXJ5QXBpLnRzIiwgInNyYy9EaWZmTGluay9tb2R1bGVzL2NvbXBhcmVXaXRoUmVtb3RlRGlmZklkLnRzIiwgInNyYy9EaWZmTGluay9tb2R1bGVzL3Byb2Nlc3NJZC50cyIsICJzcmMvRGlmZkxpbmsvRGlmZkxpbmsudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IGNoZWNrRGlmZlBhZ2UgPSAoJGNvbnRlbnQ6IEpRdWVyeSk6IGJvb2xlYW4gPT4ge1xuXHRjb25zdCB7d2dDdXJSZXZpc2lvbklkfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0cmV0dXJuICRjb250ZW50LmZpbmQoJ3RhYmxlJykuaGFzQ2xhc3MoJ2RpZmYnKSAmJiAhIXdnQ3VyUmV2aXNpb25JZDtcbn07XG5cbmV4cG9ydCB7Y2hlY2tEaWZmUGFnZX07XG4iLCAiY29uc3QgY2hlY2tSZXZpc2lvblBhZ2UgPSAoJGNvbnRlbnQ6IEpRdWVyeSk6IGJvb2xlYW4gPT4ge1xuXHRyZXR1cm4gKFxuXHRcdCgkY29udGVudC5maW5kKCcjY29udGVudFN1YiAjbXctcmV2aXNpb24tbmF2JykubGVuZ3RoIHx8XG5cdFx0XHQkY29udGVudC5maW5kKCdtYWluI2NvbnRlbnQ+LnByZS1jb250ZW50ICNtdy1yZXZpc2lvbi1uYXYnKS5sZW5ndGgpID4gMFxuXHQpO1xufTtcblxuZXhwb3J0IHtjaGVja1JldmlzaW9uUGFnZX07XG4iLCAiaW1wb3J0IHt0eXBlIEFwcCBhcyBWdWVBcHAsIGNyZWF0ZUFwcH0gZnJvbSAndnVlJztcbmltcG9ydCBBcHAgZnJvbSAnLi4vQXBwLnZ1ZSc7XG5pbXBvcnQge2FkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcn0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuLyohXG4gKiDoi6Xmg7Poh6rlrprkuYnlpI3liLbnu5PmnpzkuK3nmoTmlofmnKzlj6/pgJrov4flkJHoh6rlt7HnmoRjb21tb24uanPkuK3liqDlhaXku6XkuIvlhoXlrrnvvJpcbiAqICAgd2luZG93LkRpZmZMaW5rID0gWyfniYjmnKzlt67lvIInLCAn5Zu65a6a54mI5pysJ107XG4gKiDoi6Xmg7Pkvb/nlKjpu5jorqTlgLwx77yM5L2G6Ieq5a6a5YC8Mu+8jOivt+WwhuWAvDHnlZnnqbrvvIzlpoLkuIvkvovvvJpcbiAqICAgd2luZG93LkRpZmZMaW5rID0gWycnLCAn5Zu65a6a54mI5pysJ107XG4gKi9cbmNvbnN0IGRlZmF1bHRUZXh0QXJyYXk6IFtzdHJpbmcsIHN0cmluZ10gPSBbZ2V0TWVzc2FnZSgnRGlmZlZlcnNpb24nKSwgZ2V0TWVzc2FnZSgnUGVybWFuZW50VmVyc2lvbicpXTtcblxuY29uc3QgYXBwbHlDdXN0b21UZXh0ID0gKGluZGV4OiAwIHwgMSwgdmFsdWU6IHVua25vd24pOiB2b2lkID0+IHtcblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUubGVuZ3RoID4gMCkge1xuXHRcdGRlZmF1bHRUZXh0QXJyYXlbaW5kZXhdID0gdmFsdWU7XG5cdH1cbn07XG5cbmlmIChBcnJheS5pc0FycmF5KHdpbmRvdy5EaWZmTGluaykpIHtcblx0YXBwbHlDdXN0b21UZXh0KDAsIHdpbmRvdy5EaWZmTGlua1swXSk7XG5cdGFwcGx5Q3VzdG9tVGV4dCgxLCB3aW5kb3cuRGlmZkxpbmtbMV0pO1xufVxuXG5sZXQgZXZlbnRMaXN0ZW5lcjogUmV0dXJuVHlwZTx0eXBlb2YgYWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyPiA9IHtcblx0cmVtb3ZlOiAoKTogdm9pZCA9PiB7fSxcbn07XG5cbmNvbnN0IG9wZW5EaWFsb2cgPSAoaXRlbXM6IHtsYWJlbDogc3RyaW5nOyB0ZXh0OiBzdHJpbmd9W10pOiB2b2lkID0+IHtcblx0Y29uc3Qgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRkb2N1bWVudC5ib2R5LmFwcGVuZChyb290KTtcblxuXHRjb25zdCBhcHA6IFZ1ZUFwcDxFbGVtZW50PiB8IG51bGwgPSBjcmVhdGVBcHAoQXBwLCB7XG5cdFx0b3BlbjogdHJ1ZSxcblx0XHRpdGVtcyxcblx0XHRvbkNsb3NlOiAoKTogdm9pZCA9PiB7XG5cdFx0XHRhcHA/LnVubW91bnQoKTtcblx0XHRcdHJvb3QucmVtb3ZlKCk7XG5cdFx0fSxcblx0fSk7XG5cdGFwcC5tb3VudChyb290KTtcbn07XG5cbmNvbnN0IGFkZFBvcnRsZXRMaW5rID0gKHtcblx0dGV4dCxcblx0dG9vbHRpcCxcblx0bGluayxcblx0ZGVmYXVsdFRleHRBcnJheUluZGV4LFxuXHRpc1Blcm1hTGluayxcbn06IHtcblx0dGV4dDogc3RyaW5nO1xuXHR0b29sdGlwOiBzdHJpbmc7XG5cdGxpbms6IHN0cmluZztcblx0ZGVmYXVsdFRleHRBcnJheUluZGV4OiBudW1iZXI7XG5cdGlzUGVybWFMaW5rPzogYm9vbGVhbjtcbn0pOiB2b2lkID0+IHtcblx0bGV0IGVsZW1lbnQ6IEhUTUxMSUVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3QtZGlmZmxpbmsnKTtcblx0aWYgKCFlbGVtZW50KSB7XG5cdFx0Y29uc3QgcG9ydGxldElkOiAncC1jYWN0aW9ucycgfCAncC10YicgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcC1jYWN0aW9ucycpID8gJ3AtY2FjdGlvbnMnIDogJ3AtdGInO1xuXHRcdGVsZW1lbnQgPSBtdy51dGlsLmFkZFBvcnRsZXRMaW5rKHBvcnRsZXRJZCwgJyMnLCB0ZXh0LCAndC1kaWZmbGluaycsIHRvb2x0aXApO1xuXHR9XG5cdGlmICghZWxlbWVudCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGNsaWNrTGlzdGVuZXIgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkID0+IHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGNvbnN0IGhhc2g6IHN0cmluZyA9IGlzUGVybWFMaW5rID8gZGVjb2RlVVJJQ29tcG9uZW50KGxvY2F0aW9uLmhhc2gpIDogJyc7XG5cdFx0Y29uc3QgaXRlbXMgPSBbXG5cdFx0XHR7bGFiZWw6IGxpbmssIHRleHQ6IGxpbmt9LFxuXHRcdFx0e2xhYmVsOiBgW1ske2xpbmt9JHtoYXNofV1dYCwgdGV4dDogYFtbJHtsaW5rfSR7aGFzaH1dXWB9LFxuXHRcdFx0e1xuXHRcdFx0XHRsYWJlbDogYFtbJHtsaW5rfSR7aGFzaH18JHtkZWZhdWx0VGV4dEFycmF5W2RlZmF1bHRUZXh0QXJyYXlJbmRleF19XV1gLFxuXHRcdFx0XHR0ZXh0OiBgW1ske2xpbmt9JHtoYXNofXwke2RlZmF1bHRUZXh0QXJyYXlbZGVmYXVsdFRleHRBcnJheUluZGV4XX1dXWAsXG5cdFx0XHR9LFxuXHRcdF07XG5cdFx0b3BlbkRpYWxvZyhpdGVtcyk7XG5cdH07XG5cblx0ZXZlbnRMaXN0ZW5lci5yZW1vdmUoKTtcblx0ZXZlbnRMaXN0ZW5lciA9IGFkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcih7XG5cdFx0dGFyZ2V0OiAoZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCA/PyBlbGVtZW50KSBhcyBIVE1MRWxlbWVudCxcblx0XHR0eXBlOiAnY2xpY2snLFxuXHRcdGxpc3RlbmVyOiBjbGlja0xpc3RlbmVyLFxuXHR9KTtcbn07XG5cbmV4cG9ydCB7YWRkUG9ydGxldExpbmt9O1xuIiwgIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge0NkeEJ1dHRvbiwgQ2R4RGlhbG9nLCBDZHhJY29ufSBmcm9tICdAd2lraW1lZGlhL2NvZGV4JztcbmltcG9ydCB7cmVmLCB3YXRjaH0gZnJvbSAndnVlJztcbmltcG9ydCB7Y29weVRleHR9IGZyb20gJy4vbW9kdWxlcy9jb3B5VGV4dCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vbW9kdWxlcy9pMThuJztcblxuaW50ZXJmYWNlIENvcHlJdGVtIHtcblx0bGFiZWw6IHN0cmluZztcblx0dGV4dDogc3RyaW5nO1xufVxuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcblx0b3BlbjogYm9vbGVhbjtcblx0aXRlbXM6IENvcHlJdGVtW107XG5cdG9uQ2xvc2U6ICgpID0+IHZvaWQ7XG59PigpO1xuXG5jb25zdCBlbWl0ID0gZGVmaW5lRW1pdHM8e1xuXHQndXBkYXRlOm9wZW4nOiBbdmFsdWU6IGJvb2xlYW5dO1xufT4oKTtcbmNvbnN0IGlzT3BlbiA9IHJlZihwcm9wcy5vcGVuKTtcblxud2F0Y2goXG5cdCgpID0+IHByb3BzLm9wZW4sXG5cdCh2YWx1ZSkgPT4ge1xuXHRcdGlzT3Blbi52YWx1ZSA9IHZhbHVlO1xuXHR9LFxuXHR7aW1tZWRpYXRlOiB0cnVlfVxuKTtcblxuY29uc3QgY2xvc2UgPSAoKTogdm9pZCA9PiB7XG5cdGlzT3Blbi52YWx1ZSA9IGZhbHNlO1xuXHRlbWl0KCd1cGRhdGU6b3BlbicsIGZhbHNlKTtcblx0cHJvcHMub25DbG9zZSgpO1xufTtcblxuY29uc3QgaGFuZGxlT3BlbkNoYW5nZSA9ICh2YWx1ZTogYm9vbGVhbik6IHZvaWQgPT4ge1xuXHRpc09wZW4udmFsdWUgPSB2YWx1ZTtcblx0aWYgKCF2YWx1ZSkge1xuXHRcdGNsb3NlKCk7XG5cdH1cbn07XG5cbi8qKlxuICogU1ZHIHBhdGhzIGlubGluZWQgZnJvbSBgQHdpa2ltZWRpYS9jb2RleC1pY29uc2AgdjIuNy4wLlxuICpcbiAqIE1lZGlhV2lraSBkb2VzIG5vdCBzaGlwIGEgUmVzb3VyY2VMb2FkZXIgbW9kdWxlIHRoYXQgYnVuZGxlc1xuICogYEB3aWtpbWVkaWEvY29kZXgtaWNvbnNgIChzZWUgaHR0cHM6Ly93d3cubWVkaWF3aWtpLm9yZy93aWtpL0NvZGV4KSxcbiAqIHNvIHRoZSBwYXRoIGRhdGEgaXMgY29waWVkIGhlcmUgdmVyYmF0aW0gYW5kIHJlbmRlcmVkIGFzIGlubGluZSBTVkdcbiAqIHRvIGtlZXAgdGhlIGdhZGdldCBzZWxmLWNvbnRhaW5lZCB3aGlsZSBzdGlsbCBzb3VyY2luZyB0aGUgaWNvbnNcbiAqIGZyb20gYEB3aWtpbWVkaWEvY29kZXgtaWNvbnNgLlxuICpcbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vZG9jLndpa2ltZWRpYS5vcmcvY29kZXgvbGF0ZXN0L2ljb25zL31cbiAqL1xuLyoqIFBhdGggZm9yIGBjZHhJY29uQ29weWAuICovXG5jb25zdCBjZHhJY29uQ29weSA9IHtcblx0cGF0aDogJ00xMyAxOUgxVjdoNlYxaDEydjEyaC02em0tNi02VjlIM3Y4aDh2LTR6bTItMmg4VjNIOXonLFxuXHRzaG91bGRGbGlwOiB0cnVlLFxufTtcbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG5cdDxjZHgtZGlhbG9nXG5cdFx0di1tb2RlbDpvcGVuPVwiaXNPcGVuXCJcblx0XHQ6dGl0bGU9XCJnZXRNZXNzYWdlKCdEaWZmJylcIlxuXHRcdDpkZWZhdWx0LWFjdGlvbj1cIntsYWJlbDogZ2V0TWVzc2FnZSgnQ2xvc2UnKX1cIlxuXHRcdDp1c2UtY2xvc2UtYnV0dG9uPVwidHJ1ZVwiXG5cdFx0QHVwZGF0ZTpvcGVuPVwiaGFuZGxlT3BlbkNoYW5nZVwiXG5cdFx0QGRlZmF1bHQ9XCJjbG9zZVwiXG5cdD5cblx0XHQ8ZGl2IGNsYXNzPVwiZGlmZi1saW5rLWNvcHktbGlzdFwiPlxuXHRcdFx0PGRpdiB2LWZvcj1cIml0ZW0gaW4gaXRlbXNcIiA6a2V5PVwiaXRlbS50ZXh0XCIgY2xhc3M9XCJkaWZmLWxpbmstY29weS1pdGVtXCI+XG5cdFx0XHRcdDxjb2RlIGNsYXNzPVwiZGlmZi1saW5rLWNvcHktdGV4dFwiPnt7IGl0ZW0udGV4dCB9fTwvY29kZT5cblx0XHRcdFx0PGNkeC1idXR0b24gd2VpZ2h0PVwibm9ybWFsXCIgOmFyaWEtbGFiZWw9XCJnZXRNZXNzYWdlKCdDb3B5JylcIiBAY2xpY2s9XCJjb3B5VGV4dChpdGVtLnRleHQpXCI+XG5cdFx0XHRcdFx0PGNkeC1pY29uIDppY29uPVwiY2R4SWNvbkNvcHlcIiAvPlxuXHRcdFx0XHRcdHt7IGdldE1lc3NhZ2UoJ0NvcHknKSB9fVxuXHRcdFx0XHQ8L2NkeC1idXR0b24+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0PC9jZHgtZGlhbG9nPlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwibGVzc1wiPlxuLmRpZmYtbGluay1jb3B5LWxpc3Qge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDAuNzVyZW07XG59XG5cbi5kaWZmLWxpbmstY29weS1pdGVtIHtcblx0ZGlzcGxheTogZmxleDtcblx0Z3JpZC1nYXA6IDAuNXJlbTtcblx0Z2FwOiAwLjVyZW07XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmRpZmYtbGluay1jb3B5LXRleHQge1xuXHRkaXNwbGF5OiBibG9jaztcblx0cGFkZGluZzogMC41cmVtIDAuNzVyZW07XG5cdGJvcmRlcjogMXB4IHNvbGlkICNlYWVjZjA7XG5cdGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG5cdGJhY2tncm91bmQ6ICNmOGY5ZmE7XG5cdGNvbG9yOiAjMjAyMTIyO1xuXHRmb250LXNpemU6IDAuODc1cmVtO1xuXHR3b3JkLWJyZWFrOiBicmVhay1hbGw7XG5cdGZsZXg6IDEgMSAxMDAlO1xufVxuPC9zdHlsZT5cbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0J05ldHdvcmsgZXJyb3InOiBsb2NhbGl6ZSh7XG5cdFx0XHRqYTogJ+ODjeODg+ODiOODr+ODvOOCr+OCqOODqeODvCcsXG5cdFx0XHQnemgtaGFucyc6ICfnvZHnu5zlvILluLgnLFxuXHRcdFx0J3poLWhhbnQnOiAn57ay6Lev55Ww5bi4Jyxcblx0XHR9KSxcblx0XHRDbG9zZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDbG9zZScsXG5cdFx0XHRqYTogJ+mWieOBmOOCiycsXG5cdFx0XHQnemgtaGFucyc6ICflhbPpl60nLFxuXHRcdFx0J3poLWhhbnQnOiAn6Zec6ZaJJyxcblx0XHR9KSxcblx0XHRDb3B5OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NvcHknLFxuXHRcdFx0J3poLWhhbnMnOiAn5aSN5Yi2Jyxcblx0XHRcdCd6aC1oYW50JzogJ+W+qeijvScsXG5cdFx0fSksXG5cdFx0Q29waWVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NvcGllZC4nLFxuXHRcdFx0J3poLWhhbnMnOiAn5bey5aSN5Yi2Jyxcblx0XHRcdCd6aC1oYW50JzogJ+W3suW+qeijvScsXG5cdFx0fSksXG5cdFx0Q29weURpZmY6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ29weSB0aGUgbGluayB0byB0aGUgZGlmZiB2ZXJzaW9uICh3aWtpIHN5bnRheCknLFxuXHRcdFx0amE6ICfnj77lnKjjga7niYjplpPjga7lt67liIbjg6rjg7Pjgq/jgpLjgrPjg5Tjg7zjgZfjgb7jgZnvvIjjgqbjgqPjgq3oqJjms5XvvIknLFxuXHRcdFx0J3poLWhhbnMnOiAn5aSN5Yi26ZO+5o6l5Yiw5b2T5YmN5beu5byC54mI5pys55qE57u05Z+66K+t5rOVJyxcblx0XHRcdCd6aC1oYW50JzogJ+ikh+ijvemAo+e1kOWIsOeVtuWJjeW3rueVsOeJiOacrOeahOe2reWfuuiqnuazlScsXG5cdFx0fSksXG5cdFx0Q29weVBlcm1hbmVudDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDb3B5IHRoZSBwZXJtYW5lbnQgbGluayB0byB0aGUgY3VycmVudCB2ZXJzaW9uICh3aWtpIHN5bnRheCknLFxuXHRcdFx0amE6ICfjgZPjga7jg5rjg7zjgrjjga7jgZPjga7niYjjgbjjga7lm7rlrprjg6rjg7Pjgq/jgpLjgrPjg5Tjg7zjgZfjgb7jgZnvvIjjgqbjgqPjgq3oqJjms5XvvIknLFxuXHRcdFx0J3poLWhhbnMnOiAn5aSN5Yi26ZO+5o6l5Yiw5b2T5YmN5L+u6K6i54mI5pys55qE57u05Z+66K+t5rOVJyxcblx0XHRcdCd6aC1oYW50JzogJ+ikh+ijvemAo+e1kOWIsOeVtuWJjeS/ruiogueJiOacrOeahOe2reWfuuiqnuazlScsXG5cdFx0fSksXG5cdFx0RGlmZjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdEaWZmIGxpbmsnLFxuXHRcdFx0amE6ICfnj77lnKjjga7niYjplpPjga7lt67liIbjg6rjg7Pjgq8nLFxuXHRcdFx0J3poLWhhbnMnOiAn5b2T5YmN5beu5byC6ZO+5o6lJyxcblx0XHRcdCd6aC1oYW50JzogJ+eVtuWJjeW3rueVsOmAo+e1kCcsXG5cdFx0fSksXG5cdFx0RGlmZlZlcnNpb246IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnZGlmZiB2ZXJzaW9uJyxcblx0XHRcdGphOiAn54mI6ZaT44Gu5beu5YiGJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W3ruW8gueJiOacrCcsXG5cdFx0XHQnemgtaGFudCc6ICflt67nlbDniYjmnKwnLFxuXHRcdH0pLFxuXHRcdFBlcm1hbmVudDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQZXJtYW5lbnQgbGluaycsXG5cdFx0XHRqYTogJ+OBk+OBrueJiOOBuOOBruWbuuWumuODquODs+OCrycsXG5cdFx0XHQnemgtaGFucyc6ICflvZPliY3kv67orqLpk77mjqUnLFxuXHRcdFx0J3poLWhhbnQnOiAn55W25YmN5L+u6KiC6YCj57WQJyxcblx0XHR9KSxcblx0XHRQZXJtYW5lbnRWZXJzaW9uOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ3Blcm1hbmVudCB2ZXJzaW9uJyxcblx0XHRcdGphOiAn54mI44G444Gu5Zu65a6a44Oq44Oz44KvJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WbuuWumueJiOacrOmTvuaOpScsXG5cdFx0XHQnemgtaGFudCc6ICflm7rlrprniYjmnKzpgKPntZAnLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IGNvcHlUZXh0ID0gKHRleHQ6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHQoYXN5bmMgKCkgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRpZiAobmF2aWdhdG9yLmNsaXBib2FyZCAmJiB3aW5kb3cuaXNTZWN1cmVDb250ZXh0KSB7XG5cdFx0XHRcdGF3YWl0IG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHRleHQpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7fVxuXG5cdFx0Y29uc3QgaGVscGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcblx0XHRoZWxwZXIudmFsdWUgPSB0ZXh0O1xuXHRcdGhlbHBlci5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJ3RydWUnKTtcblx0XHRoZWxwZXIuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuXHRcdGhlbHBlci5zdHlsZS50b3AgPSAnLTk5OTlweCc7XG5cdFx0aGVscGVyLnN0eWxlLmxlZnQgPSAnLTk5OTlweCc7XG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmQoaGVscGVyKTtcblx0XHRoZWxwZXIuc2VsZWN0KCk7XG5cdFx0ZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcblx0XHRoZWxwZXIucmVtb3ZlKCk7XG5cdH0pKCkudGhlbigoKSA9PiB7XG5cdFx0dm9pZCBtdy5ub3RpZnkoZ2V0TWVzc2FnZSgnQ29waWVkJyksIHtcblx0XHRcdHR5cGU6ICdzdWNjZXNzJyxcblx0XHRcdHRhZzogJ0RpZmZMaW5rcycsXG5cdFx0fSk7XG5cdH0pO1xufTtcblxuZXhwb3J0IHtjb3B5VGV4dH07XG4iLCAiaW1wb3J0IHsgcmVuZGVyTGlzdCBhcyBfcmVuZGVyTGlzdCwgRnJhZ21lbnQgYXMgX0ZyYWdtZW50LCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2ssIHRvRGlzcGxheVN0cmluZyBhcyBfdG9EaXNwbGF5U3RyaW5nLCBjcmVhdGVFbGVtZW50Vk5vZGUgYXMgX2NyZWF0ZUVsZW1lbnRWTm9kZSwgY3JlYXRlVk5vZGUgYXMgX2NyZWF0ZVZOb2RlLCBjcmVhdGVUZXh0Vk5vZGUgYXMgX2NyZWF0ZVRleHRWTm9kZSwgd2l0aEN0eCBhcyBfd2l0aEN0eCwgY3JlYXRlQmxvY2sgYXMgX2NyZWF0ZUJsb2NrIH0gZnJvbSBcInZ1ZVwiXG5cbmNvbnN0IF9ob2lzdGVkXzEgPSB7IGNsYXNzOiBcImRpZmYtbGluay1jb3B5LWxpc3RcIiB9XG5jb25zdCBfaG9pc3RlZF8yID0geyBjbGFzczogXCJkaWZmLWxpbmstY29weS10ZXh0XCIgfVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSwgJHByb3BzLCAkc2V0dXAsICRkYXRhLCAkb3B0aW9ucykge1xuICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKCRzZXR1cFtcIkNkeERpYWxvZ1wiXSwge1xuICAgIG9wZW46ICRzZXR1cC5pc09wZW4sXG4gICAgXCJvblVwZGF0ZTpvcGVuXCI6IFtcbiAgICAgIF9jYWNoZVswXSB8fCAoX2NhY2hlWzBdID0gJGV2ZW50ID0+ICgoJHNldHVwLmlzT3BlbikgPSAkZXZlbnQpKSxcbiAgICAgICRzZXR1cC5oYW5kbGVPcGVuQ2hhbmdlXG4gICAgXSxcbiAgICB0aXRsZTogJHNldHVwLmdldE1lc3NhZ2UoJ0RpZmYnKSxcbiAgICBcImRlZmF1bHQtYWN0aW9uXCI6IHtsYWJlbDogJHNldHVwLmdldE1lc3NhZ2UoJ0Nsb3NlJyl9LFxuICAgIFwidXNlLWNsb3NlLWJ1dHRvblwiOiB0cnVlLFxuICAgIG9uRGVmYXVsdDogJHNldHVwLmNsb3NlXG4gIH0sIHtcbiAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIF9ob2lzdGVkXzEsIFtcbiAgICAgICAgKF9vcGVuQmxvY2sodHJ1ZSksIF9jcmVhdGVFbGVtZW50QmxvY2soX0ZyYWdtZW50LCBudWxsLCBfcmVuZGVyTGlzdCgkcHJvcHMuaXRlbXMsIChpdGVtKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJkaXZcIiwge1xuICAgICAgICAgICAga2V5OiBpdGVtLnRleHQsXG4gICAgICAgICAgICBjbGFzczogXCJkaWZmLWxpbmstY29weS1pdGVtXCJcbiAgICAgICAgICB9LCBbXG4gICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiY29kZVwiLCBfaG9pc3RlZF8yLCBfdG9EaXNwbGF5U3RyaW5nKGl0ZW0udGV4dCksIDEgLyogVEVYVCAqLyksXG4gICAgICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiQ2R4QnV0dG9uXCJdLCB7XG4gICAgICAgICAgICAgIHdlaWdodDogXCJub3JtYWxcIixcbiAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsXCI6ICRzZXR1cC5nZXRNZXNzYWdlKCdDb3B5JyksXG4gICAgICAgICAgICAgIG9uQ2xpY2s6ICRldmVudCA9PiAoJHNldHVwLmNvcHlUZXh0KGl0ZW0udGV4dCkpXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiQ2R4SWNvblwiXSwgeyBpY29uOiAkc2V0dXAuY2R4SWNvbkNvcHkgfSksXG4gICAgICAgICAgICAgICAgX2NyZWF0ZVRleHRWTm9kZShcIiBcIiArIF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLmdldE1lc3NhZ2UoJ0NvcHknKSksIDEgLyogVEVYVCAqLylcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgICAgICAgICB9LCA4IC8qIFBST1BTICovLCBbXCJhcmlhLWxhYmVsXCIsIFwib25DbGlja1wiXSlcbiAgICAgICAgICBdKSlcbiAgICAgICAgfSksIDEyOCAvKiBLRVlFRF9GUkFHTUVOVCAqLykpXG4gICAgICBdKVxuICAgIF0pLFxuICAgIF86IDEgLyogU1RBQkxFICovXG4gIH0sIDggLyogUFJPUFMgKi8sIFtcIm9wZW5cIiwgXCJ0aXRsZVwiLCBcImRlZmF1bHQtYWN0aW9uXCJdKSlcbn0iLCAiaW1wb3J0IHNjcmlwdCBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxEaWZmTGlua1xcXFxBcHAudnVlP3R5cGU9c2NyaXB0XCI7aW1wb3J0IFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxEaWZmTGlua1xcXFxBcHAudnVlP3R5cGU9c3R5bGUmaW5kZXg9MFwiO2ltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXERpZmZMaW5rXFxcXEFwcC52dWU/dHlwZT10ZW1wbGF0ZVwiOyBzY3JpcHQucmVuZGVyID0gcmVuZGVyO3NjcmlwdC5fX2ZpbGUgPSBcInNyY1xcXFxEaWZmTGlua1xcXFxBcHAudnVlXCI7c2NyaXB0Ll9fc2NvcGVJZCA9IFwiZGF0YS12LWFlMjY1YzZmXCI7ZXhwb3J0IGRlZmF1bHQgc2NyaXB0OyIsICJpbXBvcnQge2FkZFBvcnRsZXRMaW5rfSBmcm9tICcuL2FkZFBvcnRsZXRMaW5rJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgYnVpbGRMaW5rID0gKG9sZElkOiBudW1iZXIgfCBudWxsLCBkaWZmSWQ6IG51bWJlcik6IHZvaWQgPT4ge1xuXHRsZXQgbGluazogc3RyaW5nID0gJ1NwZWNpYWw6RGlmZi8nO1xuXHRpZiAob2xkSWQpIHtcblx0XHRsaW5rICs9IGAke29sZElkfS9gO1xuXHR9XG5cdGxpbmsgKz0gZGlmZklkO1xuXG5cdGFkZFBvcnRsZXRMaW5rKHtcblx0XHRsaW5rLFxuXHRcdHRleHQ6IGdldE1lc3NhZ2UoJ0RpZmYnKSxcblx0XHR0b29sdGlwOiBnZXRNZXNzYWdlKCdDb3B5RGlmZicpLFxuXHRcdGRlZmF1bHRUZXh0QXJyYXlJbmRleDogMCxcblx0fSk7XG59O1xuXG5leHBvcnQge2J1aWxkTGlua307XG4iLCAie1xuXHRcInZlcnNpb25cIjogXCIyLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgRGlmZkxpbmsvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi4vYXBpJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxudHlwZSBDb21wYXJlUmVzcG9uc2UgPSB7XG5cdGNvbXBhcmU/OiB7XG5cdFx0ZnJvbXJldmlkOiBudW1iZXI7XG5cdH07XG59O1xuXG5jb25zdCBwYXJhbWV0ZXJzOiBBcGlDb21wYXJlUGFnZXNQYXJhbXMgPSB7XG5cdGFjdGlvbjogJ2NvbXBhcmUnLFxuXHRmb3JtYXQ6ICdqc29uJyxcblx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRwcm9wOiAnaWRzJyxcblx0dG9yZWxhdGl2ZTogJ3ByZXYnLFxuXHRzbWF4YWdlOiA2MDAsXG5cdG1heGFnZTogNjAwLFxufTtcblxuY29uc3QgcXVlcnlBcGkgPSBhc3luYyAoZGlmZklkOiBudW1iZXIpOiBQcm9taXNlPENvbXBhcmVSZXNwb25zZT4gPT4ge1xuXHR0cnkge1xuXHRcdHJldHVybiBhd2FpdCBhcGkuZ2V0KHtcblx0XHRcdC4uLnBhcmFtZXRlcnMsXG5cdFx0XHRmcm9tcmV2OiBkaWZmSWQsXG5cdFx0fSBhcyB0eXBlb2YgcGFyYW1ldGVycyk7XG5cdH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG5cdFx0Y29uc29sZS5lcnJvcignW0RpZmZMaW5rXSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0XHR0b2FzdGlmeShcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnTmV0d29yayBlcnJvcicpLFxuXHRcdFx0XHRjbG9zZTogdHJ1ZSxcblx0XHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdFx0fSxcblx0XHRcdCdlcnJvcidcblx0XHQpO1xuXG5cdFx0cmV0dXJuIHt9O1xuXHR9XG59O1xuXG5leHBvcnQge3F1ZXJ5QXBpfTtcbiIsICJpbXBvcnQge2J1aWxkTGlua30gZnJvbSAnLi9idWlsZExpbmsnO1xuaW1wb3J0IHtxdWVyeUFwaX0gZnJvbSAnLi91dGlsL3F1ZXJ5QXBpJztcblxuY29uc3QgY29tcGFyZVdpdGhSZW1vdGVEaWZmSWQgPSBhc3luYyAoZGlmZklkOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3QgcmVzcG9uc2U6IEF3YWl0ZWQ8UmV0dXJuVHlwZTx0eXBlb2YgcXVlcnlBcGk+PiA9IGF3YWl0IHF1ZXJ5QXBpKGRpZmZJZCk7XG5cdGNvbnN0IHt3Z0RpZmZOZXdJZCwgd2dEaWZmT2xkSWR9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRpZiAoZGlmZklkID09PSB3Z0RpZmZOZXdJZCAmJiByZXNwb25zZVsnY29tcGFyZSddPy5mcm9tcmV2aWQgPT09IHdnRGlmZk9sZElkKSB7XG5cdFx0YnVpbGRMaW5rKDAsIGRpZmZJZCk7XG5cdH1cbn07XG5cbmV4cG9ydCB7Y29tcGFyZVdpdGhSZW1vdGVEaWZmSWR9O1xuIiwgImltcG9ydCB7YWRkUG9ydGxldExpbmt9IGZyb20gJy4vYWRkUG9ydGxldExpbmsnO1xuaW1wb3J0IHtidWlsZExpbmt9IGZyb20gJy4vYnVpbGRMaW5rJztcbmltcG9ydCB7Y29tcGFyZVdpdGhSZW1vdGVEaWZmSWR9IGZyb20gJy4vY29tcGFyZVdpdGhSZW1vdGVEaWZmSWQnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBwcm9jZXNzSWQgPSAoXG5cdGlzUmV2aXNpb25QYWdlOiBib29sZWFuLFxuXHR7ZGlmZklkLCBvbGRJZCwgcmV2aXNpb25JZH06IHtkaWZmSWQ6IG51bWJlciB8IG51bGw7IG9sZElkOiBudW1iZXIgfCBudWxsOyByZXZpc2lvbklkOiBudW1iZXIgfCBudWxsfVxuKTogdm9pZCA9PiB7XG5cdGlmIChkaWZmSWQpIHtcblx0XHRidWlsZExpbmsob2xkSWQsIGRpZmZJZCk7XG5cdFx0aWYgKG9sZElkKSB7XG5cdFx0XHR2b2lkIGNvbXBhcmVXaXRoUmVtb3RlRGlmZklkKGRpZmZJZCk7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKHJldmlzaW9uSWQgJiYgaXNSZXZpc2lvblBhZ2UpIHtcblx0XHRhZGRQb3J0bGV0TGluayh7XG5cdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdQZXJtYW5lbnQnKSxcblx0XHRcdHRvb2x0aXA6IGdldE1lc3NhZ2UoJ0NvcHlQZXJtYW5lbnQnKSxcblx0XHRcdGxpbms6IGBTcGVjaWFsOlBlcm1hTGluay8ke3JldmlzaW9uSWR9YCxcblx0XHRcdGRlZmF1bHRUZXh0QXJyYXlJbmRleDogMSxcblx0XHRcdGlzUGVybWFMaW5rOiB0cnVlLFxuXHRcdH0pO1xuXHR9XG59O1xuXG5leHBvcnQge3Byb2Nlc3NJZH07XG4iLCAiaW1wb3J0IHtjaGVja0RpZmZQYWdlfSBmcm9tICcuL21vZHVsZXMvdXRpbC9jaGVja0RpZmZQYWdlJztcbmltcG9ydCB7Y2hlY2tSZXZpc2lvblBhZ2V9IGZyb20gJy4vbW9kdWxlcy91dGlsL2NoZWNrUmV2aXNpb25QYWdlJztcbmltcG9ydCB7cHJvY2Vzc0lkfSBmcm9tICcuL21vZHVsZXMvcHJvY2Vzc0lkJztcblxubXcuaG9vaygnd2lraXBhZ2UuY29udGVudCcpLmFkZChmdW5jdGlvbiBkaWZmTGluaygkY29udGVudCk6IHZvaWQge1xuXHRpZiAoJGNvbnRlbnQuYXR0cignaWQnKSAhPT0gJ213LWNvbnRlbnQtdGV4dCcpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBpc0RpZmZQYWdlOiBib29sZWFuID0gY2hlY2tEaWZmUGFnZSgkY29udGVudCk7XG5cdGNvbnN0IGlzUmV2aXNpb25QYWdlOiBib29sZWFuID0gY2hlY2tSZXZpc2lvblBhZ2UoJGNvbnRlbnQpO1xuXHRpZiAoIWlzRGlmZlBhZ2UgJiYgIWlzUmV2aXNpb25QYWdlKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qge3dnRGlmZk5ld0lkLCB3Z0RpZmZPbGRJZCwgd2dSZXZpc2lvbklkfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRwcm9jZXNzSWQoaXNSZXZpc2lvblBhZ2UsIHtcblx0XHRkaWZmSWQ6IHdnRGlmZk5ld0lkID8/IG51bGwsXG5cdFx0b2xkSWQ6IHdnRGlmZk9sZElkID8/IG51bGwsXG5cdFx0cmV2aXNpb25JZDogd2dSZXZpc2lvbklkID8/IG51bGwsXG5cdH0pO1xufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLGdCQUFpQkMsY0FBOEI7QUFDcEQsUUFBTTtJQUFDQztFQUFlLElBQUlDLEdBQUdDLE9BQU9DLElBQUk7QUFDeEMsU0FBT0osU0FBU0ssS0FBSyxPQUFPLEVBQUVDLFNBQVMsTUFBTSxLQUFLLENBQUMsQ0FBQ0w7QUFDckQ7O0FDSEEsSUFBTU0sb0JBQXFCUCxjQUE4QjtBQUN4RCxVQUNFQSxTQUFTSyxLQUFLLDhCQUE4QixFQUFFRyxVQUM5Q1IsU0FBU0ssS0FBSyw0Q0FBNEMsRUFBRUcsVUFBVTtBQUV6RTs7QUNMQSxJQUFBQyxjQUE0Q0MsUUFBQSxLQUFBOztBQ0M1QyxJQUFBQyxlQUE0Q0QsUUFBQSxrQkFBQTtBQUM1QyxJQUFBRSxjQUF5QkYsUUFBQSxLQUFBOztBQ0Z6QixJQUFBRyxvQkFBdUJILFFBQUEsaUJBQUE7QUFFdkIsSUFBTUksa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTixrQkFBQSxHQUFpQkQsa0JBQUFFLFVBQVM7TUFDekJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREMsUUFBQSxHQUFPSixrQkFBQUUsVUFBUztNQUNmRyxJQUFJO01BQ0pGLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREcsT0FBQSxHQUFNTixrQkFBQUUsVUFBUztNQUNkRyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RFLFNBQUEsR0FBUVAsa0JBQUFFLFVBQVM7TUFDaEJHLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFD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dUwsY0FBYyxDQUFDTixnQkFBZ0I7QUFDbkM7RUFDRDtBQUVBLFFBQU07SUFBQ0w7SUFBYUM7SUFBYVc7RUFBWSxJQUFJdEwsR0FBR0MsT0FBT0MsSUFBSTtBQUUvRDRLLFlBQVVDLGdCQUFnQjtJQUN6QmpDLFFBQVE0QixnQkFBQSxRQUFBQSxnQkFBQSxTQUFBQSxjQUFlO0lBQ3ZCN0IsT0FBTzhCLGdCQUFBLFFBQUFBLGdCQUFBLFNBQUFBLGNBQWU7SUFDdEJLLFlBQVlNLGlCQUFBLFFBQUFBLGlCQUFBLFNBQUFBLGVBQWdCO0VBQzdCLENBQUM7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJjaGVja0RpZmZQYWdlIiwgIiRjb250ZW50IiwgIndnQ3VyUmV2aXNpb25JZCIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImZpbmQiLCAiaGFzQ2xhc3MiLCAiY2hlY2tSZXZpc2lvblBhZ2UiLCAibGVuZ3RoIiwgImltcG9ydF92dWU0IiwgInJlcXVpcmUiLCAiaW1wb3J0X2NvZGV4IiwgImltcG9ydF92dWUyIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJsb2NhbGl6ZSIsICJqYSIsICJDbG9zZSIsICJlbiIsICJDb3B5IiwgIkNvcGllZCIsICJDb3B5RGlmZiIsICJDb3B5UGVybWFuZW50IiwgIkRpZmYiLCAiRGlmZlZlcnNpb24iLCAiUGVybWFuZW50IiwgIlBlcm1hbmVudFZlcnNpb24iLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImNvcHlUZXh0IiwgInRleHQiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAibmF2aWdhdG9yIiwgImNsaXBib2FyZCIsICJ3aW5kb3ciLCAiaXNTZWN1cmVDb250ZXh0IiwgIndyaXRlVGV4dCIsICJoZWxwZXIiLCAiZG9jdW1lbnQiLCAiY3JlYXRlRWxlbWVudCIsICJ2YWx1ZSIsICJzZXRBdHRyaWJ1dGUiLCAic3R5bGUiLCAicG9zaXRpb24iLCAidG9wIiwgImxlZnQiLCAiYm9keSIsICJhcHBlbmQiLCAic2VsZWN0IiwgImV4ZWNDb21tYW5kIiwgInJlbW92ZSIsICJ0aGVuIiwgIm5vdGlmeSIsICJ0eXBlIiwgInRhZyIsICJwcm9wcyIsICJfX3Byb3BzIiwgImVtaXQiLCAiX19lbWl0IiwgImlzT3BlbiIsICJyZWYiLCAib3BlbiIsICJ3YXRjaCIsICJpbW1lZGlhdGUiLCAiY2xvc2UiLCAib25DbG9zZSIsICJoYW5kbGVPcGVuQ2hhbmdlIiwgImNkeEljb25Db3B5IiwgInBhdGgiLCAic2hvdWxkRmxpcCIsICJpbXBvcnRfdnVlMyIsICJfaG9pc3RlZF8xIiwgImNsYXNzIiwgIl9ob2lzdGVkXzIiLCAicmVuZGVyIiwgIl9jdHgiLCAiX2NhY2hlIiwgIiRwcm9wcyIsICIkc2V0dXAiLCAiJGRhdGEiLCAiJG9wdGlvbnMiLCAib3BlbkJsb2NrIiwgImNyZWF0ZUJsb2NrIiwgIiRldmVudCIsICJ0aXRsZSIsICJsYWJlbCIsICJvbkRlZmF1bHQiLCAiZGVmYXVsdCIsICJ3aXRoQ3R4IiwgImNyZWF0ZUVsZW1lbnRWTm9kZSIsICJjcmVhdGVFbGVtZW50QmxvY2siLCAiRnJhZ21lbnQiLCAicmVuZGVyTGlzdCIsICJpdGVtcyIsICJpdGVtIiwgInRvRGlzcGxheVN0cmluZyIsICJjcmVhdGVWTm9kZSIsICJ3ZWlnaHQiLCAib25DbGljayIsICJpY29uIiwgImNyZWF0ZVRleHRWTm9kZSIsICJfIiwgIkFwcF9kZWZhdWx0IiwgIl9fZmlsZSIsICJfX3Njb3BlSWQiLCAiQXBwX2RlZmF1bHQyIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJkZWZhdWx0VGV4dEFycmF5IiwgImFwcGx5Q3VzdG9tVGV4dCIsICJpbmRleCIsICJBcnJheSIsICJpc0FycmF5IiwgIkRpZmZMaW5rIiwgImV2ZW50TGlzdGVuZXIiLCAib3BlbkRpYWxvZyIsICJyb290IiwgImFwcCIsICJjcmVhdGVBcHAiLCAidW5tb3VudCIsICJtb3VudCIsICJhZGRQb3J0bGV0TGluayIsICJ0b29sdGlwIiwgImxpbmsiLCAiZGVmYXVsdFRleHRBcnJheUluZGV4IiwgImlzUGVybWFMaW5rIiwgIl9lbGVtZW50JGZpcnN0RWxlbWVudCIsICJlbGVtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAicG9ydGxldElkIiwgInV0aWwiLCAiY2xpY2tMaXN0ZW5lciIsICJldmVudCIsICJwcmV2ZW50RGVmYXVsdCIsICJoYXNoIiwgImRlY29kZVVSSUNvbXBvbmVudCIsICJsb2NhdGlvbiIsICJjb25jYXQiLCAiYWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyIiwgInRhcmdldCIsICJmaXJzdEVsZW1lbnRDaGlsZCIsICJsaXN0ZW5lciIsICJidWlsZExpbmsiLCAib2xkSWQiLCAiZGlmZklkIiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImFwaSIsICJpbml0TXdBcGkiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgInBhcmFtZXRlcnMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAidG9yZWxhdGl2ZSIsICJzbWF4YWdlIiwgIm1heGFnZSIsICJxdWVyeUFwaSIsICJfcmVmMiIsICJmcm9tcmV2IiwgImVycm9yIiwgImNvbnNvbGUiLCAidG9hc3RpZnkiLCAiZHVyYXRpb24iLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImNvbXBhcmVXaXRoUmVtb3RlRGlmZklkIiwgIl9yZWYzIiwgIl9yZXNwb25zZSRjb21wYXJlIiwgInJlc3BvbnNlIiwgIndnRGlmZk5ld0lkIiwgIndnRGlmZk9sZElkIiwgImZyb21yZXZpZCIsICJfeDIiLCAicHJvY2Vzc0lkIiwgImlzUmV2aXNpb25QYWdlIiwgInJldmlzaW9uSWQiLCAiaG9vayIsICJhZGQiLCAiZGlmZkxpbmsiLCAiYXR0ciIsICJpc0RpZmZQYWdlIiwgIndnUmV2aXNpb25JZCJdCn0K

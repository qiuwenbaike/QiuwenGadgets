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
    const copyText = (text) => {
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
    const __returned__ = {
      props,
      emit,
      isOpen,
      close,
      handleOpenChange,
      copyText,
      get CdxButton() {
        return import_codex.CdxButton;
      },
      get CdxDialog() {
        return import_codex.CdxDialog;
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
          weight: "primary",
          onClick: ($event) => $setup.copyText(item.text)
        }, {
          default: (0, import_vue3.withCtx)(() => [(0, import_vue3.createTextVNode)(
            (0, import_vue3.toDisplayString)($setup.getMessage("Copy")),
            1
            /* TEXT */
          )]),
          _: 1
          /* STABLE */
        }, 8, ["onClick"])]);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0RpZmZMaW5rL21vZHVsZXMvdXRpbC9jaGVja0RpZmZQYWdlLnRzIiwgInNyYy9EaWZmTGluay9tb2R1bGVzL3V0aWwvY2hlY2tSZXZpc2lvblBhZ2UudHMiLCAic3JjL0RpZmZMaW5rL21vZHVsZXMvYWRkUG9ydGxldExpbmsudHMiLCAiZGlzdC9EaWZmTGluay9zcmMvRGlmZkxpbmsvQXBwLnZ1ZSIsICJzcmMvRGlmZkxpbmsvbW9kdWxlcy9pMThuLnRzIiwgInNmYy10ZW1wbGF0ZTpEOlxcR2l0UmVwb3NpdG9yeVxcUWl1d2VuR2FkZ2V0c1xcc3JjXFxEaWZmTGlua1xcQXBwLnZ1ZT90eXBlPXRlbXBsYXRlIiwgInNyYy9EaWZmTGluay9BcHAudnVlIiwgInNyYy9EaWZmTGluay9tb2R1bGVzL2J1aWxkTGluay50cyIsICJzcmMvRGlmZkxpbmsvb3B0aW9ucy5qc29uIiwgInNyYy9EaWZmTGluay9tb2R1bGVzL2FwaS50cyIsICJzcmMvRGlmZkxpbmsvbW9kdWxlcy91dGlsL3F1ZXJ5QXBpLnRzIiwgInNyYy9EaWZmTGluay9tb2R1bGVzL2NvbXBhcmVXaXRoUmVtb3RlRGlmZklkLnRzIiwgInNyYy9EaWZmTGluay9tb2R1bGVzL3Byb2Nlc3NJZC50cyIsICJzcmMvRGlmZkxpbmsvRGlmZkxpbmsudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IGNoZWNrRGlmZlBhZ2UgPSAoJGNvbnRlbnQ6IEpRdWVyeSk6IGJvb2xlYW4gPT4ge1xuXHRjb25zdCB7d2dDdXJSZXZpc2lvbklkfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0cmV0dXJuICRjb250ZW50LmZpbmQoJ3RhYmxlJykuaGFzQ2xhc3MoJ2RpZmYnKSAmJiAhIXdnQ3VyUmV2aXNpb25JZDtcbn07XG5cbmV4cG9ydCB7Y2hlY2tEaWZmUGFnZX07XG4iLCAiY29uc3QgY2hlY2tSZXZpc2lvblBhZ2UgPSAoJGNvbnRlbnQ6IEpRdWVyeSk6IGJvb2xlYW4gPT4ge1xuXHRyZXR1cm4gKFxuXHRcdCgkY29udGVudC5maW5kKCcjY29udGVudFN1YiAjbXctcmV2aXNpb24tbmF2JykubGVuZ3RoIHx8XG5cdFx0XHQkY29udGVudC5maW5kKCdtYWluI2NvbnRlbnQ+LnByZS1jb250ZW50ICNtdy1yZXZpc2lvbi1uYXYnKS5sZW5ndGgpID4gMFxuXHQpO1xufTtcblxuZXhwb3J0IHtjaGVja1JldmlzaW9uUGFnZX07XG4iLCAiaW1wb3J0IHt0eXBlIEFwcCBhcyBWdWVBcHAsIGNyZWF0ZUFwcH0gZnJvbSAndnVlJztcbmltcG9ydCBBcHAgZnJvbSAnLi4vQXBwLnZ1ZSc7XG5pbXBvcnQge2FkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcn0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuLyohXG4gKiDoi6Xmg7Poh6rlrprkuYnlpI3liLbnu5PmnpzkuK3nmoTmlofmnKzlj6/pgJrov4flkJHoh6rlt7HnmoRjb21tb24uanPkuK3liqDlhaXku6XkuIvlhoXlrrnvvJpcbiAqICAgd2luZG93LkRpZmZMaW5rID0gWyfniYjmnKzlt67lvIInLCAn5Zu65a6a54mI5pysJ107XG4gKiDoi6Xmg7Pkvb/nlKjpu5jorqTlgLwx77yM5L2G6Ieq5a6a5YC8Mu+8jOivt+WwhuWAvDHnlZnnqbrvvIzlpoLkuIvkvovvvJpcbiAqICAgd2luZG93LkRpZmZMaW5rID0gWycnLCAn5Zu65a6a54mI5pysJ107XG4gKi9cbmNvbnN0IGRlZmF1bHRUZXh0QXJyYXk6IFtzdHJpbmcsIHN0cmluZ10gPSBbZ2V0TWVzc2FnZSgnRGlmZlZlcnNpb24nKSwgZ2V0TWVzc2FnZSgnUGVybWFuZW50VmVyc2lvbicpXTtcblxuY29uc3QgYXBwbHlDdXN0b21UZXh0ID0gKGluZGV4OiAwIHwgMSwgdmFsdWU6IHVua25vd24pOiB2b2lkID0+IHtcblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUubGVuZ3RoID4gMCkge1xuXHRcdGRlZmF1bHRUZXh0QXJyYXlbaW5kZXhdID0gdmFsdWU7XG5cdH1cbn07XG5cbmlmIChBcnJheS5pc0FycmF5KHdpbmRvdy5EaWZmTGluaykpIHtcblx0YXBwbHlDdXN0b21UZXh0KDAsIHdpbmRvdy5EaWZmTGlua1swXSk7XG5cdGFwcGx5Q3VzdG9tVGV4dCgxLCB3aW5kb3cuRGlmZkxpbmtbMV0pO1xufVxuXG5sZXQgZXZlbnRMaXN0ZW5lcjogUmV0dXJuVHlwZTx0eXBlb2YgYWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyPiA9IHtcblx0cmVtb3ZlOiAoKTogdm9pZCA9PiB7fSxcbn07XG5cbmNvbnN0IG9wZW5EaWFsb2cgPSAoaXRlbXM6IHtsYWJlbDogc3RyaW5nOyB0ZXh0OiBzdHJpbmd9W10pOiB2b2lkID0+IHtcblx0Y29uc3Qgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRkb2N1bWVudC5ib2R5LmFwcGVuZChyb290KTtcblxuXHRjb25zdCBhcHA6IFZ1ZUFwcDxFbGVtZW50PiB8IG51bGwgPSBjcmVhdGVBcHAoQXBwLCB7XG5cdFx0b3BlbjogdHJ1ZSxcblx0XHRpdGVtcyxcblx0XHRvbkNsb3NlOiAoKTogdm9pZCA9PiB7XG5cdFx0XHRhcHA/LnVubW91bnQoKTtcblx0XHRcdHJvb3QucmVtb3ZlKCk7XG5cdFx0fSxcblx0fSk7XG5cdGFwcC5tb3VudChyb290KTtcbn07XG5cbmNvbnN0IGFkZFBvcnRsZXRMaW5rID0gKHtcblx0dGV4dCxcblx0dG9vbHRpcCxcblx0bGluayxcblx0ZGVmYXVsdFRleHRBcnJheUluZGV4LFxuXHRpc1Blcm1hTGluayxcbn06IHtcblx0dGV4dDogc3RyaW5nO1xuXHR0b29sdGlwOiBzdHJpbmc7XG5cdGxpbms6IHN0cmluZztcblx0ZGVmYXVsdFRleHRBcnJheUluZGV4OiBudW1iZXI7XG5cdGlzUGVybWFMaW5rPzogYm9vbGVhbjtcbn0pOiB2b2lkID0+IHtcblx0bGV0IGVsZW1lbnQ6IEhUTUxMSUVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3QtZGlmZmxpbmsnKTtcblx0aWYgKCFlbGVtZW50KSB7XG5cdFx0Y29uc3QgcG9ydGxldElkOiAncC1jYWN0aW9ucycgfCAncC10YicgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcC1jYWN0aW9ucycpID8gJ3AtY2FjdGlvbnMnIDogJ3AtdGInO1xuXHRcdGVsZW1lbnQgPSBtdy51dGlsLmFkZFBvcnRsZXRMaW5rKHBvcnRsZXRJZCwgJyMnLCB0ZXh0LCAndC1kaWZmbGluaycsIHRvb2x0aXApO1xuXHR9XG5cdGlmICghZWxlbWVudCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGNsaWNrTGlzdGVuZXIgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkID0+IHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGNvbnN0IGhhc2g6IHN0cmluZyA9IGlzUGVybWFMaW5rID8gZGVjb2RlVVJJQ29tcG9uZW50KGxvY2F0aW9uLmhhc2gpIDogJyc7XG5cdFx0Y29uc3QgaXRlbXMgPSBbXG5cdFx0XHR7bGFiZWw6IGxpbmssIHRleHQ6IGxpbmt9LFxuXHRcdFx0e2xhYmVsOiBgW1ske2xpbmt9JHtoYXNofV1dYCwgdGV4dDogYFtbJHtsaW5rfSR7aGFzaH1dXWB9LFxuXHRcdFx0e1xuXHRcdFx0XHRsYWJlbDogYFtbJHtsaW5rfSR7aGFzaH18JHtkZWZhdWx0VGV4dEFycmF5W2RlZmF1bHRUZXh0QXJyYXlJbmRleF19XV1gLFxuXHRcdFx0XHR0ZXh0OiBgW1ske2xpbmt9JHtoYXNofXwke2RlZmF1bHRUZXh0QXJyYXlbZGVmYXVsdFRleHRBcnJheUluZGV4XX1dXWAsXG5cdFx0XHR9LFxuXHRcdF07XG5cdFx0b3BlbkRpYWxvZyhpdGVtcyk7XG5cdH07XG5cblx0ZXZlbnRMaXN0ZW5lci5yZW1vdmUoKTtcblx0ZXZlbnRMaXN0ZW5lciA9IGFkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcih7XG5cdFx0dGFyZ2V0OiAoZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCA/PyBlbGVtZW50KSBhcyBIVE1MRWxlbWVudCxcblx0XHR0eXBlOiAnY2xpY2snLFxuXHRcdGxpc3RlbmVyOiBjbGlja0xpc3RlbmVyLFxuXHR9KTtcbn07XG5cbmV4cG9ydCB7YWRkUG9ydGxldExpbmt9O1xuIiwgIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge0NkeEJ1dHRvbiwgQ2R4RGlhbG9nfSBmcm9tICdAd2lraW1lZGlhL2NvZGV4JztcbmltcG9ydCB7cmVmLCB3YXRjaH0gZnJvbSAndnVlJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9tb2R1bGVzL2kxOG4nO1xuXG5pbnRlcmZhY2UgQ29weUl0ZW0ge1xuXHRsYWJlbDogc3RyaW5nO1xuXHR0ZXh0OiBzdHJpbmc7XG59XG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8e1xuXHRvcGVuOiBib29sZWFuO1xuXHRpdGVtczogQ29weUl0ZW1bXTtcblx0b25DbG9zZTogKCkgPT4gdm9pZDtcbn0+KCk7XG5cbmNvbnN0IGVtaXQgPSBkZWZpbmVFbWl0czx7XG5cdCd1cGRhdGU6b3Blbic6IFt2YWx1ZTogYm9vbGVhbl07XG59PigpO1xuY29uc3QgaXNPcGVuID0gcmVmKHByb3BzLm9wZW4pO1xuXG53YXRjaChcblx0KCkgPT4gcHJvcHMub3Blbixcblx0KHZhbHVlKSA9PiB7XG5cdFx0aXNPcGVuLnZhbHVlID0gdmFsdWU7XG5cdH0sXG5cdHtpbW1lZGlhdGU6IHRydWV9XG4pO1xuXG5jb25zdCBjbG9zZSA9ICgpOiB2b2lkID0+IHtcblx0aXNPcGVuLnZhbHVlID0gZmFsc2U7XG5cdGVtaXQoJ3VwZGF0ZTpvcGVuJywgZmFsc2UpO1xuXHRwcm9wcy5vbkNsb3NlKCk7XG59O1xuXG5jb25zdCBoYW5kbGVPcGVuQ2hhbmdlID0gKHZhbHVlOiBib29sZWFuKTogdm9pZCA9PiB7XG5cdGlzT3Blbi52YWx1ZSA9IHZhbHVlO1xuXHRpZiAoIXZhbHVlKSB7XG5cdFx0Y2xvc2UoKTtcblx0fVxufTtcblxuY29uc3QgY29weVRleHQgPSAodGV4dDogc3RyaW5nKTogdm9pZCA9PiB7XG5cdChhc3luYyAoKSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGlmIChuYXZpZ2F0b3IuY2xpcGJvYXJkICYmIHdpbmRvdy5pc1NlY3VyZUNvbnRleHQpIHtcblx0XHRcdFx0YXdhaXQgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodGV4dCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHt9XG5cblx0XHRjb25zdCBoZWxwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuXHRcdGhlbHBlci52YWx1ZSA9IHRleHQ7XG5cdFx0aGVscGVyLnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCAndHJ1ZScpO1xuXHRcdGhlbHBlci5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG5cdFx0aGVscGVyLnN0eWxlLnRvcCA9ICctOTk5OXB4Jztcblx0XHRoZWxwZXIuc3R5bGUubGVmdCA9ICctOTk5OXB4Jztcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZChoZWxwZXIpO1xuXHRcdGhlbHBlci5zZWxlY3QoKTtcblx0XHRkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xuXHRcdGhlbHBlci5yZW1vdmUoKTtcblx0fSkoKS50aGVuKCgpID0+IHtcblx0XHR2b2lkIG13Lm5vdGlmeShnZXRNZXNzYWdlKCdDb3BpZWQnKSwge1xuXHRcdFx0dHlwZTogJ3N1Y2Nlc3MnLFxuXHRcdFx0dGFnOiAnRGlmZkxpbmtzJyxcblx0XHR9KTtcblx0fSk7XG59O1xuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cblx0PGNkeC1kaWFsb2dcblx0XHR2LW1vZGVsOm9wZW49XCJpc09wZW5cIlxuXHRcdDp0aXRsZT1cImdldE1lc3NhZ2UoJ0RpZmYnKVwiXG5cdFx0OmRlZmF1bHQtYWN0aW9uPVwie2xhYmVsOiBnZXRNZXNzYWdlKCdDbG9zZScpfVwiXG5cdFx0OnVzZS1jbG9zZS1idXR0b249XCJ0cnVlXCJcblx0XHRAdXBkYXRlOm9wZW49XCJoYW5kbGVPcGVuQ2hhbmdlXCJcblx0XHRAZGVmYXVsdD1cImNsb3NlXCJcblx0PlxuXHRcdDxkaXYgY2xhc3M9XCJkaWZmLWxpbmstY29weS1saXN0XCI+XG5cdFx0XHQ8ZGl2IHYtZm9yPVwiaXRlbSBpbiBpdGVtc1wiIDprZXk9XCJpdGVtLnRleHRcIiBjbGFzcz1cImRpZmYtbGluay1jb3B5LWl0ZW1cIj5cblx0XHRcdFx0PGNvZGUgY2xhc3M9XCJkaWZmLWxpbmstY29weS10ZXh0XCI+e3sgaXRlbS50ZXh0IH19PC9jb2RlPlxuXHRcdFx0XHQ8Y2R4LWJ1dHRvbiB3ZWlnaHQ9XCJwcmltYXJ5XCIgQGNsaWNrPVwiY29weVRleHQoaXRlbS50ZXh0KVwiPnt7IGdldE1lc3NhZ2UoJ0NvcHknKSB9fTwvY2R4LWJ1dHRvbj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L2NkeC1kaWFsb2c+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJsZXNzXCI+XG4uZGlmZi1saW5rLWNvcHktbGlzdCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMC43NXJlbTtcbn1cblxuLmRpZmYtbGluay1jb3B5LWl0ZW0ge1xuXHRkaXNwbGF5OiBncmlkO1xuXHRnYXA6IDAuNXJlbTtcbn1cblxuLmRpZmYtbGluay1jb3B5LXRleHQge1xuXHRkaXNwbGF5OiBibG9jaztcblx0cGFkZGluZzogMC41cmVtIDAuNzVyZW07XG5cdGJvcmRlcjogMXB4IHNvbGlkICNlYWVjZjA7XG5cdGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG5cdGJhY2tncm91bmQ6ICNmOGY5ZmE7XG5cdGNvbG9yOiAjMjAyMTIyO1xuXHRmb250LXNpemU6IDAuODc1cmVtO1xuXHR3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG48L3N0eWxlPlxuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHQnTmV0d29yayBlcnJvcic6IGxvY2FsaXplKHtcblx0XHRcdGphOiAn44ON44OD44OI44Ov44O844Kv44Ko44Op44O8Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+e9kee7nOW8guW4uCcsXG5cdFx0XHQnemgtaGFudCc6ICfntrLot6/nlbDluLgnLFxuXHRcdH0pLFxuXHRcdENsb3NlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0Nsb3NlJyxcblx0XHRcdGphOiAn6ZaJ44GY44KLJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WFs+mXrScsXG5cdFx0XHQnemgtaGFudCc6ICfpl5zploknLFxuXHRcdH0pLFxuXHRcdENvcHk6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ29weScsXG5cdFx0XHQnemgtaGFucyc6ICflpI3liLYnLFxuXHRcdFx0J3poLWhhbnQnOiAn5b6p6KO9Jyxcblx0XHR9KSxcblx0XHRDb3BpZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ29waWVkLicsXG5cdFx0XHQnemgtaGFucyc6ICflt7LlpI3liLYnLFxuXHRcdFx0J3poLWhhbnQnOiAn5bey5b6p6KO9Jyxcblx0XHR9KSxcblx0XHRDb3B5RGlmZjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDb3B5IHRoZSBsaW5rIHRvIHRoZSBkaWZmIHZlcnNpb24gKHdpa2kgc3ludGF4KScsXG5cdFx0XHRqYTogJ+ePvuWcqOOBrueJiOmWk+OBruW3ruWIhuODquODs+OCr+OCkuOCs+ODlOODvOOBl+OBvuOBme+8iOOCpuOCo+OCreiomOazle+8iScsXG5cdFx0XHQnemgtaGFucyc6ICflpI3liLbpk77mjqXliLDlvZPliY3lt67lvILniYjmnKznmoTnu7Tln7ror63ms5UnLFxuXHRcdFx0J3poLWhhbnQnOiAn6KSH6KO96YCj57WQ5Yiw55W25YmN5beu55Ww54mI5pys55qE57at5Z+66Kqe5rOVJyxcblx0XHR9KSxcblx0XHRDb3B5UGVybWFuZW50OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NvcHkgdGhlIHBlcm1hbmVudCBsaW5rIHRvIHRoZSBjdXJyZW50IHZlcnNpb24gKHdpa2kgc3ludGF4KScsXG5cdFx0XHRqYTogJ+OBk+OBruODmuODvOOCuOOBruOBk+OBrueJiOOBuOOBruWbuuWumuODquODs+OCr+OCkuOCs+ODlOODvOOBl+OBvuOBme+8iOOCpuOCo+OCreiomOazle+8iScsXG5cdFx0XHQnemgtaGFucyc6ICflpI3liLbpk77mjqXliLDlvZPliY3kv67orqLniYjmnKznmoTnu7Tln7ror63ms5UnLFxuXHRcdFx0J3poLWhhbnQnOiAn6KSH6KO96YCj57WQ5Yiw55W25YmN5L+u6KiC54mI5pys55qE57at5Z+66Kqe5rOVJyxcblx0XHR9KSxcblx0XHREaWZmOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0RpZmYgbGluaycsXG5cdFx0XHRqYTogJ+ePvuWcqOOBrueJiOmWk+OBruW3ruWIhuODquODs+OCrycsXG5cdFx0XHQnemgtaGFucyc6ICflvZPliY3lt67lvILpk77mjqUnLFxuXHRcdFx0J3poLWhhbnQnOiAn55W25YmN5beu55Ww6YCj57WQJyxcblx0XHR9KSxcblx0XHREaWZmVmVyc2lvbjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdkaWZmIHZlcnNpb24nLFxuXHRcdFx0amE6ICfniYjplpPjga7lt67liIYnLFxuXHRcdFx0J3poLWhhbnMnOiAn5beu5byC54mI5pysJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3rueVsOeJiOacrCcsXG5cdFx0fSksXG5cdFx0UGVybWFuZW50OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1Blcm1hbmVudCBsaW5rJyxcblx0XHRcdGphOiAn44GT44Gu54mI44G444Gu5Zu65a6a44Oq44Oz44KvJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W9k+WJjeS/ruiuoumTvuaOpScsXG5cdFx0XHQnemgtaGFudCc6ICfnlbbliY3kv67oqILpgKPntZAnLFxuXHRcdH0pLFxuXHRcdFBlcm1hbmVudFZlcnNpb246IGxvY2FsaXplKHtcblx0XHRcdGVuOiAncGVybWFuZW50IHZlcnNpb24nLFxuXHRcdFx0amE6ICfniYjjgbjjga7lm7rlrprjg6rjg7Pjgq8nLFxuXHRcdFx0J3poLWhhbnMnOiAn5Zu65a6a54mI5pys6ZO+5o6lJyxcblx0XHRcdCd6aC1oYW50JzogJ+WbuuWumueJiOacrOmAo+e1kCcsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7IHJlbmRlckxpc3QgYXMgX3JlbmRlckxpc3QsIEZyYWdtZW50IGFzIF9GcmFnbWVudCwgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBfY3JlYXRlRWxlbWVudEJsb2NrLCB0b0Rpc3BsYXlTdHJpbmcgYXMgX3RvRGlzcGxheVN0cmluZywgY3JlYXRlRWxlbWVudFZOb2RlIGFzIF9jcmVhdGVFbGVtZW50Vk5vZGUsIGNyZWF0ZVRleHRWTm9kZSBhcyBfY3JlYXRlVGV4dFZOb2RlLCB3aXRoQ3R4IGFzIF93aXRoQ3R4LCBjcmVhdGVWTm9kZSBhcyBfY3JlYXRlVk5vZGUsIGNyZWF0ZUJsb2NrIGFzIF9jcmVhdGVCbG9jayB9IGZyb20gXCJ2dWVcIlxuXG5jb25zdCBfaG9pc3RlZF8xID0geyBjbGFzczogXCJkaWZmLWxpbmstY29weS1saXN0XCIgfVxuY29uc3QgX2hvaXN0ZWRfMiA9IHsgY2xhc3M6IFwiZGlmZi1saW5rLWNvcHktdGV4dFwiIH1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcbiAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jaygkc2V0dXBbXCJDZHhEaWFsb2dcIl0sIHtcbiAgICBvcGVuOiAkc2V0dXAuaXNPcGVuLFxuICAgIFwib25VcGRhdGU6b3BlblwiOiBbXG4gICAgICBfY2FjaGVbMF0gfHwgKF9jYWNoZVswXSA9ICRldmVudCA9PiAoKCRzZXR1cC5pc09wZW4pID0gJGV2ZW50KSksXG4gICAgICAkc2V0dXAuaGFuZGxlT3BlbkNoYW5nZVxuICAgIF0sXG4gICAgdGl0bGU6ICRzZXR1cC5nZXRNZXNzYWdlKCdEaWZmJyksXG4gICAgXCJkZWZhdWx0LWFjdGlvblwiOiB7bGFiZWw6ICRzZXR1cC5nZXRNZXNzYWdlKCdDbG9zZScpfSxcbiAgICBcInVzZS1jbG9zZS1idXR0b25cIjogdHJ1ZSxcbiAgICBvbkRlZmF1bHQ6ICRzZXR1cC5jbG9zZVxuICB9LCB7XG4gICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF8xLCBbXG4gICAgICAgIChfb3BlbkJsb2NrKHRydWUpLCBfY3JlYXRlRWxlbWVudEJsb2NrKF9GcmFnbWVudCwgbnVsbCwgX3JlbmRlckxpc3QoJHByb3BzLml0ZW1zLCAoaXRlbSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZGl2XCIsIHtcbiAgICAgICAgICAgIGtleTogaXRlbS50ZXh0LFxuICAgICAgICAgICAgY2xhc3M6IFwiZGlmZi1saW5rLWNvcHktaXRlbVwiXG4gICAgICAgICAgfSwgW1xuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImNvZGVcIiwgX2hvaXN0ZWRfMiwgX3RvRGlzcGxheVN0cmluZyhpdGVtLnRleHQpLCAxIC8qIFRFWFQgKi8pLFxuICAgICAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIkNkeEJ1dHRvblwiXSwge1xuICAgICAgICAgICAgICB3ZWlnaHQ6IFwicHJpbWFyeVwiLFxuICAgICAgICAgICAgICBvbkNsaWNrOiAkZXZlbnQgPT4gKCRzZXR1cC5jb3B5VGV4dChpdGVtLnRleHQpKVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgICAgICAgICAgX2NyZWF0ZVRleHRWTm9kZShfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5nZXRNZXNzYWdlKCdDb3B5JykpLCAxIC8qIFRFWFQgKi8pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgICAgICAgICAgfSwgOCAvKiBQUk9QUyAqLywgW1wib25DbGlja1wiXSlcbiAgICAgICAgICBdKSlcbiAgICAgICAgfSksIDEyOCAvKiBLRVlFRF9GUkFHTUVOVCAqLykpXG4gICAgICBdKVxuICAgIF0pLFxuICAgIF86IDEgLyogU1RBQkxFICovXG4gIH0sIDggLyogUFJPUFMgKi8sIFtcIm9wZW5cIiwgXCJ0aXRsZVwiLCBcImRlZmF1bHQtYWN0aW9uXCJdKSlcbn0iLCAiaW1wb3J0IHNjcmlwdCBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxEaWZmTGlua1xcXFxBcHAudnVlP3R5cGU9c2NyaXB0XCI7aW1wb3J0IFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxEaWZmTGlua1xcXFxBcHAudnVlP3R5cGU9c3R5bGUmaW5kZXg9MFwiO2ltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXERpZmZMaW5rXFxcXEFwcC52dWU/dHlwZT10ZW1wbGF0ZVwiOyBzY3JpcHQucmVuZGVyID0gcmVuZGVyO3NjcmlwdC5fX2ZpbGUgPSBcInNyY1xcXFxEaWZmTGlua1xcXFxBcHAudnVlXCI7c2NyaXB0Ll9fc2NvcGVJZCA9IFwiZGF0YS12LWFlMjY1YzZmXCI7ZXhwb3J0IGRlZmF1bHQgc2NyaXB0OyIsICJpbXBvcnQge2FkZFBvcnRsZXRMaW5rfSBmcm9tICcuL2FkZFBvcnRsZXRMaW5rJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxuY29uc3QgYnVpbGRMaW5rID0gKG9sZElkOiBudW1iZXIgfCBudWxsLCBkaWZmSWQ6IG51bWJlcik6IHZvaWQgPT4ge1xuXHRsZXQgbGluazogc3RyaW5nID0gJ1NwZWNpYWw6RGlmZi8nO1xuXHRpZiAob2xkSWQpIHtcblx0XHRsaW5rICs9IGAke29sZElkfS9gO1xuXHR9XG5cdGxpbmsgKz0gZGlmZklkO1xuXG5cdGFkZFBvcnRsZXRMaW5rKHtcblx0XHRsaW5rLFxuXHRcdHRleHQ6IGdldE1lc3NhZ2UoJ0RpZmYnKSxcblx0XHR0b29sdGlwOiBnZXRNZXNzYWdlKCdDb3B5RGlmZicpLFxuXHRcdGRlZmF1bHRUZXh0QXJyYXlJbmRleDogMCxcblx0fSk7XG59O1xuXG5leHBvcnQge2J1aWxkTGlua307XG4iLCAie1xuXHRcInZlcnNpb25cIjogXCIyLjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgRGlmZkxpbmsvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge2FwaX0gZnJvbSAnLi4vYXBpJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxudHlwZSBDb21wYXJlUmVzcG9uc2UgPSB7XG5cdGNvbXBhcmU/OiB7XG5cdFx0ZnJvbXJldmlkOiBudW1iZXI7XG5cdH07XG59O1xuXG5jb25zdCBwYXJhbWV0ZXJzOiBBcGlDb21wYXJlUGFnZXNQYXJhbXMgPSB7XG5cdGFjdGlvbjogJ2NvbXBhcmUnLFxuXHRmb3JtYXQ6ICdqc29uJyxcblx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRwcm9wOiAnaWRzJyxcblx0dG9yZWxhdGl2ZTogJ3ByZXYnLFxuXHRzbWF4YWdlOiA2MDAsXG5cdG1heGFnZTogNjAwLFxufTtcblxuY29uc3QgcXVlcnlBcGkgPSBhc3luYyAoZGlmZklkOiBudW1iZXIpOiBQcm9taXNlPENvbXBhcmVSZXNwb25zZT4gPT4ge1xuXHR0cnkge1xuXHRcdHJldHVybiBhd2FpdCBhcGkuZ2V0KHtcblx0XHRcdC4uLnBhcmFtZXRlcnMsXG5cdFx0XHRmcm9tcmV2OiBkaWZmSWQsXG5cdFx0fSBhcyB0eXBlb2YgcGFyYW1ldGVycyk7XG5cdH0gY2F0Y2ggKGVycm9yOiB1bmtub3duKSB7XG5cdFx0Y29uc29sZS5lcnJvcignW0RpZmZMaW5rXSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0XHR0b2FzdGlmeShcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogZ2V0TWVzc2FnZSgnTmV0d29yayBlcnJvcicpLFxuXHRcdFx0XHRjbG9zZTogdHJ1ZSxcblx0XHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdFx0fSxcblx0XHRcdCdlcnJvcidcblx0XHQpO1xuXG5cdFx0cmV0dXJuIHt9O1xuXHR9XG59O1xuXG5leHBvcnQge3F1ZXJ5QXBpfTtcbiIsICJpbXBvcnQge2J1aWxkTGlua30gZnJvbSAnLi9idWlsZExpbmsnO1xuaW1wb3J0IHtxdWVyeUFwaX0gZnJvbSAnLi91dGlsL3F1ZXJ5QXBpJztcblxuY29uc3QgY29tcGFyZVdpdGhSZW1vdGVEaWZmSWQgPSBhc3luYyAoZGlmZklkOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3QgcmVzcG9uc2U6IEF3YWl0ZWQ8UmV0dXJuVHlwZTx0eXBlb2YgcXVlcnlBcGk+PiA9IGF3YWl0IHF1ZXJ5QXBpKGRpZmZJZCk7XG5cdGNvbnN0IHt3Z0RpZmZOZXdJZCwgd2dEaWZmT2xkSWR9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRpZiAoZGlmZklkID09PSB3Z0RpZmZOZXdJZCAmJiByZXNwb25zZVsnY29tcGFyZSddPy5mcm9tcmV2aWQgPT09IHdnRGlmZk9sZElkKSB7XG5cdFx0YnVpbGRMaW5rKDAsIGRpZmZJZCk7XG5cdH1cbn07XG5cbmV4cG9ydCB7Y29tcGFyZVdpdGhSZW1vdGVEaWZmSWR9O1xuIiwgImltcG9ydCB7YWRkUG9ydGxldExpbmt9IGZyb20gJy4vYWRkUG9ydGxldExpbmsnO1xuaW1wb3J0IHtidWlsZExpbmt9IGZyb20gJy4vYnVpbGRMaW5rJztcbmltcG9ydCB7Y29tcGFyZVdpdGhSZW1vdGVEaWZmSWR9IGZyb20gJy4vY29tcGFyZVdpdGhSZW1vdGVEaWZmSWQnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBwcm9jZXNzSWQgPSAoXG5cdGlzUmV2aXNpb25QYWdlOiBib29sZWFuLFxuXHR7ZGlmZklkLCBvbGRJZCwgcmV2aXNpb25JZH06IHtkaWZmSWQ6IG51bWJlciB8IG51bGw7IG9sZElkOiBudW1iZXIgfCBudWxsOyByZXZpc2lvbklkOiBudW1iZXIgfCBudWxsfVxuKTogdm9pZCA9PiB7XG5cdGlmIChkaWZmSWQpIHtcblx0XHRidWlsZExpbmsob2xkSWQsIGRpZmZJZCk7XG5cdFx0aWYgKG9sZElkKSB7XG5cdFx0XHR2b2lkIGNvbXBhcmVXaXRoUmVtb3RlRGlmZklkKGRpZmZJZCk7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKHJldmlzaW9uSWQgJiYgaXNSZXZpc2lvblBhZ2UpIHtcblx0XHRhZGRQb3J0bGV0TGluayh7XG5cdFx0XHR0ZXh0OiBnZXRNZXNzYWdlKCdQZXJtYW5lbnQnKSxcblx0XHRcdHRvb2x0aXA6IGdldE1lc3NhZ2UoJ0NvcHlQZXJtYW5lbnQnKSxcblx0XHRcdGxpbms6IGBTcGVjaWFsOlBlcm1hTGluay8ke3JldmlzaW9uSWR9YCxcblx0XHRcdGRlZmF1bHRUZXh0QXJyYXlJbmRleDogMSxcblx0XHRcdGlzUGVybWFMaW5rOiB0cnVlLFxuXHRcdH0pO1xuXHR9XG59O1xuXG5leHBvcnQge3Byb2Nlc3NJZH07XG4iLCAiaW1wb3J0IHtjaGVja0RpZmZQYWdlfSBmcm9tICcuL21vZHVsZXMvdXRpbC9jaGVja0RpZmZQYWdlJztcbmltcG9ydCB7Y2hlY2tSZXZpc2lvblBhZ2V9IGZyb20gJy4vbW9kdWxlcy91dGlsL2NoZWNrUmV2aXNpb25QYWdlJztcbmltcG9ydCB7cHJvY2Vzc0lkfSBmcm9tICcuL21vZHVsZXMvcHJvY2Vzc0lkJztcblxubXcuaG9vaygnd2lraXBhZ2UuY29udGVudCcpLmFkZChmdW5jdGlvbiBkaWZmTGluaygkY29udGVudCk6IHZvaWQge1xuXHRpZiAoJGNvbnRlbnQuYXR0cignaWQnKSAhPT0gJ213LWNvbnRlbnQtdGV4dCcpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBpc0RpZmZQYWdlOiBib29sZWFuID0gY2hlY2tEaWZmUGFnZSgkY29udGVudCk7XG5cdGNvbnN0IGlzUmV2aXNpb25QYWdlOiBib29sZWFuID0gY2hlY2tSZXZpc2lvblBhZ2UoJGNvbnRlbnQpO1xuXHRpZiAoIWlzRGlmZlBhZ2UgJiYgIWlzUmV2aXNpb25QYWdlKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qge3dnRGlmZk5ld0lkLCB3Z0RpZmZPbGRJZCwgd2dSZXZpc2lvbklkfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRwcm9jZXNzSWQoaXNSZXZpc2lvblBhZ2UsIHtcblx0XHRkaWZmSWQ6IHdnRGlmZk5ld0lkID8/IG51bGwsXG5cdFx0b2xkSWQ6IHdnRGlmZk9sZElkID8/IG51bGwsXG5cdFx0cmV2aXNpb25JZDogd2dSZXZpc2lvbklkID8/IG51bGwsXG5cdH0pO1xufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsZ0JBQWlCQyxjQUE4QjtBQUNwRCxRQUFNO0lBQUNDO0VBQWUsSUFBSUMsR0FBR0MsT0FBT0MsSUFBSTtBQUN4QyxTQUFPSixTQUFTSyxLQUFLLE9BQU8sRUFBRUMsU0FBUyxNQUFNLEtBQUssQ0FBQyxDQUFDTDtBQUNyRDs7QUNIQSxJQUFNTSxvQkFBcUJQLGNBQThCO0FBQ3hELFVBQ0VBLFNBQVNLLEtBQUssOEJBQThCLEVBQUVHLFVBQzlDUixTQUFTSyxLQUFLLDRDQUE0QyxFQUFFRyxVQUFVO0FBRXpFOztBQ0xBLElBQUFDLGNBQTRDQyxRQUFBLEtBQUE7O0FDQzVDLElBQUFDLGVBQW1DRCxRQUFBLGtCQUFBO0FBQ25DLElBQUFFLGNBQXlCRixRQUFBLEtBQUE7O0FDRnpCLElBQUFHLG9CQUF1QkgsUUFBQSxpQkFBQTtBQUV2QixJQUFNSSxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOLGtCQUFBLEdBQWlCRCxrQkFBQUUsVUFBUztNQUN6QkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEQyxRQUFBLEdBQU9KLGtCQUFBRSxVQUFTO01BQ2ZHLElBQUk7TUFDSkYsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNERyxPQUFBLEdBQU1OLGtCQUFBRSxVQUFTO01BQ2RHLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREUsU0FBQSxHQUFRUCxrQkFBQUUsVUFBUztNQUNoQkcsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNERyxXQUFBLEdBQVVSLGtCQUFBRSxVQUFTO01BQ2xCRyxJQUFJO01BQ0pGLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRE0sZ0JBQUEsR0FBZVQsa0JBQUFFLFVBQVM7TUFDdkJHLElBQUk7TUFDSkYsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNETyxPQUFBLEdBQU1WLGtCQUFBRSxVQUFTO01BQ2RHLElBQUk7TUFDSkYsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEUSxjQUFBLEdBQWFYLGtCQUFBRSxVQUFTO01BQ3JCRyxJQUFJO01BQ0pGLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRFMsWUFBQSxHQUFXWixrQkFBQUUsVUFBUztNQUNuQkcsSUFBSTtNQUNKRixJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RVLG1CQUFBLEdBQWtCYixrQkFBQUUsVUFBUztNQUMxQkcsSUFBSTtNQUNKRixJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0VBQ0Y7QUFDRDtBQUVBLElBQU1XLGVBQWViLGdCQUFnQjtBQUVyQyxJQUFNYyxhQUFnREMsU0FBUTtBQUM3RCxTQUFPRixhQUFhRSxHQUFHLEtBQUtBO0FBQzdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBRDFEQSxVQUFNQyxRQUFRQztBQU1kLFVBQU1DLE9BQU9DO0FBR2IsVUFBTUMsVUFBQSxHQUFTdEIsWUFBQXVCLEtBQUlMLE1BQU1NLElBQUk7QUFFN0IsS0FBQSxHQUFBeEIsWUFBQXlCLE9BQ0MsTUFBTVAsTUFBTU0sTUFDWEUsV0FBVTtBQUNWSixhQUFPSSxRQUFRQTtJQUNoQixHQUNBO01BQUNDLFdBQVc7SUFBSSxDQUNqQjtBQUVBLFVBQU1DLFFBQVFBLE1BQVk7QUFDekJOLGFBQU9JLFFBQVE7QUFDZk4sV0FBSyxlQUFlLEtBQUs7QUFDekJGLFlBQU1XLFFBQVE7SUFDZjtBQUVBLFVBQU1DLG1CQUFvQkosV0FBeUI7QUFDbERKLGFBQU9JLFFBQVFBO0FBQ2YsVUFBSSxDQUFDQSxPQUFPO0FBQ1hFLGNBQU07TUFDUDtJQUNEO0FBRUEsVUFBTUcsV0FBWUMsVUFBdUI7QUFDeENDLHdCQUFDLGFBQVk7QUFDWixZQUFJO0FBQ0gsY0FBSUMsVUFBVUMsYUFBYUMsT0FBT0MsaUJBQWlCO0FBQ2xELGtCQUFNSCxVQUFVQyxVQUFVRyxVQUFVTixJQUFJO0FBQ3hDO1VBQ0Q7UUFDRCxRQUFRO1FBQUM7QUFFVCxjQUFNTyxTQUFTQyxTQUFTQyxjQUFjLFVBQVU7QUFDaERGLGVBQU9iLFFBQVFNO0FBQ2ZPLGVBQU9HLGFBQWEsWUFBWSxNQUFNO0FBQ3RDSCxlQUFPSSxNQUFNQyxXQUFXO0FBQ3hCTCxlQUFPSSxNQUFNRSxNQUFNO0FBQ25CTixlQUFPSSxNQUFNRyxPQUFPO0FBQ3BCTixpQkFBU08sS0FBS0MsT0FBT1QsTUFBTTtBQUMzQkEsZUFBT1UsT0FBTztBQUNkVCxpQkFBU1UsWUFBWSxNQUFNO0FBQzNCWCxlQUFPWSxPQUFPO01BQ2YsQ0FBQSxFQUFHLEVBQUVDLEtBQUssTUFBTTtBQUNmLGFBQUs5RCxHQUFHK0QsT0FBT3JDLFdBQVcsUUFBUSxHQUFHO1VBQ3BDc0MsTUFBTTtVQUNOQyxLQUFLO1FBQ04sQ0FBQztNQUNGLENBQUM7SUFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBRW5FQSxJQUFBQyxjQUF5VTFELFFBQUEsS0FBQTtBQUV6VSxJQUFNMkQsYUFBYTtFQUFFQyxPQUFPO0FBQXNCO0FBQ2xELElBQU1DLGFBQWE7RUFBRUQsT0FBTztBQUFzQjtBQUUzQyxTQUFTRSxPQUFPQyxNQUFNQyxRQUFRQyxRQUFRQyxRQUFRQyxPQUFPQyxVQUFVO0FBQ3BFLFVBQUEsR0FBUVYsWUFBQVcsV0FBVyxJQUFBLEdBQUdYLFlBQUFZLGFBQWFKLE9BQU8sV0FBVyxHQUFHO0lBQ3REeEMsTUFBTXdDLE9BQU8xQztJQUNiLGlCQUFpQixDQUNmd0MsT0FBTyxDQUFDLE1BQU1BLE9BQU8sQ0FBQyxJQUFJTyxZQUFZTCxPQUFPMUMsU0FBVStDLFNBQ3ZETCxPQUFPbEMsZ0JBQUE7SUFFVHdDLE9BQU9OLE9BQU9oRCxXQUFXLE1BQU07SUFDL0Isa0JBQWtCO01BQUN1RCxPQUFPUCxPQUFPaEQsV0FBVyxPQUFPO0lBQUM7SUFDcEQsb0JBQW9CO0lBQ3BCd0QsV0FBV1IsT0FBT3BDO0VBQ3BCLEdBQUc7SUFDRDZDLFVBQUEsR0FBU2pCLFlBQUFrQixTQUFTLE1BQU0sRUFBQSxHQUN0QmxCLFlBQUFtQixvQkFBb0IsT0FBT2xCLFlBQVksR0FBQSxHQUNwQ0QsWUFBQVcsV0FBVyxJQUFJLElBQUEsR0FBR1gsWUFBQW9CO01BQW9CcEIsWUFBQXFCO01BQVc7T0FBQSxHQUFNckIsWUFBQXNCLFlBQVlmLE9BQU9nQixPQUFRQyxVQUFTO0FBQzFGLGdCQUFBLEdBQVF4QixZQUFBVyxXQUFXLElBQUEsR0FBR1gsWUFBQW9CLG9CQUFvQixPQUFPO1VBQy9DM0QsS0FBSytELEtBQUtoRDtVQUNWMEIsT0FBTztRQUNULEdBQUcsRUFBQSxHQUNERixZQUFBbUI7VUFBb0I7VUFBUWhCO1dBQUEsR0FBWUgsWUFBQXlCLGlCQUFpQkQsS0FBS2hELElBQUk7VUFBRzs7UUFBWSxJQUFBLEdBQ2pGd0IsWUFBQTBCLGFBQWFsQixPQUFPLFdBQVcsR0FBRztVQUNoQ21CLFFBQVE7VUFDUkMsU0FBU2YsWUFBV0wsT0FBT2pDLFNBQVNpRCxLQUFLaEQsSUFBSTtRQUMvQyxHQUFHO1VBQ0R5QyxVQUFBLEdBQVNqQixZQUFBa0IsU0FBUyxNQUFNLEVBQUEsR0FDdEJsQixZQUFBNkI7YUFBQSxHQUFpQjdCLFlBQUF5QixpQkFBaUJqQixPQUFPaEQsV0FBVyxNQUFNLENBQUM7WUFBRzs7VUFBWSxDQUFBLENBQzNFO1VBQ0RzRSxHQUFHOztRQUNMLEdBQUcsR0FBZSxDQUFDLFNBQVMsQ0FBQyxDQUFBLENBQzlCO01BQ0gsQ0FBQztNQUFHOztJQUF3QixFQUFBLENBQzdCLENBQUEsQ0FDRjtJQUNEQSxHQUFHOztFQUNMLEdBQUcsR0FBZSxDQUFDLFFBQVEsU0FBUyxnQkFBZ0IsQ0FBQztBQUN2RDs7QUN4Q2dSQyxZQUFPM0IsU0FBU0E7QUFBTzJCLFlBQU9DLFNBQVM7QUFBeUJELFlBQU9FLFlBQVk7QUFBa0IsSUFBT0MsZUFBUUg7O0FKRXBZLElBQUFJLHFCQUEwQzdGLFFBQUEsaUJBQUE7QUFHMUM7Ozs7OztBQU1BLElBQU04RixtQkFBcUMsQ0FBQzVFLFdBQVcsYUFBYSxHQUFHQSxXQUFXLGtCQUFrQixDQUFDO0FBRXJHLElBQU02RSxrQkFBa0JBLENBQUNDLE9BQWNwRSxVQUF5QjtBQUMvRCxNQUFJLE9BQU9BLFVBQVUsWUFBWUEsTUFBTTlCLFNBQVMsR0FBRztBQUNsRGdHLHFCQUFpQkUsS0FBSyxJQUFJcEU7RUFDM0I7QUFDRDtBQUVBLElBQUlxRSxNQUFNQyxRQUFRNUQsT0FBTzZELFFBQVEsR0FBRztBQUNuQ0osa0JBQWdCLEdBQUd6RCxPQUFPNkQsU0FBUyxDQUFDLENBQUM7QUFDckNKLGtCQUFnQixHQUFHekQsT0FBTzZELFNBQVMsQ0FBQyxDQUFDO0FBQ3RDO0FBRUEsSUFBSUMsZ0JBQWdFO0VBQ25FL0MsUUFBUUEsTUFBWTtFQUFDO0FBQ3RCO0FBRUEsSUFBTWdELGFBQWNwQixXQUFpRDtBQUNwRSxRQUFNcUIsT0FBTzVELFNBQVNDLGNBQWMsS0FBSztBQUN6Q0QsV0FBU08sS0FBS0MsT0FBT29ELElBQUk7QUFFekIsUUFBTUMsT0FBQSxHQUE4QnhHLFlBQUF5RyxXQUFVWixjQUFLO0lBQ2xEbEUsTUFBTTtJQUNOdUQ7SUFDQWxELFNBQVNBLE1BQVk7QUFDcEJ3RSxjQUFBLFFBQUFBLFFBQUEsVUFBQUEsSUFBS0UsUUFBUTtBQUNiSCxXQUFLakQsT0FBTztJQUNiO0VBQ0QsQ0FBQztBQUNEa0QsTUFBSUcsTUFBTUosSUFBSTtBQUNmO0FBRUEsSUFBTUssaUJBQWlCQSxDQUFDO0VBQ3ZCekU7RUFDQTBFO0VBQ0FDO0VBQ0FDO0VBQ0FDO0FBQ0QsTUFNWTtBQUFBLE1BQUFDO0FBQ1gsTUFBSUMsVUFBZ0N2RSxTQUFTd0UsY0FBYyxhQUFhO0FBQ3hFLE1BQUksQ0FBQ0QsU0FBUztBQUNiLFVBQU1FLFlBQW1DekUsU0FBU3dFLGNBQWMsYUFBYSxJQUFJLGVBQWU7QUFDaEdELGNBQVV6SCxHQUFHNEgsS0FBS1QsZUFBZVEsV0FBVyxLQUFLakYsTUFBTSxjQUFjMEUsT0FBTztFQUM3RTtBQUNBLE1BQUksQ0FBQ0ssU0FBUztBQUNiO0VBQ0Q7QUFFQSxRQUFNSSxnQkFBaUJDLFdBQTRCO0FBQ2xEQSxVQUFNQyxlQUFlO0FBQ3JCLFVBQU1DLE9BQWVULGNBQWNVLG1CQUFtQkMsU0FBU0YsSUFBSSxJQUFJO0FBQ3ZFLFVBQU12QyxRQUFRLENBQ2I7TUFBQ1IsT0FBT29DO01BQU0zRSxNQUFNMkU7SUFBSSxHQUN4QjtNQUFDcEMsT0FBQSxLQUFBa0QsT0FBWWQsSUFBSSxFQUFBYyxPQUFHSCxNQUFJLElBQUE7TUFBTXRGLE1BQUEsS0FBQXlGLE9BQVdkLElBQUksRUFBQWMsT0FBR0gsTUFBSSxJQUFBO0lBQUksR0FDeEQ7TUFDQy9DLE9BQUEsS0FBQWtELE9BQVlkLElBQUksRUFBQWMsT0FBR0gsTUFBSSxHQUFBLEVBQUFHLE9BQUk3QixpQkFBaUJnQixxQkFBcUIsR0FBQyxJQUFBO01BQ2xFNUUsTUFBQSxLQUFBeUYsT0FBV2QsSUFBSSxFQUFBYyxPQUFHSCxNQUFJLEdBQUEsRUFBQUcsT0FBSTdCLGlCQUFpQmdCLHFCQUFxQixHQUFDLElBQUE7SUFDbEUsQ0FBQTtBQUVEVCxlQUFXcEIsS0FBSztFQUNqQjtBQUVBbUIsZ0JBQWMvQyxPQUFPO0FBQ3JCK0MsbUJBQUEsR0FBZ0JQLG1CQUFBK0IsNkJBQTRCO0lBQzNDQyxTQUFBYix3QkFBU0MsUUFBUWEsdUJBQUEsUUFBQWQsMEJBQUEsU0FBQUEsd0JBQXFCQztJQUN0Q3pELE1BQU07SUFDTnVFLFVBQVVWO0VBQ1gsQ0FBQztBQUNGOztBS2xGQSxJQUFNVyxZQUFZQSxDQUFDQyxPQUFzQkMsV0FBeUI7QUFDakUsTUFBSXJCLE9BQWU7QUFDbkIsTUFBSW9CLE9BQU87QUFDVnBCLFlBQUEsR0FBQWMsT0FBV00sT0FBSyxHQUFBO0VBQ2pCO0FBQ0FwQixVQUFRcUI7QUFFUnZCLGlCQUFlO0lBQ2RFO0lBQ0EzRSxNQUFNaEIsV0FBVyxNQUFNO0lBQ3ZCMEYsU0FBUzFGLFdBQVcsVUFBVTtJQUM5QjRGLHVCQUF1QjtFQUN4QixDQUFDO0FBQ0Y7O0FDZkMsSUFBQXFCLFVBQVc7O0FDQVosSUFBQUMscUJBQXdCcEksUUFBQSxpQkFBQTtBQUV4QixJQUFNcUksT0FBQSxHQUFjRCxtQkFBQUUsV0FBQSxZQUFBWCxPQUE4QlEsT0FBTyxDQUFFOztBQ0QzRCxJQUFBSSxxQkFBdUJ2SSxRQUFBLHFCQUFBO0FBUXZCLElBQU13SSxhQUFvQztFQUN6Q0MsUUFBUTtFQUNSQyxRQUFRO0VBQ1JDLGVBQWU7RUFDZkMsTUFBTTtFQUNOQyxZQUFZO0VBQ1pDLFNBQVM7RUFDVEMsUUFBUTtBQUNUO0FBRUEsSUFBTUMsV0FBQSw0QkFBQTtBQUFBLE1BQUFDLFFBQUE5RyxrQkFBVyxXQUFPK0YsUUFBNkM7QUFDcEUsUUFBSTtBQUNILGFBQUEsTUFBYUcsSUFBSTNJLElBQUk7UUFDcEIsR0FBRzhJO1FBQ0hVLFNBQVNoQjtNQUNWLENBQXNCO0lBQ3ZCLFNBQVNpQixPQUFnQjtBQUN4QkMsY0FBUUQsTUFBTSwwQkFBMEJBLEtBQUs7QUFDN0MsT0FBQSxHQUFBWixtQkFBQWMsVUFDQztRQUNDbkgsTUFBTWhCLFdBQVcsZUFBZTtRQUNoQ1ksT0FBTztRQUNQd0gsVUFBVTtNQUNYLEdBQ0EsT0FDRDtBQUVBLGFBQU8sQ0FBQztJQUNUO0VBQ0QsQ0FBQTtBQUFBLFNBQUEsU0FuQk1OLFVBQUFPLElBQUE7QUFBQSxXQUFBTixNQUFBTyxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEdBQUE7O0FDakJOLElBQU1DLDBCQUFBLDRCQUFBO0FBQUEsTUFBQUMsUUFBQXhILGtCQUEwQixXQUFPK0YsUUFBa0M7QUFBQSxRQUFBMEI7QUFDeEUsVUFBTUMsV0FBQSxNQUF1RGIsU0FBU2QsTUFBTTtBQUM1RSxVQUFNO01BQUM0QjtNQUFhQztJQUFXLElBQUl2SyxHQUFHQyxPQUFPQyxJQUFJO0FBQ2pELFFBQUl3SSxXQUFXNEIsaUJBQWVGLG9CQUFBQyxTQUFTLFNBQVMsT0FBQSxRQUFBRCxzQkFBQSxTQUFBLFNBQWxCQSxrQkFBcUJJLGVBQWNELGFBQWE7QUFDN0UvQixnQkFBVSxHQUFHRSxNQUFNO0lBQ3BCO0VBQ0QsQ0FBQTtBQUFBLFNBQUEsU0FOTXdCLHlCQUFBTyxLQUFBO0FBQUEsV0FBQU4sTUFBQUgsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxHQUFBOztBQ0VOLElBQU1TLFlBQVlBLENBQ2pCQyxnQkFDQTtFQUFDakM7RUFBUUQ7RUFBT21DO0FBQVUsTUFDaEI7QUFDVixNQUFJbEMsUUFBUTtBQUNYRixjQUFVQyxPQUFPQyxNQUFNO0FBQ3ZCLFFBQUlELE9BQU87QUFDVixXQUFLeUIsd0JBQXdCeEIsTUFBTTtJQUNwQztFQUNELFdBQVdrQyxjQUFjRCxnQkFBZ0I7QUFDeEN4RCxtQkFBZTtNQUNkekUsTUFBTWhCLFdBQVcsV0FBVztNQUM1QjBGLFNBQVMxRixXQUFXLGVBQWU7TUFDbkMyRixNQUFBLHFCQUFBYyxPQUEyQnlDLFVBQVU7TUFDckN0RCx1QkFBdUI7TUFDdkJDLGFBQWE7SUFDZCxDQUFDO0VBQ0Y7QUFDRDs7QUNuQkF2SCxHQUFHNkssS0FBSyxrQkFBa0IsRUFBRUMsSUFBSSxTQUFTQyxTQUFTakwsVUFBZ0I7QUFDakUsTUFBSUEsU0FBU2tMLEtBQUssSUFBSSxNQUFNLG1CQUFtQjtBQUM5QztFQUNEO0FBRUEsUUFBTUMsYUFBc0JwTCxjQUFjQyxRQUFRO0FBQ2xELFFBQU02SyxpQkFBMEJ0SyxrQkFBa0JQLFFBQVE7QUFDMUQsTUFBSSxDQUFDbUwsY0FBYyxDQUFDTixnQkFBZ0I7QUFDbkM7RUFDRDtBQUVBLFFBQU07SUFBQ0w7SUFBYUM7SUFBYVc7RUFBWSxJQUFJbEwsR0FBR0MsT0FBT0MsSUFBSTtBQUUvRHdLLFlBQVVDLGdCQUFnQjtJQUN6QmpDLFFBQVE0QixnQkFBQSxRQUFBQSxnQkFBQSxTQUFBQSxjQUFlO0lBQ3ZCN0IsT0FBTzhCLGdCQUFBLFFBQUFBLGdCQUFBLFNBQUFBLGNBQWU7SUFDdEJLLFlBQVlNLGlCQUFBLFFBQUFBLGlCQUFBLFNBQUFBLGVBQWdCO0VBQzdCLENBQUM7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJjaGVja0RpZmZQYWdlIiwgIiRjb250ZW50IiwgIndnQ3VyUmV2aXNpb25JZCIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImZpbmQiLCAiaGFzQ2xhc3MiLCAiY2hlY2tSZXZpc2lvblBhZ2UiLCAibGVuZ3RoIiwgImltcG9ydF92dWU0IiwgInJlcXVpcmUiLCAiaW1wb3J0X2NvZGV4IiwgImltcG9ydF92dWUyIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJsb2NhbGl6ZSIsICJqYSIsICJDbG9zZSIsICJlbiIsICJDb3B5IiwgIkNvcGllZCIsICJDb3B5RGlmZiIsICJDb3B5UGVybWFuZW50IiwgIkRpZmYiLCAiRGlmZlZlcnNpb24iLCAiUGVybWFuZW50IiwgIlBlcm1hbmVudFZlcnNpb24iLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgInByb3BzIiwgIl9fcHJvcHMiLCAiZW1pdCIsICJfX2VtaXQiLCAiaXNPcGVuIiwgInJlZiIsICJvcGVuIiwgIndhdGNoIiwgInZhbHVlIiwgImltbWVkaWF0ZSIsICJjbG9zZSIsICJvbkNsb3NlIiwgImhhbmRsZU9wZW5DaGFuZ2UiLCAiY29weVRleHQiLCAidGV4dCIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJuYXZpZ2F0b3IiLCAiY2xpcGJvYXJkIiwgIndpbmRvdyIsICJpc1NlY3VyZUNvbnRleHQiLCAid3JpdGVUZXh0IiwgImhlbHBlciIsICJkb2N1bWVudCIsICJjcmVhdGVFbGVtZW50IiwgInNldEF0dHJpYnV0ZSIsICJzdHlsZSIsICJwb3NpdGlvbiIsICJ0b3AiLCAibGVmdCIsICJib2R5IiwgImFwcGVuZCIsICJzZWxlY3QiLCAiZXhlY0NvbW1hbmQiLCAicmVtb3ZlIiwgInRoZW4iLCAibm90aWZ5IiwgInR5cGUiLCAidGFnIiwgImltcG9ydF92dWUzIiwgIl9ob2lzdGVkXzEiLCAiY2xhc3MiLCAiX2hvaXN0ZWRfMiIsICJyZW5kZXIiLCAiX2N0eCIsICJfY2FjaGUiLCAiJHByb3BzIiwgIiRzZXR1cCIsICIkZGF0YSIsICIkb3B0aW9ucyIsICJvcGVuQmxvY2siLCAiY3JlYXRlQmxvY2siLCAiJGV2ZW50IiwgInRpdGxlIiwgImxhYmVsIiwgIm9uRGVmYXVsdCIsICJkZWZhdWx0IiwgIndpdGhDdHgiLCAiY3JlYXRlRWxlbWVudFZOb2RlIiwgImNyZWF0ZUVsZW1lbnRCbG9jayIsICJGcmFnbWVudCIsICJyZW5kZXJMaXN0IiwgIml0ZW1zIiwgIml0ZW0iLCAidG9EaXNwbGF5U3RyaW5nIiwgImNyZWF0ZVZOb2RlIiwgIndlaWdodCIsICJvbkNsaWNrIiwgImNyZWF0ZVRleHRWTm9kZSIsICJfIiwgIkFwcF9kZWZhdWx0IiwgIl9fZmlsZSIsICJfX3Njb3BlSWQiLCAiQXBwX2RlZmF1bHQyIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJkZWZhdWx0VGV4dEFycmF5IiwgImFwcGx5Q3VzdG9tVGV4dCIsICJpbmRleCIsICJBcnJheSIsICJpc0FycmF5IiwgIkRpZmZMaW5rIiwgImV2ZW50TGlzdGVuZXIiLCAib3BlbkRpYWxvZyIsICJyb290IiwgImFwcCIsICJjcmVhdGVBcHAiLCAidW5tb3VudCIsICJtb3VudCIsICJhZGRQb3J0bGV0TGluayIsICJ0b29sdGlwIiwgImxpbmsiLCAiZGVmYXVsdFRleHRBcnJheUluZGV4IiwgImlzUGVybWFMaW5rIiwgIl9lbGVtZW50JGZpcnN0RWxlbWVudCIsICJlbGVtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAicG9ydGxldElkIiwgInV0aWwiLCAiY2xpY2tMaXN0ZW5lciIsICJldmVudCIsICJwcmV2ZW50RGVmYXVsdCIsICJoYXNoIiwgImRlY29kZVVSSUNvbXBvbmVudCIsICJsb2NhdGlvbiIsICJjb25jYXQiLCAiYWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyIiwgInRhcmdldCIsICJmaXJzdEVsZW1lbnRDaGlsZCIsICJsaXN0ZW5lciIsICJidWlsZExpbmsiLCAib2xkSWQiLCAiZGlmZklkIiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImFwaSIsICJpbml0TXdBcGkiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgInBhcmFtZXRlcnMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAidG9yZWxhdGl2ZSIsICJzbWF4YWdlIiwgIm1heGFnZSIsICJxdWVyeUFwaSIsICJfcmVmMiIsICJmcm9tcmV2IiwgImVycm9yIiwgImNvbnNvbGUiLCAidG9hc3RpZnkiLCAiZHVyYXRpb24iLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImNvbXBhcmVXaXRoUmVtb3RlRGlmZklkIiwgIl9yZWYzIiwgIl9yZXNwb25zZSRjb21wYXJlIiwgInJlc3BvbnNlIiwgIndnRGlmZk5ld0lkIiwgIndnRGlmZk9sZElkIiwgImZyb21yZXZpZCIsICJfeDIiLCAicHJvY2Vzc0lkIiwgImlzUmV2aXNpb25QYWdlIiwgInJldmlzaW9uSWQiLCAiaG9vayIsICJhZGQiLCAiZGlmZkxpbmsiLCAiYXR0ciIsICJpc0RpZmZQYWdlIiwgIndnUmV2aXNpb25JZCJdCn0K

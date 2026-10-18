/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Util}
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

// dist/Util/Util.js
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
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    var _iterator = _createForOfIteratorHelper(__getOwnPropNames(from)), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        let key = _step.value;
        if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);
//! src/Util/Util.ts
var Util_exports = {};
__export(Util_exports, {
  MwUri: () => MwUri,
  addEventListenerWithRemover: () => addEventListenerWithRemover,
  changeOpacityWhenMouseEnterOrLeave: () => changeOpacityWhenMouseEnterOrLeave,
  checkA11yConfirmKey: () => checkA11yConfirmKey,
  checkDependencies: () => checkDependencies,
  delay: () => delay,
  generateArray: () => generateArray,
  getBody: () => getBody,
  initMwApi: () => initMwApi,
  oouiConfirmWithStyle: () => oouiConfirmWithStyle,
  scrollTop: () => scrollTop,
  uniqueArray: () => uniqueArray,
  userIsInGroup: () => userIsInGroup
});
module.exports = __toCommonJS(Util_exports);
//! src/Util/modules/addEventListenerWithRemover.ts
var addEventListenerWithRemover = ({
  target,
  type,
  listener,
  options = {}
}) => {
  target.addEventListener(type, listener, options);
  return {
    remove: () => {
      target.removeEventListener(type, listener, options);
    }
  };
};
//! src/Util/modules/changeOpacityWhenMouseEnterOrLeave.ts
var changeOpacityWhenMouseEnterOrLeave = (event, opacity = 0.7) => {
  event.currentTarget.style.opacity = event.type === "mouseenter" ? "1" : opacity.toString();
};
//! src/Util/modules/checkA11yConfirmKey.ts
var checkA11yConfirmKey = (event) => {
  if (["click", "keydown"].includes(event.type)) {
    if (event.type === "keydown") {
      return ["Enter", " "].includes(event.key);
    }
    return true;
  }
  return false;
};
//! src/Util/modules/generateArray.ts
function generateArray(...args) {
  return args.flatMap((arg) => {
    if (Array.isArray(arg)) {
      return arg;
    }
    if (arg instanceof NodeList) {
      return [...arg];
    }
    return [arg];
  });
}
//! src/Util/modules/initMwApi.ts
function initMwApi(userAgent, apiUri) {
  void mw.loader.using("mediawiki.api");
  const apiOptions = {
    ajax: {
      headers: {
        "Api-User-Agent": userAgent ? "Qiuwen/1.1 (".concat(userAgent, ")") : "Qiuwen/1.1"
      }
    }
  };
  if (apiUri) {
    return new mw.ForeignApi(apiUri, apiOptions);
  }
  return new mw.Api(apiOptions);
}
//! src/Util/modules/uniqueArray.ts
var uniqueArray = function uniqueArray2(args) {
  /**!
   * SPDX-License-Identifier: CC-BY-SA-4.0
   *
   * @source {@link https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array/922982}
   * @license CC-BY-SA-4.0
   */
  const result = [];
  var _iterator2 = _createForOfIteratorHelper(args), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      const item = _step2.value;
      if (!result.includes(item)) {
        result[result.length] = item;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return result;
};
//! src/Util/modules/checkDependencies.ts
function checkDependencies(_x, _x2) {
  return _checkDependencies.apply(this, arguments);
}
//! src/Util/modules/delay.ts
function _checkDependencies() {
  _checkDependencies = _asyncToGenerator(function* (gadgetNames, option) {
    const api = initMwApi("Util-CheckDependencies");
    const gadgets = uniqueArray(generateArray(gadgetNames));
    option || (option = 1);
    var _iterator3 = _createForOfIteratorHelper(gadgets), _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
        const gadget = _step3.value;
        if (option === "0" && mw.user.options.get("gadget-".concat(gadget)) === "1" || option === "1" && mw.user.options.get("gadget-".concat(gadget)) === "0") {
          yield api.postWithEditToken({
            action: "options",
            change: "gadget-".concat(gadget, "=").concat(option)
          });
          yield mw.loader.using("ext.gadget.".concat(gadget));
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  });
  return _checkDependencies.apply(this, arguments);
}
var delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};
//! src/Util/modules/getBody.ts
var getBody = () => {
  return $.ready.then(() => {
    const $body = $("body");
    return $body;
  });
};
//! src/Util/modules/mwUri.ts
var MwUri = class extends URL {
  constructor(url, base = location.origin) {
    super(url, base);
  }
  extend(object) {
    for (var _i = 0, _Object$entries = Object.entries(object); _i < _Object$entries.length; _i++) {
      const [key, value] = _Object$entries[_i];
      this.searchParams.set(key, value);
    }
    return this;
  }
  getRelativePath() {
    return this.pathname + this.search + this.hash;
  }
};
//! src/Util/modules/oouiConfirmWithStyle.ts
var import_vue3 = require("vue");
var import_vue = require("vue");
var import_codex = require("@wikimedia/codex");
//! src/Util/modules/util/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Confirm: (0, import_ext_gadget.localize)({
      en: "Confirm",
      ja: "確認",
      "zh-hans": "确认",
      "zh-hant": "確認"
    }),
    Cancel: (0, import_ext_gadget.localize)({
      en: "Cancel",
      ja: "キャンセル",
      "zh-hans": "取消",
      "zh-hant": "取消"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
var OouiConfirmWithStyle_default = /* @__PURE__ */ (0, import_vue.defineComponent)({
  __name: "OouiConfirmWithStyle",
  props: {
    open: {
      type: Boolean,
      required: true
    },
    message: {
      type: String,
      required: true
    },
    onConfirm: {
      type: Function,
      required: true
    },
    onCancel: {
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
    const close = () => {
      emit("update:open", false);
    };
    const confirm = () => {
      close();
      props.onConfirm();
    };
    const cancel = () => {
      close();
      props.onCancel();
    };
    const handleOpenChange = (open) => {
      emit("update:open", open);
      if (!open) {
        props.onCancel();
      }
    };
    const __returned__ = {
      props,
      emit,
      close,
      confirm,
      cancel,
      handleOpenChange,
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
var import_vue2 = require("vue");
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue2.openBlock)(), (0, import_vue2.createBlock)($setup["CdxDialog"], {
    open: $props.open,
    title: $props.message,
    "primary-action": {
      label: $setup.getMessage("Confirm"),
      actionType: "progressive"
    },
    "default-action": {
      label: $setup.getMessage("Cancel")
    },
    "use-close-button": true,
    "onUpdate:open": $setup.handleOpenChange,
    onPrimary: $setup.confirm,
    onDefault: $setup.cancel
  }, null, 8, ["open", "title", "primary-action", "default-action"]);
}
//! src/Util/modules/OouiConfirmWithStyle.vue
OouiConfirmWithStyle_default.render = render;
OouiConfirmWithStyle_default.__file = "src\\Util\\modules\\OouiConfirmWithStyle.vue";
OouiConfirmWithStyle_default.__scopeId = "data-v-86ea89ad";
var OouiConfirmWithStyle_default2 = OouiConfirmWithStyle_default;
//! src/Util/modules/oouiConfirmWithStyle.ts
var oouiConfirmWithStyle = (message) => new Promise(/* @__PURE__ */ (function() {
  var _ref = _asyncToGenerator(function* (resolve) {
    yield mw.loader.using(["@wikimedia/codex", "vue"]);
    const root = document.createElement("div");
    document.body.append(root);
    let settled = false;
    const settle = (value) => {
      if (settled) {
        return;
      }
      settled = true;
      app.unmount();
      root.remove();
      resolve(value);
    };
    const app = (0, import_vue3.createApp)(OouiConfirmWithStyle_default2, {
      open: true,
      message,
      onConfirm: () => {
        settle(true);
      },
      onCancel: () => {
        settle(false);
      }
    });
    app.mount(root);
  });
  return function(_x3) {
    return _ref.apply(this, arguments);
  };
})());
//! src/Util/modules/scrollTop.ts
var scrollTop = (targetHeight, effectsOptionsOrDuration = {}) => {
  const options = typeof effectsOptionsOrDuration === "number" || typeof effectsOptionsOrDuration === "string" ? {
    duration: effectsOptionsOrDuration,
    easing: "linear"
  } : {
    duration: "slow",
    easing: "linear",
    ...effectsOptionsOrDuration
  };
  $(document).find("html, body").animate({
    scrollTop: targetHeight
  }, options);
};
//! src/Util/modules/userIsInGroup.ts
var userIsInGroup = (groups) => {
  const {
    wgUserGroups,
    wgGlobalGroups
  } = mw.config.get();
  return [...wgUserGroups || [], ...wgGlobalGroups || []].some((element) => {
    return generateArray(groups).includes(element);
  });
};

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1V0aWwvVXRpbC50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2FkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlci50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2NoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmUudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9jaGVja0ExMXlDb25maXJtS2V5LnRzIiwgInNyYy9VdGlsL21vZHVsZXMvZ2VuZXJhdGVBcnJheS50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2luaXRNd0FwaS50cyIsICJzcmMvVXRpbC9tb2R1bGVzL3VuaXF1ZUFycmF5LnRzIiwgInNyYy9VdGlsL21vZHVsZXMvY2hlY2tEZXBlbmRlbmNpZXMudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9kZWxheS50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2dldEJvZHkudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9td1VyaS50cyIsICJzcmMvVXRpbC9tb2R1bGVzL29vdWlDb25maXJtV2l0aFN0eWxlLnRzIiwgImRpc3QvVXRpbC9zcmMvVXRpbC9tb2R1bGVzL09vdWlDb25maXJtV2l0aFN0eWxlLnZ1ZSIsICJzcmMvVXRpbC9tb2R1bGVzL3V0aWwvaTE4bi50cyIsICJzZmMtdGVtcGxhdGU6RTpcXENvZGVzXFxRaXV3ZW5cXFFpdXdlbkdhZGdldHNcXHNyY1xcVXRpbFxcbW9kdWxlc1xcT291aUNvbmZpcm1XaXRoU3R5bGUudnVlP3R5cGU9dGVtcGxhdGUiLCAic3JjL1V0aWwvbW9kdWxlcy9Pb3VpQ29uZmlybVdpdGhTdHlsZS52dWUiLCAic3JjL1V0aWwvbW9kdWxlcy9zY3JvbGxUb3AudHMiLCAic3JjL1V0aWwvbW9kdWxlcy91c2VySXNJbkdyb3VwLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQge2FkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcn0gZnJvbSAnLi9tb2R1bGVzL2FkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcic7XG5leHBvcnQge2NoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmV9IGZyb20gJy4vbW9kdWxlcy9jaGFuZ2VPcGFjaXR5V2hlbk1vdXNlRW50ZXJPckxlYXZlJztcbmV4cG9ydCB7Y2hlY2tBMTF5Q29uZmlybUtleX0gZnJvbSAnLi9tb2R1bGVzL2NoZWNrQTExeUNvbmZpcm1LZXknO1xuZXhwb3J0IHtjaGVja0RlcGVuZGVuY2llc30gZnJvbSAnLi9tb2R1bGVzL2NoZWNrRGVwZW5kZW5jaWVzJztcbmV4cG9ydCB7ZGVsYXl9IGZyb20gJy4vbW9kdWxlcy9kZWxheSc7XG5leHBvcnQge2dlbmVyYXRlQXJyYXl9IGZyb20gJy4vbW9kdWxlcy9nZW5lcmF0ZUFycmF5JztcbmV4cG9ydCB7Z2V0Qm9keX0gZnJvbSAnLi9tb2R1bGVzL2dldEJvZHknO1xuZXhwb3J0IHtpbml0TXdBcGl9IGZyb20gJy4vbW9kdWxlcy9pbml0TXdBcGknO1xuZXhwb3J0IHtNd1VyaX0gZnJvbSAnLi9tb2R1bGVzL213VXJpJztcbmV4cG9ydCB7b291aUNvbmZpcm1XaXRoU3R5bGV9IGZyb20gJy4vbW9kdWxlcy9vb3VpQ29uZmlybVdpdGhTdHlsZSc7XG5leHBvcnQge3Njcm9sbFRvcH0gZnJvbSAnLi9tb2R1bGVzL3Njcm9sbFRvcCc7XG5leHBvcnQge3VzZXJJc0luR3JvdXB9IGZyb20gJy4vbW9kdWxlcy91c2VySXNJbkdyb3VwJztcbmV4cG9ydCB7dW5pcXVlQXJyYXl9IGZyb20gJy4vbW9kdWxlcy91bmlxdWVBcnJheSc7XG4iLCAidHlwZSBBZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXIgPSA8XG5cdFRhcmdldCBleHRlbmRzIERvY3VtZW50IHwgSFRNTEVsZW1lbnQgfCBFbGVtZW50IHwgTWVkaWFRdWVyeUxpc3QgfCBXaW5kb3csXG5cdFR5cGUgZXh0ZW5kcyAoVGFyZ2V0IGV4dGVuZHMgRG9jdW1lbnRcblx0XHQ/IGtleW9mIERvY3VtZW50RXZlbnRNYXBcblx0XHQ6IFRhcmdldCBleHRlbmRzIEhUTUxFbGVtZW50XG5cdFx0XHQ/IGtleW9mIEhUTUxFbGVtZW50RXZlbnRNYXBcblx0XHRcdDogVGFyZ2V0IGV4dGVuZHMgTWVkaWFRdWVyeUxpc3Rcblx0XHRcdFx0PyBrZXlvZiBNZWRpYVF1ZXJ5TGlzdEV2ZW50TWFwXG5cdFx0XHRcdDogVGFyZ2V0IGV4dGVuZHMgV2luZG93XG5cdFx0XHRcdFx0PyBrZXlvZiBXaW5kb3dFdmVudE1hcFxuXHRcdFx0XHRcdDoga2V5b2YgR2xvYmFsRXZlbnRIYW5kbGVyc0V2ZW50TWFwKSxcblx0TGlzdGVuZXIgZXh0ZW5kcyAoVGFyZ2V0IGV4dGVuZHMgRG9jdW1lbnRcblx0XHQ/IFR5cGUgZXh0ZW5kcyBrZXlvZiBEb2N1bWVudEV2ZW50TWFwXG5cdFx0XHQ/ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBEb2N1bWVudEV2ZW50TWFwW1R5cGVdKSA9PiB1bmtub3duXG5cdFx0XHQ6ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBFdmVudCkgPT4gdW5rbm93blxuXHRcdDogVGFyZ2V0IGV4dGVuZHMgSFRNTEVsZW1lbnRcblx0XHRcdD8gVHlwZSBleHRlbmRzIGtleW9mIEhUTUxFbGVtZW50RXZlbnRNYXBcblx0XHRcdFx0PyAodGhpczogVGFyZ2V0LCBldmVudDogSFRNTEVsZW1lbnRFdmVudE1hcFtUeXBlXSkgPT4gdW5rbm93blxuXHRcdFx0XHQ6ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBFdmVudCkgPT4gdW5rbm93blxuXHRcdFx0OiBUYXJnZXQgZXh0ZW5kcyBFbGVtZW50XG5cdFx0XHRcdD8gVHlwZSBleHRlbmRzIGtleW9mIEVsZW1lbnRFdmVudE1hcFxuXHRcdFx0XHRcdD8gKHRoaXM6IFRhcmdldCwgZXZlbnQ6IEVsZW1lbnRFdmVudE1hcFtUeXBlXSkgPT4gdW5rbm93blxuXHRcdFx0XHRcdDogKHRoaXM6IFRhcmdldCwgZXZlbnQ6IEV2ZW50KSA9PiB1bmtub3duXG5cdFx0XHRcdDogVGFyZ2V0IGV4dGVuZHMgTWVkaWFRdWVyeUxpc3Rcblx0XHRcdFx0XHQ/IFR5cGUgZXh0ZW5kcyBrZXlvZiBNZWRpYVF1ZXJ5TGlzdEV2ZW50TWFwXG5cdFx0XHRcdFx0XHQ/ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBNZWRpYVF1ZXJ5TGlzdEV2ZW50TWFwW1R5cGVdKSA9PiB1bmtub3duXG5cdFx0XHRcdFx0XHQ6ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBFdmVudCkgPT4gdW5rbm93blxuXHRcdFx0XHRcdDogVGFyZ2V0IGV4dGVuZHMgV2luZG93XG5cdFx0XHRcdFx0XHQ/IFR5cGUgZXh0ZW5kcyBrZXlvZiBXaW5kb3dFdmVudE1hcFxuXHRcdFx0XHRcdFx0XHQ/ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBXaW5kb3dFdmVudE1hcFtUeXBlXSkgPT4gdW5rbm93blxuXHRcdFx0XHRcdFx0XHQ6ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBFdmVudCkgPT4gdW5rbm93blxuXHRcdFx0XHRcdFx0OiAodGhpczogVGFyZ2V0LCBldmVudDogRXZlbnQpID0+IHVua25vd24pLFxuPih7XG5cdHRhcmdldCxcblx0dHlwZSxcblx0bGlzdGVuZXIsXG5cdG9wdGlvbnMsXG59OiB7XG5cdHRhcmdldDogVGFyZ2V0O1xuXHR0eXBlOiBUeXBlO1xuXHRsaXN0ZW5lcjogTGlzdGVuZXI7XG5cdG9wdGlvbnM/OiBBZGRFdmVudExpc3RlbmVyT3B0aW9ucztcbn0pID0+IHtcblx0cmVtb3ZlOiAoKSA9PiB2b2lkO1xufTtcblxuY29uc3QgYWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyOiBBZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXIgPSAoe3RhcmdldCwgdHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMgPSB7fX0pID0+IHtcblx0dGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIgYXMgRXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdCwgb3B0aW9ucyk7XG5cdHJldHVybiB7XG5cdFx0cmVtb3ZlOiAoKTogdm9pZCA9PiB7XG5cdFx0XHR0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciBhcyBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0LCBvcHRpb25zKTtcblx0XHR9LFxuXHR9O1xufTtcblxuZXhwb3J0IHt0eXBlIEFkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3ZlciwgYWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyfTtcbiIsICJ0eXBlIENoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmUgPSAoZXZlbnQ6IE1vdXNlRXZlbnQgfCBKUXVlcnkuVHJpZ2dlcmVkRXZlbnQsIG9wYWNpdHk/OiBudW1iZXIpID0+IHZvaWQ7XG5cbmNvbnN0IGNoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmU6IENoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmUgPSAoZXZlbnQsIG9wYWNpdHkgPSAwLjcpID0+IHtcblx0KGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLm9wYWNpdHkgPSBldmVudC50eXBlID09PSAnbW91c2VlbnRlcicgPyAnMScgOiBvcGFjaXR5LnRvU3RyaW5nKCk7XG59O1xuXG5leHBvcnQge3R5cGUgQ2hhbmdlT3BhY2l0eVdoZW5Nb3VzZUVudGVyT3JMZWF2ZSwgY2hhbmdlT3BhY2l0eVdoZW5Nb3VzZUVudGVyT3JMZWF2ZX07XG4iLCAidHlwZSBDaGVja0ExMXlDb25maXJtS2V5ID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50IHwgTW91c2VFdmVudCB8IEpRdWVyeS5DbGlja0V2ZW50IHwgSlF1ZXJ5LktleURvd25FdmVudCkgPT4gYm9vbGVhbjtcblxuY29uc3QgY2hlY2tBMTF5Q29uZmlybUtleTogQ2hlY2tBMTF5Q29uZmlybUtleSA9IChldmVudCk6IGJvb2xlYW4gPT4ge1xuXHRpZiAoWydjbGljaycsICdrZXlkb3duJ10uaW5jbHVkZXMoZXZlbnQudHlwZSkpIHtcblx0XHRpZiAoZXZlbnQudHlwZSA9PT0gJ2tleWRvd24nKSB7XG5cdFx0XHRyZXR1cm4gWydFbnRlcicsICcgJ10uaW5jbHVkZXMoKGV2ZW50IGFzIEtleWJvYXJkRXZlbnQpLmtleSk7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCB7dHlwZSBDaGVja0ExMXlDb25maXJtS2V5LCBjaGVja0ExMXlDb25maXJtS2V5fTtcbiIsICJ0eXBlIEdlbmVyYXRlQXJyYXkgPSB0eXBlb2YgZ2VuZXJhdGVBcnJheTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVBcnJheTxUIGV4dGVuZHMgW10+KC4uLmFyZ3M6IChUIHwgVFtdKVtdKTogVFtdO1xuZnVuY3Rpb24gZ2VuZXJhdGVBcnJheTxUIGV4dGVuZHMgTm9kZUxpc3Q+KC4uLmFyZ3M6IChUIHwgVFtdKVtdKTogTm9kZVtdO1xuZnVuY3Rpb24gZ2VuZXJhdGVBcnJheTxUID0gdW5rbm93bj4oLi4uYXJnczogKFQgfCBUW10pW10pOiBUW107XG5mdW5jdGlvbiBnZW5lcmF0ZUFycmF5PFQ+KC4uLmFyZ3M6IChUIHwgVFtdKVtdKTogVFtdIHtcblx0cmV0dXJuIGFyZ3MuZmxhdE1hcCgoYXJnKSA9PiB7XG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0cmV0dXJuIGFyZztcblx0XHR9XG5cblx0XHRpZiAoYXJnIGluc3RhbmNlb2YgTm9kZUxpc3QpIHtcblx0XHRcdHJldHVybiBbLi4uYXJnXSBhcyBUO1xuXHRcdH1cblxuXHRcdHJldHVybiBbYXJnXTtcblx0fSk7XG59XG5cbmV4cG9ydCB7dHlwZSBHZW5lcmF0ZUFycmF5LCBnZW5lcmF0ZUFycmF5fTtcbiIsICJ0eXBlIEluaXRNd0FwaSA9IHR5cGVvZiBpbml0TXdBcGk7XG5cbi8qKlxuICogQHJlcXVpcmVzIG1lZGlhd2lraS5hcGlcbiAqIEBwYXJhbSB7c3RyaW5nfSBbdXNlckFnZW50XVxuICogQHBhcmFtIHtzdHJpbmd9IFthcGlVcmldXG4gKiBAcmV0dXJuIHttdy5BcGl8bXcuRm9yZWlnbkFwaX1cbiAqL1xuZnVuY3Rpb24gaW5pdE13QXBpKHVzZXJBZ2VudD86IHN0cmluZyk6IG13LkFwaTtcbmZ1bmN0aW9uIGluaXRNd0FwaSh1c2VyQWdlbnQ6IHN0cmluZywgYXBpVXJpOiBzdHJpbmcpOiBtdy5Gb3JlaWduQXBpO1xuZnVuY3Rpb24gaW5pdE13QXBpKHVzZXJBZ2VudD86IHN0cmluZywgYXBpVXJpPzogc3RyaW5nKTogbXcuQXBpIHwgbXcuRm9yZWlnbkFwaSB7XG5cdHZvaWQgbXcubG9hZGVyLnVzaW5nKCdtZWRpYXdpa2kuYXBpJyk7XG5cblx0Y29uc3QgYXBpT3B0aW9ucyA9IHtcblx0XHRhamF4OiB7XG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdCdBcGktVXNlci1BZ2VudCc6IHVzZXJBZ2VudCA/IGBRaXV3ZW4vMS4xICgke3VzZXJBZ2VudH0pYCA6ICdRaXV3ZW4vMS4xJyxcblx0XHRcdH0sXG5cdFx0fSxcblx0fTtcblxuXHRpZiAoYXBpVXJpKSB7XG5cdFx0cmV0dXJuIG5ldyBtdy5Gb3JlaWduQXBpKGFwaVVyaSwgYXBpT3B0aW9ucyk7XG5cdH1cblxuXHRyZXR1cm4gbmV3IG13LkFwaShhcGlPcHRpb25zKTtcbn1cblxuZXhwb3J0IHt0eXBlIEluaXRNd0FwaSwgaW5pdE13QXBpfTtcbiIsICJ0eXBlIFVuaXF1ZUFycmF5ID0gdHlwZW9mIHVuaXF1ZUFycmF5O1xuXG5jb25zdCB1bmlxdWVBcnJheSA9IGZ1bmN0aW9uIHVuaXF1ZUFycmF5PFQ+KGFyZ3M6IFRbXSk6IFRbXSB7XG5cdC8qKiFcblx0ICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IENDLUJZLVNBLTQuMFxuXHQgKlxuXHQgKiBAc291cmNlIHtAbGluayBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy85MjI5NjQ1L3JlbW92ZS1kdXBsaWNhdGUtdmFsdWVzLWZyb20tanMtYXJyYXkvOTIyOTgyfVxuXHQgKiBAbGljZW5zZSBDQy1CWS1TQS00LjBcblx0ICovXG5cdGNvbnN0IHJlc3VsdDogdHlwZW9mIGFyZ3MgPSBbXTtcblx0Zm9yIChjb25zdCBpdGVtIG9mIGFyZ3MpIHtcblx0XHRpZiAoIXJlc3VsdC5pbmNsdWRlcyhpdGVtKSkge1xuXHRcdFx0cmVzdWx0W3Jlc3VsdC5sZW5ndGhdID0gaXRlbTsgLy8gUmVwbGFjZSBBcnJheSNwdXNoIHRvIGF2b2lkIGNvcmUtanMgcG9seWZpbGxpbmdcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCB7dHlwZSBVbmlxdWVBcnJheSwgdW5pcXVlQXJyYXl9O1xuIiwgImltcG9ydCB7Z2VuZXJhdGVBcnJheX0gZnJvbSAnLi9nZW5lcmF0ZUFycmF5JztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICcuL2luaXRNd0FwaSc7XG5pbXBvcnQge3VuaXF1ZUFycmF5fSBmcm9tICcuL3VuaXF1ZUFycmF5JztcblxudHlwZSBCb29sZWFuID0gJzAnIHwgJzEnIHwgMCB8IDE7XG50eXBlIENoZWNrRGVwZW5kZW5jaWVzID0gdHlwZW9mIGNoZWNrRGVwZW5kZW5jaWVzO1xuXG5mdW5jdGlvbiBjaGVja0RlcGVuZGVuY2llcyhnYWRnZXROYW1lczogc3RyaW5nIHwgc3RyaW5nW10pOiBQcm9taXNlPHZvaWQ+O1xuZnVuY3Rpb24gY2hlY2tEZXBlbmRlbmNpZXMoZ2FkZ2V0TmFtZXM6IHN0cmluZywgb3B0aW9uOiBCb29sZWFuKTogUHJvbWlzZTx2b2lkPjtcbmFzeW5jIGZ1bmN0aW9uIGNoZWNrRGVwZW5kZW5jaWVzKGdhZGdldE5hbWVzOiBzdHJpbmcgfCBzdHJpbmdbXSwgb3B0aW9uPzogQm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaSgnVXRpbC1DaGVja0RlcGVuZGVuY2llcycpO1xuXHRjb25zdCBnYWRnZXRzID0gdW5pcXVlQXJyYXkoZ2VuZXJhdGVBcnJheShnYWRnZXROYW1lcykpO1xuXHRvcHRpb24gfHw9IDE7XG5cblx0Zm9yIChjb25zdCBnYWRnZXQgb2YgZ2FkZ2V0cykge1xuXHRcdGlmIChcblx0XHRcdChvcHRpb24gPT09ICcwJyAmJiBtdy51c2VyLm9wdGlvbnMuZ2V0KGBnYWRnZXQtJHtnYWRnZXR9YCkgPT09ICcxJykgfHxcblx0XHRcdChvcHRpb24gPT09ICcxJyAmJiBtdy51c2VyLm9wdGlvbnMuZ2V0KGBnYWRnZXQtJHtnYWRnZXR9YCkgPT09ICcwJylcblx0XHQpIHtcblx0XHRcdGF3YWl0IGFwaS5wb3N0V2l0aEVkaXRUb2tlbih7XG5cdFx0XHRcdGFjdGlvbjogJ29wdGlvbnMnLFxuXHRcdFx0XHRjaGFuZ2U6IGBnYWRnZXQtJHtnYWRnZXR9PSR7b3B0aW9ufWAsXG5cdFx0XHR9IGFzIEFwaU9wdGlvbnNQYXJhbXMpO1xuXHRcdFx0YXdhaXQgbXcubG9hZGVyLnVzaW5nKGBleHQuZ2FkZ2V0LiR7Z2FkZ2V0fWApO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQge3R5cGUgQ2hlY2tEZXBlbmRlbmNpZXMsIGNoZWNrRGVwZW5kZW5jaWVzfTtcbiIsICJ0eXBlIERlbGF5ID0gKG1zOiBudW1iZXIpID0+IFByb21pc2U8dm9pZD47XG5cbmNvbnN0IGRlbGF5OiBEZWxheSA9IChtcykgPT4ge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmU6ICgpID0+IHZvaWQpOiB2b2lkID0+IHtcblx0XHRzZXRUaW1lb3V0KHJlc29sdmUsIG1zKTtcblx0fSk7XG59O1xuXG5leHBvcnQge3R5cGUgRGVsYXksIGRlbGF5fTtcbiIsICJ0eXBlIEdldEJvZHkgPSAoKSA9PiBKUXVlcnkuVGhlbmFibGU8SlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4+O1xuXG5jb25zdCBnZXRCb2R5ID0gKCkgPT4ge1xuXHRyZXR1cm4gJC5yZWFkeS50aGVuKCgpOiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PiA9PiB7XG5cdFx0Y29uc3QgJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+ID0gJCgnYm9keScpO1xuXG5cdFx0cmV0dXJuICRib2R5O1xuXHR9KTtcbn07XG5cbmV4cG9ydCB7dHlwZSBHZXRCb2R5LCBnZXRCb2R5fTtcbiIsICJ0eXBlIENsYXNzTXdVcmkgPSB0eXBlb2YgTXdVcmk7XG5cbmNsYXNzIE13VXJpIGV4dGVuZHMgVVJMIHtcblx0Y29uc3RydWN0b3IodXJsOiBzdHJpbmcsIGJhc2U6IHN0cmluZyA9IGxvY2F0aW9uLm9yaWdpbikge1xuXHRcdHN1cGVyKHVybCwgYmFzZSk7XG5cdH1cblx0cHVibGljIGV4dGVuZChvYmplY3Q6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9KTogdGhpcyB7XG5cdFx0Zm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMob2JqZWN0KSkge1xuXHRcdFx0dGhpcy5zZWFyY2hQYXJhbXMuc2V0KGtleSwgdmFsdWUpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRwdWJsaWMgZ2V0UmVsYXRpdmVQYXRoKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMucGF0aG5hbWUgKyB0aGlzLnNlYXJjaCArIHRoaXMuaGFzaDtcblx0fVxufVxuXG5leHBvcnQge3R5cGUgQ2xhc3NNd1VyaSwgTXdVcml9O1xuIiwgImltcG9ydCB7dHlwZSBBcHAgYXMgVnVlQXBwLCBjcmVhdGVBcHB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgT291aUNvbmZpcm1XaXRoU3R5bGUgZnJvbSAnLi9Pb3VpQ29uZmlybVdpdGhTdHlsZS52dWUnO1xuXG50eXBlIE9vdWlDb25maXJtV2l0aFN0eWxlID0gKG1lc3NhZ2U6IHN0cmluZykgPT4gUHJvbWlzZTxib29sZWFuPjtcblxuLyoqXG4gKiBTaG93IGEgY29uZmlybWF0aW9uIGRpYWxvZyBidWlsdCB3aXRoIENvZGV4IGFuZCBWdWUuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gZGlzcGxheSBpbiB0aGUgZGlhbG9nXG4gKiBAcmV0dXJuIHtQcm9taXNlPGJvb2xlYW4+fSBSZXNvbHZlcyB0byBgdHJ1ZWAgd2hlbiB0aGUgdXNlciBjb25maXJtcywgYGZhbHNlYCB3aGVuIGNhbmNlbGxlZCBvciBjbG9zZWRcbiAqL1xuY29uc3Qgb291aUNvbmZpcm1XaXRoU3R5bGU6IE9vdWlDb25maXJtV2l0aFN0eWxlID0gKG1lc3NhZ2U6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4gPT5cblx0bmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUpID0+IHtcblx0XHRhd2FpdCBtdy5sb2FkZXIudXNpbmcoWydAd2lraW1lZGlhL2NvZGV4JywgJ3Z1ZSddKTtcblxuXHRcdGNvbnN0IHJvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZChyb290KTtcblxuXHRcdGxldCBzZXR0bGVkID0gZmFsc2U7XG5cdFx0Y29uc3Qgc2V0dGxlID0gKHZhbHVlOiBib29sZWFuKTogdm9pZCA9PiB7XG5cdFx0XHRpZiAoc2V0dGxlZCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRzZXR0bGVkID0gdHJ1ZTtcblx0XHRcdGFwcC51bm1vdW50KCk7XG5cdFx0XHRyb290LnJlbW92ZSgpO1xuXHRcdFx0cmVzb2x2ZSh2YWx1ZSk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IGFwcDogVnVlQXBwPEVsZW1lbnQ+ID0gY3JlYXRlQXBwKE9vdWlDb25maXJtV2l0aFN0eWxlLCB7XG5cdFx0XHRvcGVuOiB0cnVlLFxuXHRcdFx0bWVzc2FnZSxcblx0XHRcdG9uQ29uZmlybTogKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRzZXR0bGUodHJ1ZSk7XG5cdFx0XHR9LFxuXHRcdFx0b25DYW5jZWw6ICgpOiB2b2lkID0+IHtcblx0XHRcdFx0c2V0dGxlKGZhbHNlKTtcblx0XHRcdH0sXG5cdFx0fSk7XG5cdFx0YXBwLm1vdW50KHJvb3QpO1xuXHR9KTtcblxuZXhwb3J0IHt0eXBlIE9vdWlDb25maXJtV2l0aFN0eWxlLCBvb3VpQ29uZmlybVdpdGhTdHlsZX07XG4iLCAiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7Q2R4RGlhbG9nfSBmcm9tICdAd2lraW1lZGlhL2NvZGV4JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi91dGlsL2kxOG4nO1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcblx0b3BlbjogYm9vbGVhbjtcblx0bWVzc2FnZTogc3RyaW5nO1xuXHRvbkNvbmZpcm06ICgpID0+IHZvaWQ7XG5cdG9uQ2FuY2VsOiAoKSA9PiB2b2lkO1xufT4oKTtcblxuY29uc3QgZW1pdCA9IGRlZmluZUVtaXRzPHtcblx0J3VwZGF0ZTpvcGVuJzogW3ZhbHVlOiBib29sZWFuXTtcbn0+KCk7XG5cbmNvbnN0IGNsb3NlID0gKCk6IHZvaWQgPT4ge1xuXHRlbWl0KCd1cGRhdGU6b3BlbicsIGZhbHNlKTtcbn07XG5cbmNvbnN0IGNvbmZpcm0gPSAoKTogdm9pZCA9PiB7XG5cdGNsb3NlKCk7XG5cdHByb3BzLm9uQ29uZmlybSgpO1xufTtcblxuY29uc3QgY2FuY2VsID0gKCk6IHZvaWQgPT4ge1xuXHRjbG9zZSgpO1xuXHRwcm9wcy5vbkNhbmNlbCgpO1xufTtcblxuY29uc3QgaGFuZGxlT3BlbkNoYW5nZSA9IChvcGVuOiBib29sZWFuKTogdm9pZCA9PiB7XG5cdGVtaXQoJ3VwZGF0ZTpvcGVuJywgb3Blbik7XG5cdGlmICghb3Blbikge1xuXHRcdHByb3BzLm9uQ2FuY2VsKCk7XG5cdH1cbn07XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuXHQ8Y2R4LWRpYWxvZ1xuXHRcdDpvcGVuPVwib3BlblwiXG5cdFx0OnRpdGxlPVwibWVzc2FnZVwiXG5cdFx0OnByaW1hcnktYWN0aW9uPVwie2xhYmVsOiBnZXRNZXNzYWdlKCdDb25maXJtJyksIGFjdGlvblR5cGU6ICdwcm9ncmVzc2l2ZSd9XCJcblx0XHQ6ZGVmYXVsdC1hY3Rpb249XCJ7bGFiZWw6IGdldE1lc3NhZ2UoJ0NhbmNlbCcpfVwiXG5cdFx0OnVzZS1jbG9zZS1idXR0b249XCJ0cnVlXCJcblx0XHRAdXBkYXRlOm9wZW49XCJoYW5kbGVPcGVuQ2hhbmdlXCJcblx0XHRAcHJpbWFyeT1cImNvbmZpcm1cIlxuXHRcdEBkZWZhdWx0PVwiY2FuY2VsXCJcblx0Lz5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cImxlc3NcIj5cbi5jZHgtZGlhbG9nIDpkZWVwKC5jZHgtZGlhbG9nX19mb290ZXIpIHtcblx0Ym9yZGVyLXRvcDogMC4xcmVtIHNvbGlkICMwNjQ1YWQ7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG4uY2R4LWRpYWxvZyA6ZGVlcCguY2R4LWRpYWxvZ19fdGl0bGUpIHtcblx0Zm9udC1zaXplOiAxLjJyZW07XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdGxpbmUtaGVpZ2h0OiAxLjg7XG5cdHBhZGRpbmc6IDAuNGVtIDA7XG59XG48L3N0eWxlPlxuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRDb25maXJtOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NvbmZpcm0nLFxuXHRcdFx0amE6ICfnorroqo0nLFxuXHRcdFx0J3poLWhhbnMnOiAn56Gu6K6kJyxcblx0XHRcdCd6aC1oYW50JzogJ+eiuuiqjScsXG5cdFx0fSksXG5cdFx0Q2FuY2VsOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NhbmNlbCcsXG5cdFx0XHRqYTogJ+OCreODo+ODs+OCu+ODqycsXG5cdFx0XHQnemgtaGFucyc6ICflj5bmtognLFxuXHRcdFx0J3poLWhhbnQnOiAn5Y+W5raIJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHsgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUJsb2NrIGFzIF9jcmVhdGVCbG9jayB9IGZyb20gXCJ2dWVcIlxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSwgJHByb3BzLCAkc2V0dXAsICRkYXRhLCAkb3B0aW9ucykge1xuICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKCRzZXR1cFtcIkNkeERpYWxvZ1wiXSwge1xuICAgIG9wZW46ICRwcm9wcy5vcGVuLFxuICAgIHRpdGxlOiAkcHJvcHMubWVzc2FnZSxcbiAgICBcInByaW1hcnktYWN0aW9uXCI6IHtsYWJlbDogJHNldHVwLmdldE1lc3NhZ2UoJ0NvbmZpcm0nKSwgYWN0aW9uVHlwZTogJ3Byb2dyZXNzaXZlJ30sXG4gICAgXCJkZWZhdWx0LWFjdGlvblwiOiB7bGFiZWw6ICRzZXR1cC5nZXRNZXNzYWdlKCdDYW5jZWwnKX0sXG4gICAgXCJ1c2UtY2xvc2UtYnV0dG9uXCI6IHRydWUsXG4gICAgXCJvblVwZGF0ZTpvcGVuXCI6ICRzZXR1cC5oYW5kbGVPcGVuQ2hhbmdlLFxuICAgIG9uUHJpbWFyeTogJHNldHVwLmNvbmZpcm0sXG4gICAgb25EZWZhdWx0OiAkc2V0dXAuY2FuY2VsXG4gIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIFtcIm9wZW5cIiwgXCJ0aXRsZVwiLCBcInByaW1hcnktYWN0aW9uXCIsIFwiZGVmYXVsdC1hY3Rpb25cIl0pKVxufSIsICJpbXBvcnQgc2NyaXB0IGZyb20gXCJFOlxcXFxDb2Rlc1xcXFxRaXV3ZW5cXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcVXRpbFxcXFxtb2R1bGVzXFxcXE9vdWlDb25maXJtV2l0aFN0eWxlLnZ1ZT90eXBlPXNjcmlwdFwiO2ltcG9ydCBcIkU6XFxcXENvZGVzXFxcXFFpdXdlblxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxVdGlsXFxcXG1vZHVsZXNcXFxcT291aUNvbmZpcm1XaXRoU3R5bGUudnVlP3R5cGU9c3R5bGUmaW5kZXg9MFwiO2ltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJFOlxcXFxDb2Rlc1xcXFxRaXV3ZW5cXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcVXRpbFxcXFxtb2R1bGVzXFxcXE9vdWlDb25maXJtV2l0aFN0eWxlLnZ1ZT90eXBlPXRlbXBsYXRlXCI7IHNjcmlwdC5yZW5kZXIgPSByZW5kZXI7c2NyaXB0Ll9fZmlsZSA9IFwic3JjXFxcXFV0aWxcXFxcbW9kdWxlc1xcXFxPb3VpQ29uZmlybVdpdGhTdHlsZS52dWVcIjtzY3JpcHQuX19zY29wZUlkID0gXCJkYXRhLXYtODZlYTg5YWRcIjtleHBvcnQgZGVmYXVsdCBzY3JpcHQ7IiwgInR5cGUgU2Nyb2xsVG9wID0gKFxuXHR0YXJnZXRIZWlnaHQ6IG51bWJlciB8IHN0cmluZyxcblx0ZWZmZWN0c09wdGlvbnNPckR1cmF0aW9uPzogSlF1ZXJ5LkVmZmVjdHNPcHRpb25zPEhUTUxFbGVtZW50PiB8IG51bWJlciB8ICdmYXN0JyB8ICdzbG93J1xuKSA9PiB2b2lkO1xuXG5jb25zdCBzY3JvbGxUb3A6IFNjcm9sbFRvcCA9ICh0YXJnZXRIZWlnaHQsIGVmZmVjdHNPcHRpb25zT3JEdXJhdGlvbiA9IHt9KSA9PiB7XG5cdGNvbnN0IG9wdGlvbnM6IEpRdWVyeS5FZmZlY3RzT3B0aW9uczxIVE1MRWxlbWVudD4gPVxuXHRcdHR5cGVvZiBlZmZlY3RzT3B0aW9uc09yRHVyYXRpb24gPT09ICdudW1iZXInIHx8IHR5cGVvZiBlZmZlY3RzT3B0aW9uc09yRHVyYXRpb24gPT09ICdzdHJpbmcnXG5cdFx0XHQ/IHtcblx0XHRcdFx0XHRkdXJhdGlvbjogZWZmZWN0c09wdGlvbnNPckR1cmF0aW9uLFxuXHRcdFx0XHRcdGVhc2luZzogJ2xpbmVhcicsXG5cdFx0XHRcdH1cblx0XHRcdDoge1xuXHRcdFx0XHRcdGR1cmF0aW9uOiAnc2xvdycsXG5cdFx0XHRcdFx0ZWFzaW5nOiAnbGluZWFyJyxcblx0XHRcdFx0XHQuLi5lZmZlY3RzT3B0aW9uc09yRHVyYXRpb24sXG5cdFx0XHRcdH07XG5cdCQoZG9jdW1lbnQpLmZpbmQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKFxuXHRcdHtcblx0XHRcdHNjcm9sbFRvcDogdGFyZ2V0SGVpZ2h0LFxuXHRcdH0sXG5cdFx0b3B0aW9uc1xuXHQpO1xufTtcblxuZXhwb3J0IHt0eXBlIFNjcm9sbFRvcCwgc2Nyb2xsVG9wfTtcbiIsICJpbXBvcnQge2dlbmVyYXRlQXJyYXl9IGZyb20gJy4vZ2VuZXJhdGVBcnJheSc7XG5cbnR5cGUgVXNlcklzSW5Hcm91cCA9IHR5cGVvZiB1c2VySXNJbkdyb3VwO1xuXG5jb25zdCB1c2VySXNJbkdyb3VwID0gKGdyb3Vwczogc3RyaW5nIHwgc3RyaW5nW10pID0+IHtcblx0Y29uc3Qge3dnVXNlckdyb3Vwcywgd2dHbG9iYWxHcm91cHN9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRyZXR1cm4gWy4uLih3Z1VzZXJHcm91cHMgfHwgW10pLCAuLi4oKHdnR2xvYmFsR3JvdXBzIGFzIHN0cmluZ1tdKSB8fCBbXSldLnNvbWUoKGVsZW1lbnQ6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuXHRcdHJldHVybiBnZW5lcmF0ZUFycmF5KGdyb3VwcykuaW5jbHVkZXMoZWxlbWVudCk7XG5cdH0pO1xufTtcblxuZXhwb3J0IHt0eXBlIFVzZXJJc0luR3JvdXAsIHVzZXJJc0luR3JvdXB9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLGVBQUEsQ0FBQTtBQUFBQyxTQUFBRCxjQUFBO0VBQUFFLE9BQUFBLE1BQUFBO0VBQUFDLDZCQUFBQSxNQUFBQTtFQUFBQyxvQ0FBQUEsTUFBQUE7RUFBQUMscUJBQUFBLE1BQUFBO0VBQUFDLG1CQUFBQSxNQUFBQTtFQUFBQyxPQUFBQSxNQUFBQTtFQUFBQyxlQUFBQSxNQUFBQTtFQUFBQyxTQUFBQSxNQUFBQTtFQUFBQyxXQUFBQSxNQUFBQTtFQUFBQyxzQkFBQUEsTUFBQUE7RUFBQUMsV0FBQUEsTUFBQUE7RUFBQUMsYUFBQUEsTUFBQUE7RUFBQUMsZUFBQUEsTUFBQUE7QUFBQSxDQUFBO0FBQUFDLE9BQUFDLFVBQUFDLGFBQUFqQixZQUFBOztBQzhDQSxJQUFNRyw4QkFBMkRBLENBQUM7RUFBQ2U7RUFBUUM7RUFBTUM7RUFBVUMsVUFBVSxDQUFDO0FBQUMsTUFBTTtBQUM1R0gsU0FBT0ksaUJBQWlCSCxNQUFNQyxVQUFnREMsT0FBTztBQUNyRixTQUFPO0lBQ05FLFFBQVFBLE1BQVk7QUFDbkJMLGFBQU9NLG9CQUFvQkwsTUFBTUMsVUFBZ0RDLE9BQU87SUFDekY7RUFDRDtBQUNEOztBQ25EQSxJQUFNakIscUNBQXlFQSxDQUFDcUIsT0FBT0MsVUFBVSxRQUFRO0FBQ3ZHRCxRQUFNRSxjQUE4QkMsTUFBTUYsVUFBVUQsTUFBTU4sU0FBUyxlQUFlLE1BQU1PLFFBQVFHLFNBQVM7QUFDM0c7O0FDRkEsSUFBTXhCLHNCQUE0Q29CLFdBQW1CO0FBQ3BFLE1BQUksQ0FBQyxTQUFTLFNBQVMsRUFBRUssU0FBU0wsTUFBTU4sSUFBSSxHQUFHO0FBQzlDLFFBQUlNLE1BQU1OLFNBQVMsV0FBVztBQUM3QixhQUFPLENBQUMsU0FBUyxHQUFHLEVBQUVXLFNBQVVMLE1BQXdCTSxHQUFHO0lBQzVEO0FBQ0EsV0FBTztFQUNSO0FBQ0EsU0FBTztBQUNSOztBQ0xBLFNBQVN2QixpQkFBb0J3QixNQUF3QjtBQUNwRCxTQUFPQSxLQUFLQyxRQUFTQyxTQUFRO0FBQzVCLFFBQUlDLE1BQU1DLFFBQVFGLEdBQUcsR0FBRztBQUN2QixhQUFPQTtJQUNSO0FBRUEsUUFBSUEsZUFBZUcsVUFBVTtBQUM1QixhQUFPLENBQUMsR0FBR0gsR0FBRztJQUNmO0FBRUEsV0FBTyxDQUFDQSxHQUFHO0VBQ1osQ0FBQztBQUNGOztBQ1BBLFNBQVN4QixVQUFVNEIsV0FBb0JDLFFBQXlDO0FBQy9FLE9BQUtDLEdBQUdDLE9BQU9DLE1BQU0sZUFBZTtBQUVwQyxRQUFNQyxhQUFhO0lBQ2xCQyxNQUFNO01BQ0xDLFNBQVM7UUFDUixrQkFBa0JQLFlBQUEsZUFBQVEsT0FBMkJSLFdBQVMsR0FBQSxJQUFNO01BQzdEO0lBQ0Q7RUFDRDtBQUVBLE1BQUlDLFFBQVE7QUFDWCxXQUFPLElBQUlDLEdBQUdPLFdBQVdSLFFBQVFJLFVBQVU7RUFDNUM7QUFFQSxTQUFPLElBQUlILEdBQUdRLElBQUlMLFVBQVU7QUFDN0I7O0FDeEJBLElBQU05QixjQUFjLFNBQVNvQyxhQUFlakIsTUFBZ0I7RUFDM0Q7Ozs7OztBQU1BLFFBQU1rQixTQUFzQixDQUFBO0FBQUMsTUFBQUMsYUFBQUMsMkJBQ1ZwQixJQUFBLEdBQUFxQjtBQUFBLE1BQUE7QUFBbkIsU0FBQUYsV0FBQUcsRUFBQSxHQUFBLEVBQUFELFNBQUFGLFdBQUFJLEVBQUEsR0FBQUMsUUFBeUI7QUFBQSxZQUFkQyxPQUFBSixPQUFBSztBQUNWLFVBQUksQ0FBQ1IsT0FBT3BCLFNBQVMyQixJQUFJLEdBQUc7QUFDM0JQLGVBQU9BLE9BQU9TLE1BQU0sSUFBSUY7TUFDekI7SUFDRDtFQUFBLFNBQUFHLEtBQUE7QUFBQVQsZUFBQVUsRUFBQUQsR0FBQTtFQUFBLFVBQUE7QUFBQVQsZUFBQVcsRUFBQTtFQUFBO0FBQ0EsU0FBT1o7QUFDUjs7U0NQZTVDLGtCQUFBeUQsSUFBQUMsS0FBQTtBQUFBLFNBQUFDLG1CQUFBQyxNQUFBLE1BQUFDLFNBQUE7QUFBQTtBQUFBOzt5Q0FBZixXQUFpQ0MsYUFBZ0NDLFFBQWlDO0FBQ2pHLFVBQU1DLE1BQWM1RCxVQUFVLHdCQUF3QjtBQUN0RCxVQUFNNkQsVUFBVTFELFlBQVlMLGNBQWM0RCxXQUFXLENBQUM7QUFDdERDLGVBQUFBLFNBQVc7QUFBQSxRQUFBRyxhQUFBcEIsMkJBRVVtQixPQUFBLEdBQUFFO0FBQUEsUUFBQTtBQUFyQixXQUFBRCxXQUFBbEIsRUFBQSxHQUFBLEVBQUFtQixTQUFBRCxXQUFBakIsRUFBQSxHQUFBQyxRQUE4QjtBQUFBLGNBQW5Ca0IsU0FBQUQsT0FBQWY7QUFDVixZQUNFVyxXQUFXLE9BQU83QixHQUFHbUMsS0FBS3RELFFBQVF1RCxJQUFBLFVBQUE5QixPQUFjNEIsTUFBTSxDQUFFLE1BQU0sT0FDOURMLFdBQVcsT0FBTzdCLEdBQUdtQyxLQUFLdEQsUUFBUXVELElBQUEsVUFBQTlCLE9BQWM0QixNQUFNLENBQUUsTUFBTSxLQUM5RDtBQUNELGdCQUFNSixJQUFJTyxrQkFBa0I7WUFDM0JDLFFBQVE7WUFDUkMsUUFBQSxVQUFBakMsT0FBa0I0QixRQUFNLEdBQUEsRUFBQTVCLE9BQUl1QixNQUFNO1VBQ25DLENBQXFCO0FBQ3JCLGdCQUFNN0IsR0FBR0MsT0FBT0MsTUFBQSxjQUFBSSxPQUFvQjRCLE1BQU0sQ0FBRTtRQUM3QztNQUNEO0lBQUEsU0FBQWQsS0FBQTtBQUFBWSxpQkFBQVgsRUFBQUQsR0FBQTtJQUFBLFVBQUE7QUFBQVksaUJBQUFWLEVBQUE7SUFBQTtFQUNELENBQUE7QUFBQSxTQUFBRyxtQkFBQUMsTUFBQSxNQUFBQyxTQUFBO0FBQUE7QUN4QkEsSUFBTTVELFFBQWdCeUUsUUFBTztBQUM1QixTQUFPLElBQUlDLFFBQVNDLGFBQThCO0FBQ2pEQyxlQUFXRCxTQUFTRixFQUFFO0VBQ3ZCLENBQUM7QUFDRjs7QUNKQSxJQUFNdkUsVUFBVUEsTUFBTTtBQUNyQixTQUFPMkUsRUFBRUMsTUFBTUMsS0FBSyxNQUErQjtBQUNsRCxVQUFNQyxRQUFpQ0gsRUFBRSxNQUFNO0FBRS9DLFdBQU9HO0VBQ1IsQ0FBQztBQUNGOztBQ05BLElBQU1yRixRQUFOLGNBQW9Cc0YsSUFBSTtFQUN2QkMsWUFBWUMsS0FBYUMsT0FBZUMsU0FBU0MsUUFBUTtBQUN4RCxVQUFNSCxLQUFLQyxJQUFJO0VBQ2hCO0VBQ09HLE9BQU9DLFFBQXVDO0FBQ3BELGFBQUFDLEtBQUEsR0FBQUMsa0JBQTJCQyxPQUFPQyxRQUFRSixNQUFNLEdBQUFDLEtBQUFDLGdCQUFBdEMsUUFBQXFDLE1BQUc7QUFBbkQsWUFBVyxDQUFDakUsS0FBSzJCLEtBQUssSUFBQXVDLGdCQUFBRCxFQUFBO0FBQ3JCLFdBQUtJLGFBQWFDLElBQUl0RSxLQUFLMkIsS0FBSztJQUNqQztBQUNBLFdBQU87RUFDUjtFQUNPNEMsa0JBQTBCO0FBQ2hDLFdBQU8sS0FBS0MsV0FBVyxLQUFLQyxTQUFTLEtBQUtDO0VBQzNDO0FBQ0Q7O0FDZkEsSUFBQUMsY0FBNENDLFFBQUEsS0FBQTs7QUNDNUMsSUFBQUMsZUFBd0JELFFBQUEsa0JBQUE7O0FDRHhCLElBQUFFLG9CQUF1QkYsUUFBQSxpQkFBQTtBQUV2QixJQUFNRyxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOQyxVQUFBLEdBQVNGLGtCQUFBRyxVQUFTO01BQ2pCQyxJQUFJO01BQ0pDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREMsU0FBQSxHQUFRTixrQkFBQUcsVUFBUztNQUNoQkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0VBQ0Y7QUFDRDtBQUVBLElBQU1FLGVBQWVOLGdCQUFnQjtBQUVyQyxJQUFNTyxhQUFnRHRGLFNBQVE7QUFDN0QsU0FBT3FGLGFBQWFyRixHQUFHLEtBQUtBO0FBQzdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QURuQkEsVUFBTXVGLFFBQVFDO0FBT2QsVUFBTUMsT0FBT0M7QUFJYixVQUFNQyxRQUFRQSxNQUFZO0FBQ3pCRixXQUFLLGVBQWUsS0FBSztJQUMxQjtBQUVBLFVBQU1HLFVBQVVBLE1BQVk7QUFDM0JELFlBQU07QUFDTkosWUFBTU0sVUFBVTtJQUNqQjtBQUVBLFVBQU1DLFNBQVNBLE1BQVk7QUFDMUJILFlBQU07QUFDTkosWUFBTVEsU0FBUztJQUNoQjtBQUVBLFVBQU1DLG1CQUFvQkMsVUFBd0I7QUFDakRSLFdBQUssZUFBZVEsSUFBSTtBQUN4QixVQUFJLENBQUNBLE1BQU07QUFDVlYsY0FBTVEsU0FBUztNQUNoQjtJQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FFbENBLElBQUFHLGNBQXFFdEIsUUFBQSxLQUFBO0FBRTlELFNBQVN1QixPQUFPQyxNQUFNQyxRQUFRQyxRQUFRQyxRQUFRQyxPQUFPQyxVQUFVO0FBQ3BFLFVBQUEsR0FBUVAsWUFBQVEsV0FBVyxJQUFBLEdBQUdSLFlBQUFTLGFBQWFKLE9BQU8sV0FBVyxHQUFHO0lBQ3RETixNQUFNSyxPQUFPTDtJQUNiVyxPQUFPTixPQUFPTztJQUNkLGtCQUFrQjtNQUFDQyxPQUFPUCxPQUFPakIsV0FBVyxTQUFTO01BQUd5QixZQUFZO0lBQWE7SUFDakYsa0JBQWtCO01BQUNELE9BQU9QLE9BQU9qQixXQUFXLFFBQVE7SUFBQztJQUNyRCxvQkFBb0I7SUFDcEIsaUJBQWlCaUIsT0FBT1A7SUFDeEJnQixXQUFXVCxPQUFPWDtJQUNsQnFCLFdBQVdWLE9BQU9UO0VBQ3BCLEdBQUcsTUFBTSxHQUFlLENBQUMsUUFBUSxTQUFTLGtCQUFrQixnQkFBZ0IsQ0FBQztBQUMvRTs7QUNia1ZvQiw2QkFBT2YsU0FBU0E7QUFBT2UsNkJBQU9DLFNBQVM7QUFBK0NELDZCQUFPRSxZQUFZO0FBQWtCLElBQU9DLGdDQUFRSDs7QUpXNWQsSUFBTXRJLHVCQUE4Q2lJLGFBQ25ELElBQUkzRCxRQUFBLDRCQUFBO0FBQUEsTUFBQW9FLE9BQUFDLGtCQUFRLFdBQU9wRSxTQUFZO0FBQzlCLFVBQU0xQyxHQUFHQyxPQUFPQyxNQUFNLENBQUMsb0JBQW9CLEtBQUssQ0FBQztBQUVqRCxVQUFNNkcsT0FBT0MsU0FBU0MsY0FBYyxLQUFLO0FBQ3pDRCxhQUFTRSxLQUFLQyxPQUFPSixJQUFJO0FBRXpCLFFBQUlLLFVBQVU7QUFDZCxVQUFNQyxTQUFVbkcsV0FBeUI7QUFDeEMsVUFBSWtHLFNBQVM7QUFDWjtNQUNEO0FBQ0FBLGdCQUFVO0FBQ1ZFLFVBQUlDLFFBQVE7QUFDWlIsV0FBS2hJLE9BQU87QUFDWjJELGNBQVF4QixLQUFLO0lBQ2Q7QUFFQSxVQUFNb0csT0FBQSxHQUF1QnBELFlBQUFzRCxXQUFVZiwrQkFBc0I7TUFDNURqQixNQUFNO01BQ05ZO01BQ0FoQixXQUFXQSxNQUFZO0FBQ3RCaUMsZUFBTyxJQUFJO01BQ1o7TUFDQS9CLFVBQVVBLE1BQVk7QUFDckIrQixlQUFPLEtBQUs7TUFDYjtJQUNELENBQUM7QUFDREMsUUFBSUcsTUFBTVYsSUFBSTtFQUNmLENBQUM7QUFBQSxTQUFBLFNBQUFXLEtBQUE7QUFBQSxXQUFBYixLQUFBbkYsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxHQUFBLENBQUE7O0FLbkNGLElBQU12RCxZQUF1QkEsQ0FBQ3VKLGNBQWNDLDJCQUEyQixDQUFDLE1BQU07QUFDN0UsUUFBTS9JLFVBQ0wsT0FBTytJLDZCQUE2QixZQUFZLE9BQU9BLDZCQUE2QixXQUNqRjtJQUNBQyxVQUFVRDtJQUNWRSxRQUFRO0VBQ1QsSUFDQztJQUNBRCxVQUFVO0lBQ1ZDLFFBQVE7SUFDUixHQUFHRjtFQUNKO0FBQ0hoRixJQUFFb0UsUUFBUSxFQUFFZSxLQUFLLFlBQVksRUFBRUMsUUFDOUI7SUFDQzVKLFdBQVd1SjtFQUNaLEdBQ0E5SSxPQUNEO0FBQ0Q7O0FDbkJBLElBQU1QLGdCQUFpQjJKLFlBQThCO0FBQ3BELFFBQU07SUFBQ0M7SUFBY0M7RUFBYyxJQUFJbkksR0FBR29JLE9BQU9oRyxJQUFJO0FBQ3JELFNBQU8sQ0FBQyxHQUFJOEYsZ0JBQWdCLENBQUEsR0FBSyxHQUFLQyxrQkFBK0IsQ0FBQSxDQUFHLEVBQUVFLEtBQU1DLGFBQTZCO0FBQzVHLFdBQU90SyxjQUFjaUssTUFBTSxFQUFFM0ksU0FBU2dKLE9BQU87RUFDOUMsQ0FBQztBQUNGOyIsCiAgIm5hbWVzIjogWyJVdGlsX2V4cG9ydHMiLCAiX19leHBvcnQiLCAiTXdVcmkiLCAiYWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyIiwgImNoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmUiLCAiY2hlY2tBMTF5Q29uZmlybUtleSIsICJjaGVja0RlcGVuZGVuY2llcyIsICJkZWxheSIsICJnZW5lcmF0ZUFycmF5IiwgImdldEJvZHkiLCAiaW5pdE13QXBpIiwgIm9vdWlDb25maXJtV2l0aFN0eWxlIiwgInNjcm9sbFRvcCIsICJ1bmlxdWVBcnJheSIsICJ1c2VySXNJbkdyb3VwIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIl9fdG9Db21tb25KUyIsICJ0YXJnZXQiLCAidHlwZSIsICJsaXN0ZW5lciIsICJvcHRpb25zIiwgImFkZEV2ZW50TGlzdGVuZXIiLCAicmVtb3ZlIiwgInJlbW92ZUV2ZW50TGlzdGVuZXIiLCAiZXZlbnQiLCAib3BhY2l0eSIsICJjdXJyZW50VGFyZ2V0IiwgInN0eWxlIiwgInRvU3RyaW5nIiwgImluY2x1ZGVzIiwgImtleSIsICJhcmdzIiwgImZsYXRNYXAiLCAiYXJnIiwgIkFycmF5IiwgImlzQXJyYXkiLCAiTm9kZUxpc3QiLCAidXNlckFnZW50IiwgImFwaVVyaSIsICJtdyIsICJsb2FkZXIiLCAidXNpbmciLCAiYXBpT3B0aW9ucyIsICJhamF4IiwgImhlYWRlcnMiLCAiY29uY2F0IiwgIkZvcmVpZ25BcGkiLCAiQXBpIiwgInVuaXF1ZUFycmF5MiIsICJyZXN1bHQiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAiaXRlbSIsICJ2YWx1ZSIsICJsZW5ndGgiLCAiZXJyIiwgImUiLCAiZiIsICJfeCIsICJfeDIiLCAiX2NoZWNrRGVwZW5kZW5jaWVzIiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJnYWRnZXROYW1lcyIsICJvcHRpb24iLCAiYXBpIiwgImdhZGdldHMiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAiZ2FkZ2V0IiwgInVzZXIiLCAiZ2V0IiwgInBvc3RXaXRoRWRpdFRva2VuIiwgImFjdGlvbiIsICJjaGFuZ2UiLCAibXMiLCAiUHJvbWlzZSIsICJyZXNvbHZlIiwgInNldFRpbWVvdXQiLCAiJCIsICJyZWFkeSIsICJ0aGVuIiwgIiRib2R5IiwgIlVSTCIsICJjb25zdHJ1Y3RvciIsICJ1cmwiLCAiYmFzZSIsICJsb2NhdGlvbiIsICJvcmlnaW4iLCAiZXh0ZW5kIiwgIm9iamVjdCIsICJfaSIsICJfT2JqZWN0JGVudHJpZXMiLCAiT2JqZWN0IiwgImVudHJpZXMiLCAic2VhcmNoUGFyYW1zIiwgInNldCIsICJnZXRSZWxhdGl2ZVBhdGgiLCAicGF0aG5hbWUiLCAic2VhcmNoIiwgImhhc2giLCAiaW1wb3J0X3Z1ZTMiLCAicmVxdWlyZSIsICJpbXBvcnRfY29kZXgiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkNvbmZpcm0iLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiQ2FuY2VsIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgInByb3BzIiwgIl9fcHJvcHMiLCAiZW1pdCIsICJfX2VtaXQiLCAiY2xvc2UiLCAiY29uZmlybSIsICJvbkNvbmZpcm0iLCAiY2FuY2VsIiwgIm9uQ2FuY2VsIiwgImhhbmRsZU9wZW5DaGFuZ2UiLCAib3BlbiIsICJpbXBvcnRfdnVlMiIsICJyZW5kZXIiLCAiX2N0eCIsICJfY2FjaGUiLCAiJHByb3BzIiwgIiRzZXR1cCIsICIkZGF0YSIsICIkb3B0aW9ucyIsICJvcGVuQmxvY2siLCAiY3JlYXRlQmxvY2siLCAidGl0bGUiLCAibWVzc2FnZSIsICJsYWJlbCIsICJhY3Rpb25UeXBlIiwgIm9uUHJpbWFyeSIsICJvbkRlZmF1bHQiLCAiT291aUNvbmZpcm1XaXRoU3R5bGVfZGVmYXVsdCIsICJfX2ZpbGUiLCAiX19zY29wZUlkIiwgIk9vdWlDb25maXJtV2l0aFN0eWxlX2RlZmF1bHQyIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAicm9vdCIsICJkb2N1bWVudCIsICJjcmVhdGVFbGVtZW50IiwgImJvZHkiLCAiYXBwZW5kIiwgInNldHRsZWQiLCAic2V0dGxlIiwgImFwcCIsICJ1bm1vdW50IiwgImNyZWF0ZUFwcCIsICJtb3VudCIsICJfeDMiLCAidGFyZ2V0SGVpZ2h0IiwgImVmZmVjdHNPcHRpb25zT3JEdXJhdGlvbiIsICJkdXJhdGlvbiIsICJlYXNpbmciLCAiZmluZCIsICJhbmltYXRlIiwgImdyb3VwcyIsICJ3Z1VzZXJHcm91cHMiLCAid2dHbG9iYWxHcm91cHMiLCAiY29uZmlnIiwgInNvbWUiLCAiZWxlbWVudCJdCn0K

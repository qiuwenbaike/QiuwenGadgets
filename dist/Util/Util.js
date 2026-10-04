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
  findVariants: () => findVariants,
  generateArray: () => generateArray,
  getBody: () => getBody,
  initMwApi: () => initMwApi,
  oouiConfirmWithStyle: () => oouiConfirmWithStyle,
  queryGlobalUserGroups: () => queryGlobalUserGroups,
  queryUserGroups: () => queryUserGroups,
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
//! src/Util/modules/findVariants.ts
function findVariants(_x3) {
  return _findVariants.apply(this, arguments);
}
//! src/Util/modules/getBody.ts
function _findVariants() {
  _findVariants = _asyncToGenerator(function* (text) {
    const api = initMwApi("Util-FindVariants");
    const VARIANTS = ["zh-hans", "zh-hant", "zh-cn", "zh-hk", "zh-mo", "zh-sg", "zh-my", "zh-tw"];
    const allVariants = [];
    const params = {
      action: "parse",
      contentmodel: "wikitext",
      format: "json",
      formatversion: "2",
      prop: ["displaytitle"],
      title: "temp",
      text
    };
    for (var _i2 = 0, _VARIANTS = VARIANTS; _i2 < _VARIANTS.length; _i2++) {
      var _response$query;
      const variant = _VARIANTS[_i2];
      params.uselang = variant;
      params.variant = variant;
      const response = yield api.post(params);
      const displaytitle = response === null || response === void 0 || (_response$query = response["query"]) === null || _response$query === void 0 ? void 0 : _response$query.displaytitle;
      const variantElement = document.createElement("variant");
      variantElement.innerHTML = displaytitle;
      if (variantElement.textContent) {
        allVariants[allVariants.length] = variantElement.textContent;
      }
    }
    return uniqueArray(allVariants);
  });
  return _findVariants.apply(this, arguments);
}
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
  return function(_x4) {
    return _ref.apply(this, arguments);
  };
})());
//! src/Util/modules/queryGlobalUserGroups.ts
function queryGlobalUserGroups(_x5) {
  return _queryGlobalUserGroups.apply(this, arguments);
}
//! src/Util/modules/queryUserGroups.ts
function _queryGlobalUserGroups() {
  _queryGlobalUserGroups = _asyncToGenerator(function* (guiuser) {
    const api = initMwApi("Util-QueryGlobalUserGroups");
    const CACHE_KEY_PREFIX = "ext.gadget.Util_queryGlobalUserGroups-";
    let groups = [];
    if (mw.storage.getObject(CACHE_KEY_PREFIX + guiuser)) {
      groups = mw.storage.getObject(CACHE_KEY_PREFIX + guiuser);
      groups = groups.filter((element) => {
        return element !== "*";
      });
    } else {
      const params = {
        action: "query",
        format: "json",
        formatversion: "2",
        meta: "globaluserinfo",
        guiuser,
        guiprop: "groups",
        smaxage: 600,
        maxage: 600
      };
      const response = yield api.get(params);
      const query = response["query"];
      if (query !== null && query !== void 0 && query.globaluserinfo) {
        var _query$globaluserinfo, _query$globaluserinfo2;
        groups = (_query$globaluserinfo = (_query$globaluserinfo2 = query.globaluserinfo) === null || _query$globaluserinfo2 === void 0 ? void 0 : _query$globaluserinfo2.groups) !== null && _query$globaluserinfo !== void 0 ? _query$globaluserinfo : [];
        groups = groups.filter((element) => {
          return element !== "*";
        });
        mw.storage.setObject(CACHE_KEY_PREFIX + guiuser, groups, 60 * 60);
      }
    }
    return {
      query: {
        globaluserinfo: {
          name: guiuser,
          groups
        }
      }
    };
  });
  return _queryGlobalUserGroups.apply(this, arguments);
}
function queryUserGroups(_x6) {
  return _queryUserGroups.apply(this, arguments);
}
//! src/Util/modules/scrollTop.ts
function _queryUserGroups() {
  _queryUserGroups = _asyncToGenerator(function* (users) {
    var _query$users;
    const api = initMwApi("Util-QueryUserGroups");
    const CACHE_KEY_PREFIX = "ext.gadget.Util_queryUserGroups-";
    const cachedQueryUsers = [];
    var _iterator4 = _createForOfIteratorHelper(users), _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
        const user = _step4.value;
        if (mw.storage.getObject(CACHE_KEY_PREFIX + user)) {
          let groups = mw.storage.getObject(CACHE_KEY_PREFIX + user);
          groups = groups.filter((element) => {
            return element !== "*";
          });
          cachedQueryUsers[cachedQueryUsers.length] = {
            name: user,
            groups
          };
        }
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    const ususers = users.filter((v) => {
      return !mw.storage.getObject(CACHE_KEY_PREFIX + v);
    });
    const params = {
      ususers,
      action: "query",
      format: "json",
      formatversion: "2",
      list: "users",
      usprop: "groups",
      smaxage: 600,
      maxage: 600
    };
    const response = yield api.get(params);
    const query = response["query"];
    const queryUsers = [...(_query$users = query === null || query === void 0 ? void 0 : query.users) !== null && _query$users !== void 0 ? _query$users : [], ...cachedQueryUsers];
    for (var _i3 = 0, _queryUsers = queryUsers; _i3 < _queryUsers.length; _i3++) {
      const user = _queryUsers[_i3];
      if (user !== null && user !== void 0 && user.groups && user !== null && user !== void 0 && user.name) {
        let {
          groups
        } = user;
        groups = groups.filter((element) => {
          return element !== "*";
        });
        mw.storage.setObject(CACHE_KEY_PREFIX + user.name, groups, 60 * 60);
      }
    }
    return {
      query: {
        users: queryUsers
      }
    };
  });
  return _queryUserGroups.apply(this, arguments);
}
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1V0aWwvVXRpbC50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2FkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlci50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2NoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmUudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9jaGVja0ExMXlDb25maXJtS2V5LnRzIiwgInNyYy9VdGlsL21vZHVsZXMvZ2VuZXJhdGVBcnJheS50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2luaXRNd0FwaS50cyIsICJzcmMvVXRpbC9tb2R1bGVzL3VuaXF1ZUFycmF5LnRzIiwgInNyYy9VdGlsL21vZHVsZXMvY2hlY2tEZXBlbmRlbmNpZXMudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9kZWxheS50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2ZpbmRWYXJpYW50cy50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2dldEJvZHkudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9td1VyaS50cyIsICJzcmMvVXRpbC9tb2R1bGVzL29vdWlDb25maXJtV2l0aFN0eWxlLnRzIiwgImRpc3QvVXRpbC9zcmMvVXRpbC9tb2R1bGVzL09vdWlDb25maXJtV2l0aFN0eWxlLnZ1ZSIsICJzcmMvVXRpbC9tb2R1bGVzL3V0aWwvaTE4bi50cyIsICJzZmMtdGVtcGxhdGU6RDpcXEdpdFJlcG9zaXRvcnlcXFFpdXdlbkdhZGdldHNcXHNyY1xcVXRpbFxcbW9kdWxlc1xcT291aUNvbmZpcm1XaXRoU3R5bGUudnVlP3R5cGU9dGVtcGxhdGUiLCAic3JjL1V0aWwvbW9kdWxlcy9Pb3VpQ29uZmlybVdpdGhTdHlsZS52dWUiLCAic3JjL1V0aWwvbW9kdWxlcy9xdWVyeUdsb2JhbFVzZXJHcm91cHMudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9xdWVyeVVzZXJHcm91cHMudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9zY3JvbGxUb3AudHMiLCAic3JjL1V0aWwvbW9kdWxlcy91c2VySXNJbkdyb3VwLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQge2FkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcn0gZnJvbSAnLi9tb2R1bGVzL2FkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcic7XG5leHBvcnQge2NoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmV9IGZyb20gJy4vbW9kdWxlcy9jaGFuZ2VPcGFjaXR5V2hlbk1vdXNlRW50ZXJPckxlYXZlJztcbmV4cG9ydCB7Y2hlY2tBMTF5Q29uZmlybUtleX0gZnJvbSAnLi9tb2R1bGVzL2NoZWNrQTExeUNvbmZpcm1LZXknO1xuZXhwb3J0IHtjaGVja0RlcGVuZGVuY2llc30gZnJvbSAnLi9tb2R1bGVzL2NoZWNrRGVwZW5kZW5jaWVzJztcbmV4cG9ydCB7ZGVsYXl9IGZyb20gJy4vbW9kdWxlcy9kZWxheSc7XG5leHBvcnQge2ZpbmRWYXJpYW50c30gZnJvbSAnLi9tb2R1bGVzL2ZpbmRWYXJpYW50cyc7XG5leHBvcnQge2dlbmVyYXRlQXJyYXl9IGZyb20gJy4vbW9kdWxlcy9nZW5lcmF0ZUFycmF5JztcbmV4cG9ydCB7Z2V0Qm9keX0gZnJvbSAnLi9tb2R1bGVzL2dldEJvZHknO1xuZXhwb3J0IHtpbml0TXdBcGl9IGZyb20gJy4vbW9kdWxlcy9pbml0TXdBcGknO1xuZXhwb3J0IHtNd1VyaX0gZnJvbSAnLi9tb2R1bGVzL213VXJpJztcbmV4cG9ydCB7b291aUNvbmZpcm1XaXRoU3R5bGV9IGZyb20gJy4vbW9kdWxlcy9vb3VpQ29uZmlybVdpdGhTdHlsZSc7XG5leHBvcnQge3F1ZXJ5R2xvYmFsVXNlckdyb3Vwc30gZnJvbSAnLi9tb2R1bGVzL3F1ZXJ5R2xvYmFsVXNlckdyb3Vwcyc7XG5leHBvcnQge3F1ZXJ5VXNlckdyb3Vwc30gZnJvbSAnLi9tb2R1bGVzL3F1ZXJ5VXNlckdyb3Vwcyc7XG5leHBvcnQge3Njcm9sbFRvcH0gZnJvbSAnLi9tb2R1bGVzL3Njcm9sbFRvcCc7XG5leHBvcnQge3VzZXJJc0luR3JvdXB9IGZyb20gJy4vbW9kdWxlcy91c2VySXNJbkdyb3VwJztcbmV4cG9ydCB7dW5pcXVlQXJyYXl9IGZyb20gJy4vbW9kdWxlcy91bmlxdWVBcnJheSc7XG4iLCAidHlwZSBBZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXIgPSA8XG5cdFRhcmdldCBleHRlbmRzIERvY3VtZW50IHwgSFRNTEVsZW1lbnQgfCBFbGVtZW50IHwgTWVkaWFRdWVyeUxpc3QgfCBXaW5kb3csXG5cdFR5cGUgZXh0ZW5kcyAoVGFyZ2V0IGV4dGVuZHMgRG9jdW1lbnRcblx0XHQ/IGtleW9mIERvY3VtZW50RXZlbnRNYXBcblx0XHQ6IFRhcmdldCBleHRlbmRzIEhUTUxFbGVtZW50XG5cdFx0XHQ/IGtleW9mIEhUTUxFbGVtZW50RXZlbnRNYXBcblx0XHRcdDogVGFyZ2V0IGV4dGVuZHMgTWVkaWFRdWVyeUxpc3Rcblx0XHRcdFx0PyBrZXlvZiBNZWRpYVF1ZXJ5TGlzdEV2ZW50TWFwXG5cdFx0XHRcdDogVGFyZ2V0IGV4dGVuZHMgV2luZG93XG5cdFx0XHRcdFx0PyBrZXlvZiBXaW5kb3dFdmVudE1hcFxuXHRcdFx0XHRcdDoga2V5b2YgR2xvYmFsRXZlbnRIYW5kbGVyc0V2ZW50TWFwKSxcblx0TGlzdGVuZXIgZXh0ZW5kcyAoVGFyZ2V0IGV4dGVuZHMgRG9jdW1lbnRcblx0XHQ/IFR5cGUgZXh0ZW5kcyBrZXlvZiBEb2N1bWVudEV2ZW50TWFwXG5cdFx0XHQ/ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBEb2N1bWVudEV2ZW50TWFwW1R5cGVdKSA9PiB1bmtub3duXG5cdFx0XHQ6ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBFdmVudCkgPT4gdW5rbm93blxuXHRcdDogVGFyZ2V0IGV4dGVuZHMgSFRNTEVsZW1lbnRcblx0XHRcdD8gVHlwZSBleHRlbmRzIGtleW9mIEhUTUxFbGVtZW50RXZlbnRNYXBcblx0XHRcdFx0PyAodGhpczogVGFyZ2V0LCBldmVudDogSFRNTEVsZW1lbnRFdmVudE1hcFtUeXBlXSkgPT4gdW5rbm93blxuXHRcdFx0XHQ6ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBFdmVudCkgPT4gdW5rbm93blxuXHRcdFx0OiBUYXJnZXQgZXh0ZW5kcyBFbGVtZW50XG5cdFx0XHRcdD8gVHlwZSBleHRlbmRzIGtleW9mIEVsZW1lbnRFdmVudE1hcFxuXHRcdFx0XHRcdD8gKHRoaXM6IFRhcmdldCwgZXZlbnQ6IEVsZW1lbnRFdmVudE1hcFtUeXBlXSkgPT4gdW5rbm93blxuXHRcdFx0XHRcdDogKHRoaXM6IFRhcmdldCwgZXZlbnQ6IEV2ZW50KSA9PiB1bmtub3duXG5cdFx0XHRcdDogVGFyZ2V0IGV4dGVuZHMgTWVkaWFRdWVyeUxpc3Rcblx0XHRcdFx0XHQ/IFR5cGUgZXh0ZW5kcyBrZXlvZiBNZWRpYVF1ZXJ5TGlzdEV2ZW50TWFwXG5cdFx0XHRcdFx0XHQ/ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBNZWRpYVF1ZXJ5TGlzdEV2ZW50TWFwW1R5cGVdKSA9PiB1bmtub3duXG5cdFx0XHRcdFx0XHQ6ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBFdmVudCkgPT4gdW5rbm93blxuXHRcdFx0XHRcdDogVGFyZ2V0IGV4dGVuZHMgV2luZG93XG5cdFx0XHRcdFx0XHQ/IFR5cGUgZXh0ZW5kcyBrZXlvZiBXaW5kb3dFdmVudE1hcFxuXHRcdFx0XHRcdFx0XHQ/ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBXaW5kb3dFdmVudE1hcFtUeXBlXSkgPT4gdW5rbm93blxuXHRcdFx0XHRcdFx0XHQ6ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBFdmVudCkgPT4gdW5rbm93blxuXHRcdFx0XHRcdFx0OiAodGhpczogVGFyZ2V0LCBldmVudDogRXZlbnQpID0+IHVua25vd24pLFxuPih7XG5cdHRhcmdldCxcblx0dHlwZSxcblx0bGlzdGVuZXIsXG5cdG9wdGlvbnMsXG59OiB7XG5cdHRhcmdldDogVGFyZ2V0O1xuXHR0eXBlOiBUeXBlO1xuXHRsaXN0ZW5lcjogTGlzdGVuZXI7XG5cdG9wdGlvbnM/OiBBZGRFdmVudExpc3RlbmVyT3B0aW9ucztcbn0pID0+IHtcblx0cmVtb3ZlOiAoKSA9PiB2b2lkO1xufTtcblxuY29uc3QgYWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyOiBBZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXIgPSAoe3RhcmdldCwgdHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMgPSB7fX0pID0+IHtcblx0dGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIgYXMgRXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdCwgb3B0aW9ucyk7XG5cdHJldHVybiB7XG5cdFx0cmVtb3ZlOiAoKTogdm9pZCA9PiB7XG5cdFx0XHR0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciBhcyBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0LCBvcHRpb25zKTtcblx0XHR9LFxuXHR9O1xufTtcblxuZXhwb3J0IHt0eXBlIEFkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3ZlciwgYWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyfTtcbiIsICJ0eXBlIENoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmUgPSAoZXZlbnQ6IE1vdXNlRXZlbnQgfCBKUXVlcnkuVHJpZ2dlcmVkRXZlbnQsIG9wYWNpdHk/OiBudW1iZXIpID0+IHZvaWQ7XG5cbmNvbnN0IGNoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmU6IENoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmUgPSAoZXZlbnQsIG9wYWNpdHkgPSAwLjcpID0+IHtcblx0KGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLm9wYWNpdHkgPSBldmVudC50eXBlID09PSAnbW91c2VlbnRlcicgPyAnMScgOiBvcGFjaXR5LnRvU3RyaW5nKCk7XG59O1xuXG5leHBvcnQge3R5cGUgQ2hhbmdlT3BhY2l0eVdoZW5Nb3VzZUVudGVyT3JMZWF2ZSwgY2hhbmdlT3BhY2l0eVdoZW5Nb3VzZUVudGVyT3JMZWF2ZX07XG4iLCAidHlwZSBDaGVja0ExMXlDb25maXJtS2V5ID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50IHwgTW91c2VFdmVudCB8IEpRdWVyeS5DbGlja0V2ZW50IHwgSlF1ZXJ5LktleURvd25FdmVudCkgPT4gYm9vbGVhbjtcblxuY29uc3QgY2hlY2tBMTF5Q29uZmlybUtleTogQ2hlY2tBMTF5Q29uZmlybUtleSA9IChldmVudCk6IGJvb2xlYW4gPT4ge1xuXHRpZiAoWydjbGljaycsICdrZXlkb3duJ10uaW5jbHVkZXMoZXZlbnQudHlwZSkpIHtcblx0XHRpZiAoZXZlbnQudHlwZSA9PT0gJ2tleWRvd24nKSB7XG5cdFx0XHRyZXR1cm4gWydFbnRlcicsICcgJ10uaW5jbHVkZXMoKGV2ZW50IGFzIEtleWJvYXJkRXZlbnQpLmtleSk7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCB7dHlwZSBDaGVja0ExMXlDb25maXJtS2V5LCBjaGVja0ExMXlDb25maXJtS2V5fTtcbiIsICJ0eXBlIEdlbmVyYXRlQXJyYXkgPSB0eXBlb2YgZ2VuZXJhdGVBcnJheTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVBcnJheTxUIGV4dGVuZHMgW10+KC4uLmFyZ3M6IChUIHwgVFtdKVtdKTogVFtdO1xuZnVuY3Rpb24gZ2VuZXJhdGVBcnJheTxUIGV4dGVuZHMgTm9kZUxpc3Q+KC4uLmFyZ3M6IChUIHwgVFtdKVtdKTogTm9kZVtdO1xuZnVuY3Rpb24gZ2VuZXJhdGVBcnJheTxUID0gdW5rbm93bj4oLi4uYXJnczogKFQgfCBUW10pW10pOiBUW107XG5mdW5jdGlvbiBnZW5lcmF0ZUFycmF5PFQ+KC4uLmFyZ3M6IChUIHwgVFtdKVtdKTogVFtdIHtcblx0cmV0dXJuIGFyZ3MuZmxhdE1hcCgoYXJnKSA9PiB7XG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0cmV0dXJuIGFyZztcblx0XHR9XG5cblx0XHRpZiAoYXJnIGluc3RhbmNlb2YgTm9kZUxpc3QpIHtcblx0XHRcdHJldHVybiBbLi4uYXJnXSBhcyBUO1xuXHRcdH1cblxuXHRcdHJldHVybiBbYXJnXTtcblx0fSk7XG59XG5cbmV4cG9ydCB7dHlwZSBHZW5lcmF0ZUFycmF5LCBnZW5lcmF0ZUFycmF5fTtcbiIsICJ0eXBlIEluaXRNd0FwaSA9IHR5cGVvZiBpbml0TXdBcGk7XG5cbi8qKlxuICogQHJlcXVpcmVzIG1lZGlhd2lraS5hcGlcbiAqIEBwYXJhbSB7c3RyaW5nfSBbdXNlckFnZW50XVxuICogQHBhcmFtIHtzdHJpbmd9IFthcGlVcmldXG4gKiBAcmV0dXJuIHttdy5BcGl8bXcuRm9yZWlnbkFwaX1cbiAqL1xuZnVuY3Rpb24gaW5pdE13QXBpKHVzZXJBZ2VudD86IHN0cmluZyk6IG13LkFwaTtcbmZ1bmN0aW9uIGluaXRNd0FwaSh1c2VyQWdlbnQ6IHN0cmluZywgYXBpVXJpOiBzdHJpbmcpOiBtdy5Gb3JlaWduQXBpO1xuZnVuY3Rpb24gaW5pdE13QXBpKHVzZXJBZ2VudD86IHN0cmluZywgYXBpVXJpPzogc3RyaW5nKTogbXcuQXBpIHwgbXcuRm9yZWlnbkFwaSB7XG5cdGNvbnN0IGFwaU9wdGlvbnMgPSB7XG5cdFx0YWpheDoge1xuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHQnQXBpLVVzZXItQWdlbnQnOiB1c2VyQWdlbnQgPyBgUWl1d2VuLzEuMSAoJHt1c2VyQWdlbnR9KWAgOiAnUWl1d2VuLzEuMScsXG5cdFx0XHR9LFxuXHRcdH0sXG5cdH07XG5cblx0aWYgKGFwaVVyaSkge1xuXHRcdHJldHVybiBuZXcgbXcuRm9yZWlnbkFwaShhcGlVcmksIGFwaU9wdGlvbnMpO1xuXHR9XG5cblx0cmV0dXJuIG5ldyBtdy5BcGkoYXBpT3B0aW9ucyk7XG59XG5cbmV4cG9ydCB7dHlwZSBJbml0TXdBcGksIGluaXRNd0FwaX07XG4iLCAidHlwZSBVbmlxdWVBcnJheSA9IHR5cGVvZiB1bmlxdWVBcnJheTtcblxuY29uc3QgdW5pcXVlQXJyYXkgPSBmdW5jdGlvbiB1bmlxdWVBcnJheTxUPihhcmdzOiBUW10pOiBUW10ge1xuXHQvKiohXG5cdCAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBDQy1CWS1TQS00LjBcblx0ICpcblx0ICogQHNvdXJjZSB7QGxpbmsgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvOTIyOTY0NS9yZW1vdmUtZHVwbGljYXRlLXZhbHVlcy1mcm9tLWpzLWFycmF5LzkyMjk4Mn1cblx0ICogQGxpY2Vuc2UgQ0MtQlktU0EtNC4wXG5cdCAqL1xuXHRjb25zdCByZXN1bHQ6IHR5cGVvZiBhcmdzID0gW107XG5cdGZvciAoY29uc3QgaXRlbSBvZiBhcmdzKSB7XG5cdFx0aWYgKCFyZXN1bHQuaW5jbHVkZXMoaXRlbSkpIHtcblx0XHRcdHJlc3VsdFtyZXN1bHQubGVuZ3RoXSA9IGl0ZW07IC8vIFJlcGxhY2UgQXJyYXkjcHVzaCB0byBhdm9pZCBjb3JlLWpzIHBvbHlmaWxsaW5nXG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQge3R5cGUgVW5pcXVlQXJyYXksIHVuaXF1ZUFycmF5fTtcbiIsICJpbXBvcnQge2dlbmVyYXRlQXJyYXl9IGZyb20gJy4vZ2VuZXJhdGVBcnJheSc7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnLi9pbml0TXdBcGknO1xuaW1wb3J0IHt1bmlxdWVBcnJheX0gZnJvbSAnLi91bmlxdWVBcnJheSc7XG5cbnR5cGUgQm9vbGVhbiA9ICcwJyB8ICcxJyB8IDAgfCAxO1xudHlwZSBDaGVja0RlcGVuZGVuY2llcyA9IHR5cGVvZiBjaGVja0RlcGVuZGVuY2llcztcblxuZnVuY3Rpb24gY2hlY2tEZXBlbmRlbmNpZXMoZ2FkZ2V0TmFtZXM6IHN0cmluZyB8IHN0cmluZ1tdKTogUHJvbWlzZTx2b2lkPjtcbmZ1bmN0aW9uIGNoZWNrRGVwZW5kZW5jaWVzKGdhZGdldE5hbWVzOiBzdHJpbmcsIG9wdGlvbjogQm9vbGVhbik6IFByb21pc2U8dm9pZD47XG5hc3luYyBmdW5jdGlvbiBjaGVja0RlcGVuZGVuY2llcyhnYWRnZXROYW1lczogc3RyaW5nIHwgc3RyaW5nW10sIG9wdGlvbj86IEJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoJ1V0aWwtQ2hlY2tEZXBlbmRlbmNpZXMnKTtcblx0Y29uc3QgZ2FkZ2V0cyA9IHVuaXF1ZUFycmF5KGdlbmVyYXRlQXJyYXkoZ2FkZ2V0TmFtZXMpKTtcblx0b3B0aW9uIHx8PSAxO1xuXG5cdGZvciAoY29uc3QgZ2FkZ2V0IG9mIGdhZGdldHMpIHtcblx0XHRpZiAoXG5cdFx0XHQob3B0aW9uID09PSAnMCcgJiYgbXcudXNlci5vcHRpb25zLmdldChgZ2FkZ2V0LSR7Z2FkZ2V0fWApID09PSAnMScpIHx8XG5cdFx0XHQob3B0aW9uID09PSAnMScgJiYgbXcudXNlci5vcHRpb25zLmdldChgZ2FkZ2V0LSR7Z2FkZ2V0fWApID09PSAnMCcpXG5cdFx0KSB7XG5cdFx0XHRhd2FpdCBhcGkucG9zdFdpdGhFZGl0VG9rZW4oe1xuXHRcdFx0XHRhY3Rpb246ICdvcHRpb25zJyxcblx0XHRcdFx0Y2hhbmdlOiBgZ2FkZ2V0LSR7Z2FkZ2V0fT0ke29wdGlvbn1gLFxuXHRcdFx0fSBhcyBBcGlPcHRpb25zUGFyYW1zKTtcblx0XHRcdGF3YWl0IG13LmxvYWRlci51c2luZyhgZXh0LmdhZGdldC4ke2dhZGdldH1gKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IHt0eXBlIENoZWNrRGVwZW5kZW5jaWVzLCBjaGVja0RlcGVuZGVuY2llc307XG4iLCAidHlwZSBEZWxheSA9IChtczogbnVtYmVyKSA9PiBQcm9taXNlPHZvaWQ+O1xuXG5jb25zdCBkZWxheTogRGVsYXkgPSAobXMpID0+IHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlOiAoKSA9PiB2b2lkKTogdm9pZCA9PiB7XG5cdFx0c2V0VGltZW91dChyZXNvbHZlLCBtcyk7XG5cdH0pO1xufTtcblxuZXhwb3J0IHt0eXBlIERlbGF5LCBkZWxheX07XG4iLCAiaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJy4vaW5pdE13QXBpJztcbmltcG9ydCB7dW5pcXVlQXJyYXl9IGZyb20gJy4vdW5pcXVlQXJyYXknO1xuXG50eXBlIEZpbmRWYXJpYW50cyA9IHR5cGVvZiBmaW5kVmFyaWFudHM7XG5cbmFzeW5jIGZ1bmN0aW9uIGZpbmRWYXJpYW50cyh0ZXh0OiBzdHJpbmcpIHtcblx0Y29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoJ1V0aWwtRmluZFZhcmlhbnRzJyk7XG5cblx0Y29uc3QgVkFSSUFOVFMgPSBbJ3poLWhhbnMnLCAnemgtaGFudCcsICd6aC1jbicsICd6aC1oaycsICd6aC1tbycsICd6aC1zZycsICd6aC1teScsICd6aC10dyddO1xuXG5cdGNvbnN0IGFsbFZhcmlhbnRzOiBzdHJpbmdbXSA9IFtdO1xuXG5cdGNvbnN0IHBhcmFtczogQXBpUGFyc2VQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdGNvbnRlbnRtb2RlbDogJ3dpa2l0ZXh0Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cHJvcDogWydkaXNwbGF5dGl0bGUnXSxcblx0XHR0aXRsZTogJ3RlbXAnLFxuXHRcdHRleHQsXG5cdH07XG5cblx0Zm9yIChjb25zdCB2YXJpYW50IG9mIFZBUklBTlRTKSB7XG5cdFx0cGFyYW1zLnVzZWxhbmcgPSB2YXJpYW50O1xuXHRcdHBhcmFtcy52YXJpYW50ID0gdmFyaWFudDtcblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KHBhcmFtcyk7XG5cblx0XHRjb25zdCBkaXNwbGF5dGl0bGUgPSByZXNwb25zZT8uWydxdWVyeSddPy5kaXNwbGF5dGl0bGUgYXMgc3RyaW5nO1xuXHRcdGNvbnN0IHZhcmlhbnRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmFyaWFudCcpO1xuXHRcdHZhcmlhbnRFbGVtZW50LmlubmVySFRNTCA9IGRpc3BsYXl0aXRsZTtcblxuXHRcdGlmICh2YXJpYW50RWxlbWVudC50ZXh0Q29udGVudCkge1xuXHRcdFx0YWxsVmFyaWFudHNbYWxsVmFyaWFudHMubGVuZ3RoXSA9IHZhcmlhbnRFbGVtZW50LnRleHRDb250ZW50O1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB1bmlxdWVBcnJheShhbGxWYXJpYW50cyk7XG59XG5cbmV4cG9ydCB7dHlwZSBGaW5kVmFyaWFudHMsIGZpbmRWYXJpYW50c307XG4iLCAidHlwZSBHZXRCb2R5ID0gKCkgPT4gSlF1ZXJ5LlRoZW5hYmxlPEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+PjtcblxuY29uc3QgZ2V0Qm9keSA9ICgpID0+IHtcblx0cmV0dXJuICQucmVhZHkudGhlbigoKTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4gPT4ge1xuXHRcdGNvbnN0ICRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PiA9ICQoJ2JvZHknKTtcblxuXHRcdHJldHVybiAkYm9keTtcblx0fSk7XG59O1xuXG5leHBvcnQge3R5cGUgR2V0Qm9keSwgZ2V0Qm9keX07XG4iLCAidHlwZSBDbGFzc013VXJpID0gdHlwZW9mIE13VXJpO1xuXG5jbGFzcyBNd1VyaSBleHRlbmRzIFVSTCB7XG5cdGNvbnN0cnVjdG9yKHVybDogc3RyaW5nLCBiYXNlOiBzdHJpbmcgPSBsb2NhdGlvbi5vcmlnaW4pIHtcblx0XHRzdXBlcih1cmwsIGJhc2UpO1xuXHR9XG5cdHB1YmxpYyBleHRlbmQob2JqZWN0OiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSk6IHRoaXMge1xuXHRcdGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG9iamVjdCkpIHtcblx0XHRcdHRoaXMuc2VhcmNoUGFyYW1zLnNldChrZXksIHZhbHVlKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0cHVibGljIGdldFJlbGF0aXZlUGF0aCgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLnBhdGhuYW1lICsgdGhpcy5zZWFyY2ggKyB0aGlzLmhhc2g7XG5cdH1cbn1cblxuZXhwb3J0IHt0eXBlIENsYXNzTXdVcmksIE13VXJpfTtcbiIsICJpbXBvcnQge3R5cGUgQXBwIGFzIFZ1ZUFwcCwgY3JlYXRlQXBwfSBmcm9tICd2dWUnO1xuaW1wb3J0IE9vdWlDb25maXJtV2l0aFN0eWxlIGZyb20gJy4vT291aUNvbmZpcm1XaXRoU3R5bGUudnVlJztcblxudHlwZSBPb3VpQ29uZmlybVdpdGhTdHlsZSA9IChtZXNzYWdlOiBzdHJpbmcpID0+IFByb21pc2U8Ym9vbGVhbj47XG5cbi8qKlxuICogU2hvdyBhIGNvbmZpcm1hdGlvbiBkaWFsb2cgYnVpbHQgd2l0aCBDb2RleCBhbmQgVnVlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGRpc3BsYXkgaW4gdGhlIGRpYWxvZ1xuICogQHJldHVybiB7UHJvbWlzZTxib29sZWFuPn0gUmVzb2x2ZXMgdG8gYHRydWVgIHdoZW4gdGhlIHVzZXIgY29uZmlybXMsIGBmYWxzZWAgd2hlbiBjYW5jZWxsZWQgb3IgY2xvc2VkXG4gKi9cbmNvbnN0IG9vdWlDb25maXJtV2l0aFN0eWxlOiBPb3VpQ29uZmlybVdpdGhTdHlsZSA9IChtZXNzYWdlKSA9PlxuXHRuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSkgPT4ge1xuXHRcdGF3YWl0IG13LmxvYWRlci51c2luZyhbJ0B3aWtpbWVkaWEvY29kZXgnLCAndnVlJ10pO1xuXG5cdFx0Y29uc3Qgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kKHJvb3QpO1xuXG5cdFx0bGV0IHNldHRsZWQgPSBmYWxzZTtcblx0XHRjb25zdCBzZXR0bGUgPSAodmFsdWU6IGJvb2xlYW4pOiB2b2lkID0+IHtcblx0XHRcdGlmIChzZXR0bGVkKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHNldHRsZWQgPSB0cnVlO1xuXHRcdFx0YXBwLnVubW91bnQoKTtcblx0XHRcdHJvb3QucmVtb3ZlKCk7XG5cdFx0XHRyZXNvbHZlKHZhbHVlKTtcblx0XHR9O1xuXG5cdFx0Y29uc3QgYXBwOiBWdWVBcHA8RWxlbWVudD4gPSBjcmVhdGVBcHAoT291aUNvbmZpcm1XaXRoU3R5bGUsIHtcblx0XHRcdG9wZW46IHRydWUsXG5cdFx0XHRtZXNzYWdlLFxuXHRcdFx0b25Db25maXJtOiAoKTogdm9pZCA9PiB7XG5cdFx0XHRcdHNldHRsZSh0cnVlKTtcblx0XHRcdH0sXG5cdFx0XHRvbkNhbmNlbDogKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRzZXR0bGUoZmFsc2UpO1xuXHRcdFx0fSxcblx0XHR9KTtcblx0XHRhcHAubW91bnQocm9vdCk7XG5cdH0pO1xuXG5leHBvcnQge3R5cGUgT291aUNvbmZpcm1XaXRoU3R5bGUsIG9vdWlDb25maXJtV2l0aFN0eWxlfTtcbiIsICI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtDZHhEaWFsb2d9IGZyb20gJ0B3aWtpbWVkaWEvY29kZXgnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL3V0aWwvaTE4bic7XG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8e1xuXHRvcGVuOiBib29sZWFuO1xuXHRtZXNzYWdlOiBzdHJpbmc7XG5cdG9uQ29uZmlybTogKCkgPT4gdm9pZDtcblx0b25DYW5jZWw6ICgpID0+IHZvaWQ7XG59PigpO1xuXG5jb25zdCBlbWl0ID0gZGVmaW5lRW1pdHM8e1xuXHQndXBkYXRlOm9wZW4nOiBbdmFsdWU6IGJvb2xlYW5dO1xufT4oKTtcblxuY29uc3QgY2xvc2UgPSAoKTogdm9pZCA9PiB7XG5cdGVtaXQoJ3VwZGF0ZTpvcGVuJywgZmFsc2UpO1xufTtcblxuY29uc3QgY29uZmlybSA9ICgpOiB2b2lkID0+IHtcblx0Y2xvc2UoKTtcblx0cHJvcHMub25Db25maXJtKCk7XG59O1xuXG5jb25zdCBjYW5jZWwgPSAoKTogdm9pZCA9PiB7XG5cdGNsb3NlKCk7XG5cdHByb3BzLm9uQ2FuY2VsKCk7XG59O1xuXG5jb25zdCBoYW5kbGVPcGVuQ2hhbmdlID0gKG9wZW46IGJvb2xlYW4pOiB2b2lkID0+IHtcblx0ZW1pdCgndXBkYXRlOm9wZW4nLCBvcGVuKTtcblx0aWYgKCFvcGVuKSB7XG5cdFx0cHJvcHMub25DYW5jZWwoKTtcblx0fVxufTtcbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG5cdDxjZHgtZGlhbG9nXG5cdFx0Om9wZW49XCJvcGVuXCJcblx0XHQ6dGl0bGU9XCJtZXNzYWdlXCJcblx0XHQ6cHJpbWFyeS1hY3Rpb249XCJ7bGFiZWw6IGdldE1lc3NhZ2UoJ0NvbmZpcm0nKSwgYWN0aW9uVHlwZTogJ3Byb2dyZXNzaXZlJ31cIlxuXHRcdDpkZWZhdWx0LWFjdGlvbj1cIntsYWJlbDogZ2V0TWVzc2FnZSgnQ2FuY2VsJyl9XCJcblx0XHQ6dXNlLWNsb3NlLWJ1dHRvbj1cInRydWVcIlxuXHRcdEB1cGRhdGU6b3Blbj1cImhhbmRsZU9wZW5DaGFuZ2VcIlxuXHRcdEBwcmltYXJ5PVwiY29uZmlybVwiXG5cdFx0QGRlZmF1bHQ9XCJjYW5jZWxcIlxuXHQvPlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwibGVzc1wiPlxuLmNkeC1kaWFsb2cgOmRlZXAoLmNkeC1kaWFsb2dfX2Zvb3Rlcikge1xuXHRib3JkZXItdG9wOiAwLjFyZW0gc29saWQgIzA2NDVhZDtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbi5jZHgtZGlhbG9nIDpkZWVwKC5jZHgtZGlhbG9nX190aXRsZSkge1xuXHRmb250LXNpemU6IDEuMnJlbTtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0bGluZS1oZWlnaHQ6IDEuODtcblx0cGFkZGluZzogMC40ZW0gMDtcbn1cbjwvc3R5bGU+XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdENvbmZpcm06IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ29uZmlybScsXG5cdFx0XHRqYTogJ+eiuuiqjScsXG5cdFx0XHQnemgtaGFucyc6ICfnoa7orqQnLFxuXHRcdFx0J3poLWhhbnQnOiAn56K66KqNJyxcblx0XHR9KSxcblx0XHRDYW5jZWw6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ2FuY2VsJyxcblx0XHRcdGphOiAn44Kt44Oj44Oz44K744OrJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WPlua2iCcsXG5cdFx0XHQnemgtaGFudCc6ICflj5bmtognLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQgeyBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlQmxvY2sgYXMgX2NyZWF0ZUJsb2NrIH0gZnJvbSBcInZ1ZVwiXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soJHNldHVwW1wiQ2R4RGlhbG9nXCJdLCB7XG4gICAgb3BlbjogJHByb3BzLm9wZW4sXG4gICAgdGl0bGU6ICRwcm9wcy5tZXNzYWdlLFxuICAgIFwicHJpbWFyeS1hY3Rpb25cIjoge2xhYmVsOiAkc2V0dXAuZ2V0TWVzc2FnZSgnQ29uZmlybScpLCBhY3Rpb25UeXBlOiAncHJvZ3Jlc3NpdmUnfSxcbiAgICBcImRlZmF1bHQtYWN0aW9uXCI6IHtsYWJlbDogJHNldHVwLmdldE1lc3NhZ2UoJ0NhbmNlbCcpfSxcbiAgICBcInVzZS1jbG9zZS1idXR0b25cIjogdHJ1ZSxcbiAgICBcIm9uVXBkYXRlOm9wZW5cIjogJHNldHVwLmhhbmRsZU9wZW5DaGFuZ2UsXG4gICAgb25QcmltYXJ5OiAkc2V0dXAuY29uZmlybSxcbiAgICBvbkRlZmF1bHQ6ICRzZXR1cC5jYW5jZWxcbiAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgW1wib3BlblwiLCBcInRpdGxlXCIsIFwicHJpbWFyeS1hY3Rpb25cIiwgXCJkZWZhdWx0LWFjdGlvblwiXSkpXG59IiwgImltcG9ydCBzY3JpcHQgZnJvbSBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcVXRpbFxcXFxtb2R1bGVzXFxcXE9vdWlDb25maXJtV2l0aFN0eWxlLnZ1ZT90eXBlPXNjcmlwdFwiO2ltcG9ydCBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcVXRpbFxcXFxtb2R1bGVzXFxcXE9vdWlDb25maXJtV2l0aFN0eWxlLnZ1ZT90eXBlPXN0eWxlJmluZGV4PTBcIjtpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiRDpcXFxcR2l0UmVwb3NpdG9yeVxcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxVdGlsXFxcXG1vZHVsZXNcXFxcT291aUNvbmZpcm1XaXRoU3R5bGUudnVlP3R5cGU9dGVtcGxhdGVcIjsgc2NyaXB0LnJlbmRlciA9IHJlbmRlcjtzY3JpcHQuX19maWxlID0gXCJzcmNcXFxcVXRpbFxcXFxtb2R1bGVzXFxcXE9vdWlDb25maXJtV2l0aFN0eWxlLnZ1ZVwiO3NjcmlwdC5fX3Njb3BlSWQgPSBcImRhdGEtdi04NmVhODlhZFwiO2V4cG9ydCBkZWZhdWx0IHNjcmlwdDsiLCAiaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJy4vaW5pdE13QXBpJztcblxudHlwZSBRdWVyeUdsb2JhbFVzZXJHcm91cHMgPSB0eXBlb2YgcXVlcnlHbG9iYWxVc2VyR3JvdXBzO1xuXG5hc3luYyBmdW5jdGlvbiBxdWVyeUdsb2JhbFVzZXJHcm91cHMoZ3VpdXNlcjogc3RyaW5nKSB7XG5cdGNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKCdVdGlsLVF1ZXJ5R2xvYmFsVXNlckdyb3VwcycpO1xuXG5cdGNvbnN0IENBQ0hFX0tFWV9QUkVGSVggPSAnZXh0LmdhZGdldC5VdGlsX3F1ZXJ5R2xvYmFsVXNlckdyb3Vwcy0nO1xuXG5cdGxldCBncm91cHM6IHN0cmluZ1tdID0gW107XG5cblx0Ly8gUXVlcnkgZnJvbSBjYWNoZVxuXHQvLyBDaGVjayBpZiB1c2VyIGdyb3VwIGluZm8gaXMgY2FjaGVkIGluIExvY2FsU3RvcmFnZVxuXHQvLyBJZiBjYWNoZWQsIGdldCB0aGVtIGZyb20gTG9jYWxTdG9yYWdlXG5cdGlmIChtdy5zdG9yYWdlLmdldE9iamVjdChDQUNIRV9LRVlfUFJFRklYICsgZ3VpdXNlcikpIHtcblx0XHRncm91cHMgPSBtdy5zdG9yYWdlLmdldE9iamVjdChDQUNIRV9LRVlfUFJFRklYICsgZ3VpdXNlcikgYXMgc3RyaW5nW107XG5cdFx0Ly8gUmVtb3ZlICcqJyBmcm9tIGdyb3Vwc1xuXHRcdGdyb3VwcyA9IGdyb3Vwcy5maWx0ZXIoKGVsZW1lbnQpID0+IHtcblx0XHRcdHJldHVybiBlbGVtZW50ICE9PSAnKic7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gUXVlcnkgZnJvbSB3ZWJcblx0XHQvLyBRdWVyeSBwYXJhbXNcblx0XHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdG1ldGE6ICdnbG9iYWx1c2VyaW5mbycsXG5cdFx0XHRndWl1c2VyLFxuXHRcdFx0Z3VpcHJvcDogJ2dyb3VwcycsXG5cdFx0XHRzbWF4YWdlOiA2MDAsXG5cdFx0XHRtYXhhZ2U6IDYwMCxcblx0XHR9O1xuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXG5cdFx0Ly8gRGUtY29uc3RydWN0IHRoZSByZXNwb25zZSBvYmplY3Rcblx0XHRjb25zdCBxdWVyeSA9IHJlc3BvbnNlWydxdWVyeSddIGFzIHtcblx0XHRcdGdsb2JhbHVzZXJpbmZvOiB7Z3JvdXBzOiBzdHJpbmdbXTsgbmFtZTogc3RyaW5nfTtcblx0XHR9O1xuXG5cdFx0aWYgKHF1ZXJ5Py5nbG9iYWx1c2VyaW5mbykge1xuXHRcdFx0Z3JvdXBzID0gcXVlcnkuZ2xvYmFsdXNlcmluZm8/Lmdyb3VwcyA/PyBbXTtcblx0XHRcdC8vIFJlbW92ZSAnKicgZnJvbSBncm91cHNcblx0XHRcdGdyb3VwcyA9IGdyb3Vwcy5maWx0ZXIoKGVsZW1lbnQpID0+IHtcblx0XHRcdFx0cmV0dXJuIGVsZW1lbnQgIT09ICcqJztcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBDYWNoZSBmb3IgMSBob3VyXG5cdFx0XHRtdy5zdG9yYWdlLnNldE9iamVjdChDQUNIRV9LRVlfUFJFRklYICsgZ3VpdXNlciwgZ3JvdXBzLCA2MCAqIDYwKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4ge3F1ZXJ5OiB7Z2xvYmFsdXNlcmluZm86IHtuYW1lOiBndWl1c2VyLCBncm91cHN9fX07XG59XG5cbmV4cG9ydCB7dHlwZSBRdWVyeUdsb2JhbFVzZXJHcm91cHMsIHF1ZXJ5R2xvYmFsVXNlckdyb3Vwc307XG4iLCAiaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJy4vaW5pdE13QXBpJztcblxudHlwZSBRdWVyeVVzZXJHcm91cHMgPSB0eXBlb2YgcXVlcnlVc2VyR3JvdXBzO1xuXG5hc3luYyBmdW5jdGlvbiBxdWVyeVVzZXJHcm91cHModXNlcnM6IHN0cmluZ1tdKSB7XG5cdGNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKCdVdGlsLVF1ZXJ5VXNlckdyb3VwcycpO1xuXG5cdGNvbnN0IENBQ0hFX0tFWV9QUkVGSVggPSAnZXh0LmdhZGdldC5VdGlsX3F1ZXJ5VXNlckdyb3Vwcy0nO1xuXG5cdGNvbnN0IGNhY2hlZFF1ZXJ5VXNlcnM6IHtncm91cHM6IHN0cmluZ1tdOyBuYW1lOiBzdHJpbmd9W10gPSBbXTtcblxuXHQvLyBRdWVyeSBmcm9tIGNhY2hlXG5cdGZvciAoY29uc3QgdXNlciBvZiB1c2Vycykge1xuXHRcdC8vIENoZWNrIGlmIHVzZXIgZ3JvdXAgaW5mbyBpcyBjYWNoZWQgaW4gTG9jYWxTdG9yYWdlXG5cdFx0Ly8gSWYgY2FjaGVkLCBnZXQgdGhlbSBmcm9tIExvY2FsU3RvcmFnZVxuXHRcdGlmIChtdy5zdG9yYWdlLmdldE9iamVjdChDQUNIRV9LRVlfUFJFRklYICsgdXNlcikpIHtcblx0XHRcdGxldCBncm91cHMgPSBtdy5zdG9yYWdlLmdldE9iamVjdChDQUNIRV9LRVlfUFJFRklYICsgdXNlcikgYXMgc3RyaW5nW107XG5cdFx0XHQvLyBSZW1vdmUgJyonIGZyb20gZ3JvdXBzXG5cdFx0XHRncm91cHMgPSBncm91cHMuZmlsdGVyKChlbGVtZW50KSA9PiB7XG5cdFx0XHRcdHJldHVybiBlbGVtZW50ICE9PSAnKic7XG5cdFx0XHR9KTtcblx0XHRcdC8vIFN0b3JlIGludG8gYXJyYXlcblx0XHRcdGNhY2hlZFF1ZXJ5VXNlcnNbY2FjaGVkUXVlcnlVc2Vycy5sZW5ndGhdID0ge25hbWU6IHVzZXIsIGdyb3Vwc307XG5cdFx0fVxuXHR9XG5cblx0Ly8gUXVlcnkgZnJvbSB3ZWJcblx0Y29uc3QgdXN1c2VycyA9IHVzZXJzLmZpbHRlcigodikgPT4ge1xuXHRcdC8vIFJlbW92ZSB1c2VyIHRoYXQgaGF2ZSBjYWNoZWQgdXNlciBncm91cHMgbG9jYWxseVxuXHRcdHJldHVybiAhbXcuc3RvcmFnZS5nZXRPYmplY3QoQ0FDSEVfS0VZX1BSRUZJWCArIHYpO1xuXHR9KTtcblxuXHQvLyBRdWVyeSBwYXJhbXNcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVVzZXJzUGFyYW1zID0ge1xuXHRcdHVzdXNlcnMsXG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRsaXN0OiAndXNlcnMnLFxuXHRcdHVzcHJvcDogJ2dyb3VwcycsXG5cdFx0c21heGFnZTogNjAwLFxuXHRcdG1heGFnZTogNjAwLFxuXHR9O1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHQvLyBEZS1jb25zdHJ1Y3QgdGhlIHJlc3BvbnNlIG9iamVjdFxuXHRjb25zdCBxdWVyeSA9IHJlc3BvbnNlWydxdWVyeSddIGFzIHtcblx0XHR1c2Vyczoge2dyb3Vwczogc3RyaW5nW107IG5hbWU6IHN0cmluZ31bXTtcblx0fTtcblx0Y29uc3QgcXVlcnlVc2VycyA9IFsuLi4ocXVlcnk/LnVzZXJzID8/IFtdKSwgLi4uY2FjaGVkUXVlcnlVc2Vyc107XG5cblx0Zm9yIChjb25zdCB1c2VyIG9mIHF1ZXJ5VXNlcnMpIHtcblx0XHRpZiAodXNlcj8uZ3JvdXBzICYmIHVzZXI/Lm5hbWUpIHtcblx0XHRcdGxldCB7Z3JvdXBzfSA9IHVzZXI7XG5cdFx0XHQvLyBSZW1vdmUgJyonIGZyb20gZ3JvdXBzXG5cdFx0XHRncm91cHMgPSBncm91cHMuZmlsdGVyKChlbGVtZW50KSA9PiB7XG5cdFx0XHRcdHJldHVybiBlbGVtZW50ICE9PSAnKic7XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gQ2FjaGUgZm9yIDEgaG91clxuXHRcdFx0bXcuc3RvcmFnZS5zZXRPYmplY3QoQ0FDSEVfS0VZX1BSRUZJWCArIHVzZXIubmFtZSwgZ3JvdXBzLCA2MCAqIDYwKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4ge3F1ZXJ5OiB7dXNlcnM6IHF1ZXJ5VXNlcnN9fTtcbn1cblxuZXhwb3J0IHt0eXBlIFF1ZXJ5VXNlckdyb3VwcywgcXVlcnlVc2VyR3JvdXBzfTtcbiIsICJ0eXBlIFNjcm9sbFRvcCA9IChcblx0dGFyZ2V0SGVpZ2h0OiBudW1iZXIgfCBzdHJpbmcsXG5cdGVmZmVjdHNPcHRpb25zT3JEdXJhdGlvbj86IEpRdWVyeS5FZmZlY3RzT3B0aW9uczxIVE1MRWxlbWVudD4gfCBudW1iZXIgfCAnZmFzdCcgfCAnc2xvdydcbikgPT4gdm9pZDtcblxuY29uc3Qgc2Nyb2xsVG9wOiBTY3JvbGxUb3AgPSAodGFyZ2V0SGVpZ2h0LCBlZmZlY3RzT3B0aW9uc09yRHVyYXRpb24gPSB7fSkgPT4ge1xuXHRjb25zdCBvcHRpb25zOiBKUXVlcnkuRWZmZWN0c09wdGlvbnM8SFRNTEVsZW1lbnQ+ID1cblx0XHR0eXBlb2YgZWZmZWN0c09wdGlvbnNPckR1cmF0aW9uID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgZWZmZWN0c09wdGlvbnNPckR1cmF0aW9uID09PSAnc3RyaW5nJ1xuXHRcdFx0PyB7XG5cdFx0XHRcdFx0ZHVyYXRpb246IGVmZmVjdHNPcHRpb25zT3JEdXJhdGlvbixcblx0XHRcdFx0XHRlYXNpbmc6ICdsaW5lYXInLFxuXHRcdFx0XHR9XG5cdFx0XHQ6IHtcblx0XHRcdFx0XHRkdXJhdGlvbjogJ3Nsb3cnLFxuXHRcdFx0XHRcdGVhc2luZzogJ2xpbmVhcicsXG5cdFx0XHRcdFx0Li4uZWZmZWN0c09wdGlvbnNPckR1cmF0aW9uLFxuXHRcdFx0XHR9O1xuXHQkKGRvY3VtZW50KS5maW5kKCdodG1sLCBib2R5JykuYW5pbWF0ZShcblx0XHR7XG5cdFx0XHRzY3JvbGxUb3A6IHRhcmdldEhlaWdodCxcblx0XHR9LFxuXHRcdG9wdGlvbnNcblx0KTtcbn07XG5cbmV4cG9ydCB7dHlwZSBTY3JvbGxUb3AsIHNjcm9sbFRvcH07XG4iLCAiaW1wb3J0IHtnZW5lcmF0ZUFycmF5fSBmcm9tICcuL2dlbmVyYXRlQXJyYXknO1xuXG50eXBlIFVzZXJJc0luR3JvdXAgPSB0eXBlb2YgdXNlcklzSW5Hcm91cDtcblxuY29uc3QgdXNlcklzSW5Hcm91cCA9IChncm91cHM6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiB7XG5cdGNvbnN0IHt3Z1VzZXJHcm91cHMsIHdnR2xvYmFsR3JvdXBzfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0cmV0dXJuIFsuLi4od2dVc2VyR3JvdXBzIHx8IFtdKSwgLi4uKCh3Z0dsb2JhbEdyb3VwcyBhcyBzdHJpbmdbXSkgfHwgW10pXS5zb21lKChlbGVtZW50OiBzdHJpbmcpOiBib29sZWFuID0+IHtcblx0XHRyZXR1cm4gZ2VuZXJhdGVBcnJheShncm91cHMpLmluY2x1ZGVzKGVsZW1lbnQpO1xuXHR9KTtcbn07XG5cbmV4cG9ydCB7dHlwZSBVc2VySXNJbkdyb3VwLCB1c2VySXNJbkdyb3VwfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxlQUFBLENBQUE7QUFBQUMsU0FBQUQsY0FBQTtFQUFBRSxPQUFBQSxNQUFBQTtFQUFBQyw2QkFBQUEsTUFBQUE7RUFBQUMsb0NBQUFBLE1BQUFBO0VBQUFDLHFCQUFBQSxNQUFBQTtFQUFBQyxtQkFBQUEsTUFBQUE7RUFBQUMsT0FBQUEsTUFBQUE7RUFBQUMsY0FBQUEsTUFBQUE7RUFBQUMsZUFBQUEsTUFBQUE7RUFBQUMsU0FBQUEsTUFBQUE7RUFBQUMsV0FBQUEsTUFBQUE7RUFBQUMsc0JBQUFBLE1BQUFBO0VBQUFDLHVCQUFBQSxNQUFBQTtFQUFBQyxpQkFBQUEsTUFBQUE7RUFBQUMsV0FBQUEsTUFBQUE7RUFBQUMsYUFBQUEsTUFBQUE7RUFBQUMsZUFBQUEsTUFBQUE7QUFBQSxDQUFBO0FBQUFDLE9BQUFDLFVBQUFDLGFBQUFwQixZQUFBOztBQzhDQSxJQUFNRyw4QkFBMkRBLENBQUM7RUFBQ2tCO0VBQVFDO0VBQU1DO0VBQVVDLFVBQVUsQ0FBQztBQUFDLE1BQU07QUFDNUdILFNBQU9JLGlCQUFpQkgsTUFBTUMsVUFBZ0RDLE9BQU87QUFDckYsU0FBTztJQUNORSxRQUFRQSxNQUFZO0FBQ25CTCxhQUFPTSxvQkFBb0JMLE1B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QUFBQSxTQUFBLFVBQUFBLEtBQU1tSCxVQUFVbkgsU0FBQSxRQUFBQSxTQUFBLFVBQUFBLEtBQU1pSSxNQUFNO0FBQy9CLFlBQUk7VUFBQ2Q7UUFBTSxJQUFJbkg7QUFFZm1ILGlCQUFTQSxPQUFPRyxPQUFRQyxhQUFZO0FBQ25DLGlCQUFPQSxZQUFZO1FBQ3BCLENBQUM7QUFHRHBKLFdBQUdpSixRQUFRWSxVQUFVZCxtQkFBbUJsSCxLQUFLaUksTUFBTWQsUUFBUSxLQUFLLEVBQUU7TUFDbkU7SUFDRDtBQUVBLFdBQU87TUFBQ1MsT0FBTztRQUFDUSxPQUFPUztNQUFVO0lBQUM7RUFDbkMsQ0FBQTtBQUFBLFNBQUFWLGlCQUFBNUksTUFBQSxNQUFBQyxTQUFBO0FBQUE7QUM1REEsSUFBTXJELFlBQXVCQSxDQUFDNk0sY0FBY0MsMkJBQTJCLENBQUMsTUFBTTtBQUM3RSxRQUFNck0sVUFDTCxPQUFPcU0sNkJBQTZCLFlBQVksT0FBT0EsNkJBQTZCLFdBQ2pGO0lBQ0FDLFVBQVVEO0lBQ1ZFLFFBQVE7RUFDVCxJQUNDO0lBQ0FELFVBQVU7SUFDVkMsUUFBUTtJQUNSLEdBQUdGO0VBQ0o7QUFDSDlHLElBQUVKLFFBQVEsRUFBRXFILEtBQUssWUFBWSxFQUFFQyxRQUM5QjtJQUNDbE4sV0FBVzZNO0VBQ1osR0FDQXBNLE9BQ0Q7QUFDRDs7QUNuQkEsSUFBTVAsZ0JBQWlCOEssWUFBOEI7QUFDcEQsUUFBTTtJQUFDbUM7SUFBY0M7RUFBYyxJQUFJcEwsR0FBR3FMLE9BQU92SixJQUFJO0FBQ3JELFNBQU8sQ0FBQyxHQUFJcUosZ0JBQWdCLENBQUEsR0FBSyxHQUFLQyxrQkFBK0IsQ0FBQSxDQUFHLEVBQUVFLEtBQU1sQyxhQUE2QjtBQUM1RyxXQUFPMUwsY0FBY3NMLE1BQU0sRUFBRTlKLFNBQVNrSyxPQUFPO0VBQzlDLENBQUM7QUFDRjsiLAogICJuYW1lcyI6IFsiVXRpbF9leHBvcnRzIiwgIl9fZXhwb3J0IiwgIk13VXJpIiwgImFkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3ZlciIsICJjaGFuZ2VPcGFjaXR5V2hlbk1vdXNlRW50ZXJPckxlYXZlIiwgImNoZWNrQTExeUNvbmZpcm1LZXkiLCAiY2hlY2tEZXBlbmRlbmNpZXMiLCAiZGVsYXkiLCAiZmluZFZhcmlhbnRzIiwgImdlbmVyYXRlQXJyYXkiLCAiZ2V0Qm9keSIsICJpbml0TXdBcGkiLCAib291aUNvbmZpcm1XaXRoU3R5bGUiLCAicXVlcnlHbG9iYWxVc2VyR3JvdXBzIiwgInF1ZXJ5VXNlckdyb3VwcyIsICJzY3JvbGxUb3AiLCAidW5pcXVlQXJyYXkiLCAidXNlcklzSW5Hcm91cCIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJfX3RvQ29tbW9uSlMiLCAidGFyZ2V0IiwgInR5cGUiLCAibGlzdGVuZXIiLCAib3B0aW9ucyIsICJhZGRFdmVudExpc3RlbmVyIiwgInJlbW92ZSIsICJyZW1vdmVFdmVudExpc3RlbmVyIiwgImV2ZW50IiwgIm9wYWNpdHkiLCAiY3VycmVudFRhcmdldCIsICJzdHlsZSIsICJ0b1N0cmluZyIsICJpbmNsdWRlcyIsICJrZXkiLCAiYXJncyIsICJmbGF0TWFwIiwgImFyZyIsICJBcnJheSIsICJpc0FycmF5IiwgIk5vZGVMaXN0IiwgInVzZXJBZ2VudCIsICJhcGlVcmkiLCAiYXBpT3B0aW9ucyIsICJhamF4IiwgImhlYWRlcnMiLCAiY29uY2F0IiwgIm13IiwgIkZvcmVpZ25BcGkiLCAiQXBpIiwgInVuaXF1ZUFycmF5MiIsICJyZXN1bHQiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAiaXRlbSIsICJ2YWx1ZSIsICJsZW5ndGgiLCAiZXJyIiwgImUiLCAiZiIsICJfeCIsICJfeDIiLCAiX2NoZWNrRGVwZW5kZW5jaWVzIiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJnYWRnZXROYW1lcyIsICJvcHRpb24iLCAiYXBpIiwgImdhZGdldHMiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAiZ2FkZ2V0IiwgInVzZXIiLCAiZ2V0IiwgInBvc3RXaXRoRWRpdFRva2VuIiwgImFjdGlvbiIsICJjaGFuZ2UiLCAibG9hZGVyIiwgInVzaW5nIiwgIm1zIiwgIlByb21pc2UiLCAicmVzb2x2ZSIsICJzZXRUaW1lb3V0IiwgIl94MyIsICJfZmluZFZhcmlhbnRzIiwgInRleHQiLCAiVkFSSUFOVFMiLCAiYWxsVmFyaWFudHMiLCAicGFyYW1zIiwgImNvbnRlbnRtb2RlbCIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgInRpdGxlIiwgIl9pMiIsICJfVkFSSUFOVFMiLCAiX3Jlc3BvbnNlJHF1ZXJ5IiwgInZhcmlhbnQiLCAidXNlbGFuZyIsICJyZXNwb25zZSIsICJwb3N0IiwgImRpc3BsYXl0aXRsZSIsICJ2YXJpYW50RWxlbWVudCIsICJkb2N1bWVudCIsICJjcmVhdGVFbGVtZW50IiwgImlubmVySFRNTCIsICJ0ZXh0Q29udGVudCIsICIkIiwgInJlYWR5IiwgInRoZW4iLCAiJGJvZHkiLCAiVVJMIiwgImNvbnN0cnVjdG9yIiwgInVybCIsICJiYXNlIiwgImxvY2F0aW9uIiwgIm9yaWdpbiIsICJleHRlbmQiLCAib2JqZWN0IiwgIl9pIiwgIl9PYmplY3QkZW50cmllcyIsICJPYmplY3QiLCAiZW50cmllcyIsICJzZWFyY2hQYXJhbXMiLCAic2V0IiwgImdldFJlbGF0aXZlUGF0aCIsICJwYXRobmFtZSIsICJzZWFyY2giLCAiaGFzaCIsICJpbXBvcnRfdnVlMyIsICJyZXF1aXJlIiwgImltcG9ydF9jb2RleCIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAiQ29uZmlybSIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJDYW5jZWwiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAicHJvcHMiLCAiX19wcm9wcyIsICJlbWl0IiwgIl9fZW1pdCIsICJjbG9zZSIsICJjb25maXJtIiwgIm9uQ29uZmlybSIsICJjYW5jZWwiLCAib25DYW5jZWwiLCAiaGFuZGxlT3BlbkNoYW5nZSIsICJvcGVuIiwgImltcG9ydF92dWUyIiwgInJlbmRlciIsICJfY3R4IiwgIl9jYWNoZSIsICIkcHJvcHMiLCAiJHNldHVwIiwgIiRkYXRhIiwgIiRvcHRpb25zIiwgIm9wZW5CbG9jayIsICJjcmVhdGVCbG9jayIsICJtZXNzYWdlIiwgImxhYmVsIiwgImFjdGlvblR5cGUiLCAib25QcmltYXJ5IiwgIm9uRGVmYXVsdCIsICJPb3VpQ29uZmlybVdpdGhTdHlsZV9kZWZhdWx0IiwgIl9fZmlsZSIsICJfX3Njb3BlSWQiLCAiT291aUNvbmZpcm1XaXRoU3R5bGVfZGVmYXVsdDIiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJyb290IiwgImJvZHkiLCAiYXBwZW5kIiwgInNldHRsZWQiLCAic2V0dGxlIiwgImFwcCIsICJ1bm1vdW50IiwgImNyZWF0ZUFwcCIsICJtb3VudCIsICJfeDQiLCAiX3g1IiwgIl9xdWVyeUdsb2JhbFVzZXJHcm91cHMiLCAiZ3VpdXNlciIsICJDQUNIRV9LRVlfUFJFRklYIiwgImdyb3VwcyIsICJzdG9yYWdlIiwgImdldE9iamVjdCIsICJmaWx0ZXIiLCAiZWxlbWVudCIsICJtZXRhIiwgImd1aXByb3AiLCAic21heGFnZSIsICJtYXhhZ2UiLCAicXVlcnkiLCAiZ2xvYmFsdXNlcmluZm8iLCAiX3F1ZXJ5JGdsb2JhbHVzZXJpbmZvIiwgIl9xdWVyeSRnbG9iYWx1c2VyaW5mbzIiLCAic2V0T2JqZWN0IiwgIm5hbWUiLCAiX3g2IiwgIl9xdWVyeVVzZXJHcm91cHMiLCAidXNlcnMiLCAiX3F1ZXJ5JHVzZXJzIiwgImNhY2hlZFF1ZXJ5VXNlcnMiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAidXN1c2VycyIsICJ2IiwgImxpc3QiLCAidXNwcm9wIiwgInF1ZXJ5VXNlcnMiLCAiX2kzIiwgIl9xdWVyeVVzZXJzIiwgInRhcmdldEhlaWdodCIsICJlZmZlY3RzT3B0aW9uc09yRHVyYXRpb24iLCAiZHVyYXRpb24iLCAiZWFzaW5nIiwgImZpbmQiLCAiYW5pbWF0ZSIsICJ3Z1VzZXJHcm91cHMiLCAid2dHbG9iYWxHcm91cHMiLCAiY29uZmlnIiwgInNvbWUiXQp9Cg==

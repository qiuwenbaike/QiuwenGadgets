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
  constructor(url, base = "".concat(location.protocol, "//").concat(location.host)) {
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1V0aWwvVXRpbC50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2FkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlci50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2NoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmUudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9jaGVja0ExMXlDb25maXJtS2V5LnRzIiwgInNyYy9VdGlsL21vZHVsZXMvZ2VuZXJhdGVBcnJheS50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2luaXRNd0FwaS50cyIsICJzcmMvVXRpbC9tb2R1bGVzL3VuaXF1ZUFycmF5LnRzIiwgInNyYy9VdGlsL21vZHVsZXMvY2hlY2tEZXBlbmRlbmNpZXMudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9kZWxheS50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2ZpbmRWYXJpYW50cy50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2dldEJvZHkudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9td1VyaS50cyIsICJzcmMvVXRpbC9tb2R1bGVzL29vdWlDb25maXJtV2l0aFN0eWxlLnRzIiwgImRpc3QvVXRpbC9zcmMvVXRpbC9tb2R1bGVzL09vdWlDb25maXJtV2l0aFN0eWxlLnZ1ZSIsICJzcmMvVXRpbC9tb2R1bGVzL3V0aWwvaTE4bi50cyIsICJzZmMtdGVtcGxhdGU6RDpcXEdpdFJlcG9zaXRvcnlcXFFpdXdlbkdhZGdldHNcXHNyY1xcVXRpbFxcbW9kdWxlc1xcT291aUNvbmZpcm1XaXRoU3R5bGUudnVlP3R5cGU9dGVtcGxhdGUiLCAic3JjL1V0aWwvbW9kdWxlcy9Pb3VpQ29uZmlybVdpdGhTdHlsZS52dWUiLCAic3JjL1V0aWwvbW9kdWxlcy9xdWVyeUdsb2JhbFVzZXJHcm91cHMudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9xdWVyeVVzZXJHcm91cHMudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9zY3JvbGxUb3AudHMiLCAic3JjL1V0aWwvbW9kdWxlcy91c2VySXNJbkdyb3VwLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQge2FkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcn0gZnJvbSAnLi9tb2R1bGVzL2FkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcic7XG5leHBvcnQge2NoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmV9IGZyb20gJy4vbW9kdWxlcy9jaGFuZ2VPcGFjaXR5V2hlbk1vdXNlRW50ZXJPckxlYXZlJztcbmV4cG9ydCB7Y2hlY2tBMTF5Q29uZmlybUtleX0gZnJvbSAnLi9tb2R1bGVzL2NoZWNrQTExeUNvbmZpcm1LZXknO1xuZXhwb3J0IHtjaGVja0RlcGVuZGVuY2llc30gZnJvbSAnLi9tb2R1bGVzL2NoZWNrRGVwZW5kZW5jaWVzJztcbmV4cG9ydCB7ZGVsYXl9IGZyb20gJy4vbW9kdWxlcy9kZWxheSc7XG5leHBvcnQge2ZpbmRWYXJpYW50c30gZnJvbSAnLi9tb2R1bGVzL2ZpbmRWYXJpYW50cyc7XG5leHBvcnQge2dlbmVyYXRlQXJyYXl9IGZyb20gJy4vbW9kdWxlcy9nZW5lcmF0ZUFycmF5JztcbmV4cG9ydCB7Z2V0Qm9keX0gZnJvbSAnLi9tb2R1bGVzL2dldEJvZHknO1xuZXhwb3J0IHtpbml0TXdBcGl9IGZyb20gJy4vbW9kdWxlcy9pbml0TXdBcGknO1xuZXhwb3J0IHtNd1VyaX0gZnJvbSAnLi9tb2R1bGVzL213VXJpJztcbmV4cG9ydCB7b291aUNvbmZpcm1XaXRoU3R5bGV9IGZyb20gJy4vbW9kdWxlcy9vb3VpQ29uZmlybVdpdGhTdHlsZSc7XG5leHBvcnQge3F1ZXJ5R2xvYmFsVXNlckdyb3Vwc30gZnJvbSAnLi9tb2R1bGVzL3F1ZXJ5R2xvYmFsVXNlckdyb3Vwcyc7XG5leHBvcnQge3F1ZXJ5VXNlckdyb3Vwc30gZnJvbSAnLi9tb2R1bGVzL3F1ZXJ5VXNlckdyb3Vwcyc7XG5leHBvcnQge3Njcm9sbFRvcH0gZnJvbSAnLi9tb2R1bGVzL3Njcm9sbFRvcCc7XG5leHBvcnQge3VzZXJJc0luR3JvdXB9IGZyb20gJy4vbW9kdWxlcy91c2VySXNJbkdyb3VwJztcbmV4cG9ydCB7dW5pcXVlQXJyYXl9IGZyb20gJy4vbW9kdWxlcy91bmlxdWVBcnJheSc7XG4iLCAidHlwZSBBZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXIgPSA8XG5cdFRhcmdldCBleHRlbmRzIERvY3VtZW50IHwgSFRNTEVsZW1lbnQgfCBFbGVtZW50IHwgTWVkaWFRdWVyeUxpc3QgfCBXaW5kb3csXG5cdFR5cGUgZXh0ZW5kcyAoVGFyZ2V0IGV4dGVuZHMgRG9jdW1lbnRcblx0XHQ/IGtleW9mIERvY3VtZW50RXZlbnRNYXBcblx0XHQ6IFRhcmdldCBleHRlbmRzIEhUTUxFbGVtZW50XG5cdFx0XHQ/IGtleW9mIEhUTUxFbGVtZW50RXZlbnRNYXBcblx0XHRcdDogVGFyZ2V0IGV4dGVuZHMgTWVkaWFRdWVyeUxpc3Rcblx0XHRcdFx0PyBrZXlvZiBNZWRpYVF1ZXJ5TGlzdEV2ZW50TWFwXG5cdFx0XHRcdDogVGFyZ2V0IGV4dGVuZHMgV2luZG93XG5cdFx0XHRcdFx0PyBrZXlvZiBXaW5kb3dFdmVudE1hcFxuXHRcdFx0XHRcdDoga2V5b2YgR2xvYmFsRXZlbnRIYW5kbGVyc0V2ZW50TWFwKSxcblx0TGlzdGVuZXIgZXh0ZW5kcyAoVGFyZ2V0IGV4dGVuZHMgRG9jdW1lbnRcblx0XHQ/IFR5cGUgZXh0ZW5kcyBrZXlvZiBEb2N1bWVudEV2ZW50TWFwXG5cdFx0XHQ/ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBEb2N1bWVudEV2ZW50TWFwW1R5cGVdKSA9PiB1bmtub3duXG5cdFx0XHQ6ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBFdmVudCkgPT4gdW5rbm93blxuXHRcdDogVGFyZ2V0IGV4dGVuZHMgSFRNTEVsZW1lbnRcblx0XHRcdD8gVHlwZSBleHRlbmRzIGtleW9mIEhUTUxFbGVtZW50RXZlbnRNYXBcblx0XHRcdFx0PyAodGhpczogVGFyZ2V0LCBldmVudDogSFRNTEVsZW1lbnRFdmVudE1hcFtUeXBlXSkgPT4gdW5rbm93blxuXHRcdFx0XHQ6ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBFdmVudCkgPT4gdW5rbm93blxuXHRcdFx0OiBUYXJnZXQgZXh0ZW5kcyBFbGVtZW50XG5cdFx0XHRcdD8gVHlwZSBleHRlbmRzIGtleW9mIEVsZW1lbnRFdmVudE1hcFxuXHRcdFx0XHRcdD8gKHRoaXM6IFRhcmdldCwgZXZlbnQ6IEVsZW1lbnRFdmVudE1hcFtUeXBlXSkgPT4gdW5rbm93blxuXHRcdFx0XHRcdDogKHRoaXM6IFRhcmdldCwgZXZlbnQ6IEV2ZW50KSA9PiB1bmtub3duXG5cdFx0XHRcdDogVGFyZ2V0IGV4dGVuZHMgTWVkaWFRdWVyeUxpc3Rcblx0XHRcdFx0XHQ/IFR5cGUgZXh0ZW5kcyBrZXlvZiBNZWRpYVF1ZXJ5TGlzdEV2ZW50TWFwXG5cdFx0XHRcdFx0XHQ/ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBNZWRpYVF1ZXJ5TGlzdEV2ZW50TWFwW1R5cGVdKSA9PiB1bmtub3duXG5cdFx0XHRcdFx0XHQ6ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBFdmVudCkgPT4gdW5rbm93blxuXHRcdFx0XHRcdDogVGFyZ2V0IGV4dGVuZHMgV2luZG93XG5cdFx0XHRcdFx0XHQ/IFR5cGUgZXh0ZW5kcyBrZXlvZiBXaW5kb3dFdmVudE1hcFxuXHRcdFx0XHRcdFx0XHQ/ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBXaW5kb3dFdmVudE1hcFtUeXBlXSkgPT4gdW5rbm93blxuXHRcdFx0XHRcdFx0XHQ6ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBFdmVudCkgPT4gdW5rbm93blxuXHRcdFx0XHRcdFx0OiAodGhpczogVGFyZ2V0LCBldmVudDogRXZlbnQpID0+IHVua25vd24pLFxuPih7XG5cdHRhcmdldCxcblx0dHlwZSxcblx0bGlzdGVuZXIsXG5cdG9wdGlvbnMsXG59OiB7XG5cdHRhcmdldDogVGFyZ2V0O1xuXHR0eXBlOiBUeXBlO1xuXHRsaXN0ZW5lcjogTGlzdGVuZXI7XG5cdG9wdGlvbnM/OiBBZGRFdmVudExpc3RlbmVyT3B0aW9ucztcbn0pID0+IHtcblx0cmVtb3ZlOiAoKSA9PiB2b2lkO1xufTtcblxuY29uc3QgYWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyOiBBZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXIgPSAoe3RhcmdldCwgdHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMgPSB7fX0pID0+IHtcblx0dGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIgYXMgRXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdCwgb3B0aW9ucyk7XG5cdHJldHVybiB7XG5cdFx0cmVtb3ZlOiAoKTogdm9pZCA9PiB7XG5cdFx0XHR0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciBhcyBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0LCBvcHRpb25zKTtcblx0XHR9LFxuXHR9O1xufTtcblxuZXhwb3J0IHt0eXBlIEFkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3ZlciwgYWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyfTtcbiIsICJ0eXBlIENoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmUgPSAoZXZlbnQ6IE1vdXNlRXZlbnQgfCBKUXVlcnkuVHJpZ2dlcmVkRXZlbnQsIG9wYWNpdHk/OiBudW1iZXIpID0+IHZvaWQ7XG5cbmNvbnN0IGNoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmU6IENoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmUgPSAoZXZlbnQsIG9wYWNpdHkgPSAwLjcpID0+IHtcblx0KGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLm9wYWNpdHkgPSBldmVudC50eXBlID09PSAnbW91c2VlbnRlcicgPyAnMScgOiBvcGFjaXR5LnRvU3RyaW5nKCk7XG59O1xuXG5leHBvcnQge3R5cGUgQ2hhbmdlT3BhY2l0eVdoZW5Nb3VzZUVudGVyT3JMZWF2ZSwgY2hhbmdlT3BhY2l0eVdoZW5Nb3VzZUVudGVyT3JMZWF2ZX07XG4iLCAidHlwZSBDaGVja0ExMXlDb25maXJtS2V5ID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50IHwgTW91c2VFdmVudCB8IEpRdWVyeS5DbGlja0V2ZW50IHwgSlF1ZXJ5LktleURvd25FdmVudCkgPT4gYm9vbGVhbjtcblxuY29uc3QgY2hlY2tBMTF5Q29uZmlybUtleTogQ2hlY2tBMTF5Q29uZmlybUtleSA9IChldmVudCk6IGJvb2xlYW4gPT4ge1xuXHRpZiAoWydjbGljaycsICdrZXlkb3duJ10uaW5jbHVkZXMoZXZlbnQudHlwZSkpIHtcblx0XHRpZiAoZXZlbnQudHlwZSA9PT0gJ2tleWRvd24nKSB7XG5cdFx0XHRyZXR1cm4gWydFbnRlcicsICcgJ10uaW5jbHVkZXMoKGV2ZW50IGFzIEtleWJvYXJkRXZlbnQpLmtleSk7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCB7dHlwZSBDaGVja0ExMXlDb25maXJtS2V5LCBjaGVja0ExMXlDb25maXJtS2V5fTtcbiIsICJ0eXBlIEdlbmVyYXRlQXJyYXkgPSB0eXBlb2YgZ2VuZXJhdGVBcnJheTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVBcnJheTxUIGV4dGVuZHMgW10+KC4uLmFyZ3M6IChUIHwgVFtdKVtdKTogVFtdO1xuZnVuY3Rpb24gZ2VuZXJhdGVBcnJheTxUIGV4dGVuZHMgTm9kZUxpc3Q+KC4uLmFyZ3M6IChUIHwgVFtdKVtdKTogTm9kZVtdO1xuZnVuY3Rpb24gZ2VuZXJhdGVBcnJheTxUID0gdW5rbm93bj4oLi4uYXJnczogKFQgfCBUW10pW10pOiBUW107XG5mdW5jdGlvbiBnZW5lcmF0ZUFycmF5PFQ+KC4uLmFyZ3M6IChUIHwgVFtdKVtdKTogVFtdIHtcblx0cmV0dXJuIGFyZ3MuZmxhdE1hcCgoYXJnKSA9PiB7XG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0cmV0dXJuIGFyZztcblx0XHR9XG5cblx0XHRpZiAoYXJnIGluc3RhbmNlb2YgTm9kZUxpc3QpIHtcblx0XHRcdHJldHVybiBbLi4uYXJnXSBhcyBUO1xuXHRcdH1cblxuXHRcdHJldHVybiBbYXJnXTtcblx0fSk7XG59XG5cbmV4cG9ydCB7dHlwZSBHZW5lcmF0ZUFycmF5LCBnZW5lcmF0ZUFycmF5fTtcbiIsICJ0eXBlIEluaXRNd0FwaSA9IHR5cGVvZiBpbml0TXdBcGk7XG5cbi8qKlxuICogQHJlcXVpcmVzIG1lZGlhd2lraS5hcGlcbiAqIEBwYXJhbSB7c3RyaW5nfSBbdXNlckFnZW50XVxuICogQHBhcmFtIHtzdHJpbmd9IFthcGlVcmldXG4gKiBAcmV0dXJuIHttdy5BcGl8bXcuRm9yZWlnbkFwaX1cbiAqL1xuZnVuY3Rpb24gaW5pdE13QXBpKHVzZXJBZ2VudD86IHN0cmluZyk6IG13LkFwaTtcbmZ1bmN0aW9uIGluaXRNd0FwaSh1c2VyQWdlbnQ6IHN0cmluZywgYXBpVXJpOiBzdHJpbmcpOiBtdy5Gb3JlaWduQXBpO1xuZnVuY3Rpb24gaW5pdE13QXBpKHVzZXJBZ2VudD86IHN0cmluZywgYXBpVXJpPzogc3RyaW5nKTogbXcuQXBpIHwgbXcuRm9yZWlnbkFwaSB7XG5cdGNvbnN0IGFwaU9wdGlvbnMgPSB7XG5cdFx0YWpheDoge1xuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHQnQXBpLVVzZXItQWdlbnQnOiB1c2VyQWdlbnQgPyBgUWl1d2VuLzEuMSAoJHt1c2VyQWdlbnR9KWAgOiAnUWl1d2VuLzEuMScsXG5cdFx0XHR9LFxuXHRcdH0sXG5cdH07XG5cblx0aWYgKGFwaVVyaSkge1xuXHRcdHJldHVybiBuZXcgbXcuRm9yZWlnbkFwaShhcGlVcmksIGFwaU9wdGlvbnMpO1xuXHR9XG5cblx0cmV0dXJuIG5ldyBtdy5BcGkoYXBpT3B0aW9ucyk7XG59XG5cbmV4cG9ydCB7dHlwZSBJbml0TXdBcGksIGluaXRNd0FwaX07XG4iLCAidHlwZSBVbmlxdWVBcnJheSA9IHR5cGVvZiB1bmlxdWVBcnJheTtcblxuY29uc3QgdW5pcXVlQXJyYXkgPSBmdW5jdGlvbiB1bmlxdWVBcnJheTxUPihhcmdzOiBUW10pOiBUW10ge1xuXHQvKiohXG5cdCAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBDQy1CWS1TQS00LjBcblx0ICpcblx0ICogQHNvdXJjZSB7QGxpbmsgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvOTIyOTY0NS9yZW1vdmUtZHVwbGljYXRlLXZhbHVlcy1mcm9tLWpzLWFycmF5LzkyMjk4Mn1cblx0ICogQGxpY2Vuc2UgQ0MtQlktU0EtNC4wXG5cdCAqL1xuXHRjb25zdCByZXN1bHQ6IHR5cGVvZiBhcmdzID0gW107XG5cdGZvciAoY29uc3QgaXRlbSBvZiBhcmdzKSB7XG5cdFx0aWYgKCFyZXN1bHQuaW5jbHVkZXMoaXRlbSkpIHtcblx0XHRcdHJlc3VsdFtyZXN1bHQubGVuZ3RoXSA9IGl0ZW07IC8vIFJlcGxhY2UgQXJyYXkjcHVzaCB0byBhdm9pZCBjb3JlLWpzIHBvbHlmaWxsaW5nXG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQge3R5cGUgVW5pcXVlQXJyYXksIHVuaXF1ZUFycmF5fTtcbiIsICJpbXBvcnQge2dlbmVyYXRlQXJyYXl9IGZyb20gJy4vZ2VuZXJhdGVBcnJheSc7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnLi9pbml0TXdBcGknO1xuaW1wb3J0IHt1bmlxdWVBcnJheX0gZnJvbSAnLi91bmlxdWVBcnJheSc7XG5cbnR5cGUgQm9vbGVhbiA9ICcwJyB8ICcxJyB8IDAgfCAxO1xudHlwZSBDaGVja0RlcGVuZGVuY2llcyA9IHR5cGVvZiBjaGVja0RlcGVuZGVuY2llcztcblxuZnVuY3Rpb24gY2hlY2tEZXBlbmRlbmNpZXMoZ2FkZ2V0TmFtZXM6IHN0cmluZyB8IHN0cmluZ1tdKTogUHJvbWlzZTx2b2lkPjtcbmZ1bmN0aW9uIGNoZWNrRGVwZW5kZW5jaWVzKGdhZGdldE5hbWVzOiBzdHJpbmcsIG9wdGlvbjogQm9vbGVhbik6IFByb21pc2U8dm9pZD47XG5hc3luYyBmdW5jdGlvbiBjaGVja0RlcGVuZGVuY2llcyhnYWRnZXROYW1lczogc3RyaW5nIHwgc3RyaW5nW10sIG9wdGlvbj86IEJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoJ1V0aWwtQ2hlY2tEZXBlbmRlbmNpZXMnKTtcblx0Y29uc3QgZ2FkZ2V0cyA9IHVuaXF1ZUFycmF5KGdlbmVyYXRlQXJyYXkoZ2FkZ2V0TmFtZXMpKTtcblx0b3B0aW9uIHx8PSAxO1xuXG5cdGZvciAoY29uc3QgZ2FkZ2V0IG9mIGdhZGdldHMpIHtcblx0XHRpZiAoXG5cdFx0XHQob3B0aW9uID09PSAnMCcgJiYgbXcudXNlci5vcHRpb25zLmdldChgZ2FkZ2V0LSR7Z2FkZ2V0fWApID09PSAnMScpIHx8XG5cdFx0XHQob3B0aW9uID09PSAnMScgJiYgbXcudXNlci5vcHRpb25zLmdldChgZ2FkZ2V0LSR7Z2FkZ2V0fWApID09PSAnMCcpXG5cdFx0KSB7XG5cdFx0XHRhd2FpdCBhcGkucG9zdFdpdGhFZGl0VG9rZW4oe1xuXHRcdFx0XHRhY3Rpb246ICdvcHRpb25zJyxcblx0XHRcdFx0Y2hhbmdlOiBgZ2FkZ2V0LSR7Z2FkZ2V0fT0ke29wdGlvbn1gLFxuXHRcdFx0fSBhcyBBcGlPcHRpb25zUGFyYW1zKTtcblx0XHRcdGF3YWl0IG13LmxvYWRlci51c2luZyhgZXh0LmdhZGdldC4ke2dhZGdldH1gKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IHt0eXBlIENoZWNrRGVwZW5kZW5jaWVzLCBjaGVja0RlcGVuZGVuY2llc307XG4iLCAidHlwZSBEZWxheSA9IChtczogbnVtYmVyKSA9PiBQcm9taXNlPHZvaWQ+O1xuXG5jb25zdCBkZWxheTogRGVsYXkgPSAobXMpID0+IHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlOiAoKSA9PiB2b2lkKTogdm9pZCA9PiB7XG5cdFx0c2V0VGltZW91dChyZXNvbHZlLCBtcyk7XG5cdH0pO1xufTtcblxuZXhwb3J0IHt0eXBlIERlbGF5LCBkZWxheX07XG4iLCAiaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJy4vaW5pdE13QXBpJztcbmltcG9ydCB7dW5pcXVlQXJyYXl9IGZyb20gJy4vdW5pcXVlQXJyYXknO1xuXG50eXBlIEZpbmRWYXJpYW50cyA9IHR5cGVvZiBmaW5kVmFyaWFudHM7XG5cbmFzeW5jIGZ1bmN0aW9uIGZpbmRWYXJpYW50cyh0ZXh0OiBzdHJpbmcpIHtcblx0Y29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoJ1V0aWwtRmluZFZhcmlhbnRzJyk7XG5cblx0Y29uc3QgVkFSSUFOVFMgPSBbJ3poLWhhbnMnLCAnemgtaGFudCcsICd6aC1jbicsICd6aC1oaycsICd6aC1tbycsICd6aC1zZycsICd6aC1teScsICd6aC10dyddO1xuXG5cdGNvbnN0IGFsbFZhcmlhbnRzOiBzdHJpbmdbXSA9IFtdO1xuXG5cdGNvbnN0IHBhcmFtczogQXBpUGFyc2VQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdGNvbnRlbnRtb2RlbDogJ3dpa2l0ZXh0Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cHJvcDogWydkaXNwbGF5dGl0bGUnXSxcblx0XHR0aXRsZTogJ3RlbXAnLFxuXHRcdHRleHQsXG5cdH07XG5cblx0Zm9yIChjb25zdCB2YXJpYW50IG9mIFZBUklBTlRTKSB7XG5cdFx0cGFyYW1zLnVzZWxhbmcgPSB2YXJpYW50O1xuXHRcdHBhcmFtcy52YXJpYW50ID0gdmFyaWFudDtcblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KHBhcmFtcyk7XG5cblx0XHRjb25zdCBkaXNwbGF5dGl0bGUgPSByZXNwb25zZT8uWydxdWVyeSddPy5kaXNwbGF5dGl0bGUgYXMgc3RyaW5nO1xuXHRcdGNvbnN0IHZhcmlhbnRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmFyaWFudCcpO1xuXHRcdHZhcmlhbnRFbGVtZW50LmlubmVySFRNTCA9IGRpc3BsYXl0aXRsZTtcblxuXHRcdGlmICh2YXJpYW50RWxlbWVudC50ZXh0Q29udGVudCkge1xuXHRcdFx0YWxsVmFyaWFudHNbYWxsVmFyaWFudHMubGVuZ3RoXSA9IHZhcmlhbnRFbGVtZW50LnRleHRDb250ZW50O1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB1bmlxdWVBcnJheShhbGxWYXJpYW50cyk7XG59XG5cbmV4cG9ydCB7dHlwZSBGaW5kVmFyaWFudHMsIGZpbmRWYXJpYW50c307XG4iLCAidHlwZSBHZXRCb2R5ID0gKCkgPT4gSlF1ZXJ5LlRoZW5hYmxlPEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+PjtcblxuY29uc3QgZ2V0Qm9keSA9ICgpID0+IHtcblx0cmV0dXJuICQucmVhZHkudGhlbigoKTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4gPT4ge1xuXHRcdGNvbnN0ICRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PiA9ICQoJ2JvZHknKTtcblxuXHRcdHJldHVybiAkYm9keTtcblx0fSk7XG59O1xuXG5leHBvcnQge3R5cGUgR2V0Qm9keSwgZ2V0Qm9keX07XG4iLCAidHlwZSBDbGFzc013VXJpID0gdHlwZW9mIE13VXJpO1xuXG5jbGFzcyBNd1VyaSBleHRlbmRzIFVSTCB7XG5cdGNvbnN0cnVjdG9yKHVybDogc3RyaW5nLCBiYXNlOiBzdHJpbmcgPSBgJHtsb2NhdGlvbi5wcm90b2NvbH0vLyR7bG9jYXRpb24uaG9zdH1gKSB7XG5cdFx0c3VwZXIodXJsLCBiYXNlKTtcblx0fVxuXHRwdWJsaWMgZXh0ZW5kKG9iamVjdDoge1trZXk6IHN0cmluZ106IHN0cmluZ30pOiB0aGlzIHtcblx0XHRmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhvYmplY3QpKSB7XG5cdFx0XHR0aGlzLnNlYXJjaFBhcmFtcy5zZXQoa2V5LCB2YWx1ZSk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdHB1YmxpYyBnZXRSZWxhdGl2ZVBhdGgoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5wYXRobmFtZSArIHRoaXMuc2VhcmNoICsgdGhpcy5oYXNoO1xuXHR9XG59XG5cbmV4cG9ydCB7dHlwZSBDbGFzc013VXJpLCBNd1VyaX07XG4iLCAiaW1wb3J0IHt0eXBlIEFwcCBhcyBWdWVBcHAsIGNyZWF0ZUFwcH0gZnJvbSAndnVlJztcbmltcG9ydCBPb3VpQ29uZmlybVdpdGhTdHlsZSBmcm9tICcuL09vdWlDb25maXJtV2l0aFN0eWxlLnZ1ZSc7XG5cbnR5cGUgT291aUNvbmZpcm1XaXRoU3R5bGUgPSAobWVzc2FnZTogc3RyaW5nKSA9PiBQcm9taXNlPGJvb2xlYW4+O1xuXG4vKipcbiAqIFNob3cgYSBjb25maXJtYXRpb24gZGlhbG9nIGJ1aWx0IHdpdGggQ29kZXggYW5kIFZ1ZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBkaXNwbGF5IGluIHRoZSBkaWFsb2dcbiAqIEByZXR1cm4ge1Byb21pc2U8Ym9vbGVhbj59IFJlc29sdmVzIHRvIGB0cnVlYCB3aGVuIHRoZSB1c2VyIGNvbmZpcm1zLCBgZmFsc2VgIHdoZW4gY2FuY2VsbGVkIG9yIGNsb3NlZFxuICovXG5jb25zdCBvb3VpQ29uZmlybVdpdGhTdHlsZTogT291aUNvbmZpcm1XaXRoU3R5bGUgPSAobWVzc2FnZSkgPT5cblx0bmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUpID0+IHtcblx0XHRhd2FpdCBtdy5sb2FkZXIudXNpbmcoWydAd2lraW1lZGlhL2NvZGV4JywgJ3Z1ZSddKTtcblxuXHRcdGNvbnN0IHJvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZChyb290KTtcblxuXHRcdGxldCBzZXR0bGVkID0gZmFsc2U7XG5cdFx0Y29uc3Qgc2V0dGxlID0gKHZhbHVlOiBib29sZWFuKTogdm9pZCA9PiB7XG5cdFx0XHRpZiAoc2V0dGxlZCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRzZXR0bGVkID0gdHJ1ZTtcblx0XHRcdGFwcC51bm1vdW50KCk7XG5cdFx0XHRyb290LnJlbW92ZSgpO1xuXHRcdFx0cmVzb2x2ZSh2YWx1ZSk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IGFwcDogVnVlQXBwPEVsZW1lbnQ+ID0gY3JlYXRlQXBwKE9vdWlDb25maXJtV2l0aFN0eWxlLCB7XG5cdFx0XHRvcGVuOiB0cnVlLFxuXHRcdFx0bWVzc2FnZSxcblx0XHRcdG9uQ29uZmlybTogKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRzZXR0bGUodHJ1ZSk7XG5cdFx0XHR9LFxuXHRcdFx0b25DYW5jZWw6ICgpOiB2b2lkID0+IHtcblx0XHRcdFx0c2V0dGxlKGZhbHNlKTtcblx0XHRcdH0sXG5cdFx0fSk7XG5cdFx0YXBwLm1vdW50KHJvb3QpO1xuXHR9KTtcblxuZXhwb3J0IHt0eXBlIE9vdWlDb25maXJtV2l0aFN0eWxlLCBvb3VpQ29uZmlybVdpdGhTdHlsZX07XG4iLCAiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7Q2R4RGlhbG9nfSBmcm9tICdAd2lraW1lZGlhL2NvZGV4JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi91dGlsL2kxOG4nO1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcblx0b3BlbjogYm9vbGVhbjtcblx0bWVzc2FnZTogc3RyaW5nO1xuXHRvbkNvbmZpcm06ICgpID0+IHZvaWQ7XG5cdG9uQ2FuY2VsOiAoKSA9PiB2b2lkO1xufT4oKTtcblxuY29uc3QgZW1pdCA9IGRlZmluZUVtaXRzPHtcblx0J3VwZGF0ZTpvcGVuJzogW3ZhbHVlOiBib29sZWFuXTtcbn0+KCk7XG5cbmNvbnN0IGNsb3NlID0gKCk6IHZvaWQgPT4ge1xuXHRlbWl0KCd1cGRhdGU6b3BlbicsIGZhbHNlKTtcbn07XG5cbmNvbnN0IGNvbmZpcm0gPSAoKTogdm9pZCA9PiB7XG5cdGNsb3NlKCk7XG5cdHByb3BzLm9uQ29uZmlybSgpO1xufTtcblxuY29uc3QgY2FuY2VsID0gKCk6IHZvaWQgPT4ge1xuXHRjbG9zZSgpO1xuXHRwcm9wcy5vbkNhbmNlbCgpO1xufTtcblxuY29uc3QgaGFuZGxlT3BlbkNoYW5nZSA9IChvcGVuOiBib29sZWFuKTogdm9pZCA9PiB7XG5cdGVtaXQoJ3VwZGF0ZTpvcGVuJywgb3Blbik7XG5cdGlmICghb3Blbikge1xuXHRcdHByb3BzLm9uQ2FuY2VsKCk7XG5cdH1cbn07XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuXHQ8Y2R4LWRpYWxvZ1xuXHRcdDpvcGVuPVwib3BlblwiXG5cdFx0OnRpdGxlPVwibWVzc2FnZVwiXG5cdFx0OnByaW1hcnktYWN0aW9uPVwie2xhYmVsOiBnZXRNZXNzYWdlKCdDb25maXJtJyksIGFjdGlvblR5cGU6ICdwcm9ncmVzc2l2ZSd9XCJcblx0XHQ6ZGVmYXVsdC1hY3Rpb249XCJ7bGFiZWw6IGdldE1lc3NhZ2UoJ0NhbmNlbCcpfVwiXG5cdFx0OnVzZS1jbG9zZS1idXR0b249XCJ0cnVlXCJcblx0XHRAdXBkYXRlOm9wZW49XCJoYW5kbGVPcGVuQ2hhbmdlXCJcblx0XHRAcHJpbWFyeT1cImNvbmZpcm1cIlxuXHRcdEBkZWZhdWx0PVwiY2FuY2VsXCJcblx0Lz5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cImxlc3NcIj5cbi5jZHgtZGlhbG9nIDpkZWVwKC5jZHgtZGlhbG9nX19mb290ZXIpIHtcblx0Ym9yZGVyLXRvcDogMC4xcmVtIHNvbGlkICMwNjQ1YWQ7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG4uY2R4LWRpYWxvZyA6ZGVlcCguY2R4LWRpYWxvZ19fdGl0bGUpIHtcblx0Zm9udC1zaXplOiAxLjJyZW07XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdGxpbmUtaGVpZ2h0OiAxLjg7XG5cdHBhZGRpbmc6IDAuNGVtIDA7XG59XG48L3N0eWxlPlxuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRDb25maXJtOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NvbmZpcm0nLFxuXHRcdFx0amE6ICfnorroqo0nLFxuXHRcdFx0J3poLWhhbnMnOiAn56Gu6K6kJyxcblx0XHRcdCd6aC1oYW50JzogJ+eiuuiqjScsXG5cdFx0fSksXG5cdFx0Q2FuY2VsOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NhbmNlbCcsXG5cdFx0XHRqYTogJ+OCreODo+ODs+OCu+ODqycsXG5cdFx0XHQnemgtaGFucyc6ICflj5bmtognLFxuXHRcdFx0J3poLWhhbnQnOiAn5Y+W5raIJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHsgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUJsb2NrIGFzIF9jcmVhdGVCbG9jayB9IGZyb20gXCJ2dWVcIlxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSwgJHByb3BzLCAkc2V0dXAsICRkYXRhLCAkb3B0aW9ucykge1xuICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKCRzZXR1cFtcIkNkeERpYWxvZ1wiXSwge1xuICAgIG9wZW46ICRwcm9wcy5vcGVuLFxuICAgIHRpdGxlOiAkcHJvcHMubWVzc2FnZSxcbiAgICBcInByaW1hcnktYWN0aW9uXCI6IHtsYWJlbDogJHNldHVwLmdldE1lc3NhZ2UoJ0NvbmZpcm0nKSwgYWN0aW9uVHlwZTogJ3Byb2dyZXNzaXZlJ30sXG4gICAgXCJkZWZhdWx0LWFjdGlvblwiOiB7bGFiZWw6ICRzZXR1cC5nZXRNZXNzYWdlKCdDYW5jZWwnKX0sXG4gICAgXCJ1c2UtY2xvc2UtYnV0dG9uXCI6IHRydWUsXG4gICAgXCJvblVwZGF0ZTpvcGVuXCI6ICRzZXR1cC5oYW5kbGVPcGVuQ2hhbmdlLFxuICAgIG9uUHJpbWFyeTogJHNldHVwLmNvbmZpcm0sXG4gICAgb25EZWZhdWx0OiAkc2V0dXAuY2FuY2VsXG4gIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIFtcIm9wZW5cIiwgXCJ0aXRsZVwiLCBcInByaW1hcnktYWN0aW9uXCIsIFwiZGVmYXVsdC1hY3Rpb25cIl0pKVxufSIsICJpbXBvcnQgc2NyaXB0IGZyb20gXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFV0aWxcXFxcbW9kdWxlc1xcXFxPb3VpQ29uZmlybVdpdGhTdHlsZS52dWU/dHlwZT1zY3JpcHRcIjtpbXBvcnQgXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFV0aWxcXFxcbW9kdWxlc1xcXFxPb3VpQ29uZmlybVdpdGhTdHlsZS52dWU/dHlwZT1zdHlsZSZpbmRleD0wXCI7aW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcVXRpbFxcXFxtb2R1bGVzXFxcXE9vdWlDb25maXJtV2l0aFN0eWxlLnZ1ZT90eXBlPXRlbXBsYXRlXCI7IHNjcmlwdC5yZW5kZXIgPSByZW5kZXI7c2NyaXB0Ll9fZmlsZSA9IFwic3JjXFxcXFV0aWxcXFxcbW9kdWxlc1xcXFxPb3VpQ29uZmlybVdpdGhTdHlsZS52dWVcIjtzY3JpcHQuX19zY29wZUlkID0gXCJkYXRhLXYtODZlYTg5YWRcIjtleHBvcnQgZGVmYXVsdCBzY3JpcHQ7IiwgImltcG9ydCB7aW5pdE13QXBpfSBmcm9tICcuL2luaXRNd0FwaSc7XG5cbnR5cGUgUXVlcnlHbG9iYWxVc2VyR3JvdXBzID0gdHlwZW9mIHF1ZXJ5R2xvYmFsVXNlckdyb3VwcztcblxuYXN5bmMgZnVuY3Rpb24gcXVlcnlHbG9iYWxVc2VyR3JvdXBzKGd1aXVzZXI6IHN0cmluZykge1xuXHRjb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaSgnVXRpbC1RdWVyeUdsb2JhbFVzZXJHcm91cHMnKTtcblxuXHRjb25zdCBDQUNIRV9LRVlfUFJFRklYID0gJ2V4dC5nYWRnZXQuVXRpbF9xdWVyeUdsb2JhbFVzZXJHcm91cHMtJztcblxuXHRsZXQgZ3JvdXBzOiBzdHJpbmdbXSA9IFtdO1xuXG5cdC8vIFF1ZXJ5IGZyb20gY2FjaGVcblx0Ly8gQ2hlY2sgaWYgdXNlciBncm91cCBpbmZvIGlzIGNhY2hlZCBpbiBMb2NhbFN0b3JhZ2Vcblx0Ly8gSWYgY2FjaGVkLCBnZXQgdGhlbSBmcm9tIExvY2FsU3RvcmFnZVxuXHRpZiAobXcuc3RvcmFnZS5nZXRPYmplY3QoQ0FDSEVfS0VZX1BSRUZJWCArIGd1aXVzZXIpKSB7XG5cdFx0Z3JvdXBzID0gbXcuc3RvcmFnZS5nZXRPYmplY3QoQ0FDSEVfS0VZX1BSRUZJWCArIGd1aXVzZXIpIGFzIHN0cmluZ1tdO1xuXHRcdC8vIFJlbW92ZSAnKicgZnJvbSBncm91cHNcblx0XHRncm91cHMgPSBncm91cHMuZmlsdGVyKChlbGVtZW50KSA9PiB7XG5cdFx0XHRyZXR1cm4gZWxlbWVudCAhPT0gJyonO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdC8vIFF1ZXJ5IGZyb20gd2ViXG5cdFx0Ly8gUXVlcnkgcGFyYW1zXG5cdFx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRtZXRhOiAnZ2xvYmFsdXNlcmluZm8nLFxuXHRcdFx0Z3VpdXNlcixcblx0XHRcdGd1aXByb3A6ICdncm91cHMnLFxuXHRcdFx0c21heGFnZTogNjAwLFxuXHRcdFx0bWF4YWdlOiA2MDAsXG5cdFx0fTtcblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHRcdC8vIERlLWNvbnN0cnVjdCB0aGUgcmVzcG9uc2Ugb2JqZWN0XG5cdFx0Y29uc3QgcXVlcnkgPSByZXNwb25zZVsncXVlcnknXSBhcyB7XG5cdFx0XHRnbG9iYWx1c2VyaW5mbzoge2dyb3Vwczogc3RyaW5nW107IG5hbWU6IHN0cmluZ307XG5cdFx0fTtcblxuXHRcdGlmIChxdWVyeT8uZ2xvYmFsdXNlcmluZm8pIHtcblx0XHRcdGdyb3VwcyA9IHF1ZXJ5Lmdsb2JhbHVzZXJpbmZvPy5ncm91cHMgPz8gW107XG5cdFx0XHQvLyBSZW1vdmUgJyonIGZyb20gZ3JvdXBzXG5cdFx0XHRncm91cHMgPSBncm91cHMuZmlsdGVyKChlbGVtZW50KSA9PiB7XG5cdFx0XHRcdHJldHVybiBlbGVtZW50ICE9PSAnKic7XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gQ2FjaGUgZm9yIDEgaG91clxuXHRcdFx0bXcuc3RvcmFnZS5zZXRPYmplY3QoQ0FDSEVfS0VZX1BSRUZJWCArIGd1aXVzZXIsIGdyb3VwcywgNjAgKiA2MCk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHtxdWVyeToge2dsb2JhbHVzZXJpbmZvOiB7bmFtZTogZ3VpdXNlciwgZ3JvdXBzfX19O1xufVxuXG5leHBvcnQge3R5cGUgUXVlcnlHbG9iYWxVc2VyR3JvdXBzLCBxdWVyeUdsb2JhbFVzZXJHcm91cHN9O1xuIiwgImltcG9ydCB7aW5pdE13QXBpfSBmcm9tICcuL2luaXRNd0FwaSc7XG5cbnR5cGUgUXVlcnlVc2VyR3JvdXBzID0gdHlwZW9mIHF1ZXJ5VXNlckdyb3VwcztcblxuYXN5bmMgZnVuY3Rpb24gcXVlcnlVc2VyR3JvdXBzKHVzZXJzOiBzdHJpbmdbXSkge1xuXHRjb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaSgnVXRpbC1RdWVyeVVzZXJHcm91cHMnKTtcblxuXHRjb25zdCBDQUNIRV9LRVlfUFJFRklYID0gJ2V4dC5nYWRnZXQuVXRpbF9xdWVyeVVzZXJHcm91cHMtJztcblxuXHRjb25zdCBjYWNoZWRRdWVyeVVzZXJzOiB7Z3JvdXBzOiBzdHJpbmdbXTsgbmFtZTogc3RyaW5nfVtdID0gW107XG5cblx0Ly8gUXVlcnkgZnJvbSBjYWNoZVxuXHRmb3IgKGNvbnN0IHVzZXIgb2YgdXNlcnMpIHtcblx0XHQvLyBDaGVjayBpZiB1c2VyIGdyb3VwIGluZm8gaXMgY2FjaGVkIGluIExvY2FsU3RvcmFnZVxuXHRcdC8vIElmIGNhY2hlZCwgZ2V0IHRoZW0gZnJvbSBMb2NhbFN0b3JhZ2Vcblx0XHRpZiAobXcuc3RvcmFnZS5nZXRPYmplY3QoQ0FDSEVfS0VZX1BSRUZJWCArIHVzZXIpKSB7XG5cdFx0XHRsZXQgZ3JvdXBzID0gbXcuc3RvcmFnZS5nZXRPYmplY3QoQ0FDSEVfS0VZX1BSRUZJWCArIHVzZXIpIGFzIHN0cmluZ1tdO1xuXHRcdFx0Ly8gUmVtb3ZlICcqJyBmcm9tIGdyb3Vwc1xuXHRcdFx0Z3JvdXBzID0gZ3JvdXBzLmZpbHRlcigoZWxlbWVudCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gZWxlbWVudCAhPT0gJyonO1xuXHRcdFx0fSk7XG5cdFx0XHQvLyBTdG9yZSBpbnRvIGFycmF5XG5cdFx0XHRjYWNoZWRRdWVyeVVzZXJzW2NhY2hlZFF1ZXJ5VXNlcnMubGVuZ3RoXSA9IHtuYW1lOiB1c2VyLCBncm91cHN9O1xuXHRcdH1cblx0fVxuXG5cdC8vIFF1ZXJ5IGZyb20gd2ViXG5cdGNvbnN0IHVzdXNlcnMgPSB1c2Vycy5maWx0ZXIoKHYpID0+IHtcblx0XHQvLyBSZW1vdmUgdXNlciB0aGF0IGhhdmUgY2FjaGVkIHVzZXIgZ3JvdXBzIGxvY2FsbHlcblx0XHRyZXR1cm4gIW13LnN0b3JhZ2UuZ2V0T2JqZWN0KENBQ0hFX0tFWV9QUkVGSVggKyB2KTtcblx0fSk7XG5cblx0Ly8gUXVlcnkgcGFyYW1zXG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlVc2Vyc1BhcmFtcyA9IHtcblx0XHR1c3VzZXJzLFxuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0bGlzdDogJ3VzZXJzJyxcblx0XHR1c3Byb3A6ICdncm91cHMnLFxuXHRcdHNtYXhhZ2U6IDYwMCxcblx0XHRtYXhhZ2U6IDYwMCxcblx0fTtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0Ly8gRGUtY29uc3RydWN0IHRoZSByZXNwb25zZSBvYmplY3Rcblx0Y29uc3QgcXVlcnkgPSByZXNwb25zZVsncXVlcnknXSBhcyB7XG5cdFx0dXNlcnM6IHtncm91cHM6IHN0cmluZ1tdOyBuYW1lOiBzdHJpbmd9W107XG5cdH07XG5cdGNvbnN0IHF1ZXJ5VXNlcnMgPSBbLi4uKHF1ZXJ5Py51c2VycyA/PyBbXSksIC4uLmNhY2hlZFF1ZXJ5VXNlcnNdO1xuXG5cdGZvciAoY29uc3QgdXNlciBvZiBxdWVyeVVzZXJzKSB7XG5cdFx0aWYgKHVzZXI/Lmdyb3VwcyAmJiB1c2VyPy5uYW1lKSB7XG5cdFx0XHRsZXQge2dyb3Vwc30gPSB1c2VyO1xuXHRcdFx0Ly8gUmVtb3ZlICcqJyBmcm9tIGdyb3Vwc1xuXHRcdFx0Z3JvdXBzID0gZ3JvdXBzLmZpbHRlcigoZWxlbWVudCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gZWxlbWVudCAhPT0gJyonO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIENhY2hlIGZvciAxIGhvdXJcblx0XHRcdG13LnN0b3JhZ2Uuc2V0T2JqZWN0KENBQ0hFX0tFWV9QUkVGSVggKyB1c2VyLm5hbWUsIGdyb3VwcywgNjAgKiA2MCk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHtxdWVyeToge3VzZXJzOiBxdWVyeVVzZXJzfX07XG59XG5cbmV4cG9ydCB7dHlwZSBRdWVyeVVzZXJHcm91cHMsIHF1ZXJ5VXNlckdyb3Vwc307XG4iLCAidHlwZSBTY3JvbGxUb3AgPSAoXG5cdHRhcmdldEhlaWdodDogbnVtYmVyIHwgc3RyaW5nLFxuXHRlZmZlY3RzT3B0aW9uc09yRHVyYXRpb24/OiBKUXVlcnkuRWZmZWN0c09wdGlvbnM8SFRNTEVsZW1lbnQ+IHwgbnVtYmVyIHwgJ2Zhc3QnIHwgJ3Nsb3cnXG4pID0+IHZvaWQ7XG5cbmNvbnN0IHNjcm9sbFRvcDogU2Nyb2xsVG9wID0gKHRhcmdldEhlaWdodCwgZWZmZWN0c09wdGlvbnNPckR1cmF0aW9uID0ge30pID0+IHtcblx0Y29uc3Qgb3B0aW9uczogSlF1ZXJ5LkVmZmVjdHNPcHRpb25zPEhUTUxFbGVtZW50PiA9XG5cdFx0dHlwZW9mIGVmZmVjdHNPcHRpb25zT3JEdXJhdGlvbiA9PT0gJ251bWJlcicgfHwgdHlwZW9mIGVmZmVjdHNPcHRpb25zT3JEdXJhdGlvbiA9PT0gJ3N0cmluZydcblx0XHRcdD8ge1xuXHRcdFx0XHRcdGR1cmF0aW9uOiBlZmZlY3RzT3B0aW9uc09yRHVyYXRpb24sXG5cdFx0XHRcdFx0ZWFzaW5nOiAnbGluZWFyJyxcblx0XHRcdFx0fVxuXHRcdFx0OiB7XG5cdFx0XHRcdFx0ZHVyYXRpb246ICdzbG93Jyxcblx0XHRcdFx0XHRlYXNpbmc6ICdsaW5lYXInLFxuXHRcdFx0XHRcdC4uLmVmZmVjdHNPcHRpb25zT3JEdXJhdGlvbixcblx0XHRcdFx0fTtcblx0JChkb2N1bWVudCkuZmluZCgnaHRtbCwgYm9keScpLmFuaW1hdGUoXG5cdFx0e1xuXHRcdFx0c2Nyb2xsVG9wOiB0YXJnZXRIZWlnaHQsXG5cdFx0fSxcblx0XHRvcHRpb25zXG5cdCk7XG59O1xuXG5leHBvcnQge3R5cGUgU2Nyb2xsVG9wLCBzY3JvbGxUb3B9O1xuIiwgImltcG9ydCB7Z2VuZXJhdGVBcnJheX0gZnJvbSAnLi9nZW5lcmF0ZUFycmF5JztcblxudHlwZSBVc2VySXNJbkdyb3VwID0gdHlwZW9mIHVzZXJJc0luR3JvdXA7XG5cbmNvbnN0IHVzZXJJc0luR3JvdXAgPSAoZ3JvdXBzOiBzdHJpbmcgfCBzdHJpbmdbXSkgPT4ge1xuXHRjb25zdCB7d2dVc2VyR3JvdXBzLCB3Z0dsb2JhbEdyb3Vwc30gPSBtdy5jb25maWcuZ2V0KCk7XG5cdHJldHVybiBbLi4uKHdnVXNlckdyb3VwcyB8fCBbXSksIC4uLigod2dHbG9iYWxHcm91cHMgYXMgc3RyaW5nW10pIHx8IFtdKV0uc29tZSgoZWxlbWVudDogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG5cdFx0cmV0dXJuIGdlbmVyYXRlQXJyYXkoZ3JvdXBzKS5pbmNsdWRlcyhlbGVtZW50KTtcblx0fSk7XG59O1xuXG5leHBvcnQge3R5cGUgVXNlcklzSW5Hcm91cCwgdXNlcklzSW5Hcm91cH07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsZUFBQSxDQUFBO0FBQUFDLFNBQUFELGNBQUE7RUFBQUUsT0FBQUEsTUFBQUE7RUFBQUMsNkJBQUFBLE1BQUFBO0VBQUFDLG9DQUFBQSxNQUFBQTtFQUFBQyxxQkFBQUEsTUFBQUE7RUFBQUMsbUJBQUFBLE1BQUFBO0VBQUFDLE9BQUFBLE1BQUFBO0VBQUFDLGNBQUFBLE1BQUFBO0VBQUFDLGVBQUFBLE1BQUFBO0VBQUFDLFNBQUFBLE1BQUFBO0VBQUFDLFdBQUFBLE1BQUFBO0VBQUFDLHNCQUFBQSxNQUFBQTtFQUFBQyx1QkFBQUEsTUFBQUE7RUFBQUMsaUJBQUFBLE1BQUFBO0VBQUFDLFdBQUFBLE1BQUFBO0VBQUFDLGFBQUFBLE1BQUFBO0VBQUFDLGVBQUFBLE1BQUFBO0FBQUEsQ0FBQTtBQUFBQyxPQUFBQyxVQUFBQyxhQUFBcEIsWUFBQTs7QUM4Q0EsSUFBTUcsOEJBQTJEQSxDQUFDO0VBQUNrQjtFQUFRQztFQUFNQztFQUFVQyxVQUFVLENBQUM7QUFBQyxNQUFNO0FBQzVHSCxTQUFPSSxpQkFBaUJILE1BQU1DLFVBQWdEQyxPQUFPO0FBQ3JGLFNBQU87SUFDTkUsUUFBUUEsTUFB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X2V4cG9ydHMiLCAiX19leHBvcnQiLCAiTXdVcmkiLCAiYWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyIiwgImNoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmUiLCAiY2hlY2tBMTF5Q29uZmlybUtleSIsICJjaGVja0RlcGVuZGVuY2llcyIsICJkZWxheSIsICJmaW5kVmFyaWFudHMiLCAiZ2VuZXJhdGVBcnJheSIsICJnZXRCb2R5IiwgImluaXRNd0FwaSIsICJvb3VpQ29uZmlybVdpdGhTdHlsZSIsICJxdWVyeUdsb2JhbFVzZXJHcm91cHMiLCAicXVlcnlVc2VyR3JvdXBzIiwgInNjcm9sbFRvcCIsICJ1bmlxdWVBcnJheSIsICJ1c2VySXNJbkdyb3VwIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIl9fdG9Db21tb25KUyIsICJ0YXJnZXQiLCAidHlwZSIsICJsaXN0ZW5lciIsICJvcHRpb25zIiwgImFkZEV2ZW50TGlzdGVuZXIiLCAicmVtb3ZlIiwgInJlbW92ZUV2ZW50TGlzdGVuZXIiLCAiZXZlbnQiLCAib3BhY2l0eSIsICJjdXJyZW50VGFyZ2V0IiwgInN0eWxlIiwgInRvU3RyaW5nIiwgImluY2x1ZGVzIiwgImtleSIsICJhcmdzIiwgImZsYXRNYXAiLCAiYXJnIiwgIkFycmF5IiwgImlzQXJyYXkiLCAiTm9kZUxpc3QiLCAidXNlckFnZW50IiwgImFwaVVyaSIsICJhcGlPcHRpb25zIiwgImFqYXgiLCAiaGVhZGVycyIsICJjb25jYXQiLCAibXciLCAiRm9yZWlnbkFwaSIsICJBcGkiLCAidW5pcXVlQXJyYXkyIiwgInJlc3VsdCIsICJfaXRlcmF0b3IyIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwMiIsICJzIiwgIm4iLCAiZG9uZSIsICJpdGVtIiwgInZhbHVlIiwgImxlbmd0aCIsICJlcnIiLCAiZSIsICJmIiwgIl94IiwgIl94MiIsICJfY2hlY2tEZXBlbmRlbmNpZXMiLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImdhZGdldE5hbWVzIiwgIm9wdGlvbiIsICJhcGkiLCAiZ2FkZ2V0cyIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJnYWRnZXQiLCAidXNlciIsICJnZXQiLCAicG9zdFdpdGhFZGl0VG9rZW4iLCAiYWN0aW9uIiwgImNoYW5nZSIsICJsb2FkZXIiLCAidXNpbmciLCAibXMiLCAiUHJvbWlzZSIsICJyZXNvbHZlIiwgInNldFRpbWVvdXQiLCAiX3gzIiwgIl9maW5kVmFyaWFudHMiLCAidGV4dCIsICJWQVJJQU5UUyIsICJhbGxWYXJpYW50cyIsICJwYXJhbXMiLCAiY29udGVudG1vZGVsIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAidGl0bGUiLCAiX2kyIiwgIl9WQVJJQU5UUyIsICJfcmVzcG9uc2UkcXVlcnkiLCAidmFyaWFudCIsICJ1c2VsYW5nIiwgInJlc3BvbnNlIiwgInBvc3QiLCAiZGlzcGxheXRpdGxlIiwgInZhcmlhbnRFbGVtZW50IiwgImRvY3VtZW50IiwgImNyZWF0ZUVsZW1lbnQiLCAiaW5uZXJIVE1MIiwgInRleHRDb250ZW50IiwgIiQiLCAicmVhZHkiLCAidGhlbiIsICIkYm9keSIsICJVUkwiLCAiY29uc3RydWN0b3IiLCAidXJsIiwgImJhc2UiLCAibG9jYXRpb24iLCAicHJvdG9jb2wiLCAiaG9zdCIsICJleHRlbmQiLCAib2JqZWN0IiwgIl9pIiwgIl9PYmplY3QkZW50cmllcyIsICJPYmplY3QiLCAiZW50cmllcyIsICJzZWFyY2hQYXJhbXMiLCAic2V0IiwgImdldFJlbGF0aXZlUGF0aCIsICJwYXRobmFtZSIsICJzZWFyY2giLCAiaGFzaCIsICJpbXBvcnRfdnVlMyIsICJyZXF1aXJlIiwgImltcG9ydF9jb2RleCIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAiQ29uZmlybSIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJDYW5jZWwiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAicHJvcHMiLCAiX19wcm9wcyIsICJlbWl0IiwgIl9fZW1pdCIsICJjbG9zZSIsICJjb25maXJtIiwgIm9uQ29uZmlybSIsICJjYW5jZWwiLCAib25DYW5jZWwiLCAiaGFuZGxlT3BlbkNoYW5nZSIsICJvcGVuIiwgImltcG9ydF92dWUyIiwgInJlbmRlciIsICJfY3R4IiwgIl9jYWNoZSIsICIkcHJvcHMiLCAiJHNldHVwIiwgIiRkYXRhIiwgIiRvcHRpb25zIiwgIm9wZW5CbG9jayIsICJjcmVhdGVCbG9jayIsICJtZXNzYWdlIiwgImxhYmVsIiwgImFjdGlvblR5cGUiLCAib25QcmltYXJ5IiwgIm9uRGVmYXVsdCIsICJPb3VpQ29uZmlybVdpdGhTdHlsZV9kZWZhdWx0IiwgIl9fZmlsZSIsICJfX3Njb3BlSWQiLCAiT291aUNvbmZpcm1XaXRoU3R5bGVfZGVmYXVsdDIiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJyb290IiwgImJvZHkiLCAiYXBwZW5kIiwgInNldHRsZWQiLCAic2V0dGxlIiwgImFwcCIsICJ1bm1vdW50IiwgImNyZWF0ZUFwcCIsICJtb3VudCIsICJfeDQiLCAiX3g1IiwgIl9xdWVyeUdsb2JhbFVzZXJHcm91cHMiLCAiZ3VpdXNlciIsICJDQUNIRV9LRVlfUFJFRklYIiwgImdyb3VwcyIsICJzdG9yYWdlIiwgImdldE9iamVjdCIsICJmaWx0ZXIiLCAiZWxlbWVudCIsICJtZXRhIiwgImd1aXByb3AiLCAic21heGFnZSIsICJtYXhhZ2UiLCAicXVlcnkiLCAiZ2xvYmFsdXNlcmluZm8iLCAiX3F1ZXJ5JGdsb2JhbHVzZXJpbmZvIiwgIl9xdWVyeSRnbG9iYWx1c2VyaW5mbzIiLCAic2V0T2JqZWN0IiwgIm5hbWUiLCAiX3g2IiwgIl9xdWVyeVVzZXJHcm91cHMiLCAidXNlcnMiLCAiX3F1ZXJ5JHVzZXJzIiwgImNhY2hlZFF1ZXJ5VXNlcnMiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAidXN1c2VycyIsICJ2IiwgImxpc3QiLCAidXNwcm9wIiwgInF1ZXJ5VXNlcnMiLCAiX2kzIiwgIl9xdWVyeVVzZXJzIiwgInRhcmdldEhlaWdodCIsICJlZmZlY3RzT3B0aW9uc09yRHVyYXRpb24iLCAiZHVyYXRpb24iLCAiZWFzaW5nIiwgImZpbmQiLCAiYW5pbWF0ZSIsICJ3Z1VzZXJHcm91cHMiLCAid2dHbG9iYWxHcm91cHMiLCAiY29uZmlnIiwgInNvbWUiXQp9Cg==

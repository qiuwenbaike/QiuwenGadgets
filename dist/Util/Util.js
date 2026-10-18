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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1V0aWwvVXRpbC50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2FkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlci50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2NoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmUudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9jaGVja0ExMXlDb25maXJtS2V5LnRzIiwgInNyYy9VdGlsL21vZHVsZXMvZ2VuZXJhdGVBcnJheS50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2luaXRNd0FwaS50cyIsICJzcmMvVXRpbC9tb2R1bGVzL3VuaXF1ZUFycmF5LnRzIiwgInNyYy9VdGlsL21vZHVsZXMvY2hlY2tEZXBlbmRlbmNpZXMudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9kZWxheS50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2ZpbmRWYXJpYW50cy50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2dldEJvZHkudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9td1VyaS50cyIsICJzcmMvVXRpbC9tb2R1bGVzL29vdWlDb25maXJtV2l0aFN0eWxlLnRzIiwgImRpc3QvVXRpbC9zcmMvVXRpbC9tb2R1bGVzL09vdWlDb25maXJtV2l0aFN0eWxlLnZ1ZSIsICJzcmMvVXRpbC9tb2R1bGVzL3V0aWwvaTE4bi50cyIsICJzZmMtdGVtcGxhdGU6RDpcXEdpdFJlcG9zaXRvcnlcXFFpdXdlbkdhZGdldHNcXHNyY1xcVXRpbFxcbW9kdWxlc1xcT291aUNvbmZpcm1XaXRoU3R5bGUudnVlP3R5cGU9dGVtcGxhdGUiLCAic3JjL1V0aWwvbW9kdWxlcy9Pb3VpQ29uZmlybVdpdGhTdHlsZS52dWUiLCAic3JjL1V0aWwvbW9kdWxlcy9xdWVyeUdsb2JhbFVzZXJHcm91cHMudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9xdWVyeVVzZXJHcm91cHMudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9zY3JvbGxUb3AudHMiLCAic3JjL1V0aWwvbW9kdWxlcy91c2VySXNJbkdyb3VwLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQge2FkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcn0gZnJvbSAnLi9tb2R1bGVzL2FkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcic7XG5leHBvcnQge2NoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmV9IGZyb20gJy4vbW9kdWxlcy9jaGFuZ2VPcGFjaXR5V2hlbk1vdXNlRW50ZXJPckxlYXZlJztcbmV4cG9ydCB7Y2hlY2tBMTF5Q29uZmlybUtleX0gZnJvbSAnLi9tb2R1bGVzL2NoZWNrQTExeUNvbmZpcm1LZXknO1xuZXhwb3J0IHtjaGVja0RlcGVuZGVuY2llc30gZnJvbSAnLi9tb2R1bGVzL2NoZWNrRGVwZW5kZW5jaWVzJztcbmV4cG9ydCB7ZGVsYXl9IGZyb20gJy4vbW9kdWxlcy9kZWxheSc7XG5leHBvcnQge2ZpbmRWYXJpYW50c30gZnJvbSAnLi9tb2R1bGVzL2ZpbmRWYXJpYW50cyc7XG5leHBvcnQge2dlbmVyYXRlQXJyYXl9IGZyb20gJy4vbW9kdWxlcy9nZW5lcmF0ZUFycmF5JztcbmV4cG9ydCB7Z2V0Qm9keX0gZnJvbSAnLi9tb2R1bGVzL2dldEJvZHknO1xuZXhwb3J0IHtpbml0TXdBcGl9IGZyb20gJy4vbW9kdWxlcy9pbml0TXdBcGknO1xuZXhwb3J0IHtNd1VyaX0gZnJvbSAnLi9tb2R1bGVzL213VXJpJztcbmV4cG9ydCB7b291aUNvbmZpcm1XaXRoU3R5bGV9IGZyb20gJy4vbW9kdWxlcy9vb3VpQ29uZmlybVdpdGhTdHlsZSc7XG5leHBvcnQge3F1ZXJ5R2xvYmFsVXNlckdyb3Vwc30gZnJvbSAnLi9tb2R1bGVzL3F1ZXJ5R2xvYmFsVXNlckdyb3Vwcyc7XG5leHBvcnQge3F1ZXJ5VXNlckdyb3Vwc30gZnJvbSAnLi9tb2R1bGVzL3F1ZXJ5VXNlckdyb3Vwcyc7XG5leHBvcnQge3Njcm9sbFRvcH0gZnJvbSAnLi9tb2R1bGVzL3Njcm9sbFRvcCc7XG5leHBvcnQge3VzZXJJc0luR3JvdXB9IGZyb20gJy4vbW9kdWxlcy91c2VySXNJbkdyb3VwJztcbmV4cG9ydCB7dW5pcXVlQXJyYXl9IGZyb20gJy4vbW9kdWxlcy91bmlxdWVBcnJheSc7XG4iLCAidHlwZSBBZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXIgPSA8XG5cdFRhcmdldCBleHRlbmRzIERvY3VtZW50IHwgSFRNTEVsZW1lbnQgfCBFbGVtZW50IHwgTWVkaWFRdWVyeUxpc3QgfCBXaW5kb3csXG5cdFR5cGUgZXh0ZW5kcyAoVGFyZ2V0IGV4dGVuZHMgRG9jdW1lbnRcblx0XHQ/IGtleW9mIERvY3VtZW50RXZlbnRNYXBcblx0XHQ6IFRhcmdldCBleHRlbmRzIEhUTUxFbGVtZW50XG5cdFx0XHQ/IGtleW9mIEhUTUxFbGVtZW50RXZlbnRNYXBcblx0XHRcdDogVGFyZ2V0IGV4dGVuZHMgTWVkaWFRdWVyeUxpc3Rcblx0XHRcdFx0PyBrZXlvZiBNZWRpYVF1ZXJ5TGlzdEV2ZW50TWFwXG5cdFx0XHRcdDogVGFyZ2V0IGV4dGVuZHMgV2luZG93XG5cdFx0XHRcdFx0PyBrZXlvZiBXaW5kb3dFdmVudE1hcFxuXHRcdFx0XHRcdDoga2V5b2YgR2xvYmFsRXZlbnRIYW5kbGVyc0V2ZW50TWFwKSxcblx0TGlzdGVuZXIgZXh0ZW5kcyAoVGFyZ2V0IGV4dGVuZHMgRG9jdW1lbnRcblx0XHQ/IFR5cGUgZXh0ZW5kcyBrZXlvZiBEb2N1bWVudEV2ZW50TWFwXG5cdFx0XHQ/ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBEb2N1bWVudEV2ZW50TWFwW1R5cGVdKSA9PiB1bmtub3duXG5cdFx0XHQ6ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBFdmVudCkgPT4gdW5rbm93blxuXHRcdDogVGFyZ2V0IGV4dGVuZHMgSFRNTEVsZW1lbnRcblx0XHRcdD8gVHlwZSBleHRlbmRzIGtleW9mIEhUTUxFbGVtZW50RXZlbnRNYXBcblx0XHRcdFx0PyAodGhpczogVGFyZ2V0LCBldmVudDogSFRNTEVsZW1lbnRFdmVudE1hcFtUeXBlXSkgPT4gdW5rbm93blxuXHRcdFx0XHQ6ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBFdmVudCkgPT4gdW5rbm93blxuXHRcdFx0OiBUYXJnZXQgZXh0ZW5kcyBFbGVtZW50XG5cdFx0XHRcdD8gVHlwZSBleHRlbmRzIGtleW9mIEVsZW1lbnRFdmVudE1hcFxuXHRcdFx0XHRcdD8gKHRoaXM6IFRhcmdldCwgZXZlbnQ6IEVsZW1lbnRFdmVudE1hcFtUeXBlXSkgPT4gdW5rbm93blxuXHRcdFx0XHRcdDogKHRoaXM6IFRhcmdldCwgZXZlbnQ6IEV2ZW50KSA9PiB1bmtub3duXG5cdFx0XHRcdDogVGFyZ2V0IGV4dGVuZHMgTWVkaWFRdWVyeUxpc3Rcblx0XHRcdFx0XHQ/IFR5cGUgZXh0ZW5kcyBrZXlvZiBNZWRpYVF1ZXJ5TGlzdEV2ZW50TWFwXG5cdFx0XHRcdFx0XHQ/ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBNZWRpYVF1ZXJ5TGlzdEV2ZW50TWFwW1R5cGVdKSA9PiB1bmtub3duXG5cdFx0XHRcdFx0XHQ6ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBFdmVudCkgPT4gdW5rbm93blxuXHRcdFx0XHRcdDogVGFyZ2V0IGV4dGVuZHMgV2luZG93XG5cdFx0XHRcdFx0XHQ/IFR5cGUgZXh0ZW5kcyBrZXlvZiBXaW5kb3dFdmVudE1hcFxuXHRcdFx0XHRcdFx0XHQ/ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBXaW5kb3dFdmVudE1hcFtUeXBlXSkgPT4gdW5rbm93blxuXHRcdFx0XHRcdFx0XHQ6ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBFdmVudCkgPT4gdW5rbm93blxuXHRcdFx0XHRcdFx0OiAodGhpczogVGFyZ2V0LCBldmVudDogRXZlbnQpID0+IHVua25vd24pLFxuPih7XG5cdHRhcmdldCxcblx0dHlwZSxcblx0bGlzdGVuZXIsXG5cdG9wdGlvbnMsXG59OiB7XG5cdHRhcmdldDogVGFyZ2V0O1xuXHR0eXBlOiBUeXBlO1xuXHRsaXN0ZW5lcjogTGlzdGVuZXI7XG5cdG9wdGlvbnM/OiBBZGRFdmVudExpc3RlbmVyT3B0aW9ucztcbn0pID0+IHtcblx0cmVtb3ZlOiAoKSA9PiB2b2lkO1xufTtcblxuY29uc3QgYWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyOiBBZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXIgPSAoe3RhcmdldCwgdHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMgPSB7fX0pID0+IHtcblx0dGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIgYXMgRXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdCwgb3B0aW9ucyk7XG5cdHJldHVybiB7XG5cdFx0cmVtb3ZlOiAoKTogdm9pZCA9PiB7XG5cdFx0XHR0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciBhcyBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0LCBvcHRpb25zKTtcblx0XHR9LFxuXHR9O1xufTtcblxuZXhwb3J0IHt0eXBlIEFkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3ZlciwgYWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyfTtcbiIsICJ0eXBlIENoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmUgPSAoZXZlbnQ6IE1vdXNlRXZlbnQgfCBKUXVlcnkuVHJpZ2dlcmVkRXZlbnQsIG9wYWNpdHk/OiBudW1iZXIpID0+IHZvaWQ7XG5cbmNvbnN0IGNoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmU6IENoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmUgPSAoZXZlbnQsIG9wYWNpdHkgPSAwLjcpID0+IHtcblx0KGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLm9wYWNpdHkgPSBldmVudC50eXBlID09PSAnbW91c2VlbnRlcicgPyAnMScgOiBvcGFjaXR5LnRvU3RyaW5nKCk7XG59O1xuXG5leHBvcnQge3R5cGUgQ2hhbmdlT3BhY2l0eVdoZW5Nb3VzZUVudGVyT3JMZWF2ZSwgY2hhbmdlT3BhY2l0eVdoZW5Nb3VzZUVudGVyT3JMZWF2ZX07XG4iLCAidHlwZSBDaGVja0ExMXlDb25maXJtS2V5ID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50IHwgTW91c2VFdmVudCB8IEpRdWVyeS5DbGlja0V2ZW50IHwgSlF1ZXJ5LktleURvd25FdmVudCkgPT4gYm9vbGVhbjtcblxuY29uc3QgY2hlY2tBMTF5Q29uZmlybUtleTogQ2hlY2tBMTF5Q29uZmlybUtleSA9IChldmVudCk6IGJvb2xlYW4gPT4ge1xuXHRpZiAoWydjbGljaycsICdrZXlkb3duJ10uaW5jbHVkZXMoZXZlbnQudHlwZSkpIHtcblx0XHRpZiAoZXZlbnQudHlwZSA9PT0gJ2tleWRvd24nKSB7XG5cdFx0XHRyZXR1cm4gWydFbnRlcicsICcgJ10uaW5jbHVkZXMoKGV2ZW50IGFzIEtleWJvYXJkRXZlbnQpLmtleSk7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCB7dHlwZSBDaGVja0ExMXlDb25maXJtS2V5LCBjaGVja0ExMXlDb25maXJtS2V5fTtcbiIsICJ0eXBlIEdlbmVyYXRlQXJyYXkgPSB0eXBlb2YgZ2VuZXJhdGVBcnJheTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVBcnJheTxUIGV4dGVuZHMgW10+KC4uLmFyZ3M6IChUIHwgVFtdKVtdKTogVFtdO1xuZnVuY3Rpb24gZ2VuZXJhdGVBcnJheTxUIGV4dGVuZHMgTm9kZUxpc3Q+KC4uLmFyZ3M6IChUIHwgVFtdKVtdKTogTm9kZVtdO1xuZnVuY3Rpb24gZ2VuZXJhdGVBcnJheTxUID0gdW5rbm93bj4oLi4uYXJnczogKFQgfCBUW10pW10pOiBUW107XG5mdW5jdGlvbiBnZW5lcmF0ZUFycmF5PFQ+KC4uLmFyZ3M6IChUIHwgVFtdKVtdKTogVFtdIHtcblx0cmV0dXJuIGFyZ3MuZmxhdE1hcCgoYXJnKSA9PiB7XG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0cmV0dXJuIGFyZztcblx0XHR9XG5cblx0XHRpZiAoYXJnIGluc3RhbmNlb2YgTm9kZUxpc3QpIHtcblx0XHRcdHJldHVybiBbLi4uYXJnXSBhcyBUO1xuXHRcdH1cblxuXHRcdHJldHVybiBbYXJnXTtcblx0fSk7XG59XG5cbmV4cG9ydCB7dHlwZSBHZW5lcmF0ZUFycmF5LCBnZW5lcmF0ZUFycmF5fTtcbiIsICJ0eXBlIEluaXRNd0FwaSA9IHR5cGVvZiBpbml0TXdBcGk7XG5cbi8qKlxuICogQHJlcXVpcmVzIG1lZGlhd2lraS5hcGlcbiAqIEBwYXJhbSB7c3RyaW5nfSBbdXNlckFnZW50XVxuICogQHBhcmFtIHtzdHJpbmd9IFthcGlVcmldXG4gKiBAcmV0dXJuIHttdy5BcGl8bXcuRm9yZWlnbkFwaX1cbiAqL1xuZnVuY3Rpb24gaW5pdE13QXBpKHVzZXJBZ2VudD86IHN0cmluZyk6IG13LkFwaTtcbmZ1bmN0aW9uIGluaXRNd0FwaSh1c2VyQWdlbnQ6IHN0cmluZywgYXBpVXJpOiBzdHJpbmcpOiBtdy5Gb3JlaWduQXBpO1xuZnVuY3Rpb24gaW5pdE13QXBpKHVzZXJBZ2VudD86IHN0cmluZywgYXBpVXJpPzogc3RyaW5nKTogbXcuQXBpIHwgbXcuRm9yZWlnbkFwaSB7XG5cdHZvaWQgbXcubG9hZGVyLnVzaW5nKCdtZWRpYXdpa2kuYXBpJyk7XG5cblx0Y29uc3QgYXBpT3B0aW9ucyA9IHtcblx0XHRhamF4OiB7XG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdCdBcGktVXNlci1BZ2VudCc6IHVzZXJBZ2VudCA/IGBRaXV3ZW4vMS4xICgke3VzZXJBZ2VudH0pYCA6ICdRaXV3ZW4vMS4xJyxcblx0XHRcdH0sXG5cdFx0fSxcblx0fTtcblxuXHRpZiAoYXBpVXJpKSB7XG5cdFx0cmV0dXJuIG5ldyBtdy5Gb3JlaWduQXBpKGFwaVVyaSwgYXBpT3B0aW9ucyk7XG5cdH1cblxuXHRyZXR1cm4gbmV3IG13LkFwaShhcGlPcHRpb25zKTtcbn1cblxuZXhwb3J0IHt0eXBlIEluaXRNd0FwaSwgaW5pdE13QXBpfTtcbiIsICJ0eXBlIFVuaXF1ZUFycmF5ID0gdHlwZW9mIHVuaXF1ZUFycmF5O1xuXG5jb25zdCB1bmlxdWVBcnJheSA9IGZ1bmN0aW9uIHVuaXF1ZUFycmF5PFQ+KGFyZ3M6IFRbXSk6IFRbXSB7XG5cdC8qKiFcblx0ICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IENDLUJZLVNBLTQuMFxuXHQgKlxuXHQgKiBAc291cmNlIHtAbGluayBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy85MjI5NjQ1L3JlbW92ZS1kdXBsaWNhdGUtdmFsdWVzLWZyb20tanMtYXJyYXkvOTIyOTgyfVxuXHQgKiBAbGljZW5zZSBDQy1CWS1TQS00LjBcblx0ICovXG5cdGNvbnN0IHJlc3VsdDogdHlwZW9mIGFyZ3MgPSBbXTtcblx0Zm9yIChjb25zdCBpdGVtIG9mIGFyZ3MpIHtcblx0XHRpZiAoIXJlc3VsdC5pbmNsdWRlcyhpdGVtKSkge1xuXHRcdFx0cmVzdWx0W3Jlc3VsdC5sZW5ndGhdID0gaXRlbTsgLy8gUmVwbGFjZSBBcnJheSNwdXNoIHRvIGF2b2lkIGNvcmUtanMgcG9seWZpbGxpbmdcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCB7dHlwZSBVbmlxdWVBcnJheSwgdW5pcXVlQXJyYXl9O1xuIiwgImltcG9ydCB7Z2VuZXJhdGVBcnJheX0gZnJvbSAnLi9nZW5lcmF0ZUFycmF5JztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICcuL2luaXRNd0FwaSc7XG5pbXBvcnQge3VuaXF1ZUFycmF5fSBmcm9tICcuL3VuaXF1ZUFycmF5JztcblxudHlwZSBCb29sZWFuID0gJzAnIHwgJzEnIHwgMCB8IDE7XG50eXBlIENoZWNrRGVwZW5kZW5jaWVzID0gdHlwZW9mIGNoZWNrRGVwZW5kZW5jaWVzO1xuXG5mdW5jdGlvbiBjaGVja0RlcGVuZGVuY2llcyhnYWRnZXROYW1lczogc3RyaW5nIHwgc3RyaW5nW10pOiBQcm9taXNlPHZvaWQ+O1xuZnVuY3Rpb24gY2hlY2tEZXBlbmRlbmNpZXMoZ2FkZ2V0TmFtZXM6IHN0cmluZywgb3B0aW9uOiBCb29sZWFuKTogUHJvbWlzZTx2b2lkPjtcbmFzeW5jIGZ1bmN0aW9uIGNoZWNrRGVwZW5kZW5jaWVzKGdhZGdldE5hbWVzOiBzdHJpbmcgfCBzdHJpbmdbXSwgb3B0aW9uPzogQm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaSgnVXRpbC1DaGVja0RlcGVuZGVuY2llcycpO1xuXHRjb25zdCBnYWRnZXRzID0gdW5pcXVlQXJyYXkoZ2VuZXJhdGVBcnJheShnYWRnZXROYW1lcykpO1xuXHRvcHRpb24gfHw9IDE7XG5cblx0Zm9yIChjb25zdCBnYWRnZXQgb2YgZ2FkZ2V0cykge1xuXHRcdGlmIChcblx0XHRcdChvcHRpb24gPT09ICcwJyAmJiBtdy51c2VyLm9wdGlvbnMuZ2V0KGBnYWRnZXQtJHtnYWRnZXR9YCkgPT09ICcxJykgfHxcblx0XHRcdChvcHRpb24gPT09ICcxJyAmJiBtdy51c2VyLm9wdGlvbnMuZ2V0KGBnYWRnZXQtJHtnYWRnZXR9YCkgPT09ICcwJylcblx0XHQpIHtcblx0XHRcdGF3YWl0IGFwaS5wb3N0V2l0aEVkaXRUb2tlbih7XG5cdFx0XHRcdGFjdGlvbjogJ29wdGlvbnMnLFxuXHRcdFx0XHRjaGFuZ2U6IGBnYWRnZXQtJHtnYWRnZXR9PSR7b3B0aW9ufWAsXG5cdFx0XHR9IGFzIEFwaU9wdGlvbnNQYXJhbXMpO1xuXHRcdFx0YXdhaXQgbXcubG9hZGVyLnVzaW5nKGBleHQuZ2FkZ2V0LiR7Z2FkZ2V0fWApO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQge3R5cGUgQ2hlY2tEZXBlbmRlbmNpZXMsIGNoZWNrRGVwZW5kZW5jaWVzfTtcbiIsICJ0eXBlIERlbGF5ID0gKG1zOiBudW1iZXIpID0+IFByb21pc2U8dm9pZD47XG5cbmNvbnN0IGRlbGF5OiBEZWxheSA9IChtcykgPT4ge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmU6ICgpID0+IHZvaWQpOiB2b2lkID0+IHtcblx0XHRzZXRUaW1lb3V0KHJlc29sdmUsIG1zKTtcblx0fSk7XG59O1xuXG5leHBvcnQge3R5cGUgRGVsYXksIGRlbGF5fTtcbiIsICJpbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnLi9pbml0TXdBcGknO1xuaW1wb3J0IHt1bmlxdWVBcnJheX0gZnJvbSAnLi91bmlxdWVBcnJheSc7XG5cbnR5cGUgRmluZFZhcmlhbnRzID0gdHlwZW9mIGZpbmRWYXJpYW50cztcblxuYXN5bmMgZnVuY3Rpb24gZmluZFZhcmlhbnRzKHRleHQ6IHN0cmluZykge1xuXHRjb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaSgnVXRpbC1GaW5kVmFyaWFudHMnKTtcblxuXHRjb25zdCBWQVJJQU5UUyA9IFsnemgtaGFucycsICd6aC1oYW50JywgJ3poLWNuJywgJ3poLWhrJywgJ3poLW1vJywgJ3poLXNnJywgJ3poLW15JywgJ3poLXR3J107XG5cblx0Y29uc3QgYWxsVmFyaWFudHM6IHN0cmluZ1tdID0gW107XG5cblx0Y29uc3QgcGFyYW1zOiBBcGlQYXJzZVBhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0Y29udGVudG1vZGVsOiAnd2lraXRleHQnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRwcm9wOiBbJ2Rpc3BsYXl0aXRsZSddLFxuXHRcdHRpdGxlOiAndGVtcCcsXG5cdFx0dGV4dCxcblx0fTtcblxuXHRmb3IgKGNvbnN0IHZhcmlhbnQgb2YgVkFSSUFOVFMpIHtcblx0XHRwYXJhbXMudXNlbGFuZyA9IHZhcmlhbnQ7XG5cdFx0cGFyYW1zLnZhcmlhbnQgPSB2YXJpYW50O1xuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QocGFyYW1zKTtcblxuXHRcdGNvbnN0IGRpc3BsYXl0aXRsZSA9IHJlc3BvbnNlPy5bJ3F1ZXJ5J10/LmRpc3BsYXl0aXRsZSBhcyBzdHJpbmc7XG5cdFx0Y29uc3QgdmFyaWFudEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2YXJpYW50Jyk7XG5cdFx0dmFyaWFudEVsZW1lbnQuaW5uZXJIVE1MID0gZGlzcGxheXRpdGxlO1xuXG5cdFx0aWYgKHZhcmlhbnRFbGVtZW50LnRleHRDb250ZW50KSB7XG5cdFx0XHRhbGxWYXJpYW50c1thbGxWYXJpYW50cy5sZW5ndGhdID0gdmFyaWFudEVsZW1lbnQudGV4dENvbnRlbnQ7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHVuaXF1ZUFycmF5KGFsbFZhcmlhbnRzKTtcbn1cblxuZXhwb3J0IHt0eXBlIEZpbmRWYXJpYW50cywgZmluZFZhcmlhbnRzfTtcbiIsICJ0eXBlIEdldEJvZHkgPSAoKSA9PiBKUXVlcnkuVGhlbmFibGU8SlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4+O1xuXG5jb25zdCBnZXRCb2R5ID0gKCkgPT4ge1xuXHRyZXR1cm4gJC5yZWFkeS50aGVuKCgpOiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PiA9PiB7XG5cdFx0Y29uc3QgJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+ID0gJCgnYm9keScpO1xuXG5cdFx0cmV0dXJuICRib2R5O1xuXHR9KTtcbn07XG5cbmV4cG9ydCB7dHlwZSBHZXRCb2R5LCBnZXRCb2R5fTtcbiIsICJ0eXBlIENsYXNzTXdVcmkgPSB0eXBlb2YgTXdVcmk7XG5cbmNsYXNzIE13VXJpIGV4dGVuZHMgVVJMIHtcblx0Y29uc3RydWN0b3IodXJsOiBzdHJpbmcsIGJhc2U6IHN0cmluZyA9IGxvY2F0aW9uLm9yaWdpbikge1xuXHRcdHN1cGVyKHVybCwgYmFzZSk7XG5cdH1cblx0cHVibGljIGV4dGVuZChvYmplY3Q6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9KTogdGhpcyB7XG5cdFx0Zm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMob2JqZWN0KSkge1xuXHRcdFx0dGhpcy5zZWFyY2hQYXJhbXMuc2V0KGtleSwgdmFsdWUpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRwdWJsaWMgZ2V0UmVsYXRpdmVQYXRoKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMucGF0aG5hbWUgKyB0aGlzLnNlYXJjaCArIHRoaXMuaGFzaDtcblx0fVxufVxuXG5leHBvcnQge3R5cGUgQ2xhc3NNd1VyaSwgTXdVcml9O1xuIiwgImltcG9ydCB7dHlwZSBBcHAgYXMgVnVlQXBwLCBjcmVhdGVBcHB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgT291aUNvbmZpcm1XaXRoU3R5bGUgZnJvbSAnLi9Pb3VpQ29uZmlybVdpdGhTdHlsZS52dWUnO1xuXG50eXBlIE9vdWlDb25maXJtV2l0aFN0eWxlID0gKG1lc3NhZ2U6IHN0cmluZykgPT4gUHJvbWlzZTxib29sZWFuPjtcblxuLyoqXG4gKiBTaG93IGEgY29uZmlybWF0aW9uIGRpYWxvZyBidWlsdCB3aXRoIENvZGV4IGFuZCBWdWUuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gZGlzcGxheSBpbiB0aGUgZGlhbG9nXG4gKiBAcmV0dXJuIHtQcm9taXNlPGJvb2xlYW4+fSBSZXNvbHZlcyB0byBgdHJ1ZWAgd2hlbiB0aGUgdXNlciBjb25maXJtcywgYGZhbHNlYCB3aGVuIGNhbmNlbGxlZCBvciBjbG9zZWRcbiAqL1xuY29uc3Qgb291aUNvbmZpcm1XaXRoU3R5bGU6IE9vdWlDb25maXJtV2l0aFN0eWxlID0gKG1lc3NhZ2U6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4gPT5cblx0bmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUpID0+IHtcblx0XHRhd2FpdCBtdy5sb2FkZXIudXNpbmcoWydAd2lraW1lZGlhL2NvZGV4JywgJ3Z1ZSddKTtcblxuXHRcdGNvbnN0IHJvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZChyb290KTtcblxuXHRcdGxldCBzZXR0bGVkID0gZmFsc2U7XG5cdFx0Y29uc3Qgc2V0dGxlID0gKHZhbHVlOiBib29sZWFuKTogdm9pZCA9PiB7XG5cdFx0XHRpZiAoc2V0dGxlZCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRzZXR0bGVkID0gdHJ1ZTtcblx0XHRcdGFwcC51bm1vdW50KCk7XG5cdFx0XHRyb290LnJlbW92ZSgpO1xuXHRcdFx0cmVzb2x2ZSh2YWx1ZSk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IGFwcDogVnVlQXBwPEVsZW1lbnQ+ID0gY3JlYXRlQXBwKE9vdWlDb25maXJtV2l0aFN0eWxlLCB7XG5cdFx0XHRvcGVuOiB0cnVlLFxuXHRcdFx0bWVzc2FnZSxcblx0XHRcdG9uQ29uZmlybTogKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRzZXR0bGUodHJ1ZSk7XG5cdFx0XHR9LFxuXHRcdFx0b25DYW5jZWw6ICgpOiB2b2lkID0+IHtcblx0XHRcdFx0c2V0dGxlKGZhbHNlKTtcblx0XHRcdH0sXG5cdFx0fSk7XG5cdFx0YXBwLm1vdW50KHJvb3QpO1xuXHR9KTtcblxuZXhwb3J0IHt0eXBlIE9vdWlDb25maXJtV2l0aFN0eWxlLCBvb3VpQ29uZmlybVdpdGhTdHlsZX07XG4iLCAiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7Q2R4RGlhbG9nfSBmcm9tICdAd2lraW1lZGlhL2NvZGV4JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi91dGlsL2kxOG4nO1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcblx0b3BlbjogYm9vbGVhbjtcblx0bWVzc2FnZTogc3RyaW5nO1xuXHRvbkNvbmZpcm06ICgpID0+IHZvaWQ7XG5cdG9uQ2FuY2VsOiAoKSA9PiB2b2lkO1xufT4oKTtcblxuY29uc3QgZW1pdCA9IGRlZmluZUVtaXRzPHtcblx0J3VwZGF0ZTpvcGVuJzogW3ZhbHVlOiBib29sZWFuXTtcbn0+KCk7XG5cbmNvbnN0IGNsb3NlID0gKCk6IHZvaWQgPT4ge1xuXHRlbWl0KCd1cGRhdGU6b3BlbicsIGZhbHNlKTtcbn07XG5cbmNvbnN0IGNvbmZpcm0gPSAoKTogdm9pZCA9PiB7XG5cdGNsb3NlKCk7XG5cdHByb3BzLm9uQ29uZmlybSgpO1xufTtcblxuY29uc3QgY2FuY2VsID0gKCk6IHZvaWQgPT4ge1xuXHRjbG9zZSgpO1xuXHRwcm9wcy5vbkNhbmNlbCgpO1xufTtcblxuY29uc3QgaGFuZGxlT3BlbkNoYW5nZSA9IChvcGVuOiBib29sZWFuKTogdm9pZCA9PiB7XG5cdGVtaXQoJ3VwZGF0ZTpvcGVuJywgb3Blbik7XG5cdGlmICghb3Blbikge1xuXHRcdHByb3BzLm9uQ2FuY2VsKCk7XG5cdH1cbn07XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuXHQ8Y2R4LWRpYWxvZ1xuXHRcdDpvcGVuPVwib3BlblwiXG5cdFx0OnRpdGxlPVwibWVzc2FnZVwiXG5cdFx0OnByaW1hcnktYWN0aW9uPVwie2xhYmVsOiBnZXRNZXNzYWdlKCdDb25maXJtJyksIGFjdGlvblR5cGU6ICdwcm9ncmVzc2l2ZSd9XCJcblx0XHQ6ZGVmYXVsdC1hY3Rpb249XCJ7bGFiZWw6IGdldE1lc3NhZ2UoJ0NhbmNlbCcpfVwiXG5cdFx0OnVzZS1jbG9zZS1idXR0b249XCJ0cnVlXCJcblx0XHRAdXBkYXRlOm9wZW49XCJoYW5kbGVPcGVuQ2hhbmdlXCJcblx0XHRAcHJpbWFyeT1cImNvbmZpcm1cIlxuXHRcdEBkZWZhdWx0PVwiY2FuY2VsXCJcblx0Lz5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cImxlc3NcIj5cbi5jZHgtZGlhbG9nIDpkZWVwKC5jZHgtZGlhbG9nX19mb290ZXIpIHtcblx0Ym9yZGVyLXRvcDogMC4xcmVtIHNvbGlkICMwNjQ1YWQ7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG4uY2R4LWRpYWxvZyA6ZGVlcCguY2R4LWRpYWxvZ19fdGl0bGUpIHtcblx0Zm9udC1zaXplOiAxLjJyZW07XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdGxpbmUtaGVpZ2h0OiAxLjg7XG5cdHBhZGRpbmc6IDAuNGVtIDA7XG59XG48L3N0eWxlPlxuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRDb25maXJtOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NvbmZpcm0nLFxuXHRcdFx0amE6ICfnorroqo0nLFxuXHRcdFx0J3poLWhhbnMnOiAn56Gu6K6kJyxcblx0XHRcdCd6aC1oYW50JzogJ+eiuuiqjScsXG5cdFx0fSksXG5cdFx0Q2FuY2VsOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NhbmNlbCcsXG5cdFx0XHRqYTogJ+OCreODo+ODs+OCu+ODqycsXG5cdFx0XHQnemgtaGFucyc6ICflj5bmtognLFxuXHRcdFx0J3poLWhhbnQnOiAn5Y+W5raIJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHsgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUJsb2NrIGFzIF9jcmVhdGVCbG9jayB9IGZyb20gXCJ2dWVcIlxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSwgJHByb3BzLCAkc2V0dXAsICRkYXRhLCAkb3B0aW9ucykge1xuICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKCRzZXR1cFtcIkNkeERpYWxvZ1wiXSwge1xuICAgIG9wZW46ICRwcm9wcy5vcGVuLFxuICAgIHRpdGxlOiAkcHJvcHMubWVzc2FnZSxcbiAgICBcInByaW1hcnktYWN0aW9uXCI6IHtsYWJlbDogJHNldHVwLmdldE1lc3NhZ2UoJ0NvbmZpcm0nKSwgYWN0aW9uVHlwZTogJ3Byb2dyZXNzaXZlJ30sXG4gICAgXCJkZWZhdWx0LWFjdGlvblwiOiB7bGFiZWw6ICRzZXR1cC5nZXRNZXNzYWdlKCdDYW5jZWwnKX0sXG4gICAgXCJ1c2UtY2xvc2UtYnV0dG9uXCI6IHRydWUsXG4gICAgXCJvblVwZGF0ZTpvcGVuXCI6ICRzZXR1cC5oYW5kbGVPcGVuQ2hhbmdlLFxuICAgIG9uUHJpbWFyeTogJHNldHVwLmNvbmZpcm0sXG4gICAgb25EZWZhdWx0OiAkc2V0dXAuY2FuY2VsXG4gIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIFtcIm9wZW5cIiwgXCJ0aXRsZVwiLCBcInByaW1hcnktYWN0aW9uXCIsIFwiZGVmYXVsdC1hY3Rpb25cIl0pKVxufSIsICJpbXBvcnQgc2NyaXB0IGZyb20gXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFV0aWxcXFxcbW9kdWxlc1xcXFxPb3VpQ29uZmlybVdpdGhTdHlsZS52dWU/dHlwZT1zY3JpcHRcIjtpbXBvcnQgXCJEOlxcXFxHaXRSZXBvc2l0b3J5XFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFV0aWxcXFxcbW9kdWxlc1xcXFxPb3VpQ29uZmlybVdpdGhTdHlsZS52dWU/dHlwZT1zdHlsZSZpbmRleD0wXCI7aW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIkQ6XFxcXEdpdFJlcG9zaXRvcnlcXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcVXRpbFxcXFxtb2R1bGVzXFxcXE9vdWlDb25maXJtV2l0aFN0eWxlLnZ1ZT90eXBlPXRlbXBsYXRlXCI7IHNjcmlwdC5yZW5kZXIgPSByZW5kZXI7c2NyaXB0Ll9fZmlsZSA9IFwic3JjXFxcXFV0aWxcXFxcbW9kdWxlc1xcXFxPb3VpQ29uZmlybVdpdGhTdHlsZS52dWVcIjtzY3JpcHQuX19zY29wZUlkID0gXCJkYXRhLXYtODZlYTg5YWRcIjtleHBvcnQgZGVmYXVsdCBzY3JpcHQ7IiwgImltcG9ydCB7aW5pdE13QXBpfSBmcm9tICcuL2luaXRNd0FwaSc7XG5cbnR5cGUgUXVlcnlHbG9iYWxVc2VyR3JvdXBzID0gdHlwZW9mIHF1ZXJ5R2xvYmFsVXNlckdyb3VwcztcblxuYXN5bmMgZnVuY3Rpb24gcXVlcnlHbG9iYWxVc2VyR3JvdXBzKGd1aXVzZXI6IHN0cmluZykge1xuXHRjb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaSgnVXRpbC1RdWVyeUdsb2JhbFVzZXJHcm91cHMnKTtcblxuXHRjb25zdCBDQUNIRV9LRVlfUFJFRklYID0gJ2V4dC5nYWRnZXQuVXRpbF9xdWVyeUdsb2JhbFVzZXJHcm91cHMtJztcblxuXHRsZXQgZ3JvdXBzOiBzdHJpbmdbXSA9IFtdO1xuXG5cdC8vIFF1ZXJ5IGZyb20gY2FjaGVcblx0Ly8gQ2hlY2sgaWYgdXNlciBncm91cCBpbmZvIGlzIGNhY2hlZCBpbiBMb2NhbFN0b3JhZ2Vcblx0Ly8gSWYgY2FjaGVkLCBnZXQgdGhlbSBmcm9tIExvY2FsU3RvcmFnZVxuXHRpZiAobXcuc3RvcmFnZS5nZXRPYmplY3QoQ0FDSEVfS0VZX1BSRUZJWCArIGd1aXVzZXIpKSB7XG5cdFx0Z3JvdXBzID0gbXcuc3RvcmFnZS5nZXRPYmplY3QoQ0FDSEVfS0VZX1BSRUZJWCArIGd1aXVzZXIpIGFzIHN0cmluZ1tdO1xuXHRcdC8vIFJlbW92ZSAnKicgZnJvbSBncm91cHNcblx0XHRncm91cHMgPSBncm91cHMuZmlsdGVyKChlbGVtZW50KSA9PiB7XG5cdFx0XHRyZXR1cm4gZWxlbWVudCAhPT0gJyonO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdC8vIFF1ZXJ5IGZyb20gd2ViXG5cdFx0Ly8gUXVlcnkgcGFyYW1zXG5cdFx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRtZXRhOiAnZ2xvYmFsdXNlcmluZm8nLFxuXHRcdFx0Z3VpdXNlcixcblx0XHRcdGd1aXByb3A6ICdncm91cHMnLFxuXHRcdFx0c21heGFnZTogNjAwLFxuXHRcdFx0bWF4YWdlOiA2MDAsXG5cdFx0fTtcblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHRcdC8vIERlLWNvbnN0cnVjdCB0aGUgcmVzcG9uc2Ugb2JqZWN0XG5cdFx0Y29uc3QgcXVlcnkgPSByZXNwb25zZVsncXVlcnknXSBhcyB7XG5cdFx0XHRnbG9iYWx1c2VyaW5mbzoge2dyb3Vwczogc3RyaW5nW107IG5hbWU6IHN0cmluZ307XG5cdFx0fTtcblxuXHRcdGlmIChxdWVyeT8uZ2xvYmFsdXNlcmluZm8pIHtcblx0XHRcdGdyb3VwcyA9IHF1ZXJ5Lmdsb2JhbHVzZXJpbmZvPy5ncm91cHMgPz8gW107XG5cdFx0XHQvLyBSZW1vdmUgJyonIGZyb20gZ3JvdXBzXG5cdFx0XHRncm91cHMgPSBncm91cHMuZmlsdGVyKChlbGVtZW50KSA9PiB7XG5cdFx0XHRcdHJldHVybiBlbGVtZW50ICE9PSAnKic7XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gQ2FjaGUgZm9yIDEgaG91clxuXHRcdFx0bXcuc3RvcmFnZS5zZXRPYmplY3QoQ0FDSEVfS0VZX1BSRUZJWCArIGd1aXVzZXIsIGdyb3VwcywgNjAgKiA2MCk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHtxdWVyeToge2dsb2JhbHVzZXJpbmZvOiB7bmFtZTogZ3VpdXNlciwgZ3JvdXBzfX19O1xufVxuXG5leHBvcnQge3R5cGUgUXVlcnlHbG9iYWxVc2VyR3JvdXBzLCBxdWVyeUdsb2JhbFVzZXJHcm91cHN9O1xuIiwgImltcG9ydCB7aW5pdE13QXBpfSBmcm9tICcuL2luaXRNd0FwaSc7XG5cbnR5cGUgUXVlcnlVc2VyR3JvdXBzID0gdHlwZW9mIHF1ZXJ5VXNlckdyb3VwcztcblxuYXN5bmMgZnVuY3Rpb24gcXVlcnlVc2VyR3JvdXBzKHVzZXJzOiBzdHJpbmdbXSkge1xuXHRjb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaSgnVXRpbC1RdWVyeVVzZXJHcm91cHMnKTtcblxuXHRjb25zdCBDQUNIRV9LRVlfUFJFRklYID0gJ2V4dC5nYWRnZXQuVXRpbF9xdWVyeVVzZXJHcm91cHMtJztcblxuXHRjb25zdCBjYWNoZWRRdWVyeVVzZXJzOiB7Z3JvdXBzOiBzdHJpbmdbXTsgbmFtZTogc3RyaW5nfVtdID0gW107XG5cblx0Ly8gUXVlcnkgZnJvbSBjYWNoZVxuXHRmb3IgKGNvbnN0IHVzZXIgb2YgdXNlcnMpIHtcblx0XHQvLyBDaGVjayBpZiB1c2VyIGdyb3VwIGluZm8gaXMgY2FjaGVkIGluIExvY2FsU3RvcmFnZVxuXHRcdC8vIElmIGNhY2hlZCwgZ2V0IHRoZW0gZnJvbSBMb2NhbFN0b3JhZ2Vcblx0XHRpZiAobXcuc3RvcmFnZS5nZXRPYmplY3QoQ0FDSEVfS0VZX1BSRUZJWCArIHVzZXIpKSB7XG5cdFx0XHRsZXQgZ3JvdXBzID0gbXcuc3RvcmFnZS5nZXRPYmplY3QoQ0FDSEVfS0VZX1BSRUZJWCArIHVzZXIpIGFzIHN0cmluZ1tdO1xuXHRcdFx0Ly8gUmVtb3ZlICcqJyBmcm9tIGdyb3Vwc1xuXHRcdFx0Z3JvdXBzID0gZ3JvdXBzLmZpbHRlcigoZWxlbWVudCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gZWxlbWVudCAhPT0gJyonO1xuXHRcdFx0fSk7XG5cdFx0XHQvLyBTdG9yZSBpbnRvIGFycmF5XG5cdFx0XHRjYWNoZWRRdWVyeVVzZXJzW2NhY2hlZFF1ZXJ5VXNlcnMubGVuZ3RoXSA9IHtuYW1lOiB1c2VyLCBncm91cHN9O1xuXHRcdH1cblx0fVxuXG5cdC8vIFF1ZXJ5IGZyb20gd2ViXG5cdGNvbnN0IHVzdXNlcnMgPSB1c2Vycy5maWx0ZXIoKHYpID0+IHtcblx0XHQvLyBSZW1vdmUgdXNlciB0aGF0IGhhdmUgY2FjaGVkIHVzZXIgZ3JvdXBzIGxvY2FsbHlcblx0XHRyZXR1cm4gIW13LnN0b3JhZ2UuZ2V0T2JqZWN0KENBQ0hFX0tFWV9QUkVGSVggKyB2KTtcblx0fSk7XG5cblx0Ly8gUXVlcnkgcGFyYW1zXG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlVc2Vyc1BhcmFtcyA9IHtcblx0XHR1c3VzZXJzLFxuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0bGlzdDogJ3VzZXJzJyxcblx0XHR1c3Byb3A6ICdncm91cHMnLFxuXHRcdHNtYXhhZ2U6IDYwMCxcblx0XHRtYXhhZ2U6IDYwMCxcblx0fTtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0Ly8gRGUtY29uc3RydWN0IHRoZSByZXNwb25zZSBvYmplY3Rcblx0Y29uc3QgcXVlcnkgPSByZXNwb25zZVsncXVlcnknXSBhcyB7XG5cdFx0dXNlcnM6IHtncm91cHM6IHN0cmluZ1tdOyBuYW1lOiBzdHJpbmd9W107XG5cdH07XG5cdGNvbnN0IHF1ZXJ5VXNlcnMgPSBbLi4uKHF1ZXJ5Py51c2VycyA/PyBbXSksIC4uLmNhY2hlZFF1ZXJ5VXNlcnNdO1xuXG5cdGZvciAoY29uc3QgdXNlciBvZiBxdWVyeVVzZXJzKSB7XG5cdFx0aWYgKHVzZXI/Lmdyb3VwcyAmJiB1c2VyPy5uYW1lKSB7XG5cdFx0XHRsZXQge2dyb3Vwc30gPSB1c2VyO1xuXHRcdFx0Ly8gUmVtb3ZlICcqJyBmcm9tIGdyb3Vwc1xuXHRcdFx0Z3JvdXBzID0gZ3JvdXBzLmZpbHRlcigoZWxlbWVudCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gZWxlbWVudCAhPT0gJyonO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIENhY2hlIGZvciAxIGhvdXJcblx0XHRcdG13LnN0b3JhZ2Uuc2V0T2JqZWN0KENBQ0hFX0tFWV9QUkVGSVggKyB1c2VyLm5hbWUsIGdyb3VwcywgNjAgKiA2MCk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHtxdWVyeToge3VzZXJzOiBxdWVyeVVzZXJzfX07XG59XG5cbmV4cG9ydCB7dHlwZSBRdWVyeVVzZXJHcm91cHMsIHF1ZXJ5VXNlckdyb3Vwc307XG4iLCAidHlwZSBTY3JvbGxUb3AgPSAoXG5cdHRhcmdldEhlaWdodDogbnVtYmVyIHwgc3RyaW5nLFxuXHRlZmZlY3RzT3B0aW9uc09yRHVyYXRpb24/OiBKUXVlcnkuRWZmZWN0c09wdGlvbnM8SFRNTEVsZW1lbnQ+IHwgbnVtYmVyIHwgJ2Zhc3QnIHwgJ3Nsb3cnXG4pID0+IHZvaWQ7XG5cbmNvbnN0IHNjcm9sbFRvcDogU2Nyb2xsVG9wID0gKHRhcmdldEhlaWdodCwgZWZmZWN0c09wdGlvbnNPckR1cmF0aW9uID0ge30pID0+IHtcblx0Y29uc3Qgb3B0aW9uczogSlF1ZXJ5LkVmZmVjdHNPcHRpb25zPEhUTUxFbGVtZW50PiA9XG5cdFx0dHlwZW9mIGVmZmVjdHNPcHRpb25zT3JEdXJhdGlvbiA9PT0gJ251bWJlcicgfHwgdHlwZW9mIGVmZmVjdHNPcHRpb25zT3JEdXJhdGlvbiA9PT0gJ3N0cmluZydcblx0XHRcdD8ge1xuXHRcdFx0XHRcdGR1cmF0aW9uOiBlZmZlY3RzT3B0aW9uc09yRHVyYXRpb24sXG5cdFx0XHRcdFx0ZWFzaW5nOiAnbGluZWFyJyxcblx0XHRcdFx0fVxuXHRcdFx0OiB7XG5cdFx0XHRcdFx0ZHVyYXRpb246ICdzbG93Jyxcblx0XHRcdFx0XHRlYXNpbmc6ICdsaW5lYXInLFxuXHRcdFx0XHRcdC4uLmVmZmVjdHNPcHRpb25zT3JEdXJhdGlvbixcblx0XHRcdFx0fTtcblx0JChkb2N1bWVudCkuZmluZCgnaHRtbCwgYm9keScpLmFuaW1hdGUoXG5cdFx0e1xuXHRcdFx0c2Nyb2xsVG9wOiB0YXJnZXRIZWlnaHQsXG5cdFx0fSxcblx0XHRvcHRpb25zXG5cdCk7XG59O1xuXG5leHBvcnQge3R5cGUgU2Nyb2xsVG9wLCBzY3JvbGxUb3B9O1xuIiwgImltcG9ydCB7Z2VuZXJhdGVBcnJheX0gZnJvbSAnLi9nZW5lcmF0ZUFycmF5JztcblxudHlwZSBVc2VySXNJbkdyb3VwID0gdHlwZW9mIHVzZXJJc0luR3JvdXA7XG5cbmNvbnN0IHVzZXJJc0luR3JvdXAgPSAoZ3JvdXBzOiBzdHJpbmcgfCBzdHJpbmdbXSkgPT4ge1xuXHRjb25zdCB7d2dVc2VyR3JvdXBzLCB3Z0dsb2JhbEdyb3Vwc30gPSBtdy5jb25maWcuZ2V0KCk7XG5cdHJldHVybiBbLi4uKHdnVXNlckdyb3VwcyB8fCBbXSksIC4uLigod2dHbG9iYWxHcm91cHMgYXMgc3RyaW5nW10pIHx8IFtdKV0uc29tZSgoZWxlbWVudDogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG5cdFx0cmV0dXJuIGdlbmVyYXRlQXJyYXkoZ3JvdXBzKS5pbmNsdWRlcyhlbGVtZW50KTtcblx0fSk7XG59O1xuXG5leHBvcnQge3R5cGUgVXNlcklzSW5Hcm91cCwgdXNlcklzSW5Hcm91cH07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsZUFBQSxDQUFBO0FBQUFDLFNBQUFELGNBQUE7RUFBQUUsT0FBQUEsTUFBQUE7RUFBQUMsNkJBQUFBLE1BQUFBO0VBQUFDLG9DQUFBQSxNQUFBQTtFQUFBQyxxQkFBQUEsTUFBQUE7RUFBQUMsbUJBQUFBLE1BQUFBO0VBQUFDLE9BQUFBLE1BQUFBO0VBQUFDLGNBQUFBLE1BQUFBO0VBQUFDLGVBQUFBLE1BQUFBO0VBQUFDLFNBQUFBLE1BQUFBO0VBQUFDLFdBQUFBLE1BQUFBO0VBQUFDLHNCQUFBQSxNQUFBQTtFQUFBQyx1QkFBQUEsTUFBQUE7RUFBQUMsaUJBQUFBLE1BQUFBO0VBQUFDLFdBQUFBLE1BQUFBO0VBQUFDLGFBQUFBLE1BQUFBO0VBQUFDLGVBQUFBLE1BQUFBO0FBQUEsQ0FBQTtBQUFBQyxPQUFBQyxVQUFBQyxhQUFBcEIsWUFBQTs7QUM4Q0EsSUFBTUcsOEJBQTJEQSxDQUFDO0VBQUNrQjtFQUFRQztFQUFNQztFQUFVQyxVQUFVLENBQUM7QUFBQyxNQUFNO0FBQzVHSCxTQUFPSSxpQkFBaUJI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QUFDO0FBQ0Y7IiwKICAibmFtZXMiOiBbIlV0aWxfZXhwb3J0cyIsICJfX2V4cG9ydCIsICJNd1VyaSIsICJhZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXIiLCAiY2hhbmdlT3BhY2l0eVdoZW5Nb3VzZUVudGVyT3JMZWF2ZSIsICJjaGVja0ExMXlDb25maXJtS2V5IiwgImNoZWNrRGVwZW5kZW5jaWVzIiwgImRlbGF5IiwgImZpbmRWYXJpYW50cyIsICJnZW5lcmF0ZUFycmF5IiwgImdldEJvZHkiLCAiaW5pdE13QXBpIiwgIm9vdWlDb25maXJtV2l0aFN0eWxlIiwgInF1ZXJ5R2xvYmFsVXNlckdyb3VwcyIsICJxdWVyeVVzZXJHcm91cHMiLCAic2Nyb2xsVG9wIiwgInVuaXF1ZUFycmF5IiwgInVzZXJJc0luR3JvdXAiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAiX190b0NvbW1vbkpTIiwgInRhcmdldCIsICJ0eXBlIiwgImxpc3RlbmVyIiwgIm9wdGlvbnMiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJyZW1vdmUiLCAicmVtb3ZlRXZlbnRMaXN0ZW5lciIsICJldmVudCIsICJvcGFjaXR5IiwgImN1cnJlbnRUYXJnZXQiLCAic3R5bGUiLCAidG9TdHJpbmciLCAiaW5jbHVkZXMiLCAia2V5IiwgImFyZ3MiLCAiZmxhdE1hcCIsICJhcmciLCAiQXJyYXkiLCAiaXNBcnJheSIsICJOb2RlTGlzdCIsICJ1c2VyQWdlbnQiLCAiYXBpVXJpIiwgIm13IiwgImxvYWRlciIsICJ1c2luZyIsICJhcGlPcHRpb25zIiwgImFqYXgiLCAiaGVhZGVycyIsICJjb25jYXQiLCAiRm9yZWlnbkFwaSIsICJBcGkiLCAidW5pcXVlQXJyYXkyIiwgInJlc3VsdCIsICJfaXRlcmF0b3IyIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwMiIsICJzIiwgIm4iLCAiZG9uZSIsICJpdGVtIiwgInZhbHVlIiwgImxlbmd0aCIsICJlcnIiLCAiZSIsICJmIiwgIl94IiwgIl94MiIsICJfY2hlY2tEZXBlbmRlbmNpZXMiLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImdhZGdldE5hbWVzIiwgIm9wdGlvbiIsICJhcGkiLCAiZ2FkZ2V0cyIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJnYWRnZXQiLCAidXNlciIsICJnZXQiLCAicG9zdFdpdGhFZGl0VG9rZW4iLCAiYWN0aW9uIiwgImNoYW5nZSIsICJtcyIsICJQcm9taXNlIiwgInJlc29sdmUiLCAic2V0VGltZW91dCIsICJfeDMiLCAiX2ZpbmRWYXJpYW50cyIsICJ0ZXh0IiwgIlZBUklBTlRTIiwgImFsbFZhcmlhbnRzIiwgInBhcmFtcyIsICJjb250ZW50bW9kZWwiLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicHJvcCIsICJ0aXRsZSIsICJfaTIiLCAiX1ZBUklBTlRTIiwgIl9yZXNwb25zZSRxdWVyeSIsICJ2YXJpYW50IiwgInVzZWxhbmciLCAicmVzcG9uc2UiLCAicG9zdCIsICJkaXNwbGF5dGl0bGUiLCAidmFyaWFudEVsZW1lbnQiLCAiZG9jdW1lbnQiLCAiY3JlYXRlRWxlbWVudCIsICJpbm5lckhUTUwiLCAidGV4dENvbnRlbnQiLCAiJCIsICJyZWFkeSIsICJ0aGVuIiwgIiRib2R5IiwgIlVSTCIsICJjb25zdHJ1Y3RvciIsICJ1cmwiLCAiYmFzZSIsICJsb2NhdGlvbiIsICJvcmlnaW4iLCAiZXh0ZW5kIiwgIm9iamVjdCIsICJfaSIsICJfT2JqZWN0JGVudHJpZXMiLCAiT2JqZWN0IiwgImVudHJpZXMiLCAic2VhcmNoUGFyYW1zIiwgInNldCIsICJnZXRSZWxhdGl2ZVBhdGgiLCAicGF0aG5hbWUiLCAic2VhcmNoIiwgImhhc2giLCAiaW1wb3J0X3Z1ZTMiLCAicmVxdWlyZSIsICJpbXBvcnRfY29kZXgiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkNvbmZpcm0iLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiQ2FuY2VsIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgInByb3BzIiwgIl9fcHJvcHMiLCAiZW1pdCIsICJfX2VtaXQiLCAiY2xvc2UiLCAiY29uZmlybSIsICJvbkNvbmZpcm0iLCAiY2FuY2VsIiwgIm9uQ2FuY2VsIiwgImhhbmRsZU9wZW5DaGFuZ2UiLCAib3BlbiIsICJpbXBvcnRfdnVlMiIsICJyZW5kZXIiLCAiX2N0eCIsICJfY2FjaGUiLCAiJHByb3BzIiwgIiRzZXR1cCIsICIkZGF0YSIsICIkb3B0aW9ucyIsICJvcGVuQmxvY2siLCAiY3JlYXRlQmxvY2siLCAibWVzc2FnZSIsICJsYWJlbCIsICJhY3Rpb25UeXBlIiwgIm9uUHJpbWFyeSIsICJvbkRlZmF1bHQiLCAiT291aUNvbmZpcm1XaXRoU3R5bGVfZGVmYXVsdCIsICJfX2ZpbGUiLCAiX19zY29wZUlkIiwgIk9vdWlDb25maXJtV2l0aFN0eWxlX2RlZmF1bHQyIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAicm9vdCIsICJib2R5IiwgImFwcGVuZCIsICJzZXR0bGVkIiwgInNldHRsZSIsICJhcHAiLCAidW5tb3VudCIsICJjcmVhdGVBcHAiLCAibW91bnQiLCAiX3g0IiwgIl94NSIsICJfcXVlcnlHbG9iYWxVc2VyR3JvdXBzIiwgImd1aXVzZXIiLCAiQ0FDSEVfS0VZX1BSRUZJWCIsICJncm91cHMiLCAic3RvcmFnZSIsICJnZXRPYmplY3QiLCAiZmlsdGVyIiwgImVsZW1lbnQiLCAibWV0YSIsICJndWlwcm9wIiwgInNtYXhhZ2UiLCAibWF4YWdlIiwgInF1ZXJ5IiwgImdsb2JhbHVzZXJpbmZvIiwgIl9xdWVyeSRnbG9iYWx1c2VyaW5mbyIsICJfcXVlcnkkZ2xvYmFsdXNlcmluZm8yIiwgInNldE9iamVjdCIsICJuYW1lIiwgIl94NiIsICJfcXVlcnlVc2VyR3JvdXBzIiwgInVzZXJzIiwgIl9xdWVyeSR1c2VycyIsICJjYWNoZWRRdWVyeVVzZXJzIiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgInVzdXNlcnMiLCAidiIsICJsaXN0IiwgInVzcHJvcCIsICJxdWVyeVVzZXJzIiwgIl9pMyIsICJfcXVlcnlVc2VycyIsICJ0YXJnZXRIZWlnaHQiLCAiZWZmZWN0c09wdGlvbnNPckR1cmF0aW9uIiwgImR1cmF0aW9uIiwgImVhc2luZyIsICJmaW5kIiwgImFuaW1hdGUiLCAid2dVc2VyR3JvdXBzIiwgIndnR2xvYmFsR3JvdXBzIiwgImNvbmZpZyIsICJzb21lIl0KfQo=

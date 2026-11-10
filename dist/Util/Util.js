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
    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
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
        "Api-User-Agent": userAgent ? `Qiuwen/1.1 (${userAgent})` : "Qiuwen/1.1"
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
  for (const item of args) {
    if (!result.includes(item)) {
      result[result.length] = item;
    }
  }
  return result;
};
//! src/Util/modules/checkDependencies.ts
async function checkDependencies(gadgetNames, option) {
  const api = initMwApi("Util-CheckDependencies");
  const gadgets = uniqueArray(generateArray(gadgetNames));
  option || (option = 1);
  for (const gadget of gadgets) {
    if (option === "0" && mw.user.options.get(`gadget-${gadget}`) === "1" || option === "1" && mw.user.options.get(`gadget-${gadget}`) === "0") {
      await api.postWithEditToken({
        action: "options",
        change: `gadget-${gadget}=${option}`
      });
      await mw.loader.using(`ext.gadget.${gadget}`);
    }
  }
}
//! src/Util/modules/delay.ts
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
    for (const [key, value] of Object.entries(object)) {
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
var oouiConfirmWithStyle = (message) => new Promise(async (resolve) => {
  await mw.loader.using(["@wikimedia/codex", "vue"]);
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


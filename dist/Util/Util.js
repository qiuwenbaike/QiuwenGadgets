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
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
    value: mod,
    enumerable: true
  }) : target,
  mod
));
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
  generateSvgDataUrl: () => generateSvgDataUrl,
  getBody: () => getBody,
  getWpSummaryContent: () => getWpSummaryContent,
  getWpTextbox1Content: () => getWpTextbox1Content,
  initMwApi: () => initMwApi,
  isValidKey: () => isValidKey,
  oouiConfirmWithStyle: () => oouiConfirmWithStyle,
  queryGlobalUserGroups: () => queryGlobalUserGroups,
  queryUserGroups: () => queryUserGroups,
  scrollTop: () => scrollTop,
  setWpSummaryContent: () => setWpSummaryContent,
  setWpTextbox1Content: () => setWpTextbox1Content,
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
        if (option === "0" && mw.user.options.get("gadget-".concat(gadget)) || option === "1" && !mw.user.options.get("gadget-".concat(gadget))) {
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
//! src/Util/modules/generateSvgDataUrl.ts
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
var generateSvgDataUrl = (svg) => {
  /**!
   * SPDX-License-Identifier: MIT
   *
   * @source svg-to-data-uri.js {@link https://github.com/heyallan/svg-to-data-uri/}
   * @author Allan Moreno
   * @license MIT {@link https://github.com/heyallan/svg-to-data-uri/blob/master/LICENSE}
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   */
  svg = svg.trim();
  svg = svg.slice(svg.indexOf("<svg"));
  if (!svg.startsWith("<svg") || !svg.endsWith("svg>")) {
    return "";
  }
  if (!svg.includes("http://www.w3.org/2000/svg")) {
    svg = svg.replace(/<svg/g, "<svg xmlns='http://www.w3.org/2000/svg'");
  }
  svg = svg.replace(/<!--.{1,}-->/g, "");
  svg = svg.replace(/version=["'](.{0,}?)["'](?=[\s>])/g, "");
  svg = svg.replace(/"'(.{1,})'"/g, "'$1'");
  svg = svg.replace(/"/g, "'");
  svg = svg.replace(/>\s{1,}</g, "><");
  svg = svg.replace(/\s{2,}/g, " ");
  svg = svg.trim();
  if (!svg.startsWith("<svg") || !svg.endsWith("svg>")) {
    return "";
  }
  svg = svg.replace(/&/g, "&amp;");
  svg = svg.replace(/[%#<>?[\\\]^`{|}]/g, encodeURIComponent);
  svg = "data:image/svg+xml,".concat(svg);
  return svg;
};
//! src/Util/modules/getBody.ts
var getBody = () => {
  return $.ready.then(() => {
    const $body = $("body");
    return $body;
  });
};
//! src/Util/modules/isValidKey.ts
var isValidKey = (object, key) => {
  return key in object;
};
//! src/Util/modules/mwUri.ts
var MwUri = class extends URL {
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
//! src/Util/modules/oouiConfirmWithStyle.tsx
var import_ext_gadget = __toESM(require("ext.gadget.JSX"), 1);
var oouiConfirmWithStyle = (message) => OO.ui.confirm($(/* @__PURE__ */ import_ext_gadget.default.createElement("div", {
  className: "oo-ui-window-foot",
  style: {
    border: ".1rem solid #0645ad",
    display: "flex",
    justifyContent: "space-evenly"
  }
}, /* @__PURE__ */ import_ext_gadget.default.createElement("span", {
  style: {
    fontSize: "1.2rem",
    fontWeight: "500",
    lineHeight: "1.8",
    padding: ".4em 0"
  }
}, message)))).then((isConfirm) => isConfirm);
//! src/Util/modules/queryGlobalUserGroups.ts
function queryGlobalUserGroups(_x4) {
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
function queryUserGroups(_x5) {
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
//! src/Util/modules/wpSummaryContent.ts
var getWpSummaryContent = ({
  $editForm
}) => {
  var _$editForm$find$val, _$editForm$find;
  return (_$editForm$find$val = (_$editForm$find = $editForm.find("#wpSummary")) === null || _$editForm$find === void 0 ? void 0 : _$editForm$find.val()) !== null && _$editForm$find$val !== void 0 ? _$editForm$find$val : "";
};
var setWpSummaryContent = ({
  $editForm,
  content
}) => {
  $editForm.find("#wpSummary").val(content);
};
//! src/Util/modules/wpTextbox1Content.ts
var getWpTextbox1Content = ({
  $editForm
}) => {
  var _$editForm$find$textS;
  return (_$editForm$find$textS = $editForm.find("#wpTextbox1").textSelection("getContents")) !== null && _$editForm$find$textS !== void 0 ? _$editForm$find$textS : "";
};
var setWpTextbox1Content = ({
  $editForm,
  content
}) => {
  $editForm.find("#wpTextbox1").textSelection("setContents", content);
};

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1V0aWwvVXRpbC50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2FkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlci50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2NoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmUudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9jaGVja0ExMXlDb25maXJtS2V5LnRzIiwgInNyYy9VdGlsL21vZHVsZXMvZ2VuZXJhdGVBcnJheS50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2luaXRNd0FwaS50cyIsICJzcmMvVXRpbC9tb2R1bGVzL3VuaXF1ZUFycmF5LnRzIiwgInNyYy9VdGlsL21vZHVsZXMvY2hlY2tEZXBlbmRlbmNpZXMudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9kZWxheS50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2ZpbmRWYXJpYW50cy50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2dlbmVyYXRlU3ZnRGF0YVVybC50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2dldEJvZHkudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9pc1ZhbGlkS2V5LnRzIiwgInNyYy9VdGlsL21vZHVsZXMvbXdVcmkudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9vb3VpQ29uZmlybVdpdGhTdHlsZS50c3giLCAic3JjL1V0aWwvbW9kdWxlcy9xdWVyeUdsb2JhbFVzZXJHcm91cHMudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9xdWVyeVVzZXJHcm91cHMudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9zY3JvbGxUb3AudHMiLCAic3JjL1V0aWwvbW9kdWxlcy91c2VySXNJbkdyb3VwLnRzIiwgInNyYy9VdGlsL21vZHVsZXMvd3BTdW1tYXJ5Q29udGVudC50cyIsICJzcmMvVXRpbC9tb2R1bGVzL3dwVGV4dGJveDFDb250ZW50LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQge2FkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcn0gZnJvbSAnLi9tb2R1bGVzL2FkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcic7XG5leHBvcnQge2NoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmV9IGZyb20gJy4vbW9kdWxlcy9jaGFuZ2VPcGFjaXR5V2hlbk1vdXNlRW50ZXJPckxlYXZlJztcbmV4cG9ydCB7Y2hlY2tBMTF5Q29uZmlybUtleX0gZnJvbSAnLi9tb2R1bGVzL2NoZWNrQTExeUNvbmZpcm1LZXknO1xuZXhwb3J0IHtjaGVja0RlcGVuZGVuY2llc30gZnJvbSAnLi9tb2R1bGVzL2NoZWNrRGVwZW5kZW5jaWVzLnRzJztcbmV4cG9ydCB7ZGVsYXl9IGZyb20gJy4vbW9kdWxlcy9kZWxheSc7XG5leHBvcnQge2ZpbmRWYXJpYW50c30gZnJvbSAnLi9tb2R1bGVzL2ZpbmRWYXJpYW50cyc7XG5leHBvcnQge2dlbmVyYXRlQXJyYXl9IGZyb20gJy4vbW9kdWxlcy9nZW5lcmF0ZUFycmF5JztcbmV4cG9ydCB7Z2VuZXJhdGVTdmdEYXRhVXJsfSBmcm9tICcuL21vZHVsZXMvZ2VuZXJhdGVTdmdEYXRhVXJsJztcbmV4cG9ydCB7Z2V0Qm9keX0gZnJvbSAnLi9tb2R1bGVzL2dldEJvZHknO1xuZXhwb3J0IHtpbml0TXdBcGl9IGZyb20gJy4vbW9kdWxlcy9pbml0TXdBcGknO1xuZXhwb3J0IHtpc1ZhbGlkS2V5fSBmcm9tICcuL21vZHVsZXMvaXNWYWxpZEtleSc7XG5leHBvcnQge013VXJpfSBmcm9tICcuL21vZHVsZXMvbXdVcmknO1xuZXhwb3J0IHtvb3VpQ29uZmlybVdpdGhTdHlsZX0gZnJvbSAnLi9tb2R1bGVzL29vdWlDb25maXJtV2l0aFN0eWxlJztcbmV4cG9ydCB7cXVlcnlHbG9iYWxVc2VyR3JvdXBzfSBmcm9tICcuL21vZHVsZXMvcXVlcnlHbG9iYWxVc2VyR3JvdXBzJztcbmV4cG9ydCB7cXVlcnlVc2VyR3JvdXBzfSBmcm9tICcuL21vZHVsZXMvcXVlcnlVc2VyR3JvdXBzJztcbmV4cG9ydCB7c2Nyb2xsVG9wfSBmcm9tICcuL21vZHVsZXMvc2Nyb2xsVG9wJztcbmV4cG9ydCB7dXNlcklzSW5Hcm91cH0gZnJvbSAnLi9tb2R1bGVzL3VzZXJJc0luR3JvdXAnO1xuZXhwb3J0IHt1bmlxdWVBcnJheX0gZnJvbSAnLi9tb2R1bGVzL3VuaXF1ZUFycmF5JztcbmV4cG9ydCB7Z2V0V3BTdW1tYXJ5Q29udGVudCwgc2V0V3BTdW1tYXJ5Q29udGVudH0gZnJvbSAnLi9tb2R1bGVzL3dwU3VtbWFyeUNvbnRlbnQnO1xuZXhwb3J0IHtnZXRXcFRleHRib3gxQ29udGVudCwgc2V0V3BUZXh0Ym94MUNvbnRlbnR9IGZyb20gJy4vbW9kdWxlcy93cFRleHRib3gxQ29udGVudCc7XG4iLCAidHlwZSBBZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXIgPSA8XG5cdFRhcmdldCBleHRlbmRzIERvY3VtZW50IHwgSFRNTEVsZW1lbnQgfCBFbGVtZW50IHwgTWVkaWFRdWVyeUxpc3QgfCBXaW5kb3csXG5cdFR5cGUgZXh0ZW5kcyBUYXJnZXQgZXh0ZW5kcyBEb2N1bWVudFxuXHRcdD8ga2V5b2YgRG9jdW1lbnRFdmVudE1hcFxuXHRcdDogVGFyZ2V0IGV4dGVuZHMgSFRNTEVsZW1lbnRcblx0XHRcdD8ga2V5b2YgSFRNTEVsZW1lbnRFdmVudE1hcFxuXHRcdFx0OiBUYXJnZXQgZXh0ZW5kcyBNZWRpYVF1ZXJ5TGlzdFxuXHRcdFx0XHQ/IGtleW9mIE1lZGlhUXVlcnlMaXN0RXZlbnRNYXBcblx0XHRcdFx0OiBUYXJnZXQgZXh0ZW5kcyBXaW5kb3dcblx0XHRcdFx0XHQ/IGtleW9mIFdpbmRvd0V2ZW50TWFwXG5cdFx0XHRcdFx0OiBrZXlvZiBHbG9iYWxFdmVudEhhbmRsZXJzRXZlbnRNYXAsXG5cdExpc3RlbmVyIGV4dGVuZHMgVGFyZ2V0IGV4dGVuZHMgRG9jdW1lbnRcblx0XHQ/IFR5cGUgZXh0ZW5kcyBrZXlvZiBEb2N1bWVudEV2ZW50TWFwXG5cdFx0XHQ/ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBEb2N1bWVudEV2ZW50TWFwW1R5cGVdKSA9PiB1bmtub3duXG5cdFx0XHQ6ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBFdmVudCkgPT4gdW5rbm93blxuXHRcdDogVGFyZ2V0IGV4dGVuZHMgSFRNTEVsZW1lbnRcblx0XHRcdD8gVHlwZSBleHRlbmRzIGtleW9mIEhUTUxFbGVtZW50RXZlbnRNYXBcblx0XHRcdFx0PyAodGhpczogVGFyZ2V0LCBldmVudDogSFRNTEVsZW1lbnRFdmVudE1hcFtUeXBlXSkgPT4gdW5rbm93blxuXHRcdFx0XHQ6ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBFdmVudCkgPT4gdW5rbm93blxuXHRcdFx0OiBUYXJnZXQgZXh0ZW5kcyBFbGVtZW50XG5cdFx0XHRcdD8gVHlwZSBleHRlbmRzIGtleW9mIEVsZW1lbnRFdmVudE1hcFxuXHRcdFx0XHRcdD8gKHRoaXM6IFRhcmdldCwgZXZlbnQ6IEVsZW1lbnRFdmVudE1hcFtUeXBlXSkgPT4gdW5rbm93blxuXHRcdFx0XHRcdDogKHRoaXM6IFRhcmdldCwgZXZlbnQ6IEV2ZW50KSA9PiB1bmtub3duXG5cdFx0XHRcdDogVGFyZ2V0IGV4dGVuZHMgTWVkaWFRdWVyeUxpc3Rcblx0XHRcdFx0XHQ/IFR5cGUgZXh0ZW5kcyBrZXlvZiBNZWRpYVF1ZXJ5TGlzdEV2ZW50TWFwXG5cdFx0XHRcdFx0XHQ/ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBNZWRpYVF1ZXJ5TGlzdEV2ZW50TWFwW1R5cGVdKSA9PiB1bmtub3duXG5cdFx0XHRcdFx0XHQ6ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBFdmVudCkgPT4gdW5rbm93blxuXHRcdFx0XHRcdDogVGFyZ2V0IGV4dGVuZHMgV2luZG93XG5cdFx0XHRcdFx0XHQ/IFR5cGUgZXh0ZW5kcyBrZXlvZiBXaW5kb3dFdmVudE1hcFxuXHRcdFx0XHRcdFx0XHQ/ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBXaW5kb3dFdmVudE1hcFtUeXBlXSkgPT4gdW5rbm93blxuXHRcdFx0XHRcdFx0XHQ6ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBFdmVudCkgPT4gdW5rbm93blxuXHRcdFx0XHRcdFx0OiAodGhpczogVGFyZ2V0LCBldmVudDogRXZlbnQpID0+IHVua25vd24sXG4+KHtcblx0dGFyZ2V0LFxuXHR0eXBlLFxuXHRsaXN0ZW5lcixcblx0b3B0aW9ucyxcbn06IHtcblx0dGFyZ2V0OiBUYXJnZXQ7XG5cdHR5cGU6IFR5cGU7XG5cdGxpc3RlbmVyOiBMaXN0ZW5lcjtcblx0b3B0aW9ucz86IEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zO1xufSkgPT4ge1xuXHRyZW1vdmU6ICgpID0+IHZvaWQ7XG59O1xuXG5jb25zdCBhZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXI6IEFkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3ZlciA9ICh7dGFyZ2V0LCB0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyA9IHt9fSkgPT4ge1xuXHR0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciBhcyBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0LCBvcHRpb25zKTtcblx0cmV0dXJuIHtcblx0XHRyZW1vdmU6ICgpOiB2b2lkID0+IHtcblx0XHRcdHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyIGFzIEV2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3QsIG9wdGlvbnMpO1xuXHRcdH0sXG5cdH07XG59O1xuXG5leHBvcnQge3R5cGUgQWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyLCBhZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXJ9O1xuIiwgInR5cGUgQ2hhbmdlT3BhY2l0eVdoZW5Nb3VzZUVudGVyT3JMZWF2ZSA9IChldmVudDogTW91c2VFdmVudCB8IEpRdWVyeS5UcmlnZ2VyZWRFdmVudCwgb3BhY2l0eT86IG51bWJlcikgPT4gdm9pZDtcblxuY29uc3QgY2hhbmdlT3BhY2l0eVdoZW5Nb3VzZUVudGVyT3JMZWF2ZTogQ2hhbmdlT3BhY2l0eVdoZW5Nb3VzZUVudGVyT3JMZWF2ZSA9IChldmVudCwgb3BhY2l0eSA9IDAuNykgPT4ge1xuXHQoZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MRWxlbWVudCkuc3R5bGUub3BhY2l0eSA9IGV2ZW50LnR5cGUgPT09ICdtb3VzZWVudGVyJyA/ICcxJyA6IG9wYWNpdHkudG9TdHJpbmcoKTtcbn07XG5cbmV4cG9ydCB7dHlwZSBDaGFuZ2VPcGFjaXR5V2hlbk1vdXNlRW50ZXJPckxlYXZlLCBjaGFuZ2VPcGFjaXR5V2hlbk1vdXNlRW50ZXJPckxlYXZlfTtcbiIsICJ0eXBlIENoZWNrQTExeUNvbmZpcm1LZXkgPSAoZXZlbnQ6IEtleWJvYXJkRXZlbnQgfCBNb3VzZUV2ZW50IHwgSlF1ZXJ5LkNsaWNrRXZlbnQgfCBKUXVlcnkuS2V5RG93bkV2ZW50KSA9PiBib29sZWFuO1xuXG5jb25zdCBjaGVja0ExMXlDb25maXJtS2V5OiBDaGVja0ExMXlDb25maXJtS2V5ID0gKGV2ZW50KTogYm9vbGVhbiA9PiB7XG5cdGlmIChbJ2NsaWNrJywgJ2tleWRvd24nXS5pbmNsdWRlcyhldmVudC50eXBlKSkge1xuXHRcdGlmIChldmVudC50eXBlID09PSAna2V5ZG93bicpIHtcblx0XHRcdHJldHVybiBbJ0VudGVyJywgJyAnXS5pbmNsdWRlcygoZXZlbnQgYXMgS2V5Ym9hcmRFdmVudCkua2V5KTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0cmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IHt0eXBlIENoZWNrQTExeUNvbmZpcm1LZXksIGNoZWNrQTExeUNvbmZpcm1LZXl9O1xuIiwgInR5cGUgR2VuZXJhdGVBcnJheSA9IHR5cGVvZiBnZW5lcmF0ZUFycmF5O1xuXG5mdW5jdGlvbiBnZW5lcmF0ZUFycmF5PFQgZXh0ZW5kcyBbXT4oLi4uYXJnczogKFQgfCBUW10pW10pOiBUW107XG5mdW5jdGlvbiBnZW5lcmF0ZUFycmF5PFQgZXh0ZW5kcyBOb2RlTGlzdD4oLi4uYXJnczogKFQgfCBUW10pW10pOiBOb2RlW107XG5mdW5jdGlvbiBnZW5lcmF0ZUFycmF5PFQgPSB1bmtub3duPiguLi5hcmdzOiAoVCB8IFRbXSlbXSk6IFRbXTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLXN0eWxlXG5mdW5jdGlvbiBnZW5lcmF0ZUFycmF5PFQ+KC4uLmFyZ3M6IChUIHwgVFtdKVtdKTogVFtdIHtcblx0cmV0dXJuIGFyZ3MuZmxhdE1hcCgoYXJnKSA9PiB7XG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0cmV0dXJuIGFyZztcblx0XHR9XG5cblx0XHRpZiAoYXJnIGluc3RhbmNlb2YgTm9kZUxpc3QpIHtcblx0XHRcdHJldHVybiBbLi4uYXJnXSBhcyBUO1xuXHRcdH1cblxuXHRcdHJldHVybiBbYXJnXTtcblx0fSk7XG59XG5cbmV4cG9ydCB7dHlwZSBHZW5lcmF0ZUFycmF5LCBnZW5lcmF0ZUFycmF5fTtcbiIsICJ0eXBlIEluaXRNd0FwaSA9IHR5cGVvZiBpbml0TXdBcGk7XG5cbi8qKlxuICogQHJlcXVpcmVzIG1lZGlhd2lraS5hcGlcbiAqIEBwYXJhbSB7c3RyaW5nfSBbdXNlckFnZW50XVxuICogQHBhcmFtIHtzdHJpbmd9IFthcGlVcmldXG4gKiBAcmV0dXJuIHttdy5BcGl8bXcuRm9yZWlnbkFwaX1cbiAqL1xuZnVuY3Rpb24gaW5pdE13QXBpKHVzZXJBZ2VudD86IHN0cmluZyk6IG13LkFwaTtcbmZ1bmN0aW9uIGluaXRNd0FwaSh1c2VyQWdlbnQ6IHN0cmluZywgYXBpVXJpOiBzdHJpbmcpOiBtdy5Gb3JlaWduQXBpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtc3R5bGVcbmZ1bmN0aW9uIGluaXRNd0FwaSh1c2VyQWdlbnQ/OiBzdHJpbmcsIGFwaVVyaT86IHN0cmluZyk6IG13LkFwaSB8IG13LkZvcmVpZ25BcGkge1xuXHRjb25zdCBhcGlPcHRpb25zID0ge1xuXHRcdGFqYXg6IHtcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0J0FwaS1Vc2VyLUFnZW50JzogdXNlckFnZW50ID8gYFFpdXdlbi8xLjEgKCR7dXNlckFnZW50fSlgIDogJ1FpdXdlbi8xLjEnLFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9O1xuXG5cdGlmIChhcGlVcmkpIHtcblx0XHRyZXR1cm4gbmV3IG13LkZvcmVpZ25BcGkoYXBpVXJpLCBhcGlPcHRpb25zKTtcblx0fVxuXG5cdHJldHVybiBuZXcgbXcuQXBpKGFwaU9wdGlvbnMpO1xufVxuXG5leHBvcnQge3R5cGUgSW5pdE13QXBpLCBpbml0TXdBcGl9O1xuIiwgInR5cGUgVW5pcXVlQXJyYXkgPSB0eXBlb2YgdW5pcXVlQXJyYXk7XG5cbmNvbnN0IHVuaXF1ZUFycmF5ID0gZnVuY3Rpb24gdW5pcXVlQXJyYXk8VD4oYXJnczogVFtdKTogVFtdIHtcblx0LyoqIVxuXHQgKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQ0MtQlktU0EtNC4wXG5cdCAqXG5cdCAqIEBzb3VyY2Uge0BsaW5rIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzkyMjk2NDUvcmVtb3ZlLWR1cGxpY2F0ZS12YWx1ZXMtZnJvbS1qcy1hcnJheS85MjI5ODJ9XG5cdCAqIEBsaWNlbnNlIENDLUJZLVNBLTQuMFxuXHQgKi9cblx0Y29uc3QgcmVzdWx0OiB0eXBlb2YgYXJncyA9IFtdO1xuXHRmb3IgKGNvbnN0IGl0ZW0gb2YgYXJncykge1xuXHRcdGlmICghcmVzdWx0LmluY2x1ZGVzKGl0ZW0pKSB7XG5cdFx0XHRyZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSBpdGVtOyAvLyBSZXBsYWNlIEFycmF5I3B1c2ggdG8gYXZvaWQgY29yZS1qcyBwb2x5ZmlsbGluZ1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IHt0eXBlIFVuaXF1ZUFycmF5LCB1bmlxdWVBcnJheX07XG4iLCAiaW1wb3J0IHtnZW5lcmF0ZUFycmF5fSBmcm9tICcuL2dlbmVyYXRlQXJyYXknO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJy4vaW5pdE13QXBpJztcbmltcG9ydCB7dW5pcXVlQXJyYXl9IGZyb20gJy4vdW5pcXVlQXJyYXknO1xuXG50eXBlIEJvb2xlYW4gPSAnMCcgfCAnMScgfCAwIHwgMTtcbnR5cGUgQ2hlY2tEZXBlbmRlbmNpZXMgPSB0eXBlb2YgY2hlY2tEZXBlbmRlbmNpZXM7XG5cbmZ1bmN0aW9uIGNoZWNrRGVwZW5kZW5jaWVzKGdhZGdldE5hbWVzOiBzdHJpbmcgfCBzdHJpbmdbXSk6IFByb21pc2U8dm9pZD47XG5mdW5jdGlvbiBjaGVja0RlcGVuZGVuY2llcyhnYWRnZXROYW1lczogc3RyaW5nLCBvcHRpb246IEJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+O1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtc3R5bGVcbmFzeW5jIGZ1bmN0aW9uIGNoZWNrRGVwZW5kZW5jaWVzKGdhZGdldE5hbWVzOiBzdHJpbmcgfCBzdHJpbmdbXSwgb3B0aW9uPzogQm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaSgnVXRpbC1DaGVja0RlcGVuZGVuY2llcycpO1xuXHRjb25zdCBnYWRnZXRzID0gdW5pcXVlQXJyYXkoZ2VuZXJhdGVBcnJheShnYWRnZXROYW1lcykpO1xuXHRvcHRpb24gfHw9IDE7XG5cblx0Zm9yIChjb25zdCBnYWRnZXQgb2YgZ2FkZ2V0cykge1xuXHRcdGlmIChcblx0XHRcdChvcHRpb24gPT09ICcwJyAmJiBtdy51c2VyLm9wdGlvbnMuZ2V0KGBnYWRnZXQtJHtnYWRnZXR9YCkpIHx8XG5cdFx0XHQob3B0aW9uID09PSAnMScgJiYgIW13LnVzZXIub3B0aW9ucy5nZXQoYGdhZGdldC0ke2dhZGdldH1gKSlcblx0XHQpIHtcblx0XHRcdGF3YWl0IGFwaS5wb3N0V2l0aEVkaXRUb2tlbih7XG5cdFx0XHRcdGFjdGlvbjogJ29wdGlvbnMnLFxuXHRcdFx0XHRjaGFuZ2U6IGBnYWRnZXQtJHtnYWRnZXR9PSR7b3B0aW9ufWAsXG5cdFx0XHR9IGFzIEFwaU9wdGlvbnNQYXJhbXMpO1xuXHRcdFx0YXdhaXQgbXcubG9hZGVyLnVzaW5nKGBleHQuZ2FkZ2V0LiR7Z2FkZ2V0fWApO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQge3R5cGUgQ2hlY2tEZXBlbmRlbmNpZXMsIGNoZWNrRGVwZW5kZW5jaWVzfTtcbiIsICJ0eXBlIERlbGF5ID0gKG1zOiBudW1iZXIpID0+IFByb21pc2U8dm9pZD47XG5cbmNvbnN0IGRlbGF5OiBEZWxheSA9IChtcykgPT4ge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmU6ICgpID0+IHZvaWQpOiB2b2lkID0+IHtcblx0XHRzZXRUaW1lb3V0KHJlc29sdmUsIG1zKTtcblx0fSk7XG59O1xuXG5leHBvcnQge3R5cGUgRGVsYXksIGRlbGF5fTtcbiIsICJpbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnLi9pbml0TXdBcGknO1xuaW1wb3J0IHt1bmlxdWVBcnJheX0gZnJvbSAnLi91bmlxdWVBcnJheSc7XG5cbnR5cGUgRmluZFZhcmlhbnRzID0gdHlwZW9mIGZpbmRWYXJpYW50cztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtc3R5bGVcbmFzeW5jIGZ1bmN0aW9uIGZpbmRWYXJpYW50cyh0ZXh0OiBzdHJpbmcpIHtcblx0Y29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoJ1V0aWwtRmluZFZhcmlhbnRzJyk7XG5cblx0Y29uc3QgVkFSSUFOVFMgPSBbJ3poLWhhbnMnLCAnemgtaGFudCcsICd6aC1jbicsICd6aC1oaycsICd6aC1tbycsICd6aC1zZycsICd6aC1teScsICd6aC10dyddO1xuXG5cdGNvbnN0IGFsbFZhcmlhbnRzOiBzdHJpbmdbXSA9IFtdO1xuXG5cdGNvbnN0IHBhcmFtczogQXBpUGFyc2VQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdGNvbnRlbnRtb2RlbDogJ3dpa2l0ZXh0Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cHJvcDogWydkaXNwbGF5dGl0bGUnXSxcblx0XHR0aXRsZTogJ3RlbXAnLFxuXHRcdHRleHQsXG5cdH07XG5cblx0Zm9yIChjb25zdCB2YXJpYW50IG9mIFZBUklBTlRTKSB7XG5cdFx0cGFyYW1zLnVzZWxhbmcgPSB2YXJpYW50O1xuXHRcdHBhcmFtcy52YXJpYW50ID0gdmFyaWFudDtcblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KHBhcmFtcyk7XG5cblx0XHRjb25zdCBkaXNwbGF5dGl0bGUgPSByZXNwb25zZT8uWydxdWVyeSddPy5kaXNwbGF5dGl0bGUgYXMgc3RyaW5nO1xuXHRcdGNvbnN0IHZhcmlhbnRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmFyaWFudCcpO1xuXHRcdHZhcmlhbnRFbGVtZW50LmlubmVySFRNTCA9IGRpc3BsYXl0aXRsZTtcblxuXHRcdGlmICh2YXJpYW50RWxlbWVudC50ZXh0Q29udGVudCkge1xuXHRcdFx0YWxsVmFyaWFudHNbYWxsVmFyaWFudHMubGVuZ3RoXSA9IHZhcmlhbnRFbGVtZW50LnRleHRDb250ZW50O1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB1bmlxdWVBcnJheShhbGxWYXJpYW50cyk7XG59XG5cbmV4cG9ydCB7dHlwZSBGaW5kVmFyaWFudHMsIGZpbmRWYXJpYW50c307XG4iLCAidHlwZSBHZW5lcmF0ZVN2Z0RhdGFVcmwgPSAoc3ZnOiBzdHJpbmcpID0+IHN0cmluZztcblxuY29uc3QgZ2VuZXJhdGVTdmdEYXRhVXJsOiBHZW5lcmF0ZVN2Z0RhdGFVcmwgPSAoc3ZnKSA9PiB7XG5cdC8qKiFcblx0ICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVFxuXHQgKlxuXHQgKiBAc291cmNlIHN2Zy10by1kYXRhLXVyaS5qcyB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2hleWFsbGFuL3N2Zy10by1kYXRhLXVyaS99XG5cdCAqIEBhdXRob3IgQWxsYW4gTW9yZW5vXG5cdCAqIEBsaWNlbnNlIE1JVCB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2hleWFsbGFuL3N2Zy10by1kYXRhLXVyaS9ibG9iL21hc3Rlci9MSUNFTlNFfVxuXHQgKlxuXHQgKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdCAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0ICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHQgKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdCAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHQgKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXHQgKlxuXHQgKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0ICogY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblx0ICpcblx0ICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHQgKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0ICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdCAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0ICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0ICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0ICogU09GVFdBUkUuXG5cdCAqL1xuXHRzdmcgPSBzdmcudHJpbSgpO1xuXHQvLyByZW1vdmUgeG1sLCBkb2N0eXBlLCBnZW5lcmF0b3IuLi5cblx0c3ZnID0gc3ZnLnNsaWNlKHN2Zy5pbmRleE9mKCc8c3ZnJykpO1xuXHQvLyBzb2Z0IHZhbGlkYXRlXG5cdGlmICghc3ZnLnN0YXJ0c1dpdGgoJzxzdmcnKSB8fCAhc3ZnLmVuZHNXaXRoKCdzdmc+JykpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblx0Ly8gYWRkIG5hbWVzcGFjZSBpZiBuZWNlc3Nhcnlcblx0aWYgKCFzdmcuaW5jbHVkZXMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJykpIHtcblx0XHRzdmcgPSBzdmcucmVwbGFjZSgvPHN2Zy9nLCBcIjxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1wiKTtcblx0fVxuXHQvLyByZW1vdmUgY29tbWVudHNcblx0c3ZnID0gc3ZnLnJlcGxhY2UoLzwhLS0uezEsfS0tPi9nLCAnJyk7XG5cdC8vIHJlbW92ZSB1bm5lY2Vzc2FyeSBhdHRyaWJ1dGVzXG5cdHN2ZyA9IHN2Zy5yZXBsYWNlKC92ZXJzaW9uPVtcIiddKC57MCx9PylbXCInXSg/PVtcXHM+XSkvZywgJycpO1xuXHQvLyByZXBsYWNlIG5lc3RlZCBxdW90ZXNcblx0c3ZnID0gc3ZnLnJlcGxhY2UoL1wiJyguezEsfSknXCIvZywgXCInJDEnXCIpO1xuXHQvLyByZXBsYWNlIGRvdWJsZSBxdW90ZXNcblx0c3ZnID0gc3ZnLnJlcGxhY2UoL1wiL2csIFwiJ1wiKTtcblx0Ly8gcmVtb3ZlIGVtcHR5IHNwYWNlcyBiZXR3ZWVuIHRhZ3Ncblx0c3ZnID0gc3ZnLnJlcGxhY2UoLz5cXHN7MSx9PC9nLCAnPjwnKTtcblx0Ly8gcmVtb3ZlIGR1cGxpY2F0ZSBzcGFjZXNcblx0c3ZnID0gc3ZnLnJlcGxhY2UoL1xcc3syLH0vZywgJyAnKTtcblx0Ly8gdHJpbSBhZ2FpblxuXHRzdmcgPSBzdmcudHJpbSgpO1xuXHQvLyBzb2Z0IHZhbGlkYXRlIGFnYWluXG5cdGlmICghc3ZnLnN0YXJ0c1dpdGgoJzxzdmcnKSB8fCAhc3ZnLmVuZHNXaXRoKCdzdmc+JykpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblx0Ly8gcmVwbGFjZSBhbXBlcnNhbmRcblx0c3ZnID0gc3ZnLnJlcGxhY2UoLyYvZywgJyZhbXA7Jyk7XG5cdC8vIGVuY29kZSBvbmx5IHVuc2FmZSBzeW1ib2xzXG5cdHN2ZyA9IHN2Zy5yZXBsYWNlKC9bJSM8Pj9bXFxcXFxcXV5ge3x9XS9nLCBlbmNvZGVVUklDb21wb25lbnQpO1xuXHQvLyBidWlsZCBkYXRhIHVyaVxuXHRzdmcgPSBgZGF0YTppbWFnZS9zdmcreG1sLCR7c3ZnfWA7XG5cdC8vIG9rLCBzaGlwIGl0IVxuXHRyZXR1cm4gc3ZnO1xufTtcblxuZXhwb3J0IHt0eXBlIEdlbmVyYXRlU3ZnRGF0YVVybCwgZ2VuZXJhdGVTdmdEYXRhVXJsfTtcbiIsICJ0eXBlIEdldEJvZHkgPSAoKSA9PiBKUXVlcnkuVGhlbmFibGU8SlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4+O1xuXG5jb25zdCBnZXRCb2R5ID0gKCkgPT4ge1xuXHRyZXR1cm4gJC5yZWFkeS50aGVuKCgpOiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PiA9PiB7XG5cdFx0Y29uc3QgJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+ID0gJCgnYm9keScpO1xuXG5cdFx0cmV0dXJuICRib2R5O1xuXHR9KTtcbn07XG5cbmV4cG9ydCB7dHlwZSBHZXRCb2R5LCBnZXRCb2R5fTtcbiIsICJ0eXBlIElzVmFsaWRLZXkgPSB0eXBlb2YgaXNWYWxpZEtleTtcblxuY29uc3QgaXNWYWxpZEtleSA9IChvYmplY3Q6IG9iamVjdCwga2V5OiBzdHJpbmcgfCBudW1iZXIgfCBzeW1ib2wpOiBrZXkgaXMga2V5b2YgdHlwZW9mIG9iamVjdCA9PiB7XG5cdHJldHVybiBrZXkgaW4gb2JqZWN0O1xufTtcblxuZXhwb3J0IHt0eXBlIElzVmFsaWRLZXksIGlzVmFsaWRLZXl9O1xuIiwgInR5cGUgQ2xhc3NNd1VyaSA9IHR5cGVvZiBNd1VyaTtcblxuY2xhc3MgTXdVcmkgZXh0ZW5kcyBVUkwge1xuXHRleHRlbmQob2JqZWN0OiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSkge1xuXHRcdGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG9iamVjdCkpIHtcblx0XHRcdHRoaXMuc2VhcmNoUGFyYW1zLnNldChrZXksIHZhbHVlKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0Z2V0UmVsYXRpdmVQYXRoKCkge1xuXHRcdHJldHVybiB0aGlzLnBhdGhuYW1lICsgdGhpcy5zZWFyY2ggKyB0aGlzLmhhc2g7XG5cdH1cbn1cblxuZXhwb3J0IHt0eXBlIENsYXNzTXdVcmksIE13VXJpfTtcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5KU1gnO1xuXG50eXBlIE9vdWlDb25maXJtV2l0aFN0eWxlID0gKG1lc3NhZ2U6IHN0cmluZykgPT4gSlF1ZXJ5LlByb21pc2U8Ym9vbGVhbj47XG5cbi8qKlxuICogQHJlcXVpcmVzIG9vanMtdWktd2luZG93c1xuICogQHBhcmFtIHtzdHJpbmd9IFttZXNzYWdlXVxuICogQHJldHVybiB7SlF1ZXJ5LlByb21pc2U8Ym9vbGVhbj59XG4gKi9cbmNvbnN0IG9vdWlDb25maXJtV2l0aFN0eWxlOiBPb3VpQ29uZmlybVdpdGhTdHlsZSA9IChtZXNzYWdlKSA9PlxuXHRPTy51aVxuXHRcdC5jb25maXJtKFxuXHRcdFx0JChcblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cIm9vLXVpLXdpbmRvdy1mb290XCJcblx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0Ym9yZGVyOiAnLjFyZW0gc29saWQgIzA2NDVhZCcsXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiAnZmxleCcsXG5cdFx0XHRcdFx0XHRqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWV2ZW5seScsXG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxzcGFuXG5cdFx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRmb250U2l6ZTogJzEuMnJlbScsXG5cdFx0XHRcdFx0XHRcdGZvbnRXZWlnaHQ6ICc1MDAnLFxuXHRcdFx0XHRcdFx0XHRsaW5lSGVpZ2h0OiAnMS44Jyxcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogJy40ZW0gMCcsXG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdHttZXNzYWdlfVxuXHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpIGFzIEpRdWVyeVxuXHRcdClcblx0XHQudGhlbigoaXNDb25maXJtOiBib29sZWFuKTogYm9vbGVhbiA9PiBpc0NvbmZpcm0pO1xuXG5leHBvcnQge3R5cGUgT291aUNvbmZpcm1XaXRoU3R5bGUsIG9vdWlDb25maXJtV2l0aFN0eWxlfTtcbiIsICJpbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnLi9pbml0TXdBcGknO1xuXG50eXBlIFF1ZXJ5R2xvYmFsVXNlckdyb3VwcyA9IHR5cGVvZiBxdWVyeUdsb2JhbFVzZXJHcm91cHM7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLXN0eWxlXG5hc3luYyBmdW5jdGlvbiBxdWVyeUdsb2JhbFVzZXJHcm91cHMoZ3VpdXNlcjogc3RyaW5nKSB7XG5cdGNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKCdVdGlsLVF1ZXJ5R2xvYmFsVXNlckdyb3VwcycpO1xuXG5cdGNvbnN0IENBQ0hFX0tFWV9QUkVGSVggPSAnZXh0LmdhZGdldC5VdGlsX3F1ZXJ5R2xvYmFsVXNlckdyb3Vwcy0nO1xuXG5cdGxldCBncm91cHM6IHN0cmluZ1tdID0gW107XG5cblx0Ly8gUXVlcnkgZnJvbSBjYWNoZVxuXHQvLyBDaGVjayBpZiB1c2VyIGdyb3VwIGluZm8gaXMgY2FjaGVkIGluIExvY2FsU3RvcmFnZVxuXHQvLyBJZiBjYWNoZWQsIGdldCB0aGVtIGZyb20gTG9jYWxTdG9yYWdlXG5cdGlmIChtdy5zdG9yYWdlLmdldE9iamVjdChDQUNIRV9LRVlfUFJFRklYICsgZ3VpdXNlcikpIHtcblx0XHRncm91cHMgPSBtdy5zdG9yYWdlLmdldE9iamVjdChDQUNIRV9LRVlfUFJFRklYICsgZ3VpdXNlcikgYXMgc3RyaW5nW107XG5cdFx0Ly8gUmVtb3ZlICcqJyBmcm9tIGdyb3Vwc1xuXHRcdGdyb3VwcyA9IGdyb3Vwcy5maWx0ZXIoKGVsZW1lbnQpID0+IHtcblx0XHRcdHJldHVybiBlbGVtZW50ICE9PSAnKic7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gUXVlcnkgZnJvbSB3ZWJcblx0XHQvLyBRdWVyeSBwYXJhbXNcblx0XHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdG1ldGE6ICdnbG9iYWx1c2VyaW5mbycsXG5cdFx0XHRndWl1c2VyLFxuXHRcdFx0Z3VpcHJvcDogJ2dyb3VwcycsXG5cdFx0XHRzbWF4YWdlOiA2MDAsXG5cdFx0XHRtYXhhZ2U6IDYwMCxcblx0XHR9O1xuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXG5cdFx0Ly8gRGUtY29uc3RydWN0IHRoZSByZXNwb25zZSBvYmplY3Rcblx0XHRjb25zdCBxdWVyeSA9IHJlc3BvbnNlWydxdWVyeSddIGFzIHtcblx0XHRcdGdsb2JhbHVzZXJpbmZvOiB7Z3JvdXBzOiBzdHJpbmdbXTsgbmFtZTogc3RyaW5nfTtcblx0XHR9O1xuXG5cdFx0aWYgKHF1ZXJ5Py5nbG9iYWx1c2VyaW5mbykge1xuXHRcdFx0Z3JvdXBzID0gcXVlcnkuZ2xvYmFsdXNlcmluZm8/Lmdyb3VwcyA/PyBbXTtcblx0XHRcdC8vIFJlbW92ZSAnKicgZnJvbSBncm91cHNcblx0XHRcdGdyb3VwcyA9IGdyb3Vwcy5maWx0ZXIoKGVsZW1lbnQpID0+IHtcblx0XHRcdFx0cmV0dXJuIGVsZW1lbnQgIT09ICcqJztcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBDYWNoZSBmb3IgMSBob3VyXG5cdFx0XHRtdy5zdG9yYWdlLnNldE9iamVjdChDQUNIRV9LRVlfUFJFRklYICsgZ3VpdXNlciwgZ3JvdXBzLCA2MCAqIDYwKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4ge3F1ZXJ5OiB7Z2xvYmFsdXNlcmluZm86IHtuYW1lOiBndWl1c2VyLCBncm91cHN9fX07XG59XG5cbmV4cG9ydCB7dHlwZSBRdWVyeUdsb2JhbFVzZXJHcm91cHMsIHF1ZXJ5R2xvYmFsVXNlckdyb3Vwc307XG4iLCAiaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJy4vaW5pdE13QXBpJztcblxudHlwZSBRdWVyeVVzZXJHcm91cHMgPSB0eXBlb2YgcXVlcnlVc2VyR3JvdXBzO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1zdHlsZVxuYXN5bmMgZnVuY3Rpb24gcXVlcnlVc2VyR3JvdXBzKHVzZXJzOiBzdHJpbmdbXSkge1xuXHRjb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaSgnVXRpbC1RdWVyeVVzZXJHcm91cHMnKTtcblxuXHRjb25zdCBDQUNIRV9LRVlfUFJFRklYID0gJ2V4dC5nYWRnZXQuVXRpbF9xdWVyeVVzZXJHcm91cHMtJztcblxuXHRjb25zdCBjYWNoZWRRdWVyeVVzZXJzOiB7Z3JvdXBzOiBzdHJpbmdbXTsgbmFtZTogc3RyaW5nfVtdID0gW107XG5cblx0Ly8gUXVlcnkgZnJvbSBjYWNoZVxuXHRmb3IgKGNvbnN0IHVzZXIgb2YgdXNlcnMpIHtcblx0XHQvLyBDaGVjayBpZiB1c2VyIGdyb3VwIGluZm8gaXMgY2FjaGVkIGluIExvY2FsU3RvcmFnZVxuXHRcdC8vIElmIGNhY2hlZCwgZ2V0IHRoZW0gZnJvbSBMb2NhbFN0b3JhZ2Vcblx0XHRpZiAobXcuc3RvcmFnZS5nZXRPYmplY3QoQ0FDSEVfS0VZX1BSRUZJWCArIHVzZXIpKSB7XG5cdFx0XHRsZXQgZ3JvdXBzID0gbXcuc3RvcmFnZS5nZXRPYmplY3QoQ0FDSEVfS0VZX1BSRUZJWCArIHVzZXIpIGFzIHN0cmluZ1tdO1xuXHRcdFx0Ly8gUmVtb3ZlICcqJyBmcm9tIGdyb3Vwc1xuXHRcdFx0Z3JvdXBzID0gZ3JvdXBzLmZpbHRlcigoZWxlbWVudCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gZWxlbWVudCAhPT0gJyonO1xuXHRcdFx0fSk7XG5cdFx0XHQvLyBTdG9yZSBpbnRvIGFycmF5XG5cdFx0XHRjYWNoZWRRdWVyeVVzZXJzW2NhY2hlZFF1ZXJ5VXNlcnMubGVuZ3RoXSA9IHtuYW1lOiB1c2VyLCBncm91cHN9O1xuXHRcdH1cblx0fVxuXG5cdC8vIFF1ZXJ5IGZyb20gd2ViXG5cdGNvbnN0IHVzdXNlcnMgPSB1c2Vycy5maWx0ZXIoKHYpID0+IHtcblx0XHQvLyBSZW1vdmUgdXNlciB0aGF0IGhhdmUgY2FjaGVkIHVzZXIgZ3JvdXBzIGxvY2FsbHlcblx0XHRyZXR1cm4gIW13LnN0b3JhZ2UuZ2V0T2JqZWN0KENBQ0hFX0tFWV9QUkVGSVggKyB2KTtcblx0fSk7XG5cblx0Ly8gUXVlcnkgcGFyYW1zXG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlVc2Vyc1BhcmFtcyA9IHtcblx0XHR1c3VzZXJzLFxuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0bGlzdDogJ3VzZXJzJyxcblx0XHR1c3Byb3A6ICdncm91cHMnLFxuXHRcdHNtYXhhZ2U6IDYwMCxcblx0XHRtYXhhZ2U6IDYwMCxcblx0fTtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0Ly8gRGUtY29uc3RydWN0IHRoZSByZXNwb25zZSBvYmplY3Rcblx0Y29uc3QgcXVlcnkgPSByZXNwb25zZVsncXVlcnknXSBhcyB7XG5cdFx0dXNlcnM6IHtncm91cHM6IHN0cmluZ1tdOyBuYW1lOiBzdHJpbmd9W107XG5cdH07XG5cdGNvbnN0IHF1ZXJ5VXNlcnMgPSBbLi4uKHF1ZXJ5Py51c2VycyA/PyBbXSksIC4uLmNhY2hlZFF1ZXJ5VXNlcnNdO1xuXG5cdGZvciAoY29uc3QgdXNlciBvZiBxdWVyeVVzZXJzKSB7XG5cdFx0aWYgKHVzZXI/Lmdyb3VwcyAmJiB1c2VyPy5uYW1lKSB7XG5cdFx0XHRsZXQge2dyb3Vwc30gPSB1c2VyO1xuXHRcdFx0Ly8gUmVtb3ZlICcqJyBmcm9tIGdyb3Vwc1xuXHRcdFx0Z3JvdXBzID0gZ3JvdXBzLmZpbHRlcigoZWxlbWVudCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gZWxlbWVudCAhPT0gJyonO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIENhY2hlIGZvciAxIGhvdXJcblx0XHRcdG13LnN0b3JhZ2Uuc2V0T2JqZWN0KENBQ0hFX0tFWV9QUkVGSVggKyB1c2VyLm5hbWUsIGdyb3VwcywgNjAgKiA2MCk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHtxdWVyeToge3VzZXJzOiBxdWVyeVVzZXJzfX07XG59XG5cbmV4cG9ydCB7dHlwZSBRdWVyeVVzZXJHcm91cHMsIHF1ZXJ5VXNlckdyb3Vwc307XG4iLCAidHlwZSBTY3JvbGxUb3AgPSAoXG5cdHRhcmdldEhlaWdodDogbnVtYmVyIHwgc3RyaW5nLFxuXHRlZmZlY3RzT3B0aW9uc09yRHVyYXRpb24/OiBKUXVlcnkuRWZmZWN0c09wdGlvbnM8SFRNTEVsZW1lbnQ+IHwgbnVtYmVyIHwgJ2Zhc3QnIHwgJ3Nsb3cnXG4pID0+IHZvaWQ7XG5cbmNvbnN0IHNjcm9sbFRvcDogU2Nyb2xsVG9wID0gKHRhcmdldEhlaWdodCwgZWZmZWN0c09wdGlvbnNPckR1cmF0aW9uID0ge30pID0+IHtcblx0Y29uc3Qgb3B0aW9uczogSlF1ZXJ5LkVmZmVjdHNPcHRpb25zPEhUTUxFbGVtZW50PiA9XG5cdFx0dHlwZW9mIGVmZmVjdHNPcHRpb25zT3JEdXJhdGlvbiA9PT0gJ251bWJlcicgfHwgdHlwZW9mIGVmZmVjdHNPcHRpb25zT3JEdXJhdGlvbiA9PT0gJ3N0cmluZydcblx0XHRcdD8ge1xuXHRcdFx0XHRcdGR1cmF0aW9uOiBlZmZlY3RzT3B0aW9uc09yRHVyYXRpb24sXG5cdFx0XHRcdFx0ZWFzaW5nOiAnbGluZWFyJyxcblx0XHRcdFx0fVxuXHRcdFx0OiB7XG5cdFx0XHRcdFx0ZHVyYXRpb246ICdzbG93Jyxcblx0XHRcdFx0XHRlYXNpbmc6ICdsaW5lYXInLFxuXHRcdFx0XHRcdC4uLmVmZmVjdHNPcHRpb25zT3JEdXJhdGlvbixcblx0XHRcdFx0fTtcblx0JChkb2N1bWVudCkuZmluZCgnaHRtbCwgYm9keScpLmFuaW1hdGUoXG5cdFx0e1xuXHRcdFx0c2Nyb2xsVG9wOiB0YXJnZXRIZWlnaHQsXG5cdFx0fSxcblx0XHRvcHRpb25zXG5cdCk7XG59O1xuXG5leHBvcnQge3R5cGUgU2Nyb2xsVG9wLCBzY3JvbGxUb3B9O1xuIiwgImltcG9ydCB7Z2VuZXJhdGVBcnJheX0gZnJvbSAnLi9nZW5lcmF0ZUFycmF5JztcblxudHlwZSBVc2VySXNJbkdyb3VwID0gdHlwZW9mIHVzZXJJc0luR3JvdXA7XG5cbmNvbnN0IHVzZXJJc0luR3JvdXAgPSAoZ3JvdXBzOiBzdHJpbmcgfCBzdHJpbmdbXSkgPT4ge1xuXHRjb25zdCB7d2dVc2VyR3JvdXBzLCB3Z0dsb2JhbEdyb3Vwc30gPSBtdy5jb25maWcuZ2V0KCk7XG5cdHJldHVybiBbLi4uKHdnVXNlckdyb3VwcyB8fCBbXSksIC4uLigod2dHbG9iYWxHcm91cHMgYXMgc3RyaW5nW10pIHx8IFtdKV0uc29tZSgoZWxlbWVudDogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG5cdFx0cmV0dXJuIGdlbmVyYXRlQXJyYXkoZ3JvdXBzKS5pbmNsdWRlcyhlbGVtZW50KTtcblx0fSk7XG59O1xuXG5leHBvcnQge3R5cGUgVXNlcklzSW5Hcm91cCwgdXNlcklzSW5Hcm91cH07XG4iLCAidHlwZSBHZXRXcFN1bW1hcnlDb250ZW50ID0gdHlwZW9mIGdldFdwU3VtbWFyeUNvbnRlbnQ7XG50eXBlIFNldFdwU3VtbWFyeUNvbnRlbnQgPSB0eXBlb2Ygc2V0V3BTdW1tYXJ5Q29udGVudDtcblxuY29uc3QgZ2V0V3BTdW1tYXJ5Q29udGVudCA9ICh7JGVkaXRGb3JtfTogeyRlZGl0Rm9ybTogSlF1ZXJ5PEhUTUxFbGVtZW50Pn0pOiBzdHJpbmcgPT4ge1xuXHRyZXR1cm4gJGVkaXRGb3JtLmZpbmQ8SFRNTElucHV0RWxlbWVudD4oJyN3cFN1bW1hcnknKT8udmFsKCkgPz8gJyc7XG59O1xuXG5jb25zdCBzZXRXcFN1bW1hcnlDb250ZW50ID0gKHskZWRpdEZvcm0sIGNvbnRlbnR9OiB7JGVkaXRGb3JtOiBKUXVlcnk8SFRNTEVsZW1lbnQ+OyBjb250ZW50OiBzdHJpbmd9KTogdm9pZCA9PiB7XG5cdCRlZGl0Rm9ybS5maW5kPEhUTUxJbnB1dEVsZW1lbnQ+KCcjd3BTdW1tYXJ5JykudmFsKGNvbnRlbnQpO1xufTtcblxuZXhwb3J0IHtnZXRXcFN1bW1hcnlDb250ZW50LCB0eXBlIEdldFdwU3VtbWFyeUNvbnRlbnQsIHNldFdwU3VtbWFyeUNvbnRlbnQsIHR5cGUgU2V0V3BTdW1tYXJ5Q29udGVudH07XG4iLCAidHlwZSBHZXRXcFRleHRib3gxQ29udGVudCA9IHR5cGVvZiBnZXRXcFRleHRib3gxQ29udGVudDtcbnR5cGUgU2V0V3BUZXh0Ym94MUNvbnRlbnQgPSB0eXBlb2Ygc2V0V3BUZXh0Ym94MUNvbnRlbnQ7XG5cbmNvbnN0IGdldFdwVGV4dGJveDFDb250ZW50ID0gKHskZWRpdEZvcm19OiB7JGVkaXRGb3JtOiBKUXVlcnk8SFRNTEVsZW1lbnQ+fSk6IHN0cmluZyA9PiB7XG5cdHJldHVybiAkZWRpdEZvcm0uZmluZDxIVE1MVGV4dEFyZWFFbGVtZW50PignI3dwVGV4dGJveDEnKS50ZXh0U2VsZWN0aW9uKCdnZXRDb250ZW50cycpID8/ICcnO1xufTtcblxuY29uc3Qgc2V0V3BUZXh0Ym94MUNvbnRlbnQgPSAoeyRlZGl0Rm9ybSwgY29udGVudH06IHskZWRpdEZvcm06IEpRdWVyeTxIVE1MRWxlbWVudD47IGNvbnRlbnQ6IHN0cmluZ30pOiB2b2lkID0+IHtcblx0JGVkaXRGb3JtLmZpbmQ8SFRNTFRleHRBcmVhRWxlbWVudD4oJyN3cFRleHRib3gxJykudGV4dFNlbGVjdGlvbignc2V0Q29udGVudHMnLCBjb250ZW50KTtcbn07XG5cbmV4cG9ydCB7Z2V0V3BUZXh0Ym94MUNvbnRlbnQsIHR5cGUgR2V0V3BUZXh0Ym94MUNvbnRlbnQsIHNldFdwVGV4dGJveDFDb250ZW50LCB0eXBlIFNldFdwVGV4dGJveDFDb250ZW50fTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsZUFBQSxDQUFBO0FBQUFDLFNBQUFELGNBQUE7RUFBQUUsT0FBQUEsTUFBQUE7RUFBQUMsNkJBQUFBLE1BQUFBO0VBQUFDLG9DQUFBQSxNQUFBQTtFQUFBQyxxQkFBQUEsTUFBQUE7RUFBQUMsbUJBQUFBLE1BQUFBO0VBQUFDLE9BQUFBLE1BQUFBO0VBQUFDLGNBQUFBLE1BQUFBO0VBQUFDLGVBQUFBLE1BQUFBO0VBQUFDLG9CQUFBQSxNQUFBQTtFQUFBQyxTQUFBQSxNQUFBQTtFQUFBQyxxQkFBQUEsTUFB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TUFBK0Q7QUFDL0dKLFlBQVVOLEtBQTBCLGFBQWEsRUFBRVksY0FBYyxlQUFlRixPQUFPO0FBQ3hGOyIsCiAgIm5hbWVzIjogWyJVdGlsX2V4cG9ydHMiLCAiX19leHBvcnQiLCAiTXdVcmkiLCAiYWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyIiwgImNoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmUiLCAiY2hlY2tBMTF5Q29uZmlybUtleSIsICJjaGVja0RlcGVuZGVuY2llcyIsICJkZWxheSIsICJmaW5kVmFyaWFudHMiLCAiZ2VuZXJhdGVBcnJheSIsICJnZW5lcmF0ZVN2Z0RhdGFVcmwiLCAiZ2V0Qm9keSIsICJnZXRXcFN1bW1hcnlDb250ZW50IiwgImdldFdwVGV4dGJveDFDb250ZW50IiwgImluaXRNd0FwaSIsICJpc1ZhbGlkS2V5IiwgIm9vdWlDb25maXJtV2l0aFN0eWxlIiwgInF1ZXJ5R2xvYmFsVXNlckdyb3VwcyIsICJxdWVyeVVzZXJHcm91cHMiLCAic2Nyb2xsVG9wIiwgInNldFdwU3VtbWFyeUNvbnRlbnQiLCAic2V0V3BUZXh0Ym94MUNvbnRlbnQiLCAidW5pcXVlQXJyYXkiLCAidXNlcklzSW5Hcm91cCIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJfX3RvQ29tbW9uSlMiLCAidGFyZ2V0IiwgInR5cGUiLCAibGlzdGVuZXIiLCAib3B0aW9ucyIsICJhZGRFdmVudExpc3RlbmVyIiwgInJlbW92ZSIsICJyZW1vdmVFdmVudExpc3RlbmVyIiwgImV2ZW50IiwgIm9wYWNpdHkiLCAiY3VycmVudFRhcmdldCIsICJzdHlsZSIsICJ0b1N0cmluZyIsICJpbmNsdWRlcyIsICJrZXkiLCAiYXJncyIsICJmbGF0TWFwIiwgImFyZyIsICJBcnJheSIsICJpc0FycmF5IiwgIk5vZGVMaXN0IiwgInVzZXJBZ2VudCIsICJhcGlVcmkiLCAiYXBpT3B0aW9ucyIsICJhamF4IiwgImhlYWRlcnMiLCAiY29uY2F0IiwgIm13IiwgIkZvcmVpZ25BcGkiLCAiQXBpIiwgInVuaXF1ZUFycmF5MiIsICJyZXN1bHQiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcDIiLCAicyIsICJuIiwgImRvbmUiLCAiaXRlbSIsICJ2YWx1ZSIsICJsZW5ndGgiLCAiZXJyIiwgImUiLCAiZiIsICJfeCIsICJfeDIiLCAiX2NoZWNrRGVwZW5kZW5jaWVzIiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJnYWRnZXROYW1lcyIsICJvcHRpb24iLCAiYXBpIiwgImdhZGdldHMiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAiZ2FkZ2V0IiwgInVzZXIiLCAiZ2V0IiwgInBvc3RXaXRoRWRpdFRva2VuIiwgImFjdGlvbiIsICJjaGFuZ2UiLCAibG9hZGVyIiwgInVzaW5nIiwgIm1zIiwgIlByb21pc2UiLCAicmVzb2x2ZSIsICJzZXRUaW1lb3V0IiwgIl94MyIsICJfZmluZFZhcmlhbnRzIiwgInRleHQiLCAiVkFSSUFOVFMiLCAiYWxsVmFyaWFudHMiLCAicGFyYW1zIiwgImNvbnRlbnRtb2RlbCIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgInRpdGxlIiwgIl9pMiIsICJfVkFSSUFOVFMiLCAiX3Jlc3BvbnNlJHF1ZXJ5IiwgInZhcmlhbnQiLCAidXNlbGFuZyIsICJyZXNwb25zZSIsICJwb3N0IiwgImRpc3BsYXl0aXRsZSIsICJ2YXJpYW50RWxlbWVudCIsICJkb2N1bWVudCIsICJjcmVhdGVFbGVtZW50IiwgImlubmVySFRNTCIsICJ0ZXh0Q29udGVudCIsICJzdmciLCAidHJpbSIsICJzbGljZSIsICJpbmRleE9mIiwgInN0YXJ0c1dpdGgiLCAiZW5kc1dpdGgiLCAicmVwbGFjZSIsICJlbmNvZGVVUklDb21wb25lbnQiLCAiJCIsICJyZWFkeSIsICJ0aGVuIiwgIiRib2R5IiwgIm9iamVjdCIsICJVUkwiLCAiZXh0ZW5kIiwgIl9pIiwgIl9PYmplY3QkZW50cmllcyIsICJPYmplY3QiLCAiZW50cmllcyIsICJzZWFyY2hQYXJhbXMiLCAic2V0IiwgImdldFJlbGF0aXZlUGF0aCIsICJwYXRobmFtZSIsICJzZWFyY2giLCAiaGFzaCIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAibWVzc2FnZSIsICJPTyIsICJ1aSIsICJjb25maXJtIiwgImRlZmF1bHQiLCAiY2xhc3NOYW1lIiwgImJvcmRlciIsICJkaXNwbGF5IiwgImp1c3RpZnlDb250ZW50IiwgImZvbnRTaXplIiwgImZvbnRXZWlnaHQiLCAibGluZUhlaWdodCIsICJwYWRkaW5nIiwgImlzQ29uZmlybSIsICJfeDQiLCAiX3F1ZXJ5R2xvYmFsVXNlckdyb3VwcyIsICJndWl1c2VyIiwgIkNBQ0hFX0tFWV9QUkVGSVgiLCAiZ3JvdXBzIiwgInN0b3JhZ2UiLCAiZ2V0T2JqZWN0IiwgImZpbHRlciIsICJlbGVtZW50IiwgIm1ldGEiLCAiZ3VpcHJvcCIsICJzbWF4YWdlIiwgIm1heGFnZSIsICJxdWVyeSIsICJnbG9iYWx1c2VyaW5mbyIsICJfcXVlcnkkZ2xvYmFsdXNlcmluZm8iLCAiX3F1ZXJ5JGdsb2JhbHVzZXJpbmZvMiIsICJzZXRPYmplY3QiLCAibmFtZSIsICJfeDUiLCAiX3F1ZXJ5VXNlckdyb3VwcyIsICJ1c2VycyIsICJfcXVlcnkkdXNlcnMiLCAiY2FjaGVkUXVlcnlVc2VycyIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJ1c3VzZXJzIiwgInYiLCAibGlzdCIsICJ1c3Byb3AiLCAicXVlcnlVc2VycyIsICJfaTMiLCAiX3F1ZXJ5VXNlcnMiLCAidGFyZ2V0SGVpZ2h0IiwgImVmZmVjdHNPcHRpb25zT3JEdXJhdGlvbiIsICJkdXJhdGlvbiIsICJlYXNpbmciLCAiZmluZCIsICJhbmltYXRlIiwgIndnVXNlckdyb3VwcyIsICJ3Z0dsb2JhbEdyb3VwcyIsICJjb25maWciLCAic29tZSIsICIkZWRpdEZvcm0iLCAiXyRlZGl0Rm9ybSRmaW5kJHZhbCIsICJfJGVkaXRGb3JtJGZpbmQiLCAidmFsIiwgImNvbnRlbnQiLCAiXyRlZGl0Rm9ybSRmaW5kJHRleHRTIiwgInRleHRTZWxlY3Rpb24iXQp9Cg==

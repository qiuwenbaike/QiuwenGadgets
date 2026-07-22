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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1V0aWwvVXRpbC50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2FkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlci50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2NoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmUudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9jaGVja0ExMXlDb25maXJtS2V5LnRzIiwgInNyYy9VdGlsL21vZHVsZXMvZ2VuZXJhdGVBcnJheS50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2luaXRNd0FwaS50cyIsICJzcmMvVXRpbC9tb2R1bGVzL3VuaXF1ZUFycmF5LnRzIiwgInNyYy9VdGlsL21vZHVsZXMvY2hlY2tEZXBlbmRlbmNpZXMudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9kZWxheS50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2ZpbmRWYXJpYW50cy50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2dlbmVyYXRlU3ZnRGF0YVVybC50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2dldEJvZHkudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9pc1ZhbGlkS2V5LnRzIiwgInNyYy9VdGlsL21vZHVsZXMvbXdVcmkudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9vb3VpQ29uZmlybVdpdGhTdHlsZS50c3giLCAic3JjL1V0aWwvbW9kdWxlcy9xdWVyeUdsb2JhbFVzZXJHcm91cHMudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9xdWVyeVVzZXJHcm91cHMudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9zY3JvbGxUb3AudHMiLCAic3JjL1V0aWwvbW9kdWxlcy91c2VySXNJbkdyb3VwLnRzIiwgInNyYy9VdGlsL21vZHVsZXMvd3BTdW1tYXJ5Q29udGVudC50cyIsICJzcmMvVXRpbC9tb2R1bGVzL3dwVGV4dGJveDFDb250ZW50LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQge2FkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcn0gZnJvbSAnLi9tb2R1bGVzL2FkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcic7XG5leHBvcnQge2NoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmV9IGZyb20gJy4vbW9kdWxlcy9jaGFuZ2VPcGFjaXR5V2hlbk1vdXNlRW50ZXJPckxlYXZlJztcbmV4cG9ydCB7Y2hlY2tBMTF5Q29uZmlybUtleX0gZnJvbSAnLi9tb2R1bGVzL2NoZWNrQTExeUNvbmZpcm1LZXknO1xuZXhwb3J0IHtjaGVja0RlcGVuZGVuY2llc30gZnJvbSAnLi9tb2R1bGVzL2NoZWNrRGVwZW5kZW5jaWVzLnRzJztcbmV4cG9ydCB7ZGVsYXl9IGZyb20gJy4vbW9kdWxlcy9kZWxheSc7XG5leHBvcnQge2ZpbmRWYXJpYW50c30gZnJvbSAnLi9tb2R1bGVzL2ZpbmRWYXJpYW50cyc7XG5leHBvcnQge2dlbmVyYXRlQXJyYXl9IGZyb20gJy4vbW9kdWxlcy9nZW5lcmF0ZUFycmF5JztcbmV4cG9ydCB7Z2VuZXJhdGVTdmdEYXRhVXJsfSBmcm9tICcuL21vZHVsZXMvZ2VuZXJhdGVTdmdEYXRhVXJsJztcbmV4cG9ydCB7Z2V0Qm9keX0gZnJvbSAnLi9tb2R1bGVzL2dldEJvZHknO1xuZXhwb3J0IHtpbml0TXdBcGl9IGZyb20gJy4vbW9kdWxlcy9pbml0TXdBcGknO1xuZXhwb3J0IHtpc1ZhbGlkS2V5fSBmcm9tICcuL21vZHVsZXMvaXNWYWxpZEtleSc7XG5leHBvcnQge013VXJpfSBmcm9tICcuL21vZHVsZXMvbXdVcmknO1xuZXhwb3J0IHtvb3VpQ29uZmlybVdpdGhTdHlsZX0gZnJvbSAnLi9tb2R1bGVzL29vdWlDb25maXJtV2l0aFN0eWxlJztcbmV4cG9ydCB7cXVlcnlHbG9iYWxVc2VyR3JvdXBzfSBmcm9tICcuL21vZHVsZXMvcXVlcnlHbG9iYWxVc2VyR3JvdXBzJztcbmV4cG9ydCB7cXVlcnlVc2VyR3JvdXBzfSBmcm9tICcuL21vZHVsZXMvcXVlcnlVc2VyR3JvdXBzJztcbmV4cG9ydCB7c2Nyb2xsVG9wfSBmcm9tICcuL21vZHVsZXMvc2Nyb2xsVG9wJztcbmV4cG9ydCB7dXNlcklzSW5Hcm91cH0gZnJvbSAnLi9tb2R1bGVzL3VzZXJJc0luR3JvdXAnO1xuZXhwb3J0IHt1bmlxdWVBcnJheX0gZnJvbSAnLi9tb2R1bGVzL3VuaXF1ZUFycmF5JztcbmV4cG9ydCB7Z2V0V3BTdW1tYXJ5Q29udGVudCwgc2V0V3BTdW1tYXJ5Q29udGVudH0gZnJvbSAnLi9tb2R1bGVzL3dwU3VtbWFyeUNvbnRlbnQnO1xuZXhwb3J0IHtnZXRXcFRleHRib3gxQ29udGVudCwgc2V0V3BUZXh0Ym94MUNvbnRlbnR9IGZyb20gJy4vbW9kdWxlcy93cFRleHRib3gxQ29udGVudCc7XG4iLCAidHlwZSBBZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXIgPSA8XG5cdFRhcmdldCBleHRlbmRzIERvY3VtZW50IHwgSFRNTEVsZW1lbnQgfCBFbGVtZW50IHwgTWVkaWFRdWVyeUxpc3QgfCBXaW5kb3csXG5cdFR5cGUgZXh0ZW5kcyAoVGFyZ2V0IGV4dGVuZHMgRG9jdW1lbnRcblx0XHQ/IGtleW9mIERvY3VtZW50RXZlbnRNYXBcblx0XHQ6IFRhcmdldCBleHRlbmRzIEhUTUxFbGVtZW50XG5cdFx0XHQ/IGtleW9mIEhUTUxFbGVtZW50RXZlbnRNYXBcblx0XHRcdDogVGFyZ2V0IGV4dGVuZHMgTWVkaWFRdWVyeUxpc3Rcblx0XHRcdFx0PyBrZXlvZiBNZWRpYVF1ZXJ5TGlzdEV2ZW50TWFwXG5cdFx0XHRcdDogVGFyZ2V0IGV4dGVuZHMgV2luZG93XG5cdFx0XHRcdFx0PyBrZXlvZiBXaW5kb3dFdmVudE1hcFxuXHRcdFx0XHRcdDoga2V5b2YgR2xvYmFsRXZlbnRIYW5kbGVyc0V2ZW50TWFwKSxcblx0TGlzdGVuZXIgZXh0ZW5kcyAoVGFyZ2V0IGV4dGVuZHMgRG9jdW1lbnRcblx0XHQ/IFR5cGUgZXh0ZW5kcyBrZXlvZiBEb2N1bWVudEV2ZW50TWFwXG5cdFx0XHQ/ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBEb2N1bWVudEV2ZW50TWFwW1R5cGVdKSA9PiB1bmtub3duXG5cdFx0XHQ6ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBFdmVudCkgPT4gdW5rbm93blxuXHRcdDogVGFyZ2V0IGV4dGVuZHMgSFRNTEVsZW1lbnRcblx0XHRcdD8gVHlwZSBleHRlbmRzIGtleW9mIEhUTUxFbGVtZW50RXZlbnRNYXBcblx0XHRcdFx0PyAodGhpczogVGFyZ2V0LCBldmVudDogSFRNTEVsZW1lbnRFdmVudE1hcFtUeXBlXSkgPT4gdW5rbm93blxuXHRcdFx0XHQ6ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBFdmVudCkgPT4gdW5rbm93blxuXHRcdFx0OiBUYXJnZXQgZXh0ZW5kcyBFbGVtZW50XG5cdFx0XHRcdD8gVHlwZSBleHRlbmRzIGtleW9mIEVsZW1lbnRFdmVudE1hcFxuXHRcdFx0XHRcdD8gKHRoaXM6IFRhcmdldCwgZXZlbnQ6IEVsZW1lbnRFdmVudE1hcFtUeXBlXSkgPT4gdW5rbm93blxuXHRcdFx0XHRcdDogKHRoaXM6IFRhcmdldCwgZXZlbnQ6IEV2ZW50KSA9PiB1bmtub3duXG5cdFx0XHRcdDogVGFyZ2V0IGV4dGVuZHMgTWVkaWFRdWVyeUxpc3Rcblx0XHRcdFx0XHQ/IFR5cGUgZXh0ZW5kcyBrZXlvZiBNZWRpYVF1ZXJ5TGlzdEV2ZW50TWFwXG5cdFx0XHRcdFx0XHQ/ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBNZWRpYVF1ZXJ5TGlzdEV2ZW50TWFwW1R5cGVdKSA9PiB1bmtub3duXG5cdFx0XHRcdFx0XHQ6ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBFdmVudCkgPT4gdW5rbm93blxuXHRcdFx0XHRcdDogVGFyZ2V0IGV4dGVuZHMgV2luZG93XG5cdFx0XHRcdFx0XHQ/IFR5cGUgZXh0ZW5kcyBrZXlvZiBXaW5kb3dFdmVudE1hcFxuXHRcdFx0XHRcdFx0XHQ/ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBXaW5kb3dFdmVudE1hcFtUeXBlXSkgPT4gdW5rbm93blxuXHRcdFx0XHRcdFx0XHQ6ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBFdmVudCkgPT4gdW5rbm93blxuXHRcdFx0XHRcdFx0OiAodGhpczogVGFyZ2V0LCBldmVudDogRXZlbnQpID0+IHVua25vd24pLFxuPih7XG5cdHRhcmdldCxcblx0dHlwZSxcblx0bGlzdGVuZXIsXG5cdG9wdGlvbnMsXG59OiB7XG5cdHRhcmdldDogVGFyZ2V0O1xuXHR0eXBlOiBUeXBlO1xuXHRsaXN0ZW5lcjogTGlzdGVuZXI7XG5cdG9wdGlvbnM/OiBBZGRFdmVudExpc3RlbmVyT3B0aW9ucztcbn0pID0+IHtcblx0cmVtb3ZlOiAoKSA9PiB2b2lkO1xufTtcblxuY29uc3QgYWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyOiBBZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXIgPSAoe3RhcmdldCwgdHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMgPSB7fX0pID0+IHtcblx0dGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIgYXMgRXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdCwgb3B0aW9ucyk7XG5cdHJldHVybiB7XG5cdFx0cmVtb3ZlOiAoKTogdm9pZCA9PiB7XG5cdFx0XHR0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciBhcyBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0LCBvcHRpb25zKTtcblx0XHR9LFxuXHR9O1xufTtcblxuZXhwb3J0IHt0eXBlIEFkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3ZlciwgYWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyfTtcbiIsICJ0eXBlIENoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmUgPSAoZXZlbnQ6IE1vdXNlRXZlbnQgfCBKUXVlcnkuVHJpZ2dlcmVkRXZlbnQsIG9wYWNpdHk/OiBudW1iZXIpID0+IHZvaWQ7XG5cbmNvbnN0IGNoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmU6IENoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmUgPSAoZXZlbnQsIG9wYWNpdHkgPSAwLjcpID0+IHtcblx0KGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLm9wYWNpdHkgPSBldmVudC50eXBlID09PSAnbW91c2VlbnRlcicgPyAnMScgOiBvcGFjaXR5LnRvU3RyaW5nKCk7XG59O1xuXG5leHBvcnQge3R5cGUgQ2hhbmdlT3BhY2l0eVdoZW5Nb3VzZUVudGVyT3JMZWF2ZSwgY2hhbmdlT3BhY2l0eVdoZW5Nb3VzZUVudGVyT3JMZWF2ZX07XG4iLCAidHlwZSBDaGVja0ExMXlDb25maXJtS2V5ID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50IHwgTW91c2VFdmVudCB8IEpRdWVyeS5DbGlja0V2ZW50IHwgSlF1ZXJ5LktleURvd25FdmVudCkgPT4gYm9vbGVhbjtcblxuY29uc3QgY2hlY2tBMTF5Q29uZmlybUtleTogQ2hlY2tBMTF5Q29uZmlybUtleSA9IChldmVudCk6IGJvb2xlYW4gPT4ge1xuXHRpZiAoWydjbGljaycsICdrZXlkb3duJ10uaW5jbHVkZXMoZXZlbnQudHlwZSkpIHtcblx0XHRpZiAoZXZlbnQudHlwZSA9PT0gJ2tleWRvd24nKSB7XG5cdFx0XHRyZXR1cm4gWydFbnRlcicsICcgJ10uaW5jbHVkZXMoKGV2ZW50IGFzIEtleWJvYXJkRXZlbnQpLmtleSk7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCB7dHlwZSBDaGVja0ExMXlDb25maXJtS2V5LCBjaGVja0ExMXlDb25maXJtS2V5fTtcbiIsICJ0eXBlIEdlbmVyYXRlQXJyYXkgPSB0eXBlb2YgZ2VuZXJhdGVBcnJheTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVBcnJheTxUIGV4dGVuZHMgW10+KC4uLmFyZ3M6IChUIHwgVFtdKVtdKTogVFtdO1xuZnVuY3Rpb24gZ2VuZXJhdGVBcnJheTxUIGV4dGVuZHMgTm9kZUxpc3Q+KC4uLmFyZ3M6IChUIHwgVFtdKVtdKTogTm9kZVtdO1xuZnVuY3Rpb24gZ2VuZXJhdGVBcnJheTxUID0gdW5rbm93bj4oLi4uYXJnczogKFQgfCBUW10pW10pOiBUW107XG5mdW5jdGlvbiBnZW5lcmF0ZUFycmF5PFQ+KC4uLmFyZ3M6IChUIHwgVFtdKVtdKTogVFtdIHtcblx0cmV0dXJuIGFyZ3MuZmxhdE1hcCgoYXJnKSA9PiB7XG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0cmV0dXJuIGFyZztcblx0XHR9XG5cblx0XHRpZiAoYXJnIGluc3RhbmNlb2YgTm9kZUxpc3QpIHtcblx0XHRcdHJldHVybiBbLi4uYXJnXSBhcyBUO1xuXHRcdH1cblxuXHRcdHJldHVybiBbYXJnXTtcblx0fSk7XG59XG5cbmV4cG9ydCB7dHlwZSBHZW5lcmF0ZUFycmF5LCBnZW5lcmF0ZUFycmF5fTtcbiIsICJ0eXBlIEluaXRNd0FwaSA9IHR5cGVvZiBpbml0TXdBcGk7XG5cbi8qKlxuICogQHJlcXVpcmVzIG1lZGlhd2lraS5hcGlcbiAqIEBwYXJhbSB7c3RyaW5nfSBbdXNlckFnZW50XVxuICogQHBhcmFtIHtzdHJpbmd9IFthcGlVcmldXG4gKiBAcmV0dXJuIHttdy5BcGl8bXcuRm9yZWlnbkFwaX1cbiAqL1xuZnVuY3Rpb24gaW5pdE13QXBpKHVzZXJBZ2VudD86IHN0cmluZyk6IG13LkFwaTtcbmZ1bmN0aW9uIGluaXRNd0FwaSh1c2VyQWdlbnQ6IHN0cmluZywgYXBpVXJpOiBzdHJpbmcpOiBtdy5Gb3JlaWduQXBpO1xuZnVuY3Rpb24gaW5pdE13QXBpKHVzZXJBZ2VudD86IHN0cmluZywgYXBpVXJpPzogc3RyaW5nKTogbXcuQXBpIHwgbXcuRm9yZWlnbkFwaSB7XG5cdGNvbnN0IGFwaU9wdGlvbnMgPSB7XG5cdFx0YWpheDoge1xuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHQnQXBpLVVzZXItQWdlbnQnOiB1c2VyQWdlbnQgPyBgUWl1d2VuLzEuMSAoJHt1c2VyQWdlbnR9KWAgOiAnUWl1d2VuLzEuMScsXG5cdFx0XHR9LFxuXHRcdH0sXG5cdH07XG5cblx0aWYgKGFwaVVyaSkge1xuXHRcdHJldHVybiBuZXcgbXcuRm9yZWlnbkFwaShhcGlVcmksIGFwaU9wdGlvbnMpO1xuXHR9XG5cblx0cmV0dXJuIG5ldyBtdy5BcGkoYXBpT3B0aW9ucyk7XG59XG5cbmV4cG9ydCB7dHlwZSBJbml0TXdBcGksIGluaXRNd0FwaX07XG4iLCAidHlwZSBVbmlxdWVBcnJheSA9IHR5cGVvZiB1bmlxdWVBcnJheTtcblxuY29uc3QgdW5pcXVlQXJyYXkgPSBmdW5jdGlvbiB1bmlxdWVBcnJheTxUPihhcmdzOiBUW10pOiBUW10ge1xuXHQvKiohXG5cdCAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBDQy1CWS1TQS00LjBcblx0ICpcblx0ICogQHNvdXJjZSB7QGxpbmsgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvOTIyOTY0NS9yZW1vdmUtZHVwbGljYXRlLXZhbHVlcy1mcm9tLWpzLWFycmF5LzkyMjk4Mn1cblx0ICogQGxpY2Vuc2UgQ0MtQlktU0EtNC4wXG5cdCAqL1xuXHRjb25zdCByZXN1bHQ6IHR5cGVvZiBhcmdzID0gW107XG5cdGZvciAoY29uc3QgaXRlbSBvZiBhcmdzKSB7XG5cdFx0aWYgKCFyZXN1bHQuaW5jbHVkZXMoaXRlbSkpIHtcblx0XHRcdHJlc3VsdFtyZXN1bHQubGVuZ3RoXSA9IGl0ZW07IC8vIFJlcGxhY2UgQXJyYXkjcHVzaCB0byBhdm9pZCBjb3JlLWpzIHBvbHlmaWxsaW5nXG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQge3R5cGUgVW5pcXVlQXJyYXksIHVuaXF1ZUFycmF5fTtcbiIsICJpbXBvcnQge2dlbmVyYXRlQXJyYXl9IGZyb20gJy4vZ2VuZXJhdGVBcnJheSc7XG5pbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnLi9pbml0TXdBcGknO1xuaW1wb3J0IHt1bmlxdWVBcnJheX0gZnJvbSAnLi91bmlxdWVBcnJheSc7XG5cbnR5cGUgQm9vbGVhbiA9ICcwJyB8ICcxJyB8IDAgfCAxO1xudHlwZSBDaGVja0RlcGVuZGVuY2llcyA9IHR5cGVvZiBjaGVja0RlcGVuZGVuY2llcztcblxuZnVuY3Rpb24gY2hlY2tEZXBlbmRlbmNpZXMoZ2FkZ2V0TmFtZXM6IHN0cmluZyB8IHN0cmluZ1tdKTogUHJvbWlzZTx2b2lkPjtcbmZ1bmN0aW9uIGNoZWNrRGVwZW5kZW5jaWVzKGdhZGdldE5hbWVzOiBzdHJpbmcsIG9wdGlvbjogQm9vbGVhbik6IFByb21pc2U8dm9pZD47XG5hc3luYyBmdW5jdGlvbiBjaGVja0RlcGVuZGVuY2llcyhnYWRnZXROYW1lczogc3RyaW5nIHwgc3RyaW5nW10sIG9wdGlvbj86IEJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoJ1V0aWwtQ2hlY2tEZXBlbmRlbmNpZXMnKTtcblx0Y29uc3QgZ2FkZ2V0cyA9IHVuaXF1ZUFycmF5KGdlbmVyYXRlQXJyYXkoZ2FkZ2V0TmFtZXMpKTtcblx0b3B0aW9uIHx8PSAxO1xuXG5cdGZvciAoY29uc3QgZ2FkZ2V0IG9mIGdhZGdldHMpIHtcblx0XHRpZiAoXG5cdFx0XHQob3B0aW9uID09PSAnMCcgJiYgbXcudXNlci5vcHRpb25zLmdldChgZ2FkZ2V0LSR7Z2FkZ2V0fWApID09PSAnMScpIHx8XG5cdFx0XHQob3B0aW9uID09PSAnMScgJiYgbXcudXNlci5vcHRpb25zLmdldChgZ2FkZ2V0LSR7Z2FkZ2V0fWApID09PSAnMCcpXG5cdFx0KSB7XG5cdFx0XHRhd2FpdCBhcGkucG9zdFdpdGhFZGl0VG9rZW4oe1xuXHRcdFx0XHRhY3Rpb246ICdvcHRpb25zJyxcblx0XHRcdFx0Y2hhbmdlOiBgZ2FkZ2V0LSR7Z2FkZ2V0fT0ke29wdGlvbn1gLFxuXHRcdFx0fSBhcyBBcGlPcHRpb25zUGFyYW1zKTtcblx0XHRcdGF3YWl0IG13LmxvYWRlci51c2luZyhgZXh0LmdhZGdldC4ke2dhZGdldH1gKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IHt0eXBlIENoZWNrRGVwZW5kZW5jaWVzLCBjaGVja0RlcGVuZGVuY2llc307XG4iLCAidHlwZSBEZWxheSA9IChtczogbnVtYmVyKSA9PiBQcm9taXNlPHZvaWQ+O1xuXG5jb25zdCBkZWxheTogRGVsYXkgPSAobXMpID0+IHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlOiAoKSA9PiB2b2lkKTogdm9pZCA9PiB7XG5cdFx0c2V0VGltZW91dChyZXNvbHZlLCBtcyk7XG5cdH0pO1xufTtcblxuZXhwb3J0IHt0eXBlIERlbGF5LCBkZWxheX07XG4iLCAiaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJy4vaW5pdE13QXBpJztcbmltcG9ydCB7dW5pcXVlQXJyYXl9IGZyb20gJy4vdW5pcXVlQXJyYXknO1xuXG50eXBlIEZpbmRWYXJpYW50cyA9IHR5cGVvZiBmaW5kVmFyaWFudHM7XG5cbmFzeW5jIGZ1bmN0aW9uIGZpbmRWYXJpYW50cyh0ZXh0OiBzdHJpbmcpIHtcblx0Y29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoJ1V0aWwtRmluZFZhcmlhbnRzJyk7XG5cblx0Y29uc3QgVkFSSUFOVFMgPSBbJ3poLWhhbnMnLCAnemgtaGFudCcsICd6aC1jbicsICd6aC1oaycsICd6aC1tbycsICd6aC1zZycsICd6aC1teScsICd6aC10dyddO1xuXG5cdGNvbnN0IGFsbFZhcmlhbnRzOiBzdHJpbmdbXSA9IFtdO1xuXG5cdGNvbnN0IHBhcmFtczogQXBpUGFyc2VQYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdGNvbnRlbnRtb2RlbDogJ3dpa2l0ZXh0Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cHJvcDogWydkaXNwbGF5dGl0bGUnXSxcblx0XHR0aXRsZTogJ3RlbXAnLFxuXHRcdHRleHQsXG5cdH07XG5cblx0Zm9yIChjb25zdCB2YXJpYW50IG9mIFZBUklBTlRTKSB7XG5cdFx0cGFyYW1zLnVzZWxhbmcgPSB2YXJpYW50O1xuXHRcdHBhcmFtcy52YXJpYW50ID0gdmFyaWFudDtcblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KHBhcmFtcyk7XG5cblx0XHRjb25zdCBkaXNwbGF5dGl0bGUgPSByZXNwb25zZT8uWydxdWVyeSddPy5kaXNwbGF5dGl0bGUgYXMgc3RyaW5nO1xuXHRcdGNvbnN0IHZhcmlhbnRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmFyaWFudCcpO1xuXHRcdHZhcmlhbnRFbGVtZW50LmlubmVySFRNTCA9IGRpc3BsYXl0aXRsZTtcblxuXHRcdGlmICh2YXJpYW50RWxlbWVudC50ZXh0Q29udGVudCkge1xuXHRcdFx0YWxsVmFyaWFudHNbYWxsVmFyaWFudHMubGVuZ3RoXSA9IHZhcmlhbnRFbGVtZW50LnRleHRDb250ZW50O1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB1bmlxdWVBcnJheShhbGxWYXJpYW50cyk7XG59XG5cbmV4cG9ydCB7dHlwZSBGaW5kVmFyaWFudHMsIGZpbmRWYXJpYW50c307XG4iLCAidHlwZSBHZW5lcmF0ZVN2Z0RhdGFVcmwgPSAoc3ZnOiBzdHJpbmcpID0+IHN0cmluZztcblxuY29uc3QgZ2VuZXJhdGVTdmdEYXRhVXJsOiBHZW5lcmF0ZVN2Z0RhdGFVcmwgPSAoc3ZnKSA9PiB7XG5cdC8qKiFcblx0ICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVFxuXHQgKlxuXHQgKiBAc291cmNlIHN2Zy10by1kYXRhLXVyaS5qcyB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2hleWFsbGFuL3N2Zy10by1kYXRhLXVyaS99XG5cdCAqIEBhdXRob3IgQWxsYW4gTW9yZW5vXG5cdCAqIEBsaWNlbnNlIE1JVCB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2hleWFsbGFuL3N2Zy10by1kYXRhLXVyaS9ibG9iL21hc3Rlci9MSUNFTlNFfVxuXHQgKlxuXHQgKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdCAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0ICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHQgKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdCAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHQgKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXHQgKlxuXHQgKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0ICogY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblx0ICpcblx0ICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHQgKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0ICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdCAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0ICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0ICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0ICogU09GVFdBUkUuXG5cdCAqL1xuXHRzdmcgPSBzdmcudHJpbSgpO1xuXHQvLyByZW1vdmUgeG1sLCBkb2N0eXBlLCBnZW5lcmF0b3IuLi5cblx0c3ZnID0gc3ZnLnNsaWNlKHN2Zy5pbmRleE9mKCc8c3ZnJykpO1xuXHQvLyBzb2Z0IHZhbGlkYXRlXG5cdGlmICghc3ZnLnN0YXJ0c1dpdGgoJzxzdmcnKSB8fCAhc3ZnLmVuZHNXaXRoKCdzdmc+JykpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblx0Ly8gYWRkIG5hbWVzcGFjZSBpZiBuZWNlc3Nhcnlcblx0aWYgKCFzdmcuaW5jbHVkZXMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJykpIHtcblx0XHRzdmcgPSBzdmcucmVwbGFjZSgvPHN2Zy9nLCBcIjxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1wiKTtcblx0fVxuXHQvLyByZW1vdmUgY29tbWVudHNcblx0c3ZnID0gc3ZnLnJlcGxhY2UoLzwhLS0uezEsfS0tPi9nLCAnJyk7XG5cdC8vIHJlbW92ZSB1bm5lY2Vzc2FyeSBhdHRyaWJ1dGVzXG5cdHN2ZyA9IHN2Zy5yZXBsYWNlKC92ZXJzaW9uPVtcIiddKC57MCx9PylbXCInXSg/PVtcXHM+XSkvZywgJycpO1xuXHQvLyByZXBsYWNlIG5lc3RlZCBxdW90ZXNcblx0c3ZnID0gc3ZnLnJlcGxhY2UoL1wiJyguezEsfSknXCIvZywgXCInJDEnXCIpO1xuXHQvLyByZXBsYWNlIGRvdWJsZSBxdW90ZXNcblx0c3ZnID0gc3ZnLnJlcGxhY2UoL1wiL2csIFwiJ1wiKTtcblx0Ly8gcmVtb3ZlIGVtcHR5IHNwYWNlcyBiZXR3ZWVuIHRhZ3Ncblx0c3ZnID0gc3ZnLnJlcGxhY2UoLz5cXHN7MSx9PC9nLCAnPjwnKTtcblx0Ly8gcmVtb3ZlIGR1cGxpY2F0ZSBzcGFjZXNcblx0c3ZnID0gc3ZnLnJlcGxhY2UoL1xcc3syLH0vZywgJyAnKTtcblx0Ly8gdHJpbSBhZ2FpblxuXHRzdmcgPSBzdmcudHJpbSgpO1xuXHQvLyBzb2Z0IHZhbGlkYXRlIGFnYWluXG5cdGlmICghc3ZnLnN0YXJ0c1dpdGgoJzxzdmcnKSB8fCAhc3ZnLmVuZHNXaXRoKCdzdmc+JykpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblx0Ly8gcmVwbGFjZSBhbXBlcnNhbmRcblx0c3ZnID0gc3ZnLnJlcGxhY2UoLyYvZywgJyZhbXA7Jyk7XG5cdC8vIGVuY29kZSBvbmx5IHVuc2FmZSBzeW1ib2xzXG5cdHN2ZyA9IHN2Zy5yZXBsYWNlKC9bJSM8Pj9bXFxcXFxcXV5ge3x9XS9nLCBlbmNvZGVVUklDb21wb25lbnQpO1xuXHQvLyBidWlsZCBkYXRhIHVyaVxuXHRzdmcgPSBgZGF0YTppbWFnZS9zdmcreG1sLCR7c3ZnfWA7XG5cdC8vIG9rLCBzaGlwIGl0IVxuXHRyZXR1cm4gc3ZnO1xufTtcblxuZXhwb3J0IHt0eXBlIEdlbmVyYXRlU3ZnRGF0YVVybCwgZ2VuZXJhdGVTdmdEYXRhVXJsfTtcbiIsICJ0eXBlIEdldEJvZHkgPSAoKSA9PiBKUXVlcnkuVGhlbmFibGU8SlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4+O1xuXG5jb25zdCBnZXRCb2R5ID0gKCkgPT4ge1xuXHRyZXR1cm4gJC5yZWFkeS50aGVuKCgpOiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PiA9PiB7XG5cdFx0Y29uc3QgJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+ID0gJCgnYm9keScpO1xuXG5cdFx0cmV0dXJuICRib2R5O1xuXHR9KTtcbn07XG5cbmV4cG9ydCB7dHlwZSBHZXRCb2R5LCBnZXRCb2R5fTtcbiIsICJ0eXBlIElzVmFsaWRLZXkgPSB0eXBlb2YgaXNWYWxpZEtleTtcblxuY29uc3QgaXNWYWxpZEtleSA9IChvYmplY3Q6IG9iamVjdCwga2V5OiBzdHJpbmcgfCBudW1iZXIgfCBzeW1ib2wpOiBrZXkgaXMga2V5b2YgdHlwZW9mIG9iamVjdCA9PiB7XG5cdHJldHVybiBrZXkgaW4gb2JqZWN0O1xufTtcblxuZXhwb3J0IHt0eXBlIElzVmFsaWRLZXksIGlzVmFsaWRLZXl9O1xuIiwgInR5cGUgQ2xhc3NNd1VyaSA9IHR5cGVvZiBNd1VyaTtcblxuY2xhc3MgTXdVcmkgZXh0ZW5kcyBVUkwge1xuXHRwdWJsaWMgZXh0ZW5kKG9iamVjdDoge1trZXk6IHN0cmluZ106IHN0cmluZ30pOiB0aGlzIHtcblx0XHRmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhvYmplY3QpKSB7XG5cdFx0XHR0aGlzLnNlYXJjaFBhcmFtcy5zZXQoa2V5LCB2YWx1ZSk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdHB1YmxpYyBnZXRSZWxhdGl2ZVBhdGgoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5wYXRobmFtZSArIHRoaXMuc2VhcmNoICsgdGhpcy5oYXNoO1xuXHR9XG59XG5cbmV4cG9ydCB7dHlwZSBDbGFzc013VXJpLCBNd1VyaX07XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuSlNYJztcblxudHlwZSBPb3VpQ29uZmlybVdpdGhTdHlsZSA9IChtZXNzYWdlOiBzdHJpbmcpID0+IEpRdWVyeS5Qcm9taXNlPGJvb2xlYW4+O1xuXG4vKipcbiAqIEByZXF1aXJlcyBvb2pzLXVpLXdpbmRvd3NcbiAqIEBwYXJhbSB7c3RyaW5nfSBbbWVzc2FnZV1cbiAqIEByZXR1cm4ge0pRdWVyeS5Qcm9taXNlPGJvb2xlYW4+fVxuICovXG5jb25zdCBvb3VpQ29uZmlybVdpdGhTdHlsZTogT291aUNvbmZpcm1XaXRoU3R5bGUgPSAobWVzc2FnZSkgPT5cblx0T08udWlcblx0XHQuY29uZmlybShcblx0XHRcdCQoXG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJvby11aS13aW5kb3ctZm9vdFwiXG5cdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdGJvcmRlcjogJy4xcmVtIHNvbGlkICMwNjQ1YWQnLFxuXHRcdFx0XHRcdFx0ZGlzcGxheTogJ2ZsZXgnLFxuXHRcdFx0XHRcdFx0anVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1ldmVubHknLFxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8c3BhblxuXHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0Zm9udFNpemU6ICcxLjJyZW0nLFxuXHRcdFx0XHRcdFx0XHRmb250V2VpZ2h0OiAnNTAwJyxcblx0XHRcdFx0XHRcdFx0bGluZUhlaWdodDogJzEuOCcsXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6ICcuNGVtIDAnLFxuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHR7bWVzc2FnZX1cblx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KSBhcyBKUXVlcnlcblx0XHQpXG5cdFx0LnRoZW4oKGlzQ29uZmlybTogYm9vbGVhbik6IGJvb2xlYW4gPT4gaXNDb25maXJtKTtcblxuZXhwb3J0IHt0eXBlIE9vdWlDb25maXJtV2l0aFN0eWxlLCBvb3VpQ29uZmlybVdpdGhTdHlsZX07XG4iLCAiaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJy4vaW5pdE13QXBpJztcblxudHlwZSBRdWVyeUdsb2JhbFVzZXJHcm91cHMgPSB0eXBlb2YgcXVlcnlHbG9iYWxVc2VyR3JvdXBzO1xuXG5hc3luYyBmdW5jdGlvbiBxdWVyeUdsb2JhbFVzZXJHcm91cHMoZ3VpdXNlcjogc3RyaW5nKSB7XG5cdGNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKCdVdGlsLVF1ZXJ5R2xvYmFsVXNlckdyb3VwcycpO1xuXG5cdGNvbnN0IENBQ0hFX0tFWV9QUkVGSVggPSAnZXh0LmdhZGdldC5VdGlsX3F1ZXJ5R2xvYmFsVXNlckdyb3Vwcy0nO1xuXG5cdGxldCBncm91cHM6IHN0cmluZ1tdID0gW107XG5cblx0Ly8gUXVlcnkgZnJvbSBjYWNoZVxuXHQvLyBDaGVjayBpZiB1c2VyIGdyb3VwIGluZm8gaXMgY2FjaGVkIGluIExvY2FsU3RvcmFnZVxuXHQvLyBJZiBjYWNoZWQsIGdldCB0aGVtIGZyb20gTG9jYWxTdG9yYWdlXG5cdGlmIChtdy5zdG9yYWdlLmdldE9iamVjdChDQUNIRV9LRVlfUFJFRklYICsgZ3VpdXNlcikpIHtcblx0XHRncm91cHMgPSBtdy5zdG9yYWdlLmdldE9iamVjdChDQUNIRV9LRVlfUFJFRklYICsgZ3VpdXNlcikgYXMgc3RyaW5nW107XG5cdFx0Ly8gUmVtb3ZlICcqJyBmcm9tIGdyb3Vwc1xuXHRcdGdyb3VwcyA9IGdyb3Vwcy5maWx0ZXIoKGVsZW1lbnQpID0+IHtcblx0XHRcdHJldHVybiBlbGVtZW50ICE9PSAnKic7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gUXVlcnkgZnJvbSB3ZWJcblx0XHQvLyBRdWVyeSBwYXJhbXNcblx0XHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRcdG1ldGE6ICdnbG9iYWx1c2VyaW5mbycsXG5cdFx0XHRndWl1c2VyLFxuXHRcdFx0Z3VpcHJvcDogJ2dyb3VwcycsXG5cdFx0XHRzbWF4YWdlOiA2MDAsXG5cdFx0XHRtYXhhZ2U6IDYwMCxcblx0XHR9O1xuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXG5cdFx0Ly8gRGUtY29uc3RydWN0IHRoZSByZXNwb25zZSBvYmplY3Rcblx0XHRjb25zdCBxdWVyeSA9IHJlc3BvbnNlWydxdWVyeSddIGFzIHtcblx0XHRcdGdsb2JhbHVzZXJpbmZvOiB7Z3JvdXBzOiBzdHJpbmdbXTsgbmFtZTogc3RyaW5nfTtcblx0XHR9O1xuXG5cdFx0aWYgKHF1ZXJ5Py5nbG9iYWx1c2VyaW5mbykge1xuXHRcdFx0Z3JvdXBzID0gcXVlcnkuZ2xvYmFsdXNlcmluZm8/Lmdyb3VwcyA/PyBbXTtcblx0XHRcdC8vIFJlbW92ZSAnKicgZnJvbSBncm91cHNcblx0XHRcdGdyb3VwcyA9IGdyb3Vwcy5maWx0ZXIoKGVsZW1lbnQpID0+IHtcblx0XHRcdFx0cmV0dXJuIGVsZW1lbnQgIT09ICcqJztcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBDYWNoZSBmb3IgMSBob3VyXG5cdFx0XHRtdy5zdG9yYWdlLnNldE9iamVjdChDQUNIRV9LRVlfUFJFRklYICsgZ3VpdXNlciwgZ3JvdXBzLCA2MCAqIDYwKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4ge3F1ZXJ5OiB7Z2xvYmFsdXNlcmluZm86IHtuYW1lOiBndWl1c2VyLCBncm91cHN9fX07XG59XG5cbmV4cG9ydCB7dHlwZSBRdWVyeUdsb2JhbFVzZXJHcm91cHMsIHF1ZXJ5R2xvYmFsVXNlckdyb3Vwc307XG4iLCAiaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJy4vaW5pdE13QXBpJztcblxudHlwZSBRdWVyeVVzZXJHcm91cHMgPSB0eXBlb2YgcXVlcnlVc2VyR3JvdXBzO1xuXG5hc3luYyBmdW5jdGlvbiBxdWVyeVVzZXJHcm91cHModXNlcnM6IHN0cmluZ1tdKSB7XG5cdGNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKCdVdGlsLVF1ZXJ5VXNlckdyb3VwcycpO1xuXG5cdGNvbnN0IENBQ0hFX0tFWV9QUkVGSVggPSAnZXh0LmdhZGdldC5VdGlsX3F1ZXJ5VXNlckdyb3Vwcy0nO1xuXG5cdGNvbnN0IGNhY2hlZFF1ZXJ5VXNlcnM6IHtncm91cHM6IHN0cmluZ1tdOyBuYW1lOiBzdHJpbmd9W10gPSBbXTtcblxuXHQvLyBRdWVyeSBmcm9tIGNhY2hlXG5cdGZvciAoY29uc3QgdXNlciBvZiB1c2Vycykge1xuXHRcdC8vIENoZWNrIGlmIHVzZXIgZ3JvdXAgaW5mbyBpcyBjYWNoZWQgaW4gTG9jYWxTdG9yYWdlXG5cdFx0Ly8gSWYgY2FjaGVkLCBnZXQgdGhlbSBmcm9tIExvY2FsU3RvcmFnZVxuXHRcdGlmIChtdy5zdG9yYWdlLmdldE9iamVjdChDQUNIRV9LRVlfUFJFRklYICsgdXNlcikpIHtcblx0XHRcdGxldCBncm91cHMgPSBtdy5zdG9yYWdlLmdldE9iamVjdChDQUNIRV9LRVlfUFJFRklYICsgdXNlcikgYXMgc3RyaW5nW107XG5cdFx0XHQvLyBSZW1vdmUgJyonIGZyb20gZ3JvdXBzXG5cdFx0XHRncm91cHMgPSBncm91cHMuZmlsdGVyKChlbGVtZW50KSA9PiB7XG5cdFx0XHRcdHJldHVybiBlbGVtZW50ICE9PSAnKic7XG5cdFx0XHR9KTtcblx0XHRcdC8vIFN0b3JlIGludG8gYXJyYXlcblx0XHRcdGNhY2hlZFF1ZXJ5VXNlcnNbY2FjaGVkUXVlcnlVc2Vycy5sZW5ndGhdID0ge25hbWU6IHVzZXIsIGdyb3Vwc307XG5cdFx0fVxuXHR9XG5cblx0Ly8gUXVlcnkgZnJvbSB3ZWJcblx0Y29uc3QgdXN1c2VycyA9IHVzZXJzLmZpbHRlcigodikgPT4ge1xuXHRcdC8vIFJlbW92ZSB1c2VyIHRoYXQgaGF2ZSBjYWNoZWQgdXNlciBncm91cHMgbG9jYWxseVxuXHRcdHJldHVybiAhbXcuc3RvcmFnZS5nZXRPYmplY3QoQ0FDSEVfS0VZX1BSRUZJWCArIHYpO1xuXHR9KTtcblxuXHQvLyBRdWVyeSBwYXJhbXNcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeVVzZXJzUGFyYW1zID0ge1xuXHRcdHVzdXNlcnMsXG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRsaXN0OiAndXNlcnMnLFxuXHRcdHVzcHJvcDogJ2dyb3VwcycsXG5cdFx0c21heGFnZTogNjAwLFxuXHRcdG1heGFnZTogNjAwLFxuXHR9O1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHQvLyBEZS1jb25zdHJ1Y3QgdGhlIHJlc3BvbnNlIG9iamVjdFxuXHRjb25zdCBxdWVyeSA9IHJlc3BvbnNlWydxdWVyeSddIGFzIHtcblx0XHR1c2Vyczoge2dyb3Vwczogc3RyaW5nW107IG5hbWU6IHN0cmluZ31bXTtcblx0fTtcblx0Y29uc3QgcXVlcnlVc2VycyA9IFsuLi4ocXVlcnk/LnVzZXJzID8/IFtdKSwgLi4uY2FjaGVkUXVlcnlVc2Vyc107XG5cblx0Zm9yIChjb25zdCB1c2VyIG9mIHF1ZXJ5VXNlcnMpIHtcblx0XHRpZiAodXNlcj8uZ3JvdXBzICYmIHVzZXI/Lm5hbWUpIHtcblx0XHRcdGxldCB7Z3JvdXBzfSA9IHVzZXI7XG5cdFx0XHQvLyBSZW1vdmUgJyonIGZyb20gZ3JvdXBzXG5cdFx0XHRncm91cHMgPSBncm91cHMuZmlsdGVyKChlbGVtZW50KSA9PiB7XG5cdFx0XHRcdHJldHVybiBlbGVtZW50ICE9PSAnKic7XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gQ2FjaGUgZm9yIDEgaG91clxuXHRcdFx0bXcuc3RvcmFnZS5zZXRPYmplY3QoQ0FDSEVfS0VZX1BSRUZJWCArIHVzZXIubmFtZSwgZ3JvdXBzLCA2MCAqIDYwKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4ge3F1ZXJ5OiB7dXNlcnM6IHF1ZXJ5VXNlcnN9fTtcbn1cblxuZXhwb3J0IHt0eXBlIFF1ZXJ5VXNlckdyb3VwcywgcXVlcnlVc2VyR3JvdXBzfTtcbiIsICJ0eXBlIFNjcm9sbFRvcCA9IChcblx0dGFyZ2V0SGVpZ2h0OiBudW1iZXIgfCBzdHJpbmcsXG5cdGVmZmVjdHNPcHRpb25zT3JEdXJhdGlvbj86IEpRdWVyeS5FZmZlY3RzT3B0aW9uczxIVE1MRWxlbWVudD4gfCBudW1iZXIgfCAnZmFzdCcgfCAnc2xvdydcbikgPT4gdm9pZDtcblxuY29uc3Qgc2Nyb2xsVG9wOiBTY3JvbGxUb3AgPSAodGFyZ2V0SGVpZ2h0LCBlZmZlY3RzT3B0aW9uc09yRHVyYXRpb24gPSB7fSkgPT4ge1xuXHRjb25zdCBvcHRpb25zOiBKUXVlcnkuRWZmZWN0c09wdGlvbnM8SFRNTEVsZW1lbnQ+ID1cblx0XHR0eXBlb2YgZWZmZWN0c09wdGlvbnNPckR1cmF0aW9uID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgZWZmZWN0c09wdGlvbnNPckR1cmF0aW9uID09PSAnc3RyaW5nJ1xuXHRcdFx0PyB7XG5cdFx0XHRcdFx0ZHVyYXRpb246IGVmZmVjdHNPcHRpb25zT3JEdXJhdGlvbixcblx0XHRcdFx0XHRlYXNpbmc6ICdsaW5lYXInLFxuXHRcdFx0XHR9XG5cdFx0XHQ6IHtcblx0XHRcdFx0XHRkdXJhdGlvbjogJ3Nsb3cnLFxuXHRcdFx0XHRcdGVhc2luZzogJ2xpbmVhcicsXG5cdFx0XHRcdFx0Li4uZWZmZWN0c09wdGlvbnNPckR1cmF0aW9uLFxuXHRcdFx0XHR9O1xuXHQkKGRvY3VtZW50KS5maW5kKCdodG1sLCBib2R5JykuYW5pbWF0ZShcblx0XHR7XG5cdFx0XHRzY3JvbGxUb3A6IHRhcmdldEhlaWdodCxcblx0XHR9LFxuXHRcdG9wdGlvbnNcblx0KTtcbn07XG5cbmV4cG9ydCB7dHlwZSBTY3JvbGxUb3AsIHNjcm9sbFRvcH07XG4iLCAiaW1wb3J0IHtnZW5lcmF0ZUFycmF5fSBmcm9tICcuL2dlbmVyYXRlQXJyYXknO1xuXG50eXBlIFVzZXJJc0luR3JvdXAgPSB0eXBlb2YgdXNlcklzSW5Hcm91cDtcblxuY29uc3QgdXNlcklzSW5Hcm91cCA9IChncm91cHM6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiB7XG5cdGNvbnN0IHt3Z1VzZXJHcm91cHMsIHdnR2xvYmFsR3JvdXBzfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0cmV0dXJuIFsuLi4od2dVc2VyR3JvdXBzIHx8IFtdKSwgLi4uKCh3Z0dsb2JhbEdyb3VwcyBhcyBzdHJpbmdbXSkgfHwgW10pXS5zb21lKChlbGVtZW50OiBzdHJpbmcpOiBib29sZWFuID0+IHtcblx0XHRyZXR1cm4gZ2VuZXJhdGVBcnJheShncm91cHMpLmluY2x1ZGVzKGVsZW1lbnQpO1xuXHR9KTtcbn07XG5cbmV4cG9ydCB7dHlwZSBVc2VySXNJbkdyb3VwLCB1c2VySXNJbkdyb3VwfTtcbiIsICJ0eXBlIEdldFdwU3VtbWFyeUNvbnRlbnQgPSB0eXBlb2YgZ2V0V3BTdW1tYXJ5Q29udGVudDtcbnR5cGUgU2V0V3BTdW1tYXJ5Q29udGVudCA9IHR5cGVvZiBzZXRXcFN1bW1hcnlDb250ZW50O1xuXG5jb25zdCBnZXRXcFN1bW1hcnlDb250ZW50ID0gKHskZWRpdEZvcm19OiB7JGVkaXRGb3JtOiBKUXVlcnk8SFRNTEVsZW1lbnQ+fSk6IHN0cmluZyA9PiB7XG5cdHJldHVybiAkZWRpdEZvcm0uZmluZDxIVE1MSW5wdXRFbGVtZW50PignI3dwU3VtbWFyeScpPy52YWwoKSA/PyAnJztcbn07XG5cbmNvbnN0IHNldFdwU3VtbWFyeUNvbnRlbnQgPSAoeyRlZGl0Rm9ybSwgY29udGVudH06IHskZWRpdEZvcm06IEpRdWVyeTxIVE1MRWxlbWVudD47IGNvbnRlbnQ6IHN0cmluZ30pOiB2b2lkID0+IHtcblx0JGVkaXRGb3JtLmZpbmQ8SFRNTElucHV0RWxlbWVudD4oJyN3cFN1bW1hcnknKS52YWwoY29udGVudCk7XG59O1xuXG5leHBvcnQge2dldFdwU3VtbWFyeUNvbnRlbnQsIHR5cGUgR2V0V3BTdW1tYXJ5Q29udGVudCwgc2V0V3BTdW1tYXJ5Q29udGVudCwgdHlwZSBTZXRXcFN1bW1hcnlDb250ZW50fTtcbiIsICJ0eXBlIEdldFdwVGV4dGJveDFDb250ZW50ID0gdHlwZW9mIGdldFdwVGV4dGJveDFDb250ZW50O1xudHlwZSBTZXRXcFRleHRib3gxQ29udGVudCA9IHR5cGVvZiBzZXRXcFRleHRib3gxQ29udGVudDtcblxuY29uc3QgZ2V0V3BUZXh0Ym94MUNvbnRlbnQgPSAoeyRlZGl0Rm9ybX06IHskZWRpdEZvcm06IEpRdWVyeTxIVE1MRWxlbWVudD59KTogc3RyaW5nID0+IHtcblx0cmV0dXJuICRlZGl0Rm9ybS5maW5kPEhUTUxUZXh0QXJlYUVsZW1lbnQ+KCcjd3BUZXh0Ym94MScpLnRleHRTZWxlY3Rpb24oJ2dldENvbnRlbnRzJykgPz8gJyc7XG59O1xuXG5jb25zdCBzZXRXcFRleHRib3gxQ29udGVudCA9ICh7JGVkaXRGb3JtLCBjb250ZW50fTogeyRlZGl0Rm9ybTogSlF1ZXJ5PEhUTUxFbGVtZW50PjsgY29udGVudDogc3RyaW5nfSk6IHZvaWQgPT4ge1xuXHQkZWRpdEZvcm0uZmluZDxIVE1MVGV4dEFyZWFFbGVtZW50PignI3dwVGV4dGJveDEnKS50ZXh0U2VsZWN0aW9uKCdzZXRDb250ZW50cycsIGNvbnRlbnQpO1xufTtcblxuZXhwb3J0IHtnZXRXcFRleHRib3gxQ29udGVudCwgdHlwZSBHZXRXcFRleHRib3gxQ29udGVudCwgc2V0V3BUZXh0Ym94MUNvbnRlbnQsIHR5cGUgU2V0V3BUZXh0Ym94MUNvbnRlbnR9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxlQUFBLENBQUE7QUFBQUMsU0FBQUQsY0FBQTtFQUFBRSxPQUFBQSxNQUFBQTtFQUFBQyw2QkFBQUEsTUFBQUE7RUFBQUMsb0NBQUFBLE1BQUFBO0VBQUFDLHFCQUFBQSxNQUFBQTtFQUFBQyxtQkFBQUEsTUFBQUE7RUFBQUMsT0FBQUEsTUFBQUE7RUFBQUMsY0FBQUEsTUFBQUE7RUFBQUMsZUFBQUEsTUFBQUE7RUFBQUMsb0JBQUFBLE1BQUFBO0VBQUFDLFNBQUFBLE1BQUFBO0VBQUFDLHFCQUFBQSxNQUFBQTtFQUFBQyxzQkFBQUEsTUFBQUE7RUFBQUMsV0FBQUEsTUFBQUE7RUFBQUMsWUFBQUEsTUFBQUE7RUFBQUMsc0JBQUFBLE1BQUFBO0VBQUFDLHVCQUFBQSxNQUFBQTtFQUFBQyxpQkFBQUEsTUFBQUE7RUFBQUMsV0FBQUEsTUFBQUE7RUFBQUMscUJBQUFBLE1BQUFBO0VBQUFDLHNCQUFBQSxNQUFBQTtFQUFBQyxhQUFBQSxNQUFBQTtFQUFB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SztFQUNaLEdBQ0FsSyxPQUNEO0FBQ0Q7O0FDbkJBLElBQU1QLGdCQUFpQjRJLFlBQThCO0FBQ3BELFFBQU07SUFBQ21DO0lBQWNDO0VBQWMsSUFBSWxKLEdBQUdtSixPQUFPckgsSUFBSTtBQUNyRCxTQUFPLENBQUMsR0FBSW1ILGdCQUFnQixDQUFBLEdBQUssR0FBS0Msa0JBQStCLENBQUEsQ0FBRyxFQUFFRSxLQUFNbEMsYUFBNkI7QUFDNUcsV0FBTzlKLGNBQWMwSixNQUFNLEVBQUU1SCxTQUFTZ0ksT0FBTztFQUM5QyxDQUFDO0FBQ0Y7O0FDTkEsSUFBTTNKLHNCQUFzQkEsQ0FBQztFQUFDOEw7QUFBUyxNQUFnRDtBQUFBLE1BQUFDLHFCQUFBQztBQUN0RixVQUFBRCx1QkFBQUMsa0JBQU9GLFVBQVVOLEtBQXVCLFlBQVksT0FBQSxRQUFBUSxvQkFBQSxTQUFBLFNBQTdDQSxnQkFBZ0RDLElBQUksT0FBQSxRQUFBRix3QkFBQSxTQUFBQSxzQkFBSztBQUNqRTtBQUVBLElBQU12TCxzQkFBc0JBLENBQUM7RUFBQ3NMO0VBQVdJO0FBQU8sTUFBK0Q7QUFDOUdKLFlBQVVOLEtBQXVCLFlBQVksRUFBRVMsSUFBSUMsT0FBTztBQUMzRDs7QUNOQSxJQUFNak0sdUJBQXVCQSxDQUFDO0VBQUM2TDtBQUFTLE1BQWdEO0FBQUEsTUFBQUs7QUFDdkYsVUFBQUEsd0JBQU9MLFVBQVVOLEtBQTBCLGFBQWEsRUFBRVksY0FBYyxhQUFhLE9BQUEsUUFBQUQsMEJBQUEsU0FBQUEsd0JBQUs7QUFDM0Y7QUFFQSxJQUFNMUwsdUJBQXVCQSxDQUFDO0VBQUNxTDtFQUFXSTtBQUFPLE1BQStEO0FBQy9HSixZQUFVTixLQUEwQixhQUFhLEVBQUVZLGNBQWMsZUFBZUYsT0FBTztBQUN4RjsiLAogICJuYW1lcyI6IFsiVXRpbF9leHBvcnRzIiwgIl9fZXhwb3J0IiwgIk13VXJpIiwgImFkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3ZlciIsICJjaGFuZ2VPcGFjaXR5V2hlbk1vdXNlRW50ZXJPckxlYXZlIiwgImNoZWNrQTExeUNvbmZpcm1LZXkiLCAiY2hlY2tEZXBlbmRlbmNpZXMiLCAiZGVsYXkiLCAiZmluZFZhcmlhbnRzIiwgImdlbmVyYXRlQXJyYXkiLCAiZ2VuZXJhdGVTdmdEYXRhVXJsIiwgImdldEJvZHkiLCAiZ2V0V3BTdW1tYXJ5Q29udGVudCIsICJnZXRXcFRleHRib3gxQ29udGVudCIsICJpbml0TXdBcGkiLCAiaXNWYWxpZEtleSIsICJvb3VpQ29uZmlybVdpdGhTdHlsZSIsICJxdWVyeUdsb2JhbFVzZXJHcm91cHMiLCAicXVlcnlVc2VyR3JvdXBzIiwgInNjcm9sbFRvcCIsICJzZXRXcFN1bW1hcnlDb250ZW50IiwgInNldFdwVGV4dGJveDFDb250ZW50IiwgInVuaXF1ZUFycmF5IiwgInVzZXJJc0luR3JvdXAiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAiX190b0NvbW1vbkpTIiwgInRhcmdldCIsICJ0eXBlIiwgImxpc3RlbmVyIiwgIm9wdGlvbnMiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJyZW1vdmUiLCAicmVtb3ZlRXZlbnRMaXN0ZW5lciIsICJldmVudCIsICJvcGFjaXR5IiwgImN1cnJlbnRUYXJnZXQiLCAic3R5bGUiLCAidG9TdHJpbmciLCAiaW5jbHVkZXMiLCAia2V5IiwgImFyZ3MiLCAiZmxhdE1hcCIsICJhcmciLCAiQXJyYXkiLCAiaXNBcnJheSIsICJOb2RlTGlzdCIsICJ1c2VyQWdlbnQiLCAiYXBpVXJpIiwgImFwaU9wdGlvbnMiLCAiYWpheCIsICJoZWFkZXJzIiwgImNvbmNhdCIsICJtdyIsICJGb3JlaWduQXBpIiwgIkFwaSIsICJ1bmlxdWVBcnJheTIiLCAicmVzdWx0IiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgIml0ZW0iLCAidmFsdWUiLCAibGVuZ3RoIiwgImVyciIsICJlIiwgImYiLCAiX3giLCAiX3gyIiwgIl9jaGVja0RlcGVuZGVuY2llcyIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiZ2FkZ2V0TmFtZXMiLCAib3B0aW9uIiwgImFwaSIsICJnYWRnZXRzIiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgImdhZGdldCIsICJ1c2VyIiwgImdldCIsICJwb3N0V2l0aEVkaXRUb2tlbiIsICJhY3Rpb24iLCAiY2hhbmdlIiwgImxvYWRlciIsICJ1c2luZyIsICJtcyIsICJQcm9taXNlIiwgInJlc29sdmUiLCAic2V0VGltZW91dCIsICJfeDMiLCAiX2ZpbmRWYXJpYW50cyIsICJ0ZXh0IiwgIlZBUklBTlRTIiwgImFsbFZhcmlhbnRzIiwgInBhcmFtcyIsICJjb250ZW50bW9kZWwiLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicHJvcCIsICJ0aXRsZSIsICJfaTIiLCAiX1ZBUklBTlRTIiwgIl9yZXNwb25zZSRxdWVyeSIsICJ2YXJpYW50IiwgInVzZWxhbmciLCAicmVzcG9uc2UiLCAicG9zdCIsICJkaXNwbGF5dGl0bGUiLCAidmFyaWFudEVsZW1lbnQiLCAiZG9jdW1lbnQiLCAiY3JlYXRlRWxlbWVudCIsICJpbm5lckhUTUwiLCAidGV4dENvbnRlbnQiLCAic3ZnIiwgInRyaW0iLCAic2xpY2UiLCAiaW5kZXhPZiIsICJzdGFydHNXaXRoIiwgImVuZHNXaXRoIiwgInJlcGxhY2UiLCAiZW5jb2RlVVJJQ29tcG9uZW50IiwgIiQiLCAicmVhZHkiLCAidGhlbiIsICIkYm9keSIsICJvYmplY3QiLCAiVVJMIiwgImV4dGVuZCIsICJfaSIsICJfT2JqZWN0JGVudHJpZXMiLCAiT2JqZWN0IiwgImVudHJpZXMiLCAic2VhcmNoUGFyYW1zIiwgInNldCIsICJnZXRSZWxhdGl2ZVBhdGgiLCAicGF0aG5hbWUiLCAic2VhcmNoIiwgImhhc2giLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiX190b0VTTSIsICJyZXF1aXJlIiwgIm1lc3NhZ2UiLCAiT08iLCAidWkiLCAiY29uZmlybSIsICJkZWZhdWx0IiwgImNsYXNzTmFtZSIsICJib3JkZXIiLCAiZGlzcGxheSIsICJqdXN0aWZ5Q29udGVudCIsICJmb250U2l6ZSIsICJmb250V2VpZ2h0IiwgImxpbmVIZWlnaHQiLCAicGFkZGluZyIsICJpc0NvbmZpcm0iLCAiX3g0IiwgIl9xdWVyeUdsb2JhbFVzZXJHcm91cHMiLCAiZ3VpdXNlciIsICJDQUNIRV9LRVlfUFJFRklYIiwgImdyb3VwcyIsICJzdG9yYWdlIiwgImdldE9iamVjdCIsICJmaWx0ZXIiLCAiZWxlbWVudCIsICJtZXRhIiwgImd1aXByb3AiLCAic21heGFnZSIsICJtYXhhZ2UiLCAicXVlcnkiLCAiZ2xvYmFsdXNlcmluZm8iLCAiX3F1ZXJ5JGdsb2JhbHVzZXJpbmZvIiwgIl9xdWVyeSRnbG9iYWx1c2VyaW5mbzIiLCAic2V0T2JqZWN0IiwgIm5hbWUiLCAiX3g1IiwgIl9xdWVyeVVzZXJHcm91cHMiLCAidXNlcnMiLCAiX3F1ZXJ5JHVzZXJzIiwgImNhY2hlZFF1ZXJ5VXNlcnMiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAidXN1c2VycyIsICJ2IiwgImxpc3QiLCAidXNwcm9wIiwgInF1ZXJ5VXNlcnMiLCAiX2kzIiwgIl9xdWVyeVVzZXJzIiwgInRhcmdldEhlaWdodCIsICJlZmZlY3RzT3B0aW9uc09yRHVyYXRpb24iLCAiZHVyYXRpb24iLCAiZWFzaW5nIiwgImZpbmQiLCAiYW5pbWF0ZSIsICJ3Z1VzZXJHcm91cHMiLCAid2dHbG9iYWxHcm91cHMiLCAiY29uZmlnIiwgInNvbWUiLCAiJGVkaXRGb3JtIiwgIl8kZWRpdEZvcm0kZmluZCR2YWwiLCAiXyRlZGl0Rm9ybSRmaW5kIiwgInZhbCIsICJjb250ZW50IiwgIl8kZWRpdEZvcm0kZmluZCR0ZXh0UyIsICJ0ZXh0U2VsZWN0aW9uIl0KfQo=

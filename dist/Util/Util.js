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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1V0aWwvVXRpbC50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2FkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlci50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2NoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmUudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9jaGVja0ExMXlDb25maXJtS2V5LnRzIiwgInNyYy9VdGlsL21vZHVsZXMvZ2VuZXJhdGVBcnJheS50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2luaXRNd0FwaS50cyIsICJzcmMvVXRpbC9tb2R1bGVzL3VuaXF1ZUFycmF5LnRzIiwgInNyYy9VdGlsL21vZHVsZXMvY2hlY2tEZXBlbmRlbmNpZXMudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9kZWxheS50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2ZpbmRWYXJpYW50cy50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2dlbmVyYXRlU3ZnRGF0YVVybC50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2dldEJvZHkudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9pc1ZhbGlkS2V5LnRzIiwgInNyYy9VdGlsL21vZHVsZXMvbXdVcmkudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9vb3VpQ29uZmlybVdpdGhTdHlsZS50c3giLCAic3JjL1V0aWwvbW9kdWxlcy9xdWVyeUdsb2JhbFVzZXJHcm91cHMudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9xdWVyeVVzZXJHcm91cHMudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9zY3JvbGxUb3AudHMiLCAic3JjL1V0aWwvbW9kdWxlcy91c2VySXNJbkdyb3VwLnRzIiwgInNyYy9VdGlsL21vZHVsZXMvd3BTdW1tYXJ5Q29udGVudC50cyIsICJzcmMvVXRpbC9tb2R1bGVzL3dwVGV4dGJveDFDb250ZW50LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQge2FkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcn0gZnJvbSAnLi9tb2R1bGVzL2FkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcic7XG5leHBvcnQge2NoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmV9IGZyb20gJy4vbW9kdWxlcy9jaGFuZ2VPcGFjaXR5V2hlbk1vdXNlRW50ZXJPckxlYXZlJztcbmV4cG9ydCB7Y2hlY2tBMTF5Q29uZmlybUtleX0gZnJvbSAnLi9tb2R1bGVzL2NoZWNrQTExeUNvbmZpcm1LZXknO1xuZXhwb3J0IHtjaGVja0RlcGVuZGVuY2llc30gZnJvbSAnLi9tb2R1bGVzL2NoZWNrRGVwZW5kZW5jaWVzLnRzJztcbmV4cG9ydCB7ZGVsYXl9IGZyb20gJy4vbW9kdWxlcy9kZWxheSc7XG5leHBvcnQge2ZpbmRWYXJpYW50c30gZnJvbSAnLi9tb2R1bGVzL2ZpbmRWYXJpYW50cyc7XG5leHBvcnQge2dlbmVyYXRlQXJyYXl9IGZyb20gJy4vbW9kdWxlcy9nZW5lcmF0ZUFycmF5JztcbmV4cG9ydCB7Z2VuZXJhdGVTdmdEYXRhVXJsfSBmcm9tICcuL21vZHVsZXMvZ2VuZXJhdGVTdmdEYXRhVXJsJztcbmV4cG9ydCB7Z2V0Qm9keX0gZnJvbSAnLi9tb2R1bGVzL2dldEJvZHknO1xuZXhwb3J0IHtpbml0TXdBcGl9IGZyb20gJy4vbW9kdWxlcy9pbml0TXdBcGknO1xuZXhwb3J0IHtpc1ZhbGlkS2V5fSBmcm9tICcuL21vZHVsZXMvaXNWYWxpZEtleSc7XG5leHBvcnQge013VXJpfSBmcm9tICcuL21vZHVsZXMvbXdVcmknO1xuZXhwb3J0IHtvb3VpQ29uZmlybVdpdGhTdHlsZX0gZnJvbSAnLi9tb2R1bGVzL29vdWlDb25maXJtV2l0aFN0eWxlJztcbmV4cG9ydCB7cXVlcnlHbG9iYWxVc2VyR3JvdXBzfSBmcm9tICcuL21vZHVsZXMvcXVlcnlHbG9iYWxVc2VyR3JvdXBzJztcbmV4cG9ydCB7cXVlcnlVc2VyR3JvdXBzfSBmcm9tICcuL21vZHVsZXMvcXVlcnlVc2VyR3JvdXBzJztcbmV4cG9ydCB7c2Nyb2xsVG9wfSBmcm9tICcuL21vZHVsZXMvc2Nyb2xsVG9wJztcbmV4cG9ydCB7dXNlcklzSW5Hcm91cH0gZnJvbSAnLi9tb2R1bGVzL3VzZXJJc0luR3JvdXAnO1xuZXhwb3J0IHt1bmlxdWVBcnJheX0gZnJvbSAnLi9tb2R1bGVzL3VuaXF1ZUFycmF5JztcbmV4cG9ydCB7Z2V0V3BTdW1tYXJ5Q29udGVudCwgc2V0V3BTdW1tYXJ5Q29udGVudH0gZnJvbSAnLi9tb2R1bGVzL3dwU3VtbWFyeUNvbnRlbnQnO1xuZXhwb3J0IHtnZXRXcFRleHRib3gxQ29udGVudCwgc2V0V3BUZXh0Ym94MUNvbnRlbnR9IGZyb20gJy4vbW9kdWxlcy93cFRleHRib3gxQ29udGVudCc7XG4iLCAidHlwZSBBZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXIgPSA8XG5cdFRhcmdldCBleHRlbmRzIERvY3VtZW50IHwgSFRNTEVsZW1lbnQgfCBFbGVtZW50IHwgTWVkaWFRdWVyeUxpc3QgfCBXaW5kb3csXG5cdFR5cGUgZXh0ZW5kcyBUYXJnZXQgZXh0ZW5kcyBEb2N1bWVudFxuXHRcdD8ga2V5b2YgRG9jdW1lbnRFdmVudE1hcFxuXHRcdDogVGFyZ2V0IGV4dGVuZHMgSFRNTEVsZW1lbnRcblx0XHRcdD8ga2V5b2YgSFRNTEVsZW1lbnRFdmVudE1hcFxuXHRcdFx0OiBUYXJnZXQgZXh0ZW5kcyBNZWRpYVF1ZXJ5TGlzdFxuXHRcdFx0XHQ/IGtleW9mIE1lZGlhUXVlcnlMaXN0RXZlbnRNYXBcblx0XHRcdFx0OiBUYXJnZXQgZXh0ZW5kcyBXaW5kb3dcblx0XHRcdFx0XHQ/IGtleW9mIFdpbmRvd0V2ZW50TWFwXG5cdFx0XHRcdFx0OiBrZXlvZiBHbG9iYWxFdmVudEhhbmRsZXJzRXZlbnRNYXAsXG5cdExpc3RlbmVyIGV4dGVuZHMgVGFyZ2V0IGV4dGVuZHMgRG9jdW1lbnRcblx0XHQ/IFR5cGUgZXh0ZW5kcyBrZXlvZiBEb2N1bWVudEV2ZW50TWFwXG5cdFx0XHQ/ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBEb2N1bWVudEV2ZW50TWFwW1R5cGVdKSA9PiB1bmtub3duXG5cdFx0XHQ6ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBFdmVudCkgPT4gdW5rbm93blxuXHRcdDogVGFyZ2V0IGV4dGVuZHMgSFRNTEVsZW1lbnRcblx0XHRcdD8gVHlwZSBleHRlbmRzIGtleW9mIEhUTUxFbGVtZW50RXZlbnRNYXBcblx0XHRcdFx0PyAodGhpczogVGFyZ2V0LCBldmVudDogSFRNTEVsZW1lbnRFdmVudE1hcFtUeXBlXSkgPT4gdW5rbm93blxuXHRcdFx0XHQ6ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBFdmVudCkgPT4gdW5rbm93blxuXHRcdFx0OiBUYXJnZXQgZXh0ZW5kcyBFbGVtZW50XG5cdFx0XHRcdD8gVHlwZSBleHRlbmRzIGtleW9mIEVsZW1lbnRFdmVudE1hcFxuXHRcdFx0XHRcdD8gKHRoaXM6IFRhcmdldCwgZXZlbnQ6IEVsZW1lbnRFdmVudE1hcFtUeXBlXSkgPT4gdW5rbm93blxuXHRcdFx0XHRcdDogKHRoaXM6IFRhcmdldCwgZXZlbnQ6IEV2ZW50KSA9PiB1bmtub3duXG5cdFx0XHRcdDogVGFyZ2V0IGV4dGVuZHMgTWVkaWFRdWVyeUxpc3Rcblx0XHRcdFx0XHQ/IFR5cGUgZXh0ZW5kcyBrZXlvZiBNZWRpYVF1ZXJ5TGlzdEV2ZW50TWFwXG5cdFx0XHRcdFx0XHQ/ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBNZWRpYVF1ZXJ5TGlzdEV2ZW50TWFwW1R5cGVdKSA9PiB1bmtub3duXG5cdFx0XHRcdFx0XHQ6ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBFdmVudCkgPT4gdW5rbm93blxuXHRcdFx0XHRcdDogVGFyZ2V0IGV4dGVuZHMgV2luZG93XG5cdFx0XHRcdFx0XHQ/IFR5cGUgZXh0ZW5kcyBrZXlvZiBXaW5kb3dFdmVudE1hcFxuXHRcdFx0XHRcdFx0XHQ/ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBXaW5kb3dFdmVudE1hcFtUeXBlXSkgPT4gdW5rbm93blxuXHRcdFx0XHRcdFx0XHQ6ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBFdmVudCkgPT4gdW5rbm93blxuXHRcdFx0XHRcdFx0OiAodGhpczogVGFyZ2V0LCBldmVudDogRXZlbnQpID0+IHVua25vd24sXG4+KHtcblx0dGFyZ2V0LFxuXHR0eXBlLFxuXHRsaXN0ZW5lcixcblx0b3B0aW9ucyxcbn06IHtcblx0dGFyZ2V0OiBUYXJnZXQ7XG5cdHR5cGU6IFR5cGU7XG5cdGxpc3RlbmVyOiBMaXN0ZW5lcjtcblx0b3B0aW9ucz86IEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zO1xufSkgPT4ge1xuXHRyZW1vdmU6ICgpID0+IHZvaWQ7XG59O1xuXG5jb25zdCBhZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXI6IEFkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3ZlciA9ICh7dGFyZ2V0LCB0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyA9IHt9fSkgPT4ge1xuXHR0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciBhcyBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0LCBvcHRpb25zKTtcblx0cmV0dXJuIHtcblx0XHRyZW1vdmU6ICgpOiB2b2lkID0+IHtcblx0XHRcdHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyIGFzIEV2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3QsIG9wdGlvbnMpO1xuXHRcdH0sXG5cdH07XG59O1xuXG5leHBvcnQge3R5cGUgQWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyLCBhZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXJ9O1xuIiwgInR5cGUgQ2hhbmdlT3BhY2l0eVdoZW5Nb3VzZUVudGVyT3JMZWF2ZSA9IChldmVudDogTW91c2VFdmVudCB8IEpRdWVyeS5UcmlnZ2VyZWRFdmVudCwgb3BhY2l0eT86IG51bWJlcikgPT4gdm9pZDtcblxuY29uc3QgY2hhbmdlT3BhY2l0eVdoZW5Nb3VzZUVudGVyT3JMZWF2ZTogQ2hhbmdlT3BhY2l0eVdoZW5Nb3VzZUVudGVyT3JMZWF2ZSA9IChldmVudCwgb3BhY2l0eSA9IDAuNykgPT4ge1xuXHQoZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MRWxlbWVudCkuc3R5bGUub3BhY2l0eSA9IGV2ZW50LnR5cGUgPT09ICdtb3VzZWVudGVyJyA/ICcxJyA6IG9wYWNpdHkudG9TdHJpbmcoKTtcbn07XG5cbmV4cG9ydCB7dHlwZSBDaGFuZ2VPcGFjaXR5V2hlbk1vdXNlRW50ZXJPckxlYXZlLCBjaGFuZ2VPcGFjaXR5V2hlbk1vdXNlRW50ZXJPckxlYXZlfTtcbiIsICJ0eXBlIENoZWNrQTExeUNvbmZpcm1LZXkgPSAoZXZlbnQ6IEtleWJvYXJkRXZlbnQgfCBNb3VzZUV2ZW50IHwgSlF1ZXJ5LkNsaWNrRXZlbnQgfCBKUXVlcnkuS2V5RG93bkV2ZW50KSA9PiBib29sZWFuO1xuXG5jb25zdCBjaGVja0ExMXlDb25maXJtS2V5OiBDaGVja0ExMXlDb25maXJtS2V5ID0gKGV2ZW50KTogYm9vbGVhbiA9PiB7XG5cdGlmIChbJ2NsaWNrJywgJ2tleWRvd24nXS5pbmNsdWRlcyhldmVudC50eXBlKSkge1xuXHRcdGlmIChldmVudC50eXBlID09PSAna2V5ZG93bicpIHtcblx0XHRcdHJldHVybiBbJ0VudGVyJywgJyAnXS5pbmNsdWRlcygoZXZlbnQgYXMgS2V5Ym9hcmRFdmVudCkua2V5KTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0cmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IHt0eXBlIENoZWNrQTExeUNvbmZpcm1LZXksIGNoZWNrQTExeUNvbmZpcm1LZXl9O1xuIiwgInR5cGUgR2VuZXJhdGVBcnJheSA9IHR5cGVvZiBnZW5lcmF0ZUFycmF5O1xuXG5mdW5jdGlvbiBnZW5lcmF0ZUFycmF5PFQgZXh0ZW5kcyBbXT4oLi4uYXJnczogKFQgfCBUW10pW10pOiBUW107XG5mdW5jdGlvbiBnZW5lcmF0ZUFycmF5PFQgZXh0ZW5kcyBOb2RlTGlzdD4oLi4uYXJnczogKFQgfCBUW10pW10pOiBOb2RlW107XG5mdW5jdGlvbiBnZW5lcmF0ZUFycmF5PFQgPSB1bmtub3duPiguLi5hcmdzOiAoVCB8IFRbXSlbXSk6IFRbXTtcbmZ1bmN0aW9uIGdlbmVyYXRlQXJyYXk8VD4oLi4uYXJnczogKFQgfCBUW10pW10pOiBUW10ge1xuXHRyZXR1cm4gYXJncy5mbGF0TWFwKChhcmcpID0+IHtcblx0XHRpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRyZXR1cm4gYXJnO1xuXHRcdH1cblxuXHRcdGlmIChhcmcgaW5zdGFuY2VvZiBOb2RlTGlzdCkge1xuXHRcdFx0cmV0dXJuIFsuLi5hcmddIGFzIFQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFthcmddO1xuXHR9KTtcbn1cblxuZXhwb3J0IHt0eXBlIEdlbmVyYXRlQXJyYXksIGdlbmVyYXRlQXJyYXl9O1xuIiwgInR5cGUgSW5pdE13QXBpID0gdHlwZW9mIGluaXRNd0FwaTtcblxuLyoqXG4gKiBAcmVxdWlyZXMgbWVkaWF3aWtpLmFwaVxuICogQHBhcmFtIHtzdHJpbmd9IFt1c2VyQWdlbnRdXG4gKiBAcGFyYW0ge3N0cmluZ30gW2FwaVVyaV1cbiAqIEByZXR1cm4ge213LkFwaXxtdy5Gb3JlaWduQXBpfVxuICovXG5mdW5jdGlvbiBpbml0TXdBcGkodXNlckFnZW50Pzogc3RyaW5nKTogbXcuQXBpO1xuZnVuY3Rpb24gaW5pdE13QXBpKHVzZXJBZ2VudDogc3RyaW5nLCBhcGlVcmk6IHN0cmluZyk6IG13LkZvcmVpZ25BcGk7XG5mdW5jdGlvbiBpbml0TXdBcGkodXNlckFnZW50Pzogc3RyaW5nLCBhcGlVcmk/OiBzdHJpbmcpOiBtdy5BcGkgfCBtdy5Gb3JlaWduQXBpIHtcblx0Y29uc3QgYXBpT3B0aW9ucyA9IHtcblx0XHRhamF4OiB7XG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdCdBcGktVXNlci1BZ2VudCc6IHVzZXJBZ2VudCA/IGBRaXV3ZW4vMS4xICgke3VzZXJBZ2VudH0pYCA6ICdRaXV3ZW4vMS4xJyxcblx0XHRcdH0sXG5cdFx0fSxcblx0fTtcblxuXHRpZiAoYXBpVXJpKSB7XG5cdFx0cmV0dXJuIG5ldyBtdy5Gb3JlaWduQXBpKGFwaVVyaSwgYXBpT3B0aW9ucyk7XG5cdH1cblxuXHRyZXR1cm4gbmV3IG13LkFwaShhcGlPcHRpb25zKTtcbn1cblxuZXhwb3J0IHt0eXBlIEluaXRNd0FwaSwgaW5pdE13QXBpfTtcbiIsICJ0eXBlIFVuaXF1ZUFycmF5ID0gdHlwZW9mIHVuaXF1ZUFycmF5O1xuXG5jb25zdCB1bmlxdWVBcnJheSA9IGZ1bmN0aW9uIHVuaXF1ZUFycmF5PFQ+KGFyZ3M6IFRbXSk6IFRbXSB7XG5cdC8qKiFcblx0ICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IENDLUJZLVNBLTQuMFxuXHQgKlxuXHQgKiBAc291cmNlIHtAbGluayBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy85MjI5NjQ1L3JlbW92ZS1kdXBsaWNhdGUtdmFsdWVzLWZyb20tanMtYXJyYXkvOTIyOTgyfVxuXHQgKiBAbGljZW5zZSBDQy1CWS1TQS00LjBcblx0ICovXG5cdGNvbnN0IHJlc3VsdDogdHlwZW9mIGFyZ3MgPSBbXTtcblx0Zm9yIChjb25zdCBpdGVtIG9mIGFyZ3MpIHtcblx0XHRpZiAoIXJlc3VsdC5pbmNsdWRlcyhpdGVtKSkge1xuXHRcdFx0cmVzdWx0W3Jlc3VsdC5sZW5ndGhdID0gaXRlbTsgLy8gUmVwbGFjZSBBcnJheSNwdXNoIHRvIGF2b2lkIGNvcmUtanMgcG9seWZpbGxpbmdcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCB7dHlwZSBVbmlxdWVBcnJheSwgdW5pcXVlQXJyYXl9O1xuIiwgImltcG9ydCB7Z2VuZXJhdGVBcnJheX0gZnJvbSAnLi9nZW5lcmF0ZUFycmF5JztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICcuL2luaXRNd0FwaSc7XG5pbXBvcnQge3VuaXF1ZUFycmF5fSBmcm9tICcuL3VuaXF1ZUFycmF5JztcblxudHlwZSBCb29sZWFuID0gJzAnIHwgJzEnIHwgMCB8IDE7XG50eXBlIENoZWNrRGVwZW5kZW5jaWVzID0gdHlwZW9mIGNoZWNrRGVwZW5kZW5jaWVzO1xuXG5mdW5jdGlvbiBjaGVja0RlcGVuZGVuY2llcyhnYWRnZXROYW1lczogc3RyaW5nIHwgc3RyaW5nW10pOiBQcm9taXNlPHZvaWQ+O1xuZnVuY3Rpb24gY2hlY2tEZXBlbmRlbmNpZXMoZ2FkZ2V0TmFtZXM6IHN0cmluZywgb3B0aW9uOiBCb29sZWFuKTogUHJvbWlzZTx2b2lkPjtcbmFzeW5jIGZ1bmN0aW9uIGNoZWNrRGVwZW5kZW5jaWVzKGdhZGdldE5hbWVzOiBzdHJpbmcgfCBzdHJpbmdbXSwgb3B0aW9uPzogQm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaSgnVXRpbC1DaGVja0RlcGVuZGVuY2llcycpO1xuXHRjb25zdCBnYWRnZXRzID0gdW5pcXVlQXJyYXkoZ2VuZXJhdGVBcnJheShnYWRnZXROYW1lcykpO1xuXHRvcHRpb24gfHw9IDE7XG5cblx0Zm9yIChjb25zdCBnYWRnZXQgb2YgZ2FkZ2V0cykge1xuXHRcdGlmIChcblx0XHRcdChvcHRpb24gPT09ICcwJyAmJiBtdy51c2VyLm9wdGlvbnMuZ2V0KGBnYWRnZXQtJHtnYWRnZXR9YCkpIHx8XG5cdFx0XHQob3B0aW9uID09PSAnMScgJiYgIW13LnVzZXIub3B0aW9ucy5nZXQoYGdhZGdldC0ke2dhZGdldH1gKSlcblx0XHQpIHtcblx0XHRcdGF3YWl0IGFwaS5wb3N0V2l0aEVkaXRUb2tlbih7XG5cdFx0XHRcdGFjdGlvbjogJ29wdGlvbnMnLFxuXHRcdFx0XHRjaGFuZ2U6IGBnYWRnZXQtJHtnYWRnZXR9PSR7b3B0aW9ufWAsXG5cdFx0XHR9IGFzIEFwaU9wdGlvbnNQYXJhbXMpO1xuXHRcdFx0YXdhaXQgbXcubG9hZGVyLnVzaW5nKGBleHQuZ2FkZ2V0LiR7Z2FkZ2V0fWApO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQge3R5cGUgQ2hlY2tEZXBlbmRlbmNpZXMsIGNoZWNrRGVwZW5kZW5jaWVzfTtcbiIsICJ0eXBlIERlbGF5ID0gKG1zOiBudW1iZXIpID0+IFByb21pc2U8dm9pZD47XG5cbmNvbnN0IGRlbGF5OiBEZWxheSA9IChtcykgPT4ge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmU6ICgpID0+IHZvaWQpOiB2b2lkID0+IHtcblx0XHRzZXRUaW1lb3V0KHJlc29sdmUsIG1zKTtcblx0fSk7XG59O1xuXG5leHBvcnQge3R5cGUgRGVsYXksIGRlbGF5fTtcbiIsICJpbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnLi9pbml0TXdBcGknO1xuaW1wb3J0IHt1bmlxdWVBcnJheX0gZnJvbSAnLi91bmlxdWVBcnJheSc7XG5cbnR5cGUgRmluZFZhcmlhbnRzID0gdHlwZW9mIGZpbmRWYXJpYW50cztcblxuYXN5bmMgZnVuY3Rpb24gZmluZFZhcmlhbnRzKHRleHQ6IHN0cmluZykge1xuXHRjb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaSgnVXRpbC1GaW5kVmFyaWFudHMnKTtcblxuXHRjb25zdCBWQVJJQU5UUyA9IFsnemgtaGFucycsICd6aC1oYW50JywgJ3poLWNuJywgJ3poLWhrJywgJ3poLW1vJywgJ3poLXNnJywgJ3poLW15JywgJ3poLXR3J107XG5cblx0Y29uc3QgYWxsVmFyaWFudHM6IHN0cmluZ1tdID0gW107XG5cblx0Y29uc3QgcGFyYW1zOiBBcGlQYXJzZVBhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0Y29udGVudG1vZGVsOiAnd2lraXRleHQnLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRwcm9wOiBbJ2Rpc3BsYXl0aXRsZSddLFxuXHRcdHRpdGxlOiAndGVtcCcsXG5cdFx0dGV4dCxcblx0fTtcblxuXHRmb3IgKGNvbnN0IHZhcmlhbnQgb2YgVkFSSUFOVFMpIHtcblx0XHRwYXJhbXMudXNlbGFuZyA9IHZhcmlhbnQ7XG5cdFx0cGFyYW1zLnZhcmlhbnQgPSB2YXJpYW50O1xuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QocGFyYW1zKTtcblxuXHRcdGNvbnN0IGRpc3BsYXl0aXRsZSA9IHJlc3BvbnNlPy5bJ3F1ZXJ5J10/LmRpc3BsYXl0aXRsZSBhcyBzdHJpbmc7XG5cdFx0Y29uc3QgdmFyaWFudEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2YXJpYW50Jyk7XG5cdFx0dmFyaWFudEVsZW1lbnQuaW5uZXJIVE1MID0gZGlzcGxheXRpdGxlO1xuXG5cdFx0aWYgKHZhcmlhbnRFbGVtZW50LnRleHRDb250ZW50KSB7XG5cdFx0XHRhbGxWYXJpYW50c1thbGxWYXJpYW50cy5sZW5ndGhdID0gdmFyaWFudEVsZW1lbnQudGV4dENvbnRlbnQ7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHVuaXF1ZUFycmF5KGFsbFZhcmlhbnRzKTtcbn1cblxuZXhwb3J0IHt0eXBlIEZpbmRWYXJpYW50cywgZmluZFZhcmlhbnRzfTtcbiIsICJ0eXBlIEdlbmVyYXRlU3ZnRGF0YVVybCA9IChzdmc6IHN0cmluZykgPT4gc3RyaW5nO1xuXG5jb25zdCBnZW5lcmF0ZVN2Z0RhdGFVcmw6IEdlbmVyYXRlU3ZnRGF0YVVybCA9IChzdmcpID0+IHtcblx0LyoqIVxuXHQgKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogTUlUXG5cdCAqXG5cdCAqIEBzb3VyY2Ugc3ZnLXRvLWRhdGEtdXJpLmpzIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vaGV5YWxsYW4vc3ZnLXRvLWRhdGEtdXJpL31cblx0ICogQGF1dGhvciBBbGxhbiBNb3Jlbm9cblx0ICogQGxpY2Vuc2UgTUlUIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vaGV5YWxsYW4vc3ZnLXRvLWRhdGEtdXJpL2Jsb2IvbWFzdGVyL0xJQ0VOU0V9XG5cdCAqXG5cdCAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0ICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHQgKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdCAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0ICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdCAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cdCAqXG5cdCAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHQgKiBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXHQgKlxuXHQgKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdCAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHQgKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0ICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHQgKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHQgKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHQgKiBTT0ZUV0FSRS5cblx0ICovXG5cdHN2ZyA9IHN2Zy50cmltKCk7XG5cdC8vIHJlbW92ZSB4bWwsIGRvY3R5cGUsIGdlbmVyYXRvci4uLlxuXHRzdmcgPSBzdmcuc2xpY2Uoc3ZnLmluZGV4T2YoJzxzdmcnKSk7XG5cdC8vIHNvZnQgdmFsaWRhdGVcblx0aWYgKCFzdmcuc3RhcnRzV2l0aCgnPHN2ZycpIHx8ICFzdmcuZW5kc1dpdGgoJ3N2Zz4nKSkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXHQvLyBhZGQgbmFtZXNwYWNlIGlmIG5lY2Vzc2FyeVxuXHRpZiAoIXN2Zy5pbmNsdWRlcygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnKSkge1xuXHRcdHN2ZyA9IHN2Zy5yZXBsYWNlKC88c3ZnL2csIFwiPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXCIpO1xuXHR9XG5cdC8vIHJlbW92ZSBjb21tZW50c1xuXHRzdmcgPSBzdmcucmVwbGFjZSgvPCEtLS57MSx9LS0+L2csICcnKTtcblx0Ly8gcmVtb3ZlIHVubmVjZXNzYXJ5IGF0dHJpYnV0ZXNcblx0c3ZnID0gc3ZnLnJlcGxhY2UoL3ZlcnNpb249W1wiJ10oLnswLH0/KVtcIiddKD89W1xccz5dKS9nLCAnJyk7XG5cdC8vIHJlcGxhY2UgbmVzdGVkIHF1b3Rlc1xuXHRzdmcgPSBzdmcucmVwbGFjZSgvXCInKC57MSx9KSdcIi9nLCBcIickMSdcIik7XG5cdC8vIHJlcGxhY2UgZG91YmxlIHF1b3Rlc1xuXHRzdmcgPSBzdmcucmVwbGFjZSgvXCIvZywgXCInXCIpO1xuXHQvLyByZW1vdmUgZW1wdHkgc3BhY2VzIGJldHdlZW4gdGFnc1xuXHRzdmcgPSBzdmcucmVwbGFjZSgvPlxcc3sxLH08L2csICc+PCcpO1xuXHQvLyByZW1vdmUgZHVwbGljYXRlIHNwYWNlc1xuXHRzdmcgPSBzdmcucmVwbGFjZSgvXFxzezIsfS9nLCAnICcpO1xuXHQvLyB0cmltIGFnYWluXG5cdHN2ZyA9IHN2Zy50cmltKCk7XG5cdC8vIHNvZnQgdmFsaWRhdGUgYWdhaW5cblx0aWYgKCFzdmcuc3RhcnRzV2l0aCgnPHN2ZycpIHx8ICFzdmcuZW5kc1dpdGgoJ3N2Zz4nKSkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXHQvLyByZXBsYWNlIGFtcGVyc2FuZFxuXHRzdmcgPSBzdmcucmVwbGFjZSgvJi9nLCAnJmFtcDsnKTtcblx0Ly8gZW5jb2RlIG9ubHkgdW5zYWZlIHN5bWJvbHNcblx0c3ZnID0gc3ZnLnJlcGxhY2UoL1slIzw+P1tcXFxcXFxdXmB7fH1dL2csIGVuY29kZVVSSUNvbXBvbmVudCk7XG5cdC8vIGJ1aWxkIGRhdGEgdXJpXG5cdHN2ZyA9IGBkYXRhOmltYWdlL3N2Zyt4bWwsJHtzdmd9YDtcblx0Ly8gb2ssIHNoaXAgaXQhXG5cdHJldHVybiBzdmc7XG59O1xuXG5leHBvcnQge3R5cGUgR2VuZXJhdGVTdmdEYXRhVXJsLCBnZW5lcmF0ZVN2Z0RhdGFVcmx9O1xuIiwgInR5cGUgR2V0Qm9keSA9ICgpID0+IEpRdWVyeS5UaGVuYWJsZTxKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pj47XG5cbmNvbnN0IGdldEJvZHkgPSAoKSA9PiB7XG5cdHJldHVybiAkLnJlYWR5LnRoZW4oKCk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+ID0+IHtcblx0XHRjb25zdCAkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4gPSAkKCdib2R5Jyk7XG5cblx0XHRyZXR1cm4gJGJvZHk7XG5cdH0pO1xufTtcblxuZXhwb3J0IHt0eXBlIEdldEJvZHksIGdldEJvZHl9O1xuIiwgInR5cGUgSXNWYWxpZEtleSA9IHR5cGVvZiBpc1ZhbGlkS2V5O1xuXG5jb25zdCBpc1ZhbGlkS2V5ID0gKG9iamVjdDogb2JqZWN0LCBrZXk6IHN0cmluZyB8IG51bWJlciB8IHN5bWJvbCk6IGtleSBpcyBrZXlvZiB0eXBlb2Ygb2JqZWN0ID0+IHtcblx0cmV0dXJuIGtleSBpbiBvYmplY3Q7XG59O1xuXG5leHBvcnQge3R5cGUgSXNWYWxpZEtleSwgaXNWYWxpZEtleX07XG4iLCAidHlwZSBDbGFzc013VXJpID0gdHlwZW9mIE13VXJpO1xuXG5jbGFzcyBNd1VyaSBleHRlbmRzIFVSTCB7XG5cdHB1YmxpYyBleHRlbmQob2JqZWN0OiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSk6IHRoaXMge1xuXHRcdGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG9iamVjdCkpIHtcblx0XHRcdHRoaXMuc2VhcmNoUGFyYW1zLnNldChrZXksIHZhbHVlKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0cHVibGljIGdldFJlbGF0aXZlUGF0aCgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLnBhdGhuYW1lICsgdGhpcy5zZWFyY2ggKyB0aGlzLmhhc2g7XG5cdH1cbn1cblxuZXhwb3J0IHt0eXBlIENsYXNzTXdVcmksIE13VXJpfTtcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5KU1gnO1xuXG50eXBlIE9vdWlDb25maXJtV2l0aFN0eWxlID0gKG1lc3NhZ2U6IHN0cmluZykgPT4gSlF1ZXJ5LlByb21pc2U8Ym9vbGVhbj47XG5cbi8qKlxuICogQHJlcXVpcmVzIG9vanMtdWktd2luZG93c1xuICogQHBhcmFtIHtzdHJpbmd9IFttZXNzYWdlXVxuICogQHJldHVybiB7SlF1ZXJ5LlByb21pc2U8Ym9vbGVhbj59XG4gKi9cbmNvbnN0IG9vdWlDb25maXJtV2l0aFN0eWxlOiBPb3VpQ29uZmlybVdpdGhTdHlsZSA9IChtZXNzYWdlKSA9PlxuXHRPTy51aVxuXHRcdC5jb25maXJtKFxuXHRcdFx0JChcblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cIm9vLXVpLXdpbmRvdy1mb290XCJcblx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0Ym9yZGVyOiAnLjFyZW0gc29saWQgIzA2NDVhZCcsXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiAnZmxleCcsXG5cdFx0XHRcdFx0XHRqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWV2ZW5seScsXG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxzcGFuXG5cdFx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRmb250U2l6ZTogJzEuMnJlbScsXG5cdFx0XHRcdFx0XHRcdGZvbnRXZWlnaHQ6ICc1MDAnLFxuXHRcdFx0XHRcdFx0XHRsaW5lSGVpZ2h0OiAnMS44Jyxcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogJy40ZW0gMCcsXG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdHttZXNzYWdlfVxuXHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpIGFzIEpRdWVyeVxuXHRcdClcblx0XHQudGhlbigoaXNDb25maXJtOiBib29sZWFuKTogYm9vbGVhbiA9PiBpc0NvbmZpcm0pO1xuXG5leHBvcnQge3R5cGUgT291aUNvbmZpcm1XaXRoU3R5bGUsIG9vdWlDb25maXJtV2l0aFN0eWxlfTtcbiIsICJpbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnLi9pbml0TXdBcGknO1xuXG50eXBlIFF1ZXJ5R2xvYmFsVXNlckdyb3VwcyA9IHR5cGVvZiBxdWVyeUdsb2JhbFVzZXJHcm91cHM7XG5cbmFzeW5jIGZ1bmN0aW9uIHF1ZXJ5R2xvYmFsVXNlckdyb3VwcyhndWl1c2VyOiBzdHJpbmcpIHtcblx0Y29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoJ1V0aWwtUXVlcnlHbG9iYWxVc2VyR3JvdXBzJyk7XG5cblx0Y29uc3QgQ0FDSEVfS0VZX1BSRUZJWCA9ICdleHQuZ2FkZ2V0LlV0aWxfcXVlcnlHbG9iYWxVc2VyR3JvdXBzLSc7XG5cblx0bGV0IGdyb3Vwczogc3RyaW5nW10gPSBbXTtcblxuXHQvLyBRdWVyeSBmcm9tIGNhY2hlXG5cdC8vIENoZWNrIGlmIHVzZXIgZ3JvdXAgaW5mbyBpcyBjYWNoZWQgaW4gTG9jYWxTdG9yYWdlXG5cdC8vIElmIGNhY2hlZCwgZ2V0IHRoZW0gZnJvbSBMb2NhbFN0b3JhZ2Vcblx0aWYgKG13LnN0b3JhZ2UuZ2V0T2JqZWN0KENBQ0hFX0tFWV9QUkVGSVggKyBndWl1c2VyKSkge1xuXHRcdGdyb3VwcyA9IG13LnN0b3JhZ2UuZ2V0T2JqZWN0KENBQ0hFX0tFWV9QUkVGSVggKyBndWl1c2VyKSBhcyBzdHJpbmdbXTtcblx0XHQvLyBSZW1vdmUgJyonIGZyb20gZ3JvdXBzXG5cdFx0Z3JvdXBzID0gZ3JvdXBzLmZpbHRlcigoZWxlbWVudCkgPT4ge1xuXHRcdFx0cmV0dXJuIGVsZW1lbnQgIT09ICcqJztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHQvLyBRdWVyeSBmcm9tIHdlYlxuXHRcdC8vIFF1ZXJ5IHBhcmFtc1xuXHRcdGNvbnN0IHBhcmFtcyA9IHtcblx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0bWV0YTogJ2dsb2JhbHVzZXJpbmZvJyxcblx0XHRcdGd1aXVzZXIsXG5cdFx0XHRndWlwcm9wOiAnZ3JvdXBzJyxcblx0XHRcdHNtYXhhZ2U6IDYwMCxcblx0XHRcdG1heGFnZTogNjAwLFxuXHRcdH07XG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0XHQvLyBEZS1jb25zdHJ1Y3QgdGhlIHJlc3BvbnNlIG9iamVjdFxuXHRcdGNvbnN0IHF1ZXJ5ID0gcmVzcG9uc2VbJ3F1ZXJ5J10gYXMge1xuXHRcdFx0Z2xvYmFsdXNlcmluZm86IHtncm91cHM6IHN0cmluZ1tdOyBuYW1lOiBzdHJpbmd9O1xuXHRcdH07XG5cblx0XHRpZiAocXVlcnk/Lmdsb2JhbHVzZXJpbmZvKSB7XG5cdFx0XHRncm91cHMgPSBxdWVyeS5nbG9iYWx1c2VyaW5mbz8uZ3JvdXBzID8/IFtdO1xuXHRcdFx0Ly8gUmVtb3ZlICcqJyBmcm9tIGdyb3Vwc1xuXHRcdFx0Z3JvdXBzID0gZ3JvdXBzLmZpbHRlcigoZWxlbWVudCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gZWxlbWVudCAhPT0gJyonO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIENhY2hlIGZvciAxIGhvdXJcblx0XHRcdG13LnN0b3JhZ2Uuc2V0T2JqZWN0KENBQ0hFX0tFWV9QUkVGSVggKyBndWl1c2VyLCBncm91cHMsIDYwICogNjApO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB7cXVlcnk6IHtnbG9iYWx1c2VyaW5mbzoge25hbWU6IGd1aXVzZXIsIGdyb3Vwc319fTtcbn1cblxuZXhwb3J0IHt0eXBlIFF1ZXJ5R2xvYmFsVXNlckdyb3VwcywgcXVlcnlHbG9iYWxVc2VyR3JvdXBzfTtcbiIsICJpbXBvcnQge2luaXRNd0FwaX0gZnJvbSAnLi9pbml0TXdBcGknO1xuXG50eXBlIFF1ZXJ5VXNlckdyb3VwcyA9IHR5cGVvZiBxdWVyeVVzZXJHcm91cHM7XG5cbmFzeW5jIGZ1bmN0aW9uIHF1ZXJ5VXNlckdyb3Vwcyh1c2Vyczogc3RyaW5nW10pIHtcblx0Y29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoJ1V0aWwtUXVlcnlVc2VyR3JvdXBzJyk7XG5cblx0Y29uc3QgQ0FDSEVfS0VZX1BSRUZJWCA9ICdleHQuZ2FkZ2V0LlV0aWxfcXVlcnlVc2VyR3JvdXBzLSc7XG5cblx0Y29uc3QgY2FjaGVkUXVlcnlVc2Vyczoge2dyb3Vwczogc3RyaW5nW107IG5hbWU6IHN0cmluZ31bXSA9IFtdO1xuXG5cdC8vIFF1ZXJ5IGZyb20gY2FjaGVcblx0Zm9yIChjb25zdCB1c2VyIG9mIHVzZXJzKSB7XG5cdFx0Ly8gQ2hlY2sgaWYgdXNlciBncm91cCBpbmZvIGlzIGNhY2hlZCBpbiBMb2NhbFN0b3JhZ2Vcblx0XHQvLyBJZiBjYWNoZWQsIGdldCB0aGVtIGZyb20gTG9jYWxTdG9yYWdlXG5cdFx0aWYgKG13LnN0b3JhZ2UuZ2V0T2JqZWN0KENBQ0hFX0tFWV9QUkVGSVggKyB1c2VyKSkge1xuXHRcdFx0bGV0IGdyb3VwcyA9IG13LnN0b3JhZ2UuZ2V0T2JqZWN0KENBQ0hFX0tFWV9QUkVGSVggKyB1c2VyKSBhcyBzdHJpbmdbXTtcblx0XHRcdC8vIFJlbW92ZSAnKicgZnJvbSBncm91cHNcblx0XHRcdGdyb3VwcyA9IGdyb3Vwcy5maWx0ZXIoKGVsZW1lbnQpID0+IHtcblx0XHRcdFx0cmV0dXJuIGVsZW1lbnQgIT09ICcqJztcblx0XHRcdH0pO1xuXHRcdFx0Ly8gU3RvcmUgaW50byBhcnJheVxuXHRcdFx0Y2FjaGVkUXVlcnlVc2Vyc1tjYWNoZWRRdWVyeVVzZXJzLmxlbmd0aF0gPSB7bmFtZTogdXNlciwgZ3JvdXBzfTtcblx0XHR9XG5cdH1cblxuXHQvLyBRdWVyeSBmcm9tIHdlYlxuXHRjb25zdCB1c3VzZXJzID0gdXNlcnMuZmlsdGVyKCh2KSA9PiB7XG5cdFx0Ly8gUmVtb3ZlIHVzZXIgdGhhdCBoYXZlIGNhY2hlZCB1c2VyIGdyb3VwcyBsb2NhbGx5XG5cdFx0cmV0dXJuICFtdy5zdG9yYWdlLmdldE9iamVjdChDQUNIRV9LRVlfUFJFRklYICsgdik7XG5cdH0pO1xuXG5cdC8vIFF1ZXJ5IHBhcmFtc1xuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5VXNlcnNQYXJhbXMgPSB7XG5cdFx0dXN1c2Vycyxcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdGxpc3Q6ICd1c2VycycsXG5cdFx0dXNwcm9wOiAnZ3JvdXBzJyxcblx0XHRzbWF4YWdlOiA2MDAsXG5cdFx0bWF4YWdlOiA2MDAsXG5cdH07XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXG5cdC8vIERlLWNvbnN0cnVjdCB0aGUgcmVzcG9uc2Ugb2JqZWN0XG5cdGNvbnN0IHF1ZXJ5ID0gcmVzcG9uc2VbJ3F1ZXJ5J10gYXMge1xuXHRcdHVzZXJzOiB7Z3JvdXBzOiBzdHJpbmdbXTsgbmFtZTogc3RyaW5nfVtdO1xuXHR9O1xuXHRjb25zdCBxdWVyeVVzZXJzID0gWy4uLihxdWVyeT8udXNlcnMgPz8gW10pLCAuLi5jYWNoZWRRdWVyeVVzZXJzXTtcblxuXHRmb3IgKGNvbnN0IHVzZXIgb2YgcXVlcnlVc2Vycykge1xuXHRcdGlmICh1c2VyPy5ncm91cHMgJiYgdXNlcj8ubmFtZSkge1xuXHRcdFx0bGV0IHtncm91cHN9ID0gdXNlcjtcblx0XHRcdC8vIFJlbW92ZSAnKicgZnJvbSBncm91cHNcblx0XHRcdGdyb3VwcyA9IGdyb3Vwcy5maWx0ZXIoKGVsZW1lbnQpID0+IHtcblx0XHRcdFx0cmV0dXJuIGVsZW1lbnQgIT09ICcqJztcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBDYWNoZSBmb3IgMSBob3VyXG5cdFx0XHRtdy5zdG9yYWdlLnNldE9iamVjdChDQUNIRV9LRVlfUFJFRklYICsgdXNlci5uYW1lLCBncm91cHMsIDYwICogNjApO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB7cXVlcnk6IHt1c2VyczogcXVlcnlVc2Vyc319O1xufVxuXG5leHBvcnQge3R5cGUgUXVlcnlVc2VyR3JvdXBzLCBxdWVyeVVzZXJHcm91cHN9O1xuIiwgInR5cGUgU2Nyb2xsVG9wID0gKFxuXHR0YXJnZXRIZWlnaHQ6IG51bWJlciB8IHN0cmluZyxcblx0ZWZmZWN0c09wdGlvbnNPckR1cmF0aW9uPzogSlF1ZXJ5LkVmZmVjdHNPcHRpb25zPEhUTUxFbGVtZW50PiB8IG51bWJlciB8ICdmYXN0JyB8ICdzbG93J1xuKSA9PiB2b2lkO1xuXG5jb25zdCBzY3JvbGxUb3A6IFNjcm9sbFRvcCA9ICh0YXJnZXRIZWlnaHQsIGVmZmVjdHNPcHRpb25zT3JEdXJhdGlvbiA9IHt9KSA9PiB7XG5cdGNvbnN0IG9wdGlvbnM6IEpRdWVyeS5FZmZlY3RzT3B0aW9uczxIVE1MRWxlbWVudD4gPVxuXHRcdHR5cGVvZiBlZmZlY3RzT3B0aW9uc09yRHVyYXRpb24gPT09ICdudW1iZXInIHx8IHR5cGVvZiBlZmZlY3RzT3B0aW9uc09yRHVyYXRpb24gPT09ICdzdHJpbmcnXG5cdFx0XHQ/IHtcblx0XHRcdFx0XHRkdXJhdGlvbjogZWZmZWN0c09wdGlvbnNPckR1cmF0aW9uLFxuXHRcdFx0XHRcdGVhc2luZzogJ2xpbmVhcicsXG5cdFx0XHRcdH1cblx0XHRcdDoge1xuXHRcdFx0XHRcdGR1cmF0aW9uOiAnc2xvdycsXG5cdFx0XHRcdFx0ZWFzaW5nOiAnbGluZWFyJyxcblx0XHRcdFx0XHQuLi5lZmZlY3RzT3B0aW9uc09yRHVyYXRpb24sXG5cdFx0XHRcdH07XG5cdCQoZG9jdW1lbnQpLmZpbmQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKFxuXHRcdHtcblx0XHRcdHNjcm9sbFRvcDogdGFyZ2V0SGVpZ2h0LFxuXHRcdH0sXG5cdFx0b3B0aW9uc1xuXHQpO1xufTtcblxuZXhwb3J0IHt0eXBlIFNjcm9sbFRvcCwgc2Nyb2xsVG9wfTtcbiIsICJpbXBvcnQge2dlbmVyYXRlQXJyYXl9IGZyb20gJy4vZ2VuZXJhdGVBcnJheSc7XG5cbnR5cGUgVXNlcklzSW5Hcm91cCA9IHR5cGVvZiB1c2VySXNJbkdyb3VwO1xuXG5jb25zdCB1c2VySXNJbkdyb3VwID0gKGdyb3Vwczogc3RyaW5nIHwgc3RyaW5nW10pID0+IHtcblx0Y29uc3Qge3dnVXNlckdyb3Vwcywgd2dHbG9iYWxHcm91cHN9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRyZXR1cm4gWy4uLih3Z1VzZXJHcm91cHMgfHwgW10pLCAuLi4oKHdnR2xvYmFsR3JvdXBzIGFzIHN0cmluZ1tdKSB8fCBbXSldLnNvbWUoKGVsZW1lbnQ6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuXHRcdHJldHVybiBnZW5lcmF0ZUFycmF5KGdyb3VwcykuaW5jbHVkZXMoZWxlbWVudCk7XG5cdH0pO1xufTtcblxuZXhwb3J0IHt0eXBlIFVzZXJJc0luR3JvdXAsIHVzZXJJc0luR3JvdXB9O1xuIiwgInR5cGUgR2V0V3BTdW1tYXJ5Q29udGVudCA9IHR5cGVvZiBnZXRXcFN1bW1hcnlDb250ZW50O1xudHlwZSBTZXRXcFN1bW1hcnlDb250ZW50ID0gdHlwZW9mIHNldFdwU3VtbWFyeUNvbnRlbnQ7XG5cbmNvbnN0IGdldFdwU3VtbWFyeUNvbnRlbnQgPSAoeyRlZGl0Rm9ybX06IHskZWRpdEZvcm06IEpRdWVyeTxIVE1MRWxlbWVudD59KTogc3RyaW5nID0+IHtcblx0cmV0dXJuICRlZGl0Rm9ybS5maW5kPEhUTUxJbnB1dEVsZW1lbnQ+KCcjd3BTdW1tYXJ5Jyk/LnZhbCgpID8/ICcnO1xufTtcblxuY29uc3Qgc2V0V3BTdW1tYXJ5Q29udGVudCA9ICh7JGVkaXRGb3JtLCBjb250ZW50fTogeyRlZGl0Rm9ybTogSlF1ZXJ5PEhUTUxFbGVtZW50PjsgY29udGVudDogc3RyaW5nfSk6IHZvaWQgPT4ge1xuXHQkZWRpdEZvcm0uZmluZDxIVE1MSW5wdXRFbGVtZW50PignI3dwU3VtbWFyeScpLnZhbChjb250ZW50KTtcbn07XG5cbmV4cG9ydCB7Z2V0V3BTdW1tYXJ5Q29udGVudCwgdHlwZSBHZXRXcFN1bW1hcnlDb250ZW50LCBzZXRXcFN1bW1hcnlDb250ZW50LCB0eXBlIFNldFdwU3VtbWFyeUNvbnRlbnR9O1xuIiwgInR5cGUgR2V0V3BUZXh0Ym94MUNvbnRlbnQgPSB0eXBlb2YgZ2V0V3BUZXh0Ym94MUNvbnRlbnQ7XG50eXBlIFNldFdwVGV4dGJveDFDb250ZW50ID0gdHlwZW9mIHNldFdwVGV4dGJveDFDb250ZW50O1xuXG5jb25zdCBnZXRXcFRleHRib3gxQ29udGVudCA9ICh7JGVkaXRGb3JtfTogeyRlZGl0Rm9ybTogSlF1ZXJ5PEhUTUxFbGVtZW50Pn0pOiBzdHJpbmcgPT4ge1xuXHRyZXR1cm4gJGVkaXRGb3JtLmZpbmQ8SFRNTFRleHRBcmVhRWxlbWVudD4oJyN3cFRleHRib3gxJykudGV4dFNlbGVjdGlvbignZ2V0Q29udGVudHMnKSA/PyAnJztcbn07XG5cbmNvbnN0IHNldFdwVGV4dGJveDFDb250ZW50ID0gKHskZWRpdEZvcm0sIGNvbnRlbnR9OiB7JGVkaXRGb3JtOiBKUXVlcnk8SFRNTEVsZW1lbnQ+OyBjb250ZW50OiBzdHJpbmd9KTogdm9pZCA9PiB7XG5cdCRlZGl0Rm9ybS5maW5kPEhUTUxUZXh0QXJlYUVsZW1lbnQ+KCcjd3BUZXh0Ym94MScpLnRleHRTZWxlY3Rpb24oJ3NldENvbnRlbnRzJywgY29udGVudCk7XG59O1xuXG5leHBvcnQge2dldFdwVGV4dGJveDFDb250ZW50LCB0eXBlIEdldFdwVGV4dGJveDFDb250ZW50LCBzZXRXcFRleHRib3gxQ29udGVudCwgdHlwZSBTZXRXcFRleHRib3gxQ29udGVudH07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLGVBQUEsQ0FBQTtBQUFBQyxTQUFBRCxjQUFBO0VBQUFFLE9BQUFBLE1BQUFBO0VBQUFDLDZCQUFBQSxNQUFBQTtFQUFBQyxvQ0FBQUEsTUFBQUE7RUFBQUMscUJBQUFBLE1BQUFBO0VBQUFDLG1CQUFBQSxNQUFBQTtFQUFBQyxPQUFBQSxNQUFBQTtFQUFBQyxjQUFBQSxNQUFBQTtFQUFBQyxlQUFBQSxNQUFBQTtFQUFBQyxvQkFBQUEsTUFBQUE7RUFBQUMsU0FBQUEsTUFBQUE7RUFBQUMscUJBQUFBLE1BQUFBO0VBQUFDLHNCQUFBQSxNQUFBQTtFQUFBQyxXQUFBQSxNQUFBQTtFQUFBQyxZQUFBQSxNQUFBQTtFQUFBQyxzQkFBQUEsTUFBQUE7RUFBQUMsdUJBQUFBLE1BQUFBO0VBQUFDLGlCQUFBQSxNQUFBQTtFQUFBQyxXQUFBQSxNQUFBQTtFQUFBQyxxQkFBQUEsTUFBQUE7RUFBQUMsc0JBQUFBLE1BQUFBO0VBQUFDLGFBQUFBLE1BQUFBO0VBQUFDLGVBQUFBLE1BQUFBO0FBQUEs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O0FDbkJBLElBQU1QLGdCQUFpQjRJLFlBQThCO0FBQ3BELFFBQU07SUFBQ21DO0lBQWNDO0VBQWMsSUFBSWxKLEdBQUdtSixPQUFPckgsSUFBSTtBQUNyRCxTQUFPLENBQUMsR0FBSW1ILGdCQUFnQixDQUFBLEdBQUssR0FBS0Msa0JBQStCLENBQUEsQ0FBRyxFQUFFRSxLQUFNbEMsYUFBNkI7QUFDNUcsV0FBTzlKLGNBQWMwSixNQUFNLEVBQUU1SCxTQUFTZ0ksT0FBTztFQUM5QyxDQUFDO0FBQ0Y7O0FDTkEsSUFBTTNKLHNCQUFzQkEsQ0FBQztFQUFDOEw7QUFBUyxNQUFnRDtBQUFBLE1BQUFDLHFCQUFBQztBQUN0RixVQUFBRCx1QkFBQUMsa0JBQU9GLFVBQVVOLEtBQXVCLFlBQVksT0FBQSxRQUFBUSxvQkFBQSxTQUFBLFNBQTdDQSxnQkFBZ0RDLElBQUksT0FBQSxRQUFBRix3QkFBQSxTQUFBQSxzQkFBSztBQUNqRTtBQUVBLElBQU12TCxzQkFBc0JBLENBQUM7RUFBQ3NMO0VBQVdJO0FBQU8sTUFBK0Q7QUFDOUdKLFlBQVVOLEtBQXVCLFlBQVksRUFBRVMsSUFBSUMsT0FBTztBQUMzRDs7QUNOQSxJQUFNak0sdUJBQXVCQSxDQUFDO0VBQUM2TDtBQUFTLE1BQWdEO0FBQUEsTUFBQUs7QUFDdkYsVUFBQUEsd0JBQU9MLFVBQVVOLEtBQTBCLGFBQWEsRUFBRVksY0FBYyxhQUFhLE9BQUEsUUFBQUQsMEJBQUEsU0FBQUEsd0JBQUs7QUFDM0Y7QUFFQSxJQUFNMUwsdUJBQXVCQSxDQUFDO0VBQUNxTDtFQUFXSTtBQUFPLE1BQStEO0FBQy9HSixZQUFVTixLQUEwQixhQUFhLEVBQUVZLGNBQWMsZUFBZUYsT0FBTztBQUN4RjsiLAogICJuYW1lcyI6IFsiVXRpbF9leHBvcnRzIiwgIl9fZXhwb3J0IiwgIk13VXJpIiwgImFkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3ZlciIsICJjaGFuZ2VPcGFjaXR5V2hlbk1vdXNlRW50ZXJPckxlYXZlIiwgImNoZWNrQTExeUNvbmZpcm1LZXkiLCAiY2hlY2tEZXBlbmRlbmNpZXMiLCAiZGVsYXkiLCAiZmluZFZhcmlhbnRzIiwgImdlbmVyYXRlQXJyYXkiLCAiZ2VuZXJhdGVTdmdEYXRhVXJsIiwgImdldEJvZHkiLCAiZ2V0V3BTdW1tYXJ5Q29udGVudCIsICJnZXRXcFRleHRib3gxQ29udGVudCIsICJpbml0TXdBcGkiLCAiaXNWYWxpZEtleSIsICJvb3VpQ29uZmlybVdpdGhTdHlsZSIsICJxdWVyeUdsb2JhbFVzZXJHcm91cHMiLCAicXVlcnlVc2VyR3JvdXBzIiwgInNjcm9sbFRvcCIsICJzZXRXcFN1bW1hcnlDb250ZW50IiwgInNldFdwVGV4dGJveDFDb250ZW50IiwgInVuaXF1ZUFycmF5IiwgInVzZXJJc0luR3JvdXAiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAiX190b0NvbW1vbkpTIiwgInRhcmdldCIsICJ0eXBlIiwgImxpc3RlbmVyIiwgIm9wdGlvbnMiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJyZW1vdmUiLCAicmVtb3ZlRXZlbnRMaXN0ZW5lciIsICJldmVudCIsICJvcGFjaXR5IiwgImN1cnJlbnRUYXJnZXQiLCAic3R5bGUiLCAidG9TdHJpbmciLCAiaW5jbHVkZXMiLCAia2V5IiwgImFyZ3MiLCAiZmxhdE1hcCIsICJhcmciLCAiQXJyYXkiLCAiaXNBcnJheSIsICJOb2RlTGlzdCIsICJ1c2VyQWdlbnQiLCAiYXBpVXJpIiwgImFwaU9wdGlvbnMiLCAiYWpheCIsICJoZWFkZXJzIiwgImNvbmNhdCIsICJtdyIsICJGb3JlaWduQXBpIiwgIkFwaSIsICJ1bmlxdWVBcnJheTIiLCAicmVzdWx0IiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgIml0ZW0iLCAidmFsdWUiLCAibGVuZ3RoIiwgImVyciIsICJlIiwgImYiLCAiX3giLCAiX3gyIiwgIl9jaGVja0RlcGVuZGVuY2llcyIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiZ2FkZ2V0TmFtZXMiLCAib3B0aW9uIiwgImFwaSIsICJnYWRnZXRzIiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgImdhZGdldCIsICJ1c2VyIiwgImdldCIsICJwb3N0V2l0aEVkaXRUb2tlbiIsICJhY3Rpb24iLCAiY2hhbmdlIiwgImxvYWRlciIsICJ1c2luZyIsICJtcyIsICJQcm9taXNlIiwgInJlc29sdmUiLCAic2V0VGltZW91dCIsICJfeDMiLCAiX2ZpbmRWYXJpYW50cyIsICJ0ZXh0IiwgIlZBUklBTlRTIiwgImFsbFZhcmlhbnRzIiwgInBhcmFtcyIsICJjb250ZW50bW9kZWwiLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicHJvcCIsICJ0aXRsZSIsICJfaTIiLCAiX1ZBUklBTlRTIiwgIl9yZXNwb25zZSRxdWVyeSIsICJ2YXJpYW50IiwgInVzZWxhbmciLCAicmVzcG9uc2UiLCAicG9zdCIsICJkaXNwbGF5dGl0bGUiLCAidmFyaWFudEVsZW1lbnQiLCAiZG9jdW1lbnQiLCAiY3JlYXRlRWxlbWVudCIsICJpbm5lckhUTUwiLCAidGV4dENvbnRlbnQiLCAic3ZnIiwgInRyaW0iLCAic2xpY2UiLCAiaW5kZXhPZiIsICJzdGFydHNXaXRoIiwgImVuZHNXaXRoIiwgInJlcGxhY2UiLCAiZW5jb2RlVVJJQ29tcG9uZW50IiwgIiQiLCAicmVhZHkiLCAidGhlbiIsICIkYm9keSIsICJvYmplY3QiLCAiVVJMIiwgImV4dGVuZCIsICJfaSIsICJfT2JqZWN0JGVudHJpZXMiLCAiT2JqZWN0IiwgImVudHJpZXMiLCAic2VhcmNoUGFyYW1zIiwgInNldCIsICJnZXRSZWxhdGl2ZVBhdGgiLCAicGF0aG5hbWUiLCAic2VhcmNoIiwgImhhc2giLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiX190b0VTTSIsICJyZXF1aXJlIiwgIm1lc3NhZ2UiLCAiT08iLCAidWkiLCAiY29uZmlybSIsICJkZWZhdWx0IiwgImNsYXNzTmFtZSIsICJib3JkZXIiLCAiZGlzcGxheSIsICJqdXN0aWZ5Q29udGVudCIsICJmb250U2l6ZSIsICJmb250V2VpZ2h0IiwgImxpbmVIZWlnaHQiLCAicGFkZGluZyIsICJpc0NvbmZpcm0iLCAiX3g0IiwgIl9xdWVyeUdsb2JhbFVzZXJHcm91cHMiLCAiZ3VpdXNlciIsICJDQUNIRV9LRVlfUFJFRklYIiwgImdyb3VwcyIsICJzdG9yYWdlIiwgImdldE9iamVjdCIsICJmaWx0ZXIiLCAiZWxlbWVudCIsICJtZXRhIiwgImd1aXByb3AiLCAic21heGFnZSIsICJtYXhhZ2UiLCAicXVlcnkiLCAiZ2xvYmFsdXNlcmluZm8iLCAiX3F1ZXJ5JGdsb2JhbHVzZXJpbmZvIiwgIl9xdWVyeSRnbG9iYWx1c2VyaW5mbzIiLCAic2V0T2JqZWN0IiwgIm5hbWUiLCAiX3g1IiwgIl9xdWVyeVVzZXJHcm91cHMiLCAidXNlcnMiLCAiX3F1ZXJ5JHVzZXJzIiwgImNhY2hlZFF1ZXJ5VXNlcnMiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAidXN1c2VycyIsICJ2IiwgImxpc3QiLCAidXNwcm9wIiwgInF1ZXJ5VXNlcnMiLCAiX2kzIiwgIl9xdWVyeVVzZXJzIiwgInRhcmdldEhlaWdodCIsICJlZmZlY3RzT3B0aW9uc09yRHVyYXRpb24iLCAiZHVyYXRpb24iLCAiZWFzaW5nIiwgImZpbmQiLCAiYW5pbWF0ZSIsICJ3Z1VzZXJHcm91cHMiLCAid2dHbG9iYWxHcm91cHMiLCAiY29uZmlnIiwgInNvbWUiLCAiJGVkaXRGb3JtIiwgIl8kZWRpdEZvcm0kZmluZCR2YWwiLCAiXyRlZGl0Rm9ybSRmaW5kIiwgInZhbCIsICJjb250ZW50IiwgIl8kZWRpdEZvcm0kZmluZCR0ZXh0UyIsICJ0ZXh0U2VsZWN0aW9uIl0KfQo=

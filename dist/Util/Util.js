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
  addEventListenerWithRemover: () => addEventListenerWithRemover,
  changeOpacityWhenMouseEnterOrLeave: () => changeOpacityWhenMouseEnterOrLeave,
  checkA11yConfirmKey: () => checkA11yConfirmKey,
  checkDependencies: () => checkDependencies,
  delay: () => delay,
  generateArray: () => generateArray,
  generateSvgDataUrl: () => generateSvgDataUrl,
  getBody: () => getBody,
  getWpSummaryContent: () => getWpSummaryContent,
  getWpTextbox1Content: () => getWpTextbox1Content,
  initMwApi: () => initMwApi,
  isValidKey: () => isValidKey,
  oouiConfirmWithStyle: () => oouiConfirmWithStyle,
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
  /**
   * @see {@link https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array/922982}
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
var checkDependencies = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* (gadgetNames, option = "1") {
    const api = initMwApi("Util-CheckDependencies");
    gadgetNames = uniqueArray(generateArray(gadgetNames));
    var _iterator3 = _createForOfIteratorHelper(gadgetNames), _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
        const gadgetName = _step3.value;
        if (option === "0" && mw.user.options.get("gadget-".concat(gadgetName)) || option === "1" && !mw.user.options.get("gadget-".concat(gadgetName))) {
          yield api.postWithEditToken({
            action: "options",
            change: "gadget-".concat(gadgetName, "=").concat(option)
          });
          yield mw.loader.using("ext.gadget.".concat(gadgetName));
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  });
  return function checkDependencies2(_x) {
    return _ref.apply(this, arguments);
  };
}();
//! src/Util/modules/delay.ts
var delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};
//! src/Util/modules/generateSvgDataUrl.ts
var generateSvgDataUrl = (svg) => {
  /*!
   * SPDX-License-Identifier: MIT
   *
   * @file svg-to-data-uri.js {@link https://github.com/heyallan/svg-to-data-uri/}
   *
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
//! src/Util/modules/oouiConfirmWithStyle.tsx
var import_ext_gadget = __toESM(require("ext.gadget.React"), 1);
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1V0aWwvVXRpbC50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2FkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlci50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2NoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmUudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9jaGVja0ExMXlDb25maXJtS2V5LnRzIiwgInNyYy9VdGlsL21vZHVsZXMvZ2VuZXJhdGVBcnJheS50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2luaXRNd0FwaS50cyIsICJzcmMvVXRpbC9tb2R1bGVzL3VuaXF1ZUFycmF5LnRzIiwgInNyYy9VdGlsL21vZHVsZXMvY2hlY2tEZXBlbmRlbmNpZXMudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9kZWxheS50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2dlbmVyYXRlU3ZnRGF0YVVybC50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2dldEJvZHkudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9pc1ZhbGlkS2V5LnRzIiwgInNyYy9VdGlsL21vZHVsZXMvb291aUNvbmZpcm1XaXRoU3R5bGUudHN4IiwgInNyYy9VdGlsL21vZHVsZXMvc2Nyb2xsVG9wLnRzIiwgInNyYy9VdGlsL21vZHVsZXMvdXNlcklzSW5Hcm91cC50cyIsICJzcmMvVXRpbC9tb2R1bGVzL3dwU3VtbWFyeUNvbnRlbnQudHMiLCAic3JjL1V0aWwvbW9kdWxlcy93cFRleHRib3gxQ29udGVudC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiZXhwb3J0IHthZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXJ9IGZyb20gJy4vbW9kdWxlcy9hZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXInO1xuZXhwb3J0IHtjaGFuZ2VPcGFjaXR5V2hlbk1vdXNlRW50ZXJPckxlYXZlfSBmcm9tICcuL21vZHVsZXMvY2hhbmdlT3BhY2l0eVdoZW5Nb3VzZUVudGVyT3JMZWF2ZSc7XG5leHBvcnQge2NoZWNrQTExeUNvbmZpcm1LZXl9IGZyb20gJy4vbW9kdWxlcy9jaGVja0ExMXlDb25maXJtS2V5JztcbmV4cG9ydCB7Y2hlY2tEZXBlbmRlbmNpZXN9IGZyb20gJy4vbW9kdWxlcy9jaGVja0RlcGVuZGVuY2llcy50cyc7XG5leHBvcnQge2RlbGF5fSBmcm9tICcuL21vZHVsZXMvZGVsYXknO1xuZXhwb3J0IHtnZW5lcmF0ZUFycmF5fSBmcm9tICcuL21vZHVsZXMvZ2VuZXJhdGVBcnJheSc7XG5leHBvcnQge2dlbmVyYXRlU3ZnRGF0YVVybH0gZnJvbSAnLi9tb2R1bGVzL2dlbmVyYXRlU3ZnRGF0YVVybCc7XG5leHBvcnQge2dldEJvZHl9IGZyb20gJy4vbW9kdWxlcy9nZXRCb2R5JztcbmV4cG9ydCB7aW5pdE13QXBpfSBmcm9tICcuL21vZHVsZXMvaW5pdE13QXBpJztcbmV4cG9ydCB7aXNWYWxpZEtleX0gZnJvbSAnLi9tb2R1bGVzL2lzVmFsaWRLZXknO1xuZXhwb3J0IHtvb3VpQ29uZmlybVdpdGhTdHlsZX0gZnJvbSAnLi9tb2R1bGVzL29vdWlDb25maXJtV2l0aFN0eWxlJztcbmV4cG9ydCB7c2Nyb2xsVG9wfSBmcm9tICcuL21vZHVsZXMvc2Nyb2xsVG9wJztcbmV4cG9ydCB7dXNlcklzSW5Hcm91cH0gZnJvbSAnLi9tb2R1bGVzL3VzZXJJc0luR3JvdXAnO1xuZXhwb3J0IHt1bmlxdWVBcnJheX0gZnJvbSAnLi9tb2R1bGVzL3VuaXF1ZUFycmF5JztcbmV4cG9ydCB7Z2V0V3BTdW1tYXJ5Q29udGVudCwgc2V0V3BTdW1tYXJ5Q29udGVudH0gZnJvbSAnLi9tb2R1bGVzL3dwU3VtbWFyeUNvbnRlbnQnO1xuZXhwb3J0IHtnZXRXcFRleHRib3gxQ29udGVudCwgc2V0V3BUZXh0Ym94MUNvbnRlbnR9IGZyb20gJy4vbW9kdWxlcy93cFRleHRib3gxQ29udGVudCc7XG4iLCAidHlwZSBBZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXIgPSA8XG5cdFRhcmdldCBleHRlbmRzIERvY3VtZW50IHwgSFRNTEVsZW1lbnQgfCBFbGVtZW50IHwgTWVkaWFRdWVyeUxpc3QgfCBXaW5kb3csXG5cdFR5cGUgZXh0ZW5kcyBUYXJnZXQgZXh0ZW5kcyBEb2N1bWVudFxuXHRcdD8ga2V5b2YgRG9jdW1lbnRFdmVudE1hcFxuXHRcdDogVGFyZ2V0IGV4dGVuZHMgSFRNTEVsZW1lbnRcblx0XHRcdD8ga2V5b2YgSFRNTEVsZW1lbnRFdmVudE1hcFxuXHRcdFx0OiBUYXJnZXQgZXh0ZW5kcyBNZWRpYVF1ZXJ5TGlzdFxuXHRcdFx0XHQ/IGtleW9mIE1lZGlhUXVlcnlMaXN0RXZlbnRNYXBcblx0XHRcdFx0OiBUYXJnZXQgZXh0ZW5kcyBXaW5kb3dcblx0XHRcdFx0XHQ/IGtleW9mIFdpbmRvd0V2ZW50TWFwXG5cdFx0XHRcdFx0OiBrZXlvZiBHbG9iYWxFdmVudEhhbmRsZXJzRXZlbnRNYXAsXG5cdExpc3RlbmVyIGV4dGVuZHMgVGFyZ2V0IGV4dGVuZHMgRG9jdW1lbnRcblx0XHQ/IFR5cGUgZXh0ZW5kcyBrZXlvZiBEb2N1bWVudEV2ZW50TWFwXG5cdFx0XHQ/ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBEb2N1bWVudEV2ZW50TWFwW1R5cGVdKSA9PiB1bmtub3duXG5cdFx0XHQ6ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBFdmVudCkgPT4gdW5rbm93blxuXHRcdDogVGFyZ2V0IGV4dGVuZHMgSFRNTEVsZW1lbnRcblx0XHRcdD8gVHlwZSBleHRlbmRzIGtleW9mIEhUTUxFbGVtZW50RXZlbnRNYXBcblx0XHRcdFx0PyAodGhpczogVGFyZ2V0LCBldmVudDogSFRNTEVsZW1lbnRFdmVudE1hcFtUeXBlXSkgPT4gdW5rbm93blxuXHRcdFx0XHQ6ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBFdmVudCkgPT4gdW5rbm93blxuXHRcdFx0OiBUYXJnZXQgZXh0ZW5kcyBFbGVtZW50XG5cdFx0XHRcdD8gVHlwZSBleHRlbmRzIGtleW9mIEVsZW1lbnRFdmVudE1hcFxuXHRcdFx0XHRcdD8gKHRoaXM6IFRhcmdldCwgZXZlbnQ6IEVsZW1lbnRFdmVudE1hcFtUeXBlXSkgPT4gdW5rbm93blxuXHRcdFx0XHRcdDogKHRoaXM6IFRhcmdldCwgZXZlbnQ6IEV2ZW50KSA9PiB1bmtub3duXG5cdFx0XHRcdDogVGFyZ2V0IGV4dGVuZHMgTWVkaWFRdWVyeUxpc3Rcblx0XHRcdFx0XHQ/IFR5cGUgZXh0ZW5kcyBrZXlvZiBNZWRpYVF1ZXJ5TGlzdEV2ZW50TWFwXG5cdFx0XHRcdFx0XHQ/ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBNZWRpYVF1ZXJ5TGlzdEV2ZW50TWFwW1R5cGVdKSA9PiB1bmtub3duXG5cdFx0XHRcdFx0XHQ6ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBFdmVudCkgPT4gdW5rbm93blxuXHRcdFx0XHRcdDogVGFyZ2V0IGV4dGVuZHMgV2luZG93XG5cdFx0XHRcdFx0XHQ/IFR5cGUgZXh0ZW5kcyBrZXlvZiBXaW5kb3dFdmVudE1hcFxuXHRcdFx0XHRcdFx0XHQ/ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBXaW5kb3dFdmVudE1hcFtUeXBlXSkgPT4gdW5rbm93blxuXHRcdFx0XHRcdFx0XHQ6ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBFdmVudCkgPT4gdW5rbm93blxuXHRcdFx0XHRcdFx0OiAodGhpczogVGFyZ2V0LCBldmVudDogRXZlbnQpID0+IHVua25vd24sXG4+KHtcblx0dGFyZ2V0LFxuXHR0eXBlLFxuXHRsaXN0ZW5lcixcblx0b3B0aW9ucyxcbn06IHtcblx0dGFyZ2V0OiBUYXJnZXQ7XG5cdHR5cGU6IFR5cGU7XG5cdGxpc3RlbmVyOiBMaXN0ZW5lcjtcblx0b3B0aW9ucz86IEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zO1xufSkgPT4ge1xuXHRyZW1vdmU6ICgpID0+IHZvaWQ7XG59O1xuXG5jb25zdCBhZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXI6IEFkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3ZlciA9ICh7dGFyZ2V0LCB0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyA9IHt9fSkgPT4ge1xuXHR0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciBhcyBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0LCBvcHRpb25zKTtcblx0cmV0dXJuIHtcblx0XHRyZW1vdmU6ICgpOiB2b2lkID0+IHtcblx0XHRcdHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyIGFzIEV2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3QsIG9wdGlvbnMpO1xuXHRcdH0sXG5cdH07XG59O1xuXG5leHBvcnQge3R5cGUgQWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyLCBhZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXJ9O1xuIiwgInR5cGUgQ2hhbmdlT3BhY2l0eVdoZW5Nb3VzZUVudGVyT3JMZWF2ZSA9IChldmVudDogTW91c2VFdmVudCB8IEpRdWVyeS5UcmlnZ2VyZWRFdmVudCwgb3BhY2l0eT86IG51bWJlcikgPT4gdm9pZDtcblxuY29uc3QgY2hhbmdlT3BhY2l0eVdoZW5Nb3VzZUVudGVyT3JMZWF2ZTogQ2hhbmdlT3BhY2l0eVdoZW5Nb3VzZUVudGVyT3JMZWF2ZSA9IChldmVudCwgb3BhY2l0eSA9IDAuNykgPT4ge1xuXHQoZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MRWxlbWVudCkuc3R5bGUub3BhY2l0eSA9IGV2ZW50LnR5cGUgPT09ICdtb3VzZWVudGVyJyA/ICcxJyA6IG9wYWNpdHkudG9TdHJpbmcoKTtcbn07XG5cbmV4cG9ydCB7dHlwZSBDaGFuZ2VPcGFjaXR5V2hlbk1vdXNlRW50ZXJPckxlYXZlLCBjaGFuZ2VPcGFjaXR5V2hlbk1vdXNlRW50ZXJPckxlYXZlfTtcbiIsICJ0eXBlIENoZWNrQTExeUNvbmZpcm1LZXkgPSAoZXZlbnQ6IEtleWJvYXJkRXZlbnQgfCBNb3VzZUV2ZW50IHwgSlF1ZXJ5LkNsaWNrRXZlbnQgfCBKUXVlcnkuS2V5RG93bkV2ZW50KSA9PiBib29sZWFuO1xuXG5jb25zdCBjaGVja0ExMXlDb25maXJtS2V5OiBDaGVja0ExMXlDb25maXJtS2V5ID0gKGV2ZW50KTogYm9vbGVhbiA9PiB7XG5cdGlmIChbJ2NsaWNrJywgJ2tleWRvd24nXS5pbmNsdWRlcyhldmVudC50eXBlKSkge1xuXHRcdGlmIChldmVudC50eXBlID09PSAna2V5ZG93bicpIHtcblx0XHRcdHJldHVybiBbJ0VudGVyJywgJyAnXS5pbmNsdWRlcygoZXZlbnQgYXMgS2V5Ym9hcmRFdmVudCkua2V5KTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0cmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IHt0eXBlIENoZWNrQTExeUNvbmZpcm1LZXksIGNoZWNrQTExeUNvbmZpcm1LZXl9O1xuIiwgInR5cGUgR2VuZXJhdGVBcnJheSA9IHR5cGVvZiBnZW5lcmF0ZUFycmF5O1xuXG5mdW5jdGlvbiBnZW5lcmF0ZUFycmF5PFQgZXh0ZW5kcyBbXT4oLi4uYXJnczogKFQgfCBUW10pW10pOiBUW107XG5mdW5jdGlvbiBnZW5lcmF0ZUFycmF5PFQgZXh0ZW5kcyBOb2RlTGlzdD4oLi4uYXJnczogKFQgfCBUW10pW10pOiBOb2RlW107XG5mdW5jdGlvbiBnZW5lcmF0ZUFycmF5PFQgPSB1bmtub3duPiguLi5hcmdzOiAoVCB8IFRbXSlbXSk6IFRbXTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLXN0eWxlXG5mdW5jdGlvbiBnZW5lcmF0ZUFycmF5PFQ+KC4uLmFyZ3M6IChUIHwgVFtdKVtdKTogVFtdIHtcblx0cmV0dXJuIGFyZ3MuZmxhdE1hcCgoYXJnKSA9PiB7XG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0cmV0dXJuIGFyZztcblx0XHR9XG5cblx0XHRpZiAoYXJnIGluc3RhbmNlb2YgTm9kZUxpc3QpIHtcblx0XHRcdHJldHVybiBbLi4uYXJnXSBhcyBUO1xuXHRcdH1cblxuXHRcdHJldHVybiBbYXJnXTtcblx0fSk7XG59XG5cbmV4cG9ydCB7dHlwZSBHZW5lcmF0ZUFycmF5LCBnZW5lcmF0ZUFycmF5fTtcbiIsICJ0eXBlIEluaXRNd0FwaSA9IHR5cGVvZiBpbml0TXdBcGk7XG5cbi8qKlxuICogQHJlcXVpcmVzIG1lZGlhd2lraS5hcGlcbiAqIEBwYXJhbSB7c3RyaW5nfSBbdXNlckFnZW50XVxuICogQHBhcmFtIHtzdHJpbmd9IFthcGlVcmldXG4gKiBAcmV0dXJuIHttdy5BcGl8bXcuRm9yZWlnbkFwaX1cbiAqL1xuZnVuY3Rpb24gaW5pdE13QXBpKHVzZXJBZ2VudD86IHN0cmluZyk6IG13LkFwaTtcbmZ1bmN0aW9uIGluaXRNd0FwaSh1c2VyQWdlbnQ6IHN0cmluZywgYXBpVXJpOiBzdHJpbmcpOiBtdy5Gb3JlaWduQXBpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtc3R5bGVcbmZ1bmN0aW9uIGluaXRNd0FwaSh1c2VyQWdlbnQ/OiBzdHJpbmcsIGFwaVVyaT86IHN0cmluZyk6IG13LkFwaSB8IG13LkZvcmVpZ25BcGkge1xuXHRjb25zdCBhcGlPcHRpb25zID0ge1xuXHRcdGFqYXg6IHtcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0J0FwaS1Vc2VyLUFnZW50JzogdXNlckFnZW50ID8gYFFpdXdlbi8xLjEgKCR7dXNlckFnZW50fSlgIDogJ1FpdXdlbi8xLjEnLFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9O1xuXG5cdGlmIChhcGlVcmkpIHtcblx0XHRyZXR1cm4gbmV3IG13LkZvcmVpZ25BcGkoYXBpVXJpLCBhcGlPcHRpb25zKTtcblx0fVxuXG5cdHJldHVybiBuZXcgbXcuQXBpKGFwaU9wdGlvbnMpO1xufVxuXG5leHBvcnQge3R5cGUgSW5pdE13QXBpLCBpbml0TXdBcGl9O1xuIiwgInR5cGUgVW5pcXVlQXJyYXkgPSB0eXBlb2YgdW5pcXVlQXJyYXk7XG5cbmNvbnN0IHVuaXF1ZUFycmF5ID0gZnVuY3Rpb24gdW5pcXVlQXJyYXk8VD4oYXJnczogVFtdKTogVFtdIHtcblx0LyoqXG5cdCAqIEBzZWUge0BsaW5rIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzkyMjk2NDUvcmVtb3ZlLWR1cGxpY2F0ZS12YWx1ZXMtZnJvbS1qcy1hcnJheS85MjI5ODJ9XG5cdCAqIEBsaWNlbnNlIENDLUJZLVNBLTQuMFxuXHQgKi9cblx0Y29uc3QgcmVzdWx0OiB0eXBlb2YgYXJncyA9IFtdO1xuXHRmb3IgKGNvbnN0IGl0ZW0gb2YgYXJncykge1xuXHRcdGlmICghcmVzdWx0LmluY2x1ZGVzKGl0ZW0pKSB7XG5cdFx0XHRyZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSBpdGVtOyAvLyBSZXBsYWNlIGBbXS5wdXNoKClgIHRvIGF2b2lkIHBvbHlmaWxsaW5nIGNvcmUtanNcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCB7dHlwZSBVbmlxdWVBcnJheSwgdW5pcXVlQXJyYXl9O1xuIiwgImltcG9ydCB7Z2VuZXJhdGVBcnJheX0gZnJvbSAnLi9nZW5lcmF0ZUFycmF5JztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICcuL2luaXRNd0FwaSc7XG5pbXBvcnQge3VuaXF1ZUFycmF5fSBmcm9tICcuL3VuaXF1ZUFycmF5JztcblxudHlwZSBDaGVja0RlcGVuZGVuY2llcyA9IChnYWRnZXROYW1lczogc3RyaW5nIHwgc3RyaW5nW10sIG9wdGlvbj86ICcwJyB8ICcxJykgPT4gUHJvbWlzZTx2b2lkPjtcblxuY29uc3QgY2hlY2tEZXBlbmRlbmNpZXMgPSBhc3luYyAoZ2FkZ2V0TmFtZXM6IHN0cmluZyB8IHN0cmluZ1tdLCBvcHRpb246ICcwJyB8ICcxJyA9ICcxJyk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaSgnVXRpbC1DaGVja0RlcGVuZGVuY2llcycpO1xuXHRnYWRnZXROYW1lcyA9IHVuaXF1ZUFycmF5KGdlbmVyYXRlQXJyYXkoZ2FkZ2V0TmFtZXMpKTtcblxuXHRmb3IgKGNvbnN0IGdhZGdldE5hbWUgb2YgZ2FkZ2V0TmFtZXMpIHtcblx0XHRpZiAoXG5cdFx0XHQob3B0aW9uID09PSAnMCcgJiYgbXcudXNlci5vcHRpb25zLmdldChgZ2FkZ2V0LSR7Z2FkZ2V0TmFtZX1gKSkgfHxcblx0XHRcdChvcHRpb24gPT09ICcxJyAmJiAhbXcudXNlci5vcHRpb25zLmdldChgZ2FkZ2V0LSR7Z2FkZ2V0TmFtZX1gKSlcblx0XHQpIHtcblx0XHRcdGF3YWl0IGFwaS5wb3N0V2l0aEVkaXRUb2tlbih7XG5cdFx0XHRcdGFjdGlvbjogJ29wdGlvbnMnLFxuXHRcdFx0XHRjaGFuZ2U6IGBnYWRnZXQtJHtnYWRnZXROYW1lfT0ke29wdGlvbn1gLFxuXHRcdFx0fSBhcyBBcGlPcHRpb25zUGFyYW1zKTtcblx0XHRcdGF3YWl0IG13LmxvYWRlci51c2luZyhgZXh0LmdhZGdldC4ke2dhZGdldE5hbWV9YCk7XG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQge3R5cGUgQ2hlY2tEZXBlbmRlbmNpZXMsIGNoZWNrRGVwZW5kZW5jaWVzfTtcbiIsICJ0eXBlIERlbGF5ID0gKG1zOiBudW1iZXIpID0+IFByb21pc2U8dm9pZD47XG5cbmNvbnN0IGRlbGF5OiBEZWxheSA9IChtcykgPT4ge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmU6ICgpID0+IHZvaWQpOiB2b2lkID0+IHtcblx0XHRzZXRUaW1lb3V0KHJlc29sdmUsIG1zKTtcblx0fSk7XG59O1xuXG5leHBvcnQge3R5cGUgRGVsYXksIGRlbGF5fTtcbiIsICJ0eXBlIEdlbmVyYXRlU3ZnRGF0YVVybCA9IChzdmc6IHN0cmluZykgPT4gc3RyaW5nO1xuXG5jb25zdCBnZW5lcmF0ZVN2Z0RhdGFVcmw6IEdlbmVyYXRlU3ZnRGF0YVVybCA9IChzdmcpID0+IHtcblx0LyohXG5cdCAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBNSVRcblx0ICpcblx0ICogQGZpbGUgc3ZnLXRvLWRhdGEtdXJpLmpzIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vaGV5YWxsYW4vc3ZnLXRvLWRhdGEtdXJpL31cblx0ICpcblx0ICogQGF1dGhvciBBbGxhbiBNb3Jlbm9cblx0ICogQGxpY2Vuc2UgTUlUIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vaGV5YWxsYW4vc3ZnLXRvLWRhdGEtdXJpL2Jsb2IvbWFzdGVyL0xJQ0VOU0V9XG5cdCAqXG5cdCAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0ICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHQgKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdCAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0ICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdCAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cdCAqXG5cdCAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHQgKiBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXHQgKlxuXHQgKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdCAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHQgKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0ICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHQgKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHQgKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHQgKiBTT0ZUV0FSRS5cblx0ICovXG5cdHN2ZyA9IHN2Zy50cmltKCk7XG5cdC8vIHJlbW92ZSB4bWwsIGRvY3R5cGUsIGdlbmVyYXRvci4uLlxuXHRzdmcgPSBzdmcuc2xpY2Uoc3ZnLmluZGV4T2YoJzxzdmcnKSk7XG5cdC8vIHNvZnQgdmFsaWRhdGVcblx0aWYgKCFzdmcuc3RhcnRzV2l0aCgnPHN2ZycpIHx8ICFzdmcuZW5kc1dpdGgoJ3N2Zz4nKSkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXHQvLyBhZGQgbmFtZXNwYWNlIGlmIG5lY2Vzc2FyeVxuXHRpZiAoIXN2Zy5pbmNsdWRlcygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnKSkge1xuXHRcdHN2ZyA9IHN2Zy5yZXBsYWNlKC88c3ZnL2csIFwiPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXCIpO1xuXHR9XG5cdC8vIHJlbW92ZSBjb21tZW50c1xuXHRzdmcgPSBzdmcucmVwbGFjZSgvPCEtLS57MSx9LS0+L2csICcnKTtcblx0Ly8gcmVtb3ZlIHVubmVjZXNzYXJ5IGF0dHJpYnV0ZXNcblx0c3ZnID0gc3ZnLnJlcGxhY2UoL3ZlcnNpb249W1wiJ10oLnswLH0/KVtcIiddKD89W1xccz5dKS9nLCAnJyk7XG5cdC8vIHJlcGxhY2UgbmVzdGVkIHF1b3Rlc1xuXHRzdmcgPSBzdmcucmVwbGFjZSgvXCInKC57MSx9KSdcIi9nLCBcIickMSdcIik7XG5cdC8vIHJlcGxhY2UgZG91YmxlIHF1b3Rlc1xuXHRzdmcgPSBzdmcucmVwbGFjZSgvXCIvZywgXCInXCIpO1xuXHQvLyByZW1vdmUgZW1wdHkgc3BhY2VzIGJldHdlZW4gdGFnc1xuXHRzdmcgPSBzdmcucmVwbGFjZSgvPlxcc3sxLH08L2csICc+PCcpO1xuXHQvLyByZW1vdmUgZHVwbGljYXRlIHNwYWNlc1xuXHRzdmcgPSBzdmcucmVwbGFjZSgvXFxzezIsfS9nLCAnICcpO1xuXHQvLyB0cmltIGFnYWluXG5cdHN2ZyA9IHN2Zy50cmltKCk7XG5cdC8vIHNvZnQgdmFsaWRhdGUgYWdhaW5cblx0aWYgKCFzdmcuc3RhcnRzV2l0aCgnPHN2ZycpIHx8ICFzdmcuZW5kc1dpdGgoJ3N2Zz4nKSkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXHQvLyByZXBsYWNlIGFtcGVyc2FuZFxuXHRzdmcgPSBzdmcucmVwbGFjZSgvJi9nLCAnJmFtcDsnKTtcblx0Ly8gZW5jb2RlIG9ubHkgdW5zYWZlIHN5bWJvbHNcblx0c3ZnID0gc3ZnLnJlcGxhY2UoL1slIzw+P1tcXFxcXFxdXmB7fH1dL2csIGVuY29kZVVSSUNvbXBvbmVudCk7XG5cdC8vIGJ1aWxkIGRhdGEgdXJpXG5cdHN2ZyA9IGBkYXRhOmltYWdlL3N2Zyt4bWwsJHtzdmd9YDtcblx0Ly8gb2ssIHNoaXAgaXQhXG5cdHJldHVybiBzdmc7XG59O1xuXG5leHBvcnQge3R5cGUgR2VuZXJhdGVTdmdEYXRhVXJsLCBnZW5lcmF0ZVN2Z0RhdGFVcmx9O1xuIiwgInR5cGUgR2V0Qm9keSA9ICgpID0+IEpRdWVyeS5UaGVuYWJsZTxKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pj47XG5cbmNvbnN0IGdldEJvZHkgPSAoKSA9PiB7XG5cdHJldHVybiAkLnJlYWR5LnRoZW4oKCk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+ID0+IHtcblx0XHRjb25zdCAkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4gPSAkKCdib2R5Jyk7XG5cblx0XHRyZXR1cm4gJGJvZHk7XG5cdH0pO1xufTtcblxuZXhwb3J0IHt0eXBlIEdldEJvZHksIGdldEJvZHl9O1xuIiwgInR5cGUgSXNWYWxpZEtleSA9IHR5cGVvZiBpc1ZhbGlkS2V5O1xuXG5jb25zdCBpc1ZhbGlkS2V5ID0gKG9iamVjdDogb2JqZWN0LCBrZXk6IHN0cmluZyB8IG51bWJlciB8IHN5bWJvbCk6IGtleSBpcyBrZXlvZiB0eXBlb2Ygb2JqZWN0ID0+IHtcblx0cmV0dXJuIGtleSBpbiBvYmplY3Q7XG59O1xuXG5leHBvcnQge3R5cGUgSXNWYWxpZEtleSwgaXNWYWxpZEtleX07XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuXG50eXBlIE9vdWlDb25maXJtV2l0aFN0eWxlID0gKG1lc3NhZ2U6IHN0cmluZykgPT4gSlF1ZXJ5LlByb21pc2U8Ym9vbGVhbj47XG5cbi8qKlxuICogQHJlcXVpcmVzIG9vanMtdWktd2luZG93c1xuICogQHBhcmFtIHtzdHJpbmd9IFttZXNzYWdlXVxuICogQHJldHVybiB7SlF1ZXJ5LlByb21pc2U8Ym9vbGVhbj59XG4gKi9cbmNvbnN0IG9vdWlDb25maXJtV2l0aFN0eWxlOiBPb3VpQ29uZmlybVdpdGhTdHlsZSA9IChtZXNzYWdlKSA9PlxuXHRPTy51aVxuXHRcdC5jb25maXJtKFxuXHRcdFx0JChcblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cIm9vLXVpLXdpbmRvdy1mb290XCJcblx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0Ym9yZGVyOiAnLjFyZW0gc29saWQgIzA2NDVhZCcsXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiAnZmxleCcsXG5cdFx0XHRcdFx0XHRqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWV2ZW5seScsXG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxzcGFuXG5cdFx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRmb250U2l6ZTogJzEuMnJlbScsXG5cdFx0XHRcdFx0XHRcdGZvbnRXZWlnaHQ6ICc1MDAnLFxuXHRcdFx0XHRcdFx0XHRsaW5lSGVpZ2h0OiAnMS44Jyxcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogJy40ZW0gMCcsXG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdHttZXNzYWdlfVxuXHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpIGFzIEpRdWVyeVxuXHRcdClcblx0XHQudGhlbigoaXNDb25maXJtOiBib29sZWFuKTogYm9vbGVhbiA9PiBpc0NvbmZpcm0pO1xuXG5leHBvcnQge3R5cGUgT291aUNvbmZpcm1XaXRoU3R5bGUsIG9vdWlDb25maXJtV2l0aFN0eWxlfTtcbiIsICJ0eXBlIFNjcm9sbFRvcCA9IChcblx0dGFyZ2V0SGVpZ2h0OiBudW1iZXIgfCBzdHJpbmcsXG5cdGVmZmVjdHNPcHRpb25zT3JEdXJhdGlvbj86IEpRdWVyeS5FZmZlY3RzT3B0aW9uczxIVE1MRWxlbWVudD4gfCBudW1iZXIgfCAnZmFzdCcgfCAnc2xvdydcbikgPT4gdm9pZDtcblxuY29uc3Qgc2Nyb2xsVG9wOiBTY3JvbGxUb3AgPSAodGFyZ2V0SGVpZ2h0LCBlZmZlY3RzT3B0aW9uc09yRHVyYXRpb24gPSB7fSkgPT4ge1xuXHRjb25zdCBvcHRpb25zOiBKUXVlcnkuRWZmZWN0c09wdGlvbnM8SFRNTEVsZW1lbnQ+ID1cblx0XHR0eXBlb2YgZWZmZWN0c09wdGlvbnNPckR1cmF0aW9uID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgZWZmZWN0c09wdGlvbnNPckR1cmF0aW9uID09PSAnc3RyaW5nJ1xuXHRcdFx0PyB7XG5cdFx0XHRcdFx0ZHVyYXRpb246IGVmZmVjdHNPcHRpb25zT3JEdXJhdGlvbixcblx0XHRcdFx0XHRlYXNpbmc6ICdsaW5lYXInLFxuXHRcdFx0XHR9XG5cdFx0XHQ6IHtcblx0XHRcdFx0XHRkdXJhdGlvbjogJ3Nsb3cnLFxuXHRcdFx0XHRcdGVhc2luZzogJ2xpbmVhcicsXG5cdFx0XHRcdFx0Li4uZWZmZWN0c09wdGlvbnNPckR1cmF0aW9uLFxuXHRcdFx0XHR9O1xuXHQkKGRvY3VtZW50KS5maW5kKCdodG1sLCBib2R5JykuYW5pbWF0ZShcblx0XHR7XG5cdFx0XHRzY3JvbGxUb3A6IHRhcmdldEhlaWdodCxcblx0XHR9LFxuXHRcdG9wdGlvbnNcblx0KTtcbn07XG5cbmV4cG9ydCB7dHlwZSBTY3JvbGxUb3AsIHNjcm9sbFRvcH07XG4iLCAiaW1wb3J0IHtnZW5lcmF0ZUFycmF5fSBmcm9tICcuL2dlbmVyYXRlQXJyYXknO1xuXG50eXBlIFVzZXJJc0luR3JvdXAgPSB0eXBlb2YgdXNlcklzSW5Hcm91cDtcblxuY29uc3QgdXNlcklzSW5Hcm91cCA9IChncm91cHM6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiB7XG5cdGNvbnN0IHt3Z1VzZXJHcm91cHMsIHdnR2xvYmFsR3JvdXBzfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0cmV0dXJuIFsuLi4od2dVc2VyR3JvdXBzIHx8IFtdKSwgLi4uKCh3Z0dsb2JhbEdyb3VwcyBhcyBzdHJpbmdbXSkgfHwgW10pXS5zb21lKChlbGVtZW50OiBzdHJpbmcpOiBib29sZWFuID0+IHtcblx0XHRyZXR1cm4gZ2VuZXJhdGVBcnJheShncm91cHMpLmluY2x1ZGVzKGVsZW1lbnQpO1xuXHR9KTtcbn07XG5cbmV4cG9ydCB7dHlwZSBVc2VySXNJbkdyb3VwLCB1c2VySXNJbkdyb3VwfTtcbiIsICJ0eXBlIEdldFdwU3VtbWFyeUNvbnRlbnQgPSB0eXBlb2YgZ2V0V3BTdW1tYXJ5Q29udGVudDtcbnR5cGUgU2V0V3BTdW1tYXJ5Q29udGVudCA9IHR5cGVvZiBzZXRXcFN1bW1hcnlDb250ZW50O1xuXG5jb25zdCBnZXRXcFN1bW1hcnlDb250ZW50ID0gKHskZWRpdEZvcm19OiB7JGVkaXRGb3JtOiBKUXVlcnk8SFRNTEVsZW1lbnQ+fSk6IHN0cmluZyA9PiB7XG5cdHJldHVybiAkZWRpdEZvcm0uZmluZDxIVE1MSW5wdXRFbGVtZW50PignI3dwU3VtbWFyeScpPy52YWwoKSA/PyAnJztcbn07XG5cbmNvbnN0IHNldFdwU3VtbWFyeUNvbnRlbnQgPSAoeyRlZGl0Rm9ybSwgY29udGVudH06IHskZWRpdEZvcm06IEpRdWVyeTxIVE1MRWxlbWVudD47IGNvbnRlbnQ6IHN0cmluZ30pOiB2b2lkID0+IHtcblx0JGVkaXRGb3JtLmZpbmQ8SFRNTElucHV0RWxlbWVudD4oJyN3cFN1bW1hcnknKS52YWwoY29udGVudCk7XG59O1xuXG5leHBvcnQge2dldFdwU3VtbWFyeUNvbnRlbnQsIHR5cGUgR2V0V3BTdW1tYXJ5Q29udGVudCwgc2V0V3BTdW1tYXJ5Q29udGVudCwgdHlwZSBTZXRXcFN1bW1hcnlDb250ZW50fTtcbiIsICJ0eXBlIEdldFdwVGV4dGJveDFDb250ZW50ID0gdHlwZW9mIGdldFdwVGV4dGJveDFDb250ZW50O1xudHlwZSBTZXRXcFRleHRib3gxQ29udGVudCA9IHR5cGVvZiBzZXRXcFRleHRib3gxQ29udGVudDtcblxuY29uc3QgZ2V0V3BUZXh0Ym94MUNvbnRlbnQgPSAoeyRlZGl0Rm9ybX06IHskZWRpdEZvcm06IEpRdWVyeTxIVE1MRWxlbWVudD59KTogc3RyaW5nID0+IHtcblx0cmV0dXJuICRlZGl0Rm9ybS5maW5kPEhUTUxUZXh0QXJlYUVsZW1lbnQ+KCcjd3BUZXh0Ym94MScpLnRleHRTZWxlY3Rpb24oJ2dldENvbnRlbnRzJykgPz8gJyc7XG59O1xuXG5jb25zdCBzZXRXcFRleHRib3gxQ29udGVudCA9ICh7JGVkaXRGb3JtLCBjb250ZW50fTogeyRlZGl0Rm9ybTogSlF1ZXJ5PEhUTUxFbGVtZW50PjsgY29udGVudDogc3RyaW5nfSk6IHZvaWQgPT4ge1xuXHQkZWRpdEZvcm0uZmluZDxIVE1MVGV4dEFyZWFFbGVtZW50PignI3dwVGV4dGJveDEnKS50ZXh0U2VsZWN0aW9uKCdzZXRDb250ZW50cycsIGNvbnRlbnQpO1xufTtcblxuZXhwb3J0IHtnZXRXcFRleHRib3gxQ29udGVudCwgdHlwZSBHZXRXcFRleHRib3gxQ29udGVudCwgc2V0V3BUZXh0Ym94MUNvbnRlbnQsIHR5cGUgU2V0V3BUZXh0Ym94MUNvbnRlbnR9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxlQUFBLENBQUE7QUFBQUMsU0FBQUQsY0FBQTtFQUFBRSw2QkFBQUEsTUFBQUE7RUFBQUMsb0NBQUFBLE1BQUFBO0VBQUFDLHFCQUFBQSxNQUFBQTtFQUFBQyxtQkFBQUEsTUFBQUE7RUFBQUMsT0FBQUEsTUFBQUE7RUFBQUMsZUFBQUEsTUFBQUE7RUFBQUMsb0JBQUFBLE1BQUFBO0VBQUFDLFNBQUFBLE1BQUFBO0VBQUFDLHFCQUFBQSxNQUFBQTtFQUFBQyxzQkFBQUEsTUFBQUE7RUFBQUMsV0FBQUEsTUFBQUE7RUFBQUMsWUFBQUEsTUFBQUE7RUFBQUMsc0JBQUFBLE1BQUFBO0VBQUFDLFdBQUFBLE1BQUFBO0VBQUFDLHFCQUFBQSxNQUFBQTtFQUFBQyxzQkFBQUEsTUFBQUE7RUFBQUMsYUFBQUEsTUFBQUE7RUFBQUMsZUFBQUEsTUFBQUE7QUFBQSxDQUFBO0FBQUFDLE9BQUFDLFVBQUFDLGFBQUF0QixZQUFBOztBQzhDQSxJQUFNRSw4QkFBMkRBLENBQUM7RUFBQ3FCO0VBQVFDO0VBQU1DO0VBQVVDLFVBQVUsQ0FBQztBQUFDLE1BQU07QUFDNUdILFNBQU9JLGlCQUFpQkgsTUFBTUMsVUFBZ0RDLE9BQU87QUFDckYsU0FBTztJQUNORSxRQUFRQSxNQUFZO0FBQ25CTCxhQUFPTSxvQkFBb0JMLE1BQU1DLFVBQWdEQyxPQUFPO0lBQ3pGO0VBQ0Q7QUFDRDs7QUNuREEsSUFBTXZCLHFDQUF5RUEsQ0FBQzJCLE9B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LEVBQUVFLEtBQU1DLGFBQTZCO0FBQzVHLFdBQU81SCxjQUFjdUgsTUFBTSxFQUFFM0YsU0FBU2dHLE9BQU87RUFDOUMsQ0FBQztBQUNGOztBQ05BLElBQU16SCxzQkFBc0JBLENBQUM7RUFBQzBIO0FBQVMsTUFBZ0Q7QUFBQSxNQUFBQyxxQkFBQUM7QUFDdEYsVUFBQUQsdUJBQUFDLGtCQUFPRixVQUFVUixLQUF1QixZQUFZLE9BQUEsUUFBQVUsb0JBQUEsU0FBQSxTQUE3Q0EsZ0JBQWdEQyxJQUFJLE9BQUEsUUFBQUYsd0JBQUEsU0FBQUEsc0JBQUs7QUFDakU7QUFFQSxJQUFNckgsc0JBQXNCQSxDQUFDO0VBQUNvSDtFQUFXSTtBQUFPLE1BQStEO0FBQzlHSixZQUFVUixLQUF1QixZQUFZLEVBQUVXLElBQUlDLE9BQU87QUFDM0Q7O0FDTkEsSUFBTTdILHVCQUF1QkEsQ0FBQztFQUFDeUg7QUFBUyxNQUFnRDtBQUFBLE1BQUFLO0FBQ3ZGLFVBQUFBLHdCQUFPTCxVQUFVUixLQUEwQixhQUFhLEVBQUVjLGNBQWMsYUFBYSxPQUFBLFFBQUFELDBCQUFBLFNBQUFBLHdCQUFLO0FBQzNGO0FBRUEsSUFBTXhILHVCQUF1QkEsQ0FBQztFQUFDbUg7RUFBV0k7QUFBTyxNQUErRDtBQUMvR0osWUFBVVIsS0FBMEIsYUFBYSxFQUFFYyxjQUFjLGVBQWVGLE9BQU87QUFDeEY7IiwKICAibmFtZXMiOiBbIlV0aWxfZXhwb3J0cyIsICJfX2V4cG9ydCIsICJhZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXIiLCAiY2hhbmdlT3BhY2l0eVdoZW5Nb3VzZUVudGVyT3JMZWF2ZSIsICJjaGVja0ExMXlDb25maXJtS2V5IiwgImNoZWNrRGVwZW5kZW5jaWVzIiwgImRlbGF5IiwgImdlbmVyYXRlQXJyYXkiLCAiZ2VuZXJhdGVTdmdEYXRhVXJsIiwgImdldEJvZHkiLCAiZ2V0V3BTdW1tYXJ5Q29udGVudCIsICJnZXRXcFRleHRib3gxQ29udGVudCIsICJpbml0TXdBcGkiLCAiaXNWYWxpZEtleSIsICJvb3VpQ29uZmlybVdpdGhTdHlsZSIsICJzY3JvbGxUb3AiLCAic2V0V3BTdW1tYXJ5Q29udGVudCIsICJzZXRXcFRleHRib3gxQ29udGVudCIsICJ1bmlxdWVBcnJheSIsICJ1c2VySXNJbkdyb3VwIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIl9fdG9Db21tb25KUyIsICJ0YXJnZXQiLCAidHlwZSIsICJsaXN0ZW5lciIsICJvcHRpb25zIiwgImFkZEV2ZW50TGlzdGVuZXIiLCAicmVtb3ZlIiwgInJlbW92ZUV2ZW50TGlzdGVuZXIiLCAiZXZlbnQiLCAib3BhY2l0eSIsICJjdXJyZW50VGFyZ2V0IiwgInN0eWxlIiwgInRvU3RyaW5nIiwgImluY2x1ZGVzIiwgImtleSIsICJhcmdzIiwgImZsYXRNYXAiLCAiYXJnIiwgIkFycmF5IiwgImlzQXJyYXkiLCAiTm9kZUxpc3QiLCAidXNlckFnZW50IiwgImFwaVVyaSIsICJhcGlPcHRpb25zIiwgImFqYXgiLCAiaGVhZGVycyIsICJjb25jYXQiLCAibXciLCAiRm9yZWlnbkFwaSIsICJBcGkiLCAidW5pcXVlQXJyYXkyIiwgInJlc3VsdCIsICJfaXRlcmF0b3IyIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwMiIsICJzIiwgIm4iLCAiZG9uZSIsICJpdGVtIiwgInZhbHVlIiwgImxlbmd0aCIsICJlcnIiLCAiZSIsICJmIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAiZ2FkZ2V0TmFtZXMiLCAib3B0aW9uIiwgImFwaSIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJnYWRnZXROYW1lIiwgInVzZXIiLCAiZ2V0IiwgInBvc3RXaXRoRWRpdFRva2VuIiwgImFjdGlvbiIsICJjaGFuZ2UiLCAibG9hZGVyIiwgInVzaW5nIiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJtcyIsICJQcm9taXNlIiwgInJlc29sdmUiLCAic2V0VGltZW91dCIsICJzdmciLCAidHJpbSIsICJzbGljZSIsICJpbmRleE9mIiwgInN0YXJ0c1dpdGgiLCAiZW5kc1dpdGgiLCAicmVwbGFjZSIsICJlbmNvZGVVUklDb21wb25lbnQiLCAiJCIsICJyZWFkeSIsICJ0aGVuIiwgIiRib2R5IiwgIm9iamVjdCIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAibWVzc2FnZSIsICJPTyIsICJ1aSIsICJjb25maXJtIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzc05hbWUiLCAiYm9yZGVyIiwgImRpc3BsYXkiLCAianVzdGlmeUNvbnRlbnQiLCAiZm9udFNpemUiLCAiZm9udFdlaWdodCIsICJsaW5lSGVpZ2h0IiwgInBhZGRpbmciLCAiaXNDb25maXJtIiwgInRhcmdldEhlaWdodCIsICJlZmZlY3RzT3B0aW9uc09yRHVyYXRpb24iLCAiZHVyYXRpb24iLCAiZWFzaW5nIiwgImRvY3VtZW50IiwgImZpbmQiLCAiYW5pbWF0ZSIsICJncm91cHMiLCAid2dVc2VyR3JvdXBzIiwgIndnR2xvYmFsR3JvdXBzIiwgImNvbmZpZyIsICJzb21lIiwgImVsZW1lbnQiLCAiJGVkaXRGb3JtIiwgIl8kZWRpdEZvcm0kZmluZCR2YWwiLCAiXyRlZGl0Rm9ybSRmaW5kIiwgInZhbCIsICJjb250ZW50IiwgIl8kZWRpdEZvcm0kZmluZCR0ZXh0UyIsICJ0ZXh0U2VsZWN0aW9uIl0KfQo=

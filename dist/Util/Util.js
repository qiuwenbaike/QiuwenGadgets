/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Util}
 * @author 安忆 <i@anyi.in>
 * @license GPL-3.0-or-later {@link https://www.qiuwenbaike.cn/wiki/H:GPL-3.0}
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
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function() {
      };
      return { s: F, n: function() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function(e) {
        throw e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function(e) {
    didErr = true;
    err = e;
  }, f: function() {
    try {
      if (!normalCompletion && it.return != null)
        it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
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
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, {
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
  delay: () => delay,
  generateArray: () => generateArray,
  generateSvgDataUrl: () => generateSvgDataUrl,
  getBody: () => getBody,
  initMwApi: () => initMwApi,
  isValidKey: () => isValidKey,
  oouiConfirmWithStyle: () => oouiConfirmWithStyle,
  scrollTop: () => scrollTop,
  userHasRight: () => userHasRight,
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
//! src/Util/modules/delay.ts
var delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
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
//! src/Util/modules/generateSvgDataUrl.ts
var generateSvgDataUrl = (svg) => {
  /*!
   * SPDX-License-Identifier: MIT
   *
   * @file svg-to-data-uri.js {@link https://github.com/heyallan/svg-to-data-uri/}
   *
   * @author Allan Moreno
   * @license MIT {@link https://github.com/heyallan/svg-to-data-uri/blob/master/LICENSE}
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
var userIsInGroup = (group) => {
  const {
    wgUserGroups,
    wgGlobalGroups
  } = mw.config.get();
  return !!(wgUserGroups !== null && wgUserGroups !== void 0 && wgUserGroups.includes(group) || wgGlobalGroups !== null && wgGlobalGroups !== void 0 && wgGlobalGroups.includes(group));
};
//! src/Util/modules/userHasRight.ts
var userHasRight = (right) => {
  const {
    wgUserRights
  } = mw.config.get();
  return !!(wgUserRights !== null && wgUserRights !== void 0 && wgUserRights.includes(right));
};

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1V0aWwvVXRpbC50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2FkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlci50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2NoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmUudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9jaGVja0ExMXlDb25maXJtS2V5LnRzIiwgInNyYy9VdGlsL21vZHVsZXMvZGVsYXkudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9nZW5lcmF0ZUFycmF5LnRzIiwgInNyYy9VdGlsL21vZHVsZXMvZ2VuZXJhdGVTdmdEYXRhVXJsLnRzIiwgInNyYy9VdGlsL21vZHVsZXMvZ2V0Qm9keS50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2luaXRNd0FwaS50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2lzVmFsaWRLZXkudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9vb3VpQ29uZmlybVdpdGhTdHlsZS50c3giLCAic3JjL1V0aWwvbW9kdWxlcy9zY3JvbGxUb3AudHMiLCAic3JjL1V0aWwvbW9kdWxlcy91c2VySXNJbkdyb3VwLnRzIiwgInNyYy9VdGlsL21vZHVsZXMvdXNlckhhc1JpZ2h0LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQge2FkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcn0gZnJvbSAnLi9tb2R1bGVzL2FkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcic7XG5leHBvcnQge2NoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmV9IGZyb20gJy4vbW9kdWxlcy9jaGFuZ2VPcGFjaXR5V2hlbk1vdXNlRW50ZXJPckxlYXZlJztcbmV4cG9ydCB7Y2hlY2tBMTF5Q29uZmlybUtleX0gZnJvbSAnLi9tb2R1bGVzL2NoZWNrQTExeUNvbmZpcm1LZXknO1xuZXhwb3J0IHtkZWxheX0gZnJvbSAnLi9tb2R1bGVzL2RlbGF5JztcbmV4cG9ydCB7Z2VuZXJhdGVBcnJheX0gZnJvbSAnLi9tb2R1bGVzL2dlbmVyYXRlQXJyYXknO1xuZXhwb3J0IHtnZW5lcmF0ZVN2Z0RhdGFVcmx9IGZyb20gJy4vbW9kdWxlcy9nZW5lcmF0ZVN2Z0RhdGFVcmwnO1xuZXhwb3J0IHtnZXRCb2R5fSBmcm9tICcuL21vZHVsZXMvZ2V0Qm9keSc7XG5leHBvcnQge2luaXRNd0FwaX0gZnJvbSAnLi9tb2R1bGVzL2luaXRNd0FwaSc7XG5leHBvcnQge2lzVmFsaWRLZXl9IGZyb20gJy4vbW9kdWxlcy9pc1ZhbGlkS2V5JztcbmV4cG9ydCB7b291aUNvbmZpcm1XaXRoU3R5bGV9IGZyb20gJy4vbW9kdWxlcy9vb3VpQ29uZmlybVdpdGhTdHlsZSc7XG5leHBvcnQge3Njcm9sbFRvcH0gZnJvbSAnLi9tb2R1bGVzL3Njcm9sbFRvcCc7XG5leHBvcnQge3VzZXJJc0luR3JvdXB9IGZyb20gJy4vbW9kdWxlcy91c2VySXNJbkdyb3VwJztcbmV4cG9ydCB7dXNlckhhc1JpZ2h0fSBmcm9tICcuL21vZHVsZXMvdXNlckhhc1JpZ2h0JztcbiIsICJ0eXBlIEFkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3ZlciA9IDxcblx0VGFyZ2V0IGV4dGVuZHMgRG9jdW1lbnQgfCBIVE1MRWxlbWVudCB8IEVsZW1lbnQgfCBNZWRpYVF1ZXJ5TGlzdCB8IFdpbmRvdyxcblx0VHlwZSBleHRlbmRzIFRhcmdldCBleHRlbmRzIERvY3VtZW50XG5cdFx0PyBrZXlvZiBEb2N1bWVudEV2ZW50TWFwXG5cdFx0OiBUYXJnZXQgZXh0ZW5kcyBIVE1MRWxlbWVudFxuXHRcdFx0PyBrZXlvZiBIVE1MRWxlbWVudEV2ZW50TWFwXG5cdFx0XHQ6IFRhcmdldCBleHRlbmRzIE1lZGlhUXVlcnlMaXN0XG5cdFx0XHRcdD8ga2V5b2YgTWVkaWFRdWVyeUxpc3RFdmVudE1hcFxuXHRcdFx0XHQ6IFRhcmdldCBleHRlbmRzIFdpbmRvd1xuXHRcdFx0XHRcdD8ga2V5b2YgV2luZG93RXZlbnRNYXBcblx0XHRcdFx0XHQ6IGtleW9mIEdsb2JhbEV2ZW50SGFuZGxlcnNFdmVudE1hcCxcblx0TGlzdGVuZXIgZXh0ZW5kcyBUYXJnZXQgZXh0ZW5kcyBEb2N1bWVudFxuXHRcdD8gVHlwZSBleHRlbmRzIGtleW9mIERvY3VtZW50RXZlbnRNYXBcblx0XHRcdD8gKHRoaXM6IFRhcmdldCwgZXZlbnQ6IERvY3VtZW50RXZlbnRNYXBbVHlwZV0pID0+IHVua25vd25cblx0XHRcdDogKHRoaXM6IFRhcmdldCwgZXZlbnQ6IEV2ZW50KSA9PiB1bmtub3duXG5cdFx0OiBUYXJnZXQgZXh0ZW5kcyBIVE1MRWxlbWVudFxuXHRcdFx0PyBUeXBlIGV4dGVuZHMga2V5b2YgSFRNTEVsZW1lbnRFdmVudE1hcFxuXHRcdFx0XHQ/ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBIVE1MRWxlbWVudEV2ZW50TWFwW1R5cGVdKSA9PiB1bmtub3duXG5cdFx0XHRcdDogKHRoaXM6IFRhcmdldCwgZXZlbnQ6IEV2ZW50KSA9PiB1bmtub3duXG5cdFx0XHQ6IFRhcmdldCBleHRlbmRzIEVsZW1lbnRcblx0XHRcdFx0PyBUeXBlIGV4dGVuZHMga2V5b2YgRWxlbWVudEV2ZW50TWFwXG5cdFx0XHRcdFx0PyAodGhpczogVGFyZ2V0LCBldmVudDogRWxlbWVudEV2ZW50TWFwW1R5cGVdKSA9PiB1bmtub3duXG5cdFx0XHRcdFx0OiAodGhpczogVGFyZ2V0LCBldmVudDogRXZlbnQpID0+IHVua25vd25cblx0XHRcdFx0OiBUYXJnZXQgZXh0ZW5kcyBNZWRpYVF1ZXJ5TGlzdFxuXHRcdFx0XHRcdD8gVHlwZSBleHRlbmRzIGtleW9mIE1lZGlhUXVlcnlMaXN0RXZlbnRNYXBcblx0XHRcdFx0XHRcdD8gKHRoaXM6IFRhcmdldCwgZXZlbnQ6IE1lZGlhUXVlcnlMaXN0RXZlbnRNYXBbVHlwZV0pID0+IHVua25vd25cblx0XHRcdFx0XHRcdDogKHRoaXM6IFRhcmdldCwgZXZlbnQ6IEV2ZW50KSA9PiB1bmtub3duXG5cdFx0XHRcdFx0OiBUYXJnZXQgZXh0ZW5kcyBXaW5kb3dcblx0XHRcdFx0XHRcdD8gVHlwZSBleHRlbmRzIGtleW9mIFdpbmRvd0V2ZW50TWFwXG5cdFx0XHRcdFx0XHRcdD8gKHRoaXM6IFRhcmdldCwgZXZlbnQ6IFdpbmRvd0V2ZW50TWFwW1R5cGVdKSA9PiB1bmtub3duXG5cdFx0XHRcdFx0XHRcdDogKHRoaXM6IFRhcmdldCwgZXZlbnQ6IEV2ZW50KSA9PiB1bmtub3duXG5cdFx0XHRcdFx0XHQ6ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBFdmVudCkgPT4gdW5rbm93bixcbj4oe1xuXHR0YXJnZXQsXG5cdHR5cGUsXG5cdGxpc3RlbmVyLFxuXHRvcHRpb25zLFxufToge1xuXHR0YXJnZXQ6IFRhcmdldDtcblx0dHlwZTogVHlwZTtcblx0bGlzdGVuZXI6IExpc3RlbmVyO1xuXHRvcHRpb25zPzogQWRkRXZlbnRMaXN0ZW5lck9wdGlvbnM7XG59KSA9PiB7XG5cdHJlbW92ZTogKCkgPT4gdm9pZDtcbn07XG5cbmNvbnN0IGFkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3ZlcjogQWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyID0gKHt0YXJnZXQsIHR5cGUsIGxpc3RlbmVyLCBvcHRpb25zID0ge319KSA9PiB7XG5cdHRhcmdldC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyIGFzIEV2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3QsIG9wdGlvbnMpO1xuXHRyZXR1cm4ge1xuXHRcdHJlbW92ZTogKCk6IHZvaWQgPT4ge1xuXHRcdFx0dGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIgYXMgRXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdCwgb3B0aW9ucyk7XG5cdFx0fSxcblx0fTtcbn07XG5cbmV4cG9ydCB7dHlwZSBBZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXIsIGFkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcn07XG4iLCAidHlwZSBDaGFuZ2VPcGFjaXR5V2hlbk1vdXNlRW50ZXJPckxlYXZlID0gKGV2ZW50OiBNb3VzZUV2ZW50IHwgSlF1ZXJ5LlRyaWdnZXJlZEV2ZW50LCBvcGFjaXR5PzogbnVtYmVyKSA9PiB2b2lkO1xuXG5jb25zdCBjaGFuZ2VPcGFjaXR5V2hlbk1vdXNlRW50ZXJPckxlYXZlOiBDaGFuZ2VPcGFjaXR5V2hlbk1vdXNlRW50ZXJPckxlYXZlID0gKGV2ZW50LCBvcGFjaXR5ID0gMC43KSA9PiB7XG5cdChldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5zdHlsZS5vcGFjaXR5ID0gZXZlbnQudHlwZSA9PT0gJ21vdXNlZW50ZXInID8gJzEnIDogb3BhY2l0eS50b1N0cmluZygpO1xufTtcblxuZXhwb3J0IHt0eXBlIENoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmUsIGNoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmV9O1xuIiwgInR5cGUgQ2hlY2tBMTF5Q29uZmlybUtleSA9IChldmVudDogS2V5Ym9hcmRFdmVudCB8IE1vdXNlRXZlbnQgfCBKUXVlcnkuQ2xpY2tFdmVudCB8IEpRdWVyeS5LZXlEb3duRXZlbnQpID0+IGJvb2xlYW47XG5cbmNvbnN0IGNoZWNrQTExeUNvbmZpcm1LZXk6IENoZWNrQTExeUNvbmZpcm1LZXkgPSAoZXZlbnQpOiBib29sZWFuID0+IHtcblx0aWYgKFsnY2xpY2snLCAna2V5ZG93biddLmluY2x1ZGVzKGV2ZW50LnR5cGUpKSB7XG5cdFx0aWYgKGV2ZW50LnR5cGUgPT09ICdrZXlkb3duJykge1xuXHRcdFx0cmV0dXJuIFsnRW50ZXInLCAnICddLmluY2x1ZGVzKChldmVudCBhcyBLZXlib2FyZEV2ZW50KS5rZXkpO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRyZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQge3R5cGUgQ2hlY2tBMTF5Q29uZmlybUtleSwgY2hlY2tBMTF5Q29uZmlybUtleX07XG4iLCAidHlwZSBEZWxheSA9IChtczogbnVtYmVyKSA9PiBQcm9taXNlPHZvaWQ+O1xuXG5jb25zdCBkZWxheTogRGVsYXkgPSAobXMpID0+IHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlOiAoKSA9PiB2b2lkKTogdm9pZCA9PiB7XG5cdFx0c2V0VGltZW91dChyZXNvbHZlLCBtcyk7XG5cdH0pO1xufTtcblxuZXhwb3J0IHt0eXBlIERlbGF5LCBkZWxheX07XG4iLCAidHlwZSBHZW5lcmF0ZUFycmF5ID0gdHlwZW9mIGdlbmVyYXRlQXJyYXk7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlQXJyYXk8VCBleHRlbmRzIFtdPiguLi5hcmdzOiAoVCB8IFRbXSlbXSk6IFRbXTtcbmZ1bmN0aW9uIGdlbmVyYXRlQXJyYXk8VCBleHRlbmRzIE5vZGVMaXN0PiguLi5hcmdzOiAoVCB8IFRbXSlbXSk6IE5vZGVbXTtcbmZ1bmN0aW9uIGdlbmVyYXRlQXJyYXk8VCA9IHVua25vd24+KC4uLmFyZ3M6IChUIHwgVFtdKVtdKTogVFtdO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtc3R5bGVcbmZ1bmN0aW9uIGdlbmVyYXRlQXJyYXk8VD4oLi4uYXJnczogKFQgfCBUW10pW10pOiBUW10ge1xuXHRyZXR1cm4gYXJncy5mbGF0TWFwKChhcmcpID0+IHtcblx0XHRpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRyZXR1cm4gYXJnO1xuXHRcdH1cblxuXHRcdGlmIChhcmcgaW5zdGFuY2VvZiBOb2RlTGlzdCkge1xuXHRcdFx0cmV0dXJuIFsuLi5hcmddIGFzIFQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFthcmddO1xuXHR9KTtcbn1cblxuZXhwb3J0IHt0eXBlIEdlbmVyYXRlQXJyYXksIGdlbmVyYXRlQXJyYXl9O1xuIiwgInR5cGUgR2VuZXJhdGVTdmdEYXRhVXJsID0gKHN2Zzogc3RyaW5nKSA9PiBzdHJpbmc7XG5cbmNvbnN0IGdlbmVyYXRlU3ZnRGF0YVVybDogR2VuZXJhdGVTdmdEYXRhVXJsID0gKHN2ZykgPT4ge1xuXHQvKiFcblx0ICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVFxuXHQgKlxuXHQgKiBAZmlsZSBzdmctdG8tZGF0YS11cmkuanMge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9oZXlhbGxhbi9zdmctdG8tZGF0YS11cmkvfVxuXHQgKlxuXHQgKiBAYXV0aG9yIEFsbGFuIE1vcmVub1xuXHQgKiBAbGljZW5zZSBNSVQge0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9oZXlhbGxhbi9zdmctdG8tZGF0YS11cmkvYmxvYi9tYXN0ZXIvTElDRU5TRX1cblx0ICovXG5cdHN2ZyA9IHN2Zy50cmltKCk7XG5cdC8vIHJlbW92ZSB4bWwsIGRvY3R5cGUsIGdlbmVyYXRvci4uLlxuXHRzdmcgPSBzdmcuc2xpY2Uoc3ZnLmluZGV4T2YoJzxzdmcnKSk7XG5cdC8vIHNvZnQgdmFsaWRhdGVcblx0aWYgKCFzdmcuc3RhcnRzV2l0aCgnPHN2ZycpIHx8ICFzdmcuZW5kc1dpdGgoJ3N2Zz4nKSkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXHQvLyBhZGQgbmFtZXNwYWNlIGlmIG5lY2Vzc2FyeVxuXHRpZiAoIXN2Zy5pbmNsdWRlcygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnKSkge1xuXHRcdHN2ZyA9IHN2Zy5yZXBsYWNlKC88c3ZnL2csIFwiPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXCIpO1xuXHR9XG5cdC8vIHJlbW92ZSBjb21tZW50c1xuXHRzdmcgPSBzdmcucmVwbGFjZSgvPCEtLS57MSx9LS0+L2csICcnKTtcblx0Ly8gcmVtb3ZlIHVubmVjZXNzYXJ5IGF0dHJpYnV0ZXNcblx0c3ZnID0gc3ZnLnJlcGxhY2UoL3ZlcnNpb249W1wiJ10oLnswLH0/KVtcIiddKD89W1xccz5dKS9nLCAnJyk7XG5cdC8vIHJlcGxhY2UgbmVzdGVkIHF1b3Rlc1xuXHRzdmcgPSBzdmcucmVwbGFjZSgvXCInKC57MSx9KSdcIi9nLCBcIickMSdcIik7XG5cdC8vIHJlcGxhY2UgZG91YmxlIHF1b3Rlc1xuXHRzdmcgPSBzdmcucmVwbGFjZSgvXCIvZywgXCInXCIpO1xuXHQvLyByZW1vdmUgZW1wdHkgc3BhY2VzIGJldHdlZW4gdGFnc1xuXHRzdmcgPSBzdmcucmVwbGFjZSgvPlxcc3sxLH08L2csICc+PCcpO1xuXHQvLyByZW1vdmUgZHVwbGljYXRlIHNwYWNlc1xuXHRzdmcgPSBzdmcucmVwbGFjZSgvXFxzezIsfS9nLCAnICcpO1xuXHQvLyB0cmltIGFnYWluXG5cdHN2ZyA9IHN2Zy50cmltKCk7XG5cdC8vIHNvZnQgdmFsaWRhdGUgYWdhaW5cblx0aWYgKCFzdmcuc3RhcnRzV2l0aCgnPHN2ZycpIHx8ICFzdmcuZW5kc1dpdGgoJ3N2Zz4nKSkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXHQvLyByZXBsYWNlIGFtcGVyc2FuZFxuXHRzdmcgPSBzdmcucmVwbGFjZSgvJi9nLCAnJmFtcDsnKTtcblx0Ly8gZW5jb2RlIG9ubHkgdW5zYWZlIHN5bWJvbHNcblx0c3ZnID0gc3ZnLnJlcGxhY2UoL1slIzw+P1tcXFxcXFxdXmB7fH1dL2csIGVuY29kZVVSSUNvbXBvbmVudCk7XG5cdC8vIGJ1aWxkIGRhdGEgdXJpXG5cdHN2ZyA9IGBkYXRhOmltYWdlL3N2Zyt4bWwsJHtzdmd9YDtcblx0Ly8gb2ssIHNoaXAgaXQhXG5cdHJldHVybiBzdmc7XG59O1xuXG5leHBvcnQge3R5cGUgR2VuZXJhdGVTdmdEYXRhVXJsLCBnZW5lcmF0ZVN2Z0RhdGFVcmx9O1xuIiwgInR5cGUgR2V0Qm9keSA9ICgpID0+IEpRdWVyeS5UaGVuYWJsZTxKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pj47XG5cbmNvbnN0IGdldEJvZHkgPSAoKSA9PiB7XG5cdHJldHVybiAkLnJlYWR5LnRoZW4oKCk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+ID0+IHtcblx0XHRjb25zdCAkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4gPSAkKCdib2R5Jyk7XG5cblx0XHRyZXR1cm4gJGJvZHk7XG5cdH0pO1xufTtcblxuZXhwb3J0IHt0eXBlIEdldEJvZHksIGdldEJvZHl9O1xuIiwgInR5cGUgSW5pdE13QXBpID0gdHlwZW9mIGluaXRNd0FwaTtcblxuLyoqXG4gKiBAcmVxdWlyZXMgbWVkaWF3aWtpLmFwaVxuICogQHBhcmFtIHtzdHJpbmd9IFt1c2VyQWdlbnRdXG4gKiBAcGFyYW0ge3N0cmluZ30gW2FwaVVyaV1cbiAqIEByZXR1cm4ge213LkFwaXxtdy5Gb3JlaWduQXBpfVxuICovXG5mdW5jdGlvbiBpbml0TXdBcGkodXNlckFnZW50Pzogc3RyaW5nKTogbXcuQXBpO1xuZnVuY3Rpb24gaW5pdE13QXBpKHVzZXJBZ2VudDogc3RyaW5nLCBhcGlVcmk6IHN0cmluZyk6IG13LkZvcmVpZ25BcGk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1zdHlsZVxuZnVuY3Rpb24gaW5pdE13QXBpKHVzZXJBZ2VudD86IHN0cmluZywgYXBpVXJpPzogc3RyaW5nKTogbXcuQXBpIHwgbXcuRm9yZWlnbkFwaSB7XG5cdGNvbnN0IGFwaU9wdGlvbnMgPSB7XG5cdFx0YWpheDoge1xuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHQnQXBpLVVzZXItQWdlbnQnOiB1c2VyQWdlbnQgPyBgUWl1d2VuLzEuMSAoJHt1c2VyQWdlbnR9KWAgOiAnUWl1d2VuLzEuMScsXG5cdFx0XHR9LFxuXHRcdH0sXG5cdH07XG5cblx0aWYgKGFwaVVyaSkge1xuXHRcdHJldHVybiBuZXcgbXcuRm9yZWlnbkFwaShhcGlVcmksIGFwaU9wdGlvbnMpO1xuXHR9XG5cblx0cmV0dXJuIG5ldyBtdy5BcGkoYXBpT3B0aW9ucyk7XG59XG5cbmV4cG9ydCB7dHlwZSBJbml0TXdBcGksIGluaXRNd0FwaX07XG4iLCAidHlwZSBJc1ZhbGlkS2V5ID0gdHlwZW9mIGlzVmFsaWRLZXk7XG5cbmNvbnN0IGlzVmFsaWRLZXkgPSAob2JqZWN0OiBvYmplY3QsIGtleTogc3RyaW5nIHwgbnVtYmVyIHwgc3ltYm9sKToga2V5IGlzIGtleW9mIHR5cGVvZiBvYmplY3QgPT4ge1xuXHRyZXR1cm4ga2V5IGluIG9iamVjdDtcbn07XG5cbmV4cG9ydCB7dHlwZSBJc1ZhbGlkS2V5LCBpc1ZhbGlkS2V5fTtcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5cbnR5cGUgT291aUNvbmZpcm1XaXRoU3R5bGUgPSAobWVzc2FnZTogc3RyaW5nKSA9PiBKUXVlcnkuUHJvbWlzZTxib29sZWFuPjtcblxuLyoqXG4gKiBAcmVxdWlyZXMgb29qcy11aS13aW5kb3dzXG4gKiBAcGFyYW0ge3N0cmluZ30gW21lc3NhZ2VdXG4gKiBAcmV0dXJuIHtKUXVlcnkuUHJvbWlzZTxib29sZWFuPn1cbiAqL1xuY29uc3Qgb291aUNvbmZpcm1XaXRoU3R5bGU6IE9vdWlDb25maXJtV2l0aFN0eWxlID0gKG1lc3NhZ2UpID0+XG5cdE9PLnVpXG5cdFx0LmNvbmZpcm0oXG5cdFx0XHQkKFxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwib28tdWktd2luZG93LWZvb3RcIlxuXHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRib3JkZXI6ICcuMXJlbSBzb2xpZCAjMDY0NWFkJyxcblx0XHRcdFx0XHRcdGRpc3BsYXk6ICdmbGV4Jyxcblx0XHRcdFx0XHRcdGp1c3RpZnlDb250ZW50OiAnc3BhY2UtZXZlbmx5Jyxcblx0XHRcdFx0XHR9fVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PHNwYW5cblx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdGZvbnRTaXplOiAnMS4ycmVtJyxcblx0XHRcdFx0XHRcdFx0Zm9udFdlaWdodDogJzUwMCcsXG5cdFx0XHRcdFx0XHRcdGxpbmVIZWlnaHQ6ICcxLjgnLFxuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAnLjRlbSAwJyxcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0e21lc3NhZ2V9XG5cdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCkgYXMgSlF1ZXJ5XG5cdFx0KVxuXHRcdC50aGVuKChpc0NvbmZpcm06IGJvb2xlYW4pOiBib29sZWFuID0+IGlzQ29uZmlybSk7XG5cbmV4cG9ydCB7dHlwZSBPb3VpQ29uZmlybVdpdGhTdHlsZSwgb291aUNvbmZpcm1XaXRoU3R5bGV9O1xuIiwgInR5cGUgU2Nyb2xsVG9wID0gKFxuXHR0YXJnZXRIZWlnaHQ6IG51bWJlciB8IHN0cmluZyxcblx0ZWZmZWN0c09wdGlvbnNPckR1cmF0aW9uPzogSlF1ZXJ5LkVmZmVjdHNPcHRpb25zPEhUTUxFbGVtZW50PiB8IG51bWJlciB8ICdmYXN0JyB8ICdzbG93J1xuKSA9PiB2b2lkO1xuXG5jb25zdCBzY3JvbGxUb3A6IFNjcm9sbFRvcCA9ICh0YXJnZXRIZWlnaHQsIGVmZmVjdHNPcHRpb25zT3JEdXJhdGlvbiA9IHt9KSA9PiB7XG5cdGNvbnN0IG9wdGlvbnM6IEpRdWVyeS5FZmZlY3RzT3B0aW9uczxIVE1MRWxlbWVudD4gPVxuXHRcdHR5cGVvZiBlZmZlY3RzT3B0aW9uc09yRHVyYXRpb24gPT09ICdudW1iZXInIHx8IHR5cGVvZiBlZmZlY3RzT3B0aW9uc09yRHVyYXRpb24gPT09ICdzdHJpbmcnXG5cdFx0XHQ/IHtcblx0XHRcdFx0XHRkdXJhdGlvbjogZWZmZWN0c09wdGlvbnNPckR1cmF0aW9uLFxuXHRcdFx0XHRcdGVhc2luZzogJ2xpbmVhcicsXG5cdFx0XHRcdH1cblx0XHRcdDoge1xuXHRcdFx0XHRcdGR1cmF0aW9uOiAnc2xvdycsXG5cdFx0XHRcdFx0ZWFzaW5nOiAnbGluZWFyJyxcblx0XHRcdFx0XHQuLi5lZmZlY3RzT3B0aW9uc09yRHVyYXRpb24sXG5cdFx0XHRcdH07XG5cdCQoZG9jdW1lbnQpLmZpbmQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKFxuXHRcdHtcblx0XHRcdHNjcm9sbFRvcDogdGFyZ2V0SGVpZ2h0LFxuXHRcdH0sXG5cdFx0b3B0aW9uc1xuXHQpO1xufTtcblxuZXhwb3J0IHt0eXBlIFNjcm9sbFRvcCwgc2Nyb2xsVG9wfTtcbiIsICJ0eXBlIFVzZXJJc0luR3JvdXAgPSB0eXBlb2YgdXNlcklzSW5Hcm91cDtcblxuY29uc3QgdXNlcklzSW5Hcm91cCA9IChncm91cDogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IHt3Z1VzZXJHcm91cHMsIHdnR2xvYmFsR3JvdXBzfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0cmV0dXJuICEhKHdnVXNlckdyb3Vwcz8uaW5jbHVkZXMoZ3JvdXApIHx8ICh3Z0dsb2JhbEdyb3VwcyBhcyBzdHJpbmdbXSk/LmluY2x1ZGVzKGdyb3VwKSk7XG59O1xuXG5leHBvcnQge3R5cGUgVXNlcklzSW5Hcm91cCwgdXNlcklzSW5Hcm91cH07XG4iLCAidHlwZSBVc2VySGFzUmlnaHQgPSB0eXBlb2YgdXNlckhhc1JpZ2h0O1xuXG5jb25zdCB1c2VySGFzUmlnaHQgPSAocmlnaHQ6IHN0cmluZykgPT4ge1xuXHRjb25zdCB7d2dVc2VyUmlnaHRzfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0cmV0dXJuICEhKHdnVXNlclJpZ2h0cyBhcyBzdHJpbmdbXSk/LmluY2x1ZGVzKHJpZ2h0KTtcbn07XG5cbmV4cG9ydCB7dHlwZSBVc2VySGFzUmlnaHQsIHVzZXJIYXNSaWdodH07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsZUFBQSxDQUFBO0FBQUFDLFNBQUFELGNBQUE7RUFBQUUsNkJBQUFBLE1BQUFBO0VBQUFDLG9DQUFBQSxNQUFBQTtFQUFBQyxxQkFBQUEsTUFBQUE7RUFBQUMsT0FBQUEsTUFBQUE7RUFBQUMsZUFBQUEsTUFBQUE7RUFBQUMsb0JBQUFBLE1BQUFBO0VBQUFDLFNBQUFBLE1BQUFBO0VBQUFDLFdBQUFBLE1BQUFBO0VBQUFDLFlBQUFBLE1BQUFBO0VBQUFDLHNCQUFBQSxNQUFBQTtFQUFBQyxXQUFBQSxNQUFBQTtF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aUJBQUEsUUFBQUEsaUJBQUEsVUFBQUEsYUFBYzVELFNBQVMyRCxLQUFLLEtBQU1FLG1CQUFBLFFBQUFBLG1CQUFBLFVBQUFBLGVBQTZCN0QsU0FBUzJELEtBQUs7QUFDeEY7O0FDSEEsSUFBTTVFLGVBQWdCaUYsV0FBa0I7QUFDdkMsUUFBTTtJQUFDQztFQUFZLElBQUluQyxHQUFHZ0MsT0FBT0MsSUFBSTtBQUNyQyxTQUFPLENBQUMsRUFBRUUsaUJBQUEsUUFBQUEsaUJBQUEsVUFBQUEsYUFBMkJqRSxTQUFTZ0UsS0FBSztBQUNwRDsiLAogICJuYW1lcyI6IFsiVXRpbF9leHBvcnRzIiwgIl9fZXhwb3J0IiwgImFkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3ZlciIsICJjaGFuZ2VPcGFjaXR5V2hlbk1vdXNlRW50ZXJPckxlYXZlIiwgImNoZWNrQTExeUNvbmZpcm1LZXkiLCAiZGVsYXkiLCAiZ2VuZXJhdGVBcnJheSIsICJnZW5lcmF0ZVN2Z0RhdGFVcmwiLCAiZ2V0Qm9keSIsICJpbml0TXdBcGkiLCAiaXNWYWxpZEtleSIsICJvb3VpQ29uZmlybVdpdGhTdHlsZSIsICJzY3JvbGxUb3AiLCAidXNlckhhc1JpZ2h0IiwgInVzZXJJc0luR3JvdXAiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAiX190b0NvbW1vbkpTIiwgInRhcmdldCIsICJ0eXBlIiwgImxpc3RlbmVyIiwgIm9wdGlvbnMiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJyZW1vdmUiLCAicmVtb3ZlRXZlbnRMaXN0ZW5lciIsICJldmVudCIsICJvcGFjaXR5IiwgImN1cnJlbnRUYXJnZXQiLCAic3R5bGUiLCAidG9TdHJpbmciLCAiaW5jbHVkZXMiLCAia2V5IiwgIm1zIiwgIlByb21pc2UiLCAicmVzb2x2ZSIsICJzZXRUaW1lb3V0IiwgImFyZ3MiLCAiZmxhdE1hcCIsICJhcmciLCAiQXJyYXkiLCAiaXNBcnJheSIsICJOb2RlTGlzdCIsICJzdmciLCAidHJpbSIsICJzbGljZSIsICJpbmRleE9mIiwgInN0YXJ0c1dpdGgiLCAiZW5kc1dpdGgiLCAicmVwbGFjZSIsICJlbmNvZGVVUklDb21wb25lbnQiLCAiY29uY2F0IiwgIiQiLCAicmVhZHkiLCAidGhlbiIsICIkYm9keSIsICJ1c2VyQWdlbnQiLCAiYXBpVXJpIiwgImFwaU9wdGlvbnMiLCAiYWpheCIsICJoZWFkZXJzIiwgIm13IiwgIkZvcmVpZ25BcGkiLCAiQXBpIiwgIm9iamVjdCIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAibWVzc2FnZSIsICJPTyIsICJ1aSIsICJjb25maXJtIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzc05hbWUiLCAiYm9yZGVyIiwgImRpc3BsYXkiLCAianVzdGlmeUNvbnRlbnQiLCAiZm9udFNpemUiLCAiZm9udFdlaWdodCIsICJsaW5lSGVpZ2h0IiwgInBhZGRpbmciLCAiaXNDb25maXJtIiwgInRhcmdldEhlaWdodCIsICJlZmZlY3RzT3B0aW9uc09yRHVyYXRpb24iLCAiZHVyYXRpb24iLCAiZWFzaW5nIiwgImRvY3VtZW50IiwgImZpbmQiLCAiYW5pbWF0ZSIsICJncm91cCIsICJ3Z1VzZXJHcm91cHMiLCAid2dHbG9iYWxHcm91cHMiLCAiY29uZmlnIiwgImdldCIsICJyaWdodCIsICJ3Z1VzZXJSaWdodHMiXQp9Cg==

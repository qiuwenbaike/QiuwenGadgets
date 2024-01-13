/**
 * SPDX-License-Identifier: GPL-3.0
 * _addText: '{{Gadget Header|license=GPL-3.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/Util}
 * @author 安忆 <i@anyi.in>
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
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
  generateSvgDataUrl: () => generateSvgDataUrl,
  getBody: () => getBody,
  initMwApi: () => initMwApi,
  isValidKey: () => isValidKey,
  oouiConfirmWithStyle: () => oouiConfirmWithStyle,
  scrollTop: () => scrollTop
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
//! src/Util/modules/generateSvgDataUrl.ts
var generateSvgDataUrl = (svg) => {
  /**
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
var initMwApi = (userAgent) => {
  return new mw.Api({
    ajax: {
      headers: {
        "Api-User-Agent": userAgent
      }
    }
  });
};
//! src/Util/modules/isValidKey.ts
var isValidKey = (object, key) => {
  return key in object;
};
//! src/Util/modules/oouiConfirmWithStyle.ts
var oouiConfirmWithStyle = (message) => {
  return OO.ui.confirm($("<div>").addClass("oo-ui-window-foot").css({
    border: ".1rem solid #0645ad",
    display: "flex",
    "justify-content": "space-evenly"
  }).append($("<span>").css({
    "font-size": "1.2rem",
    "font-weight": "500",
    "line-height": "1.8",
    padding: ".4em 0"
  }).text(message))).then((isConfirm) => {
    return isConfirm;
  });
};
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1V0aWwvVXRpbC50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2FkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlci50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2NoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmUudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9jaGVja0ExMXlDb25maXJtS2V5LnRzIiwgInNyYy9VdGlsL21vZHVsZXMvZGVsYXkudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9nZW5lcmF0ZVN2Z0RhdGFVcmwudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9nZXRCb2R5LnRzIiwgInNyYy9VdGlsL21vZHVsZXMvaW5pdE13QXBpLnRzIiwgInNyYy9VdGlsL21vZHVsZXMvaXNWYWxpZEtleS50cyIsICJzcmMvVXRpbC9tb2R1bGVzL29vdWlDb25maXJtV2l0aFN0eWxlLnRzIiwgInNyYy9VdGlsL21vZHVsZXMvc2Nyb2xsVG9wLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQge2FkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcn0gZnJvbSAnLi9tb2R1bGVzL2FkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlcic7XG5leHBvcnQge2NoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmV9IGZyb20gJy4vbW9kdWxlcy9jaGFuZ2VPcGFjaXR5V2hlbk1vdXNlRW50ZXJPckxlYXZlJztcbmV4cG9ydCB7Y2hlY2tBMTF5Q29uZmlybUtleX0gZnJvbSAnLi9tb2R1bGVzL2NoZWNrQTExeUNvbmZpcm1LZXknO1xuZXhwb3J0IHtkZWxheX0gZnJvbSAnLi9tb2R1bGVzL2RlbGF5JztcbmV4cG9ydCB7Z2VuZXJhdGVTdmdEYXRhVXJsfSBmcm9tICcuL21vZHVsZXMvZ2VuZXJhdGVTdmdEYXRhVXJsJztcbmV4cG9ydCB7Z2V0Qm9keX0gZnJvbSAnLi9tb2R1bGVzL2dldEJvZHknO1xuZXhwb3J0IHtpbml0TXdBcGl9IGZyb20gJy4vbW9kdWxlcy9pbml0TXdBcGknO1xuZXhwb3J0IHtpc1ZhbGlkS2V5fSBmcm9tICcuL21vZHVsZXMvaXNWYWxpZEtleSc7XG5leHBvcnQge29vdWlDb25maXJtV2l0aFN0eWxlfSBmcm9tICcuL21vZHVsZXMvb291aUNvbmZpcm1XaXRoU3R5bGUnO1xuZXhwb3J0IHtzY3JvbGxUb3B9IGZyb20gJy4vbW9kdWxlcy9zY3JvbGxUb3AnO1xuIiwgInR5cGUgQWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyID0gPFxuXHRUYXJnZXQgZXh0ZW5kcyBEb2N1bWVudCB8IEhUTUxFbGVtZW50IHwgRWxlbWVudCB8IE1lZGlhUXVlcnlMaXN0IHwgV2luZG93LFxuXHRUeXBlIGV4dGVuZHMgVGFyZ2V0IGV4dGVuZHMgRG9jdW1lbnRcblx0XHQ/IGtleW9mIERvY3VtZW50RXZlbnRNYXBcblx0XHQ6IFRhcmdldCBleHRlbmRzIEhUTUxFbGVtZW50XG5cdFx0XHQ/IGtleW9mIEhUTUxFbGVtZW50RXZlbnRNYXBcblx0XHRcdDogVGFyZ2V0IGV4dGVuZHMgTWVkaWFRdWVyeUxpc3Rcblx0XHRcdFx0PyBrZXlvZiBNZWRpYVF1ZXJ5TGlzdEV2ZW50TWFwXG5cdFx0XHRcdDogVGFyZ2V0IGV4dGVuZHMgV2luZG93XG5cdFx0XHRcdFx0PyBrZXlvZiBXaW5kb3dFdmVudE1hcFxuXHRcdFx0XHRcdDoga2V5b2YgR2xvYmFsRXZlbnRIYW5kbGVyc0V2ZW50TWFwLFxuXHRMaXN0ZW5lciBleHRlbmRzIFRhcmdldCBleHRlbmRzIERvY3VtZW50XG5cdFx0PyBUeXBlIGV4dGVuZHMga2V5b2YgRG9jdW1lbnRFdmVudE1hcFxuXHRcdFx0PyAodGhpczogVGFyZ2V0LCBldmVudDogRG9jdW1lbnRFdmVudE1hcFtUeXBlXSkgPT4gdW5rbm93blxuXHRcdFx0OiAodGhpczogVGFyZ2V0LCBldmVudDogRXZlbnQpID0+IHVua25vd25cblx0XHQ6IFRhcmdldCBleHRlbmRzIEhUTUxFbGVtZW50XG5cdFx0XHQ/IFR5cGUgZXh0ZW5kcyBrZXlvZiBIVE1MRWxlbWVudEV2ZW50TWFwXG5cdFx0XHRcdD8gKHRoaXM6IFRhcmdldCwgZXZlbnQ6IEhUTUxFbGVtZW50RXZlbnRNYXBbVHlwZV0pID0+IHVua25vd25cblx0XHRcdFx0OiAodGhpczogVGFyZ2V0LCBldmVudDogRXZlbnQpID0+IHVua25vd25cblx0XHRcdDogVGFyZ2V0IGV4dGVuZHMgRWxlbWVudFxuXHRcdFx0XHQ/IFR5cGUgZXh0ZW5kcyBrZXlvZiBFbGVtZW50RXZlbnRNYXBcblx0XHRcdFx0XHQ/ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBFbGVtZW50RXZlbnRNYXBbVHlwZV0pID0+IHVua25vd25cblx0XHRcdFx0XHQ6ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBFdmVudCkgPT4gdW5rbm93blxuXHRcdFx0XHQ6IFRhcmdldCBleHRlbmRzIE1lZGlhUXVlcnlMaXN0XG5cdFx0XHRcdFx0PyBUeXBlIGV4dGVuZHMga2V5b2YgTWVkaWFRdWVyeUxpc3RFdmVudE1hcFxuXHRcdFx0XHRcdFx0PyAodGhpczogVGFyZ2V0LCBldmVudDogTWVkaWFRdWVyeUxpc3RFdmVudE1hcFtUeXBlXSkgPT4gdW5rbm93blxuXHRcdFx0XHRcdFx0OiAodGhpczogVGFyZ2V0LCBldmVudDogRXZlbnQpID0+IHVua25vd25cblx0XHRcdFx0XHQ6IFRhcmdldCBleHRlbmRzIFdpbmRvd1xuXHRcdFx0XHRcdFx0PyBUeXBlIGV4dGVuZHMga2V5b2YgV2luZG93RXZlbnRNYXBcblx0XHRcdFx0XHRcdFx0PyAodGhpczogVGFyZ2V0LCBldmVudDogV2luZG93RXZlbnRNYXBbVHlwZV0pID0+IHVua25vd25cblx0XHRcdFx0XHRcdFx0OiAodGhpczogVGFyZ2V0LCBldmVudDogRXZlbnQpID0+IHVua25vd25cblx0XHRcdFx0XHRcdDogKHRoaXM6IFRhcmdldCwgZXZlbnQ6IEV2ZW50KSA9PiB1bmtub3duLFxuPih7XG5cdHRhcmdldCxcblx0dHlwZSxcblx0bGlzdGVuZXIsXG5cdG9wdGlvbnMsXG59OiB7XG5cdHRhcmdldDogVGFyZ2V0O1xuXHR0eXBlOiBUeXBlO1xuXHRsaXN0ZW5lcjogTGlzdGVuZXI7XG5cdG9wdGlvbnM/OiBBZGRFdmVudExpc3RlbmVyT3B0aW9ucztcbn0pID0+IHtcblx0cmVtb3ZlOiAoKSA9PiB2b2lkO1xufTtcblxuY29uc3QgYWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyOiBBZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXIgPSAoe3RhcmdldCwgdHlwZSwgbGlzdGVuZXIsIG9wdGlvbnMgPSB7fX0pID0+IHtcblx0dGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIgYXMgRXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdCwgb3B0aW9ucyk7XG5cdHJldHVybiB7XG5cdFx0cmVtb3ZlOiAoKTogdm9pZCA9PiB7XG5cdFx0XHR0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciBhcyBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0LCBvcHRpb25zKTtcblx0XHR9LFxuXHR9O1xufTtcblxuZXhwb3J0IHt0eXBlIEFkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3ZlciwgYWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyfTtcbiIsICJ0eXBlIENoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmUgPSAoZXZlbnQ6IE1vdXNlRXZlbnQgfCBKUXVlcnkuVHJpZ2dlcmVkRXZlbnQsIG9wYWNpdHk/OiBudW1iZXIpID0+IHZvaWQ7XG5cbmNvbnN0IGNoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmU6IENoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmUgPSAoZXZlbnQsIG9wYWNpdHkgPSAwLjcpID0+IHtcblx0KGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLm9wYWNpdHkgPSBldmVudC50eXBlID09PSAnbW91c2VlbnRlcicgPyAnMScgOiBvcGFjaXR5LnRvU3RyaW5nKCk7XG59O1xuXG5leHBvcnQge3R5cGUgQ2hhbmdlT3BhY2l0eVdoZW5Nb3VzZUVudGVyT3JMZWF2ZSwgY2hhbmdlT3BhY2l0eVdoZW5Nb3VzZUVudGVyT3JMZWF2ZX07XG4iLCAidHlwZSBDaGVja0ExMXlDb25maXJtS2V5ID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50IHwgTW91c2VFdmVudCB8IEpRdWVyeS5DbGlja0V2ZW50IHwgSlF1ZXJ5LktleURvd25FdmVudCkgPT4gYm9vbGVhbjtcblxuY29uc3QgY2hlY2tBMTF5Q29uZmlybUtleTogQ2hlY2tBMTF5Q29uZmlybUtleSA9IChldmVudCk6IGJvb2xlYW4gPT4ge1xuXHRpZiAoWydjbGljaycsICdrZXlkb3duJ10uaW5jbHVkZXMoZXZlbnQudHlwZSkpIHtcblx0XHRpZiAoZXZlbnQudHlwZSA9PT0gJ2tleWRvd24nKSB7XG5cdFx0XHRyZXR1cm4gWydFbnRlcicsICcgJ10uaW5jbHVkZXMoKGV2ZW50IGFzIEtleWJvYXJkRXZlbnQpLmtleSk7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCB7dHlwZSBDaGVja0ExMXlDb25maXJtS2V5LCBjaGVja0ExMXlDb25maXJtS2V5fTtcbiIsICJ0eXBlIERlbGF5ID0gKG1zOiBudW1iZXIpID0+IFByb21pc2U8dm9pZD47XG5cbmNvbnN0IGRlbGF5OiBEZWxheSA9IChtcykgPT4ge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmU6ICgpID0+IHZvaWQpOiB2b2lkID0+IHtcblx0XHRzZXRUaW1lb3V0KHJlc29sdmUsIG1zKTtcblx0fSk7XG59O1xuXG5leHBvcnQge3R5cGUgRGVsYXksIGRlbGF5fTtcbiIsICJ0eXBlIEdlbmVyYXRlU3ZnRGF0YVVybCA9IChzdmc6IHN0cmluZykgPT4gc3RyaW5nO1xuXG5jb25zdCBnZW5lcmF0ZVN2Z0RhdGFVcmw6IEdlbmVyYXRlU3ZnRGF0YVVybCA9IChzdmcpID0+IHtcblx0LyoqXG5cdCAqIEBmaWxlIHN2Zy10by1kYXRhLXVyaS5qcyB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2hleWFsbGFuL3N2Zy10by1kYXRhLXVyaS99XG5cdCAqXG5cdCAqIEBhdXRob3IgQWxsYW4gTW9yZW5vXG5cdCAqIEBsaWNlbnNlIE1JVCB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2hleWFsbGFuL3N2Zy10by1kYXRhLXVyaS9ibG9iL21hc3Rlci9MSUNFTlNFfVxuXHQgKi9cblx0c3ZnID0gc3ZnLnRyaW0oKTtcblx0Ly8gcmVtb3ZlIHhtbCwgZG9jdHlwZSwgZ2VuZXJhdG9yLi4uXG5cdHN2ZyA9IHN2Zy5zbGljZShzdmcuaW5kZXhPZignPHN2ZycpKTtcblx0Ly8gc29mdCB2YWxpZGF0ZVxuXHRpZiAoIXN2Zy5zdGFydHNXaXRoKCc8c3ZnJykgfHwgIXN2Zy5lbmRzV2l0aCgnc3ZnPicpKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cdC8vIGFkZCBuYW1lc3BhY2UgaWYgbmVjZXNzYXJ5XG5cdGlmICghc3ZnLmluY2x1ZGVzKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycpKSB7XG5cdFx0c3ZnID0gc3ZnLnJlcGxhY2UoLzxzdmcvZywgXCI8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcIik7XG5cdH1cblx0Ly8gcmVtb3ZlIGNvbW1lbnRzXG5cdHN2ZyA9IHN2Zy5yZXBsYWNlKC88IS0tLnsxLH0tLT4vZywgJycpO1xuXHQvLyByZW1vdmUgdW5uZWNlc3NhcnkgYXR0cmlidXRlc1xuXHRzdmcgPSBzdmcucmVwbGFjZSgvdmVyc2lvbj1bXCInXSguezAsfT8pW1wiJ10oPz1bXFxzPl0pL2csICcnKTtcblx0Ly8gcmVwbGFjZSBuZXN0ZWQgcXVvdGVzXG5cdHN2ZyA9IHN2Zy5yZXBsYWNlKC9cIicoLnsxLH0pJ1wiL2csIFwiJyQxJ1wiKTtcblx0Ly8gcmVwbGFjZSBkb3VibGUgcXVvdGVzXG5cdHN2ZyA9IHN2Zy5yZXBsYWNlKC9cIi9nLCBcIidcIik7XG5cdC8vIHJlbW92ZSBlbXB0eSBzcGFjZXMgYmV0d2VlbiB0YWdzXG5cdHN2ZyA9IHN2Zy5yZXBsYWNlKC8+XFxzezEsfTwvZywgJz48Jyk7XG5cdC8vIHJlbW92ZSBkdXBsaWNhdGUgc3BhY2VzXG5cdHN2ZyA9IHN2Zy5yZXBsYWNlKC9cXHN7Mix9L2csICcgJyk7XG5cdC8vIHRyaW0gYWdhaW5cblx0c3ZnID0gc3ZnLnRyaW0oKTtcblx0Ly8gc29mdCB2YWxpZGF0ZSBhZ2FpblxuXHRpZiAoIXN2Zy5zdGFydHNXaXRoKCc8c3ZnJykgfHwgIXN2Zy5lbmRzV2l0aCgnc3ZnPicpKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cdC8vIHJlcGxhY2UgYW1wZXJzYW5kXG5cdHN2ZyA9IHN2Zy5yZXBsYWNlKC8mL2csICcmYW1wOycpO1xuXHQvLyBlbmNvZGUgb25seSB1bnNhZmUgc3ltYm9sc1xuXHRzdmcgPSBzdmcucmVwbGFjZSgvWyUjPD4/W1xcXFxcXF1eYHt8fV0vZywgZW5jb2RlVVJJQ29tcG9uZW50KTtcblx0Ly8gYnVpbGQgZGF0YSB1cmlcblx0c3ZnID0gYGRhdGE6aW1hZ2Uvc3ZnK3htbCwke3N2Z31gO1xuXHQvLyBvaywgc2hpcCBpdCFcblx0cmV0dXJuIHN2Zztcbn07XG5cbmV4cG9ydCB7dHlwZSBHZW5lcmF0ZVN2Z0RhdGFVcmwsIGdlbmVyYXRlU3ZnRGF0YVVybH07XG4iLCAidHlwZSBHZXRCb2R5ID0gKCkgPT4gSlF1ZXJ5LlRoZW5hYmxlPEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+PjtcblxuY29uc3QgZ2V0Qm9keSA9ICgpID0+IHtcblx0cmV0dXJuICQucmVhZHkudGhlbigoKTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4gPT4ge1xuXHRcdGNvbnN0ICRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PiA9ICQoJ2JvZHknKTtcblxuXHRcdHJldHVybiAkYm9keTtcblx0fSk7XG59O1xuXG5leHBvcnQge3R5cGUgR2V0Qm9keSwgZ2V0Qm9keX07XG4iLCAidHlwZSBJbml0TXdBcGkgPSAodXNlckFnZW50Pzogc3RyaW5nKSA9PiBtdy5BcGk7XG5cbi8qKlxuICogQHJlcXVpcmVzIG1lZGlhd2lraS5hcGlcbiAqIEBwYXJhbSB7c3RyaW5nfSBbdXNlckFnZW50XVxuICogQHJldHVybiB7bXcuQXBpfVxuICovXG5jb25zdCBpbml0TXdBcGk6IEluaXRNd0FwaSA9ICh1c2VyQWdlbnQpID0+IHtcblx0cmV0dXJuIG5ldyBtdy5BcGkoe1xuXHRcdGFqYXg6IHtcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0J0FwaS1Vc2VyLUFnZW50JzogdXNlckFnZW50LFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9KTtcbn07XG5cbmV4cG9ydCB7dHlwZSBJbml0TXdBcGksIGluaXRNd0FwaX07XG4iLCAidHlwZSBJc1ZhbGlkS2V5ID0gdHlwZW9mIGlzVmFsaWRLZXk7XG5cbmNvbnN0IGlzVmFsaWRLZXkgPSAob2JqZWN0OiBvYmplY3QsIGtleTogc3RyaW5nIHwgbnVtYmVyIHwgc3ltYm9sKToga2V5IGlzIGtleW9mIHR5cGVvZiBvYmplY3QgPT4ge1xuXHRyZXR1cm4ga2V5IGluIG9iamVjdDtcbn07XG5cbmV4cG9ydCB7dHlwZSBJc1ZhbGlkS2V5LCBpc1ZhbGlkS2V5fTtcbiIsICJ0eXBlIE9vdWlDb25maXJtV2l0aFN0eWxlID0gKG1lc3NhZ2U6IHN0cmluZykgPT4gSlF1ZXJ5LlByb21pc2U8Ym9vbGVhbj47XG5cbi8qKlxuICogQHJlcXVpcmVzIG9vanMtdWktd2luZG93c1xuICogQHBhcmFtIHtzdHJpbmd9IFttZXNzYWdlXVxuICogQHJldHVybiB7SlF1ZXJ5LlByb21pc2U8Ym9vbGVhbj59XG4gKi9cbmNvbnN0IG9vdWlDb25maXJtV2l0aFN0eWxlOiBPb3VpQ29uZmlybVdpdGhTdHlsZSA9IChtZXNzYWdlKSA9PiB7XG5cdHJldHVybiBPTy51aVxuXHRcdC5jb25maXJtKFxuXHRcdFx0JCgnPGRpdj4nKVxuXHRcdFx0XHQuYWRkQ2xhc3MoJ29vLXVpLXdpbmRvdy1mb290Jylcblx0XHRcdFx0LmNzcyh7XG5cdFx0XHRcdFx0Ym9yZGVyOiAnLjFyZW0gc29saWQgIzA2NDVhZCcsXG5cdFx0XHRcdFx0ZGlzcGxheTogJ2ZsZXgnLFxuXHRcdFx0XHRcdCdqdXN0aWZ5LWNvbnRlbnQnOiAnc3BhY2UtZXZlbmx5Jyxcblx0XHRcdFx0fSlcblx0XHRcdFx0LmFwcGVuZChcblx0XHRcdFx0XHQkKCc8c3Bhbj4nKVxuXHRcdFx0XHRcdFx0LmNzcyh7XG5cdFx0XHRcdFx0XHRcdCdmb250LXNpemUnOiAnMS4ycmVtJyxcblx0XHRcdFx0XHRcdFx0J2ZvbnQtd2VpZ2h0JzogJzUwMCcsXG5cdFx0XHRcdFx0XHRcdCdsaW5lLWhlaWdodCc6ICcxLjgnLFxuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAnLjRlbSAwJyxcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQudGV4dChtZXNzYWdlKVxuXHRcdFx0XHQpXG5cdFx0KVxuXHRcdC50aGVuKChpc0NvbmZpcm06IGJvb2xlYW4pOiBib29sZWFuID0+IHtcblx0XHRcdHJldHVybiBpc0NvbmZpcm07XG5cdFx0fSk7XG59O1xuXG5leHBvcnQge3R5cGUgT291aUNvbmZpcm1XaXRoU3R5bGUsIG9vdWlDb25maXJtV2l0aFN0eWxlfTtcbiIsICJ0eXBlIFNjcm9sbFRvcCA9IChcblx0dGFyZ2V0SGVpZ2h0OiBudW1iZXIgfCBzdHJpbmcsXG5cdGVmZmVjdHNPcHRpb25zT3JEdXJhdGlvbj86IEpRdWVyeS5FZmZlY3RzT3B0aW9uczxIVE1MRWxlbWVudD4gfCBudW1iZXIgfCAnZmFzdCcgfCAnc2xvdydcbikgPT4gdm9pZDtcblxuY29uc3Qgc2Nyb2xsVG9wOiBTY3JvbGxUb3AgPSAodGFyZ2V0SGVpZ2h0LCBlZmZlY3RzT3B0aW9uc09yRHVyYXRpb24gPSB7fSkgPT4ge1xuXHRjb25zdCBvcHRpb25zOiBKUXVlcnkuRWZmZWN0c09wdGlvbnM8SFRNTEVsZW1lbnQ+ID1cblx0XHR0eXBlb2YgZWZmZWN0c09wdGlvbnNPckR1cmF0aW9uID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgZWZmZWN0c09wdGlvbnNPckR1cmF0aW9uID09PSAnc3RyaW5nJ1xuXHRcdFx0PyB7XG5cdFx0XHRcdFx0ZHVyYXRpb246IGVmZmVjdHNPcHRpb25zT3JEdXJhdGlvbixcblx0XHRcdFx0XHRlYXNpbmc6ICdsaW5lYXInLFxuXHRcdFx0XHR9XG5cdFx0XHQ6IHtcblx0XHRcdFx0XHRkdXJhdGlvbjogJ3Nsb3cnLFxuXHRcdFx0XHRcdGVhc2luZzogJ2xpbmVhcicsXG5cdFx0XHRcdFx0Li4uZWZmZWN0c09wdGlvbnNPckR1cmF0aW9uLFxuXHRcdFx0XHR9O1xuXHQkKGRvY3VtZW50KS5maW5kKCdodG1sLCBib2R5JykuYW5pbWF0ZShcblx0XHR7XG5cdFx0XHRzY3JvbGxUb3A6IHRhcmdldEhlaWdodCxcblx0XHR9LFxuXHRcdG9wdGlvbnNcblx0KTtcbn07XG5cbmV4cG9ydCB7dHlwZSBTY3JvbGxUb3AsIHNjcm9sbFRvcH07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsZUFBQSxDQUFBO0FBQUFDLFNBQUFELGNBQUE7RUFBQUUsNkJBQUFBLE1BQUFBO0VBQUFDLG9DQUFBQSxNQUFBQTtFQUFBQyxxQkFBQUEsTUFBQUE7RUFBQUMsT0FBQUEsTUFBQUE7RUFBQUMsb0JBQUFBLE1BQUFBO0VBQUFDLFNBQUFBLE1BQUFBO0VBQUFDLFdBQUFBLE1BQUFBO0VBQUFDLFlBQUFBLE1BQUFBO0VBQUFDLHNCQUFBQSxNQUFBQTtFQUFBQyxXQUFBQSxNQUFBQTtBQUFBLENBQUE7QUFBQUMsT0FBQUMsVUFBQUMsYUFBQWQsWUFBQTs7QUM4Q0EsSUFBTUUsOEJBQTJEQSxDQUFDO0VBQUNhO0VBQVFDO0VBQU1DO0VBQVVDLFVBQVUsQ0FBQztBQUFDLE1BQU07QUFDNUdILFNBQU9JLGlCQUFpQkgsTUFBTUMsVUFBZ0RD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SUFBTXBELFlBQXVCQSxDQUFDcUQsY0FBY0MsMkJBQTJCLENBQUMsTUFBTTtBQUM3RSxRQUFNL0MsVUFDTCxPQUFPK0MsNkJBQTZCLFlBQVksT0FBT0EsNkJBQTZCLFdBQ2pGO0lBQ0FDLFVBQVVEO0lBQ1ZFLFFBQVE7RUFDVCxJQUNDO0lBQ0FELFVBQVU7SUFDVkMsUUFBUTtJQUNSLEdBQUdGO0VBQ0o7QUFDSHZCLElBQUUwQixRQUFRLEVBQUVDLEtBQUssWUFBWSxFQUFFQyxRQUM5QjtJQUNDM0QsV0FBV3FEO0VBQ1osR0FDQTlDLE9BQ0Q7QUFDRDsiLAogICJuYW1lcyI6IFsiVXRpbF9leHBvcnRzIiwgIl9fZXhwb3J0IiwgImFkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3ZlciIsICJjaGFuZ2VPcGFjaXR5V2hlbk1vdXNlRW50ZXJPckxlYXZlIiwgImNoZWNrQTExeUNvbmZpcm1LZXkiLCAiZGVsYXkiLCAiZ2VuZXJhdGVTdmdEYXRhVXJsIiwgImdldEJvZHkiLCAiaW5pdE13QXBpIiwgImlzVmFsaWRLZXkiLCAib291aUNvbmZpcm1XaXRoU3R5bGUiLCAic2Nyb2xsVG9wIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIl9fdG9Db21tb25KUyIsICJ0YXJnZXQiLCAidHlwZSIsICJsaXN0ZW5lciIsICJvcHRpb25zIiwgImFkZEV2ZW50TGlzdGVuZXIiLCAicmVtb3ZlIiwgInJlbW92ZUV2ZW50TGlzdGVuZXIiLCAiZXZlbnQiLCAib3BhY2l0eSIsICJjdXJyZW50VGFyZ2V0IiwgInN0eWxlIiwgInRvU3RyaW5nIiwgImluY2x1ZGVzIiwgImtleSIsICJtcyIsICJQcm9taXNlIiwgInJlc29sdmUiLCAic2V0VGltZW91dCIsICJzdmciLCAidHJpbSIsICJzbGljZSIsICJpbmRleE9mIiwgInN0YXJ0c1dpdGgiLCAiZW5kc1dpdGgiLCAicmVwbGFjZSIsICJlbmNvZGVVUklDb21wb25lbnQiLCAiY29uY2F0IiwgIiQiLCAicmVhZHkiLCAidGhlbiIsICIkYm9keSIsICJ1c2VyQWdlbnQiLCAibXciLCAiQXBpIiwgImFqYXgiLCAiaGVhZGVycyIsICJvYmplY3QiLCAibWVzc2FnZSIsICJPTyIsICJ1aSIsICJjb25maXJtIiwgImFkZENsYXNzIiwgImNzcyIsICJib3JkZXIiLCAiZGlzcGxheSIsICJhcHBlbmQiLCAicGFkZGluZyIsICJ0ZXh0IiwgImlzQ29uZmlybSIsICJ0YXJnZXRIZWlnaHQiLCAiZWZmZWN0c09wdGlvbnNPckR1cmF0aW9uIiwgImR1cmF0aW9uIiwgImVhc2luZyIsICJkb2N1bWVudCIsICJmaW5kIiwgImFuaW1hdGUiXQp9Cg==

})();

/* </nowiki> */

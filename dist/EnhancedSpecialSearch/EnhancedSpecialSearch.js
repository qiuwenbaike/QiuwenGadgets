/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/EnhancedSpecialSearch}
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

// dist/EnhancedSpecialSearch/EnhancedSpecialSearch.js
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
//! src/EnhancedSpecialSearch/EnhancedSpecialSearch.ts
var import_ext_gadget5 = require("ext.gadget.Util");
//! src/EnhancedSpecialSearch/modules/processElement.tsx
var import_ext_gadget4 = __toESM(require("ext.gadget.React"), 1);
//! src/EnhancedSpecialSearch/components/SelectElement.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.React"), 1);
//! src/EnhancedSpecialSearch/options.json
var siteDomain = "qiuwenbaike.cn";
//! src/EnhancedSpecialSearch/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Baidu: (0, import_ext_gadget.localize)({
      en: "Baidu",
      ja: "Baidu",
      zh: "百度"
    }),
    Bing: (0, import_ext_gadget.localize)({
      en: "Bing",
      "zh-hans": "必应",
      "zh-hant": "必應"
    }),
    Google: (0, import_ext_gadget.localize)({
      en: "Google",
      ja: "Google",
      zh: "谷歌"
    }),
    Qiuwen: (0, import_ext_gadget.localize)({
      en: "Qiuwen Baike",
      ja: "求聞百科",
      "zh-hans": "求闻百科",
      "zh-hant": "求聞百科"
    }),
    Sogou: (0, import_ext_gadget.localize)({
      en: "Sogou",
      ja: "Sogou",
      zh: "搜狗"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/EnhancedSpecialSearch/modules/getOptionData.ts
var getOptionData = () => {
  return [{
    site: getMessage("Qiuwen"),
    origin: true
  }, {
    site: getMessage("Baidu"),
    url: "https://www.baidu.com/s?wd=site%3A".concat(siteDomain, "%20$1")
  }, {
    site: getMessage("Bing"),
    url: "https://www.bing.com/search?q=site%3A".concat(siteDomain, "+$1")
  }, {
    site: getMessage("Google"),
    url: "https://www.google.com/search?q=site%3A".concat(siteDomain, "+$1")
  }, {
    site: getMessage("Sogou"),
    url: "https://www.sogou.com/web?query=site%3A".concat(siteDomain, "+$1")
  }, {
    site: "360",
    url: "https://www.so.com/s?q=site%3A".concat(siteDomain, "+$1")
  }];
};
//! src/EnhancedSpecialSearch/components/SelectElement.tsx
var SelectElement = () => /* @__PURE__ */ import_ext_gadget2.default.createElement("select", {
  className: "oo-ui-dropdownWidget-handle",
  id: "enhancedSpecialSearch",
  style: {
    width: "auto"
  }
}, getOptionData().map(({
  site,
  url,
  origin
}) => {
  const optionElement = new Option(site, url, origin);
  if (origin) {
    optionElement.dataset["origin"] = "1";
  }
  return optionElement;
}));
//! src/EnhancedSpecialSearch/modules/util/openPage.tsx
var import_ext_gadget3 = __toESM(require("ext.gadget.React"), 1);
var openPage = (url) => {
  const element = /* @__PURE__ */ import_ext_gadget3.default.createElement("a", {
    href: url,
    target: "_blank",
    rel: "noopener noreferrer"
  });
  element.click();
};
//! src/EnhancedSpecialSearch/modules/addListener.ts
var addListener = (targetElement, selectElement) => {
  targetElement.addEventListener("submit", (event) => {
    const inputElement = targetElement.querySelector('[type="search"]');
    if (!inputElement) {
      return;
    }
    const optionElement = selectElement.querySelector("option:checked");
    if (optionElement.dataset["origin"]) {
      return;
    }
    event.preventDefault();
    openPage(optionElement.value.replace("$1", encodeURIComponent(inputElement.value)));
  });
};
//! src/EnhancedSpecialSearch/modules/processElement.tsx
var processElement = (searchElement, targetElement) => {
  targetElement.setAttribute("style", "display:flex;flex-wrap:wrap;align-items:center");
  const selectElement = /* @__PURE__ */ import_ext_gadget4.default.createElement(SelectElement, null);
  targetElement.append(selectElement);
  addListener(searchElement, selectElement);
};
//! src/EnhancedSpecialSearch/EnhancedSpecialSearch.ts
void (0, import_ext_gadget5.getBody)().then(function enhancedSpecialSearch($body) {
  var _$body$find$get;
  const {
    wgCanonicalSpecialPageName
  } = mw.config.get();
  if (wgCanonicalSpecialPageName !== "Search") {
    return;
  }
  const searchElement = (_$body$find$get = $body.find("#search").get(0)) !== null && _$body$find$get !== void 0 ? _$body$find$get : $body.find("#powersearch").get(0);
  const targetElement = $body.find("#mw-search-top-table").get(0);
  if (!searchElement || !targetElement) {
    return;
  }
  processElement(searchElement, targetElement);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VuaGFuY2VkU3BlY2lhbFNlYXJjaC9FbmhhbmNlZFNwZWNpYWxTZWFyY2gudHMiLCAic3JjL0VuaGFuY2VkU3BlY2lhbFNlYXJjaC9tb2R1bGVzL3Byb2Nlc3NFbGVtZW50LnRzeCIsICJzcmMvRW5oYW5jZWRTcGVjaWFsU2VhcmNoL2NvbXBvbmVudHMvU2VsZWN0RWxlbWVudC50c3giLCAic3JjL0VuaGFuY2VkU3BlY2lhbFNlYXJjaC9vcHRpb25zLmpzb24iLCAic3JjL0VuaGFuY2VkU3BlY2lhbFNlYXJjaC9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0VuaGFuY2VkU3BlY2lhbFNlYXJjaC9tb2R1bGVzL2dldE9wdGlvbkRhdGEudHMiLCAic3JjL0VuaGFuY2VkU3BlY2lhbFNlYXJjaC9tb2R1bGVzL3V0aWwvb3BlblBhZ2UudHN4IiwgInNyYy9FbmhhbmNlZFNwZWNpYWxTZWFyY2gvbW9kdWxlcy9hZGRMaXN0ZW5lci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuaW1wb3J0IHtwcm9jZXNzRWxlbWVudH0gZnJvbSAnLi9tb2R1bGVzL3Byb2Nlc3NFbGVtZW50Jztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBlbmhhbmNlZFNwZWNpYWxTZWFyY2goJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCB7XG5cdGNvbnN0IHt3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGlmICh3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSAhPT0gJ1NlYXJjaCcpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBzZWFyY2hFbGVtZW50OiBIVE1MRWxlbWVudCB8IHVuZGVmaW5lZCA9ICRib2R5LmZpbmQoJyNzZWFyY2gnKS5nZXQoMCkgPz8gJGJvZHkuZmluZCgnI3Bvd2Vyc2VhcmNoJykuZ2V0KDApO1xuXHRjb25zdCB0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCB8IHVuZGVmaW5lZCA9ICRib2R5LmZpbmQoJyNtdy1zZWFyY2gtdG9wLXRhYmxlJykuZ2V0KDApO1xuXHRpZiAoIXNlYXJjaEVsZW1lbnQgfHwgIXRhcmdldEVsZW1lbnQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRwcm9jZXNzRWxlbWVudChzZWFyY2hFbGVtZW50LCB0YXJnZXRFbGVtZW50KTtcbn0pO1xuIiwgImltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7U2VsZWN0RWxlbWVudH0gZnJvbSAnLi4vY29tcG9uZW50cy9TZWxlY3RFbGVtZW50JztcbmltcG9ydCB7YWRkTGlzdGVuZXJ9IGZyb20gJy4vYWRkTGlzdGVuZXInO1xuXG5jb25zdCBwcm9jZXNzRWxlbWVudCA9IChzZWFyY2hFbGVtZW50OiBIVE1MRWxlbWVudCwgdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkID0+IHtcblx0dGFyZ2V0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6ZmxleDtmbGV4LXdyYXA6d3JhcDthbGlnbi1pdGVtczpjZW50ZXInKTtcblxuXHRjb25zdCBzZWxlY3RFbGVtZW50ID0gKDxTZWxlY3RFbGVtZW50IC8+KSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcblxuXHR0YXJnZXRFbGVtZW50LmFwcGVuZChzZWxlY3RFbGVtZW50KTtcblxuXHRhZGRMaXN0ZW5lcihzZWFyY2hFbGVtZW50LCBzZWxlY3RFbGVtZW50KTtcbn07XG5cbmV4cG9ydCB7cHJvY2Vzc0VsZW1lbnR9O1xuIiwgImltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7Z2V0T3B0aW9uRGF0YX0gZnJvbSAnLi4vbW9kdWxlcy9nZXRPcHRpb25EYXRhJztcblxuY29uc3QgU2VsZWN0RWxlbWVudCA9ICgpID0+IChcblx0PHNlbGVjdFxuXHRcdGNsYXNzTmFtZT1cIm9vLXVpLWRyb3Bkb3duV2lkZ2V0LWhhbmRsZVwiXG5cdFx0aWQ9XCJlbmhhbmNlZFNwZWNpYWxTZWFyY2hcIlxuXHRcdHN0eWxlPXt7XG5cdFx0XHR3aWR0aDogJ2F1dG8nLFxuXHRcdH19XG5cdD5cblx0XHR7Z2V0T3B0aW9uRGF0YSgpLm1hcDxIVE1MT3B0aW9uRWxlbWVudD4oKHtzaXRlLCB1cmwsIG9yaWdpbn0pID0+IHtcblx0XHRcdGNvbnN0IG9wdGlvbkVsZW1lbnQ6IEhUTUxPcHRpb25FbGVtZW50ID0gbmV3IE9wdGlvbihzaXRlLCB1cmwsIG9yaWdpbik7XG5cblx0XHRcdGlmIChvcmlnaW4pIHtcblx0XHRcdFx0b3B0aW9uRWxlbWVudC5kYXRhc2V0WydvcmlnaW4nXSA9ICcxJztcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG9wdGlvbkVsZW1lbnQ7XG5cdFx0fSl9XG5cdDwvc2VsZWN0PlxuKTtcblxuZXhwb3J0IHtTZWxlY3RFbGVtZW50fTtcbiIsICJ7XG5cdFwic2l0ZURvbWFpblwiOiBcInFpdXdlbmJhaWtlLmNuXCJcbn1cbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0QmFpZHU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQmFpZHUnLFxuXHRcdFx0amE6ICdCYWlkdScsXG5cdFx0XHR6aDogJ+eZvuW6picsXG5cdFx0fSksXG5cdFx0QmluZzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdCaW5nJyxcblx0XHRcdCd6aC1oYW5zJzogJ+W/heW6lCcsXG5cdFx0XHQnemgtaGFudCc6ICflv4Xmh4knLFxuXHRcdH0pLFxuXHRcdEdvb2dsZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdHb29nbGUnLFxuXHRcdFx0amE6ICdHb29nbGUnLFxuXHRcdFx0emg6ICfosLfmrYwnLFxuXHRcdH0pLFxuXHRcdFFpdXdlbjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdRaXV3ZW4gQmFpa2UnLFxuXHRcdFx0amE6ICfmsYLogZ7nmb7np5EnLFxuXHRcdFx0J3poLWhhbnMnOiAn5rGC6Ze755m+56eRJyxcblx0XHRcdCd6aC1oYW50JzogJ+axguiBnueZvuenkScsXG5cdFx0fSksXG5cdFx0U29nb3U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU29nb3UnLFxuXHRcdFx0amE6ICdTb2dvdScsXG5cdFx0XHR6aDogJ+aQnOeLlycsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxudHlwZSBPcHRpb25EYXRhID0ge1xuXHRzaXRlOiBzdHJpbmc7XG5cdHVybD86IHN0cmluZztcblx0b3JpZ2luPzogYm9vbGVhbjtcbn07XG5cbmNvbnN0IGdldE9wdGlvbkRhdGEgPSAoKTogT3B0aW9uRGF0YVtdID0+IHtcblx0cmV0dXJuIFtcblx0XHR7XG5cdFx0XHRzaXRlOiBnZXRNZXNzYWdlKCdRaXV3ZW4nKSxcblx0XHRcdG9yaWdpbjogdHJ1ZSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdHNpdGU6IGdldE1lc3NhZ2UoJ0JhaWR1JyksXG5cdFx0XHR1cmw6IGBodHRwczovL3d3dy5iYWlkdS5jb20vcz93ZD1zaXRlJTNBJHtPUFRJT05TLnNpdGVEb21haW59JTIwJDFgLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0c2l0ZTogZ2V0TWVzc2FnZSgnQmluZycpLFxuXHRcdFx0dXJsOiBgaHR0cHM6Ly93d3cuYmluZy5jb20vc2VhcmNoP3E9c2l0ZSUzQSR7T1BUSU9OUy5zaXRlRG9tYWlufSskMWAsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRzaXRlOiBnZXRNZXNzYWdlKCdHb29nbGUnKSxcblx0XHRcdHVybDogYGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vc2VhcmNoP3E9c2l0ZSUzQSR7T1BUSU9OUy5zaXRlRG9tYWlufSskMWAsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRzaXRlOiBnZXRNZXNzYWdlKCdTb2dvdScpLFxuXHRcdFx0dXJsOiBgaHR0cHM6Ly93d3cuc29nb3UuY29tL3dlYj9xdWVyeT1zaXRlJTNBJHtPUFRJT05TLnNpdGVEb21haW59KyQxYCxcblx0XHR9LFxuXHRcdHtcblx0XHRcdHNpdGU6ICczNjAnLFxuXHRcdFx0dXJsOiBgaHR0cHM6Ly93d3cuc28uY29tL3M/cT1zaXRlJTNBJHtPUFRJT05TLnNpdGVEb21haW59KyQxYCxcblx0XHR9LFxuXHRdO1xufTtcblxuZXhwb3J0IHt0eXBlIE9wdGlvbkRhdGEsIGdldE9wdGlvbkRhdGF9O1xuIiwgImltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcblxuY29uc3Qgb3BlblBhZ2UgPSAodXJsOiBzdHJpbmcpOiB2b2lkID0+IHtcblx0Y29uc3QgZWxlbWVudCA9ICg8YSBocmVmPXt1cmx9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiAvPikgYXMgSFRNTEFuY2hvckVsZW1lbnQ7XG5cblx0ZWxlbWVudC5jbGljaygpO1xufTtcblxuZXhwb3J0IHtvcGVuUGFnZX07XG4iLCAiaW1wb3J0IHtvcGVuUGFnZX0gZnJvbSAnLi91dGlsL29wZW5QYWdlJztcblxuY29uc3QgYWRkTGlzdGVuZXIgPSAodGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQsIHNlbGVjdEVsZW1lbnQ6IEhUTUxTZWxlY3RFbGVtZW50KTogdm9pZCA9PiB7XG5cdHRhcmdldEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50OiBTdWJtaXRFdmVudCk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0IGlucHV0RWxlbWVudDogSFRNTElucHV0RWxlbWVudCB8IG51bGwgPSB0YXJnZXRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1t0eXBlPVwic2VhcmNoXCJdJyk7XG5cdFx0aWYgKCFpbnB1dEVsZW1lbnQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBvcHRpb25FbGVtZW50OiBIVE1MT3B0aW9uRWxlbWVudCA9IHNlbGVjdEVsZW1lbnQucXVlcnlTZWxlY3Rvcignb3B0aW9uOmNoZWNrZWQnKSBhcyBIVE1MT3B0aW9uRWxlbWVudDtcblx0XHRpZiAob3B0aW9uRWxlbWVudC5kYXRhc2V0WydvcmlnaW4nXSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0b3BlblBhZ2Uob3B0aW9uRWxlbWVudC52YWx1ZS5yZXBsYWNlKCckMScsIGVuY29kZVVSSUNvbXBvbmVudChpbnB1dEVsZW1lbnQudmFsdWUpKSk7XG5cdH0pO1xufTtcblxuZXhwb3J0IHthZGRMaXN0ZW5lcn07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBc0JDLFFBQUEsaUJBQUE7O0FDQXRCLElBQUFDLHFCQUFrQkMsUUFBQUYsUUFBQSxrQkFBQSxHQUFBLENBQUE7O0FDQWxCLElBQUFHLHFCQUFrQkQsUUFBQUYsUUFBQSxrQkFBQSxHQUFBLENBQUE7O0FDQ2pCLElBQUFJLGFBQWM7O0FDRGYsSUFBQUMsb0JBQXVCTCxRQUFBLGlCQUFBO0FBRXZCLElBQU1NLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLFFBQUEsR0FBT0Ysa0JBQUFHLFVBQVM7TUFD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T1osYUFBYTtBQUVsQ0YsY0FBWVksZUFBZVYsYUFBYTtBQUN6Qzs7QURUQSxNQUFBLEdBQUs3QyxtQkFBQTBELFNBQVEsRUFBRUMsS0FBSyxTQUFTQyxzQkFBc0JDLE9BQXNDO0FBQUEsTUFBQUM7QUFDeEYsUUFBTTtJQUFDQztFQUEwQixJQUFJQyxHQUFHQyxPQUFPQyxJQUFJO0FBQ25ELE1BQUlILCtCQUErQixVQUFVO0FBQzVDO0VBQ0Q7QUFFQSxRQUFNUixpQkFBQU8sa0JBQXlDRCxNQUFNTSxLQUFLLFNBQVMsRUFBRUQsSUFBSSxDQUFDLE9BQUEsUUFBQUosb0JBQUEsU0FBQUEsa0JBQUtELE1BQU1NLEtBQUssY0FBYyxFQUFFRCxJQUFJLENBQUM7QUFDL0csUUFBTXRCLGdCQUF5Q2lCLE1BQU1NLEtBQUssc0JBQXNCLEVBQUVELElBQUksQ0FBQztBQUN2RixNQUFJLENBQUNYLGlCQUFpQixDQUFDWCxlQUFlO0FBQ3JDO0VBQ0Q7QUFFQVUsaUJBQWVDLGVBQWVYLGFBQWE7QUFDNUMsQ0FBQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQ1IiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgIl9fdG9FU00iLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInNpdGVEb21haW4iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkJhaWR1IiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgInpoIiwgIkJpbmciLCAiR29vZ2xlIiwgIlFpdXdlbiIsICJTb2dvdSIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiZ2V0T3B0aW9uRGF0YSIsICJzaXRlIiwgIm9yaWdpbiIsICJ1cmwiLCAiY29uY2F0IiwgIlNlbGVjdEVsZW1lbnQiLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgImNsYXNzTmFtZSIsICJpZCIsICJzdHlsZSIsICJ3aWR0aCIsICJtYXAiLCAib3B0aW9uRWxlbWVudCIsICJPcHRpb24iLCAiZGF0YXNldCIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAib3BlblBhZ2UiLCAiZWxlbWVudCIsICJocmVmIiwgInRhcmdldCIsICJyZWwiLCAiY2xpY2siLCAiYWRkTGlzdGVuZXIiLCAidGFyZ2V0RWxlbWVudCIsICJzZWxlY3RFbGVtZW50IiwgImFkZEV2ZW50TGlzdGVuZXIiLCAiZXZlbnQiLCAiaW5wdXRFbGVtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAicHJldmVudERlZmF1bHQiLCAidmFsdWUiLCAicmVwbGFjZSIsICJlbmNvZGVVUklDb21wb25lbnQiLCAicHJvY2Vzc0VsZW1lbnQiLCAic2VhcmNoRWxlbWVudCIsICJzZXRBdHRyaWJ1dGUiLCAiYXBwZW5kIiwgImdldEJvZHkiLCAidGhlbiIsICJlbmhhbmNlZFNwZWNpYWxTZWFyY2giLCAiJGJvZHkiLCAiXyRib2R5JGZpbmQkZ2V0IiwgIndnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiZmluZCJdCn0K

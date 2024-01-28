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
//! src/EnhancedSpecialSearch/modules/constant.ts
var WG_CANONICAL_SPECIAL_PAGE_NAME = mw.config.get("wgCanonicalSpecialPageName");
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
}, getOptionData().reduce((accumulator, {
  site,
  url,
  origin
}) => {
  const optionElement = new Option(site, url, origin);
  if (origin) {
    optionElement.dataset["origin"] = "1";
  }
  accumulator[accumulator.length] = optionElement;
  return accumulator;
}, []));
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
  if (WG_CANONICAL_SPECIAL_PAGE_NAME !== "Search") {
    return;
  }
  const searchElement = (_$body$find$get = $body.find("#search").get(0)) !== null && _$body$find$get !== void 0 ? _$body$find$get : $body.find("#powersearch").get(0);
  const targetElement = $body.find("#mw-search-top-table").get(0);
  if (!searchElement || !targetElement) {
    return;
  }
  processElement(searchElement, targetElement);
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VuaGFuY2VkU3BlY2lhbFNlYXJjaC9tb2R1bGVzL2NvbnN0YW50LnRzIiwgInNyYy9FbmhhbmNlZFNwZWNpYWxTZWFyY2gvRW5oYW5jZWRTcGVjaWFsU2VhcmNoLnRzIiwgInNyYy9FbmhhbmNlZFNwZWNpYWxTZWFyY2gvbW9kdWxlcy9wcm9jZXNzRWxlbWVudC50c3giLCAic3JjL0VuaGFuY2VkU3BlY2lhbFNlYXJjaC9jb21wb25lbnRzL1NlbGVjdEVsZW1lbnQudHN4IiwgInNyYy9FbmhhbmNlZFNwZWNpYWxTZWFyY2gvb3B0aW9ucy5qc29uIiwgInNyYy9FbmhhbmNlZFNwZWNpYWxTZWFyY2gvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9FbmhhbmNlZFNwZWNpYWxTZWFyY2gvbW9kdWxlcy9nZXRPcHRpb25EYXRhLnRzIiwgInNyYy9FbmhhbmNlZFNwZWNpYWxTZWFyY2gvbW9kdWxlcy91dGlsL29wZW5QYWdlLnRzeCIsICJzcmMvRW5oYW5jZWRTcGVjaWFsU2VhcmNoL21vZHVsZXMvYWRkTGlzdGVuZXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IFdHX0NBTk9OSUNBTF9TUEVDSUFMX1BBR0VfTkFNRTogc3RyaW5nIHwgZmFsc2UgPSBtdy5jb25maWcuZ2V0KCd3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZScpO1xuXG5leHBvcnQge1dHX0NBTk9OSUNBTF9TUEVDSUFMX1BBR0VfTkFNRX07XG4iLCAiaW1wb3J0IHtXR19DQU5PTklDQUxfU1BFQ0lBTF9QQUdFX05BTUV9IGZyb20gJy4vbW9kdWxlcy9jb25zdGFudCc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3Byb2Nlc3NFbGVtZW50fSBmcm9tICcuL21vZHVsZXMvcHJvY2Vzc0VsZW1lbnQnO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIGVuaGFuY2VkU3BlY2lhbFNlYXJjaCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0aWYgKFdHX0NBTk9OSUNBTF9TUEVDSUFMX1BBR0VfTkFNRSAhPT0gJ1NlYXJjaCcpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBzZWFyY2hFbGVtZW50OiBIVE1MRWxlbWVudCB8IHVuZGVmaW5lZCA9ICRib2R5LmZpbmQoJyNzZWFyY2gnKS5nZXQoMCkgPz8gJGJvZHkuZmluZCgnI3Bvd2Vyc2VhcmNoJykuZ2V0KDApO1xuXHRjb25zdCB0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCB8IHVuZGVmaW5lZCA9ICRib2R5LmZpbmQoJyNtdy1zZWFyY2gtdG9wLXRhYmxlJykuZ2V0KDApO1xuXHRpZiAoIXNlYXJjaEVsZW1lbnQgfHwgIXRhcmdldEVsZW1lbnQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRwcm9jZXNzRWxlbWVudChzZWFyY2hFbGVtZW50LCB0YXJnZXRFbGVtZW50KTtcbn0pO1xuIiwgImltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7U2VsZWN0RWxlbWVudH0gZnJvbSAnLi4vY29tcG9uZW50cy9TZWxlY3RFbGVtZW50JztcbmltcG9ydCB7YWRkTGlzdGVuZXJ9IGZyb20gJy4vYWRkTGlzdGVuZXInO1xuXG5jb25zdCBwcm9jZXNzRWxlbWVudCA9IChzZWFyY2hFbGVtZW50OiBIVE1MRWxlbWVudCwgdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkID0+IHtcblx0dGFyZ2V0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6ZmxleDtmbGV4LXdyYXA6d3JhcDthbGlnbi1pdGVtczpjZW50ZXInKTtcblxuXHRjb25zdCBzZWxlY3RFbGVtZW50ID0gKDxTZWxlY3RFbGVtZW50IC8+KSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcblxuXHR0YXJnZXRFbGVtZW50LmFwcGVuZChzZWxlY3RFbGVtZW50KTtcblxuXHRhZGRMaXN0ZW5lcihzZWFyY2hFbGVtZW50LCBzZWxlY3RFbGVtZW50KTtcbn07XG5cbmV4cG9ydCB7cHJvY2Vzc0VsZW1lbnR9O1xuIiwgImltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7Z2V0T3B0aW9uRGF0YX0gZnJvbSAnLi4vbW9kdWxlcy9nZXRPcHRpb25EYXRhJztcblxuY29uc3QgU2VsZWN0RWxlbWVudCA9ICgpID0+IChcblx0PHNlbGVjdFxuXHRcdGNsYXNzTmFtZT1cIm9vLXVpLWRyb3Bkb3duV2lkZ2V0LWhhbmRsZVwiXG5cdFx0aWQ9XCJlbmhhbmNlZFNwZWNpYWxTZWFyY2hcIlxuXHRcdHN0eWxlPXt7XG5cdFx0XHR3aWR0aDogJ2F1dG8nLFxuXHRcdH19XG5cdD5cblx0XHR7Z2V0T3B0aW9uRGF0YSgpLnJlZHVjZSgoYWNjdW11bGF0b3IsIHtzaXRlLCB1cmwsIG9yaWdpbn0pID0+IHtcblx0XHRcdGNvbnN0IG9wdGlvbkVsZW1lbnQ6IEhUTUxPcHRpb25FbGVtZW50ID0gbmV3IE9wdGlvbihzaXRlLCB1cmwsIG9yaWdpbik7XG5cblx0XHRcdGlmIChvcmlnaW4pIHtcblx0XHRcdFx0b3B0aW9uRWxlbWVudC5kYXRhc2V0WydvcmlnaW4nXSA9ICcxJztcblx0XHRcdH1cblxuXHRcdFx0YWNjdW11bGF0b3JbYWNjdW11bGF0b3IubGVuZ3RoXSA9IG9wdGlvbkVsZW1lbnQ7XG5cblx0XHRcdHJldHVybiBhY2N1bXVsYXRvcjtcblx0XHR9LCBbXSBhcyBIVE1MT3B0aW9uRWxlbWVudFtdKX1cblx0PC9zZWxlY3Q+XG4pO1xuXG5leHBvcnQge1NlbGVjdEVsZW1lbnR9O1xuIiwgIntcblx0XCJzaXRlRG9tYWluXCI6IFwicWl1d2VuYmFpa2UuY25cIlxufVxuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRCYWlkdTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdCYWlkdScsXG5cdFx0XHRqYTogJ0JhaWR1Jyxcblx0XHRcdHpoOiAn55m+5bqmJyxcblx0XHR9KSxcblx0XHRCaW5nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0JpbmcnLFxuXHRcdFx0J3poLWhhbnMnOiAn5b+F5bqUJyxcblx0XHRcdCd6aC1oYW50JzogJ+W/heaHiScsXG5cdFx0fSksXG5cdFx0R29vZ2xlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0dvb2dsZScsXG5cdFx0XHRqYTogJ0dvb2dsZScsXG5cdFx0XHR6aDogJ+iwt+atjCcsXG5cdFx0fSksXG5cdFx0UWl1d2VuOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1FpdXdlbiBCYWlrZScsXG5cdFx0XHRqYTogJ+axguiBnueZvuenkScsXG5cdFx0XHQnemgtaGFucyc6ICfmsYLpl7vnmb7np5EnLFxuXHRcdFx0J3poLWhhbnQnOiAn5rGC6IGe55m+56eRJyxcblx0XHR9KSxcblx0XHRTb2dvdTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTb2dvdScsXG5cdFx0XHRqYTogJ1NvZ291Jyxcblx0XHRcdHpoOiAn5pCc54uXJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG50eXBlIE9wdGlvbkRhdGEgPSB7XG5cdHNpdGU6IHN0cmluZztcblx0dXJsPzogc3RyaW5nO1xuXHRvcmlnaW4/OiBib29sZWFuO1xufTtcblxuY29uc3QgZ2V0T3B0aW9uRGF0YSA9ICgpOiBPcHRpb25EYXRhW10gPT4ge1xuXHRyZXR1cm4gW1xuXHRcdHtcblx0XHRcdHNpdGU6IGdldE1lc3NhZ2UoJ1FpdXdlbicpLFxuXHRcdFx0b3JpZ2luOiB0cnVlLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0c2l0ZTogZ2V0TWVzc2FnZSgnQmFpZHUnKSxcblx0XHRcdHVybDogYGh0dHBzOi8vd3d3LmJhaWR1LmNvbS9zP3dkPXNpdGUlM0Eke09QVElPTlMuc2l0ZURvbWFpbn0lMjAkMWAsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRzaXRlOiBnZXRNZXNzYWdlKCdCaW5nJyksXG5cdFx0XHR1cmw6IGBodHRwczovL3d3dy5iaW5nLmNvbS9zZWFyY2g/cT1zaXRlJTNBJHtPUFRJT05TLnNpdGVEb21haW59KyQxYCxcblx0XHR9LFxuXHRcdHtcblx0XHRcdHNpdGU6IGdldE1lc3NhZ2UoJ0dvb2dsZScpLFxuXHRcdFx0dXJsOiBgaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9zZWFyY2g/cT1zaXRlJTNBJHtPUFRJT05TLnNpdGVEb21haW59KyQxYCxcblx0XHR9LFxuXHRcdHtcblx0XHRcdHNpdGU6IGdldE1lc3NhZ2UoJ1NvZ291JyksXG5cdFx0XHR1cmw6IGBodHRwczovL3d3dy5zb2dvdS5jb20vd2ViP3F1ZXJ5PXNpdGUlM0Eke09QVElPTlMuc2l0ZURvbWFpbn0rJDFgLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0c2l0ZTogJzM2MCcsXG5cdFx0XHR1cmw6IGBodHRwczovL3d3dy5zby5jb20vcz9xPXNpdGUlM0Eke09QVElPTlMuc2l0ZURvbWFpbn0rJDFgLFxuXHRcdH0sXG5cdF07XG59O1xuXG5leHBvcnQge3R5cGUgT3B0aW9uRGF0YSwgZ2V0T3B0aW9uRGF0YX07XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuXG5jb25zdCBvcGVuUGFnZSA9ICh1cmw6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRjb25zdCBlbGVtZW50ID0gKDxhIGhyZWY9e3VybH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIC8+KSBhcyBIVE1MQW5jaG9yRWxlbWVudDtcblxuXHRlbGVtZW50LmNsaWNrKCk7XG59O1xuXG5leHBvcnQge29wZW5QYWdlfTtcbiIsICJpbXBvcnQge29wZW5QYWdlfSBmcm9tICcuL3V0aWwvb3BlblBhZ2UnO1xuXG5jb25zdCBhZGRMaXN0ZW5lciA9ICh0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCwgc2VsZWN0RWxlbWVudDogSFRNTFNlbGVjdEVsZW1lbnQpOiB2b2lkID0+IHtcblx0dGFyZ2V0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQ6IFN1Ym1pdEV2ZW50KTogdm9pZCA9PiB7XG5cdFx0Y29uc3QgaW5wdXRFbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbCA9IHRhcmdldEVsZW1lbnQucXVlcnlTZWxlY3RvcignW3R5cGU9XCJzZWFyY2hcIl0nKTtcblx0XHRpZiAoIWlucHV0RWxlbWVudCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IG9wdGlvbkVsZW1lbnQ6IEhUTUxPcHRpb25FbGVtZW50ID0gc2VsZWN0RWxlbWVudC5xdWVyeVNlbGVjdG9yKCdvcHRpb246Y2hlY2tlZCcpIGFzIEhUTUxPcHRpb25FbGVtZW50O1xuXHRcdGlmIChvcHRpb25FbGVtZW50LmRhdGFzZXRbJ29yaWdpbiddKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRvcGVuUGFnZShvcHRpb25FbGVtZW50LnZhbHVlLnJlcGxhY2UoJyQxJywgZW5jb2RlVVJJQ29tcG9uZW50KGlucHV0RWxlbWVudC52YWx1ZSkpKTtcblx0fSk7XG59O1xuXG5leHBvcnQge2FkZExpc3RlbmVyfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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aUJBQWlCO0FBQzNGLFFBQUksQ0FBQ0QsY0FBYztBQUNsQjtJQUNEO0FBRUEsVUFBTWhCLGdCQUFtQ2EsY0FBY0ksY0FBYyxnQkFBZ0I7QUFDckYsUUFBSWpCLGNBQWNFLFFBQVEsUUFBUSxHQUFHO0FBQ3BDO0lBQ0Q7QUFFQWEsVUFBTUcsZUFBZTtBQUNyQmIsYUFBU0wsY0FBY21CLE1BQU1DLFFBQVEsTUFBTUMsbUJBQW1CTCxhQUFhRyxLQUFLLENBQUMsQ0FBQztFQUNuRixDQUFDO0FBQ0Y7O0FOYkEsSUFBTUcsaUJBQWlCQSxDQUFDQyxlQUE0Qlgsa0JBQXFDO0FBQ3hGQSxnQkFBY1ksYUFBYSxTQUFTLGdEQUFnRDtBQUVwRixRQUFNWCxnQkFBaUI3QyxtQ0FBQXdCLFFBQUFDLGNBQUNGLGVBQUEsSUFBYztBQUV0Q3FCLGdCQUFjYSxPQUFPWixhQUFhO0FBRWxDRixjQUFZWSxlQUFlVixhQUFhO0FBQ3pDOztBRFJBLE1BQUEsR0FBSy9DLG1CQUFBNEQsU0FBUSxFQUFFQyxLQUFLLFNBQVNDLHNCQUFzQkMsT0FBc0M7QUFBQSxNQUFBQztBQUN4RixNQUFJcEUsbUNBQW1DLFVBQVU7QUFDaEQ7RUFDRDtBQUVBLFFBQU02RCxpQkFBQU8sa0JBQXlDRCxNQUFNRSxLQUFLLFNBQVMsRUFBRWxFLElBQUksQ0FBQyxPQUFBLFFBQUFpRSxvQkFBQSxTQUFBQSxrQkFBS0QsTUFBTUUsS0FBSyxjQUFjLEVBQUVsRSxJQUFJLENBQUM7QUFDL0csUUFBTStDLGdCQUF5Q2lCLE1BQU1FLEtBQUssc0JBQXNCLEVBQUVsRSxJQUFJLENBQUM7QUFDdkYsTUFBSSxDQUFDMEQsaUJBQWlCLENBQUNYLGVBQWU7QUFDckM7RUFDRDtBQUVBVSxpQkFBZUMsZUFBZVgsYUFBYTtBQUM1QyxDQUFDOyIsCiAgIm5hbWVzIjogWyJXR19DQU5PTklDQUxfU1BFQ0lBTF9QQUdFX05BTUUiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJpbXBvcnRfZXh0X2dhZGdldDUiLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAiX190b0VTTSIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAic2l0ZURvbWFpbiIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAiQmFpZHUiLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiemgiLCAiQmluZyIsICJHb29nbGUiLCAiUWl1d2VuIiwgIlNvZ291IiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJnZXRPcHRpb25EYXRhIiwgInNpdGUiLCAib3JpZ2luIiwgInVybCIsICJjb25jYXQiLCAiU2VsZWN0RWxlbWVudCIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiY2xhc3NOYW1lIiwgImlkIiwgInN0eWxlIiwgIndpZHRoIiwgInJlZHVjZSIsICJhY2N1bXVsYXRvciIsICJvcHRpb25FbGVtZW50IiwgIk9wdGlvbiIsICJkYXRhc2V0IiwgImxlbmd0aCIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAib3BlblBhZ2UiLCAiZWxlbWVudCIsICJocmVmIiwgInRhcmdldCIsICJyZWwiLCAiY2xpY2siLCAiYWRkTGlzdGVuZXIiLCAidGFyZ2V0RWxlbWVudCIsICJzZWxlY3RFbGVtZW50IiwgImFkZEV2ZW50TGlzdGVuZXIiLCAiZXZlbnQiLCAiaW5wdXRFbGVtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAicHJldmVudERlZmF1bHQiLCAidmFsdWUiLCAicmVwbGFjZSIsICJlbmNvZGVVUklDb21wb25lbnQiLCAicHJvY2Vzc0VsZW1lbnQiLCAic2VhcmNoRWxlbWVudCIsICJzZXRBdHRyaWJ1dGUiLCAiYXBwZW5kIiwgImdldEJvZHkiLCAidGhlbiIsICJlbmhhbmNlZFNwZWNpYWxTZWFyY2giLCAiJGJvZHkiLCAiXyRib2R5JGZpbmQkZ2V0IiwgImZpbmQiXQp9Cg==

})();

/* </nowiki> */
